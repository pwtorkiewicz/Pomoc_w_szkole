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

  window.SUBJECTS.push({
    id: 'matematyka',
    name: 'Matematyka',
    icon: '📐',
    color: '#3b82c4',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'liczby',
        name: 'Liczby naturalne',
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
        id: 'dzialania',
        name: 'Działania na liczbach naturalnych',
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
        id: 'miary',
        name: 'Długość, masa, czas i pieniądze',
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
        id: 'ulamki',
        name: 'Ułamki zwykłe – pierwsze kroki',
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
        id: 'dane',
        name: 'Tabele i diagramy',
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
    ],
  });
})();
