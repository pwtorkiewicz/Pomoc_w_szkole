/* Sprawdzanie lekcji: node tools/sprawdz-lekcje.js [ścieżka | ścieżka/przedmiot | przedmiot]
 * Bez argumentu – wszystkie ścieżki z js/sciezki.js; sam przedmiot (np. matematyka) – w ścieżce egzaminacyjnej.
 * - każda lekcja odpowiada istniejącemu działowi,
 * - poprawna struktura kroków i pytań „Sprawdź się”,
 * - każdy SVG (w lekcjach, infografikach „W pigułce”, pytaniach, zadaniach i zestawach) jest poprawnym XML-em, ma viewBox
 *   i nie wychodzi poza kadr (tekst i kształty); infografika: viewBox szerokości 300–440, role="img", aria-label,
 *   unikalne id markerów,
 * - brak błędów JavaScript podczas wyświetlania każdego kroku i każdej infografiki.
 * Wymaga Playwright (jest preinstalowany w środowisku).
 */
const { chromium } = require('playwright');
const dane = require('./dane');

(async () => {
  const arg = process.argv[2] || '';
  const trackIds = dane.sciezki().map((t) => t.id);
  let tracks = trackIds;
  let only;
  if (arg) {
    const [a, b] = arg.split('/');
    if (trackIds.includes(a)) { tracks = [a]; only = b; } else { tracks = ['egzamin8']; only = a; }
  }
  const browser = await chromium.launch();
  let failed = false;
  for (const track of tracks) {
    const page = await browser.newPage({ viewport: { width: 800, height: 900 } });
    const jsErrors = [];
    page.on('pageerror', (e) => jsErrors.push(e.message));
    const url = dane.adres(track);
    await page.goto(url);

    const report = await page.evaluate((only) => {
      const problems = [];
      const stats = {};
      const infos = [];
      const topics = {};
      function checkSvg(svgText, where) {
        const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
        if (doc.querySelector('parsererror')) { problems.push(`${where}: SVG nie jest poprawnym XML-em`); return; }
        const svg = doc.documentElement;
        const vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
        if (vb.length !== 4) { problems.push(`${where}: SVG bez viewBox`); return; }
        if (!svg.getAttribute('aria-label')) problems.push(`${where}: SVG bez aria-label`);
        // pomiar w dokumencie
        const host = document.createElement('div');
        host.className = 'vis';
        host.style.cssText = 'position:absolute;left:-9999px;top:0;width:560px';
        host.innerHTML = svgText;
        document.body.appendChild(host);
        const live = host.querySelector('svg');
        const [x0, y0, w, h] = vb;
        const tol = 2;
        live.querySelectorAll('text, rect, circle, ellipse, line, polygon, polyline, path').forEach((el) => {
          let bb;
          try { bb = el.getBBox(); } catch (e) { return; }
          if (!bb || (bb.width === 0 && bb.height === 0)) return;
          const out = bb.x < x0 - tol || bb.y < y0 - tol || bb.x + bb.width > x0 + w + tol || bb.y + bb.height > y0 + h + tol;
          if (out) {
            const label = el.tagName === 'text' ? `tekst „${el.textContent.slice(0, 30)}”` : el.tagName;
            problems.push(`${where}: ${label} wychodzi poza viewBox (${Math.round(bb.x)},${Math.round(bb.y)},${Math.round(bb.width)}×${Math.round(bb.height)} vs ${vb.join(' ')})`);
          }
        });
        // nachodzące na siebie napisy
        const texts = [...live.querySelectorAll('text')].map((el) => ({ el, bb: el.getBBox() })).filter((o) => o.bb.width > 0);
        for (let a = 0; a < texts.length; a++) for (let b = a + 1; b < texts.length; b++) {
          const A = texts[a].bb, B = texts[b].bb;
          const ix = Math.min(A.x + A.width, B.x + B.width) - Math.max(A.x, B.x);
          const iy = Math.min(A.y + A.height, B.y + B.height) - Math.max(A.y, B.y);
          if (ix > 4 && iy > 4) problems.push(`${where}: napisy „${texts[a].el.textContent.slice(0, 20)}” i „${texts[b].el.textContent.slice(0, 20)}” nachodzą na siebie`);
        }
        host.remove();
      }

      for (const s of window.SUBJECTS) for (const t of s.topics) topics[`${s.id}/${t.id}`] = t;
      for (const [key, steps] of Object.entries(window.LESSONS || {})) {
        if (only && !key.startsWith(only + '/')) continue;
        stats[key] = Array.isArray(steps) ? steps.length : 0;
        if (!topics[key]) problems.push(`${key}: brak takiego działu w danych`);
        if (!Array.isArray(steps) || steps.length < 3) { problems.push(`${key}: lekcja powinna mieć co najmniej 3 kroki`); continue; }
        steps.forEach((st, i) => {
          const where = `${key} krok ${i + 1}`;
          if (!st.title) problems.push(`${where}: brak tytułu`);
          if (!st.text) problems.push(`${where}: brak tekstu`);
          if (!st.svg && !st.widget) problems.push(`${where}: brak grafiki (svg albo widget)`);
          if (st.widget && !(window.WIDGETS && window.WIDGETS[st.widget.type])) problems.push(`${where}: nieznany widget ${st.widget.type}`);
          if (st.check) {
            const c = st.check;
            if (!c.q || !Array.isArray(c.options) || c.options.length < 2) problems.push(`${where}: źle zbudowane pytanie`);
            else if (!(Number.isInteger(c.answer) && c.answer >= 0 && c.answer < c.options.length)) problems.push(`${where}: zły indeks odpowiedzi`);
            else if (new Set(c.options).size !== c.options.length) problems.push(`${where}: powtórzone odpowiedzi`);
          }
          if (st.svg) checkSvg(st.svg, where);
        });
      }
      // rysunki w pytaniach, zadaniach otwartych i zestawach ćwiczeń
      for (const s of window.SUBJECTS) {
        if (only && s.id !== only) continue;
        for (const t of s.topics) for (const q of [...t.questions, ...(t.tasks || [])]) if (q.svg) checkSvg(q.svg, `${s.id}/${t.id} pytanie ${q.id}`);
      }
      // infografiki „🗺️ W pigułce”
      const markerIds = new Map();
      for (const s of window.SUBJECTS) {
        if (only && s.id !== only) continue;
        for (const t of s.topics) {
          if (t.infographic == null) continue;
          const where = `${s.id}/${t.id} infografika`;
          infos.push(`${s.id}/${t.id}`);
          let svgText = t.infographic;
          if (svgText && typeof svgText === 'object') {
            // opis treści rysowany szablonem (js/infografiki.js)
            if (!window.INFOGRAFIKA) { problems.push(`${where}: strona nie wczytuje js/infografiki.js`); continue; }
            try { svgText = window.INFOGRAFIKA.render(t.infographic, `${s.id}-${t.id}`); } catch (e) { problems.push(`${where}: ${e.message}`); continue; }
            const sp = t.infographic;
            const n = (sp.items || sp.wiersze || sp.branches || []).length + (sp.top ? 1 : 0) + (sp.bottom ? 1 : 0) + (sp.root ? 1 : 0);
            if (n < 3 || n > 12) problems.push(`${where}: ${n} elementów – infografika powinna mieć ok. 5–9 elementów`);
            const empty = JSON.stringify(sp).match(/"(title|text|label)":""/);
            if (empty) problems.push(`${where}: puste pole ${empty[1]}`);
          }
          if (typeof svgText !== 'string' || !svgText.trim().startsWith('<svg')) { problems.push(`${where}: pole infographic musi być tekstem z jednym <svg> albo opisem dla szablonu`); continue; }
          if (t.infographicNote != null && typeof t.infographicNote !== 'string') problems.push(`${where}: infographicNote musi być tekstem`);
          const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
          const svg = doc.documentElement;
          if (!doc.querySelector('parsererror')) {
            const w = +(svg.getAttribute('viewBox') || '').split(/[\s,]+/)[2];
            if (!(w >= 300 && w <= 440)) problems.push(`${where}: viewBox powinien mieć szerokość 300–440 (jest ${w})`);
            if (svg.getAttribute('role') !== 'img') problems.push(`${where}: brak role="img"`);
            if ((svg.getAttribute('aria-label') || '').length < 40) problems.push(`${where}: aria-label powinien opisywać całą treść`);
            if (/(fill|stroke|style)="[^"]*(#|rgb|hsl)/.test(svgText)) problems.push(`${where}: kolor wpisany na sztywno – użyj klas CSS`);
            svg.querySelectorAll('[id]').forEach((el) => {
              if (markerIds.has(el.id)) problems.push(`${where}: id „${el.id}” już użyte w ${markerIds.get(el.id)}`);
              else markerIds.set(el.id, where);
            });
          }
          checkSvg(svgText, where);
        }
      }
      for (const e of window.EXERCISES || []) {
        if (only && e.subject !== only) continue;
        for (const it of e.items) if (it.svg) checkSvg(it.svg, `zestaw ${e.id} zadanie ${it.id}`);
      }
      return { problems, stats, infos };
    }, only);

    // przejście przez każdy krok w interfejsie
    for (const key of Object.keys(report.stats)) {
      const [sid, tid] = key.split('/');
      await page.goto(`${url}#/s/${sid}/t/${tid}/lekcja`);
      for (let i = 0; i < report.stats[key] - 1; i++) {
        const btn = await page.$('#nxt');
        if (!btn) { report.problems.push(`${key}: nie da się przejść do kroku ${i + 2}`); break; }
        await btn.click();
      }
  }
    // każda infografika w interfejsie: zakładka „W pigułce” i link z końca lekcji
    for (const key of report.infos) {
      const [sid, tid] = key.split('/');
      await page.goto(`${url}#/s/${sid}/t/${tid}/pigulka`);
      if (!(await page.$('.vis.info svg'))) report.problems.push(`${key}: zakładka „W pigułce” nie pokazuje infografiki`);
      if (report.stats[key]) {
        await page.goto(`${url}#/s/${sid}/t/${tid}/lekcja`);
        for (let i = 0; i < report.stats[key]; i++) await page.click('#nxt');
        if (!(await page.$(`a[href$="/t/${tid}/pigulka"]`))) report.problems.push(`${key}: brak linku „W pigułce” na końcu lekcji`);
      }
    }
  for (const e of jsErrors) report.problems.push(`błąd JS: ${e}`);

  console.log(`[${track}] Lekcje:`, Object.entries(report.stats).map(([k, n]) => `${k} (${n})`).join(', ') || 'brak');
  if (report.infos.length) console.log(`[${track}] Infografiki:`, report.infos.join(', '));
  if (report.problems.length) {
    console.log(`\n[${track}] PROBLEMY (${report.problems.length}):`);
    report.problems.forEach((p) => console.log(' - ' + p));
    failed = true;
  }
  await page.close();
  }
  if (failed) process.exitCode = 1;
  else console.log('\nOK – brak problemów.');
  await browser.close();
})();
