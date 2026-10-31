/* Pomoc w szkole – klasa 8
 * Prosta aplikacja bez serwera: ściągi, fiszki, quizy i powtórka błędów.
 * Treści znajdują się w plikach js/dane/*.js (tablica window.SUBJECTS).
 */
(() => {
  'use strict';

  const SUBJECTS = window.SUBJECTS || [];
  const app = document.getElementById('app');
  const STORE_KEY = 'pomoc8_v1';
  const EXAM_SIZE = 15;
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  // ---------- Zapis postępu (tylko w przeglądarce) ----------
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* tryb prywatny itp. */ }
  }
  const state = Object.assign({ best: {}, wrong: {}, exams: {} }, load());

  // ---------- Pomocnicze ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const findSubject = (id) => SUBJECTS.find((s) => s.id === id);
  const topicKey = (s, t) => `${s.id}/${t.id}`;
  const questionsOf = (s, t) => t.questions.map((q, i) => ({ ...q, key: `${s.id}/${t.id}/${i}`, topicName: t.name }));
  const badgeClass = (p) => (p == null ? '' : p >= 80 ? 'good' : p >= 50 ? 'mid' : 'low');
  const bar = (p, label = true) =>
    `<div class="bar"><span style="width:${p}%"></span></div>${label ? `<small class="muted">${p}% opanowane</small>` : ''}`;

  function subjectProgress(s) {
    const vals = s.topics.map((t) => state.best[topicKey(s, t)] || 0);
    return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0;
  }
  function crumbs(items) {
    return `<div class="crumbs"><a href="#/">Start</a>${items
      .map(([label, href]) => ` › ${href ? `<a href="${href}">${esc(label)}</a>` : esc(label)}`)
      .join('')}</div>`;
  }
  function setTitle(t) {
    document.title = t ? `${t} – Pomoc w szkole` : 'Pomoc w szkole – klasa 8';
  }
  const PRAISE = ['Świetnie! 🎉', 'Brawo! 👏', 'Dobrze! ✅', 'Super! ⭐', 'Tak trzymaj! 💪'];
  const praise = () => PRAISE[Math.floor(Math.random() * PRAISE.length)];

  // Obsługa klawiatury: jedna aktywna funkcja naraz
  let keyHandler = null;
  document.addEventListener('keydown', (e) => {
    if (keyHandler && !e.ctrlKey && !e.metaKey && !e.altKey) keyHandler(e);
  });

  // ---------- Router ----------
  function route() {
    keyHandler = null;
    window.scrollTo(0, 0);
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (p[0] === 'powtorka') return review();
    if (p[0] === 'zrodla') return sources();
    if (p[0] === 's') {
      const s = findSubject(p[1]);
      if (s) {
        if (p.length === 2) return subject(s);
        if (p[2] === 'egzamin') return exam(s);
        if (p[2] === 't') {
          const t = s.topics.find((x) => x.id === p[3]);
          if (t) return topic(s, t, p[4] || 'teoria');
          return subject(s);
        }
      }
    }
    home();
  }
  window.addEventListener('hashchange', route);

  // ---------- Widoki ----------
  function home() {
    setTitle('');
    const wrongCount = Object.keys(state.wrong).filter(resolveKey).length;
    app.innerHTML = `
      <section class="hero">
        <h1>Cześć! 👋</h1>
        <p>Wybierz przedmiot. W każdym dziale znajdziesz <b>ściągę</b>, <b>fiszki</b> i <b>quiz</b>.
        Pytania, na które odpowiesz źle, trafią do powtórki.</p>
      </section>
      <div class="grid">
        ${SUBJECTS.map((s) => `
          <a class="card" href="#/s/${s.id}" style="--accent:${s.color}">
            <span class="icon">${s.icon}</span>
            <h2>${esc(s.name)}</h2>
            <p>${s.topics.length} działów · ${s.topics.reduce((n, t) => n + t.questions.length, 0)} pytań</p>
            ${bar(subjectProgress(s))}
          </a>`).join('')}
      </div>
      <a class="card review ${wrongCount ? '' : 'disabled'}" href="#/powtorka">
        <span>🔁 Powtórka błędów</span><span class="badge ${wrongCount ? 'low' : ''}">${wrongCount}</span>
      </a>
      <p class="muted" style="margin-top:22px">
        <a href="#/zrodla">📋 Na jakiej podstawie przygotowano materiał</a> ·
        <a href="#/" id="reset">Wyzeruj postęp</a>
      </p>`;
    document.getElementById('reset').onclick = (e) => {
      e.preventDefault();
      if (confirm('Na pewno usunąć wszystkie wyniki i listę błędów?')) {
        state.best = {}; state.wrong = {}; state.exams = {};
        save(); home();
      }
    };
  }

  function subject(s) {
    setTitle(s.name);
    const last = state.exams[s.id];
    app.innerHTML = `
      ${crumbs([[s.name]])}
      <h1>${s.icon} ${esc(s.name)}</h1>
      <div style="--accent:${s.color}">${bar(subjectProgress(s))}</div>
      <p>
        <a class="btn primary" href="#/s/${s.id}/egzamin">📝 Test próbny (${EXAM_SIZE} pytań)</a>
        ${last != null ? `<span class="muted">ostatni wynik: ${last}%</span>` : ''}
      </p>
      <ul class="topics">
        ${s.topics.map((t) => {
          const b = state.best[topicKey(s, t)];
          return `<li><a href="#/s/${s.id}/t/${t.id}">
            <span>${esc(t.name)}</span>
            <span class="badge ${badgeClass(b)}">${b == null ? 'nowy' : b + '%'}</span>
          </a></li>`;
        }).join('')}
      </ul>`;
  }

  function topic(s, t, tab) {
    setTitle(t.name);
    const base = `#/s/${s.id}/t/${t.id}`;
    const hasCards = t.flashcards && t.flashcards.length;
    if (tab === 'fiszki' && !hasCards) tab = 'teoria';
    app.innerHTML = `
      ${crumbs([[s.name, `#/s/${s.id}`], [t.name]])}
      <h1>${esc(t.name)}</h1>
      <nav class="tabs">
        <a href="${base}/teoria" class="${tab === 'teoria' ? 'on' : ''}">📖 Ściąga</a>
        ${hasCards ? `<a href="${base}/fiszki" class="${tab === 'fiszki' ? 'on' : ''}">🃏 Fiszki (${t.flashcards.length})</a>` : ''}
        <a href="${base}/quiz" class="${tab === 'quiz' ? 'on' : ''}">✅ Quiz (${t.questions.length})</a>
      </nav>
      <div id="pane"></div>`;
    const pane = document.getElementById('pane');
    if (tab === 'fiszki') return flashcards(pane, t.flashcards);
    if (tab === 'quiz') {
      return quiz(pane, shuffle(questionsOf(s, t)), {
        saveKey: topicKey(s, t),
        backHref: `#/s/${s.id}`,
        backLabel: `Wróć do: ${s.name}`,
      });
    }
    pane.innerHTML = `${t.basis ? `<p class="basis">📋 <b>Na jakiej podstawie:</b> ${esc(t.basis)} <a href="#/zrodla">Źródła</a></p>` : ''}
      <article class="theory">${t.theory}</article>
      <a class="btn primary" href="${base}/quiz">Sprawdź się w quizie →</a>
      ${hasCards ? `<a class="btn" href="${base}/fiszki">Powtórz z fiszkami</a>` : ''}`;
  }

  function exam(s) {
    setTitle(`Test – ${s.name}`);
    app.innerHTML = `${crumbs([[s.name, `#/s/${s.id}`], ['Test próbny']])}
      <h1>📝 Test próbny: ${esc(s.name)}</h1><div id="pane"></div>`;
    const all = s.topics.flatMap((t) => questionsOf(s, t));
    quiz(document.getElementById('pane'), shuffle(all).slice(0, EXAM_SIZE), {
      showTopic: true,
      onFinish: (pct) => { state.exams[s.id] = pct; save(); },
      backHref: `#/s/${s.id}`,
      backLabel: `Wróć do: ${s.name}`,
      againHref: `#/s/${s.id}/egzamin`,
    });
  }

  function sources() {
    setTitle('Źródła');
    const info = window.SOURCES || { html: '' };
    app.innerHTML = `${crumbs([['Źródła']])}<h1>📋 Na jakiej podstawie?</h1><article class="theory">${info.html}</article>
      <a class="btn" href="#/">Wróć na start</a>`;
  }

  function resolveKey(key) {
    const [sid, tid, idx] = key.split('/');
    const s = findSubject(sid);
    const t = s && s.topics.find((x) => x.id === tid);
    const q = t && t.questions[+idx];
    return q ? { ...q, key, topicName: `${s.name} · ${t.name}` } : null;
  }

  function review() {
    setTitle('Powtórka błędów');
    const qs = Object.keys(state.wrong).map(resolveKey).filter(Boolean);
    app.innerHTML = `${crumbs([['Powtórka błędów']])}<h1>🔁 Powtórka błędów</h1><div id="pane"></div>`;
    const pane = document.getElementById('pane');
    if (!qs.length) {
      pane.innerHTML = `<div class="result"><p class="big">🎉</p><p>Nie masz żadnych błędów do poprawy!</p>
        <a class="btn primary" href="#/">Wróć na start</a></div>`;
      return;
    }
    pane.insertAdjacentHTML('beforebegin', `<p class="muted">Poprawna odpowiedź usuwa pytanie z listy.</p>`);
    quiz(pane, shuffle(qs), { showTopic: true, backHref: '#/', backLabel: 'Wróć na start', againHref: '#/powtorka' });
  }

  // ---------- Quiz ----------
  function quiz(pane, qs, opts) {
    let i = 0;
    let score = 0;
    const mistakes = [];

    function show() {
      const q = qs[i];
      const order = q.noShuffle ? q.options.map((_, k) => k) : shuffle(q.options.map((_, k) => k));
      pane.innerHTML = `
        <div class="quiz">
          <div class="qhead"><span>Pytanie ${i + 1} z ${qs.length}</span><span>Punkty: ${score}</span></div>
          ${bar(Math.round((i / qs.length) * 100), false)}
          ${opts.showTopic ? `<div class="qtopic">${esc(q.topicName)}</div>` : ''}
          <h2 class="question">${esc(q.q)}</h2>
          <div class="options">
            ${order.map((k, n) => `<button class="opt" data-k="${k}"><span class="k">${LETTERS[n]}</span><span>${esc(q.options[k])}</span></button>`).join('')}
          </div>
          <div id="fb"></div>
        </div>`;
      const buttons = [...pane.querySelectorAll('.opt')];
      buttons.forEach((b) => (b.onclick = () => answer(+b.dataset.k)));
      keyHandler = (e) => {
        const n = LETTERS.indexOf(e.key.toUpperCase());
        const d = parseInt(e.key, 10) - 1;
        const idx = n >= 0 ? n : d;
        if (idx >= 0 && idx < buttons.length) buttons[idx].click();
      };
    }

    function answer(k) {
      const q = qs[i];
      const ok = k === q.answer;
      pane.querySelectorAll('.opt').forEach((b) => {
        b.disabled = true;
        const kk = +b.dataset.k;
        if (kk === q.answer) b.classList.add('correct');
        else if (kk === k) b.classList.add('wrong');
      });
      if (ok) {
        score++;
        delete state.wrong[q.key];
      } else {
        mistakes.push(q);
        state.wrong[q.key] = 1;
      }
      save();
      const last = i + 1 >= qs.length;
      pane.querySelector('#fb').innerHTML = `
        <div class="feedback ${ok ? 'ok' : 'bad'}">
          <strong>${ok ? praise() : `Niestety nie. Poprawna odpowiedź: ${esc(q.options[q.answer])}`}</strong>
          ${q.explain ? `<p>${esc(q.explain)}</p>` : ''}
        </div>
        <button class="btn primary" id="next">${last ? 'Zobacz wynik' : 'Dalej →'}</button>`;
      const next = pane.querySelector('#next');
      next.onclick = () => { i++; last ? finish() : show(); };
      next.focus();
      keyHandler = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next.click(); } };
    }

    function finish() {
      keyHandler = null;
      const pct = Math.round((score / qs.length) * 100);
      if (opts.saveKey) {
        state.best[opts.saveKey] = Math.max(state.best[opts.saveKey] || 0, pct);
        save();
      }
      if (opts.onFinish) opts.onFinish(pct);
      const msg = pct === 100 ? 'Perfekcyjnie! 🏆' : pct >= 80 ? 'Bardzo dobrze! 🎉' : pct >= 50 ? 'Nieźle, ale warto powtórzyć. 💪' : 'Przeczytaj ściągę i spróbuj jeszcze raz. 📖';
      pane.innerHTML = `
        <div class="result">
          <p class="big">${pct}%</p>
          <p>${score} z ${qs.length} poprawnych · ${msg}</p>
          ${mistakes.length ? '<button class="btn primary" id="fix">Popraw błędy</button>' : ''}
          <button class="btn" id="again">Jeszcze raz</button>
          <a class="btn" href="${opts.backHref}">${esc(opts.backLabel)}</a>
        </div>
        ${mistakes.length ? `<div class="mistakes"><h2>Do zapamiętania</h2><ol>
          ${mistakes.map((q) => `<li><b>${esc(q.q)}</b><br>✔ ${esc(q.options[q.answer])}${q.explain ? `<br><span class="muted">${esc(q.explain)}</span>` : ''}</li>`).join('')}
        </ol></div>` : ''}`;
      const fix = pane.querySelector('#fix');
      if (fix) fix.onclick = () => quiz(pane, shuffle(mistakes), { ...opts, saveKey: null, onFinish: null });
      pane.querySelector('#again').onclick = () => {
        if (opts.againHref && location.hash !== opts.againHref) location.hash = opts.againHref;
        else if (opts.againHref) route();
        else quiz(pane, shuffle(qs), opts);
      };
    }

    show();
  }

  // ---------- Fiszki ----------
  function flashcards(pane, list) {
    let deck = list.slice();
    let i = 0;
    let flipped = false;

    function show() {
      const [front, back] = deck[i];
      pane.innerHTML = `
        <div class="flash ${flipped ? 'flipped' : ''}" tabindex="0" role="button" aria-label="Odwróć fiszkę">
          <div class="inner">
            <div class="face front">${esc(front)}</div>
            <div class="face back">${esc(back)}</div>
          </div>
        </div>
        <p class="hint">Kliknij kartę (lub spację), aby ją odwrócić · strzałki ← → zmieniają kartę</p>
        <div class="row">
          <button class="btn" id="prev">← Poprzednia</button>
          <span class="muted">${i + 1} / ${deck.length}</span>
          <button class="btn primary" id="nxt">Następna →</button>
          <button class="btn" id="mix">🔀 Tasuj</button>
        </div>`;
      const card = pane.querySelector('.flash');
      card.onclick = flip;
      pane.querySelector('#prev').onclick = () => go(-1);
      pane.querySelector('#nxt').onclick = () => go(1);
      pane.querySelector('#mix').onclick = () => { deck = shuffle(deck); i = 0; flipped = false; show(); };
    }
    function flip() {
      flipped = !flipped;
      pane.querySelector('.flash').classList.toggle('flipped', flipped);
    }
    function go(d) {
      i = (i + d + deck.length) % deck.length;
      flipped = false;
      show();
    }
    keyHandler = (e) => {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
    };
    show();
  }

  route();
})();
