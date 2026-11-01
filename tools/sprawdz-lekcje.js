/* Sprawdzanie lekcji: node tools/sprawdz-lekcje.js [przedmiot]
 * - każda lekcja odpowiada istniejącemu działowi,
 * - poprawna struktura kroków i pytań „Sprawdź się”,
 * - każdy SVG (w lekcjach, pytaniach, zadaniach i zestawach) jest poprawnym XML-em, ma viewBox i nie wychodzi poza kadr (tekst i kształty),
 * - brak błędów JavaScript podczas wyświetlania każdego kroku.
 * Wymaga Playwright (jest preinstalowany w środowisku).
 */
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const only = process.argv[2];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 900 } });
  const jsErrors = [];
  page.on('pageerror', (e) => jsErrors.push(e.message));
  const url = 'file://' + path.resolve(__dirname, '..', 'index.html');
  await page.goto(url);

  const report = await page.evaluate((only) => {
    const problems = [];
    const stats = {};
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
    for (const e of window.EXERCISES || []) {
      if (only && e.subject !== only) continue;
      for (const it of e.items) if (it.svg) checkSvg(it.svg, `zestaw ${e.id} zadanie ${it.id}`);
    }
    return { problems, stats };
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
  for (const e of jsErrors) report.problems.push(`błąd JS: ${e}`);

  console.log('Lekcje:', Object.entries(report.stats).map(([k, n]) => `${k} (${n})`).join(', ') || 'brak');
  if (report.problems.length) {
    console.log(`\nPROBLEMY (${report.problems.length}):`);
    report.problems.forEach((p) => console.log(' - ' + p));
    process.exitCode = 1;
  } else console.log('\nOK – brak problemów.');
  await browser.close();
})();
