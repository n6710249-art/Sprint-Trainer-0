// Legionen – Hauptprogramm: Spielablauf, Eingabe, Oberfläche
import { Stage, Overlays } from './scene.js';
import { BattleMap } from './terrain.js';
import { buildWorld, animateWorld } from './world.js';
import { Legion, resetIds } from './units.js';
import { Battle } from './battle.js';
import { botArmy, autoDeploy, botOrders, BotBrain, botSizeMult } from './ai.js';
import { UnitRenderer } from './unitsRender.js';
import { Sound } from './audio.js';
import { UNIT_TYPES, TYPE_ORDER, SCENARIOS, SCENARIO_ORDER, BIOMES, DIFFICULTY, FACTIONS } from './data.js';
import { unitIcon, scenIcon, STATE_GLYPH, ROMAN } from './icons.js';
import { mulberry32 } from './rng.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const store = {
  get(k, d) { try { const v = localStorage.getItem('legionen.' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('legionen.' + k, JSON.stringify(v)); } catch (e) { /* egal */ } },
};

const QUALITY = {
  high: { shadows: true, shadowSize: 2048, pixelRatio: 2, aa: true },
  medium: { shadows: true, shadowSize: 1024, pixelRatio: 1.5, aa: true },
  low: { shadows: false, shadowSize: 512, pixelRatio: 1, aa: false },
};
const settings = Object.assign({ sound: true, quality: 'high' }, store.get('settings', {}));
const stats = Object.assign({ wins: 0, losses: 0, streak: 0, best: 0 }, store.get('stats', {}));

const stage = new Stage($('#c'), QUALITY[settings.quality] || QUALITY.high);
const sound = new Sound();
sound.setEnabled(settings.sound);

const G = {
  phase: 'loading',
  cfg: Object.assign({ scenario: 'random', biome: 'random', diff: 'normal', army: ['legion', 'legion', 'archer', 'cavalry'] }, store.get('cfg', {})),
  cur: null,
  selected: null,
  speed: 1,
  paused: false,
  mode: null,
  tab: 'move',
  slotSel: 0,
  last: null,
};

// =====================================================================
// Schlacht erstellen / entsorgen
// =====================================================================
function resolveCfg(cfg) {
  const rng = mulberry32((Math.random() * 1e9) | 0);
  const scenario = cfg.scenario === 'random' ? rng.pick(SCENARIO_ORDER) : cfg.scenario;
  let biome = cfg.biome === 'random' ? rng.pick(Object.keys(BIOMES)) : cfg.biome;
  return { scenario, biome, diff: cfg.diff, army: cfg.army.slice(), seed: (Math.random() * 1e9) | 0 };
}

function createBattle(opts) {
  disposeBattle();
  resetIds();
  const map = new BattleMap(opts.scenario, opts.biome, opts.seed);
  stage.setupEnvironment(opts.biome, map.fogDensity);
  stage.groundFn = (x, z) => map.terrainHeight(x, z);
  const world = buildWorld(map, stage.scene);
  const rng = mulberry32(opts.seed + 7);
  const D = DIFFICULTY[opts.diff];
  const pTypes = opts.demo ? botArmy(['legion', 'archer', 'cavalry', 'pike'], opts.scenario, rng) : opts.army;
  const player = pTypes.map((t, i) => { const L = new Legion(0, t, 0, 0, 1); L.index = i; return L; });
  const botTypes = opts.botTypes || botArmy(pTypes, opts.scenario, rng);
  const sizeMult = botSizeMult(pTypes, botTypes, opts.demo ? 1 : D.size);
  const bot = botTypes.map((t, i) => { const L = new Legion(1, t, 0, 0, sizeMult); L.index = i; return L; });
  const all = [...player, ...bot];
  autoDeploy(player, map.zones[0], 0, map, rng);
  autoDeploy(bot, map.zones[1], 1, map, rng);
  botOrders(bot, opts.scenario, map, opts.diff, rng);
  if (opts.demo) botOrders(player, opts.scenario, map, 'normal', rng);
  const battle = new Battle(map, all, SCENARIOS[opts.scenario]);
  const brain = new BotBrain(battle, opts.diff, rng);
  const units = new UnitRenderer(stage.scene, all, map, stage.quality.shadows);
  const overlays = new Overlays(stage.scene, map);
  const B = { opts, map, world, legions: all, player, bot, battle, brain, units, overlays, labels: new Map(), time: 0, dustT: 0 };
  if (opts.demo) {
    // Spieler-Seite wird im Demo auch vom Bot geführt
    B.brain0 = new BotBrain(battle, 'normal', rng, 0);
  }
  G.cur = B;
  createLabels(B);
  overlays.showZones(false);
  return B;
}

function disposeBattle() {
  const B = G.cur;
  if (!B) return;
  stage.scene.remove(B.world.group);
  B.world.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material && o.material.dispose) o.material.dispose(); });
  B.units.dispose();
  B.overlays.dispose();
  $('#labels').innerHTML = '';
  G.cur = null;
  G.selected = null;
  G.mode = null;
}

// =====================================================================
// Legionsschilder
// =====================================================================
function legionTitle(L) { return `${ROMAN[L.index] || L.index + 1}. ${L.name}`; }

function createLabels(B) {
  const root = $('#labels');
  root.innerHTML = '';
  for (const L of B.legions) {
    const el = document.createElement('div');
    el.className = 'lbl' + (L.side === 1 ? ' e' : '');
    el.innerHTML = `<div class="plate">${unitIcon(L.typeId, L.side)}<span class="n">${ROMAN[L.index]}</span><span class="c">${L.count}</span><span class="s"></span></div><div class="hpb"><i></i></div>`;
    el.addEventListener('pointerdown', (e) => { e.stopPropagation(); onPointerDown(e, L); });
    root.appendChild(el);
    B.labels.set(L, { el, c: el.querySelector('.c'), s: el.querySelector('.s'), hp: el.querySelector('.hpb i'), lastC: -1, lastS: '' });
  }
  if (B.map.gate) {
    const el = document.createElement('div');
    el.className = 'gatelbl';
    el.innerHTML = 'Burgtor<div class="hpb"><i></i></div>';
    root.appendChild(el);
    B.gateLbl = { el, hp: el.querySelector('i') };
  }
}

