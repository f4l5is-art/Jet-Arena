// Host-authoritative game simulation: players, combat, scoring, respawn.
import {
  TICK, EYE, HP_MAX, MAP, WEAPONS, SNIPER, newBody, moveStep, rayWorld, aimDir, aimShot, rayPlayers, spreadOf, adsSpeed, setMapKind,
} from './core.js';
import { Survival, monTarget } from './survival.js';
import { botThink } from './bots.js';

const RESPAWN = 3;
const REGEN_DELAY = 4;
const COLORS = [0xe74c3c, 0x3498db, 0x2ecc71, 0xf1c40f, 0x9b59b6, 0xe67e22, 0x1abc9c, 0xec407a, 0x8d6e63, 0x90a4ae];
const r2 = (n) => Math.round(n * 100) / 100;

export class Game {
  constructor(opts = {}) {
    this.rng = opts.rng || Math.random;
    this.relax = opts.mode === 'relax'; // survival where monsters never attack the lighthouse
    this.mode = opts.mode === 'survival' || this.relax ? 'survival' : 'arena';
    setMapKind(this.mode === 'survival' ? 'island' : 'arena'); // the map every player and monster collides with
    this.scoreLimit = this.mode === 'survival' ? 1e9 : (opts.scoreLimit || 20);
    this.timeLimit = this.mode === 'survival' ? 1e9 : (opts.timeLimit || 300);
    this.players = new Map();
    this.events = [];
    this.time = 0;
    this.hist = []; // recent positions of every player, so a shot can be checked against what the shooter was actually seeing
    this.acc = 0;
    this.nextId = 1;
    this.matchStart = 0;
    this.over = false;
    this.winner = 0;
    this.restartAt = 0;
    this.rosterDirty = true;
    this.surv = this.mode === 'survival' ? new Survival(this) : null;
  }

