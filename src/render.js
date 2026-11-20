// Low-poly three.js renderer. No shadows, flat shading, few draw calls: runs on weak phones.
import * as THREE from 'three';
import { MAP, HALF, EYE, cameraPos } from './core.js';
import { Avatar } from './avatar.js';
import { buildWorld, HORIZON, FOG_NEAR, FOG_FAR, CAM_FAR } from './world.js';
import { fillGun } from './guns.js';
import { buildIslandWorld } from './islandworld.js';
import { MonsterViews } from './monsters.js';


export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    // MSAA only on desktop-class devices (phones are too slow for it).
    this.desktop = matchMedia('(hover:hover) and (pointer:fine)').matches;
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: this.desktop, powerPreference: 'high-performance' });
    this.gl.toneMapping = THREE.NeutralToneMapping; // keeps colours, rolls off the bright sun-lit surfaces
    this.gl.toneMappingExposure = 1.0;
    this.gl.shadowMap.type = THREE.PCFSoftShadowMap;
    this.gl.autoClear = false; // we clear by hand so the first-person gun can be drawn in a second pass
    this.quality = 1; // 0 low, 1 medium, 2 high
    this.scene = new THREE.Scene();
        // Near/far kept tight: phones have low-precision depth buffers, and a wide range makes
    // surfaces that sit close together flicker (z-fighting).
    this.cam = new THREE.PerspectiveCamera(70, 1, 0.3, CAM_FAR);
    this.thirdPerson = true;
    this.fov = 70;
    this.meshes = new Map(); // player id -> Avatar
    this.onLand = null; this.onStep = null; // sound hooks for the local player
    this.debugCam = null; // [x,y,z, tx,ty,tz] to look at something from outside (testing)
    this.tracers = [];
    this.shake = 0;
    this.kick = 0;
    this.camPos = new THREE.Vector3();
    this.scaleMul = 1; this.fpsAvg = 60;
    this.buildWorld();
    this.initPuffs();
    this.mons = new MonsterViews(this);
    this.initViewmodel();
    this.resize();
    addEventListener('resize', () => this.resize());
  }

  // 0 Low, 1 Medium, 2 High (sun shadows, grass), 3 Ultra (bigger shadows, dense grass, full resolution)
  setQuality(q) {
    this.quality = q;
    const shadows = q >= 2;
    if (this.gl.shadowMap.enabled !== shadows) {
      this.gl.shadowMap.enabled = shadows;
      for (const sc of [this.scene, this.vmScene]) sc && sc.traverse((o) => { const m = o.material; if (m) (Array.isArray(m) ? m : [m]).forEach((x) => { x.needsUpdate = true; }); });
    }
    this.realShadows = shadows;
    this.gl.shadowMap.autoUpdate = false; this.gl.shadowMap.needsUpdate = true; // we decide when the shadow map redraws (see render)
    for (const w of Object.values(this.worlds || {})) w.res && w.res.setQuality && w.res.setQuality(q);
    this.resize();
  }

  // Keeps the game smooth on its own: if the frame rate stays low, render at a lower resolution (and as a last
  // resort drop a graphics tier); when there is plenty of headroom, creep back up. `dt` is the real frame time.
  adapt(dt) {
    if (!(dt > 0)) return;
    this.fpsAvg = (this.fpsAvg || 60) + (1 / dt - (this.fpsAvg || 60)) * 0.05;
    if (this.fpsAvg < 38) { this.slowT = (this.slowT || 0) + dt; this.fastT = 0; }
    else if (this.fpsAvg > 56) { this.fastT = (this.fastT || 0) + dt; this.slowT = 0; }
    else { this.slowT = 0; this.fastT = 0; }
    if (this.slowT > 2.5) {
      this.slowT = 0;
      if (this.scaleMul > 0.55) { this.scaleMul = Math.max(0.5, this.scaleMul - 0.1); this.resize(); }
      else if (this.quality > 0 && performance.now() - (this.lastDrop || 0) > 12000) { this.lastDrop = performance.now(); this.scaleMul = 0.8; this.onAutoQuality && this.onAutoQuality(this.quality - 1); }
    } else if (this.fastT > 8 && this.scaleMul < 1) { this.fastT = 0; this.scaleMul = Math.min(1, this.scaleMul + 0.05); this.resize(); }
  }

  resize() {
    const dpr = [0.55, 0.8, Math.min(devicePixelRatio || 1, 2), Math.min(devicePixelRatio || 1, 2.5)][this.quality] * this.scaleMul;
    this.gl.setPixelRatio(dpr);
    this.gl.setSize(innerWidth, innerHeight, false);
    this.cam.aspect = innerWidth / innerHeight;
    this.cam.updateProjectionMatrix();
    if (this.vmCam) { this.vmCam.aspect = innerWidth / innerHeight; this.vmCam.updateProjectionMatrix(); }
  }

  // Each map's scenery is built once and kept; switching maps just shows one set and hides the other.
  capture(build) {
    const before = new Set(this.scene.children);
    const res = build();
    return { res, objs: this.scene.children.filter((c) => !before.has(c)), fog: this.scene.fog, bg: this.scene.background };
  }

  setMapKind(kind) {
    if (kind === this.kind) return;
    if (!this.worlds[kind]) { this.worlds[kind] = this.capture(() => buildIslandWorld(this.scene)); this.worlds[kind].res.setQuality(this.quality); this.setQuality(this.quality); }
    for (const [k, w] of Object.entries(this.worlds)) for (const o of w.objs) o.visible = k === kind;
    const w = this.worlds[kind];
    this.scene.fog = w.fog; this.scene.background = w.bg; this.world = w.res; this.kind = kind;
    this.mons.clear();
  }

  // a fireball where a hisser blew up
  boom(x, y, z) {
    for (let i = 0; i < 16; i++) this.puff(x + (Math.random() - 0.5) * 2, y + 0.4 + Math.random() * 1.6, z + (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 7, 2 + Math.random() * 4, (Math.random() - 0.5) * 7, 0.4 + Math.random() * 0.5, 0.45 + Math.random() * 0.35);
    const d = Math.hypot(x - this.cam.position.x, z - this.cam.position.z);
    this.addShake(Math.max(0, 0.32 - d * 0.012));
  }

  buildWorld() {
    this.worlds = { arena: this.capture(() => { this.world = buildWorld(this.scene); return this.world; }) };
    this.kind = 'arena';
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
    const av = new Avatar(this, p);
    this.meshes.set(p.id, av);
    return av;
  }

  // Tiny pooled particles: jet flame and smoke, bullet sparks, landing dust.
  initPuffs() {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    this.fireMat = new THREE.MeshBasicMaterial({ color: 0xffa23a });
    this.smokeMat = new THREE.MeshBasicMaterial({ color: 0xcfd6df, transparent: true, opacity: 0.55 });
    this.dustMat = new THREE.MeshBasicMaterial({ color: 0xb9ad94, transparent: true, opacity: 0.5 });
    this.puffPool = [];
    for (let i = 0; i < 72; i++) {
      const m = new THREE.Mesh(geo, this.smokeMat);
      m.visible = false; this.scene.add(m);
      this.puffPool.push({ m, life: 0, max: 1, vx: 0, vy: 0, vz: 0, size: 0.2, dust: false });
    }
    this.puffNext = 0;
  }

  puff(x, y, z, vx, vy, vz, size, life, dust = false) {
    const q = this.puffPool[this.puffNext++ % this.puffPool.length];
    q.m.position.set(x, y, z);
    q.vx = vx; q.vy = vy; q.vz = vz; q.size = size; q.life = q.max = life; q.dust = dust;
    q.m.visible = true;
  }

  updatePuffs(dt) {
    const drag = Math.exp(-3 * dt);
    for (const q of this.puffPool) {
      if (q.life <= 0) continue;
      q.life -= dt;
      if (q.life <= 0) { q.m.visible = false; continue; }
      q.m.position.x += q.vx * dt; q.m.position.y += q.vy * dt; q.m.position.z += q.vz * dt;
      q.vx *= drag; q.vy *= drag; q.vz *= drag;
      const f = q.life / q.max;
      q.m.scale.setScalar(q.size * (0.5 + 0.7 * (1 - f)));
      q.m.material = q.dust ? this.dustMat : (f > 0.7 ? this.fireMat : this.smokeMat);
    }
  }

  hit(id) { const a = this.meshes.get(id); if (a) a.hit(); }
  shot(id) { const a = this.meshes.get(id); if (a) a.shoot(); if (id === this.meId) { this.vmKick = 1; this.vmFlash = 0.05; } }

  // The gun you see in first person. It lives in its own little scene with its own camera (fixed field of
  // view, so zooming never stretches it) and is drawn in a second pass after clearing depth: it sorts
  // correctly against itself and never sinks into a wall when you stand close to one.
  initViewmodel() {
    this.vmScene = new THREE.Scene();
    this.vmScene.add(new THREE.HemisphereLight(0xdfeeff, 0x6a6258, 1.7));
    const sun = new THREE.DirectionalLight(0xfff2d6, 1.4);
    sun.position.set(-1, 2, 1.5);
    this.vmScene.add(sun);
    this.vmCam = new THREE.PerspectiveCamera(62, 1, 0.03, 5);

    const vm = new THREE.Group();
    const M = (c) => new THREE.MeshLambertMaterial({ color: c, flatShading: true });
    const dark = M(0x2b2f3a), gear = M(0x4a5163), skin = M(0xf0c8a0), sleeve = M(0x3a5f8f), cuff = M(0x2c4a73);
    const box = (w, h, d, mat, x, y, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); vm.add(m); return m; };
    // A limb is a box stretched between two points, so arm and hand always meet with no gap.
    const limb = (from, to, t, mat) => {
      const dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2], len = Math.hypot(dx, dy, dz);
      const m = new THREE.Mesh(new THREE.BoxGeometry(t, t, len), mat);
      m.rotation.order = 'YXZ';
      m.rotation.y = Math.atan2(dx, dz);
      m.rotation.x = -Math.atan2(dy, Math.hypot(dx, dz));
      m.position.set((from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2);
      vm.add(m); return m;
    };
    // The gun and both arms are rebuilt whenever the weapon changes (see setVmWeapon).
    this.vmBuild = (id) => {
      vm.clear();
      const gun = new THREE.Group(); vm.add(gun);
      const spec = fillGun(gun, id), lz = spec.lz;
      // right arm: from the grip back to below the screen's edge
      limb([0.0, -0.12, 0.02], [0.2, -0.45, 0.8], 0.075, sleeve);
      box(0.082, 0.082, 0.03, cuff, 0.02, -0.13, 0.08).rotation.y = -0.2;
      box(0.075, 0.09, 0.09, skin, 0, -0.105, 0.0);   // right hand wraps the grip
      // left arm: from the foregrip back to the lower-left
      limb([0.0, -0.05, lz + 0.01], [-0.28, -0.4, 0.7], 0.075, sleeve);
      box(0.082, 0.082, 0.03, cuff, -0.03, -0.09, lz + 0.15).rotation.y = 0.5;
      box(0.085, 0.07, 0.13, skin, 0, -0.042, lz);    // left hand cups the foregrip
      this.flashVm.position.set(0, 0.012, spec.muz - 0.12);
      vm.add(this.flashVm);
      this.vmId = id;
    };

    this.flashVm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xfff0a0 }));
    this.flashVm.position.set(0, 0.012, -0.72);
    this.flashVm.visible = false; vm.add(this.flashVm);
    this.vmBuild(1);
    vm.visible = false;
    this.vmScene.add(vm);
    this.vm = vm; this.vmKick = 0; this.vmFlash = 0; this.vmAds = 0;
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
    this.puff(x1, y1, z1, 0, 0.8, 0, 0.1, 0.22);
  }

  addShake(a) { this.shake = Math.min(0.4, this.shake + a); }

  clearPlayers() {
    for (const a of this.meshes.values()) a.dispose();
    this.meshes.clear();
  }

  // view: { players, me }. look: { yaw, pitch } of the local player.
  draw(dt, view, look) {
    const seen = new Set();
    for (const p of view.players) {
      seen.add(p.id);
      const av = this.meshes.get(p.id) || this.makePlayer(p);
      if (av.name !== p.name) av.rename(p.name);
      const isMe = !!view.me && p.id === view.me.id;
      av.update(p, dt, isMe, isMe && (!this.thirdPerson || this.squeezed || this.scoped));
    }
    for (const [id, a] of this.meshes) if (!seen.has(id)) { a.dispose(); this.meshes.delete(id); }
    this.updatePuffs(dt);

    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      if ((t.life -= dt) <= 0) { this.scene.remove(t.m); this.tracers.splice(i, 1); }
    }

    // Zoom: ease the field of view toward the weapon's aim-down-sights value.
    const wantFov = look.fov || 70;
    if (Math.abs(this.fov - wantFov) > 0.05) {
      this.fov += (wantFov - this.fov) * (1 - Math.exp(-14 * dt));
      this.cam.fov = this.fov; this.cam.updateProjectionMatrix();
    }
    this.scoped = !!look.fp && !!look.scope; // scoped sniper: camera sits at the eye, exactly where bullets start
    this.meId = view.me ? view.me.id : 0;

    // Camera
    const me = view.me;
    if (me) {
      const eyeY = me.y + EYE;
      const yaw = look.yaw, pitch = look.pitch;
      if (this.thirdPerson && !this.scoped) {
        const cp = cameraPos(me.x, me.y, me.z, yaw, pitch);
        this.cam.position.set(cp[0], cp[1], cp[2]);
        this.squeezed = !!cp[3]; // against a wall: hide our own body so it doesn't fill the screen
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
    // first-person gun: bobs with walking, kicks when firing, slides to the centre when aiming
    {
      const fpv = !!me && me.alive && (!this.thirdPerson || this.squeezed) && !this.scoped;
      this.vm.visible = fpv;
      if (fpv) {
        if (me.weapon !== this.vmId) this.vmBuild(me.weapon);
        this.vmAds += ((look.ads ? 1 : 0) - this.vmAds) * (1 - Math.exp(-14 * dt));
        this.vmKick *= Math.exp(-14 * dt);
        const sp = Math.hypot(me.vx || 0, me.vz || 0), t = performance.now() / 1000;
        const bob = me.gr ? Math.min(1, sp / 7) : 0, a = this.vmAds;
        this.vm.position.set(0.17 * (1 - a) + Math.sin(t * 9) * 0.006 * bob, -0.17 + 0.075 * a + Math.abs(Math.sin(t * 9)) * 0.01 * bob, -0.42 + this.vmKick * 0.05);
        this.vm.rotation.x = this.vmKick * 0.06;
        this.vmFlash -= dt;
        this.flashVm.visible = this.vmFlash > 0;
      }
    }
    if (this.debugCam) { const d = this.debugCam; this.cam.position.set(d[0], d[1], d[2]); this.cam.lookAt(d[3], d[4], d[5]); }
    this.world.update(this.cam.position, dt, view.sv);
    this.mons.update(view.sv, dt);
    this.gl.clear();
    if (this.realShadows) { this.sfN = (this.sfN || 0) + 1; if (this.quality >= 3 || this.sfN % 2 === 0) this.gl.shadowMap.needsUpdate = true; } // High redraws shadows every 2nd frame
    this.gl.render(this.scene, this.cam);
    if (this.vm.visible) { this.gl.clearDepth(); this.gl.render(this.vmScene, this.vmCam); }
  }

  // Project a world point to screen pixels (for hit markers etc). Returns null if behind the camera.
  project(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.cam);
    if (v.z > 1) return null;
    return [(v.x * 0.5 + 0.5) * innerWidth, (-v.y * 0.5 + 0.5) * innerHeight];
  }
}
