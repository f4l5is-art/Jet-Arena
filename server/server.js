// Lobby + game server. Serves the built game (dist/) and RUNS every online match itself (dedicated
// server): players only send inputs and draw the snapshots they get back. Hotspot play does not use this.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { Room, MAX_HUMANS } from './room.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
};
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I/O to avoid mixups

export function startServer(port = 8080, root = ROOT) {
  const rooms = new Map(); // code -> { code, name, pub, host, peers: Map<pid, ws>, nextPid }

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://x');
    if (url.pathname === '/health') { res.writeHead(200); res.end('ok'); return; }
    let rel = decodeURIComponent(url.pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(root, path.normalize(rel));
    if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
    try {
      if (!(await stat(file)).isFile()) throw new Error('nf');
      const buf = await readFile(file);
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': file.endsWith('sw.js') ? 'no-cache' : 'public, max-age=300',
      });
      res.end(buf);
    } catch {
      res.writeHead(404); res.end('Not found');
    }
  });

  const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 16 * 1024 });
  const send = (ws, obj) => { if (ws.readyState === 1) ws.send(JSON.stringify(obj)); };
  const cleanName = (n) => String(n || 'Player').replace(/[^\w \-.]/g, '').slice(0, 14) || 'Player';

  function newCode() {
    for (let tries = 0; tries < 50; tries++) {
      let c = '';
      for (let i = 0; i < 4; i++) c += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      if (!rooms.has(c)) return c;
    }
    return null;
  }

  function leave(ws) {
    const room = ws.room;
    if (!room) return;
    ws.room = null;
    room.remove(ws.pid);
  }

  function dropRoom(room) { room.close(); rooms.delete(room.code); }

  wss.on('connection', (ws) => {
    ws.alive = true; ws.room = null; ws.pid = 0; ws.budget = 200; ws.lastRefill = Date.now();
    ws.on('pong', () => { ws.alive = true; });
    ws.on('close', () => leave(ws));
    ws.on('error', () => {});
    ws.on('message', (raw) => {
      // Simple token bucket: ~200 msgs burst, refilled at 120/s.
      const now = Date.now();
      ws.budget = Math.min(200, ws.budget + ((now - ws.lastRefill) / 1000) * 120);
      ws.lastRefill = now;
      if (--ws.budget < 0) return;
      let m;
      try { m = JSON.parse(raw); } catch { return; }
      if (!m || typeof m.t !== 'string') return;

      switch (m.t) {
        case 'create': {
          leave(ws);
          if (rooms.size >= 40) return send(ws, { t: 'error', msg: 'Server is full' });
          const code = newCode();
          if (!code) return send(ws, { t: 'error', msg: 'Server is full' });
          const room = new Room(code, { name: cleanName(m.name) + "'s room", pub: m.pub !== false, mode: m.mode });
          room.onEmpty = dropRoom;
          rooms.set(code, room);
          ws.room = room; ws.pid = room.add(ws, cleanName(m.name));
          send(ws, { t: 'joined', code, pid: ws.pid, owner: true });
          room.announce(ws.pid, cleanName(m.name));
          break;
        }
        case 'join': {
          leave(ws);
          const room = rooms.get(String(m.code || '').toUpperCase());
          if (!room) return send(ws, { t: 'error', msg: 'Room not found' });
          if (room.humans() >= MAX_HUMANS) return send(ws, { t: 'error', msg: 'Room is full' });
          ws.room = room; ws.pid = room.add(ws, cleanName(m.name));
          send(ws, { t: 'joined', code: room.code, pid: ws.pid, owner: ws.pid === room.session.ownerPid });
          room.announce(ws.pid, cleanName(m.name));
          break;
        }
        case 'list': {
          const list = [];
          for (const r of rooms.values()) if (r.pub) list.push({ code: r.code, name: r.name, players: r.humans(), max: MAX_HUMANS });
          send(ws, { t: 'rooms', rooms: list });
          break;
        }
        case 'up': // player -> the room's match
          if (ws.room) ws.room.up(ws.pid, m.d);
          break;
        default:
      }
    });
  });

  const beat = setInterval(() => {
    for (const ws of wss.clients) {
      if (!ws.alive) { ws.terminate(); continue; }
      ws.alive = false; ws.ping();
    }
  }, 15000);
  wss.on('close', () => clearInterval(beat));

  return new Promise((resolve) => {
    server.listen(port, () => resolve({
      port: server.address().port, rooms,
      close: () => new Promise((r) => { clearInterval(beat); for (const room of rooms.values()) room.close(); for (const c of wss.clients) c.terminate(); wss.close(); server.close(() => r()); }),
    }));
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT) || 8080;
  startServer(port).then((s) => console.log(`Jet Arena server on http://localhost:${s.port}`));
}
