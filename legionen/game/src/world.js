// Aufbau der 3D-Welt aus einer BattleMap
import * as THREE from 'three';
import { BIOMES, FACTIONS } from './data.js';
import { StaticBatch, ENV, jitterColor, prep, xf } from './models.js';
import { G_GRASS, G_DIRT, G_SAND, G_ROCK, G_BED, G_SNOWCAP, G_FLOOR, G_MARSH } from './terrain.js';
import { mulberry32 } from './rng.js';

// Satteldach (Prisma) – First entlang der lokalen X-Achse
function prismRoof(len, width, height) {
  const l = len / 2, w = width / 2;
  const P = [
    [-l, 0, -w], [l, 0, -w], [l, height, 0], [-l, 0, -w], [l, height, 0], [-l, height, 0],
    [-l, 0, w], [-l, height, 0], [l, height, 0], [-l, 0, w], [l, height, 0], [l, 0, w],
    [-l, 0, -w], [-l, height, 0], [-l, 0, w], [l, 0, -w], [l, 0, w], [l, height, 0],
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P.flat(), 3));
  g.computeVertexNormals();
  return g;
}

const _wm = new THREE.Matrix4(), _wq = new THREE.Quaternion(), _we = new THREE.Euler(), _wp = new THREE.Vector3(), _ws = new THREE.Vector3();