const _pp = { x: 0, y: 0, visible: false };
function updateLabels(B) {
  const inGame = G.phase === 'deploy' || G.phase === 'orders' || G.phase === 'battle' || G.phase === 'result';
  for (const L of B.legions) {
    const lb = B.labels.get(L);
    if (!inGame || !L.alive) { if (lb.el.style.display !== 'none') lb.el.style.display = 'none'; continue; }
    const h = B.map.getHeight(L.x, L.z) + (L.typeId === 'cavalry' ? 5.2 : 4.4);
    stage.project(L.x, h, L.z, _pp);
    if (!_pp.visible || _pp.x < -60 || _pp.y < -60 || _pp.x > innerWidth + 60 || _pp.y > innerHeight + 60) { lb.el.style.display = 'none'; continue; }
    lb.el.style.display = '';
    lb.el.style.transform = `translate(${_pp.x.toFixed(1)}px, ${_pp.y.toFixed(1)}px) translate(-50%, -100%)`;
    if (lb.lastC !== L.count) { lb.c.textContent = L.count; lb.hp.style.width = (L.ratio * 100).toFixed(0) + '%'; lb.lastC = L.count; }
    const st = G.phase === 'battle' ? (STATE_GLYPH[L.state] || '') : '';
    if (lb.lastS !== st) { lb.s.textContent = st; lb.lastS = st; }
    const sel = G.selected === L;
    const tgt = G.selected && G.selected.side === 0 && G.selected.orders.target === 'legion' && G.selected.orders.targetId === L.id;
    lb.el.classList.toggle('sel', sel);
    lb.el.classList.toggle('tgt', !!tgt);
  }
  if (B.gateLbl) {
    const g = B.map.gate;
    const show = inGame && g.alive && G.phase === 'battle' && g.hp < g.maxHp;
    if (!show) B.gateLbl.el.style.display = 'none';
    else {
      stage.project(g.x, B.map.castle.base + 8, g.z, _pp);
      B.gateLbl.el.style.display = _pp.visible ? '' : 'none';
      B.gateLbl.el.style.left = _pp.x + 'px';
      B.gateLbl.el.style.top = _pp.y + 'px';
      B.gateLbl.hp.style.width = (g.hp / g.maxHp * 100).toFixed(0) + '%';
    }
  }
}

// =====================================================================
// Bildschirme
// =====================================================================
function showScreen(id) {
  for (const s of $$('.screen')) if (s.id !== 'dlg') s.classList.toggle('show', s.id === id);
}

function showMenu() {
  G.phase = 'menu';
  G.paused = false;
  $('#hud').classList.add('hidden');
  showScreen('scr-menu');
  $('#menu-stats').innerHTML = stats.wins + stats.losses > 0
    ? `Siege <b>${stats.wins}</b> · Niederlagen <b>${stats.losses}</b> · Beste Serie <b>${stats.best}</b>`
    : 'Deine erste Schlacht wartet.';
  startDemo();
}

function startDemo() {
  const rng = mulberry32((Math.random() * 1e9) | 0);
  const scenario = rng.pick(['canyon', 'river', 'hill', 'forest', 'river', 'hill']);
  const biome = rng.pick(Object.keys(BIOMES));
  const B = createBattle({ scenario, biome, diff: 'normal', army: [], seed: (Math.random() * 1e9) | 0, demo: true });
  B.battle.begin();
  B.battle.events.length = 0;
  G.demo = true;
  G.speed = 1;
  stage.cam.tx = 0; stage.cam.tz = 0; stage.cam.tdist = 78; stage.cam.tpitch = 0.62;
  stage.cam.tyaw = rng.range(-0.6, 0.6);
}

function showSetup() {
  G.phase = 'setup';
  showScreen('scr-setup');
  renderSetup();
}

function renderSetup() {
  const c = G.cfg;
  const sg = $('#scen-grid');
  sg.innerHTML = ['random', ...SCENARIO_ORDER].map((id) => `<div class="scen ${c.scenario === id ? 'on' : ''}" data-s="${id}">${scenIcon(id)}<span>${id === 'random' ? 'Zufall' : SCENARIOS[id].name}</span></div>`).join('');
  $('#scen-desc').textContent = c.scenario === 'random' ? 'Ein zufälliges Szenario auf einer zufälligen Karte – lass dich überraschen.' : SCENARIOS[c.scenario].desc;
  $('#biome-chips').innerHTML = [['random', 'Zufall'], ...Object.entries(BIOMES).map(([k, v]) => [k, v.name])].map(([k, n]) => `<button class="chip ${c.biome === k ? 'on' : ''}" data-b="${k}">${n}</button>`).join('');
  $('#diff-chips').innerHTML = Object.entries(DIFFICULTY).map(([k, v]) => `<button class="chip ${c.diff === k ? 'on' : ''}" data-d="${k}">${v.name}</button>`).join('');
  const slots = [];
  for (let i = 0; i < 5; i++) {
    const t = c.army[i];
    const sel = G.slotSel === i ? ' sel' : '';
    if (t) {
      slots.push(`<div class="slot filled${sel}" data-slot="${i}"><span class="num">${ROMAN[i]}</span>${unitIcon(t, 0)}<span>${UNIT_TYPES[t].names[0]}</span><small>${UNIT_TYPES[t].size} Mann</small>${c.army.length > 1 ? `<span class="x" data-rm="${i}">✕</span>` : ''}</div>`);
    } else {
      slots.push(`<div class="slot${sel}" data-slot="${i}"><span class="plus">+</span><span>Legion</span></div>`);
    }
  }
  $('#army-slots').innerHTML = slots.join('');
  $('#type-grid').innerHTML = TYPE_ORDER.map((id) => {
    const T = UNIT_TYPES[id];
    const bars = Object.entries(T.stats).map(([k, v]) => `<span>${k}</span><div class="bar"><i style="width:${v * 20}%"></i></div>`).join('');
    return `<div class="tcard" data-t="${id}">${unitIcon(id, 0)}<div><b>${T.names[0]} <span style="color:var(--muted);font-weight:400;font-size:11px">· ${T.size} Mann</span></b><small>${T.desc[0]}</small></div><div class="bars">${bars}</div></div>`;
  }).join('');
  store.set('cfg', c);
}

$('#scr-setup').addEventListener('click', (e) => {
  const c = G.cfg;
  const s = e.target.closest('[data-s]');
  const b = e.target.closest('[data-b]');
  const d = e.target.closest('[data-d]');
  const rm = e.target.closest('[data-rm]');
  const sl = e.target.closest('[data-slot]');
  const t = e.target.closest('[data-t]');
  if (s) c.scenario = s.dataset.s;
  else if (b) c.biome = b.dataset.b;
  else if (d) c.diff = d.dataset.d;
  else if (rm) { c.army.splice(+rm.dataset.rm, 1); G.slotSel = Math.min(c.army.length, 4); }
  else if (sl) { G.slotSel = Math.min(+sl.dataset.slot, c.army.length); }
  else if (t) {
    const i = G.slotSel;
    if (i < c.army.length) c.army[i] = t.dataset.t;
    else if (c.army.length < 5) c.army.push(t.dataset.t);
    G.slotSel = Math.min(c.army.length, 4);
    if (c.army.length === 5 && i === 4) G.slotSel = 4;
  } else return;
  sound.play('click');
  renderSetup();
});

// =====================================================================
// Aufstellung / Befehle / Schlacht
// =====================================================================
function startDeploy(cfg) {
  sound.unlock();
  G.demo = false;
  const opts = resolveCfg(cfg);
  G.last = opts;
  enterDeploy(opts);
}

