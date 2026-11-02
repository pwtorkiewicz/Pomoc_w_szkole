/* Lekcje – edukacja dla bezpieczeństwa, klasa 8 (Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa, dz. I–IV).
 * Klucz: 'edb/<id działu>'. Format: docs/LEKCJE.md. Treść oparta na działach z js/dane/kl8/edb.js. */
window.LESSONS = window.LESSONS || {};

window.LESSONS['edb/bezpieczenstwo'] = [
  {
    title: 'Bezpieczeństwo ma wiele twarzy',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="W środku państwo, wokół pięć wymiarów bezpieczeństwa: militarne, polityczne, gospodarcze, społeczne i cyberbezpieczeństwo">
      <g class="ln-thin"><line x1="130" y1="27" x2="170" y2="75"/><line x1="270" y1="27" x2="230" y2="75"/><line x1="130" y1="100" x2="158" y2="100"/><line x1="270" y1="100" x2="242" y2="100"/><line x1="200" y1="142" x2="200" y2="160"/></g>
      <rect x="10" y="10" width="120" height="34" rx="8" class="f2 s2 sw"/><text x="70" y="32" class="tx" text-anchor="middle">militarne</text>
      <rect x="270" y="10" width="120" height="34" rx="8" class="f5 s5 sw"/><text x="330" y="32" class="tx" text-anchor="middle">polityczne</text>
      <rect x="10" y="83" width="120" height="34" rx="8" class="f4 s4 sw"/><text x="70" y="105" class="tx" text-anchor="middle">gospodarcze</text>
      <rect x="270" y="83" width="120" height="34" rx="8" class="f3 s3 sw"/><text x="330" y="105" class="tx" text-anchor="middle">społeczne</text>
      <rect x="105" y="160" width="190" height="34" rx="8" class="f1 s1 sw"/><text x="200" y="182" class="tx" text-anchor="middle">cyberbezpieczeństwo</text>
      <rect x="158" y="58" width="84" height="84" rx="42" class="bg ln"/><text x="200" y="105" class="tx-b" text-anchor="middle">państwo</text>
    </svg>`,
    text: `<p><b>Bezpieczeństwo państwa</b> to sytuacja, w której państwo może przetrwać, rozwijać się i chronić obywateli. Zagrożenia mogą przyjść z różnych stron, dlatego bezpieczeństwo ma kilka wymiarów.</p>
      <p>Wojsko to tylko jeden z nich. Liczą się też stabilna polityka, gospodarka i dostawy energii, spokój społeczny i odporność na cyberataki.</p>`,
    remember: 'Wymiary bezpieczeństwa: <b>militarne, polityczne, gospodarcze (energetyczne), społeczne, cyber</b>.',
    hook: 'Państwo jest jak dom: potrzebuje drzwi z zamkiem (wojsko), ale też prądu, pieniędzy, zgodnych domowników i hasła do Wi-Fi.',
    check: { q: 'Który przykład dotyczy bezpieczeństwa energetycznego?', options: ['pewne dostawy gazu i prądu', 'liczba żołnierzy', 'wynik meczu reprezentacji'], answer: 0, explain: 'Bezpieczeństwo energetyczne to część bezpieczeństwa gospodarczego.' },
  },
  {
    title: 'Polska i jej siedmiu sąsiadów',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Schemat: Polska w środku; na północy Morze Bałtyckie, Rosja (obwód królewiecki) i Litwa, na zachodzie Niemcy, na południu Czechy i Słowacja, na wschodzie Białoruś i Ukraina. Wschodnia granica to granica UE i NATO">
      <text x="200" y="22" class="tx-s" text-anchor="middle">Morze Bałtyckie</text>
      <text x="150" y="55" class="tx" text-anchor="middle">Rosja*</text>
      <text x="262" y="55" class="tx" text-anchor="middle">Litwa</text>
      <text x="78" y="115" class="tx" text-anchor="middle">Niemcy</text>
      <rect x="140" y="75" width="110" height="70" rx="8" class="f3 s3 sw"/><text x="195" y="115" class="tx-b" text-anchor="middle">POLSKA</text>
      <line x1="262" y1="68" x2="262" y2="158" class="ln s2 sw dash"/>
      <text x="326" y="98" class="tx" text-anchor="middle">Białoruś</text>
      <text x="326" y="140" class="tx" text-anchor="middle">Ukraina</text>
      <text x="150" y="182" class="tx" text-anchor="middle">Czechy</text>
      <text x="258" y="182" class="tx" text-anchor="middle">Słowacja</text>
      <text x="10" y="218" class="tx-s">* obwód królewiecki</text>
      <text x="390" y="218" class="tx-s t2" text-anchor="end">‒ ‒ granica UE i NATO</text>
    </svg>`,
    text: `<p>Polska leży w <b>Europie Środkowej</b> i graniczy z <b>7 państwami</b>. Na północy ma dostęp do Bałtyku.</p>
      <p>Najważniejsze dla bezpieczeństwa: nasza <b>wschodnia granica</b> (z Białorusią, Ukrainą i dalej z Rosją) jest jednocześnie <b>zewnętrzną granicą Unii Europejskiej i NATO</b>. Polska jest państwem granicznym sojuszu.</p>`,
    remember: 'Sąsiedzi: Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa, Rosja (obwód królewiecki).',
    check: { q: 'Z iloma państwami graniczy Polska?', options: ['5', '7', '9'], answer: 1, explain: 'Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa i Rosja – razem 7.' },
  },
  {
    title: 'Korytarz Europy – szansa i ryzyko',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Strzałki przechodzą przez Polskę z zachodu na wschód. Poniżej: szansa – handel i transport; ryzyko – łatwy przemarsz wojsk">
      <defs><marker id="a-edb-bz-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="40" y="52" class="tx-s" text-anchor="middle">zachód</text>
      <text x="360" y="52" class="tx-s" text-anchor="middle">wschód</text>
      <line x1="15" y1="90" x2="143" y2="90" class="ln" marker-end="url(#a-edb-bz-3)"/>
      <line x1="257" y1="90" x2="385" y2="90" class="ln" marker-end="url(#a-edb-bz-3)"/>
      <rect x="145" y="60" width="110" height="60" rx="8" class="f3 s3 sw"/><text x="200" y="95" class="tx-b" text-anchor="middle">POLSKA</text>
      <rect x="10" y="135" width="185" height="48" rx="8" class="f3 s3 sw"/><text x="102.5" y="155" class="tx" text-anchor="middle">✅ szansa</text><text x="102.5" y="173" class="tx-s" text-anchor="middle">handel i transport</text>
      <rect x="205" y="135" width="185" height="48" rx="8" class="f2 s2 sw"/><text x="297.5" y="155" class="tx" text-anchor="middle">⚠️ ryzyko</text><text x="297.5" y="173" class="tx-s" text-anchor="middle">łatwy przemarsz wojsk</text>
    </svg>`,
    text: `<p>Przez Polskę biegną ważne szlaki: ze wschodu na zachód i z północy na południe. To <b>tranzytowość</b>.</p>
      <p>Dla gospodarki to <b>szansa</b> – handel, transport, inwestycje. Dla bezpieczeństwa – <b>wyzwanie</b>: rozległe niziny łatwo przemierzyć obcym wojskom. Dlatego tak ważne są sojusze i własne siły zbrojne.</p>`,
    hook: 'Polska to skrzyżowanie w środku Europy: dużo ruchu = dużo zarobku, ale też trzeba pilnować świateł.',
  },
  {
    title: 'Sojusze: jeden za wszystkich',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Rząd kół – członkowie NATO; napaść na jednego (Polskę) oznacza napaść na wszystkich. Oś czasu: 1949 powstaje NATO, 1999 Polska w NATO, 2004 Polska w Unii Europejskiej">
      <defs><marker id="a-edb-bz-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="172" y1="6" x2="172" y2="36" class="ln s2 sw" marker-end="url(#a-edb-bz-4)"/>
      <text x="184" y="22" class="tx-s t2">napaść</text>
      <g class="f1 s1 sw"><circle cx="60" cy="60" r="20"/><circle cx="116" cy="60" r="20"/><circle cx="228" cy="60" r="20"/><circle cx="284" cy="60" r="20"/><circle cx="340" cy="60" r="20"/></g>
      <circle cx="172" cy="60" r="20" class="f2 s2 sw"/>
      <text x="172" y="66" class="tx-b" text-anchor="middle">PL</text>
      <text x="200" y="105" class="tx-s" text-anchor="middle">napaść na jednego = napaść na wszystkich (art. 5)</text>
      <line x1="20" y1="160" x2="380" y2="160" class="ln"/>
      <g class="ln"><line x1="60" y1="153" x2="60" y2="167"/><line x1="200" y1="153" x2="200" y2="167"/><line x1="340" y1="153" x2="340" y2="167"/></g>
      <text x="60" y="145" class="tx-b" text-anchor="middle">1949</text>
      <text x="200" y="145" class="tx-b" text-anchor="middle">1999</text>
      <text x="340" y="145" class="tx-b" text-anchor="middle">2004</text>
      <text x="60" y="188" class="tx-s" text-anchor="middle">powstaje NATO</text>
      <text x="200" y="188" class="tx-s" text-anchor="middle">Polska w NATO</text>
      <text x="340" y="188" class="tx-s" text-anchor="middle">Polska w UE</text>
    </svg>`,
    text: `<p><b>NATO</b> to sojusz wojskowo-polityczny. Jego fundament to <b>kolektywna obrona</b> (art. 5 traktatu): napaść zbrojna na jednego członka jest traktowana jak napaść na wszystkich.</p>
      <p><b>Unia Europejska</b> wzmacnia nas gospodarczo i politycznie, a <b>OBWE</b> (57 państw) i <b>ONZ</b> dbają o pokój i współpracę. Sojusze nie usuwają wszystkich zagrożeń, ale dają nam sojuszników.</p>`,
    remember: 'NATO – od <b>1999</b>, UE – od <b>1 maja 2004</b>. Art. 5: jeden za wszystkich, wszyscy za jednego.',
    hook: 'Muszkieterowie mieli to pierwsi: „jeden za wszystkich, wszyscy za jednego” – tak działa art. 5 NATO.',
    check: { q: 'Na czym polega zasada kolektywnej obrony NATO?', options: ['każde państwo broni się samo', 'NATO pomaga tylko w czasie powodzi', 'napaść na jednego członka to napaść na wszystkich'], answer: 2, explain: 'To art. 5 Traktatu Północnoatlantyckiego.' },
  },
];

