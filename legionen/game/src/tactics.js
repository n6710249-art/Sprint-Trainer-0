// Taktik-Regeln: Moral, Ausdauer, Frontbreite, Flanke/Umzingelung und die Perks der Truppentypen
//
// Grundidee: Legionen werden selten bis zum letzten Mann aufgerieben – sie brechen vorher.
// Wer flankiert, umzingelt, ausgeruht kämpft oder die Höhe hat, bricht den Gegner schneller.

export const MORALE_WAVER = 30; // darunter: Legion wankt
export const TIRED = 35, EXHAUSTED = 12;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const d2 = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

export function initTactics(L) {
  L.morale = 100;
  L.stamina = 100;
  L.routed = false;
  L.routCount = 0;
  L.pilumCD = 4;
  L.meleeT = 0;
  L.dmgIn = 0; L.dmgOut = 0; // gleitende Schadensraten (für Moral)
  L.floatT = {};
  L.attackers = [];
  L.surrounded = false;
  L.flanked = 0; L.rear = 0;
  L.stillT = 0;
}

// Moral-Verlustfaktor durch Perks und Auren
export function moraleLossMult(b, L) {
  let m = 1;
  if (L.typeId === 'legion') m *= 0.8; // Disziplin
  if (L.typeId === 'guard') m *= 0.5; // Unerschütterlich
  if (L.orders.formation === 'block') m *= 0.85;
  if (L.aura) m *= 0.85; // Standarte in der Nähe
  return m;
}

export function float(b, L, text, cls = '', cd = 3) {
  const now = b.time;
  if (L.floatT[text] && now - L.floatT[text] < cd) return;
  L.floatT[text] = now;
  b.events.push({ type: 'float', legion: L, text, cls });
}

export function hitMorale(b, L, amount) {
  if (!L.alive) return;
  L.morale = clamp(L.morale - amount * moraleLossMult(b, L), 0, 100);
}

// Wie viele Männer kämpfen gleichzeitig? (vordere Reihen)
export function frontage(L) {
  const ranks = L.typeId === 'pike' ? 3 : 2;
  const width = L.orders.formation === 'wedge' ? Math.max(4, L.cols * 0.8) : L.cols;
  return Math.max(4, Math.min(L.count, Math.round(width * ranks)));
}

// Zustandsfaktoren für Angriff/Verteidigung (Ausdauer, Moral, Umzingelung, Flucht)
export function stateMods(A, B) {
  let atk = 1, def = 1;
  if (A.stamina < EXHAUSTED) atk *= 0.7; else if (A.stamina < TIRED) atk *= 0.86;
  if (B.stamina < EXHAUSTED) def *= 0.85;
  if (A.morale < MORALE_WAVER) atk *= 0.8;
  if (B.morale < MORALE_WAVER) def *= 0.9;
  if (B.surrounded) def *= 0.8;
  if (B.routed) def *= 0.6;
  return [atk, def];
}

export function speedFactor(L) {
  if (L.stamina < EXHAUSTED) return 0.72;
  if (L.stamina < TIRED) return 0.87;
  return 1;
}

// Pikeniere gelten als „Speerwall“, wenn sie eine Weile stillstehen
export function braced(L) {
  return L.typeId === 'pike' && L.stillT > 1.2 && !L.routed;
}

// ---------------------------------------------------------------------
// pro Simulationsschritt
export function updateTactics(b, dt) {
  const legs = b.legions;
  // Angreifer je Legion sammeln
  for (const L of legs) { L.attackers.length = 0; L.aura = false; }
  for (const A of legs) if (A.alive && A.melee && A.melee.alive) A.melee.attackers.push(A);
  // Standarten-Aura der Prätorianer/Eisenwache
  for (const G of legs) {
    if (!G.alive || G.typeId !== 'guard' || G.routed) continue;
    for (const L of legs) if (L !== G && L.alive && L.side === G.side && d2(L, G) < 18) L.aura = true;
  }
  for (const L of legs) {
    if (!L.alive) continue;
    updateStamina(b, L, dt);
    updateMorale(b, L, dt);
  }
}

function updateStamina(b, L, dt) {
  const moving = L.speedCur > 0.5;
  if (moving) L.stillT = 0; else L.stillT += dt;
  let ds;
  if (L.state === 'melee') ds = -1.5;
  else if (moving) ds = -(L.typeId === 'cavalry' ? 2.3 : 1.25) * clamp(L.speedCur / L.T.speed, 0.2, 1.2);
  else ds = L.state === 'shoot' ? 2 : 4.5;
  L.stamina = clamp(L.stamina + ds * dt, 0, 100);
  if (L.stamina < EXHAUSTED && L.state !== 'retreat') float(b, L, 'ERSCHÖPFT', 'warn', 12);
}

