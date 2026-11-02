/* Informatyka – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, informatyka, blok kl. VII–VIII, dz. I–V).
 * Podstawa nie dzieli wymagań na klasy VII i VIII – ścieżka klasy 8 obejmuje cały blok (decyzja redakcyjna).
 * Przykłady programów – w Pythonie (podstawa wymaga „tekstowego języka programowania”, ale go nie wskazuje).
 * Fakty o prawie autorskim: ustawa z 4.02.1994 (tekst jedn. Dz.U. 2025 poz. 24); licencje, sieci, arkusz,
 * kodowanie znaków, kompresja, HTML – e-materiały zpe.gov.pl; hasła i phishing – gov.pl (źródła: js/dane/kl8/zrodla.js). */
(function () {
  const PP = 'Dz.U. 2024 poz. 996, informatyka kl. VII–VIII';
  const KL = ' Podstawa nie dzieli wymagań na klasy VII i VIII – ścieżka klasy 8 obejmuje cały blok (decyzja redakcyjna).';
  const PY = ' Przykłady programów w Pythonie – podstawa nie wskazuje języka (decyzja redakcyjna).';
  const TF = ['Prawda', 'Fałsz'];
  const I = '    '; // wcięcie w kodzie w treści pytań (zwykłe spacje by zniknęły)

  window.SUBJECTS.push({
    id: 'informatyka',
    name: 'Informatyka',
    icon: '💻',
    color: '#6c4fc2',
    topics: [
      {
        id: 'algorytmy',
        name: 'Problem, specyfikacja i algorytm',
        basis: PP + ', dz. I, wym. 1 (specyfikacja problemu – dane i wyniki, kroki algorytmicznego rozwiązywania problemów, zapis algorytmu w języku naturalnym i w postaci listy kroków); dz. II, wym. 1 (testowanie programów). Schemat blokowy – jako jeden z „różnych sposobów przedstawiania algorytmów”; symbole bloków według e-materiału zpe.gov.pl „Zapisywanie algorytmów za pomocą schematu blokowego”.' + KL,
        theory: `
          <h3>Od problemu do programu</h3>
          <ol>
            <li><b>Problem</b> – co trzeba rozwiązać.</li>
            <li><b>Specyfikacja</b> – opis <b>danych</b> (co wiemy na początku) i <b>wyniku</b> (co ma powstać).</li>
            <li><b>Algorytm</b> – sposób rozwiązania zapisany krok po kroku.</li>
            <li><b>Program</b> – algorytm zapisany w języku programowania.</li>
            <li><b>Testowanie</b> – uruchamiasz program dla różnych danych, porównujesz wynik ze specyfikacją i poprawiasz błędy.</li>
          </ol>
          <h3>Specyfikacja – przykład</h3>
          <table>
            <tr><th>Problem</th><td>Która z dwóch liczb jest większa?</td></tr>
            <tr><th>Dane</th><td>dwie liczby a i b</td></tr>
            <tr><th>Wynik</th><td>większa z liczb a, b (gdy są równe – ta wspólna wartość)</td></tr>
          </table>
          <h3>Algorytm</h3>
          <p><b>Algorytm</b> to skończony ciąg jasno określonych kroków, który prowadzi od danych do wyniku. Każdy krok musi być jednoznaczny (wiadomo, co zrobić), a algorytm musi się zakończyć.</p>
          <h3>Sposoby zapisu algorytmu</h3>
          <table>
            <tr><th>Sposób</th><th>Jak wygląda</th></tr>
            <tr><td><b>język naturalny</b></td><td>opis zwykłymi zdaniami</td></tr>
            <tr><td><b>lista kroków</b></td><td>ponumerowane kroki; można „skakać”: <i>Krok 4. Jeśli k ≤ 3, przejdź do kroku 2.</i></td></tr>
            <tr><td><b>schemat blokowy</b></td><td>bloki połączone strzałkami</td></tr>
            <tr><td><b>program</b></td><td>zapis w języku programowania, np. w Pythonie</td></tr>
          </table>
          <h3>Lista kroków – przykład</h3>
          <p>Krok 1. Wczytaj a i b.<br>Krok 2. Jeśli a &gt; b, to w = a.<br>Krok 3. Jeśli a ≤ b, to w = b.<br>Krok 4. Wypisz w. Koniec.</p>
          <h3>Bloki schematu blokowego</h3>
          <table>
            <tr><th>Kształt</th><th>Znaczenie</th></tr>
            <tr><td>owal (elipsa)</td><td><b>start</b> albo <b>stop</b> (koniec)</td></tr>
            <tr><td>równoległobok</td><td><b>wczytanie</b> danych albo <b>wypisanie</b> wyniku</td></tr>
            <tr><td>prostokąt</td><td><b>operacja</b>, np. obliczenie <code>s = s + k</code></td></tr>
            <tr><td>romb</td><td><b>warunek</b> – dwa wyjścia: TAK i NIE</td></tr>
            <tr><td>strzałka</td><td>kolejność wykonywania kroków</td></tr>
          </table>
          <h3>Trzy rodzaje instrukcji</h3>
          <ul>
            <li><b>sekwencja</b> – kroki po kolei, jeden po drugim,</li>
            <li><b>warunek</b> (wybór) – „jeśli …, to …, w przeciwnym razie …”,</li>
            <li><b>iteracja</b> (pętla) – powtarzanie kroków, dopóki spełniony jest warunek.</li>
          </ul>
          <div class="tip">💡 Testuj nie tylko „zwykłe” dane, ale też przypadki na granicy: równe liczby, zero, liczby ujemne. Tam najczęściej chowają się błędy.</div>`,
        flashcards: [
          ['Specyfikacja problemu', 'Opis danych (co mamy) i wyniku (co ma powstać)'],
          ['Algorytm', 'Skończony ciąg jednoznacznych kroków prowadzący od danych do wyniku'],
          ['Lista kroków', 'Zapis algorytmu jako ponumerowane kroki, np. „Krok 4. Przejdź do kroku 2”'],
          ['Schemat blokowy', 'Zapis algorytmu za pomocą bloków połączonych strzałkami'],
          ['Owal (elipsa) w schemacie blokowym', 'Start albo stop (koniec) algorytmu'],
          ['Równoległobok w schemacie blokowym', 'Wczytanie danych albo wypisanie wyniku'],
          ['Prostokąt w schemacie blokowym', 'Operacja, np. obliczenie, nadanie wartości'],
          ['Romb w schemacie blokowym', 'Warunek – dwa wyjścia: TAK i NIE'],
          ['Sekwencja', 'Kroki wykonywane po kolei, jeden po drugim'],
          ['Iteracja', 'Powtarzanie kroków (pętla)'],
          ['Testowanie programu', 'Sprawdzanie na różnych danych, czy wynik zgadza się ze specyfikacją'],
        ],
        questions: [
          { id: 'z8vdy8', q: 'Specyfikacja problemu to opis…', options: ['danych i wyniku', 'języka programowania, w którym napiszesz program', 'wyglądu okna programu', 'liczby kroków algorytmu'], answer: 0, explain: 'Specyfikacja mówi, co mamy na początku (dane) i co ma powstać (wynik). Sposób rozwiązania to już algorytm.' },
          { id: '6efsem', q: 'Problem: oblicz pole prostokąta. Co jest DANYMI w specyfikacji?', options: ['pole prostokąta', 'jednostka cm²', 'wzór P = a · b', 'długości boków a i b'], answer: 3, explain: 'Dane to to, co znamy na początku: długości boków. Pole to wynik, a wzór to część algorytmu.' },
          { id: 'dxer36', q: 'Który blok schematu blokowego oznacza warunek?', options: ['owal', 'prostokąt', 'równoległobok', 'romb'], answer: 3, explain: 'Warunek zapisujemy w rombie. Ma dwa wyjścia: TAK i NIE.' },
          { id: '8d8k9r', q: 'Polecenie „Wczytaj a, b” rysujemy w schemacie blokowym w bloku w kształcie…', options: ['rombu', 'prostokąta', 'owalu', 'równoległoboku'], answer: 3, explain: 'Równoległobok oznacza wczytanie danych albo wypisanie wyniku.' },
          { id: '4kvags', q: 'Ile wyjść ma blok warunkowy (romb)?', options: ['jedno', 'trzy', 'dwa – TAK i NIE', 'ani jednego'], answer: 2, explain: 'Warunek jest albo spełniony (TAK), albo nie (NIE) – stąd dwa wyjścia.' },
          { id: '7nbxlb', q: 'Algorytm:\nKrok 1. Wczytaj liczbę n.\nKrok 2. Jeśli n jest parzysta, wypisz „TAK”, w przeciwnym razie wypisz „NIE”.\nKrok 3. Koniec.\nCo wypisze ten algorytm dla n = 7?', options: ['TAK', 'NIE', '7', 'nic'], answer: 1, explain: '7 jest liczbą nieparzystą, więc warunek nie jest spełniony – algorytm wypisze „NIE”.' },
          { id: '9pifhh', q: 'Algorytm:\nKrok 1. s = 0, k = 1.\nKrok 2. s = s + k.\nKrok 3. k = k + 1.\nKrok 4. Jeśli k ≤ 3, przejdź do kroku 2.\nKrok 5. Wypisz s.\nCo wypisze ten algorytm?', options: ['3', '4', '10', '6'], answer: 3, explain: 's = 0 + 1 = 1 (k = 2), s = 1 + 2 = 3 (k = 3), s = 3 + 3 = 6 (k = 4). Teraz k > 3, więc algorytm wypisuje 6.' },
          { id: '9o00us', q: 'Który zapis NIE jest algorytmem?', options: ['„Zrób coś, żeby było dobrze.”', 'ponumerowana instrukcja składania mebla', 'schemat blokowy obliczania średniej trzech liczb', 'program w Pythonie obliczający pole koła'], answer: 0, explain: 'Algorytm składa się z jednoznacznych kroków. „Zrób coś, żeby było dobrze” nie mówi, co dokładnie zrobić.' },
          { id: 'j9m730', q: 'Prawda czy fałsz?\nTen sam algorytm można zapisać na kilka sposobów: zdaniami, listą kroków, schematem blokowym albo programem.', options: TF, noShuffle: true, answer: 0, explain: 'Sposób zapisu się zmienia, ale kroki rozwiązania pozostają te same.' },
          { id: 'mtj3b8', q: 'Powtarzanie tych samych kroków, dopóki spełniony jest warunek, to…', options: ['sekwencja', 'iteracja', 'specyfikacja', 'kompresja'], answer: 1, explain: 'Iteracja to powtarzanie (pętla). Sekwencja to kroki po kolei, bez powtórzeń.' },
          { id: 'gd56s5', q: 'Testujesz program, który ma wypisać większą z dwóch liczb. Który zestaw testów jest najlepszy?', options: ['tylko a = 5, b = 3', 'tylko a = 1, b = 1', 'żaden – wystarczy przeczytać kod', 'a = 5, b = 3; a = 2, b = 9; a = 4, b = 4'], answer: 3, explain: 'Dobre testy sprawdzają różne przypadki: większa pierwsza, większa druga i liczby równe.' },
          { id: '2jokqh', q: 'Prawda czy fałsz?\nAlgorytm może się nigdy nie kończyć, byle każdy jego krok był jasny.', options: TF, noShuffle: true, answer: 1, explain: 'Algorytm musi się zakończyć i dać wynik – to jedna z jego cech.' },
        ],
      },
      {
        id: 'liczby',
        name: 'Podzielność, cyfry i algorytm Euklidesa',
        basis: PP + ', dz. I, wym. 2a (algorytmy na liczbach naturalnych: badanie podzielności, wyodrębnianie cyfr liczby, algorytm Euklidesa); dz. II, wym. 1 (programowanie algorytmów z dz. I pkt 2). Sprawdzanie, czy liczba jest pierwsza – jako przykład badania podzielności.' + PY + KL,
        theory: `
          <h3>Dzielenie z resztą</h3>
          <p>17 : 5 = 3 reszty 2, bo 17 = 5 · 3 + 2. W Pythonie:</p>
          <ul>
            <li><code>17 // 5</code> → <b>3</b> – iloraz całkowity (ile razy 5 mieści się w 17),</li>
            <li><code>17 % 5</code> → <b>2</b> – reszta z dzielenia.</li>
          </ul>
          <p>Reszta jest zawsze mniejsza od dzielnika: przy dzieleniu przez 5 może wynosić 0, 1, 2, 3 albo 4.</p>
          <h3>Podzielność</h3>
          <p>Liczba a jest podzielna przez d, gdy reszta wynosi 0: <code>a % d == 0</code>. Liczba parzysta: <code>n % 2 == 0</code>.</p>
          <p><b>Dzielniki</b> liczby n znajdziesz, sprawdzając po kolei d = 1, 2, …, n. Dzielniki 12: 1, 2, 3, 4, 6, 12.</p>
          <p><b>Liczba pierwsza</b> ma dokładnie dwa dzielniki: 1 i samą siebie (2, 3, 5, 7, 11, 13, …). Liczba 1 nie jest pierwsza. Szukasz dzielnika d od 2 wzwyż – wystarczy sprawdzać, dopóki <b>d · d ≤ n</b> (gdyby n miało dzielnik większy, to miałoby też mniejszy).</p>
<pre><code>def pierwsza(n):
    if n &lt; 2:
        return False
    d = 2
    while d * d &lt;= n:
        if n % d == 0:
            return False
        d = d + 1
    return True</code></pre>
          <h3>Cyfry liczby</h3>
          <p>Ostatnia cyfra: <code>n % 10</code>. Liczba bez ostatniej cyfry: <code>n // 10</code>. Powtarzasz to, dopóki n &gt; 0. Przykład – suma cyfr liczby 472:</p>
          <table>
            <tr><th>n</th><th>n % 10</th><th>suma</th></tr>
            <tr><td>472</td><td>2</td><td>2</td></tr>
            <tr><td>47</td><td>7</td><td>9</td></tr>
            <tr><td>4</td><td>4</td><td>13</td></tr>
            <tr><td>0</td><td colspan="2">koniec – suma cyfr = 13</td></tr>
          </table>
          <h3>Algorytm Euklidesa – NWD</h3>
          <p><b>NWD(a, b)</b> to największy wspólny dzielnik liczb a i b.</p>
          <p><b>Wersja z odejmowaniem:</b> dopóki a ≠ b, od większej liczby odejmij mniejszą. Gdy liczby są równe – to jest NWD.<br>
          (84, 36) → (48, 36) → (12, 36) → (12, 24) → (12, 12), więc NWD(84, 36) = 12.</p>
          <p><b>Wersja z resztą</b> (mniej kroków): dopóki b ≠ 0: r = a % b, a = b, b = r. Wynik: a.</p>
          <table>
            <tr><th>a</th><th>b</th><th>r = a % b</th></tr>
            <tr><td>84</td><td>36</td><td>12</td></tr>
            <tr><td>36</td><td>12</td><td>0</td></tr>
            <tr><td>12</td><td>0</td><td>koniec: NWD = 12</td></tr>
          </table>
<pre><code>def nwd(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r
    return a</code></pre>
          <div class="tip">💡 Obie wersje algorytmu Euklidesa dają ten sam wynik. Wersja z resztą zastępuje wiele odejmowań jednym dzieleniem.</div>`,
        flashcards: [
          ['17 // 5 w Pythonie', '3 – iloraz całkowity'],
          ['17 % 5 w Pythonie', '2 – reszta z dzielenia'],
          ['Jak sprawdzić, czy a dzieli się przez d?', 'a % d == 0 (reszta równa 0)'],
          ['Warunek „n jest parzysta”', 'n % 2 == 0'],
          ['Liczba pierwsza', 'Ma dokładnie dwa dzielniki: 1 i samą siebie'],
          ['Do kiedy szukać dzielnika, sprawdzając, czy n jest pierwsza?', 'Wystarczy, dopóki d · d ≤ n'],
          ['Ostatnia cyfra liczby n', 'n % 10'],
          ['Liczba n bez ostatniej cyfry', 'n // 10'],
          ['NWD', 'Największy wspólny dzielnik dwóch liczb'],
          ['Euklides – wersja z odejmowaniem', 'Dopóki a ≠ b: od większej odejmij mniejszą; wynik – wspólna wartość'],
          ['Euklides – wersja z resztą', 'Dopóki b ≠ 0: r = a % b, a = b, b = r; wynik – a'],
          ['NWD(84, 36)', '12'],
        ],
        questions: [
          { id: '08zl70', q: 'Ile wynosi 23 % 10 w Pythonie?', options: ['2', '13', '2.3', '3'], answer: 3, explain: '23 = 10 · 2 + 3, więc reszta z dzielenia przez 10 to 3 – ostatnia cyfra liczby.' },
          { id: 'wcynxu', q: 'Ile wynosi 23 // 10 w Pythonie?', options: ['2', '3', '2.3', '0'], answer: 0, explain: '// to dzielenie całkowite: 10 mieści się w 23 dwa razy. To liczba 23 bez ostatniej cyfry.' },
          { id: 'gaghi9', q: 'Który warunek sprawdza, czy liczba n jest podzielna przez 3?', options: ['n / 3 == 0', 'n // 3 == 0', 'n % 3 == 0', 'n * 3 == 0'], answer: 2, explain: 'Podzielność = reszta 0, a resztę daje operator %.' },
          { id: 'f9dmsz', q: 'Który zestaw to wszystkie dzielniki liczby 28?', options: ['1, 2, 4, 7, 14, 28', '2, 4, 7, 14', '1, 2, 4, 6, 7, 14, 28', '1, 28'], answer: 0, explain: '28 = 1 · 28 = 2 · 14 = 4 · 7. Liczba 6 nie dzieli 28 (reszta 4).' },
          { id: 'q8vpzy', q: 'Która z liczb jest pierwsza?', options: ['91', '51', '1', '97'], answer: 3, explain: '91 = 7 · 13, 51 = 3 · 17, a 1 ma tylko jeden dzielnik. 97 nie dzieli się przez 2, 3, 5 ani 7 (a 10 · 10 > 97), więc jest pierwsza.' },
          { id: 'e5ajru', q: 'Sprawdzasz, czy 101 jest liczbą pierwszą, szukając dzielnika d = 2, 3, 4, … Do jakiego d wystarczy dojść?', options: ['do 100', 'do 50', 'do 10', 'do 2'], answer: 2, explain: 'Wystarczy sprawdzać, dopóki d · d ≤ 101. 10 · 10 = 100 ≤ 101, a 11 · 11 = 121 > 101.' },
          { id: 'x2la4x', q: 'Program dla n = 5083 powtarza: wypisz n % 10, potem n = n // 10 – dopóki n > 0. Co wypisze?', options: ['5 0 8 3', '3 8 0 5', '3 8 5', '5083'], answer: 1, explain: 'Cyfry wychodzą od końca: 3 (n = 508), 8 (n = 50), 0 (n = 5), 5 (n = 0 – koniec).' },
          { id: 'xgzdjj', q: 'NWD(48, 18) wynosi…', options: ['6', '3', '9', '2'], answer: 0, explain: '48 % 18 = 12, 18 % 12 = 6, 12 % 6 = 0 – wynik 6.' },
          { id: '6ll5ne', q: 'Algorytm Euklidesa z odejmowaniem dla a = 35, b = 14. Jaka para liczb będzie po pierwszym kroku?', options: ['(35, 21)', '(14, 35)', '(7, 14)', '(21, 14)'], answer: 3, explain: 'Od większej odejmujemy mniejszą: 35 − 14 = 21, więc (21, 14). Dalej: (7, 14), (7, 7) – NWD = 7.' },
          { id: 'tskwg5', q: 'Euklides z resztą: a = 56, b = 21. Ile wynosi r = a % b w pierwszym obrocie pętli?', options: ['35', '2', '7', '14'], answer: 3, explain: '56 = 21 · 2 + 14, więc r = 14. Potem: 21 % 14 = 7, 14 % 7 = 0 – NWD = 7.' },
          { id: 'lykbma', q: 'Kiedy kończy się algorytm Euklidesa w wersji z resztą?', options: ['gdy a = 0', 'gdy b = 0 – wynikiem jest a', 'gdy r = 1', 'po 10 obrotach pętli'], answer: 1, explain: 'Pętla działa, dopóki b ≠ 0. Gdy b = 0, w a jest NWD.' },
          { id: 'ialqk0', q: 'Prawda czy fałsz?\nAlgorytm Euklidesa w wersji z resztą i w wersji z odejmowaniem daje ten sam wynik.', options: TF, noShuffle: true, answer: 0, explain: 'Obie wersje liczą NWD – różnią się tylko liczbą kroków.' },
          { id: 'ejzr6h', q: 'Prawda czy fałsz?\nReszta z dzielenia liczby naturalnej przez 7 może wynosić 7.', options: TF, noShuffle: true, answer: 1, explain: 'Reszta jest zawsze mniejsza od dzielnika: przy dzieleniu przez 7 to 0, 1, …, 6.' },
        ],
        tasks: [
          {
            id: '8adc5a',
            points: 3,
            q: 'Oblicz NWD(252, 105) algorytmem Euklidesa w wersji z resztą. Zapisz kolejne wartości a, b i r.',
            steps: [
              '252 % 105 = 42 (252 = 105 · 2 + 42) → a = 105, b = 42.',
              '105 % 42 = 21 (105 = 42 · 2 + 21) → a = 42, b = 21.',
              '42 % 21 = 0 → a = 21, b = 0 – koniec pętli.',
              'Sprawdzenie: 252 = 21 · 12, 105 = 21 · 5, a liczby 12 i 5 nie mają wspólnego dzielnika większego od 1.',
            ],
            answer: 'NWD(252, 105) = 21',
            scoring: [
              '1 pkt – poprawny pierwszy krok: r = 42, nowa para (105, 42).',
              '1 pkt – poprawne dalsze kroki: r = 21, potem r = 0.',
              '1 pkt – poprawny wynik: NWD = 21.',
            ],
          },
          {
            id: 'd72yo3',
            points: 2,
            q: 'Przeprowadź algorytm Euklidesa w wersji z odejmowaniem dla a = 24 i b = 18. Zapisz parę (a, b) po każdym kroku i podaj NWD.',
            steps: [
              '24 > 18, więc a = 24 − 18 = 6 → (6, 18).',
              '18 > 6, więc b = 18 − 6 = 12 → (6, 12).',
              '12 > 6, więc b = 12 − 6 = 6 → (6, 6). Liczby są równe – koniec.',
              'Sprawdzenie: 24 = 6 · 4, 18 = 6 · 3, a 4 i 3 nie mają wspólnego dzielnika większego od 1.',
            ],
            answer: '(6, 18) → (6, 12) → (6, 6); NWD(24, 18) = 6',
            scoring: [
              '1 pkt – poprawne pary po kolejnych krokach.',
              '1 pkt – poprawny wynik: NWD = 6.',
            ],
          },
        ],
      },
      {
        id: 'szukanie',
        name: 'Wyszukiwanie i sortowanie przez wybieranie',
        basis: PP + ', dz. I, wym. 2b (wyszukiwanie elementu w zbiorze nieuporządkowanym, porządkowanie metodą przez proste wybieranie); dz. II, wym. 1 (programowanie tych algorytmów, tablice). Szukanie największego elementu – jako przykład przeglądania zbioru nieuporządkowanego.' + PY + KL,
        theory: `
          <h3>Szukanie w zbiorze nieuporządkowanym</h3>
          <p>Gdy elementy nie są uporządkowane, nie wiesz, gdzie szukać. Przeglądasz je <b>po kolei</b>: porównujesz każdy element z szukanym, aż go znajdziesz albo skończą się elementy. W najgorszym razie (elementu nie ma albo jest na końcu) wykonasz <b>n porównań</b> dla n elementów.</p>
<pre><code>def szukaj(t, x):
    for i in range(len(t)):
        if t[i] == x:
            return i
    return -1</code></pre>
          <p>Funkcja zwraca indeks pierwszego wystąpienia x, a gdy x nie ma w tablicy – umówioną wartość −1. Indeksy w Pythonie liczymy od 0: <code>szukaj([4, 9, 2, 9], 9)</code> → 1.</p>
          <h3>Największy element – metoda „kandydata”</h3>
          <p>Pierwszy element to kandydat. Porównujesz go z kolejnymi – większy element zostaje nowym kandydatem. Dla n liczb wystarczy <b>n − 1 porównań</b>. Najmniejszy element szukasz tak samo.</p>
          <h3>Sortowanie przez proste wybieranie</h3>
          <p>Porządkujemy rosnąco (od najmniejszego). Jedno <b>przejście</b>:</p>
          <ol>
            <li>w nieposortowanej części znajdź <b>najmniejszy</b> element,</li>
            <li><b>zamień</b> go miejscami z pierwszym elementem tej części.</li>
          </ol>
          <p>Po każdym przejściu posortowana część rośnie o jeden element. Dla n elementów wystarczy <b>n − 1 przejść</b> (ostatni element sam trafia na miejsce).</p>
          <table>
            <tr><th>Przejście</th><th>Tablica</th><th>Co się stało</th></tr>
            <tr><td>start</td><td>5, 2, 8, 1, 4</td><td></td></tr>
            <tr><td>1.</td><td><b>1</b>, 2, 8, 5, 4</td><td>najmniejsze 1 zamienione z 5</td></tr>
            <tr><td>2.</td><td><b>1, 2</b>, 8, 5, 4</td><td>2 już stoi na miejscu</td></tr>
            <tr><td>3.</td><td><b>1, 2, 4</b>, 5, 8</td><td>4 zamienione z 8</td></tr>
            <tr><td>4.</td><td><b>1, 2, 4, 5, 8</b></td><td>5 już na miejscu – gotowe</td></tr>
          </table>
<pre><code>def sortuj(t):
    n = len(t)
    for i in range(n - 1):
        m = i
        for j in range(i + 1, n):
            if t[j] &lt; t[m]:
                m = j
        t[i], t[m] = t[m], t[i]</code></pre>
          <p><code>m</code> to indeks najmniejszego elementu w części od <code>i</code> do końca. Zapis <code>t[i], t[m] = t[m], t[i]</code> zamienia dwa elementy miejscami.</p>
          <div class="tip">💡 Po k przejściach sortowania przez wybieranie pierwsze k elementów stoi już na swoich ostatecznych miejscach.</div>`,
        flashcards: [
          ['Wyszukiwanie w zbiorze nieuporządkowanym', 'Przeglądasz elementy po kolei, aż znajdziesz szukany albo skończą się elementy'],
          ['Ile porównań w najgorszym razie przy szukaniu wśród n nieuporządkowanych elementów?', 'n'],
          ['Szukanie największego elementu', 'Pierwszy element to kandydat; każdy większy element zostaje nowym kandydatem'],
          ['Ile porównań, by znaleźć największą z n liczb?', 'n − 1'],
          ['Jedno przejście sortowania przez wybieranie', 'Znajdź najmniejszy element nieposortowanej części i zamień go z jej pierwszym elementem'],
          ['Ile przejść przy sortowaniu n elementów przez wybieranie?', 'n − 1'],
          ['Po k przejściach sortowania przez wybieranie…', '…pierwsze k elementów stoi na swoich miejscach'],
          ['Indeks pierwszego elementu tablicy w Pythonie', '0'],
          ['Co zwraca funkcja szukaj, gdy elementu nie ma?', 'Umówioną wartość, np. −1'],
          ['Porządek rosnący', 'Od najmniejszego do największego'],
        ],
        questions: [
          { id: 'akg88d', q: 'Szukasz liczby 7 w nieuporządkowanej tablicy 4, 9, 7, 1, 7. Algorytm przegląda elementy od lewej. Przy którym elemencie (licząc od 1) się zatrzyma?', options: ['przy 5.', 'przy 2.', 'przy 1.', 'przy 3.'], answer: 3, explain: 'Porównuje 4, 9, a trzeci element to 7 – znaleziony. Dalej już nie szuka.' },
          { id: 'jluy4m', q: 'W nieuporządkowanej tablicy jest 50 liczb. Ile porównań wykona wyszukiwanie po kolei w najgorszym przypadku?', options: ['1', '25', '50', '2500'], answer: 2, explain: 'W najgorszym razie trzeba porównać szukaną liczbę z każdym z 50 elementów.' },
          { id: 'wnke2e', q: 'Dlaczego w zbiorze nieuporządkowanym nie można przerwać szukania wcześniej, np. w połowie?', options: ['bo szukany element może być na samym końcu', 'bo komputer liczy tylko do połowy', 'bo tak każe każda specyfikacja', 'bo pierwsza połowa jest zawsze pusta'], answer: 0, explain: 'Elementy nie mają żadnego porządku, więc szukany może stać gdziekolwiek – także na końcu.' },
          { id: 'zcsa8n', q: 'Ile porównań potrzeba, by metodą „kandydata” znaleźć największą z 10 liczb?', options: ['10', '20', '5', '9'], answer: 3, explain: 'Pierwsza liczba jest kandydatem, a każdą z pozostałych 9 porównujemy z nim raz.' },
          { id: '0u1wtl', q: 'Sortujesz rosnąco przez proste wybieranie tablicę 5, 2, 8, 1, 4. Jak wygląda po pierwszym przejściu?', options: ['1, 2, 8, 5, 4', '2, 5, 8, 1, 4', '1, 2, 4, 5, 8', '1, 5, 2, 8, 4'], answer: 0, explain: 'Najmniejszy element to 1 – zamienia się miejscami z pierwszym elementem (5).' },
          { id: '3vx6zr', q: 'Tablica 6, 3, 9, 1 – jak wygląda po pierwszym przejściu sortowania rosnąco przez wybieranie?', options: ['3, 6, 9, 1', '1, 6, 3, 9', '1, 3, 9, 6', '1, 3, 6, 9'], answer: 2, explain: 'Najmniejsze jest 1 – zamienia się z 6. Reszta zostaje na miejscach: 1, 3, 9, 6.' },
          { id: 'd8nj1n', q: 'Ile przejść wykona sortowanie przez wybieranie dla 8 elementów?', options: ['8', '4', '64', '7'], answer: 3, explain: 'n − 1 = 7. Po 7 przejściach ostatni element sam jest na swoim miejscu.' },
          { id: 'kfg1oc', q: 'Co robi jedno przejście sortowania przez proste wybieranie?', options: ['zamienia miejscami każde dwa sąsiednie elementy', 'wybiera najmniejszy element nieposortowanej części i stawia go na jej początku', 'dzieli tablicę na pół', 'usuwa powtarzające się elementy'], answer: 1, explain: 'Stąd nazwa: w każdym przejściu wybieramy najmniejszy z pozostałych elementów.' },
          { id: 'k18yx8', q: 'Prawda czy fałsz?\nPo trzecim przejściu sortowania przez wybieranie trzy pierwsze elementy tablicy stoją już na swoich ostatecznych miejscach.', options: TF, noShuffle: true, answer: 0, explain: 'Każde przejście ustawia na miejscu jeden kolejny element – najmniejszy z pozostałych.' },
          { id: '12c0oh', q: 'Funkcja szukaj ze ściągi zwraca indeks pierwszego wystąpienia x albo −1. Co zwróci szukaj([4, 9, 2, 9], 9)?', options: ['1', '3', '9', '−1'], answer: 0, explain: 'Indeksy liczymy od 0: t[0] = 4, t[1] = 9 – znaleziono przy indeksie 1.' },
          { id: '7kp2i7', q: 'A co zwróci szukaj([4, 9, 2, 9], 5)?', options: ['0', '4', '−1', '5'], answer: 2, explain: 'Liczby 5 nie ma w tablicy – pętla się kończy i funkcja zwraca −1.' },
          { id: 'tzd0ch', q: 'Sortujesz rosnąco 3, 1, 2. Ile razy elementy naprawdę zamienią się miejscami podczas sortowania przez wybieranie?', options: ['1', '2', '3', '0'], answer: 1, explain: '1. przejście: 1 zamienia się z 3 → 1, 3, 2. 2. przejście: 2 zamienia się z 3 → 1, 2, 3. Razem 2 zamiany.' },
        ],
        tasks: [
          {
            id: 'l5itja',
            points: 3,
            q: 'Uporządkuj rosnąco tablicę 7, 3, 9, 2, 6 metodą przez proste wybieranie. Zapisz wygląd tablicy po każdym przejściu.',
            steps: [
              '1. przejście: najmniejszy element to 2 – zamiana z 7 → 2, 3, 9, 7, 6.',
              '2. przejście: w części 3, 9, 7, 6 najmniejsze jest 3 – stoi już na miejscu → 2, 3, 9, 7, 6.',
              '3. przejście: w części 9, 7, 6 najmniejsze jest 6 – zamiana z 9 → 2, 3, 6, 7, 9.',
              '4. przejście: w części 7, 9 najmniejsze jest 7 – stoi na miejscu → 2, 3, 6, 7, 9. Dla 5 elementów to ostatnie (n − 1 = 4) przejście.',
            ],
            answer: '2, 3, 9, 7, 6 → 2, 3, 9, 7, 6 → 2, 3, 6, 7, 9 → 2, 3, 6, 7, 9',
            scoring: [
              '1 pkt – poprawne pierwsze przejście (2, 3, 9, 7, 6).',
              '1 pkt – poprawne trzecie przejście (zamiana 9 z 6).',
              '1 pkt – wszystkie 4 przejścia zapisane poprawnie i tablica posortowana.',
            ],
          },
        ],
      },
      {
        id: 'reprezentacja',
        name: 'System dwójkowy, kody znaków i wartości logiczne',
        basis: PP + ', dz. I, wym. 3 (reprezentowanie w komputerze wartości logicznych, liczb naturalnych – system binarny, znaków – kody ASCII – i tekstów); dz. III, wym. 3 (terminologia). Kod ASCII i Unicode – według e-materiału zpe.gov.pl „Reprezentacja tekstu w komputerze”; kody znaków sprawdzone w Pythonie (ord).' + KL,
        theory: `
          <h3>Bit i bajt</h3>
          <p><b>Bit</b> to najmniejsza porcja informacji: 0 albo 1. <b>Bajt</b> = 8 bitów.</p>
          <p>Na n bitach zapiszesz 2<sup>n</sup> różnych układów: 1 bit – 2, 2 bity – 4, 3 bity – 8, 8 bitów – <b>256</b> (liczby od 0 do 255).</p>
          <h3>System dwójkowy (binarny)</h3>
          <p>Cyfry to tylko 0 i 1. Każda pozycja ma <b>wagę</b> – kolejną potęgę dwójki (od prawej):</p>
          <table>
            <tr><th>waga</th><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr>
            <tr><th>1011<sub>2</sub></th><td></td><td></td><td></td><td></td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
          </table>
          <p>1011<sub>2</sub> = 8 + 2 + 1 = <b>11</b>. Dodajesz wagi tych pozycji, na których stoi 1.</p>
          <h3>Z dziesiętnego na dwójkowy</h3>
          <p>Dziel liczbę przez 2, zapisuj <b>reszty</b>, aż dojdziesz do 0. Reszty czytaj <b>od dołu</b>.</p>
          <table>
            <tr><th>dzielenie</th><th>reszta</th></tr>
            <tr><td>13 : 2 = 6</td><td>1</td></tr>
            <tr><td>6 : 2 = 3</td><td>0</td></tr>
            <tr><td>3 : 2 = 1</td><td>1</td></tr>
            <tr><td>1 : 2 = 0</td><td>1</td></tr>
          </table>
          <p>Od dołu: 13 = <b>1101<sub>2</sub></b>. Sprawdzenie: 8 + 4 + 1 = 13.</p>
          <h3>Wartości logiczne</h3>
          <p>Prawda i fałsz – w Pythonie <code>True</code> i <code>False</code>, w komputerze 1 i 0. Wynikiem porównania (np. <code>5 &gt; 3</code>) jest wartość logiczna.</p>
          <table>
            <tr><th>p</th><th>q</th><th>p and q (i)</th><th>p or q (lub)</th></tr>
            <tr><td>prawda</td><td>prawda</td><td>prawda</td><td>prawda</td></tr>
            <tr><td>prawda</td><td>fałsz</td><td>fałsz</td><td>prawda</td></tr>
            <tr><td>fałsz</td><td>prawda</td><td>fałsz</td><td>prawda</td></tr>
            <tr><td>fałsz</td><td>fałsz</td><td>fałsz</td><td>fałsz</td></tr>
          </table>
          <p><code>not</code> (nie) zmienia prawdę w fałsz i odwrotnie.</p>
          <h3>Znaki – kod ASCII</h3>
          <p>Każdy znak ma swój numer – <b>kod</b>. Podstawowy kod <b>ASCII</b> ma <b>128 znaków</b> (kody 0–127, 7 bitów): litery alfabetu łacińskiego, cyfry, znaki interpunkcyjne i znaki sterujące.</p>
          <table>
            <tr><th>znak</th><td>A</td><td>B</td><td>Z</td><td>a</td><td>b</td><td>0</td><td>␣</td></tr>
            <tr><th>kod</th><td>65</td><td>66</td><td>90</td><td>97</td><td>98</td><td>48</td><td>32</td></tr>
          </table>
          <p>␣ oznacza spację. Kolejne litery mają kolejne kody, a mała litera ma kod o 32 większy niż wielka. W ASCII nie ma polskich liter (ą, ł, ż…) – dlatego powstały inne systemy kodowania, dziś najczęściej <b>Unicode</b> (np. w kodowaniu UTF-8). Jego pierwsze 128 kodów jest takie samo jak w ASCII.</p>
          <h3>Tekst</h3>
          <p>Tekst to ciąg kodów znaków: „Ala” → 65, 108, 97. W Pythonie <code>ord("A")</code> → 65, a <code>chr(66)</code> → "B".</p>
          <div class="tip">💡 Znak „7” w tekście to nie liczba 7 – ma kod 55 (48 + 7). Dlatego tekst wczytany z klawiatury trzeba zamienić na liczbę, zanim zaczniesz liczyć.</div>`,
        flashcards: [
          ['Bit', 'Najmniejsza porcja informacji: 0 albo 1'],
          ['Bajt', '8 bitów'],
          ['Ile różnych wartości zapiszesz na 8 bitach?', '256 (od 0 do 255)'],
          ['Wagi pozycji w systemie dwójkowym (od prawej)', '1, 2, 4, 8, 16, 32, 64, 128…'],
          ['1011₂ w systemie dziesiętnym', '11 (8 + 2 + 1)'],
          ['13 w systemie dwójkowym', '1101₂'],
          ['Zamiana liczby dziesiętnej na dwójkową', 'Dziel przez 2, zapisuj reszty, czytaj je od dołu'],
          ['Kod ASCII litery A', '65'],
          ['Kod ASCII litery a', '97 (o 32 więcej niż A)'],
          ['Ile znaków ma podstawowy kod ASCII?', '128 (kody 0–127, 7 bitów)'],
          ['p and q', 'Prawda tylko wtedy, gdy p i q są prawdziwe'],
          ['p or q', 'Prawda, gdy co najmniej jedno z p, q jest prawdziwe'],
        ],
        questions: [
          { id: 'r830bj', q: 'Ile to jest 10101₂ w systemie dziesiętnym?', options: ['21', '10101', '11', '42'], answer: 0, explain: 'Jedynki stoją na pozycjach o wagach 16, 4 i 1: 16 + 4 + 1 = 21.' },
          { id: 'bk99yo', q: 'Jak zapisać liczbę 6 w systemie dwójkowym?', options: ['101', '1100', '011', '110'], answer: 3, explain: '6 = 4 + 2, czyli jedynki na pozycjach 4 i 2: 110₂.' },
          { id: 'l39yp3', q: 'Ile to jest 11111111₂?', options: ['8', '128', '255', '256'], answer: 2, explain: '128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255 – największa liczba, jaką zapiszesz na 8 bitach.' },
          { id: '1fv5ug', q: 'Ile różnych liczb można zapisać na 4 bitach?', options: ['4', '8', '15', '16'], answer: 3, explain: '2⁴ = 16 układów: od 0000 do 1111, czyli liczby od 0 do 15.' },
          { id: 'xo52cw', q: 'Zamieniasz 19 na system dwójkowy. Jaki jest wynik?', options: ['11001', '10011', '10101', '10010'], answer: 1, explain: '19 = 16 + 2 + 1, więc 10011₂. Dzieląc przez 2: reszty 1, 1, 0, 0, 1 – czytane od dołu dają 10011.' },
          { id: 'fkf6id', q: 'Litera A ma kod ASCII 65. Jaki kod ma litera D?', options: ['68', '69', '67', '100'], answer: 0, explain: 'Kolejne litery mają kolejne kody: A 65, B 66, C 67, D 68.' },
          { id: 'xk0dg9', q: 'Litera B ma kod ASCII 66. Jaki kod ma litera b?', options: ['67', '34', '98', '132'], answer: 2, explain: 'Mała litera ma kod o 32 większy od wielkiej: 66 + 32 = 98.' },
          { id: 'gplvbx', q: 'Dlaczego w podstawowym kodzie ASCII nie ma liter „ą” czy „ł”?', options: ['bo ma tylko 128 znaków – alfabet łaciński bez liter narodowych', 'bo polskie litery zapisuje się obrazkami', 'bo komputer nie umie pisać po polsku', 'bo ASCII zawiera tylko cyfry'], answer: 0, explain: 'Podstawowy ASCII to 128 znaków. Litery narodowe obsługują inne systemy kodowania, dziś najczęściej Unicode.' },
          { id: 'ax84we', q: 'Co wypisze Python: print(ord("C"))?', options: ['3', '67', 'C', '99'], answer: 1, explain: 'ord podaje kod znaku. A = 65, B = 66, C = 67.' },
          { id: 'sx97v4', q: 'Jaką wartość ma wyrażenie (5 > 3) and (2 > 4)?', options: ['True', '5', 'False', '2'], answer: 2, explain: '5 > 3 to prawda, ale 2 > 4 to fałsz. and wymaga prawdy po obu stronach, więc wynik to False.' },
          { id: 'aohpen', q: 'Jaką wartość ma wyrażenie (5 > 3) or (2 > 4)?', options: ['False', 'True', '3', '4'], answer: 1, explain: 'or wystarczy jedna prawda: 5 > 3 jest prawdą, więc wynik to True.' },
          { id: '7p9wh7', q: 'Prawda czy fałsz?\nZnak „7” w tekście ma w ASCII ten sam kod co liczba 7.', options: TF, noShuffle: true, answer: 1, explain: 'Znak „7” ma kod 55 (cyfra 0 ma kod 48). To nie to samo co liczba 7.' },
          { id: 'tgdikg', q: 'Prawda czy fałsz?\nDopisanie zera na końcu liczby dwójkowej podwaja jej wartość (np. 101₂ → 1010₂).', options: TF, noShuffle: true, answer: 0, explain: 'Każda cyfra przesuwa się na pozycję o dwa razy większej wadze: 101₂ = 5, 1010₂ = 10.' },
        ],
        tasks: [
          {
            id: 'k2tuv9',
            points: 2,
            q: 'Zamień liczbę 45 na system dwójkowy. Pokaż dzielenie przez 2 i sprawdź wynik.',
            steps: [
              '45 : 2 = 22 r. 1; 22 : 2 = 11 r. 0; 11 : 2 = 5 r. 1.',
              '5 : 2 = 2 r. 1; 2 : 2 = 1 r. 0; 1 : 2 = 0 r. 1.',
              'Reszty czytane od dołu: 101101.',
              'Sprawdzenie: 32 + 8 + 4 + 1 = 45.',
            ],
            answer: '45 = 101101₂',
            scoring: [
              '1 pkt – poprawne dzielenia przez 2 i reszty.',
              '1 pkt – poprawny wynik 101101₂ (reszty czytane od dołu).',
            ],
          },
          {
            id: 'yf8aqb',
            points: 2,
            q: 'Zamień liczbę 1100100₂ na system dziesiętny.',
            steps: [
              'Wagi pozycji od prawej: 1, 2, 4, 8, 16, 32, 64.',
              'Jedynki stoją na pozycjach o wagach 64, 32 i 4.',
              '64 + 32 + 4 = 100.',
            ],
            answer: '1100100₂ = 100',
            scoring: [
              '1 pkt – poprawne przypisanie wag pozycjom.',
              '1 pkt – poprawny wynik: 100.',
            ],
          },
          {
            id: 'rkxcxx',
            points: 2,
            q: 'Litera A ma w ASCII kod 65, a kolejne litery alfabetu łacińskiego mają kolejne kody. Zapisz słowo KOT za pomocą kodów ASCII.',
            steps: [
              'Kolejność liter: A, B, C, D, E, F, G, H, I, J, K – K jest 11. literą, więc ma kod 65 + 10 = 75.',
              'O jest 15. literą: 65 + 14 = 79. T jest 20. literą: 65 + 19 = 84.',
            ],
            answer: 'KOT → 75, 79, 84',
            scoring: [
              '1 pkt – poprawna metoda (kod = 65 + numer litery − 1).',
              '1 pkt – wszystkie trzy kody poprawne: 75, 79, 84.',
            ],
          },
        ],
      },
      {
        id: 'python',
        name: 'Program: zmienne, wejście, wyjście i warunki',
        basis: PP + ', dz. II, wym. 1 (projektowanie, tworzenie i testowanie programów: instrukcje wejścia/wyjścia, wyrażenia arytmetyczne i logiczne, instrukcje warunkowe, zmienne). Warunki realizacji: w kl. VII–VIII „pierwsze kroki w tekstowym języku programowania”.' + PY + KL,
        theory: `
          <h3>Zmienne</h3>
          <p><b>Zmienna</b> to nazwane miejsce w pamięci na wartość. Znak <code>=</code> oznacza <b>przypisanie</b>: najpierw obliczana jest prawa strona, potem wynik trafia do zmiennej po lewej.</p>
<pre><code>wiek = 14
wiek = wiek + 1   # teraz 15</code></pre>
          <p>Rodzaje wartości: liczby całkowite (<code>14</code>), liczby rzeczywiste (<code>2.5</code> – z kropką!), tekst (<code>"Ala"</code> – w cudzysłowie), wartości logiczne (<code>True</code>, <code>False</code>).</p>
          <h3>Wejście i wyjście</h3>
          <ul>
            <li><code>input()</code> – wczytuje z klawiatury <b>tekst</b>,</li>
            <li><code>int(input())</code> – wczytuje liczbę całkowitą (zamienia tekst na liczbę),</li>
            <li><code>print("Wynik:", x)</code> – wypisuje na ekran.</li>
          </ul>
<pre><code>a = int(input())
b = int(input())
print("Suma:", a + b)</code></pre>
          <p>Bez <code>int</code> „dodawanie” tekstów skleja je: dla wpisanych 4 i 4 dostaniesz 44.</p>
          <h3>Działania</h3>
          <table>
            <tr><th>Zapis</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td><code>+ - *</code></td><td>dodawanie, odejmowanie, mnożenie</td><td>2 + 3 * 4 → 14</td></tr>
            <tr><td><code>/</code></td><td>dzielenie</td><td>7 / 2 → 3.5</td></tr>
            <tr><td><code>//</code></td><td>dzielenie całkowite</td><td>7 // 2 → 3</td></tr>
            <tr><td><code>%</code></td><td>reszta z dzielenia</td><td>7 % 2 → 1</td></tr>
            <tr><td><code>**</code></td><td>potęgowanie</td><td>2 ** 3 → 8</td></tr>
          </table>
          <p>Kolejność działań jak w matematyce; nawiasy zmieniają kolejność.</p>
          <h3>Porównania i wyrażenia logiczne</h3>
          <p><code>==</code> równe, <code>!=</code> różne, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Łączysz je słowami <code>and</code> (i), <code>or</code> (lub), <code>not</code> (nie). Przykład: liczba od 1 do 10 → <code>x &gt;= 1 and x &lt;= 10</code>.</p>
          <h3>Instrukcja warunkowa</h3>
<pre><code>n = int(input())
if n &gt; 0:
    print("dodatnia")
elif n &lt; 0:
    print("ujemna")
else:
    print("zero")</code></pre>
          <ul>
            <li>po <code>if</code>, <code>elif</code>, <code>else</code> stawiasz <b>dwukropek</b>,</li>
            <li>instrukcje w środku mają <b>wcięcie</b> (zwykle 4 spacje) – to ono wyznacza blok,</li>
            <li>wykonuje się blok <b>pierwszego</b> prawdziwego warunku; <code>else</code> – gdy żaden nie był prawdziwy.</li>
          </ul>
          <h3>Testowanie</h3>
          <p><b>Błąd składniowy</b> (np. brak dwukropka) – programu nie da się uruchomić. <b>Błąd logiczny</b> – program działa, ale daje zły wynik; wykryjesz go testami na różnych danych.</p>
          <div class="tip">💡 <code>=</code> nadaje wartość, <code>==</code> porównuje. <code>if x = 5:</code> to błąd – poprawnie <code>if x == 5:</code>.</div>`,
        flashcards: [
          ['Zmienna', 'Nazwane miejsce w pamięci na wartość, np. wiek = 14'],
          ['x = x + 1', 'Zwiększ x o 1 (nowa wartość = stara + 1)'],
          ['= i == w Pythonie', '= przypisuje wartość, == porównuje'],
          ['input()', 'Wczytuje z klawiatury tekst'],
          ['int(input())', 'Wczytuje liczbę całkowitą'],
          ['print(…)', 'Wypisuje na ekran'],
          ['7 / 2, 7 // 2, 7 % 2', '3.5, 3, 1'],
          ['2 ** 3', '8 (potęgowanie)'],
          ['!=', 'różne od'],
          ['if … elif … else', 'Wykonuje się blok pierwszego prawdziwego warunku; else – gdy żaden nie był prawdziwy'],
          ['Wcięcie w Pythonie', 'Wyznacza blok instrukcji, np. po if – zwykle 4 spacje'],
          ['Błąd składniowy', 'Program jest źle zapisany (np. brak dwukropka) i nie da się go uruchomić'],
        ],
        questions: [
          { id: 'tyzcaq', q: 'Co wypisze program?\nx = 7\ny = 3\nx = x + y\ny = x - y\nprint(x, y)', options: ['10 7', '7 3', '10 4', '7 10'], answer: 0, explain: 'x = 7 + 3 = 10, potem y = 10 − 3 = 7 (x ma już nową wartość). Wynik: 10 7.' },
          { id: 'bnnbcy', q: 'Ile wynosi 2 + 3 * 4 w Pythonie?', options: ['20', '9', '24', '14'], answer: 3, explain: 'Mnożenie przed dodawaniem: 3 · 4 = 12, 2 + 12 = 14.' },
          { id: 'trhtsv', q: 'Co wypisze print(10 / 4)?', options: ['2', '2 r. 2', '2.5', '2,5'], answer: 2, explain: 'Zwykłe dzielenie / daje liczbę rzeczywistą. Python zapisuje ją z kropką: 2.5.' },
          { id: 'rpk7vc', q: 'Który zapis sprawdza, czy a jest równe b?', options: ['a = b', 'a == b', 'a := b', 'a =! b'], answer: 1, explain: '== porównuje. Pojedyncze = przypisuje wartość.' },
          { id: '1wgals', q: 'Użytkownik wpisuje 4. Co wypisze program?\na = input()\nprint(a + a)', options: ['8', 'a + a', 'błąd', '44'], answer: 3, explain: 'input() daje tekst "4", a + dla tekstów je skleja: "4" + "4" = "44". Żeby dodać liczby, trzeba int(input()).' },
          { id: '55mdlv', q: 'Jak poprawnie wczytać liczbę całkowitą?', options: ['n = input(int)', 'int n = input()', 'n = input() + 0', 'n = int(input())'], answer: 3, explain: 'input() wczytuje tekst, a int(…) zamienia go na liczbę całkowitą.' },
          { id: 'kbel4d', q: `Co wypisze program?\na = 15\nif a % 3 == 0 and a % 5 == 0:\n${I}print("A")\nelif a % 3 == 0:\n${I}print("B")\nelse:\n${I}print("C")`, options: ['A', 'B', 'C', 'A i B'], answer: 0, explain: '15 dzieli się i przez 3, i przez 5 – pierwszy warunek jest prawdziwy. Wykonuje się tylko jego blok.' },
          { id: 'jf1wjq', q: 'Program z poprzedniego pytania (A – podzielna przez 3 i 5, B – tylko przez 3, w przeciwnym razie C) dla a = 9 wypisze…', options: ['A', 'C', 'B', 'nic'], answer: 2, explain: '9 % 3 == 0, ale 9 % 5 == 4 – pierwszy warunek jest fałszywy, drugi prawdziwy: B.' },
          { id: '35qd8n', q: 'Który warunek jest prawdziwy dokładnie wtedy, gdy x należy do przedziału od 1 do 10 (włącznie)?', options: ['x >= 1 and x <= 10', 'x >= 1 or x <= 10', 'x > 1 and x < 10', 'not x > 1'], answer: 0, explain: 'Oba warunki muszą być spełnione naraz – stąd and. Znaki >= i <= obejmują końce przedziału.' },
          { id: 'e9f4ht', q: `Czego brakuje w tym fragmencie?\nif x > 0\n${I}print("dodatnia")`, options: ['nawiasów klamrowych', 'średnika na końcu', 'dwukropka po warunku', 'słowa then'], answer: 2, explain: 'W Pythonie po warunku stawiamy dwukropek: if x > 0:' },
          { id: 's8mwy0', q: 'Prawda czy fałsz?\nW Pythonie wcięcia są tylko ozdobą i nie zmieniają działania programu.', options: TF, noShuffle: true, answer: 1, explain: 'Wcięcie wyznacza blok instrukcji – np. które polecenia wykonają się po if.' },
          { id: 'wbqfln', q: 'Co wypisze print(17 % 5 + 17 // 5)?', options: ['5', '6', '3.4', '2'], answer: 0, explain: '17 % 5 = 2, 17 // 5 = 3, a 2 + 3 = 5.' },
          { id: '5wr2fh', q: 'Jakiego rodzaju jest wartość "14" (w cudzysłowie)?', options: ['liczba całkowita', 'liczba rzeczywista', 'tekst', 'wartość logiczna'], answer: 2, explain: 'Cudzysłów oznacza tekst. Liczba 14 nie ma cudzysłowu.' },
        ],
        tasks: [
          {
            id: '17iixa',
            points: 2,
            q: `Przewidź, co wypisze program. Zapisz wartości zmiennych po każdym wierszu.\nx = 4\ny = 10\nx = x * 2\ny = y - x\nif y > x:\n${I}print("A", y)\nelse:\n${I}print("B", x - y)`,
            steps: [
              'x = 4, y = 10.',
              'x = 4 · 2 = 8; y = 10 − 8 = 2.',
              'Warunek y > x, czyli 2 > 8, jest fałszywy – wykonuje się blok else.',
              'x − y = 8 − 2 = 6, więc program wypisze: B 6.',
            ],
            answer: 'B 6',
            scoring: [
              '1 pkt – poprawne wartości x = 8 i y = 2 przed instrukcją if.',
              '1 pkt – poprawny wynik: B 6.',
            ],
          },
        ],
      },
      {
        id: 'petle',
        name: 'Pętle, tablice i funkcje',
        basis: PP + ', dz. II, wym. 1 (instrukcje iteracyjne, funkcje, zmienne i tablice; programowanie algorytmów z dz. I pkt 2).' + PY + KL,
        theory: `
          <h3>Pętla for</h3>
          <p>Powtarza blok dla kolejnych wartości zmiennej sterującej.</p>
          <table>
            <tr><th>Zapis</th><th>Wartości i</th></tr>
            <tr><td><code>range(5)</code></td><td>0, 1, 2, 3, 4</td></tr>
            <tr><td><code>range(1, 6)</code></td><td>1, 2, 3, 4, 5 (bez 6!)</td></tr>
            <tr><td><code>range(0, 10, 2)</code></td><td>0, 2, 4, 6, 8 (co 2)</td></tr>
          </table>
<pre><code>s = 0
for i in range(1, 5):
    s = s + i
print(s)          # 10</code></pre>
          <h3>Pętla while</h3>
          <p>Powtarza blok, <b>dopóki</b> warunek jest prawdziwy. Coś w środku musi go kiedyś „zepsuć” – inaczej powstanie <b>pętla nieskończona</b>.</p>
<pre><code>n = 1
while n &lt; 20:
    n = n * 2
print(n)          # 32</code></pre>
          <h3>Tabelka śledzenia</h3>
          <p>Żeby przewidzieć wynik, zapisuj wartości zmiennych po każdym obrocie pętli:</p>
          <table>
            <tr><th>obrót</th><th>i</th><th>s</th></tr>
            <tr><td>start</td><td>–</td><td>0</td></tr>
            <tr><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>2</td><td>2</td><td>3</td></tr>
            <tr><td>3</td><td>3</td><td>6</td></tr>
            <tr><td>4</td><td>4</td><td>10</td></tr>
          </table>
          <h3>Tablice (listy)</h3>
          <p>Wiele wartości pod jedną nazwą: <code>t = [3, 8, 1, 6]</code>.</p>
          <ul>
            <li><code>t[0]</code> – pierwszy element (indeksy od <b>0</b>), <code>t[1]</code> – drugi,</li>
            <li><code>len(t)</code> – liczba elementów (tu 4),</li>
            <li><code>t.append(9)</code> – dopisuje 9 na końcu,</li>
            <li><code>for x in t:</code> – przegląda kolejne elementy.</li>
          </ul>
          <h3>Funkcje</h3>
          <p><b>Funkcja</b> to nazwany fragment programu. Piszesz go raz, a wywołujesz wiele razy – z różnymi argumentami. <code>return</code> kończy funkcję i oddaje wynik.</p>
<pre><code>def kw(x):
    return x * x

print(kw(3) + kw(4))   # 9 + 16 = 25</code></pre>
          <p>Funkcjami możesz zapisać algorytmy z działów o liczbach i o wyszukiwaniu: <code>nwd(a, b)</code>, <code>pierwsza(n)</code>, <code>szukaj(t, x)</code>.</p>
          <div class="tip">💡 Przewidując wynik programu, bądź „ludzkim komputerem”: tabelka zmiennych, wiersz po wierszu. Najczęstsze pułapki: <code>range</code> nie obejmuje górnej granicy, a indeksy zaczynają się od 0.</div>`,
        flashcards: [
          ['range(5)', '0, 1, 2, 3, 4'],
          ['range(1, 6)', '1, 2, 3, 4, 5 (bez 6)'],
          ['range(0, 10, 2)', '0, 2, 4, 6, 8'],
          ['Pętla for', 'Powtarza blok dla kolejnych wartości, np. for i in range(5):'],
          ['Pętla while', 'Powtarza blok, dopóki warunek jest prawdziwy'],
          ['Pętla nieskończona', 'Warunek pętli while nigdy nie staje się fałszywy'],
          ['Tablica (lista)', 'Wiele wartości pod jedną nazwą, np. t = [4, 7, 1]'],
          ['t[0]', 'Pierwszy element tablicy t (indeksy od 0)'],
          ['len(t)', 'Liczba elementów tablicy t'],
          ['t.append(x)', 'Dopisuje x na końcu tablicy t'],
          ['Funkcja', 'Nazwany fragment programu: def nazwa(parametry): … return wynik'],
          ['return', 'Kończy funkcję i oddaje wynik'],
        ],
        questions: [
          { id: 'gat7xz', q: `Co wypisze program?\ns = 0\nfor i in range(1, 5):\n${I}s = s + i\nprint(s)`, options: ['15', '10', '5', '4'], answer: 1, explain: 'i przyjmuje 1, 2, 3, 4 (bez 5): 1 + 2 + 3 + 4 = 10.' },
          { id: 'lw73yz', q: 'Ile razy wykona się pętla for i in range(7)?', options: ['6', '8', '7', '0'], answer: 2, explain: 'range(7) to 0, 1, 2, 3, 4, 5, 6 – siedem wartości.' },
          { id: 'hde10c', q: 'Jakie wartości przyjmie i w pętli for i in range(2, 10, 3)?', options: ['2, 5, 8', '2, 5, 8, 11', '3, 6, 9', '2, 3, 4, …, 9'], answer: 0, explain: 'Od 2, co 3, dopóki liczba jest mniejsza od 10: 2, 5, 8.' },
          { id: 'hh0yp3', q: `Co wypisze program?\nn = 1\nwhile n < 20:\n${I}n = n * 2\nprint(n)`, options: ['16', '20', '32', '64'], answer: 2, explain: 'n: 1 → 2 → 4 → 8 → 16 → 32. Przy 32 warunek 32 < 20 jest fałszywy – pętla się kończy.' },
          { id: '04w1mh', q: `Ile razy wykona się ta pętla?\nk = 1\nwhile k > 0:\n${I}k = k + 1`, options: ['ani razu', 'raz', '10 razy', 'nigdy się nie skończy'], answer: 3, explain: 'k rośnie od 1 w górę, więc warunek k > 0 jest zawsze prawdziwy – to pętla nieskończona.' },
          { id: '7b6gea', q: 't = [3, 8, 1, 6]. Ile wynosi t[1]?', options: ['3', '8', '1', '6'], answer: 1, explain: 'Indeksy zaczynają się od 0: t[0] = 3, t[1] = 8.' },
          { id: 'c0qdr5', q: 'Ile wynosi len([3, 8, 1, 6])?', options: ['3', '6', '18', '4'], answer: 3, explain: 'len podaje liczbę elementów – tu są 4.' },
          { id: 'xt9tf0', q: `Co wypisze program?\nt = [4, 9, 2, 7]\nm = t[0]\nfor x in t:\n${I}if x > m:\n${I}${I}m = x\nprint(m)`, options: ['4', '7', '9', '22'], answer: 2, explain: 'To szukanie największego elementu metodą kandydata: m = 4, potem 9; 2 i 7 są mniejsze. Wynik 9.' },
          { id: 'pvcd6g', q: `Co wypisze program?\ndef kw(x):\n${I}return x * x\nprint(kw(3) + kw(4))`, options: ['25', '7', '49', '12'], answer: 0, explain: 'kw(3) = 9, kw(4) = 16, a 9 + 16 = 25.' },
          { id: 'js10sf', q: 'Po co dzielimy program na funkcje?', options: ['żeby program działał bez komputera', 'żeby nie powtarzać tego samego kodu i łatwiej go testować', 'bo bez funkcji nie da się użyć print', 'żeby program był dłuższy'], answer: 1, explain: 'Funkcję piszesz i sprawdzasz raz, a potem wywołujesz wiele razy z różnymi danymi.' },
          { id: 'igb38l', q: 'Prawda czy fałsz?\nW Pythonie pierwszy element tablicy t to t[1].', options: TF, noShuffle: true, answer: 1, explain: 'Pierwszy element to t[0] – indeksy zaczynają się od zera.' },
          { id: '8pbcl4', q: `Co wypisze program?\nt = []\nfor i in range(3):\n${I}t.append(i * 10)\nprint(t)`, options: ['[10, 20, 30]', '[0, 10, 20]', '[0, 1, 2]', '[30]'], answer: 1, explain: 'i = 0, 1, 2, więc dopisujemy 0, 10, 20.' },
        ],
        tasks: [
          {
            id: 'vj9blp',
            points: 2,
            q: `Przewidź, co wypisze program. Zapisz w tabelce wartości n i s po każdym obrocie pętli.\nn = 2025\ns = 0\nwhile n > 0:\n${I}s = s + n % 10\n${I}n = n // 10\nprint(s)`,
            steps: [
              'Start: n = 2025, s = 0.',
              '1. obrót: s = 0 + 5 = 5, n = 202. 2. obrót: s = 5 + 2 = 7, n = 20.',
              '3. obrót: s = 7 + 0 = 7, n = 2. 4. obrót: s = 7 + 2 = 9, n = 0.',
              'n = 0, więc warunek n > 0 jest fałszywy – pętla się kończy. Program wypisze 9 – to suma cyfr liczby 2025.',
            ],
            answer: '9',
            scoring: [
              '1 pkt – poprawna tabelka: (5, 202), (7, 20), (7, 2), (9, 0).',
              '1 pkt – poprawny wynik: 9.',
            ],
          },
        ],
      },
      {
        id: 'arkusz',
        name: 'Arkusz kalkulacyjny: formuły, adresowanie, wykresy',
        basis: PP + ', dz. II, wym. 3c (arkusz kalkulacyjny: dane w tabeli, podstawowe funkcje, adresowanie względne, bezwzględne i mieszane, wykresy różnego typu, porządkowanie i filtrowanie danych). Adresowanie i funkcje z separatorem „;” – według e-materiałów zpe.gov.pl („Adresowanie komórek w arkuszu kalkulacyjnym”, „Formuły statystyczne w arkuszu kalkulacyjnym”). Nazwy funkcji w polskich wersjach programów mogą się nieco różnić.' + KL,
        theory: `
          <h3>Komórki i formuły</h3>
          <p><b>Adres komórki</b> to litera kolumny i numer wiersza, np. <code>B3</code>. <b>Zakres</b> zapisujesz z dwukropkiem: <code>A1:A10</code> to komórki od A1 do A10.</p>
          <p><b>Formuła</b> zaczyna się od znaku <code>=</code>, np. <code>=B2*C2</code>. Gdy zmienisz dane w B2 lub C2, wynik przeliczy się sam.</p>
          <h3>Podstawowe funkcje</h3>
          <ul>
            <li><code>=SUMA(B2:B6)</code> – suma liczb z zakresu,</li>
            <li><code>=ŚREDNIA(B2:B6)</code> – średnia arytmetyczna,</li>
            <li><code>=MIN(B2:B6)</code>, <code>=MAX(B2:B6)</code> – najmniejsza i największa liczba (w niektórych programach MAX nazywa się MAKS),</li>
            <li><code>=JEŻELI(B2&gt;=50;"tak";"nie")</code> – sprawdza warunek; druga wartość – gdy prawda, trzecia – gdy fałsz,</li>
            <li><code>=LICZ.JEŻELI(C2:C30;5)</code> – liczy komórki spełniające kryterium (tu: równe 5).</li>
          </ul>
          <p>W polskich wersjach arkuszy argumenty funkcji oddziela zwykle <b>średnik</b> <code>;</code> (przecinek służy tam do zapisu ułamków dziesiętnych).</p>
          <h3>Adresowanie przy kopiowaniu formuł</h3>
          <table>
            <tr><th>Rodzaj</th><th>Zapis</th><th>Przy kopiowaniu</th></tr>
            <tr><td><b>względne</b></td><td><code>A1</code></td><td>zmienia się kolumna i wiersz</td></tr>
            <tr><td><b>bezwzględne</b></td><td><code>$A$1</code></td><td>nic się nie zmienia</td></tr>
            <tr><td><b>mieszane</b></td><td><code>$A1</code></td><td>kolumna zablokowana, wiersz się zmienia</td></tr>
            <tr><td><b>mieszane</b></td><td><code>A$1</code></td><td>wiersz zablokowany, kolumna się zmienia</td></tr>
          </table>
          <p>Przykład: w D2 jest <code>=B2*C2</code>. Po skopiowaniu do D3: <code>=B3*C3</code> – formuła „patrzy” na komórki w tym samym położeniu względem siebie.</p>
          <p>Przykład: w C2 jest <code>=A2*$F$1</code> (F1 – stały kurs albo stawka). Po skopiowaniu do C7: <code>=A7*$F$1</code>.</p>
          <p>Tabliczka mnożenia: w B2 wpisujesz <code>=B$1*$A2</code> i kopiujesz na cały obszar – liczby z wiersza 1 i kolumny A zawsze zostaną „złapane”.</p>
          <h3>Wykresy</h3>
          <ul>
            <li><b>kolumnowy / słupkowy</b> – porównanie wartości (np. punkty klas),</li>
            <li><b>liniowy</b> – zmiany w czasie (np. temperatura w kolejnych dniach),</li>
            <li><b>kołowy</b> – udział części w całości (np. na co wydano budżet),</li>
            <li><b>punktowy (XY)</b> – zależność jednej wielkości od drugiej.</li>
          </ul>
          <p>Wykres ma mieć tytuł, opisane osie i legendę, gdy serii jest kilka.</p>
          <h3>Porządkowanie i filtrowanie</h3>
          <ul>
            <li><b>Sortowanie</b> – rosnąco lub malejąco według wybranej kolumny. Zaznacz <b>całą tabelę</b>, żeby dane z jednego wiersza (np. imię i punkty) przesuwały się razem.</li>
            <li><b>Filtrowanie</b> – pokazuje tylko wiersze spełniające warunek. Pozostałe są <b>ukryte</b>, a nie usunięte – po wyłączeniu filtra wracają.</li>
          </ul>
          <div class="tip">💡 Znak $ to „kłódka”: stoi przed tym, czego nie wolno zmienić przy kopiowaniu – przed literą kolumny, przed numerem wiersza albo przed oboma.</div>`,
        flashcards: [
          ['Adres komórki', 'Litera kolumny i numer wiersza, np. B3'],
          ['Zakres A1:A10', 'Komórki od A1 do A10'],
          ['Formuła', 'Zaczyna się od znaku =, np. =B2*C2'],
          ['=SUMA(A1:A10)', 'Suma liczb z zakresu'],
          ['=ŚREDNIA(B2:B6)', 'Średnia arytmetyczna liczb z zakresu'],
          ['=JEŻELI(warunek; A; B)', 'Daje A, gdy warunek jest prawdziwy, a B – gdy fałszywy'],
          ['=LICZ.JEŻELI(zakres; kryterium)', 'Liczy komórki spełniające kryterium'],
          ['Separator argumentów w polskich wersjach arkuszy', 'Zwykle średnik ;'],
          ['Adres względny (A1)', 'Przy kopiowaniu formuły się zmienia'],
          ['Adres bezwzględny ($A$1)', 'Przy kopiowaniu się nie zmienia'],
          ['Adres mieszany ($A1, A$1)', '$ blokuje tylko kolumnę albo tylko wiersz'],
          ['Wykres kołowy', 'Udział części w całości'],
          ['Filtrowanie danych', 'Pokazuje wiersze spełniające warunek; reszta jest ukryta, nie usunięta'],
        ],
        questions: [
          { id: '1xvafh', q: 'Formułę =B2*C2 z komórki D2 kopiujesz do D5. Jak będzie wyglądać?', options: ['=B2*C2', '=B5*C5', '=E2*F2', '=B5*C2'], answer: 1, explain: 'Adresy względne przesuwają się razem z formułą: o 3 wiersze w dół.' },
          { id: 'ccj4gf', q: 'W C2 jest =A2*$F$1. Jaka formuła pojawi się po skopiowaniu jej do C7?', options: ['=A7*$F$6', '=A2*$F$1', '=A7*$F$1', '=A7*F6'], answer: 2, explain: 'A2 jest względne – zmienia się na A7. $F$1 jest bezwzględne – zostaje.' },
          { id: '1ivdaz', q: 'Który adres jest bezwzględny?', options: ['A1', '$A1', 'A$1', '$A$1'], answer: 3, explain: '$ przed literą i przed liczbą blokuje i kolumnę, i wiersz.' },
          { id: 'ly2izx', q: 'W B2 jest =B$1*$A2. Formułę kopiujesz do D5. Co będzie w D5?', options: ['=D$1*$A5', '=D$4*$A5', '=B$1*$A2', '=D$1*$C5'], answer: 0, explain: 'Przesunięcie: o 2 kolumny w prawo i 3 wiersze w dół. W B$1 zmienia się tylko kolumna (D$1), w $A2 – tylko wiersz ($A5).' },
          { id: 'dsh9ll', q: 'Która formuła obliczy średnią liczb z komórek od B2 do B9?', options: ['=SUMA(B2:B9)', '=ŚREDNIA(B2:B9)', '=ŚREDNIA(B2;B9)', '=B2:B9/8'], answer: 1, explain: 'Zakres zapisujemy z dwukropkiem. =ŚREDNIA(B2;B9) policzy średnią tylko dwóch komórek: B2 i B9.' },
          { id: 'ooomhm', q: 'Co pokaże =JEŻELI(A1>=50;"zdał";"nie zdał"), gdy w A1 jest 50?', options: ['zdał', 'nie zdał', '50', 'błąd'], answer: 0, explain: '50 >= 50 to prawda, więc wynikiem jest druga wartość: „zdał”.' },
          { id: 'buyg85', q: 'Jakim znakiem zaczyna się formuła w arkuszu kalkulacyjnym?', options: ['#', '$', '=', ':'], answer: 2, explain: 'Formuła zaczyna się od =. $ blokuje adres, a : oznacza zakres.' },
          { id: 'z6hj98', q: 'Który wykres najlepiej pokaże, jaką część budżetu wycieczki wydano na transport, bilety i jedzenie?', options: ['liniowy', 'kołowy', 'punktowy (XY)', 'żaden'], answer: 1, explain: 'Wykres kołowy pokazuje udział części w całości.' },
          { id: 'czxxpi', q: 'Który wykres najlepiej pokaże, jak zmieniała się temperatura w kolejnych dniach tygodnia?', options: ['kołowy', 'żaden – tylko tabela', 'liniowy', 'kołowy 3D'], answer: 2, explain: 'Wykres liniowy dobrze pokazuje zmiany w czasie.' },
          { id: '90s8m7', q: 'Włączasz filtr, który pokazuje tylko uczniów z oceną 5. Co dzieje się z pozostałymi wierszami?', options: ['są ukryte – po wyłączeniu filtra wrócą', 'zostają usunięte na zawsze', 'przenoszą się na koniec arkusza', 'zmieniają się w zera'], answer: 0, explain: 'Filtr tylko ukrywa wiersze, które nie spełniają warunku.' },
          { id: 'kg9ugb', q: 'Sortujesz tabelę z kolumnami „imię” i „punkty” według punktów. Na co uważać?', options: ['sortuj tylko kolumnę z punktami', 'najpierw usuń nagłówki', 'sortowanie zawsze psuje dane', 'zaznacz całą tabelę, żeby imiona przesunęły się razem z punktami'], answer: 3, explain: 'Gdy posortujesz samą kolumnę punktów, punkty „odjadą” od imion i dane się pomieszają.' },
          { id: '5t4g5l', q: 'Co policzy =LICZ.JEŻELI(C2:C30;5)?', options: ['sumę wszystkich piątek', 'ile komórek z zakresu C2:C30 zawiera liczbę 5', 'średnią z 5 komórek', 'pięć największych liczb'], answer: 1, explain: 'LICZ.JEŻELI zlicza komórki z zakresu, które spełniają kryterium.' },
          { id: 'ux9zua', q: 'Prawda czy fałsz?\nPo skopiowaniu formuły =$A$1+B1 o jeden wiersz w dół otrzymasz =$A$1+B2.', options: TF, noShuffle: true, answer: 0, explain: '$A$1 się nie zmienia, a względny adres B1 przesuwa się o wiersz: B2.' },
        ],
        tasks: [
          {
            id: 'im1vi6',
            points: 3,
            q: 'W komórkach A2:A6 są ceny towarów w złotych, a w komórce E1 – kurs euro (ile złotych kosztuje 1 euro). a) Napisz formułę do B2, która przeliczy cenę z A2 na euro i którą da się skopiować w dół do B6. b) Jaka formuła będzie w B6 po skopiowaniu? c) Napisz formułę sumy cen w złotych.',
            steps: [
              'a) Cenę w euro liczymy, dzieląc cenę w złotych przez kurs. Kurs jest w jednej komórce, więc trzeba ją zablokować: =A2/$E$1 (wystarczy też =A2/E$1).',
              'b) Przy kopiowaniu o 4 wiersze w dół A2 zmienia się w A6, a $E$1 zostaje: =A6/$E$1.',
              'c) =SUMA(A2:A6).',
            ],
            answer: 'a) =A2/$E$1; b) =A6/$E$1; c) =SUMA(A2:A6)',
            scoring: [
              '1 pkt – poprawna formuła w B2 z zablokowanym adresem kursu.',
              '1 pkt – poprawna formuła w B6.',
              '1 pkt – poprawna formuła sumy.',
            ],
          },
          {
            id: 'w7je57',
            points: 2,
            q: 'W komórkach B2:B25 są wyniki testu (od 0 do 40 punktów). a) Napisz formułę do C2 (do skopiowania w dół), która wpisze „zaliczone”, gdy uczeń ma co najmniej 20 punktów, a w przeciwnym razie „niezaliczone”. b) Napisz formułę, która policzy, ilu uczniów zaliczyło test.',
            steps: [
              'a) Warunek „co najmniej 20” to B2>=20: =JEŻELI(B2>=20;"zaliczone";"niezaliczone").',
              'b) Liczymy komórki spełniające kryterium: =LICZ.JEŻELI(C2:C25;"zaliczone") albo =LICZ.JEŻELI(B2:B25;">=20").',
            ],
            answer: 'a) =JEŻELI(B2>=20;"zaliczone";"niezaliczone"); b) =LICZ.JEŻELI(C2:C25;"zaliczone")',
            scoring: [
              '1 pkt – poprawna funkcja JEŻELI z warunkiem B2>=20.',
              '1 pkt – poprawna funkcja LICZ.JEŻELI (z kolumny C albo B).',
            ],
          },
        ],
      },
      {
        id: 'dokumenty',
        name: 'Dokumenty, formaty plików i prosta strona WWW',
        basis: PP + ', dz. II, wym. 3a–b i d (obróbka zdjęć i filmów, formatowanie dokumentów, symbole, obrazy i tabele, podział dłuższych dokumentów na strony, prezentacja multimedialna, prosta strona internetowa z tekstem i grafiką), wym. 4 (zapis w różnych formatach, wydruki); dz. III, wym. 2. Kompresja stratna i bezstratna, formaty JPG/PNG/GIF/MP3 – e-materiał zpe.gov.pl „Kompresja stratna i bezstratna”; znaczniki HTML – e-materiał zpe.gov.pl „Język HTML i podstawy CSS”.' + KL,
        theory: `
          <h3>Dokument tekstowy</h3>
          <ul>
            <li><b>Formatowanie znaków</b>: krój i rozmiar czcionki, pogrubienie, kursywa, podkreślenie, kolor.</li>
            <li><b>Formatowanie akapitu</b>: wyrównanie (do lewej, do środka, do prawej, wyjustowanie), wcięcia, odstępy, interlinia.</li>
            <li><b>Style</b> (np. „Nagłówek 1”) – nadają jednolity wygląd wszystkim tytułom w dokumencie.</li>
            <li>Wstawiasz <b>symbole</b> (np. ©, €, Ω, →), <b>obrazy</b>, <b>tabele</b>, listy numerowane i punktowane.</li>
          </ul>
          <h3>Dłuższy dokument</h3>
          <p>Nowy rozdział od nowej strony? Wstaw <b>podział strony</b>, a nie wiele pustych akapitów (Enterów) – po dopisaniu tekstu wcześniej Entery się przesuną, a podział strony zostanie na miejscu. <b>Numery stron</b> wstawiasz w nagłówku lub stopce. Przed drukiem sprawdź <b>podgląd wydruku</b> i wybierz zakres stron.</p>
          <h3>Prezentacja</h3>
          <ul>
            <li>na slajdzie krótkie hasła, nie cały tekst – resztę mówisz,</li>
            <li>duża, czytelna czcionka i kontrast tekstu z tłem,</li>
            <li>jeden slajd – jedna myśl; obrazy wspierają treść,</li>
            <li>podaj źródła cudzych zdjęć i grafik (i sprawdź ich licencję).</li>
          </ul>
          <h3>Zdjęcia i filmy</h3>
          <p>Podstawowa obróbka zdjęcia: kadrowanie, obracanie, zmiana rozmiaru, jasność i kontrast. Filmu: przycinanie, łączenie ujęć, napisy, podkład dźwiękowy.</p>
          <h3>Formaty plików</h3>
          <table>
            <tr><th>Format</th><th>Co to</th></tr>
            <tr><td>TXT</td><td>sam tekst, bez formatowania</td></tr>
            <tr><td>DOCX, ODT</td><td>dokumenty edytorów tekstu</td></tr>
            <tr><td>PDF</td><td>dokument do udostępniania i druku – zachowuje wygląd</td></tr>
            <tr><td>JPG (JPEG)</td><td>zdjęcia; kompresja <b>stratna</b></td></tr>
            <tr><td>PNG</td><td>grafika; kompresja <b>bezstratna</b>, może mieć przezroczyste tło</td></tr>
            <tr><td>GIF</td><td>grafika; kompresja bezstratna, najwyżej 256 kolorów</td></tr>
            <tr><td>MP3</td><td>dźwięk; kompresja stratna</td></tr>
            <tr><td>MP4</td><td>film</td></tr>
            <tr><td>HTML</td><td>strona internetowa</td></tr>
          </table>
          <p><b>Kompresja</b> zmniejsza plik. <b>Bezstratna</b> pozwala odtworzyć dane bez żadnej zmiany. <b>Stratna</b> usuwa część informacji bezpowrotnie – przy zdjęciach i dźwięku często tego nie zauważysz. Tekstów i programów nie kompresuje się stratnie – zmiana kilku znaków psuje treść.</p>
          <h3>Prosta strona WWW – HTML</h3>
          <p><b>HTML</b> to język znaczników, w którym opisuje się strukturę strony. Przeglądarka czyta plik .html i wyświetla stronę. Znaczniki zwykle występują parami: otwierający <code>&lt;p&gt;</code> i zamykający <code>&lt;/p&gt;</code>.</p>
<pre><code>&lt;h1&gt;Nasza klasa&lt;/h1&gt;
&lt;p&gt;Jesteśmy klasą 8b.&lt;/p&gt;
&lt;img src="klasa.jpg"
     alt="Zdjęcie klasy 8b"&gt;
&lt;a href="https://zpe.gov.pl"&gt;ZPE&lt;/a&gt;</code></pre>
          <table>
            <tr><th>Znacznik</th><th>Znaczenie</th></tr>
            <tr><td><code>&lt;h1&gt;</code> … <code>&lt;h6&gt;</code></td><td>nagłówki; h1 – najważniejszy (największy)</td></tr>
            <tr><td><code>&lt;p&gt;</code></td><td>akapit</td></tr>
            <tr><td><code>&lt;img src="…" alt="…"&gt;</code></td><td>obrazek; <b>src</b> – plik, <b>alt</b> – tekstowy opis obrazka</td></tr>
            <tr><td><code>&lt;a href="…"&gt;</code></td><td>odnośnik (link); <b>href</b> – adres</td></tr>
          </table>
          <div class="tip">💡 Opis <b>alt</b> czyta np. program dla osób niewidomych, a przeglądarka pokazuje go, gdy obrazek się nie wczyta. Pisz w nim, co jest na obrazku.</div>`,
        flashcards: [
          ['Formatowanie znaków', 'Krój i rozmiar czcionki, pogrubienie, kursywa, kolor'],
          ['Formatowanie akapitu', 'Wyrównanie, wcięcia, odstępy, interlinia'],
          ['Podział strony', 'Rozdział zaczyna się od nowej strony – lepsze niż wiele Enterów'],
          ['Numery stron', 'Wstawia się je w nagłówku lub stopce'],
          ['JPG', 'Format zdjęć z kompresją stratną'],
          ['PNG', 'Format grafiki z kompresją bezstratną; może mieć przezroczyste tło'],
          ['MP3', 'Format dźwięku z kompresją stratną'],
          ['PDF', 'Dokument do udostępniania i druku – zachowuje wygląd'],
          ['Kompresja stratna', 'Mniejszy plik, ale część informacji usunięta bezpowrotnie'],
          ['HTML', 'Język znaczników, w którym zapisuje się strony internetowe'],
          ['<p> … </p>', 'Akapit na stronie WWW'],
          ['<img src="…" alt="…">', 'Obrazek: src – plik, alt – tekstowy opis'],
          ['<a href="…"> … </a>', 'Odnośnik (link)'],
        ],
        questions: [
          { id: 'jukvu2', q: 'Chcesz, żeby rozdział 2 zawsze zaczynał się na nowej stronie, nawet gdy dopiszesz coś wcześniej. Co wstawisz?', options: ['kilka pustych akapitów (Enterów)', 'podział strony', 'tabelę', 'kilka spacji'], answer: 1, explain: 'Podział strony zostaje na miejscu. Puste akapity przesuną się, gdy dopiszesz tekst wcześniej.' },
          { id: '4sxay1', q: 'Które z tych działań to formatowanie AKAPITU?', options: ['pogrubienie słowa', 'zmiana koloru liter', 'wyrównanie tekstu do środka', 'kursywa'], answer: 2, explain: 'Wyrównanie dotyczy całego akapitu. Pogrubienie, kolor i kursywa to formatowanie znaków.' },
          { id: 'yomp53', q: 'Który format jest typowy dla zdjęć zapisywanych jako niewielkie pliki?', options: ['JPG', 'TXT', 'MP3', 'HTML'], answer: 0, explain: 'JPG używa kompresji stratnej – zdjęcie zajmuje mało miejsca, a różnicę trudno zauważyć.' },
          { id: 'zj86tl', q: 'Logo ma mieć przezroczyste tło i nie tracić jakości przy zapisie. Jaki format wybierzesz?', options: ['JPG', 'PNG', 'MP3', 'TXT'], answer: 1, explain: 'PNG ma kompresję bezstratną i może mieć przezroczyste tło.' },
          { id: 'umgyy1', q: 'Co oznacza kompresja stratna?', options: ['plik jest większy niż oryginał', 'dane można zawsze odtworzyć bez żadnej zmiany', 'plik jest zaszyfrowany', 'plik jest mniejszy, ale część informacji usunięto bezpowrotnie'], answer: 3, explain: 'Stratna kompresja usuwa część informacji – nie da się jej odzyskać. Bezstratna pozwala odtworzyć oryginał.' },
          { id: '5ctixk', q: 'Dlaczego tekstów (np. kodu programu) nie kompresuje się stratnie?', options: ['bo utrata nawet kilku znaków zmienia lub psuje treść', 'bo teksty są zawsze bardzo małe', 'bo tekstu nie da się zapisać w pliku', 'bo zabrania tego prawo autorskie'], answer: 0, explain: 'W tekście liczy się każdy znak – zmieniony kod programu przestanie działać.' },
          { id: 'nuu055', q: 'Który znacznik HTML tworzy odnośnik (link)?', options: ['<p>', '<img>', '<a href="…">', '<h1>'], answer: 2, explain: '<a> z atrybutem href (adres) tworzy link.' },
          { id: 'yo1v5d', q: 'Do czego służy atrybut alt w znaczniku <img>?', options: ['ustala rozmiar obrazka', 'podaje tekstowy opis obrazka', 'wskazuje plik obrazka', 'dodaje ramkę'], answer: 1, explain: 'alt to opis obrazka – dla programów czytających ekran i na wypadek, gdy obrazek się nie wczyta. Plik wskazuje src.' },
          { id: 'ui0s2u', q: 'Który znacznik oznacza najważniejszy (największy) nagłówek?', options: ['<h1>', '<h6>', '<head>', '<p>'], answer: 0, explain: 'Nagłówki to <h1>…<h6>; <h1> jest najważniejszy.' },
          { id: '9bnttc', q: 'Wysyłasz pracę nauczycielowi i chcesz, żeby wyglądała tak jak u ciebie, także na telefonie. W jakim formacie ją zapiszesz?', options: ['TXT', 'MP4', 'PDF', 'GIF'], answer: 2, explain: 'PDF zachowuje wygląd dokumentu. TXT gubi formatowanie, MP4 to film, GIF – grafika.' },
          { id: 'os2peg', q: 'Która zasada dotyczy dobrej prezentacji?', options: ['cały referat przepisany na slajdy', 'jasnożółty tekst na białym tle', 'jak najwięcej animacji na każdym slajdzie', 'na slajdzie krótkie hasła i czytelna czcionka'], answer: 3, explain: 'Slajd ma wspierać wystąpienie: krótko, czytelnie, z dobrym kontrastem.' },
          { id: 'v7ziap', q: 'Prawda czy fałsz?\nZnacznik <p> rozpoczyna akapit, a </p> go kończy.', options: TF, noShuffle: true, answer: 0, explain: 'Większość znaczników HTML występuje parami: otwierający i zamykający (z ukośnikiem).' },
        ],
      },
      {
        id: 'sieci',
        name: 'Sieci komputerowe i internet',
        basis: PP + ', dz. III, wym. 1 (funkcjonowanie sieci komputerowej i Internetu), wym. 3 (terminologia); dz. II, wym. 5 (wyszukiwanie informacji w sieci); dz. IV, wym. 2 (krytyczna ocena informacji i ich źródeł, otwarte zasoby). Rodzaje sieci, klient–serwer – e-materiał zpe.gov.pl „Architektura sieci komputerowych”; adres IP, DNS, URL – e-materiały zpe.gov.pl „Adres IP” i „Adresy stron internetowych”. W przykładach adresy zarezerwowane do dokumentacji (example.com, 203.0.113.x).' + KL,
        theory: `
          <h3>Sieć komputerowa</h3>
          <p><b>Sieć komputerowa</b> to połączone urządzenia (komputery, telefony, drukarki…), które wymieniają dane i wspólnie korzystają z zasobów, np. z drukarki czy dostępu do internetu.</p>
          <table>
            <tr><th>Rodzaj</th><th>Zasięg</th></tr>
            <tr><td><b>LAN</b> – sieć lokalna</td><td>dom, szkoła, biuro, budynek lub kilka budynków</td></tr>
            <tr><td><b>WLAN</b></td><td>bezprzewodowa sieć lokalna (Wi-Fi)</td></tr>
            <tr><td><b>MAN</b> – sieć miejska</td><td>miasto lub aglomeracja</td></tr>
            <tr><td><b>WAN</b> – sieć rozległa</td><td>łączy sieci lokalne na dużym obszarze, np. oddziały firmy w różnych miastach</td></tr>
          </table>
          <p><b>Internet</b> to ogólnoświatowy zbiór połączonych sieci. Nie należy do jednej firmy ani organizacji.</p>
          <h3>Urządzenia sieciowe</h3>
          <ul>
            <li><b>przełącznik</b> (ang. <i>switch</i>) – łączy urządzenia w przewodowej sieci lokalnej,</li>
            <li><b>ruter</b> (ang. <i>router</i>) – przekazuje dane między sieciami, np. między siecią domową a internetem,</li>
            <li><b>punkt dostępowy Wi-Fi</b> – pozwala łączyć się bezprzewodowo.</li>
          </ul>
          <p>Dane wędrują w sieci w małych porcjach – <b>pakietach</b>.</p>
          <h3>Adres IP</h3>
          <p>Każde urządzenie w sieci potrzebuje <b>adresu IP</b> – jak list potrzebuje adresu. Adres <b>IPv4</b> to <b>4 liczby od 0 do 255</b> oddzielone kropkami, np. 192.168.1.10. Każda liczba to 8 bitów, cały adres – <b>32 bity</b>. Nowsze adresy <b>IPv6</b> mają 128 bitów.</p>
          <p>Adresy zaczynające się od 192.168 (a także od 10 i od 172.16–172.31) to adresy <b>prywatne</b> – działają tylko w sieci lokalnej.</p>
          <h3>Domeny i DNS</h3>
          <p>Ludziom łatwiej zapamiętać nazwę niż liczby. <b>DNS</b> (system nazw domen) zamienia <b>nazwę domeny</b> (np. gov.pl) na <b>adres IP</b> serwera. Domeny najwyższego poziomu: krajowe (.pl, .de, .fr) i inne (.com, .org, .edu, .gov).</p>
          <h3>Adres URL</h3>
          <p><code>https://example.com/foto/kot.jpg</code></p>
          <ul>
            <li><code>https</code> – protokół (sposób połączenia); <b>https</b> to połączenie <b>szyfrowane</b>, http – nieszyfrowane,</li>
            <li><code>example.com</code> – nazwa domeny (serwera),</li>
            <li><code>/foto/kot.jpg</code> – ścieżka do pliku na serwerze.</li>
          </ul>
          <h3>Klient i serwer</h3>
          <p><b>Serwer</b> udostępnia usługi: strony WWW, pocztę, pliki. <b>Klient</b> z nich korzysta – np. przeglądarka pobiera stronę z serwera WWW. Ten sam komputer może być jednocześnie serwerem jednej usługi i klientem innej.</p>
          <h3>Szukanie i ocena informacji</h3>
          <ul>
            <li>wpisuj w wyszukiwarkę konkretne <b>słowa kluczowe</b>, a nie całe zdania,</li>
            <li>sprawdź <b>autora</b> (osoba, instytucja?) i <b>datę</b> publikacji,</li>
            <li>czy podano <b>źródła</b>? Porównaj informację z <b>innymi rzetelnymi źródłami</b>,</li>
            <li>jaki jest <b>cel</b> strony – informuje, sprzedaje, wywołuje emocje?</li>
          </ul>
          <p><b>Otwarte zasoby edukacyjne</b> to materiały, które wolno legalnie wykorzystywać, zmieniać i udostępniać na warunkach ich licencji (np. podając autora).</p>
          <div class="tip">💡 DNS to „książka adresowa” internetu: znasz nazwę, a DNS podaje numer – adres IP.</div>`,
        flashcards: [
          ['Sieć komputerowa', 'Połączone urządzenia, które wymieniają dane i współdzielą zasoby'],
          ['LAN', 'Sieć lokalna – dom, szkoła, biuro, budynek'],
          ['WAN', 'Sieć rozległa – łączy sieci lokalne na dużym obszarze'],
          ['WLAN', 'Bezprzewodowa sieć lokalna (Wi-Fi)'],
          ['Przełącznik (switch)', 'Łączy urządzenia w przewodowej sieci lokalnej'],
          ['Ruter (router)', 'Przekazuje dane między sieciami, np. siecią domową a internetem'],
          ['Adres IPv4', '4 liczby od 0 do 255 oddzielone kropkami (32 bity)'],
          ['DNS', 'Zamienia nazwę domeny na adres IP'],
          ['https://', 'Połączenie szyfrowane'],
          ['Serwer', 'Udostępnia usługi, np. strony WWW, pocztę, pliki'],
          ['Klient', 'Korzysta z usług serwera, np. przeglądarka internetowa'],
          ['Internet', 'Ogólnoświatowy zbiór połączonych sieci; nie należy do jednej firmy'],
          ['Jak ocenić wiarygodność informacji?', 'Autor, data, źródła, porównanie z innymi źródłami, cel strony'],
        ],
        questions: [
          { id: 'gt29rw', q: 'Sieć łącząca komputery w szkolnej pracowni to przykład sieci…', options: ['WAN', 'LAN', 'MAN', 'globalnej'], answer: 1, explain: 'LAN to sieć lokalna – w budynku, szkole, domu.' },
          { id: 'db5j1p', q: 'Które urządzenie łączy domową sieć z internetem i przekazuje dane między sieciami?', options: ['ruter', 'drukarka', 'przełącznik', 'monitor'], answer: 0, explain: 'Ruter przekazuje dane między sieciami. Przełącznik łączy urządzenia w obrębie sieci lokalnej.' },
          { id: '3mtgf5', q: 'Który adres IPv4 jest poprawny?', options: ['192.168.1.300', '10.0.0.256', '192.168.1.15', '192.168.1'], answer: 2, explain: 'Adres IPv4 to 4 liczby od 0 do 255. 300 i 256 są za duże, a 192.168.1 ma tylko 3 liczby.' },
          { id: '854pir', q: 'Do czego służy DNS?', options: ['szyfruje hasła', 'blokuje reklamy', 'przyspiesza procesor', 'zamienia nazwy domen na adresy IP'], answer: 3, explain: 'Wpisujesz nazwę, a DNS podaje adres IP serwera, z którym łączy się przeglądarka.' },
          { id: 'ag3e1n', q: 'Przeglądarka pobiera stronę z komputera, który ją udostępnia. Ten komputer to…', options: ['klient', 'przełącznik', 'modem', 'serwer'], answer: 3, explain: 'Serwer udostępnia usługę (stronę WWW), a przeglądarka jest klientem.' },
          { id: 'p1ck5a', q: 'Co oznacza adres zaczynający się od https://?', options: ['połączenie jest szyfrowane', 'strona jest szkolna', 'strona jest darmowa', 'strona na pewno mówi prawdę'], answer: 0, explain: 'https to szyfrowana wersja http. Szyfrowanie chroni przesyłane dane, ale nie świadczy o prawdziwości treści.' },
          { id: 'pfhskw', q: 'W adresie https://example.com/foto/kot.jpg nazwą domeny jest…', options: ['https', 'example.com', '/foto/kot.jpg', 'kot.jpg'], answer: 1, explain: 'https to protokół, example.com – domena, a /foto/kot.jpg – ścieżka do pliku.' },
          { id: '29fzwu', q: 'Ile bitów ma adres IPv4?', options: ['8', '16', '32', '128'], answer: 2, explain: '4 liczby po 8 bitów = 32 bity. 128 bitów ma adres IPv6.' },
          { id: 'y5mhwd', q: 'Która cecha strony NAJBARDZIEJ obniża jej wiarygodność?', options: ['podany autor i data publikacji', 'odnośniki do źródeł', 'zgodność z innymi rzetelnymi źródłami', 'brak autora, brak źródeł i nachalne reklamy'], answer: 3, explain: 'Gdy nie wiadomo, kto napisał tekst i skąd wziął informacje, trudno mu ufać.' },
          { id: 'iiurye', q: 'Czytasz w sieci zaskakującą „wiadomość”. Co zrobisz najpierw?', options: ['udostępnię ją od razu', 'sprawdzę, kto ją napisał, i porównam z innymi źródłami', 'uwierzę, bo ma dużo polubień', 'wkleję ją do pracy domowej bez podawania źródła'], answer: 1, explain: 'Liczba polubień nie świadczy o prawdzie. Sprawdź autora i porównaj z innymi źródłami.' },
          { id: 'cdp1mg', q: 'Prawda czy fałsz?\nInternet należy do jednej firmy, która nim zarządza.', options: TF, noShuffle: true, answer: 1, explain: 'Internet to zbiór sieci należących do wielu firm i instytucji na całym świecie.' },
          { id: 'id4zf0', q: 'Prawda czy fałsz?\nTen sam komputer może być jednocześnie serwerem (np. udostępnia pliki) i klientem (np. przegląda strony WWW).', options: TF, noShuffle: true, answer: 0, explain: 'Rolę wyznacza oprogramowanie: komputer może udostępniać jedną usługę i korzystać z innej.' },
          { id: 'e1cyvs', q: 'Otwarte zasoby edukacyjne to materiały, które…', options: ['wolno legalnie wykorzystywać i udostępniać na warunkach ich licencji', 'są zawsze płatne', 'można oglądać tylko w bibliotece', 'nie mają autora'], answer: 0, explain: 'Otwarte zasoby mają licencje (np. Creative Commons), które pozwalają z nich korzystać, zwykle z podaniem autora.' },
        ],
      },
      {
        id: 'prawo',
        name: 'Prawo autorskie i licencje',
        basis: PP + ', dz. V, wym. 1 (kwestie etyczne: własność intelektualna, dzielenie się informacją), wym. 2 (etyczne postępowanie z informacjami), wym. 3 (typy licencji na oprogramowanie i na zasoby w sieci); dz. IV, wym. 2 (otwarte zasoby). Fakty prawne: ustawa z 4.02.1994 o prawie autorskim i prawach pokrewnych, tekst jedn. Dz.U. 2025 poz. 24 – art. 1, 4, 16, 17, 23, 29, 34, 36, 77, 81. Licencje – e-materiały zpe.gov.pl „Rodzaje licencji na oprogramowanie” i „Samodzielne korzystanie z wyszukanych informacji z uwzględnieniem poszanowania praw autorskich”.' + KL,
        theory: `
          <h3>Utwór</h3>
          <p>Prawo autorskie w Polsce reguluje <b>ustawa o prawie autorskim i prawach pokrewnych</b> (z 1994 r.). <b>Utwór</b> to każdy przejaw działalności twórczej o indywidualnym charakterze, ustalony w jakiejkolwiek postaci: tekst, zdjęcie, rysunek, muzyka, film, a także <b>program komputerowy</b>.</p>
          <ul>
            <li>Utwór jest chroniony <b>od chwili ustalenia</b> (np. narysowania, zapisania), nawet nieukończony – bez rejestracji i bez znaczka ©.</li>
            <li>Chroniony jest <b>sposób wyrażenia</b>, a nie sam pomysł, metoda czy koncepcja matematyczna.</li>
            <li>Nie są utworami w rozumieniu ustawy m.in. akty prawne (ustawy, rozporządzenia) i urzędowe dokumenty.</li>
          </ul>
          <h3>Prawa osobiste i majątkowe</h3>
          <table>
            <tr><th>Prawa osobiste</th><th>Prawa majątkowe</th></tr>
            <tr><td>więź twórcy z utworem: prawo do autorstwa, do podpisania utworu nazwiskiem, pseudonimem albo udostępnienia go anonimowo, do nienaruszalności treści i formy</td><td>prawo do korzystania z utworu, rozporządzania nim i do wynagrodzenia</td></tr>
            <tr><td><b>nieograniczone w czasie</b>; nie można ich sprzedać ani się ich zrzec</td><td>zasadniczo wygasają <b>70 lat po śmierci twórcy</b></td></tr>
          </table>
          <p>Gdy prawa majątkowe wygasną, utwór trafia do <b>domeny publicznej</b> – każdy może z niego korzystać bez ograniczeń wynikających z praw majątkowych (prawa osobiste, np. do autorstwa, zostają).</p>
          <h3>Dozwolony użytek</h3>
          <ul>
            <li><b>Osobisty</b>: bez zgody twórcy możesz nieodpłatnie korzystać z już rozpowszechnionego utworu w kręgu rodziny i znajomych (np. pożyczyć książkę). <b>Nie dotyczy to programów komputerowych</b>.</li>
            <li><b>Prawo cytatu</b>: we własnej pracy możesz przytoczyć fragment cudzego utworu w zakresie uzasadnionym celem cytatu (wyjaśnianie, analiza, nauczanie…).</li>
            <li>Korzystając z dozwolonego użytku, <b>podaj autora i źródło</b>.</li>
          </ul>
          <h3>Wizerunek</h3>
          <p>Rozpowszechnianie czyjegoś wizerunku (np. zdjęcia, filmu z tą osobą) wymaga jej <b>zgody</b>. Wyjątki są wąskie, np. osoba powszechnie znana podczas pełnienia funkcji publicznych albo osoba będąca tylko szczegółem całości (tłum na koncercie, krajobraz).</p>
          <h3>Licencje na oprogramowanie</h3>
          <p><b>Licencja</b> to umowa, która określa, na jakich warunkach wolno korzystać z programu lub innego utworu.</p>
          <table>
            <tr><th>Licencja</th><th>Co wolno</th></tr>
            <tr><td><b>komercyjna</b></td><td>używasz po zapłaceniu, na warunkach umowy (np. na jednym komputerze)</td></tr>
            <tr><td><b>shareware</b></td><td>używasz bezpłatnie na próbę – z ograniczonymi funkcjami lub przez ograniczony czas; potem płacisz albo przestajesz używać</td></tr>
            <tr><td><b>freeware</b></td><td>używasz i rozpowszechniasz bezpłatnie, ale nie wolno zmieniać kodu ani zarabiać na rozpowszechnianiu</td></tr>
            <tr><td><b>open source</b>, np. <b>GNU GPL</b></td><td>wolno uruchamiać w dowolnym celu, badać i zmieniać kod, rozpowszechniać kopie i ulepszenia; GPL wymaga, żeby przeróbki miały tę samą licencję</td></tr>
            <tr><td><b>domena publiczna</b></td><td>korzystasz bez ograniczeń praw majątkowych</td></tr>
          </table>
          <h3>Licencje Creative Commons (CC)</h3>
          <p>Autor wybiera warunki z czterech „klocków”:</p>
          <table>
            <tr><th>Skrót</th><th>Nazwa</th><th>Znaczenie</th></tr>
            <tr><td><b>BY</b></td><td>uznanie autorstwa</td><td>podaj autora</td></tr>
            <tr><td><b>SA</b></td><td>na tych samych warunkach</td><td>przeróbkę udostępnij na tej samej licencji</td></tr>
            <tr><td><b>NC</b></td><td>użycie niekomercyjne</td><td>nie wolno zarabiać</td></tr>
            <tr><td><b>ND</b></td><td>bez utworów zależnych</td><td>tylko w oryginalnej postaci, bez przeróbek</td></tr>
          </table>
          <p>Np. CC BY-SA: wolno kopiować i przerabiać, podając autora, a przeróbkę trzeba udostępnić na licencji CC BY-SA.</p>
          <div class="tip">💡 „Za darmo” nie znaczy „wolno wszystko”. Darmowy program (freeware) to nie to samo co program o otwartym kodzie. Zawsze sprawdź licencję.</div>`,
        flashcards: [
          ['Utwór', 'Przejaw działalności twórczej o indywidualnym charakterze, ustalony w jakiejkolwiek postaci'],
          ['Od kiedy utwór jest chroniony?', 'Od chwili ustalenia – bez rejestracji i bez znaczka ©'],
          ['Autorskie prawa osobiste', 'Np. prawo do autorstwa i podpisania utworu; bez ograniczenia w czasie, nie można ich sprzedać'],
          ['Autorskie prawa majątkowe', 'Prawo do korzystania z utworu i wynagrodzenia; zasadniczo wygasają 70 lat po śmierci twórcy'],
          ['Domena publiczna', 'Utwory, z których można korzystać bez ograniczeń praw majątkowych'],
          ['Dozwolony użytek osobisty', 'Korzystanie z rozpowszechnionego utworu w kręgu rodziny i znajomych – nie dotyczy programów komputerowych'],
          ['Prawo cytatu', 'Fragment cudzego utworu we własnej pracy – w uzasadnionym celu, z podaniem autora i źródła'],
          ['Wizerunek', 'Rozpowszechnienie zdjęcia osoby wymaga zwykle jej zgody'],
          ['Freeware', 'Program bezpłatny, ale bez prawa do zmian kodu i zarabiania na nim'],
          ['Shareware', 'Program do wypróbowania – potem trzeba zapłacić albo przestać używać'],
          ['Open source (np. GNU GPL)', 'Wolno uruchamiać, badać i zmieniać kod oraz rozpowszechniać kopie i ulepszenia'],
          ['CC BY', 'Uznanie autorstwa – wolno korzystać i przerabiać, podając autora'],
          ['CC SA / NC / ND', 'Na tych samych warunkach / użycie niekomercyjne / bez utworów zależnych'],
        ],
        questions: [
          { id: 'madyv5', q: 'Od kiedy twój rysunek jest chroniony prawem autorskim?', options: ['od chwili, gdy go narysujesz (ustalisz)', 'od rejestracji w urzędzie', 'od dopisania znaku ©', 'od pierwszej sprzedaży'], answer: 0, explain: 'Utwór jest chroniony od chwili ustalenia, bez żadnych formalności.' },
          { id: 'yqq6q4', q: 'Które prawo autorskie nie wygasa i nie można go sprzedać?', options: ['prawo do wynagrodzenia', 'prawo do autorstwa utworu', 'prawo do sprzedaży kopii', 'prawo do wypożyczania'], answer: 1, explain: 'Prawo do autorstwa to prawo osobiste – nieograniczone w czasie i niezbywalne.' },
          { id: '22ku9k', q: 'Kiedy zasadniczo wygasają autorskie prawa majątkowe?', options: ['po 20 latach od powstania utworu', 'w dniu śmierci twórcy', 'po 70 latach od śmierci twórcy', 'nigdy'], answer: 2, explain: 'Zasadą jest 70 lat od śmierci twórcy. Potem utwór trafia do domeny publicznej.' },
          { id: 'tya9ok', q: 'Kolega prosi o skopiowanie płatnego programu, który kupili twoi rodzice. Czy dozwolony użytek osobisty na to pozwala?', options: ['tak, bo to kolega', 'nie – dozwolony użytek osobisty nie obejmuje programów komputerowych', 'tak, jeśli nie weźmiesz pieniędzy', 'tak, ale tylko raz'], answer: 1, explain: 'Ustawa wyłącza programy komputerowe z dozwolonego użytku osobistego. O kopiowaniu decyduje licencja.' },
          { id: 'hmjxw7', q: 'Cytujesz fragment wiersza w wypracowaniu. Co musisz zrobić?', options: ['podać autora i źródło', 'zapłacić autorowi', 'zapytać o zgodę wydawnictwo', 'nic – cytat jest zawsze anonimowy'], answer: 0, explain: 'Prawo cytatu pozwala przytoczyć fragment bez zgody, ale trzeba podać autora i źródło.' },
          { id: '73g8ap', q: 'Chcesz wrzucić do sieci zdjęcie, na którym wyraźnie widać koleżankę. Co trzeba zrobić?', options: ['nic, jeśli zdjęcie jest ładne', 'dopisać jej imię', 'zmniejszyć zdjęcie', 'zapytać ją o zgodę'], answer: 3, explain: 'Rozpowszechnianie wizerunku wymaga zgody osoby, która jest na zdjęciu.' },
          { id: 'f4jexm', q: 'Program działa bezpłatnie przez 30 dni, potem trzeba kupić licencję albo przestać go używać. To licencja…', options: ['freeware', 'shareware', 'GNU GPL', 'domena publiczna'], answer: 1, explain: 'Shareware to program do wypróbowania – z limitem czasu lub funkcji.' },
          { id: 'vgj9cp', q: 'Program jest darmowy, ale nie wolno zmieniać jego kodu ani zarabiać na jego rozpowszechnianiu. To typowo…', options: ['freeware', 'open source', 'shareware', 'domena publiczna'], answer: 0, explain: 'Freeware: bezpłatnie, ale prawa autorskie zostają w mocy – bez zmian i bez zarabiania.' },
          { id: 'eqqu6h', q: 'Która licencja pozwala badać i zmieniać kod źródłowy programu oraz rozpowszechniać jego ulepszone wersje?', options: ['licencja komercyjna z zamkniętym kodem', 'shareware', 'GNU GPL', 'freeware'], answer: 2, explain: 'GNU GPL to licencja wolnego, otwartego oprogramowania.' },
          { id: '28cqz9', q: 'Zdjęcie ma licencję CC BY-ND. Co wolno?', options: ['przerobić je i podpisać swoim nazwiskiem', 'przerobić bez podawania autora', 'sprzedawać jako własne', 'kopiować i rozpowszechniać bez zmian, podając autora'], answer: 3, explain: 'BY – podaj autora, ND – bez utworów zależnych, czyli bez przeróbek.' },
          { id: 'ge9rcm', q: 'Grafika ma licencję CC BY-NC. Czego NIE wolno?', options: ['użyć jej w szkolnej prezentacji z podaniem autora', 'pokazać jej koledze', 'przerobić jej, podając autora', 'wykorzystać jej w płatnej reklamie sklepu'], answer: 3, explain: 'NC – użycie niekomercyjne: nie wolno na niej zarabiać. Przeróbki są dozwolone, bo nie ma ND.' },
          { id: 'n0fsl3', q: 'Który z tych tekstów NIE jest chroniony prawem autorskim?', options: ['tekst ustawy', 'tekst piosenki z radia', 'opowiadanie w czasopiśmie', 'wpis na blogu'], answer: 0, explain: 'Ustawa o prawie autorskim wyłącza z ochrony m.in. akty normatywne i urzędowe dokumenty.' },
          { id: 'i3zruv', q: 'Prawda czy fałsz?\nJeśli coś jest w internecie za darmo, wolno to dowolnie kopiować i przerabiać.', options: TF, noShuffle: true, answer: 1, explain: 'Darmowy dostęp nie oznacza zgody na wszystko – o tym, co wolno, decyduje licencja i prawo autorskie.' },
          { id: '5k2vw0', q: 'Prawda czy fałsz?\nLicencja CC BY-SA pozwala przerobić utwór, ale przeróbkę trzeba udostępnić na tej samej licencji.', options: TF, noShuffle: true, answer: 0, explain: 'SA – „na tych samych warunkach”: utwór zależny ma mieć identyczną licencję.' },
        ],
      },
      {
        id: 'bezpieczenstwo',
        name: 'Bezpieczeństwo, prywatność i cyfrowa tożsamość',
        basis: PP + ', dz. V, wym. 1 (kwestie etyczne: bezpieczeństwo, cyfrowa tożsamość, prywatność, równy dostęp do informacji i dzielenie się informacją), wym. 2 (etyczne postępowanie z informacjami). Dane osobowe – e-materiał zpe.gov.pl „Ochrona danych osobowych”; hasła, uwierzytelnianie wieloskładnikowe, aktualizacje – gov.pl „Jak chronić się przed atakami cyberprzestępców?” (zalecenia CERT Polska); phishing i ransomware – gov.pl (KOWR) „Cyberbezpieczeństwo – najważniejsze zagrożenia i zasady ochrony”; wizerunek – art. 81 ustawy o prawie autorskim (Dz.U. 2025 poz. 24).' + KL,
        theory: `
          <h3>Dane osobowe</h3>
          <p><b>Dane osobowe</b> to informacje, na podstawie których można bezpośrednio lub pośrednio ustalić, kim jest dana osoba: imię i nazwisko, adres, numer PESEL, numer telefonu, adres e-mail, wizerunek. Ogólna informacja (np. sam nick) zwykle nie jest daną osobową, ale może się nią stać w połączeniu z innymi danymi.</p>
          <p>Zasady zbierania danych (RODO – przepisy obowiązujące w całej Unii Europejskiej): dane zbiera się w <b>określonym celu</b>, tylko te <b>niezbędne</b> (minimalizacja), a osoba ma wiedzieć, <b>kto i po co</b> je zbiera.</p>
          <h3>Cyfrowa tożsamość i ślad</h3>
          <p>Wszystko, co publikujesz – zdjęcia, komentarze, polubienia, oznaczenia przez znajomych – tworzy twój <b>wizerunek w sieci</b>. Usunięty post mógł zostać wcześniej skopiowany albo zapisany na zrzucie ekranu. Ustaw prywatność profilu, nie podawaj publicznie adresu ani numeru telefonu i zastanów się, zanim coś opublikujesz.</p>
          <h3>Hasła</h3>
          <ul>
            <li>co najmniej <b>12 znaków</b>, trudne do odgadnięcia dla innych, łatwe do zapamiętania dla ciebie – np. zdanie z co najmniej pięciu wyrazów (zalecenie CERT Polska),</li>
            <li><b>jedno hasło = jedna usługa</b> – wyciek z jednego serwisu nie otworzy wtedy innych kont,</li>
            <li>hasła i kodów nie podajesz nikomu.</li>
          </ul>
          <p><b>Uwierzytelnianie dwuskładnikowe (2FA)</b>: przy logowaniu oprócz hasła podajesz drugi składnik, np. jednorazowy kod z aplikacji lub SMS-a. Nawet gdy ktoś pozna hasło, bez drugiego składnika się nie zaloguje.</p>
          <h3>Zagrożenia</h3>
          <ul>
            <li><b>Phishing</b> – oszust podszywa się pod zaufaną instytucję lub osobę (bank, kuriera, urząd, znajomego), żeby wyłudzić dane logowania, skłonić do kliknięcia w link albo pobrania pliku. Sygnały: <b>presja czasu</b>, adres nadawcy <b>podobny, ale nie identyczny</b> z prawdziwym, prośba o hasło lub kod, nieoczekiwany załącznik.</li>
            <li><b>Złośliwe oprogramowanie</b>, np. <b>ransomware</b> – szyfruje pliki i żąda okupu za ich odblokowanie. Często trafia do komputera przez fałszywe e-maile, nieaktualne programy i słabe hasła.</li>
          </ul>
          <p>Ochrona: <b>aktualizacje</b> systemu i programów (łatają luki), program antywirusowy, zasada <b>ograniczonego zaufania</b> – nie klikaj w linki z nieoczekiwanych wiadomości, adres banku czy sklepu wpisz sam.</p>
          <h3>Etyka i netykieta</h3>
          <ul>
            <li>pisz z szacunkiem; nie hejtuj, nie podszywaj się pod innych,</li>
            <li>nie publikuj cudzych zdjęć i danych bez zgody,</li>
            <li>gdy ktoś jest obrażany – nie przyłączaj się, wesprzyj tę osobę i powiedz zaufanemu dorosłemu,</li>
            <li>dziel się wiedzą legalnie – np. przez otwarte zasoby; pamiętaj, że nie każdy ma równy dostęp do sprzętu i internetu.</li>
          </ul>
          <div class="tip">💡 Zanim coś opublikujesz, zapytaj siebie: czy chcę, żeby zobaczył to każdy – także za kilka lat?</div>`,
        flashcards: [
          ['Dane osobowe', 'Informacje, które pozwalają bezpośrednio lub pośrednio ustalić, kim jest dana osoba'],
          ['Przykłady danych osobowych', 'Imię i nazwisko, adres, PESEL, numer telefonu, e-mail, wizerunek'],
          ['Minimalizacja danych', 'Zbiera się tylko dane niezbędne do danego celu'],
          ['Cyfrowy ślad', 'Wszystko, co zostawiasz w sieci: posty, zdjęcia, komentarze, oznaczenia'],
          ['Silne hasło', 'Co najmniej 12 znaków, trudne do odgadnięcia; np. zdanie z kilku wyrazów'],
          ['Jedno hasło do wielu kont?', 'Nie – jedno hasło = jedna usługa'],
          ['Uwierzytelnianie dwuskładnikowe (2FA)', 'Logowanie hasłem i drugim składnikiem, np. kodem z aplikacji'],
          ['Phishing', 'Podszywanie się pod zaufaną instytucję lub osobę, by wyłudzić dane, np. hasło'],
          ['Sygnały phishingu', 'Presja czasu, podejrzany adres nadawcy, prośba o hasło lub kod'],
          ['Ransomware', 'Złośliwy program, który szyfruje pliki i żąda okupu'],
          ['Po co aktualizacje?', 'Łatają luki bezpieczeństwa w systemie i programach'],
          ['Netykieta', 'Zasady kulturalnego zachowania w sieci'],
        ],
        questions: [
          { id: 'ae32jm', q: 'Która informacja jest daną osobową?', options: ['„tydzień ma 7 dni”', 'twój numer PESEL', 'temperatura powietrza w Warszawie', 'wynik meczu'], answer: 1, explain: 'PESEL jednoznacznie wskazuje konkretną osobę. Pozostałe informacje nikogo nie identyfikują.' },
          { id: 'sn1h51', q: 'Które hasło jest najsilniejsze?', options: ['qwerty123', 'Kasia2012', 'MójPiesBurekLubiDługieSpacery!', '123456789012'], answer: 2, explain: 'Długie zdanie z kilku wyrazów jest trudne do odgadnięcia. qwerty, ciągi cyfr i imię z rokiem łatwo zgadnąć.' },
          { id: 'fpr91m', q: 'Dlaczego nie używać jednego hasła do wielu kont?', options: ['bo wyciek z jednego serwisu otwiera dostęp do wszystkich kont', 'bo serwisy tego zabraniają', 'bo hasło się zużywa', 'bo wtedy hasło musi być krótsze'], answer: 0, explain: 'Gdy hasło wycieknie z jednego serwisu, oszuści spróbują go także w innych.' },
          { id: 'krbufp', q: 'Dostajesz SMS: „Twoja paczka czeka. Dopłać 1,50 zł w ciągu 2 godzin, inaczej wróci do nadawcy” – z linkiem. Co to najpewniej jest?', options: ['zwykła informacja od kuriera', 'aktualizacja telefonu', 'reklama banku', 'phishing – próba wyłudzenia danych'], answer: 3, explain: 'Presja czasu, mała dopłata i link to typowe sygnały phishingu. Nie klikaj – sprawdź przesyłkę na stronie przewoźnika, wpisując adres samodzielnie.' },
          { id: 'f7og5v', q: 'Co jest sygnałem ostrzegawczym w e-mailu?', options: ['tekst bez błędów', 'presja czasu i prośba o podanie hasła', 'adres nadawcy, który znasz od lat', 'wiadomość, na którą czekałeś'], answer: 1, explain: 'Pilność i prośba o hasło to klasyczne sygnały phishingu.' },
          { id: 'ffcz1p', q: 'Na czym polega uwierzytelnianie dwuskładnikowe?', options: ['na podaniu hasła dwa razy', 'na używaniu dwóch kont', 'na logowaniu hasłem i dodatkowym składnikiem, np. kodem z aplikacji', 'na logowaniu z dwóch urządzeń naraz'], answer: 2, explain: 'Drugi składnik (np. jednorazowy kod) chroni konto nawet wtedy, gdy ktoś pozna hasło.' },
          { id: 'hlhdyx', q: 'Po co instalować aktualizacje systemu i programów?', options: ['łatają luki bezpieczeństwa', 'zawsze spowalniają komputer', 'usuwają twoje pliki', 'zmieniają twoje hasła'], answer: 0, explain: 'Przestępcy wykorzystują błędy w programach. Aktualizacje zawierają poprawki tych błędów.' },
          { id: 'kij32y', q: 'Ransomware to program, który…', options: ['przyspiesza internet', 'tworzy kopie zapasowe', 'sprawdza pisownię', 'szyfruje pliki i żąda okupu za ich odblokowanie'], answer: 3, explain: 'Ransomware blokuje dostęp do danych i wymusza okup.' },
          { id: '4my0p4', q: 'Koleżanka zrobiła ci zabawne zdjęcie i chce je wrzucić do sieci. Czy potrzebna jest twoja zgoda?', options: ['tak – to twój wizerunek', 'nie – zdjęcie zrobiła ona, więc decyduje tylko ona', 'nie – w sieci wszystko wolno', 'tylko wtedy, gdy zdjęcie jest nieudane'], answer: 0, explain: 'Rozpowszechnianie wizerunku wymaga zgody osoby przedstawionej na zdjęciu.' },
          { id: '82ywby', q: 'Co oznacza zasada minimalizacji danych?', options: ['zbiera się jak najwięcej danych na zapas', 'dane zapisuje się małą czcionką', 'dane usuwa się po minucie', 'zbiera się tylko dane niezbędne do danego celu'], answer: 3, explain: 'Np. do zapisu na newsletter wystarczy e-mail – adres domowy nie jest potrzebny.' },
          { id: 'i2cgs2', q: 'Prawda czy fałsz?\nSam nick w grze zwykle nie jest daną osobową, ale może się nią stać w połączeniu z innymi danymi.', options: TF, noShuffle: true, answer: 0, explain: 'Gdy nick da się powiązać z imieniem, nazwiskiem czy adresem, pozwala ustalić, kim jesteś.' },
          { id: 'x70dzg', q: 'Prawda czy fałsz?\nPost usunięty z profilu znika z internetu na zawsze i nikt go już nie zobaczy.', options: TF, noShuffle: true, answer: 1, explain: 'Zanim go usunąłeś, ktoś mógł go skopiować, udostępnić albo zrobić zrzut ekranu.' },
          { id: 'vhakx3', q: 'Ktoś na grupie klasowej obraża kolegę. Co jest właściwą reakcją?', options: ['dołączyć się do żartów', 'udostępnić wpis dalej', 'nie przyłączać się, wesprzeć kolegę i powiedzieć zaufanemu dorosłemu', 'odpowiedzieć obraźliwie temu, kto zaczął'], answer: 2, explain: 'Nie wzmacniaj hejtu. Wsparcie i zgłoszenie dorosłemu pomagają przerwać przemoc w sieci.' },
        ],
      },
    ],
  });
})();
