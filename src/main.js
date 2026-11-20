import { WEAPONS, SNIPER, BASE_FOV, aimedEnemy, spreadOf, adsFov } from './core.js';
import { Renderer } from './render.js';
import { LobbyStage } from './lobby.js';
import { MONS } from './survival.js';
import { setMapKind } from './core.js';
import { Input } from './input.js';
import { HostSession, ClientSession } from './session.js';
import { HostNet, createOnline, joinOnline, listRooms, hotspotJoin } from './net.js';
import { drawQr, startScan, openCamera, closeCamera } from './qr.js';
import { initAudio, setSound, sfx } from './audio.js';

const $ = (id) => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem('ja_' + k); return v === null ? d : v; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('ja_' + k, v); } catch { /* private mode */ } },
};

const renderer = new Renderer($('game'));
renderer.onLand = (s) => sfx.land(s);
renderer.onStep = () => sfx.step();
const input = new Input();
let session = null;
let playing = false;
let paused = false;
let current = 's-menu';
let hotspotNet = null;

// ------------------------------------------------------------------ screens
function show(id) {
  current = id;
  for (const el of document.querySelectorAll('.screen')) el.classList.toggle('on', el.id === id);
}
function hideScreens() {
  current = '';
  for (const el of document.querySelectorAll('.screen')) el.classList.remove('on');
}
document.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => show(playing ? 's-pause' : 's-menu')));

// ------------------------------------------------------------------ settings
const isPC = matchMedia('(hover:hover) and (pointer:fine)').matches;
const defQuality = isPC ? '2' : (navigator.hardwareConcurrency || 4) <= 2 ? '0' : '1'; // PCs start on High
$('name').value = store.get('name', '');
$('qual').value = store.get('qual', defQuality);
$('sens').value = store.get('sens', '1');
$('cam3').value = store.get('cam3', '1');
$('snd').value = store.get('snd', '1');
$('auto').value = store.get('auto', isPC ? '0' : '1'); // with a mouse you aim yourself
$('invy').value = store.get('invy', '0');
$('fps').value = store.get('fps', '0');
function applySettings() {
  renderer.setQuality(Number($('qual').value));
  input.sens = Number($('sens').value);
  input.invY = $('invy').value === '1';
  $('fpsbox').style.display = $('fps').value === '1' ? 'block' : 'none';
  renderer.thirdPerson = $('cam3').value === '1';
  setSound($('snd').value === '1');
  for (const k of ['qual', 'sens', 'cam3', 'snd', 'auto', 'invy', 'fps']) store.set(k, $(k).value);
  document.body.classList.toggle('manualfire', $('auto').value === '0'); // no auto-fire: bring back the FIRE button
}
for (const k of ['qual', 'sens', 'cam3', 'snd', 'auto', 'invy', 'fps']) $(k).addEventListener('input', applySettings);
applySettings();
// ------------------------------------------------------------------ lobby (menu) extras
const lobby = new LobbyStage(renderer, $('stage'));
let lobbyWeapon = Number(store.get('lw', '1'));
if (!(lobbyWeapon >= 0 && lobbyWeapon < WEAPONS.length)) lobbyWeapon = 1;
function pickLobbyWeapon(i) {
  lobbyWeapon = i; store.set('lw', String(i)); lobby.setWeapon(i);
  document.querySelectorAll('#wchips button').forEach((b, k) => b.classList.toggle('on', k === i));
  const w = WEAPONS[i];
  const bar = (label, v) => `<div>${label}<i><u style="width:${Math.round(Math.min(1, v) * 100)}%"></u></i></div>`;
  $('wstat').innerHTML = bar('Damage', (w.dmg * Math.min(w.pellets, 4)) / 75) + bar('Fire rate', 0.085 / w.rate) + bar('Range', w.range / 160);
}
WEAPONS.forEach((w, i) => {
  const b = document.createElement('button'); b.textContent = w.name; b.onclick = () => pickLobbyWeapon(i);
  $('wchips').appendChild(b);
});
pickLobbyWeapon(lobbyWeapon);
// Quick settings around the soldier drive the same <select>s as the Settings screen.
function syncSegs() {
  document.querySelectorAll('.seg[data-sel]').forEach((seg) => {
    const v = $(seg.dataset.sel).value;
    seg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === v));
  });
}
document.querySelectorAll('.seg[data-sel]').forEach((seg) => seg.querySelectorAll('button').forEach((b) => {
  b.onclick = () => { const sel = $(seg.dataset.sel); sel.value = b.dataset.v; sel.dispatchEvent(new Event('input')); };
}));
for (const k of ['qual', 'cam3', 'auto', 'snd']) $(k).addEventListener('input', syncSegs);
syncSegs();
// Drag the stage to turn the soldier.
{
  let drag = null;
  const st = $('stage');
  st.addEventListener('pointerdown', (e) => { drag = e.clientX; st.setPointerCapture(e.pointerId); });
  st.addEventListener('pointermove', (e) => { if (drag !== null) { lobby.spin += (e.clientX - drag) * 0.012; drag = e.clientX; } });
  const end = () => { drag = null; };
  st.addEventListener('pointerup', end); st.addEventListener('pointercancel', end);
}
const myName = () => {
  const n = $('name').value.trim() || 'Player';
  store.set('name', $('name').value.trim());
  return n;
};
$('b-settings').onclick = () => show('s-settings');
$('p-settings').onclick = () => show('s-settings');

