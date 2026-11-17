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


  // --- Laboratorium magnesów (ścieżka „Świat”, dział Magnesy): odległość i ułożenie magnesu B; najpierw przewidywanie, potem wynik ---
  // p.d – odległość startowa (kratki 1–6), p.zasieg – do ilu kratek magnesy „działają” w tym przykładzie (domyślnie 3)
  function magnesy(el, p) {
    const zasieg = p.zasieg || 3;
    let flip = false;
    let guess = null;
    const trials = [];
    const NAMES = { p: 'przyciągną się', o: 'odepchną się', n: 'nic – za daleko' };
    el.innerHTML = `<div class="svgbox"></div>
      <div class="controls">${slider('md', 'odległość (kratki):', 1, 6, p.d || 2)}<button class="btn" id="mflip">🔄 Obróć magnes B</button></div>
      <div class="controls" id="mguess"><span>Co się stanie?</span><button class="btn" data-g="p">🤝 przyciągną się</button><button class="btn" data-g="o">↔️ odepchną się</button><button class="btn" data-g="n">😴 nic – za daleko</button></div>
      <div class="readout"></div><div class="mlog"></div>`;
    const box = el.querySelector('.svgbox');
    const out = el.querySelector('.readout');
    const dist = () => +el.querySelector('#md').value;
    const result = (d) => (d > zasieg ? 'n' : flip ? 'o' : 'p');
    function draw() {
      const d = dist();
      el.querySelector('#md-v').textContent = d;
      const bx = 110 + d * 28;
      const right = result(d);
      const left = flip ? ['S', 'N'] : ['N', 'S'];
      const len = 12 + (zasieg + 1 - d) * 6;
      let arrows = '';
      if (guess && right === 'p') arrows = `<path d="M60,30 H${60 + len}" class="ln sw" marker-end="url(#a-wd-mag)"/><path d="M${bx + 45},30 H${bx + 45 - len}" class="ln sw" marker-end="url(#a-wd-mag)"/>`;
      if (guess && right === 'o') arrows = `<path d="M60,30 H${60 - len}" class="ln sw" marker-end="url(#a-wd-mag)"/><path d="M${bx + 45},30 H${bx + 45 + len}" class="ln sw" marker-end="url(#a-wd-mag)"/>`;
      let ticks = '';
      for (let k = 0; k <= 6; k++) ticks += `<line x1="${110 + k * 28}" y1="102" x2="${110 + k * 28}" y2="110" class="ln-thin"/>${k ? `<text x="${110 + k * 28}" y="128" class="tx-s" text-anchor="middle">${k}</text>` : ''}`;
      box.innerHTML = `<svg viewBox="0 0 400 140" role="img" aria-label="Magnes A: biegun N po lewej, S po prawej. Magnes B w odległości ${d} kratek, zwrócony do magnesu A biegunem ${left[0]}.${guess ? ` Wynik: ${NAMES[right]}.` : ''}">
        <defs><marker id="a-wd-mag" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
        <rect x="20" y="50" width="45" height="40" class="f2 s2 sw"/><rect x="65" y="50" width="45" height="40" class="f1 s1 sw"/>
        <rect x="${bx}" y="50" width="45" height="40" class="${left[0] === 'N' ? 'f2 s2' : 'f1 s1'} sw"/><rect x="${bx + 45}" y="50" width="45" height="40" class="${left[1] === 'N' ? 'f2 s2' : 'f1 s1'} sw"/>
        <g class="tx-b" text-anchor="middle"><text x="42" y="77">N</text><text x="87" y="77">S</text><text x="${bx + 22}" y="77">${left[0]}</text><text x="${bx + 67}" y="77">${left[1]}</text></g>
        <g class="tx-s" text-anchor="middle"><text x="65" y="44">A</text><text x="${bx + 45}" y="44">B</text></g>
        <line x1="110" y1="106" x2="278" y2="106" class="ln-thin"/>${ticks}${arrows}
      </svg>`;
    }
    function reset() {
      guess = null;
      el.querySelectorAll('#mguess .btn').forEach((x) => (x.disabled = false));
      out.innerHTML = 'Ustaw magnes B, a potem przewidź: co się stanie?';
      draw();
    }
    function renderLog() {
      const ICON = { p: '🤝', o: '↔️', n: '😴' };
      el.querySelector('.mlog').innerHTML = trials.length ? `<table class="worksheet"><tr><th>Biegun B</th><th>Kratki</th><th>Przewidziałem</th><th>Wynik</th></tr>
        ${trials.slice(-6).map((t) => `<tr><td>${t.pole}</td><td>${t.d}</td><td>${ICON[t.g]}</td><td>${ICON[t.r]}${t.g === t.r ? ' ✅' : ''}</td></tr>`).join('')}</table>
        <p class="muted">🤝 przyciągną się · ↔️ odepchną się · 😴 nic</p>` : '';
    }
    el.querySelector('#md').oninput = reset;
    el.querySelector('#mflip').onclick = () => { flip = !flip; reset(); };
    el.querySelectorAll('#mguess .btn').forEach((b) => (b.onclick = () => {
      if (guess) return; // najpierw przewidywanie, potem wynik – zmień ustawienie, żeby przewidzieć jeszcze raz
      guess = b.dataset.g;
      const d = dist();
      const r = result(d);
      trials.push({ pole: flip ? 'S' : 'N', d, g: guess, r });
      const why = { p: 'Biegun S magnesu A i biegun N magnesu B to różne bieguny – przyciągają się.', o: 'Dwa bieguny S naprzeciw siebie – takie same bieguny się odpychają.', n: 'Za daleko – z tej odległości siła jest już za słaba, żeby magnes B się ruszył. Im dalej, tym słabiej.' }[r];
      out.innerHTML = `${guess === r ? '✅ Dobrze przewidziane!' : '🤔 Wyszło inaczej – to też odkrycie!'} ${why} <span class="muted">Zmień odległość albo obróć magnes B i przewidź jeszcze raz.</span>`;
      el.querySelectorAll('#mguess .btn').forEach((x) => (x.disabled = true));
      draw();
      renderLog();
    }));
    reset();
  }

  // --- Sztywna rama (ścieżka „Świat”, dział Mosty i trójkąty): najpierw przewidywanie, potem wynik ---
  // p.tryb: 'ramka' (domyślnie) – pchnij róg kwadratu, trójkąta albo kwadratu z przekątną (zawiasy w rogach);
  //         'kratownica' – klikaj pręty mostu z 8 węzłów (2 rzędy × 4) i sprawdź, czy rama trzyma kształt.
  // Kratownica: sztywność liczona geometrycznie – jeden wariant: rama swobodna z podporami przegub (lewa) + wózek (prawa),
  // czyli unieruchomione 3 współrzędne; rama jest sztywna, gdy rząd macierzy sztywności = 2·8 − 3 = 13
  // (dla 8 węzłów potrzeba więc co najmniej 13 prętów). Test liniowy (infinitezymalny) – rama „chwiejna” też wychodzi jako niesztywna.
  function rama(el, p) {
    const ICON = { tak: '↔️', nie: '🧱' };
    const logTable = (rows, head) => (rows.length ? `<table class="worksheet"><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr>
      ${rows.slice(-6).map((t) => `<tr><td>${t[0]}</td><td>${ICON[t[1]]}</td><td>${ICON[t[2]]}${t[1] === t[2] ? ' ✅' : ''}</td></tr>`).join('')}</table>
      <p class="muted">↔️ przekrzywi się · 🧱 trzyma kształt</p>` : '');
    const marker = '<defs><marker id="a-wd-rama" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>';

    // ---------- tryb 1: pchnij ramkę ----------
    function ramka() {
      const FR = { kw: '🔲 kwadrat', tr: '🔺 trójkąt', kp: '📐 kwadrat z przekątną' };
      const NAME = { kw: 'kwadrat', tr: 'trójkąt', kp: 'kwadrat z przekątną' };
      let fr = 'kw', guess = null, pushed = false, ang = 90, busy = false;
      const trials = [];
      el.innerHTML = `<div class="rama"><div class="controls rframes">${Object.keys(FR).map((k) => `<button class="btn" data-f="${k}">${FR[k]}</button>`).join('')}</div>
        <div class="svgbox"></div>
        <div class="controls rguess"><span>Zmieni kształt?</span><button class="btn" data-g="tak">↔️ tak, przekrzywi się</button><button class="btn" data-g="nie">🧱 nie, trzyma kształt</button></div>
        <div class="controls"><button class="btn primary rpush" disabled>👉 Pchnij róg w bok</button></div>
        <div class="readout"></div><div class="mlog"></div></div>`;
      const box = el.querySelector('.svgbox');
      const out = el.querySelector('.readout');
      const S = 120, X0 = 120, Y0 = 180;
      // press – przesunięcie strzałki nacisku (ramki sztywne się nie odkształcają: boki zostają tej samej długości)
      function draw(press = 0) {
        const a = (ang * Math.PI) / 180;
        const A = [X0, Y0], B = [X0 + S, Y0];
        let nodes, bars;
        if (fr === 'tr') {
          nodes = [A, B, [X0 + S / 2, Y0 - S * Math.sin(Math.PI / 3)]];
          bars = [[0, 1], [1, 2], [2, 0]];
        } else {
          const D = [X0 + S * Math.cos(a), Y0 - S * Math.sin(a)];
          nodes = [A, B, [D[0] + S, D[1]], D];
          bars = [[0, 1], [1, 2], [2, 3], [3, 0]];
          if (fr === 'kp') bars.push([0, 2]);
        }
        const top = fr === 'tr' ? nodes[2] : nodes[3];
        const angA = fr === 'tr' ? 60 : Math.round(ang);
        const angB = fr === 'tr' ? 60 : 180 - Math.round(ang);
        box.innerHTML = `<svg viewBox="0 0 400 220" role="img" aria-label="Ramka: ${NAME[fr]} z listewek z zawiasami w rogach. Dolny bok jest przytrzymany. Kąt przy lewym dolnym rogu: ${angA} stopni.${pushed ? ' Pchnięto górny róg w bok.' : ''}">
          ${marker}
          <path d="M60,${Y0 + 12} H340" class="ln-thin"/><rect x="${X0 - 6}" y="${Y0 + 5}" width="${S + 12}" height="8" rx="3" class="f4 s4"/>
          <g class="f2 s2 sw">${bars.map(([i, j]) => `<line x1="${nodes[i][0].toFixed(1)}" y1="${nodes[i][1].toFixed(1)}" x2="${nodes[j][0].toFixed(1)}" y2="${nodes[j][1].toFixed(1)}"/>`).join('')}</g>
          <g class="ln">${nodes.map((n) => `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="6" class="bg"/>`).join('')}</g>
          ${guess ? `<path d="M${(top[0] - 70 + press).toFixed(1)},${top[1].toFixed(1)} H${(top[0] - 14 + press).toFixed(1)}" class="ln sw" marker-end="url(#a-wd-rama)"/>` : ''}
          <g class="tx-s"><text x="${fr === 'kp' ? X0 + 26 : X0 + 12}" y="${fr === 'kp' ? Y0 - 6 : Y0 - 10}">${angA}°</text><text x="${X0 + S - 12}" y="${Y0 - 10}" text-anchor="end">${angB}°</text></g>
          <text x="200" y="214" text-anchor="middle" class="tx-s">dolny bok przytrzymany · w rogach zawiasy</text>
        </svg>`;
      }
      function select(k) {
        if (busy) return;
        fr = k; guess = null; pushed = false; ang = 90;
        el.querySelectorAll('.rframes .btn').forEach((b) => b.classList.toggle('on', b.dataset.f === k));
        el.querySelectorAll('.rguess .btn').forEach((b) => (b.disabled = false));
        el.querySelector('.rpush').disabled = true;
        out.innerHTML = 'Przewidź: czy ta ramka zmieni kształt, gdy pchniesz górny róg w bok?';
        draw();
      }
      function finish() {
        busy = false;
        const r = fr === 'kw' ? 'tak' : 'nie';
        trials.push([NAME[fr], guess, r]);
        const why = {
          kw: 'Kwadrat przekrzywił się w romb: boki mają tę samą długość, ale kąty zmieniły się z 90° na 60° i 120°. Cztery boki nie wyznaczają kształtu.',
          tr: 'Trójkąt nie zmienił kształtu: trzy boki wyznaczają jego kształt, więc kąty nie mogą się zmienić.',
          kp: 'Przekątna podzieliła kwadrat na dwa trójkąty – ramka trzyma kształt.',
        }[fr];
        out.innerHTML = `${guess === r ? '✅ Dobrze przewidziane!' : '🤔 Wyszło inaczej – to też odkrycie!'} ${why} <span class="muted">Wybierz inną ramkę i przewidź jeszcze raz.</span>`;
        el.querySelector('.mlog').innerHTML = logTable(trials, ['Ramka', 'Przewidziałem', 'Wynik']);
        draw();
      }
      function push() {
        if (!guess || pushed || busy) return;
        pushed = true; busy = true;
        el.querySelector('.rpush').disabled = true;
        const t0 = performance.now();
        const step = (now) => {
          if (!el.isConnected) return;
          const t = Math.min(1, (now - t0) / 900);
          if (fr === 'kw') { ang = 90 - 30 * t; draw(); } else draw(t < 1 ? 8 * Math.abs(Math.sin(t * Math.PI * 3)) : 0);
          if (t < 1) requestAnimationFrame(step); else finish();
        };
        requestAnimationFrame(step);
      }
      el.querySelectorAll('.rframes .btn').forEach((b) => (b.onclick = () => select(b.dataset.f)));
      el.querySelectorAll('.rguess .btn').forEach((b) => (b.onclick = () => {
        if (guess || busy) return; // najpierw przewidywanie, potem pchnięcie – zmień ramkę, żeby przewidzieć jeszcze raz
        guess = b.dataset.g;
        el.querySelectorAll('.rguess .btn').forEach((x) => (x.disabled = true));
        el.querySelector('.rpush').disabled = false;
        out.innerHTML = `Przewidziałeś: ${guess === 'tak' ? 'przekrzywi się' : 'trzyma kształt'}. Teraz pchnij róg!`;
        draw();
      }));
      el.querySelector('.rpush').onclick = push;
      select('kw');
    }

    // ---------- tryb 2: zbuduj kratownicę ----------
    function kratownica() {
      const id = (r, c) => r * 4 + c;
      const P = []; // współrzędne węzłów w kratkach: kolumna c = 0–3, rząd r = 0 (góra) / 1 (dół)
      for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) P.push([c, r]);
      const CAND = [];
      for (let c = 0; c < 3; c++) { CAND.push([id(0, c), id(0, c + 1)]); CAND.push([id(1, c), id(1, c + 1)]); } // pasy górny i dolny
      for (let c = 0; c < 4; c++) CAND.push([id(0, c), id(1, c)]); // słupki
      for (let c = 0; c < 3; c++) { CAND.push([id(0, c), id(1, c + 1)]); CAND.push([id(1, c), id(0, c + 1)]); } // przekątne
      const NEED = 2 * P.length - 3; // 13
      // nazwa pręta dla czytnika ekranu: k 0–5 pasy, 6–9 słupki, 10–15 przekątne (pola od lewej 1–3)
      const BAR = (k) => (k < 6 ? `${k % 2 ? 'dolny' : 'górny'} pas w polu ${Math.floor(k / 2) + 1}`
        : k < 10 ? `słupek ${k - 5} od lewej`
          : `przekątną w polu ${Math.floor((k - 10) / 2) + 1} (${k % 2 ? 'z lewego dołu w prawą górę' : 'z lewej góry w prawy dół'})`);
      const FIXED = [2 * id(1, 0), 2 * id(1, 0) + 1, 2 * id(1, 3) + 1]; // przegub: x, y lewego dolnego węzła; wózek: y prawego dolnego
      const FREE = [...Array(2 * P.length).keys()].filter((k) => !FIXED.includes(k));
      let on = CAND.map((_, i) => i < 10); // na start: pasy i słupki, bez przekątnych
      let guess = null, flex = null, anim = 0;
      const trials = [];
      el.innerHTML = `<div class="rama"><div class="svgbox"></div>
        <div class="controls"><b class="rcount"></b><button class="btn rreset">↺ Od nowa</button></div>
        <div class="controls rguess"><span>Obciążasz most. Co się stanie?</span><button class="btn" data-g="nie">🧱 trzyma kształt</button><button class="btn" data-g="tak">↔️ przekrzywi się</button></div>
        <div class="readout"></div><div class="mlog"></div></div>`;
      const box = el.querySelector('.svgbox');
      const out = el.querySelector('.readout');
      // eliminacja Gaussa–Jordana: rząd i postać schodkowa zredukowana (do wektora ruchu)
      function solve() {
        const rows = [];
        CAND.forEach(([i, j], k) => {
          if (!on[k]) return;
          const row = new Array(2 * P.length).fill(0);
          const dx = P[i][0] - P[j][0], dy = P[i][1] - P[j][1];
          row[2 * i] = dx; row[2 * i + 1] = dy; row[2 * j] = -dx; row[2 * j + 1] = -dy;
          rows.push(FREE.map((f) => row[f]));
        });
        const M = rows, n = FREE.length, piv = [];
        let rk = 0;
        for (let col = 0; col < n && rk < M.length; col++) {
          let best = rk;
          for (let i = rk + 1; i < M.length; i++) if (Math.abs(M[i][col]) > Math.abs(M[best][col])) best = i;
          if (Math.abs(M[best][col]) < 1e-9) continue;
          [M[rk], M[best]] = [M[best], M[rk]];
          const d = M[rk][col];
          for (let j = 0; j < n; j++) M[rk][j] /= d;
          for (let i = 0; i < M.length; i++) {
            if (i === rk) continue;
            const f = M[i][col];
            if (f) for (let j = 0; j < n; j++) M[i][j] -= f * M[rk][j];
          }
          piv.push(col); rk++;
        }
        if (rk === n) return { rigid: true, v: null };
        const free = [...Array(n).keys()].find((c) => !piv.includes(c));
        const vr = new Array(n).fill(0);
        vr[free] = 1;
        piv.forEach((c, k) => { vr[c] = -M[k][free]; });
        const v = new Array(2 * P.length).fill(0);
        FREE.forEach((f, k) => { v[f] = vr[k]; });
        let mx = 0;
        for (let k = 0; k < P.length; k++) mx = Math.max(mx, Math.hypot(v[2 * k], v[2 * k + 1]));
        return { rigid: false, v: v.map((x) => x / mx) };
      }
      const X = (k, s) => 50 + 100 * (P[k][0] + (flex ? s * flex[2 * k] : 0));
      const Y = (k, s) => 50 + 100 * (P[k][1] + (flex ? s * flex[2 * k + 1] : 0));
      function draw(s = 0) {
        const n = on.filter(Boolean).length;
        const diag = [0, 1, 2].map((c) => (on[10 + 2 * c] || on[11 + 2 * c] ? 'jest' : 'brak')).join(', ');
        box.innerHTML = `<svg viewBox="0 0 400 220" role="img" aria-label="Most-kratownica: 8 węzłów w dwóch rzędach po 4, trzy kwadratowe pola, ${n} prętów. Przekątne w polach od lewej: ${diag}. Lewa podpora – przegub, prawa – wózek.">
          <path d="M20,192 H380" class="ln-thin"/>
          <path d="M50,150 L36,176 H64 Z" class="f4 s4"/><path d="M350,150 L336,172 H364 Z" class="f4 s4"/>
          <g class="ln"><circle cx="342" cy="182" r="5" class="bg"/><circle cx="358" cy="182" r="5" class="bg"/></g>
          ${CAND.map(([i, j], k) => (on[k] ? '' : `<line x1="${X(i, 0)}" y1="${Y(i, 0)}" x2="${X(j, 0)}" y2="${Y(j, 0)}" class="ln-thin dash"/>`)).join('')}
          <g class="s1 sw">${CAND.map(([i, j], k) => (on[k] ? `<line x1="${X(i, s).toFixed(1)}" y1="${Y(i, s).toFixed(1)}" x2="${X(j, s).toFixed(1)}" y2="${Y(j, s).toFixed(1)}"/>` : '')).join('')}</g>
          <g class="ln">${P.map((_, k) => `<circle cx="${X(k, s).toFixed(1)}" cy="${Y(k, s).toFixed(1)}" r="6" class="bg"/>`).join('')}</g>
          ${CAND.map(([i, j], k) => `<line x1="${X(i, 0)}" y1="${Y(i, 0)}" x2="${X(j, 0)}" y2="${Y(j, 0)}" class="rama-hit" data-k="${k}" tabindex="0" role="button" aria-label="${on[k] ? 'zabierz' : 'dodaj'} ${BAR(k)}"/>`).join('')}
          <text x="200" y="214" text-anchor="middle" class="tx-s">kliknij pręt: dodaj albo zabierz</text>
        </svg>`;
        el.querySelector('.rcount').textContent = `Prętów: ${n}`;
        box.querySelectorAll('.rama-hit').forEach((h) => {
          h.onclick = () => toggle(+h.dataset.k);
          h.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(+h.dataset.k); } };
        });
      }
      function reset(msg) {
        guess = null; flex = null; anim++;
        el.querySelectorAll('.rguess .btn').forEach((x) => (x.disabled = false));
        out.innerHTML = msg || 'Kliknij pręt, żeby go dodać albo zabrać. Potem przewidź, co się stanie po obciążeniu.';
        draw();
      }
      function toggle(k) {
        on[k] = !on[k];
        reset();
        const h = box.querySelector(`.rama-hit[data-k="${k}"]`);
        if (h) h.focus();
      }
      function shake() {
        const my = ++anim, t0 = performance.now();
        const step = (now) => {
          if (!el.isConnected || my !== anim) return;
          const t = (now - t0) / 1000;
          draw(t < 3 ? 0.22 * Math.sin(t * 2 * Math.PI * 1.2) : 0);
          if (t < 3) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
      el.querySelector('.rreset').onclick = () => { on = CAND.map((_, i) => i < 10); reset(); };
      el.querySelectorAll('.rguess .btn').forEach((b) => (b.onclick = () => {
        if (guess) return; // najpierw przewidywanie, potem wynik – zmień pręty, żeby przewidzieć jeszcze raz
        guess = b.dataset.g;
        el.querySelectorAll('.rguess .btn').forEach((x) => (x.disabled = true));
        const n = on.filter(Boolean).length;
        const res = solve();
        const r = res.rigid ? 'nie' : 'tak';
        trials.push([n, guess, r]);
        let why;
        if (res.rigid) why = n === NEED ? `Rama trzyma kształt. Prętów: ${n} – mniej się nie da: 8 węzłów potrzebuje co najmniej ${NEED} prętów.` : `Rama trzyma kształt. Prętów: ${n}. A może da się zabrać jeden pręt i dalej będzie trzymać?`;
        else {
          const noDiag = [0, 1, 2].filter((c) => !on[10 + 2 * c] && !on[11 + 2 * c]).map((c) => c + 1);
          const tip = noDiag.length
            ? `Dodaj przekątną ${noDiag.length > 1 ? `w polach ${noDiag.slice(0, -1).join(', ')} i ${noDiag[noDiag.length - 1]}` : `w polu ${noDiag[0]}`} (licząc od lewej) – pole bez przekątnej nie jest podzielone na trójkąty.`
            : 'Każde pole ma przekątną, ale brakuje pręta na brzegu pola (pasa albo słupka) – zobacz, który węzeł się rusza, i dołóż tam pręt.';
          why = `Rama się przekrzywia – zobacz, która część się rusza.${n < NEED ? ` Za mało prętów: 8 węzłów potrzebuje co najmniej ${NEED}.` : ''} ${tip}`;
        }
        out.innerHTML = `${guess === r ? '✅ Dobrze przewidziane!' : '🤔 Wyszło inaczej – to też odkrycie!'} ${why} <span class="muted">Zmień pręty i przewidź jeszcze raz.</span>`;
        el.querySelector('.mlog').innerHTML = logTable(trials, ['Prętów', 'Przewidziałem', 'Wynik']);
        if (res.v) { flex = res.v; shake(); } else draw();
      }));
      reset();
    }

    if (p.tryb === 'kratownica') kratownica(); else ramka();
  }

  // --- Sterownik na próbę (ścieżka „Świat”, dział Czujniki i sterowanie): najpierw przewidywanie, potem wynik ---
  // p.tryb: 'czas' – „na czas czy na pomiar?” (robot ma stanąć 10 cm przed ścianą: „jedź 3 s” a „jedź, aż czujnik ≤ 10 cm”; MEXT),
  //         'prog' – próg czujnika i robot na linii (odczyty 90 nad białym i 10 nad czarnym – nasz przykład; metoda średniej – ISB Bawaria).
  // p.prog – próg startowy w trybie 'prog' (domyślnie 70). Liczby (prędkości, odczyty) to przykład, nie reguła.
  function czujniki(el, p) {
    let tryb = p.tryb === 'prog' ? 'prog' : 'czas';
    const SPEEDS = [[15, '🐢 wolno'], [20, '🚶 średnio'], [25, '🐇 szybko']];
    const WALL = 70; // cm – ściana
    const BIALY = 90, CZARNY = 10; // odczyty czujnika linii (nasz przykład)
    const s = { v: 1, prog: 'A', guess: null, prog2: p.prog != null ? p.prog : 70, smooth: false, zm: { b: false, c: false } };
    const logs = { czas: [], prog: [] };
    const GUESS = {
      czas: [['ok', '🎯 ok. 10 cm przed ścianą'], ['hit', '💥 uderzy w ścianę'], ['far', '📏 stanie za wcześnie (daleko od ściany)']],
      prog: [['linia', '〰️ pojedzie wzdłuż linii'], ['kolo', '🔄 będzie kręcić się w kółko']],
    };
    const ICON = { ok: '🎯', hit: '💥', far: '📏', linia: '〰️', kolo: '🔄' };
    const num = (x) => String(Math.round(x * 10) / 10).replace('.', ',');
    el.innerHTML = `<div class="controls" role="group" aria-label="Wybierz doświadczenie"><button class="btn" data-t="czas">⏱️ Na czas czy na pomiar?</button><button class="btn" data-t="prog">〰️ Próg i robot na linii</button></div>
      <div class="svgbox"></div><div class="czset"></div>
      <div class="controls czguess"></div>
      <div class="readout" aria-live="polite"></div><div class="mlog"></div>`;
    const box = el.querySelector('.svgbox');
    const set = el.querySelector('.czset');
    const gbox = el.querySelector('.czguess');
    const out = el.querySelector('.readout');
    // tryb „czas”: gdzie stanie robot (cm od startu) i jak to ocenić
    function wynikCzas() {
      const v = SPEEDS[s.v][0];
      if (s.prog === 'B') return { r: 'ok', pos: WALL - 10 };
      const d = v * 3;
      if (d >= WALL) return { r: 'hit', pos: WALL };
      return { r: WALL - d === 10 ? 'ok' : 'far', pos: d };
    }
    // białe podłoże i ciemna linia – stałe barwy (fl-w, fl-b), żeby w trybie ciemnym linia nie zrobiła się jasna
    // tryb „prog”: odczyt > próg → lekko w lewo, inaczej → lekko w prawo; działa tylko próg między odczytami
    const wynikProg = () => (s.prog2 >= CZARNY && s.prog2 < BIALY ? 'linia' : 'kolo');
    const zmierzone = () => s.zm.b && s.zm.c;
    function drawCzas() {
      const X = (cm) => 40 + cm * 4.8; // 0 cm → x 40, 70 cm → x 376
      const w = s.guess ? wynikCzas() : null;
      const pos = w ? w.pos : 0;
      let ticks = '';
      for (let k = 0; k <= WALL; k += 10) ticks += `<line x1="${X(k)}" y1="96" x2="${X(k)}" y2="104" class="ln-thin"/><text x="${X(k)}" y="122" class="tx-s" text-anchor="middle">${k}</text>`;
      const beam = w && s.prog === 'B' ? `<path d="M${X(pos)},62 H${X(WALL) - 2}" class="ln s2 dash"/><text x="${(X(pos) + X(WALL)) / 2}" y="54" class="tx-s" text-anchor="middle">10 cm</text>` : '';
      const path = w ? `<path d="M${X(0)},92 H${X(pos) - 4}" class="ln s3 sw dash" marker-end="url(#a-wd-cz)"/>` : '';
      const boom = w && w.r === 'hit' ? `<text x="${X(WALL) - 20}" y="44" class="tx-b" text-anchor="middle">💥</text>` : '';
      box.innerHTML = `<svg viewBox="0 0 400 140" role="img" aria-label="Tor od 0 do 70 cm, na końcu ściana. Robot ${w ? `zatrzymał się na ${num(pos)} cm${w.r === 'hit' ? ' – uderzył w ścianę' : ''}` : 'stoi na starcie'}. Program ${s.prog === 'A' ? 'A: jedź 3 sekundy' : 'B: jedź, aż czujnik pokaże 10 cm lub mniej'}.">
        <defs><marker id="a-wd-cz" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
        <rect x="${X(WALL)}" y="20" width="14" height="80" class="f4 s4 sw"/>
        <line x1="${X(0)}" y1="100" x2="${X(WALL)}" y2="100" class="ln"/>${ticks}
        <text x="394" y="14" class="tx-s" text-anchor="end">ściana</text>
        ${path}${beam}
        <rect x="${X(pos) - 34}" y="62" width="34" height="22" rx="5" class="f1 s1 sw"/>
        <circle cx="${X(pos) - 26}" cy="88" r="5" class="bg ln"/><circle cx="${X(pos) - 8}" cy="88" r="5" class="bg ln"/>
        ${s.prog === 'B' ? `<rect x="${X(pos) - 4}" y="66" width="6" height="14" class="f2 s2"/>` : ''}${boom}
      </svg>`;
    }
    function drawProg() {
      const r = s.guess ? wynikProg() : null;
      const N = (v) => 30 + v * 3; // oś odczytów 0–120 → x 30–390
      let route = '';
      if (r === 'linia' && !s.smooth) {
        let d = 'M20,58';
        for (let x = 40; x <= 340; x += 20) d += ` L${x},${(x / 20) % 2 ? 44 : 58}`;
        route = `<path d="${d}" class="ln cz-trasa sw" marker-end="url(#a-wd-cz2)"/>`;
      } else if (r === 'linia') {
        let d = 'M20,50';
        for (let x = 30; x <= 340; x += 10) d += ` L${x},${(50 - 3 * Math.sin(x / 25)).toFixed(1)}`;
        route = `<path d="${d}" class="ln cz-trasa sw" marker-end="url(#a-wd-cz2)"/>`;
      } else if (r === 'kolo') {
        const dy = s.prog2 >= BIALY ? 1 : -1; // zawsze „w prawo” (w dół rysunku) albo zawsze „w lewo” (w górę)
        route = `<path d="M20,52 H50" class="ln cz-blad sw"/><circle cx="76" cy="${52 + dy * 20}" r="20" class="ln cz-blad sw dash"/>`;
      }
      const robot = r ? `<rect x="${r === 'kolo' ? 86 : 344}" y="${r === 'kolo' ? 42 + (s.prog2 >= BIALY ? 20 : -20) : 42}" width="24" height="20" rx="4" class="cz-robot sw"/>` : '<rect x="24" y="42" width="24" height="20" rx="4" class="cz-robot sw"/>';
      const prog = Math.min(120, Math.max(0, s.prog2));
      const mark = (v, label, cls, y, anchor = 'middle') => `<line x1="${N(v)}" y1="112" x2="${N(v)}" y2="126" class="ln ${cls} sw"/><text x="${N(v)}" y="${y}" class="tx-s" text-anchor="${anchor}">${label}</text>`;
      // podpis progu przy krańcach osi: wyrównany do brzegu, a „0” / „120” ukryte, żeby napisy nie nachodziły
      const pAnchor = prog <= 15 ? 'start' : prog >= 105 ? 'end' : 'middle';
      const zm = zmierzone();
      box.innerHTML = `<svg viewBox="0 0 400 160" role="img" aria-label="Widok z góry: czarna linia na białym podłożu. Oś odczytów czujnika: ${zm ? `nad czarnym ${CZARNY}, nad białym ${BIALY}` : 'podłoża jeszcze niezmierzone'}, próg ${s.prog2}.${r ? ` Wynik: robot ${r === 'linia' ? 'jedzie wzdłuż linii' : 'kręci się w kółko'}.` : ''}">
        <defs><marker id="a-wd-cz2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
        <rect x="10" y="8" width="380" height="88" rx="8" class="cz-biale ln"/>
        <rect x="20" y="47" width="360" height="10" class="cz-czarne"/>
        ${route}${robot}
        <line x1="${N(0)}" y1="119" x2="${N(120)}" y2="119" class="ln-thin"/>
        ${pAnchor === 'start' ? '' : `<text x="${N(0)}" y="146" class="tx-s" text-anchor="middle">0</text>`}${pAnchor === 'end' ? '' : `<text x="${N(120) + 6}" y="146" class="tx-s" text-anchor="end">120</text>`}
        ${zm ? mark(CZARNY, `czarne ${CZARNY}`, 's5', 108) + mark(BIALY, `białe ${BIALY}`, 's1', 108) : `<text x="${N(60)}" y="108" class="tx-s" text-anchor="middle">czarne ? · białe ?</text>`}${mark(prog, `próg ${s.prog2}`, 's2', 146, pAnchor)}
      </svg>`;
    }
    const draw = () => (tryb === 'czas' ? drawCzas() : drawProg());
    function renderLog() {
      const L = logs[tryb];
      const head = tryb === 'czas' ? '<th>Program</th><th>Prędkość</th>' : '<th>Próg</th><th>Płynnie?</th>';
      el.querySelector('.mlog').innerHTML = L.length ? `<table class="worksheet"><tr>${head}<th>Przewidziałem</th><th>Wynik</th></tr>
        ${L.slice(-6).map((t) => `<tr><td>${t.a}</td><td>${t.b}</td><td>${ICON[t.g]}</td><td>${ICON[t.r]}${t.g === t.r ? ' ✅' : ''}</td></tr>`).join('')}</table>
        <p class="muted">${GUESS[tryb].map(([, txt]) => txt).join(' · ')}</p>` : '';
    }
    function reset() {
      s.guess = null;
      const zablokuj = tryb === 'prog' && !zmierzone(); // w trybie „próg” przewidujesz dopiero po obu pomiarach
      gbox.querySelectorAll('.btn').forEach((x) => { x.disabled = zablokuj; x.classList.remove('primary'); x.setAttribute('aria-pressed', 'false'); });
      out.innerHTML = tryb === 'czas'
        ? 'Robot ma stanąć 10 cm przed ścianą. Wybierz prędkość i program, a potem przewidź: co się stanie?'
        : `Ustaw próg i przewidź, co zrobi robot. Reguła: odczyt &gt; próg – lekko w lewo, w innym razie – lekko w prawo. <span class="muted">${zmierzone() ? `Zmierzone: białe ${BIALY}, czarne ${CZARNY}. Średnia: (${BIALY} + ${CZARNY}) : 2 = ${(BIALY + CZARNY) / 2}.` : 'Najpierw zmierz czujnikiem białe i czarne podłoże – dopiero wtedy przewidujesz.'}</span>`;
      draw();
    }
    function renderSet() {
      if (tryb === 'czas') {
        set.innerHTML = `<div class="controls" role="group" aria-label="Prędkość robota"><span>Prędkość:</span>${SPEEDS.map(([v, n], k) => `<button class="btn${k === s.v ? ' primary' : ''}" data-v="${k}" aria-pressed="${k === s.v}" aria-label="${n.split(' ')[1]}: ${v} cm/s">${n.split(' ')[0]} ${v} cm/s</button>`).join('')}</div>
          <div class="controls" role="group" aria-label="Program"><span>Program:</span><button class="btn${s.prog === 'A' ? ' primary' : ''}" data-p="A" aria-pressed="${s.prog === 'A'}">A: jedź 3 s</button><button class="btn${s.prog === 'B' ? ' primary' : ''}" data-p="B" aria-pressed="${s.prog === 'B'}">B: jedź, aż czujnik ≤ 10 cm</button></div>`;
        set.querySelectorAll('[data-v]').forEach((b) => (b.onclick = () => { s.v = +b.dataset.v; renderSet(); reset(); }));
        set.querySelectorAll('[data-p]').forEach((b) => (b.onclick = () => { s.prog = b.dataset.p; renderSet(); reset(); }));
      } else {
        set.innerHTML = `<div class="controls"><button class="btn" data-z="b">${s.zm.b ? `⚪ białe: ${BIALY}` : '📏 Zmierz nad białym'}</button><button class="btn" data-z="c">${s.zm.c ? `⚫ czarne: ${CZARNY}` : '📏 Zmierz nad czarnym'}</button>
          ${slider('czp', 'próg:', 0, 120, s.prog2, 5)}
          <label><input type="checkbox" id="czs"${s.smooth ? ' checked' : ''}> płynna korekta (dla chętnych)</label></div>`;
        set.querySelectorAll('[data-z]').forEach((b) => (b.onclick = () => { s.zm[b.dataset.z] = true; renderSet(); reset(); }));
        const sl = set.querySelector('#czp');
        sl.oninput = () => { s.prog2 = +sl.value; set.querySelector('#czp-v').textContent = sl.value; reset(); };
        set.querySelector('#czs').onchange = (e) => { s.smooth = e.target.checked; reset(); };
      }
    }
    function renderGuess() {
      gbox.innerHTML = `<span>Co się stanie?</span>${GUESS[tryb].map(([k, txt]) => `<button class="btn" data-g="${k}" aria-pressed="false">${txt}</button>`).join('')}`;
      gbox.querySelectorAll('.btn').forEach((b) => (b.onclick = () => {
        if (s.guess) return; // najpierw przewidywanie, potem wynik – zmień ustawienie, żeby przewidzieć jeszcze raz
        s.guess = b.dataset.g;
        let r, why;
        if (tryb === 'czas') {
          r = wynikCzas().r;
          const v = SPEEDS[s.v][0];
          why = s.prog === 'B'
            ? 'Program B mierzy odległość i zatrzymuje robota, gdy czujnik pokaże 10 cm – przy każdej prędkości. To sprzężenie zwrotne: czujnik mierzy skutek ruchu.'
            : r === 'hit'
              ? `W 3 s robot przejechałby ${v} · 3 = ${v * 3} cm, a ściana jest na ${WALL} cm – uderza już po ${num(WALL / v)} s. Program A nie wie, gdzie jest ściana.`
              : `W 3 s robot przejechał ${v} · 3 = ${v * 3} cm i stanął ${WALL - v * 3} cm przed ścianą. ${r === 'ok' ? 'Tym razem się udało – ale tylko przy tej jednej prędkości.' : 'Stanął za wcześnie, daleko od ściany – program A nie sprawdza, gdzie jest robot.'}`;
          logs.czas.push({ a: s.prog, b: `${v} cm/s`, g: s.guess, r });
        } else {
          r = wynikProg();
          why = r === 'linia' && s.prog2 === CZARNY
            ? `Próg ${s.prog2} równa się odczytowi nad czarnym. Z regułą „odczyt &gt; próg” robot jeszcze trzyma się linii (${CZARNY} &gt; ${CZARNY} to fałsz – skręca w prawo), ale bez zapasu: wystarczy, że czujnik nad czarnym pokaże odrobinę więcej, i robot się pogubi. Bezpieczniej wybrać wartość pośrodku – ${(BIALY + CZARNY) / 2}.`
            : r === 'linia'
            ? `Próg ${s.prog2} leży między odczytami (${CZARNY} i ${BIALY}): nad białym robot skręca w lewo, nad czarnym w prawo – i trzyma się krawędzi linii. ${s.smooth ? `Płynna korekta: error = (odczyt − ${s.prog2}) · kp – im dalej od progu, tym mocniej skręca, a blisko progu prawie jedzie prosto.` : 'Z dwiema reakcjami ciągle lekko szarpie – włącz płynną korektę.'}`
            : `Próg ${s.prog2} jest ${s.prog2 >= BIALY ? 'równy lub większy od' : 'mniejszy od'} każdego odczytu (${CZARNY}–${BIALY}), więc robot zawsze wybiera tę samą reakcję i kręci się w kółko. Próg musi leżeć między odczytami – np. średnia ${(BIALY + CZARNY) / 2}.`;
          logs.prog.push({ a: s.prog2, b: s.smooth ? 'tak' : 'nie', g: s.guess, r });
        }
        out.innerHTML = `${s.guess === r ? '✅ Dobrze przewidziane!' : '🤔 Wyszło inaczej – to też odkrycie!'} ${why} <span class="muted">Zmień ustawienie i przewidź jeszcze raz. Liczby to nasz przykład.</span>`;
        gbox.querySelectorAll('.btn').forEach((x) => { x.disabled = true; x.setAttribute('aria-pressed', String(x === b)); });
        b.classList.add('primary');
        draw();
        renderLog();
      }));
    }
    function setTryb(t) {
      tryb = t;
      el.querySelectorAll('[data-t]').forEach((b) => { b.classList.toggle('primary', b.dataset.t === t); b.setAttribute('aria-pressed', b.dataset.t === t); });
      renderSet();
      renderGuess();
      renderLog();
      reset();
    }
    el.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => setTryb(b.dataset.t)));
    setTryb(tryb);
  }

  // --- Półsumator (ścieżka „Świat”, dział Dodawanie dwójkowe i półsumator) ---
  // p.tryb: 'bramki' (domyślnie) – przełączniki A, B → XOR daje cyfrę sumy S, AND – przeniesienie C; wyjścia widać po przewidywaniu;
  //         'schody' – światło na klatce schodowej: dwa przełączniki schodowe (trzy zaciski) i dwa przewody (nasz model połączeń:
  //                    A=0 – przewód 1, A=1 – przewód 2; B=0 – przewód 2, B=1 – przewód 1), lampa = A XOR B; porównanie z OR;
  //         'dodawanie' – dwie liczby 4-bitowe (p.a, p.b; domyślnie 6 i 7) dodawane kolumna po kolumnie z przeniesieniem,
  //                    przed każdą kolumną przewidujesz cyfrę wyniku; kolumna wag 1 – półsumator, dalsze – sumator pełny.
  // Wszystkie wyniki liczone tu wprost (XOR = ^, AND = &) – zgodne z tabelami prawdy z działu.
  function polsumator(el, p) {
    let tryb = ['bramki', 'schody', 'dodawanie'].includes(p.tryb) ? p.tryb : 'bramki';
    const W = [1, 2, 4, 8, 16];
    const s = {
      a: 0, b: 0, guess: null, seen: {},              // bramki
      sa: 0, sb: 0, g2: null, visited: {},            // schody
      x: p.a != null ? p.a & 15 : 6, y: p.b != null ? p.b & 15 : 7, col: 0, carry: [0], res: [], g3: null, // dodawanie
    };
    const bin = (v, n = 4) => v.toString(2).padStart(n, '0');
    el.innerHTML = `<div class="controls" role="group" aria-label="Wybierz tryb"><button class="btn" data-t="bramki">🧮 Półsumator</button><button class="btn" data-t="schody">💡 Światło na schodach</button><button class="btn" data-t="dodawanie">➕ Dodawanie w słupku</button></div>
      <div class="svgbox"></div><div class="psset"></div>
      <div class="controls psguess"></div>
      <div class="readout" aria-live="polite"></div><div class="mlog"></div>`;
    const box = el.querySelector('.svgbox');
    const set = el.querySelector('.psset');
    const gbox = el.querySelector('.psguess');
    const out = el.querySelector('.readout');
    const mlog = el.querySelector('.mlog');
    const wire = (on) => `ln sw${on ? ' ps-on' : ''}`;
    const lamp = (cx, cy, v, label) => `<circle cx="${cx}" cy="${cy}" r="16" class="${v === 1 ? 'f4 s4' : 'bg ln'} sw"/><text x="${cx}" y="${cy + 6}" class="tx-b" text-anchor="middle">${v == null ? '?' : v}</text><text x="${cx + 24}" y="${cy + 6}" class="tx-b">${label}</text>`;

    // ---------- tryb „bramki”: półsumator ----------
    function drawBramki() {
      const { a, b } = s;
      const shown = s.guess != null;
      const S = a ^ b, C = a & b;
      box.innerHTML = `<svg viewBox="0 0 400 190" role="img" aria-label="Półsumator: wejście A równe ${a} i wejście B równe ${b} prowadzą do bramki XOR i do bramki AND. ${shown ? `Wyjście XOR, czyli cyfra sumy S, równa się ${S}. Wyjście AND, czyli przeniesienie C, równa się ${C}.` : 'Wyjścia S i C są jeszcze ukryte – najpierw przewidź.'}">
        <g fill="none">
          <path d="M60,45 H170" class="${wire(a)}"/><path d="M110,45 V130 H170" class="${wire(a)}"/>
          <path d="M60,150 H170" class="${wire(b)}"/><path d="M80,150 V65 H104 A6,6 0 0 1 116,65 H170" class="${wire(b)}"/>
          <path d="M235,55 H300" class="${wire(shown && S)}"/><path d="M210,140 H300" class="${wire(shown && C)}"/>
          <path d="M152,30 Q167,55 152,80" class="ln sw"/>
        </g>
        <g class="ln"><circle cx="110" cy="45" r="4"/><circle cx="80" cy="150" r="4"/></g>
        <path d="M160,30 Q175,55 160,80 Q210,80 235,55 Q210,30 160,30 z" class="f5 s5 sw"/>
        <path d="M170,120 H190 A20,20 0 0 1 190,160 H170 z" class="f1 s1 sw"/>
        <g class="tx-s" text-anchor="middle"><text x="198" y="60">XOR</text><text x="188" y="145">AND</text></g>
        <g class="tx-b"><text x="6" y="51">A = ${a}</text><text x="6" y="156">B = ${b}</text></g>
        ${lamp(318, 55, shown ? S : null, 'S')}${lamp(318, 140, shown ? C : null, 'C')}
        <text x="200" y="186" class="tx-s" text-anchor="middle">S – cyfra sumy · C – przeniesienie</text>
      </svg>`;
    }
    function logBramki() {
      const rows = [[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b]) => {
        const k = `${a}${b}`;
        const t = s.seen[k];
        const on = a === s.a && b === s.b ? ' class="on"' : '';
        return `<tr${on}><td>${a}</td><td>${b}</td><td>${t ? a ^ b : ''}</td><td>${t ? a & b : ''}</td><td>${t ? `${a & b}${a ^ b}₂ = ${a + b}` : ''}</td><td>${t ? (t.ok ? '✅' : '🤔') : ''}</td></tr>`;
      }).join('');
      mlog.innerHTML = `<table class="worksheet"><tr><th>A</th><th>B</th><th>S (XOR)</th><th>C (AND)</th><th>C S</th><th>Trafione?</th></tr>${rows}</table>
        <p class="muted">Tabela uzupełnia się po każdym sprawdzeniu. Sprawdź wszystkie 4 wiersze.</p>`;
    }
    function setBramki() {
      set.innerHTML = `<div class="controls" role="group" aria-label="Wejścia półsumatora"><span>Wejścia:</span><button class="btn" data-in="a" aria-pressed="${s.a === 1}">A = ${s.a}</button><button class="btn" data-in="b" aria-pressed="${s.b === 1}">B = ${s.b}</button></div>`;
      set.querySelectorAll('[data-in]').forEach((btn) => (btn.onclick = () => {
        s[btn.dataset.in] ^= 1;
        s.guess = null;
        setBramki();
        guessBramki();
        drawBramki();
        logBramki();
        set.querySelector(`[data-in="${btn.dataset.in}"]`).focus();
      }));
    }
    function guessBramki() {
      const OPTS = [[0, 0], [1, 0], [0, 1], [1, 1]];
      gbox.innerHTML = `<span>Przewiduję:</span>${OPTS.map(([S, C]) => `<button class="btn" data-s="${S}" data-c="${C}">S = ${S}, C = ${C}</button>`).join('')}`;
      out.innerHTML = `A = ${s.a}, B = ${s.b}. Co pokażą S i C? Wybierz, a potem sprawdź.`;
      gbox.querySelectorAll('.btn').forEach((btn) => (btn.onclick = () => {
        if (s.guess != null) return;
        const S = s.a ^ s.b, C = s.a & s.b;
        const ok = +btn.dataset.s === S && +btn.dataset.c === C;
        s.guess = btn.dataset;
        s.seen[`${s.a}${s.b}`] = { ok };
        gbox.querySelectorAll('.btn').forEach((x) => { x.disabled = true; x.setAttribute('aria-pressed', String(x === btn)); });
        btn.classList.add('primary');
        const why = s.a + s.b === 2
          ? '1 + 1 = 10₂: piszesz 0 (S = 1 XOR 1 = 0) i przenosisz 1 (C = 1 AND 1 = 1).'
          : s.a + s.b === 1
          ? `${s.a} + ${s.b} = 1: wejścia są różne, więc XOR daje S = 1, a AND daje C = 0 – bez przeniesienia.`
          : '0 + 0 = 0: XOR i AND dają 0.';
        out.innerHTML = `${ok ? '✅ Dobrze przewidziane!' : '🤔 Wyszło inaczej – to też odkrycie!'} ${why} <span class="muted">Zmień A albo B i przewidź jeszcze raz.</span>`;
        drawBramki();
        logBramki();
      }));
    }

    // ---------- tryb „schody”: światło na klatce schodowej ----------
    function drawSchody() {
      const { sa, sb } = s;
      const L = sa ^ sb;
      const wA = sa === 0 ? 1 : 2, wB = sb === 0 ? 2 : 1; // przewód, z którym łączy się przełącznik
      const Y = { 1: 85, 2: 135 };
      const rays = L ? '<g class="ln s4"><path d="M361,78 L355,70"/><path d="M385,78 L391,70"/><path d="M373,74 V64"/></g>' : '';
      box.innerHTML = `<svg viewBox="0 0 400 225" role="img" aria-label="Model światła na schodach na baterię 4,5 V: przełącznik A na dole stoi w pozycji ${sa} i łączy się z przewodem ${wA}, przełącznik B na górze stoi w pozycji ${sb} i łączy się z przewodem ${wB}. ${L ? 'Oba łączą się z tym samym przewodem – obwód jest zamknięty, lampa świeci.' : 'Łączą się z różnymi przewodami – obwód jest przerwany, lampa nie świeci.'}">
        <g fill="none">
          <path d="M90,110 H40 V190 H198" class="${wire(L)}"/><path d="M212,190 H395 V110 H389" class="${wire(L)}"/>
          <path d="M310,110 H357" class="${wire(L)}"/>
          <path d="M136,85 H264" class="${wire(L && wA === 1)}"/><path d="M136,135 H264" class="${wire(L && wA === 2)}"/>
          <path d="M90,110 L130,${Y[wA]}" class="${wire(L)}"/><path d="M310,110 L270,${Y[wB]}" class="${wire(L)}"/>
        </g>
        <path d="M198,178 V202 M212,184 V196" class="ln sw"/>
        <g class="bg ln"><circle cx="90" cy="110" r="5"/><circle cx="310" cy="110" r="5"/><circle cx="132" cy="85" r="4"/><circle cx="132" cy="135" r="4"/><circle cx="268" cy="85" r="4"/><circle cx="268" cy="135" r="4"/></g>
        <circle cx="373" cy="110" r="16" class="${L ? 'f4 s4' : 'bg ln'} sw"/><path d="M362,99 L384,121 M384,99 L362,121" class="ln"/>${rays}
        <g class="tx-s" text-anchor="middle"><text x="200" y="78">przewód 1</text><text x="200" y="154">przewód 2</text><text x="205" y="218">bateria 4,5 V</text></g>
        <g class="tx-s"><text x="140" y="72">0</text><text x="140" y="158">1</text><text x="254" y="72">1</text><text x="254" y="158">0</text></g>
        <g class="tx-b" text-anchor="middle"><text x="90" y="40">⬇️ A = ${sa}</text><text x="310" y="40">⬆️ B = ${sb}</text></g>
        <g class="tx-s" text-anchor="middle"><text x="90" y="58">na dole</text><text x="310" y="58">na górze</text></g>
      </svg>`;
    }
    function logSchody() {
      const rows = [[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b]) => {
        const t = s.visited[`${a}${b}`];
        const on = a === s.sa && b === s.sb ? ' class="on"' : '';
        return `<tr${on}><td>${a}</td><td>${b}</td><td>${t ? (a ^ b ? '💡 świeci' : '🌑 ciemno') : ''}</td><td>${t ? a ^ b : ''}</td><td>${t ? a | b : ''}</td></tr>`;
      }).join('');
      mlog.innerHTML = `<table class="worksheet"><tr><th>A</th><th>B</th><th>Lampa</th><th>A XOR B</th><th>A OR B</th></tr>${rows}</table>
        <p class="muted">Odwiedź wszystkie 4 ustawienia. Gdzie XOR i OR się różnią?</p>`;
    }
    function setSchody() {
      set.innerHTML = `<div class="controls" role="group" aria-label="Przełączniki światła na schodach"><button class="btn" data-sw="sa" aria-pressed="${s.sa === 1}">⬇️ Przełącz na dole (A = ${s.sa})</button><button class="btn" data-sw="sb" aria-pressed="${s.sb === 1}">⬆️ Przełącz na górze (B = ${s.sb})</button></div>`;
      set.querySelectorAll('[data-sw]').forEach((btn) => (btn.onclick = () => {
        const before = s.sa ^ s.sb;
        s[btn.dataset.sw] ^= 1;
        const L = s.sa ^ s.sb;
        s.visited[`${s.sa}${s.sb}`] = true;
        const changed = L !== before;
        const ocena = s.g2 == null ? '' : (s.g2 === 'zmiana') === changed ? '✅ Dobrze przewidziane! ' : '🤔 Wyszło inaczej – to też odkrycie! ';
        const orTxt = (s.sa | s.sb) ? 'świeciłaby' : 'nie świeciłaby';
        out.innerHTML = `${ocena}Lampa ${L ? 'świeci 💡' : 'nie świeci 🌑'} (${s.sa} XOR ${s.sb} = ${L}). Jeden przełącznik zmienił stan lampy. <span class="muted">Gdyby to był OR, lampa ${orTxt} (${s.sa} OR ${s.sb} = ${s.sa | s.sb}).</span>`;
        s.g2 = null;
        setSchody();
        guessSchody(false);
        drawSchody();
        logSchody();
        set.querySelector(`[data-sw="${btn.dataset.sw}"]`).focus();
      }));
    }
    function guessSchody(msg = true) {
      gbox.innerHTML = '<span>Zanim przełączysz – przewiduję:</span><button class="btn" data-g="zmiana">🔁 lampa zmieni stan</button><button class="btn" data-g="bez">⏸️ nic się nie zmieni</button>';
      if (msg) out.innerHTML = 'Lampa nie świeci. Przewidź, co się stanie, a potem przełącz jeden z przełączników.';
      gbox.querySelectorAll('.btn').forEach((btn) => (btn.onclick = () => {
        s.g2 = btn.dataset.g;
        gbox.querySelectorAll('.btn').forEach((x) => { x.setAttribute('aria-pressed', String(x === btn)); x.classList.toggle('primary', x === btn); });
        out.innerHTML = 'Zapisane. Teraz przełącz przełącznik na dole albo na górze.';
      }));
    }

    // ---------- tryb „dodawanie”: dodawanie w słupku kolumna po kolumnie ----------
    function resetDod() {
      s.col = 0; s.carry = [0]; s.res = []; s.g3 = null;
    }
    function drawDod() {
      const X = (i) => 350 - i * 50; // i = 0 – kolumna wag 1
      const done = s.col >= 4;
      const cur = done ? -1 : s.col;
      let cells = '';
      for (let i = 0; i < 5; i++) {
        cells += `<text x="${X(i)}" y="28" class="tx-s" text-anchor="middle">${W[i]}</text>`;
        if (i < 4) cells += `<text x="${X(i)}" y="95" class="tx-b" text-anchor="middle">${(s.x >> i) & 1}</text><text x="${X(i)}" y="130" class="tx-b" text-anchor="middle">${(s.y >> i) & 1}</text>`;
        if (i > 0 && i <= s.col && s.carry[i]) cells += `<text x="${X(i)}" y="60" class="tx-b t2" text-anchor="middle">1</text>`;
        if (i < s.res.length) cells += `<text x="${X(i)}" y="178" class="tx-b" text-anchor="middle">${s.res[i]}</text>`;
      }
      const wynik = s.res.slice().reverse().join('');
      const hl = cur >= 0 ? `<rect x="${X(cur) - 22}" y="40" width="44" height="150" rx="8" class="f4 s4"/>` : '';
      box.innerHTML = `<svg viewBox="0 0 400 210" role="img" aria-label="Dodawanie w słupku: A = ${bin(s.x)} (dziesiętnie ${s.x}), B = ${bin(s.y)} (dziesiętnie ${s.y}). ${s.res.length ? `Wynik do tej pory: ${wynik}.` : 'Wyniku jeszcze nie ma.'}${done ? ` Wynik ${wynik} to dziesiętnie ${s.x + s.y}.` : ` Teraz kolumna wag ${W[cur]}.`}">
        ${hl}
        <g class="tx-s"><text x="6" y="28">wagi</text><text x="6" y="60">przeniesienia</text><text x="6" y="178">wynik</text></g>
        <g class="tx-b"><text x="6" y="95">A (${s.x})</text><text x="6" y="130">B (${s.y})</text><text x="110" y="130">+</text>${done ? `<text x="6" y="198" class="tx-s">= ${s.x + s.y} dziesiętnie</text>` : ''}</g>
        <line x1="104" y1="145" x2="378" y2="145" class="ln sw"/>
        ${cells}
      </svg>`;
    }
    function setDod() {
      const row = (k, label) => `<div class="controls psbits" role="group" aria-label="Liczba ${label}"><span>${label} =</span>${[3, 2, 1, 0].map((i) => {
        const v = (s[k] >> i) & 1;
        return `<button class="btn" data-k="${k}" data-i="${i}" aria-pressed="${v === 1}" aria-label="Liczba ${label}, cyfra o wadze ${W[i]}: ${v}">${v}</button>`;
      }).join('')}<span>= ${s[k]}</span></div>`;
      set.innerHTML = `${row('x', 'A')}${row('y', 'B')}<div class="controls"><button class="btn" data-reset>↺ Od nowa</button></div>`;
      set.querySelectorAll('[data-k]').forEach((btn) => (btn.onclick = () => {
        s[btn.dataset.k] ^= 1 << +btn.dataset.i;
        resetDod();
        setDod();
        guessDod();
        drawDod();
        set.querySelector(`[data-k="${btn.dataset.k}"][data-i="${btn.dataset.i}"]`).focus();
      }));
      set.querySelector('[data-reset]').onclick = () => { resetDod(); guessDod(); drawDod(); };
    }
    function guessDod() {
      mlog.innerHTML = '';
      if (s.col >= 4) {
        const wynik = s.res.slice().reverse().join('');
        gbox.innerHTML = '';
        const last = s.res.length === 5 ? ' Ostatnie przeniesienie stało się piątą cyfrą wyniku.' : '';
        out.innerHTML = `Gotowe: ${bin(s.x)} + ${bin(s.y)} = ${wynik}₂.${last} Sprawdzenie dziesiętnie: ${s.x} + ${s.y} = ${s.x + s.y}, a ${wynik}₂ = ${parseInt(wynik, 2)} ${parseInt(wynik, 2) === s.x + s.y ? '✅' : '❌'}. <span class="muted">Zmień cyfry A albo B i dodaj jeszcze raz.</span>`;
        return;
      }
      const i = s.col;
      gbox.innerHTML = `<span>Kolumna wag ${W[i]} – piszę:</span><button class="btn" data-g="0">0</button><button class="btn" data-g="1">1</button>`;
      if (i === 0) out.innerHTML = 'Zaczynasz od prawej kolumny (wagi 1). Jaką cyfrę napiszesz pod kreską?';
      gbox.querySelectorAll('.btn').forEach((btn) => (btn.onclick = () => {
        const a = (s.x >> i) & 1, b = (s.y >> i) & 1, c = s.carry[i] || 0;
        const sum = a + b + c;
        const S = sum & 1, C = sum >> 1;
        const ok = +btn.dataset.g === S;
        s.res[i] = S;
        s.carry[i + 1] = C;
        s.col = i + 1;
        if (s.col === 4 && C) s.res[4] = 1;
        const dzial = i === 0 ? `${a} + ${b}` : `${a} + ${b} + przeniesienie ${c}`;
        const kto = i === 0 ? 'Tu wystarczy półsumator – dwa bity.' : 'Trzy bity (z przeniesieniem) – to robota sumatora pełnego.';
        const msg = `${ok ? '✅' : '🤔'} Kolumna wag ${W[i]}: ${dzial} = ${sum.toString(2)}₂ → piszesz ${S}${C ? ', przenosisz 1' : ', nic nie przenosisz'}. ${kto}`;
        drawDod();
        guessDod();
        if (s.col < 4) out.innerHTML = `${msg} <span class="muted">Teraz kolumna wag ${W[s.col]}.</span>`;
        else out.innerHTML = `${msg}<br>${out.innerHTML}`;
      }));
    }

    function setTryb(t) {
      tryb = t;
      el.querySelectorAll('[data-t]').forEach((b) => { b.classList.toggle('primary', b.dataset.t === t); b.setAttribute('aria-pressed', String(b.dataset.t === t)); });
      if (t === 'bramki') { s.guess = null; setBramki(); guessBramki(); drawBramki(); logBramki(); }
      else if (t === 'schody') { s.g2 = null; s.visited[`${s.sa}${s.sb}`] = true; setSchody(); guessSchody(); drawSchody(); logSchody(); if (s.sa ^ s.sb) out.innerHTML = 'Lampa świeci. Przewidź, co się stanie, a potem przełącz jeden z przełączników.'; }
      else { resetDod(); setDod(); guessDod(); drawDod(); }
    }
    el.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => setTryb(b.dataset.t)));
    setTryb(tryb);
  }

  // --- Soroban – japońskie liczydło (ścieżka „Świat”, dział Soroban) ---
  // Na pręcie: 1 koralik nad belką (wart 5) i 4 pod belką (po 1); liczy się koralik przysunięty do belki.
  // p.prety – liczba prętów (3 albo 4, domyślnie 3); p.tryb: 'wolny' (domyślnie; p.start – liczba na start),
  // 'ustaw' (p.cel – liczba do ustawienia, bez p.cel – losowa; „Nowa liczba” losuje następną),
  // 'dodaj' (p.a – liczba na start, p.b – co dodać; podpowiedź: piątka albo dziesiątka).
  // Klik w koralik przesuwa go razem z koralikami między nim a belką. Klawiatura: Tab – pręt, ↑/↓ – cyfra ±1, ←/→ – sąsiedni pręt, 0–9 – cyfra.
  function soroban(el, p) {
    const n = Math.min(4, Math.max(3, p.prety || 3));
    const MIEJSCA = [['tysiące', ['tysiąc', 'tysiące', 'tysięcy']], ['setki', ['setka', 'setki', 'setek']],
      ['dziesiątki', ['dziesiątka', 'dziesiątki', 'dziesiątek']], ['jedności', ['jedność', 'jedności', 'jedności']]].slice(4 - n);
    const max = 10 ** n - 1;
    const tryb = p.tryb || 'wolny';
    const odm = (k, f) => (k === 1 ? f[0] : k >= 2 && k <= 4 ? f[1] : f[2]);
    const jedynki = (k) => `${k} ${k === 1 ? 'jedynkę' : 'jedynki'}`;
    let d = [];
    let cel = tryb === 'ustaw' ? p.cel : null;
    let ukryj = false;
    let fokus = -1;
    const ustaw = (v) => { d = String(Math.max(0, Math.min(max, v))).padStart(n, '0').split('').map(Number); };
    const wartosc = () => +d.join('');
    const los = () => { let v; do v = 1 + Math.floor(Math.random() * max); while (v === cel || v === wartosc()); return v; };
    const PRZYCISKI = {
      wolny: '<button class="btn" data-a="zero">0️⃣ Wyzeruj</button><button class="btn" data-a="ukryj" aria-pressed="false">🙈 Zakryj liczbę</button>',
      ustaw: '<button class="btn" data-a="nowa">🎲 Nowa liczba</button><button class="btn" data-a="zero">0️⃣ Wyzeruj</button>',
      dodaj: '<button class="btn" data-a="pomoc">💡 Podpowiedź</button><button class="btn" data-a="znowu">↺ Od nowa</button>',
    };
    el.innerHTML = `<p class="readout sb-zad"></p><div class="svgbox"></div>
      <div class="controls">${PRZYCISKI[tryb] || PRZYCISKI.wolny}</div>
      <div class="readout sb-out" aria-live="polite"></div><p class="muted sb-pom" aria-live="polite"></p>
      <p class="muted">Klikaj koraliki. Klawiatura: Tab – pręt, ↑ ↓ – cyfra, ← → – sąsiedni pręt.</p>`;
    const box = el.querySelector('.svgbox');
    const zad = el.querySelector('.sb-zad');
    const out = el.querySelector('.sb-out');
    const pom = el.querySelector('.sb-pom');
    const kor = (cx, y, on, i, k) => `<rect x="${cx - 29}" y="${y}" width="58" height="22" rx="11" class="sb-kor ${on ? 'f2 s2' : 'f1 s1'} sw" data-r="${i}" data-k="${k}"/>`;
    function draw() {
      const W = 30 + n * 90;
      let s = '';
      d.forEach((c, i) => {
        const cx = 60 + i * 90;
        const gora = c >= 5;
        const dol = c % 5;
        let g = `<rect x="${cx - 42}" y="10" width="84" height="232" rx="8" class="sb-fokus"/><line x1="${cx}" y1="10" x2="${cx}" y2="214" class="ln"/>`;
        g += kor(cx, gora ? 57 : 12, gora, i, 'g');
        for (let k = 0; k < 4; k++) g += kor(cx, k < dol ? 92 + k * 23 : 118 + k * 23, k < dol, i, k);
        g += `<text x="${cx}" y="236" text-anchor="middle" class="tx-s">${MIEJSCA[i][0]}</text>`;
        s += `<g class="sb-pret" data-r="${i}" tabindex="0" role="spinbutton" aria-valuemin="0" aria-valuemax="9" aria-valuenow="${c}" aria-label="${MIEJSCA[i][0]}">${g}</g>`;
      });
      box.innerHTML = `<svg viewBox="0 0 ${W} 246" role="group" aria-label="Soroban: ${n} pręty. Koralik nad belką jest wart 5, każdy pod belką – 1. Liczy się koralik przy belce.">
        <rect x="8" y="8" width="${W - 16}" height="208" rx="6" class="ln sw"/>${s}
        <rect x="8" y="80" width="${W - 16}" height="10" class="f4 s4 sw" pointer-events="none"/>
      </svg>`;
      if (fokus >= 0) box.querySelector(`[data-r="${fokus}"]`).focus();
    }
    function podpowiedz() {
      const a = p.a || 0;
      const b = p.b || 0;
      if (b >= 10) return 'Dodawaj po kolei: najpierw dziesiątki, potem jedności.';
      const u = a % 10;
      if (u + b >= 10) return `Na pręcie jedności zabraknie miejsca. Dołóż 1 koralik na pręcie dziesiątek (to 10) i zabierz ${10 - b} z pręta jedności: ${a} + 10 − ${10 - b} = ${a + b}.`;
      if (b < 5 && (u % 5) + b > 4) return `Brakuje dolnych koralików. Dołóż piątkę i zabierz ${5 - b}: ${a} + 5 − ${5 - b} = ${a + b}.`;
      if (b >= 5) return `Wystarczy dołożyć na pręcie jedności piątkę${b > 5 ? ` i ${jedynki(b - 5)}` : ''}.`;
      return `Wystarczy dołożyć na pręcie jedności ${jedynki(b)}.`;
    }
    function after() {
      draw();
      const v = wartosc();
      const sklad = d.map((c, i) => `${c} ${odm(c, MIEJSCA[i][1])}`).join(', ');
      out.innerHTML = ukryj ? 'Liczba: <b>?</b> – odczytaj ją z koralików, potem odkryj.' : `Liczba: <b>${v}</b> <span class="muted">= ${sklad}</span>`;
      if (tryb === 'ustaw') {
        zad.innerHTML = `Ustaw na sorobanie liczbę <b>${cel}</b>.`;
        if (v === cel) out.innerHTML += '<br>🎉 Brawo! Kliknij „Nowa liczba”.';
      } else if (tryb === 'dodaj') {
        zad.innerHTML = `Na sorobanie jest <b>${p.a || 0}</b>. Dodaj <b>${p.b || 0}</b> – przesuwaj koraliki.`;
        if (v === (p.a || 0) + (p.b || 0)) out.innerHTML += `<br>🎉 Brawo! ${p.a || 0} + ${p.b || 0} = ${v}.`;
      } else zad.innerHTML = 'Ustaw dowolną liczbę i odczytaj ją.';
    }
    function przesun(i, k) {
      let gora = d[i] >= 5;
      let dol = d[i] % 5;
      if (k === 'g') gora = !gora;
      else dol = dol > +k ? +k : +k + 1;
      d[i] = (gora ? 5 : 0) + dol;
    }
    box.addEventListener('click', (e) => {
      const b = e.target.closest('[data-k]');
      if (!b) return;
      fokus = -1;
      przesun(+b.dataset.r, b.dataset.k);
      after();
    });
    box.addEventListener('keydown', (e) => {
      const g = e.target.closest('[data-r]');
      if (!g) return;
      const i = +g.dataset.r;
      let c = d[i];
      if (e.key === 'ArrowUp') c = Math.min(9, c + 1);
      else if (e.key === 'ArrowDown') c = Math.max(0, c - 1);
      else if (/^[0-9]$/.test(e.key)) c = +e.key;
      else if (e.key === 'Home') c = 0;
      else if (e.key === 'End') c = 9;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation(); // strzałki w lekcji zmieniają krok – tu przenoszą między prętami
        const j = i + (e.key === 'ArrowLeft' ? -1 : 1);
        if (j >= 0 && j < n) box.querySelector(`[data-r="${j}"]`).focus();
        return;
      } else return;
      e.preventDefault();
      e.stopPropagation();
      fokus = i;
      d[i] = c;
      after();
    });
    el.querySelectorAll('[data-a]').forEach((b) => (b.onclick = () => {
      const a = b.dataset.a;
      fokus = -1;
      pom.textContent = '';
      if (a === 'zero') ustaw(0);
      if (a === 'nowa') { cel = los(); ustaw(0); }
      if (a === 'znowu') ustaw(p.a || 0);
      if (a === 'pomoc') pom.textContent = podpowiedz();
      if (a === 'ukryj') { ukryj = !ukryj; b.textContent = ukryj ? '👀 Odkryj liczbę' : '🙈 Zakryj liczbę'; b.setAttribute('aria-pressed', String(ukryj)); }
      after();
    }));
    ustaw(tryb === 'dodaj' ? p.a || 0 : p.start || 0);
    if (tryb === 'ustaw' && cel == null) cel = los();
    after();
  }

  // --- Obwody (ścieżka „Świat”, dział Obwody szeregowe i równoległe, elektromagnes): najpierw przewidywanie, potem wynik ---
  // p.tryb: 'baterie' – 1 bateria, 2 szeregowo albo 2 równolegle; żarówka albo silnik; odwrócone baterie (Japonia, kl. 4);
  //         'zarowki' (domyślnie) – dwie jednakowe żarówki szeregowo albo równolegle, 1 albo 2 baterie szeregowo, wykręcanie żarówek (Singapur P5, Lehrplan 21);
  //         'elektromagnes' – 20 albo 40 zwojów (drut tej samej długości), 1 albo 2 baterie szeregowo, odwrócona bateria, wyłącznik (Japonia kl. 5, Korea).
  // Model uproszczony: idealne baterie po 1,5 V i jednakowe żarówki – napięcie na żarówce porównujemy z „1 żarówka + 1 bateria”;
  // siła elektromagnesu rośnie razem z liczbą zwojów i liczbą baterii (zwoje × baterie) – liczby spinaczy to przykład, nie pomiar.
  function obwody(el, p) {
    const TRYBY = { baterie: '🔋 Dwie baterie', zarowki: '💡 Dwie żarówki', elektromagnes: '🧲 Elektromagnes' };
    let tryb = TRYBY[p.tryb] ? p.tryb : 'zarowki';
    const s = { zrodlo: 's1', odb: 'z', rev: '0', uklad: 'szereg', bat: '1', outA: '0', outB: '0', zwoje: '20', bat2: '1', rev2: '0', on: '1' };
    let guess = null;
    const logs = { baterie: [], zarowki: [], elektromagnes: [] };
    const SET = {
      baterie: [
        ['Baterie', 'zrodlo', [['s1', '1 bateria'], ['szereg', '2 szeregowo'], ['rown', '2 równolegle']]],
        ['Odbiornik', 'odb', [['z', '💡 żarówka'], ['m', '⚙️ silnik']]],
        ['Kierunek', 'rev', [['0', '➡️ zwykły'], ['1', '🔄 odwrócone']]],
      ],
      zarowki: [
        ['Połączenie', 'uklad', [['szereg', '🔗 szeregowo'], ['rown', '🔀 równolegle']]],
        ['Baterie', 'bat', [['1', '1 bateria'], ['2', '2 szeregowo']]],
        ['Żarówka A', 'outA', [['0', 'wkręcona'], ['1', '🪛 wykręcona']]],
        ['Żarówka B', 'outB', [['0', 'wkręcona'], ['1', '🪛 wykręcona']]],
      ],
      elektromagnes: [
        ['Zwoje', 'zwoje', [['20', '20'], ['40', '40']]],
        ['Baterie', 'bat2', [['1', '1 bateria'], ['2', '2 szeregowo']]],
        ['Kierunek', 'rev2', [['0', '➡️ zwykły'], ['1', '🔄 odwrócona']]],
        ['Wyłącznik', 'on', [['1', '🔌 włączony'], ['0', '⭕ wyłączony']]],
      ],
    };
    const NAZWA = { s1: '1 bateria', szereg: '2 szeregowo', rown: '2 równolegle' };
    el.innerHTML = `<div class="controls" role="group" aria-label="Wybierz doświadczenie">${Object.entries(TRYBY).map(([k, t]) => `<button class="btn" data-t="${k}">${t}</button>`).join('')}</div>
      <div class="svgbox"></div><div class="obset"></div>
      <div class="controls obguess" role="group" aria-label="Przewidywanie"></div>
      <div class="readout" aria-live="polite" tabindex="-1"></div><div class="mlog"></div>`;
    const box = el.querySelector('.svgbox');
    const setBox = el.querySelector('.obset');
    const gbox = el.querySelector('.obguess');
    const out = el.querySelector('.readout');

    // --- model ---
    const cel = () => (s.outB === '0' ? 'B' : s.outA === '0' ? 'A' : null); // o którą żarówkę pytamy
    const napZr = () => (s.zrodlo === 'szereg' ? 2 : 1); // napięcie źródła (1 = jedna bateria 1,5 V); równolegle – jak jedna
    function napZar() { // napięcie na żarówkach A i B (1 = jedna bateria)
      const V = +s.bat, a = s.outA === '0', b = s.outB === '0';
      if (s.uklad === 'szereg') return a && b ? { A: V / 2, B: V / 2 } : { A: 0, B: 0 };
      return { A: a ? V : 0, B: b ? V : 0 };
    }
    const poziom = (v) => (v === 0 ? 0 : v < 1 ? 1 : v === 1 ? 2 : 3); // 0 – nie świeci, 1 – słabiej, 2 – jak sama, 3 – jaśniej
    const sila = () => (s.on === '1' ? (+s.zwoje / 20) * +s.bat2 : 0);
    function wynik() {
      if (tryb === 'baterie') { const m = napZr() > 1 ? 'j' : 't'; return s.odb === 'z' ? m : m + (s.rev === '1' ? 'd' : 't'); }
      if (tryb === 'zarowki') { const c = cel(); return c ? String(poziom(napZar()[c])) : null; }
      const F = sila();
      return F === 0 ? '0' : F === 1 ? 't' : F > 1 ? 'w' : 'm';
    }
    function opcje() {
      if (tryb === 'baterie') return s.odb === 'z'
        ? [['j', '🔆 jaśniej'], ['t', '💡 tak samo'], ['s', '🔅 słabiej']]
        : [['jt', '⏩ szybciej, w tę samą stronę'], ['jd', '⏩ szybciej, w drugą stronę'], ['tt', '▶️ tak samo, w tę samą stronę'], ['td', '◀️ tak samo, w drugą stronę']];
      if (tryb === 'zarowki') return [['0', '⚫ nie świeci'], ['1', '🔅 słabiej'], ['2', '💡 tak jak sama'], ['3', '🔆 jaśniej']];
      return [['0', '0️⃣ nic'], ['m', '➖ mniej'], ['t', '🟰 tyle samo'], ['w', '➕ więcej']];
    }
    function pytanie() {
      if (tryb === 'baterie') return s.odb === 'z' ? 'Jak świeci żarówka – w porównaniu z 1 baterią?' : 'Jak kręci się silnik – w porównaniu z 1 baterią podłączoną zwykle?';
      if (tryb === 'zarowki') { const c = cel(); return c ? `Jak świeci żarówka ${c} – w porównaniu z jedną żarówką i 1 baterią?` : ''; }
      return 'Ile spinaczy podniesie – w porównaniu z 20 zwojami i 1 baterią?';
    }
    const duza = (t) => t.charAt(0).toUpperCase() + t.slice(1);
    function dlaczego() {
      if (tryb === 'baterie') {
        const z = s.odb === 'z';
        const t = {
          s1: 'Jedna bateria 1,5 V – to punkt odniesienia.',
          szereg: `Dwie baterie szeregowo: plus jednej do minusa drugiej, 1,5 V + 1,5 V = 3 V. Mocniejsze „pchnięcie” – większy prąd, więc ${z ? 'żarówka świeci jaśniej (musi pasować do 3 V – za wysokie napięcie może ją przepalić).' : 'silnik kręci się szybciej.'}`,
          rown: `Dwie baterie równolegle: plus do plusa, minus do minusa. Napięcie jak jednej baterii (1,5 V), więc ${z ? 'żarówka świeci' : 'silnik kręci się'} mniej więcej tak samo – ale baterie starczą na dłużej. Pamiętaj: równolegle zawsze plus do plusa – odwrócona jedna bateria to zwarcie.`,
        }[s.zrodlo];
        if (s.rev !== '1') return t;
        return `${t} ${z ? 'Baterie odwrócone – prąd płynie w drugą stronę, ale żarówce kierunek nie przeszkadza. Dioda LED by zgasła: świeci tylko przy jednym kierunku prądu.' : 'Baterie odwrócone – prąd płynie w drugą stronę, więc silnik kręci się w drugą stronę.'}`;
      }
      if (tryb === 'zarowki') {
        const c = cel(), V = +s.bat, obie = s.outA === '0' && s.outB === '0';
        if (s.uklad === 'szereg') {
          if (!obie) return 'Szeregowo prąd ma jedną drogę. Wykręcona żarówka robi przerwę w pętli – prąd nie płynie i gasną wszystkie.';
          return V === 1 ? 'Szeregowo napięcie baterii dzieli się na dwie żarówki – każda dostaje połowę, więc obie świecą słabiej niż jedna.'
            : 'Dwie baterie szeregowo (3 V) dzielą się na dwie żarówki – każda dostaje 1,5 V, czyli tyle, co sama z jedną baterią.';
        }
        const inna = c === 'B' ? 'A' : 'B';
        return `${obie ? 'Równolegle każda żarówka ma swoją drogę i dostaje pełne napięcie baterii.' : `Równolegle każda żarówka ma swoją drogę – wykręcona żarówka ${inna} nie przerywa drogi przez ${c}.`} ${V === 1
          ? 'Świeci tak jak sama – w modelu z idealną baterią. Prawdziwa bateria daje przy dwóch żarówkach odrobinę mniej, ale i tak jest jaśniej niż w szeregu.'
          : 'Dwie baterie szeregowo dają 3 V – świeci jaśniej niż sama z 1 baterią. Uwaga: za wysokie napięcie może przepalić żarówkę.'}`;
      }
      if (s.on === '0') return 'Wyłącznik otwarty – prąd nie płynie, elektromagnes nie działa i spinacze odpadają (stalowy gwóźdź może zostać trochę namagnesowany).';
      const zw = s.zwoje === '40', b2 = s.bat2 === '2';
      const t = zw || b2 ? `${duza([zw ? 'więcej zwojów (Japonia)' : '', b2 ? 'większy prąd – 2 baterie szeregowo (Japonia, Korea)' : ''].filter(Boolean).join(' i '))} – elektromagnes jest silniejszy.` : '20 zwojów i 1 bateria – to punkt odniesienia.';
      return `${t}${s.rev2 === '1' ? ' Bateria odwrócona – prąd płynie w drugą stronę, więc bieguny N i S zamieniły się miejscami (zobacz igłę kompasu). Siła się nie zmieniła.' : ''} Prawdziwy drut się grzeje – podłączaj go tylko na kilka sekund.`;
    }

    // --- rysunki ---
    const pr = (on) => `ln sw${on ? ' ob-on' : ''}`; // przewód – zielony, gdy po przewidywaniu widać, że płynie prąd
    const konce = (x, plusLewo) => [plusLewo ? x - 6 : x, plusLewo ? x + 70 : x + 76]; // lewy i prawy koniec baterii (z biegunem +)
    function bateria(x, y, plusLewo) { // bateria 70 × 26, wypustka i „+” po stronie bieguna dodatniego
      return `<rect x="${x}" y="${y}" width="70" height="26" rx="4" class="f2 s2 sw"/><rect x="${plusLewo ? x - 6 : x + 70}" y="${y + 8}" width="6" height="10" class="f2 s2"/>
        <text x="${x + 35}" y="${y + 18}" class="tx-s" text-anchor="middle">1,5 V</text><text x="${plusLewo ? x + 8 : x + 62}" y="${y + 18}" class="tx-s" text-anchor="middle">+</text>`;
    }
    function zarowka(x, y, lvl, label) { // lvl: null – jeszcze nie wiadomo, -1 – wykręcona, 0–3 – jasność
      if (lvl === -1) return `<circle cx="${x}" cy="${y}" r="15" class="ln dash"/><text x="${x}" y="${y + 34}" class="tx-s" text-anchor="middle">${label} – wykręcona</text>`;
      const fill = lvl === null || lvl === 0 ? 'bg' : lvl === 1 ? 'ob-slaba' : 'ob-jasna';
      const n = lvl === 3 ? 8 : lvl === 2 ? 4 : 0;
      let rays = '';
      for (let k = 0; k < n; k++) {
        const a = (k * 2 * Math.PI) / n + Math.PI / 4;
        rays += `<path d="M${(x + 20 * Math.cos(a)).toFixed(1)},${(y + 20 * Math.sin(a)).toFixed(1)} L${(x + 28 * Math.cos(a)).toFixed(1)},${(y + 28 * Math.sin(a)).toFixed(1)}" class="ln s4 sw"/>`;
      }
      return `${rays}<circle cx="${x}" cy="${y}" r="15" class="${fill} ln sw"/><path d="M${x - 10},${y - 10} L${x + 10},${y + 10} M${x + 10},${y - 10} L${x - 10},${y + 10}" class="ln"/>
        <text x="${x}" y="${y + 34}" class="tx-s" text-anchor="middle">${label}${lvl === null ? ' – ?' : ''}</text>`;
    }
    const spinacze = (k) => `${k} ${k === 1 ? 'spinacz' : k % 10 >= 2 && k % 10 <= 4 && (k % 100 < 12 || k % 100 > 14) ? 'spinacze' : 'spinaczy'}`;
    const kropka = (x, y) => `<circle cx="${x}" cy="${y}" r="4" class="ob-wezel"/>`;
    const OPIS_POZ = ['nie świeci', 'świeci słabiej niż sama', 'świeci tak jak sama', 'świeci jaśniej niż sama'];

    function drawBaterie() {
      const r = guess ? wynik() : null;
      const lewo = s.rev !== '1'; // „+” po lewej – prąd w górnym przewodzie płynie w prawo
      const plyn = !!r;
      let pack = '', dol = '';
      if (s.zrodlo === 's1') {
        const [l, p2] = konce(165, lewo);
        pack = bateria(165, 137, lewo);
        dol = `<path d="M40,150 H${l} M${p2},150 H360" class="${pr(plyn)}"/>`;
      } else if (s.zrodlo === 'szereg') {
        const [l1, p1] = konce(120, lewo), [l2, p2] = konce(210, lewo);
        pack = bateria(120, 137, lewo) + bateria(210, 137, lewo);
        dol = `<path d="M40,150 H${l1} M${p1},150 H${l2} M${p2},150 H360" class="${pr(plyn)}"/>`;
      } else {
        const [l, p2] = konce(165, lewo);
        pack = bateria(165, 118, lewo) + bateria(165, 158, lewo);
        dol = `<path d="M40,150 H150 M250,150 H360 M150,131 V171 M250,131 V171 M150,131 H${l} M${p2},131 H250 M150,171 H${l} M${p2},171 H250" class="${pr(plyn)}"/>${kropka(150, 150)}${kropka(250, 150)}`;
      }
      const silnik = s.odb === 'm';
      const odb = silnik
        ? `<circle cx="200" cy="45" r="18" class="bg ln sw"/><text x="200" y="51" class="tx-b" text-anchor="middle">M</text>`
        : zarowka(200, 45, r ? (napZr() > 1 ? 3 : 2) : null, 'żarówka');
      const gora = `<path d="M40,45 H${silnik ? 182 : 185} M${silnik ? 218 : 215},45 H360 M40,45 V150 M360,45 V150" class="${pr(plyn)}"/>`;
      const strz = r ? `<path d="${lewo ? 'M95,45 H130' : 'M130,45 H95'}" class="ln sw ob-on" marker-end="url(#a-wd-ob)"/>` : '';
      const ruch = r && silnik ? `<text x="200" y="20" class="tx-b" text-anchor="middle">${s.rev === '1' ? '↺' : '↻'}</text><text x="226" y="20" class="tx-s">${napZr() > 1 ? 'szybciej' : 'jak z 1 baterią'}</text>` : '';
      const opis = `${NAZWA[s.zrodlo]}${s.rev === '1' ? ', odwrócone' : ''}; odbiornik: ${silnik ? 'silnik' : 'żarówka'}.${r ? ` Wynik: ${silnik ? `silnik kręci się ${napZr() > 1 ? 'szybciej' : 'tak samo'}, ${s.rev === '1' ? 'w drugą stronę' : 'w tę samą stronę'}` : `żarówka świeci ${napZr() > 1 ? 'jaśniej' : 'tak samo'}`}.` : ''}`;
      box.innerHTML = `<svg viewBox="0 0 400 190" role="img" aria-label="Obwód: ${opis}">
        <defs><marker id="a-wd-ob" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
        ${gora}${dol}${pack}${odb}${strz}${ruch}
      </svg>`;
    }
    function drawZarowki() {
      const r = guess ? wynik() : null;
      const v = napZar();
      const lvl = (k) => (s['out' + k] === '1' ? -1 : r === null ? null : poziom(v[k]));
      const plyn = !!r && (v.A > 0 || v.B > 0);
      const pack = s.bat === '1' ? bateria(165, 157, true) : bateria(120, 157, true) + bateria(210, 157, true);
      const dol = s.bat === '1' ? 'M40,170 H159 M235,170 H360' : 'M40,170 H114 M190,170 H204 M280,170 H360';
      let rys;
      if (s.uklad === 'szereg') {
        rys = `<path d="M40,50 H135 M165,50 H235 M265,50 H360 M40,50 V170 M360,50 V170 ${dol}" class="${pr(plyn)}"/>${zarowka(150, 50, lvl('A'), 'A')}${zarowka(250, 50, lvl('B'), 'B')}`;
      } else {
        rys = `<path d="M40,45 H185 M215,45 H360" class="${pr(!!r && v.A > 0)}"/><path d="M40,105 H185 M215,105 H360" class="${pr(!!r && v.B > 0)}"/>
          <path d="M40,45 V170 M360,45 V170 ${dol}" class="${pr(plyn)}"/>${kropka(40, 105)}${kropka(360, 105)}${zarowka(200, 45, lvl('A'), 'A')}${zarowka(200, 105, lvl('B'), 'B')}`;
      }
      const stan = (k) => (s['out' + k] === '1' ? 'wykręcona' : r === null ? 'wkręcona' : OPIS_POZ[poziom(v[k])]);
      box.innerHTML = `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie żarówki połączone ${s.uklad === 'szereg' ? 'szeregowo' : 'równolegle'}, ${s.bat === '1' ? 'jedna bateria' : 'dwie baterie szeregowo'}. Żarówka A: ${stan('A')}. Żarówka B: ${stan('B')}.">
        ${rys}${pack}
      </svg>`;
    }
    function drawElektromagnes() {
      const r = guess ? wynik() : null;
      const dziala = !!r && s.on === '1';
      const lewo = s.rev2 !== '1';
      const n = s.zwoje === '40' ? 20 : 10;
      let zwoje = '';
      for (let k = 0; k < n; k++) { const x = 140 + (k * 120) / (n - 1); zwoje += `<path d="M${x.toFixed(1)},58 L${(x + 6).toFixed(1)},82" class="ln s2 sw"/>`; }
      let pack, l, p2;
      if (s.bat2 === '1') { [l, p2] = konce(175, lewo); pack = bateria(175, 167, lewo); }
      else { const [l1, p1] = konce(160, lewo), [l2, pp] = konce(240, lewo); l = l1; p2 = pp; pack = bateria(160, 167, lewo) + bateria(240, 167, lewo) + `<path d="M${p1},180 H${l2}" class="${pr(dziala)}"/>`; }
      const wl = s.on === '1' ? '<path d="M330,180 H356" class="ln sw"/>' : '<path d="M330,180 L352,162" class="ln sw"/>';
      // igła kompasu: bez prądu – na północ (w górę); główka gwoździa (po prawej od kompasu) N → igła N od niej, S → do niej
      const glowaN = lewo; // przy zwykłym podłączeniu główka gwoździa jest biegunem N (umownie)
      const kat = !dziala ? 0 : glowaN ? -90 : 90; // stopnie od północy, zgodnie z ruchem wskazówek zegara
      const rad = (kat * Math.PI) / 180, cx = 55, cy = 70;
      const pt = (d, dk) => [(cx + d * Math.sin(rad + dk)).toFixed(1), (cy - d * Math.cos(rad + dk)).toFixed(1)];
      const [nx, ny] = pt(20, 0), [sx, sy] = pt(20, Math.PI), [ax, ay] = pt(5, Math.PI / 2), [bx, by] = pt(5, -Math.PI / 2);
      const igla = `<path d="M${nx},${ny} L${ax},${ay} L${bx},${by} z" class="t2"/><path d="M${sx},${sy} L${ax},${ay} L${bx},${by} z" class="bg ln"/>`;
      const F = sila(), ile = dziala ? 3 * F : 0;
      let klips = '';
      for (let k = 0; k < ile; k++) klips += `<rect x="${96 + Math.floor(k / 6) * 20}" y="${96 + (k % 6) * 10}" width="14" height="6" rx="3" class="ln s1"/>`;
      const bieguny = dziala ? `<g class="tx-b" text-anchor="middle"><text x="114" y="44">${glowaN ? 'N' : 'S'}</text><text x="302" y="54">${glowaN ? 'S' : 'N'}</text></g>` : '';
      const podpis = r ? `<text x="20" y="218" class="tx-s">${dziala ? `podniósł ${spinacze(ile)} – przykład z modelu` : 'prąd nie płynie – spinacze odpadają'}</text>` : '';
      box.innerHTML = `<svg viewBox="0 0 400 225" role="img" aria-label="Elektromagnes: gwóźdź, ${s.zwoje} zwojów drutu, ${s.bat2 === '1' ? 'jedna bateria' : 'dwie baterie szeregowo'}${s.rev2 === '1' ? ' odwrócone' : ''}, wyłącznik ${s.on === '1' ? 'włączony' : 'wyłączony'}.${r ? (dziala ? ` Wynik: podniósł ${spinacze(ile)} (przykład z modelu); główka gwoździa to biegun ${glowaN ? 'N' : 'S'}, igła kompasu ${glowaN ? 'odwraca się od niej' : 'zwraca się do niej'}.` : ' Wynik: prąd nie płynie, elektromagnes nie przyciąga.') : ''}">
        <circle cx="${cx}" cy="${cy}" r="26" class="bg ln sw"/><text x="${cx}" y="${cy - 30}" class="tx-s" text-anchor="middle">kompas</text>${igla}
        <rect x="118" y="62" width="170" height="16" class="bg ln"/><path d="M288,62 L310,70 L288,78 z" class="bg ln"/><rect x="110" y="52" width="8" height="36" class="bg ln sw"/>
        ${zwoje}
        <path d="M140,82 V180 H${l} M${p2},180 H330 M356,180 H380 V100 H266 V82" class="${pr(dziala)}"/>${wl}${kropka(330, 180)}${kropka(356, 180)}
        ${pack}${klips}${bieguny}${podpis}
      </svg>`;
    }
    const draw = () => (tryb === 'baterie' ? drawBaterie() : tryb === 'zarowki' ? drawZarowki() : drawElektromagnes());

    // --- sterowanie ---
    function renderLog() {
      const L = logs[tryb];
      const head = { baterie: '<th>Baterie</th><th>Odbiornik</th>', zarowki: '<th>Połączenie</th><th>Ustawienie</th>', elektromagnes: '<th>Zwoje</th><th>Baterie</th>' }[tryb];
      el.querySelector('.mlog').innerHTML = L.length ? `<table class="worksheet"><tr>${head}<th>Przewidziałem</th><th>Wynik</th></tr>
        ${L.slice(-6).map((t) => `<tr><td>${t.a}</td><td>${t.b}</td><td>${t.g}</td><td>${t.r}${t.ok ? ' ✅' : ''}</td></tr>`).join('')}</table>` : '';
    }
    function renderGuess() {
      const q = pytanie();
      if (!q) {
        gbox.innerHTML = '<span>Obie żarówki wykręcone – wkręć choć jedną.</span>';
        return;
      }
      gbox.innerHTML = `<span>${q}</span>${opcje().map(([k, t]) => `<button class="btn" data-g="${k}" aria-pressed="false">${t}</button>`).join('')}`;
      gbox.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => {
        if (guess) return; // najpierw przewidywanie, potem wynik – zmień ustawienie, żeby przewidzieć jeszcze raz
        guess = b.dataset.g;
        const r = wynik();
        const etyk = Object.fromEntries(opcje());
        const ok = guess === r;
        const a = { baterie: `${NAZWA[s.zrodlo]}${s.rev === '1' ? ' 🔄' : ''}`, zarowki: s.uklad === 'szereg' ? 'szeregowo' : 'równolegle', elektromagnes: s.zwoje }[tryb];
        const bb = { baterie: s.odb === 'z' ? '💡' : '⚙️', zarowki: `${s.bat === '1' ? '1 bat.' : '2 bat.'}${s.outA === '1' ? ', bez A' : ''}${s.outB === '1' ? ', bez B' : ''}`, elektromagnes: `${s.bat2}${s.rev2 === '1' ? ' 🔄' : ''}${s.on === '0' ? ' ⭕' : ''}` }[tryb];
        const pref = tryb === 'zarowki' ? `${cel()}: ` : '';
        logs[tryb].push({ a, b: bb, g: pref + etyk[guess], r: pref + etyk[r], ok });
        out.innerHTML = `${ok ? '✅ Dobrze przewidziane!' : '🤔 Wyszło inaczej – to też odkrycie!'} ${dlaczego()} <span class="muted">Zmień ustawienie i przewidź jeszcze raz. ${tryb === 'elektromagnes' ? 'Model uproszczony – liczby spinaczy to przykład.' : 'Model uproszczony: idealne baterie i jednakowe żarówki.'}</span>`;
        gbox.querySelectorAll('[data-g]').forEach((x) => { x.disabled = true; x.setAttribute('aria-pressed', String(x === b)); });
        b.classList.add('primary');
        draw();
        renderLog();
        out.focus(); // przyciski przewidywania są już nieaktywne – fokus na wynik, żeby nie spadł na stronę
      }));
    }
    function reset() {
      guess = null;
      out.innerHTML = pytanie() ? 'Ustaw obwód, a potem przewidź wynik.' : '';
      renderGuess();
      draw();
    }
    function renderSet() {
      setBox.innerHTML = SET[tryb].map(([label, key, opts]) => `<div class="controls" role="group" aria-label="${label}"><span>${label}:</span>${opts.map(([v, t]) => `<button class="btn${s[key] === v ? ' primary' : ''}" data-k="${key}" data-v="${v}" aria-pressed="${s[key] === v}">${t}</button>`).join('')}</div>`).join('');
      setBox.querySelectorAll('[data-k]').forEach((b) => (b.onclick = () => {
        s[b.dataset.k] = b.dataset.v;
        renderSet();
        reset();
        const nb = setBox.querySelector(`[data-k="${b.dataset.k}"][data-v="${b.dataset.v}"]`);
        if (nb) nb.focus(); // po przerysowaniu fokus zostaje na tym samym przycisku (klawiatura)
      }));
    }
    function setTryb(t) {
      tryb = t;
      el.querySelectorAll('[data-t]').forEach((b) => { b.classList.toggle('primary', b.dataset.t === t); b.setAttribute('aria-pressed', String(b.dataset.t === t)); });
      renderSet();
      renderLog();
      reset();
    }
    el.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => setTryb(b.dataset.t)));
    setTryb(tryb);
  }

  return { pitagoras, procent, kostka, kolo, zegar, tabliczka, monety, kalendarz, magnesy, rama, czujniki, polsumator, soroban, obwody };
})();
