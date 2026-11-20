// Network transports. Everyone who is not running the simulation sends inputs and receives snapshots.
//   1) online: WebSocket to the game server, which runs the match itself (a dedicated server, no phone hosts)
//   2) hotspot: WebRTC data channels between phones, signalled by QR codes / pasted text (works with no internet);
//      one phone hosts. HostNet is that host side. ClientNet is the player side for both.
import { packSdp, unpackSdp } from './sdpcodec.js';

const enc = JSON.stringify;

export class HostNet {
  constructor() {
    this.mode = 'hotspot';
    this.code = '';
    this.links = new Map(); // pid -> { send(obj), sendRaw(str), sendFast(str), close() }
    this.pending = new Map(); // pid -> { pc, dc, accepted }
    this.nextPid = 1;
    this.onPeer = () => {}; // (pid, name)
    this.onLeave = () => {}; // (pid)
    this.onMsg = () => {}; // (pid, msg)
    this.onClose = () => {};
  }

  sendTo(pid, obj) { const l = this.links.get(pid); if (l) l.send(obj); }

  broadcast(obj) { const s = enc(obj); for (const l of this.links.values()) l.sendRaw(s); }

  // Snapshots go on the unordered, no-resend channel: a lost one is simply replaced by the next, and never stalls the rest.
  broadcastFast(obj) { const s = enc(obj); for (const l of this.links.values()) l.sendFast(s); }

  close() {
    for (const { pc } of this.pending.values()) pc.close();
    for (const l of this.links.values()) if (l.close) l.close();
    this.links.clear(); this.pending.clear();
  }

  // ---- hotspot (WebRTC) ----
  // Step 1: create a code for one friend to scan. Returns { pid, code }.
  async hotspotInvite() {
    const pc = new RTCPeerConnection({ iceServers: [] });
    const dc = pc.createDataChannel('g'); // reliable: names, inputs, events
    const fast = pc.createDataChannel('u', { ordered: false, maxRetransmits: 0 }); // snapshots
    const pid = this.nextPid++;
    this.pending.set(pid, { pc, dc, accepted: false });
    let named = false;
    dc.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (!named) { if (m.k === 'name') { named = true; this.onPeer(pid, String(m.name || 'Player').slice(0, 14)); } return; }
      this.onMsg(pid, m);
    };
    dc.onopen = () => {
      this.links.set(pid, {
        send: (o) => dc.readyState === 'open' && dc.send(enc(o)),
        sendRaw: (s) => dc.readyState === 'open' && dc.send(s),
        sendFast: (s) => { const c = fast.readyState === 'open' ? fast : dc; if (c.readyState === 'open') c.send(s); },
        close: () => pc.close(),
      });
    };
    const drop = () => { if (this.links.delete(pid) || this.pending.delete(pid)) this.onLeave(pid); pc.close(); };
    dc.onclose = drop;
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') drop(); };
    await pc.setLocalDescription(await pc.createOffer());
    await gathered(pc);
    const sdp = pc.localDescription.sdp;
    if (!/a=candidate/.test(sdp)) { pc.close(); this.pending.delete(pid); throw new Error('Could not find this phone on the network. Make sure the hotspot is on and Wi-Fi is connected, then try again.'); }
    return { pid, code: packSdp(sdp) };
  }

  // Step 2: the friend's answer code (scanned or pasted) finishes the link.
  async hotspotAccept(pid, answerText) {
    const p = this.pending.get(pid) || (this.links.has(pid) ? { accepted: true } : null);
    if (!p) throw new Error('That invite expired, make a new one');
    if (p.accepted || p.pc.signalingState !== 'have-local-offer') return; // already connected or connecting: a second scan/tap is harmless
    p.accepted = true;
    try { await p.pc.setRemoteDescription({ type: 'answer', sdp: unpackSdp(answerText) }); } catch (e) { p.accepted = false; throw new Error('That code did not work. Ask your friend to scan the invite again.'); }
  }
}