// Install hint for iPhone / Android browsers.
const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
if (!standalone) {
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  $('install').textContent = ios
    ? 'Tip: tap the Share button, then "Add to Home Screen" to play fullscreen with no browser bar.'
    : 'Tip: open the browser menu and choose "Install app" / "Add to Home screen" for fullscreen play.';
}

// ------------------------------------------------------------------ game start / stop
function startGame(s, { reset = false } = {}) {
  session = s;
  s.onClosed = (why) => { leave(); toast(why || 'Disconnected'); };
  s.fx.length = 0;
  s.fx.push(onEvent);
  renderer.setMapKind(s.mode === 'survival' ? 'island' : 'arena');
  document.body.classList.toggle('survival', s.mode === 'survival');
  renderer.clearPlayers();
  if (reset && s.game) s.game.resetMatch();
  input.reset();
  input.yaw = 0; input.pitch = 0;
  playing = true; paused = false;
  document.body.classList.add('playing');
  document.body.classList.toggle('touch', input.touch || matchMedia('(pointer:coarse)').matches);
  $('hud').classList.add('on');
  hideScreens();
  input.enabled = true;
  $('net').textContent = '';
  initAudio();
  document.documentElement.requestFullscreen?.().catch(() => {});
  if (isPC) input.lock();
  try { navigator.wakeLock?.request('screen').catch(() => {}); } catch { /* unsupported */ }
}

function leave() {
  if (session) session.close();
  if (hotspotNet) { hotspotNet.close(); hotspotNet = null; }
  closeCamera();
  stopScan();
  session = null; playing = false; paused = false;
  input.enabled = false; input.reset();
  document.body.classList.remove('playing', 'scoped', 'survival');
  setMapKind('arena');
  $('hud').classList.remove('on');
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  show('s-menu');
}
$('p-quit').onclick = leave;
$('e-quit').onclick = leave;
$('l-leave').onclick = leave;

function toast(msg) {
  const d = document.createElement('div');
  d.textContent = msg;
  Object.assign(d.style, { position: 'fixed', left: '50%', top: '14px', transform: 'translateX(-50%)', background: '#ef476f', padding: '10px 16px', borderRadius: '10px', zIndex: 99, fontWeight: 700 });
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 3500);
}

// Pause
function setPause(v) {
  if (!playing) return;
  paused = v;
  input.enabled = !v;
  if (v) { input.reset(); show('s-pause'); $('p-invite').style.display = hotspotNet ? 'block' : 'none'; } else { hideScreens(); if (isPC && !input.touch) input.lock(); }
}
$('pause').addEventListener('pointerdown', (e) => { e.preventDefault(); setPause(true); });
function toggleCamera() {
  $('cam3').value = renderer.thirdPerson ? '0' : '1';
  applySettings();
}
$('btn-cam').addEventListener('pointerdown', (e) => { e.preventDefault(); toggleCamera(); });
addEventListener('keydown', (e) => { if (e.key.toLowerCase() === 'v' && playing && !paused) toggleCamera(); });
$('p-resume').onclick = () => setPause(false);
addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() !== 'f' || !playing || paused) return;
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {}); else document.documentElement.requestFullscreen?.().catch(() => {});
});
addEventListener('keydown', (e) => { if (e.key === 'Escape' && playing && current !== 's-end') setPause(!paused); });
document.addEventListener('visibilitychange', () => { if (document.hidden && playing && !paused) setPause(true); });
document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement && playing && !paused && !input.touch && current === '') setPause(true); });

