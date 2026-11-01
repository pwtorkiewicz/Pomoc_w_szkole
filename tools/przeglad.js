/* Przegląd aplikacji w przeglądarce: node tools/przeglad.js
 * Przechodzi wszystkie widoki (start, przedmioty, działy z każdą zakładką, test próbny,
 * zadania otwarte, powtórka błędów, źródła) i wszystkie zestawy ćwiczeń (wypełnia je
 * i sprawdza), w jasnym i ciemnym motywie, na szerokości 420 i 1000 px.
 * Zgłasza błędy JavaScript i poziome przewijanie strony. Wymaga Playwright. */
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const url = 'file://' + path.resolve(__dirname, '..', 'index.html');
  const browser = await chromium.launch();
  const problems = [];
  let views = 0;
  for (const [width, scheme] of [[420, 'dark'], [1000, 'light']]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme });
    const where = { v: '' };
    page.on('pageerror', (e) => problems.push(`${width}px ${scheme} ${where.v}: błąd JS: ${e.message}`));
    page.on('console', (m) => { if (m.type() === 'error') problems.push(`${width}px ${scheme} ${where.v}: konsola: ${m.text()}`); });
    page.on('dialog', (d) => d.accept());
    await page.goto(url);
    const data = await page.evaluate(() => ({
      subjects: window.SUBJECTS.map((s) => ({ id: s.id, topics: s.topics.map((t) => t.id) })),
      sets: (window.EXERCISES || []).map((e) => ({ subject: e.subject, mode: e.mode, id: e.id })),
    }));
    const visit = async (hash, act) => {
      where.v = hash;
      await page.goto(url + hash);
      await page.waitForTimeout(30);
      if (act) await act();
      views++;
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (over > 1) problems.push(`${width}px ${scheme} ${hash}: strona przewija się w poziomie (${over}px)`);
    };
    await visit('#/');
    await visit('#/zrodla');
    for (const s of data.subjects) {
      await visit(`#/s/${s.id}`);
      await visit(`#/s/${s.id}/egzamin`, async () => { await page.click('.opt'); });
      await visit(`#/s/${s.id}/zadania`, async () => { const b = await page.$('#all'); if (b) await b.click(); });
      for (const t of s.topics) {
        for (const tab of ['lekcja', 'teoria', 'fiszki', 'zadania']) await visit(`#/s/${s.id}/t/${t}/${tab}`);
        await visit(`#/s/${s.id}/t/${t}/quiz`, async () => { await page.click('.opt'); });
      }
      const modes = [...new Set(data.sets.filter((e) => e.subject === s.id).map((e) => e.mode))];
      for (const m of modes) await visit(`#/s/${s.id}/cw/${m}`);
    }
    for (const e of data.sets) {
      await visit(`#/s/${e.subject}/cw/${e.mode}/${e.id}`, async () => {
        const play = await page.$('.play');
        if (play) { await play.click(); await page.click('#stop'); }
        for (const box of await page.$$('.item')) {
          const opt = await box.$('.opt');
          if (opt) await opt.click();
          const inp = await box.$('input.gap');
          if (inp) await inp.fill('test');
        }
        await page.click('#check');
        for (const g of await page.$$('.self')) await (await g.$('.btn')).click();
        const sum = await page.$('#sum .big');
        if (!sum) problems.push(`${width}px ${scheme} zestaw ${e.id}: brak podsumowania po sprawdzeniu`);
      });
    }
    await visit('#/powtorka');
    await page.close();
  }
  await browser.close();
  console.log(`Odwiedzone widoki: ${views}`);
  if (problems.length) {
    console.log(`PROBLEMY (${problems.length}):`);
    [...new Set(problems)].forEach((p) => console.log(' - ' + p));
    process.exitCode = 1;
  } else console.log('OK – brak błędów JS i poziomego przewijania.');
})();
