/* Atrapa usług Google Apps Script (tylko to, czego używa apps-script/Kod.js) – do testów w node (tools/test-chmura.js).
 * Arkusze to tablice w pamięci; komórka > 50 000 znaków i zakres poza wymiarami arkusza zgłaszają błąd. */
const fs = require('fs'); const vm = require('vm');
function colIdx(a) { let n = 0; for (const ch of a) n = n * 26 + ch.charCodeAt(0) - 64; return n; }
function makeSheet(name) {
  const sh = { name, data: [], maxR: 1000, maxC: 26, hidden: false, formats: {},
    getName: () => name,
    getLastRow() { let r = 0; sh.data.forEach((row, i) => { if (row && row.some((v) => v !== '' && v != null)) r = i + 1; }); return r; },
    getLastColumn() { let c = 0; sh.data.forEach((row) => row && row.forEach((v, j) => { if (v !== '' && v != null) c = Math.max(c, j + 1); })); return c; },
    getMaxColumns: () => sh.maxC, getMaxRows: () => sh.maxR,
    insertColumnsAfter(a, n) { sh.maxC += n; }, insertRowsAfter(a, n) { sh.maxR += n; },
    getRange(r, c, nr = 1, nc = 1) {
      if (typeof r === 'string') { const m = r.match(/^([A-Z]+):([A-Z]+)$/); return rng(1, colIdx(m[1]), sh.maxR, colIdx(m[2]) - colIdx(m[1]) + 1); }
      return rng(r, c, nr, nc);
    },
    appendRow(vals) { const r = sh.getLastRow() + 1; rng(r, 1, 1, vals.length).setValues([vals]); },
    setFrozenRows() {}, hideSheet() { sh.hidden = true; },
  };
  function rng(r, c, nr, nc) {
    if (r + nr - 1 > sh.maxR || c + nc - 1 > sh.maxC) throw new Error(`range outside sheet ${name}: ${r},${c},${nr},${nc} (max ${sh.maxR}x${sh.maxC})`);
    return {
      getValues() { const out = []; for (let i = 0; i < nr; i++) { const row = []; for (let j = 0; j < nc; j++) { const v = (sh.data[r - 1 + i] || [])[c - 1 + j]; row.push(v == null ? '' : v); } out.push(row); } return out; },
      setValues(vals) {
        if (vals.length !== nr || vals[0].length !== nc) throw new Error('setValues size mismatch');
        vals.forEach((row, i) => row.forEach((v, j) => {
          if (typeof v === 'string' && v.length > 50000) throw new Error('cell too long ' + v.length);
          const R = r - 1 + i; sh.data[R] = sh.data[R] || []; sh.data[R][c - 1 + j] = v;
        }));
        return this;
      },
      setNumberFormat() { return this; }, setFontWeight() { return this; },
    };
  }
  return sh;
}
function create(opts = {}) {
  const sheets = [makeSheet('Arkusz1')];
  const props = {}; const mails = []; const triggers = [];
  const ss = { getId: () => 'SSID', getSheetByName: (n) => sheets.find((s) => s.name === n) || null,
    insertSheet(n) { const s = makeSheet(n); sheets.push(s); return s; }, getSheets: () => sheets.slice(),
    deleteSheet(s) { sheets.splice(sheets.indexOf(s), 1); } };
  const ui = { alert() {}, prompt: () => ({ getSelectedButton: () => 'OK', getResponseText: () => opts.prompt() }), showModalDialog() {}, createMenu() { const m = { addItem: () => m, addSeparator: () => m, addToUi() {} }; return m; }, ButtonSet: { OK: 1, OK_CANCEL: 2 }, Button: { OK: 'OK' } };
  const fmt = (d, tz, pat) => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(d).map((x) => [x.type, x.value]));
    return pat.replace('yyyy', p.year).replace('MM', p.month).replace('dd', p.day).replace(/\bd\b/, String(+p.day)).replace('HH', p.hour === '24' ? '00' : p.hour).replace('mm', p.minute);
  };
  let uuid = 0;
  const g = {
    SpreadsheetApp: { getActiveSpreadsheet: () => (opts.noActive ? null : ss), openById: (id) => { if (id !== 'SSID') throw new Error('bad id'); return ss; }, getUi: () => ui },
    PropertiesService: { getScriptProperties: () => ({ getProperty: (k) => (k in props ? props[k] : null), setProperty: (k, v) => { props[k] = v; } }) },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    ContentService: { createTextOutput: (t) => ({ text: t, setMimeType() { return this; } }), MimeType: { JSON: 'json' } },
    Utilities: { formatDate: fmt, getUuid: () => `0000000-0000-4000-8000-${String(++uuid).padStart(12, '0')}abcd` },
    Session: { getEffectiveUser: () => ({ getEmail: () => 'rodzic@example.com' }) },
    MailApp: { sendEmail: (m) => mails.push(m) },
    ScriptApp: { getProjectTriggers: () => triggers, deleteTrigger() {}, WeekDay: { SUNDAY: 'SUNDAY' },
      newTrigger: (fn) => { const b = { timeBased: () => b, onWeekDay: () => b, atHour: () => b, inTimezone: () => b, create: () => { triggers.push({ getHandlerFunction: () => fn }); } }; return b; } },
    HtmlService: { createHtmlOutput: () => ({ setWidth() { return this; }, setHeight() { return this; } }) },
    console,
  };
  const ctx = vm.createContext(g);
  vm.runInContext(fs.readFileSync(require('path').join(__dirname, '..', 'apps-script', 'Kod.js'), 'utf8') + '\n;this.__f = { onOpen, przygotuj, zapiszAdres, dodajDziecko, doGet, doPost, wyslijRaporty, listaDzieci_ };', ctx);
  return { f: ctx.__f, ss, props, mails, sheets };
}
module.exports = create;