function enterDeploy(opts) {
  const B = createBattle(opts);
  G.phase = 'deploy';
  G.paused = false;
  G.speed = 1;
  showScreen(null);
  $('#hud').classList.remove('hidden');
  B.overlays.showZones(true);
  const z = B.map.zones[0];
  stage.cam.tyaw = 0; stage.cam.tpitch = 0.95;
  stage.focus(((z.x0 + z.x1) / 2) * 0.45, 2, 100);
  setupHud();
  select(null);
  hint('Ziehe deine Legionen in die blaue Zone · Tippe auf Feinde zum Aufklären');
  $('#feed').innerHTML = '';
}

function enterOrders() {
  const B = G.cur;
  G.phase = 'orders';
  B.overlays.showZones(false);
  setupHud();
  select(B.player[0]);
  hint('Wähle eine Legion und lege Marschroute, Angriff und Rückzug fest');
  refreshRoutes();
}

function enterBattle() {
  const B = G.cur;
  G.phase = 'battle';
  G.mode = null;
  B.battle.begin();
  B.overlays.clearRoutes();
  setupHud();
  hint('');
  closeOrders();
  G.selected = null;
  banner('ZUM ANGRIFF!');
  sound.play('drum');
  setTimeout(() => sound.play('drum'), 350);
}

function setupHud() {
  const B = G.cur;
  const ph = G.phase;
  const sc = SCENARIOS[B.opts.scenario];
  $('#hud-phase').textContent = ph === 'deploy' ? `Aufstellung · ${sc.name}` : ph === 'orders' ? `Befehle · ${sc.name}` : sc.name;
  $('#hud-goal').textContent = sc.goal + ` (${BIOMES[B.opts.biome].name})`;
  $('#hud-battle').style.visibility = ph === 'battle' ? 'visible' : 'hidden';
  $('#speed-ctl').style.display = ph === 'battle' ? '' : 'none';
  $('#hud-time').style.display = ph === 'battle' ? '' : 'none';
  $('#pause-banner').classList.toggle('show', ph === 'battle' && G.paused);
  $('#btn-pause').classList.toggle('on', G.paused);
  for (const b of $$('[data-speed]')) b.classList.toggle('on', +b.dataset.speed === G.speed);
  $('#btn-sound').textContent = settings.sound ? '🔊' : '🔇';
  renderRoster();
  renderActions();
}

function renderActions() {
  const a = $('#actions');
  if (G.mode === 'waypoints') {
    a.innerHTML = `<button class="btn" data-a="wp-clear">Zurücksetzen</button><button class="btn primary" data-a="wp-done">✓ Route fertig</button>`;
    return;
  }
  if (G.mode === 'pickTarget') {
    a.innerHTML = `<button class="btn" data-a="mode-cancel">Abbrechen</button>`;
    return;
  }
  switch (G.phase) {
    case 'deploy':
      a.innerHTML = `<button class="btn" data-a="auto">Auto</button><button class="btn" data-a="rotate" ${G.selected ? '' : 'disabled'}>⟳ Drehen</button><button class="btn primary" data-a="to-orders">Befehle ▶</button>`;
      break;
    case 'orders':
      a.innerHTML = `<button class="btn" data-a="to-deploy">◀ Aufstellung</button><button class="btn primary" data-a="fight">⚔ Schlacht beginnen</button>`;
      break;
    case 'battle':
      a.innerHTML = G.selected && G.selected.side === 0 && G.selected.alive && !$('#orders').classList.contains('show') ? `<button class="btn" data-a="open-orders">Befehle</button>` : '';
      break;
    default: a.innerHTML = '';
  }
}

$('#actions').addEventListener('click', (e) => {
  const b = e.target.closest('[data-a]');
  if (!b) return;
  const B = G.cur;
  sound.play('click');
  switch (b.dataset.a) {
    case 'auto': {
      for (const L of B.player) L.placed = false;
      autoDeploy(B.player, B.map.zones[0], 0, B.map, mulberry32(Date.now() | 0));
      toast('Legionen automatisch aufgestellt');
      break;
    }
    case 'rotate':
      if (G.selected) { G.selected.face += Math.PI / 4; G.selected.formDirty = true; }
      break;
    case 'to-orders': enterOrders(); break;
    case 'to-deploy':
      closeOrders(); B.overlays.clearRoutes();
      G.phase = 'deploy'; B.overlays.showZones(true); setupHud();
      hint('Ziehe deine Legionen in die blaue Zone');
      break;
    case 'fight': enterBattle(); break;
    case 'wp-clear':
      if (G.selected) { G.selected.orders.waypoints = []; refreshRoutes(); }
      break;
    case 'wp-done': finishWaypoints(); break;
    case 'mode-cancel': G.mode = null; hint(''); renderActions(); break;
    case 'open-orders': if (G.selected) openOrders(G.selected); break;
  }
});

function renderRoster() {
  const B = G.cur;
  const r = $('#roster');
  r.innerHTML = B.player.map((L, i) => `<div class="lchip" data-l="${i}">${unitIcon(L.typeId, 0)}<div class="t"><b>${ROMAN[L.index]}. ${L.name}</b><span class="cnt">${L.count}/${L.maxCount}</span></div><span class="st"></span><div class="hp"><i style="width:${L.ratio * 100}%"></i></div></div>`).join('');
  G.rosterEls = $$('#roster .lchip').map((el) => ({ el, cnt: el.querySelector('.cnt'), st: el.querySelector('.st'), hp: el.querySelector('.hp i') }));
  updateRoster();
}
function updateRoster() {
  const B = G.cur;
  if (!B || !G.rosterEls) return;
  B.player.forEach((L, i) => {
    const r = G.rosterEls[i];
    if (!r) return;
    r.el.classList.toggle('sel', G.selected === L);
    r.el.classList.toggle('dead', !L.alive);
    r.cnt.textContent = `${L.count}/${L.maxCount}`;
    r.hp.style.width = (L.ratio * 100).toFixed(0) + '%';
    const st = G.phase === 'battle' ? (STATE_GLYPH[L.state] || '') : (L.orders.delay ? '⏳' : '');
    r.st.textContent = st;
    r.st.style.display = st ? '' : 'none';
  });
}
$('#roster').addEventListener('click', (e) => {
  const c = e.target.closest('[data-l]');
  if (!c) return;
  const L = G.cur.player[+c.dataset.l];
  if (!L.alive) return;
  sound.play('select');
  if (G.selected === L) stage.focus(L.x, L.z, Math.min(stage.cam.tdist, 60));
  select(L, true);
});

// =====================================================================
// Auswahl & Befehlspanel
// =====================================================================
function select(L, fromUi = false) {
  G.selected = L;
  if (L && L.side === 0 && (G.phase === 'orders' || G.phase === 'battle')) openOrders(L);
  else closeOrders();
  if (L && L.side === 1) {
    const T = UNIT_TYPES[L.typeId];
    toast(`Feind: ${legionTitle(L)} · ${L.count} Mann`);
  }
  if (fromUi && L && G.phase === 'battle') stage.focus(L.x, L.z);
  updateRoster();
  renderActions();
  if (G.phase === 'orders') refreshRoutes();
}

