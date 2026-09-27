// Spieldaten: Truppentypen, Fraktionen, Szenarien, Biome

export const UNIT_TYPES = {
  legion: {
    id: 'legion', value: 1.0, size: 32, cols: 8, spacing: 1.25,
    hp: 10, atk: 3.2, def: 3.0, speed: 2.7, range: 0,
    names: ['Legionäre', 'Plünderer'],
    desc: ['Schwert & Scutum. Der verlässliche Kern jeder Armee.', 'Axt & Rundschild. Wild und zäh.'],
    stats: { Angriff: 3, Abwehr: 3, Tempo: 3, 'Reichw.': 1 },
  },
  pike: {
    id: 'pike', value: 0.9, size: 36, cols: 9, spacing: 1.2,
    hp: 10, atk: 2.6, def: 2.8, speed: 2.25, range: 0, vsCav: 2.6,
    names: ['Pikeniere', 'Speermänner'],
    desc: ['Lange Piken. Brechen jeden Reiterangriff.', 'Speerwall gegen Reiter.'],
    stats: { Angriff: 2, Abwehr: 3, Tempo: 2, 'Reichw.': 2 },
  },
  archer: {
    id: 'archer', value: 0.75, size: 24, cols: 8, spacing: 1.35,
    hp: 8, atk: 1.4, def: 1.2, speed: 2.8, range: 36, volley: 2.9, arrowDmg: 3.6,
    names: ['Bogenschützen', 'Jäger'],
    desc: ['Pfeilhagel auf große Distanz. Schwach im Nahkampf.', 'Tödliche Schützen aus dem Hinterhalt.'],
    stats: { Angriff: 3, Abwehr: 1, Tempo: 3, 'Reichw.': 5 },
  },
  cavalry: {
    id: 'cavalry', value: 1.25, size: 20, cols: 5, spacing: 1.9,
    hp: 16, atk: 3.5, def: 2.4, speed: 5.4, range: 0, charge: 2.3,
    names: ['Reiterei', 'Wolfsreiter'],
    desc: ['Schnell und wuchtig. Sturmangriff in Flanke und Rücken.', 'Schnelle Reiter für Überfälle.'],
    stats: { Angriff: 4, Abwehr: 2, Tempo: 5, 'Reichw.': 1 },
  },
  guard: {
    id: 'guard', value: 1.3, size: 24, cols: 6, spacing: 1.3,
    hp: 14, atk: 3.3, def: 5.0, speed: 2.1, range: 0, arrowResist: 0.45,
    names: ['Prätorianer', 'Eisenwache'],
    desc: ['Elite mit Turmschilden. Hält jede Stellung, trotzt Pfeilen.', 'Schwer gepanzerte Elite.'],
    stats: { Angriff: 4, Abwehr: 5, Tempo: 1, 'Reichw.': 1 },
  },
};
export const TYPE_ORDER = ['legion', 'pike', 'archer', 'cavalry', 'guard'];

// Fraktionsfarben (Rollen → Farben)
export const FACTIONS = [
  {
    id: 0, name: 'Löwenlegion', short: 'Du',
    ui: '#4a8cf0', uiDark: '#1f4c9a',
    colors: {
      primary: 0x2f63c4, secondary: 0xe3b441, metal: 0xc9ced6, helm: 0xd9a93a,
      crest: 0xc4302b, skin: 0xe2b18c, dark: 0x4a3524, wood: 0x8a5a32, cloth: 0xefe6d2,
      horse: 0x7a4b2a, mane: 0x2a1c12, banner: 0x2f63c4, hood: 0x3f6a45,
    },
  },
  {
    id: 1, name: 'Rabenclan', short: 'Bot',
    ui: '#e0473c', uiDark: '#8e1f1a',
    colors: {
      primary: 0xa3231c, secondary: 0x2b2b30, metal: 0x6f737c, helm: 0x55585f,
      crest: 0xe8e0cc, skin: 0xd8a27c, dark: 0x2a2320, wood: 0x5d3d22, cloth: 0x3a3a40,
      horse: 0x3b3431, mane: 0x151212, banner: 0xa3231c, hood: 0x2b2b30,
    },
  },
];

