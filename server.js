// Lobby + relay server. Serves the built game (dist/) and relays messages between
// the host of a room and its joiners over WebSocket. All game logic runs on the host.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const MAX_PLAYERS = 8;
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
    if (room.host === ws) {
      for (const p of room.peers.values()) { send(p, { t: 'closed' }); p.room = null; }
      rooms.delete(room.code);
    } else {
      room.peers.delete(ws.pid);
      send(room.host, { t: 'left', pid: ws.pid });
    }
  }

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
          const code = newCode();
          if (!code) return send(ws, { t: 'error', msg: 'Server is full' });
          const room = { code, name: cleanName(m.name) + "'s room", pub: m.pub !== false, host: ws, peers: new Map(), nextPid: 1 };
          rooms.set(code, room); ws.room = room; ws.pid = 0;
          send(ws, { t: 'created', code });
          break;
        }
        case 'join': {
          leave(ws);
          const room = rooms.get(String(m.code || '').toUpperCase());
          if (!room) return send(ws, { t: 'error', msg: 'Room not found' });
          if (room.peers.size + 1 >= MAX_PLAYERS) return send(ws, { t: 'error', msg: 'Room is full' });
          const pid = room.nextPid++;
          ws.room = room; ws.pid = pid; room.peers.set(pid, ws);
          send(ws, { t: 'joined', code: room.code, pid });
          send(room.host, { t: 'peer', pid, name: cleanName(m.name) });
          break;
        }
        case 'list': {
          const list = [];
          for (const r of rooms.values()) if (r.pub) list.push({ code: r.code, name: r.name, players: r.peers.size + 1, max: MAX_PLAYERS });
          send(ws, { t: 'rooms', rooms: list });
          break;
        }
        case 'up': // joiner -> host
          if (ws.room && ws.room.host !== ws) send(ws.room.host, { t: 'from', pid: ws.pid, d: m.d });
          break;
        case 'to': // host -> one joiner (pid) or everyone (pid 0)
          if (ws.room && ws.room.host === ws) {
            if (m.pid) { const p = ws.room.peers.get(m.pid); if (p) send(p, { t: 'd', d: m.d }); }
            else for (const p of ws.room.peers.values()) send(p, { t: 'd', d: m.d });
          }
          break;
        case 'meta': // host updates room name / visibility
          if (ws.room && ws.room.host === ws) { if (typeof m.pub === 'boolean') ws.room.pub = m.pub; }
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
      close: () => new Promise((r) => { clearInterval(beat); for (const c of wss.clients) c.terminate(); wss.close(); server.close(() => r()); }),
    }));
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT) || 8080;
  startServer(port).then((s) => console.log(`Jet Arena server on http://localhost:${s.port}`));
}
