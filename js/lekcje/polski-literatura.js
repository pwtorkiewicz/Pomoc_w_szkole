/* Lekcje – język polski. */
window.LESSONS = window.LESSONS || {};

/* ===================== ŚRODKI STYLISTYCZNE ===================== */
window.LESSONS['polski/srodki-stylistyczne'] = [
  {
    title: 'Słowa w przebraniu – po co są środki stylistyczne?',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Zwykłe zdanie Słońce świeci zamienione w zdanie Złote słońce uśmiecha się do nas, z zaznaczonym epitetem i uosobieniem">
      <defs><marker id="a-pl-sr-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="20" y="10" width="360" height="42" rx="10" class="ln-thin bg"/>
      <text x="32" y="36" class="tx-s">zwykle:</text>
      <text x="210" y="37" class="tx" text-anchor="middle">Słońce świeci.</text>
      <path d="M200,56 L200,80" class="ln" marker-end="url(#a-pl-sr-1)"/>
      <rect x="20" y="86" width="360" height="44" rx="10" class="f3 s3 sw"/>
      <text x="200" y="114" class="tx" text-anchor="middle"><tspan class="t2" style="font-weight:bold">Złote</tspan> słońce <tspan class="t1" style="font-weight:bold">uśmiecha się</tspan> do nas.</text>
      <text x="89" y="156" class="tx-s t2" style="font-weight:bold" text-anchor="middle">↑ epitet</text>
      <text x="220" y="156" class="tx-s t1" style="font-weight:bold" text-anchor="middle">↑ uosobienie</text>
    </svg>`,
    text: `<p>Środki stylistyczne to „triki” języka. Dzięki nim tekst mocniej działa na wyobraźnię i emocje – zwykłe zdanie zamienia się w obraz.</p>
      <p>Na egzaminie musisz umieć środek <b>rozpoznać</b> i <b>nazwać</b>, ale też napisać, <b>czemu służy</b>, czyli jaką pełni funkcję.</p>`,
    remember: 'Środek stylistyczny = <b>nazwa + funkcja</b>. Sama nazwa to często za mało.',
    hook: 'Środki stylistyczne są jak filtry na zdjęciu: obraz ten sam, ale robi zupełnie inne wrażenie.',
  },
  {
    title: 'Epitet, porównanie, metafora',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Kafelki: złote słońce to epitet, oczy jak gwiazdy to porównanie, ocean traw to metafora">
      <defs><marker id="a-pl-sr-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="10" y="10" width="200" height="48" rx="10" class="ln-thin bg"/>
      <text x="110" y="40" class="tx" text-anchor="middle">„<tspan class="t2" style="font-weight:bold">złote</tspan> słońce”</text>
      <path d="M216,34 L244,34" class="ln" marker-end="url(#a-pl-sr-2)"/>
      <rect x="250" y="10" width="140" height="48" rx="10" class="f2 s2 sw"/>
      <text x="320" y="40" class="tx-b" text-anchor="middle">🏷️ epitet</text>
      <rect x="10" y="72" width="200" height="48" rx="10" class="ln-thin bg"/>
      <text x="110" y="102" class="tx" text-anchor="middle">„oczy <tspan class="t1" style="font-weight:bold">jak</tspan> gwiazdy”</text>
      <path d="M216,96 L244,96" class="ln" marker-end="url(#a-pl-sr-2)"/>
      <rect x="250" y="72" width="140" height="48" rx="10" class="f1 s1 sw"/>
      <text x="320" y="102" class="tx-b" text-anchor="middle">⚖️ porównanie</text>
      <rect x="10" y="134" width="200" height="48" rx="10" class="ln-thin bg"/>
      <text x="110" y="164" class="tx" text-anchor="middle">„ocean traw”</text>
      <path d="M216,158 L244,158" class="ln" marker-end="url(#a-pl-sr-2)"/>
      <rect x="250" y="134" width="140" height="48" rx="10" class="f5 s5 sw"/>
      <text x="320" y="164" class="tx-b" text-anchor="middle">🌊 metafora</text>
    </svg>`,
    text: `<p><b>Epitet</b> określa rzeczownik – najczęściej jest to przymiotnik: „<b>złote</b> słońce”.</p>
      <p><b>Porównanie</b> zestawia dwie rzeczy za pomocą słówek <i>jak, niby, niczym, jakby</i>: „oczy <b>jak</b> gwiazdy”.</p>
      <p><b>Metafora</b> (przenośnia) łączy słowa tak, że razem nabierają nowego znaczenia: „ocean traw” to nie woda, tylko ogrom trawy.</p>`,
    remember: 'Jest „jak, niby, niczym, jakby”? → <b>porównanie</b>. Nowe znaczenie bez tych słówek? → <b>metafora</b>.',
    hook: 'Porównanie ma „klej” – słówko <b>jak</b>. Metafora skleja słowa bez kleju.',
    check: { q: '„Śpiewała niczym słowik.” – jaki to środek stylistyczny?', options: ['epitet', 'porównanie', 'metafora', 'oksymoron'], answer: 1, explain: 'Słówko „niczym” zestawia dwie rzeczy – to porównanie.' },
  },
  {
    title: 'Uosobienie czy ożywienie?',
    svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Porównanie: uosobienie to cechy człowieka, np. wiatr śpiewa; ożywienie to cechy istoty żywej, np. chmury biegną">
      <rect x="8" y="8" width="188" height="198" rx="14" class="f1 s1 sw"/>
      <text x="102" y="36" class="tx-b t1" text-anchor="middle">UOSOBIENIE</text>
      <text x="102" y="84" class="tx" style="font-size:34px" text-anchor="middle">🌬️🧑</text>
      <text x="102" y="122" class="tx" text-anchor="middle">„wiatr śpiewa”</text>
      <text x="102" y="154" class="tx" style="font-weight:bold" text-anchor="middle">cechy człowieka</text>
      <text x="102" y="180" class="tx-s" text-anchor="middle">śpiewa, płacze, myśli</text>
      <rect x="204" y="8" width="188" height="198" rx="14" class="f3 s3 sw"/>
      <text x="298" y="36" class="tx-b t3" text-anchor="middle">OŻYWIENIE</text>
      <text x="298" y="84" class="tx" style="font-size:34px" text-anchor="middle">☁️🐾</text>
      <text x="298" y="122" class="tx" text-anchor="middle">„chmury biegną”</text>
      <text x="298" y="154" class="tx" style="font-weight:bold" text-anchor="middle">cechy istoty żywej</text>
      <text x="298" y="180" class="tx-s" text-anchor="middle">biegnie, oddycha</text>
    </svg>`,
    text: `<p><b>Uosobienie</b> (personifikacja) – przedmiot, zwierzę albo zjawisko zachowuje się jak <b>człowiek</b>: śpiewa, płacze, myśli.</p>
      <p><b>Ożywienie</b> (animizacja) – martwa rzecz dostaje cechy <b>istoty żywej</b>, np. porusza się, biegnie, oddycha.</p>`,
    remember: 'Uosobienie = cechy <b>człowieka</b>. Ożywienie = cechy <b>istoty żywej</b> (np. ruch).',
    hook: 'U<b>osob</b>ienie → <b>osoba</b> → człowiek. O<b>żyw</b>ienie → <b>żywy</b> → każde stworzenie, które się rusza.',
    check: { q: '„Stary dąb opowiadał wnukom historie.” – jaki to środek?', options: ['ożywienie', 'uosobienie', 'porównanie', 'onomatopeja'], answer: 1, explain: 'Opowiadanie historii to czynność ludzka – dąb dostał cechę człowieka, więc to uosobienie.' },
  },
  {
    title: 'Zwroty, pytania i powtórzenia',
    svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Apostrofa: Litwo! Ojczyzno moja!; pytanie retoryczne: Kto tego nie zna?; anafora: Kocham na początku dwóch wersów">
      <defs><marker id="a-pl-sr-4" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="10" y="8" width="220" height="46" rx="16" class="f2 s2 sw"/>
      <text x="120" y="37" class="tx" text-anchor="middle">„Litwo! Ojczyzno moja!”</text>
      <path d="M236,31 L256,31" class="ln" marker-end="url(#a-pl-sr-4)"/>
      <text x="264" y="37" class="tx-b">📣 apostrofa</text>
      <rect x="10" y="70" width="220" height="46" rx="16" class="f1 s1 sw"/>
      <text x="120" y="99" class="tx" text-anchor="middle">„Kto tego nie zna?”</text>
      <path d="M236,93 L256,93" class="ln" marker-end="url(#a-pl-sr-4)"/>
      <text x="264" y="90" class="tx-b">❓ pytanie</text>
      <text x="264" y="110" class="tx-b">retoryczne</text>
      <rect x="10" y="132" width="220" height="80" rx="16" class="f5 s5 sw"/>
      <text x="26" y="164" class="tx"><tspan class="t5" style="font-weight:bold">Kocham</tspan> szum lasu,</text>
      <text x="26" y="194" class="tx"><tspan class="t5" style="font-weight:bold">Kocham</tspan> śpiew ptaków…</text>
      <path d="M236,172 L256,172" class="ln" marker-end="url(#a-pl-sr-4)"/>
      <text x="264" y="178" class="tx-b">🔁 anafora</text>
    </svg>`,
    text: `<p><b>Apostrofa</b> – bezpośredni, uroczysty zwrot do kogoś lub czegoś. Tak zaczyna się „Pan Tadeusz”: „Litwo! Ojczyzno moja!”.</p>
      <p><b>Pytanie retoryczne</b> – pytanie, na które nikt nie czeka z odpowiedzią. Ma skłonić do zastanowienia się.</p>
      <p><b>Anafora</b> – to samo słowo na początku kolejnych wersów.</p>`,
    remember: 'Apostrofa = zwrot <b>do</b> kogoś/czegoś. Pytanie retoryczne = bez odpowiedzi. Anafora = to samo słowo na <b>początku</b> wersów.',
    hook: 'Apostrofa woła („Hej, ty!”), pytanie retoryczne zostawia ciszę, a anafora stuka w to samo miejsce jak dzięcioł.',
    check: { q: '„O, wiosno, wróć do nas jak najszybciej!” – jaki środek otwiera to zdanie?', options: ['apostrofa', 'anafora', 'hiperbola', 'epitet'], answer: 0, explain: 'To bezpośredni, uroczysty zwrot do wiosny – apostrofa.' },
  },
  {
    title: 'Dźwięk, przesada, sprzeczność',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Kafelki: plum bęc to onomatopeja, milion razy to hiperbola, gorący lód to oksymoron, stoły szafy łóżka to wyliczenie, domek słoneczko to zdrobnienie">
      <rect x="8" y="8" width="188" height="66" rx="12" class="f1 s1 sw"/>
      <text x="102" y="34" class="tx" text-anchor="middle">„plum! bęc!”</text>
      <text x="102" y="60" class="tx-b t1" text-anchor="middle">🔊 onomatopeja</text>
      <rect x="204" y="8" width="188" height="66" rx="12" class="f2 s2 sw"/>
      <text x="298" y="34" class="tx" text-anchor="middle">„milion razy”</text>
      <text x="298" y="60" class="tx-b t2" text-anchor="middle">🎈 hiperbola</text>
      <rect x="8" y="82" width="188" height="66" rx="12" class="f3 s3 sw"/>
      <text x="102" y="108" class="tx" text-anchor="middle">„gorący lód”</text>
      <text x="102" y="134" class="tx-b t3" text-anchor="middle">🔥🧊 oksymoron</text>
      <rect x="204" y="82" width="188" height="66" rx="12" class="f4 s4 sw"/>
      <text x="298" y="108" class="tx" text-anchor="middle">„stoły, szafy, łóżka”</text>
      <text x="298" y="134" class="tx-b t4" text-anchor="middle">📋 wyliczenie</text>
      <rect x="106" y="156" width="188" height="66" rx="12" class="f5 s5 sw"/>
      <text x="200" y="182" class="tx" text-anchor="middle">„domek, słoneczko”</text>
      <text x="200" y="208" class="tx-b t5" text-anchor="middle">🧸 zdrobnienie</text>
    </svg>`,
    text: `<ul>
      <li><b>Onomatopeja</b> – wyraz naśladujący dźwięk („szu”, „plum”, „bęc”).</li>
      <li><b>Hiperbola</b> – celowa przesada („mówiłem ci to milion razy”).</li>
      <li><b>Oksymoron</b> – połączenie słów o przeciwnym znaczeniu („gorący lód”, „żywy trup”).</li>
      <li><b>Wyliczenie</b> – wymienianie wielu elementów po kolei.</li>
      <li><b>Zdrobnienie</b> – wyraz o znaczeniu pomniejszającym albo czułym.</li></ul>`,
    remember: 'Dźwięk → onomatopeja. Przesada → hiperbola. Sprzeczność → oksymoron.',
    hook: 'Hiperbola to „nadmuchany balon” – zdanie napompowane przesadą. Oksymoron to dwa słowa, które się kłócą, a stoją obok siebie.',
    check: { q: '„Czekam na ciebie już sto lat!” – jaki to środek?', options: ['hiperbola', 'oksymoron', 'onomatopeja', 'zdrobnienie'], answer: 0, explain: 'To celowa przesada – nikt nie czeka stu lat. Hiperbola.' },
  },
  {
    title: 'Pułapka egzaminacyjna: nazwa to dopiero połowa',
    svg: `<svg viewBox="0 0 400 186" role="img" aria-label="Schemat odpowiedzi: nazwa plus funkcja daje punkt; przykład: porównanie podkreśla piękno oczu bohaterki">
      <rect x="10" y="10" width="110" height="44" rx="10" class="f1 s1 sw"/>
      <text x="65" y="38" class="tx-b" text-anchor="middle">1. nazwa</text>
      <text x="136" y="39" class="tx-b" text-anchor="middle">+</text>
      <rect x="152" y="10" width="120" height="44" rx="10" class="f3 s3 sw"/>
      <text x="212" y="38" class="tx-b" text-anchor="middle">2. funkcja</text>
      <text x="288" y="39" class="tx-b" text-anchor="middle">=</text>
      <rect x="304" y="10" width="86" height="44" rx="10" class="f4 s4 sw"/>
      <text x="347" y="38" class="tx-b" text-anchor="middle">✔ pkt</text>
      <rect x="10" y="70" width="380" height="106" rx="12" class="ln-thin bg"/>
      <text x="200" y="98" class="tx" text-anchor="middle">„Jej oczy błyszczały jak gwiazdy.”</text>
      <text x="26" y="130" class="tx t1"><tspan style="font-weight:bold">nazwa:</tspan> porównanie</text>
      <text x="26" y="160" class="tx t3"><tspan style="font-weight:bold">funkcja:</tspan> podkreśla piękno oczu bohaterki</text>
    </svg>`,
    text: `<p>W zadaniach często pada polecenie: „Nazwij środek i określ jego funkcję”. Wtedy liczy się <b>druga część</b> – po co autor go użył.</p>
      <p>Przykłady funkcji: <i>podkreśla</i> piękno albo grozę, <i>skłania</i> czytelnika do refleksji, <i>naśladuje</i> dźwięki, <i>wyraża</i> uczucia mówiącego.</p>`,
    remember: 'Schemat odpowiedzi: „To jest <i>[nazwa]</i>. Służy temu, by <i>[funkcja]</i>”.',
    check: { q: 'Jaką funkcję najczęściej pełni pytanie retoryczne?', options: ['podaje dokładną informację', 'skłania odbiorcę do refleksji', 'naśladuje dźwięki', 'opisuje wygląd postaci'], answer: 1, explain: 'Na pytanie retoryczne nie oczekuje się odpowiedzi – ma pobudzić do zastanowienia się.' },
  },
];

/* ===================== LEKTURY KL. VII–VIII ===================== */
window.LESSONS['polski/lektury-7-8'] = [
  {
    title: 'Sześć lektur, które musisz znać w całości',
    svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Sześć lektur klas 7–8: trzy epickie (Opowieść wigilijna, Mały Książę, Kamienie na szaniec) i trzy dramaty (Zemsta, Dziady cz. II, Balladyna)">
      <rect x="6" y="6" width="190" height="66" rx="12" class="f1 s1 sw"/>
      <text x="101" y="30" class="tx" style="font-weight:bold" text-anchor="middle">Opowieść wigilijna</text>
      <text x="101" y="48" class="tx-s" text-anchor="middle">Karol Dickens</text>
      <text x="101" y="65" class="tx-s t1" text-anchor="middle">📖 epika · opowiadanie</text>
      <rect x="204" y="6" width="190" height="66" rx="12" class="f2 s2 sw"/>
      <text x="299" y="30" class="tx" style="font-weight:bold" text-anchor="middle">Zemsta</text>
      <text x="299" y="48" class="tx-s" text-anchor="middle">Aleksander Fredro</text>
      <text x="299" y="65" class="tx-s t2" text-anchor="middle">🎭 dramat · komedia</text>
      <rect x="6" y="78" width="190" height="66" rx="12" class="f1 s1 sw"/>
      <text x="101" y="102" class="tx" style="font-weight:bold" text-anchor="middle">Mały Książę</text>
      <text x="101" y="120" class="tx-s" text-anchor="middle">Antoine de Saint-Exupéry</text>
      <text x="101" y="137" class="tx-s t1" text-anchor="middle">📖 epika · baśń filozoficzna</text>
      <rect x="204" y="78" width="190" height="66" rx="12" class="f2 s2 sw"/>
      <text x="299" y="102" class="tx" style="font-weight:bold" text-anchor="middle">Dziady cz. II</text>
      <text x="299" y="120" class="tx-s" text-anchor="middle">Adam Mickiewicz</text>
      <text x="299" y="137" class="tx-s t2" text-anchor="middle">🎭 dramat romantyczny</text>
      <rect x="6" y="150" width="190" height="66" rx="12" class="f1 s1 sw"/>
      <text x="101" y="174" class="tx" style="font-weight:bold" text-anchor="middle">Kamienie na szaniec</text>
      <text x="101" y="192" class="tx-s" text-anchor="middle">Aleksander Kamiński</text>
      <text x="101" y="209" class="tx-s t1" text-anchor="middle">📖 epika · literatura faktu</text>
      <rect x="204" y="150" width="190" height="66" rx="12" class="f2 s2 sw"/>
      <text x="299" y="174" class="tx" style="font-weight:bold" text-anchor="middle">Balladyna</text>
      <text x="299" y="192" class="tx-s" text-anchor="middle">Juliusz Słowacki</text>
      <text x="299" y="209" class="tx-s t2" text-anchor="middle">🎭 dramat · tragedia</text>
    </svg>`,
    text: `<p>Z lektur klas VII–VIII egzamin sprawdza znajomość <b>całego utworu</b> – treści i problematyki. W wypracowaniu musisz odwołać się do lektury wskazanej w poleceniu.</p>
      <p>Spokojnie: lista lektur obowiązkowych będzie wydrukowana na początku arkusza. Ale treść musisz mieć w głowie.</p>`,
    remember: '📖 Niebieskie = epika (opowiada narrator). 🎭 Pomarańczowe = dramat (dialogi, scena).',
    hook: 'Dramaty to <b>Z</b>emsta, <b>D</b>ziady, <b>B</b>alladyna – „<b>Z</b>agraj <b>D</b>ramat na <b>B</b>is”.',
    check: { q: 'Kto jest autorem „Balladyny”?', options: ['Adam Mickiewicz', 'Juliusz Słowacki', 'Aleksander Fredro', 'Aleksander Kamiński'], answer: 1 },
  },
  {
    title: '„Zemsta” – mur dzieli, miłość łączy',
    svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Mapa postaci Zemsty: Cześnik Raptusiewicz i Rejent Milczek w sporze o mur graniczny; Klara, bratanica Cześnika, kocha Wacława, syna Rejenta; Papkin – tchórzliwy samochwała">
      <defs><marker id="a-pl-l78-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="85" y1="70" x2="150" y2="46" class="ln-thin dash"/>
      <line x1="315" y1="70" x2="250" y2="46" class="ln-thin dash"/>
      <line x1="85" y1="126" x2="85" y2="160" class="ln-thin"/>
      <line x1="315" y1="126" x2="315" y2="160" class="ln-thin"/>
      <rect x="120" y="8" width="160" height="38" rx="8" class="f4 s4 sw"/>
      <text x="200" y="33" class="tx" style="font-weight:bold" text-anchor="middle">🧱 mur graniczny</text>
      <rect x="10" y="70" width="150" height="56" rx="12" class="f2 s2 sw"/>
      <text x="85" y="95" class="tx-b" text-anchor="middle">Cześnik</text>
      <text x="85" y="115" class="tx-s" text-anchor="middle">Raptusiewicz</text>
      <rect x="240" y="70" width="150" height="56" rx="12" class="f1 s1 sw"/>
      <text x="315" y="95" class="tx-b" text-anchor="middle">Rejent</text>
      <text x="315" y="115" class="tx-s" text-anchor="middle">Milczek</text>
      <path d="M166,98 L234,98" class="s2 sw" fill="none" marker-start="url(#a-pl-l78-2)" marker-end="url(#a-pl-l78-2)"/>
      <text x="200" y="88" class="tx-s t2" text-anchor="middle">spór</text>
      <rect x="10" y="160" width="150" height="56" rx="12" class="f5 s5 sw"/>
      <text x="85" y="185" class="tx-b" text-anchor="middle">Klara</text>
      <text x="85" y="205" class="tx-s" text-anchor="middle">bratanica Cześnika</text>
      <rect x="240" y="160" width="150" height="56" rx="12" class="f5 s5 sw"/>
      <text x="315" y="185" class="tx-b" text-anchor="middle">Wacław</text>
      <text x="315" y="205" class="tx-s" text-anchor="middle">syn Rejenta</text>
      <text x="200" y="192" class="tx" style="font-size:26px" text-anchor="middle">❤️</text>
      <text x="200" y="212" class="tx-s t5" text-anchor="middle">miłość</text>
      <text x="200" y="242" class="tx" text-anchor="middle">🦚 Papkin – tchórzliwy samochwała</text>
    </svg>`,
    text: `<p>„Zemsta” Aleksandra Fredry to <b>komedia</b>. Cześnik Raptusiewicz i Rejent Milczek mieszkają w jednym zamku i kłócą się o <b>mur graniczny</b>.</p>
      <p>Ich spór kończy <b>miłość Wacława</b> (syna Rejenta) i <b>Klary</b> (bratanicy Cześnika). Do tego Papkin – tchórzliwy samochwała. Słowa „Niech się dzieje wola nieba” wypowiada Rejent.</p>`,
    remember: 'Spór o <b>mur</b> → zakończony dzięki <b>miłości</b> Klary i Wacława.',
    hook: 'Rodzice budują mur, dzieci budują most. Z tego kontrastu bierze się cała „Zemsta”.',
    check: { q: 'Kim jest Klara dla Cześnika?', options: ['córką', 'bratanicą', 'żoną', 'siostrą'], answer: 1 },
  },
  {
    title: '„Dziady cz. II” – trzy rodzaje duchów',
    svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Duchy w Dziadach cz. II: lekkie – Józio i Rózia, pośrednie – pasterka Zosia, ciężkie – Widmo Złego Pana; obrzęd prowadzi Guślarz">
      <rect x="10" y="8" width="380" height="64" rx="12" class="f1 s1 sw"/>
      <text x="200" y="34" class="tx-b" text-anchor="middle">🕊️ lekkie: Józio i Rózia</text>
      <text x="200" y="58" class="tx-s" text-anchor="middle">nie zaznali goryczy – proszą o 2 ziarnka gorczycy</text>
      <rect x="10" y="80" width="380" height="64" rx="12" class="f5 s5 sw"/>
      <text x="200" y="106" class="tx-b" text-anchor="middle">🌾 pośrednie: pasterka Zosia</text>
      <text x="200" y="130" class="tx-s" text-anchor="middle">za życia nikogo nie kochała</text>
      <rect x="10" y="152" width="380" height="54" rx="12" class="f2 s2 sw"/>
      <text x="200" y="185" class="tx-b" text-anchor="middle">⛓️ ciężkie: Widmo Złego Pana</text>
      <text x="200" y="240" class="tx" text-anchor="middle">🕯️ Obrzęd prowadzi <tspan style="font-weight:bold">Guślarz</tspan></text>
    </svg>`,
    text: `<p>„Dziady cz. II” Adama Mickiewicza to dramat romantyczny. Obrzęd prowadzi <b>Guślarz</b>, a przychodzą trzy rodzaje duchów. Każdy duch przekazuje <b>prawdę moralną</b>.</p>
      <ul><li>Józio i Rózia: „Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie”.</li>
      <li>Zosia: „Kto nie dotknął ziemi ni razu, ten nigdy nie może być w niebie”.</li></ul>`,
    remember: 'Lekkie – Józio i Rózia · Pośrednie – Zosia · Ciężkie – Zły Pan. Każdy duch = jedna nauka moralna.',
    hook: '<b>Gor</b>ycz i <b>gor</b>czyca: dzieci, które nie zaznały goryczy, proszą o ziarnka gorczycy.',
    check: { q: 'Dlaczego pasterka Zosia nie mogła dostać się do nieba?', options: ['nie zaznała goryczy', 'za życia nikogo nie kochała', 'nie miała grobu', 'zgubiła drogę'], answer: 1, explain: '„Kto nie dotknął ziemi ni razu, ten nigdy nie może być w niebie” – Zosia za życia nikogo nie kochała.' },
  },
  {
    title: '„Balladyna” – od malin do pioruna',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Oś fabuły Balladyny: zakład o maliny, zabójstwo Aliny, kolejne zbrodnie i korona, trzy wyroki na samą siebie, śmierć od pioruna; obok postacie fantastyczne i Pustelnik">
      <line x1="26" y1="24" x2="26" y2="212" class="ln-thin"/>
      <circle cx="26" cy="24" r="13" class="f3 s3 sw"/><text x="26" y="29" class="tx-s" text-anchor="middle" style="font-weight:bold">1</text>
      <text x="48" y="22" class="tx" style="font-weight:bold">Zakład o maliny</text>
      <text x="48" y="40" class="tx-s">która pierwsza – poślubi Kirkora</text>
      <circle cx="26" cy="71" r="13" class="f2 s2 sw"/><text x="26" y="76" class="tx-s" text-anchor="middle" style="font-weight:bold">2</text>
      <text x="48" y="69" class="tx" style="font-weight:bold">Zabija siostrę Alinę</text>
      <text x="48" y="87" class="tx-s">pierwsza zbrodnia</text>
      <circle cx="26" cy="118" r="13" class="f2 s2 sw"/><text x="26" y="123" class="tx-s" text-anchor="middle" style="font-weight:bold">3</text>
      <text x="48" y="116" class="tx" style="font-weight:bold">Kolejne zbrodnie</text>
      <text x="48" y="134" class="tx-s">dla władzy – zostaje królową</text>
      <circle cx="26" cy="165" r="13" class="f4 s4 sw"/><text x="26" y="170" class="tx-s" text-anchor="middle" style="font-weight:bold">4</text>
      <text x="48" y="163" class="tx" style="font-weight:bold">Trzy wyroki śmierci</text>
      <text x="48" y="181" class="tx-s">wydaje je na samą siebie</text>
      <circle cx="26" cy="212" r="13" class="f5 s5 sw"/><text x="26" y="217" class="tx-s" text-anchor="middle" style="font-weight:bold">5</text>
      <text x="48" y="210" class="tx" style="font-weight:bold">Ginie od pioruna ⚡</text>
      <text x="48" y="228" class="tx-s">kara za zbrodnie</text>
      <rect x="262" y="8" width="132" height="104" rx="12" class="f5 s5 sw"/>
      <text x="328" y="32" class="tx-s t5" style="font-weight:bold" text-anchor="middle">✨ fantastyczne</text>
      <text x="328" y="56" class="tx" text-anchor="middle">Goplana</text>
      <text x="328" y="78" class="tx" text-anchor="middle">Skierka</text>
      <text x="328" y="100" class="tx" text-anchor="middle">Chochlik</text>
      <rect x="262" y="124" width="132" height="80" rx="12" class="f4 s4 sw"/>
      <text x="328" y="148" class="tx" style="font-weight:bold" text-anchor="middle">Pustelnik</text>
      <text x="328" y="170" class="tx-s" text-anchor="middle">dawny król</text>
      <text x="328" y="190" class="tx-s" text-anchor="middle">Popiel III</text>
    </svg>`,
    text: `<p>„Balladyna” Juliusza Słowackiego to <b>tragedia</b>. Siostry Balladyna i Alina zbierają maliny – ta, która pierwsza napełni dzban, poślubi Kirkora. Balladyna zabija siostrę, a potem kolejne osoby, by zdobyć władzę.</p>
      <p>Zostaje królową, wydaje trzy wyroki śmierci na samą siebie i ginie od pioruna. Obok ludzi działa świat fantastyczny: nimfa Goplana, Skierka i Chochlik.</p>`,
    remember: 'Temat „Balladyny”: <b>żądza władzy, wina i kara</b>.',
    hook: '<b>M</b>aliny → <b>Z</b>brodnie → <b>K</b>orona → <b>W</b>yroki → <b>P</b>iorun: „<b>M</b>ała <b>Z</b>brodnia <b>K</b>ończy się <b>W</b>ielką <b>P</b>orażką”.',
    check: { q: 'Jak ginie Balladyna?', options: ['od pioruna', 'w pojedynku', 'topi się w jeziorze', 'ucieka i znika'], answer: 0, explain: 'Wydaje na siebie trzy wyroki śmierci i ginie od pioruna.' },
  },
  {
    title: '„Opowieść wigilijna” i „Mały Książę”',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Schemat przemiany Scrooge’a: skąpiec, duch Marleya, trzy duchy, przemiana. Podróż Małego Księcia: planeta B-612, planety, Ziemia; oswoić znaczy stworzyć więzy">
      <defs><marker id="a-pl-l78-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <text x="8" y="16" class="tx-s" style="font-weight:bold">OPOWIEŚĆ WIGILIJNA</text>
      <rect x="6" y="24" width="88" height="50" rx="10" class="f1 s1 sw"/>
      <text x="50" y="46" class="tx" style="font-weight:bold" text-anchor="middle">Scrooge</text>
      <text x="50" y="65" class="tx-s" text-anchor="middle">skąpiec</text>
      <path d="M96,49 L110,49" class="ln" marker-end="url(#a-pl-l78-5)"/>
      <rect x="114" y="24" width="88" height="50" rx="10" class="f5 s5 sw"/>
      <text x="158" y="46" class="tx" style="font-weight:bold" text-anchor="middle">👻 Marley</text>
      <text x="158" y="65" class="tx-s" text-anchor="middle">duch</text>
      <path d="M204,49 L218,49" class="ln" marker-end="url(#a-pl-l78-5)"/>
      <rect x="222" y="24" width="88" height="50" rx="10" class="f5 s5 sw"/>
      <text x="266" y="46" class="tx" style="font-weight:bold" text-anchor="middle">3 duchy</text>
      <text x="266" y="65" class="tx-s" text-anchor="middle">wigilijne</text>
      <path d="M312,49 L326,49" class="ln" marker-end="url(#a-pl-l78-5)"/>
      <rect x="330" y="24" width="84" height="50" rx="10" class="f3 s3 sw"/>
      <text x="372" y="46" class="tx" style="font-weight:bold" text-anchor="middle">😊</text>
      <text x="372" y="65" class="tx-s" text-anchor="middle">przemiana</text>
      <text x="210" y="94" class="tx-s" text-anchor="middle">Przeszłości · Teraźniejszości · Przyszłości</text>
      <line x1="10" y1="108" x2="410" y2="108" class="ln-thin dash"/>
      <text x="8" y="128" class="tx-s" style="font-weight:bold">MAŁY KSIĄŻĘ</text>
      <circle cx="50" cy="168" r="30" class="f4 s4 sw"/>
      <text x="50" y="178" class="tx" style="font-size:26px" text-anchor="middle">🌹</text>
      <text x="50" y="216" class="tx-s" text-anchor="middle">B-612</text>
      <path d="M84,168 L108,168" class="ln" marker-end="url(#a-pl-l78-5)"/>
      <rect x="112" y="138" width="190" height="62" rx="10" class="f1 s1 sw"/>
      <text x="207" y="160" class="tx" style="font-weight:bold" text-anchor="middle">planety</text>
      <text x="207" y="178" class="tx-s" text-anchor="middle">król, próżny, pijak,</text>
      <text x="207" y="194" class="tx-s" text-anchor="middle">bankier, latarnik, geograf</text>
      <path d="M304,168 L324,168" class="ln" marker-end="url(#a-pl-l78-5)"/>
      <rect x="328" y="138" width="86" height="62" rx="10" class="f3 s3 sw"/>
      <text x="371" y="162" class="tx" style="font-weight:bold" text-anchor="middle">🌍 Ziemia</text>
      <text x="371" y="186" class="tx-s" text-anchor="middle">pilot, Lis</text>
      <text x="210" y="242" class="tx" text-anchor="middle">🦊 oswoić = <tspan style="font-weight:bold">stworzyć więzy</tspan></text>
    </svg>`,
    text: `<p><b>„Opowieść wigilijna”</b> Karola Dickensa: skąpego Ebenezera Scrooge’a odwiedza duch zmarłego wspólnika, Jacoba Marleya, a potem trzy duchy – Wigilijnej Przeszłości, Teraźniejszości i Przyszłości. Scrooge się <b>przemienia</b>. Ważni są też Cratchitowie i mały Tim.</p>
      <p><b>„Mały Książę”</b>: pilot ląduje awaryjnie na Saharze i spotyka Małego Księcia z planety B-612. Książę opowiada o Róży, o podróży po planetach i o Lisie, który uczy go „oswajania”.</p>`,
    remember: '„Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.” – Lis, „Mały Książę”',
    hook: 'Trzy duchy = trzy czasy: <b>było, jest, będzie</b>.',
    check: { q: 'Kim był Jacob Marley w „Opowieści wigilijnej”?', options: ['zmarłym wspólnikiem Scrooge’a', 'Duchem Wigilijnej Przyszłości', 'ojcem małego Tima', 'pilotem'], answer: 0 },
  },
  {
    title: '„Kamienie na szaniec” i pułapka na egzaminie',
    svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Trzej przyjaciele z Kamieni na szaniec: Rudy – Jan Bytnar, Alek – Aleksy Dawidowski, Zośka – Tadeusz Zawadzki, harcerze Szarych Szeregów; mały sabotaż i akcja pod Arsenałem; ostrzeżenie: brak lektury to 0 punktów">
      <line x1="200" y1="56" x2="85" y2="100" class="ln-thin"/>
      <line x1="200" y1="56" x2="315" y2="100" class="ln-thin"/>
      <line x1="160" y1="124" x2="240" y2="124" class="ln-thin"/>
      <rect x="125" y="8" width="150" height="48" rx="12" class="f2 s2 sw"/>
      <text x="200" y="30" class="tx-b" text-anchor="middle">Rudy</text>
      <text x="200" y="48" class="tx-s" text-anchor="middle">Jan Bytnar</text>
      <rect x="10" y="100" width="150" height="48" rx="12" class="f1 s1 sw"/>
      <text x="85" y="122" class="tx-b" text-anchor="middle">Alek</text>
      <text x="85" y="140" class="tx-s" text-anchor="middle">Aleksy Dawidowski</text>
      <rect x="240" y="100" width="150" height="48" rx="12" class="f3 s3 sw"/>
      <text x="315" y="122" class="tx-b" text-anchor="middle">Zośka</text>
      <text x="315" y="140" class="tx-s" text-anchor="middle">Tadeusz Zawadzki</text>
      <text x="200" y="88" class="tx-s" style="font-weight:bold" text-anchor="middle">Szare</text>
      <text x="200" y="104" class="tx-s" style="font-weight:bold" text-anchor="middle">Szeregi</text>
      <rect x="10" y="160" width="150" height="34" rx="8" class="f4 s4"/>
      <text x="85" y="182" class="tx" text-anchor="middle">mały sabotaż</text>
      <rect x="170" y="160" width="220" height="34" rx="8" class="f4 s4"/>
      <text x="280" y="182" class="tx" text-anchor="middle">Arsenał: odbicie Rudego</text>
      <rect x="10" y="206" width="380" height="38" rx="8" class="f2 s2 sw"/>
      <text x="200" y="231" class="tx" style="font-weight:bold" text-anchor="middle">⚠️ brak lektury z polecenia = 0 pkt</text>
    </svg>`,
    text: `<p>„Kamienie na szaniec” Aleksandra Kamińskiego to literatura faktu. Bohaterowie – Rudy, Alek i Zośka – to harcerze <b>Szarych Szeregów</b>. Prowadzą mały sabotaż, a w akcji pod Arsenałem odbijają Rudego z rąk gestapo. Tematy: przyjaźń, patriotyzm, poświęcenie.</p>
      <p><b>Pułapka egzaminacyjna:</b> jeśli w wypracowaniu nie odwołasz się do lektury wskazanej w poleceniu, cała praca dostaje 0 pkt. Samo imię bohatera to za mało – wykorzystaj treść utworu.</p>`,
    remember: 'Rudy – Jan Bytnar · Alek – Aleksy Dawidowski · Zośka – Tadeusz Zawadzki.',
    hook: '<b>R</b>udy, <b>A</b>lek, <b>Z</b>ośka → „<b>RAZ</b>em” – jak prawdziwi przyjaciele.',
    check: { q: 'Kogo odbito w akcji pod Arsenałem?', options: ['Zośkę', 'Alka', 'Rudego', 'Scrooge’a'], answer: 2, explain: 'Akcja pod Arsenałem to odbicie Jana Bytnara „Rudego” z rąk gestapo.' },
  },
];

/* ===================== UTWORY KRÓTSZE I FRAGMENTY ===================== */
window.LESSONS['polski/utwory-krotsze'] = [
  {
    title: 'Mapa: kto co napisał?',
    svg: `<svg viewBox="0 0 420 274" role="img" aria-label="Autorzy i ich utwory: Mickiewicz – Pan Tadeusz, Reduta Ordona, Świtezianka; Kochanowski – Treny VII i VIII, fraszki, pieśń; Sienkiewicz – Latarnik, Quo vadis; Żeromski – Syzyfowe prace; Mrożek – Artysta">
      <rect x="6" y="6" width="130" height="56" rx="10" class="f1 s1 sw"/>
      <text x="71" y="40" class="tx" style="font-weight:bold" text-anchor="middle">Mickiewicz</text>
      <text x="150" y="28" class="tx">Pan Tadeusz · Reduta Ordona</text>
      <text x="150" y="52" class="tx">Świtezianka</text>
      <rect x="6" y="68" width="130" height="56" rx="10" class="f5 s5 sw"/>
      <text x="71" y="102" class="tx" style="font-weight:bold" text-anchor="middle">Kochanowski</text>
      <text x="150" y="90" class="tx">Treny VII i VIII</text>
      <text x="150" y="114" class="tx">fraszki · pieśń</text>
      <rect x="6" y="130" width="130" height="56" rx="10" class="f2 s2 sw"/>
      <text x="71" y="164" class="tx" style="font-weight:bold" text-anchor="middle">Sienkiewicz</text>
      <text x="150" y="152" class="tx">Latarnik</text>
      <text x="150" y="176" class="tx">Quo vadis <tspan class="tx-s">(fragmenty)</tspan></text>
      <rect x="6" y="192" width="130" height="36" rx="10" class="f3 s3 sw"/>
      <text x="71" y="216" class="tx" style="font-weight:bold" text-anchor="middle">Żeromski</text>
      <text x="150" y="216" class="tx">Syzyfowe prace <tspan class="tx-s">(fragmenty)</tspan></text>
      <rect x="6" y="234" width="130" height="36" rx="10" class="f4 s4 sw"/>
      <text x="71" y="258" class="tx" style="font-weight:bold" text-anchor="middle">Mrożek</text>
      <text x="150" y="258" class="tx">Artysta <tspan class="tx-s">(opowiadanie satyryczne)</tspan></text>
    </svg>`,
    text: `<p>Oprócz całych książek musisz znać krótsze utwory i fragmenty dłuższych. Najłatwiej uczyć się ich „po autorach”.</p>
      <p>Z „Pana Tadeusza” zadania w części I arkusza dotyczą tylko fragmentów ksiąg I, II, IV, X, XI i XII – ale w wypracowaniu możesz odwołać się do całego utworu.</p>`,
    remember: 'Mickiewicz ×3, Kochanowski – treny i fraszki, Sienkiewicz – „Latarnik” i „Quo vadis”, Żeromski – „Syzyfowe prace”, Mrożek – „Artysta”.',
    check: { q: 'Kto napisał „Latarnika”?', options: ['Henryk Sienkiewicz', 'Adam Mickiewicz', 'Stefan Żeromski', 'Sławomir Mrożek'], answer: 0 },
  },
  {
    title: '„Pan Tadeusz” – księgi i spór o zamek',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Dwanaście ksiąg Pana Tadeusza, zaznaczone obowiązkowe I, II, IV, X, XI, XII; spór Sopliców i Horeszków o zamek; Jacek Soplica to ksiądz Robak, Gerwazy to klucznik Horeszków">
      <text x="210" y="16" class="tx-s" text-anchor="middle">księgi – zaznaczone są obowiązkowe</text>
      <rect x="8" y="24" width="30" height="30" rx="5" class="f3 s3 sw"/><text x="23" y="44" class="tx-s" text-anchor="middle" style="font-weight:bold">I</text>
      <rect x="42" y="24" width="30" height="30" rx="5" class="f3 s3 sw"/><text x="57" y="44" class="tx-s" text-anchor="middle" style="font-weight:bold">II</text>
      <rect x="76" y="24" width="30" height="30" rx="5" class="ln-thin dash"/><text x="91" y="44" class="tx-s" text-anchor="middle">III</text>
      <rect x="110" y="24" width="30" height="30" rx="5" class="f3 s3 sw"/><text x="125" y="44" class="tx-s" text-anchor="middle" style="font-weight:bold">IV</text>
      <rect x="144" y="24" width="30" height="30" rx="5" class="ln-thin dash"/><text x="159" y="44" class="tx-s" text-anchor="middle">V</text>
      <rect x="178" y="24" width="30" height="30" rx="5" class="ln-thin dash"/><text x="193" y="44" class="tx-s" text-anchor="middle">VI</text>
      <rect x="212" y="24" width="30" height="30" rx="5" class="ln-thin dash"/><text x="227" y="44" class="tx-s" text-anchor="middle">VII</text>
      <rect x="246" y="24" width="30" height="30" rx="5" class="ln-thin dash"/><text x="261" y="44" class="tx-s" text-anchor="middle">VIII</text>
      <rect x="280" y="24" width="30" height="30" rx="5" class="ln-thin dash"/><text x="295" y="44" class="tx-s" text-anchor="middle">IX</text>
      <rect x="314" y="24" width="30" height="30" rx="5" class="f3 s3 sw"/><text x="329" y="44" class="tx-s" text-anchor="middle" style="font-weight:bold">X</text>
      <rect x="348" y="24" width="30" height="30" rx="5" class="f3 s3 sw"/><text x="363" y="44" class="tx-s" text-anchor="middle" style="font-weight:bold">XI</text>
      <rect x="382" y="24" width="30" height="30" rx="5" class="f3 s3 sw"/><text x="397" y="44" class="tx-s" text-anchor="middle" style="font-weight:bold">XII</text>
      <line x1="106" y1="124" x2="160" y2="104" class="ln-thin dash"/>
      <line x1="314" y1="124" x2="260" y2="104" class="ln-thin dash"/>
      <rect x="130" y="68" width="160" height="36" rx="8" class="f4 s4 sw"/>
      <text x="210" y="92" class="tx" style="font-weight:bold" text-anchor="middle">🏰 spór o zamek</text>
      <rect x="8" y="124" width="196" height="56" rx="10" class="f1 s1 sw"/>
      <text x="106" y="148" class="tx-b" text-anchor="middle">Soplicowie</text>
      <text x="106" y="168" class="tx-s" text-anchor="middle">Jacek Soplica = ks. Robak</text>
      <rect x="216" y="124" width="196" height="56" rx="10" class="f2 s2 sw"/>
      <text x="314" y="148" class="tx-b" text-anchor="middle">Horeszkowie</text>
      <text x="314" y="168" class="tx-s" text-anchor="middle">Gerwazy – klucznik</text>
      <text x="210" y="210" class="tx" text-anchor="middle">Inwokacja: „Litwo! Ojczyzno moja!”</text>
      <text x="210" y="238" class="tx-s" text-anchor="middle">Księga XII: „Kochajmy się!”, koncert Jankiela, polonez</text>
    </svg>`,
    text: `<p>„Pan Tadeusz” Adama Mickiewicza to <b>epopeja</b>. Osią akcji jest spór rodów <b>Sopliców i Horeszków</b> o zamek. Tajemniczy ksiądz Robak okazuje się Jackiem Soplicą, a Gerwazy to klucznik Horeszków.</p>
      <p>Utwór pokazuje obraz szlachty i przyrody Litwy. Zaczyna się Inwokacją, a w księdze XII są: „Kochajmy się!”, koncert Jankiela i polonez.</p>`,
    remember: 'Księgi: <b>I, II, IV, X, XI, XII</b>. Jacek Soplica = ksiądz Robak. Gerwazy = klucznik Horeszków.',
    hook: 'Księgi „<b>1, 2, 4</b>” na początek i „<b>10, 11, 12</b>” na koniec – trzy z przodu, trzy z tyłu, a trójka wypada.',
    check: { q: 'Kim jest Gerwazy w „Panu Tadeuszu”?', options: ['klucznikiem Horeszków', 'księdzem Robakiem', 'Jankielem', 'Jackiem Soplicą'], answer: 0 },
  },
  {
    title: 'Mickiewicz: „Reduta Ordona” i „Świtezianka”',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Reduta Ordona: 1831, powstanie listopadowe, obrona Warszawy, relacja adiutanta, wysadzenie reduty. Świtezianka – ballada: przysięga, złamanie przysięgi, kara w jeziorze">
      <defs><marker id="a-pl-uk-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="6" y="6" width="200" height="208" rx="14" class="f2 s2 sw"/>
      <text x="106" y="34" class="tx-b" text-anchor="middle">Reduta Ordona</text>
      <text x="106" y="66" class="tx" style="font-weight:bold" text-anchor="middle">📅 1831</text>
      <text x="106" y="92" class="tx-s" text-anchor="middle">powstanie listopadowe</text>
      <text x="106" y="120" class="tx" text-anchor="middle">obrona Warszawy</text>
      <text x="106" y="148" class="tx-s" text-anchor="middle">relacja adiutanta</text>
      <text x="106" y="186" class="tx" style="font-weight:bold" text-anchor="middle">💥 wysadzenie</text>
      <text x="106" y="204" class="tx-s" text-anchor="middle">reduty</text>
      <rect x="214" y="6" width="200" height="208" rx="14" class="f1 s1 sw"/>
      <text x="314" y="34" class="tx-b" text-anchor="middle">Świtezianka</text>
      <text x="314" y="54" class="tx-s" text-anchor="middle">ballada</text>
      <rect x="230" y="66" width="168" height="34" rx="8" class="bg ln-thin"/>
      <text x="314" y="89" class="tx" text-anchor="middle">🤞 przysięga</text>
      <path d="M314,102 L314,118" class="ln" marker-end="url(#a-pl-uk-3)"/>
      <rect x="230" y="122" width="168" height="34" rx="8" class="bg ln-thin"/>
      <text x="314" y="145" class="tx" text-anchor="middle">💔 złamana</text>
      <path d="M314,158 L314,172" class="ln" marker-end="url(#a-pl-uk-3)"/>
      <rect x="230" y="176" width="168" height="32" rx="8" class="f2 s2"/>
      <text x="314" y="198" class="tx" style="font-weight:bold" text-anchor="middle">🌊 kara</text>
    </svg>`,
    text: `<p><b>„Reduta Ordona”</b> to relacja adiutanta z obrony Warszawy w powstaniu listopadowym (1831). Kończy się wysadzeniem reduty – utwór pokazuje bohaterstwo obrońców.</p>
      <p><b>„Świtezianka”</b> to ballada. Strzelec przysięga wierność tajemniczej dziewczynie, łamie przysięgę i zostaje ukarany – wciąga go toń jeziora Świteź.</p>`,
    remember: '„Reduta Ordona” → 1831, powstanie listopadowe. „Świtezianka” → ballada o złamanej przysiędze.',
    hook: 'Świtezianka – od jeziora <b>Świteź</b>. Złamiesz słowo – jezioro się upomni.',
    check: { q: 'Za co został ukarany strzelec w „Świteziance”?', options: ['za kłusownictwo', 'za złamanie przysięgi wierności', 'za tchórzostwo w bitwie', 'za kradzież'], answer: 1 },
  },
  {
    title: 'Kochanowski: treny i fraszki',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Tren VII – ubranka córki, Tren VIII – pustka w domu; fraszka – krótki utwór zakończony puentą">
      <text x="146" y="22" class="tx" style="font-weight:bold" text-anchor="middle">Treny – po śmierci córki Urszulki</text>
      <rect x="10" y="34" width="130" height="110" rx="12" class="f5 s5 sw"/>
      <text x="75" y="60" class="tx-b" text-anchor="middle">Tren VII</text>
      <text x="75" y="104" class="tx" style="font-size:34px" text-anchor="middle">👗</text>
      <text x="75" y="132" class="tx-s" text-anchor="middle">ubranka córki</text>
      <rect x="152" y="34" width="130" height="110" rx="12" class="f5 s5 sw"/>
      <text x="217" y="60" class="tx-b" text-anchor="middle">Tren VIII</text>
      <text x="217" y="104" class="tx" style="font-size:34px" text-anchor="middle">🏠</text>
      <text x="217" y="132" class="tx-s" text-anchor="middle">pustka w domu</text>
      <rect x="296" y="34" width="118" height="110" rx="12" class="f4 s4 sw"/>
      <text x="355" y="60" class="tx-b" text-anchor="middle">Fraszka</text>
      <line x1="312" y1="76" x2="398" y2="76" class="ln-thin"/>
      <line x1="312" y1="88" x2="390" y2="88" class="ln-thin"/>
      <line x1="312" y1="100" x2="396" y2="100" class="ln-thin"/>
      <text x="355" y="130" class="tx t2" style="font-weight:bold" text-anchor="middle">💥 puenta</text>
      <text x="210" y="184" class="tx" text-anchor="middle">„Wielkieś mi uczyniła pustki w domu moim”</text>
      <text x="210" y="202" class="tx-s" text-anchor="middle">Tren VIII</text>
    </svg>`,
    text: `<p><b>Treny</b> Jana Kochanowskiego to utwory żałobne napisane po śmierci córki, Urszulki. Obowiązkowe są dwa: <b>Tren VII</b> (o ubrankach córki) i <b>Tren VIII</b> („Wielkieś mi uczyniła pustki w domu moim”).</p>
      <p><b>Fraszki</b> to krótkie, żartobliwe albo refleksyjne utwory zakończone <b>puentą</b> – zaskakującą, celną myślą na końcu.</p>`,
    remember: 'Obowiązkowe treny: <b>VII i VIII</b>. Treny I i V wykreślono z podstawy – można się do nich odwołać, ale nie są obowiązkowe.',
    hook: '„Siedem – sukienki, osiem – pustka”: VII o ubrankach, VIII o pustym domu.',
    check: { q: 'Które treny Kochanowskiego są lekturą obowiązkową?', options: ['I i V', 'VII i VIII', 'tylko XIX', 'wszystkie'], answer: 1 },
  },
  {
    title: 'Sienkiewicz i Żeromski',
    svg: `<svg viewBox="0 0 420 262" role="img" aria-label="Latarnik: tułacz Skawiński zostaje latarnikiem w Aspinwall, czyta Pana Tadeusza, nie zapala latarni i traci posadę. Quo vadis: Rzym za Nerona. Syzyfowe prace: rusyfikacja w gimnazjum w Klerykowie">
      <defs><marker id="a-pl-uk-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <text x="8" y="16" class="tx-s" style="font-weight:bold">LATARNIK – nowela</text>
      <rect x="6" y="24" width="94" height="52" rx="10" class="f4 s4 sw"/>
      <text x="53" y="46" class="tx" style="font-weight:bold" text-anchor="middle">🧳 tułacz</text>
      <text x="53" y="66" class="tx-s" text-anchor="middle">Skawiński</text>
      <path d="M101,50 L109,50" class="ln" marker-end="url(#a-pl-uk-5)"/>
      <rect x="112" y="24" width="94" height="52" rx="10" class="f4 s4 sw"/>
      <text x="159" y="46" class="tx" style="font-weight:bold" text-anchor="middle">🗼 latarnik</text>
      <text x="159" y="66" class="tx-s" text-anchor="middle">Aspinwall</text>
      <path d="M207,50 L215,50" class="ln" marker-end="url(#a-pl-uk-5)"/>
      <rect x="218" y="24" width="94" height="52" rx="10" class="f4 s4 sw"/>
      <text x="265" y="46" class="tx" style="font-weight:bold" text-anchor="middle">📖 czyta</text>
      <text x="265" y="66" class="tx-s" text-anchor="middle">Pana Tadeusza</text>
      <path d="M313,50 L319,50" class="ln" marker-end="url(#a-pl-uk-5)"/>
      <rect x="322" y="24" width="94" height="52" rx="10" class="f2 s2 sw"/>
      <text x="369" y="46" class="tx" style="font-weight:bold" text-anchor="middle">🌑 ciemno</text>
      <text x="369" y="66" class="tx-s" text-anchor="middle">traci posadę</text>
      <text x="210" y="98" class="tx-s" text-anchor="middle">temat: tęsknota za ojczyzną</text>
      <rect x="6" y="112" width="200" height="144" rx="12" class="f2 s2 sw"/>
      <text x="106" y="136" class="tx-b" text-anchor="middle">Quo vadis</text>
      <text x="106" y="156" class="tx-s" text-anchor="middle">powieść historyczna</text>
      <text x="106" y="180" class="tx" text-anchor="middle">Rzym za Nerona</text>
      <text x="106" y="202" class="tx-s" text-anchor="middle">Winicjusz, Ligia,</text>
      <text x="106" y="220" class="tx-s" text-anchor="middle">Ursus, Petroniusz</text>
      <text x="106" y="242" class="tx-s" text-anchor="middle">pożar Rzymu, chrześcijanie</text>
      <rect x="214" y="112" width="200" height="144" rx="12" class="f3 s3 sw"/>
      <text x="314" y="136" class="tx-b" text-anchor="middle">Syzyfowe prace</text>
      <text x="314" y="156" class="tx-s" text-anchor="middle">Żeromski</text>
      <text x="314" y="180" class="tx" text-anchor="middle">rusyfikacja</text>
      <text x="314" y="202" class="tx-s" text-anchor="middle">gimnazjum w Klerykowie</text>
      <text x="314" y="220" class="tx-s" text-anchor="middle">Borowicz, Radek</text>
      <text x="314" y="242" class="tx-s" text-anchor="middle">Zygier: „Reduta Ordona”</text>
    </svg>`,
    text: `<p><b>„Latarnik”</b> Henryka Sienkiewicza to nowela. Stary tułacz Skawiński zostaje latarnikiem w Aspinwall. Zaczytany w „Panu Tadeuszu” nie zapala latarni i traci posadę.</p>
      <p><b>„Quo vadis”</b> (fragmenty) – Rzym za Nerona, pożar Rzymu i prześladowania chrześcijan. <b>„Syzyfowe prace”</b> Stefana Żeromskiego (fragmenty) – rusyfikacja polskiej młodzieży w zaborze rosyjskim; Bernard Zygier recytuje na lekcji „Redutę Ordona” i budzi patriotyzm uczniów.</p>`,
    remember: '„Latarnik” = nowela o tęsknocie. „Quo vadis” = Rzym za Nerona. „Syzyfowe prace” = rusyfikacja w szkole.',
    hook: 'W obu lekturach ktoś sięga po Mickiewicza: Skawiński czyta „Pana Tadeusza”, a Zygier recytuje „Redutę Ordona”.',
    check: { q: 'Dlaczego Skawiński stracił posadę?', options: ['zasnął na warcie', 'zaczytał się w „Panu Tadeuszu” i nie zapalił latarni', 'pokłócił się z konsulem', 'uciekł z latarni'], answer: 1 },
  },
  {
    title: 'Podsumowanie: wszystko się łączy',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Powiązania: Latarnik – czyta – Pan Tadeusz; Syzyfowe prace – recytacja – Reduta Ordona; Inwokacja – to – apostrofa; Świtezianka – gatunek – ballada">
      <defs><marker id="a-pl-uk-6" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="6" y="8" width="160" height="40" rx="10" class="f4 s4 sw"/><text x="86" y="33" class="tx" style="font-weight:bold" text-anchor="middle">Latarnik</text>
      <text x="210" y="19" class="tx-s" text-anchor="middle">czyta</text>
      <path d="M170,28 L248,28" class="ln" marker-end="url(#a-pl-uk-6)"/>
      <rect x="254" y="8" width="160" height="40" rx="10" class="f1 s1 sw"/><text x="334" y="33" class="tx" style="font-weight:bold" text-anchor="middle">Pan Tadeusz</text>
      <rect x="6" y="60" width="160" height="40" rx="10" class="f3 s3 sw"/><text x="86" y="85" class="tx" style="font-weight:bold" text-anchor="middle">Syzyfowe prace</text>
      <text x="210" y="71" class="tx-s" text-anchor="middle">recytacja</text>
      <path d="M170,80 L248,80" class="ln" marker-end="url(#a-pl-uk-6)"/>
      <rect x="254" y="60" width="160" height="40" rx="10" class="f2 s2 sw"/><text x="334" y="85" class="tx" style="font-weight:bold" text-anchor="middle">Reduta Ordona</text>
      <rect x="6" y="112" width="160" height="40" rx="10" class="f1 s1 sw"/><text x="86" y="137" class="tx" style="font-weight:bold" text-anchor="middle">Inwokacja</text>
      <text x="210" y="123" class="tx-s" text-anchor="middle">to środek:</text>
      <path d="M170,132 L248,132" class="ln" marker-end="url(#a-pl-uk-6)"/>
      <rect x="254" y="112" width="160" height="40" rx="10" class="f5 s5 sw"/><text x="334" y="137" class="tx" style="font-weight:bold" text-anchor="middle">apostrofa</text>
      <rect x="6" y="164" width="160" height="40" rx="10" class="f1 s1 sw"/><text x="86" y="189" class="tx" style="font-weight:bold" text-anchor="middle">Świtezianka</text>
      <text x="210" y="175" class="tx-s" text-anchor="middle">gatunek</text>
      <path d="M170,184 L248,184" class="ln" marker-end="url(#a-pl-uk-6)"/>
      <rect x="254" y="164" width="160" height="40" rx="10" class="f5 s5 sw"/><text x="334" y="189" class="tx" style="font-weight:bold" text-anchor="middle">ballada</text>
    </svg>`,
    text: `<p>Lektury łączą się ze sobą i z teorią – to świetny materiał do wypracowania i do zadań z części I.</p>
      <p><b>Uważaj na pułapki:</b> obowiązkowe treny to VII i VIII; zadania z „Pana Tadeusza” w części I dotyczą tylko ksiąg I, II, IV, X, XI, XII; „Latarnik” to nowela, a „Świtezianka” – ballada.</p>`,
    remember: 'Inwokacja „Litwo! Ojczyzno moja!” jest jednocześnie <b>apostrofą</b> – uroczystym zwrotem do ojczyzny.',
    hook: 'Ucz się w parach: <b>Latarnik + Pan Tadeusz</b>, <b>Syzyfowe prace + Reduta Ordona</b>. Jedna lektura przypomina drugą.',
    check: { q: 'Który utwór recytuje Bernard Zygier w „Syzyfowych pracach”?', options: ['„Świteziankę”', '„Redutę Ordona”', '„Pana Tadeusza”', 'Tren VIII'], answer: 1 },
  },
];

/* ===================== LEKTURY KL. IV–VI ===================== */
window.LESSONS['polski/lektury-4-6'] = [
  {
    title: 'Pięć lektur z klas IV–VI',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Lektury klas 4–6: Akademia Pana Kleksa, Kajko i Kokosz, Opowieści z Narnii, Chłopcy z Placu Broni, Hobbit; ostrzeżenie: na egzamin 2027 ucz się całych lektur">
      <rect x="6" y="6" width="200" height="60" rx="12" class="f1 s1 sw"/>
      <text x="106" y="32" class="tx" style="font-weight:bold" text-anchor="middle">Akademia Pana Kleksa</text>
      <text x="106" y="54" class="tx-s" text-anchor="middle">🎩 Jan Brzechwa</text>
      <rect x="214" y="6" width="200" height="60" rx="12" class="f4 s4 sw"/>
      <text x="314" y="32" class="tx" style="font-weight:bold" text-anchor="middle">Kajko i Kokosz</text>
      <text x="314" y="54" class="tx-s" text-anchor="middle">💬 Janusz Christa · komiks</text>
      <rect x="6" y="72" width="200" height="60" rx="12" class="f5 s5 sw"/>
      <text x="106" y="98" class="tx" style="font-weight:bold" text-anchor="middle">Opowieści z Narnii</text>
      <text x="106" y="120" class="tx-s" text-anchor="middle">🦁 C.S. Lewis</text>
      <rect x="214" y="72" width="200" height="60" rx="12" class="f3 s3 sw"/>
      <text x="314" y="98" class="tx" style="font-weight:bold" text-anchor="middle">Chłopcy z Placu Broni</text>
      <text x="314" y="120" class="tx-s" text-anchor="middle">🧒 Ferenc Molnár</text>
      <rect x="6" y="138" width="200" height="60" rx="12" class="f1 s1 sw"/>
      <text x="106" y="164" class="tx" style="font-weight:bold" text-anchor="middle">Hobbit</text>
      <text x="106" y="186" class="tx-s" text-anchor="middle">🐉 J.R.R. Tolkien</text>
      <rect x="214" y="138" width="200" height="60" rx="12" class="f2 s2 sw"/>
      <text x="314" y="164" class="tx" style="font-weight:bold" text-anchor="middle">⚠️ egzamin 2027</text>
      <text x="314" y="186" class="tx-s" text-anchor="middle">ucz się całych lektur</text>
    </svg>`,
    text: `<p>Te lektury znasz z młodszych klas, ale na egzaminie też mogą się pojawić. W informatorze CKE zapisano, że w latach szkolnych 2024/2025 i 2025/2026 zadania z nich dotyczą tylko fragmentu wydrukowanego w arkuszu.</p>
      <p>Dla egzaminu w 2027 r. takiego zastrzeżenia nie ma, więc <b>bezpieczniej znać treść całych lektur</b>. Zapytaj nauczyciela, czy CKE wydała nowy komunikat.</p>`,
    remember: 'Na egzamin 2027 powtórz <b>całe</b> lektury IV–VI – kto jest kim i co się wydarzyło.',
    check: { q: 'Jakim tekstem kultury jest „Kajko i Kokosz. Szkoła latania”?', options: ['komiksem', 'baśnią w wierszu', 'dramatem', 'filmem'], answer: 0 },
  },
  {
    title: '„Akademia Pana Kleksa” – kto jest kim?',
    svg: `<svg viewBox="0 0 420 196" role="img" aria-label="Mapa postaci Akademii Pana Kleksa: Pan Kleks, jego przeciwnik golibroda Filip, narrator Adaś Niezgódka, szpak Mateusz – zaczarowany książę; do akademii przyjmowani są chłopcy o imionach na A">
      <line x1="210" y1="116" x2="81" y2="136" class="ln-thin"/>
      <line x1="230" y1="116" x2="339" y2="136" class="ln-thin"/>
      <rect x="110" y="6" width="200" height="36" rx="10" class="f4 s4 sw"/>
      <text x="210" y="30" class="tx" style="font-weight:bold" text-anchor="middle">🅰️ imiona tylko na A</text>
      <line x1="220" y1="42" x2="220" y2="70" class="ln-thin dash"/>
      <rect x="6" y="70" width="112" height="48" rx="10" class="f2 s2 sw"/>
      <text x="62" y="92" class="tx" style="font-weight:bold" text-anchor="middle">Filip</text>
      <text x="62" y="110" class="tx-s" text-anchor="middle">golibroda</text>
      <text x="139" y="100" class="tx" text-anchor="middle">⚔️</text>
      <rect x="160" y="70" width="140" height="46" rx="10" class="f1 s1 sw"/>
      <text x="230" y="99" class="tx-b" text-anchor="middle">🎩 Pan Kleks</text>
      <rect x="6" y="136" width="150" height="52" rx="10" class="f3 s3 sw"/>
      <text x="81" y="159" class="tx" style="font-weight:bold" text-anchor="middle">Adaś Niezgódka</text>
      <text x="81" y="178" class="tx-s" text-anchor="middle">uczeń i narrator</text>
      <rect x="264" y="136" width="150" height="52" rx="10" class="f5 s5 sw"/>
      <text x="339" y="159" class="tx" style="font-weight:bold" text-anchor="middle">🐦 szpak Mateusz</text>
      <text x="339" y="178" class="tx-s" text-anchor="middle">zaczarowany książę</text>
    </svg>`,
    text: `<p>Narratorem jest <b>Adaś Niezgódka</b>, uczeń niezwykłej akademii, do której przyjmowani są tylko chłopcy o imionach na literę <b>A</b>.</p>
      <p><b>Szpak Mateusz</b> to zaczarowany książę. Przeciwnikiem pana Kleksa jest <b>golibroda Filip</b>.</p>`,
    remember: 'Adaś Niezgódka – narrator. Szpak Mateusz – zaczarowany książę. Golibroda Filip – przeciwnik pana Kleksa.',
    hook: '<b>A</b>kademia, <b>A</b>daś – w tej szkole wszystko zaczyna się na „A”.',
    check: { q: 'Kim jest szpak Mateusz?', options: ['zaczarowanym księciem', 'golibrodą', 'narratorem', 'bratem Adasia'], answer: 0 },
  },
  {
    title: '„Opowieści z Narnii” – przez szafę do wiecznej zimy',
    svg: `<svg viewBox="0 0 420 246" role="img" aria-label="Rodzeństwo Pevensie przechodzi przez szafę do Narnii, gdzie Biała Czarownica sprawiła wieczną zimę; Edmund zdradza, Aslan oddaje za niego życie i zmartwychwstaje">
      <defs><marker id="a-pl-l46-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="20" y="10" width="64" height="84" rx="4" class="f4 s4 sw"/>
      <line x1="52" y1="12" x2="52" y2="92" class="s4" stroke-width="2"/>
      <circle cx="46" cy="52" r="3" class="t4"/><circle cx="58" cy="52" r="3" class="t4"/>
      <text x="52" y="112" class="tx-s" text-anchor="middle">szafa</text>
      <path d="M92,52 L140,52" class="ln" marker-end="url(#a-pl-l46-3)"/>
      <rect x="148" y="10" width="266" height="88" rx="12" class="f1 s1 sw"/>
      <text x="281" y="38" class="tx-b" text-anchor="middle">❄️ Narnia</text>
      <text x="281" y="62" class="tx-s" text-anchor="middle">Biała Czarownica sprawiła</text>
      <text x="281" y="86" class="tx" style="font-weight:bold" text-anchor="middle">wieczną zimę</text>
      <text x="210" y="134" class="tx-s" text-anchor="middle">rodzeństwo Pevensie</text>
      <rect x="6" y="142" width="96" height="34" rx="8" class="bg ln-thin"/><text x="54" y="164" class="tx" text-anchor="middle">Piotr</text>
      <rect x="110" y="142" width="96" height="34" rx="8" class="bg ln-thin"/><text x="158" y="164" class="tx" text-anchor="middle">Zuzanna</text>
      <rect x="214" y="142" width="96" height="34" rx="8" class="f2 s2 sw"/><text x="262" y="164" class="tx" style="font-weight:bold" text-anchor="middle">Edmund</text>
      <rect x="318" y="142" width="96" height="34" rx="8" class="bg ln-thin"/><text x="366" y="164" class="tx" text-anchor="middle">Łucja</text>
      <text x="262" y="194" class="tx-s t2" style="font-weight:bold" text-anchor="middle">zdradza</text>
      <rect x="6" y="202" width="408" height="40" rx="10" class="f4 s4 sw"/>
      <text x="210" y="227" class="tx" text-anchor="middle">🦁 <tspan style="font-weight:bold">Aslan</tspan> ginie za Edmunda i zmartwychwstaje</text>
    </svg>`,
    text: `<p>Rodzeństwo Pevensie – <b>Piotr, Zuzanna, Edmund i Łucja</b> – przez starą szafę trafia do Narnii. <b>Biała Czarownica</b> sprawiła, że panuje tam wieczna zima.</p>
      <p><b>Edmund</b> zdradza rodzeństwo. Lew <b>Aslan</b>, prawowity władca Narnii, oddaje za niego życie i zmartwychwstaje.</p>`,
    remember: 'Edmund zdradza → Aslan oddaje za niego życie → zmartwychwstaje.',
    hook: '<b>Biała</b> Czarownica = <b>biały</b> śnieg = wieczna zima.',
    check: { q: 'Kto zdradził rodzeństwo w „Opowieściach z Narnii”?', options: ['Piotr', 'Edmund', 'Łucja', 'Zuzanna'], answer: 1 },
  },
  {
    title: '„Chłopcy z Placu Broni” – walka o plac',
    svg: `<svg viewBox="0 0 420 246" role="img" aria-label="Chłopcy z Placu Broni: wódz Boka, szeregowiec Nemeczek, zdrajca Gereb; przeciwnicy – Czerwone Koszule z wodzem Feri Aczem; zakończenie: Nemeczek umiera, plac ma zostać zabudowany">
      <text x="91" y="20" class="tx-s t3" style="font-weight:bold" text-anchor="middle">CHŁOPCY Z PLACU BRONI</text>
      <text x="329" y="20" class="tx-s t2" style="font-weight:bold" text-anchor="middle">CZERWONE KOSZULE</text>
      <rect x="6" y="28" width="170" height="46" rx="10" class="f3 s3 sw"/>
      <text x="91" y="48" class="tx" style="font-weight:bold" text-anchor="middle">Boka</text>
      <text x="91" y="66" class="tx-s" text-anchor="middle">wódz</text>
      <rect x="6" y="80" width="170" height="46" rx="10" class="f1 s1 sw"/>
      <text x="91" y="100" class="tx" style="font-weight:bold" text-anchor="middle">Nemeczek</text>
      <text x="91" y="118" class="tx-s" text-anchor="middle">najmłodszy, szeregowiec</text>
      <rect x="6" y="132" width="170" height="46" rx="10" class="f5 s5 sw"/>
      <text x="91" y="152" class="tx" style="font-weight:bold" text-anchor="middle">Gereb</text>
      <text x="91" y="170" class="tx-s" text-anchor="middle">zdradza kolegów</text>
      <text x="210" y="58" class="tx" text-anchor="middle">⚔️</text>
      <rect x="244" y="28" width="170" height="46" rx="10" class="f2 s2 sw"/>
      <text x="329" y="48" class="tx" style="font-weight:bold" text-anchor="middle">Feri Acz</text>
      <text x="329" y="66" class="tx-s" text-anchor="middle">wódz</text>
      <rect x="244" y="80" width="170" height="98" rx="10" class="f4 s4 sw dash"/>
      <text x="329" y="116" class="tx-b" text-anchor="middle">🏟️ plac</text>
      <text x="329" y="140" class="tx-s" text-anchor="middle">plac zabaw chłopców</text>
      <text x="329" y="160" class="tx-s" text-anchor="middle">📍 Budapeszt</text>
      <rect x="6" y="194" width="408" height="44" rx="10" class="f2 s2 sw"/>
      <text x="210" y="221" class="tx" text-anchor="middle">Nemeczek umiera · plac ma zostać zabudowany</text>
    </svg>`,
    text: `<p>Chłopcy z Budapesztu bronią swojego placu zabaw przed <b>Czerwonymi Koszulami</b>, których wodzem jest <b>Feri Acz</b>. Wodzem chłopców jest <b>Boka</b>, a <b>Gereb</b> zdradza kolegów.</p>
      <p>Najmłodszy, szeregowiec <b>Nemeczek</b>, choruje po kąpielach w zimnej wodzie i umiera. Na końcu okazuje się, że plac ma zostać zabudowany.</p>`,
    remember: 'Boka – wódz chłopców · Feri Acz – wódz Czerwonych Koszul · Nemeczek – najmłodszy, umiera · Gereb – zdrajca.',
    hook: '<b>B</b>oka <b>b</b>roni placu, <b>F</b>eri Acz chce go zdobyć – dwaj wodzowie, dwie drużyny.',
    check: { q: 'Kim był Feri Acz?', options: ['wodzem Czerwonych Koszul', 'wodzem chłopców z Placu Broni', 'najmłodszym szeregowcem', 'bratem Nemeczka'], answer: 0 },
  },
  {
    title: '„Hobbit” – tam i z powrotem',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Droga Bilba: z domu, przez spotkanie z Gollumem i grę w zagadki, do Samotnej Góry, gdzie jest smok Smaug, i z powrotem; smoka zabija Bard">
      <defs><marker id="a-pl-l46-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <text x="210" y="20" class="tx" text-anchor="middle">Bilbo + Gandalf + 13 krasnoludów (Thorin)</text>
      <rect x="6" y="34" width="110" height="86" rx="12" class="f3 s3 sw"/>
      <text x="61" y="70" class="tx" style="font-size:30px" text-anchor="middle">🏡</text>
      <text x="61" y="94" class="tx" style="font-weight:bold" text-anchor="middle">Bilbo</text>
      <text x="61" y="112" class="tx-s" text-anchor="middle">hobbit</text>
      <path d="M120,77 L150,77" class="ln" marker-end="url(#a-pl-l46-5)"/>
      <rect x="155" y="34" width="110" height="86" rx="12" class="f5 s5 sw"/>
      <text x="210" y="70" class="tx" style="font-size:30px" text-anchor="middle">💍</text>
      <text x="210" y="94" class="tx" style="font-weight:bold" text-anchor="middle">Gollum</text>
      <text x="210" y="112" class="tx-s" text-anchor="middle">gra w zagadki</text>
      <path d="M269,77 L299,77" class="ln" marker-end="url(#a-pl-l46-5)"/>
      <rect x="304" y="34" width="110" height="86" rx="12" class="f2 s2 sw"/>
      <text x="359" y="70" class="tx" style="font-size:30px" text-anchor="middle">🐉</text>
      <text x="359" y="94" class="tx" style="font-weight:bold" text-anchor="middle">Smaug</text>
      <text x="359" y="112" class="tx-s" text-anchor="middle">Samotna Góra</text>
      <path d="M359,124 Q210,170 61,124" class="ln dash" marker-end="url(#a-pl-l46-5)"/>
      <text x="210" y="164" class="tx-s" text-anchor="middle">…i z powrotem</text>
      <rect x="110" y="172" width="200" height="40" rx="10" class="f4 s4 sw"/>
      <text x="210" y="198" class="tx" text-anchor="middle">Smoka zabija <tspan style="font-weight:bold">Bard</tspan></text>
    </svg>`,
    text: `<p>Hobbit <b>Bilbo Baggins</b> wyrusza z czarodziejem <b>Gandalfem</b> i trzynastoma krasnoludami (ich wodzem jest <b>Thorin Dębowa Tarcza</b>) po skarb strzeżony przez smoka <b>Smauga</b> w Samotnej Górze.</p>
      <p>Po drodze Bilbo zdobywa pierścień – przechytrza <b>Golluma</b> w grze w zagadki. Smoka zabija <b>Bard</b>.</p>`,
    remember: 'Pierścień – od Golluma (gra w zagadki). Smok Smaug – zabity przez Barda, nie przez Bilba!',
    hook: 'Pułapka testowa: wszyscy myślą, że smoka pokonał główny bohater. Nic z tego – to <b>B</b>ard, nie <b>B</b>ilbo.',
    check: { q: 'Kto zabił smoka Smauga?', options: ['Bilbo', 'Thorin', 'Bard', 'Gandalf'], answer: 2 },
  },
  {
    title: '„Kajko i Kokosz” i szybka powtórka',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Kajko i Kokosz: gród Mirmiłowo z kasztelanem Mirmiłem, dzielni wojowie Kajko i Kokosz, Zbójcerze z Hegemonem; powtórka: kto z jakiej lektury">
      <rect x="6" y="6" width="132" height="80" rx="6" class="f4 s4 sw"/>
      <text x="72" y="32" class="tx-b" text-anchor="middle">Mirmiłowo</text>
      <text x="72" y="54" class="tx-s" text-anchor="middle">gród</text>
      <text x="72" y="72" class="tx-s" text-anchor="middle">kasztelan Mirmił</text>
      <rect x="144" y="6" width="132" height="80" rx="6" class="f3 s3 sw"/>
      <text x="210" y="30" class="tx-b" text-anchor="middle">Kajko</text>
      <text x="210" y="50" class="tx-b" text-anchor="middle">i Kokosz</text>
      <text x="210" y="72" class="tx-s" text-anchor="middle">dzielni wojowie</text>
      <rect x="282" y="6" width="132" height="80" rx="6" class="f2 s2 sw"/>
      <text x="348" y="32" class="tx-b" text-anchor="middle">Zbójcerze</text>
      <text x="348" y="54" class="tx-s" text-anchor="middle">przeciwnicy</text>
      <text x="348" y="72" class="tx-s" text-anchor="middle">wódz: Hegemon</text>
      <text x="210" y="114" class="tx-b" text-anchor="middle">Szybka powtórka: kto skąd?</text>
      <text x="16" y="142" class="tx">Adaś → Kleks</text>
      <text x="16" y="168" class="tx">Feri Acz → Plac Broni</text>
      <text x="16" y="194" class="tx">Smaug → Hobbit</text>
      <text x="230" y="142" class="tx">Łucja → Narnia</text>
      <text x="230" y="168" class="tx">Gollum → Hobbit</text>
      <text x="230" y="194" class="tx">Mateusz → Kleks</text>
    </svg>`,
    text: `<p><b>„Kajko i Kokosz. Szkoła latania”</b> Janusza Christy to <b>komiks</b>. Dzielni wojowie Kajko i Kokosz mieszkają w grodzie Mirmiłowo, którym rządzi kasztelan Mirmił. Ich przeciwnikami są Zbójcerze z Hegemonem na czele.</p>
      <p>Na koniec sprawdź się: czy umiesz przypisać każdą postać do jej książki? To najczęstszy typ pytań o lektury.</p>`,
    remember: 'Mirmiłowo – gród Kajka i Kokosza. Hegemon – wódz Zbójcerzy.',
    hook: '<b>Mirmił</b> i <b>Mirmił</b>owo – łatwo zapamiętać, kto tu rządzi.',
    check: { q: 'Kto jest wodzem Zbójcerzy?', options: ['Hegemon', 'Mirmił', 'Kokosz', 'Feri Acz'], answer: 0 },
  },
];

