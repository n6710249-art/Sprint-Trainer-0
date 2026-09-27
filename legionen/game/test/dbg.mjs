import { BattleMap } from '../src/terrain.js';
import { Legion, resetIds } from '../src/units.js';
import { Battle } from '../src/battle.js';
import { botArmy, autoDeploy, botOrders, BotBrain } from '../src/ai.js';
import { SCENARIOS } from '../src/data.js';
import { mulberry32 } from '../src/rng.js';
const sc = process.argv[2] || 'assault';
const seed = 1011;
const map = new BattleMap(sc, 'summer', seed);
const rng = mulberry32(seed);
const pTypes = ['legion', 'legion', 'archer'];
const player = pTypes.map((t, i) => Object.assign(new Legion(0, t, 0, 0, 1), { index: i }));
const bot = botArmy(pTypes, sc, rng).map((t, i) => Object.assign(new Legion(1, t, 0, 0, 1), { index: i }));
autoDeploy(player, map.zones[0], 0, map, rng);
autoDeploy(bot, map.zones[1], 1, map, rng);
botOrders(bot, sc, map, 'normal', rng);
const b = new Battle(map, [...player, ...bot], SCENARIOS[sc]);
const brain = new BotBrain(b, 'normal', rng);
b.begin();
if (map.gate) console.log('gate', map.gate.x.toFixed(1), map.gate.z.toFixed(1), 'cells', map.gate.cells.length);
for (let s = 0; s < 30 * 200 && !b.over; s++) {
  b.step(1 / 30); brain.update(1 / 30);
  if (s % 150 === 0) console.log(b.time.toFixed(0), b.legions.map((l) => `${l.side}${l.typeId[0]}(${l.x.toFixed(0)},${l.z.toFixed(0)})${l.count}${l.state}${l.path.length}`).join(' '), map.gate ? Math.round(map.gate.hp) : '');
}
console.log(b.reason);
