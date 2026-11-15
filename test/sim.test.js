import assert from 'node:assert/strict';
import { Game } from '../src/sim.js';
import { moveStep, newBody, MAP, HALF, rayWorld, TICK, aimedEnemy, aimShot, spreadOf, adsSpeed, cameraPos, aimDir, WEAPONS, SPEED } from '../src/core.js';

let n = 0;
const ok = (name, fn) => { fn(); n++; console.log('ok -', name); };

// Seeded RNG so the tests are repeatable.
function seeded(seed) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }

ok('player falls and lands on the ground', () => {
  const b = newBody(-14, 5, 5);
  for (let i = 0; i < 120; i++) moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: false });
  assert.equal(b.y, 0); assert.ok(b.ground);
});

ok('jetpack lifts off, burns fuel, then recharges on the ground', () => {
  const b = newBody(-14, 0, 5);
  for (let i = 0; i < 60; i++) moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: true });
  assert.ok(b.y > 3, 'rose ' + b.y);
  assert.ok(b.fuel < 100);
  for (let i = 0; i < 600; i++) moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: false });
  assert.equal(b.y, 0); assert.equal(b.fuel, 100);
});

ok('player lands on a platform instead of falling through it', () => {
  const deck = MAP.boxes.find((x) => x.kind === 'deck' && x.y === 6);
  const b = newBody(deck.x + 2, 8, deck.z + 2);
  for (let i = 0; i < 120; i++) moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: false });
  assert.ok(Math.abs(b.y - deck.maxy) < 0.01, 'y=' + b.y);
});

ok('walls and arena bounds stop the player', () => {
  const b = newBody(0, 0, 20);
  for (let i = 0; i < 600; i++) moveStep(b, { mx: 0, mz: -1, yaw: Math.PI, jet: false }); // yaw PI walks +z
  assert.ok(b.z <= HALF);
  assert.ok(Math.abs(b.x) <= HALF);
});

ok('ray hits the ground and boxes', () => {
  assert.ok(Math.abs(rayWorld(0, 2, 20, 0, -1, 0, 50) - 2) < 1e-6);
  assert.ok(rayWorld(-48, 1, 0, 1, 0, 0, 100) < 40); // a wall / cover is in the way
});

ok('shooting damages and kills, scores a kill, then respawns', () => {
  const g = new Game({ rng: seeded(7), scoreLimit: 99 });
  const a = g.addPlayer('A'), v = g.addPlayer('V');
  const pa = g.players.get(a), pv = g.players.get(v);
  pa.body.x = 4.5; pa.body.y = 0; pa.body.z = 25; pv.body.x = 4.5; pv.body.y = 0; pv.body.z = 20;
  pa.weapon = 0; pa.inp.yaw = 0; pa.yaw = 0;
  let died = false;
  for (let s = 0; s < 600 && !died; s++) {
    g.setInput(a, { mx: 0, mz: 0, yaw: 0, pitch: 0.0, jet: false, fire: s % 8 < 4 });
    g.advance(TICK);
    pa.body.x = 4.5; pa.body.z = 25; pv.body.x = 4.5; pv.body.z = 20; // pin positions
    died = !pv.alive;
  }
  assert.ok(died, 'victim should die');
  assert.equal(pa.kills, 1); assert.equal(pv.deaths, 1);
  const ev = g.drainEvents();
  assert.ok(ev.some((e) => e[0] === 'k' && e[1] === a && e[2] === v));
  for (let s = 0; s < 60 * 4; s++) g.advance(TICK);
  assert.ok(pv.alive, 'victim respawned');
});

ok('weapon switch and reload work', () => {
  const g = new Game({ rng: seeded(3) });
  const a = g.addPlayer('A');
  const p = g.players.get(a);
  g.setInput(a, { sw: 3 }); g.advance(TICK * 2);
  assert.equal(p.weapon, 3);
  p.mags[3] = 0;
  g.setInput(a, { rl: true }); g.advance(TICK * 2);
  assert.ok(p.reloadLeft > 0);
  for (let s = 0; s < 60 * 3; s++) g.advance(TICK); // advance() caps one call at 0.25s
  assert.equal(p.mags[3], 4);
});

ok('bots fight each other and score kills; match ends at the limit', () => {
  const g = new Game({ rng: seeded(42), scoreLimit: 5, timeLimit: 300 });
  for (let i = 0; i < 4; i++) g.addPlayer('Bot' + i, true);
  let steps = 0;
  while (!g.over && steps < 60 * 300) { g.advance(TICK); steps++; }
  const total = [...g.players.values()].reduce((s, p) => s + p.kills, 0);
  assert.ok(total > 0, 'bots got kills: ' + total);
  assert.ok(g.over, 'match ended after ' + (steps / 60).toFixed(0) + 's');
  assert.ok(g.winner > 0);
  console.log('   ' + total + ' kills in ' + (steps / 60).toFixed(0) + 's of sim time');
});

