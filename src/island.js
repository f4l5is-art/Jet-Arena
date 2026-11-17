// The survival map: a round island with a lighthouse in the middle. Pure data (no DOM, no three.js).
// Players cannot leave: beyond ISLAND_R is the sea, and the sea belongs to the monsters.
export const ISLAND_R = 46;
export const LH_TOP = 16; // top of the lighthouse gallery (reachable with the jetpack)
const R = 0.4, H = 1.8;

const boxes = [], decor = [], pads = [], spawns = [];
let seed = 90210;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

function box(x, y, z, w, h, d, kind = 'cover', hide = false) {
  boxes.push({ x, y, z, w, h, d, kind, hide, minx: x - w / 2, maxx: x + w / 2, miny: y, maxy: y + h, minz: z - d / 2, maxz: z + d / 2 });
}

// ---- lighthouse: a square tower, a gallery deck with a low rail, a lantern room on top
box(0, 0, 0, 4.6, 15.5, 4.6, 'lhcore', true);
box(0, 15.5, 0, 9, 0.5, 9, 'gallery');
for (const [x, z, w, d] of [[0, -4.35, 9, 0.3], [0, 4.35, 9, 0.3], [-4.35, 0, 0.3, 8.4], [4.35, 0, 0.3, 8.4]]) box(x, 16, z, w, 1.0, d, 'rail');

// ---- cabins (solid blocks with an overhanging roof) and low walls
for (const [x, z, w, d] of [[-22, -14, 6, 5], [22, -15, 5, 6], [-20, 19, 6, 5], [21, 17, 5, 6]]) {
  box(x, 0, z, w, 3, d, 'hut');
  box(x, 3, z, w + 1, 0.4, d + 1, 'hutroof');
}
box(-10, 0, -9, 5, 1.1, 0.8, 'sandbag'); box(10, 0, 9, 5, 1.1, 0.8, 'sandbag');
box(9, 0, -10, 0.8, 1.1, 5, 'sandbag'); box(-9, 0, 10, 0.8, 1.1, 5, 'sandbag');

// ---- crates and barrels scattered for cover
for (const [x, z, s] of [[-14, 3, 1.6], [-13, 4.6, 1.2], [15, -4, 1.6], [14, -5.6, 1.2], [3, 16, 1.5], [-4, -17, 1.5], [30, 3, 1.4], [-31, -4, 1.4], [28, 28, 1.6], [-29, 27, 1.5], [-5, 33, 1.5], [6, -34, 1.5]]) {
  box(x, 0, z, s, s * 0.9, s, 'crate');
}
for (const [x, z] of [[-17, 12], [17, -12], [24, 4], [-25, -5], [8, 26], [-9, -26]]) {
  box(x, 0, z, 0.95, 1.15, 0.95, 'barrel', true);
  decor.push({ t: 'barrel', x, y: 0, z, c: rnd() < 0.5 ? 0 : 1 });
}

// ---- boulders
for (const [x, z, s] of [[-30, -22, 2.2], [32, -20, 2.0], [-34, 14, 1.8], [35, 12, 2.2], [0, 28, 1.6], [4, -30, 1.8], [-14, -33, 1.5], [18, 32, 1.7]]) {
  box(x, 0, z, s * 1.6, s * 1.1, s * 1.6, 'rock', true);
  decor.push({ t: 'rock', x, y: 0, z, s, r: rnd() * 6 });
}

// ---- trees: the ones near the middle have solid trunks, the rest are scenery
for (let i = 0; i < 46; i++) {
  const a = rnd() * Math.PI * 2, r = 12 + rnd() * 32;
  const x = Math.cos(a) * r, z = Math.sin(a) * r;
  if (Math.hypot(x, z) < 11) continue;
  if (boxes.some((b) => x > b.minx - 3 && x < b.maxx + 3 && z > b.minz - 3 && z < b.maxz + 3)) continue;
  decor.push({ t: 'pine', x, y: 0, z, s: 0.9 + rnd() * 0.7, r: rnd() * 6 });
  if (r < 36) box(x, 0, z, 0.8, 6, 0.8, 'trunk', true);
}

// ---- dock on the south shore (walk-through scenery) and the rescue boat's berth
decor.push({ t: 'dock', x: 0, y: 0, z: 41 });

// ---- spawn points: a ring around the lighthouse base
function bodyFree(x, y, z) {
  if (Math.hypot(x, z) > ISLAND_R - R) return false;
  return !boxes.some((b) => x - R - 0.2 < b.maxx && x + R + 0.2 > b.minx && y < b.maxy && y + H > b.miny && z - R - 0.2 < b.maxz && z + R + 0.2 > b.minz);
}
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2, x = Math.cos(a) * 7.5, z = Math.sin(a) * 7.5;
  if (bodyFree(x, 0, z)) spawns.push([x, 0, z]);
}

export const ISLAND = { boxes, decor, pads, spawns, half: ISLAND_R, radius: ISLAND_R, kind: 'island' };
