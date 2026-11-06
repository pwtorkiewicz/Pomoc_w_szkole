/* Postęp ucznia: dziennik nauki, łączenie zapisów z kilku urządzeń, prognoza i synchronizacja z chmurą rodzica.
 * Wczytywany na każdej stronie (po js/sciezki.js, przed js/app.js) – window.POSTEP.
 *
 * Bez połączenia z chmurą wszystko działa jak dawniej: postęp jest tylko w localStorage tego urządzenia.
 * Chmura = skrypt Google Apps Script w arkuszu Google rodzica (apps-script/Kod.js, instrukcja: docs/CHMURA.md).
 * Urządzenie łączy się raz – linkiem …?polacz=<kod dziecka>&skrypt=<id skryptu> (albo wklejonym na stronie #/chmura).
 *
 * Reguły łączenia zapisów z dwóch urządzeń (mergeState) – nic nie ginie i nic nie liczy się dwa razy:
 *   best, sets      – większy wynik;           lessons – wystarczy przerobienie na jednym urządzeniu;
 *   wrong / fixed   – wygrywa późniejsza odpowiedź (czas w ms); exams, tasks – wygrywa późniejszy wpis (examsAt, tasksAt);
 *   at              – ostatnia nauka działu;   log – dziennik: każde urządzenie liczy osobno (log[urządzenie][dzień][przedmiot]),
 *   hist            – materiał przerobiony w danym dniu (max); sum – podsumowanie dla raportu (nowsze);
 *   resetAt         – „Wyzeruj postęp”: zapis sprzed późniejszego zerowania jest odrzucany.
 *   autoSpeak       – ustawienie tego urządzenia (nie przechodzi między urządzeniami). */
