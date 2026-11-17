// Island survival (co-op): protect the lighthouse for three nights until the rescue boat arrives.
// Runs inside the host-authoritative Game. Monsters, supply crates and the lighthouse live here.
import { TICK, EYE, HP_MAX, MAP, newBody, moveStep, rayWorld, aimDir } from './core.js';

export const DAY_LEN = 180;               // seconds per day (about 80 s of it is night)
export const NIGHTS = 3;
export const END_T = (NIGHTS - 1) * DAY_LEN + 0.9 * DAY_LEN; // dawn after the last night: the boat arrives
export const LH_HP = 600;
export const FUEL_START = 80;
export const RESPAWN_S = 10;
const SEA_R = 44.5;                       // monsters climb out of the sea at this radius
const TOWER = 2.7;                        // distance from the lighthouse centre to its wall

// hw = half width, bh = body height (above it is the head), h = total height
export const MONS = [
  { name: 'Drowned', hp: 70, spd: 2.7, hw: 0.42, bh: 1.35, h: 1.75, dmg: 16, rate: 0.9, reach: 1.7 },
  { name: 'Hisser', hp: 35, spd: 3.9, hw: 0.4, bh: 1.0, h: 1.4, dmg: 0, rate: 0, reach: 0 },
  { name: 'Stalker', hp: 90, spd: 8.5, hw: 0.32, bh: 1.9, h: 2.4, dmg: 38, rate: 1.1, reach: 1.9 },
  { name: 'Mimic', hp: 55, spd: 5.5, hw: 0.5, bh: 0.7, h: 0.95, dmg: 22, rate: 0.8, reach: 1.8 },
];
export const DROWNED = 0, HISSER = 1, STALKER = 2, MIMIC = 3;
export const FUEL_CAN = 0, MEDKIT = 1;

const r2 = (n) => Math.round(n * 100) / 100;
const lerp = (a, b, t) => a + (b - a) * t;

// 0 = full daylight, 1 = deep night, with dusk and dawn ramps
export function darkness(t) {
  const f = (t % DAY_LEN) / DAY_LEN;
  if (f < 0.38) return 0;
  if (f < 0.5) return (f - 0.38) / 0.12;
  if (f < 0.88) return 1;
  return 1 - (f - 0.88) / 0.12;
}
export const lightRadius = (fuel) => (fuel > 0 ? 13 + fuel * 0.17 : 0);
export const monTarget = (m) => ({ id: 1000 + m.id, x: m.b.x, y: m.b.y, z: m.b.z, alive: true, hw: MONS[m.kind].hw, bh: MONS[m.kind].bh, th: MONS[m.kind].h, mon: m });

// Turn a snapshot's compact rows into objects (used by the host's own view and by joiners).
export function parseSv(s) {
  return {
    t: s.t, dark: s.dk, day: s.day, fuel: s.fu, hp: s.hp, lr: s.lr, end: s.end, rescue: !!s.resc,
    mons: s.m.map((r) => ({ id: r[0], kind: r[1], x: r[2], y: r[3], z: r[4], yaw: r[5], hp: r[6], aux: r[7], burn: !!r[8] })),
    crates: s.c.map((r) => ({ id: r[0], kind: r[1], x: r[2], y: r[3], z: r[4] })),
  };
}

export class Survival {
  constructor(g) { this.g = g; this.reset(); }

  reset() {
    this.t = 0; this.mons = []; this.crates = []; this.nextId = 1;
    this.fuel = FUEL_START; this.hp = LH_HP;
    this.spawnT = 3; this.dropT = 5; this.wasNight = false; this.rescue = false;
  }

  dayNo() { return Math.min(NIGHTS, Math.floor(this.t / DAY_LEN) + 1); }
  alive() { return [...this.g.players.values()].filter((p) => p.alive); }

  // ---------------------------------------------------------------- damage
  hurtPlayer(p, dmg) {
    if (!p.alive || this.g.over) return;
    const g = this.g;
    p.hp -= dmg; p.lastHit = g.time;
    g.events.push(['h', p.id, 0, Math.round(dmg), 0]);
    if (p.hp > 0) return;
    p.hp = 0; p.alive = false; p.deaths++; p.respawnAt = g.time + RESPAWN_S; p.cans = 0;
    g.events.push(['k', 0, p.id, -1]);
  }

