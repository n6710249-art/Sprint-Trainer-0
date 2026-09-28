// Taktik-Experimente: Gewinnt, wer klüger kämpft?
import { BattleMap } from '../src/terrain.js';
import { Legion, resetIds } from '../src/units.js';
import { Battle } from '../src/battle.js';
import { SCENARIOS } from '../src/data.js';

function run(setup, seeds = 8) {
  let w0 = 0, t = 0, rem = [0, 0];
  for (let r = 0; r < seeds; r++) {
    resetIds();
    const map = new BattleMap('forest', 'summer', 300 + r * 17);
    map.objective = null;
    const legs = setup(map);
    const b = new Battle(map, legs, SCENARIOS.forest);
    b.begin();
    let s = 0;
    for (; s < 60 * 300 && !b.over; s++) b.step(1 / 60);
    if (b.winner === 0) w0++;
    t += b.time; rem[0] += b.strength(0) / b.start[0]; rem[1] += b.strength(1) / b.start[1];
  }
  return `Seite 0 gewinnt ${w0}/${seeds} · Ø ${(t / seeds).toFixed(0)} s · Rest ${(rem[0] / seeds * 100).toFixed(0)}% vs ${(rem[1] / seeds * 100).toFixed(0)}%`;
}
const mk = (side, type, x, z, o = {}) => { const L = new Legion(side, type, x, z, 1); L.face = side ? -Math.PI / 2 : Math.PI / 2; L.buildSoldiers(); Object.assign(L.orders, { retreatAt: 0, delay: 0, target: 'nearest', move: 'advance', stance: 'balanced', formation: 'line' }, o); return L; };
const clearAt = (map, z) => z; // Hilfsplatzhalter

console.log('1) 1 gegen 1 frontal (Kontrolle):          ', run(() => [mk(0, 'legion', -25, 0), mk(1, 'legion', 25, 0)]));
console.log('2) 2 gegen 1, zweite von HINTEN nachrückend:', run(() => [mk(0, 'legion', -25, 0), mk(0, 'legion', -45, 0, { delay: 8 }), mk(1, 'legion', 25, 0), mk(1, 'legion', 60, 30, { move: 'hold' })]));
console.log('3) 2 gegen 1, zweite von der SEITE:         ', run(() => [mk(0, 'legion', -25, 0), mk(0, 'legion', 0, -34, { delay: 8 }), mk(1, 'legion', 25, 0), mk(1, 'legion', 60, 30, { move: 'hold' })]));
console.log('4) Halten (ausgeruht) vs Anstürmen:         ', run(() => [mk(0, 'legion', -5, 0, { move: 'hold' }), mk(1, 'legion', 60, 0)]));
console.log('5) Reiter-Sturm frontal auf Legionäre:      ', run(() => [mk(0, 'cavalry', -30, 0), mk(1, 'legion', 25, 0, { move: 'hold' })]));
console.log('6) Reiter frontal auf stehende Piken:       ', run(() => [mk(0, 'cavalry', -30, 0), mk(1, 'pike', 20, 0, { move: 'hold' })]));
console.log('7) Legion bindet, Reiter stürmt in RÜCKEN:  ', run(() => [mk(0, 'legion', -25, 0), mk(0, 'cavalry', 60, 0, { delay: 14 }), mk(1, 'legion', 25, 0)]));
console.log('8) Legion bindet, Reiter stürmt FRONTAL:    ', run(() => [mk(0, 'legion', -25, 0), mk(0, 'cavalry', -60, 0, { delay: 6 }), mk(1, 'legion', 25, 0)]));
