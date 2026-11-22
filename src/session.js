// Sessions give the renderer/HUD one uniform `view`, whether we are playing solo,
// hosting (the host runs the simulation) or joined to someone else's game.
import { Game } from './sim.js';
import { TICK, newBody, moveStep, adsSpeed, setMapKind } from './core.js';
import { parseSv } from './survival.js';

const BOT_NAMES = ['Rex', 'Nova', 'Bolt', 'Kira', 'Zed', 'Mako', 'Pixel', 'Jinx', 'Echo', 'Dash'];
const lerp = (a, b, t) => a + (b - a) * t;
const lerpAngle = (a, b, t) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * t; };

function parseRow(r) {
  return {
    id: r[0], x: r[1], y: r[2], z: r[3], yaw: r[4], pitch: r[5], hp: r[6], weapon: r[7], alive: !!r[8], thr: !!r[9],
    ammo: r[10], fuel: r[11], kills: r[12], deaths: r[13], reload: r[14], vx: r[15], vy: r[16], vz: r[17], gr: !!r[18], bloom: r[19] || 0, cans: r[20] || 0,
  };
}

const SNAP_DT = 1 / 30; // the match is sent to everyone 30 times a second

class Base {
  constructor() {
    this.fx = []; // listeners for events: ['s', ...] shots, ['h', ...] hits, ['k', ...] kills
    this.roster = new Map();
    this.view = { players: [], me: null, left: 0, over: 0, lim: 20, ping: 0, sv: null, mode: 'arena' };
    this.mode = 'arena';
    this.myId = 0;
    this.onClosed = () => {};
  }
  emit(events) { for (const e of events) for (const f of this.fx) f(e); }
  setRoster(list) { this.roster = new Map(list.map((r) => [r.id, r])); }
  decorate(p) { const r = this.roster.get(p.id); p.name = r ? r.name : '?'; p.color = r ? r.color : 0xffffff; p.bot = r ? r.bot : false; return p; }
  close() {}
}

// ---------------------------------------------------------------- host / solo
export class HostSession extends Base {
  constructor({ name = 'Player', bots = 5, scoreLimit = 20, timeLimit = 300, net = null, mode = 'arena', dedicated = false } = {}) {
    super();
    this.isHost = true;
    this.dedicated = dedicated; // server-run match: nobody on the server plays
    this.ownerPid = 0; // dedicated: the room leader (may change bots / start)
    this.mode = mode === 'survival' || mode === 'relax' ? 'survival' : 'arena';
    this.relax = mode === 'relax';
    this.view.mode = this.mode;
    this.game = new Game({ scoreLimit, timeLimit, mode: this.relax ? 'relax' : this.mode });
    this.myId = dedicated ? 0 : this.game.addPlayer(name);
    this.botTarget = bots + 1; // total players we try to keep in the arena
    this.net = net;
    this.peers = new Map(); // net pid -> player id
    this.pending = [];
    this.sinceSnap = 0;
    this.pingNote = 0;
    this.balance();
    if (net) {
      net.onPeer = (pid, nm) => {
        const id = this.game.addPlayer(nm);
        this.peers.set(pid, id);
        this.balance();
        this.syncRoster();
        net.sendTo(pid, { k: 'hello', id, roster: this.game.roster(), lim: scoreLimit, mode: this.mode });
      };
      net.onLeave = (pid) => { const id = this.peers.get(pid); if (id) this.game.removePlayer(id); this.peers.delete(pid); this.balance(); this.syncRoster(); };
      net.onMsg = (pid, m) => {
        const id = this.peers.get(pid);
        if (!id) return;
        if (m.k === 'in') this.game.setInput(id, m.i);
        else if (m.k === 'ping') net.sendTo(pid, { k: 'pong', t: m.t });
        else if (m.k === 'cfg' && pid === this.ownerPid) { const n = Number(m.bots); if (Number.isFinite(n)) { this.botTarget = Math.max(0, Math.min(8, Math.round(n))); this.balance(); this.syncRoster(); } }
        else if (m.k === 'start' && pid === this.ownerPid) this.game.resetMatch();
      };
      net.onClose = () => this.onClosed('Lost connection to the server');
    }
    this.syncRoster();
  }

  humans() { let n = 0; for (const p of this.game.players.values()) if (!p.bot) n++; return n; }

  balance() {
    const g = this.game;
    const want = Math.max(0, this.botTarget - this.humans());
    const bots = [...g.players.values()].filter((p) => p.bot);
    for (let i = bots.length; i < want; i++) g.addPlayer(BOT_NAMES[(g.nextId + i) % BOT_NAMES.length], true);
    for (let i = bots.length; i > want; i--) g.removePlayer(bots[i - 1].id);
  }

  syncRoster() {
    this.setRoster(this.game.roster());
    this.game.rosterDirty = false;
    if (this.net) this.net.broadcast({ k: 'roster', r: this.game.roster() });
  }

  setLocalInput(i) { this.game.setInput(this.myId, i); }

