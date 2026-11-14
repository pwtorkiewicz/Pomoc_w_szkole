/* Sprawdzanie pytań we wszystkich ścieżkach (js/sciezki.js): node tools/sprawdz-dane.js [ścieżka]
 * - każde pytanie ma stałe, unikalne (w całej aplikacji, we wszystkich ścieżkach) pole id,
 * - poprawny indeks odpowiedzi, brak powtórzonych odpowiedzi,
 * - unikalne id działów w przedmiocie; pola level (1–3), age ([od, do]) i requires (istniejące działy) w ścieżce „Świat”,
 * - pytania „Przewiduj i wyjaśnij” (pole why: drugi etap „Dlaczego?”, myth, optionExplain),
 * - karty „🛠️ Zrób” (pole activities: doświadczenie/projekt, obowiązkowe safety i source), ramka „👪 Dla rodzica” (pole parent),
 * - materiały działu (pole materials): typ, tytuł, źródło, adres https z listy zaufanych serwisów (MATERIAL_HOSTS),
 * - zadania otwarte (pole tasks): id, punkty, kroki rozwiązania, odpowiedź, zasady punktacji,
 * - zestawy ćwiczeń (window.EXERCISES): tryb, tekst/nagrania, zadania zamknięte, wpisywane i otwarte. */
const wczytaj = require('./dane');
const only = process.argv[2];
const problems = [];
const ids = new Map();
let n = 0;
let nt = 0;
let ne = 0;
let ni = 0;
const perTrack = [];
const MODES = ['czytanie', 'reading', 'listening', 'srodki', 'dyktando'];
// Pola do czytania na głos (tryb młodszego ucznia): say – tekst albo lista fragmentów (tekst | [tekst, 'en']),
// optLang – język odpowiedzi, sayOptions – teksty czytane zamiast odpowiedzi (tyle, ile odpowiedzi),
// sayExplain – czytane zamiast explain (jak say).
const LANGS = ['pl', 'en', 'de']; // jak LANGS w js/app.js
// Zakładka „🔗 Materiały” (docs/LEKCJE.md → „Materiały”): tylko oficjalne lub publiczne serwisy edukacyjne.
// Nowy serwis dopisuj świadomie – po sprawdzeniu, że jest oficjalny/publiczny i bezpieczny dla dzieci.
const MATERIAL_HOSTS = ['zpe.gov.pl', 'gov.pl', 'www.gov.pl', 'eli.gov.pl', 'cke.gov.pl', 'www.gov.uk', 'assets.publishing.service.gov.uk',
  'www.mext.go.jp', 'www.moe.gov.sg', 'www.lehrplanplus.bayern.de', 'www.thenational.academy', 'www.bbc.co.uk', 'www.nhk.or.jp', 'www2.nhk.or.jp', 'edu.web.nhk',
  'www.nextgenscience.org', 'archiwum.uokik.gov.pl'];
