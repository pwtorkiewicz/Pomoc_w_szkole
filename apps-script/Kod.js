/* Pomoc w szkole – chmura rodzica (Google Apps Script w arkuszu Google).
 *
 * Co robi:
 *   1. synchronizacja: urządzenia dziecka (telefon, komputer) wysyłają tu swój zapis postępu i pobierają zapisy
 *      z pozostałych urządzeń; łączenie robi aplikacja (js/postep.js), arkusz tylko przechowuje dane,
 *   2. raport: w każdą niedzielę wieczorem mail do rodzica z podsumowaniem tygodnia (dla każdego dziecka).
 *
 * Instalacja (raz, ok. 10 minut) – opis także w aplikacji (strona „☁️ Synchronizacja”) i w docs/CHMURA.md:
 *   1. Nowy arkusz Google → Rozszerzenia → Apps Script → wklej cały ten plik (zamiast przykładowego kodu) → Zapisz.
 *   2. Odśwież arkusz → menu „🎒 Pomoc w szkole” → „1. Przygotuj arkusz” → zezwól na dostęp.
 *   3. Apps Script: Wdróż → Nowe wdrożenie → Aplikacja internetowa; Wykonaj jako: Ja; Kto ma dostęp: Każdy → skopiuj adres /exec.
 *   4. Menu „🎒 Pomoc w szkole” → „2. Zapisz adres aplikacji internetowej” → wklej adres.
 *   5. Menu → „Dodaj dziecko” → link połączenia otwórz na każdym urządzeniu dziecka.
 * Po zmianie kodu: Wdróż → Zarządzaj wdrożeniami → edytuj → Wersja: nowa (adres zostaje ten sam).
 *
 * Bezpieczeństwo: skrypt przyjmuje tylko kody dzieci z arkusza „Dzieci” (losowe, 32 znaki). Kod działa jak hasło
 * do danych jednego dziecka. Usunięcie wiersza dziecka odcina jego urządzenia. Dane są tylko w tym arkuszu. */

const APLIKACJA = 'https://pwtorkiewicz.github.io/Pomoc_w_szkole/';
const STREFA = 'Europe/Warsaw';
const ARK = { dzieci: 'Dzieci', dane: '_dane', raporty: 'Raporty' };
const NAGLOWKI = {
  Dzieci: ['Imię', 'Kod połączenia', 'E-mail do raportów', 'Link połączenia', 'Dodano'],
  _dane: ['Kod', 'Urządzenie', 'Zmiana (ms)', 'Zmieniono', 'Dane (części)'],
  Raporty: ['Data raportu', 'Imię', 'Ścieżka', 'Czas nauki (min)', 'Dni z nauką', 'Dobre odpowiedzi', 'Złe odpowiedzi', 'Lekcje', 'Quizy i zestawy', 'Materiał (%)', 'Prognoza'],
};
// Zapis urządzenia dzielimy na kawałki – komórka arkusza mieści ograniczoną liczbę znaków (zostawiamy duży zapas).
const KAWALEK = 30000;
const MAX_ZAPYTANIE = 5000000;
const DZIEN = 864e5;

// ---------- Menu w arkuszu ----------
function onOpen() {
  SpreadsheetApp.getUi().createMenu('🎒 Pomoc w szkole')
    .addItem('1. Przygotuj arkusz', 'przygotuj')
    .addItem('2. Zapisz adres aplikacji internetowej', 'zapiszAdres')
    .addSeparator()
    .addItem('Dodaj dziecko', 'dodajDziecko')
    .addItem('Pokaż linki połączenia', 'pokazLinki')
    .addSeparator()
    .addItem('Wyślij raport teraz', 'wyslijRaportTeraz')
    .addToUi();
}

