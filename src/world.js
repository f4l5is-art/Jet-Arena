// Builds the arena scenery: textured, merged geometry (few draw calls), sky, sun, clouds, trees, rocks, mountains.
// Everything is generated at start-up from canvas textures, so there are no image files to download.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MAP, HALF } from './core.js';

export const HORIZON = 0xcfe3f2;
export const FOG_NEAR = 70, FOG_FAR = 190, CAM_FAR = 215;

// ------------------------------------------------------------------ tiny helpers
let seed = 7;
const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const hash = (a, b, c) => { const s = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453; return s - Math.floor(s); };

function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function tex(c) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function speckle(g, w, h, n, cols, maxSize = 2) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = cols[(rnd() * cols.length) | 0];
    g.fillRect(rnd() * w, rnd() * h, 1 + rnd() * maxSize, 1 + rnd() * maxSize);
  }
}

// ------------------------------------------------------------------ textures (name -> { map, tile metres })
function makeTextures() {
  const T = {};
  const add = (name, tile, c) => { T[name] = { map: tex(c), tile }; };

  { // concrete
    const [c, g] = canvas(128);
    g.fillStyle = '#9b9b96'; g.fillRect(0, 0, 128, 128);
    speckle(g, 128, 128, 900, ['#8c8c88', '#a8a8a3', '#85857f', '#b0afa8'], 2);
    g.fillStyle = 'rgba(60,60,55,.35)'; g.fillRect(0, 126, 128, 2); g.fillRect(126, 0, 2, 128); // panel seams
    g.strokeStyle = 'rgba(60,60,55,.35)'; g.lineWidth = 1; g.beginPath(); g.moveTo(20, 40); g.lineTo(34, 52); g.lineTo(30, 70); g.stroke();
    add('concrete', 2, c);
  }
  { // perimeter wall: darker, with vertical seams and grime at the bottom
    const [c, g] = canvas(128);
    g.fillStyle = '#767982'; g.fillRect(0, 0, 128, 128);
    speckle(g, 128, 128, 700, ['#6c6f78', '#82858e', '#62656d'], 2);
    g.fillStyle = 'rgba(30,30,35,.4)'; g.fillRect(0, 0, 3, 128);
    const gr = g.createLinearGradient(0, 128, 0, 80); gr.addColorStop(0, 'rgba(30,25,20,.35)'); gr.addColorStop(1, 'rgba(30,25,20,0)');
    g.fillStyle = gr; g.fillRect(0, 80, 128, 48);
    add('wallc', 4, c);
  }
  { // brick
    const [c, g] = canvas(128);
    g.fillStyle = '#8f857a'; g.fillRect(0, 0, 128, 128);
    const cols = ['#a65a3e', '#9a4f36', '#b06444', '#94503a', '#a85f45'];
    for (let r = 0; r < 8; r++) for (let i = 0; i < 5; i++) {
      const off = r % 2 ? -16 : 0;
      g.fillStyle = cols[(rnd() * cols.length) | 0];
      g.fillRect(i * 32 + off + 1, r * 16 + 1, 30, 14);
    }
    speckle(g, 128, 128, 300, ['rgba(0,0,0,.12)', 'rgba(255,255,255,.08)'], 2);
    add('brick', 2, c);
  }
  { // wooden crate
    const [c, g] = canvas(128);
    g.fillStyle = '#b98a52'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#a77a45';
    for (let i = 0; i < 128; i += 21) g.fillRect(0, i, 128, 2);
    speckle(g, 128, 128, 400, ['#a87b46', '#c4955c', '#9c703d'], 3);
    g.fillStyle = '#6e4a27'; g.fillRect(0, 0, 128, 10); g.fillRect(0, 118, 128, 10); g.fillRect(0, 0, 10, 128); g.fillRect(118, 0, 10, 128);
    g.strokeStyle = '#6e4a27'; g.lineWidth = 9; g.beginPath(); g.moveTo(8, 8); g.lineTo(120, 120); g.stroke();
    g.fillStyle = '#d3b383'; for (const [x, y] of [[5, 5], [123, 5], [5, 123], [123, 123]]) g.fillRect(x - 2, y - 2, 4, 4);
    add('crate', 1, c);
  }
  { // sandbags
    const [c, g] = canvas(128);
    g.fillStyle = '#6b5f45'; g.fillRect(0, 0, 128, 128);
    const cols = ['#b9a679', '#c4b184', '#ad9a6e', '#bfae82'];
    for (let r = 0; r < 4; r++) for (let i = 0; i < 3; i++) {
      const x = i * 43 + (r % 2 ? -21 : 0), y = r * 32;
      g.fillStyle = cols[(rnd() * cols.length) | 0];
      g.beginPath(); g.ellipse(x + 21, y + 16, 21, 14, 0, 0, 7); g.fill();
      g.strokeStyle = 'rgba(70,58,35,.5)'; g.lineWidth = 1.5; g.stroke();
    }
    add('sandbag', 1.2, c);
  }
  { // corrugated roof / metal
    const [c, g] = canvas(128);
    for (let i = 0; i < 16; i++) {
      const gr = g.createLinearGradient(i * 8, 0, i * 8 + 8, 0);
      gr.addColorStop(0, '#6e7983'); gr.addColorStop(0.5, '#909ba5'); gr.addColorStop(1, '#68737d');
      g.fillStyle = gr; g.fillRect(i * 8, 0, 8, 128);
    }
    speckle(g, 128, 128, 300, ['rgba(120,80,50,.18)', 'rgba(0,0,0,.1)'], 3);
    add('roofm', 2, c);
  }
  { // deck plate (top)
    const [c, g] = canvas(128);
    g.fillStyle = '#566170'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#6a7686';
    for (let y = 0; y < 128; y += 16) for (let x = 0; x < 128; x += 16) {
      g.beginPath(); g.moveTo(x + 8, y + 2); g.lineTo(x + 14, y + 8); g.lineTo(x + 8, y + 14); g.lineTo(x + 2, y + 8); g.fill();
    }
    g.fillStyle = '#3d4551'; g.fillRect(0, 0, 128, 2); g.fillRect(0, 0, 2, 128);
    add('grate', 2, c);
  }
  { // hazard stripes (deck sides)
    const [c, g] = canvas(128);
    g.fillStyle = '#2b2d31'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#f0b823';
    for (let i = -128; i < 256; i += 32) { g.beginPath(); g.moveTo(i, 128); g.lineTo(i + 16, 128); g.lineTo(i + 144, 0); g.lineTo(i + 128, 0); g.fill(); }
    add('hazard', 2, c);
  }
  { // steel pillar
    const [c, g] = canvas(128);
    g.fillStyle = '#56637a'; g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 128; i += 32) { g.fillStyle = 'rgba(255,255,255,.12)'; g.fillRect(i, 0, 5, 128); g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(i + 24, 0, 8, 128); }
    g.fillStyle = '#2f3846'; for (let y = 8; y < 128; y += 40) for (let x = 6; x < 128; x += 32) g.fillRect(x, y, 4, 4);
    add('steel', 2, c);
  }
  // shipping containers: vertical ribs, dark frame, a little rust
  for (const [name, col, dark, light] of [['cont_red', '#a8362b', '#7e2620', '#c14a3d'], ['cont_blue', '#2f5d9a', '#22456f', '#4373b3'],
    ['cont_green', '#3d7a4a', '#2b5835', '#4f9360'], ['cont_orange', '#d1802a', '#a15f1c', '#e69a45']]) {
    const [c, g] = canvas(128);
    g.fillStyle = col; g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 16; i++) {
      const gr = g.createLinearGradient(i * 8, 0, i * 8 + 8, 0);
      gr.addColorStop(0, dark); gr.addColorStop(0.45, light); gr.addColorStop(1, col);
      g.globalAlpha = 0.55; g.fillStyle = gr; g.fillRect(i * 8, 8, 8, 112); g.globalAlpha = 1;
    }
    g.fillStyle = dark; g.fillRect(0, 0, 128, 8); g.fillRect(0, 120, 128, 8);
    speckle(g, 128, 128, 260, ['rgba(110,60,30,.35)', 'rgba(0,0,0,.12)'], 3);
    add(name, 2.6, c);
  }
  { // outer grass (tiled)
    const [c, g] = canvas(128);
    g.fillStyle = '#6d8b50'; g.fillRect(0, 0, 128, 128);
    speckle(g, 128, 128, 1400, ['#648247', '#78965a', '#5d7a42', '#82a062'], 2);
    add('grass', 8, c);
  }
  return T;
}

