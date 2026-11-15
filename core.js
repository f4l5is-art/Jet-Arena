// Shared constants, map, weapons, movement physics and ray helpers.
// Pure JS (no DOM, no three.js) so it runs in the browser and in Node tests.

export const TICK = 1 / 60;
export const HALF = 30; // arena is 60 x 60 m
export const R = 0.4; // player radius
export const H = 1.8; // player height
export const EYE = 1.6;
export const GRAVITY = 20;
export const THRUST = 38;
export const MAX_UP = 9;
export const MAX_FALL = 25;
export const SPEED = 7;
export const FUEL_MAX = 100;
export const HP_MAX = 100;

export const WEAPONS = [
  { name: 'Pistol', dmg: 18, rate: 0.28, mag: 12, reload: 1.1, spread: 0.01, pellets: 1, range: 90, auto: false },
  { name: 'SMG', dmg: 9, rate: 0.085, mag: 30, reload: 1.6, spread: 0.035, pellets: 1, range: 60, auto: true },
  { name: 'Shotgun', dmg: 9, rate: 0.85, mag: 6, reload: 2.0, spread: 0.09, pellets: 8, range: 26, auto: false },
  { name: 'Sniper', dmg: 75, rate: 1.2, mag: 4, reload: 2.3, spread: 0.002, pellets: 1, range: 160, auto: false },
];

// Boxes: x, z = centre; y = bottom; w, d = size on x/z; h = height.
function box(x, y, z, w, h, d, kind = 'cover') {
  return { x, y, z, w, h, d, kind, minx: x - w / 2, maxx: x + w / 2, miny: y, maxy: y + h, minz: z - d / 2, maxz: z + d / 2 };
}

const boxes = [];
// Perimeter walls (tall, so nobody leaves the arena).
boxes.push(box(0, 0, -HALF - 1, HALF * 2 + 4, 14, 2, 'wall'));
boxes.push(box(0, 0, HALF + 1, HALF * 2 + 4, 14, 2, 'wall'));
boxes.push(box(-HALF - 1, 0, 0, 2, 14, HALF * 2 + 4, 'wall'));
boxes.push(box(HALF + 1, 0, 0, 2, 14, HALF * 2 + 4, 'wall'));
// Centre tower: elevated deck on four pillars.
boxes.push(box(0, 4, 0, 11, 0.8, 11, 'deck'));
for (const sx of [-1, 1]) for (const sz of [-1, 1]) boxes.push(box(sx * 4.5, 0, sz * 4.5, 1.6, 4, 1.6, 'pillar'));
boxes.push(box(0, 4.8, 0, 3, 1.1, 1, 'cover'));
// Corner platforms.
for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
  boxes.push(box(sx * 21, 3, sz * 21, 8, 0.8, 8, 'deck'));
  boxes.push(box(sx * 21, 0, sz * 21, 1.4, 3, 1.4, 'pillar'));
  boxes.push(box(sx * 21, 3.8, sz * 23, 4, 1.1, 0.8, 'cover'));
}
// High bridges north and south.
boxes.push(box(0, 8.5, -19, 22, 0.6, 3.5, 'deck'));
boxes.push(box(0, 8.5, 19, 22, 0.6, 3.5, 'deck'));
// Ground cover.
const cover = [
  [-12, 0, 0, 3, 2, 1], [12, 0, 0, 3, 2, 1], [0, 0, -12, 1, 2, 3], [0, 0, 12, 1, 2, 3],
  [-10, 0, -9, 2, 1.2, 2], [10, 0, 9, 2, 1.2, 2], [-10, 0, 9, 2, 1.2, 2], [10, 0, -9, 2, 1.2, 2],
  [-24, 0, 0, 1.2, 3, 6], [24, 0, 0, 1.2, 3, 6], [0, 0, -26, 6, 3, 1.2], [0, 0, 26, 6, 3, 1.2],
  [-16, 0, -14, 4, 1.5, 1], [16, 0, 14, 4, 1.5, 1], [-16, 0, 14, 1, 1.5, 4], [16, 0, -14, 1, 1.5, 4],
];
for (const c of cover) boxes.push(box(...c));

export const MAP = {
  boxes,
  spawns: [
    [-26, 0, -26], [26, 0, -26], [-26, 0, 26], [26, 0, 26],
    [0, 0, -22], [0, 0, 22], [-20, 0, 0], [20, 0, 0],
    [-21, 3.8, -21], [21, 3.8, 21], [-21, 3.8, 21], [21, 3.8, -21],
    [0, 4.8, 3.5], [0, 9.1, -19], [0, 9.1, 19],
  ],
};

export function newBody(x = 0, y = 0, z = 0) {
  return { x, y, z, vx: 0, vy: 0, vz: 0, fuel: FUEL_MAX, ground: false, thrusting: false };
}

function overlaps(b, x, y, z) {
  return x - R < b.maxx && x + R > b.minx && y < b.maxy && y + H > b.miny && z - R < b.maxz && z + R > b.minz;
}

// One fixed physics step. inp: { mx, mz, yaw, jet }.
export function moveStep(p, inp, dt = TICK) {
  const sy = Math.sin(inp.yaw), cy = Math.cos(inp.yaw);
  let wx = -sy * inp.mz + cy * inp.mx;
  let wz = -cy * inp.mz - sy * inp.mx;
  const len = Math.hypot(wx, wz);
  if (len > 1) { wx /= len; wz /= len; }
  const accel = (p.ground ? 60 : 22) * dt;
  p.vx += Math.max(-accel, Math.min(accel, wx * SPEED - p.vx));
  p.vz += Math.max(-accel, Math.min(accel, wz * SPEED - p.vz));

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

  p.x += p.vx * dt;
  for (const b of bs) if (overlaps(b, p.x, p.y, p.z)) { p.x = p.vx > 0 ? b.minx - R - 0.001 : b.maxx + R + 0.001; p.vx = 0; }
  p.y += p.vy * dt;
  for (const b of bs) {
    if (!overlaps(b, p.x, p.y, p.z)) continue;
    if (p.vy <= 0) { p.y = b.maxy; p.ground = true; } else p.y = b.miny - H - 0.001;
    p.vy = 0;
  }
  p.z += p.vz * dt;
  for (const b of bs) if (overlaps(b, p.x, p.y, p.z)) { p.z = p.vz > 0 ? b.minz - R - 0.001 : b.maxz + R + 0.001; p.vz = 0; }

  if (p.y <= 0) { p.y = 0; if (p.vy < 0) p.vy = 0; p.ground = true; }
  if (p.y > 15) { p.y = 15; if (p.vy > 0) p.vy = 0; } // flight ceiling
  const lim = HALF - R;
  if (p.x > lim) { p.x = lim; p.vx = 0; } else if (p.x < -lim) { p.x = -lim; p.vx = 0; }
  if (p.z > lim) { p.z = lim; p.vz = 0; } else if (p.z < -lim) { p.z = -lim; p.vz = 0; }
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