  update(dt) {
    const g = this.game;
    g.advance(dt);
    if (g.rosterDirty) this.syncRoster();
    const ev = g.drainEvents();
    if (ev.length) { this.emit(ev); this.pending.push(...ev); }
    this.sinceSnap += dt;
    if (this.net && this.sinceSnap >= SNAP_DT) {
      this.sinceSnap = this.sinceSnap > 0.1 ? 0 : this.sinceSnap - SNAP_DT; // carry the remainder so the rate stays steady
      (this.net.broadcastFast || this.net.broadcast).call(this.net, { k: 's', s: g.snapshot() });
      if (this.pending.length) { this.net.broadcast({ k: 'e', e: this.pending }); this.pending = []; }
    }
    if (this.dedicated) return;
    const v = this.view;
    v.players = [];
    for (const p of g.players.values()) {
      const o = { id: p.id, x: p.body.x, y: p.body.y, z: p.body.z, yaw: p.yaw, pitch: p.pitch, hp: Math.ceil(p.hp), weapon: p.weapon, alive: p.alive, thr: p.body.thrusting, kills: p.kills, deaths: p.deaths, ammo: p.mags[p.weapon], fuel: Math.round(p.body.fuel), reload: p.reloadLeft, vx: p.body.vx, vy: p.body.vy, vz: p.body.vz, gr: p.body.ground, bloom: p.bloom, cans: p.cans };
      v.players.push(this.decorate(o));
      if (p.id === this.myId) v.me = o;
    }
    v.left = Math.max(0, Math.round(g.timeLimit - (g.time - g.matchStart)));
    v.over = g.over ? g.winner : 0;
    v.lim = g.scoreLimit;
    v.sv = g.surv ? parseSv(g.surv.snap()) : null;
    if (g.surv) v.left = v.sv.end;
  }

  close() { if (this.net) this.net.close(); }
}

// ---------------------------------------------------------------- joiner
export class ClientSession extends Base {
  constructor(net) {
    super();
    this.isHost = false;
    this.net = net;
    this.snaps = []; // { rt, rows: Map }
    this.pred = newBody();
    this.predAlive = false;
    this.ph = []; // our own predicted positions over the last ~1.5 s, to compare with what the server says about the same moment
    this.input = { mx: 0, mz: 0, yaw: 0, pitch: 0, jet: false, fire: false, rl: false, sw: -1 };
    this.latched = { rl: false, sw: -1, jump: false };
    this.acc = 0;
    this.sendT = 0; this.pingT = 0; this.rtt = 0.05;
    this.last = null; // newest snapshot meta
    this.lastT = -1; this.arrive = 0; this.gap = SNAP_DT; this.dev = 0.01; this.delay = 0.12; // adaptive interpolation delay (seconds)
    this.ready = new Promise((resolve) => { this.resolveReady = resolve; });
    net.onMsg = (m) => this.onMsg(m);
    net.onClose = (why) => this.onClosed(why || 'Disconnected');
  }

  onMsg(m) {
    if (m.k === 'hello') {
      this.myId = m.id; this.setRoster(m.roster); this.view.lim = m.lim;
      this.mode = m.mode === 'survival' ? 'survival' : 'arena'; this.view.mode = this.mode;
      setMapKind(this.mode === 'survival' ? 'island' : 'arena'); // collide with the same map as the host
      this.resolveReady();
    }
    else if (m.k === 'roster') this.setRoster(m.r);
    else if (m.k === 's') {
      if (m.s.t < this.lastT) return; // an older snapshot overtaken on the unordered channel
      this.lastT = m.s.t;
      const rows = new Map(m.s.p.map((r) => [r[0], parseRow(r)]));
      const now = performance.now();
      if (this.arrive) { // measure how steady the snapshots arrive, and keep just enough delay to smooth that out
        const g = (now - this.arrive) / 1000;
        this.gap = lerp(this.gap, Math.min(g, 0.5), 0.1);
        this.dev = lerp(this.dev, Math.abs(g - this.gap), 0.1);
        const want = Math.max(0.09, Math.min(0.35, this.gap * 1.6 + this.dev * 3));
        this.delay = lerp(this.delay, want, want > this.delay ? 0.3 : 0.03); // grow fast, shrink slowly
      }
      this.arrive = now;
      this.snaps.push({ rt: now, rows });
      if (this.snaps.length > 8) this.snaps.shift();
      this.last = m.s;
      if (m.e && m.e.length) this.emit(m.e);
      this.reconcile(rows.get(this.myId), (m.s.ak || []).find((a) => a[0] === this.myId));
    } else if (m.k === 'e') { if (m.e && m.e.length) this.emit(m.e); }
    else if (m.k === 'pong') this.rtt = lerp(this.rtt, (performance.now() - m.t) / 1000, 0.3);
  }

  // Where we were (predicted) at client time T ms, blended between the two recorded frames around it.
  phAt(T) {
    const h = this.ph;
    if (!h.length || T < h[0].t) return null;
    let i = h.length - 1;
    if (T >= h[i].t) return h[i];
    while (i > 0 && h[i - 1].t > T) i--;
    const a = h[i - 1], c = h[i], f = (T - a.t) / (c.t - a.t || 1);
    return { x: a.x + (c.x - a.x) * f, y: a.y + (c.y - a.y) * f, z: a.z + (c.z - a.z) * f };
  }