  addPlayer(name, bot = false) {
    const id = this.nextId++;
    const p = {
      id, name: String(name || 'Player').slice(0, 14), bot, color: COLORS[(id - 1) % COLORS.length],
      body: newBody(), yaw: 0, pitch: 0, hp: HP_MAX, alive: false, respawnAt: 0,
      weapon: 1, mags: WEAPONS.map((w) => w.mag), cool: 0, reloadLeft: 0, lastHit: -99,
      kills: 0, deaths: 0, wantFire: false, fireHeld: false, bloom: 0, cans: 0,
      inp: { mx: 0, mz: 0, yaw: 0, pitch: 0, jet: false, fire: false, rl: false, sw: -1, jump: false, ads: false, spd: 1, fp: false, lag: 0 },
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
    n.lag = c(i.lag, 0, 0.4); // how far behind the shooter's screen is (round trip + interpolation delay), capped so it can't be abused
    n.jet = !!i.jet; n.fire = !!i.fire; n.ads = !!i.ads; n.fp = !!i.fp;
    if (i.rl) n.rl = true; // one-shot flags stay latched until consumed
    if (i.jump) n.jump = true;
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
    p.hp = HP_MAX; p.alive = true; p.reloadLeft = 0; p.cool = 0.5; p.cans = 0;
    p.mags = WEAPONS.map((w) => w.mag);
    p.lastHit = this.time;
    p.yaw = Math.atan2(best[0], best[2]); // face the arena centre
    p.inp.yaw = p.yaw;
  }

  resetMatch() {
    this.over = false; this.winner = 0; this.matchStart = this.time;
    if (this.surv) this.surv.reset();
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
    if (this.players.size > 1) {
      const pose = new Map();
      for (const o of this.players.values()) if (o.alive) pose.set(o.id, [o.body.x, o.body.y, o.body.z]);
      this.hist.push({ t: this.time, p: pose });
      while (this.hist.length > 1 && this.hist[0].t < this.time - 0.6) this.hist.shift();
    }
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
      i.spd = adsSpeed(p.weapon, i.ads); // aiming slows you down; decided here so clients can't cheat it
      moveStep(p.body, i, TICK);
      i.jump = false;
      p.bloom = Math.max(0, p.bloom - 0.045 * TICK); // rapid-fire inaccuracy settles back down
      if (i.sw >= 0 && i.sw !== p.weapon) { p.weapon = i.sw; p.reloadLeft = 0; p.cool = 0.25; p.bloom = 0; }
      i.sw = -1;
      if (i.rl) { this.startReload(p); i.rl = false; }
      this.combat(p, i);
      if (p.hp < HP_MAX && this.time - p.lastHit > (this.surv ? 6 : REGEN_DELAY)) p.hp = Math.min(HP_MAX, p.hp + (this.surv ? 2 : 8) * TICK);
    }
    if (this.surv) this.surv.tick();
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

  // Positions at an earlier moment: returns a function id -> [x, y, z] (blended between the two recorded ticks around t).
  rewindTo(t) {
    const h = this.hist;
    if (h.length < 2) return null;
    if (t <= h[0].t) { const q = h[0].p; return (id) => q.get(id) || null; }
    let i = h.length - 1;
    while (i > 0 && h[i - 1].t > t) i--;
    const a = h[i - 1], b = h[i], f = Math.min(1, Math.max(0, (t - a.t) / (b.t - a.t)));
    return (id) => {
      const pa = a.p.get(id), pb = b.p.get(id);
      if (!pa) return null;
      if (!pb) return pa;
      return [pa[0] + (pb[0] - pa[0]) * f, pa[1] + (pb[1] - pa[1]) * f, pa[2] + (pb[2] - pa[2]) * f];
    };
  }

  shoot(p, w) {
    const b = p.body;
    const ex = b.x, ey = b.y + EYE, ez = b.z;
    const list = [];
    // survival is co-op: shots only ever hit monsters
    if (this.surv) for (const m of this.surv.mons) list.push(monTarget(m));
    else {
      // Lag compensation: a remote player sees everyone slightly in the past, so hit-test against where the others were then.
      const back = !p.bot && p.inp.lag > 0.01 ? this.rewindTo(this.time - p.inp.lag) : null;
      for (const o of this.players.values()) {
        if (!o.alive) continue;
        const old = back && o.id !== p.id ? back(o.id) : null;
        list.push(old ? { id: o.id, x: old[0], y: old[1], z: old[2], alive: true } : { id: o.id, x: o.body.x, y: o.body.y, z: o.body.z, alive: true });
      }
    }
    // Camera model: scoped sniper and bots aim straight from the eye; everyone else aims through the
    // third-person camera (aimShot makes the bullet land exactly where the crosshair points).
    const scoped = p.weapon === SNIPER && p.inp.ads;
    const aim = aimShot({ id: p.id, x: b.x, y: b.y, z: b.z }, list, p.yaw, p.pitch, p.bot || scoped || p.inp.fp, w.range);
    const base = aim.dir;
    const yaw0 = Math.atan2(-base[0], -base[2]);
    const pit0 = Math.asin(Math.max(-1, Math.min(1, base[1])));
    const ads = p.inp.ads || (p.bot && p.weapon === SNIPER); // bots "scope" their sniper so it is usable
    const spr = spreadOf(w, ads, Math.hypot(b.vx, b.vz), !b.ground, p.bloom);
    const right = [Math.cos(p.yaw), -Math.sin(p.yaw)];
    for (let k = 0; k < w.pellets; k++) {
      const ang = this.rng() * Math.PI * 2, rad = spr * Math.sqrt(this.rng()); // even spread over a disc
      const d = aimDir(yaw0 + Math.cos(ang) * rad, pit0 + Math.sin(ang) * rad);
      const tWorld = rayWorld(ex, ey, ez, d[0], d[1], d[2], w.range);
      const hit = rayPlayers(ex, ey, ez, d[0], d[1], d[2], tWorld, list, p.id);
      const tHit = hit ? hit.t : tWorld;
      if (k < 3) {
        // the tracer visibly leaves the gun's muzzle, even though the bullet itself starts at the eye
        const mx = ex + right[0] * 0.14 + d[0] * 0.9, my = ey - 0.27 + d[1] * 0.9, mz = ez + right[1] * 0.14 + d[2] * 0.9;
        this.events.push(['s', p.id, r2(mx), r2(my), r2(mz), r2(ex + d[0] * tHit), r2(ey + d[1] * tHit), r2(ez + d[2] * tHit)]);
      }
      if (hit && hit.player.mon) {
        this.surv.hitMonster(hit.player.mon, p, Math.round(w.dmg * (hit.head ? 1.5 : 1)), hit.head);
      } else if (hit) {
        const victim = this.players.get(hit.player.id), head = hit.head;
        const push = w.dmg * 0.045; // heavier guns shove harder; a shotgun blast really moves you
        victim.body.kx += d[0] * push; victim.body.kz += d[2] * push;
        if (d[1] > 0) victim.body.vy += d[1] * push * 0.5;
        this.damage(victim, p, Math.round(w.dmg * (head ? 1.5 : 1)), head);
      }
    }
    p.bloom = Math.min(w.bloomMax, p.bloom + w.bloomPer);
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
      left: this.surv ? Math.max(0, Math.ceil(this.surv.snap().end)) : Math.max(0, Math.round(this.timeLimit - (this.time - this.matchStart))),
      over: this.over ? this.winner : 0,
      lim: this.scoreLimit,
      p: [...this.players.values()].map((p) => [
        p.id, r2(p.body.x), r2(p.body.y), r2(p.body.z), r2(p.yaw), r2(p.pitch),
        Math.ceil(p.hp), p.weapon, p.alive ? 1 : 0, p.body.thrusting ? 1 : 0,
        p.mags[p.weapon], Math.round(p.body.fuel), p.kills, p.deaths, r2(p.reloadLeft),
        r2(p.body.vx), r2(p.body.vy), r2(p.body.vz), p.body.ground ? 1 : 0, Math.round(p.bloom * 10000) / 10000, p.cans,
      ]),
      sv: this.surv ? this.surv.snap() : undefined,
    };
  }

  drainEvents() {
    const e = this.events;
    this.events = [];
    return e;
  }
}
