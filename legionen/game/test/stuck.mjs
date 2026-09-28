// Erkennt Legionen, die marschieren/sich zurückziehen wollen, aber nicht vorankommen
import { BattleMap } from '../src/terrain.js';
import { Legion, resetIds } from '../src/units.js';
import { Battle } from '../src/battle.js';
import { botArmy, autoDeploy, botOrders, BotBrain, botSizeMult } from '../src/ai.js';
import { SCENARIOS, SCENARIO_ORDER } from '../src/data.js';
import { mulberry32 } from '../src/rng.js';

const runs = +(process.argv[2] || 3);
const MOVING = new Set(['move', 'engage', 'retreat', 'kite']);
let total = 0;
const byState = {};
for (const sc of SCENARIO_ORDER) {
  for (let r = 0; r < runs; r++) {
    resetIds();
    const seed = 500 + r * 131 + sc.length * 7;
    const map = new BattleMap(sc, 'summer', seed);
    const rng = mulberry32(seed);
    const pTypes = ['legion', 'archer', 'cavalry', 'pike', 'guard'].slice(0, 3 + (r % 3));
    const player = pTypes.map((t, i) => Object.assign(new Legion(0, t, 0, 0, 1), { index: i }));
    const bTypes = botArmy(pTypes, sc, rng);
    const sm = botSizeMult(pTypes, bTypes, 1);
    const bot = bTypes.map((t, i) => Object.assign(new Legion(1, t, 0, 0, sm), { index: i }));
    autoDeploy(player, map.zones[0], 0, map, rng);
    autoDeploy(bot, map.zones[1], 1, map, rng);
    botOrders(bot, sc, map, 'normal', rng);
    botOrders(player, sc, map, 'normal', rng);
    for (const L of player) L.orders.retreatAt = 0.5; // viele Rückzüge provozieren
    const b = new Battle(map, [...player, ...bot], SCENARIOS[sc]);
    const brains = [new BotBrain(b, 'normal', rng, 1), new BotBrain(b, 'normal', rng, 0)];
    b.begin();
    const hist = new Map();
    let stuck = 0;
    for (let s = 0; s < 30 * 420 && !b.over; s++) {
      b.step(1 / 30); for (const br of brains) br.update(1 / 30);
      if (s % 15) continue;
      for (const L of b.legions) {
        if (!L.alive) continue;
        const h = hist.get(L) || { x: L.x, z: L.z, t: b.time, st: L.state };
        if (!MOVING.has(L.state)) { hist.set(L, { x: L.x, z: L.z, t: b.time }); continue; }
        if (Math.hypot(L.x - h.x, L.z - h.z) > 2.5) { hist.set(L, { x: L.x, z: L.z, t: b.time }); continue; }
        hist.set(L, h);
        if (b.time - h.t > 5) {
          stuck++; byState[L.state] = (byState[L.state] || 0) + 1;
          if (process.env.V) console.log(`  ${sc} r${r} t=${b.time.toFixed(0)} ${L.side}${L.typeId} ${L.state} at ${L.x.toFixed(1)},${L.z.toFixed(1)} path=${L.path.length} melee=${!!L.melee}` + (process.env.DBG ? ` next=${JSON.stringify(L.path.slice(0,3).map(p=>p.map(v=>+v.toFixed(1))))} spd=${L.speedCur.toFixed(2)} hold=${L.holdX.toFixed(1)},${L.holdZ.toFixed(1)} mv=${L.orders.move} wp=${L.wp&&L.wpIdx}/${L.wp&&L.wp.length} pass=${map.isPassable(L.x,L.z,L.side)} near=${b.legions.filter(o=>o!==L&&o.alive&&Math.hypot(o.x-L.x,o.z-L.z)<10).map(o=>o.side+o.typeId+':'+o.state).join(',')}` : ''));
          hist.set(L, { x: L.x, z: L.z, t: b.time });
        }
      }
    }
    total += stuck;
    console.log(`${sc.padEnd(8)} r${r} stuck-events=${stuck} t=${b.time.toFixed(0)} winner=${b.winner}`);
  }
}
console.log('TOTAL', total, JSON.stringify(byState));
