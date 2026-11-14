/* Ekran wyboru ścieżki (index.html). Ostatnio wybrana ścieżka jest podświetlona,
 * ale nie przekierowujemy automatycznie – z jednego urządzenia mogą korzystać dzieci z różnych klas. */
(() => {
  'use strict';
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let last = null;
  try { last = localStorage.getItem(window.TRACK_LAST_KEY); } catch (e) { /* brak dostępu */ }
  // Czy w ścieżce jest już zapisany postęp (bez wczytywania jej danych).
  const started = (t) => {
    try {
      const s = JSON.parse(localStorage.getItem(t.storeKey)) || {};
      return Object.keys(s.best || {}).length + Object.keys(s.lessons || {}).length > 0;
    } catch (e) { return false; }
  };
  // Przełącznik u góry: 🇵🇱 polska szkoła (ścieżki klas i egzamin) albo 🌍 świat (nauka uzupełniająca) – pole group w js/sciezki.js.
  const GROUPS = window.TRACK_GROUPS || [];
  const groupOf = (t) => t.group || (GROUPS[0] && GROUPS[0].id);
  const lastTrack = window.TRACKS.find((t) => t.id === last);
  let group = null;
  try { group = localStorage.getItem('pomoc_grupa'); } catch (e) { /* brak dostępu */ }
  if (!GROUPS.some((g) => g.id === group)) group = lastTrack ? groupOf(lastTrack) : (GROUPS[0] && GROUPS[0].id);
  const card = (t) => `
    <a class="card track${t.id === last ? ' last' : ''}" href="${t.page}" style="--accent:${t.color}">
      <span class="icon">${t.icon}</span>
      <h2>${esc(t.name)}</h2>
      <p>${esc(t.about)}</p>
      ${t.soon ? '<span class="badge">w przygotowaniu</span> ' : ''}${t.id === last ? '<span class="badge good">ostatnio wybrana</span>' : started(t) ? '<span class="badge">rozpoczęta</span>' : ''}
    </a>`;
  function render() {
    const sw = document.getElementById('groups');
    if (sw) {
      sw.innerHTML = GROUPS.length > 1 ? GROUPS.map((g) => `<a href="#${g.id}" data-group="${g.id}" class="${g.id === group ? 'on' : ''}" aria-pressed="${g.id === group}">${esc(g.name)}</a>`).join('') : '';
      sw.querySelectorAll('a').forEach((a) => {
        a.onclick = (e) => {
          e.preventDefault();
          group = a.dataset.group;
          try { localStorage.setItem('pomoc_grupa', group); } catch (err) { /* brak dostępu */ }
          render();
        };
      });
    }
    const g = GROUPS.find((x) => x.id === group);
    const about = document.getElementById('group-about');
    if (about) about.textContent = g ? g.about : '';
    document.getElementById('tracks').innerHTML = window.TRACKS.filter((t) => !GROUPS.length || groupOf(t) === group).map(card).join('');
  }
  render();
})();
