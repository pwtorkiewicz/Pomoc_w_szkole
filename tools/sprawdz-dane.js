/* Sprawdzanie pytań w js/dane/*.js: node tools/sprawdz-dane.js
 * - każde pytanie ma stałe, unikalne (w całej aplikacji) pole id,
 * - poprawny indeks odpowiedzi, brak powtórzonych odpowiedzi,
 * - unikalne id działów w przedmiocie,
 * - zadania otwarte (pole tasks): id, punkty, kroki rozwiązania, odpowiedź, zasady punktacji,
 * - zestawy ćwiczeń (window.EXERCISES): tryb, tekst/nagrania, zadania zamknięte, wpisywane i otwarte. */
require('./dane')();
const problems = [];
const ids = new Map();
let n = 0;
let nt = 0;
for (const s of window.SUBJECTS) {
  const topicIds = new Set();
  for (const t of s.topics) {
    if (topicIds.has(t.id)) problems.push(`${s.id}: powtórzone id działu ${t.id}`);
    topicIds.add(t.id);
    t.questions.forEach((q, i) => {
      n++;
      const where = `${s.id}/${t.id} pytanie ${i + 1} („${String(q.q).slice(0, 40)}”)`;
      if (!q.id || !/^[a-z0-9]{4,}$/.test(q.id)) problems.push(`${where}: brak poprawnego id`);
      else if (ids.has(q.id)) problems.push(`${where}: id ${q.id} już użyte w ${ids.get(q.id)}`);
      else ids.set(q.id, where);
      if (!Array.isArray(q.options) || q.options.length < 2) problems.push(`${where}: za mało odpowiedzi`);
      else {
        if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) problems.push(`${where}: zły indeks odpowiedzi`);
        if (new Set(q.options).size !== q.options.length) problems.push(`${where}: powtórzone odpowiedzi`);
      }
    });
    (t.tasks || []).forEach((x, i) => {
      nt++;
      const where = `${s.id}/${t.id} zadanie otwarte ${i + 1} („${String(x.q).slice(0, 40)}”)`;
      if (!x.id || !/^[a-z0-9]{4,}$/.test(x.id)) problems.push(`${where}: brak poprawnego id`);
      else if (ids.has(x.id)) problems.push(`${where}: id ${x.id} już użyte w ${ids.get(x.id)}`);
      else ids.set(x.id, where);
      if (!(Number.isInteger(x.points) && x.points >= 1 && x.points <= 5)) problems.push(`${where}: punkty muszą być liczbą 1–5`);
      if (!x.q || !x.answer) problems.push(`${where}: brak treści lub odpowiedzi`);
      if (!Array.isArray(x.steps) || x.steps.length < 2) problems.push(`${where}: rozwiązanie powinno mieć co najmniej 2 kroki`);
      if (!Array.isArray(x.scoring) || x.scoring.length !== x.points) problems.push(`${where}: zasady punktacji – po jednej linii na każdy punkt`);
    });
  }
}
const MODES = ['czytanie', 'reading', 'listening', 'srodki'];
const useId = (id, where) => {
  if (!id || !/^[a-z0-9]{4,}$/.test(id)) problems.push(`${where}: brak poprawnego id`);
  else if (ids.has(id)) problems.push(`${where}: id ${id} już użyte w ${ids.get(id)}`);
  else ids.set(id, where);
};
let ne = 0;
let ni = 0;
for (const e of window.EXERCISES) {
  ne++;
  const where = `zestaw ${e.subject}/${e.mode}/${e.id} („${String(e.title).slice(0, 30)}”)`;
  useId(e.id, where);
  if (!window.SUBJECTS.some((s) => s.id === e.subject)) problems.push(`${where}: nieznany przedmiot`);
  if (!MODES.includes(e.mode)) problems.push(`${where}: nieznany tryb ${e.mode}`);
  if (!e.title || !e.basis) problems.push(`${where}: brak tytułu lub pola basis`);
  if (e.mode === 'listening') {
    if (!Array.isArray(e.audio) || !e.audio.length) problems.push(`${where}: brak nagrań (audio)`);
    else e.audio.forEach((r, k) => { if (!Array.isArray(r.lines) || !r.lines.length || r.lines.some((l) => !l.text)) problems.push(`${where}: nagranie ${k + 1} bez tekstu`); });
  } else if (!e.text) problems.push(`${where}: brak tekstu`);
  if (!Array.isArray(e.items) || e.items.length < 3) { problems.push(`${where}: za mało zadań (min. 3)`); continue; }
  e.items.forEach((it, i) => {
    ni++;
    const w = `${where} zadanie ${i + 1} („${String(it.q).slice(0, 40)}”)`;
    useId(it.id, w);
    if (!it.q) problems.push(`${w}: brak polecenia`);
    if (it.type === 'input') {
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
    }
  });
  // zbyt przewidywalne odpowiedzi: w zestawie z min. 4 zadaniami zamkniętymi poprawna nie może być zawsze ta sama litera
  const closed = e.items.filter((it) => !it.type && it.options.length > 2);
  if (closed.length >= 4 && new Set(closed.map((it) => it.answer)).size === 1) problems.push(`${where}: we wszystkich zadaniach zamkniętych poprawna jest ta sama litera`);
}
console.log(`Pytań: ${n}, zadań otwartych: ${nt}, zestawów ćwiczeń: ${ne} (zadań w zestawach: ${ni})`);
if (problems.length) { console.log(`PROBLEMY (${problems.length}):`); problems.forEach((p) => console.log(' - ' + p)); process.exitCode = 1; }
else console.log('OK – brak problemów.');
