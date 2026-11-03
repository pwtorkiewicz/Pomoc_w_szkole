/* Zrzut ekranu kroku lekcji: node tools/zrzut.js <[ścieżka/]przedmiot/dzial> <krok od 1 | pigulka> <plik.png> [dark] [szerokość]
 * np. node tools/zrzut.js matematyka/geometria 2 /tmp/k2.png dark 420   (ścieżka egzaminacyjna)
 *     node tools/zrzut.js kl4/matematyka/ulamki 1 /tmp/k1.png             (inna ścieżka)
 *     node tools/zrzut.js kl4/historia/polska-litwa pigulka /tmp/p.png    (infografika „W pigułce”) */
const { chromium } = require('playwright');
const dane = require('./dane');
(async () => {
  const [key, step = '1', out = 'zrzut.png', dark, w = '800'] = process.argv.slice(2);
  const parts = key.split('/');
  const [track, sid, tid] = parts.length === 3 ? parts : ['egzamin8', ...parts];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: 900 }, colorScheme: dark === 'dark' ? 'dark' : 'light' });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  if (step === 'pigulka') await p.goto(dane.adres(track) + `#/s/${sid}/t/${tid}/pigulka`);
  else {
    await p.goto(dane.adres(track) + `#/s/${sid}/t/${tid}/lekcja`);
    for (let i = 1; i < +step; i++) await p.click('#nxt');
  }
  await p.waitForTimeout(150);
  await p.screenshot({ path: out, fullPage: true });
  if (errs.length) console.log('Błędy JS:', errs);
  await b.close();
})();