// ------------------------------------------------------------------ solo
$('b-solo').onclick = () => {
  initAudio();
  startGame(new HostSession({ name: myName(), bots: 5 }), { reset: true });
};

let relaxOn = store.get('relax', '0') === '1';
function syncRelax() { document.querySelectorAll('#svmode button').forEach((b) => b.classList.toggle('on', (b.dataset.v === '1') === relaxOn)); }
document.querySelectorAll('#svmode button').forEach((b) => { b.onclick = () => { relaxOn = b.dataset.v === '1'; store.set('relax', relaxOn ? '1' : '0'); syncRelax(); }; });
syncRelax();
$('b-survive').onclick = () => {
  initAudio();
  startGame(new HostSession({ name: myName(), bots: 0, mode: relaxOn ? 'relax' : 'survival' }), { reset: true });
};

// ------------------------------------------------------------------ online
const defaultServer = /^https?:$/.test(location.protocol) ? `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws` : '';
$('server').value = store.get('server', defaultServer) || defaultServer;
const serverUrl = () => { const u = $('server').value.trim(); store.set('server', u); return u; };
const oerr = (m) => { $('o-err').textContent = m || ''; };
// Free hosting sleeps when idle: poke /health until it answers, telling the player what's happening.
async function wake() {
  const ws = serverUrl();
  if (!/^wss?:\/\//.test(ws)) return;
  const health = ws.replace(/^ws/, 'http').replace(/\/ws\/?$/, '') + '/health';
  const ping = async () => {
    const c = new AbortController(), t = setTimeout(() => c.abort(), 4000);
    try { return (await fetch(health, { cache: 'no-store', signal: c.signal })).ok; } catch { return false; } finally { clearTimeout(t); }
  };
  if (await ping()) return;
  for (let i = 0; i < 20; i++) {
    oerr('Waking up the server… this can take up to a minute');
    if (await ping()) { oerr(''); return; }
    await new Promise((r) => setTimeout(r, 1500));
  }
  oerr('');
}

$('b-online').onclick = () => { show('s-online'); oerr(''); refreshRooms(); };
$('o-refresh').onclick = refreshRooms;
async function refreshRooms() {
  const box = $('rooms');
  box.textContent = '';
  if (!serverUrl()) return;
  try {
    await wake();
    const rooms = await listRooms(serverUrl());
    if (!rooms.length) { box.innerHTML = '<div class="note">No public rooms yet. Create one!</div>'; return; }
    for (const r of rooms) {
      const d = document.createElement('div'); d.className = 'room';
      const t = document.createElement('span'); t.textContent = `${r.name}  ·  ${r.players}/${r.max}`;
      const b = document.createElement('button'); b.textContent = 'Join';
      b.onclick = () => joinRoom(r.code);
      d.append(t, b); box.appendChild(d);
    }
  } catch (e) { oerr(e.message); }
}

$('o-host').onclick = async () => {
  initAudio(); oerr('');
  try {
    await wake();
    const mode = $('o-mode').value;
    const net = await createOnline(serverUrl(), myName(), mode, true);
    const s = new ClientSession(net); // the server runs the match; we are its first player and its leader
    session = s;
    $('l-botsrow').style.display = mode === 'arena' ? '' : 'none'; $('l-svnote').style.display = mode === 'arena' ? 'none' : '';
    $('l-svnote').textContent = mode === 'relax' ? 'Island relax: monsters roam and attack players, but never the lighthouse. Survive three nights until the rescue boat arrives.' : 'Island survival: defend the lighthouse together for three nights until the rescue boat arrives.';
    s.onClosed = (why) => { leave(); toast(why); };
    $('l-code').textContent = net.code;
    $('l-bots').value = 5; $('l-botsn').textContent = '5';
    show('s-lobby');
    await s.ready;
  } catch (e) { oerr(e.message); }
};
$('l-bots').oninput = () => {
  const n = Number($('l-bots').value);
  $('l-botsn').textContent = String(n);
  if (session && session.net) session.net.send({ k: 'cfg', bots: n }); // the leader tells the server how many bots
};
$('l-start').onclick = () => { if (session && session.net) session.net.send({ k: 'start' }); startGame(session); };
$('o-join').onclick = () => joinRoom($('code').value);
async function joinRoom(code) {
  initAudio(); oerr('');
  if (String(code).trim().length < 4) return oerr('Enter the 4-letter room code');
  try {
    await wake();
    const net = await joinOnline(serverUrl(), code, myName());
    const s = new ClientSession(net);
    await s.ready;
    startGame(s);
  } catch (e) { oerr(e.message); }
}

setInterval(() => {
  if (current === 's-lobby' && session) {
    const l = $('l-players'); l.textContent = '';
    for (const r of session.roster.values()) {
      const d = document.createElement('div');
      d.innerHTML = '<span></span><span style="color:var(--dim)"></span>';
      d.firstChild.textContent = r.name; d.lastChild.textContent = r.bot ? 'bot' : (r.id === session.myId ? 'you' : 'friend');
      l.appendChild(d);
    }
  }
}, 500);

// ------------------------------------------------------------------ hotspot (experimental)
let scanStop = null;
function stopScan() { if (scanStop) { scanStop(); scanStop = null; } $('cam').style.display = 'none'; $('cam2').style.display = 'none'; }
const copy = (text) => { try { navigator.clipboard.writeText(text); } catch { /* ignore */ } };
const herr = (id, m) => { $(id).textContent = m || ''; };

$('b-hotspot').onclick = () => show('s-hot');

// Host
$('h-host').onclick = async () => {
  initAudio();
  await openCamera(); // lets the browser expose the real local IP address
  hotspotNet = new HostNet('hotspot');
  const s = new HostSession({ name: myName(), bots: 4, net: hotspotNet });
  session = s;
  s.onClosed = (why) => { leave(); toast(why); };
  const onPeer = hotspotNet.onPeer, onLeave = hotspotNet.onLeave;
  hotspotNet.onPeer = (pid, nm) => { onPeer(pid, nm); refreshHotPlayers(); if (pid === hotPid) { herr('hh-err', ''); $('hh-answer').value = ''; newInvite(); } };
  hotspotNet.onLeave = (pid) => { onLeave(pid); refreshHotPlayers(); };
  show('s-hhost');
  refreshHotPlayers();
  await newInvite();
};
let hotPid = 0;
async function newInvite() {
  stopScan(); accepting = false;
  herr('hh-err', '');
  try {
    const { pid, code } = await hotspotNet.hotspotInvite();
    hotPid = pid;
    $('hh-offer').value = code;
    drawQr($('hh-qr'), code, 320);
    const stop = await startScan($('cam'), (text) => { $('hh-answer').value = text; connectFriend(); });
    if (stop) { scanStop = stop; $('cam').style.display = 'block'; }
  } catch (e) { herr('hh-err', e.message); }
}
let accepting = false; // one scan can fire several times: only the first counts
async function connectFriend() {
  const text = $('hh-answer').value.trim();
  if (!text) return herr('hh-err', 'Scan or paste your friend\'s code first');
  if (accepting) return;
  accepting = true; stopScan(); $('hh-connect').disabled = true;
  try { await hotspotNet.hotspotAccept(hotPid, text); herr('hh-err', 'Connecting… (up to 10 seconds)'); } catch (e) { herr('hh-err', e.message); accepting = false; }
  $('hh-connect').disabled = false;
}
function refreshHotPlayers() {
  const l = $('hh-players'); l.textContent = '';
  if (!session) return;
  for (const r of session.game.roster()) {
    if (r.bot) continue;
    const d = document.createElement('div');
    d.innerHTML = '<span></span><span style="color:var(--good)">connected</span>';
    d.firstChild.textContent = r.name + (r.id === session.myId ? ' (you)' : '');
    l.appendChild(d);
  }
}
$('hh-connect').onclick = connectFriend;
$('hh-copy').onclick = () => copy($('hh-offer').value);
$('hh-next').onclick = newInvite;
$('hh-start').onclick = () => { stopScan(); startGame(session, { reset: !playing }); };
$('hh-back').onclick = () => { stopScan(); if (playing) show('s-pause'); else leave(); };
$('p-invite').onclick = () => { show('s-hhost'); refreshHotPlayers(); newInvite(); };

// Join
$('h-join').onclick = async () => {
  initAudio();
  await openCamera();
  show('s-hjoin');
  $('hj-step2').style.display = 'none'; herr('hj-err', '');
  const stop = await startScan($('cam2'), (text) => { $('hj-offer').value = text; joinFlow(text); });
  if (stop) { scanStop = stop; $('cam2').style.display = 'block'; }
};
$('hj-go').onclick = () => joinFlow($('hj-offer').value);
let joining = false;
async function joinFlow(text) {
  if (joining) return;
  joining = true; herr('hj-err', '');
  try {
    stopScan();
    const { net, answer } = await hotspotJoin(text.trim(), myName());
    $('hj-answer').value = answer;
    drawQr($('hj-qr'), answer, 320);
    $('hj-step2').style.display = 'block';
    $('hj-copy').onclick = () => copy(answer);
    await net.opened;
    const s = new ClientSession(net);
    await s.ready;
    closeCamera();
    startGame(s);
  } catch (e) { herr('hj-err', e.message || 'Could not connect'); }
  joining = false;
}
$('hj-back').onclick = () => { stopScan(); closeCamera(); show('s-hot'); };

// ------------------------------------------------------------------ effects
const feed = $('feed');
function nameOf(id) { const r = session && session.roster.get(id); return r ? r.name : '?'; }
function onEvent(e) {
  const me = session ? session.myId : 0;
  const v = session.view;
  if (e[0] === 's') {
    renderer.tracer(e[2], e[3], e[4], e[5], e[6], e[7]);
    renderer.shot(e[1]);
    const sh = v.players.find((p) => p.id === e[1]);
    const near = e[1] === me;
    const d = v.me ? Math.hypot(e[2] - v.me.x, e[4] - v.me.z) : 99;
    if (near || d < 35) sfx.shot(sh ? sh.weapon : 0, near || d < 12);
    if (near) renderer.kick = 0.012;
  } else if (e[0] === 'h') {
    renderer.hit(e[1]);
    if (e[2] === me) { flash($('hitm'), e[4] ? 'head' : ''); (e[4] ? sfx.headshot : sfx.hit)(); }
    if (e[1] === me) { flash($('vig')); sfx.hurt(); renderer.addShake(0.08); }
  } else if (e[0] === 'mh') {
    renderer.mons.flash(e[1]);
    if (e[2] === me) { flash($('hitm'), e[4] ? 'head' : ''); (e[4] ? sfx.headshot : sfx.hit)(); }
  } else if (e[0] === 'mk') {
    if (e[2] === me) sfx.kill();
  } else if (e[0] === 'boom') {
    renderer.boom(e[1], e[2], e[3]); sfx.shot(2, true);
  } else if (e[0] === 'mimic') {
    note('It was a MIMIC!', 1800); renderer.addShake(0.12); sfx.hurt();
  } else if (e[0] === 'phase') {
    if (e[1]) note(`🌑 Night ${e[2]} falls… keep the light burning`, 3500); else note(`🌅 Dawn of day ${e[2] + 1}`, 3000);
  } else if (e[0] === 'drop') {
    note('📦 Supply drop incoming!', 2200);
  } else if (e[0] === 'pk') {
    if (e[1] === me) note(e[2] === 0 ? '⛽ Fuel can: take it to the lighthouse' : '➕ Medkit: +60 health', 2400);
  } else if (e[0] === 'dep') {
    note('💡 Lighthouse refuelled', 2000);
  } else if (e[0] === 'k') {
    const w = WEAPONS[e[3]] ? WEAPONS[e[3]].name : '';
    const d = document.createElement('div');
    d.textContent = e[1] === 0 ? `${nameOf(e[2])} was torn apart` : `${nameOf(e[1])}  ➜  ${nameOf(e[2])}  (${w})`;
    if (e[1] === me || e[2] === me) d.style.background = 'rgba(255,159,28,.55)';
    feed.appendChild(d);
    setTimeout(() => d.remove(), 4600);
    while (feed.children.length > 5) feed.firstChild.remove();
    if (e[1] === me) sfx.kill();
    if (e[2] === me) sfx.die();
  }
}
let noteT = 0;
function note(msg, ms = 2600) {
  const el = $('note'); el.textContent = msg; el.classList.add('on');
  clearTimeout(noteT); noteT = setTimeout(() => el.classList.remove('on'), ms);
}
function flash(el, cls) {
  el.classList.remove('head'); if (cls) el.classList.add(cls);
  el.classList.add('on');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('on'), 70);
}