export const BIOMES = {
  summer: {
    name: 'Sommer', sky: [0x8ec5f0, 0xe8f4ff], fog: 0xcfe6f5,
    grass: [0x6fae4f, 0x7dbb58, 0x5f9e45, 0x88c262], dirt: 0xb08a5a, sand: 0xd8c48c,
    rock: [0x8d8a86, 0x9b9892, 0x7c7975], cliff: [0x9a8a78, 0x8a7a68], water: 0x3d8ec9,
    leaf: [0x3f8a3a, 0x4f9a40, 0x5aa84a, 0x387a34], pine: [0x2f6b3a, 0x2a5f35], trunk: 0x6b4a2e,
    flower: [0xf2e14c, 0xf07aa8, 0xffffff, 0xb07af0], sun: 0xfff1d6, hemi: [0xdff0ff, 0x6a8a4a],
  },
  autumn: {
    name: 'Herbst', sky: [0xe8b98a, 0xfbe8d0], fog: 0xefd9bf,
    grass: [0x9aa04c, 0xa9a857, 0x8b9244, 0xb4a85a], dirt: 0xa27a4e, sand: 0xd1b884,
    rock: [0x8d857e, 0x9a9189, 0x7a736c], cliff: [0x9c7f66, 0x8a6f58], water: 0x4a86a8,
    leaf: [0xd9772a, 0xe39a32, 0xc4502a, 0xe8c14a], pine: [0x3d6340, 0x355a38], trunk: 0x5e3f28,
    flower: [0xe8c14a, 0xd9772a, 0xffffff, 0xc4502a], sun: 0xffe0b8, hemi: [0xffe8d0, 0x7a6a3a],
  },
  winter: {
    name: 'Winter', sky: [0xb9cde0, 0xeef4fa], fog: 0xdfe8f0,
    grass: [0xeef3f7, 0xe3eaf0, 0xf7fafc, 0xd9e3eb], dirt: 0x9b9084, sand: 0xcfd6dc,
    rock: [0x8e969e, 0x9ea6ae, 0x7e868e], cliff: [0x8a929c, 0x7a828c], water: 0x5d8fb3,
    leaf: [0xdfe9f0, 0xcfdde8, 0xe8f0f5, 0xbfd0dd], pine: [0x2e5a4a, 0x2a5044], trunk: 0x5a4636,
    flower: [0xffffff, 0xdfe9f0, 0xcfe0ee, 0xffffff], sun: 0xf4f8ff, hemi: [0xf0f6ff, 0x8a96a2],
  },
  desert: {
    name: 'Wüste', sky: [0xf0c98a, 0xfff2da], fog: 0xf4e2c2,
    grass: [0xe0c080, 0xd8b673, 0xe8ca8c, 0xcfae6c], dirt: 0xb98a55, sand: 0xecd49c,
    rock: [0xb88660, 0xc4946a, 0xa87756], cliff: [0xc07a4c, 0xa8663e, 0xd08e5c], water: 0x3fa3b8,
    leaf: [0x6f9a3a, 0x7fa845, 0x5f8a32, 0x8aa84a], pine: [0x5f8a32, 0x4f7a2a], trunk: 0x8a6a42,
    flower: [0xe8a04c, 0xd06a3a, 0xffffff, 0xe8c86a], sun: 0xfff0d0, hemi: [0xfff0dc, 0xa07a4a],
  },
};

export const SCENARIOS = {
  assault: {
    name: 'Burg einnehmen', icon: 'castle',
    desc: 'Die feindliche Burg muss fallen. Brich das Tor und halte den Burghof.',
    goal: 'Halte den Burghof 20 s lang oder vernichte den Feind. Zeitlimit 6:00.',
    time: 360,
  },
  defend: {
    name: 'Burg verteidigen', icon: 'shield',
    desc: 'Der Rabenclan stürmt eure Mauern. Haltet bis zum Morgengrauen.',
    goal: 'Überlebe 5:00 oder vernichte die Angreifer. Der Burghof darf nicht fallen.',
    time: 300,
  },
  canyon: {
    name: 'Canyon-Pass', icon: 'canyon',
    desc: 'Enge Schluchten, steile Felsen. Wer den Pass kontrolliert, gewinnt.',
    goal: 'Vernichte oder vertreibe alle feindlichen Legionen.',
    time: 420,
  },
  river: {
    name: 'Flussfurt', icon: 'river',
    desc: 'Ein Fluss trennt die Heere. Brücke und Furten sind der Schlüssel.',
    goal: 'Vernichte oder vertreibe alle feindlichen Legionen.',
    time: 420,
  },
  hill: {
    name: 'Königshügel', icon: 'hill',
    desc: 'Der alte Steinkreis auf dem Hügel. Wer ihn hält, beherrscht das Land.',
    goal: 'Halte den Steinkreis bis 100 Punkte – oder vernichte den Feind.',
    time: 420,
  },
  forest: {
    name: 'Nebelwald', icon: 'forest',
    desc: 'Dichter Wald bietet Deckung vor Pfeilen – und Raum für Hinterhalte.',
    goal: 'Vernichte oder vertreibe alle feindlichen Legionen.',
    time: 420,
  },
};
export const SCENARIO_ORDER = ['assault', 'defend', 'canyon', 'river', 'hill', 'forest'];

export const DIFFICULTY = {
  easy: { name: 'Leicht', size: 0.85, think: 3.5, smart: 0.35 },
  normal: { name: 'Normal', size: 1.0, think: 2.0, smart: 0.7 },
  hard: { name: 'Schwer', size: 1.15, think: 1.0, smart: 1.0 },
};

// Standard-Befehle für eine Legion
export function defaultOrders(type) {
  return {
    move: 'advance', // advance | hold | flankL | flankR | path
    waypoints: [],
    target: type === 'cavalry' ? 'ranged' : 'nearest', // nearest | weakest | ranged | strongest | legion | objective
    targetId: -1,
    stance: 'balanced', // aggressive | balanced | defensive
    formation: type === 'cavalry' ? 'wedge' : 'line', // line | block | wedge
    delay: type === 'cavalry' ? 5 : 0,
    skirmish: type === 'archer', // Fernkämpfer weichen Nahkämpfern aus
    retreatAt: 0.25, // 0 | 0.25 | 0.5
    retreatTo: 'camp', // camp | ally
    afterRetreat: 'hold', // hold | return
  };
}
