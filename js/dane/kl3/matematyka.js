/* Edukacja matematyczna – klasa 3 (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – edukacja wczesnoszkolna, II. Edukacja matematyczna).
 * Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), II. Edukacja matematyczna';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.';

  // Zegar ze wskazówkami (rysunek do pytań)
  function clock(h, m) {
    const cx = 100, cy = 100, R = 84;
    const pt = (deg, r) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)].map((v) => Math.round(v * 10) / 10);
    let marks = '';
    for (let k = 1; k <= 12; k++) {
      const [x, y] = pt(k * 30, R - 20);
      const [x1, y1] = pt(k * 30, R - 6);
      const [x2, y2] = pt(k * 30, R);
      marks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ln"/><text x="${x}" y="${y + 6}" class="tx-b" text-anchor="middle">${k}</text>`;
    }
    const [hx, hy] = pt(((h % 12) + m / 60) * 30, 44);
    const [mx, my] = pt(m * 6, 68);
    return `<svg viewBox="0 0 300 200" role="img" aria-label="Zegar ze wskazówkami">
      <circle cx="${cx + 50}" cy="${cy}" r="${R}" class="bg ln sw"/>
      <g transform="translate(50 0)">${marks}
      <line x1="${cx}" y1="${cy}" x2="${hx}" y2="${hy}" class="ln s2" stroke-width="7" stroke-linecap="round"/>
      <line x1="${cx}" y1="${cy}" x2="${mx}" y2="${my}" class="ln s1" stroke-width="4" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="5" class="t5"/></g>
    </svg>`;
  }

  const SVG_KLOCKI = `<svg viewBox="0 0 400 150" role="img" aria-label="Klocki: 2 duże kwadraty po 100, 3 paski po 10 i 4 małe kostki po 1">
      <rect x="10" y="20" width="90" height="90" rx="4" class="f1 s1 sw"/>
      <rect x="110" y="20" width="90" height="90" rx="4" class="f1 s1 sw"/>
      <rect x="220" y="20" width="18" height="90" rx="3" class="f3 s3 sw"/>
      <rect x="246" y="20" width="18" height="90" rx="3" class="f3 s3 sw"/>
      <rect x="272" y="20" width="18" height="90" rx="3" class="f3 s3 sw"/>
      <rect x="310" y="92" width="18" height="18" rx="3" class="f2 s2 sw"/>
      <rect x="334" y="92" width="18" height="18" rx="3" class="f2 s2 sw"/>
      <rect x="358" y="92" width="18" height="18" rx="3" class="f2 s2 sw"/>
      <rect x="310" y="68" width="18" height="18" rx="3" class="f2 s2 sw"/>
      <text x="105" y="136" class="tx-s" text-anchor="middle">setki (po 100)</text>
      <text x="255" y="136" class="tx-s" text-anchor="middle">dziesiątki</text>
      <text x="343" y="136" class="tx-s" text-anchor="middle">jedności</text>
    </svg>`;

  const SVG_KROPKI = `<svg viewBox="0 0 300 170" role="img" aria-label="4 rzędy po 5 kropek">
      ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => `<circle cx="${50 + c * 50}" cy="${25 + r * 40}" r="14" class="${r % 2 ? 'f2 s2' : 'f1 s1'} sw"/>`).join('')).join('')}
    </svg>`;

  const SVG_CIASTKA = `<svg viewBox="0 0 400 140" role="img" aria-label="3 talerze, na każdym 4 ciastka">
      ${[0, 1, 2].map((k) => `<ellipse cx="${70 + k * 130}" cy="72" rx="58" ry="46" class="f4 s4 sw"/>
        <text x="${70 + k * 130}" y="66" class="tx-b" text-anchor="middle" style="font-size:24px">🍪🍪</text>
        <text x="${70 + k * 130}" y="98" class="tx-b" text-anchor="middle" style="font-size:24px">🍪🍪</text>`).join('')}
    </svg>`;

  const SVG_LINIE = `<svg viewBox="0 0 360 170" role="img" aria-label="Trzy linie: a pionowa, b pozioma, c ukośna">
      <line x1="50" y1="20" x2="50" y2="140" class="ln s1 sw"/>
      <line x1="110" y1="80" x2="210" y2="80" class="ln s2 sw"/>
      <line x1="250" y1="140" x2="340" y2="30" class="ln s3 sw"/>
      <text x="50" y="164" class="tx-b t1" text-anchor="middle">a</text>
      <text x="160" y="110" class="tx-b t2" text-anchor="middle">b</text>
      <text x="300" y="164" class="tx-b t3" text-anchor="middle">c</text>
    </svg>`;

  const SVG_FIGURY = `<svg viewBox="0 0 400 140" role="img" aria-label="Figury: trójkąt, kwadrat, koło, trójkąt, prostokąt">
      <polygon points="15,110 75,110 45,40" class="f2 s2 sw"/>
      <rect x="95" y="50" width="60" height="60" class="f1 s1 sw"/>
      <circle cx="205" cy="80" r="32" class="f3 s3 sw"/>
      <polygon points="255,110 315,110 255,45" class="f2 s2 sw"/>
      <rect x="330" y="40" width="60" height="70" class="f5 s5 sw"/>
    </svg>`;

  const SVG_TERMOMETR = `<svg viewBox="0 0 300 220" role="img" aria-label="Termometr: słupek sięga do kreski 20 stopni">
      <rect x="130" y="10" width="28" height="170" rx="14" class="bg ln sw"/>
      <circle cx="144" cy="190" r="22" class="f2 s2 sw"/>
      <rect x="138" y="75" width="12" height="110" class="t2"/>
      ${[0, 1, 2, 3, 4, 5, 6].map((k) => `<line x1="160" y1="${165 - k * 22.5}" x2="${k % 2 ? 170 : 178}" y2="${165 - k * 22.5}" class="ln"/>`).join('')}
      <text x="186" y="170" class="tx">0</text>
      <text x="186" y="125" class="tx">10</text>
      <text x="186" y="80" class="tx">20</text>
      <text x="186" y="35" class="tx">30</text>
      <text x="70" y="100" class="tx-b" text-anchor="middle">°C</text>
    </svg>`;

  window.SUBJECTS.push({
    id: 'matematyka',
    name: 'Edukacja matematyczna',
    icon: '🔢',
    color: '#e0803a',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'liczby',
        name: 'Liczby do 1000 i dalej',
        basis: `${PP}, 2. Rozumienie liczb i ich własności, pkt 1–4 (liczenie w przód i wstecz po 1, 2, 10; liczby do 1000 i wybrane do miliona, np. 1 500, 10 000; jedności, dziesiątki, setki; liczebniki porządkowe; porównywanie, znaki <, =, >, „o 7 większa”).${KONIEC}`,
        theory: `
          <h3>Cyfry i liczby</h3>
          <p>Mamy 10 cyfr: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Z cyfr układamy liczby.</p>
          <h3>Setki, dziesiątki, jedności</h3>
          <table><tr><th>setki</th><th>dziesiątki</th><th>jedności</th></tr><tr><td>3</td><td>4</td><td>5</td></tr></table>
          <p><b>345</b> = 3 setki, 4 dziesiątki i 5 jedności = 300 + 40 + 5.</p>
          <ul><li>10 jedności = 1 dziesiątka</li><li>10 dziesiątek = 1 setka (100)</li><li>10 setek = 1 tysiąc (1 000)</li></ul>
          <h3>Duże liczby</h3>
          <p>1 500 – tysiąc pięćset · 10 000 – dziesięć tysięcy · 100 000 – sto tysięcy · 1 000 000 – milion.</p>
          <h3>Porównywanie</h3>
          <p><b>&lt;</b> mniejsze niż · <b>&gt;</b> większe niż · <b>=</b> równe. Np. 356 &lt; 365.</p>
          <p class="tip">Dzióbek znaku zawsze patrzy na mniejszą liczbę: 7 &gt; 3.</p>
          <p>Liczba <b>o 7 większa</b> od 45 to 45 + 7 = 52. Liczba <b>o 10 mniejsza</b> od 300 to 300 − 10 = 290.</p>
          <h3>Liczby porządkowe</h3>
          <p>Mówią, które coś jest w kolejce: pierwszy, drugi, trzeci, czwarty, piąty…</p>`,
        infographicNote: '10 jedności to dziesiątka, 10 dziesiątek to setka.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🧱 345 = 300 + 40 + 5', text: '3 setki, 4 dziesiątki, 5 jedności' },
          items: [
            { icon: '🔢', kolor: 1, title: '10 cyfr', text: '0 1 2 3 4 5 6 7 8 9' },
            { icon: '💯', kolor: 1, title: 'Setka', text: '10 dziesiątek = 100' },
            { icon: '📦', kolor: 1, title: 'Tysiąc', text: '10 setek = 1 000' },
            { icon: '🚀', kolor: 1, title: 'Milion', text: '1 000 000' },
            { icon: '➕', kolor: 3, title: 'O 7 większa', text: '45 + 7 = 52' },
            { icon: '➖', kolor: 2, title: 'O 10 mniejsza', text: '300 − 10 = 290' },
          ],
          bottom: { kolor: 5, title: '🐤 Dzióbek patrzy na mniejszą', text: '7 > 3\n356 < 365' },
          label: '345 to 300 plus 40 plus 5: 3 setki, 4 dziesiątki, 5 jedności. 10 cyfr: od 0 do 9. Setka: 10 dziesiątek to 100. Tysiąc: 10 setek to 1 000. Milion: 1 000 000. Liczba o 7 większa od 45: 45 plus 7 równa się 52. Liczba o 10 mniejsza od 300: 300 minus 10 równa się 290. Dzióbek znaku patrzy na mniejszą liczbę: 7 większe niż 3, 356 mniejsze niż 365.',
        },
        flashcards: [
          ['Ile cyfr mamy?', '10 cyfr: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9'],
          ['10 jedności to…', '1 dziesiątka'],
          ['10 dziesiątek to…', '1 setka, czyli 100'],
          ['10 setek to…', '1 tysiąc, czyli 1 000'],
          ['345 = ?', '3 setki + 4 dziesiątki + 5 jedności'],
          ['Znak <', 'mniejsze niż: 3 < 7'],
          ['Znak >', 'większe niż: 9 > 4'],
          ['Liczba o 7 większa od 20', '20 + 7 = 27'],
          ['Liczba o 10 mniejsza od 50', '50 − 10 = 40'],
          ['Milion', '1 000 000 – tysiąc tysięcy'],
        ],
        questions: [
          { id: 'rijje0', q: 'W liczbie 472 cyfra 7 oznacza…', options: ['7 dziesiątek', '7 setek', '7 jedności'], answer: 0, explain: '472 = 4 setki, 7 dziesiątek i 2 jedności.' },
          { id: 'hjlqqe', q: 'Jaka liczba ma 5 setek, 0 dziesiątek i 8 jedności?', options: ['508', '58', '580', '805'], answer: 0, explain: '500 + 0 + 8 = 508. Zero trzyma miejsce dziesiątek.' },
          { id: 'hyki76', q: 'Jaką liczbę pokazują klocki?', svg: SVG_KLOCKI, say: 'Jaką liczbę pokazują klocki? Są 2 duże kwadraty po 100, 3 paski po 10 i 4 małe kostki.', options: ['234', '324', '243', '9'], answer: 0, explain: '2 setki, 3 dziesiątki i 4 jedności: 200 + 30 + 4 = 234.' },
          { id: 'l7dcdj', q: 'Która liczba jest największa?', options: ['709', '790', '97', '779'], answer: 1, explain: 'Porównaj setki: 7, 7, 0, 7. Potem dziesiątki: 790 ma 9 dziesiątek – najwięcej.' },
          { id: 'cgcr7w', q: 'Jaki znak wstawisz? 356 … 365', say: 'Jaki znak wstawisz między 356 a 365?', options: ['<', '>', '='], sayOptions: ['mniejsze niż', 'większe niż', 'równa się'], answer: 0, explain: 'Setki są równe. 5 dziesiątek to mniej niż 6 dziesiątek, więc 356 < 365.' },
          { id: '1k8k5d', q: 'Jaka liczba jest o 7 większa od 45?', options: ['52', '38', '47', '53'], answer: 0, explain: '„O 7 większa” – dodaj: 45 + 7 = 52.' },
          { id: '9auf83', q: 'Jaka liczba jest o 10 mniejsza od 300?', options: ['290', '310', '200', '299'], answer: 0, explain: '„O 10 mniejsza” – odejmij: 300 − 10 = 290.' },
          { id: 'egonsy', q: 'Licz po 10: 40, 50, 60, … Jaka liczba będzie następna?', options: ['70', '61', '80'], answer: 0, explain: 'Co krok dodajesz 10: 60 + 10 = 70.' },
          { id: 'lotslf', q: 'Licz wstecz po 2: 20, 18, 16, … Co dalej?', options: ['14', '15', '12'], answer: 0, explain: 'Co krok odejmujesz 2: 16 − 2 = 14.' },
          { id: 'we5zyx', q: 'Jak zapisać cyframi „tysiąc pięćset”?', options: ['1 500', '1 050', '15 000', '150'], sayOptions: ['tysiąc pięćset', 'tysiąc pięćdziesiąt', 'piętnaście tysięcy', 'sto pięćdziesiąt'], answer: 0, explain: 'Tysiąc to 1 000, a pięćset to 500: razem 1 500.' },
          { id: 'y0qqww', q: 'Jak zapisać cyframi „dziesięć tysięcy”?', options: ['10 000', '1 000', '100 000'], sayOptions: ['dziesięć tysięcy', 'tysiąc', 'sto tysięcy'], answer: 0, explain: 'Dziesięć tysięcy to jedynka i cztery zera: 10 000.' },
          { id: 'z820i2', q: 'Ułóż liczby od najmniejszej: 305, 53, 350.', options: ['53, 305, 350', '305, 53, 350', '350, 305, 53'], answer: 0, explain: '53 ma tylko dwie cyfry, więc jest najmniejsza. 305 < 350, bo 0 dziesiątek to mniej niż 5.' },
          { id: '2vr3ke', q: 'Ile dziesiątek jest w liczbie 100?', options: ['10', '100', '1'], answer: 0, explain: '10 dziesiątek to 100.' },
          { id: 'yf3106', q: 'Prawda czy fałsz?\nLiczba 999 to największa liczba trzycyfrowa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Następna liczba, 1 000, ma już cztery cyfry.' },
          { id: 'qy7hny', q: 'Ola stoi w kolejce piąta. Ile osób stoi przed nią?', options: ['4', '5', '6'], answer: 0, explain: 'Przed piątą osobą stoją: pierwsza, druga, trzecia i czwarta – 4 osoby.' },
          { id: 'gtc3q4', q: 'Która liczba leży między 498 a 500?', options: ['499', '497', '501'], answer: 0, explain: 'Po 498 jest 499, a po niej 500.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'dodawanie',
        name: 'Dodawanie i odejmowanie',
        basis: `${PP}, 3. Posługiwanie się liczbami, pkt 1 (istota dodawania i odejmowania, związek między nimi), pkt 2 (dodawanie i odejmowanie w pamięci liczb jednocyfrowych, 10, 100, wielokrotności 10 i 100), pkt 3 (równania z okienkiem), pkt 4 (liczby dwucyfrowe; przykłady typu 250 + 50, 180 – 30).${KONIEC}`,
        theory: `
          <h3>Dodawanie</h3>
          <p>Dodajemy, gdy czegoś <b>przybywa</b>. Wynik dodawania to <b>suma</b>.</p>
          <p class="tip">38 + 7: najpierw do pełnej dziesiątki. 38 + 2 = 40, potem 40 + 5 = 45.</p>
          <p>47 + 25: najpierw dziesiątki, potem jedności. 47 + 20 = 67, 67 + 5 = 72.</p>
          <h3>Odejmowanie</h3>
          <p>Odejmujemy, gdy czegoś <b>ubywa</b>. Wynik odejmowania to <b>różnica</b>.</p>
          <p>62 − 8: 62 − 2 = 60, potem 60 − 6 = 54.</p>
          <h3>Setki i dziesiątki</h3>
          <p>250 + 50 = 300 · 180 − 30 = 150 · 400 + 300 = 700</p>
          <h3>Okienko</h3>
          <p>□ + 6 = 14. Jaka liczba pasuje? Odejmij: 14 − 6 = 8. Sprawdź: 8 + 6 = 14 ✔</p>
          <h3>Sprawdzanie</h3>
          <p>Odejmowanie sprawdzasz dodawaniem: 75 − 28 = 47, bo 47 + 28 = 75.</p>`,
        infographicNote: 'Najpierw do pełnej dziesiątki – potem reszta.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '➕', kolor: 3, title: 'Dodawanie', text: 'przybywa\nwynik: suma' },
            { icon: '➖', kolor: 2, title: 'Odejmowanie', text: 'ubywa\nwynik: różnica' },
            { icon: '🎯', kolor: 3, title: '38 + 7', text: '38 + 2 = 40\n40 + 5 = 45' },
            { icon: '🎯', kolor: 2, title: '62 − 8', text: '62 − 2 = 60\n60 − 6 = 54' },
            { icon: '🔟', kolor: 3, title: '47 + 25', text: '47 + 20 = 67\n67 + 5 = 72' },
            { icon: '🪟', kolor: 5, title: 'Okienko', text: '□ + 6 = 14\n14 − 6 = 8' },
          ],
          bottom: { kolor: 4, title: '✅ Sprawdź dodawaniem', text: '75 − 28 = 47, bo 47 + 28 = 75' },
        },
        flashcards: [
          ['Wynik dodawania to…', 'suma'],
          ['Wynik odejmowania to…', 'różnica'],
          ['38 + 7', '38 + 2 = 40, 40 + 5 = 45'],
          ['62 − 8', '62 − 2 = 60, 60 − 6 = 54'],
          ['47 + 25', '47 + 20 = 67, 67 + 5 = 72'],
          ['250 + 50', '300'],
          ['180 − 30', '150'],
          ['□ + 6 = 14', '□ = 8, bo 14 − 6 = 8'],
          ['Jak sprawdzić odejmowanie?', 'Dodawaniem: wynik + to, co odjęte = to, od czego odejmowano'],
        ],
        questions: [
          { id: 'mzenfd', q: '38 + 7 = ?', options: ['45', '44', '35', '46'], answer: 0, explain: '38 + 2 = 40, 40 + 5 = 45.' },
          { id: '5lajww', q: '62 − 8 = ?', options: ['54', '56', '64', '46'], answer: 0, explain: '62 − 2 = 60, 60 − 6 = 54.' },
          { id: 'd1rwij', q: '47 + 25 = ?', options: ['72', '62', '73', '712'], answer: 0, explain: '47 + 20 = 67, 67 + 5 = 72.' },
          { id: 'qh4ho2', q: '83 − 36 = ?', options: ['47', '53', '57', '49'], answer: 0, explain: '83 − 30 = 53, 53 − 6 = 47. Sprawdź: 47 + 36 = 83.' },
          { id: '6ez8k3', q: '29 + 29 = ?', options: ['58', '48', '59', '68'], answer: 0, explain: '29 + 30 = 59, a dodaliśmy o 1 za dużo: 59 − 1 = 58.' },
          { id: 'zrrt79', q: '250 + 50 = ?', options: ['300', '255', '200', '350'], answer: 0, explain: '5 dziesiątek + 5 dziesiątek = 10 dziesiątek, czyli 100. 200 + 100 = 300.' },
          { id: 'cbpxyj', q: '180 − 30 = ?', options: ['150', '210', '160', '177'], answer: 0, explain: '18 dziesiątek − 3 dziesiątki = 15 dziesiątek, czyli 150.' },
          { id: 'l49tpc', q: '400 + 300 = ?', options: ['700', '430', '7 000'], answer: 0, explain: '4 setki + 3 setki = 7 setek, czyli 700.' },
          { id: 'bkzyw5', q: '560 − 100 = ?', options: ['460', '550', '660'], answer: 0, explain: 'Odejmujesz 1 setkę: z 5 setek zostają 4. Wynik 460.' },
          { id: 'qip1wu', q: '100 − 1 = ?', options: ['99', '90', '101'], answer: 0, explain: 'Liczba tuż przed 100 to 99.' },
          { id: 'dvpn1q', q: '□ + 6 = 14. Jaka liczba jest w okienku?', say: 'Okienko plus 6 równa się 14. Jaka liczba jest w okienku?', options: ['8', '20', '7', '9'], answer: 0, explain: '14 − 6 = 8. Sprawdź: 8 + 6 = 14.' },
          { id: 'fkdz7p', q: '50 − □ = 32. Jaka liczba jest w okienku?', say: '50 minus okienko równa się 32. Jaka liczba jest w okienku?', options: ['18', '28', '82', '22'], answer: 0, explain: '50 − 32 = 18. Sprawdź: 50 − 18 = 32.' },
          { id: 'owahrt', q: 'Które działanie sprawdzi wynik: 75 − 28 = 47?', options: ['47 + 28 = 75', '47 − 28 = 19', '75 + 28 = 103'], answer: 0, explain: 'Odejmowanie sprawdzamy dodawaniem: 47 + 28 = 75 ✔' },
          { id: 'milemb', q: 'Prawda czy fałsz?\nSuma liczb 30 i 40 to 70.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Suma to wynik dodawania: 30 + 40 = 70.' },
          { id: '6trvfi', q: 'Różnica liczb 90 i 20 to…', options: ['70', '110', '60'], answer: 0, explain: 'Różnica to wynik odejmowania: 90 − 20 = 70.' },
          { id: 'zwo59n', q: 'Liczba o 100 większa od 345 to…', options: ['445', '355', '346', '245'], answer: 0, explain: 'Dodajesz 1 setkę: 345 + 100 = 445.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'mnozenie',
        name: 'Mnożenie i dzielenie',
        basis: `${PP}, 3. Posługiwanie się liczbami, pkt 1 (istota mnożenia i dzielenia, związek między nimi), pkt 3 (mnożenie i dzielenie w pamięci w zakresie tabliczki mnożenia, mnożenie przez 10 liczb mniejszych od 20, równania z okienkiem), pkt 4 (mnożenie liczb dwucyfrowych przez 2).${KONIEC}`,
        theory: `
          <h3>Mnożenie</h3>
          <p>Mnożenie to szybkie dodawanie <b>tych samych</b> liczb.</p>
          <p>3 × 4 = 4 + 4 + 4 = 12 (3 razy po 4).</p>
          <p class="tip">Kolejność nie zmienia wyniku: 3 × 4 = 4 × 3 = 12.</p>
          <h3>Dzielenie</h3>
          <p>Dzielimy, gdy rozdajemy <b>po równo</b>. 12 : 3 = 4, bo 3 × 4 = 12.</p>
          <p>Dzielenie sprawdzasz mnożeniem.</p>
          <h3>Przez 10</h3>
          <p>Gdy mnożysz przez 10, dopisz zero: 14 × 10 = 140.</p>
          <h3>Liczba dwucyfrowa razy 2</h3>
          <p>36 × 2: 30 × 2 = 60, 6 × 2 = 12, razem 60 + 12 = 72.</p>
          <h3>Okienko</h3>
          <p>□ × 6 = 30 → □ = 5, bo 5 × 6 = 30.</p>`,
        infographicNote: 'Mnożenie to szybkie dodawanie, a dzielenie – rozdawanie po równo.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '🍪', kolor: 1, title: 'Mnożenie', text: '3 razy po 4\n4 + 4 + 4 = 12' },
            { icon: '🔄', kolor: 1, title: 'Kolejność', text: '3 × 4 = 4 × 3' },
            { icon: '🍬', kolor: 3, title: 'Dzielenie', text: 'po równo\n12 : 3 = 4' },
            { icon: '✅', kolor: 3, title: 'Sprawdź', text: '12 : 3 = 4,\nbo 3 × 4 = 12' },
            { icon: '🔟', kolor: 4, title: 'Razy 10', text: 'dopisz zero\n14 × 10 = 140' },
            { icon: '✌️', kolor: 5, title: '36 × 2', text: '30 × 2 = 60\n6 × 2 = 12\n60 + 12 = 72' },
          ],
          bottom: { kolor: 2, title: '🧠 Zapamiętaj', text: '6 × 7 = 42 · 7 × 8 = 56\n8 × 9 = 72 · 9 × 6 = 54' },
        },
        flashcards: [
          ['3 × 4', '4 + 4 + 4 = 12'],
          ['6 × 7', '42'],
          ['7 × 8', '56'],
          ['8 × 9', '72'],
          ['9 × 6', '54'],
          ['12 : 3', '4, bo 3 × 4 = 12'],
          ['56 : 7', '8, bo 7 × 8 = 56'],
          ['14 × 10', '140 – dopisz zero'],
          ['36 × 2', '30 × 2 + 6 × 2 = 60 + 12 = 72'],
          ['Czy 3 × 5 = 5 × 3?', 'Tak, kolejność nie zmienia wyniku: 15'],
        ],
        questions: [
          { id: 'lt414p', q: '6 × 7 = ?', options: ['42', '48', '36', '43'], answer: 0, explain: '6 × 7 = 42. Sprawdź: 42 : 7 = 6.' },
          { id: 'qmwmeq', q: '8 × 9 = ?', options: ['72', '81', '64', '63'], answer: 0, explain: '8 × 9 = 72. Sprawdź: 72 : 9 = 8.' },
          { id: '6q5bi5', q: '7 × 8 = ?', options: ['56', '54', '64', '48'], answer: 0, explain: '7 × 8 = 56. Trik: 5, 6, 7, 8 – 56 = 7 × 8.' },
          { id: 'mhtfdk', q: '9 × 6 = ?', options: ['54', '56', '45', '63'], answer: 0, explain: '9 × 6 = 54.' },
          { id: 'bbx5g9', q: '4 × 4 = ?', options: ['16', '8', '12', '20'], answer: 0, explain: '4 + 4 + 4 + 4 = 16.' },
          { id: 'owhb2c', q: '36 : 4 = ?', options: ['9', '8', '6', '32'], answer: 0, explain: '36 : 4 = 9, bo 4 × 9 = 36.' },
          { id: '7w7rpv', q: '56 : 7 = ?', options: ['8', '7', '9', '6'], answer: 0, explain: '56 : 7 = 8, bo 7 × 8 = 56.' },
          { id: 'nxihdg', q: '45 : 5 = ?', options: ['9', '8', '40', '7'], answer: 0, explain: '45 : 5 = 9, bo 5 × 9 = 45.' },
          { id: 'nk4axo', q: '13 × 10 = ?', options: ['130', '103', '23', '1 310'], answer: 0, explain: 'Mnożysz przez 10 – dopisz zero: 130.' },
          { id: 'kk0hjy', q: '36 × 2 = ?', options: ['72', '62', '38', '612'], answer: 0, explain: '30 × 2 = 60, 6 × 2 = 12, razem 72.' },
          { id: 'vxoja0', q: '48 × 2 = ?', options: ['96', '86', '98', '816'], answer: 0, explain: '40 × 2 = 80, 8 × 2 = 16, razem 96.' },
          { id: 'y2gqyu', q: '□ × 6 = 30. Jaka liczba jest w okienku?', say: 'Okienko razy 6 równa się 30. Jaka liczba jest w okienku?', options: ['5', '6', '24', '36'], answer: 0, explain: '30 : 6 = 5. Sprawdź: 5 × 6 = 30.' },
          { id: 'g4ctq4', q: '24 : □ = 3. Jaka liczba jest w okienku?', say: '24 podzielić przez okienko równa się 3. Jaka liczba jest w okienku?', options: ['8', '6', '21', '27'], answer: 0, explain: '24 : 8 = 3, bo 3 × 8 = 24.' },
          { id: 'j94mir', q: 'Ile jest kropek? Które działanie pasuje?', svg: SVG_KROPKI, say: 'Na rysunku są 4 rzędy po 5 kropek. Które działanie pasuje?', options: ['4 × 5 = 20', '4 + 5 = 9', '4 × 5 = 25'], answer: 0, explain: '4 rzędy po 5 kropek: 4 × 5 = 20.' },
          { id: 'ac2vzf', q: 'Prawda czy fałsz?\n3 × 5 to tyle samo, co 5 + 5 + 5.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '3 razy po 5: 5 + 5 + 5 = 15, i 3 × 5 = 15.' },
          { id: '4fadvq', q: 'Która równość jest prawdziwa?', options: ['7 × 3 = 21', '7 × 3 = 24', '7 × 3 = 17'], answer: 0, explain: '7 + 7 + 7 = 21.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'zadania',
        name: 'Zadania z treścią',
        basis: `${PP}, 4. Czytanie tekstów matematycznych, pkt 1 (zadania tekstowe proste i wybrane złożone; rozwiązanie za pomocą działań, równości z okienkiem, rysunku); 3. pkt 1–4 (działania w zadaniach).${KONIEC}`,
        theory: `
          <h3>Jak rozwiązać zadanie?</h3>
          <ol><li>Przeczytaj uważnie – nawet dwa razy.</li><li>Co wiem? Czego szukam?</li><li>Narysuj albo zapisz działanie.</li><li>Policz i sprawdź.</li><li>Napisz odpowiedź zdaniem.</li></ol>
          <h3>Podpowiedzi w treści</h3>
          <table>
            <tr><td>„o … więcej”, „dokupił”, „przyszło”</td><td>dodaj +</td></tr>
            <tr><td>„o … mniej”, „wydał”, „odjechało”</td><td>odejmij −</td></tr>
            <tr><td>„po … w każdym”, „… razy więcej”</td><td>pomnóż ×</td></tr>
            <tr><td>„po równo”, „rozdzielił”</td><td>podziel :</td></tr>
          </table>
          <p class="tip">Przykład: W 4 pudełkach jest po 6 kredek. 4 × 6 = 24. Odpowiedź: Razem jest 24 kredki.</p>`,
        infographicNote: 'Idź krok po kroku – od czytania do odpowiedzi.',
        infographic: {
          type: 'kroki',
          items: [
            { icon: '👀', kolor: 1, title: 'Przeczytaj', text: 'uważnie – nawet dwa razy' },
            { icon: '🤔', kolor: 1, title: 'Co wiem? Czego szukam?' },
            { icon: '✏️', kolor: 1, title: 'Narysuj albo zapisz działanie' },
            { icon: '🧮', kolor: 1, title: 'Policz i sprawdź' },
            { icon: '💬', kolor: 3, title: 'Napisz odpowiedź zdaniem' },
          ],
          bottom: { kolor: 4, title: '💡 Podpowiedzi', items: ['o 5 więcej – dodaj', 'o 5 mniej – odejmij', 'po 6 w każdym – pomnóż', 'po równo – podziel'] },
        },
        flashcards: [
          ['Pierwszy krok w zadaniu', 'Przeczytaj uważnie: co wiem, czego szukam?'],
          ['„o 5 więcej”', 'dodaj 5'],
          ['„o 5 mniej”', 'odejmij 5'],
          ['„po 6 w każdym z 4 pudełek”', 'pomnóż: 4 × 6'],
          ['„rozdziel po równo”', 'podziel'],
          ['„2 razy więcej”', 'pomnóż przez 2'],
          ['Ostatni krok w zadaniu', 'Sprawdź wynik i napisz odpowiedź zdaniem'],
          ['Ile nóg mają 3 psy?', '3 × 4 = 12'],
        ],
        questions: [
          { id: '93e6nf', q: 'Tomek ma 35 naklejek, a Ania o 12 więcej. Ile naklejek ma Ania?', options: ['47', '23', '45', '57'], answer: 0, explain: '„O 12 więcej” – dodaj: 35 + 12 = 47.' },
          { id: 'xniwyi', q: 'W autobusie jechało 40 osób. Na przystanku wysiadło 15. Ile osób zostało?', options: ['25', '55', '35', '15'], answer: 0, explain: 'Wysiadły – ubyło: 40 − 15 = 25.' },
          { id: '28k5j3', q: 'W 4 pudełkach jest po 6 kredek. Ile kredek jest razem?', options: ['24', '10', '20', '46'], answer: 0, explain: '4 razy po 6: 4 × 6 = 24.' },
          { id: '5wyexy', q: '20 jabłek rozdzielono po równo do 5 koszyków. Ile jabłek jest w jednym koszyku?', options: ['4', '15', '25', '100'], answer: 0, explain: 'Po równo – dziel: 20 : 5 = 4.' },
          { id: '1cstkr', q: 'Zeszyt kosztuje 4 zł. Ile zapłacisz za 3 zeszyty?', options: ['12 zł', '7 zł', '1 zł', '43 zł'], answer: 0, explain: '3 × 4 zł = 12 zł.' },
          { id: 'klnqc6', q: 'Kasia ma 9 lat. Jej brat jest o 3 lata starszy. Ile lat ma brat?', options: ['12', '6', '27', '93'], answer: 0, explain: 'Starszy o 3 lata – dodaj: 9 + 3 = 12.' },
          { id: '1md0hy', q: 'Na półce stało 30 książek. Dostawiono 8, a potem zabrano 5. Ile książek stoi teraz?', options: ['33', '43', '27', '38'], answer: 0, explain: '30 + 8 = 38, potem 38 − 5 = 33.' },
          { id: '3wxwdm', q: 'Bilet do kina kosztuje 15 zł. Ile zapłacą 2 osoby?', options: ['30 zł', '17 zł', '13 zł', '25 zł'], answer: 0, explain: '15 × 2 = 30 zł (albo 15 + 15).' },
          { id: 'j440ym', q: 'Piotrek przeczytał w poniedziałek 12 stron, a we wtorek 2 razy więcej. Ile stron przeczytał we wtorek?', options: ['24', '14', '10', '6'], answer: 0, explain: '2 razy więcej – pomnóż: 12 × 2 = 24.' },
          { id: 'hy7rsd', q: 'W klasie jest 24 uczniów. Ustawili się w pary. Ile jest par?', options: ['12', '48', '22', '26'], answer: 0, explain: 'Para to 2 osoby: 24 : 2 = 12.' },
          { id: 'nego50', q: 'Mama kupiła 3 bułki po 2 zł i mleko za 4 zł. Ile zapłaciła?', options: ['10 zł', '9 zł', '24 zł', '6 zł'], answer: 0, explain: 'Bułki: 3 × 2 zł = 6 zł. Z mlekiem: 6 zł + 4 zł = 10 zł.' },
          { id: 'ngy3yo', q: 'Ola miała 50 zł. Wydała 20 zł. Które działanie pokazuje, ile jej zostało?', options: ['50 − 20', '50 + 20', '50 × 20'], answer: 0, explain: 'Wydała – ubyło, więc odejmujemy: 50 − 20 = 30.' },
          { id: 'v6gzcx', q: 'Ile nóg mają 4 psy?', options: ['16', '8', '12', '20'], answer: 0, explain: 'Każdy pies ma 4 nogi: 4 × 4 = 16.' },
          { id: '2bj5af', q: 'Ula ma 18 cukierków, a Jaś o 5 mniej. Ile cukierków mają razem?', options: ['31', '23', '41', '13'], answer: 0, explain: 'Jaś: 18 − 5 = 13. Razem: 18 + 13 = 31.' },
          { id: '8scje6', q: 'Ile ciastek jest na wszystkich talerzach?', svg: SVG_CIASTKA, say: 'Są 3 talerze. Na każdym talerzu są 4 ciastka. Ile ciastek jest na wszystkich talerzach?', options: ['12', '7', '34', '9'], answer: 0, explain: '3 talerze po 4 ciastka: 3 × 4 = 12.' },
          { id: 'rn72x5', q: 'Prawda czy fałsz?\nNa końcu zadania piszemy odpowiedź pełnym zdaniem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Np. „Odpowiedź: Ania ma 47 naklejek.”' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'figury',
        name: 'Figury i mierzenie',
        basis: `${PP}, 5. Rozumienie pojęć geometrycznych, pkt 1 (prostokąt, kwadrat, trójkąt, koło; odcinki i łamane), pkt 2 (centymetr, metr, milimetr, kilometr; wyrażenia dwumianowe), pkt 3 (obwód trójkąta, prostokąta i kwadratu), pkt 4 (symetria); 1. pkt 3 (pion, poziom, skos).${KONIEC}`,
        theory: `
          <h3>Figury</h3>
          <ul>
            <li><b>Trójkąt</b> – 3 boki, 3 wierzchołki.</li>
            <li><b>Prostokąt</b> – 4 boki, 4 kąty proste. Boki naprzeciwko siebie są równe.</li>
            <li><b>Kwadrat</b> – prostokąt, który ma 4 równe boki.</li>
            <li><b>Koło</b> – nie ma boków ani wierzchołków.</li>
          </ul>
          <h3>Pion, poziom, skos</h3>
          <p>Pion – jak maszt flagi. Poziom – jak powierzchnia stołu. Skos – jak zjeżdżalnia.</p>
          <h3>Jednostki długości</h3>
          <p>1 cm = 10 mm · 1 m = 100 cm · 1 km = 1 000 m</p>
          <p>1 m 20 cm = 120 cm (to <b>wyrażenie dwumianowe</b> – liczba z dwiema jednostkami).</p>
          <h3>Obwód</h3>
          <p>Obwód to suma długości wszystkich boków.</p>
          <p class="tip">Prostokąt 5 cm i 3 cm: 5 + 3 + 5 + 3 = 16 cm. Kwadrat o boku 4 cm: 4 + 4 + 4 + 4 = 16 cm.</p>
          <h3>Symetria</h3>
          <p>Figura jest symetryczna, gdy po złożeniu na pół obie części się pokrywają – jak skrzydła motyla.</p>`,
        infographicNote: 'Policz boki, zmierz je – i dodaj.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🚩 Pion, poziom, skos', text: 'maszt flagi, blat stołu, zjeżdżalnia' },
          items: [
            { icon: '🔺', kolor: 2, title: 'Trójkąt', text: '3 boki\n3 wierzchołki' },
            { icon: '🟦', kolor: 1, title: 'Kwadrat', text: '4 równe boki' },
            { icon: '🚪', kolor: 5, title: 'Prostokąt', text: '4 boki\n4 kąty proste' },
            { icon: '🟢', kolor: 3, title: 'Koło', text: 'nie ma boków ani wierzchołków' },
            { icon: '📏', kolor: 4, title: 'Długość', text: '1 cm = 10 mm\n1 m = 100 cm\n1 km = 1 000 m' },
            { icon: '🦋', kolor: 4, title: 'Symetria', text: 'złóż na pół – obie części takie same' },
          ],
          bottom: { kolor: 5, title: '🧵 Obwód', text: 'Dodaj wszystkie boki:\n5 + 3 + 5 + 3 = 16 cm' },
        },
        flashcards: [
          ['Ile boków ma trójkąt?', '3'],
          ['Prostokąt', '4 boki, 4 kąty proste, boki naprzeciwko są równe'],
          ['Kwadrat', 'prostokąt z 4 równymi bokami'],
          ['1 cm = ? mm', '10 mm'],
          ['1 m = ? cm', '100 cm'],
          ['1 km = ? m', '1 000 m'],
          ['1 m 20 cm', '120 cm'],
          ['Obwód', 'suma długości wszystkich boków'],
          ['Pion, poziom, skos', 'maszt flagi, blat stołu, zjeżdżalnia'],
          ['Oś symetrii', 'linia, wzdłuż której złożysz figurę na dwie takie same części'],
        ],
        questions: [
          { id: '4nrqe8', q: 'Ile boków ma trójkąt?', options: ['3', '4', '0'], answer: 0, explain: 'Trójkąt ma 3 boki i 3 wierzchołki.' },
          { id: 'v127re', q: 'Która figura ma 4 równe boki i 4 kąty proste?', options: ['kwadrat', 'trójkąt', 'koło'], answer: 0, explain: 'To kwadrat.' },
          { id: '7xoel4', q: 'Prawda czy fałsz?\nKwadrat jest też prostokątem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Kwadrat ma 4 kąty proste jak prostokąt – i do tego wszystkie boki równe.' },
          { id: 'zs383v', q: 'Ile trójkątów jest na rysunku?', svg: SVG_FIGURY, say: 'Policz trójkąty na rysunku.', options: ['2', '3', '1', '4'], answer: 0, explain: 'Trójkąty są dwa: pierwszy i czwarty. Jest też kwadrat, koło i prostokąt.' },
          { id: '9yanlk', q: 'Która linia jest pionowa?', svg: SVG_LINIE, options: ['a', 'b', 'c'], answer: 0, noShuffle: true, explain: 'a – pion, b – poziom, c – skos.' },
          { id: 'eb1u60', q: '1 cm to ile milimetrów?', options: ['10 mm', '100 mm', '1 000 mm'], answer: 0, explain: '1 cm = 10 mm. Spójrz na linijkę: między liczbami jest 10 małych kresek.' },
          { id: '9tqcn8', q: '1 m to ile centymetrów?', options: ['100 cm', '10 cm', '1 000 cm'], answer: 0, explain: '1 m = 100 cm.' },
          { id: 'wbggaq', q: '1 km to ile metrów?', options: ['1 000 m', '100 m', '10 m'], answer: 0, explain: '1 km = 1 000 m.' },
          { id: 's7no8h', q: '1 m 20 cm to…', options: ['120 cm', '12 cm', '1 020 cm', '210 cm'], answer: 0, explain: '1 m = 100 cm. 100 cm + 20 cm = 120 cm.' },
          { id: 'ustx01', q: '3 m 5 cm to…', options: ['305 cm', '35 cm', '350 cm'], answer: 0, explain: '3 m = 300 cm. 300 cm + 5 cm = 305 cm.' },
          { id: 'zt1jmo', q: '50 mm to…', options: ['5 cm', '50 cm', '500 cm'], answer: 0, explain: '10 mm = 1 cm, więc 50 mm = 5 cm.' },
          { id: 'a5we0a', q: 'Jaki jest obwód prostokąta o bokach 5 cm i 3 cm?', options: ['16 cm', '15 cm', '8 cm', '11 cm'], answer: 0, explain: '5 + 3 + 5 + 3 = 16 cm.' },
          { id: 'acp95d', q: 'Jaki jest obwód kwadratu o boku 4 cm?', options: ['16 cm', '8 cm', '12 cm', '4 cm'], answer: 0, explain: 'Kwadrat ma 4 równe boki: 4 + 4 + 4 + 4 = 16 cm.' },
          { id: 'r7y8lg', q: 'Jaki jest obwód trójkąta o bokach 3 cm, 4 cm i 5 cm?', options: ['12 cm', '7 cm', '60 cm', '9 cm'], answer: 0, explain: '3 + 4 + 5 = 12 cm.' },
          { id: 'b1invs', q: 'Jaką jednostką mierzymy drogę z jednego miasta do drugiego?', options: ['kilometrem', 'centymetrem', 'milimetrem'], answer: 0, explain: 'Duże odległości mierzymy w kilometrach.' },
          { id: 'k654ka', q: 'Przedmiot złożony na pół ma dwie takie same części. Mówimy, że jest…', options: ['symetryczny', 'okrągły', 'pionowy'], answer: 0, explain: 'Linia, wzdłuż której składamy, to oś symetrii.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'zegar-kalendarz',
        name: 'Zegar i kalendarz',
        basis: `${PP}, 6. Stosowanie matematyki w sytuacjach życiowych, pkt 4 (godziny na zegarze ze wskazówkami i elektronicznym 24-godzinnym; proste obliczenia czasu; doba, godzina, minuta, sekunda; zapis dat; kalendarz; znaki rzymskie do XII).${KONIEC}`,
        theory: `
          <h3>Jednostki czasu</h3>
          <p>1 doba = 24 godziny · 1 godzina = 60 minut · 1 minuta = 60 sekund · pół godziny = 30 minut</p>
          <h3>Zegar</h3>
          <p><b>Krótka</b> wskazówka pokazuje godziny, <b>długa</b> – minuty.</p>
          <p>Zegar elektroniczny liczy godziny od 0 do 23. 15:00 to trzecia po południu. Od godzin po 12 odejmij 12: 15 − 12 = 3.</p>
          <h3>Kalendarz</h3>
          <p>Tydzień ma 7 dni: poniedziałek, wtorek, środa, czwartek, piątek, sobota, niedziela.</p>
          <p>Rok ma 12 miesięcy. Miesiące mają 30 albo 31 dni, a luty – 28 albo 29.</p>
          <table>
            <tr><th>31 dni</th><td>styczeń, marzec, maj, lipiec, sierpień, październik, grudzień</td></tr>
            <tr><th>30 dni</th><td>kwiecień, czerwiec, wrzesień, listopad</td></tr>
          </table>
          <h3>Zapis daty</h3>
          <p>24 grudnia 2026 r. · 24.12.2026 r. · 24 XII 2026 r.</p>
          <h3>Znaki rzymskie</h3>
          <p>I – 1, II – 2, III – 3, IV – 4, V – 5, VI – 6, VII – 7, VIII – 8, IX – 9, X – 10, XI – 11, XII – 12</p>
          <p class="tip">Mały znak przed większym – odejmij: IV = 5 − 1. Mały znak za większym – dodaj: VI = 5 + 1.</p>`,
        infographicNote: 'Czas: od sekundy do roku.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '🌓', kolor: 1, title: 'Doba', text: '24 godziny' },
            { icon: '⌛', kolor: 1, title: 'Godzina', text: '60 minut' },
            { icon: '⏱️', kolor: 1, title: 'Minuta', text: '60 sekund' },
            { icon: '⏰', kolor: 2, title: 'Wskazówki', text: 'krótka – godziny\ndługa – minuty' },
            { icon: '🕒', kolor: 2, title: '15:00', text: '15 − 12 = 3\ntrzecia po południu' },
            { icon: '🏛️', kolor: 5, title: 'Znaki rzymskie', text: 'IV = 4, VI = 6\nIX = 9, XII = 12' },
          ],
          bottom: { kolor: 3, title: '📅 Kalendarz', text: 'Tydzień – 7 dni. Rok – 12 miesięcy.\n30 dni: kwiecień, czerwiec, wrzesień, listopad.' },
        },
        flashcards: [
          ['1 doba', '24 godziny'],
          ['1 godzina', '60 minut'],
          ['1 minuta', '60 sekund'],
          ['Krótka wskazówka', 'godziny'],
          ['Długa wskazówka', 'minuty'],
          ['15:00 na tarczy zegara', '3:00 (po południu)'],
          ['Ile dni ma tydzień?', '7'],
          ['Miesiące po 30 dni', 'kwiecień, czerwiec, wrzesień, listopad'],
          ['IV', '4'],
          ['IX', '9'],
          ['XII', '12'],
        ],
        questions: [
          { id: 'itsv3z', q: 'Którą godzinę pokazuje zegar?', svg: clock(3, 0), options: ['3:00', '12:15', '12:03'], answer: 0, explain: 'Krótka wskazówka na 3, długa na 12 – jest pełna godzina: 3:00.' },
          { id: 'nkop11', q: 'Którą godzinę pokazuje zegar?', svg: clock(6, 30), options: ['6:30', '12:30', '6:00'], answer: 0, explain: 'Długa wskazówka na 6 – to 30 minut. Krótka jest między 6 a 7 – po szóstej. Jest 6:30.' },
          { id: 'b6wpl2', q: 'Zegar elektroniczny pokazuje 17:00. Którą godzinę pokaże zegar ze wskazówkami?', options: ['5:00', '7:00', '1:00'], answer: 0, explain: '17 − 12 = 5. Krótka wskazówka będzie na 5.' },
          { id: '7bpowm', q: 'Ile godzin ma doba?', options: ['24', '12', '60'], answer: 0, explain: 'Doba to dzień i noc – 24 godziny.' },
          { id: '32mgo6', q: 'Ile minut ma godzina?', options: ['60', '100', '24'], answer: 0, explain: '1 godzina = 60 minut.' },
          { id: 'ufdq8k', q: 'Ile sekund ma minuta?', options: ['60', '100', '10'], answer: 0, explain: '1 minuta = 60 sekund.' },
          { id: 'hyqfpu', q: 'Film zaczął się o 16:00 i trwał 2 godziny. O której się skończył?', options: ['18:00', '14:00', '16:02'], answer: 0, explain: '16 + 2 = 18. Film skończył się o 18:00.' },
          { id: 'hts381', q: 'Lekcja zaczyna się o 8:00 i trwa 45 minut. O której się kończy?', options: ['8:45', '9:45', '8:15'], answer: 0, explain: 'Do 8:00 dodajesz 45 minut: 8:45.' },
          { id: '7b87qz', q: 'Ile dni ma tydzień?', options: ['7', '5', '12'], answer: 0, explain: 'Od poniedziałku do niedzieli – 7 dni.' },
          { id: '1qn30e', q: 'Ile miesięcy ma rok?', options: ['12', '10', '7'], answer: 0, explain: 'Od stycznia do grudnia – 12 miesięcy.' },
          { id: 'ucmadm', q: 'Jaki dzień jest po czwartku?', options: ['piątek', 'środa', 'sobota'], answer: 0, explain: 'Czwartek, potem piątek.' },
          { id: 'qprrxo', q: 'Jaki miesiąc jest po marcu?', options: ['kwiecień', 'luty', 'maj'], answer: 0, explain: 'Styczeń, luty, marzec, kwiecień…' },
          { id: 'w8aeja', q: 'Ile dni ma lipiec?', options: ['31', '30', '28'], answer: 0, explain: 'Lipiec ma 31 dni.' },
          { id: 'i36ujk', q: 'Prawda czy fałsz?\nWrzesień ma 31 dni.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Wrzesień ma 30 dni – jak kwiecień, czerwiec i listopad.' },
          { id: 'zuvsn6', q: 'Jak zapisać znakami rzymskimi liczbę 9?', options: ['IX', 'XI', 'VIIII'], sayOptions: ['I, X', 'X, I', 'V, I, I, I, I'], answer: 0, explain: 'IX = 10 − 1 = 9. XI to 11.' },
          { id: 'vguu3r', q: 'Jaką liczbę zapisano znakami rzymskimi: VII?', say: 'Jaką liczbę zapisano znakami rzymskimi: V, I, I?', options: ['7', '6', '12'], answer: 0, explain: 'V = 5, a dwa I za nim dodajemy: 5 + 2 = 7.' },
          { id: 'k1gb72', q: 'Data 24.12.2026 r. to…', say: 'Data: 24, kropka, 12, kropka, 2026. Jaki to dzień?', options: ['24 grudnia 2026 r.', '24 listopada 2026 r.', '12 grudnia 2026 r.'], answer: 0, explain: 'Najpierw dzień (24), potem miesiąc (12 – grudzień), na końcu rok.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'pieniadze-miary',
        name: 'Pieniądze, waga, płyny',
        basis: `${PP}, 6. Stosowanie matematyki w sytuacjach życiowych, pkt 2 (połowa, ćwierć), pkt 3 (obliczenia pieniężne, złote i grosze, nominały monet i banknotów), pkt 5 (termometr), pkt 6 (szacowanie), pkt 7 (kilogram, dekagram, gram, tona; litr, pół litra, ćwierć litra).${KONIEC}`,
        theory: `
          <h3>Pieniądze</h3>
          <p>1 zł = 100 gr. 3 zł 50 gr = 350 gr.</p>
          <p><b>Monety:</b> 1 gr, 2 gr, 5 gr, 10 gr, 20 gr, 50 gr, 1 zł, 2 zł, 5 zł.<br><b>Banknoty:</b> 10 zł, 20 zł, 50 zł, 100 zł, 200 zł, 500 zł.</p>
          <h3>Waga (masa)</h3>
          <p>1 kg = 100 dag · 1 dag = 10 g · 1 kg = 1 000 g · 1 t (tona) = 1 000 kg</p>
          <h3>Płyny</h3>
          <p>1 litr = 2 razy pół litra = 4 razy ćwierć litra.</p>
          <h3>Połowa i ćwierć</h3>
          <p>Połowa – jedna z 2 równych części. Ćwierć – jedna z 4 równych części. Połowa z 8 to 4, ćwierć z 8 to 2.</p>
          <h3>Temperatura</h3>
          <p>Temperaturę mierzymy termometrem, w stopniach Celsjusza (°C).</p>
          <h3>Szacowanie</h3>
          <p>Zeszyt kosztuje 4 zł 90 gr – to prawie 5 zł. 3 zeszyty to około 3 × 5 zł = 15 zł.</p>`,
        infographicNote: 'Złote, kilogramy i litry – wszystko można zamienić.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🪙 1 zł = 100 gr', text: '3 zł 50 gr = 350 gr' },
          items: [
            { icon: '🪙', kolor: 4, title: 'Monety', text: '1, 2, 5, 10, 20, 50 gr\n1, 2, 5 zł' },
            { icon: '💵', kolor: 4, title: 'Banknoty', text: '10, 20, 50, 100, 200, 500 zł' },
            { icon: '⚖️', kolor: 1, title: 'Waga', text: '1 kg = 100 dag\n1 dag = 10 g\n1 kg = 1 000 g' },
            { icon: '🚛', kolor: 1, title: 'Tona', text: '1 tona = 1 000 kg' },
            { icon: '🥛', kolor: 3, title: '1 litr', text: '2 razy pół litra\n4 razy ćwierć litra' },
            { icon: '🍕', kolor: 5, title: 'Połowa i ćwierć', text: 'połowa z 8 to 4\nćwierć z 8 to 2' },
          ],
          bottom: { kolor: 2, title: '🌡️ Temperatura', text: 'Mierzysz termometrem, w stopniach Celsjusza.' },
        },
        flashcards: [
          ['1 zł = ? gr', '100 gr'],
          ['Monety', '1, 2, 5, 10, 20, 50 gr oraz 1, 2, 5 zł'],
          ['Banknoty', '10, 20, 50, 100, 200, 500 zł'],
          ['1 kg = ? dag', '100 dag'],
          ['1 dag = ? g', '10 g'],
          ['1 kg = ? g', '1 000 g'],
          ['1 t = ? kg', '1 000 kg'],
          ['1 litr', '2 razy pół litra albo 4 razy ćwierć litra'],
          ['Ćwierć', 'jedna z 4 równych części'],
          ['Czym mierzymy temperaturę?', 'termometrem, w °C'],
        ],
        questions: [
          { id: 'doiogg', q: '1 zł to ile groszy?', options: ['100 gr', '10 gr', '1 000 gr'], answer: 0, explain: '1 zł = 100 gr.' },
          { id: '4gz00p', q: '3 zł 50 gr to ile groszy?', options: ['350 gr', '35 gr', '305 gr', '3 050 gr'], answer: 0, explain: '3 zł = 300 gr. 300 gr + 50 gr = 350 gr.' },
          { id: 'atbt95', q: 'Która z tych kwot jest banknotem?', options: ['20 zł', '5 zł', '50 gr'], answer: 0, explain: '5 zł i 50 gr to monety. Banknoty zaczynają się od 10 zł.' },
          { id: '4muomz', q: 'Która z tych kwot jest monetą?', options: ['2 zł', '10 zł', '100 zł'], answer: 0, explain: '2 zł to moneta. 10 zł i 100 zł to banknoty.' },
          { id: '910ty3', q: 'Masz 2 zł. Wydajesz 70 gr. Ile ci zostanie?', options: ['1 zł 30 gr', '1 zł 70 gr', '30 gr', '2 zł 70 gr'], answer: 0, explain: '2 zł = 200 gr. 200 gr − 70 gr = 130 gr = 1 zł 30 gr.' },
          { id: 'd80l7y', q: 'Lizak kosztuje 1 zł 50 gr. Ile kosztują 2 lizaki?', options: ['3 zł', '2 zł 50 gr', '3 zł 50 gr', '1 zł'], answer: 0, explain: '1 zł 50 gr + 1 zł 50 gr = 2 zł 100 gr = 3 zł.' },
          { id: '2q1xui', q: 'Zeszyt kosztuje 4 zł 90 gr. Ile mniej więcej kosztują 3 zeszyty?', options: ['około 15 zł', 'około 5 zł', 'około 50 zł'], answer: 0, explain: '4 zł 90 gr to prawie 5 zł. 3 × 5 zł = 15 zł.' },
          { id: '56sb2o', q: '1 kg to ile dekagramów?', options: ['100 dag', '10 dag', '1 000 dag'], answer: 0, explain: '1 kg = 100 dag.' },
          { id: 'yji0vw', q: '1 kg to ile gramów?', options: ['1 000 g', '100 g', '10 g'], answer: 0, explain: '1 kg = 1 000 g.' },
          { id: '9d8qyr', q: '1 dag to ile gramów?', options: ['10 g', '100 g', '1 g'], answer: 0, explain: '1 dag = 10 g.' },
          { id: 'uvxgpf', q: '1 tona to ile kilogramów?', options: ['1 000 kg', '100 kg', '10 kg'], answer: 0, explain: '1 t = 1 000 kg. Tyle mniej więcej waży mały samochód.' },
          { id: 'ow3utn', q: 'Mama kupiła 1 kg 20 dag jabłek. Ile to dekagramów?', options: ['120 dag', '12 dag', '1 020 dag', '102 dag'], answer: 0, explain: '1 kg = 100 dag. 100 dag + 20 dag = 120 dag.' },
          { id: 'crds9x', q: 'Ile szklanek po ćwierć litra napełnisz 1 litrem soku?', options: ['4', '2', '10'], answer: 0, explain: 'Ćwierć to jedna z 4 równych części. 1 litr = 4 razy ćwierć litra.' },
          { id: 'q35tfv', q: 'Pół litra i pół litra to razem…', options: ['1 litr', '2 litry', 'ćwierć litra'], answer: 0, explain: 'Dwie połowy to całość: 1 litr.' },
          { id: 'f31eik', q: 'Ile to połowa z 10?', options: ['5', '2', '20'], answer: 0, explain: '10 dzielimy na 2 równe części: 10 : 2 = 5.' },
          { id: 'th2ym9', q: 'Ile stopni pokazuje termometr?', svg: SVG_TERMOMETR, say: 'Odczytaj termometr. Ile stopni pokazuje?', options: ['20°C', '30°C', '10°C'], answer: 0, explain: 'Słupek sięga do kreski z liczbą 20.' },
          { id: 'zy4eky', q: 'Prawda czy fałsz?\nMoneta 5 zł ma większą wartość niż banknot 10 zł.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: '5 zł to mniej niż 10 zł.' },
        ],
      },
    ],
  });
})();