// Face texture for each box kind: [side, top]
const KIND_TEX = {
  wall: ['wallc', 'wallc'], deck: ['hazard', 'grate'], pillar: ['steel', 'steel'], cover: ['crate', 'crate'],
  brick: ['brick', 'concrete'], roof: ['roofm', 'roofm'], concrete: ['concrete', 'concrete'], sandbag: ['sandbag', 'sandbag'],
  container_red: ['cont_red', 'roofm'], container_blue: ['cont_blue', 'roofm'], container_green: ['cont_green', 'roofm'],
  container_orange: ['cont_orange', 'roofm'],
};

// ------------------------------------------------------------------ box geometry with world-scale UVs
function addBoxFaces(acc, b, tiles) {
  const [sideName, topName] = KIND_TEX[b.kind] || KIND_TEX.concrete;
  const tint = 0.9 + hash(b.x, b.y, b.z) * 0.14;
  const { minx: x0, maxx: x1, miny: y0, maxy: y1, minz: z0, maxz: z1 } = b;
  const faces = [
    { n: [1, 0, 0], p: [[x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0]], uv: (p) => [p[2], p[1]], t: sideName, shade: 0.92 },
    { n: [-1, 0, 0], p: [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]], uv: (p) => [p[2], p[1]], t: sideName, shade: 0.92 },
    { n: [0, 1, 0], p: [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], uv: (p) => [p[0], p[2]], t: topName, shade: 1.0 },
    { n: [0, 0, 1], p: [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], uv: (p) => [p[0], p[1]], t: sideName, shade: 1.0 },
    { n: [0, 0, -1], p: [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0]], uv: (p) => [p[0], p[1]], t: sideName, shade: 0.96 },
  ];
  if (y0 > 0.05) faces.push({ n: [0, -1, 0], p: [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]], uv: (p) => [p[0], p[2]], t: sideName, shade: 0.6 });
  for (const f of faces) {
    const a = acc[f.t] || (acc[f.t] = { pos: [], nor: [], uv: [], col: [] });
    const tile = tiles[f.t].tile;
    let order = [0, 1, 2, 0, 2, 3];
    const [p0, p1, p2] = f.p;
    const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2], vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
    const cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx;
    if (cx * f.n[0] + cy * f.n[1] + cz * f.n[2] < 0) order = [0, 2, 1, 0, 3, 2];
    for (const i of order) {
      const p = f.p[i], [u, v] = f.uv(p);
      a.pos.push(p[0], p[1], p[2]); a.nor.push(f.n[0], f.n[1], f.n[2]);
      a.uv.push(u / tile, v / tile);
      const s = f.shade * tint; a.col.push(s, s, s);
    }
  }
}

