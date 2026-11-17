// A blocky humanoid with a simple skeleton, animated from the player's motion:
// legs follow where you walk, the torso and head follow where you aim, arms hold the rifle,
// the jetpack tilts the body, landings squash, hits flash, and the dead fall over.
import * as THREE from 'three';
import { rayWorld } from './core.js';
import { fillGun } from './guns.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const lerpAngle = (a, b, t) => a + wrap(b - a) * t;
const sm = (cur, target, dt, k) => cur + (target - cur) * (1 - Math.exp(-k * dt));

const boxes = {};
const box = (w, h, d) => boxes[`${w}|${h}|${d}`] || (boxes[`${w}|${h}|${d}`] = new THREE.BoxGeometry(w, h, d));
const flameGeo = new THREE.ConeGeometry(0.07, 0.5, 5);
const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa23a });
const flashMat = new THREE.MeshBasicMaterial({ color: 0xfff0a0 });
const shadowGeo = new THREE.CircleGeometry(0.55, 14);
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });

export class Avatar {
  constructor(r, p) {
    this.r = r; // renderer: scene, makeTag, puff, callbacks
    this.name = p.name;
    const M = (c) => new THREE.MeshLambertMaterial({ color: c, flatShading: true });
    this.mShirt = M(p.color); this.mPants = M(0x2c3550); this.mSkin = M(0xf0c8a0);
    const dark = M(0x2b2f3a), gear = M(0x4a5163), visor = new THREE.MeshBasicMaterial({ color: 0x6fd3ff });
    const add = (parent, geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
    const group = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };

    this.root = new THREE.Group();
    this.root.rotation.order = 'YXZ';
    this.hips = group(this.root, 0, 0.82, 0);
    add(this.hips, box(0.5, 0.18, 0.3), this.mPants, 0, 0.02, 0);
    const leg = (x) => {
      const thigh = group(this.hips, x, 0, 0);
      add(thigh, box(0.21, 0.42, 0.23), this.mPants, 0, -0.21, 0);
      const knee = group(thigh, 0, -0.42, 0);
      add(knee, box(0.19, 0.38, 0.21), this.mPants, 0, -0.19, 0);
      add(knee, box(0.21, 0.1, 0.32), dark, 0, -0.36, -0.05); // boot
      return { thigh, knee };
    };
    this.legL = leg(-0.14); this.legR = leg(0.14);

    this.torso = group(this.hips, 0, 0.06, 0);
    add(this.torso, box(0.6, 0.58, 0.32), this.mShirt, 0, 0.33, 0);
    add(this.torso, box(0.64, 0.16, 0.34), gear, 0, 0.5, 0); // chest rig
    add(this.torso, box(0.36, 0.5, 0.2), dark, 0, 0.38, 0.26); // jetpack
    add(this.torso, box(0.1, 0.12, 0.1), gear, -0.1, 0.08, 0.26);
    add(this.torso, box(0.1, 0.12, 0.1), gear, 0.1, 0.08, 0.26);
    this.flames = [-0.1, 0.1].map((x) => {
      const f = new THREE.Mesh(flameGeo, flameMat);
      f.rotation.x = Math.PI; f.position.set(x, -0.2, 0.26); f.visible = false; this.torso.add(f); return f;
    });
    this.head = group(this.torso, 0, 0.64, 0);
    add(this.head, box(0.3, 0.3, 0.3), this.mSkin, 0, 0.15, 0);
    add(this.head, box(0.34, 0.14, 0.34), dark, 0, 0.3, 0); // helmet
    add(this.head, box(0.28, 0.07, 0.04), visor, 0, 0.19, -0.16);

    this.aim = group(this.torso, 0, 0.5, 0); // shoulder height; rotates to the aim pitch
    this.gun = group(this.aim, 0.14, -0.05, -0.28); this.gun.scale.setScalar(1.1);
    add(this.aim, box(0.12, 0.12, 0.36), this.mShirt, 0.24, -0.03, -0.15).rotation.y = 0.58; // right arm to the grip
    this.armL = add(this.aim, box(0.12, 0.12, 1), this.mShirt, 0, -0.04, 0); // left arm, stretched to the foregrip (setWeapon)
    this.muzzle = add(this.aim, box(0.16, 0.16, 0.16), flashMat, 0.14, -0.05, -0.9);
    this.muzzle.visible = false;
    this.wid = -1; this.setWeapon(p.weapon == null ? 1 : p.weapon);

    this.tag = r.makeTag(p.name); this.tag.position.y = 2.25; this.root.add(this.tag);
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.root.traverse((o) => { if (o.isMesh && o.material !== flameMat && o.material !== flashMat && !o.material.isMeshBasicMaterial) o.castShadow = true; });
    r.scene.add(this.root); r.scene.add(this.shadow);

    this.legYaw = p.yaw || 0; this.phase = 0; this.t = Math.random() * 10;
    this.cur = { tL: 0, tR: 0, kL: 0, kR: 0, air: 0, lean: 0 };
    this.wasGr = true; this.airVy = 0; this.land = 0; this.step = 0;
    this.flash = 0; this.recoil = 0; this.muz = 0; this.deadT = 0; this.puffT = 0;
  }

