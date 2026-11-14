/* Lekcje – 🌍 Świat, elektryczność i sterowanie. Klucze: 'elektrycznosc/magnesy', 'elektrycznosc/czujniki'. Format: docs/LEKCJE.md
 * Treści oparte na działach z js/dane/swiat/elektrycznosc.js (ścieżka poza podstawą, źródła w polu basis). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['elektrycznosc/magnesy'] = [
  {
    title: 'Badaj magnesy jak japoński uczeń',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Magnesy badają dzieci w Anglii (7–8 lat), Japonii (8–9 lat) i Singapurze (8–9 lat). Japoński badacz: zauważ, zapytaj, przewiduj, sprawdź, zapisz, wniosek">
      <defs><marker id="a-swe-m1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="8" width="120" height="50" rx="10" class="f3 s3"/><rect x="140" y="8" width="120" height="50" rx="10" class="f4 s4"/><rect x="270" y="8" width="120" height="50" rx="10" class="f5 s5"/>
      <g class="tx-b" text-anchor="middle"><text x="70" y="30">Anglia</text><text x="200" y="30">Japonia</text><text x="330" y="30">Singapur</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="49">7–8 lat</text><text x="200" y="49">8–9 lat</text><text x="330" y="49">8–9 lat</text></g>
      <text x="10" y="84" class="tx-b">Japoński badacz:</text>
      <g class="f1 s1"><rect x="10" y="95" width="110" height="50" rx="10"/><rect x="145" y="95" width="110" height="50" rx="10"/><rect x="280" y="95" width="110" height="50" rx="10"/>
        <rect x="10" y="167" width="110" height="50" rx="10"/><rect x="145" y="167" width="110" height="50" rx="10"/><rect x="280" y="167" width="110" height="50" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="65" y="116">👀</text><text x="200" y="116">❓</text><text x="335" y="116">🤔</text><text x="65" y="188">🔬</text><text x="200" y="188">📝</text><text x="335" y="188">💡</text></g>
      <g class="tx" text-anchor="middle"><text x="65" y="138">zauważ</text><text x="200" y="138">zapytaj</text><text x="335" y="138">przewiduj</text><text x="65" y="210">sprawdź</text><text x="200" y="210">zapisz</text><text x="335" y="210">wniosek</text></g>
      <g class="ln" fill="none"><path d="M121,120 H141" marker-end="url(#a-swe-m1)"/><path d="M256,120 H276" marker-end="url(#a-swe-m1)"/><path d="M335,146 V156 H65 V163" marker-end="url(#a-swe-m1)"/>
        <path d="M121,192 H141" marker-end="url(#a-swe-m1)"/><path d="M256,192 H276" marker-end="url(#a-swe-m1)"/></g>
    </svg>`,
    text: `<p>W Anglii, Japonii i Singapurze dzieci w wieku 7–9 lat badają <b>magnesy</b>.</p>
      <p>W Japonii lekcja przyrody to praca <b>badacza</b>: zauważ, zapytaj, przewiduj, sprawdź, zapisz i wyciągnij wniosek. Spróbuj tak samo!</p>`,
    remember: 'Badacz: zauważ → zapytaj → przewiduj → sprawdź → zapisz → wniosek.',
    hook: 'Badacz najpierw zgaduje, a potem sprawdza – i nie wstydzi się pomyłki.',
  },
  {
    title: '🔬 Tabela badacza: co przyciąga magnes?',
    svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Tabela: rzecz, przewiduję, wynik. Spinacz – przewiduję tak, wynik tak. Gumka – nie, nie. Gwóźdź – tak, tak. Folia aluminiowa – przewiduję tak, wynik nie. Niespodzianka: nie każdy metal">
      <rect x="10" y="10" width="380" height="36" rx="6" class="f4 s4"/>
      <g class="tx-b"><text x="20" y="34">Rzecz</text><text x="240" y="34" text-anchor="middle">Przewiduję</text><text x="340" y="34" text-anchor="middle">Wynik</text></g>
      <rect x="10" y="50" width="380" height="40" rx="6" class="f3 s3"/><rect x="10" y="94" width="380" height="40" rx="6" class="f3 s3"/>
      <rect x="10" y="138" width="380" height="40" rx="6" class="f3 s3"/><rect x="10" y="182" width="380" height="40" rx="6" class="f2 s2 sw"/>
      <g class="tx"><text x="20" y="76">📎 spinacz</text><text x="20" y="120">gumka</text><text x="20" y="164">🔩 gwóźdź</text><text x="20" y="208">folia aluminiowa</text></g>
      <g class="tx" text-anchor="middle"><text x="240" y="76">✅</text><text x="340" y="76">✅</text><text x="240" y="120">❌</text><text x="340" y="120">❌</text>
        <text x="240" y="164">✅</text><text x="340" y="164">✅</text><text x="240" y="208">✅</text><text x="340" y="208">❌</text></g>
      <text x="200" y="244" text-anchor="middle" class="tx-b">Niespodzianka: nie każdy metal!</text>
    </svg>`,
    text: `<p>Zrób tabelę jak japońscy uczniowie. Najpierw wpisz, co <b>przewidujesz</b>. Potem <b>sprawdź</b> magnesem i zapisz wynik.</p>
      <p>Magnes przyciąga <b>żelazo</b> i <b>stal</b>. Drewna, papieru i gumki – nie. Niespodzianka: <b>nie każdy metal</b>! Folii aluminiowej, miedzi i złota też nie przyciąga.</p>`,
    remember: 'Magnes przyciąga żelazo i stal – ale nie każdy metal.',
    hook: 'Pomyłka w przewidywaniu to nie porażka – to odkrycie!',
    check: { q: 'Folia aluminiowa to metal. Czy magnes ją przyciągnie?', options: ['nie', 'tak'], answer: 0, explain: 'Nie. Magnes przyciąga żelazo i stal, a aluminium – nie.' },
  },
  {
    title: 'Dwa bieguny: N i S',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="U góry dwa magnesy zwrócone do siebie biegunami S i N – strzałki do siebie, przyciągają się. Na dole dwa magnesy zwrócone do siebie biegunami S i S – strzałki od siebie, odpychają się">
      <defs><marker id="a-swe-m3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="20" width="65" height="40" class="f2 s2 sw"/><rect x="85" y="20" width="65" height="40" class="f1 s1 sw"/>
      <rect x="230" y="20" width="65" height="40" class="f2 s2 sw"/><rect x="295" y="20" width="65" height="40" class="f1 s1 sw"/>
      <rect x="20" y="110" width="65" height="40" class="f2 s2 sw"/><rect x="85" y="110" width="65" height="40" class="f1 s1 sw"/>
      <rect x="230" y="110" width="65" height="40" class="f1 s1 sw"/><rect x="295" y="110" width="65" height="40" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="52" y="47">N</text><text x="117" y="47">S</text><text x="262" y="47">N</text><text x="327" y="47">S</text>
        <text x="52" y="137">N</text><text x="117" y="137">S</text><text x="262" y="137">S</text><text x="327" y="137">N</text></g>
      <g class="ln sw"><path d="M156,40 H184" marker-end="url(#a-swe-m3)"/><path d="M224,40 H196" marker-end="url(#a-swe-m3)"/>
        <path d="M184,130 H156" marker-end="url(#a-swe-m3)"/><path d="M196,130 H224" marker-end="url(#a-swe-m3)"/></g>
      <g class="tx" text-anchor="middle"><text x="190" y="88">S i N – przyciągają się</text><text x="190" y="178">S i S – odpychają się</text></g>
    </svg>`,
    text: `<p>Każdy magnes ma <b>dwa bieguny</b>: północny <b>N</b> i południowy <b>S</b>.</p>
      <p><b>Różne</b> bieguny się <b>przyciągają</b>. <b>Takie same</b> się <b>odpychają</b>.</p>`,
    remember: 'Różne się przyciągają, takie same się odpychają.',
    hook: 'N i S to para przyjaciół – trzymają się razem. N i N to dwa uparte koziołki.',
    check: { q: 'Zbliżasz biegun N do bieguna N. Co się stanie?', say: 'Zbliżasz biegun północny do bieguna północnego. Co się stanie?', options: ['odepchną się', 'przyciągną się'], answer: 0, explain: 'Takie same bieguny się odpychają.' },
  },
  {
    title: 'Siła na odległość',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Magnes sztabkowy. Spinacze przyczepione na obu końcach magnesu. Spinacz blisko magnesu jest przyciągany – strzałka do magnesu. Spinacz daleko – magnes przyciąga go słabo. Najmocniej przy biegunach">
      <defs><marker id="a-swe-m4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="60" width="90" height="40" class="f2 s2 sw"/><rect x="110" y="60" width="90" height="40" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="65" y="87">N</text><text x="155" y="87">S</text></g>
      <g class="ln" fill="none"><rect x="24" y="44" width="26" height="12" rx="6"/><rect x="24" y="104" width="26" height="12" rx="6"/><rect x="170" y="44" width="26" height="12" rx="6"/><rect x="170" y="104" width="26" height="12" rx="6"/>
        <rect x="236" y="74" width="26" height="12" rx="6"/><rect x="346" y="74" width="26" height="12" rx="6"/></g>
      <path d="M232,80 H208" class="ln sw" marker-end="url(#a-swe-m4)"/>
      <g class="tx" text-anchor="middle"><text x="249" y="60">blisko</text><text x="359" y="60">daleko</text><text x="359" y="110">słabo</text>
        <text x="200" y="150">Najmocniej przy biegunach – na końcach.</text></g>
    </svg>`,
    text: `<p>Magnes przyciąga spinacz, nawet gdy go <b>nie dotyka</b>.</p>
      <p>Im <b>bliżej</b>, tym <b>mocniej</b>. Najmocniej przyciąga na końcach – przy biegunach. Japońskie dzieci czują ręką, jak magnes ciągnie, i zbliżają go do igły kompasu – igła się rusza, choć magnes jej nie dotyka.</p>`,
    remember: 'Magnes działa na odległość. Im bliżej, tym mocniej.',
    hook: 'Jak zapach ciasta: im bliżej kuchni, tym mocniej go czujesz.',
  },
  {
    title: 'Magnes na nitce pokazuje północ',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Magnes sztabkowy wisi na nitce. Biegun N wskazuje północ, biegun S – południe. Pod spodem kompas z igłą">
      <defs><marker id="a-swe-m5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="100" y="10" width="200" height="8" class="f4 s4"/>
      <path d="M200,18 V60" class="ln"/>
      <rect x="110" y="60" width="90" height="30" class="f2 s2 sw"/><rect x="200" y="60" width="90" height="30" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="155" y="81">N</text><text x="245" y="81">S</text></g>
      <g class="ln sw"><path d="M104,75 H32" marker-end="url(#a-swe-m5)"/><path d="M296,75 H368" marker-end="url(#a-swe-m5)"/></g>
      <g class="tx-b"><text x="10" y="112">północ</text><text x="390" y="112" text-anchor="end">południe</text></g>
      <circle cx="200" cy="140" r="26" class="bg ln"/>
      <path d="M176,140 L200,134 L200,146 z" class="f2 s2"/><path d="M224,140 L200,134 L200,146 z" class="f1 s1"/>
      <text x="200" y="184" text-anchor="middle" class="tx">kompas</text>
    </svg>`,
    text: `<p>Zawieś magnes na nitce. Sam obróci się w kierunku <b>północ–południe</b>.</p>
      <p>Duży czy mały, sztabka czy podkowa – <b>zawsze</b> tak samo. Koniec, który pokazuje <b>północ</b>, nazwano <b>N</b> – biegun północny. Tak działa igła kompasu.</p>`,
    remember: 'Koniec magnesu, który pokazuje północ, to biegun N.',
    hook: 'N jak „North” – po angielsku północ.',
    check: { q: 'Magnes wisi na nitce. Co pokazuje biegun N?', say: 'Magnes wisi na nitce. Co pokazuje biegun północny?', options: ['północ', 'południe'], answer: 0, explain: 'Biegun północny N pokazuje północ.', sayExplain: 'Biegun północny pokazuje północ.' },
  },
  {
    title: '🔬 Zrób w domu: kompas z igły',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej: igłę do szycia pocieramy magnesem. Po prawej: igła wbita w korek pływa w misce z wodą i pokazuje północ–południe">
      <defs><marker id="a-swe-m6" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx-b"><text x="14" y="30">1</text><text x="214" y="30">2</text></g>
      <g class="tx"><text x="34" y="30">potrzyj igłę</text><text x="34" y="52">magnesem</text><text x="234" y="30">na korku,</text><text x="234" y="52">na wodzie</text></g>
      <rect x="60" y="80" width="25" height="22" class="f2 s2"/><rect x="85" y="80" width="25" height="22" class="f1 s1"/>
      <path d="M50,72 H160" class="ln sw" marker-end="url(#a-swe-m6)"/>
      <rect x="30" y="110" width="140" height="4" class="f4 s4"/><path d="M170,108 L182,112 L170,116 Z" class="f4 s4"/>
      <path d="M186,120 H208" class="ln sw" marker-end="url(#a-swe-m6)"/>
      <path d="M215,140 Q300,215 385,140" class="ln sw" fill="none"/>
      <ellipse cx="300" cy="140" rx="85" ry="14" class="f1 s1"/>
      <rect x="285" y="124" width="30" height="14" rx="3" class="f2 s2"/>
      <rect x="250" y="122" width="100" height="4" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="238" y="116">N</text><text x="362" y="116">S</text></g>
      <text x="200" y="212" text-anchor="middle" class="tx-b">Igła pokaże północ–południe!</text>
    </svg>`,
    text: `<p>Żelazo i stal przy magnesie <b>same stają się magnesem</b> – jak gwóźdź, który przyciąga spinacze.</p>
      <p>Zrób kompas (z dorosłym – igła jest ostra!): <b>potrzyj</b> igłę do szycia magnesem, wbij ją w <b>korek</b> i połóż na <b>wodzie</b> w misce. W Singapurze dzieci też robią magnes, pocierając. Odsuń inne magnesy i rzeczy z żelaza – psują wynik.</p>`,
    remember: 'Żelazo przy magnesie samo staje się magnesem.',
    hook: 'Magnes „pożycza” igle swoją moc – a igła na wodzie szuka północy.',
    check: { q: 'Czego potrzebujesz do kompasu z igły?', options: ['igły, magnesu, korka i miski z wodą', 'igły, kleju, farby i kartki'], answer: 0, explain: 'Igłę pocierasz magnesem, wbijasz w korek i kładziesz na wodzie – może się wtedy swobodnie obracać.' },
  },
];

window.LESSONS['elektrycznosc/czujniki'] = [
  {
    title: 'Urządzenia, które same reagują',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Flaga Anglii: key stage 3, uczniowie 11–14 lat – czujniki i mikrokontrolery. Flaga Japonii: gimnazjum, 12–15 lat – programują pomiar i sterowanie">
      <rect x="10" y="15" width="60" height="40" class="fl-w"/>
      <rect x="36" y="15" width="8" height="40" class="fl-r"/>
      <rect x="10" y="31" width="60" height="8" class="fl-r"/>
      <rect x="10" y="15" width="60" height="40" class="ln" fill="none"/>
      <text x="84" y="35" class="tx-b">Anglia · key stage 3</text>
      <text x="84" y="53" class="tx-s">11–14 lat: czujniki, mikrokontrolery</text>
      <rect x="10" y="95" width="60" height="40" class="fl-w"/>
      <circle cx="40" cy="115" r="12" class="fl-r"/>
      <rect x="10" y="95" width="60" height="40" class="ln" fill="none"/>
      <text x="84" y="115" class="tx-b">Japonia · gimnazjum</text>
      <text x="84" y="133" class="tx-s">12–15 lat: pomiar i sterowanie</text>
    </svg>`,
    text: `<p>W Anglii uczniowie w wieku 11–14 lat budują produkty, które <b>reagują na czujniki</b> i sterują np. silnikami – za pomocą <b>mikrokontrolerów</b>.</p>
      <p>W Japonii w gimnazjum (12–15 lat) uczniowie na technice <b>programują pomiar i sterowanie</b>: piszą program, sprawdzają go i poprawiają błędy.</p>`,
    remember: 'Pomiar i sterowanie: urządzenie samo mierzy i samo reaguje.',
  },
  {
    title: 'Wejście → sterownik → wyjście',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: czujnik (wejście) – strzałka – sterownik (program) – strzałka – element wykonawczy (wyjście). Przykład pod spodem: czujnik światła, warunek czy jest ciemno, lampa">
      <defs><marker id="a-swe-c2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="16" width="110" height="84" rx="10" class="f1 s1 sw"/>
      <rect x="145" y="16" width="110" height="84" rx="10" class="f5 s5 sw"/>
      <rect x="280" y="16" width="110" height="84" rx="10" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="65" y="50">Czujnik</text><text x="200" y="50">Sterownik</text><text x="335" y="44">Element</text></g>
      <text x="335" y="66" text-anchor="middle" class="tx">wykonawczy</text>
      <g class="tx-s" text-anchor="middle"><text x="65" y="76">wejście</text><text x="200" y="76">program</text><text x="335" y="88">wyjście</text></g>
      <g class="ln sw"><path d="M122,58 H141" marker-end="url(#a-swe-c2)"/><path d="M257,58 H276" marker-end="url(#a-swe-c2)"/>
        <path d="M122,155 H141" marker-end="url(#a-swe-c2)"/><path d="M257,155 H276" marker-end="url(#a-swe-c2)"/></g>
      <rect x="10" y="130" width="110" height="50" rx="10" class="f1 s1"/>
      <rect x="145" y="130" width="110" height="50" rx="10" class="f5 s5"/>
      <rect x="280" y="130" width="110" height="50" rx="10" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="65" y="161">☀️ światło</text><text x="200" y="161">ciemno?</text><text x="335" y="161">💡 lampa</text></g>
    </svg>`,
    text: `<p><b>Czujnik</b> mierzy coś w otoczeniu i zamienia to na sygnał elektryczny. <b>Sterownik</b> – np. mikrokontroler – wykonuje <b>program</b> i decyduje.</p>
      <p><b>Element wykonawczy</b> coś robi: silnik się kręci, lampa świeci, brzęczyk piszczy, pompa pompuje.</p>`,
    remember: 'Wejście (czujnik) → sterownik (program) → wyjście (element wykonawczy).',
    hook: 'Jak ty: oczy to czujnik, mózg to sterownik, a ręce – element wykonawczy.',
    check: { q: 'Który z tych elementów jest wyjściem (elementem wykonawczym)?', options: ['silnik', 'czujnik światła'], answer: 0, explain: 'Silnik robi coś w świecie – daje ruch. Czujnik światła to wejście.' },
  },
  {
    title: 'Jakie bywają czujniki?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Czujnik ultradźwiękowy wysyła ultradźwięki do ściany i odbiera echo. Pod spodem cztery rodzaje czujników: światło, temperatura, ciśnienie, poziom cieczy">
      <defs><marker id="a-swe-c3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="44" height="70" rx="6" class="f1 s1 sw"/>
      <circle cx="32" cy="40" r="9" class="bg ln"/><circle cx="32" cy="70" r="9" class="bg ln"/>
      <rect x="350" y="10" width="20" height="90" class="f4 s4"/>
      <g class="ln sw"><path d="M60,40 H342" marker-end="url(#a-swe-c3)"/><path d="M342,70 H60" marker-end="url(#a-swe-c3)"/></g>
      <g class="tx" text-anchor="middle"><text x="200" y="32">ultradźwięki</text><text x="200" y="92">echo</text></g>
      <rect x="10" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <rect x="107" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <rect x="205" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <rect x="302" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="54" y="166">☀️</text><text x="151" y="166">🌡️</text><text x="249" y="166">⏲️</text><text x="346" y="166">💧</text></g>
      <g class="tx-s" text-anchor="middle"><text x="54" y="196">światło</text><text x="151" y="196">temperatura</text><text x="249" y="196">ciśnienie</text><text x="346" y="190">poziom</text><text x="346" y="207">cieczy</text></g>
    </svg>`,
    text: `<p>Czujnik <b>ultradźwiękowy</b> wysyła ultradźwięki i mierzy, po jakim czasie wróci <b>echo</b>. Im dłużej, tym przeszkoda dalej. Czujnik <b>optyczny</b> reaguje na światło. Są też czujniki temperatury, ciśnienia i poziomu cieczy.</p>
      <p>Przycisk to czujnik <b>dwustanowy</b>: daje tylko 1 albo 0 – włączony albo wyłączony.</p>`,
    remember: 'Czujnik zamienia światło, odległość czy temperaturę na sygnał elektryczny.',
    hook: 'Ultradźwiękowy działa jak echo w górach: krzyczysz i czekasz, kiedy wróci.',
  },
  {
    title: 'Program w pętli: mierz → porównaj → steruj',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Program: while True, jasnosc równa się czujnik, jeśli jasnosc mniejsza od 30 – lampa włącz, w przeciwnym razie – lampa wyłącz. Tabela: jasność 20 – włącz, 30 – wyłącz, 50 – wyłącz. 30 mniejsze od 30 to fałsz">
      <rect x="10" y="10" width="255" height="182" rx="10" class="f1 s1"/>
      <g class="tx"><text x="22" y="40">while True:</text><text x="42" y="68">jasnosc = czujnik()</text><text x="42" y="96">if jasnosc &lt; 30:</text>
        <text x="62" y="124">lampa_wlacz()</text><text x="42" y="152">else:</text><text x="62" y="180">lampa_wylacz()</text></g>
      <rect x="280" y="10" width="130" height="34" rx="6" class="f4 s4"/>
      <g class="tx-s"><text x="288" y="32">jasnosc</text><text x="350" y="32">lampa</text></g>
      <rect x="280" y="52" width="130" height="32" rx="6" class="f3 s3"/>
      <rect x="280" y="92" width="130" height="32" rx="6" class="f2 s2 sw"/>
      <rect x="280" y="132" width="130" height="32" rx="6" class="f2 s2"/>
      <g class="tx"><text x="300" y="74">20</text><text x="350" y="74">włącz</text><text x="300" y="114">30</text><text x="350" y="114">wyłącz</text><text x="300" y="154">50</text><text x="350" y="154">wyłącz</text></g>
      <text x="345" y="186" text-anchor="middle" class="tx-s">30 &lt; 30 → fałsz</text>
    </svg>`,
    text: `<p>Sterownik w kółko powtarza: <b>zmierz → porównaj → steruj</b>. Pętla <code>while True</code> działa bez końca, bo świat ciągle się zmienia.</p>
      <p>Uważaj na granicę: dla 30 warunek <code>30 &lt; 30</code> jest fałszywy – wykona się <code>else</code>.</p>`,
    remember: 'Mierz → porównaj → steruj – i od nowa.',
    hook: 'Sprawdzaj granicę jak bramkarz linię bramki: „równo” to jeszcze nie „mniej”.',
    check: { q: 'Czujnik zmierzył jasnosc = 30. Co zrobi program z rysunku?', options: ['wyłączy lampę', 'włączy lampę'], answer: 0, explain: '30 < 30 to fałsz, więc wykona się else: lampa_wylacz().' },
  },
  {
    title: 'Kilka czujników – logika AND i OR',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Dwa czujniki: ciemno i ktoś blisko prowadzą do bramki AND, a ona do lampy. Drugi przykład: drzwi otwarte i okno otwarte prowadzą do bramki OR, a ona do alarmu">
      <defs><marker id="a-swe-c5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="15" width="140" height="36" rx="8" class="f1 s1"/><rect x="10" y="65" width="140" height="36" rx="8" class="f1 s1"/>
      <rect x="10" y="125" width="140" height="36" rx="8" class="f1 s1"/><rect x="10" y="175" width="140" height="36" rx="8" class="f1 s1"/>
      <g class="tx"><text x="22" y="39">ciemno</text><text x="22" y="89">ktoś blisko</text><text x="22" y="149">drzwi otwarte</text><text x="22" y="199">okno otwarte</text></g>
      <rect x="190" y="30" width="70" height="56" rx="8" class="f5 s5 sw"/><rect x="190" y="140" width="70" height="56" rx="8" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="225" y="64">AND</text><text x="225" y="174">OR</text></g>
      <g class="ln" fill="none"><path d="M150,33 H172 V48 H186" marker-end="url(#a-swe-c5)"/><path d="M150,83 H172 V68 H186" marker-end="url(#a-swe-c5)"/>
        <path d="M150,143 H172 V158 H186" marker-end="url(#a-swe-c5)"/><path d="M150,193 H172 V178 H186" marker-end="url(#a-swe-c5)"/>
        <path d="M260,58 H300" marker-end="url(#a-swe-c5)"/><path d="M260,168 H300" marker-end="url(#a-swe-c5)"/></g>
      <rect x="305" y="40" width="85" height="36" rx="8" class="f3 s3"/><rect x="305" y="150" width="85" height="36" rx="8" class="f3 s3"/>
      <g class="tx"><text x="312" y="64">💡 lampa</text><text x="312" y="174">🔔 alarm</text></g>
    </svg>`,
    text: `<p>Gdy czujników jest kilka, program łączy warunki jak <b>bramki logiczne</b>.</p>
      <p>Lampa przy drzwiach świeci, gdy jest ciemno <b>AND</b> ktoś jest blisko – muszą być spełnione oba warunki. Alarm piszczy, gdy otwarte są drzwi <b>OR</b> okno – wystarczy jeden.</p>`,
    remember: 'AND – muszą być oba. OR – wystarczy jeden.',
    hook: 'Znasz to z działu o bramkach: AND to „i”, OR to „lub”.',
    check: { q: 'Jest ciemno, ale nikogo nie ma. Czy lampa (ciemno AND ktoś blisko) świeci?', options: ['nie', 'tak'], answer: 0, explain: 'AND wymaga, żeby oba warunki były prawdziwe. Nikogo nie ma, więc lampa nie świeci.' },
  },
  {
    title: 'Sprzężenie zwrotne – pętla zamknięta',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Pętla: sterownik włącza grzałkę, grzałka ogrzewa wodę, czujnik mierzy temperaturę wody, sterownik porównuje i znów steruje grzałką">
      <defs><marker id="a-swe-c6" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="20" width="160" height="50" rx="10" class="f5 s5 sw"/>
      <rect x="220" y="20" width="160" height="50" rx="10" class="f3 s3 sw"/>
      <rect x="220" y="150" width="160" height="50" rx="10" class="f2 s2 sw"/>
      <rect x="20" y="150" width="160" height="50" rx="10" class="f1 s1 sw"/>
      <g class="tx" text-anchor="middle"><text x="100" y="51">🧠 sterownik</text><text x="300" y="51">🔥 grzałka</text><text x="300" y="181">💧 woda cieplejsza</text><text x="100" y="181">🌡️ czujnik</text></g>
      <g class="ln sw"><path d="M182,45 H216" marker-end="url(#a-swe-c6)"/><path d="M300,72 V146" marker-end="url(#a-swe-c6)"/>
        <path d="M218,175 H184" marker-end="url(#a-swe-c6)"/><path d="M100,148 V74" marker-end="url(#a-swe-c6)"/></g>
      <text x="200" y="115" text-anchor="middle" class="tx-s">pętla zamknięta</text>
    </svg>`,
    text: `<p>Czujnik mierzy <b>skutek</b> tego, co zrobił element wykonawczy. Sterownik porównuje to z celem i <b>poprawia</b> działanie. To <b>sprzężenie zwrotne</b> – pętla zamknięta.</p>
      <p>Woda za zimna? Grzałka grzeje. Dość ciepła? Sterownik wyłącza grzałkę.</p>`,
    remember: 'Sprzężenie zwrotne: czujnik sprawdza skutek, sterownik poprawia.',
    hook: 'Jak jazda na rowerze: widzisz, że zjeżdżasz w bok – i od razu poprawiasz kierownicą.',
  },
];