const MATERIAL_TYPES = ['film', 'animacja', 'zdjecia', 'prezentacja', 'doswiadczenie', 'lekcja', 'dokument', 'strona']; // jak MAT_TYPES w js/app.js
const MATERIAL_LANGS = ['pl', 'en', 'ja', 'de']; // jak MAT_LANGS w js/app.js
const checkSpeech = (q, where) => {
  for (const f of ['say', 'sayExplain']) {
    if (q[f] == null) continue;
    const parts = [].concat(q[f]);
    if (!parts.length || parts.some((p) => !(typeof p === 'string' || (Array.isArray(p) && p.length === 2 && typeof p[0] === 'string' && LANGS.includes(p[1]))))) problems.push(`${where}: złe pole ${f}`);
  }
  if (q.optLang != null && !LANGS.includes(q.optLang)) problems.push(`${where}: optLang musi być jednym z: ${LANGS.join(', ')}`);
  if (q.sayOptions != null && !(Array.isArray(q.sayOptions) && q.sayOptions.length === q.options.length && q.sayOptions.every((x) => typeof x === 'string'))) problems.push(`${where}: sayOptions – po jednym tekście na każdą odpowiedź`);
};
const useId = (id, where) => {
  if (!id || !/^[a-z0-9]{4,}$/.test(id)) problems.push(`${where}: brak poprawnego id`);
  else if (ids.has(id)) problems.push(`${where}: id ${id} już użyte w ${ids.get(id)}`);
  else ids.set(id, where);
};
// Id muszą być unikalne we wszystkich ścieżkach, więc wczytujemy każdą (filtr [ścieżka] zawęża tylko raport).
for (const track of wczytaj.sciezki()) {
  const window = wczytaj(track.id);
  const report = !only || only === track.id;
  const before = problems.length;
  const n0 = n;
  const subjectIds = new Set();
  for (const s of window.SUBJECTS) {
    if (subjectIds.has(s.id)) problems.push(`${track.id}: powtórzone id przedmiotu ${s.id}`);
    subjectIds.add(s.id);
    if (s.link) {
      // przedmiot-odnośnik: prowadzi do przedmiotu w innej ścieżce, sam nie ma działów
      const target = wczytaj.sciezki().find((x) => x.id === s.link.track);
      if (!target) problems.push(`${track.id}/${s.id}: odnośnik do nieznanej ścieżki ${s.link.track}`);
      else if (!wczytaj(target.id).SUBJECTS.some((x) => x.id === s.link.subject && !x.link)) problems.push(`${track.id}/${s.id}: w ścieżce ${target.id} nie ma przedmiotu ${s.link.subject}`);
      if (s.topics.length) problems.push(`${track.id}/${s.id}: przedmiot-odnośnik nie może mieć działów`);
    } else if (!s.topics.length) problems.push(`${track.id}/${s.id}: przedmiot bez działów`);
    const topicIds = new Set();
    for (const t of s.topics) {
      if (topicIds.has(t.id)) problems.push(`${s.id}: powtórzone id działu ${t.id}`);
      topicIds.add(t.id);
      // ścieżka „Świat”: poziom 1–3, „Najpierw zrób” – istniejące działy tej ścieżki ('przedmiot/dział'), bez odwołania do siebie
      if (t.level != null && ![1, 2, 3].includes(t.level)) problems.push(`${track.id}/${s.id}/${t.id}: level musi być 1, 2 albo 3`);
      // sugerowany wiek: [od, do], 5–18 lat; w działach z poziomem (ścieżka „Świat”) obowiązkowy
      if (t.age != null && !(Array.isArray(t.age) && t.age.length === 2 && t.age.every((x) => Number.isInteger(x) && x >= 5 && x <= 18) && t.age[0] <= t.age[1])) problems.push(`${track.id}/${s.id}/${t.id}: age musi mieć postać [od, do], np. [8, 10]`);
      if (t.level != null && t.age == null) problems.push(`${track.id}/${s.id}/${t.id}: brak pola age (sugerowany wiek)`);
      for (const r of t.requires || []) {
        const [rs, rt] = String(r).split('/');
        const rsub = window.SUBJECTS.find((x) => x.id === rs);
        if (!rsub || !rsub.topics.some((x) => x.id === rt)) problems.push(`${track.id}/${s.id}/${t.id}: requires – nie ma działu ${r}`);
        else if (rs === s.id && rt === t.id) problems.push(`${track.id}/${s.id}/${t.id}: requires wskazuje na ten sam dział`);
      }
      (t.materials || []).forEach((m, i) => {
        const where = `${track.id}/${s.id}/${t.id} materiał ${i + 1}`;
        if (!m || !m.title || !m.source) problems.push(`${where}: brak tytułu albo źródła`);
        if (!MATERIAL_TYPES.includes(m.type)) problems.push(`${where}: typ musi być jednym z: ${MATERIAL_TYPES.join(', ')}`);
        if (m.lang != null && !MATERIAL_LANGS.includes(m.lang)) problems.push(`${where}: lang musi być jednym z: ${MATERIAL_LANGS.join(', ')}`);
        let u = null;
        try { u = new URL(m.url); } catch (e) { /* zły adres */ }
        if (!u || u.protocol !== 'https:') problems.push(`${where}: adres musi zaczynać się od https://`);
        else if (!MATERIAL_HOSTS.includes(u.hostname)) problems.push(`${where}: serwis ${u.hostname} spoza listy zaufanych (MATERIAL_HOSTS w tools/sprawdz-dane.js)`);
      });
      t.questions.forEach((q, i) => {
        n++;
        const where = `${track.id}/${s.id}/${t.id} pytanie ${i + 1} („${String(q.q).slice(0, 40)}”)`;
        useId(q.id, where);
        if (!Array.isArray(q.options) || q.options.length < 2) problems.push(`${where}: za mało odpowiedzi`);
        else {
          if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) problems.push(`${where}: zły indeks odpowiedzi`);
          if (new Set(q.options).size !== q.options.length) problems.push(`${where}: powtórzone odpowiedzi`);
          checkSpeech(q, where);
          if (q.optionExplain != null && !(Array.isArray(q.optionExplain) && q.optionExplain.length === q.options.length)) problems.push(`${where}: optionExplain – po jednym tekście (albo '') na każdą odpowiedź`);
          // „🔮 Przewiduj i wyjaśnij”: drugi etap „Dlaczego?” – dokładnie jedna poprawna odpowiedź, mit ≠ poprawna
          if (q.why != null) {
            const w = q.why;
            if (!w || !Array.isArray(w.options) || w.options.length < 2) problems.push(`${where}: why – za mało odpowiedzi`);
            else {
              if (!(Number.isInteger(w.answer) && w.answer >= 0 && w.answer < w.options.length)) problems.push(`${where}: why – zły indeks odpowiedzi`);
              if (new Set(w.options).size !== w.options.length) problems.push(`${where}: why – powtórzone odpowiedzi`);
              if (!w.explain) problems.push(`${where}: why – brak explain`);
              const myths = [].concat(w.myth == null ? [] : w.myth);
              if (myths.some((m) => !Number.isInteger(m) || m < 0 || m >= w.options.length || m === w.answer)) problems.push(`${where}: why.myth – indeks błędnej odpowiedzi (nie poprawnej)`);
              if (w.optionExplain != null && !(Array.isArray(w.optionExplain) && w.optionExplain.length === w.options.length)) problems.push(`${where}: why.optionExplain – po jednym tekście na każdą odpowiedź`);
            }
          }
        }
      });
      // karty „🛠️ Zrób”: doświadczenie albo projekt – bezpieczeństwo i źródło pomysłu obowiązkowe
      (t.activities || []).forEach((a, i) => {
        const where = `${track.id}/${s.id}/${t.id} karta ${i + 1} („${String(a.title).slice(0, 40)}”)`;
        useId(a.id, where);
        if (!['doswiadczenie', 'projekt'].includes(a.kind)) problems.push(`${where}: kind musi być 'doswiadczenie' albo 'projekt'`);
        if (!a.title || !a.source) problems.push(`${where}: brak tytułu albo źródła pomysłu (source)`);
        if (!Array.isArray(a.safety) || !a.safety.length) problems.push(`${where}: brak listy safety (bezpieczeństwo)`);
        if (!Array.isArray(a.steps) || a.steps.length < 2) problems.push(`${where}: co najmniej 2 kroki`);
        if (a.needs != null && !Array.isArray(a.needs)) problems.push(`${where}: needs musi być listą`);
        if (a.table != null && !(a.table && Array.isArray(a.table.cols) && a.table.cols.length >= 2 && Array.isArray(a.table.rows) && a.table.rows.length >= 1)) problems.push(`${where}: table – cols (min. 2) i rows (min. 1)`);
        if (a.kind === 'projekt' && !(Array.isArray(a.criteria) && a.criteria.length >= 2 && a.criteria.length <= 6)) problems.push(`${where}: projekt – 2–6 kryteriów (criteria)`);
      });
      if (t.parent != null) {
        const p = t.parent;
        for (const f of ['mistakes', 'avoid', 'prepare', 'talk']) if (p[f] != null && !(Array.isArray(p[f]) && p[f].every((x) => typeof x === 'string' && x))) problems.push(`${track.id}/${s.id}/${t.id}: parent.${f} musi być listą tekstów`);
      }
      if (t.cardLang != null && !(Array.isArray(t.cardLang) && t.cardLang.length === 2 && t.cardLang.every((l) => LANGS.includes(l)))) problems.push(`${track.id}/${s.id}/${t.id}: cardLang musi być parą języków, np. ['en', 'pl']`);
      (t.tasks || []).forEach((x, i) => {
        nt++;
        const where = `${track.id}/${s.id}/${t.id} zadanie otwarte ${i + 1} („${String(x.q).slice(0, 40)}”)`;
        useId(x.id, where);
        if (!(Number.isInteger(x.points) && x.points >= 1 && x.points <= 5)) problems.push(`${where}: punkty muszą być liczbą 1–5`);
        if (!x.q || !x.answer) problems.push(`${where}: brak treści lub odpowiedzi`);
        if (!Array.isArray(x.steps) || x.steps.length < 2) problems.push(`${where}: rozwiązanie powinno mieć co najmniej 2 kroki`);
        if (!Array.isArray(x.scoring) || x.scoring.length !== x.points) problems.push(`${where}: zasady punktacji – po jednej linii na każdy punkt`);
      });
    }
}
for (const e of window.EXERCISES) {
  ne++;
  const where = `${track.id}: zestaw ${e.subject}/${e.mode}/${e.id} („${String(e.title).slice(0, 30)}”)`;
  useId(e.id, where);
  if (!window.SUBJECTS.some((s) => s.id === e.subject)) problems.push(`${where}: nieznany przedmiot`);
  if (!MODES.includes(e.mode)) problems.push(`${where}: nieznany tryb ${e.mode}`);
  if (!e.title || !e.basis) problems.push(`${where}: brak tytułu lub pola basis`);
  if (e.mode === 'listening') {
    if (!Array.isArray(e.audio) || !e.audio.length) problems.push(`${where}: brak nagrań (audio)`);
    else e.audio.forEach((r, k) => { if (!Array.isArray(r.lines) || !r.lines.length || r.lines.some((l) => !l.text)) problems.push(`${where}: nagranie ${k + 1} bez tekstu`); });
  } else if (e.mode === 'dyktando') {
    if (!track.young && !track.speak) problems.push(`${where}: dyktando tylko w ścieżce z czytaniem na głos (young lub speak)`);
    if ((e.items || []).some((it) => it.type !== 'input' || it.say == null)) problems.push(`${where}: w dyktandzie każde zadanie ma type: 'input' i pole say (co czyta lektor)`);
  } else if (!e.text) problems.push(`${where}: brak tekstu`);
  if (!Array.isArray(e.items) || e.items.length < 3) { problems.push(`${where}: za mało zadań (min. 3)`); continue; }
  e.items.forEach((it, i) => {
    ni++;
    const w = `${where} zadanie ${i + 1} („${String(it.q).slice(0, 40)}”)`;
    useId(it.id, w);
    if (!it.q) problems.push(`${w}: brak polecenia`);
    if (it.type === 'input') {
      if (it.say != null) checkSpeech({ say: it.say }, w);
      if (!Array.isArray(it.accept) || !it.accept.length || it.accept.some((a) => !String(a).trim())) problems.push(`${w}: brak akceptowanych odpowiedzi`);
    } else if (it.type === 'open') {
      if (!(Number.isInteger(it.points) && it.points >= 1 && it.points <= 4)) problems.push(`${w}: punkty 1–4`);
      if (!it.answer) problems.push(`${w}: brak przykładowej odpowiedzi`);
      if (!Array.isArray(it.scoring) || it.scoring.length !== it.points) problems.push(`${w}: zasady punktacji – po jednej linii na każdy punkt`);
    } else if (it.type) problems.push(`${w}: nieznany typ ${it.type}`);
    else if (!Array.isArray(it.options) || it.options.length < 2) problems.push(`${w}: za mało odpowiedzi`);
    else {
      if (!(Number.isInteger(it.answer) && it.answer >= 0 && it.answer < it.options.length)) problems.push(`${w}: zły indeks odpowiedzi`);
      if (new Set(it.options).size !== it.options.length) problems.push(`${w}: powtórzone odpowiedzi`);
      checkSpeech(it, w);
    }
  });
  // zbyt przewidywalne odpowiedzi: w zestawie z min. 4 zadaniami zamkniętymi poprawna nie może być zawsze ta sama litera
  const closed = e.items.filter((it) => !it.type && it.options.length > 2);
  if (closed.length >= 4 && new Set(closed.map((it) => it.answer)).size === 1) problems.push(`${where}: we wszystkich zadaniach zamkniętych poprawna jest ta sama litera`);
}
perTrack.push(`${track.id}: ${window.SUBJECTS.length} przedm., ${n - n0} pytań`);
// problemy z innych ścieżek pomijamy w raporcie, ale powtórzone id zawsze zgłaszamy
if (!report) problems.splice(before, problems.length - before, ...problems.slice(before).filter((p) => p.includes('już użyte')));
}
console.log(perTrack.join(' · '));
console.log(`Pytań: ${n}, zadań otwartych: ${nt}, zestawów ćwiczeń: ${ne} (zadań w zestawach: ${ni})`);
if (problems.length) { console.log(`PROBLEMY (${problems.length}):`); problems.forEach((p) => console.log(' - ' + p)); process.exitCode = 1; }
else console.log('OK – brak problemów.');
