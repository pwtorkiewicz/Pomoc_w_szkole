/* Sprawdzanie pytań we wszystkich ścieżkach (js/sciezki.js): node tools/sprawdz-dane.js [ścieżka]
 * - każde pytanie ma stałe, unikalne (w całej aplikacji, we wszystkich ścieżkach) pole id,
 * - poprawny indeks odpowiedzi, brak powtórzonych odpowiedzi,
 * - unikalne id działów w przedmiocie,
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
const LANGS = ['pl', 'en'];
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
    if (!s.topics.length) problems.push(`${track.id}/${s.id}: przedmiot bez działów`);
    const topicIds = new Set();
    for (const t of s.topics) {
      if (topicIds.has(t.id)) problems.push(`${s.id}: powtórzone id działu ${t.id}`);
      topicIds.add(t.id);
      t.questions.forEach((q, i) => {
        n++;
        const where = `${track.id}/${s.id}/${t.id} pytanie ${i + 1} („${String(q.q).slice(0, 40)}”)`;
        useId(q.id, where);
        if (!Array.isArray(q.options) || q.options.length < 2) problems.push(`${where}: za mało odpowiedzi`);
        else {
          if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) problems.push(`${where}: zły indeks odpowiedzi`);
          if (new Set(q.options).size !== q.options.length) problems.push(`${where}: powtórzone odpowiedzi`);
          checkSpeech(q, where);
        }
      });
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
