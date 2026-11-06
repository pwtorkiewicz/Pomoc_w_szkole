/* Przegląd aplikacji w przeglądarce: node tools/przeglad.js [ścieżka]
 * Ekran wyboru ścieżki, a potem każda ścieżka z js/sciezki.js (albo tylko podana).
 * Przechodzi wszystkie widoki (start, przedmioty, działy z każdą zakładką – także „W pigułce”, test próbny,
 * zadania otwarte, powtórka błędów, źródła, postępy, synchronizacja) i wszystkie zestawy ćwiczeń (wypełnia je
 * i sprawdza), w jasnym i ciemnym motywie, na szerokości 420 i 1000 px.
 * Zgłasza błędy JavaScript i poziome przewijanie strony. Wymaga Playwright. */
const { chromium } = require('playwright');
const path = require('path');
const dane = require('./dane');

(async () => {
  const only = process.argv[2];
  const tracks = dane.sciezki().filter((t) => !only || t.id === only);
  const browser = await chromium.launch();
  const problems = [];
  let views = 0;
  for (const [width, scheme] of [[420, 'dark'], [1000, 'light']]) {
    // ekran wyboru ścieżki i przekierowanie dawnych adresów do ścieżki egzaminacyjnej
    {
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme });
      page.on('pageerror', (e) => problems.push(`${width}px ${scheme} wybór ścieżki: błąd JS: ${e.message}`));
      const start = 'file://' + path.resolve(__dirname, '..', 'index.html');
      await page.goto(start);
      const n = await page.$$eval('.track', (a) => a.length);
      if (n !== dane.sciezki().length) problems.push(`${width}px ${scheme} wybór ścieżki: ${n} kafelków zamiast ${dane.sciezki().length}`);
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (over > 1) problems.push(`${width}px ${scheme} wybór ścieżki: strona przewija się w poziomie (${over}px)`);
      await page.close();
      // dawny adres otwarty z zakładki (nowa karta)
      const old = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme });
      await old.goto(start + '#/s/matematyka');
      await old.waitForURL(/egzamin\.html#\/s\/matematyka$/, { timeout: 3000 }).catch(() => {});
      if (!old.url().includes('egzamin.html#/s/matematyka')) problems.push(`${width}px ${scheme}: dawny adres index.html#/s/… nie przekierowuje do egzamin.html (${old.url()})`);
      views += 2;
      await old.close();
    }
    for (const track of tracks) {
      const url = dane.adres(track.id);
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme });
      const where = { v: '' };
      page.on('pageerror', (e) => problems.push(`${width}px ${scheme} ${track.id} ${where.v}: błąd JS: ${e.message}`));
      page.on('console', (m) => { if (m.type() === 'error') problems.push(`${width}px ${scheme} ${track.id} ${where.v}: konsola: ${m.text()}`); });
      page.on('dialog', (d) => d.accept());
      await page.goto(url);
      const data = await page.evaluate(() => ({
        subjects: window.SUBJECTS.map((s) => ({ id: s.id, link: s.link, topics: s.topics.map((t) => t.id), infos: s.topics.filter((t) => t.infographic).map((t) => t.id) })),
        sets: (window.EXERCISES || []).map((e) => ({ subject: e.subject, mode: e.mode, id: e.id })),
      }));
      // przyciski 🔊 (ścieżki z czytaniem na głos): kliknij każdy widoczny – sprawdza, czy nie ma błędów JS
      const clickSay = async () => { for (const b of await page.$$('.say')) if (await b.isVisible()) await b.click(); };
      const visit = async (hash, act) => {
        where.v = hash;
        await page.goto(url + hash);
        await page.waitForTimeout(30);
        if (act) await act();
        views++;
        const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (over > 1) problems.push(`${width}px ${scheme} ${track.id} ${hash}: strona przewija się w poziomie (${over}px)`);
      };
      await visit('#/');
      await visit('#/zrodla');
      // postępy i synchronizacja (w klasie 3 szczegóły dla rodzica są zwinięte – rozwijamy je)
      await visit('#/postepy', async () => { const d = await page.$('details.parent > summary'); if (d) await d.click(); });
      await visit('#/chmura', async () => { await page.click('details.parent > summary'); await page.fill('#link', 'zly link'); await page.click('#connect'); });
      for (const s of data.subjects) {
        if (s.link) {
          // przedmiot-odnośnik: kafelek i adres #/s/<id> prowadzą do przedmiotu w innej ścieżce
          const target = dane.sciezka(s.link.track).page + '#/s/' + s.link.subject;
          await page.goto(url);
          const href = await page.$eval(`a.card[href$="${target}"]`, (a) => a.getAttribute('href')).catch(() => null);
          if (href !== target) problems.push(`${width}px ${scheme} ${track.id}: brak kafelka ${s.id} z odnośnikiem ${target}`);
          await page.goto(url + `#/s/${s.id}`);
          await page.waitForURL((u) => u.href.endsWith(target), { timeout: 3000 }).catch(() => {});
          if (!page.url().endsWith(target)) problems.push(`${width}px ${scheme} ${track.id} #/s/${s.id}: nie przekierowuje do ${target} (${page.url()})`);
          views++;
          continue;
        }
        await visit(`#/s/${s.id}`);
        // w trybie młodszego ucznia (young) nie ma sprawdzianu z przedmiotu – adres prowadzi na stronę przedmiotu
        await visit(`#/s/${s.id}/egzamin`, async () => { const o = await page.$('.opt'); if (o) await o.click(); });
        await visit(`#/s/${s.id}/zadania`, async () => { const b = await page.$('#all'); if (b) await b.click(); });
        for (const t of s.topics) {
          for (const tab of ['lekcja', 'teoria', 'fiszki', 'zadania']) await visit(`#/s/${s.id}/t/${t}/${tab}`, clickSay);
          if (s.infos.includes(t)) await visit(`#/s/${s.id}/t/${t}/pigulka`, clickSay);
          await visit(`#/s/${s.id}/t/${t}/quiz`, async () => { await clickSay(); await page.click('.opt'); await clickSay(); });
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
        if (!sum) problems.push(`${width}px ${scheme} ${track.id} zestaw ${e.id}: brak podsumowania po sprawdzeniu`);
      });
    }
    await visit('#/powtorka');
    await page.close();
    }
  }
  await browser.close();
  console.log(`Odwiedzone widoki: ${views}`);
  if (problems.length) {
    console.log(`PROBLEMY (${problems.length}):`);
    [...new Set(problems)].forEach((p) => console.log(' - ' + p));
    process.exitCode = 1;
  } else console.log('OK – brak błędów JS i poziomego przewijania.');
})();
