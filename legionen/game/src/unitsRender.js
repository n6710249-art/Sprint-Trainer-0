// Instanziertes Rendering aller Soldaten + Feldzeichen + Effekte (Funken, Staub, Pfeile)
import * as THREE from 'three';
import { FACTIONS, ACCENTS } from './data.js';
import { buildPartGeometries, partsFor } from './models.js';

const _base = new THREE.Matrix4();
const _loc = new THREE.Matrix4();
const _out = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _e = new THREE.Euler();
const _eA = new THREE.Euler(0, 0, 0, 'YXZ');
const _p = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);
const _c = new THREE.Color();
const _axisY = new THREE.Vector3(0, 1, 0);
const HIDE = new THREE.Matrix4().makeScale(0, 0, 0);

export class UnitRenderer {
  constructor(scene, legions, map, shadows, tod = 'day') {
    this.scene = scene;
    this.map = map;
    this.legions = legions;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.geos = buildPartGeometries();
    this.mat = new THREE.MeshLambertMaterial({ flatShading: true });
    // Instanzen zählen
    const need = {};
    this.defs = {};
    for (const L of legions) {
      const key = L.side + ':' + L.typeId;
      if (!this.defs[key]) this.defs[key] = partsFor(L.side, L.typeId);
      for (const p of this.defs[key]) need[p.g] = (need[p.g] || 0) + L.maxCount;
    }
    this.meshes = {};
    this.counters = {};
    for (const g in need) {
      const m = new THREE.InstancedMesh(this.geos[g], this.mat, need[g]);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.castShadow = shadows;
      m.receiveShadow = false;
      m.frustumCulled = false;
      m.count = need[g];
      for (let i = 0; i < need[g]; i++) m.setMatrixAt(i, HIDE);
      this.meshes[g] = m;
      this.counters[g] = 0;
      this.group.add(m);
    }
    // Indizes + Farben + Varianten zuweisen
    for (const L of legions) {
      const def = this.defs[L.side + ':' + L.typeId];
      const pal = { ...FACTIONS[L.side].colors, accent: ACCENTS[L.side][L.index % ACCENTS[L.side].length] };
      L.accent = pal.accent;
      const groups = {};
      for (const p of def) if (p.v) groups[p.v[0]] = Math.max(groups[p.v[0]] || 0, p.v[1] + 1);
      L.soldiers.forEach((s, si) => {
        s.pi = [];
        s.vis = [];
        const officer = si === 0;
        const pick = {};
        for (const g in groups) pick[g] = (Math.random() * (groups[g] + (g === 'helm' ? 1 : 0))) | 0; // Helm: auch schlicht möglich
        const roleChoice = (Math.random() * 3) | 0;
        const tint = 0.9 + Math.random() * 0.14;
        for (const p of def) {
          const idx = this.counters[p.g]++;
          s.pi.push(idx);
          let vis = true;
          if (p.off && !officer) vis = false;
          if (p.noOff && officer) vis = false;
          if (p.v && pick[p.v[0]] !== p.v[1]) vis = false;
          if (p.chance !== undefined && !officer && Math.random() > p.chance) vis = false;
          s.vis.push(vis);
          const role = Array.isArray(p.role) ? p.role[roleChoice % p.role.length] : p.role;
          _c.setHex(pal[role] ?? 0xff00ff);
          const vary = role === 'skin' || role.startsWith('horse') ? 0.82 + Math.random() * 0.3 : role === 'accent' ? 1 : tint;
          _c.multiplyScalar(vary);
          this.meshes[p.g].setColorAt(idx, _c);
        }
        s.colored = true;
      });
    }
    for (const g in this.meshes) if (this.meshes[g].instanceColor) this.meshes[g].instanceColor.needsUpdate = true;

    // Feldzeichen je Legion
    this.standards = new Map();
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x5a4028, flatShading: true });
    for (const L of legions) {
      const F = FACTIONS[L.side];
      const g = new THREE.Group();
      const pole = new THREE.Mesh(this.geos.pole, poleMat);
      g.add(pole);
      const topMat = new THREE.MeshLambertMaterial({ color: ACCENTS[L.side][L.index % ACCENTS[L.side].length], flatShading: true });
      const top = new THREE.Mesh(this.geos.eagle, topMat);
      g.add(top);
      const flagGeo = new THREE.PlaneGeometry(1.3, 1.6, 3, 1);
      flagGeo.translate(0, 2.35, 0.08);
      const flag = new THREE.Mesh(flagGeo, new THREE.MeshLambertMaterial({ color: F.colors.banner, side: THREE.DoubleSide, flatShading: true }));
      flag.userData.base = Float32Array.from(flagGeo.attributes.position.array);
      g.add(flag);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.08), topMat);
      bar.position.y = 3.2;
      g.add(bar);
      g.traverse((o) => { o.castShadow = shadows; });
      // nachts und im Nebel: Fackel am Feldzeichen
      let torch = null;
      if (tod === 'night' || tod === 'fog' || tod === 'dusk') {
        torch = new THREE.Group();
        const f1 = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.7, 5), new THREE.MeshBasicMaterial({ color: 0xffa23a }));
        const f2 = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.45, 5), new THREE.MeshBasicMaterial({ color: 0xfff0a0 }));
        f1.position.y = 0.35; f2.position.y = 0.3;
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: tod === 'night' ? 0.22 : 0.12, depthWrite: false }));
        glow.position.y = 0.35;
        torch.add(f1, f2, glow);
        torch.position.set(0.75, 3.3, 0);
        g.add(torch);
      }
      this.group.add(g);
      this.standards.set(L, { g, flag, torch });
    }

    // Auswahlringe
    this.ringMat = new THREE.MeshBasicMaterial({ color: 0xffe07a, transparent: true, opacity: 0.85, depthWrite: false });
    this.rings = new Map();

    this.fx = new FX(scene);
  }

  ringFor(L) {
    let r = this.rings.get(L);
    if (!r) {
      const geo = new THREE.RingGeometry(0.92, 1, 40, 1);
      geo.rotateX(-Math.PI / 2);
      const mat = this.ringMat.clone();
      mat.color.set(L.side === 0 ? 0xffe07a : 0xff6a5a);
      r = new THREE.Mesh(geo, mat);
      r.renderOrder = 3;
      this.group.add(r);
      this.rings.set(L, r);
    }
    return r;
  }

  // selected: einzelne Legion oder Set mehrerer Legionen
  update(t, dt, selected, hover) {
    const has = (L) => (selected instanceof Set ? selected.has(L) : selected === L);
    const map = this.map;
    for (const L of this.legions) {
      const def = this.defs[L.side + ':' + L.typeId];
      const mounted = L.typeId === 'cavalry';
      const fighting = L.state === 'melee';
      const shooting = L.state === 'shoot';
      for (const s of L.soldiers) {
        if (!s.alive && s.deadT > 2.2) {
          if (s.settled) continue;
          s.settled = true;
        }
        const dead = !s.alive;
        const fall = dead ? Math.min(1, s.deadT / 0.6) : 0;
        _e.set(0, s.yaw, 0);
        _q.setFromEuler(_e);
        let y = s.y;
        if (!dead && s.moving) y += Math.abs(Math.sin(s.walk * (mounted ? 0.9 : 1.4))) * (mounted ? 0.12 : 0.07);
        if (dead) {
          // umfallen
          const ang = fall * fall * (mounted ? 1.45 : 1.5) * s.fall;
          _e.set(mounted ? 0 : -ang, 0, mounted ? ang : 0);
          _q2.setFromEuler(_e);
          _q.multiply(_q2);
          y -= fall * 0.15;
        }
        _base.compose(_p.set(s.x, y, s.z), _q, _s.set(1, 1, 1));
        const w = s.walk * (mounted ? 0.9 : 1.4);
        for (let i = 0; i < def.length; i++) {
          const p = def[i];
          if (!s.vis[i]) { if (!s.hid) this.meshes[p.g].setMatrixAt(s.pi[i], HIDE); continue; }
          let rx = p.r[0], ry = p.r[1], rz = p.r[2];
          let px = p.p[0], py = p.p[1], pz = p.p[2];
          if (!dead) {
            switch (p.anim) {
              case 'legL': rx += s.moving ? Math.sin(w) * 0.55 : 0; break;
              case 'legR': rx -= s.moving ? Math.sin(w) * 0.55 : 0; break;
              case 'hlegF': rx += s.moving ? Math.sin(w * 1.3) * 0.6 : 0; break;
              case 'hlegB': rx -= s.moving ? Math.sin(w * 1.3) * 0.6 : 0; break;
              case 'horse': rx += s.moving ? Math.sin(w * 1.3) * 0.04 : 0; break;
              case 'arm':
                rx += fighting ? -1.4 + s.swing * 2.0 : 0.35 + (s.moving ? Math.sin(w) * 0.2 : 0);
                break;
              case 'pike':
                rx += fighting ? 0.02 + s.swing * 0.08 : -1.48;
                if (fighting) pz += s.swing * 0.35;
                break;
              case 'lance':
                rx += fighting || L.chargeT > 0 ? 0.08 + s.swing * 0.2 : L.speedCur > L.T.speed * 0.6 ? 0.1 : -1.1;
                break;
              case 'shield':
                if (fighting) pz += 0.08;
                break;
              case 'bow':
                if (s.shoot > 0 || shooting) { rx -= 0.5; py += 0.15; }
                break;
            }
          }
          _e.set(rx, ry, rz);
          _q2.setFromEuler(_e);
          _loc.compose(_p.set(px, py, pz), _q2, _s.set(1, 1, 1));
          _out.multiplyMatrices(_base, _loc);
          this.meshes[p.g].setMatrixAt(s.pi[i], _out);
        }
        s.hid = true;
        if (dead && !s.darkened) {
          s.darkened = true;
          for (let i = 0; i < def.length; i++) {
            const m = this.meshes[def[i].g];
            m.getColorAt(s.pi[i], _c);
            _c.multiplyScalar(0.62);
            m.setColorAt(s.pi[i], _c);
            m.instanceColor.needsUpdate = true;
          }
        }
      }
      // Feldzeichen
      const st = this.standards.get(L);
      if (L.alive) {
        st.g.visible = true;
        const lead = L.soldiers.find((q) => q.alive && q.slot === Math.floor(L.cols / 2)) || L.soldiers.find((q) => q.alive);
        const bx = lead ? lead.x : L.x, bz = lead ? lead.z : L.z;
        st.g.position.set(bx - L.fwdX * 0.2, map.getHeight(bx, bz) + (L.typeId === 'cavalry' ? 1.3 : 0.4), bz - L.fwdZ * 0.2);
        st.g.rotation.y = L.face + Math.PI / 2;
        const fg = st.flag.geometry.attributes.position, base = st.flag.userData.base;
        for (let i = 0; i < fg.count; i++) {
          const x = base[i * 3];
          fg.array[i * 3 + 2] = base[i * 3 + 2] + Math.sin(x * 3 + t * 5 + L.id) * 0.12 * (x + 0.65);
        }
        fg.needsUpdate = true;
        if (st.torch) { const k = 0.85 + Math.sin(t * 19 + L.id) * 0.1 + Math.sin(t * 27 + L.id * 3) * 0.07; st.torch.scale.set(1, k, 1); }
      } else if (st.g.visible) {
        st.g.rotation.z = Math.min(1.4, (st.g.rotation.z || 0) + dt * 2);
        if (st.g.rotation.z >= 1.4) st.g.visible = false;
      }
      // Ring
      const isSel = has(L) || hover === L;
      if (isSel && L.alive) {
        const r = this.ringFor(L);
        r.visible = true;
        const rad = Math.max(L.halfW, L.halfD) + 1.2;
        r.scale.set(rad, 1, rad);
        r.position.set(L.x, map.getHeight(L.x, L.z) + 0.25, L.z);
        r.material.opacity = has(L) ? 0.65 + Math.sin(t * 5) * 0.2 : 0.45;
      } else if (this.rings.has(L)) this.rings.get(L).visible = false;
    }
    for (const g in this.meshes) this.meshes[g].instanceMatrix.needsUpdate = true;
    this.fx.update(t, dt, map);
  }

  dispose() {
    this.scene.remove(this.group);
    this.fx.dispose();
    this.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
}

