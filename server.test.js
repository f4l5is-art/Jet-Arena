import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { startServer } from '../server/server.js';

const root = mkdtempSync(path.join(tmpdir(), 'ja-'));
writeFileSync(path.join(root, 'index.html'), '<h1>hi</h1>');
const srv = await startServer(0, root);
const url = `ws://localhost:${srv.port}/ws`;

function client() {
  const ws = new WebSocket(url);
  const q = [], waiters = [];
  ws.on('message', (raw) => {
    const m = JSON.parse(raw);
    const w = waiters.shift();
    if (w) w(m); else q.push(m);
  });
  ws.next = () => new Promise((res, rej) => {
    if (q.length) return res(q.shift());
    const t = setTimeout(() => rej(new Error('timeout waiting for message')), 2000);
    waiters.push((m) => { clearTimeout(t); res(m); });
  });
  ws.sendj = (o) => ws.send(JSON.stringify(o));
  return new Promise((res) => ws.on('open', () => res(ws)));
}

let n = 0;
const ok = (name) => { n++; console.log('ok -', name); };

// static + health
let r = await fetch(`http://localhost:${srv.port}/`);
assert.equal(r.status, 200); assert.match(await r.text(), /hi/); ok('serves index.html');
r = await fetch(`http://localhost:${srv.port}/health`); assert.equal(await r.text(), 'ok'); ok('health endpoint');
r = await fetch(`http://localhost:${srv.port}/%2e%2e/%2e%2e/etc/passwd`); assert.ok(r.status === 403 || r.status === 404); ok('blocks path traversal');

const host = await client();
host.sendj({ t: 'create', name: 'Alice' });
const created = await host.next();
assert.equal(created.t, 'created'); assert.match(created.code, /^[A-Z]{4}$/); ok('host creates a room with a 4-letter code');

const bob = await client();
bob.sendj({ t: 'list' });
const list = await bob.next();
assert.equal(list.rooms.length, 1); assert.equal(list.rooms[0].code, created.code); ok('public room is listed');

bob.sendj({ t: 'join', code: created.code.toLowerCase(), name: 'Bob' });
const joined = await bob.next();
assert.equal(joined.t, 'joined'); assert.equal(joined.pid, 1);
const peer = await host.next();
assert.deepEqual([peer.t, peer.pid, peer.name], ['peer', 1, 'Bob']); ok('joiner joins; host is notified');

bob.sendj({ t: 'up', d: { hello: 1 } });
const from = await host.next();
assert.deepEqual([from.t, from.pid, from.d.hello], ['from', 1, 1]); ok('joiner -> host relay');

host.sendj({ t: 'to', pid: 0, d: { snap: 5 } });
const d = await bob.next();
assert.deepEqual([d.t, d.d.snap], ['d', 5]); ok('host -> all relay');

const eve = await client();
eve.sendj({ t: 'join', code: 'ZZZZ', name: 'Eve' });
assert.equal((await eve.next()).t, 'error'); ok('unknown room is rejected');

eve.sendj({ t: 'up', d: 'spoof' }); // not in a room: must be ignored
eve.sendj({ t: 'to', pid: 0, d: 'spoof' });
bob.sendj({ t: 'to', pid: 0, d: 'spoof' }); // joiner must not be able to broadcast as host
host.sendj({ t: 'to', pid: 1, d: { ping: 1 } });
assert.equal((await bob.next()).d.ping, 1); ok('non-hosts cannot spoof host messages');

bob.close();
const left = await host.next();
assert.deepEqual([left.t, left.pid], ['left', 1]); ok('host is told when a joiner leaves');

const carl = await client();
carl.sendj({ t: 'join', code: created.code, name: 'Carl' });
await carl.next(); await host.next();
host.close();
assert.equal((await carl.next()).t, 'closed'); ok('room closes when host leaves');
assert.equal(srv.rooms.size, 0); ok('room is removed');

for (const c of [carl, eve]) c.close();
await srv.close();
console.log(`\n${n} server tests passed`);
