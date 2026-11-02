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

// ---------------------------------------------------------------------------
window.LESSONS['historia/chrzescijanstwo'] = [
  {
    title: 'Jeden Bóg i dziesięć przykazań',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie: politeizm – wielu bogów, np. w Egipcie, Grecji i Rzymie; monoteizm – jeden Bóg, judaizm, a potem chrześcijaństwo. Pod spodem dwie kamienne tablice: dekalog, czyli dziesięć przykazań">
      <rect x="10" y="10" width="185" height="115" rx="12" class="f5 s5 sw"/>
      <rect x="205" y="10" width="185" height="115" rx="12" class="f1 s1 sw"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">politeizm</text>
      <text x="102" y="66" class="tx" text-anchor="middle">wielu bogów</text>
      <text x="102" y="92" class="tx-s" text-anchor="middle">Egipt · Grecja · Rzym</text>
      <text x="102" y="114" class="tx-s" text-anchor="middle">⚡ 🌊 ☀️</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">monoteizm</text>
      <text x="297" y="66" class="tx" text-anchor="middle">jeden Bóg</text>
      <text x="297" y="92" class="tx-s" text-anchor="middle">judaizm, a potem</text>
      <text x="297" y="110" class="tx-s" text-anchor="middle">chrześcijaństwo</text>
      <path d="M30,200 L30,157 Q30,140 50,140 Q70,140 70,157 L70,200 Z" class="f4 s4 sw"/>
      <path d="M76,200 L76,157 Q76,140 96,140 Q116,140 116,157 L116,200 Z" class="f4 s4 sw"/>
      <text x="50" y="178" class="tx-s" text-anchor="middle">I–V</text>
      <text x="96" y="178" class="tx-s" text-anchor="middle">VI–X</text>
      <text x="132" y="166" class="tx-b">dekalog = 10 przykazań</text>
      <text x="132" y="190" class="tx-s">według Biblii: Mojżesz, góra Synaj</text>
    </svg>`,
    text: `<p>W starożytnej <b>Palestynie</b> mieszkali Żydzi. Ich religia to <b>judaizm</b>. Żydzi wierzyli w <b>jednego Boga</b> – to <b>monoteizm</b>. Egipcjanie, Grecy i Rzymianie czcili wielu bogów – to politeizm.</p>
      <p>Według Biblii Mojżesz otrzymał na górze Synaj <b>dekalog</b> – dziesięć przykazań, np. „nie zabijaj”, „nie kradnij”. Żydzi oczekiwali też <b>Mesjasza</b> – wysłannika Boga.</p>`,
    remember: 'Judaizm – religia Żydów; monoteizm – wiara w jednego Boga; dekalog – dziesięć przykazań.',
    hook: '<b>Mono</b> = jeden (monolog mówi jedna osoba), <b>poli</b> = wiele. Mono-teizm: jeden Bóg, poli-teizm: wielu bogów.',
    check: { q: 'Co oznacza słowo „monoteizm”?', options: ['wiarę w wielu bogów', 'wiarę w jednego Boga', 'dziesięć przykazań'], answer: 1, explain: 'Monoteizm to wiara w jednego Boga. Dziesięć przykazań to dekalog.' },
  },
  {
    title: 'Mesjasz, czyli Chrystus',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat: Żydzi czekają na Mesjasza. W Palestynie w I wieku naszej ery działa Jezus z Nazaretu. Uczniowie uznają, że Jezus to Mesjasz. Mesjasz po grecku to Chrystus, czyli namaszczony. Od słowa Chrystus pochodzi nazwa chrześcijanie">
      <defs><marker id="a-k4hi-chr-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="180" height="60" rx="10" class="f1 s1"/>
      <rect x="210" y="10" width="180" height="60" rx="10" class="f4 s4"/>
      <rect x="210" y="100" width="180" height="60" rx="10" class="f3 s3"/>
      <rect x="10" y="100" width="180" height="60" rx="10" class="f5 s5"/>
      <rect x="60" y="180" width="280" height="34" rx="10" class="f2 s2 sw"/>
      <text x="100" y="35" class="tx" text-anchor="middle">Żydzi czekają</text>
      <text x="100" y="57" class="tx" text-anchor="middle">na Mesjasza</text>
      <text x="300" y="35" class="tx" text-anchor="middle">Jezus z Nazaretu</text>
      <text x="300" y="57" class="tx-s" text-anchor="middle">Palestyna, I w. n.e.</text>
      <text x="300" y="124" class="tx" text-anchor="middle">uczniowie:</text>
      <text x="300" y="146" class="tx-s" text-anchor="middle">„Jezus to Mesjasz”</text>
      <text x="100" y="124" class="tx" text-anchor="middle">Mesjasz = Chrystus</text>
      <text x="100" y="146" class="tx-s" text-anchor="middle">(„namaszczony”)</text>
      <text x="200" y="203" class="tx-b" text-anchor="middle">Chrystus → chrześcijanie</text>
      <line x1="192" y1="40" x2="206" y2="40" class="ln" marker-end="url(#a-k4hi-chr-2)"/>
      <line x1="300" y1="72" x2="300" y2="96" class="ln" marker-end="url(#a-k4hi-chr-2)"/>
      <line x1="208" y1="130" x2="194" y2="130" class="ln" marker-end="url(#a-k4hi-chr-2)"/>
      <line x1="100" y1="162" x2="100" y2="176" class="ln" marker-end="url(#a-k4hi-chr-2)"/>
    </svg>`,
    text: `<p>W <b>I wieku n.e.</b> Palestyna należała do imperium rzymskiego. Działał tam <b>Jezus z Nazaretu</b> – żydowski nauczyciel. Jego uczniowie uznali, że to on jest Mesjaszem. „Mesjasz” po grecku to <b>„Chrystus”</b> – stąd nazwa jego wyznawców: <b>chrześcijanie</b>. Najbliższych uczniów Jezusa nazywamy <b>apostołami</b>.</p>
      <p>Jezus został ukrzyżowany z rozkazu rzymskiego namiestnika Poncjusza Piłata. Chrześcijanie wierzą, że zmartwychwstał. Przejęli z judaizmu wiarę w jednego Boga i dekalog, a od Jezusa – naukę o miłości bliźniego i o tym, że wszyscy ludzie są <b>równi wobec Boga</b>.</p>`,
    remember: 'Chrześcijaństwo powstało w I w. n.e. w Palestynie i wyrosło z judaizmu.',
    hook: '<b>Chrystus</b> → <b>chrześcijanie</b>: nazwa wyznawców kryje się w samym słowie.',
    check: { q: 'W którym wieku powstało chrześcijaństwo?', options: ['w I w. p.n.e.', 'w I w. n.e.', 'w IV w. n.e.'], answer: 1, explain: 'Chrześcijaństwo powstało w I wieku naszej ery. W IV wieku stało się religią panującą w cesarstwie.' },
  },
  {
    title: 'Rzymskimi drogami w świat',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Schemat Morza Śródziemnego: z Palestyny na wschodnim brzegu strzałki prowadzą do Antiochii, Efezu, Rzymu, Aleksandrii i Kartaginy">
      <defs><marker id="a-k4hi-chr-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <ellipse cx="200" cy="125" rx="165" ry="62" class="f1 s1"/>
      <text x="190" y="128" class="tx-s" text-anchor="middle">Morze Śródziemne</text>
      <circle cx="368" cy="140" r="8" class="f2 s2 sw"/>
      <text x="398" y="194" class="tx-b" text-anchor="end">Palestyna</text>
      <circle cx="358" cy="88" r="5" class="f4 s4"/>
      <text x="392" y="74" class="tx-s" text-anchor="end">Antiochia</text>
      <circle cx="292" cy="62" r="5" class="f4 s4"/>
      <text x="292" y="48" class="tx-s" text-anchor="middle">Efez</text>
      <circle cx="180" cy="58" r="6" class="f4 s4"/>
      <text x="180" y="42" class="tx-b" text-anchor="middle">Rzym</text>
      <circle cx="250" cy="192" r="5" class="f4 s4"/>
      <text x="250" y="214" class="tx-s" text-anchor="middle">Aleksandria</text>
      <circle cx="110" cy="180" r="5" class="f4 s4"/>
      <text x="110" y="204" class="tx-s" text-anchor="middle">Kartagina</text>
      <line x1="364" y1="132" x2="360" y2="97" class="ln" marker-end="url(#a-k4hi-chr-3)"/>
      <line x1="361" y1="134" x2="300" y2="67" class="ln" marker-end="url(#a-k4hi-chr-3)"/>
      <line x1="360" y1="137" x2="190" y2="61" class="ln" marker-end="url(#a-k4hi-chr-3)"/>
      <line x1="362" y1="147" x2="258" y2="189" class="ln" marker-end="url(#a-k4hi-chr-3)"/>
      <line x1="360" y1="142" x2="120" y2="179" class="ln" marker-end="url(#a-k4hi-chr-3)"/>
      <text x="10" y="20" class="tx-s">I–IV w. n.e.</text>
      <text x="10" y="224" class="tx-s">schemat</text>
    </svg>`,
    text: `<p>Chrześcijaństwo narodziło się w <b>Palestynie</b>, na wschodnim brzegu Morza Śródziemnego. Uczniowie Jezusa wędrowali rzymskimi drogami i płynęli statkami do wielkich miast imperium: <b>Antiochii</b>, <b>Efezu</b>, <b>Aleksandrii</b>, <b>Kartaginy</b> i do samego <b>Rzymu</b>.</p>
      <p>Najwięcej podróżował <b>Paweł z Tarsu</b>. Głosił nową wiarę także tym, którzy nie byli Żydami. Chrześcijaństwo najpierw zdobywało <b>miasta</b>, a wsie – dużo później.</p>`,
    remember: 'Chrześcijaństwo narodziło się w Palestynie i rozeszło się po imperium rzymskim – najpierw do wielkich miast.',
    hook: 'Rzymskie drogi działały jak <b>internet starożytności</b>: wiadomości szybko docierały nimi do każdego dużego miasta.',
    check: { q: 'Gdzie narodziło się chrześcijaństwo?', options: ['w Rzymie', 'w Palestynie', 'w Grecji'], answer: 1, explain: 'Chrześcijaństwo narodziło się w Palestynie. Do Rzymu i Grecji dotarło później.' },
  },
  {
    title: 'Od prześladowań do religii panującej',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Oś czasu: I wiek – powstanie w Palestynie; 64 rok – Neron, prześladowania; 313 rok – edykt mediolański, wolność wiary; 380 rok – Teodozjusz, religia panująca. Na dole ryba – znak chrześcijan">
      <line x1="15" y1="80" x2="385" y2="80" class="ln sw"/>
      <circle cx="50" cy="80" r="6" class="f3 s3 sw"/>
      <circle cx="150" cy="80" r="6" class="f2 s2 sw"/>
      <circle cx="255" cy="80" r="6" class="f1 s1 sw"/>
      <circle cx="350" cy="80" r="6" class="f5 s5 sw"/>
      <text x="50" y="62" class="tx-b" text-anchor="middle">I w.</text>
      <text x="150" y="62" class="tx-b" text-anchor="middle">64</text>
      <text x="255" y="62" class="tx-b" text-anchor="middle">313</text>
      <text x="350" y="62" class="tx-b" text-anchor="middle">380</text>
      <text x="50" y="106" class="tx-s" text-anchor="middle">powstanie</text>
      <text x="50" y="124" class="tx-s" text-anchor="middle">w Palestynie</text>
      <text x="150" y="106" class="tx-s" text-anchor="middle">Neron:</text>
      <text x="150" y="124" class="tx-s" text-anchor="middle">prześladowania</text>
      <text x="255" y="106" class="tx-s" text-anchor="middle">edykt:</text>
      <text x="255" y="124" class="tx-s" text-anchor="middle">wolność wiary</text>
      <text x="350" y="106" class="tx-s" text-anchor="middle">Teodozjusz:</text>
      <text x="350" y="124" class="tx-s" text-anchor="middle">religia</text>
      <text x="350" y="142" class="tx-s" text-anchor="middle">panująca</text>
      <rect x="225" y="18" width="160" height="22" rx="6" class="f4"/>
      <text x="305" y="34" class="tx-s" text-anchor="middle">IV wiek</text>
      <path d="M30,180 Q65,155 100,180 Q65,205 30,180 Z" class="f1 s1 sw"/>
      <path d="M100,180 L118,166 L118,194 Z" class="f1 s1 sw"/>
      <text x="130" y="185" class="tx-s">ryba – znak chrześcijan</text>
    </svg>`,
    text: `<p>Chrześcijanie nie chcieli oddawać czci rzymskim bogom ani cesarzowi, więc wielu Rzymian uważało ich za wrogów. Cesarz <b>Neron</b> obwinił ich o pożar Rzymu w <b>64 r.</b> Chrześcijanie spotykali się w ukryciu, a zmarłych chowali m.in. w <b>katakumbach</b> – podziemnych cmentarzach.</p>
      <p>W <b>313 r.</b> cesarz <b>Konstantyn Wielki</b> wydał <b>edykt mediolański</b> – chrześcijanie dostali <b>wolność wyznania</b>. W <b>380 r.</b> cesarz <b>Teodozjusz Wielki</b> ogłosił chrześcijaństwo <b>religią panującą</b>. Z małej, prześladowanej grupy chrześcijaństwo stało się religią całego imperium.</p>`,
    remember: '313 – edykt mediolański (wolność wyznania); 380 – chrześcijaństwo religią panującą. Oba w IV wieku.',
    hook: '<b>IV wiek</b> to wiek zwycięstwa chrześcijan: na początku (313) – <b>wolność</b>, pod koniec (380) – <b>religia panująca</b>.',
    check: { q: 'Co dał chrześcijanom edykt mediolański z 313 r.?', options: ['wolność wyznania', 'zakaz spotkań', 'nakaz czczenia cesarza'], answer: 0, explain: 'Edykt mediolański cesarza Konstantyna Wielkiego dał wolność wyznania – skończyły się prześladowania.' },
  },
  {
    title: 'Kto przyjmował nową wiarę? Ślady do dziś',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Po lewej: kto przyjmował chrześcijaństwo i dlaczego – ubodzy i niewolnicy, bo nauka o równości wobec Boga i pomoc we wspólnocie; mieszkańcy miast – wspólnota; bogaci i urzędnicy – po 313 roku, gdy wspierali je cesarze. Po prawej ślady dziś: lata naszej ery, Boże Narodzenie i Wielkanoc, niedziela, kościoły-zabytki, zasady dekalogu">
      <rect x="10" y="10" width="185" height="212" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="212" rx="12" class="f1 s1 sw"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">Kto i dlaczego?</text>
      <text x="102" y="64" class="tx-s" text-anchor="middle">ubodzy, niewolnicy:</text>
      <text x="102" y="82" class="tx-s" text-anchor="middle">równość wobec Boga,</text>
      <text x="102" y="100" class="tx-s" text-anchor="middle">pomoc we wspólnocie</text>
      <text x="102" y="130" class="tx-s" text-anchor="middle">mieszkańcy miast:</text>
      <text x="102" y="148" class="tx-s" text-anchor="middle">wspólnota</text>
      <text x="102" y="178" class="tx-s" text-anchor="middle">bogaci, urzędnicy:</text>
      <text x="102" y="196" class="tx-s" text-anchor="middle">po 313 r., gdy</text>
      <text x="102" y="214" class="tx-s" text-anchor="middle">wspierali je cesarze</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">Ślady dziś</text>
      <text x="297" y="70" class="tx-s" text-anchor="middle">📅 lata naszej ery (n.e.)</text>
      <text x="297" y="100" class="tx-s" text-anchor="middle">🎄 Boże Narodzenie</text>
      <text x="297" y="118" class="tx-s" text-anchor="middle">i Wielkanoc</text>
      <text x="297" y="148" class="tx-s" text-anchor="middle">😴 niedziela – odpoczynek</text>
      <text x="297" y="178" class="tx-s" text-anchor="middle">⛪ kościoły – zabytki</text>
      <text x="297" y="208" class="tx-s" text-anchor="middle">📜 zasady dekalogu</text>
    </svg>`,
    text: `<p>Chrześcijaństwo było dla każdego. <b>Ubogich i niewolników</b> przyciągała nauka, że wszyscy są równi wobec Boga, nadzieja na życie wieczne i pomoc, jaką dawała wspólnota. <b>Mieszkańcy miast</b> znajdowali w niej oparcie. Po 313 r., gdy chrześcijaństwo wspierali cesarze, przyjmowało je coraz więcej <b>bogatych i urzędników</b>.</p>
      <p>Ślady chrześcijaństwa widać w Europie do dziś: liczymy lata od umownej daty narodzin Jezusa (n.e.), Boże Narodzenie i Wielkanoc są dniami wolnymi, niedziela – dniem odpoczynku, a kościoły to często najstarsze zabytki miast.</p>`,
    remember: 'Ubodzy i niewolnicy – równość wobec Boga i pomoc; bogaci i urzędnicy – zwłaszcza po 313 r.',
    hook: 'Gdy piszesz datę „2026 r.”, korzystasz z kalendarza, który liczy lata od umownej daty narodzin Jezusa.',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/sredniowiecze'] = [
  {
    title: 'Senior i wasal',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Drabina feudalna: król, pod nim możni, pod nimi rycerze. Strzałka w dół: senior daje ziemię, czyli lenno. Strzałka w górę: wasal daje wierność i służbę. Na dole chłopi – nie są wasalami">
      <defs><marker id="a-k4hi-sr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="150" y="10" width="100" height="36" rx="8" class="f4 s4 sw"/>
      <rect x="135" y="70" width="130" height="36" rx="8" class="f5 s5"/>
      <rect x="135" y="130" width="130" height="36" rx="8" class="f1 s1"/>
      <rect x="105" y="190" width="190" height="34" rx="8" class="f3 s3"/>
      <text x="200" y="34" class="tx-b" text-anchor="middle">👑 król</text>
      <text x="200" y="94" class="tx" text-anchor="middle">możni</text>
      <text x="200" y="154" class="tx" text-anchor="middle">rycerze</text>
      <text x="200" y="212" class="tx-s" text-anchor="middle">chłopi – nie są wasalami</text>
      <line x1="118" y1="30" x2="118" y2="160" class="ln sw" marker-end="url(#a-k4hi-sr-1)"/>
      <line x1="282" y1="160" x2="282" y2="30" class="ln sw" marker-end="url(#a-k4hi-sr-1)"/>
      <text x="10" y="70" class="tx-b">senior</text>
      <text x="10" y="92" class="tx-s">daje ziemię</text>
      <text x="10" y="110" class="tx-s">(lenno)</text>
      <text x="292" y="70" class="tx-b">wasal</text>
      <text x="292" y="92" class="tx-s">wierność</text>
      <text x="292" y="110" class="tx-s">i służba</text>
    </svg>`,
    text: `<p><b>Średniowiecze</b> to epoka po starożytności – umownie od 476 r. do 1492 r. Na początku ludzie żyli w <b>plemionach</b> (wspólnotach z jednego terenu, z tym samym językiem i zwyczajami). Potem powstawały <b>monarchie</b> – państwa, którymi rządził jeden władca: król lub książę.</p>
      <p>Król dawał ziemię – <b>lenno</b> – możnym. Ten, kto daje ziemię, to <b>senior</b>. Ten, kto ją dostaje i przysięga wierność i pomoc wojskową, to <b>wasal</b>. Wasal mógł dać część ziemi rycerzom i stać się ich seniorem.</p>`,
    remember: 'Senior daje ziemię (lenno), wasal przysięga wierność i pomoc wojskową.',
    hook: '<b>Senior</b> to po łacinie „starszy” – stoi wyżej i daje ziemię. <b>Wasal</b> stoi niżej i służy.',
    check: { q: 'Kim był wasal?', options: ['tym, kto daje ziemię', 'tym, kto dostaje ziemię i przysięga wierność', 'mnichem z klasztoru'], answer: 1, explain: 'Wasal dostawał ziemię od seniora i w zamian przysięgał mu wierność i pomoc wojskową.' },
  },
  {
    title: 'Cztery stany',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Cztery stany: duchowieństwo – modlą się; rycerstwo – walczą; mieszczanie – handel i rzemiosło; chłopi – uprawiają ziemię, są najliczniejsi">
      <rect x="10" y="10" width="185" height="95" rx="12" class="f5 s5 sw"/>
      <rect x="205" y="10" width="185" height="95" rx="12" class="f1 s1 sw"/>
      <rect x="10" y="115" width="185" height="95" rx="12" class="f2 s2 sw"/>
      <rect x="205" y="115" width="185" height="95" rx="12" class="f3 s3 sw"/>
      <text x="102" y="45" class="tx-b" text-anchor="middle">🙏 duchowieństwo</text>
      <text x="102" y="75" class="tx" text-anchor="middle">modlą się</text>
      <text x="297" y="45" class="tx-b" text-anchor="middle">⚔️ rycerstwo</text>
      <text x="297" y="75" class="tx" text-anchor="middle">walczą</text>
      <text x="102" y="150" class="tx-b" text-anchor="middle">🏘️ mieszczanie</text>
      <text x="102" y="180" class="tx-s" text-anchor="middle">handel, rzemiosło</text>
      <text x="297" y="150" class="tx-b" text-anchor="middle">🌾 chłopi</text>
      <text x="297" y="175" class="tx-s" text-anchor="middle">uprawiają ziemię</text>
      <text x="297" y="195" class="tx-s" text-anchor="middle">najliczniejsi!</text>
    </svg>`,
    text: `<p><b>Stan</b> to duża grupa ludzi o tych samych prawach i obowiązkach. Do stanu zwykle się rodziło. <b>Duchowieństwo</b> modliło się i dbało o kościoły, <b>rycerstwo</b> walczyło konno, <b>mieszczanie</b> zajmowali się handlem i rzemiosłem, a <b>chłopi</b> – najliczniejszy stan – uprawiali ziemię.</p>
      <p>Miasta miały <b>samorząd</b>: mieszkańcy sami decydowali o części swoich spraw. Rządziła rada miejska z burmistrzem.</p>`,
    remember: 'Stany: duchowieństwo, rycerstwo, mieszczanie, chłopi (najliczniejsi).',
    hook: 'Jedni się <b>modlą</b>, drudzy <b>walczą</b>, trzeci <b>pracują</b> – tak w średniowieczu opisywano społeczeństwo.',
    check: { q: 'Który stan był najliczniejszy?', options: ['rycerstwo', 'chłopi', 'duchowieństwo'], answer: 1, explain: 'Większość ludzi mieszkała na wsi – najliczniejszym stanem byli chłopi.' },
  },
  {
    title: 'Wieś, miasto, zamek, klasztor',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Cztery miejsca: wieś – chłopi, chaty, praca na polu; miasto – mury, rynek, ratusz, rada miejska; zamek – mury, baszty, fosa, rycerze; klasztor – zasada módl się i pracuj, skryptorium i księgi">
      <rect x="10" y="10" width="185" height="100" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="100" rx="12" class="f2 s2"/>
      <rect x="10" y="120" width="185" height="100" rx="12" class="f4 s4"/>
      <rect x="205" y="120" width="185" height="100" rx="12" class="f5 s5"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">🌾 wieś</text>
      <text x="102" y="66" class="tx-s" text-anchor="middle">chłopi, chaty,</text>
      <text x="102" y="86" class="tx-s" text-anchor="middle">praca na polu</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">🏙️ miasto</text>
      <text x="297" y="66" class="tx-s" text-anchor="middle">mury, rynek, ratusz</text>
      <text x="297" y="86" class="tx-s" text-anchor="middle">rada miejska</text>
      <text x="102" y="150" class="tx-b" text-anchor="middle">🏰 zamek</text>
      <text x="102" y="176" class="tx-s" text-anchor="middle">mury, baszty, fosa</text>
      <text x="102" y="196" class="tx-s" text-anchor="middle">rycerze</text>
      <text x="297" y="150" class="tx-b" text-anchor="middle">⛪ klasztor</text>
      <text x="297" y="176" class="tx-s" text-anchor="middle">„módl się i pracuj”</text>
      <text x="297" y="196" class="tx-s" text-anchor="middle">skryptorium – księgi</text>
    </svg>`,
    text: `<p>Większość ludzi mieszkała na <b>wsi</b>: chłopi pracowali na polu od świtu do zmroku i oddawali panu część plonów. <b>Miasto</b> otaczały mury; w środku był rynek z ratuszem, a mieszkali tu rzemieślnicy i kupcy. <b>Zamek</b> był siedzibą władcy lub rycerza – grube mury, baszty i fosa chroniły go przed wrogami.</p>
      <p>W <b>klasztorach</b> mieszkali mnisi. Benedyktyni żyli według zasady „módl się i pracuj”. W <b>skryptorium</b> ręcznie przepisywali księgi, a przy klasztorach działały szkoły i biblioteki.</p>`,
    remember: 'Wieś – chłopi; miasto – mieszczanie; zamek – rycerze; klasztor – mnisi.',
    hook: 'Mnich benedyktyn miał dwa zadania jak dwa słowa po łacinie: <b>ora</b> (módl się) <b>et labora</b> (i pracuj).',
    check: { q: 'Gdzie mnisi przepisywali księgi?', options: ['w ratuszu', 'w skryptorium w klasztorze', 'w zamkowej fosie'], answer: 1, explain: 'Skryptorium to sala w klasztorze, w której ręcznie przepisywano księgi.' },
  },
  {
    title: 'Romański czy gotycki?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Porównanie dwóch kościołów. Romański: niski i szeroki, grube mury, małe okna z półkolistym łukiem. Gotycki: wysoki, z dwiema strzelistymi wieżami, dużymi oknami zakończonymi ostrym łukiem i okrągłą rozetą">
      <rect x="35" y="110" width="130" height="80" class="f4 s4 sw"/>
      <polygon points="28,110 100,70 172,110" class="f2 s2 sw"/>
      <path d="M58,152 L58,134 A7,7 0 0 1 72,134 L72,152 Z" class="bg ln"/>
      <path d="M93,152 L93,134 A7,7 0 0 1 107,134 L107,152 Z" class="bg ln"/>
      <path d="M128,152 L128,134 A7,7 0 0 1 142,134 L142,152 Z" class="bg ln"/>
      <path d="M86,190 L86,176 A14,14 0 0 1 114,176 L114,190 Z" class="bg ln"/>
      <rect x="245" y="95" width="110" height="95" class="f1 s1 sw"/>
      <rect x="245" y="50" width="26" height="45" class="f1 s1 sw"/>
      <rect x="329" y="50" width="26" height="45" class="f1 s1 sw"/>
      <polygon points="245,50 258,10 271,50" class="f5 s5 sw"/>
      <polygon points="329,50 342,10 355,50" class="f5 s5 sw"/>
      <circle cx="300" cy="115" r="13" class="f4 s4"/>
      <path d="M258,178 L258,148 Q258,134 266,126 Q274,134 274,148 L274,178 Z" class="f4 s4"/>
      <path d="M326,178 L326,148 Q326,134 334,126 Q342,134 342,148 L342,178 Z" class="f4 s4"/>
      <path d="M288,190 L288,160 Q288,146 300,138 Q312,146 312,160 L312,190 Z" class="bg ln"/>
      <text x="100" y="216" class="tx-b" text-anchor="middle">romański</text>
      <text x="300" y="216" class="tx-b" text-anchor="middle">gotycki</text>
    </svg>`,
    text: `<p><b>Styl romański</b> (X–XIII w.): grube, ciężkie mury, <b>małe okna</b> z <b>półkolistymi</b> łukami, w środku półmrok. Kościół przypomina twierdzę. Przykłady w Polsce: kolegiata w Tumie pod Łęczycą, rotunda na Wawelu.</p>
      <p><b>Styl gotycki</b> narodził się we Francji w XII w., do Polski dotarł w XIII w. Budowle są wysokie i <b>strzeliste</b>, mają <b>ostrołuki</b>, okrągłe okna – rozety – i <b>duże okna z witrażami</b>, czyli obrazami z kolorowego szkła. Przykład: kościół Mariacki w Krakowie.</p>`,
    remember: 'Romański – grube mury, małe okna, łuk półkolisty. Gotycki – strzelisty, ostrołuki, duże okna z witrażami.',
    hook: 'Gotyk jak <b>rakieta</b> – strzela w górę. Romański jak <b>forteca</b> – gruby i przysadzisty.',
    check: { q: 'Który styl ma ostrołukowe okna z witrażami?', options: ['romański', 'gotycki'], answer: 1, explain: 'Ostrołuki, duże okna i witraże to cechy gotyku. Romański ma małe okna z półkolistym łukiem.' },
  },
  {
    title: 'Chrześcijańska Europa i pierwsze uniwersytety',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Zasięg chrześcijaństwa: we wczesnym średniowieczu głównie dawne ziemie Rzymu; w X wieku Polska 966 i Ruś 988; w 1387 roku Litwa jako ostatnia. Na dole: uniwersytety – najstarsze w Bolonii i Paryżu, w Krakowie od 1364 roku, założony przez Kazimierza Wielkiego">
      <defs><marker id="a-k4hi-sr-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="115" height="80" rx="10" class="f1 s1"/>
      <rect x="142" y="10" width="115" height="80" rx="10" class="f3 s3"/>
      <rect x="274" y="10" width="116" height="80" rx="10" class="f5 s5"/>
      <text x="67" y="38" class="tx-b" text-anchor="middle">do X w.</text>
      <text x="67" y="60" class="tx-s" text-anchor="middle">dawne ziemie</text>
      <text x="67" y="78" class="tx-s" text-anchor="middle">Rzymu</text>
      <text x="200" y="38" class="tx-b" text-anchor="middle">X w.</text>
      <text x="200" y="60" class="tx-s" text-anchor="middle">Polska 966</text>
      <text x="200" y="78" class="tx-s" text-anchor="middle">Ruś 988</text>
      <text x="332" y="38" class="tx-b" text-anchor="middle">1387</text>
      <text x="332" y="60" class="tx-s" text-anchor="middle">Litwa –</text>
      <text x="332" y="78" class="tx-s" text-anchor="middle">ostatnia</text>
      <line x1="127" y1="50" x2="139" y2="50" class="ln" marker-end="url(#a-k4hi-sr-5)"/>
      <line x1="259" y1="50" x2="271" y2="50" class="ln" marker-end="url(#a-k4hi-sr-5)"/>
      <text x="200" y="112" class="tx-s" text-anchor="middle">chrześcijaństwo obejmuje coraz więcej Europy</text>
      <rect x="60" y="130" width="280" height="90" rx="12" class="f4 s4 sw"/>
      <text x="200" y="158" class="tx-b" text-anchor="middle">🎓 uniwersytety</text>
      <text x="200" y="182" class="tx-s" text-anchor="middle">najstarsze: Bolonia, Paryż</text>
      <text x="200" y="204" class="tx-s" text-anchor="middle">Kraków 1364 – Kazimierz Wielki</text>
    </svg>`,
    text: `<p>We wczesnym średniowieczu chrześcijańskie były głównie dawne ziemie imperium rzymskiego. Misjonarze docierali coraz dalej na północ i wschód: w X w. chrzest przyjęły m.in. <b>Polska (966)</b> i <b>Ruś (988)</b>. W późnym średniowieczu chrześcijańska była prawie cała Europa – jako ostatnia chrzest przyjęła <b>Litwa (1387)</b>.</p>
      <p>W średniowieczu powstały <b>uniwersytety</b> – szkoły wyższe. Najstarsze były we Włoszech (Bolonia) i we Francji (Paryż). W Polsce <b>Akademię Krakowską</b> założył w <b>1364 r.</b> król <b>Kazimierz Wielki</b> – dziś to Uniwersytet Jagielloński. Uniwersytety, gotyckie katedry i miasta z rynkiem i ratuszem mamy do dziś.</p>`,
    remember: 'Litwa (1387) – ostatnia. Akademia Krakowska – 1364 r., Kazimierz Wielki.',
    hook: 'Uniwersytet w Krakowie jest starszy od odkrycia Ameryki o ponad 100 lat (1364 → 1492)!',
    check: { q: 'Kto założył uniwersytet w Krakowie w 1364 r.?', options: ['Mieszko I', 'Kazimierz Wielki', 'Bolesław Chrobry'], answer: 1, explain: 'Akademię Krakowską założył król Kazimierz Wielki. Dziś to Uniwersytet Jagielloński.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/narodziny-polski'] = [
  {
    title: 'Gród, książę i drużyna',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Schemat grodu: osada na wyspie w jeziorze, otoczona wałem z drewna i ziemi, z mostem na brzeg. Obok: w grodzie rządzi książę, a jego siłą jest drużyna – według Ibrahima ibn Jakuba 3000 zbrojnych">
      <ellipse cx="110" cy="118" rx="100" ry="95" class="f1"/>
      <circle cx="110" cy="118" r="62" class="f4 s4 sw"/>
      <circle cx="110" cy="118" r="45" class="bg ln"/>
      <rect x="82" y="102" width="18" height="14" class="f2 s2"/>
      <rect x="112" y="96" width="18" height="14" class="f2 s2"/>
      <rect x="98" y="128" width="22" height="16" class="f5 s5"/>
      <rect x="170" y="114" width="46" height="8" class="f2 s2"/>
      <text x="110" y="70" class="tx-s" text-anchor="middle">wał</text>
      <text x="110" y="205" class="tx-s" text-anchor="middle">jezioro</text>
      <text x="228" y="40" class="tx-b">🏰 gród</text>
      <text x="228" y="64" class="tx-s">wał z drewna i ziemi</text>
      <text x="228" y="84" class="tx-s">woda lub bagna wokół</text>
      <rect x="222" y="110" width="168" height="100" rx="12" class="f5 s5 sw"/>
      <text x="306" y="140" class="tx-b" text-anchor="middle">👑 książę</text>
      <text x="306" y="170" class="tx-b" text-anchor="middle">⚔️ drużyna</text>
      <text x="306" y="195" class="tx-s" text-anchor="middle">3000 zbrojnych</text>
    </svg>`,
    text: `<p>Na ziemiach dzisiejszej Polski żyły plemiona słowiańskie. Budowały <b>grody</b> – osady obronne otoczone wałem z drewna i ziemi, w miejscach trudnych do zdobycia, np. na wyspie. W X w. w Wielkopolsce rządził ród <b>Piastów</b>; ważne grody to m.in. Gniezno, Poznań i Ostrów Lednicki.</p>
      <p><b>Mieszko I</b> to pierwszy władca Polski znany ze źródeł pisanych. Był <b>księciem</b>. Jego siłą była <b>drużyna</b> – zawodowi wojownicy na utrzymaniu księcia. Podróżnik Ibrahim ibn Jakub pisał, że Mieszko ma 3000 zbrojnych i daje im ubrania, konie i broń.</p>`,
    remember: 'Gród – osada obronna z wałem; książę – władca; drużyna – wojownicy księcia.',
    hook: '<b>Gród</b> jest <b>ogrodzony</b> – wałem z drewna i ziemi.',
    check: { q: 'Czym była drużyna?', options: ['osadą obronną z wałem', 'oddziałem wojowników księcia', 'dokumentem papieża'], answer: 1, explain: 'Drużyna to zawodowi wojownicy, których utrzymywał książę. Osada obronna to gród.' },
  },
  {
    title: 'Dobrawa i chrzest – 966',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Oś zdarzeń: 965 – ślub Mieszka z Dobrawą; 966 – chrzest Mieszka; 968 – biskupstwo w Poznaniu. Pod spodem: dlaczego to ważne – Polska wśród chrześcijańskich państw Europy, duchowni znający pismo i łacinę, kamienne kościoły i pałace">
      <defs><marker id="a-k4hi-pl-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="115" height="70" rx="10" class="f5 s5"/>
      <rect x="142" y="10" width="116" height="70" rx="10" class="f4 s4 sw"/>
      <rect x="275" y="10" width="115" height="70" rx="10" class="f1 s1"/>
      <text x="67" y="38" class="tx-b" text-anchor="middle">965</text>
      <text x="67" y="62" class="tx-s" text-anchor="middle">ślub z Dobrawą</text>
      <text x="200" y="38" class="tx-b" text-anchor="middle">966</text>
      <text x="200" y="62" class="tx-s" text-anchor="middle">chrzest Mieszka</text>
      <text x="332" y="38" class="tx-b" text-anchor="middle">968</text>
      <text x="332" y="56" class="tx-s" text-anchor="middle">biskupstwo</text>
      <text x="332" y="72" class="tx-s" text-anchor="middle">w Poznaniu</text>
      <line x1="127" y1="45" x2="139" y2="45" class="ln" marker-end="url(#a-k4hi-pl-2)"/>
      <line x1="260" y1="45" x2="272" y2="45" class="ln" marker-end="url(#a-k4hi-pl-2)"/>
      <rect x="10" y="100" width="380" height="110" rx="12" class="f3 s3"/>
      <text x="200" y="126" class="tx-b" text-anchor="middle">Dlaczego to ważne?</text>
      <text x="200" y="150" class="tx-s" text-anchor="middle">Polska wśród chrześcijańskich państw Europy</text>
      <text x="200" y="172" class="tx-s" text-anchor="middle">duchowni: pismo, łacina, dokumenty</text>
      <text x="200" y="194" class="tx-s" text-anchor="middle">kamienne kościoły i pałace</text>
    </svg>`,
    text: `<p>W <b>965 r.</b> Mieszko poślubił <b>Dobrawę</b> – czeską księżniczkę, córkę księcia czeskiego. Czechy były już chrześcijańskie. Według kronikarza Galla Anonima to Dobrawa skłoniła męża do chrztu. W <b>966 r.</b> Mieszko I i jego dwór przyjęli <b>chrzest</b>. W 968 r. powstało pierwsze biskupstwo – w Poznaniu.</p>
      <p>Dzięki chrztowi Polska weszła do grona <b>chrześcijańskich państw Europy</b>. Przybyli duchowni, którzy znali pismo i łacinę, a w grodach stanęły pierwsze kamienne kościoły i pałace.</p>`,
    remember: '966 – chrzest Mieszka I (chrzest Polski). Żona Mieszka: Dobrawa, czeska księżniczka.',
    hook: 'Najpierw ślub (<b>965</b>), rok później chrzest (<b>966</b>) – Dobrawa „przywiozła” chrześcijaństwo z Czech.',
    check: { q: 'W którym roku Mieszko I przyjął chrzest?', options: ['965', '966', '1025'], answer: 1, explain: 'Chrzest był w 966 r. W 965 r. był ślub z Dobrawą, a w 1025 r. – koronacja Chrobrego.' },
  },
  {
    title: 'Państwo rośnie',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Schemat ziem państwa pierwszych Piastów: w środku Wielkopolska z Gnieznem i Poznaniem; na północy Pomorze nad Bałtykiem; na wschodzie Kujawy i Mazowsze; na południu Śląsk i Małopolska. Linią przerywaną zdobycze Chrobrego z 1018 roku: Łużyce i Milsko na zachodzie, Grody Czerwieńskie na wschodzie">
      <text x="200" y="14" class="tx-s" text-anchor="middle">Bałtyk 🌊</text>
      <text x="412" y="14" class="tx-s" text-anchor="end">schemat</text>
      <rect x="140" y="22" width="120" height="40" rx="10" class="f3 s3"/>
      <text x="200" y="48" class="tx" text-anchor="middle">Pomorze</text>
      <rect x="140" y="95" width="120" height="50" rx="10" class="f3 s3 sw"/>
      <text x="200" y="116" class="tx-s" text-anchor="middle">Wielkopolska</text>
      <text x="200" y="134" class="tx-s" text-anchor="middle">Gniezno, Poznań</text>
      <rect x="272" y="62" width="95" height="36" rx="10" class="f3 s3"/>
      <text x="319" y="85" class="tx" text-anchor="middle">Kujawy</text>
      <rect x="285" y="110" width="110" height="36" rx="10" class="f3 s3"/>
      <text x="340" y="133" class="tx" text-anchor="middle">Mazowsze</text>
      <rect x="85" y="165" width="105" height="36" rx="10" class="f3 s3"/>
      <text x="137" y="188" class="tx" text-anchor="middle">Śląsk</text>
      <rect x="200" y="165" width="110" height="36" rx="10" class="f3 s3"/>
      <text x="255" y="188" class="tx" text-anchor="middle">Małopolska</text>
      <rect x="10" y="95" width="120" height="50" rx="10" class="f2 s2 dash"/>
      <text x="70" y="116" class="tx-s" text-anchor="middle">Łużyce</text>
      <text x="70" y="134" class="tx-s" text-anchor="middle">i Milsko</text>
      <rect x="320" y="160" width="95" height="50" rx="10" class="f2 s2 dash"/>
      <text x="367" y="181" class="tx-s" text-anchor="middle">Grody</text>
      <text x="367" y="199" class="tx-s" text-anchor="middle">Czerwieńskie</text>
      <rect x="10" y="220" width="14" height="12" class="f3 s3"/>
      <text x="30" y="231" class="tx-s">państwo ok. 1000 r.</text>
      <rect x="230" y="220" width="14" height="12" class="f2 s2 dash"/>
      <text x="250" y="231" class="tx-s">zdobyte w 1018 r.</text>
    </svg>`,
    text: `<p>Państwo Piastów wyrosło z <b>Wielkopolski</b>. Pod koniec panowania Mieszka I należały do niego m.in. Kujawy, Mazowsze, Pomorze i <b>Śląsk</b> – przyłączony ok. 990 r. po wojnie z Czechami. Ok. 991 r. Mieszko oddał państwo pod opiekę papieża – mówi o tym dokument <b>Dagome iudex</b>, najstarszy opis granic Polski.</p>
      <p>Ok. 1000 r. w państwie była też <b>Małopolska z Krakowem</b>. Bolesław Chrobry zdobył na pewien czas <b>Łużyce i Milsko</b> na zachodzie (pokój w Budziszynie, 1018 r.) i <b>Grody Czerwieńskie</b> na wschodzie (1018 r.).</p>`,
    remember: 'Serce państwa – Wielkopolska (Gniezno, Poznań). Mieszko: m.in. Śląsk ok. 990 r. Chrobry: Łużyce i Milsko (1018).',
    hook: 'Państwo rosło jak <b>kręgi na wodzie</b> – od Wielkopolski na wszystkie strony.',
  },
  {
    title: 'Rok 1000 i rok 1025',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwa wydarzenia. Rok 1000 – zjazd gnieźnieński: Otton III u grobu świętego Wojciecha, arcybiskupstwo w Gnieźnie oraz biskupstwa w Krakowie, Wrocławiu i Kołobrzegu. Rok 1025 – koronacja Bolesława Chrobrego, pierwszego króla Polski: królestwo równe innym w Europie">
      <rect x="10" y="10" width="185" height="200" rx="12" class="f5 s5 sw"/>
      <rect x="205" y="10" width="185" height="200" rx="12" class="f4 s4 sw"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">1000</text>
      <text x="102" y="66" class="tx" text-anchor="middle">zjazd gnieźnieński</text>
      <text x="102" y="94" class="tx-s" text-anchor="middle">Otton III u grobu</text>
      <text x="102" y="112" class="tx-s" text-anchor="middle">św. Wojciecha</text>
      <text x="102" y="140" class="tx-s" text-anchor="middle">arcybiskupstwo</text>
      <text x="102" y="158" class="tx-s" text-anchor="middle">w Gnieźnie</text>
      <text x="102" y="182" class="tx-s" text-anchor="middle">+ Kraków, Wrocław,</text>
      <text x="102" y="200" class="tx-s" text-anchor="middle">Kołobrzeg</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">1025</text>
      <text x="297" y="66" class="tx" text-anchor="middle">👑 koronacja</text>
      <text x="297" y="94" class="tx-s" text-anchor="middle">Bolesław Chrobry –</text>
      <text x="297" y="112" class="tx-s" text-anchor="middle">pierwszy król Polski</text>
      <text x="297" y="140" class="tx-s" text-anchor="middle">królestwo równe</text>
      <text x="297" y="158" class="tx-s" text-anchor="middle">innym w Europie</text>
    </svg>`,
    text: `<p>Biskup <b>Wojciech</b> zginął w 997 r., gdy głosił chrześcijaństwo Prusom. Bolesław Chrobry wykupił jego ciało i pochował w Gnieźnie. W <b>1000 r.</b> do grobu św. Wojciecha przybył cesarz <b>Otton III</b> – to <b>zjazd gnieźnieński</b>. Powstało <b>arcybiskupstwo w Gnieźnie</b> i biskupstwa w Krakowie, Wrocławiu i Kołobrzegu – Kościół w Polsce nie podlegał już biskupom niemieckim.</p>
      <p>W <b>1025 r.</b> Bolesław Chrobry został koronowany – był <b>pierwszym królem Polski</b>. Polska stała się królestwem równym innym królestwom Europy, a król nie zależał od cesarza.</p>`,
    remember: '1000 – zjazd gnieźnieński; 1025 – koronacja Bolesława Chrobrego, pierwszego króla Polski.',
    hook: 'Ojciec – <b>książę</b> (Mieszko, chrzest 966), syn – <b>król</b> (Bolesław, korona 1025).',
    check: { q: 'Kto był pierwszym królem Polski?', options: ['Mieszko I', 'Bolesław Chrobry', 'Otton III'], answer: 1, explain: 'Bolesław Chrobry koronował się w 1025 r. Mieszko I był księciem, a Otton III – cesarzem.' },
  },
  {
    title: 'Skąd to wiemy?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Metody badania czasów pierwszych Piastów: źródła pisane – kroniki Galla Anonima i Thietmara, dokument Dagome iudex; archeologia – wykopaliska grodów, kościołów i grobów; dendrochronologia – słoje drewna; monety w grobach; badania DNA szczątków">
      <rect x="10" y="10" width="185" height="95" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="95" rx="12" class="f4 s4"/>
      <rect x="10" y="115" width="120" height="108" rx="12" class="f3 s3"/>
      <rect x="140" y="115" width="120" height="108" rx="12" class="f2 s2"/>
      <rect x="270" y="115" width="120" height="108" rx="12" class="f5 s5"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">📜 źródła pisane</text>
      <text x="102" y="64" class="tx-s" text-anchor="middle">kroniki Galla Anonima</text>
      <text x="102" y="82" class="tx-s" text-anchor="middle">i Thietmara, Dagome iudex</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">⛏️ archeologia</text>
      <text x="297" y="64" class="tx-s" text-anchor="middle">wykopaliska: grody,</text>
      <text x="297" y="82" class="tx-s" text-anchor="middle">kościoły, groby</text>
      <circle cx="70" cy="150" r="24" class="bg ln"/>
      <circle cx="70" cy="150" r="16" class="ln-thin"/>
      <circle cx="70" cy="150" r="8" class="ln-thin"/>
      <text x="70" y="194" class="tx-s" text-anchor="middle">dendro-</text>
      <text x="70" y="212" class="tx-s" text-anchor="middle">chronologia</text>
      <text x="200" y="158" class="tx-b" text-anchor="middle">🪙</text>
      <text x="200" y="192" class="tx" text-anchor="middle">monety</text>
      <text x="200" y="212" class="tx-s" text-anchor="middle">w grobach</text>
      <text x="330" y="158" class="tx-b" text-anchor="middle">🧬</text>
      <text x="330" y="192" class="tx" text-anchor="middle">DNA</text>
      <text x="330" y="212" class="tx-s" text-anchor="middle">szczątków</text>
    </svg>`,
    text: `<p>O czasach pierwszych Piastów mówią <b>źródła pisane</b>: relacja podróżnika Ibrahima ibn Jakuba, kronika niemieckiego biskupa <b>Thietmara</b> (pisał w czasach Chrobrego i nie lubił go – historyk musi o tym pamiętać), dokument Dagome iudex i najstarsza kronika polska – <b>Galla Anonima</b> (ok. 1112–1116).</p>
      <p>Pisanych źródeł jest mało, dlatego ważni są inni badacze. <b>Archeolodzy</b> odkopują grody, kościoły i groby, np. na Ostrowie Lednickim. <b>Dendrochronologia</b> określa wiek drewna po <b>słojach</b> – tak ustalono, że most prowadzący na Ostrów Lednicki zbudowano w 2. połowie X w. Pomagają też <b>monety</b> znalezione w grobach i <b>badania DNA</b> szczątków.</p>`,
    remember: 'Metody: źródła pisane (kroniki), archeologia, dendrochronologia (słoje drewna), monety, DNA.',
    hook: 'Drzewo prowadzi <b>pamiętnik</b>: co roku dopisuje jeden słój. Kto umie go odczytać, wie, kiedy ścięto drewno.',
    check: { q: 'Co bada dendrochronologia?', options: ['wiek drewna na podstawie słojów', 'dawne pismo', 'pochodzenie monet'], answer: 0, explain: 'Każdy rok to jeden słój drewna. Dzięki temu można ustalić, kiedy ścięto drzewo użyte do budowy.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/rozbicie-dzielnicowe'] = [
  {
    title: 'Ojciec dzieli państwo – 1138',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat: Bolesław Krzywousty w 1138 roku dzieli państwo między synów. Władysław – senior: Śląsk i dzielnica senioralna z Krakowem; Bolesław – Mazowsze z Kujawami; Mieszko – Wielkopolska; Henryk – ziemia sandomierska">
      <defs><marker id="a-k4hi-rd-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="90" y="8" width="220" height="50" rx="12" class="f4 s4 sw"/>
      <text x="200" y="30" class="tx-b" text-anchor="middle">Bolesław Krzywousty</text>
      <text x="200" y="50" class="tx-s" text-anchor="middle">zmarł w 1138 r.</text>
      <path d="M150,60 L56,100" class="ln" marker-end="url(#a-k4hi-rd-1)"/>
      <path d="M185,60 L152,100" class="ln" marker-end="url(#a-k4hi-rd-1)"/>
      <path d="M215,60 L248,100" class="ln" marker-end="url(#a-k4hi-rd-1)"/>
      <path d="M250,60 L344,100" class="ln" marker-end="url(#a-k4hi-rd-1)"/>
      <rect x="6" y="104" width="94" height="108" rx="10" class="f5 s5 sw"/>
      <text x="53" y="126" class="tx-s" text-anchor="middle">Władysław</text>
      <text x="53" y="146" class="tx-b" text-anchor="middle">senior</text>
      <text x="53" y="168" class="tx-s" text-anchor="middle">Kraków</text>
      <text x="53" y="186" class="tx-s" text-anchor="middle">+ Śląsk</text>
      <rect x="104" y="104" width="94" height="108" rx="10" class="f3 s3"/>
      <text x="151" y="126" class="tx-s" text-anchor="middle">Bolesław</text>
      <text x="151" y="158" class="tx-s" text-anchor="middle">Mazowsze</text>
      <text x="151" y="176" class="tx-s" text-anchor="middle">z Kujawami</text>
      <rect x="202" y="104" width="94" height="108" rx="10" class="f3 s3"/>
      <text x="249" y="126" class="tx-s" text-anchor="middle">Mieszko</text>
      <text x="249" y="166" class="tx-s" text-anchor="middle">Wielkopolska</text>
      <rect x="300" y="104" width="94" height="108" rx="10" class="f3 s3"/>
      <text x="347" y="126" class="tx-s" text-anchor="middle">Henryk</text>
      <text x="347" y="158" class="tx-s" text-anchor="middle">ziemia</text>
      <text x="347" y="176" class="tx-s" text-anchor="middle">sandomierska</text>
    </svg>`,
    text: `<p>Książę <b>Bolesław Krzywousty</b> zmarł w <b>1138 r.</b> Przed śmiercią podzielił państwo między synów – każdy dostał <b>dzielnicę</b>, czyli część kraju. Ten podział nazywamy <b>testamentem Krzywoustego</b>.</p>
      <p>Książę chciał, żeby synowie nie walczyli ze sobą o tron. Najstarszy, Władysław, dostał Śląsk i najważniejszą <b>dzielnicę senioralną</b> z <b>Krakowem</b>.</p>`,
    remember: '1138 – testament Krzywoustego, początek rozbicia dzielnicowego.',
    hook: 'Jak tort na urodziny: każdy syn dostał kawałek, a najstarszy – ten z wisienką (Kraków).',
    check: { q: 'Dlaczego Krzywousty podzielił państwo?', options: ['żeby synowie nie walczyli o tron', 'bo kazali mu Krzyżacy', 'żeby oddać kraj cesarzowi'], answer: 0, explain: 'Każdy syn dostał dzielnicę, a najstarszy miał być najważniejszy – tak książę chciał uniknąć walk.' },
  },
  {
    title: 'Senior i juniorzy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Schemat zasady senioratu: na górze senior – najstarszy z Piastów – rządzi w Krakowie i ma pryncypat, czyli władzę zwierzchnią: obrona granic, sprawy z innymi państwami, monety, biskupi. Niżej juniorzy – młodsi bracia w swoich dzielnicach – mają słuchać seniora">
      <defs><marker id="a-k4hi-rd-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="80" y="8" width="240" height="96" rx="12" class="f5 s5 sw"/>
      <text x="200" y="34" class="tx-b" text-anchor="middle">👑 senior – najstarszy</text>
      <text x="200" y="56" class="tx-s" text-anchor="middle">rządzi w Krakowie, ma pryncypat:</text>
      <text x="200" y="74" class="tx-s" text-anchor="middle">obrona granic, inne państwa,</text>
      <text x="200" y="92" class="tx-s" text-anchor="middle">monety, biskupi</text>
      <path d="M110,150 L130,108" class="ln" marker-end="url(#a-k4hi-rd-2)"/>
      <path d="M200,150 L200,108" class="ln" marker-end="url(#a-k4hi-rd-2)"/>
      <path d="M290,150 L270,108" class="ln" marker-end="url(#a-k4hi-rd-2)"/>
      <rect x="30" y="152" width="110" height="50" rx="10" class="f3 s3"/>
      <rect x="145" y="152" width="110" height="50" rx="10" class="f3 s3"/>
      <rect x="260" y="152" width="110" height="50" rx="10" class="f3 s3"/>
      <text x="85" y="174" class="tx" text-anchor="middle">junior</text>
      <text x="200" y="174" class="tx" text-anchor="middle">junior</text>
      <text x="315" y="174" class="tx" text-anchor="middle">junior</text>
      <text x="85" y="193" class="tx-s" text-anchor="middle">swoja dzielnica</text>
      <text x="200" y="193" class="tx-s" text-anchor="middle">swoja dzielnica</text>
      <text x="315" y="193" class="tx-s" text-anchor="middle">swoja dzielnica</text>
    </svg>`,
    text: `<p><b>Zasada senioratu</b>: najważniejszym władcą jest zawsze <b>najstarszy</b> z rodu Piastów – <b>senior</b>. Rządził w Krakowie.</p>
      <p>Jego zwierzchnią władzę nazywamy <b>pryncypatem</b>: senior bronił granic, prowadził sprawy z innymi państwami, bił monety i mianował biskupów. Młodsi bracia – <b>juniorzy</b> – rządzili w swoich dzielnicach, ale mieli go słuchać.</p>`,
    remember: 'Zasada senioratu – rządzi najstarszy Piast. Pryncypat – władza zwierzchnia seniora.',
    hook: '<b>Senior</b> po łacinie znaczy „starszy” – jak <b>senior</b> w klubie, czyli najstarszy zawodnik.',
  },
  {
    title: 'Państwo się kruszy',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat: w 1138 roku cztery dzielnice; potem książęta dzielą je między swoich synów – w XIII wieku prawie 20 księstw. Skutki: małe księstwa są słabe, łatwo je napaść – Prusowie, Litwini, Mongołowie; w 1241 roku pod Legnicą ginie Henryk Pobożny">
      <defs><marker id="a-k4hi-rd-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="70" y="20" class="tx-s" text-anchor="middle">1138: 4 dzielnice</text>
      <rect x="20" y="30" width="48" height="40" class="f3 s3"/>
      <rect x="72" y="30" width="48" height="40" class="f3 s3"/>
      <rect x="20" y="74" width="48" height="40" class="f3 s3"/>
      <rect x="72" y="74" width="48" height="40" class="f3 s3"/>
      <path d="M135,72 L185,72" class="ln sw" marker-end="url(#a-k4hi-rd-3)"/>
      <text x="300" y="20" class="tx-s" text-anchor="middle">XIII w.: prawie 20 księstw</text>
      <g class="f2 s2">
        <rect x="210" y="30" width="30" height="20"/><rect x="244" y="30" width="30" height="20"/><rect x="278" y="30" width="30" height="20"/><rect x="312" y="30" width="30" height="20"/><rect x="346" y="30" width="30" height="20"/>
        <rect x="210" y="54" width="30" height="20"/><rect x="244" y="54" width="30" height="20"/><rect x="278" y="54" width="30" height="20"/><rect x="312" y="54" width="30" height="20"/><rect x="346" y="54" width="30" height="20"/>
        <rect x="210" y="78" width="30" height="20"/><rect x="244" y="78" width="30" height="20"/><rect x="278" y="78" width="30" height="20"/><rect x="312" y="78" width="30" height="20"/><rect x="346" y="78" width="30" height="20"/>
        <rect x="210" y="102" width="30" height="12"/><rect x="244" y="102" width="30" height="12"/><rect x="278" y="102" width="30" height="12"/><rect x="312" y="102" width="30" height="12"/>
      </g>
      <rect x="10" y="132" width="380" height="80" rx="12" class="f1 s1"/>
      <text x="200" y="156" class="tx-b" text-anchor="middle">⚠️ słabe księstwa – łatwy łup</text>
      <text x="200" y="180" class="tx-s" text-anchor="middle">napady Prusów, Litwinów, Mongołów</text>
      <text x="200" y="200" class="tx-s" text-anchor="middle">1241: Legnica – ginie Henryk Pobożny</text>
    </svg>`,
    text: `<p>Plan Krzywoustego się nie udał. Pierwszy senior, Władysław, chciał rządzić sam – bracia wygnali go z kraju, dlatego mówimy o nim <b>Władysław Wygnaniec</b>. Potem książęta dzielili ziemie między własnych synów i księstw było coraz więcej – w XIII w. prawie 20.</p>
      <p>Ten czas (<b>1138–1320</b>) to <b>rozbicie dzielnicowe</b>. Małe księstwa były słabe. W <b>1241 r.</b> najechali Polskę <b>Mongołowie</b> – pod Legnicą zginął książę Henryk Pobożny. Ale ziemie polskie łączyły wciąż: ród Piastów, język i Kościół z arcybiskupem w Gnieźnie.</p>`,
    remember: 'Rozbicie dzielnicowe: 1138–1320. Skutek: słabe państwo, najazdy (np. Mongołowie 1241).',
    hook: 'Jedną gałązkę łatwo złamać, cały pęk – trudno. Tak było z podzieloną Polską.',
    check: { q: 'Jaki był najgroźniejszy skutek rozbicia dzielnicowego?', options: ['słabe księstwa trudno było obronić', 'powstanie Akademii Krakowskiej', 'koronacja Chrobrego'], answer: 0, explain: 'Podzielony kraj był słaby – najeżdżali go m.in. Prusowie, Litwini i Mongołowie.' },
  },
  {
    title: 'Krzyżacy nad Wisłą',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Łańcuch przyczyn i skutków: Prusowie napadają na Mazowsze; około 1226 roku Konrad Mazowiecki sprowadza Zakon Krzyżacki i daje mu ziemię chełmińską; Krzyżacy podbijają Prusów i tworzą własne państwo ze stolicą w Malborku; w latach 1308–1309 zajmują Pomorze Gdańskie">
      <defs><marker id="a-k4hi-rd-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="180" height="60" rx="10" class="f2 s2"/>
      <text x="100" y="35" class="tx" text-anchor="middle">Prusowie napadają</text>
      <text x="100" y="56" class="tx-s" text-anchor="middle">na Mazowsze</text>
      <path d="M192,40 L206,40" class="ln" marker-end="url(#a-k4hi-rd-4)"/>
      <rect x="210" y="10" width="180" height="60" rx="10" class="f4 s4 sw"/>
      <text x="300" y="32" class="tx-s" text-anchor="middle">ok. 1226: Konrad</text>
      <text x="300" y="48" class="tx-s" text-anchor="middle">Mazowiecki sprowadza</text>
      <text x="300" y="64" class="tx-s" text-anchor="middle">Krzyżaków</text>
      <path d="M300,72 L300,86" class="ln" marker-end="url(#a-k4hi-rd-4)"/>
      <rect x="210" y="90" width="180" height="56" rx="10" class="f3 s3"/>
      <text x="300" y="113" class="tx-s" text-anchor="middle">dostają</text>
      <text x="300" y="133" class="tx" text-anchor="middle">ziemię chełmińską</text>
      <path d="M208,118 L194,118" class="ln" marker-end="url(#a-k4hi-rd-4)"/>
      <rect x="10" y="90" width="180" height="56" rx="10" class="f5 s5"/>
      <text x="100" y="113" class="tx-s" text-anchor="middle">podbijają Prusów,</text>
      <text x="100" y="133" class="tx-s" text-anchor="middle">tworzą własne państwo</text>
      <path d="M100,148 L100,162" class="ln" marker-end="url(#a-k4hi-rd-4)"/>
      <rect x="10" y="166" width="380" height="56" rx="10" class="f1 s1 sw"/>
      <text x="200" y="189" class="tx" text-anchor="middle">🏰 stolica: Malbork (od 1309)</text>
      <text x="200" y="211" class="tx-s" text-anchor="middle">1308–1309: zajmują Pomorze Gdańskie</text>
    </svg>`,
    text: `<p>Na północ od Mazowsza żyli <b>Prusowie</b>, którzy nie byli chrześcijanami i napadali na sąsiadów. Około <b>1226 r.</b> książę <b>Konrad Mazowiecki</b> poprosił o pomoc <b>Zakon Krzyżacki</b> – zakon rycerski, czyli wspólnotę rycerzy-zakonników. W zamian dał im <b>ziemię chełmińską</b>.</p>
      <p><b>Skutek</b>: Krzyżacy podbili Prusów i założyli <b>własne państwo</b> – silne i groźne dla Polski. W 1308–1309 r. zajęli Pomorze Gdańskie, a ich stolicą został <b>Malbork</b>.</p>`,
    remember: 'Ok. 1226 – Konrad Mazowiecki sprowadza Krzyżaków (ziemia chełmińska). Skutek: groźne państwo zakonne.',
    hook: 'Zaprosić gościa do pomocy, a on zostaje na zawsze i zabiera ci pokój – tak wyszło z Krzyżakami.',
    check: { q: 'Kto sprowadził Krzyżaków?', options: ['Bolesław Krzywousty', 'Konrad Mazowiecki', 'Henryk Pobożny'], answer: 1, explain: 'Konrad Mazowiecki sprowadził ich ok. 1226 r. do walki z Prusami.' },
  },
  {
    title: 'Nowe wsie i miasta',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Po lewej plan miasta lokowanego na prawie niemieckim: mury obronne, ulice jak szachownica, w środku rynek z ratuszem. Po prawej wieś: zasadźca zostaje sołtysem, chłopi płacą czynsz, a ziemię dzielą na trzy pola – zboże ozime, zboże jare i ugór">
      <rect x="10" y="10" width="190" height="190" rx="16" class="bg ln sw"/>
      <line x1="10" y1="73" x2="200" y2="73" class="ln-thin"/>
      <line x1="10" y1="137" x2="200" y2="137" class="ln-thin"/>
      <line x1="73" y1="10" x2="73" y2="200" class="ln-thin"/>
      <line x1="137" y1="10" x2="137" y2="200" class="ln-thin"/>
      <rect x="75" y="75" width="60" height="60" class="f4 s4"/>
      <rect x="95" y="92" width="20" height="26" class="f2 s2"/>
      <text x="105" y="70" class="tx-s" text-anchor="middle">rynek</text>
      <text x="105" y="152" class="tx-s" text-anchor="middle">ratusz</text>
      <text x="105" y="220" class="tx-s" text-anchor="middle">mury i ulice jak szachownica</text>
      <rect x="215" y="10" width="175" height="62" rx="10" class="f5 s5"/>
      <text x="302" y="34" class="tx-s" text-anchor="middle">zasadźca → sołtys</text>
      <text x="302" y="56" class="tx-s" text-anchor="middle">chłopi płacą czynsz</text>
      <rect x="215" y="84" width="175" height="36" class="f3 s3"/>
      <rect x="215" y="124" width="175" height="36" class="f4 s4"/>
      <rect x="215" y="164" width="175" height="36" class="bg ln dash"/>
      <text x="302" y="107" class="tx-s" text-anchor="middle">zboże ozime</text>
      <text x="302" y="147" class="tx-s" text-anchor="middle">zboże jare</text>
      <text x="302" y="187" class="tx-s" text-anchor="middle">ugór (odpoczywa)</text>
      <text x="302" y="220" class="tx-s" text-anchor="middle">trójpolówka</text>
    </svg>`,
    text: `<p>W XIII w. sprowadzano <b>osadników</b>, głównie z Niemiec i Flandrii, i zakładano nowe wsie i miasta – to <b>lokacja na prawie niemieckim</b>. <b>Zasadźca</b> sprowadzał ludzi i zostawał <b>sołtysem</b> we wsi albo <b>wójtem</b> w mieście. Chłopi byli wolni i płacili stały <b>czynsz</b>; na początku mieli <b>wolniznę</b> – lata bez opłat.</p>
      <p>Lepszy był ciężki pług z żelaznym lemieszem i <b>trójpolówka</b>. Miasta miały <b>rynek z ratuszem</b>, ulice jak szachownica i mury, a rządziła nimi <b>rada miejska z burmistrzem</b> – samorząd. Tak lokowano m.in. Wrocław, Kraków i Poznań.</p>`,
    remember: 'Lokacja: sołtys (wieś), wójt (miasto), czynsz, wolnizna, trójpolówka, rynek z ratuszem.',
    hook: 'Wolnizna = <b>wolne</b> od opłat. Trójpolówka = <b>trzy</b> pola, jedno zawsze śpi.',
  },
  {
    title: 'Zabytki – romańskie i gotyckie',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie zabytków w Polsce. Styl romański: kolegiata w Tumie pod Łęczycą i Drzwi Gnieźnieńskie z XII wieku. Styl gotycki: zamek w Malborku z cegły, kościół Mariacki w Krakowie i kościół Mariacki w Gdańsku. Na dole: chronimy zabytki – nie da się ich odtworzyć">
      <rect x="10" y="10" width="185" height="150" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="150" rx="12" class="f1 s1"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">romański</text>
      <text x="102" y="62" class="tx-s" text-anchor="middle">grube mury, małe okna</text>
      <text x="102" y="92" class="tx-s" text-anchor="middle">kolegiata w Tumie</text>
      <text x="102" y="118" class="tx-s" text-anchor="middle">Drzwi Gnieźnieńskie</text>
      <text x="102" y="136" class="tx-s" text-anchor="middle">(XII w.)</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">gotycki</text>
      <text x="297" y="62" class="tx-s" text-anchor="middle">strzeliste, duże okna</text>
      <text x="297" y="92" class="tx-s" text-anchor="middle">zamek w Malborku</text>
      <text x="297" y="116" class="tx-s" text-anchor="middle">kościół Mariacki</text>
      <text x="297" y="134" class="tx-s" text-anchor="middle">w Krakowie i w Gdańsku</text>
      <rect x="10" y="170" width="380" height="42" rx="10" class="f3 s3"/>
      <text x="200" y="196" class="tx" text-anchor="middle">🛡️ chronimy – nie da się ich odtworzyć</text>
    </svg>`,
    text: `<p>Z tamtych czasów zachowało się wiele <b>zabytków</b>. Styl <b>romański</b>: kolegiata w Tumie pod Łęczycą i brązowe <b>Drzwi Gnieźnieńskie</b> (XII w.) ze scenami z życia św. Wojciecha. Styl <b>gotycki</b>: <b>zamek w Malborku</b> – największa ceglana budowla gotycka w Europie – i kościoły Mariackie w Krakowie i Gdańsku.</p>
      <p>Zabytki chronimy, bo są świadkami przeszłości, są ważne dla mieszkańców regionu, a zniszczonych nie da się naprawdę odtworzyć. Poszukaj zabytku w swojej okolicy!</p>`,
    remember: 'Romańskie: Tum, Drzwi Gnieźnieńskie. Gotyckie: Malbork, kościoły Mariackie w Krakowie i Gdańsku.',
    check: { q: 'Który zabytek jest gotycki?', options: ['Drzwi Gnieźnieńskie', 'kolegiata w Tumie', 'zamek w Malborku'], answer: 2, explain: 'Zamek w Malborku to gotycka budowla z cegły. Drzwi Gnieźnieńskie i kolegiata w Tumie są romańskie.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/ostatni-piastowie'] = [
  {
    title: 'Łokietek łączy kraj – 1320',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat: Władysław Łokietek łączy Wielkopolskę i Małopolskę w jedno królestwo; 20 stycznia 1320 roku zostaje koronowany w Krakowie – koniec rozbicia dzielnicowego. Pomorze Gdańskie zajęli Krzyżacy, a Śląsk i Mazowsze są poza granicami">
      <defs><marker id="a-k4hi-op-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="120" height="50" rx="10" class="f3 s3"/>
      <text x="70" y="50" class="tx" text-anchor="middle">Wielkopolska</text>
      <rect x="10" y="90" width="120" height="50" rx="10" class="f3 s3"/>
      <text x="70" y="120" class="tx" text-anchor="middle">Małopolska</text>
      <path d="M134,45 L176,72" class="ln" marker-end="url(#a-k4hi-op-1)"/>
      <path d="M134,115 L176,90" class="ln" marker-end="url(#a-k4hi-op-1)"/>
      <rect x="180" y="40" width="210" height="80" rx="12" class="f4 s4 sw"/>
      <text x="285" y="66" class="tx-b" text-anchor="middle">👑 20 I 1320</text>
      <text x="285" y="90" class="tx-s" text-anchor="middle">koronacja w Krakowie</text>
      <text x="285" y="108" class="tx-s" text-anchor="middle">koniec rozbicia dzielnicowego</text>
      <rect x="10" y="158" width="185" height="54" rx="10" class="f2 s2 dash"/>
      <text x="102" y="181" class="tx-s" text-anchor="middle">Pomorze Gdańskie</text>
      <text x="102" y="200" class="tx-s" text-anchor="middle">zajęli Krzyżacy</text>
      <rect x="205" y="158" width="185" height="54" rx="10" class="bg ln dash"/>
      <text x="297" y="181" class="tx-s" text-anchor="middle">poza granicami:</text>
      <text x="297" y="200" class="tx-s" text-anchor="middle">Śląsk, Mazowsze</text>
    </svg>`,
    text: `<p><b>Władysław Łokietek</b>, książę kujawski, przez wiele lat walczył o zjednoczenie kraju. <b>20 stycznia 1320 r.</b> został <b>koronowany</b> na króla Polski w Krakowie. <b>Koronacja</b> to uroczyste nałożenie korony – znak objęcia władzy. Tak skończyło się rozbicie dzielnicowe: znów było jedno <b>Królestwo Polskie</b>.</p>
      <p>Nie wszystko się udało: w 1308–1309 r. Krzyżacy zajęli Pomorze Gdańskie. W 1331 r. rycerstwo Łokietka starło się z nimi pod <b>Płowcami</b> – bitwa była nierozstrzygnięta, ale dodała Polakom otuchy.</p>`,
    remember: '1320 – koronacja Władysława Łokietka, koniec rozbicia dzielnicowego.',
    hook: 'Mały wzrostem (łokieć to dawna miara), wielki czynem – <b>Łokietek</b> skleił Polskę jak puzzle.',
    check: { q: 'Co zakończyła koronacja Łokietka w 1320 r.?', options: ['rozbicie dzielnicowe', 'wojnę trzynastoletnią', 'panowanie Piastów'], answer: 0, explain: 'Rok 1320 kończy rozbicie dzielnicowe (1138–1320). Panowanie Piastów skończyło się w 1370 r.' },
  },
  {
    title: 'Kazimierz Wielki – dyplomata',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Umowy Kazimierza Wielkiego: 1335 Wyszehrad – król Czech za opłatą rezygnuje z prawa do korony polskiej; 1343 Kalisz – Krzyżacy oddają Kujawy i ziemię dobrzyńską, zatrzymują Pomorze Gdańskie; 1348 – Śląsk zostaje przy Czechach">
      <rect x="10" y="10" width="380" height="58" rx="10" class="f1 s1"/>
      <text x="22" y="34" class="tx-b">1335</text>
      <text x="80" y="34" class="tx-s">Wyszehrad: król Czech za opłatą</text>
      <text x="80" y="54" class="tx-s">rezygnuje z prawa do korony polskiej</text>
      <rect x="10" y="78" width="380" height="58" rx="10" class="f3 s3 sw"/>
      <text x="22" y="102" class="tx-b">1343</text>
      <text x="80" y="102" class="tx-s">pokój w Kaliszu: wracają Kujawy</text>
      <text x="80" y="122" class="tx-s">i ziemia dobrzyńska (Pomorze – nie)</text>
      <rect x="10" y="146" width="380" height="58" rx="10" class="f2 s2"/>
      <text x="22" y="170" class="tx-b">1348</text>
      <text x="80" y="170" class="tx-s">Śląsk zostaje przy Czechach –</text>
      <text x="80" y="190" class="tx-s">w zamian spokój na zachodzie</text>
    </svg>`,
    text: `<p>Syn Łokietka, <b>Kazimierz Wielki</b>, rządził w latach <b>1333–1370</b>. Wolał <b>dyplomację</b> – rozmowy i umowy – od wojen.</p>
      <p>W <b>1343 r.</b> zawarł z Krzyżakami <b>pokój w Kaliszu</b>: Polska odzyskała Kujawy i ziemię dobrzyńską, ale Pomorze Gdańskie zostało przy zakonie. Uznał też, że Śląsk należy do Czech. Za to miał spokój i mógł się zająć wschodem.</p>`,
    remember: '1343 – pokój w Kaliszu: Kujawy i ziemia dobrzyńska wracają do Polski.',
    hook: 'Kazimierz liczył: lepszy pewny pokój niż niepewna wojna.',
  },
  {
    title: 'Jak zmieniły się granice?',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Schemat ziem Kazimierza Wielkiego: w środku Wielkopolska i Małopolska – królestwo z 1333 roku; dołączają Kujawy i ziemia dobrzyńska w 1343 roku oraz Ruś Halicka ze Lwowem na wschodzie; Mazowsze uznaje zwierzchnictwo króla. Poza granicami: Pomorze Gdańskie – u Krzyżaków i Śląsk – przy Czechach">
      <text x="412" y="14" class="tx-s" text-anchor="end">schemat</text>
      <rect x="120" y="10" width="140" height="44" rx="10" class="f2 s2 dash"/>
      <text x="190" y="30" class="tx-s" text-anchor="middle">Pomorze Gdańskie</text>
      <text x="190" y="46" class="tx-s" text-anchor="middle">(Krzyżacy)</text>
      <rect x="270" y="10" width="140" height="44" rx="10" class="f3 s3"/>
      <text x="340" y="30" class="tx-s" text-anchor="middle">Kujawy i ziemia</text>
      <text x="340" y="46" class="tx-s" text-anchor="middle">dobrzyńska (1343)</text>
      <rect x="120" y="66" width="140" height="44" rx="10" class="f4 s4 sw"/>
      <text x="190" y="93" class="tx" text-anchor="middle">Wielkopolska</text>
      <rect x="270" y="66" width="140" height="44" rx="10" class="f5 s5"/>
      <text x="340" y="86" class="tx-s" text-anchor="middle">Mazowsze</text>
      <text x="340" y="102" class="tx-s" text-anchor="middle">(hołd dla króla)</text>
      <rect x="10" y="122" width="100" height="44" rx="10" class="f2 s2 dash"/>
      <text x="60" y="142" class="tx-s" text-anchor="middle">Śląsk</text>
      <text x="60" y="158" class="tx-s" text-anchor="middle">(Czechy)</text>
      <rect x="120" y="122" width="140" height="44" rx="10" class="f4 s4 sw"/>
      <text x="190" y="149" class="tx" text-anchor="middle">Małopolska</text>
      <rect x="270" y="122" width="140" height="44" rx="10" class="f3 s3"/>
      <text x="340" y="142" class="tx-s" text-anchor="middle">Ruś Halicka</text>
      <text x="340" y="158" class="tx-s" text-anchor="middle">ze Lwowem</text>
      <rect x="10" y="186" width="14" height="12" class="f4 s4"/>
      <text x="30" y="197" class="tx-s">królestwo w 1333 r.</text>
      <rect x="210" y="186" width="14" height="12" class="f3 s3"/>
      <text x="230" y="197" class="tx-s">przyłączone</text>
      <rect x="10" y="208" width="14" height="12" class="f2 s2 dash"/>
      <text x="30" y="219" class="tx-s">poza granicami</text>
      <rect x="210" y="208" width="14" height="12" class="f5 s5"/>
      <text x="230" y="219" class="tx-s">zależne od króla</text>
    </svg>`,
    text: `<p>Łokietek zostawił synowi głównie <b>Wielkopolskę i Małopolskę</b>. Kazimierz Wielki odzyskał <b>Kujawy i ziemię dobrzyńską</b> (1343), a na wschodzie przyłączył <b>Ruś Halicką ze Lwowem</b>. Książęta Mazowsza złożyli mu hołd – uznali go za swojego zwierzchnika.</p>
      <p>Poza granicami zostały <b>Pomorze Gdańskie</b> (u Krzyżaków) i <b>Śląsk</b> (przy Czechach). Państwo przesunęło się więc trochę na wschód.</p>`,
    remember: 'Zyski Kazimierza: Kujawy, ziemia dobrzyńska, Ruś Halicka. Poza Polską: Pomorze Gdańskie, Śląsk.',
    check: { q: 'Które ziemie przyłączył Kazimierz Wielki na wschodzie?', options: ['Ruś Halicką ze Lwowem', 'Pomorze Gdańskie', 'Śląsk'], answer: 0, explain: 'Na wschodzie Kazimierz przyłączył Ruś Halicką. Pomorze Gdańskie i Śląsk zostały poza granicami.' },
  },
  {
    title: 'Polska drewniana – Polska murowana',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej Polska drewniana: drewniany gród z wałem. Strzałka. Po prawej Polska murowana: zamek i mury z kamienia i cegły. Pod spodem reformy Kazimierza Wielkiego: statuty – spisane prawa, mennica – monety, nowe miasta, Akademia Krakowska w 1364 roku">
      <defs><marker id="a-k4hi-op-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="40" width="130" height="50" class="f4 s4"/>
      <line x1="40" y1="40" x2="40" y2="90" class="ln-thin"/><line x1="60" y1="40" x2="60" y2="90" class="ln-thin"/><line x1="80" y1="40" x2="80" y2="90" class="ln-thin"/><line x1="100" y1="40" x2="100" y2="90" class="ln-thin"/><line x1="120" y1="40" x2="120" y2="90" class="ln-thin"/>
      <text x="85" y="26" class="tx-s" text-anchor="middle">drewno</text>
      <path d="M165,65 L225,65" class="ln sw" marker-end="url(#a-k4hi-op-4)"/>
      <rect x="240" y="40" width="140" height="50" class="f2 s2"/>
      <rect x="250" y="22" width="22" height="18" class="f2 s2"/>
      <rect x="299" y="22" width="22" height="18" class="f2 s2"/>
      <rect x="348" y="22" width="22" height="18" class="f2 s2"/>
      <line x1="240" y1="57" x2="380" y2="57" class="ln-thin"/><line x1="240" y1="74" x2="380" y2="74" class="ln-thin"/>
      <text x="310" y="108" class="tx-s" text-anchor="middle">kamień i cegła</text>
      <rect x="10" y="122" width="185" height="42" rx="10" class="f1 s1"/>
      <text x="102" y="148" class="tx-s" text-anchor="middle">📜 statuty – spisane prawa</text>
      <rect x="205" y="122" width="185" height="42" rx="10" class="f1 s1"/>
      <text x="297" y="148" class="tx-s" text-anchor="middle">🪙 mennica – monety</text>
      <rect x="10" y="172" width="185" height="42" rx="10" class="f1 s1"/>
      <text x="102" y="198" class="tx-s" text-anchor="middle">🏘️ nowe miasta i zamki</text>
      <rect x="205" y="172" width="185" height="42" rx="10" class="f5 s5 sw"/>
      <text x="297" y="198" class="tx-s" text-anchor="middle">🎓 Akademia – 1364</text>
    </svg>`,
    text: `<p>Kronikarz Jan Długosz napisał o Kazimierzu, że <b>„zastał Polskę drewnianą, a zostawił murowaną”</b>. Król budował zamki i mury obronne, zakładał miasta (np. Kazimierz pod Krakowem).</p>
      <p>Kazał spisać prawa – <b>statuty</b>, żeby sądzono według tych samych zasad. W Krakowie bito monety. W <b>1364 r.</b> założył <b>Akademię Krakowską</b> – pierwszy uniwersytet w Polsce. Kształcili się tu głównie przyszli prawnicy.</p>`,
    remember: '1364 – Kazimierz Wielki zakłada Akademię Krakowską.',
    hook: 'Kazimierz – <b>Wielki</b> budowniczy: z drewna zrobił mur, a z praw – książkę (statuty).',
    check: { q: 'W którym roku powstała Akademia Krakowska?', options: ['1320', '1364', '1410'], answer: 1, explain: 'Kazimierz Wielki założył ją w 1364 r. W 1320 r. była koronacja Łokietka, w 1410 r. – Grunwald.' },
  },
  {
    title: 'Monarchia stanowa i koniec Piastów – 1370',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Na górze król i rada królewska. Pod nimi stany: duchowieństwo, rycerstwo, mieszczanie, chłopi – każdy stan ma inne prawa i obowiązki. Na dole: rok 1370 – Kazimierz Wielki umiera bez syna, koniec dynastii Piastów na tronie; królem zostaje Ludwik Węgierski, siostrzeniec">
      <rect x="110" y="8" width="180" height="40" rx="10" class="f4 s4 sw"/>
      <text x="200" y="34" class="tx" text-anchor="middle">👑 król + rada</text>
      <rect x="10" y="62" width="88" height="54" rx="8" class="f5 s5"/>
      <rect x="106" y="62" width="88" height="54" rx="8" class="f1 s1"/>
      <rect x="202" y="62" width="88" height="54" rx="8" class="f3 s3"/>
      <rect x="298" y="62" width="92" height="54" rx="8" class="f2 s2"/>
      <text x="54" y="94" class="tx-s" text-anchor="middle">duchowni</text>
      <text x="150" y="94" class="tx-s" text-anchor="middle">rycerstwo</text>
      <text x="246" y="94" class="tx-s" text-anchor="middle">mieszczanie</text>
      <text x="344" y="94" class="tx-s" text-anchor="middle">chłopi</text>
      <text x="200" y="136" class="tx-s" text-anchor="middle">stany – różne prawa i obowiązki</text>
      <rect x="10" y="150" width="380" height="72" rx="12" class="f2 s2 sw"/>
      <text x="200" y="174" class="tx-b" text-anchor="middle">1370 – koniec Piastów na tronie</text>
      <text x="200" y="196" class="tx-s" text-anchor="middle">Kazimierz umiera bez syna</text>
      <text x="200" y="214" class="tx-s" text-anchor="middle">królem zostaje Ludwik Węgierski</text>
    </svg>`,
    text: `<p>Za Kazimierza Wielkiego Polska stawała się <b>monarchią stanową</b>: rządzi król, a społeczeństwo dzieli się na <b>stany</b> – duchowieństwo, rycerstwo, mieszczan i chłopów – o różnych prawach i obowiązkach. Najważniejsi ludzie z tych stanów pomagali królowi rządzić, np. w <b>radzie królewskiej</b>.</p>
      <p>Kazimierz zmarł w <b>1370 r.</b> Miał tylko córki, a kobiety nie dziedziczyły wtedy tronu. To <b>koniec dynastii Piastów na tronie Polski</b>. Królem został jego siostrzeniec <b>Ludwik Węgierski</b> – król Węgier.</p>`,
    remember: '1370 – śmierć Kazimierza Wielkiego, koniec Piastów na tronie Polski. Następca: Ludwik Węgierski.',
    hook: 'Łokietek <b>1320</b> zaczął, syn <b>1370</b> zakończył – obie daty kończą się zerem.',
    check: { q: 'Kto został królem po Kazimierzu Wielkim?', options: ['Władysław Jagiełło', 'Ludwik Węgierski', 'Bolesław Chrobry'], answer: 1, explain: 'Królem został Ludwik Węgierski, siostrzeniec Kazimierza. Jagiełło panował później, od 1386 r.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['historia/polska-litwa'] = [
  {
    title: 'Jadwiga, Jagiełło i Krewo – 1385',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Po lewej Polska z królem Jadwigą, po prawej Litwa z wielkim księciem Jagiełłą. Obu zagrażają Krzyżacy. W środku umowa w Krewie 1385: Jagiełło przyjmie chrzest, połączy Litwę z Polską, odzyska ziemie – w zamian ręka Jadwigi i korona">
      <rect x="10" y="10" width="140" height="64" rx="10" class="f4 s4 sw"/>
      <text x="80" y="36" class="tx" text-anchor="middle">Polska</text>
      <text x="80" y="58" class="tx-s" text-anchor="middle">król: Jadwiga</text>
      <rect x="250" y="10" width="140" height="64" rx="10" class="f3 s3 sw"/>
      <text x="320" y="36" class="tx" text-anchor="middle">Litwa</text>
      <text x="320" y="58" class="tx-s" text-anchor="middle">wielki książę Jagiełło</text>
      <rect x="160" y="10" width="80" height="64" rx="10" class="f2 s2"/>
      <text x="200" y="38" class="tx-s" text-anchor="middle">⚔️ wróg:</text>
      <text x="200" y="58" class="tx-s" text-anchor="middle">Krzyżacy</text>
      <rect x="40" y="90" width="320" height="130" rx="12" class="f1 s1 sw"/>
      <text x="200" y="114" class="tx-b" text-anchor="middle">📜 Krewo, 1385</text>
      <text x="200" y="140" class="tx-s" text-anchor="middle">Jagiełło: chrzest z poddanymi</text>
      <text x="200" y="160" class="tx-s" text-anchor="middle">połączenie Litwy z Polską</text>
      <text x="200" y="180" class="tx-s" text-anchor="middle">odzyskanie utraconych ziem</text>
      <text x="200" y="206" class="tx-s" text-anchor="middle">w zamian: ślub z Jadwigą i korona</text>
    </svg>`,
    text: `<p>W 1384 r. córkę Ludwika Węgierskiego, <b>Jadwigę</b>, koronowano na <b>króla</b> Polski. Obok leżało ogromne <b>Wielkie Księstwo Litewskie</b> – Litwini nie byli jeszcze chrześcijanami. Rządził nimi wielki książę <b>Jagiełło</b>. Krzyżacy najeżdżali Litwę, a od Polski odebrali Pomorze Gdańskie – był więc <b>wspólny wróg</b>.</p>
      <p>W <b>1385 r.</b> w <b>Krewie</b> Jagiełło obiecał przyjąć chrzest z poddanymi, połączyć Litwę z Polską i odzyskać utracone ziemie. W 1386 r. ochrzcił się (imię Władysław), poślubił Jadwigę i został królem. W <b>1387 r.</b> był <b>chrzest Litwy</b>.</p>`,
    remember: '1385 – umowa w Krewie; 1386 – Jagiełło królem Polski; 1387 – chrzest Litwy.',
    hook: 'W <b>Krewie</b> połączyły się dwa narody jak dwie <b>krewne</b> rodziny – przez ślub.',
    check: { q: 'Co obiecał Jagiełło w Krewie?', options: ['przyjąć chrzest i połączyć Litwę z Polską', 'oddać Litwę Krzyżakom', 'zrezygnować z korony'], answer: 0, explain: 'Jagiełło obiecał chrzest, połączenie Litwy z Polską i odzyskanie ziem. W zamian poślubił Jadwigę.' },
  },
  {
    title: 'Unia personalna i chrystianizacja',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Jedna korona – jeden władca – nad dwoma osobnymi państwami: Polską i Litwą. Każde ma swoje prawa i urzędy. Obok wyjaśnienie: chrystianizacja – szerzenie chrześcijaństwa; po chrzcie Litwy Krzyżacy nie mają powodu do najazdów">
      <defs><marker id="a-k4hi-pl2-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="110" y="8" width="180" height="44" rx="12" class="f4 s4 sw"/>
      <text x="200" y="36" class="tx" text-anchor="middle">👑 jeden władca</text>
      <path d="M170,54 L110,82" class="ln" marker-end="url(#a-k4hi-pl2-2)"/>
      <path d="M230,54 L290,82" class="ln" marker-end="url(#a-k4hi-pl2-2)"/>
      <rect x="20" y="86" width="160" height="60" rx="10" class="f1 s1"/>
      <text x="100" y="112" class="tx" text-anchor="middle">Polska</text>
      <text x="100" y="134" class="tx-s" text-anchor="middle">swoje prawa, urzędy</text>
      <rect x="220" y="86" width="160" height="60" rx="10" class="f3 s3"/>
      <text x="300" y="112" class="tx" text-anchor="middle">Litwa</text>
      <text x="300" y="134" class="tx-s" text-anchor="middle">swoje prawa, urzędy</text>
      <rect x="20" y="158" width="360" height="44" rx="10" class="f5 s5"/>
      <text x="200" y="185" class="tx-s" text-anchor="middle">✝️ chrzest Litwy (1387) – Krzyżacy tracą pretekst</text>
    </svg>`,
    text: `<p><b>Unia</b> to związek państw. Polska i Litwa zawarły <b>unię personalną</b>: miały <b>wspólnego władcę</b>, ale każde państwo zachowało swoje prawa i urzędy. Razem były silniejsze od Krzyżaków. Od Jagiełły wywodzi się nowa dynastia – <b>Jagiellonowie</b>.</p>
      <p><b>Chrystianizacja</b> to szerzenie chrześcijaństwa. Krzyżacy tłumaczyli swoje najazdy nawracaniem Litwinów. Po chrzcie Litwy to tłumaczenie straciło sens – a spór z zakonem się zaostrzył.</p>`,
    remember: 'Unia personalna – wspólny władca, osobne państwa. Chrystianizacja – szerzenie chrześcijaństwa.',
    hook: '<b>Persona</b> po łacinie to <b>osoba</b> – w unii personalnej państwa łączy osoba władcy.',
    check: { q: 'Co łączy państwa w unii personalnej?', options: ['wspólne prawa i urzędy', 'osoba wspólnego władcy', 'wspólna stolica'], answer: 1, explain: 'W unii personalnej państwa mają wspólnego władcę, a prawa i urzędy – osobne.' },
  },
  {
    title: 'Klejnoty królowej dla uczelni – 1400',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś czasu Akademii Krakowskiej: 1364 – założenie przez Kazimierza Wielkiego; potem uczelnia podupada; 1399 – Jadwiga zapisuje klejnoty na odnowienie; 1400 – Władysław Jagiełło odnawia Akademię; dziś Uniwersytet Jagielloński">
      <line x1="20" y1="70" x2="400" y2="70" class="ln sw"/>
      <circle cx="55" cy="70" r="8" class="f1 s1 sw"/>
      <circle cx="160" cy="70" r="8" class="bg ln"/>
      <circle cx="265" cy="70" r="8" class="f5 s5 sw"/>
      <circle cx="365" cy="70" r="8" class="f4 s4 sw"/>
      <text x="55" y="44" class="tx-b" text-anchor="middle">1364</text>
      <text x="160" y="44" class="tx-s" text-anchor="middle">później</text>
      <text x="265" y="44" class="tx-b" text-anchor="middle">1399</text>
      <text x="365" y="44" class="tx-b" text-anchor="middle">1400</text>
      <text x="55" y="100" class="tx-s" text-anchor="middle">założenie</text>
      <text x="55" y="118" class="tx-s" text-anchor="middle">(Kazimierz)</text>
      <text x="160" y="100" class="tx-s" text-anchor="middle">uczelnia</text>
      <text x="160" y="118" class="tx-s" text-anchor="middle">podupada</text>
      <text x="265" y="100" class="tx-s" text-anchor="middle">💎 Jadwiga:</text>
      <text x="265" y="118" class="tx-s" text-anchor="middle">klejnoty w testamencie</text>
      <text x="365" y="100" class="tx-s" text-anchor="middle">Jagiełło</text>
      <text x="365" y="118" class="tx-s" text-anchor="middle">odnawia</text>
      <rect x="60" y="145" width="300" height="44" rx="12" class="f3 s3 sw"/>
      <text x="210" y="173" class="tx" text-anchor="middle">🎓 dziś: Uniwersytet Jagielloński</text>
    </svg>`,
    text: `<p>Uczelnia założona przez Kazimierza Wielkiego w 1364 r. z czasem podupadła. Królowa <b>Jadwiga</b> zapisała w testamencie swoje <b>klejnoty</b> i kosztowności na jej odnowienie. Zmarła w 1399 r.</p>
      <p><b>Władysław Jagiełło</b> spełnił jej wolę i w <b>1400 r.</b> <b>odnowił Akademię Krakowską</b>. Dlatego dziś ta uczelnia nazywa się <b>Uniwersytet Jagielloński</b>.</p>`,
    remember: '1364 – założenie (Kazimierz Wielki); 1400 – odnowienie (Jadwiga i Jagiełło).',
    hook: 'Królowa oddała <b>klejnoty</b>, żeby Polska miała klejnot nauki.',
  },
  {
    title: 'Grunwald – 15 lipca 1410',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Bitwa pod Grunwaldem 15 lipca 1410 roku. Po lewej wojska polsko-litewskie: król Władysław Jagiełło i wielki książę Witold. Po prawej Krzyżacy: wielki mistrz Ulryk von Jungingen. Między nimi dwa nagie miecze – wyzwanie do walki. Wynik: zwycięstwo Polski i Litwy, wielki mistrz poległ, Malborka nie zdobyto, I pokój toruński 1411">
      <rect x="10" y="10" width="150" height="80" rx="10" class="f4 s4 sw"/>
      <text x="85" y="36" class="tx-b" text-anchor="middle">Polska i Litwa</text>
      <text x="85" y="58" class="tx-s" text-anchor="middle">Władysław Jagiełło</text>
      <text x="85" y="76" class="tx-s" text-anchor="middle">wielki książę Witold</text>
      <rect x="240" y="10" width="150" height="80" rx="10" class="f2 s2"/>
      <text x="315" y="36" class="tx-b" text-anchor="middle">Krzyżacy</text>
      <text x="315" y="58" class="tx-s" text-anchor="middle">wielki mistrz</text>
      <text x="315" y="76" class="tx-s" text-anchor="middle">Ulryk von Jungingen</text>
      <text x="200" y="48" class="tx-b" text-anchor="middle">⚔️⚔️</text>
      <text x="200" y="72" class="tx-s" text-anchor="middle">2 miecze</text>
      <rect x="10" y="104" width="380" height="118" rx="12" class="f3 s3"/>
      <text x="200" y="128" class="tx-b" text-anchor="middle">wynik</text>
      <text x="200" y="152" class="tx-s" text-anchor="middle">✅ zwycięstwo, wielki mistrz poległ</text>
      <text x="200" y="174" class="tx-s" text-anchor="middle">🏰 Malborka nie zdobyto</text>
      <text x="200" y="196" class="tx-s" text-anchor="middle">1411 – I pokój toruński: Żmudź dla Litwy,</text>
      <text x="200" y="214" class="tx-s" text-anchor="middle">ziemia dobrzyńska dla Polski</text>
    </svg>`,
    text: `<p>Spór o Żmudź (ziemię litewską) wywołał <b>wielką wojnę</b> z zakonem (1409–1411). <b>15 lipca 1410 r.</b> rozegrała się <b>bitwa pod Grunwaldem</b>. Wojskami polsko-litewskimi dowodzili król <b>Władysław Jagiełło</b> i wielki książę <b>Witold</b>, Krzyżakami – wielki mistrz <b>Ulryk von Jungingen</b>. Przed bitwą posłowie krzyżaccy przynieśli <b>dwa nagie miecze</b> – wyzwanie do walki.</p>
      <p>Krzyżacy przegrali, a wielki mistrz poległ. Wojska oblegały potem Malbork, ale go nie zdobyły. W <b>I pokoju toruńskim</b> (1411) Litwa odzyskała Żmudź, a Polska – ziemię dobrzyńską. Upadł mit, że Krzyżacy są niezwyciężeni.</p>`,
    remember: '15 lipca 1410 – bitwa pod Grunwaldem.',
    hook: 'Jak w opowieści: <b>wyzwanie</b> (dwa miecze) → <b>bitwa</b> → <b>oblężenie</b> Malborka → <b>pokój</b> w Toruniu.',
    check: { q: 'Kto dowodził Krzyżakami pod Grunwaldem?', options: ['Witold', 'Ulryk von Jungingen', 'Konrad Mazowiecki'], answer: 1, explain: 'Wielki mistrz Ulryk von Jungingen poległ w bitwie. Witold dowodził razem z Jagiełłą wojskami polsko-litewskimi.' },
  },
  {
    title: 'Zawisza Czarny – wzór rycerza',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Zawisza Czarny z Garbowa – rycerz spod Grunwaldu, słynny z turniejów. Cechy dobrego rycerza: odwaga, wierność słowu, honor, uczciwa walka, obrona słabszych. Powiedzenie: polegać jak na Zawiszy – na kimś, kto nigdy nie zawiedzie">
      <rect x="10" y="10" width="380" height="54" rx="12" class="f4 s4 sw"/>
      <text x="200" y="34" class="tx-b" text-anchor="middle">🛡️ Zawisza Czarny z Garbowa</text>
      <text x="200" y="54" class="tx-s" text-anchor="middle">Grunwald, sława w turniejach</text>
      <rect x="10" y="76" width="120" height="40" rx="8" class="f1 s1"/>
      <rect x="140" y="76" width="120" height="40" rx="8" class="f1 s1"/>
      <rect x="270" y="76" width="120" height="40" rx="8" class="f1 s1"/>
      <rect x="75" y="124" width="120" height="40" rx="8" class="f1 s1"/>
      <rect x="205" y="124" width="120" height="40" rx="8" class="f1 s1"/>
      <text x="70" y="101" class="tx-s" text-anchor="middle">odwaga</text>
      <text x="200" y="101" class="tx-s" text-anchor="middle">wierność słowu</text>
      <text x="330" y="101" class="tx-s" text-anchor="middle">honor</text>
      <text x="135" y="149" class="tx-s" text-anchor="middle">uczciwa walka</text>
      <text x="265" y="149" class="tx-s" text-anchor="middle">obrona słabszych</text>
      <text x="200" y="196" class="tx" text-anchor="middle">„polegać jak na Zawiszy”</text>
    </svg>`,
    text: `<p><b>Zawisza Czarny z Garbowa</b> walczył pod Grunwaldem i słynął ze zwycięstw w turniejach rycerskich. Zginął w 1428 r. w walce z Turkami. Uważano go za ideał rycerza – do dziś mówimy <b>„polegać jak na Zawiszy”</b>, czyli na kimś, kto nigdy nie zawiedzie.</p>
      <p>Zasady dobrego rycerza to <b>etos rycerski</b>: odwaga, wierność danemu słowu, honor, uczciwa walka i obrona słabszych. Wiele opowieści o Zawiszy to legenda – ale pokazuje, kogo podziwiano. <b>Pomyśl:</b> czy te cechy są ważne także dziś? Uzasadnij.</p>`,
    remember: '„Polegać jak na Zawiszy” – ufać komuś, kto nigdy nie zawiedzie.',
    hook: '<b>ZA</b>-<b>WI</b>-sza = <b>ZA</b>wsze <b>WI</b>erny.',
  },
  {
    title: 'II pokój toruński – 1466',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Schemat po II pokoju toruńskim w 1466 roku: Prusy Królewskie – Pomorze Gdańskie z Gdańskiem, ziemia chełmińska, Warmia, Malbork i Elbląg – wracają do Polski, która znów ma dostęp do morza. Prusy Zakonne ze stolicą w Królewcu zostają przy zakonie, a wielki mistrz składa hołd lenny królowi Polski. Na dole oś: 1385 Krewo, 1410 Grunwald, 1466 II pokój toruński">
      <text x="210" y="16" class="tx-s" text-anchor="middle">Bałtyk 🌊</text>
      <rect x="10" y="26" width="220" height="100" rx="12" class="f3 s3 sw"/>
      <text x="120" y="50" class="tx-b" text-anchor="middle">Prusy Królewskie</text>
      <text x="120" y="72" class="tx-s" text-anchor="middle">Pomorze Gdańskie, Gdańsk,</text>
      <text x="120" y="90" class="tx-s" text-anchor="middle">ziemia chełmińska, Warmia,</text>
      <text x="120" y="108" class="tx-s" text-anchor="middle">Malbork, Elbląg → Polska</text>
      <rect x="240" y="26" width="170" height="100" rx="12" class="f2 s2 dash"/>
      <text x="325" y="50" class="tx-b" text-anchor="middle">Prusy Zakonne</text>
      <text x="325" y="72" class="tx-s" text-anchor="middle">stolica: Królewiec</text>
      <text x="325" y="96" class="tx-s" text-anchor="middle">wielki mistrz składa</text>
      <text x="325" y="114" class="tx-s" text-anchor="middle">hołd królowi Polski</text>
      <line x1="30" y1="180" x2="390" y2="180" class="ln sw"/>
      <circle cx="70" cy="180" r="8" class="f1 s1 sw"/>
      <circle cx="210" cy="180" r="8" class="f4 s4 sw"/>
      <circle cx="350" cy="180" r="8" class="f3 s3 sw"/>
      <text x="70" y="160" class="tx-b" text-anchor="middle">1385</text>
      <text x="210" y="160" class="tx-b" text-anchor="middle">1410</text>
      <text x="350" y="160" class="tx-b" text-anchor="middle">1466</text>
      <text x="70" y="208" class="tx-s" text-anchor="middle">Krewo</text>
      <text x="210" y="208" class="tx-s" text-anchor="middle">Grunwald</text>
      <text x="350" y="208" class="tx-s" text-anchor="middle">II pokój toruński</text>
    </svg>`,
    text: `<p>Mieszkańcy miast i rycerze z państwa zakonnego mieli dość rządów Krzyżaków. W 1454 r. poprosili króla Polski o przyłączenie – wybuchła <b>wojna trzynastoletnia</b> (1454–1466).</p>
      <p>Zakończył ją <b>II pokój toruński</b> w <b>1466 r.</b> Polska odzyskała <b>Pomorze Gdańskie</b> i <b>ziemię chełmińską</b>, zdobyła też Warmię, Malbork i Elbląg – te ziemie nazwano <b>Prusami Królewskimi</b>. Polska znów miała dostęp do morza. Reszta, ze stolicą w Królewcu, to <b>Prusy Zakonne</b> – wielki mistrz składał królowi Polski <b>hołd lenny</b>.</p>`,
    remember: 'Kolejność: Krewo (1385) → Grunwald (1410) → II pokój toruński (1466).',
    hook: 'Najpierw <b>ślub</b> (Krewo), potem <b>bitwa</b> (Grunwald), na końcu <b>zysk</b> (Toruń).',
    check: { q: 'Co Polska odzyskała w 1466 r.?', options: ['Pomorze Gdańskie i ziemię chełmińską', 'Śląsk', 'Ruś Halicką'], answer: 0, explain: 'W II pokoju toruńskim Polska odzyskała Pomorze Gdańskie i ziemię chełmińską oraz zdobyła Warmię, Malbork i Elbląg.' },
  },
];
