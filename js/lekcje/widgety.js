/* Interaktywne grafiki do lekcji.
 * Użycie w lekcji: { widget: { type: 'pitagoras', a: 3, b: 4 } }
 * Każdy widżet to funkcja (element, parametry) => void.
 */
window.WIDGETS = (() => {
  const fmt = (x, d = 2) => {
    const r = Math.round(x * 10 ** d) / 10 ** d;
    return String(r).replace('.', ',');
  };
  const slider = (id, label, min, max, val, step = 1) =>
    `<label>${label} <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"> <b id="${id}-v">${val}</b></label>`;

  // --- Twierdzenie Pitagorasa: kwadraty zbudowane na bokach trójkąta ---
  function pitagoras(el, p) {
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls">${slider('pa', 'a =', 1, 12, p.a || 3)}${slider('pb', 'b =', 1, 12, p.b || 4)}</div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    function draw() {
      const a = +el.querySelector('#pa').value;
      const b = +el.querySelector('#pb').value;
      el.querySelector('#pa-v').textContent = a;
      el.querySelector('#pb-v').textContent = b;
      const c2 = a * a + b * b;
      const c = Math.sqrt(c2);
      // współrzędne matematyczne (y w górę): kąt prosty w (0,0), B=(a,0), C=(0,b)
      const P = {
        O: [0, 0], B: [a, 0], C: [0, b],
        A1: [0, -a], A2: [a, -a],           // kwadrat na boku a (pod spodem)
        B1: [-b, 0], B2: [-b, b],           // kwadrat na boku b (po lewej)
        H1: [a + b, a], H2: [b, a + b],     // kwadrat na przeciwprostokątnej
      };
      const xs = Object.values(P).map((q) => q[0]);
      const ys = Object.values(P).map((q) => q[1]);
      const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
      const W = 360, H = 300, pad = 18;
      const k = Math.min((W - 2 * pad) / (maxX - minX), (H - 2 * pad) / (maxY - minY));
      const T = ([x, y]) => [pad + (x - minX) * k, H - pad - (y - minY) * k];
      const pts = (...q) => q.map((v) => T(v).join(',')).join(' ');
      const mid = (...q) => T([q.reduce((s, v) => s + v[0], 0) / q.length, q.reduce((s, v) => s + v[1], 0) / q.length]);
      const [ax, ay] = mid(P.O, P.B, P.A2, P.A1);
      const [bx, by] = mid(P.O, P.C, P.B2, P.B1);
      const [hx, hy] = mid(P.B, P.C, P.H2, P.H1);
      const rs = Math.min(14, k * 0.6);
      const [ox, oy] = T(P.O);
      box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Kwadraty na bokach trójkąta prostokątnego">
        <polygon class="f1 s1 sw" points="${pts(P.O, P.B, P.A2, P.A1)}"/>
        <polygon class="f3 s3 sw" points="${pts(P.O, P.C, P.B2, P.B1)}"/>
        <polygon class="f2 s2 sw" points="${pts(P.B, P.C, P.H2, P.H1)}"/>
        <polygon class="ln sw" points="${pts(P.O, P.B, P.C)}"/>
        <rect class="ln-thin" x="${ox}" y="${oy - rs}" width="${rs}" height="${rs}"/>
        <text class="tx-b t1" x="${ax}" y="${ay + 6}" text-anchor="middle">a² = ${a * a}</text>
        <text class="tx-b t3" x="${bx}" y="${by + 6}" text-anchor="middle">b² = ${b * b}</text>
        <text class="tx-b t2" x="${hx}" y="${hy + 6}" text-anchor="middle">c² = ${c2}</text>
      </svg>`;
      const exact = Number.isInteger(c) ? `${c}` : `√${c2} ≈ ${fmt(c)}`;
      out.innerHTML = `${a}² + ${b}² = ${a * a} + ${b * b} = ${c2} → c = ${exact}`;
    }
    el.querySelectorAll('input').forEach((i) => (i.oninput = draw));
    draw();
  }

  // --- Procenty: siatka 10 × 10 ---
  function procent(el, p) {
    const of = p.of || 200;
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls">${slider('pp', 'p =', 0, 100, p.p != null ? p.p : 25)} %</div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    function draw() {
      const v = +el.querySelector('#pp').value;
      el.querySelector('#pp-v').textContent = v;
      let cells = '';
      for (let n = 0; n < 100; n++) {
        const x = 10 + (n % 10) * 26, y = 10 + Math.floor(n / 10) * 26;
        cells += `<rect x="${x}" y="${y}" width="22" height="22" rx="4" class="${n < v ? 'f2 s2' : 'f1'}" ${n < v ? 'stroke-width="1.5"' : ''}/>`;
      }
      box.innerHTML = `<svg viewBox="0 0 270 270" role="img" aria-label="Siatka 100 kratek">${cells}</svg>`;
      out.innerHTML = `${v} kratek ze 100 = ${v}% · ${v}% z ${of} = ${v}/100 · ${of} = <span style="color:var(--c2s)">${fmt((v / 100) * of)}</span>`;
    }
    el.querySelector('input').oninput = draw;
    draw();
  }

  // --- Rzut kostką: częstość a prawdopodobieństwo ---
  function kostka(el) {
    const counts = [0, 0, 0, 0, 0, 0];
    let total = 0;
    let last = null;
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls"><button class="btn" id="r1">🎲 Rzuć 1 raz</button><button class="btn" id="r100">Rzuć 100 razy</button><button class="btn" id="r0">Wyzeruj</button></div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    const pip = { 1: [[1, 1]], 2: [[0, 0], [2, 2]], 3: [[0, 0], [1, 1], [2, 2]], 4: [[0, 0], [2, 0], [0, 2], [2, 2]], 5: [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]], 6: [[0, 0], [2, 0], [0, 1], [2, 1], [0, 2], [2, 2]] };
    function draw() {
      const max = Math.max(1, ...counts);
      const bars = counts.map((c, i) => {
        const h = (c / max) * 120;
        const x = 30 + i * 52;
        return `<rect x="${x}" y="${150 - h}" width="36" height="${h}" rx="4" class="f1 s1" stroke-width="1.5"/>
          <text class="tx" x="${x + 18}" y="172" text-anchor="middle">${i + 1}</text>
          <text class="tx-s" x="${x + 18}" y="${145 - h}" text-anchor="middle">${c}</text>`;
      }).join('');
      const die = last ? `<rect x="350" y="40" width="70" height="70" rx="12" class="bg ln"/>${pip[last].map(([cx, cy]) => `<circle cx="${362 + cx * 23}" cy="${52 + cy * 23}" r="6" class="t2"/>`).join('')}` : '';
      box.innerHTML = `<svg viewBox="0 0 440 185" role="img" aria-label="Wykres wyników rzutów kostką">
        <line class="ln-thin" x1="20" y1="150" x2="340" y2="150"/>${bars}${die}</svg>`;
      out.innerHTML = total
        ? `Rzutów: ${total}. Szóstka wypadła ${counts[5]} razy, czyli w ${fmt((counts[5] / total) * 100, 1)}% rzutów. Teoretycznie: 1/6 ≈ 16,7%.`
        : 'Rzucaj i patrz, jak wyrównują się słupki.';
    }
    const roll = (n) => {
      for (let i = 0; i < n; i++) { last = 1 + Math.floor(Math.random() * 6); counts[last - 1]++; total++; }
      draw();
    };
    el.querySelector('#r1').onclick = () => roll(1);
    el.querySelector('#r100').onclick = () => roll(100);
    el.querySelector('#r0').onclick = () => { counts.fill(0); total = 0; last = null; draw(); };
    draw();
  }

  // --- Koło: promień, obwód, pole ---
  function kolo(el, p) {
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls">${slider('kr', 'r =', 1, 10, p.r || 3)}</div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    function draw() {
      const r = +el.querySelector('#kr').value;
      el.querySelector('#kr-v').textContent = r;
      const R = 12 * r;
      box.innerHTML = `<svg viewBox="0 0 300 260" role="img" aria-label="Koło o promieniu r">
        <circle cx="150" cy="130" r="${R}" class="f1 s1 sw"/>
        <line x1="150" y1="130" x2="${150 + R}" y2="130" class="ln s2 sw"/>
        <circle cx="150" cy="130" r="3" class="t2"/>
        <text class="tx-b t2" x="${150 + R / 2}" y="122" text-anchor="middle">r</text>
      </svg>`;
      out.innerHTML = `Obwód: 2πr = 2 · π · ${r} = ${2 * r}π ≈ ${fmt(2 * Math.PI * r)} · Pole: πr² = π · ${r}² = ${r * r}π ≈ ${fmt(Math.PI * r * r)}`;
    }
    el.querySelector('input').oninput = draw;
    draw();
  }

  // ===================== Widżety dla klasy 3 =====================

  // --- Zegar: wskazówki i zegar elektroniczny (24 h) ---
  function zegar(el, p) {
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls">${slider('zh', 'godzina', 0, 23, p.h != null ? p.h : 3)}${slider('zm', 'minuty', 0, 55, p.m || 0, 5)}</div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    const two = (n) => String(n).padStart(2, '0');
    function draw() {
      const h = +el.querySelector('#zh').value;
      const m = +el.querySelector('#zm').value;
      el.querySelector('#zh-v').textContent = h;
      el.querySelector('#zm-v').textContent = two(m);
      const cx = 110, cy = 110, R = 92;
      const pt = (deg, r) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)].map((v) => Math.round(v * 10) / 10);
      let ticks = '';
      for (let k = 0; k < 60; k++) {
        const [x1, y1] = pt(k * 6, R - (k % 5 ? 5 : 10));
        const [x2, y2] = pt(k * 6, R);
        ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${k % 5 ? 'ln-thin' : 'ln'}"/>`;
      }
      let nums = '';
      for (let k = 1; k <= 12; k++) { const [x, y] = pt(k * 30, R - 24); nums += `<text x="${x}" y="${y + 6}" class="tx-b" text-anchor="middle">${k}</text>`; }
      const [hx, hy] = pt(((h % 12) + m / 60) * 30, 48);
      const [mx, my] = pt(m * 6, 74);
      const h12 = h % 12 === 0 ? 12 : h % 12;
      box.innerHTML = `<svg viewBox="0 0 400 220" role="img" aria-label="Zegar ze wskazówkami i zegar elektroniczny pokazujące ${h}:${two(m)}">
        <circle cx="${cx}" cy="${cy}" r="${R}" class="bg ln sw"/>${ticks}${nums}
        <line x1="${cx}" y1="${cy}" x2="${hx}" y2="${hy}" class="ln s2" stroke-width="7" stroke-linecap="round"/>
        <line x1="${cx}" y1="${cy}" x2="${mx}" y2="${my}" class="ln s1" stroke-width="4" stroke-linecap="round"/>
        <circle cx="${cx}" cy="${cy}" r="6" class="t5"/>
        <rect x="236" y="70" width="150" height="70" rx="12" class="f4 s4 sw"/>
        <text x="311" y="117" class="tx-b" text-anchor="middle" style="font-size:34px">${h}:${two(m)}</text>
        <text x="311" y="166" class="tx-s" text-anchor="middle">zegar elektroniczny</text>
        <text x="311" y="40" class="tx-s t2" text-anchor="middle">krótka – godziny</text>
        <text x="311" y="58" class="tx-s t1" text-anchor="middle">długa – minuty</text>
      </svg>`;
      out.innerHTML = `Na tarczy: <b>${h12}:${two(m)}</b> · zegar elektroniczny: <b>${h}:${two(m)}</b>${m ? ` · do pełnej godziny brakuje ${60 - m} minut` : ' · pełna godzina'}`;
    }
    el.querySelectorAll('input').forEach((i) => (i.oninput = draw));
    draw();
  }

  // --- Tabliczka mnożenia: a rzędów po b kropek ---
  function tabliczka(el, p) {
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls">${slider('ta', 'rzędy', 1, 10, p.a || 3)}${slider('tb', 'w rzędzie', 1, 10, p.b || 4)}</div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    function draw() {
      const a = +el.querySelector('#ta').value;
      const b = +el.querySelector('#tb').value;
      el.querySelector('#ta-v').textContent = a;
      el.querySelector('#tb-v').textContent = b;
      let dots = '';
      for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) {
        const on = r < a && c < b;
        dots += `<circle cx="${40 + c * 26}" cy="${20 + r * 26}" r="${on ? 10 : 4}" class="${on ? (r % 2 ? 'f2 s2' : 'f1 s1') : 'f5'}" ${on ? 'stroke-width="2"' : ''}/>`;
      }
      box.innerHTML = `<svg viewBox="0 0 320 270" role="img" aria-label="${a} rzędów po ${b} kropek – razem ${a * b}">${dots}</svg>`;
      const sum = a <= 6 ? ` = ${Array(a).fill(b).join(' + ')}` : '';
      out.innerHTML = `${a} × ${b}${sum} = <span style="color:var(--c2s)">${a * b}</span><br><small>Dzielenie: ${a * b} : ${b} = ${a} · ${a * b} : ${a} = ${b}</small>`;
    }
    el.querySelectorAll('input').forEach((i) => (i.oninput = draw));
    draw();
  }

  // --- Monety i banknoty: odliczanie kwoty ---
  const NOMINALY = [ // w groszach
    [1, 'gr'], [2, 'gr'], [5, 'gr'], [10, 'gr'], [20, 'gr'], [50, 'gr'],
    [100, 'zł'], [200, 'zł'], [500, 'zł'], [1000, 'zł', 1], [2000, 'zł', 1], [5000, 'zł', 1], [10000, 'zł', 1], [20000, 'zł', 1], [50000, 'zł', 1],
  ];
  const kwota = (g) => (g >= 100 ? `${Math.floor(g / 100)} zł${g % 100 ? ` ${g % 100} gr` : ''}` : `${g} gr`);
  function monety(el, p) {
    const max = p.max || 5000; // pokazujemy nominały do tej wartości (w groszach)
    const list = NOMINALY.filter(([v]) => v <= max);
    const wallet = [];
    el.innerHTML = `<div class="svgbox"></div>
      ${p.cel ? `<p class="readout">Odlicz: <b>${kwota(p.cel)}</b></p>` : ''}
      <div class="controls coins">${list.map(([v, u, note]) => `<button class="btn${note ? ' note' : ' coin'}" data-v="${v}">${v >= 100 ? v / 100 : v} ${u}</button>`).join('')}</div>
      <div class="controls"><button class="btn" id="mback">↶ Cofnij</button><button class="btn" id="m0">Wyzeruj</button></div>
      <div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout:last-child');
    function draw() {
      let x = 10, y = 10, items = '';
      const shown = wallet.slice(-16);
      shown.forEach((v) => {
        const [, u, note] = NOMINALY.find((n) => n[0] === v);
        const label = `${v >= 100 ? v / 100 : v} ${u}`;
        const w = note ? 92 : 50;
        if (x + w > 390) { x = 10; y += 56; }
        items += note
          ? `<rect x="${x}" y="${y + 4}" width="86" height="42" rx="5" class="f3 s3 sw"/><text x="${x + 43}" y="${y + 31}" class="tx-b" text-anchor="middle">${label}</text>`
          : `<circle cx="${x + 23}" cy="${y + 25}" r="23" class="${u === 'zł' ? 'f4 s4' : 'f2 s2'} sw"/><text x="${x + 23}" y="${y + 30}" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">${label}</text>`;
        x += w;
      });
      const total = wallet.reduce((a, b) => a + b, 0);
      box.innerHTML = `<svg viewBox="0 0 400 ${Math.max(70, y + 62)}" role="img" aria-label="Portfel: ${kwota(total)}">${items || '<text x="200" y="40" class="tx-s" text-anchor="middle">Klikaj monety i banknoty pod spodem</text>'}</svg>`;
      let msg = `Razem: <b>${kwota(total)}</b>${total >= 100 && total % 100 ? ` = ${total} gr` : ''}${wallet.length > shown.length ? ` <small>(widać ostatnie ${shown.length})</small>` : ''}`;
      if (p.cel && total) msg += total === p.cel ? ' · 🎉 Dokładnie tyle!' : total < p.cel ? ` · brakuje ${kwota(p.cel - total)}` : ` · za dużo o ${kwota(total - p.cel)}`;
      out.innerHTML = msg;
    }
    el.querySelectorAll('.coins .btn').forEach((b) => (b.onclick = () => { wallet.push(+b.dataset.v); draw(); }));
    el.querySelector('#mback').onclick = () => { wallet.pop(); draw(); };
    el.querySelector('#m0').onclick = () => { wallet.length = 0; draw(); };
    (p.start || []).forEach((v) => wallet.push(v));
    draw();
  }

  // --- Kalendarz: miesiąc, dni tygodnia, zapis daty ---
  const MIESIACE = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
  const MIESIACA = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  const RZYMSKIE = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const DNI = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
  function kalendarz(el, p) {
    const now = new Date();
    let year = p.rok || now.getFullYear();
    let month = (p.miesiac || now.getMonth() + 1) - 1;
    let picked = p.dzien || null;
    el.innerHTML = `<div class="controls"><button class="btn" id="kprev" aria-label="Poprzedni miesiąc">◀</button><b id="kname"></b><button class="btn" id="knext" aria-label="Następny miesiąc">▶</button></div>
      <div class="svgbox"></div><div class="readout"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    function draw() {
      const days = new Date(year, month + 1, 0).getDate();
      const first = (new Date(year, month, 1).getDay() + 6) % 7; // 0 = poniedziałek
      if (picked > days) picked = days;
      el.querySelector('#kname').textContent = `${MIESIACE[month]} ${year} (${RZYMSKIE[month]})`;
      const head = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'].map((d, k) => `<text x="${30 + k * 50}" y="22" class="tx-b${k === 6 ? ' t2' : ''}" text-anchor="middle">${d}</text>`).join('');
      let cells = '';
      for (let d = 1; d <= days; d++) {
        const n = first + d - 1;
        const x = 8 + (n % 7) * 50, y = 34 + Math.floor(n / 7) * 40;
        cells += `<g class="kday" data-d="${d}" style="cursor:pointer"><rect x="${x}" y="${y}" width="44" height="34" rx="6" class="${d === picked ? 'f4 s4 sw' : n % 7 === 6 ? 'f2' : 'f1'}"/>
          <text x="${x + 22}" y="${y + 23}" class="tx${n % 7 === 6 ? ' t2' : ''}" text-anchor="middle">${d}</text></g>`;
      }
      const rows = Math.ceil((first + days) / 7);
      box.innerHTML = `<svg viewBox="0 0 360 ${40 + rows * 40}" role="img" aria-label="Kalendarz: ${MIESIACE[month]} ${year}">${head}${cells}</svg>`;
      box.querySelectorAll('.kday').forEach((g) => (g.onclick = () => { picked = +g.dataset.d; draw(); }));
      out.innerHTML = picked
        ? `${DNI[(first + picked - 1) % 7]}, <b>${picked} ${MIESIACA[month]} ${year} r.</b> · zapis cyframi: ${picked}.${String(month + 1).padStart(2, '0')}.${year} r. albo ${picked} ${RZYMSKIE[month]} ${year} r. · ${MIESIACE[month]} ma ${days} dni`
        : `${MIESIACE[month]} ma ${days} dni. Kliknij dzień, a zobaczysz, jak zapisać datę.`;
    }
    el.querySelector('#kprev').onclick = () => { month--; if (month < 0) { month = 11; year--; } draw(); };
    el.querySelector('#knext').onclick = () => { month++; if (month > 11) { month = 0; year++; } draw(); };
    draw();
  }

  return { pitagoras, procent, kostka, kolo, zegar, tabliczka, monety, kalendarz };
})();
