// Kartengenerierung: Höhenfeld, Szenario-Strukturen, Navigationsgitter
import { mulberry32, makeNoise, clamp, smooth, lerp } from './rng.js';

export const PLAY_W = 150; // spielbare Fläche x ∈ [-75, 75]
export const PLAY_D = 100; // z ∈ [-50, 50]
const EXT_X = 112, EXT_Z = 80; // gerenderte Fläche (mit Randgebirge)
const STEP = 1.5;
export const CELL = 2;

export const G_GRASS = 0, G_DIRT = 1, G_SAND = 2, G_ROCK = 3, G_BED = 4, G_SNOWCAP = 5, G_FLOOR = 6, G_MARSH = 7;

export class BattleMap {
  constructor(scenario, biome, seed) {
    this.scenario = scenario;
    this.biome = biome;
    this.seed = seed;
    this.rng = mulberry32(seed);
    this.noise = makeNoise(seed);
    this.nx = Math.round((EXT_X * 2) / STEP) + 1;
    this.nz = Math.round((EXT_Z * 2) / STEP) + 1;
    this.heights = new Float32Array(this.nx * this.nz);
    this.ground = new Uint8Array(this.nx * this.nz);
    this.gw = PLAY_W / CELL;
    this.gd = PLAY_D / CELL;
    const n = this.gw * this.gd;
    this.blocked = new Uint8Array(n);
    this.cost = new Float32Array(n).fill(1);
    this.flags = new Uint8Array(n); // 1 forest, 2 ford, 4 bridge, 8 gate, 16 castle-innen, 32 road
    this.clear = new Uint8Array(n);
    this.waterLevel = -0.55;
    this.hasWater = false;
    this.structures = [];
    this.decor = { trees: [], rocks: [], tufts: [], flowers: [], tents: [], menhirs: [], bushes: [], fences: [], ruins: [], torches: [], reeds: [], lilies: [], logs: [], mushrooms: [], fields: [], farms: [], mill: null };
    this.forests = [];
    this.roads = [];
    this.bridges = [];
    this.castle = null;
    this.gate = null;
    this.objective = null;
    this.zones = [null, null];
    this.camps = [null, null];
    this.fogDensity = scenario === 'forest' ? 0.0068 : 0.0042;
    this.generate();
  }

  // ---------- Höhenfunktion ----------
  generate() {
    const r = this.rng, N = this.noise;
    const sc = this.scenario;
    this.phase = r.range(0, Math.PI * 2);
    this.roadZ = r.range(-12, 12);

    // Szenario-Parameter
    if (sc === 'assault' || sc === 'defend') {
      const side = sc === 'assault' ? 1 : -1; // Burg im Osten (Bot) oder Westen (Spieler)
      this.castle = { cx: 48 * side, cz: r.range(-6, 6), half: 19, owner: sc === 'assault' ? 1 : 0, face: -side, base: 1.6 };
    }
    if (sc === 'river') {
      this.hasWater = true;
      this.river = { amp: r.range(5, 9), freq: r.range(0.035, 0.06), ph: this.phase, half: 5.2 };
      const bz = r.range(-22, 22);
      this.bridgeZ = bz;
      const fords = [];
      const f1 = bz > 0 ? r.range(-40, -18) : r.range(18, 40);
      fords.push(f1);
      if (r.chance(0.6)) {
        let f2 = r.range(-40, 40);
        if (Math.abs(f2 - bz) > 16 && Math.abs(f2 - f1) > 16) fords.push(f2);
      }
      this.fords = fords;
    }
    if (sc === 'canyon') {
      this.canyon = { amp: r.range(8, 13), ph: this.phase, pinch: r.range(-15, 15), top: 12 };
      this.biomeTint = true;
    }
    if (sc === 'hill') {
      this.objective = { type: 'hill', x: r.range(-5, 5), z: r.range(-5, 5), r: 9, score: [0, 0], need: 100 };
    }
    if (sc === 'castle' || this.castle) {
      this.hasWater = true; // Burggraben
    }

    // Charakter der Landschaft: mal flach, mal hügelig
    this.hilly = sc === 'canyon' ? 1 : r.range(0.55, 1.7) * (this.biome === 'highland' ? 1.35 : 1);
    this.freq = r.range(0.016, 0.03);
    this.features = this.pickFeatures();
    if (this.features.some((f) => f.type === 'marsh' || f.type === 'lake' || f.type === 'pond')) this.hasWater = true;

    const hAt = (x, z) => this.heightFn(x, z);
    for (let j = 0; j < this.nz; j++) {
      for (let i = 0; i < this.nx; i++) {
        const x = -EXT_X + i * STEP, z = -EXT_Z + j * STEP;
        const k = j * this.nx + i;
        const [h, g] = hAt(x, z);
        this.heights[k] = h;
        this.ground[k] = g;
      }
    }
    this.placeStructures();
    this.buildNav();
    this.placeDecor();
    this.buildTreeHash();
  }

  canyonCenter(x) {
    const c = this.canyon;
    return Math.sin(x * 0.035 + c.ph) * c.amp + Math.sin(x * 0.09 + c.ph * 2) * 2.5;
  }
  canyonHalf(x) {
    const c = this.canyon;
    return 15 - 6 * Math.exp(-(((x - c.pinch) / 16) ** 2)) + this.noise(x * 0.08, 3.3) * 2.5;
  }
  riverX(z) {
    const rv = this.river;
    return Math.sin(z * rv.freq + rv.ph) * rv.amp + this.noise(z * 0.05, 9.1) * 3;
  }

