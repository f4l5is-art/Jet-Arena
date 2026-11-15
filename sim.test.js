import assert from 'node:assert/strict';
import { Game } from '../src/sim.js';
import { moveStep, newBody, MAP, HALF, rayWorld, TICK } from '../src/core.js';

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
  const deck = MAP.boxes.find((x) => x.kind === 'deck' && x.y === 4);
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
  assert.ok(rayWorld(-20, 1, 0, 1, 0, 0, 100) < 10); // the -24 wall / cover is in the way
});

ok('shooting damages and kills, scores a kill, then respawns', () => {
  const g = new Game({ rng: seeded(7), scoreLimit: 99 });
  const a = g.addPlayer('A'), v = g.addPlayer('V');
  const pa = g.players.get(a), pv = g.players.get(v);
  pa.body.x = -20; pa.body.y = 0; pa.body.z = 25; pv.body.x = -20; pv.body.y = 0; pv.body.z = 20;
  pa.weapon = 0; pa.inp.yaw = 0; pa.yaw = 0;
  let died = false;
  for (let s = 0; s < 600 && !died; s++) {
    g.setInput(a, { mx: 0, mz: 0, yaw: 0, pitch: 0.0, jet: false, fire: s % 8 < 4 });
    g.advance(TICK);
    pa.body.x = -20; pa.body.z = 25; pv.body.x = -20; pv.body.z = 20; // pin positions
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

console.log('\n' + n + ' sim tests passed');
