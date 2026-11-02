/* Matematyka – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, matematyka kl. IV–VI).
 * Podstawa podaje wymagania dla bloku klas IV–VI – wybór treści na klasę 4 to decyzja redakcyjna (opisana w polu basis). */
(function () {
  const WYBOR = ' Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).';

  // rysunki używane w kilku pytaniach
  const SVG_PROSTE = `<svg viewBox="0 0 380 210" role="img" aria-label="Kratka z czterema prostymi: a i b poziome, c pionowa, d ukośna">
      <g class="ln-thin"><line x1="10" y1="10" x2="10" y2="190"/><line x1="40" y1="10" x2="40" y2="190"/><line x1="70" y1="10" x2="70" y2="190"/><line x1="100" y1="10" x2="100" y2="190"/><line x1="130" y1="10" x2="130" y2="190"/><line x1="160" y1="10" x2="160" y2="190"/><line x1="190" y1="10" x2="190" y2="190"/><line x1="220" y1="10" x2="220" y2="190"/><line x1="250" y1="10" x2="250" y2="190"/><line x1="280" y1="10" x2="280" y2="190"/><line x1="310" y1="10" x2="310" y2="190"/><line x1="340" y1="10" x2="340" y2="190"/><line x1="370" y1="10" x2="370" y2="190"/><line x1="10" y1="10" x2="370" y2="10"/><line x1="10" y1="40" x2="370" y2="40"/><line x1="10" y1="70" x2="370" y2="70"/><line x1="10" y1="100" x2="370" y2="100"/><line x1="10" y1="130" x2="370" y2="130"/><line x1="10" y1="160" x2="370" y2="160"/><line x1="10" y1="190" x2="370" y2="190"/></g>
      <line x1="10" y1="40" x2="370" y2="40" class="ln s1 sw"/>
      <line x1="10" y1="130" x2="370" y2="130" class="ln s1 sw"/>
      <line x1="100" y1="10" x2="100" y2="190" class="ln s3 sw"/>
      <line x1="190" y1="190" x2="370" y2="10" class="ln s2 sw"/>
      <text x="22" y="33" class="tx-b t1">a</text>
      <text x="22" y="123" class="tx-b t1">b</text>
      <text x="108" y="205" class="tx-b t3">c</text>
      <text x="196" y="205" class="tx-b t2">d</text>
    </svg>`;

  const SVG_SPORT = `<svg viewBox="0 0 400 230" role="img" aria-label="Diagram słupkowy: ulubiony sport w klasie 4b. Piłka nożna 8 osób, siatkówka 5, pływanie 6, rower 3. Skala co 2.">
      <text x="210" y="18" class="tx-b" text-anchor="middle">Ulubiony sport – klasa 4b</text>
      <g class="ln-thin">
        <line x1="50" y1="164" x2="390" y2="164"/><line x1="50" y1="136" x2="390" y2="136"/><line x1="50" y1="108" x2="390" y2="108"/>
        <line x1="50" y1="80" x2="390" y2="80"/><line x1="50" y1="52" x2="390" y2="52"/>
      </g>
      <text x="40" y="197" class="tx-s" text-anchor="end">0</text><text x="40" y="169" class="tx-s" text-anchor="end">2</text>
      <text x="40" y="141" class="tx-s" text-anchor="end">4</text><text x="40" y="113" class="tx-s" text-anchor="end">6</text>
      <text x="40" y="85" class="tx-s" text-anchor="end">8</text><text x="40" y="57" class="tx-s" text-anchor="end">10</text>
      <rect x="70" y="80" width="50" height="112" class="f1 s1 sw"/>
      <rect x="150" y="122" width="50" height="70" class="f2 s2 sw"/>
      <rect x="230" y="108" width="50" height="84" class="f3 s3 sw"/>
      <rect x="310" y="150" width="50" height="42" class="f5 s5 sw"/>
      <line x1="50" y1="192" x2="390" y2="192" class="ln"/><line x1="50" y1="40" x2="50" y2="192" class="ln"/>
      <text x="95" y="212" class="tx-s" text-anchor="middle">piłka nożna</text>
      <text x="175" y="212" class="tx-s" text-anchor="middle">siatkówka</text>
      <text x="255" y="212" class="tx-s" text-anchor="middle">pływanie</text>
      <text x="335" y="212" class="tx-s" text-anchor="middle">rower</text>
    </svg>`;

  const SVG_PARAGON = `<svg viewBox="0 0 360 210" role="img" aria-label="Paragon: zeszyt 2 sztuki po 4 zł, razem 8 zł; długopis 3 sztuki po 2 zł, razem 6 zł; blok 1 sztuka po 5 zł, razem 5 zł; suma 19 zł">
      <rect x="40" y="6" width="280" height="198" rx="6" class="bg ln"/>
      <text x="180" y="32" class="tx-b" text-anchor="middle">PARAGON</text>
      <line x1="56" y1="44" x2="304" y2="44" class="ln-thin dash"/>
      <text x="56" y="70" class="tx">zeszyt</text><text x="200" y="70" class="tx" text-anchor="middle">2 × 4 zł</text><text x="304" y="70" class="tx" text-anchor="end">8 zł</text>
      <text x="56" y="100" class="tx">długopis</text><text x="200" y="100" class="tx" text-anchor="middle">3 × 2 zł</text><text x="304" y="100" class="tx" text-anchor="end">6 zł</text>
      <text x="56" y="130" class="tx">blok</text><text x="200" y="130" class="tx" text-anchor="middle">1 × 5 zł</text><text x="304" y="130" class="tx" text-anchor="end">5 zł</text>
      <line x1="56" y1="148" x2="304" y2="148" class="ln-thin dash"/>
      <text x="56" y="178" class="tx-b">SUMA</text><text x="304" y="178" class="tx-b" text-anchor="end">19 zł</text>
    </svg>`;

  const SVG_WYDATKI = `<svg viewBox="0 0 320 200" role="img" aria-label="Tabela: wydatki Oli w czterech tygodniach. Tydzień 1 – 8 zł, tydzień 2 – 12 zł, tydzień 3 – 5 zł, tydzień 4 – 10 zł">
      <rect x="40" y="10" width="240" height="180" class="bg ln"/>
      <rect x="40" y="10" width="240" height="36" class="f1 s1"/>
      <line x1="160" y1="10" x2="160" y2="190" class="ln"/>
      <line x1="40" y1="46" x2="280" y2="46" class="ln"/><line x1="40" y1="82" x2="280" y2="82" class="ln-thin"/>
      <line x1="40" y1="118" x2="280" y2="118" class="ln-thin"/><line x1="40" y1="154" x2="280" y2="154" class="ln-thin"/>
      <text x="100" y="34" class="tx-b" text-anchor="middle">Tydzień</text><text x="220" y="34" class="tx-b" text-anchor="middle">Wydała</text>
      <text x="100" y="70" class="tx" text-anchor="middle">1.</text><text x="220" y="70" class="tx" text-anchor="middle">8 zł</text>
      <text x="100" y="106" class="tx" text-anchor="middle">2.</text><text x="220" y="106" class="tx" text-anchor="middle">12 zł</text>
      <text x="100" y="142" class="tx" text-anchor="middle">3.</text><text x="220" y="142" class="tx" text-anchor="middle">5 zł</text>
      <text x="100" y="178" class="tx" text-anchor="middle">4.</text><text x="220" y="178" class="tx" text-anchor="middle">10 zł</text>
    </svg>`;

  const SVG_PODZIALKA = `<svg viewBox="0 0 360 110" role="img" aria-label="Podziałka liniowa planu: cztery działki po 1 cm, opisane 0, 100, 200, 300, 400 m">
      <rect x="40" y="50" width="60" height="14" class="f1 s1"/><rect x="100" y="50" width="60" height="14" class="bg ln"/>
      <rect x="160" y="50" width="60" height="14" class="f1 s1"/><rect x="220" y="50" width="60" height="14" class="bg ln"/>
      <g class="tx-s" text-anchor="middle"><text x="40" y="40">0</text><text x="100" y="40">100</text><text x="160" y="40">200</text><text x="220" y="40">300</text><text x="280" y="40">400 m</text></g>
      <text x="180" y="95" class="tx-s" text-anchor="middle">1 działka = 1 cm na planie</text>
    </svg>`;

  window.SUBJECTS.push({
    id: 'matematyka',
    name: 'Matematyka',
    icon: '📐',
    color: '#3b82c4',
    book: 'Matematyka z plusem 4 (GWO)',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'dzialania',
        name: 'Działania na liczbach naturalnych',
        chapter: 'dział 1 „Liczby i działania”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 9–14 (dodawanie, odejmowanie, mnożenie i dzielenie w pamięci lub z zapisem obliczeń pośrednich, podział i mieszczenie, wygodne strategie, dzielenie z resztą, porównywanie różnicowe i ilorazowe), wym. 15 (tylko kwadraty i sześciany), 36 (kolejność działań), 37 (szacowanie); dz. 6 Myślenie matematyczne. Bez algorytmów działań pisemnych – podstawa ich nie wymaga.' + WYBOR,
        theory: `
          <h3>Nazwy w działaniach</h3>
          <table>
            <tr><th>Działanie</th><th>Przykład</th><th>Nazwy</th></tr>
            <tr><td>dodawanie</td><td>5 + 3 = 8</td><td>składnik + składnik = <b>suma</b></td></tr>
            <tr><td>odejmowanie</td><td>9 − 4 = 5</td><td>odjemna − odjemnik = <b>różnica</b></td></tr>
            <tr><td>mnożenie</td><td>6 · 7 = 42</td><td>czynnik · czynnik = <b>iloczyn</b></td></tr>
            <tr><td>dzielenie</td><td>20 : 4 = 5</td><td>dzielna : dzielnik = <b>iloraz</b></td></tr>
          </table>
          <h3>Liczenie w pamięci – rozbijaj na kawałki</h3>
          <ul>
            <li><span class="f">47 + 38 = 47 + 30 + 8 = 77 + 8 = 85</span></li>
            <li><span class="f">82 − 47 = 82 − 40 − 7 = 42 − 7 = 35</span></li>
            <li><span class="f">198 + 57 = 200 + 57 − 2 = 255</span> (dopełnij do pełnej setki)</li>
          </ul>
          <p>Możesz zapisywać wyniki pośrednie – to pomaga nie zgubić się w rachunkach.</p>
          <h3>Sprytne sposoby</h3>
          <ul>
            <li><b>Przemienność</b> – kolejność składników lub czynników nie zmienia wyniku: 3 + 8 = 8 + 3, 4 · 7 = 7 · 4.</li>
            <li><b>Przemienność i łączność</b> – możesz zamieniać liczby miejscami i łączyć je w wygodne pary: 25 + 38 + 75 = (25 + 75) + 38 = 138; 4 · 17 · 25 = (4 · 25) · 17 = 1 700.</li>
            <li><b>Rozdzielność</b> – rozbij jeden czynnik: 7 · 13 = 7 · 10 + 7 · 3 = 70 + 21 = 91; 6 · 99 = 6 · 100 − 6 = 594.</li>
            <li>Przez 10, 100, 1000 mnożysz, dopisując zera (34 · 100 = 3 400), a dzielisz, skreślając zera (4 500 : 100 = 45).</li>
          </ul>
          <div class="tip">💡 Odejmowania i dzielenia nie wolno „odwracać”: 10 − 3 = 7, ale 3 − 10 nie daje 7.</div>
          <h3>Dzielenie: podział i mieszczenie</h3>
          <ul>
            <li><b>Podział</b>: 12 cukierków dzielisz po równo między 3 osoby. Po ile dostanie każda? 12 : 3 = 4.</li>
            <li><b>Mieszczenie</b>: 12 cukierków pakujesz po 3 do torebki. Ile będzie torebek? 12 : 3 = 4.</li>
          </ul>
          <h3>Dzielenie z resztą</h3>
          <p><span class="f">17 : 5 = 3 reszty 2</span>, bo 3 · 5 = 15, a do 17 brakuje jeszcze 2. Sprawdzenie: <span class="f">3 · 5 + 2 = 17</span>.</p>
          <div class="tip">💡 Reszta jest zawsze mniejsza od dzielnika. Jeśli wyszła równa albo większa – zmieści się jeszcze jedna grupa.</div>
          <h3>O ile? Ile razy?</h3>
          <p>Ola ma 24 naklejki, a Kuba 6.</p>
          <ul>
            <li>„O ile więcej?” – <b>odejmujesz</b>: 24 − 6 = 18. Ola ma o 18 naklejek więcej.</li>
            <li>„Ile razy więcej?” – <b>dzielisz</b>: 24 : 6 = 4. Ola ma 4 razy więcej naklejek.</li>
          </ul>
          <h3>Kwadraty i sześciany</h3>
          <p><span class="f">5² = 5 · 5 = 25</span> („pięć do kwadratu”), <span class="f">2³ = 2 · 2 · 2 = 8</span> („dwa do sześcianu”).</p>
          <table>
            <tr><th>n</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
            <tr><th>n²</th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td></tr>
          </table>
          <p>Sześciany: 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125.</p>
          <h3>Kolejność działań</h3>
          <p>1) nawiasy → 2) potęgi → 3) mnożenie i dzielenie → 4) dodawanie i odejmowanie. Działania z tego samego stopnia wykonuj od lewej do prawej.</p>
          <p><span class="f">20 − 4 · 3 = 20 − 12 = 8</span>, ale <span class="f">(20 − 4) · 3 = 16 · 3 = 48</span>; <span class="f">2 + 3² = 2 + 9 = 11</span>.</p>
          <h3>Szacowanie</h3>
          <p>Zaokrąglij liczby i policz w pamięci: 49 · 21 ≈ 50 · 20 = 1 000. Masz 60 zł i chcesz kupić 3 rzeczy po 19 zł? 19 to prawie 20, a 3 · 20 = 60 – wystarczy (dokładnie 57 zł).</p>
        `,
        flashcards: [
          ['Wynik dodawania i odejmowania', 'suma i różnica'],
          ['Wynik mnożenia i dzielenia', 'iloczyn i iloraz'],
          ['Przemienność', 'Kolejność składników (czynników) nie zmienia wyniku: 4 · 7 = 7 · 4'],
          ['Rozdzielność: 6 · 23', '6 · 20 + 6 · 3 = 120 + 18 = 138'],
          ['Podział i mieszczenie', '12 : 3 – „po ile dla 3 osób?” i „ile razy zmieści się 3?”'],
          ['23 : 4', '5 reszty 3 (bo 5 · 4 + 3 = 23)'],
          ['„O ile więcej?”', 'odejmujemy: większa − mniejsza'],
          ['„Ile razy więcej?”', 'dzielimy: większa : mniejsza'],
          ['Kolejność działań', 'nawiasy → potęgi → mnożenie i dzielenie → dodawanie i odejmowanie'],
          ['6² i 2³', '36 i 8'],
        ],
        questions: [
          { id: '4olsur', q: 'Ile wynosi 48 + 37?', options: ['85', '75', '815', '86'], answer: 0, explain: '48 + 30 = 78, 78 + 7 = 85.' },
          { id: '4eyipk', q: 'Ile wynosi 92 − 57?', options: ['35', '45', '25', '149'], answer: 0, explain: '92 − 50 = 42, 42 − 7 = 35. Sprawdzenie: 35 + 57 = 92.' },
          { id: 'z2x152', q: 'Ile wynosi 25 · 7 · 4?', options: ['700', '175', '1 400', '280'], answer: 0, explain: 'Wygodnie: 25 · 4 = 100, a 100 · 7 = 700.' },
          { id: 'ffmw0p', q: 'Ile wynosi 8 · 99?', options: ['792', '800', '808', '720'], answer: 0, explain: '8 · 99 = 8 · 100 − 8 = 800 − 8 = 792.' },
          { id: 'gxub7d', q: 'Ile wynosi 20 − 4 · 3?', options: ['8', '48', '12', '52'], answer: 0, explain: 'Najpierw mnożenie: 4 · 3 = 12, potem 20 − 12 = 8.' },
          { id: '4631nv', q: 'Ile wynosi 3 + 4²?', options: ['19', '49', '11', '16'], answer: 0, explain: 'Najpierw potęga: 4² = 4 · 4 = 16, potem 3 + 16 = 19.' },
          { id: '1tr5fw', q: 'Ile wynosi 5³?', options: ['125', '15', '25', '53'], answer: 0, explain: '5³ = 5 · 5 · 5 = 25 · 5 = 125.' },
          { id: 'ypdr65', q: 'Która liczba jest kwadratem liczby naturalnej?', options: ['49', '50', '24', '90'], answer: 0, explain: '49 = 7 · 7 = 7². Liczby 24, 50 i 90 nie są kwadratami.' },
          { id: '7xtd0p', q: 'Ile wynosi 38 : 6?', options: ['6 reszty 2', '5 reszty 8', '6 reszty 3', '7 reszty 4'], answer: 0, explain: '6 · 6 = 36, do 38 brakuje 2. Odpowiedź „5 reszty 8” jest zła, bo reszta musi być mniejsza od 6.' },
          {
            id: '2dtsdq',
            q: 'Kulki rozdzielono na grupy po 4. Jakie dzielenie pokazuje rysunek?',
            svg: `<svg viewBox="0 0 400 90" role="img" aria-label="14 kulek: trzy grupy po 4 kulki obwiedzione ramką i 2 kulki osobno">
      <rect x="12" y="22" width="92" height="40" rx="12" class="ln-thin"/>
      <rect x="114" y="22" width="92" height="40" rx="12" class="ln-thin"/>
      <rect x="216" y="22" width="92" height="40" rx="12" class="ln-thin"/>
      <circle cx="28" cy="42" r="7" class="f1 s1"/><circle cx="48" cy="42" r="7" class="f1 s1"/><circle cx="68" cy="42" r="7" class="f1 s1"/><circle cx="88" cy="42" r="7" class="f1 s1"/><circle cx="130" cy="42" r="7" class="f1 s1"/><circle cx="150" cy="42" r="7" class="f1 s1"/><circle cx="170" cy="42" r="7" class="f1 s1"/><circle cx="190" cy="42" r="7" class="f1 s1"/><circle cx="232" cy="42" r="7" class="f1 s1"/><circle cx="252" cy="42" r="7" class="f1 s1"/><circle cx="272" cy="42" r="7" class="f1 s1"/><circle cx="292" cy="42" r="7" class="f1 s1"/>
      <circle cx="342" cy="42" r="7" class="f2 s2"/><circle cx="362" cy="42" r="7" class="f2 s2"/>
    </svg>`,
            options: ['14 : 4 = 3 reszty 2', '14 : 4 = 4 reszty 2', '14 : 4 = 3 reszty 1', '12 : 4 = 3'],
            answer: 0,
            explain: 'Jest 14 kulek. Zmieściły się 3 pełne grupy po 4 (to 12 kulek), a 2 zostały – to reszta.',
          },
          { id: '83tgs1', q: 'Kasia rozdała 24 naklejki po równo 4 koleżankom. Ile naklejek dostała każda?', options: ['6', '20', '28', '96'], answer: 0, explain: 'To podział: 24 : 4 = 6.' },
          { id: 'y5luzy', q: 'W jednej ławce siedzi 3 uczniów. Ile ławek zajmie 27 uczniów?', options: ['9', '24', '30', '81'], answer: 0, explain: 'To mieszczenie: ile razy 3 mieści się w 27? 27 : 3 = 9.' },
          { id: 'srgdn7', q: 'Tomek ma 45 zł, a Ania 9 zł. O ile złotych więcej ma Tomek?', options: ['o 36 zł', 'o 5 zł', 'o 54 zł', 'o 4 zł'], answer: 0, explain: '„O ile” – odejmujemy: 45 − 9 = 36.' },
          { id: 'hd1dnx', q: 'Tomek ma 45 zł, a Ania 9 zł. Ile razy więcej pieniędzy ma Tomek?', options: ['5 razy', '36 razy', '4 razy', '9 razy'], answer: 0, explain: '„Ile razy” – dzielimy: 45 : 9 = 5.' },
          { id: '94l0tk', q: 'Ile wynosi w przybliżeniu 49 · 31?', options: ['około 1 500', 'około 150', 'około 15 000', 'około 800'], answer: 0, explain: '49 ≈ 50, 31 ≈ 30, a 50 · 30 = 1 500 (dokładnie 1 519).' },
          { id: 'visobv', q: 'Prawda czy fałsz?\nPrzy dzieleniu przez 5 reszta może być równa 5.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Reszta musi być mniejsza od dzielnika. Przy dzieleniu przez 5 może wynosić 0, 1, 2, 3 albo 4.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'liczby',
        name: 'Liczby naturalne',
        chapter: 'działy 1 i 2 (oś liczbowa, system dziesiątkowy i rzymski)',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 1–2 (dziesiątkowy system zapisu liczb naturalnych, porównywanie i zaokrąglanie, oś liczbowa; system rzymski w zakresie 1–3000).' + WYBOR,
        theory: `
          <h3>Cyfry i rzędy</h3>
          <p>Mamy 10 cyfr: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Z nich zapisujemy każdą liczbę. Ta sama cyfra znaczy co innego w zależności od miejsca, na którym stoi. To miejsce to <b>rząd</b>.</p>
          <table>
            <tr><th>miliony</th><th>setki tysięcy</th><th>dziesiątki tysięcy</th><th>tysiące</th><th>setki</th><th>dziesiątki</th><th>jedności</th></tr>
            <tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>0</td><td>7</td></tr>
          </table>
          <p>Liczba 2 345 607: cyfra 5 oznacza 5 tysięcy, a cyfra 6 – 6 setek. Zero mówi, że dziesiątek nie ma.</p>
          <p><span class="f">10 jedności = 1 dziesiątka</span> · <span class="f">10 dziesiątek = 1 setka</span> · <span class="f">10 setek = 1 tysiąc</span> · <span class="f">1000 tysięcy = 1 milion</span></p>
          <h3>Zapis słowny</h3>
          <p>Duże liczby dzielimy od prawej na grupy po trzy cyfry. Najpierw czytamy tysiące, potem resztę:</p>
          <ul>
            <li>40 506 – czterdzieści tysięcy pięćset sześć,</li>
            <li>2 060 – dwa tysiące sześćdziesiąt,</li>
            <li>1 000 000 – milion (sześć zer).</li>
          </ul>
          <div class="tip">💡 Zera w środku liczby nie czytasz, ale musisz je zapisać: „siedem tysięcy dwadzieścia” to 7 020, a nie 720.</div>
          <h3>Porównywanie</h3>
          <ul>
            <li>Więcej cyfr – większa liczba: 10 001 &gt; 9 999.</li>
            <li>Tyle samo cyfr – porównuj od lewej pierwszą cyfrę, która się różni: 4 589 &lt; 4 612 (5 setek to mniej niż 6 setek).</li>
            <li>Znak <b>&lt;</b> czytamy „jest mniejsze od”, znak <b>&gt;</b> – „jest większe od”. Otwarta strona znaku jest zawsze od strony większej liczby.</li>
          </ul>
          <h3>Oś liczbowa</h3>
          <p>Na osi liczby rosną w prawo, a kreski są w równych odstępach. Im dalej w prawo, tym większa liczba. Zanim odczytasz punkt, sprawdź, co ile są kreski (co 1, co 10, co 100…).</p>
          <h3>Zaokrąglanie</h3>
          <p>Zaokrąglić – znaczy zastąpić liczbę najbliższą „okrągłą” liczbą. Piszemy znak <b>≈</b> („w przybliżeniu”). Patrzysz na cyfrę tuż za miejscem, do którego zaokrąglasz: <b>0, 1, 2, 3, 4</b> – w dół, <b>5, 6, 7, 8, 9</b> – w górę.</p>
          <table>
            <tr><th>Liczba</th><th>do dziesiątek</th><th>do setek</th><th>do tysięcy</th></tr>
            <tr><td>2 649</td><td>2 650</td><td>2 600</td><td>3 000</td></tr>
            <tr><td>7 518</td><td>7 520</td><td>7 500</td><td>8 000</td></tr>
          </table>
          <h3>Liczby rzymskie</h3>
          <table>
            <tr><th>I</th><th>V</th><th>X</th><th>L</th><th>C</th><th>D</th><th>M</th></tr>
            <tr><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr>
          </table>
          <ul>
            <li>Znaki zapisujemy od największego i <b>dodajemy</b>: XVI = 10 + 5 + 1 = 16, MMXXVI = 2026.</li>
            <li>Mniejszy znak przed większym <b>odejmujemy</b> – tylko w parach: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</li>
            <li>Ten sam znak piszemy najwyżej 3 razy z rzędu (III, XXX, MMM). Znaków V, L, D nie powtarzamy.</li>
          </ul>
          <p>Liczby rzymskie spotkasz na tarczach zegarów, w numerach rozdziałów i w nazwach wieków (XXI wiek).</p>
        `,
        flashcards: [
          ['Ile jest cyfr?', 'Dziesięć: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9'],
          ['10 dziesiątek to…', '1 setka (100)'],
          ['10 setek to…', '1 tysiąc (1000)'],
          ['1000 tysięcy to…', '1 milion (1 000 000)'],
          ['Zaokrąglanie – kiedy w górę?', 'Gdy decydująca cyfra to 5, 6, 7, 8 albo 9'],
          ['Znak ≈', '„w przybliżeniu równa się” – używamy go przy zaokrąglaniu'],
          ['L, C, D, M', '50, 100, 500, 1000'],
          ['IV i IX', '4 i 9'],
          ['XL i XC', '40 i 90'],
          ['CD i CM', '400 i 900'],
        ],
        questions: [
          { id: 'fxcce2', q: 'W liczbie 4 728 cyfra 7 oznacza…', options: ['7 setek', '7 dziesiątek', '7 tysięcy', '7 jedności'], answer: 0, explain: 'Licząc od prawej: 8 – jedności, 2 – dziesiątki, 7 – setki, 4 – tysiące.' },
          { id: 'ez2y4o', q: 'Która liczba to „trzydzieści tysięcy czterysta pięć”?', options: ['30 405', '34 005', '30 450', '300 405'], answer: 0, explain: 'Trzydzieści tysięcy to 30 000, czterysta pięć to 405 – razem 30 405.' },
          { id: '15a20y', q: 'Jak słownie zapisać liczbę 2 060?', options: ['dwa tysiące sześćdziesiąt', 'dwa tysiące sześćset', 'dwieście sześćdziesiąt', 'dwa tysiące szesnaście'], answer: 0, explain: '2 tysiące, 0 setek, 6 dziesiątek, 0 jedności.' },
          { id: '0uizuj', q: 'Jaka to liczba: 3 tysiące, 0 setek, 5 dziesiątek i 2 jedności?', options: ['3 052', '3 520', '352', '30 052'], answer: 0, explain: 'Zero setek musisz zapisać: 3 tysiące, 0 setek, 5 dziesiątek, 2 jedności → 3 052.' },
          { id: 'ulwqyw', q: 'Który znak trzeba wstawić?\n9 999 … 10 001', options: ['<', '>', '='], answer: 0, explain: '10 001 ma pięć cyfr, a 9 999 – cztery. Więcej cyfr, więc 10 001 jest większa: 9 999 < 10 001.' },
          { id: 'j1rcn5', q: 'Która liczba jest największa?', options: ['78 990', '78 909', '78 099', '70 899'], answer: 0, explain: 'Wszystkie mają po 5 cyfr. Porównujemy od lewej: 78 990 ma najwięcej setek (9), a potem dziesiątek (9).' },
          { id: 'tg16yv', q: 'Zaokrąglij 3 486 do setek.', options: ['3 500', '3 400', '3 490', '4 000'], answer: 0, explain: 'Patrzymy na cyfrę dziesiątek: 8, więc zaokrąglamy w górę – do 3 500.' },
          { id: 'n24yqc', q: 'Zaokrąglij 2 451 do tysięcy.', options: ['2 000', '3 000', '2 500', '2 450'], answer: 0, explain: 'Patrzymy na cyfrę setek: 4, więc zaokrąglamy w dół – do 2 000.' },
          { id: '9u37dp', q: 'Zaokrąglij 1 995 do dziesiątek.', options: ['2 000', '1 990', '1 900', '1 995'], answer: 0, explain: 'Cyfra jedności to 5, więc w górę: po 1 990 następna pełna dziesiątka to 2 000.' },
          { id: '02gifm', q: 'Która liczba po zaokrągleniu do dziesiątek daje 80?', options: ['84', '86', '89', '74'], answer: 0, explain: '84 ≈ 80 (cyfra jedności 4 – w dół). 86 i 89 dają 90, a 74 daje 70.' },
          {
            id: 't1ymwe',
            q: 'Jaką liczbę zaznaczono na osi literą A?',
            svg: `<svg viewBox="0 0 400 100" role="img" aria-label="Oś liczbowa od 200 do 300 z kreskami co 10. Punkt A leży na szóstej kresce za liczbą 200.">
      <line x1="16" y1="50" x2="392" y2="50" class="ln"/>
      <path d="M384,45 L393,50 L384,55" class="ln"/>
      <g class="ln"><line x1="30" y1="44" x2="30" y2="56"/><line x1="64" y1="44" x2="64" y2="56"/><line x1="98" y1="44" x2="98" y2="56"/><line x1="132" y1="44" x2="132" y2="56"/><line x1="166" y1="44" x2="166" y2="56"/><line x1="200" y1="44" x2="200" y2="56"/><line x1="234" y1="44" x2="234" y2="56"/><line x1="268" y1="44" x2="268" y2="56"/><line x1="302" y1="44" x2="302" y2="56"/><line x1="336" y1="44" x2="336" y2="56"/><line x1="370" y1="44" x2="370" y2="56"/></g>
      <text x="30" y="80" class="tx" text-anchor="middle">200</text>
      <text x="200" y="80" class="tx" text-anchor="middle">250</text>
      <text x="370" y="80" class="tx" text-anchor="middle">300</text>
      <circle cx="234" cy="50" r="7" class="t2"/>
      <text x="234" y="30" class="tx-b t2" text-anchor="middle">A</text>
    </svg>`,
            options: ['260', '206', '26', '270'],
            answer: 0,
            explain: 'Od 200 do 300 jest 10 odstępów, więc każdy odstęp to 10. A leży 6 kresek za 200: 200 + 60 = 260.',
          },
          { id: 'tk2qgu', q: 'Ile to jest XIV?', options: ['14', '16', '9', '11'], answer: 0, explain: 'X = 10, IV = 4, razem 14.' },
          { id: 'cfgh39', q: 'Jak zapisać 49 znakami rzymskimi?', options: ['XLIX', 'IL', 'XXXXIX', 'LIX'], answer: 0, explain: '40 = XL, 9 = IX, więc 49 = XLIX. Zapis IL jest niepoprawny, a X nie piszemy cztery razy z rzędu.' },
          { id: 'e112ql', q: 'Liczba MMXXVI to…', options: ['2026', '2016', '1026', '2024'], answer: 0, explain: 'MM = 2000, XX = 20, VI = 6 → 2026.' },
          { id: '2xodsm', q: 'Ile to jest CDXC?', options: ['490', '590', '410', '640'], answer: 0, explain: 'CD = 400 (500 − 100), XC = 90 (100 − 10), razem 490.' },
          { id: 'py4rbj', q: 'Prawda czy fałsz?\nZapis VV oznacza 10.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Znaku V nie powtarzamy. Liczbę 10 zapisujemy jako X.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'miary',
        name: 'Długość, masa, czas i pieniądze',
        chapter: 'dział 2 „Systemy zapisywania liczb”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 2 Miary, wym. 1 (mierzenie odcinków), 2 (mm, cm, dm, m, km), 7 (g, dag, kg, t), 8 (obliczenia kalendarzowe), 9 (obliczenia zegarowe), 13 (moduł ekonomiczno-finansowy – proste obliczenia pieniężne: zakupy, reszta, kieszonkowe, porównywanie cen).' + WYBOR,
        theory: `
          <h3>Długość</h3>
          <table>
            <tr><th>Jednostka</th><th>Ile to?</th></tr>
            <tr><td>1 cm (centymetr)</td><td>10 mm (milimetrów)</td></tr>
            <tr><td>1 dm (decymetr)</td><td>10 cm</td></tr>
            <tr><td>1 m (metr)</td><td>10 dm = 100 cm = 1000 mm</td></tr>
            <tr><td>1 km (kilometr)</td><td>1000 m</td></tr>
          </table>
          <p>Przykłady: 2 m 35 cm = 235 cm, 3 km = 3 000 m, 47 mm = 4 cm 7 mm.</p>
          <p>Odcinek mierzysz linijką od kreski <b>0</b>. Duże kreski to centymetry, małe – milimetry.</p>
          <h3>Masa</h3>
          <table>
            <tr><th>Jednostka</th><th>Ile to?</th></tr>
            <tr><td>1 dag (dekagram)</td><td>10 g (gramów)</td></tr>
            <tr><td>1 kg (kilogram)</td><td>100 dag = 1000 g</td></tr>
            <tr><td>1 t (tona)</td><td>1000 kg</td></tr>
          </table>
          <p>Przykłady: 25 dag = 250 g, pół kilograma = 50 dag = 500 g.</p>
          <div class="tip">💡 „Kilo” znaczy tysiąc: 1 km = 1000 m, 1 kg = 1000 g. „Deka” znaczy dziesięć: 1 dag = 10 g.</div>
          <h3>Zegar</h3>
          <p><span class="f">1 h = 60 min</span> · <span class="f">1 min = 60 s</span> · <span class="f">doba = 24 h</span> · <b>kwadrans</b> = 15 min · pół godziny = 30 min.</p>
          <p>Ile czasu minęło od 7:50 do 8:15? Licz skokami: do pełnej godziny 10 min (7:50 → 8:00), potem 15 min (8:00 → 8:15). Razem <b>25 minut</b>.</p>
          <p>Od 16:40 do 18:10: 16:40 → 17:40 to 1 h, 17:40 → 18:10 to 30 min. Razem <b>1 h 30 min</b>.</p>
          <h3>Kalendarz</h3>
          <ul>
            <li>Tydzień ma 7 dni, rok – 12 miesięcy.</li>
            <li>Rok zwykły ma 365 dni, rok przestępny – 366 (wtedy luty ma 29 dni zamiast 28). Rok przestępny zdarza się zwykle co 4 lata, np. 2024 i 2028.</li>
            <li>30 dni mają: kwiecień, czerwiec, wrzesień i listopad. Luty ma 28 albo 29 dni. Pozostałe miesiące mają po 31 dni.</li>
            <li>Dziś środa? Za 7 dni znów będzie środa, a za 9 dni – piątek.</li>
          </ul>
          <h3>Pieniądze</h3>
          <p><span class="f">1 zł = 100 gr</span>. Złote dodajesz do złotych, grosze do groszy; 100 gr zamieniasz na 1 zł.</p>
          <ul>
            <li>Sok za 3 zł 40 gr i bułka za 1 zł 20 gr: razem 4 zł 60 gr.</li>
            <li>Reszta z 10 zł: doliczaj jak kasjer – 4 zł 60 gr + 40 gr = 5 zł, + 5 zł = 10 zł. Reszta to <b>5 zł 40 gr</b>.</li>
            <li>Kieszonkowe: 12 zł na tydzień. Gra kosztuje 60 zł. 60 : 12 = 5, więc trzeba oszczędzać 5 tygodni.</li>
            <li>Porównanie cen: 3 batony po 2 zł 20 gr kosztują 6 zł 60 gr, a paczka 3 takich batonów – 6 zł 30 gr. Paczka jest tańsza o 30 gr.</li>
          </ul>
        `,
        flashcards: [
          ['1 cm = ? mm', '10 mm'],
          ['1 m = ? cm', '100 cm'],
          ['1 km = ? m', '1000 m'],
          ['1 dag = ? g', '10 g'],
          ['1 kg = ? dag = ? g', '100 dag = 1000 g'],
          ['1 t = ? kg', '1000 kg'],
          ['1 h = ? min', '60 min'],
          ['Kwadrans', '15 minut'],
          ['Doba', '24 godziny'],
          ['Rok zwykły i przestępny', '365 dni i 366 dni'],
          ['1 zł = ? gr', '100 gr'],
        ],
        questions: [
          { id: '2d6zui', q: 'Ile centymetrów ma 3 m 20 cm?', options: ['320 cm', '32 cm', '3 020 cm', '302 cm'], answer: 0, explain: '3 m = 300 cm, 300 cm + 20 cm = 320 cm.' },
          { id: '2kmj0s', q: 'Ile metrów mają 4 km?', options: ['4 000 m', '400 m', '40 m', '40 000 m'], answer: 0, explain: '1 km = 1000 m, więc 4 km = 4 000 m.' },
          { id: 'l17s4n', q: 'Ile to jest 56 mm?', options: ['5 cm 6 mm', '56 cm', '5 dm 6 cm', '50 cm 6 mm'], answer: 0, explain: '50 mm = 5 cm, zostaje 6 mm.' },
          {
            id: 'juqfcn',
            q: 'Jaką długość ma niebieski odcinek?',
            svg: `<svg viewBox="0 0 380 110" role="img" aria-label="Linijka od 0 do 6 cm z podziałką milimetrową. Nad nią odcinek od 0 do czwartego centymetra i siódmego milimetra.">
      <line x1="30" y1="22" x2="265" y2="22" class="ln s1" stroke-width="4"/>
      <line x1="30" y1="14" x2="30" y2="30" class="ln s1" stroke-width="3"/>
      <line x1="265" y1="14" x2="265" y2="30" class="ln s1" stroke-width="3"/>
      <rect x="16" y="40" width="328" height="46" rx="4" class="f4 s4"/><line x1="30" y1="40" x2="30" y2="56" class="ln"/><line x1="35" y1="40" x2="35" y2="47" class="ln-thin"/><line x1="40" y1="40" x2="40" y2="47" class="ln-thin"/><line x1="45" y1="40" x2="45" y2="47" class="ln-thin"/><line x1="50" y1="40" x2="50" y2="47" class="ln-thin"/><line x1="55" y1="40" x2="55" y2="51" class="ln-thin"/><line x1="60" y1="40" x2="60" y2="47" class="ln-thin"/><line x1="65" y1="40" x2="65" y2="47" class="ln-thin"/><line x1="70" y1="40" x2="70" y2="47" class="ln-thin"/><line x1="75" y1="40" x2="75" y2="47" class="ln-thin"/><line x1="80" y1="40" x2="80" y2="56" class="ln"/><line x1="85" y1="40" x2="85" y2="47" class="ln-thin"/><line x1="90" y1="40" x2="90" y2="47" class="ln-thin"/><line x1="95" y1="40" x2="95" y2="47" class="ln-thin"/><line x1="100" y1="40" x2="100" y2="47" class="ln-thin"/><line x1="105" y1="40" x2="105" y2="51" class="ln-thin"/><line x1="110" y1="40" x2="110" y2="47" class="ln-thin"/><line x1="115" y1="40" x2="115" y2="47" class="ln-thin"/><line x1="120" y1="40" x2="120" y2="47" class="ln-thin"/><line x1="125" y1="40" x2="125" y2="47" class="ln-thin"/><line x1="130" y1="40" x2="130" y2="56" class="ln"/><line x1="135" y1="40" x2="135" y2="47" class="ln-thin"/><line x1="140" y1="40" x2="140" y2="47" class="ln-thin"/><line x1="145" y1="40" x2="145" y2="47" class="ln-thin"/><line x1="150" y1="40" x2="150" y2="47" class="ln-thin"/><line x1="155" y1="40" x2="155" y2="51" class="ln-thin"/><line x1="160" y1="40" x2="160" y2="47" class="ln-thin"/><line x1="165" y1="40" x2="165" y2="47" class="ln-thin"/><line x1="170" y1="40" x2="170" y2="47" class="ln-thin"/><line x1="175" y1="40" x2="175" y2="47" class="ln-thin"/><line x1="180" y1="40" x2="180" y2="56" class="ln"/><line x1="185" y1="40" x2="185" y2="47" class="ln-thin"/><line x1="190" y1="40" x2="190" y2="47" class="ln-thin"/><line x1="195" y1="40" x2="195" y2="47" class="ln-thin"/><line x1="200" y1="40" x2="200" y2="47" class="ln-thin"/><line x1="205" y1="40" x2="205" y2="51" class="ln-thin"/><line x1="210" y1="40" x2="210" y2="47" class="ln-thin"/><line x1="215" y1="40" x2="215" y2="47" class="ln-thin"/><line x1="220" y1="40" x2="220" y2="47" class="ln-thin"/><line x1="225" y1="40" x2="225" y2="47" class="ln-thin"/><line x1="230" y1="40" x2="230" y2="56" class="ln"/><line x1="235" y1="40" x2="235" y2="47" class="ln-thin"/><line x1="240" y1="40" x2="240" y2="47" class="ln-thin"/><line x1="245" y1="40" x2="245" y2="47" class="ln-thin"/><line x1="250" y1="40" x2="250" y2="47" class="ln-thin"/><line x1="255" y1="40" x2="255" y2="51" class="ln-thin"/><line x1="260" y1="40" x2="260" y2="47" class="ln-thin"/><line x1="265" y1="40" x2="265" y2="47" class="ln-thin"/><line x1="270" y1="40" x2="270" y2="47" class="ln-thin"/><line x1="275" y1="40" x2="275" y2="47" class="ln-thin"/><line x1="280" y1="40" x2="280" y2="56" class="ln"/><line x1="285" y1="40" x2="285" y2="47" class="ln-thin"/><line x1="290" y1="40" x2="290" y2="47" class="ln-thin"/><line x1="295" y1="40" x2="295" y2="47" class="ln-thin"/><line x1="300" y1="40" x2="300" y2="47" class="ln-thin"/><line x1="305" y1="40" x2="305" y2="51" class="ln-thin"/><line x1="310" y1="40" x2="310" y2="47" class="ln-thin"/><line x1="315" y1="40" x2="315" y2="47" class="ln-thin"/><line x1="320" y1="40" x2="320" y2="47" class="ln-thin"/><line x1="325" y1="40" x2="325" y2="47" class="ln-thin"/><line x1="330" y1="40" x2="330" y2="56" class="ln"/><text x="30" y="76" class="tx-s" text-anchor="middle">0</text><text x="80" y="76" class="tx-s" text-anchor="middle">1</text><text x="130" y="76" class="tx-s" text-anchor="middle">2</text><text x="180" y="76" class="tx-s" text-anchor="middle">3</text><text x="230" y="76" class="tx-s" text-anchor="middle">4</text><text x="280" y="76" class="tx-s" text-anchor="middle">5</text><text x="330" y="76" class="tx-s" text-anchor="middle">6</text>
    </svg>`,
            options: ['4 cm 7 mm', '5 cm 3 mm', '4 cm 3 mm', '7 cm 4 mm'],
            answer: 0,
            explain: 'Odcinek zaczyna się przy 0 i kończy 7 małych kresek (milimetrów) za kreską 4 cm: 4 cm 7 mm.',
          },
          { id: '3cakxf', q: 'Ile gramów ma 15 dag?', options: ['150 g', '15 g', '1 500 g', '105 g'], answer: 0, explain: '1 dag = 10 g, więc 15 dag = 150 g.' },
          { id: '5jobyt', q: 'Pół kilograma to…', options: ['50 dag', '5 dag', '500 dag', '50 g'], answer: 0, explain: '1 kg = 100 dag, połowa to 50 dag (czyli 500 g).' },
          { id: 'mnsgrg', q: 'Ciężarówka przewozi 4 t piasku. Ile to kilogramów?', options: ['4 000 kg', '400 kg', '40 kg', '40 000 kg'], answer: 0, explain: '1 t = 1000 kg, więc 4 t = 4 000 kg.' },
          {
            id: '83wevy',
            q: 'Którą godzinę pokazuje zegar (rano)?',
            svg: `<svg viewBox="0 0 300 180" role="img" aria-label="Tarcza zegara: duża wskazówka na 9, mała wskazówka między 9 a 10, blisko 10">
      <circle cx="150" cy="90" r="80" class="bg ln"/><line x1="150" y1="19" x2="150" y2="10" class="ln"/><line x1="157.9" y1="14.4" x2="158.4" y2="10.4" class="ln-thin"/><line x1="165.8" y1="15.7" x2="166.6" y2="11.7" class="ln-thin"/><line x1="173.5" y1="17.7" x2="174.7" y2="13.9" class="ln-thin"/><line x1="180.9" y1="20.6" x2="182.5" y2="16.9" class="ln-thin"/><line x1="185.5" y1="28.5" x2="190" y2="20.7" class="ln"/><line x1="194.7" y1="28.5" x2="197" y2="25.3" class="ln-thin"/><line x1="200.9" y1="33.5" x2="203.5" y2="30.5" class="ln-thin"/><line x1="206.5" y1="39.1" x2="209.5" y2="36.5" class="ln-thin"/><line x1="211.5" y1="45.3" x2="214.7" y2="43" class="ln-thin"/><line x1="211.5" y1="54.5" x2="219.3" y2="50" class="ln"/><line x1="219.4" y1="59.1" x2="223.1" y2="57.5" class="ln-thin"/><line x1="222.3" y1="66.5" x2="226.1" y2="65.3" class="ln-thin"/><line x1="224.3" y1="74.2" x2="228.3" y2="73.4" class="ln-thin"/><line x1="225.6" y1="82.1" x2="229.6" y2="81.6" class="ln-thin"/><line x1="221" y1="90" x2="230" y2="90" class="ln"/><line x1="225.6" y1="97.9" x2="229.6" y2="98.4" class="ln-thin"/><line x1="224.3" y1="105.8" x2="228.3" y2="106.6" class="ln-thin"/><line x1="222.3" y1="113.5" x2="226.1" y2="114.7" class="ln-thin"/><line x1="219.4" y1="120.9" x2="223.1" y2="122.5" class="ln-thin"/><line x1="211.5" y1="125.5" x2="219.3" y2="130" class="ln"/><line x1="211.5" y1="134.7" x2="214.7" y2="137" class="ln-thin"/><line x1="206.5" y1="140.9" x2="209.5" y2="143.5" class="ln-thin"/><line x1="200.9" y1="146.5" x2="203.5" y2="149.5" class="ln-thin"/><line x1="194.7" y1="151.5" x2="197" y2="154.7" class="ln-thin"/><line x1="185.5" y1="151.5" x2="190" y2="159.3" class="ln"/><line x1="180.9" y1="159.4" x2="182.5" y2="163.1" class="ln-thin"/><line x1="173.5" y1="162.3" x2="174.7" y2="166.1" class="ln-thin"/><line x1="165.8" y1="164.3" x2="166.6" y2="168.3" class="ln-thin"/><line x1="157.9" y1="165.6" x2="158.4" y2="169.6" class="ln-thin"/><line x1="150" y1="161" x2="150" y2="170" class="ln"/><line x1="142.1" y1="165.6" x2="141.6" y2="169.6" class="ln-thin"/><line x1="134.2" y1="164.3" x2="133.4" y2="168.3" class="ln-thin"/><line x1="126.5" y1="162.3" x2="125.3" y2="166.1" class="ln-thin"/><line x1="119.1" y1="159.4" x2="117.5" y2="163.1" class="ln-thin"/><line x1="114.5" y1="151.5" x2="110" y2="159.3" class="ln"/><line x1="105.3" y1="151.5" x2="103" y2="154.7" class="ln-thin"/><line x1="99.1" y1="146.5" x2="96.5" y2="149.5" class="ln-thin"/><line x1="93.5" y1="140.9" x2="90.5" y2="143.5" class="ln-thin"/><line x1="88.5" y1="134.7" x2="85.3" y2="137" class="ln-thin"/><line x1="88.5" y1="125.5" x2="80.7" y2="130" class="ln"/><line x1="80.6" y1="120.9" x2="76.9" y2="122.5" class="ln-thin"/><line x1="77.7" y1="113.5" x2="73.9" y2="114.7" class="ln-thin"/><line x1="75.7" y1="105.8" x2="71.7" y2="106.6" class="ln-thin"/><line x1="74.4" y1="97.9" x2="70.4" y2="98.4" class="ln-thin"/><line x1="79" y1="90" x2="70" y2="90" class="ln"/><line x1="74.4" y1="82.1" x2="70.4" y2="81.6" class="ln-thin"/><line x1="75.7" y1="74.2" x2="71.7" y2="73.4" class="ln-thin"/><line x1="77.7" y1="66.5" x2="73.9" y2="65.3" class="ln-thin"/><line x1="80.6" y1="59.1" x2="76.9" y2="57.5" class="ln-thin"/><line x1="88.5" y1="54.5" x2="80.7" y2="50" class="ln"/><line x1="88.5" y1="45.3" x2="85.3" y2="43" class="ln-thin"/><line x1="93.5" y1="39.1" x2="90.5" y2="36.5" class="ln-thin"/><line x1="99.1" y1="33.5" x2="96.5" y2="30.5" class="ln-thin"/><line x1="105.3" y1="28.5" x2="103" y2="25.3" class="ln-thin"/><line x1="114.5" y1="28.5" x2="110" y2="20.7" class="ln"/><line x1="119.1" y1="20.6" x2="117.5" y2="16.9" class="ln-thin"/><line x1="126.5" y1="17.7" x2="125.3" y2="13.9" class="ln-thin"/><line x1="134.2" y1="15.7" x2="133.4" y2="11.7" class="ln-thin"/><line x1="142.1" y1="14.4" x2="141.6" y2="10.4" class="ln-thin"/><text x="179.5" y="43.9" class="tx-s" text-anchor="middle">1</text><text x="201.1" y="65.5" class="tx-s" text-anchor="middle">2</text><text x="209" y="95" class="tx-s" text-anchor="middle">3</text><text x="201.1" y="124.5" class="tx-s" text-anchor="middle">4</text><text x="179.5" y="146.1" class="tx-s" text-anchor="middle">5</text><text x="150" y="154" class="tx-s" text-anchor="middle">6</text><text x="120.5" y="146.1" class="tx-s" text-anchor="middle">7</text><text x="98.9" y="124.5" class="tx-s" text-anchor="middle">8</text><text x="91" y="95" class="tx-s" text-anchor="middle">9</text><text x="98.9" y="65.5" class="tx-s" text-anchor="middle">10</text><text x="120.5" y="43.9" class="tx-s" text-anchor="middle">11</text><text x="150" y="36" class="tx-s" text-anchor="middle">12</text><line x1="150" y1="90" x2="116.7" y2="76.2" class="ln" stroke-width="6" stroke-linecap="round"/><line x1="150" y1="90" x2="98.8" y2="90" class="ln s2" stroke-width="3" stroke-linecap="round"/><circle cx="150" cy="90" r="4" class="t2"/>
    </svg>`,
            options: ['9:45', '10:45', '9:09', '8:45'],
            answer: 0,
            explain: 'Duża wskazówka na 9 to 45 minut. Mała jest między 9 a 10 – minęła 9, a 10 jeszcze nie. Jest 9:45 (za kwadrans dziesiąta).',
          },
          { id: 'v0ig0j', q: 'Wyszłaś z domu o 7:50, a do szkoły doszłaś o 8:15. Ile trwała droga?', options: ['25 minut', '35 minut', '65 minut', '15 minut'], answer: 0, explain: 'Od 7:50 do 8:00 – 10 minut, od 8:00 do 8:15 – 15 minut. Razem 25 minut.' },
          { id: 'mil5bc', q: 'Film trwa od 16:40 do 18:10. Ile trwa?', options: ['1 h 30 min', '2 h 30 min', '1 h 50 min', '1 h 10 min'], answer: 0, explain: '16:40 → 17:40 to 1 h, 17:40 → 18:10 to 30 min. Razem 1 h 30 min.' },
          { id: 'vjybok', q: 'Dziś jest środa. Jaki dzień tygodnia będzie za 9 dni?', options: ['piątek', 'czwartek', 'sobota', 'środa'], answer: 0, explain: 'Za 7 dni znów będzie środa, a 2 dni później – piątek.' },
          { id: 'ielf9o', q: 'Kupujesz sok za 3 zł 40 gr i płacisz monetą 5 zł. Ile reszty dostaniesz?', options: ['1 zł 60 gr', '2 zł 60 gr', '1 zł 40 gr', '2 zł 40 gr'], answer: 0, explain: 'Doliczaj: 3 zł 40 gr + 60 gr = 4 zł, + 1 zł = 5 zł. Reszta: 1 zł 60 gr.' },
          { id: '19fd8u', q: 'Długopis kosztuje 2 zł 50 gr. Ile zapłacisz za 4 długopisy?', options: ['10 zł', '8 zł 50 gr', '9 zł', '10 zł 50 gr'], answer: 0, explain: '4 · 2 zł = 8 zł, 4 · 50 gr = 200 gr = 2 zł. Razem 10 zł.' },
          { id: '4kx0xi', q: 'Dostajesz 12 zł kieszonkowego na tydzień i wszystko odkładasz. Ile tygodni musisz oszczędzać na grę za 60 zł?', options: ['5', '6', '4', '48'], answer: 0, explain: '60 : 12 = 5, bo 5 · 12 = 60.' },
          { id: 'oa3ua0', q: 'Co jest tańsze: 3 batony po 2 zł 20 gr czy paczka 3 takich batonów za 6 zł 30 gr?', options: ['paczka – o 30 gr', 'pojedyncze batony – o 30 gr', 'kosztują tyle samo', 'paczka – o 3 zł'], answer: 0, explain: '3 · 2 zł 20 gr = 6 zł 60 gr. To o 30 gr więcej niż paczka (6 zł 30 gr).' },
          { id: '57kluf', q: 'Prawda czy fałsz?\n1 m = 1000 mm', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '1 m = 100 cm, a każdy centymetr to 10 mm: 100 · 10 = 1000 mm.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'proste-katy',
        name: 'Proste, odcinki i kąty',
        chapter: 'dział 4 „Figury geometryczne”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 1 (punkt, prosta, półprosta, odcinek), 2 (rodzaje kątów, wierzchołek i ramiona), 3 (proste i odcinki prostopadłe i równoległe, także na kartce w kratkę); dz. 2 Miary, wym. 3 (mierzenie kątów).' + WYBOR,
        theory: `
          <h3>Figury podstawowe</h3>
          <table>
            <tr><th>Figura</th><th>Co to jest?</th><th>Jak oznaczamy</th></tr>
            <tr><td>punkt</td><td>kropka – miejsce na kartce</td><td>wielka litera: A, B</td></tr>
            <tr><td>prosta</td><td>prosta linia bez początku i bez końca</td><td>mała litera: k, l</td></tr>
            <tr><td>półprosta</td><td>ma początek, ale nie ma końca</td><td>półprosta o początku O</td></tr>
            <tr><td>odcinek</td><td>ma dwa końce, można zmierzyć jego długość</td><td>odcinek AB</td></tr>
          </table>
          <h3>Proste prostopadłe i równoległe</h3>
          <ul>
            <li><b>Prostopadłe</b> – przecinają się pod kątem prostym (jak krawędzie w rogu kartki). Zapis: <span class="f">k ⊥ l</span>.</li>
            <li><b>Równoległe</b> – nigdy się nie przecinają, wszędzie są w tej samej odległości (jak szyny). Zapis: <span class="f">k ∥ l</span>.</li>
          </ul>
          <p>Na kartce w kratkę rysujesz je wzdłuż linii kratek. Bez kratki pomaga ekierka i linijka.</p>
          <h3>Kąt</h3>
          <p>Kąt tworzą dwie półproste o wspólnym początku. Półproste to <b>ramiona</b> kąta, a ich wspólny początek – <b>wierzchołek</b>. Kąty mierzymy w <b>stopniach</b> (°).</p>
          <table>
            <tr><th>Kąt</th><th>Miara</th><th>Przykład</th></tr>
            <tr><td>ostry</td><td>mniej niż 90°</td><td>czubek kawałka pizzy</td></tr>
            <tr><td>prosty</td><td>dokładnie 90°</td><td>róg kartki</td></tr>
            <tr><td>rozwarty</td><td>więcej niż 90°, mniej niż 180°</td><td>szeroko otwarty laptop</td></tr>
            <tr><td>półpełny</td><td>180°</td><td>ramiona tworzą jedną prostą</td></tr>
            <tr><td>pełny</td><td>360°</td><td>pełny obrót</td></tr>
          </table>
          <p>Ramiona dzielą kartkę na dwie części – na dwa kąty. Mniejszy to <b>kąt wypukły</b>, a ten większy od półpełnego – <b>kąt wklęsły</b>.</p>
          <h3>Kątomierz</h3>
          <ol>
            <li>Środek kątomierza przyłóż do wierzchołka kąta.</li>
            <li>Kreskę zera ustaw na jednym ramieniu.</li>
            <li>Odczytaj liczbę przy drugim ramieniu – na tej skali, która przy pierwszym ramieniu zaczyna się od 0.</li>
          </ol>
          <div class="tip">💡 Kątomierz ma dwie skale. Zanim odczytasz wynik, oceń na oko: kąt ostry ma mniej niż 90°, więc 60°, a nie 120°.</div>
        `,
        flashcards: [
          ['Prosta', 'Linia bez początku i bez końca'],
          ['Półprosta', 'Ma początek, ale nie ma końca'],
          ['Odcinek', 'Ma dwa końce i długość'],
          ['Proste prostopadłe (⊥)', 'Przecinają się pod kątem prostym'],
          ['Proste równoległe (∥)', 'Nigdy się nie przecinają'],
          ['Wierzchołek i ramiona kąta', 'Wspólny początek i dwie półproste, które tworzą kąt'],
          ['Kąt ostry', 'Mniej niż 90°'],
          ['Kąt prosty', 'Dokładnie 90°'],
          ['Kąt rozwarty', 'Więcej niż 90°, ale mniej niż 180°'],
          ['Kąt półpełny i pełny', '180° i 360°'],
        ],
        questions: [
          { id: '53f3fg', q: 'Która figura ma początek, ale nie ma końca?', options: ['półprosta', 'odcinek', 'prosta', 'punkt'], answer: 0, explain: 'Półprosta zaczyna się w jednym punkcie i biegnie bez końca w jedną stronę.' },
          { id: '1pi026', q: 'Która figura ma dwa końce i można zmierzyć jej długość?', options: ['odcinek', 'prosta', 'półprosta'], answer: 0, explain: 'Tylko odcinek ma dwa końce. Prosta i półprosta nie mają długości, bo biegną bez końca.' },
          { id: '9knwpa', q: 'Proste, które przecinają się pod kątem prostym, to proste…', options: ['prostopadłe', 'równoległe', 'rozwarte'], answer: 0, explain: 'Prostopadłe – przecinają się pod kątem prostym (90°).' },
          { id: '0ike1t', q: 'Proste równoległe…', options: ['nigdy się nie przecinają', 'przecinają się pod kątem prostym', 'przecinają się w dwóch punktach'], answer: 0, explain: 'Równoległe biegną obok siebie jak szyny i nigdy się nie spotykają.' },
          { id: 'muz494', q: 'Na rysunku są proste a, b, c i d. Które proste są równoległe?', svg: SVG_PROSTE, options: ['a i b', 'a i c', 'c i d', 'b i d'], answer: 0, explain: 'Proste a i b biegną wzdłuż linii kratki w tej samej odległości od siebie – nigdy się nie przetną.' },
          { id: 'fs2lau', q: 'Na rysunku są proste a, b, c i d. Która prosta jest prostopadła do prostej a?', svg: SVG_PROSTE, options: ['c', 'b', 'd'], answer: 0, explain: 'Prosta c biegnie pionowo wzdłuż linii kratki i przecina poziomą prostą a pod kątem prostym. Prosta d przecina a ukośnie.' },
          { id: 'h40r1o', q: 'Kąt o mierze 35° to kąt…', options: ['ostry', 'prosty', 'rozwarty', 'półpełny'], answer: 0, explain: '35° to mniej niż 90°, więc kąt jest ostry.' },
          { id: '5tg14m', q: 'Kąt o mierze 120° to kąt…', options: ['rozwarty', 'ostry', 'prosty', 'półpełny'], answer: 0, explain: '120° to więcej niż 90°, ale mniej niż 180° – kąt rozwarty.' },
          { id: 'l8pqfm', q: 'Ile stopni ma kąt półpełny?', options: ['180°', '90°', '360°', '100°'], answer: 0, explain: 'Kąt półpełny to połowa pełnego obrotu: 360° : 2 = 180°.' },
          { id: 'w6unty', q: 'Ile stopni ma kąt pełny?', options: ['360°', '180°', '100°', '90°'], answer: 0, explain: 'Kąt pełny to cały obrót – 360°.' },
          { id: 'sn4atk', q: 'O godzinie 3:00 wskazówki zegara tworzą kąt…', options: ['prosty', 'ostry', 'rozwarty', 'półpełny'], answer: 0, explain: 'Duża wskazówka na 12, mała na 3 – to ćwierć obrotu, czyli 90°.' },
          { id: '59a02w', q: 'O godzinie 6:00 wskazówki zegara tworzą kąt…', options: ['półpełny', 'prosty', 'pełny', 'ostry'], answer: 0, explain: 'Wskazówki na 12 i na 6 leżą na jednej prostej – to pół obrotu, 180°.' },
          {
            id: 'gmy53r',
            q: 'Ile stopni ma zaznaczony kąt?',
            svg: `<svg viewBox="0 0 380 205" role="img" aria-label="Kątomierz przyłożony do kąta. Jedno ramię na zerze zewnętrznej skali, drugie ramię jedną kreskę (10 stopni) za liczbą 30 na zewnętrznej skali.">
      <path d="M40,185 A150,150 0 0 1 340,185 Z" class="f4 s4"/><line x1="328" y1="185" x2="340" y2="185" class="ln-thin"/><line x1="333.5" y1="172.4" x2="339.4" y2="171.9" class="ln-thin"/><line x1="325.9" y1="161" x2="337.7" y2="159" class="ln-thin"/><line x1="329.1" y1="147.7" x2="334.9" y2="146.2" class="ln-thin"/><line x1="319.7" y1="137.8" x2="331" y2="133.7" class="ln-thin"/><line x1="320.5" y1="124.1" x2="325.9" y2="121.6" class="ln-thin"/><line x1="309.5" y1="116" x2="319.9" y2="110" class="ln-thin"/><line x1="308" y1="102.4" x2="312.9" y2="99" class="ln-thin"/><line x1="295.7" y1="96.3" x2="304.9" y2="88.6" class="ln-thin"/><line x1="291.8" y1="83.2" x2="296.1" y2="78.9" class="ln-thin"/><line x1="278.7" y1="79.3" x2="286.4" y2="70.1" class="ln-thin"/><line x1="272.6" y1="67" x2="276" y2="62.1" class="ln-thin"/><line x1="259" y1="65.5" x2="265" y2="55.1" class="ln-thin"/><line x1="250.9" y1="54.5" x2="253.4" y2="49.1" class="ln-thin"/><line x1="237.2" y1="55.3" x2="241.3" y2="44" class="ln-thin"/><line x1="227.3" y1="45.9" x2="228.8" y2="40.1" class="ln-thin"/><line x1="214" y1="49.1" x2="216" y2="37.3" class="ln-thin"/><line x1="202.6" y1="41.5" x2="203.1" y2="35.6" class="ln-thin"/><line x1="190" y1="47" x2="190" y2="35" class="ln-thin"/><line x1="177.4" y1="41.5" x2="176.9" y2="35.6" class="ln-thin"/><line x1="166" y1="49.1" x2="164" y2="37.3" class="ln-thin"/><line x1="152.7" y1="45.9" x2="151.2" y2="40.1" class="ln-thin"/><line x1="142.8" y1="55.3" x2="138.7" y2="44" class="ln-thin"/><line x1="129.1" y1="54.5" x2="126.6" y2="49.1" class="ln-thin"/><line x1="121" y1="65.5" x2="115" y2="55.1" class="ln-thin"/><line x1="107.4" y1="67" x2="104" y2="62.1" class="ln-thin"/><line x1="101.3" y1="79.3" x2="93.6" y2="70.1" class="ln-thin"/><line x1="88.2" y1="83.2" x2="83.9" y2="78.9" class="ln-thin"/><line x1="84.3" y1="96.3" x2="75.1" y2="88.6" class="ln-thin"/><line x1="72" y1="102.4" x2="67.1" y2="99" class="ln-thin"/><line x1="70.5" y1="116" x2="60.1" y2="110" class="ln-thin"/><line x1="59.5" y1="124.1" x2="54.1" y2="121.6" class="ln-thin"/><line x1="60.3" y1="137.8" x2="49" y2="133.7" class="ln-thin"/><line x1="50.9" y1="147.7" x2="45.1" y2="146.2" class="ln-thin"/><line x1="54.1" y1="161" x2="42.3" y2="159" class="ln-thin"/><line x1="46.5" y1="172.4" x2="40.6" y2="171.9" class="ln-thin"/><line x1="52" y1="185" x2="40" y2="185" class="ln-thin"/><text x="311.5" y="180.4" class="tx t1" text-anchor="middle">0</text><text x="283.6" y="181.8" class="tx-s" text-anchor="middle">180</text><text x="295.7" y="130" class="tx t1" text-anchor="middle">30</text><text x="271.4" y="143" class="tx-s" text-anchor="middle">150</text><text x="251" y="85.3" class="tx t1" text-anchor="middle">60</text><text x="237" y="108.6" class="tx-s" text-anchor="middle">120</text><text x="190" y="69" class="tx t1" text-anchor="middle">90</text><text x="190" y="96" class="tx-s" text-anchor="middle">90</text><text x="129" y="85.3" class="tx t1" text-anchor="middle">120</text><text x="143" y="108.6" class="tx-s" text-anchor="middle">60</text><text x="84.3" y="130" class="tx t1" text-anchor="middle">150</text><text x="108.6" y="143" class="tx-s" text-anchor="middle">30</text><text x="68.5" y="180.4" class="tx t1" text-anchor="middle">180</text><text x="96.4" y="181.8" class="tx-s" text-anchor="middle">0</text><path d="M190,185 L224,185 A34,34 0 0 0 216,163.1 Z" class="f2 s2"/><line x1="190" y1="185" x2="358" y2="185" class="ln sw"/><line x1="190" y1="185" x2="318.7" y2="77" class="ln sw"/><circle cx="190" cy="185" r="4" class="t2"/>
    </svg>`,
            options: ['40°', '140°', '30°', '50°'],
            answer: 0,
            explain: 'Dolne ramię leży na zerze zewnętrznej skali – na niej odczytujesz wynik. Drugie ramię jest jedną kreskę (10°) za liczbą 30, czyli na 40. Kąt jest ostry, więc ma 40°, a nie 140°.',
          },
          { id: 'ry1deg', q: 'Jak przyłożyć kątomierz do kąta?', options: ['środek kątomierza w wierzchołku, zero na jednym ramieniu', 'zero kątomierza w wierzchołku kąta', 'środek kątomierza na końcu ramienia'], answer: 0, explain: 'Środek kątomierza – w wierzchołek, linia zera – wzdłuż jednego ramienia.' },
          { id: 'gs9bc7', q: 'Prawda czy fałsz?\nProsta ma długość.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Prosta nie ma końców, więc nie da się zmierzyć jej długości. Długość ma odcinek.' },
          { id: 'p3r2yj', q: 'Prawda czy fałsz?\nKąt wklęsły jest większy od kąta półpełnego.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Kąt wklęsły ma więcej niż 180° (ale mniej niż 360°).' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'wielokaty',
        name: 'Wielokąty, prostokąt i kwadrat, koło i okrąg',
        chapter: 'dział 4 „Figury geometryczne” (pole prostokąta – dział 7)',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 5 (wielokąty: wierzchołki, kąty, boki, przekątne), 6 (koło i okrąg: środek, promień, średnica, cięciwa), 11 (tylko prostokąt i kwadrat), 14 (tylko pole prostokąta i kwadratu), 15 (obwód wielokąta); dz. 2 Miary, wym. 4 (tylko cm² i m²).' + WYBOR,
        theory: `
          <h3>Wielokąty</h3>
          <p>Wielokąt to figura zamknięta, ograniczona odcinkami. Te odcinki to <b>boki</b>, a punkty, w których się łączą – <b>wierzchołki</b>. Przy każdym wierzchołku jest <b>kąt</b> wielokąta.</p>
          <ul>
            <li>Trójkąt – 3 boki, czworokąt – 4, pięciokąt – 5, sześciokąt – 6. Wierzchołków i kątów jest tyle samo co boków.</li>
            <li><b>Przekątna</b> to odcinek, który łączy dwa wierzchołki, ale nie jest bokiem. Trójkąt nie ma przekątnych, czworokąt ma 2, pięciokąt – 5.</li>
          </ul>
          <h3>Prostokąt i kwadrat</h3>
          <table>
            <tr><th></th><th>Prostokąt</th><th>Kwadrat</th></tr>
            <tr><td>kąty</td><td>4 kąty proste</td><td>4 kąty proste</td></tr>
            <tr><td>boki</td><td>przeciwległe boki równe i równoległe</td><td>wszystkie 4 boki równe</td></tr>
            <tr><td>przekątne</td><td>równej długości</td><td>równej długości</td></tr>
          </table>
          <div class="tip">💡 Każdy kwadrat jest prostokątem (ma 4 kąty proste). Ale nie każdy prostokąt jest kwadratem.</div>
          <h3>Obwód</h3>
          <p>Obwód to suma długości wszystkich boków – droga dookoła figury.</p>
          <ul>
            <li>Prostokąt 5 cm × 3 cm: <span class="f">5 + 3 + 5 + 3 = 16 cm</span>, czyli <span class="f">2 · 5 + 2 · 3 = 16 cm</span>.</li>
            <li>Kwadrat o boku 4 cm: <span class="f">4 · 4 = 16 cm</span>.</li>
          </ul>
          <h3>Pole</h3>
          <p>Pole mówi, ile miejsca zajmuje figura. Mierzymy je kwadratami: <b>1 cm²</b> (centymetr kwadratowy) to kwadrat o boku 1 cm, <b>1 m²</b> (metr kwadratowy) to kwadrat o boku 1 m.</p>
          <ul>
            <li>Prostokąt 5 cm × 3 cm mieści 3 rzędy po 5 kwadratów 1 cm²: <span class="f">P = 5 · 3 = 15 cm²</span>.</li>
            <li>Pole prostokąta o bokach a i b: <span class="f">P = a · b</span>. Pole kwadratu o boku a: <span class="f">P = a · a</span>.</li>
            <li>Pokój 4 m × 3 m ma podłogę o polu 12 m².</li>
          </ul>
          <div class="tip">💡 Obwód podajesz w cm albo m, a pole w cm² albo m². Prostokąt 5 cm × 3 cm: obwód 16 cm, pole 15 cm².</div>
          <h3>Koło i okrąg</h3>
          <ul>
            <li><b>Okrąg</b> to sama linia (jak obręcz). <b>Koło</b> to okrąg razem z tym, co w środku (jak moneta).</li>
            <li><b>Promień</b> (r) – odcinek od środka do punktu na okręgu.</li>
            <li><b>Średnica</b> (d) – odcinek przechodzący przez środek, z jednej strony okręgu na drugą: <span class="f">d = 2 · r</span>.</li>
            <li><b>Cięciwa</b> – odcinek łączący dwa punkty okręgu. Najdłuższa cięciwa to średnica.</li>
          </ul>
        `,
        flashcards: [
          ['Przekątna wielokąta', 'Odcinek łączący dwa wierzchołki, który nie jest bokiem'],
          ['Ile przekątnych ma czworokąt?', '2'],
          ['Prostokąt', '4 kąty proste, przeciwległe boki równe'],
          ['Kwadrat', '4 kąty proste i 4 równe boki'],
          ['Obwód', 'Suma długości wszystkich boków'],
          ['Pole prostokąta', 'P = a · b'],
          ['Pole kwadratu', 'P = a · a'],
          ['1 cm²', 'Pole kwadratu o boku 1 cm'],
          ['Okrąg a koło', 'Okrąg – sama linia; koło – linia razem z wnętrzem'],
          ['Średnica a promień', 'd = 2 · r'],
          ['Cięciwa', 'Odcinek łączący dwa punkty okręgu'],
        ],
        questions: [
          { id: 'ifeu3y', q: 'Ile przekątnych ma czworokąt?', options: ['2', '4', '1', '0'], answer: 0, explain: 'Każdy wierzchołek łączymy z wierzchołkiem naprzeciwko – są 2 przekątne.' },
          { id: 'yisr9h', q: 'Ile przekątnych ma trójkąt?', options: ['0', '1', '3', '2'], answer: 0, explain: 'W trójkącie każde dwa wierzchołki łączy bok, więc nie ma przekątnych.' },
          { id: '0oazt9', q: 'Pięciokąt ma…', options: ['5 boków i 5 wierzchołków', '5 boków i 4 wierzchołki', '4 boki i 5 wierzchołków'], answer: 0, explain: 'Wielokąt ma tyle samo boków, wierzchołków i kątów.' },
          { id: 'hac15w', q: 'Jaki obwód ma prostokąt o bokach 6 cm i 4 cm?', options: ['20 cm', '10 cm', '24 cm', '20 cm²'], answer: 0, explain: '6 + 4 + 6 + 4 = 20 cm. Obwód podajemy w cm, nie w cm².' },
          { id: 'lj7xgg', q: 'Jakie pole ma prostokąt o bokach 6 cm i 4 cm?', options: ['24 cm²', '20 cm²', '24 cm', '10 cm²'], answer: 0, explain: 'P = 6 · 4 = 24 cm². Pole podajemy w cm².' },
          { id: '502jzx', q: 'Jaki obwód ma kwadrat o boku 7 cm?', options: ['28 cm', '49 cm', '14 cm', '21 cm'], answer: 0, explain: 'Kwadrat ma 4 równe boki: 4 · 7 = 28 cm.' },
          { id: 'lwnfxe', q: 'Jakie pole ma kwadrat o boku 7 cm?', options: ['49 cm²', '28 cm²', '14 cm²', '49 cm'], answer: 0, explain: 'P = 7 · 7 = 49 cm².' },
          { id: 'srl6qc', q: 'Kwadrat ma obwód 20 cm. Jaką długość ma jego bok?', options: ['5 cm', '10 cm', '4 cm', '80 cm'], answer: 0, explain: 'Kwadrat ma 4 równe boki: 20 : 4 = 5 cm.' },
          { id: 'z0eovp', q: 'Podłoga w pokoju ma kształt prostokąta 4 m na 3 m. Jakie ma pole?', options: ['12 m²', '14 m²', '7 m²', '12 m'], answer: 0, explain: 'P = 4 · 3 = 12 m². (14 m to obwód – długość listwy dookoła pokoju.)' },
          {
            id: '7zqhcs',
            q: 'Bok kratki ma 1 cm. Jakie pole ma zamalowany prostokąt?',
            svg: `<svg viewBox="0 0 400 216" role="img" aria-label="Kratka. Zamalowany prostokąt o szerokości 5 kratek i wysokości 3 kratek.">
      <g class="ln-thin"><line x1="20" y1="10" x2="20" y2="190"/><line x1="50" y1="10" x2="50" y2="190"/><line x1="80" y1="10" x2="80" y2="190"/><line x1="110" y1="10" x2="110" y2="190"/><line x1="140" y1="10" x2="140" y2="190"/><line x1="170" y1="10" x2="170" y2="190"/><line x1="200" y1="10" x2="200" y2="190"/><line x1="230" y1="10" x2="230" y2="190"/><line x1="260" y1="10" x2="260" y2="190"/><line x1="290" y1="10" x2="290" y2="190"/><line x1="320" y1="10" x2="320" y2="190"/><line x1="350" y1="10" x2="350" y2="190"/><line x1="380" y1="10" x2="380" y2="190"/><line x1="20" y1="10" x2="380" y2="10"/><line x1="20" y1="40" x2="380" y2="40"/><line x1="20" y1="70" x2="380" y2="70"/><line x1="20" y1="100" x2="380" y2="100"/><line x1="20" y1="130" x2="380" y2="130"/><line x1="20" y1="160" x2="380" y2="160"/><line x1="20" y1="190" x2="380" y2="190"/></g>
      <rect x="80" y="40" width="150" height="90" class="f3 s3 sw"/>
      <text x="380" y="210" class="tx-s" text-anchor="end">bok kratki = 1 cm</text>
    </svg>`,
            options: ['15 cm²', '16 cm²', '8 cm²', '15 cm'],
            answer: 0,
            explain: 'W prostokącie mieszczą się 3 rzędy po 5 kratek: 3 · 5 = 15 kwadratów po 1 cm², czyli 15 cm². (16 cm to jego obwód.)',
          },
          { id: 'bcp4l7', q: 'Promień koła ma 5 cm. Ile ma średnica?', options: ['10 cm', '5 cm', '7 cm', '25 cm'], answer: 0, explain: 'Średnica to dwa promienie: 2 · 5 = 10 cm.' },
          { id: 'sllvom', q: 'Średnica okręgu ma 12 cm. Ile ma promień?', options: ['6 cm', '24 cm', '12 cm', '3 cm'], answer: 0, explain: 'Promień to połowa średnicy: 12 : 2 = 6 cm.' },
          {
            id: '80h22p',
            q: 'Który odcinek na rysunku jest średnicą okręgu?',
            svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Okrąg o środku S. Odcinek AB przechodzi przez środek. Odcinek SC łączy środek z okręgiem. Odcinek DE łączy dwa punkty okręgu, ale nie przechodzi przez środek.">
      <circle cx="200" cy="105" r="85" class="f1 s1 sw"/>
      <line x1="115" y1="105" x2="285" y2="105" class="ln sw"/>
      <line x1="200" y1="105" x2="242.5" y2="31.4" class="ln s2 sw"/>
      <line x1="129.6" y1="152.5" x2="266.9" y2="157.6" class="ln s3 sw"/>
      <circle cx="200" cy="105" r="4" class="t2"/>
      <text x="200" y="125" class="tx-b" text-anchor="middle">S</text>
      <text x="100" y="111" class="tx-b" text-anchor="middle">A</text>
      <text x="300" y="111" class="tx-b" text-anchor="middle">B</text>
      <text x="252" y="24" class="tx-b t2" text-anchor="middle">C</text>
      <text x="118" y="168" class="tx-b t3" text-anchor="middle">D</text>
      <text x="280" y="174" class="tx-b t3" text-anchor="middle">E</text>
    </svg>`,
            options: ['AB', 'SC', 'DE'],
            answer: 0,
            explain: 'Średnica przechodzi przez środek S i łączy dwa punkty okręgu – to AB. SC to promień, a DE to cięciwa, która nie przechodzi przez środek.',
          },
          { id: '7mtx13', q: 'Prawda czy fałsz?\nKażdy kwadrat jest prostokątem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Kwadrat ma 4 kąty proste i równe przeciwległe boki – spełnia wszystkie warunki prostokąta.' },
          { id: 'rpq3cd', q: 'Prawda czy fałsz?\nKażdy prostokąt jest kwadratem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Prostokąt 5 cm × 3 cm nie ma wszystkich boków równych, więc nie jest kwadratem.' },
          { id: '7h34wb', q: 'Prawda czy fałsz?\nŚrednica jest najdłuższą cięciwą okręgu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Średnica to cięciwa przechodząca przez środek. Żadna inna cięciwa nie jest od niej dłuższa.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'skala',
        name: 'Skala i plan – obliczenia',
        chapter: 'dział 4 „Figury geometryczne”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 2 Miary, wym. 11 (rzeczywista długość odcinka, gdy dana jest jego długość w skali, i długość w skali, gdy dana jest rzeczywista długość), wym. 2 (przeliczanie mm, cm, m, km w sytuacjach praktycznych); dz. 6 Myślenie matematyczne, wym. 3d (rozumowanie proporcjonalne). Czym jest skala i jak czytać plan – także w przyrodzie (dział „Kierunki, kompas, plan i mapa”); tu ćwiczymy obliczenia w obie strony.' + WYBOR,
        theory: `
          <h3>Co to jest skala</h3>
          <p>Plan pokoju, boiska czy miasta jest dużo mniejszy niż rzeczywistość. <b>Skala</b> mówi, ile razy go zmniejszono.</p>
          <ul>
            <li><b>1 : 100</b> – wszystko zmniejszono 100 razy. 1 cm na planie to 100 cm, czyli <b>1 m</b> w rzeczywistości.</li>
            <li><b>1 : 1000</b> – 1 cm na planie to 1000 cm, czyli <b>10 m</b>.</li>
            <li><b>1 : 100 000</b> – 1 cm na mapie to 100 000 cm, czyli <b>1 km</b>.</li>
          </ul>
          <h3>Z planu do rzeczywistości – mnożymy</h3>
          <p>Długość na planie mnożysz przez liczbę ze skali, a potem zamieniasz jednostki.</p>
          <p>Skala 1 : 1000, ścieżka na planie ma 7 cm: <span class="f">7 cm · 1000 = 7000 cm = 70 m</span>.</p>
          <h3>Z rzeczywistości na plan – dzielimy</h3>
          <p>Rzeczywistą długość zamieniasz na centymetry i dzielisz przez liczbę ze skali.</p>
          <p>Boisko ma 40 m, plan w skali 1 : 1000: <span class="f">40 m = 4000 cm, 4000 cm : 1000 = 4 cm</span>.</p>
          <h3>Trzy sposoby zapisu skali</h3>
          <table>
            <tr><th>Skala</th><th>Przykład</th></tr>
            <tr><td>liczbowa</td><td>1 : 10 000</td></tr>
            <tr><td>mianowana (z jednostkami)</td><td>1 cm – 100 m</td></tr>
            <tr><td>liniowa (podziałka)</td><td>odcinek podzielony na działki z podpisami 0, 100, 200 m…</td></tr>
          </table>
          <p>Wszystkie trzy przykłady mówią to samo, bo 100 m = 10 000 cm.</p>
          <h3>Powiększenie</h3>
          <p>Rysunek mrówki czy biedronki bywa <b>większy</b> niż ona sama. Skala <b>2 : 1</b> znaczy: 2 cm na rysunku to 1 cm naprawdę – rysunek powiększono 2 razy.</p>
          <div class="tip">💡 Przed liczeniem zamień wszystko na centymetry. Przyda się: 1 m = 100 cm, 1 km = 1000 m = 100 000 cm.</div>
        `,
        flashcards: [
          ['Skala', 'Mówi, ile razy zmniejszono (albo powiększono) rzeczywistość na planie, mapie lub rysunku'],
          ['Skala 1 : 100', '1 cm na planie = 100 cm = 1 m w rzeczywistości'],
          ['Skala 1 : 1000', '1 cm na planie = 1000 cm = 10 m'],
          ['Skala 1 : 100 000', '1 cm na mapie = 100 000 cm = 1 km'],
          ['Z planu do rzeczywistości', 'Mnożymy długość na planie przez liczbę ze skali'],
          ['Z rzeczywistości na plan', 'Zamieniamy na cm i dzielimy przez liczbę ze skali'],
          ['Skala mianowana', 'Skala zapisana z jednostkami, np. 1 cm – 100 m'],
          ['Skala liniowa (podziałka)', 'Odcinek z działkami podpisanymi odległościami w terenie'],
          ['Skala 2 : 1', 'Powiększenie 2 razy: 2 cm na rysunku = 1 cm naprawdę'],
          ['Ile centymetrów ma 1 km?', '100 000 cm'],
        ],
        questions: [
          { id: 'kvdihq', q: 'Plan ma skalę 1 : 100. Stół ma na nim 2 cm długości. Ile ma naprawdę?', options: ['2 m', '20 m', '200 m', '20 cm'], answer: 0, explain: '2 cm · 100 = 200 cm = 2 m.' },
          { id: 'ihwn08', q: 'Plan ma skalę 1 : 50. Szafa ma na nim 4 cm szerokości. Ile ma naprawdę?', options: ['2 m', '20 m', '54 cm', '20 cm'], answer: 0, explain: '4 cm · 50 = 200 cm = 2 m.' },
          { id: 'cpv3r3', q: 'Plan ma skalę 1 : 1000. Ścieżka ma na nim 7 cm. Jaka jest jej długość w terenie?', options: ['70 m', '7 m', '700 m', '7 km'], answer: 0, explain: '7 cm · 1000 = 7000 cm = 70 m.' },
          { id: 'kqgz6p', q: 'Mapa ma skalę 1 : 100 000. Dwie wsie dzieli na niej 3 cm. Jaka jest odległość w terenie?', options: ['3 km', '30 km', '300 m', '30 m'], answer: 0, explain: '3 cm · 100 000 = 300 000 cm = 3000 m = 3 km.' },
          { id: 'ty0zaw', q: 'Mapa turystyczna ma skalę 1 : 50 000. Szlak ma na niej 10 cm. Ile kilometrów trzeba przejść?', options: ['5 km', '50 km', '500 m', '50 m'], answer: 0, explain: '10 cm · 50 000 = 500 000 cm = 5000 m = 5 km.' },
          { id: '96odjp', q: 'Plan ma skalę 1 : 500. Odcinek ma na nim 8 cm. Ile to w rzeczywistości?', options: ['40 m', '4 m', '400 m', '508 cm'], answer: 0, explain: '8 cm · 500 = 4000 cm = 40 m.' },
          { id: '8vrw8m', q: 'Pokój ma 5 m długości. Jaką długość będzie miał na planie w skali 1 : 100?', options: ['5 cm', '50 cm', '5 mm', '500 cm'], answer: 0, explain: '5 m = 500 cm, 500 cm : 100 = 5 cm.' },
          { id: 'dbx0rt', q: 'Boisko ma 40 m długości. Jaką długość będzie miało na planie w skali 1 : 1000?', options: ['4 cm', '40 cm', '4 mm', '400 cm'], answer: 0, explain: '40 m = 4000 cm, 4000 cm : 1000 = 4 cm.' },
          { id: 'davjvt', q: 'Droga między miastami ma 6 km. Ile centymetrów będzie miała na mapie w skali 1 : 200 000?', options: ['3 cm', '12 cm', '30 cm', '6 cm'], answer: 0, explain: '6 km = 600 000 cm, 600 000 cm : 200 000 = 3 cm.' },
          { id: '1o19y1', q: 'Stół ma 2 m długości. Jaką długość będzie miał na planie w skali 1 : 200?', options: ['1 cm', '4 cm', '2 cm', '10 cm'], answer: 0, explain: '2 m = 200 cm, 200 cm : 200 = 1 cm.' },
          { id: 'of6ncb', q: 'Skala mianowana „1 cm – 10 m” to w zapisie liczbowym…', options: ['1 : 1000', '1 : 10', '1 : 100', '1 : 10 000'], answer: 0, explain: '10 m = 1000 cm, więc 1 cm na planie to 1000 cm w rzeczywistości: 1 : 1000.' },
          { id: '6wvstr', q: 'Skala 1 : 10 000 zapisana jako skala mianowana to…', options: ['1 cm – 100 m', '1 cm – 10 m', '1 cm – 1 km', '1 cm – 10 km'], answer: 0, explain: '10 000 cm = 100 m.' },
          { id: 'icepf4', q: 'Ile metrów w terenie to 1 cm na planie z tą podziałką?', svg: SVG_PODZIALKA, options: ['100 m', '1 m', '400 m', '10 m'], answer: 0, explain: 'Każda działka ma 1 cm, a kolejne podpisy rosną o 100 m.' },
          { id: '3cjbzj', q: 'Szkołę i park dzielą na tym planie 3 cm. Jaka jest odległość w terenie?', svg: SVG_PODZIALKA, options: ['300 m', '3 m', '30 m', '3 km'], answer: 0, explain: '1 cm to 100 m, więc 3 cm to 3 · 100 m = 300 m.' },
          { id: 'f8cwu3', q: 'Jaką skalę liczbową ma plan z tą podziałką?', svg: SVG_PODZIALKA, options: ['1 : 10 000', '1 : 100', '1 : 1000', '1 : 100 000'], answer: 0, explain: '1 cm na planie to 100 m = 10 000 cm. Skala: 1 : 10 000.' },
          { id: 'igf56r', q: 'Ten sam pokój narysowano na dwóch planach: w skali 1 : 100 i w skali 1 : 200. Na którym planie pokój jest większy?', options: ['w skali 1 : 100', 'w skali 1 : 200', 'na obu jest taki sam'], answer: 0, explain: 'W skali 1 : 100 pokój zmniejszono 100 razy, a w 1 : 200 – aż 200 razy. Mniej zmniejszony jest na planie 1 : 100.' },
          { id: 'cxx0ht', q: 'Chrząszcz narysowano w skali 2 : 1. Na rysunku ma 6 cm długości. Ile ma naprawdę?', options: ['3 cm', '12 cm', '8 cm', '4 cm'], answer: 0, explain: 'Skala 2 : 1 to powiększenie 2 razy: 6 cm : 2 = 3 cm.' },
          { id: '9kxsl2', q: 'Prawda czy fałsz?\nW skali 1 : 100 jeden centymetr na planie to 100 m w rzeczywistości.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: '1 cm · 100 = 100 cm, a 100 cm to 1 m, nie 100 m.' },
          { id: 'tewbat', q: 'Prawda czy fałsz?\nSkala 1 : 1000 i skala „1 cm – 10 m” oznaczają to samo.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '10 m = 1000 cm, więc w obu przypadkach 1 cm na planie to 1000 cm w terenie.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'ulamki',
        name: 'Ułamki zwykłe – pierwsze kroki',
        chapter: 'dział 5 „Ułamki zwykłe”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 17 (ułamek jako część całości), 18 (ułamek jako iloraz), 20 (liczby mieszane i ułamki niewłaściwe), 26 (porównywanie – tylko ułamki o tych samych mianownikach lub tych samych licznikach), 31 (ułamek danej wielkości – proste przykłady).' + WYBOR,
        theory: `
          <h3>Ułamek to część całości</h3>
          <p>Pizzę podzielono na 8 <b>równych</b> kawałków. Zjadłeś 3 – to <span class="f">3/8</span> pizzy (trzy ósme).</p>
          <ul>
            <li><b>Mianownik</b> (pod kreską) – na ile równych części podzielono całość.</li>
            <li><b>Licznik</b> (nad kreską) – ile takich części bierzemy.</li>
            <li><b>Kreska ułamkowa</b> – oddziela licznik od mianownika.</li>
          </ul>
          <p>Nazwy: 1/2 – jedna druga (połowa), 1/4 – jedna czwarta (ćwierć), 3/4 – trzy czwarte, 2/5 – dwie piąte.</p>
          <div class="tip">💡 Części muszą być równe. Jeśli kawałki są różne, nie można powiedzieć, że jeden z nich to 1/4.</div>
          <h3>Ułamek to dzielenie</h3>
          <p>Kreska ułamkowa zastępuje znak dzielenia: <span class="f">3/4 = 3 : 4</span>. Trzy pizze dzielone po równo na 4 osoby – każda dostaje 3/4 pizzy.</p>
          <p>Czasem wychodzi liczba naturalna: <span class="f">8/4 = 8 : 4 = 2</span>, <span class="f">4/4 = 1</span>.</p>
          <h3>Ułamki właściwe i niewłaściwe, liczby mieszane</h3>
          <ul>
            <li><b>Ułamek właściwy</b> – licznik mniejszy od mianownika (np. 3/5). To mniej niż całość.</li>
            <li><b>Ułamek niewłaściwy</b> – licznik równy mianownikowi lub większy (np. 7/4, 5/5). To całość albo więcej.</li>
            <li><b>Liczba mieszana</b> – liczba naturalna i ułamek właściwy, np. <span class="f">1 3/4</span> („jeden i trzy czwarte”).</li>
          </ul>
          <table>
            <tr><th>Zamiana</th><th>Jak?</th><th>Przykład</th></tr>
            <tr><td>ułamek niewłaściwy → liczba mieszana</td><td>podziel licznik przez mianownik; reszta idzie do licznika</td><td>7/4: 7 : 4 = 1 reszty 3, więc 7/4 = 1 3/4</td></tr>
            <tr><td>liczba mieszana → ułamek niewłaściwy</td><td>całości · mianownik + licznik</td><td>2 1/3: 2 · 3 + 1 = 7, więc 2 1/3 = 7/3</td></tr>
          </table>
          <h3>Porównywanie ułamków</h3>
          <ul>
            <li><b>Te same mianowniki</b> – większy jest ułamek z większym licznikiem: <span class="f">5/8 &gt; 3/8</span>.</li>
            <li><b>Te same liczniki</b> – większy jest ułamek z <b>mniejszym</b> mianownikiem: <span class="f">1/3 &gt; 1/5</span> (pizza dla 3 osób daje większe kawałki niż dla 5).</li>
          </ul>
          <h3>Ułamek liczby</h3>
          <ul>
            <li><span class="f">1/2 z 14 = 14 : 2 = 7</span></li>
            <li><span class="f">1/4 z 20 = 20 : 4 = 5</span></li>
            <li><span class="f">3/4 z 12</span>: najpierw 1/4 z 12 = 3, potem 3 · 3 = 9.</li>
          </ul>
        `,
        flashcards: [
          ['Mianownik', 'Liczba pod kreską: na ile równych części podzielono całość'],
          ['Licznik', 'Liczba nad kreską: ile części bierzemy'],
          ['Kreska ułamkowa', 'Zastępuje znak dzielenia: 3/4 = 3 : 4'],
          ['Ułamek właściwy', 'Licznik mniejszy od mianownika, np. 2/5'],
          ['Ułamek niewłaściwy', 'Licznik równy mianownikowi lub większy, np. 7/4'],
          ['7/4 jako liczba mieszana', '1 3/4 (7 : 4 = 1 reszty 3)'],
          ['2 1/3 jako ułamek niewłaściwy', '7/3 (2 · 3 + 1 = 7)'],
          ['Co większe: 1/3 czy 1/5?', '1/3 – przy tym samym liczniku większy jest ułamek o mniejszym mianowniku'],
          ['1/4 z 20', '20 : 4 = 5'],
        ],
        questions: [
          { id: 'fz8c7x', q: 'W ułamku 3/8 mianownik to…', options: ['8', '3', '11', '5'], answer: 0, explain: 'Mianownik jest pod kreską ułamkową: 8.' },
          { id: '7iydvi', q: 'Pizzę podzielono na 8 równych kawałków. Zjadłeś 3. Jaką część pizzy zjadłeś?', options: ['3/8', '8/3', '3/5', '5/8'], answer: 0, explain: 'Całość ma 8 części (mianownik), zjadłeś 3 (licznik): 3/8.' },
          {
            id: '3c14c2',
            q: 'Jaka część prostokąta jest zamalowana?',
            svg: `<svg viewBox="0 0 380 110" role="img" aria-label="Prostokąt podzielony na 6 równych części. Zamalowane są 4 części.">
      <rect x="40" y="15" width="50" height="80" class="f2 s2"/>
      <rect x="90" y="15" width="50" height="80" class="f2 s2"/>
      <rect x="140" y="15" width="50" height="80" class="bg"/>
      <rect x="190" y="15" width="50" height="80" class="f2 s2"/>
      <rect x="240" y="15" width="50" height="80" class="bg"/>
      <rect x="290" y="15" width="50" height="80" class="f2 s2"/>
      <g class="ln"><line x1="90" y1="15" x2="90" y2="95"/><line x1="140" y1="15" x2="140" y2="95"/><line x1="190" y1="15" x2="190" y2="95"/><line x1="240" y1="15" x2="240" y2="95"/><line x1="290" y1="15" x2="290" y2="95"/></g>
      <rect x="40" y="15" width="300" height="80" class="ln sw"/>
    </svg>`,
            options: ['4/6', '2/6', '6/4', '4/10'],
            answer: 0,
            explain: 'Prostokąt ma 6 równych części (mianownik), zamalowano 4 (licznik): 4/6.',
          },
          { id: 'ddgok7', q: 'Jak zapisać dzielenie 5 : 7 w postaci ułamka?', options: ['5/7', '7/5', '5/12', '1/7'], answer: 0, explain: 'Dzielna idzie nad kreskę, dzielnik – pod kreskę: 5 : 7 = 5/7.' },
          { id: 'ugpqti', q: 'Trzy jednakowe czekolady podzielono po równo między 4 dzieci. Ile czekolady dostało każde dziecko?', options: ['3/4 czekolady', '4/3 czekolady', '1/4 czekolady', '1/3 czekolady'], answer: 0, explain: '3 : 4 = 3/4. Każde dziecko dostaje po 1/4 z każdej z 3 czekolad, czyli 3/4.' },
          { id: 'hdip7e', q: 'Ile to jest 12/4?', options: ['3', '4', '8', '16'], answer: 0, explain: '12/4 = 12 : 4 = 3.' },
          { id: 's2wj8f', q: 'Który ułamek jest niewłaściwy?', options: ['7/5', '5/7', '1/2', '3/4'], answer: 0, explain: 'W ułamku 7/5 licznik jest większy od mianownika – to więcej niż całość.' },
          { id: 'hnkwds', q: 'Ułamek 9/4 zapisany jako liczba mieszana to…', options: ['2 1/4', '2 1/9', '4 1/2', '1 4/9'], answer: 0, explain: '9 : 4 = 2 reszty 1, więc 9/4 = 2 1/4 (dwa i jedna czwarta).' },
          { id: 'tnlpk3', q: 'Liczba mieszana 3 1/2 („trzy i jedna druga”) jako ułamek niewłaściwy to…', options: ['7/2', '4/2', '31/2', '5/2'], answer: 0, explain: '3 · 2 + 1 = 7, więc 3 1/2 = 7/2.' },
          { id: '1fe4zs', q: 'Który ułamek jest większy: 3/7 czy 5/7?', options: ['5/7', '3/7', 'są równe'], answer: 0, explain: 'Mianowniki są takie same, więc większy jest ułamek z większym licznikiem.' },
          { id: '2e0h64', q: 'Który ułamek jest największy?', options: ['1/3', '1/5', '1/8', '1/10'], answer: 0, explain: 'Liczniki są takie same. Im mniej części, tym są większe – największy jest 1/3.' },
          { id: 'rhoyqx', q: 'Ile to jest 1/2 z 14 zł?', options: ['7 zł', '28 zł', '12 zł', '2 zł'], answer: 0, explain: 'Połowa z 14 zł: 14 : 2 = 7 zł.' },
          { id: 'blne5w', q: 'Ile minut to 1/4 z 20 minut?', options: ['5 minut', '4 minuty', '80 minut', '16 minut'], answer: 0, explain: '20 : 4 = 5 minut.' },
          { id: '7uchlv', q: 'Ile to jest 3/4 z 12?', options: ['9', '3', '16', '4'], answer: 0, explain: '1/4 z 12 = 12 : 4 = 3, a 3/4 to trzy razy więcej: 3 · 3 = 9.' },
          { id: 'ra9whx', q: 'Prawda czy fałsz?\n4/4 = 1', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '4 części z 4 to cała całość: 4 : 4 = 1.' },
          { id: '2lg5k1', q: 'Prawda czy fałsz?\n1/6 pizzy to więcej niż 1/4 tej samej pizzy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Gdy pizzę dzielimy na 6 części, kawałki są mniejsze niż przy podziale na 4. 1/6 to mniej niż 1/4.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'ulamki-dzialania',
        name: 'Ułamki zwykłe – skracanie, dodawanie, odejmowanie',
        chapter: 'dział 5 „Ułamki zwykłe”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 19 (skracanie i rozszerzanie ułamków; sprowadzanie do wspólnego mianownika – tylko gdy jeden mianownik jest wielokrotnością drugiego), 21 (ułamki zwykłe na osi liczbowej), 27 (tylko dodawanie i odejmowanie ułamków i liczb mieszanych; mnożenie i dzielenie – później), 20 (zamiana wyniku na liczbę mieszaną). Ciąg dalszy działu „Ułamki zwykłe – pierwsze kroki”.' + WYBOR,
        theory: `
          <h3>Ułamki równe</h3>
          <p>Połowa tabliczki czekolady to tyle samo co dwie czwarte albo cztery ósme: <span class="f">1/2 = 2/4 = 4/8</span>. Takie ułamki to <b>ułamki równe</b> – różnie zapisane, ale oznaczają tę samą część.</p>
          <h3>Rozszerzanie i skracanie</h3>
          <ul>
            <li><b>Rozszerzanie</b> – mnożysz licznik i mianownik przez tę samą liczbę (nie zero): <span class="f">2/3 = (2 · 4)/(3 · 4) = 8/12</span>.</li>
            <li><b>Skracanie</b> – dzielisz licznik i mianownik przez tę samą liczbę: <span class="f">6/9 = (6 : 3)/(9 : 3) = 2/3</span>.</li>
            <li>Ułamek <b>nieskracalny</b> – licznik i mianownik nie mają wspólnego dzielnika większego niż 1, np. 3/4. Wynik działania zwykle skracamy tak, jak się da.</li>
          </ul>
          <div class="tip">💡 Przy rozszerzaniu i skracaniu wartość ułamka się nie zmienia – zmienia się tylko wielkość kawałków i ich liczba.</div>
          <h3>Dodawanie i odejmowanie (te same mianowniki)</h3>
          <p>Dodajesz albo odejmujesz <b>tylko liczniki</b>. Mianownik zostaje ten sam.</p>
          <ul>
            <li><span class="f">2/7 + 3/7 = 5/7</span></li>
            <li><span class="f">7/9 − 4/9 = 3/9 = 1/3</span></li>
            <li><span class="f">3/5 + 4/5 = 7/5 = 1 2/5</span> – wynik będący ułamkiem niewłaściwym zamieniamy na liczbę mieszaną.</li>
          </ul>
          <div class="tip">⚠️ Błąd: 2/7 + 3/7 = 5/14. Mianowników nie dodajemy – kawałki dalej są „siódme”.</div>
          <h3>Dopełnianie do całości</h3>
          <p>Całość to <span class="f">8/8</span>, <span class="f">5/5</span> itd. Dlatego <span class="f">1 − 3/8 = 8/8 − 3/8 = 5/8</span>.</p>
          <h3>Liczby mieszane</h3>
          <ul>
            <li>Dodajesz osobno całości i osobno ułamki: <span class="f">2 1/5 + 1 3/5 = 3 4/5</span>.</li>
            <li>Gdy ułamki dadzą całość lub więcej, zamień nadmiar: <span class="f">1 3/4 + 2/4 = 1 5/4 = 2 1/4</span>.</li>
            <li>Odejmowanie od całości – „rozmień” jedną całość: <span class="f">3 − 1/4 = 2 4/4 − 1/4 = 2 3/4</span>.</li>
            <li>Gdy ułamka jest za mało: <span class="f">2 1/4 − 3/4 = 1 5/4 − 3/4 = 1 2/4 = 1 1/2</span>.</li>
          </ul>
          <h3>Różne mianowniki</h3>
          <p>Jeśli jeden mianownik jest wielokrotnością drugiego, rozszerz ułamek o mniejszym mianowniku: <span class="f">1/2 + 1/4 = 2/4 + 1/4 = 3/4</span>, <span class="f">2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2</span>.</p>
          <h3>Ułamki na osi liczbowej</h3>
          <p>Odcinek od 0 do 1 dzielisz na tyle równych części, ile wynosi mianownik. Ułamek 3/5 to trzecia kreska po zerze, gdy odcinek od 0 do 1 podzielono na 5 części.</p>
        `,
        flashcards: [
          ['Ułamki równe', 'Różnie zapisane, ale oznaczają tę samą część, np. 1/2 = 2/4 = 4/8'],
          ['Rozszerzanie ułamka', 'Mnożenie licznika i mianownika przez tę samą liczbę: 2/3 = 8/12'],
          ['Skracanie ułamka', 'Dzielenie licznika i mianownika przez tę samą liczbę: 6/9 = 2/3'],
          ['Ułamek nieskracalny', 'Licznik i mianownik nie mają wspólnego dzielnika większego niż 1, np. 3/4'],
          ['Dodawanie ułamków o tych samych mianownikach', 'Dodajesz liczniki, mianownik zostaje: 2/7 + 3/7 = 5/7'],
          ['3/5 + 4/5', '7/5 = 1 2/5'],
          ['1 − 3/8', '8/8 − 3/8 = 5/8'],
          ['3 − 1/4', '2 4/4 − 1/4 = 2 3/4'],
          ['2 1/4 − 3/4', '1 5/4 − 3/4 = 1 2/4 = 1 1/2'],
          ['1/2 + 1/4', '2/4 + 1/4 = 3/4'],
          ['Najczęstszy błąd przy dodawaniu ułamków', 'Dodawanie mianowników: 2/7 + 3/7 to NIE 5/14'],
        ],
        questions: [
          { id: 'k90obu', q: 'Uzupełnij: 1/2 = ?/8', options: ['4', '2', '6', '1'], answer: 0, explain: 'Mianownik 2 mnożymy przez 4, żeby dostać 8. Licznik też mnożymy przez 4: 1 · 4 = 4. Więc 1/2 = 4/8.' },
          { id: '8y6p8j', q: 'Rozszerz ułamek 2/3 przez 4.', options: ['8/12', '6/7', '8/3', '2/12'], answer: 0, explain: 'Mnożymy licznik i mianownik przez 4: (2 · 4)/(3 · 4) = 8/12.' },
          { id: '2fpn0f', q: 'Skróć ułamek 6/9.', options: ['2/3', '3/4', '1/3', '6/3'], answer: 0, explain: 'Licznik i mianownik dzielimy przez 3: (6 : 3)/(9 : 3) = 2/3.' },
          { id: '33tcap', q: 'Skróć ułamek 12/16 tak bardzo, jak się da.', options: ['3/4', '6/8', '4/3', '2/4'], answer: 0, explain: '12 i 16 dzielą się przez 4: 12/16 = 3/4. (6/8 to też ten sam ułamek, ale da się go jeszcze skrócić przez 2.)' },
          { id: '6krrc2', q: 'Który ułamek jest równy 1/2?', options: ['4/8', '2/3', '3/5', '5/8'], answer: 0, explain: '4/8 po skróceniu przez 4 to 1/2. Ułamek jest równy 1/2, gdy licznik jest połową mianownika: 4 to połowa 8.' },
          { id: '18nka7', q: 'Oblicz: 2/7 + 3/7', options: ['5/7', '5/14', '6/7', '1/7'], answer: 0, explain: 'Te same mianowniki – dodajemy liczniki: 2 + 3 = 5. Mianownik zostaje 7. (5/14 to błąd – mianowników nie dodajemy.)' },
          { id: 'g9frnq', q: 'Oblicz: 7/9 − 4/9', options: ['3/9', '3/0', '11/9', '3/18'], answer: 0, explain: 'Odejmujemy liczniki: 7 − 4 = 3, mianownik zostaje 9. Wynik 3/9 można skrócić do 1/3.' },
          { id: 'ri5lh2', q: 'Oblicz: 3/5 + 4/5', options: ['1 2/5', '7/10', '1 1/5', '12/5'], answer: 0, explain: '3/5 + 4/5 = 7/5. To ułamek niewłaściwy: 7 : 5 = 1 reszty 2, więc 7/5 = 1 2/5.' },
          { id: 'qoxmig', q: 'Oblicz: 1 − 3/8', options: ['5/8', '2/8', '3/8', '4/8'], answer: 0, explain: 'Całość to 8/8. 8/8 − 3/8 = 5/8.' },
          { id: 'y55wfh', q: 'Oblicz: 2 1/5 + 1 3/5', options: ['3 4/5', '3 4/10', '2 4/5', '4 4/5'], answer: 0, explain: 'Całości: 2 + 1 = 3. Ułamki: 1/5 + 3/5 = 4/5. Razem 3 4/5.' },
          { id: '2baock', q: 'Oblicz: 3 − 1/4', options: ['2 3/4', '3 3/4', '2 1/4', '3 1/4'], answer: 0, explain: 'Rozmieniamy jedną całość: 3 = 2 4/4. Potem 2 4/4 − 1/4 = 2 3/4.' },
          { id: '6pt88e', q: 'Oblicz: 2 1/4 − 3/4', options: ['1 1/2', '2 1/2', '1 3/4', '1 1/4'], answer: 0, explain: '2 1/4 = 1 5/4. Potem 1 5/4 − 3/4 = 1 2/4 = 1 1/2.' },
          { id: 'y02z91', q: 'Oblicz: 1/2 + 1/4', options: ['3/4', '2/6', '1/6', '2/4'], answer: 0, explain: 'Rozszerzamy 1/2 do czwartych: 1/2 = 2/4. Potem 2/4 + 1/4 = 3/4.' },
          { id: 'm66l6p', q: 'Pizzę podzielono na 8 równych kawałków. Tomek zjadł 2/8 pizzy, a Ola 3/8. Jaka część pizzy została?', options: ['3/8', '5/8', '5/16', '1/8'], answer: 0, explain: 'Zjedli razem 2/8 + 3/8 = 5/8. Zostało 8/8 − 5/8 = 3/8.' },
          { id: 'y2xj0s', q: 'Prawda czy fałsz?\nGdy dodajesz ułamki o tych samych mianownikach, dodajesz liczniki i dodajesz mianowniki.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Dodajesz tylko liczniki. Mianownik mówi, jakie są kawałki (np. siódme) – po dodaniu dalej są takie same.' },
          { id: 'vxf6sg', q: 'Prawda czy fałsz?\nUłamki 2/3 i 4/6 są równe.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '4/6 po skróceniu przez 2 to 2/3.' },
          {
            id: 'scexgu',
            q: 'Jaki ułamek zaznaczono na osi liczbowej?',
            svg: `<svg viewBox="0 0 360 110" role="img" aria-label="Oś liczbowa od 0 do 1 podzielona na 5 równych części. Kropka na trzeciej kresce po zerze.">
      <line x1="30" y1="60" x2="330" y2="60" class="ln sw"/>
      <g class="ln"><line x1="40" y1="48" x2="40" y2="72"/><line x1="96" y1="52" x2="96" y2="68"/><line x1="152" y1="52" x2="152" y2="68"/><line x1="208" y1="52" x2="208" y2="68"/><line x1="264" y1="52" x2="264" y2="68"/><line x1="320" y1="48" x2="320" y2="72"/></g>
      <circle cx="208" cy="60" r="7" class="f2 s2"/>
      <text x="40" y="96" class="tx-b" text-anchor="middle">0</text>
      <text x="320" y="96" class="tx-b" text-anchor="middle">1</text>
      <text x="208" y="36" class="tx-b t2" text-anchor="middle">?</text>
    </svg>`,
            options: ['3/5', '3/6', '2/5', '1/3'],
            answer: 0,
            explain: 'Odcinek od 0 do 1 podzielono na 5 równych części, więc każda to 1/5. Kropka jest na trzeciej kresce po zerze: 3/5.',
          },
          { id: 'iupzax', q: 'Kuba szedł do szkoły 3/4 godziny, a potem jechał autobusem 1/4 godziny. Ile czasu zajęła mu cała droga?', options: ['1 godzinę', '4/8 godziny', '1/2 godziny', '2 godziny'], answer: 0, explain: '3/4 + 1/4 = 4/4 = 1. Cała droga trwała 1 godzinę.' },
          { id: 'p0olgq', q: 'W butelce był 1 litr soku. Wypito 3/10 litra. Ile soku zostało?', options: ['7/10 litra', '3/10 litra', '2/10 litra', '1/10 litra'], answer: 0, explain: '1 = 10/10. 10/10 − 3/10 = 7/10 litra.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'dziesietne',
        name: 'Ułamki dziesiętne – pierwsze kroki',
        chapter: 'dział 6 „Ułamki dziesiętne”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 21 (tylko ułamki dziesiętne na osi liczbowej), 22 (ułamki dziesiętne jako ułamki zwykłe), 23 (tylko ułamki zwykłe o mianownikach 10, 100, 1000 jako ułamki dziesiętne), 26 (porównywanie ułamków dziesiętnych), 28a (dodawanie i odejmowanie – proste przypadki, w pamięci); dz. 2 Miary, wym. 10 (wyrażenia dwumianowane: zł i gr, m i cm, cm i mm, kg i g). Mnożenie i dzielenie ułamków dziesiętnych – później.' + WYBOR,
        theory: `
          <h3>Dziesiąte, setne, tysięczne</h3>
          <p>Całość dzielimy na 10, 100 albo 1000 równych części i zapisujemy je z <b>przecinkiem</b>:</p>
          <table>
            <tr><th>Ułamek zwykły</th><th>Ułamek dziesiętny</th><th>Czytamy</th></tr>
            <tr><td>1/10</td><td>0,1</td><td>jedna dziesiąta</td></tr>
            <tr><td>1/100</td><td>0,01</td><td>jedna setna</td></tr>
            <tr><td>1/1000</td><td>0,001</td><td>jedna tysięczna</td></tr>
          </table>
          <p>Przed przecinkiem są <b>całości</b>, za przecinkiem kolejno: <b>części dziesiąte</b>, <b>setne</b>, <b>tysięczne</b>.</p>
          <table>
            <tr><th>całości</th><th>,</th><th>dziesiąte</th><th>setne</th><th>tysięczne</th></tr>
            <tr><td>4</td><td>,</td><td>3</td><td>6</td><td></td></tr>
          </table>
          <p>4,36 – cztery całe i trzydzieści sześć setnych (albo „cztery przecinek trzydzieści sześć”).</p>
          <h3>Zamiana ułamków</h3>
          <ul>
            <li>Mianownik 10 – <b>jedna</b> cyfra po przecinku: <span class="f">7/10 = 0,7</span>.</li>
            <li>Mianownik 100 – <b>dwie</b> cyfry po przecinku: <span class="f">23/100 = 0,23</span>, <span class="f">3/100 = 0,03</span>.</li>
            <li>Mianownik 1000 – <b>trzy</b> cyfry po przecinku: <span class="f">125/1000 = 0,125</span>.</li>
            <li>Z liczby mieszanej: <span class="f">3 7/10 = 3,7</span>. W drugą stronę: <span class="f">0,25 = 25/100</span>.</li>
          </ul>
          <div class="tip">💡 Ile zer w mianowniku, tyle cyfr po przecinku. Brakujące miejsca uzupełniasz zerami: 3/100 = 0,03.</div>
          <h3>Zera na końcu</h3>
          <p>Zera dopisane na końcu, za przecinkiem, nic nie zmieniają: <span class="f">0,5 = 0,50 = 0,500</span> (5 dziesiątych to 50 setnych). Ale zero tuż za przecinkiem jest ważne: 0,05 to co innego niż 0,5.</p>
          <h3>Porównywanie</h3>
          <p>Porównuj najpierw całości, potem dziesiąte, potem setne… Najłatwiej <b>dopisać zera</b>, żeby obie liczby miały tyle samo cyfr po przecinku:</p>
          <ul>
            <li>0,5 i 0,45 → 0,50 i 0,45 → <span class="f">0,5 &gt; 0,45</span>,</li>
            <li>2,09 i 2,1 → 2,09 i 2,10 → <span class="f">2,09 &lt; 2,1</span>.</li>
          </ul>
          <h3>Złote i grosze, metry i centymetry</h3>
          <ul>
            <li>1 gr = 0,01 zł: <span class="f">3 zł 45 gr = 3,45 zł</span>, <span class="f">2 zł 5 gr = 2,05 zł</span>.</li>
            <li>1 cm = 0,01 m: <span class="f">1 m 20 cm = 1,20 m = 1,2 m</span>.</li>
            <li>1 mm = 0,1 cm: <span class="f">4 cm 7 mm = 4,7 cm</span>.</li>
            <li>1 g = 0,001 kg: <span class="f">2 kg 500 g = 2,500 kg = 2,5 kg</span>.</li>
          </ul>
          <h3>Dodawanie i odejmowanie</h3>
          <p>Dodajesz całości do całości, dziesiąte do dziesiątych, setne do setnych. Pisemnie – <b>przecinek pod przecinkiem</b>.</p>
          <ul>
            <li><span class="f">2,5 + 1,3 = 3,8</span></li>
            <li><span class="f">0,7 + 0,6 = 1,3</span> (13 dziesiątych to 1 całość i 3 dziesiąte)</li>
            <li><span class="f">4,25 + 1,5 = 5,75</span> (1,5 = 1,50)</li>
            <li><span class="f">5 − 0,3 = 4,7</span> (5 = 4 całe i 10 dziesiątych)</li>
          </ul>
        `,
        flashcards: [
          ['0,1', '1/10 – jedna dziesiąta'],
          ['0,01', '1/100 – jedna setna'],
          ['0,001', '1/1000 – jedna tysięczna'],
          ['3/100 jako ułamek dziesiętny', '0,03 (dwie cyfry po przecinku)'],
          ['0,25 jako ułamek zwykły', '25/100'],
          ['0,5 = 0,50?', 'Tak – zera na końcu po przecinku nic nie zmieniają'],
          ['Co większe: 0,5 czy 0,45?', '0,5 (bo 0,50 > 0,45)'],
          ['3 zł 5 gr', '3,05 zł'],
          ['1 m 20 cm', '1,2 m'],
          ['2 kg 500 g', '2,5 kg'],
          ['0,7 + 0,6', '1,3'],
        ],
        questions: [
          { id: 'rajkk6', q: 'Jak zapisać ułamek 7/10 w postaci dziesiętnej?', options: ['0,7', '0,07', '7,10', '7,0'], answer: 0, explain: 'Mianownik 10 – jedna cyfra po przecinku: 7/10 = 0,7.' },
          { id: 'whq3kx', q: 'Jak zapisać ułamek 3/100 w postaci dziesiętnej?', options: ['0,03', '0,3', '3,100', '0,003'], answer: 0, explain: 'Mianownik 100 – dwie cyfry po przecinku. Trójkę stawiamy na miejscu setnych, a puste miejsce dziesiątych uzupełniamy zerem: 0,03.' },
          { id: 'a8d9bf', q: 'Liczba 0,25 zapisana jako ułamek zwykły to…', options: ['25/100', '25/10', '2/5', '25/1000'], answer: 0, explain: 'Dwie cyfry po przecinku to setne: 0,25 = 25/100.' },
          { id: '53ssh8', q: 'W liczbie 4,36 cyfra 3 oznacza…', options: ['3 części dziesiąte', '3 części setne', '3 jedności', '3 dziesiątki'], answer: 0, explain: 'Pierwsza cyfra za przecinkiem to części dziesiąte, druga – setne.' },
          { id: '88wxpo', q: 'Która liczba jest największa?', options: ['0,6', '0,56', '0,506', '0,059'], answer: 0, explain: 'Dopisz zera: 0,600; 0,560; 0,506; 0,059. Najwięcej dziesiątych ma 0,6.' },
          { id: 'p2s3k5', q: 'Który znak trzeba wstawić?\n0,4 … 0,40', options: ['=', '<', '>'], answer: 0, explain: 'Zero dopisane na końcu nic nie zmienia: 4 dziesiąte to 40 setnych.' },
          { id: '75i72a', q: 'Który znak trzeba wstawić?\n2,09 … 2,1', options: ['<', '>', '='], answer: 0, explain: 'Dopisz zero: 2,1 = 2,10. Teraz 2,09 < 2,10, bo 0 dziesiątych to mniej niż 1 dziesiąta.' },
          { id: 'h3pl3h', q: '3 zł 45 gr to…', options: ['3,45 zł', '3,045 zł', '34,5 zł', '0,345 zł'], answer: 0, explain: '1 zł = 100 gr, więc grosze to setne części złotego: 45 gr = 0,45 zł.' },
          { id: '68rrx1', q: '2 zł 5 gr to…', options: ['2,05 zł', '2,5 zł', '2,50 zł', '25 zł'], answer: 0, explain: '5 gr = 0,05 zł (5 setnych). 2,5 zł to 2 zł 50 gr.' },
          { id: 'n8es93', q: '1,2 m to…', options: ['1 m 20 cm', '1 m 2 cm', '12 cm', '1 m 200 cm'], answer: 0, explain: '1,2 m = 1,20 m. 0,20 m to 20 setnych metra, czyli 20 cm.' },
          { id: '5pwmcj', q: 'Ile to kilogramów: 2 kg 500 g?', options: ['2,5 kg', '2,05 kg', '2,005 kg', '25 kg'], answer: 0, explain: '1 kg = 1000 g, więc 500 g = 0,500 kg = 0,5 kg. Razem 2,5 kg.' },
          { id: 'ysuopo', q: 'Ile to centymetrów: 4 cm 7 mm?', options: ['4,7 cm', '4,07 cm', '47 cm', '0,47 cm'], answer: 0, explain: '1 cm = 10 mm, więc 1 mm to dziesiąta część centymetra: 7 mm = 0,7 cm.' },
          { id: 'flkfbk', q: 'Ile wynosi 0,7 + 0,6?', options: ['1,3', '0,13', '1,13', '0,76'], answer: 0, explain: '7 dziesiątych + 6 dziesiątych = 13 dziesiątych, czyli 1 całość i 3 dziesiąte: 1,3.' },
          { id: 'dqkvg5', q: 'Ile wynosi 4,25 + 1,5?', options: ['5,75', '4,40', '5,30', '4,275'], answer: 0, explain: 'Przecinek pod przecinkiem: 4,25 + 1,50 = 5,75.' },
          { id: '9n7n7x', q: 'Ile wynosi 5 − 0,3?', options: ['4,7', '4,3', '5,3', '0,2'], answer: 0, explain: '5 = 4 całe i 10 dziesiątych. 10 dziesiątych − 3 dziesiąte = 7 dziesiątych. Wynik 4,7.' },
          {
            id: 'u0x6xb',
            q: 'Jaką liczbę zaznaczono na osi literą A?',
            svg: `<svg viewBox="0 0 400 100" role="img" aria-label="Oś liczbowa od 2 do 3 z kreskami co jedną dziesiątą. Punkt A leży na czwartej kresce za liczbą 2.">
      <line x1="16" y1="50" x2="392" y2="50" class="ln"/>
      <path d="M384,45 L393,50 L384,55" class="ln"/>
      <g class="ln"><line x1="30" y1="42" x2="30" y2="58"/><line x1="64" y1="45" x2="64" y2="55"/><line x1="98" y1="45" x2="98" y2="55"/><line x1="132" y1="45" x2="132" y2="55"/><line x1="166" y1="45" x2="166" y2="55"/><line x1="200" y1="42" x2="200" y2="58"/><line x1="234" y1="45" x2="234" y2="55"/><line x1="268" y1="45" x2="268" y2="55"/><line x1="302" y1="45" x2="302" y2="55"/><line x1="336" y1="45" x2="336" y2="55"/><line x1="370" y1="42" x2="370" y2="58"/></g>
      <text x="30" y="80" class="tx" text-anchor="middle">2</text>
      <text x="200" y="80" class="tx" text-anchor="middle">2,5</text>
      <text x="370" y="80" class="tx" text-anchor="middle">3</text>
      <circle cx="166" cy="50" r="7" class="t2"/>
      <text x="166" y="30" class="tx-b t2" text-anchor="middle">A</text>
    </svg>`,
            options: ['2,4', '2,04', '2,8', '0,4'],
            answer: 0,
            explain: 'Od 2 do 3 jest 10 odstępów, więc każdy to 0,1. A leży 4 kreski za liczbą 2: 2 + 0,4 = 2,4.',
          },
          { id: 'pmrkdk', q: 'Kupujesz zeszyt za 3,50 zł i długopis za 2,30 zł. Ile płacisz?', options: ['5,80 zł', '5,53 zł', '6,80 zł', '1,20 zł'], answer: 0, explain: '3,50 + 2,30: złote 3 + 2 = 5, grosze 50 + 30 = 80. Razem 5,80 zł.' },
          { id: 'ze38h0', q: 'Prawda czy fałsz?\n0,45 jest większe od 0,5, bo 45 jest większe od 5.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Trzeba porównać na tych samych miejscach: 0,5 = 0,50, a 0,50 > 0,45. Liczba cyfr po przecinku nie mówi, która liczba jest większa.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'pole',
        name: 'Jednostki pola i figury złożone',
        chapter: 'dział 7 „Pola figur”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 2 Miary, wym. 4 (jednostki pola: mm², cm², dm², m², km², ar, hektar), 6 (przeliczanie jednostek pola w kontekstach praktycznych); dz. 4 Figury, wym. 14 (tylko pole prostokąta i kwadratu oraz figur, które można z nich zbudować); dz. 6 Myślenie matematyczne (podział figury na części, sprawdzanie wyniku). Ciąg dalszy działu „Wielokąty, prostokąt i kwadrat, koło i okrąg”. Pola trójkątów, równoległoboków i trapezów (wym. 14) – później.' + WYBOR,
        theory: `
          <h3>Jednostki pola</h3>
          <p>Pole mierzymy <b>kwadratami</b>. Każda jednostka to pole kwadratu o boku 1 jednostki długości:</p>
          <table>
            <tr><th>Jednostka</th><th>Kwadrat o boku</th><th>Do czego</th></tr>
            <tr><td>1 mm² (milimetr kwadratowy)</td><td>1 mm</td><td>bardzo małe rzeczy, np. pole kratki na papierze milimetrowym</td></tr>
            <tr><td>1 cm²</td><td>1 cm</td><td>kartka, okładka zeszytu</td></tr>
            <tr><td>1 dm²</td><td>1 dm = 10 cm</td><td>płytka, mała tablica</td></tr>
            <tr><td>1 m²</td><td>1 m</td><td>pokój, ściana</td></tr>
            <tr><td>1 a (ar)</td><td>10 m</td><td>działka, ogród</td></tr>
            <tr><td>1 ha (hektar)</td><td>100 m</td><td>pole uprawne, las, park</td></tr>
            <tr><td>1 km²</td><td>1 km</td><td>miasto, jezioro, kraj</td></tr>
          </table>
          <h3>Przeliczanie</h3>
          <p>Kwadrat 1 cm × 1 cm ma 10 rzędów po 10 kwadracików 1 mm × 1 mm. Dlatego <span class="f">1 cm² = 10 · 10 mm² = 100 mm²</span>, a nie 10 mm².</p>
          <ul>
            <li><span class="f">1 cm² = 100 mm²</span></li>
            <li><span class="f">1 dm² = 100 cm²</span></li>
            <li><span class="f">1 m² = 100 dm² = 10 000 cm²</span></li>
            <li><span class="f">1 a = 100 m²</span> (kwadrat 10 m × 10 m)</li>
            <li><span class="f">1 ha = 100 a = 10 000 m²</span> (kwadrat 100 m × 100 m)</li>
            <li><span class="f">1 km² = 100 ha = 1 000 000 m²</span></li>
          </ul>
          <div class="tip">💡 Długość: 1 m = 100 cm. Pole: 1 m² = 100 · 100 cm² = 10 000 cm². Przy jednostkach pola mnożysz <b>dwa razy</b>, bo kwadrat ma długość i szerokość.</div>
          <p>Przykład: działka ma 20 m × 30 m. Pole: <span class="f">20 · 30 = 600 m² = 6 a</span> (bo 100 m² = 1 a).</p>
          <h3>Figury złożone z prostokątów</h3>
          <p>Figurę w kształcie litery L możesz:</p>
          <ul>
            <li><b>podzielić</b> na dwa prostokąty i dodać ich pola,</li>
            <li>albo <b>dorysować</b> brakujący kawałek do dużego prostokąta i odjąć jego pole.</li>
          </ul>
          <p>Przykład: prostokąt 8 m × 5 m, z którego wycięto róg 3 m × 2 m: <span class="f">8 · 5 − 3 · 2 = 40 − 6 = 34 m²</span>.</p>
          <h3>Od pola do boku</h3>
          <ul>
            <li>Kwadrat ma pole 64 cm². Jaka liczba razy ona sama daje 64? 8 · 8 = 64, więc bok ma <b>8 cm</b>.</li>
            <li>Prostokąt ma pole 36 cm², jeden bok 9 cm. Drugi bok: <span class="f">36 : 9 = 4 cm</span>.</li>
          </ul>
          <div class="tip">⚠️ Figury o tym samym polu mogą mieć różne obwody. Prostokąt 1 cm × 16 cm i kwadrat 4 cm × 4 cm mają po 16 cm² pola, ale obwody 34 cm i 16 cm.</div>
        `,
        flashcards: [
          ['1 cm²', '100 mm² (kwadrat 1 cm × 1 cm to 10 · 10 kwadracików 1 mm²)'],
          ['1 dm²', '100 cm²'],
          ['1 m²', '100 dm² = 10 000 cm²'],
          ['1 a (ar)', '100 m² – pole kwadratu o boku 10 m'],
          ['1 ha (hektar)', '100 a = 10 000 m² – pole kwadratu o boku 100 m'],
          ['1 km²', '100 ha = 1 000 000 m²'],
          ['Dlaczego 1 m² to nie 100 cm²?', 'Kwadrat 1 m × 1 m to 100 rzędów po 100 kwadracików 1 cm²: 100 · 100 = 10 000 cm²'],
          ['Pole figury w kształcie litery L', 'Podziel na prostokąty i dodaj pola albo od dużego prostokąta odejmij brakujący kawałek'],
          ['Bok kwadratu o polu 64 cm²', '8 cm, bo 8 · 8 = 64'],
          ['Bok prostokąta: pole 36 cm², drugi bok 9 cm', '36 : 9 = 4 cm'],
        ],
        questions: [
          { id: 'e1tg8v', q: 'Ile milimetrów kwadratowych ma 1 cm²?', options: ['100 mm²', '10 mm²', '1000 mm²', '10 000 mm²'], answer: 0, explain: 'Kwadrat 1 cm × 1 cm to 10 rzędów po 10 kwadracików 1 mm²: 10 · 10 = 100 mm².' },
          { id: 'bqwj1w', q: 'Ile decymetrów kwadratowych ma 1 m²?', options: ['100 dm²', '10 dm²', '1000 dm²', '10 000 dm²'], answer: 0, explain: '1 m = 10 dm, więc 1 m² = 10 · 10 dm² = 100 dm².' },
          { id: 'na7mv9', q: 'Ile centymetrów kwadratowych ma 1 m²?', options: ['10 000 cm²', '100 cm²', '1000 cm²', '1 000 000 cm²'], answer: 0, explain: '1 m = 100 cm, więc 1 m² = 100 · 100 cm² = 10 000 cm².' },
          { id: '64gokm', q: 'Ile metrów kwadratowych ma 1 ar?', options: ['100 m²', '10 m²', '1000 m²', '10 000 m²'], answer: 0, explain: 'Ar to pole kwadratu o boku 10 m: 10 · 10 = 100 m².' },
          { id: '7jwsnt', q: 'Ile metrów kwadratowych ma 1 hektar?', options: ['10 000 m²', '100 m²', '1000 m²', '1 000 000 m²'], answer: 0, explain: 'Hektar to pole kwadratu o boku 100 m: 100 · 100 = 10 000 m² (czyli 100 arów).' },
          { id: 'e9c2l1', q: 'Działka ma kształt prostokąta 20 m na 30 m. Ile to arów?', options: ['6 a', '60 a', '600 a', '50 a'], answer: 0, explain: 'Pole: 20 · 30 = 600 m². 1 a = 100 m², więc 600 m² = 6 a.' },
          { id: '0rf17i', q: 'W jakich jednostkach najlepiej podać powierzchnię Polski?', options: ['w km²', 'w cm²', 'w dm²', 'w mm²'], answer: 0, explain: 'Duże obszary – kraje, miasta, jeziora – podajemy w kilometrach kwadratowych.' },
          { id: 'glzl1s', q: 'W jakich jednostkach najlepiej podać pole kartki z zeszytu?', options: ['w cm²', 'w km²', 'w ha', 'w a'], answer: 0, explain: 'Kartka ma boki rzędu kilkunastu–kilkudziesięciu centymetrów, więc jej pole podajemy w cm².' },
          { id: '6inl3w', q: 'Zamień: 3 m² = ? dm²', options: ['300 dm²', '30 dm²', '3000 dm²', '30 000 dm²'], answer: 0, explain: '1 m² = 100 dm², więc 3 m² = 300 dm².' },
          { id: '0il2uj', q: 'Zamień: 500 mm² = ? cm²', options: ['5 cm²', '50 cm²', '5000 cm²', '0,5 cm²'], answer: 0, explain: '100 mm² = 1 cm², więc 500 mm² = 500 : 100 = 5 cm².' },
          { id: '3b6f5o', q: 'Kwadrat ma pole 64 cm². Jaką długość ma jego bok?', options: ['8 cm', '16 cm', '32 cm', '4 cm'], answer: 0, explain: '8 · 8 = 64, więc bok ma 8 cm. (16 cm to bok kwadratu o obwodzie 64 cm.)' },
          { id: 'a6mmbs', q: 'Prostokąt ma pole 36 cm², a jeden z jego boków ma 9 cm. Ile ma drugi bok?', options: ['4 cm', '27 cm', '9 cm', '45 cm'], answer: 0, explain: 'Pole = bok · bok, więc drugi bok = 36 : 9 = 4 cm. Sprawdzenie: 9 · 4 = 36.' },
          {
            id: '6f3dyx',
            q: 'Bok kratki ma 1 cm. Jakie pole ma zamalowana figura?',
            svg: `<svg viewBox="0 0 300 220" role="img" aria-label="Kratka. Zamalowana figura w kształcie litery L: prostokąt 6 kratek na 4 kratki bez kwadratu 2 na 2 kratki w prawym górnym rogu.">
      <path d="M60,40 L180,40 L180,100 L240,100 L240,160 L60,160 Z" class="f2"/>
      <g class="ln-thin">
        <line x1="30" y1="10" x2="30" y2="190"/><line x1="60" y1="10" x2="60" y2="190"/><line x1="90" y1="10" x2="90" y2="190"/><line x1="120" y1="10" x2="120" y2="190"/><line x1="150" y1="10" x2="150" y2="190"/><line x1="180" y1="10" x2="180" y2="190"/><line x1="210" y1="10" x2="210" y2="190"/><line x1="240" y1="10" x2="240" y2="190"/><line x1="270" y1="10" x2="270" y2="190"/>
        <line x1="10" y1="40" x2="290" y2="40"/><line x1="10" y1="70" x2="290" y2="70"/><line x1="10" y1="100" x2="290" y2="100"/><line x1="10" y1="130" x2="290" y2="130"/><line x1="10" y1="160" x2="290" y2="160"/><line x1="10" y1="190" x2="290" y2="190"/>
      </g>
      <path d="M60,40 L180,40 L180,100 L240,100 L240,160 L60,160 Z" class="ln s2 sw" fill="none"/>
    </svg>`,
            options: ['20 cm²', '24 cm²', '16 cm²', '28 cm²'],
            answer: 0,
            explain: 'Cały prostokąt ma 6 · 4 = 24 kratki. Brakuje rogu 2 · 2 = 4 kratki. 24 − 4 = 20 cm². (Albo: 4 · 4 + 2 · 2 = 16 + 4 = 20.)',
          },
          { id: 'luggvt', q: 'Z prostokątnego trawnika 8 m × 5 m wycięto prostokątny róg 3 m × 2 m na piaskownicę. Jakie pole ma trawnik po wycięciu rogu?', options: ['34 m²', '40 m²', '6 m²', '46 m²'], answer: 0, explain: 'Cały prostokąt: 8 · 5 = 40 m². Piaskownica: 3 · 2 = 6 m². Trawnik: 40 − 6 = 34 m².' },
          { id: 'ljeys0', q: 'Prostokąt 1 cm × 16 cm, prostokąt 2 cm × 8 cm i kwadrat 4 cm × 4 cm mają po 16 cm² pola. Która figura ma największy obwód?', options: ['prostokąt 1 cm × 16 cm', 'prostokąt 2 cm × 8 cm', 'kwadrat 4 cm × 4 cm', 'wszystkie mają taki sam obwód'], answer: 0, explain: 'Obwody: 1 + 16 + 1 + 16 = 34 cm; 2 + 8 + 2 + 8 = 20 cm; 4 · 4 = 16 cm. Takie samo pole nie znaczy takiego samego obwodu.' },
          { id: 'w1vf2g', q: 'Boisko ma 100 m długości i 60 m szerokości. Ile to arów?', options: ['60 a', '6 a', '600 a', '6000 a'], answer: 0, explain: 'Pole: 100 · 60 = 6000 m². 1 a = 100 m², więc 6000 m² = 60 a.' },
          { id: 'c0eie7', q: 'Hektar to pole kwadratu o boku…', options: ['100 m', '10 m', '1000 m', '1 m'], answer: 0, explain: '100 m · 100 m = 10 000 m² = 1 ha. Kwadrat o boku 10 m ma pole 1 ara.' },
          { id: 'r2c47y', q: 'Prawda czy fałsz?\n1 km² = 100 ha', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '1 km² = 1000 m · 1000 m = 1 000 000 m². 1 ha = 10 000 m². 1 000 000 : 10 000 = 100.' },
          { id: 'hxdv6a', q: 'Ściana ma 4 m szerokości i 3 m wysokości. Jedna puszka farby wystarcza na 6 m². Ile puszek potrzeba, żeby raz pomalować ścianę?', options: ['2', '1', '3', '12'], answer: 0, explain: 'Pole ściany: 4 · 3 = 12 m². 12 : 6 = 2 puszki.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'bryly',
        name: 'Prostopadłościan i sześcian',
        chapter: 'dział 8 „Prostopadłościany i sześciany”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 18 (rozpoznawanie prostopadłościanu i sześcianu; walca, stożka i kuli), 19 (wierzchołki, krawędzie, ściany – tylko prostopadłościan i sześcian), 20 (tylko siatka prostopadłościanu i sześcianu, model z siatki); dz. 6 Myślenie matematyczne (suma długości krawędzi). Pole powierzchni i objętość (wym. 21–22) – dział „Pole powierzchni i objętość prostopadłościanu”; graniastosłupy i ostrosłupy – później.' + WYBOR,
        theory: `
          <h3>Bryły wokół nas</h3>
          <p><b>Bryła</b> to figura przestrzenna – można ją wziąć do ręki, ma długość, szerokość i wysokość.</p>
          <table>
            <tr><th>Bryła</th><th>Przykład</th></tr>
            <tr><td>prostopadłościan</td><td>pudełko na buty, cegła, karton mleka</td></tr>
            <tr><td>sześcian</td><td>kostka do gry, kostka Rubika</td></tr>
            <tr><td>walec</td><td>puszka, świeca</td></tr>
            <tr><td>stożek</td><td>wafel do lodów, pachołek drogowy</td></tr>
            <tr><td>kula</td><td>piłka, globus</td></tr>
          </table>
          <h3>Budowa prostopadłościanu</h3>
          <ul>
            <li><b>Ściany</b> – 6 prostokątów. Ściany naprzeciw siebie są takie same. Ścianę, na której bryła stoi, nazywamy <b>podstawą</b>.</li>
            <li><b>Krawędzie</b> – 12 odcinków, w których stykają się ściany. Są 3 grupy po 4 krawędzie równej długości: długość, szerokość i wysokość.</li>
            <li><b>Wierzchołki</b> – 8 punktów, w których stykają się krawędzie. Z każdego wierzchołka wychodzą 3 krawędzie.</li>
          </ul>
          <p><span class="f">6 ścian · 12 krawędzi · 8 wierzchołków</span></p>
          <p>Na rysunku krawędzie, których nie widać (są z tyłu), rysujemy <b>linią przerywaną</b>.</p>
          <h3>Sześcian</h3>
          <p>Sześcian to prostopadłościan, którego wszystkie ściany są <b>jednakowymi kwadratami</b>. Wszystkie jego 12 krawędzi ma tę samą długość.</p>
          <div class="tip">💡 Każdy sześcian jest prostopadłościanem, ale nie każdy prostopadłościan jest sześcianem.</div>
          <h3>Suma długości krawędzi</h3>
          <ul>
            <li>Prostopadłościan o krawędziach 5 cm, 3 cm, 2 cm: <span class="f">4 · 5 + 4 · 3 + 4 · 2 = 20 + 12 + 8 = 40 cm</span>.</li>
            <li>Sześcian o krawędzi 4 cm: <span class="f">12 · 4 = 48 cm</span>.</li>
          </ul>
          <p>Przyda się, gdy robisz szkielet bryły z drutu albo oklejasz krawędzie pudełka taśmą.</p>
          <h3>Siatka</h3>
          <p><b>Siatka</b> bryły to jej ściany rozłożone na płasko – tak jak rozcięte i rozłożone pudełko. Z siatki można złożyć model bryły.</p>
          <ul>
            <li>Siatka prostopadłościanu – 6 prostokątów, po dwa takie same.</li>
            <li>Siatka sześcianu – 6 jednakowych kwadratów. Sześcian ma aż 11 różnych siatek, np. „krzyż”.</li>
          </ul>
          <div class="tip">💡 6 kwadratów to nie zawsze siatka sześcianu. Jeśli w układzie są 4 kwadraty tworzące większy kwadrat 2 × 2, sześcianu nie złożysz.</div>
        `,
        flashcards: [
          ['Prostopadłościan – ile ścian, krawędzi, wierzchołków?', '6 ścian, 12 krawędzi, 8 wierzchołków'],
          ['Ściany prostopadłościanu', '6 prostokątów; ściany naprzeciw siebie są takie same'],
          ['Sześcian', 'Prostopadłościan, którego ściany są jednakowymi kwadratami'],
          ['Ile krawędzi wychodzi z wierzchołka prostopadłościanu?', '3'],
          ['Podstawa', 'Ściana, na której stoi bryła'],
          ['Krawędzie niewidoczne na rysunku', 'Rysujemy linią przerywaną'],
          ['Suma krawędzi sześcianu o krawędzi a', '12 · a'],
          ['Siatka bryły', 'Ściany bryły rozłożone na płasko'],
          ['Puszka, wafel do lodów, piłka', 'walec, stożek, kula'],
          ['Ile różnych siatek ma sześcian?', '11'],
        ],
        questions: [
          { id: 'ybwcm8', q: 'Ile krawędzi ma prostopadłościan?', options: ['12', '8', '6', '4'], answer: 0, explain: 'Prostopadłościan ma 12 krawędzi: 4 na górze, 4 na dole i 4 pionowe.' },
          { id: 'gzict7', q: 'Ile wierzchołków ma sześcian?', options: ['8', '6', '12', '4'], answer: 0, explain: '4 wierzchołki na górze i 4 na dole – razem 8.' },
          { id: 'd84fmc', q: 'Ile ścian ma prostopadłościan?', options: ['6', '4', '8', '12'], answer: 0, explain: 'Góra, dół, przód, tył, lewa i prawa ściana – razem 6.' },
          { id: 'i616y6', q: 'Jakimi figurami są ściany sześcianu?', options: ['jednakowymi kwadratami', 'prostokątami różnej wielkości', 'trójkątami', 'kołami'], answer: 0, explain: 'Wszystkie 6 ścian sześcianu to takie same kwadraty.' },
          { id: 'ojbs2k', q: 'Który przedmiot ma kształt walca?', options: ['puszka', 'kostka do gry', 'piłka', 'pudełko na buty'], answer: 0, explain: 'Puszka to walec. Kostka do gry to sześcian, piłka – kula, pudełko na buty – prostopadłościan.' },
          { id: '9lmva9', q: 'Który przedmiot ma kształt sześcianu?', options: ['kostka do gry', 'zeszyt', 'puszka', 'piłka'], answer: 0, explain: 'Kostka do gry ma 6 jednakowych kwadratowych ścian. Zamknięty zeszyt to prostopadłościan, ale nie sześcian.' },
          { id: 'bdrga0', q: 'Która bryła nie ma ani wierzchołków, ani krawędzi?', options: ['kula', 'sześcian', 'prostopadłościan'], answer: 0, explain: 'Kula jest cała zaokrąglona – nie ma ścian, krawędzi ani wierzchołków.' },
          {
            id: 'ltouse',
            q: 'Co zaznaczono kropką na rysunku prostopadłościanu?',
            svg: `<svg viewBox="0 0 340 190" role="img" aria-label="Rysunek prostopadłościanu. Krawędzie niewidoczne są przerywane. Kropka jest w prawym górnym tylnym rogu bryły, w miejscu, gdzie spotykają się trzy krawędzie.">
      <rect x="60" y="70" width="160" height="90" class="f1"/>
      <path d="M60,70 L120,30 L280,30 L220,70 Z" class="f1"/>
      <path d="M220,70 L280,30 L280,120 L220,160 Z" class="f1"/>
      <path d="M60,160 L120,120 L280,120 M120,30 L120,120" class="ln dash"/>
      <path d="M60,70 L220,70 L220,160 L60,160 Z M60,70 L120,30 L280,30 L220,70 M280,30 L280,120 L220,160" class="ln"/>
      <circle cx="280" cy="30" r="8" class="t2"/>
    </svg>`,
            options: ['wierzchołek', 'krawędź', 'ścianę', 'podstawę'],
            answer: 0,
            explain: 'Kropka jest w punkcie, w którym stykają się 3 krawędzie. Taki punkt to wierzchołek.',
          },
          { id: 'by0fd7', q: 'Ile krawędzi wychodzi z jednego wierzchołka prostopadłościanu?', options: ['3', '4', '2', '6'], answer: 0, explain: 'Z każdego wierzchołka wychodzą 3 krawędzie: jedna w bok, jedna w głąb i jedna w górę albo w dół.' },
          { id: '5r3h9k', q: 'Z iloma innymi ścianami prostopadłościanu ma wspólną krawędź jego podstawa?', options: ['z 4', 'z 5', 'z 2', 'z 1'], answer: 0, explain: 'Podstawa styka się krawędziami z 4 ścianami bocznymi. Nie styka się tylko z górną ścianą, która leży naprzeciw niej.' },
          { id: '2jyj5k', q: 'Prostopadłościan ma krawędzie długości 5 cm, 3 cm i 2 cm. Ile krawędzi ma długość 5 cm?', options: ['4', '2', '1', '3'], answer: 0, explain: 'Krawędzie są w 3 grupach po 4 równe. Krawędzi o długości 5 cm są 4.' },
          { id: 'sc0rxu', q: 'Prostopadłościan ma krawędzie długości 5 cm, 3 cm i 2 cm. Ile wynosi suma długości wszystkich jego krawędzi?', options: ['40 cm', '10 cm', '30 cm', '20 cm'], answer: 0, explain: '4 · 5 + 4 · 3 + 4 · 2 = 20 + 12 + 8 = 40 cm.' },
          { id: 'r7id6a', q: 'Sześcian ma krawędź długości 4 cm. Ile wynosi suma długości wszystkich jego krawędzi?', options: ['48 cm', '16 cm', '24 cm', '64 cm'], answer: 0, explain: 'Sześcian ma 12 równych krawędzi: 12 · 4 = 48 cm.' },
          { id: 'wp8a0q', q: 'Z kawałka drutu o długości 60 cm zrobiono szkielet sześcianu i zużyto cały drut. Jaką długość ma krawędź sześcianu?', options: ['5 cm', '10 cm', '6 cm', '15 cm'], answer: 0, explain: 'Sześcian ma 12 równych krawędzi: 60 : 12 = 5 cm.' },
          { id: 'dch7ev', q: 'Prostopadłościan ma wymiary 4 cm, 3 cm i 2 cm. Ile jego ścian to prostokąty o bokach 4 cm i 3 cm?', options: ['2', '4', '1', '6'], answer: 0, explain: 'Ściany występują parami – naprzeciw siebie są takie same. Prostokąty 4 cm × 3 cm to góra i dół.' },
          {
            id: 'lkhy3c',
            q: 'Prawda czy fałsz?\nRysunek przedstawia siatkę sześcianu.',
            svg: `<svg viewBox="0 0 320 180" role="img" aria-label="Sześć jednakowych kwadratów: cztery ułożone jeden pod drugim, a przy drugim kwadracie z góry po jednym kwadracie z lewej i z prawej – kształt krzyża">
      <rect x="140" y="10" width="40" height="40" class="f4 s4 sw"/>
      <rect x="140" y="50" width="40" height="40" class="f4 s4 sw"/>
      <rect x="140" y="90" width="40" height="40" class="f4 s4 sw"/>
      <rect x="140" y="130" width="40" height="40" class="f4 s4 sw"/>
      <rect x="100" y="50" width="40" height="40" class="f4 s4 sw"/>
      <rect x="180" y="50" width="40" height="40" class="f4 s4 sw"/>
    </svg>`,
            options: ['Prawda', 'Fałsz'],
            noShuffle: true,
            answer: 0,
            explain: 'To siatka w kształcie krzyża. Drugi kwadrat od góry będzie dnem, cztery kwadraty wokół niego – ścianami bocznymi, a ostatni na dole – pokrywą. Powstaje sześcian.',
          },
          {
            id: 'rjzv9f',
            q: 'Prawda czy fałsz?\nRysunek przedstawia siatkę sześcianu.',
            svg: `<svg viewBox="0 0 320 120" role="img" aria-label="Sześć jednakowych kwadratów ułożonych w prostokąt: dwa rzędy po trzy kwadraty">
      <rect x="100" y="20" width="40" height="40" class="f4 s4 sw"/>
      <rect x="140" y="20" width="40" height="40" class="f4 s4 sw"/>
      <rect x="180" y="20" width="40" height="40" class="f4 s4 sw"/>
      <rect x="100" y="60" width="40" height="40" class="f4 s4 sw"/>
      <rect x="140" y="60" width="40" height="40" class="f4 s4 sw"/>
      <rect x="180" y="60" width="40" height="40" class="f4 s4 sw"/>
    </svg>`,
            options: ['Prawda', 'Fałsz'],
            noShuffle: true,
            answer: 1,
            explain: 'Cztery kwadraty tworzą tu większy kwadrat 2 × 2. Takiego układu nie da się złożyć w sześcian – ściany nachodziłyby na siebie.',
          },
          { id: 'g19slo', q: 'Prawda czy fałsz?\nKażdy prostopadłościan jest sześcianem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Odwrotnie: każdy sześcian jest prostopadłościanem. Pudełko na buty jest prostopadłościanem, ale jego ściany nie są kwadratami.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'objetosc',
        name: 'Pole powierzchni i objętość prostopadłościanu',
        chapter: 'dział 8 „Prostopadłościany i sześciany”',
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 21 (pole powierzchni prostopadłościanu), 22 (objętość prostopadłościanu o podanych krawędziach i bryły zbudowanej z kilku prostopadłościanów); dz. 2 Miary, wym. 5 (jednostki objętości i pojemności: cm³, dm³, m³, mililitr, litr), 6 (przeliczanie jednostek objętości w kontekstach praktycznych). Ciąg dalszy działu „Prostopadłościan i sześcian”.' + WYBOR,
        theory: `
          <h3>Pole powierzchni</h3>
          <p><b>Pole powierzchni</b> prostopadłościanu to suma pól jego <b>sześciu ścian</b> – tyle papieru potrzeba, żeby okleić pudełko. Ściany tworzą <b>trzy pary</b> jednakowych prostokątów.</p>
          <p>Krawędzie: a, b, c. Pary ścian mają pola a · b, b · c i a · c, więc:</p>
          <p><span class="f">P = 2 · a · b + 2 · b · c + 2 · a · c</span></p>
          <p>Przykład: 5 cm × 3 cm × 2 cm → <span class="f">P = 2 · 15 + 2 · 6 + 2 · 10 = 30 + 12 + 20 = 62 cm²</span></p>
          <p><b>Sześcian</b> ma 6 jednakowych kwadratów: <span class="f">P = 6 · a · a</span>. Krawędź 4 cm → P = 6 · 16 = 96 cm².</p>
          <div class="tip">💡 Pudełko <b>bez wieka</b> ma tylko 5 ścian – jedną odejmij. Pudełko 10 cm × 10 cm × 5 cm bez wieka: 100 + 4 · 50 = 300 cm².</div>
          <h3>Objętość</h3>
          <p><b>Objętość</b> mówi, ile miejsca zajmuje bryła. Mierzymy ją w <b>sześcianach jednostkowych</b>: 1 cm³ to sześcian o krawędzi 1 cm.</p>
          <p>Pudełko 4 cm × 3 cm × 2 cm: na dnie zmieści się 4 · 3 = 12 kostek, a takich warstw są 2 → 24 kostki, czyli 24 cm³.</p>
          <p><span class="f">V = a · b · c</span> &nbsp;&nbsp; sześcian: <span class="f">V = a · a · a</span></p>
          <ul>
            <li>5 cm × 3 cm × 2 cm → V = 30 cm³</li>
            <li>sześcian o krawędzi 4 cm → V = 4 · 4 · 4 = 64 cm³</li>
          </ul>
          <h3>Jednostki objętości i pojemności</h3>
          <table>
            <tr><th>Jednostka</th><th>Ile to?</th></tr>
            <tr><td>1 cm³</td><td>= <b>1 ml</b> (mililitr)</td></tr>
            <tr><td>1 dm³</td><td>= 10 · 10 · 10 cm³ = <b>1000 cm³</b> = <b>1 l</b> (litr)</td></tr>
            <tr><td>1 m³</td><td>= 1000 dm³ = <b>1000 l</b></td></tr>
          </table>
          <p>Akwarium 50 cm × 30 cm × 40 cm: V = 60 000 cm³ = 60 dm³ = <b>60 l</b>.</p>
          <h3>Bryła z kilku prostopadłościanów</h3>
          <p>Podziel bryłę na prostopadłościany, oblicz objętość każdego i dodaj. Np. 4 cm × 3 cm × 2 cm i 2 cm × 3 cm × 2 cm: 24 + 12 = 36 cm³.</p>
          <div class="tip">💡 Pole – w jednostkach „do kwadratu” (cm²), objętość – „do sześcianu” (cm³). Przed liczeniem zamień wszystkie krawędzie na te same jednostki.</div>
        `,
        flashcards: [
          ['Pole powierzchni prostopadłościanu', 'Suma pól 6 ścian: P = 2·a·b + 2·b·c + 2·a·c'],
          ['Pole powierzchni sześcianu', 'P = 6 · a · a'],
          ['Objętość prostopadłościanu', 'V = a · b · c'],
          ['Objętość sześcianu', 'V = a · a · a'],
          ['1 cm³', 'Sześcian o krawędzi 1 cm; to 1 ml'],
          ['1 dm³', '1000 cm³ = 1 litr'],
          ['1 m³', '1000 dm³ = 1000 litrów'],
          ['5 cm × 3 cm × 2 cm', 'P = 62 cm², V = 30 cm³'],
          ['Sześcian o krawędzi 4 cm', 'P = 96 cm², V = 64 cm³'],
          ['Pudełko bez wieka', 'Ma 5 ścian – licz pole bez jednej ściany'],
          ['Objętość bryły złożonej', 'Suma objętości prostopadłościanów, z których się składa'],
          ['cm² czy cm³?', 'Pole – cm², objętość – cm³'],
        ],
        questions: [
          { id: 'uewmza', q: 'Czym jest pole powierzchni prostopadłościanu?', options: ['sumą pól wszystkich sześciu ścian', 'iloczynem długości trzech krawędzi', 'sumą długości wszystkich krawędzi', 'polem jednej podstawy'], answer: 0, explain: 'Pole powierzchni to tyle, ile papieru potrzeba na oklejenie wszystkich 6 ścian.' },
          { id: 'o0xl9e', q: 'Prostopadłościan ma krawędzie 5 cm, 3 cm i 2 cm. Jakie ma pole powierzchni?', options: ['62 cm²', '30 cm²', '31 cm²', '40 cm²'], answer: 0, explain: 'P = 2 · 5 · 3 + 2 · 3 · 2 + 2 · 5 · 2 = 30 + 12 + 20 = 62 cm². 30 to objętość (w cm³), 31 – suma pól tylko trzech ścian.' },
          { id: 'nv964t', q: 'Sześcian ma krawędź 3 cm. Jakie ma pole powierzchni?', options: ['54 cm²', '27 cm²', '9 cm²', '36 cm²'], answer: 0, explain: 'Jedna ściana: 3 · 3 = 9 cm². Ścian jest 6: 6 · 9 = 54 cm².' },
          { id: 'guvcra', q: 'Prostopadłościan ma krawędzie 5 cm, 3 cm i 2 cm. Jaka jest jego objętość?', options: ['30 cm³', '62 cm³', '10 cm³', '60 cm³'], answer: 0, explain: 'V = 5 · 3 · 2 = 30 cm³.' },
          { id: '3em0a0', q: 'Sześcian ma krawędź 4 cm. Jaka jest jego objętość?', options: ['64 cm³', '16 cm³', '48 cm³', '96 cm³'], answer: 0, explain: 'V = 4 · 4 · 4 = 64 cm³. 96 to pole powierzchni (w cm²), a 16 – pole jednej ściany.' },
          { id: 'kqi5hk', q: 'Ile sześcianików o krawędzi 1 cm zmieści się w pudełku 4 cm × 3 cm × 2 cm?', options: ['24', '9', '26', '12'], answer: 0, explain: 'Na dnie: 4 · 3 = 12 sześcianików. Dwie warstwy: 12 · 2 = 24.' },
          {
            id: '31e4da',
            q: 'Oblicz objętość prostopadłościanu z rysunku.',
            svg: `<svg viewBox="0 0 320 200" role="img" aria-label="Prostopadłościan o krawędziach: długość 6 cm, szerokość 4 cm, wysokość 3 cm">
      <path d="M40,80 L220,80 L220,170 L40,170 Z" class="f1 s1 sw"/>
      <path d="M40,80 L100,30 L280,30 L220,80 Z" class="f4 s4 sw"/>
      <path d="M220,80 L280,30 L280,120 L220,170 Z" class="f3 s3 sw"/>
      <text x="130" y="192" class="tx" text-anchor="middle">6 cm</text>
      <text x="254" y="160" class="tx">4 cm</text>
      <text x="48" y="130" class="tx">3 cm</text>
    </svg>`,
            options: ['72 cm³', '13 cm³', '108 cm³', '36 cm³'],
            answer: 0,
            explain: 'V = 6 · 4 · 3 = 72 cm³. 108 to pole powierzchni tego prostopadłościanu (w cm²).',
          },
          {
            id: 'm7tbt5',
            q: 'Oblicz pole powierzchni prostopadłościanu z rysunku.',
            svg: `<svg viewBox="0 0 320 200" role="img" aria-label="Prostopadłościan o krawędziach: długość 6 cm, szerokość 4 cm, wysokość 3 cm">
      <path d="M40,80 L220,80 L220,170 L40,170 Z" class="f1 s1 sw"/>
      <path d="M40,80 L100,30 L280,30 L220,80 Z" class="f4 s4 sw"/>
      <path d="M220,80 L280,30 L280,120 L220,170 Z" class="f3 s3 sw"/>
      <text x="130" y="192" class="tx" text-anchor="middle">6 cm</text>
      <text x="254" y="160" class="tx">4 cm</text>
      <text x="48" y="130" class="tx">3 cm</text>
    </svg>`,
            options: ['108 cm²', '72 cm²', '54 cm²', '52 cm²'],
            answer: 0,
            explain: 'P = 2 · 6 · 4 + 2 · 4 · 3 + 2 · 6 · 3 = 48 + 24 + 36 = 108 cm². 54 to tylko trzy ściany, a 52 cm – suma długości krawędzi.',
          },
          { id: 'eabmkb', q: 'Ile centymetrów sześciennych ma 1 dm³?', options: ['1000 cm³', '100 cm³', '10 cm³', '10 000 cm³'], answer: 0, explain: '1 dm = 10 cm, więc 1 dm³ = 10 · 10 · 10 = 1000 cm³.' },
          { id: '7l9nom', q: 'Ile to jest 1 litr?', options: ['1 dm³', '1 cm³', '1 m³', '10 dm³'], answer: 0, explain: '1 l = 1 dm³ = 1000 cm³.' },
          { id: 'bg74k7', q: 'Ile to jest 1 ml?', options: ['1 cm³', '1 dm³', '10 cm³', '100 cm³'], answer: 0, explain: '1 ml to tysięczna część litra: 1000 ml = 1 l = 1000 cm³, więc 1 ml = 1 cm³.' },
          { id: '3fn5u3', q: 'Ile litrów to 1 m³?', options: ['1000 l', '100 l', '10 l', '1 000 000 l'], answer: 0, explain: '1 m = 10 dm, więc 1 m³ = 10 · 10 · 10 = 1000 dm³ = 1000 l.' },
          { id: '27ent5', q: 'Akwarium ma wymiary 50 cm × 30 cm × 40 cm. Ile litrów wody się w nim zmieści?', options: ['60 l', '600 l', '6 l', '6000 l'], answer: 0, explain: 'V = 50 · 30 · 40 = 60 000 cm³. 1000 cm³ = 1 l, więc 60 000 cm³ = 60 l.' },
          { id: 'c9ty9f', q: 'Karton o podstawie 10 cm × 5 cm mieści dokładnie 1 litr. Jaką ma wysokość?', options: ['20 cm', '10 cm', '15 cm', '50 cm'], answer: 0, explain: '1 l = 1000 cm³. Pole podstawy: 10 · 5 = 50 cm². Wysokość: 1000 : 50 = 20 cm. Sprawdzenie: 10 · 5 · 20 = 1000.' },
          { id: 'x6wq5n', q: 'Ile kartonu potrzeba na pudełko bez wieka o wymiarach 10 cm × 10 cm × 5 cm?', options: ['300 cm²', '400 cm²', '500 cm²', '250 cm²'], answer: 0, explain: 'Dno: 10 · 10 = 100 cm². Cztery boki: 4 · (10 · 5) = 200 cm². Razem 300 cm². 400 cm² to pudełko z wiekiem.' },
          { id: 'gyugfv', q: 'Bryła składa się z dwóch prostopadłościanów: 4 cm × 3 cm × 2 cm i 2 cm × 3 cm × 2 cm. Jaka jest jej objętość?', options: ['36 cm³', '24 cm³', '12 cm³', '288 cm³'], answer: 0, explain: '4 · 3 · 2 = 24 cm³ i 2 · 3 · 2 = 12 cm³. Razem 24 + 12 = 36 cm³.' },
          { id: 'ydxmqd', q: 'Basen ma wymiary 10 m × 5 m × 2 m. Jaka jest jego objętość?', options: ['100 m³', '17 m³', '160 m³', '50 m³'], answer: 0, explain: 'V = 10 · 5 · 2 = 100 m³, czyli 100 000 litrów. 160 to pole powierzchni (w m²), 17 – suma trzech krawędzi.' },
          { id: 'j04ce0', q: 'Jeden sześcian ma krawędź 1 cm, a drugi 2 cm. Ile razy większa jest objętość drugiego sześcianu?', options: ['8 razy', '2 razy', '4 razy', '6 razy'], answer: 0, explain: 'Objętości: 1 · 1 · 1 = 1 cm³ i 2 · 2 · 2 = 8 cm³. W drugim sześcianie zmieści się 8 małych.' },
          { id: 'lm2zq9', q: 'Prawda czy fałsz?\nObjętość podajemy w cm², a pole powierzchni w cm³.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Odwrotnie: pole – w cm² (kwadraciki), objętość – w cm³ (sześcianiki).' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'dzielniki',
        name: 'Dzielniki, wielokrotności i cechy podzielności',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 3 (podzielność przez 2, 3, 4, 5, 9, 10), 4 (liczby pierwsze i złożone – jedno- i dwucyfrowe), 6 (wspólne dzielniki i wielokrotności dwóch liczb, NWD i NWW – bez rozkładu na czynniki pierwsze), 7 (dzielniki i wielokrotności w obliczeniach i rozumowaniach), 8 (liczebność zbioru liczb z niewielkiego zakresu). Rozkład na czynniki pierwsze (wym. 5) – później.' + WYBOR,
        theory: `
          <h3>Dzielnik i wielokrotność</h3>
          <p>Liczba 3 jest <b>dzielnikiem</b> liczby 12, bo 12 : 3 = 4 bez reszty. Mówimy też: 12 <b>dzieli się przez</b> 3 i 12 jest <b>wielokrotnością</b> liczby 3.</p>
          <ul>
            <li>Dzielniki liczby 12: <span class="f">1, 2, 3, 4, 6, 12</span>. Szukaj ich parami: 1 · 12, 2 · 6, 3 · 4.</li>
            <li>Wielokrotności liczby 6: <span class="f">6, 12, 18, 24, 30, …</span> – to wyniki mnożenia 6 · 1, 6 · 2, 6 · 3… Jest ich nieskończenie wiele.</li>
          </ul>
          <div class="tip">💡 Każda liczba dzieli się przez 1 i przez samą siebie.</div>
          <h3>Cechy podzielności – sprawdzasz bez dzielenia</h3>
          <table>
            <tr><th>Przez</th><th>Liczba dzieli się, gdy…</th><th>Przykład</th></tr>
            <tr><td>2</td><td>ostatnia cyfra to 0, 2, 4, 6 lub 8 (liczba parzysta)</td><td>3 578</td></tr>
            <tr><td>5</td><td>ostatnia cyfra to 0 lub 5</td><td>345, 340</td></tr>
            <tr><td>10</td><td>ostatnia cyfra to 0</td><td>2 030</td></tr>
            <tr><td>4</td><td>liczba z dwóch ostatnich cyfr dzieli się przez 4</td><td>1 316 (16 : 4 = 4)</td></tr>
            <tr><td>3</td><td>suma cyfr dzieli się przez 3</td><td>5 271 (5 + 2 + 7 + 1 = 15)</td></tr>
            <tr><td>9</td><td>suma cyfr dzieli się przez 9</td><td>4 518 (4 + 5 + 1 + 8 = 18)</td></tr>
          </table>
          <div class="tip">💡 Liczba podzielna przez 9 dzieli się też przez 3. Odwrotnie nie zawsze: 12 dzieli się przez 3, ale nie przez 9.</div>
          <h3>Liczby pierwsze i złożone</h3>
          <ul>
            <li><b>Liczba pierwsza</b> ma dokładnie dwa dzielniki: 1 i samą siebie. Liczby pierwsze mniejsze od 30: <span class="f">2, 3, 5, 7, 11, 13, 17, 19, 23, 29</span>.</li>
            <li><b>Liczba złożona</b> ma więcej niż dwa dzielniki, np. 15 (1, 3, 5, 15).</li>
            <li>Liczby <b>0 i 1</b> nie są ani pierwsze, ani złożone.</li>
          </ul>
          <p>Cechy podzielności pomagają wykryć liczbę złożoną: 51 ma sumę cyfr 6, więc dzieli się przez 3 (51 = 3 · 17) – jest złożona.</p>
          <h3>Wspólne dzielniki i wspólne wielokrotności</h3>
          <ul>
            <li>Dzielniki 12: 1, 2, 3, 4, 6, 12. Dzielniki 18: 1, 2, 3, 6, 9, 18. Wspólne: 1, 2, 3, 6. Największy wspólny dzielnik: <b>NWD(12, 18) = 6</b>.</li>
            <li>Wielokrotności 4: 4, 8, <b>12</b>, 16, 20, <b>24</b>… Wielokrotności 6: 6, <b>12</b>, 18, <b>24</b>… Najmniejsza wspólna wielokrotność: <b>NWW(4, 6) = 12</b>.</li>
          </ul>
          <p><b>Kiedy NWD?</b> Gdy coś dzielimy na jak najwięcej jednakowych paczek bez resztek. <b>Kiedy NWW?</b> Gdy szukamy, kiedy dwa powtarzające się zdarzenia znów wypadną razem (np. odjazdy dwóch autobusów).</p>
        `,
        flashcards: [
          ['Dzielnik liczby', 'Liczba, przez którą dana liczba dzieli się bez reszty, np. 4 jest dzielnikiem 12'],
          ['Wielokrotność liczby 7', '7, 14, 21, 28, … – wyniki mnożenia 7 przez 1, 2, 3, 4, …'],
          ['Podzielność przez 2', 'Ostatnia cyfra: 0, 2, 4, 6 lub 8'],
          ['Podzielność przez 5', 'Ostatnia cyfra: 0 lub 5'],
          ['Podzielność przez 10', 'Ostatnia cyfra: 0'],
          ['Podzielność przez 4', 'Liczba z dwóch ostatnich cyfr dzieli się przez 4'],
          ['Podzielność przez 3 i przez 9', 'Suma cyfr dzieli się przez 3 (przez 9)'],
          ['Liczba pierwsza', 'Ma dokładnie dwa dzielniki: 1 i samą siebie, np. 2, 3, 5, 7, 11'],
          ['Liczba złożona', 'Ma więcej niż dwa dzielniki, np. 4, 9, 15'],
          ['NWD(12, 18)', '6 – największy wspólny dzielnik'],
          ['NWW(4, 6)', '12 – najmniejsza wspólna wielokrotność'],
        ],
        questions: [
          { id: 'znn2d2', q: 'Która liczba NIE jest dzielnikiem liczby 12?', options: ['5', '4', '6', '1'], answer: 0, explain: 'Dzielniki 12 to 1, 2, 3, 4, 6, 12. Przy dzieleniu 12 przez 5 zostaje reszta 2.' },
          { id: 'sbiy9j', q: 'Ile dzielników ma liczba 18?', options: ['6', '4', '5', '3'], answer: 0, explain: 'Szukaj parami: 1 · 18, 2 · 9, 3 · 6. Dzielniki: 1, 2, 3, 6, 9, 18 – jest ich 6.' },
          { id: '5wsrdh', q: 'Która liczba jest wielokrotnością liczby 7?', options: ['63', '27', '47', '71'], answer: 0, explain: '63 = 7 · 9. Pozostałe liczby przy dzieleniu przez 7 dają resztę.' },
          { id: 'pncd31', q: 'Które liczby to kolejne wielokrotności liczby 6?', options: ['6, 12, 18, 24', '1, 2, 3, 6', '6, 16, 26, 36', '6, 11, 16, 21'], answer: 0, explain: '6 · 1 = 6, 6 · 2 = 12, 6 · 3 = 18, 6 · 4 = 24. Liczby 1, 2, 3, 6 to dzielniki 6, a nie wielokrotności.' },
          { id: '8dowge', q: 'Która liczba jest podzielna przez 2?', options: ['3 578', '4 251', '7 003', '1 119'], answer: 0, explain: 'Liczba dzieli się przez 2, gdy jej ostatnia cyfra jest parzysta. 3 578 kończy się cyfrą 8.' },
          { id: '5u2uyq', q: 'Która liczba dzieli się przez 5, ale NIE dzieli się przez 10?', options: ['345', '340', '342', '1 000'], answer: 0, explain: '345 kończy się cyfrą 5 – dzieli się przez 5, ale przez 10 nie (nie kończy się zerem). 342 nie dzieli się ani przez 5, ani przez 10.' },
          { id: 'qbq35u', q: 'Która liczba jest podzielna przez 3?', options: ['5 271', '4 102', '2 501', '1 000'], answer: 0, explain: 'Suma cyfr 5 271: 5 + 2 + 7 + 1 = 15, a 15 dzieli się przez 3. Pozostałe sumy: 7, 8, 1.' },
          { id: 'uksdsh', q: 'Która liczba jest podzielna przez 9?', options: ['4 518', '4 528', '3 333', '1 990'], answer: 0, explain: 'Suma cyfr 4 518 to 18 – dzieli się przez 9. 3 333 ma sumę 12: dzieli się przez 3, ale nie przez 9.' },
          { id: 'ztteib', q: 'Która liczba jest podzielna przez 4?', options: ['1 316', '1 318', '2 410', '3 334'], answer: 0, explain: 'Patrzymy na dwie ostatnie cyfry: 16 dzieli się przez 4, a 18, 10 i 34 – nie.' },
          { id: 'llplyn', q: 'Prawda czy fałsz?\nKażda liczba podzielna przez 9 jest podzielna przez 3.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '9 = 3 · 3. Jeśli liczba mieści w sobie całe dziewiątki, to mieści też całe trójki.' },
          { id: 'hrxslx', q: 'Prawda czy fałsz?\nKażda liczba podzielna przez 3 jest podzielna przez 9.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Kontrprzykład: 12 dzieli się przez 3, ale nie dzieli się przez 9.' },
          { id: 'bor7us', q: 'Która liczba jest liczbą pierwszą?', options: ['13', '15', '21', '27'], answer: 0, explain: '13 ma tylko dwa dzielniki: 1 i 13. 15 = 3 · 5, 21 = 3 · 7, 27 = 3 · 9 – to liczby złożone.' },
          { id: '17697s', q: 'Która liczba jest liczbą złożoną?', options: ['51', '53', '47', '31'], answer: 0, explain: 'Suma cyfr 51 to 6, więc 51 dzieli się przez 3: 51 = 3 · 17. Liczby 53, 47 i 31 są pierwsze.' },
          { id: 'wna5zh', q: 'Liczba 1 jest…', options: ['ani pierwsza, ani złożona', 'pierwsza', 'złożona'], answer: 0, explain: 'Liczba 1 ma tylko jeden dzielnik (samą siebie). Liczba pierwsza musi mieć dokładnie dwa dzielniki.' },
          { id: 'd2nqkw', q: 'Ile wynosi największy wspólny dzielnik liczb 12 i 18?', options: ['6', '3', '2', '36'], answer: 0, explain: 'Wspólne dzielniki 12 i 18 to 1, 2, 3, 6. Największy z nich to 6.' },
          { id: '3atsba', q: 'Ile wynosi najmniejsza wspólna wielokrotność liczb 4 i 6?', options: ['12', '24', '2', '10'], answer: 0, explain: 'Wielokrotności 4: 4, 8, 12… Wielokrotności 6: 6, 12… Pierwsza wspólna to 12. Liczba 24 też jest wspólną wielokrotnością, ale nie najmniejszą.' },
          { id: 'lg29ul', q: 'Autobus linii A odjeżdża z przystanku co 15 minut, a linii B – co 20 minut. Oba odjechały razem o 8:00. O której znów odjadą razem?', options: ['o 9:00', 'o 8:35', 'o 8:20', 'o 8:15'], answer: 0, explain: 'Szukamy NWW(15, 20). Wielokrotności 15: 15, 30, 45, 60… Wielokrotności 20: 20, 40, 60… Pierwsza wspólna to 60 minut, czyli godzina: 9:00.' },
          { id: 'affmiz', q: 'Masz 24 jabłka i 36 gruszek. Chcesz zrobić jak najwięcej jednakowych paczek (w każdej tyle samo jabłek i tyle samo gruszek), tak żeby nic nie zostało. Ile będzie paczek?', options: ['12', '6', '4', '72'], answer: 0, explain: 'Liczba paczek musi dzielić 24 i 36. Największy wspólny dzielnik to 12: w każdej paczce będą 2 jabłka i 3 gruszki.' },
          { id: '6a5elj', q: 'Ile jest liczb dwucyfrowych podzielnych przez 10?', options: ['9', '10', '8', '90'], answer: 0, explain: 'To 10, 20, 30, 40, 50, 60, 70, 80, 90 – dziewięć liczb. 100 jest już trzycyfrowa.' },
          { id: 'x933hs', q: 'Jaką cyfrę można wpisać w miejsce kratki, aby liczba 4■ była podzielna przez 3 i przez 5?', options: ['5', '0', '2', '8'], answer: 0, explain: 'Przez 5: ostatnia cyfra 0 lub 5. 40 ma sumę cyfr 4 – nie dzieli się przez 3. 45 ma sumę 9 – dzieli się przez 3. Pasuje 5.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'dziesietne-dzialania',
        name: 'Ułamki dziesiętne – mnożenie i dzielenie',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 28a (mnożenie ułamków dziesiętnych – tu przez 10, 100, 1000, przez liczbę naturalną i proste iloczyny dwóch ułamków, co najwyżej trzy cyfry po przecinku), 28b (dzielenie – tu tylko przez 10, 100, 1000 i przez liczbę naturalną jednocyfrową; dzielenie przez ułamek dziesiętny – później); dz. 2 Miary, wym. 2, 7 i 10 (zamiana jednostek długości i masy przez mnożenie i dzielenie przez 10, 100, 1000); dz. 2 wym. 13 (proste obliczenia pieniężne – moduł ekonomiczno-finansowy). Ciąg dalszy działu „Ułamki dziesiętne – pierwsze kroki”.' + WYBOR,
        theory: `
          <h3>Mnożenie przez 10, 100, 1000</h3>
          <p>Przesuwasz przecinek <b>w prawo</b> – o tyle miejsc, ile zer ma mnożnik:</p>
          <ul>
            <li><span class="f">3,45 · 10 = 34,5</span> (o 1 miejsce)</li>
            <li><span class="f">3,45 · 100 = 345</span> (o 2 miejsca)</li>
            <li><span class="f">3,45 · 1000 = 3450</span> (o 3 miejsca – brakujące miejsce uzupełniasz zerem)</li>
          </ul>
          <h3>Dzielenie przez 10, 100, 1000</h3>
          <p>Przesuwasz przecinek <b>w lewo</b> – o tyle miejsc, ile zer ma dzielnik:</p>
          <ul>
            <li><span class="f">45,6 : 10 = 4,56</span></li>
            <li><span class="f">45,6 : 100 = 0,456</span></li>
            <li><span class="f">8 : 100 = 0,08</span> (8 = 8,0 – przed ósemką dopisujesz zera)</li>
          </ul>
          <div class="tip">💡 Mnożenie robi liczbę większą – przecinek idzie w prawo. Dzielenie robi ją mniejszą – przecinek idzie w lewo.</div>
          <h3>Zamiana jednostek</h3>
          <ul>
            <li>1 m = 100 cm: <span class="f">2,5 m = 2,5 · 100 cm = 250 cm</span></li>
            <li>1 kg = 1000 g: <span class="f">350 g = 350 : 1000 kg = 0,35 kg</span></li>
            <li>1 cm = 10 mm: <span class="f">4,2 cm = 42 mm</span></li>
          </ul>
          <h3>Mnożenie przez liczbę naturalną</h3>
          <p>Mnożysz tak, jakby przecinka nie było, a potem w wyniku oddzielasz <b>tyle cyfr po przecinku, ile było w ułamku</b>.</p>
          <ul>
            <li><span class="f">0,4 · 3</span>: 4 · 3 = 12 → <span class="f">1,2</span></li>
            <li><span class="f">1,25 · 3</span>: 125 · 3 = 375 → <span class="f">3,75</span></li>
            <li><span class="f">2,5 · 4</span>: 25 · 4 = 100 → 10,0 = <span class="f">10</span></li>
          </ul>
          <h3>Mnożenie dwóch ułamków dziesiętnych</h3>
          <p>Wynik ma tyle cyfr po przecinku, ile <b>razem</b> mają oba czynniki:</p>
          <ul>
            <li><span class="f">0,3 · 0,2</span>: 3 · 2 = 6, razem 2 cyfry po przecinku → <span class="f">0,06</span></li>
            <li><span class="f">1,5 · 0,4</span>: 15 · 4 = 60, 2 cyfry → 0,60 = <span class="f">0,6</span></li>
          </ul>
          <h3>Dzielenie przez liczbę naturalną</h3>
          <p>Dzielisz jak zwykle, a przecinek w wyniku stawiasz <b>w tym miejscu, w którym przekraczasz przecinek</b> w dzielnej.</p>
          <ul>
            <li><span class="f">4,8 : 2 = 2,4</span> (48 dziesiątych : 2 = 24 dziesiąte)</li>
            <li><span class="f">6,3 : 7 = 0,9</span> (63 dziesiąte : 7 = 9 dziesiątych)</li>
            <li><span class="f">1 : 4 = 0,25</span> (1 = 1,00, czyli 100 setnych : 4 = 25 setnych)</li>
          </ul>
          <h3>Sprawdzaj szacowaniem</h3>
          <p>1,25 · 3 to trochę więcej niż 1 · 3 = 3 – wynik 3,75 pasuje, a 37,5 na pewno nie.</p>
        `,
        flashcards: [
          ['· 10, · 100, · 1000', 'Przecinek w prawo o 1, 2, 3 miejsca'],
          [': 10, : 100, : 1000', 'Przecinek w lewo o 1, 2, 3 miejsca'],
          ['3,45 · 100', '345'],
          ['45,6 : 100', '0,456'],
          ['2,5 m w centymetrach', '250 cm (2,5 · 100)'],
          ['350 g w kilogramach', '0,35 kg (350 : 1000)'],
          ['0,4 · 3', '1,2 (4 · 3 = 12, jedna cyfra po przecinku)'],
          ['0,3 · 0,2', '0,06 (razem dwie cyfry po przecinku)'],
          ['4,8 : 2', '2,4'],
          ['1 : 4', '0,25 (1 = 1,00)'],
          ['Jak sprawdzić wynik 1,25 · 3?', 'Oszacuj: ok. 1 · 3 = 3, więc 3,75 pasuje'],
        ],
        questions: [
          { id: 'p6j4i1', q: 'Ile wynosi 3,45 · 10?', options: ['34,5', '3,450', '345', '0,345'], answer: 0, explain: 'Mnożenie przez 10 – przecinek o jedno miejsce w prawo: 34,5.' },
          { id: 'xqknf8', q: 'Ile wynosi 0,072 · 100?', options: ['7,2', '72', '0,72', '0,00072'], answer: 0, explain: 'Mnożenie przez 100 – przecinek o dwa miejsca w prawo: 0,072 → 7,2.' },
          { id: 'm869jx', q: 'Ile wynosi 1,5 · 1000?', options: ['1500', '150', '15 000', '1,5000'], answer: 0, explain: 'Przecinek o trzy miejsca w prawo: 1,500 → 1500. Brakujące miejsca uzupełniasz zerami.' },
          { id: 'pig6ap', q: 'Ile wynosi 45,6 : 10?', options: ['4,56', '456', '0,456', '45,06'], answer: 0, explain: 'Dzielenie przez 10 – przecinek o jedno miejsce w lewo: 4,56.' },
          { id: 'xfwxq8', q: 'Ile wynosi 8 : 100?', options: ['0,08', '0,8', '0,008', '800'], answer: 0, explain: '8 = 8,0. Przecinek o dwa miejsca w lewo – dopisujesz zero przed ósemką: 0,08.' },
          { id: 'gtlmx5', q: 'Ile to centymetrów: 2,5 m?', options: ['250 cm', '25 cm', '2500 cm', '205 cm'], answer: 0, explain: '1 m = 100 cm, więc mnożysz przez 100: 2,5 · 100 = 250 cm.' },
          { id: 'n46yz7', q: 'Ile to kilogramów: 350 g?', options: ['0,35 kg', '3,5 kg', '0,035 kg', '35 kg'], answer: 0, explain: '1 kg = 1000 g, więc dzielisz przez 1000: 350 : 1000 = 0,35 kg.' },
          { id: '3tt1pk', q: 'Ile wynosi 0,4 · 3?', options: ['1,2', '0,12', '12', '0,7'], answer: 0, explain: '4 · 3 = 12. W ułamku 0,4 jest jedna cyfra po przecinku, więc wynik to 1,2.' },
          { id: 'elypvl', q: 'Ile wynosi 1,25 · 3?', options: ['3,75', '3,65', '37,5', '3,15'], answer: 0, explain: '125 · 3 = 375. W 1,25 są dwie cyfry po przecinku, więc 3,75. Szacowanie: ok. 1 · 3 = 3 – pasuje.' },
          { id: 'wjwlw2', q: 'Ile wynosi 2,5 · 4?', options: ['10', '1', '8,2', '100'], answer: 0, explain: '25 · 4 = 100, jedna cyfra po przecinku: 10,0 = 10. Inaczej: 2 · 4 = 8 i 0,5 · 4 = 2, razem 10.' },
          { id: '40rhvl', q: 'Ile wynosi 0,3 · 0,2?', options: ['0,06', '0,6', '6', '0,006'], answer: 0, explain: '3 · 2 = 6. Oba czynniki mają razem dwie cyfry po przecinku, więc 0,06.' },
          { id: 'cqplzk', q: 'Ile wynosi 1,5 · 0,4?', options: ['0,6', '6', '0,06', '1,9'], answer: 0, explain: '15 · 4 = 60. Razem dwie cyfry po przecinku: 0,60 = 0,6.' },
          { id: 'rjrf00', q: 'Ile cyfr po przecinku ma iloczyn 0,25 · 0,3, zanim skreślisz zera na końcu?', options: ['3', '2', '1', '5'], answer: 0, explain: '0,25 ma dwie cyfry po przecinku, 0,3 – jedną. Razem trzy: 25 · 3 = 75 → 0,075.' },
          { id: 'gqhs25', q: 'Ile wynosi 4,8 : 2?', options: ['2,4', '2,04', '24', '0,24'], answer: 0, explain: '48 dziesiątych : 2 = 24 dziesiąte, czyli 2,4. Sprawdzenie: 2,4 · 2 = 4,8.' },
          { id: 'ln48tw', q: 'Ile wynosi 6,3 : 7?', options: ['0,9', '9', '0,09', '1,1'], answer: 0, explain: '63 dziesiąte : 7 = 9 dziesiątych, czyli 0,9. Sprawdzenie: 0,9 · 7 = 6,3.' },
          { id: '786qrx', q: 'Ile wynosi 1 : 4?', options: ['0,25', '0,4', '4', '2,5'], answer: 0, explain: '1 = 1,00, czyli 100 setnych. 100 setnych : 4 = 25 setnych = 0,25.' },
          { id: 'e06y8w', q: 'Zeszyt kosztuje 2,40 zł. Ile zapłacisz za 3 zeszyty?', options: ['7,20 zł', '6,120 zł', '7,02 zł', '6,80 zł'], answer: 0, explain: '2,40 · 3: 2 zł · 3 = 6 zł i 40 gr · 3 = 120 gr = 1,20 zł. Razem 7,20 zł.' },
          { id: 'isljud', q: 'Za 3 jednakowe soki zapłacono 12,60 zł. Ile kosztuje jeden sok?', options: ['4,20 zł', '4,02 zł', '4,60 zł', '37,80 zł'], answer: 0, explain: '12,60 : 3 = 4,20 zł. Sprawdzenie: 4,20 · 3 = 12,60.' },
          { id: '8ku3ph', q: 'Kilogram jabłek kosztuje 4,50 zł. Ile zapłacisz za 2 kg?', options: ['9,00 zł', '8,10 zł', '9,50 zł', '6,50 zł'], answer: 0, explain: '4,50 · 2 = 9,00 zł (4 zł · 2 = 8 zł, 50 gr · 2 = 1 zł).' },
          { id: '7cbirp', q: 'Prawda czy fałsz?\nMnożąc liczbę przez 100, przesuwasz przecinek o dwa miejsca w lewo.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Mnożenie przez 100 zwiększa liczbę, więc przecinek idzie w prawo: 0,35 · 100 = 35. W lewo przesuwasz go przy dzieleniu.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'trojkaty-czworokaty',
        name: 'Trójkąty i czworokąty',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 7 (trójkąty ostrokątne, prostokątne, rozwartokątne; różnoboczne, równoramienne, równoboczne), 9 (tylko ramiona i podstawa trójkąta równoramiennego, równość ramion), 11 (kwadrat, prostokąt, romb, równoległobok, trapez, w tym równoramienny i prostokątny – rozpoznawanie i własności boków), 15 (obwód wielokąta). Suma kątów i konstrukcja trójkąta (wym. 8, 10) – dział „Kąty w trójkącie i czworokącie, budowanie trójkąta”; wysokości i pola (wym. 13–14) – dział „Wysokości i pola trójkątów i czworokątów”.' + WYBOR,
        theory: `
          <h3>Trójkąty – ze względu na kąty</h3>
          <table>
            <tr><th>Trójkąt</th><th>Kąty</th></tr>
            <tr><td>ostrokątny</td><td>wszystkie 3 kąty ostre</td></tr>
            <tr><td>prostokątny</td><td>1 kąt prosty</td></tr>
            <tr><td>rozwartokątny</td><td>1 kąt rozwarty</td></tr>
          </table>
          <p>Trójkąt nie może mieć dwóch kątów prostych ani dwóch rozwartych – jego boki nie spotkałyby się w trzecim wierzchołku.</p>
          <h3>Trójkąty – ze względu na boki</h3>
          <ul>
            <li><b>Różnoboczny</b> – każdy bok ma inną długość.</li>
            <li><b>Równoramienny</b> – ma dwa boki równej długości. To <b>ramiona</b>, a trzeci bok to <b>podstawa</b>.</li>
            <li><b>Równoboczny</b> – wszystkie 3 boki są równe. To szczególny trójkąt równoramienny.</li>
          </ul>
          <p>Na rysunkach równe boki zaznacza się takimi samymi kreskami.</p>
          <h3>Czworokąty</h3>
          <table>
            <tr><th>Czworokąt</th><th>Co go wyróżnia</th></tr>
            <tr><td>kwadrat</td><td>4 równe boki i 4 kąty proste</td></tr>
            <tr><td>prostokąt</td><td>4 kąty proste, przeciwległe boki równe</td></tr>
            <tr><td>romb</td><td>4 równe boki (kąty nie muszą być proste)</td></tr>
            <tr><td>równoległobok</td><td>dwie pary boków równoległych; przeciwległe boki są równe</td></tr>
            <tr><td>trapez</td><td>co najmniej jedna para boków równoległych</td></tr>
          </table>
          <ul>
            <li>W trapezie boki równoległe to <b>podstawy</b>, a dwa pozostałe – <b>ramiona</b>.</li>
            <li><b>Trapez równoramienny</b> ma ramiona równej długości.</li>
            <li><b>Trapez prostokątny</b> ma ramię prostopadłe do podstaw – są w nim kąty proste.</li>
          </ul>
          <div class="tip">💡 Kwadrat jest jednocześnie prostokątem i rombem. Prostokąt i romb są równoległobokami.</div>
          <h3>Obwód</h3>
          <ul>
            <li>Trójkąt równoramienny o ramionach 7 cm i podstawie 4 cm: <span class="f">7 + 7 + 4 = 18 cm</span>.</li>
            <li>Trójkąt równoboczny o boku 6 cm: <span class="f">3 · 6 = 18 cm</span>.</li>
            <li>Romb o boku 5 cm: <span class="f">4 · 5 = 20 cm</span>.</li>
            <li>Równoległobok o bokach 8 cm i 5 cm: <span class="f">2 · 8 + 2 · 5 = 26 cm</span>.</li>
          </ul>
        `,
        flashcards: [
          ['Trójkąt ostrokątny', 'Wszystkie 3 kąty ostre'],
          ['Trójkąt prostokątny', 'Jeden kąt prosty'],
          ['Trójkąt rozwartokątny', 'Jeden kąt rozwarty'],
          ['Trójkąt różnoboczny', 'Każdy bok innej długości'],
          ['Trójkąt równoramienny', 'Dwa równe boki (ramiona), trzeci bok to podstawa'],
          ['Trójkąt równoboczny', 'Wszystkie 3 boki równe'],
          ['Romb', '4 boki równej długości'],
          ['Równoległobok', 'Dwie pary boków równoległych; przeciwległe boki równe'],
          ['Trapez', 'Co najmniej jedna para boków równoległych'],
          ['Podstawy i ramiona trapezu', 'Podstawy – boki równoległe; ramiona – dwa pozostałe boki'],
          ['Trapez równoramienny', 'Ramiona równej długości'],
          ['Trapez prostokątny', 'Ramię prostopadłe do podstaw – ma kąty proste'],
          ['Kwadrat a romb i prostokąt', 'Kwadrat jest jednocześnie rombem i prostokątem'],
        ],
        questions: [
          { id: '2j9757', q: 'Trójkąt ma jeden kąt prosty. Jaki to trójkąt?', options: ['prostokątny', 'ostrokątny', 'rozwartokątny', 'równoboczny'], answer: 0, explain: 'Trójkąt z kątem prostym to trójkąt prostokątny.' },
          { id: 'ah280g', q: 'Wszystkie kąty trójkąta są ostre. Jaki to trójkąt?', options: ['ostrokątny', 'prostokątny', 'rozwartokątny'], answer: 0, explain: 'Trzy kąty ostre – trójkąt ostrokątny.' },
          { id: '3fpiv8', q: 'Kąty trójkąta mają 100°, 50° i 30°. Jaki to trójkąt?', options: ['rozwartokątny', 'ostrokątny', 'prostokątny'], answer: 0, explain: 'Kąt 100° jest większy od kąta prostego (90°), czyli rozwarty. Trójkąt jest rozwartokątny.' },
          { id: '37xjoe', q: 'Trójkąt ma boki 5 cm, 5 cm i 3 cm. Jaki to trójkąt?', options: ['równoramienny', 'równoboczny', 'różnoboczny'], answer: 0, explain: 'Dwa boki są równe (5 cm) – to ramiona. Trzeci bok jest inny, więc trójkąt nie jest równoboczny.' },
          { id: 'msadcc', q: 'Trójkąt ma boki 4 cm, 5 cm i 6 cm. Jaki to trójkąt?', options: ['różnoboczny', 'równoramienny', 'równoboczny'], answer: 0, explain: 'Każdy bok ma inną długość – trójkąt różnoboczny.' },
          { id: 'oapx9n', q: 'Trójkąt równoramienny ma ramiona po 7 cm i podstawę 4 cm. Jaki ma obwód?', options: ['18 cm', '11 cm', '15 cm', '21 cm'], answer: 0, explain: 'Dwa ramiona i podstawa: 7 + 7 + 4 = 18 cm.' },
          { id: 'rlwv0w', q: 'Jaki obwód ma trójkąt równoboczny o boku 6 cm?', options: ['18 cm', '12 cm', '36 cm', '6 cm'], answer: 0, explain: 'Trzy równe boki: 3 · 6 = 18 cm.' },
          { id: 'sn2w08', q: 'Trójkąt równoboczny ma obwód 27 cm. Jaką długość ma jego bok?', options: ['9 cm', '7 cm', '13 cm', '24 cm'], answer: 0, explain: 'Trzy równe boki: 27 : 3 = 9 cm.' },
          { id: 'sisc8b', q: 'Trójkąt równoramienny ma obwód 20 cm, a jego podstawa ma 6 cm. Jaką długość ma ramię?', options: ['7 cm', '14 cm', '6 cm', '8 cm'], answer: 0, explain: 'Na dwa ramiona zostaje 20 − 6 = 14 cm, czyli na jedno 14 : 2 = 7 cm.' },
          {
            id: 'sedc8d',
            q: 'Który trójkąt jest rozwartokątny?',
            svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy trójkąty. A – wszystkie kąty ostre. B – kąt prosty w lewym dolnym wierzchołku. C – kąt rozwarty w lewym dolnym wierzchołku.">
      <path d="M20,150 L110,150 L70,40 Z" class="f1 s1 sw"/>
      <path d="M150,150 L240,150 L150,50 Z" class="f3 s3 sw"/>
      <path d="M150,136 L164,136 L164,150" class="ln"/>
      <path d="M270,150 L390,150 L250,95 Z" class="f2 s2 sw"/>
      <text x="65" y="180" class="tx-b" text-anchor="middle">A</text>
      <text x="195" y="180" class="tx-b" text-anchor="middle">B</text>
      <text x="320" y="180" class="tx-b" text-anchor="middle">C</text>
    </svg>`,
            options: ['C', 'A', 'B'],
            answer: 0,
            explain: 'W trójkącie C kąt przy lewym dolnym wierzchołku jest większy od prostego – rozwarty. A jest ostrokątny, B – prostokątny (zaznaczony kąt prosty).',
          },
          { id: '32z540', q: 'Ile par boków równoległych ma równoległobok?', options: ['2', '1', '0', '4'], answer: 0, explain: 'Równoległobok ma dwie pary boków równoległych – stąd jego nazwa.' },
          { id: '346ezw', q: 'Czworokąt ma 4 boki równej długości, ale nie ma kątów prostych. Jak się nazywa?', options: ['romb', 'kwadrat', 'prostokąt'], answer: 0, explain: 'Cztery równe boki ma romb i kwadrat, ale kwadrat ma kąty proste. Bez kątów prostych – romb.' },
          { id: '4l0xup', q: 'Jak nazywamy równoległe boki trapezu?', options: ['podstawami', 'ramionami', 'przekątnymi'], answer: 0, explain: 'Boki równoległe to podstawy trapezu, a dwa pozostałe boki – ramiona.' },
          { id: '303y86', q: 'Równoległobok ma boki 8 cm i 5 cm. Jaki ma obwód?', options: ['26 cm', '13 cm', '40 cm', '21 cm'], answer: 0, explain: 'Przeciwległe boki są równe: 8 + 5 + 8 + 5 = 26 cm.' },
          { id: 'jj1xco', q: 'Jaki obwód ma romb o boku 7 cm?', options: ['28 cm', '14 cm', '49 cm', '21 cm'], answer: 0, explain: 'Romb ma 4 równe boki: 4 · 7 = 28 cm.' },
          { id: 'lsbgfa', q: 'Trapez równoramienny ma podstawy 10 cm i 6 cm, a ramię 4 cm. Jaki ma obwód?', options: ['24 cm', '20 cm', '28 cm', '16 cm'], answer: 0, explain: 'Ramiona są równe: 10 + 6 + 4 + 4 = 24 cm.' },
          {
            id: 'dsikrb',
            q: 'Jak nazywa się czworokąt na rysunku?',
            svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Czworokąt na kratce: górny i dolny bok poziome i równoległe, górny krótszy. Lewy bok pionowy, z kątami prostymi przy obu podstawach. Prawy bok ukośny.">
      <g class="ln-thin"><line x1="20" y1="10" x2="20" y2="190"/><line x1="50" y1="10" x2="50" y2="190"/><line x1="80" y1="10" x2="80" y2="190"/><line x1="110" y1="10" x2="110" y2="190"/><line x1="140" y1="10" x2="140" y2="190"/><line x1="170" y1="10" x2="170" y2="190"/><line x1="200" y1="10" x2="200" y2="190"/><line x1="230" y1="10" x2="230" y2="190"/><line x1="260" y1="10" x2="260" y2="190"/><line x1="290" y1="10" x2="290" y2="190"/><line x1="320" y1="10" x2="320" y2="190"/><line x1="350" y1="10" x2="350" y2="190"/><line x1="380" y1="10" x2="380" y2="190"/><line x1="20" y1="10" x2="380" y2="10"/><line x1="20" y1="40" x2="380" y2="40"/><line x1="20" y1="70" x2="380" y2="70"/><line x1="20" y1="100" x2="380" y2="100"/><line x1="20" y1="130" x2="380" y2="130"/><line x1="20" y1="160" x2="380" y2="160"/><line x1="20" y1="190" x2="380" y2="190"/></g>
      <path d="M80,40 L200,40 L320,160 L80,160 Z" class="f5 s5 sw"/>
      <path d="M80,54 L94,54 L94,40 M80,146 L94,146 L94,160" class="ln"/>
    </svg>`,
            options: ['trapez prostokątny', 'równoległobok', 'romb', 'prostokąt'],
            answer: 0,
            explain: 'Tylko górny i dolny bok są równoległe – to trapez. Lewe ramię jest prostopadłe do podstaw (kąty proste), więc to trapez prostokątny.',
          },
          { id: 'vcbmtk', q: 'Prawda czy fałsz?\nKażdy kwadrat jest rombem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Kwadrat ma 4 równe boki – spełnia warunek rombu.' },
          { id: 'bf13aw', q: 'Prawda czy fałsz?\nKażdy romb jest kwadratem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Romb nie musi mieć kątów prostych – wtedy nie jest kwadratem.' },
          { id: 'f42pva', q: 'Prawda czy fałsz?\nTrójkąt może mieć dwa kąty proste.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Gdyby przy podstawie były dwa kąty proste, oba boki biegłyby prostopadle w górę, równolegle do siebie – nigdy by się nie spotkały.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'katy-trojkata',
        name: 'Kąty w trójkącie i czworokącie, budowanie trójkąta',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 8 (suma miar kątów w trójkącie i w czworokącie), 9 (równość kątów przy podstawie trójkąta równoramiennego), 10 (konstrukcja trójkąta o podanych bokach, możliwość zbudowania trójkąta z odcinków o danych długościach), 11 (własności czworokątów – tu kąty prostokąta, równoległoboku i trapezu prostokątnego); dz. 2 Miary, wym. 3 (mierzenie kątów); dz. 6 Myślenie matematyczne (sprawdzanie wszystkich warunków, uzasadnianie). Ciąg dalszy działów „Proste, odcinki i kąty” oraz „Trójkąty i czworokąty”.' + WYBOR,
        theory: `
          <h3>Suma kątów w trójkącie</h3>
          <p>W <b>każdym</b> trójkącie kąty mają razem <b>180°</b>. Sprawdź: wytnij trójkąt z papieru, oderwij jego trzy rogi i przyłóż je do siebie – złożą się w kąt półpełny (180°).</p>
          <p><b>Brakujący kąt</b>: od 180° odejmij sumę dwóch znanych kątów.</p>
          <ul>
            <li>kąty 50° i 60° → trzeci: <span class="f">180° − (50° + 60°) = 180° − 110° = 70°</span></li>
            <li>kąty 35° i 45° → trzeci: <span class="f">180° − 80° = 100°</span></li>
          </ul>
          <h3>Trójkąty szczególne</h3>
          <table>
            <tr><th>Trójkąt</th><th>Co wiemy o kątach?</th></tr>
            <tr><td>prostokątny</td><td>jeden kąt ma 90°, więc dwa pozostałe mają razem <b>90°</b> (np. 30° i 60°)</td></tr>
            <tr><td>równoboczny</td><td>wszystkie kąty równe: <b>60°</b> każdy (180° : 3)</td></tr>
            <tr><td>równoramienny</td><td><b>kąty przy podstawie są równe</b></td></tr>
          </table>
          <p>Trójkąt równoramienny – przykłady:</p>
          <ul>
            <li>kąt między ramionami 40° → kąty przy podstawie: <span class="f">(180° − 40°) : 2 = 140° : 2 = 70°</span></li>
            <li>kąt przy podstawie 50° → kąt między ramionami: <span class="f">180° − 50° − 50° = 80°</span></li>
          </ul>
          <div class="tip">💡 W trójkącie może być najwyżej <b>jeden</b> kąt prosty albo rozwarty. Dwa takie kąty miałyby już razem co najmniej 180° – na trzeci nic by nie zostało.</div>
          <h3>Suma kątów w czworokącie</h3>
          <p>Przekątna dzieli czworokąt na <b>dwa trójkąty</b>. Dlatego kąty czworokąta mają razem <span class="f">2 · 180° = 360°</span>.</p>
          <ul>
            <li>kąty 80°, 100° i 70° → czwarty: <span class="f">360° − 250° = 110°</span></li>
            <li>prostokąt i kwadrat: 4 · 90° = 360°</li>
            <li><b>równoległobok</b>: kąty naprzeciwko siebie są równe, a dwa kąty przy tym samym boku mają razem 180° (np. 70° i 110°)</li>
            <li><b>trapez prostokątny</b>: dwa kąty proste; dwa pozostałe mają razem 180° (np. 60° i 120°)</li>
          </ul>
          <h3>Czy z tych odcinków zbudujesz trójkąt?</h3>
          <p>Trójkąt da się zbudować tylko wtedy, gdy <b>najdłuższy odcinek jest krótszy od sumy dwóch pozostałych</b>.</p>
          <ul>
            <li>3 cm, 4 cm, 5 cm: 3 + 4 = 7 &gt; 5 → <b>tak</b></li>
            <li>2 cm, 3 cm, 6 cm: 2 + 3 = 5 &lt; 6 → <b>nie</b> (krótkie boki się nie spotkają)</li>
            <li>2 cm, 3 cm, 5 cm: 2 + 3 = 5 – tyle samo co najdłuższy → <b>nie</b> (boki położą się płasko na najdłuższym)</li>
          </ul>
          <h3>Konstrukcja trójkąta o danych bokach (cyrkiel i linijka)</h3>
          <ol>
            <li>Narysuj linijką odcinek AB – jeden z boków.</li>
            <li>Rozstaw cyrkiel na długość drugiego boku, wbij nóżkę w A i narysuj łuk.</li>
            <li>Rozstaw cyrkiel na długość trzeciego boku, wbij nóżkę w B i narysuj łuk.</li>
            <li>Punkt przecięcia łuków to wierzchołek C. Połącz go z A i B.</li>
          </ol>
          <p>Jeśli łuki się nie przecinają – z tych odcinków nie da się zbudować trójkąta.</p>
        `,
        flashcards: [
          ['Suma kątów w trójkącie', '180°'],
          ['Suma kątów w czworokącie', '360° (dwa trójkąty)'],
          ['Brakujący kąt trójkąta', '180° minus suma dwóch znanych kątów'],
          ['Kąty 50° i 60° – trzeci kąt?', '70°'],
          ['Kąty ostre w trójkącie prostokątnym', 'Mają razem 90°'],
          ['Kąty trójkąta równobocznego', 'Każdy ma 60°'],
          ['Trójkąt równoramienny – kąty', 'Kąty przy podstawie są równe'],
          ['Ile kątów rozwartych może mieć trójkąt?', 'Najwyżej jeden'],
          ['Równoległobok – kąty', 'Przeciwległe równe; dwa przy tym samym boku mają razem 180°'],
          ['Kiedy z trzech odcinków zbudujesz trójkąt?', 'Gdy najdłuższy jest krótszy od sumy dwóch pozostałych'],
          ['2 cm, 3 cm, 6 cm – trójkąt?', 'Nie, bo 2 + 3 = 5, a 5 < 6'],
          ['Czym odkładasz długości boków w konstrukcji?', 'Cyrklem – łuki z obu końców odcinka przecinają się w trzecim wierzchołku'],
        ],
        questions: [
          { id: 'p88ocq', q: 'Ile stopni mają razem wszystkie kąty dowolnego trójkąta?', options: ['180°', '360°', '90°', '270°'], answer: 0, explain: 'Suma kątów w każdym trójkącie to 180° – oderwane rogi trójkąta składają się w kąt półpełny.' },
          { id: '8euvvm', q: 'Dwa kąty trójkąta mają 50° i 60°. Ile stopni ma trzeci kąt?', options: ['70°', '80°', '110°', '60°'], answer: 0, explain: '180° − (50° + 60°) = 180° − 110° = 70°. Sprawdzenie: 50° + 60° + 70° = 180°.' },
          { id: 'a97mc6', q: 'Dwa kąty trójkąta mają 35° i 45°. Ile stopni ma trzeci kąt?', options: ['100°', '80°', '90°', '110°'], answer: 0, explain: '35° + 45° = 80°, a 180° − 80° = 100°. Ten trójkąt jest rozwartokątny.' },
          { id: 'vnvwqs', q: 'W trójkącie prostokątnym jeden z kątów ostrych ma 30°. Ile ma drugi kąt ostry?', options: ['60°', '30°', '150°', '70°'], answer: 0, explain: 'Kąty ostre trójkąta prostokątnego mają razem 90°: 90° − 30° = 60°.' },
          { id: '92cxow', q: 'Ile stopni ma każdy kąt trójkąta równobocznego?', options: ['60°', '90°', '45°', '180°'], answer: 0, explain: 'Wszystkie kąty są równe: 180° : 3 = 60°.' },
          { id: 'yvhqvv', q: 'W trójkącie równoramiennym kąt między ramionami ma 40°. Ile stopni ma każdy kąt przy podstawie?', options: ['70°', '140°', '40°', '50°'], answer: 0, explain: 'Kąty przy podstawie są równe: (180° − 40°) : 2 = 140° : 2 = 70°. Sprawdzenie: 40° + 70° + 70° = 180°.' },
          { id: '0cyfhq', q: 'W trójkącie równoramiennym kąt przy podstawie ma 50°. Ile stopni ma kąt między ramionami?', options: ['80°', '50°', '130°', '100°'], answer: 0, explain: 'Oba kąty przy podstawie mają po 50°: 180° − 50° − 50° = 80°.' },
          { id: 'l6mkiy', q: 'Które trzy kąty mogą być kątami jednego trójkąta?', options: ['50°, 60°, 70°', '60°, 60°, 70°', '90°, 90°, 10°', '30°, 40°, 50°'], answer: 0, explain: 'Tylko 50° + 60° + 70° = 180°. Pozostałe sumy: 190°, 190° i 120°.' },
          { id: '3kbngx', q: 'W trójkącie jeden kąt jest prosty. Ile stopni mają razem dwa pozostałe kąty?', options: ['90°', '180°', '45°', '270°'], answer: 0, explain: '180° − 90° = 90°.' },
          {
            id: 'l36emm',
            q: 'Ile stopni ma kąt x w trójkącie z rysunku?',
            svg: `<svg viewBox="0 0 320 200" role="img" aria-label="Trójkąt: kąt przy lewym dolnym wierzchołku 45 stopni, przy prawym dolnym 75 stopni, kąt przy górnym wierzchołku oznaczony literą x">
      <path d="M60,175 L260,175 L218,17 Z" class="f1 s1 sw"/>
      <path d="M95,175 A35,35 0 0 0 85,150" class="ln"/>
      <path d="M232,175 A28,28 0 0 1 253,148" class="ln"/>
      <text x="100" y="166" class="tx">45°</text>
      <text x="226" y="166" class="tx" text-anchor="end">75°</text>
      <text x="216" y="58" class="tx-b" text-anchor="middle">x</text>
    </svg>`,
            options: ['60°', '120°', '75°', '30°'],
            answer: 0,
            explain: '45° + 75° = 120°, więc x = 180° − 120° = 60°.',
          },
          { id: 'ojwe3a', q: 'Ile stopni mają razem wszystkie kąty czworokąta?', options: ['360°', '180°', '400°', '90°'], answer: 0, explain: 'Przekątna dzieli czworokąt na dwa trójkąty: 2 · 180° = 360°.' },
          { id: 'k7p9e8', q: 'Trzy kąty czworokąta mają 80°, 100° i 70°. Ile stopni ma czwarty kąt?', options: ['110°', '100°', '70°', '290°'], answer: 0, explain: '80° + 100° + 70° = 250°, a 360° − 250° = 110°.' },
          { id: 'qr69f7', q: 'Jeden kąt równoległoboku ma 70°. Ile stopni ma kąt leżący przy tym samym boku?', options: ['110°', '70°', '20°', '290°'], answer: 0, explain: 'Dwa kąty przy tym samym boku równoległoboku mają razem 180°: 180° − 70° = 110°.' },
          {
            id: 'vq8zyz',
            q: 'Trapez prostokątny ma kąty jak na rysunku. Ile stopni ma kąt x?',
            svg: `<svg viewBox="0 0 340 200" role="img" aria-label="Trapez prostokątny: dwa kąty proste po lewej stronie, kąt przy prawym górnym wierzchołku ma 120 stopni, kąt przy prawym dolnym wierzchołku oznaczony literą x">
      <path d="M60,170 L300,170 L225,40 L60,40 Z" class="f3 s3 sw"/>
      <path d="M60,154 L76,154 L76,170" class="ln"/>
      <path d="M60,56 L76,56 L76,40" class="ln"/>
      <path d="M205,40 A20,20 0 0 0 235,57" class="ln"/>
      <path d="M270,170 A30,30 0 0 1 285,144" class="ln"/>
      <text x="200" y="82" class="tx">120°</text>
      <text x="262" y="160" class="tx-b" text-anchor="end">x</text>
    </svg>`,
            options: ['60°', '120°', '90°', '30°'],
            answer: 0,
            explain: 'Kąty czworokąta mają razem 360°: 360° − 90° − 90° − 120° = 60°.',
          },
          { id: 'lidy2i', q: 'Z których odcinków można zbudować trójkąt?', options: ['3 cm, 4 cm, 5 cm', '2 cm, 3 cm, 6 cm', '1 cm, 2 cm, 3 cm', '4 cm, 4 cm, 9 cm'], answer: 0, explain: '3 + 4 = 7, a 7 > 5. W pozostałych: 2 + 3 = 5 < 6; 1 + 2 = 3 (tyle samo co najdłuższy); 4 + 4 = 8 < 9.' },
          { id: 'r7jcg6', q: 'Z których odcinków NIE da się zbudować trójkąta?', options: ['2 cm, 4 cm, 7 cm', '5 cm, 5 cm, 5 cm', '3 cm, 5 cm, 7 cm', '4 cm, 6 cm, 9 cm'], answer: 0, explain: '2 + 4 = 6, a najdłuższy odcinek ma 7 cm – krótsze boki się nie spotkają. W pozostałych suma krótszych jest większa od najdłuższego.' },
          { id: 'znq6cc', q: 'Jak najszybciej sprawdzić, czy z trzech odcinków da się zbudować trójkąt?', options: ['najdłuższy odcinek musi być krótszy od sumy dwóch pozostałych', 'wszystkie odcinki muszą być równe', 'suma odcinków musi wynosić 180', 'najkrótszy odcinek musi być dłuższy od sumy dwóch pozostałych'], answer: 0, explain: 'Wystarczy porównać najdłuższy odcinek z sumą dwóch krótszych.' },
          { id: 'j33lez', q: 'Konstruujesz trójkąt o danych bokach. Którym przyrządem odkładasz długości dwóch pozostałych boków od końców narysowanego odcinka?', options: ['cyrklem', 'kątomierzem', 'kalkulatorem', 'gumką'], answer: 0, explain: 'Cyrklem rysujesz łuki o promieniach równych długościom boków. Ich punkt przecięcia to trzeci wierzchołek.' },
          { id: 'qovnx1', q: 'Prawda czy fałsz?\nTrójkąt może mieć dwa kąty rozwarte.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Dwa kąty rozwarte miałyby razem ponad 180° – a wszystkie trzy kąty trójkąta mają razem dokładnie 180°.' },
          { id: 'ta7yrx', q: 'Prawda czy fałsz?\nW każdym trójkącie równoramiennym kąty przy podstawie są równe.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To własność trójkąta równoramiennego: równe ramiona i równe kąty przy podstawie.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'pola-wielokatow',
        name: 'Wysokości i pola trójkątów i czworokątów',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 13 (wysokości w trójkącie, równoległoboku i trapezie), 14 (pole trójkąta, rombu, równoległoboku, trapezu oraz figur, które można z nich zbudować); dz. 2 Miary, wym. 4 i 6 (jednostki pola, zamiana jednostek długości przed obliczeniem); dz. 3 Algebra, wym. 3 (korzystanie z prostych wzorów z literami). Ciąg dalszy działów „Trójkąty i czworokąty” oraz „Jednostki pola i figury złożone”.' + WYBOR,
        theory: `
          <h3>Wysokość</h3>
          <p><b>Wysokość</b> to odcinek poprowadzony z wierzchołka <b>prostopadle</b> do przeciwległego boku (albo do jego przedłużenia). Bok, na który ją opuszczamy, nazywamy <b>podstawą</b>.</p>
          <ul>
            <li>Każdy trójkąt ma <b>3 wysokości</b> – po jednej na każdy bok.</li>
            <li>W trójkącie prostokątnym dwie wysokości to boki tworzące kąt prosty.</li>
            <li>W trójkącie rozwartokątnym dwie wysokości leżą na zewnątrz – opadają na przedłużenia boków.</li>
            <li>W równoległoboku i trapezie wysokość to odległość między bokami równoległymi.</li>
          </ul>
          <div class="tip">💡 Wysokość zawsze tworzy z podstawą kąt prosty. Bok ukośny nie jest wysokością!</div>
          <h3>Wzory na pole</h3>
          <table>
            <tr><th>Figura</th><th>Pole</th></tr>
            <tr><td>równoległobok</td><td><span class="f">P = a · h</span></td></tr>
            <tr><td>romb</td><td><span class="f">P = a · h</span> albo <span class="f">P = e · f : 2</span></td></tr>
            <tr><td>trójkąt</td><td><span class="f">P = a · h : 2</span></td></tr>
            <tr><td>trapez</td><td><span class="f">P = (a + b) · h : 2</span></td></tr>
          </table>
          <p>a – podstawa, h – wysokość opuszczona na tę podstawę; w rombie e i f to przekątne; w trapezie a i b to dwie podstawy (boki równoległe).</p>
          <h3>Skąd te wzory?</h3>
          <ul>
            <li><b>Równoległobok</b>: odetnij trójkąt z jednej strony i doklej z drugiej – powstanie prostokąt a × h.</li>
            <li><b>Trójkąt</b>: dwa jednakowe trójkąty tworzą równoległobok – pole trójkąta to połowa a · h.</li>
            <li><b>Trapez</b>: dwa jednakowe trapezy (jeden odwrócony) tworzą równoległobok o podstawie a + b.</li>
            <li><b>Romb</b> to równoległobok, ale można też liczyć z przekątnych: romb to połowa prostokąta e × f.</li>
          </ul>
          <h3>Przykłady</h3>
          <ul>
            <li>Równoległobok: a = 8 cm, h = 5 cm → <span class="f">P = 8 · 5 = 40 cm²</span></li>
            <li>Trójkąt: a = 10 cm, h = 6 cm → <span class="f">P = 10 · 6 : 2 = 30 cm²</span></li>
            <li>Romb: e = 6 cm, f = 10 cm → <span class="f">P = 6 · 10 : 2 = 30 cm²</span></li>
            <li>Trapez: a = 7 cm, b = 3 cm, h = 4 cm → <span class="f">P = (7 + 3) · 4 : 2 = 20 cm²</span></li>
          </ul>
          <h3>Uwaga na jednostki</h3>
          <p>Przed liczeniem zamień wszystkie długości na <b>te same jednostki</b>. Równoległobok a = 2 m, h = 50 cm: 2 m = 200 cm, P = 200 · 50 = 10 000 cm² = 1 m².</p>
          <h3>Figury złożone</h3>
          <p>Figurę podziel na części, których pola umiesz policzyć, i dodaj te pola. „Domek” z kwadratu i trójkąta: pole kwadratu + pole trójkąta.</p>
        `,
        flashcards: [
          ['Wysokość', 'Odcinek z wierzchołka prostopadły do przeciwległego boku (lub jego przedłużenia)'],
          ['Ile wysokości ma trójkąt?', 'Trzy – po jednej na każdy bok'],
          ['Pole równoległoboku', 'P = a · h'],
          ['Pole trójkąta', 'P = a · h : 2 (połowa równoległoboku)'],
          ['Pole rombu z przekątnych', 'P = e · f : 2'],
          ['Pole trapezu', 'P = (a + b) · h : 2'],
          ['Równoległobok a = 8 cm, h = 5 cm', 'P = 40 cm²'],
          ['Trójkąt a = 10 cm, h = 6 cm', 'P = 30 cm²'],
          ['Trapez a = 7 cm, b = 3 cm, h = 4 cm', 'P = 20 cm²'],
          ['Czy bok ukośny równoległoboku to wysokość?', 'Nie – wysokość jest prostopadła do podstawy'],
          ['a = 2 m, h = 50 cm – co najpierw?', 'Zamień na te same jednostki: 200 cm i 50 cm'],
        ],
        questions: [
          { id: '8xiij1', q: 'Wysokość trójkąta to odcinek…', options: ['poprowadzony z wierzchołka prostopadle do prostej zawierającej przeciwległy bok', 'łączący wierzchołek ze środkiem przeciwległego boku', 'równy najdłuższemu bokowi', 'łączący środki dwóch boków'], answer: 0, explain: 'Wysokość zawsze tworzy kąt prosty z podstawą (albo z jej przedłużeniem).' },
          { id: 'fp0gqv', q: 'Ile wysokości ma każdy trójkąt?', options: ['3', '1', '2', '6'], answer: 0, explain: 'Z każdego z trzech wierzchołków można poprowadzić wysokość na przeciwległy bok.' },
          { id: 'pxzrt4', q: 'Które boki trójkąta prostokątnego są jednocześnie jego wysokościami?', options: ['dwa boki tworzące kąt prosty', 'najdłuższy bok i jeden krótszy', 'żaden bok'], noShuffle: true, answer: 0, explain: 'Boki przy kącie prostym są do siebie prostopadłe, więc każdy z nich jest wysokością opuszczoną na drugi.' },
          { id: 'mv1zr1', q: 'Równoległobok ma podstawę 8 cm i wysokość 5 cm. Jakie ma pole?', options: ['40 cm²', '26 cm²', '20 cm²', '13 cm²'], answer: 0, explain: 'P = a · h = 8 · 5 = 40 cm².' },
          { id: 'jl40ej', q: 'Trójkąt ma podstawę 10 cm i wysokość 6 cm. Jakie ma pole?', options: ['30 cm²', '60 cm²', '16 cm²', '8 cm²'], answer: 0, explain: 'P = a · h : 2 = 10 · 6 : 2 = 30 cm². 60 cm² to pole równoległoboku – trójkąt to jego połowa.' },
          { id: 'nyn646', q: 'Boki tworzące kąt prosty w trójkącie prostokątnym mają 6 cm i 8 cm. Jakie pole ma ten trójkąt?', options: ['24 cm²', '48 cm²', '14 cm²', '10 cm²'], answer: 0, explain: 'Jeden z tych boków to podstawa, drugi – wysokość: P = 6 · 8 : 2 = 24 cm².' },
          { id: 'flz83a', q: 'Przekątne rombu mają 6 cm i 10 cm. Jakie pole ma romb?', options: ['30 cm²', '60 cm²', '16 cm²', '15 cm²'], answer: 0, explain: 'P = e · f : 2 = 6 · 10 : 2 = 30 cm².' },
          { id: 'n9lkny', q: 'Romb ma bok 5 cm i wysokość 4 cm. Jakie ma pole?', options: ['20 cm²', '10 cm²', '25 cm²', '9 cm²'], answer: 0, explain: 'Romb to równoległobok: P = a · h = 5 · 4 = 20 cm².' },
          { id: 'z1h80u', q: 'Trapez ma podstawy 7 cm i 3 cm oraz wysokość 4 cm. Jakie ma pole?', options: ['20 cm²', '40 cm²', '84 cm²', '14 cm²'], answer: 0, explain: 'P = (a + b) · h : 2 = (7 + 3) · 4 : 2 = 10 · 4 : 2 = 20 cm².' },
          { id: 'qu2j5h', q: 'Trapez ma podstawy 10 dm i 6 dm oraz wysokość 5 dm. Jakie ma pole?', options: ['40 dm²', '80 dm²', '300 dm²', '21 dm²'], answer: 0, explain: 'P = (10 + 6) · 5 : 2 = 16 · 5 : 2 = 80 : 2 = 40 dm².' },
          {
            id: 'scnp1q',
            q: 'Oblicz pole równoległoboku z rysunku.',
            svg: `<svg viewBox="0 0 360 180" role="img" aria-label="Równoległobok o podstawie 9 cm i boku ukośnym 5 cm. Przerywana wysokość opuszczona na podstawę ma 4 cm.">
      <path d="M40,140 L256,140 L328,44 L112,44 Z" class="f1 s1 sw"/>
      <line x1="112" y1="44" x2="112" y2="140" class="ln dash"/>
      <path d="M112,128 L124,128 L124,140" class="ln"/>
      <text x="148" y="166" class="tx" text-anchor="middle">9 cm</text>
      <text x="66" y="92" class="tx" text-anchor="end">5 cm</text>
      <text x="120" y="98" class="tx">4 cm</text>
    </svg>`,
            options: ['36 cm²', '45 cm²', '28 cm²', '18 cm²'],
            answer: 0,
            explain: 'Mnożysz podstawę przez wysokość (przerywany odcinek), a nie przez bok ukośny: P = 9 · 4 = 36 cm².',
          },
          {
            id: '54qc57',
            q: 'Oblicz pole trójkąta z rysunku.',
            svg: `<svg viewBox="0 0 340 190" role="img" aria-label="Trójkąt o podstawie 8 cm. Przerywana wysokość opuszczona na podstawę ma 5 cm.">
      <path d="M50,160 L250,160 L170,35 Z" class="f3 s3 sw"/>
      <line x1="170" y1="35" x2="170" y2="160" class="ln dash"/>
      <path d="M170,148 L182,148 L182,160" class="ln"/>
      <text x="150" y="184" class="tx" text-anchor="middle">8 cm</text>
      <text x="178" y="112" class="tx">5 cm</text>
    </svg>`,
            options: ['20 cm²', '40 cm²', '13 cm²', '26 cm²'],
            answer: 0,
            explain: 'P = a · h : 2 = 8 · 5 : 2 = 20 cm².',
          },
          {
            id: 'zdbaug',
            q: 'Oblicz pole „domku” złożonego z prostokąta i trójkąta.',
            svg: `<svg viewBox="0 0 340 250" role="img" aria-label="Domek: prostokąt o bokach 6 cm i 4 cm, na nim trójkąt o podstawie 6 cm i wysokości 3 cm">
      <rect x="80" y="100" width="180" height="120" class="f4 s4 sw"/>
      <path d="M80,100 L260,100 L170,10 Z" class="f2 s2 sw"/>
      <line x1="170" y1="10" x2="170" y2="100" class="ln dash"/>
      <text x="170" y="242" class="tx" text-anchor="middle">6 cm</text>
      <text x="268" y="165" class="tx">4 cm</text>
      <text x="178" y="64" class="tx">3 cm</text>
    </svg>`,
            options: ['33 cm²', '42 cm²', '27 cm²', '36 cm²'],
            answer: 0,
            explain: 'Prostokąt: 6 · 4 = 24 cm². Trójkąt: 6 · 3 : 2 = 9 cm². Razem 24 + 9 = 33 cm².',
          },
          { id: 'x6p7fe', q: 'Trójkąt ma pole 12 cm² i podstawę 6 cm. Jaką wysokość opuszczono na tę podstawę?', options: ['4 cm', '2 cm', '6 cm', '72 cm'], answer: 0, explain: '6 · h : 2 = 12, więc 6 · h = 24 i h = 4 cm. Sprawdzenie: 6 · 4 : 2 = 12.' },
          { id: 'kz4i5g', q: 'Trójkąt i równoległobok mają taką samą podstawę i taką samą wysokość. Pole trójkąta jest…', options: ['dwa razy mniejsze', 'takie samo', 'dwa razy większe'], noShuffle: true, answer: 0, explain: 'Pole trójkąta to a · h : 2, a równoległoboku a · h – trójkąt to połowa równoległoboku.' },
          { id: 'liihc2', q: 'Równoległobok ma podstawę 2 m i wysokość 50 cm. Jakie ma pole?', options: ['1 m²', '100 m²', '100 cm²', '10 m²'], answer: 0, explain: 'Te same jednostki: 2 m = 200 cm. P = 200 · 50 = 10 000 cm² = 1 m². Albo: 50 cm = 0,5 m, P = 2 · 0,5 = 1 m².' },
          { id: '1wzhde', q: 'Działka ma kształt trapezu o podstawach 30 m i 20 m i wysokości 10 m. Jakie ma pole?', options: ['250 m²', '500 m²', '6000 m²', '60 m²'], answer: 0, explain: 'P = (30 + 20) · 10 : 2 = 50 · 10 : 2 = 250 m².' },
          { id: '3052xh', q: 'Prawda czy fałsz?\nPole równoległoboku obliczasz, mnożąc długości dwóch sąsiednich boków.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Tak liczy się pole prostokąta. W równoległoboku mnożysz podstawę przez wysokość – bok ukośny jest dłuższy od wysokości.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'symetria',
        name: 'Symetria osiowa',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 4 Figury, wym. 12 (figury osiowosymetryczne, wskazywanie i rysowanie osi symetrii; dorysowywanie figury symetrycznej na kratce).' + WYBOR,
        theory: `
          <h3>Figura osiowosymetryczna</h3>
          <p>Figurę można złożyć wzdłuż prostej tak, że obie połowy dokładnie się pokryją? Taka figura jest <b>osiowosymetryczna</b>, a ta prosta to jej <b>oś symetrii</b>.</p>
          <p>Przykłady z życia: motyl, liść, serce, twarz (prawie), litera A.</p>
          <h3>Ile osi symetrii?</h3>
          <table>
            <tr><th>Figura</th><th>Osie symetrii</th></tr>
            <tr><td>kwadrat</td><td>4</td></tr>
            <tr><td>prostokąt (niebędący kwadratem)</td><td>2</td></tr>
            <tr><td>romb (niebędący kwadratem)</td><td>2 – wzdłuż przekątnych</td></tr>
            <tr><td>trójkąt równoboczny</td><td>3</td></tr>
            <tr><td>trójkąt równoramienny (niebędący równobocznym)</td><td>1</td></tr>
            <tr><td>trapez równoramienny</td><td>1</td></tr>
            <tr><td>koło i okrąg</td><td>nieskończenie wiele – każda prosta przez środek</td></tr>
            <tr><td>trójkąt różnoboczny</td><td>0</td></tr>
          </table>
          <div class="tip">💡 Pułapka: przekątna prostokąta, który nie jest kwadratem, <b>nie jest</b> jego osią symetrii. Złóż kartkę po przekątnej – rogi nie spotkają się.</div>
          <h3>Litery</h3>
          <p>W zwykłym druku litera A ma pionową oś symetrii, litera H – dwie osie (pionową i poziomą), a litery N, S i Z nie mają żadnej.</p>
          <h3>Dorysowywanie na kratce</h3>
          <ul>
            <li>Każdy punkt figury przenosisz na drugą stronę osi – <b>prostopadle do osi</b>, na <b>tę samą odległość</b> (tyle samo kratek).</li>
            <li>Punkt 3 kratki na lewo od pionowej osi → jego obraz 3 kratki na prawo, na tej samej wysokości.</li>
            <li>Punkt leżący na osi zostaje na miejscu.</li>
          </ul>
        `,
        flashcards: [
          ['Oś symetrii', 'Prosta, wzdłuż której można złożyć figurę tak, że obie połowy się pokrywają'],
          ['Ile osi symetrii ma kwadrat?', '4'],
          ['Ile osi symetrii ma prostokąt (niebędący kwadratem)?', '2'],
          ['Ile osi symetrii ma trójkąt równoboczny?', '3'],
          ['Ile osi symetrii ma trójkąt równoramienny (niebędący równobocznym)?', '1'],
          ['Ile osi symetrii ma koło?', 'Nieskończenie wiele – każda prosta przez środek'],
          ['Osie symetrii rombu (niebędącego kwadratem)', '2 – wzdłuż przekątnych'],
          ['Czy przekątna prostokąta jest jego osią symetrii?', 'Nie (chyba że prostokąt jest kwadratem)'],
          ['Figura bez osi symetrii', 'Np. trójkąt różnoboczny, litera N'],
          ['Dorysowywanie na kratce', 'Prostopadle do osi, tyle samo kratek po drugiej stronie'],
        ],
        questions: [
          { id: '8kf72a', q: 'Ile osi symetrii ma kwadrat?', options: ['4', '2', '1', '8'], answer: 0, explain: 'Pionowa, pozioma i dwie wzdłuż przekątnych – razem 4.' },
          { id: 'kctcv5', q: 'Ile osi symetrii ma prostokąt, który nie jest kwadratem?', options: ['2', '4', '1', '0'], answer: 0, explain: 'Pionowa i pozioma przez środek. Przekątne nie są osiami symetrii.' },
          { id: 'gebxc9', q: 'Ile osi symetrii ma trójkąt równoboczny?', options: ['3', '1', '0', '6'], answer: 0, explain: 'Każda oś biegnie od wierzchołka do środka przeciwległego boku – są 3.' },
          { id: 'a7sojm', q: 'Ile osi symetrii ma trójkąt równoramienny, który nie jest równoboczny?', options: ['1', '2', '3', '0'], answer: 0, explain: 'Jedna oś – od wierzchołka między ramionami do środka podstawy.' },
          { id: 'g5i8va', q: 'Ile osi symetrii ma koło?', options: ['nieskończenie wiele', '1', '2', '4'], answer: 0, explain: 'Każda prosta przechodząca przez środek koła dzieli je na dwie jednakowe połowy.' },
          { id: '0d2ztl', q: 'Ile osi symetrii ma romb, który nie jest kwadratem?', options: ['2', '4', '1', '0'], answer: 0, explain: 'Osiami symetrii rombu są proste, na których leżą jego przekątne.' },
          { id: 'a1nf9r', q: 'Ile osi symetrii ma trapez równoramienny?', options: ['1', '2', '0', '4'], answer: 0, explain: 'Jedna pionowa oś przez środki obu podstaw.' },
          { id: 'g6ykw1', q: 'Która figura nie ma osi symetrii?', options: ['trójkąt różnoboczny', 'kwadrat', 'koło', 'trójkąt równoramienny'], answer: 0, explain: 'Trójkąt różnoboczny ma każdy bok inny – nie da się go złożyć na dwie jednakowe połowy.' },
          { id: 'hk2rdg', q: 'Która wielka litera (w zwykłym druku) ma pionową oś symetrii?', options: ['A', 'N', 'S', 'Z'], answer: 0, explain: 'Litera A jest taka sama po lewej i po prawej stronie pionowej osi. N, S i Z nie mają osi symetrii.' },
          { id: 'dxroqo', q: 'Ile osi symetrii ma wielka litera H (w zwykłym druku)?', options: ['2', '1', '0', '4'], answer: 0, explain: 'Pionowa i pozioma – H wygląda tak samo po złożeniu wzdłuż każdej z nich.' },
          { id: '497wqn', q: 'Pionowa oś symetrii przechodzi przez kratkę. Punkt A leży 3 kratki na lewo od niej. Gdzie leży punkt do niego symetryczny?', options: ['3 kratki na prawo od osi, na tej samej wysokości', '6 kratek na prawo od osi', 'na osi', '3 kratki nad punktem A'], answer: 0, explain: 'Obraz punktu leży po drugiej stronie osi, w tej samej odległości: 3 kratki na prawo.' },
          {
            id: '1a0m3f',
            q: 'Ile kratek będzie zamalowanych, gdy dorysujesz figurę symetryczną do zamalowanej względem osi?',
            svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kratka z pionową osią przerywaną pośrodku. Po lewej stronie osi zamalowano 5 kratek: 3 kratki w rzędzie przy osi i 2 kratki nad nimi, też przy osi.">
      <g class="ln-thin"><line x1="20" y1="10" x2="20" y2="190"/><line x1="50" y1="10" x2="50" y2="190"/><line x1="80" y1="10" x2="80" y2="190"/><line x1="110" y1="10" x2="110" y2="190"/><line x1="140" y1="10" x2="140" y2="190"/><line x1="170" y1="10" x2="170" y2="190"/><line x1="200" y1="10" x2="200" y2="190"/><line x1="230" y1="10" x2="230" y2="190"/><line x1="260" y1="10" x2="260" y2="190"/><line x1="290" y1="10" x2="290" y2="190"/><line x1="320" y1="10" x2="320" y2="190"/><line x1="350" y1="10" x2="350" y2="190"/><line x1="380" y1="10" x2="380" y2="190"/><line x1="20" y1="10" x2="380" y2="10"/><line x1="20" y1="40" x2="380" y2="40"/><line x1="20" y1="70" x2="380" y2="70"/><line x1="20" y1="100" x2="380" y2="100"/><line x1="20" y1="130" x2="380" y2="130"/><line x1="20" y1="160" x2="380" y2="160"/><line x1="20" y1="190" x2="380" y2="190"/></g>
      <rect x="110" y="100" width="90" height="30" class="f1 s1"/>
      <rect x="140" y="70" width="60" height="30" class="f1 s1"/>
      <line x1="200" y1="0" x2="200" y2="200" class="ln s2 sw dash"/>
    </svg>`,
            options: ['10', '5', '8', '12'],
            answer: 0,
            explain: 'Zamalowanych jest 5 kratek. Po drugiej stronie osi pojawi się tyle samo: 5 + 5 = 10.',
          },
          {
            id: '562a8e',
            q: 'Prawda czy fałsz?\nPrzerywana linia na rysunku jest osią symetrii prostokąta.',
            svg: `<svg viewBox="0 0 340 170" role="img" aria-label="Prostokąt dłuższy niż wyższy. Przerywana linia biegnie po przekątnej, z lewego dolnego do prawego górnego rogu.">
      <rect x="60" y="30" width="220" height="110" class="f4 s4 sw"/>
      <line x1="60" y1="140" x2="280" y2="30" class="ln s2 sw dash"/>
    </svg>`,
            options: ['Prawda', 'Fałsz'],
            noShuffle: true,
            answer: 1,
            explain: 'To przekątna. Jeśli złożysz prostokąt (niebędący kwadratem) po przekątnej, rogi nie spotkają się – połowy się nie pokryją.',
          },
          { id: 'rib7zz', q: 'Prawda czy fałsz?\nKażda prosta przechodząca przez środek koła jest jego osią symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Koło złożone wzdłuż dowolnej średnicy daje dwie jednakowe połówki.' },
          { id: 'meqncu', q: 'Prawda czy fałsz?\nPunkt leżący na osi symetrii po odbiciu zostaje w tym samym miejscu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Jego odległość od osi to 0 kratek, więc obraz to ten sam punkt.' },
          { id: 'iec2j4', q: 'Prawda czy fałsz?\nRównoległobok, który nie jest ani prostokątem, ani rombem, ma oś symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Taki „przekrzywiony” równoległobok nie ma żadnej osi symetrii – żadne złożenie nie da dwóch pokrywających się połówek.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'rownania',
        name: 'Wyrażenia z literą i proste równania',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 3 Algebra, wym. 1 (opisywanie wielkości za pomocą wyrażeń algebraicznych w kontekście praktycznym), 2 (wartość prostego wyrażenia), 3 (proste wzory z literami), 4 (układanie równań na podstawie treści zadania), 5 (proste równania pierwszego stopnia z jedną niewiadomą występującą po jednej stronie równania – tu tylko z liczbami naturalnymi, rozwiązywane działaniem odwrotnym); dz. 6 Myślenie matematyczne (sprawdzanie rozwiązania).' + WYBOR,
        theory: `
          <h3>Litera zamiast liczby</h3>
          <p>Gdy nie znamy liczby albo może ona być różna, zapisujemy ją <b>literą</b>, np. x, a, n. Taki zapis z literami i znakami działań to <b>wyrażenie algebraiczne</b>.</p>
          <table>
            <tr><th>Słowami</th><th>Wyrażenie</th></tr>
            <tr><td>liczba o 5 większa od x</td><td>x + 5</td></tr>
            <tr><td>liczba o 5 mniejsza od x</td><td>x − 5</td></tr>
            <tr><td>liczba 3 razy większa od n</td><td>3 · n</td></tr>
            <tr><td>liczba 2 razy mniejsza od a</td><td>a : 2</td></tr>
            <tr><td>Ania ma x lat, brat jest o 3 lata starszy</td><td>wiek brata: x + 3</td></tr>
            <tr><td>zeszyt kosztuje z zł, kupuję 4 zeszyty</td><td>4 · z zł</td></tr>
          </table>
          <h3>Wartość wyrażenia</h3>
          <p>Podstawiasz liczbę w miejsce litery i liczysz (pamiętaj o kolejności działań). Dla a = 4: <span class="f">2 · a + 3 = 2 · 4 + 3 = 8 + 3 = 11</span>.</p>
          <h3>Wzory</h3>
          <p>Wzór to wyrażenie, które mówi, jak coś obliczyć. Obwód kwadratu o boku a: <span class="f">Ob = 4 · a</span>. Dla a = 6 cm: Ob = 4 · 6 = 24 cm.</p>
          <h3>Równanie</h3>
          <p><b>Równanie</b> to równość, w której jest <b>niewiadoma</b> (litera), np. <span class="f">x + 7 = 15</span>. <b>Rozwiązanie</b> równania to liczba, która wstawiona za x daje prawdziwą równość. Tu x = 8, bo 8 + 7 = 15.</p>
          <p>Równanie jest jak <b>waga w równowadze</b>: po obu stronach jest tyle samo.</p>
          <h3>Jak rozwiązać? Działanie odwrotne</h3>
          <table>
            <tr><th>Równanie</th><th>Myślę</th><th>Rozwiązanie</th></tr>
            <tr><td>x + 7 = 15</td><td>15 − 7</td><td>x = 8</td></tr>
            <tr><td>x − 6 = 9</td><td>9 + 6</td><td>x = 15</td></tr>
            <tr><td>4 · x = 28</td><td>28 : 4</td><td>x = 7</td></tr>
            <tr><td>x : 3 = 5</td><td>5 · 3</td><td>x = 15</td></tr>
            <tr><td>20 − x = 12</td><td>20 − 12 (ile odjąć od 20, żeby zostało 12?)</td><td>x = 8</td></tr>
          </table>
          <div class="tip">💡 Zawsze <b>sprawdź</b>: wstaw wynik do równania. 4 · 7 = 28 – zgadza się!</div>
          <h3>Zadanie tekstowe → równanie</h3>
          <ol>
            <li>Oznacz niewiadomą literą: „x – cena jednego długopisu”.</li>
            <li>Ułóż równanie z treści: 3 długopisy kosztowały 12 zł → <span class="f">3 · x = 12</span>.</li>
            <li>Rozwiąż: x = 12 : 3 = 4.</li>
            <li>Sprawdź (3 · 4 = 12) i napisz odpowiedź: długopis kosztuje 4 zł.</li>
          </ol>
        `,
        flashcards: [
          ['Wyrażenie algebraiczne', 'Zapis z literami, liczbami i znakami działań, np. x + 5, 3 · n'],
          ['Liczba o 5 większa od x', 'x + 5'],
          ['Liczba 3 razy większa od n', '3 · n'],
          ['Wartość wyrażenia 2 · a + 3 dla a = 4', '2 · 4 + 3 = 11'],
          ['Wzór na obwód kwadratu', 'Ob = 4 · a'],
          ['Równanie', 'Równość, w której jest niewiadoma, np. x + 7 = 15'],
          ['Rozwiązanie równania', 'Liczba, która wstawiona za niewiadomą daje prawdziwą równość'],
          ['x + 7 = 15', 'x = 15 − 7 = 8'],
          ['4 · x = 28', 'x = 28 : 4 = 7'],
          ['x : 3 = 5', 'x = 5 · 3 = 15'],
          ['Jak sprawdzić rozwiązanie?', 'Wstawić je do równania i sprawdzić, czy obie strony są równe'],
        ],
        questions: [
          { id: 'x8soq4', q: 'Jak zapisać liczbę o 5 większą od x?', options: ['x + 5', 'x − 5', '5 · x', 'x : 5'], answer: 0, explain: '„O 5 większa” – dodajemy 5: x + 5. (5 · x to liczba 5 razy większa.)' },
          { id: 'kd0ok8', q: 'Jak zapisać liczbę 3 razy większą od n?', options: ['3 · n', 'n + 3', 'n − 3', 'n : 3'], answer: 0, explain: '„3 razy większa” – mnożymy przez 3: 3 · n.' },
          { id: 'ui716j', q: 'Oblicz wartość wyrażenia 2 · a + 3 dla a = 4.', options: ['11', '14', '9', '24'], answer: 0, explain: '2 · 4 + 3 = 8 + 3 = 11. Najpierw mnożenie, potem dodawanie.' },
          { id: '10900t', q: 'Ania ma x lat. Jej brat jest o 3 lata starszy. Ile lat ma brat?', options: ['x + 3', 'x − 3', '3 · x', 'x : 3'], answer: 0, explain: 'Starszy o 3 lata – dodajemy 3: x + 3.' },
          { id: 'rmyk60', q: 'Zeszyt kosztuje z zł. Ile kosztują 4 takie zeszyty?', options: ['4 · z zł', 'z + 4 zł', 'z : 4 zł', 'z − 4 zł'], answer: 0, explain: '4 zeszyty po z zł: 4 · z zł.' },
          { id: '9hbthv', q: 'Rozwiąż równanie: x + 7 = 15', options: ['x = 8', 'x = 22', 'x = 7', 'x = 105'], answer: 0, explain: 'Jaka liczba po dodaniu 7 daje 15? x = 15 − 7 = 8. Sprawdzenie: 8 + 7 = 15.' },
          { id: 'l3dx21', q: 'Rozwiąż równanie: x − 6 = 9', options: ['x = 15', 'x = 3', 'x = 54', 'x = 6'], answer: 0, explain: 'Od jakiej liczby odjąć 6, żeby zostało 9? x = 9 + 6 = 15. Sprawdzenie: 15 − 6 = 9.' },
          { id: '9xp5x2', q: 'Rozwiąż równanie: 4 · x = 28', options: ['x = 7', 'x = 24', 'x = 32', 'x = 112'], answer: 0, explain: 'Jaką liczbę pomnożyć przez 4, żeby dostać 28? x = 28 : 4 = 7. Sprawdzenie: 4 · 7 = 28.' },
          { id: 'mz4ree', q: 'Rozwiąż równanie: x : 3 = 5', options: ['x = 15', 'x = 2', 'x = 8', 'x = 5'], answer: 0, explain: 'Jaką liczbę podzielić przez 3, żeby dostać 5? x = 5 · 3 = 15. Sprawdzenie: 15 : 3 = 5.' },
          { id: 'ntoiwu', q: 'Rozwiąż równanie: 20 − x = 12', options: ['x = 8', 'x = 32', 'x = 12', 'x = 10'], answer: 0, explain: 'Ile trzeba odjąć od 20, żeby zostało 12? x = 20 − 12 = 8. Sprawdzenie: 20 − 8 = 12.' },
          { id: '18akfa', q: 'Która liczba jest rozwiązaniem równania x + 9 = 20?', options: ['11', '29', '9', '20'], answer: 0, explain: '11 + 9 = 20 – równość jest prawdziwa.' },
          { id: 'fhcyx5', q: 'Kasia rozwiązała równanie 5 · x = 35 i otrzymała x = 6. Czy dobrze?', options: ['nie – poprawne rozwiązanie to x = 7', 'tak, x = 6', 'nie – poprawne rozwiązanie to x = 30', 'nie – poprawne rozwiązanie to x = 40'], answer: 0, explain: 'Sprawdzenie: 5 · 6 = 30, a nie 35. Poprawnie: x = 35 : 5 = 7, bo 5 · 7 = 35.' },
          { id: 'dhw95t', q: 'Pomyślałem liczbę, dodałem do niej 12 i otrzymałem 30. Które równanie to opisuje?', options: ['x + 12 = 30', 'x − 12 = 30', '12 · x = 30', 'x + 30 = 12'], answer: 0, explain: 'Liczba x, do której dodano 12, daje 30: x + 12 = 30. Rozwiązanie: x = 18.' },
          { id: 'l4rubc', q: 'Bartek kupił 3 jednakowe długopisy i zapłacił 12 zł. Ile kosztował jeden długopis?', options: ['4 zł', '9 zł', '15 zł', '36 zł'], answer: 0, explain: 'Równanie: 3 · x = 12, więc x = 12 : 3 = 4 zł. Sprawdzenie: 3 · 4 = 12.' },
          { id: 'i8jpto', q: 'Obwód kwadratu obliczamy ze wzoru Ob = 4 · a. Jaki obwód ma kwadrat o boku 6 cm?', options: ['24 cm', '10 cm', '36 cm', '12 cm'], answer: 0, explain: 'Ob = 4 · 6 = 24 cm. (36 cm² to pole tego kwadratu.)' },
          { id: 'f8hvan', q: 'Prawda czy fałsz?\nRównanie to równość, w której występuje niewiadoma.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Np. x + 7 = 15 to równanie – x to niewiadoma.' },
          {
            id: 'g5jbnm',
            q: 'Waga jest w równowadze. Ile kilogramów waży worek x?',
            svg: `<svg viewBox="0 0 340 200" role="img" aria-label="Waga szalkowa w równowadze. Na lewej szalce worek oznaczony x i odważnik 3 kg. Na prawej szalce odważnik 8 kg.">
      <path d="M150,190 L190,190 L176,90 L164,90 Z" class="f4 s4"/>
      <line x1="40" y1="90" x2="300" y2="90" class="ln sw"/>
      <circle cx="170" cy="90" r="6" class="t2"/>
      <line x1="70" y1="90" x2="70" y2="150" class="ln-thin"/>
      <line x1="270" y1="90" x2="270" y2="150" class="ln-thin"/>
      <path d="M20,150 L120,150 L110,162 L30,162 Z" class="f1 s1"/>
      <path d="M220,150 L320,150 L310,162 L230,162 Z" class="f1 s1"/>
      <rect x="30" y="108" width="44" height="42" rx="12" class="f2 s2"/>
      <text x="52" y="136" class="tx-b" text-anchor="middle">x</text>
      <rect x="80" y="122" width="34" height="28" rx="4" class="f5 s5"/>
      <text x="97" y="142" class="tx-s" text-anchor="middle">3 kg</text>
      <rect x="248" y="114" width="44" height="36" rx="4" class="f5 s5"/>
      <text x="270" y="137" class="tx" text-anchor="middle">8 kg</text>
    </svg>`,
            options: ['5 kg', '11 kg', '8 kg', '3 kg'],
            answer: 0,
            explain: 'Po obu stronach jest tyle samo: x + 3 = 8. Więc x = 8 − 3 = 5 kg.',
          },
          { id: 'o2suea', q: 'Oblicz wartość wyrażenia 5 · (b − 2) dla b = 6.', options: ['20', '28', '4', '30'], answer: 0, explain: 'Najpierw nawias: 6 − 2 = 4. Potem 5 · 4 = 20.' },
          { id: 'qqehpv', q: 'Dla jakiej liczby y wyrażenie y + 4 ma wartość 10?', options: ['6', '14', '40', '4'], answer: 0, explain: 'y + 4 = 10, więc y = 10 − 4 = 6.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'procenty',
        name: 'Procenty – pierwsze kroki',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 1 Liczby, wym. 33 (100% jako całość, 50% – połowa, 25% – jedna czwarta, 10% – jedna dziesiąta, 1% – jedna setna), 34 (procent danej wielkości w kontekście praktycznym – tu tylko 1%, 10%, 25%, 50%, 75% i wielokrotności 10%), 35 (porównywanie opłacalności – tu tylko cena po prostym rabacie; moduł ekonomiczno-finansowy). Obliczanie, jakim procentem jednej liczby jest druga, i liczby z jej procentu – klasy VII–VIII.' + WYBOR,
        theory: `
          <h3>Co to jest procent?</h3>
          <p><b>Procent</b> (znak <b>%</b>) to <b>jedna setna</b> całości. Słowo pochodzi od łacińskiego „na sto”.</p>
          <p><span class="f">1% = 1/100</span> – gdy całość podzielisz na 100 równych części, 1% to jedna taka część.</p>
          <h3>Procenty, które trzeba znać</h3>
          <table>
            <tr><th>Procent</th><th>Jaka część całości</th></tr>
            <tr><td>100%</td><td>cała całość</td></tr>
            <tr><td>50%</td><td>połowa – 1/2</td></tr>
            <tr><td>25%</td><td>ćwierć – 1/4</td></tr>
            <tr><td>75%</td><td>trzy czwarte – 3/4</td></tr>
            <tr><td>10%</td><td>jedna dziesiąta – 1/10</td></tr>
            <tr><td>1%</td><td>jedna setna – 1/100</td></tr>
          </table>
          <h3>Jak obliczyć procent liczby?</h3>
          <ul>
            <li><b>50%</b> – dziel przez 2: <span class="f">50% z 30 zł = 15 zł</span></li>
            <li><b>25%</b> – dziel przez 4: <span class="f">25% z 40 = 10</span></li>
            <li><b>10%</b> – dziel przez 10: <span class="f">10% z 70 = 7</span></li>
            <li><b>1%</b> – dziel przez 100: <span class="f">1% z 300 = 3</span></li>
            <li><b>20%</b> to 2 razy po 10%: <span class="f">20% z 50 = 2 · 5 = 10</span></li>
            <li><b>75%</b> to 3 razy po 25%: <span class="f">75% z 80 = 3 · 20 = 60</span></li>
          </ul>
          <div class="tip">💡 Najpierw policz 10% (albo 25%, albo 1%), a potem pomnóż – tak policzysz w pamięci prawie każdy procent.</div>
          <h3>Część i reszta</h3>
          <p>Wszystkie części razem to 100%. Gdy przeczytasz 30% książki, zostanie ci <span class="f">100% − 30% = 70%</span>.</p>
          <h3>Promocje i rabaty</h3>
          <p><b>Rabat</b> (obniżka) to część ceny, której nie płacisz.</p>
          <ul>
            <li>Kurtka za 60 zł, rabat 10%: obniżka = 10% z 60 = 6 zł, nowa cena <span class="f">60 − 6 = 54 zł</span>.</li>
            <li>„−50%” na grę za 24 zł: płacisz połowę, czyli <span class="f">12 zł</span>.</li>
          </ul>
          <p>Porównując oferty, zawsze licz <b>cenę końcową</b> – wyższy rabat nie zawsze oznacza niższą cenę.</p>
        `,
        flashcards: [
          ['1%', 'Jedna setna całości – 1/100'],
          ['100%', 'Cała całość'],
          ['50%', 'Połowa – dziel przez 2'],
          ['25%', 'Ćwierć – dziel przez 4'],
          ['10%', 'Jedna dziesiąta – dziel przez 10'],
          ['75%', 'Trzy czwarte – 3 razy po 25%'],
          ['50% z 30 zł', '15 zł'],
          ['10% z 70', '7'],
          ['20% z 50', '10 (2 razy po 10%, czyli 2 · 5)'],
          ['Przeczytano 30% książki. Ile zostało?', '70% (100% − 30%)'],
          ['Kurtka 60 zł, rabat 10%', 'Obniżka 6 zł, cena 54 zł'],
        ],
        questions: [
          { id: 'da6z38', q: '1% to…', options: ['jedna setna całości', 'jedna dziesiąta całości', 'połowa całości', 'cała całość'], answer: 0, explain: 'Procent to setna część: 1% = 1/100.' },
          { id: 'baxqdt', q: '50% to…', options: ['połowa', 'ćwierć', 'jedna dziesiąta', 'całość'], answer: 0, explain: '50% = 50/100 = 1/2, czyli połowa.' },
          { id: 'pvl20p', q: 'Jaką częścią całości jest 25%?', options: ['1/4', '1/25', '1/2', '1/5'], answer: 0, explain: '25% = 25/100 = 1/4 – ćwierć. Cztery razy po 25% to 100%.' },
          { id: 'vtsvhl', q: 'Ile to jest 50% z 30 zł?', options: ['15 zł', '50 zł', '3 zł', '60 zł'], answer: 0, explain: '50% to połowa: 30 : 2 = 15 zł.' },
          { id: '3m3yqc', q: 'Ile to jest 10% z 70?', options: ['7', '70', '0,7', '10'], answer: 0, explain: '10% to jedna dziesiąta: 70 : 10 = 7.' },
          { id: 'ggbwy7', q: 'Ile to jest 25% z 40?', options: ['10', '25', '20', '4'], answer: 0, explain: '25% to ćwierć: 40 : 4 = 10.' },
          { id: '9mhqzj', q: 'Ile to jest 1% z 300?', options: ['3', '30', '1', '300'], answer: 0, explain: '1% to jedna setna: 300 : 100 = 3.' },
          { id: 'b0bujj', q: 'Ile to jest 20% z 50?', options: ['10', '20', '5', '25'], answer: 0, explain: '10% z 50 = 5. 20% to dwa razy więcej: 2 · 5 = 10.' },
          { id: 'x9lg7o', q: 'Ile to jest 75% z 80?', options: ['60', '75', '20', '40'], answer: 0, explain: '25% z 80 = 80 : 4 = 20. 75% to trzy razy więcej: 3 · 20 = 60.' },
          { id: 'wmij29', q: 'Ile to jest 10% z 5 zł?', options: ['50 gr', '5 gr', '1 zł', '10 gr'], answer: 0, explain: '5 zł = 500 gr. 500 gr : 10 = 50 gr.' },
          { id: 'wzp26n', q: 'Ile to jest 100% z 45?', options: ['45', '100', '4,5', '0,45'], answer: 0, explain: '100% to cała liczba: 45.' },
          { id: '6d9mn1', q: 'Na siatce ze 100 kratek zamalowano 37 kratek. Jaki procent siatki zamalowano?', options: ['37%', '63%', '3,7%', '100%'], answer: 0, explain: 'Każda kratka to 1/100 siatki, czyli 1%. 37 kratek to 37%.' },
          { id: 'fun8rl', q: 'Kasia przeczytała 30% książki. Jaka część książki została jej do przeczytania?', options: ['70%', '30%', '60%', '100%'], answer: 0, explain: 'Cała książka to 100%. 100% − 30% = 70%.' },
          { id: 'g5ykj7', q: 'W klasie jest 20 uczniów. 50% z nich to dziewczynki. Ile jest dziewczynek?', options: ['10', '50', '5', '15'], answer: 0, explain: '50% to połowa: 20 : 2 = 10.' },
          { id: '02vdf3', q: 'Kurtka kosztuje 60 zł. Sklep daje rabat 10%. Ile zapłacisz po obniżce?', options: ['54 zł', '50 zł', '6 zł', '66 zł'], answer: 0, explain: 'Obniżka: 10% z 60 = 6 zł. Cena: 60 − 6 = 54 zł. 6 zł to sama obniżka, nie cena.' },
          { id: 'tsafvj', q: 'Gra kosztowała 24 zł. Teraz jest promocja „−50%”. Ile kosztuje gra?', options: ['12 zł', '48 zł', '6 zł', '23,50 zł'], answer: 0, explain: '−50% oznacza obniżkę o połowę ceny: 24 : 2 = 12 zł.' },
          { id: '1z0scd', q: 'Sklep A: buty za 80 zł z rabatem 25%. Sklep B: te same buty za 70 zł bez rabatu. Gdzie zapłacisz mniej?', options: ['w sklepie A – 60 zł', 'w sklepie B – 70 zł', 'tyle samo w obu'], noShuffle: true, answer: 0, explain: '25% z 80 = 20 zł, więc w sklepie A buty kosztują 80 − 20 = 60 zł. To mniej niż 70 zł.' },
          { id: '234aaq', q: 'Co jest więcej: 10% z 200 czy 50% z 30?', options: ['10% z 200', '50% z 30', 'tyle samo'], noShuffle: true, answer: 0, explain: '10% z 200 = 20, a 50% z 30 = 15. Większy procent nie zawsze daje większy wynik – liczy się też całość.' },
          {
            id: 'j0t4kg',
            q: 'Jaki procent koła zajmuje część żółta?',
            svg: `<svg viewBox="0 0 320 200" role="img" aria-label="Koło podzielone na części: lewa połowa niebieska, prawa górna ćwiartka zielona, prawa dolna ćwiartka żółta">
      <path d="M160,100 L160,20 A80,80 0 0,0 160,180 Z" class="f1 s1 sw"/>
      <path d="M160,100 L160,20 A80,80 0 0,1 240,100 Z" class="f3 s3 sw"/>
      <path d="M160,100 L240,100 A80,80 0 0,1 160,180 Z" class="f4 s4 sw"/>
      <text x="40" y="104" class="tx-s" text-anchor="middle">niebieska</text>
      <text x="276" y="40" class="tx-s" text-anchor="middle">zielona</text>
      <text x="276" y="176" class="tx-s" text-anchor="middle">żółta</text>
    </svg>`,
            options: ['25%', '50%', '75%', '20%'],
            answer: 0,
            explain: 'Niebieska część to połowa (50%), zielona – ćwierć (25%). Żółta też jest ćwiartką: 100% − 50% − 25% = 25%.',
          },
          { id: 'u23vj4', q: 'Prawda czy fałsz?\n25% to więcej niż połowa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Połowa to 50%. 25% to ćwierć – dwa razy mniej niż połowa.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'dane',
        name: 'Tabele i diagramy',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 5 Dane, wym. 1 (odczytywanie danych z tekstu, tabel i diagramów; porównywanie cen, kosztów i wydatków na paragonach i w tabelach – moduł ekonomiczno-finansowy), wym. 2 (proste badanie: zbieranie danych, uporządkowany zapis, wnioski).' + WYBOR,
        theory: `
          <h3>Tabela</h3>
          <p>Tabela porządkuje dane w <b>wiersze</b> (poziomo) i <b>kolumny</b> (pionowo). Na górze są nagłówki – mówią, co jest w kolumnie. Informację znajdziesz na skrzyżowaniu wiersza i kolumny.</p>
          <table>
            <tr><th>Sklepik szkolny</th><th>Cena</th></tr>
            <tr><td>drożdżówka</td><td>3 zł</td></tr>
            <tr><td>sok</td><td>2 zł</td></tr>
            <tr><td>kanapka</td><td>5 zł</td></tr>
          </table>
          <p>Drożdżówka i sok kosztują razem 5 zł – tyle samo co jedna kanapka.</p>
          <h3>Diagram słupkowy</h3>
          <p>Każdy słupek to jedna kategoria (np. jeden owoc), a jego wysokość mówi, ile. Najpierw sprawdź <b>skalę</b> na osi: kreski mogą być co 1, co 2, co 5, co 10…</p>
          <h3>Piktogram</h3>
          <p>To diagram z obrazków. <b>Legenda</b> mówi, ile oznacza jeden obrazek – np. 🌳 = 10 drzew. Wtedy 3 obrazki to 30 drzew, a pół obrazka – 5.</p>
          <h3>Paragon</h3>
          <p>Na paragonie jest: nazwa towaru, liczba sztuk, cena za sztukę, ile kosztowały razem, a na dole <b>suma</b>. Np. „zeszyt 2 × 4 zł = 8 zł”. Warto sprawdzić, czy suma się zgadza.</p>
          <h3>Proste badanie</h3>
          <ol>
            <li>Ułóż pytanie, np. „Jaki jest twój ulubiony owoc?”.</li>
            <li>Zbieraj odpowiedzi – zapisuj je kreskami. Piąta kreska przekreśla cztery poprzednie, więc łatwo liczyć piątkami.</li>
            <li>Policz kreski i wpisz wyniki do tabeli.</li>
            <li>Narysuj diagram słupkowy.</li>
            <li>Napisz wniosek, np. „W naszej klasie najwięcej osób wybrało jabłko”.</li>
          </ol>
          <div class="tip">💡 Wniosek dotyczy tylko tych, których zapytałeś. Ankieta w twojej klasie nie mówi, co lubią wszystkie dzieci w Polsce.</div>
        `,
        flashcards: [
          ['Wiersz i kolumna tabeli', 'Wiersz – poziomo, kolumna – pionowo'],
          ['Co pokazuje wysokość słupka?', 'Ile jest danej rzeczy (wartość dla tej kategorii)'],
          ['Na co patrzysz najpierw na diagramie?', 'Na skalę osi – co ile są kreski'],
          ['Piktogram', 'Diagram z obrazków; legenda mówi, ile oznacza jeden obrazek'],
          ['Pół obrazka w piktogramie', 'Połowa liczby z legendy'],
          ['Paragon', 'Towar, liczba sztuk, cena za sztukę, wartość i suma'],
          ['Zliczanie kreskami', 'Piąta kreska przekreśla cztery – „płotek” = 5'],
          ['Kroki badania', 'pytanie → zbieranie danych → tabela → diagram → wniosek'],
        ],
        questions: [
          { id: 'a1n39z', q: 'Ilu uczniów wybrało pływanie?', svg: SVG_SPORT, options: ['6', '5', '3', '12'], answer: 0, explain: 'Słupek „pływanie” sięga linii 6. Skala na osi rośnie co 2.' },
          { id: 'vh7u5m', q: 'O ilu uczniów więcej wybrało piłkę nożną niż rower?', svg: SVG_SPORT, options: ['o 5', 'o 11', 'o 8', 'o 3'], answer: 0, explain: 'Piłka nożna – 8, rower – 3. „O ile” – odejmujemy: 8 − 3 = 5.' },
          { id: 'dmr7ro', q: 'Każdy uczeń wybrał jeden sport. Ilu uczniów wzięło udział w ankiecie?', svg: SVG_SPORT, options: ['22', '8', '20', '4'], answer: 0, explain: 'Dodajemy wszystkie słupki: 8 + 5 + 6 + 3 = 22.' },
          { id: '88xmdx', q: 'Który wniosek wynika z diagramu?', svg: SVG_SPORT, options: ['Piłkę nożną wybrało najwięcej uczniów.', 'Nikt nie wybrał roweru.', 'Pływanie wybrało 2 razy więcej uczniów niż siatkówkę.'], answer: 0, explain: 'Najwyższy jest słupek piłki nożnej (8). Rower wybrały 3 osoby, a pływanie (6) to nie 2 razy więcej niż siatkówka (5).' },
          {
            id: '4al8ws',
            q: 'Ile puszek zebrała klasa 4b?',
            svg: `<svg viewBox="0 0 360 180" role="img" aria-label="Piktogram: puszki zebrane przez klasy. Jeden obrazek to 10 puszek. Klasa 4a – 3 obrazki, klasa 4b – 4 i pół obrazka, klasa 4c – 2 obrazki.">
      <text x="20" y="42" class="tx-b">4a</text>
      <rect x="70" y="20" width="22" height="30" rx="5" class="f3 s3"/><rect x="102" y="20" width="22" height="30" rx="5" class="f3 s3"/><rect x="134" y="20" width="22" height="30" rx="5" class="f3 s3"/>
      <text x="20" y="87" class="tx-b">4b</text>
      <rect x="70" y="65" width="22" height="30" rx="5" class="f3 s3"/><rect x="102" y="65" width="22" height="30" rx="5" class="f3 s3"/><rect x="134" y="65" width="22" height="30" rx="5" class="f3 s3"/><rect x="166" y="65" width="22" height="30" rx="5" class="f3 s3"/><rect x="198" y="65" width="11" height="30" class="f3 s3"/>
      <text x="20" y="132" class="tx-b">4c</text>
      <rect x="70" y="110" width="22" height="30" rx="5" class="f3 s3"/><rect x="102" y="110" width="22" height="30" rx="5" class="f3 s3"/>
      <line x1="20" y1="152" x2="340" y2="152" class="ln-thin"/>
      <rect x="70" y="158" width="14" height="19" rx="3" class="f3 s3"/>
      <text x="92" y="173" class="tx">= 10 puszek</text>
    </svg>`,
            options: ['45', '4', '40', '50'],
            answer: 0,
            explain: 'Klasa 4b ma 4 całe obrazki (4 · 10 = 40) i pół obrazka (5). Razem 45 puszek.',
          },
          { id: 'd8o0ww', q: 'Ile kosztował jeden długopis?', svg: SVG_PARAGON, options: ['2 zł', '6 zł', '3 zł', '19 zł'], answer: 0, explain: 'W wierszu „długopis” jest 3 × 2 zł: 3 sztuki po 2 zł. 6 zł to cena za wszystkie trzy.' },
          { id: 't6895r', q: 'Klient zapłacił za te zakupy banknotem 20 zł. Ile reszty dostał?', svg: SVG_PARAGON, options: ['1 zł', '11 zł', '9 zł', '0 zł'], answer: 0, explain: 'Suma na paragonie to 19 zł: 20 zł − 19 zł = 1 zł.' },
          { id: 'nf0w6z', q: 'W którym tygodniu Ola wydała najwięcej?', svg: SVG_WYDATKI, options: ['w 2. tygodniu', 'w 4. tygodniu', 'w 1. tygodniu', 'w 3. tygodniu'], answer: 0, explain: 'Największa kwota w tabeli to 12 zł – w 2. tygodniu.' },
          { id: 'gdtp63', q: 'Ola dostaje 15 zł kieszonkowego na tydzień. Ile zaoszczędziła w 3. tygodniu?', svg: SVG_WYDATKI, options: ['10 zł', '5 zł', '20 zł', '15 zł'], answer: 0, explain: 'W 3. tygodniu wydała 5 zł: 15 zł − 5 zł = 10 zł.' },
          { id: '0je21u', q: 'Przy zliczaniu głosów zapisano dwa „płotki” (po 5 kresek) i jeszcze 3 kreski. Ile to głosów?', options: ['13', '11', '5', '23'], answer: 0, explain: 'Dwa płotki to 5 + 5 = 10, do tego 3 kreski: 10 + 3 = 13.' },
          { id: 'u0sff1', q: 'Na diagramie słupkowym wysokość słupka pokazuje…', options: ['ile jest danej rzeczy', 'ile jest wszystkich słupków', 'kolejność alfabetyczną'], answer: 0, explain: 'Im wyższy słupek, tym większa liczba dla tej kategorii.' },
          { id: '9hizx8', q: 'Chcesz sprawdzić, jaki owoc najbardziej lubią uczniowie twojej klasy. Co robisz najpierw?', options: ['zadajesz pytanie i zbierasz odpowiedzi', 'rysujesz diagram', 'piszesz wniosek'], answer: 0, explain: 'Najpierw dane: pytanie i zbieranie odpowiedzi. Diagram i wniosek powstają z zebranych danych.' },
          { id: 's3icq8', q: 'W ankiecie w jednej klasie najwięcej osób wybrało piłkę nożną. Ktoś napisał: „Wszystkie dzieci w Polsce najbardziej lubią piłkę nożną”. Czy to dobry wniosek?', options: ['Nie – zapytano tylko jedną klasę', 'Tak – bo piłka wygrała', 'Tak – bo ankieta była w szkole'], answer: 0, explain: 'Wniosek może dotyczyć tylko tych, których zapytano – tu jednej klasy.' },
          { id: 'gqafns', q: 'Prawda czy fałsz?\nW piktogramie jeden obrazek zawsze oznacza jedną rzecz.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Ile oznacza obrazek, mówi legenda – np. 1 obrazek = 10 puszek.' },
          { id: 'm00cub', q: 'Prawda czy fałsz?\nNa osi diagramu kolejne kreski mogą oznaczać np. co 2 albo co 5.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Skala może być różna – dlatego zawsze najpierw ją sprawdzamy.' },
        ],
      },

      // ------------------------------------------------------------------
      {
        id: 'srednia',
        name: 'Średnia arytmetyczna',
        extra: true,
        basis: 'Dz.U. 2026 poz. 378, matematyka kl. IV–VI: dz. 5 Dane, wym. 3 (średnia arytmetyczna przy opisie zjawisk z życia codziennego), wym. 4 (dane o wydatkach, ich średnia wartość, wnioski o opłacalności różnych rozwiązań – moduł ekonomiczno-finansowy), wym. 1 (odczytywanie danych z diagramu); dz. 6 Myślenie matematyczne (ocena sensowności wyniku, krytyczna interpretacja danych). W obliczeniach tylko liczby naturalne i proste ułamki dziesiętne (dzielenie przez liczbę naturalną). Ciąg dalszy działu „Tabele i diagramy”.' + WYBOR,
        theory: `
          <h3>Co to jest średnia?</h3>
          <p><b>Średnia arytmetyczna</b> mówi, ile wypadłoby „na każdego”, gdyby wszystko podzielić <b>po równo</b>.</p>
          <p><span class="f">średnia = suma liczb : ile jest liczb</span></p>
          <ul>
            <li>oceny 4, 5, 3, 4: <span class="f">(4 + 5 + 3 + 4) : 4 = 16 : 4 = 4</span></li>
            <li>liczby 2, 6, 7: <span class="f">15 : 3 = 5</span></li>
          </ul>
          <p>Wyobraź sobie słupki z klocków o wysokości 2, 6 i 7. Przekładasz klocki z wyższych na niższe, aż wszystkie będą równe – każdy będzie miał 5 klocków.</p>
          <h3>Ważne własności</h3>
          <ul>
            <li>Średnia leży <b>między najmniejszą a największą</b> liczbą (gdy wszystkie liczby są równe – jest im równa).</li>
            <li>Średnia <b>nie musi być jedną z liczb</b> – średnia z 10 i 15 to 12,5.</li>
            <li>Gdy znasz średnią i to, ile jest liczb, znasz też ich <b>sumę</b>: <span class="f">suma = średnia · ile liczb</span>.</li>
          </ul>
          <h3>Brakująca liczba</h3>
          <p>Średnia trzech liczb to 6, a dwie z nich to 5 i 8. Suma wszystkich: 6 · 3 = 18. Trzecia liczba: 18 − 5 − 8 = <b>5</b>.</p>
          <h3>Średnia w życiu i w portfelu</h3>
          <ul>
            <li>Wydatki w tygodniu: 12 zł, 8 zł, 10 zł, 6 zł, 14 zł → <span class="f">50 zł : 5 = 10 zł</span> średnio dziennie.</li>
            <li>Bilet miesięczny za 60 zł i 30 przejazdów → średnio <span class="f">60 zł : 30 = 2 zł</span> za przejazd.</li>
            <li>Co się bardziej opłaca? Bilet jednorazowy kosztuje 4 zł, miesięczny 60 zł. Przy 20 przejazdach: 20 · 4 zł = 80 zł, a miesięczny – 60 zł. Miesięczny jest tańszy o 20 zł.</li>
            <li>3 zeszyty po 4 zł i 1 zeszyt za 8 zł → średnia cena: <span class="f">(12 + 8) : 4 = 5 zł</span>.</li>
          </ul>
          <h3>Uwaga na wyjątki</h3>
          <p>Kieszonkowe pięciorga dzieci: 10 zł, 10 zł, 10 zł, 10 zł i 60 zł. Średnia to 100 : 5 = <b>20 zł</b>, choć aż czworo dzieci dostaje 10 zł. Jedna bardzo duża (albo bardzo mała) liczba mocno zmienia średnią – patrz też na same dane.</p>
          <div class="tip">💡 Sprawdzaj wynik: średnia mniejsza od najmniejszej liczby albo większa od największej to na pewno błąd.</div>
        `,
        flashcards: [
          ['Średnia arytmetyczna', 'Suma liczb podzielona przez to, ile jest liczb'],
          ['Średnia z 4, 5, 3, 4', '16 : 4 = 4'],
          ['Średnia z 2, 6, 7', '15 : 3 = 5'],
          ['Średnia z 10 i 15', '12,5 – nie musi być jedną z liczb'],
          ['Gdzie leży średnia?', 'Między najmniejszą a największą liczbą'],
          ['Suma, gdy znasz średnią', 'suma = średnia · ile liczb'],
          ['Średnia 3 liczb to 6; dwie to 5 i 8. Trzecia?', '18 − 5 − 8 = 5'],
          ['Bilet za 60 zł, 30 przejazdów', 'Średnio 2 zł za przejazd'],
          ['Kieszonkowe 10, 10, 10, 10, 60 zł – średnia?', '20 zł – jedna duża liczba podnosi średnią'],
          ['Średnia „po równo”', 'Tyle wypadłoby na każdego przy równym podziale'],
          ['Jak sprawdzić średnią?', 'Musi być między najmniejszą a największą liczbą'],
        ],
        questions: [
          { id: 'eiumvm', q: 'Jak obliczyć średnią arytmetyczną kilku liczb?', options: ['dodać wszystkie liczby i podzielić sumę przez to, ile ich jest', 'od największej liczby odjąć najmniejszą', 'wybrać liczbę, która powtarza się najczęściej', 'pomnożyć wszystkie liczby przez siebie'], answer: 0, explain: 'Średnia = suma liczb : liczba składników.' },
          { id: 'w0a0mr', q: 'Zosia dostała oceny 4, 5, 3 i 4. Jaka jest średnia jej ocen?', options: ['4', '5', '16', '3,5'], answer: 0, explain: '(4 + 5 + 3 + 4) : 4 = 16 : 4 = 4.' },
          { id: 'hn37y6', q: 'Jaka jest średnia arytmetyczna liczb 2, 6 i 7?', options: ['5', '15', '6', '7'], answer: 0, explain: '2 + 6 + 7 = 15, a 15 : 3 = 5. 15 to sama suma – trzeba ją jeszcze podzielić.' },
          { id: 'mxoe5r', q: 'Jaka jest średnia arytmetyczna liczb 10 i 15?', options: ['12,5', '25', '12', '13'], answer: 0, explain: '(10 + 15) : 2 = 25 : 2 = 12,5. Średnia nie musi być liczbą naturalną ani jedną z danych liczb.' },
          { id: 't0ry1o', q: 'Kuba wydawał w kolejne dni tygodnia: 12 zł, 8 zł, 10 zł, 6 zł i 14 zł. Ile wydawał średnio dziennie?', options: ['10 zł', '50 zł', '8 zł', '12 zł'], answer: 0, explain: 'Suma: 12 + 8 + 10 + 6 + 14 = 50 zł. Dni: 5. Średnia: 50 : 5 = 10 zł.' },
          { id: 'a0ah5x', q: 'W poniedziałek było 12°C, we wtorek 15°C, a w środę 18°C. Jaka była średnia temperatura z tych dni?', options: ['15°C', '45°C', '18°C', '12°C'], answer: 0, explain: '(12 + 15 + 18) : 3 = 45 : 3 = 15°C.' },
          { id: '7aeobj', q: 'Czworo dzieci ma 140 cm, 150 cm, 145 cm i 145 cm wzrostu. Jaki jest ich średni wzrost?', options: ['145 cm', '150 cm', '580 cm', '140 cm'], answer: 0, explain: 'Suma: 140 + 150 + 145 + 145 = 580 cm. Średnia: 580 : 4 = 145 cm.' },
          { id: '1b1ruw', q: 'Bartek skoczył w dal 3,2 m, 3,5 m i 3,8 m. Jaka jest średnia długość jego skoku?', options: ['3,5 m', '10,5 m', '3,8 m', '3,2 m'], answer: 0, explain: '3,2 + 3,5 + 3,8 = 10,5 m, a 10,5 : 3 = 3,5 m.' },
          { id: 'jnzm6h', q: 'Średnia trzech ocen Kasi to 4. Ile wynosi suma tych ocen?', options: ['12', '4', '7', '3'], answer: 0, explain: 'Suma = średnia · liczba ocen = 4 · 3 = 12.' },
          { id: 'uhpohv', q: 'Średnia trzech liczb to 6. Dwie z nich to 5 i 8. Jaka jest trzecia liczba?', options: ['5', '6', '7', '13'], answer: 0, explain: 'Suma trzech liczb: 6 · 3 = 18. Trzecia: 18 − 5 − 8 = 5. Sprawdzenie: (5 + 8 + 5) : 3 = 6.' },
          { id: 'jdw7pm', q: 'Średnia dwóch liczb to 7. Jedna z nich to 4. Jaka jest druga?', options: ['10', '3', '11', '7'], answer: 0, explain: 'Suma: 7 · 2 = 14. Druga liczba: 14 − 4 = 10. Sprawdzenie: (4 + 10) : 2 = 7.' },
          { id: 'fu7s66', q: 'Ola ma oceny 5, 5 i 4. Jaką ocenę musi dostać, żeby średnia z czterech ocen wyniosła 4,5?', options: ['4', '5', '3', '2'], answer: 0, explain: 'Suma czterech ocen: 4,5 · 4 = 18. Ola ma już 5 + 5 + 4 = 14. Brakuje 18 − 14 = 4.' },
          { id: 'rxtrmw', q: 'Co na pewno jest prawdą o średniej arytmetycznej kilku różnych liczb?', options: ['leży między najmniejszą a największą z nich', 'jest jedną z tych liczb', 'jest większa od największej z nich', 'zawsze jest liczbą naturalną'], answer: 0, explain: 'Średnia „wyrównuje” liczby, więc nie może być mniejsza od najmniejszej ani większa od największej. Nie musi być jedną z nich ani liczbą naturalną.' },
          { id: 'jrnids', q: 'Bilet miesięczny kosztuje 60 zł. Kuba przejechał na nim 30 razy. Ile średnio zapłacił za jeden przejazd?', options: ['2 zł', '30 zł', '90 zł', '4 zł'], answer: 0, explain: '60 zł : 30 = 2 zł za przejazd.' },
          { id: 'c2w0ge', q: 'Bilet jednorazowy kosztuje 4 zł, a miesięczny 60 zł. Jeździsz 20 razy w miesiącu. Co się bardziej opłaca?', options: ['miesięczny – oszczędzasz 20 zł', 'jednorazowe – oszczędzasz 20 zł', 'oba wychodzą tak samo', 'jednorazowe – oszczędzasz 60 zł'], answer: 0, explain: '20 biletów jednorazowych: 20 · 4 zł = 80 zł. Miesięczny: 60 zł. Różnica: 80 − 60 = 20 zł na korzyść miesięcznego.' },
          { id: 'ci53r9', q: 'Kupiłeś 3 zeszyty po 4 zł i 1 zeszyt za 8 zł. Jaka była średnia cena zeszytu?', options: ['5 zł', '6 zł', '4 zł', '20 zł'], answer: 0, explain: 'Razem: 3 · 4 + 8 = 20 zł za 4 zeszyty. Średnio: 20 : 4 = 5 zł. 6 zł wyjdzie, gdy błędnie liczysz średnią z dwóch cen (4 i 8).' },
          { id: 'zphxgx', q: 'Kieszonkowe pięciorga dzieci to: 10 zł, 10 zł, 10 zł, 10 zł i 60 zł. Jaka jest średnia?', options: ['20 zł', '10 zł', '60 zł', '100 zł'], answer: 0, explain: '(10 + 10 + 10 + 10 + 60) : 5 = 100 : 5 = 20 zł. Czworo dzieci dostaje 10 zł – jedna duża kwota mocno podniosła średnią.' },
          {
            id: '1quahv',
            q: 'Diagram pokazuje, ile książek przeczytała Ania w kolejnych miesiącach. Ile książek czytała średnio w miesiącu?',
            svg: `<svg viewBox="0 0 340 210" role="img" aria-label="Diagram słupkowy: wrzesień 2 książki, październik 4 książki, listopad 3 książki, grudzień 3 książki">
      <g class="ln-thin"><line x1="50" y1="170" x2="320" y2="170"/><line x1="50" y1="135" x2="320" y2="135"/><line x1="50" y1="100" x2="320" y2="100"/><line x1="50" y1="65" x2="320" y2="65"/><line x1="50" y1="30" x2="320" y2="30"/></g>
      <line x1="50" y1="20" x2="50" y2="170" class="ln"/>
      <line x1="50" y1="170" x2="320" y2="170" class="ln"/>
      <g class="tx-s" text-anchor="end"><text x="42" y="175">0</text><text x="42" y="140">1</text><text x="42" y="105">2</text><text x="42" y="70">3</text><text x="42" y="35">4</text></g>
      <rect x="70" y="100" width="40" height="70" class="f1 s1"/>
      <rect x="135" y="30" width="40" height="140" class="f1 s1"/>
      <rect x="200" y="65" width="40" height="105" class="f1 s1"/>
      <rect x="265" y="65" width="40" height="105" class="f1 s1"/>
      <g class="tx-s" text-anchor="middle"><text x="90" y="192">wrz</text><text x="155" y="192">paź</text><text x="220" y="192">lis</text><text x="285" y="192">gru</text></g>
    </svg>`,
            options: ['3', '12', '4', '2'],
            answer: 0,
            explain: 'Z diagramu: 2, 4, 3, 3. Suma: 12 książek w 4 miesiące. Średnia: 12 : 4 = 3.',
          },
          { id: '7jciqq', q: 'Prawda czy fałsz?\nŚrednia arytmetyczna liczb 2, 4 i 9 jest równa 5.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '2 + 4 + 9 = 15, a 15 : 3 = 5.' },
          { id: '5e5qx9', q: 'Prawda czy fałsz?\nŚrednia arytmetyczna zawsze jest jedną z liczb, z których ją liczymy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Nie musi: średnia z 10 i 15 to 12,5, a średnia z 2, 6 i 7 to 5.' },
        ],
      },
    ],
  });
})();
