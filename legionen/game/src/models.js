// Lowpoly-Geometrien: Soldatenteile (instanziert) und Umgebungsobjekte (statisch gebündelt)
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3();

export function prep(geo) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  g.deleteAttribute('uv');
  if (g.attributes.uv1) g.deleteAttribute('uv1');
  g.computeVertexNormals();
  return g;
}
export function xf(geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  _e.set(rx, ry, rz);
  _q.setFromEuler(_e);
  _m.compose(_v.set(x, y, z), _q, _s.set(sx, sy, sz));
  geo.applyMatrix4(_m);
  return geo;
}
const box = (w, h, d) => prep(new THREE.BoxGeometry(w, h, d));
const cyl = (rt, rb, h, seg = 6) => prep(new THREE.CylinderGeometry(rt, rb, h, seg, 1));
const cone = (r, h, seg = 6) => prep(new THREE.ConeGeometry(r, h, seg, 1));
const ico = (r, d = 0) => prep(new THREE.IcosahedronGeometry(r, d));
const dode = (r) => prep(new THREE.DodecahedronGeometry(r, 0));
const merge = (arr) => mergeGeometries(arr.map((g) => (g.index ? prep(g) : g)), false);

// ---------------- Soldatenteile ----------------
// Alle Teile: Modell blickt nach +Z, Füße bei y=0, linke Hand +X
export function buildPartGeometries() {
  const G = {};
  G.leg = xf(box(0.16, 0.78, 0.2), 0, -0.39, 0); // Drehpunkt Hüfte
  G.torso = merge([
    xf(cyl(0.25, 0.2, 0.62, 6), 0, 0, 0),
    xf(box(0.72, 0.14, 0.2), 0, 0.26, 0), // Schultern
  ]);
  G.chest = xf(cyl(0.28, 0.24, 0.36, 6), 0, 0.1, 0);
  G.skirt = xf(cyl(0.22, 0.3, 0.26, 6), 0, 0, 0);
  G.head = ico(0.17, 0);
  G.helmRoman = merge([
    prep(new THREE.SphereGeometry(0.2, 6, 3, 0, Math.PI * 2, 0, Math.PI / 2)),
    xf(box(0.44, 0.04, 0.12), 0, 0, -0.14),
  ]);
  G.crest = xf(box(0.06, 0.16, 0.42), 0, 0.26, 0);
  G.plume = merge([xf(box(0.07, 0.3, 0.46), 0, 0.3, -0.02), xf(box(0.07, 0.2, 0.22), 0, 0.28, -0.28, 0.5)]);
  G.helmCone = merge([cone(0.21, 0.36, 6), xf(box(0.05, 0.16, 0.04), 0, -0.1, 0.19)]);
  G.horns = merge([
    xf(cone(0.05, 0.28, 5), 0.2, 0.06, 0, 0, 0, -1.0),
    xf(cone(0.05, 0.28, 5), -0.2, 0.06, 0, 0, 0, 1.0),
  ]);
  G.hood = xf(cone(0.22, 0.42, 5), 0, 0.06, -0.02);
  G.scutum = xf(box(0.62, 0.95, 0.08), 0, 0, 0);
  G.boss = xf(ico(0.08, 0), 0, 0, 0.05);
  G.round = xf(cyl(0.36, 0.36, 0.07, 8), 0, 0, 0, Math.PI / 2);
  G.buckler = xf(cyl(0.24, 0.24, 0.06, 7), 0, 0, 0, Math.PI / 2);
  G.tower = xf(box(0.76, 1.3, 0.1), 0, 0, 0);
  G.towerRim = merge([xf(box(0.8, 0.07, 0.11), 0, 0.62, 0), xf(box(0.8, 0.07, 0.11), 0, -0.62, 0), xf(box(0.07, 1.3, 0.11), 0, 0, 0)]);
  G.sword = merge([xf(box(0.06, 0.04, 0.62), 0, 0, 0.38), xf(box(0.2, 0.05, 0.05), 0, 0, 0.06)]);
  G.axe = merge([xf(box(0.05, 0.05, 0.75), 0, 0, 0.3), xf(box(0.04, 0.26, 0.18), 0, 0.05, 0.62)]);
  G.pike = merge([xf(cyl(0.028, 0.028, 4.3, 4), 0, 0, 1.2, Math.PI / 2), xf(cone(0.06, 0.3, 4), 0, 0, 3.45, Math.PI / 2)]);
  G.spear = merge([xf(cyl(0.03, 0.03, 3.0, 4), 0, 0, 0.9, Math.PI / 2), xf(cone(0.06, 0.28, 4), 0, 0, 2.5, Math.PI / 2)]);
  G.bow = xf(prep(new THREE.TorusGeometry(0.46, 0.03, 3, 8, Math.PI)), 0, 0, 0, 0, Math.PI / 2, Math.PI / 2);
  G.quiver = xf(cyl(0.08, 0.07, 0.55, 5), 0, 0, 0, 0.35);
  G.cape = xf(box(0.56, 0.9, 0.05), 0, -0.45, 0);
  // Pferd
  G.horse = merge([
    xf(box(0.56, 0.62, 1.5), 0, 0, 0), // Rumpf
    xf(box(0.36, 0.72, 0.4), 0, 0.42, 0.72, -0.55), // Hals
    xf(box(0.3, 0.3, 0.62), 0, 0.72, 1.08, 0.35), // Kopf
    xf(box(0.12, 0.5, 0.12), 0, 0.05, -0.8, 0.6), // Schweif
    xf(box(0.08, 0.14, 0.08), 0.1, 0.92, 0.9), xf(box(0.08, 0.14, 0.08), -0.1, 0.92, 0.9), // Ohren
  ]);
  G.mane = merge([xf(box(0.1, 0.62, 0.36), 0, 0.55, 0.62, -0.55), xf(box(0.14, 0.52, 0.14), 0, 0.02, -0.82, 0.5)]);
  G.saddle = merge([xf(box(0.66, 0.36, 0.72), 0, 0.12, -0.02), xf(box(0.3, 0.1, 0.4), 0, 0.33, -0.05)]);
  G.hleg = merge([xf(box(0.13, 0.8, 0.14), 0.18, -0.4, 0), xf(box(0.13, 0.8, 0.14), -0.18, -0.4, 0)]);
  // --- Details für interessantere Skins ---
  G.crestT = xf(box(0.5, 0.16, 0.07), 0, 0.27, 0); // Querkamm des Centurio
  G.cheeks = merge([xf(box(0.04, 0.16, 0.12), 0.18, -0.08, 0.06), xf(box(0.04, 0.16, 0.12), -0.18, -0.08, 0.06)]);
  G.emblemWing = merge([
    xf(box(0.46, 0.05, 0.02), 0.1, 0.12, 0.05, 0, 0, 0.55), xf(box(0.46, 0.05, 0.02), -0.1, 0.12, 0.05, 0, 0, -0.55),
    xf(box(0.46, 0.05, 0.02), 0.1, -0.12, 0.05, 0, 0, -0.55), xf(box(0.46, 0.05, 0.02), -0.1, -0.12, 0.05, 0, 0, 0.55),
    xf(box(0.05, 0.8, 0.02), 0, 0, 0.05),
  ]);
  G.shieldRim = merge([xf(box(0.66, 0.05, 0.1), 0, 0.48, 0), xf(box(0.66, 0.05, 0.1), 0, -0.48, 0), xf(box(0.05, 0.98, 0.1), 0.32, 0, 0), xf(box(0.05, 0.98, 0.1), -0.32, 0, 0)]);
  G.emblemCross = merge([xf(box(0.62, 0.09, 0.02), 0, 0, 0.045), xf(box(0.09, 0.62, 0.02), 0, 0, 0.045)]);
  G.emblemHalf = xf(prep(new THREE.CircleGeometry(0.34, 8, 0, Math.PI)), 0, 0, 0.042);
  G.roundRim = xf(prep(new THREE.TorusGeometry(0.34, 0.035, 3, 10)), 0, 0, 0.02);
  G.fur = xf(ico(0.36, 0), 0, 0, -0.03, 0, 0, 0, 1.25, 0.42, 1.05);
  G.beard = merge([xf(box(0.22, 0.2, 0.1), 0, -0.1, 0.12), xf(box(0.12, 0.14, 0.08), 0, -0.24, 0.12)]);
  G.braids = merge([xf(box(0.06, 0.34, 0.06), 0.16, -0.14, -0.08), xf(box(0.06, 0.34, 0.06), -0.16, -0.14, -0.08)]);
  G.wings = merge([xf(box(0.04, 0.32, 0.2), 0.2, 0.12, -0.04, 0, 0, -0.35), xf(box(0.04, 0.32, 0.2), -0.2, 0.12, -0.04, 0, 0, 0.35)]);
  G.pauldrons = merge([xf(ico(0.14, 0), 0.3, 0, 0, 0, 0, 0, 1.2, 0.8, 1.1), xf(ico(0.14, 0), -0.3, 0, 0, 0, 0, 0, 1.2, 0.8, 1.1)]);
  G.belt = xf(cyl(0.225, 0.225, 0.07, 7), 0, 0, 0);
  G.scarf = xf(prep(new THREE.TorusGeometry(0.15, 0.05, 3, 8)), 0, 0, 0, Math.PI / 2);
  G.arrows = merge([0, 1, 2, 3].map((i) => xf(box(0.02, 0.22, 0.02), (i % 2 - 0.5) * 0.06, 0.36, (i > 1 ? 0.03 : -0.03))));
  G.barding = merge([xf(box(0.66, 0.46, 1.25), 0, -0.06, 0), xf(box(0.3, 0.3, 0.3), 0, 0.3, 0.8, -0.55)]);
  G.bardingTrim = xf(box(0.68, 0.08, 1.27), 0, -0.3, 0);
  G.horsePlume = xf(cone(0.07, 0.3, 4), 0, 1.02, 1.0, 0.3);
  G.wolfPelt = xf(ico(0.4, 0), 0, 0.3, -0.35, 0, 0, 0, 1.2, 0.35, 1.3);

  // Feldzeichen
  G.pole = xf(cyl(0.04, 0.04, 3.4, 4), 0, 1.7, 0);
  G.eagle = merge([xf(ico(0.14, 0), 0, 3.55, 0), xf(box(0.5, 0.08, 0.1), 0, 3.6, 0, 0, 0, 0.3), xf(box(0.5, 0.08, 0.1), 0, 3.6, 0, 0, 0, -0.3)]);
  return G;
}

