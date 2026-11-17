/* Lekcje – 🌍 Świat, liczenie po świecie. Klucz: 'liczenie/tabliczka-12'. Format: docs/LEKCJE.md
 * Treści oparte na dziale z js/dane/swiat/liczenie.js (ścieżka poza podstawą, źródła w polu basis). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['liczenie/tabliczka-12'] = [
  {
    title: 'Dzieci w Anglii liczą do 12 × 12',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Flaga Anglii. Dzieci w wieku 8–9 lat uczą się tabliczki mnożenia do 12 razy 12. Sprawdzian: 25 pytań, po 6 sekund na pytanie">
      <rect x="20" y="16" width="90" height="60" class="fl-w"/>
      <rect x="59" y="16" width="12" height="60" class="fl-r"/>
      <rect x="20" y="40" width="90" height="12" class="fl-r"/>
      <rect x="20" y="16" width="90" height="60" class="ln" fill="none"/>
      <text x="130" y="44" class="tx-b">Anglia</text>
      <text x="130" y="68" class="tx">dzieci 8–9 lat</text>
      <rect x="20" y="96" width="170" height="90" rx="14" class="f1 s1 sw"/>
      <text x="105" y="136" class="tx-b" text-anchor="middle">tabliczka</text>
      <text x="105" y="166" class="tx-b" text-anchor="middle">do 12 × 12</text>
      <rect x="210" y="96" width="170" height="90" rx="14" class="f4 s4 sw"/>
      <text x="295" y="136" class="tx-b" text-anchor="middle">⏱️ 25 pytań</text>
      <text x="295" y="166" class="tx-b" text-anchor="middle">po 6 sekund</text>
    </svg>`,
    text: `<p>W Anglii dzieci w wieku 8–9 lat uczą się tabliczki mnożenia <b>aż do 12 × 12</b>.</p>
      <p>W czerwcu mają sprawdzian na komputerze: <b>25 pytań</b>, po <b>6 sekund</b> na każde.</p>
      <p>Znasz tabliczkę do 10 × 10? Nauczysz się sztuczek na <b>razy 11</b> i <b>razy 12</b>!</p>`,
    remember: 'Tabliczka w Anglii: aż do 12 × 12.',
    hook: '6 sekund to tyle, co powiedzieć: „raz, dwa, trzy, cztery, pięć, sześć”. ⏱️',
  },
  {
    title: 'Razy 11 – cyfra dwa razy',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="11 razy 2 równa się 22. 11 razy 5 równa się 55. 11 razy 7 równa się 77. Wynik to ta sama cyfra napisana dwa razy">
      <rect x="20" y="14" width="360" height="48" rx="12" class="f1"/>
      <rect x="20" y="72" width="360" height="48" rx="12" class="f1"/>
      <rect x="20" y="130" width="360" height="48" rx="12" class="f1"/>
      <g class="tx-b" style="font-size:26px">
        <text x="50" y="47">11 × 2 =</text><text x="50" y="105">11 × 5 =</text><text x="50" y="163">11 × 7 =</text>
      </g>
      <g class="tx-b t2" style="font-size:34px">
        <text x="250" y="50">2 2</text><text x="250" y="108">5 5</text><text x="250" y="166">7 7</text>
      </g>
    </svg>`,
    text: `<p>Mnożysz przez 11 liczbę od 1 do 9? Napisz tę cyfrę <b>dwa razy</b>!</p>
      <p>11 × 3 = 33, 11 × 8 = 88</p>`,
    remember: '11 × 4 = 44, 11 × 6 = 66, 11 × 9 = 99.',
    hook: 'Razy 11 to „bliźniaki”: dwie takie same cyfry. 👯',
    check: { q: '11 × 6 = ?', options: ['66', '61', '17'], answer: 0, explain: 'Cyfra 6 dwa razy: 11 × 6 = 66.' },
  },
  {
    title: 'Razy 12 – czyli 10 i 2',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="4 rzędy po 12 kropek. W każdym rzędzie 10 niebieskich i 2 pomarańczowe. Niebieskich jest 10 razy 4, czyli 40. Pomarańczowych 2 razy 4, czyli 8. Razem 48">
      <g class="f1 s1"><circle cx="40" cy="40" r="9"/><circle cx="66" cy="40" r="9"/><circle cx="92" cy="40" r="9"/><circle cx="118" cy="40" r="9"/><circle cx="144" cy="40" r="9"/><circle cx="170" cy="40" r="9"/><circle cx="196" cy="40" r="9"/><circle cx="222" cy="40" r="9"/><circle cx="248" cy="40" r="9"/><circle cx="274" cy="40" r="9"/><circle cx="40" cy="66" r="9"/><circle cx="66" cy="66" r="9"/><circle cx="92" cy="66" r="9"/><circle cx="118" cy="66" r="9"/><circle cx="144" cy="66" r="9"/><circle cx="170" cy="66" r="9"/><circle cx="196" cy="66" r="9"/><circle cx="222" cy="66" r="9"/><circle cx="248" cy="66" r="9"/><circle cx="274" cy="66" r="9"/><circle cx="40" cy="92" r="9"/><circle cx="66" cy="92" r="9"/><circle cx="92" cy="92" r="9"/><circle cx="118" cy="92" r="9"/><circle cx="144" cy="92" r="9"/><circle cx="170" cy="92" r="9"/><circle cx="196" cy="92" r="9"/><circle cx="222" cy="92" r="9"/><circle cx="248" cy="92" r="9"/><circle cx="274" cy="92" r="9"/><circle cx="40" cy="118" r="9"/><circle cx="66" cy="118" r="9"/><circle cx="92" cy="118" r="9"/><circle cx="118" cy="118" r="9"/><circle cx="144" cy="118" r="9"/><circle cx="170" cy="118" r="9"/><circle cx="196" cy="118" r="9"/><circle cx="222" cy="118" r="9"/><circle cx="248" cy="118" r="9"/><circle cx="274" cy="118" r="9"/></g>
      <g class="f2 s2"><circle cx="310" cy="40" r="9"/><circle cx="336" cy="40" r="9"/><circle cx="310" cy="66" r="9"/><circle cx="336" cy="66" r="9"/><circle cx="310" cy="92" r="9"/><circle cx="336" cy="92" r="9"/><circle cx="310" cy="118" r="9"/><circle cx="336" cy="118" r="9"/></g>
      <text x="157" y="160" class="tx-b t1" text-anchor="middle">10 × 4 = 40</text>
      <text x="323" y="160" class="tx-b t2" text-anchor="middle">2 × 4 = 8</text>
      <text x="200" y="190" class="tx-b" text-anchor="middle">12 × 4 = 40 + 8 = 48</text>
    </svg>`,
    text: `<p>12 to <b>10 i 2</b>. Pomnóż przez 10, potem przez 2 – i dodaj.</p>
      <p>12 × 4 = 40 + 8 = <b>48</b></p>`,
    remember: '12 × liczba = 10 × liczba + 2 × liczba.',
    hook: 'Dwanaście to dziesiątka i dwa paluszki. ✋✋ + ✌️',
    check: { q: '12 × 3 = ?', say: '12 razy 3. Pomyśl: 10 razy 3 i 2 razy 3.', options: ['36', '33', '15'], answer: 0, explain: '10 × 3 = 30, 2 × 3 = 6. Razem 30 + 6 = 36.' },
  },
  {
    title: 'Dwanaście dookoła nas',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Wytłoczka z 12 jajkami w dwóch rzędach po 6 – to tuzin. Kalendarz: rok ma 12 miesięcy. Zegar: 12 godzin na tarczy">
      <rect x="20" y="60" width="164" height="76" rx="12" class="f4 s4 sw"/>
      <g class="bg ln"><ellipse cx="42" cy="82" rx="10" ry="13"/><ellipse cx="68" cy="82" rx="10" ry="13"/><ellipse cx="94" cy="82" rx="10" ry="13"/><ellipse cx="120" cy="82" rx="10" ry="13"/><ellipse cx="146" cy="82" rx="10" ry="13"/><ellipse cx="172" cy="82" rx="10" ry="13"/><ellipse cx="42" cy="112" rx="10" ry="13"/><ellipse cx="68" cy="112" rx="10" ry="13"/><ellipse cx="94" cy="112" rx="10" ry="13"/><ellipse cx="120" cy="112" rx="10" ry="13"/><ellipse cx="146" cy="112" rx="10" ry="13"/><ellipse cx="172" cy="112" rx="10" ry="13"/></g>
      <text x="102" y="40" class="tx-b" text-anchor="middle">tuzin = 12</text>
      <text x="102" y="168" class="tx" text-anchor="middle">2 × 6 = 12</text>
      <text x="260" y="104" class="tx" text-anchor="middle" style="font-size:40px">📅</text>
      <text x="350" y="104" class="tx" text-anchor="middle" style="font-size:40px">🕛</text>
      <text x="260" y="146" class="tx-s" text-anchor="middle">12 miesięcy</text>
      <text x="350" y="146" class="tx-s" text-anchor="middle">12 godzin</text>
    </svg>`,
    text: `<p><b>Tuzin</b> to 12 sztuk – np. tuzin jajek.</p>
      <p>Rok ma <b>12 miesięcy</b>, a na tarczy zegara jest <b>12 godzin</b>.</p>`,
    remember: 'Tuzin = 12.',
    hook: 'Tuzin jajek: 2 rzędy po 6. 🥚',
    check: { q: 'Ile jajek jest w 2 tuzinach?', options: ['24', '12', '22'], answer: 0, explain: 'Tuzin to 12. Dwa tuziny: 12 × 2 = 24.' },
  },
];

// --- Soroban – japońskie liczydło (dział 'soroban'; źródła w polu basis działu) ---
// Rysunek sorobanu: cyfry od lewej; na pręcie 1 koralik nad belką (5) i 4 pod belką (po 1), liczy się koralik przy belce.
// x, y, s – przesunięcie i skala; podpisy – teksty pod prętami (tx-s, bez skali) albo null; liczba – duży podpis pod rysunkiem.
function sorobanRys(x, y, s, cyfry, podpisy, liczba) {
  const n = cyfry.length;
  const W = 30 + n * 90;
  const r = (v) => Math.round(v * 10) / 10;
  const X = (v) => r(x + v * s);
  const Y = (v) => r(y + v * s);
  const prost = (px, py, w, h, rx, cls) => '<rect x="' + X(px) + '" y="' + Y(py) + '" width="' + r(w * s) + '" height="' + r(h * s) + '" rx="' + r(rx * s) + '" class="' + cls + '"/>';
  const kor = (cx, ky, on) => prost(cx - 29, ky, 58, 22, 11, (on ? 'f2 s2' : 'f1 s1') + ' sw');
  let g = prost(8, 8, W - 16, 208, 6, 'ln sw');
  cyfry.forEach((c, i) => {
    const cx = 60 + i * 90;
    g += '<line x1="' + X(cx) + '" y1="' + Y(10) + '" x2="' + X(cx) + '" y2="' + Y(214) + '" class="ln"/>' + kor(cx, c >= 5 ? 57 : 12, c >= 5);
    for (let k = 0; k < 4; k++) g += kor(cx, k < c % 5 ? 92 + k * 23 : 118 + k * 23, k < c % 5);
    if (podpisy) g += '<text x="' + X(cx) + '" y="' + r(Y(216) + 18) + '" text-anchor="middle" class="tx-s">' + podpisy[i] + '</text>';
  });
  g += prost(8, 80, W - 16, 10, 0, 'f4 s4 sw');
  if (liczba != null) g += '<text x="' + X(W / 2) + '" y="' + r(Y(216) + (podpisy ? 42 : 24)) + '" text-anchor="middle" class="tx-b">' + liczba + '</text>';
  return g;
}

window.LESSONS['liczenie/soroban'] = [
  {
    title: 'Soroban – japońskie liczydło',
    svg: '<svg viewBox="0 0 400 250" role="img" aria-label="Soroban z trzema prętami: setki, dziesiątki, jedności. Na górze ramki koraliki nad belką, każdy wart 5. W poprzek – belka. Pod belką po 4 koraliki, każdy wart 1. Żaden koralik nie dotyka belki, więc soroban pokazuje 0.">' +
      sorobanRys(4, 4, 0.85, [0, 0, 0], ['setki', 'dziesiątki', 'jedności'], null) +
      '<text x="266" y="24" class="tx">← koralik = 5</text>' +
      '<text x="266" y="79" class="tx-b">← belka</text>' +
      '<text x="266" y="150" class="tx">← 4 koraliki,</text>' +
      '<text x="290" y="172" class="tx">każdy = 1</text>' +
      '</svg>',
    text: `<p>Soroban to <b>japońskie liczydło</b>. W Japonii używa się go od dawna.</p>
      <p>Ma ramkę, pręty i <b>belkę</b>. Koralik <b>nad belką</b> jest wart <b>5</b>. Każdy koralik <b>pod belką</b> – <b>1</b>.</p>
      <p>Japońskie dzieci uczą się go na matematyce w 3. i 4. klasie.</p>`,
    remember: 'Nad belką: 5. Pod belką: po 1.',
    hook: '🖐️ Górny koralik to cała dłoń – 5 palców. Dolne to pojedyncze palce.',
    check: { q: 'Ile jest wart koralik nad belką?', options: ['5', '1', '10'], answer: 0, explain: 'Koralik nad belką jest wart 5, a każdy pod belką – 1.' },
  },
  {
    title: 'Liczy się to, co dotyka belki',
    svg: '<svg viewBox="0 0 400 250" role="img" aria-label="Cztery pręty sorobanu. Pierwszy: przy belce 2 dolne koraliki – to 2. Drugi: 4 dolne – to 4. Trzeci: górny koralik i 2 dolne – to 7. Czwarty: górny i 4 dolne – to 9. Koraliki przy belce są pomarańczowe.">' +
      sorobanRys(5, 4, 1, [2, 4, 7, 9], null, null) +
      '<g class="tx-b" text-anchor="middle"><text x="65" y="244">2</text><text x="155" y="244">4</text><text x="245" y="244">5 + 2 = 7</text><text x="335" y="244">5 + 4 = 9</text></g>' +
      '</svg>',
    text: `<p>Koralik się liczy, gdy <b>dotyka belki</b>. Te przy ramce się nie liczą.</p>
      <p><b>7</b> to piątka i 2 jedynki. <b>9</b> to piątka i 4 jedynki – więcej na jednym pręcie się nie zmieści.</p>`,
    remember: 'Na jednym pręcie: od 0 do 9 (5 + 4 = 9).',
    hook: 'Przy belce – w grze. Przy ramce – na ławce. ⚽',
    check: { q: 'Jak pokazać 6 na jednym pręcie?', options: ['piątka i 1 jedynka przy belce', '6 jedynek przy belce', 'piątka i 6 jedynek przy belce'], answer: 0, explain: '6 = 5 + 1. Pod belką są tylko 4 koraliki, więc 6 jedynek nie ma.' },
  },
  {
    title: 'Każdy pręt to jedno miejsce',
    widget: { type: 'soroban', tryb: 'ustaw', cel: 305 },
    text: `<p>Soroban ma dużo prętów. Dlatego najpierw umawiasz się, który pręt to <b>jedności</b>. Na lewo są <b>dziesiątki</b>, potem <b>setki</b> – jak cyfry w liczbie.</p>
      <p>Koraliki są wszędzie takie same. Ale na pręcie setek każdy dolny koralik jest wart <b>100</b>! Pusty pręt to <b>0</b>.</p>
      <p>Ustaw <b>305</b>. Potem kliknij „Nowa liczba”.</p>`,
    remember: 'Każdy pręt to jedno miejsce: setki, dziesiątki, jedności. Pusty pręt to 0.',
    hook: 'Tak samo jak w zeszycie: 3 setki, 0 dziesiątek, 5 jedności. ✏️',
  },
  {
    title: 'Brakuje jedynek? Weź piątkę!',
    svg: '<svg viewBox="0 0 400 230" role="img" aria-label="Działanie 4 dodać 3 na jednym pręcie. Najpierw 4: cztery dolne koraliki przy belce. Dokładamy piątkę: górny koralik do belki – jest 9. Zabieramy 2 dolne koraliki – zostaje 7.">' +
      sorobanRys(14, 6, 0.8, [4], null, '4') +
      sorobanRys(152, 6, 0.8, [9], null, '9') +
      sorobanRys(290, 6, 0.8, [7], null, '7') +
      '<g class="tx-b t2" text-anchor="middle"><text x="129" y="96">+ 5</text><text x="267" y="96">− 2</text></g>' +
      '</svg>',
    text: `<p><b>4 + 3</b>: przy belce są już wszystkie 4 jedynki. Trzech nie dołożysz!</p>
      <p>Dołóż <b>piątkę</b> i zabierz <b>2 jedynki</b>. Liczysz tak: 4 + 5 − 2 = 7. W Japonii tak liczą w 3. klasie.</p>
      <p>Odejmowanie odwrotnie. <b>6 − 4</b>: zabierz piątkę i dołóż 1 jedynkę. Wynik to 2.</p>`,
    remember: 'Dodać 3 to dodać 5 i zabrać 2.',
    hook: '3 i 2 to razem 5 – „przyjaciele piątki”. 🤝',
    check: { q: 'Na pręcie jest 3. Jak dodać 4?', options: ['dołóż 5, zabierz 1', 'dołóż 4 jedynki', 'dołóż 5, zabierz 4'], answer: 0, explain: '3 + 5 − 1 = 7. Czterech jedynek nie dołożysz – wolna jest tylko 1.' },
  },
  {
    title: 'Brakuje miejsca? Weź dziesiątkę!',
    svg: '<svg viewBox="0 0 400 232" role="img" aria-label="Działanie 8 dodać 9 na dwóch prętach: dziesiątki i jedności. Po lewej 8: na pręcie jedności piątka i 3 jedynki przy belce. Strzałka: dołóż 10, czyli jeden koralik na pręcie dziesiątek, i zabierz 1 jedynkę. Po prawej 17: na pręcie dziesiątek 1 koralik, na pręcie jedności piątka i 2 jedynki.">' +
      '<defs><marker id="a-sw-sb-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>' +
      sorobanRys(4, 6, 0.8, [0, 8], ['dziesiątki', 'jedności'], '8') +
      sorobanRys(228, 6, 0.8, [1, 7], ['dziesiątki', 'jedności'], '17') +
      '<path d="M178,100 H222" class="ln sw" marker-end="url(#a-sw-sb-5)"/>' +
      '<g class="tx-b t2" text-anchor="middle"><text x="200" y="86">+ 10</text><text x="200" y="130">− 1</text></g>' +
      '</svg>',
    text: `<p><b>8 + 9</b>: na pręcie jedności nie ma miejsca na 9.</p>
      <p>Dołóż <b>1 koralik na pręcie dziesiątek</b> – to 10. Potem zabierz <b>1 jedynkę</b>. Liczysz tak: 8 + 10 − 1 = 17.</p>
      <p>I odwrotnie. <b>15 − 7</b>: zabierz 10 i dołóż 3 jedynki. Wynik to 8.</p>`,
    remember: 'Dodać 9 to dodać 10 i zabrać 1.',
    hook: '9 i 1 to razem 10 – „przyjaciele dziesiątki”. 🔟',
    check: { q: 'Jak policzyć 15 − 7 na sorobanie?', options: ['zabierz 10, dołóż 3', 'zabierz 7 jedynek', 'zabierz 10, dołóż 7'], answer: 0, explain: '15 − 10 + 3 = 8. Siedmiu jedynek nie zabierzesz – na pręcie jedności jest tylko piątka.' },
  },
  {
    title: 'Teraz ty! I co zapamiętać',
    widget: { type: 'soroban', tryb: 'dodaj', a: 8, b: 7 },
    text: `<p>Dodaj <b>8 + 7</b> na sorobanie. Utkniesz? Kliknij „💡 Podpowiedź”.</p>
      <ul><li>Czytaj od lewej: setki, dziesiątki, jedności.</li>
      <li>Liczy się tylko koralik <b>przy belce</b> – nie zostawiaj go w połowie drogi.</li>
      <li>Brakuje jedynek – weź piątkę. Brakuje miejsca – weź dziesiątkę.</li></ul>`,
    remember: 'Piątka i dziesiątka to twoi pomocnicy.',
  },
];