export class ClientNet {
  constructor() {
    this.pid = 0;
    this.send = () => {};
    this.onMsg = () => {};
    this.onClose = () => {};
    this.close = () => {};
  }
}

function gathered(pc, ms = 6000) {
  return new Promise((resolve) => {
    if (pc.iceGatheringState === 'complete') return resolve();
    const t = setTimeout(done, ms);
    function done() { clearTimeout(t); pc.removeEventListener('icegatheringstatechange', chk); resolve(); }
    function chk() { if (pc.iceGatheringState === 'complete') done(); }
    pc.addEventListener('icegatheringstatechange', chk);
  });
}

// ---- online ----
// Connect to the game server and create or join a room. The server runs the match; this is just a player.
function connectOnline(url, first) {
  return new Promise((resolve, reject) => {
    const net = new ClientNet();
    let ws;
    try { ws = new WebSocket(url); } catch { return reject(new Error('Bad server address')); }
    let settled = false;
    ws.onopen = () => ws.send(enc(first));
    ws.onerror = () => { if (!settled) { settled = true; reject(new Error('Could not reach the server')); } };
    ws.onclose = () => { if (!settled) { settled = true; reject(new Error('Could not reach the server')); } else net.onClose('Disconnected'); };
    net.send = (d) => { if (ws.readyState === 1) ws.send(enc({ t: 'up', d })); };
    net.close = () => { ws.onclose = null; ws.close(); };
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.t === 'joined') { settled = true; net.pid = m.pid; net.code = m.code; net.owner = !!m.owner; resolve(net); }
      else if (m.t === 'd') net.onMsg(m.d);
      else if (m.t === 'closed') net.onClose('The room was closed');
      else if (m.t === 'error' && !settled) { settled = true; reject(new Error(m.msg)); }
    };
  });
}
export const createOnline = (url, name, mode = 'arena', pub = true) => connectOnline(url, { t: 'create', name, mode, pub });
export const joinOnline = (url, code, name) => connectOnline(url, { t: 'join', code: String(code).trim().toUpperCase(), name });

export function listRooms(url) {
  return new Promise((resolve, reject) => {
    let ws;
    try { ws = new WebSocket(url); } catch { return reject(new Error('Bad server address')); }
    const t = setTimeout(() => { ws.close(); reject(new Error('Server did not answer')); }, 5000);
    ws.onopen = () => ws.send(enc({ t: 'list' }));
    ws.onerror = () => { clearTimeout(t); reject(new Error('Could not reach the server')); };
    ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.t === 'rooms') { clearTimeout(t); ws.close(); resolve(m.rooms); } };
  });
}

// ---- hotspot join ----
// Takes the host's offer code, returns the answer code to show, plus a net that opens once the host accepts it.
export async function hotspotJoin(offerText, name) {
  const pc = new RTCPeerConnection({ iceServers: [] });
  const net = new ClientNet();
  net.opened = new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('Timed out. Are you both on the same hotspot?')), 45000);
    pc.ondatachannel = (ev) => {
      const dc = ev.channel;
      if (dc.label === 'u') { dc.onmessage = (e) => net.onMsg(JSON.parse(e.data)); return; } // snapshots
      net.send = (o) => { if (dc.readyState === 'open') dc.send(enc(o)); };
      net.close = () => pc.close();
      dc.onopen = () => { clearTimeout(t); dc.send(enc({ k: 'name', name })); resolve(net); };
      dc.onmessage = (e) => net.onMsg(JSON.parse(e.data));
      dc.onclose = () => net.onClose('Disconnected from host');
    };
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') net.onClose('Connection failed'); };
  });
  await pc.setRemoteDescription({ type: 'offer', sdp: unpackSdp(offerText) });
  await pc.setLocalDescription(await pc.createAnswer());
  await gathered(pc);
  const sdp = pc.localDescription.sdp;
  if (!/a=candidate/.test(sdp)) { pc.close(); throw new Error('Could not find this phone on the network. Make sure Wi-Fi is connected to the host\'s hotspot.'); }
  return { net, answer: packSdp(sdp) };
}
