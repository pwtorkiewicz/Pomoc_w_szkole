/* Generuje nowe, nieużywane id pytań, zadań i zestawów: node tools/nowe-id.js [ile=1] */
const w = require('./dane')();
const used = new Set([
  ...w.SUBJECTS.flatMap((s) => s.topics.flatMap((t) => [...t.questions, ...(t.tasks || [])].map((q) => q.id))),
  ...w.EXERCISES.flatMap((e) => [e.id, ...e.items.map((it) => it.id)]),
]);
const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
const count = +(process.argv[2] || 1);
for (let k = 0; k < count; k++) {
  let id;
  do { id = Array.from({ length: 6 }, () => alpha[Math.floor(Math.random() * alpha.length)]).join(''); } while (used.has(id) || /^\d+$/.test(id));
  used.add(id);
  console.log(id);
}