  hitMonster(m, by, dmg, head) {
    if (!this.mons.includes(m)) return;
    m.hp -= dmg; m.flash = 0.12;
    this.g.events.push(['mh', m.id, by.id, dmg, head ? 1 : 0]);
    if (m.hp <= 0) this.killMonster(m, by);
  }

  killMonster(m, by) {
    const i = this.mons.indexOf(m);
    if (i < 0) return;
    this.mons.splice(i, 1);
    if (by) by.kills++;
    this.g.events.push(['mk', m.id, by ? by.id : 0, m.kind]);
  }

  // ---------------------------------------------------------------- spawning
  spawnMon(kind, x, z) {
    const m = { id: this.nextId++, kind, hp: MONS[kind].hp, b: newBody(x, 0, z), yaw: 0, cool: 0.6, fuse: 0, think: 0, tgt: null, seen: false, seenT: 0,
      stuckT: 0, lx: x, lz: z, sideT: 0, side: 1, flash: 0, burn: false, aux: 0,
      inp: { mx: 0, mz: 0, yaw: 0, jet: false, jump: false, spd: 1 } };
    this.mons.push(m);
    return m;
  }

  // a spot on the shore, as far as we can manage from every living player (monsters should not pop up in your face)
  shoreSpot(r) {
    const g = this.g, alive = this.alive();
    let best = null, bestD = -1;
    for (let k = 0; k < 8; k++) {
      const a = g.rng() * Math.PI * 2, x = Math.cos(a) * r, z = Math.sin(a) * r;
      let d = 1e9;
      for (const p of alive) d = Math.min(d, Math.hypot(p.body.x - x, p.body.z - z));
      if (d > bestD) { bestD = d; best = [x, z]; }
      if (d > 28) break;
    }
    return best;
  }

  director(dark) {
    const g = this.g, day = this.dayNo(), n = Math.max(1, this.alive().length);
    this.spawnT -= TICK;
    if (this.spawnT > 0) return;
    this.spawnT = Math.max(2.2, 7 - day * 1.2 - n * 0.4) + g.rng() * 2;
    if (this.mons.length >= 3 + day * 2 + n * 2) return;
    const w = day === 1 ? [55, 30, 15] : day === 2 ? [40, 30, 30] : [30, 30, 40];
    let roll = g.rng() * (w[0] + w[1] + w[2]), kind = 0;
    while (kind < 2 && roll >= w[kind]) { roll -= w[kind]; kind++; }
    const spot = this.shoreSpot(kind === STALKER ? SEA_R - 5 : SEA_R);
    this.spawnMon(kind, spot[0], spot[1]);
  }

  dropCrate() {
    const g = this.g;
    for (let k = 0; k < 20; k++) {
      const a = g.rng() * Math.PI * 2, r = 11 + g.rng() * 26, x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (MAP.boxes.some((b) => x > b.minx - 1.2 && x < b.maxx + 1.2 && z > b.minz - 1.2 && z < b.maxz + 1.2)) continue;
      const roll = g.rng(), mimic = roll > 0.85;
      const kind = mimic ? (g.rng() < 0.5 ? FUEL_CAN : MEDKIT) : roll < 0.5 ? FUEL_CAN : MEDKIT; // a mimic wears a real crate's face
      this.crates.push({ id: this.nextId++, kind, mimic, x, z, y: 70, landed: false, age: 0 });
      g.events.push(['drop', x, z]);
      return;
    }
  }

