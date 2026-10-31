/* Zrzut ekranu kroku lekcji: node tools/zrzut.js <przedmiot/dzial> <krok od 1> <plik.png> [dark] [szerokość]
 * np. node tools/zrzut.js matematyka/geometria 2 /tmp/k2.png dark 420 */
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [key, step = '1', out = 'zrzut.png', dark, w = '800'] = process.argv.slice(2);
  const [sid, tid] = key.split('/');
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: 900 }, colorScheme: dark === 'dark' ? 'dark' : 'light' });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html') + `#/s/${sid}/t/${tid}/lekcja`);
  for (let i = 1; i < +step; i++) await p.click('#nxt');
  await p.waitForTimeout(150);
  await p.screenshot({ path: out, fullPage: true });
  if (errs.length) console.log('Błędy JS:', errs);
  await b.close();
})();
