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
  document.getElementById('tracks').innerHTML = window.TRACKS.map((t) => `
    <a class="card track${t.id === last ? ' last' : ''}" href="${t.page}" style="--accent:${t.color}">
      <span class="icon">${t.icon}</span>
      <h2>${esc(t.name)}</h2>
      <p>${esc(t.about)}</p>
      ${t.soon ? '<span class="badge">w przygotowaniu</span> ' : ''}${t.id === last ? '<span class="badge good">ostatnio wybrana</span>' : started(t) ? '<span class="badge">rozpoczęta</span>' : ''}
    </a>`).join('');
})();