ok('match restarts after the end screen', () => {
  const g = new Game({ rng: seeded(5), scoreLimit: 1, timeLimit: 5 });
  g.addPlayer('A', true); g.addPlayer('B', true);
  for (let i = 0; i < 60 * 30 && !g.over; i++) g.advance(TICK);
  assert.ok(g.over);
  for (let i = 0; i < 60 * 9; i++) g.advance(TICK);
  assert.ok(!g.over);
  assert.ok([...g.players.values()].every((p) => p.kills === 0));
});

ok('snapshot is small and well formed', () => {
  const g = new Game({ rng: seeded(1) });
  for (let i = 0; i < 8; i++) g.addPlayer('P' + i, true);
  g.advance(1);
  const s = JSON.stringify(g.snapshot());
  assert.ok(s.length < 1500, 'snapshot bytes ' + s.length);
  console.log('   8-player snapshot = ' + s.length + ' bytes');
});

ok('auto-fire check: on target, off target, behind cover, dead', () => {
  const me = { id: 1, x: 4.5, y: 0, z: 25 };
  const foe = { id: 2, x: 4.5, y: 0, z: 20, alive: true };
  assert.ok(aimedEnemy(me, [me, foe], 0, 0, 90), 'enemy dead ahead');
  assert.ok(!aimedEnemy(me, [me, foe], 0.6, 0, 90), 'looking away');
  assert.ok(!aimedEnemy(me, [me, { ...foe, alive: false }], 0, 0, 90), 'dead enemy');
  assert.ok(!aimedEnemy(me, [me, { ...foe, z: 5 }], 0, 0, 10), 'out of weapon range');
  const wall = { x: 4.5, y: 0, z: 22, w: 4, h: 4, d: 0.5, kind: 'wall', hide: false, minx: 2.5, maxx: 6.5, miny: 0, maxy: 4, minz: 21.75, maxz: 22.25 };
  MAP.boxes.push(wall);
  const blocked = !aimedEnemy(me, [me, foe], 0, 0, 90);
  MAP.boxes.pop();
  assert.ok(blocked, 'wall between');
});

ok('jump: leaves the ground about 1.5 m, no fuel used, lands again', () => {
  const b = newBody(-14, 0, 5);
  moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: false }); // settle onto the floor first
  moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: false, jump: true });
  let peak = 0, left = false;
  for (let i = 0; i < 120; i++) { moveStep(b, { mx: 0, mz: 0, yaw: 0, jet: false }); peak = Math.max(peak, b.y); if (!b.ground) left = true; }
  assert.ok(left, 'was airborne');
  assert.ok(peak > 1.4 && peak < 1.9, 'peak ' + peak.toFixed(2));
  assert.equal(b.fuel, 100); assert.ok(b.ground && b.y === 0);
  const air = newBody(-14, 5, 5); air.ground = false;
  moveStep(air, { mx: 0, mz: 0, yaw: 0, jet: false, jump: true });
  assert.ok(air.vy < 0, 'cannot jump in mid-air');
});

ok('a hit shoves the victim along the shot and the shove fades out', () => {
  const g = new Game({ rng: seeded(9), scoreLimit: 99 });
  const a = g.addPlayer('A'), v = g.addPlayer('V');
  const pa = g.players.get(a), pv = g.players.get(v);
  pa.body.x = 4.5; pa.body.y = 0; pa.body.z = 25; pv.body.x = 4.5; pv.body.y = 0; pv.body.z = 20;
  pa.weapon = 3; pa.yaw = 0; pa.inp.yaw = 0; pa.cool = 0;
  g.setInput(a, { yaw: 0, pitch: -0.12, fire: true }); // aim at the torso, not the head, so the victim survives
  let pushed = 0;
  for (let s = 0; s < 30; s++) { g.advance(TICK); pushed = Math.min(pushed, pv.body.kz); }
  assert.ok(pushed < -1, 'victim shoved away (-z): ' + pushed.toFixed(2));
  g.setInput(a, { yaw: 0, pitch: 0, fire: false });
  assert.ok(pv.alive, 'victim survived the hit');
  for (let s = 0; s < 120; s++) g.advance(TICK);
  assert.ok(Math.abs(pv.body.kz) < 0.05, 'shove faded');
});


