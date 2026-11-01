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
      ],
    },
  ],
});
