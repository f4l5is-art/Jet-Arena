// The arena: "Dusty Yard", a 100 m x 100 m walled industrial yard.
//   solid boxes (collision + visuals), props (visual-only decoration), spawn points.
// Pure data + small generators, no DOM or three.js, so the simulation and tests can load it in Node.
//
// Layout (top-down, +z is "south"):
//   centre   : tower deck with a sniper nest on a tall column
//   corners  : four warehouses (walk in through the doors, or fly onto the roofs)
//   west     : container yard (stacked shipping containers)
//   east     : forest (trees and boulders)
//   north/south edge : watchtowers
//   everywhere: crates, sandbags, concrete barriers, barrels. Mirrored so no side is unfair.

import { ISLAND } from './island.js';
export const HALF = 50;
const R = 0.4, H = 1.8; // player size, for spawn validation

export const boxes = [];
export const decor = []; // visual-only things: { t: 'pine'|'rock'|'barrel'|'mount', x, y, z, s, ... }
export const pads = []; // ground patches for looks only: { x, z, w, d, m: 'concrete'|'dirt'|'forest' }

export function box(x, y, z, w, h, d, kind = 'cover', hide = false) {
  const b = { x, y, z, w, h, d, kind, hide, minx: x - w / 2, maxx: x + w / 2, miny: y, maxy: y + h, minz: z - d / 2, maxz: z + d / 2 };
  boxes.push(b);
  return b;
}

// tiny seeded random so the map is identical on every device
let seed = 20261114;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

// ---------------------------------------------------------------- perimeter
// 9 m concrete wall. Side walls stop where the north/south walls begin (no shared faces).
box(0, 0, -HALF - 1, HALF * 2 + 4, 9, 2, 'wall');
box(0, 0, HALF + 1, HALF * 2 + 4, 9, 2, 'wall');
box(-HALF - 1, 0, 0, 2, 9, HALF * 2, 'wall');
box(HALF + 1, 0, 0, 2, 9, HALF * 2, 'wall');

// ---------------------------------------------------------------- centre tower
// Deck on four pillars, a tall column with a sniper nest on top, low walls for cover.
box(0, 6, 0, 16, 0.8, 16, 'deck');
for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(sx * 6.5, 0, sz * 6.5, 2, 6, 2, 'pillar');
box(0, 0, 0, 2.4, 12, 2.4, 'pillar');                 // central column, 12 m
box(0, 12, 0, 7, 0.8, 7, 'deck');                     // sniper nest
for (const [x, z, w, d] of [[0, -3.1, 7, 0.6], [0, 3.1, 7, 0.6], [-3.1, 0, 0.6, 5.6], [3.1, 0, 0.6, 5.6]]) box(x, 12.8, z, w, 1.0, d, 'concrete');
box(5, 6.8, 5, 4, 1.3, 1, 'cover'); box(-5, 6.8, -5, 4, 1.3, 1, 'cover');
box(-5, 6.8, 5, 1, 1.3, 4, 'cover'); box(5, 6.8, -5, 1, 1.3, 4, 'cover');

