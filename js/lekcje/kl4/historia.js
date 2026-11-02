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

// ---------------------------------------------------------------------------
window.LESSONS['historia/poczatki-cywilizacji'] = [
  {
    title: 'Od koczownika do rolnika',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie: koczownik wędruje, poluje i zbiera rośliny; rolnik mieszka w osadzie, uprawia rośliny i hoduje zwierzęta. Ta zmiana to rewolucja neolityczna">
      <defs><marker id="a-k4hi-cyw-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="170" height="155" rx="12" class="f4 s4 sw"/>
      <rect x="220" y="10" width="170" height="155" rx="12" class="f3 s3 sw"/>
      <text x="95" y="48" class="tx-b" text-anchor="middle">🏹 ⛺</text>
      <text x="305" y="48" class="tx-b" text-anchor="middle">🌾 🏠 🐐</text>
      <text x="95" y="80" class="tx-b" text-anchor="middle">koczownik</text>
      <text x="305" y="80" class="tx-b" text-anchor="middle">rolnik</text>
      <text x="95" y="106" class="tx-s" text-anchor="middle">wędruje</text>
      <text x="95" y="126" class="tx-s" text-anchor="middle">poluje, łowi ryby</text>
      <text x="95" y="146" class="tx-s" text-anchor="middle">zbiera rośliny</text>
      <text x="305" y="106" class="tx-s" text-anchor="middle">mieszka w osadzie</text>
      <text x="305" y="126" class="tx-s" text-anchor="middle">uprawia rośliny</text>
      <text x="305" y="146" class="tx-s" text-anchor="middle">hoduje zwierzęta</text>
      <line x1="183" y1="88" x2="216" y2="88" class="ln sw" marker-end="url(#a-k4hi-cyw-1)"/>
      <text x="200" y="192" class="tx" text-anchor="middle">rewolucja neolityczna</text>
    </svg>`,
    text: `<p>Najdawniejsi ludzie byli <b>koczownikami</b>: nie mieli stałego domu, tylko wędrowali za jedzeniem – polowali, łowili ryby i zbierali dzikie rośliny. To <b>koczowniczy tryb życia</b>.</p>
      <p>Ponad 10 tysięcy lat temu ludzie na Bliskim Wschodzie nauczyli się <b>uprawiać rośliny</b> i <b>hodować zwierzęta</b>. Mogli zamieszkać na stałe w jednym miejscu – to <b>osiadły tryb życia</b>. Tę wielką zmianę nazywamy <b>rewolucją neolityczną</b>.</p>`,
    remember: 'Rewolucja neolityczna = przejście od koczowniczego do osiadłego trybu życia (rolnictwo i hodowla).',
    hook: 'Koczownik idzie <b>za jedzeniem</b>, rolnik sprawia, że jedzenie <b>rośnie obok domu</b>.',
    check: { q: 'Kto prowadził osiadły tryb życia?', options: ['myśliwy, który co kilka dni zmienia obóz', 'rolnik, który mieszka przy swoim polu', 'zbieracz wędrujący za owocami'], answer: 1, explain: 'Osiadły tryb życia oznacza stały dom w jednym miejscu – tak żył rolnik.' },
  },
  {
    title: 'Dlaczego nad rzeką?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Przekrój doliny Nilu: pustynia, pola z żyznym mułem, rzeka Nil, pola, pustynia. Pod spodem łańcuch: plony, więcej ludzi, miasta i państwa">
      <defs><marker id="a-k4hi-cyw-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="380" height="28" class="f4"/>
      <rect x="10" y="38" width="380" height="30" class="f3"/>
      <rect x="10" y="68" width="380" height="30" class="f1 s1"/>
      <rect x="10" y="98" width="380" height="30" class="f3"/>
      <rect x="10" y="128" width="380" height="28" class="f4"/>
      <text x="200" y="29" class="tx-s" text-anchor="middle">pustynia 🏜️</text>
      <text x="200" y="58" class="tx-s" text-anchor="middle">pola – żyzny muł 🌾</text>
      <text x="200" y="89" class="tx-b" text-anchor="middle">Nil – woda 💧</text>
      <text x="200" y="118" class="tx-s" text-anchor="middle">pola – żyzny muł 🌾</text>
      <text x="200" y="147" class="tx-s" text-anchor="middle">pustynia 🏜️</text>
      <rect x="10" y="175" width="100" height="40" rx="10" class="f3 s3"/>
      <rect x="140" y="175" width="120" height="40" rx="10" class="f2 s2"/>
      <rect x="290" y="175" width="100" height="40" rx="10" class="f5 s5"/>
      <text x="60" y="200" class="tx" text-anchor="middle">plony</text>
      <text x="200" y="200" class="tx" text-anchor="middle">więcej ludzi</text>
      <text x="340" y="200" class="tx" text-anchor="middle">miasta</text>
      <line x1="112" y1="195" x2="136" y2="195" class="ln" marker-end="url(#a-k4hi-cyw-2)"/>
      <line x1="262" y1="195" x2="286" y2="195" class="ln" marker-end="url(#a-k4hi-cyw-2)"/>
    </svg>`,
    text: `<p>Rolnik potrzebuje <b>wody</b> i <b>żyznej ziemi</b>. Dlatego pierwsze osady powstawały w dolinach wielkich rzek, np. nad <b>Nilem</b> w Egipcie albo nad Eufratem i Tygrysem w Mezopotamii.</p>
      <p>Co roku Nil wylewał. Gdy woda opadała, na polach zostawał <b>muł</b> – żyzne błoto. Dookoła była pustynia, więc Egipt nazywano <b>darem Nilu</b>. Więcej plonów → więcej ludzi → miasta i pierwsze państwa, czyli <b>cywilizacje</b>.</p>`,
    remember: 'Pierwsze cywilizacje powstały nad wielkimi rzekami: woda + żyzny muł = plony.',
    hook: 'Nil był dla Egipcjan jak <b>kran i nawóz w jednym</b>.',
  },
  {
    title: 'Faraon na szczycie piramidy',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Piramida społeczeństwa egipskiego: na szczycie faraon, niżej kapłani, potem urzędnicy, na dole chłopi, rzemieślnicy i kupcy">
      <polygon points="200,15 238.9,60 161.1,60" class="f4 s4 sw"/>
      <polygon points="161.1,60 238.9,60 277.8,105 122.2,105" class="f5 s5 sw"/>
      <polygon points="122.2,105 277.8,105 316.8,150 83.2,150" class="f1 s1 sw"/>
      <polygon points="83.2,150 316.8,150 360,200 40,200" class="f3 s3 sw"/>
      <text x="200" y="54" class="tx-s" text-anchor="middle">faraon</text>
      <text x="200" y="89" class="tx" text-anchor="middle">kapłani</text>
      <text x="200" y="134" class="tx" text-anchor="middle">urzędnicy</text>
      <text x="200" y="181" class="tx" text-anchor="middle">chłopi, rzemieślnicy, kupcy</text>
    </svg>`,
    text: `<p><b>Faraon</b> był władcą Egiptu. Egipcjanie wierzyli, że jest bogiem – synem boga słońca. Miał nieograniczoną władzę, a cały kraj należał do niego.</p>
      <p>Pod nim byli <b>kapłani</b> (służyli bogom i znali się na matematyce, medycynie, astronomii) i <b>urzędnicy</b> (zbierali podatki, umieli pisać i liczyć). Na dole – najliczniejsi <b>chłopi</b>, a także rzemieślnicy i kupcy.</p>`,
    remember: 'Faraon – władca Egiptu uważany za boga. Najliczniejsi byli chłopi.',
    hook: 'Egipcjanie budowali piramidy z kamienia, a ich społeczeństwo też wyglądało jak <b>piramida</b>: im wyżej, tym mniej osób i więcej władzy.',
    check: { q: 'Kto był na samym szczycie społeczeństwa egipskiego?', options: ['kapłani', 'faraon', 'chłopi'], answer: 1, explain: 'Na szczycie był faraon – władca uważany za boga.' },
  },
  {
    title: 'Bogowie, mumie i piramidy',
    svg: `<svg viewBox="0 0 400 225" role="img" aria-label="Wiara w wielu bogów, czyli politeizm, i wiara w życie pozagrobowe prowadziły do mumifikacji i budowy grobowców – piramid. Piramida Cheopsa ma 139 metrów">
      <defs><marker id="a-k4hi-cyw-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="220" height="54" rx="10" class="f5 s5"/>
      <rect x="10" y="85" width="220" height="54" rx="10" class="f1 s1"/>
      <rect x="10" y="160" width="220" height="54" rx="10" class="f2 s2"/>
      <text x="120" y="33" class="tx-b" text-anchor="middle">politeizm</text>
      <text x="120" y="54" class="tx-s" text-anchor="middle">wiara w wielu bogów</text>
      <text x="120" y="108" class="tx-b" text-anchor="middle">życie pozagrobowe</text>
      <text x="120" y="129" class="tx-s" text-anchor="middle">nowe życie po śmierci</text>
      <text x="120" y="183" class="tx-b" text-anchor="middle">mumifikacja</text>
      <text x="120" y="204" class="tx-s" text-anchor="middle">ciało ma przetrwać</text>
      <line x1="120" y1="64" x2="120" y2="81" class="ln" marker-end="url(#a-k4hi-cyw-4)"/>
      <line x1="120" y1="139" x2="120" y2="156" class="ln" marker-end="url(#a-k4hi-cyw-4)"/>
      <line x1="232" y1="187" x2="262" y2="187" class="ln" marker-end="url(#a-k4hi-cyw-4)"/>
      <polygon points="268,190 390,190 329,75" class="f4 s4 sw"/>
      <line x1="329" y1="78" x2="329" y2="150" class="ln-thin dash"/>
      <text x="329" y="175" class="tx-s" text-anchor="middle">139 m</text>
      <text x="329" y="55" class="tx-b" text-anchor="middle">piramida</text>
      <text x="329" y="210" class="tx-s" text-anchor="middle">grobowiec faraona</text>
    </svg>`,
    text: `<p>Egipcjanie czcili <b>wielu bogów</b> – to <b>politeizm</b>. Bogów wyobrażali sobie jako zwierzęta albo ludzi z głowami zwierząt.</p>
      <p>Wierzyli w <b>życie pozagrobowe</b>, czyli nowe życie po śmierci. Żeby ciało przetrwało, robili <b>mumifikację</b>: mumię owiniętą bandażami składali do sarkofagu. Faraonów chowano w ogromnych grobowcach – <b>piramidach</b>. Największa, piramida <b>Cheopsa</b> w Gizie, ma 139 m wysokości.</p>`,
    remember: 'Politeizm – wiara w wielu bogów. Piramida – grobowiec faraona.',
    hook: '<b>Poli</b> znaczy „wiele” – jak w słowie <b>poli</b>glota (ktoś, kto zna wiele języków). Poli-teizm – wielu bogów.',
  },
  {
    title: 'Mądrość kapłanów',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy osiągnięcia Egipcjan: astronomia – kalendarz 365 dni, matematyka – obliczenia przy piramidach, medycyna – znajomość budowy ciała">
      <rect x="10" y="10" width="120" height="140" rx="12" class="f4 s4 sw"/>
      <rect x="140" y="10" width="120" height="140" rx="12" class="f1 s1 sw"/>
      <rect x="270" y="10" width="120" height="140" rx="12" class="f3 s3 sw"/>
      <text x="70" y="52" class="tx-b" text-anchor="middle">☀️</text>
      <text x="200" y="52" class="tx-b" text-anchor="middle">📐</text>
      <text x="330" y="52" class="tx-b" text-anchor="middle">💊</text>
      <text x="70" y="86" class="tx" text-anchor="middle">astronomia</text>
      <text x="200" y="86" class="tx" text-anchor="middle">matematyka</text>
      <text x="330" y="86" class="tx" text-anchor="middle">medycyna</text>
      <text x="70" y="112" class="tx-s" text-anchor="middle">kalendarz</text>
      <text x="70" y="130" class="tx-s" text-anchor="middle">365 dni</text>
      <text x="200" y="112" class="tx-s" text-anchor="middle">obliczenia</text>
      <text x="200" y="130" class="tx-s" text-anchor="middle">przy piramidach</text>
      <text x="330" y="112" class="tx-s" text-anchor="middle">budowa ciała,</text>
      <text x="330" y="130" class="tx-s" text-anchor="middle">podręczniki</text>
      <text x="200" y="182" class="tx-s" text-anchor="middle">nasz kalendarz jest wzorowany na egipskim</text>
    </svg>`,
    text: `<p>Egipscy kapłani obserwowali niebo – to <b>astronomia</b>. Przewidywali wylewy Nilu i stworzyli <b>kalendarz słoneczny o 365 dniach</b>. Nasz kalendarz jest na nim wzorowany.</p>
      <p>Budowa piramid wymagała <b>matematyki</b> – skomplikowanych obliczeń. Dzięki mumifikacji Egipcjanie poznali budowę ludzkiego ciała i rozwinęli <b>medycynę</b>: spisali pierwsze podręczniki dla lekarzy.</p>`,
    remember: 'Egipcjanie: astronomia (kalendarz 365 dni), matematyka, medycyna.',
    hook: 'Twój kalendarz na ścianie ma „egipskiego dziadka” sprzed tysięcy lat.',
    check: { q: 'Które osiągnięcie Egipcjan wiąże się z astronomią?', options: ['kalendarz słoneczny o 365 dniach', 'mumifikacja zmarłych', 'budowa kanałów na polach'], answer: 0, explain: 'Astronomia to nauka o niebie i gwiazdach. Obserwując niebo, Egipcjanie stworzyli kalendarz.' },
  },
  {
    title: 'Pismo – koniec prehistorii',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Oś czasu: prehistoria, potem wynalezienie pisma ponad 5000 lat temu, potem historia. Pod spodem trzy rodzaje pisma: klinowe Sumerów, hieroglify Egipcjan i alfabet">
      <rect x="10" y="20" width="170" height="40" rx="8" class="f4 s4"/>
      <rect x="220" y="20" width="170" height="40" rx="8" class="f1 s1"/>
      <text x="95" y="46" class="tx-b" text-anchor="middle">prehistoria</text>
      <text x="305" y="46" class="tx-b" text-anchor="middle">historia</text>
      <text x="200" y="47" class="tx-b" text-anchor="middle">✍️</text>
      <text x="200" y="84" class="tx-s" text-anchor="middle">wynalezienie pisma – ponad 5000 lat temu</text>
      <rect x="10" y="105" width="120" height="110" rx="10" class="f2 s2"/>
      <rect x="140" y="105" width="120" height="110" rx="10" class="f3 s3"/>
      <rect x="270" y="105" width="120" height="110" rx="10" class="f5 s5"/>
      <path d="M40,130 L52,136 L40,142 Z M60,130 L72,136 L60,142 Z M80,130 L92,136 L80,142 Z M50,150 L62,156 L50,162 Z M70,150 L82,156 L70,162 Z" class="ln"/>
      <text x="200" y="152" class="tx-b" text-anchor="middle">👁️ 🐦 〰️</text>
      <text x="330" y="152" class="tx-b" text-anchor="middle">A B C</text>
      <text x="70" y="188" class="tx" text-anchor="middle">klinowe</text>
      <text x="70" y="206" class="tx-s" text-anchor="middle">Sumerowie</text>
      <text x="200" y="188" class="tx" text-anchor="middle">hieroglify</text>
      <text x="200" y="206" class="tx-s" text-anchor="middle">Egipcjanie</text>
      <text x="330" y="188" class="tx" text-anchor="middle">alfabet</text>
      <text x="330" y="206" class="tx-s" text-anchor="middle">1 litera = 1 głoska</text>
    </svg>`,
    text: `<p>Pismo powstało ponad 5000 lat temu. Sumerowie w Mezopotamii odciskali w glinie <b>pismo klinowe</b>, a Egipcjanie rysowali <b>hieroglify</b> – ponad 700 obrazkowych znaków – na <b>papirusie</b> (od niego pochodzi słowo „papier”). Hieroglify odczytał dopiero w 1822 r. Jean-François Champollion.</p>
      <p>Wynalezienie pisma to <b>koniec prehistorii</b> i początek historii. Dzięki pismu ludzie mogli zapisać plony, umowy, prawa i wiedzę – i przekazać je innym, nawet po wielu latach. Dziś piszemy <b>alfabetem</b>, w którym jedna litera to jedna głoska.</p>`,
    remember: 'Wynalezienie pisma kończy prehistorię i zaczyna historię.',
    hook: '<b>Pre</b>historia = <b>przed</b> pismem. Historia zaczyna się, gdy ktoś coś <b>zapisał</b>.',
    check: { q: 'Od czego historycy liczą początek historii (koniec prehistorii)?', options: ['od budowy piramid', 'od wynalezienia pisma', 'od pierwszych igrzysk olimpijskich'], answer: 1, explain: 'Kiedy ludzie zaczęli pisać, powstały źródła pisane – tak zaczyna się historia.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/grecja'] = [
  {
    title: 'Kraj gór i morza',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Schemat Grecji: półwysep i wyspy wśród morza, góry dzielą ląd. Skutki: góry – wiele osobnych miast-państw; morze – żeglarze, kupcy i kolonie">
      <rect x="10" y="10" width="190" height="190" rx="12" class="f1"/>
      <path d="M40,15 L170,15 L160,60 L130,80 L140,120 L110,150 L95,185 L75,140 L60,100 L45,60 Z" class="f3 s3"/>
      <circle cx="170" cy="120" r="12" class="f3 s3"/>
      <circle cx="160" cy="170" r="9" class="f3 s3"/>
      <circle cx="40" cy="175" r="8" class="f3 s3"/>
      <polygon points="70,60 85,35 100,60" class="f4 s4"/>
      <polygon points="100,70 115,45 130,70" class="f4 s4"/>
      <polygon points="80,110 95,85 110,110" class="f4 s4"/>
      <text x="35" y="130" class="tx-s">⛵</text>
      <text x="150" y="95" class="tx-s">⛵</text>
      <rect x="215" y="20" width="175" height="80" rx="10" class="f4 s4"/>
      <rect x="215" y="115" width="175" height="80" rx="10" class="f1 s1"/>
      <text x="302" y="46" class="tx-b" text-anchor="middle">⛰️ góry</text>
      <text x="302" y="70" class="tx-s" text-anchor="middle">dzielą kraj na krainy</text>
      <text x="302" y="88" class="tx-s" text-anchor="middle">→ wiele polis</text>
      <text x="302" y="141" class="tx-b" text-anchor="middle">🌊 morze</text>
      <text x="302" y="165" class="tx-s" text-anchor="middle">żeglarze i kupcy</text>
      <text x="302" y="183" class="tx-s" text-anchor="middle">→ kolonie</text>
    </svg>`,
    text: `<p>Starożytna Grecja leżała na południu Półwyspu Bałkańskiego i na wielu wyspach. Prawie cały kraj pokrywają <b>góry</b> – dzieliły go na małe krainy, więc Grecy nie stworzyli jednego państwa, tylko wiele <b>miast-państw</b>.</p>
      <p>Wszędzie było blisko <b>morza</b>, a żyznej ziemi było mało. Grecy zostali świetnymi żeglarzami i kupcami i zakładali nowe miasta – <b>kolonie</b> – nad Morzem Śródziemnym i Czarnym. Dziś ślady greckich miast są m.in. w Grecji, w Turcji i w południowych Włoszech.</p>`,
    remember: 'Góry podzieliły Grecję na wiele polis, a morze zrobiło z Greków żeglarzy i kupców.',
    hook: 'Przez góry trudno przejść, a przez morze łatwo przepłynąć – dlatego Grecy byli <b>sąsiadami przez wodę</b>.',
  },
  {
    title: 'Polis: Akropol i agora',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat polis Ateny: na wzgórzu Akropol ze świątynią Partenon, w dole agora – główny plac, dookoła domy, a za miastem okoliczne wsie">
      <path d="M20,120 Q120,40 220,120 Z" class="f3 s3"/>
      <rect x="85" y="62" width="70" height="8" class="f4 s4"/>
      <rect x="90" y="70" width="6" height="22" class="f4 s4"/>
      <rect x="103" y="70" width="6" height="22" class="f4 s4"/>
      <rect x="116" y="70" width="6" height="22" class="f4 s4"/>
      <rect x="129" y="70" width="6" height="22" class="f4 s4"/>
      <rect x="142" y="70" width="6" height="22" class="f4 s4"/>
      <polygon points="85,62 120,48 155,62" class="f4 s4"/>
      <text x="120" y="112" class="tx-b" text-anchor="middle">Akropol</text>
      <rect x="40" y="140" width="160" height="60" rx="8" class="f2 s2"/>
      <text x="120" y="167" class="tx-b" text-anchor="middle">agora</text>
      <text x="120" y="188" class="tx-s" text-anchor="middle">targ · sądy · spotkania</text>
      <rect x="240" y="20" width="150" height="80" rx="10" class="f4 s4"/>
      <text x="315" y="46" class="tx" text-anchor="middle">Partenon</text>
      <text x="315" y="66" class="tx-s" text-anchor="middle">świątynia Ateny,</text>
      <text x="315" y="84" class="tx-s" text-anchor="middle">opiekunki miasta</text>
      <rect x="240" y="120" width="150" height="80" rx="10" class="f5 s5"/>
      <text x="315" y="146" class="tx" text-anchor="middle">polis =</text>
      <text x="315" y="166" class="tx-s" text-anchor="middle">miasto + okoliczne</text>
      <text x="315" y="184" class="tx-s" text-anchor="middle">wsie, własne prawa</text>
    </svg>`,
    text: `<p><b>Polis</b> to <b>miasto-państwo</b>: miasto z okolicznymi wsiami, z własnymi prawami, władzami i wojskiem. Do największych należały <b>Ateny</b> i <b>Sparta</b>. Od słowa „polis” pochodzi słowo <b>polityka</b>.</p>
      <p>W Atenach nad miastem wznosił się <b>Akropol</b> – wzgórze ze świątyniami z marmuru. Najsłynniejsza to <b>Partenon</b>, świątynia bogini Ateny. Sercem miasta była <b>agora</b> – główny plac, gdzie handlowano, sądzono i rozmawiano o polityce.</p>`,
    remember: 'Akropol – wzgórze ze świątyniami. Agora – główny plac miasta.',
    hook: '<b>Akropol</b> – wysoko na wzgórzu, dla bogów. <b>Agora</b> – na dole, dla ludzi, jak rynek w twoim mieście.',
    check: { q: 'Gdzie w Atenach robiło się zakupy i rozmawiało o polityce?', options: ['na Akropolu', 'na agorze', 'w Partenonie'], answer: 1, explain: 'Agora to główny plac – targ i miejsce spotkań. Akropol to wzgórze ze świątyniami.' },
  },
  {
    title: 'Demokracja – władza ludu',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Kto głosował w Atenach: tak – wolni mężczyźni urodzeni w Atenach; nie – kobiety, niewolnicy i cudzoziemcy">
      <text x="200" y="28" class="tx-b" text-anchor="middle">Zgromadzenie Ludowe 🗳️</text>
      <rect x="10" y="45" width="185" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="45" width="185" height="150" rx="12" class="f2 s2 sw"/>
      <text x="102" y="78" class="tx-b" text-anchor="middle">✔ głosują</text>
      <text x="102" y="110" class="tx" text-anchor="middle">wolni mężczyźni</text>
      <text x="102" y="132" class="tx" text-anchor="middle">urodzeni</text>
      <text x="102" y="154" class="tx" text-anchor="middle">w Atenach</text>
      <text x="297" y="78" class="tx-b" text-anchor="middle">✘ nie głosują</text>
      <text x="297" y="110" class="tx" text-anchor="middle">kobiety</text>
      <text x="297" y="132" class="tx" text-anchor="middle">niewolnicy</text>
      <text x="297" y="154" class="tx" text-anchor="middle">cudzoziemcy</text>
    </svg>`,
    text: `<p><b>Demokracja</b> to greckie słowo: <b>„władza ludu”</b>. W Atenach o sprawach państwa decydowali <b>obywatele</b> na <b>Zgromadzeniu Ludowym</b>: każdy mógł zabrać głos, a decyzje zapadały w głosowaniu. Głos biednego i bogatego był tak samo ważny.</p>
      <p>Obywatelami byli jednak tylko <b>wolni mężczyźni urodzeni w Atenach</b>. W <b>V wieku p.n.e.</b> Atenami kierował <b>Perykles</b> – mówca i strateg. Wprowadził zapłatę za udział w zgromadzeniu, żeby mogli w nim brać udział także biedni.</p>`,
    remember: 'Demokracja = władza ludu. W Atenach głosowali wolni mężczyźni urodzeni w Atenach.',
    hook: '<b>Demos</b> – lud, <b>kratos</b> – władza. Demo-kracja: lud ma władzę.',
    check: { q: 'Kto NIE mógł głosować w Atenach?', options: ['wolny mężczyzna urodzony w Atenach', 'niewolnik', 'biedny rzemieślnik, obywatel Aten'], answer: 1, explain: 'Niewolnicy, kobiety i cudzoziemcy nie mieli prawa głosu. Biedny obywatel – tak, i jego głos ważył tyle samo co bogatego.' },
  },
  {
    title: 'Igrzyska, teatr i mity',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trzy greckie wynalazki: igrzyska olimpijskie w Olimpii ku czci Zeusa co 4 lata od 776 roku p.n.e.; teatr – maski, tragedia i komedia; mitologia – bogowie na Olimpie">
      <rect x="10" y="10" width="120" height="190" rx="12" class="f4 s4 sw"/>
      <rect x="140" y="10" width="120" height="190" rx="12" class="f5 s5 sw"/>
      <rect x="270" y="10" width="120" height="190" rx="12" class="f1 s1 sw"/>
      <text x="70" y="50" class="tx-b" text-anchor="middle">🏃</text>
      <text x="200" y="50" class="tx-b" text-anchor="middle">🎭</text>
      <text x="330" y="50" class="tx-b" text-anchor="middle">⚡</text>
      <text x="70" y="82" class="tx" text-anchor="middle">igrzyska</text>
      <text x="200" y="82" class="tx" text-anchor="middle">teatr</text>
      <text x="330" y="82" class="tx" text-anchor="middle">mitologia</text>
      <text x="70" y="110" class="tx-s" text-anchor="middle">w Olimpii</text>
      <text x="70" y="130" class="tx-s" text-anchor="middle">ku czci Zeusa</text>
      <text x="70" y="150" class="tx-s" text-anchor="middle">co 4 lata</text>
      <text x="70" y="178" class="tx-b" text-anchor="middle">776 p.n.e.</text>
      <text x="200" y="110" class="tx-s" text-anchor="middle">pod gołym</text>
      <text x="200" y="128" class="tx-s" text-anchor="middle">niebem</text>
      <text x="200" y="150" class="tx-s" text-anchor="middle">maski 🎭</text>
      <text x="200" y="172" class="tx-s" text-anchor="middle">tragedia</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">i komedia</text>
      <text x="330" y="110" class="tx-s" text-anchor="middle">opowieści</text>
      <text x="330" y="130" class="tx-s" text-anchor="middle">o bogach</text>
      <text x="330" y="150" class="tx-s" text-anchor="middle">i herosach</text>
      <text x="330" y="178" class="tx-s" text-anchor="middle">bogowie: Olimp</text>
    </svg>`,
    text: `<p><b>Igrzyska olimpijskie</b> odbywały się w <b>Olimpii</b> co cztery lata ku czci <b>Zeusa</b>. Pierwsze rozegrano w <b>776 r. p.n.e.</b> Na czas igrzysk przerywano wojny. Dziś też ogień olimpijski zapala się w Olimpii.</p>
      <p><b>Teatr</b> narodził się w Atenach podczas świąt boga Dionizosa. Grano pod gołym niebem, aktorzy – sami mężczyźni – nosili <b>maski</b>. Wystawiano <b>tragedie</b> (poważne) i <b>komedie</b> (zabawne). <b>Mity</b> opowiadały o bogach z góry <b>Olimp</b> – Zeusie, Herze, Posejdonie, Atenie – i o herosach, np. Heraklesie.</p>`,
    remember: 'Igrzyska – Olimpia, Zeus, co 4 lata, od 776 r. p.n.e. Bogowie mieszkali na Olimpie.',
    hook: 'Na <b>Olimp</b> się wspina – to góra bogów. W <b>Olimpii</b> się biega – tam były igrzyska.',
    check: { q: 'Gdzie odbywały się starożytne igrzyska olimpijskie?', options: ['na górze Olimp', 'w Olimpii', 'na Akropolu w Atenach'], answer: 1, explain: 'Igrzyska rozgrywano w Olimpii. Na Olimpie według mitów mieszkali bogowie.' },
  },
  {
    title: 'Co mamy po Grekach?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Słowa i pomysły po starożytnych Grekach: demokracja, polityka od polis, teatr, filozofia czyli umiłowanie mądrości, igrzyska olimpijskie i alfabet od alfa i beta">
      <ellipse cx="200" cy="110" rx="70" ry="30" class="f4 s4 sw"/>
      <text x="200" y="117" class="tx-b" text-anchor="middle">Grecy</text>
      <line x1="150" y1="92" x2="110" y2="58" class="ln-thin"/>
      <line x1="250" y1="92" x2="290" y2="58" class="ln-thin"/>
      <line x1="130" y1="110" x2="110" y2="110" class="ln-thin"/>
      <line x1="270" y1="110" x2="290" y2="110" class="ln-thin"/>
      <line x1="150" y1="128" x2="110" y2="162" class="ln-thin"/>
      <line x1="250" y1="128" x2="290" y2="162" class="ln-thin"/>
      <rect x="10" y="35" width="120" height="36" rx="8" class="f1 s1"/>
      <rect x="270" y="35" width="120" height="36" rx="8" class="f3 s3"/>
      <rect x="10" y="92" width="100" height="36" rx="8" class="f5 s5"/>
      <rect x="290" y="92" width="100" height="36" rx="8" class="f2 s2"/>
      <rect x="10" y="150" width="120" height="36" rx="8" class="f3 s3"/>
      <rect x="270" y="150" width="120" height="36" rx="8" class="f1 s1"/>
      <text x="70" y="58" class="tx" text-anchor="middle">demokracja</text>
      <text x="330" y="58" class="tx" text-anchor="middle">polityka</text>
      <text x="60" y="115" class="tx" text-anchor="middle">teatr</text>
      <text x="340" y="115" class="tx" text-anchor="middle">filozofia</text>
      <text x="70" y="173" class="tx" text-anchor="middle">olimpiada</text>
      <text x="330" y="173" class="tx" text-anchor="middle">alfabet</text>
      <text x="200" y="210" class="tx-s" text-anchor="middle">alfa + beta = alfabet · filozofia = umiłowanie mądrości</text>
    </svg>`,
    text: `<p><b>Filozofia</b> to po grecku <b>„umiłowanie mądrości”</b>. Filozofowie szukali prawdy, zadając pytania i rozumując. Najsłynniejsi to <b>Sokrates</b> („Wiem, że nic nie wiem”), jego uczeń <b>Platon</b> i uczeń Platona – <b>Arystoteles</b>.</p>
      <p>Grecy zostawili Europie demokrację, filozofię, teatr, igrzyska i mity – i wiele słów, których używasz na co dzień. Nawet <b>alfabet</b> to dwie pierwsze litery greckie: <b>alfa</b> i <b>beta</b>.</p>`,
    remember: 'Dziedzictwo Grecji: demokracja, filozofia, teatr, igrzyska olimpijskie, mitologia.',
    hook: 'Kiedy mówisz „teatr”, „polityka” czy „alfabet” – <b>mówisz po grecku</b>!',
    check: { q: 'Co znaczy słowo „filozofia”?', options: ['władza ludu', 'umiłowanie mądrości', 'miasto-państwo'], answer: 1, explain: 'Filozofia to umiłowanie mądrości. Władza ludu to demokracja, a miasto-państwo – polis.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/rzym'] = [
  {
    title: 'Od wilczycy do imperium',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Oś czasu Rzymu: 753 przed naszą erą legendarne założenie – królestwo; 509 przed naszą erą republika; 27 przed naszą erą cesarstwo; 476 naszej ery upadek zachodniej części cesarstwa">
      <rect x="10" y="70" width="80" height="34" class="f4 s4"/>
      <rect x="90" y="70" width="150" height="34" class="f1 s1"/>
      <rect x="240" y="70" width="150" height="34" class="f5 s5"/>
      <text x="50" y="92" class="tx-s" text-anchor="middle">królestwo</text>
      <text x="165" y="93" class="tx" text-anchor="middle">republika</text>
      <text x="315" y="93" class="tx" text-anchor="middle">cesarstwo</text>
      <line x1="10" y1="62" x2="10" y2="112" class="ln"/>
      <line x1="90" y1="62" x2="90" y2="112" class="ln"/>
      <line x1="240" y1="62" x2="240" y2="112" class="ln"/>
      <line x1="390" y1="62" x2="390" y2="112" class="ln"/>
      <text x="12" y="135" class="tx-s">753</text>
      <text x="90" y="135" class="tx-s" text-anchor="middle">509</text>
      <text x="240" y="135" class="tx-s" text-anchor="middle">27 p.n.e.</text>
      <text x="388" y="135" class="tx-s" text-anchor="end">476 n.e.</text>
      <text x="12" y="153" class="tx-s">p.n.e.</text>
      <text x="90" y="153" class="tx-s" text-anchor="middle">p.n.e.</text>
      <text x="20" y="40" class="tx">🐺 Romulus i Remus (legenda)</text>
      <text x="200" y="185" class="tx-s" text-anchor="middle">Rzym – nad Tybrem, na Półwyspie Apenińskim (Italia)</text>
    </svg>`,
    text: `<p>Rzym leży na <b>Półwyspie Apenińskim</b> (Italii) nad rzeką <b>Tyber</b>. Według legendy założyli go bliźniacy <b>Romulus i Remus</b>, których wykarmiła wilczyca – tradycja podaje rok <b>753 p.n.e.</b></p>
      <p>Najpierw Rzymem rządzili królowie. Ok. 509 r. p.n.e. Rzym stał się <b>republiką</b> – po łacinie „rzecz publiczna”: rządzili urzędnicy wybierani na rok przez obywateli, na czele z dwoma <b>konsulami</b>. Od 27 r. p.n.e. było <b>cesarstwo</b> – rządził cesarz.</p>`,
    remember: 'Rzym: królestwo → republika (509 p.n.e.) → cesarstwo (27 p.n.e.).',
    hook: 'Re-<b>publika</b> – sprawa <b>publiczna</b>, czyli wszystkich. Polska to też republika – Rzeczpospolita!',
    check: { q: 'Jak nazywał się okres, w którym Rzymem rządzili urzędnicy wybierani na rok, z dwoma konsulami na czele?', options: ['cesarstwo', 'republika', 'królestwo'], answer: 1, explain: 'To republika (509–27 p.n.e.). W cesarstwie rządził cesarz, a w królestwie – król.' },
  },
  {
    title: 'Juliusz Cezar',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Droga Juliusza Cezara: konsul, podbój Galii, dyktator, zamordowany w 44 roku p.n.e. Potem Oktawian August – pierwszy cesarz">
      <defs><marker id="a-k4hi-rz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="15" width="115" height="50" rx="10" class="f1 s1"/>
      <rect x="143" y="15" width="115" height="50" rx="10" class="f3 s3"/>
      <rect x="276" y="15" width="115" height="50" rx="10" class="f4 s4"/>
      <text x="67" y="46" class="tx" text-anchor="middle">konsul</text>
      <text x="200" y="38" class="tx" text-anchor="middle">podbój</text>
      <text x="200" y="57" class="tx" text-anchor="middle">Galii</text>
      <text x="333" y="46" class="tx" text-anchor="middle">dyktator</text>
      <line x1="127" y1="40" x2="140" y2="40" class="ln" marker-end="url(#a-k4hi-rz-2)"/>
      <line x1="260" y1="40" x2="273" y2="40" class="ln" marker-end="url(#a-k4hi-rz-2)"/>
      <line x1="333" y1="67" x2="333" y2="88" class="ln" marker-end="url(#a-k4hi-rz-2)"/>
      <rect x="200" y="92" width="190" height="50" rx="10" class="f2 s2"/>
      <text x="295" y="115" class="tx" text-anchor="middle">zamordowany</text>
      <text x="295" y="134" class="tx-b" text-anchor="middle">44 p.n.e.</text>
      <line x1="295" y1="144" x2="295" y2="160" class="ln" marker-end="url(#a-k4hi-rz-2)"/>
      <rect x="40" y="164" width="350" height="54" rx="10" class="f5 s5 sw"/>
      <text x="215" y="188" class="tx-b" text-anchor="middle">Oktawian August</text>
      <text x="215" y="208" class="tx-s" text-anchor="middle">pierwszy cesarz (od 27 r. p.n.e.)</text>
      <text x="100" y="125" class="tx-b" text-anchor="middle">🏛️ I w. p.n.e.</text>
    </svg>`,
    text: `<p><b>Juliusz Cezar</b> żył w I wieku p.n.e. Był zdolnym wodzem: był konsulem, a potem podbił dla Rzymu <b>Galię</b> (m.in. dzisiejszą Francję). Z pomocą wojska zdobył pełnię władzy jako <b>dyktator</b>. W <b>44 r. p.n.e.</b> zamordowali go przeciwnicy polityczni.</p>
      <p>Władzę przejął jego krewny i następca <b>Oktawian</b>. W 27 r. p.n.e. dostał tytuł <b>August</b> i został <b>pierwszym cesarzem</b>. Od przydomka Cezar pochodzi słowo <b>„cesarz”</b>.</p>`,
    remember: 'Cezar nie był cesarzem! Pierwszy cesarz to Oktawian August.',
    hook: 'Cezar → cesarz: <b>imię</b> zostało po Cezarze, ale cesarzem był dopiero Oktawian.',
    check: { q: 'Kto był pierwszym cesarzem rzymskim?', options: ['Juliusz Cezar', 'Oktawian August', 'Romulus'], answer: 1, explain: 'Cezar był dyktatorem republiki. Pierwszym cesarzem został Oktawian August.' },
  },
  {
    title: 'Obywatele i niewolnicy',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie: obywatel rzymski ma prawa – mężczyźni głosują i mogą być urzędnikami; niewolnik nie ma praw, jest własnością pana, najczęściej to jeniec wojenny">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f2 s2 sw"/>
      <text x="102" y="46" class="tx-b" text-anchor="middle">🧑‍⚖️ obywatel</text>
      <text x="297" y="46" class="tx-b" text-anchor="middle">⛓️ niewolnik</text>
      <text x="102" y="84" class="tx" text-anchor="middle">ma prawa</text>
      <text x="102" y="112" class="tx-s" text-anchor="middle">mężczyźni głosują</text>
      <text x="102" y="132" class="tx-s" text-anchor="middle">i mogą być</text>
      <text x="102" y="152" class="tx-s" text-anchor="middle">urzędnikami</text>
      <text x="297" y="84" class="tx" text-anchor="middle">nie ma praw</text>
      <text x="297" y="112" class="tx-s" text-anchor="middle">własność pana</text>
      <text x="297" y="132" class="tx-s" text-anchor="middle">najczęściej</text>
      <text x="297" y="152" class="tx-s" text-anchor="middle">jeniec wojenny</text>
    </svg>`,
    text: `<p><b>Obywatele rzymscy</b> mieli prawa: mężczyźni mogli głosować i zostawać urzędnikami. Kobiety też były obywatelkami, ale nie mogły głosować ani pełnić urzędów.</p>
      <p><b>Niewolnicy</b> nie mieli żadnych praw – według prawa byli <b>własnością</b> pana, jak rzecz. Najczęściej byli to <b>jeńcy wojenni</b>. Pracowali na polach, w domach i warsztatach. Niektórych wyzwalano.</p>`,
    remember: 'Obywatel ma prawa, niewolnik – żadnych (był własnością pana).',
    hook: 'Im więcej Rzym wygrywał wojen, tym więcej miał jeńców – czyli <b>niewolników</b>.',
    check: { q: 'Skąd najczęściej brali się niewolnicy w Rzymie?', options: ['byli to jeńcy wojenni', 'byli to konsulowie, którzy przegrali wybory', 'byli to obywatele, którzy chcieli odpocząć'], answer: 0, explain: 'Rzymianie zabierali do niewoli pokonanych wrogów.' },
  },
  {
    title: 'Imperium wokół „naszego morza”',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat imperium rzymskiego: w środku Morze Śródziemne, dookoła ziemie rzymskie – Italia z Rzymem, Hiszpania, Galia, Grecja, Azja Mniejsza, Egipt i Afryka Północna">
      <rect x="10" y="10" width="380" height="200" rx="40" class="f3 s3"/>
      <ellipse cx="200" cy="115" rx="108" ry="55" class="f1 s1 sw"/>
      <text x="200" y="112" class="tx-b" text-anchor="middle">Morze Śródziemne</text>
      <text x="200" y="134" class="tx-s" text-anchor="middle">„nasze morze”</text>
      <text x="200" y="45" class="tx-b" text-anchor="middle">⭐ Rzym (Italia)</text>
      <text x="100" y="45" class="tx-s" text-anchor="middle">Galia</text>
      <text x="20" y="120" class="tx-s">Hiszpania</text>
      <text x="300" y="45" class="tx-s" text-anchor="middle">Grecja</text>
      <text x="382" y="120" class="tx-s" text-anchor="end">Azja Mn.</text>
      <text x="320" y="195" class="tx-s" text-anchor="middle">Egipt</text>
      <text x="130" y="195" class="tx-s" text-anchor="middle">Afryka Północna</text>
    </svg>`,
    text: `<p>Rzymianie podbili najpierw Italię, a potem prawie wszystkie krainy wokół <b>Morza Śródziemnego</b> – nazywali je „naszym morzem”. Tak powstało <b>imperium rzymskie</b>. Najwięcej ziem miało za cesarza <b>Trajana</b>, na początku II wieku n.e.</p>
      <p>Na dzisiejszej mapie to m.in. Włochy, Hiszpania, Portugalia, Francja, Grecja, Turcja, Egipt i część Wielkiej Brytanii. W I wieku n.e. sam Rzym był jednym z największych miast świata – miał ok. miliona mieszkańców. Zachodnia część cesarstwa upadła w 476 r. n.e.</p>`,
    remember: 'Imperium rzymskie otaczało Morze Śródziemne; największe było za Trajana (II w. n.e.).',
    hook: 'Imperium jak <b>obwarzanek</b>: w środku „dziura” – morze, a dookoła ziemie Rzymian.',
  },
  {
    title: 'Co zostawili nam Rzymianie?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Pięć osiągnięć Rzymian: akwedukt – most z wodą, amfiteatr – arena z trybunami, łuk triumfalny – brama zwycięstwa, łacina – nasz alfabet, prawo rzymskie">
      <rect x="10" y="10" width="120" height="100" rx="10" class="f1 s1"/>
      <rect x="140" y="10" width="120" height="100" rx="10" class="f4 s4"/>
      <rect x="270" y="10" width="120" height="100" rx="10" class="f3 s3"/>
      <rect x="75" y="120" width="120" height="100" rx="10" class="f5 s5"/>
      <rect x="205" y="120" width="120" height="100" rx="10" class="f2 s2"/>
      <path d="M25,30 L115,30 L115,72 L103,72 Q97,52 91,72 L79,72 Q73,52 67,72 L55,72 Q49,52 43,72 L25,72 Z" class="bg ln"/>
      <rect x="25" y="26" width="90" height="4" class="f1 s1"/>
      <ellipse cx="200" cy="50" rx="45" ry="24" class="bg ln"/>
      <ellipse cx="200" cy="50" rx="24" ry="11" class="f4 ln"/>
      <path d="M300,75 L300,30 L360,30 L360,75 L345,75 L345,55 Q330,38 315,55 L315,75 Z" class="bg ln"/>
      <text x="70" y="96" class="tx" text-anchor="middle">akwedukt</text>
      <text x="200" y="96" class="tx" text-anchor="middle">amfiteatr</text>
      <text x="330" y="96" class="tx" text-anchor="middle">łuk triumfalny</text>
      <text x="135" y="168" class="tx-b" text-anchor="middle">A B C</text>
      <text x="135" y="204" class="tx" text-anchor="middle">łacina</text>
      <text x="265" y="168" class="tx-b" text-anchor="middle">⚖️</text>
      <text x="265" y="204" class="tx" text-anchor="middle">prawo</text>
    </svg>`,
    text: `<p>Rzymianie byli świetnymi budowniczymi. <b>Akweduktem</b> – mostem z kanałem – płynęła woda ze źródeł w górach do miasta. W <b>amfiteatrze</b>, np. w Koloseum, na arenie walczyli <b>gladiatorzy</b>. <b>Łuk triumfalny</b> to ozdobna brama na pamiątkę zwycięstwa.</p>
      <p><b>Łacina</b> – język Rzymian – dała początek m.in. językom włoskiemu, francuskiemu i hiszpańskiemu, a litery łacińskie to nasz alfabet. <b>Prawo rzymskie</b> jest podstawą wielu dzisiejszych zasad, np. że trzeba wysłuchać obu stron sporu.</p>`,
    remember: 'Akwedukt – woda, amfiteatr – arena, łuk triumfalny – zwycięstwo; łacina i prawo rzymskie.',
    hook: '<b>Aqua</b> to po łacinie woda – <b>akw</b>edukt prowadzi wodę, a <b>akw</b>arium ją trzyma.',
    check: { q: 'Do czego służył akwedukt?', options: ['do walk gladiatorów', 'do doprowadzania wody do miasta', 'do świętowania zwycięstw'], answer: 1, explain: 'Akwedukt to most z kanałem, którym płynęła woda. Walki gladiatorów odbywały się w amfiteatrze, a zwycięstwa upamiętniał łuk triumfalny.' },
  },
];
