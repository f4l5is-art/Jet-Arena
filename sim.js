// Host-authoritative game simulation: players, combat, scoring, respawn.
import {
  TICK, EYE, HP_MAX, MAP, WEAPONS, R, H, newBody, moveStep, rayAABB, rayWorld, aimDir,
} from './core.js';
import { botThink } from './bots.js';

const RESPAWN = 3;
const REGEN_DELAY = 4;
const COLORS = [0xe74c3c, 0x3498db, 0x2ecc71, 0xf1c40f, 0x9b59b6, 0xe67e22, 0x1abc9c, 0xec407a, 0x8d6e63, 0x90a4ae];
const r2 = (n) => Math.round(n * 100) / 100;

export class Game {
  constructor(opts = {}) {
    this.rng = opts.rng || Math.random;
    this.scoreLimit = opts.scoreLimit || 20;
    this.timeLimit = opts.timeLimit || 300;
    this.players = new Map();
    this.events = [];
    this.time = 0;
    this.acc = 0;
    this.nextId = 1;
    this.matchStart = 0;
    this.over = false;
    this.winner = 0;
    this.restartAt = 0;
    this.rosterDirty = true;
  }

  addPlayer(name, bot = false) {
    const id = this.nextId++;
    const p = {
      id, name: String(name || 'Player').slice(0, 14), bot, color: COLORS[(id - 1) % COLORS.length],
      body: newBody(), yaw: 0, pitch: 0, hp: HP_MAX, alive: false, respawnAt: 0,
      weapon: 1, mags: WEAPONS.map((w) => w.mag), cool: 0, reloadLeft: 0, lastHit: -99,
      kills: 0, deaths: 0, wantFire: false, fireHeld: false,
      inp: { mx: 0, mz: 0, yaw: 0, pitch: 0, jet: false, fire: false, rl: false, sw: -1 },
      ai: bot ? { target: 0, think: 0, strafe: 1, strafeT: 0, stuckT: 0, lx: 0, lz: 0, wp: null } : null,
    };
    this.players.set(id, p);
    this.respawn(p);
    this.rosterDirty = true;
    return id;
  }

  removePlayer(id) {
    if (this.players.delete(id)) this.rosterDirty = true;
  }

  setInput(id, i) {
    const p = this.players.get(id);
    if (!p || !i) return;
    const c = (v, lo, hi) => (Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : 0);
    const n = p.inp;
    n.mx = c(i.mx, -1, 1); n.mz = c(i.mz, -1, 1);
    n.yaw = Number.isFinite(i.yaw) ? i.yaw : n.yaw;
    n.pitch = c(i.pitch, -1.4, 1.4);
    n.jet = !!i.jet; n.fire = !!i.fire;
    if (i.rl) n.rl = true; // one-shot flags stay latched until consumed
    if (Number.isInteger(i.sw) && i.sw >= 0 && i.sw < WEAPONS.length) n.sw = i.sw;
  }

  respawn(p) {
    let best = MAP.spawns[0], bestD = -1;
    const picks = [];
    for (let k = 0; k < 4; k++) picks.push(MAP.spawns[Math.floor(this.rng() * MAP.spawns.length)]);
    for (const s of picks) {
      let d = 1e9;
      for (const o of this.players.values()) {
        if (o === p || !o.alive) continue;
        d = Math.min(d, Math.hypot(o.body.x - s[0], o.body.z - s[2]));
      }
      if (d > bestD) { bestD = d; best = s; }
    }
    p.body = newBody(best[0], best[1], best[2]);
    p.hp = HP_MAX; p.alive = true; p.reloadLeft = 0; p.cool = 0.5;
    p.mags = WEAPONS.map((w) => w.mag);
    p.lastHit = this.time;
    p.yaw = Math.atan2(best[0], best[2]); // face the arena centre
    p.inp.yaw = p.yaw;
  }

  resetMatch() {
    this.over = false; this.winner = 0; this.matchStart = this.time;
    for (const p of this.players.values()) { p.kills = 0; p.deaths = 0; this.respawn(p); }
    this.rosterDirty = true;
    this.events.push(['reset']);
  }

  // Advance by real elapsed seconds; runs fixed 60 Hz ticks.
  advance(dt) {
    this.acc += Math.min(dt, 0.25);
    while (this.acc >= TICK) { this.acc -= TICK; this.tick(); }
  }