// ---------------------------------------------------------------- warehouses
// Walls with a door gap, a roof you can stand on, parapet cover on the roof, crates inside.
function wallX(cx, z, len, h, doorAt, kind) { // wall along x at depth z
  const t = 0.6;
  if (doorAt === null) { box(cx, 0, z, len, h, t, kind); return; }
  const dw = 4.4, dh = 3.8, left = cx - len / 2, right = cx + len / 2, d0 = doorAt - dw / 2, d1 = doorAt + dw / 2;
  box((left + d0) / 2, 0, z, d0 - left, h, t, kind);
  box((d1 + right) / 2, 0, z, right - d1, h, t, kind);
  box(doorAt, dh, z, dw, h - dh, t, kind);
}
function wallZ(x, cz, len, h, doorAt, kind) { // wall along z at x
  const t = 0.6;
  if (doorAt === null) { box(x, 0, cz, t, h, len, kind); return; }
  const dw = 4.4, dh = 3.8, a = cz - len / 2, b = cz + len / 2, d0 = doorAt - dw / 2, d1 = doorAt + dw / 2;
  box(x, 0, (a + d0) / 2, t, h, d0 - a, kind);
  box(x, 0, (d1 + b) / 2, t, h, b - d1, kind);
  box(x, dh, doorAt, t, h - dh, dw, kind);
}
function warehouse(cx, cz, w, d, h, sx, sz) {
  // sx, sz = which way is "towards the centre of the map" (doors face the centre and the middle lane)
  wallX(cx, cz - d / 2, w + 0.6, h, sz < 0 ? cx : null, 'brick');          // north wall
  wallX(cx, cz + d / 2, w + 0.6, h, sz > 0 ? cx : null, 'brick');          // south wall
  wallZ(cx - w / 2, cz, d - 0.6, h, sx < 0 ? cz : null, 'brick');          // west wall
  wallZ(cx + w / 2, cz, d - 0.6, h, sx > 0 ? cz : null, 'brick');          // east wall
  box(cx, h, cz, w + 1.2, 0.6, d + 1.2, 'roof');                      // roof with a little overhang
  pads.push({ x: cx, z: cz, w: w + 0.6, d: d + 0.6, m: 'concrete' }); // concrete floor inside
  // roof parapets (cover for fights up there), with a gap so you can walk through
  box(cx - w / 4 - 1, h + 0.6, cz - d / 2 + 0.4, w / 2 - 3, 0.9, 0.5, 'concrete');
  box(cx + w / 4 + 1, h + 0.6, cz + d / 2 - 0.4, w / 2 - 3, 0.9, 0.5, 'concrete');
  // inside: crates and a shelf-like block
  box(cx - sx * 3, 0, cz - sz * 2.4, 2.2, 1.4, 2.2, 'cover');
  box(cx + sx * 2.5, 0, cz + sz * 2.6, 3.2, 1.0, 1.4, 'cover');
  box(cx, 0, cz, 1.4, 2.6, 5, 'concrete');
}
for (const sx of [-1, 1]) for (const sz of [-1, 1]) warehouse(sx * 31, sz * 30, 18, 12, 6, -sx, -sz);

// ---------------------------------------------------------------- watchtowers (north and south edge)
for (const sz of [-1, 1]) {
  const z = sz * 43;
  box(0, 7, z, 7, 0.8, 7, 'deck');
  for (const lx of [-1, 1]) for (const lz of [-1, 1]) box(lx * 2.9, 0, z + lz * 2.9, 0.9, 7, 0.9, 'pillar');
  box(0, 7.8, z + sz * 3.1, 7, 1.0, 0.6, 'concrete');
  box(0, 0, z - sz * 5.5, 5, 1.2, 1, 'sandbag');
}

// ---------------------------------------------------------------- container yard (west)
const CONT = ['container_red', 'container_blue', 'container_green', 'container_orange'];
function container(x, y, z, alongX, kind) { box(x, y, z, alongX ? 6.2 : 2.6, 2.6, alongX ? 2.6 : 6.2, kind); }
container(-42, 0, -11, false, CONT[0]); container(-42, 0, -4, false, CONT[1]); container(-42, 0, 3, false, CONT[2]); container(-42, 0, 10, false, CONT[3]);
container(-42, 2.6, -7.5, false, CONT[3]); container(-42, 2.6, 6.5, false, CONT[0]); // second level, offset so there is a gap
container(-35, 0, -8, true, CONT[2]); container(-35, 0, 8, true, CONT[1]);
container(-32, 0, 0, false, CONT[0]);
box(-38.5, 0, 0, 1, 1.3, 1, 'cover'); box(-30, 0, -14, 1.6, 1.6, 1.6, 'cover');

// ---------------------------------------------------------------- forest (east): collidable trunks + boulders
const treeSpots = [[40, -12], [44, -6], [37, -2], [43, 2], [38, 7], [45, 11], [34, 13], [41, -15], [34, -9], [47, -1]];
for (const [x, z] of treeSpots) {
  box(x, 0, z, 0.9, 7, 0.9, 'trunk', true);
  decor.push({ t: 'pine', x, y: 0, z, s: 1 + rnd() * 0.5, r: rnd() * 6 });
}
for (const [x, z, s] of [[36, -5, 1.5], [42, 5, 1.3], [46, -10, 1.7], [38, 12, 1.2]]) {
  box(x, 0, z, s * 1.6, s * 1.1, s * 1.6, 'rock', true);
  decor.push({ t: 'rock', x, y: 0, z, s, r: rnd() * 6 });
}

// ground patches: gravel roads, the container yard and a darker forest floor
pads.push({ x: -32, z: 0, w: 32, d: 6, m: 'dirt' }, { x: 32, z: 0, w: 32, d: 6, m: 'dirt' });
pads.push({ x: 0, z: -32, w: 6, d: 32, m: 'dirt' }, { x: 0, z: 32, w: 6, d: 32, m: 'dirt' });
pads.push({ x: -38, z: 0, w: 16, d: 34, m: 'dirt' });
pads.push({ x: 40, z: 0, w: 18, d: 36, m: 'forest' });

