// Low-poly three.js renderer. No shadows, flat shading, few draw calls: runs on weak phones.
import * as THREE from 'three';
import { MAP, HALF, EYE, aimDir, rayWorld } from './core.js';

const KIND_COLOR = { wall: 0x3b4252, deck: 0x6b7a8f, pillar: 0x56637a, cover: 0x8a6d4b };

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.quality = 1; // 0 low, 1 medium, 2 high
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9ec5e8);
    this.scene.fog = new THREE.Fog(0x9ec5e8, 40, 120);
    this.cam = new THREE.PerspectiveCamera(70, 1, 0.1, 200);
    this.thirdPerson = true;
    this.meshes = new Map(); // player id -> { g, flame, tag, ... }
    this.tracers = [];
    this.shake = 0;
    this.kick = 0;
    this.camPos = new THREE.Vector3();
    this.buildWorld();
    this.resize();
    addEventListener('resize', () => this.resize());
  }

  setQuality(q) { this.quality = q; this.resize(); }

  resize() {
    const dpr = [0.55, 0.8, Math.min(devicePixelRatio || 1, 2)][this.quality];
    this.gl.setPixelRatio(dpr);
    this.gl.setSize(innerWidth, innerHeight, false);
    this.cam.aspect = innerWidth / innerHeight;
    this.cam.updateProjectionMatrix();
  }

  buildWorld() {
    const s = this.scene;
    s.add(new THREE.HemisphereLight(0xdfeeff, 0x6a6258, 1.55));
    const sun = new THREE.DirectionalLight(0xfff2d6, 1.6);
    sun.position.set(30, 60, 20);
    s.add(sun);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(HALF * 2, HALF * 2),
      new THREE.MeshLambertMaterial({ color: 0x7a8f5e, flatShading: true }),
    );
    ground.rotation.x = -Math.PI / 2;
    s.add(ground);
    const grid = new THREE.GridHelper(HALF * 2, 30, 0x6a7f50, 0x6a7f50);
    grid.position.y = 0.02; grid.material.opacity = 0.35; grid.material.transparent = true;
    s.add(grid);

    // One merged-ish approach: instance per box kind keeps draw calls low.
    const mats = {};
    for (const k of Object.keys(KIND_COLOR)) mats[k] = new THREE.MeshLambertMaterial({ color: KIND_COLOR[k], flatShading: true });
    const geo = new THREE.BoxGeometry(1, 1, 1);
    for (const b of MAP.boxes) {
      const m = new THREE.Mesh(geo, mats[b.kind]);
      m.scale.set(b.w, b.h, b.d);
      m.position.set(b.x, b.y + b.h / 2, b.z);
      s.add(m);
      if (b.kind === 'deck') { // light trim so edges read clearly
        const t = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xf2c14e }));
        t.scale.set(b.w + 0.02, 0.12, b.d + 0.02);
        t.position.set(b.x, b.maxy - 0.06, b.z);
        s.add(t);
      }
    }
    // Distant low-poly mountains for atmosphere.
    const mg = new THREE.ConeGeometry(18, 22, 5);
    const mm = new THREE.MeshLambertMaterial({ color: 0x6f8398, flatShading: true });
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2, r = 85 + (i % 3) * 8;
      const m = new THREE.Mesh(mg, mm);
      m.position.set(Math.cos(a) * r, 8, Math.sin(a) * r);
      m.scale.set(1 + (i % 4) * 0.3, 0.8 + (i % 3) * 0.4, 1);
      s.add(m);
    }
    this.tracerGeo = new THREE.BoxGeometry(0.04, 0.04, 1);
    this.tracerMat = new THREE.MeshBasicMaterial({ color: 0xffe9a3 });
  }

  makeTag(name) {
    const c = document.createElement('canvas');
    c.width = 160; c.height = 36;
    const g = c.getContext('2d');
    g.font = 'bold 22px sans-serif'; g.textAlign = 'center';
    g.lineWidth = 5; g.strokeStyle = 'rgba(0,0,0,.7)'; g.strokeText(name, 80, 26);
    g.fillStyle = '#fff'; g.fillText(name, 80, 26);
    const t = new THREE.CanvasTexture(c);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
    sp.scale.set(2.2, 0.5, 1); sp.position.y = 2.35; sp.renderOrder = 10;
    return sp;
  }

  makePlayer(p) {
    const g = new THREE.Group();
    const body = new THREE.MeshLambertMaterial({ color: p.color, flatShading: true });
    const dark = new THREE.MeshLambertMaterial({ color: 0x2b2f3a, flatShading: true });
    const skin = new THREE.MeshLambertMaterial({ color: 0xf0c8a0, flatShading: true });
    const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); g.add(m); return m; };
    add(new THREE.BoxGeometry(0.6, 0.7, 0.4), dark, 0, 0.35, 0); // legs
    add(new THREE.BoxGeometry(0.7, 0.65, 0.42), body, 0, 1.0, 0); // torso
    add(new THREE.BoxGeometry(0.38, 0.38, 0.38), skin, 0, 1.55, 0); // head
    add(new THREE.BoxGeometry(0.42, 0.14, 0.42), dark, 0, 1.76, 0); // helmet
    add(new THREE.BoxGeometry(0.4, 0.6, 0.22), dark, 0, 1.0, 0.32); // jetpack
    const arm = new THREE.Group(); arm.position.set(0, 1.15, 0); g.add(arm);
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.7), dark);
    gun.position.set(0.28, 0, -0.45); arm.add(gun);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.8, 5), new THREE.MeshBasicMaterial({ color: 0xffa23a }));
    flame.rotation.x = Math.PI; flame.position.set(0, 0.35, 0.32); flame.visible = false; g.add(flame);
    const tag = this.makeTag(p.name); g.add(tag);
    this.scene.add(g);
    const rec = { g, arm, flame, tag, name: p.name };
    this.meshes.set(p.id, rec);
    return rec;
  }

  tracer(x0, y0, z0, x1, y1, z1) {
    const len = Math.hypot(x1 - x0, y1 - y0, z1 - z0);
    if (len < 0.5) return;
    const m = new THREE.Mesh(this.tracerGeo, this.tracerMat);
    m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    m.scale.z = len;
    m.lookAt(x1, y1, z1);
    this.scene.add(m);
    this.tracers.push({ m, life: 0.08 });
  }

  addShake(a) { this.shake = Math.min(0.4, this.shake + a); }

  clearPlayers() {
    for (const r of this.meshes.values()) this.scene.remove(r.g);
    this.meshes.clear();
  }

  // view: { players, me }. look: { yaw, pitch } of the local player.
  draw(dt, view, look) {
    const seen = new Set();
    for (const p of view.players) {
      seen.add(p.id);
      let r = this.meshes.get(p.id) || this.makePlayer(p);
      if (r.name !== p.name) { r.g.remove(r.tag); r.tag = this.makeTag(p.name); r.g.add(r.tag); r.name = p.name; }
      const isMe = view.me && p.id === view.me.id;
      r.g.visible = p.alive && !(isMe && !this.thirdPerson);
      r.g.position.set(p.x, p.y, p.z);
      r.g.rotation.y = p.yaw;
      r.arm.rotation.x = p.pitch;
      r.flame.visible = p.thr;
      if (p.thr) r.flame.scale.y = 0.8 + Math.random() * 0.6;
      r.tag.visible = !isMe;
    }
    for (const [id, r] of this.meshes) if (!seen.has(id)) { this.scene.remove(r.g); this.meshes.delete(id); }

    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      if ((t.life -= dt) <= 0) { this.scene.remove(t.m); this.tracers.splice(i, 1); }
    }

    // Camera
    const me = view.me;
    if (me) {
      const eyeY = me.y + EYE;
      const yaw = look.yaw, pitch = look.pitch;
      if (this.thirdPerson) {
        const fwd = aimDir(yaw, pitch);
        const right = [Math.cos(yaw), 0, -Math.sin(yaw)];
        let back = 3.6;
        const bx = -fwd[0], by = -fwd[1] * 0.9 + 0.35, bz = -fwd[2];
        const bl = Math.hypot(bx, by, bz);
        const hit = rayWorld(me.x, eyeY, me.z, bx / bl, by / bl, bz / bl, back + 0.4);
        back = Math.max(0.6, Math.min(back, hit - 0.4));
        this.cam.position.set(me.x + (bx / bl) * back + right[0] * 0.75, Math.max(0.3, eyeY + (by / bl) * back), me.z + (bz / bl) * back + right[2] * 0.75);
      } else {
        this.cam.position.set(me.x, eyeY, me.z);
      }
      if (!me.alive) { this.cam.position.y += 1.5; }
      this.cam.rotation.order = 'YXZ';
      this.cam.rotation.set(pitch + this.kick, yaw, 0);
      this.kick *= Math.pow(0.001, dt);
      if (this.shake > 0.001) {
        this.cam.position.x += (Math.random() - 0.5) * this.shake;
        this.cam.position.y += (Math.random() - 0.5) * this.shake;
        this.shake *= Math.pow(0.0005, dt);
      }
    }
    this.gl.render(this.scene, this.cam);
  }

  // Project a world point to screen pixels (for hit markers etc). Returns null if behind the camera.
  project(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.cam);
    if (v.z > 1) return null;
    return [(v.x * 0.5 + 0.5) * innerWidth, (-v.y * 0.5 + 0.5) * innerHeight];
  }
}
