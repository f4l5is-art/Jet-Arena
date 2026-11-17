// Shared constants, map, weapons, movement physics and ray helpers.
// Pure JS (no DOM, no three.js) so it runs in the browser and in Node tests.

import { MAP, HALF, setMapKind } from './map.js';
export { MAP, HALF, setMapKind }; // the arena (100 m x 100 m): see map.js

export const TICK = 1 / 60;
export const R = 0.4; // player radius
export const H = 1.8; // player height
export const EYE = 1.6;
export const GRAVITY = 20;
export const THRUST = 38;
export const MAX_UP = 9;
export const MAX_FALL = 25;
export const JUMP = 8; // m/s: about 1.6 m of height (clears a 1.5 m crate), costs no fuel
export const SPEED = 7;
export const CEILING = 20; // highest you can fly (the sniper nest is at 12.8 m)
export const FUEL_MAX = 100;
export const HP_MAX = 100;

// spread = cone half-angle in radians when firing from the hip, standing still (0.01 rad ~ 0.6 deg).
// Aiming down sights multiplies it by adsMul. Moving, flying and rapid fire add to it.
export const WEAPONS = [
  { name: 'Pistol', dmg: 18, rate: 0.28, mag: 12, reload: 1.1, spread: 0.018, adsMul: 0.25, moveSpread: 0.02, airSpread: 0.03, bloomPer: 0.006, bloomMax: 0.02, pellets: 1, range: 90, auto: false, zoom: [1.25] },
  { name: 'SMG', dmg: 9, rate: 0.085, mag: 30, reload: 1.6, spread: 0.04, adsMul: 0.35, moveSpread: 0.03, airSpread: 0.04, bloomPer: 0.008, bloomMax: 0.05, pellets: 1, range: 60, auto: true, zoom: [1.4] },
  { name: 'Shotgun', dmg: 9, rate: 0.85, mag: 6, reload: 2.0, spread: 0.075, adsMul: 0.6, moveSpread: 0.02, airSpread: 0.02, bloomPer: 0, bloomMax: 0, pellets: 8, range: 26, auto: false, zoom: [1.15] },
  { name: 'Sniper', dmg: 75, rate: 1.2, mag: 4, reload: 2.3, spread: 0.09, adsMul: 0, moveSpread: 0.07, airSpread: 0.1, bloomPer: 0, bloomMax: 0, pellets: 1, range: 160, auto: false, zoom: [4, 8] },
];
export const SNIPER = 3;
export const BASE_FOV = 70;

export function spreadOf(w, ads, speed, air, bloom = 0) {
  let s = ads ? w.spread * w.adsMul : w.spread;
  s += w.moveSpread * Math.min(1, speed / SPEED) * (ads ? 0.5 : 1);
  if (air) s += w.airSpread;
  return s + bloom;
}
export const adsSpeed = (weapon, ads) => (ads ? (weapon === SNIPER ? 0.4 : 0.65) : 1); // you walk slower when aiming
export function adsFov(weapon, level = 0) {
  const z = WEAPONS[weapon].zoom;
  const f = z[Math.min(level, z.length - 1)];
  return (2 * Math.atan(Math.tan((BASE_FOV * Math.PI) / 360) / f) * 180) / Math.PI;
}


export function newBody(x = 0, y = 0, z = 0) {
  return { x, y, z, vx: 0, vy: 0, vz: 0, kx: 0, kz: 0, fuel: FUEL_MAX, ground: false, thrusting: false };
}

function overlaps(b, x, y, z) {
  return x - R < b.maxx && x + R > b.minx && y < b.maxy && y + H > b.miny && z - R < b.maxz && z + R > b.minz;
}