const ORD = {
  move: [
    { key: 'move', label: 'Marschroute', opts: [['advance', 'Vorrücken'], ['hold', 'Halten'], ['flankL', '↰ Flanke links'], ['flankR', 'Flanke rechts ↱'], ['path', '✎ Eigene Route']],
      help: { advance: 'Rückt direkt auf das gewählte Ziel vor.', hold: 'Hält die Stellung und greift nur Feinde in der Nähe an.', flankL: 'Weiter Bogen links herum – Angriff in Flanke oder Rücken (+30 % / +60 %).', flankR: 'Weiter Bogen rechts herum – Angriff in Flanke oder Rücken (+30 % / +60 %).', path: 'Tippe bis zu 4 Wegpunkte auf die Karte. Danach wird das Ziel angegriffen.' } },
    { key: 'formation', label: 'Formation', opts: [['line', 'Linie'], ['block', 'Block'], ['wedge', 'Keil']],
      help: { line: 'Breite Front – ausgewogen, viele Kämpfer im Kontakt.', block: 'Kompakt: +15 % Verteidigung, weniger Pfeilschaden, etwas langsamer.', wedge: 'Keil: +10 % Angriff, stärkerer Sturmangriff, aber verwundbarer.' } },
    { key: 'delay', label: 'Startsignal', opts: [[0, 'Sofort'], [5, '+5 s'], [10, '+10 s'], [20, '+20 s']],
      help: { 0: 'Marschiert beim Hornsignal los.', 5: 'Wartet 5 Sekunden – gut für gestaffelte Angriffe.', 10: 'Wartet 10 Sekunden – z. B. bis die Front gebunden ist.', 20: 'Wartet 20 Sekunden – ideal als Reserve oder Hinterhalt.' } },
  ],
  attack: [
    { key: 'target', label: 'Angriffsziel', opts: [['nearest', 'Nächster'], ['weakest', 'Schwächster'], ['strongest', 'Stärkster'], ['ranged', 'Fernkämpfer'], ['legion', '◎ Legion wählen'], ['objective', 'Zielgebiet']],
      help: { nearest: 'Greift den nächstgelegenen Feind an.', weakest: 'Sucht angeschlagene Legionen, um sie zu vernichten.', strongest: 'Bindet die stärkste feindliche Legion.', ranged: 'Jagt Bogenschützen – ideal für Reiterei.', legion: 'Tippe auf eine feindliche Legion als festes Ziel.', objective: 'Zieht zum Missionsziel und hält es.' } },
    { key: 'stance', label: 'Haltung', opts: [['aggressive', 'Aggressiv'], ['balanced', 'Ausgewogen'], ['defensive', 'Defensiv']],
      help: { aggressive: '+15 % Angriff, −10 % Verteidigung, verfolgt Feinde weit.', balanced: 'Ausgewogenes Verhalten.', defensive: '+20 % Verteidigung, −10 % Angriff, bleibt eher in Position.' } },
    { key: 'skirmish', label: 'Ausweichen (Schützen)', only: 'archer', opts: [[true, 'An'], [false, 'Aus']],
      help: { true: 'Weicht anrückender Infanterie aus und schießt weiter.', false: 'Bleibt stehen und schießt, bis der Feind da ist.' } },
  ],
  retreat: [
    { key: 'retreatAt', label: 'Rückzug bei Stärke', opts: [[0, 'Nie'], [0.25, 'unter 25 %'], [0.5, 'unter 50 %']],
      help: { 0: 'Kämpft bis zum letzten Mann.', 0.25: 'Zieht sich bei schweren Verlusten zurück.', 0.5: 'Zieht sich früh zurück, um die Legion zu retten.' } },
    { key: 'retreatTo', label: 'Rückzug nach', opts: [['camp', 'Ins Lager'], ['ally', 'Zu Verbündeten']],
      help: { camp: 'Flieht zum eigenen Lager (bei Burgen: zum Burghof).', ally: 'Zieht sich hinter die nächste eigene Legion zurück.' } },
    { key: 'afterRetreat', label: 'Nach dem Sammeln', opts: [['hold', 'Stellung halten'], ['return', 'Erneut angreifen']],
      help: { hold: 'Sammelt sich und verteidigt die Position.', return: 'Sammelt sich und kehrt in den Kampf zurück.' } },
  ],
};

function openOrders(L) {
  const B = G.cur;
  $('#orders').classList.add('show');
  document.body.classList.add('orders-open');
  $('#oh-icon').innerHTML = unitIcon(L.typeId, 0);
  $('#oh-name').textContent = legionTitle(L);
  const T = UNIT_TYPES[L.typeId];
  $('#oh-sub').textContent = `${L.count}/${L.maxCount} Mann · ${T.desc[0]}`;
  for (const b of $$('#tabs button')) b.classList.toggle('on', b.dataset.tab === G.tab);
  renderTab(L);
  renderActions();
}
function closeOrders() {
  $('#orders').classList.remove('show');
  document.body.classList.remove('orders-open');
  renderActions();
}
function renderTab(L) {
  const B = G.cur;
  const ob = B.map.objective;
  const o = L.orders;
  const groups = ORD[G.tab].filter((g) => !g.only || g.only === L.typeId);
  $('#tab-body').innerHTML = groups.map((g) => {
    let opts = g.opts;
    if (g.key === 'target') {
      opts = opts.filter(([v]) => v !== 'objective' || ob).map(([v, n]) => [v, v === 'objective' ? (ob.type === 'keep' ? '🏰 Burghof' : '⛰ Steinkreis') : n]);
    }
    const cur = o[g.key];
    const chips = opts.map(([v, n]) => `<button class="chip ${String(cur) === String(v) ? 'on' : ''}" data-k="${g.key}" data-v="${v}">${n}</button>`).join('');
    let extra = '';
    if (g.key === 'target' && cur === 'legion') {
      const t = B.legions.find((x) => x.id === o.targetId && x.alive);
      extra = t ? ` Ziel: <b>${legionTitle(t)}</b>` : ' Noch kein Ziel gewählt.';
    }
    if (g.key === 'move' && cur === 'path') extra = ` ${o.waypoints.length}/4 Wegpunkte gesetzt.`;
    return `<div class="og"><label>${g.label}</label><div class="chips">${chips}</div><p>${g.help[String(cur)] || ''}${extra}</p></div>`;
  }).join('');
}

$('#tabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-tab]');
  if (!b || !G.selected) return;
  G.tab = b.dataset.tab;
  sound.play('click');
  openOrders(G.selected);
});
$('#oh-close').addEventListener('click', () => { closeOrders(); sound.play('click'); });