  setWeapon(id) {
    this.wid = id;
    const spec = fillGun(this.gun, id);
    this.muzzle.position.set(0.14, -0.05, -0.28 + spec.muz * 1.1 - 0.05);
    // left hand target in aim space; the arm runs from the left shoulder to it
    const sx = -0.338, sz = 0, tx = 0.14, ty = -0.095, tz = -0.28 + spec.lz * 1.1;
    const dx = tx - sx, dz = tz - sz, len = Math.hypot(dx, dz);
    this.armL.position.set((sx + tx) / 2, -0.06, (sz + tz) / 2);
    this.armL.rotation.y = Math.atan2(dx, dz);
    this.armL.scale.z = len;
  }

  hit() { this.flash = 0.14; }
  shoot() { this.recoil = 1; this.muz = 0.05; }

  rename(name) {
    this.root.remove(this.tag);
    this.tag = this.r.makeTag(name); this.tag.position.y = 2.25; this.root.add(this.tag);
    this.name = name;
  }

  dispose() { this.r.scene.remove(this.root); this.r.scene.remove(this.shadow); }

  update(p, dt, isMe, hideBody) {
    const r = this.r;
    this.t += dt;
    const vx = p.vx || 0, vy = p.vy || 0, vz = p.vz || 0;
    this.root.position.set(p.x, p.y, p.z);
    this.tag.visible = !isMe && p.alive;

    // soft blob shadow on whatever is below (ground, crate, platform)
    const down = rayWorld(p.x, p.y + 0.5, p.z, 0, -1, 0, 40);
    const surface = p.y + 0.5 - down, h = Math.max(0, p.y - surface);
    this.shadow.position.set(p.x, surface + 0.04, p.z);
    this.shadow.scale.setScalar(1 - Math.min(0.5, h * 0.05));
    shadowMat.opacity = 0.3;
    this.shadow.visible = (p.alive || this.deadT < 2.2) && !r.realShadows; // the blob is only for when there are no real shadows

    // hit flash
    this.flash = Math.max(0, this.flash - dt);
    const f = this.flash / 0.14;
    for (const m of [this.mShirt, this.mPants, this.mSkin]) m.emissive.setRGB(f * 0.9, f * 0.05, f * 0.05);

    if (!p.alive) {
      // fall over backwards, lie there, then disappear a moment before respawn
      this.deadT += dt;
      const k = Math.min(1, this.deadT / 0.45), e = 1 - (1 - k) * (1 - k);
      this.root.rotation.set(e * 1.5, this.legYaw, 0);
      this.hips.rotation.x = 0; this.torso.rotation.set(0, 0, 0);
      this.legL.thigh.rotation.x = 0.2 * e; this.legR.thigh.rotation.x = -0.15 * e;
      this.legL.knee.rotation.x = -0.3 * e; this.legR.knee.rotation.x = -0.1 * e;
      this.aim.rotation.x = 0.4 * e; this.aim.position.z = 0;
      for (const fl of this.flames) fl.visible = false;
      this.muzzle.visible = false;
      this.root.visible = this.deadT < 2.6 && !hideBody;
      return;
    }
    this.deadT = 0;
    this.root.visible = !hideBody;

    // --- which way do the legs face? Where we walk, unless that is nearly backwards from the aim.
    const sp = Math.hypot(vx, vz);
    let target = this.legYaw, dir = 1;
    if (sp > 0.6) {
      let mv = Math.atan2(-vx, -vz);
      if (Math.abs(wrap(mv - p.yaw)) > 1.9) { mv += Math.PI; dir = -1; } // backpedal instead of spinning round
      target = mv;
    } else if (Math.abs(wrap(this.legYaw - p.yaw)) > 1.0) target = p.yaw; // feet catch up when you turn far
    this.legYaw = lerpAngle(this.legYaw, target, 1 - Math.exp(-12 * dt));
    this.root.rotation.set(0, this.legYaw, 0);
    this.torso.rotation.y = clamp(wrap(p.yaw - this.legYaw), -1.3, 1.3);
    const vf = vx * -Math.sin(this.legYaw) + vz * -Math.cos(this.legYaw); // speed along the legs' facing

    // --- landing
    if (!p.gr) this.airVy = vy;
    if (p.gr && !this.wasGr && this.airVy < -6) {
      this.land = clamp(-this.airVy / 20, 0.25, 1);
      if (this.land > 0.5) for (let i = 0; i < 5; i++) { const a = (i / 5) * 6.283; r.puff(p.x, p.y + 0.1, p.z, Math.cos(a) * 1.6, 0.6, Math.sin(a) * 1.6, 0.18, 0.4, true); }
      if (isMe && r.onLand) r.onLand(this.land);
    }
    this.wasGr = !!p.gr;
    this.land *= Math.exp(-8 * dt);

    // --- leg pose targets
    let tL = 0, tR = 0, kL = 0, kR = 0, air = 0, lean = 0, bob = 0;
    if (p.gr) {
      const amp = clamp(sp / 7, 0, 1);
      this.phase += dir * sp * dt * 1.9;
      tL = Math.sin(this.phase) * 0.85 * amp; tR = -tL;
      kL = Math.max(0, Math.sin(this.phase + 1.3)) * 0.95 * amp;
      kR = Math.max(0, Math.sin(this.phase + 1.3 + Math.PI)) * 0.95 * amp;
      bob = Math.abs(Math.cos(this.phase)) * 0.05 * amp + Math.sin(this.t * 2.2) * 0.008 * (1 - amp); // bounce / breathing
      lean = -clamp(vf * 0.018, -0.08, 0.14);
      const s = Math.floor(this.phase / Math.PI);
      if (s !== this.step) { this.step = s; if (isMe && sp > 2 && r.onStep) r.onStep(); }
    } else if (p.thr) {
      tL = -0.2 + Math.sin(this.t * 17) * 0.06; tR = -0.35 + Math.sin(this.t * 17 + 1) * 0.06; kL = 0.6; kR = 0.75; // legs trail
      air = -(0.12 + clamp(vf * 0.03, 0, 0.4)); // body tilts into the flight
    } else if (vy > 1) { tL = 0.75; tR = 0.35; kL = 1.1; kR = 0.7; } // tucked jump
    else { tL = 0.25; tR = -0.1; kL = 0.5; kR = 0.9; air = -clamp(vf * 0.015, 0, 0.2); } // falling, legs reaching
    tL += this.land * 0.8; tR += this.land * 0.8; kL += this.land * 1.2; kR += this.land * 1.2;

    const c = this.cur;
    c.tL = sm(c.tL, tL, dt, 16); c.tR = sm(c.tR, tR, dt, 16); c.kL = sm(c.kL, kL, dt, 16); c.kR = sm(c.kR, kR, dt, 16);
    c.air = sm(c.air, air, dt, 8); c.lean = sm(c.lean, lean, dt, 8);
    this.legL.thigh.rotation.x = c.tL; this.legR.thigh.rotation.x = c.tR;
    this.legL.knee.rotation.x = -c.kL; this.legR.knee.rotation.x = -c.kR;
    this.hips.rotation.x = c.air;
    this.hips.position.y = 0.82 + bob - this.land * 0.2;
    this.torso.rotation.x = c.lean;

    // --- the rifle always points exactly where we aim, whatever the body is doing
    if (p.weapon != null && p.weapon !== this.wid) this.setWeapon(p.weapon);
    this.recoil *= Math.exp(-16 * dt);
    this.aim.rotation.x = p.pitch - c.lean - c.air + this.recoil * 0.07;
    this.aim.position.z = this.recoil * 0.1;
    this.head.rotation.x = p.pitch * 0.6 - c.lean - c.air;
    this.muz -= dt;
    this.muzzle.visible = this.muz > 0;
    if (this.muzzle.visible) this.muzzle.scale.setScalar(0.7 + Math.random() * 0.8);

    // --- jetpack: flames and a trail of smoke
    for (const fl of this.flames) { fl.visible = !!p.thr; if (p.thr) fl.scale.y = 0.7 + Math.random() * 0.7; }
    if (p.thr) {
      this.puffT -= dt;
      while (this.puffT <= 0) {
        this.puffT += 0.04;
        const bx = Math.sin(p.yaw) * 0.28, bz = Math.cos(p.yaw) * 0.28;
        r.puff(p.x + bx, p.y + 0.75, p.z + bz, vx * 0.3 + (Math.random() - 0.5) * 0.8, -3.2 - Math.random() * 1.5, vz * 0.3 + (Math.random() - 0.5) * 0.8, 0.2, 0.5);
      }
    }
  }
}
