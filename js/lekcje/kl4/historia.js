/* Lekcje – historia, klasa 4. Klucz: 'historia/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

// ---------------------------------------------------------------------------
window.LESSONS['historia/historia-nauka'] = [
  {
    title: 'Jedno słowo – trzy znaczenia',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy kafelki: historia jako przeszłość (klepsydra), jako nauka o przeszłości (lupa) i jako opowieść (książka)">
      <rect x="10" y="10" width="120" height="130" rx="12" class="f4 s4 sw"/>
      <rect x="140" y="10" width="120" height="130" rx="12" class="f1 s1 sw"/>
      <rect x="270" y="10" width="120" height="130" rx="12" class="f3 s3 sw"/>
      <text x="70" y="62" class="tx-b" text-anchor="middle">⏳</text>
      <text x="200" y="62" class="tx-b" text-anchor="middle">🔎</text>
      <text x="330" y="62" class="tx-b" text-anchor="middle">📖</text>
      <text x="70" y="96" class="tx-b" text-anchor="middle">przeszłość</text>
      <text x="200" y="96" class="tx-b" text-anchor="middle">nauka</text>
      <text x="330" y="96" class="tx-b" text-anchor="middle">opowieść</text>
      <text x="70" y="122" class="tx-s" text-anchor="middle">to, co minęło</text>
      <text x="200" y="122" class="tx-s" text-anchor="middle">bada przeszłość</text>
      <text x="330" y="122" class="tx-s" text-anchor="middle">„Opowiem ci…”</text>
      <text x="200" y="172" class="tx" text-anchor="middle">historia = przeszłość · nauka · opowieść</text>
    </svg>`,
    text: `<p>Słowo <b>historia</b> ma trzy znaczenia. Może oznaczać <b>przeszłość</b> – wszystko, co już się wydarzyło. Może oznaczać <b>naukę o przeszłości</b> – tę, której uczysz się w szkole. A może też oznaczać <b>opowieść</b>: „Opowiem ci pewną historię…”.</p>
      <p>Po co znać historię? Dzięki niej rozumiesz, skąd się wzięły święta, nazwy miast, zabytki i zwyczaje. Poznajesz też swoich <b>przodków</b> – ludzi z twojej rodziny, którzy żyli przed tobą.</p>`,
    remember: 'Historia to przeszłość, nauka o przeszłości i opowieść.',
    hook: 'Trzy znaczenia jak trzy pytania: <b>co było?</b> (przeszłość), <b>jak to zbadać?</b> (nauka), <b>jak to opowiedzieć?</b> (opowieść).',
    check: { q: 'W zdaniu „Mamy dziś sprawdzian z historii” słowo „historia” oznacza…', options: ['opowieść', 'naukę o przeszłości', 'coś, co już minęło'], answer: 1, explain: 'Przedmiot szkolny historia to nauka o przeszłości.' },
  },
  {
    title: 'Historyk – detektyw przeszłości',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Praca historyka w trzech krokach: zbiera ślady, porównuje je i sprawdza, a potem opisuje, co się wydarzyło">
      <defs><marker id="a-k4hi-nauka-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="110" height="110" rx="12" class="f4 s4"/>
      <rect x="145" y="20" width="110" height="110" rx="12" class="f1 s1"/>
      <rect x="280" y="20" width="110" height="110" rx="12" class="f3 s3"/>
      <text x="65" y="62" class="tx-b" text-anchor="middle">📜🏺</text>
      <text x="200" y="62" class="tx-b" text-anchor="middle">🔍</text>
      <text x="335" y="62" class="tx-b" text-anchor="middle">✍️</text>
      <text x="65" y="94" class="tx" text-anchor="middle">zbiera</text>
      <text x="65" y="114" class="tx" text-anchor="middle">ślady</text>
      <text x="200" y="94" class="tx" text-anchor="middle">porównuje</text>
      <text x="200" y="114" class="tx" text-anchor="middle">i sprawdza</text>
      <text x="335" y="94" class="tx" text-anchor="middle">opisuje</text>
      <text x="335" y="114" class="tx" text-anchor="middle">przeszłość</text>
      <line x1="122" y1="75" x2="141" y2="75" class="ln s2" marker-end="url(#a-k4hi-nauka-1)"/>
      <line x1="257" y1="75" x2="276" y2="75" class="ln s2" marker-end="url(#a-k4hi-nauka-1)"/>
      <text x="200" y="162" class="tx-s" text-anchor="middle">ślady przeszłości = źródła historyczne</text>
    </svg>`,
    text: `<p><b>Historyk</b> to badacz przeszłości. Pracuje jak detektyw: zbiera ślady, porównuje je ze sobą i sprawdza, czy można im wierzyć. Dopiero potem opisuje, co się wydarzyło.</p>
      <p>Takie ślady to <b>źródła historyczne</b> – wszystko, co powstało w przeszłości i mówi nam coś o niej: stary list, moneta, zdjęcie, a nawet opowieść babci.</p>`,
    remember: 'Źródło historyczne to wszystko, co powstało w przeszłości i mówi nam coś o niej.',
    hook: 'Detektyw szuka śladów przestępcy, historyk – śladów przeszłości. Obaj nie zgadują, tylko <b>sprawdzają dowody</b>.',
  },
  {
    title: 'Pięć rodzajów źródeł',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Rodzaje źródeł historycznych: pisane (kronika, list), materialne (moneta, dzban), ikonograficzne (obraz, zdjęcie), ustne (wspomnienia) i audiowizualne (nagranie, film)">
      <rect x="10" y="10" width="380" height="64" rx="12" class="f1 s1"/>
      <text x="40" y="50" class="tx-b" text-anchor="middle">📜</text>
      <text x="70" y="38" class="tx-b">pisane</text>
      <text x="70" y="60" class="tx-s">mają tekst: kronika, list, pamiętnik, dokument</text>
      <text x="200" y="98" class="tx-s" text-anchor="middle">niepisane – bez tekstu:</text>
      <rect x="10" y="108" width="92" height="112" rx="10" class="f4 s4"/>
      <rect x="106" y="108" width="92" height="112" rx="10" class="f2 s2"/>
      <rect x="202" y="108" width="92" height="112" rx="10" class="f3 s3"/>
      <rect x="298" y="108" width="92" height="112" rx="10" class="f5 s5"/>
      <text x="56" y="142" class="tx-b" text-anchor="middle">🏺</text>
      <text x="152" y="142" class="tx-b" text-anchor="middle">🖼️</text>
      <text x="248" y="142" class="tx-b" text-anchor="middle">🗣️</text>
      <text x="344" y="142" class="tx-b" text-anchor="middle">🎞️</text>
      <text x="56" y="172" class="tx-s" text-anchor="middle">materialne</text>
      <text x="152" y="172" class="tx-s" text-anchor="middle">ikonogra-</text>
      <text x="152" y="187" class="tx-s" text-anchor="middle">ficzne</text>
      <text x="248" y="172" class="tx-s" text-anchor="middle">ustne</text>
      <text x="344" y="172" class="tx-s" text-anchor="middle">audio-</text>
      <text x="344" y="187" class="tx-s" text-anchor="middle">wizualne</text>
      <text x="56" y="207" class="tx-s" text-anchor="middle">moneta</text>
      <text x="152" y="207" class="tx-s" text-anchor="middle">zdjęcie</text>
      <text x="248" y="207" class="tx-s" text-anchor="middle">wspomnienia</text>
      <text x="344" y="207" class="tx-s" text-anchor="middle">film</text>
    </svg>`,
    text: `<p>Źródła dzielimy na <b>pisane</b> (mają tekst) i <b>niepisane</b>. Niepisane to:</p>
      <ul><li><b>materialne</b> – przedmioty: monety, narzędzia, naczynia, budowle,</li>
      <li><b>ikonograficzne</b> – obrazy: rysunki, fotografie, plakaty,</li>
      <li><b>ustne</b> – wspomnienia i opowieści przekazywane z ust do ust,</li>
      <li><b>audiowizualne</b> – nagrania dźwięku i filmy.</li></ul>`,
    remember: 'Z tekstem – źródło pisane. Bez tekstu – niepisane: materialne, ikonograficzne, ustne, audiowizualne.',
    hook: '<b>Ikona</b> to obrazek na ekranie telefonu – więc źródło <b>ikono</b>graficzne to źródło obrazkowe.',
    check: { q: 'Stara moneta znaleziona w ogrodzie to źródło…', options: ['pisane', 'ustne', 'materialne'], answer: 2, explain: 'Moneta to przedmiot – źródło materialne (rzeczowe).' },
  },
  {
    title: 'Czy temu źródłu można wierzyć?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy pytania historyka o wiarygodność źródła: kto i kiedy je stworzył, czy autor był świadkiem, czy inne źródła mówią to samo">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f1 s1"/>
      <rect x="10" y="70" width="380" height="50" rx="10" class="f4 s4"/>
      <rect x="10" y="130" width="380" height="50" rx="10" class="f3 s3"/>
      <text x="38" y="42" class="tx-b" text-anchor="middle">1</text>
      <text x="38" y="102" class="tx-b" text-anchor="middle">2</text>
      <text x="38" y="162" class="tx-b" text-anchor="middle">3</text>
      <text x="62" y="41" class="tx">Kto i kiedy stworzył to źródło?</text>
      <text x="62" y="101" class="tx">Czy autor był świadkiem zdarzeń?</text>
      <text x="62" y="161" class="tx">Czy inne źródła mówią to samo?</text>
    </svg>`,
    text: `<p>Nie każde źródło mówi prawdę. Autor mógł się pomylić, czegoś nie widzieć albo celowo coś upiększyć. Źródło, któremu można ufać, nazywamy <b>wiarygodnym</b>.</p>
      <p>Historyk zadaje trzy pytania. Jeśli autor był <b>świadkiem</b> i inne źródła mówią <b>to samo</b>, łatwiej mu zaufać. Źródeł szuka w <b>muzeum</b> (przedmioty), <b>archiwum</b> (dokumenty) i <b>bibliotece</b> (książki, stare gazety).</p>`,
    remember: 'Wiarygodne źródło = takie, któremu można ufać. Zawsze porównuj kilka źródeł.',
    hook: 'Jak z plotką na przerwie: wierzysz bardziej temu, kto <b>sam widział</b>, i temu, co potwierdza <b>kilka osób</b>.',
    check: { q: 'Gdzie przechowuje się stare dokumenty, np. akty urodzenia?', options: ['w archiwum', 'w muzeum', 'w sklepie'], answer: 0, explain: 'Archiwum gromadzi i przechowuje stare dokumenty.' },
  },
  {
    title: 'Historia, legenda czy fikcja?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie: historia opiera się na dowodach, legenda miesza prawdę z wymysłem, fikcja literacka jest wymyślona przez autora">
      <rect x="10" y="10" width="120" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="140" y="10" width="120" height="150" rx="12" class="f4 s4 sw"/>
      <rect x="270" y="10" width="120" height="150" rx="12" class="f5 s5 sw"/>
      <text x="70" y="40" class="tx-b" text-anchor="middle">historia</text>
      <text x="200" y="40" class="tx-b" text-anchor="middle">legenda</text>
      <text x="330" y="40" class="tx-b" text-anchor="middle">fikcja</text>
      <text x="70" y="82" class="tx-b" text-anchor="middle">✅✅</text>
      <text x="200" y="82" class="tx-b" text-anchor="middle">✅🐉</text>
      <text x="330" y="82" class="tx-b" text-anchor="middle">✏️✨</text>
      <text x="70" y="114" class="tx-s" text-anchor="middle">oparta</text>
      <text x="70" y="132" class="tx-s" text-anchor="middle">na dowodach</text>
      <text x="200" y="114" class="tx-s" text-anchor="middle">prawda</text>
      <text x="200" y="132" class="tx-s" text-anchor="middle">+ wymysł</text>
      <text x="330" y="114" class="tx-s" text-anchor="middle">wymyślił</text>
      <text x="330" y="132" class="tx-s" text-anchor="middle">autor</text>
      <text x="200" y="188" class="tx" text-anchor="middle">Pytaj: czy są na to dowody?</text>
    </svg>`,
    text: `<p><b>Historia</b> opisuje to, co naprawdę się wydarzyło – na podstawie dowodów, czyli źródeł. <b>Legenda</b> miesza prawdziwe miejsca i postacie z wymyślonymi zdarzeniami, np. ze smokami i czarami. <b>Fikcja literacka</b> to zdarzenia wymyślone przez autora książki – nawet jeśli wyglądają jak prawdziwe.</p>`,
    remember: 'Historia – dowody. Legenda – prawda zmieszana z wymysłem. Fikcja – wymysł autora.',
    hook: 'Legenda jest jak pizza: <b>prawdziwe ciasto</b> (miasto, rzeka, zamek) i <b>fantazyjne dodatki</b> (smok, czary).',
    check: { q: 'Opowieść o prawdziwym zamku, w którym mieszkał smok, to…', options: ['źródło pisane', 'legenda', 'mapa historyczna'], answer: 1, explain: 'Prawdziwy zamek i wymyślony smok – to typowa legenda.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/rodzina-region'] = [
  {
    title: 'Drzewo genealogiczne',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Drzewo genealogiczne: na dole ty, wyżej mama i tata, nad nimi czworo dziadków, na górze pradziadkowie. Każdy poziom to jedno pokolenie">
      <g class="ln-thin">
        <line x1="200" y1="196" x2="200" y2="180"/><line x1="110" y1="180" x2="290" y2="180"/>
        <line x1="110" y1="180" x2="110" y2="160"/><line x1="290" y1="180" x2="290" y2="160"/>
        <line x1="110" y1="128" x2="110" y2="114"/><line x1="55" y1="114" x2="155" y2="114"/>
        <line x1="55" y1="114" x2="55" y2="100"/><line x1="155" y1="114" x2="155" y2="100"/>
        <line x1="290" y1="128" x2="290" y2="114"/><line x1="245" y1="114" x2="345" y2="114"/>
        <line x1="245" y1="114" x2="245" y2="100"/><line x1="345" y1="114" x2="345" y2="100"/>
        <line x1="55" y1="68" x2="55" y2="52"/><line x1="155" y1="68" x2="155" y2="52"/>
        <line x1="245" y1="68" x2="245" y2="52"/><line x1="345" y1="68" x2="345" y2="52"/>
      </g>
      <rect x="20" y="10" width="360" height="42" rx="10" class="f5 s5"/>
      <text x="200" y="37" class="tx" text-anchor="middle">pradziadkowie</text>
      <rect x="17" y="68" width="76" height="32" rx="8" class="f4 s4"/><rect x="117" y="68" width="76" height="32" rx="8" class="f4 s4"/>
      <rect x="207" y="68" width="76" height="32" rx="8" class="f4 s4"/><rect x="307" y="68" width="76" height="32" rx="8" class="f4 s4"/>
      <text x="55" y="90" class="tx-s" text-anchor="middle">babcia</text><text x="155" y="90" class="tx-s" text-anchor="middle">dziadek</text>
      <text x="245" y="90" class="tx-s" text-anchor="middle">babcia</text><text x="345" y="90" class="tx-s" text-anchor="middle">dziadek</text>
      <rect x="70" y="128" width="80" height="32" rx="8" class="f1 s1"/><rect x="250" y="128" width="80" height="32" rx="8" class="f1 s1"/>
      <text x="110" y="150" class="tx" text-anchor="middle">mama</text><text x="290" y="150" class="tx" text-anchor="middle">tata</text>
      <rect x="160" y="196" width="80" height="34" rx="8" class="f3 s3 sw"/>
      <text x="200" y="219" class="tx-b" text-anchor="middle">ty</text>
    </svg>`,
    text: `<p><b>Drzewo genealogiczne</b> to rysunek twojej rodziny. Na dole jesteś ty, wyżej rodzice, nad nimi dziadkowie, a jeszcze wyżej pradziadkowie. Ci, którzy żyli przed tobą, to twoi <b>przodkowie</b>.</p>
      <p>Każdy poziom drzewa to jedno <b>pokolenie</b> – ludzie w rodzinie w podobnym wieku. Ty i twoje rodzeństwo to jedno pokolenie, rodzice – drugie, dziadkowie – trzecie.</p>`,
    remember: 'Przodkowie – żyli przed tobą. Potomkowie – dzieci, wnuki, prawnuki. Pokolenie – jeden poziom drzewa.',
    hook: 'Drzewo genealogiczne rośnie <b>odwrotnie</b>: ty jesteś na dole jak pień, a gałęzie z przodkami idą do góry.',
    check: { q: 'Rodzice twoich dziadków to twoi…', options: ['wujkowie', 'pradziadkowie', 'potomkowie'], answer: 1, explain: 'Pokolenie nad dziadkami to pradziadkowie.' },
  },
  {
    title: 'Pamiątki rodzinne – skarby z szuflady',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Cztery pamiątki rodzinne: stare zdjęcie, list, medal i dokument. Pod spodem: rozmowa z dziadkami to źródło ustne">
      <rect x="10" y="10" width="88" height="104" rx="10" class="f4 s4"/>
      <rect x="107" y="10" width="88" height="104" rx="10" class="f4 s4"/>
      <rect x="204" y="10" width="88" height="104" rx="10" class="f4 s4"/>
      <rect x="301" y="10" width="88" height="104" rx="10" class="f4 s4"/>
      <text x="54" y="54" class="tx-b" text-anchor="middle">📷</text>
      <text x="151" y="54" class="tx-b" text-anchor="middle">✉️</text>
      <text x="248" y="54" class="tx-b" text-anchor="middle">🏅</text>
      <text x="345" y="54" class="tx-b" text-anchor="middle">📄</text>
      <text x="54" y="92" class="tx" text-anchor="middle">zdjęcie</text>
      <text x="151" y="92" class="tx" text-anchor="middle">list</text>
      <text x="248" y="92" class="tx" text-anchor="middle">medal</text>
      <text x="345" y="92" class="tx" text-anchor="middle">dokument</text>
      <rect x="40" y="128" width="320" height="42" rx="10" class="f3 s3"/>
      <text x="200" y="155" class="tx" text-anchor="middle">🗣️ rozmowa z dziadkami = źródło ustne</text>
    </svg>`,
    text: `<p><b>Pamiątki rodzinne</b> to przedmioty przechowywane na pamiątkę: stare zdjęcia, listy, dokumenty, medale, biżuteria. To źródła historii twojej rodziny!</p>
      <p>Najwięcej dowiesz się, gdy zapytasz dziadków: jak wyglądała ich szkoła, w co się bawili, gdzie mieszkali. Ich wspomnienia to <b>źródło ustne</b>.</p>`,
    remember: 'Pamiątki rodzinne i wspomnienia bliskich to źródła historii rodziny.',
    hook: 'Każda pamiątka to <b>bilet w przeszłość</b> – zapytaj, kto ją dostał i kiedy.',
  },
  {
    title: 'Regiony Polski',
    svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Schemat, nie dokładna mapa: Pomorze na północy nad Bałtykiem, Warmia i Mazury na północnym wschodzie, Podlasie na wschodzie, Mazowsze w środku, Wielkopolska na zachodzie, Śląsk na południowym zachodzie, Małopolska na południu">
      <text x="200" y="20" class="tx-s" text-anchor="middle">🌊 Morze Bałtyckie</text>
      <rect x="20" y="28" width="360" height="222" rx="40" class="f1 s1"/>
      <rect x="70" y="42" width="140" height="34" rx="8" class="bg ln-thin"/>
      <text x="140" y="65" class="tx" text-anchor="middle">Pomorze</text>
      <rect x="222" y="42" width="150" height="34" rx="8" class="bg ln-thin"/>
      <text x="297" y="65" class="tx" text-anchor="middle">Warmia i Mazury</text>
      <rect x="280" y="98" width="92" height="34" rx="8" class="bg ln-thin"/>
      <text x="326" y="121" class="tx" text-anchor="middle">Podlasie</text>
      <rect x="170" y="122" width="100" height="34" rx="8" class="f4 s4"/>
      <text x="220" y="145" class="tx" text-anchor="middle">Mazowsze</text>
      <rect x="32" y="110" width="124" height="34" rx="8" class="bg ln-thin"/>
      <text x="94" y="133" class="tx" text-anchor="middle">Wielkopolska</text>
      <rect x="40" y="186" width="90" height="34" rx="8" class="bg ln-thin"/>
      <text x="85" y="209" class="tx" text-anchor="middle">Śląsk</text>
      <rect x="170" y="196" width="120" height="34" rx="8" class="bg ln-thin"/>
      <text x="230" y="219" class="tx" text-anchor="middle">Małopolska</text>
    </svg>`,
    text: `<p><b>Region</b> to część kraju, której mieszkańców łączy wspólna historia, tradycje, czasem stroje i sposób mówienia. Rysunek to tylko <b>schemat</b> – pokazuje, gdzie mniej więcej leżą regiony.</p>
      <ul><li><b>Pomorze</b> – na północy, nad Bałtykiem (Gdańsk),</li><li><b>Mazowsze</b> – w środku (Warszawa),</li><li><b>Wielkopolska</b> – na zachodzie (Poznań),</li><li><b>Małopolska</b> – na południu (Kraków),</li><li><b>Śląsk</b> – na południowym zachodzie (Wrocław, Katowice).</li></ul>
      <p>Odszukaj na mapie Polski swój region.</p>`,
    remember: 'Pomorze – północ, Mazowsze – środek, Wielkopolska – zachód, Małopolska – południe.',
    hook: 'W nazwie <b>Po-morze</b> słychać <b>morze</b> – to region tuż przy morzu.',
    check: { q: 'Który region leży nad Morzem Bałtyckim?', options: ['Małopolska', 'Śląsk', 'Pomorze'], answer: 2, explain: 'Pomorze leży na północy Polski, nad Bałtykiem.' },
  },
  {
    title: 'Zabytki i pamięć o ludziach',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Zabytek, np. zamek, który chronimy. Obok trzy formy upamiętnienia: pomnik, tablica pamiątkowa i nazwa ulicy">
      <rect x="10" y="10" width="150" height="180" rx="12" class="f4 s4 sw"/>
      <text x="85" y="70" class="tx-b" text-anchor="middle">🏰</text>
      <text x="85" y="104" class="tx-b" text-anchor="middle">zabytek</text>
      <text x="85" y="128" class="tx-s" text-anchor="middle">chronimy:</text>
      <text x="85" y="146" class="tx-s" text-anchor="middle">nie niszczymy,</text>
      <text x="85" y="164" class="tx-s" text-anchor="middle">nie piszemy</text>
      <text x="85" y="182" class="tx-s" text-anchor="middle">po murach</text>
      <text x="280" y="30" class="tx-b" text-anchor="middle">upamiętnienie</text>
      <rect x="175" y="44" width="215" height="44" rx="10" class="f3 s3"/>
      <rect x="175" y="94" width="215" height="44" rx="10" class="f3 s3"/>
      <rect x="175" y="144" width="215" height="44" rx="10" class="f3 s3"/>
      <text x="200" y="73" class="tx" text-anchor="middle">🗿</text><text x="222" y="73" class="tx">pomnik</text>
      <text x="200" y="123" class="tx" text-anchor="middle">🪧</text><text x="222" y="123" class="tx">tablica pamiątkowa</text>
      <text x="200" y="173" class="tx" text-anchor="middle">🛣️</text><text x="222" y="173" class="tx">nazwa ulicy, szkoły</text>
    </svg>`,
    text: `<p><b>Zabytek</b> to budowla lub przedmiot z przeszłości, który ma wartość historyczną albo artystyczną: zamek, kościół, ratusz, stary dworek. Zabytki są chronione – zniszczonego zabytku nie da się odtworzyć.</p>
      <p>Ludzi zasłużonych dla okolicy i ważne wydarzenia <b>upamiętniamy</b>: stawiamy pomniki, wieszamy tablice pamiątkowe, nadajemy ich imiona ulicom i szkołom.</p>`,
    remember: 'Zabytki chronimy. Zasłużonych ludzi upamiętniamy: pomnik, tablica, nazwa ulicy lub szkoły.',
    hook: 'Sprawdź, czyje imię nosi twoja szkoła albo ulica – to też lekcja historii!',
  },
  {
    title: 'Legenda: co prawdziwe, a co wymyślone?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Legenda o smoku wawelskim: elementy historyczne – Kraków, wzgórze Wawel, rzeka Wisła; element fikcyjny – smok">
      <text x="200" y="24" class="tx-b" text-anchor="middle">legenda o smoku wawelskim</text>
      <rect x="10" y="40" width="185" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="40" width="185" height="150" rx="12" class="f5 s5 sw"/>
      <text x="102" y="68" class="tx-b" text-anchor="middle">✅ prawdziwe</text>
      <text x="297" y="68" class="tx-b" text-anchor="middle">✨ wymyślone</text>
      <text x="102" y="104" class="tx" text-anchor="middle">🏙️ Kraków</text>
      <text x="102" y="134" class="tx" text-anchor="middle">⛰️ wzgórze Wawel</text>
      <text x="102" y="164" class="tx" text-anchor="middle">🌊 rzeka Wisła</text>
      <text x="297" y="124" class="tx-b" text-anchor="middle">🐉 smok</text>
    </svg>`,
    text: `<p>Wiele miejscowości ma swoją <b>legendę</b>. Szukaj w niej dwóch rodzajów elementów. <b>Historyczne</b> to te, które istnieją naprawdę albo potwierdzają je źródła: miasto, rzeka, wzgórze, zamek. <b>Fikcyjne</b> to te wymyślone: smoki, czary, gadające zwierzęta.</p>
      <p>W legendzie o smoku wawelskim Kraków, wzgórze Wawel i Wisła są prawdziwe, a smok – wymyślony.</p>`,
    remember: 'W legendzie oddziel to, co prawdziwe (miejsca, budowle), od tego, co wymyślone (czary, potwory).',
    hook: 'Zadaj pytanie: <b>czy mogę to dziś zobaczyć albo sprawdzić w źródłach?</b> Jeśli tak – to element historyczny.',
    check: { q: 'Który element legendy jest fikcyjny?', options: ['rzeka Wisła', 'smok', 'wzgórze Wawel'], answer: 1, explain: 'Smoki nie istnieją – to element wymyślony. Wisła i Wawel są prawdziwe.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/wspolnota-panstwowa'] = [
  {
    title: 'Trzy symbole Polski',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy symbole państwowe Polski: barwy – biały pas na górze, czerwony na dole; godło – biały orzeł w złotej koronie na czerwonej tarczy; hymn – Mazurek Dąbrowskiego">
      <rect x="10" y="10" width="120" height="180" rx="12" class="f1 s1"/>
      <rect x="140" y="10" width="120" height="180" rx="12" class="f1 s1"/>
      <rect x="270" y="10" width="120" height="180" rx="12" class="f1 s1"/>
      <rect x="25" y="30" width="90" height="30" class="bg ln"/>
      <rect x="25" y="60" width="90" height="30" class="t2 ln"/>
      <path d="M165,30 L235,30 L235,70 Q235,98 200,108 Q165,98 165,70 Z" class="t2 ln"/>
      <text x="200" y="56" class="tx-b" text-anchor="middle">👑</text>
      <text x="200" y="88" class="tx-b" text-anchor="middle">🦅</text>
      <text x="330" y="78" class="tx-b" text-anchor="middle">🎵</text>
      <text x="70" y="130" class="tx-b" text-anchor="middle">barwy</text>
      <text x="200" y="130" class="tx-b" text-anchor="middle">godło</text>
      <text x="330" y="130" class="tx-b" text-anchor="middle">hymn</text>
      <text x="70" y="154" class="tx-s" text-anchor="middle">biel na górze,</text>
      <text x="70" y="172" class="tx-s" text-anchor="middle">czerwień na dole</text>
      <text x="200" y="154" class="tx-s" text-anchor="middle">biały orzeł</text>
      <text x="200" y="172" class="tx-s" text-anchor="middle">na czerwonym tle</text>
      <text x="330" y="154" class="tx-s" text-anchor="middle">„Mazurek</text>
      <text x="330" y="172" class="tx-s" text-anchor="middle">Dąbrowskiego”</text>
    </svg>`,
    text: `<p><b>Symbol</b> to znak, który coś oznacza. Polska ma trzy <b>symbole państwowe</b>:</p>
      <ul><li><b>barwy</b> – biała i czerwona: biały pas na górze, czerwony na dole,</li>
      <li><b>godło</b> – biały orzeł w złotej koronie na czerwonym tle,</li>
      <li><b>hymn</b> – „Mazurek Dąbrowskiego”; słowa napisał <b>Józef Wybicki</b>.</li></ul>
      <p>Symbole łączą wszystkich obywateli – są wspólne dla całej Polski.</p>`,
    remember: 'Symbole Polski: barwy biało-czerwone, godło z białym orłem, hymn „Mazurek Dąbrowskiego”.',
    hook: 'Flaga jak lody na patyku: <b>biała śmietanka na górze</b>, czerwona truskawka na dole.',
    check: { q: 'Kto napisał słowa „Mazurka Dąbrowskiego”?', options: ['Ludwig van Beethoven', 'Józef Wybicki', 'Mikołaj Kopernik'], answer: 1, explain: 'Słowa hymnu Polski napisał Józef Wybicki.' },
  },
  {
    title: 'Szacunek dla symboli',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Podczas hymnu: stoję prosto, jestem w ciszy, zdejmuję czapkę. Nie rozmawiam, nie jem, nie patrzę w telefon">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f2 s2 sw"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">✅ podczas hymnu</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">❌ nie wolno</text>
      <text x="30" y="82" class="tx">🧍 stoję prosto</text>
      <text x="30" y="122" class="tx">🤫 jestem w ciszy</text>
      <text x="30" y="162" class="tx">🧢 zdejmuję czapkę</text>
      <text x="225" y="82" class="tx">💬 rozmawiać</text>
      <text x="225" y="122" class="tx">🍔 jeść</text>
      <text x="225" y="162" class="tx">📱 patrzeć w telefon</text>
    </svg>`,
    text: `<p>Gdy grają hymn, okazujemy szacunek: <b>stoimy spokojnie i w ciszy</b>. Chłopcy i mężczyźni zdejmują czapki. Nie rozmawiamy, nie jemy, nie patrzymy w telefon.</p>
      <p>Flagi nie rzucamy na ziemię i nie niszczymy. W święta państwowe wywieszamy ją na domach i budynkach.</p>`,
    remember: 'Hymn: stoję prosto, w ciszy, bez czapki.',
    hook: 'Na hymn stań <b>jak struna</b> – prosto i bez dźwięku.',
  },
  {
    title: 'Święta państwowe',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kartki z kalendarza: 2 maja – Dzień Flagi; 3 maja – rocznica Konstytucji 3 Maja z 1791 roku; 11 listopada – Narodowe Święto Niepodległości, rok 1918">
      <rect x="10" y="10" width="120" height="180" rx="12" class="bg ln"/>
      <rect x="140" y="10" width="120" height="180" rx="12" class="bg ln"/>
      <rect x="270" y="10" width="120" height="180" rx="12" class="bg ln"/>
      <rect x="10" y="10" width="120" height="34" rx="12" class="t2"/>
      <rect x="140" y="10" width="120" height="34" rx="12" class="t2"/>
      <rect x="270" y="10" width="120" height="34" rx="12" class="t2"/>
      <text x="70" y="88" class="tx-b" text-anchor="middle">2 maja</text>
      <text x="200" y="88" class="tx-b" text-anchor="middle">3 maja</text>
      <text x="330" y="88" class="tx-b" text-anchor="middle">11 listopada</text>
      <text x="70" y="124" class="tx" text-anchor="middle">Dzień</text>
      <text x="70" y="146" class="tx" text-anchor="middle">Flagi 🇵🇱</text>
      <text x="200" y="124" class="tx" text-anchor="middle">Konstytucja</text>
      <text x="200" y="146" class="tx" text-anchor="middle">3 Maja</text>
      <text x="200" y="172" class="tx-s" text-anchor="middle">1791 r.</text>
      <text x="330" y="124" class="tx" text-anchor="middle">Święto</text>
      <text x="330" y="146" class="tx" text-anchor="middle">Niepodległości</text>
      <text x="330" y="172" class="tx-s" text-anchor="middle">1918 r.</text>
    </svg>`,
    text: `<p><b>Święta państwowe</b> przypominają ważne chwile z dziejów Polski:</p>
      <ul><li><b>2 maja</b> – Dzień Flagi Rzeczypospolitej Polskiej,</li>
      <li><b>3 maja</b> – Święto Narodowe Trzeciego Maja, rocznica uchwalenia Konstytucji 3 Maja (1791 r.),</li>
      <li><b>11 listopada</b> – Narodowe Święto Niepodległości: w 1918 r. Polska odzyskała niepodległość.</li></ul>
      <p>W te dni ludzie biorą udział w uroczystościach i wywieszają flagi. Czują, że tworzą jedną <b>wspólnotę</b>.</p>`,
    remember: '2 V – Dzień Flagi · 3 V – Konstytucja 3 Maja · 11 XI – Święto Niepodległości.',
    hook: 'Majówka zaczyna się od <b>flagi (2 maja)</b>, a dzień później flaga świętuje <b>Konstytucję (3 maja)</b>.',
    check: { q: 'Którego dnia obchodzimy Narodowe Święto Niepodległości?', options: ['3 maja', '2 maja', '11 listopada'], answer: 2, explain: '11 listopada przypominamy odzyskanie niepodległości w 1918 r.' },
  },
  {
    title: 'Tradycje regionów',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Tradycje regionalne: stroje ludowe, tańce, pieśni, potrawy i gwara">
      <rect x="10" y="10" width="70" height="100" rx="10" class="f5 s5"/>
      <rect x="88" y="10" width="70" height="100" rx="10" class="f5 s5"/>
      <rect x="166" y="10" width="70" height="100" rx="10" class="f5 s5"/>
      <rect x="244" y="10" width="70" height="100" rx="10" class="f5 s5"/>
      <rect x="322" y="10" width="70" height="100" rx="10" class="f5 s5"/>
      <text x="45" y="52" class="tx-b" text-anchor="middle">👗</text>
      <text x="123" y="52" class="tx-b" text-anchor="middle">💃</text>
      <text x="201" y="52" class="tx-b" text-anchor="middle">🎶</text>
      <text x="279" y="52" class="tx-b" text-anchor="middle">🥟</text>
      <text x="357" y="52" class="tx-b" text-anchor="middle">🗣️</text>
      <text x="45" y="88" class="tx-s" text-anchor="middle">stroje</text>
      <text x="123" y="88" class="tx-s" text-anchor="middle">tańce</text>
      <text x="201" y="88" class="tx-s" text-anchor="middle">pieśni</text>
      <text x="279" y="88" class="tx-s" text-anchor="middle">potrawy</text>
      <text x="357" y="88" class="tx-s" text-anchor="middle">gwara</text>
      <text x="200" y="146" class="tx" text-anchor="middle">każdy region ma swoje tradycje</text>
      <text x="200" y="168" class="tx-s" text-anchor="middle">razem tworzą bogactwo Polski</text>
    </svg>`,
    text: `<p>Regiony Polski mają swoje <b>obrzędy, zwyczaje i tradycje</b>: stroje ludowe, tańce, pieśni, potrawy i <b>gwarę</b> – sposób mówienia mieszkańców regionu.</p>
      <p>Tradycje łączą mieszkańców regionu, a Polska dzięki nim jest różnorodna. Zapytaj dziadków, jakie zwyczaje są w twojej okolicy.</p>`,
    remember: 'Tradycje regionalne: stroje, tańce, pieśni, potrawy, gwara.',
    hook: '<b>Gwara</b> to taki „regionalny język” – jak słówka, które rozumieją głównie twoi sąsiedzi.',
  },
  {
    title: 'Symbole Unii Europejskiej',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Flaga Unii Europejskiej: 12 złotych gwiazd w kręgu na niebieskim tle. Hymn Unii: Oda do radości, muzyka Ludwiga van Beethovena">
      <rect x="20" y="20" width="170" height="114" rx="4" class="t1"/>
      <g class="t4">
        <circle cx="105.0" cy="41.0" r="5"/><circle cx="123.0" cy="45.8" r="5"/><circle cx="136.2" cy="59.0" r="5"/><circle cx="141.0" cy="77.0" r="5"/><circle cx="136.2" cy="95.0" r="5"/><circle cx="123.0" cy="108.2" r="5"/>
        <circle cx="105.0" cy="113.0" r="5"/><circle cx="87.0" cy="108.2" r="5"/><circle cx="73.8" cy="95.0" r="5"/><circle cx="69.0" cy="77.0" r="5"/><circle cx="73.8" cy="59.0" r="5"/><circle cx="87.0" cy="45.8" r="5"/>
      </g>
      <text x="105" y="160" class="tx-b" text-anchor="middle">flaga UE</text>
      <text x="105" y="182" class="tx-s" text-anchor="middle">12 złotych gwiazd</text>
      <rect x="215" y="20" width="170" height="114" rx="12" class="f1 s1"/>
      <text x="300" y="70" class="tx-b" text-anchor="middle">🎵</text>
      <text x="300" y="100" class="tx" text-anchor="middle">„Oda do radości”</text>
      <text x="300" y="160" class="tx-b" text-anchor="middle">hymn UE</text>
      <text x="300" y="182" class="tx-s" text-anchor="middle">muzyka: Beethoven</text>
    </svg>`,
    text: `<p>Polska należy do <b>Unii Europejskiej</b> – wspólnoty wielu państw Europy. Unia też ma swoje symbole:</p>
      <ul><li><b>flaga</b> – 12 złotych gwiazd ułożonych w krąg na niebieskim tle,</li>
      <li><b>hymn</b> – „Oda do radości” z muzyką Ludwiga van Beethovena.</li></ul>
      <p>Gwiazd jest zawsze 12 – ich liczba nie zależy od tego, ile państw należy do Unii.</p>`,
    remember: 'Flaga UE: 12 złotych gwiazd na niebieskim tle. Hymn UE: „Oda do radości”.',
    hook: '12 gwiazd jak <b>12 godzin na tarczy zegara</b> – ułożone w krąg.',
    check: { q: 'Ile gwiazd jest na fladze Unii Europejskiej?', options: ['12', '27', '10'], answer: 0, explain: 'Na fladze UE jest zawsze 12 gwiazd.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/czas-mapa'] = [
  {
    title: 'Rok, wiek, tysiąclecie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Jednostki czasu w tej samej skali: 1 rok to cieniutki pasek, 100 lat to wiek czyli stulecie, 1000 lat to tysiąclecie, czyli 10 takich wieków">
      <rect x="20" y="20" width="4" height="30" class="t2"/>
      <text x="36" y="42" class="tx">1 rok (cieniutki pasek)</text>
      <rect x="20" y="70" width="36" height="30" class="f1 s1"/>
      <text x="68" y="92" class="tx">100 lat = <tspan class="t1">wiek (stulecie)</tspan></text>
      <g class="f3 s3">
        <rect x="20" y="120" width="36" height="30"/><rect x="56" y="120" width="36" height="30"/><rect x="92" y="120" width="36" height="30"/>
        <rect x="128" y="120" width="36" height="30"/><rect x="164" y="120" width="36" height="30"/><rect x="200" y="120" width="36" height="30"/>
        <rect x="236" y="120" width="36" height="30"/><rect x="272" y="120" width="36" height="30"/><rect x="308" y="120" width="36" height="30"/>
        <rect x="344" y="120" width="36" height="30"/>
      </g>
      <text x="200" y="182" class="tx" text-anchor="middle">1000 lat = <tspan class="t3">tysiąclecie</tspan> = 10 wieków</text>
    </svg>`,
    text: `<p><b>Data</b> mówi, kiedy coś się wydarzyło, np. 11 listopada 1918 r. Do mierzenia długich okresów historycy używają większych jednostek:</p>
      <ul><li><b>wiek</b>, czyli <b>stulecie</b> – 100 lat,</li><li><b>tysiąclecie</b> – 1000 lat, czyli 10 wieków,</li><li><b>epoka</b> – długi okres, w którym życie ludzi miało podobne cechy, np. starożytność albo średniowiecze.</li></ul>
      <p>Wieki zapisujemy <b>cyframi rzymskimi</b>: X wiek, XV wiek, XXI wiek.</p>`,
    remember: 'Wiek = stulecie = 100 lat. Tysiąclecie = 1000 lat.',
    hook: '<b>Stu</b>lecie – <b>sto</b> lat. <b>Tysiąc</b>lecie – <b>tysiąc</b> lat. Nazwy same podpowiadają!',
    check: { q: 'Ile wieków ma tysiąclecie?', options: ['100', '10', '1000'], answer: 1, explain: '1000 lat : 100 lat = 10 wieków.' },
  },
  {
    title: 'Przed naszą erą i naszej ery',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Oś czasu: w środku początek naszej ery. Na lewo lata przed naszą erą liczone wstecz: 300, 200, 100. Na prawo lata naszej ery: 100, 200, 300. Nie było roku zerowego">
      <defs><marker id="a-k4hi-czas-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="15" y="44" width="185" height="18" class="f5"/>
      <rect x="200" y="44" width="185" height="18" class="f3"/>
      <line x1="10" y1="62" x2="390" y2="62" class="ln" marker-end="url(#a-k4hi-czas-1)"/>
      <line x1="200" y1="36" x2="200" y2="80" class="ln sw"/>
      <g class="ln"><line x1="50" y1="56" x2="50" y2="68"/><line x1="100" y1="56" x2="100" y2="68"/><line x1="150" y1="56" x2="150" y2="68"/>
      <line x1="250" y1="56" x2="250" y2="68"/><line x1="300" y1="56" x2="300" y2="68"/><line x1="350" y1="56" x2="350" y2="68"/></g>
      <text x="50" y="90" class="tx-s" text-anchor="middle">300</text><text x="100" y="90" class="tx-s" text-anchor="middle">200</text><text x="150" y="90" class="tx-s" text-anchor="middle">100</text>
      <text x="250" y="90" class="tx-s" text-anchor="middle">100</text><text x="300" y="90" class="tx-s" text-anchor="middle">200</text><text x="350" y="90" class="tx-s" text-anchor="middle">300</text>
      <text x="100" y="30" class="tx-b t5" text-anchor="middle">p.n.e.</text>
      <text x="300" y="30" class="tx-b t3" text-anchor="middle">n.e.</text>
      <text x="100" y="120" class="tx-s" text-anchor="middle">← liczymy wstecz</text>
      <text x="300" y="120" class="tx-s" text-anchor="middle">liczymy do przodu →</text>
      <text x="200" y="150" class="tx" text-anchor="middle">początek naszej ery</text>
      <text x="200" y="176" class="tx-s" text-anchor="middle">po 1 p.n.e. od razu 1 n.e. – roku 0 nie było</text>
    </svg>`,
    text: `<p>Lata liczymy od umownej daty narodzin Jezusa Chrystusa. Od tego momentu trwa <b>nasza era</b> (<b>n.e.</b>). Lata wcześniejsze to <b>przed naszą erą</b> (<b>p.n.e.</b>) – liczymy je wstecz, jak odliczanie do startu rakiety.</p>
      <p>Uwaga: w latach p.n.e. <b>im większa liczba, tym dawniej</b>. Rok 300 p.n.e. był wcześniej niż rok 100 p.n.e. I pamiętaj: <b>roku zerowego nie było</b>.</p>`,
    remember: 'p.n.e. – większa liczba = dawniej. n.e. – większa liczba = później.',
    hook: 'Lata p.n.e. to <b>odliczanie</b>: 3, 2, 1… start! Po „1 p.n.e.” od razu rusza „1 n.e.”.',
    check: { q: 'Który rok był dawniej?', options: ['100 p.n.e.', '300 p.n.e.', '200 n.e.'], answer: 1, explain: 'W latach p.n.e. większa liczba oznacza dawniej. 300 p.n.e. było przed 100 p.n.e., a oba – przed latami n.e.' },
  },
  {
    title: 'Który to wiek? Dwie zasady',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Zasada 1: rok kończy się na 00, np. 1500 – wiek to pierwsze cyfry, XV. Zasada 2: inne lata, np. 1410 – weź cyfry 14 i dodaj 1, wychodzi XV wiek">
      <defs><marker id="a-k4hi-czas-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="380" height="90" rx="12" class="f1 s1"/>
      <rect x="10" y="110" width="380" height="90" rx="12" class="f4 s4"/>
      <text x="24" y="36" class="tx-s">rok kończy się na 00</text>
      <text x="24" y="136" class="tx-s">inne lata</text>
      <text x="80" y="76" class="tx-b" text-anchor="middle"><tspan class="t1">15</tspan>00</text>
      <text x="80" y="176" class="tx-b" text-anchor="middle"><tspan class="t4">14</tspan>10</text>
      <line x1="125" y1="70" x2="165" y2="70" class="ln s2" marker-end="url(#a-k4hi-czas-2)"/>
      <line x1="125" y1="170" x2="165" y2="170" class="ln s2" marker-end="url(#a-k4hi-czas-2)"/>
      <text x="230" y="76" class="tx" text-anchor="middle">15</text>
      <text x="230" y="176" class="tx" text-anchor="middle">14 + 1 = 15</text>
      <text x="340" y="76" class="tx-b" text-anchor="middle">XV w.</text>
      <text x="340" y="176" class="tx-b" text-anchor="middle">XV w.</text>
    </svg>`,
    text: `<p><b>Zasada 1.</b> Gdy rok kończy się dwoma zerami (1500, 1900), wiek to pierwsze cyfry: 1500 → <b>XV wiek</b>. Rok 1500 to ostatni rok XV wieku.</p>
      <p><b>Zasada 2.</b> Inne lata: zakryj dwie ostatnie cyfry i do tego, co zostało, <b>dodaj 1</b>. 1410 → 14 + 1 → <b>XV wiek</b>. 966 → 9 + 1 → <b>X wiek</b>.</p>
      <p>Tak samo liczysz lata p.n.e.: 250 p.n.e. → 2 + 1 → <b>III wiek p.n.e.</b></p>`,
    remember: '00 na końcu → pierwsze cyfry. Inaczej → zakryj dwie ostatnie cyfry i dodaj 1.',
    hook: 'Masz 10 lat, a żyjesz już w <b>jedenastym</b> roku życia – z wiekami jest tak samo: lata 1401–1500 to <b>piętnasty</b> wiek.',
    check: { q: 'W którym wieku był rok 1918?', options: ['XIX', 'XX', 'XXI'], answer: 1, explain: '19 + 1 = 20 → XX wiek.' },
  },
  {
    title: 'Ile lat minęło?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Upływ czasu. Oba lata naszej ery: od 966 do 1410 minęło 1410 minus 966, czyli 444 lata. Rok przed naszą erą i rok naszej ery: od 50 p.n.e. do 50 n.e. minęło 50 plus 50 minus 1, czyli 99 lat">
      <rect x="10" y="10" width="380" height="88" rx="12" class="f3 s3"/>
      <text x="24" y="36" class="tx-s">oba lata n.e. → odejmij</text>
      <text x="200" y="76" class="tx-b" text-anchor="middle">966 → 1410:  1410 − 966 = 444</text>
      <rect x="10" y="110" width="380" height="90" rx="12" class="f5 s5"/>
      <text x="24" y="136" class="tx-s">p.n.e. i n.e. → dodaj i odejmij 1</text>
      <text x="200" y="176" class="tx-b" text-anchor="middle">50 p.n.e. → 50 n.e.:  50 + 50 − 1 = 99</text>
    </svg>`,
    text: `<p><b>Oba lata n.e.</b> – odejmij mniejszy rok od większego: od chrztu Polski (966) do bitwy pod Grunwaldem (1410) minęło 1410 − 966 = <b>444 lata</b>.</p>
      <p><b>Oba lata p.n.e.</b> – też odejmij: od 500 p.n.e. do 200 p.n.e. minęło <b>300 lat</b>.</p>
      <p><b>Jeden rok p.n.e., a drugi n.e.</b> – dodaj oba lata i <b>odejmij 1</b>, bo nie było roku zerowego: od 50 p.n.e. do 50 n.e. minęło 50 + 50 − 1 = <b>99 lat</b>.</p>`,
    remember: 'Przez początek naszej ery: dodaj lata i odejmij 1.',
    hook: 'Odejmujesz 1 za <b>brakujący rok zerowy</b> – jak za brakujący stopień na schodach.',
    check: { q: 'Ile lat minęło od roku 20 p.n.e. do roku 20 n.e.?', options: ['40', '39', '0'], answer: 1, explain: '20 + 20 − 1 = 39, bo nie było roku zerowego.' },
  },
  {
    title: 'Oś czasu i mapa historyczna',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Oś czasu z trzema wydarzeniami: 966 chrzest Polski, 1410 bitwa pod Grunwaldem, 1918 odzyskanie niepodległości. Pod spodem mapa z legendą: zamek, miasto, bitwa, granica">
      <defs><marker id="a-k4hi-czas-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="40" x2="390" y2="40" class="ln" marker-end="url(#a-k4hi-czas-3)"/>
      <circle cx="60" cy="40" r="7" class="f1 s1 sw"/><circle cx="200" cy="40" r="7" class="f2 s2 sw"/><circle cx="330" cy="40" r="7" class="f3 s3 sw"/>
      <text x="60" y="24" class="tx-b" text-anchor="middle">966</text>
      <text x="200" y="24" class="tx-b" text-anchor="middle">1410</text>
      <text x="330" y="24" class="tx-b" text-anchor="middle">1918</text>
      <text x="60" y="66" class="tx-s" text-anchor="middle">chrzest Polski</text>
      <text x="200" y="66" class="tx-s" text-anchor="middle">Grunwald</text>
      <text x="330" y="66" class="tx-s" text-anchor="middle">niepodległość</text>
      <rect x="10" y="88" width="230" height="132" rx="10" class="f3 s3"/>
      <path d="M30,110 L120,100 L220,118 L210,200 L110,210 L35,190 Z" class="ln dash"/>
      <text x="80" y="150" class="tx" text-anchor="middle">🏰</text>
      <text x="160" y="140" class="tx" text-anchor="middle">●</text>
      <text x="150" y="186" class="tx" text-anchor="middle">⚔️</text>
      <rect x="250" y="88" width="140" height="132" rx="10" class="bg ln"/>
      <text x="320" y="110" class="tx-b" text-anchor="middle">legenda</text>
      <text x="262" y="138" class="tx-s">🏰 zamek</text>
      <text x="262" y="160" class="tx-s">● miasto</text>
      <text x="262" y="182" class="tx-s">⚔️ bitwa</text>
      <line x1="262" y1="200" x2="290" y2="200" class="ln dash"/><text x="296" y="205" class="tx-s">granica</text>
    </svg>`,
    text: `<p>Na <b>osi czasu</b> układasz wydarzenia po kolei: najdawniejsze po lewej, najnowsze po prawej. Od razu widać, co było wcześniej, a co później.</p>
      <p><b>Mapa historyczna</b> pokazuje świat lub kraj w przeszłości: dawne granice, miasta, bitwy. <b>Plan</b> pokazuje dokładnie mały obszar, np. dawne miasto albo zamek. Zawsze zaczynaj od <b>legendy mapy</b> – to objaśnienie znaków i kolorów.</p>`,
    remember: 'Oś czasu: od najdawniejszych (lewo) do najnowszych (prawo). Mapę czytaj od legendy.',
    hook: 'Legenda mapy to <b>słowniczek</b> – tłumaczy język znaczków na zwykłe słowa.',
    check: { q: 'Co to jest legenda mapy?', options: ['opowieść o smoku', 'objaśnienie znaków i kolorów na mapie', 'tytuł mapy'], answer: 1, explain: 'Legenda mapy wyjaśnia, co oznaczają znaki i kolory. To inne znaczenie słowa „legenda” niż opowieść.' },
  },
];
