import assert from 'node:assert/strict';
import { Game } from '../src/sim.js';
import { MAP, TICK } from '../src/core.js';
import { Survival, MONS, DAY_LEN, END_T, LH_HP, darkness, lightRadius, parseSv, DROWNED, HISSER, STALKER, FUEL_CAN, MEDKIT } from '../src/survival.js';

let n = 0;
const ok = (name, fn) => { fn(); n++; console.log('ok -', name); };
function seeded(seed) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
const run = (g, secs) => { for (let i = 0; i < secs / TICK; i++) g.tick(); };
const fresh = () => { const g = new Game({ mode: 'survival', rng: seeded(5) }); const id = g.addPlayer('Tester'); return { g, id, p: g.players.get(id), s: g.surv }; };

ok('survival uses the island map and spawns players around the lighthouse', () => {
  const { p } = fresh();
  assert.equal(MAP.kind, 'island');
  assert.ok(Math.hypot(p.body.x, p.body.z) < 9);
});

ok('players cannot walk into the sea', () => {
  const { g, p } = fresh();
  p.body.x = 40; p.body.z = 0;
  p.inp.mz = -1; p.inp.yaw = -Math.PI / 2; // walk +x
  for (let i = 0; i < 600; i++) g.tick();
  assert.ok(Math.hypot(p.body.x, p.body.z) <= 46, 'r=' + Math.hypot(p.body.x, p.body.z));
});

ok('day and night cycle', () => {
  assert.equal(darkness(10), 0);
  assert.equal(darkness(DAY_LEN * 0.7), 1);
  assert.ok(darkness(DAY_LEN * 0.44) > 0 && darkness(DAY_LEN * 0.44) < 1);
  assert.equal(darkness(DAY_LEN + 5), 0);
});

ok('monsters appear only at night and burn away at dawn', () => {
  const { g, s } = fresh();
  run(g, 60);
  assert.equal(s.mons.length, 0, 'none by day');
  s.t = DAY_LEN * 0.6; run(g, 30);
  assert.ok(s.mons.length > 0, 'night brings monsters');
  s.fuel = 0; s.hp = 1e6;
  for (const m of s.mons) m.hp = 20;
  s.t = DAY_LEN * 0.95; s.mons.forEach((m) => { m.b.x = 30; m.b.z = 30; }); run(g, 6);
  assert.equal(s.mons.length, 0, 'daylight kills them');
});

ok('the lighthouse beam hurts monsters inside its radius', () => {
  const { g, s } = fresh();
  s.t = DAY_LEN * 0.6; s.dropT = 1e9; s.spawnT = 1e9;
  const m = s.spawnMon(DROWNED, 5, 0); const hp0 = m.hp;
  run(g, 1);
  assert.ok(m.hp < hp0 - 5, 'burned ' + (hp0 - m.hp));
  assert.ok(lightRadius(100) > lightRadius(10) && lightRadius(0) === 0);
});

ok('a drowned walks to the player and bites', () => {
  const { g, p, s } = fresh();
  s.t = DAY_LEN * 0.6; s.dropT = 1e9; s.spawnT = 1e9; s.fuel = 0; s.hp = 1e6;
  p.body.x = 20; p.body.z = 0; p.hp = 100;
  s.spawnMon(DROWNED, 28, 0);
  run(g, 8);
  assert.ok(p.hp < 100, 'hp ' + p.hp);
});

ok('a hisser blows up next to a player and hurts the tower', () => {
  const { g, p, s } = fresh();
  s.t = DAY_LEN * 0.6; s.dropT = 1e9; s.spawnT = 1e9; s.fuel = 0;
  p.body.x = 12; p.body.z = 0;
  s.spawnMon(HISSER, 14, 0);
  const hp0 = s.hp;
  run(g, 4);
  assert.equal(s.mons.length, 0);
  assert.ok(p.hp < 100);
  assert.ok(g.drainEvents().some((e) => e[0] === 'boom'));
  assert.equal(s.hp, hp0, 'far from the tower');
  const m = s.spawnMon(HISSER, 4, 0);
  m.tgt = { lh: true }; m.think = 10;
  run(g, 3);
  assert.ok(s.hp < hp0, 'tower hurt');
});

ok('a stalker freezes while watched and charges when not', () => {
  const { g, p, s } = fresh();
  s.t = DAY_LEN * 0.6; s.dropT = 1e9; s.spawnT = 1e9; s.fuel = 0; s.hp = 1e6;
  p.body.x = 0; p.body.z = 20; // stand away from the tower
  p.inp.yaw = 0; p.yaw = 0; // yaw 0 looks toward -z
  const m = s.spawnMon(STALKER, 0, 4);
  m.b.x = 0; m.b.z = 4;
  p.inp.yaw = 0; p.inp.pitch = 0;
  run(g, 0.5);
  const z0 = m.b.z; run(g, 2);
  assert.ok(Math.abs(m.b.z - z0) < 0.5, 'frozen while seen: moved ' + (m.b.z - z0));
  p.inp.yaw = Math.PI; // turn away (looks +z)
  p.body.z = 8; p.body.x = 0;
  const z1 = m.b.z; run(g, 1);
  assert.ok(Math.abs(m.b.z - z1) > 2 || p.hp < 100, 'moves once unseen');
});