$('#tab-body').addEventListener('click', (e) => {
  const c = e.target.closest('[data-k]');
  const L = G.selected;
  if (!c || !L) return;
  const k = c.dataset.k;
  let v = c.dataset.v;
  if (k === 'delay' || k === 'retreatAt') v = +v;
  if (k === 'skirmish') v = v === 'true';
  L.orders[k] = v;
  sound.play('click');
  if (k === 'move' && v === 'path') {
    L.orders.waypoints = [];
    G.mode = 'waypoints';
    hint('Tippe bis zu 4 Wegpunkte auf die Karte');
  } else if (k === 'target' && v === 'legion') {
    G.mode = 'pickTarget';
    hint('Tippe auf eine feindliche Legion');
  } else if (G.mode) { G.mode = null; hint(''); }
  if (k === 'formation') L.formDirty = true;
  if (G.phase === 'battle' && G.mode !== 'waypoints') G.cur.battle.applyOrders(L);
  renderTab(L);
  renderActions();
  refreshRoutes();
});

$('#btn-copy').addEventListener('click', () => {
  const L = G.selected;
  if (!L) return;
  const keys = ORD[G.tab].map((g) => g.key).filter((k) => k !== 'move' && k !== 'target' && k !== 'skirmish');
  if (G.tab === 'attack') keys.push('target');
  for (const X of G.cur.player) {
    if (X === L || !X.alive) continue;
    for (const k of keys) {
      if (k === 'target' && (L.orders.target === 'legion')) { X.orders.target = 'legion'; X.orders.targetId = L.orders.targetId; continue; }
      X.orders[k] = L.orders[k];
    }
    if (G.tab === 'move') { X.orders.formation = X.typeId === 'cavalry' && L.orders.formation === 'line' ? 'wedge' : L.orders.formation; X.formDirty = true; }
    if (G.phase === 'battle') G.cur.battle.applyOrders(X);
  }
  sound.play('select');
  toast('Einstellungen für alle Legionen übernommen');
  refreshRoutes();
});

function finishWaypoints() {
  const L = G.selected;
  G.mode = null;
  hint('');
  if (L && !L.orders.waypoints.length) { L.orders.move = 'advance'; toast('Keine Wegpunkte – Legion rückt direkt vor'); }
  if (L && G.phase === 'battle') G.cur.battle.applyOrders(L);
  if (L) renderTab(L);
  renderActions();
  refreshRoutes();
}

function refreshRoutes() {
  const B = G.cur;
  if (!B) return;
  const ov = B.overlays;
  ov.clearRoutes();
  if (G.phase !== 'orders' && !(G.phase === 'battle' && G.selected)) return;
  const list = G.phase === 'orders' ? B.player : [G.selected];
  for (const L of list) {
    if (!L.alive || L.side !== 0) continue;
    const sel = L === G.selected;
    if (G.phase === 'orders') {
      const { pts, target } = B.battle.previewRoute(L);
      if (pts.length > 1) ov.addRoute(pts, sel ? 0xffd36a : 0x6aa2ff, !sel, sel ? 0.8 : 0.55);
      if (sel && target) ov.addMarker(target.x, target.z, 0xff5a4a, Math.max(target.halfW, target.halfD) + 1.6);
      if (L.orders.move === 'hold' && sel) ov.addMarker(L.x, L.z, 0x6aa2ff, B.battle.aggroRadius(L));
    } else {
      const pts = [[L.x, L.z], ...L.path];
      if (L.wp) for (let i = L.wpIdx; i < L.wp.length; i++) pts.push(L.wp[i]);
      if (pts.length > 1) ov.addRoute(pts, 0xffd36a, false, 0.7);
      const t = L.melee || L.target;
      if (t && t.alive) ov.addMarker(t.x, t.z, 0xff5a4a, Math.max(t.halfW, t.halfD) + 1.6);
    }
    if (sel && L.orders.move === 'path') L.orders.waypoints.forEach((w, i) => ov.addFlag(w[0], w[1], 0xffd36a));
  }
}

// =====================================================================
// Eingabe (Touch & Maus)
// =====================================================================
const ptrs = new Map();
let gest = null;
const canvas = $('#c');

function pickGround(x, y) {
  const B = G.cur;
  if (!B) return null;
  return stage.pick(x, y, [B.world.terrain]);
}
function legionAt(x, y) {
  const B = G.cur;
  const p = pickGround(x, y);
  if (!p) return null;
  let best = null, bd = 1e9;
  for (const L of B.legions) {
    if (!L.alive) continue;
    const d = Math.hypot(L.x - p.x, L.z - p.z);
    const r = Math.max(L.halfW, L.halfD) + 2.5;
    if (d < r && d < bd) { bd = d; best = L; }
  }
  return best;
}