  // ---------- Geländemerkmale ----------
  pickFeatures() {
    const r = this.rng, sc = this.scenario;
    const out = [];
    if (sc === 'canyon') return out;
    const c = this.castle;
    // freier Mittelbereich zwischen den Aufstellungszonen (bei Burgen: zwischen Burg und Angreifern)
    const xr = c ? (c.cx > 0 ? [-38, 12] : [-12, 38]) : [-38, 38];
    const pool = sc === 'forest' ? ['marsh', 'village', 'ridge', 'hedges', 'lake', 'ruins', 'pillars']
      : sc === 'river' ? ['ridge', 'village', 'hedges', 'plateau', 'pillars', 'ruins', 'marsh']
      : c ? ['village', 'hedges', 'ridge', 'marsh', 'pillars', 'ruins']
      : ['ridge', 'plateau', 'village', 'marsh', 'lake', 'hedges', 'pillars', 'ruins'];
    const n = c ? r.int(1, 2) : r.int(2, 3);
    const rad = { ridge: 10, plateau: 12, village: 11, marsh: 10, lake: 9, hedges: 12, pillars: 7, ruins: 5 };
    const ok = (x, z, rr) => {
      if (this.objective && Math.hypot(x - this.objective.x, z - this.objective.z) < rr + 12) return false;
      if (this.river && Math.abs(x - this.riverX(z)) < rr + 9) return false;
      if (c && Math.max(Math.abs(x - c.cx), Math.abs(z - c.cz)) < c.half + 10 + rr) return false;
      return !out.some((f) => Math.hypot(f.x - x, f.z - z) < f.rad + rr + 6);
    };
    const bag = pool.slice();
    // dazu 0–2 kleine Teiche
    const ponds = sc === 'river' ? r.int(0, 1) : r.int(0, 2);
    for (let i = 0; i < ponds; i++) {
      const rr = r.range(3.5, 5.5);
      for (let t = 0; t < 40; t++) {
        const x = r.range(xr[0], xr[1]), z = r.range(-42, 42);
        if (ok(x, z, rr)) { out.push({ type: 'pond', x, z, rad: rr }); break; }
      }
    }
    for (let i = 0; i < n && bag.length; i++) {
      const type = bag.splice(r.int(0, Math.min(bag.length - 1, 3)), 1)[0];
      const rr = rad[type] * r.range(0.85, 1.2);
      let placed = null;
      for (let t = 0; t < 60 && !placed; t++) {
        const x = r.range(xr[0] + rr * 0.6, xr[1] - rr * 0.6), z = r.range(-40 + rr * 0.5, 40 - rr * 0.5);
        if (ok(x, z, rr)) placed = { type, x, z, rad: rr };
      }
      if (!placed) continue;
      const f = placed;
      if (type === 'ridge') {
        const a = r.range(-0.6, 0.6) + Math.PI / 2; // grob quer zur Frontlinie (Nord-Süd)
        f.len = r.range(26, 44); f.a = a; f.h = r.range(3.5, 6); f.w = r.range(5, 8);
        f.gap = r.chance(0.7) ? r.range(-0.3, 0.3) : null; // Pass durch den Kamm
        f.rad = f.len / 2;
      } else if (type === 'plateau') {
        f.h = r.range(4, 6); f.ramps = [r.range(0, 6.28)]; f.ramps.push(f.ramps[0] + Math.PI + r.range(-0.6, 0.6));
      } else if (type === 'village') {
        f.houses = r.int(5, 8);
      } else if (type === 'hedges') {
        f.kind = this.biome === 'desert' || this.biome === 'winter' || this.biome === 'highland' ? 'wall' : 'hedge';
      }
      out.push(f);
    }
    return out;
  }

  featureHeight(x, z, h, g) {
    const N = this.noise;
    for (const f of this.features) {
      const dx = x - f.x, dz = z - f.z;
      if (Math.abs(dx) > f.rad + 16 || Math.abs(dz) > f.rad + 16) continue;
      const d = Math.hypot(dx, dz);
      switch (f.type) {
        case 'ridge': {
          const ux = Math.cos(f.a), uz = Math.sin(f.a);
          let t = (dx * ux + dz * uz) / (f.len / 2);
          const tc = Math.max(-1, Math.min(1, t));
          const px = f.x + ux * tc * f.len / 2, pz = f.z + uz * tc * f.len / 2;
          const dd = Math.hypot(x - px, z - pz) + Math.max(0, Math.abs(t) - 1) * 4;
          let k = Math.exp(-((dd / f.w) ** 2));
          if (f.gap !== null) k *= 1 - 0.9 * Math.exp(-(((t - f.gap) * f.len / 2 / 4.5) ** 2));
          h += f.h * k * (0.85 + 0.3 * N(x * 0.15, z * 0.15));
          if (k > 0.75 && g === G_GRASS && N(x * 0.3, z * 0.3) > 0.1) g = G_ROCK;
          break;
        }
        case 'plateau': {
          const ang = Math.atan2(dz, dx);
          let ramp = 0;
          for (const ra of f.ramps) { let da = Math.abs(((ang - ra + Math.PI * 3) % (Math.PI * 2)) - Math.PI); ramp = Math.max(ramp, Math.max(0, 1 - da / 0.45)); }
          const edge = 2.2 + ramp * 13;
          const rr = f.rad + N(ang * 2, 3.3) * 1.5;
          const k = 1 - Math.max(0, Math.min(1, (d - rr + edge) / edge));
          h = Math.max(h, h * 0.3 + f.h * k + (k > 0.98 ? N(x * 0.2, z * 0.2) * 0.2 : 0));
          if (k > 0.08 && k < 0.92 && ramp < 0.3) g = G_ROCK;
          break;
        }
        case 'marsh': {
          const rr = f.rad * (1 + N(x * 0.08, z * 0.08) * 0.35);
          const k = 1 - Math.max(0, Math.min(1, (d - rr * 0.6) / (rr * 0.4)));
          if (k > 0) {
            h = h * (1 - k) + (this.waterLevel - 0.12 + N(x * 0.22, z * 0.22) * 0.45) * k;
            if (k > 0.3) g = G_MARSH;
          }
          break;
        }
        case 'pond': {
          const rr = f.rad * (1 + N(x * 0.12, z * 0.12 + 9) * 0.25);
          const k = 1 - Math.max(0, Math.min(1, (d - rr * 0.5) / (rr * 0.5)));
          if (k > 0) { h = h * (1 - k) + -1.8 * k; g = k > 0.6 ? G_BED : G_SAND; }
          break;
        }
        case 'lake': {
          const rr = f.rad * (1 + N(x * 0.07, z * 0.07 + 5) * 0.3);
          const k = 1 - Math.max(0, Math.min(1, (d - rr * 0.55) / (rr * 0.45)));
          if (k > 0) { h = h * (1 - k) + -2.6 * k; g = k > 0.55 ? G_BED : G_SAND; }
          break;
        }
        case 'village': {
          const k = 1 - Math.max(0, Math.min(1, (d - f.rad) / 7));
          if (k > 0) h = h * (1 - k) + (f.h0 ?? (f.h0 = h)) * k;
          if (d < f.rad * 0.38 || (d < f.rad && Math.abs(N(x * 0.3, z * 0.3)) < 0.06)) g = G_DIRT;
          break;
        }
      }
    }
    return [h, g];
  }