  // ---------------------------------------------------------------- the main tick
  tick() {
    const g = this.g;
    this.t += TICK;
    const dark = darkness(this.t), night = dark > 0.5;
    if (night !== this.wasNight) { this.wasNight = night; g.events.push(['phase', night ? 1 : 0, this.dayNo()]); }

    // the lantern burns fuel (much more at night)
    this.fuel = Math.max(0, this.fuel - (night ? 0.45 : 0.04) * TICK);
    if (!night && this.hp > 0) this.hp = Math.min(LH_HP, this.hp + 0.8 * TICK); // a fallen tower stays fallen

    const alive = this.alive();
    // carrying a fuel can into the lighthouse's circle refuels it
    for (const p of alive) {
      if (p.cans > 0 && this.fuel <= 85 && Math.hypot(p.body.x, p.body.z) < 6.5) {
        this.fuel = Math.min(100, this.fuel + 30 * p.cans);
        g.events.push(['dep', p.id, p.cans]); p.cans = 0;
      }
    }

    this.updateCrates(alive);
    this.dropT -= TICK;
    if (this.dropT <= 0 && this.crates.length < 6) { this.dropT = 26; this.dropCrate(); } else if (this.dropT <= 0) this.dropT = 6;

    if (dark > 0.5) this.director(dark);

    const lr = lightRadius(this.fuel);
    for (const m of [...this.mons]) { if (this.mons.includes(m)) this.updateMon(m, dark, lr, alive); }

    if (this.t >= END_T) this.finish(true);
    else if (this.hp <= 0) this.finish(false);
    else if (!alive.length && g.players.size) this.finish(false);
  }

  finish(win) {
    const g = this.g;
    if (g.over) return;
    this.rescue = win;
    g.over = true; g.winner = win ? 1 : -1; g.restartAt = g.time + 14;
    g.events.push(['over', g.winner]);
  }

  updateCrates(alive) {
    const g = this.g;
    for (const c of [...this.crates]) {
      if (!c.landed) {
        c.y -= 14 * TICK;
        if (c.y <= 0) { c.y = 0; c.landed = true; }
        continue;
      }
      c.age += TICK;
      if (c.age > 140) { this.crates.splice(this.crates.indexOf(c), 1); continue; }
      for (const p of alive) {
        const d = Math.hypot(p.body.x - c.x, p.body.z - c.z);
        if (d > (c.mimic ? 2.8 : 1.8) || p.body.y > 2.2) continue;
        this.crates.splice(this.crates.indexOf(c), 1);
        if (c.mimic) { const m = this.spawnMon(MIMIC, c.x, c.z); m.cool = 0.3; g.events.push(['mimic', c.x, c.z]); }
        else if (c.kind === FUEL_CAN) { p.cans++; g.events.push(['pk', p.id, FUEL_CAN]); }
        else { p.hp = Math.min(HP_MAX, p.hp + 60); g.events.push(['pk', p.id, MEDKIT]); }
        break;
      }
    }
  }

  // ---------------------------------------------------------------- monsters
  // Stalkers freeze while any player is looking at them.
  watched(m) {
    for (const p of this.g.players.values()) {
      if (!p.alive) continue;
      const ex = p.body.x, ey = p.body.y + EYE, ez = p.body.z;
      const dx = m.b.x - ex, dy = m.b.y + 1.2 - ey, dz = m.b.z - ez, d = Math.hypot(dx, dy, dz);
      if (d > 75 || d < 0.4) continue;
      const f = aimDir(p.yaw, p.pitch);
      if ((dx * f[0] + dy * f[1] + dz * f[2]) / d > 0.55 && rayWorld(ex, ey, ez, dx / d, dy / d, dz / d, d) >= d - 0.8) return true;
    }
    return false;
  }

