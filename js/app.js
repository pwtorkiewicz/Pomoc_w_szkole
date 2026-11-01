/* Pomoc w szkole – wspólny silnik wszystkich ścieżek (klasa 3, klasa 4, klasa 8, egzamin ósmoklasisty).
 * Prosta aplikacja bez serwera: lekcje, ściągi, fiszki, quizy i powtórka błędów.
 * Ścieżkę wybiera strona HTML (<body data-track="…">, lista w js/sciezki.js); strona wczytuje tylko
 * swoje treści (tablica window.SUBJECTS, window.EXERCISES, window.LESSONS).
 */
(() => {
  'use strict';

  const SUBJECTS = window.SUBJECTS || [];
  const app = document.getElementById('app');
  const TRACKS = window.TRACKS || [];
  const TRACK = TRACKS.find((t) => t.id === document.body.dataset.track)
    || TRACKS.find((t) => t.exam) || { id: 'egzamin8', name: 'Egzamin ósmoklasisty', storeKey: 'pomoc8_v2', exam: true };
  // Postęp każdej ścieżki zapisujemy osobno (ścieżka egzaminacyjna zachowuje dawny klucz 'pomoc8_v2').
  const STORE_KEY = TRACK.storeKey;
  try { localStorage.setItem(window.TRACK_LAST_KEY || 'pomoc_sciezka', TRACK.id); } catch (e) { /* brak dostępu */ }
  // Nazwy zależne od ścieżki: przy egzaminie „test próbny”, w zwykłej klasie „sprawdzian”.
  const WORDS = TRACK.exam
    ? { test: 'Test próbny', practice: 'Ćwiczenia jak na egzaminie' }
    : { test: 'Sprawdzian z przedmiotu', practice: 'Ćwiczenia' };
  const EXAM_SIZE = 15;
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  // ---------- Zapis postępu (tylko w przeglądarce) ----------
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* tryb prywatny itp. */ }
  }
  const state = Object.assign({ best: {}, wrong: {}, exams: {}, lessons: {}, tasks: {}, sets: {} }, load());

  // Jednorazowa migracja: dawniej błędy zapisywano jako „przedmiot/dział/numer pytania”.
  // Numer zamieniamy na stałe id pytania (kolejność pytań w chwili migracji jest ta sama co wcześniej).
  if (!state.idKeys) {
    const wrong = {};
    for (const key of Object.keys(state.wrong)) {
      const [sid, tid, part] = key.split('/');
      const t = (SUBJECTS.find((x) => x.id === sid) || { topics: [] }).topics.find((x) => x.id === tid);
      const q = t && (/^\d+$/.test(part) ? t.questions[+part] : t.questions.find((x) => x.id === part));
      if (q && q.id) wrong[`${sid}/${tid}/${q.id}`] = 1;
    }
    state.wrong = wrong;
    state.idKeys = 1;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* brak dostępu */ }
  }
  const LESSONS = window.LESSONS || {};
  const EXERCISES = window.EXERCISES || [];
  // Tryby ćwiczeń „jak na egzaminie” – zestaw = tekst (albo nagranie) + zadania.
  const MODES = {
    czytanie: { icon: '📰', name: 'Czytanie ze zrozumieniem', about: 'Jak w części I arkusza: przeczytaj tekst i rozwiąż zadania. Do tekstu możesz wracać, ile chcesz. Zadania otwarte ocenisz sam według przykładowej odpowiedzi.' },
    reading: { icon: '📖', name: 'Reading – teksty', about: 'Rozumienie tekstów pisanych, jak w arkuszu CKE: główna myśl, intencja autora, szczegóły, dobieranie. Polecenia są po polsku, teksty po angielsku.' },
    listening: { icon: '🎧', name: 'Listening – nagrania', about: 'Rozumienie ze słuchu. Nagrania czyta głos syntezatora mowy w przeglądarce. Na egzaminie każde nagranie słyszysz dwa razy – tu też tak spróbuj. Transkrypcję zobaczysz po sprawdzeniu odpowiedzi.' },
    srodki: { icon: '🧩', name: 'Środki językowe', about: 'Gramatyka i słownictwo w formacie CKE: luki w tekście, wybór formy, przekład fragmentów zdań, parafraza. W zadaniach otwartych liczy się pełna poprawność pisowni.' },
  };
  const setsOf = (s, mode) => EXERCISES.filter((e) => e.subject === s.id && (!mode || e.mode === mode));
  const setKey = (e) => `${e.subject}/${e.mode}/${e.id}`;
  const synth = window.speechSynthesis || null;
  const lessonOf = (s, t) => LESSONS[`${s.id}/${t.id}`];

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
  // Każde pytanie ma stałe pole id – klucz nie zależy od kolejności pytań w pliku.
  const questionsOf = (s, t) => t.questions.map((q) => ({ ...q, key: `${s.id}/${t.id}/${q.id}`, topicName: t.name }));
  const tasksOf = (s, t) => (t.tasks || []).map((x) => ({ ...x, key: `${s.id}/${t.id}/${x.id}`, topicName: t.name }));
  const tasksOfSubject = (s) => s.topics.flatMap((t) => tasksOf(s, t));
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
    document.title = t ? `${t} – ${TRACK.name} – Pomoc w szkole` : `${TRACK.name} – Pomoc w szkole`;
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
    if (synth) synth.cancel();
    window.scrollTo(0, 0);
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (p[0] === 'powtorka') return review();
    if (p[0] === 'zrodla') return sources();
    if (p[0] === 's') {
      const s = findSubject(p[1]);
      if (s) {
        if (p.length === 2) return subject(s);
        if (p[2] === 'egzamin') return exam(s);
        if (p[2] === 'zadania' && tasksOfSubject(s).length) return subjectTasks(s);
        if (p[2] === 'cw' && MODES[p[3]] && setsOf(s, p[3]).length) {
          const e = p[4] && setsOf(s, p[3]).find((x) => x.id === p[4]);
          return e ? exerciseSet(s, e) : exerciseList(s, p[3]);
        }
        if (p[2] === 't') {
          const t = s.topics.find((x) => x.id === p[3]);
          if (t) return topic(s, t, p[4] || (lessonOf(s, t) ? 'lekcja' : 'teoria'));
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
    if (!SUBJECTS.length) {
      app.innerHTML = `
        <section class="hero">
          <h1>${TRACK.icon || ''} ${esc(TRACK.name)}</h1>
          <p>${esc(TRACK.about || '')}</p>
        </section>
        <div class="result"><p class="big">🚧</p>
          <p>Materiały dla tej ścieżki są w przygotowaniu. Powstają według aktualnej podstawy programowej – wkrótce pojawią się tu przedmioty i działy.</p>
          <a class="btn primary" href="index.html">Wybierz inną ścieżkę</a></div>`;
      return;
    }
    app.innerHTML = `
      <section class="hero">
        <h1>Cześć! 👋</h1>
        <p>${TRACK.intro || 'Wybierz przedmiot. W każdym dziale znajdziesz <b>ściągę</b>, <b>fiszki</b> i <b>quiz</b>. Pytania, na które odpowiesz źle, trafią do powtórki.'}</p>
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
        <a href="index.html">🔀 Zmień klasę</a> ·
        <a href="#/" id="reset">Wyzeruj postęp</a>
      </p>`;
    document.getElementById('reset').onclick = (e) => {
      e.preventDefault();
      if (confirm(`Na pewno usunąć wszystkie wyniki i listę błędów w ścieżce „${TRACK.name}”?`)) {
        state.best = {}; state.wrong = {}; state.exams = {}; state.tasks = {}; state.sets = {};
        save(); home();
      }
    };
  }

  function subject(s) {
    setTitle(s.name);
    const last = state.exams[s.id];
    const allTasks = tasksOfSubject(s);
    app.innerHTML = `
      ${crumbs([[s.name]])}
      <h1>${s.icon} ${esc(s.name)}</h1>
      <div style="--accent:${s.color}">${bar(subjectProgress(s))}</div>
      ${s.exam ? `<p class="basis">📅 <b>Egzamin:</b> ${s.exam} <a href="#/zrodla">Źródła</a></p>` : ''}
      <p>
        <a class="btn primary" href="#/s/${s.id}/egzamin">📝 ${WORDS.test} (${Math.min(EXAM_SIZE, s.topics.reduce((n, t) => n + t.questions.length, 0))} pytań)</a>
        ${last != null ? `<span class="muted">ostatni wynik: ${last}%</span>` : ''}
      </p>
      ${allTasks.length || setsOf(s).length ? `<h2 class="sec">${WORDS.practice}</h2>
      <div class="modes">
        ${allTasks.length ? `<a class="mode" href="#/s/${s.id}/zadania"><span class="icon">✍️</span><b>Zadania otwarte</b>
          <small class="muted">${allTasks.length} zadań · ${taskScore(allTasks)}</small></a>` : ''}
        ${Object.keys(MODES).filter((m) => setsOf(s, m).length).map((m) => {
          const list = setsOf(s, m);
          const done = list.filter((e) => state.sets[setKey(e)] != null).length;
          return `<a class="mode" href="#/s/${s.id}/cw/${m}"><span class="icon">${MODES[m].icon}</span><b>${MODES[m].name}</b>
            <small class="muted">${list.length} zestawów${done ? ` · zrobione ${done}` : ''}</small></a>`;
        }).join('')}
      </div>
      <h2 class="sec">Działy</h2>` : ''}
      <ul class="topics">
        ${s.topics.map((t) => {
          const b = state.best[topicKey(s, t)];
          return `<li><a href="#/s/${s.id}/t/${t.id}">
            <span>${state.lessons[topicKey(s, t)] ? '🎓 ' : ''}${esc(t.name)}</span>
            <span class="badge ${badgeClass(b)}">${b == null ? 'nowy' : b + '%'}</span>
          </a></li>`;
        }).join('')}
      </ul>`;
  }

  function topic(s, t, tab) {
    setTitle(t.name);
    const base = `#/s/${s.id}/t/${t.id}`;
    const hasCards = t.flashcards && t.flashcards.length;
    const lesson = lessonOf(s, t);
    if (tab === 'fiszki' && !hasCards) tab = 'teoria';
    if (tab === 'lekcja' && !lesson) tab = 'teoria';
    const tasks = tasksOf(s, t);
    if (tab === 'zadania' && !tasks.length) tab = 'teoria';
    app.innerHTML = `
      ${crumbs([[s.name, `#/s/${s.id}`], [t.name]])}
      <h1>${esc(t.name)}</h1>
      <nav class="tabs">
        ${lesson ? `<a href="${base}/lekcja" class="${tab === 'lekcja' ? 'on' : ''}">🎓 Lekcja</a>` : ''}
        <a href="${base}/teoria" class="${tab === 'teoria' ? 'on' : ''}">📖 Ściąga</a>
        ${hasCards ? `<a href="${base}/fiszki" class="${tab === 'fiszki' ? 'on' : ''}">🃏 Fiszki (${t.flashcards.length})</a>` : ''}
        <a href="${base}/quiz" class="${tab === 'quiz' ? 'on' : ''}">✅ Quiz (${t.questions.length})</a>
        ${tasks.length ? `<a href="${base}/zadania" class="${tab === 'zadania' ? 'on' : ''}">✍️ Zadania otwarte (${tasks.length})</a>` : ''}
      </nav>
      <div id="pane"></div>`;
    const pane = document.getElementById('pane');
    if (tab === 'lekcja') return lessonView(pane, lesson, s, t, base);
    if (tab === 'fiszki') return flashcards(pane, t.flashcards);
    if (tab === 'zadania') return openTasks(pane, tasks, { math: s.id === 'matematyka', backHref: `#/s/${s.id}`, backLabel: `Wróć do: ${s.name}` });
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
      ${hasCards ? `<a class="btn" href="${base}/fiszki">Powtórz z fiszkami</a>` : ''}
      ${tasks.length ? `<a class="btn" href="${base}/zadania">✍️ Zadania otwarte</a>` : ''}`;
  }

  // ---------- Zadania otwarte (rozwiązanie krok po kroku + samoocena) ----------
  function taskScore(list) {
    const done = list.filter((x) => state.tasks[x.key] != null);
    if (!done.length) return 'jeszcze nie rozwiązane';
    const got = done.reduce((n, x) => n + state.tasks[x.key], 0);
    const max = done.reduce((n, x) => n + x.points, 0);
    return `rozwiązane ${done.length} z ${list.length} · ${got}/${max} pkt`;
  }

  function subjectTasks(s) {
    setTitle(`Zadania otwarte – ${s.name}`);
    app.innerHTML = `${crumbs([[s.name, `#/s/${s.id}`], ['Zadania otwarte']])}
      <h1>✍️ Zadania otwarte: ${esc(s.name)}</h1><div id="pane"></div>`;
    openTasks(document.getElementById('pane'), shuffle(tasksOfSubject(s)), { showTopic: true, math: s.id === 'matematyka', backHref: `#/s/${s.id}`, backLabel: `Wróć do: ${s.name}` });
  }

  function openTasks(pane, list, opts) {
    let i = 0;
    let earned = 0;
    const pts = (n) => `${n} pkt`;
    function show() {
      const x = list[i];
      let shown = 0;
      const prev = state.tasks[x.key];
      pane.innerHTML = `
        <div class="quiz task">
          <div class="qhead"><span>Zadanie ${i + 1} z ${list.length}</span><span>${pts(x.points)}</span></div>
          ${bar(Math.round((i / list.length) * 100), false)}
          ${opts.showTopic ? `<div class="qtopic">${esc(x.topicName)}</div>` : ''}
          <h2 class="question">${esc(x.q)}</h2>
          ${x.svg ? `<figure class="vis">${x.svg}</figure>` : ''}
          <p class="muted">${opts.math ? 'Rozwiąż na kartce – jak na egzaminie zapisz cały tok rozumowania. Potem porównaj z rozwiązaniem.' : 'Napisz odpowiedź na kartce, potem porównaj ją z przykładową odpowiedzią i zasadami oceniania.'}${prev != null ? ` Ostatnio: ${prev}/${x.points} pkt.` : ''}</p>
          <ol class="steps"></ol>
          <div class="row" id="ctl">
            <button class="btn" id="hint">💡 Podpowiedź</button>
            <button class="btn primary" id="all">${opts.math ? 'Pokaż rozwiązanie' : 'Pokaż odpowiedź'}</button>
          </div>
          <div id="after"></div>
        </div>`;
      const ol = pane.querySelector('.steps');
      const addStep = () => { if (shown < x.steps.length) ol.insertAdjacentHTML('beforeend', `<li>${esc(x.steps[shown++])}</li>`); };
      pane.querySelector('#hint').onclick = () => { addStep(); if (shown >= x.steps.length) reveal(); };
      pane.querySelector('#all').onclick = () => { while (shown < x.steps.length) addStep(); reveal(); };
      keyHandler = null;
      function reveal() {
        pane.querySelector('#ctl').remove();
        pane.querySelector('#after').innerHTML = `
          <div class="feedback ok"><strong>${opts.math ? 'Odpowiedź' : 'Przykładowa odpowiedź'}:</strong> ${esc(x.answer)}</div>
          <div class="scoring"><b>Jak ocenić rozwiązanie</b><ul>${x.scoring.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
            <p class="muted">${opts.math ? 'Punktacja orientacyjna, w stylu zasad oceniania CKE: liczy się poprawny tok rozumowania, nie tylko wynik.' : 'Punktacja orientacyjna, w stylu zasad oceniania CKE. Twoja odpowiedź może brzmieć inaczej – liczy się, czy zawiera te same elementy.'}</p></div>
          <p><b>Ile punktów przyznajesz sobie?</b></p>
          <div class="row" id="self">${Array.from({ length: x.points + 1 }, (_, n) => `<button class="btn" data-n="${n}">${n}</button>`).join('')}</div>`;
        pane.querySelectorAll('#self .btn').forEach((b) => (b.onclick = () => {
          const n = +b.dataset.n;
          state.tasks[x.key] = n;
          save();
          earned += n;
          const last = i + 1 >= list.length;
          pane.querySelector('#self').outerHTML = `<p class="feedback ${n === x.points ? 'ok' : 'bad'}">${n === x.points ? praise() : 'Przejrzyj kroki rozwiązania jeszcze raz – następnym razem pójdzie lepiej.'}</p>
            <button class="btn primary" id="next">${last ? 'Podsumowanie' : 'Następne zadanie →'}</button>`;
          const next = pane.querySelector('#next');
          next.onclick = () => { i++; last ? finish() : (show(), window.scrollTo(0, 0)); };
          next.focus();
        }));
      }
    }
    function finish() {
      const max = list.reduce((n, x) => n + x.points, 0);
      pane.innerHTML = `<div class="result"><p class="big">${earned}/${max}</p><p>punktów według twojej samooceny</p>
        <button class="btn primary" id="again">Jeszcze raz</button>
        <a class="btn" href="${opts.backHref}">${esc(opts.backLabel)}</a></div>`;
      pane.querySelector('#again').onclick = () => { i = 0; earned = 0; show(); };
    }
    show();
  }

  // ---------- Ćwiczenia jak na egzaminie: tekst/nagranie + zadania ----------
  function exerciseList(s, mode) {
    const m = MODES[mode];
    setTitle(`${m.name} – ${s.name}`);
    const list = setsOf(s, mode);
    app.innerHTML = `${crumbs([[s.name, `#/s/${s.id}`], [m.name]])}
      <h1>${m.icon} ${esc(m.name)}</h1>
      <p class="basis">${esc(m.about)}</p>
      ${mode === 'listening' && !synth ? '<p class="feedback bad">Ta przeglądarka nie ma syntezatora mowy. Zadania zrobisz, czytając transkrypcję.</p>' : ''}
      <ul class="topics">
        ${list.map((e) => {
          const b = state.sets[setKey(e)];
          return `<li><a href="#/s/${s.id}/cw/${mode}/${e.id}">
            <span>${esc(e.title)}<br><small class="muted">${esc(e.kind || '')} · ${e.items.length} zadań</small></span>
            <span class="badge ${badgeClass(b)}">${b == null ? 'nowy' : b + '%'}</span>
          </a></li>`;
        }).join('')}
      </ul>`;
  }

  // Porównanie odpowiedzi wpisanej: bez wielkości liter, zbędnych spacji, końcowej kropki; apostrofy ujednolicone.
  const normAnswer = (t) => String(t).toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '').trim();
  // Poza środkami językowymi (tam CKE wymaga pełnej poprawności) brak polskich znaków nie odbiera punktu.
  const PL = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };
  const loose = (t) => normAnswer(t).replace(/[ąćęłńóśźż]/g, (c) => PL[c]);
  const itemPoints = (it) => (it.type === 'open' ? it.points : 1);

  function speakRecording(rec, rate, onEnd) {
    if (!synth) return;
    synth.cancel();
    const voices = synth.getVoices().filter((v) => /^en([-_]|$)/i.test(v.lang));
    const gb = voices.filter((v) => /GB/i.test(v.lang));
    const pool = gb.length ? gb : voices;
    const who = [...new Set(rec.lines.map((l) => l.who || ''))];
    rec.lines.forEach((l, k) => {
      const u = new SpeechSynthesisUtterance(l.text);
      const n = who.indexOf(l.who || '');
      u.lang = (pool[0] && pool[0].lang) || 'en-GB';
      if (pool.length) u.voice = pool[n % pool.length];
      // różne głosy rozmówców: inny głos (jeśli jest) albo inna wysokość
      u.pitch = rec.voices && rec.voices[l.who] === 'm' ? 0.85 : rec.voices && rec.voices[l.who] === 'f' ? 1.2 : 1;
      u.rate = rate;
      if (k === rec.lines.length - 1) u.onend = onEnd;
      synth.speak(u);
    });
  }

  function exerciseSet(s, e) {
    const m = MODES[e.mode];
    const key = setKey(e);
    setTitle(e.title);
    const listening = e.mode === 'listening';
    const transcript = listening ? e.audio.map((r, k) => `<h3>${esc(r.label || `Nagranie ${k + 1}`)}</h3>${r.lines.map((l) => `<p>${l.who ? `<b>${esc(l.who)}:</b> ` : ''}${esc(l.text)}</p>`).join('')}`).join('') : '';
    app.innerHTML = `${crumbs([[s.name, `#/s/${s.id}`], [m.name, `#/s/${s.id}/cw/${e.mode}`], [e.title]])}
      <h1>${m.icon} ${esc(e.title)}</h1>
      ${e.kind ? `<div class="qtopic">${esc(e.kind)}</div>` : ''}
      ${e.intro ? `<p>${esc(e.intro)}</p>` : ''}
      ${listening ? `<div class="audio">
          ${e.audio.map((r, k) => `<div class="row"><button class="btn primary play" data-k="${k}">▶ ${esc(r.label || `Nagranie ${k + 1}`)}</button><span class="muted" id="cnt${k}">jeszcze nie odsłuchane</span></div>`).join('')}
          <div class="row"><button class="btn" id="stop">■ Zatrzymaj</button>
            <label class="muted"><input type="checkbox" id="slow"> wolniej</label></div>
          ${synth ? '' : '<p class="feedback bad">Ta przeglądarka nie ma syntezatora mowy. Otwórz transkrypcję poniżej.</p>'}
          <details class="transcript" id="tr"><summary>Transkrypcja (zajrzyj po rozwiązaniu albo gdy nie słychać nagrania)</summary>${transcript}</details>
        </div>` : `<article class="passage">${e.text}</article>`}
      ${e.source ? `<p class="muted source">Źródło: ${esc(e.source)}</p>` : ''}
      <div class="sheet">
        ${e.items.map((it, n) => `
          <div class="item" data-n="${n}">
            <div class="qhead"><span><b>Zadanie ${n + 1}.</b></span><span>${itemPoints(it)} pkt</span></div>
            <p class="question">${esc(it.q)}</p>
            ${it.svg ? `<figure class="vis">${it.svg}</figure>` : ''}
            ${it.type === 'input' ? `<input type="text" class="gap" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Odpowiedź do zadania ${n + 1}">`
              : it.type === 'open' ? `<textarea class="gap" rows="3" placeholder="Twoja odpowiedź (możesz też pisać na kartce)" aria-label="Odpowiedź do zadania ${n + 1}"></textarea>`
              : `<div class="options${it.options[0] === 'Prawda' ? ' tf' : ''}">${it.options.map((o, k) => `<button class="opt" data-k="${k}">${it.options[0] === 'Prawda' ? '' : `<span class="k">${LETTERS[k]}</span>`}<span>${esc(o)}</span></button>`).join('')}</div>`}
            <div class="ifb"></div>
          </div>`).join('')}
      </div>
      <button class="btn primary" id="check">Sprawdź odpowiedzi</button>
      <div id="sum"></div>`;

    if (listening) {
      const counts = e.audio.map(() => 0);
      app.querySelectorAll('.play').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k;
        if (!synth) { app.querySelector('#tr').open = true; return; }
        const rate = app.querySelector('#slow').checked ? 0.8 : 0.95;
        app.querySelectorAll('.play').forEach((x) => x.classList.remove('on'));
        b.classList.add('on');
        speakRecording(e.audio[k], rate, () => b.classList.remove('on'));
        counts[k]++;
        app.querySelector(`#cnt${k}`).textContent = counts[k] >= 2 ? `odsłuchane ${counts[k]}× – na egzaminie usłyszysz 2×` : `odsłuchane ${counts[k]}×`;
      }));
      app.querySelector('#stop').onclick = () => { if (synth) synth.cancel(); app.querySelectorAll('.play').forEach((x) => x.classList.remove('on')); };
    }

    const chosen = {};
    app.querySelectorAll('.item').forEach((box) => {
      const n = +box.dataset.n;
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        chosen[n] = +b.dataset.k;
        box.querySelectorAll('.opt').forEach((x) => x.classList.toggle('sel', x === b));
      }));
    });

    app.querySelector('#check').onclick = () => {
      const empty = e.items.filter((it, n) => (it.type === 'input' ? !app.querySelector(`.item[data-n="${n}"] .gap`).value.trim() : it.type === 'open' ? false : chosen[n] == null)).length;
      if (empty && !confirm(`Bez odpowiedzi: ${empty} ${empty === 1 ? 'zadanie' : 'zadania/zadań'}. Sprawdzić mimo to?`)) return;
      if (synth) synth.cancel();
      check();
    };

    function check() {
      app.querySelector('#check').remove();
      let auto = 0;
      const self = {};
      const max = e.items.reduce((sum, it) => sum + itemPoints(it), 0);
      e.items.forEach((it, n) => {
        const box = app.querySelector(`.item[data-n="${n}"]`);
        const fb = box.querySelector('.ifb');
        const expl = it.explain ? `<p>${esc(it.explain)}</p>` : '';
        if (it.type === 'open') {
          box.querySelector('.gap').readOnly = true;
          fb.innerHTML = `<div class="feedback ok"><strong>Przykładowa odpowiedź:</strong> ${esc(it.answer)}</div>
            <div class="scoring"><b>Jak ocenić</b><ul>${it.scoring.map((r) => `<li>${esc(r)}</li>`).join('')}</ul></div>
            <p><b>Ile punktów przyznajesz sobie?</b></p>
            <div class="row self">${Array.from({ length: it.points + 1 }, (_, k) => `<button class="btn" data-p="${k}">${k}</button>`).join('')}</div>`;
          fb.querySelectorAll('.self .btn').forEach((b) => (b.onclick = () => {
            self[n] = +b.dataset.p;
            fb.querySelectorAll('.self .btn').forEach((x) => x.classList.toggle('primary', x === b));
            summary();
          }));
          return;
        }
        let ok;
        if (it.type === 'input') {
          const inp = box.querySelector('.gap');
          inp.readOnly = true;
          const cmp = e.mode === 'srodki' ? normAnswer : loose;
          ok = it.accept.some((a) => cmp(a) === cmp(inp.value));
          inp.classList.add(ok ? 'right' : 'bad');
          fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><strong>${ok ? praise() : 'Niestety nie.'}</strong>
            <p>Poprawna odpowiedź: <b>${esc(it.accept[0])}</b></p>${expl}</div>`;
        } else {
          ok = chosen[n] === it.answer;
          box.querySelectorAll('.opt').forEach((b) => {
            b.disabled = true;
            b.classList.remove('sel');
            const k = +b.dataset.k;
            if (k === it.answer) b.classList.add('correct');
            else if (k === chosen[n]) b.classList.add('wrong');
          });
          fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><strong>${ok ? praise() : `Poprawna odpowiedź: ${it.options[0] === 'Prawda' ? '' : `${LETTERS[it.answer]}. `}${esc(it.options[it.answer])}`}</strong>${expl}</div>`;
        }
        if (ok) auto++;
      });
      if (listening) app.querySelector('#tr').open = true;
      const openCount = e.items.filter((it) => it.type === 'open').length;
      function summary() {
        const scored = Object.keys(self).length;
        const got = auto + Object.values(self).reduce((a, b) => a + b, 0);
        const pct = Math.round((got / max) * 100);
        const complete = scored === openCount;
        if (complete) { state.sets[key] = Math.max(state.sets[key] || 0, pct); save(); }
        app.querySelector('#sum').innerHTML = `<div class="result">
          <p class="big">${got}/${max}</p>
          <p>${complete ? `punktów (${pct}%)${openCount ? ' – razem z twoją samooceną zadań otwartych' : ''}` : `punktów na razie – oceń jeszcze ${openCount - scored} ${openCount - scored === 1 ? 'zadanie otwarte' : 'zadania otwarte'} (przyciski z liczbą punktów)`}</p>
          <button class="btn" id="again">↺ Jeszcze raz</button>
          <a class="btn primary" href="#/s/${s.id}/cw/${e.mode}">Inne zestawy</a></div>`;
        app.querySelector('#again').onclick = () => { exerciseSet(s, e); window.scrollTo(0, 0); };
      }
      summary();
    }
  }

  // ---------- Lekcja (tryb nauki) ----------
  function lessonView(pane, steps, s, t, base) {
    let i = 0;
    function show() {
      const st = steps[i];
      const last = i === steps.length - 1;
      pane.innerHTML = `
        <div class="lesson">
          <div class="dots" aria-hidden="true">${steps.map((_, k) => `<span class="${k < i ? 'done' : k === i ? 'on' : ''}"></span>`).join('')}</div>
          <div class="lesson-step">
            <div class="muted">Krok ${i + 1} z ${steps.length}</div>
            <h2>${st.title}</h2>
            ${st.svg ? `<figure class="vis">${st.svg}</figure>` : ''}
            ${st.widget ? `<figure class="vis widget" id="widget"></figure>` : ''}
            <div class="lesson-text">${st.text || ''}</div>
            ${st.remember ? `<div class="remember"><b>💡 Zapamiętaj</b><div>${st.remember}</div></div>` : ''}
            ${st.hook ? `<div class="hook"><b>🧠 Trik pamięciowy</b><div>${st.hook}</div></div>` : ''}
            ${st.check ? `<div class="check"><b>🤔 Sprawdź się</b><p class="check-q">${esc(st.check.q)}</p>
              <div class="options">${st.check.options.map((o, k) => `<button class="opt" data-k="${k}"><span>${esc(o)}</span></button>`).join('')}</div>
              <div class="check-fb"></div></div>` : ''}
          </div>
          <div class="row lesson-nav">
            <button class="btn" id="prev" ${i === 0 ? 'disabled' : ''}>← Wstecz</button>
            <button class="btn primary" id="nxt">${last ? 'Zakończ lekcję ✓' : 'Dalej →'}</button>
          </div>
        </div>`;
      if (st.widget && window.WIDGETS && window.WIDGETS[st.widget.type]) {
        try { window.WIDGETS[st.widget.type](pane.querySelector('#widget'), st.widget); } catch (e) { console.error(e); }
      }
      if (st.check) {
        const fb = pane.querySelector('.check-fb');
        pane.querySelectorAll('.check .opt').forEach((b) => (b.onclick = () => {
          const k = +b.dataset.k;
          const ok = k === st.check.answer;
          pane.querySelectorAll('.check .opt').forEach((x) => {
            x.disabled = true;
            if (+x.dataset.k === st.check.answer) x.classList.add('correct');
            else if (+x.dataset.k === k) x.classList.add('wrong');
          });
          fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><strong>${ok ? praise() : 'Jeszcze nie. Spójrz na zieloną odpowiedź.'}</strong>${st.check.explain ? `<p>${esc(st.check.explain)}</p>` : ''}</div>`;
        }));
      }
      pane.querySelector('#prev').onclick = () => { if (i > 0) { i--; show(); window.scrollTo(0, 0); } };
      pane.querySelector('#nxt').onclick = () => { if (last) finish(); else { i++; show(); window.scrollTo(0, 0); } };
    }
    function finish() {
      keyHandler = null;
      state.lessons[topicKey(s, t)] = 1;
      save();
      pane.innerHTML = `<div class="result"><p class="big">🎓</p><h2>Lekcja ukończona!</h2>
        <p>Teraz utrwal wiedzę: przejrzyj fiszki albo sprawdź się w quizie.</p>
        <a class="btn primary" href="${base}/quiz">✅ Quiz</a>
        ${t.flashcards && t.flashcards.length ? `<a class="btn" href="${base}/fiszki">🃏 Fiszki</a>` : ''}
        <a class="btn" href="${base}/teoria">📖 Ściąga</a>
        <button class="btn" id="again">↺ Od początku</button></div>`;
      pane.querySelector('#again').onclick = () => { i = 0; bindKeys(); show(); };
    }
    function bindKeys() {
      keyHandler = (e) => {
        if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
        if (e.key === 'ArrowRight') pane.querySelector('#nxt')?.click();
        else if (e.key === 'ArrowLeft') pane.querySelector('#prev')?.click();
      };
    }
    bindKeys();
    show();
  }

  function exam(s) {
    setTitle(`${WORDS.test} – ${s.name}`);
    app.innerHTML = `${crumbs([[s.name, `#/s/${s.id}`], [WORDS.test]])}
      <h1>📝 ${WORDS.test}: ${esc(s.name)}</h1><div id="pane"></div>`;
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
    const info = window.SOURCES || { html: '<p>Źródła dla tej ścieżki zostaną opisane razem z pierwszymi materiałami. Każdy dział będzie miał ramkę „Na jakiej podstawie” z numerem wymagania podstawy programowej.</p>' };
    app.innerHTML = `${crumbs([['Źródła']])}<h1>📋 Na jakiej podstawie?</h1><article class="theory">${info.html}</article>
      <a class="btn" href="#/">Wróć na start</a>`;
  }

  function resolveKey(key) {
    const [sid, tid, qid] = key.split('/');
    const s = findSubject(sid);
    const t = s && s.topics.find((x) => x.id === tid);
    const q = t && t.questions.find((x) => x.id === qid);
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
          ${q.svg ? `<figure class="vis">${q.svg}</figure>` : ''}
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
          ${mistakes.map((q) => `<li><b>${esc(q.q)}</b>${q.svg ? `<figure class="vis small">${q.svg}</figure>` : '<br>'}✔ ${esc(q.options[q.answer])}${q.explain ? `<br><span class="muted">${esc(q.explain)}</span>` : ''}</li>`).join('')}
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
