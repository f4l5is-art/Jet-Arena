import assert from 'node:assert/strict';
import { MAP, HALF } from '../src/core.js';

// Two surfaces that face the same way, overlap, and sit almost on top of each other will flicker
// ("z-fight") on phones, whose depth buffers are coarse. Phones can't separate surfaces closer than
// roughly 0.25 m at 40 m distance, so none may exist in the map.
const MIN_GAP = 0.3;
const bs = MAP.boxes;
const faces = [];
for (const b of bs) {
  faces.push({ b, axis: 'y', dir: +1, at: b.maxy, u: [b.minx, b.maxx], v: [b.minz, b.maxz] });
  if (b.miny > 0.05) faces.push({ b, axis: 'y', dir: -1, at: b.miny, u: [b.minx, b.maxx], v: [b.minz, b.maxz] });
  faces.push({ b, axis: 'x', dir: +1, at: b.maxx, u: [b.miny, b.maxy], v: [b.minz, b.maxz] });
  faces.push({ b, axis: 'x', dir: -1, at: b.minx, u: [b.miny, b.maxy], v: [b.minz, b.maxz] });
  faces.push({ b, axis: 'z', dir: +1, at: b.maxz, u: [b.minx, b.maxx], v: [b.miny, b.maxy] });
  faces.push({ b, axis: 'z', dir: -1, at: b.minz, u: [b.minx, b.maxx], v: [b.miny, b.maxy] });
}
// the ground is an up-facing surface too
faces.push({ b: { kind: 'ground', x: 0, z: 0 }, axis: 'y', dir: +1, at: 0, u: [-HALF, HALF], v: [-HALF, HALF] });

const ov = (a, b) => Math.min(a[1], b[1]) - Math.max(a[0], b[0]);
// a face is hidden if it lies inside another box (it can never be seen)
const buried = (f) => {
  const eps = 0.001;
  return bs.some((o) => {
    if (o === f.b) return false;
    const mid = (r) => (r[0] + r[1]) / 2;
    const p = f.axis === 'y' ? [mid(f.u), f.at + f.dir * eps, mid(f.v)] : f.axis === 'x' ? [f.at + f.dir * eps, mid(f.u), mid(f.v)] : [mid(f.u), mid(f.v), f.at + f.dir * eps];
    return p[0] > o.minx && p[0] < o.maxx && p[1] > o.miny && p[1] < o.maxy && p[2] > o.minz && p[2] < o.maxz;
  });
};
const bad = [];
for (let i = 0; i < faces.length; i++) for (let j = i + 1; j < faces.length; j++) {
  const a = faces[i], c = faces[j];
  if (a.axis !== c.axis || a.dir !== c.dir || a.b === c.b) continue;
  if (Math.abs(a.at - c.at) >= MIN_GAP) continue;
  if (ov(a.u, c.u) <= 0.01 || ov(a.v, c.v) <= 0.01) continue;
  if (buried(a) || buried(c)) continue; // one of them can't be seen anyway
  bad.push(`${a.b.kind}@${a.b.x},${a.b.z} vs ${c.b.kind}@${c.b.x},${c.b.z}  (${a.axis}${a.dir > 0 ? '+' : '-'} ${a.at.toFixed(2)} / ${c.at.toFixed(2)})`);
}
assert.equal(bad.length, 0, 'near-coplanar surfaces will flicker:\n  ' + bad.join('\n  '));
console.log(`ok - no flickering surface pairs among ${faces.length} faces\n\n1 z-fight test passed`);
