/* Matematyka – dział XV „Symetrie” (podstawa programowa: Dz.U. 2024 poz. 996, matematyka kl. VII–VIII, dz. XV).
 * Pozostałe działy matematyki klasy 8 są w ścieżce egzaminacyjnej (kafelek „Matematyka” – js/dane/kl8/egzamin.js).
 * Dział XV jest w podstawie, ale nie ma go na egzaminie – podstawa pozwala go zrealizować po egzaminie
 * („Warunki i sposób realizacji”), dlatego jest tu jako osobny przedmiot. Przedmiot-odnośnik nie może mieć działów. */
window.SUBJECTS.push({
  id: 'symetrie',
  name: 'Matematyka – symetrie',
  icon: '🦋',
  color: '#6a5acd',
  topics: [
    {
      id: 'symetralna',
      name: 'Symetralna odcinka',
      basis: 'Dz.U. 2024 poz. 996, matematyka kl. VII–VIII, dz. XV „Symetrie”, wym. 1–2 (rozpoznaje symetralną odcinka; zna i stosuje w zadaniach jej podstawowe własności). Dział XV może zostać zrealizowany po egzaminie ósmoklasisty – nie ma go na egzaminie.',
      theory: `
        <h3>Co to jest symetralna odcinka</h3>
        <p><b>Symetralna odcinka AB</b> to prosta, która jest <b>prostopadła</b> do odcinka AB i przechodzi przez jego <b>środek</b>.</p>
        <ul>
          <li>Dzieli odcinek na dwie równe części: jeśli AB = 10 cm, to od środka do każdego końca jest 5 cm.</li>
          <li>Przecina odcinek pod kątem <b>prostym</b> (90°).</li>
          <li>Gdy złożysz kartkę wzdłuż symetralnej, punkt A trafi dokładnie na punkt B.</li>
        </ul>
        <h3>Najważniejsza własność</h3>
        <p>Każdy punkt P leżący na symetralnej odcinka AB jest <b>jednakowo odległy od końców odcinka</b>: <b>PA = PB</b>.</p>
        <p>Działa to też w drugą stronę: jeśli punkt jest tak samo odległy od A i od B, to leży na symetralnej odcinka AB.</p>
        <h3>Jak to wykorzystać w zadaniach</h3>
        <table>
          <tr><th>Wiesz, że…</th><th>Więc…</th></tr>
          <tr><td>P leży na symetralnej AB</td><td>PA = PB, czyli trójkąt ABP jest <b>równoramienny</b> i ma równe kąty przy A i B</td></tr>
          <tr><td>w trójkącie AC = BC</td><td>wierzchołek C leży na symetralnej podstawy AB</td></tr>
          <tr><td>symetralna przecina AB w punkcie S</td><td>AS = SB = AB : 2, a PS to wysokość trójkąta ABP (przyda się twierdzenie Pitagorasa)</td></tr>
        </table>
        <p><b>Przykład.</b> Wierzchołek A rombu ABCD leży na symetralnej boku BC. Wtedy AB = AC. W rombie AB = BC, więc AB = BC = AC – trójkąt ABC jest równoboczny. Kąt ABC ma 60°, a kąty rombu mają 60° i 120°.</p>
        <div class="tip">💡 Symetralna = <b>prostopadła + przez środek</b>. Widzisz punkt na symetralnej – szukaj trójkąta równoramiennego.</div>`,
      flashcards: [
        ['Symetralna odcinka', 'Prosta prostopadła do odcinka, przechodząca przez jego środek'],
        ['Pod jakim kątem symetralna przecina odcinek?', 'Pod kątem prostym (90°)'],
        ['Własność punktów symetralnej odcinka AB', 'Każdy jej punkt P jest jednakowo odległy od A i B: PA = PB'],
        ['Punkt Q, dla którego QA = QB', 'Leży na symetralnej odcinka AB'],
        ['P leży na symetralnej AB – jaki jest trójkąt ABP?', 'Równoramienny (PA = PB), kąty przy A i B są równe'],
        ['Trójkąt ABC, w którym AC = BC', 'Wierzchołek C leży na symetralnej podstawy AB'],
        ['AB = 12 cm, S – punkt przecięcia AB z symetralną. Ile ma AS?', '6 cm'],
        ['Wierzchołek A rombu ABCD leży na symetralnej boku BC – kąty rombu', '60° i 120° (trójkąt ABC jest równoboczny)'],
        ['Złożenie kartki wzdłuż symetralnej AB', 'Punkt A pokrywa się z punktem B'],
      ],
      questions: [
        { id: '2zgscb', q: 'Symetralna odcinka AB to prosta, która…', options: ['jest równoległa do AB', 'jest prostopadła do AB i przechodzi przez jego środek', 'przechodzi przez punkt A prostopadle do AB', 'dzieli kąt na dwa równe kąty'], answer: 1, explain: 'Symetralna musi spełniać oba warunki naraz: prostopadła do odcinka i przechodzi przez jego środek.' },
        { id: 'd8jjlk', q: 'Punkt P leży na symetralnej odcinka AB i PA = 7 cm. Ile wynosi PB?', options: ['3,5 cm', '14 cm', '7 cm', 'nie da się tego obliczyć'], answer: 2, explain: 'Każdy punkt symetralnej jest jednakowo odległy od końców odcinka, więc PB = PA = 7 cm.' },
        { id: 'zirhuc', q: 'Odcinek AB ma 10 cm. Symetralna przecina go w punkcie S. Ile wynosi AS?', options: ['5 cm', '10 cm', '2,5 cm', '20 cm'], answer: 0, explain: 'Symetralna przechodzi przez środek odcinka: AS = 10 : 2 = 5 cm.' },
        { id: 'trfwpw', q: 'Pod jakim kątem symetralna odcinka przecina ten odcinek?', options: ['45°', '60°', '180°', '90°'], answer: 3, explain: 'Symetralna jest prostopadła do odcinka – przecina go pod kątem prostym.' },
        { id: 'q836bd', q: 'Punkt Q jest oddalony od punktu A o 4 cm, a od punktu B o 6 cm. Czy Q leży na symetralnej odcinka AB?', options: ['tak, zawsze', 'nie, bo QA ≠ QB', 'tak, jeśli AB = 10 cm', 'nie da się tego stwierdzić'], answer: 1, explain: 'Na symetralnej leżą tylko punkty jednakowo odległe od A i B. Tu 4 cm ≠ 6 cm.' },
        { id: 'wggb5l', q: 'Punkt P leży na symetralnej odcinka AB, PA = 6 cm, AB = 8 cm. Jaki obwód ma trójkąt ABP?', options: ['14 cm', '20 cm', '18 cm', '24 cm'], answer: 1, explain: 'PB = PA = 6 cm, więc obwód = 6 + 6 + 8 = 20 cm.' },
        { id: 'q2k4fv', q: 'W trójkącie ABC boki AC i BC są równe. Na czym na pewno leży wierzchołek C?', options: ['na symetralnej odcinka AB', 'na odcinku AB', 'na prostej równoległej do AB przez punkt A', 'na symetralnej odcinka AC'], answer: 0, explain: 'C jest jednakowo odległy od A i od B, więc leży na symetralnej odcinka AB.' },
        { id: 'gbz2c3', q: 'Wierzchołek A rombu ABCD leży na symetralnej boku BC. Ile stopni ma kąt ABC?', options: ['90°', '120°', '45°', '60°'], answer: 3, explain: 'A leży na symetralnej BC, więc AB = AC. W rombie AB = BC. Zatem AB = BC = AC – trójkąt ABC jest równoboczny, a kąt ABC ma 60°.' },
        { id: '5513b2', q: 'Punkt P leży na symetralnej odcinka AB. Kąt PAB ma 50°. Ile stopni ma kąt PBA?', options: ['50°', '80°', '40°', '130°'], answer: 0, explain: 'PA = PB, więc trójkąt ABP jest równoramienny i kąty przy podstawie AB są równe: 50°.' },
        { id: 'z5ik6w', q: 'Punkt P leży na symetralnej odcinka AB, PA = 5 cm, AB = 6 cm. Jaka jest odległość punktu P od odcinka AB?', options: ['3 cm', '5 cm', '4 cm', '√61 cm'], answer: 2, explain: 'Symetralna przecina AB w środku S, AS = 3 cm, a PS ⊥ AB. Z twierdzenia Pitagorasa: PS² = 5² − 3² = 16, PS = 4 cm.' },
        {
          id: 'eoo99h',
          q: 'Odcinek AB podzielono na 6 równych części. Która prosta jest symetralną odcinka AB?',
          svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Odcinek AB podzielony kreskami na 6 równych części. Prosta a – pionowa przez środek odcinka. Prosta b – pionowa przez punkt na czwartej kresce. Prosta c – ukośna przez środek odcinka">
      <line x1="60" y1="110" x2="300" y2="110" class="ln sw"/>
      <line x1="100" y1="104" x2="100" y2="116" class="ln"/>
      <line x1="140" y1="104" x2="140" y2="116" class="ln"/>
      <line x1="180" y1="104" x2="180" y2="116" class="ln"/>
      <line x1="220" y1="104" x2="220" y2="116" class="ln"/>
      <line x1="260" y1="104" x2="260" y2="116" class="ln"/>
      <circle cx="60" cy="110" r="4" class="t1"/>
      <circle cx="300" cy="110" r="4" class="t1"/>
      <text x="48" y="136" class="tx-b">A</text>
      <text x="302" y="136" class="tx-b">B</text>
      <line x1="180" y1="20" x2="180" y2="190" class="s1 sw"/>
      <text x="188" y="34" class="tx-b t1">a</text>
      <line x1="220" y1="20" x2="220" y2="190" class="s2 sw"/>
      <text x="228" y="34" class="tx-b t2">b</text>
      <line x1="130" y1="20" x2="230" y2="190" class="s3 sw"/>
      <text x="112" y="34" class="tx-b t3">c</text>
    </svg>`,
          options: ['prosta a', 'prosta b', 'prosta c', 'żadna z nich'],
          answer: 0,
          explain: 'Prosta a jest prostopadła do AB i przechodzi przez jego środek (po 3 częściach z każdej strony). Prosta b nie przechodzi przez środek, a prosta c nie jest prostopadła.',
        },
        { id: 'khf33x', q: 'Prawda czy fałsz?\nKażdy punkt leżący na symetralnej odcinka AB jest tak samo odległy od punktu A jak od punktu B.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – to najważniejsza własność symetralnej.' },
        { id: 'h8jrj2', q: 'Prawda czy fałsz?\nSymetralna odcinka jest do niego równoległa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Symetralna jest prostopadła do odcinka, a nie równoległa.' },
      ],
      tasks: [
        {
          id: 'h62p8f',
          points: 2,
          q: 'Wierzchołek D rombu ABCD leży na symetralnej boku AB. Oblicz miary kątów tego rombu.',
          steps: [
            'D leży na symetralnej odcinka AB, więc DA = DB.',
            'W rombie wszystkie boki są równe, więc DA = AB.',
            'Zatem DA = DB = AB – trójkąt ABD jest równoboczny i kąt DAB ma 60°.',
            'Kąty rombu przy sąsiednich wierzchołkach dają razem 180°, więc kąt ABC = 180° − 60° = 120°. Kąty przeciwległe są równe: C = 60°, D = 120°.',
          ],
          answer: 'Kąty rombu: A = 60°, B = 120°, C = 60°, D = 120°.',
          scoring: [
            '1 pkt – zauważenie, że trójkąt ABD jest równoboczny (DA = DB = AB)',
            '2 pkt – poprawne miary wszystkich kątów rombu: 60°, 120°, 60°, 120°',
          ],
        },
        {
          id: '8qzmb9',
          points: 3,
          q: 'Punkt P leży na symetralnej odcinka AB. AB = 10 cm, PA = 13 cm. Oblicz pole trójkąta ABP.',
          steps: [
            'Symetralna przecina AB w jego środku S, więc AS = 10 : 2 = 5 cm, a PS ⊥ AB – PS jest wysokością trójkąta ABP.',
            'Trójkąt ASP jest prostokątny: PS² = PA² − AS² = 169 − 25 = 144, więc PS = 12 cm.',
            'Pole = ½ · AB · PS = ½ · 10 · 12 = 60 cm².',
            'Sprawdzenie: 5² + 12² = 25 + 144 = 169 = 13².',
          ],
          answer: '60 cm²',
          scoring: [
            '1 pkt – zauważenie, że PS jest wysokością i AS = 5 cm',
            '2 pkt – obliczenie wysokości PS = 12 cm',
            '3 pkt – poprawne pole: 60 cm²',
          ],
        },
      ],
    },
    {
      id: 'dwusieczna',
      name: 'Dwusieczna kąta',
      basis: 'Dz.U. 2024 poz. 996, matematyka kl. VII–VIII, dz. XV „Symetrie”, wym. 1–2 (rozpoznaje dwusieczną kąta; zna i stosuje w zadaniach jej podstawowe własności). Dział XV może zostać zrealizowany po egzaminie ósmoklasisty – nie ma go na egzaminie.',
      theory: `
        <h3>Co to jest dwusieczna kąta</h3>
        <p><b>Dwusieczna kąta</b> to półprosta, która wychodzi z wierzchołka kąta i dzieli go na <b>dwa równe kąty</b>.</p>
        <ul>
          <li>Kąt 70° → dwusieczna dzieli go na 35° i 35°.</li>
          <li>Kąt prosty (90°) → dwa kąty po 45°.</li>
          <li>Gdy złożysz kartkę wzdłuż dwusiecznej, jedno ramię kąta trafi na drugie – dwusieczna jest <b>osią symetrii kąta</b>.</li>
        </ul>
        <h3>Najważniejsza własność</h3>
        <p>Każdy punkt dwusiecznej jest <b>jednakowo odległy od obu ramion kąta</b>.</p>
        <p>Odległość punktu od ramienia mierzymy wzdłuż odcinka <b>prostopadłego</b> do ramienia (najkrótsza droga). Działa to też w drugą stronę: punkt leżący wewnątrz kąta, jednakowo odległy od obu ramion, leży na dwusiecznej.</p>
        <h3>Dwusieczne w zadaniach</h3>
        <table>
          <tr><th>Sytuacja</th><th>Co z tego wynika</th></tr>
          <tr><td>dwusieczna kąta α</td><td>powstają dwa kąty po α : 2</td></tr>
          <tr><td>dwusieczne dwóch kątów przyległych</td><td>tworzą kąt prosty, bo α : 2 + β : 2 = (α + β) : 2 = 180° : 2 = 90°</td></tr>
          <tr><td>dwusieczne kątów A i B trójkąta przecinają się w punkcie S</td><td>w trójkącie ABS: kąt ASB = 180° − A : 2 − B : 2</td></tr>
          <tr><td>trójkąt równoramienny, AC = BC</td><td>dwusieczna kąta C leży na symetralnej podstawy AB</td></tr>
        </table>
        <div class="tip">💡 Dwu-sieczna – „sieka” kąt na <b>dwie</b> równe części. Symetralna dotyczy <b>odcinka</b>, dwusieczna – <b>kąta</b>.</div>`,
      flashcards: [
        ['Dwusieczna kąta', 'Półprosta wychodząca z wierzchołka, dzieląca kąt na dwa równe kąty'],
        ['Własność punktów dwusiecznej', 'Każdy jej punkt jest jednakowo odległy od obu ramion kąta'],
        ['Jak mierzymy odległość punktu od ramienia kąta?', 'Wzdłuż odcinka prostopadłego do ramienia'],
        ['Dwusieczna kąta prostego', 'Dzieli go na dwa kąty po 45°'],
        ['Kąt między dwusiecznymi kątów przyległych', '90° – są prostopadłe'],
        ['Oś symetrii kąta', 'Jego dwusieczna'],
        ['Dwusieczne kątów A i B trójkąta przecinają się w S – kąt ASB', '180° − A : 2 − B : 2'],
        ['Trójkąt równoramienny (AC = BC) – dwusieczna kąta C', 'Leży na symetralnej podstawy AB'],
        ['Symetralna czy dwusieczna – co dotyczy odcinka?', 'Symetralna (dwusieczna dotyczy kąta)'],
      ],
      questions: [
        { id: '7v0nrg', q: 'Dwusieczna kąta dzieli ten kąt na…', options: ['dwa kąty proste', 'dwa równe kąty', 'trzy równe kąty', 'kąt ostry i kąt rozwarty'], answer: 1, explain: 'Dwusieczna dzieli kąt na dwie równe części.' },
        { id: 'lr64x5', q: 'Kąt ma 84°. Jakie kąty powstaną po poprowadzeniu jego dwusiecznej?', options: ['42° i 42°', '84° i 84°', '21° i 63°', '48° i 48°'], answer: 0, explain: '84° : 2 = 42°.' },
        { id: 'xm8y74', q: 'Jaki kąt tworzy dwusieczna kąta prostego z jego ramieniem?', options: ['90°', '30°', '60°', '45°'], answer: 3, explain: '90° : 2 = 45°.' },
        { id: '14uyxq', q: 'Punkt P leży na dwusiecznej kąta. Jego odległość od jednego ramienia wynosi 3 cm. Jaka jest jego odległość od drugiego ramienia?', options: ['6 cm', '1,5 cm', '3 cm', 'nie da się tego ustalić'], answer: 2, explain: 'Każdy punkt dwusiecznej jest jednakowo odległy od obu ramion kąta.' },
        { id: 'sok9nr', q: 'Jak mierzymy odległość punktu od ramienia kąta?', options: ['wzdłuż odcinka prostopadłego do ramienia', 'wzdłuż odcinka do wierzchołka kąta', 'wzdłuż dowolnego odcinka do ramienia', 'wzdłuż dwusiecznej'], answer: 0, explain: 'Odległość punktu od prostej (ramienia) to długość odcinka prostopadłego – najkrótszej drogi.' },
        { id: '97o389', q: 'Półprosta OC jest dwusieczną kąta AOB. Kąt AOC ma 35°. Ile ma kąt AOB?', options: ['17,5°', '35°', '70°', '145°'], answer: 2, explain: 'Dwusieczna dzieli kąt na połowy, więc AOB = 2 · 35° = 70°.' },
        { id: 'dhazmp', q: 'Kąty przyległe mają 130° i 50°. Jaki kąt tworzą ich dwusieczne?', options: ['80°', '90°', '65°', '40°'], answer: 1, explain: '130° : 2 + 50° : 2 = 65° + 25° = 90°. Dwusieczne kątów przyległych są zawsze prostopadłe.' },
        { id: 'gqxoc6', q: 'W trójkącie ABC kąt A ma 60°, a kąt B – 80°. Na jakie kąty dwusieczna dzieli kąt C?', options: ['40° i 40°', '30° i 30°', '20° i 20°', '70° i 70°'], answer: 2, explain: 'C = 180° − 60° − 80° = 40°, a 40° : 2 = 20°.' },
        { id: 'ki6y33', q: 'Która prosta jest osią symetrii kąta?', options: ['jedno z jego ramion', 'prosta prostopadła do ramienia', 'jego dwusieczna', 'kąt nie ma osi symetrii'], answer: 2, explain: 'Po złożeniu wzdłuż dwusiecznej ramiona kąta się pokrywają.' },
        {
          id: 'trxmf0',
          q: 'Punkt P leży na dwusiecznej kąta o wierzchołku O. Ile wynosi x?',
          svg: `<svg viewBox="0 0 360 230" role="img" aria-label="Kąt o wierzchołku O, przerywana dwusieczna, na niej punkt P. Odcinek prostopadły z P do dolnego ramienia ma 3 cm, odcinek prostopadły z P do górnego ramienia ma długość x">
      <line x1="40" y1="200" x2="340" y2="200" class="ln sw"/>
      <line x1="40" y1="200" x2="142" y2="23" class="ln sw"/>
      <line x1="40" y1="200" x2="282" y2="60" class="ln dash"/>
      <line x1="213" y1="100" x2="213" y2="200" class="s2 sw"/>
      <line x1="213" y1="100" x2="127" y2="50" class="s2 sw"/>
      <rect x="213" y="188" width="12" height="12" class="ln-thin"/>
      <circle cx="213" cy="100" r="5" class="t1"/>
      <text x="22" y="222" class="tx-b">O</text>
      <text x="222" y="96" class="tx-b">P</text>
      <text x="221" y="160" class="tx t2">3 cm</text>
      <text x="175" y="64" class="tx-b t2">x</text>
    </svg>`,
          options: ['3 cm', '6 cm', '1,5 cm', 'nie da się obliczyć'],
          answer: 0,
          explain: 'Oba odcinki są prostopadłe do ramion, więc to odległości punktu P od ramion. Punkt dwusiecznej jest jednakowo odległy od obu ramion: x = 3 cm.',
        },
        { id: 'yny5u6', q: 'Prawda czy fałsz?\nW trójkącie równoramiennym ABC, w którym AC = BC, dwusieczna kąta C leży na symetralnej podstawy AB.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Trójkąt równoramienny ma oś symetrii przechodzącą przez C – jest nią jednocześnie dwusieczna kąta C i symetralna podstawy.' },
        { id: '42ojfh', q: 'Prawda czy fałsz?\nDwusieczna kąta zawsze jest prostopadła do jednego z jego ramion.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Np. dwusieczna kąta 60° tworzy z każdym ramieniem kąt 30°.' },
      ],
      tasks: [
        {
          id: 'z8bwm2',
          points: 2,
          q: 'W trójkącie ABC kąt A ma 50°, a kąt B ma 70°. Dwusieczne kątów A i B przecinają się w punkcie S. Oblicz miarę kąta ASB.',
          steps: [
            'Dwusieczna dzieli kąt A na połowy: kąt SAB = 50° : 2 = 25°.',
            'Tak samo kąt SBA = 70° : 2 = 35°.',
            'Suma kątów trójkąta ABS to 180°: kąt ASB = 180° − 25° − 35° = 120°.',
          ],
          answer: 'Kąt ASB ma 120°.',
          scoring: [
            '1 pkt – obliczenie połówek kątów: 25° i 35°',
            '2 pkt – poprawna miara kąta ASB: 120°',
          ],
        },
        {
          id: 'spku7x',
          points: 2,
          q: 'Kąty AOB i BOC są przyległe (razem tworzą kąt półpełny). Wykaż, że dwusieczne tych kątów są prostopadłe.',
          steps: [
            'Oznacz kąt AOB = α i kąt BOC = β. Kąty przyległe dają razem kąt półpełny: α + β = 180°.',
            'Dwusieczne tworzą z ramieniem OB kąty α : 2 i β : 2 (po obu stronach OB).',
            'Kąt między dwusiecznymi = α : 2 + β : 2 = (α + β) : 2 = 180° : 2 = 90°.',
            'Kąt między dwusiecznymi jest prosty, więc są one prostopadłe.',
          ],
          answer: 'Kąt między dwusiecznymi to (α + β) : 2 = 180° : 2 = 90°, więc dwusieczne są prostopadłe.',
          scoring: [
            '1 pkt – zapisanie, że kąt między dwusiecznymi to α : 2 + β : 2, oraz α + β = 180°',
            '2 pkt – pełne uzasadnienie: (α + β) : 2 = 90°',
          ],
        },
      ],
    },
    {
      id: 'symetria-osiowa',
      name: 'Figury osiowosymetryczne',
      basis: 'Dz.U. 2024 poz. 996, matematyka kl. VII–VIII, dz. XV „Symetrie”, wym. 3 (rozpoznaje figury osiowosymetryczne, wskazuje ich osie symetrii, uzupełnia figurę do figury osiowosymetrycznej przy danej osi i części figury). Nawiązanie do kl. IV–VI: osie symetrii figur. Dział XV może zostać zrealizowany po egzaminie ósmoklasisty.',
      theory: `
        <h3>Figura osiowosymetryczna</h3>
        <p>Figura jest <b>osiowosymetryczna</b>, gdy istnieje prosta – <b>oś symetrii</b> – taka, że po złożeniu kartki wzdłuż tej prostej obie części figury dokładnie się pokrywają.</p>
        <h3>Punkt symetryczny względem prostej</h3>
        <p>Punkty A i A′ są symetryczne względem prostej k, gdy odcinek AA′ jest <b>prostopadły</b> do k, a k przechodzi przez jego <b>środek</b>. Innymi słowy: <b>k jest symetralną odcinka AA′</b>. Punkt leżący na osi jest symetryczny sam do siebie.</p>
        <h3>Ile osi symetrii?</h3>
        <table>
          <tr><th>Figura</th><th>Osie symetrii</th></tr>
          <tr><td>odcinek</td><td>2 (symetralna i prosta, w której leży odcinek)</td></tr>
          <tr><td>kąt</td><td>1 (dwusieczna)</td></tr>
          <tr><td>trójkąt różnoboczny</td><td>0</td></tr>
          <tr><td>trójkąt równoramienny (nie równoboczny)</td><td>1</td></tr>
          <tr><td>trójkąt równoboczny</td><td>3</td></tr>
          <tr><td>kwadrat</td><td>4</td></tr>
          <tr><td>prostokąt (nie kwadrat)</td><td>2 – przez środki przeciwległych boków</td></tr>
          <tr><td>romb (nie kwadrat)</td><td>2 – zawierają przekątne</td></tr>
          <tr><td>równoległobok (nie prostokąt i nie romb)</td><td>0</td></tr>
          <tr><td>trapez równoramienny</td><td>1</td></tr>
          <tr><td>sześciokąt foremny</td><td>6</td></tr>
          <tr><td>okrąg, koło</td><td>nieskończenie wiele (każda prosta przez środek)</td></tr>
        </table>
        <h3>Jak uzupełnić figurę na kratce</h3>
        <ol>
          <li>Dla każdego wierzchołka policz kratki do osi (prostopadle do niej).</li>
          <li>Odmierz tyle samo kratek po drugiej stronie osi – to obraz wierzchołka.</li>
          <li>Połącz obrazy w tej samej kolejności co wierzchołki.</li>
        </ol>
        <div class="tip">💡 Uwaga na pułapkę: przekątne prostokąta <b>nie są</b> jego osiami symetrii (chyba że to kwadrat). Złóż kartkę po przekątnej – rogi się nie pokryją.</div>`,
      flashcards: [
        ['Figura osiowosymetryczna', 'Figura, którą da się złożyć wzdłuż prostej (osi) tak, że obie części się pokrywają'],
        ['A i A′ symetryczne względem prostej k', 'k jest symetralną odcinka AA′ (AA′ ⊥ k, k przechodzi przez środek AA′)'],
        ['Osie symetrii kwadratu', '4'],
        ['Osie symetrii prostokąta, który nie jest kwadratem', '2 – przez środki przeciwległych boków'],
        ['Osie symetrii rombu, który nie jest kwadratem', '2 – zawierają przekątne'],
        ['Osie symetrii trójkąta równobocznego', '3'],
        ['Osie symetrii trapezu równoramiennego', '1'],
        ['Osie symetrii odcinka', '2: symetralna i prosta zawierająca odcinek'],
        ['Osie symetrii koła', 'Nieskończenie wiele – każda prosta przez środek'],
        ['Figury bez osi symetrii', 'Np. trójkąt różnoboczny, równoległobok, który nie jest prostokątem ani rombem'],
      ],
      questions: [
        { id: '4cmv9d', q: 'Ile osi symetrii ma sześciokąt foremny?', options: ['3', '6', '2', '12'], answer: 1, explain: 'Sześciokąt foremny ma 6 osi: 3 przez przeciwległe wierzchołki i 3 przez środki przeciwległych boków.' },
        { id: 'l86qk9', q: 'Która figura ma dokładnie jedną oś symetrii?', options: ['prostokąt', 'kwadrat', 'trapez równoramienny', 'koło'], answer: 2, explain: 'Trapez równoramienny ma jedną oś – przez środki obu podstaw.' },
        { id: 'y36gei', q: 'Ile osi symetrii ma odcinek?', options: ['0', '1', '2', 'nieskończenie wiele'], answer: 2, explain: 'Symetralna odcinka i prosta, w której leży odcinek.' },
        { id: '259nzy', q: 'Punkty A i A′ są symetryczne względem prostej k. Czym jest prosta k dla odcinka AA′?', options: ['jego symetralną', 'prostą do niego równoległą', 'prostą przechodzącą przez punkt A', 'jego przedłużeniem'], answer: 0, explain: 'Oś symetrii jest prostopadła do AA′ i przechodzi przez jego środek – to symetralna odcinka AA′.' },
        { id: 'rdtqt8', q: 'Punkt A leży 4 cm od prostej k. A′ to punkt symetryczny do A względem k. Ile wynosi AA′?', options: ['4 cm', '2 cm', '16 cm', '8 cm'], answer: 3, explain: 'A′ leży 4 cm po drugiej stronie prostej, więc AA′ = 4 + 4 = 8 cm.' },
        { id: 'w67iqz', q: 'Która figura NIE ma osi symetrii?', options: ['trójkąt różnoboczny', 'trójkąt równoramienny', 'romb', 'koło'], answer: 0, explain: 'Trójkąt o trzech różnych bokach nie ma osi symetrii.' },
        { id: '85ukfx', q: 'Ile osi symetrii ma koło?', options: ['1', '2', '4', 'nieskończenie wiele'], answer: 3, explain: 'Każda prosta przechodząca przez środek koła jest jego osią symetrii.' },
        { id: '50e6yz', q: 'Która prosta jest osią symetrii trójkąta równoramiennego ABC, w którym AC = BC?', options: ['prosta AB', 'symetralna podstawy AB', 'prosta AC', 'prosta równoległa do AB przez C'], answer: 1, explain: 'Oś przechodzi przez wierzchołek C i środek podstawy AB, prostopadle do niej – to symetralna AB.' },
        { id: 'mpjo2i', q: 'Ile osi symetrii ma trójkąt równoboczny?', options: ['1', '3', '6', '0'], answer: 1, explain: 'Każda oś przechodzi przez wierzchołek i środek przeciwległego boku – są trzy.' },
        {
          id: 'k5oswo',
          q: 'Prosta k jest osią symetrii. Który punkt jest symetryczny do punktu A względem prostej k?',
          svg: `<svg viewBox="0 0 360 195" role="img" aria-label="Kratka. Pionowa prosta k. Punkt A trzy kratki na lewo od k. Po prawej stronie punkty: B trzy kratki na prawo od k w tym samym wierszu, C dwie kratki na prawo w tym samym wierszu, D trzy kratki na prawo, ale wiersz niżej">
      <g class="ln-thin">
        <line x1="30" y1="20" x2="330" y2="20"/><line x1="30" y1="50" x2="330" y2="50"/><line x1="30" y1="80" x2="330" y2="80"/>
        <line x1="30" y1="110" x2="330" y2="110"/><line x1="30" y1="140" x2="330" y2="140"/><line x1="30" y1="170" x2="330" y2="170"/>
        <line x1="30" y1="20" x2="30" y2="170"/><line x1="60" y1="20" x2="60" y2="170"/><line x1="90" y1="20" x2="90" y2="170"/>
        <line x1="120" y1="20" x2="120" y2="170"/><line x1="150" y1="20" x2="150" y2="170"/><line x1="210" y1="20" x2="210" y2="170"/>
        <line x1="240" y1="20" x2="240" y2="170"/><line x1="270" y1="20" x2="270" y2="170"/><line x1="300" y1="20" x2="300" y2="170"/>
        <line x1="330" y1="20" x2="330" y2="170"/>
      </g>
      <line x1="180" y1="8" x2="180" y2="185" class="s1 sw"/>
      <text x="186" y="18" class="tx-b t1">k</text>
      <circle cx="90" cy="80" r="5" class="t2"/>
      <text x="72" y="72" class="tx-b t2">A</text>
      <circle cx="270" cy="80" r="5" class="t3"/>
      <text x="276" y="72" class="tx-b t3">B</text>
      <circle cx="240" cy="80" r="5" class="t3"/>
      <text x="222" y="72" class="tx-b t3">C</text>
      <circle cx="270" cy="110" r="5" class="t3"/>
      <text x="276" y="132" class="tx-b t3">D</text>
    </svg>`,
          options: ['punkt B', 'punkt C', 'punkt D', 'żaden z nich'],
          answer: 0,
          explain: 'A leży 3 kratki na lewo od osi. Jego obraz musi leżeć w tym samym wierszu (prostopadle do osi) i 3 kratki na prawo – to punkt B.',
        },
        { id: 'noohy3', q: 'Prawda czy fałsz?\nPrzekątne każdego prostokąta są jego osiami symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Prostokąt, który nie jest kwadratem, ma 2 osie – przez środki przeciwległych boków. Złożony po przekątnej nie pokrywa się sam ze sobą.' },
        { id: 'vq7wm6', q: 'Prawda czy fałsz?\nPunkt leżący na osi symetrii jest symetryczny sam do siebie względem tej osi.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Po złożeniu kartki wzdłuż osi taki punkt zostaje na miejscu.' },
      ],
      tasks: [
        {
          id: 'rl9w5p',
          points: 2,
          q: 'Trójkąt ABC jest równoramienny: AC = BC. Podstawa AB ma 6 cm, a odcinek CD, gdzie D jest środkiem AB, ma 4 cm. Wskaż oś symetrii trójkąta i oblicz jego obwód.',
          steps: [
            'Oś symetrii trójkąta równoramiennego to prosta CD – symetralna podstawy AB. Jest prostopadła do AB, więc CD jest wysokością.',
            'AD = 6 : 2 = 3 cm. W trójkącie prostokątnym ADC: AC² = 3² + 4² = 9 + 16 = 25, więc AC = 5 cm.',
            'BC = AC = 5 cm. Obwód = 6 + 5 + 5 = 16 cm.',
          ],
          answer: 'Oś symetrii: prosta CD (symetralna podstawy AB). Obwód: 16 cm.',
          scoring: [
            '1 pkt – wskazanie osi (prosta CD) i obliczenie ramienia AC = 5 cm',
            '2 pkt – poprawny obwód: 16 cm',
          ],
        },
      ],
    },
    {
      id: 'symetria-srodkowa',
      name: 'Figury środkowosymetryczne',
      basis: 'Dz.U. 2024 poz. 996, matematyka kl. VII–VIII, dz. XV „Symetrie”, wym. 4 (rozpoznaje figury środkowosymetryczne i wskazuje ich środki symetrii). Dział XV może zostać zrealizowany po egzaminie ósmoklasisty.',
      theory: `
        <h3>Punkt symetryczny względem punktu</h3>
        <p>Punkty A i A′ są symetryczne względem punktu O, gdy <b>O jest środkiem odcinka AA′</b>. A′ leży na przedłużeniu odcinka AO, w tej samej odległości od O co A.</p>
        <h3>Figura środkowosymetryczna</h3>
        <p>Figura jest <b>środkowosymetryczna</b>, gdy istnieje punkt O – <b>środek symetrii</b> – taki, że punkt symetryczny do każdego punktu figury względem O też należy do figury.</p>
        <p>Prosty test: <b>obróć figurę o 180°</b> wokół punktu O (czyli „do góry nogami”). Jeśli wygląda tak samo i leży w tym samym miejscu – O jest środkiem symetrii.</p>
        <h3>Gdzie jest środek symetrii?</h3>
        <table>
          <tr><th>Figura</th><th>Środek symetrii</th></tr>
          <tr><td>odcinek</td><td>środek odcinka</td></tr>
          <tr><td>równoległobok (także prostokąt, romb, kwadrat)</td><td>punkt przecięcia przekątnych</td></tr>
          <tr><td>okrąg, koło</td><td>środek okręgu (koła)</td></tr>
          <tr><td>sześciokąt foremny</td><td>punkt przecięcia najdłuższych przekątnych</td></tr>
          <tr><td>każdy trójkąt, trapez, który nie jest równoległobokiem, pięciokąt foremny</td><td><b>brak</b></td></tr>
        </table>
        <h3>Osie i środek – porównanie</h3>
        <table>
          <tr><th></th><th>ma środek symetrii</th><th>nie ma środka symetrii</th></tr>
          <tr><td><b>ma oś symetrii</b></td><td>kwadrat, prostokąt, romb, koło, odcinek</td><td>trójkąt równoboczny, trójkąt równoramienny, trapez równoramienny</td></tr>
          <tr><td><b>nie ma osi symetrii</b></td><td>równoległobok, który nie jest prostokątem ani rombem</td><td>trójkąt różnoboczny</td></tr>
        </table>
        <div class="tip">💡 Środek symetrii = środek „obrotu do góry nogami”. Trójkąt odwrócony o 180° zawsze „patrzy” wierzchołkiem w drugą stronę – dlatego żaden trójkąt nie ma środka symetrii.</div>`,
      flashcards: [
        ['A i A′ symetryczne względem punktu O', 'O jest środkiem odcinka AA′'],
        ['Figura środkowosymetryczna', 'Figura, która po obrocie o 180° wokół pewnego punktu (środka symetrii) pokrywa się sama ze sobą'],
        ['Środek symetrii równoległoboku', 'Punkt przecięcia przekątnych'],
        ['Środek symetrii odcinka', 'Środek odcinka'],
        ['Środek symetrii koła', 'Środek koła'],
        ['Czy trójkąt może mieć środek symetrii?', 'Nie – żaden trójkąt nie jest środkowosymetryczny'],
        ['Figura z osią, ale bez środka symetrii', 'Np. trójkąt równoboczny, trapez równoramienny'],
        ['Figura ze środkiem, ale bez osi symetrii', 'Równoległobok, który nie jest prostokątem ani rombem'],
        ['AO = 5 cm, A′ symetryczny do A względem O. Ile ma AA′?', '10 cm'],
      ],
      questions: [
        { id: 'ldcbzq', q: 'Punkt A′ jest symetryczny do punktu A względem punktu O. AO = 5 cm. Ile wynosi AA′?', options: ['5 cm', '2,5 cm', '10 cm', '25 cm'], answer: 2, explain: 'O jest środkiem odcinka AA′, więc AA′ = 2 · 5 = 10 cm.' },
        { id: 'td18gc', q: 'Gdzie leży środek symetrii równoległoboku?', options: ['w jednym z wierzchołków', 'w punkcie przecięcia przekątnych', 'w środku najdłuższego boku', 'równoległobok nie ma środka symetrii'], answer: 1, explain: 'Przekątne równoległoboku dzielą się na połowy – ich punkt przecięcia jest środkiem symetrii.' },
        { id: 'ssuq00', q: 'Która figura jest środkowosymetryczna?', options: ['trójkąt równoboczny', 'trapez równoramienny, który nie jest równoległobokiem', 'pięciokąt foremny', 'równoległobok'], answer: 3, explain: 'Każdy równoległobok ma środek symetrii. Trójkąty, takie trapezy i pięciokąt foremny – nie.' },
        { id: 'y1fyil', q: 'Która figura NIE ma środka symetrii?', options: ['kwadrat', 'trójkąt równoboczny', 'koło', 'odcinek'], answer: 1, explain: 'Trójkąt równoboczny ma 3 osie symetrii, ale nie ma środka symetrii – po obrocie o 180° „patrzy” w drugą stronę.' },
        { id: 'uukt0d', q: 'O ile stopni trzeba obrócić figurę środkowosymetryczną wokół jej środka symetrii, żeby pokryła się sama ze sobą?', options: ['o 180°', 'o 90°', 'o 45°', 'o 360°, mniej nie wystarczy'], answer: 0, explain: 'Symetria środkowa to to samo co obrót o 180° wokół środka symetrii.' },
        { id: 'adaz6w', q: 'Która figura ma oś symetrii, ale nie ma środka symetrii?', options: ['prostokąt', 'koło', 'trójkąt równoramienny', 'kwadrat'], answer: 2, explain: 'Trójkąt równoramienny ma 1 oś symetrii, ale żaden trójkąt nie ma środka symetrii.' },
        { id: 'n622my', q: 'Która figura ma środek symetrii, ale nie ma żadnej osi symetrii?', options: ['romb', 'równoległobok, który nie jest prostokątem ani rombem', 'trójkąt różnoboczny', 'trapez równoramienny'], answer: 1, explain: 'Taki równoległobok ma środek symetrii (przecięcie przekątnych), ale po złożeniu wzdłuż żadnej prostej się nie pokrywa.' },
        { id: 'yunynz', q: 'Gdzie leży środek symetrii odcinka AB?', options: ['w punkcie A', 'w punkcie B', 'w środku odcinka AB', 'poza odcinkiem'], answer: 2, explain: 'Obrót o 180° wokół środka odcinka zamienia końce miejscami – odcinek się pokrywa.' },
        { id: '9prewk', q: 'Która figura ma zarówno osie symetrii, jak i środek symetrii?', options: ['prostokąt', 'trójkąt równoboczny', 'trapez równoramienny', 'trójkąt prostokątny'], answer: 0, explain: 'Prostokąt ma 2 osie symetrii i środek symetrii w punkcie przecięcia przekątnych.' },
        {
          id: 'o484j6',
          q: 'Który punkt jest symetryczny do punktu A względem punktu O?',
          svg: `<svg viewBox="0 0 360 195" role="img" aria-label="Kratka. Punkt A, a dwie kratki w prawo i jedną w górę od niego punkt O. Punkty do wyboru: B dwie kratki w prawo i jedną w górę od O, C dwie kratki w prawo od O w poziomie A, D trzy kratki w prawo i jedną w górę od O">
      <g class="ln-thin">
        <line x1="30" y1="20" x2="330" y2="20"/><line x1="30" y1="50" x2="330" y2="50"/><line x1="30" y1="80" x2="330" y2="80"/>
        <line x1="30" y1="110" x2="330" y2="110"/><line x1="30" y1="140" x2="330" y2="140"/><line x1="30" y1="170" x2="330" y2="170"/>
        <line x1="30" y1="20" x2="30" y2="170"/><line x1="60" y1="20" x2="60" y2="170"/><line x1="90" y1="20" x2="90" y2="170"/>
        <line x1="120" y1="20" x2="120" y2="170"/><line x1="150" y1="20" x2="150" y2="170"/><line x1="180" y1="20" x2="180" y2="170"/>
        <line x1="210" y1="20" x2="210" y2="170"/><line x1="240" y1="20" x2="240" y2="170"/><line x1="270" y1="20" x2="270" y2="170"/>
        <line x1="300" y1="20" x2="300" y2="170"/><line x1="330" y1="20" x2="330" y2="170"/>
      </g>
      <circle cx="90" cy="140" r="5" class="t2"/>
      <text x="70" y="162" class="tx-b t2">A</text>
      <circle cx="150" cy="110" r="5" class="t1"/>
      <text x="156" y="104" class="tx-b t1">O</text>
      <circle cx="210" cy="80" r="5" class="t3"/>
      <text x="196" y="70" class="tx-b t3">B</text>
      <circle cx="210" cy="140" r="5" class="t3"/>
      <text x="216" y="162" class="tx-b t3">C</text>
      <circle cx="240" cy="80" r="5" class="t3"/>
      <text x="246" y="70" class="tx-b t3">D</text>
    </svg>`,
          options: ['punkt B', 'punkt C', 'punkt D', 'żaden z nich'],
          answer: 0,
          explain: 'Z A do O idziesz 2 kratki w prawo i 1 w górę. Tyle samo dalej od O – 2 w prawo i 1 w górę – jest punkt B. Wtedy O jest środkiem odcinka AB.',
        },
        { id: 'txnf2b', q: 'Prawda czy fałsz?\nKażdy trójkąt ma środek symetrii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Żaden trójkąt nie jest środkowosymetryczny.' },
        { id: 'q8u6db', q: 'Prawda czy fałsz?\nŚrodkiem symetrii prostokąta jest punkt przecięcia jego przekątnych.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Prostokąt jest równoległobokiem, a środek symetrii równoległoboku to punkt przecięcia przekątnych.' },
      ],
      tasks: [
        {
          id: 'pllawj',
          points: 2,
          q: 'W układzie współrzędnych dane są punkty A = (1, 4) i O = (3, 1). Wyznacz współrzędne punktu A′ symetrycznego do punktu A względem punktu O.',
          steps: [
            'O ma być środkiem odcinka AA′. Z A do O: x zmienia się o 3 − 1 = 2, y o 1 − 4 = −3.',
            'Od O idziemy jeszcze raz o tyle samo: x = 3 + 2 = 5, y = 1 + (−3) = −2.',
            'Sprawdzenie (środek odcinka): ((1 + 5) : 2, (4 + (−2)) : 2) = (3, 1) = O.',
          ],
          answer: 'A′ = (5, −2)',
          scoring: [
            '1 pkt – zauważenie, że O jest środkiem odcinka AA′ (albo poprawna jedna współrzędna)',
            '2 pkt – poprawne współrzędne: A′ = (5, −2)',
          ],
        },
      ],
    },
  ],
});