  tick() {
    this.time += TICK;
    if (this.over) {
      if (this.time >= this.restartAt) this.resetMatch();
      return;
    }
    for (const p of this.players.values()) {
      if (p.bot) botThink(this, p);
      if (!p.alive) {
        if (this.time >= p.respawnAt) this.respawn(p);
        continue;
      }
      const i = p.inp;
      p.yaw = i.yaw; p.pitch = i.pitch;
      moveStep(p.body, i, TICK);
      if (i.sw >= 0 && i.sw !== p.weapon) { p.weapon = i.sw; p.reloadLeft = 0; p.cool = 0.25; }
      i.sw = -1;
      if (i.rl) { this.startReload(p); i.rl = false; }
      this.combat(p, i);
      if (p.hp < HP_MAX && this.time - p.lastHit > REGEN_DELAY) p.hp = Math.min(HP_MAX, p.hp + 8 * TICK);
    }
    if (this.time - this.matchStart >= this.timeLimit) this.endMatch();
  }

  startReload(p) {
    const w = WEAPONS[p.weapon];
    if (p.reloadLeft > 0 || p.mags[p.weapon] >= w.mag) return;
    p.reloadLeft = w.reload;
  }

  combat(p, i) {
    const w = WEAPONS[p.weapon];
    if (p.cool > 0) p.cool -= TICK;
    if (p.reloadLeft > 0) {
      p.reloadLeft -= TICK;
      if (p.reloadLeft <= 0) { p.reloadLeft = 0; p.mags[p.weapon] = w.mag; }
      return;
    }
    const pressed = i.fire && !p.fireHeld;
    p.fireHeld = i.fire;
    if (!i.fire || p.cool > 0) return;
    if (!w.auto && !pressed) return;
    if (p.mags[p.weapon] <= 0) { this.startReload(p); return; }
    p.mags[p.weapon]--;
    p.cool = w.rate;
    this.shoot(p, w);
    if (p.mags[p.weapon] <= 0) this.startReload(p);
  }

  shoot(p, w) {
    const ox = p.body.x, oy = p.body.y + EYE, oz = p.body.z;
    for (let k = 0; k < w.pellets; k++) {
      const d = aimDir(
        p.yaw + (this.rng() - 0.5) * 2 * w.spread,
        p.pitch + (this.rng() - 0.5) * 2 * w.spread,
      );
      const tWorld = rayWorld(ox, oy, oz, d[0], d[1], d[2], w.range);
      let tHit = tWorld, victim = null;
      for (const o of this.players.values()) {
        if (o === p || !o.alive) continue;
        const b = o.body;
        const t = rayAABB(ox, oy, oz, d[0], d[1], d[2], b.x - R, b.y, b.z - R, b.x + R, b.y + H, b.z + R, tHit);
        if (t >= 0 && t < tHit) { tHit = t; victim = o; }
      }
      if (k < 3) {
        this.events.push(['s', p.id, r2(ox), r2(oy), r2(oz), r2(ox + d[0] * tHit), r2(oy + d[1] * tHit), r2(oz + d[2] * tHit)]);
      }
      if (victim) {
        const head = oy + d[1] * tHit > victim.body.y + 1.35;
        this.damage(victim, p, Math.round(w.dmg * (head ? 1.5 : 1)), head);
      }
    }
  }

  damage(v, by, dmg, head) {
    if (!v.alive || this.over) return;
    v.hp -= dmg; v.lastHit = this.time;
    this.events.push(['h', v.id, by.id, dmg, head ? 1 : 0]);
    if (v.hp > 0) return;
    v.hp = 0; v.alive = false; v.deaths++; v.respawnAt = this.time + RESPAWN;
    by.kills++;
    this.events.push(['k', by.id, v.id, by.weapon]);
    if (by.kills >= this.scoreLimit) this.endMatch();
  }

  endMatch() {
    if (this.over) return;
    let top = null;
    for (const p of this.players.values()) if (!top || p.kills > top.kills) top = p;
    this.over = true; this.winner = top ? top.id : 0; this.restartAt = this.time + 8;
    this.events.push(['over', this.winner]);
  }

  roster() {
    return [...this.players.values()].map((p) => ({ id: p.id, name: p.name, color: p.color, bot: p.bot }));
  }

  snapshot() {
    return {
      t: r2(this.time),
      left: Math.max(0, Math.round(this.timeLimit - (this.time - this.matchStart))),
      over: this.over ? this.winner : 0,
      lim: this.scoreLimit,
      p: [...this.players.values()].map((p) => [
        p.id, r2(p.body.x), r2(p.body.y), r2(p.body.z), r2(p.yaw), r2(p.pitch),
        Math.ceil(p.hp), p.weapon, p.alive ? 1 : 0, p.body.thrusting ? 1 : 0,
        p.mags[p.weapon], Math.round(p.body.fuel), p.kills, p.deaths, r2(p.reloadLeft),
        r2(p.body.vx), r2(p.body.vy), r2(p.body.vz),
      ]),
    };
  }

  drainEvents() {
    const e = this.events;
    this.events = [];
    return e;
  }
}