function geoFrom(a) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(a.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(a.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(a.uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(a.col, 3));
  return g;
}

// ------------------------------------------------------------------ ground (painted once: grass, gravel roads, yard, forest floor)
function makeGroundTexture() {
  const N = 1024, k = N / (HALF * 2);
  const [c, g] = canvas(N);
  g.fillStyle = '#6d8b50'; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 90; i++) { // soft patches
    const x = rnd() * N, y = rnd() * N, r = 30 + rnd() * 70;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    const light = rnd() < 0.5;
    gr.addColorStop(0, light ? 'rgba(150,180,100,.16)' : 'rgba(40,70,30,.16)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  speckle(g, N, N, 14000, ['#648247', '#78965a', '#5d7a42', '#82a062'], 3);
  const PAD = {
    dirt: { base: '#8c7b5e', spk: ['#7a6a4f', '#9d8c6d', '#6f6048', '#a39577'] },
    forest: { base: '#51703b', spk: ['#456132', '#5d7d44', '#3c5629', '#6a6f3d'] },
    concrete: { base: '#8f9196', spk: ['#85878c', '#9a9ca1', '#7c7e83'] },
  };
  for (const p of MAP.pads || []) {
    const s = PAD[p.m]; if (!s) continue;
    const x = (p.x - p.w / 2 + HALF) * k, y = (p.z - p.d / 2 + HALF) * k, w = p.w * k, h = p.d * k;
    g.fillStyle = s.base;
    if (p.m === 'concrete') g.fillRect(x, y, w, h);
    else { // ragged edge: overlapping rects of slightly different size plus loose speckle around the border
      g.fillRect(x + 4, y + 4, w - 8, h - 8);
      for (let i = 0; i < w * h / 90; i++) {
        g.fillStyle = s.base; g.globalAlpha = 0.5;
        g.fillRect(x - 6 + rnd() * (w + 12), y - 6 + rnd() * (h + 12), 3 + rnd() * 5, 3 + rnd() * 5);
      }
      g.globalAlpha = 1;
    }
    g.save(); g.beginPath(); g.rect(x, y, w, h); g.clip();
    speckle(g, N, N, (w * h) / 14, s.spk, 3);
    g.restore();
  }
  return tex(c);
}

// ------------------------------------------------------------------ vertex-coloured scenery pieces
export function part(geo, color, m, jitter = 0.08) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  g.deleteAttribute('uv');
  g.applyMatrix4(m);
  const col = new THREE.Color(color);
  const j = 1 - jitter + rnd() * jitter * 2;
  const n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = col.r * j; arr[i * 3 + 1] = col.g * j; arr[i * 3 + 2] = col.b * j; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}
const MAT4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), S = new THREE.Vector3(), EU = new THREE.Euler();
export const place = (x, y, z, sx, sy, sz, ry = 0) => MAT4.compose(V.set(x, y, z), Q.setFromEuler(EU.set(0, ry, 0)), S.set(sx, sy, sz)).clone();

