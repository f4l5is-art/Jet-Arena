// The 3D stage behind the main menu: your soldier standing on a pad, holding the chosen weapon.
// It has its own tiny scene, drawn with the game's renderer, and only runs while the menu is open.
import * as THREE from 'three';
import { Avatar } from './avatar.js';

export class LobbyStage {
  constructor(renderer, el, name = 'Player') {
    this.gl = renderer.gl; this.el = el;
    this.scene = new THREE.Scene();
    this.cam = new THREE.PerspectiveCamera(32, 1, 0.5, 40);
    this.scene.add(new THREE.HemisphereLight(0xdfeeff, 0x4a4036, 1.5));
    const key = new THREE.DirectionalLight(0xfff0d8, 1.6); key.position.set(-2, 3, 3); this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xff9f1c, 1.2); rim.position.set(3, 2, -3); this.scene.add(rim);

    // pad: a dark disc with a glowing ring, so the soldier has somewhere to stand
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.25, 0.12, 40), new THREE.MeshLambertMaterial({ color: 0x1b2638 }));
    pad.position.y = -0.06; this.scene.add(pad);
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.08, 48), new THREE.MeshBasicMaterial({ color: 0xff9f1c, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.005; this.scene.add(ring);

    // the avatar expects a renderer with a scene, name tags and smoke puffs; the stage needs none of that
    const stub = { scene: this.scene, makeTag: () => new THREE.Object3D(), puff() {}, onLand: null, onStep: null };
    this.me = { x: 0, y: 0, z: 0, yaw: 0, pitch: -0.04, vx: 0, vy: 0, vz: 0, gr: true, thr: false, alive: true, hp: 100, weapon: 1, color: 0xd8452f, name };
    this.avatar = new Avatar(stub, this.me);
    this.avatar.shadow.visible = false;
    this.spin = 0; // extra turn from dragging
    this.t = 0;
  }

  setWeapon(id) { this.me.weapon = id; }

  draw(dt) {
    this.t += dt;
    // Face the camera a little off-centre and sway gently; dragging adds to the turn.
    this.me.yaw = Math.PI - 0.7 + Math.sin(this.t * 0.6) * 0.18 + this.spin;
    this.avatar.update(this.me, dt, false, false);
    this.avatar.shadow.visible = false;
    // Draw into the stage element's rectangle (CSS pixels), so the soldier sits between the menu panels.
    const gl = this.gl, rc = this.el.getBoundingClientRect();
    gl.setScissorTest(false);
    gl.setViewport(0, 0, innerWidth, innerHeight);
    gl.setClearColor(0x0c131f, 1);
    gl.clear();
    if (rc.width < 20 || rc.height < 20) return;
    const aspect = rc.width / rc.height, tf = Math.tan((this.cam.fov * Math.PI) / 360);
    const d = Math.max(1.5 / tf, 1.35 / (tf * aspect)); // fit ~3 m tall and ~2.7 m wide
    this.cam.aspect = aspect;
    this.cam.position.set(0, 1.35, d);
    this.cam.lookAt(0, 0.82, 0);
    this.cam.updateProjectionMatrix();
    const y = innerHeight - rc.bottom;
    gl.setViewport(rc.left, y, rc.width, rc.height);
    gl.setScissor(rc.left, y, rc.width, rc.height);
    gl.setScissorTest(true);
    gl.render(this.scene, this.cam);
    gl.setScissorTest(false);
    gl.setViewport(0, 0, innerWidth, innerHeight);
  }
}