function przygotuj() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty('ARKUSZ', ss.getId());
  for (const nazwa of [ARK.dzieci, ARK.raporty, ARK.dane]) {
    let sh = ss.getSheetByName(nazwa);
    if (!sh) sh = ss.insertSheet(nazwa);
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, NAGLOWKI[nazwa].length).setValues([NAGLOWKI[nazwa]]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
  }
  const dane = ss.getSheetByName(ARK.dane);
  dane.getRange('A:Z').setNumberFormat('@'); // wszystko jako tekst – arkusz niczego nie przerabia
  dane.hideSheet();
  // pusty „Arkusz1” z nowego pliku nie jest potrzebny
  const pusty = ss.getSheets().find((s) => !Object.values(ARK).includes(s.getName()) && s.getLastRow() === 0);
  if (pusty && ss.getSheets().length > 1) ss.deleteSheet(pusty);
  // cotygodniowy raport: niedziela, ok. 18:00 (Google uruchamia wyzwalacz o wybranej godzinie z dokładnością do kilkudziesięciu minut)
  ScriptApp.getProjectTriggers().filter((t) => t.getHandlerFunction() === 'wyslijRaporty').forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('wyslijRaporty').timeBased().onWeekDay(ScriptApp.WeekDay.SUNDAY).atHour(18).inTimezone(STREFA).create();
  SpreadsheetApp.getUi().alert('Gotowe ✓',
    'Arkusz jest przygotowany, a raport będzie wysyłany w każdą niedzielę ok. 18:00.\n\n' +
    'Teraz w edytorze Apps Script: Wdróż → Nowe wdrożenie → Aplikacja internetowa (Wykonaj jako: Ja, Kto ma dostęp: Każdy). ' +
    'Skopiuj adres kończący się na /exec i wybierz w menu „2. Zapisz adres aplikacji internetowej”.',
    SpreadsheetApp.getUi().ButtonSet.OK);
}

function zapiszAdres() {
  const ui = SpreadsheetApp.getUi();
  const r = ui.prompt('Adres aplikacji internetowej', 'Wklej adres z okna wdrożenia (https://script.google.com/macros/s/…/exec):', ui.ButtonSet.OK_CANCEL);
  if (r.getSelectedButton() !== ui.Button.OK) return;
  const m = r.getResponseText().trim().match(/^https:\/\/script\.google\.com\/(?:a\/[^/]+\/)?macros\/s\/([\w-]+)\/exec\/?$/);
  if (!m) { ui.alert('To nie jest adres aplikacji internetowej – powinien zaczynać się od https://script.google.com/macros/s/ i kończyć na /exec.'); return; }
  PropertiesService.getScriptProperties().setProperty('SKRYPT', m[1]);
  odswiezLinki_();
  ui.alert('Zapisano ✓', 'Teraz dodaj dziecko (menu „Dodaj dziecko”) – arkusz pokaże link połączenia.', ui.ButtonSet.OK);
}

function dodajDziecko() {
  const ui = SpreadsheetApp.getUi();
  if (!PropertiesService.getScriptProperties().getProperty('SKRYPT')) { ui.alert('Najpierw wdróż aplikację internetową i zapisz jej adres (menu „2. Zapisz adres…”).'); return; }
  const r = ui.prompt('Dodaj dziecko', 'Imię (albo pseudonim) dziecka – pojawi się w aplikacji i w raporcie:', ui.ButtonSet.OK_CANCEL);
  if (r.getSelectedButton() !== ui.Button.OK) return;
  const imie = r.getResponseText().trim().slice(0, 40);
  if (!imie) return;
  const kod = Utilities.getUuid().replace(/-/g, '');
  const mail = Session.getEffectiveUser().getEmail();
  arkusz_().getSheetByName(ARK.dzieci).appendRow([imie, kod, mail, link_(kod), new Date()]);
  pokazLink_(imie, link_(kod));
}

function pokazLinki() {
  const dzieci = listaDzieci_();
  if (!dzieci.length) { SpreadsheetApp.getUi().alert('Nie ma jeszcze dzieci – wybierz „Dodaj dziecko”.'); return; }
  const html = dzieci.map((d) => `<p><b>${esc_(d.imie)}</b><br><textarea readonly rows="3" style="width:100%" onclick="this.select()">${esc_(link_(d.kod))}</textarea></p>`).join('');
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(`<div style="font-family:sans-serif">${html}<p style="color:#666">Kliknij pole, skopiuj link i wyślij go dziecku (prywatnie). Otwórz go na każdym urządzeniu, na którym dziecko się uczy.</p></div>`).setWidth(520).setHeight(420), 'Linki połączenia');
}

