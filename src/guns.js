// Weapon models, shared by the first-person viewmodel and the avatars.
// Local space: -z is forward, the grip sits near z = 0, y up. Each spec lists boxes
// [w, h, d, material, x, y, z, rotX?], where the left hand rests (lz) and the muzzle tip (muz).
import * as THREE from 'three';

const M = (c) => new THREE.MeshLambertMaterial({ color: c, flatShading: true });
export const GM = {
  dark: M(0x2b2f3a), gear: M(0x4a5163), steel: M(0x9aa3ad), wood: M(0x8a5a32), olive: M(0x4f5b3a),
  lens: new THREE.MeshBasicMaterial({ color: 0x5ec8ff }),
};

export const GUNS = [
  { // Pistol: short slide, small grip
    lz: -0.1, muz: -0.3, parts: [
      [0.05, 0.06, 0.28, 'steel', 0, 0.025, -0.11],       // slide
      [0.045, 0.04, 0.22, 'dark', 0, -0.02, -0.08],       // frame
      [0.05, 0.14, 0.07, 'dark', 0, -0.09, 0.03, 0.18],   // grip
      [0.03, 0.03, 0.05, 'steel', 0, 0.025, -0.27],       // muzzle
      [0.025, 0.02, 0.025, 'dark', 0, 0.065, -0.2],       // front sight
      [0.03, 0.02, 0.025, 'dark', 0, 0.065, 0.02],        // rear sight
    ] },
  { // SMG: boxy, long straight magazine, suppressor, wire stock
    lz: -0.28, muz: -0.58, parts: [
      [0.07, 0.095, 0.4, 'olive', 0, 0, -0.12],           // body
      [0.05, 0.05, 0.15, 'dark', 0, 0.005, -0.4],         // suppressor
      [0.025, 0.025, 0.12, 'steel', 0, 0.005, -0.32],     // barrel
      [0.04, 0.22, 0.06, 'dark', 0, -0.16, -0.2],         // straight magazine
      [0.05, 0.12, 0.06, 'dark', 0, -0.1, 0.03, 0.15],    // grip
      [0.02, 0.03, 0.22, 'steel', 0, 0.0, 0.2],           // wire stock
      [0.03, 0.05, 0.04, 'dark', 0, 0.07, -0.05],         // sight
    ] },
  { // Shotgun: wooden stock and pump, thick barrel
    lz: -0.4, muz: -0.9, parts: [
      [0.07, 0.09, 0.3, 'dark', 0, 0, -0.04],             // receiver
      [0.05, 0.05, 0.66, 'steel', 0, 0.02, -0.55],        // barrel
      [0.04, 0.04, 0.5, 'gear', 0, -0.03, -0.46],         // magazine tube
      [0.07, 0.065, 0.22, 'wood', 0, -0.035, -0.4],       // pump
      [0.065, 0.11, 0.3, 'wood', 0, -0.02, 0.24],         // stock
      [0.05, 0.12, 0.06, 'wood', 0, -0.09, 0.04, 0.2],    // grip
      [0.07, 0.07, 0.04, 'dark', 0, 0.02, -0.89],         // muzzle collar
    ] },
  { // Sniper: long barrel, scope, brake, bipod, cheek stock
    lz: -0.36, muz: -1.0, parts: [
      [0.065, 0.09, 0.42, 'dark', 0, 0, -0.1],            // receiver
      [0.03, 0.03, 0.62, 'steel', 0, 0.012, -0.62],       // long barrel
      [0.05, 0.05, 0.08, 'dark', 0, 0.012, -0.96],        // muzzle brake
      [0.055, 0.055, 0.32, 'dark', 0, 0.115, -0.15],      // scope tube
      [0.07, 0.07, 0.05, 'dark', 0, 0.115, -0.32],        // objective bell
      [0.045, 0.045, 0.012, 'lens', 0, 0.115, -0.348],    // lens
      [0.02, 0.04, 0.03, 'gear', 0, 0.07, -0.05],         // mount
      [0.02, 0.04, 0.03, 'gear', 0, 0.07, -0.27],         // mount
      [0.065, 0.12, 0.34, 'gear', 0, -0.01, 0.26],        // stock
      [0.05, 0.12, 0.06, 'dark', 0, -0.09, 0.03, 0.15],   // grip
      [0.035, 0.06, 0.07, 'dark', 0, -0.07, -0.2],        // magazine
      [0.015, 0.14, 0.015, 'gear', -0.03, -0.07, -0.6, 0.3],  // bipod
      [0.015, 0.14, 0.015, 'gear', 0.03, -0.07, -0.6, 0.3],
    ] },
];

const geos = {};
const geo = (w, h, d) => geos[`${w}|${h}|${d}`] || (geos[`${w}|${h}|${d}`] = new THREE.BoxGeometry(w, h, d));

// Fill `group` with the meshes of gun `id` (any previous children are removed). Returns the spec.
export function fillGun(group, id) {
  const spec = GUNS[id] || GUNS[0];
  group.clear();
  for (const [w, h, d, mat, x, y, z, rx] of spec.parts) {
    const m = new THREE.Mesh(geo(w, h, d), GM[mat]);
    m.position.set(x, y, z);
    if (rx) m.rotation.x = rx;
    group.add(m);
  }
  return spec;
}