  heightFn(x, z) {
    const N = this.noise;
    const fr = this.freq || 0.022;
    let h = N.fbm(x * fr, z * fr, 4) * 3.2 * (this.hilly || 1) + N(x * 0.09, z * 0.09) * 0.35;
    // Wüste: Dünenkämme
    if (this.biome === 'desert' && this.scenario !== 'canyon') h += Math.abs(N(x * 0.035 + z * 0.012, z * 0.02)) * 2.2 - 0.6;
    // Senken im Grundgelände nicht unter Wasser sinken lassen – Wasser kommt nur aus Merkmalen
    const floor = this.waterLevel + 0.45;
    if (h < floor) h = floor + (h - floor) * 0.12;
    let g = G_GRASS;
    if (this.features && this.features.length) [h, g] = this.featureHeight(x, z, h, g);

    // Randgebirge außerhalb der Spielfläche
    const ex = Math.max(0, Math.abs(x) - 74), ez = Math.max(0, Math.abs(z) - 49);
    const edge = Math.sqrt(ex * ex + ez * ez);
    let mountain = 0;
    if (edge > 0) {
      mountain = Math.pow(edge / 12, 1.4) * (6 + 10 * (0.5 + 0.5 * N(x * 0.05, z * 0.05)));
    }

    const sc = this.scenario;
    if (sc === 'canyon') {
      const cz = this.canyonCenter(x), hw = this.canyonHalf(x);
      const d = Math.abs(z - cz);
      const t = smooth(hw, hw + 3.5, d);
      // Terrassen für Lowpoly-Felswände
      const top = this.canyon.top + N.fbm(x * 0.03, z * 0.03, 3) * 4;
      const floor = N.fbm(x * 0.04, z * 0.04, 3) * 1.2;
      const terr = Math.floor(t * 4) / 4 * 0.35 + t * 0.65;
      h = lerp(floor, top, terr);
      g = t > 0.12 ? (t > 0.95 ? G_GRASS : G_ROCK) : G_FLOOR;
      if (d < 3 && Math.abs(x) < 70) g = G_DIRT; // trockenes Flussbett / Pfad
      mountain *= 0.5;
    } else if (sc === 'river') {
      const rx = this.riverX(z);
      const d = Math.abs(x - rx);
      const half = this.river.half + N(z * 0.1, 1.7) * 1.0;
      let depth = 1 - smooth(half - 1.5, half + 2.5, d);
      let bed = -2.2;
      for (const fz of this.fords) {
        const fd = Math.abs(z - fz);
        if (fd < 5) bed = lerp(-0.2, bed, smooth(2.5, 5, fd));
      }
      h = lerp(h * 0.6, bed, depth);
      if (depth > 0.25) g = G_BED;
      else if (depth > 0.02) g = G_SAND;
    } else if (sc === 'hill') {
      const o = this.objective;
      const d = Math.hypot(x - o.x, z - o.z);
      const hill = 7.5 * Math.exp(-((d / 21) ** 2));
      h = h * 0.8 + hill;
      if (d < 11) {
        h = lerp(h, 7.5 + N(x * 0.1, z * 0.1) * 0.2, smooth(11, 8, d));
        if (d < 10) g = G_DIRT;
      }
    } else if (sc === 'forest') {
      h = h * 1.2;
    }

    if (this.castle) {
      const c = this.castle;
      const dx = Math.abs(x - c.cx), dz = Math.abs(z - c.cz);
      const box = Math.max(dx, dz);
      // Plateau
      const plat = smooth(c.half + 12, c.half + 5, box);
      h = lerp(h, c.base, plat);
      // Burggraben
      const moatIn = c.half + 3, moatOut = c.half + 7.5;
      if (box > moatIn - 1 && box < moatOut + 1) {
        const m = smooth(moatIn - 1, moatIn + 1, box) * (1 - smooth(moatOut - 1, moatOut + 1, box));
        h = lerp(h, -2.0, m);
        if (m > 0.3) g = G_BED;
        else if (m > 0.02) g = G_SAND;
      }
      if (box < c.half + 1) g = G_DIRT;
    }

    // Straße vom eigenen Lager Richtung Mitte (optisch)
    if (sc !== 'canyon' && Math.abs(x) < 74) {
      const rz = this.roadZ + Math.sin(x * 0.05 + this.phase) * 6;
      if (Math.abs(z - rz) < 1.6 && g === G_GRASS) g = G_DIRT;
    }

    h += mountain;
    if (edge > 6 && h > 14 && this.biome !== 'desert') g = G_SNOWCAP;
    else if (edge > 3 && mountain > 9) g = G_ROCK; // nur hohe Gipfel felsig, sonst grüne Hügel (steile Hänge färbt der Renderer)
    return [h, g];
  }

  // ---------- Höhenabfrage (exakt auf den Dreiecken) ----------
  terrainHeight(x, z) {
    const fx = (x + EXT_X) / STEP, fz = (z + EXT_Z) / STEP;
    let i = Math.floor(fx), j = Math.floor(fz);
    i = clamp(i, 0, this.nx - 2); j = clamp(j, 0, this.nz - 2);
    const u = clamp(fx - i, 0, 1), v = clamp(fz - j, 0, 1);
    const H = this.heights, nx = this.nx;
    const h00 = H[j * nx + i], h10 = H[j * nx + i + 1], h01 = H[(j + 1) * nx + i], h11 = H[(j + 1) * nx + i + 1];
    if (u + v <= 1) return h00 + (h10 - h00) * u + (h01 - h00) * v;
    return h11 + (h01 - h11) * (1 - u) + (h10 - h11) * (1 - v);
  }
  getHeight(x, z) {
    let h = this.terrainHeight(x, z);
    for (const b of this.bridges) {
      const lx = (x - b.x) * b.cos + (z - b.z) * b.sin;
      const lz = -(x - b.x) * b.sin + (z - b.z) * b.cos;
      if (Math.abs(lx) < b.len / 2 && Math.abs(lz) < b.width / 2) {
        const t = 1 - (lx / (b.len / 2)) ** 2;
        h = Math.max(h, b.y + t * b.arch);
      }
    }
    if (this.hasWater && h < this.waterLevel - 0.35) h = Math.max(h, this.waterLevel - 0.35);
    return h;
  }

  // ---------- Strukturen ----------
  placeFeatureStructures() {
    const r = this.rng;
    for (const f of this.features) {
      if (f.type === 'village') {
        const n = f.houses;
        for (let i = 0; i < n; i++) {
          for (let t = 0; t < 20; t++) {
            const a = (i / n) * Math.PI * 2 + r.range(-0.3, 0.3), d = f.rad * r.range(0.5, 0.95);
            const x = f.x + Math.cos(a) * d, z = f.z + Math.sin(a) * d;
            const rot = [0, Math.PI / 2, Math.PI, -Math.PI / 2][Math.round(((a + Math.PI) / (Math.PI / 2))) % 4];
            const w = Math.abs(Math.sin(rot)) > 0.5 ? 4 : 5, dd = w === 4 ? 5 : 4;
            if (this.structures.some((s2) => s2.kind === 'house' && Math.hypot(s2.x - x, s2.z - z) < 7.5)) continue;
            this.structures.push({ kind: 'house', x, z, rot: rot + Math.PI, w, d: dd, village: true, roof: r.int(0, 2) });
            break;
          }
        }
        this.structures.push({ kind: 'well', x: f.x + r.range(-1.5, 1.5), z: f.z + r.range(-1.5, 1.5) });
        for (let i = 0; i < 3; i++) {
          const a = r() * 6.28, d = f.rad * 0.3;
          this.decor.stalls = this.decor.stalls || [];
          this.decor.stalls.push({ x: f.x + Math.cos(a) * d + 3, z: f.z + Math.sin(a) * d, rot: a, col: r.int(0, 3) });
        }
      } else if (f.type === 'hedges') {
        const segs = r.int(3, 5);
        for (let i = 0; i < segs; i++) {
          const x = Math.max(-38, Math.min(38, f.x + r.range(-f.rad, f.rad))), z = Math.max(-42, Math.min(42, f.z + r.range(-f.rad, f.rad)));
          if (this.castle && Math.max(Math.abs(x - this.castle.cx), Math.abs(z - this.castle.cz)) < this.castle.half + 14) continue;
          const rot = r.chance(0.6) ? Math.PI / 2 + r.range(-0.3, 0.3) : r.range(-0.3, 0.3);
          this.structures.push({ kind: 'hedge', x, z, len: r.range(7, 13), rot, style: f.kind });
        }
      } else if (f.type === 'pillars') {
        const n = r.int(3, 6);
        for (let i = 0; i < n; i++) {
          const a = r() * 6.28, d = r() * f.rad;
          this.structures.push({ kind: 'spire', x: f.x + Math.cos(a) * d, z: f.z + Math.sin(a) * d, r: r.range(1.2, 2.2), h: r.range(5, 11) });
        }
      } else if (f.type === 'ruins') {
        this.decor.ruins.push({ x: f.x, z: f.z, r: 2.6 });
        for (let i = 0; i < 3; i++) {
          const a = r() * 6.28;
          this.structures.push({ kind: 'hedge', x: f.x + Math.cos(a) * 5, z: f.z + Math.sin(a) * 5, len: r.range(3, 6), rot: a + Math.PI / 2, style: 'ruin' });
        }
      }
    }
  }

