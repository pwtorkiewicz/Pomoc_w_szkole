/* Wspólne wczytanie danych dla narzędzi (node): przedmioty + zestawy ćwiczeń. */
const path = require('path');
const fs = require('fs');
module.exports = function wczytaj() {
  global.window = { SUBJECTS: [], EXERCISES: [] };
  const dir = path.join(__dirname, '..', 'js', 'dane');
  for (const f of ['polski', 'matematyka', 'angielski']) require(path.join(dir, f + '.js'));
  for (const f of fs.readdirSync(dir).filter((x) => /^cwiczenia-.*\.js$/.test(x)).sort()) require(path.join(dir, f));
  return window;
};
