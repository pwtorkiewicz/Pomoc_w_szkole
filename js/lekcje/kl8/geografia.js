/* Lekcje – geografia, klasa 8 (Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XIV–XVIII).
 * Klucz: 'geografia/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['geografia/azja'] = [
  {
    title: 'Azja – kontynent skrajności',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przekrój wysokości: Mount Everest około 8850 metrów nad poziomem morza, poziom morza zero, brzeg Morza Martwego ponad 400 metrów poniżej poziomu morza">
      <line x1="20" y1="150" x2="390" y2="150" class="s1 sw"/>
      <text x="265" y="143" class="tx-s">poziom morza 0 m</text>
      <path d="M30,150 L90,110 L130,30 L170,105 L220,150 Z" class="f4 s4 sw"/>
      <path d="M250,150 Q275,185 300,150 Z" class="f1 s1 sw"/>
      <text x="130" y="22" class="tx-b" text-anchor="middle">⛰️ Mount Everest</text>
      <text x="130" y="128" class="tx" text-anchor="middle">ok. 8850 m</text>
      <text x="275" y="200" class="tx" text-anchor="middle">Morze Martwe: ponad −400 m</text>
    </svg>`,
    text: `<p>Azja to <b>największy kontynent</b>. Ma najwyższy punkt Ziemi – <b>Mount Everest</b> w Himalajach – i najniższy punkt lądu – brzeg <b>Morza Martwego</b>.</p>
      <p>Są tu <b>wszystkie strefy klimatyczne</b>, wilgotne lasy równikowe i suche pustynie, tłumy w Azji Wschodniej i pustki na Syberii. Takie zestawienia skrajności to <b>kontrasty</b>.</p>`,
    remember: 'Azja: największa, najwyższa (Everest), najniższa (Morze Martwe), ze wszystkimi strefami klimatu.',
    hook: 'Azja to kontynent „naj”: naj-większy, naj-wyższy, naj-niższy.',
    check: { q: 'Gdzie jest najniższy punkt lądu na Ziemi?', options: ['nad Morzem Martwym', 'na Saharze', 'nad Amazonką'], answer: 0, explain: 'Brzeg Morza Martwego leży ponad 400 m poniżej poziomu morza.' },
  },
  {
    title: 'Pierścień Ognia',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Schemat Oceanu Spokojnego otoczonego czerwonym pierścieniem wulkanów: od Ameryki przez Kamczatkę, Japonię, Filipiny, Indonezję do Nowej Zelandii">
      <ellipse cx="200" cy="115" rx="130" ry="75" class="f1 s1 sw"/>
      <ellipse cx="200" cy="115" rx="130" ry="75" class="s2 sw dash" fill="none"/>
      <text x="200" y="120" class="tx-b" text-anchor="middle">Ocean Spokojny</text>
      <g class="tx" text-anchor="middle"><text x="200" y="46">🌋</text><text x="108" y="68">🌋</text><text x="292" y="68">🌋</text><text x="70" y="121">🌋</text><text x="330" y="121">🌋</text><text x="108" y="174">🌋</text><text x="292" y="174">🌋</text><text x="200" y="196">🌋</text></g>
      <g class="tx-s"><text x="5" y="70">Japonia</text><text x="5" y="175">Indonezja</text><text x="345" y="70">Alaska</text><text x="345" y="175">Andy</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="220">← Azja</text><text x="330" y="220">Ameryka →</text></g>
    </svg>`,
    text: `<p>Skorupa Ziemi składa się z <b>płyt litosfery</b>, które powoli się przesuwają. Wokół Oceanu Spokojnego płyta pacyficzna wsuwa się pod sąsiednie płyty – to <b>subdukcja</b>.</p>
      <p>Na tej granicy jest <b>większość wulkanów i trzęsień ziemi</b> na Ziemi – stąd nazwa <b>Pacyficzny Pierścień Ognia</b>. Leżą w nim Japonia, Filipiny, Indonezja, Kamczatka, a po drugiej stronie – Alaska i Andy.</p>`,
    remember: 'Granica płyt litosfery = wulkany + trzęsienia ziemi + rowy oceaniczne.',
    hook: 'Płyty to kra na rzece: gdzie się zderzają, tam trzeszczy.',
    check: { q: 'Dlaczego Japonia ma wiele wulkanów?', options: ['bo ma klimat monsunowy', 'bo leży na granicy płyt litosfery', 'bo jest wyspą'], answer: 1, explain: 'Japonia leży w Pierścieniu Ognia, na granicy kilku płyt.' },
  },
  {
    title: 'Jak powstaje tsunami',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przekrój: trzęsienie ziemi pod dnem morza wypycha wodę do góry, powstaje fala, która na płyciźnie przy brzegu staje się bardzo wysoka i zalewa ląd">
      <defs><marker id="a-k8g-azj-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M10,90 Q60,88 100,90 Q140,80 160,90 Q240,92 280,70 Q300,40 320,85 L330,100 L390,100 L390,190 L10,190 Z" class="f1"/>
      <path d="M10,170 L200,170 L320,120 L330,100 L390,100" class="ln sw" fill="none"/>
      <path d="M10,190 L10,170 L200,170 L320,120 L330,100 L390,100 L390,190 Z" class="f4"/>
      <text x="80" y="185" class="tx-s">dno morza</text>
      <text x="95" y="160" class="tx" text-anchor="middle">💥 wstrząs</text>
      <line x1="95" y1="140" x2="95" y2="100" class="ln" marker-end="url(#a-k8g-azj-3)"/>
      <line x1="170" y1="70" x2="250" y2="60" class="ln" marker-end="url(#a-k8g-azj-3)"/>
      <text x="300" y="30" class="tx-b" text-anchor="middle">🌊 fala tsunami</text>
      <text x="360" y="92" class="tx-s" text-anchor="middle">ląd 🏠</text>
    </svg>`,
    text: `<p>Gdy pod dnem morza dojdzie do <b>trzęsienia ziemi</b> lub wybuchu wulkanu, dno gwałtownie się przesuwa i wypycha wodę. Powstaje fala, która na płyciźnie przy brzegu rośnie do ogromnej wysokości – to <b>tsunami</b>.</p>
      <p>W 2011 r. tsunami po trzęsieniu ziemi u wybrzeży Japonii zalało miasta i elektrownię w Fukushimie.</p>`,
    remember: 'Tsunami = fala wywołana trzęsieniem ziemi lub wybuchem wulkanu pod dnem morza.',
    check: { q: 'Co najczęściej wywołuje tsunami?', options: ['silny wiatr', 'przypływ', 'trzęsienie ziemi pod dnem morza'], answer: 2, explain: 'Gwałtowny ruch dna morza wypycha ogromne masy wody.' },
  },
  {
    title: 'Jak się chronić',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cztery sposoby: budynki odporne na wstrząsy, system ostrzegania, ćwiczenia ewakuacyjne, falochrony i ucieczka na wzniesienia">
      <g class="sw"><rect x="10" y="10" width="185" height="85" rx="10" class="f3 s3"/><rect x="205" y="10" width="185" height="85" rx="10" class="f4 s4"/>
        <rect x="10" y="105" width="185" height="85" rx="10" class="f1 s1"/><rect x="205" y="105" width="185" height="85" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="45">🏢 budynki</text><text x="102" y="72">odporne na wstrząsy</text>
        <text x="297" y="45">📱 ostrzeżenia</text><text x="297" y="72">czujniki, alarmy</text>
        <text x="102" y="140">🏃 ćwiczenia</text><text x="102" y="167">ewakuacyjne</text>
        <text x="297" y="140">⛰️ ucieczka</text><text x="297" y="167">na wzniesienia</text></g>
    </svg>`,
    text: `<p>Trzęsień ziemi nie da się zatrzymać, ale można <b>ograniczyć ich skutki</b>: budować domy odporne na wstrząsy, mieć systemy ostrzegania, ćwiczyć ewakuację, stawiać falochrony i nie budować domów tuż przy brzegu.</p>
      <p>W Japonii dzieci od małego ćwiczą, co robić w czasie trzęsienia ziemi.</p>`,
    remember: 'Zapobieganie skutkom: odporne budynki, ostrzeganie, ewakuacja, falochrony.',
    hook: 'Na tsunami najlepsza rada: wysoko i daleko od brzegu.',
  },
];

window.LESSONS['geografia/monsun-japonia'] = [
  {
    title: 'Monsun – wiatr w dwie strony',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Lato: wiatr wieje z oceanu nad ląd i przynosi deszcz. Zima: wiatr wieje z lądu nad ocean, jest sucho">
      <defs><marker id="a-k8g-mon-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="180" height="200" rx="10" class="f3 s3 sw"/><rect x="210" y="10" width="180" height="200" rx="10" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="100" y="36">lato</text><text x="300" y="36">zima</text></g>
      <rect x="20" y="130" width="70" height="40" class="f1"/><rect x="90" y="130" width="90" height="40" class="f4"/>
      <rect x="220" y="130" width="70" height="40" class="f1"/><rect x="290" y="130" width="90" height="40" class="f4"/>
      <g class="tx-s" text-anchor="middle"><text x="55" y="155">ocean</text><text x="135" y="155">ląd</text><text x="255" y="155">ocean</text><text x="335" y="155">ląd</text></g>
      <line x1="40" y1="100" x2="150" y2="100" class="ln sw" marker-end="url(#a-k8g-mon-1)"/>
      <line x1="360" y1="100" x2="250" y2="100" class="ln sw" marker-end="url(#a-k8g-mon-1)"/>
      <g class="tx" text-anchor="middle"><text x="140" y="75">🌧️</text><text x="340" y="75">☀️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="100" y="195">pora deszczowa</text><text x="300" y="195">pora sucha</text></g>
    </svg>`,
    text: `<p><b>Monsun</b> dwa razy w roku zmienia kierunek. <b>Latem</b> wieje znad oceanu nad ląd i niesie wilgoć – zaczyna się <b>pora deszczowa</b> („tragarz deszczu”).</p>
      <p><b>Zimą</b> wieje znad lądu nad ocean – jest <b>sucho</b>. Bez nawadniania ryż wtedy nie urośnie, dlatego mówi się o „wietrze głodowym”.</p>`,
    remember: 'Monsun letni: z oceanu, deszcz. Monsun zimowy: z lądu, susza.',
    hook: 'Latem z <b>m</b>orza – <b>m</b>okro. Zimą z lądu – sucho jak na lądzie.',
    check: { q: 'Skąd wieje monsun letni?', options: ['znad oceanu', 'znad lądu', 'z gór'], answer: 0, explain: 'Monsun letni niesie wilgotne powietrze znad oceanu.' },
  },
  {
    title: 'Ryż – zboże, które lubi wodę',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tarasy ryżowe na zboczu zalane wodą, rok z porą deszczową i dwoma zbiorami">
      <g class="sw"><path d="M20,170 L380,170 L380,150 L320,150 L320,125 L260,125 L260,100 L200,100 L200,75 L140,75 L140,50 L20,50 Z" class="f3 s3"/></g>
      <g class="f1"><rect x="320" y="146" width="60" height="4"/><rect x="260" y="121" width="60" height="4"/><rect x="200" y="96" width="60" height="4"/><rect x="140" y="71" width="60" height="4"/></g>
      <g class="tx" text-anchor="middle"><text x="350" y="142">🌾</text><text x="290" y="117">🌾</text><text x="230" y="92">🌾</text><text x="170" y="67">🌾</text></g>
      <text x="80" y="110" class="tx-b" text-anchor="middle">tarasy</text>
      <text x="200" y="195" class="tx-s" text-anchor="middle">ciepło + woda = nawet 2–3 zbiory w roku</text>
    </svg>`,
    text: `<p><b>Ryż</b> to podstawowe zboże Azji Południowo-Wschodniej. Potrzebuje <b>gorąca i dużo wody</b> – pola są zalewane. Na zboczach buduje się <b>tarasy</b>.</p>
      <p>Pola są małe, a prace wykonuje się głównie ręcznie i wspólnie. Zwyczaje i współpraca mieszkańców przy uprawie ryżu to <b>kultura ryżowa</b>. Gdzie ciepło i wilgotno jest cały rok, zbiera się ryż co najmniej dwa razy w roku.</p>`,
    remember: 'Rytm upraw ryżu wyznacza monsun; w porze suchej potrzebne jest nawadnianie.',
    check: { q: 'Co to jest kultura ryżowa?', options: ['odmiana ryżu', 'zwyczaje i współpraca ludzi przy uprawie ryżu', 'potrawa z ryżu'], answer: 1, explain: 'Wspólne przygotowanie, nawadnianie i zbiory wytworzyły szczególne zwyczaje społeczne.' },
  },
  {
    title: 'Japonia: trudne warunki…',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Utrudnienia w Japonii: góry i mało nizin, trzęsienia ziemi i wulkany, tajfuny, brak surowców">
      <g class="sw"><rect x="10" y="10" width="185" height="85" rx="10" class="f2 s2"/><rect x="205" y="10" width="185" height="85" rx="10" class="f2 s2"/>
        <rect x="10" y="105" width="185" height="85" rx="10" class="f2 s2"/><rect x="205" y="105" width="185" height="85" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="45">⛰️ góry,</text><text x="102" y="72">mało nizin</text>
        <text x="297" y="45">🌋 wulkany,</text><text x="297" y="72">trzęsienia ziemi</text>
        <text x="102" y="140">🌀 tajfuny,</text><text x="102" y="167">tsunami</text>
        <text x="297" y="140">⛏️ prawie brak</text><text x="297" y="167">surowców</text></g>
    </svg>`,
    text: `<p>Japonia to kraj <b>wysp</b>, w większości górzystych. Nizin jest mało, a ludzie i fabryki tłoczą się na wybrzeżach. Zagrażają trzęsienia ziemi, tsunami, wulkany i <b>tajfuny</b>.</p>
      <p>Japonia ma też <b>bardzo mało surowców</b> – ropę, rudy i węgiel musi sprowadzać.</p>`,
    remember: 'Japonia: wyspy, góry, kataklizmy i brak surowców.',
    hook: 'Tajfun to azjatycki kuzyn huraganu.',
  },
  {
    title: '…a mimo to potęga',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: surowce przypływają statkami do Japonii, ludzie z dyscypliną i wiedzą przerabiają je w fabrykach, wypływają samochody i elektronika">
      <defs><marker id="a-k8g-mon-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="60" width="100" height="70" rx="10" class="f4 s4 sw"/><rect x="150" y="40" width="110" height="110" rx="12" class="f3 s3 sw"/><rect x="295" y="60" width="100" height="70" rx="10" class="f1 s1 sw"/>
      <g class="tx" text-anchor="middle"><text x="60" y="90">🚢 surowce</text><text x="60" y="115">ropa, rudy</text>
        <text x="205" y="80">🏭 Japonia</text><text x="205" y="105">wiedza,</text><text x="205" y="128">dyscyplina</text>
        <text x="345" y="90">🚗 💻</text><text x="345" y="115">wyroby</text></g>
      <line x1="112" y1="95" x2="148" y2="95" class="ln sw" marker-end="url(#a-k8g-mon-4)"/><line x1="262" y1="95" x2="293" y2="95" class="ln sw" marker-end="url(#a-k8g-mon-4)"/>
    </svg>`,
    text: `<p>Siła Japonii to <b>ludzie</b>: sumienność, dyscyplina, przywiązanie do firmy, wysokie kwalifikacje i szacunek dla wiedzy. Kraj dużo inwestuje w naukę i technologie.</p>
      <p>Japonia <b>importuje surowce</b>, a <b>eksportuje</b> wysoko przetworzone wyroby: samochody, elektronikę, statki. Handel idzie morzem – stąd wielkie porty i flota.</p>`,
    remember: 'Japonia: importuje surowce, eksportuje nowoczesne wyroby; sukces dzięki ludziom i technologii.',
    check: { q: 'Który czynnik pomógł Japonii stać się potęgą gospodarczą?', options: ['wielkie złoża ropy', 'rozległe niziny', 'sumienność i kwalifikacje pracowników'], answer: 2, explain: 'Japonia nie ma surowców ani wielu nizin – jej siłą są ludzie i technologia.' },
  },
];

window.LESSONS['geografia/chiny-indie'] = [
  {
    title: 'Chiny: wschód pełny, zachód pusty',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Uproszczona mapa Chin podzielona na część zachodnią – góry, wyżyny, pustynie, mało ludzi – i wschodnią – niziny, deszcz, 95 procent ludności">
      <path d="M20,60 Q80,20 200,30 Q320,25 380,70 Q390,130 330,170 Q220,190 120,170 Q30,150 20,60 Z" class="f4 s4 sw"/>
      <path d="M220,30 Q215,100 240,180 Q320,180 360,150 Q392,110 380,70 Q320,25 220,30 Z" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="120" y="80">Zachód</text><text x="305" y="80">Wschód</text></g>
      <g class="tx" text-anchor="middle"><text x="120" y="110">⛰️ góry, pustynie</text><text x="120" y="135">mało ludzi</text>
        <text x="300" y="110">niziny, deszcz</text><text x="300" y="135">ok. 95% ludzi</text></g>
    </svg>`,
    text: `<p>W Chinach ludność jest rozmieszczona bardzo <b>nierównomiernie</b>. Na wschodzie są niziny (np. <b>Nizina Chińska</b>), wielkie rzeki i wilgotny klimat – tu mieszka ok. <b>95% ludności</b>.</p>
      <p>Zachód to góry, Wyżyna Tybetańska i pustynie – suchy i surowy klimat, więc ludzi jest tam bardzo mało. Decydują <b>warunki przyrodnicze</b>.</p>`,
    remember: 'Chiny: ludzie tam, gdzie niziny, woda i deszcz – na wschodzie.',
    hook: 'Chińczycy „mieszkają przy kranie” – blisko wody i żyznej ziemi.',
    check: { q: 'Gdzie w Chinach jest największa gęstość zaludnienia?', options: ['na Nizinie Chińskiej', 'w Tybecie', 'na pustyni'], answer: 0, explain: 'Żyzna nizina z dogodnym klimatem przyciąga najwięcej ludzi.' },
  },
  {
    title: 'Jak Chiny stały się potęgą',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Oś czasu: koniec lat 70. reformy i specjalne strefy ekonomiczne, potem fabryki zagranicznych firm, dziś nowoczesne technologie; Chiny druga gospodarka świata i największy eksporter">
      <defs><marker id="a-k8g-chi-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="20" y1="100" x2="385" y2="100" class="ln sw" marker-end="url(#a-k8g-chi-2)"/>
      <g class="sw"><circle cx="70" cy="100" r="10" class="f4 s4"/><circle cx="200" cy="100" r="10" class="f2 s2"/><circle cx="330" cy="100" r="10" class="f3 s3"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="70">koniec lat 70.</text><text x="70" y="135">reformy,</text><text x="70" y="153">strefy</text><text x="70" y="171">ekonomiczne</text>
        <text x="200" y="70">potem</text><text x="200" y="135">fabryki firm</text><text x="200" y="153">z całego świata</text>
        <text x="330" y="70">dziś</text><text x="330" y="135">nowoczesne</text><text x="330" y="153">technologie</text></g>
      <text x="200" y="30" class="tx-b" text-anchor="middle">2. gospodarka świata</text>
    </svg>`,
    text: `<p>Pod koniec lat 70. XX w. Chiny zaczęły <b>reformy</b> i otworzyły <b>specjalne strefy ekonomiczne</b> – ulgi, tania ziemia i tania siła robocza przyciągnęły zagraniczne firmy.</p>
      <p>Dziś Chiny to <b>druga gospodarka świata</b> (po USA) i <b>największy eksporter</b>. Rozwijają nowoczesne technologie, ale wielu ludzi wciąż pracuje ciężko za niskie płace.</p>`,
    remember: 'Chiny: reformy + strefy ekonomiczne → „warsztat” dla świata → potęga eksportowa.',
    check: { q: 'Co przyciągnęło zagraniczne firmy do Chin?', options: ['brak pracowników', 'ulgi, tania ziemia i tania siła robocza', 'wysokie podatki'], answer: 1, explain: 'Specjalne strefy ekonomiczne dawały inwestorom niskie koszty.' },
  },
  {
    title: 'Indie – kraj kontrastów',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Kontrasty Indii: po jednej stronie nowoczesne firmy informatyczne w Bengaluru, po drugiej dzielnice nędzy i biedne wioski">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f3 s3 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">nowoczesność</text><text x="297" y="38">bieda</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="80">💻 IT w Bengaluru</text><text x="102" y="110">🚗 przemysł</text><text x="102" y="140">💊 leki</text><text x="102" y="170">🗣️ angielski</text>
        <text x="297" y="80">🏚️ dzielnice nędzy</text><text x="297" y="110">🌾 praca w polu</text><text x="297" y="140">🐄 tradycja</text><text x="297" y="170">👥 kasty</text></g>
    </svg>`,
    text: `<p><b>Indie</b> to <b>najludniejsze państwo świata</b>, a liczba ludności szybko rośnie. Prawie połowa pracujących pracuje w rolnictwie; <b>zielona rewolucja</b> (wydajne odmiany zbóż) bardzo zwiększyła zbiory.</p>
      <p>Obok nowoczesnych firm informatycznych (<b>Bengaluru</b>) są <b>dzielnice nędzy</b> i biedne wsie, a na wsi trwa podział na <b>kasty</b>. Atuty Indii: angielski, wykształceni specjaliści, niskie koszty pracy.</p>`,
    remember: 'Indie: najwięcej ludzi na świecie; nowoczesne usługi IT obok biedy – kontrasty społeczne.',
    hook: 'Indie mają dwie prędkości: szybki internet i wóz zaprzężony w woły.',
    check: { q: 'Dlaczego firmy z całego świata zlecają usługi informatyczne w Indiach?', options: ['bo Indie nie mają ludzi', 'bo jest tam zimno', 'bo pracownicy znają angielski, mają kwalifikacje, a koszty są niskie'], answer: 2, explain: 'Te trzy atuty przyciągają zlecenia, np. z USA.' },
  },
  {
    title: 'Porównaj i zapamiętaj',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela porównawcza Chin i Indii: obie najludniejsze; Chiny – druga gospodarka i największy eksporter; Indie – najwięcej mieszkańców, usługi IT">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f2 s2 sw"/><rect x="205" y="10" width="185" height="180" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">🇨🇳 Chiny</text><text x="297" y="38">🇮🇳 Indie</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="78">2. gospodarka</text><text x="102" y="105">największy</text><text x="102" y="128">eksporter</text><text x="102" y="165">ludzie na wschodzie</text>
        <text x="297" y="78">1. pod względem</text><text x="297" y="105">liczby ludności</text><text x="297" y="140">usługi IT</text><text x="297" y="165">hinduizm, kasty</text></g>
    </svg>`,
    text: `<p>Chiny i Indie to dwa najludniejsze państwa świata. <b>Chiny</b> – fabryki, eksport, druga gospodarka świata. <b>Indie</b> – najwięcej mieszkańców, szybki rozwój usług informatycznych, ogromne kontrasty społeczne.</p>
      <p>Pułapka: najludniejsze są dziś <b>Indie</b>, nie Chiny.</p>`,
    remember: 'Najludniejsze państwo świata: Indie. Druga gospodarka świata: Chiny.',
  },
];

window.LESSONS['geografia/bliski-wschod'] = [
  {
    title: 'Pustynia, ropa, religie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy hasła Bliskiego Wschodu: pustynie i mało wody, ropa naftowa nad Zatoką Perską, trzy religie – judaizm, chrześcijaństwo, islam">
      <g class="sw"><rect x="10" y="10" width="120" height="170" rx="12" class="f4 s4"/><rect x="140" y="10" width="120" height="170" rx="12" class="f5 s5"/><rect x="270" y="10" width="120" height="170" rx="12" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="40">pustynia</text><text x="200" y="40">ropa</text><text x="330" y="40">religie</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="85">🏜️</text><text x="70" y="120">mało</text><text x="70" y="145">wody</text>
        <text x="200" y="85">🛢️</text><text x="200" y="120">ponad 1/3</text><text x="200" y="145">ropy świata</text>
        <text x="330" y="85">✡️ ✝️ ☪️</text><text x="330" y="115" class="tx-s">judaizm</text><text x="330" y="135" class="tx-s">chrześcijaństwo</text><text x="330" y="155" class="tx-s">islam</text></g>
    </svg>`,
    text: `<p><b>Bliski Wschód</b> to region Azji Południowo-Zachodniej z <b>Półwyspem Arabskim</b> – największym półwyspem świata. Przeważa klimat <b>zwrotnikowy suchy</b> – woda jest cenna.</p>
      <p>Tu powstały <b>judaizm</b>, <b>chrześcijaństwo</b> i <b>islam</b>. Dominuje islam, a <b>Izrael</b> to jedyny kraj z przewagą wyznawców judaizmu.</p>`,
    remember: 'Bliski Wschód: pustynie, ropa znad Zatoki Perskiej, kolebka trzech religii.',
    hook: 'Zapamiętaj trzy „P”: Pustynia, Paliwo (ropa), Pobożność (religie).',
    check: { q: 'Która religia dominuje na Bliskim Wschodzie?', options: ['islam', 'buddyzm', 'hinduizm'], answer: 0, explain: 'W większości państw regionu przeważa islam.' },
  },
  {
    title: 'Czarne złoto',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Wykres kołowy: ponad jedna trzecia światowej ropy naftowej pochodzi z państw nad Zatoką Perską">
      <circle cx="110" cy="95" r="75" class="f1 s1 sw"/>
      <path d="M110,95 L110,20 A75,75 0 0,1 175,132 Z" class="f5 s5 sw"/>
      <text x="150" y="75" class="tx-b" text-anchor="middle">&gt; 1/3</text>
      <text x="95" y="140" class="tx-s" text-anchor="middle">reszta świata</text>
      <text x="210" y="60" class="tx">🛢️ Zatoka Perska</text>
      <text x="210" y="95" class="tx">💰 bogate państwa</text>
      <text x="210" y="120" class="tx-s">nowoczesne miasta,</text><text x="210" y="138" class="tx-s">usługi, turystyka</text>
    </svg>`,
    text: `<p>Państwa wokół <b>Zatoki Perskiej</b> wydobywają ponad <b>1/3 ropy naftowej świata</b> i dużo gazu. Dzięki temu niektóre (np. Katar, Zjednoczone Emiraty Arabskie) bardzo się wzbogaciły.</p>
      <p>Ale poziom rozwoju jest różny: obok bogatych państw naftowych są kraje biedne i zniszczone wojnami. Ropa sprawia też, że region jest ważny dla całego świata.</p>`,
    remember: 'Ropa = bogactwo części państw i ogromne znaczenie strategiczne regionu.',
    check: { q: 'Ile światowej ropy wydobywają państwa nad Zatoką Perską?', options: ['ok. 1/100', 'ponad 1/3', 'całą'], answer: 1, explain: 'To ponad jedna trzecia światowego wydobycia.' },
  },
  {
    title: 'Konflikty: przyczyny i skutki',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat: przyczyny konfliktów – terytorium, religia i narodowość, ropa, woda, władza – prowadzą do skutków: ofiary, uchodźcy, zniszczenia, bieda">
      <defs><marker id="a-k8g-bw-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="160" height="200" rx="12" class="f4 s4 sw"/><rect x="230" y="10" width="160" height="200" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="90" y="38">przyczyny</text><text x="310" y="38">skutki</text></g>
      <g class="tx" text-anchor="middle"><text x="90" y="75">🗺️ terytorium</text><text x="90" y="105">🕌 religia, naród</text><text x="90" y="135">🛢️ ropa</text><text x="90" y="165">💧 woda</text><text x="90" y="195">👑 władza</text>
        <text x="310" y="75">💔 ofiary</text><text x="310" y="105">🎒 uchodźcy</text><text x="310" y="135">🏚️ zniszczenia</text><text x="310" y="165">📉 bieda</text><text x="310" y="195">🔥 ekologia</text></g>
      <line x1="175" y1="110" x2="225" y2="110" class="ln sw" marker-end="url(#a-k8g-bw-3)"/>
    </svg>`,
    text: `<p>Najdłuższy jest <b>konflikt arabsko-izraelski</b> – od 1948 r., gdy powstał Izrael, a państwa arabskie go nie uznały; jego częścią są dążenia <b>Palestyńczyków</b> do własnego państwa. Były też m.in. wojna Iraku z Iranem i wojny w Zatoce Perskiej, a w Syrii toczyła się wojna domowa.</p>
      <p>Skutki to ofiary, <b>uchodźcy</b>, zniszczenia, bieda, a nawet katastrofy ekologiczne – np. podpalone szyby naftowe w Kuwejcie.</p>`,
    remember: 'Przyczyny: ziemia, religia i naród, ropa, woda, władza. Skutki: ofiary, uchodźcy, zniszczenia.',
    check: { q: 'Który konflikt na Bliskim Wschodzie trwa najdłużej?', options: ['wojna o Kuwejt', 'wojna Iraku z Iranem', 'konflikt arabsko-izraelski'], answer: 2, explain: 'Trwa od 1948 r.' },
  },
  {
    title: 'Uwaga na pułapki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pułapki: Bliski Wschód leży w Azji; nie wszystkie państwa są arabskie – Turcja, Iran i Izrael mają inne narody; nie wszystkie są bogate">
      <g class="sw"><rect x="10" y="10" width="380" height="55" rx="10" class="f4 s4"/><rect x="10" y="72" width="380" height="55" rx="10" class="f1 s1"/><rect x="10" y="134" width="380" height="55" rx="10" class="f2 s2"/></g>
      <g class="tx"><text x="25" y="44">📍 Bliski Wschód to Azja, nie Afryka</text><text x="25" y="106">🌐 Turcja, Iran, Izrael – nie są arabskie</text><text x="25" y="168">💰 nie każdy kraj jest bogaty z ropy</text></g>
    </svg>`,
    text: `<p>Bliski Wschód leży w <b>Azji Południowo-Zachodniej</b>. Większość państw zamieszkują Arabowie, ale <b>Turcja, Iran i Izrael</b> to państwa innych narodów.</p>
      <p>Bogactwo z ropy ma tylko część państw – inne są biedne lub zniszczone wojnami. Wojny nie mają jednej przyczyny: zwykle chodzi naraz o ziemię, religię, wodę, ropę i władzę.</p>`,
    remember: 'Bliski Wschód: Azja; większość państw arabskich; bogactwo nierówno rozłożone.',
    check: { q: 'Które państwo Bliskiego Wschodu NIE jest arabskie?', options: ['Iran', 'Arabia Saudyjska', 'Katar'], answer: 0, explain: 'Iran, podobnie jak Turcja i Izrael, to państwo innego narodu.' },
  },
];

window.LESSONS['geografia/afryka-przyroda'] = [
  {
    title: 'Dlaczego nad równikiem leje, a przy zwrotniku jest pustynia',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Schemat cyrkulacji: nad równikiem ciepłe powietrze wznosi się i daje deszcz, w górze płynie ku zwrotnikom, tam opada i wysycha – pustynie; przy ziemi pasaty wracają ku równikowi">
      <defs><marker id="a-k8g-afr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="170" width="400" height="20" class="f4"/>
      <g class="tx-s" text-anchor="middle"><text x="50" y="208">zwrotnik</text><text x="210" y="208">równik</text><text x="370" y="208">zwrotnik</text></g>
      <g class="ln sw" fill="none">
        <path d="M210,160 L210,40" marker-end="url(#a-k8g-afr-1)"/>
        <path d="M200,35 Q120,30 60,40" marker-end="url(#a-k8g-afr-1)"/><path d="M220,35 Q300,30 360,40" marker-end="url(#a-k8g-afr-1)"/>
        <path d="M50,50 L50,155" marker-end="url(#a-k8g-afr-1)"/><path d="M370,50 L370,155" marker-end="url(#a-k8g-afr-1)"/>
        <path d="M65,160 L190,160" marker-end="url(#a-k8g-afr-1)"/><path d="M355,160 L230,160" marker-end="url(#a-k8g-afr-1)"/></g>
      <text x="245" y="95" class="tx">🌧️ deszcz</text>
      <g class="tx" text-anchor="middle"><text x="95" y="120">🏜️</text><text x="325" y="120">🏜️</text></g>
      <text x="128" y="150" class="tx-s" text-anchor="middle">pasat</text><text x="292" y="150" class="tx-s" text-anchor="middle">pasat</text>
    </svg>`,
    text: `<p>Nad <b>równikiem</b> Słońce mocno grzeje. Ciepłe, wilgotne powietrze <b>unosi się</b>, ochładza, a para wodna się skrapla – padają ulewne <b>deszcze zenitalne</b>.</p>
      <p>W górze powietrze płynie ku zwrotnikom i tam <b>opada</b>. Opadając ogrzewa się i wysycha – nie pada, powstają <b>pustynie</b> (Sahara). Przy ziemi powietrze wraca ku równikowi jako <b>pasaty</b>.</p>`,
    remember: 'Powietrze w górę → deszcz (równik). Powietrze w dół → susza (zwrotniki).',
    hook: 'Wznoszące się powietrze „wyżyma się” z wody jak gąbka – opadające jest już suche.',
    check: { q: 'Dlaczego przy zwrotnikach są pustynie?', options: ['bo powietrze się unosi', 'bo powietrze opada i wysycha', 'bo jest tam zimno'], answer: 1, explain: 'Opadające powietrze ogrzewa się i jest suche – chmury nie powstają.' },
  },
  {
    title: 'Strefy jak w lustrze',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Pasy roślinności Afryki od północy: makia, pustynia, sawanna, las równikowy na równiku, sawanna, pustynia, makia – układ symetryczny">
      <g class="sw"><rect x="40" y="10" width="200" height="26" class="f5 s5"/><rect x="40" y="36" width="200" height="30" class="f4 s4"/><rect x="40" y="66" width="200" height="30" class="f2 s2"/>
        <rect x="40" y="96" width="200" height="34" class="f3 s3"/><rect x="40" y="130" width="200" height="30" class="f2 s2"/><rect x="40" y="160" width="200" height="30" class="f4 s4"/><rect x="40" y="190" width="200" height="26" class="f5 s5"/></g>
      <line x1="20" y1="113" x2="38" y2="113" class="ln sw"/><line x1="242" y1="113" x2="256" y2="113" class="ln sw"/>
      <g class="tx-s" text-anchor="middle"><text x="140" y="28">makia</text><text x="140" y="56">pustynia</text><text x="140" y="86">sawanna</text><text x="140" y="118">las równikowy</text><text x="140" y="150">sawanna</text><text x="140" y="180">pustynia</text><text x="140" y="208">makia</text></g>
      <text x="260" y="118" class="tx-b">równik</text>
      <text x="260" y="56" class="tx-s">Sahara</text><text x="260" y="180" class="tx-s">Kalahari, Namib</text>
    </svg>`,
    text: `<p>Afryka leży <b>symetrycznie</b> względem równika, więc klimat, roślinność i gleby układają się w <b>pasy – tak samo na północ i na południe</b>.</p>
      <p>Od równika: <b>las równikowy</b> (deszcz cały rok) → <b>sawanna</b> (pora deszczowa i sucha) → <b>pustynia</b> (prawie bez deszczu) → na krańcach <b>makia</b> (klimat śródziemnomorski).</p>`,
    remember: 'Im dalej od równika, tym krótsza pora deszczowa: las → sawanna → pustynia.',
    check: { q: 'Jaka roślinność rośnie w klimacie z porą deszczową i suchą?', options: ['wilgotny las równikowy', 'tundra', 'sawanna'], answer: 2, explain: 'Sawanna – trawy i pojedyncze drzewa.' },
  },
  {
    title: 'Sahel – na krawędzi pustyni',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pas Sahara, na południe od niej Sahel z opadami 200 do 500 milimetrów, dalej sawanna">
      <rect x="10" y="20" width="380" height="55" class="f4 s4 sw"/><rect x="10" y="75" width="380" height="50" class="f2 s2 sw"/><rect x="10" y="125" width="380" height="55" class="f3 s3 sw"/>
      <g class="tx-b"><text x="25" y="55">🏜️ Sahara</text><text x="25" y="107">🐐 Sahel</text><text x="25" y="160">🌳 sawanna</text></g>
      <g class="tx"><text x="200" y="55">prawie bez deszczu</text><text x="200" y="107">200–500 mm/rok</text><text x="200" y="160">więcej deszczu</text></g>
    </svg>`,
    text: `<p><b>Sahel</b> to pas na <b>południe od Sahary</b>. Pada mało (ok. 200–500 mm rocznie), pora deszczowa jest krótka i niepewna. Ludzie od wieków zajmują się <b>koczowniczym pasterstwem</b> – wędrują ze stadami za trawą i wodą.</p>`,
    remember: 'Sahel: półsuchy pas na południe od Sahary; tradycyjnie – koczownicze pasterstwo.',
  },
  {
    title: 'Pustynnienie – pustynia idzie na południe',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Łańcuch przyczyn: susza, za duże stada, wycinanie krzewów na opał, więcej ludzi – zniszczona roślinność – wiatr wywiewa glebę – pustynia">
      <defs><marker id="a-k8g-afr-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="10" width="180" height="110" rx="10" class="f2 s2"/><rect x="230" y="10" width="160" height="50" rx="10" class="f4 s4"/><rect x="230" y="80" width="160" height="50" rx="10" class="f4 s4"/><rect x="230" y="150" width="160" height="50" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="100" y="38">☀️ susze</text><text x="100" y="63">🐄 za duże stada</text><text x="100" y="88">🪓 drewno na opał</text><text x="100" y="113">👥 więcej ludzi</text>
        <text x="310" y="40">brak roślin</text><text x="310" y="110">💨 wiatr wywiewa</text><text x="310" y="180">🏜️ pustynia</text></g>
      <line x1="192" y1="40" x2="228" y2="36" class="ln" marker-end="url(#a-k8g-afr-4)"/>
      <line x1="310" y1="62" x2="310" y2="78" class="ln" marker-end="url(#a-k8g-afr-4)"/><line x1="310" y1="132" x2="310" y2="148" class="ln" marker-end="url(#a-k8g-afr-4)"/>
    </svg>`,
    text: `<p><b>Pustynnienie</b> to zamiana terenów na skraju pustyni w pustynię. Przyczyny: <b>susze</b>, <b>nadmierny wypas</b> (zwierzęta zjadają wszystko i ubijają glebę), <b>wycinanie drzew i krzewów na opał</b>, coraz więcej ludzi.</p>
      <p>Bez roślin wiatr wywiewa glebę i pastwiska zamieniają się w piasek. Środowisko Sahelu trzeba użytkować ostrożnie.</p>`,
    remember: 'Pustynnienie = susza + działalność człowieka (nadmierny wypas, wycinanie roślin).',
    check: { q: 'Która działalność ludzi przyspiesza pustynnienie?', options: ['nadmierny wypas', 'sadzenie drzew', 'oszczędzanie wody'], answer: 0, explain: 'Zbyt duże stada niszczą roślinność, a bez niej gleba jest wywiewana.' },
  },
];

window.LESSONS['geografia/afryka-gospodarka'] = [
  {
    title: 'Kenia – safari i plaże',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Walory Kenii: przyrodnicze – sawanna z dzikimi zwierzętami, parki narodowe, plaże nad Oceanem Indyjskim, wulkany; kulturowe – tradycje Masajów">
      <rect x="10" y="10" width="230" height="180" rx="12" class="f3 s3 sw"/><rect x="250" y="10" width="140" height="180" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="125" y="38">przyrodnicze</text><text x="320" y="38">kulturowe</text></g>
      <g class="tx" text-anchor="middle"><text x="125" y="75">🦁🐘🦒 sawanna</text><text x="125" y="105">🚙 safari w parkach</text><text x="125" y="135">🏖️ plaże</text><text x="125" y="165">🌋 wulkany</text>
        <text x="320" y="90">💃 Masajowie</text><text x="320" y="120">tańce,</text><text x="320" y="145">stroje</text></g>
    </svg>`,
    text: `<p><b>Kenia</b> leży na równiku, we wschodniej Afryce. Turystów przyciągają <b>walory przyrodnicze</b>: sawanny pełne zwierząt w parkach narodowych (np. Masai Mara, Tsavo) – <b>safari</b>, plaże nad Oceanem Indyjskim, wulkany. Do tego <b>walory kulturowe</b>, np. tradycje Masajów.</p>
      <p>Turystyka daje pracę i pieniądze, także na ochronę przyrody.</p>`,
    remember: 'Walory przyrodnicze tworzy natura, kulturowe – ludzie.',
    hook: 'Wielka Piątka: lew, lampart, słoń, nosorożec, bawół – „5 gwiazd” safari.',
    check: { q: 'Który walor Kenii jest kulturowy?', options: ['sawanna', 'tradycje Masajów', 'plaże'], answer: 1, explain: 'Walory kulturowe to dzieła i tradycje ludzi.' },
  },
  {
    title: 'Dlaczego w Etiopii brakuje jedzenia',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przyczyny głodu: naturalne – susza, plagi owadów, choroby roślin; zależne od ludzi – wojny, duży przyrost naturalny, słabe rolnictwo, bieda">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f4 s4 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">naturalne</text><text x="297" y="38">ludzkie</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="80">☀️ susza</text><text x="102" y="115">🦗 plagi owadów</text><text x="102" y="150">🥀 choroby roślin</text>
        <text x="297" y="80">⚔️ wojny</text><text x="297" y="110">👶 duży przyrost</text><text x="297" y="140">🚜 słabe rolnictwo</text><text x="297" y="170">💸 bieda</text></g>
    </svg>`,
    text: `<p><b>Niedożywienie</b> to długotrwały brak kalorii i składników odżywczych, <b>głód</b> – czasowy brak pożywienia. Najbardziej dotyka Afrykę środkową i wschodnią, np. <b>Etiopię</b>.</p>
      <p>Przyczyny są <b>naturalne</b> (susza, plagi owadów) i <b>zależne od ludzi</b> (wojny, bardzo duży przyrost naturalny, słabo rozwinięte rolnictwo). Pomoc żywnościowa ratuje w kryzysie, ale trwale pomagają rozwój rolnictwa, drogi, szkoły i pokój.</p>`,
    remember: 'Głód = przyroda (susza) + ludzie (wojny, bieda, przyrost ludności).',
    check: { q: 'Która przyczyna głodu zależy od ludzi?', options: ['susza', 'plaga owadów', 'wojna'], answer: 2, explain: 'Wojny niszczą uprawy i drogi, wypędzają ludzi z domów.' },
  },
  {
    title: 'Tradycja i nowoczesność',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Gospodarka Afryki: rolnictwo żarowo-odłogowe na własne potrzeby, plantacje kawy i kakao na eksport, górnictwo złota i diamentów; hamulce: brak pieniędzy i wojny">
      <g class="sw"><rect x="10" y="10" width="120" height="140" rx="10" class="f4 s4"/><rect x="140" y="10" width="120" height="140" rx="10" class="f3 s3"/><rect x="270" y="10" width="120" height="140" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="36">tradycja</text><text x="200" y="36">plantacje</text><text x="330" y="36">górnictwo</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="75">🔥 wypalanie</text><text x="70" y="100">pole na kilka</text><text x="70" y="122">lat</text>
        <text x="200" y="75">☕ 🍫</text><text x="200" y="100">na eksport</text>
        <text x="330" y="75">💎 🪙</text><text x="330" y="100">surowce bez</text><text x="330" y="122">przetworzenia</text></g>
      <text x="200" y="185" class="tx" text-anchor="middle">🚧 hamulce: brak pieniędzy, wojny</text>
    </svg>`,
    text: `<p><b>Rolnictwo żarowo-odłogowe</b>: wypala się las, uprawia pole kilka lat, a gdy gleba się wyjałowi – przenosi się dalej. <b>Plantacje</b> to ogromne uprawy jednej rośliny (kawa, kakao, herbata) <b>na eksport</b> – nie karmią mieszkańców.</p>
      <p>Afryka ma bogate złoża (złoto, diamenty, ropa), ale często wywozi je nieprzetworzone. Bogatsze są kraje z górnictwem i przemysłem, np. <b>RPA</b>. Rozwój hamują brak pieniędzy i wojny.</p>`,
    remember: 'Afryka: najbiedniejszy kontynent; tradycyjne rolnictwo obok plantacji i górnictwa.',
    hook: 'Plantacja karmi sklepy w Europie, a nie rodzinę rolnika.',
    check: { q: 'Dlaczego plantacje nie poprawiają wyżywienia mieszkańców?', options: ['bo produkują głównie na eksport', 'bo są małe', 'bo nic na nich nie rośnie'], answer: 0, explain: 'Kawa czy kakao idą na sprzedaż za granicę.' },
  },
  {
    title: 'Nie pomyl pojęć',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Pary pojęć: walory przyrodnicze i kulturowe; niedożywienie i głód; rolnictwo żarowo-odłogowe i plantacyjne">
      <g class="sw"><rect x="10" y="10" width="185" height="58" rx="10" class="f3 s3"/><rect x="205" y="10" width="185" height="58" rx="10" class="f5 s5"/>
        <rect x="10" y="76" width="185" height="58" rx="10" class="f4 s4"/><rect x="205" y="76" width="185" height="58" rx="10" class="f2 s2"/>
        <rect x="10" y="142" width="185" height="58" rx="10" class="f1 s1"/><rect x="205" y="142" width="185" height="58" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="35">przyrodnicze</text><text x="297" y="35">kulturowe</text>
        <text x="102" y="101">niedożywienie</text><text x="297" y="101">głód</text>
        <text x="102" y="167">żarowo-odłogowe</text><text x="297" y="167">plantacyjne</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="56">dzieło natury</text><text x="297" y="56">dzieło ludzi</text>
        <text x="102" y="122">długotrwałe</text><text x="297" y="122">czasowe</text>
        <text x="102" y="188">na własne potrzeby</text><text x="297" y="188">na eksport</text></g>
    </svg>`,
    text: `<p>Walory <b>przyrodnicze</b> stworzyła natura (sawanna, plaże), <b>kulturowe</b> – ludzie (tradycje, zabytki). <b>Niedożywienie</b> trwa długo, <b>głód</b> to czasowy brak jedzenia.</p>
      <p>Rolnictwo <b>żarowo-odłogowe</b> żywi rodzinę rolnika, <b>plantacje</b> produkują na eksport. Oba sposoby mogą jałowić glebę i zmniejszać bioróżnorodność.</p>`,
    remember: 'Trzy pary: przyrodnicze/kulturowe, niedożywienie/głód, żarowo-odłogowe/plantacyjne.',
    check: { q: 'Co to jest niedożywienie?', options: ['czasowy brak jedzenia', 'długotrwały niedobór kalorii i składników odżywczych', 'jedzenie za dużo'], answer: 1, explain: 'Niedożywienie to stan długotrwały; głód – czasowy.' },
  },
];

window.LESSONS['geografia/ameryka-przyroda'] = [
  {
    title: 'Ameryka w przekroju',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przekrój Ameryki Północnej z zachodu na wschód: wysokie młode Kordyliery, niziny w środku, niższe stare Appalachy">
      <path d="M10,170 L30,120 L60,40 L90,90 L110,60 L140,140 L270,150 L300,120 L330,105 L360,140 L390,170 Z" class="f4 s4 sw"/>
      <line x1="10" y1="170" x2="390" y2="170" class="ln"/>
      <g class="tx-b" text-anchor="middle"><text x="80" y="25">Kordyliery</text><text x="205" y="128">niziny</text><text x="330" y="92">Appalachy</text></g>
      <g class="tx-s" text-anchor="middle"><text x="80" y="190">zachód – młode</text><text x="205" y="190">Missisipi</text><text x="330" y="190">wschód – stare</text></g>
    </svg>`,
    text: `<p>Obie Ameryki mają podobny plan: na <b>zachodzie</b> wysokie, młode góry (<b>Kordyliery</b> i <b>Andy</b> – razem najdłuższy system górski świata), w <b>środku</b> rozległe niziny (Missisipi, <b>Nizina Amazonki</b>), na <b>wschodzie</b> niższe, stare góry i wyżyny (Appalachy, Wyżyna Brazylijska).</p>
      <p>Wszystko biegnie <b>z północy na południe</b>. Ameryka ma też największą rozciągłość południkową – ponad 15 tys. km.</p>`,
    remember: 'Zachód – młode góry, środek – niziny, wschód – stare góry i wyżyny.',
    hook: 'Ameryka to kanapka ułożona pionowo.',
    check: { q: 'Gdzie w Ameryce Południowej są najwyższe góry?', options: ['na wschodzie', 'w środku – nad Amazonką', 'na zachodzie – Andy'], answer: 2, explain: 'Andy ciągną się wzdłuż zachodniego wybrzeża.' },
  },
  {
    title: 'Tornado kontra huragan',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Tornado: mały lej z chmury burzowej, powstaje przy zderzeniu ciepłego i zimnego powietrza nad lądem. Huragan: ogromny wir z okiem, powstaje nad ciepłym oceanem">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f5 s5 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">tornado</text><text x="297" y="36">huragan</text></g>
      <path d="M70,55 L135,55 L110,110 L106,140 L100,110 Z" class="f4 s4 sw"/>
      <circle cx="297" cy="95" r="45" class="f4 s4 sw"/><circle cx="297" cy="95" r="10" class="bg s4 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="102" y="165">mały, nad lądem</text><text x="102" y="185">zimne + ciepłe powietrze</text>
        <text x="297" y="165">setki km, oko w środku</text><text x="297" y="185">nad ciepłym oceanem</text></g>
    </svg>`,
    text: `<p><b>Tornado</b> to wąski lej z chmury burzowej. W USA powstaje, gdy ciepłe, wilgotne powietrze znad Zatoki Meksykańskiej zderza się z zimnym, suchym z północy – góry biegną południkowo, więc nic ich nie zatrzymuje. Najwięcej tornad jest w <b>Alei Tornad</b> (środek USA).</p>
      <p><b>Huragan</b> (cyklon tropikalny) powstaje nad <b>bardzo ciepłym oceanem</b>, ma setki kilometrów i „oko” w środku. Uderza w południowo-wschodnie wybrzeża USA.</p>`,
    remember: 'Tornado: małe, nad lądem. Huragan: ogromny, rodzi się nad ciepłym oceanem.',
    check: { q: 'Gdzie powstaje huragan?', options: ['nad ciepłym oceanem', 'nad pustynią', 'w Alei Tornad'], answer: 0, explain: 'Energię daje mu parująca ciepła woda oceanu.' },
  },
  {
    title: 'Amazonia: las czy pastwisko?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Waga: po jednej stronie korzyści gospodarcze – pastwiska, soja, drewno, kopalnie; po drugiej koszty ekologiczne – CO2, wymieranie gatunków, erozja, dom rdzennych mieszkańców">
      <line x1="200" y1="40" x2="200" y2="190" class="ln sw"/><line x1="60" y1="60" x2="340" y2="60" class="ln sw"/>
      <path d="M180,190 L220,190 L200,170 Z" class="f4 s4"/>
      <rect x="10" y="70" width="170" height="110" rx="10" class="f4 s4 sw"/><rect x="220" y="70" width="170" height="110" rx="10" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="95" y="95">gospodarka</text><text x="305" y="95">przyroda</text></g>
      <g class="tx-s" text-anchor="middle"><text x="95" y="120">🐄 pastwiska, soja</text><text x="95" y="142">🪵 drewno</text><text x="95" y="164">⛏️ kopalnie, drogi</text>
        <text x="305" y="120">🌫️ więcej CO₂</text><text x="305" y="142">🦜 wymieranie gatunków</text><text x="305" y="164">🏕️ dom Indian</text></g>
      <text x="200" y="28" class="tx" text-anchor="middle">⚖️ konflikt interesów</text>
    </svg>`,
    text: `<p>Wilgotny las równikowy nad Amazonką (<b>selwa</b>) to „<b>zielone płuca Ziemi</b>” i ogromna bioróżnorodność. Od lat 60. XX w. wycina się go i wypala pod <b>pastwiska dla bydła</b> i pola <b>soi</b>, dla drewna, kopalń i dróg.</p>
      <p>To daje dochody, ale powoduje <b>więcej CO<sub>2</sub></b>, wymieranie gatunków, erozję i niszczy dom rdzennych mieszkańców. To <b>konflikt interesów</b>.</p>`,
    remember: 'Wylesianie Amazonii: zysk gospodarczy kontra straty ekologiczne.',
    hook: 'Las wycięty dziś – klimat płaci jutro.',
    check: { q: 'Który skutek wylesiania Amazonii jest ekologiczny?', options: ['więcej miejsc pracy', 'utrata bioróżnorodności', 'większy eksport soi'], answer: 1, explain: 'Pozostałe odpowiedzi to korzyści gospodarcze.' },
  },
  {
    title: 'Jak się chronić przed żywiołem',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Skutki tornad i huraganów: zniszczone domy, powalone drzewa i linie energetyczne, powodzie. Ochrona: prognozy i ostrzeżenia, schrony, ewakuacja">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f2 s2 sw"/><rect x="205" y="10" width="185" height="180" rx="12" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">skutki</text><text x="297" y="36">ochrona</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="75">🏚️ zniszczone domy</text><text x="102" y="105">🌳 powalone drzewa</text><text x="102" y="135">⚡ zerwane linie</text><text x="102" y="165">🌊 powodzie</text>
        <text x="297" y="75">📡 prognozy</text><text x="297" y="105">📢 ostrzeżenia</text><text x="297" y="135">🛖 schrony</text><text x="297" y="165">🚗 ewakuacja</text></g>
    </svg>`,
    text: `<p>Tornada i huragany niszczą domy, drzewa i linie energetyczne, powodują powodzie i ofiary. Huragan nad wybrzeżem przynosi też ulewy i wysoką falę morską.</p>
      <p>Ochrona: <b>prognozy i ostrzeżenia</b>, <b>schrony</b> (w Alei Tornad są nawet podziemne), <b>ewakuacja</b> ludzi z wybrzeża przed huraganem.</p>`,
    remember: 'Żywiołu nie zatrzymasz – ale prognoza, schron i ewakuacja ratują życie.',
    check: { q: 'Co najlepiej chroni ludzi przed tornadem?', options: ['otwarte okna', 'wyjście na dach', 'schron i ostrzeżenia'], answer: 2, explain: 'Schron i wczesne ostrzeżenie dają szansę przetrwać.' },
  },
];

window.LESSONS['geografia/ameryka-ludnosc'] = [
  {
    title: 'Los rdzennych mieszkańców',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Oś czasu: przodkowie Indian przychodzą z Azji przez most lądowy w miejscu Cieśniny Beringa, od XV wieku podbój i kolonizacja, dziś rezerwaty i asymilacja">
      <defs><marker id="a-k8g-al-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="20" y1="90" x2="385" y2="90" class="ln sw" marker-end="url(#a-k8g-al-1)"/>
      <g class="sw"><circle cx="70" cy="90" r="10" class="f3 s3"/><circle cx="200" cy="90" r="10" class="f2 s2"/><circle cx="330" cy="90" r="10" class="f4 s4"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="60">dawno temu</text><text x="70" y="125">z Azji przez</text><text x="70" y="143">Cieśninę Beringa</text>
        <text x="200" y="60">od XV wieku</text><text x="200" y="125">podbój</text><text x="200" y="143">i kolonizacja</text>
        <text x="330" y="60">dziś</text><text x="330" y="125">rezerwaty,</text><text x="330" y="143">asymilacja</text></g>
    </svg>`,
    text: `<p>Rdzenni mieszkańcy Ameryki to <b>Indianie</b> i <b>Inuici</b>. Od XV wieku podbój i kolonizacja europejska wyniszczyły dużą część Indian; wypierano ich z ziem, przesiedlano i zamykano w <b>rezerwatach</b>.</p>
      <p>Dziś wielu się <b>zasymilowało</b>, a w rezerwatach często panują bieda i bezrobocie. W Amazonii wylesianie niszczy dom plemion indiańskich.</p>`,
    remember: 'Indianie i Inuici – rdzenni Amerykanie; ich kultury zanikały przez podbój i kolonizację.',
    check: { q: 'Kim są Inuici?', options: ['rdzennymi mieszkańcami Ameryki', 'imigrantami z Europy', 'mieszkańcami Australii'], answer: 0, explain: 'Indianie i Inuici to rdzenna ludność Ameryki.' },
  },
  {
    title: 'Megalopolis i slumsy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Po lewej megalopolis BosWash: miasta od Bostonu do Waszyngtonu zrośnięte w jeden pas. Po prawej slumsy: wielkie miasto z dzielnicami nędzy na obrzeżach">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f1 s1 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">megalopolis</text><text x="297" y="36">slumsy</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="70">Boston 🏙️</text><text x="102" y="100">Nowy Jork 🏙️</text><text x="102" y="130">Filadelfia 🏙️</text><text x="102" y="160">Waszyngton 🏙️</text>
        <text x="297" y="80">🏚️🏚️🏚️</text><text x="297" y="110">🏙️ centrum</text><text x="297" y="140">🏚️🏚️🏚️</text></g>
      <text x="102" y="188" class="tx-s" text-anchor="middle">BosWash</text><text x="297" y="180" class="tx-s" text-anchor="middle">fawele na obrzeżach</text>
    </svg>`,
    text: `<p><b>Megalopolis</b> to pas zrośniętych miast. <b>BosWash</b> – od Bostonu do Waszyngtonu – to największa struktura miejska świata; na zachodzie USA jest <b>SanSan</b>.</p>
      <p>W Ameryce Południowej ludzie ze wsi masowo przybywają do miast po pracę. Pracy i tanich mieszkań brakuje, więc budują prowizoryczne domy na obrzeżach – tak powstają <b>slumsy</b> (w Brazylii: <b>fawele</b>), bez wody, kanalizacji i szkół.</p>`,
    remember: 'BosWash = Boston + Washington. Slumsy: napływ ze wsi + brak pracy i mieszkań.',
    hook: 'Nazwy megalopolis to „sklejki”: Bos-Wash, San-San.',
    check: { q: 'Dlaczego powstają slumsy?', options: ['bo bogaci budują wille', 'bo ludzie ze wsi przybywają do miast, a brakuje pracy i tanich mieszkań', 'bo miasta się wyludniają'], answer: 1, explain: 'Przybysze bez pieniędzy sami budują prowizoryczne domy.' },
  },
  {
    title: 'Dolina Krzemowa – fabryka pomysłów',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Technopolia: uczelnie i ośrodki badawcze, firmy high-tech i inwestorzy współpracują – wiedza zamienia się w produkty">
      <defs><marker id="a-k8g-al-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="20" width="120" height="70" rx="10" class="f1 s1"/><rect x="270" y="20" width="120" height="70" rx="10" class="f3 s3"/><rect x="140" y="120" width="120" height="70" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="50">🎓 uczelnie</text><text x="70" y="75">badania</text><text x="330" y="50">💻 firmy</text><text x="330" y="75">high-tech</text><text x="200" y="150">💰 pieniądze</text><text x="200" y="175">inwestorzy</text></g>
      <g class="ln"><line x1="132" y1="55" x2="268" y2="55" marker-end="url(#a-k8g-al-3)"/><line x1="200" y1="118" x2="290" y2="92" marker-end="url(#a-k8g-al-3)"/></g>
      <text x="200" y="45" class="tx-s" text-anchor="middle">wiedza → produkty</text>
    </svg>`,
    text: `<p><b>Technopolia</b> łączy uczelnie, ośrodki badawcze i firmy <b>high-tech</b>. <b>Dolina Krzemowa</b> w Kalifornii (koło San Francisco) to najbardziej znana technopolia świata.</p>
      <p>Rozwinęła się dzięki uczelniom (zwłaszcza <b>Stanford</b>), specjalistom, pieniądzom na badania i nowe firmy oraz dobrym warunkom do życia. To przykład <b>gospodarki opartej na wiedzy</b>.</p>`,
    remember: 'Technopolia = nauka + firmy high-tech + pieniądze.',
    check: { q: 'Gdzie leży Dolina Krzemowa?', options: ['w Teksasie', 'na Florydzie', 'w Kalifornii'], answer: 2, explain: 'Na zachodnim wybrzeżu USA, koło San Francisco.' },
  },
  {
    title: 'Dlaczego USA są potęgą',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Czynniki potęgi USA: duże terytorium z dostępem do dwóch oceanów, bogate surowce i dobre gleby, imigranci, nauka i innowacje. Efekt: największa gospodarka świata">
      <g class="sw"><rect x="10" y="10" width="185" height="70" rx="10" class="f1 s1"/><rect x="205" y="10" width="185" height="70" rx="10" class="f3 s3"/>
        <rect x="10" y="90" width="185" height="70" rx="10" class="f4 s4"/><rect x="205" y="90" width="185" height="70" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="40">🌊 dwa oceany,</text><text x="102" y="64">duży kraj</text><text x="297" y="40">⛏️ surowce,</text><text x="297" y="64">żyzne gleby</text>
        <text x="102" y="120">🧳 imigranci</text><text x="102" y="144">przedsiębiorczy</text><text x="297" y="120">🔬 nauka,</text><text x="297" y="144">innowacje</text></g>
      <text x="200" y="190" class="tx-b" text-anchor="middle">= największa gospodarka świata</text>
    </svg>`,
    text: `<p><b>USA</b> to największa gospodarka świata. Większość ludzi pracuje w <b>usługach</b>; w rolnictwie – bardzo mało, ale dzięki maszynom USA są jednym z największych eksporterów żywności. Silny jest przemysł high-tech.</p>
      <p>Przyczyny: duże terytorium z dostępem do dwóch oceanów, surowce i żyzne gleby, napływ przedsiębiorczych <b>imigrantów</b>, nauka i innowacje.</p>`,
    remember: 'USA: 1. gospodarka świata; usługi, high-tech, nowoczesne rolnictwo.',
  },
];

window.LESSONS['geografia/australia'] = [
  {
    title: 'Suchy, mały kontynent',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Uproszczona mapa Australii: wschód – Wielkie Góry Wododziałowe i Góra Kościuszki, środek i zachód – pustynie, Wielki Basen Artezyjski pod ziemią, przez środek zwrotnik Koziorożca">
      <path d="M40,90 Q60,40 140,35 Q220,20 300,45 Q360,60 370,110 Q365,170 300,185 Q200,195 120,175 Q50,160 40,90 Z" class="f4 s4 sw"/>
      <path d="M330,55 Q360,90 355,140 Q345,170 320,180" class="s3 sw" fill="none"/>
      <line x1="20" y1="120" x2="390" y2="120" class="ln dash"/>
      <text x="160" y="140" class="tx-s" text-anchor="middle">zwrotnik Koziorożca</text>
      <text x="160" y="95" class="tx" text-anchor="middle">🏜️ pustynie</text>
      <text x="270" y="155" class="tx-s" text-anchor="middle">💧 basen artezyjski</text>
      <text x="318" y="200" class="tx-s" text-anchor="middle">⛰️ Góra Kościuszki</text>
    </svg>`,
    text: `<p><b>Australia</b> to <b>najmniejszy kontynent</b>, w całości na półkuli południowej. Przeważa klimat <b>zwrotnikowy suchy</b> – pustynie i półpustynie. Ok. 60% lądu nie ma stałych rzek.</p>
      <p>Wodę na farmy dają <b>baseny artezyjskie</b> – zbiorniki wód podziemnych. Na wschodzie są Wielkie Góry Wododziałowe z <b>Górą Kościuszki</b> – nazwę nadał jej Polak, <b>Paweł Edmund Strzelecki</b>.</p>`,
    remember: 'Australia: najmniejsza i bardzo sucha; woda z basenów artezyjskich.',
    hook: 'Na mapie Australii znajdziesz Polskę – Górę Kościuszki.',
    check: { q: 'Skąd farmy na suchych terenach Australii biorą wodę?', options: ['z basenów artezyjskich', 'z lodowców', 'z monsunów'], answer: 0, explain: 'Baseny artezyjskie to podziemne zbiorniki wody.' },
  },
  {
    title: 'Kangury, koale i dziobaki',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Endemity Australii: torbacze – kangur i koala; stekowce składające jaja – dziobak i kolczatka; roślina – eukaliptus">
      <g class="sw"><rect x="10" y="10" width="120" height="170" rx="10" class="f3 s3"/><rect x="140" y="10" width="120" height="170" rx="10" class="f1 s1"/><rect x="270" y="10" width="120" height="170" rx="10" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="38">torbacze</text><text x="200" y="38">stekowce</text><text x="330" y="38">rośliny</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="85">🦘 kangur</text><text x="70" y="120">🐨 koala</text>
        <text x="200" y="85">dziobak</text><text x="200" y="120">kolczatka</text><text x="200" y="155">🥚 jaja</text>
        <text x="330" y="85">🌳 eukaliptus</text><text x="330" y="120">akacje</text></g>
    </svg>`,
    text: `<p>Australia bardzo dawno oddzieliła się od innych lądów, więc ma mnóstwo <b>endemitów</b> – gatunków żyjących tylko tam.</p>
      <p><b>Torbacze</b> (kangury, koale) noszą młode w torbie. <b>Stekowce</b> (dziobak, kolczatka) to ssaki, które składają jaja. Typowe drzewa to <b>eukaliptusy</b> – ich liście jedzą koale.</p>`,
    remember: 'Endemit = gatunek żyjący tylko na jednym obszarze. Izolacja Australii → wiele endemitów.',
    check: { q: 'Który ssak składa jaja?', options: ['kangur', 'dziobak', 'koala'], answer: 1, explain: 'Dziobak i kolczatka to stekowce.' },
  },
  {
    title: 'Ludzie na brzegu, owce w środku',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Rozmieszczenie: miasta Sydney, Melbourne, Brisbane na południowo-wschodnim wybrzeżu, w środku owce i bydło, kopalnie; wnętrze prawie puste">
      <path d="M40,90 Q60,40 140,35 Q220,20 300,45 Q360,60 370,110 Q365,170 300,185 Q200,195 120,175 Q50,160 40,90 Z" class="f4 s4 sw"/>
      <g class="tx-s"><text x="300" y="100">Brisbane 🏙️</text><text x="290" y="150">Sydney 🏙️</text><text x="220" y="178">Melbourne 🏙️</text><text x="50" y="125">Perth 🏙️</text></g>
      <g class="tx" text-anchor="middle"><text x="200" y="80">🐑 🐄</text><text x="150" y="130">⛏️</text></g>
      <text x="200" y="15" class="tx-s" text-anchor="middle">ok. 3 osoby na 1 km² – bardzo mało</text>
    </svg>`,
    text: `<p>Australia jest <b>słabo zaludniona</b>. Ludzie mieszkają głównie w <b>miastach na wybrzeżu</b>, zwłaszcza na południowym wschodzie (Sydney, Melbourne), gdzie klimat jest łagodny. Rdzenni mieszkańcy, <b>Aborygeni</b>, zostali wyparci na obrzeża pustyń.</p>
      <p>Gospodarka: <b>górnictwo</b> (węgiel, rudy żelaza, złoto), <b>hodowla owiec</b> (wełna) i bydła, uprawa pszenicy. Australia <b>eksportuje głównie surowce</b>.</p>`,
    remember: 'Ludność na wybrzeżach; gospodarka: górnictwo + hodowla owiec i bydła.',
    hook: 'Australijczycy mieszkają „na brzegu talerza” – środek to pustynia.',
    check: { q: 'Gdzie mieszka najwięcej Australijczyków?', options: ['w środku kontynentu', 'na pustyni', 'na południowo-wschodnim wybrzeżu'], answer: 2, explain: 'Tam jest łagodny klimat i woda.' },
  },
  {
    title: 'Oceania – wyspy trzech rodzajów',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy rodzaje wysp Oceanii: kontynentalne – duże, np. Nowa Zelandia; wulkaniczne – wulkan wystający z oceanu; koralowe – atol, pierścień rafy z laguną">
      <rect x="10" y="120" width="380" height="60" class="f1"/>
      <path d="M20,120 Q60,60 120,120 Z" class="f3 s3 sw"/><path d="M160,120 L200,55 L240,120 Z" class="f2 s2 sw"/>
      <ellipse cx="320" cy="115" rx="50" ry="12" class="f4 s4 sw"/><ellipse cx="320" cy="115" rx="30" ry="6" class="f1"/>
      <g class="tx-s" text-anchor="middle"><text x="70" y="150">kontynentalne</text><text x="200" y="150">wulkaniczne</text><text x="320" y="150">koralowe (atol)</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="170">Nowa Zelandia</text><text x="200" y="170">styk płyt</text><text x="320" y="170">ciepła woda</text></g>
    </svg>`,
    text: `<p><b>Oceania</b> to tysiące wysp na Oceanie Spokojnym. Duże wyspy (Nowa Zelandia, Nowa Gwinea) są <b>kontynentalne</b>. Małe wyspy są <b>wulkaniczne</b> (na styku płyt) albo <b>koralowe</b> – atole zbudowane przez koralowce w ciepłej wodzie.</p>`,
    remember: 'Wyspy Oceanii: kontynentalne, wulkaniczne, koralowe.',
  },
];

window.LESSONS['geografia/polarne'] = [
  {
    title: 'Dwa bieguny, dwa światy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Arktyka: ocean pokryty lodem morskim, wokół lądy, niedźwiedź polarny. Antarktyka: kontynent Antarktyda pod lądolodem, pingwiny">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f1 s1 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">Arktyka (N)</text><text x="297" y="36">Antarktyka (S)</text></g>
      <circle cx="102" cy="100" r="40" class="f1 s1 sw dash"/><circle cx="297" cy="100" r="40" class="bg s5 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="102" y="96">ocean</text><text x="102" y="112">+ lód</text><text x="297" y="96">ląd</text><text x="297" y="112">+ lądolód</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="170">🐻‍❄️ niedźwiedź</text><text x="297" y="170">🐧 pingwin</text></g>
    </svg>`,
    text: `<p><b>Arktyka</b> (północ) to głównie <b>ocean</b> pokryty lodem morskim, otoczony lądami i <b>Grenlandią</b> – największą wyspą świata. Żyją tu niedźwiedzie polarne i ludzie (np. Inuici).</p>
      <p><b>Antarktyka</b> (południe) to <b>kontynent Antarktyda</b> pod grubym <b>lądolodem</b> (ok. 96% powierzchni) – w nim ok. <b>70% słodkiej wody</b> Ziemi. To najzimniejsze miejsce (−89,2°C w stacji Wostok). Żyją tu pingwiny, ale nie ma stałych mieszkańców.</p>`,
    remember: 'Arktyka = ocean otoczony lądem. Antarktyka = ląd otoczony oceanem.',
    hook: 'Misie na północy, pingwiny na południu – nigdy się nie spotkają.',
    check: { q: 'Gdzie żyją pingwiny?', options: ['w Antarktyce', 'w Arktyce', 'na Grenlandii'], answer: 0, explain: 'Pingwiny żyją na półkuli południowej, m.in. w Antarktyce.' },
  },
  {
    title: 'Kontynent nauki i pokoju',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Układ Antarktyczny z 1959 roku: obszar na południe od 60 stopni szerokości południowej, tylko nauka i pokój, bez wojska, roszczenia zamrożone, ochrona przyrody; polska stacja imienia Arctowskiego">
      <circle cx="110" cy="105" r="75" class="f1 s1 sw dash"/><circle cx="110" cy="105" r="42" class="bg s5 sw"/>
      <text x="110" y="110" class="tx-s" text-anchor="middle">Antarktyda</text>
      <text x="110" y="20" class="tx-s" text-anchor="middle">60°S</text>
      <g class="tx"><text x="215" y="45">📜 1959</text><text x="215" y="75">🔬 nauka</text><text x="215" y="105">🕊️ pokój, bez wojska</text><text x="215" y="135">🚫 bez podziału</text><text x="215" y="165">🇵🇱 st. Arctowskiego</text></g>
    </svg>`,
    text: `<p>W <b>1959 r.</b> podpisano <b>Układ Antarktyczny</b>. Obejmuje obszar na południe od <b>60°S</b>. Antarktyda służy tylko <b>nauce i pokojowi</b>: nie ma tu wojska, roszczenia terytorialne są zamrożone, a przyrodę trzeba chronić.</p>
      <p>To ważne, bo Antarktyda to delikatny ekosystem, magazyn słodkiej wody i ogromne laboratorium. Polska ma tu stację im. <b>Henryka Arctowskiego</b>. Sytuacja prawna Oceanu Arktycznego nie jest w pełni uregulowana.</p>`,
    remember: 'Układ Antarktyczny (1959): nauka, pokój, ochrona przyrody, Antarktyda niczyja.',
    check: { q: 'Do czego według Układu Antarktycznego służy Antarktyda?', options: ['do celów wojskowych', 'tylko do celów pokojowych i naukowych', 'do wydobycia ropy przez każdy kraj'], answer: 1, explain: 'Antarktyda jest zdemilitaryzowana i przeznaczona dla nauki.' },
  },
  {
    title: 'Topniejące bieguny',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Błędne koło: ocieplenie topi biały lód, odsłania się ciemna woda, która pochłania więcej ciepła, co jeszcze bardziej ociepla; topnienie lądolodów podnosi poziom mórz, rozmarzająca zmarzlina uwalnia metan">
      <defs><marker id="a-k8g-pol-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="130" y="10" width="140" height="44" rx="10" class="f2 s2"/><rect x="260" y="90" width="130" height="44" rx="10" class="f1 s1"/><rect x="130" y="166" width="140" height="44" rx="10" class="f5 s5"/><rect x="10" y="90" width="130" height="44" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="200" y="38">🌡️ ocieplenie</text><text x="325" y="118">🧊 mniej lodu</text><text x="200" y="194">🌊 ciemna woda</text><text x="75" y="112">więcej ciepła</text></g>
      <g class="ln"><path d="M272,40 Q320,45 325,86" marker-end="url(#a-k8g-pol-3)"/><path d="M325,138 Q320,180 274,188" marker-end="url(#a-k8g-pol-3)"/>
        <path d="M126,188 Q80,180 75,138" marker-end="url(#a-k8g-pol-3)"/><path d="M75,86 Q80,45 126,40" marker-end="url(#a-k8g-pol-3)"/></g>
      <text x="200" y="116" class="tx-s" text-anchor="middle">błędne koło</text>
    </svg>`,
    text: `<p><b>Arktyka ociepla się najszybciej</b>: lodu morskiego jest latem coraz mniej, a lód jest cieńszy. Biały lód odbija światło, a ciemna woda je pochłania – więc ocieplenie przyspiesza.</p>
      <p>Topnieje <b>lądolód Grenlandii</b> – <b>podnosi się poziom mórz</b>. Rozmarza <b>wieloletnia zmarzlina</b> i uwalnia metan. Niedźwiedzie polarne i foki tracą lód, na którym polują i żyją.</p>`,
    remember: 'Skutki ocieplenia: mniej lodu morskiego, topnienie lądolodów, wyższy poziom mórz, rozmarzanie zmarzliny.',
    check: { q: 'Jak topnienie lądolodów wpływa na oceany?', options: ['obniża poziom mórz', 'nie ma wpływu', 'podnosi poziom mórz'], answer: 2, explain: 'Woda z lądolodów spływa do oceanu.' },
  },
  {
    title: 'Pułapki polarne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pułapki: Arktyka to ocean, Antarktyda to ląd; niedźwiedzie polarne na północy, pingwiny na południu; Antarktyda nie należy do żadnego państwa">
      <g class="sw"><rect x="10" y="10" width="380" height="55" rx="10" class="f1 s1"/><rect x="10" y="72" width="380" height="55" rx="10" class="f5 s5"/><rect x="10" y="134" width="380" height="55" rx="10" class="f3 s3"/></g>
      <g class="tx"><text x="25" y="44">🌊 Arktyka = ocean, Antarktyda = ląd</text><text x="25" y="106">🐻‍❄️ północ · 🐧 południe</text><text x="25" y="168">🏳️ Antarktyda nie należy do nikogo</text></g>
    </svg>`,
    text: `<p>Nie myl: <b>Arktyka</b> to przede wszystkim ocean z lodem morskim, a <b>Antarktyda</b> – kontynent pod lądolodem. Niedźwiedzie polarne żyją na północy, pingwiny – na południu.</p>
      <p>Antarktyda <b>nie należy do żadnego państwa</b> – tak ustala Układ Antarktyczny. Topnienie <b>lodu morskiego</b> samo prawie nie podnosi poziomu mórz, ale topnienie <b>lądolodów</b> (Grenlandia, Antarktyda) – tak.</p>`,
    remember: 'Poziom mórz podnosi przede wszystkim topnienie lądolodów.',
    check: { q: 'Do kogo należy Antarktyda?', options: ['do nikogo – roszczenia są zamrożone', 'do Polski', 'do USA'], answer: 0, explain: 'Układ Antarktyczny zamroził roszczenia terytorialne.' },
  },
];
