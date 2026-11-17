// Monster and supply-crate meshes for survival mode. Built from boxes (like the avatars), animated by code.
import * as THREE from 'three';
import { DROWNED, HISSER, STALKER, MIMIC, FUEL_CAN } from './survival.js';

const geoCache = new Map();
const geo = (w, h, d) => { const k = `${w}|${h}|${d}`; if (!geoCache.has(k)) geoCache.set(k, new THREE.BoxGeometry(w, h, d)); return geoCache.get(k); };

// Each monster gets its own materials, so a hit flash or a fuse glow affects only that one.
function builder() {
  const mats = [];
  const m = (c) => { const x = new THREE.MeshLambertMaterial({ color: c, flatShading: true }); mats.push(x); return x; };
  const b = (parent, w, h, d, mat, x = 0, y = 0, z = 0) => { const k = new THREE.Mesh(geo(w, h, d), mat); k.position.set(x, y, z); parent.add(k); return k; };
  const pivot = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
  return { mats, m, b, pivot };
}

function drowned() {
  const { mats, m, b, pivot } = builder(), root = new THREE.Group();
  const skin = m(0x6f938a), dark = m(0x2a4a42), weed = m(0x1f3d2a), eye = m(0x0b0b0b), rag = m(0x3b4a52);
  const legL = pivot(root, -0.13, 0.85, 0), legR = pivot(root, 0.13, 0.85, 0);
  for (const l of [legL, legR]) { b(l, 0.2, 0.85, 0.2, dark, 0, -0.42, 0); }
  const torso = pivot(root, 0, 0.85, 0); torso.rotation.x = 0.55;
  b(torso, 0.5, 0.62, 0.3, skin, 0, 0.31, 0); b(torso, 0.52, 0.3, 0.32, rag, 0, 0.12, 0);
  const head = pivot(torso, 0, 0.7, 0.02); head.rotation.x = -0.35;
  b(head, 0.3, 0.3, 0.3, skin, 0, 0.14, 0); b(head, 0.06, 0.06, 0.02, eye, -0.08, 0.17, -0.155); b(head, 0.06, 0.06, 0.02, eye, 0.08, 0.17, -0.155);
  b(head, 0.34, 0.1, 0.34, weed, 0, 0.32, 0.02); b(head, 0.08, 0.3, 0.06, weed, -0.14, 0.08, 0.17); b(head, 0.08, 0.25, 0.06, weed, 0.14, 0.1, 0.17);
  const armL = pivot(torso, -0.32, 0.55, 0), armR = pivot(torso, 0.32, 0.55, 0);
  for (const a of [armL, armR]) { b(a, 0.12, 0.8, 0.12, skin, 0, -0.4, 0); a.rotation.x = -1.2; }
  return { root, mats, legL, legR, armL, armR, torso };
}

function hisser() {
  const { mats, m, b, pivot } = builder(), root = new THREE.Group();
  const body = m(0x2f6b3a), spot = m(0x4f9a54), dark = m(0x14301a), eye = m(0x080808), mouth = m(0x1a0d0d);
  const core = pivot(root, 0, 0.62, 0);
  b(core, 0.8, 0.7, 1.05, body, 0, 0, 0); b(core, 0.25, 0.1, 0.3, spot, -0.2, 0.38, 0.1); b(core, 0.3, 0.1, 0.25, spot, 0.2, 0.38, -0.15);
  b(core, 0.55, 0.5, 0.2, dark, 0, 0.0, -0.58); // face plate
  b(core, 0.12, 0.12, 0.03, eye, -0.15, 0.1, -0.69); b(core, 0.12, 0.12, 0.03, eye, 0.15, 0.1, -0.69); b(core, 0.3, 0.1, 0.03, mouth, 0, -0.12, -0.69);
  const legs = [];
  for (const [x, z] of [[-0.28, -0.35], [0.28, -0.35], [-0.28, 0.35], [0.28, 0.35]]) { const l = pivot(root, x, 0.35, z); b(l, 0.18, 0.4, 0.18, dark, 0, -0.17, 0); legs.push(l); }
  return { root, mats, legs, core, body };
}

function stalker() {
  const { mats, m, b, pivot } = builder(), root = new THREE.Group();
  const black = m(0x0b0b10), pale = m(0xe6e6ea), grey = m(0x1c1c24);
  const legL = pivot(root, -0.1, 1.2, 0), legR = pivot(root, 0.1, 1.2, 0);
  for (const l of [legL, legR]) b(l, 0.1, 1.2, 0.1, black, 0, -0.6, 0);
  const torso = pivot(root, 0, 1.2, 0);
  b(torso, 0.32, 0.8, 0.18, grey, 0, 0.4, 0);
  b(torso, 0.08, 0.22, 0.08, black, 0, 0.9, 0); // neck
  b(torso, 0.2, 0.26, 0.2, pale, 0, 1.12, 0);   // blank face
  const armL = pivot(torso, -0.22, 0.75, 0), armR = pivot(torso, 0.22, 0.75, 0);
  for (const a of [armL, armR]) b(a, 0.07, 1.35, 0.07, black, 0, -0.67, 0);
  return { root, mats, legL, legR, armL, armR, torso };
}

