/* 🌍 Świat – nauka z innych krajów: informacja i algorytmy.
 * Ścieżka POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Działy ułożone według tematów, nie klas: level (1–3), requires ('przedmiot/dział'), where – gdzie się tego uczą.
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
    ],
  });
})();
