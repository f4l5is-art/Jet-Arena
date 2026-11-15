// Touch controls (left stick = move, drag right side = look, buttons = fire/jet/reload/weapon)
// plus keyboard + mouse for desktop testing.
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export class Input {
  constructor() {
    this.yaw = 0; this.pitch = 0;
    this.mx = 0; this.mz = 0;
    this.jet = false; this.fire = false;
    this.rl = false; this.sw = -1; this.jumpFlag = false;
    this.adsToggle = false; this.adsHold = false; this.zoomLevel = 0; this.zoomStep = false;
    this.zoomMul = 1; // look speed scales down while zoomed so fine aim stays easy
    this.sens = 1;
    this.keys = new Set();
    this.touch = false;
    this.enabled = false;
    this.stick = { id: -1, cx: 0, cy: 0 };
    this.look = { id: -1, x: 0, y: 0 };
    this.btn = { fire: new Set(), jet: new Set() };
    this.bind();
  }

  bind() {
    const $ = (id) => document.getElementById(id);
    const zone = $('zone-move'), look = $('zone-look'), knob = $('knob'), base = $('stick');
    const place = (x, y) => { base.style.left = x + 'px'; base.style.top = y + 'px'; base.style.opacity = '1'; };

    zone.addEventListener('pointerdown', (e) => {
      if (!this.enabled || this.stick.id >= 0) return;
      this.touch = true;
      zone.setPointerCapture(e.pointerId);
      this.stick = { id: e.pointerId, cx: e.clientX, cy: e.clientY };
      place(e.clientX, e.clientY);
      knob.style.transform = 'translate(-50%,-50%)';
    });
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.stick.id) return;
      let dx = e.clientX - this.stick.cx, dy = e.clientY - this.stick.cy;
      const max = 55, d = Math.hypot(dx, dy);
      if (d > max) { dx = dx / d * max; dy = dy / d * max; }
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      this.mx = dx / max; this.mz = -dy / max;
      if (Math.abs(this.mx) < 0.12) this.mx = 0;
      if (Math.abs(this.mz) < 0.12) this.mz = 0;
    });
    const endStick = (e) => {
      if (e.pointerId !== this.stick.id) return;
      this.stick.id = -1; this.mx = 0; this.mz = 0; base.style.opacity = '0.35';
    };
    zone.addEventListener('pointerup', endStick);
    zone.addEventListener('pointercancel', endStick);

    look.addEventListener('pointerdown', (e) => {
      if (!this.enabled || this.look.id >= 0) return;
      this.touch = true;
      look.setPointerCapture(e.pointerId);
      this.look = { id: e.pointerId, x: e.clientX, y: e.clientY };
    });
    look.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.look.id) return;
      this.turn((e.clientX - this.look.x) * 0.0062, (e.clientY - this.look.y) * 0.0055);
      this.look.x = e.clientX; this.look.y = e.clientY;
    });
    const endLook = (e) => { if (e.pointerId === this.look.id) this.look.id = -1; };
    look.addEventListener('pointerup', endLook);
    look.addEventListener('pointercancel', endLook);

    const hold = (id, set, key) => {
      const el = $(id);
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); this.touch = true; el.setPointerCapture(e.pointerId); set.add(e.pointerId); this[key] = true; el.classList.add('down'); });
      const up = (e) => { set.delete(e.pointerId); if (!set.size) { this[key] = false; el.classList.remove('down'); } };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    };
    hold('btn-fire', this.btn.fire, 'fire');
    hold('btn-jet', this.btn.jet, 'jet');
    $('btn-jump').addEventListener('pointerdown', (e) => { e.preventDefault(); this.touch = true; this.jumpFlag = true; $('btn-jump').classList.add('down'); });
    $('btn-jump').addEventListener('pointerup', () => $('btn-jump').classList.remove('down'));
    $('btn-jump').addEventListener('pointercancel', () => $('btn-jump').classList.remove('down'));
    $('btn-scope').addEventListener('pointerdown', (e) => { e.preventDefault(); this.touch = true; this.adsToggle = !this.adsToggle; });
    $('btn-zoom').addEventListener('pointerdown', (e) => { e.preventDefault(); this.zoomStep = true; });
    $('btn-reload').addEventListener('pointerdown', (e) => { e.preventDefault(); this.rl = true; });
    $('btn-weapon').addEventListener('pointerdown', (e) => { e.preventDefault(); this.cycle = true; });

    // Desktop
    addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      const k = e.key.toLowerCase();
      this.keys.add(k);
      if (k >= '1' && k <= '4') this.sw = Number(k) - 1;
      if (k === 'r') this.rl = true;
      if (k === 'q') this.cycle = true;
      if (k === ' ') { e.preventDefault(); if (!e.repeat) this.jumpFlag = true; } // tap = jump, hold = jetpack
    });
    addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    const canvas = $('game');
    canvas.addEventListener('mousedown', (e) => {
      if (!this.enabled || this.touch) return;
      if (document.pointerLockElement !== canvas) { canvas.requestPointerLock?.(); return; }
      if (e.button === 0) this.mouseFire = true;
      if (e.button === 2) this.adsHold = true;
    });
    addEventListener('mouseup', (e) => { if (e.button === 2) this.adsHold = false; else this.mouseFire = false; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('mousemove', (e) => {
      if (!this.enabled || document.pointerLockElement !== canvas) return;
      this.turn(e.movementX * 0.0022, e.movementY * 0.0022);
    });
    addEventListener('wheel', (e) => { if (!this.enabled) return; if (this.scopedNow) this.zoomStep = true; else this.sw = e.deltaY > 0 ? -2 : -3; }, { passive: true });
    addEventListener('blur', () => { this.keys.clear(); this.mouseFire = false; });
  }

  turn(dx, dy) {
    const k = this.sens * this.zoomMul;
    this.yaw -= dx * k;
    this.pitch = clamp(this.pitch - dy * k, -1.2, 1.2);
  }

  // Snapshot for the simulation. `cur` is the current weapon index (for cycling).
  read(cur, count) {
    const k = this.keys;
    let mx = this.mx, mz = this.mz;
    if (k.has('a') || k.has('arrowleft')) mx -= 1;
    if (k.has('d') || k.has('arrowright')) mx += 1;
    if (k.has('w') || k.has('arrowup')) mz += 1;
    if (k.has('s') || k.has('arrowdown')) mz -= 1;
    let sw = this.sw;
    if (this.cycle) sw = (cur + 1) % count;
    else if (sw === -2) sw = (cur + 1) % count;
    else if (sw === -3) sw = (cur + count - 1) % count;
    const out = {
      mx: clamp(mx, -1, 1), mz: clamp(mz, -1, 1), yaw: this.yaw, pitch: this.pitch,
      ads: this.adsToggle || this.adsHold, jet: this.jet || k.has(' ') || k.has('shift'), fire: this.fire || !!this.mouseFire, rl: this.rl, sw, jump: this.jumpFlag,
    };
    this.rl = false; this.sw = -1; this.cycle = false; this.jumpFlag = false;
    return out;
  }

  reset() {
    this.mx = this.mz = 0; this.jet = this.fire = false; this.mouseFire = false; this.adsHold = false; this.adsToggle = false;
    this.stick.id = -1; this.look.id = -1; this.keys.clear();
  }
}