function wyslijRaportTeraz() {
  const r = wyslij_();
  const bez = r.bez.length ? `\n\nBez raportu: ${r.bez.join(', ')} – brak danych z urządzeń (otwórz aplikację na połączonym urządzeniu, pouczaj się chwilę i na stronie „☁️ Synchronizacja” kliknij „Synchronizuj teraz”) albo brak adresu w kolumnie „E-mail do raportów”.` : '';
  SpreadsheetApp.getUi().alert(`Wysłano raporty: ${r.n}.${r.n ? ' Sprawdź skrzynkę.' : ''}${bez}`);
}

// ---------- Aplikacja internetowa ----------
function doGet() {
  return json_({ ok: true, app: 'pomoc-w-szkole', info: 'Skrypt działa. Urządzenia łączy link połączenia z menu arkusza.' });
}

function doPost(e) {
  let out;
  try {
    const txt = (e && e.postData && e.postData.contents) || '';
    if (txt.length > MAX_ZAPYTANIE) throw new Error('za dużo danych naraz');
    out = obsluz_(JSON.parse(txt));
  } catch (err) {
    out = { ok: false, error: String((err && err.message) || err) };
  }
  return json_(out);
}

function obsluz_(req) {
  const dziecko = znajdzDziecko_(req && req.k);
  if (!dziecko) throw new Error('nieznany kod połączenia – poproś rodzica o nowy link');
  if (req.a === 'hello') return { ok: true, name: dziecko.imie };
  if (req.a !== 'sync') throw new Error('nieznana operacja');
  const dev = String(req.d || '');
  if (!/^[a-z0-9]{4,40}$/i.test(dev)) throw new Error('błędny identyfikator urządzenia');
  const since = req.since && typeof req.since === 'object' ? req.since : {};
  const tracks = req.tracks && typeof req.tracks === 'object' ? req.tracks : {};
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const sh = arkusz_().getSheetByName(ARK.dane);
    const zapisy = czytajZapisy_(sh, dziecko.kod);
    const teraz = Date.now();
    // keys: klasy przypisane temu dziecku na urządzeniu – klasę przestawioną na „tylko to urządzenie” usuwamy
    const klucze = Array.isArray(req.keys) ? req.keys.map(String) : null;
    const moj = zapisy.find((z) => z.dev === dev);
    const dane = moj ? parsuj_(moj) : { tracks: {} };
    let zmiana = Object.keys(tracks).length > 0;
    Object.assign(dane.tracks, tracks);
    if (klucze) for (const k of Object.keys(dane.tracks)) if (!klucze.includes(k)) { delete dane.tracks[k]; zmiana = true; }
    if (zmiana) zapiszZapis_(sh, moj ? moj.wiersz : 0, dziecko.kod, dev, teraz, JSON.stringify(dane), moj ? moj.szer : 0);
    const devices = {};
    for (const z of zapisy) {
      if (z.dev === dev || z.ts <= (+since[z.dev] || 0)) continue;
      devices[z.dev] = { ts: z.ts, tracks: parsuj_(z).tracks || {} };
    }
    return { ok: true, name: dziecko.imie, now: teraz, devices };
  } finally {
    lock.releaseLock();
  }
}

// ---------- Raport tygodniowy ----------
// Wywołuje go wyzwalacz (niedziela) albo menu. Zwraca liczbę wysłanych maili.
function wyslijRaporty() {
  return wyslij_().n;
}
function wyslij_() {
  let n = 0;
  const bez = [];
  for (const d of listaDzieci_()) {
    const r = d.mail ? raport_(d) : null;
    if (!r) { bez.push(d.imie); continue; }
    MailApp.sendEmail({ to: d.mail, subject: r.temat, body: r.tekst, htmlBody: r.html, name: 'Pomoc w szkole' });
    const sh = arkusz_().getSheetByName(ARK.raporty);
    for (const w of r.wiersze) sh.appendRow(w);
    n++;
  }
  return { n, bez };
}

