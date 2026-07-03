// ============================================================
// CLAUDE PARA MENTES BRILLANTES — APP
// Autor: Alberti Juan | Licencia: MIT
// ============================================================

'use strict';

const state = {
  view: 'home',
  progress: JSON.parse(localStorage.getItem('mb_progress') || '{}'),
  online: navigator.onLine
};

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  setupConnectionDetection();
  setupInstall();
  render();
});

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ── CONNECTION DETECTION (el corazón: el "if") ─────────────
function setupConnectionDetection() {
  window.addEventListener('online', () => { state.online = true; updateConnBar(); });
  window.addEventListener('offline', () => { state.online = false; updateConnBar(); });
  updateConnBar();
}

function updateConnBar() {
  const bar = document.getElementById('conn-status');
  if (!bar) return;
  if (state.online) {
    bar.className = 'conn-status online';
    bar.innerHTML = '<span class="conn-dot"></span> Hay internet — modo completo';
  } else {
    bar.className = 'conn-status offline';
    bar.innerHTML = '<span class="conn-dot"></span> Sin internet — modo offline activo';
  }
}

// ── INSTALL ────────────────────────────────────────────────
let deferredPrompt;
function setupInstall() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-cta')?.classList.remove('hidden');
  });
}
function installApp() {
  if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(() => deferredPrompt = null); }
}

// ── PROGRESS ───────────────────────────────────────────────
function isDone(id) { return !!state.progress[id]; }
function markDone(id) {
  state.progress[id] = true;
  localStorage.setItem('mb_progress', JSON.stringify(state.progress));
  render();
  window.scrollTo(0, 0);
}
function doneCount() { return LECCIONES.filter(l => isDone(l.id)).length; }

// ── NAV ────────────────────────────────────────────────────
function goHome() { state.view = 'home'; render(); window.scrollTo(0,0); }
function openLesson(num) { state.view = 'lesson-' + num; render(); window.scrollTo(0,0); }

// ── COPY ───────────────────────────────────────────────────
function copyPrompt(btn, promptId) {
  const text = document.getElementById(promptId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ ¡Copiado! Ahora pegalo en Claude';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 Copiar este prompt'; btn.classList.remove('copied'); }, 2500);
  });
}

// ── RENDER ─────────────────────────────────────────────────
function render() {
  const bar = `<div id="conn-status" class="conn-status ${state.online ? 'online' : 'offline'}"></div>`;
  if (state.view === 'home') {
    document.body.querySelector('#conn-status')?.remove();
    document.getElementById('app').innerHTML = renderHome();
  } else if (state.view.startsWith('lesson-')) {
    const num = parseInt(state.view.split('-')[1]);
    document.getElementById('app').innerHTML = renderLesson(num);
  }
  // ensure conn bar exists
  if (!document.getElementById('conn-status')) {
    document.body.insertAdjacentHTML('afterbegin', bar);
  }
  updateConnBar();
}

function renderHome() {
  const done = doneCount();
  const pct = Math.round(done / LECCIONES.length * 100);

  const cards = LECCIONES.map(l => {
    const d = isDone(l.id);
    return `
      <div class="lesson-card ${d ? 'done' : ''}" onclick="openLesson(${l.num})">
        <div class="lc-emoji">${l.emoji}</div>
        <div class="lc-body">
          <div class="lc-num" style="color:${l.color}">LECCIÓN ${l.num}</div>
          <div class="lc-title">${l.titulo}</div>
          <div class="lc-gancho">${l.gancho}</div>
        </div>
        <div class="lc-check ${d ? 'done' : 'pending'}">${d ? '✓' : '○'}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="home">
      <div class="hero">
        <div class="hero-brain">🧠</div>
        <h1>Claude para<br><span class="grad">Mentes Brillantes</span></h1>
        <p>10 poderes que vas a aprender.<br>No existe el imposible.</p>
        <button id="install-cta" class="install-cta hidden" onclick="installApp()">📲 Instalar en el celular</button>
      </div>

      <div class="home-progress">
        <div class="hp-label">TUS PODERES DESBLOQUEADOS</div>
        <div class="hp-track"><div class="hp-fill" style="width:${pct}%"></div></div>
        <div class="hp-count">${done} de ${LECCIONES.length}</div>
      </div>

      <div class="lessons">${cards}</div>

      <div class="home-foot">
        Funciona con y sin internet 🌉<br>
        Creado por <strong>Alberti Juan</strong> · Libre y gratis
      </div>
    </div>
  `;
}

function renderLesson(num) {
  const l = LECCIONES.find(x => x.num === num);
  if (!l) return '';
  const d = isDone(l.id);
  const prev = num > 1 ? num - 1 : null;
  const next = num < LECCIONES.length ? num + 1 : null;
  const pid = 'prompt-' + l.id;

  return `
    <div class="lesson-detail">
      <div class="ld-back" onclick="goHome()">← Volver a los poderes</div>

      <div class="ld-header">
        <div class="ld-emoji">${l.emoji}</div>
        <div class="ld-num" style="color:${l.color}">LECCIÓN ${l.num} DE 10</div>
        <h1 class="ld-title">${l.titulo}</h1>
        <p class="ld-gancho">${l.gancho}</p>
      </div>

      <!-- LA IDEA -->
      <div class="block idea">
        <div class="block-icon-title">💡 La idea</div>
        <div class="block-text">${l.idea}</div>
      </div>

      <!-- EL PROMPT -->
      <div class="block prompt-block">
        <div class="block-icon-title">✨ Tu prompt mágico</div>
        <div class="prompt-text" id="${pid}">${l.prompt}</div>
        <button class="copy-big" onclick="copyPrompt(this, '${pid}')">📋 Copiar este prompt</button>
      </div>

      <!-- QUÉ PASA -->
      <div class="block result">
        <div class="block-icon-title">🎉 Qué va a pasar</div>
        <div class="block-text">${l.resultado}</div>
      </div>

      <!-- CONEXIÓN (el if) -->
      <div class="block conn">
        <div class="block-icon-title">🌉 Con y sin internet</div>
        <div class="conn-rows">
          <div class="conn-row on">
            <span class="conn-badge">HAY INTERNET</span>
            <span class="conn-row-text">${l.conexion.online}</span>
          </div>
          <div class="conn-row off">
            <span class="conn-badge">SIN INTERNET</span>
            <span class="conn-row-text">${l.conexion.offline}</span>
          </div>
        </div>
      </div>

      <!-- RETO -->
      <div class="block reto">
        <div class="block-icon-title">🏆 Tu reto</div>
        <div class="reto-text">${l.reto}</div>
        <div class="keyword-tag">🔑 ${l.palabra_clave}</div>
      </div>

      <!-- COMPLETAR -->
      <button class="complete-big ${d ? 'done' : ''}" onclick="markDone('${l.id}')">
        ${d ? '✓ ¡Poder desbloqueado!' : 'Desbloquear este poder'}
      </button>

      <!-- NAV -->
      <div class="ld-nav">
        ${prev ? `<button class="nav-b" onclick="openLesson(${prev})">← Anterior</button>` : `<button class="nav-b" onclick="goHome()">← Inicio</button>`}
        ${next ? `<button class="nav-b next" onclick="openLesson(${next})">Siguiente →</button>` : `<button class="nav-b next" onclick="goHome()">¡Terminé! 🎉</button>`}
      </div>
    </div>
  `;
}
