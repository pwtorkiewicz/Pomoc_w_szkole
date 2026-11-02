/* Lekcje – matematyka, dział XV „Symetrie” (klasa 8). Klucz: 'symetrie/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['symetrie/symetralna'] = [
  {
    title: 'Symetralna – prostopadła przez środek',
    svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Odcinek AB, jego środek S i pionowa symetralna przechodząca przez S pod kątem prostym. Obie połowy odcinka oznaczone kreską jako równe">
      <line x1="60" y1="120" x2="300" y2="120" class="ln sw"/>
      <line x1="180" y1="20" x2="180" y2="190" class="s1 sw"/>
      <rect x="180" y="108" width="12" height="12" class="ln-thin"/>
      <line x1="120" y1="112" x2="120" y2="128" class="s2 sw"/>
      <line x1="240" y1="112" x2="240" y2="128" class="s2 sw"/>
      <circle cx="60" cy="120" r="4" class="t1"/>
      <circle cx="300" cy="120" r="4" class="t1"/>
      <circle cx="180" cy="120" r="4" class="t2"/>
      <text x="46" y="146" class="tx-b">A</text>
      <text x="298" y="146" class="tx-b">B</text>
      <text x="160" y="146" class="tx-b t2">S</text>
      <text x="190" y="36" class="tx t1">symetralna</text>
      <text x="40" y="186" class="tx t2">AS = SB</text>
      <text x="230" y="186" class="tx">kąt 90°</text>
    </svg>`,
    text: `<p><b>Symetralna odcinka</b> to prosta, która spełnia <b>dwa warunki naraz</b>: jest prostopadła do odcinka i przechodzi przez jego środek.</p>
      <p>Złóż kartkę wzdłuż symetralnej – koniec A trafi dokładnie na koniec B. Stąd nazwa: symetralna to oś symetrii odcinka.</p>`,
    remember: 'Symetralna AB = prosta <b>⊥ AB</b> i <b>przez środek</b> AB.',
    hook: 'SYMetralna – SYMetria: składasz kartkę, a A „ląduje” na B.',
    check: { q: 'Prosta przechodzi przez środek odcinka AB, ale nie jest do niego prostopadła. Czy to symetralna?', options: ['tak', 'nie', 'tylko gdy AB jest poziomy'], answer: 1, explain: 'Brakuje drugiego warunku – symetralna musi być prostopadła.' },
  },
  {
    title: 'Każdy punkt symetralnej – po równo do A i do B',
    svg: `<svg viewBox="0 0 360 220" role="img" aria-label="Odcinek AB i jego symetralna. Na symetralnej punkty P i Q. Odcinki PA i PB mają po 7 cm, odcinki QA i QB po 5 cm">
      <line x1="60" y1="190" x2="300" y2="190" class="ln sw"/>
      <line x1="180" y1="10" x2="180" y2="210" class="s1"/>
      <line x1="180" y1="60" x2="60" y2="190" class="s3 sw"/>
      <line x1="180" y1="60" x2="300" y2="190" class="s3 sw"/>
      <line x1="180" y1="130" x2="60" y2="190" class="s2 sw"/>
      <line x1="180" y1="130" x2="300" y2="190" class="s2 sw"/>
      <circle cx="180" cy="60" r="5" class="t3"/>
      <circle cx="180" cy="130" r="5" class="t2"/>
      <text x="188" y="56" class="tx-b t3">P</text>
      <text x="188" y="124" class="tx-b t2">Q</text>
      <text x="76" y="118" class="tx t3">7 cm</text>
      <text x="246" y="118" class="tx t3">7 cm</text>
      <text x="112" y="182" class="tx t2">5</text>
      <text x="238" y="182" class="tx t2">5</text>
      <text x="40" y="214" class="tx-b">A</text>
      <text x="304" y="214" class="tx-b">B</text>
    </svg>`,
    text: `<p>Weź dowolny punkt na symetralnej i zmierz jego odległość od A i od B – zawsze wyjdzie <b>tyle samo</b>.</p>
      <p>I odwrotnie: jeśli jakiś punkt jest tak samo daleko od A jak od B, to na pewno leży na symetralnej odcinka AB.</p>`,
    remember: 'P leży na symetralnej AB ⇔ <b>PA = PB</b>.',
    hook: 'Symetralna to „linia sprawiedliwości” – każdy jej punkt ma do A i do B dokładnie tak samo daleko.',
    check: { q: 'Punkt P leży na symetralnej odcinka AB, PB = 9 cm. Ile wynosi PA?', options: ['4,5 cm', '9 cm', '18 cm'], answer: 1, explain: 'Punkty symetralnej są jednakowo odległe od A i B: PA = PB = 9 cm.' },
  },
  {
    title: 'Ukryty trójkąt równoramienny',
    svg: `<svg viewBox="0 0 360 210" role="img" aria-label="Trójkąt ABP, w którym P leży na przerywanej symetralnej odcinka AB. Kąty przy A i B mają po 50 stopni, PA = PB">
      <polygon points="60,180 300,180 180,40" class="f1 s1 sw"/>
      <line x1="180" y1="20" x2="180" y2="205" class="ln dash"/>
      <path d="M90,180 A30,30 0 0,0 79.5,157.2" class="ln s2 sw"/>
      <path d="M270,180 A30,30 0 0,1 280.5,157.2" class="ln s2 sw"/>
      <text x="98" y="172" class="tx t2">50°</text>
      <text x="230" y="172" class="tx t2">50°</text>
      <text x="44" y="200" class="tx-b">A</text>
      <text x="302" y="200" class="tx-b">B</text>
      <text x="172" y="32" class="tx-b">P</text>
      <text x="196" y="60" class="tx t1">PA = PB</text>
    </svg>`,
    text: `<p>Gdy P leży na symetralnej AB, to PA = PB – trójkąt ABP jest <b>równoramienny</b>. A w trójkącie równoramiennym kąty przy podstawie są równe.</p>
      <p>To klucz do wielu zadań: z symetralnej robisz trójkąt równoramienny i liczysz kąty albo – z twierdzeniem Pitagorasa – długości.</p>`,
    remember: 'Punkt na symetralnej AB → trójkąt ABP równoramienny → <b>równe kąty przy A i B</b>.',
    check: { q: 'P leży na symetralnej AB, kąt PAB ma 40°. Ile ma kąt APB?', options: ['40°', '100°', '140°'], answer: 1, explain: 'Kąt PBA też ma 40°, więc APB = 180° − 40° − 40° = 100°.' },
  },
  {
    title: 'Zadanie z rombem – krok po kroku',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Romb ABCD z kątem 60 stopni przy A. Wierzchołek D leży na przerywanej symetralnej boku AB. Trójkąt ABD zaznaczony jako równoboczny">
      <polygon points="60,170 180,170 240,66 120,66" class="f1 s1 sw"/>
      <polygon points="60,170 180,170 120,66" class="f2 s2 sw"/>
      <line x1="120" y1="30" x2="120" y2="200" class="ln dash"/>
      <text x="44" y="192" class="tx-b">A</text>
      <text x="184" y="192" class="tx-b">B</text>
      <text x="246" y="62" class="tx-b">C</text>
      <text x="100" y="60" class="tx-b">D</text>
      <text x="76" y="162" class="tx t2">60°</text>
      <text x="262" y="120" class="tx">kąty rombu:</text>
      <text x="262" y="145" class="tx-b t1">60° i 120°</text>
      <text x="200" y="200" class="tx t2">ABD – równoboczny</text>
    </svg>`,
    text: `<p>Wierzchołek D rombu ABCD leży na symetralnej boku AB. Rozumujesz tak:</p>
      <ul><li>D na symetralnej AB → <b>DA = DB</b>,</li><li>w rombie wszystkie boki są równe → <b>DA = AB</b>,</li><li>więc DA = DB = AB – trójkąt ABD jest <b>równoboczny</b>, kąt A ma 60°.</li></ul>
      <p>Kąty przy sąsiednich wierzchołkach rombu dają 180°, więc pozostałe kąty mają 120°.</p>`,
    remember: 'Szukaj <b>równych odcinków</b>: z symetralnej (PA = PB) i z figury (boki rombu).',
    hook: 'Trzy równe boki = trójkąt równoboczny = trzy kąty po 60°. Zawsze.',
    check: { q: 'Kąt ostry rombu ma 60°. Ile ma jego kąt rozwarty?', options: ['120°', '300°', '90°'], answer: 0, explain: 'Sąsiednie kąty rombu dają 180°: 180° − 60° = 120°.' },
  },
];

window.LESSONS['symetrie/dwusieczna'] = [
  {
    title: 'Dwusieczna – kąt na dwie równe części',
    svg: `<svg viewBox="0 0 380 210" role="img" aria-label="Kąt 70 stopni o wierzchołku O i jego dwusieczna, która dzieli go na dwa kąty po 35 stopni">
      <line x1="40" y1="190" x2="370" y2="190" class="ln sw"/>
      <line x1="40" y1="190" x2="105" y2="11" class="ln sw"/>
      <line x1="40" y1="190" x2="269" y2="29" class="s1 sw"/>
      <path d="M100,190 A60,60 0 0,0 89.1,155.6" class="ln s2 sw"/>
      <path d="M89.1,155.6 A60,60 0 0,0 60.5,133.6" class="ln s3 sw"/>
      <text x="112" y="172" class="tx t2">35°</text>
      <text x="86" y="124" class="tx t3">35°</text>
      <text x="275" y="50" class="tx t1">dwusieczna</text>
      <text x="22" y="205" class="tx-b">O</text>
    </svg>`,
    text: `<p><b>Dwusieczna kąta</b> to półprosta, która wychodzi z wierzchołka i dzieli kąt na <b>dwa równe kąty</b>. Kąt 70° → dwa po 35°.</p>
      <p>Złóż kartkę wzdłuż dwusiecznej – jedno ramię trafi na drugie. Dwusieczna jest więc <b>osią symetrii kąta</b>.</p>`,
    remember: 'Dwusieczna kąta α tworzy dwa kąty po <b>α : 2</b>.',
    hook: 'Dwu-sieczna „sieka” kąt na <b>dwa</b>. Symetralna – odcinek, dwusieczna – kąt.',
    check: { q: 'Dwusieczna dzieli kąt na dwa kąty po 28°. Ile ma cały kąt?', options: ['14°', '56°', '28°'], answer: 1, explain: '2 · 28° = 56°.' },
  },
  {
    title: 'Każdy punkt dwusiecznej – tak samo daleko od ramion',
    svg: `<svg viewBox="0 0 360 230" role="img" aria-label="Kąt o wierzchołku O z przerywaną dwusieczną. Z punktu P na dwusiecznej poprowadzono odcinki prostopadłe do obu ramion, oba oznaczone literą d">
      <line x1="40" y1="200" x2="340" y2="200" class="ln sw"/>
      <line x1="40" y1="200" x2="142" y2="23" class="ln sw"/>
      <line x1="40" y1="200" x2="282" y2="60" class="ln dash"/>
      <line x1="213" y1="100" x2="213" y2="200" class="s2 sw"/>
      <line x1="213" y1="100" x2="127" y2="50" class="s2 sw"/>
      <rect x="213" y="188" width="12" height="12" class="ln-thin"/>
      <circle cx="213" cy="100" r="5" class="t1"/>
      <text x="22" y="222" class="tx-b">O</text>
      <text x="222" y="96" class="tx-b">P</text>
      <text x="222" y="160" class="tx-b t2">d</text>
      <text x="175" y="64" class="tx-b t2">d</text>
    </svg>`,
    text: `<p>Odległość punktu od ramienia mierzymy wzdłuż odcinka <b>prostopadłego</b> do ramienia – to najkrótsza droga.</p>
      <p>Dla każdego punktu dwusiecznej obie te odległości są <b>równe</b>. I odwrotnie: punkt wewnątrz kąta, który jest tak samo daleko od obu ramion, leży na dwusiecznej.</p>`,
    remember: 'Punkt dwusiecznej jest <b>jednakowo odległy od obu ramion</b> kąta.',
    hook: 'Porównaj z symetralną: tam równe odległości od <b>dwóch punktów</b>, tu – od <b>dwóch ramion</b>.',
    check: { q: 'Punkt P leży na dwusiecznej kąta i jest 6 cm od jednego ramienia. Jak daleko jest od drugiego?', options: ['3 cm', '12 cm', '6 cm'], answer: 2, explain: 'Odległości od obu ramion są równe: 6 cm.' },
  },
  {
    title: 'Dwusieczne w trójkącie',
    svg: `<svg viewBox="0 0 380 225" role="img" aria-label="Trójkąt ABC z kątami 50 stopni przy A i 70 stopni przy B. Przerywane dwusieczne kątów A i B przecinają się w punkcie S. Kąt ASB ma 120 stopni">
      <polygon points="40,200 240,200 179.5,33.7" class="f1 s1 sw"/>
      <line x1="40" y1="200" x2="160" y2="144" class="s2 dash"/>
      <line x1="240" y1="200" x2="160" y2="144" class="s2 dash"/>
      <circle cx="160" cy="144" r="4" class="t2"/>
      <text x="152" y="134" class="tx-b t2">S</text>
      <text x="100" y="192" class="tx t2">25°</text>
      <text x="168" y="192" class="tx t2">35°</text>
      <text x="22" y="218" class="tx-b">A</text>
      <text x="244" y="218" class="tx-b">B</text>
      <text x="184" y="28" class="tx-b">C</text>
      <text x="236" y="84" class="tx">A = 50°, B = 70°</text>
      <text x="236" y="110" class="tx t2">∠ASB =</text>
      <text x="236" y="134" class="tx t2">180° − 25° − 35°</text>
      <text x="236" y="160" class="tx-b t2">= 120°</text>
    </svg>`,
    text: `<p>W zadaniach dwusieczne często „siedzą” w trójkącie. Wtedy najpierw <b>dziel kąty na pół</b>, a potem korzystaj z tego, że suma kątów trójkąta to 180°.</p>
      <p>Przykład: A = 50°, B = 70°. Dwusieczne tworzą z bokiem AB kąty 25° i 35°, więc w trójkącie ABS kąt S ma 180° − 25° − 35° = 120°.</p>`,
    remember: 'Najpierw połówki kątów, potem <b>suma kątów trójkąta = 180°</b>.',
    check: { q: 'W trójkącie kąt A ma 80°, a kąt B ma 40°. Dwusieczne kątów A i B przecinają się w S. Ile ma kąt ASB?', options: ['120°', '60°', '100°'], answer: 0, explain: 'Połówki: 40° i 20°. Kąt ASB = 180° − 40° − 20° = 120°.' },
  },
  {
    title: 'Dwusieczne kątów przyległych – zawsze 90°',
    svg: `<svg viewBox="0 0 380 215" role="img" aria-label="Kąty przyległe 130 i 50 stopni o wspólnym wierzchołku O. Dwusieczne dzielą je na kąty po 65 i po 25 stopni i tworzą kąt prosty: 65 + 25 = 90">
      <line x1="20" y1="180" x2="360" y2="180" class="ln sw"/>
      <line x1="190" y1="180" x2="286" y2="65" class="ln sw"/>
      <line x1="190" y1="180" x2="335" y2="112" class="s1 sw"/>
      <line x1="190" y1="180" x2="122" y2="35" class="s3 sw"/>
      <text x="196" y="130" class="tx-b t2">90°</text>
      <text x="270" y="170" class="tx t1">25°</text>
      <text x="282" y="104" class="tx t1">25°</text>
      <text x="198" y="86" class="tx t3">65°</text>
      <text x="100" y="150" class="tx t3">65°</text>
      <text x="184" y="202" class="tx-b">O</text>
      <text x="40" y="208" class="tx">α = 130°</text>
      <text x="270" y="208" class="tx">β = 50°</text>
    </svg>`,
    text: `<p>Kąty przyległe dają razem 180°. Ich dwusieczne tworzą kąt równy połowie jednego plus połowie drugiego:</p>
      <p><b>α : 2 + β : 2 = (α + β) : 2 = 180° : 2 = 90°</b>.</p>
      <p>Tu: 65° + 25° = 90°. Działa dla dowolnych kątów przyległych – to dobry przykład prostego dowodu.</p>`,
    remember: 'Dwusieczne kątów przyległych są <b>prostopadłe</b>.',
    hook: 'Połowa z połowy… nie! <b>Połowa + połowa = połowa ze 180°</b>, czyli 90°.',
    check: { q: 'Kąty przyległe mają 100° i 80°. Jaki kąt tworzą ich dwusieczne?', options: ['80°', '90°', '100°'], answer: 1, explain: '50° + 40° = 90° – jak zawsze dla kątów przyległych.' },
  },
];

window.LESSONS['symetrie/symetria-osiowa'] = [
  {
    title: 'Złóż kartkę – połówki się pokrywają',
    svg: `<svg viewBox="0 0 360 210" role="img" aria-label="Domek złożony z dwóch połówek w różnych kolorach. Pionowa przerywana oś symetrii przechodzi przez szczyt dachu">
      <polygon points="120,180 120,100 180,50 180,180" class="f1 s1 sw"/>
      <polygon points="180,180 180,50 240,100 240,180" class="f3 s3 sw"/>
      <rect x="135" y="120" width="25" height="25" class="bg ln"/>
      <rect x="200" y="120" width="25" height="25" class="bg ln"/>
      <line x1="180" y1="30" x2="180" y2="200" class="s2 sw dash"/>
      <text x="190" y="26" class="tx t2">oś symetrii</text>
      <text x="40" y="100" class="tx t1">lewa</text>
      <text x="262" y="100" class="tx t3">prawa</text>
    </svg>`,
    text: `<p>Figura jest <b>osiowosymetryczna</b>, gdy da się ją złożyć wzdłuż prostej tak, że obie części dokładnie się pokrywają. Ta prosta to <b>oś symetrii</b>.</p>
      <p>Domek złożony wzdłuż osi: lewa połowa trafia dokładnie na prawą – razem z oknami.</p>`,
    remember: 'Oś symetrii = linia zgięcia, po której <b>obie części się pokrywają</b>.',
    hook: 'Test lustra: postaw lusterko na osi – odbicie połówki uzupełnia całą figurę.',
  },
  {
    title: 'Punkt i jego odbicie',
    svg: `<svg viewBox="0 0 360 190" role="img" aria-label="Kratka z pionową osią k. Punkt A trzy kratki na lewo od osi i jego obraz A′ trzy kratki na prawo w tym samym wierszu. Punkt B na osi jest swoim własnym obrazem">
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
      <line x1="90" y1="80" x2="270" y2="80" class="s2 sw"/>
      <rect x="180" y="68" width="12" height="12" class="ln"/>
      <circle cx="90" cy="80" r="5" class="t2"/>
      <circle cx="270" cy="80" r="5" class="t2"/>
      <text x="72" y="72" class="tx-b t2">A</text>
      <text x="276" y="72" class="tx-b t2">A′</text>
      <text x="96" y="104" class="tx t2">3 kratki</text>
      <text x="200" y="104" class="tx t2">3 kratki</text>
      <circle cx="180" cy="140" r="5" class="t3"/>
      <text x="190" y="160" class="tx t3">B = B′</text>
    </svg>`,
    text: `<p>Obraz punktu A szukasz tak: idziesz <b>prostopadle do osi</b>, liczysz odległość od osi i odmierzasz <b>tyle samo</b> po drugiej stronie.</p>
      <p>Zauważ: oś k jest <b>symetralną odcinka AA′</b>. Punkt leżący na osi (B) zostaje na miejscu.</p>`,
    remember: 'A i A′ symetryczne względem k ⇔ <b>k jest symetralną AA′</b>.',
    check: { q: 'Punkt A leży 5 cm od osi k. Jaka jest odległość AA′?', options: ['5 cm', '10 cm', '2,5 cm'], answer: 1, explain: '5 cm do osi i 5 cm za osią: AA′ = 10 cm.' },
  },
  {
    title: 'Ile osi symetrii?',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Cztery figury z narysowanymi osiami symetrii: kwadrat – 4 osie, prostokąt – 2 osie, trójkąt równoboczny – 3 osie, koło – nieskończenie wiele osi">
      <rect x="20" y="40" width="60" height="60" class="f1 s1 sw"/>
      <g class="ln dash">
        <line x1="50" y1="30" x2="50" y2="110"/><line x1="10" y1="70" x2="90" y2="70"/>
        <line x1="14" y1="34" x2="86" y2="106"/><line x1="86" y1="34" x2="14" y2="106"/>
      </g>
      <rect x="110" y="48" width="80" height="44" class="f2 s2 sw"/>
      <g class="ln dash">
        <line x1="150" y1="38" x2="150" y2="102"/><line x1="100" y1="70" x2="200" y2="70"/>
      </g>
      <polygon points="215,100 285,100 250,39.4" class="f3 s3 sw"/>
      <g class="ln dash">
        <line x1="250" y1="32" x2="250" y2="108"/>
        <line x1="209" y1="103.5" x2="273.5" y2="66.2"/><line x1="291" y1="103.5" x2="226.5" y2="66.2"/>
      </g>
      <circle cx="350" cy="70" r="35" class="f5 s5 sw"/>
      <g class="ln dash">
        <line x1="350" y1="28" x2="350" y2="112"/><line x1="308" y1="70" x2="392" y2="70"/>
        <line x1="320" y1="40" x2="380" y2="100"/><line x1="380" y1="40" x2="320" y2="100"/>
      </g>
      <text x="50" y="140" class="tx-b t1" text-anchor="middle">4</text>
      <text x="150" y="140" class="tx-b t2" text-anchor="middle">2</text>
      <text x="250" y="140" class="tx-b t3" text-anchor="middle">3</text>
      <text x="350" y="140" class="tx-b t5" text-anchor="middle">∞</text>
      <text x="50" y="162" class="tx-s" text-anchor="middle">kwadrat</text>
      <text x="150" y="162" class="tx-s" text-anchor="middle">prostokąt</text>
      <text x="250" y="162" class="tx-s" text-anchor="middle">△ równoboczny</text>
      <text x="350" y="162" class="tx-s" text-anchor="middle">koło</text>
    </svg>`,
    text: `<p>Kwadrat ma <b>4</b> osie, prostokąt (nie kwadrat) – <b>2</b>, trójkąt równoboczny – <b>3</b>, a koło – <b>nieskończenie wiele</b> (każda prosta przez środek).</p>
      <p>Romb ma 2 osie (wzdłuż przekątnych), trapez równoramienny – 1, a trójkąt różnoboczny i „zwykły” równoległobok – żadnej.</p>`,
    remember: 'Przekątne prostokąta <b>nie są</b> jego osiami symetrii (chyba że to kwadrat).',
    hook: 'Prostokątną kartkę złóż po przekątnej – rogi wystają. To najszybszy dowód, że przekątna nie jest osią.',
    check: { q: 'Ile osi symetrii ma romb, który nie jest kwadratem?', options: ['4', '0', '2'], answer: 2, explain: 'Osie rombu zawierają jego przekątne – są dwie.' },
  },
  {
    title: 'Uzupełnij figurę na kratce',
    svg: `<svg viewBox="0 0 360 190" role="img" aria-label="Kratka z pionową osią. Po lewej narysowana połowa figury, po prawej jej odbicie. Wierzchołek A trzy kratki od osi i jego obraz A′ trzy kratki za osią">
      <g class="ln-thin">
        <line x1="30" y1="40" x2="330" y2="40"/><line x1="30" y1="70" x2="330" y2="70"/><line x1="30" y1="100" x2="330" y2="100"/>
        <line x1="30" y1="130" x2="330" y2="130"/><line x1="30" y1="160" x2="330" y2="160"/>
        <line x1="30" y1="40" x2="30" y2="160"/><line x1="60" y1="40" x2="60" y2="160"/><line x1="90" y1="40" x2="90" y2="160"/>
        <line x1="120" y1="40" x2="120" y2="160"/><line x1="150" y1="40" x2="150" y2="160"/><line x1="210" y1="40" x2="210" y2="160"/>
        <line x1="240" y1="40" x2="240" y2="160"/><line x1="270" y1="40" x2="270" y2="160"/><line x1="300" y1="40" x2="300" y2="160"/>
        <line x1="330" y1="40" x2="330" y2="160"/>
      </g>
      <polygon points="180,40 120,40 90,100 150,160 180,160" class="f1 s1 sw"/>
      <polygon points="180,40 240,40 270,100 210,160 180,160" class="f2 s2 sw"/>
      <line x1="180" y1="22" x2="180" y2="178" class="s5 sw dash"/>
      <circle cx="90" cy="100" r="5" class="t1"/>
      <circle cx="270" cy="100" r="5" class="t2"/>
      <text x="66" y="96" class="tx-b t1">A</text>
      <text x="278" y="96" class="tx-b t2">A′</text>
      <text x="40" y="186" class="tx t1">narysowane</text>
      <text x="220" y="186" class="tx t2">dorysowane</text>
      <text x="186" y="20" class="tx-b t5">oś</text>
    </svg>`,
    text: `<p>Jak uzupełnić figurę do osiowosymetrycznej:</p>
      <ul><li>dla każdego wierzchołka policz kratki do osi (prostopadle),</li><li>odmierz tyle samo kratek po drugiej stronie,</li><li>połącz nowe punkty w tej samej kolejności.</li></ul>
      <p>A leży 3 kratki od osi, więc A′ – 3 kratki za osią, w tym samym wierszu.</p>`,
    remember: 'Odbijasz <b>wierzchołki</b>, a potem łączysz je odcinkami.',
    hook: 'Licz kratki „od osi”, a nie od brzegu kartki – to najczęstszy błąd.',
    check: { q: 'Wierzchołek leży 2 kratki na lewo od pionowej osi. Gdzie będzie jego obraz?', options: ['2 kratki na prawo od osi, w tym samym wierszu', '2 kratki niżej', '4 kratki na prawo od osi'], answer: 0, explain: 'Obraz leży po drugiej stronie osi, w tej samej odległości, na prostej prostopadłej do osi.' },
  },
];

window.LESSONS['symetrie/symetria-srodkowa'] = [
  {
    title: 'Punkt symetryczny względem punktu',
    svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Punkty A i A′ symetryczne względem punktu O – O jest środkiem odcinka AA′. Tak samo punkty B i B′">
      <line x1="60" y1="160" x2="300" y2="40" class="s1 sw"/>
      <line x1="100" y1="50" x2="260" y2="150" class="s3 sw"/>
      <line x1="114" y1="122" x2="126" y2="138" class="s1 sw"/>
      <line x1="234" y1="62" x2="246" y2="78" class="s1 sw"/>
      <circle cx="60" cy="160" r="5" class="t1"/>
      <circle cx="300" cy="40" r="5" class="t1"/>
      <circle cx="100" cy="50" r="5" class="t3"/>
      <circle cx="260" cy="150" r="5" class="t3"/>
      <circle cx="180" cy="100" r="6" class="t2"/>
      <text x="40" y="186" class="tx-b t1">A</text>
      <text x="306" y="44" class="tx-b t1">A′</text>
      <text x="80" y="42" class="tx-b t3">B</text>
      <text x="266" y="172" class="tx-b t3">B′</text>
      <text x="190" y="128" class="tx-b t2">O</text>
    </svg>`,
    text: `<p>Punkty A i A′ są <b>symetryczne względem punktu O</b>, gdy O jest <b>środkiem odcinka AA′</b>. Idziesz z A do O i jeszcze raz tyle samo w tę samą stronę.</p>`,
    remember: 'A i A′ symetryczne względem O ⇔ <b>O jest środkiem AA′</b>.',
    hook: 'Przejdź „przez” punkt O na wprost i zrób za nim tyle samo kroków, ile przed nim.',
    check: { q: 'Punkt A jest 4 cm od punktu O. A′ jest symetryczny do A względem O. Ile wynosi AA′?', options: ['4 cm', '8 cm', '2 cm'], answer: 1, explain: 'O jest środkiem AA′: AA′ = 2 · 4 = 8 cm.' },
  },
  {
    title: 'Obrót o 180° – test figury',
    svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Równoległobok ABCD z przekątnymi przecinającymi się w punkcie O. Strzałka pokazuje obrót o 180 stopni wokół O: A przechodzi na C, B na D">
      <defs><marker id="a-sym-sr-1" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <polygon points="60,160 240,160 300,60 120,60" class="f1 s1 sw"/>
      <line x1="60" y1="160" x2="300" y2="60" class="ln dash"/>
      <line x1="240" y1="160" x2="120" y2="60" class="ln dash"/>
      <path d="M212,110 A32,32 0 0,0 148,110" class="ln s2 sw" marker-end="url(#a-sym-sr-1)"/>
      <circle cx="180" cy="110" r="5" class="t2"/>
      <text x="172" y="134" class="tx-b t2">O</text>
      <text x="164" y="48" class="tx t2">180°</text>
      <text x="40" y="182" class="tx-b">A</text>
      <text x="244" y="182" class="tx-b">B</text>
      <text x="304" y="56" class="tx-b">C</text>
      <text x="100" y="56" class="tx-b">D</text>
      <text x="80" y="196" class="tx">A ↔ C, B ↔ D</text>
    </svg>`,
    text: `<p>Figura jest <b>środkowosymetryczna</b>, gdy po <b>obrocie o 180°</b> wokół pewnego punktu O pokrywa się sama ze sobą. Ten punkt to <b>środek symetrii</b>.</p>
      <p>Każdy równoległobok ma środek symetrii – w punkcie przecięcia przekątnych (przekątne dzielą się tam na połowy).</p>`,
    remember: 'Środek symetrii równoległoboku = <b>punkt przecięcia przekątnych</b>.',
    hook: 'Obróć kartkę „do góry nogami”. Wygląda tak samo? Jest środek symetrii.',
    check: { q: 'Gdzie jest środek symetrii prostokąta?', options: ['w jednym z wierzchołków', 'w punkcie przecięcia przekątnych', 'prostokąt nie ma środka symetrii'], answer: 1, explain: 'Prostokąt to równoległobok – środek symetrii leży w punkcie przecięcia przekątnych.' },
  },
  {
    title: 'Kto ma środek symetrii?',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Cztery figury: równoległobok i kwadrat mają środek symetrii zaznaczony kropką, trójkąt i trapez równoramienny nie mają środka symetrii">
      <polygon points="15,100 75,100 90,40 30,40" class="f1 s1 sw"/>
      <circle cx="52.5" cy="70" r="4" class="t1"/>
      <rect x="120" y="40" width="60" height="60" class="f3 s3 sw"/>
      <circle cx="150" cy="70" r="4" class="t3"/>
      <polygon points="215,100 285,100 250,39.4" class="f2 s2 sw"/>
      <polygon points="310,100 390,100 370,45 330,45" class="f5 s5 sw"/>
      <text x="52" y="135" class="tx-b t3" text-anchor="middle">✓</text>
      <text x="150" y="135" class="tx-b t3" text-anchor="middle">✓</text>
      <text x="250" y="135" class="tx-b t2" text-anchor="middle">✗</text>
      <text x="350" y="135" class="tx-b t2" text-anchor="middle">✗</text>
      <text x="52" y="160" class="tx-s" text-anchor="middle">równoległobok</text>
      <text x="150" y="160" class="tx-s" text-anchor="middle">kwadrat</text>
      <text x="250" y="160" class="tx-s" text-anchor="middle">trójkąt</text>
      <text x="350" y="160" class="tx-s" text-anchor="middle">trapez</text>
    </svg>`,
    text: `<p><b>Mają</b> środek symetrii: odcinek, każdy równoległobok (prostokąt, romb, kwadrat), okrąg i koło, sześciokąt foremny.</p>
      <p><b>Nie mają</b>: żaden trójkąt, trapez, który nie jest równoległobokiem, pięciokąt foremny.</p>`,
    remember: '<b>Żaden trójkąt</b> nie ma środka symetrii.',
    hook: 'Trójkąt po obrocie o 180° „patrzy” wierzchołkiem w drugą stronę – jak strzałka odwrócona do tyłu.',
    check: { q: 'Która figura ma środek symetrii?', options: ['trójkąt równoboczny', 'romb', 'trapez równoramienny'], answer: 1, explain: 'Romb jest równoległobokiem – ma środek symetrii w punkcie przecięcia przekątnych.' },
  },
  {
    title: 'Oś i środek – porównanie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Tabela dwa na dwa. Oś i środek symetrii: kwadrat, prostokąt, romb, koło. Tylko oś: trójkąt równoboczny, trapez równoramienny. Tylko środek: równoległobok. Ani osi, ani środka: trójkąt różnoboczny">
      <rect x="100" y="40" width="150" height="70" class="f3"/>
      <rect x="250" y="40" width="150" height="70" class="f4"/>
      <rect x="100" y="110" width="150" height="70" class="f1"/>
      <rect x="250" y="110" width="150" height="70" class="f2"/>
      <g class="ln">
        <line x1="100" y1="40" x2="400" y2="40"/><line x1="0" y1="110" x2="400" y2="110"/><line x1="100" y1="180" x2="400" y2="180"/>
        <line x1="100" y1="10" x2="100" y2="180"/><line x1="250" y1="10" x2="250" y2="180"/><line x1="399" y1="10" x2="399" y2="180"/>
      </g>
      <text x="175" y="30" class="tx-b" text-anchor="middle">ma środek</text>
      <text x="325" y="30" class="tx-b" text-anchor="middle">brak środka</text>
      <text x="8" y="80" class="tx-b">ma oś</text>
      <text x="8" y="150" class="tx-b">brak osi</text>
      <text x="108" y="68" class="tx-s">kwadrat, prostokąt,</text>
      <text x="108" y="88" class="tx-s">romb, koło</text>
      <text x="258" y="68" class="tx-s">trójkąt równoboczny,</text>
      <text x="258" y="88" class="tx-s">trapez równoram.</text>
      <text x="108" y="138" class="tx-s">równoległobok (nie</text>
      <text x="108" y="158" class="tx-s">prostokąt, nie romb)</text>
      <text x="258" y="148" class="tx-s">trójkąt różnoboczny</text>
    </svg>`,
    text: `<p>Oś symetrii i środek symetrii to dwie różne rzeczy. Figura może mieć obie, tylko jedną albo żadnej.</p>
      <p>Pułapki: trójkąt równoboczny ma aż 3 osie, ale <b>nie ma</b> środka symetrii. „Zwykły” równoległobok nie ma osi, ale <b>ma</b> środek.</p>`,
    remember: 'Oś – <b>złożenie kartki</b>. Środek – <b>obrót o 180°</b>.',
    check: { q: 'Która figura ma środek symetrii, ale nie ma osi symetrii?', options: ['kwadrat', 'trójkąt różnoboczny', 'równoległobok, który nie jest prostokątem ani rombem'], answer: 2, explain: 'Taki równoległobok ma środek (przecięcie przekątnych), ale żadna prosta nie jest jego osią.' },
  },
];