export function buildWorld(map, scene) {
  const B = BIOMES[map.biome];
  const rng = mulberry32(map.seed + 99);
  const group = new THREE.Group();
  const vcMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const out = { group, dynamic: [], gateMesh: null, water: null, clouds: [], torches: [], flags: [] };

  // ---------- Terrain ----------
  {
    const { EXT_X, EXT_Z, STEP } = map.extent;
    const nx = map.nx, nz = map.nz;
    const tris = (nx - 1) * (nz - 1) * 2;
    const pos = new Float32Array(tris * 9);
    const col = new Float32Array(tris * 9);
    const H = map.heights, Gd = map.ground;
    const c = new THREE.Color();
    const grass = B.grass.map((h) => new THREE.Color(h));
    const cliff = (B.cliff || B.rock).map((h) => new THREE.Color(h));
    const rock = B.rock.map((h) => new THREE.Color(h));
    const dirt = new THREE.Color(B.dirt), sand = new THREE.Color(B.sand), snow = new THREE.Color(0xf4f7fa);
    const dryTint = new THREE.Color(B.sand).lerp(new THREE.Color(B.dirt), 0.3);
    const forestFloor = new THREE.Color(B.leaf[3] || B.leaf[0]).multiplyScalar(0.7).lerp(new THREE.Color(B.dirt), 0.35);
    const canyonTint = new THREE.Color(B.cliff[0]);
    const marsh = new THREE.Color(B.grass[2]).lerp(new THREE.Color(B.dirt), 0.5).multiplyScalar(0.72);
    let p = 0;
    const N = map.noise;
    const setTri = (ax, az, bx, bz, cx, cz, ga, gb, gc) => {
      const ha = H[az * nx + ax], hb = H[bz * nx + bx], hc = H[cz * nx + cx];
      const X = (i) => -EXT_X + i * STEP, Z = (j) => -EXT_Z + j * STEP;
      const v = [X(ax), ha, Z(az), X(bx), hb, Z(bz), X(cx), hc, Z(cz)];
      pos.set(v, p);
      // Normale
      const ux = v[3] - v[0], uy = v[4] - v[1], uz = v[5] - v[2];
      const wx = v[6] - v[0], wy = v[7] - v[1], wz = v[8] - v[2];
      let ny = uz * wx - ux * wz;
      const nxn = uy * wz - uz * wy, nzn = ux * wy - uy * wx;
      const len = Math.hypot(nxn, ny, nzn) || 1;
      ny = Math.abs(ny / len);
      const mx = (v[0] + v[3] + v[6]) / 3, mz = (v[2] + v[5] + v[8]) / 3, my = (ha + hb + hc) / 3;
      const counts = [0, 0, 0, 0, 0, 0, 0, 0];
      counts[ga]++; counts[gb]++; counts[gc]++;
      let g = counts.indexOf(Math.max(...counts));
      const n1 = N(mx * 0.045, mz * 0.045), n2 = N(mx * 0.014 + 7.3, mz * 0.014 - 3.1), n3 = N(mx * 0.21, mz * 0.21);
      const wl = map.waterLevel;
      if (g === G_SNOWCAP || (my > 22 && map.biome !== 'desert')) c.copy(snow);
      else if (ny < 0.72 || g === G_ROCK) {
        // Gesteinsschichten an Felswänden
        const band = Math.floor(my * 0.85 + n3 * 0.9);
        c.copy(cliff[((band % cliff.length) + cliff.length) % cliff.length]);
        if (ny >= 0.55) c.lerp(rock[(Math.abs(Math.floor(n1 * 7))) % rock.length], 0.55);
        c.multiplyScalar(band % 2 ? 0.93 : 1.05);
        if (map.scenario === 'canyon') c.lerp(canyonTint, 0.35);
        if (ny > 0.64 && g !== G_ROCK) c.lerp(grass[1], 0.3); // bewachsene Kanten
      } else if (g === G_BED) c.copy(sand).multiplyScalar(0.62 + Math.max(0, Math.min(1, (my - wl + 2.2) / 2)) * 0.3);
      else if (g === G_SAND) c.copy(sand).lerp(grass[0], Math.max(0, n3) * 0.25);
      else if (g === G_DIRT) c.copy(dirt).lerp(grass[0], 0.1 + Math.max(0, n3) * 0.25);
      else if (g === G_FLOOR) c.copy(sand).lerp(dirt, 0.35 + n1 * 0.4);
      else if (g === G_MARSH) c.copy(marsh).lerp(grass[0], Math.max(0, n3) * 0.4);
      else {
        // weicher Übergang durch die Graspalette
        const tt = Math.max(0, Math.min(0.999, n1 * 0.85 + 0.5)) * (grass.length - 1);
        const i0 = Math.floor(tt);
        c.copy(grass[i0]).lerp(grass[Math.min(grass.length - 1, i0 + 1)], tt - i0);
        if (n2 > 0.1) c.lerp(dryTint, Math.min(0.28, (n2 - 0.1) * 0.7)); // trockene Flecken
        else if (n2 < -0.15) c.multiplyScalar(1 + (n2 + 0.15) * 0.35); // saftige Senken
        if (map.flagAt(mx, mz) & 1) c.lerp(forestFloor, 0.45); // Waldboden
        if (map.hasWater && my < wl + 0.5) c.lerp(sand, Math.min(1, (wl + 0.5 - my) * 1.4)); // Uferstreifen
        c.multiplyScalar(1 + Math.max(-0.05, Math.min(0.08, my / 60)));
        if (my > 14 && map.biome !== 'desert') c.lerp(snow, Math.min(1, (my - 14) / 8));
      }
      const f = 0.965 + rng() * 0.07;
      c.r *= f; c.g *= f; c.b *= f;
      for (let k = 0; k < 3; k++) { col[p + k * 3] = c.r; col[p + k * 3 + 1] = c.g; col[p + k * 3 + 2] = c.b; }
      p += 9;
    };
    for (let j = 0; j < nz - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        const g00 = Gd[j * nx + i], g10 = Gd[j * nx + i + 1], g01 = Gd[(j + 1) * nx + i], g11 = Gd[(j + 1) * nx + i + 1];
        // Diagonale passend zu map.terrainHeight (00-10-01 / 11-01-10)
        setTri(i, j, i, j + 1, i + 1, j, g00, g01, g10);
        setTri(i + 1, j + 1, i + 1, j, i, j + 1, g11, g10, g01);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, vcMat);
    mesh.receiveShadow = true;
    mesh.name = 'terrain';
    group.add(mesh);
    out.terrain = mesh;
  }

  // ---------- Wasser ----------
  if (map.hasWater) {
    const g = new THREE.PlaneGeometry(230, 170, 70, 52).toNonIndexed();
    g.rotateX(-Math.PI / 2);
    const base = new THREE.Color(B.water);
    if (map.biome === 'winter') base.lerp(new THREE.Color(0xe8f2fa), 0.35);
    const shallow = base.clone().lerp(new THREE.Color(0x3fb8b0), 0.4).multiplyScalar(1.05);
    const deep = base.clone().multiplyScalar(0.62);
    const pos = g.attributes.position;
    const cols = new Float32Array(pos.count * 3);
    const cc = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const depth = map.waterLevel - map.terrainHeight(pos.getX(i), pos.getZ(i));
      const t = Math.max(0, Math.min(1, depth / 2.2));
      cc.copy(shallow).lerp(deep, t);
      if (depth < 0.2) cc.lerp(new THREE.Color(0xdff4f4), 0.14); // leichte Schaumkante
      cols[i * 3] = cc.r; cols[i * 3 + 1] = cc.g; cols[i * 3 + 2] = cc.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const mat = new THREE.MeshPhongMaterial({ vertexColors: true, transparent: true, opacity: 0.84, flatShading: true, shininess: 80, specular: 0x9ab8c8 });
    const w = new THREE.Mesh(g, mat);
    w.position.y = map.waterLevel;
    w.receiveShadow = true;
    group.add(w);
    out.water = w;
    out.waterBase = Float32Array.from(g.attributes.position.array);
  }

  const S = new StaticBatch();
  const stone = map.biome === 'desert' ? 0xd2b48a : 0xb4ada2;
  const stoneDark = map.biome === 'desert' ? 0xb8966a : 0x8f887e;
  const roofOwner = map.castle ? FACTIONS[map.castle.owner].colors.primary : 0x8a3a2a;

  // ---------- Burg ----------
  const merlons = (x0, z0, x1, z1, y, spacing = 1.6, size = 0.8) => {
    const len = Math.hypot(x1 - x0, z1 - z0);
    const n = Math.floor(len / spacing);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      S.add(ENV.box(size, 0.9, size), stoneDark, x0 + (x1 - x0) * t, y + 0.45, z0 + (z1 - z0) * t);
    }
  };
  for (const s of map.structures) {
    const base = map.terrainHeight(s.x, s.z);
    if (s.kind === 'wall') {
      const b = Math.min(base, map.castle ? map.castle.base : base) - 1.5;
      const h = s.h + (map.castle.base - b);
      S.add(ENV.box(s.w, h, s.d), jitterColor(stone, rng, 0.03), s.x, b + h / 2, s.z);
      const top = b + h;
      if (s.w > s.d) { merlons(s.x - s.w / 2, s.z - s.d / 2 + 0.3, s.x + s.w / 2, s.z - s.d / 2 + 0.3, top); merlons(s.x - s.w / 2, s.z + s.d / 2 - 0.3, s.x + s.w / 2, s.z + s.d / 2 - 0.3, top); }
      else { merlons(s.x - s.w / 2 + 0.3, s.z - s.d / 2, s.x - s.w / 2 + 0.3, s.z + s.d / 2, top); merlons(s.x + s.w / 2 - 0.3, s.z - s.d / 2, s.x + s.w / 2 - 0.3, s.z + s.d / 2, top); }
      // Steinbänder
      S.add(ENV.box(s.w + 0.2, 0.35, s.d + 0.2), stoneDark, s.x, b + h - 1.2, s.z);
    } else if (s.kind === 'tower') {
      const b = base - 2;
      const h = s.h + (map.castle.base - b) + 1.5;
      S.add(ENV.cyl(s.r, s.r * 1.12, h, 8), jitterColor(stone, rng, 0.03), s.x, b + h / 2, s.z);
      S.add(ENV.cyl(s.r + 0.35, s.r + 0.35, 0.6, 8), stoneDark, s.x, b + h, s.z);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        S.add(ENV.box(0.8, 0.9, 0.8), stoneDark, s.x + Math.cos(a) * (s.r + 0.1), b + h + 0.75, s.z + Math.sin(a) * (s.r + 0.1), 0, -a);
      }
      S.add(ENV.cone(s.r + 0.6, s.small ? 3 : 4.2, 8), jitterColor(roofOwner, rng, 0.05), s.x, b + h + (s.small ? 2.3 : 2.9), s.z);
      // Fensterschlitze
      for (let i = 0; i < 3; i++) {
        const a = rng() * Math.PI * 2;
        S.add(ENV.box(0.25, 0.9, 0.3), 0x2a2622, s.x + Math.cos(a) * s.r, b + h * (0.5 + i * 0.12), s.z + Math.sin(a) * s.r, 0, -a);
      }
      out.flags.push({ x: s.x, y: b + h + (s.small ? 4 : 5.1), z: s.z, side: map.castle.owner, size: s.small ? 0.7 : 1 });
    } else if (s.kind === 'gate') {
      const g = s.ref;
      const b = map.castle.base;
      // Torbogen über der Öffnung
      S.add(ENV.box(2.6, 2.2, s.w + 1), stone, s.x, b + 6.2, s.z);
      merlons(s.x, s.z - s.w / 2, s.x, s.z + s.w / 2, b + 7.3, 1.4, 0.7);
      S.add(ENV.box(2.8, 0.5, s.w + 1.2), stoneDark, s.x, b + 5.1, s.z);
      // Tor (dynamisch)
      const gate = new THREE.Group();
      const planks = new THREE.MeshLambertMaterial({ color: 0x6b4526, flatShading: true });
      const iron = new THREE.MeshLambertMaterial({ color: 0x3a3632, flatShading: true });
      for (let i = 0; i < 6; i++) {
        const pl = new THREE.Mesh(ENV.box(0.35, 5, s.w / 6 - 0.06), planks);
        pl.position.set(0, 2.5, -s.w / 2 + (i + 0.5) * (s.w / 6));
        pl.castShadow = true;
        gate.add(pl);
      }
      for (const yy of [1.2, 3.8]) {
        const band = new THREE.Mesh(ENV.box(0.45, 0.28, s.w), iron);
        band.position.set(0, yy, 0);
        gate.add(band);
      }
      gate.position.set(s.x, b, s.z);
      group.add(gate);
      out.gateMesh = gate;
    } else if (s.kind === 'keep') {
      const b = base - 1;
      S.add(ENV.box(s.w, s.h, s.d), jitterColor(stone, rng, 0.02), s.x, b + s.h / 2, s.z);
      S.add(ENV.box(s.w + 0.8, 0.6, s.d + 0.8), stoneDark, s.x, b + s.h, s.z);
      merlons(s.x - s.w / 2, s.z - s.d / 2, s.x + s.w / 2, s.z - s.d / 2, b + s.h + 0.3, 1.5);
      merlons(s.x - s.w / 2, s.z + s.d / 2, s.x + s.w / 2, s.z + s.d / 2, b + s.h + 0.3, 1.5);
      merlons(s.x - s.w / 2, s.z - s.d / 2, s.x - s.w / 2, s.z + s.d / 2, b + s.h + 0.3, 1.5);
      merlons(s.x + s.w / 2, s.z - s.d / 2, s.x + s.w / 2, s.z + s.d / 2, b + s.h + 0.3, 1.5);
      S.add(ENV.cyl(1.8, 1.8, 4, 8), stone, s.x + s.w / 2 - 1.5, b + s.h + 2, s.z - s.d / 2 + 1.5);
      S.add(ENV.cone(2.4, 3.4, 8), roofOwner, s.x + s.w / 2 - 1.5, b + s.h + 5.7, s.z - s.d / 2 + 1.5);
      S.add(ENV.box(1.6, 2.6, 0.3), 0x3a2a1c, s.x - map.castle.face * -s.w / 2, b + 1.3, s.z, 0, Math.PI / 2);
      for (let i = 0; i < 4; i++) S.add(ENV.box(0.3, 1.2, 0.6), 0x2a2622, s.x + (i % 2 ? 1 : -1) * s.w / 2, b + s.h * 0.7, s.z + (i < 2 ? -2 : 2));
      out.flags.push({ x: s.x, y: b + s.h + 6, z: s.z, side: map.castle.owner, size: 1.8, big: true });
      S.add(ENV.cyl(0.08, 0.08, 6, 4), 0x5a4a3a, s.x, b + s.h + 3, s.z);
    } else if (s.kind === 'house') {
      // Fachwerkhaus mit Satteldach
      const roofs = [0x9a4a32, 0xb8964e, 0x5d6878];
      const wallC = map.biome === 'desert' ? 0xe0c898 : jitterColor(0xeee4cc, rng, 0.04);
      const beam = 0x5a3a22;
      const sn = Math.sin(s.rot), cs = Math.cos(s.rot);
      S.add(ENV.box(5, 3, 4), wallC, s.x, base + 1.5, s.z, 0, s.rot);
      S.add(ENV.box(5.3, 0.5, 4.3), 0x7a7066, s.x, base + 0.2, s.z, 0, s.rot);
      for (const o of [-2.45, 2.45]) S.add(ENV.box(0.22, 3, 0.22), beam, s.x + cs * o + sn * 2.02, base + 1.5, s.z - sn * o + cs * 2.02);
      S.add(ENV.box(5.05, 0.2, 0.2), beam, s.x + sn * 2.03, base + 2.2, s.z + cs * 2.03, 0, s.rot);
      S.add(ENV.box(0.2, 0.2, 2.9), beam, s.x + sn * 2.04, base + 1.4, s.z + cs * 2.04, 0.9, s.rot + Math.PI / 2);
      S.add(prismRoof(6, 5.2, 2.2), map.biome === 'winter' ? 0xf2f6f9 : roofs[s.roof ?? 0], s.x, base + 3, s.z, 0, s.rot);
      S.add(ENV.box(0.95, 1.7, 0.2), beam, s.x + sn * 2.06, base + 0.85, s.z + cs * 2.06, 0, s.rot);
      for (const o of [-1.5, 1.5]) S.add(ENV.box(0.7, 0.6, 0.1), 0x8fb8d8, s.x + cs * o + sn * 2.06, base + 2.0, s.z - sn * o + cs * 2.06, 0, s.rot);
      S.add(ENV.box(0.5, 1.6, 0.5), 0x8a8078, s.x - cs * 1.5, base + 4.6, s.z + sn * 1.5);
    } else if (s.kind === 'well') {
      S.add(ENV.cyl(1.1, 1.2, 1, 8), stone, s.x, base + 0.5, s.z);
      S.add(ENV.cyl(0.8, 0.8, 0.1, 8), 0x3d6f9a, s.x, base + 0.95, s.z);
      S.add(ENV.box(0.15, 2.2, 0.15), 0x6b4a30, s.x - 1, base + 1.6, s.z);
      S.add(ENV.box(0.15, 2.2, 0.15), 0x6b4a30, s.x + 1, base + 1.6, s.z);
      S.add(ENV.cone(1.7, 1, 4), 0x9a4a32, s.x, base + 3, s.z, 0, Math.PI / 4);
    }
  }

  // ---------- Hecken, Mauern, Felsnadeln, Marktstände ----------
  for (const s2 of map.structures) {
    if (s2.kind === 'hedge') {
      const n = Math.ceil(s2.len / 1.2);
      for (let i = 0; i <= n; i++) {
        const t = i / n - 0.5;
        const x = s2.x + Math.cos(s2.rot) * t * s2.len, z = s2.z + Math.sin(s2.rot) * t * s2.len;
        const h = map.terrainHeight(x, z);
        if (s2.style === 'hedge') {
          S.add(ENV.ico(0.85 + rng() * 0.25, 0), jitterColor(B.leaf[(rng() * B.leaf.length) | 0], rng, 0.1).multiplyScalar(0.8), x, h + 0.75, z, rng() * 3, rng() * 3, 0, 1, 1.05, 1);
        } else if (s2.style === 'wall') {
          S.add(ENV.box(1.3, 1.0, 0.7), jitterColor(stone, rng, 0.07), x, h + 0.45, z, 0, -s2.rot);
          S.add(ENV.box(1.25, 0.18, 0.85), stoneDark, x, h + 1.0, z, 0, -s2.rot);
        } else {
          const hh = 0.6 + rng() * 2.2;
          if (rng() < 0.8) S.add(ENV.box(1.25, hh, 0.8), jitterColor(stoneDark, rng, 0.08), x, h + hh / 2 - 0.1, z, 0, -s2.rot);
          else S.add(ENV.dode(0.5), stoneDark, x, h + 0.2, z, rng() * 3);
        }
      }
    } else if (s2.kind === 'spire') {
      const h = map.terrainHeight(s2.x, s2.z);
      const rc = jitterColor(B.cliff[0], rng, 0.06);
      S.add(ENV.cyl(s2.r * 0.35, s2.r, s2.h, 6), rc, s2.x, h + s2.h / 2 - 0.3, s2.z, (rng() - 0.5) * 0.1, rng() * 3, (rng() - 0.5) * 0.1);
      S.add(ENV.cyl(s2.r * 0.25, s2.r * 0.4, s2.h * 0.25, 5), rc.clone().multiplyScalar(1.08), s2.x, h + s2.h + s2.h * 0.1, s2.z, 0, rng() * 3);
      for (let i = 0; i < 4; i++) { const a = rng() * 6.28; S.add(ENV.dode(0.4 + rng() * 0.5), rc.clone().multiplyScalar(0.9), s2.x + Math.cos(a) * (s2.r + 0.6), h + 0.2, s2.z + Math.sin(a) * (s2.r + 0.6), rng() * 3); }
    }
  }
  for (const st of map.decor.stalls || []) {
    const h = map.terrainHeight(st.x, st.z);
    const cols = [0xc4302b, 0x2f63c4, 0xe3b441, 0x4f8f3a];
    S.add(ENV.box(2.2, 0.9, 1.2), 0x7b5a3a, st.x, h + 0.45, st.z, 0, st.rot);
    for (const [ox, oz] of [[-1, -0.55], [1, -0.55], [-1, 0.55], [1, 0.55]]) {
      const x = st.x + Math.cos(st.rot) * ox + Math.sin(st.rot) * oz, z = st.z - Math.sin(st.rot) * ox + Math.cos(st.rot) * oz;
      S.add(ENV.box(0.1, 2.2, 0.1), 0x5a3a22, x, h + 1.1, z);
    }
    S.add(ENV.box(2.6, 0.1, 1.6), cols[st.col], st.x, h + 2.25, st.z, 0.12, st.rot);
    for (let i = 0; i < 4; i++) S.add(ENV.ico(0.16, 0), [0xe8a04c, 0xc4302b, 0x7fbf4a, 0xf2e14c][i], st.x - 0.7 + i * 0.45, h + 1.0, st.z, 0, st.rot);
  }

  // ---------- Brücken ----------
  for (const b of map.bridges) {
    const ang = Math.atan2(b.sin, b.cos);
    const n = 12;
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n - 0.5;
      const lx = t * b.len;
      const y = b.y + (1 - (lx / (b.len / 2)) ** 2) * b.arch;
      const x = b.x + b.cos * lx, z = b.z + b.sin * lx;
      const col = b.wood ? jitterColor(0x7a5230, rng, 0.08) : jitterColor(stone, rng, 0.04);
      S.add(ENV.box(b.len / n + 0.05, b.wood ? 0.35 : 0.8, b.width), col, x, y - (b.wood ? 0.18 : 0.4), z, 0, -ang);
      if (!b.wood) {
        for (const sd of [-1, 1]) {
          S.add(ENV.box(b.len / n + 0.05, 0.7, 0.35), stoneDark, x - b.sin * sd * (b.width / 2), y + 0.35, z + b.cos * sd * (b.width / 2), 0, -ang);
        }
      } else {
        for (const sd of [-1, 1]) S.add(ENV.box(0.18, 1.1, 0.18), 0x5a3a22, x - b.sin * sd * (b.width / 2), y + 0.5, z + b.cos * sd * (b.width / 2));
      }
    }
    if (!b.wood) {
      // Pfeiler
      for (const t of [-0.2, 0.2]) {
        const x = b.x + b.cos * t * b.len, z = b.z + b.sin * t * b.len;
        S.add(ENV.box(1.6, 3, b.width - 0.4), stoneDark, x, -1.2, z, 0, -ang);
      }
    } else {
      // Ketten der Zugbrücke
      for (const sd of [-1, 1]) {
        S.add(ENV.cyl(0.05, 0.05, 7, 3), 0x2a2622, b.x - map.castle.face * 3, b.y + 3.2, b.z + sd * (b.width / 2 - 0.2), 0, 0, map.castle.face * 0.9);
      }
    }
  }

  // ---------- Bäume ----------
  const leaf = B.leaf, pine = B.pine;
  for (const t of map.decor.trees) {
    const h = map.terrainHeight(t.x, t.z);
    const s = t.s;
    switch (t.kind) {
      case 'pine': {
        const pc = jitterColor(pine[(rng() * pine.length) | 0], rng, 0.08);
        S.add(ENV.cyl(0.18 * s, 0.28 * s, 1.6 * s, 5), B.trunk, t.x, h + 0.8 * s, t.z);
        S.add(ENV.cone(1.7 * s, 2.4 * s, 7), pc, t.x, h + 2.4 * s, t.z, 0, t.rot);
        S.add(ENV.cone(1.35 * s, 2.1 * s, 7), pc.clone().multiplyScalar(1.07), t.x, h + 3.5 * s, t.z, 0, t.rot + 0.4);
        S.add(ENV.cone(0.9 * s, 1.8 * s, 7), pc.clone().multiplyScalar(1.13), t.x, h + 4.5 * s, t.z, 0, t.rot + 0.8);
        if (map.biome === 'winter') S.add(ENV.cone(0.55 * s, 0.8 * s, 7), 0xf6f9fb, t.x, h + 5.1 * s, t.z, 0, t.rot);
        break;
      }
      case 'oak': {
        const lc = jitterColor(leaf[(rng() * leaf.length) | 0], rng, 0.08);
        S.add(ENV.cyl(0.22 * s, 0.34 * s, 2.2 * s, 5), B.trunk, t.x, h + 1.1 * s, t.z);
        S.add(ENV.ico(1.5 * s, 0), lc, t.x, h + 3.2 * s, t.z, t.rot, t.rot);
        S.add(ENV.ico(1.0 * s, 0), lc.clone().multiplyScalar(1.1), t.x + 0.9 * s, h + 2.8 * s, t.z + 0.4 * s, t.rot);
        S.add(ENV.ico(1.05 * s, 0), lc.clone().multiplyScalar(0.92), t.x - 0.7 * s, h + 3.0 * s, t.z - 0.6 * s, t.rot);
        break;
      }
      case 'birch': {
        const lc = jitterColor(leaf[(rng() * leaf.length) | 0], rng, 0.1).multiplyScalar(1.1);
        S.add(ENV.cyl(0.14 * s, 0.18 * s, 3 * s, 5), 0xe8e4dc, t.x, h + 1.5 * s, t.z);
        S.add(ENV.ico(1.0 * s, 0), lc, t.x, h + 3.4 * s, t.z, t.rot, 0, 0, 0.9, 1.4, 0.9);
        break;
      }
      case 'bare': {
        S.add(ENV.cyl(0.14 * s, 0.26 * s, 3 * s, 5), 0x4a3a2e, t.x, h + 1.5 * s, t.z);
        for (let i = 0; i < 3; i++) S.add(ENV.cyl(0.05 * s, 0.09 * s, 1.4 * s, 4), 0x4a3a2e, t.x, h + (2.2 + i * 0.4) * s, t.z, 0.8, t.rot + i * 2.1, 0);
        break;
      }
      case 'palm': {
        let px = t.x, py = h, pz = t.z;
        const lean = 0.25;
        for (let i = 0; i < 5; i++) {
          S.add(ENV.cyl(0.16 * s, 0.2 * s, 0.9 * s, 5), jitterColor(B.trunk, rng, 0.1), px, py + 0.45 * s, pz, 0, 0, lean * (i / 5));
          px -= Math.sin(lean * (i / 5)) * 0.9 * s; py += 0.88 * s;
        }
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 + t.rot;
          S.add(ENV.box(0.5 * s, 0.06, 2.2 * s), jitterColor(leaf[i % leaf.length], rng, 0.08), px + Math.cos(a) * 0.9 * s, py - 0.2 * s, pz + Math.sin(a) * 0.9 * s, 0.35, -a + Math.PI / 2, 0);
        }
        break;
      }
      case 'cactus': {
        const cc = jitterColor(0x5f8a3a, rng, 0.08);
        S.add(ENV.cyl(0.3 * s, 0.34 * s, 2.4 * s, 6), cc, t.x, h + 1.2 * s, t.z);
        S.add(ENV.cyl(0.18 * s, 0.2 * s, 1 * s, 6), cc, t.x + 0.55 * s, h + 1.4 * s, t.z);
        S.add(ENV.cyl(0.18 * s, 0.2 * s, 0.9 * s, 6), cc, t.x - 0.5 * s, h + 1.8 * s, t.z);
        break;
      }
    }
  }
  for (const r of map.decor.rocks) {
    const h = map.terrainHeight(r.x, r.z);
    const rc = jitterColor(B.rock[(rng() * B.rock.length) | 0], rng, 0.06);
    S.add(ENV.dode(r.s), rc, r.x, h + r.s * 0.3, r.z, r.rot, r.rot * 2, 0, 1.2, r.big ? 1.5 : 0.8, 1);
    if (r.big) S.add(ENV.dode(r.s * 0.6), rc.clone().multiplyScalar(0.9), r.x + r.s * 0.8, h + r.s * 0.2, r.z + 0.4, r.rot);
  }
  for (const b of map.decor.bushes) {
    const h = map.terrainHeight(b.x, b.z);
    S.add(ENV.ico(0.7 * b.s, 0), jitterColor(leaf[(rng() * leaf.length) | 0], rng, 0.1).multiplyScalar(0.85), b.x, h + 0.35 * b.s, b.z, rng() * 3, 0, 0, 1.2, 0.8, 1.2);
  }
  const tuftCol = new THREE.Color(B.grass[2]).multiplyScalar(0.85);
  for (const t of map.decor.tufts) {
    const h = map.terrainHeight(t.x, t.z);
    for (let i = 0; i < 3; i++) S.add(ENV.cone(0.09 * t.s, 0.6 * t.s, 3), tuftCol, t.x + (i - 1) * 0.12, h + 0.25 * t.s, t.z + (i % 2) * 0.1, (i - 1) * 0.3, t.rot);
  }
  for (const f of map.decor.flowers) {
    const h = map.terrainHeight(f.x, f.z);
    for (let i = 0; i < 4; i++) S.add(ENV.ico(0.12, 0), B.flower[f.c], f.x + (rng() - 0.5) * 1.2, h + 0.12, f.z + (rng() - 0.5) * 1.2);
  }
  for (const m of map.decor.menhirs) {
    const h = map.terrainHeight(m.x, m.z);
    if (m.altar) {
      S.add(ENV.box(3, 0.8, 1.8), 0x9c978f, m.x, h + 0.4, m.z, 0, 0.3);
      continue;
    }
    if (m.fallen) S.add(ENV.box(1.1, m.h, 0.7), jitterColor(0x8e8a84, rng), m.x, h + 0.35, m.z, Math.PI / 2 - 0.1, m.rot);
    else S.add(ENV.box(1.1, m.h, 0.7), jitterColor(0x8e8a84, rng), m.x, h + m.h / 2 - 0.2, m.z, (rng() - 0.5) * 0.12, -m.rot, (rng() - 0.5) * 0.12, 1, 1, 1);
  }
  for (const ru of map.decor.ruins) {
    const h = map.terrainHeight(ru.x, ru.z);
    S.add(ENV.cyl(ru.r, ru.r * 1.1, 4.5, 8), jitterColor(stone, rng), ru.x, h + 2.2, ru.z);
    S.add(ENV.cyl(ru.r * 0.7, ru.r * 0.8, 6.5, 6), jitterColor(stoneDark, rng), ru.x + 0.4, h + 3.5, ru.z - 0.3, 0.1);
    for (let i = 0; i < 6; i++) S.add(ENV.dode(0.5 + rng() * 0.5), stoneDark, ru.x + (rng() - 0.5) * 7, h + 0.2, ru.z + (rng() - 0.5) * 7, rng() * 3);
  }
  for (const f of map.decor.fences) {
    for (let i = 0; i <= f.len; i++) {
      const x = f.x + Math.cos(f.rot) * i * 1.6, z = f.z + Math.sin(f.rot) * i * 1.6;
      const h = map.terrainHeight(x, z);
      S.add(ENV.box(0.16, 1.1, 0.16), 0x6b4a30, x, h + 0.5, z);
      if (i < f.len) {
        S.add(ENV.box(1.6, 0.1, 0.08), 0x7b5a3a, x + Math.cos(f.rot) * 0.8, h + 0.75, z + Math.sin(f.rot) * 0.8, 0, -f.rot);
        S.add(ENV.box(1.6, 0.1, 0.08), 0x7b5a3a, x + Math.cos(f.rot) * 0.8, h + 0.4, z + Math.sin(f.rot) * 0.8, 0, -f.rot);
      }
    }
  }
  // Schilf, Seerosen, Stämme, Pilze
  const reedCol = new THREE.Color(map.biome === 'winter' ? 0xb8a888 : map.biome === 'autumn' ? 0xa89a52 : 0x6f8f3e);
  for (const r of map.decor.reeds) {
    const h = map.terrainHeight(r.x, r.z);
    for (let i = 0; i < 4; i++) {
      const ox = (rng() - 0.5) * 0.8, oz = (rng() - 0.5) * 0.8, hh = (1 + rng() * 0.7) * r.s;
      S.add(ENV.cyl(0.03, 0.05, hh, 3), reedCol, r.x + ox, h + hh / 2, r.z + oz, (rng() - 0.5) * 0.3, 0, (rng() - 0.5) * 0.3);
      if (i === 0) S.add(ENV.cyl(0.07, 0.07, 0.3, 4), 0x5a3a22, r.x + ox, h + hh + 0.1, r.z + oz);
    }
  }
  for (const l of map.decor.lilies) {
    S.add(ENV.cyl(0.6 * l.s, 0.6 * l.s, 0.04, 7), jitterColor(0x4f8f3a, rng, 0.08), l.x, map.waterLevel + 0.1, l.z, 0, rng() * 6);
    if (l.flower) S.add(ENV.ico(0.16, 0), rng() < 0.5 ? 0xf6f0f8 : 0xf28ab8, l.x + 0.2, map.waterLevel + 0.22, l.z);
  }
  for (const lg of map.decor.logs) {
    const h = map.terrainHeight(lg.x, lg.z);
    S.add(ENV.cyl(0.32, 0.36, lg.len, 6), 0x5e4330, lg.x, h + 0.3, lg.z, 0, lg.rot, Math.PI / 2);
    S.add(ENV.cyl(0.26, 0.26, 0.05, 6), 0xb89468, lg.x + Math.cos(lg.rot) * lg.len / 2, h + 0.3, lg.z - Math.sin(lg.rot) * lg.len / 2, 0, lg.rot, Math.PI / 2);
    S.add(ENV.ico(0.35, 0), 0x4f7a3a, lg.x, h + 0.55, lg.z, 0, 0, 0, 1.4, 0.5, 1);
  }
  for (const m of map.decor.mushrooms) {
    const h = map.terrainHeight(m.x, m.z);
    for (let i = 0; i < 3; i++) {
      const ox = (rng() - 0.5) * 0.7, oz = (rng() - 0.5) * 0.7, s2 = m.s * (0.6 + rng() * 0.5);
      S.add(ENV.cyl(0.05 * s2, 0.07 * s2, 0.3 * s2, 5), 0xefe6d2, m.x + ox, h + 0.15 * s2, m.z + oz);
      S.add(ENV.cone(0.2 * s2, 0.16 * s2, 6), m.red ? 0xc4302b : 0xa8804e, m.x + ox, h + 0.36 * s2, m.z + oz);
    }
  }
  // Felder
  const fieldCols = map.biome === 'winter' ? [[0xe8eef3, 0xd5dde4], [0xdfe7ee, 0xc9d3dc], [0xe4ebf0, 0xb9a898], [0xf0f4f7, 0xdbe3ea]]
    : map.biome === 'autumn' ? [[0xd9a93a, 0xc4922e], [0x8a6a3a, 0x6f5230], [0xb8963a, 0xa27f30], [0x9aa04c, 0x86903f]]
    : [[0xe6c65a, 0xd4b04a], [0x7aa84a, 0x6a963e], [0x8a6a42, 0x74583a], [0xb6c85a, 0x9fb44a]];
  for (const f of map.decor.fields) {
    const [ca, cb] = fieldCols[f.kind];
    const rows = Math.max(4, Math.round(f.d / 1.1));
    const cs = Math.cos(f.rot), sn = Math.sin(f.rot);
    for (let i = 0; i < rows; i++) {
      const o = (i - (rows - 1) / 2) * (f.d / rows);
      const x = f.x - sn * o, z = f.z + cs * o;
      const h = map.terrainHeight(x, z);
      S.add(ENV.box(f.w, 0.35, f.d / rows * 0.82), i % 2 ? ca : cb, x, h + 0.05, z, 0, -f.rot);
    }
    for (const sd of [-1, 1]) {
      for (let i = 0; i <= 4; i++) {
        const u = (i / 4 - 0.5) * f.w;
        const x = f.x + cs * u - sn * sd * (f.d / 2 + 0.6), z = f.z + sn * u + cs * sd * (f.d / 2 + 0.6);
        S.add(ENV.box(0.15, 0.9, 0.15), 0x6b4a30, x, map.terrainHeight(x, z) + 0.4, z);
      }
      const x = f.x - sn * sd * (f.d / 2 + 0.6), z = f.z + cs * sd * (f.d / 2 + 0.6);
      S.add(ENV.box(f.w, 0.08, 0.08), 0x7b5a3a, x, map.terrainHeight(x, z) + 0.65, z, 0, -f.rot);
    }
  }
  for (const fm of map.decor.farms) {
    const h = map.terrainHeight(fm.x, fm.z);
    S.add(ENV.box(4.6, 2.6, 3.4), 0xefe4cc, fm.x, h + 1.3, fm.z, 0, -fm.rot);
    S.add(ENV.cone(3.6, 2.2, 4), 0x9a4a32, fm.x, h + 3.7, fm.z, 0, Math.PI / 4 - fm.rot, 0, 1, 1, 0.8);
    S.add(ENV.box(0.5, 1.4, 0.5), 0x8a8078, fm.x + 1.2, h + 3.8, fm.z + 0.3);
    S.add(ENV.box(3.2, 1.6, 2.6), 0x8a5a32, fm.x + Math.cos(fm.rot) * 4.2, h + 0.8, fm.z + Math.sin(fm.rot) * 4.2, 0, -fm.rot);
    S.add(ENV.cone(2.5, 1.4, 4), 0x6b3a26, fm.x + Math.cos(fm.rot) * 4.2, h + 2.3, fm.z + Math.sin(fm.rot) * 4.2, 0, Math.PI / 4 - fm.rot);
    for (let i = 0; i < 3; i++) S.add(ENV.cyl(0.5, 0.5, 0.8, 6), 0xd9b85a, fm.x - 3 + i * 1.2, h + 0.4, fm.z - 3, Math.PI / 2, i);
  }
  if (map.decor.mill) {
    const m = map.decor.mill;
    const h = map.terrainHeight(m.x, m.z);
    S.add(ENV.cyl(1.4, 2.1, 7, 8), 0xefe4cc, m.x, h + 3.5, m.z);
    S.add(ENV.cone(2.0, 2.6, 8), 0x9a4a32, m.x, h + 8.3, m.z);
    S.add(ENV.box(1, 1.8, 0.3), 0x5a3a22, m.x + Math.sin(m.rot) * 2, h + 0.9, m.z + Math.cos(m.rot) * 2, 0, m.rot);
    const blades = new THREE.Group();
    const bm = new THREE.MeshLambertMaterial({ color: 0xe8dcc0, flatShading: true });
    const wood = new THREE.MeshLambertMaterial({ color: 0x6b4a30, flatShading: true });
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Group();
      const beam = new THREE.Mesh(ENV.box(0.2, 5.2, 0.15), wood); beam.position.y = 2.6;
      const sail = new THREE.Mesh(ENV.box(1.3, 3.8, 0.06), bm); sail.position.set(0.72, 3.2, 0);
      arm.add(beam, sail);
      arm.rotation.z = i * Math.PI / 2;
      blades.add(arm);
    }
    blades.position.set(m.x + Math.sin(m.rot) * 2.1, h + 6.6, m.z + Math.cos(m.rot) * 2.1);
    blades.rotation.y = m.rot;
    blades.traverse((o) => { o.castShadow = true; });
    const spin = new THREE.Group();
    spin.add(blades);
    group.add(spin);
    out.mill = blades;
  }

  // Zelte der Lager
  for (const t of map.decor.tents) {
    const h = map.terrainHeight(t.x, t.z);
    const F = FACTIONS[t.side].colors;
    const s = t.big ? 1.4 : 1;
    S.add(ENV.cone(2.3 * s, 2.8 * s, t.big ? 8 : 4), jitterColor(t.big ? F.primary : F.cloth === 0x3a3a40 ? 0x54545c : 0xefe6d2, rng, 0.04), t.x, h + 1.35 * s, t.z, 0, t.rot + Math.PI / 4);
    S.add(ENV.cyl(0.05, 0.05, 1.4, 3), 0x5a4a3a, t.x, h + 3 * s, t.z);
    S.add(ENV.box(0.7, 0.45, 0.04), F.primary, t.x + 0.35, h + 3.4 * s, t.z);
  }
  // Lagerfeuer
  for (const cp of map.camps) {
    if (!cp) continue;
    const x = cp.x + (cp.x < 0 ? -5 : 5), z = cp.z;
    const h = map.terrainHeight(x, z);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      S.add(ENV.dode(0.28), 0x6d6861, x + Math.cos(a) * 0.9, h + 0.1, z + Math.sin(a) * 0.9);
    }
    out.torches.push({ x, y: h + 0.3, z, fire: true });
  }
  for (const t of map.decor.torches) out.torches.push(t);

  const statics = S.build(vcMat);
  if (statics) group.add(statics);

  // ---------- Flaggen ----------
  const flagMats = FACTIONS.map((f) => new THREE.MeshLambertMaterial({ color: f.colors.banner, side: THREE.DoubleSide, flatShading: true }));
  for (const f of out.flags) {
    const geo = new THREE.PlaneGeometry(2.2 * f.size, 1.3 * f.size, 4, 1);
    geo.translate(1.1 * f.size, 0, 0);
    const m = new THREE.Mesh(geo, flagMats[f.side]);
    m.position.set(f.x, f.y, f.z);
    m.userData.base = Float32Array.from(geo.attributes.position.array);
    m.castShadow = true;
    group.add(m);
    const pole = new THREE.Mesh(ENV.cyl(0.06, 0.06, 1.6 * f.size + 1, 4), new THREE.MeshLambertMaterial({ color: 0x4a3a2a }));
    pole.position.set(f.x, f.y - 0.3, f.z);
    group.add(pole);
    f.mesh = m;
  }

  // ---------- Feuer ----------
  const fireMat = new THREE.MeshBasicMaterial({ color: 0xffa23a });
  const fireMat2 = new THREE.MeshBasicMaterial({ color: 0xffe07a });
  for (const t of out.torches) {
    const g = new THREE.Group();
    const f1 = new THREE.Mesh(ENV.cone(t.fire ? 0.6 : 0.22, t.fire ? 1.4 : 0.6, 5), fireMat);
    const f2 = new THREE.Mesh(ENV.cone(t.fire ? 0.35 : 0.12, t.fire ? 0.9 : 0.4, 5), fireMat2);
    f1.position.y = t.fire ? 0.6 : 0.3; f2.position.y = t.fire ? 0.5 : 0.26;
    g.add(f1, f2);
    if (!t.fire) {
      const stick = new THREE.Mesh(ENV.cyl(0.06, 0.06, 0.9, 4), new THREE.MeshLambertMaterial({ color: 0x4a3a2a }));
      stick.position.y = -0.4;
      g.add(stick);
    }
    g.position.set(t.x, t.y, t.z);
    group.add(g);
    t.mesh = g;
  }

  // ---------- Wolken ----------
  const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, emissive: 0x333333 });
  for (let i = 0; i < 9; i++) {
    const c = new THREE.Group();
    const n = 3 + ((rng() * 3) | 0);
    for (let k = 0; k < n; k++) {
      const m = new THREE.Mesh(ENV.ico(2.5 + rng() * 2.5, 0), cloudMat);
      m.position.set(k * 3.2 - n * 1.5, rng() * 1.5, (rng() - 0.5) * 3);
      m.scale.y = 0.6;
      c.add(m);
    }
    // nur über dem Randgebirge, damit das Schlachtfeld frei bleibt
    const north = i % 2 === 0;
    c.position.set((rng() - 0.5) * 240, 34 + rng() * 12, (north ? -1 : 1) * (72 + rng() * 25));
    c.userData.speed = 0.6 + rng() * 0.8;
    group.add(c);
    out.clouds.push(c);
  }

  // ---------- Vogelschwärme ----------
  const birdMat = new THREE.MeshBasicMaterial({ color: map.biome === 'winter' ? 0x3a3f48 : 0x2a2a30, side: THREE.DoubleSide, fog: true });
  const wingGeo = new THREE.BufferGeometry();
  wingGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.3, 0, 0, -0.3, 1.1, 0, 0], 3));
  out.birds = [];
  for (let f = 0; f < 2; f++) {
    const fa = rng() * 6.28;
    const flock = { cx: Math.cos(fa) * 80, cz: Math.sin(fa) * 58, r: 14 + rng() * 12, y: 16 + rng() * 8, sp: (0.12 + rng() * 0.1) * (rng() < 0.5 ? 1 : -1), ph: rng() * 6, list: [] };
    for (let i = 0; i < 6; i++) {
      const b = new THREE.Group();
      const l = new THREE.Mesh(wingGeo, birdMat), r2 = new THREE.Mesh(wingGeo, birdMat);
      r2.scale.x = -1;
      b.add(l, r2);
      b.scale.setScalar(0.55);
      b.userData = { l, r: r2, off: [(rng() - 0.5) * 6, (rng() - 0.5) * 2, (rng() - 0.5) * 6], fl: rng() * 6 };
      group.add(b);
      flock.list.push(b);
    }
    out.birds.push(flock);
  }

  // ---------- Wetter-Partikel ----------
  const W = { summer: { n: 70, col: 0xfff2a0, size: 0.1, fall: -0.15, drift: 0.6, flutter: 1.2 },
    autumn: { n: 160, col: 0xd9772a, size: 0.22, fall: 1.1, drift: 1.4, flutter: 2.5, leaf: true },
    winter: { n: 420, col: 0xffffff, size: 0.13, fall: 2.2, drift: 0.6, flutter: 0.8 },
    desert: { n: 180, col: 0xe8cf9a, size: 0.12, fall: 0.1, drift: 5, flutter: 0.4 },
    spring: { n: 140, col: 0xf7c9dc, size: 0.18, fall: 0.7, drift: 1.2, flutter: 2.2, leaf: true, petals: true },
    highland: { n: 380, col: 0xc8d6e2, size: 0.05, fall: 16, drift: 2, flutter: 0.2, rain: true } }[map.biome];
  if (W) {
    const geo = W.rain ? new THREE.BoxGeometry(0.03, 1.1, 0.03) : W.leaf ? new THREE.PlaneGeometry(W.size * 2, W.size * 1.3) : new THREE.IcosahedronGeometry(W.size, 0);
    const mat = new THREE.MeshBasicMaterial({ color: W.col, side: THREE.DoubleSide, transparent: map.biome === 'desert' || W.rain, opacity: W.rain ? 0.45 : 0.6 });
    const mesh = new THREE.InstancedMesh(geo, mat, W.n);
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const parts = [];
    for (let i = 0; i < W.n; i++) parts.push({ x: (rng() - 0.5) * 90, y: rng() * 40, z: (rng() - 0.5) * 70, p: rng() * 6, s: 0.7 + rng() * 0.6 });
    if (W.leaf) {
      const leafCols = (W.petals ? [0xf7c9dc, 0xf2a6c8, 0xffffff] : B.leaf).map((c) => new THREE.Color(c));
      for (let i = 0; i < W.n; i++) mesh.setColorAt(i, leafCols[i % leafCols.length]);
    }
    group.add(mesh);
    out.weather = { mesh, parts, W };
  }

  scene.add(group);
  return out;
}