window.LESSONS['edb/wojsko'] = [
  {
    title: 'Po co nam wojsko?',
    svg: `<svg viewBox="0 0 400 185" role="img" aria-label="Tarcza z napisami: suwerenność, niepodległość, bezpieczeństwo, pokój. Po bokach zadania w czasie pokoju: powódź, poszukiwania, niewybuchy, cyberobrona">
      <path d="M200,10 L290,30 L290,90 Q290,140 200,172 Q110,140 110,90 L110,30 Z" class="f3 s3 sw"/>
      <text x="200" y="58" class="tx" text-anchor="middle">suwerenność</text>
      <text x="200" y="82" class="tx" text-anchor="middle">niepodległość</text>
      <text x="200" y="106" class="tx" text-anchor="middle">bezpieczeństwo</text>
      <text x="200" y="130" class="tx" text-anchor="middle">pokój</text>
      <rect x="5" y="25" width="95" height="60" rx="8" class="f1 s1 sw"/><text x="52.5" y="48" class="tx" text-anchor="middle">🌊</text><text x="52.5" y="72" class="tx-s" text-anchor="middle">powódź</text>
      <rect x="5" y="100" width="95" height="60" rx="8" class="f1 s1 sw"/><text x="52.5" y="123" class="tx" text-anchor="middle">🔍</text><text x="52.5" y="147" class="tx-s" text-anchor="middle">poszukiwania</text>
      <rect x="300" y="25" width="95" height="60" rx="8" class="f1 s1 sw"/><text x="347.5" y="48" class="tx" text-anchor="middle">💣</text><text x="347.5" y="72" class="tx-s" text-anchor="middle">niewybuchy</text>
      <rect x="300" y="100" width="95" height="60" rx="8" class="f1 s1 sw"/><text x="347.5" y="123" class="tx" text-anchor="middle">💻</text><text x="347.5" y="147" class="tx-s" text-anchor="middle">cyberobrona</text>
    </svg>`,
    text: `<p>Ustawa o obronie Ojczyzny mówi: <b>Siły Zbrojne stoją na straży suwerenności i niepodległości państwa oraz jego bezpieczeństwa i pokoju</b>.</p>
      <p>W czasie pokoju wojsko też pracuje: pomaga przy <b>powodziach</b> i innych klęskach, w akcjach poszukiwawczych, przy usuwaniu niewybuchów, w działaniach antyterrorystycznych i w obronie cyberprzestrzeni.</p>`,
    hook: 'Wojsko to tarcza państwa – nosi się ją zawsze, nie tylko w czasie bitwy.',
  },
  {
    title: 'Kto dowodzi?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Prezydent RP; w czasie pokoju zwierzchnictwo przez Ministra Obrony Narodowej, w czasie wojny przez Naczelnego Dowódcę Sił Zbrojnych; obaj nad Siłami Zbrojnymi">
      <defs><marker id="a-edb-wo-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="120" y="8" width="160" height="42" rx="8" class="f5 s5 sw"/><text x="200" y="34" class="tx-b" text-anchor="middle">Prezydent RP</text>
      <line x1="175" y1="50" x2="115" y2="93" class="ln" marker-end="url(#a-edb-wo-2)"/>
      <line x1="225" y1="50" x2="285" y2="93" class="ln" marker-end="url(#a-edb-wo-2)"/>
      <text x="85" y="68" class="tx-s" text-anchor="middle">pokój</text>
      <text x="315" y="68" class="tx-s" text-anchor="middle">wojna</text>
      <rect x="20" y="95" width="165" height="46" rx="8" class="f1 s1 sw"/><text x="102.5" y="114" class="tx" text-anchor="middle">Minister Obrony</text><text x="102.5" y="133" class="tx" text-anchor="middle">Narodowej</text>
      <rect x="215" y="95" width="165" height="46" rx="8" class="f2 s2 sw"/><text x="297.5" y="114" class="tx" text-anchor="middle">Naczelny Dowódca</text><text x="297.5" y="133" class="tx" text-anchor="middle">Sił Zbrojnych</text>
      <line x1="105" y1="141" x2="165" y2="168" class="ln" marker-end="url(#a-edb-wo-2)"/>
      <line x1="295" y1="141" x2="235" y2="168" class="ln" marker-end="url(#a-edb-wo-2)"/>
      <rect x="100" y="170" width="200" height="40" rx="8" class="f3 s3 sw"/><text x="200" y="195" class="tx-b" text-anchor="middle">Siły Zbrojne</text>
    </svg>`,
    text: `<p><b>Prezydent RP</b> jest <b>najwyższym zwierzchnikiem</b> Sił Zbrojnych. W czasie pokoju sprawuje zwierzchnictwo <b>za pośrednictwem Ministra Obrony Narodowej</b>, który kieruje obronnością kraju.</p>
      <p>Na czas wojny Prezydent mianuje <b>Naczelnego Dowódcę Sił Zbrojnych</b> (kandydata wskazuje na wniosek premiera). Prezydentowi pomaga <b>Szef Sztabu Generalnego</b> Wojska Polskiego.</p>`,
    remember: 'Zwierzchnik wojska: <b>Prezydent RP</b>; w pokoju – przez <b>Ministra Obrony Narodowej</b>.',
    check: { q: 'Kto jest najwyższym zwierzchnikiem Sił Zbrojnych RP?', options: ['Prezydent RP', 'premier', 'Marszałek Sejmu'], answer: 0, explain: 'Prezydent RP; w czasie pokoju przez Ministra Obrony Narodowej.' },
  },
  {
    title: 'Pięć rodzajów Sił Zbrojnych',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Pięć kafelków: Wojska Lądowe, Siły Powietrzne, Marynarka Wojenna, Wojska Specjalne, Wojska Obrony Terytorialnej; dodatkowo Żandarmeria Wojskowa i Wojska Obrony Cyberprzestrzeni">
      <rect x="6" y="8" width="125" height="56" rx="8" class="f3 s3 sw"/><text x="68.5" y="31" class="tx" text-anchor="middle">🪖 Wojska</text><text x="68.5" y="51" class="tx" text-anchor="middle">Lądowe</text>
      <rect x="137" y="8" width="125" height="56" rx="8" class="f1 s1 sw"/><text x="199.5" y="31" class="tx" text-anchor="middle">✈️ Siły</text><text x="199.5" y="51" class="tx" text-anchor="middle">Powietrzne</text>
      <rect x="268" y="8" width="125" height="56" rx="8" class="f5 s5 sw"/><text x="330.5" y="31" class="tx" text-anchor="middle">⚓ Marynarka</text><text x="330.5" y="51" class="tx" text-anchor="middle">Wojenna</text>
      <rect x="20" y="74" width="170" height="56" rx="8" class="f2 s2 sw"/><text x="105" y="97" class="tx" text-anchor="middle">🎯 Wojska</text><text x="105" y="117" class="tx" text-anchor="middle">Specjalne</text>
      <rect x="210" y="74" width="170" height="56" rx="8" class="f4 s4 sw"/><text x="295" y="97" class="tx" text-anchor="middle">🏘️ Wojska Obrony</text><text x="295" y="117" class="tx" text-anchor="middle">Terytorialnej</text>
      <text x="200" y="158" class="tx-s" text-anchor="middle">+ Żandarmeria Wojskowa</text>
      <text x="200" y="178" class="tx-s" text-anchor="middle">+ Wojska Obrony Cyberprzestrzeni</text>
    </svg>`,
    text: `<p>Ustawa o obronie Ojczyzny wymienia <b>pięć rodzajów</b> Sił Zbrojnych: <b>Wojska Lądowe, Siły Powietrzne, Marynarkę Wojenną, Wojska Specjalne i Wojska Obrony Terytorialnej</b>.</p>
      <p>W skład wojska wchodzą też <b>Żandarmeria Wojskowa</b> i <b>Wojska Obrony Cyberprzestrzeni</b>. Żołnierze <b>WOT</b> działają w swoim regionie i często łączą służbę z pracą lub nauką.</p>`,
    remember: 'WL, SP, MW, WS, WOT – pięć rodzajów Sił Zbrojnych.',
    hook: 'Ląd – powietrze – morze – specjalni – terytorialsi: od pola, przez niebo i morze, po twoją okolicę.',
    check: { q: 'Która formacja NIE jest rodzajem Sił Zbrojnych RP?', options: ['Marynarka Wojenna', 'Straż Graniczna', 'Wojska Obrony Terytorialnej'], answer: 1, explain: 'Straż Graniczna to formacja mundurowa, ale nie rodzaj Sił Zbrojnych.' },
  },
  {
    title: 'Służba: czynna i w rezerwie',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Służba wojskowa dzieli się na czynną (zasadnicza dobrowolna lub obowiązkowa, terytorialna, zawodowa) i rezerwę (aktywna, pasywna). Obowiązek służby od 18 do 60 lat">
      <defs><marker id="a-edb-wo-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="115" y="6" width="170" height="38" rx="8" class="f5 s5 sw"/><text x="200" y="30" class="tx" text-anchor="middle">służba wojskowa</text>
      <line x1="170" y1="44" x2="110" y2="78" class="ln" marker-end="url(#a-edb-wo-4)"/>
      <line x1="230" y1="44" x2="290" y2="78" class="ln" marker-end="url(#a-edb-wo-4)"/>
      <rect x="10" y="80" width="185" height="84" rx="8" class="f1 s1 sw"/><text x="102.5" y="102" class="tx-b" text-anchor="middle">czynna</text><text x="102.5" y="119" class="tx-s" text-anchor="middle">zasadnicza (dobrowolna</text><text x="102.5" y="136" class="tx-s" text-anchor="middle">lub obowiązkowa),</text><text x="102.5" y="153" class="tx-s" text-anchor="middle">terytorialna, zawodowa</text>
      <rect x="205" y="80" width="185" height="84" rx="8" class="f2 s2 sw"/><text x="297.5" y="107" class="tx-b" text-anchor="middle">rezerwa</text><text x="297.5" y="127" class="tx-s" text-anchor="middle">aktywna</text><text x="297.5" y="147" class="tx-s" text-anchor="middle">pasywna</text>
      <text x="200" y="184" class="tx-s" text-anchor="middle">obowiązek służby wojskowej</text>
      <line x1="60" y1="192" x2="340" y2="192" class="ln s3 sw"/>
      <text x="30" y="197" class="tx-b" text-anchor="middle">18</text>
      <text x="370" y="197" class="tx-b" text-anchor="middle">60</text>
    </svg>`,
    text: `<p>Obowiązek obrony Ojczyzny dotyczy obywateli polskich. Najważniejszy sposób jego spełniania to <b>służba wojskowa</b>; obejmuje on też np. świadczenia na rzecz obrony i służbę w <b>obronie cywilnej</b>.</p>
      <p>Obowiązkowi służby wojskowej podlega się <b>od 18 lat</b> do końca roku, w którym kończy się 60 lat. Służba dzieli się na <b>czynną</b> (m.in. dobrowolna zasadnicza, terytorialna, zawodowa) i <b>w rezerwie</b> (aktywnej i pasywnej).</p>`,
    remember: '<b>Czynna</b> służba albo <b>rezerwa</b>. Święto Wojska Polskiego – <b>15 sierpnia</b>.',
    check: { q: 'Od jakiego wieku obywatel podlega obowiązkowi służby wojskowej?', options: ['od 16 lat', 'od 21 lat', 'od 18 lat'], answer: 2, explain: 'Od ukończenia 18 lat do końca roku, w którym kończy się 60 lat.' },
  },
];

window.LESSONS['edb/alarmy'] = [
  {
    title: 'Skąd przychodzą zagrożenia?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dwie kolumny. Naturalne: powódź, huragan, śnieżyca, lawina, pożar od pioruna. Wywołane przez człowieka: awaria, katastrofa budowlana, wyciek chemikaliów, zamach, wojna">
      <rect x="10" y="8" width="185" height="36" rx="8" class="f3 s3 sw"/><text x="102.5" y="31" class="tx" text-anchor="middle">🌪️ naturalne</text>
      <rect x="205" y="8" width="185" height="36" rx="8" class="f2 s2 sw"/><text x="297.5" y="31" class="tx" text-anchor="middle">🏭 przez człowieka</text>
      <text x="102" y="70" class="tx" text-anchor="middle">powódź</text>
      <text x="102" y="94" class="tx" text-anchor="middle">huragan</text>
      <text x="102" y="118" class="tx" text-anchor="middle">śnieżyca</text>
      <text x="102" y="142" class="tx" text-anchor="middle">lawina</text>
      <text x="102" y="166" class="tx" text-anchor="middle">pożar od pioruna</text>
      <text x="297" y="70" class="tx" text-anchor="middle">awaria techniczna</text>
      <text x="297" y="94" class="tx" text-anchor="middle">katastrofa budowlana</text>
      <text x="297" y="118" class="tx" text-anchor="middle">wyciek chemikaliów</text>
      <text x="297" y="142" class="tx" text-anchor="middle">zamach</text>
      <text x="297" y="166" class="tx" text-anchor="middle">wojna</text>
    </svg>`,
    text: `<p><b>Nadzwyczajne zagrożenia</b> to katastrofy i wypadki, które mogą dotknąć wielu ludzi naraz.</p>
      <p>Jedne wywołuje przyroda (powodzie, huragany, śnieżyce), inne człowiek (awarie, katastrofy, wycieki substancji chemicznych, zamachy, wojna). Na wszystkie trzeba umieć szybko zareagować – a najpierw się o nich dowiedzieć.</p>`,
    hook: 'Przyroda albo człowiek – zagrożenie ma dwa źródła, a reakcja zaczyna się zawsze od sygnału.',
  },
  {
    title: 'Jak brzmi alarm?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy sygnały syren: ogłoszenie alarmu – dźwięk falujący przez 3 minuty; odwołanie – dźwięk ciągły przez 3 minuty; ćwiczenia – dźwięk ciągły przez 1 minutę">
      <rect x="8" y="24" width="112" height="40" rx="8" class="f2 s2 sw"/><text x="64" y="49" class="tx" text-anchor="middle">ogłoszenie</text>
      <path d="M130,44 q12.5,-26 25,0 t25,0 t25,0 t25,0 t25,0 t25,0 t25,0 t25,0" class="ln s2 sw"/>
      <text x="370" y="50" class="tx-b" text-anchor="middle">3 min</text>
      <rect x="8" y="88" width="112" height="40" rx="8" class="f3 s3 sw"/><text x="64" y="113" class="tx" text-anchor="middle">odwołanie</text>
      <line x1="130" y1="108" x2="330" y2="108" class="ln s3 sw"/>
      <text x="370" y="114" class="tx-b" text-anchor="middle">3 min</text>
      <rect x="8" y="152" width="112" height="40" rx="8" class="f4 s4 sw"/><text x="64" y="177" class="tx" text-anchor="middle">ćwiczenia</text>
      <line x1="130" y1="172" x2="197" y2="172" class="ln s4 sw"/>
      <text x="370" y="178" class="tx-b" text-anchor="middle">1 min</text>
    </svg>`,
    text: `<p>Według rozporządzenia z 2025 r.: <b>ogłoszenie alarmu</b> to <b>modulowany</b> (falujący) dźwięk syreny przez <b>3 minuty</b>. <b>Odwołanie</b> – dźwięk <b>ciągły</b> przez <b>3 minuty</b>.</p>
      <p>Ciągły dźwięk tylko przez <b>1 minutę</b> oznacza <b>alarm ćwiczebny</b>. Alarm może też ogłosić głos: „Uwaga! Uwaga! Uwaga! Ogłaszam alarm…” – powtórzony trzy razy.</p>`,
    remember: 'Falujący 3 min – <b>alarm</b>. Ciągły 3 min – <b>odwołanie</b>. Ciągły 1 min – <b>ćwiczenia</b>.',
    hook: 'Syrena <b>faluje</b> – coś się dzieje. Syrena <b>gra równo</b> – można odetchnąć.',
    check: { q: 'Słyszysz falujący dźwięk syreny przez 3 minuty. Co to oznacza?', options: ['ogłoszenie alarmu', 'odwołanie alarmu', 'alarm ćwiczebny'], answer: 0, explain: 'Modulowany (falujący) dźwięk przez 3 minuty to ogłoszenie alarmu.' },
  },
  {
    title: 'Ostrzeżenie zobaczysz i przeczytasz',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Żółty trójkąt – wizualny znak alarmu. Obok kanały ostrzeżeń: ALERT RCB w SMS-ie, aplikacja RSO, radio i telewizja">
      <path d="M75,25 L130,120 L20,120 Z" class="f4 s4 sw"/>
      <text x="75" y="102" class="tx-b" text-anchor="middle">!</text>
      <text x="75" y="148" class="tx" text-anchor="middle">znak alarmu</text>
      <rect x="170" y="12" width="220" height="44" rx="8" class="f1 s1 sw"/><text x="280" y="39" class="tx" text-anchor="middle">📱 ALERT RCB – SMS</text>
      <rect x="170" y="66" width="220" height="44" rx="8" class="f5 s5 sw"/><text x="280" y="93" class="tx" text-anchor="middle">📲 aplikacja RSO</text>
      <rect x="170" y="120" width="220" height="44" rx="8" class="f3 s3 sw"/><text x="280" y="147" class="tx" text-anchor="middle">📻 radio i telewizja</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">usunięcie trójkąta = odwołanie alarmu</text>
    </svg>`,
    text: `<p>Wizualny sygnał alarmu to <b>żółty trójkąt równoboczny</b> (podstawą w dół) – umieszcza się go po ogłoszeniu alarmu, a usuwa przy odwołaniu.</p>
      <p><b>Komunikaty ostrzegawcze</b> uprzedzają o zagrożeniu: <b>ALERT RCB</b> (SMS od Rządowego Centrum Bezpieczeństwa), aplikacja <b>RSO</b> (Regionalny System Ostrzegania), radio, telewizja i internet. Alarm ogłasza np. <b>wójt, burmistrz, prezydent miasta</b>, starosta lub wojewoda.</p>`,
    check: { q: 'Czym jest ALERT RCB?', options: ['nowym rodzajem syreny', 'SMS-em z ostrzeżeniem od Rządowego Centrum Bezpieczeństwa', 'numerem alarmowym policji'], answer: 1, explain: 'Operatorzy sieci komórkowych wysyłają go na zlecenie RCB do osób na zagrożonym obszarze.' },
  },
  {
    title: 'Alarm! Co robisz?',
    svg: `<svg viewBox="0 0 400 228" role="img" aria-label="Pięć kroków po ogłoszeniu alarmu: spokój i przerwanie zajęć; wyłączenie prądu i gazu; zabranie dokumentów, leków, wody, latarki i radia; zamknięcie okien i pomoc sąsiadom; schron i słuchanie komunikatów">
      <rect x="10" y="4" width="380" height="36" rx="8" class="f1 s1 sw"/><text x="200" y="27" class="tx" text-anchor="middle">1. Spokój – przerwij zajęcia</text>
      <rect x="10" y="48" width="380" height="36" rx="8" class="f4 s4 sw"/><text x="200" y="71" class="tx" text-anchor="middle">2. Wyłącz prąd i gaz</text>
      <rect x="10" y="92" width="380" height="36" rx="8" class="f1 s1 sw"/><text x="200" y="115" class="tx" text-anchor="middle">3. Dokumenty, leki, woda, latarka, radio</text>
      <rect x="10" y="136" width="380" height="36" rx="8" class="f4 s4 sw"/><text x="200" y="159" class="tx" text-anchor="middle">4. Zamknij okna, pomóż sąsiadom</text>
      <rect x="10" y="180" width="380" height="36" rx="8" class="f3 s3 sw"/><text x="200" y="203" class="tx" text-anchor="middle">5. Schron lub ukrycie, słuchaj komunikatów</text>
    </svg>`,
    text: `<p>Nie panikuj. Przerwij to, co robisz, wyłącz prąd i gaz, zgaś ogień w piecu. Zabierz dokumenty, leki, wodę i jedzenie, latarkę, radio na baterie i telefon. Zamknij okna i drzwi, sprawdź, czy sąsiedzi wiedzą o alarmie.</p>
      <p>Idź w wyznaczone miejsce i słuchaj komunikatów. Po odwołaniu alarmu wychodź ostrożnie i omijaj podejrzane przedmioty.</p>`,
    remember: 'Ustawa nakazuje: zachowuj się <b>zgodnie z komunikatem</b> władz i poleceniami służb.',
  },
  {
    title: 'Ewakuacja szkoły',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Plan piętra: trzy sale, korytarz ze strzałką do wyjścia, za wyjściem miejsce zbiórki. Zasady: trzymaj się klasy, nie wracaj">
      <defs><marker id="a-edb-al-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="20" width="90" height="66" rx="8" class="bg ln"/><text x="65" y="58" class="tx-s" text-anchor="middle">sala</text>
      <rect x="115" y="20" width="90" height="66" rx="8" class="bg ln"/><text x="160" y="58" class="tx-s" text-anchor="middle">sala</text>
      <rect x="210" y="20" width="90" height="66" rx="8" class="bg ln"/><text x="255" y="58" class="tx-s" text-anchor="middle">sala</text>
      <rect x="20" y="90" width="300" height="40" rx="4" class="bg ln"/>
      <line x1="40" y1="110" x2="312" y2="110" class="ln s3 sw" marker-end="url(#a-edb-al-5)"/>
      <rect x="322" y="90" width="66" height="40" rx="8" class="f3 s3 sw"/><text x="355" y="115" class="tx-s" text-anchor="middle">wyjście</text>
      <line x1="355" y1="132" x2="330" y2="158" class="ln" marker-end="url(#a-edb-al-5)"/>
      <rect x="240" y="160" width="150" height="40" rx="8" class="f4 s4 sw"/><text x="315" y="185" class="tx" text-anchor="middle">miejsce zbiórki</text>
      <text x="20" y="172" class="tx">trzymaj się klasy</text>
      <text x="20" y="198" class="tx-b t2">nie wracaj!</text>
    </svg>`,
    text: `<p><b>Ewakuacja</b> to zorganizowane przemieszczenie ludzi (i zwierząt, mienia) z zagrożonego miejsca w bezpieczne.</p>
      <p>W szkole: wykonuj polecenia nauczyciela, idź zgodnie ze <b>znakami ewakuacyjnymi</b>, nie odłączaj się od klasy, nie wracaj po rzeczy i nie idź pod prąd. Na <b>miejscu zbiórki</b> nauczyciel sprawdza obecność. Pierwszeństwo mają osoby, które potrzebują pomocy.</p>`,
    hook: 'Ewakuacja działa jak rzeka – płynie w jedną stronę; kto zawraca, robi korek.',
    check: { q: 'Które zachowanie podczas ewakuacji jest błędne?', options: ['iść za znakami ewakuacyjnymi', 'zgłosić się na miejscu zbiórki', 'wrócić do sali po telefon'], answer: 2, explain: 'Powrót blokuje drogę innym i naraża ciebie.' },
  },
];

window.LESSONS['edb/zagrozenia'] = [
  {
    title: 'Trójkąt spalania',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Trójkąt: boki to materiał palny, powietrze (tlen) i źródło ciepła; w środku ogień">
      <path d="M200,25 L300,185 L100,185 Z" class="f2 s2 sw"/>
      <text x="200" y="150" class="tx-b" text-anchor="middle">🔥</text>
      <text x="142" y="105" class="tx" text-anchor="end">materiał palny</text>
      <text x="262" y="98" class="tx">powietrze</text>
      <text x="262" y="118" class="tx">(tlen)</text>
      <text x="200" y="207" class="tx" text-anchor="middle">źródło ciepła</text>
    </svg>`,
    text: `<p>Ogień potrzebuje trzech rzeczy naraz: <b>materiału palnego</b>, <b>powietrza (tlenu)</b> i <b>źródła ciepła</b>. Usuń jedną – i pożar gaśnie.</p>
      <p>Dlatego zamykasz drzwi do pomieszczenia z ogniem (mniej tlenu), a płonące ubranie tłumisz kocem. Uwaga: płonącego oleju i urządzeń pod napięciem <b>nie gasi się wodą</b>.</p>`,
    remember: 'Materiał palny + tlen + ciepło = ogień. Zabierz jedno, a zgaśnie.',
    hook: 'Ogień to taboret na trzech nogach – wybij jedną, a się przewróci.',
    check: { q: 'Dlaczego warto zamknąć drzwi do pokoju, w którym się pali?', options: ['żeby ogień miał mniej tlenu', 'żeby strażacy mieli trudniej', 'żeby dym szybciej uciekł'], answer: 0, explain: 'Ograniczasz dopływ powietrza – jednego z elementów trójkąta spalania.' },
  },
  {
    title: 'Pożar: alarmuj – dzwoń – uciekaj',
    svg: `<svg viewBox="0 0 400 175" role="img" aria-label="Trzy kroki przy pożarze: zaalarmuj innych, zadzwoń 112 lub 998, ewakuuj się. Pod spodem: zamknij drzwi do ognia, nie ratuj rzeczy">
      <defs><marker id="a-edb-zg-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="30" width="110" height="74" rx="8" class="f2 s2 sw"/><text x="60" y="59" class="tx" text-anchor="middle">📢</text><text x="60" y="85" class="tx" text-anchor="middle">alarmuj</text>
      <rect x="145" y="30" width="110" height="74" rx="8" class="f1 s1 sw"/><text x="200" y="59" class="tx" text-anchor="middle">📞</text><text x="200" y="85" class="tx" text-anchor="middle">112 / 998</text>
      <rect x="285" y="30" width="110" height="74" rx="8" class="f3 s3 sw"/><text x="340" y="59" class="tx" text-anchor="middle">🚪</text><text x="340" y="85" class="tx" text-anchor="middle">ewakuuj się</text>
      <line x1="117" y1="67" x2="143" y2="67" class="ln" marker-end="url(#a-edb-zg-2)"/>
      <line x1="257" y1="67" x2="283" y2="67" class="ln" marker-end="url(#a-edb-zg-2)"/>
      <text x="200" y="134" class="tx-s" text-anchor="middle">zamknij drzwi do ognia – odetnij powietrze</text>
      <text x="200" y="162" class="tx-b t2" text-anchor="middle">nie ratuj rzeczy!</text>
    </svg>`,
    text: `<p>Zaalarmuj osoby w zagrożonym miejscu, wezwij straż: <b>112</b> lub <b>998</b>. Podaj: kim jesteś, adres, co i gdzie się pali, czy są zagrożeni ludzie.</p>
      <p>Potem <b>opuść budynek</b> drogą ewakuacyjną. Ludzie są ważniejsi niż rzeczy. Na płonącym człowieku ogień tłumisz kocem lub ubraniem z naturalnych włókien (syntetyk się topi).</p>`,
  },
  {
    title: 'Woda i śnieg',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej: dom zalany wodą, strzałka w górę – przenieś się na wyższe piętro. Po prawej: śnieżyca – zostań w domu, ubierz się warstwowo, chroń dłonie, stopy i twarz">
      <defs><marker id="a-edb-zg-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="10" width="190" height="180" rx="10" class="bg ln"/>
      <rect x="205" y="10" width="190" height="180" rx="10" class="bg ln"/>
      <path d="M45,72 L100,30 L155,72 Z" class="ln"/>
      <rect x="55" y="72" width="90" height="78" class="ln"/>
      <rect x="7" y="120" width="186" height="34" class="f1"/>
      <line x1="100" y1="140" x2="100" y2="82" class="ln s2 sw" marker-end="url(#a-edb-zg-3)"/>
      <text x="100" y="178" class="tx-b" text-anchor="middle">🌊 powódź</text>
      <text x="300" y="42" class="tx-b" text-anchor="middle">❄️ śnieżyca</text>
      <text x="300" y="80" class="tx" text-anchor="middle">zostań w domu</text>
      <text x="300" y="108" class="tx" text-anchor="middle">ubierz się</text>
      <text x="300" y="128" class="tx" text-anchor="middle">warstwowo</text>
      <text x="300" y="158" class="tx" text-anchor="middle">chroń dłonie,</text>
      <text x="300" y="178" class="tx" text-anchor="middle">stopy i twarz</text>
    </svg>`,
    text: `<p><b>Powódź</b>: słuchaj komunikatów i poleceń służb, przenieś się na <b>wyższe piętro</b>, zabezpiecz dokumenty, wodę pitną i jedzenie, w razie potrzeby odłącz prąd i gaz. Nie wchodź do wody płynącej ulicą.</p>
      <p><b>Śnieżyca i mróz</b>: jeśli nie musisz – nie wychodź. Ubierz się na cebulkę, chroń dłonie, stopy i twarz, omijaj miejsca pod dachami z soplami.</p>`,
    hook: 'Woda idzie w górę – ty też idź w górę.',
  },
  {
    title: 'Chmura chemiczna – w bok od wiatru',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Wiatr wieje w prawo i niesie chmurę gazu. Ucieczka z wiatrem jest błędem, właściwie jest oddalać się prostopadle do kierunku wiatru">
      <defs><marker id="a-edb-zg-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="50" y="22" class="tx-b" text-anchor="middle">wiatr</text>
      <line x1="10" y1="40" x2="90" y2="40" class="ln" marker-end="url(#a-edb-zg-4)"/>
      <line x1="10" y1="60" x2="90" y2="60" class="ln" marker-end="url(#a-edb-zg-4)"/>
      <line x1="10" y1="80" x2="90" y2="80" class="ln" marker-end="url(#a-edb-zg-4)"/>
      <ellipse cx="200" cy="58" rx="70" ry="34" class="f5 s5 sw"/>
      <text x="200" y="64" class="tx-b" text-anchor="middle">gaz</text>
      <text x="200" y="132" class="tx-b" text-anchor="middle">🧍</text>
      <line x1="222" y1="126" x2="330" y2="126" class="ln s2 sw dash" marker-end="url(#a-edb-zg-4)"/>
      <text x="280" y="112" class="tx-s" text-anchor="middle">❌ z wiatrem</text>
      <line x1="200" y1="142" x2="200" y2="196" class="ln s3 sw" marker-end="url(#a-edb-zg-4)"/>
      <text x="212" y="186" class="tx">✅ w bok od wiatru</text>
    </svg>`,
    text: `<p>Przy wycieku substancji toksycznych nie zbliżaj się do miejsca zdarzenia i słuchaj komunikatów. Wiatr niesie chmurę – dlatego oddalasz się <b>prostopadle do kierunku wiatru</b>, a nie razem z nim.</p>
      <p>W budynku: <b>zamknij i uszczelnij</b> okna i drzwi, nie wychodź bez zgody służb. Osłoń usta i nos (np. tkaniną). Nie jedz i nie pij niczego, co mogło zostać skażone.</p>`,
    remember: 'Chmura chemiczna: uciekaj <b>w bok</b> od wiatru; w domu – szczelnie zamknij okna.',
    hook: 'Wiatr to taśmociąg dla chmury – zejdź z taśmy w bok, a nie biegnij po niej.',
    check: { q: 'W którą stronę oddalasz się od chmury toksycznego gazu?', options: ['zgodnie z kierunkiem wiatru', 'prostopadle do kierunku wiatru', 'w stronę miejsca wycieku'], answer: 1, explain: 'Wiatr przesuwa chmurę – schodzisz z jej drogi w bok.' },
  },
  {
    title: 'Uciekaj – schowaj się – walcz',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy stopnie w dół: 1. uciekaj, 2. schowaj się, 3. walcz – walka tylko w ostateczności">
      <defs><marker id="a-edb-zg-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="12" width="120" height="62" rx="8" class="f3 s3 sw"/><text x="65" y="36" class="tx" text-anchor="middle">🏃</text><text x="65" y="60" class="tx" text-anchor="middle">1. uciekaj</text>
      <rect x="140" y="52" width="120" height="62" rx="8" class="f4 s4 sw"/><text x="200" y="76" class="tx" text-anchor="middle">🚪</text><text x="200" y="100" class="tx" text-anchor="middle">2. schowaj się</text>
      <rect x="275" y="92" width="120" height="62" rx="8" class="f2 s2 sw"/><text x="335" y="116" class="tx" text-anchor="middle">✊</text><text x="335" y="140" class="tx" text-anchor="middle">3. walcz</text>
      <line x1="125" y1="50" x2="138" y2="72" class="ln" marker-end="url(#a-edb-zg-5)"/>
      <line x1="260" y1="90" x2="273" y2="112" class="ln" marker-end="url(#a-edb-zg-5)"/>
      <text x="200" y="180" class="tx-s" text-anchor="middle">walka – tylko w ostateczności</text>
    </svg>`,
    text: `<p>Gdy słyszysz strzały lub wybuch: <b>uciekaj</b> jak najdalej i ostrzegaj innych; gdy będziesz bezpieczny – dzwoń 112. Nie możesz uciec? <b>Schowaj się</b>: zabarykaduj drzwi, wycisz telefon, odsuń się od drzwi i okien. <b>Walcz</b> tylko w ostateczności.</p>
      <p>Podczas akcji antyterrorystów <b>połóż się</b>, ręce trzymaj na widoku z otwartymi dłońmi i wykonuj polecenia. Podejrzanego pakunku nie dotykaj – odsuń się i zgłoś.</p>`,
    remember: 'Kolejność: <b>uciekaj → schowaj się → walcz</b>.',
    hook: 'UCIEKAJ zaczyna się na „U”, jak „Uwaga, w nogi!” – to zawsze pierwszy wybór.',
    check: { q: 'Co robisz najpierw podczas ataku, jeśli możesz bezpiecznie opuścić miejsce?', options: ['nagrywasz film', 'walczysz z napastnikiem', 'uciekasz i ostrzegasz innych'], answer: 2, explain: 'Ucieczka to pierwszy krok. Walka – tylko w ostateczności.' },
  },
];

window.LESSONS['edb/swiadek'] = [
  {
    title: 'Pierwszy na miejscu jesteś ty',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Oś czasu: zdarzenie, potem ty – świadek, który wzywa pomoc i ratuje, potem karetka. Mózg bez tlenu wytrzymuje około 3–5 minut">
      <defs><marker id="a-edb-sw-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="50" y="30" class="tx-b" text-anchor="middle">⚡</text>
      <text x="200" y="30" class="tx-b" text-anchor="middle">🧑</text>
      <text x="345" y="30" class="tx-b" text-anchor="middle">🚑</text>
      <text x="50" y="58" class="tx" text-anchor="middle">zdarzenie</text>
      <text x="200" y="58" class="tx" text-anchor="middle">ty – świadek</text>
      <text x="345" y="58" class="tx" text-anchor="middle">karetka</text>
      <line x1="20" y1="78" x2="385" y2="78" class="ln" marker-end="url(#a-edb-sw-1)"/>
      <g class="f2 s2 sw"><circle cx="50" cy="78" r="6"/><circle cx="200" cy="78" r="6"/><circle cx="345" cy="78" r="6"/></g>
      <text x="200" y="108" class="tx-s" text-anchor="middle">wzywasz pomoc, ratujesz</text>
      <path d="M50,126 L50,134 L200,134 L200,126" class="ln s2"/>
      <text x="125" y="156" class="tx-s t2" text-anchor="middle">mózg bez tlenu: 3–5 minut</text>
    </svg>`,
    text: `<p>Zanim przyjedzie karetka, mijają minuty. A mózg bez tlenu zaczyna się nieodwracalnie uszkadzać już po <b>3–5 minutach</b>. To <b>świadek</b> wzywa pomoc i udziela <b>pierwszej pomocy</b> – i często decyduje o życiu.</p>
      <p>Prawo stoi po stronie ratującego: masz obowiązek powiadomić służby, a za nieudzielenie pomocy, gdy można było to zrobić bez narażania siebie, grozi do 3 lat więzienia. Ratujący jest chroniony jak funkcjonariusz publiczny.</p>`,
    hook: 'Karetka to kawaleria – ale zanim przyjedzie, ty trzymasz linię.',
  },
  {
    title: 'Bezpieczeństwo: 1 – 2 – 3',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Podium: pierwsze miejsce ty (ratownik), drugie otoczenie, trzecie poszkodowany">
      <rect x="150" y="40" width="100" height="120" rx="6" class="f3 s3 sw"/><text x="200" y="95" class="tx-b" text-anchor="middle">1</text><text x="200" y="115" class="tx-b" text-anchor="middle">ty</text>
      <rect x="40" y="80" width="100" height="80" rx="6" class="f1 s1 sw"/><text x="90" y="115" class="tx-b" text-anchor="middle">2</text><text x="90" y="135" class="tx" text-anchor="middle">otoczenie</text>
      <rect x="260" y="100" width="110" height="60" rx="6" class="f4 s4 sw"/><text x="315" y="125" class="tx-b" text-anchor="middle">3</text><text x="315" y="145" class="tx-s" text-anchor="middle">poszkodowany</text>
      <text x="200" y="28" class="tx-b" text-anchor="middle">🦺</text>
      <text x="200" y="182" class="tx-s" text-anchor="middle">najpierw twoje bezpieczeństwo</text>
    </svg>`,
    text: `<p>Zanim podejdziesz, rozejrzyj się: ruch uliczny, ogień, dym, prąd, gaz, woda, agresywny człowiek lub pies? Kolejność jest stała: <b>1. ty, 2. otoczenie, 3. poszkodowany</b>.</p>
      <p><b>Oceń swoje możliwości</b> – rób to, co potrafisz i co jest bezpieczne. Ranny ratownik nikomu nie pomoże, a tylko zwiększy liczbę poszkodowanych.</p>`,
    remember: 'Bezpieczeństwo: <b>ratownik → otoczenie → poszkodowany</b>.',
    hook: 'Jak w samolocie: najpierw maska tlenowa sobie, potem innym.',
    check: { q: 'Kto jest na pierwszym miejscu, jeśli chodzi o bezpieczeństwo na miejscu zdarzenia?', options: ['ratownik (ty)', 'poszkodowany', 'gapie'], answer: 0, explain: 'Najpierw twoje bezpieczeństwo, potem otoczenia, potem poszkodowanego.' },
  },
  {
    title: 'Rękawiczki – na lewą stronę',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Trzy kroki zdejmowania rękawiczek: chwyć od zewnątrz przy nadgarstku, ściągnij wywijając na lewą stronę, drugą zdejmij palcami od środka; potem umyj ręce">
      <defs><marker id="a-edb-sw-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="15" width="130" height="112" rx="8" class="f1 s1 sw"/><text x="70" y="54" class="tx-b" text-anchor="middle">🧤 1</text><text x="70" y="76" class="tx-s" text-anchor="middle">chwyć od zewnątrz</text><text x="70" y="98" class="tx-s" text-anchor="middle">przy nadgarstku</text>
      <rect x="145" y="15" width="130" height="112" rx="8" class="f1 s1 sw"/><text x="210" y="54" class="tx-b" text-anchor="middle">🧤 2</text><text x="210" y="76" class="tx-s" text-anchor="middle">ściągnij, wywiń</text><text x="210" y="98" class="tx-s" text-anchor="middle">na lewą stronę</text>
      <rect x="285" y="15" width="130" height="112" rx="8" class="f1 s1 sw"/><text x="350" y="54" class="tx-b" text-anchor="middle">🧤 3</text><text x="350" y="76" class="tx-s" text-anchor="middle">drugą – palcami</text><text x="350" y="98" class="tx-s" text-anchor="middle">od środka</text>
      <line x1="135" y1="71" x2="143" y2="71" class="ln" marker-end="url(#a-edb-sw-3)"/>
      <line x1="275" y1="71" x2="283" y2="71" class="ln" marker-end="url(#a-edb-sw-3)"/>
      <text x="210" y="158" class="tx" text-anchor="middle">potem umyj ręce 🧼</text>
    </svg>`,
    text: `<p>Krew i płyny ustrojowe mogą przenosić wirusy (np. HBV, HCV, HIV). Dlatego używasz <b>rękawiczek jednorazowych</b>, a do oddechów ratowniczych – <b>maseczki lub ustnika</b>.</p>
      <p>Rękawiczki zdejmujesz tak, by gołą skórą nie dotknąć ich brudnej, zewnętrznej strony: pierwszą ściągasz na lewą stronę, drugą – palcami od środka, też na lewą stronę. Pierwsza ląduje w drugiej. Potem myjesz ręce.</p>`,
    remember: 'Brudne do brudnego, czyste do czystego – obie rękawiczki <b>na lewą stronę</b>.',
  },
  {
    title: '112 – co powiedzieć',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Telefon z numerem 112 i lista: kim jesteś, co się stało, gdzie, ilu poszkodowanych, czy reagują i oddychają. Nie rozłączaj się pierwszy">
      <rect x="20" y="15" width="110" height="190" rx="16" class="f1 s1 sw"/>
      <text x="75" y="70" class="tx-b" text-anchor="middle">📞</text>
      <text x="75" y="110" class="tx-b" text-anchor="middle">112</text>
      <text x="150" y="40" class="tx">👤 kim jesteś</text>
      <text x="150" y="70" class="tx">❓ co się stało</text>
      <text x="150" y="100" class="tx">📍 gdzie</text>
      <text x="150" y="130" class="tx">👥 ilu poszkodowanych</text>
      <text x="150" y="160" class="tx">💓 reagują? oddychają?</text>
      <text x="150" y="198" class="tx-b t2">nie rozłączaj się pierwszy</text>
    </svg>`,
    text: `<p>Numer <b>112</b> działa w całej UE; możesz też dzwonić pod <b>999</b> (pogotowie), <b>998</b> (straż pożarna), <b>997</b> (policja). Mów spokojnie: kim jesteś, co się stało, gdzie (adres, punkty orientacyjne), ilu jest poszkodowanych i w jakim są stanie.</p>
      <p>Odpowiadaj na pytania dyspozytora i <b>nie rozłączaj się</b>, dopóki on nie zakończy. Włącz głośnik – będziesz mieć wolne ręce. Osoby głuche mogą wezwać pomoc aplikacją <b>Alarm112</b>.</p>`,
    hook: '„Kto? Co? Gdzie? Ilu? Jak?” – pięć pytań dziennikarza to też pięć odpowiedzi dla dyspozytora.',
    check: { q: 'Pod jakim numerem wezwiesz pogotowie ratunkowe (poza 112)?', options: ['997', '999', '998'], answer: 1, explain: '999 – pogotowie, 998 – straż pożarna, 997 – policja.' },
  },
  {
    title: 'Trzy układy, jedno życie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy połączone koła: układ nerwowy (mózg), oddechowy (płuca) i krążenia (serce) – razem podtrzymują życie, w środku tlen">
      <g class="ln"><line x1="200" y1="52" x2="92" y2="148"/><line x1="200" y1="52" x2="308" y2="148"/><line x1="92" y1="148" x2="308" y2="148"/></g>
      <rect x="150" y="2" width="100" height="100" rx="50" class="f5 s5 sw"/><text x="200" y="45" class="tx" text-anchor="middle">🧠</text><text x="200" y="69" class="tx" text-anchor="middle">nerwowy</text>
      <rect x="42" y="98" width="100" height="100" rx="50" class="f1 s1 sw"/><text x="92" y="141" class="tx" text-anchor="middle">💨</text><text x="92" y="165" class="tx" text-anchor="middle">oddechowy</text>
      <rect x="258" y="98" width="100" height="100" rx="50" class="f2 s2 sw"/><text x="308" y="141" class="tx" text-anchor="middle">❤️</text><text x="308" y="165" class="tx" text-anchor="middle">krążenia</text>
      <text x="200" y="130" class="tx-b t1" text-anchor="middle">tlen</text>
    </svg>`,
    text: `<p>Życie podtrzymują trzy układy: <b>nerwowy</b> (mózg – świadomość i sterowanie oddychaniem), <b>oddechowy</b> (dostarcza tlen) i <b>krążenia</b> (serce rozprowadza krew z tlenem).</p>
      <p>Gdy jeden zawiedzie, pozostałe szybko przestają działać. <b>Stan nagłego zagrożenia zdrowotnego</b> wywołują m.in. urazy, zawał serca, zadławienie, utonięcie, porażenie prądem, zatrucia i duże krwotoki.</p>`,
    remember: 'Przytomność – oddech – krążenie: to sprawdzasz u każdego poszkodowanego.',
    check: { q: 'Który układ rozprowadza tlen po całym ciele?', options: ['kostny', 'pokarmowy', 'krążenia'], answer: 2, explain: 'Serce pompuje krew z tlenem do wszystkich narządów, także do mózgu.' },
  },
];

