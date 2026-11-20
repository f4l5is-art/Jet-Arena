// Plays a real match over a bad fake network and checks the client stays smooth: other players must not
// teleport or freeze-then-jump, our own movement must stay close to the server's, and the client must adapt.
import assert from 'node:assert/strict';
import { HostSession, ClientSession } from '../src/session.js';
import { setMapKind } from '../src/core.js';

setMapKind('arena');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function run({ latency, jitter, loss, seconds }) {
  const later = (fn, ms) => setTimeout(fn, ms);
  const lag = () => Math.max(1, latency + (Math.random() * 2 - 1) * jitter);
  let hostSide;
  const net = { // what the server-side session talks to
    mode: 'online', onPeer() {}, onLeave() {}, onMsg() {}, onClose() {},
    sendTo(pid, o) { const s = JSON.stringify(o); later(() => client.net.onMsg(JSON.parse(s)), lag()); },
    broadcast(o) { net.sendTo(1, o); }, // reliable: delayed, never lost
    broadcastFast(o) { if (Math.random() < loss) return; net.sendTo(1, o); }, // snapshots: lossy and can overtake each other
    close() {},
  };
  const host = new HostSession({ dedicated: true, bots: 5, net });
  host.ownerPid = 1;
  const cnet = { pid: 1, onMsg() {}, onClose() {}, close() {}, send(d) { const s = JSON.stringify(d); later(() => net.onMsg(1, JSON.parse(s)), lag()); } };
  const client = new ClientSession(cnet);
  net.onPeer(1, 'Tester');
  return { host, client, seconds };
}

async function scenario(name, opts) {
  const { host, client, seconds } = run(opts);
  await client.ready;
  client.input.mz = 1; client.input.yaw = 0.7;
  let prev = new Map(), worst = 0, frames = 0, jumps = 0;
  const t0 = Date.now(); let last = t0;
  while (Date.now() - t0 < seconds * 1000) {
    const now = Date.now(), dt = (now - last) / 1000; last = now;
    host.update(dt); client.update(dt);
    if (Date.now() - t0 > 2000) { // after warm-up, watch every other player's on-screen movement frame by frame
      for (const p of client.view.players) {
        if (p.id === client.myId || !p.alive) continue;
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
  assert.ok(err < 6, 'own position drifted from the server: ' + err);
  return client;
}

await scenario('good network (30 ms)', { latency: 15, jitter: 3, loss: 0, seconds: 6 });
const c = await scenario('bad network (80 ms, +-40 ms jitter, 8% loss)', { latency: 40, jitter: 40, loss: 0.08, seconds: 8 });
assert.ok(c.delay > 0.1, 'client should have widened its delay for the jitter');
await scenario('awful network (150 ms, +-80 ms jitter, 15% loss)', { latency: 75, jitter: 80, loss: 0.15, seconds: 8 });
console.log('\n3 network simulation tests passed');
process.exit(0);