// ------------------------------------------------------------------ HUD
let boardT = 0, wasOver = 0, wasAlive = true, reloadSfx = 0;
function hud(dt) {
  const v = session.view, me = v.me;
  if (!me) return;
  $('hp').style.width = Math.max(0, me.hp) + '%';
  $('hpbar').classList.toggle('low', me.hp < 30);
  $('fuel').style.width = me.fuel + '%';
  $('fuelbar').classList.toggle('low', me.fuel < 12);
  const w = WEAPONS[me.weapon];
  $('wname').textContent = w.name;
  $('ammon').textContent = me.reload > 0 ? 'RELOAD' : me.ammo + ' / ' + w.mag;
  if (me.reload > 0 && !reloadSfx) { sfx.reload(); reloadSfx = 1; } else if (me.reload <= 0) reloadSfx = 0;
  const t = v.left, sv = v.sv;
  if (sv) {
    $('timer').textContent = (sv.dark > 0.5 ? '🌑 Night ' : '☀️ Day ') + sv.day + ' / 3';
    $('goal').textContent = (sv.relax ? 'Relax · ' : '') + 'Rescue boat in ' + Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
    $('svfuel').style.width = Math.max(0, Math.min(100, sv.fuel)) + '%';
    $('svhp').style.width = Math.max(0, Math.min(100, sv.hp / 6)) + '%';
    $('svhprow').style.display = sv.relax ? 'none' : '';
    $('svcans').textContent = me.cans ? '⛽ ×' + me.cans + ' → bring it to the lighthouse' : '';
  } else {
    $('timer').textContent = Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
    $('goal').textContent = 'First to ' + v.lim + ' kills';
  }
  $('net').textContent = session.isHost ? (session.net ? 'HOST' : '') : v.ping + ' ms';
  $('banner').innerHTML = me.alive ? '' : (sv ? 'You fell…<small>You will wash ashore at the lighthouse in a moment</small>' : 'Respawning…<small>Take cover, then jump back in</small>');
  wasAlive = me.alive;

  boardT -= dt;
  if (boardT <= 0 || v.over !== wasOver) {
    boardT = 0.3;
    const sorted = [...v.players].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    const bd = $('board'); bd.textContent = '';
    for (const p of sorted.slice(0, 5)) {
      const d = document.createElement('div');
      if (p.id === me.id) d.className = 'me';
      const a = document.createElement('span'), b = document.createElement('span');
      a.textContent = p.name; b.textContent = p.kills;
      d.append(a, b); bd.appendChild(d);
    }
    if (v.over && !wasOver) {
      const won = sv ? v.over === 1 : v.over === me.id;
      sfx[won ? 'win' : 'die']();
      $('e-title').textContent = sv ? (won ? 'Rescued! 🚤 You survived three nights' : 'The lighthouse fell… 🌑') : (won ? 'You win! 🏆' : nameOf(v.over) + ' wins');
      const l = $('e-list'); l.textContent = '';
      for (const p of sorted) {
        const d = document.createElement('div');
        d.innerHTML = '<span></span><span></span>';
        d.firstChild.textContent = p.name; d.lastChild.textContent = p.kills + ' / ' + p.deaths;
        l.appendChild(d);
      }
      input.reset(); input.enabled = false;
      show('s-end');
    } else if (!v.over && wasOver) { show(''); hideScreens(); input.enabled = true; }
    wasOver = v.over;
  }
}

