// Duell-Matrix: jeder Typ gegen jeden, gleiche Mannstärke-Werte laut Legion-Größe × Faktor
import { BattleMap } from '../src/terrain.js';
import { Legion, resetIds } from '../src/units.js';
import { Battle } from '../src/battle.js';
import { autoDeploy, botOrders } from '../src/ai.js';
import { SCENARIOS, TYPE_ORDER, UNIT_TYPES } from '../src/data.js';
import { mulberry32 } from '../src/rng.js';
const VAL = JSON.parse(process.env.VAL || '{}');
const score = {};
for (const a of TYPE_ORDER) for (const b of TYPE_ORDER) {
  if (a >= b) continue;
  let wa = 0;
  for (let r = 0; r < 4; r++) {
    resetIds();
    const seed = 77 + r * 13;
    const map = new BattleMap('river', 'summer', seed);
    map.objective = null;
    const rng = mulberry32(seed);
    const [t0, t1] = r % 2 ? [b, a] : [a, b];
    // 2 Legionen je Seite, Stärke per Wertfaktor angeglichen (Ziel 60 "Punkte")
    const mk = (side, t) => [0, 1].map((i) => { const v = VAL[t] || 1; const m = 60 / (UNIT_TYPES[t].size * v); return Object.assign(new Legion(side, t, 0, 0, m), { index: i }); });
    const P = mk(0, t0), Q = mk(1, t1);
    autoDeploy(P, map.zones[0], 0, map, rng); autoDeploy(Q, map.zones[1], 1, map, rng);
    botOrders(P, 'canyon', map, 'normal', rng); botOrders(Q, 'canyon', map, 'normal', rng);
    for (const L of [...P, ...Q]) { L.orders.move = 'advance'; L.orders.retreatAt = 0; L.orders.delay = 0; L.orders.target = 'nearest'; }
    const bt = new Battle(map, [...P, ...Q], SCENARIOS.canyon);
    bt.begin();
    for (let s = 0; s < 30 * 420 && !bt.over; s++) bt.step(1 / 30);
    const winT = bt.winner === 0 ? t0 : t1;
    if (winT === a) wa++;
  }
  score[a] = (score[a] || 0) + wa; score[b] = (score[b] || 0) + (4 - wa);
  console.log(`${a.padEnd(8)} vs ${b.padEnd(8)} ${wa}:${4 - wa}`);
}
console.log(JSON.stringify(score));