// ------------------------------------------------------------------ aiming accuracy
ok('crosshair accuracy: a target under the crosshair is hit at 3 m, 8 m, 20 m and 50 m', () => {
  const me = { id: 1, x: 4.5, y: 0, z: 25 };
  for (const yaw of [0, 0.7, 2.2, -1.4]) {
    for (const pitch of [0, 0.15, -0.1]) {
      const cam = cameraPos(me.x, me.y, me.z, yaw, pitch);
      const d = aimDir(yaw, pitch);
      for (const dist of [3, 8, 20, 50]) {
        // The camera is ~3.6 m behind the player, so the point the crosshair sees at `dist` from the eye is:
        const eye = [me.x, me.y + 1.6, me.z];
        const t = Math.hypot(...eye.map((v, i) => v - cam[i])) + dist;
        const P = cam.slice(0, 3).map((v, i) => v + d[i] * t);
        if (Math.abs(P[0]) > 28 || Math.abs(P[2]) > 28 || P[1] < 0.7 || P[1] > 14) continue; // off the map
        const foe = { id: 2, x: P[0], y: P[1] - 0.8, z: P[2], alive: true }; // crosshair on its chest
        // skip spots where the line is blocked by scenery
        const blocked = rayWorld(cam[0], cam[1], cam[2], d[0], d[1], d[2], t) < t - 0.05;
        const ev = [P[0] - eye[0], P[1] - eye[1], P[2] - eye[2]], el = Math.hypot(...ev);
        const eyeBlocked = rayWorld(eye[0], eye[1], eye[2], ev[0] / el, ev[1] / el, ev[2] / el, el) < el - 0.05;
        const nearBox = MAP.boxes.some((b) => foe.x + 0.4 > b.minx && foe.x - 0.4 < b.maxx && foe.y + 1.8 > b.miny && foe.y < b.maxy && foe.z + 0.4 > b.minz && foe.z - 0.4 < b.maxz);
        if (blocked || eyeBlocked || nearBox) continue;
        const r = aimShot(me, [me, foe], yaw, pitch, false, 160);
        assert.ok(r.hit && r.hit.player.id === 2, `yaw ${yaw} pitch ${pitch} dist ${dist}: bullet missed what the crosshair covers`);
      }
    }
  }
});

ok('hit boxes: head is a head shot, chest is not, over the head is a miss', () => {
  const me = { id: 1, x: 4.5, y: 0, z: 10 }, foe = { id: 2, x: 4.5, y: 0, z: 0, alive: true };
  const shootAt = (y) => { // fire from a spot level with the target, straight along -z
    const o = { id: 1, x: 4.5, y: y - 1.6, z: 10 };
    return aimShot(o, [o, foe], 0, 0, true, 90).hit;
  };
  assert.equal(shootAt(1.7).head, true);
  assert.equal(shootAt(1.0).head, false);
  assert.equal(shootAt(0.3).head, false);
  assert.equal(shootAt(2.2), null);
  const side = aimShot({ id: 1, x: 0.5, y: 0, z: 10 }, [foe], 0, 0, true, 90).hit; // 0.5 m beside: misses
  assert.equal(side, null);
});

ok('spread rules: scoped sniper is perfect when still, bad on the hip, worse moving or flying', () => {
  const sn = WEAPONS[3], smg = WEAPONS[1];
  assert.equal(spreadOf(sn, true, 0, false), 0);
  assert.ok(spreadOf(sn, false, 0, false) >= 0.08, 'hip-fired sniper is wild');
  assert.ok(spreadOf(sn, true, SPEED * 0.4, false) > 0, 'moving spoils the scope');
  assert.ok(spreadOf(sn, true, 0, true) >= 0.1, 'jetpack/air spoils it more');
  assert.ok(spreadOf(smg, true, 0, false) < spreadOf(smg, false, 0, false) / 2, 'aiming tightens the SMG');
  assert.ok(spreadOf(smg, false, SPEED, false) > spreadOf(smg, false, 0, false), 'running spreads shots');
  assert.ok(adsSpeed(3, true) < adsSpeed(1, true) && adsSpeed(1, true) < 1, 'scoping slows you');
});

function duel(weapon, ads, shots, extra = {}) {
  // shooter pinned at one end of the arena, target pinned 55 m away
  const g = new Game({ rng: seeded(11), scoreLimit: 999, timeLimit: 99999 });
  const a = g.addPlayer('A'), v = g.addPlayer('V');
  const pa = g.players.get(a), pv = g.players.get(v);
  let hits = 0, heads = 0;
  const count = (ev) => { for (const e of ev) if (e[0] === 'h' && e[2] === a) { hits++; if (e[4]) heads++; } };
  for (let s = 0; s < shots; s++) {
    pa.weapon = weapon; pa.mags[weapon] = 99; pa.cool = 0; pa.reloadLeft = 0; pa.bloom = 0; pa.fireHeld = false;
    pa.body.x = 4.5; pa.body.y = 0; pa.body.z = 28; pa.body.vx = pa.body.vz = 0; pa.body.ground = true;
    pv.body.x = 4.5; pv.body.y = 0; pv.body.z = -27; pv.alive = true; pv.hp = 100; pv.respawnAt = 1e9;
    Object.assign(pa.inp, { yaw: 0, pitch: 0, ads, fire: false, ...extra });
    g.advance(TICK);                       // release
    pa.inp.fire = true; g.advance(TICK);   // press: one shot
    pa.inp.fire = false;
    count(g.drainEvents());
  }
  return { hits, heads };
}