function mimic() {
  const { mats, m, b, pivot } = builder(), root = new THREE.Group();
  const wood = m(0x9b6a3a), dark = m(0x3a2412), tooth = m(0xf4f1e4), tongue = m(0xb22a3a);
  const legs = [];
  for (const [x, z] of [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]]) { const l = pivot(root, x, 0.28, z); b(l, 0.14, 0.3, 0.14, dark, 0, -0.14, 0); legs.push(l); }
  const lower = pivot(root, 0, 0.28, 0); b(lower, 0.9, 0.35, 0.9, wood, 0, 0.17, 0);
  const lid = pivot(root, 0, 0.62, 0.45); b(lid, 0.92, 0.3, 0.92, wood, 0, 0.1, -0.45); lid.rotation.x = 0.1;
  for (let i = 0; i < 4; i++) { b(lower, 0.1, 0.12, 0.05, tooth, -0.33 + i * 0.22, 0.36, -0.46); b(lid, 0.1, 0.12, 0.05, tooth, -0.33 + i * 0.22, -0.02, -0.9); }
  b(lower, 0.4, 0.06, 0.4, tongue, 0, 0.3, -0.2);
  return { root, mats, legs, lid };
}

const FACTORY = [drowned, hisser, stalker, mimic];

function crateMesh(kind) {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ color: 0x9b6a3a, flatShading: true }), band = new THREE.MeshLambertMaterial({ color: 0x5a3a1f, flatShading: true });
  const mark = new THREE.MeshLambertMaterial({ color: kind === FUEL_CAN ? 0xd0382a : 0xf4f4f0, flatShading: true });
  const c = new THREE.Mesh(geo(0.9, 0.9, 0.9), wood); c.position.y = 0.45; g.add(c);
  for (const sx of [-0.3, 0.3]) { const p = new THREE.Mesh(geo(0.1, 0.94, 0.94), band); p.position.set(sx, 0.45, 0); g.add(p); }
  const top = new THREE.Mesh(geo(0.5, 0.04, 0.5), mark); top.position.y = 0.93; g.add(top);
  if (kind !== FUEL_CAN) { const v = new THREE.Mesh(geo(0.12, 0.05, 0.4), new THREE.MeshLambertMaterial({ color: 0xd0382a })); v.position.y = 0.96; g.add(v); }
  // parachute, only shown while falling
  const chute = new THREE.Group();
  const cloth = new THREE.Mesh(geo(2.4, 0.08, 2.4), new THREE.MeshLambertMaterial({ color: 0xf08a24, flatShading: true })); cloth.position.y = 3.3; chute.add(cloth);
  const cloth2 = new THREE.Mesh(geo(1.2, 0.1, 2.5), new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true })); cloth2.position.y = 3.31; chute.add(cloth2);
  g.add(chute); g.userData.chute = chute;
  // signal beam so the crate can be spotted from far away (the same for real crates and mimics)
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.22, 46, 0.22), new THREE.MeshBasicMaterial({ color: 0xffa23a, transparent: true, opacity: 0.5, fog: false, depthWrite: false }));
  beam.position.y = 23; g.add(beam); g.userData.beam = beam;
  return g;
}

export class MonsterViews {
  constructor(renderer) {
    this.r = renderer; this.scene = renderer.scene;
    this.mons = new Map(); this.crates = new Map();
    this.flashT = new Map(); this.t = 0;
  }

  flash(id) { this.flashT.set(id, 0.12); }

  clear() {
    for (const v of this.mons.values()) this.scene.remove(v.root);
    for (const v of this.crates.values()) this.scene.remove(v.g);
    this.mons.clear(); this.crates.clear();
  }

