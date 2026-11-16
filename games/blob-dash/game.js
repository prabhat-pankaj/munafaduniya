(() => {
  'use strict';

  const TAU = Math.PI * 2;
  const F = 10;
  const VIEW = 110;
  const SEG_LEN = 6;
  const LANES = [-0.62, 0, 0.62];
  const START_SPEED = 14;
  const MAX_SPEED = 34;
  const GRAVITY = 42;
  const JUMP_VEL = 13;
  const PLAYER_HALF_U = 0.16;
  const STEER_SPEED = 2.6;
  const CONE_HALF_U = 0.22;
  const CONE_H = 1.3;
  const HURDLE_HALF_U = 0.92;
  const HURDLE_H = 0.9;
  const MAX_PARTICLES = 220;
  const SPRINKLE_COLORS = ['#ffcf5c', '#ff8fc7', '#7fe3ff', '#8affc1', '#b48bff'];

  const hasYt = typeof ytgame !== 'undefined';
  const inPlayables = !!(hasYt && ytgame.IN_PLAYABLES_ENV);

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

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
    hearts: 3,
    maxHearts: 3,
    coins: 0,
    time: 0,
    travel: 0,
    speed: START_SPEED,
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
    horizonY: 0,
    nearY: 0,
    centerX: 0,
    roadHalfPx: 0,
    unitPx: 0,
    playerU: 0,
    playerY: 0,
    playerVY: 0,
    playerR: 30,
    onGround: true,
    playerUPrev: 0,
    lean: 0,
    genZ: 0,
    lastGapIdx: -100,
    lastObstacleIdx: -100,
    lastSprinkleIdx: -100,
    segments: [],
    obstacles: [],
    sprinkles: [],
    particles: [],
    dragging: false,
    dragActive: false,
    dragMoved: false,
    dragStartX: 0,
    dragStartU: 0,
    dragU: 0,
    keys: new Set()
  };

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
      hudHearts: 'hud-hearts',
      hudCoins: 'hud-coins',
      btnSound: 'btn-sound',
      btnPause: 'btn-pause',
      btnJump: 'btn-jump',
      backLink: 'back-link',
      loading: 'loading',
      menu: 'menu',
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
      goCoins: 'go-coins',
      btnAgain: 'btn-again',
      btnMenu: 'btn-menu',
      live: 'live'
    };
    Object.keys(ids).forEach((key) => {
      els[key] = document.getElementById(ids[key]);
    });
  }

  /* ---------- Playables SDK ---------- */

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
    return { v: 1, best: 0, tutorialSeen: false, games: 0, totalCoins: 0, lastScore: 0 };
  }

  function toCount(value) {
    return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.floor(value) : undefined;
  }

  function normalizeSave(raw) {
    const next = defaultSave();
    if (!raw || typeof raw !== 'object') return next;
    const best = toCount(raw.best);
    if (best !== undefined) next.best = best;
    else if (toCount(raw.highScore) !== undefined) next.best = toCount(raw.highScore);
    else if (toCount(raw.high_score) !== undefined) next.best = toCount(raw.high_score);
    const games = toCount(raw.games);
    if (games !== undefined) next.games = games;
    else if (toCount(raw.gamesPlayed) !== undefined) next.games = toCount(raw.gamesPlayed);
    const totalCoins = toCount(raw.totalCoins);
    if (totalCoins !== undefined) next.totalCoins = totalCoins;
    else if (toCount(raw.coins) !== undefined) next.totalCoins = toCount(raw.coins);
    const lastScore = toCount(raw.lastScore);
    if (lastScore !== undefined) next.lastScore = lastScore;
    if (typeof raw.tutorialSeen === 'boolean') next.tutorialSeen = raw.tutorialSeen;
    else if (raw.tutorialSeen === 1) next.tutorialSeen = true;
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
    if (!state.saveReady || !save || !inPlayables) return Promise.resolve();
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

  /* ---------- Audio ---------- */

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
    if (to !== freq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + dur);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + 0.008);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(amp).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + dur + 0.03);
  }

  function playSound(kind) {
    if (!state.audioEnabled) return;
    if (kind === 'pickup') {
      tone(660, 990, 0.08, 'sine', 0.04, 0);
    } else if (kind === 'jump') {
      tone(360, 620, 0.14, 'sine', 0.045, 0);
    } else if (kind === 'hit') {
      tone(240, 70, 0.26, 'sawtooth', 0.055, 0);
    } else if (kind === 'fall') {
      tone(420, 90, 0.4, 'triangle', 0.055, 0);
    } else if (kind === 'over') {
      tone(392, 392, 0.14, 'triangle', 0.05, 0);
      tone(330, 330, 0.14, 'triangle', 0.05, 0.14);
      tone(262, 262, 0.26, 'triangle', 0.05, 0.28);
    } else if (kind === 'start') {
      tone(392, 523, 0.1, 'triangle', 0.05, 0);
      tone(523, 784, 0.14, 'triangle', 0.05, 0.09);
    } else if (kind === 'best') {
      [523, 659, 784, 1047].forEach((f, i) => tone(f, f, 0.13, 'triangle', 0.05, i * 0.08));
    } else if (kind === 'ui') {
      tone(480, 540, 0.05, 'square', 0.028, 0);
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
    if (ctx && state.audioEnabled && !state.systemPaused && !state.userPaused) ctx.resume().catch(() => {});
  }

  function setAudioEnabled(enabled) {
    state.audioEnabled = !!enabled;
    if (!state.audioEnabled) suspendAudio();
    else if (!state.systemPaused && !state.userPaused) resumeAudio();
    updateSoundButton();
  }

  function updateSoundButton() {
    if (!els.btnSound) return;
    els.btnSound.setAttribute('aria-pressed', state.audioEnabled ? 'true' : 'false');
    els.btnSound.setAttribute('aria-label', state.audioEnabled ? 'Mute sound' : 'Unmute sound');
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

  /* ---------- Projection ---------- */

  function roadAt(d) {
    const k = F / (F + Math.max(d, 0.0001));
    return {
      y: state.horizonY + (state.nearY - state.horizonY) * k,
      halfW: state.roadHalfPx * k,
      k: k
    };
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
    state.horizonY = h * 0.3;
    state.nearY = h * 0.9;
    state.centerX = w / 2;
    state.roadHalfPx = Math.min(w * 0.38, h * 0.6);
    state.unitPx = state.roadHalfPx * 0.4;
    state.playerR = clamp(state.minDim * 0.052, 20, 46);
    if (!els.canvas) return;
    els.canvas.width = Math.floor(w * dpr);
    els.canvas.height = Math.floor(h * dpr);
    const ctx = els.canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  /* ---------- World generation ---------- */

  function gapChance(dist) {
    return Math.min(0.16, (dist - 150) * 0.00035);
  }

  function obstacleChance(dist) {
    return Math.min(0.6, 0.24 + dist * 0.00035);
  }

  function addSegment(z) {
    const idx = Math.round(z / SEG_LEN);
    let gap = false;
    if (z > 150 && idx - state.lastGapIdx >= 7 && Math.random() < gapChance(z)) {
      gap = true;
      state.lastGapIdx = idx;
    }
    state.segments.push({ z: z, gap: gap });
    if (gap) return;
    if (idx - state.lastGapIdx <= 1) return;
    if (idx - state.lastObstacleIdx >= 3 && Math.random() < obstacleChance(z)) {
      state.lastObstacleIdx = idx;
      if (Math.random() < 0.62) {
        const lane = Math.floor(Math.random() * LANES.length);
        state.obstacles.push({ z: z, u: LANES[lane], type: 'cone', hit: false });
      } else {
        state.obstacles.push({ z: z, u: 0, type: 'hurdle', hit: false });
      }
    }
    if (idx - state.lastSprinkleIdx >= 2 && Math.random() < 0.5) {
      state.lastSprinkleIdx = idx;
      const lane = Math.floor(Math.random() * LANES.length);
      const count = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i += 1) {
        state.sprinkles.push({ z: z + i * 2.6, u: LANES[lane], taken: false, phase: Math.random() * TAU });
      }
    }
  }

  function generate() {
    const limit = state.travel + VIEW + SEG_LEN * 3;
    while (state.genZ < limit) {
      addSegment(state.genZ);
      state.genZ += SEG_LEN;
    }
  }

  function prune() {
    const behind = state.travel - SEG_LEN * 2;
    while (state.segments.length && state.segments[0].z + SEG_LEN < behind) state.segments.shift();
    while (state.obstacles.length && (state.obstacles[0].z < behind || state.obstacles[0].hit)) state.obstacles.shift();
    while (state.sprinkles.length && (state.sprinkles[0].z < behind || state.sprinkles[0].taken)) state.sprinkles.shift();
  }

  function segmentAt(z) {
    for (let i = 0; i < state.segments.length; i += 1) {
      const seg = state.segments[i];
      if (seg.z <= z && z < seg.z + SEG_LEN) return seg;
    }
    return null;
  }

  /* ---------- Particles ---------- */

  function capParticles() {
    while (state.particles.length > MAX_PARTICLES) state.particles.shift();
  }

  function spawnBurst(x, y, color, count) {
    const total = state.reducedMotion ? Math.max(3, Math.round(count / 3)) : count;
    for (let i = 0; i < total; i += 1) {
      const angle = Math.random() * TAU;
      const speed = state.minDim * (0.1 + Math.random() * 0.3);
      const life = 0.3 + Math.random() * 0.4;
      state.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - state.minDim * 0.06,
        life: life,
        maxLife: life,
        size: 2 + Math.random() * 3.5,
        color: color,
        gravity: state.minDim * 0.6,
        shape: Math.random() < 0.5 ? 'rect' : 'circle',
        rot: Math.random() * TAU,
        spin: (Math.random() * 2 - 1) * 7
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
        color: SPRINKLE_COLORS[i % SPRINKLE_COLORS.length],
        gravity: state.minDim * 1.1,
        shape: Math.random() < 0.5 ? 'rect' : 'circle',
        rot: Math.random() * TAU,
        spin: (Math.random() * 2 - 1) * 7
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

  /* ---------- Gameplay ---------- */

  function jump() {
    if (state.scene !== 'playing' || state.userPaused || state.systemPaused) return;
    if (!state.onGround) return;
    state.playerVY = JUMP_VEL;
    state.onGround = false;
    playSound('jump');
  }

  function updateSpeed() {
    state.speed = Math.min(MAX_SPEED, START_SPEED + state.travel * 0.012);
  }

  function updatePlayer(dt) {
    let steerDir = 0;
    if (state.dragging) {
      state.playerU = clamp(state.dragU, -1, 1);
      steerDir = clamp((state.playerU - state.playerUPrev) * 24, -1, 1);
    } else {
      if (state.keys.has('ArrowLeft') || state.keys.has('a') || state.keys.has('A')) steerDir -= 1;
      if (state.keys.has('ArrowRight') || state.keys.has('d') || state.keys.has('D')) steerDir += 1;
      state.playerU = clamp(state.playerU + steerDir * STEER_SPEED * dt, -1, 1);
    }
    state.playerUPrev = state.playerU;
    const targetLean = steerDir * 0.16;
    state.lean += (targetLean - state.lean) * (1 - Math.exp(-dt * 10));

    state.playerVY -= GRAVITY * dt;
    state.playerY += state.playerVY * dt;
    if (state.playerY <= 0) {
      state.playerY = 0;
      state.playerVY = 0;
    }
    state.onGround = state.playerY <= 0.001;
  }

  function collectSprinkle(s) {
    state.coins += 1;
    const dRel = s.z - state.travel;
    const base = roadAt(Math.max(dRel, 0.3));
    const x = state.centerX + s.u * state.roadHalfPx * base.k;
    const y = base.y - 0.5 * state.unitPx * base.k;
    spawnBurst(x, y, SPRINKLE_COLORS[state.coins % SPRINKLE_COLORS.length], 10);
    playSound('pickup');
  }

  function damage(kind) {
    if (state.invuln > 0 || state.scene !== 'playing') return;
    state.hearts -= 1;
    state.invuln = 1.4;
    state.flash = 1;
    state.shake = Math.min(16, state.shake + 10);
    const x = state.centerX + state.playerU * state.roadHalfPx;
    const y = state.nearY - state.playerY * state.unitPx - state.playerR;
    spawnBurst(x, y, kind === 'fall' ? '#7a4a2a' : '#ff5d8f', 22);
    playSound(kind === 'fall' ? 'fall' : 'hit');
    updateHud();
    if (state.hearts <= 0) {
      endRound();
      return;
    }
    announce(kind === 'fall' ? `Oof, a gap! ${state.hearts} hearts left.` : `Ouch! ${state.hearts} hearts left.`);
  }

  function checkCollisions() {
    const t = state.travel;
    const pU = state.playerU;
    const pY = state.playerY;

    for (let i = 0; i < state.obstacles.length; i += 1) {
      const o = state.obstacles[i];
      const dz = o.z - t;
      if (dz > 1.2) break;
      if (dz < -1.2 || o.hit) continue;
      if (o.type === 'cone') {
        if (Math.abs(pU - o.u) < CONE_HALF_U + PLAYER_HALF_U && pY < CONE_H) {
          o.hit = true;
          damage('hit');
          if (state.scene !== 'playing') return;
        }
      } else if (pY < HURDLE_H) {
        o.hit = true;
        damage('hit');
        if (state.scene !== 'playing') return;
      }
    }

    if (pY < 0.35) {
      const seg = segmentAt(t);
      if (seg && seg.gap) {
        state.travel = seg.z + SEG_LEN + 1.5;
        state.playerY = 0;
        state.playerVY = 0;
        state.onGround = true;
        damage('fall');
        if (state.scene !== 'playing') return;
      }
    }

    for (let i = 0; i < state.sprinkles.length; i += 1) {
      const s = state.sprinkles[i];
      const dz = s.z - t;
      if (dz > 2) break;
      if (dz < -2 || s.taken) continue;
      if (Math.abs(pU - s.u) < 0.3 && pY < 1.8) {
        s.taken = true;
        collectSprinkle(s);
      }
    }
  }

  function update(dt) {
    state.time += dt;
    updateParticles(dt);
    state.shake = Math.max(0, state.shake - dt * 40);
    state.flash = Math.max(0, state.flash - dt * 2.5);
    if (state.scene !== 'playing') return;
    if (state.invuln > 0) state.invuln = Math.max(0, state.invuln - dt);
    updateSpeed();
    updatePlayer(dt);
    state.travel += state.speed * dt;
    generate();
    prune();
    checkCollisions();
    if (state.scene !== 'playing') return;
    state.score = Math.floor(state.travel) + state.coins * 5;
    updateHud();
  }

  /* ---------- HUD / dialogs ---------- */

  function updateHearts() {
    if (!els.hudHearts) return;
    if (state.hudHeartsShown === state.hearts) return;
    state.hudHeartsShown = state.hearts;
    els.hudHearts.textContent = '';
    for (let i = 0; i < state.maxHearts; i += 1) {
      const pip = document.createElement('span');
      pip.className = 'pip' + (i < state.hearts ? '' : ' is-empty');
      els.hudHearts.appendChild(pip);
    }
  }

  function updateHud() {
    if (els.hudScore && els.hudScore.textContent !== String(state.score)) els.hudScore.textContent = String(state.score);
    if (els.hudCoins && els.hudCoins.textContent !== String(state.coins)) els.hudCoins.textContent = String(state.coins);
    updateHearts();
  }

  function updateMenuBest() {
    if (!els.menuBest) return;
    els.menuBest.textContent = `Best ${save ? save.best : 0}`;
  }

  function showHud(show) {
    if (els.hud) {
      els.hud.hidden = !show;
      els.hud.setAttribute('aria-hidden', show ? 'false' : 'true');
    }
    if (els.btnJump) els.btnJump.hidden = !show;
  }

  function showBackLink(show) {
    if (!els.backLink) return;
    els.backLink.hidden = inPlayables ? true : !show;
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

  /* ---------- Scene flow ---------- */

  function resetWorld() {
    state.segments.length = 0;
    state.obstacles.length = 0;
    state.sprinkles.length = 0;
    state.particles.length = 0;
    state.genZ = 0;
    state.lastGapIdx = -100;
    state.lastObstacleIdx = -100;
    state.lastSprinkleIdx = -100;
  }

  function beginRound() {
    hideAllDialogs();
    if (els.menu) els.menu.hidden = true;
    if (els.loading) els.loading.hidden = true;
    resetWorld();
    state.scene = 'playing';
    state.score = 0;
    state.coins = 0;
    state.hearts = state.maxHearts;
    state.travel = 0;
    state.speed = START_SPEED;
    state.time = 0;
    state.playerU = 0;
    state.playerUPrev = 0;
    state.playerY = 0;
    state.playerVY = 0;
    state.onGround = true;
    state.lean = 0;
    state.invuln = 0;
    state.shake = 0;
    state.flash = 0;
    state.newBest = false;
    state.keys.clear();
    state.userPaused = false;
    setDragging(false);
    state.hudHeartsShown = -1;
    generate();
    showHud(true);
    showBackLink(false);
    updateHud();
    unlockAudio();
    resumeAudio();
    startLoop();
    playSound('start');
    announce('Run started. Stay on the candy road and collect sprinkles.');
  }

  function endRound() {
    if (state.scene !== 'playing') return;
    state.scene = 'over';
    state.userPaused = false;
    state.keys.clear();
    setDragging(false);
    playSound('over');
    if (!save) save = defaultSave();
    state.newBest = state.score > save.best;
    if (state.newBest) save.best = state.score;
    save.games += 1;
    save.totalCoins += state.coins;
    save.lastScore = state.score;
    state.best = save.best;
    persist().then(() => {
      sendScore(save.best);
    });
    celebrationBurst();
    if (state.newBest) playSound('best');
    showGameOver();
    updateHud();
    if (state.newBest) announce(`New best. Score ${state.score}.`);
    else announce(`Run complete. Score ${state.score}.`);
  }

  function showGameOver() {
    if (!els.gameover) return;
    els.goTitle.textContent = state.newBest ? 'New Best!' : 'Run Complete';
    els.goScore.textContent = String(state.score);
    els.goBest.textContent = String(save.best);
    els.goCoins.textContent = `Sprinkles collected: ${state.coins}`;
    els.goMsg.textContent = state.newBest
      ? 'You just set a new personal best. Sweet rolling!'
      : `Best is ${save.best}. Grab sprinkles for bonus points.`;
    openDialog(els.gameover, els.btnAgain);
    updateMenuBest();
  }

  function startFlow() {
    if (!save) save = defaultSave();
    if (!save.tutorialSeen) {
      openDialog(els.tutorial, els.btnTutorialStart);
      return;
    }
    beginRound();
  }

  function goMenu() {
    hideAllDialogs();
    state.scene = 'menu';
    state.userPaused = false;
    resetWorld();
    state.keys.clear();
    setDragging(false);
    showHud(false);
    showBackLink(true);
    if (els.loading) els.loading.hidden = true;
    if (els.menu) els.menu.hidden = false;
    updateMenuBest();
    startLoop();
    announce('Main menu.');
  }

  function showMenu() {
    state.scene = 'menu';
    if (els.loading) els.loading.hidden = true;
    showHud(false);
    showBackLink(true);
    if (els.menu) els.menu.hidden = false;
    updateMenuBest();
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

  /* ---------- Input ---------- */

  function setDragging(value) {
    state.dragging = value;
    if (!els.canvas) return;
    els.canvas.classList.toggle('dragging', value);
  }

  function isSteerKey(key) {
    return key === 'ArrowLeft' || key === 'ArrowRight' || key === 'a' || key === 'A' || key === 'd' || key === 'D';
  }

  function isJumpKey(key) {
    return key === ' ' || key === 'Spacebar' || key === 'ArrowUp' || key === 'w' || key === 'W';
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
        beginRound();
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
    if (isJumpKey(key)) {
      jump();
      event.preventDefault();
      return;
    }
    if (isSteerKey(key)) {
      state.keys.add(key);
      event.preventDefault();
    }
  }

  function onKeyUp(event) {
    state.keys.delete(event.key);
  }

  function onPointerDown(event) {
    if (state.systemPaused) return;
    unlockAudio();
    if (state.scene !== 'playing' || state.userPaused) return;
    event.preventDefault();
    state.dragActive = true;
    state.dragMoved = false;
    state.dragStartX = event.clientX;
    state.dragStartU = state.playerU;
    state.dragU = state.playerU;
    setDragging(true);
    try {
      els.canvas.setPointerCapture(event.pointerId);
    } catch (error) {
      return;
    }
  }

  function onPointerMove(event) {
    if (!state.dragActive || state.scene !== 'playing' || state.userPaused || state.systemPaused) return;
    const dx = event.clientX - state.dragStartX;
    if (Math.abs(dx) > 8) state.dragMoved = true;
    const span = Math.max(40, state.roadHalfPx * 0.9);
    state.dragU = clamp(state.dragStartU + dx / span, -1, 1);
  }

  function onPointerUp(event) {
    if (!state.dragActive) return;
    const wasTap = !state.dragMoved;
    state.dragActive = false;
    setDragging(false);
    try {
      if (els.canvas.hasPointerCapture(event.pointerId)) els.canvas.releasePointerCapture(event.pointerId);
    } catch (error) {
      // ignore
    }
    if (wasTap) jump();
  }

  /* ---------- Bindings ---------- */

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
    els.btnResume.addEventListener('click', resumeFromPause);
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
    if (els.btnPause) {
      els.btnPause.addEventListener('click', () => {
        pauseGame();
      });
    }
    if (els.btnSound) {
      els.btnSound.addEventListener('click', () => {
        setAudioEnabled(!state.audioEnabled);
        if (state.audioEnabled) playSound('ui');
      });
    }
    if (els.btnJump) {
      els.btnJump.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        jump();
      });
    }
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
      state.dragActive = false;
      setDragging(false);
    });
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
  }

  /* ---------- Rendering ---------- */

  function roundRectPath(ctx, x, y, w, h, r) {
    const rr = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.lineTo(x + w - rr, y);
    ctx.arcTo(x + w, y, x + w, y + rr, rr);
    ctx.lineTo(x + w, y + h - rr);
    ctx.arcTo(x + w, y + h, x + w - rr, y + h, rr);
    ctx.lineTo(x + rr, y + h);
    ctx.arcTo(x, y + h, x, y + h - rr, rr);
    ctx.lineTo(x, y + rr);
    ctx.arcTo(x, y, x + rr, y, rr);
    ctx.closePath();
  }

  function drawBackground(ctx) {
    const w = state.w;
    const h = state.h;
    const horizon = state.horizonY;

    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, '#2c1250');
    sky.addColorStop(0.55, '#7b3f9e');
    sky.addColorStop(1, '#ff9ec7');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, horizon + 1);

    const sunX = w * 0.72;
    const sunY = horizon - h * 0.04;
    const sun = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, h * 0.3);
    sun.addColorStop(0, 'rgba(255, 224, 160, 0.9)');
    sun.addColorStop(0.35, 'rgba(255, 158, 199, 0.35)');
    sun.addColorStop(1, 'rgba(255, 158, 199, 0)');
    ctx.fillStyle = sun;
    ctx.fillRect(0, 0, w, horizon + 1);

    ctx.fillStyle = 'rgba(255, 240, 200, 0.85)';
    ctx.beginPath();
    ctx.arc(sunX, sunY, Math.min(w, h) * 0.07, 0, TAU);
    ctx.fill();

    ctx.fillStyle = 'rgba(120, 60, 150, 0.4)';
    ctx.beginPath();
    ctx.ellipse(w * 0.2, horizon - h * 0.02, w * 0.24, h * 0.05, 0, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.55, horizon - h * 0.05, w * 0.2, h * 0.04, 0, 0, TAU);
    ctx.fill();

    const ground = ctx.createLinearGradient(0, horizon, 0, h);
    ground.addColorStop(0, '#4a2246');
    ground.addColorStop(0.3, '#2a1330');
    ground.addColorStop(1, '#120611');
    ctx.fillStyle = ground;
    ctx.fillRect(0, horizon, w, h - horizon);
  }

  function quadU(ctx, uL, uR, d0, d1) {
    const near = roadAt(d0);
    const far = roadAt(d1);
    ctx.beginPath();
    ctx.moveTo(state.centerX + uL * near.halfW, near.y);
    ctx.lineTo(state.centerX + uR * near.halfW, near.y);
    ctx.lineTo(state.centerX + uR * far.halfW, far.y);
    ctx.lineTo(state.centerX + uL * far.halfW, far.y);
    ctx.closePath();
  }

  function drawDistantRoad(ctx) {
    const near = roadAt(VIEW);
    const far = roadAt(200000);
    ctx.beginPath();
    ctx.moveTo(state.centerX - near.halfW, near.y);
    ctx.lineTo(state.centerX + near.halfW, near.y);
    ctx.lineTo(state.centerX + far.halfW, far.y);
    ctx.lineTo(state.centerX - far.halfW, far.y);
    ctx.closePath();
    ctx.fillStyle = '#ffd8ea';
    ctx.fill();
  }

  function drawRoad(ctx) {
    const segs = state.segments;
    for (let i = segs.length - 1; i >= 0; i -= 1) {
      const seg = segs[i];
      const d0 = seg.z - state.travel;
      const d1 = d0 + SEG_LEN;
      if (d1 < 0.2) break;
      if (d0 > VIEW) continue;
      const n0 = Math.max(d0, 0.2);
      if (seg.gap) continue;
      const idx = Math.round(seg.z / SEG_LEN);
      const even = idx % 2 === 0;

      quadU(ctx, -1.16, -1, n0, d1);
      ctx.fillStyle = even ? '#5ff0c0' : '#ff8fc7';
      ctx.fill();
      quadU(ctx, 1, 1.16, n0, d1);
      ctx.fillStyle = even ? '#ff8fc7' : '#5ff0c0';
      ctx.fill();

      quadU(ctx, -1, 1, n0, d1);
      ctx.fillStyle = even ? '#ffe9f3' : '#ffd6e9';
      ctx.fill();

      if (even) {
        quadU(ctx, -0.34, -0.3, n0, d1);
        ctx.fillStyle = 'rgba(255, 143, 199, 0.55)';
        ctx.fill();
        quadU(ctx, 0.3, 0.34, n0, d1);
        ctx.fillStyle = 'rgba(255, 143, 199, 0.55)';
        ctx.fill();
      }
    }
  }

  function drawScenery(ctx) {
    const segs = state.segments;
    const colors = ['#ff9ec7', '#b48bff', '#7fe3ff', '#ffd166', '#8affc1'];
    for (let i = segs.length - 1; i >= 0; i -= 1) {
      const seg = segs[i];
      const d0 = seg.z - state.travel;
      if (d0 > VIEW || d0 + SEG_LEN < 0.2) continue;
      const idx = Math.round(seg.z / SEG_LEN);
      const base = roadAt(Math.max(d0, 0.4));
      if (idx % 4 === 0) drawGumdrop(ctx, -1.95, base, idx, colors);
      if (idx % 4 === 2) drawGumdrop(ctx, 1.95, base, idx, colors);
    }
  }

  function drawGumdrop(ctx, u, base, idx, colors) {
    const x = state.centerX + u * base.halfW;
    const r = 0.55 * base.halfW;
    if (r < 0.6) return;
    const c = colors[((idx % colors.length) + colors.length) % colors.length];
    ctx.globalAlpha = 0.92;
    ctx.beginPath();
    ctx.arc(x, base.y, r, Math.PI, TAU);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(x - r * 0.32, base.y - r * 0.42, Math.max(0.5, r * 0.16), 0, TAU);
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.fill();
  }

  function drawObstacles(ctx) {
    for (let i = state.obstacles.length - 1; i >= 0; i -= 1) {
      const o = state.obstacles[i];
      if (o.hit) continue;
      const dRel = o.z - state.travel;
      if (dRel > VIEW || dRel + 1.5 < 0) continue;
      const base = roadAt(Math.max(dRel, 0.25));
      const x = state.centerX + o.u * base.halfW;
      if (o.type === 'cone') drawCone(ctx, x, base.y, base.k);
      else drawHurdle(ctx, base.y, base.k);
    }
  }

  function drawCone(ctx, x, yBase, k) {
    const w = CONE_HALF_U * state.roadHalfPx * k;
    const hgt = CONE_H * state.unitPx * k;
    if (w < 0.6 || hgt < 0.6) return;
    const yTop = yBase - hgt;
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.ellipse(x, yBase, w * 1.5, w * 0.6, 0, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.moveTo(x, yTop);
    ctx.lineTo(x + w, yBase);
    ctx.lineTo(x - w, yBase);
    ctx.closePath();
    const g = ctx.createLinearGradient(x - w, yTop, x + w, yBase);
    g.addColorStop(0, '#ffb3d6');
    g.addColorStop(0.5, '#ff5d8f');
    g.addColorStop(1, '#c72a63');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x - w * 0.6, yBase - hgt * 0.3);
    ctx.lineTo(x + w * 0.6, yBase - hgt * 0.3);
    ctx.lineTo(x + w * 0.74, yBase - hgt * 0.48);
    ctx.lineTo(x - w * 0.74, yBase - hgt * 0.48);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, yTop);
    ctx.lineTo(x + w * 0.42, yBase);
    ctx.lineTo(x + w * 0.1, yBase);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.fill();
  }

  function drawHurdle(ctx, yBase, k) {
    const halfW = HURDLE_HALF_U * state.roadHalfPx * k;
    const hgt = HURDLE_H * state.unitPx * k;
    if (halfW < 1 || hgt < 1) return;
    const yTop = yBase - hgt;
    const left = state.centerX - halfW;
    const width = halfW * 2;
    roundRectPath(ctx, left, yTop, width, hgt, hgt * 0.35);
    ctx.fillStyle = '#ff7fb0';
    ctx.fill();
    ctx.save();
    ctx.clip();
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = Math.max(1.4, hgt * 0.2);
    const step = Math.max(4, hgt * 0.9);
    for (let sx = left - hgt; sx < left + width + hgt; sx += step) {
      ctx.beginPath();
      ctx.moveTo(sx, yBase);
      ctx.lineTo(sx + hgt, yTop);
      ctx.stroke();
    }
    ctx.restore();
    roundRectPath(ctx, left, yTop, width, hgt, hgt * 0.35);
    ctx.lineWidth = Math.max(1, hgt * 0.12);
    ctx.strokeStyle = 'rgba(150,20,70,0.7)';
    ctx.stroke();
  }

  function drawSprinkles(ctx) {
    for (let i = state.sprinkles.length - 1; i >= 0; i -= 1) {
      const s = state.sprinkles[i];
      if (s.taken) continue;
      const dRel = s.z - state.travel;
      if (dRel > VIEW || dRel + 1 < 0) continue;
      const base = roadAt(Math.max(dRel, 0.3));
      const x = state.centerX + s.u * base.halfW;
      const bob = 0.5 + (state.reducedMotion ? 0 : Math.sin(state.time * 3 + s.phase) * 0.12);
      const y = base.y - bob * state.unitPx * base.k;
      const r = clamp(0.13 * base.halfW, 1.5, 20);
      if (r < 1.5) continue;
      const color = SPRINKLE_COLORS[i % SPRINKLE_COLORS.length];
      ctx.save();
      ctx.translate(x, y);
      if (!state.reducedMotion) ctx.rotate(state.time * 1.6 + s.phase);
      const glow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 2.4);
      glow.addColorStop(0, rgba(color, 0.5));
      glow.addColorStop(1, rgba(color, 0));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.4, 0, TAU);
      ctx.fill();
      roundRectPath(ctx, -r, -r * 0.42, r * 2, r * 0.84, r * 0.42);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.beginPath();
      ctx.arc(-r * 0.35, -r * 0.12, r * 0.2, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawPlayer(ctx) {
    const r = state.playerR;
    const x = state.centerX + state.playerU * state.roadHalfPx;
    const baseY = state.nearY;
    const lift = state.playerY * state.unitPx;

    const shAlpha = clamp(0.34 - state.playerY * 0.11, 0.06, 0.34);
    ctx.globalAlpha = shAlpha;
    ctx.fillStyle = '#120611';
    ctx.beginPath();
    ctx.ellipse(x, baseY, r * (1.05 - state.playerY * 0.05), r * 0.32, 0, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;

    const stretch = clamp(1 + state.playerVY * 0.013, 0.86, 1.2);
    const rx = r / stretch;
    const ry = r * stretch;
    const cy = baseY - lift - ry * 0.86;

    ctx.save();
    ctx.translate(x, cy);
    ctx.rotate(state.lean);
    if (state.invuln > 0 && Math.floor(state.time * 14) % 2 === 0) ctx.globalAlpha = 0.45;

    const body = ctx.createRadialGradient(-rx * 0.32, -ry * 0.4, rx * 0.12, 0, 0, ry * 1.12);
    body.addColorStop(0, '#eafff7');
    body.addColorStop(0.42, '#5ff0c0');
    body.addColorStop(1, '#1c9d74');
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, TAU);
    ctx.fillStyle = body;
    ctx.fill();

    ctx.globalAlpha *= 0.25;
    ctx.fillStyle = '#0c4d38';
    ctx.beginPath();
    ctx.ellipse(0, ry * 0.62, rx * 0.72, ry * 0.3, 0, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = state.invuln > 0 && Math.floor(state.time * 14) % 2 === 0 ? 0.45 : 1;

    const eyeY = -ry * 0.16;
    const eyeDX = rx * 0.36;
    const eyeR = rx * 0.24;
    const look = clamp(state.lean * 2.2, -0.4, 0.4);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-eyeDX, eyeY, eyeR, 0, TAU);
    ctx.arc(eyeDX, eyeY, eyeR, 0, TAU);
    ctx.fill();
    ctx.fillStyle = '#12261f';
    ctx.beginPath();
    ctx.arc(-eyeDX + look * eyeR, eyeY + eyeR * 0.12, eyeR * 0.52, 0, TAU);
    ctx.arc(eyeDX + look * eyeR, eyeY + eyeR * 0.12, eyeR * 0.52, 0, TAU);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(-eyeDX + look * eyeR - eyeR * 0.18, eyeY - eyeR * 0.18, eyeR * 0.18, 0, TAU);
    ctx.arc(eyeDX + look * eyeR - eyeR * 0.18, eyeY - eyeR * 0.18, eyeR * 0.18, 0, TAU);
    ctx.fill();

    ctx.strokeStyle = 'rgba(12,60,44,0.6)';
    ctx.lineWidth = Math.max(1, rx * 0.09);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, ry * 0.18, rx * 0.28, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath();
    ctx.ellipse(-rx * 0.42, -ry * 0.46, rx * 0.22, ry * 0.14, -0.5, 0, TAU);
    ctx.fill();

    ctx.restore();
  }

  function drawParticles(ctx) {
    for (let i = 0; i < state.particles.length; i += 1) {
      const p = state.particles[i];
      ctx.globalAlpha = clamp(p.life / p.maxLife, 0, 1);
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
      drawDistantRoad(ctx);
      drawRoad(ctx);
      drawScenery(ctx);
      drawObstacles(ctx);
      drawSprinkles(ctx);
      drawPlayer(ctx);
    }
    drawParticles(ctx);
    ctx.restore();
    if (state.flash > 0.01) {
      ctx.fillStyle = `rgba(255,70,110,${(state.flash * 0.28).toFixed(3)})`;
      ctx.fillRect(0, 0, state.w, state.h);
    }
  }

  /* ---------- Loop ---------- */

  function tick(ts) {
    if (!state.running) return;
    const dt = Math.min(0.05, Math.max(0, (ts - state.lastTs) / 1000));
    state.lastTs = ts;
    update(dt);
    render();
    state.rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (state.running || state.systemPaused || state.userPaused) return;
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
    bindUI();
    bindInput();
    updateSoundButton();
    resize();
    render();
    firstFrameReady();
    registerSystemCallbacks();
    startLoop();
    await loadSave();
    updateMenuBest();
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
