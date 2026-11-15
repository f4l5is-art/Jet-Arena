import assert from 'node:assert/strict';
import { MAP, cameraPos, HALF } from '../src/core.js';

// The third-person camera must never sit inside a solid box or under the ground,
// wherever the player stands and whichever way they look.
let n = 0, worst = 99;
const spots = [];
for (let x = -48; x <= 48; x += 3) for (let z = -48; z <= 48; z += 3) for (const y of [0, 6.8, 12.8, 16]) spots.push([x, y, z]);
// Only poses a player can really be in: the body (0.4 radius, 1.8 tall) must not overlap any box.
const legal = ([x, y, z]) => !MAP.boxes.some((b) => x - 0.4 < b.maxx && x + 0.4 > b.minx && y < b.maxy && y + 1.8 > b.miny && z - 0.4 < b.maxz && z + 0.4 > b.minz);
for (const [x, y, z] of spots.filter(legal)) {
  for (let yaw = 0; yaw < Math.PI * 2; yaw += 0.4) {
    for (const pitch of [-1.2, -0.5, 0, 0.6, 1.2]) {
      const [cx, cy, cz] = cameraPos(x, y, z, yaw, pitch);
      n++;
      assert.ok(cy >= 0.3, 'camera under ground');
      for (const b of MAP.boxes) {
        const inside = cx > b.minx - 0.15 && cx < b.maxx + 0.15 && cy > b.miny - 0.15 && cy < b.maxy + 0.15 && cz > b.minz - 0.15 && cz < b.maxz + 0.15;
        // A player standing on/inside geometry (spawned in it) is not a camera problem; skip those.
        const eyeInside = x > b.minx && x < b.maxx && z > b.minz && z < b.maxz && y + 1.6 > b.miny && y + 1.6 < b.maxy;
        if (inside && !eyeInside) assert.fail(`camera inside box ${b.kind} at player ${[x, y, z]} yaw ${yaw.toFixed(1)} pitch ${pitch}`);
      }
    }
  }
}
console.log(`ok - camera stayed outside all geometry in ${n} poses\n\n1 camera test passed`);
