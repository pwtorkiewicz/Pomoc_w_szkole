/* Generuje nowe, nieużywane id pytań, zadań, kart „Zrób” i zestawów: node tools/nowe-id.js [ile=1]
 * Id są unikalne we wszystkich ścieżkach. RETIRED – id usuniętych pytań (nie wolno ich użyć ponownie). */
const wczytaj = require('./dane');
const all = wczytaj.sciezki().map((t) => wczytaj(t.id));
// usunięte pytania (Świat, Magnesy – 14.11.2026)
const RETIRED = ['j3vhck', 'd2heuc', 'hp7wuw', '4hnpxw', 'gk7bjn', 'bxvz7v'];
const used = new Set([
  ...RETIRED,
  ...all.flatMap((w) => w.SUBJECTS).flatMap((s) => s.topics.flatMap((t) => [...t.questions, ...(t.tasks || []), ...(t.activities || [])].map((q) => q.id))),
  ...all.flatMap((w) => w.EXERCISES).flatMap((e) => [e.id, ...e.items.map((it) => it.id)]),
]);
const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
const count = +(process.argv[2] || 1);
for (let k = 0; k < count; k++) {
  let id;
  do { id = Array.from({ length: 6 }, () => alpha[Math.floor(Math.random() * alpha.length)]).join(''); } while (used.has(id) || /^\d+$/.test(id));
  used.add(id);
  console.log(id);
}