// ---------------------------------------------------------------- mirrored cover (every quadrant gets the same)
const quad = [
  // x, z, w, h, d, kind
  [13, 8, 3, 1.6, 2, 'cover'], [19, 14, 2.4, 1.2, 2.4, 'cover'], [10, 18, 4, 1.0, 1, 'sandbag'],
  [22, 5, 1.2, 2.2, 6, 'concrete'], [8, 27, 1, 1.9, 6, 'concrete'], [20, 40, 6, 1.4, 1, 'sandbag'],
  [14, 41, 2.4, 2.4, 2.4, 'cover'], [4, 34, 3, 1.5, 3, 'cover'], [46, 24, 3, 2.4, 3, 'cover'],
];
for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
  for (const [x, z, w, h, d, k] of quad) {
    if (Math.abs(x) > 28 && Math.abs(z) < 16) continue; // keep the container yard and the forest clear
    box(sx * x, 0, sz * z, w, h, d, k);
  }
}
// barrels (visual cylinders over a square collision box)
for (const [x, z] of [[-16, -3], [-16.2, -1.8], [-15, -2.4], [16, 3], [16.2, 1.8], [15, 2.4], [-3, 24], [3, -24], [24, -2], [-24, 2]]) {
  box(x, 0, z, 0.95, 1.15, 0.95, 'barrel', true);
  decor.push({ t: 'barrel', x, y: 0, z, c: rnd() < 0.5 ? 0 : 1 });
}

// ---------------------------------------------------------------- scenery outside the walls (visual only)
for (let i = 0; i < 70; i++) {
  const a = (i / 70) * Math.PI * 2 + rnd() * 0.1, r = HALF + 6 + rnd() * 26;
  decor.push({ t: 'pine', x: Math.cos(a) * r, y: 0, z: Math.sin(a) * r, s: 1.2 + rnd() * 1.4, r: rnd() * 6 });
}
for (let i = 0; i < 14; i++) {
  const a = (i / 14) * Math.PI * 2 + 0.2, r = HALF + 40 + rnd() * 14;
  decor.push({ t: 'mount', x: Math.cos(a) * r, y: -2, z: Math.sin(a) * r, s: 1 + rnd() * 0.8, r: rnd() * 6 });
}

// ---------------------------------------------------------------- spawn points
function bodyFree(x, y, z) {
  if (Math.abs(x) > HALF - R || Math.abs(z) > HALF - R) return false;
  return !boxes.some((b) => x - R - 0.2 < b.maxx && x + R + 0.2 > b.minx && y < b.maxy && y + H > b.miny && z - R - 0.2 < b.maxz && z + R + 0.2 > b.minz);
}
const candidates = [];
for (const x of [-46, -38, -26, -14, 0, 14, 26, 38, 46]) for (const z of [-46, -38, -26, -14, 0, 14, 26, 38, 46]) candidates.push([x, 0, z]);
candidates.push([0, 6.8, 6.5], [0, 6.8, -6.5], [6.5, 6.8, 0], [-6.5, 6.8, 0], [0, 12.8, 1.4]);        // tower deck + nest
for (const sx of [-1, 1]) for (const sz of [-1, 1]) candidates.push([sx * 31, 6.6, sz * 26], [sx * 27, 6.6, sz * 33]); // warehouse roofs
for (const sz of [-1, 1]) candidates.push([0, 7.8, sz * 42]);                                         // watchtowers
export const spawns = candidates.filter(([x, y, z]) => bodyFree(x, y, z));

// The arena data, kept aside: survival swaps the active map (see setMapKind), and `boxes` etc. are re-used in place.
const ARENA = { boxes: [...boxes], decor: [...decor], pads: [...pads], spawns: [...spawns], half: HALF, radius: 0, kind: 'arena' };
export const MAP = { boxes, decor, pads, spawns, half: HALF, radius: 0, kind: 'arena' };

// Switch the active map ('arena' or 'island'). Every module reads MAP at call time, so this takes effect everywhere.
export function setMapKind(kind) {
  const d = kind === 'island' ? ISLAND : ARENA;
  if (MAP.kind === d.kind) return;
  for (const k of ['boxes', 'decor', 'pads', 'spawns']) { MAP[k].length = 0; MAP[k].push(...d[k]); }
  MAP.half = d.half; MAP.radius = d.radius; MAP.kind = d.kind;
}
