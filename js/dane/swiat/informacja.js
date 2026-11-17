/* 🌍 Świat – nauka z innych krajów: informacja i algorytmy.
 * Ścieżka POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Działy ułożone według tematów, nie klas: level (1–3), age ([od, do] – sugerowany wiek), requires ('przedmiot/dział'), where – gdzie się tego uczą.
 * Fakty o szkołach za granicą – tylko z dokumentów ministerstw (adresy w polu basis i w js/dane/swiat/zrodla.js). */
(function () {
  const NC = 'National curriculum in England: computing programmes of study, key stages 3 and 4 (Department for Education, wrzesień 2013, dokument DFE-00191-2013, gov.uk – obowiązujący, sprawdzone 14.11.2026)';
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'informacja',
    name: 'Informacja i algorytmy',
    icon: '💻',
    color: '#6c4fc2',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'bramki-logiczne',
        name: 'Logika i bramki logiczne',
        level: 3,
        age: [12, 15],
        where: 'Anglia – computing, key stage 3 (uczniowie 11–14 lat): logika AND, OR, NOT w obwodach i w programowaniu',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Źródło: ${NC}, key stage 3: „understand simple Boolean logic [for example, AND, OR and NOT] and some of its uses in circuits and programming”. Wiek uczniów w key stage 3 (11–14 lat, Year 7–9) i informatyka (computing) jako przedmiot obowiązkowy w key stages 1–4 – strony gov.uk „The national curriculum” (overview, key stage 1 and 2, key stage 3 and 4), sprawdzone 14.11.2026. Połączenie szeregowe i równoległe – fizyka kl. 8 (dział „Prąd, napięcie i opór”). Działanie and, or, not i kolejność działań w Pythonie sprawdzone przez uruchomienie kodu. Kształty symboli bramek w lekcji (AND – półkole, OR – „tarcza”, NOT – trójkąt z kółkiem) nie zostały sprawdzone w osobnym źródle – dlatego w każdym symbolu jest też nazwa bramki. W polskiej podstawie dla kl. VII–VIII są wartości logiczne, ale nie ma bramek logicznych.`,
        theory: `
          <h3>Jak to jest w Anglii?</h3>
          <p>W szkołach w Anglii, które realizują krajowy program nauczania (<i>national curriculum</i>), informatyka (<i>computing</i>) jest przedmiotem obowiązkowym od pierwszej klasy (5–6 lat) aż do 16. roku życia. Etap <b>key stage 3</b> to uczniowie w wieku 11–14 lat (Year 7–9). Program nauczania mówi, że na tym etapie uczeń ma rozumieć <b>prostą logikę Boole’a (AND, OR, NOT)</b> i jej zastosowania w <b>obwodach</b> i w <b>programowaniu</b>.</p>
          <h3>Prawda = 1, fałsz = 0</h3>
          <p>Każde zdanie logiczne jest albo prawdziwe, albo fałszywe. Komputer zapisuje to jako <b>1</b> (prawda) i <b>0</b> (fałsz). Np. „5 &gt; 3” → 1, „2 &gt; 4” → 0.</p>
          <h3>Trzy podstawowe działania</h3>
          <table>
            <tr><th>A</th><th>B</th><th>NOT A</th><th>A AND B</th><th>A OR B</th></tr>
            <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
          </table>
          <ul>
            <li><b>NOT</b> (nie) – odwraca: 0 → 1, 1 → 0. Ma jedno wejście.</li>
            <li><b>AND</b> (i) – daje 1 <b>tylko wtedy, gdy oba</b> wejścia to 1.</li>
            <li><b>OR</b> (lub) – daje 1, gdy <b>co najmniej jedno</b> wejście to 1.</li>
          </ul>
          <p>Taka tabela to <b>tabela prawdy</b>: wypisuje wynik dla każdego układu wejść. Dla 2 wejść ma 4 wiersze, dla 3 wejść – 8 (każde nowe wejście podwaja liczbę wierszy).</p>
          <h3>Logika w obwodzie</h3>
          <table>
            <tr><th>Obwód z żarówką</th><th>Żarówka świeci, gdy…</th><th>Działanie</th></tr>
            <tr><td>dwa wyłączniki <b>szeregowo</b> (jeden za drugim)</td><td>oba są zamknięte</td><td>AND</td></tr>
            <tr><td>dwa wyłączniki <b>równolegle</b> (dwie drogi dla prądu)</td><td>choć jeden jest zamknięty</td><td>OR</td></tr>
          </table>
          <p>W elektronice takie działania wykonują <b>bramki logiczne</b> – układy elektroniczne, które mają wejścia i jedno wyjście. Z bramek buduje się układy, które w komputerze liczą i podejmują decyzje.</p>
          <h3>Logika w programowaniu (Python)</h3>
          <p><code>and</code>, <code>or</code>, <code>not</code> łączą warunki, np. <code>if wiek &gt;= 13 and zgoda_rodzica:</code>. Wynik to <code>True</code> albo <code>False</code>: <code>5 &gt; 3 and 2 &gt; 4</code> → <code>False</code>.</p>
          <p class="tip">Kolejność: najpierw nawiasy, potem <b>NOT</b>, potem <b>AND</b>, na końcu <b>OR</b> (tak liczy Python). W razie wątpliwości – dopisz nawiasy.</p>`,
        infographicNote: 'Porównuj w poziomie: trzy działania, kiedy dają 1, jak wyglądają w obwodzie i w Pythonie.',
        infographic: {
          type: 'porownanie',
          top: { kolor: 4, title: '1 = prawda, 0 = fałsz', text: 'zdanie logiczne jest albo prawdziwe, albo fałszywe' },
          kolumny: [{ title: 'NOT', kolor: 5 }, { title: 'AND', kolor: 1 }, { title: 'OR', kolor: 3 }],
          wiersze: [
            { label: 'Po polsku', cells: ['nie', 'i', 'lub'], bold: true },
            { label: 'Wejścia', cells: ['jedno', 'dwa', 'dwa'] },
            { label: 'Daje 1, gdy…', cells: ['wejście to 0', 'oba to 1', 'choć jedno 1'] },
            { label: 'Wyłączniki w obwodzie', cells: ['—', 'szeregowo', 'równolegle'] },
            { label: 'Python', cells: ['not', 'and', 'or'], bold: true },
          ],
          bottom: { kolor: 2, title: '🧮 Kolejność', text: 'nawiasy → NOT → AND → OR' },
        },
        flashcards: [
          ['Logika Boole’a', 'działania na wartościach prawda (1) i fałsz (0)'],
          ['NOT (nie)', 'odwraca: 0 → 1, 1 → 0'],
          ['AND (i)', '1 tylko wtedy, gdy oba wejścia to 1'],
          ['OR (lub)', '1, gdy co najmniej jedno wejście to 1'],
          ['Tabela prawdy', 'wynik dla każdego układu wejść; 2 wejścia – 4 wiersze, 3 wejścia – 8'],
          ['Wyłączniki szeregowo', 'żarówka świeci, gdy oba zamknięte – AND'],
          ['Wyłączniki równolegle', 'żarówka świeci, gdy choć jeden zamknięty – OR'],
          ['Bramka logiczna', 'układ elektroniczny z wejściami i jednym wyjściem, wykonujący działanie logiczne'],
          ['Kolejność działań logicznych', 'nawiasy → NOT → AND → OR'],
          ['Key stage 3 w Anglii', 'uczniowie w wieku 11–14 lat (Year 7–9); w programie: AND, OR, NOT w obwodach i programowaniu'],
        ],
        questions: [
          { id: 'md1g2o', q: 'Ile wynosi 1 AND 0?', options: ['0', '1'], noShuffle: true, answer: 0, explain: 'AND daje 1 tylko wtedy, gdy oba wejścia to 1. Tu jedno wejście to 0, więc wynik to 0.' },
          { id: 'olz9l2', q: 'Ile wynosi 1 OR 0?', options: ['0', '1'], noShuffle: true, answer: 1, explain: 'OR daje 1, gdy co najmniej jedno wejście to 1. Tu pierwsze wejście to 1.' },
          { id: 'iig86e', q: 'Ile wynosi NOT 0?', options: ['0', '1'], noShuffle: true, answer: 1, explain: 'NOT odwraca wartość: z 0 robi 1.' },
          { id: 'xlhff7', q: 'Która bramka daje na wyjściu 1 tylko wtedy, gdy oba wejścia to 1?', options: ['AND', 'OR', 'NOT'], noShuffle: true, answer: 0, explain: 'To bramka AND („i”): oba warunki naraz muszą być prawdziwe.' },
          { id: 'bi3vdx', q: 'W obwodzie są bateria, żarówka i dwa wyłączniki połączone szeregowo. Kiedy żarówka świeci?', options: ['gdy oba wyłączniki są zamknięte', 'gdy choć jeden wyłącznik jest zamknięty', 'gdy oba wyłączniki są otwarte', 'gdy dokładnie jeden jest zamknięty'], answer: 0, explain: 'Przy połączeniu szeregowym prąd ma tylko jedną drogę – przez oba wyłączniki. Otwarty choć jeden przerywa obwód. To działanie AND.' },
          { id: 'pz0dhz', q: 'Dwa wyłączniki połączone równolegle sterują jedną żarówką. Któremu działaniu logicznemu to odpowiada?', options: ['OR', 'AND', 'NOT'], noShuffle: true, answer: 0, explain: 'Przy połączeniu równoległym prąd ma dwie drogi. Wystarczy, że jeden wyłącznik jest zamknięty – żarówka świeci. To OR.' },
          { id: 'pfeph3', q: 'A = 1, B = 0, C = 1. Ile wynosi (A AND B) OR C?', options: ['0', '1'], noShuffle: true, answer: 1, explain: 'Najpierw nawias: 1 AND 0 = 0. Potem 0 OR 1 = 1.' },
          { id: '9zhxjx', q: 'A = 0, B = 0. Ile wynosi NOT (A OR B)?', options: ['0', '1'], noShuffle: true, answer: 1, explain: 'Najpierw nawias: 0 OR 0 = 0. Potem NOT 0 = 1.' },
          { id: 'ykmupe', q: 'A = 1, B = 1. Ile wynosi A AND (NOT B)?', options: ['0', '1'], noShuffle: true, answer: 0, explain: 'NOT B = NOT 1 = 0. Potem 1 AND 0 = 0.' },
          { id: '74clj3', q: 'Co wypisze Python?\nprint(5 > 3 and 2 > 4)', options: ['True', 'False', '5', 'błąd'], answer: 1, explain: '5 > 3 to True, 2 > 4 to False. True and False daje False.' },
          { id: 'dy3ixp', q: 'Co wypisze Python?\nprint(not (3 == 3))', options: ['False', 'True', '3', 'błąd'], answer: 0, explain: '3 == 3 to True, a not True daje False.' },
          { id: 'wsj16p', q: 'Pralka ma ruszyć, gdy drzwiczki są zamknięte i wciśnięto przycisk start. Który warunek to opisuje?', options: ['zamkniete and start', 'zamkniete or start', 'not zamkniete and start', 'zamkniete or not start'], answer: 0, explain: 'Oba warunki muszą być spełnione naraz – to and. Z or pralka ruszyłaby np. przy otwartych drzwiczkach po wciśnięciu startu.' },
          { id: 'z8bx4e', q: 'Ile wierszy ma tabela prawdy dla bramki z 3 wejściami?', options: ['8', '6', '4', '3'], answer: 0, explain: 'Każde wejście to 0 albo 1, więc wierszy jest 2 · 2 · 2 = 8.' },
          { id: 'l3eu4m', q: 'Prawda czy fałsz?\nBramka OR daje 1 tylko wtedy, gdy oba wejścia to 1.', options: TF, noShuffle: true, answer: 1, explain: 'Fałsz. Tak działa AND. OR daje 1, gdy co najmniej jedno wejście to 1 – także wtedy, gdy oba.' },
          { id: 'lxjpsn', q: 'W jakim wieku są uczniowie na etapie key stage 3 w Anglii – tym, na którym program przewiduje logikę AND, OR, NOT?', options: ['11–14 lat', '5–7 lat', '7–11 lat', '16–18 lat'], answer: 0, explain: 'Key stage 3 to Year 7–9, czyli uczniowie w wieku 11–14 lat.' },
          { id: '025iyp', q: 'Python liczy najpierw not, potem and, na końcu or. Co wypisze print(True or True and False)?', options: ['True', 'False'], noShuffle: true, answer: 0, explain: 'Najpierw and: True and False = False. Potem True or False = True.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'polsumator',
        name: 'Dodawanie dwójkowe i półsumator',
        level: 3,
        age: [12, 15],
        requires: ['informacja/bramki-logiczne'],
        where: 'Bawaria – Realschule, informatyka (Informationstechnologie): moduł do wyboru 2.7.1 „Logische Schaltungen” (ok. 14 godzin; klasę wybiera szkoła) – NAND, NOR, XOR (Antivalenz), a jako przykłady światło na klatce schodowej i dodawanie dwóch liczb dwójkowych; Bawaria – gimnazjum, „Natur und Technik” w kl. 7: lampa sterowana dwoma przełącznikami (przykład); Anglia – computing, key stage 3 (11–14 lat): proste działania na liczbach dwójkowych, np. dodawanie',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Dział według standardu „różnicy” (decyzja rodzica 14.11.2026): wspólne z polską szkołą tylko jako przypomnienie z etykietą klasy, rdzeń – to, czego polska podstawa nie wymaga. Research 16.11.2026 – notatki ze źródłami i cytatami: docs/research/research_notes/Półsumator – standard różnicy/zrodla.md; tłumaczenia – nasze. POLSKA (tekst podstaw, eli.gov.pl, sprawdzone pełnotekstowo): stara podstawa (Dz.U. 2024 poz. 996), informatyka kl. VII–VIII, I.3 (s. 200): „przedstawia sposoby reprezentowania w komputerze wartości logicznych, liczb naturalnych (system binarny), znaków (kody ASCII) i tekstów”; nowa podstawa (Dz.U. 2026 poz. 378), informatyka kl. VII–VIII, 1.5 (s. 257) – to samo bez tekstów; w kl. IV–VI obu podstaw systemu dwójkowego nie ma. Dodawania dwójkowego, bramki XOR, NAND, NOR i półsumatora wymagania szkoły podstawowej nie zawierają (w tym rozporządzeniu bramki występują tylko w fakultatywnym module fizyki branżowej szkoły I stopnia – Dz.U. 2024 poz. 996, zał. 2, s. 345; podstaw liceum i technikum nie sprawdzaliśmy). E-materiał ZPE „Bramki logiczne, czyli nowe znaczenie zera i jedynki” dla kl. 7–8 jest opisany jako „materiał rozszerzający treści podstawy programowej”. INNE KRAJE: (1) Bawaria – LehrplanPLUS (ISB), Realschule, Informationstechnologie, moduł 2.7.1 „Logische Schaltungen” (ca. 14 Std.; lehrplanplus.bayern.de/fachlehrplan/realschule/8/it): „verwenden Schaltpläne, Wertetabellen und Funktionsterme, um kombinierte logische Grundschaltungen (z. B. Lichtschaltung im Treppenhaus als Antivalenzschaltung) darstellen zu können”, „analysieren und modellieren eine Funktionalität des Rechenwerks (z. B. Addition zweier Dualzahlen) mithilfe logischer Schaltungen”, „implementieren Modelle digitaler Schaltungen (z. B. mit Technikbaukasten oder Simulationssoftware)”, treści: „Kombination logischer Grundfunktionen: NAND, NOR, Äquivalenz, Antivalenz”, „Komplexe Schaltungen im Rechenwerk eines Prozessors, z. B. … Halb- und Volladdierer …” – światło na schodach, dodawanie i sumatory to przykłady „z. B.”; Fachprofil IT: „2.7.1 Logische Schaltungen (Wahlmodul)” – moduł do wyboru w dalszej nauce (Aufbauunterricht), szkoła sama wybiera moduły i klasy; system dwójkowy jest w obowiązkowym module 1.4 („Stellenwertsysteme: Dezimal- und Dualsystem”). Gimnazjum, Natur und Technik 7, Lernbereich 1.3: „…eine elektrische Schaltung zu einer einfachen technischen Problemstellung (z. B. Bedienung einer Lampe mit zwei Wechselschaltern)” – najpierw w programie, potem budowa „unter Anleitung”. Wieku uczniów w Bawarii nie podajemy (strony ministerstwa niedostępne z sesji). Materiałów ISB do modułu 2.7.1 (kurs mebis) nie czytaliśmy – host niedostępny. (2) ${NC}, s. 2, key stage 3: „understand how numbers can be represented in binary, and be able to carry out simple operations on binary numbers [for example, binary addition, and conversion between binary and decimal]”; s. 1: „Schools are not required by law to teach the example content in [square brackets]” – dodawanie to przykład; XOR, NAND, NOR i półsumatora program Anglii nie wymienia. (3) Australia (v9.0, AC9TDI8K04, Years 7–8): „explain how and why digital systems represent integers in binary” – przykłady: liczenie do 31, bajt 0–255, obwody z dwoma przełącznikami jako AND i OR; dodawania dwójkowego nie wymienia – tylko tło. SPOSÓB UCZENIA I BŁĘDNE PRZEKONANIA – lekcje Oak National Academy (thenational.academy; publiczna platforma, nie program; „licensed on Open Government Licence version 3.0” – parafrazujemy): Year 8 „Numbers in binary” (mit: system dwójkowy ma te same wagi pozycji co dziesiętny), Year 10 „Binary addition” (zasady 0+0, 0+1, 1+1 = 10, 1+1+1 = 11; przeniesienie; mit: uczniowie dodają jak w dziesiętnym, 1 + 1 = 2; wskazówka: zapis jak w dodawaniu pisemnym z matematyki), Year 10 „Boolean logic and logic gates” (wejścia tabeli prawdy wypisuj jak liczenie dwójkowe: 00, 01, 10, 11), „Introduction to logic circuit design” (XOR: „either A or B, but not both”), „Logic gate simulator software” (mit: każde wejście można podłączyć tylko do jednej bramki). WIEDZA (zpe.gov.pl): „System dwójkowy” (szkoła podstawowa IV–VIII, CC BY 3.0: wagi pozycji, zasady dodawania bitów, przeniesienie, zaczynamy od najmniej znaczących bitów, suma 10 i 11), „Bramki logiczne, czyli nowe znaczenie zera i jedynki” (słowniczek: XOR – alternatywa rozłączna „albo”, NAND = AND + NOT, NOR = OR + NOT), „Podstawy elektroniki” (liceum, CC BY-SA 3.0: tabele prawdy XOR, NAND, NOR i symbole bramek). Półsumator wyprowadziliśmy z zasad dodawania bitów (ZPE): cyfra sumy ma tabelę XOR, przeniesienie – tabelę AND. Sprawdzone kodem (Python): wszystkie działania w dziale, tabele XOR/AND/NAND/NOR, półsumator (2·C + S = A + B), sumator pełny z dwóch półsumatorów i bramki OR (8 przypadków), łańcuch sumatorów (wszystkie 256 par liczb 4-bitowych) i nasz model światła schodowego (4 ustawienia). Przykłady liczb i model połączeń przełączników – nasze. Pominięte (bez potwierdzenia): szczegóły prawdziwej instalacji 230 V, filmy (nie obejrzane – opisy według stron).`,
        theory: `
          <p class="tip">🇵🇱 <b>W polskiej szkole</b> w kl. VII–VIII poznajesz system dwójkowy – jak komputer zapisuje liczby. <b>Dodawania dwójkowego, bramki XOR i półsumatora polska podstawa programowa nie wymaga</b> – ani stara, ani nowa. Tu najpierw krótkie przypomnienie, a potem to, czego uczą się rówieśnicy w Bawarii i w Anglii.</p>
          <h3>🇵🇱 Przypomnienie – informatyka, kl. VII–VIII</h3>
          <p>W systemie dwójkowym są tylko cyfry <b>0</b> i <b>1</b>. Pozycje od prawej mają wagi <b>1, 2, 4, 8, 16…</b> – każda dwa razy większa (w dziesiętnym: 1, 10, 100…). Np. 1101₂ = 8 + 4 + 0 + 1 = <b>13</b>.</p>
          <p>🌍 <b>Z działu Bramki:</b> AND daje 1 tylko przy dwóch jedynkach, OR – gdy choć jedno wejście to 1, NOT odwraca.</p>
          <h3>🌍 1. Dodawanie pisemne – dwójkowo</h3>
          <p>Dodajesz jak w słupku na matematyce: <b>od prawej kolumny</b>, z przeniesieniem. Tylko „dwa” zapisuje się już jako <b>10</b>.</p>
          <table>
            <tr><th>Działanie</th><th>Wynik</th><th>Piszesz</th><th>Przenosisz</th></tr>
            <tr><td>0 + 0</td><td>0</td><td>0</td><td>–</td></tr>
            <tr><td>0 + 1, 1 + 0</td><td>1</td><td>1</td><td>–</td></tr>
            <tr><td>1 + 1</td><td>10</td><td>0</td><td>1</td></tr>
            <tr><td>1 + 1 + 1 (z przeniesienia)</td><td>11</td><td>1</td><td>1</td></tr>
          </table>
          <div class="pis"><pre>  1 1        ← przeniesienia
  0 1 1 0    (6)
+ 0 1 1 1    (7)
---------
  1 1 0 1    (13)</pre></div>
          <p><b>Sprawdź</b> wynik dziesiętnie: 6 + 7 = 13, a 1101₂ = 13 ✅. Wynik może mieć <b>o jedną cyfrę więcej</b>: 1111₂ + 0001₂ = 10000₂ (15 + 1 = 16).</p>
          <h3>🌍 2. Bramka XOR – „albo”</h3>
          <p><b>XOR</b> daje 1, gdy wejścia są <b>różne</b>, a 0, gdy są takie same. Po polsku: alternatywa rozłączna, „albo” (ZPE); po angielsku „either A or B, but not both” (Oak); w bawarskim programie: <i>Antivalenz</i>. Na schematach rysuje się ją jak OR z dodatkowym łukiem przy wejściach.</p>
          <table>
            <tr><th>A</th><th>B</th><th>A XOR B</th><th>A OR B</th></tr>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td><b>0</b></td><td><b>1</b></td></tr>
          </table>
          <p>XOR różni się od OR tylko w ostatnim wierszu: dwie jedynki dają 0.</p>
          <h3>🌍 3. Światło na schodach</h3>
          <p>Bawarski program podaje przykład: <b>oświetlenie klatki schodowej jako układ XOR</b>. Lampę włączasz na dole i gasisz na górze – albo odwrotnie. Każdy z dwóch przełączników <b>zmienia stan lampy</b>, niezależnie od tego, jak stoi drugi. Tak działa XOR: zmiana jednego wejścia zawsze zmienia wynik.</p>
          <p>Potrzebne są dwa <b>przełączniki schodowe</b> (przełączne, z trzema zaciskami – po niemiecku <i>Wechselschalter</i>). Zwykły wyłącznik z dwoma zaciskami się tu nie nada. W naszym modelu środkowy zacisk każdego przełącznika łączy się – zależnie od pozycji 0 albo 1 – z jednym z dwóch przewodów biegnących między przełącznikami. Pozycje oznaczyliśmy tak, żeby przy 0 i 0 było ciemno – wtedy lampa świeci, gdy przełączniki stoją <b>różnie</b>. (Przy innym oznaczeniu wyszłoby odwrotnie – ale nadal każdy przełącznik zmienia stan lampy.) Gdyby lampa działała jak OR, po włączeniu na dole nie dałoby się jej zgasić na górze.</p>
          <h3>🌍 4. Półsumator = XOR + AND</h3>
          <p>Dodaj dwa bity A i B. Wynik ma dwie cyfry: <b>C</b> (przeniesienie) i <b>S</b> (cyfra sumy, którą piszesz pod kreską).</p>
          <table>
            <tr><th>A</th><th>B</th><th>A + B</th><th>C (przeniesienie)</th><th>S (suma)</th></tr>
            <tr><td>0</td><td>0</td><td>00</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>01</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>01</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>10</td><td>1</td><td>0</td></tr>
          </table>
          <p>Kolumna S to dokładnie tabela <b>XOR</b>, a kolumna C – tabela <b>AND</b>. Dlatego <b>półsumator</b> to dwie bramki: <b>S = A XOR B</b>, <b>C = A AND B</b>. Wejście A prowadzi naraz do obu bramek – i B też. Jedno wejście może zasilać kilka bramek.</p>
          <h3>🌍 5. Dalej: sumator pełny i łańcuch</h3>
          <p>Półsumator ma tylko dwa wejścia, więc <b>nie doda przeniesienia</b> z poprzedniej kolumny – stąd „pół”. <b>Sumator pełny</b> dodaje trzy bity: A, B i przeniesienie (np. 1 + 1 + 1 = 11). Gdy połączysz sumatory w <b>łańcuch</b> – przeniesienie z jednej kolumny wchodzi do następnej – dodasz liczby wielocyfrowe, tak jak w słupku. Bawarski program wymienia półsumator i sumator pełny („Halb- und Volladdierer”) jako przykłady układów w <b>jednostce arytmetycznej procesora</b>.</p>
          <p>Dla chętnych: sumator pełny da się złożyć z dwóch półsumatorów i bramki OR (oba przeniesienia idą do OR). Sprawdziliśmy wszystkie 8 przypadków.</p>
          <h3>🌍 6. Krótko: NAND i NOR</h3>
          <p><b>NAND</b> = AND, a potem NOT: daje 0 tylko przy dwóch jedynkach. <b>NOR</b> = OR, a potem NOT: daje 1 tylko przy dwóch zerach. Obie są w bawarskim module obok XOR.</p>
          <h3>Jak uczą tego w Bawarii?</h3>
          <p>W Realschule (jeden z typów szkoły w Bawarii, kl. 5–10) informatyka składa się z modułów po ok. 14 godzin. System dwójkowy jest w obowiązkowym kursie początkowym, a „Układy logiczne” (2.7.1) – w module <b>do wyboru</b>: szkoła decyduje, czy go oferuje. Uczeń opisuje układ na trzy sposoby: <b>schematem</b>, <b>tabelą wartości</b> i <b>wzorem</b> (np. S = A XOR B); w treściach modułu jako przykład jest też wykres czasowy. Potem buduje model z <b>zestawu technicznego</b> albo w <b>symulatorze</b>, testuje go i poprawia. W gimnazjum, na „Natur und Technik” w kl. 7, przykładem zadania jest lampa sterowana dwoma przełącznikami: najpierw projekt w programie, potem budowa pod kierunkiem nauczyciela, z zasadami bezpieczeństwa.</p>
          <h3>Jak uczą tego w Anglii?</h3>
          <p>Program dla key stage 3 (11–14 lat) wymaga prostych działań na liczbach dwójkowych – dodawanie i zamiana dwójkowy ↔ dziesiętny są tam <b>przykładami</b> w nawiasie (szkoła nie musi ich użyć). Lekcje Oak National Academy (publiczna platforma, nie program): w Year 8 – zamiana liczb, w Year 10 – dodawanie dwójkowe zapisane tak jak dodawanie pisemne z matematyki. Wejścia tabeli prawdy wypisuje się po kolei jak liczenie dwójkowe: 00, 01, 10, 11.</p>
          <h3>Uważaj!</h3>
          <ul>
            <li>Prawdziwe światło na klatce schodowej działa na <b>230&nbsp;V</b> – nie otwieraj przełączników ani puszek. Porażenie może zaszkodzić zdrowiu, a nawet życiu.</li>
            <li>Układ możesz narysować, zasymulować albo – z dorosłym – zbudować na baterię płaską 4,5&nbsp;V z żarówką z zestawu. Baterii nie zwieraj (przewód wprost z bieguna na biegun) i nie ładuj zwykłych baterii.</li>
          </ul>`,
        infographicNote: 'Czytaj od góry: od dodawania w słupku do układu, który dodaje sam – każdy krok korzysta z poprzedniego.',
        infographic: {
          type: 'kroki',
          top: { kolor: 4, title: '🇵🇱 Przypomnienie (kl. VII–VIII)', text: 'cyfry 0 i 1; wagi pozycji od prawej: 1, 2, 4, 8, 16…' },
          items: [
            { icon: '➕', kolor: 1, title: 'Dodawanie bitów', text: '1 + 1 = 10, 1 + 1 + 1 = 11 – od prawej, z przeniesieniem' },
            { icon: '🔀', kolor: 5, title: 'XOR – „albo”', text: '1, gdy wejścia są różne; 1 i 1 daje 0' },
            { icon: '💡', kolor: 2, title: 'Światło na schodach', text: 'każdy przełącznik zmienia stan lampy – to XOR' },
            { icon: '🧮', kolor: 3, title: 'Półsumator', text: 'S = A XOR B (suma), C = A AND B (przeniesienie)' },
            { icon: '🔗', kolor: 1, title: 'Sumator pełny i łańcuch', text: 'dodaje też przeniesienie – na tej zasadzie można zbudować dodawanie w procesorze' },
          ],
          bottom: { kolor: 4, title: '💡 Sprawdź dziesiętnie', text: '0110 + 0111 = 1101, czyli 6 + 7 = 13; 1 + 1 = 10₂ (to dwa, zapisane bez cyfry 2)' },
        },
        parent: {
          goal: 'Dziecko dodaje pisemnie liczby dwójkowe z przeniesieniem i sprawdza wynik dziesiętnie, rozumie bramkę XOR (na przykładzie światła na schodach) i widzi, że z dwóch bramek – XOR i AND – powstaje półsumator – układ, który dodaje dwa bity; na tej zasadzie można zbudować dodawanie w procesorze. Tego polska podstawa szkoły podstawowej nie wymaga; system dwójkowy (kl. VII–VIII) i bramki AND, OR, NOT (dział „Bramki”) to przypomnienie.',
          time: 'lekcja ok. 15 minut; „Papierowy procesor” ok. 30 minut; projekt „Światło na schodach” 1–2 spotkania po 45 minut (nasza propozycja; dla porównania: bawarski moduł „Układy logiczne” – ok. 14 godzin lekcyjnych)',
          mistakes: [
            'Zapis „1 + 1 = 2” – dziecko zapisuje wynik jak w systemie dziesiętnym, a dwójkowo wynik 1 + 1 (czyli dwa) zapisuje się jako 10 (Oak, lekcja „Binary addition”, Year 10).',
            '„System dwójkowy ma te same wagi pozycji co dziesiętny” – wagi to 1, 2, 4, 8, a nie 1, 10, 100 (Oak, „Numbers in binary”, Year 8).',
            '„Każde wejście można podłączyć tylko do jednej bramki” – w półsumatorze A i B idą do dwóch bramek naraz (Oak, „Logic gate simulator software”, Year 10).',
            '„Wszystkie bramki mają dwa wejścia” – NOT ma jedno (Oak, „Boolean logic and logic gates”, Year 10).',
          ],
          avoid: [
            'Nie zaczynaj od wzorów – najpierw dodawanie w słupku, potem tabela, na końcu bramki.',
            'Nie mów „XOR to prawie OR” – różnią się w ważnym przypadku (1 i 1). Niech dziecko samo porówna ostatni wiersz tabeli.',
            'Żadnych doświadczeń z domową instalacją 230 V – światło schodowe tylko na rysunku, w symulatorze albo na baterii 4,5 V.',
            'Nie podawaj wyniku – pytaj: „Ile to dziesiętnie? Zgadza się?”.',
          ],
          prepare: [
            'kartki, kolorowe kartoniki z cyframi 0 i 1 (albo żetony), długopis; wydrukowana karta z zakładki 🛠️ Zrób',
            'do projektu (tylko jeśli budujecie): bateria płaska 4,5 V, żarówka z oprawką z zestawu do elektroniki, dwa przełączniki schodowe z zestawu (przełączne, z trzema zaciskami – zwykły wyłącznik z dwoma zaciskami się nie nada), ok. 5 przewodów z krokodylkami',
          ],
          talk: [
            'Gdzie w domu albo w szkole światło włącza się z dwóch miejsc (schody, długi korytarz)?',
            'Dlaczego komputer liczy na zerach i jedynkach, a my na dziesięciu cyfrach?',
            'Jak sprawdzić, czy dodawanie dwójkowe wyszło dobrze, bez kalkulatora?',
            'Ile sumatorów trzeba, żeby dodać dwie liczby 4-cyfrowe? (Podpowiedź: po jednym na kolumnę – w pierwszej od prawej wystarczy półsumator.)',
          ],
        },
        activities: [
          {
            id: '7s1mpj', kind: 'doswiadczenie', title: 'Papierowy procesor – dodaj jak półsumator', time: '30 minut',
            intro: 'Bawarski program podaje przykład: zamodelować, jak jednostka arytmetyczna procesora dodaje dwie liczby dwójkowe. Zrób to bez prądu: ty i druga osoba jesteście bramkami XOR i AND.',
            safety: [
              'Nic tu nie jest podłączone do prądu – to model na papierze. Nie rozkręcaj przełączników ani urządzeń w domu.',
              'Nożyczki tylko do kartonu, ostrzem od siebie.',
            ],
            needs: ['8 kartoników: 4 z cyfrą 0 i 4 z cyfrą 1 (albo żetony w dwóch kolorach)', 'dwie kartki z napisami „XOR” i „AND”', 'nożyczki (jeśli wycinasz kartoniki)', 'długopis', 'wydrukowana karta'],
            steps: [
              '🎭 Role: osoba „XOR” podnosi 1, gdy dostanie dwie różne cyfry, a 0 – gdy takie same. Osoba „AND” podnosi 1 tylko wtedy, gdy dostanie dwie jedynki. Pracujesz sam? Bądź po kolei obiema bramkami.',
              '🔁 Rozdaj wejścia: ta sama para kartoników A i B trafia do obu „bramek” naraz – jak w prawdziwym półsumatorze (dwa komplety kartoników).',
              '🤔 Zanim bramki odpowiedzą: przewiduję S (XOR) i C (AND). Wpisz w tabelę.',
              '🔬 Sprawdź wszystkie 4 pary: 0 i 0, 0 i 1, 1 i 0, 1 i 1. Wypisuj je po kolei jak liczenie dwójkowe: 00, 01, 10, 11 (tak radzą lekcje Oak).',
              '🧮 Kontrola: dla każdej pary policz A + B dziesiętnie i porównaj z liczbą „C S” odczytaną dwójkowo (np. C = 1, S = 0 → 10₂ = 2).',
              '🔗 Łańcuch: dodaj na kartce 0110 + 0111 kolumna po kolumnie. W pierwszej kolumnie (od prawej) pracuje półsumator, w następnych – „sumator pełny”: dodajesz też przeniesienie (1 + 1 + 1 = 11 – piszesz 1, przenosisz 1).',
              '✅ Sprawdź wynik dziesiętnie: 6 + 7 = ?',
            ],
            table: { cols: ['A, B', 'Przewiduję S, C', 'Wyszło S, C', 'C S₂ i A + B'], rows: ['0, 0', '0, 1', '1, 0', '1, 1'] },
            conclusion: 'Cyfrę sumy S daje bramka … , a przeniesienie C – bramka … . Liczba „C S” odczytana dwójkowo równa się … . Wynik 0110 + 0111 = … , czyli … dziesiętnie.',
            expected: 'S: 0, 1, 1, 0 (XOR); C: 0, 0, 0, 1 (AND). „C S” dwójkowo: 0, 1, 1, 2 – zawsze tyle, ile A + B. 0110 + 0111 = 1101, czyli 6 + 7 = 13.',
            source: 'Bawaria – LehrplanPLUS, Realschule, informatyka, moduł 2.7.1 (dodawanie dwóch liczb dwójkowych jako przykład; tabela wartości, schemat, wzór); Anglia – lekcje Oak National Academy: „Binary addition” (1 + 1 = 10, 1 + 1 + 1 = 11), „Boolean logic and logic gates” (wejścia jak liczenie dwójkowe), „Logic gate simulator software” (jedno wejście – kilka bramek); OGL v3.0. Pomysł z rolami „bramek” i liczby – nasze.',
          },
          {
            id: 'l37qad', kind: 'projekt', title: 'Światło na schodach – zaprojektuj układ XOR', time: '1–2 × 45 minut', adult: true,
            intro: 'Zaprojektuj oświetlenie schodów: lampę da się włączyć i zgasić zarówno na dole, jak i na górze. Tak jak bawarski uczeń: schemat, tabela wartości, wzór – a potem model na papierze, w symulatorze albo na baterii.',
            safety: [
              'Nigdy nie otwieraj domowych przełączników, gniazdek ani puszek – instalacja w domu ma 230 V.',
              'Model buduj tylko na baterii płaskiej 4,5 V z małą żarówką z zestawu do elektroniki, z dorosłym. Nie łącz przewodem biegunów baterii (zwarcie – bateria się grzeje).',
              'Zanim podłączysz baterię, sprawdź połączenia dwa razy. Coś się grzeje albo czuć spaleniznę – od razu odłącz baterię i powiedz dorosłemu.',
              'Przy ekranie (symulator) rób przerwy.',
            ],
            needs: ['kartka, ołówek, linijka', 'do modelu (opcjonalnie): bateria płaska 4,5 V, żarówka z oprawką, dwa przełączniki schodowe z zestawu (przełączne, z trzema zaciskami – zwykły wyłącznik z dwoma zaciskami się nie nada), ok. 5 przewodów z krokodylkami'],
            constraints: [
              'dwa przełączniki: jeden „na dole”, jeden „na górze”; jedna lampa',
              'każdy przełącznik ma zmieniać stan lampy, niezależnie od tego, jak stoi drugi',
              'tylko papier, symulator albo bateria 4,5 V – bez 230 V',
            ],
            steps: [
              'Tabela wartości: wypisz 4 ustawienia (00, 01, 10, 11) i dla każdego – czy lampa świeci. Ustal, że przy 0 i 0 jest ciemno.',
              'Porównaj z tabelami bramek z działu: która ma taką tabelę? Zapisz wzór: lampa = A … B.',
              'Schemat: narysuj dwa przełączniki schodowe – każdy ma trzy zaciski: środkowy i dwa boczne – i dwa przewody między ich bocznymi zaciskami (podpowiedź: krok 3 lekcji). Razem z przewodami do baterii i lampy wyjdzie ok. 5 przewodów. Zaznacz, przy której pozycji przełącznik łączy się z którym przewodem.',
              'Sprawdź na schemacie wszystkie 4 ustawienia – palcem prześledź drogę prądu od baterii do lampy.',
              'Model (opcjonalnie): w symulatorze albo z dorosłym na baterii 4,5 V. Sprawdź, czy wynik zgadza się z tabelą.',
              'Dla chętnych: jak dobudować trzeci przełącznik w połowie schodów? Zapisz pomysł w tabeli z 8 wierszami.',
            ],
            criteria: [
              'Tabela wartości ma wszystkie 4 ustawienia.',
              'Rozpoznałem bramkę i zapisałem wzór (lampa = A XOR B).',
              'Na schemacie widać, przy której pozycji przełącznik łączy się z którym przewodem.',
              'Sprawdziłem wszystkie 4 ustawienia na schemacie albo w modelu – każdy przełącznik zmienia stan lampy.',
              'Wyjaśniłem, dlaczego OR tu się nie nadaje.',
            ],
            table: { cols: ['Dół A, góra B', 'Przewiduję: lampa', 'Sprawdziłem: lampa'], rows: ['0, 0', '0, 1', '1, 0', '1, 1'] },
            conclusion: 'Lampa świeci, gdy … . To bramka … . OR się nie nadaje, bo … .',
            source: 'Bawaria – LehrplanPLUS: Realschule, informatyka, moduł 2.7.1 („Lichtschaltung im Treppenhaus als Antivalenzschaltung” – przykład; schemat, tabela wartości, wzór; zestaw techniczny albo symulator) i gimnazjum, „Natur und Technik” kl. 7 („Bedienung einer Lampe mit zwei Wechselschaltern” – przykład; projekt w programie, budowa pod kierunkiem, zasady bezpieczeństwa). Model połączeń, kryteria i pytanie o trzeci przełącznik – nasze.',
          },
        ],
        materials: [
          { type: 'lekcja', title: 'System dwójkowy – dodawanie pisemne z przeniesieniem (z filmem)', url: 'https://zpe.gov.pl/a/system-dwojkowy/DPZ2QDGvX', source: 'ZPE (zpe.gov.pl) – informatyka, szkoła podstawowa IV–VIII', license: 'tekst CC BY 3.0, część ilustracji CC BY-SA 3.0', note: 'Zapis liczb w systemie dwójkowym, zasady dodawania bitów (1 + 1 = 10), przykład z przeniesieniem i film o dodawaniu dwóch liczb dwójkowych; dalej także mnożenie, odejmowanie i kod ASCII.', expect: 'Dodawanie liczb binarnych' },
          { type: 'film', title: 'Bramki logiczne, czyli nowe znaczenie zera i jedynki', url: 'https://zpe.gov.pl/a/film/DHmpR2IAQ', source: 'ZPE (zpe.gov.pl) – informatyka; w nawigacji: liceum i technikum, a scenariusz lekcji podaje kl. 7–8 (materiał rozszerzający)', license: 'film CC BY 4.0', note: 'Film o bramkach logicznych – także XOR, NAND i NOR – oraz o sygnale wejściowym i wyjściowym (według opisu lekcji na stronie). Dla kl. 7–8 przeznacza go tylko scenariusz dla nauczyciela.', expect: 'Bramki logiczne' },
          { type: 'lekcja', title: 'Binary addition – dodawanie dwójkowe', url: 'https://www.thenational.academy/pupils/lessons/binary-addition/overview', lang: 'en', source: 'Oak National Academy (Anglia, publiczna platforma lekcji) – Computer Science, Year 10', license: 'OGL v3.0', note: 'Lekcja z filmem i quizem: liczenie dwójkowe i dodawanie – 0 + 1, 1 + 1 = 10, 1 + 1 + 1 = 11. Dla 14–16 lat, po angielsku.', expect: 'Binary addition' },
          { type: 'lekcja', title: 'Numbers in binary – zamiana liczb', url: 'https://www.thenational.academy/pupils/lessons/numbers-in-binary/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Computing, Year 8', license: 'OGL v3.0', note: 'Zamiana liczb dziesiętnych na dwójkowe i odwrotnie (wagi pozycji: potęgi 2). Po angielsku.', expect: 'Numbers in binary' },
          { type: 'lekcja', title: 'Introduction to logic circuit design – łączenie bramek', url: 'https://www.thenational.academy/pupils/lessons/introduction-to-logic-circuits-23930/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Computer Science, Year 10', license: 'OGL v3.0', note: 'Łączenie bramek w układy i tabele prawdy; w quizie także XOR („either A or B, but not both”). Dla 14–16 lat, po angielsku.', expect: 'Introduction to logic circuit design' },
          { type: 'dokument', forParent: true, title: 'Bawaria: plan informatyki w Realschule – moduł 2.7.1 „Logische Schaltungen” (XOR, światło na schodach, dodawanie liczb dwójkowych)', url: 'https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/it', lang: 'de', source: 'ISB – LehrplanPLUS', expect: 'Antivalenzschaltung' },
          { type: 'dokument', forParent: true, title: 'Bawaria: profil przedmiotu – moduły obowiązkowe i do wyboru („2.7.1 Logische Schaltungen (Wahlmodul)”)', url: 'https://www.lehrplanplus.bayern.de/fachprofil/realschule/it', lang: 'de', source: 'ISB – LehrplanPLUS', expect: 'Wahlmodul' },
          { type: 'dokument', forParent: true, title: 'Bawaria: gimnazjum, „Natur und Technik” kl. 7 – lampa z dwoma przełącznikami (Lernbereich 1.3)', url: 'https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/7/nt_gym', lang: 'de', source: 'ISB – LehrplanPLUS', expect: 'Wechselschaltern' },
          { type: 'dokument', forParent: true, title: 'Program Anglii: computing, key stage 3 – działania na liczbach dwójkowych (s. 2), nawiasy jako przykłady (s. 1)', url: 'https://assets.publishing.service.gov.uk/media/5a7cb981ed915d682236228d/SECONDARY_national_curriculum_-_Computing.pdf', lang: 'en', source: 'Department for Education (gov.uk)' },
          { type: 'dokument', forParent: true, title: 'Lekcja Oak „Binary addition” dla nauczyciela – typowy błąd: wynik 1 + 1 zapisany jako 2, a nie 10', url: 'https://www.thenational.academy/teachers/programmes/computing-secondary-ks4-gcse-ocr/units/representation-of-numbers/lessons/binary-addition', lang: 'en', source: 'Oak National Academy (strona dla nauczyciela)', license: 'OGL v3.0', expect: 'default to decimal' },
          { type: 'dokument', forParent: true, title: 'Lekcja Oak „Logic gate simulator software” dla nauczyciela – mit: jedno wejście tylko do jednej bramki', url: 'https://www.thenational.academy/teachers/programmes/computing-secondary-ks4-gcse-aqa/units/boolean-logic/lessons/logic-gate-simulator-software', lang: 'en', source: 'Oak National Academy (strona dla nauczyciela)', license: 'OGL v3.0', expect: 'Each input can only be wired to one logic gate' },
          { type: 'dokument', forParent: true, title: 'ZPE: scenariusz lekcji „Bramki logiczne” dla kl. 7–8 – „materiał rozszerzający treści podstawy programowej”', url: 'https://zpe.gov.pl/a/dla-nauczyciela/Ds9iOSK1C', source: 'ZPE (zpe.gov.pl)', expect: 'Materiał rozszerzający' },
          { type: 'strona', forParent: true, title: 'Podstawy elektroniki (ZPE, informatyka w liceum): tabele prawdy XOR, NAND, NOR i symbole bramek', url: 'https://zpe.gov.pl/a/przeczytaj/Dc58jQH9h', source: 'ZPE (zpe.gov.pl) – liceum, informatyka', license: 'CC BY-SA 3.0', note: 'Dla starszych i chętnych: bramki NOT, AND, NAND, OR, NOR, XOR, XNOR z tabelami prawdy (stan wysoki – 1, niski – 0).', expect: 'różnicy symetrycznej' },
        ],
        flashcards: [
          ['System dwójkowy', 'tylko cyfry 0 i 1; wagi pozycji od prawej: 1, 2, 4, 8, 16…'],
          ['1101₂', '8 + 4 + 0 + 1 = 13'],
          ['Dodawanie bitów', '0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10, 1 + 1 + 1 = 11'],
          ['Przeniesienie', 'w kolumnie wyszło 10 albo 11: piszesz ostatnią cyfrę, a 1 dodajesz do następnej kolumny w lewo'],
          ['Dodawanie pisemne dwójkowe', 'od prawej kolumny, jak w słupku – tylko „dwa” to już 10'],
          ['Sprawdzenie wyniku', 'zamień na dziesiętne: 0110₂ + 0111₂ = 1101₂, czyli 6 + 7 = 13'],
          ['Jedna cyfra więcej', '1111₂ + 0001₂ = 10000₂ (15 + 1 = 16)'],
          ['XOR („albo”)', '1, gdy wejścia są różne; 0, gdy takie same'],
          ['XOR a OR', 'różnią się tylko przy 1 i 1: XOR daje 0, OR daje 1'],
          ['Antivalenz', 'tak nazywa XOR bawarski program informatyki'],
          ['Światło na schodach', 'każdy z dwóch przełączników zmienia stan lampy – to XOR (przykład z programu Bawarii)'],
          ['Półsumator', 'dodaje dwa bity: S = A XOR B, C = A AND B'],
          ['S i C', 'S – cyfra sumy (piszesz pod kreską), C – przeniesienie (do następnej kolumny)'],
          ['1 + 1 w półsumatorze', 'S = 0, C = 1 – razem 10₂'],
          ['Jedno wejście, dwie bramki', 'w półsumatorze A i B idą naraz do XOR i do AND'],
          ['Dlaczego „pół”?', 'półsumator nie dodaje przeniesienia z poprzedniej kolumny'],
          ['Sumator pełny', 'dodaje trzy bity: A, B i przeniesienie, np. 1 + 1 + 1 = 11'],
          ['Łańcuch sumatorów', 'przeniesienie z jednej kolumny wchodzi do sumatora następnej – tak dodaje się liczby wielocyfrowe'],
          ['NAND', 'AND, a potem NOT: 0 tylko przy dwóch jedynkach'],
          ['NOR', 'OR, a potem NOT: 1 tylko przy dwóch zerach'],
          ['Bawaria – moduł 2.7.1', 'Realschule, informatyka: „Logische Schaltungen”, moduł do wyboru, ok. 14 godzin'],
          ['Anglia – key stage 3', '11–14 lat: proste działania na liczbach dwójkowych, np. dodawanie (przykład w nawiasie)'],
        ],
        questions: [
          // 🇵🇱 przypomnienie (informatyka, kl. VII–VIII)
          { id: 'uisktp', q: '🇵🇱 Przypomnienie (informatyka, kl. VII–VIII)\nIle to jest 1101₂ w systemie dziesiętnym?', options: ['13', '11', '14', '1101'], answer: 0, explain: 'Wagi od prawej: 1, 2, 4, 8. Jedynki stoją na pozycjach 8, 4 i 1: 8 + 4 + 1 = 13.' },
          { id: 'd8re5u', q: '🇵🇱 Przypomnienie (informatyka, kl. VII–VIII)\nIle jest warta jedynka w liczbie dwójkowej 100₂?', options: ['4', '100', '2'], answer: 0, explain: 'Trzecia pozycja od prawej ma w systemie dwójkowym wagę 4 (1, 2, 4). 100₂ = 4.',
            why: { options: ['wagi pozycji to kolejne potęgi 2: 1, 2, 4', 'wagi są takie jak w dziesiętnym: 1, 10, 100', 'jedynka jest warta 1, gdziekolwiek stoi'], answer: 0, myth: 1, explain: 'W systemie dwójkowym każda pozycja jest warta dwa razy więcej niż poprzednia: 1, 2, 4, 8… Mylenie tego z wagami dziesiętnymi lekcja Oak dla Year 8 opisuje jako częsty błąd.', optionExplain: ['', 'Wagi 1, 10, 100 ma system dziesiętny. W dwójkowym są to 1, 2, 4.', 'Wartość cyfry zależy od pozycji – to system pozycyjny.'] } },
          // 1. dodawanie pisemne
          { id: '07c736', q: 'Jak zapiszesz wynik 1 + 1 w systemie dwójkowym?', options: ['10', '2', '11'], answer: 0, explain: 'Wynik to dwa, ale w systemie dwójkowym nie ma cyfry 2. Dwa zapisuje się jako 10₂: piszesz 0 i przenosisz 1.',
            why: { options: ['są tylko cyfry 0 i 1, więc dwa to 10', 'wynik zapisuje się cyfrą 2, jak w dziesiętnym', 'wynik z dwóch cyfr to zawsze 11'], answer: 0, myth: 1, explain: 'Dodawanie dwójkowe działa jak pisemne, ale „dwa” zapisuje się już z przeniesieniem: 10. Zapisywanie wyniku jak w dziesiętnym (1 + 1 = 2) lekcja Oak „Binary addition” wymienia jako częsty błąd.', optionExplain: ['', 'Wynik to rzeczywiście dwa, ale cyfry 2 w systemie dwójkowym nie ma – dwa zapisujesz jako 10.', '11₂ to trzy – tyle daje 1 + 1 + 1.'] } },
          { id: 'bxhizm', q: 'Jak zapiszesz wynik 1 + 1 + 1 w systemie dwójkowym?', options: ['11', '10', '3', '111'], answer: 0, explain: '1 + 1 + 1 = 3, a 3 = 2 + 1 = 11₂. W kolumnie piszesz 1 i przenosisz 1.' },
          { id: 'jin5r7', q: 'Dodaj dwójkowo: 0101 + 0011', options: ['1000', '0111', '0110', '1010'], answer: 0, explain: 'Od prawej: 1 + 1 = 10 (piszę 0, przenoszę 1); 0 + 1 + 1 = 10 (0, przenoszę 1); 1 + 0 + 1 = 10 (0, przenoszę 1); 0 + 0 + 1 = 1. Wynik 1000₂ = 8, a 5 + 3 = 8 ✅.' },
          { id: 'kysw5f', q: 'Dodaj dwójkowo: 0110 + 0111', options: ['1101', '1111', '1011', '1100'], answer: 0, explain: 'Od prawej: 0 + 1 = 1; 1 + 1 = 10 (piszę 0, przenoszę 1); 1 + 1 + 1 = 11 (piszę 1, przenoszę 1); 0 + 0 + 1 = 1. Wynik 1101₂ = 13, a 6 + 7 = 13 ✅.' },
          { id: '23v8id', q: 'Dodaj dwójkowo: 1011 + 0110', options: ['10001', '10011', '11001', '1111'], answer: 0, explain: '1011₂ = 11, 0110₂ = 6, razem 17. 17 = 16 + 1 = 10001₂ – wynik ma o jedną cyfrę więcej niż składniki.' },
          { id: '28zzfe', q: 'W kolumnie dodajesz 1 + 1 i jeszcze 1 z przeniesienia. Co piszesz pod kreską i co przenosisz?', options: ['piszę 1 i przenoszę 1', 'piszę 0 i przenoszę 1', 'piszę 1 i nic nie przenoszę', 'piszę 0 i nic nie przenoszę'], answer: 0, explain: '1 + 1 + 1 = 11₂. Ostatnią cyfrę (1) piszesz, a pierwszą (1) przenosisz do następnej kolumny.' },
          { id: '3z1mp7', q: 'Prawda czy fałsz?\nSuma dwóch liczb dwójkowych 4-cyfrowych może mieć 5 cyfr.', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. Np. 1111₂ + 0001₂ = 10000₂ (15 + 1 = 16) – przeniesienie z ostatniej kolumny tworzy piątą cyfrę.' },
          { id: 'vr3w71', q: 'Od której kolumny zaczynasz dodawanie pisemne liczb dwójkowych?', options: ['od prawej, z najmniejszą wagą', 'od lewej, z największą wagą', 'od kolumny z największą liczbą jedynek'], answer: 0, explain: 'Jak w dodawaniu pisemnym: od prawej, bo przeniesienie idzie zawsze do następnej kolumny w lewo (ZPE: zaczynamy od najmniej znaczących bitów).' },
          { id: 'o9lrsc', q: 'Prawda czy fałsz?\n101₂ + 101₂ = 1010₂', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. 101₂ = 5, a 5 + 5 = 10 = 8 + 2 = 1010₂. Wynik sprawdzisz najszybciej, zamieniając liczby na dziesiętne.' },
          // 2. XOR
          { id: 'r6m1p3', q: 'Co pokaże wyjście bramki XOR?',
            svg: `<svg viewBox="0 0 400 130" role="img" aria-label="Bramka XOR z napisem XOR w symbolu. Na wejściu A jest 1, na wejściu B jest 1. Wyjście oznaczone znakiem zapytania">
              <g class="ln sw" fill="none"><path d="M70,45 H170"/><path d="M70,85 H170"/><path d="M230,65 H330"/><path d="M152,35 Q167,65 152,95"/></g>
              <path d="M160,35 Q175,65 160,95 Q205,95 230,65 Q205,35 160,35 z" class="f5 s5 sw"/>
              <text x="194" y="70" class="tx-s" text-anchor="middle">XOR</text>
              <g class="tx-b"><text x="10" y="51">A = 1</text><text x="10" y="91">B = 1</text><text x="340" y="71">?</text></g>
            </svg>`,
            options: ['0', '1'], noShuffle: true, answer: 0, explain: 'XOR daje 1 tylko wtedy, gdy wejścia są różne. Tu oba to 1 – są takie same, więc wyjście to 0.',
            why: { options: ['XOR daje 1 tylko przy różnych wejściach', 'XOR działa jak OR – wystarczy jedna 1', 'XOR daje 1 tylko przy dwóch jedynkach'], answer: 0, explain: 'XOR to „albo – albo”: jedno albo drugie, ale nie oba. Od OR różni się właśnie przy dwóch jedynkach.', optionExplain: ['', 'Tak działa OR. XOR przy dwóch jedynkach daje 0.', 'Tak działa AND.'] } },
          { id: '40vxka', q: 'Kiedy bramka XOR daje na wyjściu 1?', options: ['gdy wejścia są różne', 'gdy oba wejścia to 1', 'gdy oba wejścia to 0', 'gdy choć jedno to 1'], answer: 0, explain: 'XOR („albo”): 0 i 1 albo 1 i 0 daje 1, a dwa takie same wejścia – 0.' },
          { id: 'f4zp46', q: 'Które zdanie najlepiej opisuje XOR?', options: ['jedno albo drugie, ale nie oba', 'jedno i drugie naraz', 'jedno, drugie albo oba', 'odwrotnie niż to, co jest na wejściu'], answer: 0, explain: 'XOR to alternatywa rozłączna – „albo” (ZPE), po angielsku „either A or B, but not both” (Oak). „I” to AND, „lub” to OR, odwracanie – NOT.' },
          // 3. światło na schodach
          { id: '64l9l9', q: 'Światło na schodach (XOR) świeci. Ktoś na górze przełącza swój przełącznik. Co się stanie?', options: ['lampa zgaśnie', 'lampa dalej świeci', 'lampa zamruga'], answer: 0, explain: 'W XOR zmiana jednego wejścia zawsze zmienia wynik. Lampa świeciła (1), więc teraz zgaśnie (0).',
            why: { options: ['zmiana jednego wejścia XOR zmienia wynik', 'lampa gaśnie dopiero po przełączeniu obu', 'górny przełącznik może tylko włączać'], answer: 0, explain: 'Dlatego światło schodowe da się zgasić z każdego końca – bawarski program podaje je jako przykład układu XOR (Antivalenz).', optionExplain: ['', 'Wystarczy jeden przełącznik – każdy zmienia stan lampy.', 'Oba przełączniki mogą i włączać, i wyłączać.'] } },
          { id: 'nvpad3', q: 'Gdyby światło na schodach działało jak OR: włączasz je na dole (A = 1), idziesz na górę i przełączasz B na 1. Co się stanie?', options: ['lampa dalej świeci – nie zgasisz jej z góry', 'lampa zgaśnie, tak samo jak przy XOR', 'lampa zgaśnie, ale tylko na chwilę'], answer: 0, explain: '1 OR 1 = 1 – lampa świeci dalej. Żeby zgasić, trzeba by wrócić na dół. Dlatego tu potrzebny jest XOR: 1 XOR 1 = 0.' },
          { id: 'pli5l0', q: 'Prawda czy fałsz?\nŻeby zobaczyć, jak działa światło na schodach, wolno samemu rozkręcić przełącznik w domu.', options: TF, noShuffle: true, answer: 1, explain: 'Fałsz. Domowa instalacja ma 230 V – porażenie może zaszkodzić zdrowiu, a nawet życiu. Układ rysuj, symuluj albo zbuduj z dorosłym na baterii 4,5 V.' },
          { id: 'j042lq', q: 'Bawarski program informatyki podaje światło na klatce schodowej jako przykład układu…', options: ['XOR (Antivalenz)', 'AND (UND, „i”)', 'NOT (NICHT, „nie”)'], answer: 0, explain: 'W LehrplanPLUS (Realschule, moduł 2.7.1): „Lichtschaltung im Treppenhaus als Antivalenzschaltung” – oświetlenie klatki schodowej jako układ XOR.' },
          // 4. półsumator
          { id: 'a822u0', q: 'Półsumator dodaje dwa bity A i B. Która bramka daje cyfrę sumy S?', options: ['XOR', 'AND', 'OR', 'NOT'], answer: 0, explain: 'Cyfra sumy: 0 + 0 → 0, 0 + 1 → 1, 1 + 0 → 1, 1 + 1 → 0 (bo 10). To tabela XOR.' },
          { id: 'r88hyf', q: 'Która bramka w półsumatorze daje przeniesienie C?', options: ['AND', 'XOR', 'OR', 'NOT'], answer: 0, explain: 'Przeniesienie jest tylko przy 1 + 1 = 10. Jedynka tylko przy dwóch jedynkach – to AND.' },
          { id: '2ot0pu', q: 'Półsumator: A = 1, B = 1. Ile wynoszą S i C?', options: ['S = 0, C = 1', 'S = 1, C = 0', 'S = 1, C = 1', 'S = 0, C = 0'], answer: 0, explain: '1 + 1 = 10₂: cyfra sumy S = 0 (1 XOR 1 = 0), przeniesienie C = 1 (1 AND 1 = 1).' },
          { id: '7jq3bc', q: 'Półsumator: A = 0, B = 1. Ile wynoszą S i C?', options: ['S = 1, C = 0', 'S = 0, C = 1', 'S = 1, C = 1', 'S = 0, C = 0'], answer: 0, explain: '0 + 1 = 1: S = 0 XOR 1 = 1, C = 0 AND 1 = 0 – bez przeniesienia.' },
          { id: 'b5ev37', q: 'Na wejściach półsumatora: A = 1, B = 0. Co pokażą wyjścia?',
            svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Półsumator: wejście A równe 1 prowadzi do bramki XOR i do bramki AND. Wejście B równe 0 też prowadzi do obu bramek. Wyjście bramki XOR to S, wyjście bramki AND to C. Oba wyjścia oznaczone znakiem zapytania">
              <g class="ln sw" fill="none">
                <path d="M60,45 H170"/><path d="M110,45 V130 H170"/>
                <path d="M60,150 H170"/><path d="M80,150 V65 H104 A6,6 0 0 1 116,65 H170"/>
                <path d="M235,55 H320"/><path d="M210,140 H320"/>
              </g>
              <g class="ln"><circle cx="110" cy="45" r="4"/><circle cx="80" cy="150" r="4"/></g>
              <path d="M152,30 Q167,55 152,80" class="ln sw" fill="none"/>
              <path d="M160,30 Q175,55 160,80 Q210,80 235,55 Q210,30 160,30 z" class="f5 s5 sw"/>
              <path d="M170,120 H190 A20,20 0 0 1 190,160 H170 z" class="f1 s1 sw"/>
              <g class="tx-s" text-anchor="middle"><text x="198" y="60">XOR</text><text x="188" y="145">AND</text></g>
              <g class="tx-b"><text x="6" y="51">A = 1</text><text x="6" y="156">B = 0</text><text x="328" y="61">S = ?</text><text x="328" y="146">C = ?</text></g>
            </svg>`,
            options: ['S = 1, C = 0', 'S = 0, C = 1', 'S = 0, C = 0', 'S = 1, C = 1'], answer: 0, explain: 'S = 1 XOR 0 = 1 (wejścia różne), C = 1 AND 0 = 0. Razem 01₂ = 1, a 1 + 0 = 1 ✅.' },
          { id: 'id47r3', q: 'W półsumatorze wejście A jest podłączone…', options: ['do obu bramek: XOR i AND', 'tylko do bramki XOR, nie do AND', 'tylko do bramki AND, nie do XOR'], answer: 0, explain: 'Obie bramki potrzebują obu bitów: XOR liczy cyfrę sumy, AND – przeniesienie. Dlatego A (i B też) rozgałęzia się do dwóch bramek.',
            why: { options: ['jedno wejście może zasilać kilka bramek', 'każde wejście idzie tylko do jednej bramki', 'AND odczyta A z wyjścia bramki XOR'], answer: 0, myth: 1, explain: 'Przewód z wejścia można rozgałęzić do wielu bramek. Przekonanie, że każde wejście idzie tylko do jednej bramki, lekcja Oak „Logic gate simulator software” opisuje jako częsty błąd.', optionExplain: ['', 'To częsty błąd – jedno wejście można podłączyć do wielu bramek.', 'Z wyjścia XOR nie da się odczytać samego A – XOR miesza A z B.'] } },
          { id: 'tozdgr', q: 'Dlaczego półsumator to tylko „pół” sumatora?', options: ['nie dodaje przeniesienia z poprzedniej kolumny', 'dodaje tylko połowę bitów każdej liczby', 'daje samą cyfrę sumy, bez przeniesienia'], answer: 0, explain: 'Półsumator ma dwa wejścia (A i B) i daje S oraz C. Przeniesienia z poprzedniej kolumny nie ma gdzie podłączyć – to robi sumator pełny z trzema wejściami.' },
          // 5. sumator pełny i łańcuch
          { id: '4n2fvi', q: 'Sumator pełny ma trzy wejścia: A, B i przeniesienie. A = 1, B = 1, przeniesienie = 1. Co daje?', options: ['S = 1, C = 1', 'S = 0, C = 1', 'S = 1, C = 0', 'S = 0, C = 0'], answer: 0, explain: '1 + 1 + 1 = 3 = 11₂: cyfra sumy S = 1 i przeniesienie C = 1.' },
          { id: 'lg1s55', q: 'Komputer dodaje dwie liczby 4-cyfrowe łańcuchem sumatorów. Dokąd trafia przeniesienie C z kolumny wag 1?', options: ['do sumatora kolumny wag 2', 'do sumatora kolumny wag 8', 'nigdzie – po prostu znika'], answer: 0, explain: 'Jak w słupku: przeniesienie idzie do następnej kolumny w lewo, czyli do kolumny wag 2. Tak sumatory łączą się w łańcuch.' },
          // 6. NAND i NOR
          { id: '0v8tq4', q: 'NAND to AND, a potem NOT. Co daje NAND dla A = 1, B = 1?', options: ['0', '1'], noShuffle: true, answer: 0, explain: '1 AND 1 = 1, a NOT 1 = 0. NAND daje 0 tylko przy dwóch jedynkach.' },
          { id: 'd008al', q: 'Kiedy bramka NOR daje na wyjściu 1?', options: ['gdy oba wejścia to 0', 'gdy oba wejścia to 1', 'gdy wejścia są różne', 'gdy choć jedno to 1'], answer: 0, explain: 'NOR = OR, a potem NOT. OR daje 0 tylko przy dwóch zerach – więc NOR daje 1 tylko przy dwóch zerach.' },
          // jak uczą w innych krajach
          { id: 'e9iu04', q: 'W programie Anglii (key stage 3) dodawanie dwójkowe stoi w nawiasie „for example”. Co to znaczy?', options: ['to przykład – szkoła nie musi go uczyć', 'to wymaganie, które musi spełnić każda szkoła', 'to temat dodatkowy na konkurs'], answer: 0, explain: 'Program mówi: szkoły nie muszą uczyć treści z nawiasów kwadratowych – to przykłady. Wymagane są „proste działania na liczbach dwójkowych”.' },
          { id: 'awpu5v', q: 'Moduł „Logische Schaltungen” (układy logiczne) w bawarskiej Realschule jest…', options: ['modułem do wyboru (ok. 14 godzin)', 'obowiązkowym modułem dla wszystkich', 'kursem tylko dla nauczycieli'], answer: 0, explain: 'W profilu przedmiotu stoi: „2.7.1 Logische Schaltungen (Wahlmodul)” – moduł do wyboru; szkoła decyduje, czy go oferuje. Obowiązkowy jest kurs początkowy z systemem dwójkowym.' },
        ],
      },
    ],
  });
})();
