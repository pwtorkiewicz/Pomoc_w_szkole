/* Wspólne wczytanie danych dla narzędzi (node).
 * Ścieżki (klasa 3, klasa 4, klasa 8, egzamin) są opisane w js/sciezki.js; pliki danych ścieżki
 * to skrypty js/dane/… wymienione w jej stronie HTML (jedno źródło prawdy: kolejność <script>).
 *   const wczytaj = require('./dane');
 *   wczytaj('kl4')          → { SUBJECTS, EXERCISES } ścieżki (domyślnie: egzamin8)
 *   wczytaj.sciezki()       → lista ścieżek z js/sciezki.js
 *   wczytaj.strona('kl4')   → pełna ścieżka pliku HTML ścieżki
 *   wczytaj.adres('kl4')    → adres file://… strony ścieżki (dla Playwright) */
const path = require('path');
const fs = require('fs');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function uruchom(files, init) {
  const ctx = vm.createContext({ window: init });
  for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  return ctx.window;
}

function sciezki() {
  return uruchom(['js/sciezki.js'], {}).TRACKS;
}

function sciezka(id) {
  const t = sciezki().find((x) => x.id === id);
  if (!t) throw new Error(`Nieznana ścieżka „${id}”. Dostępne: ${sciezki().map((x) => x.id).join(', ')}`);
  return t;
}

const strona = (id) => path.join(ROOT, sciezka(id).page);
const adres = (id) => 'file://' + strona(id);

// Pliki danych ścieżki w kolejności ze strony HTML (tylko js/dane/… – lekcje sprawdza przeglądarka).
function pliki(id) {
  const html = fs.readFileSync(strona(id), 'utf8');
  return [...html.matchAll(/<script src="(js\/dane\/[^"]+\.js)"><\/script>/g)].map((m) => m[1]);
}

function wczytaj(id = 'egzamin8') {
  const w = uruchom(pliki(id), { SUBJECTS: [], EXERCISES: [] });
  return { SUBJECTS: w.SUBJECTS, EXERCISES: w.EXERCISES, SOURCES: w.SOURCES };
}

module.exports = wczytaj;
module.exports.sciezki = sciezki;
module.exports.sciezka = sciezka;
module.exports.strona = strona;
module.exports.adres = adres;
module.exports.pliki = pliki;