  placeStructures() {
    const r = this.rng;
    const c = this.castle;
    this.placeFeatureStructures();
    if (c) {
      const H = 6.2, T = 2.2, hf = c.half;
      const face = c.face; // -1: Tor zeigt nach Westen, +1: nach Osten
      const gateX = c.cx + face * hf;
      c.gateX = gateX;
      // Mauern (Tor-Lücke in der Frontmauer)
      const gw = 3.4;
      const addWall = (x, z, w, d) => this.structures.push({ kind: 'wall', x, z, w, d, h: H });
      addWall(c.cx - face * hf, c.cz, T, hf * 2); // Rückmauer
      addWall(c.cx, c.cz - hf, hf * 2, T);
      addWall(c.cx, c.cz + hf, hf * 2, T);
      const segLen = hf - gw;
      addWall(gateX, c.cz - gw - segLen / 2, T, segLen);
      addWall(gateX, c.cz + gw + segLen / 2, T, segLen);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        this.structures.push({ kind: 'tower', x: c.cx + sx * hf, z: c.cz + sz * hf, r: 3.2, h: 9.5 });
      }
      this.structures.push({ kind: 'tower', x: gateX, z: c.cz - gw - 1.4, r: 2.4, h: 8.4, small: true });
      this.structures.push({ kind: 'tower', x: gateX, z: c.cz + gw + 1.4, r: 2.4, h: 8.4, small: true });
      this.gate = { x: gateX, z: c.cz, w: gw * 2, owner: c.owner, hp: 520, maxHp: 520, face, alive: true, shake: 0 };
      this.structures.push({ kind: 'gate', ref: this.gate, x: gateX, z: c.cz, w: gw * 2, h: 5.4 });
      // Bergfried
      const kx = c.cx - face * (hf - 8);
      this.structures.push({ kind: 'keep', x: kx, z: c.cz, w: 9, d: 9, h: 13 });
      // Häuschen im Hof
      this.structures.push({ kind: 'house', x: c.cx - face * (hf - 4), z: c.cz - hf + 5, rot: 0 });
      this.structures.push({ kind: 'house', x: c.cx - face * (hf - 4), z: c.cz + hf - 5, rot: Math.PI });
      this.structures.push({ kind: 'well', x: c.cx + face * 2, z: c.cz + 8 });
      // Zugbrücke über den Graben
      this.bridges.push({ x: gateX + face * 5.5, z: c.cz, len: 12, width: 6.4, y: c.base + 0.15, arch: 0.2, cos: 1, sin: 0, wood: true });
      this.objective = { type: 'keep', x: kx + face * 9.5, z: c.cz, r: 8, hold: 0, need: 20, owner: c.owner };
      for (const sz of [-1, 1]) this.decor.torches.push({ x: gateX + face * 1.6, z: c.cz + sz * (gw + 0.2), y: c.base + 3.5 });
    }
    if (this.scenario === 'river') {
      const bz = this.bridgeZ;
      const bx = this.riverX(bz);
      // Brücke quer zum Fluss (in x-Richtung, leicht gedreht nach Flussneigung)
      const dxdz = (this.riverX(bz + 1) - this.riverX(bz - 1)) / 2;
      const ang = Math.atan(dxdz) * -1;
      this.bridges.push({ x: bx, z: bz, len: 22, width: 5.6, y: 0.1, arch: 1.4, cos: Math.cos(ang), sin: Math.sin(ang), wood: false });
    }
    if (this.scenario === 'hill') {
      const o = this.objective;
      const n = 9;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + 0.3;
        this.decor.menhirs.push({ x: o.x + Math.cos(a) * 8.6, z: o.z + Math.sin(a) * 8.6, h: r.range(2.4, 3.6), rot: a, fallen: r.chance(0.15) });
      }
      this.decor.menhirs.push({ x: o.x, z: o.z, h: 1.2, rot: 0, altar: true });
    }
    if (this.scenario === 'canyon') {
      // Ruinen eines Wachturms im Pass
      const x = this.canyon.pinch + r.range(-6, 6);
      const cz = this.canyonCenter(x);
      this.decor.ruins.push({ x, z: cz + (r.chance(0.5) ? -1 : 1) * (this.canyonHalf(x) - 4), r: 2.6 });
    }

    // Deploy-Zonen
    const zoneW = 24, zoneD = 60;
    const west = { x0: -73, x1: -73 + zoneW, z0: -zoneD / 2, z1: zoneD / 2 };
    const east = { x0: 73 - zoneW, x1: 73, z0: -zoneD / 2, z1: zoneD / 2 };
    this.zones = [west, east];
    if (c) {
      const inner = c.half - 2.2;
      const zone = { x0: c.cx - inner, x1: c.cx + inner, z0: c.cz - inner, z1: c.cz + inner, castle: true };
      this.zones[c.owner] = zone;
      const att = 1 - c.owner;
      this.zones[att] = att === 0 ? { x0: -73, x1: -45, z0: -32, z1: 32 } : { x0: 45, x1: 73, z0: -32, z1: 32 };
    }
    if (this.scenario === 'canyon') {
      this.zones = [{ x0: -73, x1: -52, z0: -40, z1: 40 }, { x0: 52, x1: 73, z0: -40, z1: 40 }];
    }
    // Lager hinter den Zonen
    for (let s = 0; s < 2; s++) {
      const z = this.zones[s];
      const cx = s === 0 ? -71 : 71;
      let cz = (z.z0 + z.z1) / 2;
      if (this.scenario === 'canyon') cz = this.canyonCenter(cx);
      this.camps[s] = { x: cx, z: cz };
      if (!(c && c.owner === s)) {
        for (let t = 0; t < 4; t++) {
          const tx = cx - (s === 0 ? -1 : 1) * r.range(-1, 2) + (s === 0 ? -1 : 1) * 1.5;
          const tz = cz + (t - 1.5) * 6 + r.range(-1, 1);
          this.decor.tents.push({ x: s === 0 ? -76 - r.range(0, 3) : 76 + r.range(0, 3), z: tz, side: s, rot: r.range(-0.4, 0.4) + (s === 0 ? Math.PI / 2 : -Math.PI / 2), big: t === 1 });
        }
      }
    }
  }

  // ---------- Navigation ----------
  cellIndex(x, z) {
    const i = Math.floor((x + PLAY_W / 2) / CELL), j = Math.floor((z + PLAY_D / 2) / CELL);
    if (i < 0 || j < 0 || i >= this.gw || j >= this.gd) return -1;
    return j * this.gw + i;
  }
  cellCenter(k) {
    const i = k % this.gw, j = (k / this.gw) | 0;
    return [-PLAY_W / 2 + (i + 0.5) * CELL, -PLAY_D / 2 + (j + 0.5) * CELL];
  }

  buildNav() {
    const gw = this.gw, gd = this.gd;
    this.waterBlocked = new Uint8Array(gw * gd);
    for (let j = 0; j < gd; j++) {
      for (let i = 0; i < gw; i++) {
        const k = j * gw + i;
        const x0 = -PLAY_W / 2 + i * CELL, z0 = -PLAY_D / 2 + j * CELL;
        let lo = 1e9, hi = -1e9, sum = 0, cnt = 0;
        for (let a = 0; a <= 2; a++) for (let b = 0; b <= 2; b++) {
          const h = this.terrainHeight(x0 + a, z0 + b);
          lo = Math.min(lo, h); hi = Math.max(hi, h); sum += h; cnt++;
        }
        const avg = sum / cnt;
        if (i === 0 || j === 0 || i === gw - 1 || j === gd - 1) this.blocked[k] = 1;
        if (hi - lo > 2.6) this.blocked[k] = 1;
        if (this.scenario === 'canyon' && avg > 5) this.blocked[k] = 1;
        // Wasser ist unpassierbar – außer an ausgewiesenen Furten und in Sümpfen
        if (this.hasWater && avg < this.waterLevel + 0.05) {
          const cx = x0 + 1, cz = z0 + 1;
          if (this.isFordZone(cx, cz) && avg > this.waterLevel - 1.2) { this.flags[k] |= 2; this.cost[k] += 1.6; }
          else { this.blocked[k] = 1; this.waterBlocked[k] = 1; }
        }
      }
    }
    // Brücken
    for (const b of this.bridges) {
      for (let k = 0; k < gw * gd; k++) {
        const [x, z] = this.cellCenter(k);
        const lx = (x - b.x) * b.cos + (z - b.z) * b.sin;
        const lz = -(x - b.x) * b.sin + (z - b.z) * b.cos;
        if (Math.abs(lx) < b.len / 2 + 0.5 && Math.abs(lz) < b.width / 2 - 0.3) {
          this.blocked[k] = 0; this.flags[k] = (this.flags[k] & ~2) | 4; this.cost[k] = 1;
        }
      }
    }
    // Strukturen blockieren
    for (const s of this.structures) {
      if (s.kind === 'wall' || s.kind === 'keep' || s.kind === 'house') {
        const w = (s.w || 5) / 2 + 0.9, d = (s.d || 4) / 2 + 0.9;
        this.markRect(s.x - w, s.z - d, s.x + w, s.z + d, (k) => { this.blocked[k] = 1; });
      } else if (s.kind === 'hedge') {
        const n = Math.ceil(s.len / 1);
        for (let i = 0; i <= n; i++) {
          const t = i / n - 0.5;
          const x = s.x + Math.cos(s.rot) * t * s.len, z = s.z + Math.sin(s.rot) * t * s.len;
          const k = this.cellIndex(x, z);
          if (k >= 0) this.blocked[k] = 1;
        }
      } else if (s.kind === 'spire') {
        const rr = s.r + 0.6;
        this.markRect(s.x - rr, s.z - rr, s.x + rr, s.z + rr, (k) => {
          const [x, z] = this.cellCenter(k);
          if (Math.hypot(x - s.x, z - s.z) < rr + 0.4) this.blocked[k] = 1;
        });
      } else if (s.kind === 'tower' || s.kind === 'well') {
        const rr = (s.r || 1.2) + 0.8;
        this.markRect(s.x - rr, s.z - rr, s.x + rr, s.z + rr, (k) => {
          const [x, z] = this.cellCenter(k);
          if (Math.hypot(x - s.x, z - s.z) < rr + 0.6) this.blocked[k] = 1;
        });
      }
    }
    const c = this.castle;
    if (c) {
      const inner = c.half - 1.2;
      this.markRect(c.cx - inner, c.cz - inner, c.cx + inner, c.cz + inner, (k) => { this.flags[k] |= 16; });
      const g = this.gate;
      g.cells = [];
      this.markRect(g.x - 1.6, g.z - g.w / 2 + 0.4, g.x + 1.6, g.z + g.w / 2 - 0.4, (k) => {
        this.blocked[k] = 0; this.flags[k] |= 8; g.cells.push(k);
      });
    }
    for (const m of this.decor.menhirs) {
      if (m.altar) continue;
      const k = this.cellIndex(m.x, m.z);
      if (k >= 0) this.blocked[k] = 1;
    }
    for (const ru of this.decor.ruins) {
      this.markRect(ru.x - ru.r, ru.z - ru.r, ru.x + ru.r, ru.z + ru.r, (k) => { this.blocked[k] = 1; });
    }
    // Wälder (Szenario Nebelwald + ein paar Haine)
    this.makeForests();
    for (const f of this.forests) {
      this.markRect(f.x - f.r, f.z - f.r, f.x + f.r, f.z + f.r, (k) => {
        const [x, z] = this.cellCenter(k);
        if (Math.hypot((x - f.x) / f.r, (z - f.z) / f.r * f.rx) < 1 && !this.blocked[k]) {
          this.flags[k] |= 1; this.cost[k] += 0.6;
        }
      });
    }
    // Felsblöcke im Canyon
    if (this.scenario === 'canyon') {
      const r = this.rng;
      for (let n = 0; n < 7; n++) {
        const x = r.range(-44, 44);
        const cz = this.canyonCenter(x);
        const z = cz + r.range(-1, 1) * (this.canyonHalf(x) - 5);
        const rr = r.range(1.4, 2.6);
        this.decor.rocks.push({ x, z, s: rr * 1.35, big: true, rot: r() * 6 });
        this.markRect(x - rr, z - rr, x + rr, z + rr, (k) => {
          const [cx, cz2] = this.cellCenter(k);
          if (Math.hypot(cx - x, cz2 - z) < rr + 0.4) this.blocked[k] = 1;
        });
      }
    }
    this.ensureConnectivity();
    this.computeClearance();
  }

  // Sicherstellen, dass beide Heere zueinander finden – sonst eine seichte Furt durch das Wasser legen
  flood(startK) {
    const n = this.gw * this.gd, seen = new Uint8Array(n);
    const q = [startK];
    seen[startK] = 1;
    while (q.length) {
      const k = q.pop();
      const i = k % this.gw, j = (k / this.gw) | 0;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const a = i + di, b = j + dj;
        if (a < 0 || b < 0 || a >= this.gw || b >= this.gd) continue;
        const kk = b * this.gw + a;
        if (seen[kk] || (this.blocked[kk] && !(this.flags[kk] & 8))) continue;
        seen[kk] = 1; q.push(kk);
      }
    }
    return seen;
  }
  freeCellNear(x, z) {
    for (let r = 0; r < 12; r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
      const k = this.cellIndex(x + dx * CELL, z + dz * CELL);
      if (k >= 0 && !this.blocked[k]) return k;
    }
    return -1;
  }
  ensureConnectivity() {
    const zc = (zn) => [(zn.x0 + zn.x1) / 2, (zn.z0 + zn.z1) / 2];
    let [ax, az] = zc(this.zones[0]);
    let [bx, bz] = zc(this.zones[1]);
    if (this.castle) {
      // Angreifer-Zone -> Platz vor dem Burgtor
      [ax, az] = zc(this.zones[1 - this.castle.owner]);
      bx = this.gate.x + this.castle.face * 12; bz = this.gate.z;
    }
    // alle Teile beider Zonen müssen erreichbar sein
    const targets = [[bx, bz]];
    for (const zn of this.zones) for (const fz of [0.2, 0.5, 0.8]) targets.push([(zn.x0 + zn.x1) / 2, zn.z0 + (zn.z1 - zn.z0) * fz]);
    for (const [tx, tz] of targets) this.connect(ax, az, tx, tz);
  }
  connect(ax, az, bx, bz) {
    const ka = this.freeCellNear(ax, az);
    for (let tries = 0; tries < 4; tries++) {
      const kb = this.freeCellNear(bx, bz);
      if (ka < 0 || kb < 0) return;
      const seen = this.flood(ka);
      if (seen[kb]) return;
      // Furt entlang der Verbindungslinie (leicht versetzt je Versuch)
      const off = [0, 14, -14, 26][tries];
      const n = Math.ceil(Math.hypot(bx - ax, bz - az));
      for (let t = 0; t <= n; t++) {
        const x = ax + (bx - ax) * t / n, z = az + (bz - az) * t / n + off * Math.sin(Math.PI * t / n);
        for (let w = -1; w <= 1; w++) {
          const k = this.cellIndex(x, z + w * CELL);
          if (k < 0 || !this.waterBlocked[k]) continue;
          this.waterBlocked[k] = 0; this.blocked[k] = 0;
          this.flags[k] |= 2; this.cost[k] += 1.6;
          this.raiseCell(k, this.waterLevel - 0.3);
        }
      }
    }
  }
  raiseCell(k, h) {
    const [cx, cz] = this.cellCenter(k);
    const { EXT_X, EXT_Z, STEP } = this.extent;
    const i0 = Math.floor((cx - 1.8 + EXT_X) / STEP), i1 = Math.ceil((cx + 1.8 + EXT_X) / STEP);
    const j0 = Math.floor((cz - 1.8 + EXT_Z) / STEP), j1 = Math.ceil((cz + 1.8 + EXT_Z) / STEP);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const idx = j * this.nx + i;
      if (idx >= 0 && idx < this.heights.length && this.heights[idx] < h) { this.heights[idx] = h; this.ground[idx] = G_SAND; }
    }
  }

  makeForests() {
    const r = this.rng;
    const count = this.scenario === 'forest' ? r.int(11, 14) : this.scenario === 'canyon' ? 0 : r.int(2, 4);
    let tries = 0;
    while (this.forests.length < count && tries++ < 300) {
      const x = r.range(-44, 44), z = r.range(-44, 44);
      const rad = this.scenario === 'forest' ? r.range(6, 11) : r.range(5, 8);
      if (this.nearStructure(x, z, rad + 4)) continue;
      if (this.objective && Math.hypot(x - this.objective.x, z - this.objective.z) < rad + 12) continue;
      if (this.scenario === 'river' && Math.abs(x - this.riverX(z)) < rad + 7) continue;
      if (this.forests.some((f) => Math.hypot(f.x - x, f.z - z) < f.r + rad + 3)) continue;
      const k = this.cellIndex(x, z);
      if (k < 0 || this.blocked[k]) continue;
      this.forests.push({ x, z, r: rad, rx: r.range(0.8, 1.25) });
    }
  }

  nearStructure(x, z, d) {
    for (const f of this.features || []) {
      if ((f.type === 'village' || f.type === 'lake' || f.type === 'pond' || f.type === 'pillars' || f.type === 'ruins') && Math.hypot(x - f.x, z - f.z) < f.rad + d) return true;
    }
    if (this.castle && Math.max(Math.abs(x - this.castle.cx), Math.abs(z - this.castle.cz)) < this.castle.half + 9 + d * 0.3) return true;
    for (const b of this.bridges) if (Math.hypot(x - b.x, z - b.z) < d + b.len / 2) return true;
    if (this.scenario === 'river' && this.fords.some((fz) => Math.abs(z - fz) < d && Math.abs(x - this.riverX(fz)) < d + 6)) return true;
    return false;
  }

  markRect(x0, z0, x1, z1, fn) {
    const i0 = Math.max(0, Math.floor((x0 + PLAY_W / 2) / CELL)), i1 = Math.min(this.gw - 1, Math.floor((x1 + PLAY_W / 2) / CELL));
    const j0 = Math.max(0, Math.floor((z0 + PLAY_D / 2) / CELL)), j1 = Math.min(this.gd - 1, Math.floor((z1 + PLAY_D / 2) / CELL));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) fn(j * this.gw + i);
  }

  computeClearance() {
    const gw = this.gw, gd = this.gd, n = gw * gd;
    const dist = this.clear;
    dist.fill(255);
    const q = new Int32Array(n);
    let head = 0, tail = 0;
    for (let k = 0; k < n; k++) if (this.blocked[k]) { dist[k] = 0; q[tail++] = k; }
    while (head < tail) {
      const k = q[head++];
      const i = k % gw, j = (k / gw) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const a = i + di, b = j + dj;
        if (a < 0 || b < 0 || a >= gw || b >= gd) continue;
        const kk = b * gw + a;
        if (dist[kk] > dist[k] + 1) { dist[kk] = dist[k] + 1; q[tail++] = kk; }
      }
    }
  }

  // Freiraum (Welt-Einheiten) an Position
  clearanceAt(x, z) {
    const k = this.cellIndex(x, z);
    if (k < 0) return 0;
    return this.clear[k] * CELL - 1;
  }
  isPassable(x, z, side = -1) {
    const k = this.cellIndex(x, z);
    if (k < 0 || this.blocked[k]) return false;
    if ((this.flags[k] & 8) && this.gate && this.gate.alive && side !== this.gate.owner) return false;
    return true;
  }
  flagAt(x, z) {
    const k = this.cellIndex(x, z);
    return k < 0 ? 0 : this.flags[k];
  }
  inCastle(x, z) {
    const c = this.castle;
    return !!c && Math.abs(x - c.cx) < c.half - 0.8 && Math.abs(z - c.cz) < c.half - 0.8;
  }

  // ---------- Dekoration ----------
  placeDecor() {
    const r = this.rng;
    const D = this.decor;
    const biome = this.biome;
    const inZone = (x, z, pad) => this.zones.some((zn) => x > zn.x0 - pad && x < zn.x1 + pad && z > zn.z0 - pad && z < zn.z1 + pad);
    // Bäume in Wäldern
    for (const f of this.forests) {
      const n = Math.round(f.r * f.r * 0.22);
      for (let t = 0; t < n; t++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * f.r;
        const x = f.x + Math.cos(a) * d, z = f.z + Math.sin(a) * d / f.rx;
        const k = this.cellIndex(x, z);
        if (k < 0 || this.blocked[k]) continue;
        D.trees.push({ x, z, s: r.range(0.8, 1.35), kind: this.treeKind(), rot: r() * 6 });
      }
      for (let t = 0; t < n * 0.4; t++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * (f.r + 2);
        D.bushes.push({ x: f.x + Math.cos(a) * d, z: f.z + Math.sin(a) * d, s: r.range(0.5, 1) });
      }
    }
    // Einzelne Bäume & Felsen verteilt
    for (let t = 0; t < 70; t++) {
      const x = r.range(-74, 74), z = r.range(-49, 49);
      const k = this.cellIndex(x, z);
      if (k < 0 || this.blocked[k] || this.flags[k] & (2 | 4 | 8 | 16)) continue;
      if (inZone(x, z, 3) || this.nearStructure(x, z, 3)) continue;
      if (this.objective && Math.hypot(x - this.objective.x, z - this.objective.z) < 12) continue;
      if (this.scenario === 'canyon' && this.terrainHeight(x, z) > 3) continue;
      if (r.chance(0.55)) D.trees.push({ x, z, s: r.range(0.8, 1.3), kind: this.treeKind(), rot: r() * 6 });
      else D.rocks.push({ x, z, s: r.range(0.5, 1.1), rot: r() * 6 });
    }
    // Bäume/Felsen im Außenbereich (Rahmen)
    for (let t = 0; t < 420; t++) {
      const x = r.range(-EXT_X + 4, EXT_X - 4), z = r.range(-EXT_Z + 4, EXT_Z - 4);
      if (Math.abs(x) < 77 && Math.abs(z) < 52) continue;
      const h = this.terrainHeight(x, z);
      if (h > 20) continue;
      if (r.chance(0.72)) D.trees.push({ x, z, s: r.range(0.9, 1.6), kind: this.treeKind(true), rot: r() * 6 });
      else D.rocks.push({ x, z, s: r.range(0.8, 2.2), rot: r() * 6 });
    }
    // Canyon-Hochebenen: Felsen und dürre Bäume
    if (this.scenario === 'canyon') {
      for (let t = 0; t < 90; t++) {
        const x = r.range(-74, 74), z = r.range(-49, 49);
        if (this.terrainHeight(x, z) < 10) continue;
        if (r.chance(0.5)) D.trees.push({ x, z, s: r.range(0.8, 1.2), kind: this.treeKind(true), rot: r() * 6 });
        else D.rocks.push({ x, z, s: r.range(0.6, 1.8), rot: r() * 6 });
      }
    }
    // Grasbüschel & Blumen
    const tuftN = biome === 'desert' ? 120 : 260;
    for (let t = 0; t < tuftN; t++) {
      const x = r.range(-80, 80), z = r.range(-54, 54);
      const k = this.cellIndex(x, z);
      if (k >= 0 && (this.blocked[k] || this.flags[k] & (2 | 4 | 16))) continue;
      if (this.terrainHeight(x, z) < this.waterLevel + 0.2 && this.hasWater) continue;
      if (r.chance(0.2)) D.flowers.push({ x, z, c: r.int(0, 3) });
      else D.tufts.push({ x, z, s: r.range(0.6, 1.2), rot: r() * 6 });
    }
    // Blumenwiesen (Büschel statt Einzelblumen)
    if (biome !== 'desert') {
      for (let m = 0; m < 9; m++) {
        const cx = r.range(-70, 70), cz = r.range(-46, 46);
        const k = this.cellIndex(cx, cz);
        if (k < 0 || this.blocked[k] || this.flags[k] & (1 | 2 | 16)) continue;
        const col = r.int(0, 3);
        for (let i = 0; i < 14; i++) {
          const a = r() * 6.28, d = Math.sqrt(r()) * 4;
          D.flowers.push({ x: cx + Math.cos(a) * d, z: cz + Math.sin(a) * d, c: r.chance(0.8) ? col : r.int(0, 3) });
        }
      }
    }
    // Schilf am Ufer & Seerosen
    if (this.hasWater) {
      for (let t = 0; t < 900 && D.reeds.length < 90; t++) {
        const x = r.range(-100, 100), z = r.range(-70, 70);
        const h = this.terrainHeight(x, z);
        if (this.castle && Math.max(Math.abs(x - this.castle.cx), Math.abs(z - this.castle.cz)) < this.castle.half + 2.5) continue;
        if (h > this.waterLevel - 0.3 && h < this.waterLevel + 0.3) D.reeds.push({ x, z, s: r.range(0.7, 1.2), rot: r() * 6 });
      }
      if (biome !== 'winter') {
        for (let t = 0; t < 900 && D.lilies.length < 40; t++) {
          const x = r.range(-100, 100), z = r.range(-70, 70);
          const h = this.terrainHeight(x, z);
          if (h < this.waterLevel - 0.6 && h > this.waterLevel - 2.4 && !this.bridges.some((b) => Math.hypot(b.x - x, b.z - z) < b.len / 2 + 2)) {
            D.lilies.push({ x, z, s: r.range(0.5, 0.9), flower: r.chance(0.25) });
          }
        }
      }
    }
    // Waldboden: umgestürzte Stämme und Pilze
    for (const f of this.forests) {
      const nLogs = r.int(1, 2);
      for (let i = 0; i < nLogs; i++) {
        const a = r() * 6.28, d = r() * f.r * 0.8;
        const x = f.x + Math.cos(a) * d, z = f.z + Math.sin(a) * d;
        const k = this.cellIndex(x, z);
        if (k >= 0 && !this.blocked[k]) D.logs.push({ x, z, rot: r() * 6, len: r.range(2.5, 4.5) });
      }
      for (let i = 0; i < 6; i++) {
        const a = r() * 6.28, d = r() * f.r;
        D.mushrooms.push({ x: f.x + Math.cos(a) * d, z: f.z + Math.sin(a) * d, s: r.range(0.6, 1.1), red: r.chance(0.5) });
      }
    }
    // Felder, Höfe und eine Windmühle im Umland
    if (biome !== 'desert' || r.chance(0.5)) {
      const flatAt = (x, z, w) => {
        let lo = 1e9, hi = -1e9;
        for (const [ox, oz] of [[-w, -w], [w, -w], [-w, w], [w, w], [0, 0]]) { const h = this.terrainHeight(x + ox, z + oz); lo = Math.min(lo, h); hi = Math.max(hi, h); }
        return hi - lo < 1.4 && lo > this.waterLevel + 0.3 && hi < 9;
      };
      for (let t = 0; t < 400 && D.fields.length < 10; t++) {
        const x = r.range(-104, 104), z = r.range(-74, 74);
        if (Math.abs(x) < 81 && Math.abs(z) < 55) continue;
        const w = r.range(8, 14), d = r.range(6, 10);
        if (!flatAt(x, z, Math.max(w, d) / 2)) continue;
        if (D.fields.some((f) => Math.hypot(f.x - x, f.z - z) < 14)) continue;
        D.fields.push({ x, z, w, d, rot: r.range(-0.5, 0.5), kind: r.int(0, 3) });
      }
      for (const f of D.fields.slice(0, 4)) {
        const x = f.x + Math.cos(f.rot) * (f.w / 2 + 4), z = f.z + Math.sin(f.rot) * (f.w / 2 + 4);
        if (flatAt(x, z, 2.5)) D.farms.push({ x, z, rot: f.rot });
      }
      for (let t = 0; t < 200 && !D.mill; t++) {
        const x = r.range(-100, 100), z = r.range(-70, 70);
        if (Math.abs(x) < 82 && Math.abs(z) < 56) continue;
        if (flatAt(x, z, 2.5) && !D.fields.some((f) => Math.hypot(f.x - x, f.z - z) < 9)) D.mill = { x, z, rot: r() * 6 };
      }
    }
    // Zäune an Straßen
    if (this.scenario !== 'canyon') {
      for (let n = 0; n < 3; n++) {
        const x = r.range(-40, 40);
        const z = this.roadZ + Math.sin(x * 0.05 + this.phase) * 6 + (r.chance(0.5) ? 3 : -3);
        const k = this.cellIndex(x, z);
        if (k < 0 || this.blocked[k] || this.nearStructure(x, z, 6)) continue;
        D.fences.push({ x, z, len: r.int(3, 6), rot: Math.atan2(Math.cos(x * 0.05 + this.phase) * 0.3, 1) });
      }
    }
  }
  isFordZone(x, z) {
    if (this.fords && this.river) {
      for (const fz of this.fords) if (Math.abs(z - fz) < 5 && Math.abs(x - this.riverX(z)) < this.river.half + 4) return true;
    }
    for (const f of this.features || []) if (f.type === 'marsh' && Math.hypot(x - f.x, z - f.z) < f.rad * 1.35) return true;
    return false;
  }

  // Räumliches Raster der Baumstämme im Spielfeld (Zellen 4×4)
  buildTreeHash() {
    const W = 42, D = 30;
    this.treeGrid = { W, D, cells: Array.from({ length: W * D }, () => []) };
    for (const t of this.decor.trees) {
      if (Math.abs(t.x) > 80 || Math.abs(t.z) > 56) continue;
      const i = Math.floor((t.x + 84) / 4), j = Math.floor((t.z + 60) / 4);
      if (i < 0 || j < 0 || i >= W || j >= D) continue;
      const r = (t.kind === 'pine' ? 1.05 : t.kind === 'palm' || t.kind === 'cactus' ? 0.7 : 0.85) * t.s;
      this.treeGrid.cells[j * W + i].push({ x: t.x, z: t.z, r });
    }
  }
  // schiebt (x,z) aus Baumstämmen heraus; true falls verschoben
  avoidTrees(x, z, out, pad = 0) {
    const g = this.treeGrid;
    if (!g) return false;
    const ci = Math.floor((x + 84) / 4), cj = Math.floor((z + 60) / 4);
    let moved = false;
    for (let dj = -1; dj <= 1; dj++) {
      const j = cj + dj;
      if (j < 0 || j >= g.D) continue;
      for (let di = -1; di <= 1; di++) {
        const i = ci + di;
        if (i < 0 || i >= g.W) continue;
        for (const t of g.cells[j * g.W + i]) {
          const r = t.r + pad;
          const dx = x - t.x, dz = z - t.z, d2 = dx * dx + dz * dz;
          if (d2 < r * r) {
            const d = Math.sqrt(d2) || 1e-3;
            x = t.x + (d2 > 1e-6 ? dx / d : 1) * r;
            z = t.z + (d2 > 1e-6 ? dz / d : 0) * r;
            moved = true;
          }
        }
      }
    }
    out[0] = x; out[1] = z;
    return moved;
  }
  treesNear(x, z, rad) {
    const g = this.treeGrid;
    if (!g) return 0;
    let n = 0;
    const ci = Math.floor((x + 84) / 4), cj = Math.floor((z + 60) / 4), R = Math.ceil(rad / 4);
    for (let j = cj - R; j <= cj + R; j++) for (let i = ci - R; i <= ci + R; i++) {
      if (i < 0 || j < 0 || i >= g.W || j >= g.D) continue;
      for (const t of g.cells[j * g.W + i]) if (Math.abs(t.x - x) < rad && Math.abs(t.z - z) < rad) n++;
    }
    return n;
  }

  treeKind(outer = false) {
    const b = this.biome;
    const r = this.rng;
    if (b === 'desert') return r.chance(0.6) ? 'palm' : 'cactus';
    if (b === 'winter') return r.chance(0.8) ? 'pine' : 'bare';
    if (b === 'highland') return r.chance(0.6) ? 'pine' : r.chance(0.5) ? 'bare' : 'oak';
    if (b === 'spring') return r.chance(0.3) ? 'pine' : r.chance(0.75) ? 'oak' : 'birch';
    if (this.scenario === 'forest') return r.chance(0.55) ? 'pine' : 'oak';
    return r.chance(outer ? 0.5 : 0.35) ? 'pine' : r.chance(0.85) ? 'oak' : 'birch';
  }

  // Terrain-Rasterinfo für den Renderer
  get extent() { return { EXT_X, EXT_Z, STEP }; }
}
