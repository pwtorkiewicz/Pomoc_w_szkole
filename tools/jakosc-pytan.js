/* Jakość pytań zamkniętych – podpowiedzi, które pozwalają zgadnąć odpowiedź bez wiedzy.
 *   node tools/jakosc-pytan.js [ścieżka[/przedmiot]] [-v]
 * Raport dla każdego przedmiotu:
 *   – „najdłuższa”: pytania (≥ 3 odpowiedzi), w których poprawna odpowiedź jest wyraźnie
 *     (o ponad 30%) dłuższa od każdej błędnej – uczeń, który wybiera najdłuższą, trafia;
 *   – „bez wyjaśnienia”: pytania bez pola explain.
 * -v wypisuje też same pytania (id, długości, treść). Narzędzie tylko ostrzega – nie zmienia kodu wyjścia. */
const wczytaj = require('./dane');

const PROG = 1.3;
const args = process.argv.slice(2);
const verbose = args.includes('-v');
const [trackArg, subjArg] = (args.find((a) => !a.startsWith('-')) || '').split('/');
const tekst = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Czy poprawna odpowiedź wyraźnie wyróżnia się długością (zwraca stosunek albo 0).
function najdluzsza(q) {
  if (q.options.length < 3) return 0;
  const len = q.options.map((o) => tekst(o).length);
  const inne = Math.max(...len.filter((_, i) => i !== q.answer));
  return len[q.answer] > PROG * inne ? len[q.answer] / inne : 0;
}

const tracks = wczytaj.sciezki().filter((t) => !trackArg || t.id === trackArg);
if (!tracks.length) { console.error(`Nieznana ścieżka „${trackArg}”.`); process.exit(1); }

for (const t of tracks) {
  const { SUBJECTS } = wczytaj(t.id);
  console.log(`\n=== ${t.id}`);
  for (const s of SUBJECTS) {
    if (subjArg && s.id !== subjArg) continue;
    const qs = (s.topics || []).flatMap((d) => (d.questions || []).map((q) => ({ ...q, dzial: d.id })));
    if (!qs.length) continue;
    const dl = qs.map((q) => [q, najdluzsza(q)]).filter(([, r]) => r);
    const bez = qs.filter((q) => !q.explain);
    const pct = Math.round((100 * dl.length) / qs.length);
    console.log(`${s.id.padEnd(12)} pytań ${String(qs.length).padStart(4)} · najdłuższa: ${String(dl.length).padStart(3)} (${pct}%)${pct > 15 ? ' ⚠' : ''} · bez wyjaśnienia: ${bez.length}`);
    if (verbose) {
      for (const [q, r] of dl) console.log(`   [dł ×${r.toFixed(1)}] ${q.dzial} ${q.id}: ${tekst(q.q).slice(0, 70)} → ${tekst(q.options[q.answer]).slice(0, 60)}`);
      for (const q of bez) console.log(`   [bez wyj.] ${q.dzial} ${q.id}: ${tekst(q.q).slice(0, 90)}`);
    }
  }
}