// One fixed physics step. inp: { mx, mz, yaw, jet, jump }.
export function moveStep(p, inp, dt = TICK) {
  const sy = Math.sin(inp.yaw), cy = Math.cos(inp.yaw);
  let wx = -sy * inp.mz + cy * inp.mx;
  let wz = -cy * inp.mz - sy * inp.mx;
  const len = Math.hypot(wx, wz);
  if (len > 1) { wx /= len; wz /= len; }
  const accel = (p.ground ? 60 : 22) * dt;
  const spd = SPEED * (inp.spd == null ? 1 : inp.spd);
  p.vx += Math.max(-accel, Math.min(accel, wx * spd - p.vx));
  p.vz += Math.max(-accel, Math.min(accel, wz * spd - p.vz));

  if (inp.jump && p.ground) p.vy = JUMP;

  p.thrusting = !!inp.jet && p.fuel > 0;
  p.vy -= GRAVITY * dt;
  if (p.thrusting) {
    p.vy += THRUST * dt;
    if (p.ground && p.vy < 4) p.vy = 4; // little hop to lift off
    p.fuel = Math.max(0, p.fuel - 32 * dt);
  } else {
    p.fuel = Math.min(FUEL_MAX, p.fuel + (p.ground ? 45 : 7) * dt);
  }
  if (p.vy > MAX_UP) p.vy = MAX_UP;
  if (p.vy < -MAX_FALL) p.vy = -MAX_FALL;

  p.ground = false;
  const bs = MAP.boxes;

  // Hits shove people: knockback (kx, kz) rides on top of walking speed and fades quickly.
  const kd = Math.exp(-5 * dt);
  p.kx *= kd; p.kz *= kd;
  const mvx = p.vx + p.kx, mvz = p.vz + p.kz;
  p.x += mvx * dt;
  for (const b of bs) if (overlaps(b, p.x, p.y, p.z)) { p.x = mvx > 0 ? b.minx - R - 0.001 : b.maxx + R + 0.001; p.vx = 0; p.kx = 0; }
  p.y += p.vy * dt;
  for (const b of bs) {
    if (!overlaps(b, p.x, p.y, p.z)) continue;
    if (p.vy <= 0) { p.y = b.maxy; p.ground = true; } else p.y = b.miny - H - 0.001;
    p.vy = 0;
  }
  p.z += mvz * dt;
  for (const b of bs) if (overlaps(b, p.x, p.y, p.z)) { p.z = mvz > 0 ? b.minz - R - 0.001 : b.maxz + R + 0.001; p.vz = 0; p.kz = 0; }

  if (p.y <= 0) { p.y = 0; if (p.vy < 0) p.vy = 0; p.ground = true; }
  if (p.y > CEILING) { p.y = CEILING; if (p.vy > 0) p.vy = 0; } // flight ceiling
  if (MAP.radius) { // round island: the sea starts at MAP.radius
    const lim = MAP.radius - R, dd = Math.hypot(p.x, p.z);
    if (dd > lim) {
      const nx = p.x / dd, nz = p.z / dd;
      p.x = nx * lim; p.z = nz * lim;
      const vn = p.vx * nx + p.vz * nz; if (vn > 0) { p.vx -= vn * nx; p.vz -= vn * nz; }
      p.kx = 0; p.kz = 0;
    }
  } else {
    const lim = HALF - R;
    if (p.x > lim) { p.x = lim; p.vx = 0; } else if (p.x < -lim) { p.x = -lim; p.vx = 0; }
    if (p.z > lim) { p.z = lim; p.vz = 0; } else if (p.z < -lim) { p.z = -lim; p.vz = 0; }
  }
}

// Ray vs AABB (slab method). Returns entry distance or -1.
export function rayAABB(ox, oy, oz, dx, dy, dz, x0, y0, z0, x1, y1, z1, maxT) {
  let tmin = 0, tmax = maxT;
  const o = [ox, oy, oz], d = [dx, dy, dz], lo = [x0, y0, z0], hi = [x1, y1, z1];
  for (let i = 0; i < 3; i++) {
    if (Math.abs(d[i]) < 1e-9) {
      if (o[i] < lo[i] || o[i] > hi[i]) return -1;
    } else {
      let t1 = (lo[i] - o[i]) / d[i], t2 = (hi[i] - o[i]) / d[i];
      if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
      if (t1 > tmin) tmin = t1;
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) return -1;
    }
  }
  return tmin;
}

// Distance to the nearest world surface (boxes + ground), or maxT if clear.
export function rayWorld(ox, oy, oz, dx, dy, dz, maxT) {
  let best = maxT;
  for (const b of MAP.boxes) {
    const t = rayAABB(ox, oy, oz, dx, dy, dz, b.minx, b.miny, b.minz, b.maxx, b.maxy, b.maxz, best);
    if (t >= 0 && t < best) best = t;
  }
  if (dy < -1e-9) {
    const t = -oy / dy;
    if (t >= 0 && t < best) best = t;
  }
  return best;
}

export function aimDir(yaw, pitch) {
  const cp = Math.cos(pitch);
  return [-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp];
}

