(() => {
  'use strict';

  const TAU = Math.PI * 2;
  const MAX_BEADS = 48;
  const BEAD_SPACING = 4;
  const TRAIL_MAX = 420;
  const hasYt = typeof ytgame !== 'undefined';
  const inPlayables = !!(hasYt && ytgame.IN_PLAYABLES_ENV);

  const PALETTE = [
    { shape: 'circle', color: '#35d7ff', deep: '#0b6a94' },
    { shape: 'diamond', color: '#ff7bd5', deep: '#8f2a6b' },
    { shape: 'triangle', color: '#ffc857', deep: '#8a5a00' },
    { shape: 'square', color: '#8affc1', deep: '#1f7a4a' },
    { shape: 'star', color: '#b48bff', deep: '#5a32a8' }
  ];
  const RAINBOW = ['#ff5d6c', '#ffc857', '#8affc1', '#35d7ff', '#b48bff'];
  const DEMO_TAIL = [0, 1, 2, 3, 4, 2, 0, 4, 1, 3, 2, 0];

  const flags = { firstFrame: false, gameReady: false };
  const els = {};
  let save = null;
  let lastFocused = null;
  let systemFocus = null;
  let announceToken = 0;

  const state = {
    scene: 'loading',
    score: 0,
    best: 0,
    shields: 3,
    maxShields: 3,
    combo: 0,
    streakShape: -1,
    streakCount: 0,
    beadsCollected: 0,
    time: 0,
    speed: 0,
    lastTs: 0,
    rafId: 0,
    running: false,
    systemPaused: false,
    userPaused: false,
    saveReady: false,
    audioEnabled: true,
    audioCtx: null,
    invuln: 0,
    shake: 0,
    flash: 0,
    newBest: false,
    reducedMotion: false,
    w: 0,
    h: 0,
    dpr: 1,
    minDim: 0,
    player: { x: 0, y: 0, px: 0, py: 0, r: 14 },
    target: { x: 0, y: 0 },
    dragging: false,
    keys: new Set(),
    trail: [],
    beads: [],
    motes: [],
    hazards: [],
    particles: [],
    rings: [],
    stars: [],
    moteTimer: 0,
    hazardTimer: 2.2
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function rgba(hex, alpha) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
  }

  function cacheEls() {
    const ids = {
      app: 'app',
      canvas: 'game-canvas',
      hud: 'hud',
      hudScore: 'hud-score',
      hudShields: 'hud-shields',
      hudBeads: 'hud-beads',
      hudCombo: 'hud-combo',
      loading: 'loading',
      menu: 'menu',
      menuPreview: 'menu-preview',
      menuBest: 'menu-best',
      btnPlay: 'btn-play',
      btnHowto: 'btn-howto',
      howto: 'howto',
      btnHowtoPlay: 'btn-howto-play',
      btnHowtoClose: 'btn-howto-close',
      tutorial: 'tutorial',
      btnTutorialStart: 'btn-tutorial-start',
      pause: 'pause',
      btnResume: 'btn-resume',
      btnRestart: 'btn-restart',
      btnPauseMenu: 'btn-pause-menu',
      syspause: 'syspause',
      gameover: 'gameover',
      goTitle: 'go-title',
      goMsg: 'go-msg',
      goScore: 'go-score',
      goBest: 'go-best',
      goBeads: 'go-beads',
      tailPreview: 'tail-preview',
      btnAgain: 'btn-again',
      btnMenu: 'btn-menu',
      live: 'live'
    };
    Object.keys(ids).forEach((key) => {
      els[key] = document.getElementById(ids[key]);
    });
  }

  function logError() {
    if (!inPlayables) return;
    try {
      ytgame.health.logError();
    } catch (error) {
      return;
    }
  }

  function firstFrameReady() {
    if (flags.firstFrame) return;
    flags.firstFrame = true;
    if (!inPlayables) return;
    try {
      ytgame.game.firstFrameReady();
    } catch (error) {
      logError();
    }
  }

  function gameReady() {
    if (flags.gameReady) return;
    flags.gameReady = true;
    if (!inPlayables) return;
    try {
      ytgame.game.gameReady();
    } catch (error) {
      logError();
    }
  }

  function defaultSave() {
    return { v: 1, best: 0, tutorialSeen: false, games: 0, totalBeads: 0, lastTail: [], lastScore: 0 };
  }

  function toCount(value) {
    return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.floor(value) : undefined;
  }

  function normalizeTail(raw) {
    if (!Array.isArray(raw)) return [];
    const out = [];
    for (let i = 0; i < raw.length; i += 1) {
      const item = raw[i];
      if (typeof item !== 'number' || !Number.isFinite(item)) continue;
      const n = Math.floor(item);
      if (n === -1) {
        out.push(-1);
      } else if (n >= 0 && n < PALETTE.length) {
        out.push(n);
      }
      if (out.length >= MAX_BEADS) break;
    }
    return out;
  }

  function normalizeSave(raw) {
    const next = defaultSave();
    if (!raw || typeof raw !== 'object') return next;
    const best = toCount(raw.best);
    if (best !== undefined) {
      next.best = best;
    } else if (toCount(raw.highScore) !== undefined) {
      next.best = toCount(raw.highScore);
    } else if (toCount(raw.high_score) !== undefined) {
      next.best = toCount(raw.high_score);
    }
    const games = toCount(raw.games);
    if (games !== undefined) {
      next.games = games;
    } else if (toCount(raw.gamesPlayed) !== undefined) {
      next.games = toCount(raw.gamesPlayed);
    }
    const totalBeads = toCount(raw.totalBeads);
    if (totalBeads !== undefined) {
      next.totalBeads = totalBeads;
    } else if (toCount(raw.beads) !== undefined) {
      next.totalBeads = toCount(raw.beads);
    }
    const lastScore = toCount(raw.lastScore);
    if (lastScore !== undefined) next.lastScore = lastScore;
    if (typeof raw.tutorialSeen === 'boolean') {
      next.tutorialSeen = raw.tutorialSeen;
    } else if (raw.tutorialSeen === 1) {
      next.tutorialSeen = true;
    }
    next.lastTail = normalizeTail(raw.lastTail);
    return next;
  }

  async function loadSave() {
    let raw = null;
    if (inPlayables) {
      try {
        const text = await ytgame.game.loadData();
        if (text) {
          try {
            raw = JSON.parse(text);
          } catch (error) {
            logError();
          }
        }
      } catch (error) {
        logError();
      }
    }
    save = normalizeSave(raw);
    state.best = save.best;
    state.saveReady = true;
  }

  function persist() {
    if (!state.saveReady || !save) return Promise.resolve();
    if (!inPlayables) return Promise.resolve();
    try {
      return Promise.resolve(ytgame.game.saveData(JSON.stringify(save))).catch(() => {
        logError();
      });
    } catch (error) {
      logError();
      return Promise.resolve();
    }
  }

  function sendScore(value) {
    if (!inPlayables) return;
    try {
      const safe = Math.max(0, Math.min(Math.floor(value), Number.MAX_SAFE_INTEGER));
      ytgame.engagement.sendScore({ value: safe }).catch(() => {
        logError();
      });
    } catch (error) {
      logError();
    }
  }

  function ensureAudioCtx() {
    if (state.audioCtx) return state.audioCtx;
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return null;
    try {
      state.audioCtx = new AudioCtor();
    } catch (error) {
      state.audioCtx = null;
    }
    return state.audioCtx;
  }

  function tone(freq, to, dur, type, gain, delay) {
    if (!state.audioEnabled) return;
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const start = ctx.currentTime + (delay || 0);
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), start);
    if (to !== freq) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + dur);
    }
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + 0.008);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(amp).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + dur + 0.03);
  }

  function playSound(kind, combo) {
    if (!state.audioEnabled) return;
    if (kind === 'pickup') {
      const base = 540 + Math.min(combo || 0, 24) * 14;
      tone(base, base * 1.3, 0.09, 'sine', 0.045, 0);
    } else if (kind === 'prism') {
      tone(659, 659, 0.09, 'triangle', 0.05, 0);
      tone(784, 784, 0.09, 'triangle', 0.05, 0.07);
      tone(1047, 1047, 0.16, 'triangle', 0.05, 0.14);
    } else if (kind === 'rainbow') {
      [523, 659, 784, 1047].forEach((f, i) => tone(f, f, 0.12, 'sine', 0.045, i * 0.07));
    } else if (kind === 'hit') {
      tone(240, 70, 0.28, 'sawtooth', 0.06, 0);
    } else if (kind === 'over') {
      tone(392, 392, 0.14, 'triangle', 0.05, 0);
      tone(330, 330, 0.14, 'triangle', 0.05, 0.14);
      tone(262, 262, 0.26, 'triangle', 0.05, 0.28);
    } else if (kind === 'start') {
      tone(392, 523, 0.1, 'triangle', 0.05, 0);
      tone(523, 784, 0.14, 'triangle', 0.05, 0.09);
    } else if (kind === 'ui') {
      tone(480, 540, 0.05, 'square', 0.03, 0);
    }
  }

  function unlockAudio() {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    if (state.audioEnabled && !state.systemPaused && !state.userPaused && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  }

  function suspendAudio() {
    const ctx = state.audioCtx;
    if (ctx && ctx.state === 'running') ctx.suspend().catch(() => {});
  }

  function resumeAudio() {
    const ctx = state.audioCtx;
    if (ctx && state.audioEnabled && !state.systemPaused && !state.userPaused) {
      ctx.resume().catch(() => {});
    }
  }

  function setAudioEnabled(enabled) {
    state.audioEnabled = !!enabled;
    if (!state.audioEnabled) {
      suspendAudio();
    } else if (!state.systemPaused && !state.userPaused) {
      resumeAudio();
    }
  }

  function announce(message) {
    if (!els.live) return;
    announceToken += 1;
    const token = announceToken;
    els.live.textContent = '';
    window.setTimeout(() => {
      if (token === announceToken) els.live.textContent = message;
    }, 30);
  }

  function comboMultiplier(combo) {
    return Math.min(4, 1 + Math.floor(combo / 10));
  }

  function moteInterval() {
    return Math.max(0.3, 0.62 - state.time * 0.004);
  }

  function hazardInterval() {
    return Math.max(0.55, 1.45 - state.time * 0.012);
  }

  function initStars() {
    state.stars.length = 0;
    for (let i = 0; i < 74; i += 1) {
      state.stars.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.6 + Math.random() * 1.7,
        depth: 0.25 + Math.random() * 0.75,
        phase: Math.random() * TAU,
        alpha: 0.25 + Math.random() * 0.6
      });
    }
  }

  function updateStars(dt) {
    if (state.reducedMotion) return;
    const drift = state.scene === 'playing' ? state.speed : state.h * 0.03;
    if (drift <= 0 || state.w <= 0) return;
    for (let i = 0; i < state.stars.length; i += 1) {
      const s = state.stars[i];
      s.x -= (drift * s.depth * dt) / state.w;
      if (s.x < -0.03) {
        s.x += 1.06;
        s.y = Math.random();
      }
    }
  }

  function resize() {
    const rect = els.app ? els.app.getBoundingClientRect() : null;
    const w = Math.max(1, Math.floor((rect && rect.width) || window.innerWidth));
    const h = Math.max(1, Math.floor((rect && rect.height) || window.innerHeight));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.w = w;
    state.h = h;
    state.dpr = dpr;
    state.minDim = Math.min(w, h);
    state.player.r = clamp(state.minDim * 0.026, 12, 20);
    if (!els.canvas) return;
    els.canvas.width = Math.floor(w * dpr);
    els.canvas.height = Math.floor(h * dpr);
    const ctx = els.canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (state.scene === 'playing') {
      state.player.x = clamp(state.player.x, state.player.r, Math.max(state.player.r, w - state.player.r));
      state.player.y = clamp(state.player.y, state.player.r, Math.max(state.player.r, h - state.player.r));
      clampTarget();
    }
  }

  function clampTarget() {
    const r = state.player.r;
    const minX = r + 8;
    const maxX = state.w - r - 8;
    const minY = Math.max(64, state.h * 0.09) + r;
    const maxY = state.h - Math.max(16, state.h * 0.03) - r;
    state.target.x = clamp(state.target.x, minX, Math.max(minX, maxX));
    state.target.y = clamp(state.target.y, minY, Math.max(minY, maxY));
  }

  function spawnMote() {
    if (state.w <= 0 || state.h <= 0) return;
    const r = clamp(state.minDim * 0.028, 12, 22);
    const top = Math.max(64, state.h * 0.11) + r;
    const bottom = state.h - Math.max(20, state.h * 0.05) - r;
    const y = top + Math.random() * Math.max(1, bottom - top);
    const rainbow = Math.random() < 0.07;
    const shape = Math.floor(Math.random() * PALETTE.length);
    const chain = !rainbow && Math.random() < 0.3;
    const count = chain ? 3 : 1;
    const spacing = r * 3.6;
    for (let i = 0; i < count; i += 1) {
      state.motes.push({
        x: state.w + r + 14 + i * spacing,
        y: y,
        r: r,
        kind: rainbow ? 'rainbow' : 'stardust',
        shape: rainbow ? -1 : shape,
        age: 0,
        phase: Math.random() * TAU
      });
    }
  }

  function spawnHazard() {
    if (state.w <= 0 || state.h <= 0) return;
    const r = clamp(state.minDim * 0.024, 10, 19);
    const top = Math.max(64, state.h * 0.11) + r;
    const bottom = state.h - Math.max(20, state.h * 0.05) - r;
    const y = top + Math.random() * Math.max(1, bottom - top);
    state.hazards.push({
      x: state.w + r + 20,
      y: y,
      r: r,
      rot: Math.random() * TAU,
      phase: Math.random() * TAU
    });
  }

  function capParticles() {
    while (state.particles.length > 200) state.particles.shift();
  }

  function spawnBurst(x, y, color, count) {
    const total = state.reducedMotion ? Math.max(3, Math.round(count / 3)) : count;
    for (let i = 0; i < total; i += 1) {
      const angle = Math.random() * TAU;
      const speed = state.minDim * (0.1 + Math.random() * 0.32);
      const life = 0.3 + Math.random() * 0.4;
      state.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: life,
        maxLife: life,
        size: 2 + Math.random() * 3.5,
        color: color,
        gravity: 0,
        shape: Math.random() < 0.4 ? 'rect' : 'circle',
        rot: Math.random() * TAU,
        spin: (Math.random() * 2 - 1) * 6
      });
    }
    capParticles();
  }

  function celebrationBurst() {
    const total = state.reducedMotion ? 18 : 70;
    for (let i = 0; i < total; i += 1) {
      const life = 0.9 + Math.random() * 1.3;
      state.particles.push({
        x: state.w * (0.25 + Math.random() * 0.5),
        y: state.h * 0.42,
        vx: (Math.random() * 2 - 1) * state.minDim * 0.7,
        vy: (-0.35 - Math.random() * 0.8) * state.minDim,
        life: life,
        maxLife: life,
        size: 3 + Math.random() * 5,
        color: RAINBOW[i % RAINBOW.length],
        gravity: state.minDim * 1.1,
        shape: Math.random() < 0.5 ? 'rect' : 'circle',
        rot: Math.random() * TAU,
        spin: (Math.random() * 2 - 1) * 6
      });
    }
    capParticles();
  }

  function updateParticles(dt) {
    for (let i = state.particles.length - 1; i >= 0; i -= 1) {
      const p = state.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        state.particles.splice(i, 1);
        continue;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += p.gravity * dt;
      p.rot += p.spin * dt;
    }
  }

  function addRing(x, y, color) {
    state.rings.push({ x: x, y: y, age: 0, dur: 0.62, color: color });
  }

  function updateRings(dt) {
    for (let i = state.rings.length - 1; i >= 0; i -= 1) {
      const ring = state.rings[i];
      ring.age += dt;
      if (ring.age >= ring.dur) state.rings.splice(i, 1);
    }
  }

  function addBead(shape) {
    state.beads.push({ shape: shape });
    if (state.beads.length > MAX_BEADS) state.beads.shift();
  }

  function beadPos(index) {
    const idx = state.trail.length - 1 - (index + 1) * BEAD_SPACING;
    if (idx < 0) return null;
    return state.trail[idx];
  }

  function updateHud() {
    if (!els.hudScore) return;
    els.hudScore.textContent = String(state.score);
    els.hudBeads.textContent = String(state.beads.length);
    const mult = comboMultiplier(state.combo);
    els.hudCombo.textContent = state.combo > 0 ? `x${mult}` : 'x1';
    els.hudShields.textContent = '';
    for (let i = 0; i < state.shields; i += 1) {
      const pip = document.createElement('span');
      pip.className = 'shield-pip';
      els.hudShields.appendChild(pip);
    }
    els.hud.classList.toggle('low-shields', state.shields <= 1);
  }

  function updateMenuBest() {
    if (!els.menuBest) return;
    els.menuBest.textContent = `Best ${save ? save.best : 0}`;
  }

  function updateMenuPreview() {
    if (!els.menuPreview) return;
    const tail = save && Array.isArray(save.lastTail) && save.lastTail.length ? save.lastTail : null;
    drawPreview(els.menuPreview, tail || DEMO_TAIL);
    els.menuPreview.setAttribute(
      'aria-label',
      tail ? `Your last tail with ${tail.length} beads` : 'Sample stardust tail preview'
    );
  }

  function collectMote(mote) {
    const mult = comboMultiplier(state.combo);
    if (mote.kind === 'rainbow') {
      state.score += 100 * mult;
      state.combo += 1;
      state.shields = Math.min(state.maxShields, state.shields + 1);
      addBead(-1);
      spawnBurst(mote.x, mote.y, '#ffffff', 24);
      addRing(mote.x, mote.y, '#ffffff');
      playSound('rainbow');
      announce('Rainbow stardust. Shield restored.');
    } else {
      state.score += 10 * mult;
      state.combo += 1;
      addBead(mote.shape);
      const color = PALETTE[mote.shape % PALETTE.length].color;
      spawnBurst(mote.x, mote.y, color, 12);
      playSound('pickup', state.combo);
      handleStreak(mote.shape);
    }
    state.beadsCollected += 1;
    state.shake = Math.min(10, state.shake + 3);
    updateHud();
  }

  function handleStreak(shape) {
    if (state.streakShape === shape) {
      state.streakCount += 1;
    } else {
      state.streakShape = shape;
      state.streakCount = 1;
    }
    if (state.streakCount >= 3) {
      state.score += 30 * comboMultiplier(state.combo);
      addBead(-1);
      const color = PALETTE[shape % PALETTE.length].color;
      addRing(state.player.x, state.player.y, color);
      spawnBurst(state.player.x, state.player.y, color, 16);
      playSound('prism');
      announce('Prism bonus.');
      state.streakShape = -1;
      state.streakCount = 0;
    }
  }

  function hitPlayer(x, y) {
    if (state.invuln > 0 || state.scene !== 'playing') return;
    state.shields -= 1;
    state.combo = 0;
    state.streakShape = -1;
    state.streakCount = 0;
    state.invuln = 1.3;
    state.flash = 1;
    state.shake = Math.min(16, state.shake + 10);
    for (let k = 0; k < 3 && state.beads.length > 0; k += 1) {
      const pos = beadPos(state.beads.length - 1);
      const bead = state.beads.pop();
      const color = bead.shape < 0 ? '#ffffff' : PALETTE[bead.shape % PALETTE.length].color;
      if (pos) spawnBurst(pos.x, pos.y, color, 10);
    }
    spawnBurst(x, y, '#ff5d6c', 26);
    addRing(x, y, '#ff5d6c');
    playSound('hit');
    updateHud();
    if (state.shields <= 0) {
      endRound();
    } else {
      announce(`Shield hit. ${state.shields} ${state.shields === 1 ? 'shield' : 'shields'} left.`);
    }
  }

  function endRound() {
    if (state.scene !== 'playing') return;
    state.scene = 'over';
    state.userPaused = false;
    state.motes.length = 0;
    state.hazards.length = 0;
    state.keys.clear();
    setDragging(false);
    playSound('over');
    if (!save) save = defaultSave();
    state.newBest = state.score > save.best;
    if (state.newBest) save.best = state.score;
    save.games += 1;
    save.totalBeads += state.beadsCollected;
    save.lastScore = state.score;
    save.lastTail = state.beads.map((bead) => bead.shape);
    state.best = save.best;
    persist().then(() => {
      sendScore(save.best);
    });
    celebrationBurst();
    showGameOver();
    updateHud();
    if (state.newBest) {
      announce(`New best. Score ${state.score}.`);
    } else {
      announce(`Run complete. Score ${state.score}.`);
    }
  }

  function showGameOver() {
    if (!els.gameover) return;
    els.goTitle.textContent = state.newBest ? 'New Best!' : 'Run Complete';
    els.goScore.textContent = String(state.score);
    els.goBest.textContent = String(save.best);
    els.goBeads.textContent = `Beads collected: ${state.beadsCollected}`;
    els.goMsg.textContent = state.newBest
      ? 'You just set a new personal best.'
      : `Best is ${save.best}. Collect matching shapes for a Prism bonus.`;
    drawPreview(els.tailPreview, state.beads.map((bead) => bead.shape));
    els.tailPreview.setAttribute('aria-label', `Your tail with ${state.beads.length} beads`);
    openDialog(els.gameover, els.btnAgain);
    updateMenuBest();
    updateMenuPreview();
  }

  function beginRound() {
    hideAllDialogs();
    if (els.menu) els.menu.hidden = true;
    if (els.loading) els.loading.hidden = true;
    if (els.hud) els.hud.hidden = false;
    state.scene = 'playing';
    state.score = 0;
    state.shields = 3;
    state.combo = 0;
    state.streakShape = -1;
    state.streakCount = 0;
    state.beadsCollected = 0;
    state.time = 0;
    state.speed = 0;
    state.moteTimer = 0.25;
    state.hazardTimer = 2.2;
    state.invuln = 0;
    state.shake = 0;
    state.flash = 0;
    state.newBest = false;
    state.keys.clear();
    state.userPaused = false;
    setDragging(false);
    state.motes.length = 0;
    state.hazards.length = 0;
    state.particles.length = 0;
    state.rings.length = 0;
    state.trail.length = 0;
    state.beads.length = 0;
    const p = state.player;
    p.x = state.w * 0.5;
    p.y = state.h * 0.6;
    p.px = p.x;
    p.py = p.y;
    state.target.x = p.x;
    state.target.y = p.y;
    clampTarget();
    state.trail.push({ x: p.x, y: p.y });
    updateHud();
    unlockAudio();
    resumeAudio();
    startLoop();
    playSound('start');
    announce('Run started. Collect stardust and dodge the void shards.');
  }

  function startFlow() {
    if (!save) save = defaultSave();
    if (!save.tutorialSeen) {
      openDialog(els.tutorial, els.btnTutorialStart);
      return;
    }
    beginRound();
  }

  function clearWorld() {
    state.motes.length = 0;
    state.hazards.length = 0;
    state.particles.length = 0;
    state.rings.length = 0;
    state.trail.length = 0;
    state.beads.length = 0;
    state.keys.clear();
    setDragging(false);
  }

  function goMenu() {
    hideAllDialogs();
    state.scene = 'menu';
    state.userPaused = false;
    clearWorld();
    if (els.hud) els.hud.hidden = true;
    if (els.loading) els.loading.hidden = true;
    if (els.menu) els.menu.hidden = false;
    updateMenuBest();
    updateMenuPreview();
    startLoop();
    announce('Main menu.');
  }

  function showMenu() {
    state.scene = 'menu';
    if (els.loading) els.loading.hidden = true;
    if (els.hud) els.hud.hidden = true;
    if (els.menu) els.menu.hidden = false;
    updateMenuBest();
    updateMenuPreview();
    startLoop();
  }

  function pauseGame() {
    if (state.scene !== 'playing' || state.userPaused || state.systemPaused) return;
    state.userPaused = true;
    stopLoop();
    suspendAudio();
    persist();
    playSound('ui');
    openDialog(els.pause, els.btnResume);
  }

  function resumeFromPause() {
    if (!state.userPaused) return;
    state.userPaused = false;
    closeDialog(els.pause, false);
    playSound('ui');
    if (!state.systemPaused) {
      resumeAudio();
      startLoop();
    }
  }

  function onSystemPause() {
    state.systemPaused = true;
    systemFocus = document.activeElement;
    if (systemFocus && typeof systemFocus.blur === 'function') systemFocus.blur();
    stopLoop();
    suspendAudio();
    if (state.scene === 'playing' || state.scene === 'over') persist();
    if (els.syspause) els.syspause.hidden = false;
  }

  function onSystemResume() {
    state.systemPaused = false;
    if (els.syspause) els.syspause.hidden = true;
    if (systemFocus && systemFocus.isConnected && !systemFocus.closest('[hidden]')) {
      try {
        systemFocus.focus();
      } catch (error) {
        systemFocus = null;
      }
    }
    systemFocus = null;
    if (!state.userPaused) {
      resumeAudio();
      startLoop();
    }
  }

  function registerSystemCallbacks() {
    if (!inPlayables) return;
    try {
      ytgame.system.onPause(onSystemPause);
    } catch (error) {
      logError();
    }
    try {
      ytgame.system.onResume(onSystemResume);
    } catch (error) {
      logError();
    }
    try {
      state.audioEnabled = !!ytgame.system.isAudioEnabled();
    } catch (error) {
      logError();
    }
    try {
      ytgame.system.onAudioEnabledChange((enabled) => {
        setAudioEnabled(enabled);
      });
    } catch (error) {
      logError();
    }
    try {
      ytgame.system.getLanguage().catch(() => {});
    } catch (error) {
      logError();
    }
  }

  function openDialog(el, focusEl) {
    if (!el) return;
    lastFocused = document.activeElement;
    el.hidden = false;
    if (focusEl) {
      requestAnimationFrame(() => {
        try {
          focusEl.focus();
        } catch (error) {
          return;
        }
      });
    }
  }

  function closeDialog(el, restoreFocus) {
    if (!el) return;
    el.hidden = true;
    if (restoreFocus !== false && lastFocused && lastFocused.isConnected && !lastFocused.closest('[hidden]')) {
      try {
        lastFocused.focus();
      } catch (error) {
        lastFocused = null;
      }
    }
    lastFocused = null;
  }

  function hideAllDialogs() {
    [els.howto, els.tutorial, els.pause, els.gameover].forEach((el) => {
      if (el) el.hidden = true;
    });
    if (!state.systemPaused && els.syspause) els.syspause.hidden = true;
    lastFocused = null;
  }

  function anyOpenDialog() {
    return [els.howto, els.tutorial, els.pause, els.gameover].find((el) => el && !el.hidden) || null;
  }

  function getFocusable(container) {
    return Array.from(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (el) => !el.disabled && el.offsetParent !== null
    );
  }

  function trapFocus(event) {
    const dialog = anyOpenDialog();
    if (!dialog) return;
    const focusable = getFocusable(dialog);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function isMoveKey(key) {
    return (
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === 'ArrowUp' ||
      key === 'ArrowDown' ||
      key === 'a' ||
      key === 'A' ||
      key === 'd' ||
      key === 'D' ||
      key === 'w' ||
      key === 'W' ||
      key === 's' ||
      key === 'S'
    );
  }

  function onKeyDown(event) {
    if (state.systemPaused) return;
    unlockAudio();
    const key = event.key;
    if (key === 'Tab') {
      trapFocus(event);
      return;
    }
    if (key === 'Escape') {
      const dialog = anyOpenDialog();
      if (dialog === els.howto) {
        playSound('ui');
        closeDialog(els.howto);
        return;
      }
      if (dialog === els.tutorial) {
        if (save) {
          save.tutorialSeen = true;
          persist();
        }
        closeDialog(els.tutorial);
        return;
      }
      if (dialog === els.pause) {
        resumeFromPause();
        return;
      }
      if (dialog === els.gameover) {
        closeDialog(els.gameover, false);
        goMenu();
        return;
      }
      if (state.scene === 'playing') pauseGame();
      return;
    }
    if (state.scene !== 'playing' || state.userPaused || state.systemPaused) return;
    if (key === 'p' || key === 'P') {
      pauseGame();
      return;
    }
    if (isMoveKey(key)) {
      state.keys.add(key);
      event.preventDefault();
    }
  }

  function onKeyUp(event) {
    state.keys.delete(event.key);
  }

  function setDragging(value) {
    state.dragging = value;
    if (!els.canvas) return;
    els.canvas.classList.toggle('dragging', value);
  }

  function updatePointerTarget(event) {
    if (!els.canvas) return;
    const rect = els.canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const offsetY = event.pointerType === 'touch' || event.pointerType === 'pen' ? 52 : 0;
    const nx = (event.clientX - rect.left) / rect.width;
    const ny = (event.clientY - rect.top - offsetY) / rect.height;
    state.target.x = nx * state.w;
    state.target.y = ny * state.h;
    clampTarget();
  }

  function onPointerDown(event) {
    if (state.systemPaused) return;
    unlockAudio();
    if (state.scene !== 'playing' || state.userPaused) return;
    event.preventDefault();
    setDragging(true);
    updatePointerTarget(event);
    try {
      els.canvas.setPointerCapture(event.pointerId);
    } catch (error) {
      return;
    }
  }

  function onPointerMove(event) {
    if (state.scene !== 'playing' || state.userPaused || state.systemPaused) return;
    if (!state.dragging && event.pointerType !== 'mouse') return;
    updatePointerTarget(event);
  }

  function onPointerUp(event) {
    if (!state.dragging) return;
    setDragging(false);
    try {
      if (els.canvas.hasPointerCapture(event.pointerId)) els.canvas.releasePointerCapture(event.pointerId);
    } catch (error) {
      return;
    }
  }

  function bindUI() {
    els.btnPlay.addEventListener('click', () => {
      playSound('ui');
      startFlow();
    });
    els.btnHowto.addEventListener('click', () => {
      playSound('ui');
      openDialog(els.howto, els.btnHowtoClose);
    });
    els.btnHowtoClose.addEventListener('click', () => {
      playSound('ui');
      closeDialog(els.howto);
    });
    els.btnHowtoPlay.addEventListener('click', () => {
      playSound('ui');
      closeDialog(els.howto, false);
      startFlow();
    });
    els.btnTutorialStart.addEventListener('click', () => {
      if (save) {
        save.tutorialSeen = true;
        persist();
      }
      closeDialog(els.tutorial, false);
      beginRound();
    });
    els.btnResume.addEventListener('click', () => {
      resumeFromPause();
    });
    els.btnRestart.addEventListener('click', () => {
      state.userPaused = false;
      closeDialog(els.pause, false);
      beginRound();
    });
    els.btnPauseMenu.addEventListener('click', () => {
      playSound('ui');
      state.userPaused = false;
      closeDialog(els.pause, false);
      goMenu();
    });
    els.btnAgain.addEventListener('click', () => {
      closeDialog(els.gameover, false);
      beginRound();
    });
    els.btnMenu.addEventListener('click', () => {
      playSound('ui');
      closeDialog(els.gameover, false);
      goMenu();
    });
  }

  function bindInput() {
    els.canvas.addEventListener('pointerdown', onPointerDown, { passive: false });
    els.canvas.addEventListener('pointermove', onPointerMove, { passive: true });
    els.canvas.addEventListener('pointerup', onPointerUp);
    els.canvas.addEventListener('pointercancel', onPointerUp);
    els.canvas.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', () => {
      state.keys.clear();
      setDragging(false);
    });
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
  }

  function movePlayer(dt) {
    const p = state.player;
    let dx = 0;
    let dy = 0;
    if (state.keys.has('ArrowLeft') || state.keys.has('a') || state.keys.has('A')) dx -= 1;
    if (state.keys.has('ArrowRight') || state.keys.has('d') || state.keys.has('D')) dx += 1;
    if (state.keys.has('ArrowUp') || state.keys.has('w') || state.keys.has('W')) dy -= 1;
    if (state.keys.has('ArrowDown') || state.keys.has('s') || state.keys.has('S')) dy += 1;
    if (dx !== 0 || dy !== 0) {
      const length = Math.hypot(dx, dy);
      const speed = state.minDim * 1.35;
      state.target.x += ((dx / length) * speed * dt);
      state.target.y += ((dy / length) * speed * dt);
      clampTarget();
    }
    const k = 1 - Math.exp(-dt * 11);
    p.px = p.x;
    p.py = p.y;
    p.x += (state.target.x - p.x) * k;
    p.y += (state.target.y - p.y) * k;
  }

  function pushTrail() {
    const t = state.trail;
    const p = state.player;
    const last = t[t.length - 1];
    if (!last) {
      t.push({ x: p.x, y: p.y });
      return;
    }
    if (Math.abs(last.x - p.x) + Math.abs(last.y - p.y) > 1.2) {
      t.push({ x: p.x, y: p.y });
      if (t.length > TRAIL_MAX) t.shift();
    } else {
      last.x = p.x;
      last.y = p.y;
    }
  }

  function updateMotesAndHazards(dt) {
    const speed = state.speed;
    const p = state.player;
    const reach = state.invuln <= 0;
    for (let i = state.motes.length - 1; i >= 0; i -= 1) {
      const mote = state.motes[i];
      mote.x -= speed * dt;
      mote.age += dt;
      if (mote.x < -mote.r * 2.5) {
        state.motes.splice(i, 1);
        continue;
      }
      const dx = p.x - mote.x;
      const dy = p.y - mote.y;
      const hitRadius = p.r + mote.r;
      if (dx * dx + dy * dy <= hitRadius * hitRadius) {
        state.motes.splice(i, 1);
        collectMote(mote);
        if (state.scene !== 'playing') return;
      }
    }
    for (let i = state.hazards.length - 1; i >= 0; i -= 1) {
      const hazard = state.hazards[i];
      hazard.x -= speed * 1.15 * dt;
      hazard.rot += dt * 1.4;
      hazard.y += Math.sin(state.time * 1.3 + hazard.phase) * state.minDim * 0.06 * dt;
      const top = Math.max(64, state.h * 0.11) + hazard.r;
      const bottom = state.h - Math.max(20, state.h * 0.05) - hazard.r;
      hazard.y = clamp(hazard.y, top, Math.max(top, bottom));
      if (hazard.x < -hazard.r * 2.5) {
        state.hazards.splice(i, 1);
        continue;
      }
      if (!reach) continue;
      const dx = p.x - hazard.x;
      const dy = p.y - hazard.y;
      const hitRadius = p.r + hazard.r * 0.82;
      if (dx * dx + dy * dy <= hitRadius * hitRadius) {
        const hx = hazard.x;
        const hy = hazard.y;
        state.hazards.splice(i, 1);
        hitPlayer(hx, hy);
        if (state.scene !== 'playing') return;
      }
    }
  }

  function update(dt) {
    state.time += dt;
    state.speed =
      (state.w + state.minDim * 0.4) * (0.22 + Math.min(state.time * 0.003, 0.16));
    updateStars(dt);
    updateParticles(dt);
    updateRings(dt);
    state.shake = Math.max(0, state.shake - dt * 40);
    state.flash = Math.max(0, state.flash - dt * 2.5);
    if (state.scene !== 'playing') return;
    if (state.invuln > 0) state.invuln = Math.max(0, state.invuln - dt);
    movePlayer(dt);
    pushTrail();
    state.moteTimer -= dt;
    if (state.moteTimer <= 0) {
      spawnMote();
      state.moteTimer = moteInterval();
    }
    state.hazardTimer -= dt;
    if (state.hazardTimer <= 0) {
      spawnHazard();
      state.hazardTimer = hazardInterval();
    }
    updateMotesAndHazards(dt);
  }

  function drawStars(ctx) {
    const scale = clamp(state.minDim / 700, 0.8, 1.8);
    for (let i = 0; i < state.stars.length; i += 1) {
      const s = state.stars[i];
      const tw = state.reducedMotion ? 1 : 0.65 + Math.sin(state.time * 1.6 + s.phase) * 0.35;
      ctx.globalAlpha = s.alpha * tw;
      ctx.fillStyle = '#dfe7ff';
      ctx.beginPath();
      ctx.arc(s.x * state.w, s.y * state.h, s.r * scale, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawBackground(ctx) {
    const w = state.w;
    const h = state.h;
    const base = ctx.createLinearGradient(0, 0, 0, h);
    base.addColorStop(0, '#0a0618');
    base.addColorStop(0.55, '#07040f');
    base.addColorStop(1, '#04020a');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);

    const nebulaA = ctx.createRadialGradient(w * 0.78, h * 0.18, 0, w * 0.78, h * 0.18, Math.max(w, h) * 0.5);
    nebulaA.addColorStop(0, 'rgba(120,70,220,0.2)');
    nebulaA.addColorStop(1, 'rgba(120,70,220,0)');
    ctx.fillStyle = nebulaA;
    ctx.fillRect(0, 0, w, h);

    const nebulaB = ctx.createRadialGradient(w * 0.18, h * 0.82, 0, w * 0.18, h * 0.82, Math.max(w, h) * 0.55);
    nebulaB.addColorStop(0, 'rgba(255,90,180,0.1)');
    nebulaB.addColorStop(1, 'rgba(255,90,180,0)');
    ctx.fillStyle = nebulaB;
    ctx.fillRect(0, 0, w, h);

    drawStars(ctx);

    const vignette = ctx.createRadialGradient(w * 0.5, h * 0.5, state.minDim * 0.2, w * 0.5, h * 0.5, Math.max(w, h) * 0.75);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);
  }

  function beadPath(ctx, x, y, r, shape) {
    ctx.beginPath();
    if (shape === 'circle') {
      ctx.arc(x, y, r, 0, TAU);
    } else if (shape === 'diamond') {
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r * 0.82, y);
      ctx.lineTo(x, y + r);
      ctx.lineTo(x - r * 0.82, y);
    } else if (shape === 'triangle') {
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r * 0.92, y + r * 0.72);
      ctx.lineTo(x - r * 0.92, y + r * 0.72);
    } else if (shape === 'square') {
      const o = r * 0.72;
      ctx.moveTo(x - o, y - o);
      ctx.lineTo(x + o, y - o);
      ctx.lineTo(x + o, y + o);
      ctx.lineTo(x - o, y + o);
    } else {
      for (let i = 0; i < 10; i += 1) {
        const radius = i % 2 === 0 ? r : r * 0.45;
        const angle = -Math.PI / 2 + (i * Math.PI) / 5;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
  }

  function drawBead(ctx, x, y, r, shape) {
    if (r <= 0) return;
    if (shape < 0) {
      const glow = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * 2.1);
      glow.addColorStop(0, 'rgba(255,255,255,0.6)');
      glow.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, r * 2.1, 0, TAU);
      ctx.fill();
      const body = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.1, x, y, r * 0.85);
      body.addColorStop(0, '#ffffff');
      body.addColorStop(1, '#c3b0ff');
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(x, y, r * 0.85, 0, TAU);
      ctx.fill();
      for (let i = 0; i < 5; i += 1) {
        const angle = -Math.PI / 2 + (i * TAU) / 5;
        ctx.fillStyle = RAINBOW[i];
        ctx.beginPath();
        ctx.arc(x + Math.cos(angle) * r * 0.44, y + Math.sin(angle) * r * 0.44, Math.max(1, r * 0.16), 0, TAU);
        ctx.fill();
      }
      return;
    }
    const p = PALETTE[shape % PALETTE.length];
    const glow = ctx.createRadialGradient(x, y, r * 0.3, x, y, r * 2.2);
    glow.addColorStop(0, rgba(p.color, 0.42));
    glow.addColorStop(1, rgba(p.color, 0));
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, r * 2.2, 0, TAU);
    ctx.fill();
    const body = ctx.createRadialGradient(x - r * 0.32, y - r * 0.36, r * 0.12, x, y, r);
    body.addColorStop(0, '#ffffff');
    body.addColorStop(0.42, p.color);
    body.addColorStop(1, p.deep);
    beadPath(ctx, x, y, r, p.shape);
    ctx.fillStyle = body;
    ctx.fill();
    ctx.lineWidth = Math.max(1, r * 0.14);
    ctx.strokeStyle = 'rgba(255,255,255,0.32)';
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.72)';
    ctx.beginPath();
    ctx.arc(x - r * 0.28, y - r * 0.3, Math.max(1, r * 0.14), 0, TAU);
    ctx.fill();
  }

  function drawCometHead(ctx, x, y, r) {
    const glow = ctx.createRadialGradient(x, y, r * 0.1, x, y, r * 2.6);
    glow.addColorStop(0, 'rgba(255,255,255,0.85)');
    glow.addColorStop(0.25, 'rgba(180,139,255,0.45)');
    glow.addColorStop(1, 'rgba(180,139,255,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, r * 2.6, 0, TAU);
    ctx.fill();
    const core = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.1, x, y, r);
    core.addColorStop(0, '#ffffff');
    core.addColorStop(0.55, '#f2ecff');
    core.addColorStop(1, '#b48bff');
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU);
    ctx.fill();
    ctx.lineWidth = Math.max(1, r * 0.14);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.stroke();
  }

  function drawPreview(canvas, indices) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const backdrop = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.55);
    backdrop.addColorStop(0, 'rgba(120,80,220,0.24)');
    backdrop.addColorStop(1, 'rgba(120,80,220,0)');
    ctx.fillStyle = backdrop;
    ctx.fillRect(0, 0, w, h);
    const list = Array.isArray(indices) ? indices : [];
    const n = list.length;
    const r = Math.max(6, h * 0.09);
    const startX = w * 0.1;
    const endX = w * 0.78;
    const midY = h * 0.54;
    const amp = h * 0.2;
    const pointY = (t) => midY + Math.sin(t * Math.PI * 1.5 - Math.PI * 0.5) * amp;
    if (n === 0) {
      drawCometHead(ctx, w * 0.5, midY, r * 1.2);
      return;
    }
    ctx.beginPath();
    for (let i = 0; i < n; i += 1) {
      const t = n > 1 ? i / (n - 1) : 0;
      const x = startX + t * (endX - startX);
      const y = pointY(t);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(180,139,255,0.22)';
    ctx.lineWidth = Math.max(4, r * 1.1);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();
    for (let i = 0; i < n; i += 1) {
      const t = n > 1 ? i / (n - 1) : 0;
      const x = startX + t * (endX - startX);
      const y = pointY(t);
      drawBead(ctx, x, y, r * (0.82 + t * 0.4), list[i]);
    }
    drawCometHead(ctx, endX + r * 2.4, pointY(1), r * 1.25);
  }

  function drawMotes(ctx) {
    for (let i = 0; i < state.motes.length; i += 1) {
      const m = state.motes[i];
      const pulse = state.reducedMotion ? 1 : 1 + Math.sin(state.time * 4.2 + m.phase) * 0.09;
      const r = m.r * pulse;
      if (m.kind === 'rainbow') {
        const glow = ctx.createRadialGradient(m.x, m.y, r * 0.2, m.x, m.y, r * 2.6);
        glow.addColorStop(0, 'rgba(255,255,255,0.55)');
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(m.x, m.y, r * 2.6, 0, TAU);
        ctx.fill();
        ctx.save();
        ctx.translate(m.x, m.y);
        if (!state.reducedMotion) ctx.rotate(state.time * 1.5);
        for (let k = 0; k < 5; k += 1) {
          ctx.strokeStyle = RAINBOW[k];
          ctx.lineWidth = Math.max(2, r * 0.28);
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.78, (k * TAU) / 5, ((k + 1) * TAU) / 5 - 0.12);
          ctx.stroke();
        }
        ctx.restore();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(m.x, m.y, r * 0.42, 0, TAU);
        ctx.fill();
      } else {
        drawBead(ctx, m.x, m.y, r, m.shape);
      }
    }
  }

  function drawHazards(ctx) {
    for (let i = 0; i < state.hazards.length; i += 1) {
      const hz = state.hazards[i];
      const r = hz.r;
      ctx.save();
      ctx.translate(hz.x, hz.y);
      if (!state.reducedMotion) ctx.rotate(hz.rot);
      const glow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 2);
      glow.addColorStop(0, 'rgba(255,60,80,0.35)');
      glow.addColorStop(1, 'rgba(255,60,80,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2, 0, TAU);
      ctx.fill();
      ctx.beginPath();
      for (let k = 0; k < 12; k += 1) {
        const radius = k % 2 === 0 ? r : r * 0.52;
        const angle = (k * Math.PI) / 6;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (k === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      const body = ctx.createRadialGradient(-r * 0.2, -r * 0.3, r * 0.1, 0, 0, r);
      body.addColorStop(0, '#4a1230');
      body.addColorStop(1, '#14061c');
      ctx.fillStyle = body;
      ctx.fill();
      ctx.lineWidth = Math.max(1.5, r * 0.14);
      ctx.strokeStyle = 'rgba(255,93,108,0.85)';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.28, 0, TAU);
      ctx.fillStyle = 'rgba(255,93,108,0.85)';
      ctx.fill();
      ctx.restore();
    }
  }

  function drawTail(ctx) {
    const trail = state.trail;
    if (trail.length < 2) return;
    const r = clamp(state.minDim * 0.013, 6, 10);
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    for (let pass = 0; pass < 2; pass += 1) {
      ctx.beginPath();
      for (let i = 0; i < trail.length; i += 1) {
        const point = trail[i];
        if (i === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      }
      ctx.strokeStyle = pass === 0 ? 'rgba(140,90,255,0.1)' : 'rgba(180,139,255,0.3)';
      ctx.lineWidth = pass === 0 ? r * 3.4 : r * 1.6;
      ctx.stroke();
    }
    ctx.restore();
    const n = state.beads.length;
    for (let j = 0; j < n; j += 1) {
      const pos = beadPos(j);
      if (!pos) continue;
      const t = n > 1 ? j / (n - 1) : 1;
      drawBead(ctx, pos.x, pos.y, r * (0.78 + t * 0.4), state.beads[j].shape);
    }
  }

  function drawPlayer(ctx) {
    const p = state.player;
    ctx.save();
    if (state.invuln > 0) {
      ctx.globalAlpha = Math.floor(state.time * 14) % 2 === 0 ? 0.45 : 1;
    }
    drawCometHead(ctx, p.x, p.y, p.r);
    ctx.restore();
    if (state.invuln > 0) {
      ctx.save();
      ctx.globalAlpha = 0.45 + Math.sin(state.time * 20) * 0.18;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 8]);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.1, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawRings(ctx) {
    for (let i = 0; i < state.rings.length; i += 1) {
      const ring = state.rings[i];
      const t = clamp(ring.age / ring.dur, 0, 1);
      const radius = state.minDim * (0.05 + t * 0.2);
      ctx.save();
      ctx.globalAlpha = (1 - t) * 0.7;
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(ring.x, ring.y, radius, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawParticles(ctx) {
    for (let i = 0; i < state.particles.length; i += 1) {
      const p = state.particles[i];
      const alpha = clamp(p.life / p.maxLife, 0, 1);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
        ctx.restore();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, TAU);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  function render() {
    if (!els.canvas || state.w <= 0 || state.h <= 0) return;
    const ctx = els.canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.clearRect(0, 0, state.w, state.h);
    drawBackground(ctx);
    ctx.save();
    if (!state.reducedMotion && state.shake > 0.2) {
      ctx.translate((Math.random() * 2 - 1) * state.shake, (Math.random() * 2 - 1) * state.shake);
    }
    if (state.scene === 'playing' || state.scene === 'over') {
      drawTail(ctx);
      drawMotes(ctx);
      drawHazards(ctx);
      drawRings(ctx);
      drawPlayer(ctx);
    }
    drawParticles(ctx);
    ctx.restore();
    if (state.flash > 0.01) {
      ctx.fillStyle = `rgba(255,70,90,${(state.flash * 0.3).toFixed(3)})`;
      ctx.fillRect(0, 0, state.w, state.h);
    }
  }

  function tick(ts) {
    if (!state.running) return;
    const dt = Math.min(0.05, Math.max(0, (ts - state.lastTs) / 1000));
    state.lastTs = ts;
    update(dt);
    render();
    state.rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (state.running) return;
    if (state.systemPaused || state.userPaused) return;
    state.running = true;
    state.lastTs = performance.now();
    state.rafId = requestAnimationFrame(tick);
  }

  function stopLoop() {
    state.running = false;
    if (state.rafId) cancelAnimationFrame(state.rafId);
    state.rafId = 0;
  }

  function setReducedMotion() {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    state.reducedMotion = mq.matches;
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', (event) => {
        state.reducedMotion = event.matches;
      });
    }
  }

  async function boot() {
    cacheEls();
    setReducedMotion();
    initStars();
    bindUI();
    bindInput();
    resize();
    render();
    firstFrameReady();
    registerSystemCallbacks();
    startLoop();
    await loadSave();
    updateMenuBest();
    updateMenuPreview();
    showMenu();
    gameReady();
  }

  window.addEventListener('error', () => {
    logError();
  });

  window.addEventListener('unhandledrejection', () => {
    logError();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      boot().catch(() => {
        logError();
      });
    }, { once: true });
  } else {
    boot().catch(() => {
      logError();
    });
  }
})();
