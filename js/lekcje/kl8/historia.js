/* Lekcje – historia, klasa 8 (Dz.U. 2024 poz. 996, historia, dz. XXXI–XLI).
 * Klucz: 'historia/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['historia/wrzesien-1939'] = [
  {
    title: 'Pakt dwóch wrogów',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Mapa-schemat: Niemcy na zachodzie i ZSRS na wschodzie, między nimi Polska przecięta linią podziału z tajnego protokołu paktu Ribbentrop–Mołotow z 23 sierpnia 1939 roku">
      <rect x="10" y="40" width="110" height="120" rx="10" class="f4 s4 sw"/><rect x="280" y="40" width="110" height="120" rx="10" class="f2 s2 sw"/>
      <rect x="130" y="40" width="140" height="120" rx="10" class="pl-w ln"/><rect x="130" y="100" width="140" height="60" class="pl-r"/>
      <rect x="130" y="40" width="140" height="120" rx="10" class="ln" fill="none"/>
      <line x1="200" y1="30" x2="200" y2="170" class="ln sw dash"/>
      <g class="tx-b" text-anchor="middle"><text x="65" y="105">Niemcy</text><text x="335" y="105">ZSRS</text></g>
      <text x="200" y="24" class="tx-s" text-anchor="middle">tajny protokół</text>
      <text x="200" y="192" class="tx" text-anchor="middle">23 VIII 1939 – pakt Ribbentrop–Mołotow</text>
    </svg>`,
    text: `<p><b>23 sierpnia 1939 r.</b> Niemcy i ZSRS zawarły pakt o nieagresji. W <b>tajnym protokole</b> podzieliły Europę Środkową na strefy wpływów – granica w Polsce miała biec mniej więcej wzdłuż Narwi, Wisły i Sanu.</p>
      <p>Polska miała sojusze z Francją i Wielką Brytanią, ale znalazła się między dwoma wrogami, którzy się porozumieli.</p>`,
    remember: 'Pakt Ribbentrop–Mołotow (23 VIII 1939) = zapowiedź podziału Polski.',
    hook: 'Ribbentrop + Mołotow = „R+M”: Rzesza i Moskwa dzielą mapę.',
    check: { q: 'Co zawierał tajny protokół paktu Ribbentrop–Mołotow?', options: ['podział stref wpływów', 'sojusz z Polską', 'plan pokoju'], answer: 0, explain: 'Niemcy i ZSRS potajemnie podzieliły między siebie m.in. ziemie Polski.' },
  },
  {
    title: 'Wrzesień na osi czasu',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Oś czasu września 1939: 1 września atak Niemiec i Westerplatte, 3 września Francja i Wielka Brytania wypowiadają wojnę, 9 września bitwa nad Bzurą, 17 września atak ZSRS, 28 września kapitulacja Warszawy, początek października Kock">
      <defs><marker id="a-k8h-wrz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="100" x2="410" y2="100" class="ln sw" marker-end="url(#a-k8h-wrz-2)"/>
      <g class="sw"><circle cx="30" cy="100" r="8" class="f2 s2"/><circle cx="90" cy="100" r="7" class="f1 s1"/><circle cx="150" cy="100" r="7" class="f1 s1"/><circle cx="230" cy="100" r="8" class="f2 s2"/><circle cx="315" cy="100" r="7" class="f1 s1"/><circle cx="385" cy="100" r="7" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="30" y="75">1 IX</text><text x="150" y="75">9 IX</text><text x="315" y="75">28 IX</text>
        <text x="90" y="140">3 IX</text><text x="230" y="140">17 IX</text><text x="385" y="140">X</text></g>
      <g class="tx-s" text-anchor="middle"><text x="30" y="52">Niemcy</text><text x="150" y="52">Bzura</text><text x="315" y="52">Warszawa</text>
        <text x="90" y="160">Francja,</text><text x="90" y="176">W. Brytania</text><text x="230" y="160">ZSRS</text><text x="385" y="160">Kock</text></g>
    </svg>`,
    text: `<p><b>1 września</b> Niemcy zaatakowały – ostrzał Westerplatte, bombardowanie Wielunia. <b>3 września</b> Francja i Wielka Brytania wypowiedziały wojnę Niemcom, ale nie pomogły („dziwna wojna”).</p>
      <p>Największa bitwa – <b>nad Bzurą</b>. <b>17 września</b> zaatakował ZSRS. <b>28 września</b> skapitulowała Warszawa, a na początku października pod <b>Kockiem</b> stoczono ostatnią bitwę.</p>`,
    remember: '1 IX – Niemcy, 17 IX – ZSRS, 28 IX – Warszawa.',
    check: { q: 'Która bitwa była największą bitwą kampanii wrześniowej?', options: ['pod Kockiem', 'nad Bzurą', 'na Westerplatte'], answer: 1, explain: 'Bitwa nad Bzurą była największą bitwą wojny obronnej.' },
  },
  {
    title: 'Bohaterowie września',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przykłady bohaterstwa: Westerplatte – tydzień obrony, Poczta Polska w Gdańsku, Wizna – polskie Termopile, obrona Warszawy przez żołnierzy i cywilów">
      <g class="sw"><rect x="10" y="10" width="185" height="90" rx="10" class="f1 s1"/><rect x="205" y="10" width="185" height="90" rx="10" class="f3 s3"/>
        <rect x="10" y="110" width="185" height="90" rx="10" class="f4 s4"/><rect x="205" y="110" width="185" height="90" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="45">Westerplatte</text><text x="297" y="45">Poczta Polska</text><text x="102" y="145">Wizna</text><text x="297" y="145">Warszawa</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="72">7 dni, mjr Sucharski</text><text x="297" y="72">obrona gmachu w Gdańsku</text><text x="102" y="172">„polskie Termopile”</text><text x="297" y="172">żołnierze i cywile</text></g>
    </svg>`,
    text: `<p>Mimo przewagi wroga Polacy bronili się bohatersko: załoga <b>Westerplatte</b> przez tydzień, pocztowcy w <b>Gdańsku</b>, kpt. Raginis pod <b>Wizną</b>, żołnierze i mieszkańcy <b>Warszawy</b>. Walczono też z Sowietami, np. w obronie Grodna.</p>`,
    remember: 'Bohaterstwo wykazali i żołnierze, i cywile (pocztowcy, harcerze, mieszkańcy miast).',
    hook: 'Westerplatte: „siedem dni” – jak tydzień w kalendarzu.',
  },
  {
    title: 'Dlaczego przegraliśmy',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przyczyny klęski: przewaga Niemiec i ZSRS w ludziach i sprzęcie, atak z kilku stron, bierność sojuszników">
      <g class="sw"><rect x="10" y="10" width="120" height="180" rx="10" class="f2 s2"/><rect x="140" y="10" width="120" height="180" rx="10" class="f4 s4"/><rect x="270" y="10" width="120" height="180" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="60">⚔️</text><text x="200" y="60">🧭</text><text x="330" y="60">🤝❌</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="100">przewaga</text><text x="70" y="120">wroga</text><text x="70" y="140">(ludzie, sprzęt)</text>
        <text x="200" y="100">atak</text><text x="200" y="120">z kilku stron</text>
        <text x="330" y="100">bierność</text><text x="330" y="120">sojuszników</text></g>
    </svg>`,
    text: `<p>O klęsce zdecydowały: ogromna <b>przewaga Niemiec i ZSRS</b>, atak <b>z kilku stron</b> naraz i <b>bierność sojuszników</b>. Mimo to Polska broniła się ponad miesiąc.</p>
      <p>Pułapka: nie myl agresorów z sojusznikami – Francja i Wielka Brytania były sojusznikami, Niemcy i ZSRS – agresorami.</p>`,
    remember: 'Klęska: dwóch agresorów + brak realnej pomocy sojuszników.',
    check: { q: 'Która przyczyna klęski wrześniowej jest prawdziwa?', options: ['brak polskiego wojska', 'atak Francji', 'bierność sojuszników'], answer: 2, explain: 'Francja i Wielka Brytania nie podjęły poważnych działań.' },
  },
];

window.LESSONS['historia/ii-wojna'] = [
  {
    title: 'Od Polski do Hiroszimy',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Oś czasu II wojny światowej: 1939 Polska, 1940 Francja i bitwa o Anglię, 1941 atak na ZSRS i Pearl Harbor, 1943 Stalingrad, 1944 Normandia, 1945 kapitulacja Niemiec 8 maja i Japonii 2 września">
      <defs><marker id="a-k8h-ii-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="110" x2="410" y2="110" class="ln sw" marker-end="url(#a-k8h-ii-1)"/>
      <g class="sw f4 s4"><circle cx="30" cy="110" r="7"/><circle cx="95" cy="110" r="7"/><circle cx="160" cy="110" r="7"/><circle cx="235" cy="110" r="7"/><circle cx="305" cy="110" r="7"/><circle cx="380" cy="110" r="7"/></g>
      <g class="tx-b" text-anchor="middle"><text x="30" y="90">1939</text><text x="95" y="140">1940</text><text x="160" y="90">1941</text><text x="235" y="140">1943</text><text x="305" y="90">1944</text><text x="380" y="140">1945</text></g>
      <g class="tx-s" text-anchor="middle"><text x="30" y="65">Polska</text><text x="95" y="160">Francja,</text><text x="95" y="176">Anglia</text>
        <text x="160" y="50">ZSRS,</text><text x="160" y="66">Pearl Harbor</text><text x="235" y="160">Stalingrad</text>
        <text x="305" y="65">Normandia</text><text x="380" y="160">8 V Niemcy,</text><text x="380" y="176">2 IX Japonia</text></g>
    </svg>`,
    text: `<p>Po Polsce Niemcy zajęli m.in. Francję, ale przegrali <b>bitwę o Anglię</b>. W <b>1941</b> zaatakowali ZSRS, a Japonia – amerykańską bazę <b>Pearl Harbor</b>: do wojny weszły USA.</p>
      <p><b>Stalingrad</b> (kapitulacja Niemców 31 I 1943) to przełom na wschodzie. <b>6 VI 1944</b> – lądowanie w <b>Normandii</b>. <b>8 V 1945</b> skapitulowały Niemcy, a <b>2 IX 1945</b> – Japonia, po zrzuceniu bomb atomowych na Hiroszimę i Nagasaki.</p>`,
    remember: 'Przełom: Stalingrad. Drugi front: Normandia. Koniec: 8 V (Europa) i 2 IX 1945 (cała wojna).',
    hook: 'Pearl Harbor „obudził” USA – i to przechyliło szalę.',
    check: { q: 'Które wydarzenie wciągnęło USA do wojny?', options: ['atak na Pearl Harbor', 'bitwa o Anglię', 'atak na Polskę'], answer: 0, explain: '7 grudnia 1941 r. Japonia zaatakowała Pearl Harbor.' },
  },
  {
    title: 'Dlaczego Oś przegrała',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Waga: po stronie aliantów przemysł USA, ludzie ZSRS, wiele frontów; po stronie Osi Niemcy, Włochy, Japonia – szala przechyla się na korzyść aliantów">
      <line x1="200" y1="30" x2="200" y2="170" class="ln sw"/><line x1="60" y1="70" x2="340" y2="40" class="ln sw"/>
      <rect x="10" y="80" width="150" height="90" rx="10" class="f3 s3 sw"/><rect x="250" y="50" width="140" height="80" rx="10" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="85" y="105">alianci</text><text x="320" y="75">Oś</text></g>
      <g class="tx-s" text-anchor="middle"><text x="85" y="128">🏭 przemysł USA</text><text x="85" y="148">👥 ludzie ZSRS</text><text x="85" y="166">🌍 wiele frontów</text>
        <text x="320" y="98">Niemcy, Włochy,</text><text x="320" y="116">Japonia</text></g>
    </svg>`,
    text: `<p><b>Państwa Osi</b> (Niemcy, Włochy, Japonia) przegrały, bo alianci mieli <b>ogromną przewagę gospodarczą</b> (USA – „arsenał demokracji”), wielkie zasoby ludzkie ZSRS, a Oś musiała walczyć na <b>wielu frontach</b> naraz.</p>`,
    remember: 'Klęska Osi: przewaga gospodarcza aliantów i wojna na wielu frontach.',
  },
  {
    title: 'Wielka Trójka decyduje',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy konferencje: Teheran 1943 – drugi front i linia Curzona; Jałta luty 1945 – Tymczasowy Rząd Jedności Narodowej, Polska w strefie ZSRS; Poczdam lato 1945 – granica na Odrze i Nysie, wysiedlenie Niemców">
      <g class="sw"><rect x="5" y="10" width="132" height="190" rx="10" class="f1 s1"/><rect x="144" y="10" width="132" height="190" rx="10" class="f5 s5"/><rect x="283" y="10" width="132" height="190" rx="10" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="71" y="38">Teheran</text><text x="210" y="38">Jałta</text><text x="349" y="38">Poczdam</text></g>
      <g class="tx-s" text-anchor="middle"><text x="71" y="58">koniec 1943</text><text x="210" y="58">luty 1945</text><text x="349" y="58">lato 1945</text>
        <text x="71" y="95">drugi front</text><text x="71" y="115">(Normandia)</text><text x="71" y="145">linia Curzona</text>
        <text x="210" y="95">linia Curzona</text><text x="210" y="115">TRJN</text><text x="210" y="145">Polska</text><text x="210" y="163">w strefie ZSRS</text>
        <text x="349" y="95">Odra i Nysa</text><text x="349" y="115">Łużycka</text><text x="349" y="145">wysiedlenie</text><text x="349" y="163">Niemców</text></g>
    </svg>`,
    text: `<p>O losach świata decydowała <b>Wielka Trójka</b>: przywódcy USA, Wielkiej Brytanii i ZSRS. W <b>Teheranie</b> i <b>Jałcie</b> zgodzili się na wschodnią granicę Polski na <b>linii Curzona</b> i na Polskę w strefie wpływów ZSRS – bez zgody rządu polskiego.</p>
      <p>W <b>Poczdamie</b> ustalono zachodnią granicę na <b>Odrze i Nysie Łużyckiej</b>, wysiedlenie Niemców i podział Niemiec na 4 strefy okupacyjne.</p>`,
    remember: 'T-J-P: Teheran (1943), Jałta (II 1945), Poczdam (lato 1945).',
    hook: 'Granica wschodnia – na wschodzie (Teheran i Jałta leżą na wschód), zachodnia – w Poczdamie, w Niemczech.',
    check: { q: 'Gdzie ustalono zachodnią granicę Polski na Odrze i Nysie Łużyckiej?', options: ['w Teheranie', 'w Poczdamie', 'w Jałcie'], answer: 1, explain: 'Na konferencji w Poczdamie latem 1945 r.' },
  },
  {
    title: 'Polska przesunięta na zachód',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: kontur Polski przed wojną i po wojnie przesunięty na zachód; strzałki pokazują przesiedlenia Polaków z Kresów na zachód i wysiedlenia Niemców">
      <defs><marker id="a-k8h-ii-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="150" y="40" width="180" height="120" rx="10" class="dash s4 sw" fill="none"/>
      <rect x="80" y="50" width="170" height="110" rx="10" class="f3 s3 sw" fill-opacity="0.7"/>
      <text x="290" y="35" class="tx-s" text-anchor="middle">przed wojną</text>
      <text x="112" y="110" class="tx-b" text-anchor="middle">po wojnie</text>
      <line x1="390" y1="180" x2="330" y2="180" class="ln sw" marker-end="url(#a-k8h-ii-4)"/><text x="322" y="185" class="tx-s" text-anchor="end">Polacy z Kresów</text>
      <line x1="80" y1="25" x2="20" y2="25" class="ln sw" marker-end="url(#a-k8h-ii-4)"/><text x="85" y="30" class="tx-s">Niemcy</text>
    </svg>`,
    text: `<p>Po wojnie Polska straciła <b>Kresy Wschodnie</b> na rzecz ZSRS, a otrzymała ziemie poniemieckie na zachodzie i północy. Miliony ludzi musiały się <b>przesiedlić</b>: Polacy z Kresów jechali na zachód, a Niemców wysiedlano.</p>
      <p>Skutki wojny to też ogromne straty ludzkie i zniszczenia, podział Europy i powstanie ONZ.</p>`,
    remember: 'Zmiana granic + przesiedlenia = bezpośredni skutek wojny dla Polski.',
    check: { q: 'Jak zmieniły się granice Polski po wojnie?', options: ['przesunęły się na wschód', 'nie zmieniły się', 'przesunęły się na zachód'], answer: 2, explain: 'Polska straciła Kresy, a zyskała ziemie poniemieckie.' },
  },
];

window.LESSONS['historia/holokaust'] = [
  {
    title: 'Ideologia nienawiści',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Rasistowska hierarchia nazistów: Niemcy jako rasa panów na górze, Słowianie jako tania siła robocza, Żydzi i Romowie przeznaczeni do zagłady – to kłamstwo, które doprowadziło do ludobójstwa">
      <g class="sw"><rect x="120" y="10" width="160" height="44" rx="8" class="f4 s4"/><rect x="90" y="64" width="220" height="44" rx="8" class="f2 s2"/><rect x="60" y="118" width="280" height="44" rx="8" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="200" y="38">„rasa panów”</text><text x="200" y="92">Słowianie – „siła robocza”</text><text x="200" y="146">Żydzi, Romowie – zagłada</text></g>
      <text x="360" y="95" class="tx-b" text-anchor="middle">❌</text>
    </svg>`,
    text: `<p>Naziści głosili, że Niemcy są „rasą panów”, a inne narody są gorsze. <b>Żydów</b> i <b>Romów</b> chcieli wymordować, a Słowian – w tym Polaków – traktowali jak „podludzi” i tanią siłę roboczą. Ta rasistowska ideologia była podstawą zbrodni.</p>`,
    remember: 'Holokaust wyrósł z rasizmu i antysemityzmu nazistów.',
  },
  {
    title: 'Trzy etapy Zagłady',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Etapy: getta – zamknięcie Żydów w dzielnicach; masowe egzekucje; obozy zagłady, m.in. Chełmno, Bełżec, Sobibór, Treblinka, Auschwitz-Birkenau">
      <defs><marker id="a-k8h-hol-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="20" width="110" height="80" rx="10" class="f4 s4"/><rect x="145" y="20" width="110" height="80" rx="10" class="f2 s2"/><rect x="280" y="20" width="110" height="80" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="65" y="55">1. getta</text><text x="200" y="55">2. egzekucje</text><text x="335" y="55">3. obozy</text></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="80">zamknięcie</text><text x="200" y="80">masowe</text><text x="335" y="80">zagłady</text></g>
      <g class="ln"><line x1="122" y1="60" x2="143" y2="60" marker-end="url(#a-k8h-hol-2)"/><line x1="257" y1="60" x2="278" y2="60" marker-end="url(#a-k8h-hol-2)"/></g>
      <text x="200" y="140" class="tx" text-anchor="middle">Chełmno · Bełżec · Sobibór</text>
      <text x="200" y="165" class="tx" text-anchor="middle">Treblinka · Auschwitz-Birkenau</text>
    </svg>`,
    text: `<p>Najpierw Niemcy zamykali Żydów w <b>gettach</b>, gdzie panował głód i choroby. Potem prowadzili <b>masowe egzekucje</b>, a od grudnia 1941 r. zakładali <b>obozy zagłady</b> na okupowanych ziemiach polskich – największym był <b>Auschwitz-Birkenau</b>.</p>
      <p>Zamordowano ok. <b>6 milionów Żydów</b>. Ofiarami ludobójstwa byli też Romowie. W getcie warszawskim w kwietniu 1943 r. wybuchło powstanie (Mordechaj Anielewicz).</p>`,
    remember: 'Obozy zagłady założyli i prowadzili Niemcy – na okupowanych przez siebie ziemiach.',
    check: { q: 'Który obóz zagłady był największy?', options: ['Auschwitz-Birkenau', 'Chełmno', 'Sobibór'], answer: 0, explain: 'W Auschwitz-Birkenau zabito najwięcej ludzi.' },
  },
  {
    title: 'Pomoc mimo kary śmierci',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="W okupowanej Polsce za pomoc Żydom groziła kara śmierci. Mimo to działała Żegota, Irena Sendlerowa ratowała żydowskie dzieci, rodzina Ulmów zginęła za ukrywanie Żydów">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f2 s2 sw"/>
      <text x="200" y="42" class="tx-b" text-anchor="middle">⚠️ za pomoc Żydom – kara śmierci</text>
      <g class="sw"><rect x="10" y="75" width="120" height="115" rx="10" class="f3 s3"/><rect x="140" y="75" width="120" height="115" rx="10" class="f3 s3"/><rect x="270" y="75" width="120" height="115" rx="10" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="110">„Żegota”</text><text x="200" y="110">Sendlerowa</text><text x="330" y="110">Ulmowie</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="140">Rada Pomocy</text><text x="70" y="158">Żydom, 1942</text><text x="200" y="140">ratowała</text><text x="200" y="158">żydowskie dzieci</text><text x="330" y="140">zamordowani</text><text x="330" y="158">za pomoc</text></g>
    </svg>`,
    text: `<p>W okupowanej Polsce za ukrywanie Żydów groziła <b>kara śmierci</b> – często całej rodzinie. Mimo to wielu Polaków pomagało. Państwo podziemne utworzyło w 1942 r. <b>Radę Pomocy Żydom „Żegota”</b>; <b>Irena Sendlerowa</b> ratowała żydowskie dzieci; rodzina <b>Ulmów</b> z Markowej zginęła za ukrywanie Żydów.</p>`,
    remember: 'Polacy są najliczniejszą grupą wśród Sprawiedliwych wśród Narodów Świata.',
    hook: '„Żegota” to kryptonim – pomoc musiała być tajna, bo groziła za nią śmierć.',
    check: { q: 'Czym była „Żegota”?', options: ['niemieckim obozem', 'Radą Pomocy Żydom', 'gazetą okupanta'], answer: 1, explain: 'Działała w ramach polskiego państwa podziemnego od 1942 r.' },
  },
  {
    title: 'Różne postawy',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Postawy wobec Holokaustu: pomoc, obojętność, szmalcownictwo – donoszenie i szantaż, karane przez państwo podziemne">
      <g class="sw"><rect x="10" y="20" width="120" height="140" rx="10" class="f3 s3"/><rect x="140" y="20" width="120" height="140" rx="10" class="f4 s4"/><rect x="270" y="20" width="120" height="140" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="55">pomoc</text><text x="200" y="55">obojętność</text><text x="330" y="55">szmalcownicy</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="100">🤝</text><text x="200" y="100">😶</text><text x="330" y="100">💰</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="135">ukrywanie,</text><text x="70" y="151">dokumenty</text><text x="200" y="135">strach,</text><text x="200" y="151">bierność</text><text x="330" y="135">karane przez</text><text x="330" y="151">podziemie</text></g>
    </svg>`,
    text: `<p>Postawy Polaków były <b>różne</b>: jedni ratowali Żydów, narażając życie, inni byli obojętni lub bali się, a nieliczni <b>szmalcownicy</b> szantażowali i wydawali ukrywających się. Państwo podziemne wydawało na szmalcowników wyroki śmierci.</p>`,
    remember: 'Nie ma jednej „postawy Polaków” – była pomoc, obojętność i zdrada.',
  },
];

window.LESSONS['historia/okupacja'] = [
  {
    title: 'Dwóch okupantów',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie okupacji: niemiecka – ziemie wcielone do Rzeszy i Generalne Gubernatorstwo, kryterium narodowe; sowiecka – ziemie wcielone do ZSRS, kryterium klasowe; cel obu – zniszczenie elit">
      <rect x="10" y="10" width="185" height="140" rx="12" class="f4 s4 sw"/><rect x="205" y="10" width="185" height="140" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">Niemcy</text><text x="297" y="38">ZSRS</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="66">Rzesza +</text><text x="102" y="84">Generalne Gubernatorstwo</text><text x="102" y="118">kryterium: narodowe</text>
        <text x="297" y="66">ziemie wcielone</text><text x="297" y="84">do ZSRS</text><text x="297" y="118">kryterium: klasowe</text></g>
      <rect x="60" y="160" width="280" height="34" rx="8" class="f5 s5 sw"/>
      <text x="200" y="183" class="tx" text-anchor="middle">wspólny cel: zniszczyć elity</text>
    </svg>`,
    text: `<p>Niemcy część ziem wcielili do Rzeszy, a z reszty utworzyli <b>Generalne Gubernatorstwo</b>. ZSRS wcielił ziemie wschodnie do siebie. Niemcy prześladowali według kryterium <b>narodowego</b>, Sowieci – <b>klasowego</b>.</p>
      <p>Obaj chcieli <b>zniszczyć polskie elity</b>: Niemcy przez łapanki, egzekucje, obozy i wywózki na roboty, Sowieci przez aresztowania i <b>deportacje</b> w głąb ZSRS (1940–1941).</p>`,
    remember: 'Niemcy – kryterium narodowe; Sowieci – klasowe; cel – zniszczenie elit.',
    check: { q: 'Według jakiego kryterium prześladowali Polaków Sowieci?', options: ['narodowego', 'wieku', 'klasowego'], answer: 2, explain: 'Sowieci uderzali w „wrogów klasowych” – ziemian, oficerów, urzędników.' },
  },
  {
    title: 'Mapa zbrodni',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Zbrodnie niemieckie: Auschwitz-Birkenau, Palmiry, kaźń profesorów lwowskich 1941, Zamojszczyzna 1942–1943. Zbrodnie sowieckie: Katyń 1940, deportacje">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f4 s4 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">niemieckie</text><text x="297" y="38">sowieckie</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="75">Auschwitz</text><text x="102" y="105">Palmiry</text><text x="102" y="135">Lwów 1941</text><text x="102" y="165">Zamojszczyzna</text>
        <text x="297" y="90">Katyń 1940</text><text x="297" y="130">deportacje</text><text x="297" y="150" class="tx-s">1940–1941</text></g>
    </svg>`,
    text: `<p>Niemcy: <b>Auschwitz-Birkenau</b>; egzekucje w <b>Palmirach</b>; <b>kaźń profesorów lwowskich</b> (lipiec 1941); wysiedlenia i odbieranie dzieci na <b>Zamojszczyźnie</b> (1942–1943).</p>
      <p>Sowieci: <b>zbrodnia katyńska</b> – wiosną 1940 r. NKWD zamordowało ok. 22 tys. polskich obywateli, w tym tysiące oficerów; ZSRS przyznał się dopiero w 1990 r.</p>`,
    remember: 'Katyń – Sowieci (1940). Palmiry, Lwów, Zamojszczyzna, Auschwitz – Niemcy.',
    hook: 'Katyń kłamstwem stał przez pół wieku – prawda wyszła w 1990 r.',
    check: { q: 'Kto dokonał zbrodni katyńskiej?', options: ['NKWD (ZSRS)', 'Niemcy', 'UPA'], answer: 0, explain: 'Zbrodni dokonało NKWD z rozkazu najwyższych władz ZSRS.' },
  },
  {
    title: 'Wołyń 1943',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Zbrodnia wołyńska: 1943 rok, OUN-UPA, ludobójstwo Polaków na Wołyniu i w Małopolsce Wschodniej, 11 lipca 1943 ataki na około 100 miejscowości; dziś Narodowy Dzień Pamięci">
      <rect x="10" y="10" width="380" height="160" rx="12" class="f5 s5 sw"/>
      <text x="200" y="45" class="tx-b" text-anchor="middle">Wołyń i Małopolska Wschodnia, 1943</text>
      <text x="200" y="80" class="tx" text-anchor="middle">sprawcy: OUN-UPA</text>
      <text x="200" y="110" class="tx" text-anchor="middle">ofiary: kilkadziesiąt tysięcy Polaków</text>
      <text x="200" y="145" class="tx-b" text-anchor="middle">🕯️ 11 lipca – Dzień Pamięci</text>
    </svg>`,
    text: `<p>W 1943 r. ukraińscy nacjonaliści z <b>OUN-UPA</b> dokonali <b>ludobójstwa</b> Polaków na <b>Wołyniu</b> i w <b>Małopolsce Wschodniej</b>. Chcieli usunąć Polaków z ziem, na których planowali państwo ukraińskie. <b>11 lipca 1943 r.</b> zaatakowali ok. 100 miejscowości jednocześnie.</p>
      <p>Polacy bronili się w samoobronach. Sejm uznał zbrodnię wołyńską za ludobójstwo, a 11 lipca jest Narodowym Dniem Pamięci jej ofiar.</p>`,
    remember: 'Zbrodnia wołyńska: 1943, OUN-UPA, ludobójstwo ludności polskiej.',
  },
  {
    title: 'Nie pomyl sprawców',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Tabela sprawców: Katyń – ZSRS, Palmiry – Niemcy, Wołyń – OUN-UPA, Zamojszczyzna – Niemcy">
      <g class="sw"><rect x="10" y="10" width="185" height="75" rx="10" class="f2 s2"/><rect x="205" y="10" width="185" height="75" rx="10" class="f4 s4"/>
        <rect x="10" y="95" width="185" height="75" rx="10" class="f5 s5"/><rect x="205" y="95" width="185" height="75" rx="10" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="42">Katyń</text><text x="297" y="42">Palmiry</text><text x="102" y="127">Wołyń</text><text x="297" y="127">Zamojszczyzna</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="66">ZSRS (NKWD)</text><text x="297" y="66">Niemcy</text><text x="102" y="151">OUN-UPA</text><text x="297" y="151">Niemcy</text></g>
    </svg>`,
    text: `<p>Na sprawdzianie łatwo pomylić sprawców. Zapamiętaj: <b>Katyń – Sowieci</b>, <b>Wołyń – ukraińscy nacjonaliści</b>, <b>Palmiry, Lwów, Zamojszczyzna, Auschwitz – Niemcy</b>.</p>`,
    remember: 'Zawsze łącz zbrodnię ze sprawcą, miejscem i rokiem.',
    check: { q: 'Kto był sprawcą wysiedleń na Zamojszczyźnie?', options: ['ZSRS', 'Niemcy', 'UPA'], answer: 1, explain: 'Niemcy wysiedlali Polaków, by osiedlić tam Niemców.' },
  },
];

window.LESSONS['historia/panstwo-podziemne'] = [
  {
    title: 'Państwo w podziemiu',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Schemat państwa podziemnego: rząd na uchodźstwie w Londynie, w kraju Delegatura Rządu na Kraj – administracja, Armia Krajowa – wojsko, porozumienie partii – zalążek parlamentu">
      <defs><marker id="a-k8h-pp-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="120" y="10" width="160" height="44" rx="10" class="f1 s1 sw"/><text x="200" y="38" class="tx-b" text-anchor="middle">rząd w Londynie</text>
      <g class="sw"><rect x="5" y="110" width="125" height="80" rx="10" class="f3 s3"/><rect x="138" y="110" width="125" height="80" rx="10" class="f2 s2"/><rect x="271" y="110" width="125" height="80" rx="10" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="67" y="140">Delegatura</text><text x="200" y="140">Armia</text><text x="333" y="140">partie</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="165">administracja</text><text x="200" y="165">Krajowa</text><text x="333" y="165">„parlament”</text></g>
      <g class="ln"><line x1="170" y1="56" x2="80" y2="106" marker-end="url(#a-k8h-pp-1)"/><line x1="200" y1="56" x2="200" y2="106" marker-end="url(#a-k8h-pp-1)"/><line x1="230" y1="56" x2="320" y2="106" marker-end="url(#a-k8h-pp-1)"/></g>
    </svg>`,
    text: `<p><b>Polskie Państwo Podziemne</b> miało tajną administrację (<b>Delegatura Rządu na Kraj</b>), wojsko (<b>Armia Krajowa</b>, od 14 lutego 1942 r.) i zalążek parlamentu – porozumienie partii. Podlegało rządowi w Londynie.</p>
      <p>Pierwszym komendantem AK był gen. <b>Stefan Rowecki „Grot”</b>, a po jego aresztowaniu – gen. <b>Tadeusz Komorowski „Bór”</b>.</p>`,
    remember: 'Państwo podziemne = administracja + wojsko + zalążek parlamentu.',
    hook: 'W żadnym innym okupowanym kraju nie zbudowano tak sprawnego państwa w konspiracji.',
    check: { q: 'Z czego powstała Armia Krajowa?', options: ['z Armii Czerwonej', 'z Legionów', 'ze Związku Walki Zbrojnej'], answer: 2, explain: 'W lutym 1942 r. ZWZ przemianowano na AK.' },
  },
  {
    title: 'Jak walczono bez frontu',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Formy oporu: tajne nauczanie, prasa podziemna, mały sabotaż, dywersja, wywiad, Szare Szeregi">
      <g class="sw"><rect x="10" y="10" width="120" height="85" rx="10" class="f1 s1"/><rect x="140" y="10" width="120" height="85" rx="10" class="f3 s3"/><rect x="270" y="10" width="120" height="85" rx="10" class="f4 s4"/>
        <rect x="10" y="105" width="120" height="85" rx="10" class="f2 s2"/><rect x="140" y="105" width="120" height="85" rx="10" class="f5 s5"/><rect x="270" y="105" width="120" height="85" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="45">📚</text><text x="200" y="45">📰</text><text x="330" y="45">✍️</text><text x="70" y="140">💥</text><text x="200" y="140">🕵️</text><text x="330" y="140">⚜️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="75">tajne nauczanie</text><text x="200" y="75">prasa</text><text x="330" y="75">mały sabotaż</text>
        <text x="70" y="170">dywersja</text><text x="200" y="170">wywiad</text><text x="330" y="170">Szare Szeregi</text></g>
    </svg>`,
    text: `<p>Opór miał wiele form: <b>tajne nauczanie</b> (komplety), <b>prasa podziemna</b>, <b>mały sabotaż</b> (napisy na murach), <b>dywersja</b> (niszczenie transportów, akcje zbrojne), <b>wywiad</b> dla aliantów. Harcerze z <b>Szarych Szeregów</b> brali udział w akcjach.</p>`,
    remember: 'Opór = walka zbrojna + nauka + słowo + wywiad.',
  },
  {
    title: '63 dni Warszawy',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś czasu powstania warszawskiego: 1 sierpnia 1944 godzina 17 wybuch, 63 dni walk, 2 października kapitulacja; po drugiej stronie Wisły stała Armia Czerwona">
      <defs><marker id="a-k8h-pp-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="30" y="70" width="270" height="40" rx="8" class="f2 s2 sw"/>
      <text x="165" y="96" class="tx-b" text-anchor="middle">63 dni walk</text>
      <g class="tx-b" text-anchor="middle"><text x="45" y="55">1 VIII</text><text x="285" y="55">2 X 1944</text></g>
      <g class="tx-s" text-anchor="middle"><text x="55" y="135">godz. 17 „W”</text><text x="285" y="135">kapitulacja</text></g>
      <rect x="360" y="20" width="14" height="170" class="f1"/>
      <text x="367" y="14" class="tx-s" text-anchor="middle">Wisła</text>
      <text x="165" y="180" class="tx" text-anchor="middle">🕯️ ok. 180 tys. cywilów zginęło</text>
    </svg>`,
    text: `<p>Powstanie wybuchło <b>1 sierpnia 1944 r.</b> o godz. 17 („godzina W”). Dowódcy chcieli, by to Polacy wyzwolili stolicę przed wkroczeniem Sowietów i przyjęli ich jako gospodarze.</p>
      <p>Brakowało broni. <b>Armia Czerwona</b> stała za Wisłą i <b>nie pomogła</b>. Po 63 dniach, <b>2 października</b>, powstańcy skapitulowali. Zginęło ok. 18 tys. powstańców i ok. 180 tys. cywilów; Niemcy zburzyli Warszawę.</p>`,
    remember: 'Powstanie warszawskie: 1 VIII – 2 X 1944, 63 dni.',
    hook: '„W” jak Warszawa – i jak wolność, o którą walczono.',
    check: { q: 'Ile dni trwało powstanie warszawskie?', options: ['63', '7', '100'], answer: 0, explain: 'Od 1 sierpnia do 2 października 1944 r.' },
  },
  {
    title: 'Jak oceniać powstanie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dwie strony oceny: bohaterski zryw o wolność i niepodległość oraz ogromne straty – ofiary i zburzone miasto">
      <rect x="10" y="10" width="185" height="170" rx="12" class="f3 s3 sw"/><rect x="205" y="10" width="185" height="170" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">za</text><text x="297" y="40">przeciw</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="80">walka o wolność</text><text x="102" y="102">i suwerenność</text><text x="102" y="124">bohaterstwo</text><text x="102" y="146">pokolenia</text>
        <text x="297" y="80">brak broni</text><text x="297" y="102">i pomocy</text><text x="297" y="124">ogromne ofiary</text><text x="297" y="146">zburzona stolica</text></g>
    </svg>`,
    text: `<p>Ocena powstania do dziś budzi spory. Jedni podkreślają <b>bohaterstwo</b> i walkę o niepodległość, inni – <b>ogromne straty</b> i małe szanse na sukces bez pomocy z zewnątrz.</p>
      <p>Na sprawdzianie przy pytaniu „oceń” zawsze podaj argumenty <b>obu stron</b> i swoje zdanie.</p>`,
    remember: 'Ocena = argumenty „za” i „przeciw” + własne zdanie z uzasadnieniem.',
  },
];

window.LESSONS['historia/sprawa-polska'] = [
  {
    title: 'Rząd na emigracji',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Wędrówka rządu: wrzesień 1939 Rumunia – internowanie, potem Francja, od 1940 Londyn; premier gen. Władysław Sikorski">
      <defs><marker id="a-k8h-sp-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="40" width="110" height="60" rx="10" class="f4 s4"/><rect x="145" y="40" width="110" height="60" rx="10" class="f1 s1"/><rect x="280" y="40" width="110" height="60" rx="10" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="65" y="76">Rumunia</text><text x="200" y="76">Francja</text><text x="335" y="76">Londyn</text></g>
      <g class="ln"><line x1="122" y1="70" x2="143" y2="70" marker-end="url(#a-k8h-sp-1)"/><line x1="257" y1="70" x2="278" y2="70" marker-end="url(#a-k8h-sp-1)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="125">IX 1939</text><text x="200" y="125">1939–1940</text><text x="335" y="125">od 1940</text></g>
      <text x="200" y="165" class="tx" text-anchor="middle">premier: gen. Władysław Sikorski</text>
    </svg>`,
    text: `<p>Po internowaniu władz w Rumunii prezydentem został <b>Władysław Raczkiewicz</b>, a premierem i Naczelnym Wodzem – gen. <b>Władysław Sikorski</b>. Rząd działał we <b>Francji</b>, a od 1940 r. w <b>Londynie</b>.</p>
      <p>W 1941 r. <b>układ Sikorski–Majski</b> pozwolił utworzyć w ZSRS armię gen. <b>Andersa</b>. W 1943 r. ZSRS zerwał stosunki z rządem, a Sikorski zginął w katastrofie w <b>Gibraltarze</b> (4 VII 1943).</p>`,
    remember: 'Rząd RP na uchodźstwie: Francja → Londyn; Sikorski do 1943 r.',
    check: { q: 'Gdzie działał rząd RP na uchodźstwie od 1940 r.?', options: ['w Paryżu', 'w Londynie', 'w Moskwie'], answer: 1, explain: 'Po upadku Francji rząd przeniósł się do Londynu.' },
  },
  {
    title: 'Polacy na frontach świata',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Polskie formacje: Narwik 1940, bitwa o Anglię 1940 Dywizjon 303, Tobruk 1941, Monte Cassino 1944, Falaise 1944, Arnhem 1944, Lenino 1943">
      <g class="sw"><rect x="5" y="10" width="132" height="58" rx="8" class="f1 s1"/><rect x="144" y="10" width="132" height="58" rx="8" class="f1 s1"/><rect x="283" y="10" width="132" height="58" rx="8" class="f4 s4"/>
        <rect x="5" y="76" width="132" height="58" rx="8" class="f3 s3"/><rect x="144" y="76" width="132" height="58" rx="8" class="f3 s3"/><rect x="283" y="76" width="132" height="58" rx="8" class="f3 s3"/>
        <rect x="144" y="142" width="132" height="58" rx="8" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="71" y="36">Narwik</text><text x="210" y="36">Anglia</text><text x="349" y="36">Tobruk</text><text x="71" y="102">Monte Cassino</text><text x="210" y="102">Falaise</text><text x="349" y="102">Arnhem</text><text x="210" y="168">Lenino</text></g>
      <g class="tx-s" text-anchor="middle"><text x="71" y="56">1940</text><text x="210" y="56">1940, Dyw. 303</text><text x="349" y="56">1941</text><text x="71" y="122">1944, Anders</text><text x="210" y="122">1944, Maczek</text><text x="349" y="122">1944, Sosabowski</text><text x="210" y="188">1943, Berling</text></g>
    </svg>`,
    text: `<p>Polscy żołnierze walczyli na wielu frontach: pod <b>Narwikiem</b>, w <b>bitwie o Anglię</b> (Dywizjon 303), w <b>Tobruku</b>, na <b>Monte Cassino</b> (2 Korpus gen. Andersa), pod <b>Falaise</b> (1 Dywizja Pancerna gen. Maczka), pod <b>Arnhem</b> (Brygada gen. Sosabowskiego).</p>
      <p>Na wschodzie, u boku Armii Czerwonej, walczyła tworzona przez komunistów 1 Dywizja im. Kościuszki – pod <b>Lenino</b> (1943).</p>`,
    remember: 'Monte Cassino – Anders; Falaise – Maczek; Arnhem – Sosabowski; bitwa o Anglię – Dywizjon 303.',
    hook: 'M-A, F-M, A-S: Monte–Anders, Falaise–Maczek, Arnhem–Sosabowski.',
    check: { q: 'Kto dowodził Polakami pod Monte Cassino?', options: ['gen. Maczek', 'gen. Berling', 'gen. Anders'], answer: 2, explain: 'Klasztor zdobył 2 Korpus Polski gen. Władysława Andersa (maj 1944).' },
  },
  {
    title: 'Sojusznicy ustępują Stalinowi',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Schemat: Wielka Brytania i USA potrzebują ZSRS do pokonania Niemiec, więc ustępują Stalinowi w sprawie Polski – granica na linii Curzona, Polska w strefie wpływów ZSRS">
      <defs><marker id="a-k8h-sp-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="30" width="130" height="70" rx="10" class="f1 s1 sw"/><rect x="260" y="30" width="130" height="70" rx="10" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="75" y="60">USA</text><text x="75" y="85">W. Brytania</text><text x="325" y="72">Stalin</text></g>
      <line x1="145" y1="65" x2="255" y2="65" class="ln sw" marker-end="url(#a-k8h-sp-3)"/>
      <text x="200" y="55" class="tx-s" text-anchor="middle">ustępstwa</text>
      <rect x="80" y="125" width="240" height="44" rx="10" class="f5 s5 sw"/>
      <text x="200" y="152" class="tx" text-anchor="middle">Polska w strefie ZSRS</text>
    </svg>`,
    text: `<p>Wielka Brytania i USA potrzebowały ZSRS do pokonania Niemiec, więc <b>ustępowały Stalinowi</b>. W Teheranie i Jałcie zgodziły się na granicę na linii Curzona i na Polskę w strefie wpływów ZSRS – bez zgody rządu polskiego.</p>
      <p>W 1945 r. przestały uznawać rząd w Londynie i uznały Tymczasowy Rząd Jedności Narodowej, zdominowany przez komunistów.</p>`,
    remember: 'Polska walczyła po stronie zwycięzców, ale o jej losie zdecydowały mocarstwa.',
    check: { q: 'Dlaczego Zachód ustępował Stalinowi w sprawie Polski?', options: ['bo potrzebował ZSRS do pokonania Niemiec', 'bo Polska była sojusznikiem Niemiec', 'bo Stalin był demokratą'], answer: 0, explain: 'ZSRS był kluczowym sojusznikiem w walce z Niemcami.' },
  },
  {
    title: 'Pułapki: dwa wojska polskie',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Porównanie: armia Andersa podległa rządowi w Londynie, wyszła z ZSRS w 1942 roku; 1 Dywizja im. Kościuszki tworzona przez komunistów, walczyła u boku Armii Czerwonej">
      <rect x="10" y="10" width="185" height="160" rx="12" class="f3 s3 sw"/><rect x="205" y="10" width="185" height="160" rx="12" class="f2 s2 sw"/>
      <g class="tx" text-anchor="middle"><text x="102" y="38">armia Andersa</text><text x="297" y="38">Dywizja Kościuszki</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="70">podległa Londynowi</text><text x="102" y="95">1942 – wyszła z ZSRS</text><text x="102" y="120">Monte Cassino</text>
        <text x="297" y="70">tworzona przez</text><text x="297" y="88">komunistów</text><text x="297" y="113">u boku Armii Czerwonej</text><text x="297" y="138">Lenino 1943</text></g>
    </svg>`,
    text: `<p>Nie myl dwóch wojsk polskich związanych z ZSRS. <b>Armia Andersa</b> podlegała rządowi w Londynie i w 1942 r. wyszła z ZSRS na Bliski Wschód. <b>1 Dywizja im. Kościuszki</b> (gen. Berling) była tworzona przez komunistów i walczyła u boku Armii Czerwonej (Lenino).</p>`,
    remember: 'Anders – Londyn i Monte Cassino. Berling – komuniści i Lenino.',
  },
];

window.LESSONS['historia/zimna-wojna'] = [
  {
    title: 'Świat podzielony na pół',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Europa podzielona żelazną kurtyną: na zachodzie NATO z 1949 roku, na wschodzie Układ Warszawski z 1955 roku pod przewodnictwem ZSRS">
      <rect x="10" y="20" width="185" height="160" rx="12" class="f1 s1 sw"/><rect x="205" y="20" width="185" height="160" rx="12" class="f2 s2 sw"/>
      <line x1="200" y1="10" x2="200" y2="180" class="ln sw dash"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="55">NATO</text><text x="297" y="55">Układ Warszawski</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="80">1949</text><text x="297" y="80">1955</text>
        <text x="102" y="115">USA, Kanada,</text><text x="102" y="133">W. Brytania, Francja</text><text x="297" y="115">ZSRS i blok</text><text x="297" y="133">wschodni (PRL)</text></g>
      <text x="200" y="196" class="tx-s" text-anchor="middle">żelazna kurtyna</text>
    </svg>`,
    text: `<p>Po wojnie koalicja się rozpadła. Zachód i ZSRS zaczęli rywalizować – to <b>zimna wojna</b> (1947–1991): napięcie, wyścig zbrojeń, ale bez bezpośredniej wojny między USA a ZSRS. Europę przedzieliła <b>żelazna kurtyna</b>.</p>
      <p>Powstały dwa bloki: <b>NATO</b> (1949) i <b>Układ Warszawski</b> (1955). W 1945 r. powstała też <b>ONZ</b>, ale prawo weta stałych członków Rady Bezpieczeństwa często ją paraliżowało.</p>`,
    remember: 'NATO 1949, Układ Warszawski 1955, zimna wojna 1947–1991.',
    hook: 'Zimna wojna – bez „gorących” strzałów między supermocarstwami, ale z ciągłym napięciem.',
    check: { q: 'Który sojusz powstał wcześniej?', options: ['Układ Warszawski', 'NATO', 'powstały razem'], answer: 1, explain: 'NATO (1949), Układ Warszawski (1955).' },
  },
  {
    title: 'Berlin – symbol podziału',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Oś czasu Niemiec: 1948–1949 blokada Berlina Zachodniego i most powietrzny, 1949 powstanie RFN i NRD, 1961 budowa muru berlińskiego, 1989 upadek muru">
      <defs><marker id="a-k8h-zw-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="95" x2="390" y2="95" class="ln sw" marker-end="url(#a-k8h-zw-2)"/>
      <g class="sw f4 s4"><circle cx="50" cy="95" r="7"/><circle cx="150" cy="95" r="7"/><circle cx="250" cy="95" r="7"/><circle cx="350" cy="95" r="7"/></g>
      <g class="tx-b" text-anchor="middle"><text x="50" y="70">1948–49</text><text x="150" y="130">1949</text><text x="250" y="70">1961</text><text x="350" y="130">1989</text></g>
      <g class="tx-s" text-anchor="middle"><text x="50" y="45">blokada ✈️</text><text x="150" y="152">RFN i NRD</text><text x="250" y="45">mur 🧱</text><text x="350" y="152">upadek muru</text></g>
    </svg>`,
    text: `<p>ZSRS zablokował Berlin Zachodni (1948–1949) – Zachód zaopatrywał go <b>mostem powietrznym</b>. W 1949 r. powstały dwa państwa niemieckie: <b>RFN</b> i <b>NRD</b>. W 1961 r. władze NRD zbudowały <b>mur berliński</b>, który upadł dopiero w 1989 r.</p>`,
    remember: 'Mur berliński: 1961–1989.',
  },
  {
    title: 'Interwencje i kryzysy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Interwencje ZSRS: Węgry 1956, Czechosłowacja 1968. Konflikty zimnej wojny: Korea 1950–1953, kryzys kubański 1962, Wietnam, Afganistan">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f2 s2 sw"/><rect x="205" y="10" width="185" height="190" rx="12" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">interwencje ZSRS</text><text x="297" y="38">konflikty</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="85">🇭🇺 Węgry 1956</text><text x="102" y="125">Czechosłowacja</text><text x="102" y="145">1968</text>
        <text x="297" y="75">Korea 1950–53</text><text x="297" y="105">Kuba 1962</text><text x="297" y="135">Wietnam</text><text x="297" y="165">Afganistan</text></g>
    </svg>`,
    text: `<p>ZSRS siłą pilnował swojego bloku: stłumił powstanie na <b>Węgrzech (1956)</b>, a wojska Układu Warszawskiego (także polskie) zdławiły <b>Praską Wiosnę (1968)</b>.</p>
      <p>Supermocarstwa rywalizowały w konfliktach na świecie: <b>wojna koreańska</b> (1950–1953), <b>kryzys kubański</b> (1962) – świat na krawędzi wojny atomowej, <b>wojna w Wietnamie</b>, wojna w Afganistanie.</p>`,
    remember: 'Węgry 1956, Praga 1968 – ZSRS tłumi wolność w swoim bloku.',
    check: { q: 'Które wydarzenie postawiło świat na krawędzi wojny atomowej?', options: ['Praska Wiosna', 'blokada Berlina', 'kryzys kubański'], answer: 2, explain: 'W 1962 r. ZSRS rozmieścił rakiety na Kubie.' },
  },
  {
    title: 'Nowe państwa i nowe konflikty',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dekolonizacja: Indie 1947, Rok Afryki 1960. Bliski Wschód: Izrael 1948 i konflikt arabsko-izraelski. Chiny: 1949 Chińska Republika Ludowa, Mao Zedong">
      <g class="sw"><rect x="10" y="10" width="120" height="170" rx="10" class="f3 s3"/><rect x="140" y="10" width="120" height="170" rx="10" class="f5 s5"/><rect x="270" y="10" width="120" height="170" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="38">dekolonizacja</text><text x="200" y="38">Bliski Wschód</text><text x="330" y="38">Chiny</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="80">Indie 1947</text><text x="70" y="110">1960 –</text><text x="70" y="128">Rok Afryki</text>
        <text x="200" y="80">1948 – Izrael</text><text x="200" y="110">konflikt</text><text x="200" y="128">arabsko-izraelski</text>
        <text x="330" y="80">1949 – ChRL</text><text x="330" y="110">Mao Zedong</text><text x="330" y="128">potem reformy</text></g>
    </svg>`,
    text: `<p>Kolonie w Azji i Afryce zdobywały niepodległość – <b>dekolonizacja</b> (Indie 1947, „<b>Rok Afryki</b>” 1960). W <b>1948 r.</b> powstał <b>Izrael</b> – zaczął się konflikt arabsko-izraelski. W <b>1949 r.</b> komuniści <b>Mao Zedonga</b> utworzyli Chińską Republikę Ludową; po śmierci Mao Chiny wprowadziły reformy gospodarcze, ale nie demokrację.</p>`,
    remember: 'Dekolonizacja dała wolność wielu narodom, ale też biedę i konflikty.',
  },
];

window.LESSONS['historia/europa-1989'] = [
  {
    title: 'Jesień Ludów',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Domino: Polska 1989 przewraca kolejne kostki – upadek komunizmu w kolejnych państwach Europy Środkowo-Wschodniej">
      <g class="sw f4 s4"><rect x="140" y="70" width="40" height="80" rx="4" transform="rotate(35 180 150)"/><rect x="215" y="70" width="40" height="80" rx="4" transform="rotate(20 255 150)"/>
        <rect x="290" y="70" width="40" height="80" rx="4" transform="rotate(8 330 150)"/><rect x="350" y="70" width="40" height="80" rx="4"/></g>
      <g transform="rotate(62 70 150)"><rect x="30" y="70" width="40" height="80" rx="4" class="pl-w ln"/><rect x="30" y="110" width="40" height="40" class="pl-r"/></g>
      <line x1="10" y1="152" x2="390" y2="152" class="ln"/>
      <text x="40" y="100" class="tx-b" text-anchor="middle">PL</text>
      <text x="230" y="40" class="tx" text-anchor="middle">1989 – upadek komunizmu</text>
      <text x="200" y="178" class="tx-s" text-anchor="middle">przemiany zaczęły się w Polsce</text>
    </svg>`,
    text: `<p>Od 1985 r. przywódcą ZSRS był <b>Michaił Gorbaczow</b> – reformował kraj i przestał siłą pilnować bloku. W 1989 r. komunizm upadał w kolejnych państwach – większość zmian przyszła jesienią, stąd nazwa <b>Jesień Ludów</b>. Zaczęło się w <b>Polsce</b>.</p>
      <p><b>9 listopada 1989 r.</b> upadł mur berliński, <b>3 października 1990 r.</b> zjednoczyły się Niemcy, a w <b>grudniu 1991 r.</b> rozpadł się ZSRS.</p>`,
    remember: '1989 Jesień Ludów → 1990 zjednoczenie Niemiec → 1991 rozpad ZSRS.',
    hook: 'Jak domino: pierwsza kostka – Polska.',
    check: { q: 'Kiedy upadł mur berliński?', options: ['9 listopada 1989 r.', '3 października 1990 r.', '13 sierpnia 1961 r.'], answer: 0, explain: 'Władze NRD otworzyły wtedy granicę.' },
  },
  {
    title: 'Od węgla do Unii',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Schody integracji europejskiej: 1950 plan Schumana, 1951 Wspólnota Węgla i Stali, 1957 traktaty rzymskie – EWG, 1992 Maastricht – Unia Europejska, 2004 Polska w UE">
      <g class="sw"><rect x="10" y="140" width="76" height="40" class="f4 s4"/><rect x="92" y="115" width="76" height="65" class="f4 s4"/><rect x="174" y="90" width="76" height="90" class="f3 s3"/><rect x="256" y="60" width="76" height="120" class="f1 s1"/><rect x="338" y="30" width="76" height="150" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="48" y="132">1950</text><text x="130" y="107">1951</text><text x="212" y="82">1957</text><text x="294" y="52">1992</text><text x="376" y="22">2004</text></g>
      <g class="tx-s" text-anchor="middle"><text x="48" y="165">Schuman</text><text x="130" y="150">EWWiS</text><text x="212" y="140">EWG</text><text x="294" y="125">UE</text><text x="376" y="110">Polska</text></g>
    </svg>`,
    text: `<p>Cel integracji: <b>pokój</b> (żeby Francja i Niemcy nigdy więcej nie walczyły), <b>wspólny rynek</b> i dobrobyt. Najpierw wspólny węgiel i stal (<b>plan Schumana</b> 1950, EWWiS 1951), potem <b>traktaty rzymskie</b> (1957) – EWG. <b>Traktat z Maastricht</b> (1992) powołał <b>Unię Europejską</b>. W 2004 r. dołączyła Polska.</p>`,
    remember: 'EWWiS (1951) → EWG (1957) → UE (1992).',
    hook: 'Najpierw wspólne kopalnie i huty, potem wspólny rynek, na końcu wspólna Unia.',
    check: { q: 'Który traktat powołał Unię Europejską?', options: ['rzymski', 'z Maastricht', 'wersalski'], answer: 1, explain: 'Traktat z Maastricht podpisano w 1992 r.' },
  },
  {
    title: 'Świat się zmienia',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Przemiany po wojnie: telewizja i kultura masowa, muzyka rockowa, podbój kosmosu – Gagarin 1961, Armstrong na Księżycu 1969, ruch hipisowski">
      <g class="sw"><rect x="10" y="10" width="120" height="160" rx="10" class="f1 s1"/><rect x="140" y="10" width="120" height="160" rx="10" class="f5 s5"/><rect x="270" y="10" width="120" height="160" rx="10" class="f3 s3"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="55">📺 🎸</text><text x="200" y="55">🚀 🌕</text><text x="330" y="55">☮️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="95">kultura</text><text x="70" y="113">masowa</text>
        <text x="200" y="95">1961 Gagarin</text><text x="200" y="113">1969 Armstrong</text>
        <text x="330" y="95">hipisi,</text><text x="330" y="113">protest przeciw</text><text x="330" y="131">wojnie</text></g>
    </svg>`,
    text: `<p>Po wojnie rozwinęła się <b>kultura masowa</b>: telewizja, muzyka rockowa, kino. Ludzie ruszyli w kosmos: <b>Jurij Gagarin</b> (1961) – pierwszy człowiek w kosmosie, <b>Neil Armstrong</b> (1969) – pierwszy na Księżycu. Młodzież buntowała się – np. ruch hipisowski i protesty przeciw wojnie w Wietnamie.</p>`,
    remember: 'Gagarin – kosmos 1961; Armstrong – Księżyc 1969.',
  },
  {
    title: 'Uporządkuj daty',
    svg: `<svg viewBox="0 0 420 150" role="img" aria-label="Oś czasu: 1957 traktaty rzymskie, 1985 Gorbaczow, 1989 Jesień Ludów, 1990 zjednoczenie Niemiec, 1991 rozpad ZSRS, 1992 Maastricht">
      <defs><marker id="a-k8h-eu-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="75" x2="410" y2="75" class="ln sw" marker-end="url(#a-k8h-eu-4)"/>
      <g class="sw f4 s4"><circle cx="30" cy="75" r="6"/><circle cx="105" cy="75" r="6"/><circle cx="180" cy="75" r="6"/><circle cx="250" cy="75" r="6"/><circle cx="320" cy="75" r="6"/><circle cx="390" cy="75" r="6"/></g>
      <g class="tx-b" text-anchor="middle"><text x="30" y="55">1957</text><text x="105" y="105">1985</text><text x="180" y="55">1989</text><text x="250" y="105">1990</text><text x="320" y="55">1991</text><text x="390" y="105">1992</text></g>
      <g class="tx-s" text-anchor="middle"><text x="30" y="32">EWG</text><text x="105" y="125">Gorbaczow</text><text x="180" y="32">Jesień Ludów</text><text x="250" y="125">Niemcy</text><text x="320" y="32">ZSRS ✕</text><text x="390" y="125">UE</text></g>
    </svg>`,
    text: `<p>Ćwicz kolejność: EWG (1957) → Gorbaczow (1985) → Jesień Ludów (1989) → zjednoczenie Niemiec (1990) → rozpad ZSRS (1991) → Maastricht i UE (1992).</p>`,
    remember: 'Koniec zimnej wojny i narodziny UE dzieli tylko kilka lat.',
    check: { q: 'Co było wcześniej?', options: ['rozpad ZSRS', 'oba w tym samym roku', 'zjednoczenie Niemiec'], answer: 2, explain: 'Zjednoczenie Niemiec – 1990, rozpad ZSRS – 1991.' },
  },
];

window.LESSONS['historia/polska-1944-1956'] = [
  {
    title: 'Schody do pełni władzy',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Schody: 1944 Manifest PKWN, 1945 TRJN, 1946 sfałszowane referendum, 1947 sfałszowane wybory, 1948 PZPR, 1952 Konstytucja PRL">
      <g class="sw"><rect x="5" y="155" width="65" height="35" class="f4 s4"/><rect x="74" y="130" width="65" height="60" class="f4 s4"/><rect x="143" y="105" width="65" height="85" class="f2 s2"/><rect x="212" y="80" width="65" height="110" class="f2 s2"/><rect x="281" y="55" width="65" height="135" class="f5 s5"/><rect x="350" y="30" width="65" height="160" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="37" y="148">1944</text><text x="106" y="123">1945</text><text x="175" y="98">1946</text><text x="244" y="73">1947</text><text x="313" y="48">1948</text><text x="382" y="23">1952</text></g>
      <g class="tx-s" text-anchor="middle"><text x="37" y="177">PKWN</text><text x="106" y="165">TRJN</text><text x="175" y="150">referend.</text><text x="244" y="140">wybory</text><text x="313" y="130">PZPR</text><text x="382" y="120">Konst.</text><text x="382" y="138">PRL</text></g>
    </svg>`,
    text: `<p>Komuniści przejmowali władzę krok po kroku: <b>Manifest PKWN</b> (22 VII 1944), <b>TRJN</b> (1945), <b>sfałszowane referendum</b> (30 VI 1946) i <b>sfałszowane wybory</b> (19 I 1947), powstanie <b>PZPR</b> (1948), <b>Konstytucja PRL</b> (22 VII 1952).</p>`,
    remember: 'Referendum 1946 i wybory 1947 zostały sfałszowane.',
    hook: 'Dwa razy „22 lipca”: Manifest PKWN (1944) i Konstytucja PRL (1952).',
    check: { q: 'Które wydarzenie było sfałszowane przez komunistów?', options: ['wybory w 1947 r.', 'wybory w 1989 r.', 'referendum w 2003 r.'], answer: 0, explain: 'Sfałszowano referendum 1946 r. i wybory 1947 r.' },
  },
  {
    title: 'Opór i przystosowanie',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Postawy Polaków wobec komunistów: opór zbrojny – żołnierze wyklęci; opór legalny – PSL Mikołajczyka; przystosowanie; poparcie">
      <g class="sw"><rect x="10" y="10" width="185" height="75" rx="10" class="f2 s2"/><rect x="205" y="10" width="185" height="75" rx="10" class="f1 s1"/><rect x="10" y="95" width="185" height="75" rx="10" class="f4 s4"/><rect x="205" y="95" width="185" height="75" rx="10" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">opór zbrojny</text><text x="297" y="40">opór legalny</text><text x="102" y="125">przystosowanie</text><text x="297" y="125">poparcie</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="65">żołnierze wyklęci</text><text x="297" y="65">PSL Mikołajczyka</text><text x="102" y="150">odbudowa, życie</text><text x="297" y="150">część ludzi</text></g>
    </svg>`,
    text: `<p>Polacy różnie reagowali na nową władzę: <b>żołnierze wyklęci</b> walczyli zbrojnie, <b>PSL</b> Stanisława Mikołajczyka – legalnie w polityce. Wielu po prostu odbudowywało kraj i swoje życie, a część popierała zmiany.</p>`,
    remember: 'Żołnierze wyklęci – zbrojne podziemie niepodległościowe po wojnie.',
  },
  {
    title: 'Stalinizm',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cechy stalinizmu: terror i pokazowe procesy, plan sześcioletni i Nowa Huta, kolektywizacja, walka z Kościołem – uwięzienie prymasa Wyszyńskiego, socrealizm">
      <g class="sw"><rect x="10" y="10" width="120" height="85" rx="10" class="f2 s2"/><rect x="140" y="10" width="120" height="85" rx="10" class="f4 s4"/><rect x="270" y="10" width="120" height="85" rx="10" class="f3 s3"/>
        <rect x="75" y="105" width="120" height="85" rx="10" class="f5 s5"/><rect x="205" y="105" width="120" height="85" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="45">⛓️</text><text x="200" y="45">🏭</text><text x="330" y="45">🚜</text><text x="135" y="140">⛪</text><text x="265" y="140">🎨</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="75">terror</text><text x="200" y="75">Nowa Huta</text><text x="330" y="75">kolektywizacja</text><text x="135" y="170">walka z Kościołem</text><text x="265" y="170">socrealizm</text></g>
    </svg>`,
    text: `<p>W czasach <b>stalinizmu</b> (ok. 1948–1956) panował <b>terror</b> (aparat bezpieczeństwa, pokazowe procesy, wyroki śmierci – np. na rotmistrzu Witoldzie Pileckim). <b>Plan sześcioletni</b> stawiał na przemysł ciężki (Nowa Huta), chłopów zmuszano do <b>kolektywizacji</b>, uwięziono prymasa <b>Wyszyńskiego</b>, a sztuka musiała chwalić władzę (<b>socrealizm</b>).</p>`,
    remember: 'Stalinizm = terror + plan 6-letni + kolektywizacja + walka z Kościołem + socrealizm.',
    check: { q: 'Co było symbolem planu sześcioletniego?', options: ['Okrągły Stół', 'Nowa Huta', 'Westerplatte'], answer: 1, explain: 'Kombinat i miasto Nowa Huta budowano od 1950 r.' },
  },
  {
    title: 'Rok 1956',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Rok 1956: czerwiec – protest robotników w Poznaniu stłumiony przez wojsko; październik – odwilż, Władysław Gomułka I sekretarzem, uwolnienie prymasa">
      <rect x="10" y="10" width="185" height="160" rx="12" class="f2 s2 sw"/><rect x="205" y="10" width="185" height="160" rx="12" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">Czerwiec</text><text x="297" y="38">Październik</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="75">Poznań:</text><text x="102" y="95">protest robotników</text><text x="102" y="120">wojsko, ofiary</text>
        <text x="297" y="75">odwilż</text><text x="297" y="95">Gomułka</text><text x="297" y="120">wolny prymas</text></g>
    </svg>`,
    text: `<p>W <b>czerwcu 1956 r.</b> robotnicy w <b>Poznaniu</b> wyszli na ulice; władza użyła wojska – zginęło kilkadziesiąt osób. W <b>październiku</b> nastąpiła „<b>odwilż</b>”: I sekretarzem został <b>Władysław Gomułka</b>, uwolniono prymasa, ograniczono terror. Ale PRL pozostała państwem komunistycznym.</p>`,
    remember: 'Poznań – czerwiec 1956; Październik 1956 – Gomułka i odwilż.',
    check: { q: 'Kto objął władzę w PZPR w październiku 1956 r.?', options: ['Bierut', 'Gierek', 'Gomułka'], answer: 2, explain: 'Gomułka stał się symbolem odwilży.' },
  },
];

window.LESSONS['historia/prl-1957-1980'] = [
  {
    title: 'Gomułka i Gierek',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Porównanie: Gomułka 1956–1970 mała stabilizacja, kryzysy 1968 i 1970; Gierek 1970–1980 rozwój na kredyt, kryzysy 1976 i 1980">
      <rect x="10" y="10" width="185" height="170" rx="12" class="f4 s4 sw"/><rect x="205" y="10" width="185" height="170" rx="12" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">Gomułka</text><text x="297" y="38">Gierek</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="60">1956–1970</text><text x="297" y="60">1970–1980</text>
        <text x="102" y="95">„mała stabilizacja”</text><text x="297" y="95">kredyty z Zachodu</text>
        <text x="102" y="135">kryzysy:</text><text x="102" y="155">1968, 1970</text><text x="297" y="135">kryzysy:</text><text x="297" y="155">1976, 1980</text></g>
    </svg>`,
    text: `<p>Za <b>Gomułki</b> – „mała stabilizacja”: skromne życie, braki w sklepach. Za <b>Gierka</b> – rozwój za <b>kredyty z Zachodu</b>: więcej towarów, ale ogromne długi. Rządziła PZPR, a PRL zależała od ZSRS.</p>`,
    remember: 'Gomułka: 1956–1970. Gierek: 1970–1980 – na kredyt.',
    check: { q: 'Z czego Gierek finansował rozwój gospodarki?', options: ['z kredytów zagranicznych', 'z ropy naftowej', 'z planu Marshalla'], answer: 0, explain: 'Kredyty zachodnie dały chwilowy wzrost i ogromne zadłużenie.' },
  },
  {
    title: 'Kryzysy co kilka lat',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś kryzysów: 1956 Poznań, 1968 Marzec – studenci, 1970 Grudzień – Wybrzeże, 1976 Czerwiec – Radom i Ursus, 1980 Sierpień – strajki i Solidarność">
      <defs><marker id="a-k8h-prl-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="100" x2="410" y2="100" class="ln sw" marker-end="url(#a-k8h-prl-2)"/>
      <g class="sw f2 s2"><circle cx="35" cy="100" r="7"/><circle cx="120" cy="100" r="7"/><circle cx="200" cy="100" r="7"/><circle cx="285" cy="100" r="7"/><circle cx="370" cy="100" r="7"/></g>
      <g class="tx-b" text-anchor="middle"><text x="35" y="78">1956</text><text x="120" y="130">1968</text><text x="200" y="78">1970</text><text x="285" y="130">1976</text><text x="370" y="78">1980</text></g>
      <g class="tx-s" text-anchor="middle"><text x="35" y="55">Poznań</text><text x="120" y="152">studenci</text><text x="200" y="55">Wybrzeże</text><text x="285" y="152">Radom</text><text x="370" y="55">Sierpień</text></g>
    </svg>`,
    text: `<p><b>Marzec 1968</b> – po zakazie „Dziadów” protestowali studenci; władza odpowiedziała represjami i kampanią antysemicką. <b>Grudzień 1970</b> – podwyżki cen, protesty na Wybrzeżu i masakra robotników. <b>Czerwiec 1976</b> – protesty w <b>Radomiu</b>, Ursusie i Płocku. <b>Sierpień 1980</b> – fala strajków.</p>`,
    remember: 'Kryzysy PRL: 1956, 1968, 1970, 1976, 1980.',
    hook: 'Iskra kryzysu: podwyżka cen albo zakaz wolności.',
    check: { q: 'Co wywołało protesty studentów w marcu 1968 r.?', options: ['podwyżka cen', 'zakaz „Dziadów”', 'wybór papieża'], answer: 1, explain: 'Władze zdjęły z afisza „Dziady” Mickiewicza.' },
  },
  {
    title: 'Kościół, KOR i papież',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Siły niezależne od władzy: Kościół – prymas Wyszyński, orędzie biskupów 1965; KOR 1976 – obrona robotników; Jan Paweł II – wybór 16 października 1978, pielgrzymka 1979">
      <g class="sw"><rect x="10" y="10" width="120" height="170" rx="10" class="f5 s5"/><rect x="140" y="10" width="120" height="170" rx="10" class="f1 s1"/><rect x="270" y="10" width="120" height="170" rx="10" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="38">Kościół</text><text x="200" y="38">KOR</text><text x="330" y="38">papież</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="75">prymas</text><text x="70" y="93">Wyszyński</text><text x="70" y="125">orędzie 1965</text>
        <text x="200" y="75">1976</text><text x="200" y="93">obrona</text><text x="200" y="111">robotników</text>
        <text x="330" y="75">16 X 1978</text><text x="330" y="93">Jan Paweł II</text><text x="330" y="125">pielgrzymka</text><text x="330" y="143">1979</text></g>
    </svg>`,
    text: `<p><b>Kościół</b> był ostoją niezależności (prymas Wyszyński, orędzie biskupów do niemieckich w 1965 r. – „przebaczamy i prosimy o przebaczenie”). W 1976 r. powstał <b>KOR</b>, broniący represjonowanych robotników.</p>
      <p><b>16 października 1978 r.</b> kard. Karol Wojtyła został papieżem <b>Janem Pawłem II</b>. W 1979 r. w Warszawie mówił: „Niech zstąpi Duch Twój i odnowi oblicze ziemi. Tej ziemi”.</p>`,
    remember: 'KOR 1976; Jan Paweł II – 16 X 1978; pielgrzymka 1979 dała Polakom nadzieję.',
  },
  {
    title: 'Sierpień 1980 – „Solidarność”',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Sierpień 1980: strajk w Stoczni Gdańskiej od 14 sierpnia, Anna Walentynowicz i Lech Wałęsa, 21 postulatów, porozumienia sierpniowe 31 sierpnia, NSZZ Solidarność – blisko 10 milionów członków">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f2 s2 sw"/>
      <text x="200" y="42" class="tx-b" text-anchor="middle">14 VIII 1980 – strajk w Stoczni Gdańskiej</text>
      <g class="sw"><rect x="10" y="75" width="120" height="115" rx="10" class="f4 s4"/><rect x="140" y="75" width="120" height="115" rx="10" class="f1 s1"/><rect x="270" y="75" width="120" height="115" rx="10" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="110">21</text><text x="200" y="110">31 VIII</text><text x="330" y="110">ok. 10 mln</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="140">postulatów</text><text x="200" y="140">porozumienie</text><text x="200" y="158">w Gdańsku</text><text x="330" y="140">członków</text><text x="330" y="158">„Solidarności”</text></g>
    </svg>`,
    text: `<p><b>14 sierpnia 1980 r.</b> zastrajkowała Stocznia Gdańska – w obronie zwolnionej <b>Anny Walentynowicz</b>. Przywódcą został <b>Lech Wałęsa</b>. Strajkujący ogłosili <b>21 postulatów</b>, m.in. wolne związki zawodowe.</p>
      <p>W <b>porozumieniach sierpniowych</b> (31 sierpnia w Gdańsku) władza się zgodziła. Powstał <b>NSZZ „Solidarność”</b> – blisko 10 milionów członków.</p>`,
    remember: '„Solidarność” – niezależny związek zawodowy i wielki ruch społeczny (1980).',
    check: { q: 'Ilu członków liczyła „Solidarność”?', options: ['ok. 10 tys.', 'ok. 1 mln', 'blisko 10 mln'], answer: 2, explain: 'Do związku należało blisko 10 milionów ludzi.' },
  },
];

window.LESSONS['historia/stan-wojenny-1989'] = [
  {
    title: '13 grudnia 1981',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Stan wojenny: WRON i gen. Jaruzelski, internowanie działaczy, godzina milicyjna, wyłączone telefony, czołgi na ulicach, kopalnia Wujek – 9 zabitych górników">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f2 s2 sw"/>
      <text x="200" y="42" class="tx-b" text-anchor="middle">13 XII 1981 – stan wojenny (WRON)</text>
      <g class="sw"><rect x="10" y="75" width="120" height="115" rx="10" class="f4 s4"/><rect x="140" y="75" width="120" height="115" rx="10" class="f4 s4"/><rect x="270" y="75" width="120" height="115" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="110">🔒</text><text x="200" y="110">🌙 📵</text><text x="330" y="110">🕯️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="140">internowanie</text><text x="70" y="158">działaczy</text><text x="200" y="140">godzina milicyjna,</text><text x="200" y="158">bez telefonów</text><text x="330" y="140">„Wujek”:</text><text x="330" y="158">9 górników</text></g>
    </svg>`,
    text: `<p>Władze bały się utraty władzy, a ZSRS naciskał na rozprawę z „Solidarnością”. W nocy z 12 na <b>13 grudnia 1981 r.</b> władzę przejęła <b>WRON</b>, a gen. <b>Wojciech Jaruzelski</b> ogłosił <b>stan wojenny</b>.</p>
      <p>Tysiące działaczy <b>internowano</b>, wprowadzono godzinę milicyjną, wyłączono telefony, na ulice wyjechały czołgi. W kopalni <b>„Wujek”</b> zginęło 9 górników.</p>`,
    remember: '13 XII 1981 – stan wojenny; gen. Jaruzelski; internowanie, „Wujek”.',
    hook: '13 grudnia – „trzynastka” pechowa dla „Solidarności”.',
    check: { q: 'Kto ogłosił stan wojenny?', options: ['gen. Wojciech Jaruzelski', 'Lech Wałęsa', 'Edward Gierek'], answer: 0, explain: 'Gen. Jaruzelski ogłosił go w telewizji 13 grudnia 1981 r.' },
  },
  {
    title: 'Opór w podziemiu',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Opór: podziemna Solidarność, gazety i książki drugiego obiegu, msze za ojczyznę ks. Popiełuszki zamordowanego w 1984 roku, Nobel dla Wałęsy w 1983 roku">
      <g class="sw"><rect x="10" y="10" width="185" height="75" rx="10" class="f1 s1"/><rect x="205" y="10" width="185" height="75" rx="10" class="f3 s3"/><rect x="10" y="95" width="185" height="75" rx="10" class="f5 s5"/><rect x="205" y="95" width="185" height="75" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="42">📰 drugi obieg</text><text x="297" y="42">✊ podziemie</text><text x="102" y="127">⛪ ks. Popiełuszko</text><text x="297" y="127">🏅 Nobel 1983</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="67">gazety, książki</text><text x="297" y="67">tajne struktury</text><text x="102" y="152">zamordowany 1984</text><text x="297" y="152">Lech Wałęsa</text></g>
    </svg>`,
    text: `<p>„Solidarność” działała <b>w podziemiu</b>: tajne struktury, gazety i książki z „<b>drugiego obiegu</b>”, demonstracje. Wsparciem był <b>Kościół</b> – msze za ojczyznę ks. <b>Jerzego Popiełuszki</b>, którego w 1984 r. zamordowali funkcjonariusze SB. W 1983 r. Lech Wałęsa dostał <b>Pokojową Nagrodę Nobla</b>.</p>`,
    remember: 'Stan wojenny złamał związek na powierzchni, ale nie ducha oporu.',
  },
  {
    title: 'Okrągły Stół',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Okrągły stół: strona rządowa z Kiszczakiem, opozycja z Wałęsą, Mazowieckim, Geremkiem, Kuroniem, Michnikiem, przedstawiciele Kościoła; obrady 6 lutego – 5 kwietnia 1989">
      <circle cx="200" cy="105" r="60" class="f4 s4 sw"/>
      <text x="200" y="100" class="tx-b" text-anchor="middle">6 II – 5 IV</text><text x="200" y="122" class="tx-b" text-anchor="middle">1989</text>
      <text x="200" y="28" class="tx" text-anchor="middle">⛪ Kościół – pośrednik</text>
      <text x="70" y="95" class="tx-b" text-anchor="middle">władza</text><text x="70" y="117" class="tx-s" text-anchor="middle">Kiszczak</text>
      <text x="330" y="95" class="tx-b" text-anchor="middle">opozycja</text><text x="330" y="117" class="tx-s" text-anchor="middle">Wałęsa i inni</text>
    </svg>`,
    text: `<p>Kryzys gospodarczy, strajki w 1988 r. i zmiany w ZSRS skłoniły władzę do rozmów. <b>Okrągły Stół</b> obradował od <b>6 lutego do 5 kwietnia 1989 r.</b> Po stronie władzy był m.in. gen. <b>Czesław Kiszczak</b>, po stronie opozycji – <b>Lech Wałęsa</b>, Tadeusz Mazowiecki, Bronisław Geremek, Jacek Kuroń, Adam Michnik. Pośredniczył Kościół.</p>`,
    remember: 'Okrągły Stół: 6 II – 5 IV 1989; władza + opozycja + Kościół.',
    hook: 'Okrągły stół nie ma „szczytu” – symbol rozmowy równych stron.',
    check: { q: 'Kto przewodził opozycji przy Okrągłym Stole?', options: ['Czesław Kiszczak', 'Lech Wałęsa', 'Wojciech Jaruzelski'], answer: 1, explain: 'Opozycji przewodził Lech Wałęsa.' },
  },
  {
    title: 'Co ustalono',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Postanowienia: legalizacja Solidarności; Sejm – 65 procent mandatów dla władzy, 35 procent do wolnych wyborów; Senat – w pełni wolne wybory; urząd prezydenta">
      <rect x="10" y="10" width="380" height="45" rx="10" class="f3 s3 sw"/>
      <text x="200" y="40" class="tx-b" text-anchor="middle">✅ „Solidarność” znów legalna</text>
      <rect x="10" y="70" width="230" height="40" class="f2 s2 sw"/><rect x="240" y="70" width="150" height="40" class="f1 s1 sw"/>
      <g class="tx" text-anchor="middle"><text x="125" y="96">Sejm: 65% władza</text><text x="315" y="96">35% wolne</text></g>
      <rect x="10" y="125" width="380" height="40" class="f1 s1 sw"/>
      <text x="200" y="151" class="tx" text-anchor="middle">Senat: 100% wolne wybory</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">+ urząd prezydenta</text>
    </svg>`,
    text: `<p>Ustalono: <b>legalizację „Solidarności”</b>, <b>częściowo wolne wybory</b> do Sejmu (65% mandatów dla władzy, 35% do wolnej walki), <b>w pełni wolne wybory do Senatu</b> i urząd prezydenta.</p>`,
    remember: 'Sejm: 65/35. Senat: całkowicie wolny.',
    check: { q: 'Jakie wybory do Senatu ustalono przy Okrągłym Stole?', options: ['z 65% dla władzy', 'bez wyborów', 'w pełni wolne'], answer: 2, explain: 'Senat przywrócono i wybierano go w pełni wolnych wyborach.' },
  },
];

window.LESSONS['historia/iii-rp'] = [
  {
    title: 'Od PRL do III RP',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś czasu: 4 czerwca 1989 wybory, 1989 premier Mazowiecki, 29 grudnia 1989 nazwa Rzeczpospolita Polska i orzeł w koronie, 1990 plan Balcerowicza i prezydent Wałęsa, 1991 wolne wybory do Sejmu, 1997 Konstytucja">
      <defs><marker id="a-k8h-rp-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="100" x2="410" y2="100" class="ln sw" marker-end="url(#a-k8h-rp-1)"/>
      <g class="sw f3 s3"><circle cx="35" cy="100" r="7"/><circle cx="120" cy="100" r="7"/><circle cx="205" cy="100" r="7"/><circle cx="290" cy="100" r="7"/><circle cx="375" cy="100" r="7"/></g>
      <g class="tx-b" text-anchor="middle"><text x="35" y="78">VI 1989</text><text x="120" y="130">XII 1989</text><text x="205" y="78">1990</text><text x="290" y="130">1991</text><text x="375" y="78">1997</text></g>
      <g class="tx-s" text-anchor="middle"><text x="35" y="40">wybory,</text><text x="35" y="56">Mazowiecki</text><text x="120" y="152">orzeł</text><text x="120" y="168">w koronie</text>
        <text x="205" y="40">Balcerowicz,</text><text x="205" y="56">Wałęsa</text><text x="290" y="152">wolny Sejm</text><text x="375" y="56">Konstytucja</text></g>
    </svg>`,
    text: `<p><b>4 czerwca 1989 r.</b> „Solidarność” wygrała wybory, a premierem został <b>Tadeusz Mazowiecki</b>. <b>29 grudnia 1989 r.</b> wróciła nazwa <b>Rzeczpospolita Polska</b> i <b>orzeł w koronie</b>.</p>
      <p>W 1990 r. ruszył <b>plan Balcerowicza</b> (gospodarka rynkowa), a prezydentem wybrano <b>Lecha Wałęsę</b>. W 1991 r. odbyły się pierwsze w pełni wolne wybory do Sejmu, a w 1997 r. uchwalono <b>Konstytucję RP</b>.</p>`,
    remember: '1989 – wolność; 1990 – rynek i prezydent Wałęsa; 1997 – Konstytucja.',
    hook: 'Korona wróciła na głowę orła w grudniu 1989 r. – symbol odzyskanej suwerenności.',
    check: { q: 'Kiedy uchwalono Konstytucję RP?', options: ['1997', '1952', '1989'], answer: 0, explain: '2 kwietnia 1997 r.' },
  },
  {
    title: 'Lata 90.: zyski i koszty',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Lata 90.: zyski – wolność, wolne wybory, pełne sklepy, prywatne firmy; koszty – bezrobocie, upadek zakładów, rozwarstwienie, napięcia społeczne">
      <rect x="10" y="10" width="185" height="170" rx="12" class="f3 s3 sw"/><rect x="205" y="10" width="185" height="170" rx="12" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">zyski</text><text x="297" y="38">koszty</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="75">wolność słowa</text><text x="102" y="97">wolne wybory</text><text x="102" y="119">pełne sklepy</text><text x="102" y="141">własne firmy</text>
        <text x="297" y="75">bezrobocie</text><text x="297" y="97">upadek zakładów</text><text x="297" y="119">rozwarstwienie</text><text x="297" y="141">napięcia</text></g>
    </svg>`,
    text: `<p>Polacy zyskali <b>wolność</b>, wolne wybory, wolne media, pełne sklepy i możliwość prowadzenia firm. Ale reformy miały koszty: <b>bezrobocie</b> po upadku wielu państwowych zakładów, rozwarstwienie (jedni się bogacili, inni biednieli). Stąd <b>napięcia społeczne</b>.</p>`,
    remember: 'Transformacja: wolność i rynek – ale też bezrobocie i napięcia.',
  },
  {
    title: 'NATO i UE',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="NATO 12 marca 1999 – bezpieczeństwo, wzajemna obrona sojuszników. Unia Europejska 1 maja 2004 – rozwój, fundusze, wspólny rynek, swoboda podróżowania i pracy">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f1 s1 sw"/><rect x="205" y="10" width="185" height="180" rx="12" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">NATO</text><text x="297" y="40">UE</text><text x="102" y="68">12 III 1999</text><text x="297" y="68">1 V 2004</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="110">🛡️</text><text x="297" y="110">🇪🇺</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="145">bezpieczeństwo,</text><text x="102" y="163">wspólna obrona</text><text x="297" y="145">rozwój, fundusze,</text><text x="297" y="163">swoboda podróży</text></g>
    </svg>`,
    text: `<p><b>12 marca 1999 r.</b> Polska weszła do <b>NATO</b> – sojusznicy zobowiązali się do wzajemnej obrony; to gwarancja <b>bezpieczeństwa</b>. <b>1 maja 2004 r.</b> weszła do <b>Unii Europejskiej</b> – to szansa na <b>rozwój</b>: wspólny rynek, fundusze na drogi i szkoły, swoboda pracy, nauki i podróży.</p>`,
    remember: 'NATO (1999) = bezpieczeństwo. UE (2004) = rozwój.',
    hook: 'Najpierw tarcza (NATO), potem most do Europy (UE).',
    check: { q: 'Kiedy Polska weszła do Unii Europejskiej?', options: ['12 marca 1999 r.', '1 maja 2004 r.', '4 czerwca 1989 r.'], answer: 1, explain: '1 maja 2004 r., po referendum w 2003 r.' },
  },
  {
    title: 'Nie pomyl dat',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Pary dat do zapamiętania: 1989 wybory czerwcowe, 1991 pierwsze w pełni wolne wybory do Sejmu, 1999 NATO, 2004 Unia Europejska">
      <g class="sw"><rect x="10" y="10" width="185" height="80" rx="10" class="f3 s3"/><rect x="205" y="10" width="185" height="80" rx="10" class="f3 s3"/><rect x="10" y="100" width="185" height="80" rx="10" class="f1 s1"/><rect x="205" y="100" width="185" height="80" rx="10" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="45">1989</text><text x="297" y="45">1991</text><text x="102" y="135">1999</text><text x="297" y="135">2004</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="70">częściowo wolne</text><text x="297" y="70">w pełni wolny Sejm</text><text x="102" y="160">NATO</text><text x="297" y="160">Unia Europejska</text></g>
    </svg>`,
    text: `<p>Częsta pułapka: wybory z <b>4 czerwca 1989 r.</b> były tylko <b>częściowo wolne</b> (do Sejmu). Pierwsze <b>w pełni wolne</b> wybory do Sejmu odbyły się w <b>1991 r.</b> I nie myl NATO (1999) z UE (2004).</p>`,
    remember: '1989 – częściowo wolne; 1991 – w pełni wolne.',
    check: { q: 'Kiedy odbyły się pierwsze w pełni wolne wybory do Sejmu?', options: ['1989', '2004', '1991'], answer: 2, explain: '27 października 1991 r.' },
  },
];
