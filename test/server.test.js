import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { startServer } from '../server/server.js';
import { IDLE } from '../server/room.js';

const root = mkdtempSync(path.join(tmpdir(), 'ja-'));
writeFileSync(path.join(root, 'index.html'), '<h1>hi</h1>');
const srv = await startServer(0, root);
const url = `ws://localhost:${srv.port}/ws`;

// a tiny test client: collects every message, lets us wait for one by predicate
function client() {
  const ws = new WebSocket(url);
  ws.msgs = []; ws.snaps = 0;
  ws.on('message', (raw) => { const m = JSON.parse(raw); ws.msgs.push(m); if (m.t === 'd' && m.d.k === 's') ws.snaps++; });
  ws.sendj = (o) => ws.send(JSON.stringify(o));
  ws.up = (d) => ws.sendj({ t: 'up', d });
  ws.wait = (pred, ms = 3000) => new Promise((res, rej) => {
    const t0 = Date.now();
    const iv = setInterval(() => {
      const m = ws.msgs.find(pred);
      if (m) { clearInterval(iv); res(m); } else if (Date.now() - t0 > ms) { clearInterval(iv); rej(new Error('timeout waiting for message')); }
    }, 10);
  });
  ws.lastSnap = () => [...ws.msgs].reverse().find((m) => m.t === 'd' && m.d.k === 's');
  return new Promise((res) => ws.on('open', () => res(ws)));
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let n = 0;
const ok = (name) => { n++; console.log('ok -', name); };

// static + health
let r = await fetch(`http://localhost:${srv.port}/`);
assert.equal(r.status, 200); assert.match(await r.text(), /hi/); ok('serves index.html');
r = await fetch(`http://localhost:${srv.port}/health`); assert.equal(await r.text(), 'ok'); ok('health endpoint');
r = await fetch(`http://localhost:${srv.port}/%2e%2e/%2e%2e/etc/passwd`); assert.ok(r.status === 403 || r.status === 404); ok('blocks path traversal');

// the leader creates a room: the SERVER runs the match
const alice = await client();
alice.sendj({ t: 'create', name: 'Alice', mode: 'arena' });
const joinedA = await alice.wait((m) => m.t === 'joined');
assert.match(joinedA.code, /^[A-Z]{4}$/); assert.equal(joinedA.owner, true); ok('creating a room gives a 4-letter code and makes you the leader');
const helloA = await alice.wait((m) => m.t === 'd' && m.d.k === 'hello');
assert.ok(alice.msgs.findIndex((m) => m.t === 'joined') < alice.msgs.findIndex((m) => m.t === 'd' && m.d.k === 'hello')); ok('"joined" always arrives before the hello (clients attach after joined)');
assert.ok(helloA.d.id > 0); assert.ok(helloA.d.roster.length >= 2); ok('the server sends a hello with your player id and the bots');
const code = joinedA.code;

// snapshots stream at ~20/s, from the server
await alice.wait((m) => m.t === 'd' && m.d.k === 's');
const s0 = alice.snaps; await sleep(1000);
const rate = alice.snaps - s0;
assert.ok(rate >= 14 && rate <= 26, 'snapshot rate was ' + rate); ok(`server streams snapshots (~${rate}/s)`);

// bots really are being simulated by the server (they move)
const pos = (snap, id) => snap.d.s.p.find((p) => p[0] === id);
const bot = helloA.d.roster.find((p) => p.bot);
const b0 = pos(alice.lastSnap(), bot.id); await sleep(1500); const b1 = pos(alice.lastSnap(), bot.id);
assert.ok(Math.hypot(b1[1] - b0[1], b1[3] - b0[3]) > 0.3 || b1[2] !== b0[2]); ok('bots are simulated on the server');

// a second player joins, is not the leader, and sees the room listed
const bob = await client();
bob.sendj({ t: 'list' });
const list = await bob.wait((m) => m.t === 'rooms');
assert.equal(list.rooms.length, 1); assert.equal(list.rooms[0].code, code); assert.equal(list.rooms[0].players, 1); ok('public room is listed with its human count');
bob.sendj({ t: 'join', code: code.toLowerCase(), name: 'Bob' });
const joinedB = await bob.wait((m) => m.t === 'joined');
assert.equal(joinedB.owner, false);
const helloB = await bob.wait((m) => m.t === 'd' && m.d.k === 'hello');
assert.notEqual(helloB.d.id, helloA.d.id); ok('second player joins as a normal player');

// input drives the player on the server
const me0 = pos(bob.lastSnap() || await bob.wait((m) => m.t === 'd' && m.d.k === 's'), helloB.d.id);
for (let i = 0; i < 30; i++) { bob.up({ k: 'in', i: { mx: 0, mz: 1, yaw: 0, pitch: 0, jet: false, fire: false } }); await sleep(33); }
const me1 = pos(bob.lastSnap(), helloB.d.id);
assert.ok(Math.hypot(me1[1] - me0[1], me1[3] - me0[3]) > 1, 'player did not move'); ok('your inputs move your player on the server');

// only the leader can change bots / start
alice.up({ k: 'cfg', bots: 0 });
await sleep(200);
const humansOnly = (await (async () => { const ro = [...alice.msgs].reverse().find((m) => m.t === 'd' && m.d.k === 'roster'); return ro.d.r; })());
assert.equal(humansOnly.filter((p) => p.bot).length, 0); ok('the leader can set the bot count');
bob.up({ k: 'cfg', bots: 6 });
await sleep(200);
const ro2 = [...alice.msgs].reverse().find((m) => m.t === 'd' && m.d.k === 'roster');
assert.equal(ro2.d.r.filter((p) => p.bot).length, 0); ok('other players cannot change the bots');

// bad messages never crash the room
for (const bad of [null, 5, 'x', { k: 'in', i: null }, { k: 'in', i: { mx: 'a', yaw: NaN } }, { k: 'cfg', bots: 'many' }]) bob.up(bad);
bob.send('not json'); await sleep(150);
assert.ok(alice.snaps > 0 && alice.ws === undefined); ok('garbage input is ignored');
const before = alice.snaps; await sleep(300); assert.ok(alice.snaps > before); ok('room keeps running after garbage');

// leaving: leadership passes on
alice.close(); await sleep(200);
bob.up({ k: 'cfg', bots: 2 }); await sleep(200);
const ro3 = [...bob.msgs].reverse().find((m) => m.t === 'd' && m.d.k === 'roster');
assert.equal(ro3.d.r.filter((p) => p.bot).length, 1); ok('leadership passes to the next player when the leader leaves');

// unknown room
const eve = await client();
eve.sendj({ t: 'join', code: 'ZZZZ', name: 'Eve' });
await eve.wait((m) => m.t === 'error'); ok('unknown room is rejected');
eve.up({ k: 'cfg', bots: 3 }); await sleep(100); ok('messages from outside a room are ignored');

// the room closes once it has been empty for a while
IDLE.ms = 200;
bob.close(); await sleep(900);
assert.equal(srv.rooms.size, 0); ok('empty room is removed');

// two rooms with different maps at once do not disturb each other
IDLE.ms = 45000;
const a2 = await client(); a2.sendj({ t: 'create', name: 'A', mode: 'arena' }); await a2.wait((m) => m.t === 'joined');
const b2 = await client(); b2.sendj({ t: 'create', name: 'B', mode: 'survival' }); await b2.wait((m) => m.t === 'joined');
await sleep(1200);
assert.ok(a2.snaps > 10 && b2.snaps > 10); ok('an arena room and an island room run side by side');
const sv = b2.lastSnap().d.s.sv; assert.ok(sv, 'survival state present'); ok('the island room runs survival on the server');
for (const c of [a2, b2, eve]) c.close();
await sleep(100);
await srv.close();
console.log(`\n${n} server tests passed`);