  // The snapshot says where the server had us after applying our input stamped `ack[1]` (plus ack[2] ms of holding it).
  // We compare it with where WE were at that same moment, so network delay cancels out and standing still or stopping
  // produces no error. Only a real difference (a hit shoving us, a wall) is eased in, by shifting the whole prediction.
  reconcile(me, ack) {
    if (!me) return;
    const b = this.pred;
    const ref = ack ? this.phAt(ack[1] + ack[2]) : null;
    const err = ref ? Math.hypot(me.x - ref.x, me.y - ref.y, me.z - ref.z) : Math.hypot(me.x - b.x, me.y - b.y, me.z - b.z);
    if (!me.alive || !this.predAlive || err > 2.5 || (!ref && err > 6)) {
      Object.assign(b, { x: me.x, y: me.y, z: me.z, vx: me.vx, vy: me.vy, vz: me.vz, fuel: me.fuel });
      this.ph.length = 0;
    } else {
      if (ref && err > 0.04) { // 4 cm is just the server's rounding
        const k = err > 0.6 ? 0.5 : 0.25;
        const dx = (me.x - ref.x) * k, dy = (me.y - ref.y) * k, dz = (me.z - ref.z) * k;
        b.x += dx; b.y += dy; b.z += dz;
        for (const e of this.ph) { e.x += dx; e.y += dy; e.z += dz; }
      }
      b.fuel = me.fuel;
    }
    this.predAlive = me.alive;
  }

  setLocalInput(i) {
    i.spd = adsSpeed(this.view.me ? this.view.me.weapon : 1, i.ads);
    this.input = i;
    if (i.rl) this.latched.rl = true;
    if (i.jump) this.latched.jump = true;
    if (i.sw >= 0) this.latched.sw = i.sw;
  }

  update(dt) {
    // Local movement prediction (same physics as the host).
    this.acc += Math.min(dt, 0.25);
    while (this.acc >= TICK) { this.acc -= TICK; if (this.predAlive) moveStep(this.pred, this.input, TICK); }

    if (this.predAlive) {
      const nowMs = performance.now(), h = this.ph;
      h.push({ t: nowMs, x: this.pred.x, y: this.pred.y, z: this.pred.z });
      while (h.length > 2 && h[0].t < nowMs - 1500) h.shift();
    }
    this.sendT += dt; this.pingT += dt;
    if (this.sendT >= 1 / 70) { // inputs go out every frame: less delay before the server hears you
      this.sendT = 0;
      this.net.send({ k: 'in', i: { ...this.input, ct: performance.now(), lag: Math.min(0.4, (this.view.ping || 0) / 1000 + this.delay), rl: this.latched.rl, sw: this.latched.sw, jump: this.latched.jump } });
      this.latched.rl = false; this.latched.sw = -1; this.latched.jump = false;
    }
    if (this.pingT >= 1) { this.pingT = 0; this.net.send({ k: 'ping', t: performance.now() }); }

    // Interpolate everyone else ~110 ms in the past.
    const v = this.view;
    v.players = [];
    v.ping = Math.round(this.rtt * 1000);
    const n = this.snaps.length;
    if (!n) return;
    const rt = performance.now() - this.delay * 1000;
    let a = this.snaps[0], b = this.snaps[0];
    for (let i = 0; i < n; i++) { if (this.snaps[i].rt <= rt) a = this.snaps[i]; if (this.snaps[i].rt > rt) { b = this.snaps[i]; break; } b = this.snaps[i]; }
    const t = a === b ? 1 : Math.max(0, Math.min(1, (rt - a.rt) / (b.rt - a.rt)));
    const late = a === b ? Math.min(0.15, Math.max(0, (rt - b.rt) / 1000)) : 0; // newest snapshot is older than the delay: coast on velocity
    for (const [id, nb] of this.snaps[n - 1].rows) {
      const pa = a.rows.get(id) || nb, pb = b.rows.get(id) || nb;
      const o = { ...nb, x: lerp(pa.x, pb.x, t) + (late ? pb.vx * late : 0), y: lerp(pa.y, pb.y, t) + (late ? pb.vy * late : 0), z: lerp(pa.z, pb.z, t) + (late ? pb.vz * late : 0), yaw: lerpAngle(pa.yaw, pb.yaw, t), pitch: lerp(pa.pitch, pb.pitch, t) };
      if (id === this.myId) {
        if (nb.alive) { o.x = this.pred.x; o.y = this.pred.y; o.z = this.pred.z; o.thr = this.input.jet && this.pred.fuel > 0; o.vx = this.pred.vx; o.vy = this.pred.vy; o.vz = this.pred.vz; o.gr = this.pred.ground; }
        o.yaw = this.input.yaw; o.pitch = this.input.pitch;
        v.me = o;
      }
      v.players.push(this.decorate(o));
    }
    if (this.last) { v.left = this.last.left; v.over = this.last.over; v.lim = this.last.lim; v.sv = this.last.sv ? parseSv(this.last.sv) : null; }
  }

  close() { this.net.close(); }
}