const SNOW = new THREE.Color(0xeef3f8);
function buildDecor() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.28, 0.4, 2.4, 6);
  const cone = new THREE.ConeGeometry(1, 1, 7, 1, true);
  const rock = new THREE.IcosahedronGeometry(1, 0);
  const barrel = new THREE.CylinderGeometry(0.42, 0.42, 1.1, 8);
  const ring = new THREE.CylinderGeometry(0.44, 0.44, 0.07, 8);
  const mount = new THREE.ConeGeometry(1, 1, 6, 10, true);
  const greens = [0x2f6b3a, 0x377a41, 0x2a5f35, 0x3c7e45];
  for (const d of MAP.decor) {
    const s = d.s || 1, r = d.r || 0;
    if (d.t === 'pine') {
      const k = s * 0.8;
      parts.push(part(trunk, 0x6a4a2e, place(d.x, 1.2 * k, d.z, k, k, k, r), 0.05));
      const gc = greens[(d.x * 7 + d.z * 3) & 3 & (greens.length - 1)] || greens[0];
      parts.push(part(cone, gc, place(d.x, (1.8 + 1.5) * k, d.z, 2.3 * k, 3.1 * k, 2.3 * k, r)));
      parts.push(part(cone, gc, place(d.x, (3.7 + 1.4) * k, d.z, 1.85 * k, 2.8 * k, 1.85 * k, r + 0.4)));
      parts.push(part(cone, gc, place(d.x, (5.5 + 1.2) * k, d.z, 1.3 * k, 2.4 * k, 1.3 * k, r + 0.8)));
    } else if (d.t === 'rock') {
      parts.push(part(rock, 0x8b8d90, place(d.x, 0.35 * s, d.z, s * 0.95, s * 0.7, s * 0.9, r), 0.12));
      parts.push(part(rock, 0x7a7d80, place(d.x + 0.7 * s, 0.2 * s, d.z + 0.3 * s, s * 0.5, s * 0.4, s * 0.5, r + 1), 0.1));
    } else if (d.t === 'barrel') {
      const col = d.c ? 0x2f5f9e : 0xb0412e;
      parts.push(part(barrel, col, place(d.x, 0.55, d.z, 1, 1, 1)));
      parts.push(part(ring, 0x23262b, place(d.x, 0.28, d.z, 1, 1, 1), 0));
      parts.push(part(ring, 0x23262b, place(d.x, 0.82, d.z, 1, 1, 1), 0));
    } else if (d.t === 'mount') {
      const W = 18 * s, Hh = 22 * s;
      // One cone, snow painted by vertex colour (a separate cap cone shared the same surface and z-fought).
      const g = part(mount, 0x6c7f95, place(d.x, d.y + Hh / 2, d.z, W, Hh, W, r), 0.1);
      const pos = g.attributes.position, col = g.attributes.color, c = new THREE.Color();
      for (let i = 0; i < pos.count; i++) {
        const t = (pos.getY(i) - d.y) / Hh; // 0 base .. 1 tip
        const k = Math.min(1, Math.max(0, (t - 0.62) / 0.12));
        c.setRGB(col.getX(i), col.getY(i), col.getZ(i)).lerp(SNOW, k);
        col.setXYZ(i, c.r, c.g, c.b);
      }
      parts.push(g);
    }
  }
  return mergeGeometries(parts, false);
}