  updateMon(m, dark, lr, alive) {
    const g = this.g, def = MONS[m.kind], b = m.b, i = m.inp;
    m.flash = Math.max(0, m.flash - TICK);
    m.cool -= TICK;

    // daylight and the lighthouse beam hurt them
    let slow = 1;
    m.burn = false;
    if (dark < 0.3 && m.kind !== MIMIC) { m.hp -= 10 * TICK; m.burn = true; }
    if (lr > 0 && Math.hypot(b.x, b.z) < lr) { m.hp -= (m.kind === DROWNED ? 9 : 14) * TICK; m.burn = true; slow = 0.55; }
    if (m.hp <= 0) { this.killMonster(m, null); return; }

    // pick a target: the nearest player, or the lighthouse
    m.think -= TICK;
    if (m.think <= 0) {
      m.think = 0.25;
      let near = null, nd = 1e9;
      for (const p of alive) { const d = Math.hypot(p.body.x - b.x, p.body.z - b.z); if (d < nd) { nd = d; near = p; } }
      const chase = near && (m.kind === STALKER || m.kind === MIMIC ? nd < 80 : nd < 32);
      m.tgt = chase ? { p: near } : { lh: true };
    }
    const T = m.tgt && m.tgt.p && m.tgt.p.alive ? m.tgt.p.body : null;
    const tx = T ? T.x : 0, tz = T ? T.z : 0, dx = tx - b.x, dz = tz - b.z, dist = Math.hypot(dx, dz);
    const gap = T ? dist : dist - TOWER; // distance to the thing's surface
    m.yaw = Math.atan2(-dx, -dz); i.yaw = m.yaw;

    let go = 1;
    if (m.kind === STALKER) {
      m.seenT -= TICK;
      if (m.seenT <= 0) { m.seenT = 0.1; m.seen = this.watched(m); }
      if (m.seen) go = 0;
      m.aux = m.seen ? 1 : 0;
    }
    if (m.kind === HISSER) {
      if (gap < 3.3 || m.fuse > 0) { m.fuse += TICK; go = 0; }
      m.aux = r2(Math.min(1, m.fuse / 1.1));
      if (m.fuse >= 1.1) { this.explode(m, alive); return; }
    } else if (gap <= def.reach) {
      go = 0;
      if (m.cool <= 0) {
        m.cool = def.rate;
        if (T) this.hurtPlayer(m.tgt.p, def.dmg);
        else { this.hp -= def.dmg; g.events.push(['lh', Math.max(0, Math.round(this.hp))]); }
      }
    }

    // walk (stuck against a wall? hop and sidestep)
    m.sideT -= TICK;
    i.mz = go; i.mx = m.sideT > 0 ? m.side * 0.8 : 0;
    i.spd = (def.spd / 7) * slow * (go ? 1 : 0);
    m.stuckT += TICK;
    if (m.stuckT >= 0.6) {
      if (go && Math.hypot(b.x - m.lx, b.z - m.lz) < 0.35) { i.jump = true; m.sideT = 0.8; m.side = g.rng() < 0.5 ? -1 : 1; }
      m.stuckT = 0; m.lx = b.x; m.lz = b.z;
    }
    moveStep(b, i, TICK);
    i.jump = false;
  }

  explode(m, alive) {
    const g = this.g;
    this.mons.splice(this.mons.indexOf(m), 1);
    g.events.push(['boom', r2(m.b.x), r2(m.b.y), r2(m.b.z)]);
    for (const p of alive) {
      const d = Math.hypot(p.body.x - m.b.x, p.body.z - m.b.z);
      if (d < 6.5) this.hurtPlayer(p, 10 + 55 * (1 - d / 6.5));
    }
    if (Math.hypot(m.b.x, m.b.z) < TOWER + 6) { this.hp -= 140; g.events.push(['lh', Math.max(0, Math.round(this.hp))]); }
  }

  // ---------------------------------------------------------------- snapshot (also used for the host's own view)
  snap() {
    const dark = darkness(this.t);
    return {
      t: r2(this.t), dk: r2(dark), day: this.dayNo(), fu: Math.round(this.fuel * 10) / 10, hp: Math.max(0, Math.round(this.hp)),
      lr: r2(lightRadius(this.fuel)), end: Math.max(0, Math.ceil(END_T - this.t)), resc: this.rescue ? 1 : 0,
      m: this.mons.map((m) => [m.id, m.kind, r2(m.b.x), r2(m.b.y), r2(m.b.z), r2(m.yaw), Math.ceil(m.hp), m.aux, m.burn ? 1 : 0]),
      c: this.crates.map((c) => [c.id, c.kind, r2(c.x), r2(c.y), r2(c.z)]),
    };
  }
}
