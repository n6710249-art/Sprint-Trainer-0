// Headless-Simulation: spielt Schlachten aller Szenarien ohne Grafik durch
import { BattleMap } from '../src/terrain.js';
import { Legion, resetIds } from '../src/units.js';
import { Battle } from '../src/battle.js';
import { botArmy, autoDeploy, botOrders, BotBrain, botSizeMult } from '../src/ai.js';
import { SCENARIOS, SCENARIO_ORDER } from '../src/data.js';
import { mulberry32 } from '../src/rng.js';

const runs = +(process.argv[2] || 2);
let fails = 0;
for (const sc of SCENARIO_ORDER) {
  for (let r = 0; r < runs; r++) {
    resetIds();
    const seed = 1000 + r * 77 + sc.length;
    const t0 = Date.now();
    const map = new BattleMap(sc, ['summer', 'winter', 'desert', 'autumn'][r % 4], seed);
    const rng = mulberry32(seed);
    const pTypes = ['legion', 'archer', 'cavalry', 'pike', 'guard'].slice(0, 2 + (r % 4));
    const player = pTypes.map((t, i) => Object.assign(new Legion(0, t, 0, 0, 1), { index: i }));
    const bTypes = botArmy(pTypes, sc, rng);
    const sm = botSizeMult(pTypes, bTypes, 1);
    const bot = bTypes.map((t, i) => Object.assign(new Legion(1, t, 0, 0, sm), { index: i }));
    autoDeploy(player, map.zones[0], 0, map, rng);
    autoDeploy(bot, map.zones[1], 1, map, rng);
    botOrders(bot, sc, map, 'normal', rng);
    if (process.env.MIRROR) botOrders(player, sc, map, 'normal', rng);
    const b = new Battle(map, [...player, ...bot], SCENARIOS[sc]);
    const brain = new BotBrain(b, 'normal', rng);
    const brain0 = process.env.MIRROR ? new BotBrain(b, 'normal', rng, 0) : null;
    const stuck = player.concat(bot).filter((L) => !map.isPassable(L.x, L.z, L.side));
    b.begin();
    let steps = 0;
    while (!b.over && steps < 30 * 800) { b.step(1 / 30); brain.update(1 / 30); if (brain0) brain0.update(1 / 30); steps++; }
    const g = map.gate ? ` gate=${Math.round(map.gate.hp)}` : '';
    const ob = map.objective ? ` obj=${map.objective.type === 'keep' ? map.objective.hold.toFixed(1) : map.objective.score.map((x) => x.toFixed(0))}` : '';
    console.log(`${sc.padEnd(8)} r${r} t=${b.time.toFixed(0)}s winner=${b.winner} ${b.reason} | P ${b.strength(0)}/${b.start[0]} B ${b.strength(1)}/${b.start[1]}${g}${ob} stuck=${stuck.length} ms=${Date.now() - t0}`);
    if (!b.over || stuck.length) fails++;
  }
}
console.log(fails ? `FEHLER: ${fails}` : 'OK');