/* ===================== RODZAJE I GATUNKI LITERACKIE ===================== */
window.LESSONS['polski/rodzaje-literackie'] = [
  {
    title: 'Trzy rodzaje literackie i ballada pośrodku',
    svg: `<svg viewBox="0 0 420 244" role="img" aria-label="Trójkąt rodzajów literackich: liryka u góry, epika i dramat na dole, ballada pośrodku łączy wszystkie trzy">
      <line x1="210" y1="34" x2="76" y2="208" class="ln-thin dash"/>
      <line x1="210" y1="34" x2="344" y2="208" class="ln-thin dash"/>
      <line x1="76" y1="208" x2="344" y2="208" class="ln-thin dash"/>
      <rect x="140" y="6" width="140" height="56" rx="12" class="f5 s5 sw"/>
      <text x="210" y="30" class="tx-b t5" text-anchor="middle">LIRYKA</text>
      <text x="210" y="50" class="tx-s" text-anchor="middle">❤️ wyraża uczucia</text>
      <rect x="6" y="180" width="140" height="56" rx="12" class="f1 s1 sw"/>
      <text x="76" y="204" class="tx-b t1" text-anchor="middle">EPIKA</text>
      <text x="76" y="224" class="tx-s" text-anchor="middle">📖 opowiada</text>
      <rect x="274" y="180" width="140" height="56" rx="12" class="f2 s2 sw"/>
      <text x="344" y="204" class="tx-b t2" text-anchor="middle">DRAMAT</text>
      <text x="344" y="224" class="tx-s" text-anchor="middle">🎭 gra na scenie</text>
      <rect x="145" y="112" width="130" height="54" rx="27" class="f4 s4 sw"/>
      <text x="210" y="136" class="tx-b" text-anchor="middle">Ballada</text>
      <text x="210" y="155" class="tx-s" text-anchor="middle">wszystko naraz</text>
    </svg>`,
    text: `<ul><li><b>Epika</b> – jest narrator, fabuła i świat przedstawiony, zwykle proza.</li>
      <li><b>Liryka</b> – mówi podmiot liryczny, wyraża uczucia i przeżycia, zwykle wiersz.</li>
      <li><b>Dramat</b> – przeznaczony do wystawienia na scenie: dialogi, didaskalia, podział na akty i sceny.</li></ul>
      <p><b>Ballada</b> łączy cechy wszystkich trzech – to tzw. synkretyzm rodzajowy (np. „Świtezianka”).</p>`,
    remember: 'Ballada = liryka + epika + dramat (synkretyzm rodzajowy).',
    hook: '<b>Epika opowiada, liryka czuje, dramat gra.</b>',
    check: { q: '„Świtezianka” łączy cechy liryki, epiki i dramatu, bo jest…', options: ['balladą', 'nowelą', 'fraszką', 'komedią'], answer: 0 },
  },
  {
    title: 'Kto mówi w utworze?',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Kto mówi: w epice narrator, w liryce podmiot liryczny (nie zawsze autor), w dramacie postacie w dialogach, a didaskalia to tekst poboczny">
      <rect x="6" y="6" width="132" height="196" rx="14" class="f1 s1 sw"/>
      <text x="72" y="32" class="tx-b t1" text-anchor="middle">EPIKA</text>
      <text x="72" y="80" class="tx" style="font-size:34px" text-anchor="middle">📖</text>
      <text x="72" y="118" class="tx" style="font-weight:bold" text-anchor="middle">narrator</text>
      <text x="72" y="140" class="tx-s" text-anchor="middle">opowiada</text>
      <text x="72" y="158" class="tx-s" text-anchor="middle">historię</text>
      <rect x="144" y="6" width="132" height="196" rx="14" class="f5 s5 sw"/>
      <text x="210" y="32" class="tx-b t5" text-anchor="middle">LIRYKA</text>
      <text x="210" y="80" class="tx" style="font-size:34px" text-anchor="middle">💭</text>
      <text x="210" y="118" class="tx" style="font-weight:bold" text-anchor="middle">podmiot</text>
      <text x="210" y="138" class="tx" style="font-weight:bold" text-anchor="middle">liryczny</text>
      <text x="210" y="160" class="tx-s" text-anchor="middle">„ja” w wierszu –</text>
      <text x="210" y="178" class="tx-s t2" style="font-weight:bold" text-anchor="middle">nie zawsze autor!</text>
      <rect x="282" y="6" width="132" height="196" rx="14" class="f2 s2 sw"/>
      <text x="348" y="32" class="tx-b t2" text-anchor="middle">DRAMAT</text>
      <text x="348" y="80" class="tx" style="font-size:34px" text-anchor="middle">🎭</text>
      <text x="348" y="118" class="tx" style="font-weight:bold" text-anchor="middle">dialogi</text>
      <text x="348" y="136" class="tx-s" text-anchor="middle">tekst główny</text>
      <text x="348" y="164" class="tx" style="font-weight:bold" text-anchor="middle">didaskalia</text>
      <text x="348" y="182" class="tx-s" text-anchor="middle">tekst poboczny</text>
    </svg>`,
    text: `<p>W <b>epice</b> opowiada <b>narrator</b>. Narrator pierwszoosobowy mówi o sobie i sam uczestniczy w wydarzeniach.</p>
      <p>W <b>liryce</b> mówi <b>podmiot liryczny</b> – „ja” utworu. Uwaga: to nie zawsze sam autor!</p>
      <p>W <b>dramacie</b> mówią postacie (dialogi – tekst główny), a <b>didaskalia</b> (tekst poboczny) to wskazówki dla aktorów i reżysera.</p>`,
    remember: 'Epika → narrator. Liryka → podmiot liryczny. Dramat → dialogi + didaskalia.',
    hook: 'Didaskalia to „instrukcja obsługi” sceny – podpowiadają aktorom i reżyserowi, co robić.',
    check: { q: 'Jak nazywa się tekst poboczny w dramacie (wskazówki dla aktorów)?', options: ['didaskalia', 'monolog', 'prolog', 'puenta'], answer: 0 },
  },
  {
    title: 'Gatunki w trzech szufladach',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Gatunki: epika – powieść, nowela, opowiadanie, baśń, legenda, mit, epopeja; liryka – fraszka, tren, hymn, pieśń, sonet; dramat – komedia, tragedia, dramat romantyczny">
      <rect x="6" y="6" width="132" height="210" rx="12" class="f1 s1 sw"/>
      <text x="72" y="32" class="tx-b t1" text-anchor="middle">📖 EPIKA</text>
      <line x1="16" y1="42" x2="128" y2="42" class="ln-thin"/>
      <text x="72" y="64" class="tx" text-anchor="middle">powieść</text>
      <text x="72" y="86" class="tx" text-anchor="middle">nowela</text>
      <text x="72" y="108" class="tx" text-anchor="middle">opowiadanie</text>
      <text x="72" y="130" class="tx" text-anchor="middle">baśń</text>
      <text x="72" y="152" class="tx" text-anchor="middle">legenda</text>
      <text x="72" y="174" class="tx" text-anchor="middle">mit</text>
      <text x="72" y="196" class="tx" style="font-weight:bold" text-anchor="middle">epopeja</text>
      <rect x="144" y="6" width="132" height="210" rx="12" class="f5 s5 sw"/>
      <text x="210" y="32" class="tx-b t5" text-anchor="middle">❤️ LIRYKA</text>
      <line x1="154" y1="42" x2="266" y2="42" class="ln-thin"/>
      <text x="210" y="64" class="tx" text-anchor="middle">fraszka</text>
      <text x="210" y="86" class="tx" text-anchor="middle">tren</text>
      <text x="210" y="108" class="tx" text-anchor="middle">hymn</text>
      <text x="210" y="130" class="tx" text-anchor="middle">pieśń</text>
      <text x="210" y="152" class="tx" text-anchor="middle">sonet</text>
      <rect x="282" y="6" width="132" height="210" rx="12" class="f2 s2 sw"/>
      <text x="348" y="32" class="tx-b t2" text-anchor="middle">🎭 DRAMAT</text>
      <line x1="292" y1="42" x2="404" y2="42" class="ln-thin"/>
      <text x="348" y="64" class="tx" text-anchor="middle">komedia</text>
      <text x="348" y="86" class="tx" text-anchor="middle">tragedia</text>
      <text x="348" y="108" class="tx" text-anchor="middle">dramat</text>
      <text x="348" y="128" class="tx" text-anchor="middle">romantyczny</text>
    </svg>`,
    text: `<p>Każdy gatunek należy do jednego rodzaju. Jeśli wiesz, do której „szuflady” trafia gatunek, od razu wiesz, kto w nim mówi i jak jest zbudowany.</p>
      <p>Uważaj na epopeję: brzmi podniośle, ale to <b>epika</b> – obszerny utwór o losach zbiorowości („Pan Tadeusz”).</p>`,
    remember: 'Tren i fraszka – liryka. Nowela i epopeja – epika. Komedia i tragedia – dramat.',
    hook: '<b>Ep</b>opeja i <b>ep</b>ika zaczynają się tak samo – epopeja to po prostu bardzo obszerna epika.',
    check: { q: 'Do jakiego rodzaju literackiego należy „Balladyna”?', options: ['epika', 'liryka', 'dramat', 'żadnego'], answer: 2, explain: '„Balladyna” to tragedia, czyli dramat – mimo że jej tytuł kojarzy się z balladą.' },
  },
  {
    title: 'Gatunek → lektura',
    svg: `<svg viewBox="0 0 420 246" role="img" aria-label="Przykłady: nowela – Latarnik, epopeja – Pan Tadeusz, komedia – Zemsta, tragedia – Balladyna, powieść historyczna – Quo vadis, ballada – Świtezianka">
      <defs><marker id="a-pl-rl-4" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="6" y="6" width="190" height="34" rx="8" class="f1 s1 sw"/><text x="101" y="28" class="tx" style="font-weight:bold" text-anchor="middle">nowela</text>
      <path d="M200,23 L228,23" class="ln" marker-end="url(#a-pl-rl-4)"/>
      <rect x="234" y="6" width="180" height="34" rx="8" class="bg ln-thin"/><text x="324" y="28" class="tx" text-anchor="middle">Latarnik</text>
      <rect x="6" y="46" width="190" height="34" rx="8" class="f1 s1 sw"/><text x="101" y="68" class="tx" style="font-weight:bold" text-anchor="middle">epopeja</text>
      <path d="M200,63 L228,63" class="ln" marker-end="url(#a-pl-rl-4)"/>
      <rect x="234" y="46" width="180" height="34" rx="8" class="bg ln-thin"/><text x="324" y="68" class="tx" text-anchor="middle">Pan Tadeusz</text>
      <rect x="6" y="86" width="190" height="34" rx="8" class="f2 s2 sw"/><text x="101" y="108" class="tx" style="font-weight:bold" text-anchor="middle">komedia 😄</text>
      <path d="M200,103 L228,103" class="ln" marker-end="url(#a-pl-rl-4)"/>
      <rect x="234" y="86" width="180" height="34" rx="8" class="bg ln-thin"/><text x="324" y="108" class="tx" text-anchor="middle">Zemsta</text>
      <rect x="6" y="126" width="190" height="34" rx="8" class="f2 s2 sw"/><text x="101" y="148" class="tx" style="font-weight:bold" text-anchor="middle">tragedia 😢</text>
      <path d="M200,143 L228,143" class="ln" marker-end="url(#a-pl-rl-4)"/>
      <rect x="234" y="126" width="180" height="34" rx="8" class="bg ln-thin"/><text x="324" y="148" class="tx" text-anchor="middle">Balladyna</text>
      <rect x="6" y="166" width="190" height="34" rx="8" class="f1 s1 sw"/><text x="101" y="188" class="tx" style="font-weight:bold" text-anchor="middle">powieść historyczna</text>
      <path d="M200,183 L228,183" class="ln" marker-end="url(#a-pl-rl-4)"/>
      <rect x="234" y="166" width="180" height="34" rx="8" class="bg ln-thin"/><text x="324" y="188" class="tx" text-anchor="middle">Quo vadis</text>
      <rect x="6" y="206" width="190" height="34" rx="8" class="f4 s4 sw"/><text x="101" y="228" class="tx" style="font-weight:bold" text-anchor="middle">ballada</text>
      <path d="M200,223 L228,223" class="ln" marker-end="url(#a-pl-rl-4)"/>
      <rect x="234" y="206" width="180" height="34" rx="8" class="bg ln-thin"/><text x="324" y="228" class="tx" text-anchor="middle">Świtezianka</text>
    </svg>`,
    text: `<ul><li><b>Nowela</b> – krótka proza, jeden wątek, wyraźny punkt kulminacyjny, często puenta.</li>
      <li><b>Komedia</b> – szczęśliwe zakończenie, wyśmiewa ludzkie wady. <b>Tragedia</b> – bohater uwikłany w konflikt, który kończy się jego klęską.</li>
      <li><b>Powieść historyczna</b> – akcja w przeszłości, obok postaci fikcyjnych występują historyczne.</li></ul>
      <p>W komedii działa <b>komizm</b>: sytuacyjny (zabawne sytuacje), słowny (zabawny język) i postaci (śmieszne zachowanie, wygląd).</p>`,
    remember: 'Komizm: <b>sytuacyjny</b> – zdarzenia, <b>słowny</b> – język, <b>postaci</b> – zachowanie i wygląd.',
    hook: 'Komedia kończy się dobrze, tragedia – klęską bohatera. „Zemsta” – zgoda, „Balladyna” – piorun.',
    check: { q: 'Komizm sytuacyjny polega na…', options: ['zabawnym języku postaci', 'śmiesznych zdarzeniach i sytuacjach', 'śmiesznym wyglądzie postaci', 'rymach'], answer: 1 },
  },
  {
    title: 'Symbol, alegoria, ironia',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Symbol, np. światło, ma wiele możliwych znaczeń; alegoria ma jedno umowne znaczenie, np. waga oznacza sprawiedliwość; ironia to mówienie odwrotnie, niż się myśli">
      <defs><marker id="a-pl-rl-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <rect x="6" y="6" width="200" height="130" rx="12" class="f4 s4 sw"/>
      <text x="106" y="30" class="tx-b" text-anchor="middle">SYMBOL</text>
      <text x="106" y="70" class="tx" style="font-size:30px" text-anchor="middle">💡</text>
      <path d="M96,80 L56,102" class="ln" marker-end="url(#a-pl-rl-5)"/>
      <path d="M106,80 L106,102" class="ln" marker-end="url(#a-pl-rl-5)"/>
      <path d="M116,80 L156,102" class="ln" marker-end="url(#a-pl-rl-5)"/>
      <text x="48" y="124" class="tx-s" text-anchor="middle">sens 1</text>
      <text x="106" y="124" class="tx-s" text-anchor="middle">sens 2</text>
      <text x="164" y="124" class="tx-s" text-anchor="middle">sens 3</text>
      <rect x="214" y="6" width="200" height="130" rx="12" class="f1 s1 sw"/>
      <text x="314" y="30" class="tx-b" text-anchor="middle">ALEGORIA</text>
      <text x="314" y="70" class="tx" style="font-size:30px" text-anchor="middle">⚖️</text>
      <path d="M314,80 L314,102" class="ln" marker-end="url(#a-pl-rl-5)"/>
      <text x="314" y="124" class="tx" style="font-weight:bold" text-anchor="middle">sprawiedliwość</text>
      <rect x="6" y="146" width="408" height="68" rx="12" class="f5 s5 sw"/>
      <text x="210" y="172" class="tx" text-anchor="middle">„Pięknie się spisałeś!” <tspan class="tx-s">(po porażce)</tspan></text>
      <text x="210" y="200" class="tx" text-anchor="middle">😏 <tspan style="font-weight:bold">IRONIA</tspan> – mówię odwrotnie, niż myślę</text>
    </svg>`,
    text: `<p><b>Symbol</b> – znak o wielu możliwych znaczeniach; trzeba go odczytać (np. światło, droga). <b>Alegoria</b> – znak o <b>jednym</b>, umownym znaczeniu (lis = przebiegłość, waga = sprawiedliwość).</p>
      <p><b>Ironia</b> – mówienie czegoś odwrotnego, niż się myśli, zwykle z kpiną. Warto też znać: <b>inwokacja</b> (uroczysty zwrot na początku epopei) i <b>neologizm</b> (nowo utworzony wyraz).</p>`,
    remember: 'Symbol – wiele znaczeń. Alegoria – jedno, umowne znaczenie. Ironia – odwrotnie, niż się myśli.',
    hook: '<b>A</b>legoria – <b>a</b>bsolutnie jedno znaczenie. <b>S</b>ymbol – <b>s</b>poro znaczeń.',
    check: { q: 'Spóźniłeś się godzinę, a kolega mówi: „Ale z ciebie punktualny człowiek!”. To przykład…', options: ['ironii', 'alegorii', 'inwokacji', 'neologizmu'], answer: 0, explain: 'Kolega mówi odwrotnie, niż myśli, i to z kpiną – to ironia.' },
  },
  {
    title: 'Teksty nieliterackie i podsumowanie',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Gatunki dziennikarskie: reportaż – relacja z wydarzeń oparta na faktach z opisem; wywiad – pytania i odpowiedzi; artykuł – tekst prasowy na dany temat">
      <rect x="6" y="6" width="132" height="166" rx="12" class="f3 s3 sw"/>
      <text x="72" y="52" class="tx" style="font-size:32px" text-anchor="middle">📰</text>
      <text x="72" y="84" class="tx-b" text-anchor="middle">reportaż</text>
      <text x="72" y="110" class="tx-s" text-anchor="middle">relacja</text>
      <text x="72" y="128" class="tx-s" text-anchor="middle">z wydarzeń:</text>
      <text x="72" y="146" class="tx-s" text-anchor="middle">fakty + opis</text>
      <rect x="144" y="6" width="132" height="166" rx="12" class="f1 s1 sw"/>
      <text x="210" y="52" class="tx" style="font-size:32px" text-anchor="middle">🎤</text>
      <text x="210" y="84" class="tx-b" text-anchor="middle">wywiad</text>
      <text x="210" y="110" class="tx-s" text-anchor="middle">pytanie →</text>
      <text x="210" y="128" class="tx-s" text-anchor="middle">odpowiedź →</text>
      <text x="210" y="146" class="tx-s" text-anchor="middle">pytanie…</text>
      <rect x="282" y="6" width="132" height="166" rx="12" class="f4 s4 sw"/>
      <text x="348" y="52" class="tx" style="font-size:32px" text-anchor="middle">📄</text>
      <text x="348" y="84" class="tx-b" text-anchor="middle">artykuł</text>
      <text x="348" y="110" class="tx-s" text-anchor="middle">tekst prasowy</text>
      <text x="348" y="128" class="tx-s" text-anchor="middle">na dany temat</text>
    </svg>`,
    text: `<p>Nie każdy tekst to literatura piękna. Gatunki dziennikarskie to <b>reportaż</b>, <b>wywiad</b> i <b>artykuł</b>. Odróżniaj też literaturę piękną od tekstów naukowych, popularnonaukowych i publicystycznych.</p>
      <p><b>Podsumowanie lekcji:</b> rozpoznaj rodzaj (kto mówi?), potem gatunek (jaka „szuflada”?), a na koniec szukaj pojęć: komizm, symbol, alegoria, ironia.</p>`,
    remember: 'Literatura piękna: epika, liryka, dramat. Teksty dziennikarskie: reportaż, wywiad, artykuł.',
    hook: '<b>W</b>ywiad = <b>w</b>ymiana pytań i odpowiedzi. <b>R</b>eportaż = <b>r</b>elacja z wydarzeń.',
    check: { q: 'Tekst w formie pytań dziennikarza i odpowiedzi rozmówcy to…', options: ['reportaż', 'wywiad', 'artykuł', 'nowela'], answer: 1 },
  },
];