// Laufende Animation der Umgebung
export function animateWorld(world, t, dt, map) {
  if (world.water) {
    const pos = world.water.geometry.attributes.position;
    const a = pos.array, b = world.waterBase;
    for (let i = 0; i < a.length; i += 3) {
      const x = b[i], z = b[i + 2];
      a[i + 1] = Math.sin(x * 0.35 + t * 1.3) * 0.08 + Math.cos(z * 0.4 + t * 1.1) * 0.08;
    }
    pos.needsUpdate = true;
    world.water.geometry.computeVertexNormals();
  }
  if (world.mill) world.mill.rotation.z += dt * 0.8;
  if (world.birds) {
    for (const f of world.birds) {
      f.ph += f.sp * dt;
      const bx = f.cx + Math.cos(f.ph) * f.r, bz = f.cz + Math.sin(f.ph) * f.r;
      const yaw = Math.atan2(-Math.sin(f.ph) * f.sp, Math.cos(f.ph) * f.sp);
      for (const b of f.list) {
        const u = b.userData;
        b.position.set(bx + u.off[0], f.y + u.off[1] + Math.sin(t * 0.7 + u.fl) * 0.6, bz + u.off[2]);
        b.rotation.y = yaw + Math.PI / 2 * Math.sign(f.sp);
        const flap = Math.sin(t * 9 + u.fl) * 0.6;
        u.l.rotation.z = flap; u.r.rotation.z = -flap;
      }
    }
  }
  if (world.weather && world.camTarget) {
    const { mesh, parts, W } = world.weather;
    const cx = world.camTarget.x, cz = world.camTarget.z;
    for (let i = 0; i < parts.length; i++) {
      const q = parts[i];
      q.y -= W.fall * q.s * dt;
      q.x += (W.drift + Math.sin(t * W.flutter + q.p) * W.drift * 0.6) * dt;
      q.z += Math.cos(t * W.flutter * 0.8 + q.p) * 0.5 * dt;
      if (q.y < 0) q.y += 40;
      if (q.y > 40) q.y -= 40;
      // um die Kamera herum wiederholen
      let rx = ((q.x - cx) % 90 + 135) % 90 - 45, rz = ((q.z - cz) % 70 + 105) % 70 - 35;
      const x = cx + rx, z = cz + rz;
      const gy = map.terrainHeight(x, z);
      if (W.rain) _wq.setFromEuler(_we.set(0, 0, 0.15)); else _wq.setFromEuler(_we.set(t * 1.5 + q.p, q.p, t * W.flutter + q.p));
      _wm.compose(_wp.set(x, gy + q.y * 0.9 + 0.3, z), _wq, _ws.set(q.s, q.s, q.s));
      mesh.setMatrixAt(i, _wm);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }
  for (const c of world.clouds) {
    c.position.x += c.userData.speed * dt;
    if (c.position.x > 130) c.position.x = -130;
  }
  for (const f of world.flags) {
    const g = f.mesh.geometry.attributes.position;
    const base = f.mesh.userData.base;
    for (let i = 0; i < g.count; i++) {
      const x = base[i * 3];
      g.array[i * 3 + 2] = Math.sin(x * 2 - t * 4 + f.x) * 0.18 * (x / 2);
    }
    g.needsUpdate = true;
  }
  for (const tch of world.torches) {
    const s = 0.85 + Math.sin(t * 17 + tch.x) * 0.1 + Math.sin(t * 23 + tch.z) * 0.08;
    tch.mesh.children[0].scale.set(1, s, 1);
    tch.mesh.children[1].scale.set(1, 2 - s, 1);
  }
  if (world.gateMesh && map.gate) {
    const g = map.gate;
    if (!g.alive) {
      if (!world.gateFall) world.gateFall = 0;
      world.gateFall = Math.min(1, world.gateFall + dt * 1.5);
      world.gateMesh.rotation.z = g.face * world.gateFall * 1.45;
      world.gateMesh.position.y = map.castle.base - world.gateFall * 0.6;
    } else if (g.shake > 0) {
      g.shake -= dt;
      world.gateMesh.position.x = g.x + Math.sin(t * 60) * 0.06;
    }
  }
}
