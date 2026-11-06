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

  // ---------- Zapis postępu (w przeglądarce; z chmurą rodzica – także między urządzeniami, js/postep.js) ----------
  const P = window.POSTEP || null;
  let written = null; // ostatnio zapisany tekst – czy ktoś inny (druga karta, kopia) zmienił zapis w międzyczasie
  function load() {
    try { written = localStorage.getItem(STORE_KEY); return JSON.parse(written) || {}; } catch (e) { return {}; }
  }
  function saveQuiet() {
    try {
      const cur = localStorage.getItem(STORE_KEY);
      // zapis zmieniony w innej karcie tej przeglądarki: łączymy zamiast nadpisywać
      if (P && cur && cur !== written) {
        const merged = P.mergeState(state, JSON.parse(cur));
        for (const k of Object.keys(state)) delete state[k];
        Object.assign(state, EMPTY(), merged);
      }
      written = JSON.stringify(state);
      localStorage.setItem(STORE_KEY, written);
    } catch (e) { /* tryb prywatny itp. */ }
  }
  // zapis po zmianie w postępie: historia materiału + wysyłka do chmury (jeśli urządzenie jest połączone)
  function save() {
    recordHist();
    saveQuiet();
    if (P) P.cloud.touch();
  }
  // Pola zapisu – opis w js/postep.js (wrong/fixed/examsAt/tasksAt: czasy w ms, log: dziennik nauki, hist: materiał w dniu).
  const EMPTY = () => ({ best: {}, wrong: {}, fixed: {}, exams: {}, examsAt: {}, lessons: {}, tasks: {}, tasksAt: {}, sets: {}, at: {}, log: {}, hist: {} });
  const state = Object.assign(EMPTY(), load());

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
    try { written = JSON.stringify(state); localStorage.setItem(STORE_KEY, written); } catch (e) { /* brak dostępu */ }
  }
  if (P) P.prune(state);
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
    MODES.reading.name = 'Czytanie po angielsku';
    MODES.reading.about = 'Przeczytaj krótki tekst po angielsku i wybierz dobre odpowiedzi. Pytania są po polsku. Jeśli tekst jest trudny, kliknij 🔊 i posłuchaj go.';
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

  // ---------- Przerobiony materiał, dziennik nauki, czas ----------
  // Dział przerobiony = lekcja + quiz na co najmniej 80%. Częściowo: lekcja 40%, quiz do 60% (pełne przy 80%).
  // Dział bez lekcji: sam quiz (pełne przy 80%). Działy „na zapas” się nie liczą.
  const DONE_PCT = 80;
  const studySubjects = () => SUBJECTS.filter((s) => !s.link && coreTopics(s).length);
  function topicValue(s, t) {
    const k = topicKey(s, t);
    const q = Math.min((state.best[k] || 0) / DONE_PCT, 1);
    return lessonOf(s, t) ? 0.4 * (state.lessons[k] ? 1 : 0) + 0.6 * q : q;
  }
  const coverage = (s) => coreTopics(s).reduce((n, t) => n + topicValue(s, t), 0);
  const doneCount = (s) => coreTopics(s).filter((t) => topicValue(s, t) >= 0.999).length;
  // historia: ile działów przerobione na koniec dnia (do prognozy); zaczyna się od pierwszego postępu
  function recordHist() {
    if (!P) return;
    const vals = studySubjects().map((s) => [s.id, Math.round(coverage(s) * 100) / 100]);
    if (!Object.keys(state.hist).length && !vals.some(([, v]) => v > 0)) return;
    const h = state.hist[P.dayKey()] || (state.hist[P.dayKey()] = {});
    for (const [sid, v] of vals) h[sid] = Math.max(h[sid] || 0, v);
  }
  // przedmiot widoku (do liczenia czasu); '_' – start, powtórka, postępy
  function currentSid() {
    const p = location.hash.replace(/^#\/?/, '').split('/');
    return p[0] === 's' && findSubject(p[1]) ? p[1] : '_';
  }
  const log = (sid, field, n = 1) => { if (P) P.addLog(state, sid, field, n); };
  // Czas nauki: co 5 s, gdy karta jest widoczna i w ciągu ostatnich 2 minut był ruch (klik, klawisz, przewijanie)
  // albo czyta lektor. Porzucona, otwarta karta nie nabija czasu.
  const TICK = 5;
  const IDLE = 120000;
  let lastAct = Date.now();
  let unsaved = 0;
  let lastTouch = 0;
  ['pointerdown', 'keydown', 'scroll', 'touchstart', 'wheel', 'mousemove'].forEach((ev) =>
    window.addEventListener(ev, () => { lastAct = Date.now(); }, { passive: true, capture: true }));
  if (P) {
    setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      const reading = synth && synth.speaking;
      if (!reading && (Date.now() - lastAct > IDLE || !document.hasFocus())) return;
      log(currentSid(), 't', TICK);
      if (++unsaved >= 6) { unsaved = 0; saveQuiet(); }
      // sam czas nauki (lekcja, ściąga, fiszki – bez odpowiedzi) też trafia do chmury:
      // pierwszy raz ok. minutę po rozpoczęciu, potem najwyżej co 3 minuty
      if (Date.now() - lastTouch > 180000) { lastTouch = Date.now(); saveQuiet(); P.cloud.touch(); }
    }, TICK * 1000);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveQuiet(); });
    window.addEventListener('pagehide', saveQuiet);
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
    render();
  }
  function render() {
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (p[0] === 'powtorka') return review();
    if (p[0] === 'zrodla') return sources();
    if (p[0] === 'postepy') return stats();
    if (p[0] === 'chmura') return cloudView();
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
  window.addEventListener('hashchange', () => route());
  // Widoki bez trwającego ćwiczenia można odświeżyć, gdy przyjdzie postęp z innego urządzenia.
  function rerender() {
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    const passive = !p.length || ['postepy', 'chmura', 'zrodla'].includes(p[0]) || (p[0] === 's' && p.length === 2);
    const typing = document.activeElement && /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if (passive && !typing) render();
  }

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
      ${P ? `<a class="card review" href="#/postepy">
        <span>📊 ${YOUNG ? 'Moje postępy' : 'Postępy i statystyki'}</span><span class="badge">${P.minutes(weekStats(P.dailyTotals(state), P.dayKey()).tot.t)} w 7 dni</span>
      </a>` : ''}
      <p class="muted" style="margin-top:22px">
        <a href="#/zrodla">📋 Na jakiej podstawie przygotowano materiał</a> ·
        <a href="index.html">🔀 Zmień klasę</a> ·
        ${P ? `<a href="#/chmura">☁️ Synchronizacja${P.cloud.codeOf(TRACK.id) ? ' ✓' : ''}</a> ·` : ''}
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
      if (confirm(`Na pewno usunąć wszystkie wyniki, listę błędów, znaczki 🎓 przerobionych lekcji i statystyki nauki w ścieżce „${TRACK.name}”?${P && P.cloud.codeOf(TRACK.id) ? ' Wyniki znikną też na innych połączonych urządzeniach.' : ''}`)) {
        // resetAt: inne połączone urządzenia też odrzucą wyniki sprzed zerowania
        const keep = { autoSpeak: state.autoSpeak, idKeys: state.idKeys };
        for (const k of Object.keys(state)) delete state[k];
        Object.assign(state, EMPTY(), keep, { resetAt: Date.now() });
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
    if (tab === 'pigulka' && !t.infographic) tab = 'teoria';
    app.innerHTML = `
      ${crumbs([[s.name, `#/s/${s.id}`], [t.name]])}
      <h1>${esc(t.name)}</h1>
      ${t.chapter ? `<p class="muted">📘 ${s.book ? `${esc(s.book)}: ` : ''}${esc(t.chapter)}</p>` : ''}
      ${t.extra ? `<p class="muted">📦 Na zapas – tego działu nie ma w podręczniku tej klasy.</p>` : ''}
      <nav class="tabs">
        ${lesson ? `<a href="${base}/lekcja" class="${tab === 'lekcja' ? 'on' : ''}">🎓 Lekcja</a>` : ''}
        <a href="${base}/teoria" class="${tab === 'teoria' ? 'on' : ''}">📖 Ściąga</a>
        ${t.infographic ? `<a href="${base}/pigulka" class="${tab === 'pigulka' ? 'on' : ''}">🗺️ W pigułce</a>` : ''}
        ${hasCards ? `<a href="${base}/fiszki" class="${tab === 'fiszki' ? 'on' : ''}">🃏 Fiszki (${t.flashcards.length})</a>` : ''}
        <a href="${base}/quiz" class="${tab === 'quiz' ? 'on' : ''}">✅ Quiz (${QUIZ_SIZE ? Math.min(QUIZ_SIZE, t.questions.length) : t.questions.length})</a>
        ${tasks.length ? `<a href="${base}/zadania" class="${tab === 'zadania' ? 'on' : ''}">✍️ Zadania otwarte (${tasks.length})</a>` : ''}
      </nav>
      <div id="pane"></div>`;
    const pane = document.getElementById('pane');
    if (tab === 'lekcja') return lessonView(pane, lesson, s, t, base);
    if (tab === 'fiszki') return flashcards(pane, t.flashcards, t.cardLang);
    if (tab === 'pigulka') return infographicView(pane, s, t, base);
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

  // ---------- Infografika „🗺️ W pigułce” (cały dział na jednym obrazie) ----------
  // infografika: gotowy SVG (string) albo opis treści rysowany szablonem z js/infografiki.js
  function infographicSvg(s, t) {
    if (typeof t.infographic === 'string') return t.infographic;
    try { return window.INFOGRAFIKA.render(t.infographic, `${s.id}-${t.id}`); } catch (e) { console.error(e); return '<p>Nie udało się narysować infografiki.</p>'; }
  }
  function infographicView(pane, s, t, base) {
    const hasCards = t.flashcards && t.flashcards.length;
    pane.innerHTML = `
      ${SPEAK ? `<p class="say-row">${sayButton('Posłuchaj opisu')} <span class="muted">Posłuchaj opisu</span></p>` : ''}
      <figure class="vis info">${infographicSvg(s, t)}
        ${t.infographicNote ? `<figcaption>${t.infographicNote}</figcaption>` : ''}</figure>
      <p class="muted no-print">🧠 Spróbuj potem narysować ten schemat z pamięci – i porównaj.</p>
      <div class="no-print">
        <a class="btn primary" href="${base}/quiz">Sprawdź się w quizie →</a>
        ${hasCards ? `<a class="btn" href="${base}/fiszki">🃏 Fiszki</a>` : ''}
        <a class="btn" href="${base}/teoria">📖 Ściąga</a>
        <button class="btn" id="print">🖨️ Drukuj</button>
      </div>`;
    pane.querySelector('#print').onclick = () => window.print();
    const svg = pane.querySelector('.info svg');
    bindSay(pane.querySelector('.say-row'), () => [t.name, (svg && svg.getAttribute('aria-label')) || '', t.infographicNote || '']);
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
          state.tasksAt[x.key] = Date.now();
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
          : `${SPEAK ? `<p class="say-row passage-say">${sayButton('Posłuchaj tekstu')} <span class="muted">Posłuchaj tekstu</span></p>` : ''}<article class="passage">${e.text}</article>`}
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

    // tekst do przeczytania – fragmenty z lang="en" czyta głos angielski
    if (e.text) bindSay(app.querySelector('.passage-say'), () => [e.text]);

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
        log(s.id, ok ? 'ok' : 'bad');
      });
      let counted = false;
      if (listening) app.querySelector('#tr').open = true;
      const openCount = e.items.filter((it) => it.type === 'open').length;
      function summary() {
        const scored = Object.keys(self).length;
        const got = auto + Object.values(self).reduce((a, b) => a + b, 0);
        const pct = Math.round((got / max) * 100);
        const complete = scored === openCount;
        if (complete) {
          state.sets[key] = Math.max(state.sets[key] || 0, pct);
          if (!counted) { counted = true; log(s.id, 'q'); }
          save();
        }
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
      state.at[topicKey(s, t)] = Date.now();
      log(s.id, 'l');
      save();
      pane.innerHTML = `<div class="result"><p class="big">🎓</p><h2>Lekcja ukończona!</h2>
        <p>Teraz utrwal wiedzę: przejrzyj fiszki albo sprawdź się w quizie.</p>
        <a class="btn primary" href="${base}/quiz">✅ Quiz</a>
        ${t.flashcards && t.flashcards.length ? `<a class="btn" href="${base}/fiszki">🃏 Fiszki</a>` : ''}
        <a class="btn" href="${base}/teoria">📖 Ściąga</a>
        ${t.infographic ? `<a class="btn" href="${base}/pigulka">🗺️ Zobacz dział w pigułce</a>` : ''}
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
      onFinish: (pct) => { state.exams[s.id] = pct; state.examsAt[s.id] = Date.now(); log(s.id, 'q'); save(); },
      backHref: `#/s/${s.id}`,
      backLabel: `Wróć do: ${s.name}`,
      againHref: `#/s/${s.id}/egzamin`,
    });
  }

  // ---------- Postępy i statystyki (#/postepy) ----------
  const FIELDS = ['t', 'ok', 'bad', 'l', 'q'];
  const activeDay = (e) => Object.values(e || {}).some((x) => (x.t || 0) >= 60 || x.ok || x.bad || x.l);
  // suma z n dni kończących się w dniu end: per[przedmiot] i tot (+ liczba dni z nauką)
  function weekStats(days, end, n = 7) {
    const per = {};
    const tot = { t: 0, ok: 0, bad: 0, l: 0, q: 0, days: 0 };
    for (let i = 0; i < n; i++) {
      const e = days[P.addDays(end, -i)];
      if (!e) continue;
      for (const sid in e) {
        const o = per[sid] || (per[sid] = { t: 0, ok: 0, bad: 0, l: 0, q: 0 });
        for (const f of FIELDS) { o[f] += e[sid][f] || 0; tot[f] += e[sid][f] || 0; }
      }
      if (activeDay(e)) tot.days++;
    }
    return { per, tot };
  }
  function streak(days) {
    let d = P.dayKey();
    if (!activeDay(days[d])) d = P.addDays(d, -1);
    let n = 0;
    while (activeDay(days[d]) && n < 1000) { n++; d = P.addDays(d, -1); }
    return n;
  }
  const accuracy = (o) => (o.ok + o.bad ? Math.round((o.ok / (o.ok + o.bad)) * 100) : null);
  // działy do odświeżenia: słaby wynik, quiz poniżej progu, lekcja bez quizu, dawno nie powtarzane
  function weakTopics() {
    const now = Date.now();
    const out = [];
    for (const s of studySubjects()) {
      for (const t of coreTopics(s)) {
        const k = topicKey(s, t);
        const b = state.best[k];
        const ago = state.at[k] ? Math.floor((now - state.at[k]) / 864e5) : 0;
        if (b != null && b < 50) out.push({ s, t, why: `słaby wynik w quizie (${b}%)`, rank: b / 100 });
        else if (b != null && b < DONE_PCT) out.push({ s, t, why: `quiz ${b}% – do przerobienia trzeba ${DONE_PCT}%`, rank: 1 + b / 100 });
        else if (state.lessons[k] && b == null) out.push({ s, t, why: 'po lekcji – zrób quiz', rank: 2 });
        else if (b != null && ago > 30) out.push({ s, t, why: `dawno nie powtarzany (${ago} dni)`, rank: 3 - ago / 1000 });
      }
    }
    return out.sort((a, b) => a.rank - b.rank);
  }
  // ---------- Podsumowanie z rekomendacją (panel postępów i raport dla rodzica) ----------
  // Same reguły na wynikach – bez zgadywania: mocne strony, słabe strony (z przykładowym pytaniem z błędem)
  // i plan na najbliższy tydzień. Każdy punkt: { text, href? }.
  // treść pytania do cytatu „…”: cudzysłów w środku zamieniamy na «…»
  const shortQ = (q) => {
    const t = String(q).replace(/\s+/g, ' ').replace(/„([^”]*)”/g, '«$1»').trim();
    return t.length > 90 ? `${t.slice(0, 87).trim()}…` : t;
  };
  function insights() {
    const days = P.dailyTotals(state);
    const w = weekStats(days, P.dayKey());
    const now = Date.now();
    // błędy do poprawy według działów
    const wrongBy = {};
    for (const key of Object.keys(state.wrong)) {
      const q = resolveKey(key);
      if (!q) continue;
      const tk = key.split('/').slice(0, 2).join('/');
      (wrongBy[tk] || (wrongBy[tk] = [])).push(q);
    }
    const strong = [];
    const weak = [];
    const fresh = [];
    const stale = [];
    for (const s of studySubjects()) {
      let firstNew = null;
      for (const t of coreTopics(s)) {
        const k = topicKey(s, t);
        const b = state.best[k];
        const errs = wrongBy[k] || [];
        const href = `#/s/${s.id}/t/${t.id}`;
        if (b != null && b >= 90 && errs.length < 2) strong.push({ s, t, b, text: `${s.name} · ${t.name} – quiz ${b}%`, href });
        if ((b != null && b < DONE_PCT) || errs.length >= 3) {
          const ex = errs[0] ? ` Przykład pytania z błędem: „${shortQ(errs[0].q)}”` : '';
          const what = b != null ? `quiz ${b}%` : 'jeszcze bez quizu';
          weak.push({ s, t, b, n: errs.length, score: (b == null ? 60 : b) - errs.length * 3, href,
            text: `${s.name} · ${t.name} – ${what}${errs.length ? `, ${errs.length} ${P.plural(errs.length, ['pytanie', 'pytania', 'pytań'])} do poprawy` : ''}.${ex}` });
        }
        if (!firstNew && b == null && !state.lessons[k]) firstNew = { s, t, href }; // dział jeszcze nieruszany
        if (b != null && b >= DONE_PCT && state.at[k] && now - state.at[k] > 30 * 864e5) stale.push({ s, t, ago: Math.floor((now - state.at[k]) / 864e5), href });
      }
      if (firstNew) fresh.push({ ...firstNew, cov: coverage(s) / coreTopics(s).length, t7: (w.per[s.id] || {}).t || 0 });
    }
    // przedmioty w tym tygodniu (co najmniej 10 odpowiedzi)
    const subjWeek = studySubjects().map((s) => ({ s, o: w.per[s.id] || { ok: 0, bad: 0 } })).filter((x) => x.o.ok + x.o.bad >= 10);
    for (const x of subjWeek) {
      const a = accuracy(x.o);
      if (a >= 85) strong.unshift({ text: `${x.s.name} – ${a}% dobrych odpowiedzi w ostatnich 7 dniach (${x.o.ok} z ${x.o.ok + x.o.bad})`, href: `#/s/${x.s.id}` });
      if (a < 60) weak.unshift({ score: -100, text: `${x.s.name} – tylko ${a}% dobrych odpowiedzi w ostatnich 7 dniach (${x.o.ok} z ${x.o.ok + x.o.bad}).`, href: `#/s/${x.s.id}` });
    }
    strong.sort((a, b) => (b.b || 101) - (a.b || 101));
    weak.sort((a, b) => a.score - b.score);
    // plan na tydzień: 3–5 kroków
    const plan = [];
    for (const x of weak.filter((y) => y.t).slice(0, 2)) {
      const how = lessonOf(x.s, x.t) && !state.lessons[topicKey(x.s, x.t)] ? 'zrób lekcję' : 'przejrzyj ściągę i fiszki';
      plan.push({ text: `Popraw „${x.t.name}” (${x.s.name}): ${how}, potem quiz – cel ${DONE_PCT}%.`, href: x.href });
    }
    const wrongAll = Object.keys(state.wrong).filter(resolveKey).length;
    if (wrongAll >= 5) plan.push({ text: `Przejdź „Powtórkę błędów” – ${wrongAll} ${P.plural(wrongAll, ['pytanie czeka', 'pytania czekają', 'pytań czeka'])} na poprawę.`, href: '#/powtorka' });
    // nowy dział: najpierw przedmiot, w którym najmniej przerobione (i dawno nieruszany)
    fresh.sort((a, b) => a.cov - b.cov || a.t7 - b.t7);
    for (const x of fresh.slice(0, plan.length >= 3 ? 1 : 2)) plan.push({ text: `Nowy dział: „${x.t.name}” (${x.s.name}) – lekcja i quiz.`, href: x.href });
    stale.sort((a, b) => b.ago - a.ago);
    if (stale[0] && plan.length < 5) plan.push({ text: `Odśwież „${stale[0].t.name}” (${stale[0].s.name}) – ostatnio ${stale[0].ago} dni temu. Wystarczy quiz.`, href: stale[0].href });
    const goal = YOUNG ? 10 : 20;
    if (w.tot.t < goal * 60 * 4) plan.push({ text: `Cel czasu: ok. ${goal} minut nauki dziennie przez 5 dni (w ostatnich 7 dniach: ${P.minutes(w.tot.t)}).` });
    else if (w.tot.days < 4) plan.push({ text: `Lepiej krócej, a częściej: rozłóż naukę na 4–5 dni w tygodniu (teraz: ${w.tot.days} ${P.plural(w.tot.days, ['dzień', 'dni', 'dni'])}).` });
    return { strong: strong.slice(0, 5), weak: weak.slice(0, 5), plan: plan.slice(0, 5) };
  }
  // sekcje raportu: tytuł + punkty (tekst) – arkusz rodzica wyświetla je bez zmian
  function insightSections() {
    const x = insights();
    return [
      { title: '💪 Mocne strony', items: x.strong.map((i) => i.text), empty: 'Jeszcze za mało wyników – mocne strony pojawią się po pierwszych quizach.' },
      { title: '🧩 Nad czym popracować', items: x.weak.map((i) => i.text), empty: 'Brak słabych działów – świetnie!' },
      { title: '🎯 Plan na najbliższy tydzień', items: x.plan.map((i) => i.text), empty: 'Kontynuuj naukę w obecnym tempie.' },
    ];
  }
  function trackForecast() {
    const subs = studySubjects();
    const total = subs.reduce((n, s) => n + coreTopics(s).length, 0);
    const cov = subs.reduce((n, s) => n + coverage(s), 0);
    return { total, cov, done: subs.reduce((n, s) => n + doneCount(s), 0), f: P.forecast(state.hist, subs.map((s) => s.id), total, cov) };
  }
  // Podsumowanie ścieżki dla raportu w chmurze (liczy je urządzenie – arkusz nie zna listy działów).
  function buildSummary() {
    const days = P.dailyTotals(state);
    const from = P.addDays(P.dayKey(), -34);
    const recent = {};
    for (const d in days) {
      if (d < from) continue;
      recent[d] = {};
      for (const sid in days[d]) recent[d][sid] = FIELDS.map((f) => days[d][sid][f] || 0);
    }
    const all = trackForecast();
    return {
      v: 1, track: TRACK.id, name: TRACK.name, day: P.dayKey(),
      subjects: studySubjects().map((s) => {
        const total = coreTopics(s).length;
        const cov = coverage(s);
        return { id: s.id, name: s.name, icon: s.icon, total, done: doneCount(s), pct: Math.round((cov / total) * 100), fc: P.forecastText(P.forecast(state.hist, [s.id], total, cov), true) };
      }),
      total: all.total, done: all.done, pct: all.total ? Math.round((all.cov / all.total) * 100) : 0, fc: P.forecastText(all.f),
      days: recent,
      weak: weakTopics().slice(0, 6).map((x) => `${x.s.name} · ${x.t.name} – ${x.why}`),
      sections: insightSections(),
      wrong: Object.keys(state.wrong).filter(resolveKey).length,
    };
  }
  const subjectName = (sid) => (findSubject(sid) ? findSubject(sid).name : 'Inne (start, powtórka, statystyki)');
  const WD = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'so'];
  function dayChart(days, n = 14) {
    const today = P.dayKey();
    const list = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = P.addDays(today, -i);
      const t = Object.values(days[d] || {}).reduce((a, x) => a + (x.t || 0), 0);
      list.push({ d, m: Math.round(t / 60) });
    }
    const top = Math.max(...list.map((x) => x.m));
    const scale = Math.max(10, top);
    const topAt = list.findIndex((x) => x.m === top);
    return `<figure class="chart" role="img" aria-label="Czas nauki w ostatnich ${n} dniach: ${list.map((x) => `${P.dateShort(x.d)} ${x.m} min`).join(', ')}">
        <div class="bars">${list.map((x, k) => `<div class="col${x.d === today ? ' today' : ''}" title="${WD[P.parseDay(x.d).getDay()]} ${P.dateShort(x.d)}: ${x.m} min">
          <span class="v">${k === topAt && top ? `${top}` : ''}</span><span class="b" style="height:${Math.round((x.m / scale) * 100)}%"></span></div>`).join('')}</div>
        <div class="days">${list.map((x) => `<span${x.d === today ? ' class="today"' : ''}>${WD[P.parseDay(x.d).getDay()]}</span>`).join('')}</div>
        <figcaption class="muted">Minuty nauki dziennie, ostatnie ${n} dni${top ? ` · najwięcej: ${top} min` : ''}</figcaption>
      </figure>`;
  }
  function reportText() {
    const days = P.dailyTotals(state);
    const today = P.dayKey();
    const w = weekStats(days, today);
    const prev = weekStats(days, P.addDays(today, -7));
    const all = trackForecast();
    const acc = accuracy(w.tot);
    const lines = [
      `📊 Raport nauki – ${TRACK.name}`,
      `Ostatnie 7 dni (${P.dateShort(P.addDays(today, -6))}–${P.dateShort(today)})`,
      '',
      `Czas nauki: ${P.minutes(w.tot.t)} (poprzednie 7 dni: ${P.minutes(prev.tot.t)})`,
      `Dni z nauką: ${w.tot.days} z 7`,
      `Odpowiedzi: ${w.tot.ok} dobrych, ${w.tot.bad} złych${acc != null ? ` (${acc}% dobrych)` : ''}`,
      `Lekcje: ${w.tot.l} · quizy i zestawy: ${w.tot.q}`,
      '',
      'Przedmioty (czas w 7 dni · przerobiony materiał · prognoza):',
      ...studySubjects().map((s) => {
        const total = coreTopics(s).length;
        const cov = coverage(s);
        return `• ${s.name}: ${P.minutes((w.per[s.id] || {}).t)} · ${Math.round((cov / total) * 100)}% (${doneCount(s)} z ${total} działów) · ${P.forecastText(P.forecast(state.hist, [s.id], total, cov), true)}`;
      }),
      '',
      `Cały materiał: ${all.total ? Math.round((all.cov / all.total) * 100) : 0}% (${all.done} z ${all.total} działów przerobionych)`,
      `Prognoza: ${P.forecastText(all.f)}`,
    ];
    for (const sec of insightSections()) lines.push('', `${sec.title}:`, ...(sec.items.length ? sec.items.map((i) => `• ${i}`) : [sec.empty]));
    const wrong = Object.keys(state.wrong).filter(resolveKey).length;
    if (wrong) lines.push('', `Pytania w powtórce błędów: ${wrong}`);
    return lines.join('\n');
  }

  function stats() {
    setTitle('Postępy');
    if (!P) { app.innerHTML = `${crumbs([['Postępy']])}<p>Statystyki są niedostępne.</p>`; return; }
    const days = P.dailyTotals(state);
    const today = P.dayKey();
    const w = weekStats(days, today);
    const prev = weekStats(days, P.addDays(today, -7));
    const all = trackForecast();
    const acc = accuracy(w.tot);
    const pctAll = all.total ? Math.round((all.cov / all.total) * 100) : 0;
    const subs = studySubjects();
    const stars = (s) => coreTopics(s).reduce((n, t) => n + starCount(state.best[topicKey(s, t)]), 0);
    const starsAll = subs.reduce((n, s) => n + stars(s), 0);
    const starsMax = subs.reduce((n, s) => n + coreTopics(s).length * 3, 0);
    const ser = streak(days);
    const ins = insights();
    const code = P.cloud.codeOf(TRACK.id);
    const cfg = P.cloud.cfg();
    const prof = code ? cfg.profiles[code] : null;
    const tile = (icon, label, big, small) => `<div class="tile"><span class="muted">${icon} ${label}</span><b>${big}</b><small class="muted">${small}</small></div>`;
    const fcOf = (s) => P.forecast(state.hist, [s.id], coreTopics(s).length, coverage(s));
    const fcRow = (s) => { const f = fcOf(s); return f.kind === 'wait' ? '' : f.kind === 'eta' ? `do końca: ${P.forecastText(f, true)}` : P.forecastText(f, true); };
    const fcAll = all.f.kind === 'eta' ? `Przy tempie z ostatnich tygodni cały materiał będzie przerobiony za <b>${esc(P.forecastText(all.f))}</b>.`
      : all.f.kind === 'wait' ? `Prognoza pojawi się po 2 tygodniach nauki – jeszcze ${all.f.left} ${P.plural(all.f.left, ['dzień', 'dni', 'dni'])}.`
      : all.f.kind === 'stalled' ? 'W ostatnich 4 tygodniach nie przybyło przerobionego materiału – prognozy nie da się policzyć.'
      : all.f.kind === 'done' ? 'Cały materiał przerobiony! 🎉'
      : all.f.kind === 'new' ? 'Prognoza pojawi się po 2 tygodniach nauki.' : '';
    const details = `
      <h2 class="sec">🔮 Prognoza</h2>
      <p>Cały materiał ścieżki: <b>${pctAll}%</b> (${all.done} z ${all.total} działów przerobionych).<br>${fcAll}</p>
      ${YOUNG ? `<ul class="plain">${subs.map((s) => `<li>${s.icon} ${esc(s.name)}: ${Math.round((coverage(s) / coreTopics(s).length) * 100)}%${fcRow(s) ? ` · ${esc(fcRow(s))}` : ''}</li>`).join('')}</ul>` : ''}
      <p class="muted">Dział jest <b>przerobiony</b>, gdy jest lekcja i quiz na co najmniej ${DONE_PCT}% (dział bez lekcji: sam quiz). Za samą lekcję liczy się 40%, za quiz do 60%. Prognoza porównuje tempo z ostatnich 7 i 28 dni, dlatego podaje przedział; pojawia się po 2 tygodniach nauki. Tempo zwykle się zmienia (sprawdziany, ferie), więc to tylko szacunek. Działy „na zapas” się nie liczą.</p>
      ${[['🎯 Plan na najbliższy tydzień', ins.plan, 'Kontynuuj naukę w obecnym tempie.'], ['🧩 Nad czym popracować', ins.weak, 'Brak słabych działów – świetnie!'], ['💪 Mocne strony', ins.strong, 'Mocne strony pojawią się po pierwszych quizach.']]
        .map(([title, items, empty]) => `<h2 class="sec">${title}</h2>${items.length ? `<ul class="topics insight">${items.map((i) => `<li>${i.href ? `<a href="${i.href}"><span>${esc(i.text)}</span><span aria-hidden="true">→</span></a>` : `<div class="note">${esc(i.text)}</div>`}</li>`).join('')}</ul>` : `<p class="muted">${empty}</p>`}`).join('')}
      <h2 class="sec">📤 Raport dla rodzica</h2>
      <p class="muted">Podsumowanie ostatnich 7 dni – wyślij je mailem albo komunikatorem.</p>
      <div class="row">
        ${navigator.share ? '<button class="btn primary" id="share">📤 Udostępnij</button>' : ''}
        <a class="btn${navigator.share ? '' : ' primary'}" id="mail" href="#">✉️ E-mail</a>
        <button class="btn" id="copy">📋 Kopiuj</button>
      </div>
      <details class="report"><summary>Pokaż raport</summary><pre id="report">${esc(reportText())}</pre></details>
      <h2 class="sec">☁️ Synchronizacja</h2>
      <p>${prof ? `Połączono z chmurą rodzica (profil <b>${esc(prof.name)}</b>). ${prof.err ? `⚠️ Ostatnia próba się nie udała: ${esc(prof.err)}.` : prof.ok ? `Ostatnio: ${new Date(prof.ok).toLocaleString('pl-PL')}.` : ''}` : 'Postęp jest zapisany tylko na tym urządzeniu.'}
        <a href="#/chmura">${prof ? 'Ustawienia' : 'Połącz telefon i komputer'} →</a></p>
      <h2 class="sec">💾 Kopia zapasowa</h2>
      <p class="muted">Plik z postępem wszystkich klas na tym urządzeniu. Wczytanie kopii łączy ją z obecnym postępem – niczego nie usuwa.</p>
      <div class="row"><button class="btn" id="exp">⬇️ Zapisz kopię</button>
        <label class="btn" for="imp">⬆️ Wczytaj kopię</label><input type="file" id="imp" accept=".json,application/json" hidden></div>`;
    app.innerHTML = `${crumbs([['Postępy']])}
      <h1>📊 ${YOUNG ? 'Moje postępy' : 'Postępy i statystyki'}</h1>
      ${YOUNG ? '<p class="muted">Zobacz, ile już umiesz! Każdy dzień nauki się liczy.</p>' : ''}
      <div class="tiles">
        ${tile('⏱️', 'Czas nauki – 7 dni', P.minutes(w.tot.t), `poprzednie 7 dni: ${P.minutes(prev.tot.t)}`)}
        ${tile('📅', 'Dni z nauką', `${w.tot.days} z 7`, ser ? `seria: ${ser} ${P.plural(ser, ['dzień', 'dni', 'dni'])} z rzędu 🔥` : 'zacznij serię już dziś')}
        ${YOUNG ? tile('✅', 'Dobre odpowiedzi – 7 dni', `${w.tot.ok}`, w.tot.l ? `lekcje: ${w.tot.l}` : 'brawo za każdą!')
          : tile('✅', 'Odpowiedzi – 7 dni', acc != null ? `${acc}% dobrych` : '–', `${w.tot.ok} dobrych · ${w.tot.bad} ${P.plural(w.tot.bad, ['zła', 'złe', 'złych'])}`)}
        ${YOUNG ? tile('⭐', 'Gwiazdki', `${starsAll} z ${starsMax}`, `przerobione działy: ${all.done} z ${all.total}`)
          : tile('📚', 'Przerobiony materiał', `${pctAll}%`, `${all.done} z ${all.total} działów`)}
      </div>
      ${dayChart(days)}
      <h2 class="sec">Przedmioty</h2>
      <div class="srows">${subs.map((s) => {
        const o = w.per[s.id] || { t: 0, ok: 0, bad: 0 };
        const pct = Math.round((coverage(s) / coreTopics(s).length) * 100);
        const a = accuracy(o);
        return `<a class="srow" href="#/s/${s.id}" style="--accent:${s.color}">
          <span class="shead"><span>${s.icon} ${esc(s.name)}</span><b>${YOUNG ? starsHtml(Math.round((stars(s) / (coreTopics(s).length * 3)) * 3)) : `${pct}%`}</b></span>
          ${bar(pct, false)}
          <small class="muted">${doneCount(s)} z ${coreTopics(s).length} działów przerobione · 7 dni: ${P.minutes(o.t)}${a != null && !YOUNG ? ` · ${a}% dobrych` : ''}${YOUNG || !fcRow(s) ? '' : ` · ${esc(fcRow(s))}`}</small>
        </a>`;
      }).join('')}</div>
      ${w.per._ && w.per._.t >= 60 ? `<p class="muted">Poza przedmiotami (start, powtórka błędów, statystyki): ${P.minutes(w.per._.t)} w 7 dni.</p>` : ''}
      ${YOUNG ? `<details class="parent"><summary>👨‍👩‍👧 Dla rodzica: szczegóły, prognoza i raport</summary>${details}</details>` : details}`;

    const text = () => reportText();
    const mail = app.querySelector('#mail');
    mail.onclick = (e) => { e.preventDefault(); location.href = `mailto:?subject=${encodeURIComponent(`Raport nauki – ${TRACK.name}`)}&body=${encodeURIComponent(text())}`; };
    const share = app.querySelector('#share');
    if (share) share.onclick = () => navigator.share({ title: `Raport nauki – ${TRACK.name}`, text: text() }).catch(() => {});
    app.querySelector('#copy').onclick = async () => {
      try { await navigator.clipboard.writeText(text()); P.toast('📋 Skopiowano raport.'); } catch (e) {
        app.querySelector('details.report').open = true;
        P.toast('Nie udało się skopiować – zaznacz tekst raportu i skopiuj go ręcznie.');
      }
    };
    app.querySelector('#exp').onclick = () => {
      const blob = new Blob([JSON.stringify(P.exportAll())], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `pomoc-w-szkole-postep-${P.dayKey()}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    };
    app.querySelector('#imp').onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then((txt) => {
        const n = P.importAll(JSON.parse(txt));
        P.toast(`💾 Wczytano kopię (${n} ${P.plural(n, ['ścieżka', 'ścieżki', 'ścieżek'])}).`);
        render();
      }).catch((err) => P.toast(`Nie udało się wczytać kopii: ${err.message}`));
    };
  }

  // ---------- Synchronizacja urządzeń (#/chmura) ----------
  function cloudView() {
    setTitle('Synchronizacja');
    if (!P) { app.innerHTML = `${crumbs([['Synchronizacja']])}<p>Synchronizacja jest niedostępna.</p>`; return; }
    const c = P.cloud.cfg();
    const codes = c.script ? Object.keys(c.profiles) : [];
    const when = (ts) => new Date(ts).toLocaleString('pl-PL', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
    app.innerHTML = `${crumbs([['Synchronizacja']])}
      <h1>☁️ Synchronizacja urządzeń</h1>
      ${codes.length ? `
        <p>To urządzenie jest połączone z chmurą rodzica. Postęp łączy się sam z innymi połączonymi urządzeniami (np. telefon i komputer) – także po nauce bez internetu, gdy tylko wróci połączenie.</p>
        <h2 class="sec">Profile</h2>
        <ul class="topics">${codes.map((k) => {
          const pr = c.profiles[k];
          return `<li><div class="prof"><span><b>${esc(pr.name)}</b><br><small class="muted">${pr.err ? `⚠️ ${esc(pr.err)} (${when(pr.errAt)})` : pr.ok ? `✓ zsynchronizowano: ${when(pr.ok)}` : 'czeka na pierwszą synchronizację'}</small></span>
            <button class="btn" data-off="${esc(k)}">Odłącz</button></div></li>`;
        }).join('')}</ul>
        <h2 class="sec">Czyje są klasy na tym urządzeniu</h2>
        <p class="muted">Gdy z tego urządzenia korzysta kilkoro dzieci, przypisz każdą klasę do właściwego profilu.</p>
        <div class="assign">${TRACKS.map((t) => `<label><span>${t.icon} ${esc(t.name)}</span>
          <select data-track="${t.id}"><option value="">tylko to urządzenie</option>${codes.map((k) => `<option value="${esc(k)}"${c.tracks[t.id] === k ? ' selected' : ''}>${esc(c.profiles[k].name)}</option>`).join('')}</select></label>`).join('')}</div>
        <button class="btn primary" id="syncnow">🔄 Synchronizuj teraz</button>`
      : `<p>To urządzenie <b>nie jest połączone</b> – postęp zapisuje się tylko tutaj, w tej przeglądarce.</p>
        <p>Po połączeniu wyniki z telefonu i komputera łączą się same, a rodzic co tydzień dostaje raport na maila.</p>`}
      <h2 class="sec">${codes.length ? 'Dodaj profil (np. rodzeństwa)' : 'Połącz to urządzenie'}</h2>
      <p class="muted">Otwórz na tym urządzeniu link połączenia od rodzica – albo wklej go tutaj:</p>
      <div class="row"><input type="text" id="link" class="gap" placeholder="https://…?polacz=…&amp;skrypt=…" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Link połączenia">
        <button class="btn primary" id="connect">Połącz</button></div>
      <p id="msg" class="muted" role="status"></p>
      <details class="parent"><summary>👨‍👩‍👧 Dla rodzica: jak przygotować chmurę (raz, ok. 10 minut)</summary>
        <ol>
          <li>Na swoim koncie Google utwórz nowy, pusty arkusz (np. „Pomoc w szkole – postępy”).</li>
          <li>W arkuszu wybierz <b>Rozszerzenia → Apps Script</b>. Usuń przykładowy kod i wklej cały kod z pliku <a href="apps-script/Kod.js" target="_blank" rel="noopener">apps-script/Kod.js</a>. Zapisz projekt. Jeśli zamiast edytora widzisz „Nie udało się otworzyć pliku”, w przeglądarce jest zalogowanych kilka kont Google – zrób całą instalację w oknie incognito, zalogowany tylko na jedno konto.</li>
          <li>Wróć do arkusza i odśwież stronę – pojawi się menu <b>🎒 Pomoc w szkole</b>. Wybierz <b>1. Przygotuj arkusz</b> i zezwól na dostęp. Google pokaże ostrzeżenie, że aplikacja nie jest zweryfikowana – przy własnym skrypcie to normalne: <i>Zaawansowane → Przejdź do projektu</i>.</li>
          <li>W edytorze Apps Script: <b>Wdróż → Nowe wdrożenie</b>, typ <b>Aplikacja internetowa</b>, „Wykonaj jako”: <b>Ja</b>, „Kto ma dostęp”: <b>Każdy</b>. Skopiuj adres aplikacji (kończy się na <code>/exec</code>).</li>
          <li>W arkuszu: menu <b>🎒 Pomoc w szkole → 2. Zapisz adres aplikacji internetowej</b> i wklej adres.</li>
          <li>Menu <b>→ Dodaj dziecko</b>: wpisz imię. Arkusz pokaże link połączenia – wyślij go dziecku i otwórz na każdym jego urządzeniu.</li>
        </ol>
        <p class="muted">Raport przychodzi w każdą niedzielę wieczorem na adres z kolumny „E-mail do raportów” (domyślnie twój). Próbny raport: menu <b>→ Wyślij raport teraz</b>. Nazwy menu Google mogą się trochę różnić.</p>
      </details>
      <p class="muted">🔒 Dane trafiają tylko do arkusza Google rodzica. Link połączenia działa jak hasło: wysyłaj go prywatnie i nie publikuj. Kto nie ma linku, korzysta z aplikacji jak dotąd – tylko na swoim urządzeniu.</p>`;
    const msg = app.querySelector('#msg');
    app.querySelector('#connect').onclick = async () => {
      const l = P.cloud.parseLink(app.querySelector('#link').value);
      if (!l) { msg.textContent = 'To nie wygląda na link połączenia – powinien zawierać „polacz=” i „skrypt=”.'; return; }
      msg.textContent = 'Łączę…';
      try {
        const r = await P.cloud.connect(l.script, l.code, false);
        P.toast(`☁️ Połączono z profilem „${r.name}”.`);
        render();
      } catch (e) { msg.textContent = `Nie udało się połączyć: ${e.message}.`; }
    };
    app.querySelectorAll('[data-off]').forEach((b) => (b.onclick = () => {
      const pr = c.profiles[b.dataset.off];
      if (confirm(`Odłączyć profil „${pr.name}” od tego urządzenia? Postęp na tym urządzeniu zostanie, ale przestanie się łączyć z innymi.`)) { P.cloud.disconnect(b.dataset.off); render(); }
    }));
    app.querySelectorAll('select[data-track]').forEach((sel) => (sel.onchange = () => { P.cloud.assign(sel.dataset.track, sel.value || null); }));
    const now = app.querySelector('#syncnow');
    if (now) now.onclick = async () => { now.disabled = true; now.textContent = '🔄 Synchronizuję…'; await P.cloud.syncNow(); render(); };
  }

  // Zapis tej ścieżki dla synchronizacji (js/postep.js): stan jest tutaj, w pamięci.
  if (P) {
    P.cloud.register(STORE_KEY, {
      get: () => state,
      set: (m) => {
        const keep = { autoSpeak: state.autoSpeak };
        for (const k of Object.keys(state)) delete state[k];
        Object.assign(state, EMPTY(), m, keep);
        if (keep.autoSpeak === undefined) delete state.autoSpeak;
        saveQuiet();
        rerender();
      },
      beforeSync: () => {
        // po zerowaniu też (raport ma pokazać stan po zerowaniu, a nie sprzed niego)
        const empty = !state.resetAt && !Object.keys(state.best).length && !Object.keys(state.lessons).length && !Object.keys(state.log).length && !Object.keys(state.sets).length;
        if (!empty) {
          const sum = buildSummary();
          const h = P.hash(JSON.stringify(sum));
          if (!state.sum || state.sum.h !== h) state.sum = { ...sum, h, ts: Date.now() };
        }
        saveQuiet();
      },
    });
    P.cloud.onChange(rerender);
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
        // czas poprawienia – na innym urządzeniu to pytanie też zniknie z powtórki
        if (state.wrong[q.key]) { delete state.wrong[q.key]; state.fixed[q.key] = Date.now(); }
      } else {
        mistakes.push(q);
        state.wrong[q.key] = Date.now();
      }
      log(q.key.split('/')[0], ok ? 'ok' : 'bad');
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
        state.at[opts.saveKey] = Date.now();
        log(opts.saveKey.split('/')[0], 'q');
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