ok('sniper, scoped and standing still, hits a 55 m target every time', () => {
  const r = duel(3, true, 60);
  assert.equal(r.hits, 60, 'hits ' + r.hits + '/60');
  console.log('   scoped sniper: ' + r.hits + '/60 hits (' + r.heads + ' head shots)');
});

ok('sniper from the hip at 55 m mostly misses (so scoping matters)', () => {
  const r = duel(3, false, 60);
  assert.ok(r.hits <= 12, 'hip hits ' + r.hits + '/60');
  console.log('   hip-fired sniper: ' + r.hits + '/60 hits');
});

ok('pistol aimed at 47 m is far more accurate than hip-fired', () => {
  const run = (ads) => {
    const g = new Game({ rng: seeded(21), scoreLimit: 999, timeLimit: 99999 });
    const a = g.addPlayer('A'), v = g.addPlayer('V');
    const pa = g.players.get(a), pv = g.players.get(v);
    let hits = 0;
    for (let s = 0; s < 80; s++) {
      pa.weapon = 0; pa.mags[0] = 99; pa.cool = 0; pa.reloadLeft = 0; pa.bloom = 0; pa.fireHeld = false;
      pa.body.x = 4.5; pa.body.y = 0; pa.body.z = 22; pa.body.vx = pa.body.vz = 0; pa.body.ground = true;
      pv.body.x = 5.25; pv.body.y = 0; pv.body.z = -25; pv.alive = true; pv.hp = 100; pv.respawnAt = 1e9;
      // crosshair on the chest: aim at the chest from the 3rd-person camera
      Object.assign(pa.inp, { yaw: 0, pitch: -0.0205, ads, fire: false });
      g.advance(TICK); pa.inp.fire = true; g.advance(TICK); pa.inp.fire = false;
      for (const e of g.drainEvents()) if (e[0] === 'h' && e[2] === a) hits++;
    }
    return hits;
  };
  const hip = run(false), aimed = run(true);
  console.log('   pistol at 47 m: hip ' + hip + '/80, aimed ' + aimed + '/80');
  assert.ok(aimed > hip && aimed >= 70, `aimed ${aimed} hip ${hip}`);
});

ok('rapid fire blooms the spread, then recovers', () => {
  const g = new Game({ rng: seeded(2), scoreLimit: 999 });
  const a = g.addPlayer('A'); const p = g.players.get(a);
  p.weapon = 1; p.mags[1] = 99; p.body.x = 4.5; p.body.z = 28;
  g.setInput(a, { yaw: 0, pitch: 0, fire: true });
  for (let s = 0; s < 120; s++) g.advance(TICK); // two seconds of sustained fire
  assert.ok(p.bloom >= 0.04, 'bloom after a burst ' + p.bloom.toFixed(3));
  g.setInput(a, { yaw: 0, pitch: 0, fire: false });
  for (let s = 0; s < 80; s++) g.advance(TICK);
  assert.ok(p.bloom < 0.02, 'recovered ' + p.bloom.toFixed(3));
});

ok('aiming slows walking (server decides, not the client)', () => {
  const g = new Game({ rng: seeded(4) });
  const a = g.addPlayer('A'); const p = g.players.get(a);
  p.body.x = -8; p.body.z = 15; p.body.y = 0; // open floor, nothing to bump into
  const top = (ads) => { g.setInput(a, { mx: 1, mz: 0, yaw: 0, pitch: 0, ads, spd: 5 }); let m = 0; for (let s = 0; s < 60; s++) { g.advance(TICK); m = Math.max(m, Math.hypot(p.body.vx, p.body.vz)); } return m; };
  const free = top(false); p.body.x = -8; p.body.vx = 0; const slow = top(true);
  assert.ok(slow < free * 0.75, `free ${free.toFixed(1)} aimed ${slow.toFixed(1)}`);
});

ok('first-person flag: bullets leave the eye and hit what is dead ahead, even point-blank', () => {
  for (const fp of [true, false]) {
    for (const dist of [2, 6, 25]) {
      const me = { id: 1, x: 4.5, y: 0, z: 25 };
      const foe = { id: 2, x: 4.5, y: 0, z: 25 - dist, alive: true };
      const r = aimShot(me, [me, foe], 0, -0.02, fp, 90);
      assert.ok(r.hit && r.hit.player.id === 2, `fp=${fp} dist=${dist}`);
    }
  }
});

console.log('\n' + n + ' sim tests passed');
