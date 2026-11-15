// Network transports. The host runs the whole game; everyone else sends inputs and
// receives snapshots. Two ways to connect:
//   1) online: WebSocket relay through the lobby server (room codes)
//   2) hotspot: WebRTC data channels, signalled by QR codes / pasted text (no internet)
// Both give the game the same two shapes: HostNet (host side) and ClientNet (joiner side).
import { packSdp, unpackSdp } from './sdpcodec.js';

const enc = JSON.stringify;

export class HostNet {
  constructor(mode) {
    this.mode = mode; // 'online' | 'hotspot'
    this.code = '';
    this.links = new Map(); // pid -> { send(obj) }
    this.pending = new Map(); // hotspot: pid -> { pc, dc }
    this.nextPid = 1;
    this.ws = null;
    this.onPeer = () => {}; // (pid, name)
    this.onLeave = () => {}; // (pid)
    this.onMsg = () => {}; // (pid, msg)
    this.onClose = () => {};
  }

  sendTo(pid, obj) { const l = this.links.get(pid); if (l) l.send(obj); }

  broadcast(obj) {
    if (this.mode === 'online') { if (this.ws && this.ws.readyState === 1) this.ws.send(enc({ t: 'to', pid: 0, d: obj })); return; }
    const s = enc(obj);
    for (const l of this.links.values()) l.sendRaw(s);
  }

  close() {
    if (this.ws) { this.ws.onclose = null; this.ws.close(); }
    for (const { pc } of this.pending.values()) pc.close();
    for (const l of this.links.values()) if (l.close) l.close();
    this.links.clear(); this.pending.clear();
  }

  // ---- hotspot (WebRTC) ----
  // Step 1: create a code for one friend to scan. Returns { pid, code }.
  async hotspotInvite() {
    const pc = new RTCPeerConnection({ iceServers: [] });
    const dc = pc.createDataChannel('g');
    const pid = this.nextPid++;
    this.pending.set(pid, { pc, dc });
    let named = false;
    dc.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (!named) { if (m.k === 'name') { named = true; this.onPeer(pid, String(m.name || 'Player').slice(0, 14)); } return; }
      this.onMsg(pid, m);
    };
    dc.onopen = () => {
      this.links.set(pid, { send: (o) => dc.readyState === 'open' && dc.send(enc(o)), sendRaw: (s) => dc.readyState === 'open' && dc.send(s), close: () => pc.close() });
    };
    const drop = () => { if (this.links.delete(pid) || this.pending.delete(pid)) this.onLeave(pid); pc.close(); };
    dc.onclose = drop;
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') drop(); };
    await pc.setLocalDescription(await pc.createOffer());
    await gathered(pc);
    return { pid, code: packSdp(pc.localDescription.sdp) };
  }

  // Step 2: the friend's answer code (scanned or pasted) finishes the link.
  async hotspotAccept(pid, answerText) {
    const p = this.pending.get(pid);
    if (!p) throw new Error('That invite expired, make a new one');
    await p.pc.setRemoteDescription({ type: 'answer', sdp: unpackSdp(answerText) });
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

function gathered(pc, ms = 2500) {
  return new Promise((resolve) => {
    if (pc.iceGatheringState === 'complete') return resolve();
    const t = setTimeout(done, ms);
    function done() { clearTimeout(t); pc.removeEventListener('icegatheringstatechange', chk); resolve(); }
    function chk() { if (pc.iceGatheringState === 'complete') done(); }
    pc.addEventListener('icegatheringstatechange', chk);
  });
}

// ---- online ----
export function hostOnline(url, name, pub = true) {
  return new Promise((resolve, reject) => {
    const net = new HostNet('online');
    let ws;
    try { ws = new WebSocket(url); } catch { return reject(new Error('Bad server address')); }
    net.ws = ws;
    let settled = false;
    ws.onopen = () => ws.send(enc({ t: 'create', name, pub }));
    ws.onerror = () => { if (!settled) { settled = true; reject(new Error('Could not reach the server')); } };
    ws.onclose = () => net.onClose();
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.t === 'created') { settled = true; net.code = m.code; resolve(net); }
      else if (m.t === 'peer') {
        net.links.set(m.pid, { send: (o) => ws.send(enc({ t: 'to', pid: m.pid, d: o })) });
        net.onPeer(m.pid, m.name);
      } else if (m.t === 'left') { net.links.delete(m.pid); net.onLeave(m.pid); }
      else if (m.t === 'from') net.onMsg(m.pid, m.d);
      else if (m.t === 'error' && !settled) { settled = true; reject(new Error(m.msg)); }
    };
  });
}

export function joinOnline(url, code, name) {
  return new Promise((resolve, reject) => {
    const net = new ClientNet();
    let ws;
    try { ws = new WebSocket(url); } catch { return reject(new Error('Bad server address')); }
    let settled = false;
    ws.onopen = () => ws.send(enc({ t: 'join', code: String(code).trim().toUpperCase(), name }));
    ws.onerror = () => { if (!settled) { settled = true; reject(new Error('Could not reach the server')); } };
    ws.onclose = () => net.onClose('Disconnected');
    net.send = (d) => { if (ws.readyState === 1) ws.send(enc({ t: 'up', d })); };
    net.close = () => { ws.onclose = null; ws.close(); };
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.t === 'joined') { settled = true; net.pid = m.pid; resolve(net); }
      else if (m.t === 'd') net.onMsg(m.d);
      else if (m.t === 'closed') net.onClose('The host closed the room');
      else if (m.t === 'error' && !settled) { settled = true; reject(new Error(m.msg)); }
    };
  });
}

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
  return { net, answer: packSdp(pc.localDescription.sdp) };
}