/* ===================== EGZAMIN I WYPRACOWANIE ===================== */
window.LESSONS['polski/formy-wypowiedzi'] = [
  {
    title: 'Jak wygląda arkusz z polskiego?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Arkusz: 150 minut, 45 punktów; część I – 25 punktów, około 20 zadań do dwóch tekstów; część II – wypracowanie za 20 punktów, minimum 200 wyrazów, do wyboru opowiadanie albo rozprawka lub przemówienie">
      <defs><marker id="a-pl-fw-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="tx"/></marker></defs>
      <text x="210" y="22" class="tx-b" text-anchor="middle">⏱️ 150 minut · 45 punktów</text>
      <rect x="10" y="34" width="222" height="56" rx="10" class="f1 s1 sw"/>
      <text x="121" y="58" class="tx" style="font-weight:bold" text-anchor="middle">Część I</text>
      <text x="121" y="80" class="tx-b t1" text-anchor="middle">25 pkt</text>
      <rect x="234" y="34" width="176" height="56" rx="10" class="f2 s2 sw"/>
      <text x="322" y="58" class="tx" style="font-weight:bold" text-anchor="middle">Wypracowanie</text>
      <text x="322" y="80" class="tx-b t2" text-anchor="middle">20 pkt</text>
      <text x="121" y="110" class="tx-s" text-anchor="middle">ok. 20 zadań do 2 tekstów:</text>
      <text x="121" y="128" class="tx-s" text-anchor="middle">literackiego i nieliterackiego</text>
      <text x="322" y="110" class="tx-s" text-anchor="middle">min. 200 wyrazów</text>
      <path d="M300,118 L250,140" class="ln" marker-end="url(#a-pl-fw-1)"/>
      <path d="M344,118 L366,140" class="ln" marker-end="url(#a-pl-fw-1)"/>
      <rect x="150" y="144" width="128" height="50" rx="10" class="f4 s4 sw"/>
      <text x="214" y="166" class="tx" style="font-weight:bold" text-anchor="middle">opowiadanie</text>
      <text x="214" y="184" class="tx-s" text-anchor="middle">temat twórczy</text>
      <rect x="286" y="144" width="128" height="50" rx="10" class="f3 s3 sw"/>
      <text x="350" y="166" class="tx" style="font-weight:bold" text-anchor="middle">rozprawka</text>
      <text x="350" y="184" class="tx-s" text-anchor="middle">lub przemówienie</text>
      <text x="70" y="174" class="tx-s" text-anchor="middle">wybierasz 1 z 2 →</text>
    </svg>`,
    text: `<p>Egzamin trwa <b>150 minut</b>, do zdobycia jest <b>45 punktów</b>.</p>
      <ul><li><b>Część I</b> – ok. 20 zadań do dwóch tekstów: literackiego i nieliterackiego (naukowego, popularnonaukowego albo publicystycznego). Razem 25 pkt, mniej więcej połowa za zadania otwarte.</li>
      <li><b>Część II</b> – wypracowanie: wybierasz jeden z dwóch tematów – twórczy (opowiadanie) albo argumentacyjny (rozprawka lub przemówienie). Co najmniej <b>200 wyrazów</b>, 20 pkt.</li></ul>`,
    remember: '<b>25 + 20 = 45 pkt</b>. Wypracowanie: min. 200 wyrazów.',
    hook: 'Wypracowanie to prawie <b>połowa</b> wyniku – nie zostawiaj go na ostatnie 10 minut!',
    check: { q: 'Ile punktów można zdobyć za wypracowanie?', options: ['10', '20', '25', '45'], answer: 1 },
  },
  {
    title: 'Za co dostajesz punkty? Kryteria jak klocki',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Kryteria oceny wypracowania jako klocki punktów: realizacja tematu 2, elementy twórcze lub retoryczne 5, kompetencje literackie 2, kompozycja 2, styl 2, język 4, ortografia 2, interpunkcja 1; razem 20">
      <text x="210" y="18" class="tx-b" text-anchor="middle">20 pkt = 2+5+2+2+2+4+2+1</text>
      <text x="192" y="45" class="tx" text-anchor="end">1. realizacja tematu</text>
      <rect x="200" y="30" width="32" height="20" rx="4" class="f2 s2"/><rect x="236" y="30" width="32" height="20" rx="4" class="f2 s2"/>
      <text x="274" y="45" class="tx-s">2</text>
      <text x="192" y="72" class="tx" text-anchor="end">2. twórcze / retoryczne</text>
      <rect x="200" y="57" width="32" height="20" rx="4" class="f1 s1"/><rect x="236" y="57" width="32" height="20" rx="4" class="f1 s1"/><rect x="272" y="57" width="32" height="20" rx="4" class="f1 s1"/><rect x="308" y="57" width="32" height="20" rx="4" class="f1 s1"/><rect x="344" y="57" width="32" height="20" rx="4" class="f1 s1"/>
      <text x="382" y="72" class="tx-s">5</text>
      <text x="192" y="99" class="tx" text-anchor="end">3. lektura (kompetencje)</text>
      <rect x="200" y="84" width="32" height="20" rx="4" class="f3 s3"/><rect x="236" y="84" width="32" height="20" rx="4" class="f3 s3"/>
      <text x="274" y="99" class="tx-s">2</text>
      <text x="192" y="126" class="tx" text-anchor="end">4. kompozycja</text>
      <rect x="200" y="111" width="32" height="20" rx="4" class="f4 s4"/><rect x="236" y="111" width="32" height="20" rx="4" class="f4 s4"/>
      <text x="274" y="126" class="tx-s">2</text>
      <text x="192" y="153" class="tx" text-anchor="end">5. styl</text>
      <rect x="200" y="138" width="32" height="20" rx="4" class="f4 s4"/><rect x="236" y="138" width="32" height="20" rx="4" class="f4 s4"/>
      <text x="274" y="153" class="tx-s">2</text>
      <text x="192" y="180" class="tx" text-anchor="end">6. język</text>
      <rect x="200" y="165" width="32" height="20" rx="4" class="f5 s5"/><rect x="236" y="165" width="32" height="20" rx="4" class="f5 s5"/><rect x="272" y="165" width="32" height="20" rx="4" class="f5 s5"/><rect x="308" y="165" width="32" height="20" rx="4" class="f5 s5"/>
      <text x="346" y="180" class="tx-s">4</text>
      <text x="192" y="207" class="tx" text-anchor="end">7. ortografia</text>
      <rect x="200" y="192" width="32" height="20" rx="4" class="f4 s4"/><rect x="236" y="192" width="32" height="20" rx="4" class="f4 s4"/>
      <text x="274" y="207" class="tx-s">2</text>
      <text x="192" y="234" class="tx" text-anchor="end">8. interpunkcja</text>
      <rect x="200" y="219" width="32" height="20" rx="4" class="f4 s4"/>
      <text x="238" y="234" class="tx-s">1</text>
    </svg>`,
    text: `<p><b>Realizacja tematu</b> (0–2) – forma zgodna z poleceniem, odwołanie do wskazanej lektury, całość na temat. <b>Elementy twórcze / retoryczne</b> (0–5) – najwięcej punktów! <b>Kompetencje literackie</b> (0–2) – funkcjonalne wykorzystanie lektury.</p>
      <p>Dalej: kompozycja, styl, <b>język</b> (0–4 – zakres środków i liczba błędów), ortografia (maks. 1 błąd = 2 pkt) i interpunkcja (maks. 9 błędów = 1 pkt).</p>`,
    remember: 'Najwięcej punktów: <b>elementy twórcze/retoryczne (5)</b> i <b>język (4)</b>.',
    hook: 'Kryteria to pytania egzaminatora po kolei: Na temat? Ciekawie? Z lekturą? Uporządkowane? Dobrze napisane? Bez błędów?',
    check: { q: 'Za które kryterium wypracowania można dostać najwięcej punktów?', options: ['elementy twórcze / retoryczne', 'język', 'ortografia', 'kompozycja'], answer: 0, explain: 'Elementy twórcze (opowiadanie) albo retoryczne (rozprawka, przemówienie) to aż 5 z 20 punktów.' },
  },
  {
    title: 'Opowiadanie: 6 z 10 elementów',
    svg: `<svg viewBox="0 0 420 228" role="img" aria-label="Dziesięć elementów opowiadania: opis, charakterystyka, czas akcji, miejsce akcji, zwrot akcji, puenta, punkt kulminacyjny, dialog, monolog, retrospekcja; na 5 punktów trzeba wykorzystać co najmniej 6">
      <text x="210" y="20" class="tx-b" text-anchor="middle">co najmniej 6 z 10 → 5 pkt</text>
      <rect x="10" y="32" width="196" height="32" rx="8" class="f3 s3 sw"/><text x="108" y="53" class="tx" text-anchor="middle">✅ dialog</text>
      <rect x="214" y="32" width="196" height="32" rx="8" class="f3 s3 sw"/><text x="312" y="53" class="tx" text-anchor="middle">✅ opis</text>
      <rect x="10" y="70" width="196" height="32" rx="8" class="f3 s3 sw"/><text x="108" y="91" class="tx" text-anchor="middle">✅ zwrot akcji</text>
      <rect x="214" y="70" width="196" height="32" rx="8" class="f3 s3 sw"/><text x="312" y="91" class="tx" text-anchor="middle">✅ puenta</text>
      <rect x="10" y="108" width="196" height="32" rx="8" class="f3 s3 sw"/><text x="108" y="129" class="tx" text-anchor="middle">✅ punkt kulminacyjny</text>
      <rect x="214" y="108" width="196" height="32" rx="8" class="f3 s3 sw"/><text x="312" y="129" class="tx" text-anchor="middle">✅ charakterystyka</text>
      <rect x="10" y="146" width="196" height="32" rx="8" class="ln-thin dash"/><text x="108" y="167" class="tx" text-anchor="middle">czas akcji</text>
      <rect x="214" y="146" width="196" height="32" rx="8" class="ln-thin dash"/><text x="312" y="167" class="tx" text-anchor="middle">miejsce akcji</text>
      <rect x="10" y="184" width="196" height="32" rx="8" class="ln-thin dash"/><text x="108" y="205" class="tx" text-anchor="middle">monolog</text>
      <rect x="214" y="184" width="196" height="32" rx="8" class="ln-thin dash"/><text x="312" y="205" class="tx" text-anchor="middle">retrospekcja</text>
    </svg>`,
    text: `<p>Za elementy twórcze w opowiadaniu dostaniesz 5 pkt, gdy <b>funkcjonalnie</b> (czyli z sensem, a nie na pokaz) wykorzystasz <b>co najmniej 6</b> z dziesięciu elementów: opis, charakterystyka bohatera, czas akcji, miejsce akcji, zwrot akcji, puenta, punkt kulminacyjny, dialog, monolog, retrospekcja.</p>
      <p>Narracja ma być konsekwentna, a zdarzenia ułożone logicznie. Treść lektury wykorzystaj twórczo. Dialog zapisuj tak: każda wypowiedź od nowej linii, od myślnika.</p>`,
    remember: '<b>6 elementów</b> wykorzystanych funkcjonalnie → 5 pkt za elementy twórcze.',
    hook: '„<b>Szóstka na piątkę</b>”: 6 elementów = 5 punktów.',
    check: { q: 'Ile elementów (np. dialog, opis, puenta) trzeba funkcjonalnie wykorzystać w opowiadaniu na 5 pkt?', options: ['co najmniej 2', 'co najmniej 4', 'co najmniej 6', 'wszystkie 10'], answer: 2 },
  },
  {
    title: 'Rozprawka jak budynek',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Rozprawka jako budynek: fundament – wstęp z tezą lub hipotezą, piętra – argumenty z przykładami w osobnych akapitach, dach – zakończenie z podsumowaniem">
      <polygon points="40,74 210,8 380,74" class="f2 s2 sw"/>
      <text x="210" y="50" class="tx-b" text-anchor="middle">zakończenie</text>
      <text x="210" y="67" class="tx-s" text-anchor="middle">podsumowanie</text>
      <rect x="60" y="78" width="300" height="38" class="f1 s1 sw"/>
      <text x="210" y="102" class="tx" text-anchor="middle"><tspan style="font-weight:bold">argument 3</tspan> + przykład</text>
      <rect x="60" y="118" width="300" height="38" class="f1 s1 sw"/>
      <text x="210" y="142" class="tx" text-anchor="middle"><tspan style="font-weight:bold">argument 2</tspan> + przykład</text>
      <rect x="60" y="158" width="300" height="38" class="f1 s1 sw"/>
      <text x="210" y="182" class="tx" text-anchor="middle"><tspan style="font-weight:bold">argument 1</tspan> + przykład</text>
      <text x="366" y="102" class="tx-s">akapit</text>
      <text x="366" y="142" class="tx-s">akapit</text>
      <text x="366" y="182" class="tx-s">akapit</text>
      <rect x="30" y="200" width="360" height="46" rx="4" class="f4 s4 sw"/>
      <text x="210" y="222" class="tx-b" text-anchor="middle">wstęp: teza lub hipoteza</text>
      <text x="210" y="240" class="tx-s" text-anchor="middle">fundament całej pracy</text>
    </svg>`,
    text: `<p>Rozprawka ma trzy części: <b>wstęp</b> z tezą lub hipotezą → <b>argumenty</b> z przykładami, każdy w osobnym akapicie → <b>zakończenie</b> z podsumowaniem.</p>
      <p><b>Teza</b> to stanowisko, które udowadniasz, a <b>hipoteza</b> – przypuszczenie, które sprawdzasz. Argumenty uporządkuj, np. od najważniejszego albo w układzie argument – kontrargument.</p>`,
    remember: '<b>Przykład to nie argument!</b> Argument uzasadnia tezę, a przykład (np. z lektury) go ilustruje.',
    hook: 'Teza = fundament, argumenty = piętra, zakończenie = dach. Bez fundamentu dom się zawali, bez pięter – dach spadnie na fundament.',
    check: { q: 'Czym różni się argument od przykładu?', options: ['niczym', 'argument uzasadnia tezę, a przykład go ilustruje', 'przykład jest zawsze dłuższy', 'argument musi być cytatem'], answer: 1 },
  },
  {
    title: 'Przemówienie – mówisz DO ludzi',
    svg: `<svg viewBox="0 0 420 226" role="img" aria-label="Przemówienie krok po kroku: zwrot do słuchaczy, argumenty z przykładami i pytania retoryczne, apel, podziękowanie za uwagę">
      <line x1="30" y1="30" x2="30" y2="192" class="ln-thin"/>
      <circle cx="30" cy="30" r="15" class="f3 s3 sw"/><text x="30" y="35" class="tx" style="font-weight:bold" text-anchor="middle">1</text>
      <rect x="56" y="8" width="358" height="44" rx="10" class="f3 s3"/>
      <text x="68" y="27" class="tx" style="font-weight:bold">👋 zwrot do słuchaczy</text>
      <text x="68" y="45" class="tx-s">„Drodzy koledzy i koleżanki!”</text>
      <circle cx="30" cy="84" r="15" class="f1 s1 sw"/><text x="30" y="89" class="tx" style="font-weight:bold" text-anchor="middle">2</text>
      <rect x="56" y="62" width="358" height="44" rx="10" class="f1 s1"/>
      <text x="68" y="81" class="tx" style="font-weight:bold">💬 argumenty + przykłady</text>
      <text x="68" y="99" class="tx-s">po drodze: zwroty do słuchaczy, pytania retoryczne</text>
      <circle cx="30" cy="138" r="15" class="f2 s2 sw"/><text x="30" y="143" class="tx" style="font-weight:bold" text-anchor="middle">3</text>
      <rect x="56" y="116" width="358" height="44" rx="10" class="f2 s2"/>
      <text x="68" y="143" class="tx" style="font-weight:bold">📣 apel na końcu</text>
      <circle cx="30" cy="192" r="15" class="f5 s5 sw"/><text x="30" y="197" class="tx" style="font-weight:bold" text-anchor="middle">4</text>
      <rect x="56" y="170" width="358" height="44" rx="10" class="f5 s5"/>
      <text x="68" y="197" class="tx" style="font-weight:bold">🙏 podziękowanie za uwagę</text>
    </svg>`,
    text: `<p>Przemówienie to też tekst argumentacyjny – masz tezę, argumenty i przykłady. Różnica: mówisz do konkretnych <b>słuchaczy</b>.</p>
      <p>Dlatego zaczynasz od zwrotu do nich, w trakcie zwracasz się do nich i zadajesz pytania retoryczne, na końcu kierujesz <b>apel</b> i dziękujesz za uwagę.</p>`,
    remember: 'Przemówienie = argumentacja + słuchacze: zwroty do nich, pytania retoryczne, apel, podziękowanie.',
    hook: 'Wyobraź sobie, że stoisz na szkolnym apelu: mówisz <b>do</b> ludzi, a nie tylko <b>o</b> temacie.',
    check: { q: 'Który element jest typowy dla przemówienia, a nie dla rozprawki?', options: ['teza', 'argumenty', 'zwroty do słuchaczy', 'zakończenie'], answer: 2 },
  },
  {
    title: 'Pułapki: tu tracisz wszystko',
    svg: `<svg viewBox="0 0 420 248" role="img" aria-label="Pułapki: zła forma wypowiedzi – 0 punktów za całość; brak lektury z polecenia – 0 punktów za całość; 180 wyrazów lub mniej – ocena tylko w kryteriach 1–3; powieść obrazkowa, manga, gra, scenariusz filmowy nie liczą się jako utwór literacki">
      <polygon points="32,10 58,54 6,54" class="f2 s2 sw"/><text x="32" y="48" class="tx-b t2" text-anchor="middle">0</text>
      <rect x="66" y="6" width="348" height="52" rx="10" class="f2 s2"/>
      <text x="78" y="28" class="tx" style="font-weight:bold">Zła forma wypowiedzi</text>
      <text x="78" y="48" class="tx-s">0 pkt w kryterium 1 = 0 pkt za całą pracę</text>
      <polygon points="32,70 58,114 6,114" class="f2 s2 sw"/><text x="32" y="108" class="tx-b t2" text-anchor="middle">0</text>
      <rect x="66" y="66" width="348" height="52" rx="10" class="f2 s2"/>
      <text x="78" y="88" class="tx" style="font-weight:bold">Brak lektury z polecenia</text>
      <text x="78" y="108" class="tx-s">= 0 pkt za całą pracę</text>
      <polygon points="32,130 58,174 6,174" class="f4 s4 sw"/><text x="32" y="168" class="tx-b t4" text-anchor="middle">!</text>
      <rect x="66" y="126" width="348" height="52" rx="10" class="f4 s4"/>
      <text x="78" y="148" class="tx" style="font-weight:bold">180 wyrazów lub mniej</text>
      <text x="78" y="168" class="tx-s">ocena tylko w kryteriach 1–3</text>
      <polygon points="32,190 58,234 6,234" class="f4 s4 sw"/><text x="32" y="228" class="tx-b t4" text-anchor="middle">!</text>
      <rect x="66" y="186" width="348" height="52" rx="10" class="f4 s4"/>
      <text x="78" y="208" class="tx" style="font-weight:bold">Manga, gra, scenariusz filmu</text>
      <text x="78" y="228" class="tx-s">nie liczą się jako utwór literacki</text>
    </svg>`,
    text: `<ul><li><b>0 pkt w kryterium 1</b> (np. zła forma – rozprawka zamiast opowiadania) = 0 pkt za całą pracę.</li>
      <li><b>Brak odwołania do lektury wskazanej w poleceniu</b> = 0 pkt za całą pracę.</li>
      <li>Praca <b>180 wyrazów lub krótsza</b> jest oceniana tylko w kryteriach 1–3.</li>
      <li>Powieść obrazkowa, manga, scenariusz filmowy ani gra komputerowa nie liczą się w wypracowaniu jako utwór literacki (informator CKE).</li></ul>`,
    remember: 'Przed oddaniem sprawdź: forma zgodna z poleceniem? Lektura z polecenia? Co najmniej 200 wyrazów?',
    hook: 'Trzy pytania kontrolne jak przed lotem: <b>forma – lektura – długość</b>. Bez nich nie startujesz.',
    check: { q: 'Praca ma 170 wyrazów. Co z tego wynika?', options: ['jest oceniana normalnie', 'jest oceniana tylko w kryteriach 1–3 (temat, elementy twórcze/retoryczne, kompetencje literackie)', 'dostaje dodatkowe punkty za zwięzłość', 'dostaje 0 punktów za ortografię, ale resztę normalnie'], answer: 1 },
  },
];
