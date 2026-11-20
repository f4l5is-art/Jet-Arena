// A room runs the whole match on the server (like a dedicated server): nobody's phone is the host, so a
// phone locking, dropping signal or overheating can't end the game for everyone else.
import { HostSession } from '../src/session.js';
import { setMapKind } from '../src/core.js';

export const IDLE = { ms: 45000 }; // a room with nobody in it goes away after this long
export const MAX_HUMANS = 8;

export class Room {
  constructor(code, { name, pub, mode }) {
    this.code = code; this.name = name; this.pub = pub;
    this.mode = mode === 'survival' || mode === 'relax' ? mode : 'arena';
    this.peers = new Map(); // pid -> ws
    this.nextPid = 1;
    this.emptySince = Date.now();
    this.closed = false;
    const room = this;
    this.net = { // the interface HostSession expects
      mode: 'online',
      onPeer() {}, onLeave() {}, onMsg() {}, onClose() {},
      sendTo(pid, obj) { const ws = room.peers.get(pid); if (ws) room.out(ws, obj); },
      broadcast(obj) { const s = JSON.stringify({ t: 'd', d: obj }); for (const ws of room.peers.values()) if (ws.readyState === 1) ws.send(s); },
      close() {},
    };
    this.setMap();
    this.session = new HostSession({ dedicated: true, bots: this.mode === 'arena' ? 4 : 0, mode: this.mode, net: this.net });
    this.last = process.hrtime.bigint();
    this.timer = setInterval(() => this.tick(), 1000 / 60);
  }

  // The map is one shared global, so each room selects its own before it simulates.
  setMap() { setMapKind(this.mode === 'arena' ? 'arena' : 'island'); }

  humans() { return this.peers.size; }
  out(ws, obj) { if (ws.readyState === 1) ws.send(JSON.stringify({ t: 'd', d: obj })); }

  tick() {
    const now = process.hrtime.bigint();
    const dt = Math.min(0.1, Number(now - this.last) / 1e9);
    this.last = now;
    if (!this.peers.size) { if (Date.now() - this.emptySince > IDLE.ms && this.onEmpty) this.onEmpty(this); return; } // nobody: don't burn CPU
    this.setMap();
    try { this.session.update(dt); } catch (e) { console.error('room', this.code, 'tick error:', e); }
  }

  add(ws, name) {
    if (this.peers.size >= MAX_HUMANS) return 0;
    const pid = this.nextPid++;
    this.peers.set(pid, ws);
    if (this.peers.size === 1) this.session.ownerPid = pid; // first one in leads
    return pid; // the caller confirms 'joined' to the player first, THEN calls announce(), so the hello is not sent before the client is listening
  }

  announce(pid, name) { this.setMap(); this.net.onPeer(pid, name); }

  remove(pid) {
    if (!this.peers.delete(pid)) return;
    this.setMap();
    this.net.onLeave(pid);
    if (pid === this.session.ownerPid) this.session.ownerPid = this.peers.keys().next().value || 0; // leadership passes on
    if (!this.peers.size) this.emptySince = Date.now();
  }

  up(pid, d) {
    if (!d || typeof d !== 'object' || Array.isArray(d)) return; // never trust what a client sends
    this.setMap();
    try { this.net.onMsg(pid, d); } catch (e) { console.error('bad message from player', pid, e.message); }
  }

  close() { this.closed = true; clearInterval(this.timer); for (const ws of this.peers.values()) { try { ws.send(JSON.stringify({ t: 'closed' })); } catch { /* gone */ } } this.peers.clear(); }
}
