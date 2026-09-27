// Aufbau der 3D-Welt aus einer BattleMap
import * as THREE from 'three';
import { BIOMES, FACTIONS } from './data.js';
import { StaticBatch, ENV, jitterColor, prep, xf } from './models.js';
import { G_GRASS, G_DIRT, G_SAND, G_ROCK, G_BED, G_SNOWCAP, G_FLOOR } from './terrain.js';
import { mulberry32 } from './rng.js';

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
      const counts = [0, 0, 0, 0, 0, 0, 0];
      counts[ga]++; counts[gb]++; counts[gc]++;
      let g = counts.indexOf(Math.max(...counts));
      const n1 = N(mx * 0.06, mz * 0.06);
      if (g === G_SNOWCAP || (my > 22 && map.biome !== 'desert')) c.copy(snow);
      else if (ny < 0.72 || g === G_ROCK) {
        c.copy(ny < 0.55 ? cliff[(Math.floor(my * 0.7) & 0xffff) % cliff.length] : rock[(Math.abs(Math.floor(n1 * 5))) % rock.length]);
        if (map.scenario === 'canyon') c.lerp(new THREE.Color(B.cliff[0]), 0.4);
      } else if (g === G_BED) c.copy(sand).multiplyScalar(0.75);
      else if (g === G_SAND) c.copy(sand);
      else if (g === G_DIRT) c.copy(dirt).lerp(grass[0], 0.12);
      else if (g === G_FLOOR) c.copy(sand).lerp(dirt, 0.4 + n1 * 0.4);
      else {
        const idx = Math.floor((n1 * 0.5 + 0.5) * grass.length * 1.3) % grass.length;
        c.copy(grass[Math.max(0, idx)]);
        if (my > 14 && map.biome !== 'desert') c.lerp(snow, Math.min(1, (my - 14) / 8));
      }
      const f = 0.94 + rng() * 0.1;
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
    const g = new THREE.PlaneGeometry(230, 170, 46, 34).toNonIndexed();
    g.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshLambertMaterial({ color: B.water, transparent: true, opacity: 0.82, flatShading: true });
    if (map.biome === 'winter') mat.color.lerp(new THREE.Color(0xe8f2fa), 0.35);
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
      S.add(ENV.box(5, 3, 4), 0xe6dcc6, s.x, base + 1.5, s.z, 0, s.rot);
      S.add(ENV.box(5.2, 0.4, 4.2), 0x6b4a30, s.x, base + 0.2, s.z, 0, s.rot);
      S.add(ENV.cone(3.9, 2.4, 4), 0x9a4a32, s.x, base + 4.2, s.z, 0, Math.PI / 4 + s.rot);
      S.add(ENV.box(0.9, 1.6, 0.2), 0x5a3a22, s.x, base + 0.8, s.z + (s.rot ? -2.05 : 2.05));
    } else if (s.kind === 'well') {
      S.add(ENV.cyl(1.1, 1.2, 1, 8), stone, s.x, base + 0.5, s.z);
      S.add(ENV.cyl(0.8, 0.8, 0.1, 8), 0x3d6f9a, s.x, base + 0.95, s.z);
      S.add(ENV.box(0.15, 2.2, 0.15), 0x6b4a30, s.x - 1, base + 1.6, s.z);
      S.add(ENV.box(0.15, 2.2, 0.15), 0x6b4a30, s.x + 1, base + 1.6, s.z);
      S.add(ENV.cone(1.7, 1, 4), 0x9a4a32, s.x, base + 3, s.z, 0, Math.PI / 4);
    }
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
