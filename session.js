// Sessions give the renderer/HUD one uniform `view`, whether we are playing solo,
// hosting (the host runs the simulation) or joined to someone else's game.
import { Game } from './sim.js';
import { TICK, newBody, moveStep, adsSpeed } from './core.js';

const BOT_NAMES = ['Rex', 'Nova', 'Bolt', 'Kira', 'Zed', 'Mako', 'Pixel', 'Jinx', 'Echo', 'Dash'];
const lerp = (a, b, t) => a + (b - a) * t;
const lerpAngle = (a, b, t) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * t; };

function parseRow(r) {
  return {
    id: r[0], x: r[1], y: r[2], z: r[3], yaw: r[4], pitch: r[5], hp: r[6], weapon: r[7], alive: !!r[8], thr: !!r[9],
    ammo: r[10], fuel: r[11], kills: r[12], deaths: r[13], reload: r[14], vx: r[15], vy: r[16], vz: r[17], gr: !!r[18], bloom: r[19] || 0,
  };
}

class Base {
  constructor() {
    this.fx = []; // listeners for events: ['s', ...] shots, ['h', ...] hits, ['k', ...] kills
    this.roster = new Map();
    this.view = { players: [], me: null, left: 0, over: 0, lim: 20, ping: 0 };
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
  constructor({ name = 'Player', bots = 5, scoreLimit = 20, timeLimit = 300, net = null } = {}) {
    super();
    this.isHost = true;
    this.game = new Game({ scoreLimit, timeLimit });
    this.myId = this.game.addPlayer(name);
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
        net.sendTo(pid, { k: 'hello', id, roster: this.game.roster(), lim: scoreLimit });
      };
      net.onLeave = (pid) => { const id = this.peers.get(pid); if (id) this.game.removePlayer(id); this.peers.delete(pid); this.balance(); this.syncRoster(); };
      net.onMsg = (pid, m) => {
        const id = this.peers.get(pid);
        if (!id) return;
        if (m.k === 'in') this.game.setInput(id, m.i);
        else if (m.k === 'ping') net.sendTo(pid, { k: 'pong', t: m.t });
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
    if (this.net && this.sinceSnap >= 0.05) {
      this.sinceSnap = 0;
      this.net.broadcast({ k: 's', s: g.snapshot(), e: this.pending });
      this.pending = [];
    }
    const v = this.view;
    v.players = [];
    for (const p of g.players.values()) {
      const o = { id: p.id, x: p.body.x, y: p.body.y, z: p.body.z, yaw: p.yaw, pitch: p.pitch, hp: Math.ceil(p.hp), weapon: p.weapon, alive: p.alive, thr: p.body.thrusting, kills: p.kills, deaths: p.deaths, ammo: p.mags[p.weapon], fuel: Math.round(p.body.fuel), reload: p.reloadLeft, vx: p.body.vx, vy: p.body.vy, vz: p.body.vz, gr: p.body.ground, bloom: p.bloom };
      v.players.push(this.decorate(o));
      if (p.id === this.myId) v.me = o;
    }
    v.left = Math.max(0, Math.round(g.timeLimit - (g.time - g.matchStart)));
    v.over = g.over ? g.winner : 0;
    v.lim = g.scoreLimit;
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
    this.input = { mx: 0, mz: 0, yaw: 0, pitch: 0, jet: false, fire: false, rl: false, sw: -1 };
    this.latched = { rl: false, sw: -1, jump: false };
    this.acc = 0;
    this.sendT = 0; this.pingT = 0; this.rtt = 0.05;
    this.last = null; // newest snapshot meta
    this.ready = new Promise((resolve) => { this.resolveReady = resolve; });
    net.onMsg = (m) => this.onMsg(m);
    net.onClose = (why) => this.onClosed(why || 'Disconnected');
  }

  onMsg(m) {
    if (m.k === 'hello') { this.myId = m.id; this.setRoster(m.roster); this.view.lim = m.lim; this.resolveReady(); }
    else if (m.k === 'roster') this.setRoster(m.r);
    else if (m.k === 's') {
      const rows = new Map(m.s.p.map((r) => [r[0], parseRow(r)]));
      this.snaps.push({ rt: performance.now(), rows });
      if (this.snaps.length > 6) this.snaps.shift();
      this.last = m.s;
      if (m.e && m.e.length) this.emit(m.e);
      this.reconcile(rows.get(this.myId));
    } else if (m.k === 'pong') this.rtt = lerp(this.rtt, (performance.now() - m.t) / 1000, 0.3);
  }

  reconcile(me) {
    if (!me) return;
    const b = this.pred;
    if (!me.alive || !this.predAlive || Math.hypot(me.x - b.x, me.y - b.y, me.z - b.z) > 2.5) {
      Object.assign(b, { x: me.x, y: me.y, z: me.z, vx: me.vx, vy: me.vy, vz: me.vz, fuel: me.fuel });
    } else {
      // Pull towards where the server says we are, pushed forward by the network delay.
      const lat = this.rtt / 2 + 0.03;
      b.x = lerp(b.x, me.x + me.vx * lat, 0.12);
      b.y = lerp(b.y, me.y + me.vy * lat, 0.12);
      b.z = lerp(b.z, me.z + me.vz * lat, 0.12);
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

    this.sendT += dt; this.pingT += dt;
    if (this.sendT >= 1 / 30) {
      this.sendT = 0;
      this.net.send({ k: 'in', i: { ...this.input, rl: this.latched.rl, sw: this.latched.sw, jump: this.latched.jump } });
      this.latched.rl = false; this.latched.sw = -1; this.latched.jump = false;
    }
    if (this.pingT >= 1) { this.pingT = 0; this.net.send({ k: 'ping', t: performance.now() }); }

    // Interpolate everyone else ~110 ms in the past.
    const v = this.view;
    v.players = [];
    v.ping = Math.round(this.rtt * 1000);
    const n = this.snaps.length;
    if (!n) return;
    const rt = performance.now() - 110;
    let a = this.snaps[0], b = this.snaps[0];
    for (let i = 0; i < n; i++) { if (this.snaps[i].rt <= rt) a = this.snaps[i]; if (this.snaps[i].rt > rt) { b = this.snaps[i]; break; } b = this.snaps[i]; }
    const t = a === b ? 1 : Math.max(0, Math.min(1, (rt - a.rt) / (b.rt - a.rt)));
    for (const [id, nb] of this.snaps[n - 1].rows) {
      const pa = a.rows.get(id) || nb, pb = b.rows.get(id) || nb;
      const o = { ...nb, x: lerp(pa.x, pb.x, t), y: lerp(pa.y, pb.y, t), z: lerp(pa.z, pb.z, t), yaw: lerpAngle(pa.yaw, pb.yaw, t), pitch: lerp(pa.pitch, pb.pitch, t) };
      if (id === this.myId) {
        if (nb.alive) { o.x = this.pred.x; o.y = this.pred.y; o.z = this.pred.z; o.thr = this.input.jet && this.pred.fuel > 0; o.vx = this.pred.vx; o.vy = this.pred.vy; o.vz = this.pred.vz; o.gr = this.pred.ground; }
        o.yaw = this.input.yaw; o.pitch = this.input.pitch;
        v.me = o;
      }
      v.players.push(this.decorate(o));
    }
    if (this.last) { v.left = this.last.left; v.over = this.last.over; v.lim = this.last.lim; }
  }

  close() { this.net.close(); }
}
