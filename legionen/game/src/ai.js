// Bot: Armeezusammenstellung, Aufstellung, Befehle und laufende Anpassung
import { Legion } from './units.js';
import { DIFFICULTY, UNIT_TYPES } from './data.js';

export function botArmy(playerTypes, scenario, rng) {
  const n = playerTypes.length;
  const pool = scenario === 'defend' ? ['legion', 'legion', 'guard', 'cavalry', 'archer', 'pike']
    : scenario === 'assault' ? ['archer', 'pike', 'guard', 'legion', 'archer', 'legion']
    : ['legion', 'archer', 'pike', 'cavalry', 'guard', 'legion'];
  const out = [];
  // grob kontern: gegen Reiter Piken, gegen Schützen Reiter
  const pc = playerTypes.filter((t) => t === 'cavalry').length;
  const pa = playerTypes.filter((t) => t === 'archer').length;
  for (let i = 0; i < n; i++) {
    let t = pool[(i + rng.int(0, 2)) % pool.length];
    if (i === 0) t = scenario === 'assault' ? 'archer' : 'legion';
    if (pc >= 2 && i === 1) t = 'pike';
    if (pa >= 2 && i === 2 && scenario !== 'assault') t = 'cavalry';
    out.push(t);
  }
  return out;
}

// Plätze in einer Zone verteilen: Front vorn, Schützen hinten, Reiter an Flanken
// Größenfaktor, damit der Bot etwa gleich viele Männer stellt wie der Spieler
export function botSizeMult(playerTypes, botTypes, diffSize) {
  const sum = (ts) => ts.reduce((a, t) => a + UNIT_TYPES[t].size, 0);
  return (sum(playerTypes) / Math.max(1, sum(botTypes))) * diffSize;
}

export function autoDeploy(legions, zone, side, map, rng) {
  const front = side === 0 ? zone.x1 - 6 : zone.x0 + 6;
  const back = side === 0 ? zone.x0 + 6 : zone.x1 - 6;
  const cz = map.canyon ? map.canyonCenter(front) : (zone.z0 + zone.z1) / 2;
  for (const L of legions) L.placed = false;
  let infantry = legions.filter((l) => !l.isRanged && l.typeId !== 'cavalry');
  const archers = legions.filter((l) => l.isRanged);
  const cav = legions.filter((l) => l.typeId === 'cavalry');
  const place = (L, x, z) => {
    const [px, pz] = findSpot(map, zone, x, z, L, side, legions);
    L.x = px; L.z = pz;
    L.face = side === 0 ? Math.PI / 2 : -Math.PI / 2;
    L.buildSoldiers();
  };
  const spread = (arr, x, width) => {
    arr.forEach((L, i) => {
      const z = cz + (i - (arr.length - 1) / 2) * width;
      place(L, x, z);
    });
  };
  if (zone.castle) {
    const c = map.castle;
    const f = c.face;
    const gateIn = c.gateX - f * 7;
    infantry.forEach((L, i) => place(L, gateIn - f * (i % 2) * 7, c.cz + (i - (infantry.length - 1) / 2) * 11));
    archers.forEach((L, i) => place(L, c.gateX - f * 4, c.cz + (i % 2 ? 1 : -1) * (9 + i * 3)));
    cav.forEach((L, i) => place(L, map.objective.x, map.objective.z + (i - 0.5) * 10));
    return;
  }
  spread(infantry, front, 13);
  spread(archers, (front + back) / 2 + (side === 0 ? -3 : 3), 14);
  cav.forEach((L, i) => place(L, front - (side === 0 ? 4 : -4), cz + (i % 2 ? 1 : -1) * (infantry.length * 7 + 8 + Math.floor(i / 2) * 9)));
}

export function findSpot(map, zone, x, z, L, side, others) {
  const tries = [[0, 0]];
  for (let r = 2; r < 44; r += 2) for (let a = 0; a < 12; a++) tries.push([Math.cos(a * 0.5236) * r, Math.sin(a * 0.5236) * r]);
  for (const [minGap, minClear] of [[9, 3], [6, 2.5], [0, 1]]) {
    for (const [ox, oz] of tries) {
      const px = Math.max(zone.x0 + 3, Math.min(zone.x1 - 3, x + ox));
      const pz = Math.max(zone.z0 + 3, Math.min(zone.z1 - 3, z + oz));
      if (!map.isPassable(px, pz, side)) continue;
      if (map.clearanceAt(px, pz) < minClear) continue;
      if (others.some((o) => o !== L && o.placed && Math.hypot(o.x - px, o.z - pz) < minGap)) continue;
      L.placed = true;
      return [px, pz];
    }
  }
  L.placed = true;
  return [x, z];
}

