// Real grass: thousands of little tufts of tapered blades that sway in a rolling wind, plus wildflowers.
// Instanced, split into chunks (culled by view and distance), blades shrink away past `fade` metres so the
// painted ground takes over in the distance. Lit by the scene lights and receives sun shadows.
import * as THREE from 'three';

export const grassUniforms = {
  uTime: { value: 0 },
  uCam: { value: new THREE.Vector3() },
  uFade: { value: new THREE.Vector2(34, 58) },
  uWind: { value: 1 },
};

// a deterministic rng so the field is identical on every device
function rngFrom(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

// One tuft: `n` tapered blades fanned out, each a 3-triangle strip (base, middle, tip). Unit height.
function tuftGeometry(n = 4) {
  const pos = [], col = [], nor = [];
  const rnd = rngFrom(99);
  const tri = (a, b, c, ca, cb, cc) => {
    for (const [p, k] of [[a, ca], [b, cb], [c, cc]]) { pos.push(p[0], p[1], p[2]); col.push(k, k, k); nor.push(0, 1, 0); }
  };
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI + rnd() * 0.5, ox = (rnd() - 0.5) * 0.22, oz = (rnd() - 0.5) * 0.22;
    const h = 0.7 + rnd() * 0.5, w = 0.045 + rnd() * 0.02, lean = (0.12 + rnd() * 0.2) * (rnd() < 0.5 ? -1 : 1);
    const cx = Math.cos(ang), cz = Math.sin(ang);
    // local axes: along the blade width (cx, cz) and the lean direction (-cz, cx)
    const P = (u, y, l) => [ox + cx * u + -cz * l, y, oz + cz * u + cx * l];
    const bl = P(-w, 0, 0), br = P(w, 0, 0);
    const ml = P(-w * 0.62, h * 0.5, lean * 0.35), mr = P(w * 0.62, h * 0.5, lean * 0.35);
    const tip = P(0, h, lean);
    tri(bl, br, ml, 0.42, 0.42, 0.78); tri(br, mr, ml, 0.42, 0.78, 0.78); tri(ml, mr, tip, 0.78, 0.78, 1.15);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return g;
}

function flowerGeometry() {
  const g = new THREE.CircleGeometry(0.2, 6);
  g.rotateX(-Math.PI / 2 + 0.35);
  g.translate(0, 1, 0);
  const n = g.attributes.position.count, nor = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) nor[i * 3 + 1] = 1;
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  return g.toNonIndexed();
}

