/* Sprawdzanie linków w zakładkach „🔗 Materiały”: node tools/sprawdz-linki.js [ścieżka]
 * Otwiera każdy adres (curl przez proxy środowiska) i zgłasza: błąd HTTP, brak odpowiedzi
 * oraz strony ZPE „Nie masz dostępu do tej treści” (materiał usunięty albo tylko po zalogowaniu).
 * Wymaga sieci – uruchamiaj po dodaniu lub zmianie materiałów (nie przy każdym commicie). */
const { execFileSync } = require('child_process');
const wczytaj = require('./dane');
const only = process.argv[2];
const problems = [];
let n = 0;
for (const track of wczytaj.sciezki()) {
  if (only && track.id !== only) continue;
  const window = wczytaj(track.id);
  for (const s of window.SUBJECTS) for (const t of s.topics) for (const m of t.materials || []) {
    n++;
    const where = `${track.id}/${s.id}/${t.id}: ${m.url}`;
    let out = '';
    try {
      out = execFileSync('curl', ['-sSL', '-m', '40', '-A', 'Mozilla/5.0', '-w', '\n%{http_code}', m.url], { encoding: 'utf8', maxBuffer: 50e6, stdio: ['ignore', 'pipe', 'pipe'] });
    } catch (e) { problems.push(`${where}: brak odpowiedzi (${String(e.stderr || e.message).trim().split('\n')[0]})`); continue; }
    const code = out.slice(out.lastIndexOf('\n') + 1);
    if (!/^2/.test(code)) problems.push(`${where}: HTTP ${code}`);
    else if (out.includes('Nie masz dostępu do tej treści')) problems.push(`${where}: ZPE – „Nie masz dostępu do tej treści”`);
    else if (m.expect && !out.includes(m.expect)) problems.push(`${where}: na stronie nie ma tekstu „${m.expect}”`);
  }
}
console.log(`Sprawdzone linki: ${n}`);
if (problems.length) { console.log(`PROBLEMY (${problems.length}):`); problems.forEach((p) => console.log(' - ' + p)); process.exit(1); }
console.log('OK – wszystkie linki działają.');
