// Legionen, Formationen und einzelne Soldaten
import { UNIT_TYPES, defaultOrders } from './data.js';

let NEXT_ID = 1;
export function resetIds() { NEXT_ID = 1; }

export function formationSlots(n, cols, sp, formation) {
  const slots = [];
  if (formation === 'wedge') {
    let row = 0, placed = 0;
    while (placed < n) {
      const w = Math.min(1 + row * 2, n - placed);
      for (let c = 0; c < w; c++) slots.push([(c - (w - 1) / 2) * sp, row * sp * 0.9]);
      placed += w; row++;
    }
  } else {
    let c = cols;
    if (formation === 'block') c = Math.max(3, Math.ceil(Math.sqrt(n * 1.1)));
    c = Math.max(2, Math.min(c, n));
    const rows = Math.ceil(n / c);
    for (let i = 0; i < n; i++) {
      const r = Math.floor(i / c);
      const inRow = r === rows - 1 ? n - r * c : c;
      const ci = i % c;
      slots.push([(ci - (inRow - 1) / 2) * sp, r * sp]);
    }
  }
  // zentrieren (Tiefe)
  let maxB = 0, maxL = 0;
  for (const s of slots) { maxB = Math.max(maxB, s[1]); maxL = Math.max(maxL, Math.abs(s[0])); }
  for (const s of slots) s[1] -= maxB / 2;
  return { slots, halfW: maxL + 0.7, halfD: maxB / 2 + 0.7 };
}

export class Legion {
  constructor(side, typeId, x, z, sizeMult = 1) {
    this.id = NEXT_ID++;
    this.side = side;
    this.typeId = typeId;
    this.T = UNIT_TYPES[typeId];
    this.maxCount = Math.max(20, Math.round(this.T.size * sizeMult));
    this.count = this.maxCount;
    this.maxHp = this.maxCount * this.T.hp;
    this.hp = this.maxHp;
    this.x = x; this.z = z;
    this.face = side === 0 ? Math.PI / 2 : -Math.PI / 2;
    this.orders = defaultOrders(typeId);
    this.state = 'idle';
    this.path = [];
    this.target = null;
    this.melee = null;
    this.speedCur = 0;
    this.vx = 0; this.vz = 0;
    this.kills = 0;
    this.dealt = 0;
    this.volleyT = Math.random() * 1.5;
    this.chargeT = 0;
    this.chargeReady = typeId === 'cavalry';
    this.movedFast = 0;
    this.repathT = 0;
    this.retreated = 0;
    this.regroupT = 0;
    this.flankPlan = null;
    this.holdX = x; this.holdZ = z;
    this.lastHitT = 99;
    this.underFire = 0;
    this.cols = this.T.cols;
    this.formDirty = true;
    this.soldiers = [];
    this.name = this.T.names[side];
    this.index = 0;
    this.buildSoldiers();
  }

  get alive() { return this.count > 0; }
  get ratio() { return this.count / this.maxCount; }
  get isRanged() { return this.T.range > 0; }
  get fwdX() { return Math.sin(this.face); }
  get fwdZ() { return Math.cos(this.face); }

  buildSoldiers() {
    this.soldiers = [];
    this.layout();
    for (let i = 0; i < this.maxCount; i++) {
      const [wx, wz] = this.slotWorld(i);
      this.soldiers.push({
        x: wx + (Math.random() - 0.5) * 0.3, z: wz + (Math.random() - 0.5) * 0.3, y: 0,
        yaw: this.face, alive: true, slot: i, phase: Math.random() * 6.28,
        swing: 0, deadT: 0, fall: Math.random() < 0.5 ? 1 : -1, walk: 0, jx: (Math.random() - 0.5) * 0.25, jz: (Math.random() - 0.5) * 0.25,
        hit: 0,
      });
    }
  }

  layout(clearance = 99) {
    let cols = this.T.cols;
    const f = this.orders.formation;
    if (f === 'line' && this.typeId !== 'cavalry') cols = Math.ceil(cols * 1.25);
    // im Wald lockern die Reihen auf, damit die Männer zwischen den Bäumen Platz haben
    const sp = this.T.spacing * (this.loose ? 1.35 : 1);
    const maxCols = Math.max(2, Math.floor((clearance * 2) / sp));
    this.cols = Math.min(cols, maxCols);
    const form = this.cols < cols && f !== 'block' ? 'line' : f;
    const res = formationSlots(Math.max(1, this.count), this.cols, sp, form);
    this.slots = res.slots;
    this.halfW = res.halfW; this.halfD = res.halfD;
    this.formDirty = false;
  }

  slotWorld(i) {
    const s = this.slots[Math.min(i, this.slots.length - 1)] || [0, 0];
    const fx = this.fwdX, fz = this.fwdZ;
    // links = (fz, -fx)
    const lx = fz, lz = -fx;
    return [this.x + lx * s[0] - fx * s[1], this.z + lz * s[0] - fz * s[1]];
  }

  // Ausdehnung der Formation in Richtung (dx,dz) (Stützfunktion des Rechtecks)
  support(dx, dz) {
    const fx = this.fwdX, fz = this.fwdZ;
    const f = Math.abs(dx * fx + dz * fz);
    const l = Math.abs(dx * fz - dz * fx);
    return f * this.halfD + l * this.halfW;
  }

  // Soldaten nach Verlusten neu zuordnen
  reassign() {
    let r = 0;
    const alive = this.soldiers.filter((s) => s.alive).sort((a, b) => a.slot - b.slot);
    for (const s of alive) s.slot = r++;
    this.formDirty = true;
  }

  killSoldier(fromX, fromZ, byArrow) {
    let best = null, bd = 1e9;
    for (const s of this.soldiers) {
      if (!s.alive) continue;
      let d;
      if (byArrow) d = Math.random();
      else d = (s.x - fromX) ** 2 + (s.z - fromZ) ** 2 + Math.random() * 2;
      if (d < bd) { bd = d; best = s; }
    }
    if (best) {
      best.alive = false;
      best.deadT = 0.0001;
      const dx = best.x - fromX, dz = best.z - fromZ;
      best.yaw = Math.atan2(-dx, -dz);
    }
    return best;
  }
}