(() => {
  'use strict';

  const DEV_KEY = 'pomoc_urzadzenie';
  const CLOUD_KEY = 'pomoc_chmura';
  const DAY = 864e5;
  const TOMB_DAYS = 120; // jak długo pamiętamy poprawione błędy (fixed)
  const PREFS = ['autoSpeak'];
  const TRACKS = (typeof window !== 'undefined' && window.TRACKS) || [];

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* brak dostępu */ } },
  };
  const readJSON = (k) => { try { return JSON.parse(store.get(k)) || null; } catch (e) { return null; } };
  const clone = (x) => (x === undefined ? undefined : JSON.parse(JSON.stringify(x)));
  const isObj = (x) => !!x && typeof x === 'object' && !Array.isArray(x);

  function randomId(n) {
    const abc = 'abcdefghijkmnpqrstuvwxyz23456789';
    const a = new Uint8Array(n);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) crypto.getRandomValues(a);
    else for (let i = 0; i < n; i++) a[i] = Math.floor(Math.random() * 256);
    return Array.from(a, (x) => abc[x % 32]).join('');
  }
  // Identyfikator urządzenia (przeglądarki) – rozróżnia dzienniki nauki z telefonu i komputera.
  let DEV = store.get(DEV_KEY);
  if (!DEV || !/^[a-z0-9]{4,40}$/.test(DEV)) { DEV = randomId(10); store.set(DEV_KEY, DEV); }

  // Krótki skrót tekstu (FNV-1a) – czy stan zmienił się od ostatniego wysłania.
  function hash(s) {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36) + s.length.toString(36);
  }

  // ---------- Daty (dzień = data lokalna urządzenia, „RRRR-MM-DD”) ----------
  const pad = (n) => String(n).padStart(2, '0');
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseDay = (k) => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (k, n) => { const d = parseDay(k); d.setDate(d.getDate() + n); return dayKey(d); };
  const daysBetween = (a, b) => Math.round((parseDay(b) - parseDay(a)) / DAY);
  const MONTHS = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  const dateLong = (k) => { const d = parseDay(k); return `${d.getDate()} ${MONTHS[d.getMonth()]}`; };
  const dateShort = (k) => { const d = parseDay(k); return `${d.getDate()}.${pad(d.getMonth() + 1)}`; };
  const plural = (n, [one, few, many]) => (n === 1 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many);
  // czas w sekundach → „1 h 5 min”, „35 min”
  function minutes(sec) {
    const m = Math.round((sec || 0) / 60);
    if (m < 60) return `${m} min`;
    return `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}`;
  }

  // ---------- Łączenie zapisów ----------
  function maxMap(a, b) {
    const o = { ...(a || {}) };
    for (const k in b || {}) if (!(k in o) || +b[k] > +o[k]) o[k] = b[k];
    return o;
  }
  // wartości + czasy wpisów: wygrywa późniejszy wpis
  function latestMap(va, ta, vb, tb) {
    const v = { ...(va || {}) };
    const t = { ...(ta || {}) };
    for (const k in vb || {}) {
      if (!(k in v) || ((tb || {})[k] || 0) > (t[k] || 0)) { v[k] = vb[k]; t[k] = (tb || {})[k] || 0; }
    }
    return [v, t];
  }
  // liczniki (zagnieżdżone): dla każdego klucza większa wartość
  function deepMax(a, b) {
    if (!isObj(a)) return isObj(b) ? clone(b) : Math.max(+a || 0, +b || 0);
    if (!isObj(b)) return clone(a);
    const o = { ...a };
    for (const k in b) o[k] = k in a ? deepMax(a[k], b[k]) : clone(b[k]);
    return o;
  }
  function keepPrefs(o, a) {
    for (const p of PREFS) { if (p in a) o[p] = a[p]; else delete o[p]; }
    return o;
  }
  // a – zapis lokalny (jego ustawienia zostają), b – zapis z innego urządzenia
  function mergeState(a, b) {
    a = isObj(a) ? a : {};
    b = isObj(b) ? b : {};
    const ra = a.resetAt || 0;
    const rb = b.resetAt || 0;
    if (rb > ra) return keepPrefs(clone(b), a);
    if (ra > rb) return clone(a);
    const o = { ...clone(b), ...clone(a) }; // pola nieznane tej wersji: lokalne mają pierwszeństwo
    o.best = maxMap(a.best, b.best);
    o.sets = maxMap(a.sets, b.sets);
    o.lessons = { ...(b.lessons || {}), ...(a.lessons || {}) };
    o.at = maxMap(a.at, b.at);
    [o.exams, o.examsAt] = latestMap(a.exams, a.examsAt, b.exams, b.examsAt);
    [o.tasks, o.tasksAt] = latestMap(a.tasks, a.tasksAt, b.tasks, b.tasksAt);
    const wrong = maxMap(a.wrong, b.wrong);
    const fixed = maxMap(a.fixed, b.fixed);
    for (const k in wrong) if ((fixed[k] || 0) >= +wrong[k]) delete wrong[k];
    const old = Date.now() - TOMB_DAYS * DAY;
    for (const k in fixed) if (fixed[k] < old) delete fixed[k];
    o.wrong = wrong;
    o.fixed = fixed;
    o.log = deepMax(a.log || {}, b.log || {});
    o.hist = deepMax(a.hist || {}, b.hist || {});
    const sum = b.sum && (!a.sum || (b.sum.ts || 0) > (a.sum.ts || 0)) ? b.sum : a.sum;
    if (sum) o.sum = clone(sum); else delete o.sum;
    if (a.idKeys || b.idKeys) o.idKeys = 1;
    return keepPrefs(o, a);
  }

  // ---------- Dziennik nauki ----------
  // state.log[urządzenie][dzień][przedmiot] = { t: sekundy, ok, bad: odpowiedzi, l: lekcje, q: quizy }
  function addLog(state, sid, field, n = 1) {
    const day = dayKey();
    const L = state.log || (state.log = {});
    const D = L[DEV] || (L[DEV] = {});
    const d = D[day] || (D[day] = {});
    const e = d[sid] || (d[sid] = {});
    e[field] = (e[field] || 0) + n;
  }
  // suma ze wszystkich urządzeń: { dzień: { przedmiot: { t, ok, bad, l, q } } }
  function dailyTotals(state) {
    const out = {};
    const L = state.log || {};
    for (const dev in L) {
      for (const day in L[dev]) {
        for (const sid in L[dev][day]) {
          const e = L[dev][day][sid];
          const o = (out[day] || (out[day] = {}))[sid] || (out[day][sid] = {});
          for (const f in e) o[f] = (o[f] || 0) + (+e[f] || 0);
        }
      }
    }
    return out;
  }
  // usuń wpisy starsze niż `days` dni (dziennik i historia materiału)
  function prune(state, days = 730) {
    const from = addDays(dayKey(), -days);
    for (const dev in state.log || {}) for (const d in state.log[dev]) if (d < from) delete state.log[dev][d];
    for (const d in state.hist || {}) if (d < from) delete state.hist[d];
  }

  // ---------- Prognoza ----------
  // hist: { dzień: { przedmiot: przerobione działy (ułamek) } } – wartość na koniec dnia (rośnie z czasem).
  function valueAt(hist, sids, day) {
    let sum = 0;
    for (const sid of sids) {
      let at = null;
      for (const d in hist) if (d <= day && hist[d][sid] != null && (at === null || d > at)) at = d;
      if (at) sum += +hist[at][sid] || 0;
    }
    return sum;
  }
  // Tempo z ostatnich 7 i 28 dni → przedział (w dniach), za ile cały materiał będzie przerobiony.
  // Prognoza dopiero po 14 dniach historii – wcześniej byłaby przypadkowa.
  const WAIT_DAYS = 14;
  function forecast(hist, sids, total, now, today = dayKey()) {
    if (!total) return { kind: 'none' };
    const remaining = total - now;
    if (remaining <= 0.005 * total) return { kind: 'done' };
    if (now <= 0) return { kind: 'new' };
    const days = Object.keys(hist || {}).filter((d) => sids.some((s) => hist[d][s] != null)).sort();
    const first = days[0];
    if (!first) return { kind: 'wait', left: WAIT_DAYS };
    const span = daysBetween(first, today);
    if (span < WAIT_DAYS) return { kind: 'wait', left: WAIT_DAYS - span };
    const rate = (n) => {
      let start = addDays(today, -n);
      if (start < first) start = first;
      const len = daysBetween(start, today);
      return len > 0 ? Math.max(0, now - valueAt(hist, sids, start)) / len : 0;
    };
    const rates = [rate(7), rate(28)].filter((r) => r > 1e-6);
    if (!rates.length) return { kind: 'stalled' };
    let lo = remaining / Math.max(...rates);
    let hi = remaining / Math.min(...rates);
    if (hi / lo < 1.3) { const m = Math.sqrt(lo * hi); lo = m / 1.15; hi = m * 1.15; }
    return { kind: 'eta', lo: Math.max(1, Math.round(lo)), hi: Math.max(1, Math.ceil(hi)), today };
  }
  function forecastText(f, short) {
    if (f.kind === 'none') return '';
    if (f.kind === 'done') return 'materiał przerobiony 🎉';
    if (f.kind === 'new') return short ? 'jeszcze nie zaczęty' : 'pojawi się, gdy zaczniesz naukę';
    if (f.kind === 'wait') return short ? 'za mało danych' : `pojawi się po 2 tygodniach nauki (jeszcze ${f.left} ${plural(f.left, ['dzień', 'dni', 'dni'])})`;
    if (f.kind === 'stalled') return 'brak postępu w ostatnich 4 tygodniach';
    if (f.hi > 730) return 'ponad 2 lata przy obecnym tempie';
    let span;
    if (f.hi < 14) span = f.lo === f.hi ? `${f.lo} ${f.lo === 1 ? 'dnia' : 'dni'}` : `${f.lo}–${f.hi} dni`;
    else {
      const wl = Math.max(1, Math.round(f.lo / 7));
      const wh = Math.max(wl, Math.ceil(f.hi / 7));
      span = wl === wh ? `${wl} ${wl === 1 ? 'tygodnia' : 'tygodni'}` : `${wl}–${wh} tygodni`;
    }
    if (short) return `około ${span}`;
    const a = addDays(f.today, f.lo);
    const b = addDays(f.today, f.hi);
    return `około ${span} (${a === b ? `ok. ${dateLong(a)}` : `między ${dateLong(a)} a ${dateLong(b)}`})`;
  }

  // ---------- Chmura (Google Apps Script rodzica) ----------
  const SCRIPT_RE = /^[\w-]{20,150}$/;
  const CODE_RE = /^[A-Za-z0-9]{16,64}$/;
  const scriptUrl = (id) => `https://script.google.com/macros/s/${id}/exec`;
  const emptyCfg = () => ({ script: '', profiles: {}, tracks: {}, since: {}, sent: {} });
  function cfg() {
    const c = readJSON(CLOUD_KEY);
    return isObj(c) ? { ...emptyCfg(), ...c } : emptyCfg();
  }
  function updateCfg(fn) { const c = cfg(); fn(c); store.set(CLOUD_KEY, JSON.stringify(c)); return c; }
  const connected = (c = cfg()) => !!c.script && Object.keys(c.profiles).length > 0;
  // profil (kod), do którego należy ścieżka na tym urządzeniu – albo null
  function codeOf(trackId, c = cfg()) {
    const code = c.tracks[trackId];
    return c.script && code && c.profiles[code] ? code : null;
  }

  async function call(id, body, keepalive) {
    const text = JSON.stringify(body);
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = ctrl && setTimeout(() => ctrl.abort(), 45000);
    try {
      let res;
      try {
        res = await fetch(scriptUrl(id), {
          method: 'POST',
          body: text,
          // text/plain – „prosty” request (bez zapytania wstępnego CORS, którego Apps Script nie obsługuje)
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          redirect: 'follow',
          keepalive: !!keepalive && text.length < 60000,
          signal: ctrl ? ctrl.signal : undefined,
        });
      } catch (e) {
        throw new Error(typeof navigator !== 'undefined' && navigator.onLine === false ? 'brak internetu' : 'nie udało się połączyć z arkuszem rodzica');
      }
      const txt = await res.text();
      let data;
      try { data = JSON.parse(txt); } catch (e) {
        throw new Error(res.ok ? 'skrypt nie odpowiedział danymi – sprawdź, czy jest wdrożony jako aplikacja internetowa z dostępem „Każdy”' : `błąd serwera (${res.status})`);
      }
      if (!data || !data.ok) throw new Error((data && data.error) || 'nieznany błąd skryptu');
      return data;
    } finally { if (timer) clearTimeout(timer); }
  }

  // Strona ścieżki rejestruje swój zapis (stan jest w pamięci app.js): get(), set(stan), beforeSync().
  const providers = {};
  const listeners = [];
  const register = (storeKey, p) => { providers[storeKey] = p; };
  const onChange = (fn) => { listeners.push(fn); };
  const notify = () => listeners.forEach((fn) => { try { fn(); } catch (e) { console.error(e); } });
  function getLocal(key) { const p = providers[key]; return p ? p.get() : readJSON(key); }
  function setLocal(key, st) { const p = providers[key]; if (p) p.set(st); else store.set(key, JSON.stringify(st)); }

  async function syncCode(script, code, tracks, leaving) {
    const c = cfg();
    const sent = c.sent[code] || {};
    const local = {};
    const upload = {};
    const hashes = {};
    for (const t of tracks) {
      const p = providers[t.storeKey];
      if (p && p.beforeSync) p.beforeSync();
      const st = getLocal(t.storeKey);
      if (!isObj(st)) continue;
      local[t.storeKey] = st;
      const h = hash(JSON.stringify(st));
      if (sent[t.storeKey] !== h) { upload[t.storeKey] = st; hashes[t.storeKey] = h; }
    }
    const since = (c.since || {})[code] || {};
    const keys = tracks.map((t) => t.storeKey); // skrypt usuwa u siebie klasy przestawione na „tylko to urządzenie”
    const res = await call(script, { a: 'sync', v: 1, k: code, d: DEV, since, tracks: upload, keys }, leaving);
    const merged = {};
    const seen = {};
    for (const dev in res.devices || {}) {
      const blob = res.devices[dev] || {};
      for (const key in blob.tracks || {}) {
        if (!tracks.some((t) => t.storeKey === key)) continue;
        merged[key] = mergeState(merged[key] || local[key] || {}, blob.tracks[key]);
      }
      seen[dev] = blob.ts || 0;
    }
    let changed = false;
    for (const key in merged) {
      if (JSON.stringify(merged[key]) !== JSON.stringify(local[key] || null)) { setLocal(key, merged[key]); changed = true; }
    }
    updateCfg((x) => {
      x.since[code] = { ...((x.since || {})[code] || {}), ...seen };
      x.sent[code] = { ...((x.sent || {})[code] || {}), ...hashes };
      if (x.profiles[code]) { if (res.name) x.profiles[code].name = res.name; x.profiles[code].ok = Date.now(); x.profiles[code].err = ''; }
    });
    return changed;
  }

  let running = null;
  let again = false;
  let timer = null;
  async function syncNow(opts = {}) {
    if (running) { again = true; return running; }
    const c = cfg();
    if (!connected(c)) return false;
    running = (async () => {
      const byCode = {};
      for (const t of TRACKS) {
        const code = codeOf(t.id, c);
        if (code) (byCode[code] || (byCode[code] = [])).push(t);
      }
      let changed = false;
      for (const code in byCode) {
        try {
          if (await syncCode(c.script, code, byCode[code], opts.leaving)) changed = true;
        } catch (e) {
          updateCfg((x) => { if (x.profiles[code]) { x.profiles[code].err = String(e.message || e); x.profiles[code].errAt = Date.now(); } });
        }
      }
      return changed;
    })();
    let changed = false;
    try { changed = await running; } finally {
      running = null;
      notify();
      // stan połączony z innym urządzeniem wysyłamy z powrotem (żeby pozostałe urządzenia też go dostały)
      if (again || changed) { again = false; schedule(changed ? 15000 : 3000); }
    }
    return changed;
  }
  function schedule(ms) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { timer = null; syncNow(); }, ms);
  }
  // zmiana w postępie: wyślij najpóźniej za minutę (kolejne zmiany w tym czasie nie przesuwają wysyłki)
  function touch() { if (!timer && connected()) schedule(60000); }

  async function connect(script, code, ask) {
    if (!SCRIPT_RE.test(script || '') || !CODE_RE.test(code || '')) throw new Error('link połączenia jest niepełny – skopiuj go jeszcze raz w całości');
    const res = await call(script, { a: 'hello', v: 1, k: code, d: DEV });
    const name = res.name || 'uczeń';
    if (ask && !(await askPanel(name))) return null;
    const assigned = [];
    updateCfg((c) => {
      if (c.script && c.script !== script) Object.assign(c, emptyCfg()); // inny arkusz rodzica – zaczynamy od nowa
      c.script = script;
      c.profiles[code] = { ...(c.profiles[code] || {}), name, added: Date.now() };
      for (const t of TRACKS) {
        if (!c.tracks[t.id] || !c.profiles[c.tracks[t.id]]) c.tracks[t.id] = code;
        if (c.tracks[t.id] === code) assigned.push(t.name);
      }
    });
    notify();
    syncNow();
    return { name, assigned };
  }
  // Link połączenia (cały adres albo sam fragment ?polacz=…&skrypt=…) → { script, code }
  function parseLink(text) {
    const s = String(text || '').trim();
    const code = (s.match(/[?&]polacz=([A-Za-z0-9]+)/) || [])[1];
    const script = (s.match(/[?&]skrypt=([\w-]+)/) || [])[1];
    return code || script ? { code, script } : null;
  }
  function disconnect(code) {
    updateCfg((c) => {
      delete c.profiles[code];
      delete c.since[code];
      delete c.sent[code];
      for (const t in c.tracks) if (c.tracks[t] === code) delete c.tracks[t];
      if (!Object.keys(c.profiles).length) Object.assign(c, emptyCfg());
    });
    notify();
  }
  function assign(trackId, code) {
    updateCfg((c) => {
      if (code && c.profiles[code]) c.tracks[trackId] = code; else delete c.tracks[trackId];
      // nowe przypisanie: wyślij cały stan ścieżki od nowa
      for (const k in c.sent) {
        const t = TRACKS.find((x) => x.id === trackId);
        if (t) delete c.sent[k][t.storeKey];
      }
    });
    notify();
    syncNow();
  }

  // ---------- Kopia zapasowa (plik) ----------
  function exportAll() {
    const tracks = {};
    for (const t of TRACKS) { const st = getLocal(t.storeKey); if (isObj(st)) tracks[t.storeKey] = st; }
    return { app: 'pomoc-w-szkole', v: 1, at: new Date().toISOString(), tracks };
  }
  // Import łączy kopię z obecnym zapisem (niczego nie usuwa). Zwraca liczbę ścieżek.
  function importAll(data) {
    if (!isObj(data) || data.app !== 'pomoc-w-szkole' || !isObj(data.tracks)) throw new Error('to nie jest plik kopii postępu z tej aplikacji');
    let n = 0;
    for (const t of TRACKS) {
      const st = data.tracks[t.storeKey];
      if (!isObj(st)) continue;
      setLocal(t.storeKey, mergeState(getLocal(t.storeKey) || {}, st));
      n++;
    }
    touch();
    return n;
  }

  // ---------- Na stronie: link połączenia, stopka, automatyczna synchronizacja ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Pytanie o połączenie na stronie, nie przez confirm() – wbudowane przeglądarki komunikatorów
  // (Messenger, Gmail itp.) potrafią po cichu blokować okna dialogowe.
  function askPanel(name) {
    return new Promise((resolve) => {
      if (typeof document === 'undefined' || !document.body) { resolve(true); return; }
      document.querySelectorAll('.toast').forEach((x) => x.remove());
      const el = document.createElement('div');
      el.className = 'toast ask';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-label', 'Połączenie z chmurą rodzica');
      el.innerHTML = `<p><b>☁️ Połączyć to urządzenie z profilem „${esc(name)}”?</b><br>
        Postęp nauki z tego urządzenia będzie się zapisywał w arkuszu Google rodzica i łączył z postępem z innych połączonych urządzeń.</p>
        <div class="row"><button class="btn primary" data-a="1">Połącz</button><button class="btn" data-a="0">Nie teraz</button></div>`;
      el.querySelectorAll('button').forEach((b) => (b.onclick = () => { el.remove(); resolve(b.dataset.a === '1'); }));
      document.body.appendChild(el);
      el.querySelector('button').focus();
    });
  }
  function toast(text) {
    if (typeof document === 'undefined' || !document.body) return;
    document.querySelectorAll('.toast:not(.ask)').forEach((x) => x.remove());
    const el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 7000);
  }
  function footer() {
    const f = document.querySelector('.foot');
    if (!f) return;
    if (!f.dataset.text) f.dataset.text = f.textContent.trim();
    const c = cfg();
    const track = document.body.dataset.track;
    const code = track ? codeOf(track, c) : Object.keys(c.profiles)[0];
    f.textContent = code && c.script
      ? `☁️ Postęp zapisuje się na tym urządzeniu i w chmurze rodzica (profil: ${(c.profiles[code] || {}).name || 'uczeń'}). Treści warto skonsultować z nauczycielem.`
      : f.dataset.text;
  }
  async function linkFromAddress() {
    const q = new URLSearchParams(location.search);
    if (!q.has('polacz') && !q.has('skrypt')) return;
    const code = q.get('polacz');
    const script = q.get('skrypt');
    q.delete('polacz');
    q.delete('skrypt');
    const rest = q.toString();
    try { history.replaceState(null, '', location.pathname + (rest ? `?${rest}` : '') + location.hash); } catch (e) { /* file:// */ }
    toast('☁️ Łączę z chmurą rodzica…');
    try {
      const r = await connect(script, code, true);
      if (!r) toast('Nie połączono. Link możesz otworzyć jeszcze raz albo wkleić go na stronie „☁️ Synchronizacja”.');
      if (r) toast(r.assigned.length ? `☁️ Połączono z profilem „${r.name}”. Postęp będzie się łączył z innymi urządzeniami.` : `☁️ Połączono z profilem „${r.name}”. Wybierz jego ścieżki na stronie „Synchronizacja”.`);
    } catch (e) { toast(`Nie udało się połączyć: ${e.message}`); }
  }
  if (typeof document !== 'undefined' && typeof location !== 'undefined') {
    onChange(footer);
    const start = () => {
      footer();
      linkFromAddress();
      setTimeout(() => syncNow(), 1500);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
    setInterval(() => { if (document.visibilityState === 'visible') syncNow(); }, 5 * 60000);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') syncNow({ leaving: true }); });
    window.addEventListener('online', () => syncNow());
    // zmiana zapisu w innej karcie tej samej przeglądarki
    window.addEventListener('storage', (e) => { if (e.key === CLOUD_KEY) footer(); });
  }

  window.POSTEP = {
    DEV, dayKey, parseDay, addDays, daysBetween, dateLong, dateShort, plural, minutes, hash,
    mergeState, addLog, dailyTotals, prune, valueAt, forecast, forecastText,
    exportAll, importAll, toast,
    cloud: { cfg, connected, codeOf, connect, disconnect, assign, parseLink, syncNow, touch, register, onChange, scriptUrl },
  };
})();
