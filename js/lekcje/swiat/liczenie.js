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
