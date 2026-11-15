// Tiny synthesized sound effects (no audio files to download).
let ctx = null;
let on = true;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (AC) ctx = new AC();
}
export function setSound(v) { on = v; }

function tone(freq, dur, type = 'square', vol = 0.1, slide = 0) {
  if (!ctx || !on) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + dur);
}

function noise(dur, vol = 0.15, freq = 1800) {
  if (!ctx || !on) return;
  const t = ctx.currentTime, n = Math.floor(ctx.sampleRate * dur);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const s = ctx.createBufferSource(); s.buffer = buf;
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq;
  const g = ctx.createGain(); g.gain.value = vol;
  s.connect(f); f.connect(g); g.connect(ctx.destination); s.start(t);
}

export const sfx = {
  shot(weapon, near = true) {
    const v = near ? 1 : 0.35;
    if (weapon === 2) noise(0.18, 0.22 * v, 1200);
    else if (weapon === 3) { noise(0.3, 0.25 * v, 900); tone(120, 0.25, 'sawtooth', 0.12 * v, -60); }
    else if (weapon === 1) { noise(0.06, 0.12 * v, 3000); tone(240, 0.05, 'square', 0.05 * v); }
    else { noise(0.08, 0.14 * v, 2400); tone(320, 0.07, 'square', 0.06 * v, -120); }
  },
  hit() { tone(900, 0.05, 'triangle', 0.12); },
  headshot() { tone(1400, 0.08, 'triangle', 0.14); },
  hurt() { tone(160, 0.15, 'sawtooth', 0.12, -80); },
  kill() { tone(520, 0.1, 'triangle', 0.14); setTimeout(() => tone(780, 0.14, 'triangle', 0.14), 90); },
  die() { tone(300, 0.5, 'sawtooth', 0.14, -240); },
  reload() { tone(180, 0.06, 'square', 0.08); setTimeout(() => tone(260, 0.06, 'square', 0.08), 350); },
  land(s = 1) { noise(0.12, 0.16 * s, 500); },
  step() { noise(0.04, 0.05, 700); },
  win() { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, 0.2, 'triangle', 0.15), i * 130)); },
};
