// Schlachtsimulation: Bewegung, Nahkampf, Fernkampf, Sturmangriff, Rückzug, Ziele
import { PathFinder } from './pathfind.js';
import { clamp } from './rng.js';

const TAU = Math.PI * 2;
const angDiff = (a, b) => {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
};
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const _tp = [0, 0];

export class Battle {
  constructor(map, legions, scenarioDef) {
    this.map = map;
    this.legions = legions;
    this.pf = new PathFinder(map);
    this.time = 0;
    this.timeLimit = scenarioDef.time;
    this.over = false;
    this.winner = -1;
    this.reason = '';
    this.events = [];
    this.volleys = [];
    this.arrows = [];
    this.thinkAcc = 0;
    this.checkAcc = 0;
    this.start = [0, 0];
    this.lost = [0, 0];
    for (const L of legions) this.start[L.side] += L.maxCount;
    this.started = false;
  }

  enemiesOf(side) { return this.legions.filter((l) => l.side !== side && l.alive); }
  alliesOf(side) { return this.legions.filter((l) => l.side === side && l.alive); }

  begin() {
    this.started = true;
    for (const L of this.legions) {
      L.holdX = L.x; L.holdZ = L.z;
      L.startX = L.x; L.startZ = L.z;
      this.applyOrders(L);
    }
    this.events.push({ type: 'horn' });
  }

  // Befehle (neu) anwenden – auch mitten in der Schlacht
  applyOrders(L) {
    const o = L.orders;
    L.wp = [];
    L.wpIdx = 0;
    L.path = [];
    L.formDirty = true;
    if (o.move === 'flankL' || o.move === 'flankR') L.wp = this.flankWaypoints(L, o.move === 'flankL' ? 1 : -1);
    else if (o.move === 'path') L.wp = o.waypoints.map((p) => [p[0], p[1]]);
    if (o.move === 'hold' && this.started && this.time > 0) { L.holdX = L.x; L.holdZ = L.z; }
    if (L.state !== 'retreat' && L.state !== 'regroup' && L.state !== 'dead') L.state = 'idle';
  }

  flankWaypoints(L, sideSign) {
    const ens = this.enemiesOf(L.side);
    let ex = L.side === 0 ? 50 : -50, ez = 0;
    if (ens.length) { ex = 0; ez = 0; for (const e of ens) { ex += e.x; ez += e.z; } ex /= ens.length; ez /= ens.length; }
    let dx = ex - L.x, dz = ez - L.z;
    const d = Math.hypot(dx, dz) || 1;
    dx /= d; dz /= d;
    const lx = dz * sideSign, lz = -dx * sideSign;
    const w1 = [L.x + dx * d * 0.38 + lx * 24, L.z + dz * d * 0.38 + lz * 24];
    const w2 = [ex - dx * 4 + lx * 17, ez - dz * 4 + lz * 17];
    return [w1, w2].map((p) => this.snapFree(p[0], p[1], L.side));
  }

  snapFree(x, z, side) {
    x = clamp(x, -70, 70); z = clamp(z, -46, 46);
    const m = this.map;
    const k = this.pf.nearestFree(m.cellIndex(x, z), side);
    if (k < 0) return [x, z];
    if (m.cellIndex(x, z) === k) return [x, z];
    return m.cellCenter(k);
  }

  // Vorschau der geplanten Route (für die Befehlsphase)
  previewRoute(L) {
    const o = L.orders;
    const pts = [[L.x, L.z]];
    let cx = L.x, cz = L.z;
    const push = (tx, tz) => {
      const p = this.pf.find(cx, cz, tx, tz, L.side, L.halfW * 2);
      for (const q of p) pts.push(q);
      cx = tx; cz = tz;
    };
    let wps = [];
    if (o.move === 'flankL' || o.move === 'flankR') wps = this.flankWaypoints(L, o.move === 'flankL' ? 1 : -1);
    else if (o.move === 'path') wps = o.waypoints;
    for (const w of wps) push(w[0], w[1]);
    let final = null;
    if (o.move === 'hold') {
      if (this.isRangedInRange(L)) final = null;
    } else if (o.target === 'objective' && this.map.objective) {
      final = [this.map.objective.x, this.map.objective.z];
    } else {
      const t = this.chooseTarget(L, [cx, cz]);
      if (t) {
        if (L.isRanged) {
          const dx = t.x - cx, dz = t.z - cz, d = Math.hypot(dx, dz);
          const keep = L.T.range * 0.8;
          if (d > keep) final = [cx + dx / d * (d - keep), cz + dz / d * (d - keep)];
        } else final = [t.x, t.z];
      }
    }
    if (final) push(final[0], final[1]);
    return { pts, target: o.move !== 'hold' ? this.chooseTarget(L, [cx, cz]) : null };
  }
  isRangedInRange(L) { return L.isRanged; }