// Najnowsze podsumowanie każdej ścieżki dziecka (liczy je aplikacja przy synchronizacji: state.sum).
// Zapis sprzed „Wyzeruj postęp” (starsze resetAt) przegrywa z zapisem po zerowaniu.
function podsumowania_(kod) {
  const sh = arkusz_().getSheetByName(ARK.dane);
  const naj = {};
  for (const z of czytajZapisy_(sh, kod)) {
    const tracks = parsuj_(z).tracks || {};
    for (const key in tracks) {
      const st = tracks[key] || {};
      const sum = st.sum;
      if (!sum || !sum.track) continue;
      const cand = { sum, reset: st.resetAt || 0 };
      const cur = naj[sum.track];
      if (!cur || cand.reset > cur.reset || (cand.reset === cur.reset && (sum.ts || 0) > (cur.sum.ts || 0))) naj[sum.track] = cand;
    }
  }
  return Object.keys(naj).map((k) => naj[k].sum);
}

function raport_(d) {
  const sumy = podsumowania_(d.kod);
  if (!sumy.length) return null;
  const dzis = Utilities.formatDate(new Date(), STREFA, 'yyyy-MM-dd');
  const dni = (od, n) => Array.from({ length: n }, (_, i) => Utilities.formatDate(new Date(Date.parse(od + 'T12:00:00Z') - i * DZIEN), STREFA, 'yyyy-MM-dd'));
  const tydz = dni(dzis, 7);
  const poprz = dni(tydz[6], 8).slice(1);
  const suma = (s, lista) => {
    const per = {};
    const tot = [0, 0, 0, 0, 0];
    let aktywne = 0;
    for (const day of lista) {
      const e = (s.days || {})[day];
      if (!e) continue;
      let akt = false;
      for (const sid in e) {
        const v = e[sid];
        per[sid] = (per[sid] || [0, 0, 0, 0, 0]).map((x, i) => x + (+v[i] || 0));
        v.forEach((x, i) => { tot[i] += +x || 0; });
        if ((+v[0] || 0) >= 60 || v[1] || v[2] || v[3]) akt = true;
      }
      if (akt) aktywne++;
    }
    return { per, tot, aktywne };
  };
  const min = (sec) => { const m = Math.round((sec || 0) / 60); return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}`; };
  const proc = (ok, bad) => (ok + bad ? `${Math.round((ok / (ok + bad)) * 100)}%` : '–');
  const okres = `${kropki_(tydz[6])}–${kropki_(tydz[0])}`;
  const tekst = [`Raport nauki: ${d.imie}, ostatnie 7 dni (${okres})`, ''];
  const wiersze = [];
  let html = `<div style="font-family:Arial,sans-serif;color:#1d2233;max-width:640px">
    <h2 style="margin:0 0 4px">📊 Raport nauki: ${esc_(d.imie)}</h2>
    <p style="color:#5f667a;margin:0 0 16px">Ostatnie 7 dni (${okres})</p>`;
  let razemCzas = 0;
  for (const s of sumy) {
    const w = suma(s, tydz);
    const p = suma(s, poprz);
    razemCzas += w.tot[0];
    tekst.push(`== ${s.name} ==`,
      `Czas nauki: ${min(w.tot[0])} (poprzednie 7 dni: ${min(p.tot[0])})`,
      `Dni z nauką: ${w.aktywne} z 7`,
      `Odpowiedzi: ${w.tot[1]} dobrych, ${w.tot[2]} złych (${proc(w.tot[1], w.tot[2])})`,
      `Lekcje: ${w.tot[3]} · quizy i zestawy: ${w.tot[4]}`,
      `Cały materiał: ${s.pct}% (${s.done} z ${s.total} działów) · prognoza: ${s.fc}`, '');
    const td = 'style="padding:6px 8px;border-bottom:1px solid #e2e5ef;text-align:left;vertical-align:top"';
    html += `<h3 style="margin:22px 0 6px">${esc_(s.name)}</h3>
      <table style="border-collapse:collapse;margin-bottom:8px">
        <tr><td ${td}>⏱️ Czas nauki</td><td ${td}><b>${min(w.tot[0])}</b> <span style="color:#5f667a">(poprzednie 7 dni: ${min(p.tot[0])})</span></td></tr>
        <tr><td ${td}>📅 Dni z nauką</td><td ${td}><b>${w.aktywne} z 7</b></td></tr>
        <tr><td ${td}>✅ Odpowiedzi</td><td ${td}><b>${w.tot[1]}</b> dobrych, <b>${w.tot[2]}</b> złych (${proc(w.tot[1], w.tot[2])})</td></tr>
        <tr><td ${td}>🎓 Lekcje / quizy</td><td ${td}>${w.tot[3]} / ${w.tot[4]}</td></tr>
        <tr><td ${td}>📚 Cały materiał</td><td ${td}><b>${s.pct}%</b> (${s.done} z ${s.total} działów przerobionych)</td></tr>
        <tr><td ${td}>🔮 Prognoza</td><td ${td}>${esc_(s.fc)}</td></tr>
      </table>
      <table style="border-collapse:collapse;font-size:14px;width:100%">
        <tr style="background:#f6f7fb"><th ${td}>Przedmiot</th><th ${td}>Czas</th><th ${td}>Odpowiedzi</th><th ${td}>Materiał</th><th ${td}>Do końca</th></tr>
        ${(s.subjects || []).map((x) => {
          const v = w.per[x.id] || [0, 0, 0, 0, 0];
          tekst.push(`• ${x.name}: ${min(v[0])} · ${v[1]}/${v[1] + v[2]} dobrych · ${x.pct}% (${x.done} z ${x.total}) · ${x.fc}`);
          return `<tr><td ${td}>${x.icon || ''} ${esc_(x.name)}</td><td ${td}>${min(v[0])}</td><td ${td}>${v[1] + v[2] ? `${v[1]} / ${v[1] + v[2]} (${proc(v[1], v[2])})` : '–'}</td><td ${td}>${x.pct}%</td><td ${td}>${esc_(x.fc)}</td></tr>`;
        }).join('')}
      </table>`;
    // sekcje (mocne strony, nad czym popracować, plan na tydzień) – treść liczy aplikacja
    if (Array.isArray(s.sections)) {
      for (const sec of s.sections) {
        const items = (sec.items || []).map(String);
        tekst.push('', `${sec.title}:`, ...(items.length ? items.map((x) => `• ${x}`) : [String(sec.empty || '–')]));
        html += `<p style="margin:16px 0 4px"><b>${esc_(sec.title)}</b></p>${items.length ? `<ul style="margin:0;padding-left:20px">${items.map((x) => `<li style="margin-bottom:4px">${esc_(x)}</li>`).join('')}</ul>` : `<p style="margin:0;color:#5f667a">${esc_(sec.empty || '–')}</p>`}`;
      }
    } else if ((s.weak || []).length) {
      tekst.push('', 'Do powtórki:', ...s.weak.map((x) => `• ${x}`));
      html += `<p style="margin:12px 0 4px"><b>🔁 Do powtórki</b></p><ul style="margin:0;padding-left:20px">${s.weak.map((x) => `<li>${esc_(x)}</li>`).join('')}</ul>`;
    }
    if (s.wrong) { tekst.push(`Pytania w powtórce błędów: ${s.wrong}`); html += `<p style="color:#5f667a">Pytania w powtórce błędów: ${s.wrong}</p>`; }
    html += `<p style="color:#5f667a;font-size:12px">Stan z ${Utilities.formatDate(new Date(s.ts), STREFA, 'd.MM.yyyy, HH:mm')} (ostatnia synchronizacja).</p>`;
    tekst.push('');
    wiersze.push([new Date(), d.imie, s.name, Math.round(w.tot[0] / 60), w.aktywne, w.tot[1], w.tot[2], w.tot[3], w.tot[4], s.pct, s.fc]);
  }
  html += `<p style="color:#5f667a;font-size:12px;margin-top:22px">Czas liczy się tylko przy aktywnej nauce (karta otwarta i ruch w ostatnich 2 minutach). Dział jest przerobiony po lekcji i quizie na co najmniej 80%. Prognoza to szacunek z tempa ostatnich 7 i 28 dni.<br>
    <a href="${APLIKACJA}">Pomoc w szkole</a></p></div>`;
  const temat = `📊 ${d.imie}: ${razemCzas >= 60 ? `${min(razemCzas)} nauki` : 'brak nauki'} w ostatnim tygodniu – raport`;
  return { temat, tekst: tekst.join('\n'), html, wiersze };
}

// ---------- Pomocnicze ----------
function arkusz_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss) return ss;
  const id = PropertiesService.getScriptProperties().getProperty('ARKUSZ');
  if (!id) throw new Error('arkusz nie jest przygotowany – rodzic: menu „1. Przygotuj arkusz”');
  return SpreadsheetApp.openById(id);
}

function listaDzieci_() {
  const sh = arkusz_().getSheetByName(ARK.dzieci);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 3).getValues()
    .map((w) => ({ imie: String(w[0]).trim(), kod: String(w[1]).trim(), mail: String(w[2]).trim() }))
    .filter((d) => d.imie && /^[A-Za-z0-9]{16,64}$/.test(d.kod));
}

function znajdzDziecko_(kod) {
  if (!/^[A-Za-z0-9]{16,64}$/.test(String(kod || ''))) return null;
  return listaDzieci_().find((d) => d.kod === kod) || null;
}

// Zapisy urządzeń dziecka: wiersz arkusza „_dane” = kod | urządzenie | czas zmiany | data | części danych…
function czytajZapisy_(sh, kod) {
  const ost = sh.getLastRow();
  if (ost < 2) return [];
  const szer = sh.getLastColumn();
  const wart = sh.getRange(2, 1, ost - 1, szer).getValues();
  const out = [];
  wart.forEach((w, i) => {
    if (String(w[0]) !== kod) return;
    out.push({ wiersz: i + 2, dev: String(w[1]), ts: +w[2] || 0, czesci: w.slice(4), szer });
  });
  return out;
}

function parsuj_(z) {
  // każda część zaczyna się od „x” – dzięki temu arkusz nie potraktuje jej jak liczby czy formuły
  const txt = z.czesci.map((c) => String(c)).filter((c) => c.charAt(0) === 'x').map((c) => c.slice(1)).join('');
  try { return JSON.parse(txt || '{"tracks":{}}'); } catch (e) { return { tracks: {} }; }
}

function zapiszZapis_(sh, wiersz, kod, dev, ts, txt, staraSzer) {
  const czesci = [];
  for (let i = 0; i < txt.length; i += KAWALEK) czesci.push('x' + txt.slice(i, i + KAWALEK));
  const w = [kod, dev, String(ts), Utilities.formatDate(new Date(ts), STREFA, 'yyyy-MM-dd HH:mm'), ...czesci];
  const szer = Math.max(w.length, staraSzer || 0);
  while (w.length < szer) w.push('');
  const nr = wiersz || sh.getLastRow() + 1;
  if (sh.getMaxColumns() < szer) sh.insertColumnsAfter(sh.getMaxColumns(), szer - sh.getMaxColumns());
  if (sh.getMaxRows() < nr) sh.insertRowsAfter(sh.getMaxRows(), nr - sh.getMaxRows());
  const zakres = sh.getRange(nr, 1, 1, szer);
  zakres.setNumberFormat('@');
  zakres.setValues([w]);
}

function link_(kod) {
  const id = PropertiesService.getScriptProperties().getProperty('SKRYPT') || '';
  return `${APLIKACJA}?polacz=${kod}&skrypt=${id}`;
}

function odswiezLinki_() {
  const sh = arkusz_().getSheetByName(ARK.dzieci);
  if (!sh || sh.getLastRow() < 2) return;
  const r = sh.getRange(2, 2, sh.getLastRow() - 1, 1).getValues();
  sh.getRange(2, 4, r.length, 1).setValues(r.map((w) => [String(w[0]).trim() ? link_(String(w[0]).trim()) : '']));
}

function pokazLink_(imie, link) {
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(
    `<div style="font-family:sans-serif"><p>Link połączenia dla: <b>${esc_(imie)}</b></p>
     <textarea readonly rows="4" style="width:100%" onclick="this.select()">${esc_(link)}</textarea>
     <p style="color:#666">Skopiuj link i wyślij go dziecku prywatnie (SMS, komunikator, mail). Otwórz go na każdym urządzeniu, na którym dziecko się uczy – telefonie i komputerze. Link działa jak hasło: nie publikuj go.</p></div>`)
    .setWidth(520).setHeight(300), 'Dziecko dodane ✓');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
const esc_ = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const kropki_ = (day) => { const [y, m, d] = day.split('-'); return `${+d}.${m}.${y}`; };
