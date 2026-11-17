// The survival island: sea, sand and grass, a striped lighthouse with a sweeping beam, cabins, trees,
// and a day/night cycle driven by the host's clock (night = dark fog, stars, headlamp, lantern light).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ISLAND, ISLAND_R, LH_TOP } from './island.js';
import { buildSky, part, place, HORIZON } from './world.js';

const KIND_COLOR = {
  gallery: 0x7e8791, rail: 0xaab2bb, hut: 0x8a6a45, hutroof: 0x5a3a2a, crate: 0x9b6a3a, sandbag: 0xb8a77a,
};
const lerp = (a, b, t) => a + (b - a) * t;

function canvas(w, h = w) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }

function groundTexture() {
  const N = 512, [c, g] = canvas(N), mid = N / 2;
  const grd = g.createRadialGradient(mid, mid, 0, mid, mid, mid);
  const stops = [[0, '#3f7a3c'], [0.6, '#46823d'], [0.76, '#86974f'], [0.82, '#d6c48e'], [0.93, '#cdb980'], [0.965, '#a89868'], [1, '#6f8f8a']];
  for (const [t, col] of stops) grd.addColorStop(t, col);
  g.fillStyle = grd; g.fillRect(0, 0, N, N);
  // speckle: grass tufts inland, pebbles on the sand
  let s = 5;
  const rnd = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  for (let i = 0; i < 5200; i++) {
    const x = rnd() * N, y = rnd() * N, r = Math.hypot(x - mid, y - mid) / mid;
    if (r > 1) continue;
    g.fillStyle = r < 0.78 ? (rnd() < 0.5 ? '#2f6a33' : '#58954a') : (rnd() < 0.5 ? '#bba979' : '#e2d3a0');
    g.fillRect(x, y, 2 + rnd() * 3, 2 + rnd() * 3);
  }
  // a worn footpath from the dock to the lighthouse, painted in (no overlay geometry to flicker)
  g.strokeStyle = 'rgba(190,170,120,.55)'; g.lineWidth = 16; g.lineCap = 'round';
  g.beginPath(); g.moveTo(mid, mid + 20); g.lineTo(mid, N * 0.93); g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function waterTexture() {
  const N = 256, [c, g] = canvas(N);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, N, N);
  g.strokeStyle = 'rgba(120,170,205,.55)'; g.lineWidth = 3;
  let s = 11;
  const rnd = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  for (let i = 0; i < 46; i++) {
    const x = rnd() * N, y = rnd() * N, w = 14 + rnd() * 26;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + w / 2, y - 5, x + w, y); g.stroke();
    if (x + w > N) { g.beginPath(); g.moveTo(x - N, y); g.quadraticCurveTo(x - N + w / 2, y - 5, x - N + w, y); g.stroke(); }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(70, 70); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function scenery() {
  const parts = [], box = new THREE.BoxGeometry(1, 1, 1);
  // collidable boxes: cabins, crates, sandbags, the lighthouse deck
  for (const b of ISLAND.boxes) {
    if (b.hide || !KIND_COLOR[b.kind]) continue;
    parts.push(part(box, KIND_COLOR[b.kind], place(b.x, b.y + b.h / 2, b.z, b.w, b.h, b.d), 0.07));
  }
  // lighthouse tower: a square frustum in five red/white bands (matches its square collision box)
  const bandH = 3.1;
  for (let i = 0; i < 5; i++) {
    const y0 = i * bandH, y1 = y0 + bandH, hw0 = lerp(2.3, 1.9, y0 / 15.5), hw1 = lerp(2.3, 1.9, y1 / 15.5);
    const g = new THREE.CylinderGeometry(hw1 * Math.SQRT2, hw0 * Math.SQRT2, bandH, 4, 1, false);
    g.rotateY(Math.PI / 4);
    parts.push(part(g, i % 2 ? 0xf1f1ee : 0xc8362d, place(0, y0 + bandH / 2, 0, 1, 1, 1), 0.03));
  }
  const roof = new THREE.ConeGeometry(2.3 * Math.SQRT2, 1.8, 4); roof.rotateY(Math.PI / 4);
  parts.push(part(roof, 0x3a2420, place(0, LH_TOP + 3.0 + 0.9, 0, 1, 1, 1), 0));
  // lantern frame posts (the glass is a separate emissive mesh)
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) parts.push(part(box, 0x2a2e36, place(sx * 1.3, LH_TOP + 1.5, sz * 1.3, 0.25, 3, 0.25), 0));
  // boulders, barrels, trees, dock
  const trunk = new THREE.CylinderGeometry(0.28, 0.4, 2.4, 6), cone = new THREE.ConeGeometry(1, 1, 7, 1, true);
  const rock = new THREE.IcosahedronGeometry(1, 0), barrel = new THREE.CylinderGeometry(0.42, 0.42, 1.1, 8);
  const greens = [0x2f6b3a, 0x377a41, 0x2a5f35, 0x3c7e45];
  for (const d of ISLAND.decor) {
    const s = d.s || 1, r = d.r || 0;
    if (d.t === 'pine') {
      const k = s * 0.8, gc = greens[Math.abs((d.x * 7 + d.z * 3) | 0) & 3];
      parts.push(part(trunk, 0x6a4a2e, place(d.x, 1.2 * k, d.z, k, k, k, r), 0.05));
      parts.push(part(cone, gc, place(d.x, 3.3 * k, d.z, 2.3 * k, 3.1 * k, 2.3 * k, r)));
      parts.push(part(cone, gc, place(d.x, 5.1 * k, d.z, 1.85 * k, 2.8 * k, 1.85 * k, r + 0.4)));
      parts.push(part(cone, gc, place(d.x, 6.7 * k, d.z, 1.3 * k, 2.4 * k, 1.3 * k, r + 0.8)));
    } else if (d.t === 'rock') {
      parts.push(part(rock, 0x8b8d90, place(d.x, 0.35 * s, d.z, s * 0.95, s * 0.7, s * 0.9, r), 0.12));
      parts.push(part(rock, 0x7a7d80, place(d.x + 0.7 * s, 0.2 * s, d.z + 0.3 * s, s * 0.5, s * 0.4, s * 0.5, r + 1), 0.1));
    } else if (d.t === 'barrel') {
      parts.push(part(barrel, d.c ? 0x2f5f9e : 0xb0412e, place(d.x, 0.55, d.z, 1, 1, 1)));
    } else if (d.t === 'dock') {
      parts.push(part(box, 0x8a6a45, place(d.x, 0.14, d.z - 1, 3.2, 0.2, 14), 0.06)); // planks
      for (let k = 0; k < 6; k++) for (const sx of [-1, 1]) parts.push(part(box, 0x4a3524, place(d.x + sx * 1.5, -0.25, d.z - 7 + k * 2.4, 0.3, 0.9, 0.3), 0));
    }
  }
  return mergeGeometries(parts, false);
}