// ---------------- Effekte ----------------
class Pool {
  constructor(scene, geo, mat, n) {
    this.mesh = new THREE.InstancedMesh(geo, mat, n);
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.items = [];
    this.n = n;
    scene.add(this.mesh);
    for (let i = 0; i < n; i++) this.mesh.setMatrixAt(i, HIDE);
  }
  spawn(o) { if (this.items.length < this.n) this.items.push(o); }
}

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.sparks = new Pool(scene, new THREE.TetrahedronGeometry(0.12), new THREE.MeshBasicMaterial({ color: 0xfff0b0 }), 260);
    this.dust = new Pool(scene, new THREE.IcosahedronGeometry(0.5, 0), new THREE.MeshLambertMaterial({ color: 0xc8b594, flatShading: true }), 220);
    const ag = new THREE.BoxGeometry(0.05, 0.05, 1.0);
    this.arrows = new Pool(scene, ag, new THREE.MeshBasicMaterial({ color: 0x3a2a1a }), 420);
    this.debris = new Pool(scene, new THREE.BoxGeometry(0.4, 0.15, 0.7), new THREE.MeshLambertMaterial({ color: 0x6b4526, flatShading: true }), 60);
    this.battleArrows = [];
  }
  burst(x, y, z, n = 8, big = false) {
    for (let i = 0; i < n; i++) {
      this.sparks.spawn({ x, y, z, vx: (Math.random() - 0.5) * 6, vy: 2 + Math.random() * 4, vz: (Math.random() - 0.5) * 6, life: 0.35 + Math.random() * 0.25, t: 0, s: big ? 1.6 : 1 });
    }
  }
  puff(x, y, z, n = 3, size = 1) {
    for (let i = 0; i < n; i++) {
      this.dust.spawn({ x: x + (Math.random() - 0.5) * 2, y: y + 0.3, z: z + (Math.random() - 0.5) * 2, vx: (Math.random() - 0.5) * 1.5, vy: 0.6 + Math.random(), vz: (Math.random() - 0.5) * 1.5, life: 0.9 + Math.random() * 0.6, t: 0, s: size * (0.6 + Math.random() * 0.6) });
    }
  }
  splinters(x, y, z) {
    for (let i = 0; i < 24; i++) {
      this.debris.spawn({ x, y: y + 2 + Math.random() * 2, z: z + (Math.random() - 0.5) * 5, vx: (Math.random() - 0.5) * 8, vy: 3 + Math.random() * 5, vz: (Math.random() - 0.5) * 8, life: 2.5, t: 0, rx: Math.random() * 6, ry: Math.random() * 6 });
    }
  }
  update(t, dt, map) {
    const upd = (pool, fn) => {
      const items = pool.items;
      let w = 0;
      for (let i = 0; i < items.length; i++) {
        const o = items[i];
        o.t += dt;
        if (o.t < o.life) { items[w++] = o; }
      }
      items.length = w;
      for (let i = 0; i < pool.n; i++) {
        if (i < items.length) { fn(items[i]); pool.mesh.setMatrixAt(i, _out); }
        else if (i < pool.lastCount) pool.mesh.setMatrixAt(i, HIDE);
      }
      pool.lastCount = items.length;
      pool.mesh.instanceMatrix.needsUpdate = true;
    };
    upd(this.sparks, (o) => {
      o.vy -= 14 * dt; o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt;
      const k = (1 - o.t / o.life) * o.s;
      _out.compose(_p.set(o.x, o.y, o.z), _q.setFromEuler(_e.set(o.t * 9, o.t * 7, 0)), _s.set(k, k, k));
    });
    upd(this.dust, (o) => {
      o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt; o.vy *= 0.96;
      const k = Math.sin((o.t / o.life) * Math.PI) * o.s;
      _out.compose(_p.set(o.x, o.y, o.z), _q.identity(), _s.set(k, k, k));
    });
    upd(this.debris, (o) => {
      o.vy -= 14 * dt; o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt;
      const gh = map.getHeight(o.x, o.z) + 0.1;
      if (o.y < gh) { o.y = gh; o.vx *= 0.5; o.vz *= 0.5; o.vy = 0; } else { o.rx += dt * 6; }
      _out.compose(_p.set(o.x, o.y, o.z), _q.setFromEuler(_e.set(o.rx, o.ry, 0)), _s.set(1, 1, 1));
    });
    // Pfeile aus der Simulation
    const A = this.battleArrows;
    const pool = this.arrows;
    let n = 0;
    for (const a of A) {
      const k = (this.simTime - a.t0) / a.dur;
      if (k < 0 || k > 1 || n >= pool.n) continue;
      const x = a.x0 + (a.x1 - a.x0) * k, z = a.z0 + (a.z1 - a.z0) * k;
      const y = a.y0 + (a.y1 - a.y0) * k + Math.sin(k * Math.PI) * a.arc;
      const dx = a.x1 - a.x0, dz = a.z1 - a.z0;
      const dy = (a.y1 - a.y0) + Math.cos(k * Math.PI) * Math.PI * a.arc;
      const hl = Math.hypot(dx, dz);
      const yaw = Math.atan2(dx, dz), pitch = -Math.atan2(dy, hl);
      _out.compose(_p.set(x, y, z), _q.setFromEuler(_eA.set(pitch, yaw, 0)), _s.set(1, 1, 1));
      pool.mesh.setMatrixAt(n++, _out);
    }
    for (let i = n; i < (pool.lastCount || 0); i++) pool.mesh.setMatrixAt(i, HIDE);
    pool.lastCount = n;
    pool.mesh.instanceMatrix.needsUpdate = true;
  }
  dispose() {
    for (const p of [this.sparks, this.dust, this.arrows, this.debris]) { this.scene.remove(p.mesh); p.mesh.geometry.dispose(); }
  }
}
