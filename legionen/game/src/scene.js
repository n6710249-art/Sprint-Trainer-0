// Renderer, Licht, Himmel, Kamera-Steuerung und Karten-Overlays
import * as THREE from 'three';
import { BIOMES, FACTIONS } from './data.js';

export class Stage {
  constructor(canvas, quality) {
    this.canvas = canvas;
    this.quality = quality;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: quality.aa, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.pixelRatio));
    this.renderer.shadowMap.enabled = quality.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, 1, 1, 900);
    this.cam = { x: 0, z: 4, dist: 118, yaw: 0, pitch: 0.95, tx: 0, tz: 4, tdist: 118, tyaw: 0, tpitch: 0.95 };
    this.bounds = { x: 78, z: 52 };
    this.raycaster = new THREE.Raycaster();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  setupEnvironment(biomeId, fogDensity) {
    const B = BIOMES[biomeId];
    const scene = this.scene;
    // alte Lichter entfernen
    if (this.lights) for (const l of this.lights) scene.remove(l);
    if (this.sky) scene.remove(this.sky);
    const hemi = new THREE.HemisphereLight(B.hemi[0], B.hemi[1], 1.35);
    const sun = new THREE.DirectionalLight(B.sun, 2.1);
    sun.position.set(-75, 95, 55);
    sun.target.position.set(0, 0, 0);
    if (this.quality.shadows) {
      sun.castShadow = true;
      const s = this.quality.shadowSize;
      sun.shadow.mapSize.set(s, s);
      const c = sun.shadow.camera;
      c.left = -95; c.right = 95; c.top = 70; c.bottom = -70; c.near = 10; c.far = 320;
      sun.shadow.bias = -0.0008;
      sun.shadow.normalBias = 0.4;
    }
    const amb = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(hemi, sun, sun.target, amb);
    this.lights = [hemi, sun, sun.target, amb];
    // Himmel (Farbverlauf)
    const skyGeo = new THREE.SphereGeometry(600, 24, 12);
    const top = new THREE.Color(B.sky[0]), bottom = new THREE.Color(B.sky[1]);
    const cols = [];
    const pos = skyGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 600;
      const c = bottom.clone().lerp(top, Math.max(0, Math.min(1, y * 1.6 + 0.1)));
      cols.push(c.r, c.g, c.b);
    }
    skyGeo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    this.sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    scene.add(this.sky);
    scene.fog = new THREE.FogExp2(B.fog, fogDensity);
    scene.background = new THREE.Color(B.fog);
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // bei schmalen Bildschirmen etwas weiter weg
    this.camera.fov = w / h < 1.3 ? 55 : 42;
    this.camera.updateProjectionMatrix();
  }

  // Kamera
  updateCamera(dt) {
    const c = this.cam;
    if (this.vel) {
      this.pan(this.vel.x * dt, this.vel.y * dt);
      const d = Math.exp(-dt * 4.5);
      this.vel.x *= d; this.vel.y *= d;
      if (Math.hypot(this.vel.x, this.vel.y) < 15) this.vel = null;
    }
    const k = 1 - Math.exp(-dt * 9);
    c.tx = Math.max(-this.bounds.x, Math.min(this.bounds.x, c.tx));
    c.tz = Math.max(-this.bounds.z, Math.min(this.bounds.z, c.tz));
    c.tdist = Math.max(22, Math.min(150, c.tdist));
    c.tpitch = Math.max(0.42, Math.min(1.38, c.tpitch));
    c.x += (c.tx - c.x) * k; c.z += (c.tz - c.z) * k;
    c.dist += (c.tdist - c.dist) * k;
    c.yaw += (c.tyaw - c.yaw) * k;
    c.pitch += (c.tpitch - c.pitch) * k;
    const cp = Math.cos(c.pitch), sp = Math.sin(c.pitch);
    const px = c.x + Math.sin(c.yaw) * cp * c.dist;
    const pz = c.z + Math.cos(c.yaw) * cp * c.dist;
    let py = sp * c.dist;
    if (this.groundFn) py = Math.max(py, this.groundFn(px, pz) + 4);
    this.camera.position.set(px, py, pz);
    this.camera.lookAt(c.x, 0, c.z);
  }
  focus(x, z, dist) {
    this.cam.tx = x; this.cam.tz = z;
    if (dist) this.cam.tdist = dist;
  }
  pan(dxPx, dyPx) {
    const c = this.cam;
    const scale = (c.dist * 1.1) / window.innerHeight;
    const cy = Math.cos(c.yaw), sy = Math.sin(c.yaw);
    // rechts = (cos yaw, -sin yaw), vorwärts (vom Betrachter weg) = (-sin yaw, -cos yaw)
    const rx = cy, rz = -sy, fx = -sy, fz = -cy;
    c.tx -= (rx * dxPx - fx * dyPx) * scale;
    c.tz -= (rz * dxPx - fz * dyPx) * scale;
  }
  // Schwung nach dem Wischen
  fling(vx, vy) {
    const sp = Math.hypot(vx, vy);
    if (sp < 120) return;
    const k = Math.min(1, 2400 / sp);
    this.vel = { x: vx * k, y: vy * k };
  }
  stopFling() { this.vel = null; }
  zoom(f) { this.cam.tdist *= f; }
  rotate(d) { this.cam.tyaw += d; }
  tilt(d) { this.cam.tpitch += d; }

  // Bildschirm -> Bodenpunkt
  pick(px, py, meshes) {
    const ndc = new THREE.Vector2((px / window.innerWidth) * 2 - 1, -(py / window.innerHeight) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hit = this.raycaster.intersectObjects(meshes, false)[0];
    return hit ? hit.point : null;
  }
  project(x, y, z, out) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    out.x = (v.x * 0.5 + 0.5) * window.innerWidth;
    out.y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    out.visible = v.z < 1 && v.z > -1;
    return out;
  }

  render() { this.renderer.render(this.scene, this.camera); }
}