export function buildIslandWorld(scene) {
  scene.background = new THREE.Color(HORIZON);
  scene.fog = new THREE.Fog(HORIZON, 70, 190);
  const fog = scene.fog;

  const hemi = new THREE.HemisphereLight(0xeaf4ff, 0x77705f, 1.7); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d0, 1.7); sun.position.set(30, 60, 20); scene.add(sun);
  // night lights: a headlamp that follows the camera, and the lantern itself
  const lamp = new THREE.PointLight(0xffe2b0, 0, 26, 1.2); scene.add(lamp);
  const lantern = new THREE.PointLight(0xffe9b8, 0, 60, 1.1); lantern.position.set(0, LH_TOP + 1.8, 0); scene.add(lantern);

  // island: grass and sand disc with a lip, and the sea around it
  const ground = new THREE.Mesh(new THREE.CircleGeometry(ISLAND_R + 3, 64), new THREE.MeshLambertMaterial({ map: groundTexture() }));
  ground.rotation.x = -Math.PI / 2; scene.add(ground);
  const lip = new THREE.Mesh(new THREE.CylinderGeometry(ISLAND_R + 3, ISLAND_R + 3, 0.9, 64, 1, true), new THREE.MeshLambertMaterial({ color: 0xb59f6a, side: THREE.DoubleSide }));
  lip.position.y = -0.45; scene.add(lip);
  const wtex = waterTexture();
  const seaMat = new THREE.MeshLambertMaterial({ map: wtex, color: 0x2a78a6 });
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), seaMat);
  sea.rotation.x = -Math.PI / 2; sea.position.y = -0.9; scene.add(sea);

  const lit = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  scene.add(new THREE.Mesh(scenery(), lit));

  // lantern glass and the two beams
  const glassMat = new THREE.MeshBasicMaterial({ color: 0xfff1b0 });
  const glass = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.8, 2.4), glassMat);
  glass.position.set(0, LH_TOP + 1.5, 0); scene.add(glass);
  const beamGeo = new THREE.CylinderGeometry(0.25, 5.5, 50, 12, 1, true);
  beamGeo.translate(0, -25, 0); beamGeo.rotateZ(Math.PI / 2);
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
  const beams = new THREE.Group();
  beams.add(new THREE.Mesh(beamGeo, beamMat));
  const b2 = new THREE.Mesh(beamGeo, beamMat); b2.rotation.y = Math.PI; beams.add(b2);
  beams.position.set(0, LH_TOP + 1.5, 0); scene.add(beams);

  // sky, stars and the rescue boat
  const { sky, clouds } = buildSky(scene);
  const sunDiscs = sky.children.slice();
  const starPos = new Float32Array(260 * 3);
  for (let i = 0; i < 260; i++) {
    const a = Math.random() * Math.PI * 2, e = 0.08 + Math.random() * 1.4, r = 175;
    starPos.set([Math.cos(a) * Math.cos(e) * r, Math.sin(e) * r, Math.sin(a) * Math.cos(e) * r], i * 3);
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false, depthTest: false });
  const stars = new THREE.Points(sg, starMat); stars.renderOrder = -9; stars.frustumCulled = false; sky.add(stars);

  const boat = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.9, 8), new THREE.MeshLambertMaterial({ color: 0xf4f4f0 })); hull.position.y = 0.2; boat.add(hull);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.25, 8.05), new THREE.MeshLambertMaterial({ color: 0xc8362d })); stripe.position.y = 0.3; boat.add(stripe);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2, 1.4, 2.6), new THREE.MeshLambertMaterial({ color: 0xe9e9e4 })); cabin.position.set(0, 1.3, 1); boat.add(cabin);
  boat.position.set(3.5, -0.6, 49); boat.visible = false; scene.add(boat);

  // fins circling in the sea at night
  const finGeo = new THREE.ConeGeometry(0.45, 1.5, 4);
  const finMat = new THREE.MeshLambertMaterial({ color: 0x111a22 });
  const fins = [];
  for (let i = 0; i < 6; i++) {
    const f = new THREE.Mesh(finGeo, finMat); f.visible = false; scene.add(f);
    fins.push({ m: f, a: Math.random() * 6.28, r: ISLAND_R + 6 + Math.random() * 22, sp: (0.05 + Math.random() * 0.06) * (i % 2 ? 1 : -1) });
  }

  const DAY_SKY = new THREE.Color(1, 1, 1), NIGHT_SKY = new THREE.Color(0.05, 0.075, 0.15), horizon = new THREE.Color(HORIZON);
  const tmp = new THREE.Color();
  let clock = 0;

  return {
    update(camPos, dt, sv) {
      clock += dt;
      const dark = sv ? sv.dark : 0, fuel = sv ? sv.fuel : 0;
      sky.position.copy(camPos);
      clouds.position.set(camPos.x, 0, camPos.z); clouds.rotation.y += dt * 0.006;
      // sky and fog share one tint so the horizon melts into the fog
      tmp.copy(DAY_SKY).lerp(NIGHT_SKY, dark);
      sky.material.color.copy(tmp); clouds.material.color.copy(tmp);
      fog.color.copy(horizon).multiply(tmp); scene.background.copy(fog.color);
      fog.near = lerp(70, 9, dark); fog.far = lerp(190, 85, dark);
      hemi.intensity = lerp(1.7, 0.32, dark); hemi.color.setRGB(lerp(0.92, 0.45, dark), lerp(0.96, 0.55, dark), 1);
      sun.intensity = lerp(1.7, 0.06, dark);
      for (const d of sunDiscs) d.visible = dark < 0.6;
      starMat.opacity = Math.max(0, (dark - 0.4) / 0.6);
      seaMat.color.setRGB(lerp(0.165, 0.02, dark), lerp(0.47, 0.06, dark), lerp(0.65, 0.1, dark));
      wtex.offset.x = (clock * 0.004) % 1; wtex.offset.y = (clock * 0.0025) % 1;

      lamp.position.set(camPos.x, camPos.y + 0.4, camPos.z);
      lamp.intensity = dark * 1.7;
      const lampOn = fuel > 0;
      lantern.intensity = lampOn ? 2.4 * (0.35 + 0.65 * dark) * (0.94 + 0.06 * Math.sin(clock * 9)) : 0;
      glassMat.color.setHex(lampOn ? 0xfff1b0 : 0x3a3d44);
      beams.rotation.y = clock * 0.8;
      beamMat.opacity = lampOn ? 0.1 * Math.max(0, (dark - 0.3) / 0.7) : 0;

      boat.visible = !!(sv && sv.rescue);
      if (boat.visible) boat.position.y = -0.6 + Math.sin(clock * 1.6) * 0.07;
      for (const f of fins) {
        f.m.visible = dark > 0.5;
        if (!f.m.visible) continue;
        f.a += f.sp * dt;
        f.m.position.set(Math.cos(f.a) * f.r, -0.55 + Math.sin(clock * 2 + f.r) * 0.08, Math.sin(f.a) * f.r);
        f.m.rotation.y = -f.a + (f.sp > 0 ? 0 : Math.PI);
      }
    },
  };
}