function onPointerDown(e, hintL = null) {
  sound.unlock();
  if (G.phase === 'menu' || G.phase === 'setup' || G.phase === 'result' || G.phase === 'loading') return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) {
    const L = hintL || legionAt(e.clientX, e.clientY);
    gest = { type: 'tap', sx: e.clientX, sy: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), legion: L, button: e.button };
  } else if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()];
    gest = { type: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y), ang: Math.atan2(b.y - a.y, b.x - a.x), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  }
}
canvas.addEventListener('pointerdown', (e) => onPointerDown(e));
window.addEventListener('pointermove', (e) => {
  const p = ptrs.get(e.pointerId);
  if (!p || !gest) return;
  p.x = e.clientX; p.y = e.clientY;
  if (gest.type === 'pinch' && ptrs.size >= 2) {
    const [a, b] = [...ptrs.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    const ang = Math.atan2(b.y - a.y, b.x - a.x);
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    if (d > 10) stage.zoom(gest.d / d);
    let da = ang - gest.ang;
    if (da > Math.PI) da -= Math.PI * 2; if (da < -Math.PI) da += Math.PI * 2;
    stage.rotate(-da);
    const dmx = mx - gest.mx, dmy = my - gest.my;
    if (Math.abs(d - gest.d) < 4 && Math.abs(dmy) > Math.abs(dmx) * 1.5) stage.tilt(dmy * 0.004);
    else stage.pan(dmx, dmy);
    gest.d = d; gest.ang = ang; gest.mx = mx; gest.my = my;
    return;
  }
  const dx = e.clientX - gest.lx, dy = e.clientY - gest.ly;
  gest.lx = e.clientX; gest.ly = e.clientY;
  const moved = Math.hypot(e.clientX - gest.sx, e.clientY - gest.sy);
  if (gest.type === 'tap' && moved > 9) {
    const L = gest.legion;
    if (G.phase === 'deploy' && L && L.side === 0 && gest.button !== 2) { gest.type = 'drag'; select(L); }
    else gest.type = gest.button === 2 ? 'rotate' : 'pan';
  }
  if (gest.type === 'pan') stage.pan(dx, dy);
  else if (gest.type === 'rotate') { stage.rotate(-dx * 0.006); stage.tilt(dy * 0.004); }
  else if (gest.type === 'drag') dragLegion(gest.legion, e.clientX, e.clientY);
});
const endPtr = (e) => {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.delete(e.pointerId);
  if (!gest) return;
  if (gest.type === 'tap' && ptrs.size === 0 && performance.now() - gest.t < 450) handleTap(e.clientX, e.clientY, gest.legion);
  if (gest.type === 'drag') { sound.play('place'); }
  if (ptrs.size === 0) gest = null;
  else if (gest.type === 'pinch') gest = { type: 'none' };
};
window.addEventListener('pointerup', endPtr);
window.addEventListener('pointercancel', endPtr);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener('wheel', (e) => { e.preventDefault(); stage.zoom(e.deltaY > 0 ? 1.1 : 0.9); }, { passive: false });
window.addEventListener('keydown', (e) => {
  if (!G.cur) return;
  const k = e.key;
  if (k === 'ArrowLeft' || k === 'a') stage.pan(40, 0);
  if (k === 'ArrowRight' || k === 'd') stage.pan(-40, 0);
  if (k === 'ArrowUp' || k === 'w') stage.pan(0, 40);
  if (k === 'ArrowDown' || k === 's') stage.pan(0, -40);
  if (k === 'q') stage.rotate(0.15);
  if (k === 'e') stage.rotate(-0.15);
  if (k === ' ' && G.phase === 'battle') togglePause();
});

function dragLegion(L, x, y) {
  const B = G.cur;
  const p = pickGround(x, y);
  if (!p) return;
  const z = B.map.zones[0];
  const px = Math.max(z.x0 + 3, Math.min(z.x1 - 3, p.x));
  const pz = Math.max(z.z0 + 3, Math.min(z.z1 - 3, p.z));
  if (!B.map.isPassable(px, pz, 0) || B.map.clearanceAt(px, pz) < 2.5) return;
  L.x = px; L.z = pz;
}

function handleTap(x, y, L) {
  const B = G.cur;
  if (!B) return;
  if (G.mode === 'waypoints') {
    const S = G.selected;
    const p = pickGround(x, y);
    if (!S || !p) return;
    if (!B.map.isPassable(p.x, p.z, 0)) { toast('Dort ist kein Durchkommen'); return; }
    S.orders.waypoints.push([p.x, p.z]);
    sound.play('place');
    refreshRoutes();
    renderTab(S);
    if (S.orders.waypoints.length >= 4) finishWaypoints();
    return;
  }
  if (G.mode === 'pickTarget') {
    const S = G.selected;
    if (L && L.side === 1 && S) {
      S.orders.target = 'legion';
      S.orders.targetId = L.id;
      G.mode = null;
      hint('');
      sound.play('select');
      toast(`Ziel: ${legionTitle(L)}`);
      if (G.phase === 'battle') B.battle.applyOrders(S);
      renderTab(S); renderActions(); refreshRoutes();
    } else toast('Tippe auf eine feindliche (rote) Legion');
    return;
  }
  if (L) { sound.play('select'); select(L); }
  else if (G.selected) { select(null); if (G.phase === 'orders') refreshRoutes(); }
}

// =====================================================================
// HUD-Aktualisierung
// =====================================================================
function fmtTime(s) { s = Math.max(0, Math.ceil(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }

function updateHud() {
  const B = G.cur;
  if (!B || G.phase !== 'battle') { updateRoster(); return; }
  const bt = B.battle;
  const s0 = bt.strength(0), s1 = bt.strength(1);
  $('#str0').textContent = s0; $('#str1').textContent = s1;
  const tot = Math.max(1, s0 + s1);
  $('#sbar0').style.width = (s0 / tot * 100) + '%';
  $('#sbar1').style.width = (s1 / tot * 100) + '%';
  $('#hud-time').textContent = fmtTime(bt.timeLimit - bt.time);
  const ob = B.map.objective;
  const oe = $('#hud-obj');
  if (ob) {
    oe.classList.add('show');
    if (ob.type === 'keep') {
      const att = 1 - ob.owner;
      const col = att === 0 ? '#6aa2ff' : '#ff6a5a';
      oe.innerHTML = `🏰 Burghof ${att === 0 ? 'einnehmen' : 'verteidigen'} <span class="pbar"><i style="width:${ob.hold / ob.need * 100}%;background:${col}"></i></span> ${Math.floor(ob.hold)}/${ob.need} s`;
    } else {
      oe.innerHTML = `⛰ <b style="color:#8fb8ff">${Math.floor(ob.score[0])}</b> <span class="pbar"><i style="width:${ob.score[0]}%;background:#6aa2ff"></i></span><span class="pbar"><i style="width:${ob.score[1]}%;background:#ff6a5a;margin-left:auto"></i></span> <b style="color:#ff8f86">${Math.floor(ob.score[1])}</b> / 100`;
    }
  } else oe.classList.remove('show');
  updateRoster();
  if (G.selected && $('#orders').classList.contains('show')) {
    const L = G.selected;
    $('#oh-sub').textContent = L.alive ? `${L.count}/${L.maxCount} Mann · ${stateText(L)}` : 'Vernichtet';
  }
}
function stateText(L) {
  return { melee: 'im Nahkampf', shoot: 'schießt', retreat: 'zieht sich zurück', regroup: 'sammelt sich', wait: 'wartet auf Signal', hold: 'hält Stellung', move: 'marschiert', engage: 'rückt vor', kite: 'weicht aus', breach: 'berennt das Tor', idle: 'bereit', dead: 'vernichtet' }[L.state] || L.state;
}

function feed(text, side = -1) {
  const f = $('#feed');
  const d = document.createElement('div');
  d.className = side >= 0 ? 'p' + side : '';
  d.textContent = text;
  f.appendChild(d);
  while (f.children.length > 5) f.removeChild(f.firstChild);
  setTimeout(() => d.remove(), 6000);
}
let toastT = 0;
function toast(t) {
  const el = $('#toast');
  el.textContent = t;
  el.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 1900);
}
function hint(t) { $('#hint').textContent = t; }
function banner(t) {
  const d = document.createElement('div');
  d.className = 'big-banner';
  d.textContent = t;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 2300);
}

// =====================================================================
// Ereignisse der Simulation
// =====================================================================
function processEvents(B) {
  const bt = B.battle;
  const fx = B.units.fx;
  const demo = G.demo;
  const cam = stage.cam;
  const vol = (x, z) => Math.max(0.05, 1 - Math.hypot(x - cam.x, z - cam.z) / 110) * (demo ? 0.35 : 1) * Math.max(0.35, 1 - cam.dist / 220);
  for (const ev of bt.events) {
    const h = ev.x !== undefined ? B.map.getHeight(ev.x, ev.z) : 0;
    switch (ev.type) {
      case 'clash': fx.burst(ev.x, h + 1.3, ev.z, ev.soft ? 4 : 8); sound.play('clash', vol(ev.x, ev.z)); break;
      case 'impact': fx.burst(ev.x, h + 1.3, ev.z, 20, true); fx.puff(ev.x, h, ev.z, 8, 1.4); sound.play('impact', vol(ev.x, ev.z));
        if (!demo && ev.broken) feed('Die Piken brechen den Reiterangriff!');
        break;
      case 'volley': sound.play('volley', vol(ev.x, ev.z)); break;
      case 'arrowhit': sound.play('arrowhit', vol(ev.x, ev.z)); fx.puff(ev.x, h, ev.z, 2, 0.6); break;
      case 'death': sound.play('death', vol(ev.x, ev.z) * 0.8); break;
      case 'gatehit': fx.puff(ev.x, h + 1, ev.z, 3, 1); fx.burst(ev.x, h + 2.5, ev.z, 4); sound.play('gate', vol(ev.x, ev.z)); break;
      case 'gatebroken':
        fx.splinters(ev.x, B.map.castle.base, ev.z); fx.puff(ev.x, h, ev.z, 14, 2.2); sound.play('gatebroken', vol(ev.x, ev.z) + 0.3);
        if (!demo) { feed('Das Burgtor ist gefallen!'); banner('DAS TOR FÄLLT'); }
        break;
      case 'breach':
        if (!demo && !ev.legion.breachAnnounced) { ev.legion.breachAnnounced = true; feed(`${legionTitle(ev.legion)} berennt das Tor`, ev.legion.side); }
        break;
      case 'retreat':
        if (!demo) { feed(`${legionTitle(ev.legion)} zieht sich zurück`, ev.side); sound.play('retreat', 0.8); }
        break;
      case 'rally': if (!demo) feed(`${legionTitle(ev.legion)} hat sich gesammelt`, ev.legion.side); break;
      case 'legionlost':
        if (!demo) feed(`${legionTitle(ev.legion)} wurde vernichtet`, ev.side);
        if (G.selected === ev.legion) select(null);
        break;
      case 'horn': sound.play('horn', demo ? 0.3 : 1); break;
    }
  }
  bt.events.length = 0;
  // Staub bei Reiterei & im Gefecht
  B.dustT -= 1 / 60;
  if (B.dustT <= 0) {
    B.dustT = 0.12;
    for (const L of B.legions) {
      if (!L.alive) continue;
      const fast = L.typeId === 'cavalry' && L.speedCur > 2.5;
      if (fast || (L.state === 'melee' && Math.random() < 0.3)) {
        const s = L.soldiers[(Math.random() * L.soldiers.length) | 0];
        if (s && s.alive && B.map.biome !== 'winter') fx.puff(s.x, s.y, s.z, 1, fast ? 0.9 : 0.6);
      }
    }
  }
}

// =====================================================================
// Ende & Ergebnis
// =====================================================================
function finishBattle() {
  const B = G.cur;
  const bt = B.battle;
  const win = bt.winner === 0;
  G.phase = 'result';
  closeOrders();
  if (win) { stats.wins++; stats.streak++; stats.best = Math.max(stats.best, stats.streak); } else { stats.losses++; stats.streak = 0; }
  store.set('stats', stats);
  sound.play(win ? 'victory' : 'defeat');
  banner(win ? 'SIEG' : 'NIEDERLAGE');
  setTimeout(() => {
    if (G.cur !== B) return;
    const t = $('#res-title');
    t.textContent = win ? 'SIEG' : 'NIEDERLAGE';
    t.className = 'result-title ' + (win ? 'win' : 'lose');
    $('#res-reason').textContent = bt.reason;
    const col = (side) => {
      const ls = B.legions.filter((l) => l.side === side);
      return `<div class="rs-col p${side}"><h4>${FACTIONS[side].name}</h4>${ls.map((l) => `<div class="rs-line"><span>${legionTitle(l)}</span><span>${l.alive ? l.count + '/' + l.maxCount : '✝'} · ${l.kills} Siege</span></div>`).join('')}</div>`;
    };
    const mvp = B.player.slice().sort((a, b) => b.kills - a.kills)[0];
    $('#res-stats').innerHTML = col(0) + col(1) + `<div class="rs-sum"><div>Dauer<b>${fmtTime(bt.time)}</b></div><div>Eigene Verluste<b>${bt.lost[0]}</b></div><div>Feindliche Verluste<b>${bt.lost[1]}</b></div><div>Beste Legion<b>${mvp ? ROMAN[mvp.index] + '. ' + mvp.name : '–'}</b></div></div>`;
    showScreen('scr-result');
  }, 2200);
}

// =====================================================================
// Dialoge
// =====================================================================
function dialog(html, actions) {
  $('#dlg-body').innerHTML = html;
  const a = $('#dlg-actions');
  a.innerHTML = '';
  for (const [label, fn, primary] of actions) {
    const b = document.createElement('button');
    b.className = 'btn' + (primary ? ' primary' : '');
    b.textContent = label;
    b.onclick = () => { sound.play('click'); closeDialog(); fn && fn(); };
    a.appendChild(b);
  }
  $('#dlg').classList.add('show');
}
function closeDialog() { $('#dlg').classList.remove('show'); }
const dialogOpen = () => $('#dlg').classList.contains('show');

function showHelp() {
  dialog(`<h2>Anleitung</h2>
  <h4>Ablauf</h4>
  <ul><li><b>Vorbereitung:</b> Wähle Schlachtfeld und 1–5 Legionen.</li>
  <li><b>Aufstellung:</b> Ziehe deine Legionen innerhalb der blauen Zone an ihre Startposition. „⟳“ dreht die gewählte Legion.</li>
  <li><b>Befehle:</b> Lege für jede Legion Marschroute, Angriff und Rückzug fest. Die Routen werden auf der Karte angezeigt.</li>
  <li><b>Schlacht:</b> Die Legionen führen ihre Befehle aus. Mit ❚❚ pausierst du jederzeit und kannst Befehle ändern.</li></ul>
  <h4>Steuerung</h4>
  <ul><li>Ein Finger: Karte verschieben · Tippen: Legion wählen</li><li>Zwei Finger: Zoomen & Drehen · beide Finger hoch/runter: Neigen</li></ul>
  <h4>Taktik</h4>
  <ul><li><b>Pikeniere</b> brechen Reiterangriffe (×2,6 Schaden gegen Reiter).</li>
  <li><b>Reiterei</b> zerschlägt Bogenschützen und trifft mit Sturmangriff hart – am besten in Flanke oder Rücken.</li>
  <li><b>Bogenschützen</b> zermürben aus der Distanz, Wald und Mauern bieten dem Ziel Deckung.</li>
  <li><b>Prätorianer</b> trotzen Pfeilen und halten jede Stellung.</li>
  <li>Angriffe in die <b>Flanke</b> (+30 %) oder den <b>Rücken</b> (+60 %) entscheiden Schlachten. <b>Höhe</b> gibt +20 %.</li>
  <li>Furten verlangsamen und schwächen die Verteidigung. Burgtore müssen erst eingeschlagen werden.</li>
  <li>Ein rechtzeitiger <b>Rückzug</b> rettet Legionen – gesammelt kehren sie zurück.</li></ul>`, [['Verstanden', null, true]]);
}

function showSettings() {
  const q = settings.quality;
  dialog(`<h2>Einstellungen</h2>
    <div class="set-row"><span>Ton</span><div class="chips"><button class="chip ${settings.sound ? 'on' : ''}" data-set="sound" data-v="1">An</button><button class="chip ${!settings.sound ? 'on' : ''}" data-set="sound" data-v="0">Aus</button></div></div>
    <div class="set-row"><span>Grafik</span><div class="chips">${[['high', 'Hoch'], ['medium', 'Mittel'], ['low', 'Niedrig']].map(([k, n]) => `<button class="chip ${q === k ? 'on' : ''}" data-set="quality" data-v="${k}">${n}</button>`).join('')}</div></div>
    <div class="set-row"><span>Statistik</span><button class="btn small" data-set="reset">Zurücksetzen</button></div>
    <p style="color:var(--muted);font-size:11px">„Niedrig“ schaltet Schatten und Kantenglättung ab – für ältere Geräte.</p>`, [['Fertig', null, true]]);
  $('#dlg-body').onclick = (e) => {
    const b = e.target.closest('[data-set]');
    if (!b) return;
    sound.play('click');
    if (b.dataset.set === 'sound') { settings.sound = b.dataset.v === '1'; sound.setEnabled(settings.sound); }
    if (b.dataset.set === 'quality') {
      settings.quality = b.dataset.v;
      store.set('settings', settings);
      toast('Grafik wird neu geladen …');
      setTimeout(() => location.reload(), 500);
      return;
    }
    if (b.dataset.set === 'reset') { Object.assign(stats, { wins: 0, losses: 0, streak: 0, best: 0 }); store.set('stats', stats); toast('Statistik zurückgesetzt'); }
    store.set('settings', settings);
    showSettings();
  };
}

function showExitDialog() {
  const wasPaused = G.paused;
  if (G.phase === 'battle') { G.paused = true; setupHud(); }
  dialog(`<h2>Schlacht</h2><p>${SCENARIOS[G.cur.opts.scenario].name} · ${BIOMES[G.cur.opts.biome].name} · ${DIFFICULTY[G.cur.opts.diff].name}</p>`, [
    ['Weiter', () => { if (G.phase === 'battle') { G.paused = wasPaused; setupHud(); } }, true],
    ['Neu starten', () => enterDeploy({ ...G.last, seed: G.last.seed })],
    ['Aufgeben', () => { if (G.phase === 'battle') { stats.losses++; stats.streak = 0; store.set('stats', stats); } showMenu(); }],
  ]);
}

function togglePause() {
  G.paused = !G.paused;
  sound.play('click');
  setupHud();
}

// Menü-Buttons
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  sound.unlock();
  sound.play('click');
  switch (b.dataset.act) {
    case 'new': showSetup(); break;
    case 'quick': {
      const rng = mulberry32(Date.now() | 0);
      const n = rng.int(3, 4);
      const army = [];
      for (let i = 0; i < n; i++) army.push(rng.pick(['legion', 'legion', 'archer', 'cavalry', 'pike', 'guard']));
      startDeploy({ scenario: 'random', biome: 'random', diff: G.cfg.diff, army });
      break;
    }
    case 'help': showHelp(); break;
    case 'settings': showSettings(); break;
    case 'menu': showMenu(); break;
    case 'deploy': startDeploy(G.cfg); break;
    case 'rematch': enterDeploy({ ...G.last }); break;
  }
});
$('#btn-exit').addEventListener('click', () => { sound.play('click'); showExitDialog(); });
$('#btn-pause').addEventListener('click', togglePause);
$('#btn-sound').addEventListener('click', () => {
  settings.sound = !settings.sound;
  sound.setEnabled(settings.sound);
  store.set('settings', settings);
  setupHud();
});
for (const b of $$('[data-speed]')) b.addEventListener('click', () => { G.speed = +b.dataset.speed; if (G.paused) G.paused = false; sound.play('click'); setupHud(); });

