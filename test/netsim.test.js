// Plays a real match over a bad fake network and checks the client stays smooth: other players must not
// teleport or freeze-then-jump, our own movement must stay close to the server's, and the client must adapt.
import assert from 'node:assert/strict';
import { HostSession, ClientSession } from '../src/session.js';
import { setMapKind } from '../src/core.js';

setMapKind('arena');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function run(opts) {
  const { latency, jitter, loss, seconds } = opts;
  const later = (fn, ms) => setTimeout(fn, ms);
  const order = { up: 0, down: 0 }; // reliable links deliver in order
  const inOrder = (dir, ms) => { const at = Math.max(Date.now() + ms, order[dir] + 1); order[dir] = at; return at - Date.now(); };
  const lag = () => Math.max(1, latency + (Math.random() * 2 - 1) * jitter);
  let hostSide;
  const net = { // what the server-side session talks to
    mode: 'online', onPeer() {}, onLeave() {}, onMsg() {}, onClose() {},
    sendTo(pid, o) { const s = JSON.stringify(o); later(() => client.net.onMsg(JSON.parse(s)), inOrder('down', lag())); },
    broadcast(o) { net.sendTo(1, o); }, // reliable: delayed, in order, never lost
    broadcastFast(o) { if (Math.random() < loss) return; const s = JSON.stringify(o); later(() => client.net.onMsg(JSON.parse(s)), lag()); }, // snapshots: lossy and can overtake each other
    close() {},
  };
  const host = new HostSession({ dedicated: true, bots: opts.bots ?? 5, net });
  host.ownerPid = 1;
  const cnet = { pid: 1, onMsg() {}, onClose() {}, close() {}, send(d) { const s = JSON.stringify(d); later(() => net.onMsg(1, JSON.parse(s)), inOrder('up', lag())); } };
  const client = new ClientSession(cnet);
  net.onPeer(1, 'Tester');
  return { host, client, seconds };
}

async function scenario(name, opts) {
  const { host, client, seconds } = run(opts);
  await client.ready;
  client.input.mz = 1; client.input.yaw = 0.7;
  const seenDeaths = new Map(), settle = new Map();
  let prev = new Map(), worst = 0, frames = 0, jumps = 0;
  const t0 = Date.now(); let last = t0;
  while (Date.now() - t0 < seconds * 1000) {
    const now = Date.now(), dt = (now - last) / 1000; last = now;
    host.update(dt); client.update(dt);
    if (Date.now() - t0 > 2000) { // after warm-up, watch every other player's on-screen movement frame by frame
      for (const p of client.view.players) {
        if (p.id === client.myId) continue;
        const sp = host.game.players.get(p.id);
        if (!p.alive || (sp && sp.deaths !== (seenDeaths.get(p.id) ?? sp.deaths))) { prev.delete(p.id); settle.set(p.id, 20); }
        if (sp) seenDeaths.set(p.id, sp.deaths);
        if (!p.alive) continue;
        if (settle.get(p.id) > 0) { settle.set(p.id, settle.get(p.id) - 1); prev.delete(p.id); continue; } // a respawn is allowed to appear somewhere else
        const q = prev.get(p.id);
        if (q) { const d = Math.hypot(p.x - q.x, p.z - q.z); worst = Math.max(worst, d); if (d > 2.5) jumps++; }
        prev.set(p.id, { x: p.x, z: p.z });
      }
      frames++;
    }
    await sleep(16);
  }
  const me = client.view.me, srv = host.game.players.get(client.myId);
  const err = me && srv ? Math.hypot(me.x - srv.body.x, me.z - srv.body.z) : 99;
  console.log(`ok - ${name}: rtt ${client.view.ping} ms, interpolation delay ${Math.round(client.delay * 1000)} ms, biggest on-screen hop ${worst.toFixed(2)} m, own position error ${err.toFixed(2)} m`);
  assert.ok(frames > 100, 'not enough frames');
  assert.equal(jumps, 0, 'other players teleported ' + jumps + ' times');
  if (!srv.deaths) assert.ok(err < 6, 'own position drifted from the server: ' + err); // (a death + respawn is allowed to jump)
  return client;
}

await scenario('good network (30 ms)', { latency: 15, jitter: 3, loss: 0, seconds: 6 });
const c = await scenario('bad network (80 ms, +-40 ms jitter, 8% loss)', { latency: 40, jitter: 40, loss: 0.08, seconds: 8 });
assert.ok(c.delay > 0.1, 'client should have widened its delay for the jitter');
await scenario('awful network (150 ms, +-80 ms jitter, 15% loss)', { latency: 75, jitter: 80, loss: 0.15, seconds: 8 });
console.log('\n3 network simulation tests passed');
// Stopping must stop: after you let go of the stick your character stops where physics says, and does not keep creeping.
async function stopTest(name, opts, extra) {
  const { host, client } = run({ ...opts, seconds: 0, bots: 0 });
  await client.ready;
  Object.assign(host.game.players.get(client.myId).body, { x: 4.5, y: 0, z: 28, vx: 0, vz: 0 }); // open lane
  await sleep(400); client.update(0.016);
  client.input.mz = 1; client.input.yaw = 0;
  const t0 = Date.now(); let last = t0, stopAt = 0, from = null, at1 = 0, end = 0;
  while (Date.now() - t0 < 5500) {
    const now = Date.now(), dt = (now - last) / 1000; last = now;
    if (!stopAt && now - t0 > 2500) { client.input.mz = 0; stopAt = now; from = [client.view.me.x, client.view.me.z]; }
    host.update(dt); client.update(dt);
    if (stopAt) { const d = Math.hypot(client.view.me.x - from[0], client.view.me.z - from[1]); if (now - stopAt >= 1000 && !at1) at1 = d; end = d; }
    await sleep(16);
  }
  const brake = (7 * 7) / (2 * 60);
  console.log(`ok - ${name}: stopped ${end.toFixed(2)} m after letting go (physics: ${brake.toFixed(2)} m), crept ${(end - at1).toFixed(2)} m after the first second`);
  assert.ok(end < brake + extra, 'slid too far: ' + end.toFixed(2));
  assert.ok(Math.abs(end - at1) < 0.12, 'kept creeping: ' + (end - at1).toFixed(2));
}
await stopTest('stop on a good network', { latency: 15, jitter: 3, loss: 0 }, 0.25);
await stopTest('stop on a bad network (80 ms, +-40 ms, 8% loss)', { latency: 40, jitter: 40, loss: 0.08 }, 0.4);
await stopTest('stop on an awful network (150 ms, +-80 ms, 15% loss)', { latency: 75, jitter: 80, loss: 0.15 }, 0.9);
console.log('\n6 network simulation tests passed');
process.exit(0);
