/* Matematyka – klasa 8 */
window.SUBJECTS.push({
  id: 'matematyka',
  name: 'Matematyka',
  icon: '📐',
  color: '#3b82c4',
  exam: '<b>11 maja 2027</b>, 125 minut, 30 pkt. 14–15 zadań zamkniętych (wybór wielokrotny, prawda/fałsz, dobieranie – po 1 pkt) i 5–6 otwartych (2–3 pkt, trzeba pokazać tok rozumowania). Bez kalkulatora; potrzebna linijka, rysunki długopisem.',
  topics: [
    {
      id: 'liczby',
      name: 'Liczby i działania',
      basis: 'Informator CKE (matematyka, od r. szk. 2024/2025) – wymagania z klas IV–VIII, m.in. kl. IV–VI: I. Liczby naturalne, II. Działania na liczbach naturalnych, IV. Ułamki zwykłe i dziesiętne; kl. VII–VIII: X. Oś liczbowa. Układ współrzędnych na płaszczyźnie.',
      theory: `
        <h3>Kolejność działań</h3>
        <p>1) nawiasy → 2) potęgi i pierwiastki → 3) mnożenie i dzielenie → 4) dodawanie i odejmowanie. Przykład: <span class="f">2 + 3 · 4 = 14</span></p>
        <div class="tip">💡 Uwaga na minus: <span class="f">−3² = −9</span>, ale <span class="f">(−3)² = 9</span>.</div>
        <h3>Podzielność</h3>
        <table>
          <tr><th>Przez</th><th>Cecha</th></tr>
          <tr><td>2</td><td>ostatnia cyfra parzysta</td></tr>
          <tr><td>3</td><td>suma cyfr podzielna przez 3</td></tr>
          <tr><td>4</td><td>liczba z dwóch ostatnich cyfr podzielna przez 4</td></tr>
          <tr><td>5</td><td>ostatnia cyfra 0 lub 5</td></tr>
          <tr><td>9</td><td>suma cyfr podzielna przez 9</td></tr>
          <tr><td>10</td><td>ostatnia cyfra 0</td></tr>
        </table>
        <p><b>NWD</b> – największy wspólny dzielnik, <b>NWW</b> – najmniejsza wspólna wielokrotność. NWD(12, 18) = 6, NWW(4, 6) = 12.</p>
        <h3>Liczby rzymskie</h3>
        <p>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Mniejsza przed większą – odejmujemy: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</p>
        <h3>Liczby całkowite, liczby pierwsze, dzielenie z resztą</h3>
        <ul>
          <li><b>Wartość bezwzględna</b> to odległość liczby od zera na osi: |−7| = 7, |3| = 3.</li>
          <li><b>Liczba pierwsza</b> ma dokładnie dwa dzielniki: 1 i samą siebie (2, 3, 5, 7, 11, 13, 17, 19, 23, 29…). Liczba 1 nie jest ani pierwsza, ani złożona.</li>
          <li><b>Dzielenie z resztą</b>: a = b · q + r, gdzie 0 ≤ r &lt; b. Np. 47 = 6 · 7 + 5.</li>
          <li><b>Oś liczbowa</b>: zbiór liczb x &gt; 1,5 zaznaczamy kółkiem niezamalowanym w 1,5 i strzałką w prawo.</li>
        </ul>
        <h3>Układ współrzędnych</h3>
        <p>Środek odcinka AB, gdzie A = (x₁, y₁), B = (x₂, y₂): <span class="f">S = ((x₁ + x₂)/2, (y₁ + y₂)/2)</span></p>
        <p>Długość odcinka w układzie współrzędnych liczymy z twierdzenia Pitagorasa: dla A = (1, 1) i B = (4, 5) różnice współrzędnych to 3 i 4, więc |AB| = √(3² + 4²) = 5.</p>
      `,
      flashcards: [
        ['Cecha podzielności przez 3', 'Suma cyfr podzielna przez 3'],
        ['Cecha podzielności przez 4', 'Dwie ostatnie cyfry tworzą liczbę podzielną przez 4'],
        ['Cecha podzielności przez 9', 'Suma cyfr podzielna przez 9'],
        ['XL', '40'],
        ['XC', '90'],
        ['CM', '900'],
        ['Liczba odwrotna do a', '1/a (iloczyn liczb odwrotnych = 1)'],
        ['Liczba przeciwna do a', '−a (suma liczb przeciwnych = 0)'],
        ['Środek odcinka', 'S = ((x₁ + x₂)/2, (y₁ + y₂)/2)'],
        ['Liczba pierwsza', 'Ma dokładnie dwa dzielniki: 1 i samą siebie'],
        ['|−7|', '7'],
      ],
      questions: [
        { id: 'va5avn', q: 'Ile wynosi 2 + 3 · 4?', options: ['20', '14', '24', '9'], answer: 1, explain: 'Najpierw mnożenie: 3 · 4 = 12, potem 2 + 12 = 14.' },
        { id: 'uk030j', q: 'Ile wynosi −3²?', options: ['9', '−9', '6', '−6'], answer: 1, explain: 'Potęgujemy tylko 3, a minus zostaje: −(3²) = −9.' },
        { id: '4eo54k', q: 'Ile wynosi NWD(12, 18)?', options: ['2', '3', '6', '36'], answer: 2 },
        { id: '486hwt', q: 'Ile wynosi NWW(4, 6)?', options: ['2', '12', '24', '10'], answer: 1 },
        { id: 'exycn1', q: 'Która liczba jest podzielna przez 9?', options: ['576', '578', '584', '590'], answer: 0, explain: '5 + 7 + 6 = 18, a 18 dzieli się przez 9.' },
        { id: 'gbolsk', q: 'Liczba MCMXCIX zapisana cyframi arabskimi to…', options: ['1999', '2001', '1909', '1499'], answer: 0, explain: 'M = 1000, CM = 900, XC = 90, IX = 9 → 1999.' },
        { id: 'l38y7z', q: 'Liczba odwrotna do 2/5 to…', options: ['−2/5', '5/2', '−5/2', '0,4'], answer: 1 },
        { id: 'iy6ob1', q: 'Środek odcinka o końcach A = (2, 4) i B = (6, −2) to punkt…', options: ['(4, 1)', '(4, 3)', '(8, 2)', '(2, 1)'], answer: 0, explain: 'x = (2 + 6)/2 = 4, y = (4 + (−2))/2 = 1.' },
        { id: 'oa5ja8', q: 'Ułamek 1/3 w postaci dziesiętnej to…', options: ['0,3', '0,33', '0,(3)', '3,1'], answer: 2, explain: 'To ułamek okresowy: 0,333… = 0,(3).' },
        { id: '29eu50', q: 'Ile wynosi |−7|?', options: ['−7', '7', '0', '49'], answer: 1, explain: 'Wartość bezwzględna to odległość od zera – zawsze nieujemna.' },
        { id: '06p9q1', q: 'Która z liczb jest liczbą pierwszą?', options: ['21', '27', '29', '33'], answer: 2, explain: '21 = 3 · 7, 27 = 3 · 9, 33 = 3 · 11, a 29 dzieli się tylko przez 1 i 29.' },
        { id: 'fzbnz9', q: 'Liczbę 47 zapisano w postaci 47 = 6 · q + r, gdzie 0 ≤ r < 6. Ile wynoszą q i r?', options: ['q = 7, r = 5', 'q = 8, r = −1', 'q = 6, r = 11', 'q = 7, r = 6'], answer: 0 },
        { id: 't9wrta', q: 'Jaka jest długość odcinka o końcach A = (1, 1) i B = (4, 5)?', options: ['5', '7', '√7', '25'], answer: 0, explain: 'Różnice współrzędnych: 3 i 4; √(9 + 16) = 5.' },
        { id: '9o5dn4', q: 'Prawda czy fałsz?\nKażda liczba podzielna przez 9 jest podzielna przez 3.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Skoro 9 = 3 · 3, to liczba podzielna przez 9 dzieli się też przez 3.' },
        { id: '391s3y', q: 'Prawda czy fałsz?\nKażda liczba podzielna przez 3 jest podzielna przez 9.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Kontrprzykład: 6 dzieli się przez 3, ale nie przez 9.' },
        { id: '23zpsa', q: 'Liczbę 3,476 zaokrąglono do części setnych. Wynik to…', options: ['3,47', '3,48', '3,5', '3,4'], answer: 1, explain: 'Cyfra tysięcznych to 6 (≥ 5), więc zaokrąglamy w górę.' },
        { id: 'glu2pj', q: 'Ile wynosi 2 − 8 : 2 · 3?', options: ['−9', '−1', '6', '−10'], answer: 3, explain: 'Dzielenie i mnożenie wykonujemy po kolei od lewej: 8 : 2 = 4, 4 · 3 = 12; potem 2 − 12 = −10.' },
        { id: '7bb8yi', q: 'Która liczba jest podzielna przez 4?', options: ['314', '316', '322', '338'], answer: 1, explain: 'Dwie ostatnie cyfry tworzą liczbę 16, a 16 dzieli się przez 4.' },
        { id: 'fquaqo', q: 'Liczba CDXLIV zapisana cyframi arabskimi to…', options: ['644', '464', '444', '446'], answer: 2, explain: 'CD = 400, XL = 40, IV = 4 → 444.' },
        { id: 'jii18e', q: 'Ile wynosi 3/4 + 1/6?', options: ['4/10', '5/6', '11/12', '1/3'], answer: 2, explain: 'Wspólny mianownik 12: 9/12 + 2/12 = 11/12.' },
        { id: 'q8bfdr', q: 'Ile wynosi 0,2 · 0,3?', options: ['0,6', '0,06', '0,006', '6'], answer: 1, explain: '2 · 3 = 6, a w czynnikach są razem dwie cyfry po przecinku → 0,06.' },
        { id: '3q5b5b', q: 'Ile wynosi (−2) · (−3) − 4?', options: ['−10', '10', '−2', '2'], answer: 3, explain: 'Iloczyn dwóch liczb ujemnych jest dodatni: 6 − 4 = 2.' },
        { id: '5g8n5a', q: 'Ułamek 3/8 w postaci dziesiętnej to…', options: ['0,38', '0,0375', '3,8', '0,375'], answer: 3, explain: '3 : 8 = 0,375.' },
        { id: '15a5rk', q: 'Ile wynosi 1,5 : 0,03?', options: ['5', '0,5', '50', '500'], answer: 2, explain: 'Mnożymy obie liczby przez 100: 150 : 3 = 50.' },
        { id: 'd6dutu', q: 'Prawda czy fałsz?\nLiczba 1 jest liczbą pierwszą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Liczba pierwsza ma dokładnie dwa dzielniki, a 1 ma tylko jeden. Liczba 1 nie jest ani pierwsza, ani złożona.' },
        {
          id: 'f30czf',
          q: 'Na osi liczbowej zaznaczono zbiór liczb. Który warunek opisuje ten zbiór?',
          svg: `<svg viewBox="0 0 370 90" role="img" aria-label="Oś liczbowa od −3 do 3. Zamalowane kółko w punkcie −1 i pogrubiona linia ze strzałką w prawo">
      <line x1="20" y1="40" x2="350" y2="40" class="ln"/>
      <polyline points="341,35 350,40 341,45" class="ln"/>
      <line x1="45" y1="35" x2="45" y2="45" class="ln"/>
      <text x="45" y="66" class="tx" text-anchor="middle">−3</text>
      <line x1="90" y1="35" x2="90" y2="45" class="ln"/>
      <text x="90" y="66" class="tx" text-anchor="middle">−2</text>
      <line x1="135" y1="35" x2="135" y2="45" class="ln"/>
      <text x="135" y="66" class="tx" text-anchor="middle">−1</text>
      <line x1="180" y1="33" x2="180" y2="47" class="ln"/>
      <text x="180" y="66" class="tx" text-anchor="middle">0</text>
      <line x1="225" y1="35" x2="225" y2="45" class="ln"/>
      <text x="225" y="66" class="tx" text-anchor="middle">1</text>
      <line x1="270" y1="35" x2="270" y2="45" class="ln"/>
      <text x="270" y="66" class="tx" text-anchor="middle">2</text>
      <line x1="315" y1="35" x2="315" y2="45" class="ln"/>
      <text x="315" y="66" class="tx" text-anchor="middle">3</text>
      <line x1="135" y1="40" x2="349" y2="40" class="ln s1 sw"/>
      <polyline points="341,35 350,40 341,45" class="ln s1 sw"/>
      <circle cx="135" cy="40" r="6" class="t1"/>
    </svg>`,
          options: ['x ≥ −1', 'x > −1', 'x ≤ −1', 'x < −1'],
          answer: 0,
          explain: 'Kółko jest zamalowane, więc −1 należy do zbioru, a linia biegnie w prawo – do liczb większych. Zatem x ≥ −1.',
        },
        {
          id: 'gr5e2w',
          q: 'Punkty A i B leżą w punktach kratowych układu współrzędnych (rysunek). Jakie współrzędne ma środek odcinka AB?',
          svg: `<svg viewBox="0 0 320 250" role="img" aria-label="Układ współrzędnych z kratką. Odcinek AB, gdzie A = (−2, 1) i B = (4, 5)">
      <line x1="40" y1="26" x2="40" y2="236" class="ln-thin"/>
      <line x1="70" y1="26" x2="70" y2="236" class="ln-thin"/>
      <line x1="100" y1="26" x2="100" y2="236" class="ln-thin"/>
      <line x1="130" y1="26" x2="130" y2="236" class="ln-thin"/>
      <line x1="160" y1="26" x2="160" y2="236" class="ln-thin"/>
      <line x1="190" y1="26" x2="190" y2="236" class="ln-thin"/>
      <line x1="220" y1="26" x2="220" y2="236" class="ln-thin"/>
      <line x1="250" y1="26" x2="250" y2="236" class="ln-thin"/>
      <line x1="280" y1="26" x2="280" y2="236" class="ln-thin"/>
      <line x1="40" y1="236" x2="280" y2="236" class="ln-thin"/>
      <line x1="40" y1="206" x2="280" y2="206" class="ln-thin"/>
      <line x1="40" y1="176" x2="280" y2="176" class="ln-thin"/>
      <line x1="40" y1="146" x2="280" y2="146" class="ln-thin"/>
      <line x1="40" y1="116" x2="280" y2="116" class="ln-thin"/>
      <line x1="40" y1="86" x2="280" y2="86" class="ln-thin"/>
      <line x1="40" y1="56" x2="280" y2="56" class="ln-thin"/>
      <line x1="40" y1="26" x2="280" y2="26" class="ln-thin"/>
      <line x1="40" y1="206" x2="294" y2="206" class="ln"/>
      <polyline points="285,201 294,206 285,211" class="ln"/>
      <line x1="130" y1="236" x2="130" y2="12" class="ln"/>
      <polyline points="125,21 130,12 135,21" class="ln"/>
      <text x="292" y="198" class="tx-s">x</text>
      <text x="138" y="20" class="tx-s">y</text>
      <rect x="31" y="210" width="18" height="14" class="bg"/>
      <text x="40" y="221" class="tx-s" text-anchor="middle">−3</text>
      <rect x="61" y="210" width="18" height="14" class="bg"/>
      <text x="70" y="221" class="tx-s" text-anchor="middle">−2</text>
      <rect x="91" y="210" width="18" height="14" class="bg"/>
      <text x="100" y="221" class="tx-s" text-anchor="middle">−1</text>
      <rect x="154.8" y="210" width="10.5" height="14" class="bg"/>
      <text x="160" y="221" class="tx-s" text-anchor="middle">1</text>
      <rect x="184.8" y="210" width="10.5" height="14" class="bg"/>
      <text x="190" y="221" class="tx-s" text-anchor="middle">2</text>
      <rect x="214.8" y="210" width="10.5" height="14" class="bg"/>
      <text x="220" y="221" class="tx-s" text-anchor="middle">3</text>
      <rect x="244.8" y="210" width="10.5" height="14" class="bg"/>
      <text x="250" y="221" class="tx-s" text-anchor="middle">4</text>
      <rect x="274.8" y="210" width="10.5" height="14" class="bg"/>
      <text x="280" y="221" class="tx-s" text-anchor="middle">5</text>
      <rect x="108" y="229" width="18" height="14" class="bg"/>
      <text x="125" y="240" class="tx-s" text-anchor="end">−1</text>
      <rect x="115.5" y="169" width="10.5" height="14" class="bg"/>
      <text x="125" y="180" class="tx-s" text-anchor="end">1</text>
      <rect x="115.5" y="139" width="10.5" height="14" class="bg"/>
      <text x="125" y="150" class="tx-s" text-anchor="end">2</text>
      <rect x="115.5" y="109" width="10.5" height="14" class="bg"/>
      <text x="125" y="120" class="tx-s" text-anchor="end">3</text>
      <rect x="115.5" y="79" width="10.5" height="14" class="bg"/>
      <text x="125" y="90" class="tx-s" text-anchor="end">4</text>
      <rect x="115.5" y="49" width="10.5" height="14" class="bg"/>
      <text x="125" y="60" class="tx-s" text-anchor="end">5</text>
      <rect x="115.5" y="19" width="10.5" height="14" class="bg"/>
      <text x="125" y="30" class="tx-s" text-anchor="end">6</text>
      <rect x="115.5" y="210" width="10.5" height="14" class="bg"/>
      <text x="125" y="221" class="tx-s" text-anchor="end">0</text>
      <line x1="70" y1="176" x2="250" y2="56" class="ln s1 sw"/>
      <circle cx="70" cy="176" r="5" class="t1"/>
      <circle cx="250" cy="56" r="5" class="t1"/>
      <text x="60" y="168" class="tx-b" text-anchor="end">A</text>
      <text x="258" y="50" class="tx-b">B</text>
    </svg>`,
          options: ['(1, 3)', '(3, 2)', '(2, 3)', '(1, 2)'],
          answer: 0,
          explain: 'Z rysunku A = (−2, 1), B = (4, 5). Środek: ((−2 + 4)/2, (1 + 5)/2) = (1, 3).',
        },
        {
          id: '8ypgvh',
          q: 'Punkty A i B leżą w punktach kratowych układu współrzędnych (rysunek). Jaka jest długość odcinka AB?',
          svg: `<svg viewBox="0 0 300 230" role="img" aria-label="Układ współrzędnych z kratką. Odcinek AB, gdzie A = (−2, −1) i B = (2, 2)">
      <line x1="50" y1="28" x2="50" y2="198" class="ln-thin"/>
      <line x1="84" y1="28" x2="84" y2="198" class="ln-thin"/>
      <line x1="118" y1="28" x2="118" y2="198" class="ln-thin"/>
      <line x1="152" y1="28" x2="152" y2="198" class="ln-thin"/>
      <line x1="186" y1="28" x2="186" y2="198" class="ln-thin"/>
      <line x1="220" y1="28" x2="220" y2="198" class="ln-thin"/>
      <line x1="254" y1="28" x2="254" y2="198" class="ln-thin"/>
      <line x1="50" y1="198" x2="254" y2="198" class="ln-thin"/>
      <line x1="50" y1="164" x2="254" y2="164" class="ln-thin"/>
      <line x1="50" y1="130" x2="254" y2="130" class="ln-thin"/>
      <line x1="50" y1="96" x2="254" y2="96" class="ln-thin"/>
      <line x1="50" y1="62" x2="254" y2="62" class="ln-thin"/>
      <line x1="50" y1="28" x2="254" y2="28" class="ln-thin"/>
      <line x1="50" y1="130" x2="268" y2="130" class="ln"/>
      <polyline points="259,125 268,130 259,135" class="ln"/>
      <line x1="152" y1="198" x2="152" y2="14" class="ln"/>
      <polyline points="147,23 152,14 157,23" class="ln"/>
      <text x="266" y="122" class="tx-s">x</text>
      <text x="160" y="22" class="tx-s">y</text>
      <rect x="41" y="134" width="18" height="14" class="bg"/>
      <text x="50" y="145" class="tx-s" text-anchor="middle">−3</text>
      <rect x="75" y="134" width="18" height="14" class="bg"/>
      <text x="84" y="145" class="tx-s" text-anchor="middle">−2</text>
      <rect x="109" y="134" width="18" height="14" class="bg"/>
      <text x="118" y="145" class="tx-s" text-anchor="middle">−1</text>
      <rect x="180.8" y="134" width="10.5" height="14" class="bg"/>
      <text x="186" y="145" class="tx-s" text-anchor="middle">1</text>
      <rect x="214.8" y="134" width="10.5" height="14" class="bg"/>
      <text x="220" y="145" class="tx-s" text-anchor="middle">2</text>
      <rect x="248.8" y="134" width="10.5" height="14" class="bg"/>
      <text x="254" y="145" class="tx-s" text-anchor="middle">3</text>
      <rect x="130" y="191" width="18" height="14" class="bg"/>
      <text x="147" y="202" class="tx-s" text-anchor="end">−2</text>
      <rect x="130" y="157" width="18" height="14" class="bg"/>
      <text x="147" y="168" class="tx-s" text-anchor="end">−1</text>
      <rect x="137.5" y="89" width="10.5" height="14" class="bg"/>
      <text x="147" y="100" class="tx-s" text-anchor="end">1</text>
      <rect x="137.5" y="55" width="10.5" height="14" class="bg"/>
      <text x="147" y="66" class="tx-s" text-anchor="end">2</text>
      <rect x="137.5" y="21" width="10.5" height="14" class="bg"/>
      <text x="147" y="32" class="tx-s" text-anchor="end">3</text>
      <rect x="137.5" y="134" width="10.5" height="14" class="bg"/>
      <text x="147" y="145" class="tx-s" text-anchor="end">0</text>
      <line x1="84" y1="164" x2="220" y2="62" class="ln s1 sw"/>
      <circle cx="84" cy="164" r="5" class="t1"/>
      <circle cx="220" cy="62" r="5" class="t1"/>
      <text x="76" y="184" class="tx-b" text-anchor="end">A</text>
      <text x="228" y="56" class="tx-b">B</text>
    </svg>`,
          options: ['5', '7', '4', '√7'],
          answer: 0,
          explain: 'A = (−2, −1), B = (2, 2). Różnice współrzędnych: 2 − (−2) = 4 i 2 − (−1) = 3, więc |AB| = √(4² + 3²) = √25 = 5.',
        },
      ],
      tasks: [
        {
          id: '7i7nrt',
          points: 2,
          q: 'Autobus linii A odjeżdża z przystanku co 12 minut, a autobus linii B – co 18 minut. O godzinie 7:00 oba odjechały jednocześnie. O której godzinie najwcześniej znów odjadą razem?',
          steps: [
            'Autobusy odjadą razem po czasie, który jest wielokrotnością i liczby 12, i liczby 18 – szukamy NWW(12, 18).',
            'Rozkład na czynniki: 12 = 2 · 2 · 3, 18 = 2 · 3 · 3, więc NWW(12, 18) = 2 · 2 · 3 · 3 = 36.',
            'Odjadą razem po 36 minutach: 7:00 + 36 min = 7:36.',
          ],
          answer: 'O 7:36.',
          scoring: [
            '1 pkt – zauważenie, że trzeba znaleźć NWW(12, 18), albo wypisanie kolejnych godzin odjazdów obu linii.',
            '2 pkt – poprawna odpowiedź 7:36.',
          ],
        },
        {
          id: 'kap026',
          points: 2,
          q: 'Uzasadnij, że liczba 10¹⁵ + 8 jest podzielna przez 9.',
          steps: [
            '10¹⁵ to jedynka i 15 zer. Po dodaniu 8 otrzymujemy liczbę 1000…008: jedynka, 14 zer i ósemka.',
            'Suma cyfr tej liczby: 1 + 8 = 9.',
            'Suma cyfr jest podzielna przez 9, więc z cechy podzielności przez 9 cała liczba jest podzielna przez 9.',
          ],
          answer: 'Suma cyfr liczby 10¹⁵ + 8 wynosi 9, więc liczba dzieli się przez 9.',
          scoring: [
            '1 pkt – zapisanie, jak wyglądają cyfry liczby 10¹⁵ + 8 (jedynka, zera, ósemka).',
            '2 pkt – obliczenie sumy cyfr i powołanie się na cechę podzielności przez 9.',
          ],
        },
        {
          id: 'xrloo7',
          points: 3,
          q: 'Punkt S = (1, −1) jest środkiem odcinka AB, a A = (−3, 2) (rysunek). Wyznacz współrzędne punktu B i oblicz długość odcinka AB.',
          svg: `<svg viewBox="0 0 340 248" role="img" aria-label="Układ współrzędnych z kratką. Punkt A = (−3, 2) i punkt S = (1, −1), środek odcinka AB">
      <line x1="30" y1="26" x2="30" y2="234" class="ln-thin"/>
      <line x1="56" y1="26" x2="56" y2="234" class="ln-thin"/>
      <line x1="82" y1="26" x2="82" y2="234" class="ln-thin"/>
      <line x1="108" y1="26" x2="108" y2="234" class="ln-thin"/>
      <line x1="134" y1="26" x2="134" y2="234" class="ln-thin"/>
      <line x1="160" y1="26" x2="160" y2="234" class="ln-thin"/>
      <line x1="186" y1="26" x2="186" y2="234" class="ln-thin"/>
      <line x1="212" y1="26" x2="212" y2="234" class="ln-thin"/>
      <line x1="238" y1="26" x2="238" y2="234" class="ln-thin"/>
      <line x1="264" y1="26" x2="264" y2="234" class="ln-thin"/>
      <line x1="290" y1="26" x2="290" y2="234" class="ln-thin"/>
      <line x1="30" y1="234" x2="290" y2="234" class="ln-thin"/>
      <line x1="30" y1="208" x2="290" y2="208" class="ln-thin"/>
      <line x1="30" y1="182" x2="290" y2="182" class="ln-thin"/>
      <line x1="30" y1="156" x2="290" y2="156" class="ln-thin"/>
      <line x1="30" y1="130" x2="290" y2="130" class="ln-thin"/>
      <line x1="30" y1="104" x2="290" y2="104" class="ln-thin"/>
      <line x1="30" y1="78" x2="290" y2="78" class="ln-thin"/>
      <line x1="30" y1="52" x2="290" y2="52" class="ln-thin"/>
      <line x1="30" y1="26" x2="290" y2="26" class="ln-thin"/>
      <line x1="30" y1="104" x2="304" y2="104" class="ln"/>
      <polyline points="295,99 304,104 295,109" class="ln"/>
      <line x1="134" y1="234" x2="134" y2="12" class="ln"/>
      <polyline points="129,21 134,12 139,21" class="ln"/>
      <text x="302" y="96" class="tx-s">x</text>
      <text x="142" y="20" class="tx-s">y</text>
      <rect x="21" y="108" width="18" height="14" class="bg"/>
      <text x="30" y="119" class="tx-s" text-anchor="middle">−4</text>
      <rect x="47" y="108" width="18" height="14" class="bg"/>
      <text x="56" y="119" class="tx-s" text-anchor="middle">−3</text>
      <rect x="73" y="108" width="18" height="14" class="bg"/>
      <text x="82" y="119" class="tx-s" text-anchor="middle">−2</text>
      <rect x="99" y="108" width="18" height="14" class="bg"/>
      <text x="108" y="119" class="tx-s" text-anchor="middle">−1</text>
      <rect x="154.8" y="108" width="10.5" height="14" class="bg"/>
      <text x="160" y="119" class="tx-s" text-anchor="middle">1</text>
      <rect x="180.8" y="108" width="10.5" height="14" class="bg"/>
      <text x="186" y="119" class="tx-s" text-anchor="middle">2</text>
      <rect x="206.8" y="108" width="10.5" height="14" class="bg"/>
      <text x="212" y="119" class="tx-s" text-anchor="middle">3</text>
      <rect x="232.8" y="108" width="10.5" height="14" class="bg"/>
      <text x="238" y="119" class="tx-s" text-anchor="middle">4</text>
      <rect x="258.8" y="108" width="10.5" height="14" class="bg"/>
      <text x="264" y="119" class="tx-s" text-anchor="middle">5</text>
      <rect x="284.8" y="108" width="10.5" height="14" class="bg"/>
      <text x="290" y="119" class="tx-s" text-anchor="middle">6</text>
      <rect x="112" y="227" width="18" height="14" class="bg"/>
      <text x="129" y="238" class="tx-s" text-anchor="end">−5</text>
      <rect x="112" y="201" width="18" height="14" class="bg"/>
      <text x="129" y="212" class="tx-s" text-anchor="end">−4</text>
      <rect x="112" y="175" width="18" height="14" class="bg"/>
      <text x="129" y="186" class="tx-s" text-anchor="end">−3</text>
      <rect x="112" y="149" width="18" height="14" class="bg"/>
      <text x="129" y="160" class="tx-s" text-anchor="end">−2</text>
      <rect x="112" y="123" width="18" height="14" class="bg"/>
      <text x="129" y="134" class="tx-s" text-anchor="end">−1</text>
      <rect x="119.5" y="71" width="10.5" height="14" class="bg"/>
      <text x="129" y="82" class="tx-s" text-anchor="end">1</text>
      <rect x="119.5" y="45" width="10.5" height="14" class="bg"/>
      <text x="129" y="56" class="tx-s" text-anchor="end">2</text>
      <rect x="119.5" y="19" width="10.5" height="14" class="bg"/>
      <text x="129" y="30" class="tx-s" text-anchor="end">3</text>
      <rect x="119.5" y="108" width="10.5" height="14" class="bg"/>
      <text x="129" y="119" class="tx-s" text-anchor="end">0</text>
      <line x1="56" y1="52" x2="160" y2="130" class="ln s1 sw"/>
      <circle cx="56" cy="52" r="5" class="t1"/>
      <circle cx="160" cy="130" r="5" class="t2"/>
      <text x="54" y="43" class="tx-b" text-anchor="end">A</text>
      <text x="168" y="150" class="tx-b t2">S</text>
    </svg>`,
          steps: [
            'Współrzędne środka to średnie współrzędnych końców: (−3 + x)/2 = 1 i (2 + y)/2 = −1, gdzie B = (x, y).',
            '−3 + x = 2, więc x = 5; 2 + y = −2, więc y = −4. Zatem B = (5, −4).',
            'Różnice współrzędnych punktów A i B: 5 − (−3) = 8 oraz 2 − (−4) = 6.',
            'Z twierdzenia Pitagorasa: |AB| = √(8² + 6²) = √(64 + 36) = √100 = 10.',
            'Sprawdzenie: ((−3 + 5)/2, (2 + (−4))/2) = (1, −1) – to punkt S.',
          ],
          answer: 'B = (5, −4), |AB| = 10',
          scoring: [
            '1 pkt – poprawne zapisanie warunków na środek odcinka albo jedna poprawna współrzędna punktu B.',
            '2 pkt – B = (5, −4).',
            '3 pkt – długość odcinka AB = 10.',
          ],
        },
        {
          id: 'ikjxxa',
          points: 2,
          q: 'Kwiaciarka ma 48 róż białych i 36 róż czerwonych. Chce z nich zrobić jak najwięcej jednakowych bukietów (w każdym tyle samo róż białych i tyle samo czerwonych) i wykorzystać wszystkie kwiaty. Ile bukietów zrobi i ile róż każdego koloru będzie w jednym bukiecie?',
          steps: [
            'Liczba bukietów musi być dzielnikiem i liczby 48, i liczby 36. Największa taka liczba to NWD(48, 36).',
            '48 = 2 · 2 · 2 · 2 · 3, 36 = 2 · 2 · 3 · 3, więc NWD(48, 36) = 2 · 2 · 3 = 12.',
            'W każdym bukiecie: 48 : 12 = 4 róże białe i 36 : 12 = 3 róże czerwone. Sprawdzenie: 12 · 4 = 48, 12 · 3 = 36.',
          ],
          answer: '12 bukietów, w każdym 4 róże białe i 3 czerwone.',
          scoring: [
            '1 pkt – zauważenie, że trzeba wyznaczyć NWD(48, 36), albo wypisanie wspólnych dzielników liczb 48 i 36.',
            '2 pkt – odpowiedź: 12 bukietów po 4 róże białe i 3 czerwone.',
          ],
        },
      ],
    },
    {
      id: 'ulamki',
      name: 'Ułamki zwykłe i dziesiętne',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), matematyka kl. IV–VI: IV. Ułamki zwykłe i dziesiętne (IV.1–14), V. Działania na ułamkach zwykłych i dziesiętnych (V.1–7). Egzamin sprawdza wymagania z klas IV–VIII (informator CKE).',
      theory: `
        <h3>Ułamek zwykły</h3>
        <p><span class="f">3/4</span> – licznik 3 (ile części bierzemy), mianownik 4 (na ile równych części dzielimy całość). Ułamek to też iloraz: <span class="f">3/4 = 3 : 4 = 0,75</span>.</p>
        <ul>
          <li><b>Właściwy</b> – licznik mniejszy od mianownika (2/5), <b>niewłaściwy</b> – licznik większy lub równy mianownikowi (7/3).</li>
          <li><b>Liczba mieszana</b> (tu zapisujemy ją jako <span class="f">2 1/3</span> – „dwie i jedna trzecia”): 7/3 = 2 1/3, bo 7 : 3 = 2 reszty 1. Odwrotnie: 2 1/3 = (2 · 3 + 1)/3 = 7/3.</li>
        </ul>
        <h3>Skracanie i rozszerzanie</h3>
        <p>Licznik i mianownik dzielimy (<b>skracanie</b>) albo mnożymy (<b>rozszerzanie</b>) przez tę samą liczbę różną od zera – wartość ułamka się nie zmienia: <span class="f">12/18 = 2/3</span> (przez 6), <span class="f">3/5 = 9/15</span> (przez 3).</p>
        <h3>Porównywanie</h3>
        <p>Sprowadź do wspólnego mianownika: 2/3 i 3/4 → 8/12 i 9/12, więc <b>3/4 &gt; 2/3</b>. Przy równych licznikach większy jest ułamek o mniejszym mianowniku: 3/5 &gt; 3/7.</p>
        <h3>Działania na ułamkach zwykłych</h3>
        <table>
          <tr><th>Działanie</th><th>Jak?</th><th>Przykład</th></tr>
          <tr><td>dodawanie, odejmowanie</td><td>wspólny mianownik, potem dodaj/odejmij liczniki</td><td>1/4 + 2/3 = 3/12 + 8/12 = 11/12</td></tr>
          <tr><td>mnożenie</td><td>licznik · licznik, mianownik · mianownik (najpierw skracaj)</td><td>2/3 · 9/10 = 18/30 = 3/5</td></tr>
          <tr><td>dzielenie</td><td>pomnóż przez odwrotność dzielnika</td><td>3/4 : 3/8 = 3/4 · 8/3 = 2</td></tr>
          <tr><td>liczby mieszane</td><td>zamień na ułamki niewłaściwe</td><td>1 1/2 · 2 2/3 = 3/2 · 8/3 = 4</td></tr>
          <tr><td>potęga</td><td>potęgujemy licznik i mianownik</td><td>(2/3)² = 4/9</td></tr>
        </table>
        <h3>Ułamki dziesiętne</h3>
        <ul>
          <li>Zamiana: <span class="f">0,25 = 25/100 = 1/4</span>, <span class="f">3/5 = 6/10 = 0,6</span>, <span class="f">7/20 = 35/100 = 0,35</span>. Gdy mianownika nie da się rozszerzyć do 10, 100, 1000…, dzielimy licznik przez mianownik i wychodzi rozwinięcie nieskończone okresowe: 1/3 = 0,(3), 2/11 = 0,(18).</li>
          <li>Mnożenie przez 10, 100, 1000 – przecinek w prawo o 1, 2, 3 miejsca; dzielenie – w lewo.</li>
          <li><b>Mnożenie</b>: mnożymy jak liczby naturalne, a w wyniku jest tyle cyfr po przecinku, ile razem w obu czynnikach: <span class="f">0,3 · 0,04 = 0,012</span>.</li>
          <li><b>Dzielenie</b>: przesuwamy przecinek w obu liczbach o tyle samo miejsc, aż dzielnik będzie liczbą naturalną: <span class="f">2,4 : 0,06 = 240 : 6 = 40</span>.</li>
          <li>Wyrażenia dwumianowane: 3 zł 5 gr = 3,05 zł, 2 m 7 cm = 2,07 m. W praktyce zaokrąglamy do części setnych (groszy, centymetrów).</li>
        </ul>
        <h3>Ułamek liczby i całość z części</h3>
        <ul>
          <li><b>Ułamek liczby</b>: 3/4 z 20 = 20 : 4 · 3 = 15.</li>
          <li><b>Liczba, której część znamy</b>: 2/5 liczby to 12 → 1/5 to 6 → całość 30.</li>
          <li><b>Powiększenie o część</b>: 40 powiększone o 1/4 → 40 + 10 = 50. <b>Pomniejszenie</b>: 30 pomniejszone o 1/3 → 30 − 10 = 20.</li>
        </ul>
        <div class="tip">💡 W wyrażeniach z ułamkami zwykłymi i dziesiętnymi zamień wszystko na jeden rodzaj ułamków (często łatwiej na zwykłe) i pilnuj kolejności działań. Uwaga na minus: −1/2 + 3/4 = −2/4 + 3/4 = 1/4.</div>
      `,
      flashcards: [
        ['Skracanie ułamka', 'Dziel licznik i mianownik przez tę samą liczbę: 12/18 = 2/3'],
        ['Rozszerzanie ułamka', 'Mnóż licznik i mianownik przez tę samą liczbę: 3/5 = 9/15'],
        ['Liczba mieszana → ułamek niewłaściwy', '2 1/3 = (2 · 3 + 1)/3 = 7/3'],
        ['Ułamek niewłaściwy → liczba mieszana', '7/3 = 2 1/3 (7 : 3 = 2 reszty 1)'],
        ['Dodawanie i odejmowanie ułamków', 'Wspólny mianownik: 1/4 + 2/3 = 3/12 + 8/12 = 11/12'],
        ['Mnożenie ułamków', 'licznik · licznik, mianownik · mianownik'],
        ['Dzielenie ułamków', 'Pomnóż przez odwrotność dzielnika: 3/4 : 3/8 = 3/4 · 8/3 = 2'],
        ['0,25', '1/4'],
        ['0,2', '1/5'],
        ['0,75', '3/4'],
        ['1/8', '0,125'],
        ['Mnożenie ułamków dziesiętnych', 'Po przecinku tyle cyfr, ile razem w czynnikach: 0,3 · 0,04 = 0,012'],
        ['Dzielenie przez ułamek dziesiętny', 'Przesuń przecinek w obu liczbach: 2,4 : 0,06 = 240 : 6 = 40'],
        ['3/4 z 20', '20 : 4 · 3 = 15'],
        ['2/5 liczby to 12. Jaka to liczba?', '12 : 2 · 5 = 30'],
      ],
      questions: [
        { id: '4keh0c', q: 'Ułamek 18/24 po skróceniu do postaci nieskracalnej to…', options: ['9/12', '3/4', '2/3', '4/5'], answer: 1, explain: 'Dzielimy licznik i mianownik przez NWD(18, 24) = 6. Ułamek 9/12 da się jeszcze skrócić.' },
        { id: '3a37qk', q: 'Który ułamek jest równy 3/5?', options: ['6/15', '9/12', '12/20', '5/3'], answer: 2, explain: 'Rozszerzamy przez 4: 3 · 4 = 12, 5 · 4 = 20.' },
        { id: '9xtxic', q: 'Liczba mieszana 2 3/4 („dwie i trzy czwarte”) jako ułamek niewłaściwy to…', options: ['9/4', '6/4', '23/4', '11/4'], answer: 3, explain: '(2 · 4 + 3)/4 = 11/4.' },
        { id: 'skxqju', q: 'Ułamek 17/5 zapisany jako liczba mieszana to…', options: ['3 2/5', '3 1/5', '5 2/3', '2 2/5'], answer: 0, explain: '17 : 5 = 3 reszty 2, więc 3 całe i 2/5.' },
        { id: 'l6h70x', q: 'Która liczba jest największa?', options: ['2/3', '5/8', '7/12', '3/4'], answer: 3, explain: 'Wspólny mianownik 24: 18/24, 16/24, 15/24, 14/24.' },
        { id: 'cekvio', q: 'Ile wynosi 5/6 − 1/4?', options: ['4/10', '7/12', '1/2', '13/12'], answer: 1, explain: '10/12 − 3/12 = 7/12. Nie odejmuj mianowników!' },
        { id: 'd16jer', q: 'Ile wynosi 4/9 · 3/8?', options: ['1/6', '7/17', '32/27', '1/3'], answer: 0, explain: 'Skracamy na krzyż: 4 i 8 przez 4, 3 i 9 przez 3 → 1/3 · 1/2 = 1/6.' },
        { id: 'ip9f3a', q: 'Ile wynosi 5/6 : 10/9?', options: ['25/27', '4/3', '3/4', '3/5'], answer: 2, explain: '5/6 · 9/10 = 45/60 = 3/4.' },
        { id: 'xvpm73', q: 'Ile wynosi 1 1/2 + 2 2/3?', options: ['3 3/5', '4 1/6', '4 1/2', '3 1/6'], answer: 1, explain: '1 + 2 = 3 całe, 1/2 + 2/3 = 3/6 + 4/6 = 7/6 = 1 1/6; razem 4 1/6.' },
        { id: 'eqonm3', q: 'Ile wynosi 2 1/4 · 4/3?', options: ['2 1/3', '8 1/3', '3', '12'], answer: 2, explain: '2 1/4 = 9/4; 9/4 · 4/3 = 36/12 = 3.' },
        { id: '3yx9og', q: 'Ułamek 7/20 w postaci dziesiętnej to…', options: ['0,7', '0,35', '0,72', '3,5'], answer: 1, explain: 'Rozszerzamy przez 5: 7/20 = 35/100 = 0,35.' },
        { id: 'ziiex1', q: 'Liczba 0,45 zapisana jako ułamek zwykły nieskracalny to…', options: ['45/10', '4/5', '9/2', '9/20'], answer: 3, explain: '0,45 = 45/100, skracamy przez 5: 9/20.' },
        { id: '5djrjj', q: 'Ile wynosi 0,4 · 0,05?', options: ['0,2', '0,002', '2', '0,02'], answer: 3, explain: '4 · 5 = 20; w czynnikach są razem 3 cyfry po przecinku → 0,020 = 0,02.' },
        { id: 'ek2k4r', q: 'Ile wynosi 3,6 : 0,09?', options: ['4', '0,4', '400', '40'], answer: 3, explain: 'Przesuwamy przecinek o 2 miejsca w obu liczbach: 360 : 9 = 40.' },
        { id: 'fqifup', q: 'Ile to jest 3/4 z 36?', options: ['9', '48', '27', '33'], answer: 2, explain: '36 : 4 = 9, a 9 · 3 = 27.' },
        { id: '180yox', q: '2/7 pewnej liczby to 10. Jaka to liczba?', options: ['20', '70', '5', '35'], answer: 3, explain: '1/7 to 10 : 2 = 5, więc cała liczba to 5 · 7 = 35.' },
        { id: 'ulk362', q: 'Liczbę 24 powiększono o 1/3 jej wartości. Jaki jest wynik?', options: ['8', '32', '16', '27'], answer: 1, explain: '1/3 z 24 to 8; 24 + 8 = 32.' },
        { id: 'v9kp02', q: 'Kwotę 4 zł 5 gr zapisaną w złotych to…', options: ['4,5 zł', '4,05 zł', '45 zł', '0,45 zł'], answer: 1, explain: '5 gr = 0,05 zł.' },
        { id: 'dtt75p', q: 'Długość 2 m 3 cm zapisana w metrach to…', options: ['2,3 m', '23 m', '2,003 m', '2,03 m'], answer: 3, explain: '3 cm = 3/100 m = 0,03 m.' },
        { id: '6at33t', q: 'Ile wynosi −1/2 + 3/4?', options: ['1/4', '−1/4', '5/4', '−5/4'], answer: 0, explain: '−2/4 + 3/4 = 1/4.' },
        { id: 'k5j9he', q: 'Ile wynosi (2/3)²?', options: ['4/6', '2/9', '4/9', '4/3'], answer: 2, explain: 'Do kwadratu podnosimy licznik i mianownik: 2²/3² = 4/9.' },
        { id: 'sml7al', q: 'Ile wynosi (0,3)²?', options: ['0,9', '0,09', '0,6', '0,009'], answer: 1, explain: '0,3 · 0,3 = 0,09 (dwie cyfry po przecinku).' },
        { id: '5hb1ok', q: 'Cenę 12,345 zł zaokrąglono do pełnych groszy. Wynik to…', options: ['12,34 zł', '12,35 zł', '12,3 zł', '12,4 zł'], answer: 1, explain: 'Grosze to części setne; trzecia cyfra po przecinku to 5, więc zaokrąglamy w górę.' },
        { id: 'jl83li', q: 'Ile wynosi 1/2 : 0,25 + 1,5?', options: ['0,5', '2', '1,25', '3,5'], answer: 3, explain: 'Najpierw dzielenie: 0,5 : 0,25 = 2; potem 2 + 1,5 = 3,5.' },
        { id: 'eab865', q: 'Która liczba leży na osi liczbowej między 1/2 a 3/4?', options: ['1/3', '4/5', '5/8', '7/8'], answer: 2, explain: 'W ósmych: 1/2 = 4/8, 3/4 = 6/8, a między nimi jest 5/8.' },
        { id: 'jxh5bd', q: 'Który ułamek ma rozwinięcie dziesiętne nieskończone okresowe?', options: ['3/4', '7/20', '1/8', '2/3'], answer: 3, explain: '2/3 = 0,666… = 0,(6). Pozostałe można rozszerzyć do mianownika 100 lub 1000.' },
        { id: 'tlww9v', q: 'Ola zjadła 1/4 pizzy, a Tomek 3/8 tej pizzy. Jaka część pizzy została?', options: ['4/12', '3/8', '5/8', '1/2'], answer: 1, explain: 'Zjedli 2/8 + 3/8 = 5/8, więc zostało 1 − 5/8 = 3/8.' },
        { id: '7mh3qm', q: 'Prawda czy fałsz?\nUłamek 5/4 jest większy od 1.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Licznik jest większy od mianownika: 5/4 = 1 1/4.' },
        { id: 'fdvtn2', q: 'Prawda czy fałsz?\nAby dodać dwa ułamki zwykłe, wystarczy dodać ich liczniki i ich mianowniki.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Np. 1/2 + 1/2 = 1, a „dodawanie mianowników” dałoby 2/4. Najpierw sprowadzamy do wspólnego mianownika.' },
        {
          id: 'i81ihz',
          q: 'Jaką liczbę zaznaczono na osi liczbowej literą A?',
          svg: `<svg viewBox="0 0 380 90" role="img" aria-label="Oś liczbowa od 0 do 2, każdy odcinek jednostkowy podzielony na 3 równe części. Punkt A leży na drugiej kresce za liczbą 1">
      <line x1="14" y1="50" x2="368" y2="50" class="ln"/>
      <polyline points="359,45 368,50 359,55" class="ln"/>
      <line x1="30" y1="43" x2="30" y2="57" class="ln"/>
      <text x="30" y="76" class="tx" text-anchor="middle">0</text>
      <line x1="80" y1="45" x2="80" y2="55" class="ln"/>
      <line x1="130" y1="45" x2="130" y2="55" class="ln"/>
      <line x1="180" y1="43" x2="180" y2="57" class="ln"/>
      <text x="180" y="76" class="tx" text-anchor="middle">1</text>
      <line x1="230" y1="45" x2="230" y2="55" class="ln"/>
      <line x1="280" y1="45" x2="280" y2="55" class="ln"/>
      <line x1="330" y1="43" x2="330" y2="57" class="ln"/>
      <text x="330" y="76" class="tx" text-anchor="middle">2</text>
      <circle cx="280" cy="50" r="6" class="t1"/>
      <text x="280" y="30" class="tx-b t1" text-anchor="middle">A</text>
    </svg>`,
          options: ['1 2/3', '1 1/3', '1,5', '5/6'],
          answer: 0,
          explain: 'Odcinek od 0 do 1 podzielono na 3 równe części, więc jedna część to 1/3. A leży 2 części za liczbą 1: 1 2/3.',
        },
        {
          id: 'k6qk1n',
          q: 'Prostokąt podzielono na jednakowe kwadraty i część z nich zamalowano (rysunek). Jaką część prostokąta stanowi część NIEzamalowana?',
          svg: `<svg viewBox="0 0 300 190" role="img" aria-label="Prostokąt 6 na 4 kratki: zamalowany cały górny rząd i 4 kratki drugiego rzędu, razem 10 z 24 kratek">
      <rect x="30" y="14" width="40" height="40" class="f1 s1"/>
      <rect x="70" y="14" width="40" height="40" class="f1 s1"/>
      <rect x="110" y="14" width="40" height="40" class="f1 s1"/>
      <rect x="150" y="14" width="40" height="40" class="f1 s1"/>
      <rect x="190" y="14" width="40" height="40" class="f1 s1"/>
      <rect x="230" y="14" width="40" height="40" class="f1 s1"/>
      <rect x="30" y="54" width="40" height="40" class="f1 s1"/>
      <rect x="70" y="54" width="40" height="40" class="f1 s1"/>
      <rect x="110" y="54" width="40" height="40" class="f1 s1"/>
      <rect x="150" y="54" width="40" height="40" class="f1 s1"/>
      <rect x="190" y="54" width="40" height="40" class="ln-thin"/>
      <rect x="230" y="54" width="40" height="40" class="ln-thin"/>
      <rect x="30" y="94" width="40" height="40" class="ln-thin"/>
      <rect x="70" y="94" width="40" height="40" class="ln-thin"/>
      <rect x="110" y="94" width="40" height="40" class="ln-thin"/>
      <rect x="150" y="94" width="40" height="40" class="ln-thin"/>
      <rect x="190" y="94" width="40" height="40" class="ln-thin"/>
      <rect x="230" y="94" width="40" height="40" class="ln-thin"/>
      <rect x="30" y="134" width="40" height="40" class="ln-thin"/>
      <rect x="70" y="134" width="40" height="40" class="ln-thin"/>
      <rect x="110" y="134" width="40" height="40" class="ln-thin"/>
      <rect x="150" y="134" width="40" height="40" class="ln-thin"/>
      <rect x="190" y="134" width="40" height="40" class="ln-thin"/>
      <rect x="230" y="134" width="40" height="40" class="ln-thin"/>
      <rect x="30" y="14" width="240" height="160" class="ln"/>
    </svg>`,
          options: ['7/12', '5/12', '10/14', '7/10'],
          answer: 0,
          explain: 'Prostokąt ma 6 · 4 = 24 kratki, zamalowano 6 + 4 = 10, więc niezamalowanych jest 14: 14/24 = 7/12.',
        },
      ],
      tasks: [
        {
          id: 't4rfnm',
          points: 2,
          q: 'Oblicz wartość wyrażenia (2/3 + 0,5) · 1 1/5 − 0,4. Zapisz obliczenia.',
          steps: [
            'Zamień ułamek dziesiętny na zwykły: 0,5 = 1/2. W nawiasie: 2/3 + 1/2 = 4/6 + 3/6 = 7/6.',
            'Liczba mieszana: 1 1/5 = 6/5. Iloczyn: 7/6 · 6/5 = 7/5 = 1,4.',
            'Na koniec odejmowanie: 1,4 − 0,4 = 1.',
          ],
          answer: '1',
          scoring: [
            '1 pkt – poprawne obliczenie wartości w nawiasie (7/6) albo poprawny iloczyn przy błędzie rachunkowym w odejmowaniu.',
            '2 pkt – poprawny wynik 1 z obliczeniami.',
          ],
        },
        {
          id: 'km1dgp',
          points: 2,
          q: 'Pan Adam wydał 2/5 swoich pieniędzy na zakupy, a potem 1/3 pozostałej kwoty na książkę. Zostało mu 120 zł. Ile pieniędzy miał na początku?',
          steps: [
            'Oznacz początkową kwotę przez x. Po zakupach zostało 3/5 x.',
            'Na książkę wydał 1/3 z 3/5 x, czyli 1/5 x. Zostało 3/5 x − 1/5 x = 2/5 x.',
            '2/5 x = 120, więc x = 120 : 2 · 5 = 300 zł.',
            'Sprawdzenie: 2/5 z 300 = 120 zł (zakupy), zostaje 180 zł; 1/3 ze 180 = 60 zł (książka); zostaje 120 zł ✓.',
          ],
          answer: '300 zł',
          scoring: [
            '1 pkt – zapisanie, jaka część pieniędzy została (2/5 kwoty) albo poprawne równanie.',
            '2 pkt – poprawna odpowiedź: 300 zł.',
          ],
        },
        {
          id: 'w0egsq',
          points: 2,
          q: 'Na działce 1/3 powierzchni zajmują warzywa, 1/4 – kwiaty, a pozostałą część, o powierzchni 150 m², zajmuje trawnik. Jaką powierzchnię ma cała działka?',
          steps: [
            'Warzywa i kwiaty zajmują 1/3 + 1/4 = 4/12 + 3/12 = 7/12 działki.',
            'Trawnik to 1 − 7/12 = 5/12 działki, czyli 5/12 działki = 150 m².',
            '1/12 działki to 150 : 5 = 30 m², więc cała działka ma 12 · 30 = 360 m².',
            'Sprawdzenie: 1/3 · 360 = 120 m², 1/4 · 360 = 90 m²; 120 + 90 + 150 = 360 m².',
          ],
          answer: '360 m²',
          scoring: [
            '1 pkt – ustalenie, że trawnik zajmuje 5/12 działki.',
            '2 pkt – wynik: 360 m².',
          ],
        },
        {
          id: 'p2meah',
          points: 2,
          q: 'Kasia kupiła 1,5 kg jabłek po 4,20 zł za kilogram i 0,75 kg sera po 32 zł za kilogram. Zapłaciła banknotem 50 zł. Ile reszty otrzymała?',
          steps: [
            'Jabłka: 1,5 · 4,20 = 6,30 zł.',
            'Ser: 0,75 · 32 = 24 zł.',
            'Razem: 6,30 + 24 = 30,30 zł. Reszta: 50 − 30,30 = 19,70 zł.',
          ],
          answer: '19,70 zł',
          scoring: [
            '1 pkt – poprawne obliczenie kosztu jabłek (6,30 zł) i sera (24 zł).',
            '2 pkt – reszta: 19,70 zł.',
          ],
        },
      ],
    },
    {
      id: 'procenty',
      name: 'Procenty',
      basis: 'Informator CKE (matematyka) – wymagania: V. Obliczenia procentowe; VII. Proporcjonalność prosta.',
      theory: `
        <h3>Najważniejsze wzory</h3>
        <ul>
          <li><span class="f">1% = 1/100 = 0,01</span></li>
          <li><b>p% liczby a</b> = <span class="f">p/100 · a</span> &nbsp; np. 20% z 150 = 0,2 · 150 = 30</li>
          <li><b>Podwyżka o p%</b>: <span class="f">a · (1 + p/100)</span> &nbsp; np. 80 zł + 25% = 80 · 1,25 = 100 zł</li>
          <li><b>Obniżka o p%</b>: <span class="f">a · (1 − p/100)</span> &nbsp; np. 80 zł − 25% = 80 · 0,75 = 60 zł</li>
          <li><b>Jakim procentem a jest b?</b> <span class="f">b/a · 100%</span> &nbsp; np. 15 z 60 → 15/60 = 25%</li>
          <li><b>Liczba, której p% to b</b>: <span class="f">b : (p/100)</span> &nbsp; np. 30 to 20% liczby 150</li>
        </ul>
        <div class="tip">💡 <b>Punkty procentowe</b>: gdy oprocentowanie wzrasta z 4% do 5%, to wzrost o <b>1 punkt procentowy</b>, ale aż o <b>25%</b>.</div>
        <h3>Proporcjonalność prosta</h3>
        <p>Gdy jedna wielkość rośnie tyle razy, ile druga (np. cena i liczba sztuk). <b>Podział proporcjonalny</b>: 60 zł w stosunku 1 : 2 → 3 części po 20 zł → 20 zł i 40 zł.</p>
        <div class="tip">💡 Podwyżka o 10% i potem obniżka o 10% <b>nie</b> daje ceny początkowej: 100 → 110 → 99.</div>
      `,
      flashcards: [
        ['p% liczby a', 'p/100 · a'],
        ['Podwyżka o p%', 'a · (1 + p/100)'],
        ['Obniżka o p%', 'a · (1 − p/100)'],
        ['Jakim procentem a jest b?', 'b/a · 100%'],
        ['Punkt procentowy', 'Różnica między dwiema wartościami w procentach, np. 4% → 5% to +1 p.p.'],
      ],
      questions: [
        { id: 'lfu9d6', q: 'Ile to jest 20% liczby 150?', options: ['20', '30', '35', '7,5'], answer: 1, explain: '0,2 · 150 = 30.' },
        { id: '4sl432', q: 'Kurtka kosztowała 80 zł. Cenę obniżono o 25%. Ile kosztuje teraz?', options: ['55 zł', '60 zł', '65 zł', '20 zł'], answer: 1, explain: '80 · 0,75 = 60 zł.' },
        { id: '5xyypu', q: 'Cena wzrosła z 50 zł do 60 zł. O ile procent?', options: ['10%', '20%', '16,7%', '25%'], answer: 1, explain: 'Wzrost o 10 zł, a 10/50 = 0,2 = 20%.' },
        { id: '73q8vo', q: 'Po podwyżce o 10% rower kosztuje 220 zł. Ile kosztował przed podwyżką?', options: ['198 zł', '200 zł', '210 zł', '242 zł'], answer: 1, explain: 'x · 1,1 = 220, więc x = 200 zł.' },
        { id: 'upq2qs', q: 'Jakim procentem liczby 60 jest liczba 15?', options: ['15%', '20%', '25%', '40%'], answer: 2, explain: '15/60 = 1/4 = 25%.' },
        { id: 'uqaib3', q: 'Ile to jest 0,5% liczby 400?', options: ['2', '20', '200', '0,2'], answer: 0, explain: '0,005 · 400 = 2.' },
        { id: 'wnalcs', q: 'Oprocentowanie wzrosło z 4% do 5%. Wzrosło ono o…', options: ['1%', '1 punkt procentowy', '20 punktów procentowych', '5%'], answer: 1, explain: 'Różnica 5% − 4% to 1 punkt procentowy (procentowo to wzrost o 25%).' },
        { id: 'qw2nd2', q: 'Cenę 100 zł podniesiono o 10%, a potem nową cenę obniżono o 10%. Ile wynosi cena końcowa?', options: ['100 zł', '99 zł', '101 zł', '90 zł'], answer: 1, explain: '100 · 1,1 = 110; 110 · 0,9 = 99 zł.' },
        { id: 'zzeix4', q: '30 to 20% pewnej liczby. Jaka to liczba?', options: ['6', '60', '150', '600'], answer: 2, explain: '30 : 0,2 = 150.' },
        { id: 'kc8qj0', q: 'Pięć zeszytów kosztuje 12 zł. Ile kosztuje osiem takich zeszytów?', options: ['19,20 zł', '15 zł', '20 zł', '96 zł'], answer: 0, explain: 'Proporcjonalność prosta: 12 : 5 = 2,40 zł za zeszyt; 8 · 2,40 = 19,20 zł.' },
        { id: 'yw4gf6', q: 'Ania i Ola podzieliły 60 zł w stosunku 1 : 2. Ile dostała Ola?', options: ['20 zł', '30 zł', '40 zł', '45 zł'], answer: 2, explain: 'Razem 3 części po 20 zł; Ola ma 2 części = 40 zł.' },
        { id: '10amxk', q: 'Wpłacono 1000 zł na lokatę oprocentowaną 5% w skali roku. Ile będzie na lokacie po roku (bez podatku)?', options: ['1005 zł', '1050 zł', '1500 zł', '1100 zł'], answer: 1 },
        { id: 'z3hjhx', q: 'Ile to jest 15% liczby 80?', options: ['15', '12', '6,5', '1,2'], answer: 1, explain: '0,15 · 80 = 12.' },
        { id: '7bl7l8', q: 'Plecak kosztował 120 zł. Cenę obniżono o 15%. Ile kosztuje teraz?', options: ['105 zł', '18 zł', '108 zł', '102 zł'], answer: 3, explain: '15% ze 120 zł to 18 zł; 120 − 18 = 102 zł (albo 120 · 0,85).' },
        { id: 'yy4nuk', q: 'W klasie jest 25 uczniów, w tym 10 dziewcząt. Jaki procent klasy stanowią dziewczęta?', options: ['10%', '40%', '25%', '60%'], answer: 1, explain: '10/25 = 0,4 = 40%.' },
        { id: 'idz6nz', q: '40 to 80% pewnej liczby. Jaka to liczba?', options: ['32', '50', '48', '320'], answer: 1, explain: '40 : 0,8 = 50.' },
        { id: '892brs', q: 'Cena spadła z 80 zł do 60 zł. O ile procent ją obniżono?', options: ['25%', '20%', '33%', '75%'], answer: 0, explain: 'Spadek o 20 zł liczymy względem ceny początkowej: 20/80 = 25%.' },
        { id: 'adph27', q: 'Ile to jest 120% liczby 50?', options: ['6', '60', '70', '600'], answer: 1, explain: '1,2 · 50 = 60.' },
        { id: 'kcxxx4', q: 'Cenę podniesiono o 20%, a potem nową cenę jeszcze o 10%. O ile procent wzrosła cena w sumie?', options: ['32%', '30%', '22%', '20%'], answer: 0, explain: '1,2 · 1,1 = 1,32 – cena wzrosła o 32%, a nie o 30%.' },
        { id: '6ty3tk', q: 'Oprocentowanie lokaty spadło z 8% do 6%. O ile punktów procentowych spadło?', options: ['o 2', 'o 25', 'o 14', 'o 6'], answer: 0, explain: '8 − 6 = 2 punkty procentowe (procentowo to spadek o 25%).' },
        { id: 'b8nacq', q: 'Prawda czy fałsz?\nGdy cenę obniżymy o 50%, a potem nową cenę podniesiemy o 50%, wrócimy do ceny początkowej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Np. 100 zł → 50 zł → 75 zł. Podwyżkę liczymy od niższej ceny.' },
        {
          id: '3kc8h4',
          q: 'Diagram przedstawia wyniki ankiety wśród 200 uczniów: jaki sport lubią najbardziej. Ilu uczniów wybrało siatkówkę?',
          svg: `<svg viewBox="0 0 380 200" role="img" aria-label="Diagram kołowy: piłka nożna 40%, siatkówka 25%, koszykówka 20%, inne 15%">
      <path d="M95,100 L95,20 A80,80 0 0 1 142,164.7 Z" class="ln f1"/>
      <path d="M95,100 L142,164.7 A80,80 0 0 1 30.3,147 Z" class="ln f2"/>
      <path d="M95,100 L30.3,147 A80,80 0 0 1 30.3,53 Z" class="ln f3"/>
      <path d="M95,100 L30.3,53 A80,80 0 0 1 95,20 Z" class="ln f4"/>
      <rect x="200" y="42" width="16" height="16" class="ln f1"/>
      <text x="224" y="56" class="tx">piłka nożna 40%</text>
      <rect x="200" y="72" width="16" height="16" class="ln f2"/>
      <text x="224" y="86" class="tx">siatkówka 25%</text>
      <rect x="200" y="102" width="16" height="16" class="ln f3"/>
      <text x="224" y="116" class="tx">koszykówka 20%</text>
      <rect x="200" y="132" width="16" height="16" class="ln f4"/>
      <text x="224" y="146" class="tx">inne 15%</text>
    </svg>`,
          options: ['50', '25', '40', '75'],
          answer: 0,
          explain: 'Siatkówkę wybrało 25% uczniów: 0,25 · 200 = 50.',
        },
        {
          id: 'nqll38',
          q: 'Diagram przedstawia cenę biletu do kina w kolejnych latach. O ile procent wzrosła cena biletu w 2024 roku w porównaniu z 2023 rokiem?',
          svg: `<svg viewBox="0 0 340 240" role="img" aria-label="Diagram słupkowy ceny biletu: 2023 – 20 zł, 2024 – 25 zł, 2025 – 30 zł">
      <line x1="50" y1="205" x2="323" y2="205" class="ln-thin"/>
      <text x="44" y="209" class="tx-s" text-anchor="end">0</text>
      <line x1="50" y1="176.7" x2="323" y2="176.7" class="ln-thin"/>
      <text x="44" y="180.7" class="tx-s" text-anchor="end">5</text>
      <line x1="50" y1="148.3" x2="323" y2="148.3" class="ln-thin"/>
      <text x="44" y="152.3" class="tx-s" text-anchor="end">10</text>
      <line x1="50" y1="120" x2="323" y2="120" class="ln-thin"/>
      <text x="44" y="124" class="tx-s" text-anchor="end">15</text>
      <line x1="50" y1="91.7" x2="323" y2="91.7" class="ln-thin"/>
      <text x="44" y="95.7" class="tx-s" text-anchor="end">20</text>
      <line x1="50" y1="63.3" x2="323" y2="63.3" class="ln-thin"/>
      <text x="44" y="67.3" class="tx-s" text-anchor="end">25</text>
      <line x1="50" y1="35" x2="323" y2="35" class="ln-thin"/>
      <text x="44" y="39" class="tx-s" text-anchor="end">30</text>
      <rect x="83" y="91.7" width="54" height="113.3" class="f1 s1"/>
      <text x="110" y="223" class="tx" text-anchor="middle">2023</text>
      <rect x="168" y="63.3" width="54" height="141.7" class="f1 s1"/>
      <text x="195" y="223" class="tx" text-anchor="middle">2024</text>
      <rect x="253" y="35" width="54" height="170" class="f1 s1"/>
      <text x="280" y="223" class="tx" text-anchor="middle">2025</text>
      <line x1="50" y1="205" x2="323" y2="205" class="ln"/>
      <line x1="50" y1="205" x2="50" y2="25" class="ln"/>
      <text x="8" y="16" class="tx-s">cena (zł)</text>
    </svg>`,
          options: ['o 25%', 'o 20%', 'o 5%', 'o 50%'],
          answer: 0,
          explain: 'Cena wzrosła o 25 − 20 = 5 zł. Porównujemy z ceną z 2023 roku: 5/20 = 0,25 = 25%.',
        },
        {
          id: 'i0ce5u',
          q: 'Prawda czy fałsz?\nKuba podzielił 120 zł kieszonkowego tak, jak pokazuje diagram. Na oszczędności przeznaczył 50 zł.',
          svg: `<svg viewBox="0 0 380 200" role="img" aria-label="Diagram kołowy: oszczędności 45%, kino 25%, książki 20%, słodycze 10%">
      <path d="M95,100 L95,20 A80,80 0 0 1 119.7,176.1 Z" class="ln f3"/>
      <path d="M95,100 L119.7,176.1 A80,80 0 0 1 18.9,124.7 Z" class="ln f1"/>
      <path d="M95,100 L18.9,124.7 A80,80 0 0 1 48,35.3 Z" class="ln f5"/>
      <path d="M95,100 L48,35.3 A80,80 0 0 1 95,20 Z" class="ln f2"/>
      <rect x="200" y="42" width="16" height="16" class="ln f3"/>
      <text x="224" y="56" class="tx">oszczędności 45%</text>
      <rect x="200" y="72" width="16" height="16" class="ln f1"/>
      <text x="224" y="86" class="tx">kino 25%</text>
      <rect x="200" y="102" width="16" height="16" class="ln f5"/>
      <text x="224" y="116" class="tx">książki 20%</text>
      <rect x="200" y="132" width="16" height="16" class="ln f2"/>
      <text x="224" y="146" class="tx">słodycze 10%</text>
    </svg>`,
          options: ['Prawda', 'Fałsz'],
          noShuffle: true,
          answer: 1,
          explain: 'Na oszczędności poszło 45% ze 120 zł: 0,45 · 120 = 54 zł, a nie 50 zł.',
        },
      ],
      tasks: [
        {
          id: 'hsj17n',
          points: 2,
          q: 'Cenę roweru najpierw obniżono o 20%, a potem nową cenę podwyższono o 10%. Teraz rower kosztuje 1100 zł. Ile kosztował na początku?',
          steps: [
            'Oznacz cenę początkową przez x. Po obniżce o 20%: 0,8x. Po podwyżce o 10%: 0,8x · 1,1 = 0,88x.',
            '0,88x = 1100, więc x = 1100 : 0,88 = 1250 zł.',
            'Sprawdzenie: 1250 · 0,8 = 1000 zł; 1000 · 1,1 = 1100 zł ✓.',
          ],
          answer: '1250 zł',
          scoring: [
            '1 pkt – zapisanie zależności 0,8 · 1,1 · x = 1100 (albo równoważnej).',
            '2 pkt – poprawna odpowiedź: 1250 zł.',
          ],
        },
        {
          id: 'taro3l',
          points: 2,
          q: 'W klasie jest 28 uczniów. 25% z nich uczy się niemieckiego, a pozostali – hiszpańskiego. O ile procent więcej jest uczniów uczących się hiszpańskiego niż uczących się niemieckiego?',
          steps: [
            'Niemieckiego uczy się 25% z 28 = 7 uczniów, hiszpańskiego 28 − 7 = 21 uczniów.',
            'Różnica: 21 − 7 = 14 uczniów. Porównujemy ją z liczbą uczniów uczących się niemieckiego: 14/7 = 2 = 200%.',
          ],
          answer: 'O 200%.',
          scoring: [
            '1 pkt – obliczenie liczby uczniów: 7 i 21.',
            '2 pkt – poprawna odpowiedź: o 200%.',
          ],
        },
        {
          id: 'fk2osu',
          points: 2,
          q: 'Diagram kołowy przedstawia, jak 600 uczniów pewnej szkoły dociera do szkoły. O ilu więcej uczniów przychodzi pieszo, niż przyjeżdża rowerem?',
          svg: `<svg viewBox="0 0 380 200" role="img" aria-label="Diagram kołowy: pieszo 45%, autobusem 30%, rowerem – brak wartości, samochodem 10%">
      <path d="M95,100 L95,20 A80,80 0 0 1 119.7,176.1 Z" class="ln f1"/>
      <path d="M95,100 L119.7,176.1 A80,80 0 0 1 15,100 Z" class="ln f2"/>
      <path d="M95,100 L15,100 A80,80 0 0 1 48,35.3 Z" class="ln f3"/>
      <path d="M95,100 L48,35.3 A80,80 0 0 1 95,20 Z" class="ln f4"/>
      <rect x="200" y="42" width="16" height="16" class="ln f1"/>
      <text x="224" y="56" class="tx">pieszo 45%</text>
      <rect x="200" y="72" width="16" height="16" class="ln f2"/>
      <text x="224" y="86" class="tx">autobusem 30%</text>
      <rect x="200" y="102" width="16" height="16" class="ln f3"/>
      <text x="224" y="116" class="tx">rowerem ?</text>
      <rect x="200" y="132" width="16" height="16" class="ln f4"/>
      <text x="224" y="146" class="tx">samochodem 10%</text>
    </svg>`,
          steps: [
            'Wszystkie części diagramu dają razem 100%, więc rowerem przyjeżdża 100% − 45% − 30% − 10% = 15% uczniów.',
            'Pieszo przychodzi 0,45 · 600 = 270 uczniów, a rowerem przyjeżdża 0,15 · 600 = 90 uczniów.',
            'Różnica: 270 − 90 = 180 (albo od razu: 30% z 600 = 180).',
          ],
          answer: 'O 180 uczniów.',
          scoring: [
            '1 pkt – obliczenie, że rowerem przyjeżdża 15% uczniów (albo 90 uczniów).',
            '2 pkt – odpowiedź: o 180 uczniów.',
          ],
        },
        {
          id: 'rhjykk',
          points: 2,
          q: 'Bluza kosztowała 150 zł. Najpierw jej cenę obniżono o 20%, a potem nową cenę obniżono jeszcze o 30 zł. O ile procent cena końcowa jest niższa od ceny początkowej?',
          steps: [
            'Po pierwszej obniżce: 150 · 0,8 = 120 zł.',
            'Po drugiej obniżce: 120 − 30 = 90 zł.',
            'Cena spadła o 150 − 90 = 60 zł. Porównujemy z ceną początkową: 60/150 = 0,4 = 40%.',
          ],
          answer: 'O 40%.',
          scoring: [
            '1 pkt – obliczenie ceny końcowej: 90 zł.',
            '2 pkt – odpowiedź: o 40%.',
          ],
        },
      ],
    },
    {
      id: 'potegi-pierwiastki',
      name: 'Potęgi i pierwiastki',
      basis: 'Informator CKE (matematyka) – kl. VII–VIII: I. Potęgi o podstawach wymiernych; II. Pierwiastki.',
      theory: `
        <h3>Działania na potęgach</h3>
        <table>
          <tr><th>Reguła</th><th>Przykład</th></tr>
          <tr><td>aⁿ · aᵐ = aⁿ⁺ᵐ</td><td>2³ · 2⁴ = 2⁷</td></tr>
          <tr><td>aⁿ : aᵐ = aⁿ⁻ᵐ</td><td>2⁵ : 2³ = 2² = 4</td></tr>
          <tr><td>(aⁿ)ᵐ = aⁿ·ᵐ</td><td>(3²)³ = 3⁶</td></tr>
          <tr><td>(a · b)ⁿ = aⁿ · bⁿ</td><td>(2 · 5)³ = 2³ · 5³</td></tr>
        </table>
        <div class="tip">📋 Podstawa programowa wymaga potęg o wykładnikach <b>całkowitych dodatnich</b>. Wykładniki ujemne pojawiają się tylko w notacji wykładniczej.</div>
        <h3>Notacja wykładnicza</h3>
        <p><span class="f">a · 10ⁿ</span>, gdzie 1 ≤ a &lt; 10. Np. 3 400 000 = 3,4 · 10⁶; 0,00052 = 5,2 · 10⁻⁴.</p>
        <h3>Pierwiastki</h3>
        <ul>
          <li>√(a · b) = √a · √b → √(16 · 9) = 4 · 3 = 12</li>
          <li>Wyłączanie czynnika: √50 = √(25 · 2) = 5√2</li>
          <li>(√a)² = a, √(a²) = a dla a ≥ 0</li>
          <li>Pierwiastek sześcienny może być z liczby ujemnej: ∛(−27) = −3</li>
          <li>Włączanie liczby pod pierwiastek: 3√2 = √(9 · 2) = √18</li>
          <li>Szacowanie: 11² = 121 i 12² = 144, więc 11 &lt; √137 &lt; 12</li>
        </ul>
        <div class="tip">💡 Kwadraty do zapamiętania: 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225.</div>
      `,
      flashcards: [
        ['aⁿ · aᵐ', 'aⁿ⁺ᵐ'],
        ['aⁿ : aᵐ', 'aⁿ⁻ᵐ'],
        ['(aⁿ)ᵐ', 'aⁿ·ᵐ'],
        ['aⁿ · bⁿ', '(a · b)ⁿ'],
        ['3√2 jako jeden pierwiastek', '√18'],
        ['√50', '5√2'],
        ['∛(−8)', '−2'],
        ['13²', '169'],
        ['15²', '225'],
      ],
      questions: [
        { id: '6wzc1p', q: 'Ile wynosi 2³ · 2⁴?', options: ['2⁷', '2¹²', '4⁷', '4¹²'], answer: 0, explain: 'Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki: 3 + 4 = 7.' },
        { id: 'uapfoj', q: 'Ile wynosi (3²)³?', options: ['3⁵', '3⁶', '9⁵', '3⁸'], answer: 1, explain: 'Potęgę potęgujemy, mnożąc wykładniki: 2 · 3 = 6.' },
        { id: 'icuhdb', q: 'Ile wynosi 2³ · 5³?', options: ['10³', '7³', '10⁶', '7⁶'], answer: 0, explain: 'Potęgi o jednakowych wykładnikach: aⁿ · bⁿ = (a · b)ⁿ.' },
        { id: 'okyctq', q: 'Między którymi kolejnymi liczbami całkowitymi leży √137?', options: ['10 i 11', '11 i 12', '12 i 13', '13 i 14'], answer: 1, explain: '11² = 121 < 137 < 144 = 12².' },
        { id: '2ad2t5', q: 'Liczbę 3√2 można zapisać jako…', options: ['√6', '√18', '√5', '√12'], answer: 1, explain: '3√2 = √9 · √2 = √18.' },
        { id: '26sjec', q: 'Liczba 3 400 000 w notacji wykładniczej to…', options: ['34 · 10⁵', '3,4 · 10⁶', '3,4 · 10⁵', '0,34 · 10⁷'], answer: 1, explain: 'Pierwszy czynnik musi być z przedziału [1, 10), a przecinek przesuwamy o 6 miejsc.' },
        { id: 'odngcv', q: 'Liczba 0,00052 w notacji wykładniczej to…', options: ['5,2 · 10⁻⁴', '5,2 · 10⁻³', '52 · 10⁻⁵', '5,2 · 10⁴'], answer: 0 },
        { id: '3f4fpi', q: 'Ile wynosi √(16 · 9)?', options: ['25', '12', '7', '144'], answer: 1, explain: '√16 · √9 = 4 · 3 = 12.' },
        { id: '4857pb', q: 'Ile wynosi √2 · √8?', options: ['√10', '4', '16', '2√2'], answer: 1, explain: '√2 · √8 = √16 = 4.' },
        { id: 'mj6ba1', q: 'Po wyłączeniu czynnika przed pierwiastek √50 = …', options: ['25√2', '5√2', '2√5', '10√5'], answer: 1, explain: '√50 = √(25 · 2) = 5√2.' },
        { id: '5a0fgu', q: 'Ile wynosi ∛(−27)?', options: ['−3', '3', '−9', 'nie istnieje'], answer: 0, explain: '(−3)³ = −27.' },
        { id: 'tvm0md', q: 'Ile wynosi 2⁵ : 2³?', options: ['2', '4', '8', '2⁸'], answer: 1, explain: '2⁵⁻³ = 2² = 4.' },
        { id: '7kjuu6', q: 'Ile wynosi (−2)³?', options: ['8', '−6', '6', '−8'], answer: 3, explain: '(−2) · (−2) · (−2) = −8. Nieparzysta potęga liczby ujemnej jest ujemna.' },
        { id: 'ubh44v', q: 'Ile wynosi 5² − 4²?', options: ['1', '81', '9', '3'], answer: 2, explain: '25 − 16 = 9.' },
        { id: 'qp9s2a', q: 'Ile wynosi √(25/36)?', options: ['25/6', '5/6', '5/36', '6/5'], answer: 1, explain: 'Pierwiastkujemy licznik i mianownik: √25 / √36 = 5/6.' },
        { id: '7et2vs', q: 'Ile wynosi ∛64?', options: ['4', '8', '6', '32'], answer: 0, explain: '4³ = 4 · 4 · 4 = 64.' },
        { id: 'bbmi8n', q: 'Liczba 4,5 · 10⁻³ zapisana bez potęgi to…', options: ['0,045', '4500', '0,0045', '0,00045'], answer: 2, explain: 'Wykładnik −3 oznacza przesunięcie przecinka o 3 miejsca w lewo.' },
        { id: '56ppn6', q: 'Ile wynosi 10⁴ · 10³?', options: ['10¹²', '10⁷', '100⁷', '20⁷'], answer: 1, explain: 'Dodajemy wykładniki: 4 + 3 = 7.' },
        { id: 'n3fby6', q: 'Która liczba jest większa od 7?', options: ['√50', '√48', '√49', '√45'], answer: 0, explain: '7 = √49, więc większy od 7 jest tylko pierwiastek z liczby większej niż 49.' },
        { id: '5bdfli', q: 'Ile wynosi √8 + √2?', options: ['√10', '4', '3√2', '2√2'], answer: 2, explain: '√8 = √(4 · 2) = 2√2, więc 2√2 + √2 = 3√2.' },
        { id: 'asbsra', q: 'Ile wynosi (2²)³ : 2⁴?', options: ['2', '8', '16', '4'], answer: 3, explain: '(2²)³ = 2⁶, a 2⁶ : 2⁴ = 2² = 4.' },
        {
          id: 'e06sqh',
          q: 'Kwadrat narysowano na kratkach o boku 1 cm (rysunek). Jaka jest długość boku tego kwadratu?',
          svg: `<svg viewBox="0 0 300 215" role="img" aria-label="Kwadrat o wierzchołkach w punktach kratowych na kratce 4 na 4. Każdy bok idzie o 3 kratki w jednym kierunku i o 1 kratkę w drugim">
      <polygon points="110,180 230,140 190,20 70,60" class="f1"/>
      <line x1="70" y1="180" x2="70" y2="20" class="ln-thin"/>
      <line x1="70" y1="180" x2="230" y2="180" class="ln-thin"/>
      <line x1="110" y1="180" x2="110" y2="20" class="ln-thin"/>
      <line x1="70" y1="140" x2="230" y2="140" class="ln-thin"/>
      <line x1="150" y1="180" x2="150" y2="20" class="ln-thin"/>
      <line x1="70" y1="100" x2="230" y2="100" class="ln-thin"/>
      <line x1="190" y1="180" x2="190" y2="20" class="ln-thin"/>
      <line x1="70" y1="60" x2="230" y2="60" class="ln-thin"/>
      <line x1="230" y1="180" x2="230" y2="20" class="ln-thin"/>
      <line x1="70" y1="20" x2="230" y2="20" class="ln-thin"/>
      <polygon points="110,180 230,140 190,20 70,60" class="ln s1 sw"/>
      <line x1="70" y1="190" x2="110" y2="190" class="ln-thin"/>
      <text x="90" y="206" class="tx-s" text-anchor="middle">1 cm</text>
    </svg>`,
          options: ['√10 cm', '4 cm', '10 cm', '√8 cm'],
          answer: 0,
          explain: 'Każdy bok jest przeciwprostokątną trójkąta prostokątnego o przyprostokątnych 3 cm i 1 cm: √(3² + 1²) = √10 cm.',
        },
        {
          id: 'dcguk3',
          q: 'Na osi liczbowej pogrubiono odcinek. Która z liczb leży na tym odcinku?',
          svg: `<svg viewBox="0 0 370 90" role="img" aria-label="Oś liczbowa od 0 do 6 z pogrubionym odcinkiem od 4 do 5">
      <line x1="14" y1="40" x2="360" y2="40" class="ln"/>
      <polyline points="351,35 360,40 351,45" class="ln"/>
      <line x1="30" y1="35" x2="30" y2="45" class="ln"/>
      <text x="30" y="66" class="tx" text-anchor="middle">0</text>
      <line x1="80" y1="35" x2="80" y2="45" class="ln"/>
      <text x="80" y="66" class="tx" text-anchor="middle">1</text>
      <line x1="130" y1="35" x2="130" y2="45" class="ln"/>
      <text x="130" y="66" class="tx" text-anchor="middle">2</text>
      <line x1="180" y1="35" x2="180" y2="45" class="ln"/>
      <text x="180" y="66" class="tx" text-anchor="middle">3</text>
      <line x1="230" y1="35" x2="230" y2="45" class="ln"/>
      <text x="230" y="66" class="tx" text-anchor="middle">4</text>
      <line x1="280" y1="35" x2="280" y2="45" class="ln"/>
      <text x="280" y="66" class="tx" text-anchor="middle">5</text>
      <line x1="330" y1="35" x2="330" y2="45" class="ln"/>
      <text x="330" y="66" class="tx" text-anchor="middle">6</text>
      <line x1="230" y1="40" x2="280" y2="40" class="ln s1 sw"/>
      <circle cx="230" cy="40" r="5" class="t1"/>
      <circle cx="280" cy="40" r="5" class="t1"/>
    </svg>`,
          options: ['√20', '√15', '√26', '√30'],
          answer: 0,
          explain: '4 = √16 i 5 = √25, więc na odcinku leżą pierwiastki z liczb od 16 do 25. Z podanych to tylko √20.',
        },
      ],
      tasks: [
        {
          id: '72ynk9',
          points: 2,
          q: 'Uzasadnij, że liczba 2¹⁰ + 2¹¹ + 2¹² jest podzielna przez 7.',
          steps: [
            'Zapisz każdy składnik przy użyciu 2¹⁰: 2¹¹ = 2¹⁰ · 2, 2¹² = 2¹⁰ · 4.',
            'Wyłącz wspólny czynnik: 2¹⁰ + 2¹⁰ · 2 + 2¹⁰ · 4 = 2¹⁰ · (1 + 2 + 4) = 2¹⁰ · 7.',
            'Liczba jest iloczynem liczby 7 i liczby naturalnej 2¹⁰, więc dzieli się przez 7.',
          ],
          answer: '2¹⁰ + 2¹¹ + 2¹² = 7 · 2¹⁰',
          scoring: [
            '1 pkt – zapisanie składników jako iloczynów z 2¹⁰ albo wyłączenie wspólnego czynnika.',
            '2 pkt – zapis 7 · 2¹⁰ i wniosek o podzielności przez 7.',
          ],
        },
        {
          id: '6pg3et',
          points: 2,
          q: 'Oblicz (4 · 10⁵) · (3 · 10⁻²). Wynik zapisz w notacji wykładniczej.',
          steps: [
            'Pomnóż osobno liczby i potęgi dziesiątki: 4 · 3 = 12, 10⁵ · 10⁻² = 10³.',
            'Wynik 12 · 10³ nie jest w notacji wykładniczej, bo 12 ≥ 10. Zapisz 12 = 1,2 · 10.',
            '1,2 · 10 · 10³ = 1,2 · 10⁴.',
          ],
          answer: '1,2 · 10⁴',
          scoring: [
            '1 pkt – poprawny iloczyn 12 · 10³ (lub 12 000).',
            '2 pkt – zapis w notacji wykładniczej: 1,2 · 10⁴.',
          ],
        },
        {
          id: 'e9h76d',
          points: 2,
          q: 'Kwadrat ma pole 72 cm². Oblicz długość jego przekątnej.',
          steps: [
            'Bok kwadratu: a² = 72, więc a = √72 = √(36 · 2) = 6√2 cm.',
            'Przekątna kwadratu: d = a√2 = 6√2 · √2 = 6 · 2 = 12 cm.',
            'Sprawdzenie: pole kwadratu to też d²/2 = 144/2 = 72 cm².',
          ],
          answer: '12 cm',
          scoring: [
            '1 pkt – obliczenie boku kwadratu a = 6√2 cm (albo zapisanie równania d²/2 = 72).',
            '2 pkt – przekątna: 12 cm.',
          ],
        },
        {
          id: '3i937y',
          points: 2,
          q: 'Która z liczb jest większa: 2⁴⁰ czy 3²⁴? Uzasadnij odpowiedź bez obliczania wartości tych potęg.',
          steps: [
            'Zapisz obie liczby jako potęgi o tym samym wykładniku. 2⁴⁰ = (2⁵)⁸ = 32⁸, bo 5 · 8 = 40.',
            '3²⁴ = (3³)⁸ = 27⁸, bo 3 · 8 = 24.',
            'Obie potęgi mają wykładnik 8, a 32 > 27, więc 32⁸ > 27⁸, czyli 2⁴⁰ > 3²⁴.',
          ],
          answer: '2⁴⁰ > 3²⁴',
          scoring: [
            '1 pkt – zapisanie obu liczb jako potęg o tym samym wykładniku: 32⁸ i 27⁸.',
            '2 pkt – porównanie podstaw i wniosek 2⁴⁰ > 3²⁴.',
          ],
        },
      ],
    },
    {
      id: 'algebra',
      name: 'Wyrażenia algebraiczne i równania',
      basis: 'Informator CKE (matematyka) – kl. VII–VIII: IV. Przekształcanie wyrażeń algebraicznych. Sumy algebraiczne i działania na nich; VI. Równania z jedną niewiadomą; XIV. Zadania tekstowe.',
      theory: `
        <h3>Wyrażenia algebraiczne</h3>
        <ul>
          <li><b>Redukcja wyrazów podobnych</b>: 3a + 2b − a + 4b = 2a + 6b</li>
          <li><b>Mnożenie sumy przez liczbę</b>: 2(x + 3) = 2x + 6</li>
          <li><b>Minus przed nawiasem</b> zmienia znaki: −(x − 4) = −x + 4</li>
          <li><b>Mnożenie sum</b>: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6</li>
        </ul>
        <h3>Rozwiązywanie równań</h3>
        <ol>
          <li>Pozbądź się nawiasów i ułamków (pomnóż obie strony przez mianownik).</li>
          <li>Niewiadome na jedną stronę, liczby na drugą (przenosząc – zmieniamy znak).</li>
          <li>Podziel obie strony przez współczynnik przy x.</li>
          <li>Sprawdź wynik, podstawiając go do równania!</li>
        </ol>
        <p>Przykład: <span class="f">2(x + 3) = x − 1</span> → 2x + 6 = x − 1 → x = −7</p>
        <h3>Przekształcanie wzorów</h3>
        <p>Z <span class="f">P = a · h / 2</span> wyznaczamy h: mnożymy przez 2 → 2P = a · h → <span class="f">h = 2P / a</span></p>
      `,
      flashcards: [
        ['3x − 7 = 11', 'x = 6'],
        ['(x + 2)(x + 3)', 'x² + 5x + 6'],
        ['−(x − 4)', '−x + 4'],
        ['P = a·h/2 → h = ?', 'h = 2P/a'],
        ['Trzy kolejne liczby naturalne', 'n, n + 1, n + 2'],
        ['Liczba parzysta / nieparzysta', '2n / 2n + 1'],
      ],
      questions: [
        { id: 'zrk5pu', q: 'Rozwiązaniem równania 3x − 7 = 11 jest…', options: ['x = 6', 'x = 4/3', 'x = 18', 'x = −6'], answer: 0, explain: '3x = 18, więc x = 6.' },
        { id: 't7hw5x', q: 'Rozwiązaniem równania 2(x + 3) = x − 1 jest…', options: ['x = 7', 'x = −7', 'x = −4', 'x = 2'], answer: 1, explain: '2x + 6 = x − 1 → x = −7.' },
        { id: '0fh14w', q: 'Rozwiązaniem równania x/3 + 2 = 5 jest…', options: ['x = 1', 'x = 9', 'x = 21', 'x = 3'], answer: 1, explain: 'x/3 = 3, więc x = 9.' },
        { id: 'p41g4y', q: 'Po redukcji wyrazów podobnych 3a + 2b − a + 4b = …', options: ['2a + 6b', '4a + 6b', '8ab', '2a + 2b'], answer: 0 },
        { id: '2mluhx', q: 'Iloczyn (x + 2)(x + 3) jest równy…', options: ['x² + 6', 'x² + 5x + 6', 'x² + 6x + 5', '2x + 5'], answer: 1 },
        { id: 'fu8swh', q: 'Wartość wyrażenia 2x² − 3x dla x = −2 wynosi…', options: ['2', '14', '−2', '−14'], answer: 1, explain: '2 · (−2)² − 3 · (−2) = 2 · 4 + 6 = 14.' },
        { id: 'zxjgsj', q: 'Ze wzoru P = a · h / 2 wyznacz h.', options: ['h = 2P/a', 'h = P/2a', 'h = 2a/P', 'h = P − a/2'], answer: 0 },
        { id: 'ous7cg', q: 'Suma trzech kolejnych liczb naturalnych wynosi 48. Najmniejsza z nich to…', options: ['14', '15', '16', '17'], answer: 1, explain: 'n + (n + 1) + (n + 2) = 48 → 3n + 3 = 48 → n = 15.' },
        { id: 'uq5wfd', q: 'Wyrażenie −(2x − 5) jest równe…', options: ['−2x − 5', '−2x + 5', '2x + 5', '2x − 5'], answer: 1, explain: 'Minus przed nawiasem zmienia znak każdego wyrazu.' },
        { id: 'uxcywp', q: 'Ola ma x lat, a jej mama jest 3 razy starsza. Za 5 lat suma ich wieku wyniesie 58. Ile lat ma Ola?', options: ['10', '12', '13', '16'], answer: 1, explain: '(x + 5) + (3x + 5) = 58 → 4x + 10 = 58 → x = 12.' },
        { id: 'ek06uo', q: 'Rozwiązaniem równania 5x + 3 = 2x − 9 jest…', options: ['x = 4', 'x = −2', 'x = 2', 'x = −4'], answer: 3, explain: '5x − 2x = −9 − 3 → 3x = −12 → x = −4.' },
        { id: 'y6wi7h', q: 'Iloczyn (x − 3)(x + 2) jest równy…', options: ['x² − x − 6', 'x² + x − 6', 'x² − 6', 'x² − 5x − 6'], answer: 0, explain: 'x² + 2x − 3x − 6 = x² − x − 6.' },
        { id: '83h6zk', q: 'Wyrażenie 3(2a − 1) − 2(a + 4) po uproszczeniu to…', options: ['4a + 5', '4a − 11', '4a − 5', '8a − 11'], answer: 1, explain: '6a − 3 − 2a − 8 = 4a − 11. Minus przed nawiasem zmienia znaki obu wyrazów.' },
        { id: 'k43kt8', q: 'Ze wzoru V = a · b · c wyznacz c.', options: ['c = V · a · b', 'c = V / (a · b)', 'c = (a · b) / V', 'c = V − a · b'], answer: 1, explain: 'Dzielimy obie strony przez a · b.' },
        { id: 'l935g1', q: 'Rozwiązaniem równania (2x − 1)/3 = 5 jest…', options: ['x = 3', 'x = 7', 'x = 8', 'x = 2'], answer: 2, explain: 'Mnożymy przez 3: 2x − 1 = 15 → 2x = 16 → x = 8.' },
        { id: 'dbvtx3', q: 'Wartość wyrażenia a² − 2ab dla a = 3 i b = −1 wynosi…', options: ['15', '3', '−3', '12'], answer: 0, explain: '3² − 2 · 3 · (−1) = 9 + 6 = 15.' },
        { id: '8m9c2o', q: 'Liczbę o 5 większą od podwojonej liczby x zapiszesz jako…', options: ['2(x + 5)', '5x + 2', '2x − 5', '2x + 5'], answer: 3, explain: 'Najpierw podwajamy x (2x), potem dodajemy 5.' },
        { id: 'yjjxfv', q: 'Za 3 zeszyty i 2 długopisy zapłacono 17 zł. Długopis kosztuje 4 zł. Ile kosztuje jeden zeszyt?', options: ['4 zł', '2 zł', '3 zł', '5 zł'], answer: 2, explain: '3z + 2 · 4 = 17 → 3z = 9 → z = 3 zł.' },
        { id: '5bi67x', q: 'Obwód prostokąta wynosi 30 cm, a jeden bok jest o 3 cm dłuższy od drugiego. Ile ma krótszy bok?', options: ['7,5 cm', '9 cm', '6 cm', '12 cm'], answer: 2, explain: '2(x + x + 3) = 30 → 2x + 3 = 15 → x = 6. Boki: 6 cm i 9 cm.' },
        { id: '4a43so', q: 'Prawda czy fałsz?\nLiczba 2 jest rozwiązaniem równania 3x − 1 = 2x + 1.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Podstawiamy: 3 · 2 − 1 = 5 i 2 · 2 + 1 = 5 – obie strony są równe.' },
        {
          id: 'tocpjk',
          q: 'Obwód prostokąta z rysunku jest równy 26. Ile wynosi x?',
          svg: `<svg viewBox="0 0 320 170" role="img" aria-label="Prostokąt o bokach x oraz x + 3">
      <rect x="60" y="25" width="200" height="110" class="f1 s1 sw"/>
      <text x="160" y="158" class="tx-b" text-anchor="middle">x + 3</text>
      <text x="270" y="86" class="tx-b">x</text>
    </svg>`,
          options: ['5', '6,5', '10', '4'],
          answer: 0,
          explain: '2 · (x + x + 3) = 26 → 4x + 6 = 26 → 4x = 20 → x = 5. Sprawdzenie: 2 · (5 + 8) = 26.',
        },
        {
          id: 'm5m1cp',
          q: 'Na rysunku przedstawiono figurę, której wszystkie kąty są proste. Dokończ zdanie: obwód tej figury jest równy …, a jej pole jest równe …',
          svg: `<svg viewBox="0 0 330 200" role="img" aria-label="Figura w kształcie litery L: prostokąt 3a na 2a, z którego wycięto w prawym górnym rogu kwadrat o boku a">
      <polygon points="70,30 190,30 190,90 250,90 250,150 70,150" class="f3 s3 sw"/>
      <text x="160" y="174" class="tx-b" text-anchor="middle">3a</text>
      <text x="60" y="96" class="tx-b" text-anchor="end">2a</text>
      <text x="130" y="22" class="tx-b" text-anchor="middle">2a</text>
      <text x="180" y="66" class="tx-b" text-anchor="end">a</text>
      <text x="220" y="80" class="tx-b" text-anchor="middle">a</text>
      <text x="260" y="126" class="tx-b">a</text>
    </svg>`,
          options: ['10a i 5a²', '8a i 5a²', '10a i 6a²', '12a i 5a²'],
          answer: 0,
          explain: 'Obwód: 3a + 2a + 2a + a + a + a = 10a (tyle samo co obwód prostokąta 3a × 2a). Pole: 3a · 2a − a · a = 6a² − a² = 5a².',
        },
      ],
      tasks: [
        {
          id: '2jyl97',
          points: 2,
          q: 'Bartek i Grześ zbierali kasztany. Bartek zebrał n kasztanów, a Grześ – 7 razy więcej. W drodze do domu Grześ zgubił 10 kasztanów, a połowę pozostałych oddał Bartkowi. Zapisz za pomocą wyrażeń algebraicznych, ile kasztanów ma teraz Bartek, a ile Grześ.',
          steps: [
            'Grześ zebrał 7n kasztanów, po zgubieniu 10 miał 7n − 10.',
            'Połowę oddał: oddał (7n − 10)/2 i tyle samo mu zostało. Grześ ma (7n − 10)/2.',
            'Bartek ma n + (7n − 10)/2 = (2n + 7n − 10)/2 = (9n − 10)/2.',
          ],
          answer: 'Bartek: (9n − 10)/2, Grześ: (7n − 10)/2 (np. dla n = 10: Bartek 40, Grześ 30).',
          scoring: [
            '1 pkt – poprawne wyrażenie dla jednego z chłopców.',
            '2 pkt – poprawne wyrażenia dla obu.',
          ],
        },
        {
          id: 'e185ac',
          points: 3,
          q: 'Za 2 kg jabłek i 3 kg gruszek zapłacono 23 zł. Kilogram gruszek jest o 1,50 zł droższy od kilograma jabłek. Ile kosztuje kilogram jabłek?',
          steps: [
            'Oznacz cenę kilograma jabłek przez x. Kilogram gruszek kosztuje x + 1,5.',
            'Równanie: 2x + 3(x + 1,5) = 23.',
            '2x + 3x + 4,5 = 23 → 5x = 18,5 → x = 3,7.',
            'Sprawdzenie: 2 · 3,70 + 3 · 5,20 = 7,40 + 15,60 = 23 zł ✓.',
          ],
          answer: '3,70 zł',
          scoring: [
            '1 pkt – oznaczenie niewiadomej i zapisanie ceny gruszek: x + 1,5.',
            '2 pkt – poprawne równanie 2x + 3(x + 1,5) = 23.',
            '3 pkt – rozwiązanie: 3,70 zł.',
          ],
        },
        {
          id: '4pq3ff',
          points: 2,
          q: 'Rozwiąż równanie (x − 2)/3 − (x + 1)/2 = 1.',
          steps: [
            'Pomnóż obie strony przez 6 (wspólny mianownik): 2(x − 2) − 3(x + 1) = 6.',
            'Opuść nawiasy (uwaga na minus przed drugim nawiasem): 2x − 4 − 3x − 3 = 6.',
            '−x − 7 = 6 → −x = 13 → x = −13.',
            'Sprawdzenie: (−15)/3 − (−12)/2 = −5 + 6 = 1 ✓.',
          ],
          answer: 'x = −13',
          scoring: [
            '1 pkt – pozbycie się ułamków i poprawne opuszczenie nawiasów.',
            '2 pkt – rozwiązanie x = −13.',
          ],
        },
      ],
    },
    {
      id: 'geometria',
      name: 'Geometria płaska',
      basis: 'Informator CKE (matematyka) – kl. IV–VI: IX. Wielokąty, koła i okręgi (w tym osie symetrii figur); kl. VII–VIII: XI. Obliczenia w geometrii (m.in. twierdzenie Pitagorasa).',
      theory: `
        <h3>Twierdzenie Pitagorasa</h3>
        <p>W trójkącie prostokątnym: <span class="f">a² + b² = c²</span> (c – przeciwprostokątna, naprzeciw kąta prostego).</p>
        <p>Trójki pitagorejskie: 3, 4, 5 · 6, 8, 10 · 5, 12, 13</p>
        <h3>Ważne wzory</h3>
        <table>
          <tr><th>Figura</th><th>Pole</th></tr>
          <tr><td>prostokąt</td><td>a · b</td></tr>
          <tr><td>kwadrat</td><td>a² (lub d²/2)</td></tr>
          <tr><td>trójkąt</td><td>a · h / 2</td></tr>
          <tr><td>trójkąt równoboczny</td><td>a²√3 / 4 (wysokość h = a√3 / 2)</td></tr>
          <tr><td>równoległobok</td><td>a · h</td></tr>
          <tr><td>romb</td><td>d₁ · d₂ / 2</td></tr>
          <tr><td>trapez</td><td>(a + b) · h / 2</td></tr>
          <tr><td>koło</td><td>πr² (obwód 2πr)</td></tr>
        </table>
        <p>Przekątna kwadratu: <span class="f">d = a√2</span></p>
        <h3>Symetria osiowa figur</h3>
        <p>Figura jest <b>osiowosymetryczna</b>, gdy da się ją złożyć wzdłuż prostej (osi symetrii) tak, że obie połowy się pokrywają.</p>
        <table>
          <tr><th>Figura</th><th>Liczba osi symetrii</th></tr>
          <tr><td>kwadrat</td><td>4</td></tr>
          <tr><td>prostokąt (niebędący kwadratem)</td><td>2</td></tr>
          <tr><td>romb (niebędący kwadratem)</td><td>2</td></tr>
          <tr><td>trójkąt równoboczny</td><td>3</td></tr>
          <tr><td>trójkąt równoramienny (niebędący równobocznym)</td><td>1</td></tr>
          <tr><td>trapez równoramienny</td><td>1</td></tr>
          <tr><td>równoległobok (niebędący prostokątem ani rombem)</td><td>0</td></tr>
          <tr><td>koło, okrąg</td><td>nieskończenie wiele</td></tr>
        </table>
        <h3>Kąty</h3>
        <ul>
          <li>Suma kątów w trójkącie = 180°, w czworokącie = 360°.</li>
          <li>Kąty przyległe sumują się do 180°, kąty wierzchołkowe są równe.</li>
          <li>Gdy prosta przecina dwie proste równoległe: kąty <b>odpowiadające</b> są równe i kąty <b>naprzemianległe</b> są równe.</li>
          <li>W trójkącie równoramiennym kąty przy podstawie są równe.</li>
        </ul>
        <h3>Nierówność trójkąta</h3>
        <p>Z odcinków a, b, c da się zbudować trójkąt, gdy każdy z nich jest <b>krótszy od sumy dwóch pozostałych</b>. Np. 3, 4, 8 – nie (3 + 4 &lt; 8).</p>
        <p><b>Wielokąt foremny</b> ma wszystkie boki równe i wszystkie kąty równe (np. kwadrat, trójkąt równoboczny).</p>
        <ul>
          <li>W równoległoboku sąsiednie kąty sumują się do 180°.</li>
        </ul>
      `,
      flashcards: [
        ['Twierdzenie Pitagorasa', 'a² + b² = c²'],
        ['Przekątna kwadratu', 'a√2'],
        ['Wysokość trójkąta równobocznego', 'a√3 / 2'],
        ['Pole trójkąta równobocznego', 'a²√3 / 4'],
        ['Pole trapezu', '(a + b) · h / 2'],
        ['Pole rombu', 'd₁ · d₂ / 2'],
        ['Pole koła / obwód okręgu', 'πr² / 2πr'],
        ['Nierówność trójkąta', 'Każdy bok krótszy od sumy dwóch pozostałych'],
        ['Proste równoległe przecięte prostą', 'Kąty odpowiadające i naprzemianległe są równe'],
        ['Osie symetrii: kwadrat / prostokąt / trójkąt równoboczny', '4 / 2 / 3'],
      ],
      questions: [
        { id: 'xstv70', q: 'Przyprostokątne trójkąta mają długości 6 i 8. Przeciwprostokątna ma długość…', options: ['10', '14', '12', '√28'], answer: 0, explain: '6² + 8² = 36 + 64 = 100, √100 = 10.' },
        { id: 'y84ux4', q: 'Przeciwprostokątna ma 13 cm, jedna przyprostokątna 5 cm. Druga przyprostokątna ma…', options: ['8 cm', '12 cm', '18 cm', '√194 cm'], answer: 1, explain: '13² − 5² = 169 − 25 = 144, √144 = 12.' },
        { id: 'uo304c', q: 'Przekątna kwadratu o boku 5 ma długość…', options: ['10', '5√2', '25', '5√3'], answer: 1 },
        { id: 'cra2ro', q: 'Wysokość trójkąta równobocznego o boku 6 wynosi…', options: ['3', '3√3', '6√3', '3√2'], answer: 1, explain: 'h = a√3/2 = 6√3/2 = 3√3.' },
        { id: 'my48zb', q: 'Pole trójkąta równobocznego o boku 4 wynosi…', options: ['4√3', '8√3', '16', '2√3'], answer: 0, explain: 'P = a²√3/4 = 16√3/4 = 4√3.' },
        { id: 'ak6vai', q: 'Trapez ma podstawy 10 i 6 oraz wysokość 4. Jego pole wynosi…', options: ['64', '32', '40', '20'], answer: 1, explain: '(10 + 6) · 4 / 2 = 32.' },
        { id: 'wp5kle', q: 'Pole koła o promieniu 3 wynosi…', options: ['6π', '9π', '3π', '9'], answer: 1 },
        { id: 'cyflha', q: 'Jeden kąt równoległoboku ma 70°. Kąt sąsiedni ma…', options: ['70°', '110°', '20°', '290°'], answer: 1, explain: 'Sąsiednie kąty równoległoboku sumują się do 180°.' },
        { id: '5ab61j', q: 'Z których odcinków NIE da się zbudować trójkąta?', options: ['3, 4, 5', '5, 5, 8', '3, 4, 8', '6, 6, 6'], answer: 2, explain: '3 + 4 = 7 < 8 – nierówność trójkąta nie jest spełniona.' },
        { id: 'hmqhbg', q: 'W trójkącie równoramiennym kąt między ramionami ma 40°. Ile mają kąty przy podstawie?', options: ['40°', '70°', '140°', '50°'], answer: 1, explain: '(180° − 40°) : 2 = 70°.' },
        { id: 'hb4ttp', q: 'Romb ma przekątne 6 i 8. Jego pole wynosi…', options: ['48', '24', '14', '12'], answer: 1, explain: '6 · 8 / 2 = 24.' },
        { id: '2jhtvm', q: 'Prawda czy fałsz?\nSuma kątów wewnętrznych każdego czworokąta wynosi 360°.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
        { id: 'ybo44d', q: 'Ile osi symetrii ma kwadrat?', options: ['1', '2', '4', '8'], answer: 2 },
        { id: '0cn4wl', q: 'Która figura NIE ma żadnej osi symetrii?', options: ['prostokąt', 'romb', 'równoległobok, który nie jest prostokątem ani rombem', 'trapez równoramienny'], answer: 2 },
        { id: 'w7flg0', q: 'Prawda czy fałsz?\nTrójkąt równoboczny ma 3 osie symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
        { id: 'ipwaex', q: 'W trójkącie dwa kąty mają 50° i 60°. Trzeci kąt ma…', options: ['70°', '80°', '90°', '110°'], answer: 0 },
        { id: 'txutan', q: 'Przekątna kwadratu ma długość 6. Pole tego kwadratu wynosi…', options: ['18', '36', '12', '9'], answer: 0, explain: 'P = d²/2 = 36/2 = 18.' },
        { id: 'n72hne', q: 'Długość okręgu o promieniu 5 wynosi…', options: ['10π', '25π', '5π', '10'], answer: 0, explain: 'L = 2πr = 2 · π · 5 = 10π.' },
        { id: 'm4hiv1', q: 'Jeden z kątów przyległych ma 65°. Ile ma drugi?', options: ['65°', '115°', '25°', '295°'], answer: 1, explain: 'Kąty przyległe sumują się do 180°: 180° − 65° = 115°.' },
        { id: 'uw71bv', q: 'Trójkąt prostokątny ma przyprostokątne 5 i 12. Jego pole wynosi…', options: ['60', '17', '30', '13'], answer: 2, explain: 'Przyprostokątne są do siebie prostopadłe, więc P = 5 · 12 / 2 = 30.' },
        { id: 'gdyvka', q: 'Równoległobok ma bok 8 i wysokość opuszczoną na ten bok 5. Jego pole wynosi…', options: ['20', '26', '13', '40'], answer: 3, explain: 'P = a · h = 8 · 5 = 40.' },
        { id: 'db4gkk', q: 'Ile osi symetrii ma trójkąt równoramienny, który nie jest równoboczny?', options: ['0', '1', '2', '3'], answer: 1 },
        { id: 'cypuel', q: 'Prosta przecina dwie proste równoległe. Jeden z utworzonych kątów ma 48°. Ile ma kąt do niego odpowiadający?', options: ['132°', '48°', '42°', '96°'], answer: 1, explain: 'Kąty odpowiadające przy prostych równoległych są równe.' },
        { id: 'j3jkz9', q: 'Okrąg ma długość 12π. Jakie jest pole koła ograniczonego tym okręgiem?', options: ['144π', '36π', '12π', '6π'], answer: 1, explain: '2πr = 12π, więc r = 6, a P = πr² = 36π.' },
        { id: 'k7160s', q: 'Prawda czy fałsz?\nKażdy romb ma 4 osie symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Tylko romb, który jest kwadratem, ma 4 osie. Pozostałe romby mają 2 osie symetrii.' },
        {
          id: 'xhng12',
          q: 'Trapez prostokątny ma wymiary podane na rysunku. Ile wynosi długość ramienia oznaczonego literą x?',
          svg: `<svg viewBox="0 0 300 205" role="img" aria-label="Trapez prostokątny: dolna podstawa 10, górna podstawa 4, ramię prostopadłe do podstaw 8, ukośne ramię x">
      <polygon points="60,175 220,175 124,47 60,47" class="f1 s1 sw"/>
      <polyline points="60,161 74,161 74,175" class="ln-thin"/>
      <polyline points="60,61 74,61 74,47" class="ln-thin"/>
      <text x="140" y="197" class="tx-b" text-anchor="middle">10</text>
      <text x="92" y="37" class="tx-b" text-anchor="middle">4</text>
      <text x="50" y="117" class="tx-b" text-anchor="end">8</text>
      <text x="186" y="111" class="tx-b t1">x</text>
    </svg>`,
          options: ['10', '8', '14', '6'],
          answer: 0,
          explain: 'Wysokość poprowadzona z górnego wierzchołka odcina trójkąt prostokątny o przyprostokątnych 8 i 10 − 4 = 6. x = √(6² + 8²) = √100 = 10.',
        },
        {
          id: '62oz5z',
          q: 'Bok AC trójkąta ABC przedłużono poza wierzchołek C. Miary kątów zaznaczono na rysunku. Ile stopni ma kąt ABC?',
          svg: `<svg viewBox="0 0 340 200" role="img" aria-label="Trójkąt ABC z kątem 50 stopni przy wierzchołku A. Bok AC przedłużony poza C; kąt zewnętrzny przy C ma 120 stopni">
      <polygon points="40,170 240,170 158.5,28.8" class="f1 s1 sw"/>
      <line x1="240" y1="170" x2="330" y2="170" class="ln"/>
      <path d="M70,170 A30,30 0 0 0 59.3,147" class="ln s2"/>
      <path d="M264,170 A24,24 0 0 0 228,149.2" class="ln s2"/>
      <text x="87.1" y="154" class="tx t2" text-anchor="middle">50°</text>
      <text x="262" y="137.9" class="tx t2" text-anchor="middle">120°</text>
      <text x="158.5" y="64.8" class="tx-b" text-anchor="middle">?</text>
      <text x="34" y="192" class="tx-b" text-anchor="middle">A</text>
      <text x="240" y="192" class="tx-b" text-anchor="middle">C</text>
      <text x="158.5" y="20.8" class="tx-b" text-anchor="middle">B</text>
    </svg>`,
          options: ['70°', '60°', '50°', '80°'],
          answer: 0,
          explain: 'Kąt wewnętrzny przy C: 180° − 120° = 60° (kąty przyległe). ∠ABC = 180° − 50° − 60° = 70°.',
        },
        {
          id: 'pfrknm',
          q: 'Na kratkach o boku 1 cm narysowano trójkąt ABC (rysunek). Jakie jest pole tego trójkąta?',
          svg: `<svg viewBox="0 0 340 200" role="img" aria-label="Trójkąt ABC na kratkach: bok AB poziomy o długości 4 kratek, wierzchołek C 3 kratki wyżej i 3 kratki na prawo od B">
      <polygon points="26,164 170,164 278,56" class="f2"/>
      <line x1="26" y1="164" x2="26" y2="20" class="ln-thin"/>
      <line x1="62" y1="164" x2="62" y2="20" class="ln-thin"/>
      <line x1="98" y1="164" x2="98" y2="20" class="ln-thin"/>
      <line x1="134" y1="164" x2="134" y2="20" class="ln-thin"/>
      <line x1="170" y1="164" x2="170" y2="20" class="ln-thin"/>
      <line x1="206" y1="164" x2="206" y2="20" class="ln-thin"/>
      <line x1="242" y1="164" x2="242" y2="20" class="ln-thin"/>
      <line x1="278" y1="164" x2="278" y2="20" class="ln-thin"/>
      <line x1="314" y1="164" x2="314" y2="20" class="ln-thin"/>
      <line x1="26" y1="164" x2="314" y2="164" class="ln-thin"/>
      <line x1="26" y1="128" x2="314" y2="128" class="ln-thin"/>
      <line x1="26" y1="92" x2="314" y2="92" class="ln-thin"/>
      <line x1="26" y1="56" x2="314" y2="56" class="ln-thin"/>
      <line x1="26" y1="20" x2="314" y2="20" class="ln-thin"/>
      <polygon points="26,164 170,164 278,56" class="ln s2 sw"/>
      <text x="28" y="184" class="tx-b">A</text>
      <text x="170" y="184" class="tx-b" text-anchor="middle">B</text>
      <text x="286" y="50" class="tx-b">C</text>
      <line x1="242" y1="192" x2="278" y2="192" class="ln-thin"/>
      <text x="260" y="188" class="tx-s" text-anchor="middle">1 cm</text>
    </svg>`,
          options: ['6 cm²', '10,5 cm²', '12 cm²', '7,5 cm²'],
          answer: 0,
          explain: 'Podstawa AB = 4 cm. Wysokość opuszczona z C na prostą AB (poza trójkątem) ma 3 cm. P = 4 · 3 / 2 = 6 cm².',
        },
      ],
      tasks: [
        {
          id: 'fi22ti',
          points: 2,
          q: 'Oblicz najkrótszą wysokość trójkąta prostokątnego o bokach długości 5 cm, 12 cm i 13 cm.',
          steps: [
            'Pole liczymy z przyprostokątnych: P = 5 · 12 / 2 = 30 cm².',
            'Najkrótsza wysokość jest opuszczona na najdłuższy bok, czyli na przeciwprostokątną (13 cm).',
            '13 · h / 2 = 30 → h = 60/13 cm = 4 8/13 cm.',
          ],
          answer: '60/13 cm (ok. 4,6 cm)',
          scoring: [
            '1 pkt – obliczenie pola (30 cm²) i zapisanie zależności 13 · h / 2 = 30.',
            '2 pkt – wynik h = 60/13 cm.',
          ],
        },
        {
          id: 'sg57ne',
          points: 2,
          q: 'Drabina o długości 2,5 m jest oparta o pionową ścianę. Jej dolny koniec stoi na poziomej podłodze 0,7 m od ściany. Na jakiej wysokości górny koniec drabiny dotyka ściany?',
          steps: [
            'Drabina, ściana i podłoga tworzą trójkąt prostokątny. Drabina to przeciwprostokątna (2,5 m).',
            'Z twierdzenia Pitagorasa: h² + 0,7² = 2,5², czyli h² = 6,25 − 0,49 = 5,76.',
            'h = √5,76 = 2,4 m.',
          ],
          answer: '2,4 m',
          scoring: [
            '1 pkt – poprawne zastosowanie twierdzenia Pitagorasa: h² = 2,5² − 0,7².',
            '2 pkt – wynik 2,4 m.',
          ],
        },
        {
          id: '4htvjy',
          points: 3,
          q: 'Przekątne rombu ABCD mają długości AC = 8 dm i BD = 10 dm. Przekątną BD przedłużono do punktu E w taki sposób, że odcinek BE jest dwa razy dłuższy od tej przekątnej. Oblicz pole trójkąta CDE. (Zadanie ma dwie odpowiedzi.)',
          steps: [
            'Przekątne rombu są prostopadłe i dzielą się na połowy. Odległość punktu C od prostej BD to połowa AC: 4 dm.',
            'BE = 2 · 10 = 20 dm. Punkt E może leżeć za punktem D – wtedy DE = 20 − 10 = 10 dm – albo za punktem B – wtedy DE = 20 + 10 = 30 dm.',
            'Trójkąt CDE ma podstawę DE na prostej BD i wysokość 4 dm.',
            'P = 10 · 4 / 2 = 20 dm² albo P = 30 · 4 / 2 = 60 dm².',
          ],
          answer: '20 dm² lub 60 dm²',
          scoring: [
            '1 pkt – zauważenie, że wysokość trójkąta CDE to połowa przekątnej AC (4 dm).',
            '2 pkt – obliczenie pola dla jednego położenia punktu E.',
            '3 pkt – obie odpowiedzi: 20 dm² i 60 dm².',
          ],
        },
        {
          id: '46bems',
          points: 3,
          q: 'Działka ma kształt trapezu prostokątnego o podstawach 30 m i 18 m. Dłuższe ramię tego trapezu ma 20 m (rysunek). Oblicz pole działki.',
          svg: `<svg viewBox="0 0 320 210" role="img" aria-label="Trapez prostokątny: dolna podstawa 30 m, górna 18 m, ukośne ramię 20 m, wysokość h nieznana">
      <polygon points="50,180 260,180 176,68 50,68" class="f3 s3 sw"/>
      <line x1="176" y1="68" x2="176" y2="180" class="ln dash"/>
      <polyline points="50,168 62,168 62,180" class="ln-thin"/>
      <polyline points="50,80 62,80 62,68" class="ln-thin"/>
      <text x="155" y="202" class="tx-b" text-anchor="middle">30 m</text>
      <text x="113" y="58" class="tx-b" text-anchor="middle">18 m</text>
      <text x="232" y="124" class="tx-b">20 m</text>
      <text x="42" y="130" class="tx-b t2" text-anchor="end">h</text>
    </svg>`,
          steps: [
            'Poprowadź wysokość z wierzchołka krótszej podstawy (linia przerywana). Odcina ona trójkąt prostokątny o przyprostokątnych h i 30 − 18 = 12 m oraz przeciwprostokątnej 20 m.',
            'Z twierdzenia Pitagorasa: h² + 12² = 20², więc h² = 400 − 144 = 256 i h = 16 m.',
            'Pole trapezu: P = (30 + 18) · 16 / 2 = 48 · 8 = 384 m².',
            'Sprawdzenie: 12² + 16² = 144 + 256 = 400 = 20².',
          ],
          answer: '384 m²',
          scoring: [
            '1 pkt – zauważenie trójkąta prostokątnego o przyprostokątnej 12 m i przeciwprostokątnej 20 m.',
            '2 pkt – obliczenie wysokości: h = 16 m.',
            '3 pkt – pole działki: 384 m².',
          ],
        },
      ],
    },
    {
      id: 'przystawanie-dowody',
      name: 'Przystawanie trójkątów i dowody',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), matematyka kl. VII–VIII: VIII. Własności figur geometrycznych na płaszczyźnie (VIII.1–8: kąty wierzchołkowe, proste równoległe, cechy przystawania trójkątów, nierówność trójkąta, trójkąty równoramienne, dowody geometryczne); wymagania ogólne IV. Rozumowanie i argumentacja.',
      theory: `
        <h3>Trójkąty przystające</h3>
        <p>Trójkąty są <b>przystające</b>, gdy mają odpowiednio równe wszystkie boki i wszystkie kąty – jeden można dokładnie nałożyć na drugi. Zapis: <span class="f">△ABC ≡ △DEF</span> (kolejność liter pokazuje, które wierzchołki sobie odpowiadają).</p>
        <table>
          <tr><th>Cecha</th><th>Wystarczy, że równe są…</th></tr>
          <tr><td><b>bbb</b> (bok–bok–bok)</td><td>trzy boki jednego trójkąta i trzy boki drugiego</td></tr>
          <tr><td><b>bkb</b> (bok–kąt–bok)</td><td>dwa boki i <b>kąt między nimi</b></td></tr>
          <tr><td><b>kbk</b> (kąt–bok–kąt)</td><td>bok i <b>dwa kąty przy tym boku</b></td></tr>
        </table>
        <div class="tip">⚠️ Równe trzy kąty (kkk) <b>nie</b> wystarczą – trójkąty mogą mieć ten sam kształt, ale różną wielkość. W cesze bkb kąt musi leżeć między równymi bokami.</div>
        <h3>Fakty, na które powołujesz się w uzasadnieniach</h3>
        <ul>
          <li><b>Kąty przyległe</b> sumują się do 180°.</li>
          <li><b>Kąty wierzchołkowe</b> są równe – każdy z nich dopełnia ten sam kąt przyległy do 180°.</li>
          <li>Gdy prosta przecina dwie <b>proste równoległe</b>, kąty <b>odpowiadające</b> są równe i kąty <b>naprzemianległe</b> są równe.</li>
          <li>Suma kątów w trójkącie wynosi 180°; w trójkącie prostokątnym kąty ostre sumują się do 90°.</li>
          <li>W trójkącie <b>równoramiennym</b> kąty przy podstawie są równe.</li>
          <li>Twierdzenie Pitagorasa (dział „Geometria płaska”).</li>
        </ul>
        <h3>Nierówność trójkąta</h3>
        <p>Dla dowolnych punktów A, B, C: <span class="f">AB + BC ≥ AC</span>. <b>Równość</b> zachodzi tylko wtedy, gdy punkt B leży na odcinku AC. Z odcinków a, b, c zbudujesz trójkąt, gdy najdłuższy z nich jest krótszy od sumy dwóch pozostałych.</p>
        <h3>Jak zapisać dowód (uzasadnienie)</h3>
        <ol>
          <li>Narysuj rysunek i oznacz na nim dane (równe boki, kąty).</li>
          <li>Wypisz, co wiesz, i co masz wykazać.</li>
          <li>Każdy krok zapisz z uzasadnieniem: „…, <b>bo</b> kąty wierzchołkowe są równe”, „…, <b>z cechy bkb</b>”.</li>
          <li>Zakończ wnioskiem, który jest tezą zadania.</li>
        </ol>
        <p><b>Przykład:</b> odcinki AB i CD przecinają się w punkcie S, który jest środkiem każdego z nich. Wykaż, że AC = BD.<br>
        AS = BS i CS = DS (S jest środkiem obu odcinków), ∠ASC = ∠BSD (kąty wierzchołkowe). Z cechy bkb △ASC ≡ △BSD, więc AC = BD.</p>
        <h3>Dowody z liczbami</h3>
        <p>Zapisz liczby literami: kolejne liczby naturalne to n, n + 1, n + 2; liczba dwucyfrowa o cyfrach a i b to 10a + b. Przykład: n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1) – to wielokrotność 3, więc suma trzech kolejnych liczb naturalnych zawsze dzieli się przez 3.</p>
        <div class="tip">💡 Sprawdzenie na kilku przykładach <b>nie jest</b> dowodem – pokazuje tylko, że teza działa w tych przypadkach. Dowód musi działać dla wszystkich.</div>
      `,
      flashcards: [
        ['Trójkąty przystające', 'Mają odpowiednio równe wszystkie boki i kąty – można je na siebie nałożyć'],
        ['Cecha bbb', 'Trzy boki jednego trójkąta równe trzem bokom drugiego'],
        ['Cecha bkb', 'Dwa boki i kąt MIĘDZY nimi'],
        ['Cecha kbk', 'Bok i dwa kąty PRZY tym boku'],
        ['Czy kkk jest cechą przystawania?', 'Nie – trójkąty mogą mieć ten sam kształt i różną wielkość'],
        ['Kąty wierzchołkowe', 'Są równe (każdy dopełnia ten sam kąt do 180°)'],
        ['Kąty odpowiadające i naprzemianległe', 'Przy prostych równoległych są równe'],
        ['Nierówność trójkąta', 'AB + BC ≥ AC; równość, gdy B leży na odcinku AC'],
        ['Jak zakończyć dowód?', 'Wnioskiem równym tezie zadania (np. „więc AC = BD”)'],
        ['Przykład a dowód', 'Przykład pokazuje jeden przypadek, dowód – wszystkie'],
        ['Trzy kolejne liczby naturalne', 'n, n + 1, n + 2 (suma 3n + 3 = 3(n + 1))'],
        ['Liczba dwucyfrowa o cyfrach a, b', '10a + b'],
      ],
      questions: [
        { id: '5pk7pf', q: 'Która z wymienionych NIE jest cechą przystawania trójkątów?', options: ['kkk – trzy pary równych kątów', 'bbb', 'bkb', 'kbk'], answer: 0, explain: 'Trójkąty o równych kątach mogą mieć różne wielkości.' },
        { id: '7fkar9', q: 'W trójkątach ABC i DEF: AB = DE, BC = EF i AC = DF. Na mocy której cechy są przystające?', options: ['bbb', 'bkb', 'kbk', 'kkk'], answer: 0 },
        { id: 'm1ic5v', q: 'W trójkątach ABC i DEF: AB = DE, ∠ABC = ∠DEF i BC = EF. Na mocy której cechy są przystające?', options: ['bbb', 'kbk', 'kkk', 'bkb'], answer: 3, explain: 'Kąt przy B leży między bokami AB i BC.' },
        { id: 'fe7hsj', q: 'W trójkątach ABC i DEF: ∠A = ∠D, AB = DE i ∠B = ∠E. Na mocy której cechy są przystające?', options: ['kbk', 'bbb', 'bkb', 'kkk'], answer: 0, explain: 'Bok AB i oba kąty leżące przy nim.' },
        { id: '1ma6ha', q: 'Dwa trójkąty mają boki długości 5 cm i 7 cm oraz równe kąty między tymi bokami. Czy są przystające?', options: ['nie, potrzebny jest jeszcze trzeci bok', 'tak, z cechy bkb', 'tak, z cechy bbb', 'nie da się tego ustalić'], answer: 1 },
        { id: '3gofd6', q: 'Trójkąty przystające mają…', options: ['tylko równe kąty', 'równe pola, ale mogą mieć różne boki', 'odpowiednio równe boki i odpowiednio równe kąty', 'równe obwody, ale mogą mieć różne kąty'], answer: 2 },
        { id: 'e12267', q: 'Przekątna AC dzieli prostokąt ABCD na trójkąty ABC i CDA. Na mocy której cechy są one przystające?', options: ['kkk', 'żadnej – nie są przystające', 'bbb', 'nie da się tego określić'], answer: 2, explain: 'AB = CD i BC = DA (przeciwległe boki prostokąta), a AC jest wspólnym bokiem.' },
        { id: 'wzv7e7', q: 'Dwie proste przecinają się. Jeden z utworzonych kątów ma 35°. Ile ma kąt wierzchołkowy do niego?', options: ['145°', '55°', '35°', '325°'], answer: 2, explain: 'Kąty wierzchołkowe są równe.' },
        { id: 'sg0yv6', q: 'Dlaczego kąty wierzchołkowe są równe?', options: ['bo każdy z nich dopełnia ten sam kąt przyległy do 180°', 'bo tak wygląda na rysunku', 'bo leżą w tym samym trójkącie', 'bo zawsze są kątami prostymi'], answer: 0 },
        { id: 'dvt3tf', q: 'Prosta przecina dwie proste równoległe. Ile ma kąt naprzemianległy do kąta o mierze 72°?', options: ['108°', '72°', '18°', '144°'], answer: 1, explain: 'Kąty naprzemianległe przy prostych równoległych są równe.' },
        { id: 'tm02r4', q: 'W trójkącie równoramiennym kąt przy podstawie ma 50°. Ile ma kąt między ramionami?', options: ['50°', '80°', '65°', '130°'], answer: 1, explain: 'Oba kąty przy podstawie mają po 50°: 180° − 2 · 50° = 80°.' },
        { id: 'nd629r', q: 'Ramiona trójkąta równoramiennego mają po 7 cm, a jego obwód wynosi 20 cm. Ile ma podstawa?', options: ['13 cm', '3 cm', '7 cm', '6 cm'], answer: 3, explain: '20 − 2 · 7 = 6 cm.' },
        { id: 'nn1weg', q: 'W trójkącie prostokątnym jeden z kątów ostrych ma 35°. Ile ma drugi kąt ostry?', options: ['35°', '145°', '55°', '65°'], answer: 2, explain: 'Kąty ostre trójkąta prostokątnego sumują się do 90°.' },
        { id: 'zglxf8', q: 'Dla punktów A, B, C: AB = 4, BC = 6, AC = 10. Co z tego wynika?', options: ['ABC jest trójkątem prostokątnym', 'ABC jest trójkątem równoramiennym', 'taka sytuacja jest niemożliwa', 'punkt B leży na odcinku AC'], answer: 3, explain: 'AB + BC = AC – to przypadek równości w nierówności trójkąta.' },
        { id: 'qqdzot', q: 'Trójkąt ma boki długości 3 i 8. Ile może mieć trzeci bok?', options: ['6', '5', '11', '12'], answer: 0, explain: 'Trzeci bok musi być dłuższy niż 8 − 3 = 5 i krótszy niż 8 + 3 = 11.' },
        { id: 'sjgcln', q: 'Trójkąt ABC jest równoramienny (AC = BC), a ∠ACB = 40°. AD jest wysokością opuszczoną na bok BC. Ile wynosi ∠BAD?', options: ['40°', '70°', '50°', '20°'], answer: 3, explain: 'Kąty przy podstawie mają po 70°. W trójkącie prostokątnym ABD: ∠BAD = 90° − 70° = 20° – połowa kąta ACB.' },
        { id: 'whd9vb', q: 'Odcinki AB i CD przecinają się w punkcie S, który jest środkiem każdego z nich. Dlaczego trójkąty ASC i BSD są przystające?', options: ['z cechy kkk, bo mają równe kąty', 'z cechy bkb: AS = BS, CS = DS, a kąty przy S są wierzchołkowe', 'z cechy bbb, bo wszystkie boki są równe', 'bo oba są równoboczne'], answer: 1 },
        { id: 'yhac06', q: 'Czym różni się dowód od sprawdzenia na przykładzie?', options: ['dowód pokazuje, że teza jest prawdziwa zawsze, a przykład – tylko w jednym przypadku', 'niczym, to to samo', 'przykład jest mocniejszy od dowodu', 'dowód musi mieć rysunek, a przykład nie'], answer: 0 },
        { id: 'nz8ci4', q: 'Uczeń sprawdził, że 1 + 2 + 3 = 6 i 4 + 5 + 6 = 15 dzielą się przez 3. Czy udowodnił, że suma każdych trzech kolejnych liczb naturalnych dzieli się przez 3?', options: ['tak – dwa przykłady wystarczą', 'tak, bo obie sumy są większe od 3', 'nie – sprawdził tylko dwa przykłady', 'tak, bo 6 i 15 to liczby złożone'], answer: 2 },
        { id: 'wegydy', q: 'Suma trzech kolejnych liczb naturalnych n, n + 1, n + 2 jest równa…', options: ['3n', '3(n + 1)', '3n + 2', 'n + 3'], answer: 1, explain: 'n + n + 1 + n + 2 = 3n + 3 = 3(n + 1).' },
        { id: 'fyz5ay', q: 'Liczbę dwucyfrową o cyfrze dziesiątek a i cyfrze jedności b zapisujemy jako…', options: ['10a + b', 'a + b', 'ab (czyli a · b)', '10b + a'], answer: 0, explain: 'Np. 37 = 10 · 3 + 7.' },
        { id: 'wo527s', q: 'Prawda czy fałsz?\nJeśli dwa trójkąty mają równe wszystkie kąty, to są przystające.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'To za mało: np. trójkąty równoboczne o bokach 2 cm i 5 cm mają równe kąty, ale nie są przystające.' },
        { id: 'm8tyie', q: 'Prawda czy fałsz?\nKąty odpowiadające przy dwóch prostych równoległych przeciętych trzecią prostą są równe.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
        {
          id: '2o9z22',
          q: 'Na rysunku podano długości dwóch boków i miarę jednego kąta w trójkątach ABC i KLM. Na mocy której cechy te trójkąty są przystające?',
          svg: `<svg viewBox="0 0 440 165" role="img" aria-label="Trójkąt ABC: AB = 6, BC = 4, kąt B = 50 stopni. Trójkąt KLM: KL = 6, LM = 4, kąt L = 50 stopni">
      <polygon points="198,135 36,135 105.4,52.3" class="f1 s1 sw"/>
      <polygon points="242,135 404,135 334.6,52.3" class="f3 s3 sw"/>
      <path d="M58,135 A22,22 0 0 0 50.1,118.1" class="ln s2"/>
      <path d="M389.9,118.1 A22,22 0 0 0 382,135" class="ln s2"/>
      <text x="75.9" y="121.4" class="tx-s" text-anchor="middle">50°</text>
      <text x="364.1" y="121.4" class="tx-s" text-anchor="middle">50°</text>
      <text x="117" y="157" class="tx-b" text-anchor="middle">6</text>
      <text x="323" y="157" class="tx-b" text-anchor="middle">6</text>
      <text x="58.7" y="91.6" class="tx-b" text-anchor="end">4</text>
      <text x="381.3" y="91.6" class="tx-b">4</text>
      <text x="38" y="157" class="tx-b" text-anchor="end">B</text>
      <text x="196" y="157" class="tx-b">A</text>
      <text x="105.4" y="42.3" class="tx-b" text-anchor="middle">C</text>
      <text x="402" y="157" class="tx-b">L</text>
      <text x="244" y="157" class="tx-b" text-anchor="end">K</text>
      <text x="334.6" y="42.3" class="tx-b" text-anchor="middle">M</text>
    </svg>`,
          options: ['bkb', 'bbb', 'kbk', 'nie muszą być przystające'],
          answer: 0,
          explain: 'W obu trójkątach są boki 6 i 4 oraz kąt 50° leżący MIĘDZY nimi (przy wierzchołkach B i L) – to cecha bkb.',
        },
        {
          id: '13zywz',
          q: 'Dwie proste przecinają się. Miary dwóch kątów zapisano na rysunku. Ile wynosi x?',
          svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Dwie przecinające się proste. Kąt po lewej stronie punktu przecięcia ma miarę 2x + 10 stopni, a kąt po prawej stronie ma miarę 3x − 20 stopni">
      <line x1="45" y1="32.4" x2="335" y2="167.6" class="ln sw"/>
      <line x1="105.1" y1="184.9" x2="274.9" y2="15.1" class="ln sw"/>
      <path d="M166.4,89 A26,26 0 0 0 171.6,118.4" class="ln s2"/>
      <path d="M213.6,111 A26,26 0 0 0 208.4,81.6" class="ln s2"/>
      <text x="150" y="110" class="tx t2" text-anchor="end">2x + 10°</text>
      <text x="230" y="104" class="tx t2">3x − 20°</text>
    </svg>`,
          options: ['30°', '38°', '10°', '70°'],
          answer: 0,
          explain: 'Zaznaczone kąty są wierzchołkowe, więc są równe: 2x + 10° = 3x − 20°, stąd x = 30°. Sprawdzenie: oba kąty mają 70°.',
        },
        {
          id: '55c8o6',
          q: 'Proste k i l są równoległe (rysunek). Ile stopni ma kąt α?',
          svg: `<svg viewBox="0 0 360 210" role="img" aria-label="Dwie równoległe proste k i l przecięte trzecią prostą. Przy prostej k kąt 65 stopni nad prostą, po prawej stronie. Przy prostej l kąt alfa pod prostą, po prawej stronie">
      <line x1="30" y1="60" x2="320" y2="60" class="ln sw"/>
      <line x1="30" y1="150" x2="320" y2="150" class="ln sw"/>
      <line x1="136.9" y1="195.3" x2="219.4" y2="18.3" class="ln"/>
      <text x="330" y="66" class="tx-b">k</text>
      <text x="330" y="156" class="tx-b">l</text>
      <path d="M224,60 A24,24 0 0 0 210.1,38.2" class="ln s2"/>
      <path d="M148.7,169.9 A22,22 0 0 0 180,150" class="ln s2"/>
      <text x="235.6" y="43.7" class="tx t2" text-anchor="middle">65°</text>
      <text x="178.4" y="188" class="tx-b t2" text-anchor="middle">α</text>
    </svg>`,
          options: ['115°', '65°', '25°', '130°'],
          answer: 0,
          explain: 'Kąt odpowiadający kątowi 65° przy prostej l też ma 65° (proste równoległe). Kąt α jest do niego przyległy: α = 180° − 65° = 115°.',
        },
      ],
      tasks: [
        {
          id: 'u5b7zz',
          points: 2,
          q: 'Odcinki AB i CD przecinają się w punkcie S, który jest środkiem każdego z nich. Wykaż, że AC = BD.',
          svg: `<svg viewBox="0 0 320 200" role="img" aria-label="Odcinki AB i CD przecinające się w punkcie S, który jest środkiem każdego z nich">
      <line x1="40" y1="40" x2="280" y2="160" class="ln"/>
      <line x1="60" y1="170" x2="260" y2="30" class="ln"/>
      <line x1="40" y1="40" x2="60" y2="170" class="ln s2 dash"/>
      <line x1="280" y1="160" x2="260" y2="30" class="ln s2 dash"/>
      <circle cx="160" cy="100" r="4" class="f2 s2"/>
      <text x="22" y="38" class="tx-b">A</text><text x="286" y="172" class="tx-b">B</text>
      <text x="44" y="190" class="tx-b">C</text><text x="266" y="28" class="tx-b">D</text>
      <text x="152" y="128" class="tx-b t2">S</text>
    </svg>`,
          steps: [
            'Porównaj trójkąty ASC i BSD.',
            'AS = BS i CS = DS, bo S jest środkiem odcinków AB i CD.',
            '∠ASC = ∠BSD, bo to kąty wierzchołkowe.',
            'Z cechy bkb trójkąty ASC i BSD są przystające, więc ich odpowiadające boki są równe: AC = BD. To należało wykazać.',
          ],
          answer: 'Trójkąty ASC i BSD są przystające (bkb), więc AC = BD.',
          scoring: [
            '1 pkt – zapisanie równości AS = BS, CS = DS oraz równości kątów wierzchołkowych przy S.',
            '2 pkt – powołanie się na cechę bkb i wniosek AC = BD.',
          ],
        },
        {
          id: '8a6ib6',
          points: 3,
          q: 'Dany jest ostrokątny trójkąt równoramienny ABC, w którym AC = BC. W tym trójkącie poprowadzono wysokość AD (D leży na boku BC). Udowodnij, że kąt ACB jest dwa razy większy od kąta BAD.',
          svg: `<svg viewBox="0 0 320 240" role="img" aria-label="Trójkąt równoramienny ABC, AC = BC, z wysokością AD opuszczoną na bok BC">
      <polygon points="60,210 260,210 160,40" class="f1 s1 sw"/>
      <line x1="60" y1="210" x2="208.6" y2="122.6" class="ln s2 sw"/>
      <polyline points="199.4,128 204.8,137.2 214,131.8" class="ln-thin"/>
      <text x="44" y="228" class="tx-b">A</text><text x="264" y="228" class="tx-b">B</text>
      <text x="152" y="30" class="tx-b">C</text><text x="214" y="118" class="tx-b t2">D</text>
      <text x="160" y="196" class="tx-s" text-anchor="middle">AC = BC</text>
      <text x="160" y="72" class="tx-s" text-anchor="middle">γ</text>
    </svg>`,
          steps: [
            'Oznacz γ = ∠ACB.',
            'Trójkąt jest równoramienny (AC = BC), więc kąty przy podstawie AB są równe: ∠CAB = ∠CBA = (180° − γ) : 2 = 90° − γ/2.',
            'AD jest wysokością, więc ∠ADB = 90°. W trójkącie ABD suma kątów wynosi 180°, więc ∠BAD = 180° − 90° − ∠ABD = 90° − ∠ABD.',
            '∠ABD = ∠CBA = 90° − γ/2, zatem ∠BAD = 90° − (90° − γ/2) = γ/2.',
            'Czyli ∠ACB = γ = 2 · ∠BAD. To należało udowodnić.',
          ],
          answer: '∠BAD = γ/2, więc ∠ACB = 2 · ∠BAD.',
          scoring: [
            '1 pkt – wyznaczenie kątów przy podstawie: 90° − γ/2 (albo (180° − γ) : 2).',
            '2 pkt – wykorzystanie trójkąta prostokątnego ABD: ∠BAD = 90° − ∠ABD.',
            '3 pkt – pełne rozumowanie zakończone wnioskiem ∠ACB = 2 · ∠BAD.',
          ],
        },
        {
          id: 'wbjcx0',
          points: 3,
          q: 'Na bokach BC i CD prostokąta ABCD zbudowano, na zewnątrz prostokąta, dwa trójkąty równoboczne BCE i CDF. Udowodnij, że AE = AF.',
          svg: `<svg viewBox="0 0 300 270" role="img" aria-label="Prostokąt ABCD z trójkątami równobocznymi BCE i CDF zbudowanymi na zewnątrz">
      <rect x="40" y="160" width="120" height="80" class="f1 s1 sw"/>
      <polygon points="160,240 160,160 229.3,200" class="f2 s2 sw"/>
      <polygon points="40,160 160,160 100,56.1" class="f3 s3 sw"/>
      <line x1="40" y1="240" x2="229.3" y2="200" class="ln dash"/>
      <line x1="40" y1="240" x2="100" y2="56.1" class="ln dash"/>
      <text x="22" y="258" class="tx-b">A</text><text x="160" y="262" class="tx-b">B</text>
      <text x="166" y="154" class="tx-b">C</text><text x="20" y="156" class="tx-b">D</text>
      <text x="236" y="206" class="tx-b">E</text><text x="94" y="46" class="tx-b">F</text>
    </svg>`,
          steps: [
            'Porównaj trójkąty ABE i FDA (narysuj odcinki AE i AF).',
            'AB = CD (przeciwległe boki prostokąta) i CD = DF (boki trójkąta równobocznego CDF), więc AB = DF.',
            'BE = BC (boki trójkąta równobocznego BCE) i BC = AD (przeciwległe boki prostokąta), więc BE = AD.',
            '∠ABE = ∠ABC + ∠CBE = 90° + 60° = 150° oraz ∠FDA = ∠FDC + ∠CDA = 60° + 90° = 150°.',
            'Trójkąty ABE i FDA mają dwa boki odpowiednio równe (AB = FD, BE = DA) i równe kąty między nimi (150°), więc z cechy bkb są przystające. Stąd AE = FA. To należało udowodnić.',
          ],
          answer: '△ABE ≡ △FDA (bkb), więc AE = AF.',
          scoring: [
            '1 pkt – zapisanie dwóch par równych boków: AB = DF i BE = AD.',
            '2 pkt – obliczenie, że kąty ABE i FDA mają po 150°.',
            '3 pkt – powołanie się na cechę bkb i wniosek AE = AF.',
          ],
        },
        {
          id: 'vtg0in',
          points: 2,
          q: 'Uzasadnij, że suma trzech kolejnych liczb naturalnych jest podzielna przez 3.',
          steps: [
            'Oznacz najmniejszą z liczb przez n. Kolejne to n + 1 i n + 2.',
            'Suma: n + (n + 1) + (n + 2) = 3n + 3.',
            '3n + 3 = 3(n + 1), a n + 1 jest liczbą naturalną, więc suma jest wielokrotnością liczby 3.',
          ],
          answer: 'n + (n + 1) + (n + 2) = 3(n + 1) – liczba podzielna przez 3.',
          scoring: [
            '1 pkt – zapisanie sumy w postaci 3n + 3 (lub równoważnej).',
            '2 pkt – zapisanie 3(n + 1) i wniosek o podzielności przez 3.',
          ],
        },
        {
          id: '1f0cva',
          points: 2,
          q: 'Uzasadnij, że suma dowolnej liczby dwucyfrowej i liczby zapisanej tymi samymi cyframi w odwrotnej kolejności jest podzielna przez 11 (np. 37 + 73 = 110).',
          steps: [
            'Liczba dwucyfrowa o cyfrze dziesiątek a i cyfrze jedności b to 10a + b. Liczba o odwróconych cyfrach to 10b + a.',
            'Suma: (10a + b) + (10b + a) = 11a + 11b.',
            '11a + 11b = 11(a + b), więc suma jest wielokrotnością liczby 11.',
          ],
          answer: '(10a + b) + (10b + a) = 11(a + b) – liczba podzielna przez 11.',
          scoring: [
            '1 pkt – zapisanie obu liczb w postaci 10a + b i 10b + a.',
            '2 pkt – przekształcenie sumy do postaci 11(a + b) i wniosek.',
          ],
        },
      ],
    },
    {
      id: 'bryly',
      name: 'Graniastosłupy i ostrosłupy',
      basis: 'Informator CKE (matematyka) – kl. IV–VI: X. Bryły; kl. VII–VIII: XI. Obliczenia w geometrii (objętość i pole powierzchni graniastosłupów i ostrosłupów).',
      theory: `
        <h3>Wzory</h3>
        <table>
          <tr><th>Bryła</th><th>Objętość</th><th>Pole powierzchni</th></tr>
          <tr><td>sześcian</td><td>a³</td><td>6a²</td></tr>
          <tr><td>prostopadłościan</td><td>a · b · c</td><td>2(ab + bc + ac)</td></tr>
          <tr><td>graniastosłup</td><td>Pp · H</td><td>2Pp + Pb</td></tr>
          <tr><td>ostrosłup</td><td>⅓ · Pp · H</td><td>Pp + Pb</td></tr>
        </table>
        <p>Pp – pole podstawy, Pb – pole powierzchni bocznej, H – wysokość bryły.</p>
        <h3>Liczba elementów (podstawa to n-kąt)</h3>
        <table>
          <tr><th></th><th>Wierzchołki</th><th>Krawędzie</th><th>Ściany</th></tr>
          <tr><td>graniastosłup</td><td>2n</td><td>3n</td><td>n + 2</td></tr>
          <tr><td>ostrosłup</td><td>n + 1</td><td>2n</td><td>n + 1</td></tr>
        </table>
        <p>Przekątna sześcianu: <span class="f">a√3</span>, przekątna prostopadłościanu: <span class="f">√(a² + b² + c²)</span></p>
        <div class="tip">💡 Jednostki: 1 dm³ = 1 litr, 1 m³ = 1000 litrów, 1 cm³ = 1 ml.</div>
      `,
      flashcards: [
        ['Objętość graniastosłupa', 'Pp · H'],
        ['Objętość ostrosłupa', '⅓ · Pp · H'],
        ['Krawędzie graniastosłupa n-kątnego', '3n'],
        ['Krawędzie ostrosłupa n-kątnego', '2n'],
        ['Przekątna sześcianu', 'a√3'],
        ['1 dm³', '1 litr'],
        ['1 m³', '1000 litrów'],
      ],
      questions: [
        { id: 'l39qhk', q: 'Objętość prostopadłościanu o wymiarach 2 × 3 × 5 wynosi…', options: ['10', '30', '31', '62'], answer: 1 },
        { id: '9xh8in', q: 'Pole powierzchni sześcianu o krawędzi 3 wynosi…', options: ['27', '54', '36', '18'], answer: 1, explain: '6 · 3² = 54.' },
        { id: 's5zip6', q: 'Objętość sześcianu o krawędzi 3 wynosi…', options: ['9', '27', '54', '18'], answer: 1 },
        { id: 'fqgkkb', q: 'Ostrosłup prawidłowy czworokątny ma krawędź podstawy 6 i wysokość 4. Jego objętość to…', options: ['144', '48', '72', '24'], answer: 1, explain: 'V = ⅓ · 6² · 4 = ⅓ · 36 · 4 = 48.' },
        { id: 'y204xa', q: 'Ile krawędzi ma graniastosłup sześciokątny?', options: ['12', '18', '6', '24'], answer: 1, explain: '3n = 3 · 6 = 18.' },
        { id: 'exjpel', q: 'Ile wierzchołków ma ostrosłup pięciokątny?', options: ['5', '6', '10', '7'], answer: 1, explain: 'n + 1 = 6 (5 w podstawie i wierzchołek).' },
        { id: 'p40njf', q: 'Ile krawędzi ma ostrosłup pięciokątny?', options: ['5', '6', '10', '15'], answer: 2, explain: '2n = 10.' },
        { id: '1rg3pv', q: 'Przekątna sześcianu o krawędzi 2 ma długość…', options: ['2√2', '2√3', '4', '6'], answer: 1 },
        { id: '42roln', q: 'Akwarium ma wymiary 50 cm × 30 cm × 40 cm. Ile litrów wody się w nim zmieści?', options: ['6 l', '60 l', '600 l', '120 l'], answer: 1, explain: '5 dm · 3 dm · 4 dm = 60 dm³ = 60 litrów.' },
        { id: 'bidkaz', q: 'Graniastosłup ma pole podstawy 12 cm² i wysokość 5 cm. Jego objętość to…', options: ['20 cm³', '60 cm³', '17 cm³', '30 cm³'], answer: 1 },
        { id: '7ylgph', q: 'Ile ścian ma graniastosłup pięciokątny?', options: ['7', '5', '10', '15'], answer: 0, explain: 'n + 2 = 5 + 2 = 7 (2 podstawy i 5 ścian bocznych).' },
        { id: 'jyq3fr', q: 'Ile krawędzi ma ostrosłup czworokątny?', options: ['4', '5', '12', '8'], answer: 3, explain: '2n = 8 (4 w podstawie i 4 boczne).' },
        { id: 'a3nr7g', q: 'Pole powierzchni prostopadłościanu o wymiarach 2 × 3 × 4 wynosi…', options: ['24', '26', '48', '52'], answer: 3, explain: '2(2 · 3 + 3 · 4 + 2 · 4) = 2(6 + 12 + 8) = 52.' },
        { id: '2moq7k', q: 'Ostrosłup ma pole podstawy 15 cm² i wysokość 6 cm. Jego objętość to…', options: ['90 cm³', '30 cm³', '45 cm³', '21 cm³'], answer: 1, explain: 'V = ⅓ · 15 · 6 = 30 cm³.' },
        { id: 'p7anx0', q: 'Ile litrów to 2,5 m³?', options: ['250 l', '25 l', '25 000 l', '2500 l'], answer: 3, explain: '1 m³ = 1000 l, więc 2,5 m³ = 2500 l.' },
        { id: 'jno36b', q: 'Przekątna prostopadłościanu o wymiarach 2 × 3 × 6 ma długość…', options: ['11', '7', '√11', '6'], answer: 1, explain: '√(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7.' },
        { id: 'z0vuze', q: 'Sześcian ma objętość 64 cm³. Jakie jest jego pole powierzchni?', options: ['64 cm²', '96 cm²', '16 cm²', '384 cm²'], answer: 1, explain: 'a³ = 64, więc a = 4 cm; P = 6 · 4² = 96 cm².' },
        { id: 'iar37d', q: 'Graniastosłup prawidłowy trójkątny ma krawędź podstawy 4 i wysokość 10. Jego objętość wynosi…', options: ['160√3', '20√3', '40', '40√3'], answer: 3, explain: 'Pp = 4²√3/4 = 4√3, V = 4√3 · 10 = 40√3.' },
        { id: 'pd11rl', q: 'Prawda czy fałsz?\nOstrosłup trójkątny ma 4 ściany.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'n + 1 = 3 + 1 = 4 (podstawa i 3 ściany boczne).' },
        {
          id: 'p6duxk',
          q: 'Która z figur A–D jest siatką sześcianu?',
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Cztery figury z sześciu kwadratów. A: pięć kwadratów w rzędzie i jeden nad drugim. B: prostokąt 3 na 2. C: cztery w rzędzie i dwa nad pierwszym i trzecim. D: cztery w rzędzie, jeden nad drugim i jeden pod czwartym">
      <text x="10" y="34" class="tx-b">A</text>
      <rect x="44" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="68" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="92" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="116" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="140" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="68" y="22" width="24" height="24" class="f1 s1 sw"/>
      <text x="210" y="34" class="tx-b">B</text>
      <rect x="244" y="22" width="24" height="24" class="f1 s1 sw"/>
      <rect x="268" y="22" width="24" height="24" class="f1 s1 sw"/>
      <rect x="292" y="22" width="24" height="24" class="f1 s1 sw"/>
      <rect x="244" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="268" y="46" width="24" height="24" class="f1 s1 sw"/>
      <rect x="292" y="46" width="24" height="24" class="f1 s1 sw"/>
      <text x="10" y="154" class="tx-b">C</text>
      <rect x="44" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="68" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="92" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="116" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="44" y="142" width="24" height="24" class="f1 s1 sw"/>
      <rect x="92" y="142" width="24" height="24" class="f1 s1 sw"/>
      <text x="210" y="154" class="tx-b">D</text>
      <rect x="244" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="268" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="292" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="316" y="166" width="24" height="24" class="f1 s1 sw"/>
      <rect x="268" y="142" width="24" height="24" class="f1 s1 sw"/>
      <rect x="316" y="190" width="24" height="24" class="f1 s1 sw"/>
    </svg>`,
          options: ['A', 'B', 'C', 'D'],
          noShuffle: true,
          answer: 3,
          explain: 'W D cztery kwadraty w rzędzie tworzą ściany boczne, a dwa pozostałe – po przeciwnych stronach paska – górną i dolną ścianę. W A piąty kwadrat w rzędzie nałoży się na pierwszy, w C oba dodatkowe kwadraty leżą po tej samej stronie paska (oba byłyby górną ścianą), a z prostokąta B nie da się złożyć sześcianu.',
        },
        {
          id: '3l59u2',
          q: 'Ile krawędzi ma graniastosłup przedstawiony na rysunku?',
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Graniastosłup prosty, którego podstawami są pięciokąty. Krawędzie niewidoczne narysowano linią przerywaną">
      <polygon points="200,109 95.4,85.5 135.3,47.5 264.7,47.5 304.6,85.5" class="f1 s1 sw"/>
      <line x1="95.4" y1="205.5" x2="135.3" y2="167.5" class="ln-thin dash"/>
      <line x1="135.3" y1="167.5" x2="264.7" y2="167.5" class="ln-thin dash"/>
      <line x1="264.7" y1="167.5" x2="304.6" y2="205.5" class="ln-thin dash"/>
      <line x1="135.3" y1="167.5" x2="135.3" y2="47.5" class="ln-thin dash"/>
      <line x1="264.7" y1="167.5" x2="264.7" y2="47.5" class="ln-thin dash"/>
      <line x1="304.6" y1="205.5" x2="200" y2="229" class="ln s1 sw"/>
      <line x1="200" y1="229" x2="95.4" y2="205.5" class="ln s1 sw"/>
      <line x1="200" y1="229" x2="200" y2="109" class="ln s1 sw"/>
      <line x1="95.4" y1="205.5" x2="95.4" y2="85.5" class="ln s1 sw"/>
      <line x1="304.6" y1="205.5" x2="304.6" y2="85.5" class="ln s1 sw"/>
    </svg>`,
          options: ['15', '10', '12', '7'],
          answer: 0,
          explain: 'Podstawą jest pięciokąt (n = 5). Krawędzie: 5 w dolnej podstawie, 5 w górnej i 5 bocznych – razem 3 · 5 = 15.',
        },
        {
          id: 'wlh46k',
          q: 'Prostopadłościan ma wymiary podane na rysunku. Jaką długość ma zaznaczona przekątna tego prostopadłościanu?',
          svg: `<svg viewBox="0 0 320 245" role="img" aria-label="Prostopadłościan o krawędziach 4 cm, 3 cm i 12 cm z zaznaczoną przekątną bryły">
      <line x1="120" y1="215" x2="146" y2="189" class="ln-thin dash"/>
      <line x1="146" y1="189" x2="206" y2="189" class="ln-thin dash"/>
      <line x1="146" y1="189" x2="146" y2="9" class="ln-thin dash"/>
      <polygon points="120,215 180,215 180,35 120,35" class="ln"/>
      <polyline points="180,215 206,189 206,9 146,9 120,35" class="ln"/>
      <line x1="180" y1="35" x2="206" y2="9" class="ln"/>
      <line x1="120" y1="215" x2="206" y2="9" class="ln s2 sw"/>
      <text x="150" y="237" class="tx" text-anchor="middle">4 cm</text>
      <text x="203" y="214" class="tx">3 cm</text>
      <text x="112" y="125" class="tx" text-anchor="end">12 cm</text>
    </svg>`,
          options: ['13 cm', '19 cm', '5 cm', '√153 cm'],
          answer: 0,
          explain: 'Przekątna podstawy: √(3² + 4²) = 5 cm. Przekątna bryły: √(5² + 12²) = √169 = 13 cm (albo od razu √(3² + 4² + 12²) = √169).',
        },
        {
          id: '7bnwnp',
          q: 'Na rysunku przedstawiono siatkę ostrosłupa prawidłowego czworokątnego (wymiary w cm). Jakie jest pole powierzchni całkowitej tego ostrosłupa?',
          svg: `<svg viewBox="0 0 320 270" role="img" aria-label="Siatka ostrosłupa: kwadrat o boku 6 i cztery przystające trójkąty o wysokości 5 dobudowane do jego boków">
      <polygon points="112,87 208,87 160,7" class="f2 s2 sw"/>
      <polygon points="208,87 208,183 288,135" class="f2 s2 sw"/>
      <polygon points="208,183 112,183 160,263" class="f2 s2 sw"/>
      <polygon points="112,183 112,87 32,135" class="f2 s2 sw"/>
      <rect x="112" y="87" width="96" height="96" class="f1 s1 sw"/>
      <line x1="160" y1="87" x2="160" y2="7" class="ln dash"/>
      <polyline points="160,77 170,77 170,87" class="ln-thin"/>
      <text x="168" y="45" class="tx-b">5</text>
      <text x="160" y="173" class="tx-b" text-anchor="middle">6</text>
    </svg>`,
          options: ['96 cm²', '156 cm²', '60 cm²', '66 cm²'],
          answer: 0,
          explain: 'Podstawa: 6² = 36 cm². Jedna ściana boczna: 6 · 5 / 2 = 15 cm², a są 4: 60 cm². Razem 36 + 60 = 96 cm².',
        },
      ],
      tasks: [
        {
          id: '9mwe0o',
          points: 3,
          q: 'Podstawą graniastosłupa prostego jest trójkąt równoramienny, którego dwa kąty mają miarę po 45°, a najdłuższy bok ma długość 6√2 dm. Jeden z boków prostokąta, który jest w tym graniastosłupie ścianą boczną o największej powierzchni, ma długość 4 dm. Oblicz objętość i pole powierzchni całkowitej tego graniastosłupa.',
          steps: [
            'Trójkąt ma kąty 45°, 45° i 90° – to trójkąt prostokątny równoramienny. Najdłuższy bok (przeciwprostokątna) to 6√2 dm, więc przyprostokątne mają po 6 dm (6√2 = a√2).',
            'Pole podstawy: 6 · 6 / 2 = 18 dm².',
            'Największa ściana boczna leży na przeciwprostokątnej: ma boki 6√2 dm i H. Jej drugi bok ma 4 dm, więc wysokość graniastosłupa H = 4 dm.',
            'Objętość: V = 18 · 4 = 72 dm³.',
            'Pole boczne: (6 + 6 + 6√2) · 4 = 48 + 24√2 dm². Pole całkowite: 2 · 18 + 48 + 24√2 = (84 + 24√2) dm².',
          ],
          answer: 'V = 72 dm³, P = (84 + 24√2) dm²',
          scoring: [
            '1 pkt – wyznaczenie długości przyprostokątnych (6 dm) i wysokości graniastosłupa (4 dm).',
            '2 pkt – poprawna objętość: 72 dm³.',
            '3 pkt – poprawne pole powierzchni: (84 + 24√2) dm².',
          ],
        },
        {
          id: 'an6hhn',
          points: 3,
          q: 'Prostokąt ABCD jest podstawą ostrosłupa ABCDS, punkt M jest środkiem krawędzi AD, a odcinek MS jest wysokością ostrosłupa. AD = 10 cm, AS = 13 cm, AB = 20 cm. Oblicz objętość ostrosłupa.',
          steps: [
            'M jest środkiem AD, więc AM = 5 cm. MS jest wysokością, więc trójkąt AMS jest prostokątny (kąt prosty przy M).',
            'Z twierdzenia Pitagorasa: MS² = 13² − 5² = 169 − 25 = 144, więc MS = 12 cm.',
            'Pole podstawy: 10 · 20 = 200 cm².',
            'V = ⅓ · 200 · 12 = 800 cm³.',
          ],
          answer: '800 cm³',
          scoring: [
            '1 pkt – zauważenie trójkąta prostokątnego AMS (AM = 5 cm).',
            '2 pkt – obliczenie wysokości MS = 12 cm.',
            '3 pkt – objętość 800 cm³.',
          ],
        },
        {
          id: 'wog1l6',
          points: 2,
          q: 'Akwarium w kształcie prostopadłościanu ma dno o wymiarach 50 cm × 40 cm. Wlano do niego 30 litrów wody. Do jakiej wysokości sięga woda?',
          steps: [
            '30 l = 30 dm³ = 30 000 cm³.',
            'Pole dna: 50 · 40 = 2000 cm².',
            'Wysokość wody: 30 000 : 2000 = 15 cm.',
          ],
          answer: '15 cm',
          scoring: [
            '1 pkt – zamiana litrów na cm³ (albo wymiarów na dm) i zapisanie V = Pp · h.',
            '2 pkt – wynik 15 cm.',
          ],
        },
      ],
    },
    {
      id: 'statystyka',
      name: 'Statystyka i prawdopodobieństwo',
      basis: 'Informator CKE (matematyka) – kl. IV–VI: XIII. Elementy statystyki opisowej; kl. VII–VIII: XIII. Odczytywanie danych i elementy statystyki opisowej (średnia arytmetyczna), XII. Wprowadzenie do kombinatoryki i rachunku prawdopodobieństwa.',
      theory: `
        <h3>Statystyka</h3>
        <ul>
          <li><b>Średnia arytmetyczna</b> = suma liczb : ich ilość</li>
          <li>Odczytywanie danych z tabel, diagramów słupkowych i kołowych oraz wykresów (wartość największa, najmniejsza, czy wartości rosną/maleją).</li>
        </ul>
        <h3>Prawdopodobieństwo</h3>
        <p><span class="f">P = liczba zdarzeń sprzyjających / liczba wszystkich możliwych zdarzeń</span></p>
        <p>Prawdopodobieństwo zawsze jest liczbą od 0 do 1.</p>
        <p>Doświadczenia z podstawy: rzut monetą, rzut kostką (także wielościenną), losowanie kuli.</p>
        <h3>Zliczanie możliwości</h3>
        <p>W szkole podstawowej liczymy możliwości, <b>wypisując je wszystkie</b> (np. w tabeli lub na liście) – bez wzorów. Przykład: liczby dwucyfrowe o sumie cyfr 3 to 12, 21, 30 – są 3.</p>
        <div class="tip">📋 Mediana i dominanta nie występują w podstawie programowej szkoły podstawowej – na egzaminie z statystyki potrzebna jest średnia arytmetyczna i odczytywanie danych.</div>
      `,
      flashcards: [
        ['Średnia arytmetyczna', 'Suma liczb podzielona przez ich ilość'],
        ['Prawdopodobieństwo', 'zdarzenia sprzyjające / wszystkie zdarzenia'],
        ['Zliczanie możliwości', 'Wypisz wszystkie możliwości po kolei (lista, tabela)'],
      ],
      questions: [
        { id: '630mvm', q: 'Średnia arytmetyczna liczb 4, 5, 6, 9 wynosi…', options: ['5', '5,5', '6', '6,5'], answer: 2, explain: '(4 + 5 + 6 + 9) : 4 = 24 : 4 = 6.' },
        { id: 'h9cbn6', q: 'Średnia arytmetyczna czterech ocen Oli wynosi 4. Trzy z nich to 3, 4 i 5. Jaka jest czwarta ocena?', options: ['3', '4', '5', '6'], answer: 1, explain: 'Suma = 4 · 4 = 16; 16 − (3 + 4 + 5) = 4.' },
        { id: 'm7xu6q', q: 'W pudełku są 3 kule czerwone i 5 niebieskich. Losujemy jedną kulę. Jakie jest prawdopodobieństwo wylosowania kuli czerwonej?', options: ['3/5', '3/8', '5/8', '1/3'], answer: 1 },
        { id: 'psmt3u', q: 'Rzucamy kostką do gry. Jakie jest prawdopodobieństwo wyrzucenia liczby parzystej?', options: ['1/6', '1/3', '1/2', '2/3'], answer: 2, explain: 'Liczby parzyste: 2, 4, 6 – to 3 z 6 możliwości.' },
        { id: 'uomy75', q: 'Rzucamy kostką. Jakie jest prawdopodobieństwo wyrzucenia liczby większej niż 4?', options: ['1/3', '1/2', '2/3', '1/6'], answer: 0, explain: 'Sprzyjające: 5 i 6 → 2/6 = 1/3.' },
        { id: 't358vo', q: 'Losujemy liczbę od 1 do 20. Jakie jest prawdopodobieństwo, że będzie podzielna przez 3?', options: ['1/3', '3/10', '7/20', '1/4'], answer: 1, explain: '3, 6, 9, 12, 15, 18 → 6/20 = 3/10.' },
        { id: 'd72y63', q: 'Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo, że dwa razy wypadnie orzeł?', options: ['1/2', '1/3', '1/4', '2/3'], answer: 2, explain: 'Możliwości: OO, OR, RO, RR – sprzyja tylko OO.' },
        { id: '43rz33', q: 'Ile jest liczb dwucyfrowych, których suma cyfr wynosi 3?', options: ['2', '3', '4', '6'], answer: 1, explain: 'Wypisujemy: 12, 21, 30.' },
        { id: 'pyagqh', q: 'Kasia ma 2 bluzki (biała, czarna) i 3 spódnice (zielona, niebieska, szara). Ile różnych zestawów (bluzka + spódnica) może ułożyć?', options: ['5', '6', '8', '9'], answer: 1, explain: 'Wypisz: biała z każdą z 3 spódnic (3) i czarna z każdą (3) – razem 6.' },
        { id: 'l8d0oz', q: 'Średnia arytmetyczna liczb 2, 4, 6, 8, 10 wynosi…', options: ['5', '7', '30', '6'], answer: 3, explain: '(2 + 4 + 6 + 8 + 10) : 5 = 30 : 5 = 6.' },
        { id: 'gd04c2', q: 'Średnia arytmetyczna pięciu liczb wynosi 7. Ile wynosi ich suma?', options: ['12', '30', '35', '1,4'], answer: 2, explain: 'Suma = średnia · liczba liczb = 7 · 5 = 35.' },
        { id: '8n8tmn', q: 'Średnia trzech liczb wynosi 6. Dwie z nich to 4 i 5. Jaka jest trzecia liczba?', options: ['9', '6', '7', '8'], answer: 0, explain: 'Suma = 3 · 6 = 18; 18 − (4 + 5) = 9.' },
        { id: 'de7omr', q: 'Rzucamy kostką do gry. Jakie jest prawdopodobieństwo wyrzucenia liczby pierwszej?', options: ['1/2', '1/3', '2/3', '1/6'], answer: 0, explain: 'Liczby pierwsze na kostce: 2, 3, 5 – to 3 z 6 wyników.' },
        { id: 'w879vw', q: 'Rzucamy kostką do gry. Jakie jest prawdopodobieństwo wyrzucenia 7 oczek?', options: ['1/6', '1/7', '1', '0'], answer: 3, explain: 'Na kostce nie ma 7 oczek – to zdarzenie niemożliwe.' },
        { id: '2ech0j', q: 'W worku są 4 kule białe, 6 czarnych i 2 zielone. Losujemy jedną. Jakie jest prawdopodobieństwo, że NIE będzie czarna?', options: ['1/3', '1/2', '1/6', '2/3'], answer: 1, explain: 'Nie czarnych jest 4 + 2 = 6 z 12 kul: 6/12 = 1/2.' },
        { id: 'l78cn4', q: 'Ile jest liczb dwucyfrowych zapisanych tylko cyframi 1 i 2 (cyfry mogą się powtarzać)?', options: ['2', '3', '4', '6'], answer: 2, explain: 'Wypisujemy: 11, 12, 21, 22.' },
        { id: 'e5phaa', q: 'Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo, że co najmniej raz wypadnie orzeł?', options: ['3/4', '1/2', '1/4', '2/3'], answer: 0, explain: 'Możliwości: OO, OR, RO, RR – orzeł jest w trzech z czterech.' },
        { id: 'ocztag', q: 'Ile różnych liczb trzycyfrowych można ułożyć z cyfr 1, 2, 3, jeśli każdej cyfry używamy dokładnie raz?', options: ['6', '3', '9', '27'], answer: 0, explain: 'Wypisujemy: 123, 132, 213, 231, 312, 321.' },
        { id: 'ln0ksi', q: 'Prawda czy fałsz?\nPrawdopodobieństwo zdarzenia może wynosić 1,5.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Prawdopodobieństwo jest zawsze liczbą od 0 do 1.' },
        {
          id: 'mi5xy5',
          q: 'Diagram przedstawia oceny z klasówki z matematyki w klasie 8b. Jaka jest średnia arytmetyczna tych ocen?',
          svg: `<svg viewBox="0 0 360 230" role="img" aria-label="Diagram słupkowy liczby uczniów z poszczególnymi ocenami: 1 – 2 osoby, 2 – 3, 3 – 6, 4 – 5, 5 – 3, 6 – 1">
      <line x1="44" y1="190" x2="337" y2="190" class="ln-thin"/>
      <text x="38" y="194" class="tx-s" text-anchor="end">0</text>
      <line x1="44" y1="165" x2="337" y2="165" class="ln-thin"/>
      <text x="38" y="169" class="tx-s" text-anchor="end">1</text>
      <line x1="44" y1="140" x2="337" y2="140" class="ln-thin"/>
      <text x="38" y="144" class="tx-s" text-anchor="end">2</text>
      <line x1="44" y1="115" x2="337" y2="115" class="ln-thin"/>
      <text x="38" y="119" class="tx-s" text-anchor="end">3</text>
      <line x1="44" y1="90" x2="337" y2="90" class="ln-thin"/>
      <text x="38" y="94" class="tx-s" text-anchor="end">4</text>
      <line x1="44" y1="65" x2="337" y2="65" class="ln-thin"/>
      <text x="38" y="69" class="tx-s" text-anchor="end">5</text>
      <line x1="44" y1="40" x2="337" y2="40" class="ln-thin"/>
      <text x="38" y="44" class="tx-s" text-anchor="end">6</text>
      <rect x="61" y="140" width="30" height="50" class="f1 s1"/>
      <text x="76" y="208" class="tx" text-anchor="middle">1</text>
      <rect x="107" y="115" width="30" height="75" class="f1 s1"/>
      <text x="122" y="208" class="tx" text-anchor="middle">2</text>
      <rect x="153" y="40" width="30" height="150" class="f1 s1"/>
      <text x="168" y="208" class="tx" text-anchor="middle">3</text>
      <rect x="199" y="65" width="30" height="125" class="f1 s1"/>
      <text x="214" y="208" class="tx" text-anchor="middle">4</text>
      <rect x="245" y="115" width="30" height="75" class="f1 s1"/>
      <text x="260" y="208" class="tx" text-anchor="middle">5</text>
      <rect x="291" y="165" width="30" height="25" class="f1 s1"/>
      <text x="306" y="208" class="tx" text-anchor="middle">6</text>
      <line x1="44" y1="190" x2="337" y2="190" class="ln"/>
      <line x1="44" y1="190" x2="44" y2="30" class="ln"/>
      <text x="8" y="16" class="tx-s">liczba uczniów</text>
      <text x="356" y="226" class="tx-s" text-anchor="end">ocena</text>
    </svg>`,
          options: ['3,35', '3,5', '3', '4'],
          answer: 0,
          explain: 'Uczniów: 2 + 3 + 6 + 5 + 3 + 1 = 20. Suma ocen: 1 · 2 + 2 · 3 + 3 · 6 + 4 · 5 + 5 · 3 + 6 · 1 = 2 + 6 + 18 + 20 + 15 + 6 = 67. Średnia: 67 : 20 = 3,35.',
        },
        {
          id: '10r78c',
          q: 'Wykres przedstawia temperaturę powietrza zmierzoną w ciągu jednego dnia. O ile stopni wzrosła temperatura od godziny 6:00 do godziny 14:00?',
          svg: `<svg viewBox="0 0 380 250" role="img" aria-label="Wykres temperatury: 6:00 – minus 2, 8:00 – 0, 10:00 – 3, 12:00 – 5, 14:00 – 6, 16:00 – 4, 18:00 – 1 stopień">
      <line x1="60" y1="210" x2="344" y2="210" class="ln-thin"/>
      <text x="54" y="214" class="tx-s" text-anchor="end">−3</text>
      <line x1="60" y1="192" x2="344" y2="192" class="ln-thin"/>
      <text x="54" y="196" class="tx-s" text-anchor="end">−2</text>
      <line x1="60" y1="174" x2="344" y2="174" class="ln-thin"/>
      <text x="54" y="178" class="tx-s" text-anchor="end">−1</text>
      <line x1="60" y1="156" x2="344" y2="156" class="ln"/>
      <text x="54" y="160" class="tx-s" text-anchor="end">0</text>
      <line x1="60" y1="138" x2="344" y2="138" class="ln-thin"/>
      <text x="54" y="142" class="tx-s" text-anchor="end">1</text>
      <line x1="60" y1="120" x2="344" y2="120" class="ln-thin"/>
      <text x="54" y="124" class="tx-s" text-anchor="end">2</text>
      <line x1="60" y1="102" x2="344" y2="102" class="ln-thin"/>
      <text x="54" y="106" class="tx-s" text-anchor="end">3</text>
      <line x1="60" y1="84" x2="344" y2="84" class="ln-thin"/>
      <text x="54" y="88" class="tx-s" text-anchor="end">4</text>
      <line x1="60" y1="66" x2="344" y2="66" class="ln-thin"/>
      <text x="54" y="70" class="tx-s" text-anchor="end">5</text>
      <line x1="60" y1="48" x2="344" y2="48" class="ln-thin"/>
      <text x="54" y="52" class="tx-s" text-anchor="end">6</text>
      <line x1="60" y1="30" x2="344" y2="30" class="ln-thin"/>
      <text x="54" y="34" class="tx-s" text-anchor="end">7</text>
      <line x1="60" y1="210" x2="60" y2="30" class="ln-thin"/>
      <text x="60" y="228" class="tx-s" text-anchor="middle">6:00</text>
      <line x1="105" y1="210" x2="105" y2="30" class="ln-thin"/>
      <text x="105" y="228" class="tx-s" text-anchor="middle">8:00</text>
      <line x1="150" y1="210" x2="150" y2="30" class="ln-thin"/>
      <text x="150" y="228" class="tx-s" text-anchor="middle">10:00</text>
      <line x1="195" y1="210" x2="195" y2="30" class="ln-thin"/>
      <text x="195" y="228" class="tx-s" text-anchor="middle">12:00</text>
      <line x1="240" y1="210" x2="240" y2="30" class="ln-thin"/>
      <text x="240" y="228" class="tx-s" text-anchor="middle">14:00</text>
      <line x1="285" y1="210" x2="285" y2="30" class="ln-thin"/>
      <text x="285" y="228" class="tx-s" text-anchor="middle">16:00</text>
      <line x1="330" y1="210" x2="330" y2="30" class="ln-thin"/>
      <text x="330" y="228" class="tx-s" text-anchor="middle">18:00</text>
      <line x1="60" y1="210" x2="60" y2="20" class="ln"/>
      <polyline points="60,192 105,156 150,102 195,66 240,48 285,84 330,138" class="ln s1 sw"/>
      <circle cx="60" cy="192" r="4" class="t1"/>
      <circle cx="105" cy="156" r="4" class="t1"/>
      <circle cx="150" cy="102" r="4" class="t1"/>
      <circle cx="195" cy="66" r="4" class="t1"/>
      <circle cx="240" cy="48" r="4" class="t1"/>
      <circle cx="285" cy="84" r="4" class="t1"/>
      <circle cx="330" cy="138" r="4" class="t1"/>
      <text x="8" y="16" class="tx-s">temperatura (°C)</text>
    </svg>`,
          options: ['o 8°C', 'o 4°C', 'o 6°C', 'o 2°C'],
          answer: 0,
          explain: 'O 6:00 było −2°C, a o 14:00 było 6°C. Wzrost: 6 − (−2) = 8°C.',
        },
        {
          id: '5pbf9k',
          q: 'Prawda czy fałsz?\nNa podstawie diagramu: średnia dzienna sprzedaż lodów od poniedziałku do piątku wynosiła 40 porcji.',
          svg: `<svg viewBox="0 0 360 240" role="img" aria-label="Diagram słupkowy sprzedaży lodów: poniedziałek 30 porcji, wtorek 45, środa 25, czwartek 40, piątek 60">
      <line x1="44" y1="205" x2="350" y2="205" class="ln-thin"/>
      <text x="38" y="209" class="tx-s" text-anchor="end">0</text>
      <line x1="44" y1="190.8" x2="350" y2="190.8" class="ln-thin"/>
      <line x1="44" y1="176.7" x2="350" y2="176.7" class="ln-thin"/>
      <text x="38" y="180.7" class="tx-s" text-anchor="end">10</text>
      <line x1="44" y1="162.5" x2="350" y2="162.5" class="ln-thin"/>
      <line x1="44" y1="148.3" x2="350" y2="148.3" class="ln-thin"/>
      <text x="38" y="152.3" class="tx-s" text-anchor="end">20</text>
      <line x1="44" y1="134.2" x2="350" y2="134.2" class="ln-thin"/>
      <line x1="44" y1="120" x2="350" y2="120" class="ln-thin"/>
      <text x="38" y="124" class="tx-s" text-anchor="end">30</text>
      <line x1="44" y1="105.8" x2="350" y2="105.8" class="ln-thin"/>
      <line x1="44" y1="91.7" x2="350" y2="91.7" class="ln-thin"/>
      <text x="38" y="95.7" class="tx-s" text-anchor="end">40</text>
      <line x1="44" y1="77.5" x2="350" y2="77.5" class="ln-thin"/>
      <line x1="44" y1="63.3" x2="350" y2="63.3" class="ln-thin"/>
      <text x="38" y="67.3" class="tx-s" text-anchor="end">50</text>
      <line x1="44" y1="49.2" x2="350" y2="49.2" class="ln-thin"/>
      <line x1="44" y1="35" x2="350" y2="35" class="ln-thin"/>
      <text x="38" y="39" class="tx-s" text-anchor="end">60</text>
      <rect x="66" y="120" width="36" height="85" class="f4 s4"/>
      <text x="84" y="223" class="tx" text-anchor="middle">pn</text>
      <rect x="124" y="77.5" width="36" height="127.5" class="f4 s4"/>
      <text x="142" y="223" class="tx" text-anchor="middle">wt</text>
      <rect x="182" y="134.2" width="36" height="70.8" class="f4 s4"/>
      <text x="200" y="223" class="tx" text-anchor="middle">śr</text>
      <rect x="240" y="91.7" width="36" height="113.3" class="f4 s4"/>
      <text x="258" y="223" class="tx" text-anchor="middle">czw</text>
      <rect x="298" y="35" width="36" height="170" class="f4 s4"/>
      <text x="316" y="223" class="tx" text-anchor="middle">pt</text>
      <line x1="44" y1="205" x2="350" y2="205" class="ln"/>
      <line x1="44" y1="205" x2="44" y2="25" class="ln"/>
      <text x="8" y="16" class="tx-s">liczba porcji</text>
    </svg>`,
          options: ['Prawda', 'Fałsz'],
          noShuffle: true,
          answer: 0,
          explain: '(30 + 45 + 25 + 40 + 60) : 5 = 200 : 5 = 40 porcji.',
        },
      ],
      tasks: [
        {
          id: 'sgzj5y',
          points: 2,
          q: 'Średnia ocen Kasi z czterech sprawdzianów wynosi 4. Jaką ocenę musi dostać z piątego sprawdzianu, aby średnia ze wszystkich pięciu wyniosła 4,2?',
          steps: [
            'Suma czterech ocen: 4 · 4 = 16.',
            'Aby średnia z pięciu ocen wyniosła 4,2, suma musi być równa 5 · 4,2 = 21.',
            'Piąta ocena: 21 − 16 = 5.',
          ],
          answer: '5',
          scoring: [
            '1 pkt – obliczenie sumy czterech ocen (16) albo potrzebnej sumy pięciu (21).',
            '2 pkt – odpowiedź: 5.',
          ],
        },
        {
          id: '4wh21h',
          points: 2,
          q: 'W pudełku jest 20 kul – czerwone i niebieskie. Prawdopodobieństwo wylosowania kuli czerwonej wynosi 0,35. Ile kul czerwonych trzeba dołożyć, aby prawdopodobieństwo wylosowania kuli czerwonej wyniosło 1/2?',
          steps: [
            'Kul czerwonych jest 0,35 · 20 = 7, niebieskich 13.',
            'Prawdopodobieństwo 1/2 oznacza, że czerwonych ma być tyle samo co niebieskich, czyli 13.',
            'Trzeba dołożyć 13 − 7 = 6 kul czerwonych (wtedy 13/26 = 1/2).',
          ],
          answer: '6 kul',
          scoring: [
            '1 pkt – obliczenie liczby kul czerwonych (7) i niebieskich (13).',
            '2 pkt – odpowiedź: 6 kul.',
          ],
        },
        {
          id: 'tbd6ls',
          points: 2,
          q: 'Ile jest liczb trzycyfrowych, których suma cyfr jest równa 4? Wypisz je wszystkie.',
          steps: [
            'Pierwsza cyfra nie może być zerem. Wypisz liczby po kolei według cyfry setek.',
            'Setki 1: 103, 112, 121, 130. Setki 2: 202, 211, 220. Setki 3: 301, 310. Setki 4: 400.',
            'Razem 4 + 3 + 2 + 1 = 10 liczb.',
          ],
          answer: '10 liczb: 103, 112, 121, 130, 202, 211, 220, 301, 310, 400',
          scoring: [
            '1 pkt – wypisanie co najmniej połowy liczb w uporządkowany sposób.',
            '2 pkt – wszystkie 10 liczb i poprawna odpowiedź.',
          ],
        },
        {
          id: 'vy3puw',
          points: 3,
          q: 'Diagram przedstawia, ile książek przeczytali w czasie wakacji uczniowie klasy 8a. Oblicz średnią liczbę książek przeczytanych przez jednego ucznia tej klasy. Jaki procent uczniów przeczytał co najmniej 3 książki?',
          svg: `<svg viewBox="0 0 360 230" role="img" aria-label="Diagram słupkowy: 0 książek – 2 uczniów, 1 książka – 5 uczniów, 2 książki – 7 uczniów, 3 książki – 4 uczniów, 4 książki – 2 uczniów">
      <line x1="44" y1="190" x2="340" y2="190" class="ln-thin"/>
      <text x="38" y="194" class="tx-s" text-anchor="end">0</text>
      <line x1="44" y1="170" x2="340" y2="170" class="ln-thin"/>
      <text x="38" y="174" class="tx-s" text-anchor="end">1</text>
      <line x1="44" y1="150" x2="340" y2="150" class="ln-thin"/>
      <text x="38" y="154" class="tx-s" text-anchor="end">2</text>
      <line x1="44" y1="130" x2="340" y2="130" class="ln-thin"/>
      <text x="38" y="134" class="tx-s" text-anchor="end">3</text>
      <line x1="44" y1="110" x2="340" y2="110" class="ln-thin"/>
      <text x="38" y="114" class="tx-s" text-anchor="end">4</text>
      <line x1="44" y1="90" x2="340" y2="90" class="ln-thin"/>
      <text x="38" y="94" class="tx-s" text-anchor="end">5</text>
      <line x1="44" y1="70" x2="340" y2="70" class="ln-thin"/>
      <text x="38" y="74" class="tx-s" text-anchor="end">6</text>
      <line x1="44" y1="50" x2="340" y2="50" class="ln-thin"/>
      <text x="38" y="54" class="tx-s" text-anchor="end">7</text>
      <line x1="44" y1="30" x2="340" y2="30" class="ln-thin"/>
      <text x="38" y="34" class="tx-s" text-anchor="end">8</text>
      <rect x="64" y="150" width="36" height="40" class="f5 s5"/>
      <text x="82" y="208" class="tx" text-anchor="middle">0</text>
      <rect x="120" y="90" width="36" height="100" class="f5 s5"/>
      <text x="138" y="208" class="tx" text-anchor="middle">1</text>
      <rect x="176" y="50" width="36" height="140" class="f5 s5"/>
      <text x="194" y="208" class="tx" text-anchor="middle">2</text>
      <rect x="232" y="110" width="36" height="80" class="f5 s5"/>
      <text x="250" y="208" class="tx" text-anchor="middle">3</text>
      <rect x="288" y="150" width="36" height="40" class="f5 s5"/>
      <text x="306" y="208" class="tx" text-anchor="middle">4</text>
      <line x1="44" y1="190" x2="340" y2="190" class="ln"/>
      <line x1="44" y1="190" x2="44" y2="20" class="ln"/>
      <text x="8" y="16" class="tx-s">liczba uczniów</text>
      <text x="356" y="226" class="tx-s" text-anchor="end">książki</text>
    </svg>`,
          steps: [
            'Liczba uczniów: 2 + 5 + 7 + 4 + 2 = 20.',
            'Liczba przeczytanych książek: 0 · 2 + 1 · 5 + 2 · 7 + 3 · 4 + 4 · 2 = 0 + 5 + 14 + 12 + 8 = 39.',
            'Średnia: 39 : 20 = 1,95 książki na ucznia.',
            'Co najmniej 3 książki przeczytało 4 + 2 = 6 uczniów: 6/20 = 0,3 = 30%.',
          ],
          answer: 'Średnio 1,95 książki; co najmniej 3 książki przeczytało 30% uczniów.',
          scoring: [
            '1 pkt – odczytanie z diagramu liczby uczniów (20) i obliczenie liczby książek (39).',
            '2 pkt – średnia: 1,95 książki.',
            '3 pkt – 30% uczniów przeczytało co najmniej 3 książki.',
          ],
        },
      ],
    },
    {
      id: 'zadania-tekstowe',
      name: 'Prędkość, skala, jednostki',
      basis: 'Informator CKE (matematyka) – kl. IV–VI: XII. Obliczenia praktyczne (m.in. obliczenia zegarowe, skala, prędkość, jednostki).',
      theory: `
        <h3>Droga, prędkość, czas</h3>
        <p><span class="f">v = s / t</span> &nbsp; <span class="f">s = v · t</span> &nbsp; <span class="f">t = s / v</span></p>
        <p>Zamiana jednostek prędkości: <span class="f">1 m/s = 3,6 km/h</span>, więc 72 km/h = 72 : 3,6 = 20 m/s.</p>
        <div class="tip">💡 Pilnuj jednostek: jeśli prędkość jest w km/h, czas musi być w godzinach (45 min = 0,75 h).</div>
        <h3>Skala</h3>
        <p>Skala <b>1 : 50 000</b> oznacza, że 1 cm na mapie to 50 000 cm = 500 m w terenie.</p>
        <h3>Jednostki</h3>
        <table>
          <tr><th>Długość</th><td>1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm</td></tr>
          <tr><th>Pole</th><td>1 m² = 10 000 cm², 1 ha = 10 000 m², 1 km² = 100 ha</td></tr>
          <tr><th>Objętość</th><td>1 dm³ = 1 l, 1 m³ = 1000 l, 1 cm³ = 1 ml</td></tr>
          <tr><th>Masa</th><td>1 t = 1000 kg, 1 kg = 1000 g</td></tr>
          <tr><th>Czas</th><td>1 h = 60 min, 0,5 h = 30 min, 0,25 h = 15 min</td></tr>
        </table>
      `,
      flashcards: [
        ['Wzór na prędkość', 'v = s / t'],
        ['1 m/s = ? km/h', '3,6 km/h'],
        ['Skala 1 : 100 000', '1 cm na mapie = 1 km w terenie'],
        ['1 ha', '10 000 m²'],
        ['1 km²', '100 ha'],
        ['1 m²', '10 000 cm²'],
        ['0,75 h', '45 minut'],
      ],
      questions: [
        { id: 'eaqd87', q: 'Samochód przejechał 240 km w 3 godziny. Jaka była jego średnia prędkość?', options: ['60 km/h', '80 km/h', '72 km/h', '720 km/h'], answer: 1, explain: 'v = 240 : 3 = 80 km/h.' },
        { id: '4rr6gk', q: 'Ile to jest 72 km/h w m/s?', options: ['20 m/s', '7,2 m/s', '259,2 m/s', '12 m/s'], answer: 0, explain: '72 : 3,6 = 20 m/s.' },
        { id: 'r2jr7x', q: 'Rowerzysta jedzie z prędkością 15 km/h. Jaką drogę pokona w 45 minut?', options: ['11,25 km', '10 km', '675 km', '12,5 km'], answer: 0, explain: '45 min = 0,75 h; 15 · 0,75 = 11,25 km.' },
        { id: 'adk7q6', q: 'Na mapie w skali 1 : 50 000 odległość wynosi 4 cm. Ile to w terenie?', options: ['200 m', '2 km', '20 km', '12,5 km'], answer: 1, explain: '4 · 50 000 cm = 200 000 cm = 2 km.' },
        { id: 'aovbkc', q: 'Pokój ma długość 5 m. Ile centymetrów będzie miał na planie w skali 1 : 200?', options: ['25 cm', '10 cm', '2,5 cm', '0,4 cm'], answer: 2, explain: '500 cm : 200 = 2,5 cm.' },
        { id: 'npdo0u', q: 'Ile metrów kwadratowych ma 1 hektar?', options: ['100 m²', '1000 m²', '10 000 m²', '100 000 m²'], answer: 2 },
        { id: '6ealic', q: 'Film zaczyna się o 18:45 i trwa 1 h 50 min. O której się kończy?', options: ['20:35', '20:25', '19:35', '20:45'], answer: 0 },
        { id: 'x7v6v3', q: 'Ile minut to 2,5 godziny?', options: ['125 min', '150 min', '250 min', '130 min'], answer: 1 },
        { id: 'qqylfb', q: 'Prawda czy fałsz?\n1 m³ to 1000 litrów.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
        { id: 'c1ndox', q: 'Pieszy idzie z prędkością 5 km/h. Ile czasu zajmie mu przejście 2 km?', options: ['40 min', '2 h 30 min', '10 min', '24 min'], answer: 3, explain: 't = s/v = 2 : 5 = 0,4 h = 0,4 · 60 min = 24 min.' },
        { id: '9xsk7b', q: 'Ile to jest 10 m/s w km/h?', options: ['3,6 km/h', '100 km/h', '2,8 km/h', '36 km/h'], answer: 3, explain: '10 · 3,6 = 36 km/h.' },
        { id: 'x0ob96', q: 'Pociąg wyjechał o 9:40 i przyjechał o 12:15. Ile trwała podróż?', options: ['2 h 35 min', '2 h 25 min', '3 h 35 min', '3 h 25 min'], answer: 0, explain: 'Od 9:40 do 11:40 są 2 h, a od 11:40 do 12:15 – 35 min.' },
        { id: 'u0jb5f', q: 'Odległość w terenie wynosi 5 km. Ile centymetrów będzie miała na mapie w skali 1 : 25 000?', options: ['2 cm', '20 cm', '200 cm', '0,2 cm'], answer: 1, explain: '5 km = 500 000 cm; 500 000 : 25 000 = 20 cm.' },
        { id: 'husgr3', q: 'Ile centymetrów kwadratowych ma 3 m²?', options: ['300 cm²', '3000 cm²', '300 000 cm²', '30 000 cm²'], answer: 3, explain: '1 m² = 10 000 cm², więc 3 m² = 30 000 cm².' },
        { id: 'btuerv', q: 'Ile kilogramów to 1,2 t?', options: ['120 kg', '12 000 kg', '1200 kg', '12 kg'], answer: 2, explain: '1 t = 1000 kg.' },
        { id: '6oo4mo', q: 'Samochód jedzie ze stałą prędkością 90 km/h. Jaką drogę pokona w 20 minut?', options: ['30 km', '18 km', '45 km', '1800 km'], answer: 0, explain: '20 min = 1/3 h; 90 · 1/3 = 30 km.' },
        { id: 'e9chhq', q: 'Na planie w skali 1 : 100 pokój ma wymiary 4 cm × 3 cm. Jakie jest jego rzeczywiste pole?', options: ['12 m²', '12 cm²', '1,2 m²', '120 m²'], answer: 0, explain: 'Rzeczywiste wymiary: 400 cm × 300 cm = 4 m × 3 m, pole 12 m².' },
        { id: 'zdqnds', q: 'Ile minut to 0,2 h?', options: ['20 min', '2 min', '12 min', '0,2 min'], answer: 2, explain: '0,2 · 60 min = 12 min.' },
        {
          id: 'bw3r5y',
          q: 'Wykres pokazuje, jak zmieniała się odległość rowerzysty od domu. Z jaką średnią prędkością rowerzysta jechał po postoju?',
          svg: `<svg viewBox="0 0 400 245" role="img" aria-label="Wykres odległości rowerzysty od domu: w ciągu pierwszej godziny od 0 do 15 km, od 1 do 1,5 godziny postój na 15 km, od 1,5 do 2,5 godziny od 15 do 35 km">
      <line x1="60" y1="200" x2="370" y2="200" class="ln-thin"/>
      <text x="54" y="204" class="tx-s" text-anchor="end">0</text>
      <line x1="60" y1="180" x2="370" y2="180" class="ln-thin"/>
      <text x="54" y="184" class="tx-s" text-anchor="end">5</text>
      <line x1="60" y1="160" x2="370" y2="160" class="ln-thin"/>
      <text x="54" y="164" class="tx-s" text-anchor="end">10</text>
      <line x1="60" y1="140" x2="370" y2="140" class="ln-thin"/>
      <text x="54" y="144" class="tx-s" text-anchor="end">15</text>
      <line x1="60" y1="120" x2="370" y2="120" class="ln-thin"/>
      <text x="54" y="124" class="tx-s" text-anchor="end">20</text>
      <line x1="60" y1="100" x2="370" y2="100" class="ln-thin"/>
      <text x="54" y="104" class="tx-s" text-anchor="end">25</text>
      <line x1="60" y1="80" x2="370" y2="80" class="ln-thin"/>
      <text x="54" y="84" class="tx-s" text-anchor="end">30</text>
      <line x1="60" y1="60" x2="370" y2="60" class="ln-thin"/>
      <text x="54" y="64" class="tx-s" text-anchor="end">35</text>
      <line x1="60" y1="40" x2="370" y2="40" class="ln-thin"/>
      <text x="54" y="44" class="tx-s" text-anchor="end">40</text>
      <line x1="60" y1="200" x2="60" y2="40" class="ln-thin"/>
      <text x="60" y="218" class="tx-s" text-anchor="middle">0</text>
      <line x1="110" y1="200" x2="110" y2="40" class="ln-thin"/>
      <text x="110" y="218" class="tx-s" text-anchor="middle">0,5</text>
      <line x1="160" y1="200" x2="160" y2="40" class="ln-thin"/>
      <text x="160" y="218" class="tx-s" text-anchor="middle">1</text>
      <line x1="210" y1="200" x2="210" y2="40" class="ln-thin"/>
      <text x="210" y="218" class="tx-s" text-anchor="middle">1,5</text>
      <line x1="260" y1="200" x2="260" y2="40" class="ln-thin"/>
      <text x="260" y="218" class="tx-s" text-anchor="middle">2</text>
      <line x1="310" y1="200" x2="310" y2="40" class="ln-thin"/>
      <text x="310" y="218" class="tx-s" text-anchor="middle">2,5</text>
      <line x1="360" y1="200" x2="360" y2="40" class="ln-thin"/>
      <text x="360" y="218" class="tx-s" text-anchor="middle">3</text>
      <line x1="60" y1="200" x2="376" y2="200" class="ln"/>
      <polyline points="367,195 376,200 367,205" class="ln"/>
      <line x1="60" y1="200" x2="60" y2="26" class="ln"/>
      <polyline points="55,35 60,26 65,35" class="ln"/>
      <polyline points="60,200 160,140 210,140 310,60" class="ln s1 sw"/>
      <text x="8" y="16" class="tx-s">odległość od domu (km)</text>
      <text x="396" y="236" class="tx-s" text-anchor="end">czas (h)</text>
    </svg>`,
          options: ['20 km/h', '35 km/h', '14 km/h', '15 km/h'],
          answer: 0,
          explain: 'Po postoju (od 1,5 h do 2,5 h) rowerzysta przejechał 35 − 15 = 20 km w ciągu 1 godziny, więc v = 20 km/h.',
        },
        {
          id: 'cy73e6',
          q: 'Film zaczął się rano o godzinie pokazanej na zegarze i trwał 1 h 40 min. O której godzinie się skończył?',
          svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Zegar ze wskazówkami: duża wskazówka na 9, mała między 7 a 8 – godzina 7:45">
      <circle cx="160" cy="110" r="92" class="ln sw"/>
      <line x1="160" y1="28" x2="160" y2="19" class="ln"/>
      <line x1="169.1" y1="23.5" x2="169.5" y2="19.5" class="ln-thin"/>
      <line x1="178.1" y1="24.9" x2="178.9" y2="21" class="ln-thin"/>
      <line x1="186.9" y1="27.3" x2="188.1" y2="23.5" class="ln-thin"/>
      <line x1="195.4" y1="30.5" x2="197" y2="26.9" class="ln-thin"/>
      <line x1="201" y1="39" x2="205.5" y2="31.2" class="ln"/>
      <line x1="211.1" y1="39.6" x2="213.5" y2="36.4" class="ln-thin"/>
      <line x1="218.2" y1="45.3" x2="220.9" y2="42.4" class="ln-thin"/>
      <line x1="224.7" y1="51.8" x2="227.6" y2="49.1" class="ln-thin"/>
      <line x1="230.4" y1="58.9" x2="233.6" y2="56.5" class="ln-thin"/>
      <line x1="231" y1="69" x2="238.8" y2="64.5" class="ln"/>
      <line x1="239.5" y1="74.6" x2="243.1" y2="73" class="ln-thin"/>
      <line x1="242.7" y1="83.1" x2="246.5" y2="81.9" class="ln-thin"/>
      <line x1="245.1" y1="91.9" x2="249" y2="91.1" class="ln-thin"/>
      <line x1="246.5" y1="100.9" x2="250.5" y2="100.5" class="ln-thin"/>
      <line x1="242" y1="110" x2="251" y2="110" class="ln"/>
      <line x1="246.5" y1="119.1" x2="250.5" y2="119.5" class="ln-thin"/>
      <line x1="245.1" y1="128.1" x2="249" y2="128.9" class="ln-thin"/>
      <line x1="242.7" y1="136.9" x2="246.5" y2="138.1" class="ln-thin"/>
      <line x1="239.5" y1="145.4" x2="243.1" y2="147" class="ln-thin"/>
      <line x1="231" y1="151" x2="238.8" y2="155.5" class="ln"/>
      <line x1="230.4" y1="161.1" x2="233.6" y2="163.5" class="ln-thin"/>
      <line x1="224.7" y1="168.2" x2="227.6" y2="170.9" class="ln-thin"/>
      <line x1="218.2" y1="174.7" x2="220.9" y2="177.6" class="ln-thin"/>
      <line x1="211.1" y1="180.4" x2="213.5" y2="183.6" class="ln-thin"/>
      <line x1="201" y1="181" x2="205.5" y2="188.8" class="ln"/>
      <line x1="195.4" y1="189.5" x2="197" y2="193.1" class="ln-thin"/>
      <line x1="186.9" y1="192.7" x2="188.1" y2="196.5" class="ln-thin"/>
      <line x1="178.1" y1="195.1" x2="178.9" y2="199" class="ln-thin"/>
      <line x1="169.1" y1="196.5" x2="169.5" y2="200.5" class="ln-thin"/>
      <line x1="160" y1="192" x2="160" y2="201" class="ln"/>
      <line x1="150.9" y1="196.5" x2="150.5" y2="200.5" class="ln-thin"/>
      <line x1="141.9" y1="195.1" x2="141.1" y2="199" class="ln-thin"/>
      <line x1="133.1" y1="192.7" x2="131.9" y2="196.5" class="ln-thin"/>
      <line x1="124.6" y1="189.5" x2="123" y2="193.1" class="ln-thin"/>
      <line x1="119" y1="181" x2="114.5" y2="188.8" class="ln"/>
      <line x1="108.9" y1="180.4" x2="106.5" y2="183.6" class="ln-thin"/>
      <line x1="101.8" y1="174.7" x2="99.1" y2="177.6" class="ln-thin"/>
      <line x1="95.3" y1="168.2" x2="92.4" y2="170.9" class="ln-thin"/>
      <line x1="89.6" y1="161.1" x2="86.4" y2="163.5" class="ln-thin"/>
      <line x1="89" y1="151" x2="81.2" y2="155.5" class="ln"/>
      <line x1="80.5" y1="145.4" x2="76.9" y2="147" class="ln-thin"/>
      <line x1="77.3" y1="136.9" x2="73.5" y2="138.1" class="ln-thin"/>
      <line x1="74.9" y1="128.1" x2="71" y2="128.9" class="ln-thin"/>
      <line x1="73.5" y1="119.1" x2="69.5" y2="119.5" class="ln-thin"/>
      <line x1="78" y1="110" x2="69" y2="110" class="ln"/>
      <line x1="73.5" y1="100.9" x2="69.5" y2="100.5" class="ln-thin"/>
      <line x1="74.9" y1="91.9" x2="71" y2="91.1" class="ln-thin"/>
      <line x1="77.3" y1="83.1" x2="73.5" y2="81.9" class="ln-thin"/>
      <line x1="80.5" y1="74.6" x2="76.9" y2="73" class="ln-thin"/>
      <line x1="89" y1="69" x2="81.2" y2="64.5" class="ln"/>
      <line x1="89.6" y1="58.9" x2="86.4" y2="56.5" class="ln-thin"/>
      <line x1="95.3" y1="51.8" x2="92.4" y2="49.1" class="ln-thin"/>
      <line x1="101.8" y1="45.3" x2="99.1" y2="42.4" class="ln-thin"/>
      <line x1="108.9" y1="39.6" x2="106.5" y2="36.4" class="ln-thin"/>
      <line x1="119" y1="39" x2="114.5" y2="31.2" class="ln"/>
      <line x1="124.6" y1="30.5" x2="123" y2="26.9" class="ln-thin"/>
      <line x1="133.1" y1="27.3" x2="131.9" y2="23.5" class="ln-thin"/>
      <line x1="141.9" y1="24.9" x2="141.1" y2="21" class="ln-thin"/>
      <line x1="150.9" y1="23.5" x2="150.5" y2="19.5" class="ln-thin"/>
      <text x="194" y="57.1" class="tx" text-anchor="middle">1</text>
      <text x="218.9" y="82" class="tx" text-anchor="middle">2</text>
      <text x="228" y="116" class="tx" text-anchor="middle">3</text>
      <text x="218.9" y="150" class="tx" text-anchor="middle">4</text>
      <text x="194" y="174.9" class="tx" text-anchor="middle">5</text>
      <text x="160" y="184" class="tx" text-anchor="middle">6</text>
      <text x="126" y="174.9" class="tx" text-anchor="middle">7</text>
      <text x="101.1" y="150" class="tx" text-anchor="middle">8</text>
      <text x="92" y="116" class="tx" text-anchor="middle">9</text>
      <text x="101.1" y="82" class="tx" text-anchor="middle">10</text>
      <text x="126" y="57.1" class="tx" text-anchor="middle">11</text>
      <text x="160" y="48" class="tx" text-anchor="middle">12</text>
      <line x1="160" y1="110" x2="126.7" y2="135.6" class="ln s1 sw"/>
      <line x1="160" y1="110" x2="104" y2="110" class="ln sw"/>
      <circle cx="160" cy="110" r="4" class="t1"/>
    </svg>`,
          options: ['9:25', '9:15', '8:25', '9:35'],
          answer: 0,
          explain: 'Zegar pokazuje 7:45. 7:45 + 1 h = 8:45, a 8:45 + 40 min = 9:25.',
        },
      ],
      tasks: [
        {
          id: 'hhn56u',
          points: 2,
          q: 'Z miasta A do miasta B jest 180 km. Samochód jechał pierwsze 2 godziny ze średnią prędkością 60 km/h, a resztę drogi ze średnią prędkością 80 km/h. Ile trwała cała podróż?',
          steps: [
            'W ciągu 2 godzin samochód przejechał 2 · 60 = 120 km. Zostało 180 − 120 = 60 km.',
            'Czas na resztę drogi: t = 60 : 80 = 0,75 h = 45 min.',
            'Cała podróż: 2 h + 45 min = 2 h 45 min.',
          ],
          answer: '2 h 45 min',
          scoring: [
            '1 pkt – obliczenie drogi przejechanej w ciągu 2 h (120 km) i pozostałej drogi (60 km).',
            '2 pkt – odpowiedź: 2 h 45 min.',
          ],
        },
        {
          id: 'j43z2j',
          points: 2,
          q: 'Na mapie w skali 1 : 20 000 prostokątna działka ma wymiary 3 cm × 2 cm. Oblicz jej rzeczywiste pole i podaj je w hektarach.',
          steps: [
            '1 cm na mapie to 20 000 cm = 200 m w terenie. Wymiary działki: 3 · 200 = 600 m i 2 · 200 = 400 m.',
            'Pole: 600 · 400 = 240 000 m².',
            '1 ha = 10 000 m², więc 240 000 m² = 24 ha.',
          ],
          answer: '24 ha',
          scoring: [
            '1 pkt – obliczenie rzeczywistych wymiarów działki (600 m i 400 m).',
            '2 pkt – pole w hektarach: 24 ha.',
          ],
        },
        {
          id: 'w3vrd3',
          points: 2,
          q: 'Ania wyszła z domu o 7:20 i szła do szkoły ze stałą prędkością 4 km/h. Droga do szkoły ma 1,2 km, a lekcje zaczynają się o 7:45. Czy Ania zdąży na lekcje? Ile minut przed dzwonkiem albo po dzwonku dojdzie do szkoły?',
          steps: [
            'Czas drogi: t = s : v = 1,2 : 4 = 0,3 h.',
            '0,3 h = 0,3 · 60 min = 18 min.',
            '7:20 + 18 min = 7:38. To 7 minut przed 7:45.',
          ],
          answer: 'Zdąży – dojdzie o 7:38, czyli 7 minut przed dzwonkiem.',
          scoring: [
            '1 pkt – obliczenie czasu drogi: 0,3 h = 18 min.',
            '2 pkt – godzina dojścia 7:38 i odpowiedź, że Ania zdąży (7 minut przed dzwonkiem).',
          ],
        },
        {
          id: 'gko1j7',
          points: 2,
          q: 'Samochód A jedzie z prędkością 25 m/s, a samochód B – z prędkością 80 km/h. Który samochód jedzie szybciej i o ile kilometrów na godzinę?',
          steps: [
            '1 m/s = 3,6 km/h, więc 25 m/s = 25 · 3,6 km/h = 90 km/h. (Inaczej: w ciągu godziny, czyli 3600 s, samochód A przejedzie 25 · 3600 = 90 000 m = 90 km.)',
            '90 km/h > 80 km/h, różnica: 90 − 80 = 10 km/h.',
          ],
          answer: 'Szybciej jedzie samochód A – o 10 km/h.',
          scoring: [
            '1 pkt – zamiana jednostek: 25 m/s = 90 km/h.',
            '2 pkt – odpowiedź: szybciej jedzie samochód A, o 10 km/h.',
          ],
        },
      ],
    },
  ],
});
