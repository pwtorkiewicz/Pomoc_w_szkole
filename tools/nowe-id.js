/* Generuje nowe, nieużywane id pytań: node tools/nowe-id.js [ile=1] */
const path = require('path');
global.window = { SUBJECTS: [] };
for (const f of ['polski', 'matematyka', 'angielski']) require(path.join(__dirname, '..', 'js', 'dane', f + '.js'));
const used = new Set(window.SUBJECTS.flatMap((s) => s.topics.flatMap((t) => t.questions.map((q) => q.id))));
const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
const count = +(process.argv[2] || 1);
for (let k = 0; k < count; k++) {
  let id;
  do { id = Array.from({ length: 6 }, () => alpha[Math.floor(Math.random() * alpha.length)]).join(''); } while (used.has(id) || /^\d+$/.test(id));
  used.add(id);
  console.log(id);
}