// Third-person camera spot: behind and a little right of the player's eye. One ray from the eye to
// that exact spot (shoulder offset included), stopping short of anything solid, so the camera can
// never end up inside a wall, pillar or the ground.
export function cameraPos(x, y, z, yaw, pitch) {
  const eyeY = y + EYE;
  const fwd = aimDir(yaw, pitch);
  const dx = -fwd[0] * 3.6 + Math.cos(yaw) * 0.75, dy = -fwd[1] * 3.2 + 0.4, dz = -fwd[2] * 3.6 - Math.sin(yaw) * 0.75;
  const dl = Math.hypot(dx, dy, dz);
  const hit = rayWorld(x, eyeY, z, dx / dl, dy / dl, dz / dl, dl + 0.6);
  let d = Math.max(0.5, Math.min(dl, hit - 0.6));
  // The ray is a line; the camera is a lens with a near plane. Also keep 0.4 m clear of any box
  // sideways (a ray can skim past an edge and still leave the lens inside it).
  const near = (cx, cy, cz) => MAP.boxes.some((b) => cx > b.minx - 0.4 && cx < b.maxx + 0.4 && cy > b.miny - 0.4 && cy < b.maxy + 0.4 && cz > b.minz - 0.4 && cz < b.maxz + 0.4);
  const at = (t) => [x + (dx / dl) * t, Math.max(0.3, eyeY + (dy / dl) * t), z + (dz / dl) * t];
  while (d > 0.6 && near(...at(d))) d -= 0.2;
  // Squeezed against a wall with nowhere to back up: sit at the eye (first-person) for a moment.
  if (near(...at(d))) return [x, eyeY, z, true];
  return at(d);
}

// ---------------------------------------------------------------- hit boxes + accurate aiming
// What you see is what gets hit: a body box and a smaller head box that match the avatar's size.
export const HEAD_Y = 1.5, HEAD_TOP = 1.9, BODY_HALF = 0.34, HEAD_HALF = 0.19;

// Nearest living player on a ray. Returns { t, player, head } or null. pad fattens the boxes a little.
export function rayPlayers(ox, oy, oz, dx, dy, dz, maxT, players, skipId, pad = 0) {
  let best = maxT, found = null;
  for (const p of players) {
    if (p.id === skipId || !p.alive) continue;
    // monsters carry their own size: hw half-width, bh body height, th total height
    const bh = (p.hw || BODY_HALF) + pad, hh = (p.hw ? p.hw * 0.6 : HEAD_HALF) + pad, top = p.bh || HEAD_Y, full = p.th || HEAD_TOP;
    let t = rayAABB(ox, oy, oz, dx, dy, dz, p.x - bh, p.y, p.z - bh, p.x + bh, p.y + top, p.z + bh, best);
    if (t >= 0 && t < best) { best = t; found = { t, player: p, head: false }; }
    t = rayAABB(ox, oy, oz, dx, dy, dz, p.x - hh, p.y + top, p.z - hh, p.x + hh, p.y + full + pad, p.z + hh, best);
    if (t >= 0 && t < best) { best = t; found = { t, player: p, head: true }; }
  }
  return found;
}

// Where does a shot actually go? The crosshair sits at the middle of the screen, and the third-person
// camera is behind and beside the player, so we find what the CAMERA ray points at, then fire from the
// eye toward that exact spot. That way the bullet lands on the crosshair at any distance, including
// point-blank. fp = first-person (scoped sniper, bots, squeezed camera): camera is the eye itself.
// Returns the aim direction (before spread) and what a spread-free bullet would hit.
export function aimShot(me, players, yaw, pitch, fp, range, pad = 0) {
  const ex = me.x, ey = me.y + EYE, ez = me.z;
  const d = aimDir(yaw, pitch);
  let cx = ex, cy = ey, cz = ez;
  if (!fp) { const c = cameraPos(me.x, me.y, me.z, yaw, pitch); cx = c[0]; cy = c[1]; cz = c[2]; }
  let t = rayWorld(cx, cy, cz, d[0], d[1], d[2], range + 6);
  const hp = rayPlayers(cx, cy, cz, d[0], d[1], d[2], t, players, me.id, pad);
  if (hp) t = hp.t;
  let dir = d;
  const vx = cx + d[0] * t - ex, vy = cy + d[1] * t - ey, vz = cz + d[2] * t - ez;
  const len = Math.hypot(vx, vy, vz);
  if (len > 1.2) { // a target right behind the eye would flip the aim: keep the plain direction then
    const u = [vx / len, vy / len, vz / len];
    if (u[0] * d[0] + u[1] * d[1] + u[2] * d[2] > 0.5) dir = u;
  }
  const tWorld = rayWorld(ex, ey, ez, dir[0], dir[1], dir[2], range);
  const hit = rayPlayers(ex, ey, ez, dir[0], dir[1], dir[2], tWorld, players, me.id, pad);
  return { dir, hit, tWorld };
}

// True when the crosshair is on another living player with a clear line of sight (used for auto-fire).
export function aimedEnemy(me, players, yaw, pitch, range, fp = false) {
  return !!aimShot(me, players, yaw, pitch, fp, range, 0.12).hit;
}
