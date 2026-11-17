// Shader sky dome: gradient atmosphere, sun disc and glow, soft lit clouds that drift, stars at night.
// It is drawn LAST at the far plane (depth test on, no depth write), so the GPU skips every pixel that
// terrain or buildings already covered: the sky only costs what you can actually see of it.
import * as THREE from 'three';

export const SUN_DIR = new THREE.Vector3(0.62, 0.52, 0.38).normalize();

const DAY = { top: new THREE.Color('#2a6fd4'), mid: new THREE.Color('#68a6e8'), hor: new THREE.Color('#bcd8f0') };
const NIGHT = { top: new THREE.Color('#01030a'), mid: new THREE.Color('#040a1a'), hor: new THREE.Color('#0a1424') };
export const HORIZON_DAY = DAY.hor;

const VERT = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // pin to the far plane
}`;

const FRAG = /* glsl */`
precision highp float;
varying vec3 vDir;
uniform vec3 uTop, uMid, uHor, uSun;
uniform float uDark, uTime, uSunVis;
uniform int uOct;

float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float h31(vec3 p) { p = fract(p * vec3(443.897, 441.423, 437.195)); p += dot(p, p.yzx + 19.19); return fract((p.x + p.y) * p.z); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) { if (i >= uOct) break; s += a * vn(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; }
  return s;
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  float t = clamp(h, 0.0, 1.0);
  vec3 col = mix(uHor, uMid, smoothstep(0.0, 0.32, t));
  col = mix(col, uTop, smoothstep(0.22, 0.95, t));
  float day = 1.0 - uDark;

  // sun: disc, tight glow, wide warm haze that also lifts the horizon on the sun's side
  float s = max(dot(d, uSun), 0.0);
  float disc = smoothstep(0.99935, 0.99975, s);
  float glow = pow(s, 90.0) * 0.55 + pow(s, 9.0) * 0.20 + pow(s, 2.5) * 0.06;
  vec3 sunCol = vec3(1.0, 0.93, 0.78);
  col += sunCol * glow * uSunVis;
  col = mix(col, sunCol * 2.2, disc * uSunVis);

  // clouds on a virtual plane high above, so they thin out and converge toward the horizon
  if (h > 0.0 && uOct > 0) {
    vec2 uv = d.xz / (h + 0.12) * 0.85 + vec2(uTime * 0.012, uTime * 0.005);
    float dn = fbm(uv * 1.15);
    float cov = smoothstep(0.50, 0.74, dn) * smoothstep(0.0, 0.16, h);
    if (cov > 0.002) {
      float dn2 = fbm((uv + uSun.xz * 0.06) * 1.15); // sample toward the sun: lit side vs shaded side
      float lit = clamp((dn - dn2) * 5.0 + 0.55, 0.0, 1.0);
      vec3 shade = mix(vec3(0.50, 0.58, 0.72), vec3(0.10, 0.12, 0.2), uDark);
      vec3 bright = mix(vec3(1.0, 0.99, 0.96), vec3(0.18, 0.22, 0.34), uDark);
      vec3 cc = mix(shade, bright, lit);
      cc += sunCol * pow(s, 6.0) * 0.35 * uSunVis * (1.0 - cov * 0.4); // silver lining near the sun
      col = mix(col, cc, cov * 0.94);
    }
  }

  // stars (and a faint twinkle) once it is dark
  if (uDark > 0.35 && h > 0.0) {
    vec3 sp = floor(d * 110.0);
    float r = h31(sp);
    float star = step(0.9965, r) * smoothstep(0.35, 0.8, uDark) * smoothstep(0.02, 0.2, h);
    float tw = 0.65 + 0.35 * sin(uTime * 2.0 + r * 60.0);
    col += vec3(0.85, 0.92, 1.0) * star * tw * 1.4;
  }

  col = clamp(col, 0.0, 1.6);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

// A sky that follows the camera. update(camPos, dt, dark): dark 0 = day, 1 = night.
export function createSky(scene, oct = 4) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG,
    uniforms: {
      uTop: { value: DAY.top.clone() }, uMid: { value: DAY.mid.clone() }, uHor: { value: DAY.hor.clone() },
      uSun: { value: SUN_DIR.clone() }, uDark: { value: 0 }, uTime: { value: 0 }, uSunVis: { value: 1 }, uOct: { value: oct },
    },
    side: THREE.BackSide, depthWrite: false, depthTest: true, fog: false, toneMapped: false,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(100, 24, 16), mat);
  mesh.frustumCulled = false; mesh.renderOrder = 1000;
  scene.add(mesh);
  const horizon = DAY.hor.clone(); // the fog colour: always equal to the sky's horizon colour
  let clock = 0;
  return {
    mesh, horizon,
    setDetail(o) { mat.uniforms.uOct.value = o; },
    update(camPos, dt, dark = 0) {
      clock += dt;
      mesh.position.copy(camPos);
      const u = mat.uniforms;
      u.uTime.value = clock; u.uDark.value = dark;
      u.uSunVis.value = 1 - Math.min(1, Math.max(0, (dark - 0.15) / 0.5));
      u.uTop.value.copy(DAY.top).lerp(NIGHT.top, dark);
      u.uMid.value.copy(DAY.mid).lerp(NIGHT.mid, dark);
      u.uHor.value.copy(DAY.hor).lerp(NIGHT.hor, dark);
      horizon.copy(u.uHor.value);
    },
  };
}