// Android-Integration
window.onAndroidBack = () => {
  if (dialogOpen()) { closeDialog(); return true; }
  if (G.mode) { G.mode = null; hint(''); renderActions(); return true; }
  if ($('#orders').classList.contains('show')) { closeOrders(); return true; }
  if (G.phase === 'deploy' || G.phase === 'orders' || G.phase === 'battle') { showExitDialog(); return true; }
  if (G.phase === 'setup' || G.phase === 'result') { showMenu(); return true; }
  return false;
};
window.onAndroidPause = () => {
  if (G.phase === 'battle' && !G.paused) { G.paused = true; setupHud(); }
  sound.suspend();
};
document.addEventListener('visibilitychange', () => {
  if (document.hidden) window.onAndroidPause();
  else sound.resume();
});

// =====================================================================
// Hauptschleife
// =====================================================================
let last = performance.now();
let simAcc = 0;
let hudT = 0;
let routeT = 0;
let clock = 0;
const STEP = 1 / 30;

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
  last = now;
  clock += dt;
  const B = G.cur;
  if (B) {
    const bt = B.battle;
    const running = (G.phase === 'battle' && !G.paused) || (G.demo && (G.phase === 'menu' || G.phase === 'setup'));
    if (running && !bt.over) {
      simAcc += dt * G.speed;
      let n = 0;
      while (simAcc >= STEP && n < 10) {
        bt.step(STEP);
        B.brain.update(STEP);
        if (B.brain0) B.brain0.update(STEP);
        simAcc -= STEP;
        n++;
      }
      if (n >= 10) simAcc = 0;
      processEvents(B);
    } else if (G.phase === 'deploy' || G.phase === 'orders') {
      for (const L of B.legions) {
        if (L.formDirty) L.layout();
        bt.updateSoldiers(L, dt);
      }
    } else if (G.phase === 'result' || (G.phase === 'battle' && G.paused)) {
      // stillstehend
    }
    if (G.demo && bt.over && !B.restartAt) B.restartAt = clock + 4;
    if (G.demo && B.restartAt && clock > B.restartAt && (G.phase === 'menu' || G.phase === 'setup')) startDemo();
    if (!G.demo && G.phase === 'battle' && bt.over) finishBattle();
    B.units.fx.simTime = bt.time;
    B.units.fx.battleArrows = bt.arrows;
    B.units.update(clock, dt, G.selected, null);
    animateWorld(B.world, clock, dt, B.map);
    B.overlays.updateObjective(clock);
    updateLabels(B);
    hudT -= dt;
    if (hudT <= 0) { hudT = 0.2; updateHud(); }
    routeT -= dt;
    if (G.phase === 'battle' && G.selected && routeT <= 0) { routeT = 0.5; refreshRoutes(); }
    else if (G.phase === 'battle' && !G.selected && routeT <= 0) { routeT = 0.5; B.overlays.clearRoutes(); }
  }
  if (G.phase === 'menu' || G.phase === 'setup') stage.cam.tyaw += dt * 0.035;
  stage.updateCamera(dt);
  stage.render();
}

// Start
function boot() {
  try {
    showMenu();
    $('#loading').classList.remove('show');
    requestAnimationFrame(frame);
  } catch (err) {
    $('#loading').innerHTML = `<div style="padding:20px;color:#fff">Fehler beim Start: ${err.message}</div>`;
    throw err;
  }
}
window.__G = G;
window.__stage = stage;
setTimeout(boot, 30);
