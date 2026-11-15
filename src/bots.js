// Simple bot AI: find a visible enemy, keep a good distance, strafe, use the jetpack.
import { TICK, EYE, MAP, WEAPONS, rayWorld } from './core.js';

const TURN = 3.4; // rad/s
const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

function visible(from, to) {
  const dx = to.x - from.x, dy = (to.y + 1.1) - (from.y + EYE), dz = to.z - from.z;
  const dist = Math.hypot(dx, dy, dz);
  if (dist < 0.01) return true;
  return rayWorld(from.x, from.y + EYE, from.z, dx / dist, dy / dist, dz / dist, dist) >= dist - 0.4;
}

export function botThink(g, p) {
  const a = p.ai, i = p.inp, b = p.body;
  if (!p.alive || g.over) { i.fire = false; i.jet = false; i.mx = 0; i.mz = 0; return; }

  // Re-think a few times per second: choose a target.
  a.think -= TICK;
  if (a.think <= 0) {
    a.think = 0.2 + g.rng() * 0.2;
    let best = null, bestD = 70;
    for (const o of g.players.values()) {
      if (o === p || !o.alive) continue;
      const d = Math.hypot(o.body.x - b.x, o.body.y - b.y, o.body.z - b.z);
      if (d < bestD && visible(b, o.body)) { best = o; bestD = d; }
    }
    a.target = best ? best.id : 0;
    a.errYaw = (g.rng() - 0.5) * 0.24;
    a.errPitch = (g.rng() - 0.5) * 0.16;
    if (best) {
      const want = bestD < 9 ? 2 : bestD < 40 ? 1 : 3;
      if (want !== p.weapon) i.sw = want;
    } else if (p.mags[p.weapon] < WEAPONS[p.weapon].mag / 2) i.rl = true;
  }
  a.strafeT -= TICK;
  if (a.strafeT <= 0) { a.strafeT = 0.8 + g.rng() * 1.8; a.strafe = g.rng() < 0.5 ? -1 : 1; }

  const tgt = a.target ? g.players.get(a.target) : null;
  let wantYaw = i.yaw, wantPitch = 0, jet = false;
  i.fire = false;

  if (tgt && tgt.alive) {
    const dx = tgt.body.x - b.x, dy = tgt.body.y + 1.2 - (b.y + EYE), dz = tgt.body.z - b.z;
    const flat = Math.hypot(dx, dz);
    wantYaw = Math.atan2(-dx, -dz) + a.errYaw;
    wantPitch = Math.atan2(dy, flat) + a.errPitch;
    i.mz = flat > 16 ? 1 : flat < 7 ? -0.7 : 0.1;
    i.mx = a.strafe * 0.8;
    if (tgt.body.y > b.y + 2.5) jet = true;
    const aimed = Math.abs(wrap(wantYaw - i.yaw)) < 0.09;
    if (aimed) i.fire = WEAPONS[p.weapon].auto || Math.floor(g.time * 30) % 2 === 0;
  } else {
    // Wander between spawn points.
    if (!a.wp || Math.hypot(a.wp[0] - b.x, a.wp[2] - b.z) < 3) a.wp = MAP.spawns[Math.floor(g.rng() * MAP.spawns.length)];
    wantYaw = Math.atan2(-(a.wp[0] - b.x), -(a.wp[2] - b.z));
    wantPitch = 0;
    i.mz = 1; i.mx = 0;
    if (a.wp[1] > b.y + 2) jet = true;
  }

  // Stuck detection: if barely moved, burst the jetpack and pick a new route.
  a.stuckT += TICK;
  if (a.stuckT >= 0.6) {
    const moved = Math.hypot(b.x - a.lx, b.z - a.lz);
    a.stuckT = 0; a.lx = b.x; a.lz = b.z;
    if (moved < 0.6 && (i.mz !== 0 || i.mx !== 0)) { a.boost = 0.5; a.strafe = -a.strafe; a.wp = null; i.jump = true; }
  }
  if (a.boost > 0) { a.boost -= TICK; jet = true; }
  if (b.fuel < 8) a.cool = true; else if (b.fuel > 45) a.cool = false;
  i.jet = jet && !a.cool;

  i.yaw += clamp(wrap(wantYaw - i.yaw), -TURN * TICK, TURN * TICK);
  i.pitch += clamp(wantPitch - i.pitch, -TURN * TICK, TURN * TICK);
}
