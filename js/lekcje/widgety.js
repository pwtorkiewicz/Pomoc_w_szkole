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

  return { pitagoras, procent, kostka, kolo };
})();