ok('pick up a fuel can, bring it to the lighthouse, light refuels', () => {
  const { g, p, s } = fresh();
  s.dropT = 1e9; s.spawnT = 1e9; s.fuel = 30;
  p.body.x = 20; p.body.z = 0; p.body.y = 0;
  s.crates.push({ id: 99, kind: FUEL_CAN, mimic: false, x: 20, z: 0, y: 0, landed: true, age: 0 });
  run(g, 0.2);
  assert.equal(p.cans, 1); assert.equal(s.crates.length, 0);
  p.body.x = 5; p.body.z = 0;
  run(g, 0.2);
  assert.equal(p.cans, 0); assert.ok(s.fuel > 55, 'fuel ' + s.fuel);
});

ok('medkit heals, mimic crate turns into a monster', () => {
  const { g, p, s } = fresh();
  s.dropT = 1e9; s.spawnT = 1e9;
  p.hp = 30; p.body.x = 15; p.body.z = 0;
  s.crates.push({ id: 1, kind: MEDKIT, mimic: false, x: 15, z: 0, y: 0, landed: true, age: 0 });
  run(g, 0.2); assert.ok(p.hp >= 89, 'hp ' + p.hp);
  s.crates.push({ id: 2, kind: FUEL_CAN, mimic: true, x: 15, z: 1, y: 0, landed: true, age: 0 });
  run(g, 0.2);
  assert.equal(s.mons.length, 1); assert.equal(s.mons[0].kind, 3);
  assert.equal(p.cans, 0);
});

ok('crates fall from the sky, land, and expire', () => {
  const { g, s } = fresh();
  s.dropT = 0.1; s.spawnT = 1e9;
  run(g, 0.5);
  assert.equal(s.crates.length, 1); assert.ok(s.crates[0].y > 0 && !s.crates[0].landed);
  run(g, 8); assert.ok(s.crates[0].landed);
});

ok('shooting a monster damages it and a kill is credited', () => {
  const { g, p, s } = fresh();
  s.t = DAY_LEN * 0.6; s.dropT = 1e9; s.spawnT = 1e9; s.fuel = 0; s.hp = 1e6;
  p.body.x = 0; p.body.z = 20; p.yaw = 0; p.inp.yaw = 0; p.inp.fp = true;
  const m = s.spawnMon(DROWNED, 0, 8); m.hp = 20;
  m.think = 1e9; m.tgt = { lh: true }; // stay put long enough
  for (let k = 0; k < 40 && s.mons.length; k++) { p.inp.fire = true; p.inp.sw = 2; run(g, 0.3); p.inp.fire = false; run(g, 0.1); p.mags[2] = 6; }
  assert.equal(s.mons.length, 0);
  assert.equal(p.kills, 1);
  const ev = g.drainEvents();
  assert.ok(ev.some((e) => e[0] === 'mh') && ev.some((e) => e[0] === 'mk'));
});

ok('dying costs a respawn, and everyone dead loses', () => {
  const { g, p, s } = fresh();
  s.dropT = 1e9; s.spawnT = 1e9;
  s.hurtPlayer(p, 500);
  assert.ok(!p.alive);
  run(g, 0.1);
  assert.ok(g.over && g.winner === -1, 'all dead = lose');
});

ok('surviving three nights wins, then it restarts', () => {
  const { g, s } = fresh();
  s.dropT = 1e9; s.spawnT = 1e9; s.hp = 1e9;
  s.t = END_T - 0.5;
  run(g, 1);
  assert.ok(g.over && g.winner === 1 && s.rescue);
  run(g, 15);
  assert.ok(!g.over && s.t < 5 && s.hp === LH_HP);
});

ok('the lighthouse falling loses the game', () => {
  const { g, s } = fresh();
  s.dropT = 1e9; s.spawnT = 1e9; s.hp = 0;
  run(g, 0.1);
  assert.ok(g.over && g.winner === -1);
});

ok('snapshot rows round-trip', () => {
  const { g, s } = fresh();
  s.spawnMon(HISSER, 20, 5); s.crates.push({ id: 7, kind: 1, mimic: false, x: 3, z: 4, y: 0, landed: true, age: 0 });
  const sv = parseSv(JSON.parse(JSON.stringify(g.snapshot().sv)));
  assert.equal(sv.mons.length, 1); assert.equal(sv.mons[0].kind, HISSER); assert.equal(sv.crates[0].id, 7);
  assert.equal(sv.day, 1); assert.equal(sv.hp, LH_HP);
  assert.equal(g.snapshot().p[0].length, 21);
});

ok('an arena game afterwards puts the arena map back', () => {
  new Game({ rng: seeded(1) });
  assert.equal(MAP.kind, 'arena');
  assert.ok(MAP.boxes.length > 120 && MAP.spawns.length > 40);
});

console.log(`\n${n} survival tests passed`);