// ---------- Overlays: Aufstellungszonen, Routen, Zielmarker ----------
export class Overlays {
  constructor(scene, map) {
    this.scene = scene;
    this.map = map;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.zoneMeshes = [];
    this.routeGroup = new THREE.Group();
    this.group.add(this.routeGroup);
    this.objMesh = null;
    this.makeZones();
    this.makeObjective();
  }

  terrainPatch(x0, z0, x1, z1, color, opacity, lift = 0.25) {
    const nx = Math.max(2, Math.ceil((x1 - x0) / 2)), nz = Math.max(2, Math.ceil((z1 - z0) / 2));
    const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0, nx, nz);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i) + (x0 + x1) / 2, z = pos.getZ(i) + (z0 + z1) / 2;
      pos.setXYZ(i, x, Math.max(this.map.getHeight(x, z), this.map.hasWater ? this.map.waterLevel : -99) + lift, z);
    }
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }));
    m.renderOrder = 2;
    return m;
  }

  makeZones() {
    for (let s = 0; s < 2; s++) {
      const z = this.map.zones[s];
      const col = s === 0 ? 0x4a8cf0 : 0xe0473c;
      const g = new THREE.Group();
      g.add(this.terrainPatch(z.x0, z.z0, z.x1, z.z1, col, 0.16));
      // Rand
      const pts = [];
      const add = (x, zz) => pts.push(new THREE.Vector3(x, this.map.getHeight(x, zz) + 0.4, zz));
      for (let x = z.x0; x <= z.x1; x += 1.5) add(x, z.z0);
      for (let zz = z.z0; zz <= z.z1; zz += 1.5) add(z.x1, zz);
      for (let x = z.x1; x >= z.x0; x -= 1.5) add(x, z.z1);
      for (let zz = z.z1; zz >= z.z0; zz -= 1.5) add(z.x0, zz);
      const lg = new THREE.BufferGeometry().setFromPoints(pts);
      g.add(new THREE.Line(lg, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.9 })));
      this.group.add(g);
      this.zoneMeshes.push(g);
    }
  }
  showZones(v, sideOnly = -1) {
    this.zoneMeshes.forEach((g, i) => { g.visible = v && (sideOnly < 0 || sideOnly === i); });
  }

  makeObjective() {
    const ob = this.map.objective;
    if (!ob) return;
    const geo = new THREE.RingGeometry(ob.r - 0.6, ob.r, 48, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffe07a, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(ob.x, this.map.getHeight(ob.x, ob.z) + 0.35, ob.z);
    m.renderOrder = 2;
    this.group.add(m);
    this.objMesh = m;
    const inner = this.terrainPatch(ob.x - ob.r, ob.z - ob.r, ob.x + ob.r, ob.z + ob.r, 0xffe07a, 0.0, 0.2);
    this.group.add(inner);
  }
  updateObjective(t) {
    const ob = this.map.objective;
    if (!this.objMesh) return;
    let col = 0xffe07a;
    if (ob.present) {
      if (ob.present[0] > 0 && ob.present[1] === 0) col = 0x4a8cf0;
      else if (ob.present[1] > 0 && ob.present[0] === 0) col = 0xe0473c;
      else if (ob.present[0] > 0 && ob.present[1] > 0) col = 0xffffff;
    }
    this.objMesh.material.color.setHex(col);
    this.objMesh.material.opacity = 0.45 + Math.sin(t * 3) * 0.15;
    this.objMesh.rotation.y = t * 0.2;
  }

  clearRoutes() {
    for (const c of [...this.routeGroup.children]) { this.routeGroup.remove(c); c.geometry && c.geometry.dispose(); }
  }
  // Route als flaches Band über dem Gelände
  addRoute(pts, color, dashed = false, width = 0.7) {
    if (pts.length < 2) return;
    // gleichmäßig abtasten
    const samples = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
      const d = Math.hypot(bx - ax, bz - az);
      const n = Math.max(1, Math.ceil(d / 1.2));
      for (let k = 0; k < n; k++) samples.push([ax + (bx - ax) * (k / n), az + (bz - az) * (k / n)]);
    }
    samples.push(pts[pts.length - 1]);
    const pos = [];
    const lift = 0.35;
    const H = (x, z) => Math.max(this.map.getHeight(x, z), this.map.hasWater ? this.map.waterLevel : -99) + lift;
    for (let i = 0; i < samples.length - 1; i++) {
      if (dashed && i % 3 === 2) continue;
      const [ax, az] = samples[i], [bx, bz] = samples[i + 1];
      const dx = bx - ax, dz = bz - az, d = Math.hypot(dx, dz) || 1;
      const nx = -dz / d * width / 2, nz = dx / d * width / 2;
      const ha = H(ax, az), hb = H(bx, bz);
      pos.push(ax + nx, ha, az + nz, bx + nx, hb, bz + nz, ax - nx, ha, az - nz);
      pos.push(bx + nx, hb, bz + nz, bx - nx, hb, bz - nz, ax - nx, ha, az - nz);
    }
    // Pfeilspitze
    const n = samples.length;
    const [ex, ez] = samples[n - 1], [px, pz] = samples[Math.max(0, n - 3)];
    const dx = ex - px, dz = ez - pz, d = Math.hypot(dx, dz) || 1;
    const ux = dx / d, uz = dz / d;
    const he = H(ex, ez);
    const s = width * 2.4;
    pos.push(ex + ux * s, he, ez + uz * s, ex - uz * s, he, ez + ux * s, ex + uz * s, he, ez - ux * s);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, depthWrite: false, side: THREE.DoubleSide }));
    m.renderOrder = 4;
    this.routeGroup.add(m);
  }
  addMarker(x, z, color, r = 3) {
    const geo = new THREE.RingGeometry(r - 0.45, r, 32, 1);
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide }));
    m.position.set(x, this.map.getHeight(x, z) + 0.45, z);
    m.renderOrder = 4;
    this.routeGroup.add(m);
    return m;
  }
  addFlag(x, z, color, label) {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 3, 4), new THREE.MeshBasicMaterial({ color: 0x2a2a2a }));
    pole.position.y = 1.5;
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.8), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
    flag.position.set(0.6, 2.6, 0);
    g.add(pole, flag);
    g.position.set(x, this.map.getHeight(x, z), z);
    this.routeGroup.add(g);
  }

  // Umrisse der eigenen Legionen + Drehpfeil der gewählten (Aufstellung/Befehle)
  updateFootprints(legions, selected, show, withArrow, t) {
    if (!this.fp) {
      this.fp = new Map();
      const ag = new THREE.BufferGeometry();
      ag.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 1.6, -1.3, 0, -0.6, 1.3, 0, -0.6, -0.55, 0, -0.6, 0.55, 0, -0.6, 0, 0, -1.9, 0.55, 0, -0.6, -0.55, 0, -1.9, 0.55, 0, -1.9], 3));
      this.arrow = new THREE.Mesh(ag, new THREE.MeshBasicMaterial({ color: 0xffd36a, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
      this.arrow.renderOrder = 5;
      this.group.add(this.arrow);
    }
    const H = (x, z) => Math.max(this.map.getHeight(x, z), this.map.hasWater ? this.map.waterLevel : -99) + 0.45;
    for (const L of legions) {
      let line = this.fp.get(L);
      if (!line) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(33 * 3), 3));
        line = new THREE.LineLoop(g, new THREE.LineBasicMaterial({ color: 0x6aa2ff, transparent: true, opacity: 0.85, depthWrite: false }));
        line.renderOrder = 5;
        line.frustumCulled = false;
        this.group.add(line);
        this.fp.set(L, line);
      }
      line.visible = show && L.alive;
      if (!line.visible) continue;
      const sel = L === selected;
      line.material.color.setHex(sel ? 0xffd36a : 0x6aa2ff);
      line.material.opacity = sel ? 0.95 : 0.6;
      const fx = L.fwdX, fz = L.fwdZ, lx = fz, lz = -fx;
      const w = L.halfW + 0.3, d = L.halfD + 0.3;
      const corners = [[-w, d], [w, d], [w, -d], [-w, -d]];
      const pos = line.geometry.attributes.position;
      let k = 0;
      for (let c = 0; c < 4; c++) {
        const [a0, b0] = corners[c], [a1, b1] = corners[(c + 1) % 4];
        for (let i = 0; i < 8; i++) {
          const f = i / 8, a = a0 + (a1 - a0) * f, b = b0 + (b1 - b0) * f;
          const x = L.x + lx * a + fx * b, z = L.z + lz * a + fz * b;
          pos.setXYZ(k++, x, H(x, z), z);
        }
      }
      pos.setXYZ(k, pos.getX(0), pos.getY(0), pos.getZ(0));
      pos.needsUpdate = true;
    }
    const A = this.arrow;
    A.visible = !!(withArrow && selected && selected.alive && selected.side === 0);
    if (A.visible) {
      const S = selected;
      const r = S.halfD + 3.2 + Math.sin(t * 4) * 0.25;
      const x = S.x + S.fwdX * r, z = S.z + S.fwdZ * r;
      A.position.set(x, H(x, z) + 0.1, z);
      A.rotation.y = S.face;
      A.scale.setScalar(1.8);
    }
  }

  // ---------- RTS-Rückmeldungen ----------
  rectAt(L, x, z, face, color, opacity) {
    const H = (px, pz) => Math.max(this.map.getHeight(px, pz), this.map.hasWater ? this.map.waterLevel : -99) + 0.5;
    const fx = Math.sin(face), fz = Math.cos(face), lx = fz, lz = -fx;
    const w = L.halfW + 0.2, d = L.halfD + 0.2;
    const pts = [];
    const corners = [[-w, d], [w, d], [w, -d], [-w, -d]];
    for (let c = 0; c < 4; c++) {
      const [a0, b0] = corners[c], [a1, b1] = corners[(c + 1) % 4];
      for (let i = 0; i < 6; i++) {
        const f = i / 6, a = a0 + (a1 - a0) * f, b = b0 + (b1 - b0) * f;
        const px = x + lx * a + fx * b, pz = z + lz * a + fz * b;
        pts.push(new THREE.Vector3(px, H(px, pz), pz));
      }
    }
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.LineLoop(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }));
    line.renderOrder = 6;
    // kleiner Pfeil vorn = Blickrichtung
    const tx = x + fx * (d + 1.2), tz = z + fz * (d + 1.2);
    const ag = new THREE.BufferGeometry();
    ag.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.9, -0.7, 0, -0.5, 0.7, 0, -0.5], 3));
    const arrow = new THREE.Mesh(ag, new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide }));
    arrow.position.set(tx, H(tx, tz), tz);
    arrow.rotation.y = face;
    arrow.renderOrder = 6;
    const grp = new THREE.Group();
    grp.add(line, arrow);
    return grp;
  }

  // Vorschau beim Ziehen (bleibt bis clearGhosts)
  showGhosts(plan) {
    this.clearGhosts();
    this.ghosts = new THREE.Group();
    for (const p of plan) this.ghosts.add(this.rectAt(p.L, p.x, p.z, p.face, 0xffe07a, 0.9));
    this.group.add(this.ghosts);
  }
  clearGhosts() {
    if (!this.ghosts) return;
    this.group.remove(this.ghosts);
    this.ghosts.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.ghosts = null;
  }

  // Marschbefehl bestätigen: Ring an der Zielstelle + kurz aufleuchtende Zielplätze
  pingMove(x, z, plan, color = 0x7fe07a) {
    this.pings = this.pings || [];
    const geo = new THREE.RingGeometry(0.75, 1, 32, 1);
    geo.rotateX(-Math.PI / 2);
    const ring = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
    ring.position.set(x, Math.max(this.map.getHeight(x, z), this.map.hasWater ? this.map.waterLevel : -99) + 0.6, z);
    ring.renderOrder = 6;
    this.group.add(ring);
    this.pings.push({ obj: ring, t: 0, ttl: 0.9, kind: 'ring' });
    for (const p of plan || []) {
      const r = this.rectAt(p.L, p.x, p.z, p.face, color, 0.85);
      this.group.add(r);
      this.pings.push({ obj: r, t: 0, ttl: 1.6, kind: 'rect' });
    }
  }
  pingAttack(E) {
    this.pings = this.pings || [];
    const rad = Math.max(E.halfW, E.halfD) + 1.5;
    const geo = new THREE.RingGeometry(rad - 0.5, rad, 40, 1);
    geo.rotateX(-Math.PI / 2);
    const ring = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xff4a3a, transparent: true, opacity: 0.95, depthWrite: false, side: THREE.DoubleSide }));
    ring.position.set(E.x, this.map.getHeight(E.x, E.z) + 0.6, E.z);
    ring.renderOrder = 6;
    this.group.add(ring);
    this.pings.push({ obj: ring, t: 0, ttl: 0.8, kind: 'attack', L: E });
  }
  updatePings(dt) {
    if (!this.pings || !this.pings.length) return;
    for (const p of this.pings) {
      p.t += dt;
      const k = p.t / p.ttl;
      if (p.kind === 'ring') { const s = 1 + k * 3.5; p.obj.scale.set(s, 1, s); p.obj.material.opacity = 0.9 * (1 - k); }
      else if (p.kind === 'attack') { const s = 1.25 - k * 0.3; p.obj.scale.set(s, 1, s); p.obj.position.x = p.L.x; p.obj.position.z = p.L.z; p.obj.material.opacity = 0.95 * (1 - k); }
      else p.obj.traverse((o) => { if (o.material) o.material.opacity = 0.85 * (1 - k * k); });
    }
    const alive = [];
    for (const p of this.pings) {
      if (p.t < p.ttl) { alive.push(p); continue; }
      this.group.remove(p.obj);
      p.obj.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    }
    this.pings = alive;
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
}