window.LESSONS['edb/nieprzytomny'] = [
  {
    title: 'Czy mnie słyszysz?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Leżąca osoba i ratownik pytający „Słyszysz mnie?”. Dobrze: głos i dotyk. Źle: klepanie, polewanie wodą, zadawanie bólu">
      <rect x="15" y="15" width="175" height="46" rx="8" class="bg ln"/><text x="102.5" y="43" class="tx" text-anchor="middle">„Słyszysz mnie?”</text>
      <circle cx="40" cy="120" r="14" class="f4 s4 sw"/>
      <line x1="54" y1="120" x2="150" y2="120" class="ln sw"/>
      <g class="ln sw"><line x1="150" y1="120" x2="185" y2="110"/><line x1="150" y1="120" x2="185" y2="132"/></g>
      <text x="15" y="172" class="tx-s">👐 potrząśnij za ramiona</text>
      <rect x="215" y="15" width="175" height="70" rx="8" class="f3 s3 sw"/><text x="302.5" y="55" class="tx" text-anchor="middle">✅ głos + dotyk</text>
      <rect x="215" y="100" width="175" height="76" rx="8" class="f2 s2 sw"/><text x="302.5" y="132" class="tx" text-anchor="middle">❌ klepanie,</text><text x="302.5" y="154" class="tx" text-anchor="middle">woda, ból</text>
    </svg>`,
    text: `<p>Klęknij przy poszkodowanym, delikatnie <b>potrząśnij go za ramiona</b> i zapytaj głośno: „Czy mnie słyszysz?”. Każda reakcja (ruch, grymas, otwarcie oczu) znaczy, że reaguje.</p>
      <p>Brak reakcji = <b>nieprzytomny</b>. Zawołaj o pomoc i <b>dzwoń 112</b> – wytyczne ERC 2025 zalecają wezwać pomoc od razu, gdy ktoś nie reaguje (włącz głośnik).</p>`,
    hook: 'Do nieprzytomnego jak do śpiącego kolegi przed lekcją: głos i ramię, nie woda w twarz.',
  },
  {
    title: 'Język zamyka gardło',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej: głowa opadła, język zamyka drogi oddechowe. Po prawej: głowa odgięta rękoczynem czoło–żuchwa, język odsunięty, powietrze przepływa">
      <defs><marker id="a-edb-np-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="10" width="190" height="150" rx="10" class="bg ln"/>
      <rect x="205" y="10" width="190" height="150" rx="10" class="bg ln"/>
      <text x="100" y="32" class="tx-s" text-anchor="middle">głowa opadła</text>
      <text x="300" y="32" class="tx-s" text-anchor="middle">głowa odgięta</text>
      <g class="ln sw"><line x1="85" y1="45" x2="85" y2="145"/><line x1="115" y1="45" x2="115" y2="145"/><line x1="285" y1="45" x2="285" y2="145"/><line x1="315" y1="45" x2="315" y2="145"/></g>
      <ellipse cx="100" cy="78" rx="24" ry="14" class="f2 s2 sw"/>
      <text x="46" y="83" class="tx-s" text-anchor="middle">język</text>
      <ellipse cx="248" cy="78" rx="24" ry="14" class="f2 s2 sw"/>
      <line x1="300" y1="50" x2="300" y2="135" class="ln s3 sw" marker-end="url(#a-edb-np-2)"/>
      <text x="100" y="186" class="tx" text-anchor="middle">❌ zamknięte</text>
      <text x="300" y="186" class="tx" text-anchor="middle">✅ czoło–żuchwa</text>
    </svg>`,
    text: `<p>U nieprzytomnego wszystkie mięśnie wiotczeją – także język. Gdy leży na plecach, <b>język opada na tylną ścianę gardła</b> i zamyka drogi oddechowe. Grozi też zachłyśnięcie śliną lub wymiocinami.</p>
      <p><b>Rękoczyn czoło–żuchwa</b>: dłoń na czole, palce drugiej ręki pod brodą (na kości). Odegnij głowę do tyłu i unieś żuchwę – język odsunie się od gardła.</p>`,
    remember: 'Nieprzytomny na plecach = ryzyko uduszenia językiem. Odegnij głowę: <b>czoło–żuchwa</b>.',
    hook: 'Odgięta głowa to jak wyprostowany wąż ogrodowy – woda (powietrze) płynie, gdy nic nie jest zagięte.',
    check: { q: 'Co najczęściej zatyka drogi oddechowe nieprzytomnego leżącego na plecach?', options: ['opadający język', 'zbyt szybki oddech', 'za duże płuca'], answer: 0, explain: 'Wiotki język opada na tylną ścianę gardła.' },
  },
  {
    title: 'Widzę – słyszę – czuję',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Trzy zmysły do oceny oddechu: widzę ruch klatki, słyszę oddech, czuję go na policzku – nie dłużej niż 10 sekund">
      <rect x="5" y="15" width="124" height="92" rx="8" class="f1 s1 sw"/><text x="67" y="51" class="tx" text-anchor="middle">👁️</text><text x="67" y="81" class="tx" text-anchor="middle">widzę</text>
      <rect x="138" y="15" width="124" height="92" rx="8" class="f3 s3 sw"/><text x="200" y="51" class="tx" text-anchor="middle">👂</text><text x="200" y="81" class="tx" text-anchor="middle">słyszę</text>
      <rect x="271" y="15" width="124" height="92" rx="8" class="f5 s5 sw"/><text x="333" y="51" class="tx" text-anchor="middle">🖐️</text><text x="333" y="81" class="tx" text-anchor="middle">czuję</text>
      <text x="200" y="145" class="tx-b" text-anchor="middle">⏱️ do 10 sekund</text>
    </svg>`,
    text: `<p>Utrzymując odgiętą głowę, pochyl się nad twarzą poszkodowanego. <b>Widzisz</b> ruchy klatki piersiowej, <b>słyszysz</b> oddech, <b>czujesz</b> go na policzku. Sprawdzasz <b>nie dłużej niż 10 sekund</b>.</p>
      <p>Prawidłowy oddech jest regularny i spokojny. <b>Rzadkie westchnięcia</b> (tzw. oddech agonalny) to <b>nie</b> jest prawidłowy oddech!</p>`,
    hook: 'Licz „sto dwadzieścia jeden, sto dwadzieścia dwa…” – każda liczba to mniej więcej sekunda.',
    check: { q: 'Jak długo oceniasz oddech?', options: ['pełną minutę', 'do 10 sekund', '2 sekundy'], answer: 1, explain: 'Do 10 sekund – dłużej opóźniałoby resuscytację.' },
  },
  {
    title: 'Oddycha? Na bok. Nie oddycha? Uciskaj.',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Pytanie: oddycha prawidłowo? Tak – pozycja boczna bezpieczna. Nie – resuscytacja i AED. Do tego telefon 112">
      <defs><marker id="a-edb-np-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="105" y="8" width="190" height="40" rx="8" class="f5 s5 sw"/><text x="200" y="33" class="tx" text-anchor="middle">oddycha prawidłowo?</text>
      <line x1="150" y1="48" x2="100" y2="98" class="ln" marker-end="url(#a-edb-np-4)"/>
      <line x1="250" y1="48" x2="300" y2="98" class="ln" marker-end="url(#a-edb-np-4)"/>
      <text x="100" y="74" class="tx-b t3" text-anchor="middle">TAK</text>
      <text x="300" y="74" class="tx-b t2" text-anchor="middle">NIE</text>
      <rect x="10" y="100" width="180" height="60" rx="8" class="f3 s3 sw"/><text x="100" y="124" class="tx" text-anchor="middle">pozycja</text><text x="100" y="146" class="tx" text-anchor="middle">boczna</text>
      <rect x="210" y="100" width="180" height="60" rx="8" class="f2 s2 sw"/><text x="300" y="124" class="tx" text-anchor="middle">RKO</text><text x="300" y="146" class="tx" text-anchor="middle">+ AED</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">i dzwoń 112, jeśli nikt jeszcze nie zadzwonił</text>
    </svg>`,
    text: `<p>Ocena oddechu decyduje o dalszych krokach. <b>Oddycha prawidłowo</b> → <b>pozycja boczna bezpieczna</b>, okrycie, regularna kontrola. <b>Nie oddycha</b> albo oddycha nieprawidłowo → <b>resuscytacja</b> (RKO) i defibrylator AED.</p>
      <p>Nieprzytomnemu nie podajesz nic do picia i nie zostawiasz go samego.</p>`,
    remember: 'Oddycha → <b>na bok</b>. Nie oddycha → <b>RKO</b>.',
  },
  {
    title: 'Pozycja boczna krok po kroku',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Pięć kroków pozycji bocznej: bliższa ręka pod kątem prostym, dalsza dłoń pod policzek, dalsza noga zgięta, przetoczenie na bok do siebie, odgięcie głowy i okrycie">
      <rect x="10" y="4" width="380" height="38" rx="8" class="f1 s1 sw"/><text x="200" y="28" class="tx" text-anchor="middle">1. Bliższa ręka – kąt prosty</text>
      <rect x="10" y="49" width="380" height="38" rx="8" class="f3 s3 sw"/><text x="200" y="73" class="tx" text-anchor="middle">2. Dalsza dłoń pod policzek</text>
      <rect x="10" y="94" width="380" height="38" rx="8" class="f1 s1 sw"/><text x="200" y="118" class="tx" text-anchor="middle">3. Dalsza noga zgięta w kolanie</text>
      <rect x="10" y="139" width="380" height="38" rx="8" class="f3 s3 sw"/><text x="200" y="163" class="tx" text-anchor="middle">4. Przetocz na bok – do siebie</text>
      <rect x="10" y="184" width="380" height="38" rx="8" class="f1 s1 sw"/><text x="200" y="208" class="tx" text-anchor="middle">5. Odegnij głowę, okryj, kontroluj</text>
    </svg>`,
    text: `<p>Zdejmij okulary. Bliższą rękę ułóż pod kątem prostym, dalszą przełóż przez klatkę i przyłóż grzbietem dłoni do policzka. Dalszą nogę zegnij w kolanie, pociągnij za kolano i ramię – poszkodowany przetoczy się na bok, do ciebie. Odegnij lekko głowę.</p>
      <p>Pozycja jest <b>stabilna</b>, utrzymuje <b>drożne drogi oddechowe</b> i chroni przed <b>zachłyśnięciem</b>. Kobietę w widocznej ciąży kładziemy na <b>lewym</b> boku. Okryj poszkodowanego (koc, folia NRC) i <b>regularnie sprawdzaj oddech</b>.</p>`,
    hook: 'Pozycja boczna to „kąty proste” – ręka, kolano, biodro – jak litery wycięte z ekierki.',
    check: { q: 'Co robisz z poszkodowanym w pozycji bocznej do przyjazdu pomocy?', options: ['daję mu wodę do picia', 'odchodzę, bo jest bezpieczny', 'regularnie sprawdzam oddech i okrywam go'], answer: 2, explain: 'Stan może się pogorszyć; gdy przestanie prawidłowo oddychać – plecy i RKO.' },
  },
];

window.LESSONS['edb/rko'] = [
  {
    title: 'Serce stanęło – liczą się minuty',
    svg: `<svg viewBox="0 0 400 175" role="img" aria-label="Oś czasu od 0 do 10 minut po zatrzymaniu krążenia; zaznaczony przedział 3–5 minut – uszkodzenie mózgu">
      <defs><marker id="a-edb-rk-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="132" y="68" width="68" height="44" class="f2"/>
      <line x1="30" y1="90" x2="385" y2="90" class="ln" marker-end="url(#a-edb-rk-1)"/>
      <g class="ln"><line x1="30" y1="82" x2="30" y2="98"/><line x1="132" y1="82" x2="132" y2="98"/><line x1="200" y1="82" x2="200" y2="98"/><line x1="370" y1="82" x2="370" y2="98"/></g>
      <text x="30" y="55" class="tx">❤️ stop</text>
      <text x="200" y="55" class="tx t2" text-anchor="middle">uszkodzenie mózgu</text>
      <text x="30" y="125" class="tx-s" text-anchor="middle">0</text>
      <text x="132" y="125" class="tx-s" text-anchor="middle">3</text>
      <text x="200" y="125" class="tx-s" text-anchor="middle">5</text>
      <text x="370" y="125" class="tx-s" text-anchor="middle">10 min</text>
      <text x="200" y="160" class="tx-s" text-anchor="middle">świadek z RKO „kupuje czas” do przyjazdu karetki</text>
    </svg>`,
    text: `<p><b>Nagłe zatrzymanie krążenia</b> (NZK) – serce przestaje skutecznie pompować krew, więc tlen nie dociera do mózgu. Przyczyną bywa m.in. zawał serca lub zaburzenia rytmu serca.</p>
      <p><b>Oznaki</b>: poszkodowany <b>nie reaguje</b> i <b>nie oddycha prawidłowo</b>. Szybka resuscytacja przez świadków może dwu-, a nawet trzykrotnie zwiększyć szanse przeżycia.</p>`,
    hook: 'Twoje dłonie zastępują serce – pompujesz krew za nie, dopóki nie przyjedzie pomoc.',
  },
  {
    title: 'Algorytm w pięciu krokach',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Kroki: 1. bezpiecznie? 2. nie reaguje – dzwoń 112 i przynieś AED. 3. drogi oddechowe i oddech do 10 s. 4. 30 uciśnięć. 5. 2 oddechy i powtarzaj 30:2">
      <defs><marker id="a-edb-rk-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="40" y="4" width="320" height="36" rx="8" class="f3 s3 sw"/><text x="200" y="27" class="tx" text-anchor="middle">1. Bezpiecznie?</text>
      <rect x="40" y="52" width="320" height="36" rx="8" class="f5 s5 sw"/><text x="200" y="75" class="tx" text-anchor="middle">2. Nie reaguje → 112 + AED</text>
      <rect x="40" y="100" width="320" height="36" rx="8" class="f1 s1 sw"/><text x="200" y="123" class="tx" text-anchor="middle">3. Drogi oddechowe, oddech do 10 s</text>
      <rect x="40" y="148" width="320" height="36" rx="8" class="f2 s2 sw"/><text x="200" y="171" class="tx" text-anchor="middle">4. 30 uciśnięć</text>
      <rect x="40" y="196" width="320" height="36" rx="8" class="f2 s2 sw"/><text x="200" y="219" class="tx" text-anchor="middle">5. 2 oddechy → powtarzaj 30 : 2</text>
      <line x1="200" y1="40" x2="200" y2="50" class="ln" marker-end="url(#a-edb-rk-2)"/>
      <line x1="200" y1="88" x2="200" y2="98" class="ln" marker-end="url(#a-edb-rk-2)"/>
      <line x1="200" y1="136" x2="200" y2="146" class="ln" marker-end="url(#a-edb-rk-2)"/>
      <line x1="200" y1="184" x2="200" y2="194" class="ln" marker-end="url(#a-edb-rk-2)"/>
    </svg>`,
    text: `<p>Upewnij się, że jest bezpiecznie. Poszkodowany nie reaguje → <b>dzwoń 112</b> (głośnik!) i poproś kogoś o <b>AED</b>. Udrożnij drogi oddechowe i oceń oddech (do 10 s).</p>
      <p>Brak prawidłowego oddechu → <b>30 uciśnięć</b> klatki piersiowej, <b>2 oddechy ratownicze</b> i tak dalej <b>30 : 2</b>. Gdy przyniosą AED – włącz go i wykonuj polecenia.</p>`,
    remember: 'Nie reaguje + nie oddycha prawidłowo → <b>112, AED, 30 : 2</b>.',
    check: { q: 'Co robisz, gdy poszkodowany nie reaguje i nie oddycha prawidłowo?', options: ['zaczynam RKO 30 : 2', 'układam go na boku', 'podaję mu wodę'], answer: 0, explain: 'To oznaki nagłego zatrzymania krążenia – zaczynasz resuscytację.' },
  },
  {
    title: 'Mocno i szybko',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Przekrój klatki piersiowej z dłońmi na środku. Głębokość uciśnięć 5–6 cm, tempo 100–120 na minutę, ramiona proste">
      <defs><marker id="a-edb-rk-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="120" y="26" width="80" height="34" rx="8" class="f4 s4 sw"/><text x="160" y="48" class="tx" text-anchor="middle">🙌</text>
      <rect x="60" y="70" width="200" height="70" rx="30" class="f1 s1 sw"/>
      <text x="160" y="110" class="tx-s" text-anchor="middle">klatka piersiowa</text>
      <g class="ln-thin"><line x1="268" y1="70" x2="300" y2="70"/><line x1="268" y1="110" x2="300" y2="110"/></g>
      <line x1="285" y1="72" x2="285" y2="108" class="ln s2 sw" marker-end="url(#a-edb-rk-3)"/>
      <text x="305" y="96" class="tx-b">5–6 cm</text>
      <text x="200" y="170" class="tx-b" text-anchor="middle">100–120 na minutę</text>
      <text x="200" y="195" class="tx-s" text-anchor="middle">ramiona proste, środek klatki</text>
    </svg>`,
    text: `<p>Ręce na <b>środku klatki piersiowej</b> (dolna połowa mostka), dłoń na dłoni, palce splecione, <b>ramiona wyprostowane</b>. Poszkodowany leży na plecach na twardym podłożu.</p>
      <p>Uciskaj na głębokość <b>5–6 cm</b> w tempie <b>100–120 na minutę</b> i po każdym uciśnięciu pozwól klatce <b>w pełni wrócić</b> – nie opieraj się na niej. Przerwy jak najkrótsze.</p>`,
    remember: '<b>5–6 cm</b>, <b>100–120/min</b>, pełne odprężenie klatki.',
    hook: '100–120 na minutę to prawie dwa uciśnięcia na sekundę – licz głośno, żeby trzymać rytm.',
    check: { q: 'Na jaką głębokość uciskasz klatkę piersiową dorosłego?', options: ['1–2 cm', '5–6 cm', '10 cm'], answer: 1, explain: 'Co najmniej 5 cm, ale nie więcej niż 6 cm.' },
  },
  {
    title: '30 : 2 (albo same uciśnięcia)',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Cykl: 30 uciśnięć, potem 2 oddechy, i znowu 30 uciśnięć. Gdy nie chcesz wykonywać oddechów – same uciśnięcia bez przerw">
      <defs><marker id="a-edb-rk-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="30" y="30" width="150" height="84" rx="8" class="f2 s2 sw"/><text x="105" y="64" class="tx-b" text-anchor="middle">30</text><text x="105" y="90" class="tx" text-anchor="middle">uciśnięć</text>
      <rect x="220" y="30" width="150" height="84" rx="8" class="f1 s1 sw"/><text x="295" y="64" class="tx-b" text-anchor="middle">2</text><text x="295" y="90" class="tx" text-anchor="middle">oddechy</text>
      <line x1="182" y1="55" x2="218" y2="55" class="ln" marker-end="url(#a-edb-rk-4)"/>
      <line x1="218" y1="90" x2="182" y2="90" class="ln" marker-end="url(#a-edb-rk-4)"/>
      <text x="200" y="150" class="tx-s" text-anchor="middle">bez oddechów? → same uciśnięcia bez przerw</text>
    </svg>`,
    text: `<p>Oddech ratowniczy: odegnij głowę, zaciśnij nos, obejmij usta poszkodowanego swoimi (najlepiej przez <b>maseczkę lub ustnik</b>) i wdmuchuj powietrze ok. <b>1 sekundę</b>, aż klatka zacznie się unosić.</p>
      <p>Nie umiesz lub nie chcesz robić oddechów? <b>Uciskaj bez przerw</b> – to dużo lepsze niż nic. Gdy ratujecie we dwoje, <b>zmieniajcie się co ok. 2 minuty</b>, głośno licząc uciśnięcia.</p>`,
    hook: 'Trzydzieści razy ręce, dwa razy płuca – i od nowa.',
  },
  {
    title: 'AED mówi, co robić',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Tułów poszkodowanego z dwiema elektrodami AED: pod prawym obojczykiem i pod lewą pachą. Podczas analizy i wyładowania nikt nie dotyka poszkodowanego">
      <circle cx="150" cy="22" r="16" class="ln"/>
      <path d="M100,46 Q150,36 200,46 L235,72 L235,222 L65,222 L65,72 Z" class="ln"/>
      <rect x="84" y="62" width="50" height="34" rx="6" class="f4 s4 sw"/><text x="109" y="84" class="tx-b" text-anchor="middle">1</text>
      <rect x="190" y="126" width="40" height="54" rx="6" class="f4 s4 sw"/><text x="210" y="158" class="tx-b" text-anchor="middle">2</text>
      <text x="255" y="72" class="tx">pod prawym</text>
      <text x="255" y="92" class="tx">obojczykiem</text>
      <text x="255" y="140" class="tx">pod lewą</text>
      <text x="255" y="160" class="tx">pachą</text>
      <rect x="250" y="182" width="145" height="40" rx="8" class="f2 s2 sw"/><text x="322.5" y="207" class="tx" text-anchor="middle">⚡ nie dotykaj!</text>
    </svg>`,
    text: `<p><b>AED</b> (automatyczny defibrylator zewnętrzny) sam analizuje rytm serca i – jeśli trzeba – poleca wykonać wyładowanie. Mówi głosem, co robić, więc obsłuży go każdy.</p>
      <p>Elektrody naklej na nagą klatkę: <b>pod prawym obojczykiem</b> i <b>pod lewą pachą</b> (rysunek jest na elektrodach). Podczas analizy i wyładowania <b>nikt nie dotyka</b> poszkodowanego. Po wyładowaniu <b>od razu wracasz do uciśnięć</b>.</p>`,
    remember: 'AED: włącz → elektrody → odsuń się → wyładowanie → <b>natychmiast RKO</b>.',
    check: { q: 'AED analizuje rytm serca. Co robisz?', options: ['dalej uciskam', 'odklejam elektrody', 'nikt nie dotyka poszkodowanego'], answer: 2, explain: 'Dotyk zakłóca analizę, a podczas wyładowania grozi porażeniem.' },
  },
];

window.LESSONS['edb/zadlawienie'] = [
  {
    title: 'Kaszle czy nie kaszle?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Łagodna niedrożność: mówi, kaszle, oddycha – zachęcaj do kaszlu. Ciężka: nie mówi, nie kaszle, chwyta się za szyję – rękoczyny">
      <rect x="5" y="8" width="190" height="184" rx="8" class="f3 s3 sw"/><text x="100" y="45" class="tx-b" text-anchor="middle">łagodna</text><text x="100" y="75" class="tx" text-anchor="middle">mówi, kaszle,</text><text x="100" y="105" class="tx" text-anchor="middle">oddycha</text><text x="100" y="135" class="tx-b" text-anchor="middle">→ zachęcaj</text><text x="100" y="165" class="tx" text-anchor="middle">do kaszlu</text>
      <rect x="205" y="8" width="190" height="184" rx="8" class="f2 s2 sw"/><text x="300" y="45" class="tx-b" text-anchor="middle">ciężka</text><text x="300" y="75" class="tx" text-anchor="middle">nie mówi,</text><text x="300" y="105" class="tx" text-anchor="middle">nie kaszle,</text><text x="300" y="135" class="tx" text-anchor="middle">chwyta się za szyję</text><text x="300" y="165" class="tx-b" text-anchor="middle">→ rękoczyny</text>
    </svg>`,
    text: `<p><b>Zadławienie</b> – ciało obce (najczęściej kęs jedzenia) blokuje drogi oddechowe. Sprzyja temu pośpiech, mówienie i śmiech z pełnymi ustami.</p>
      <p>Jeśli poszkodowany <b>mówi i skutecznie kaszle</b> – to łagodna niedrożność: <b>zachęcaj do kaszlu</b> i obserwuj. Kaszel to najlepsza „pompa”. Uderzenia mogłyby przesunąć ciało obce głębiej.</p>`,
    hook: 'Kto kaszle, ten walczy sam – nie przeszkadzaj mu, tylko kibicuj.',
    check: { q: 'Kolega się zakrztusił, ale głośno kaszle i mówi. Co robisz?', options: ['zachęcam do kaszlu i obserwuję', 'uderzam go w plecy', 'wykonuję rękoczyn Heimlicha'], answer: 0, explain: 'Skuteczny kaszel najlepiej usuwa ciało obce.' },
  },
  {
    title: '5 w plecy, 5 w brzuch',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przytomny, nie kaszle: 5 uderzeń w plecy między łopatki, potem 5 uciśnięć nadbrzusza (rękoczyn Heimlicha), na zmianę">
      <defs><marker id="a-edb-zd-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="28" class="tx-b" text-anchor="middle">przytomny, nie kaszle:</text>
      <rect x="20" y="50" width="160" height="96" rx="8" class="f1 s1 sw"/><text x="100" y="79" class="tx-b" text-anchor="middle">5×</text><text x="100" y="103" class="tx" text-anchor="middle">w plecy</text><text x="100" y="127" class="tx-s" text-anchor="middle">(między łopatki)</text>
      <rect x="220" y="50" width="160" height="96" rx="8" class="f5 s5 sw"/><text x="300" y="79" class="tx-b" text-anchor="middle">5×</text><text x="300" y="103" class="tx" text-anchor="middle">nadbrzusze</text><text x="300" y="127" class="tx-s" text-anchor="middle">(Heimlich)</text>
      <line x1="182" y1="78" x2="218" y2="78" class="ln" marker-end="url(#a-edb-zd-2)"/>
      <line x1="218" y1="118" x2="182" y2="118" class="ln" marker-end="url(#a-edb-zd-2)"/>
      <text x="200" y="180" class="tx-s" text-anchor="middle">powtarzaj na zmianę</text>
    </svg>`,
    text: `<p><b>Ciężka niedrożność</b>, poszkodowany przytomny: pochyl go do przodu, podtrzymaj klatkę i nasadą dłoni uderz <b>do 5 razy między łopatki</b>.</p>
      <p>Nie pomogło? <b>Rękoczyn Heimlicha</b>: stań za nim, pięść między pępkiem a końcem mostka, chwyć ją drugą dłonią i <b>pociągnij mocno do siebie i ku górze</b> – do 5 razy. Dalej <b>na zmianę 5 + 5</b>.</p>`,
    remember: 'Ciężkie zadławienie: <b>5 uderzeń w plecy ↔ 5 uciśnięć nadbrzusza</b>.',
    hook: 'Pięć i pięć – jak dwie dłonie po pięć palców.',
    check: { q: 'Od czego zaczynasz u przytomnego dorosłego, który nie może kaszleć ani mówić?', options: ['od 30 uciśnięć klatki', 'od 5 uderzeń między łopatki', 'od podania wody'], answer: 1, explain: 'Najpierw do 5 uderzeń w plecy, potem do 5 uciśnięć nadbrzusza.' },
  },
  {
    title: 'Gdy traci przytomność',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Traci przytomność, potem telefon 112, potem RKO. Po rękoczynie Heimlicha zawsze do lekarza">
      <defs><marker id="a-edb-zd-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="40" width="120" height="64" rx="8" class="f2 s2 sw"/><text x="65" y="67" class="tx" text-anchor="middle">traci</text><text x="65" y="87" class="tx" text-anchor="middle">przytomność</text>
      <rect x="140" y="40" width="120" height="64" rx="8" class="f1 s1 sw"/><text x="200" y="77" class="tx" text-anchor="middle">📞 112</text>
      <rect x="275" y="40" width="120" height="64" rx="8" class="f3 s3 sw"/><text x="335" y="77" class="tx-b" text-anchor="middle">RKO</text>
      <line x1="127" y1="72" x2="138" y2="72" class="ln" marker-end="url(#a-edb-zd-3)"/>
      <line x1="262" y1="72" x2="273" y2="72" class="ln" marker-end="url(#a-edb-zd-3)"/>
      <text x="200" y="140" class="tx-s" text-anchor="middle">po rękoczynie Heimlicha → zawsze do lekarza</text>
      <text x="200" y="165" class="tx-s t2" text-anchor="middle">nie uciskamy brzucha: ciąża, niemowlę</text>
    </svg>`,
    text: `<p>Jeśli dławiący się <b>traci przytomność</b>: ostrożnie połóż go na ziemi, <b>dzwoń 112</b> i rozpocznij <b>RKO</b>. Ciało obce widoczne w ustach usuń, ale nie szukaj go palcami na ślepo.</p>
      <p>Po uciśnięciach nadbrzusza poszkodowany zawsze idzie do <b>lekarza</b> – mogą powstać obrażenia wewnętrzne. Nadbrzusza <b>nie uciskamy</b> u kobiet w ciąży i niemowląt.</p>`,
  },
  {
    title: 'Chroń maluchy',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cztery kafelki: drobne rzeczy poza zasięgiem, krojenie jedzenia na małe kawałki, jedzenie na siedząco, zabawki według wieku">
      <rect x="10" y="8" width="185" height="88" rx="8" class="f4 s4 sw"/><text x="102.5" y="33" class="tx" text-anchor="middle">🔩</text><text x="102.5" y="57" class="tx" text-anchor="middle">drobne rzeczy</text><text x="102.5" y="81" class="tx" text-anchor="middle">poza zasięgiem</text>
      <rect x="205" y="8" width="185" height="88" rx="8" class="f3 s3 sw"/><text x="297.5" y="33" class="tx" text-anchor="middle">🍇</text><text x="297.5" y="57" class="tx" text-anchor="middle">kroj na małe</text><text x="297.5" y="81" class="tx" text-anchor="middle">kawałki</text>
      <rect x="10" y="104" width="185" height="88" rx="8" class="f1 s1 sw"/><text x="102.5" y="129" class="tx" text-anchor="middle">🍽️</text><text x="102.5" y="153" class="tx" text-anchor="middle">jedzenie</text><text x="102.5" y="177" class="tx" text-anchor="middle">na siedząco</text>
      <rect x="205" y="104" width="185" height="88" rx="8" class="f5 s5 sw"/><text x="297.5" y="129" class="tx" text-anchor="middle">🧸</text><text x="297.5" y="153" class="tx" text-anchor="middle">zabawki</text><text x="297.5" y="177" class="tx" text-anchor="middle">według wieku</text>
    </svg>`,
    text: `<p>Małe dzieci mają wąskie drogi oddechowe, wkładają wszystko do ust i słabo gryzą. Monety, guziki, baterie i klocki trzymaj <b>poza ich zasięgiem</b>.</p>
      <p>Kupuj zabawki z oznaczeniem <b>wieku</b> (np. 3+). Pokarm <b>kroj na małe kawałki</b> (np. winogrona), uważaj na orzechy, twarde cukierki i popcorn. Dziecko je <b>na siedząco i pod opieką</b> dorosłego.</p>`,
    hook: 'Spójrz na pokój oczami malucha: wszystko, co małe i błyszczy, trafi do buzi – schowaj to wyżej.',
    check: { q: 'Który sposób zapobiega zadławieniu małego dziecka?', options: ['dawanie mu całych orzechów', 'jedzenie w biegu', 'krojenie winogron na małe kawałki'], answer: 2, explain: 'Małe, rozdrobnione kawałki trudniej zablokują drogi oddechowe.' },
  },
];

window.LESSONS['edb/rany'] = [
  {
    title: 'Krwawienie czy krwotok?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie krople krwi: krwotok tętniczy – krew jasnoczerwona, pulsuje; krwotok żylny – krew ciemnoczerwona, równy strumień">
      <path d="M100,18 Q140,80 140,108 A40,40 0 1 1 60,108 Q60,80 100,18 Z" class="f2 s2 sw"/>
      <path d="M300,18 Q340,80 340,108 A40,40 0 1 1 260,108 Q260,80 300,18 Z" class="f5 s5 sw"/>
      <text x="100" y="115" class="tx-b" text-anchor="middle">jasna</text>
      <text x="300" y="115" class="tx-b" text-anchor="middle">ciemna</text>
      <text x="100" y="180" class="tx" text-anchor="middle">tętniczy: pulsuje</text>
      <text x="300" y="180" class="tx" text-anchor="middle">żylny: równy strumień</text>
    </svg>`,
    text: `<p><b>Krwawienie</b> z drobnych naczyń zwykle samo ustaje. <b>Krwotok</b> – uszkodzona <b>tętnica</b> lub <b>duża żyła</b>: krew płynie szybko i obficie, przesiąka przez ubranie, tworzy kałużę. Utrata ok. 1/3 krwi zagraża życiu.</p>
      <p>Krew <b>tętnicza</b> jest <b>jasnoczerwona</b> i tryska <b>pulsacyjnie</b>, w rytmie serca. Krew <b>żylna</b> jest <b>ciemnoczerwona</b> i płynie <b>równym strumieniem</b>.</p>`,
    remember: 'Tętnica – jasna i pulsuje. Żyła – ciemna i płynie równo.',
    hook: 'Tętnica „tętni” – pulsuje razem z sercem.',
    check: { q: 'Krew jest jasnoczerwona i tryska w rytmie serca. Jaki to krwotok?', options: ['tętniczy', 'żylny', 'to tylko otarcie'], answer: 0, explain: 'Krew tętnicza ma dużo tlenu i płynie pod wysokim ciśnieniem.' },
  },
  {
    title: 'Najpierw ucisk',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Dłoń mocno uciska ranę przez gazę. Kroki: rękawiczki, gaza na ranę, mocny ucisk. Krwotoku nie przemywamy">
      <defs><marker id="a-edb-rn-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="120" y1="18" x2="120" y2="88" class="ln sw" marker-end="url(#a-edb-rn-2)"/>
      <text x="140" y="60" class="tx-b">✋</text>
      <rect x="70" y="92" width="100" height="14" class="bg ln"/>
      <ellipse cx="120" cy="114" rx="60" ry="10" class="f2 s2 sw"/>
      <text x="230" y="50" class="tx">1. rękawiczki</text>
      <text x="230" y="80" class="tx">2. gaza na ranę</text>
      <text x="230" y="110" class="tx">3. mocny ucisk</text>
      <text x="200" y="155" class="tx-s t2" text-anchor="middle">krwotoku nie przemywamy</text>
    </svg>`,
    text: `<p>Przy krwotoku liczą się sekundy. Załóż <b>rękawiczki</b>, posadź lub połóż poszkodowanego i <b>od razu mocno uciśnij ranę dłonią</b> przez jałową gazę (w ostateczności przez czysty materiał).</p>
      <p>Krwotoku <b>nie przemywasz</b>. Małą ranę z lekkim krwawieniem przemyjesz czystą wodą i osłonisz <b>opatrunkiem osłaniającym</b> (gaza + bandaż, nie za ciasno).</p>`,
  },
  {
    title: 'Opatrunek uciskowy – warstwa po warstwie',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Warstwy opatrunku uciskowego od dołu: rana, gaza jałowa, wałek dokładnie nad raną, całość mocno owinięta bandażem">
      <defs><marker id="a-edb-rn-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="22" class="tx-b" text-anchor="middle">ucisk</text>
      <line x1="200" y1="30" x2="200" y2="92" class="ln sw" marker-end="url(#a-edb-rn-3)"/>
      <rect x="40" y="96" width="320" height="100" rx="10" class="ln dash"/>
      <text x="355" y="116" class="tx" text-anchor="end">bandaż</text>
      <rect x="150" y="104" width="100" height="28" rx="14" class="f4 s4 sw"/><text x="200" y="123" class="tx" text-anchor="middle">wałek</text>
      <rect x="60" y="136" width="280" height="24" rx="4" class="bg ln"/><text x="200" y="153" class="tx-s" text-anchor="middle">gaza jałowa</text>
      <rect x="60" y="164" width="280" height="24" rx="4" class="f2 s2 sw"/><text x="200" y="181" class="tx-s" text-anchor="middle">rana</text>
    </svg>`,
    text: `<p><b>Opatrunek uciskowy</b>: na ranę jałowa gaza, na nią – <b>dokładnie nad raną</b> – <b>wałek</b> (np. zwinięty bandaż), a całość <b>mocno zabandażuj</b>. Wałek dociska krwawiące naczynia.</p>
      <p>Wyjątek: <b>rana głowy</b> – tylko opatrunek osłaniający bez silnego ucisku (może być złamana kość czaszki). <b>Opaska uciskowa</b> to ostateczność przy krwotoku z kończyny, którego nie da się zatamować uciskiem.</p>`,
    remember: 'Krwotok: <b>ręka – gaza – wałek – bandaż</b>.',
    hook: 'Wałek działa jak kciuk przyciśnięty do dziurawego węża ogrodowego.',
    check: { q: 'Gdzie umieszczasz wałek w opatrunku uciskowym?', options: ['obok rany', 'dokładnie nad raną', 'na drugiej ręce'], answer: 1, explain: 'Wałek ma dociskać krwawiące miejsce.' },
  },
  {
    title: 'Przesiąka? Dokładaj, nie zdejmuj',
    svg: `<svg viewBox="0 0 400 175" role="img" aria-label="Po lewej: na przesiąknięty opatrunek dokładamy nową warstwę – dobrze. Po prawej: zdejmowanie opatrunku – źle">
      <defs><marker id="a-edb-rn-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="10" width="190" height="155" rx="10" class="bg ln"/>
      <rect x="205" y="10" width="190" height="155" rx="10" class="bg ln"/>
      <rect x="35" y="34" width="130" height="24" rx="4" class="f3 s3 sw"/><text x="100" y="51" class="tx-s" text-anchor="middle">+ nowa warstwa</text>
      <rect x="35" y="62" width="130" height="22" rx="4" class="bg ln"/>
      <rect x="35" y="88" width="130" height="22" rx="4" class="f2 s2 sw"/>
      <rect x="235" y="88" width="130" height="22" rx="4" class="f2 s2 sw"/>
      <line x1="300" y1="82" x2="300" y2="30" class="ln s2 sw" marker-end="url(#a-edb-rn-4)"/>
      <text x="100" y="145" class="tx" text-anchor="middle">✅ dokładaj</text>
      <text x="300" y="145" class="tx" text-anchor="middle">❌ nie zdejmuj</text>
    </svg>`,
    text: `<p>Opatrunek <b>przesiąka krwią</b>? <b>Nie zdejmuj go</b> – zerwałbyś tworzący się skrzep. <b>Dołóż kolejną warstwę</b> i uciśnij mocniej.</p>
      <p>Potem dzwoń <b>112</b>, okryj poszkodowanego i obserwuj go. Bladość, zimny pot, szybkie tętno, osłabienie i niepokój to objawy dużej utraty krwi (wstrząsu).</p>`,
    hook: 'Na plaster z dziurą nakleja się drugi plaster, a nie zdziera pierwszy.',
  },
  {
    title: 'Trzy apteczki',
    svg: `<svg viewBox="0 0 400 225" role="img" aria-label="Trzy apteczki: domowa (rękawiczki, gaza i bandaże, folia NRC, chusta), samochodowa (opatrunki, koc ratunkowy, rękawiczki, ustnik), turystyczna (plastry na odciski, folia NRC, opaska elastyczna). Bez waty i ligniny">
      <rect x="5" y="8" width="125" height="150" rx="8" class="f3 s3 sw"/><text x="67.5" y="40" class="tx" text-anchor="middle">🏠 domowa</text><text x="67.5" y="64" class="tx-s" text-anchor="middle">rękawiczki</text><text x="67.5" y="88" class="tx-s" text-anchor="middle">gaza, bandaże</text><text x="67.5" y="112" class="tx-s" text-anchor="middle">folia NRC</text><text x="67.5" y="136" class="tx-s" text-anchor="middle">chusta</text>
      <rect x="138" y="8" width="125" height="150" rx="8" class="f1 s1 sw"/><text x="200.5" y="40" class="tx" text-anchor="middle">🚗 auto</text><text x="200.5" y="64" class="tx-s" text-anchor="middle">opatrunki</text><text x="200.5" y="88" class="tx-s" text-anchor="middle">koc ratunkowy</text><text x="200.5" y="112" class="tx-s" text-anchor="middle">rękawiczki</text><text x="200.5" y="136" class="tx-s" text-anchor="middle">ustnik</text>
      <rect x="271" y="8" width="124" height="150" rx="8" class="f4 s4 sw"/><text x="333" y="40" class="tx" text-anchor="middle">🎒 wycieczka</text><text x="333" y="64" class="tx-s" text-anchor="middle">plastry</text><text x="333" y="88" class="tx-s" text-anchor="middle">na odciski</text><text x="333" y="112" class="tx-s" text-anchor="middle">folia NRC</text><text x="333" y="136" class="tx-s" text-anchor="middle">opaska elast.</text>
      <text x="200" y="186" class="tx-b t2" text-anchor="middle">❌ wata i lignina</text>
      <text x="200" y="212" class="tx-s" text-anchor="middle">znak apteczki: biały krzyż na zielonym tle</text>
    </svg>`,
    text: `<p><b>Domowa</b>: rękawiczki, maseczka do oddechów, folia NRC, chusta trójkątna, bandaże i opaski elastyczne, gaza jałowa, plastry, nożyczki z zaokrąglonymi końcami. <b>Samochodowa</b>: opatrunki i kompresy, koc ratunkowy, rękawiczki, ustnik, instrukcja z numerami alarmowymi. <b>Turystyczna</b>: plus plastry na odciski i opatrunki na skręcenia, zimą ogrzewacze.</p>
      <p>Nie wkładaj <b>waty ani ligniny</b> (zostawiają strzępki w ranie) ani ostrych agrafek.</p>`,
    remember: 'W każdej apteczce: <b>rękawiczki, maseczka, gaza, bandaże, folia NRC, chusta</b>.',
    check: { q: 'Czego NIE wkładasz do apteczki?', options: ['folii NRC', 'rękawiczek', 'waty'], answer: 2, explain: 'Wata przykleja się do rany i zostawia w niej strzępki.' },
  },
];

window.LESSONS['edb/urazy'] = [
  {
    title: 'Złamanie, zwichnięcie, skręcenie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy schematy: złamanie – kość pęknięta; zwichnięcie – kości wyskoczyły ze stawu; skręcenie – rozciągnięte więzadła, kości na miejscu">
      <text x="200" y="24" class="tx-s" text-anchor="middle">bez RTG nie odróżnisz – traktuj jak złamanie</text>
      <g class="f4 s4 sw"><rect x="16" y="80" width="48" height="18" rx="9"/><rect x="72" y="88" width="48" height="18" rx="9"/><rect x="148" y="80" width="48" height="18" rx="9"/><rect x="204" y="100" width="48" height="18" rx="9"/><rect x="280" y="88" width="48" height="18" rx="9"/><rect x="336" y="88" width="48" height="18" rx="9"/></g>
      <path d="M62,82 L68,90 L62,96 L70,104" class="ln s2 sw"/>
      <g class="ln s2 sw dash"><line x1="316" y1="84" x2="348" y2="84"/><line x1="316" y1="110" x2="348" y2="110"/></g>
      <text x="68" y="145" class="tx-b" text-anchor="middle">złamanie</text>
      <text x="200" y="145" class="tx-b" text-anchor="middle">zwichnięcie</text>
      <text x="332" y="145" class="tx-b" text-anchor="middle">skręcenie</text>
      <text x="68" y="170" class="tx-s" text-anchor="middle">kość pęknięta</text>
      <text x="200" y="170" class="tx-s" text-anchor="middle">kość wyskoczyła</text>
      <text x="332" y="170" class="tx-s" text-anchor="middle">więzadła</text>
    </svg>`,
    text: `<p><b>Złamanie</b> – przerwanie ciągłości kości (zamknięte albo otwarte – z raną). <b>Zwichnięcie</b> – powierzchnie stawowe kości przemieszczają się, uszkodzone są torebka i więzadła. <b>Skręcenie</b> – uraz więzadeł i torebki, ale kości wracają na miejsce.</p>
      <p>Objawy są podobne: ból przy ruchu, obrzęk, siniak, zniekształcenie, ograniczona ruchomość. Bez zdjęcia RTG ich nie odróżnisz – dlatego <b>każdy uraz traktujesz jak złamanie</b>.</p>`,
    check: { q: 'Przy którym urazie kości zostają przemieszczone w stawie?', options: ['przy zwichnięciu', 'przy skręceniu', 'przy otarciu'], answer: 0, explain: 'Przy zwichnięciu powierzchnie stawowe się przemieszczają; przy skręceniu kości wracają na miejsce.' },
  },
  {
    title: 'Kość + dwa stawy',
    svg: `<svg viewBox="0 0 400 175" role="img" aria-label="Ręka: ramię, łokieć, przedramię ze złamaniem, nadgarstek, dłoń. Przerywana ramka obejmuje przedramię oraz łokieć i nadgarstek – kość z dwoma sąsiednimi stawami">
      <g class="f4 s4 sw"><rect x="20" y="70" width="118" height="20" rx="10"/><rect x="162" y="70" width="136" height="20" rx="10"/><rect x="322" y="72" width="62" height="16" rx="8"/></g>
      <g class="f5 s5 sw"><circle cx="150" cy="80" r="11"/><circle cx="310" cy="80" r="11"/></g>
      <path d="M226,68 L232,76 L226,84 L234,92" class="ln s2 sw"/>
      <rect x="132" y="55" width="196" height="50" rx="12" class="ln s3 sw dash"/>
      <text x="230" y="46" class="tx t2" text-anchor="middle">złamanie</text>
      <text x="150" y="128" class="tx" text-anchor="middle">łokieć</text>
      <text x="310" y="128" class="tx" text-anchor="middle">nadgarstek</text>
      <text x="200" y="162" class="tx-s" text-anchor="middle">kość + 2 sąsiednie stawy</text>
    </svg>`,
    text: `<p>Unieruchamiasz kończynę <b>w zastanej pozycji</b>. Złamaną <b>kość</b> unieruchamiasz razem z <b>dwoma sąsiednimi stawami</b> (przedramię – z łokciem i nadgarstkiem).</p>
      <p>Uszkodzony <b>staw</b> unieruchamiasz razem z <b>dwiema sąsiednimi kośćmi</b>. Rękę podwieszasz na <b>chuście trójkątnej</b> (temblak), nogę możesz przymocować do zdrowej nogi.</p>`,
    remember: 'Kość → <b>+ 2 stawy</b>. Staw → <b>+ 2 kości</b>.',
    hook: 'Złamaną kość trzyma się jak kanapkę – za oba końce, czyli stawy.',
    check: { q: 'Co unieruchamiasz przy złamaniu kości podudzia?', options: ['tylko miejsce złamania', 'kość z dwoma sąsiednimi stawami (kolano i staw skokowy)', 'tylko stopę'], answer: 1, explain: 'Kość unieruchamiamy razem z dwoma sąsiednimi stawami.' },
  },
  {
    title: 'Unieruchom – nie prostuj',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Tak: unieruchom w zastanej pozycji, temblak lub chusta. Nie: nie prostuj, nie nastawiaj, nie ruszaj bez potrzeby">
      <rect x="10" y="15" width="185" height="150" rx="8" class="f3 s3 sw"/><text x="102.5" y="47" class="tx-b" text-anchor="middle">✅ tak</text><text x="102.5" y="71" class="tx" text-anchor="middle">unieruchom</text><text x="102.5" y="95" class="tx" text-anchor="middle">w zastanej</text><text x="102.5" y="119" class="tx" text-anchor="middle">pozycji</text><text x="102.5" y="143" class="tx" text-anchor="middle">temblak / chusta</text>
      <rect x="205" y="15" width="185" height="150" rx="8" class="f2 s2 sw"/><text x="297.5" y="47" class="tx-b" text-anchor="middle">❌ nie</text><text x="297.5" y="71" class="tx" text-anchor="middle">nie prostuj</text><text x="297.5" y="95" class="tx" text-anchor="middle">nie nastawiaj</text><text x="297.5" y="119" class="tx" text-anchor="middle">nie ruszaj</text><text x="297.5" y="143" class="tx" text-anchor="middle">bez potrzeby</text>
    </svg>`,
    text: `<p>Nie prostuj i nie nastawiaj – ostre odłamy kości mogą uszkodzić naczynia i nerwy. Przy <b>złamaniu otwartym</b> najpierw załóż <b>jałowy opatrunek</b> na ranę, potem unieruchom.</p>
      <p>Zdejmij pierścionki i bransoletki, zanim pojawi się obrzęk. Przy skręceniu pomaga zimny okład (przez materiał). Okryj poszkodowanego i wezwij pomoc lub zawieź go do lekarza.</p>`,
    hook: 'Złamanie to „pauza” – zatrzymaj kończynę tak, jak jest, i niech resztę zrobią lekarze.',
  },
  {
    title: 'Oparzenie: woda przez 20 minut',
    svg: `<svg viewBox="0 0 400 195" role="img" aria-label="Chłodzenie oparzenia chłodną bieżącą wodą przez około 20 minut. Nie stosuj lodu, masła ani oleju, nie przekłuwaj pęcherzy">
      <text x="80" y="78" class="tx-b" text-anchor="middle">🚰</text>
      <text x="80" y="118" class="tx-s" text-anchor="middle">chłodna, bieżąca</text>
      <rect x="170" y="30" width="215" height="84" rx="8" class="f1 s1 sw"/><text x="277.5" y="63" class="tx-b" text-anchor="middle">💧 woda</text><text x="277.5" y="91" class="tx-b" text-anchor="middle">ok. 20 minut</text>
      <text x="110" y="158" class="tx" text-anchor="middle">❌ lód</text>
      <text x="270" y="158" class="tx" text-anchor="middle">❌ masło, olej</text>
      <text x="200" y="186" class="tx" text-anchor="middle">❌ przekłuwanie pęcherzy</text>
    </svg>`,
    text: `<p><b>Oparzenie termiczne</b>: najpierw przerwij działanie czynnika (odsuń od ognia, zdejmij ubranie oblane wrzątkiem, jeśli nie przywarło). Potem <b>od razu chłodź chłodną bieżącą wodą przez ok. 20 minut</b>.</p>
      <p>W trakcie chłodzenia zdejmij pierścionki i zegarek. Przykryj luźno jałowym opatrunkiem. <b>Nie</b> stosuj lodu, masła, oleju ani przypadkowych maści, nie przekłuwaj pęcherzy, nie odrywaj przywartego ubrania.</p>`,
    remember: 'Oparzenie: <b>chłodna bieżąca woda, ok. 20 minut</b>.',
    hook: 'Dwadzieścia minut pod kranem – długo? Tyle trwa ratowanie skóry przed pogłębieniem oparzenia.',
    check: { q: 'Jak chłodzisz oparzenie wrzątkiem?', options: ['lodem przez 2 minuty', 'masłem', 'chłodną bieżącą wodą przez ok. 20 minut'], answer: 2, explain: 'Woda ogranicza pogłębianie się oparzenia; lód może dodatkowo uszkodzić tkanki.' },
  },
  {
    title: 'Stopnie oparzeń i ochrona maluchów',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Warstwy skóry: naskórek, skóra właściwa, tkanka podskórna. Oparzenie I stopnia sięga naskórka, II – części skóry właściwej, III – całej skóry. I – zaczerwienienie, II – pęcherze, III – brak czucia">
      <defs><marker id="a-edb-ur-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="120" y="30" width="260" height="30" rx="0" class="f4 s4"/><text x="250" y="50" class="tx-s" text-anchor="middle">naskórek</text>
      <rect x="120" y="60" width="260" height="50" rx="0" class="f2 s2"/><text x="250" y="90" class="tx-s" text-anchor="middle">skóra właściwa</text>
      <rect x="120" y="110" width="260" height="40" rx="0" class="f5 s5"/><text x="250" y="135" class="tx-s" text-anchor="middle">tkanka podskórna</text>
      <text x="30" y="20" class="tx-b" text-anchor="middle">I</text>
      <text x="60" y="20" class="tx-b" text-anchor="middle">II</text>
      <text x="92" y="20" class="tx-b" text-anchor="middle">III</text>
      <line x1="30" y1="28" x2="30" y2="58" class="ln s4 sw" marker-end="url(#a-edb-ur-5)"/>
      <line x1="60" y1="28" x2="60" y2="88" class="ln s2 sw" marker-end="url(#a-edb-ur-5)"/>
      <line x1="92" y1="28" x2="92" y2="108" class="ln s5 sw" marker-end="url(#a-edb-ur-5)"/>
      <text x="200" y="178" class="tx-s" text-anchor="middle">I – zaczerwienienie · II – pęcherze</text>
      <text x="200" y="198" class="tx-s" text-anchor="middle">III – skóra biaława lub zwęglona, brak czucia</text>
    </svg>`,
    text: `<p>Oparzenie I stopnia to zaczerwienienie i ból, II – <b>pęcherze</b>, III – skóra biaława lub zwęglona i <b>brak czucia</b>. Oparzenia II i III stopnia, chemiczne, elektryczne i rozległe – <b>do lekarza / 112</b>.</p>
      <p>Chroń małe dzieci: rączki garnków do ściany, gorące napoje poza ich zasięgiem, sprawdzaj wodę do kąpieli, chowaj zapałki, zabezpieczaj gniazdka, latem – krem z filtrem.</p>`,
    check: { q: 'Oparzona skóra jest biaława i bez czucia. Jaki to stopień?', options: ['III', 'II', 'I'], answer: 0, explain: 'W oparzeniu III stopnia zniszczona jest cała grubość skóry z zakończeniami nerwowymi.' },
  },
];

window.LESSONS['edb/obronnosc'] = [
  {
    title: 'Kompas i azymut',
    svg: `<svg viewBox="0 0 400 225" role="img" aria-label="Róża kierunków: N 0°, E 90°, S 180°, W 270°. Łuk od północy zgodnie z ruchem wskazówek zegara pokazuje azymut 60°">
      <defs><marker id="a-edb-ob-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="150" cy="112" r="80" class="bg ln"/>
      <g class="ln-thin"><line x1="150" y1="32" x2="150" y2="192"/><line x1="70" y1="112" x2="230" y2="112"/></g>
      <text x="150" y="22" class="tx-b" text-anchor="middle">N 0°</text>
      <text x="150" y="216" class="tx-b" text-anchor="middle">S 180°</text>
      <text x="238" y="110" class="tx-b">E</text>
      <text x="238" y="130" class="tx-s">90°</text>
      <text x="62" y="110" class="tx-b" text-anchor="end">W</text>
      <text x="62" y="130" class="tx-s" text-anchor="end">270°</text>
      <line x1="150" y1="112" x2="216" y2="74" class="ln s2 sw" marker-end="url(#a-edb-ob-1)"/>
      <path d="M150,62 A50,50 0 0 1 193,87" class="ln s2"/>
      <text x="176" y="58" class="tx-s t2">60°</text>
      <text x="290" y="50" class="tx-b">azymut =</text>
      <text x="290" y="76" class="tx-s">kąt od północy</text>
      <text x="290" y="96" class="tx-s">w prawo, jak</text>
      <text x="290" y="116" class="tx-s">wskazówki</text>
      <text x="290" y="136" class="tx-s">zegara</text>
    </svg>`,
    text: `<p><b>Kompas</b> ma igłę magnetyczną, która wskazuje północ. <b>Busola</b> to kompas z podziałką – służy do wyznaczania <b>azymutu</b>.</p>
      <p><b>Azymut</b> to kąt między kierunkiem północy a kierunkiem marszu, mierzony <b>zgodnie z ruchem wskazówek zegara</b>: wschód 90°, południe 180°, zachód 270°. GPS w telefonie jest wygodny, ale może się rozładować albo stracić sygnał.</p>`,
    remember: 'N 0°, E 90°, S 180°, W 270° – liczysz od północy w prawo.',
    hook: 'Azymut liczysz jak minuty na zegarze: od „dwunastki” (północ) w prawo.',
    check: { q: 'Jaki azymut ma kierunek na zachód?', options: ['90°', '270°', '180°'], answer: 1, explain: 'Od północy w prawo: wschód 90°, południe 180°, zachód 270°.' },
  },
  {
    title: 'Trzy północe i mapa',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy strzałki: północ geograficzna (południki), magnetyczna (igła kompasu), topograficzna (siatka mapy)">
      <defs><marker id="a-edb-ob-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="80" y1="150" x2="80" y2="42" class="ln s3 sw" marker-end="url(#a-edb-ob-2)"/>
      <line x1="200" y1="150" x2="214" y2="42" class="ln s2 sw" marker-end="url(#a-edb-ob-2)"/>
      <line x1="320" y1="150" x2="320" y2="42" class="ln s1 sw" marker-end="url(#a-edb-ob-2)"/>
      <text x="80" y="28" class="tx" text-anchor="middle">geograficzna</text>
      <text x="205" y="28" class="tx" text-anchor="middle">magnetyczna</text>
      <text x="320" y="28" class="tx" text-anchor="middle">topograficzna</text>
      <text x="80" y="175" class="tx-s" text-anchor="middle">południki</text>
      <text x="200" y="175" class="tx-s" text-anchor="middle">igła kompasu</text>
      <text x="320" y="175" class="tx-s" text-anchor="middle">siatka mapy</text>
    </svg>`,
    text: `<p>Są trzy „północe”: <b>geograficzna</b> (wyznaczają ją południki), <b>magnetyczna</b> (wskazuje ją igła kompasu) i <b>topograficzna</b> (linie siatki na mapie).</p>
      <p><b>Orientowanie mapy</b>: połóż na niej kompas i obracaj mapę, aż jej północ zgodzi się z igłą. Swoje położenie ustalasz według <b>charakterystycznych przedmiotów terenowych</b> (wieża, most, skrzyżowanie, skraj lasu). Do orientacji najlepsza jest szczegółowa <b>mapa topograficzna</b>.</p>`,
    hook: 'Zorientowana mapa to „lustro” terenu – to, co po lewej na mapie, jest po lewej w terenie.',
  },
  {
    title: 'Cyberprzestrzeń – nowe pole walki',
    svg: `<svg viewBox="0 0 400 195" role="img" aria-label="Pięć obszarów działań: ląd, morze, powietrze, kosmos i cyberprzestrzeń. W polskim wojsku cyberprzestrzeni bronią Wojska Obrony Cyberprzestrzeni">
      <rect x="4" y="12" width="76" height="72" rx="8" class="f3 s3 sw"/><text x="42" y="40" class="tx" text-anchor="middle">🪖</text><text x="42" y="66" class="tx-s" text-anchor="middle">ląd</text>
      <rect x="83" y="12" width="76" height="72" rx="8" class="f1 s1 sw"/><text x="121" y="40" class="tx" text-anchor="middle">⚓</text><text x="121" y="66" class="tx-s" text-anchor="middle">morze</text>
      <rect x="162" y="12" width="76" height="72" rx="8" class="f5 s5 sw"/><text x="200" y="40" class="tx" text-anchor="middle">✈️</text><text x="200" y="66" class="tx-s" text-anchor="middle">powietrze</text>
      <rect x="241" y="12" width="76" height="72" rx="8" class="f4 s4 sw"/><text x="279" y="40" class="tx" text-anchor="middle">🛰️</text><text x="279" y="66" class="tx-s" text-anchor="middle">kosmos</text>
      <rect x="320" y="12" width="76" height="72" rx="8" class="f2 s2 sw"/><text x="358" y="40" class="tx" text-anchor="middle">💻</text><text x="358" y="66" class="tx-s" text-anchor="middle">cyber</text>
      <rect x="40" y="108" width="320" height="72" rx="8" class="f2 s2 sw"/><text x="200" y="138" class="tx" text-anchor="middle">Wojska Obrony</text><text x="200" y="160" class="tx" text-anchor="middle">Cyberprzestrzeni</text>
    </svg>`,
    text: `<p><b>Cyberbezpieczeństwo</b> (definicja z ustawy) to <b>odporność systemów informacyjnych</b> na działania naruszające poufność, integralność, dostępność i autentyczność danych. Cyberataki uderzają w infrastrukturę krytyczną (energetyka, łączność, transport) i w systemy wojskowe – to element <b>wojny hybrydowej</b>.</p>
      <p>W wojsku cyberprzestrzeni bronią <b>Wojska Obrony Cyberprzestrzeni</b>, a incydenty obsługuje m.in. <b>CSIRT MON</b>. Ty dbasz o silne hasła, weryfikację dwuetapową i aktualizacje, nie klikasz w podejrzane linki i nie publikujesz informacji o ruchach wojsk.</p>`,
    remember: 'Cyberbezpieczeństwo = odporność systemów informacyjnych na ataki.',
    check: { q: 'Która formacja Sił Zbrojnych broni cyberprzestrzeni?', options: ['Marynarka Wojenna', 'Żandarmeria Wojskowa', 'Wojska Obrony Cyberprzestrzeni'], answer: 2, explain: 'To specjalistyczny komponent Sił Zbrojnych.' },
  },
  {
    title: 'Trzy żelazne zasady z bronią',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy zasady: 1. każdą broń traktuj jak załadowaną, 2. lufa zawsze w bezpieczną stronę, 3. palec poza spustem">
      <rect x="10" y="10" width="380" height="50" rx="8" class="f2 s2 sw"/><text x="200" y="40" class="tx" text-anchor="middle">1. Zawsze traktuj jak załadowaną</text>
      <rect x="10" y="70" width="380" height="50" rx="8" class="f4 s4 sw"/><text x="200" y="100" class="tx" text-anchor="middle">2. Lufa w bezpieczną stronę</text>
      <rect x="10" y="130" width="380" height="50" rx="8" class="f3 s3 sw"/><text x="200" y="160" class="tx" text-anchor="middle">3. Palec poza spustem</text>
    </svg>`,
    text: `<p>Każdą broń traktuj tak, <b>jakby była załadowana</b> – nawet gdy „na pewno” jest pusta. Lufę kieruj <b>zawsze w bezpiecznym kierunku</b> (ziemia, tarcza), nigdy na ludzi. <b>Palec trzymaj poza spustem</b>, dopóki nie zdecydujesz się strzelać.</p>
      <p>Broń przechowuje się rozładowaną i zabezpieczoną (sejf, szafa na broń). Na strzelnicy wykonujesz polecenia prowadzącego.</p>`,
    remember: 'Załadowana – lufa w bezpieczną stronę – palec poza spustem.',
    hook: 'Skrót ZLP: <b>Z</b>aładowana, <b>L</b>ufa w bezpieczną stronę, <b>P</b>alec poza spustem.',
    check: { q: 'Gdzie trzymasz palec, dopóki nie zdecydujesz się oddać strzału?', options: ['poza spustem', 'na spuście', 'w kabłąku na spuście'], answer: 0, explain: 'Palec na spuście grozi przypadkowym strzałem.' },
  },
  {
    title: 'Muszka w szczerbince',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przyrządy celownicze: muszka pośrodku wycięcia szczerbinki, wierzchołki równo. Obok trzy postawy strzeleckie: stojąca, klęcząca, leżąca">
      <g class="f5 s5 sw"><rect x="30" y="80" width="64" height="44"/><rect x="146" y="80" width="64" height="44"/></g>
      <rect x="112" y="80" width="16" height="44" class="f2 s2 sw"/>
      <line x1="20" y1="80" x2="220" y2="80" class="ln-thin dash"/>
      <text x="120" y="62" class="tx-s" text-anchor="middle">muszka</text>
      <text x="120" y="150" class="tx-s" text-anchor="middle">szczerbinka</text>
      <text x="320" y="30" class="tx-b" text-anchor="middle">postawy</text>
      <text x="270" y="72" class="tx">🧍 stojąca</text>
      <text x="270" y="112" class="tx">🧎 klęcząca</text>
      <text x="270" y="152" class="tx">⬇️ leżąca</text>
      <text x="120" y="188" class="tx-s" text-anchor="middle">muszka pośrodku wycięcia</text>
    </svg>`,
    text: `<p>Części broni: <b>lufa</b>, <b>zamek</b>, szkielet z chwytem, <b>język spustowy</b> osłonięty <b>kabłąkiem</b>, <b>magazynek</b> i przyrządy celownicze – <b>muszka</b> (z przodu) i <b>szczerbinka</b> (bliżej oka).</p>
      <p>Celny strzał: <b>muszka pośrodku wycięcia szczerbinki</b>, spokojny oddech, spust ściągany płynnie, jednym ruchem – strzał nie powinien cię zaskoczyć. Postawy strzeleckie: <b>stojąca</b>, <b>klęcząca</b> i <b>leżąca</b>.</p>`,
    hook: 'Muszka siedzi w szczerbince jak kciuk w literze U.',
  },
];