// ------------------------------------------------------------------ sky
export function buildSky(scene) {
  const g = new THREE.SphereGeometry(190, 20, 12);
  const top = new THREE.Color(0x4a8fd6), mid = new THREE.Color(0x9cc6ea), hor = new THREE.Color(HORIZON);
  const pos = g.attributes.position, col = new Float32Array(pos.count * 3), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 190;
    if (y <= 0) c.copy(hor);
    else if (y < 0.25) c.copy(hor).lerp(mid, y / 0.25);
    else c.copy(mid).lerp(top, Math.min(1, (y - 0.25) / 0.6));
    col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const sky = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false, depthTest: false }));
  sky.renderOrder = -10; sky.frustumCulled = false;
  scene.add(sky);

  // sun: a bright disc with a soft halo, in the direction of the directional light
  const dir = new THREE.Vector3(30, 60, 20).normalize();
  for (const [r, op, rank] of [[26, 0.22, -9], [10, 1, -8]]) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 20), new THREE.MeshBasicMaterial({
      color: 0xfff4cf, transparent: op < 1, opacity: op, fog: false, depthWrite: false, depthTest: false }));
    m.position.copy(dir).multiplyScalar(170); m.lookAt(0, 0, 0); m.renderOrder = rank; m.frustumCulled = false;
    sky.add(m);
  }

  // clouds: a few flattened blobs that drift slowly around the player
  const cg = new THREE.IcosahedronGeometry(1, 0), parts = [];
  for (let i = 0; i < 16; i++) {
    const a = rnd() * Math.PI * 2, r = 70 + rnd() * 70, y = 60 + rnd() * 28, cx = Math.cos(a) * r, cz = Math.sin(a) * r;
    const n = 3 + ((rnd() * 3) | 0), sc = 9 + rnd() * 9;
    for (let j = 0; j < n; j++) {
      const k = sc * (0.55 + rnd() * 0.5);
      parts.push(part(cg, 0xffffff, place(cx + (j - n / 2) * sc * 0.8, y + rnd() * 2, cz + (rnd() - 0.5) * sc * 0.6, k, k * 0.38, k * 0.7, rnd() * 3), 0.04));
    }
  }
  const clouds = new THREE.Mesh(mergeGeometries(parts, false), new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, transparent: true, opacity: 0.92 }));
  clouds.frustumCulled = false;
  scene.add(clouds);
  return { sky, clouds };
}

// ------------------------------------------------------------------ entry point
export function buildWorld(scene) {
  scene.background = new THREE.Color(HORIZON);
  scene.fog = new THREE.Fog(HORIZON, FOG_NEAR, FOG_FAR);

  scene.add(new THREE.HemisphereLight(0xeaf4ff, 0x77705f, 1.7));
  const sun = new THREE.DirectionalLight(0xfff0d0, 1.7);
  sun.position.set(30, 60, 20);
  scene.add(sun);

  const tiles = makeTextures();
  const mats = {};
  const mat = (name) => mats[name] || (mats[name] = new THREE.MeshLambertMaterial({ map: tiles[name].map, vertexColors: true, flatShading: true }));

  // ground: painted arena floor + tiled grass all around it
  const groundMat = new THREE.MeshLambertMaterial({ map: makeGroundTexture(), flatShading: true });
  const arena = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, HALF * 2), groundMat);
  arena.rotation.x = -Math.PI / 2;
  scene.add(arena);
  const outer = new THREE.MeshLambertMaterial({ map: tiles.grass.map.clone(), flatShading: true });
  outer.map.needsUpdate = true;
  outer.map.repeat.set(1, 1);
  const E = 260;
  for (const [cx, cz, w, d] of [[0, -(HALF + E) / 2, E * 2, E - HALF], [0, (HALF + E) / 2, E * 2, E - HALF],
    [-(HALF + E) / 2, 0, E - HALF, HALF * 2], [(HALF + E) / 2, 0, E - HALF, HALF * 2]]) {
    const g = new THREE.PlaneGeometry(w, d);
    const uv = g.attributes.uv, t = tiles.grass.tile;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) - 0.5) * w / t + cx / t, (uv.getY(i) - 0.5) * d / t - cz / t);
    const m = new THREE.Mesh(g, outer);
    m.rotation.x = -Math.PI / 2; m.position.set(cx, 0, cz);
    scene.add(m);
  }

  // all boxes merged per texture
  const acc = {};
  for (const b of MAP.boxes) if (!b.hide) addBoxFaces(acc, b, tiles);
  for (const name of Object.keys(acc)) {
    const m = new THREE.Mesh(geoFrom(acc[name]), mat(name));
    scene.add(m);
  }

  // trees, rocks, barrels, mountains
  scene.add(new THREE.Mesh(buildDecor(), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })));

  const { sky, clouds } = buildSky(scene);
  return {
    update(camPos, dt) {
      sky.position.copy(camPos);
      clouds.position.set(camPos.x, 0, camPos.z);
      clouds.rotation.y += dt * 0.006;
    },
  };
}