// Teile-Liste je Fraktion & Typ.  anim: legL/legR (Gehen), arm (Waffe), bow, hlegF/hlegB, none
// Optionen je Teil: v: [Gruppe, Variante] (pro Soldat eine Variante je Gruppe), off: nur Offizier,
// noOff: nicht beim Offizier, chance: Wahrscheinlichkeit, role darf ein Array sein (zufällig je Soldat)
export function partsFor(side, type) {
  const roman = side === 0;
  const P = [];
  const add = (g, role, px, py, pz, anim = 'none', rx = 0, ry = 0, rz = 0, opt = {}) => P.push({ g, role, p: [px, py, pz], anim, r: [rx, ry, rz], ...opt });
  const mounted = type === 'cavalry';
  const Y = mounted ? 0.95 : 0; // Sitzhöhe
  const tunic = roman ? 'primary' : ['primary', 'tunic2', 'tunic3'];
  if (mounted) {
    add('horse', roman ? 'horse' : ['horse', 'horse2'], 0, 1.15, 0, 'horse');
    add('mane', 'mane', 0, 1.15, 0, 'horse');
    add('saddle', 'primary', 0, 1.47, -0.05, 'horse');
    if (roman) {
      add('barding', 'primary', 0, 1.15, 0, 'horse');
      add('bardingTrim', 'accent', 0, 1.15, 0, 'horse');
      add('horsePlume', 'accent', 0, 1.15, 0, 'horse');
    } else add('wolfPelt', 'fur', 0, 1.15, 0, 'horse');
    add('hleg', roman ? 'horse' : ['horse', 'horse2'], 0, 0.85, 0.55, 'hlegF');
    add('hleg', roman ? 'horse' : ['horse', 'horse2'], 0, 0.85, -0.55, 'hlegB');
    add('leg', 'dark', 0.3, 0.78 + Y, 0.05, 'ride', -1.2, 0, 0.35);
    add('leg', 'dark', -0.3, 0.78 + Y, 0.05, 'ride', -1.2, 0, -0.35);
  } else {
    add('leg', 'dark', 0.11, 0.78, 0, 'legL');
    add('leg', 'dark', -0.11, 0.78, 0, 'legR');
  }
  const torsoRole = type === 'archer' ? (roman ? 'hood' : ['cloth', 'tunic3']) : tunic;
  add('torso', torsoRole, 0, 1.08 + Y, 0);
  if (type !== 'archer') add('skirt', roman ? 'primary' : 'dark', 0, 0.8 + Y, 0);
  add('belt', roman ? 'leather' : 'dark', 0, 0.86 + Y, 0);
  if (type === 'legion' || type === 'guard' || type === 'cavalry' || type === 'pike') add('chest', 'metal', 0, 1.08 + Y, 0, 'none', 0, 0, 0, { noOff: roman });
  if (roman && type !== 'archer') add('chest', 'silver', 0, 1.08 + Y, 0, 'none', 0, 0, 0, { off: true });
  if (type === 'guard' || (roman && type === 'legion')) add('pauldrons', 'metal', 0, 1.34 + Y, 0);
  add('head', 'skin', 0, 1.56 + Y, 0);
  if (!roman) {
    add('beard', ['hairB', 'hairR', 'hairG'], 0, 1.56 + Y, 0, 'none', 0, 0, 0, { chance: 0.75 });
    add('braids', ['hairB', 'hairR', 'hairG'], 0, 1.56 + Y, 0, 'none', 0, 0, 0, { chance: 0.4 });
    if (type !== 'archer') add('fur', ['fur', 'furL'], 0, 1.36 + Y, 0, 'none', 0, 0, 0, { chance: type === 'guard' ? 1 : 0.6 });
  }
  if (type === 'archer') {
    add('hood', roman ? 'hood' : ['cloth', 'fur'], 0, 1.62 + Y, 0);
    add('scarf', 'accent', 0, 1.42 + Y, 0);
    add('quiver', 'leather', -0.1, 1.2 + Y, -0.22, 'none', 0.35);
    add('arrows', 'cloth', -0.1, 1.2 + Y, -0.22, 'none', 0.35);
    add('bow', 'wood', 0.3, 1.25 + Y, 0.32, 'bow');
  } else if (roman) {
    add('helmRoman', 'helm', 0, 1.6 + Y, 0);
    add('cheeks', 'helm', 0, 1.6 + Y, 0);
    if (type === 'guard' || type === 'cavalry') add('plume', 'crest', 0, 1.6 + Y, 0, 'none', 0, 0, 0, { noOff: true });
    else add('crest', 'crest', 0, 1.6 + Y, 0, 'none', 0, 0, 0, { noOff: true });
    add('crestT', 'accent', 0, 1.6 + Y, 0, 'none', 0, 0, 0, { off: true }); // Centurio
  } else {
    add('helmCone', 'helm', 0, 1.72 + Y, 0);
    // Helmschmuck variiert: Hörner, Flügel oder schlicht
    add('horns', 'crest', 0, 1.68 + Y, 0, 'none', 0, 0, 0, { v: ['helm', 0] });
    add('wings', 'accent', 0, 1.68 + Y, 0, 'none', 0, 0, 0, { v: ['helm', 1] });
    add('horns', 'crest', 0, 1.68 + Y, 0, 'none', 0, 0, 0, { off: true });
  }
  // Schilde & Waffen
  switch (type) {
    case 'legion':
      if (roman) {
        add('scutum', 'primary', 0.34, 1.02, 0.24, 'shield');
        add('shieldRim', 'secondary', 0.34, 1.02, 0.24, 'shield');
        add('emblemWing', 'accent', 0.34, 1.02, 0.24, 'shield');
        add('boss', 'secondary', 0.34, 1.02, 0.29, 'shield');
        add('sword', 'metal', -0.34, 1.12, 0.1, 'arm');
        add('cape', 'crest', 0, 1.36, -0.2, 'none', 0, 0, 0, { chance: 0.35 });
      } else {
        add('round', 'primary', 0.36, 1.1, 0.22, 'shield');
        add('emblemCross', 'accent', 0.36, 1.1, 0.22, 'shield', 0, 0, 0, { v: ['shield', 0] });
        add('emblemHalf', 'accent', 0.36, 1.1, 0.22, 'shield', 0, 0, 0, { v: ['shield', 1] });
        add('roundRim', 'wood', 0.36, 1.1, 0.22, 'shield');
        add('boss', 'metal', 0.36, 1.1, 0.27, 'shield');
        add('axe', 'metal', -0.34, 1.12, 0.1, 'arm');
      }
      break;
    case 'pike':
      add('buckler', roman ? 'secondary' : 'primary', 0.32, 1.12, 0.2, 'shield');
      if (!roman) add('emblemCross', 'accent', 0.32, 1.12, 0.2, 'shield', 0, 0, 0, { chance: 0.5 });
      add('pike', 'wood', -0.28, 1.2, 0, 'pike');
      break;
    case 'guard':
      add('tower', 'primary', 0.36, 1.05, 0.26, 'shield');
      add('towerRim', 'secondary', 0.36, 1.05, 0.26, 'shield');
      add('emblemWing', 'accent', 0.36, 1.05, 0.27, 'shield');
      add('sword', 'metal', -0.34, 1.12, 0.1, 'arm');
      add('cape', roman ? 'crest' : 'fur', 0, 1.36, -0.2);
      break;
    case 'cavalry':
      add('round', 'primary', 0.36, 1.1 + Y, 0.05, 'shield');
      add('roundRim', 'accent', 0.36, 1.1 + Y, 0.05, 'shield');
      if (!roman) add('emblemHalf', 'accent', 0.36, 1.1 + Y, 0.05, 'shield');
      add('spear', 'wood', -0.32, 1.2 + Y, 0, 'lance');
      add('cape', roman ? 'crest' : 'primary', 0, 1.36 + Y, -0.2);
      break;
  }
  return P;
}

// ---------------- Statische Umgebung ----------------
export class StaticBatch {
  constructor() { this.geos = []; }
  add(geo, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    const g = geo.clone();
    xf(g, x, y, z, rx, ry, rz, sx, sy, sz);
    const n = g.attributes.position.count;
    const c = new Float32Array(n * 3);
    const col = color instanceof THREE.Color ? color : new THREE.Color(color);
    for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    this.geos.push(g);
    return g;
  }
  build(material) {
    if (!this.geos.length) return null;
    const g = mergeGeometries(this.geos, false);
    this.geos = [];
    const mesh = new THREE.Mesh(g, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }
}

export const ENV = {
  cone: (r, h, s = 6) => cone(r, h, s),
  cyl: (a, b, h, s = 6) => cyl(a, b, h, s),
  box,
  ico,
  dode,
};

export function jitterColor(hex, rng, amt = 0.06) {
  const c = new THREE.Color(hex);
  const f = 1 + (rng() - 0.5) * 2 * amt;
  c.r *= f; c.g *= f; c.b *= f;
  return c;
}