// ------------------------------------------------------------------ main loop
let last = performance.now();
let fpsAcc = 0, fpsN = 0;
renderer.onAutoQuality = (q) => { $('qual').value = String(q); applySettings(); toast('Graphics lowered to keep the game smooth'); };
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000);
  if (playing && $('fps').value === '1') { fpsAcc += dt; fpsN++; if (fpsAcc >= 0.5) { $('fpsbox').textContent = Math.round(fpsN / fpsAcc) + ' FPS'; fpsAcc = 0; fpsN = 0; } }
  last = now;
  if (playing && !paused && !document.hidden) renderer.adapt(dt);
  if (!session) { if (current === 's-menu') lobby.draw(dt); return; }
  const frozen = paused && session.isHost && !session.net; // only solo can truly pause
  if (!frozen) {
    const me = session.view.me;
    const cur = me ? me.weapon : 1;
    if (playing) {
      if (me && !me.alive) input.adsToggle = false; // dying drops your scope
      const inp = input.read(cur, WEAPONS.length);
      inp.fp = !renderer.thirdPerson; // first-person: bullets leave the eye, so aim must match
      const w = WEAPONS[cur], ads = !!inp.ads && !!me && me.alive;
      const scoped = ads && cur === SNIPER; // scoped sniper = true first person
      if (input.zoomStep) { input.zoomStep = false; if (scoped) input.zoomLevel = (input.zoomLevel + 1) % w.zoom.length; }
      aimView.fov = ads ? adsFov(cur, input.zoomLevel) : BASE_FOV;
      aimView.fp = scoped; aimView.ads = ads;
      // Look speed follows the zoom, so a 8x scope isn't twitchy.
      input.zoomMul = Math.tan((renderer.fov * Math.PI) / 360) / Math.tan((BASE_FOV * Math.PI) / 360);
      input.scopedNow = scoped;

      let locked = false, spread = w.spread;
      if (me && me.alive) {
        spread = spreadOf(w, ads, Math.hypot(me.vx || 0, me.vz || 0), !me.gr || me.thr, me.bloom || 0);
        locked = aimedEnemy(me, session.view.sv ? session.view.sv.mons.map((m) => ({ id: 1000 + m.id, x: m.x, y: m.y, z: m.z, alive: true, hw: MONS[m.kind].hw, bh: MONS[m.kind].bh, th: MONS[m.kind].h })) : session.view.players, inp.yaw, inp.pitch, w.range, scoped || inp.fp);
      }
      // Auto-fire: shoot while the crosshair is on an enemy. The sniper only auto-fires when scoped AND
      // steady, so the shot it takes is an accurate one. Pulsed so single-shot weapons keep firing.
      if (!inp.fire && locked && me && me.alive && !session.view.over && $('auto').value === '1'
          && (cur !== SNIPER || (scoped && spread < 0.005))) {
        inp.fire = w.auto || Math.floor(now / 110) % 2 === 0;
      }
      session.setLocalInput(inp);
      crosshair(spread, renderer.fov, locked, scoped, ads, cur);
    }
    else session.setLocalInput({ mx: 0, mz: 0, yaw: input.yaw, pitch: input.pitch, jet: false, fire: false, ads: false });
    session.update(dt);
  }
  if (playing) {
    renderer.draw(dt, session.view, { yaw: input.yaw, pitch: input.pitch, fov: aimView.fov, fp: aimView.fp, scope: aimView.fp, ads: aimView.ads });
    hud(dt);
  }
}
const aimView = { fov: BASE_FOV, fp: false, ads: false };
// The crosshair gap IS the weapon's current inaccuracy, converted to screen pixels, so what you see
// is what the bullets will do. Red when the shot would hit someone.
const crossEl = $('cross');
function crosshair(spread, fov, locked, scoped, ads, weapon) {
  const px = (Math.tan(spread) / Math.tan((fov * Math.PI) / 360)) * (innerHeight / 2);
  crossEl.style.setProperty('--gap', Math.max(3, Math.min(140, px)).toFixed(1) + 'px');
  crossEl.classList.toggle('lock', locked);
  document.body.classList.toggle('scoped', scoped);
  $('btn-scope').classList.toggle('on', ads);
  const zoomBtn = $('btn-zoom');
  zoomBtn.classList.toggle('show', scoped && WEAPONS[weapon].zoom.length > 1);
  const label = WEAPONS[weapon].zoom[Math.min(input.zoomLevel, WEAPONS[weapon].zoom.length - 1)] + 'x';
  if (zoomBtn.textContent !== label) { zoomBtn.textContent = label; $('zoomtag').textContent = label; }
}
requestAnimationFrame(frame);

if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
// Test hook for automated checks.
window.__ja = { get session() { return session; }, input, renderer, net: { HostNet, hotspotJoin } };