  // ---------- Zielwahl ----------
  chooseTarget(L, from = null, maxDist = 1e9) {
    const fx = from ? from[0] : L.x, fz = from ? from[1] : L.z;
    const o = L.orders;
    let best = null, bs = 1e9;
    const ens = this.enemiesOf(L.side);
    if (o.target === 'legion') {
      const t = ens.find((e) => e.id === o.targetId);
      if (t && Math.hypot(t.x - fx, t.z - fz) < Math.max(maxDist, 40)) return t;
    }
    for (const e of ens) {
      const d = Math.hypot(e.x - fx, e.z - fz);
      if (d > maxDist) continue;
      let s = d;
      switch (o.target) {
        case 'weakest': s = e.count * 1.6 + d * 0.35; break;
        case 'strongest': s = -e.count * 1.6 + d * 0.35; break;
        case 'ranged': s = d + (e.isRanged ? 0 : 55); break;
        case 'objective': {
          const ob = this.map.objective;
          if (ob) s = Math.hypot(e.x - ob.x, e.z - ob.z) + d * 0.3;
          break;
        }
      }
      if (e.state === 'retreat') s += 30;
      if (L.typeId === 'cavalry' && e.typeId === 'pike' && L.aiSmart) s += 45;
      if (L.aiSmart && e.inCastleCover) s += 20;
      if (s < bs) { bs = s; best = e; }
    }
    return best;
  }

  aggroRadius(L) {
    const st = L.orders.stance;
    let r = st === 'aggressive' ? 24 : st === 'defensive' ? 10 : 16;
    if (L.orders.move === 'flankL' || L.orders.move === 'flankR') {
      if (L.wp && L.wpIdx < L.wp.length) r = 7;
    }
    if (L.isRanged) r = L.T.range;
    return r;
  }

