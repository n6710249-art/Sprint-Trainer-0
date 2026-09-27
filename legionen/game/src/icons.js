// Inline-SVG-Icons für Truppen und Szenarien
const wrap = (inner, vb = '0 0 48 48') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export function unitIcon(type, side = 0) {
  const c = side === 0 ? '#4a8cf0' : '#e0473c';
  const d = side === 0 ? '#1f4c9a' : '#8e1f1a';
  const g = side === 0 ? '#e3b441' : '#cfd3da';
  const bg = `<circle cx="24" cy="24" r="22" fill="${d}" opacity=".55"/><circle cx="24" cy="24" r="22" fill="none" stroke="${c}" stroke-width="2"/>`;
  switch (type) {
    case 'legion':
      return wrap(`${bg}<rect x="11" y="13" width="15" height="22" rx="3" fill="${c}" stroke="${g}" stroke-width="1.6"/><circle cx="18.5" cy="24" r="2.4" fill="${g}"/>
        <path d="M28 33 L37 12 L39 13 L31 34 Z" fill="#e8edf5"/><path d="M26.5 31 L33.5 34.5" stroke="${g}" stroke-width="2.6" stroke-linecap="round"/>`);
    case 'pike':
      return wrap(`${bg}<path d="M13 38 L35 9" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M35 9 L38 5 L37.5 11.5 Z" fill="#e8edf5"/>
        <path d="M20 38 L38 15" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M38 15 L41 11 L40.5 17.5 Z" fill="#e8edf5"/>
        <circle cx="16" cy="28" r="6" fill="${c}" stroke="${g}" stroke-width="1.6"/>`);
    case 'archer':
      return wrap(`${bg}<path d="M16 9 Q34 24 16 39" fill="none" stroke="#caa06a" stroke-width="2.8" stroke-linecap="round"/><path d="M16 9 L16 39" stroke="#f0ead8" stroke-width="1"/>
        <path d="M13 24 L37 24" stroke="#e8edf5" stroke-width="1.8"/><path d="M37 24 L32 21 L32 27 Z" fill="#e8edf5"/><path d="M13 24 L10 21 M13 24 L10 27" stroke="${g}" stroke-width="1.6"/>`);
    case 'cavalry':
      return wrap(`${bg}<path d="M14 38 L16 27 Q15 18 22 13 L25 8 L27 13 Q34 14 36 22 L34 25 L29 22 L27 26 Q30 31 28 38 Z" fill="${c}" stroke="${g}" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="29" cy="17" r="1.4" fill="${g}"/><path d="M22 13 Q17 19 18 27" stroke="${g}" stroke-width="2" fill="none"/>`);
    case 'guard':
      return wrap(`${bg}<rect x="13" y="9" width="22" height="30" rx="3" fill="${c}" stroke="${g}" stroke-width="2"/><path d="M24 11 L24 37 M15 24 L33 24" stroke="${g}" stroke-width="1.8"/>
        <circle cx="24" cy="24" r="3.4" fill="${g}"/>`);
  }
  return '';
}

export function scenIcon(id) {
  const s = 'stroke="#f5d27a" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"';
  switch (id) {
    case 'random':
      return wrap(`<rect x="9" y="9" width="30" height="30" rx="6" ${s}/><circle cx="17" cy="17" r="2.4" fill="#f5d27a"/><circle cx="31" cy="31" r="2.4" fill="#f5d27a"/><circle cx="24" cy="24" r="2.4" fill="#f5d27a"/><circle cx="31" cy="17" r="2.4" fill="#f5d27a"/><circle cx="17" cy="31" r="2.4" fill="#f5d27a"/>`);
    case 'assault':
      return wrap(`<path d="M8 40 L8 18 L12 18 L12 14 L16 14 L16 18 L20 18 L20 14 L24 14 L24 18 L28 18 L28 14 L32 14 L32 18 L36 18 L36 14 L40 14 L40 40 Z" ${s}/><path d="M20 40 L20 30 Q24 25 28 30 L28 40" ${s}/><path d="M34 6 L42 12 M42 6 L34 12" stroke="#e0473c" stroke-width="2.4" stroke-linecap="round"/>`);
    case 'defend':
      return wrap(`<path d="M24 6 L39 11 L37 28 Q33 37 24 42 Q15 37 11 28 L9 11 Z" ${s}/><path d="M17 24 L22 29 L31 18" stroke="#4a8cf0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);
    case 'canyon':
      return wrap(`<path d="M4 14 L14 14 L18 22 L16 40 L4 40 Z" ${s}/><path d="M44 12 L32 12 L29 22 L32 40 L44 40 Z" ${s}/><path d="M21 40 Q24 30 22 22 Q25 17 27 14" stroke="#caa06a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`);
    case 'river':
      return wrap(`<path d="M6 16 Q12 12 18 16 T30 16 T42 16" ${s}/><path d="M6 24 Q12 20 18 24 T30 24 T42 24" stroke="#6ab4f0" stroke-width="2" fill="none"/><path d="M6 32 Q12 28 18 32 T30 32 T42 32" ${s}/><path d="M16 38 Q24 30 32 38" stroke="#caa06a" stroke-width="2.4" fill="none"/>`);
    case 'hill':
      return wrap(`<path d="M4 40 Q24 8 44 40 Z" ${s}/><rect x="18" y="18" width="3" height="7" fill="#f5d27a"/><rect x="23" y="16" width="3" height="8" fill="#f5d27a"/><rect x="28" y="18" width="3" height="7" fill="#f5d27a"/>`);
    case 'forest':
      return wrap(`<path d="M14 40 L14 34 M14 34 L6 34 L14 20 L22 34 Z M9 26 L14 14 L19 26" ${s}/><path d="M32 40 L32 32 M32 32 L22 32 L32 12 L42 32 Z M26 22 L32 8 L38 22" ${s}/>`);
  }
  return '';
}

export const STATE_GLYPH = {
  melee: '⚔', shoot: '➶', retreat: '↩', regroup: '⛺', wait: '⏳', hold: '⛨', move: '➜', engage: '➜', kite: '↶', breach: '⚒', idle: '·', dead: '✝',
};
export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
