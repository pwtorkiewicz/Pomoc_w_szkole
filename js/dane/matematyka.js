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
        { id: '8lexsg', q: 'Który trójkąt o podanych bokach jest prostokątny?', options: ['4, 5, 6', '7, 24, 25', '5, 6, 8', '6, 7, 9'], answer: 1, explain: '7² + 24² = 49 + 576 = 625 = 25². W pozostałych suma kwadratów krótszych boków nie jest równa kwadratowi najdłuższego.' },
        { id: 'j3jkz9', q: 'Okrąg ma długość 12π. Jakie jest pole koła ograniczonego tym okręgiem?', options: ['144π', '36π', '12π', '6π'], answer: 1, explain: '2πr = 12π, więc r = 6, a P = πr² = 36π.' },
        { id: 'k7160s', q: 'Prawda czy fałsz?\nKażdy romb ma 4 osie symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Tylko romb, który jest kwadratem, ma 4 osie. Pozostałe romby mają 2 osie symetrii.' },
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
      ],
    },
  ],
});
