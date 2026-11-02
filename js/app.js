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
  // Tryb dla młodszego ucznia (ścieżka z young: true – klasa 3): większa czcionka, krótkie quizy
  // (losowe pytania z działu), gwiazdki zamiast procentów, bez sprawdzianu z całego przedmiotu.
  const YOUNG = !!TRACK.young;
  if (YOUNG) document.body.classList.add('young');
  const QUIZ_SIZE = YOUNG ? 8 : 0; // 0 – wszystkie pytania działu
  const synth = window.speechSynthesis || null;
  // Przyciski 🔊 „Posłuchaj” (synteza mowy przeglądarki) – w trybie młodszego ucznia albo gdy ścieżka ma speak: true.
  const SPEAK = !!(synth && window.SpeechSynthesisUtterance && (YOUNG || TRACK.speak));

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
    // Dyktando (ścieżki z czytaniem na głos): zadania type 'input' z polem say – tekst czyta syntezator, uczeń wpisuje.
    dyktando: { icon: '✏️', name: 'Dyktando ze słuchu', about: 'Kliknij 🔊 i posłuchaj. Wpisz wyraz albo zdanie, które usłyszysz. Możesz słuchać, ile razy chcesz. Uważaj na ó i u, rz i ż, ch i h oraz na wielkie litery!',
      // inna nazwa i opis w danym przedmiocie (klucz – id przedmiotu)
      by: { angielski: { name: 'Dyktando słówek', about: 'Kliknij 🔊 i posłuchaj. Wpisz po angielsku słówko albo zdanie, które usłyszysz. Obrazek podpowie ci, co ono znaczy. Możesz słuchać, ile razy chcesz. Uważaj na każdą literę!' } } },
  };
  const modeOf = (mode, s) => ({ ...MODES[mode], ...((MODES[mode].by || {})[s.id] || {}) });
  // W ścieżkach bez egzaminu opisy trybów nie odwołują się do arkusza CKE.
  if (!TRACK.exam) {
    MODES.czytanie.about = 'Przeczytaj tekst i rozwiąż zadania. Do tekstu możesz wracać, ile chcesz. Zadania otwarte ocenisz sam według przykładowej odpowiedzi.';
    MODES.reading.about = 'Przeczytaj krótki tekst po angielsku i rozwiąż zadania. Polecenia są po polsku. Do tekstu możesz wracać, ile chcesz.';
    MODES.listening.about = 'Posłuchaj nagrania i rozwiąż zadania. Nagrania czyta głos syntezatora mowy w przeglądarce – posłuchaj każdego dwa razy, możesz też włączyć wolniejsze tempo. Transkrypcję zobaczysz po sprawdzeniu odpowiedzi.';
  }
  if (YOUNG) {
    MODES.listening.name = 'Słuchanie po angielsku';
    MODES.listening.about = 'Kliknij ▶ i posłuchaj nagrania po angielsku. Potem wybierz dobrą odpowiedź. Możesz słuchać, ile razy chcesz. Co mówią w nagraniu, zobaczysz po sprawdzeniu.';
  }
  const setsOf = (s, mode) => EXERCISES.filter((e) => e.subject === s.id && (!mode || e.mode === mode));
  const setKey = (e) => `${e.subject}/${e.mode}/${e.id}`;
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
  // Przedmiot-odnośnik (pole link: { track, subject }) – materiał jest w innej ścieżce o tej samej podstawie
  // (np. polski klasy 8 w ścieżce egzaminacyjnej). Kafelek prowadzi na stronę tamtej ścieżki.
  const linkTrack = (s) => TRACKS.find((t) => t.id === s.link.track) || { page: 'index.html', name: '' };
  const linkHref = (s) => `${linkTrack(s).page}#/s/${s.link.subject}`;
  const topicKey = (s, t) => `${s.id}/${t.id}`;
  // Każde pytanie ma stałe pole id – klucz nie zależy od kolejności pytań w pliku.
  const questionsOf = (s, t) => t.questions.map((q) => ({ ...q, key: `${s.id}/${t.id}/${q.id}`, topicName: t.name }));
  const tasksOf = (s, t) => (t.tasks || []).map((x) => ({ ...x, key: `${s.id}/${t.id}/${x.id}`, topicName: t.name }));
  const tasksOfSubject = (s) => s.topics.flatMap((t) => tasksOf(s, t));
  // Działy „na zapas” (extra: true) – spoza podręcznika klasy; nie liczą się do postępu przedmiotu ani testu próbnego.
  const coreTopics = (s) => s.topics.filter((t) => !t.extra);
  const EXTRA_NOTE = 'Tych działów nie ma w podręczniku tej klasy – to materiał z dalszych klas, na zapas. Nie liczą się do postępu ani do testu próbnego.';
  const badgeClass = (p) => (p == null ? '' : p >= 80 ? 'good' : p >= 50 ? 'mid' : 'low');
  const bar = (p, label = true) =>
    `<div class="bar"><span style="width:${p}%"></span></div>${label ? `<small class="muted">${p}% opanowane</small>` : ''}`;

  function subjectProgress(s) {
    const vals = coreTopics(s).map((t) => state.best[topicKey(s, t)] || 0);
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

  // ---------- Gwiazdki (tryb młodszego ucznia) ----------
  // Zapis postępu się nie zmienia (najlepszy wynik w %), gwiazdki liczymy z wyniku: 7/8 = 3, 5/8 = 2, 2/8 = 1.
  const starCount = (p) => (p == null ? 0 : p >= 85 ? 3 : p >= 60 ? 2 : p >= 25 ? 1 : 0);
  const starsHtml = (n, max = 3) =>
    `<span class="stars" role="img" aria-label="${n} z ${max} gwiazdek">${'<b>★</b>'.repeat(n)}${'<i>★</i>'.repeat(Math.max(0, max - n))}</span>`;
  const scoreBadge = (p) => (p == null ? 'nowy' : YOUNG ? starsHtml(starCount(p)) : p + '%');
  function progress(s) {
    if (!YOUNG) return bar(subjectProgress(s));
    const max = coreTopics(s).length * 3;
    const got = coreTopics(s).reduce((n, t) => n + starCount(state.best[topicKey(s, t)]), 0);
    return `${bar(max ? Math.round((got / max) * 100) : 0, false)}<small class="muted">★ ${got} z ${max} gwiazdek</small>`;
  }

  // ---------- Czytanie na głos (synteza mowy przeglądarki) ----------
  // Tekst czytamy po polsku. Fragment w innym języku podajemy jako [tekst, 'en'] – wtedy czyta go głos angielski.
  // Pytanie może mieć pole say (tekst albo lista fragmentów) – czytane zamiast q, np. gdy q ma symbole lub obrazki;
  // optLang: 'en' – odpowiedzi czytane po angielsku; sayOptions – lista tekstów czytanych zamiast odpowiedzi;
  // sayExplain – czytane zamiast explain (tekst albo lista fragmentów).
  const LANGS = { pl: 'pl-PL', en: 'en-GB', de: 'de-DE' };
  const EMOJI = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}\u{FE0F}\u{200D}\u{20E3}]/gu;
  const decoder = document.createElement('textarea');
  // Skróty jednostek po liczbie czytamy pełnym słowem w dobrej formie: 1 złoty, 2 złote, 5 złotych.
  const UNITS = {
    zł: ['złoty', 'złote', 'złotych'], gr: ['grosz', 'grosze', 'groszy'], mm: ['milimetr', 'milimetry', 'milimetrów'],
    cm: ['centymetr', 'centymetry', 'centymetrów'], km: ['kilometr', 'kilometry', 'kilometrów'], m: ['metr', 'metry', 'metrów'],
    kg: ['kilogram', 'kilogramy', 'kilogramów'], dag: ['dekagram', 'dekagramy', 'dekagramów'], g: ['gram', 'gramy', 'gramów'],
    l: ['litr', 'litry', 'litrów'], min: ['minuta', 'minuty', 'minut'], '°C': ['stopień Celsjusza', 'stopnie Celsjusza', 'stopni Celsjusza'],
  };
  const plural = (n, [one, few, many]) => (n === 1 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many);
  const UNIT_RE = /(?<![\d,])(\d+)\s*(zł|gr|mm|cm|km|kg|dag|min|°C|m|g|l)(?![\p{L}\d])/gu;
  function speechText(html) {
    decoder.innerHTML = String(html)
      .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<\/(p|li|h[1-6]|div|tr|td|th|dt|dd)>|<br\s*\/?>/gi, '. ')
      .replace(/<[^>]+>/g, ' ');
    return decoder.value
      .replace(EMOJI, ' ')
      .replace(UNIT_RE, (_, n, u) => `${n} ${plural(+n, UNITS[u])}`)
      .replace(/(\d)\s*[×·]\s*(?=\d)/g, '$1 razy ')
      .replace(/(\d)\s*÷\s*(?=\d)/g, '$1 podzielić przez ')
      .replace(/(\d)\s+:\s+(?=\d)/g, '$1 podzielić przez ')
      .replace(/(\d)\s+[−–-]\s+(?=\d)/g, '$1 minus ')
      .replace(/(\d)\s*\+\s*(?=\d)/g, '$1 plus ')
      .replace(/=\s*\?/g, ' równa się? ')
      .replace(/=\s*(□|_+|…|\.{3,})/g, ' równa się ile? ')
      .replace(/([\d)])\s*=\s*/g, '$1 równa się ')
      .replace(/\s+=\s+/g, ' to ')
      .replace(/_{2,}|…|\.{3,}/g, ' … ')
      .replace(/\s+([.!?,;:])/g, '$1')
      .replace(/([.!?,;:])([.!?,;:])+/g, '$1')
      .replace(/\s+/g, ' ')
      .replace(/^[\s.,;:–·]+/, '')
      .trim();
  }
  const voiceFor = (lang) => {
    const vs = synth.getVoices();
    const norm = (v) => v.lang.replace('_', '-').toLowerCase();
    return vs.find((v) => norm(v) === lang.toLowerCase()) || vs.find((v) => norm(v).startsWith(lang.slice(0, 2).toLowerCase())) || null;
  };
  function stopSpeech() {
    if (synth) synth.cancel();
    document.querySelectorAll('.say.on').forEach((b) => b.classList.remove('on'));
  }
  // parts: tekst albo lista fragmentów (tekst | [tekst, 'en'])
  // W tekście HTML (ściąga, krok lekcji) fragment w innym języku oznaczamy atrybutem lang,
  // np. <i lang="en">cat</i> – czyta go wtedy głos tego języka.
  const LANG_RE = /<([a-z]+)\b[^>]*\blang="([a-z]{2})"[^>]*>([\s\S]*?)<\/\1>/gi;
  function splitLang(p) {
    if (p.lang || typeof p.text !== 'string' || !/\blang="/.test(p.text)) return [p];
    const out = [];
    let last = 0;
    for (const m of p.text.matchAll(LANG_RE)) {
      out.push({ text: p.text.slice(last, m.index) }, { text: m[3], lang: m[2] });
      last = m.index + m[0].length;
    }
    out.push({ text: p.text.slice(last) });
    return out;
  }
  function speak(parts, onEnd) {
    stopSpeech();
    const list = (Array.isArray(parts) ? parts : [parts])
      .map((p) => (Array.isArray(p) ? { text: p[0], lang: p[1] } : { text: p }))
      .flatMap(splitLang)
      .map((p) => ({ text: speechText(p.text || ''), lang: LANGS[p.lang] || p.lang || LANGS.pl }))
      .filter((p) => /[\p{L}\p{N}]/u.test(p.text)); // same znaki interpunkcyjne pomijamy
    if (!list.length) { if (onEnd) onEnd(); return; }
    list.forEach((p, k) => {
      const u = new SpeechSynthesisUtterance(p.text);
      u.lang = p.lang;
      const v = voiceFor(p.lang);
      if (v) u.voice = v;
      u.rate = YOUNG ? 0.9 : 1;
      if (k === list.length - 1 && onEnd) { u.onend = onEnd; u.onerror = onEnd; }
      synth.speak(u);
    });
  }
  const sayButton = (label = 'Posłuchaj') => (SPEAK ? `<button type="button" class="say" aria-label="${label}" title="${label}">🔊</button>` : '');
  // Uruchom czytanie przy przycisku b (podświetlony, drugie kliknięcie zatrzymuje).
  function playSay(b, parts) {
    if (!SPEAK || !b) return;
    if (b.classList.contains('on')) { stopSpeech(); return; }
    speak(typeof parts === 'function' ? parts() : parts, () => b.classList.remove('on'));
    if (synth.speaking || synth.pending) b.classList.add('on');
  }
  // Podłącz przycisk 🔊 w elemencie el; auto – przeczytaj od razu, jeśli włączono czytanie automatyczne.
  function bindSay(el, parts, auto) {
    const b = el && el.querySelector('.say');
    if (!b) return;
    b.onclick = (e) => { e.stopPropagation(); playSay(b, parts); };
    if (auto && state.autoSpeak) playSay(b, parts);
  }
  // Pytanie z odpowiedziami do przeczytania (order – kolejność wyświetlonych odpowiedzi).
  function questionSpeech(q, order) {
    const parts = [].concat(q.say != null ? q.say : q.q);
    (order || q.options.map((_, k) => k)).forEach((k, n) => {
      const text = q.sayOptions ? q.sayOptions[k] : q.options[k];
      if (!speechText(text)) return;
      parts.push(q.options[0] === 'Prawda' ? '' : `${LETTERS[n]}.`, q.optLang ? [text, q.optLang] : text);
    });
    return parts;
  }

  // Obsługa klawiatury: jedna aktywna funkcja naraz
  let keyHandler = null;
  document.addEventListener('keydown', (e) => {
    if (keyHandler && !e.ctrlKey && !e.metaKey && !e.altKey) keyHandler(e);
  });

  // ---------- Router ----------
  function route() {
    keyHandler = null;
    stopSpeech();
    window.scrollTo(0, 0);
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (p[0] === 'powtorka') return review();
    if (p[0] === 'zrodla') return sources();
    if (p[0] === 's') {
      const s = findSubject(p[1]);
      if (s && s.link) { location.replace(linkHref(s)); return; }
      if (s) {
        if (p.length === 2) return subject(s);
        if (p[2] === 'egzamin') return YOUNG ? subject(s) : exam(s);
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
        ${SPEAK ? `<button class="btn" id="auto" aria-pressed="${state.autoSpeak ? 'true' : 'false'}">🔊 Czytanie na głos: <b>${state.autoSpeak ? 'włączone' : 'wyłączone'}</b></button>
          <small class="muted">${state.autoSpeak ? 'Pytania i lekcje czytają się same.' : 'Włącz, a pytania i lekcje będą się czytać same. Przycisk 🔊 przy pytaniu działa zawsze.'}</small>` : ''}
      </section>
      <div class="grid">
        ${SUBJECTS.map((s) => s.link ? `
          <a class="card" href="${linkHref(s)}" style="--accent:${s.color}">
            <span class="icon">${s.icon}</span>
            <h2>${esc(s.name)}</h2>
            <p>${esc(s.linkNote || 'Ta sama podstawa programowa – materiał jest w innej ścieżce.')}</p>
            <small class="muted">↗ ścieżka „${esc(linkTrack(s).name)}”</small>
          </a>` : `
          <a class="card" href="#/s/${s.id}" style="--accent:${s.color}">
            <span class="icon">${s.icon}</span>
            <h2>${esc(s.name)}</h2>
            <p>${s.topics.length} działów${YOUNG ? '' : ` · ${s.topics.reduce((n, t) => n + t.questions.length, 0)} pytań`}</p>
            ${progress(s)}
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
    const auto = document.getElementById('auto');
    if (auto) auto.onclick = () => {
      state.autoSpeak = !state.autoSpeak;
      save();
      home();
      if (state.autoSpeak) speak('Czytanie na głos jest włączone.');
    };
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
      <div style="--accent:${s.color}">${progress(s)}</div>
      ${s.exam ? `<p class="basis">📅 <b>Egzamin:</b> ${s.exam} <a href="#/zrodla">Źródła</a></p>` : ''}
      ${YOUNG ? '' : `<p>
        <a class="btn primary" href="#/s/${s.id}/egzamin">📝 ${WORDS.test} (${Math.min(EXAM_SIZE, coreTopics(s).reduce((n, t) => n + t.questions.length, 0))} pytań)</a>
        ${last != null ? `<span class="muted">ostatni wynik: ${last}%</span>` : ''}
      </p>`}
      ${allTasks.length || setsOf(s).length ? `<h2 class="sec">${WORDS.practice}</h2>
      <div class="modes">
        ${allTasks.length ? `<a class="mode" href="#/s/${s.id}/zadania"><span class="icon">✍️</span><b>Zadania otwarte</b>
          <small class="muted">${allTasks.length} ${plural(allTasks.length, ['zadanie', 'zadania', 'zadań'])} · ${taskScore(allTasks)}</small></a>` : ''}
        ${Object.keys(MODES).filter((m) => setsOf(s, m).length).map((m) => {
          const list = setsOf(s, m);
          const done = list.filter((e) => state.sets[setKey(e)] != null).length;
          return `<a class="mode" href="#/s/${s.id}/cw/${m}"><span class="icon">${MODES[m].icon}</span><b>${modeOf(m, s).name}</b>
            <small class="muted">${list.length} ${plural(list.length, ['zestaw', 'zestawy', 'zestawów'])}${done ? ` · zrobione ${done}` : ''}</small></a>`;
        }).join('')}
      </div>
      <h2 class="sec">Działy</h2>` : s.topics.some((t) => t.extra) ? '<h2 class="sec">Działy</h2>' : ''}
      ${topicList(s, coreTopics(s))}
      ${s.topics.some((t) => t.extra) ? `<h2 class="sec">📦 Na zapas</h2>
      <p class="muted">${esc(s.extraNote || EXTRA_NOTE)}</p>
      ${topicList(s, s.topics.filter((t) => t.extra))}` : ''}`;
  }

  function topicList(s, list) {
    return `<ul class="topics">
        ${list.map((t) => {
          const b = state.best[topicKey(s, t)];
          return `<li><a href="#/s/${s.id}/t/${t.id}">
            <span>${state.lessons[topicKey(s, t)] ? '🎓 ' : ''}${esc(t.name)}${t.chapter ? `<br><small class="muted">📘 ${esc(t.chapter)}</small>` : ''}</span>
            <span class="badge ${badgeClass(b)}">${scoreBadge(b)}</span>
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
      ${t.chapter ? `<p class="muted">📘 ${s.book ? `${esc(s.book)}: ` : ''}${esc(t.chapter)}</p>` : ''}
      ${t.extra ? `<p class="muted">📦 Na zapas – tego działu nie ma w podręczniku tej klasy.</p>` : ''}
      <nav class="tabs">
        ${lesson ? `<a href="${base}/lekcja" class="${tab === 'lekcja' ? 'on' : ''}">🎓 Lekcja</a>` : ''}
        <a href="${base}/teoria" class="${tab === 'teoria' ? 'on' : ''}">📖 Ściąga</a>
        ${hasCards ? `<a href="${base}/fiszki" class="${tab === 'fiszki' ? 'on' : ''}">🃏 Fiszki (${t.flashcards.length})</a>` : ''}
        <a href="${base}/quiz" class="${tab === 'quiz' ? 'on' : ''}">✅ Quiz (${QUIZ_SIZE ? Math.min(QUIZ_SIZE, t.questions.length) : t.questions.length})</a>
        ${tasks.length ? `<a href="${base}/zadania" class="${tab === 'zadania' ? 'on' : ''}">✍️ Zadania otwarte (${tasks.length})</a>` : ''}
      </nav>
      <div id="pane"></div>`;
    const pane = document.getElementById('pane');
    if (tab === 'lekcja') return lessonView(pane, lesson, s, t, base);
    if (tab === 'fiszki') return flashcards(pane, t.flashcards, t.cardLang);
    if (tab === 'zadania') return openTasks(pane, tasks, { math: s.id === 'matematyka', backHref: `#/s/${s.id}`, backLabel: `Wróć do: ${s.name}` });
    if (tab === 'quiz') {
      // krótki quiz (tryb młodszego ucznia): za każdym razem inne losowe pytania z działu
      const draw = () => { const all = shuffle(questionsOf(s, t)); return QUIZ_SIZE ? all.slice(0, QUIZ_SIZE) : all; };
      return quiz(pane, draw(), {
        draw,
        saveKey: topicKey(s, t),
        backHref: `#/s/${s.id}`,
        backLabel: `Wróć do: ${s.name}`,
      });
    }
    pane.innerHTML = `${t.basis ? `<p class="basis">📋 <b>Na jakiej podstawie:</b> ${esc(t.basis)} <a href="#/zrodla">Źródła</a></p>` : ''}
      ${SPEAK ? `<p class="say-row">${sayButton('Posłuchaj ściągi')} <span class="muted">Posłuchaj ściągi</span></p>` : ''}
      <article class="theory">${t.theory}</article>
      <a class="btn primary" href="${base}/quiz">Sprawdź się w quizie →</a>
      ${hasCards ? `<a class="btn" href="${base}/fiszki">Powtórz z fiszkami</a>` : ''}
      ${tasks.length ? `<a class="btn" href="${base}/zadania">✍️ Zadania otwarte</a>` : ''}`;
    bindSay(pane.querySelector('.say-row'), () => [t.name, t.theory]);
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
          <div class="qline"><h2 class="question">${esc(x.q)}</h2>${sayButton('Posłuchaj zadania')}</div>
          ${x.svg ? `<figure class="vis">${x.svg}</figure>` : ''}
          <p class="muted">${opts.math ? (TRACK.exam ? 'Rozwiąż na kartce – jak na egzaminie zapisz cały tok rozumowania. Potem porównaj z rozwiązaniem.' : 'Rozwiąż na kartce i zapisz obliczenia. Potem porównaj z rozwiązaniem.') : 'Napisz odpowiedź na kartce, potem porównaj ją z przykładową odpowiedzią i zasadami oceniania.'}${prev != null ? ` Ostatnio: ${prev}/${x.points} pkt.` : ''}</p>
          <ol class="steps"></ol>
          <div class="row" id="ctl">
            <button class="btn" id="hint">💡 Podpowiedź</button>
            <button class="btn primary" id="all">${opts.math ? 'Pokaż rozwiązanie' : 'Pokaż odpowiedź'}</button>
          </div>
          <div id="after"></div>
        </div>`;
      bindSay(pane.querySelector('.qline'), [].concat(x.say != null ? x.say : x.q), true);
      const ol = pane.querySelector('.steps');
      const addStep = () => { if (shown < x.steps.length) ol.insertAdjacentHTML('beforeend', `<li>${esc(x.steps[shown++])}</li>`); };
      pane.querySelector('#hint').onclick = () => { addStep(); if (shown >= x.steps.length) reveal(); };
      pane.querySelector('#all').onclick = () => { while (shown < x.steps.length) addStep(); reveal(); };
      keyHandler = null;
      function reveal() {
        pane.querySelector('#ctl').remove();
        pane.querySelector('#after').innerHTML = `
          <div class="feedback ok"><strong>${opts.math ? 'Odpowiedź' : 'Przykładowa odpowiedź'}:</strong>${x.answer.includes('\n') ? '<br>' : ' '}<span class="answer">${esc(x.answer)}</span></div>
          <div class="scoring"><b>Jak ocenić rozwiązanie</b><ul>${x.scoring.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
            <p class="muted">${opts.math ? (TRACK.exam ? 'Punktacja orientacyjna, w stylu zasad oceniania CKE: liczy się poprawny tok rozumowania, nie tylko wynik.' : 'Punktacja orientacyjna: liczy się poprawny sposób rozwiązania, nie tylko wynik.') : (TRACK.exam ? 'Punktacja orientacyjna, w stylu zasad oceniania CKE. Twoja odpowiedź może brzmieć inaczej – liczy się, czy zawiera te same elementy.' : 'Punktacja orientacyjna. Twoja odpowiedź może brzmieć inaczej – liczy się, czy zawiera te same elementy.')}</p></div>
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
    const m = modeOf(mode, s);
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
            <span>${esc(e.title)}<br><small class="muted">${esc(e.kind || '')} · ${e.items.length} ${plural(e.items.length, ['zadanie', 'zadania', 'zadań'])}</small></span>
            <span class="badge ${badgeClass(b)}">${scoreBadge(b)}</span>
          </a></li>`;
        }).join('')}
      </ul>`;
  }

  // Porównanie odpowiedzi wpisanej: bez wielkości liter, zbędnych spacji, końcowej kropki; apostrofy ujednolicone.
  const normAnswer = (t) => String(t).toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '').trim();
  // Poza środkami językowymi (tam CKE wymaga pełnej poprawności) brak polskich znaków nie odbiera punktu.
  const PL = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };
  const loose = (t) => normAnswer(t).replace(/[ąćęłńóśźż]/g, (c) => PL[c]);
  const exact = (t) => String(t).replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '').trim();
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
    const m = modeOf(e.mode, s);
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
        </div>` : e.mode === 'dyktando' ? `${SPEAK ? '' : '<p class="feedback bad">Ta przeglądarka nie czyta na głos. Poproś kogoś, żeby przeczytał ci tekst z listy „Dla rodzica”.</p>'}
          <details class="transcript"><summary>Dla rodzica: co czyta lektor</summary>${e.items.map((it, k) => `<p><b>${k + 1}.</b> ${esc([].concat(it.say).map((x) => (Array.isArray(x) ? x[0] : x)).join(' '))}</p>`).join('')}</details>`
          : `<article class="passage">${e.text}</article>`}
      ${e.source ? `<p class="muted source">Źródło: ${esc(e.source)}</p>` : ''}
      <div class="sheet">
        ${e.items.map((it, n) => `
          <div class="item" data-n="${n}">
            <div class="qhead"><span><b>Zadanie ${n + 1}.</b></span><span>${itemPoints(it)} pkt</span></div>
            <div class="qline"><p class="question">${esc(it.q)}</p>${sayButton(`Posłuchaj zadania ${n + 1}`)}</div>
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
        // młodszy uczeń: wolniej („rozumie wypowiedzi artykułowane wyraźnie i powoli”)
        const rate = app.querySelector('#slow').checked ? (YOUNG ? 0.65 : 0.8) : (YOUNG ? 0.8 : 0.95);
        app.querySelectorAll('.play').forEach((x) => x.classList.remove('on'));
        b.classList.add('on');
        speakRecording(e.audio[k], rate, () => b.classList.remove('on'));
        counts[k]++;
        app.querySelector(`#cnt${k}`).textContent = counts[k] >= 2 && TRACK.exam ? `odsłuchane ${counts[k]}× – na egzaminie usłyszysz 2×` : `odsłuchane ${counts[k]}×`;
      }));
      app.querySelector('#stop').onclick = () => { stopSpeech(); app.querySelectorAll('.play').forEach((x) => x.classList.remove('on')); };
    }

    const chosen = {};
    app.querySelectorAll('.item').forEach((box) => {
      const n = +box.dataset.n;
      const it = e.items[n];
      bindSay(box.querySelector('.qline'), () => (it.options ? questionSpeech(it) : [].concat(it.say != null ? it.say : it.q)));
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        chosen[n] = +b.dataset.k;
        box.querySelectorAll('.opt').forEach((x) => x.classList.toggle('sel', x === b));
      }));
    });

    app.querySelector('#check').onclick = () => {
      const empty = e.items.filter((it, n) => (it.type === 'input' ? !app.querySelector(`.item[data-n="${n}"] .gap`).value.trim() : it.type === 'open' ? false : chosen[n] == null)).length;
      if (empty && !confirm(`Bez odpowiedzi: ${empty} ${empty === 1 ? 'zadanie' : 'zadania/zadań'}. Sprawdzić mimo to?`)) return;
      stopSpeech();
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
          // środki językowe: pełna poprawność pisowni; dyktando: także wielkie litery; poza tym bez polskich znaków też dobrze
          const cmp = e.mode === 'srodki' ? normAnswer : e.mode === 'dyktando' ? exact : loose;
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
          ${YOUNG && complete ? `<p class="big">${starsHtml(starCount(pct))}</p>` : ''}
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
            <div class="qline step-head"><h2>${st.title}</h2>${sayButton('Posłuchaj tego kroku')}</div>
            ${st.svg ? `<figure class="vis">${st.svg}</figure>` : ''}
            ${st.widget ? `<figure class="vis widget" id="widget"></figure>` : ''}
            <div class="lesson-text">${st.text || ''}</div>
            ${st.remember ? `<div class="remember"><b>💡 Zapamiętaj</b><div>${st.remember}</div></div>` : ''}
            ${st.hook ? `<div class="hook"><b>🧠 Trik pamięciowy</b><div>${st.hook}</div></div>` : ''}
            ${st.check ? `<div class="check"><div class="qline"><b>🤔 Sprawdź się</b>${sayButton('Posłuchaj pytania')}</div><p class="check-q">${esc(st.check.q)}</p>
              <div class="options">${st.check.options.map((o, k) => `<button class="opt" data-k="${k}"><span>${esc(o)}</span></button>`).join('')}</div>
              <div class="check-fb"></div></div>` : ''}
          </div>
          <div class="row lesson-nav">
            <button class="btn" id="prev" ${i === 0 ? 'disabled' : ''}>← Wstecz</button>
            <button class="btn primary" id="nxt">${last ? 'Zakończ lekcję ✓' : 'Dalej →'}</button>
          </div>
        </div>`;
      bindSay(pane.querySelector('.step-head'), () => [st.title, st.text || '',
        st.remember ? `Zapamiętaj: ${st.remember}` : '', st.hook ? `Trik: ${st.hook}` : ''], true);
      bindSay(pane.querySelector('.check .qline'), () => questionSpeech(st.check));
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
          fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><div class="qline"><strong>${ok ? praise() : 'Jeszcze nie. Spójrz na zieloną odpowiedź.'}</strong>${sayButton('Posłuchaj wyjaśnienia')}</div>${st.check.explain ? `<p>${esc(st.check.explain)}</p>` : ''}</div>`;
          bindSay(fb, () => [ok ? 'Dobrze!' : 'Jeszcze nie. Dobra odpowiedź to:', st.check.optLang ? [st.check.options[st.check.answer], st.check.optLang] : st.check.options[st.check.answer],
            ...[].concat(st.check.sayExplain != null ? st.check.sayExplain : st.check.explain || '')], true);
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
    const all = coreTopics(s).flatMap((t) => questionsOf(s, t));
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
    quiz(pane, QUIZ_SIZE ? shuffle(qs).slice(0, QUIZ_SIZE) : shuffle(qs), { showTopic: true, backHref: '#/', backLabel: 'Wróć na start', againHref: '#/powtorka' });
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
          <div class="qline"><h2 class="question">${esc(q.q)}</h2>${sayButton('Posłuchaj pytania')}</div>
          ${q.svg ? `<figure class="vis">${q.svg}</figure>` : ''}
          <div class="options">
            ${order.map((k, n) => `<button class="opt" data-k="${k}"><span class="k">${LETTERS[n]}</span><span>${esc(q.options[k])}</span></button>`).join('')}
          </div>
          <div id="fb"></div>
        </div>`;
      const buttons = [...pane.querySelectorAll('.opt')];
      buttons.forEach((b) => (b.onclick = () => answer(+b.dataset.k)));
      bindSay(pane.querySelector('.qline'), () => questionSpeech(q, order), true);
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
      const wrongText = YOUNG ? 'Jeszcze nie. Dobra odpowiedź to:' : 'Niestety nie. Poprawna odpowiedź:';
      pane.querySelector('#fb').innerHTML = `
        <div class="feedback ${ok ? 'ok' : 'bad'}">
          <div class="qline"><strong>${ok ? praise() : `${wrongText} ${esc(q.options[q.answer])}`}</strong>${sayButton('Posłuchaj wyjaśnienia')}</div>
          ${q.explain ? `<p>${esc(q.explain)}</p>` : ''}
        </div>
        <button class="btn primary" id="next">${last ? 'Zobacz wynik' : 'Dalej →'}</button>`;
      const right = q.sayOptions ? q.sayOptions[q.answer] : q.options[q.answer];
      bindSay(pane.querySelector('#fb .feedback'), () => [ok ? 'Dobrze!' : wrongText, ...(ok ? [] : [q.optLang ? [right, q.optLang] : right]), ...[].concat(q.sayExplain != null ? q.sayExplain : q.explain || '')], true);
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
      const stars = starCount(pct);
      const msg = YOUNG
        ? ['Zajrzyj do lekcji i spróbuj jeszcze raz. Dasz radę! 📖', 'Pierwsza gwiazdka! Spróbuj jeszcze raz po więcej. 💪', 'Bardzo dobrze! 🎉', 'Brawo! Wszystkie gwiazdki! 🏆'][stars]
        : pct === 100 ? 'Perfekcyjnie! 🏆' : pct >= 80 ? 'Bardzo dobrze! 🎉' : pct >= 50 ? 'Nieźle, ale warto powtórzyć. 💪' : 'Przeczytaj ściągę i spróbuj jeszcze raz. 📖';
      pane.innerHTML = `
        <div class="result">
          <p class="big">${YOUNG ? starsHtml(stars) : `${pct}%`}</p>
          <p>${score} z ${qs.length} ${YOUNG ? 'dobrze' : 'poprawnych'} · ${msg}</p>
          ${mistakes.length ? '<button class="btn primary" id="fix">Popraw błędy</button>' : ''}
          <button class="btn" id="again">Jeszcze raz</button>
          <a class="btn" href="${opts.backHref}">${esc(opts.backLabel)}</a>
        </div>
        ${mistakes.length ? `<div class="mistakes"><h2>Do zapamiętania</h2><ol>
          ${mistakes.map((q) => `<li><b>${esc(q.q)}</b>${q.svg ? `<figure class="vis small">${q.svg}</figure>` : '<br>'}✔ ${esc(q.options[q.answer])}${q.explain ? `<br><span class="muted">${esc(q.explain)}</span>` : ''}</li>`).join('')}
        </ol></div>` : ''}`;
      const fix = pane.querySelector('#fix');
      if (fix) fix.onclick = () => quiz(pane, shuffle(mistakes), { ...opts, saveKey: null, onFinish: null, draw: null });
      pane.querySelector('#again').onclick = () => {
        if (opts.againHref && location.hash !== opts.againHref) location.hash = opts.againHref;
        else if (opts.againHref) route();
        else quiz(pane, opts.draw ? opts.draw() : shuffle(qs), opts);
      };
    }

    show();
  }

  // ---------- Fiszki ----------
  // lang – języki stron fiszki do czytania na głos, np. ['en', 'pl'] (domyślnie obie po polsku)
  function flashcards(pane, list, lang) {
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
          ${sayButton('Posłuchaj fiszki')}
        </div>`;
      bindSay(pane.querySelector('.row'), sayCard, true);
      const card = pane.querySelector('.flash');
      card.onclick = flip;
      pane.querySelector('#prev').onclick = () => go(-1);
      pane.querySelector('#nxt').onclick = () => go(1);
      pane.querySelector('#mix').onclick = () => { deck = shuffle(deck); i = 0; flipped = false; show(); };
    }
    function sayCard() {
      const k = flipped ? 1 : 0;
      return [lang && lang[k] ? [deck[i][k], lang[k]] : deck[i][k]];
    }
    function flip() {
      flipped = !flipped;
      pane.querySelector('.flash').classList.toggle('flipped', flipped);
      if (SPEAK && state.autoSpeak) { stopSpeech(); playSay(pane.querySelector('.row .say'), sayCard); }
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