// Lambert material patched for wind and distance shrink. Uses instanceMatrix for placement.
function windMaterial(vertexColors) {
  const m = new THREE.MeshLambertMaterial({ vertexColors, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, grassUniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uTime, uWind; uniform vec3 uCam; uniform vec2 uFade;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec3 ibase = vec3(0.0);
        #ifdef USE_INSTANCING
          ibase = instanceMatrix[3].xyz;
        #endif
        float gs = 1.0 - smoothstep(uFade.x, uFade.y, distance(ibase.xz, uCam.xz));
        transformed *= gs;`)
      .replace('#include <project_vertex>', `
        vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec3 wp = mvPosition.xyz;
        float hf = clamp(position.y, 0.0, 1.5); hf *= hf;
        float wv = sin(wp.x * 0.33 + uTime * 1.7) + 0.7 * sin(wp.z * 0.27 + uTime * 1.15 + wp.x * 0.11);
        float gust = sin(wp.x * 0.045 + wp.z * 0.035 + uTime * 0.55);
        float flutter = sin(wp.x * 2.1 + wp.z * 1.7 + uTime * 5.0) * 0.012;
        mvPosition.x += hf * uWind * (wv * 0.05 + gust * 0.09 + 0.04 + flutter);
        mvPosition.z += hf * uWind * (wv * 0.03 + gust * 0.045 + flutter);
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`);
  };
  m.customProgramCacheKey = () => 'grass-wind';
  return m;
}

// Build the field. `blocked(x, z)` says where grass must not grow (buildings, roads, barrels...).
export function buildGrass(scene, { half, blocked, forest }) {
  const CH = 20, rnd = rngFrom(4242);
  const tuftGeo = tuftGeometry(4), flowerGeo = flowerGeometry();
  const tuftMat = windMaterial(true), flowerMat = windMaterial(false);
  const group = new THREE.Group(); group.name = 'grass';
  scene.add(group);

  const greens = ['#5f9a3a', '#6aa83f', '#56903a', '#79b04a', '#4f8a38', '#8ab356'].map((c) => new THREE.Color(c));
  const dark = new THREE.Color('#3f7430'), petals = ['#ffffff', '#ffe14d', '#ff7aa8', '#b58cff', '#ff6a3d'].map((c) => new THREE.Color(c));
  const dummy = new THREE.Object3D(), tmp = new THREE.Color();
  const chunks = [];
  const STEP = 0.7;

  for (let cx = -half; cx < half; cx += CH) for (let cz = -half; cz < half; cz += CH) {
    const tufts = [], flowers = [];
    for (let x = cx; x < cx + CH; x += STEP) for (let z = cz; z < cz + CH; z += STEP) {
      const px = x + rnd() * STEP, pz = z + rnd() * STEP;
      const order = rnd();
      if (blocked(px, pz)) continue;
      const inForest = forest(px, pz);
      if (rnd() < 0.045) { flowers.push({ x: px, z: pz, order, s: 0.4 + rnd() * 0.25, c: (rnd() * petals.length) | 0, ry: rnd() * 6 }); continue; }
      tufts.push({ x: px, z: pz, order, s: (inForest ? 0.5 : 0.38) + rnd() * 0.32, ry: rnd() * 6.283, g: (rnd() * greens.length) | 0, f: inForest });
    }
    // sorted by `order`, so a lower quality simply draws the first N (an even thinning of the same field)
    tufts.sort((a, b) => a.order - b.order); flowers.sort((a, b) => a.order - b.order);
    const centre = new THREE.Vector3(cx + CH / 2, 0.4, cz + CH / 2);
    const sphere = new THREE.Sphere(centre, CH * 0.75);
    const mk = (geo, mat, list, isFlower) => {
      if (!list.length) return null;
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach((t, i) => {
        dummy.position.set(t.x, 0, t.z); dummy.rotation.set(0, t.ry, 0);
        dummy.scale.set(t.s * (isFlower ? 1 : 1.1), t.s, t.s * (isFlower ? 1 : 1.1)); dummy.updateMatrix();
        im.setMatrixAt(i, dummy.matrix);
        if (isFlower) tmp.copy(petals[t.c]); else { tmp.copy(greens[t.g]); if (t.f) tmp.lerp(dark, 0.35); }
        im.setColorAt(i, tmp);
      });
      im.instanceMatrix.needsUpdate = true; im.instanceColor.needsUpdate = true;
      im.boundingSphere = sphere; im.receiveShadow = true; im.castShadow = false;
      group.add(im);
      return im;
    };
    chunks.push({ centre, tuft: mk(tuftGeo, tuftMat, tufts, false), flower: mk(flowerGeo, flowerMat, flowers, true), nT: tufts.length, nF: flowers.length });
  }

  let density = 0.6, on = true;
  const apply = () => {
    for (const c of chunks) {
      if (c.tuft) c.tuft.count = Math.max(0, Math.floor(c.nT * density));
      if (c.flower) c.flower.count = Math.max(0, Math.floor(c.nF * density));
    }
    group.visible = on && density > 0;
  };
  apply();

  const cam = new THREE.Vector3();
  return {
    group,
    // density 0 = off. fade = distance (m) at which blades are fully shrunk away.
    setQuality(d, fade = 58) {
      density = d; on = d > 0;
      grassUniforms.uFade.value.set(fade * 0.58, fade);
      apply();
    },
    update(camPos, dt) {
      if (!group.visible) return;
      grassUniforms.uTime.value += dt;
      grassUniforms.uCam.value.copy(camPos);
      cam.copy(camPos);
      const lim = grassUniforms.uFade.value.y + CH * 0.8;
      for (const c of chunks) { // hide chunks too far away to show any blade
        const v = Math.hypot(c.centre.x - cam.x, c.centre.z - cam.z) < lim;
        if (c.tuft) c.tuft.visible = v;
        if (c.flower) c.flower.visible = v;
      }
    },
  };
}