function updateMorale(b, L, dt) {
  // Schadensraten glätten
  const k = Math.min(1, dt * 1.5);
  L.dmgInRate = (L.dmgInRate || 0) * (1 - k) + (L.dmgIn / Math.max(dt, 1e-3)) * k;
  L.dmgOutRate = (L.dmgOutRate || 0) * (1 - k) + (L.dmgOut / Math.max(dt, 1e-3)) * k;
  L.dmgIn = 0; L.dmgOut = 0;

  // Flanke / Rücken / Umzingelung
  let flank = 0, rear = 0;
  const angs = [];
  for (const A of L.attackers) {
    const fm = b.flankMult(A, L);
    if (fm >= 1.6) rear++; else if (fm >= 1.3) flank++;
    angs.push(Math.atan2(A.x - L.x, A.z - L.z));
  }
  let spread = 0;
  for (let i = 0; i < angs.length; i++) for (let j = i + 1; j < angs.length; j++) {
    let d = Math.abs(angs[i] - angs[j]) % (Math.PI * 2);
    if (d > Math.PI) d = Math.PI * 2 - d;
    spread = Math.max(spread, d);
  }
  const wasSurr = L.surrounded;
  L.surrounded = (angs.length >= 2 && spread > 1.9) || (rear > 0 && angs.length >= 2);
  L.flanked = flank; L.rear = rear;
  if (flank) float(b, L, 'FLANKE!', 'bad');
  if (rear) float(b, L, 'RÜCKEN!', 'bad');
  if (L.surrounded && !wasSurr) float(b, L, 'UMZINGELT!', 'bad', 5);

  let dm = 0;
  const engaged = L.state === 'melee' || L.attackers.length > 0;
  if (L.routed) {
    const near = b.nearestEnemy(L, 18);
    dm = near ? 1 : 5;
  } else if (engaged) {
    dm -= 1.2 + flank * 4 + rear * 7 + (L.surrounded ? 7 : 0); // Nahkampf zermürbt
    // Wer im Nahkampf mehr austeilt als einsteckt, fasst Mut – und umgekehrt
    const bal = (L.dmgOutRate - L.dmgInRate) / (L.T.hp * 1.5);
    dm += clamp(bal, -3, 2);
    if (L.melee && b.map.getHeight(L.x, L.z) - b.map.getHeight(L.melee.x, L.melee.z) > 1.5) dm += 0.6;
  } else {
    dm += b.nearestEnemy(L, 16) ? 0.6 : 2.5;
  }
  if (L.underFire > 0) { dm -= 1.2; L.underFire = Math.max(0, L.underFire - dt * 0.5); }
  if (L.aura) dm += 1.5;
  if (L.stamina < EXHAUSTED) dm -= 0.6;
  if (dm < 0) dm *= moraleLossMult(b, L);
  const cap = clamp(100 - (1 - L.ratio) * 35 - L.routCount * 15, 35, 100);
  L.morale = clamp(L.morale + dm * dt, 0, Math.max(cap, Math.min(L.morale, 100)));
  if (L.morale > cap && dm > 0) L.morale = Math.max(cap, L.morale - dt * 2);

  if (!L.routed && L.morale < MORALE_WAVER && L.morale > 0) float(b, L, 'WANKT', 'warn', 8);
  // Bruch
  if (!L.routed && L.morale <= 0 && L.state !== 'regroup') {
    if (L.typeId === 'guard' && L.ratio > 0.3) { L.morale = 5; return; }
    rout(b, L);
  }
}

export function rout(b, L) {
  L.routed = true;
  L.routCount++;
  b.startRetreat(L, true);
  float(b, L, 'FLIEHT!', 'bad', 6);
  b.events.push({ type: 'rout', side: L.side, legion: L });
  // Panik steckt an, Feinde fassen Mut
  for (const X of b.legions) {
    if (!X.alive || X === L) continue;
    const d = d2(X, L);
    if (d > 24) continue;
    if (X.side === L.side) hitMorale(b, X, 10);
    else X.morale = Math.min(100, X.morale + 6);
  }
}

// Schaden verbucht -> Moral durch Verluste
export function onCasualty(b, B, A, byArrow) {
  hitMorale(b, B, (100 / B.maxCount) * (byArrow ? 1.1 : 1.6));
}

// Legion vernichtet -> Schock für Verbündete in der Nähe
export function onLegionLost(b, B) {
  for (const X of b.legions) if (X.alive && X.side === B.side && d2(X, B) < 26) hitMorale(b, X, 12);
}

// Sturmangriff-Aufprall
export function chargeShock(b, A, B, fm) {
  const shock = 12 * fm * (A.orders.formation === 'wedge' ? 1.2 : 1);
  hitMorale(b, B, shock);
  float(b, B, fm >= 1.6 ? 'STURM IN DEN RÜCKEN!' : 'STURMANGRIFF!', 'bad', 4);
}