  nearestEnemy(L, maxD, filter) {
    let best = null, bd = maxD;
    for (const e of this.legions) {
      if (e.side === L.side || !e.alive) continue;
      if (filter && !filter(e)) continue;
      const d = dist(L, e) - e.support((L.x - e.x) / (dist(L, e) || 1), (L.z - e.z) / (dist(L, e) || 1));
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  contactDist(A, B) {
    const d = dist(A, B) || 0.001;
    const dx = (B.x - A.x) / d, dz = (B.z - A.z) / d;
    return A.support(dx, dz) + B.support(dx, dz) + 0.5;
  }

  // ---------- Hauptschritt ----------
  step(dt) {
    if (this.over) return;
    this.time += dt;
    this.thinkAcc += dt;
    const doThink = this.thinkAcc > 0.25;
    if (doThink) this.thinkAcc = 0;
    for (const L of this.legions) {
      if (!L.alive) continue;
      if (doThink) this.think(L);
      this.act(L, dt);
    }
    this.separate(dt);
    this.resolveVolleys();
    for (const L of this.legions) this.updateSoldiers(L, dt);
    this.arrows = this.arrows.filter((a) => this.time < a.t0 + a.dur + 0.05);
    this.checkAcc += dt;
    if (this.checkAcc > 0.2) { this.updateObjective(this.checkAcc); this.checkAcc = 0; this.checkVictory(); }
  }

  // ---------- Entscheidungen ----------
  think(L) {
    const o = L.orders;
    const m = this.map;
    L.inCastleCover = m.castle && m.castle.owner === L.side && m.inCastle(L.x, L.z);

    // Rückzug?
    if (L.state !== 'retreat' && L.state !== 'regroup' && o.retreatAt > 0) {
      const thr = o.retreatAt / (1 + L.retreated * 1.5);
      if (L.ratio <= thr) { this.startRetreat(L); return; }
    }
    if (L.state === 'retreat' || L.state === 'regroup') return;

    // Nahkampf halten
    if (L.melee) {
      const t = L.melee;
      if (!t.alive || dist(L, t) > this.contactDist(L, t) + 3.5 || (t.state === 'retreat' && L.orders.stance === 'defensive')) {
        L.melee = null;
        L.state = 'idle';
      } else { L.state = 'melee'; return; }
    }
    // Wurde angegriffen? -> verteidigen
    const attacker = this.legions.find((e) => e.alive && e.side !== L.side && e.melee === L);
    if (attacker && !L.isRanged) { L.melee = attacker; L.state = 'melee'; return; }
    if (attacker && L.isRanged && dist(L, attacker) < this.contactDist(L, attacker) + 0.5) { L.melee = attacker; L.state = 'melee'; return; }

    // Vor dem Tor stauen? -> mit anpacken statt warten
    if (m.gate && m.gate.alive && L.side !== m.gate.owner && L.state !== 'breach' && !L.isRanged
      && Math.hypot(m.gate.x - L.x, m.gate.z - L.z) < L.halfD + 11 && this.wantsInside(L)
      && this.legions.some((X) => X !== L && X.side === L.side && X.state === 'breach')) {
      L.state = 'breach';
      L.path = [];
    }
    // Tor wird gerade eingeschlagen
    if (L.state === 'breach' && m.gate && m.gate.alive) {
      const threat = this.nearestEnemy(L, 3);
      if (threat) this.engage(L, threat);
      return;
    }

    // Verzögerter Start
    if (this.time < o.delay && L.lastHitT > 1.5) { L.state = 'wait'; return; }

    if (L.isRanged) return this.thinkRanged(L);

    // Wegpunkte (Flanke / eigene Route)
    const aggro = this.aggroRadius(L);
    if (L.wp && L.wpIdx < L.wp.length) {
      if (this.keepEngaging(L, aggro)) return;
      const threat = this.nearestEnemy(L, aggro);
      if (threat) { this.engage(L, threat); return; }
      const w = L.wp[L.wpIdx];
      if (Math.hypot(w[0] - L.x, w[1] - L.z) < 4) { L.wpIdx++; L.path = []; return; }
      this.moveTo(L, w[0], w[1], 'move');
      return;
    }

    if (o.move === 'hold') {
      if (this.keepEngaging(L, aggro, true)) return;
      const threat = this.nearestEnemy(L, aggro);
      if (threat && Math.hypot(threat.x - L.holdX, threat.z - L.holdZ) < aggro + 10) { this.engage(L, threat); return; }
      if (Math.hypot(L.holdX - L.x, L.holdZ - L.z) > 2.5) this.moveTo(L, L.holdX, L.holdZ, 'move');
      else { L.state = 'hold'; L.path = []; }
      return;
    }

    const ob = m.objective;
    if (o.target === 'objective' && ob) {
      if (this.keepEngaging(L, Math.min(aggro, 12))) return;
      const threat = this.nearestEnemy(L, Math.min(aggro, 12));
      if (threat) { this.engage(L, threat); return; }
      const d = Math.hypot(ob.x - L.x, ob.z - L.z);
      if (d > ob.r * 0.5) this.moveTo(L, ob.x, ob.z, 'move');
      else {
        const t2 = this.nearestEnemy(L, 22);
        if (t2) this.engage(L, t2); else { L.state = 'hold'; L.path = []; }
      }
      return;
    }

    // Vorrücken: nahe Bedrohung zuerst, sonst Ziel nach Priorität
    let t = this.nearestEnemy(L, Math.min(aggro, 9));
    if (!t) t = this.chooseTarget(L);
    if (t) this.engage(L, t);
    else { L.state = 'idle'; L.path = []; }
  }

  thinkRanged(L) {
    const o = L.orders;
    const R = L.T.range;
    // Ausweichen vor Nahkämpfern
    if (o.skirmish) {
      const threat = this.nearestEnemy(L, 9, (e) => !e.isRanged && e.state !== 'retreat');
      if (threat) {
        const dx = L.x - threat.x, dz = L.z - threat.z, d = Math.hypot(dx, dz) || 1;
        const tx = L.x + dx / d * 12, tz = L.z + dz / d * 12;
        if (this.map.isPassable(tx, tz, L.side) && threat.typeId !== 'cavalry') {
          this.moveTo(L, tx, tz, 'kite');
          L.target = threat;
          return;
        }
      }
    }
    let t = null;
    const pri = this.chooseTarget(L, null, R);
    if (pri) t = pri;
    if (L.wp && L.wpIdx < L.wp.length) {
      if (t && dist(L, t) < R * 0.9) { L.target = t; L.state = 'shoot'; L.path = []; return; }
      const w = L.wp[L.wpIdx];
      if (Math.hypot(w[0] - L.x, w[1] - L.z) < 4) { L.wpIdx++; L.path = []; return; }
      this.moveTo(L, w[0], w[1], 'move');
      return;
    }
    if (t) { L.target = t; L.state = 'shoot'; L.path = []; return; }
    if (o.move === 'hold') {
      if (Math.hypot(L.holdX - L.x, L.holdZ - L.z) > 2.5) this.moveTo(L, L.holdX, L.holdZ, 'move');
      else { L.state = 'hold'; L.path = []; }
      return;
    }
    let goal = this.chooseTarget(L);
    if (o.target === 'objective' && this.map.objective && (!goal || dist(L, goal) > R * 1.4)) {
      const ob = this.map.objective;
      const d = Math.hypot(ob.x - L.x, ob.z - L.z);
      if (d > R * 0.6) { this.moveTo(L, ob.x, ob.z, 'move'); return; }
    }
    if (goal) {
      L.target = goal;
      const dx = goal.x - L.x, dz = goal.z - L.z, d = Math.hypot(dx, dz);
      const keep = R * 0.82;
      this.moveTo(L, L.x + dx / d * (d - keep + 1), L.z + dz / d * (d - keep + 1), 'move');
    } else { L.state = 'idle'; L.path = []; }
  }

  // Hysterese: laufenden Angriff nicht bei jeder kleinen Distanzänderung abbrechen
  keepEngaging(L, radius, fromHold = false) {
    const t = L.target;
    if (L.state !== 'engage' || !t || !t.alive || t.state === 'retreat') return false;
    const d = dist(L, t) - t.support((L.x - t.x) / (dist(L, t) || 1), (L.z - t.z) / (dist(L, t) || 1));
    if (d > radius + 8) return false;
    if (fromHold && Math.hypot(t.x - L.holdX, t.z - L.holdZ) > radius + 18) return false;
    this.engage(L, t);
    return true;
  }

  // will die Legion in die Burg (Ziel oder Feind innerhalb)?
  wantsInside(L) {
    const m = this.map;
    if (!m.castle) return false;
    if (L.orders.target === 'objective') return true;
    const t = L.target;
    if (t && t.alive && m.inCastle(t.x, t.z)) return true;
    return !!(L.pathGoal && m.inCastle(L.pathGoal[0], L.pathGoal[1]));
  }

  engage(L, t) {
    L.target = t;
    const cd = this.contactDist(L, t);
    if (dist(L, t) < cd) { this.startMelee(L, t); return; }
    this.moveTo(L, t.x, t.z, 'engage', t);
  }

  moveTo(L, x, z, state, chase = null) {
    L.state = state;
    const last = L.pathGoal;
    const moved = !last || Math.hypot(last[0] - x, last[1] - z) > (chase ? 3 : 1);
    L.repathT -= 0.25;
    if (!L.path.length || moved || L.repathT <= 0) {
      L.path = this.pf.find(L.x, L.z, x, z, L.side, L.halfW * 2);
      L.pathGoal = [x, z];
      L.repathT = chase ? 1.2 : 4;
    }
  }

  startMelee(L, t) {
    L.melee = t;
    L.state = 'melee';
    L.path = [];
    const d = dist(L, t) || 1;
    // Sturmangriff
    if (L.typeId === 'cavalry' && L.chargeReady && L.speedCur > L.T.speed * 0.55) {
      L.chargeReady = false;
      L.movedFast = 0;
      if (t.typeId === 'pike' && t.state !== 'retreat') {
        // Piken brechen den Angriff
        this.damage(L, L.count * 1.1, t, false);
        this.events.push({ type: 'impact', x: (L.x + t.x) / 2, z: (L.z + t.z) / 2, big: false, broken: true });
      } else {
        L.chargeT = 2.8;
        const fm = this.flankMult(L, t);
        const wedge = L.orders.formation === 'wedge' ? 1.25 : 1;
        this.damage(t, L.count * 1.05 * fm * wedge, L, false);
        this.events.push({ type: 'impact', x: (L.x + t.x) / 2, z: (L.z + t.z) / 2, big: true });
        t.knock = { x: (t.x - L.x) / d, z: (t.z - L.z) / d, t: 0.5 };
      }
    }
    if (!t.melee && t.state !== 'retreat' && t.alive) {
      t.melee = L;
      t.state = 'melee';
    }
    this.events.push({ type: 'clash', x: (L.x + t.x) / 2, z: (L.z + t.z) / 2 });
  }

  startRetreat(L) {
    L.state = 'retreat';
    L.melee = null;
    L.retreated++;
    L.target = null;
    let tx, tz;
    const o = L.orders;
    const camp = this.map.camps[L.side];
    tx = camp.x + (L.side === 0 ? 6 : -6); tz = camp.z;
    if (o.retreatTo === 'ally') {
      let best = null, bd = 1e9;
      for (const a of this.alliesOf(L.side)) {
        if (a === L || a.state === 'retreat') continue;
        const d = dist(L, a);
        if (d < bd) { bd = d; best = a; }
      }
      if (best) {
        const ens = this.enemiesOf(L.side);
        let ex = 0, ez = 0;
        for (const e of ens) { ex += e.x; ez += e.z; }
        if (ens.length) { ex /= ens.length; ez /= ens.length; }
        const dx = best.x - ex, dz = best.z - ez, d = Math.hypot(dx, dz) || 1;
        tx = best.x + dx / d * 10; tz = best.z + dz / d * 10;
      }
    }
    if (this.map.castle && this.map.castle.owner === L.side) {
      const ob = this.map.objective;
      tx = ob.x; tz = ob.z;
    }
    [tx, tz] = this.snapFree(tx, tz, L.side);
    L.retreatGoal = [tx, tz];
    L.path = this.pf.find(L.x, L.z, tx, tz, L.side, L.halfW * 2);
    this.events.push({ type: 'retreat', side: L.side, legion: L });
  }

  // ---------- Handlungen pro Frame ----------
  act(L, dt) {
    L.lastHitT += dt;
    L.chargeT -= dt;
    if (L.knock) { L.knock.t -= dt; if (L.knock.t <= 0) L.knock = null; }
    const m = this.map;
    const T = L.T;
    let desiredSpeed = 0;
    let faceTo = null;

    if (L.typeId === 'cavalry' && !L.chargeReady && !L.melee) {
      if (L.speedCur > T.speed * 0.6) L.movedFast += dt;
      if (L.movedFast > 1.6) L.chargeReady = true;
    }

    switch (L.state) {
      case 'melee': {
        const t = L.melee;
        if (!t || !t.alive) { L.melee = null; L.state = 'idle'; break; }
        faceTo = t;
        const cd = this.contactDist(L, t);
        const d = dist(L, t);
        if (d > cd - 0.2) {
          desiredSpeed = Math.min(T.speed, 1.6);
          this.stepToward(L, t.x, t.z, desiredSpeed, dt);
        }
        this.dealMelee(L, t, dt);
        break;
      }
      case 'shoot': {
        const t = L.target;
        if (!t || !t.alive) { L.state = 'idle'; break; }
        faceTo = t;
        const d = dist(L, t);
        if (d > T.range * 1.05) { L.state = 'idle'; break; }
        L.volleyT -= dt;
        if (L.volleyT <= 0) { this.fireVolley(L, t); L.volleyT = T.volley * (0.9 + Math.random() * 0.2); }
        break;
      }
      case 'retreat': {
        desiredSpeed = T.speed * 1.12;
        if (this.followPath(L, desiredSpeed, dt)) {
          L.state = 'regroup';
          L.regroupT = 7;
        }
        break;
      }
      case 'regroup': {
        L.regroupT -= dt;
        L.hp = Math.min(L.count * T.hp, L.hp + T.hp * 0.25 * dt);
        const threat = this.nearestEnemy(L, 4);
        if (threat) { L.melee = threat; L.state = 'melee'; break; }
        if (L.regroupT <= 0) {
          L.holdX = L.x; L.holdZ = L.z;
          if (L.orders.afterRetreat === 'hold') { L.orders.move = 'hold'; }
          L.wp = []; L.wpIdx = 0;
          L.state = 'idle';
          this.events.push({ type: 'rally', legion: L });
        }
        break;
      }
      case 'move': case 'engage': case 'kite': {
        desiredSpeed = T.speed;
        if (L.state === 'engage' && L.target && L.target.alive) {
          const t = L.target;
          if (dist(L, t) < this.contactDist(L, t)) { this.startMelee(L, t); break; }
        }
        // Fernkämpfer: im Vorrücken schießen, wenn in Reichweite
        if (L.isRanged && L.target && L.target.alive && dist(L, L.target) < T.range * 0.95 && L.state !== 'kite') {
          L.state = 'shoot'; L.path = []; break;
        }
        if (this.followPath(L, desiredSpeed, dt)) { L.path = []; }
        break;
      }
      case 'breach': {
        const g = m.gate;
        if (!g || !g.alive) { L.state = 'idle'; break; }
        faceTo = { x: g.x, z: g.z };
        const d = Math.hypot(g.x - L.x, g.z - L.z);
        if (d > L.halfD + 4) this.stepToward(L, g.x, g.z, 1.4, dt);
        if (d > L.halfD + 12) { L.state = 'idle'; break; }
        let dps = L.count * T.atk * 0.09 * (L.typeId === 'guard' ? 1.3 : L.typeId === 'cavalry' ? 0.5 : L.typeId === 'archer' ? 0.3 : 1);
        g.hp -= dps * dt;
        g.shake = 0.25;
        L.gateHitT = (L.gateHitT || 0) - dt;
        if (L.gateHitT <= 0) { L.gateHitT = 0.7; this.events.push({ type: 'gatehit', x: g.x, z: g.z }); }
        if (g.hp <= 0) {
          g.hp = 0; g.alive = false;
          this.events.push({ type: 'gatebroken', x: g.x, z: g.z });
          for (const X of this.legions) X.path = [];
        }
        // Soldaten stehen vor dem Tor, Burgverteidiger kommen raus?
        const threat = this.nearestEnemy(L, 3);
        if (threat) { this.engage(L, threat); }
        break;
      }
      case 'hold': case 'idle': case 'wait': default: {
        // leichte Ausrichtung zum nächsten Feind
        const e = this.nearestEnemy(L, 45);
        if (e && L.state !== 'wait') faceTo = e;
        else if (e && this.time > 0) faceTo = e;
        break;
      }
    }
    if (L.state !== 'move' && L.state !== 'engage' && L.state !== 'retreat' && L.state !== 'kite' && L.state !== 'melee' && L.state !== 'breach') {
      L.speedCur = Math.max(0, L.speedCur - 6 * dt);
    }
    if (faceTo) this.turnToward(L, Math.atan2(faceTo.x - L.x, faceTo.z - L.z), dt);
    if (L.knock) {
      const nx = L.x + L.knock.x * 2.2 * dt, nz = L.z + L.knock.z * 2.2 * dt;
      if (m.isPassable(nx, nz, L.side)) { L.x = nx; L.z = nz; }
    }
    // Freiraum prüfen -> Formationsbreite
    L.clearT = (L.clearT || 0) - dt;
    if (L.clearT <= 0 || L.formDirty) {
      L.clearT = 0.4;
      const cl = this.map.clearanceAt(L.x, L.z);
      const moving = L.state === 'move' || L.state === 'engage' || L.state === 'retreat' || L.state === 'kite';
      const want = moving ? cl + 1 : 99;
      const colsBefore = L.cols;
      const loose = !!(this.map.flagAt(L.x, L.z) & 1) || this.map.treesNear(L.x, L.z, Math.max(L.halfW, L.halfD)) > 2;
      if (loose !== !!L.loose) { L.loose = loose; L.formDirty = true; }
      if (L.formDirty || want !== L.lastClear) {
        L.lastClear = want;
        L.layout(want);
        if (colsBefore !== L.cols) L.formDirty = false;
      }
    }
  }

  turnToward(L, target, dt) {
    const rate = L.typeId === 'cavalry' ? 3.2 : 2.2;
    const d = angDiff(L.face, target);
    const s = clamp(d, -rate * dt, rate * dt);
    L.face += s;
  }

  stepToward(L, tx, tz, speed, dt) {
    const dx = tx - L.x, dz = tz - L.z, d = Math.hypot(dx, dz);
    if (d < 0.01) return;
    const s = Math.min(d, speed * dt);
    const nx = L.x + dx / d * s, nz = L.z + dz / d * s;
    if (this.map.isPassable(nx, nz, L.side)) { L.x = nx; L.z = nz; }
  }

  // Pfad folgen; true wenn angekommen
  followPath(L, speed, dt) {
    const m = this.map;
    if (!L.path.length) return true;
    const p = L.path[0];
    let dx = p[0] - L.x, dz = p[1] - L.z;
    const d = Math.hypot(dx, dz);
    const tol = L.path.length === 1 ? (L.state === 'retreat' ? 3.5 : 1.8) : 0.9;
    if (d < tol) { L.path.shift(); return L.path.length === 0; }
    dx /= d; dz /= d;
    // Geländefaktor
    const f = m.flagAt(L.x, L.z);
    let sp = speed;
    if (f & 1) sp *= 0.72;
    if (f & 2) sp *= 0.55;
    if (L.orders.formation === 'block') sp *= 0.9;
    if (L.orders.stance === 'aggressive') sp *= 1.05;
    // Hang
    const h0 = m.getHeight(L.x, L.z), h1 = m.getHeight(L.x + dx * 2, L.z + dz * 2);
    if (h1 - h0 > 0.4) sp *= 0.8;
    L.speedCur += clamp(sp - L.speedCur, -6 * dt, 3 * dt);
    const s = Math.min(d, L.speedCur * dt);
    const nx = L.x + dx * s, nz = L.z + dz * s;
    // Burgtor?
    const g = m.gate;
    if (g && g.alive && L.side !== g.owner) {
      const k = m.cellIndex(nx + dx * (L.halfD + 1), nz + dz * (L.halfD + 1));
      if (k >= 0 && (m.flags[k] & 8)) {
        L.state = 'breach';
        this.events.push({ type: 'breach', legion: L });
        return false;
      }
    }
    if (m.isPassable(nx, nz, L.side)) { L.x = nx; L.z = nz; L.blockT = 0; }
    else {
      if (m.isPassable(nx, L.z, L.side)) L.x = nx;
      else if (m.isPassable(L.x, nz, L.side)) L.z = nz;
      // an einer Kante hängen geblieben -> sofort neu planen (über die eigene Zellmitte)
      L.blockT = (L.blockT || 0) + dt;
      if (L.blockT > 0.35) {
        L.blockT = 0;
        const goal = L.state === 'retreat' && L.retreatGoal ? L.retreatGoal : L.path[L.path.length - 1];
        const np = this.pf.find(L.x, L.z, goal[0], goal[1], L.side, L.halfW * 2);
        const k = this.pf.nearestFree(m.cellIndex(L.x, L.z), L.side);
        if (k >= 0) np.unshift(m.cellCenter(k));
        L.path = np;
      }
    }
    this.turnToward(L, Math.atan2(dx, dz), dt);
    return false;
  }

  // ---------- Kampf ----------
  flankMult(A, B) {
    const dx = A.x - B.x, dz = A.z - B.z, d = Math.hypot(dx, dz) || 1;
    const dot = (dx / d) * B.fwdX + (dz / d) * B.fwdZ;
    if (dot < -0.45) return 1.6; // Rücken
    if (dot < 0.4) return 1.3; // Flanke
    return 1;
  }

  mods(A, B, ranged) {
    let atk = 1, def = 1;
    const oa = A.orders, ob = B.orders;
    if (oa.stance === 'aggressive') atk *= 1.15; else if (oa.stance === 'defensive') atk *= 0.9;
    if (ob.stance === 'aggressive') def *= 0.9; else if (ob.stance === 'defensive') def *= 1.2;
    if (oa.formation === 'wedge') atk *= 1.1;
    if (ob.formation === 'wedge') def *= 0.9;
    if (oa.formation === 'block') atk *= 0.95;
    if (ob.formation === 'block') def *= 1.15;
    const m = this.map;
    const ha = m.getHeight(A.x, A.z), hb = m.getHeight(B.x, B.z);
    if (ha - hb > 1.5) atk *= 1.2; else if (hb - ha > 1.5) atk *= 0.85;
    if (m.castle && m.castle.owner === B.side && m.inCastle(B.x, B.z)) def *= ranged && !m.inCastle(A.x, A.z) ? 1.6 : 1.3;
    const fb = m.flagAt(B.x, B.z);
    if (fb & 2) def *= 0.75;
    if (ranged && (fb & 1)) def *= 1.6;
    if (B.state === 'retreat') def *= 0.6;
    if (B.state === 'breach') def *= 0.85;
    return [atk, def];
  }

  dealMelee(A, B, dt) {
    const T = A.T;
    let [atk, def] = this.mods(A, B, false);
    if (A.typeId === 'pike' && B.typeId === 'cavalry') atk *= T.vsCav;
    if (A.typeId === 'cavalry' && B.isRanged) atk *= 1.5;
    if (A.chargeT > 0) atk *= T.charge || 1;
    atk *= this.flankMult(A, B);
    if (A.isRanged) atk *= 0.9;
    const base = A.count * T.atk * 0.1 * atk;
    const dmg = base / (1 + B.T.def * def * 0.22) * dt;
    this.damage(B, dmg, A, false);
    A.clashT = (A.clashT || 0) - dt;
    if (A.clashT <= 0) {
      A.clashT = 0.35 + Math.random() * 0.5;
      this.events.push({ type: 'clash', x: (A.x + B.x) / 2 + (Math.random() - 0.5) * A.halfW, z: (A.z + B.z) / 2 + (Math.random() - 0.5) * 2, soft: true });
    }
  }

  fireVolley(A, B) {
    const T = A.T;
    const d = dist(A, B);
    let acc = 0.46 - 0.24 * (d / T.range);
    if (B.melee) acc *= 0.75;
    const [atk, def] = this.mods(A, B, true);
    const n = A.count;
    const hits = n * acc;
    const resist = B.T.arrowResist || 1;
    const dmg = hits * T.arrowDmg * atk * resist / (1 + B.T.def * def * 0.12);
    const flight = 0.9 + d / 40;
    this.volleys.push({ A, B, dmg, t: this.time + flight });
    // sichtbare Pfeile
    const shooters = A.soldiers.filter((s) => s.alive);
    const nArrows = Math.min(shooters.length, 18);
    for (let i = 0; i < nArrows; i++) {
      const s = shooters[(i * 7 + (Math.random() * 3) | 0) % shooters.length];
      s.shoot = 0.6;
      const bs = B.soldiers.filter((q) => q.alive);
      const tgt = bs.length ? bs[(Math.random() * bs.length) | 0] : B;
      this.arrows.push({
        x0: s.x, y0: s.y + 1.5, z0: s.z,
        x1: tgt.x + (Math.random() - 0.5) * 3, z1: tgt.z + (Math.random() - 0.5) * 3, y1: (tgt.y || 0) + 0.6,
        t0: this.time + Math.random() * 0.25, dur: flight, arc: 4 + d * 0.18,
      });
    }
    this.events.push({ type: 'volley', x: A.x, z: A.z });
  }

  resolveVolleys() {
    const t = this.time;
    for (let i = this.volleys.length - 1; i >= 0; i--) {
      const v = this.volleys[i];
      if (t >= v.t) {
        if (v.B.alive) {
          this.damage(v.B, v.dmg, v.A, true);
          v.B.underFire = 1;
          this.events.push({ type: 'arrowhit', x: v.B.x, z: v.B.z });
        }
        this.volleys.splice(i, 1);
      }
    }
  }

  damage(B, dmg, A, byArrow) {
    if (!B.alive || dmg <= 0) return;
    B.hp -= dmg;
    A.dealt += dmg;
    B.lastHitT = 0;
    const newCount = Math.max(0, Math.ceil(B.hp / B.T.hp - 1e-6));
    let changed = false;
    while (B.count > newCount) {
      B.count--;
      const s = B.killSoldier(A.x, A.z, byArrow);
      A.kills++;
      this.lost[B.side]++;
      changed = true;
      if (s) this.events.push({ type: 'death', x: s.x, z: s.z, side: B.side });
    }
    if (B.count <= 0) {
      B.hp = 0;
      B.state = 'dead';
      B.melee = null;
      for (const X of this.legions) {
        if (X.melee === B) { X.melee = null; X.state = 'idle'; }
        if (X.target === B) X.target = null;
      }
      this.events.push({ type: 'legionlost', side: B.side, legion: B });
    } else if (changed) B.reassign();
  }

  // ---------- Kollision zwischen Legionen ----------
  separate(dt) {
    const Ls = this.legions.filter((l) => l.alive);
    const m = this.map;
    const moving = (L) => L.state === 'move' || L.state === 'engage' || L.state === 'kite' || L.state === 'breach';
    for (let i = 0; i < Ls.length; i++) {
      for (let j = i + 1; j < Ls.length; j++) {
        const A = Ls[i], B = Ls[j];
        if (A.melee === B || B.melee === A) continue;
        // Fliehende laufen durch alles hindurch – niemand blockiert einen Rückzug
        if (A.state === 'retreat' || B.state === 'retreat') continue;
        const d = dist(A, B) || 0.01;
        const cd = this.contactDist(A, B);
        let need, strength;
        if (A.side === B.side) {
          // Verbündete: Durchmarsch erlauben, nur stehende Legionen halten Abstand
          const am = moving(A), bm = moving(B);
          if (am && bm) { need = cd * 0.45; strength = 1.2; }
          else if (am || bm) { need = cd * 0.35; strength = 0.8; }
          else { need = cd * 0.78; strength = 4; }
        } else {
          // Feinde, die sich berühren, kämpfen – statt sich gegenseitig wegzuschieben
          if (d < cd * 0.98) {
            if (!A.melee && !A.isRanged) { this.startMelee(A, B); continue; }
            if (!B.melee && !B.isRanged) { this.startMelee(B, A); continue; }
          }
          need = cd * 0.95; strength = 4;
        }
        if (d < need) {
          const push = Math.min(need - d, strength * dt);
          const dx = (B.x - A.x) / d, dz = (B.z - A.z) / d;
          const aFix = A.melee || A.state === 'hold' || A.state === 'shoot' || A.state === 'breach';
          const bFix = B.melee || B.state === 'hold' || B.state === 'shoot' || B.state === 'breach';
          const wa = aFix && !bFix ? 0.15 : bFix && !aFix ? 0.85 : 0.5, wb = 1 - wa;
          const ax = A.x - dx * push * wa * 2, az = A.z - dz * push * wa * 2;
          const bx = B.x + dx * push * wb * 2, bz = B.z + dz * push * wb * 2;
          if (m.isPassable(ax, az, A.side)) { A.x = ax; A.z = az; }
          if (m.isPassable(bx, bz, B.side)) { B.x = bx; B.z = bz; }
        }
      }
    }
  }

  // ---------- Soldaten ----------
  updateSoldiers(L, dt) {
    const m = this.map;
    const t = this.time;
    const inMelee = L.state === 'melee' && L.melee;
    const moving = L.speedCur > 0.2;
    const maxSp = L.T.speed * 1.5 + 1;
    const enemy = inMelee ? L.melee : null;
    for (const s of L.soldiers) {
      if (!s.alive) {
        if (s.deadT > 0 && s.deadT < 30) s.deadT += dt;
        continue;
      }
      let [tx, tz] = L.slotWorld(s.slot);
      tx += s.jx; tz += s.jz;
      const row = L.slots[s.slot] ? L.slots[s.slot][1] + L.halfD - 0.7 : 0;
      if (enemy) {
        // vordere Reihen drängen nach vorn
        const ex = enemy.x - tx, ez = enemy.z - tz, ed = Math.hypot(ex, ez) || 1;
        const front = row < L.T.spacing * 1.6;
        const push = front ? 0.7 : 0.25;
        tx += ex / ed * push + Math.sin(t * 2 + s.phase) * 0.15;
        tz += ez / ed * push + Math.cos(t * 2.3 + s.phase) * 0.15;
      }
      if (!m.isPassable(tx, tz, L.side)) {
        // Richtung Zentrum ausweichen
        let ok = false;
        for (let k = 1; k <= 4; k++) {
          const f = k / 4;
          const qx = tx + (L.x - tx) * f, qz = tz + (L.z - tz) * f;
          if (m.isPassable(qx, qz, L.side)) { tx = qx; tz = qz; ok = true; break; }
        }
        if (!ok) { tx = L.x; tz = L.z; }
      }
      // Baumstämmen ausweichen (Ziel und aktuelle Position)
      if (m.avoidTrees(tx, tz, _tp, L.typeId === 'cavalry' ? 0.45 : 0)) { tx = _tp[0]; tz = _tp[1]; }
      if (m.avoidTrees(s.x, s.z, _tp, 0.5)) { s.x = _tp[0]; s.z = _tp[1]; }
      const dx = tx - s.x, dz = tz - s.z, d = Math.hypot(dx, dz);
      const step = Math.min(d, (maxSp + d * 1.2) * dt);
      if (d > 0.02) {
        let nx = s.x + dx / d * step, nz = s.z + dz / d * step;
        if (!m.isPassable(nx, nz, L.side) && m.isPassable(s.x, s.z, L.side)) { nx = s.x; nz = s.z; }
        s.x = nx; s.z = nz;
      }
      const moved = step / Math.max(dt, 1e-4);
      s.walk += step * 2.2;
      s.moving = moved > 0.5;
      let targetYaw;
      if (enemy) targetYaw = Math.atan2(enemy.x - s.x, enemy.z - s.z);
      else if (moved > 0.6 && d > 0.3) targetYaw = Math.atan2(dx, dz);
      else if (L.state === 'shoot' && L.target) targetYaw = Math.atan2(L.target.x - s.x, L.target.z - s.z);
      else targetYaw = L.face;
      const yd = angDiff(s.yaw, targetYaw);
      s.yaw += clamp(yd, -5 * dt, 5 * dt);
      s.y = m.getHeight(s.x, s.z);
      if (enemy) {
        const front = row < L.T.spacing * 2.2;
        s.swing = front ? (Math.sin(t * 7 + s.phase) * 0.5 + 0.5) : 0;
      } else s.swing = Math.max(0, s.swing - dt * 3);
      if (s.shoot > 0) s.shoot -= dt;
      if (s.hit > 0) s.hit -= dt;
    }
    if (moving || inMelee) L.lastMove = t;
  }

  // ---------- Ziele & Sieg ----------
  updateObjective(dt) {
    const ob = this.map.objective;
    if (!ob) return;
    const present = [0, 0];
    for (const L of this.legions) {
      if (!L.alive || L.state === 'retreat') continue;
      if (Math.hypot(L.x - ob.x, L.z - ob.z) < ob.r + L.halfW * 0.5) present[L.side] += L.count;
    }
    ob.present = present;
    if (ob.type === 'keep') {
      const att = 1 - ob.owner;
      if (present[att] > 0 && present[ob.owner] === 0) ob.hold += dt;
      else ob.hold = Math.max(0, ob.hold - dt * 0.5);
    } else if (ob.type === 'hill') {
      if (present[0] > 0 && present[1] === 0) ob.score[0] += dt * 1.6;
      if (present[1] > 0 && present[0] === 0) ob.score[1] += dt * 1.6;
    }
  }

  strength(side) {
    let s = 0;
    for (const L of this.legions) if (L.side === side && L.alive) s += L.count;
    return s;
  }

  checkVictory() {
    if (!this.started || this.over) return;
    const s0 = this.strength(0), s1 = this.strength(1);
    const routed = (side) => {
      const ls = this.legions.filter((l) => l.side === side && l.alive);
      return ls.length > 0 && ls.every((l) => l.state === 'retreat');
    };
    const ob = this.map.objective;
    const end = (w, reason) => { this.over = true; this.winner = w; this.reason = reason; this.events.push({ type: 'end', winner: w }); };
    if (s0 <= this.start[0] * 0.08 || s0 === 0) return end(1, 'Deine Legionen wurden vernichtet.');
    if (s1 <= this.start[1] * 0.08 || s1 === 0) return end(0, 'Das feindliche Heer wurde vernichtet.');
    if (routed(1) && s1 < s0 * 0.6) return end(0, 'Der Feind flieht vom Schlachtfeld!');
    if (routed(0) && s0 < s1 * 0.6) return end(1, 'Deine Legionen fliehen vom Schlachtfeld.');
    if (ob && ob.type === 'keep' && ob.hold >= ob.need) {
      const att = 1 - ob.owner;
      return end(att, att === 0 ? 'Der Burghof ist eingenommen – die Burg gehört dir!' : 'Der Feind hat den Burghof eingenommen.');
    }
    if (ob && ob.type === 'hill') {
      if (ob.score[0] >= ob.need) return end(0, 'Der Steinkreis ist in deiner Hand!');
      if (ob.score[1] >= ob.need) return end(1, 'Der Feind hält den Steinkreis.');
    }
    if (this.time >= this.timeLimit) {
      if (ob && ob.type === 'keep') {
        const w = ob.owner;
        return end(w, w === 0 ? 'Die Mauern haben gehalten. Die Burg ist sicher!' : 'Die Zeit ist abgelaufen – die Burg hält stand.');
      }
      if (ob && ob.type === 'hill' && Math.abs(ob.score[0] - ob.score[1]) > 3) {
        const w = ob.score[0] > ob.score[1] ? 0 : 1;
        return end(w, 'Zeit abgelaufen – Punktsieg am Steinkreis.');
      }
      const r0 = s0 / this.start[0], r1 = s1 / this.start[1];
      return end(r0 >= r1 ? 0 : 1, 'Zeit abgelaufen – Sieg nach verbliebener Stärke.');
    }
  }
}