  update(sv, dt) {
    this.t += dt;
    if (!sv) { if (this.mons.size || this.crates.size) this.clear(); return; }
    const k = 1 - Math.exp(-16 * dt);

    const seen = new Set();
    for (const m of sv.mons) {
      seen.add(m.id);
      let v = this.mons.get(m.id);
      if (!v) {
        const o = FACTORY[m.kind]();
        v = { ...o, kind: m.kind, root: o.root, px: m.x, pz: m.z, py: m.y, yaw: m.yaw, phase: Math.random() * 6, speed: 0, fx: 0 };
        v.root.position.set(m.x, m.y, m.z); this.scene.add(v.root);
        this.mons.set(m.id, v);
      }
      const ox = v.px, oz = v.pz;
      v.px += (m.x - v.px) * k; v.py += (m.y - v.py) * k; v.pz += (m.z - v.pz) * k;
      let dy = m.yaw - v.yaw; while (dy > Math.PI) dy -= 2 * Math.PI; while (dy < -Math.PI) dy += 2 * Math.PI;
      v.yaw += dy * Math.min(1, dt * 14);
      v.speed += (Math.hypot(v.px - ox, v.pz - oz) / Math.max(dt, 1e-3) - v.speed) * Math.min(1, dt * 8);
      v.phase += v.speed * dt * 2.4;
      v.root.position.set(v.px, v.py, v.pz); v.root.rotation.y = v.yaw;
      this.animate(v, m, dt);
      // flashes: red-white on a hit, orange flicker while burning
      let f = this.flashT.get(m.id) || 0;
      if (f > 0) { f -= dt; this.flashT.set(m.id, f); }
      const e = f > 0 ? 0.7 : m.burn ? 0.18 + 0.12 * Math.sin(this.t * 30) : (m.kind === HISSER ? m.aux * (0.5 + 0.5 * Math.sin(this.t * 40)) : 0);
      const fuse = m.kind === HISSER && f <= 0 && !m.burn; // a hisser about to blow glows angry red, not white
      for (const mt of v.mats) mt.emissive.setRGB(fuse ? e * 0.6 : e, fuse ? e * 0.12 : (m.burn && f <= 0 ? e * 0.45 : e * 0.7), fuse ? 0 : (m.burn && f <= 0 ? 0 : e * 0.7));
    }
    for (const [id, v] of this.mons) {
      if (seen.has(id)) continue;
      // gone: a little puff where it stood
      for (let i = 0; i < 4; i++) this.r.puff(v.px + (Math.random() - 0.5) * 0.5, v.py + 0.5 + Math.random() * 0.8, v.pz + (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 1.5, 1.2, (Math.random() - 0.5) * 1.5, 0.5, 0.6, true);
      this.scene.remove(v.root); this.mons.delete(id); this.flashT.delete(id);
    }

    const seenC = new Set();
    for (const c of sv.crates) {
      seenC.add(c.id);
      let v = this.crates.get(c.id);
      if (!v) { v = { g: crateMesh(c.kind) }; this.scene.add(v.g); this.crates.set(c.id, v); }
      v.g.position.set(c.x, c.y, c.z);
      v.g.userData.chute.visible = c.y > 0.05;
      if (c.y > 0.05) v.g.userData.chute.rotation.z = Math.sin(this.t * 2 + c.id) * 0.06;
      v.g.userData.beam.material.opacity = 0.3 + 0.25 * Math.sin(this.t * 3 + c.id) + (sv.dark * 0.2);
    }
    for (const [id, v] of this.crates) if (!seenC.has(id)) { this.scene.remove(v.g); this.crates.delete(id); }
  }

  animate(v, m, dt) {
    const sw = Math.sin(v.phase) * Math.min(1, v.speed / 3);
    if (v.kind === DROWNED) {
      v.legL.rotation.x = sw * 0.7; v.legR.rotation.x = -sw * 0.7;
      v.armL.rotation.x = -1.2 + sw * 0.25 + Math.sin(this.t * 3 + v.phase) * 0.1; v.armR.rotation.x = -1.2 - sw * 0.25 + Math.cos(this.t * 3) * 0.1;
      v.torso.rotation.x = 0.55 + Math.sin(v.phase * 2) * 0.04;
    } else if (v.kind === HISSER) {
      v.legs.forEach((l, i) => { l.rotation.x = Math.sin(v.phase * 1.4 + (i % 2 ? Math.PI : 0)) * 0.6 * Math.min(1, v.speed / 3); });
      const s = 1 + m.aux * 0.55; v.core.scale.set(s, s, s);
      v.core.position.y = 0.62 + Math.abs(Math.sin(v.phase * 1.4)) * 0.05;
      v.core.position.x = m.aux > 0 ? Math.sin(this.t * 60) * 0.03 * m.aux : 0; // shaking before it blows
    } else if (v.kind === STALKER) {
      const frozen = m.aux > 0.5;
      if (frozen) { // caught in your sight: stiff, arms spread like a scarecrow
        v.legL.rotation.x = 0; v.legR.rotation.x = 0; v.torso.rotation.x = 0;
        v.armL.rotation.z = -0.9; v.armR.rotation.z = 0.9; v.armL.rotation.x = 0; v.armR.rotation.x = 0;
      } else {
        v.legL.rotation.x = sw * 1.1; v.legR.rotation.x = -sw * 1.1; v.torso.rotation.x = 0.35;
        v.armL.rotation.z = -0.12; v.armR.rotation.z = 0.12; v.armL.rotation.x = 0.7 + sw * 0.4; v.armR.rotation.x = 0.7 - sw * 0.4;
      }
    } else if (v.kind === MIMIC) {
      v.lid.rotation.x = 0.1 - Math.abs(Math.sin(this.t * 7 + v.phase)) * 0.55;
      v.legs.forEach((l, i) => { l.rotation.x = Math.sin(v.phase * 1.8 + (i % 2 ? Math.PI : 0)) * 0.7; });
    }
  }
}
