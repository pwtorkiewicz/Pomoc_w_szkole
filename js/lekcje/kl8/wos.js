/* Lekcje – wiedza o społeczeństwie, klasa 8 (Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. I–XII).
 * Klucz: 'wos/<id działu>'. Format: docs/LEKCJE.md. Treści wyłącznie ze ściąg działów (js/dane/kl8/wos.js). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['wos/czlowiek-w-grupie'] = [
  {
    title: 'Po co nam inni ludzie',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Trzy potrzeby społeczne: kontaktu, przynależności i uznania – zaspokajamy je w grupach">
      <g class="sw"><rect x="5" y="20" width="130" height="130" rx="12" class="f1 s1"/><rect x="145" y="20" width="130" height="130" rx="12" class="f3 s3"/><rect x="285" y="20" width="130" height="130" rx="12" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="65">💬</text><text x="210" y="65">🫂</text><text x="350" y="65">🏆</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="100">kontakt</text><text x="210" y="100">przynależność</text><text x="350" y="100">uznanie</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="125">rozmowa, bycie</text><text x="70" y="141">z innymi</text><text x="210" y="125">jestem „swój”</text><text x="210" y="141">w grupie</text><text x="350" y="125">szacunek</text><text x="350" y="141">i docenienie</text></g>
      <text x="210" y="178" class="tx-s" text-anchor="middle">potrzeby społeczne – zaspokajamy je tylko wśród ludzi</text>
    </svg>`,
    text: `<p>Człowiek to istota społeczna. Oprócz jedzenia i snu potrzebujesz <b>kontaktu</b> z innymi, <b>przynależności</b> (rodzina, klasa, drużyna) i <b>uznania</b>. Zaspokajasz je w <b>grupach</b> – czyli wśród ludzi połączonych więzią, wspólnym celem i zasadami.</p>
      <p>Grupa <b>koleżeńska</b> łączy się z sympatii, grupa <b>zadaniowa</b> – żeby coś zrobić, np. projekt.</p>`,
    remember: 'Potrzeby społeczne: kontaktu, przynależności, uznania.',
    hook: 'K-P-U: „Kumple Polubią Uznać” – kontakt, przynależność, uznanie.',
    check: { q: 'Która potrzeba jest potrzebą społeczną?', options: ['potrzeba snu', 'potrzeba przynależności', 'potrzeba picia'], answer: 1, explain: 'Przynależność zaspokajamy tylko w grupie – to potrzeba społeczna.' },
  },
  {
    title: 'Jak grupa podejmuje decyzję',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cztery sposoby podejmowania decyzji w grupie: głosowanie, konsensus, kompromis i decyzja lidera, z krótkim opisem każdego">
      <g class="sw"><rect x="10" y="10" width="185" height="90" rx="10" class="f1 s1"/><rect x="205" y="10" width="185" height="90" rx="10" class="f3 s3"/>
        <rect x="10" y="110" width="185" height="90" rx="10" class="f4 s4"/><rect x="205" y="110" width="185" height="90" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="42">🗳️ głosowanie</text><text x="297" y="42">🤝 konsensus</text><text x="102" y="142">⚖️ kompromis</text><text x="297" y="142">👑 lider</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="66">wygrywa większość</text><text x="102" y="84">szybko, ale ktoś przegra</text>
        <text x="297" y="66">zgadzają się wszyscy</text><text x="297" y="84">trwale, ale długo</text>
        <text x="102" y="166">każdy trochę ustępuje</text><text x="102" y="184">nikt nie ma wszystkiego</text>
        <text x="297" y="166">decyduje jedna osoba</text><text x="297" y="184">szybko, inni bez wpływu</text></g>
    </svg>`,
    text: `<p>Gdy wybieracie cel wycieczki, możecie <b>głosować</b> (wygrywa większość), dążyć do <b>konsensusu</b> (wszyscy się zgadzają), zawrzeć <b>kompromis</b> (każdy ustępuje) albo zdać się na <b>lidera</b>.</p>
      <p>Każdy sposób ma plusy i minusy – liczy się czas, waga sprawy i to, czy wszyscy muszą się zaangażować.</p>`,
    remember: 'Konsensus – zgadzają się wszyscy; kompromis – każdy trochę ustępuje.',
    hook: 'Kompromis jak pizza na pół: ty chciałeś z ananasem, ja z salami – każdy ma połowę swojej.',
  },
  {
    title: 'Asertywnie, czyli z szacunkiem',
    svg: `<svg viewBox="0 0 410 200" role="img" aria-label="Trzy postawy: uległość – robię, co chcą inni; asertywność – mówię, czego chcę, z szacunkiem; agresja – stawiam na swoim kosztem innych. Asertywność jest pośrodku i wyróżniona">
      <line x1="20" y1="160" x2="390" y2="160" class="ln sw"/>
      <g class="sw"><rect x="10" y="20" width="120" height="120" rx="10" class="f2 s2"/><rect x="145" y="10" width="120" height="140" rx="10" class="f3 s3"/><rect x="280" y="20" width="120" height="120" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="55">😶</text><text x="205" y="50">🙂</text><text x="340" y="55">😠</text></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="85">uległość</text><text x="340" y="85">agresja</text></g>
      <text x="205" y="80" class="tx" text-anchor="middle">asertywność</text>
      <g class="tx-s" text-anchor="middle"><text x="70" y="108">robię, co chcą</text><text x="70" y="124">inni</text>
        <text x="205" y="104">mówię, czego</text><text x="205" y="120">chcę – z szacunkiem</text><text x="205" y="136">dla innych</text>
        <text x="340" y="108">stawiam na swoim</text><text x="340" y="124">kosztem innych</text></g>
      <text x="205" y="185" class="tx-s" text-anchor="middle">„ja jestem OK i ty jesteś OK”</text>
    </svg>`,
    text: `<p><b>Asertywność</b> to stanowcze i uczciwe mówienie o swoich uczuciach i potrzebach – bez obrażania innych. To złoty środek między <b>uległością</b> a <b>agresją</b>.</p>
      <p>Przydaje się, gdy ktoś namawia cię do ściągania, alkoholu albo wyśmiewania kogoś. Pomaga <b>komunikat „ja”</b> („Czuję się…, kiedy…, proszę…”) i <b>zdarta płyta</b> – spokojne powtarzanie „nie”.</p>`,
    remember: 'Asertywność = szacunek dla siebie + szacunek dla innych.',
    hook: 'Zdarta płyta: „Nie, dzięki. Nie, dzięki. Nie, dzięki.” – jak piosenka, która się zacięła.',
    check: { q: 'Która odpowiedź na „Daj spisać!” jest asertywna?', options: ['„Dobra, bierz…”', '„Nie dam, bo to nieuczciwe, ale mogę ci wytłumaczyć.”', '„Spadaj!”'], answer: 1, explain: 'Jasna odmowa z uzasadnieniem i bez obrażania to asertywność.' },
  },
  {
    title: 'Konflikt: kto rozstrzyga?',
    svg: `<svg viewBox="0 0 410 220" role="img" aria-label="Trzy sposoby rozwiązywania konfliktu: negocjacje – strony A i B rozmawiają same; mediacja – mediator M pomaga, decydują strony; arbitraż – arbiter rozstrzyga">
      <defs><marker id="a-k8w-grupa-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx-b"><text x="10" y="45">negocjacje</text><text x="10" y="115">mediacja</text><text x="10" y="185">arbitraż</text></g>
      <g class="sw"><circle cx="190" cy="40" r="18" class="f1 s1"/><circle cx="330" cy="40" r="18" class="f2 s2"/>
        <circle cx="190" cy="110" r="18" class="f1 s1"/><circle cx="260" cy="110" r="18" class="f3 s3"/><circle cx="330" cy="110" r="18" class="f2 s2"/>
        <circle cx="190" cy="180" r="18" class="f1 s1"/><circle cx="260" cy="180" r="18" class="f5 s5"/><circle cx="330" cy="180" r="18" class="f2 s2"/></g>
      <path d="M210,40 L308,40" class="ln" marker-end="url(#a-k8w-grupa-4)"/>
      <g class="tx-b" text-anchor="middle"><text x="190" y="46">A</text><text x="330" y="46">B</text><text x="190" y="116">A</text><text x="260" y="116">M</text><text x="330" y="116">B</text><text x="190" y="186">A</text><text x="330" y="186">B</text></g>
      <text x="260" y="186" class="tx" text-anchor="middle">⚖️</text>
      <g class="tx-s" text-anchor="middle"><text x="260" y="72">decydują same strony</text><text x="260" y="142">mediator pomaga, nie narzuca</text><text x="260" y="212">arbiter rozstrzyga spór</text></g>
    </svg>`,
    text: `<p>Konflikty biorą się m.in. ze <b>sprzecznych interesów</b> i <b>różnych celów</b>. W <b>negocjacjach</b> strony dogadują się same. W <b>mediacji</b> pomaga bezstronny <b>mediator</b>, ale decyzja należy do stron. W <b>arbitrażu</b> rozstrzyga <b>arbiter</b>.</p>
      <p>Najlepsze jest rozwiązanie <b>wygrany–wygrany</b> – każda strona coś zyskuje, więc spór nie wraca.</p>`,
    remember: 'Mediator pomaga, arbiter rozstrzyga.',
    hook: 'Arbiter jak sędzia na boisku – gwiżdże i koniec dyskusji. Mediator jak kumpel, który pomaga wam się dogadać.',
    check: { q: 'Kto w mediacji podejmuje ostateczną decyzję?', options: ['mediator', 'same strony konfliktu', 'dyrektor szkoły'], answer: 1, explain: 'Mediator tylko pomaga w rozmowie – porozumienie zawierają strony.' },
  },
];

window.LESSONS['wos/rodzina'] = [
  {
    title: 'Za co odpowiada rodzina',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Rodzina w środku, wokół jej funkcje: opiekuńcza, ekonomiczna, emocjonalna, wychowawcza, prokreacyjna i rekreacyjna">
      <circle cx="200" cy="110" r="46" class="f4 s4 sw"/>
      <text x="200" y="104" class="tx" text-anchor="middle">🏠</text><text x="200" y="128" class="tx-b" text-anchor="middle">rodzina</text>
      <g class="sw"><rect x="10" y="12" width="130" height="40" rx="8" class="f1 s1"/><rect x="260" y="12" width="130" height="40" rx="8" class="f3 s3"/>
        <rect x="10" y="90" width="130" height="40" rx="8" class="f2 s2"/><rect x="260" y="90" width="130" height="40" rx="8" class="f5 s5"/>
        <rect x="10" y="168" width="130" height="40" rx="8" class="f3 s3"/><rect x="260" y="168" width="130" height="40" rx="8" class="f1 s1"/></g>
      <g class="tx-s" text-anchor="middle"><text x="75" y="37">opiekuńcza</text><text x="325" y="37">ekonomiczna</text><text x="75" y="115">emocjonalna</text><text x="325" y="115">wychowawcza</text><text x="75" y="193">prokreacyjna</text><text x="325" y="193">rekreacyjna</text></g>
      <g class="ln-thin"><line x1="140" y1="40" x2="164" y2="80"/><line x1="260" y1="40" x2="236" y2="80"/><line x1="140" y1="110" x2="154" y2="110"/><line x1="260" y1="110" x2="246" y2="110"/><line x1="140" y1="180" x2="164" y2="140"/><line x1="260" y1="180" x2="236" y2="140"/></g>
    </svg>`,
    text: `<p>Rodzina to <b>mała grupa pierwotna</b> – należysz do niej od urodzenia i łączą was silne uczucia. Pełni wiele funkcji: <b>opiekuńczą</b>, <b>ekonomiczną</b> (zarabianie i wspólne wydawanie), <b>emocjonalną</b>, <b>wychowawczą</b> (wartości, tradycje), <b>prokreacyjną</b> i <b>rekreacyjną</b>.</p>
      <p>Dziadkowie często przekazują historię rodziny i pomagają w opiece.</p>`,
    remember: 'Rodzina – grupa pierwotna; najważniejsze miejsce przekazywania wartości.',
    hook: 'Rodzina to „pierwsza szkoła życia” – tu uczysz się języka, zasad i tradycji.',
  },
  {
    title: 'Prawa i obowiązki w domu',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie: prawa dziecka w rodzinie – szacunek, wysłuchanie, utrzymanie, zakaz kar cielesnych; obowiązki dziecka – posłuszeństwo, pomoc w domu, szacunek">
      <g class="sw"><rect x="10" y="10" width="185" height="200" rx="12" class="f3 s3"/><rect x="205" y="10" width="185" height="200" rx="12" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">✅ prawa</text><text x="297" y="40">📋 obowiązki</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="75">szacunek dla godności</text><text x="102" y="105">wysłuchanie w ważnych</text><text x="102" y="121">sprawach</text><text x="102" y="151">utrzymanie (alimenty)</text><text x="102" y="181">zakaz kar cielesnych</text>
        <text x="297" y="75">posłuszeństwo</text><text x="297" y="105">pomoc w gospodarstwie</text><text x="297" y="121">domowym</text><text x="297" y="151">szacunek i wspieranie</text><text x="297" y="167">się nawzajem</text></g>
    </svg>`,
    text: `<p>Kodeks rodzinny i opiekuńczy mówi: rodzice i dzieci są obowiązani do <b>wzajemnego szacunku i wspierania się</b>. Rodzice wychowują dziecko z poszanowaniem jego godności, a w ważnych sprawach powinni je <b>wysłuchać</b>. <b>Kary cielesne są zakazane.</b></p>
      <p>Dziecko winno rodzicom <b>posłuszeństwo</b>, a jeśli mieszka z nimi i jest na ich utrzymaniu – ma <b>pomagać w domu</b>.</p>`,
    remember: 'Szacunek działa w obie strony – to obowiązek i rodziców, i dzieci.',
    check: { q: 'Co mówi Kodeks rodzinny i opiekuńczy o karach cielesnych?', options: ['są dozwolone w wyjątkowych sytuacjach', 'są zakazane', 'decyduje o tym szkoła'], answer: 1, explain: 'Art. 96¹ KRO zakazuje kar cielesnych.' },
  },
  {
    title: 'Budżet: co wpływa, co wypływa',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Wykres słupkowy budżetu rodziny: dochody 8000 zł; wydatki 7200 zł, w tym stałe 3500 zł i zmienne 3700 zł; nadwyżka 800 zł">
      <line x1="40" y1="190" x2="390" y2="190" class="ln sw"/>
      <rect x="50" y="30" width="90" height="160" class="f3 s3 sw"/>
      <rect x="190" y="46" width="90" height="74" class="f2 s2 sw"/><rect x="190" y="120" width="90" height="70" class="f1 s1 sw"/>
      <rect x="190" y="30" width="90" height="16" class="f4 s4 dash"/>
      <g class="tx-b" text-anchor="middle"><text x="95" y="110">8000 zł</text></g>
      <g class="tx-s" text-anchor="middle"><text x="95" y="208">dochody</text><text x="235" y="208">wydatki 7200 zł</text>
        <text x="235" y="80">zmienne</text><text x="235" y="96">3700</text><text x="235" y="160">stałe 3500</text></g>
      <text x="290" y="43" class="tx-s">← nadwyżka 800</text>
    </svg>`,
    text: `<p><b>Budżet domowy</b> to zestawienie <b>dochodów</b> (pensje, emerytury, zasiłki) i <b>wydatków</b>. Wydatki <b>stałe</b> są co miesiąc podobne (czynsz, prąd, rata), <b>zmienne</b> zależą od decyzji (jedzenie, ubrania, kino).</p>
      <p>Tu: 8000 − (3500 + 3700) = 8000 − 7200 = <b>800 zł</b> zostaje na oszczędności.</p>`,
    remember: 'Saldo = dochody − wydatki (stałe + zmienne).',
    hook: 'Najpierw „zapłać sobie” – odłóż oszczędności zaraz po wypłacie, a nie z tego, co zostanie.',
    check: { q: 'Dochody 6000 zł, wydatki stałe 2500 zł, zmienne 3000 zł. Ile wynosi saldo?', options: ['500 zł', '3500 zł', '−500 zł'], answer: 0, explain: '6000 − (2500 + 3000) = 6000 − 5500 = 500 zł nadwyżki.' },
  },
  {
    title: 'Nadwyżka, równowaga czy deficyt',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy rodzaje budżetu: nadwyżka – dochody większe od wydatków; budżet zrównoważony – równe; deficyt – wydatki większe od dochodów">
      <g class="sw"><rect x="10" y="20" width="120" height="140" rx="10" class="f3 s3"/><rect x="140" y="20" width="120" height="140" rx="10" class="f4 s4"/><rect x="270" y="20" width="120" height="140" rx="10" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="60">D &gt; W</text><text x="200" y="60">D = W</text><text x="330" y="60">D &lt; W</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="95">nadwyżka</text><text x="200" y="95">równowaga</text><text x="330" y="95">deficyt</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="125">można</text><text x="70" y="141">oszczędzać</text><text x="200" y="125">wszystko</text><text x="200" y="141">wydane</text><text x="330" y="125">brakuje –</text><text x="330" y="141">trzeba ciąć</text></g>
      <text x="200" y="182" class="tx-s" text-anchor="middle">D – dochody, W – wydatki</text>
    </svg>`,
    text: `<p>Gdy dochody są większe od wydatków – masz <b>nadwyżkę</b> i możesz oszczędzać. Gdy są równe – budżet jest <b>zrównoważony</b>. Gdy wydajesz więcej, niż zarabiasz – powstaje <b>deficyt</b> i trzeba ograniczyć wydatki albo pożyczać.</p>
      <p>Planowanie budżetu pomaga uniknąć długów i odłożyć pieniądze na ważne cele.</p>`,
    remember: 'Deficyt = wydatki większe od dochodów.',
    hook: 'Deficyt – „defekt w portfelu”: dziura, przez którą uciekają pieniądze.',
  },
];

window.LESSONS['wos/szkola'] = [
  {
    title: 'Cztery zadania szkoły',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Funkcje szkoły: kształcąca – wiedza i umiejętności; wychowawcza – postawy i wartości; opiekuńcza – bezpieczeństwo i pomoc; kulturalna – akademie, teatr, tradycje">
      <g class="sw"><rect x="10" y="10" width="185" height="90" rx="10" class="f1 s1"/><rect x="205" y="10" width="185" height="90" rx="10" class="f3 s3"/>
        <rect x="10" y="110" width="185" height="90" rx="10" class="f4 s4"/><rect x="205" y="110" width="185" height="90" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="45">📚 kształcąca</text><text x="297" y="45">🧭 wychowawcza</text><text x="102" y="145">🛡️ opiekuńcza</text><text x="297" y="145">🎭 kulturalna</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="75">wiedza i umiejętności</text><text x="297" y="75">postawy i wartości</text><text x="102" y="175">bezpieczeństwo, pomoc</text><text x="297" y="175">akademie, teatr, tradycje</text></g>
    </svg>`,
    text: `<p>Szkoła <b>kształci</b> (wiedza), <b>wychowuje</b> (postawy), <b>opiekuje się</b> (bezpieczeństwo, pedagog, świetlica) i dba o <b>kulturę</b>.</p>
      <p>Konstytucja: <b>nauka do 18. roku życia jest obowiązkowa</b>, a w szkołach publicznych – bezpłatna.</p>`,
    remember: 'Nauka obowiązkowa do 18 lat (Konstytucja, art. 70).',
    hook: 'K-W-O-K: Kształci, Wychowuje, Opiekuje się, Kultura – szkoła ma cztery łapy jak kot.',
  },
  {
    title: 'Samorząd to wszyscy uczniowie',
    svg: `<svg viewBox="0 0 410 240" role="img" aria-label="Samorząd uczniowski tworzą wszyscy uczniowie; wybierają swoje organy w głosowaniu równym, tajnym i powszechnym; samorząd przedstawia wnioski i opinie dyrektorowi i radzie pedagogicznej">
      <defs><marker id="a-k8w-szk-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="120" cy="105" r="95" class="f1 s1 sw"/>
      <text x="120" y="50" class="tx-b" text-anchor="middle">wszyscy</text>
      <text x="120" y="72" class="tx-b" text-anchor="middle">uczniowie</text>
      <rect x="55" y="100" width="130" height="54" rx="8" class="f4 s4 sw"/>
      <text x="120" y="123" class="tx-s" text-anchor="middle">wybrany zarząd</text><text x="120" y="141" class="tx-s" text-anchor="middle">(przedstawiciele)</text>
      <text x="120" y="228" class="tx-s" text-anchor="middle">wybory: równe, tajne, powszechne</text>
      <path d="M218,105 L262,105" class="ln sw" marker-end="url(#a-k8w-szk-2)"/>
      <rect x="268" y="55" width="136" height="100" rx="10" class="f3 s3 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="336" y="85">wnioski i opinie</text><text x="336" y="107">→ dyrektor,</text><text x="336" y="127">rada</text><text x="336" y="143">pedagogiczna</text></g>
    </svg>`,
    text: `<p><b>Samorząd uczniowski tworzą wszyscy uczniowie</b> – nie trzeba się zapisywać. Regulamin uchwala ogół uczniów w głosowaniu <b>równym, tajnym i powszechnym</b>; wybrany zarząd reprezentuje wszystkich.</p>
      <p>Samorząd może składać <b>wnioski i opinie</b> we wszystkich sprawach szkoły, np. o gazecie szkolnej, imprezach czy wyborze opiekuna, a z dyrektorem może prowadzić <b>wolontariat</b>.</p>`,
    remember: 'Samorząd uczniowski = wszyscy uczniowie szkoły (Prawo oświatowe, art. 85).',
    check: { q: 'Kto należy do samorządu uczniowskiego?', options: ['tylko wybrany zarząd', 'wszyscy uczniowie szkoły', 'uczniowie, którzy się zapiszą'], answer: 1, explain: 'Samorząd tworzą wszyscy uczniowie; zarząd to tylko ich przedstawiciele.' },
  },
  {
    title: 'Statut – instrukcja obsługi szkoły',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dokument statut szkoły: zawiera prawa ucznia – jawna i umotywowana ocena, gazeta szkolna, wybór opiekuna samorządu – oraz obowiązki – usprawiedliwianie nieobecności, właściwe zachowanie, zasady korzystania z telefonu">
      <rect x="20" y="10" width="360" height="190" rx="10" class="bg ln sw"/>
      <text x="200" y="38" class="tx-b" text-anchor="middle">📜 STATUT SZKOŁY</text>
      <line x1="200" y1="52" x2="200" y2="190" class="ln-thin"/>
      <g class="tx" text-anchor="middle"><text x="110" y="72">prawa</text><text x="290" y="72">obowiązki</text></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="100">jawna i umotywowana</text><text x="110" y="116">ocena</text><text x="110" y="142">gazeta szkolna</text><text x="110" y="168">wybór opiekuna SU</text>
        <text x="290" y="100">usprawiedliwianie</text><text x="290" y="116">nieobecności</text><text x="290" y="142">właściwe zachowanie</text><text x="290" y="168">zasady dot. telefonu</text></g>
    </svg>`,
    text: `<p>Najważniejszy dokument szkoły to <b>statut</b>. Znajdziesz w nim twoje <b>prawa</b> (np. jawna i umotywowana ocena), <b>obowiązki</b> (np. usprawiedliwianie nieobecności, szacunek wobec innych) oraz <b>tryb składania skarg</b>.</p>
      <p>Prawa mają też pracownicy szkoły – nagrywanie nauczyciela i wrzucanie obraźliwych filmików narusza ich dobre imię. Nauczyciel w pracy jest chroniony jak funkcjonariusz publiczny.</p>`,
    remember: 'Twoje prawa, obowiązki i tryb skarg – w statucie szkoły.',
    hook: 'Statut jak regulamin gry: zanim powiesz „to niesprawiedliwe”, sprawdź zasady.',
  },
  {
    title: 'Droga, gdy ktoś łamie twoje prawa',
    svg: `<svg viewBox="0 0 440 220" role="img" aria-label="Schodki dochodzenia praw ucznia: rozmowa z nauczycielem, wychowawca lub pedagog, dyrektor – skarga według statutu, kuratorium oświaty, Rzecznik Praw Dziecka">
      <g class="sw"><rect x="4" y="170" width="86" height="40" class="f1 s1"/><rect x="90" y="135" width="86" height="75" class="f3 s3"/><rect x="176" y="100" width="86" height="110" class="f4 s4"/><rect x="262" y="65" width="86" height="145" class="f5 s5"/><rect x="348" y="30" width="86" height="180" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="47" y="160">1</text><text x="133" y="125">2</text><text x="219" y="90">3</text><text x="305" y="55">4</text><text x="391" y="20">5</text></g>
      <g class="tx-s" text-anchor="middle"><text x="47" y="195">nauczyciel</text>
        <text x="133" y="160">wychowawca</text><text x="133" y="176">lub pedagog</text>
        <text x="219" y="125">dyrektor</text><text x="219" y="141">(skarga)</text>
        <text x="305" y="90">kuratorium</text><text x="305" y="106">oświaty</text>
        <text x="391" y="55">Rzecznik</text><text x="391" y="71">Praw</text><text x="391" y="87">Dziecka</text></g>
    </svg>`,
    text: `<p>Zacznij od <b>rozmowy</b> z nauczycielem. Potem: wychowawca, pedagog, samorząd uczniowski, <b>dyrektor</b> (skarga według statutu). Gdy to nie pomaga – <b>kuratorium oświaty</b>, które sprawuje nadzór pedagogiczny, a także <b>Rzecznik Praw Dziecka</b>.</p>`,
    remember: 'Nadzór pedagogiczny nad szkołami sprawuje kurator oświaty.',
    hook: 'Idź po schodkach – nie skacz od razu na ostatni stopień.',
    check: { q: 'Który organ sprawuje nadzór pedagogiczny nad szkołami w województwie?', options: ['wójt', 'kurator oświaty', 'rada rodziców'], answer: 1, explain: 'Art. 51 Prawa oświatowego: kurator oświaty w imieniu wojewody.' },
  },
];

window.LESSONS['wos/prawa-czlowieka'] = [
  {
    title: 'Godność – korzeń wszystkich praw',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Drzewo: korzeń to godność człowieka, z pnia wyrastają dwie gałęzie – wolności i prawa">
      <rect x="185" y="90" width="30" height="80" class="f4 s4 sw"/>
      <ellipse cx="110" cy="65" rx="90" ry="45" class="f3 s3 sw"/><ellipse cx="290" cy="65" rx="90" ry="45" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="110" y="62">wolności</text><text x="290" y="62">prawa</text></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="82">sumienia, słowa…</text><text x="290" y="82">do sądu, obrony…</text></g>
      <rect x="90" y="170" width="220" height="44" rx="10" class="f5 s5 sw"/>
      <text x="200" y="198" class="tx-b" text-anchor="middle">GODNOŚĆ (art. 30)</text>
    </svg>`,
    text: `<p>Konstytucja, art. 30: przyrodzona i niezbywalna <b>godność</b> człowieka jest <b>źródłem wolności i praw</b>. Jest nienaruszalna, a władza musi ją szanować i chronić.</p>
      <p>Godność masz, bo jesteś człowiekiem – nie za oceny, pieniądze czy sławę.</p>`,
    remember: 'Godność → z niej wyrastają wszystkie wolności i prawa.',
    hook: 'Godność jak korzeń: nie widać jej, ale bez niej całe drzewo praw się przewraca.',
  },
  {
    title: 'Cztery cechy praw człowieka',
    svg: `<svg viewBox="0 0 440 200" role="img" aria-label="Cechy praw człowieka: przyrodzone – od urodzenia; powszechne – dla każdego; niezbywalne – nie można się ich zrzec; nienaruszalne – władza nie może ich odebrać">
      <g class="sw"><rect x="4" y="20" width="104" height="160" rx="10" class="f1 s1"/><rect x="112" y="20" width="104" height="160" rx="10" class="f3 s3"/><rect x="220" y="20" width="104" height="160" rx="10" class="f4 s4"/><rect x="328" y="20" width="104" height="160" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="56" y="55">P</text><text x="164" y="55">P</text><text x="272" y="55">N</text><text x="380" y="55">N</text></g>
      <g class="tx-s" text-anchor="middle"><text x="56" y="90">przyrodzone</text><text x="56" y="125">od</text><text x="56" y="141">urodzenia</text>
        <text x="164" y="90">powszechne</text><text x="164" y="125">dla</text><text x="164" y="141">każdego</text>
        <text x="272" y="90">niezbywalne</text><text x="272" y="125">nie można</text><text x="272" y="141">się ich zrzec</text>
        <text x="380" y="90">nienaruszalne</text><text x="380" y="125">władza ich</text><text x="380" y="141">nie odbierze</text></g>
    </svg>`,
    text: `<p>Prawa człowieka są <b>przyrodzone</b> (państwo ich nie nadaje, tylko chroni), <b>powszechne</b> (dla każdego), <b>niezbywalne</b> (nie można się ich zrzec) i <b>nienaruszalne</b>.</p>
      <p><b>Powszechną Deklarację Praw Człowieka</b> uchwaliło Zgromadzenie Ogólne ONZ <b>10 grudnia 1948 r.</b> – po tragedii II wojny światowej.</p>`,
    remember: 'P-P-N-N: przyrodzone, powszechne, niezbywalne, nienaruszalne.',
    hook: 'PPNN brzmi jak kod do sejfu – a prawa człowieka to właśnie sejf, którego władza nie otworzy.',
    check: { q: 'Prawa człowieka są niezbywalne, czyli:', options: ['można je sprzedać', 'nie można się ich zrzec', 'dotyczą tylko dorosłych'], answer: 1, explain: 'Niezbywalny = nie da się go oddać ani przekazać.' },
  },
  {
    title: 'Wolność czy prawo?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie: wolność – państwo ma się nie wtrącać, np. wolność sumienia i religii, wolność słowa; prawo – możesz żądać działania państwa, np. prawo do sądu, prawo do obrony">
      <g class="sw"><rect x="10" y="10" width="185" height="200" rx="12" class="f1 s1"/><rect x="205" y="10" width="185" height="200" rx="12" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="45">🚧</text><text x="297" y="45">📣</text></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="75">WOLNOŚĆ</text><text x="297" y="75">PRAWO</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="100">„państwo,</text><text x="102" y="116">nie wtrącaj się”</text>
        <text x="102" y="150">sumienia i religii</text><text x="102" y="168">wyrażania poglądów</text><text x="102" y="186">poruszania się</text>
        <text x="297" y="100">„państwo,</text><text x="297" y="116">zadziałaj”</text>
        <text x="297" y="150">do sądu</text><text x="297" y="168">do obrony</text><text x="297" y="186">do ochrony życia</text></g>
    </svg>`,
    text: `<p><b>Wolność</b> oznacza, że państwo ma ci <b>nie przeszkadzać</b> – np. wolność sumienia i religii czy wyrażania poglądów. <b>Prawo</b> oznacza, że możesz <b>żądać</b> od państwa działania – np. prawo do sądu czy do obrony.</p>
      <p>Ograniczyć je można tylko <b>w ustawie</b>, gdy to konieczne, i nigdy w ich istocie (art. 31).</p>`,
    remember: 'Wolność – brak ingerencji państwa; prawo – żądanie działania państwa.',
    check: { q: 'Co jest wolnością, a nie prawem?', options: ['wolność sumienia i religii', 'prawo do obrony', 'prawo do sądu'], answer: 0, explain: 'W sprawach sumienia państwo ma się nie wtrącać – to wolność.' },
  },
  {
    title: 'Masz wpływ: prawa polityczne',
    svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Prawa i wolności polityczne z Konstytucji: wybory i referendum od 18 lat (art. 62), pokojowe zgromadzenia (art. 57), zrzeszanie się (art. 58), informacja o działaniach władzy (art. 61), petycje, wnioski i skargi (art. 63)">
      <g class="sw"><rect x="5" y="8" width="125" height="108" rx="10" class="f1 s1"/><rect x="138" y="8" width="125" height="108" rx="10" class="f3 s3"/><rect x="271" y="8" width="125" height="108" rx="10" class="f4 s4"/>
        <rect x="5" y="124" width="190" height="104" rx="10" class="f5 s5"/><rect x="205" y="124" width="190" height="104" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="67" y="34">🗳️</text><text x="200" y="34">📢</text><text x="333" y="34">👥</text><text x="100" y="150">ℹ️</text><text x="300" y="150">✉️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="56">wybory</text><text x="67" y="72">i referendum</text><text x="67" y="88">od 18 lat</text><text x="67" y="106">art. 62</text>
        <text x="200" y="56">pokojowe</text><text x="200" y="72">zgromadzenia</text><text x="200" y="106">art. 57</text>
        <text x="333" y="56">zrzeszanie się</text><text x="333" y="72">np. w klubie</text><text x="333" y="106">art. 58</text>
        <text x="100" y="174">informacja</text><text x="100" y="190">o działaniach władz</text><text x="100" y="214">art. 61</text>
        <text x="300" y="174">petycje, wnioski</text><text x="300" y="190">i skargi</text><text x="300" y="214">art. 63</text></g>
      <text x="200" y="246" class="tx-s" text-anchor="middle">tak wpływasz na życie publiczne</text>
    </svg>`,
    text: `<p>Prawa i wolności polityczne pozwalają <b>wpływać na władzę</b>: głosować w wyborach i referendach (<b>od 18 lat</b>), organizować pokojowe zgromadzenia, zakładać stowarzyszenia, żądać informacji o działaniach władz i składać <b>petycje</b>.</p>`,
    remember: 'Prawo wyborcze i do referendum – od 18 lat (art. 62).',
    hook: '„Petycja” brzmi jak „prośba z podpisami” – dokładnie tym jest.',
  },
];

window.LESSONS['wos/ochrona-praw'] = [
  {
    title: 'Konwencja o prawach dziecka',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Oś czasu: 1948 – Powszechna Deklaracja Praw Człowieka; 1978 – Polska proponuje projekt Konwencji o prawach dziecka; 1989 – ONZ przyjmuje Konwencję (20 listopada)">
      <defs><marker id="a-k8w-ochr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="100" x2="390" y2="100" class="ln sw" marker-end="url(#a-k8w-ochr-1)"/>
      <g class="sw"><circle cx="60" cy="100" r="9" class="f1 s1"/><circle cx="200" cy="100" r="9" class="pl-w ln"/><circle cx="330" cy="100" r="10" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="60" y="75">1948</text><text x="200" y="75">1978</text><text x="330" y="75">1989</text></g>
      <g class="tx-s" text-anchor="middle"><text x="60" y="130">Powszechna</text><text x="60" y="146">Deklaracja</text><text x="60" y="162">Praw Człowieka</text>
        <text x="200" y="130">🇵🇱 Polska</text><text x="200" y="146">proponuje projekt</text><text x="200" y="162">Konwencji</text>
        <text x="330" y="130">ONZ przyjmuje</text><text x="330" y="146">Konwencję</text><text x="330" y="162">(20 listopada)</text></g>
      <text x="200" y="192" class="tx-s" text-anchor="middle">dziecko = każdy człowiek poniżej 18 lat</text>
    </svg>`,
    text: `<p><b>Konwencję o prawach dziecka</b> przyjęło Zgromadzenie Ogólne ONZ <b>20 listopada 1989 r.</b>, a jej projekt zaproponowała <b>Polska</b>. Dzieckiem jest każdy człowiek <b>poniżej 18 lat</b>.</p>
      <p>We wszystkich sprawach dotyczących dzieci najważniejsze ma być <b>dobro dziecka</b>.</p>`,
    remember: 'Konwencja o prawach dziecka – ONZ, 20 XI 1989; projekt z Polski.',
    hook: '20 listopada = Dzień Praw Dziecka – data urodzin Konwencji.',
    check: { q: 'Kto według Konwencji jest dzieckiem?', options: ['każdy poniżej 18 lat', 'każdy poniżej 13 lat', 'tylko uczniowie szkół podstawowych'], answer: 0, explain: 'Art. 1 Konwencji: każda istota ludzka poniżej osiemnastu lat.' },
  },
  {
    title: 'Twoje prawa z Konwencji',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Wybrane prawa z Konwencji o prawach dziecka: wyrażanie poglądów, prywatność, ochrona przed przemocą, nauka, wypoczynek i zabawa, ochrona przed wyzyskiem">
      <g class="sw"><rect x="5" y="10" width="125" height="90" rx="10" class="f1 s1"/><rect x="138" y="10" width="125" height="90" rx="10" class="f3 s3"/><rect x="271" y="10" width="125" height="90" rx="10" class="f4 s4"/>
        <rect x="5" y="110" width="125" height="90" rx="10" class="f5 s5"/><rect x="138" y="110" width="125" height="90" rx="10" class="f2 s2"/><rect x="271" y="110" width="125" height="90" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="67" y="40">💬</text><text x="200" y="40">🔒</text><text x="333" y="40">🛡️</text><text x="67" y="140">🎒</text><text x="200" y="140">⚽</text><text x="333" y="140">🚫</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="66">własne poglądy</text><text x="67" y="84">art. 12–13</text>
        <text x="200" y="66">prywatność</text><text x="200" y="84">art. 16</text>
        <text x="333" y="66">bez przemocy</text><text x="333" y="84">art. 19</text>
        <text x="67" y="166">nauka</text><text x="67" y="184">art. 28</text>
        <text x="200" y="166">wypoczynek</text><text x="200" y="184">art. 31</text>
        <text x="333" y="166">bez wyzysku</text><text x="333" y="184">art. 32</text></g>
    </svg>`,
    text: `<p>Masz m.in. prawo do <b>wyrażania poglądów</b>, <b>prywatności</b> (także korespondencji), <b>ochrony przed przemocą</b>, <b>nauki</b>, <b>wypoczynku i zabawy</b> oraz ochrony przed wyzyskiem i szkodliwą pracą.</p>
      <p>Konstytucja (art. 72): każdy może żądać od władz ochrony dziecka przed przemocą i wyzyskiem.</p>`,
    remember: 'Art. 31 Konwencji – prawo do wypoczynku i zabawy.',
  },
  {
    title: 'Dwóch rzeczników',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Porównanie Rzecznika Praw Dziecka i Rzecznika Praw Obywatelskich: obaj powoływani przez Sejm za zgodą Senatu na 5 lat; RPD chroni dzieci, telefon 800 12 12 12; RPO pomaga każdemu, gdy prawa naruszył urząd, wniosek bezpłatny">
      <rect x="60" y="8" width="280" height="40" rx="8" class="f4 s4 sw"/>
      <text x="200" y="34" class="tx" text-anchor="middle">Sejm + zgoda Senatu · 5 lat</text>
      <g class="sw"><rect x="10" y="62" width="185" height="160" rx="12" class="f3 s3"/><rect x="205" y="62" width="185" height="160" rx="12" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="92">👧 RPD</text><text x="297" y="92">🧑 RPO</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="118">Rzecznik Praw Dziecka</text><text x="102" y="146">chroni prawa dzieci</text><text x="102" y="164">bada sprawy na miejscu</text><text x="102" y="196">☎ 800 12 12 12</text>
        <text x="297" y="118">Rzecznik Praw</text><text x="297" y="134">Obywatelskich</text><text x="297" y="160">każdy, gdy prawa</text><text x="297" y="176">naruszył urząd</text><text x="297" y="200">wniosek bezpłatny</text></g>
    </svg>`,
    text: `<p><b>Rzecznik Praw Dziecka</b> stoi na straży praw dzieci: może zbadać sprawę na miejscu, żądać wyjaśnień, brać udział w sprawach sądowych. Jego <b>Dziecięcy Telefon Zaufania: 800 12 12 12</b> – bezpłatnie i całą dobę.</p>
      <p>Do <b>Rzecznika Praw Obywatelskich</b> może się zwrócić <b>każdy</b>, czyje prawa naruszył organ władzy publicznej. Wniosek jest <b>bezpłatny</b>. Obu rzeczników powołuje <b>Sejm za zgodą Senatu na 5 lat</b>.</p>`,
    remember: 'RPD i RPO: Sejm + zgoda Senatu, kadencja 5 lat.',
    hook: 'RPD – „D jak dziecko”, RPO – „O jak obywatel”, czyli każdy.',
    check: { q: 'Ile kosztuje wniosek do Rzecznika Praw Obywatelskich?', options: ['nic', '50 zł', '1% dochodu'], answer: 0, explain: 'Wniosek do RPO jest wolny od opłat i nie wymaga szczególnej formy.' },
  },
  {
    title: 'Nie bądź obojętny',
    svg: `<svg viewBox="0 0 410 190" role="img" aria-label="Reakcja na nietolerancję w czterech krokach: zauważ, nie dołączaj, wesprzyj osobę wykluczaną, zgłoś dorosłemu lub moderatorowi">
      <defs><marker id="a-k8w-ochr-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="5" y="40" width="88" height="100" rx="10" class="f1 s1"/><rect x="111" y="40" width="88" height="100" rx="10" class="f4 s4"/><rect x="217" y="40" width="88" height="100" rx="10" class="f3 s3"/><rect x="323" y="40" width="82" height="100" rx="10" class="f5 s5"/></g>
      <g class="ln"><path d="M93,90 L109,90" marker-end="url(#a-k8w-ochr-4)"/><path d="M199,90 L215,90" marker-end="url(#a-k8w-ochr-4)"/><path d="M305,90 L321,90" marker-end="url(#a-k8w-ochr-4)"/></g>
      <g class="tx" text-anchor="middle"><text x="49" y="75">👀</text><text x="155" y="75">✋</text><text x="261" y="75">🤝</text><text x="364" y="75">📣</text></g>
      <g class="tx-s" text-anchor="middle"><text x="49" y="105">zauważ</text><text x="155" y="105">nie</text><text x="155" y="121">dołączaj</text><text x="261" y="105">wesprzyj</text><text x="364" y="105">zgłoś</text><text x="364" y="121">dorosłemu</text></g>
      <text x="205" y="25" class="tx-b" text-anchor="middle">gdy ktoś jest wykluczany</text>
      <text x="205" y="172" class="tx-s" text-anchor="middle">Konstytucja, art. 32: nikt nie może być dyskryminowany</text>
    </svg>`,
    text: `<p>Konstytucja zakazuje <b>dyskryminacji</b> z jakiejkolwiek przyczyny. Brak tolerancji wobec mniejszości – narodowych, religijnych, osób z niepełnosprawnością – to np. wyzwiska, wykluczanie, hejt w sieci.</p>
      <p>Prawa człowieka chronią też <b>organizacje pozarządowe</b>, np. <b>Amnesty International</b> czy <b>Helsińska Fundacja Praw Człowieka</b>: monitorują, informują o naruszeniach, pomagają ofiarom.</p>`,
    remember: 'Art. 32 Konstytucji: wszyscy są wobec prawa równi.',
    hook: 'Obojętny świadek to cichy pomocnik sprawcy – wystarczy jeden, kto powie „stop”.',
  },
];

window.LESSONS['wos/nieletni'] = [
  {
    title: 'Przemoc ma wiele twarzy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Rodzaje przemocy: fizyczna – bicie, popychanie; psychiczna – zastraszanie, szantaż; werbalna – wyzwiska, groźby; cyberprzemoc – hejt, zdjęcia bez zgody, podszywanie się">
      <g class="sw"><rect x="10" y="10" width="185" height="90" rx="10" class="f2 s2"/><rect x="205" y="10" width="185" height="90" rx="10" class="f5 s5"/>
        <rect x="10" y="110" width="185" height="90" rx="10" class="f4 s4"/><rect x="205" y="110" width="185" height="90" rx="10" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="42">👊 fizyczna</text><text x="297" y="42">😰 psychiczna</text><text x="102" y="142">🗯️ werbalna</text><text x="297" y="142">📱 cyber</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="70">bicie, popychanie,</text><text x="102" y="86">niszczenie rzeczy</text>
        <text x="297" y="70">zastraszanie, szantaż,</text><text x="297" y="86">wykluczanie</text>
        <text x="102" y="170">wyzwiska, groźby,</text><text x="102" y="186">przezwiska</text>
        <text x="297" y="170">hejt, zdjęcia bez zgody,</text><text x="297" y="186">podszywanie się</text></g>
    </svg>`,
    text: `<p>Przemoc to nie tylko bicie. Rani też <b>zastraszanie</b>, <b>szantaż</b>, <b>wyzwiska</b>, wykluczanie z grupy i <b>cyberprzemoc</b>. Gdy jej doświadczasz lub widzisz – powiedz <b>rodzicom, wychowawcy, pedagogowi</b>, dyrektorowi, a gdy jest zagrożenie – zadzwoń na <b>112</b>.</p>
      <p>Anonimowo pomogą: <b>116 111</b> i <b>800 12 12 12</b>.</p>`,
    remember: 'Przemoc: fizyczna, psychiczna, werbalna, cyber – każdą trzeba zgłosić.',
    check: { q: 'Które zachowanie to przemoc psychiczna?', options: ['szantażowanie kolegi', 'popchnięcie', 'zniszczenie roweru'], answer: 0, explain: 'Szantaż rani bez użycia siły – to przemoc psychiczna.' },
  },
  {
    title: 'Cyberprzemoc: plan działania',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Pięć kroków przy cyberprzemocy: nie odpowiadaj agresją, zrób zrzuty ekranu, zablokuj sprawcę, zgłoś administratorowi, powiedz dorosłemu lub zadzwoń pod 116 111">
      <g class="sw"><rect x="10" y="10" width="380" height="34" rx="8" class="f2 s2"/><rect x="10" y="50" width="380" height="34" rx="8" class="f1 s1"/><rect x="10" y="90" width="380" height="34" rx="8" class="f4 s4"/><rect x="10" y="130" width="380" height="34" rx="8" class="f5 s5"/><rect x="10" y="170" width="380" height="40" rx="8" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="34" y="33">1</text><text x="34" y="73">2</text><text x="34" y="113">3</text><text x="34" y="153">4</text><text x="34" y="196">5</text></g>
      <g class="tx"><text x="60" y="33">🙊 nie odpowiadaj agresją</text><text x="60" y="73">📸 zrób zrzuty ekranu</text><text x="60" y="113">🚫 zablokuj sprawcę</text><text x="60" y="153">🚩 zgłoś administratorowi</text><text x="60" y="196">🗣️ powiedz dorosłemu</text></g>
      <text x="380" y="196" class="tx-s" text-anchor="end">☎ 116 111</text>
    </svg>`,
    text: `<p>Gdy ktoś cię hejtuje, ośmiesza albo podszywa się pod ciebie: <b>nie odpowiadaj agresją</b>, <b>zabezpiecz dowody</b> (zrzuty ekranu), <b>zablokuj</b>, <b>zgłoś</b> administratorowi serwisu i <b>powiedz zaufanemu dorosłemu</b>.</p>
      <p>Podszywanie się pod kogoś w sieci, które wyrządza mu szkodę, to <b>przestępstwo</b> (Kodeks karny, art. 190a).</p>`,
    remember: 'Dowody (zrzuty ekranu) + zgłoszenie dorosłemu = podstawa.',
    hook: 'Najpierw „klik” (zrzut ekranu), potem „blok”, na końcu „mów”.',
  },
  {
    title: '10 – 13 – 17: kiedy odpowiadasz',
    svg: `<svg viewBox="0 0 410 210" role="img" aria-label="Oś wieku od 0 do 18 lat: od 10 lat postępowanie w sprawie demoralizacji; od 13 lat za czyny karalne – sąd rodzinny; od 17 lat odpowiedzialność karna jak dorosły">
      <defs><marker id="a-k8w-niel-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="182" y="90" width="170" height="20" class="f4"/><rect x="134" y="90" width="48" height="20" class="f1"/><rect x="352" y="90" width="38" height="20" class="f2"/>
      <line x1="20" y1="100" x2="400" y2="100" class="ln sw" marker-end="url(#a-k8w-niel-3)"/>
      <g class="ln sw"><line x1="134" y1="85" x2="134" y2="115"/><line x1="182" y1="85" x2="182" y2="115"/><line x1="352" y1="85" x2="352" y2="115"/></g>
      <g class="tx-b" text-anchor="middle"><text x="20" y="80">0</text><text x="134" y="80">10</text><text x="182" y="80">13</text><text x="352" y="80">17</text></g>
      <g class="tx-s" text-anchor="middle"><text x="105" y="140">od 10 lat:</text><text x="105" y="156">demoralizacja</text>
        <text x="260" y="140">13–17 lat: czyn karalny</text><text x="260" y="156">→ sąd rodzinny</text>
        <text x="352" y="40">od 17 lat:</text><text x="352" y="56">jak dorosły</text></g>
      <text x="205" y="196" class="tx-s" text-anchor="middle">wyjątkowo za najcięższe czyny – już od 15 (zabójstwo: od 14) lat</text>
    </svg>`,
    text: `<p>Od <b>10 lat</b> sąd rodzinny może zająć się <b>demoralizacją</b> (np. wagary, alkohol). Za <b>czyn karalny</b> popełniony między <b>13 a 17 rokiem życia</b> odpowiadasz przed <b>sądem rodzinnym</b> – grożą środki wychowawcze (upomnienie, nadzór kuratora, prace społeczne, przeproszenie) albo <b>zakład poprawczy</b>.</p>
      <p>Od <b>17 lat</b> odpowiadasz karnie <b>jak dorosły</b> (Kodeks karny, art. 10).</p>`,
    remember: '10 – demoralizacja, 13 – sąd rodzinny, 17 – Kodeks karny.',
    hook: 'Liczby jak piętra w windzie: 10, 13, 17 – im wyżej, tym poważniejsza odpowiedzialność.',
    check: { q: '14-latek popełnił kradzież. Kto zajmie się sprawą?', options: ['sąd rodzinny', 'nikt – jest za młody', 'sąd jak dla dorosłych'], answer: 0, explain: 'Czyn karalny w wieku 13–17 lat – sprawa trafia do sądu rodzinnego.' },
  },
  {
    title: 'Policja: jej uprawnienia, twoje prawa',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Uprawnienia policji: legitymowanie, zatrzymanie, przeszukanie według ustaw; prawa zatrzymanego nieletniego: informacja o przyczynie, kontakt z rodzicem lub obrońcą, odmowa wyjaśnień, pomoc medyczna, kopia protokołu">
      <g class="sw"><rect x="10" y="10" width="185" height="210" rx="12" class="f1 s1"/><rect x="205" y="10" width="185" height="210" rx="12" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">👮 policja może</text><text x="297" y="40">🧒 ty masz prawo</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="76">legitymować</text><text x="102" y="92">(ustalić tożsamość)</text><text x="102" y="122">zatrzymać</text><text x="102" y="152">przeszukać</text><text x="102" y="168">(według ustaw)</text><text x="102" y="200">musi szanować godność</text>
        <text x="297" y="76">znać przyczynę</text><text x="297" y="102">kontakt z rodzicem</text><text x="297" y="118">lub obrońcą</text><text x="297" y="144">odmówić wyjaśnień</text><text x="297" y="170">pomoc medyczna</text><text x="297" y="196">kopia protokołu</text></g>
    </svg>`,
    text: `<p>Policjant może m.in. <b>legitymować</b>, <b>zatrzymać</b>, przeszukać – zawsze na podstawie ustaw – i musi przy tym <b>szanować godność i prawa człowieka</b>. Legitymować może też np. <b>straż miejska</b>.</p>
      <p>Zatrzymany nieletni ma prawo m.in. poznać <b>przyczynę zatrzymania</b>, skontaktować się z <b>rodzicem lub obrońcą</b>, <b>odmówić wyjaśnień</b>, dostać pomoc medyczną i kopię protokołu. Policja zawiadamia rodziców i sąd rodzinny.</p>`,
    remember: 'Zatrzymany nieletni: przyczyna, rodzic lub obrońca, prawo do milczenia.',
    check: { q: 'Co oznacza legitymowanie?', options: ['ustalenie tożsamości', 'przeszukanie plecaka', 'wystawienie mandatu'], answer: 0, explain: 'Legitymowanie służy ustaleniu, kim jesteś.' },
  },
];

window.LESSONS['wos/gmina'] = [
  {
    title: 'Gmina robi to, co najbliżej ciebie',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Zadania własne gminy: woda i kanalizacja, wywóz śmieci, szkoły podstawowe i przedszkola, lokalny transport, biblioteki i kultura, gminne drogi">
      <g class="sw"><rect x="5" y="10" width="125" height="90" rx="10" class="f1 s1"/><rect x="138" y="10" width="125" height="90" rx="10" class="f3 s3"/><rect x="271" y="10" width="125" height="90" rx="10" class="f4 s4"/>
        <rect x="5" y="110" width="125" height="90" rx="10" class="f5 s5"/><rect x="138" y="110" width="125" height="90" rx="10" class="f2 s2"/><rect x="271" y="110" width="125" height="90" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="67" y="45">🚰</text><text x="200" y="45">🗑️</text><text x="333" y="45">🏫</text><text x="67" y="145">🚌</text><text x="200" y="145">📚</text><text x="333" y="145">🛣️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="76">woda, kanalizacja</text><text x="200" y="76">wywóz śmieci</text><text x="333" y="76">podstawówki</text>
        <text x="67" y="176">lokalny transport</text><text x="200" y="176">biblioteka, kultura</text><text x="333" y="176">gminne drogi</text></g>
    </svg>`,
    text: `<p><b>Gmina</b> to podstawowa jednostka samorządu. Zajmuje się sprawami o znaczeniu lokalnym – to jej <b>zadania własne</b>: woda, śmieci, <b>szkoły podstawowe i przedszkola</b>, lokalne autobusy, biblioteki, drogi gminne, sport, zieleń, pomoc społeczna.</p>
      <p>Państwo może jej też zlecić zadania, np. <b>organizację wyborów</b> (zadania zlecone).</p>`,
    remember: 'Gmina – podstawowa jednostka samorządu terytorialnego.',
    hook: 'Gmina = sprawy „od kranu do klasy”: woda, śmieci, szkoła podstawowa.',
  },
  {
    title: 'Rada uchwala, wójt wykonuje',
    svg: `<svg viewBox="0 0 410 220" role="img" aria-label="Mieszkańcy wybierają bezpośrednio radę gminy i wójta na 5 lat; rada – organ stanowiący i kontrolny – uchwala budżet i kontroluje wójta; wójt – organ wykonawczy – wykonuje uchwały i kieruje urzędem gminy">
      <defs><marker id="a-k8w-gm-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="105" y="8" width="200" height="40" rx="10" class="f4 s4 sw"/>
      <text x="205" y="34" class="tx-b" text-anchor="middle">👥 mieszkańcy</text>
      <g class="ln"><path d="M160,48 L110,90" marker-end="url(#a-k8w-gm-2)"/><path d="M250,48 L300,90" marker-end="url(#a-k8w-gm-2)"/></g>
      <text x="205" y="76" class="tx-s" text-anchor="middle">wybory co 5 lat</text>
      <g class="sw"><rect x="10" y="95" width="180" height="115" rx="12" class="f1 s1"/><rect x="220" y="95" width="180" height="115" rx="12" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="100" y="124">rada gminy</text><text x="310" y="124">wójt</text></g>
      <g class="tx-s" text-anchor="middle"><text x="100" y="148">stanowi i kontroluje</text><text x="100" y="168">uchwala budżet</text><text x="100" y="188">i statut</text>
        <text x="310" y="148">wykonuje uchwały</text><text x="310" y="168">i budżet, kieruje</text><text x="310" y="188">urzędem gminy</text></g>
      <path d="M190,150 L218,150" class="ln dash" marker-end="url(#a-k8w-gm-2)"/>
    </svg>`,
    text: `<p><b>Rada gminy</b> to organ <b>stanowiący i kontrolny</b>: uchwala budżet, statut i plany, kontroluje wójta. <b>Wójt</b> (burmistrz, prezydent miasta) to organ <b>wykonawczy</b>: wykonuje uchwały i budżet, kieruje <b>urzędem gminy</b>.</p>
      <p>Oba organy wybierają mieszkańcy bezpośrednio na <b>5 lat</b>. Wójt potrzebuje <b>ponad połowy</b> ważnych głosów – inaczej po 14 dniach jest <b>druga tura</b>.</p>`,
    remember: 'Rada – uchwala i kontroluje, wójt – wykonuje. Kadencja 5 lat.',
    hook: 'Rada pisze przepis na ciasto, wójt je piecze.',
    check: { q: 'Kto uchwala budżet gminy?', options: ['wójt', 'rada gminy', 'sołtys'], answer: 1, explain: 'Uchwalenie budżetu należy do rady; wójt przygotowuje projekt i go wykonuje.' },
  },
  {
    title: 'Wójt, burmistrz czy prezydent?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Nazwa organu wykonawczego gminy: wójt – w gminie wiejskiej; burmistrz – gdy siedziba władz jest w mieście; prezydent miasta – w miastach powyżej 100 tysięcy mieszkańców">
      <g class="sw"><rect x="5" y="20" width="125" height="150" rx="10" class="f3 s3"/><rect x="138" y="20" width="125" height="150" rx="10" class="f4 s4"/><rect x="271" y="20" width="125" height="150" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="67" y="55">🌾</text><text x="200" y="55">🏘️</text><text x="333" y="55">🏙️</text></g>
      <g class="tx-b" text-anchor="middle"><text x="67" y="90">wójt</text><text x="200" y="90">burmistrz</text><text x="333" y="90">prezydent</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="120">gmina</text><text x="67" y="136">wiejska</text><text x="200" y="120">siedziba władz</text><text x="200" y="136">w mieście</text><text x="333" y="120">miasto powyżej</text><text x="333" y="136">100 tys.</text></g>
      <text x="200" y="192" class="tx-s" text-anchor="middle">kandydat: od 25 lat; w danej gminie najwyżej 2 razy</text>
    </svg>`,
    text: `<p>Organ wykonawczy ma różne nazwy: <b>wójt</b> w gminie wiejskiej, <b>burmistrz</b>, gdy siedziba władz jest w mieście, <b>prezydent miasta</b> – w miastach powyżej <b>100 tys.</b> mieszkańców. Kandydat musi mieć co najmniej <b>25 lat</b>.</p>
      <p><b>Przewodniczący rady</b> tylko prowadzi obrady – gminą nie kieruje. Kto pełni te funkcje w twojej gminie, sprawdzisz w <b>BIP</b>.</p>`,
    remember: 'Prezydent miasta – powyżej 100 tys. mieszkańców.',
  },
  {
    title: 'Jak odwołać władze gminy',
    svg: `<svg viewBox="0 0 410 210" role="img" aria-label="Referendum odwołujące: wniosek co najmniej 10 procent uprawnionych mieszkańców; referendum jest ważne, jeśli głosowało co najmniej trzy piąte liczby osób, które brały udział w wyborach odwoływanego organu">
      <defs><marker id="a-k8w-gm-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="5" y="40" width="120" height="120" rx="12" class="f4 s4"/><rect x="145" y="40" width="120" height="120" rx="12" class="f1 s1"/><rect x="285" y="40" width="120" height="120" rx="12" class="f3 s3"/></g>
      <g class="ln"><path d="M125,100 L143,100" marker-end="url(#a-k8w-gm-4)"/><path d="M265,100 L283,100" marker-end="url(#a-k8w-gm-4)"/></g>
      <g class="tx" text-anchor="middle"><text x="65" y="75">✍️</text><text x="205" y="75">🗳️</text><text x="345" y="75">✅</text></g>
      <g class="tx-b" text-anchor="middle"><text x="65" y="105">10%</text><text x="205" y="105">referendum</text><text x="345" y="105">3/5</text></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="128">mieszkańców</text><text x="65" y="144">pod wnioskiem</text><text x="205" y="128">mieszkańcy</text><text x="205" y="144">głosują</text><text x="345" y="128">frekwencji</text><text x="345" y="144">z wyborów</text></g>
      <text x="205" y="25" class="tx-s" text-anchor="middle">odwołanie rady lub wójta przed końcem kadencji</text>
      <text x="205" y="190" class="tx-s" text-anchor="middle">sesje rady są jawne – możesz na nie przyjść</text>
    </svg>`,
    text: `<p>Radę gminy i wójta można odwołać przed końcem kadencji w <b>referendum lokalnym</b>. Wniosek musi poprzeć co najmniej <b>10%</b> uprawnionych mieszkańców. Referendum o odwołanie jest ważne, gdy zagłosowało co najmniej <b>3/5 tylu osób</b>, ilu głosowało w wyborach tego organu.</p>
      <p>Na co dzień możesz przyjść na <b>sesję rady</b> – działalność gminy jest jawna.</p>`,
    remember: 'Referendum gminne: wniosek 10% mieszkańców.',
    hook: '3/5 – „trzy piąte frekwencji”: żeby odwołać, musi przyjść większość tych, co wybierali.',
    check: { q: 'Jaki odsetek mieszkańców musi poprzeć wniosek o referendum w gminie?', options: ['1%', '10%', '50%'], answer: 1, explain: 'Ustawa o referendum lokalnym: co najmniej 10% uprawnionych mieszkańców gminy.' },
  },
];

window.LESSONS['wos/powiat-wojewodztwo'] = [
  {
    title: 'Trzy piętra samorządu',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Piramida trójstopniowego podziału od 1 stycznia 1999 roku: na górze 16 województw, w środku powiaty, u podstawy gminy">
      <polygon points="200,15 270,75 130,75" class="f5 s5 sw"/>
      <polygon points="130,80 270,80 320,135 80,135" class="f1 s1 sw"/>
      <polygon points="80,140 320,140 370,195 30,195" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="200" y="64">16</text><text x="200" y="114">powiaty</text><text x="200" y="174">gminy</text></g>
      <g class="tx-s"><text x="282" y="50">województwa</text><text x="330" y="114">region</text><text x="10" y="60">od 1 I 1999</text></g>
    </svg>`,
    text: `<p>Od <b>1 stycznia 1999 r.</b> Polska dzieli się na <b>gminy</b>, <b>powiaty</b> i <b>16 województw</b>. Każdy szczebel ma swój samorząd i swoje zadania – im wyżej, tym sprawy dotyczą większego obszaru.</p>`,
    remember: 'Gmina → powiat → województwo (16).',
    hook: '1999 i 16 – rok reformy i liczba województw.',
    check: { q: 'Ile województw ma Polska?', options: ['16', '49', '12'], answer: 0, explain: 'Od 1999 r. jest 16 województw (wcześniej było 49).' },
  },
  {
    title: 'Kto rządzi w powiecie',
    svg: `<svg viewBox="0 0 440 200" role="img" aria-label="Mieszkańcy wybierają radę powiatu na 5 lat; rada powiatu wybiera zarząd powiatu ze starostą; zarząd działa przy pomocy starostwa powiatowego">
      <defs><marker id="a-k8w-pow-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="4" y="60" width="100" height="80" rx="10" class="f4 s4"/><rect x="114" y="60" width="100" height="80" rx="10" class="f1 s1"/><rect x="224" y="60" width="100" height="80" rx="10" class="f3 s3"/><rect x="334" y="60" width="100" height="80" rx="10" class="f5 s5"/></g>
      <g class="ln"><path d="M104,100 L112,100" marker-end="url(#a-k8w-pow-2)"/><path d="M214,100 L222,100" marker-end="url(#a-k8w-pow-2)"/><path d="M324,100 L332,100" marker-end="url(#a-k8w-pow-2)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="54" y="95">mieszkańcy</text><text x="54" y="115">👥</text>
        <text x="164" y="95">rada</text><text x="164" y="111">powiatu</text>
        <text x="274" y="95">zarząd ze</text><text x="274" y="111">starostą</text>
        <text x="384" y="95">starostwo</text><text x="384" y="111">powiatowe</text></g>
      <g class="tx-s" text-anchor="middle"><text x="109" y="45">wybierają</text><text x="219" y="45">wybiera</text></g>
      <text x="220" y="175" class="tx-s" text-anchor="middle">rada – organ stanowiący (5 lat), zarząd – wykonawczy</text>
    </svg>`,
    text: `<p>Mieszkańcy wybierają <b>radę powiatu</b> (organ stanowiący, <b>5 lat</b>). Rada wybiera <b>zarząd powiatu</b> ze <b>starostą</b> na czele – to organ wykonawczy, który pracuje przy pomocy <b>starostwa powiatowego</b>.</p>
      <p>Powiat prowadzi m.in. <b>szkoły ponadpodstawowe</b>, szpitale powiatowe, <b>powiatowy urząd pracy</b>, drogi powiatowe. Duże miasta to <b>miasta na prawach powiatu</b> – tam rządzi rada miasta i prezydent.</p>`,
    remember: 'Starostę wybiera rada powiatu (nie mieszkańcy).',
    check: { q: 'Kto wybiera starostę?', options: ['mieszkańcy', 'rada powiatu', 'wojewoda'], answer: 1, explain: 'Starostę wybiera rada powiatu w głosowaniu tajnym.' },
  },
  {
    title: 'Województwo: marszałek a wojewoda',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="W województwie działają: samorząd – sejmik województwa wybiera zarząd z marszałkiem, urząd marszałkowski; oraz rząd – wojewoda, przedstawiciel Rady Ministrów, który nadzoruje legalność działań samorządu">
      <defs><marker id="a-k8w-pow-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="10" width="200" height="200" rx="12" class="f3 s3"/><rect x="250" y="10" width="140" height="200" rx="12" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="110" y="38">SAMORZĄD</text><text x="320" y="38">RZĄD</text></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="70">sejmik województwa</text><text x="110" y="86">(wybory, 5 lat)</text>
        <text x="110" y="134">zarząd z marszałkiem</text><text x="110" y="180">urząd marszałkowski</text>
        <text x="320" y="80">wojewoda</text><text x="320" y="104">przedstawiciel</text><text x="320" y="120">Rady Ministrów</text></g>
      <path d="M110,92 L110,118" class="ln" marker-end="url(#a-k8w-pow-3)"/><path d="M110,140 L110,164" class="ln" marker-end="url(#a-k8w-pow-3)"/>
      <path d="M250,160 L212,160" class="ln dash" marker-end="url(#a-k8w-pow-3)"/>
      <text x="320" y="164" class="tx-s" text-anchor="middle">nadzór nad</text><text x="320" y="180" class="tx-s" text-anchor="middle">legalnością</text>
    </svg>`,
    text: `<p>Samorząd województwa to <b>sejmik</b> (organ stanowiący, wybierany na <b>5 lat</b>) i <b>zarząd z marszałkiem</b> (organ wykonawczy, wybierany przez sejmik). Zajmuje się m.in. szkolnictwem wyższym, kulturą, transportem i drogami wojewódzkimi, ochroną zdrowia i środowiska.</p>
      <p><b>Wojewoda</b> to coś innego: przedstawiciel <b>rządu</b> (Rady Ministrów), który m.in. sprawdza, czy samorządy działają zgodnie z prawem.</p>`,
    remember: 'Marszałek – samorząd; wojewoda – rząd.',
    hook: 'Wojewoda „wozi” polecenia rządu, marszałek „maszeruje” na czele samorządu.',
  },
  {
    title: 'Kto czym się zajmuje',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie przykładowych zadań: gmina – szkoły podstawowe, wodociągi, śmieci; powiat – szkoły ponadpodstawowe, szpital powiatowy, urząd pracy; województwo – szkolnictwo wyższe, drogi wojewódzkie, kultura regionu">
      <g class="sw"><rect x="5" y="10" width="125" height="190" rx="10" class="f3 s3"/><rect x="138" y="10" width="125" height="190" rx="10" class="f1 s1"/><rect x="271" y="10" width="125" height="190" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="67" y="40">gmina</text><text x="200" y="40">powiat</text><text x="333" y="40">województwo</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="75">szkoły</text><text x="67" y="91">podstawowe</text><text x="67" y="125">wodociągi</text><text x="67" y="159">śmieci</text>
        <text x="200" y="75">szkoły ponad-</text><text x="200" y="91">podstawowe</text><text x="200" y="125">szpital</text><text x="200" y="141">powiatowy</text><text x="200" y="175">urząd pracy</text>
        <text x="333" y="75">szkolnictwo</text><text x="333" y="91">wyższe</text><text x="333" y="125">drogi</text><text x="333" y="141">wojewódzkie</text><text x="333" y="175">kultura regionu</text></g>
    </svg>`,
    text: `<p>Zadania są podzielone według zasięgu: <b>gmina</b> – sprawy najbliższe (szkoła podstawowa, woda, śmieci), <b>powiat</b> – ponadgminne (szkoły ponadpodstawowe, szpital powiatowy, urząd pracy), <b>województwo</b> – regionalne (uczelnie, drogi wojewódzkie, kultura regionu).</p>
      <p>Radę powiatu i sejmik można odwołać w referendum – w województwie wniosek musi poprzeć <b>5%</b> mieszkańców.</p>`,
    remember: 'Referendum: gmina i powiat – 10%, województwo – 5% mieszkańców.',
  },
];

window.LESSONS['wos/narod'] = [
  {
    title: 'Narodowość czy obywatelstwo?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie: narodowość – czujesz przynależność do wspólnoty języka, kultury i historii; obywatelstwo – więź prawna z państwem zapisana w dokumentach, daje prawa i obowiązki">
      <g class="sw"><circle cx="105" cy="100" r="90" class="f2 s2"/><circle cx="295" cy="100" r="90" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="105" y="55">❤️</text><text x="295" y="55">🛂</text></g>
      <g class="tx-b" text-anchor="middle"><text x="105" y="88">narodowość</text><text x="295" y="88">obywatelstwo</text></g>
      <g class="tx-s" text-anchor="middle"><text x="105" y="114">czujesz:</text><text x="105" y="130">język, kultura,</text><text x="105" y="146">historia</text>
        <text x="295" y="114">masz w dokumentach:</text><text x="295" y="130">więź prawna</text><text x="295" y="146">z państwem</text></g>
    </svg>`,
    text: `<p><b>Narodowość</b> to poczucie przynależności do narodu – wspólnoty języka, kultury i historii. <b>Obywatelstwo</b> to <b>więź prawna z państwem</b>: daje prawa (np. wyborcze) i obowiązki.</p>
      <p>Obywatelstwo polskie dziecko nabywa przez <b>urodzenie</b>, gdy co najmniej jedno z rodziców jest obywatelem polskim; cudzoziemcowi może je <b>nadać Prezydent</b>. Obywatel ma m.in. obowiązek <b>wierności RP</b>, przestrzegania prawa, płacenia podatków i <b>obrony Ojczyzny</b>.</p>`,
    remember: 'Narodowość – czujesz, obywatelstwo – masz w dokumentach.',
    hook: 'Obywatelstwo jak paszport w kieszeni, narodowość jak piosenka w głowie.',
    check: { q: 'Czym jest obywatelstwo?', options: ['poczuciem wspólnoty kulturowej', 'więzią prawną z państwem', 'miejscem urodzenia'], answer: 1, explain: 'Obywatelstwo to prawna więź z państwem – z prawami i obowiązkami.' },
  },
  {
    title: 'Symbole Rzeczypospolitej',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Symbole RP: godło – orzeł biały w koronie na czerwonej tarczy; barwy – biały pas u góry, czerwony u dołu; hymn – Mazurek Dąbrowskiego">
      <path d="M30,30 L120,30 L120,110 Q75,150 30,110 Z" class="pl-r ln sw"/>
      <text x="75" y="80" class="tx-b" text-anchor="middle">🦅</text>
      <rect x="150" y="40" width="110" height="35" class="pl-w ln"/><rect x="150" y="75" width="110" height="35" class="pl-r ln"/>
      <text x="330" y="85" class="tx-b" text-anchor="middle">🎵</text>
      <g class="tx-b" text-anchor="middle"><text x="75" y="170">godło</text><text x="205" y="170">barwy</text><text x="330" y="170">hymn</text></g>
      <g class="tx-s" text-anchor="middle"><text x="75" y="192">orzeł biały w koronie</text><text x="205" y="192">biały u góry</text><text x="330" y="192">Mazurek</text><text x="330" y="208">Dąbrowskiego</text></g>
    </svg>`,
    text: `<p>Symbole RP: <b>godło</b> – orzeł biały ze złotą koroną w czerwonym polu tarczy; <b>barwy</b> – biała i czerwona (biały pas <b>u góry</b>); <b>hymn</b> – „Mazurek Dąbrowskiego”. Są pod ochroną prawa, a <b>2 maja</b> to Dzień Flagi RP.</p>
      <p>Podczas hymnu stoimy w postawie wyrażającej szacunek. Patriotyzm młodego człowieka to też nauka, pomoc innym i dbanie o swoją okolicę.</p>`,
    remember: 'Flaga: biały u góry, czerwony u dołu. Dzień Flagi – 2 maja.',
    hook: 'Biel na górze jak śnieg na szczycie, czerwień na dole jak ziemia.',
  },
  {
    title: 'Mniejszości w Polsce',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Mniejszości w Polsce: 9 narodowych – białoruska, czeska, litewska, niemiecka, ormiańska, rosyjska, słowacka, ukraińska, żydowska, od 16 grudnia 2026 także grecka; 4 etniczne – karaimska, łemkowska, romska, tatarska; język regionalny – kaszubski">
      <g class="sw"><rect x="10" y="10" width="200" height="210" rx="12" class="f1 s1"/><rect x="220" y="10" width="170" height="120" rx="12" class="f3 s3"/><rect x="220" y="140" width="170" height="80" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="110" y="38">9 narodowych</text><text x="305" y="38">4 etniczne</text><text x="305" y="168">1 język</text></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="62">białoruska, czeska,</text><text x="110" y="80">litewska, niemiecka,</text><text x="110" y="98">ormiańska, rosyjska,</text><text x="110" y="116">słowacka, ukraińska,</text><text x="110" y="134">żydowska</text>
        <text x="110" y="168">+ grecka</text><text x="110" y="184">od 16.12.2026</text>
        <text x="305" y="62">karaimska</text><text x="305" y="80">łemkowska</text><text x="305" y="98">romska</text><text x="305" y="116">tatarska</text>
        <text x="305" y="190">regionalny:</text><text x="305" y="206">kaszubski</text></g>
    </svg>`,
    text: `<p>Mniejszości to <b>obywatele polscy</b>, których przodkowie mieszkają tu od co najmniej 100 lat i którzy chcą zachować swój język i kulturę. <b>Narodowe</b> utożsamiają się z narodem mającym własne państwo (np. niemiecka, ukraińska), <b>etniczne</b> – nie (karaimska, łemkowska, romska, tatarska). <b>Język regionalny</b> to kaszubski.</p>
      <p>Konstytucja (art. 35) gwarantuje im zachowanie <b>języka, obyczajów i kultury</b>.</p>`,
    remember: 'Etniczne: Karaimi, Łemkowie, Romowie, Tatarzy.',
    hook: 'Etniczne to „KŁaRT”: Karaimi, Łemkowie, Romowie, Tatarzy.',
    check: { q: 'Która mniejszość jest etniczna?', options: ['niemiecka', 'tatarska', 'litewska'], answer: 1, explain: 'Tatarzy nie utożsamiają się z narodem mającym własne państwo – to mniejszość etniczna.' },
  },
  {
    title: 'Wiele tożsamości naraz',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Koła zawierające się w sobie: tożsamość regionalna wewnątrz narodowej, ta wewnątrz państwowej, a ta wewnątrz europejskiej – można je łączyć">
      <ellipse cx="200" cy="118" rx="190" ry="108" class="f1 s1 sw"/>
      <ellipse cx="200" cy="130" rx="145" ry="85" class="f3 s3 sw"/>
      <ellipse cx="200" cy="142" rx="100" ry="62" class="f4 s4 sw"/>
      <ellipse cx="200" cy="155" rx="58" ry="36" class="f2 s2 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="200" y="30">europejska 🇪🇺</text><text x="200" y="68">państwowa</text><text x="200" y="96">narodowa</text><text x="200" y="160">regionalna</text></g>
    </svg>`,
    text: `<p>Możesz być jednocześnie Kaszubą lub Ślązakiem (tożsamość <b>regionalna</b>), Polakiem (<b>narodowa</b>), obywatelem RP (<b>państwowa</b>) i Europejczykiem (<b>europejska</b>) – te tożsamości się nie wykluczają.</p>
      <p>Przeciwieństwem otwartości jest <b>ksenofobia</b> – niechęć do obcych. Jej odmiany to <b>rasizm</b>, <b>szowinizm</b> (wiara w wyższość własnego narodu) i <b>antysemityzm</b>. Trzeba się im sprzeciwiać.</p>`,
    remember: 'Tożsamości można łączyć jak koła w sobie.',
    hook: 'Jak adres: ulica (region) – kraj – kontynent. Jedno nie wyklucza drugiego.',
  },
];

window.LESSONS['wos/spoleczenstwo-obywatelskie'] = [
  {
    title: 'Cnoty obywatelskie w praktyce',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cnoty obywatelskie z przykładami: odpowiedzialność, troska o dobro wspólne, solidarność, tolerancja, odwaga cywilna, aktywność">
      <g class="sw"><rect x="5" y="10" width="125" height="90" rx="10" class="f1 s1"/><rect x="138" y="10" width="125" height="90" rx="10" class="f3 s3"/><rect x="271" y="10" width="125" height="90" rx="10" class="f4 s4"/>
        <rect x="5" y="110" width="125" height="90" rx="10" class="f5 s5"/><rect x="138" y="110" width="125" height="90" rx="10" class="f2 s2"/><rect x="271" y="110" width="125" height="90" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="67" y="42">🧭</text><text x="200" y="42">🌳</text><text x="333" y="42">🤝</text><text x="67" y="142">🌈</text><text x="200" y="142">🦁</text><text x="333" y="142">🙋</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="70">odpowiedzial-</text><text x="67" y="86">ność</text><text x="200" y="70">troska o dobro</text><text x="200" y="86">wspólne</text><text x="333" y="70">solidarność</text>
        <text x="67" y="170">tolerancja</text><text x="200" y="170">odwaga</text><text x="200" y="186">cywilna</text><text x="333" y="170">aktywność</text></g>
    </svg>`,
    text: `<p><b>Cnoty obywatelskie</b> to postawy, dzięki którym społeczeństwo dobrze działa: odpowiedzialność, troska o dobro wspólne, solidarność, tolerancja, <b>odwaga cywilna</b>, aktywność, roztropność, przedsiębiorczość.</p>
      <p>Przykłady: Janina Ochojska założyła <b>Polską Akcję Humanitarną</b>, Jerzy Owsiak – <b>Wielką Orkiestrę Świątecznej Pomocy</b>.</p>`,
    remember: 'Odwaga cywilna – sprzeciw wobec zła, nawet gdy to ryzykowne.',
    hook: 'Obywatel to nie tylko ten, kto ma dowód osobisty, ale ten, komu „chce się chcieć” dla innych.',
  },
  {
    title: 'Stowarzyszenie czy fundacja',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie organizacji pozarządowych: stowarzyszenie – zrzeszenie ludzi, co najmniej 7 założycieli, cele niezarobkowe; fundacja – majątek fundatora przeznaczony na użyteczny cel">
      <g class="sw"><rect x="10" y="10" width="185" height="190" rx="12" class="f1 s1"/><rect x="205" y="10" width="185" height="190" rx="12" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="48">👥👥👥</text><text x="297" y="48">💰</text></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="85">stowarzyszenie</text><text x="297" y="85">fundacja</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="115">zrzeszenie ludzi</text><text x="102" y="140">min. 7 założycieli</text><text x="102" y="165">cele niezarobkowe</text>
        <text x="297" y="115">majątek fundatora</text><text x="297" y="140">przeznaczony</text><text x="297" y="156">na użyteczny cel</text></g>
    </svg>`,
    text: `<p><b>Organizacje pozarządowe</b> (trzeci sektor) nie należą do administracji i <b>nie działają dla zysku</b>. <b>Stowarzyszenie</b> to zrzeszenie ludzi – zakłada je co najmniej <b>7 osób</b>. <b>Fundacja</b> to majątek, który fundator przeznacza na społecznie użyteczny cel.</p>
      <p>Masz 14 lat? Możesz należeć do stowarzyszenia za zgodą rodziców (bez prawa głosu w wyborach władz). A <b>wolontariusz</b> pracuje <b>ochotniczo i bez wynagrodzenia</b>.</p>`,
    remember: 'Stowarzyszenie = ludzie (min. 7), fundacja = majątek na cel.',
    check: { q: 'Ile co najmniej osób zakłada stowarzyszenie?', options: ['3', '7', '100'], answer: 1, explain: 'Prawo o stowarzyszeniach, art. 9: co najmniej siedem osób.' },
  },
  {
    title: 'Budżet obywatelski krok po kroku',
    svg: `<svg viewBox="0 0 440 200" role="img" aria-label="Budżet obywatelski w pięciu krokach: pomysł mieszkańców, zebranie podpisów poparcia, ocena projektu przez urząd, głosowanie mieszkańców, realizacja zwycięskiego projektu">
      <defs><marker id="a-k8w-spo-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="3" y="50" width="82" height="90" rx="10" class="f4 s4"/><rect x="90" y="50" width="82" height="90" rx="10" class="f1 s1"/><rect x="177" y="50" width="82" height="90" rx="10" class="f5 s5"/><rect x="264" y="50" width="82" height="90" rx="10" class="f3 s3"/><rect x="351" y="50" width="82" height="90" rx="10" class="f2 s2"/></g>
      <g class="ln"><path d="M85,95 L88,95" marker-end="url(#a-k8w-spo-3)"/><path d="M172,95 L175,95" marker-end="url(#a-k8w-spo-3)"/><path d="M259,95 L262,95" marker-end="url(#a-k8w-spo-3)"/><path d="M346,95 L349,95" marker-end="url(#a-k8w-spo-3)"/></g>
      <g class="tx" text-anchor="middle"><text x="44" y="85">💡</text><text x="131" y="85">✍️</text><text x="218" y="85">🔍</text><text x="305" y="85">🗳️</text><text x="392" y="85">🛝</text></g>
      <g class="tx-s" text-anchor="middle"><text x="44" y="115">pomysł</text><text x="131" y="115">podpisy</text><text x="218" y="115">ocena</text><text x="305" y="115">głosowanie</text><text x="392" y="115">realizacja</text></g>
      <text x="220" y="30" class="tx-b" text-anchor="middle">mieszkańcy decydują o części wydatków</text>
      <text x="220" y="175" class="tx-s" text-anchor="middle">w mieście na prawach powiatu – min. 0,5% wydatków gminy</text>
    </svg>`,
    text: `<p>W <b>budżecie obywatelskim</b> mieszkańcy w bezpośrednim głosowaniu decydują co roku o części wydatków gminy: zgłaszają pomysły (np. plac zabaw, ścieżka rowerowa), zbierają podpisy, urząd sprawdza projekty, a potem wszyscy głosują. W miastach na prawach powiatu to obowiązkowe – co najmniej <b>0,5% wydatków</b>.</p>
      <p>Inne sposoby wpływu: wybory, referendum, <b>konsultacje</b>, <b>petycje</b>, udział w sesji rady.</p>`,
    remember: 'Budżet obywatelski – mieszkańcy głosują, na co wydać część budżetu gminy.',
    hook: 'Budżet obywatelski to „sklep z pomysłami”: wrzucasz projekt, sąsiedzi go „kupują” głosami.',
    check: { q: 'Ile co najmniej wynosi budżet obywatelski w mieście na prawach powiatu?', options: ['0,5% wydatków gminy', '50% wydatków gminy', '1 zł na mieszkańca'], answer: 0, explain: 'Art. 5a ust. 5 ustawy o samorządzie gminnym.' },
  },
  {
    title: 'Młodzieżowa rada gminy',
    svg: `<svg viewBox="0 0 410 210" role="img" aria-label="Młodzieżowa rada gminy, utworzona przez radę gminy, opiniuje uchwały dotyczące młodzieży i kieruje pytania do wójta, który musi odpowiedzieć na piśmie w ciągu 30 dni">
      <defs><marker id="a-k8w-spo-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="60" width="150" height="90" rx="12" class="f3 s3 sw"/>
      <text x="85" y="95" class="tx" text-anchor="middle">🧑‍🤝‍🧑</text>
      <text x="85" y="120" class="tx-s" text-anchor="middle">młodzieżowa</text><text x="85" y="136" class="tx-s" text-anchor="middle">rada gminy</text>
      <rect x="250" y="10" width="150" height="70" rx="12" class="f1 s1 sw"/><rect x="250" y="130" width="150" height="70" rx="12" class="f4 s4 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="325" y="40">opinie o uchwałach</text><text x="325" y="58">dla młodzieży</text><text x="325" y="160">pytanie do wójta</text><text x="325" y="178">odpowiedź w 30 dni</text></g>
      <g class="ln"><path d="M160,90 L248,50" marker-end="url(#a-k8w-spo-4)"/><path d="M160,120 L248,160" marker-end="url(#a-k8w-spo-4)"/></g>
      <text x="85" y="185" class="tx-s" text-anchor="middle">konsultuje, doradza,</text><text x="85" y="201" class="tx-s" text-anchor="middle">proponuje</text>
    </svg>`,
    text: `<p><b>Młodzieżową radę gminy</b> tworzy rada gminy – wniosek może złożyć np. <b>samorząd uczniowski</b>. Ma charakter <b>konsultacyjny, doradczy i inicjatywny</b>: opiniuje uchwały dotyczące młodzieży i może pytać wójta – a on musi odpowiedzieć na piśmie w ciągu <b>30 dni</b>.</p>
      <p>W życiu publicznym liczy się <b>etyka</b>: <b>korupcja</b> (łapówki) i <b>nepotyzm</b> (posady dla krewnych) niszczą zaufanie obywateli.</p>`,
    remember: 'Młodzieżowa rada gminy: konsultuje, doradza, proponuje.',
    hook: 'Nepotyzm to „posada po znajomości” – zamiast najlepszego kandydata wygrywa krewny.',
  },
];

window.LESSONS['wos/media'] = [
  {
    title: 'Pięć zadań mediów',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Funkcje mediów wokół ikony gazety: informacyjna, opiniotwórcza, kontrolna, edukacyjno-kulturalna, rozrywkowa">
      <circle cx="200" cy="110" r="42" class="f4 s4 sw"/>
      <text x="200" y="104" class="tx" text-anchor="middle">📰📻</text><text x="200" y="128" class="tx" text-anchor="middle">📺💻</text>
      <g class="sw"><rect x="10" y="12" width="140" height="44" rx="8" class="f1 s1"/><rect x="250" y="12" width="140" height="44" rx="8" class="f3 s3"/><rect x="10" y="164" width="140" height="44" rx="8" class="f2 s2"/><rect x="250" y="164" width="140" height="44" rx="8" class="f5 s5"/><rect x="10" y="88" width="120" height="44" rx="8" class="f3 s3"/></g>
      <g class="tx-s" text-anchor="middle"><text x="80" y="39">informacyjna</text><text x="320" y="39">opiniotwórcza</text><text x="80" y="183">kontrolna</text><text x="80" y="200">„czwarta władza”</text><text x="320" y="191">rozrywkowa</text><text x="70" y="108">edukacyjno-</text><text x="70" y="124">kulturalna</text></g>
      <g class="ln-thin"><line x1="150" y1="40" x2="170" y2="80"/><line x1="250" y1="40" x2="230" y2="80"/><line x1="150" y1="180" x2="170" y2="140"/><line x1="250" y1="180" x2="230" y2="140"/><line x1="130" y1="110" x2="158" y2="110"/></g>
    </svg>`,
    text: `<p>Media – prasa, radio, telewizja, internet – <b>informują</b>, <b>kształtują opinie</b>, <b>kontrolują władzę</b> (stąd „czwarta władza”), <b>uczą</b> i dają <b>rozrywkę</b>.</p>
      <p>Konstytucja zapewnia <b>wolność prasy</b> i zakazuje <b>cenzury prewencyjnej</b>. Wolność słowa w radiu i telewizji chroni Krajowa Rada Radiofonii i Telewizji.</p>`,
    remember: 'Funkcja kontrolna = media patrzą władzy na ręce.',
    hook: 'Trzy władze z Konstytucji + media jako „czwarta” – ta, która pilnuje pozostałych.',
    check: { q: 'Dziennikarze ujawnili nadużycia urzędnika. Która to funkcja mediów?', options: ['rozrywkowa', 'kontrolna', 'reklamowa'], answer: 1, explain: 'Ujawnianie nadużyć władzy to funkcja kontrolna.' },
  },
  {
    title: 'Fakt czy opinia?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwa dymki: fakt – Rada miasta przyjęła budżet 12 głosami, da się to sprawdzić; opinia – Rada przyjęła fatalny budżet, to ocena ze słowem wartościującym">
      <path d="M10,15 L390,15 L390,85 L80,85 L55,105 L60,85 L10,85 Z" class="f3 s3 sw"/>
      <path d="M10,120 L390,120 L390,190 L345,190 L340,208 L320,190 L10,190 Z" class="f2 s2 sw"/>
      <g class="tx-b"><text x="22" y="42">✅ FAKT</text><text x="22" y="147">💭 OPINIA</text></g>
      <g class="tx"><text x="22" y="70">„Rada przyjęła budżet 12 głosami.”</text><text x="22" y="175">„Rada przyjęła fatalny budżet.”</text></g>
      <g class="tx-s" text-anchor="end"><text x="380" y="42">da się sprawdzić</text><text x="380" y="147">ocena: „fatalny”</text></g>
    </svg>`,
    text: `<p><b>Fakt</b> da się sprawdzić (kto, co, kiedy, ile). <b>Opinia</b> to czyjaś ocena – zdradzają ją słowa wartościujące: „fatalny”, „świetny”, „moim zdaniem”.</p>
      <p>Rzetelny dziennikarz (Prawo prasowe, art. 12) <b>sprawdza</b> informacje lub <b>podaje źródło</b> i oddziela informację od komentarza.</p>`,
    remember: 'Fakt – sprawdzisz; opinia – ocenisz.',
    hook: 'Szukaj przymiotników z emocjami – to one zamieniają fakt w opinię.',
    check: { q: 'Które zdanie jest opinią?', options: ['„Mecz zakończył się wynikiem 2:1.”', '„To był najnudniejszy mecz sezonu.”', '„Mecz rozegrano w sobotę.”'], answer: 1, explain: '„Najnudniejszy” to ocena – nie da się jej obiektywnie sprawdzić.' },
  },
  {
    title: 'Sprawdź, zanim udostępnisz',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Lista kontrolna: kto jest autorem i jakie jest źródło, kiedy to opublikowano, czy piszą o tym inne wiarygodne media, czy to fakt czy opinia, czy tekst gra na emocjach">
      <rect x="20" y="10" width="360" height="190" rx="12" class="bg ln sw"/>
      <text x="200" y="38" class="tx-b" text-anchor="middle">🔎 zanim klikniesz „udostępnij”</text>
      <g class="tx"><text x="40" y="72">☑ kto jest autorem? jakie źródło?</text><text x="40" y="102">☑ kiedy to opublikowano?</text><text x="40" y="132">☑ czy piszą o tym inne media?</text><text x="40" y="162">☑ fakt czy opinia?</text><text x="40" y="192">☑ czy gra tylko na emocjach?</text></g>
    </svg>`,
    text: `<p>W sieci łatwo o fałszywe informacje. Zanim uwierzysz i udostępnisz: sprawdź <b>źródło</b> i autora, <b>datę</b>, poszukaj informacji w <b>kilku niezależnych</b> mediach, odróżnij fakt od opinii. Liczba polubień nie świadczy o prawdzie.</p>
      <p><b>Kampania społeczna</b> różni się od reklamy celem: ma zmienić postawy dla dobra ludzi (np. zapinaj pasy, nie hejtuj), a nie sprzedać produkt.</p>`,
    remember: 'Sprawdź źródło, datę i inne media, zanim udostępnisz.',
  },
  {
    title: 'Jak czytać sondaż',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Przykładowy wykres słupkowy sondażu na 1000 osób: tak 30 procent, nie 60 procent, trudno powiedzieć 10 procent">
      <line x1="40" y1="180" x2="390" y2="180" class="ln sw"/>
      <rect x="70" y="120" width="70" height="60" class="f3 s3 sw"/><rect x="175" y="60" width="70" height="120" class="f2 s2 sw"/><rect x="280" y="160" width="70" height="20" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="105" y="112">30%</text><text x="210" y="52">60%</text><text x="315" y="152">10%</text></g>
      <g class="tx-s" text-anchor="middle"><text x="105" y="198">tak</text><text x="210" y="198">nie</text><text x="315" y="198">trudno</text><text x="315" y="212">powiedzieć</text></g>
      <text x="40" y="24" class="tx-s">przykład: próba 1000 osób (dane wymyślone)</text>
    </svg>`,
    text: `<p><b>Opinia publiczna</b> to poglądy dużej części społeczeństwa. Bada się ją w <b>sondażach</b> na <b>próbie reprezentatywnej</b> (np. CBOS). Czytając wyniki, sprawdź: kto badał, kiedy, ile osób, jak brzmiało pytanie.</p>
      <p>Na wykresie 60% z 1000 osób to <b>600</b> badanych.</p>`,
    remember: 'Procent z próby: 60% z 1000 = 0,6 · 1000 = 600.',
    hook: 'Próba reprezentatywna to „Polska w miniaturze” – jak łyżka zupy, po której znasz smak całego garnka.',
    check: { q: 'W sondażu na 1000 osób 30% odpowiedziało „tak”. Ilu to badanych?', options: ['30', '300', '3000'], answer: 1, explain: '0,3 · 1000 = 300 osób.' },
  },
];

window.LESSONS['wos/sejm-senat'] = [
  {
    title: 'Władza należy do Narodu',
    svg: `<svg viewBox="0 0 410 210" role="img" aria-label="Naród sprawuje władzę bezpośrednio – referendum, obywatelska inicjatywa ustawodawcza – albo przez przedstawicieli wybieranych w wyborach – Sejm, Senat, Prezydent">
      <defs><marker id="a-k8w-sejm-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="130" y="8" width="150" height="44" rx="10" class="f4 s4 sw"/>
      <text x="205" y="37" class="tx-b" text-anchor="middle">👥 NARÓD</text>
      <g class="ln"><path d="M170,52 L110,92" marker-end="url(#a-k8w-sejm-1)"/><path d="M240,52 L300,92" marker-end="url(#a-k8w-sejm-1)"/></g>
      <g class="sw"><rect x="10" y="95" width="185" height="105" rx="12" class="f3 s3"/><rect x="215" y="95" width="185" height="105" rx="12" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="122">bezpośrednio</text><text x="307" y="122">pośrednio</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="150">referendum</text><text x="102" y="170">inicjatywa ustawodawcza</text><text x="102" y="186">(100 000 podpisów)</text>
        <text x="307" y="146">przez przedstawicieli</text><text x="307" y="166">wybory: Sejm, Senat,</text><text x="307" y="184">Prezydent</text></g>
    </svg>`,
    text: `<p>Konstytucja, art. 4: <b>władza zwierzchnia należy do Narodu</b>. Sprawuje ją <b>przez przedstawicieli</b> (demokracja pośrednia) albo <b>bezpośrednio</b> – w <b>referendum</b> lub przez obywatelską inicjatywę ustawodawczą (100 000 podpisów).</p>
      <p>Referendum ogólnokrajowe dotyczy spraw o szczególnym znaczeniu (np. wejście do UE w 2003 r.) i jest <b>wiążące</b>, gdy głosuje <b>ponad połowa</b> uprawnionych.</p>`,
    remember: 'Referendum wiążące – frekwencja ponad 50%.',
    hook: 'Demokracja pośrednia: wybierasz „pośrednika”, który głosuje w twoim imieniu.',
    check: { q: 'Który przykład to demokracja bezpośrednia?', options: ['referendum', 'uchwalenie ustawy przez Sejm', 'powołanie rządu'], answer: 0, explain: 'W referendum obywatele sami rozstrzygają sprawę.' },
  },
  {
    title: '460 i 100',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie izb: Sejm – 460 posłów, wybory proporcjonalne, kandydat od 21 lat, próg 5 procent; Senat – 100 senatorów, wybory większościowe w okręgach jednomandatowych, kandydat od 30 lat; kadencja obu – 4 lata">
      <g class="sw"><rect x="10" y="10" width="185" height="170" rx="12" class="f1 s1"/><rect x="205" y="10" width="185" height="170" rx="12" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">SEJM</text><text x="297" y="40">SENAT</text><text x="102" y="74">460</text><text x="297" y="74">100</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="96">posłów</text><text x="297" y="96">senatorów</text>
        <text x="102" y="124">proporcjonalnie</text><text x="102" y="144">kandydat: 21 lat</text><text x="102" y="164">próg 5%</text>
        <text x="297" y="124">większościowo</text><text x="297" y="144">kandydat: 30 lat</text><text x="297" y="164">okręgi 1-mandatowe</text></g>
      <rect x="110" y="188" width="180" height="28" rx="8" class="f4 s4 sw"/>
      <text x="200" y="208" class="tx" text-anchor="middle">kadencja: 4 lata</text>
    </svg>`,
    text: `<p><b>Sejm</b>: <b>460</b> posłów, wybory <b>powszechne, równe, bezpośrednie, proporcjonalne i tajne</b>; kandydat od <b>21 lat</b>; listy muszą przekroczyć próg <b>5%</b> (koalicje 8%). <b>Senat</b>: <b>100</b> senatorów wybieranych <b>większościowo</b> w okręgach jednomandatowych; kandydat od <b>30 lat</b>. Kadencja obu izb – <b>4 lata</b>.</p>`,
    remember: 'Sejm 460 (21 lat), Senat 100 (30 lat), kadencja 4 lata.',
    hook: '21 + 9 = 30: do Senatu musisz poczekać 9 lat dłużej niż do Sejmu.',
  },
  {
    title: 'Droga ustawy',
    svg: `<svg viewBox="0 0 440 220" role="img" aria-label="Droga ustawy: inicjatywa ustawodawcza, Sejm – trzy czytania, Senat – 30 dni na przyjęcie, poprawki lub odrzucenie, Prezydent – podpis, weto lub wniosek do Trybunału Konstytucyjnego, ogłoszenie w Dzienniku Ustaw">
      <defs><marker id="a-k8w-sejm-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="3" y="40" width="82" height="110" rx="10" class="f4 s4"/><rect x="90" y="40" width="82" height="110" rx="10" class="f1 s1"/><rect x="177" y="40" width="82" height="110" rx="10" class="f3 s3"/><rect x="264" y="40" width="82" height="110" rx="10" class="f5 s5"/><rect x="351" y="40" width="82" height="110" rx="10" class="f2 s2"/></g>
      <g class="ln"><path d="M85,95 L88,95" marker-end="url(#a-k8w-sejm-3)"/><path d="M172,95 L175,95" marker-end="url(#a-k8w-sejm-3)"/><path d="M259,95 L262,95" marker-end="url(#a-k8w-sejm-3)"/><path d="M346,95 L349,95" marker-end="url(#a-k8w-sejm-3)"/></g>
      <g class="tx" text-anchor="middle"><text x="44" y="72">💡</text><text x="131" y="72">🏛️</text><text x="218" y="72">🏛️</text><text x="305" y="72">✒️</text><text x="392" y="72">📕</text></g>
      <g class="tx-s" text-anchor="middle"><text x="44" y="100">projekt</text>
        <text x="131" y="100">Sejm</text><text x="131" y="118">3 czytania</text>
        <text x="218" y="100">Senat</text><text x="218" y="118">30 dni</text>
        <text x="305" y="100">Prezydent</text><text x="305" y="118">podpis</text><text x="305" y="134">lub weto</text>
        <text x="392" y="100">Dziennik</text><text x="392" y="118">Ustaw</text></g>
      <text x="220" y="25" class="tx-s" text-anchor="middle">inicjatywa: posłowie, Senat, Prezydent, rząd, 100 000 obywateli</text>
      <text x="220" y="180" class="tx-s" text-anchor="middle">weto Prezydenta Sejm odrzuca większością 3/5</text>
    </svg>`,
    text: `<p>Projekt może złożyć: grupa posłów, Senat, Prezydent, Rada Ministrów albo <b>100 000 obywateli</b>. <b>Sejm</b> rozpatruje go w <b>trzech czytaniach</b>. <b>Senat</b> ma <b>30 dni</b>, by ustawę przyjąć, poprawić lub odrzucić. Potem <b>Prezydent</b> podpisuje ją albo stosuje <b>weto</b> (Sejm może je odrzucić większością 3/5). Ustawa wchodzi w życie po ogłoszeniu w <b>Dzienniku Ustaw</b>.</p>
      <p>Sejm ma też funkcję <b>kontrolną</b> (rząd) i <b>kreacyjną</b> (wybiera np. sędziów TK).</p>`,
    remember: 'Sejm → Senat (30 dni) → Prezydent → Dziennik Ustaw.',
    check: { q: 'Ile dni ma Senat na zajęcie się ustawą uchwaloną przez Sejm?', options: ['7', '30', '90'], answer: 1, explain: 'Art. 121 Konstytucji: 30 dni.' },
  },
  {
    title: 'Partie i pluralizm',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pluralizm polityczny: wiele partii konkuruje w wyborach; partie rządzące tworzą koalicję, pozostałe – opozycję">
      <g class="sw"><circle cx="60" cy="60" r="28" class="f1 s1"/><circle cx="130" cy="60" r="28" class="f3 s3"/><circle cx="270" cy="60" r="28" class="f2 s2"/><circle cx="340" cy="60" r="28" class="f5 s5"/><circle cx="200" cy="60" r="28" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="60" y="66">A</text><text x="130" y="66">B</text><text x="200" y="66">C</text><text x="270" y="66">D</text><text x="340" y="66">E</text></g>
      <rect x="20" y="105" width="150" height="70" rx="12" class="dash s3" fill="none"/>
      <rect x="230" y="105" width="150" height="70" rx="12" class="dash s2" fill="none"/>
      <g class="tx-b" text-anchor="middle"><text x="95" y="135">koalicja</text><text x="305" y="135">opozycja</text></g>
      <g class="tx-s" text-anchor="middle"><text x="95" y="158">rządzi razem</text><text x="305" y="158">kontroluje, krytykuje</text></g>
      <text x="200" y="196" class="tx-s" text-anchor="middle">aktualne kluby w Sejmie – sejm.gov.pl</text>
    </svg>`,
    text: `<p><b>Pluralizm polityczny</b> oznacza wolność tworzenia i działania wielu partii, które <b>konkurują</b> w wyborach. <b>Partia</b> chce metodami demokratycznymi wpływać na politykę lub sprawować władzę; członkiem może być obywatel od <b>18 lat</b>, a finansowanie partii jest <b>jawne</b>.</p>
      <p>Partie rządzące tworzą <b>koalicję</b>, pozostałe – <b>opozycję</b>. Zakazane są partie odwołujące się do nazizmu, faszyzmu i komunizmu.</p>`,
    remember: 'Pluralizm = wiele partii konkuruje o głosy wyborców.',
    hook: 'Pluralizm jak sklep z wieloma markami: partie konkurują, a wyborca wybiera.',
  },
];

window.LESSONS['wos/wladza-wykonawcza-sady'] = [
  {
    title: 'Trzy władze, które się pilnują',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trójpodział władzy: ustawodawcza – Sejm i Senat; wykonawcza – Prezydent i Rada Ministrów; sądownicza – sądy i trybunały; wspólny dach to Konstytucja">
      <polygon points="200,8 390,55 10,55" class="f4 s4 sw"/>
      <text x="200" y="46" class="tx-b" text-anchor="middle">KONSTYTUCJA</text>
      <g class="sw"><rect x="15" y="65" width="115" height="120" class="f1 s1"/><rect x="143" y="65" width="115" height="120" class="f3 s3"/><rect x="271" y="65" width="115" height="120" class="f5 s5"/></g>
      <g class="tx-s" text-anchor="middle"><text x="72" y="95">ustawodawcza</text><text x="200" y="95">wykonawcza</text><text x="328" y="95">sądownicza</text>
        <text x="72" y="135">Sejm</text><text x="72" y="153">i Senat</text><text x="200" y="135">Prezydent</text><text x="200" y="153">i rząd</text><text x="328" y="135">sądy</text><text x="328" y="153">i trybunały</text></g>
      <rect x="10" y="185" width="380" height="16" class="f4 s4"/>
    </svg>`,
    text: `<p>Konstytucja (art. 10) dzieli władzę na <b>ustawodawczą</b> (Sejm i Senat), <b>wykonawczą</b> (Prezydent i Rada Ministrów) i <b>sądowniczą</b> (sądy i trybunały). Władze się <b>równoważą</b>, żeby żadna nie miała pełni władzy.</p>
      <p><b>Państwo prawa</b>: władza działa tylko <b>na podstawie i w granicach prawa</b>, a Konstytucja jest <b>najwyższym prawem</b>.</p>`,
    remember: 'Trójpodział: ustawodawcza – wykonawcza – sądownicza.',
    hook: 'Jak trzy nogi stołka – usuń jedną, a całość się przewróci.',
    check: { q: 'Kto sprawuje władzę wykonawczą?', options: ['Sejm i Senat', 'Prezydent i Rada Ministrów', 'sądy'], answer: 1, explain: 'Art. 10 ust. 2 Konstytucji.' },
  },
  {
    title: 'Prezydent: 35 – 5 – 2',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Prezydent RP: kandydat ma co najmniej 35 lat, kadencja trwa 5 lat, można sprawować urząd najwyżej 2 kadencje; wybory powszechne, wygrywa kandydat z ponad połową głosów, inaczej druga tura">
      <g class="sw"><rect x="5" y="10" width="125" height="120" rx="12" class="f1 s1"/><rect x="138" y="10" width="125" height="120" rx="12" class="f3 s3"/><rect x="271" y="10" width="125" height="120" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="67" y="60">35</text><text x="200" y="60">5</text><text x="333" y="60">2</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="90">lat – minimalny</text><text x="67" y="106">wiek kandydata</text><text x="200" y="90">lat – kadencja</text><text x="333" y="90">kadencje</text><text x="333" y="106">najwyżej</text></g>
      <rect x="5" y="142" width="391" height="70" rx="12" class="f5 s5 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="200" y="168">wybory powszechne · 100 000 podpisów pod kandydatem</text><text x="200" y="192">ponad 50% głosów, inaczej druga tura po 14 dniach</text></g>
    </svg>`,
    text: `<p>Polska to <b>republika</b>: głowę państwa wybieramy na kadencję. <b>Prezydent</b> jest wybierany w wyborach powszechnych na <b>5 lat</b>, ponownie – tylko raz; kandydat ma co najmniej <b>35 lat</b>.</p>
      <p>Prezydent jest <b>zwierzchnikiem Sił Zbrojnych</b>, podpisuje ustawy lub stosuje <b>weto</b>, ratyfikuje umowy, powołuje sędziów, stosuje <b>prawo łaski</b>, nadaje obywatelstwo. Gdy nie może pełnić urzędu, zastępuje go <b>Marszałek Sejmu</b>.</p>`,
    remember: 'Prezydent: od 35 lat, kadencja 5 lat, najwyżej 2 kadencje.',
    hook: '35 – 5 – 2: jak kod do szafki prezydenta.',
    check: { q: 'Ile trwa kadencja Prezydenta RP?', options: ['4 lata', '5 lat', '7 lat'], answer: 1, explain: 'Art. 127 Konstytucji: pięć lat.' },
  },
  {
    title: 'Rząd potrzebuje Sejmu',
    svg: `<svg viewBox="0 0 410 220" role="img" aria-label="Prezydent desygnuje premiera i powołuje Radę Ministrów; Sejm udziela rządowi wotum zaufania; Sejm może odwołać rząd konstruktywnym wotum nieufności – wniosek 46 posłów z kandydatem na nowego premiera">
      <defs><marker id="a-k8w-wl-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="20" width="110" height="60" rx="10" class="f4 s4"/><rect x="150" y="20" width="110" height="60" rx="10" class="f3 s3"/><rect x="290" y="20" width="110" height="60" rx="10" class="f1 s1"/></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="55">Prezydent</text><text x="205" y="47">Rada</text><text x="205" y="63">Ministrów</text><text x="345" y="55">Sejm</text></g>
      <path d="M120,50 L148,50" class="ln" marker-end="url(#a-k8w-wl-3)"/>
      <path d="M290,40 L262,40" class="ln" marker-end="url(#a-k8w-wl-3)"/>
      <path d="M290,64 L262,64" class="ln dash" marker-end="url(#a-k8w-wl-3)"/>
      <g class="tx-s" text-anchor="middle"><text x="134" y="100">powołuje</text></g>
      <rect x="140" y="110" width="260" height="100" rx="12" class="f2 s2 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="270" y="134">✔ wotum zaufania (w 14 dni)</text><text x="270" y="160">✖ konstruktywne wotum nieufności:</text><text x="270" y="178">wniosek 46 posłów +</text><text x="270" y="196">kandydat na premiera</text></g>
    </svg>`,
    text: `<p><b>Rada Ministrów</b> (premier i ministrowie) prowadzi politykę wewnętrzną i zagraniczną, wykonuje ustawy, przygotowuje <b>projekt budżetu</b>. Prezydent desygnuje premiera i powołuje rząd, a ten musi dostać od Sejmu <b>wotum zaufania</b> – dlatego potrzebuje <b>większości w Sejmie</b>.</p>
      <p>Sejm może odwołać rząd <b>konstruktywnym wotum nieufności</b>: wniosek co najmniej 46 posłów musi wskazać nowego premiera. Decyzje ministerstw dotyczą cię – np. podstawę programową wydał <b>Minister Edukacji</b>.</p>`,
    remember: 'Konstruktywne wotum nieufności = odwołanie rządu + wskazanie nowego premiera.',
    hook: '„Konstruktywne”, bo nie tylko burzy, ale od razu buduje – wskazuje następcę.',
  },
  {
    title: 'Sądy i Konstytucja',
    svg: `<svg viewBox="0 0 410 220" role="img" aria-label="Sądy powszechne: sąd rejonowy jako pierwsza instancja, odwołanie do sądu okręgowego jako drugiej instancji; obok Trybunał Konstytucyjny – 15 sędziów na 9 lat, bada zgodność ustaw z Konstytucją">
      <defs><marker id="a-k8w-wl-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="140" width="170" height="60" rx="10" class="f1 s1"/><rect x="10" y="30" width="170" height="60" rx="10" class="f3 s3"/></g>
      <g class="tx-s" text-anchor="middle"><text x="95" y="166">sąd rejonowy</text><text x="95" y="184">I instancja</text><text x="95" y="56">sąd okręgowy</text><text x="95" y="74">II instancja</text></g>
      <path d="M95,140 L95,94" class="ln sw" marker-end="url(#a-k8w-wl-4)"/>
      <text x="105" y="122" class="tx-s">odwołanie</text>
      <rect x="215" y="30" width="185" height="170" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="307" y="62">⚖️ TK</text></g>
      <g class="tx-s" text-anchor="middle"><text x="307" y="90">Trybunał</text><text x="307" y="106">Konstytucyjny</text><text x="307" y="134">15 sędziów, 9 lat</text><text x="307" y="160">czy ustawa jest</text><text x="307" y="176">zgodna z Konstytucją?</text></g>
      <text x="205" y="18" class="tx-s" text-anchor="middle">sędziowie niezawiśli – podlegają tylko Konstytucji i ustawom</text>
    </svg>`,
    text: `<p>Postępowanie sądowe jest <b>co najmniej dwuinstancyjne</b>: od wyroku sądu rejonowego możesz się odwołać do okręgowego. Sądy są <b>niezależne</b>, a sędziowie <b>niezawiśli</b> – podlegają tylko Konstytucji i ustawom, nie należą do partii.</p>
      <p><b>Konstytucję</b> uchwalono <b>2 kwietnia 1997 r.</b> Ma najwyższą moc i trudniej ją zmienić niż ustawę. Czy ustawy są z nią zgodne, bada <b>Trybunał Konstytucyjny</b> – 15 sędziów wybieranych przez Sejm na 9 lat.</p>`,
    remember: 'Dwuinstancyjność – zawsze możesz się odwołać od wyroku I instancji.',
    check: { q: 'Kto orzeka o zgodności ustaw z Konstytucją?', options: ['Sąd Najwyższy', 'Trybunał Konstytucyjny', 'Prezydent'], answer: 1, explain: 'Art. 188 Konstytucji.' },
  },
];

window.LESSONS['wos/sprawy-miedzynarodowe'] = [
  {
    title: 'ONZ – pokój na świecie',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="ONZ z siedzibą w Nowym Jorku: Zgromadzenie Ogólne – 193 państwa, każde ma jeden głos; Rada Bezpieczeństwa – 15 członków, w tym 5 stałych z prawem weta: Chiny, Francja, Rosja, USA, Wielka Brytania">
      <text x="200" y="26" class="tx-b" text-anchor="middle">🇺🇳 ONZ · od 1945 · Nowy Jork</text>
      <g class="sw"><rect x="10" y="40" width="185" height="170" rx="12" class="f1 s1"/><rect x="205" y="40" width="185" height="170" rx="12" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="68">Zgromadzenie</text><text x="102" y="88">Ogólne</text><text x="297" y="68">Rada</text><text x="297" y="88">Bezpieczeństwa</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="122">193 państwa</text><text x="102" y="142">każde: 1 głos</text>
        <text x="297" y="118">15 członków</text><text x="297" y="138">5 stałych z wetem:</text><text x="297" y="158">Chiny, Francja, Rosja,</text><text x="297" y="176">USA, Wielka Brytania</text><text x="297" y="198">misje pokojowe</text></g>
    </svg>`,
    text: `<p><b>ONZ</b> powstała po II wojnie światowej (Karta NZ weszła w życie 24 października 1945 r.). Jej najważniejszy cel to <b>międzynarodowy pokój i bezpieczeństwo</b>, a także współpraca i prawa człowieka. Siedziba – <b>Nowy Jork</b>, członków – <b>193</b>.</p>
      <p><b>Rada Bezpieczeństwa</b> może nakładać sankcje i wysyłać <b>misje pokojowe</b> – Polacy służą np. w Libanie (UNIFIL). Z inicjatywy Polski powstała Konwencja o prawach dziecka.</p>`,
    remember: 'ONZ – pokój i bezpieczeństwo; 5 stałych członków RB ma weto.',
    hook: 'Weto działa jak czerwony przycisk – jeden stały członek może zatrzymać decyzję całej Rady.',
    check: { q: 'Który kraj jest stałym członkiem Rady Bezpieczeństwa ONZ?', options: ['Polska', 'Francja', 'Niemcy'], answer: 1, explain: 'Stali członkowie: Chiny, Francja, Rosja, USA, Wielka Brytania.' },
  },
  {
    title: 'NATO – jeden za wszystkich',
    svg: `<svg viewBox="0 0 410 220" role="img" aria-label="Artykuł 5 NATO: atak na jednego członka to atak na wszystkich; oś czasu: 1949 – traktat w Waszyngtonie, 1999 – Polska w NATO, 2024 – 32 państwa">
      <defs><marker id="a-k8w-mn-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="100" cy="85" r="70" class="f1 s1 sw"/>
      <g class="f4 s4 sw"><circle cx="100" cy="30" r="10"/><circle cx="150" cy="60" r="10"/><circle cx="150" cy="115" r="10"/><circle cx="100" cy="140" r="10"/><circle cx="50" cy="115" r="10"/></g>
      <circle cx="50" cy="60" r="12" class="f2 s2 sw"/>
      <text x="100" y="92" class="tx-b" text-anchor="middle">art. 5</text>
      <g class="tx-s"><text x="190" y="40">napaść na jednego</text><text x="190" y="58">= napaść na wszystkich</text></g>
      <line x1="190" y1="125" x2="400" y2="125" class="ln sw" marker-end="url(#a-k8w-mn-2)"/>
      <g class="sw"><circle cx="210" cy="125" r="7" class="f3 s3"/><circle cx="290" cy="125" r="7" class="pl-w ln"/><circle cx="370" cy="125" r="7" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="210" y="110">1949</text><text x="290" y="110">1999</text><text x="370" y="110">2024</text></g>
      <g class="tx-s" text-anchor="middle"><text x="210" y="150">Waszyngton</text><text x="210" y="166">12 państw</text><text x="290" y="150">Polska</text><text x="290" y="166">12 marca</text><text x="370" y="150">32 państwa</text></g>
      <text x="100" y="190" class="tx-s" text-anchor="middle">siedziba: Bruksela</text>
    </svg>`,
    text: `<p><b>NATO</b> to sojusz obronny. Traktat podpisano <b>4 kwietnia 1949 r. w Waszyngtonie</b>. <b>Artykuł 5</b>: zbrojna napaść na jednego członka jest uznana za <b>napaść na wszystkich</b> – po raz pierwszy uruchomiono go po zamachach na USA 11 września 2001 r.</p>
      <p><b>Polska jest w NATO od 12 marca 1999 r.</b> (razem z Czechami i Węgrami). Od przyjęcia Szwecji w 2024 r. sojusz liczy <b>32</b> państwa.</p>`,
    remember: 'Polska w NATO – 12 III 1999; art. 5 – wspólna obrona.',
    hook: 'Art. 5 = „pięć palców jednej dłoni”: uderzysz w jeden – odpowiada cała pięść.',
  },
  {
    title: 'Unia Europejska – cztery swobody',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cztery swobody wspólnego rynku Unii Europejskiej: przepływ osób, towarów, usług i kapitału; Polska w UE od 1 maja 2004 roku">
      <g class="sw"><rect x="10" y="10" width="185" height="80" rx="10" class="f1 s1"/><rect x="205" y="10" width="185" height="80" rx="10" class="f3 s3"/>
        <rect x="10" y="100" width="185" height="80" rx="10" class="f4 s4"/><rect x="205" y="100" width="185" height="80" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="45">🧳 osoby</text><text x="297" y="45">📦 towary</text><text x="102" y="135">🛠️ usługi</text><text x="297" y="135">💶 kapitał</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="70">praca, nauka, życie</text><text x="297" y="70">handel bez ceł</text><text x="102" y="160">firmy w całej UE</text><text x="297" y="160">pieniądze, inwestycje</text></g>
      <text x="200" y="202" class="tx-s" text-anchor="middle">Polska w UE od 1 maja 2004 r. · 27 państw</text>
    </svg>`,
    text: `<p><b>Unia Europejska</b> (27 państw) łączy kraje wspólnymi wartościami i <b>wspólnym rynkiem</b>, na którym swobodnie przepływają <b>osoby, towary, usługi i kapitał</b>. W <b>strefie Schengen</b> nie ma kontroli na granicach wewnętrznych.</p>
      <p><b>Polska jest w UE od 1 maja 2004 r.</b>, po referendum 7–8 czerwca 2003 r. Dzięki temu możesz uczyć się, pracować i mieszkać w innych krajach UE.</p>`,
    remember: 'Polska w UE – 1 V 2004; cztery swobody: osoby, towary, usługi, kapitał.',
    hook: 'O-T-U-K: „Ojej, Tyle Unijnych Korzyści”.',
    check: { q: 'Od kiedy Polska jest w Unii Europejskiej?', options: ['od 12 marca 1999 r.', 'od 1 maja 2004 r.', 'od 1 stycznia 1999 r.'], answer: 1, explain: 'Polska przystąpiła do UE 1 maja 2004 r.' },
  },
  {
    title: 'Polska w świecie – podsumowanie',
    svg: `<svg viewBox="0 0 410 210" role="img" aria-label="Oś czasu: 1945 – Polska w ONZ od początku; 1999 – Polska w NATO; 2004 – Polska w Unii Europejskiej; poniżej przykłady: misje pokojowe, wspólna obrona, fundusze unijne w gminie">
      <defs><marker id="a-k8w-mn-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="80" x2="400" y2="80" class="ln sw" marker-end="url(#a-k8w-mn-4)"/>
      <g class="sw"><circle cx="70" cy="80" r="9" class="f1 s1"/><circle cx="205" cy="80" r="9" class="f2 s2"/><circle cx="335" cy="80" r="9" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="58">1945</text><text x="205" y="58">1999</text><text x="335" y="58">2004</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="112">ONZ</text><text x="205" y="112">NATO</text><text x="335" y="112">UE</text></g>
      <g class="sw"><rect x="5" y="125" width="130" height="75" rx="10" class="f1 s1"/><rect x="140" y="125" width="130" height="75" rx="10" class="f2 s2"/><rect x="275" y="125" width="130" height="75" rx="10" class="f3 s3"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="155">misje pokojowe</text><text x="70" y="173">np. Liban</text><text x="205" y="155">wspólna obrona</text><text x="205" y="173">(art. 5)</text><text x="340" y="155">fundusze UE</text><text x="340" y="173">w twojej gminie</text></g>
    </svg>`,
    text: `<p>Polska należy do <b>ONZ</b> od początku, do <b>NATO</b> od <b>1999 r.</b>, do <b>UE</b> od <b>2004 r.</b> Polscy żołnierze uczestniczą w misjach, a gminy i regiony korzystają z <b>funduszy unijnych</b> – szukaj tablic informacyjnych przy inwestycjach i informacji na stronie gminy.</p>
      <p>Świat zmaga się z wojnami, uchodźstwem, głodem i zmianami klimatu. Możesz pomóc: wolontariat, wsparcie organizacji humanitarnych, oszczędzanie wody i energii.</p>`,
    remember: 'ONZ – od 1945, NATO – 1999, UE – 2004.',
    check: { q: 'Gdzie sprawdzisz, co w twojej gminie sfinansowano z funduszy UE?', options: ['w Karcie NZ', 'na tablicach przy inwestycjach i na stronie gminy', 'w statucie szkoły'], answer: 1, explain: 'Inwestycje z funduszy UE są oznaczane tablicami, a gminy informują o nich na swoich stronach.' },
  },
];
