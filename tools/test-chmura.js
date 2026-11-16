/* Test zapisu postępu i synchronizacji urządzeń: node tools/test-chmura.js
 * 1. reguły łączenia zapisów i prognoza (js/postep.js) – w node,
 * 2. skrypt arkusza rodzica (apps-script/Kod.js) na atrapie usług Google (tools/gas-atrapa.js),
 * 3. dwa urządzenia w osobnych przeglądarkach (telefon 400 px, komputer 1100 px) połączone linkiem z „arkuszem”:
 *    nauka na telefonie → widać ją na komputerze, poprawa błędów na komputerze → znika z powtórki na telefonie,
 *    nauka bez internetu → dociera po powrocie sieci, „Wyzeruj postęp” → zeruje oba urządzenia, raport tygodniowy.
 * Wymaga Playwright. Prawdziwego Google nie dotyka. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chromium } = require('playwright');
const atrapa = require('./gas-atrapa');

const ROOT = 'file://' + path.resolve(__dirname, '..') + '/';
const problems = [];
const check = (ok, what) => { if (!ok) problems.push(what); };

function unit() {
  const mem = {};
  const ctx = vm.createContext({
    window: { TRACKS: [] }, console, Date, Math, JSON, setTimeout, clearTimeout, crypto: require('crypto').webcrypto,
    localStorage: { getItem: (k) => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = v; }, removeItem: (k) => { delete mem[k]; } },
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'postep.js'), 'utf8'), ctx);
  const P = ctx.window.POSTEP;
  const today = '2026-11-06';
  const hist = {};
  for (let i = 28; i >= 0; i--) hist[P.addDays(today, -i)] = { m: (28 - i) / 7 };
  const f = P.forecast(hist, ['m'], 20, 4, today);
  check(f.kind === 'eta' && f.lo <= 112 && f.hi >= 112, 'prognoza: stałe tempo 1 dział/tydzień, zostało 16 → przedział powinien obejmować 112 dni');
  check(P.forecast({ [P.addDays(today, -5)]: { m: 1 } }, ['m'], 20, 1, today).kind === 'wait', 'prognoza: przy 5 dniach historii – czekamy');
  check(P.forecast({ [P.addDays(today, -40)]: { m: 3 } }, ['m'], 20, 3, today).kind === 'stalled', 'prognoza: brak postępu');
  check(P.forecast({}, ['m'], 20, 0, today).kind === 'new', 'prognoza: nie zaczęty');
  const now = Date.now();
  const a = { best: { x: 50 }, wrong: { q1: now - 5000, q2: now - 5000 }, lessons: { x: 1 }, exams: { m: 40 }, examsAt: { m: now - 1000 }, log: { d1: { [today]: { m: { t: 100, ok: 2 } } } }, autoSpeak: true };
  const b = { best: { x: 70, y: 10 }, wrong: { q3: now - 100 }, fixed: { q1: now - 100 }, lessons: { y: 1 }, exams: { m: 90 }, examsAt: { m: now - 99999 }, log: { d1: { [today]: { m: { t: 60, ok: 1 } } }, d2: { [today]: { m: { t: 30 } } } }, autoSpeak: false };
  const m = P.mergeState(a, b);
  check(m.best.x === 70 && m.best.y === 10, 'łączenie: best = większy wynik');
  check(!m.wrong.q1 && m.wrong.q2 && m.wrong.q3, 'łączenie: późniejsza poprawa usuwa błąd, inne błędy zostają');
  check(m.lessons.x && m.lessons.y, 'łączenie: lekcje z obu urządzeń');
  check(m.exams.m === 40, 'łączenie: test próbny – wygrywa późniejszy');
  check(P.dailyTotals(m)[today].m.t === 130, 'łączenie: czas z dwóch urządzeń bez podwójnego liczenia (130 s)');
  check(m.autoSpeak === true, 'łączenie: ustawienie urządzenia zostaje');
  check(JSON.stringify(P.mergeState(m, b)) === JSON.stringify(m), 'łączenie: ponowne łączenie niczego nie zmienia');
  check(!Object.keys(P.mergeState({ best: {}, resetAt: now }, a).best).length, 'łączenie: zapis sprzed zerowania odrzucony');
  check(!P.mergeState({ wrong: { q: 1 } }, { fixed: { q: now } }).wrong.q, 'łączenie: dawny wpis błędu (1)');
  // „Powtórka na dziś”: dla każdego działu wygrywa wpis z późniejszym at
  const ra = { review: { 'm/a': { box: 2, due: '2026-11-20', at: now - 50 }, 'm/b': { box: 0, due: '2026-11-07', at: now - 10 } } };
  const rb = { review: { 'm/a': { box: 0, due: '2026-11-07', at: now - 5 }, 'm/b': { box: 3, due: '2026-11-30', at: now - 900 }, 'm/c': { box: 1, due: '2026-11-09', at: now } } };
  const rm = P.mergeState(ra, rb).review;
  check(rm['m/a'].box === 0 && rm['m/b'].box === 0 && rm['m/c'].box === 1, 'łączenie: powtórka na dziś – późniejszy wpis działu wygrywa');
  check(JSON.stringify(P.mergeState(rb, ra).review) === JSON.stringify(Object.fromEntries(Object.keys(rb.review).map((k) => [k, rm[k]]))), 'łączenie: powtórka na dziś – wynik nie zależy od kolejności');
}

async function e2e() {
  const odp = ['https://script.google.com/macros/s/AKfycbTESTscriptID_1234567890abc/exec', 'Ola'];
  const G = atrapa({ prompt: () => odp.shift() });
  G.f.onOpen();
  G.f.przygotuj();
  G.f.zapiszAdres();
  G.f.dodajDziecko();
  const kid = G.f.listaDzieci_()[0];
  check(kid && /^[a-f0-9A-Z]{16,64}$/.test(kid.kod), 'arkusz: dziecko z kodem');
  const post = (o) => JSON.parse(G.f.doPost({ postData: { contents: JSON.stringify(o) } }).text);
  check(!post({ a: 'hello', k: 'zlykodzlykodzlykod1', d: 'abcd' }).ok, 'arkusz: nieznany kod odrzucony');
  // duży zapis – kilka komórek
  const big = { best: {} };
  for (let i = 0; i < 6000; i++) big.best[`p/d${i}`] = i % 100;
  check(post({ a: 'sync', k: kid.kod, d: 'test1', since: {}, tracks: { pomoc_kl4_v1: big } }).ok, 'arkusz: zapis dużego stanu');
  const back = post({ a: 'sync', k: kid.kod, d: 'test2', since: {}, tracks: {} });
  check(back.devices.test1 && Object.keys(back.devices.test1.tracks.pomoc_kl4_v1.best).length === 6000, 'arkusz: odczyt dużego stanu w częściach');

  const link = `${ROOT}index.html?polacz=${kid.kod}&skrypt=AKfycbTESTscriptID_1234567890abc`;
  let offline = false;
  const browser = await chromium.launch();
  async function device(name, width) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    await ctx.route('https://script.google.com/macros/s/**', (route) => {
      if (offline && name === 'telefon') return route.abort();
      const out = G.f.doPost({ postData: { contents: route.request().postData() } }).text;
      return route.fulfill({ status: 200, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: out });
    });
    const page = await ctx.newPage();
    page.on('pageerror', (e) => problems.push(`${name}: błąd JS: ${e.message}`));
    page.on('dialog', (d) => d.accept());
    return page;
  }
  const sync = (p) => p.evaluate(() => window.POSTEP.cloud.syncNow());
  const st = (p) => p.evaluate(() => JSON.parse(localStorage.getItem('pomoc_kl4_v1') || '{}'));
  async function quiz(p, sid) {
    await p.goto(ROOT + 'klasa4.html');
    const tid = await p.evaluate((s) => window.SUBJECTS.find((x) => x.id === s).topics[0].id, sid);
    await p.goto(ROOT + `klasa4.html#/s/${sid}/t/${tid}/quiz`);
    for (let i = 0; i < 80 && !(await p.$('.result')); i++) {
      await p.click('.opt');
      await p.click('#next');
    }
  }
  const A = await device('telefon', 400);
  const B = await device('komputer', 1100);
  for (const p of [A, B]) {
    await p.goto(link);
    await p.click('.toast.ask [data-a="1"]', { timeout: 5000 });
    await p.waitForSelector('.toast:not(.ask)', { timeout: 5000 });
    check(/Połączono/.test(await p.textContent('.toast')), 'link połączenia: komunikat „Połączono”');
    check(!p.url().includes('polacz='), 'link połączenia usunięty z adresu');
  }
  await quiz(A, 'matematyka');
  await sync(A);
  await B.goto(ROOT + 'klasa4.html');
  await sync(B);
  const a1 = await st(A);
  const b1 = await st(B);
  check(JSON.stringify(b1.best) === JSON.stringify(a1.best) && Object.keys(b1.wrong).length === Object.keys(a1.wrong).length, 'komputer widzi wynik i błędy z telefonu');
  // komputer: powtórka błędów – same dobre odpowiedzi
  await B.goto(ROOT + 'klasa4.html#/powtorka');
  for (let i = 0; i < 80 && (await B.$('.question')); i++) {
    const k = await B.evaluate(() => {
      const t = document.querySelector('.question').textContent;
      for (const s of window.SUBJECTS) for (const tp of s.topics) for (const q of tp.questions) if (q.q === t) return q.answer;
      return -1;
    });
    await B.click(`.opt[data-k="${k}"]`);
    await B.click('#next');
  }
  check(!Object.keys((await st(B)).wrong).length, 'komputer: powtórka poprawiona');
  await sync(B);
  offline = true;
  await quiz(A, 'przyroda');
  await sync(A);
  check(await A.evaluate(() => !!Object.values(window.POSTEP.cloud.cfg().profiles)[0].err), 'telefon bez internetu: błąd zapisany przy profilu');
  offline = false;
  await sync(A);
  const a3 = await st(A);
  check(Object.keys(a3.wrong).every((k) => k.startsWith('przyroda/')), 'telefon: błędy poprawione na komputerze zniknęły');
  await sync(B);
  check(Object.keys((await st(B)).best).some((k) => k.startsWith('przyroda/')), 'komputer: widzi naukę z telefonu zrobioną bez internetu');
  // „🔁 Powtórka na dziś” (ścieżka „Świat”): quiz działu na telefonie → dział w powtórkach (termin jutro);
  // po upływie terminu kafelek „Na dziś”, 3 dobre odpowiedzi → pudełko 1, termin za 3 dni; komputer widzi to po synchronizacji
  const sw = (p) => p.evaluate(() => JSON.parse(localStorage.getItem('pomoc_swiat_v1') || '{}'));
  const rightOf = (p, stage) => p.evaluate((st) => {
    const t = document.querySelector('.question').textContent;
    for (const s of window.SUBJECTS) for (const tp of s.topics) for (const q of tp.questions) if (q.q === t) return st ? q.why.answer : q.answer;
    return -1;
  }, stage);
  const answerRight = async (p) => {
    for (let i = 0; i < 80 && !(await p.$('.result')); i++) {
      await p.click(`#q1 .opt[data-k="${await rightOf(p, 0)}"]`);
      if (await p.$('.why')) await p.click(`.why .opt[data-k="${await rightOf(p, 1)}"]`);
      await p.click('#next');
    }
  };
  for (const p of [A, B]) {
    await p.goto(ROOT + 'swiat.html#/chmura');
    await p.selectOption('select[data-track="swiat"]', kid.kod);
    await p.waitForTimeout(300);
  }
  await A.goto(ROOT + 'swiat.html');
  const [swS, swT] = await A.evaluate(() => [window.SUBJECTS[0].id, window.SUBJECTS[0].topics[0].id]);
  const swKey = `${swS}/${swT}`;
  await A.goto(ROOT + `swiat.html#/s/${swS}/t/${swT}/quiz`);
  await answerRight(A);
  const today = await A.evaluate(() => window.POSTEP.dayKey());
  const inDays = (n) => A.evaluate((k) => window.POSTEP.addDays(window.POSTEP.dayKey(), k), n);
  let rev = (await sw(A)).review || {};
  check(rev[swKey] && rev[swKey].box === 0 && rev[swKey].due === (await inDays(1)), 'powtórka na dziś: po quizie działu – pudełko 0, termin jutro');
  await A.goto(ROOT + 'swiat.html');
  check(!(await A.$('.today')), 'powtórka na dziś: dziś jeszcze bez kafelka');
  // upływ czasu: termin przesunięty na wczoraj
  const yesterday = await inDays(-1);
  await A.evaluate(([k, d]) => {
    const st = JSON.parse(localStorage.getItem('pomoc_swiat_v1'));
    st.review[k].due = d;
    st.review[k].at = Date.now(); // późniejszy wpis – nie przegra z zapisem z pamięci strony
    localStorage.setItem('pomoc_swiat_v1', JSON.stringify(st));
  }, [swKey, yesterday]);
  await A.reload();
  check(!!(await A.$(`.today a[href="#/s/${swS}/t/${swT}/powtorz"]`)), 'powtórka na dziś: kafelek „Na dziś” z działem po terminie');
  const bestBefore = (await sw(A)).best[swKey];
  await A.click('.today a');
  check(/z 3/.test(await A.textContent('.qhead')), 'powtórka na dziś: 3 pytania');
  await answerRight(A);
  rev = (await sw(A)).review;
  check(rev[swKey].box === 1 && rev[swKey].due === (await inDays(3)), 'powtórka na dziś: 3 z 3 → pudełko 1, termin za 3 dni');
  check((await sw(A)).best[swKey] === bestBefore, 'powtórka na dziś: wynik quizu działu bez zmian');
  check(!(await A.$('#again')), 'powtórka na dziś: bez „Jeszcze raz”');
  await sync(A);
  await B.goto(ROOT + 'swiat.html');
  await sync(B);
  const revB = ((await sw(B)).review || {})[swKey];
  check(revB && revB.box === 1 && revB.due > today, 'powtórka na dziś: komputer widzi powtórkę z telefonu');
  await B.goto(ROOT + 'klasa4.html#/postepy');
  check((await B.$$('.srow')).length > 0, 'komputer: panel postępów');
  await B.goto(ROOT + 'klasa4.html');
  await B.click('#reset');
  await sync(B);
  await A.goto(ROOT + 'klasa4.html');
  await sync(A);
  const a4 = await st(A);
  check(!Object.keys(a4.best).length && !Object.keys(a4.wrong).length, 'zerowanie na komputerze zeruje telefon');
  check(G.f.wyslijRaporty() === 1 && G.mails.length === 1 && /Ola/.test(G.mails[0].subject), 'raport tygodniowy wysłany');
  check(/Plan na najbliższy tydzień/.test(G.mails[0].htmlBody) && /Mocne strony/.test(G.mails[0].body), 'raport: sekcje z rekomendacją');
  // klasa przestawiona na „tylko to urządzenie” znika z arkusza (i z raportu)
  await A.goto(ROOT + 'klasa4.html#/chmura');
  await A.selectOption('select[data-track="kl4"]', '');
  await A.waitForTimeout(1500);
  await B.goto(ROOT + 'klasa4.html#/chmura');
  await B.selectOption('select[data-track="kl4"]', '');
  await B.waitForTimeout(1500);
  for (const p of [A, B]) { // ścieżka „Świat” (test powtórki) – też odłączona
    await p.goto(ROOT + 'swiat.html#/chmura');
    await p.selectOption('select[data-track="swiat"]', '');
    await p.waitForTimeout(1500);
  }
  check(G.f.wyslijRaporty() === 0, 'klasa odłączona na obu urządzeniach – brak danych do raportu');
  check(G.ss.getSheetByName('Raporty').getLastRow() === 3, 'raport zapisany w karcie „Raporty” (nagłówek + klasa 4 + Świat)');
  await browser.close();
}

(async () => {
  unit();
  await e2e();
  if (problems.length) {
    console.log(`PROBLEMY (${problems.length}):`);
    problems.forEach((p) => console.log(' - ' + p));
    process.exitCode = 1;
  } else console.log('OK – łączenie zapisów, prognoza, skrypt arkusza i synchronizacja dwóch urządzeń działają.');
})();
