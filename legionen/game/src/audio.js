// Synthetisierte Klänge über WebAudio (keine Audiodateien nötig)
export class Sound {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.last = {};
  }
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.55;
      this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate * 1.5;
      this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.startAmbience();
    } catch (e) { this.ctx = null; }
  }
  setEnabled(v) {
    this.enabled = v;
    if (this.master) this.master.gain.value = v ? 0.55 : 0;
  }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  throttle(key, ms) {
    const now = performance.now();
    if (this.last[key] && now - this.last[key] < ms) return false;
    this.last[key] = now;
    return true;
  }
  noise(dur, freq, q, gain, type = 'bandpass', when = 0) {
    const c = this.ctx;
    const t = c.currentTime + when;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t, Math.random() * 1.0, dur + 0.05);
    return f;
  }
  tone(freq, dur, type, gain, when = 0, slide = 0) {
    const c = this.ctx;
    const t = c.currentTime + when;
    const o = c.createOscillator();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.05);
  }
  play(name, vol = 1) {
    if (!this.ctx || !this.enabled) return;
    switch (name) {
      case 'click':
        this.tone(880, 0.06, 'triangle', 0.08 * vol); break;
      case 'select':
        this.tone(520, 0.07, 'triangle', 0.08 * vol); this.tone(780, 0.08, 'triangle', 0.06 * vol, 0.05); break;
      case 'place':
        this.noise(0.12, 300, 1, 0.25 * vol, 'lowpass'); break;
      case 'clash':
        if (!this.throttle('clash', 70)) return;
        this.noise(0.09, 3200 + Math.random() * 2000, 8, 0.18 * vol);
        this.tone(1800 + Math.random() * 900, 0.14, 'square', 0.015 * vol);
        break;
      case 'impact':
        this.noise(0.5, 180, 0.8, 0.6 * vol, 'lowpass');
        this.noise(0.25, 2500, 3, 0.25 * vol);
        break;
      case 'volley':
        if (!this.throttle('volley', 200)) return;
        this.noise(0.5, 1800, 2, 0.12 * vol, 'bandpass');
        break;
      case 'arrowhit':
        if (!this.throttle('ahit', 120)) return;
        for (let i = 0; i < 4; i++) this.noise(0.05, 900 + Math.random() * 600, 4, 0.08 * vol, 'bandpass', i * 0.04 + Math.random() * 0.05);
        break;
      case 'death':
        if (!this.throttle('death', 160)) return;
        this.noise(0.18, 260, 1.5, 0.1 * vol, 'lowpass');
        break;
      case 'gate':
        if (!this.throttle('gate', 250)) return;
        this.noise(0.35, 140, 1, 0.5 * vol, 'lowpass'); this.tone(70, 0.3, 'sine', 0.3 * vol, 0, 0.6); break;
      case 'gatebroken':
        this.noise(1.4, 200, 0.7, 0.8 * vol, 'lowpass'); this.noise(0.8, 900, 1, 0.3 * vol, 'bandpass', 0.1); break;
      case 'horn': {
        const base = 146.8;
        this.tone(base, 1.6, 'sawtooth', 0.09 * vol, 0, 1.0);
        this.tone(base * 1.5, 1.2, 'sawtooth', 0.05 * vol, 0.35);
        this.tone(base * 2, 0.9, 'sawtooth', 0.04 * vol, 0.9);
        break;
      }
      case 'retreat':
        this.tone(330, 0.3, 'sawtooth', 0.05 * vol); this.tone(262, 0.5, 'sawtooth', 0.05 * vol, 0.28); break;
      case 'victory': {
        const n = [392, 523, 659, 784, 659, 784, 1046];
        n.forEach((f, i) => this.tone(f, i === n.length - 1 ? 1.2 : 0.22, 'triangle', 0.12 * vol, i * 0.16));
        n.forEach((f, i) => this.tone(f / 2, i === n.length - 1 ? 1.2 : 0.22, 'sawtooth', 0.03 * vol, i * 0.16));
        break;
      }
      case 'defeat': {
        const n = [392, 349, 311, 262];
        n.forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.1 * vol, i * 0.35));
        this.tone(131, 1.8, 'sawtooth', 0.04 * vol, 0.9);
        break;
      }
      case 'drum':
        this.tone(90, 0.25, 'sine', 0.35 * vol, 0, 0.5);
        this.noise(0.08, 400, 1, 0.15 * vol, 'lowpass');
        break;
    }
  }
  startAmbience() {
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf; src.loop = true;
    const f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 420;
    const g = c.createGain(); g.gain.value = 0.035;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.08;
    const lg = c.createGain(); lg.gain.value = 180;
    lfo.connect(lg); lg.connect(f.frequency);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(); lfo.start();
    this.amb = g;
  }
}
