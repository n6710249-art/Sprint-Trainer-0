// A*-Pfadsuche auf dem Navigationsgitter der Karte (8 Richtungen) + Wegglättung

class Heap {
  constructor() { this.k = []; this.p = []; }
  push(k, p) {
    const K = this.k, P = this.p;
    let i = K.length; K.push(k); P.push(p);
    while (i > 0) {
      const par = (i - 1) >> 1;
      if (P[par] <= p) break;
      K[i] = K[par]; P[i] = P[par]; i = par;
    }
    K[i] = k; P[i] = p;
  }
  pop() {
    const K = this.k, P = this.p;
    const top = K[0];
    const lk = K.pop(), lp = P.pop();
    if (K.length) {
      let i = 0; const n = K.length;
      while (true) {
        let c = 2 * i + 1;
        if (c >= n) break;
        if (c + 1 < n && P[c + 1] < P[c]) c++;
        if (P[c] >= lp) break;
        K[i] = K[c]; P[i] = P[c]; i = c;
      }
      K[i] = lk; P[i] = lp;
    }
    return top;
  }
  get size() { return this.k.length; }
}

export class PathFinder {
  constructor(map) {
    this.map = map;
    const n = map.gw * map.gd;
    this.g = new Float32Array(n);
    this.from = new Int32Array(n);
    this.stamp = new Uint32Array(n);
    this.closed = new Uint32Array(n);
    this.cur = 1;
  }

  cellBlocked(k, side) {
    const m = this.map;
    if (m.blocked[k]) return true;
    return false;
  }
  cellCost(k, side, width) {
    const m = this.map;
    let c = m.cost[k];
    if (m.flags[k] & 8 && m.gate && m.gate.alive && side !== m.gate.owner) c += 5;
    const need = Math.min(4, Math.ceil(width / 4));
    if (m.clear[k] < need) c += (need - m.clear[k]) * 0.6;
    return c;
  }

  // nächstgelegene freie Zelle
  nearestFree(k, side) {
    const m = this.map, gw = m.gw, gd = m.gd;
    if (k >= 0 && !this.cellBlocked(k, side)) return k;
    const i0 = k >= 0 ? k % gw : 0, j0 = k >= 0 ? (k / gw) | 0 : 0;
    for (let r = 1; r < 20; r++) {
      let best = -1, bd = 1e9;
      for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
        if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue;
        const a = i0 + di, b = j0 + dj;
        if (a < 0 || b < 0 || a >= gw || b >= gd) continue;
        const kk = b * gw + a;
        if (!this.cellBlocked(kk, side)) {
          const d = di * di + dj * dj;
          if (d < bd) { bd = d; best = kk; }
        }
      }
      if (best >= 0) return best;
    }
    return -1;
  }

  find(sx, sz, tx, tz, side, width = 8) {
    const m = this.map, gw = m.gw, gd = m.gd;
    let s = this.nearestFree(m.cellIndex(sx, sz), side);
    let t = this.nearestFree(m.cellIndex(tx, tz), side);
    if (s < 0 || t < 0) return [[tx, tz]];
    if (s === t) return [[tx, tz]];
    const cur = ++this.cur;
    const G = this.g, F = this.from, S = this.stamp, C = this.closed;
    const ti = t % gw, tj = (t / gw) | 0;
    const h = (k) => {
      const dx = Math.abs((k % gw) - ti), dz = Math.abs(((k / gw) | 0) - tj);
      return (dx + dz + (1.4142 - 2) * Math.min(dx, dz)) * 1.0;
    };
    const heap = new Heap();
    S[s] = cur; G[s] = 0; F[s] = -1;
    heap.push(s, h(s));
    let found = false, iter = 0;
    let bestK = s, bestH = h(s);
    while (heap.size && iter++ < 24000) {
      const k = heap.pop();
      if (C[k] === cur) continue;
      C[k] = cur;
      if (k === t) { found = true; break; }
      const hk = h(k);
      if (hk < bestH) { bestH = hk; bestK = k; }
      const i = k % gw, j = (k / gw) | 0;
      for (let d = 0; d < 8; d++) {
        const di = DI[d], dj = DJ[d];
        const a = i + di, b = j + dj;
        if (a < 0 || b < 0 || a >= gw || b >= gd) continue;
        const kk = b * gw + a;
        if (this.cellBlocked(kk, side) || C[kk] === cur) continue;
        if (di && dj && (this.cellBlocked(j * gw + a, side) || this.cellBlocked(b * gw + i, side))) continue;
        const ng = G[k] + (di && dj ? 1.4142 : 1) * this.cellCost(kk, side, width);
        if (S[kk] !== cur || ng < G[kk]) {
          S[kk] = cur; G[kk] = ng; F[kk] = k;
          heap.push(kk, ng + h(kk));
        }
      }
    }
    let end = found ? t : bestK;
    const cells = [];
    for (let k = end; k >= 0; k = F[k]) cells.push(k);
    cells.reverse();
    // Glätten
    const pts = [];
    let anchor = 0;
    pts.push(m.cellCenter(cells[0]));
    for (let idx = 2; idx < cells.length; idx++) {
      if (!this.lineFree(cells[anchor], cells[idx], side, width)) {
        anchor = idx - 1;
        pts.push(m.cellCenter(cells[anchor]));
      }
    }
    if (found) pts.push([tx, tz]);
    else pts.push(m.cellCenter(end));
    pts.shift();
    return pts;
  }

  lineFree(a, b, side, width) {
    const m = this.map, gw = m.gw;
    let x0 = a % gw, y0 = (a / gw) | 0;
    const x1 = b % gw, y1 = (b / gw) | 0;
    const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;
    const base = m.cost[a];
    const need = Math.min(3, Math.ceil(width / 5));
    while (true) {
      const k = y0 * gw + x0;
      if (this.cellBlocked(k, side)) return false;
      if (m.cost[k] > base + 0.4) return false;
      if (m.clear[k] < need && m.clear[a] >= need) return false;
      if (m.flags[k] & 8) return false;
      if (x0 === x1 && y0 === y1) return true;
      const e2 = 2 * err;
      if (e2 > -dy) { err -= dy; x0 += sx; }
      if (e2 < dx) { err += dx; y0 += sy; }
    }
  }
}
const DI = [1, -1, 0, 0, 1, 1, -1, -1];
const DJ = [0, 0, 1, -1, 1, -1, 1, -1];
