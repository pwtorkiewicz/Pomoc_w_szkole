/* Sprawdzanie pytań w js/dane/*.js: node tools/sprawdz-dane.js
 * - każde pytanie ma stałe, unikalne (w całej aplikacji) pole id,
 * - poprawny indeks odpowiedzi, brak powtórzonych odpowiedzi,
 * - unikalne id działów w przedmiocie,
 * - zadania otwarte (pole tasks): id, punkty, kroki rozwiązania, odpowiedź, zasady punktacji. */
const path = require('path');
global.window = { SUBJECTS: [] };
for (const f of ['polski', 'matematyka', 'angielski']) require(path.join(__dirname, '..', 'js', 'dane', f + '.js'));
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
console.log(`Pytań: ${n}, zadań otwartych: ${nt}`);
if (problems.length) { console.log(`PROBLEMY (${problems.length}):`); problems.forEach((p) => console.log(' - ' + p)); process.exitCode = 1; }
else console.log('OK – brak problemów.');