export function botOrders(legions, scenario, map, diff, rng) {
  const D = DIFFICULTY[diff];
  for (const L of legions) {
    L.aiSmart = rng() < D.smart;
    const o = L.orders;
    o.retreatAt = rng() < 0.5 ? 0.25 : 0.2;
    o.retreatTo = 'camp';
    o.afterRetreat = 'return';
    o.stance = 'balanced';
    switch (L.typeId) {
      case 'archer': o.move = 'hold'; o.target = 'nearest'; o.skirmish = true; break;
      case 'cavalry':
        o.move = rng() < 0.5 ? 'flankL' : 'flankR';
        o.target = 'ranged'; o.formation = 'wedge'; o.delay = rng.int(3, 8);
        break;
      case 'guard': o.move = 'advance'; o.target = 'strongest'; o.formation = 'block'; o.stance = 'defensive'; break;
      case 'pike': o.move = 'advance'; o.target = 'nearest'; o.delay = 2; break;
      default: o.move = 'advance'; o.target = rng() < 0.5 ? 'nearest' : 'weakest';
    }
    if (scenario === 'assault') {
      // Bot verteidigt die Burg
      o.retreatAt = 0;
      if (L.isRanged) { o.move = 'hold'; o.skirmish = false; }
      else if (L.typeId === 'cavalry') { o.move = 'hold'; o.target = 'objective'; o.delay = 0; }
      else { o.move = 'hold'; o.stance = 'balanced'; }
    }
    if (scenario === 'defend') {
      // Bot greift die Burg an
      if (!L.isRanged) { o.move = 'advance'; o.target = 'objective'; o.stance = 'aggressive'; }
      else { o.move = 'advance'; o.target = 'nearest'; }
      if (L.typeId === 'cavalry') { o.move = 'advance'; o.delay = 25; }
    }
    if (scenario === 'hill') {
      if (!L.isRanged && rng() < 0.7) o.target = 'objective';
      if (L.isRanged) { o.move = 'advance'; o.target = 'nearest'; }
    }
    if (scenario === 'canyon' && L.typeId === 'cavalry') o.move = 'advance';
  }
}

// Laufende Anpassung der Bot-Befehle
export class BotBrain {
  constructor(battle, diff, rng, side = 1) {
    this.side = side;
    this.b = battle;
    this.D = DIFFICULTY[diff];
    this.rng = rng;
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    if (this.t < this.D.think) return;
    this.t = 0;
    const b = this.b;
    const me = this.side, foe = 1 - me;
    const mine = b.legions.filter((l) => l.side === me && l.alive);
    const theirs = b.legions.filter((l) => l.side === foe && l.alive);
    if (!theirs.length) return;
    const sMine = mine.reduce((a, l) => a + l.count, 0);
    const sTheirs = theirs.reduce((a, l) => a + l.count, 0);
    const ob = b.map.objective;
    for (const L of mine) {
      if (L.state === 'retreat' || L.state === 'regroup' || L.state === 'melee') continue;
      if (this.rng() > this.D.smart + 0.2) continue;
      const o = L.orders;
      // Verteidiger: bei gebrochenem Tor Reiter ausfallen lassen
      if (b.map.castle && b.map.castle.owner === me) {
        if (!b.map.gate.alive && L.typeId === 'cavalry' && o.move === 'hold') {
          o.move = 'advance'; o.target = 'ranged'; b.applyOrders(L);
        }
        if (ob && ob.present && ob.present[foe] > 0 && !L.isRanged && o.move === 'hold') {
          o.move = 'advance'; o.target = 'objective'; b.applyOrders(L);
        }
        continue;
      }
      // Hügel: bei Rückstand stürmen
      if (ob && ob.type === 'hill' && ob.score[foe] > ob.score[me] + 10 && !L.isRanged && o.target !== 'objective') {
        o.target = 'objective'; b.applyOrders(L); continue;
      }
      // Übermacht -> aggressiver, Unterlegenheit -> defensiver
      if (sMine > sTheirs * 1.3 && o.stance !== 'aggressive' && !L.isRanged) o.stance = 'aggressive';
      else if (sMine < sTheirs * 0.7 && o.stance === 'aggressive') o.stance = 'balanced';
      // Untätige Legionen aktivieren
      if ((L.state === 'hold' || L.state === 'idle') && !L.isRanged && b.time > 25 && o.move === 'hold' && !(b.map.castle && b.map.castle.owner === me)) {
        o.move = 'advance'; b.applyOrders(L);
      }
      // Schützen rücken nach, wenn nichts in Reichweite
      if (L.isRanged && L.state === 'hold' && b.time > 12) {
        const t = b.chooseTarget(L, null, L.T.range);
        if (!t) { o.move = 'advance'; b.applyOrders(L); }
      }
      // Reiter: bevorzugt Schützen jagen, Piken meiden
      if (L.typeId === 'cavalry' && L.aiSmart && L.target && L.target.typeId === 'pike') {
        L.target = null; L.path = [];
      }
    }
  }
}
