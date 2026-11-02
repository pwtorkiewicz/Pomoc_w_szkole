/* Lekcje – język polski, klasa 4. Klucz: 'polski/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['polski/komunikacja'] = [
  {
    title: 'Nadawca, komunikat, odbiorca',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: nadawca wysyła komunikat do odbiorcy. Przykład: mama pisze do Kuby SMS Wróć na obiad o 14">
      <defs><marker id="a-k4pl-kom-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="110" height="80" rx="12" class="f1 s1 sw"/>
      <rect x="145" y="20" width="110" height="80" rx="12" class="f4 s4 sw"/>
      <rect x="280" y="20" width="110" height="80" rx="12" class="f3 s3 sw"/>
      <text x="65" y="54" class="tx-b" text-anchor="middle">🙋</text>
      <text x="200" y="54" class="tx-b" text-anchor="middle">💬</text>
      <text x="335" y="54" class="tx-b" text-anchor="middle">👂</text>
      <text x="65" y="84" class="tx-b" text-anchor="middle">nadawca</text>
      <text x="200" y="84" class="tx-b" text-anchor="middle">komunikat</text>
      <text x="335" y="84" class="tx-b" text-anchor="middle">odbiorca</text>
      <g class="ln s2">
        <line x1="122" y1="60" x2="142" y2="60" marker-end="url(#a-k4pl-kom-1)"/>
        <line x1="257" y1="60" x2="277" y2="60" marker-end="url(#a-k4pl-kom-1)"/>
      </g>
      <rect x="10" y="118" width="380" height="72" rx="12" class="bg ln"/>
      <text x="65" y="148" class="tx" text-anchor="middle">mama</text>
      <text x="200" y="148" class="tx-s" text-anchor="middle">„Wróć na obiad o 14.”</text>
      <text x="335" y="148" class="tx" text-anchor="middle">Kuba</text>
      <text x="200" y="176" class="tx-s" text-anchor="middle">intencja (cel): żeby Kuba wrócił na czas</text>
    </svg>`,
    text: `<p>Gdy rozmawiasz, piszesz SMS albo czytasz ogłoszenie, bierzesz udział w <b>komunikacji</b>, czyli przekazywaniu informacji.</p>
      <p><b>Nadawca</b> to ten, kto mówi lub pisze. <b>Odbiorca</b> – ten, kto słucha lub czyta. To, co zostaje przekazane, to <b>komunikat</b>. A cel, po co nadawca mówi, to <b>intencja</b>.</p>`,
    remember: 'Nadawca → komunikat → odbiorca. Intencja to cel wypowiedzi.',
    hook: 'Jak na poczcie: <b>nadawca</b> wysyła list, <b>odbiorca</b> go odbiera, a list to <b>komunikat</b>.',
  },
  {
    title: 'Po co mówimy? Intencja',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Sześć kafelków z intencjami wypowiedzi i przykładami: prośba, pytanie, podziękowanie, przeprosiny, ostrzeżenie, informacja">
      <g class="f5 s5">
        <rect x="10" y="10" width="120" height="80" rx="10"/><rect x="140" y="10" width="120" height="80" rx="10"/><rect x="270" y="10" width="120" height="80" rx="10"/>
        <rect x="10" y="100" width="120" height="80" rx="10"/><rect x="140" y="100" width="120" height="80" rx="10"/><rect x="270" y="100" width="120" height="80" rx="10"/>
      </g>
      <text x="70" y="38" class="tx-b" text-anchor="middle">🙏</text>
      <text x="200" y="38" class="tx-b" text-anchor="middle">❓</text>
      <text x="330" y="38" class="tx-b" text-anchor="middle">💐</text>
      <text x="70" y="128" class="tx-b" text-anchor="middle">😔</text>
      <text x="200" y="128" class="tx-b" text-anchor="middle">⚠️</text>
      <text x="330" y="128" class="tx-b" text-anchor="middle">📢</text>
      <text x="70" y="60" class="tx" text-anchor="middle">prośba</text>
      <text x="200" y="60" class="tx" text-anchor="middle">pytanie</text>
      <text x="330" y="60" class="tx" text-anchor="middle">podziękowanie</text>
      <text x="70" y="150" class="tx" text-anchor="middle">przeprosiny</text>
      <text x="200" y="150" class="tx" text-anchor="middle">ostrzeżenie</text>
      <text x="330" y="150" class="tx" text-anchor="middle">informacja</text>
      <text x="70" y="80" class="tx-s" text-anchor="middle">„Pomożesz mi?”</text>
      <text x="200" y="80" class="tx-s" text-anchor="middle">„Która godzina?”</text>
      <text x="330" y="80" class="tx-s" text-anchor="middle">„Dziękuję!”</text>
      <text x="70" y="170" class="tx-s" text-anchor="middle">„Przepraszam.”</text>
      <text x="200" y="170" class="tx-s" text-anchor="middle">„Uwaga, ślisko!”</text>
      <text x="330" y="170" class="tx-s" text-anchor="middle">„Lekcja o 8.00.”</text>
    </svg>`,
    text: `<p>Każda wypowiedź ma jakiś cel – to <b>intencja</b>. Możesz chcieć o coś poprosić, zapytać, podziękować, przeprosić, kogoś ostrzec albo przekazać informację.</p>
      <p>Gdy rozumiesz intencję, wiesz, jak odpowiedzieć. Na prośbę – pomagasz albo grzecznie odmawiasz. Na przeprosiny – możesz wybaczyć.</p>`,
    remember: 'Intencja = po co ktoś mówi lub pisze.',
    check: { q: '„Przepraszam, że się spóźniłem.” – jaka to intencja?', options: ['prośba', 'przeprosiny', 'podziękowanie'], answer: 1, explain: 'Słowo „przepraszam” pokazuje, że mówiący przeprasza.' },
  },
  {
    title: 'Mowa ciała też mówi',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Cztery komunikaty niewerbalne: uśmiech oznacza radość, kciuk w górę – super, machanie ręką – cześć lub pa, wzruszenie ramion – nie wiem">
      <g class="f4 s4">
        <rect x="10" y="10" width="88" height="110" rx="10"/><rect x="108" y="10" width="88" height="110" rx="10"/>
        <rect x="206" y="10" width="88" height="110" rx="10"/><rect x="304" y="10" width="88" height="110" rx="10"/>
      </g>
      <text x="54" y="62" class="tx-b" text-anchor="middle">🙂</text>
      <text x="152" y="62" class="tx-b" text-anchor="middle">👍</text>
      <text x="250" y="62" class="tx-b" text-anchor="middle">👋</text>
      <text x="348" y="62" class="tx-b" text-anchor="middle">🤷</text>
      <text x="54" y="100" class="tx-s" text-anchor="middle">radość</text>
      <text x="152" y="100" class="tx-s" text-anchor="middle">super!</text>
      <text x="250" y="100" class="tx-s" text-anchor="middle">cześć / pa</text>
      <text x="348" y="100" class="tx-s" text-anchor="middle">nie wiem</text>
      <rect x="10" y="132" width="382" height="40" rx="10" class="f1 s1"/>
      <text x="201" y="158" class="tx-b" text-anchor="middle">komunikat niewerbalny = bez słów</text>
    </svg>`,
    text: `<p>Nie wszystko mówimy słowami. Twarz, ręce i całe ciało też przekazują informacje. To <b>komunikaty niewerbalne</b>: <b>mimika</b> (wyraz twarzy), <b>gesty</b>, postawa ciała, spojrzenie.</p>
      <p>Kolega mówi „Nie jestem zły”, ale ma skrzyżowane ręce i odwraca wzrok? Mowa ciała może zdradzić, co ktoś naprawdę czuje.</p>`,
    hook: 'Niewerbalny = <b>nie</b> + <b>werbalny</b> (słowny), czyli „nie słowami”.',
    check: { q: 'Kolega pokazuje ci kciuk w górę. To komunikat…', options: ['pisany', 'mówiony', 'niewerbalny'], answer: 2, explain: 'Kciuk w górę to gest – komunikat bez słów, czyli niewerbalny.' },
  },
  {
    title: 'Grzecznie – do kolegi i do dorosłego',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Tabela: zwroty do kolegi i do dorosłego. Cześć – Dzień dobry, Dzięki – Dziękuję bardzo, Pa – Do widzenia, Sorki – Przepraszam">
      <rect x="10" y="10" width="185" height="34" rx="8" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="34" rx="8" class="f1 s1 sw"/>
      <text x="102" y="33" class="tx-b" text-anchor="middle">🧒 do kolegi</text>
      <text x="297" y="33" class="tx-b" text-anchor="middle">🧑‍🏫 do dorosłego</text>
      <g class="bg ln-thin">
        <rect x="10" y="52" width="185" height="34" rx="6"/><rect x="205" y="52" width="185" height="34" rx="6"/>
        <rect x="10" y="90" width="185" height="34" rx="6"/><rect x="205" y="90" width="185" height="34" rx="6"/>
        <rect x="10" y="128" width="185" height="34" rx="6"/><rect x="205" y="128" width="185" height="34" rx="6"/>
        <rect x="10" y="166" width="185" height="34" rx="6"/><rect x="205" y="166" width="185" height="34" rx="6"/>
      </g>
      <text x="102" y="75" class="tx" text-anchor="middle">Cześć!</text>
      <text x="297" y="75" class="tx" text-anchor="middle">Dzień dobry!</text>
      <text x="102" y="113" class="tx" text-anchor="middle">Dzięki!</text>
      <text x="297" y="113" class="tx" text-anchor="middle">Dziękuję bardzo.</text>
      <text x="102" y="151" class="tx" text-anchor="middle">Pa!</text>
      <text x="297" y="151" class="tx" text-anchor="middle">Do widzenia.</text>
      <text x="102" y="189" class="tx" text-anchor="middle">Sorki!</text>
      <text x="297" y="189" class="tx" text-anchor="middle">Przepraszam.</text>
    </svg>`,
    text: `<p><b>Grzeczność językowa</b> to słowa, którymi okazujesz szacunek. Najważniejsze to: <b>proszę, dziękuję, przepraszam</b>.</p>
      <p>Do kolegów mówisz swobodnie (<b>nieoficjalnie</b>). Do dorosłych – nauczycieli, sąsiadów, pani w sklepie – mówisz <b>oficjalnie</b>: „Dzień dobry”, „Do widzenia”, „Czy mogłaby Pani…”. Pamiętaj też o <b>uważnym słuchaniu</b>: patrz na rozmówcę i nie przerywaj.</p>`,
    remember: 'Dobieraj słowa do sytuacji i odbiorcy.',
    hook: 'Trzy magiczne słowa otwierają każde drzwi: <b>proszę, dziękuję, przepraszam</b>.',
    check: { q: 'Jak pożegnasz panią w sklepie?', options: ['Do widzenia.', 'Pa!', 'Nara!'], answer: 0, explain: 'Do dorosłej osoby mówimy oficjalnie: „Do widzenia”.' },
  },
  {
    title: 'Fakt, opinia, reklama i ekran',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie: fakt można sprawdzić, np. mecz jest o 17.00; opinia to czyjeś zdanie, np. to super drużyna. Na dole rady higieny cyfrowej">
      <rect x="10" y="10" width="185" height="124" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="124" rx="12" class="f2 s2 sw"/>
      <text x="102" y="42" class="tx-b" text-anchor="middle">✔️ FAKT</text>
      <text x="297" y="42" class="tx-b" text-anchor="middle">💭 OPINIA</text>
      <text x="102" y="68" class="tx-s" text-anchor="middle">można to sprawdzić</text>
      <text x="297" y="68" class="tx-s" text-anchor="middle">czyjeś zdanie, ocena</text>
      <text x="102" y="108" class="tx" text-anchor="middle">Mecz jest o 17.00.</text>
      <text x="297" y="108" class="tx" text-anchor="middle">To super drużyna!</text>
      <rect x="10" y="146" width="380" height="44" rx="10" class="f1 s1"/>
      <text x="200" y="166" class="tx-s" text-anchor="middle">📱 rób przerwy od ekranu · 🌙 odłóż telefon przed snem</text>
      <text x="200" y="183" class="tx-s" text-anchor="middle">📺 reklama pokazuje tylko zalety</text>
    </svg>`,
    text: `<p><b>Fakt</b> to informacja, którą można sprawdzić. <b>Opinia</b> to czyjeś zdanie – ktoś inny może myśleć inaczej. Opinie często zaczynają się od słów <i>moim zdaniem, uważam, że</i>.</p>
      <p><b>Reklama</b> chce cię namówić do kupienia czegoś, więc pokazuje tylko zalety. A <b>higiena cyfrowa</b> to zdrowe korzystanie z ekranów: przerwy, ruch, spotkania z ludźmi i telefon odłożony przed snem. Bez przerw łatwo się od gier i telefonu uzależnić.</p>`,
    remember: 'Fakt – sprawdzisz. Opinia – czyjeś zdanie. Reklama – zachęca, nie mówi o wadach.',
    hook: 'Zapytaj: „Czy da się to sprawdzić?”. Tak – fakt. Nie – opinia.',
    check: { q: '„Moim zdaniem lody waniliowe są najlepsze.” To…', options: ['fakt', 'opinia'], answer: 1, explain: 'To czyjś gust i ocena – opinia. Ktoś inny woli lody czekoladowe.' },
  },
];

window.LESSONS['polski/czesci-mowy'] = [
  {
    title: 'Części mowy odmienne',
    svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Tabela pięciu odmiennych części mowy z pytaniami i przykładami: rzeczownik, czasownik, przymiotnik, liczebnik, zaimek">
      <text x="200" y="22" class="tx-s" text-anchor="middle">odmienne – zmieniają końcówki: kot, kota, kotem</text>
      <rect x="10" y="34" width="380" height="32" rx="8" class="f1 s1"/>
      <rect x="10" y="70" width="380" height="32" rx="8" class="f2 s2"/>
      <rect x="10" y="106" width="380" height="32" rx="8" class="f3 s3"/>
      <rect x="10" y="142" width="380" height="32" rx="8" class="f4 s4"/>
      <rect x="10" y="178" width="380" height="32" rx="8" class="f5 s5"/>
      <text x="20" y="56" class="tx-b">rzeczownik</text><text x="150" y="56" class="tx">kto? co?</text><text x="282" y="56" class="tx-s">kot, Ola, dom</text>
      <text x="20" y="92" class="tx-b">czasownik</text><text x="150" y="92" class="tx">co robi?</text><text x="282" y="92" class="tx-s">biega, śpi</text>
      <text x="20" y="128" class="tx-b">przymiotnik</text><text x="150" y="128" class="tx">jaki?</text><text x="282" y="128" class="tx-s">mały, wesoła</text>
      <text x="20" y="164" class="tx-b">liczebnik</text><text x="150" y="164" class="tx">ile? który?</text><text x="282" y="164" class="tx-s">trzy, pierwszy</text>
      <text x="20" y="200" class="tx-b">zaimek</text><text x="150" y="200" class="tx">zastępuje</text><text x="282" y="200" class="tx-s">ja, ty, mój</text>
    </svg>`,
    text: `<p>Wyrazy dzielimy na <b>części mowy</b> – grupy wyrazów, które mają podobne zadanie. Części mowy <b>odmienne</b> zmieniają końcówki: <i>kot, kota, kotem</i>.</p>
      <p><b>Rzeczownik</b> nazywa osoby, zwierzęta i rzeczy. <b>Czasownik</b> – czynności. <b>Przymiotnik</b> – cechy. <b>Liczebnik</b> podaje liczbę lub kolejność. <b>Zaimek</b> zastępuje inne wyrazy, żeby się nie powtarzać: „Ola przyszła. <i>Ona</i> jest wesoła”.</p>`,
    remember: 'Odmienne: rzeczownik, czasownik, przymiotnik, liczebnik, zaimek.',
    hook: 'Zadaj wyrazowi pytanie – sam ci powie, kim jest.',
    check: { q: 'Wyraz „pięć” to…', options: ['liczebnik', 'przymiotnik', 'rzeczownik'], answer: 0, explain: 'Pytamy: ile? – pięć. To liczebnik.' },
  },
  {
    title: 'Części mowy nieodmienne',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy kafelki: przysłówek, przyimek, spójnik. Pod spodem zdanie Kot śpi pod stołem i chrapie z zaznaczonym przyimkiem pod i spójnikiem i">
      <g class="f3 s3">
        <rect x="8" y="10" width="124" height="90" rx="10"/><rect x="138" y="10" width="124" height="90" rx="10"/><rect x="268" y="10" width="124" height="90" rx="10"/>
      </g>
      <text x="70" y="38" class="tx-b" text-anchor="middle">przysłówek</text>
      <text x="200" y="38" class="tx-b" text-anchor="middle">przyimek</text>
      <text x="330" y="38" class="tx-b" text-anchor="middle">spójnik</text>
      <text x="70" y="62" class="tx-s" text-anchor="middle">jak? kiedy?</text>
      <text x="200" y="62" class="tx-s" text-anchor="middle">przy rzeczowniku</text>
      <text x="330" y="62" class="tx-s" text-anchor="middle">łączy</text>
      <text x="70" y="86" class="tx-s" text-anchor="middle">szybko, wczoraj</text>
      <text x="200" y="86" class="tx-s" text-anchor="middle">na, pod, w, do</text>
      <text x="330" y="86" class="tx-s" text-anchor="middle">i, ale, bo, że</text>
      <rect x="134" y="122" width="44" height="34" rx="6" class="f2 s2"/>
      <rect x="254" y="122" width="24" height="34" rx="6" class="f4 s4"/>
      <text x="40" y="146" class="tx-b">Kot</text>
      <text x="90" y="146" class="tx-b">śpi</text>
      <text x="140" y="146" class="tx-b">pod</text>
      <text x="188" y="146" class="tx-b">stołem</text>
      <text x="261" y="146" class="tx-b">i</text>
      <text x="288" y="146" class="tx-b">chrapie.</text>
      <text x="156" y="178" class="tx-s" text-anchor="middle">przyimek</text>
      <text x="266" y="178" class="tx-s" text-anchor="middle">spójnik</text>
    </svg>`,
    text: `<p>Części mowy <b>nieodmienne</b> mają zawsze tę samą formę.</p>
      <p><b>Przysłówek</b> mówi, jak, kiedy albo gdzie ktoś coś robi: <i>biegnie szybko</i>. <b>Przyimek</b> stoi przed rzeczownikiem i często pokazuje miejsce: <i>na stole, pod stołem</i>. <b>Spójnik</b> łączy wyrazy albo zdania: <i>lody i ciastka</i>.</p>`,
    remember: 'Nieodmienne: przysłówek, przyimek, spójnik.',
    hook: 'Przyimek stoi <b>przy</b> rzeczowniku: <i>przy domu, na dachu, pod oknem</i>.',
    check: { q: 'W zdaniu „Siedzę na ławce” przyimkiem jest…', options: ['siedzę', 'ławce', 'na'], answer: 2, explain: '„Na” stoi przed rzeczownikiem „ławce” i pokazuje miejsce – to przyimek.' },
  },
  {
    title: 'Siedem przypadków',
    svg: `<svg viewBox="0 0 400 270" role="img" aria-label="Tabela siedmiu przypadków z pytaniami i odmianą wyrazu mama: mianownik mama, dopełniacz mamy, celownik mamie, biernik mamę, narzędnik mamą, miejscownik mamie, wołacz mamo">
      <text x="16" y="22" class="tx-s">przypadek</text><text x="140" y="22" class="tx-s">pytania</text><text x="300" y="22" class="tx-s">przykład</text>
      <g class="f1 s1">
        <rect x="8" y="30" width="384" height="30" rx="6"/><rect x="8" y="64" width="384" height="30" rx="6"/>
        <rect x="8" y="98" width="384" height="30" rx="6"/><rect x="8" y="132" width="384" height="30" rx="6"/>
        <rect x="8" y="166" width="384" height="30" rx="6"/><rect x="8" y="200" width="384" height="30" rx="6"/>
        <rect x="8" y="234" width="384" height="30" rx="6"/>
      </g>
      <text x="16" y="51" class="tx-b">mianownik</text><text x="140" y="51" class="tx">kto? co?</text><text x="300" y="51" class="tx-b">mama</text>
      <text x="16" y="85" class="tx-b">dopełniacz</text><text x="140" y="85" class="tx">kogo? czego?</text><text x="300" y="85" class="tx-b">mamy</text>
      <text x="16" y="119" class="tx-b">celownik</text><text x="140" y="119" class="tx">komu? czemu?</text><text x="300" y="119" class="tx-b">mamie</text>
      <text x="16" y="153" class="tx-b">biernik</text><text x="140" y="153" class="tx">kogo? co?</text><text x="300" y="153" class="tx-b">mamę</text>
      <text x="16" y="187" class="tx-b">narzędnik</text><text x="140" y="187" class="tx">z kim? z czym?</text><text x="300" y="187" class="tx-b">mamą</text>
      <text x="16" y="221" class="tx-b">miejscownik</text><text x="140" y="221" class="tx">o kim? o czym?</text><text x="300" y="221" class="tx-b">mamie</text>
      <text x="16" y="255" class="tx-b">wołacz</text><text x="140" y="255" class="tx">o!</text><text x="300" y="255" class="tx-b">mamo!</text>
    </svg>`,
    text: `<p>Rzeczownik zmienia końcówki, gdy zmienia się jego rola w zdaniu: <i>Mama gotuje. Nie ma mamy. Idę z mamą.</i> Te formy to <b>przypadki</b>. Jest ich siedem.</p>
      <p>Żeby rozpoznać przypadek, zadaj pytanie: <i>Idę z kim?</i> – z mamą. To pytanie narzędnika.</p>`,
    remember: 'M – kto? co? · D – kogo? czego? · C – komu? czemu? · B – kogo? co? · N – z kim? z czym? · Ms – o kim? o czym? · W – o!',
    hook: '„<b>M</b>a <b>D</b>użo <b>C</b>ukierków, <b>B</b>o <b>N</b>ikt <b>M</b>u <b>W</b>cale nie zabiera” – pierwsze litery to kolejne przypadki.',
    check: { q: '„Idę z mamą” – w jakim przypadku jest wyraz „mamą”?', options: ['w miejscowniku', 'w narzędniku', 'w celowniku'], answer: 1, explain: 'Pytamy: z kim? – z mamą. To narzędnik.' },
  },
  {
    title: 'Czasownik: osoba, czas, tryb',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Czasownik czytać: osoby ja czytam, ty czytasz, on czyta; czasy czytałem, czytam, będę czytać; tryby czytam, czytaj, czytałbym">
      <rect x="10" y="10" width="185" height="120" rx="12" class="f1 s1 sw"/>
      <rect x="205" y="10" width="185" height="120" rx="12" class="f2 s2 sw"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">osoba</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">czas</text>
      <text x="22" y="66" class="tx">1. ja czytam</text>
      <text x="22" y="92" class="tx">2. ty czytasz</text>
      <text x="22" y="118" class="tx">3. on czyta</text>
      <text x="215" y="66" class="tx">wczoraj: czytałem</text>
      <text x="215" y="92" class="tx">dziś: czytam</text>
      <text x="215" y="118" class="tx">jutro: będę czytać</text>
      <rect x="10" y="140" width="380" height="82" rx="12" class="f3 s3 sw"/>
      <text x="200" y="162" class="tx-b" text-anchor="middle">tryb</text>
      <text x="75" y="190" class="tx-b" text-anchor="middle">czytam</text>
      <text x="200" y="190" class="tx-b" text-anchor="middle">czytaj!</text>
      <text x="325" y="190" class="tx-b" text-anchor="middle">czytałbym</text>
      <text x="75" y="210" class="tx-s" text-anchor="middle">oznajmujący</text>
      <text x="200" y="210" class="tx-s" text-anchor="middle">rozkazujący</text>
      <text x="325" y="210" class="tx-s" text-anchor="middle">przypuszczający</text>
    </svg>`,
    text: `<p>Czasownik mówi nie tylko, <b>co</b> się dzieje. Mówi też <b>kto</b> to robi (<b>osoba</b>: ja, ty, on), ilu jest wykonawców (<b>liczba</b>: czytam – czytamy) i <b>kiedy</b> (<b>czas</b>: przeszły, teraźniejszy, przyszły).</p>
      <p><b>Tryb</b> pokazuje, jak mówimy o czynności: <b>oznajmujący</b> – że się dzieje (<i>czytam</i>), <b>rozkazujący</b> – polecenie (<i>czytaj!</i>), <b>przypuszczający</b> – że mogłaby się zdarzyć (<i>czytałbym, gdybym miał czas</i>).</p>`,
    remember: 'Czasownik ma osobę, liczbę, czas i tryb.',
    hook: 'Tryb przypuszczający ma w sobie „<b>by</b>”: czytał<b>by</b>m, poszła<b>by</b>m.',
    check: { q: '„Przeczytaj!” – w jakim trybie jest ten czasownik?', options: ['w rozkazującym', 'w oznajmującym', 'w przypuszczającym'], answer: 0, explain: 'To polecenie – tryb rozkazujący.' },
  },
  {
    title: 'Stopniowanie – coraz wyżej',
    svg: `<svg viewBox="0 0 400 225" role="img" aria-label="Schody stopniowania: dobry – stopień równy, lepszy – stopień wyższy, najlepszy – stopień najwyższy. Pod spodem: szybko, szybciej, najszybciej oraz ładny, ładniejszy, najładniejszy">
      <rect x="20" y="120" width="115" height="50" rx="6" class="f4 s4 sw"/>
      <rect x="143" y="85" width="115" height="85" rx="6" class="f2 s2 sw"/>
      <rect x="266" y="50" width="115" height="120" rx="6" class="f3 s3 sw"/>
      <text x="77" y="145" class="tx-b" text-anchor="middle">dobry</text>
      <text x="200" y="110" class="tx-b" text-anchor="middle">lepszy</text>
      <text x="323" y="75" class="tx-b" text-anchor="middle">najlepszy</text>
      <text x="77" y="163" class="tx-s" text-anchor="middle">równy</text>
      <text x="200" y="128" class="tx-s" text-anchor="middle">wyższy</text>
      <text x="323" y="93" class="tx-s" text-anchor="middle">najwyższy</text>
      <text x="200" y="195" class="tx" text-anchor="middle">szybko → szybciej → najszybciej</text>
      <text x="200" y="217" class="tx" text-anchor="middle">ładny → ładniejszy → najładniejszy</text>
    </svg>`,
    text: `<p>Przymiotniki i wiele przysłówków się <b>stopniuje</b>. Są trzy stopnie: <b>równy</b> (<i>ładny</i>), <b>wyższy</b> (<i>ładniejszy</i>) i <b>najwyższy</b> (<i>najładniejszy</i>).</p>
      <p>Niektóre wyrazy stopniują się nieregularnie: <i>dobry – lepszy – najlepszy, zły – gorszy – najgorszy</i>. Inne – za pomocą słów <i>bardziej, najbardziej</i>: <i>interesujący – bardziej interesujący – najbardziej interesujący</i>.</p>`,
    remember: 'Równy → wyższy → najwyższy. Dobry – lepszy – najlepszy, zły – gorszy – najgorszy.',
    hook: 'Stopień najwyższy prawie zawsze zaczyna się od „<b>naj</b>”.',
    check: { q: 'Jaki jest stopień wyższy przymiotnika „zły”?', options: ['zlejszy', 'najgorszy', 'gorszy'], answer: 2, explain: '„Zły” stopniuje się nieregularnie: zły – gorszy – najgorszy.' },
  },
];

window.LESSONS['polski/zdanie'] = [
  {
    title: 'Cztery rodzaje wypowiedzeń',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Cztery kafelki: wypowiedzenie oznajmujące Pada deszcz, pytające Czy pada deszcz, rozkazujące Weź parasol, wykrzyknikowe Ale leje">
      <rect x="10" y="10" width="185" height="80" rx="10" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="80" rx="10" class="f2 s2"/>
      <rect x="10" y="100" width="185" height="80" rx="10" class="f3 s3"/>
      <rect x="205" y="100" width="185" height="80" rx="10" class="f5 s5"/>
      <text x="22" y="36" class="tx-b">oznajmujące</text>
      <text x="217" y="36" class="tx-b">pytające</text>
      <text x="22" y="126" class="tx-b">rozkazujące</text>
      <text x="217" y="126" class="tx-b">wykrzyknikowe</text>
      <text x="22" y="56" class="tx-s">informuje</text>
      <text x="217" y="56" class="tx-s">pyta</text>
      <text x="22" y="146" class="tx-s">polecenie, prośba</text>
      <text x="217" y="146" class="tx-s">silne uczucia</text>
      <text x="22" y="78" class="tx">Pada deszcz.</text>
      <text x="217" y="78" class="tx">Czy pada deszcz?</text>
      <text x="22" y="168" class="tx">Weź parasol.</text>
      <text x="217" y="168" class="tx">Ale leje!</text>
    </svg>`,
    text: `<p><b>Wypowiedzenie</b> to wyraz lub kilka wyrazów, które przekazują myśl. Zaczyna się wielką literą, a kończy kropką, znakiem zapytania lub wykrzyknikiem.</p>
      <p>Wypowiedzenia <b>oznajmujące</b> informują, <b>pytające</b> pytają, <b>rozkazujące</b> wyrażają polecenie albo prośbę, a <b>wykrzyknikowe</b> – silne uczucia: radość, zdziwienie, złość.</p>`,
    remember: 'Oznajmujące „.”, pytające „?”, wykrzyknikowe „!”. Rozkazujące – kropka lub wykrzyknik.',
    check: { q: '„Czy idziesz jutro do kina?” – jakie to wypowiedzenie?', options: ['oznajmujące', 'pytające', 'rozkazujące'], answer: 1, explain: 'Pyta o coś i kończy się znakiem zapytania – jest pytające.' },
  },
  {
    title: 'Zdanie czy równoważnik zdania?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Porównanie: Na sali panuje cisza to zdanie, bo ma czasownik panuje. Cisza na sali to równoważnik zdania, bo nie ma czasownika">
      <rect x="10" y="10" width="380" height="80" rx="12" class="f3 s3 sw"/>
      <rect x="96" y="24" width="70" height="30" rx="6" class="f4 s4"/>
      <text x="20" y="45" class="tx-b">Na sali</text>
      <text x="100" y="45" class="tx-b">panuje</text>
      <text x="172" y="45" class="tx-b">cisza.</text>
      <text x="20" y="76" class="tx-s">zdanie – ma orzeczenie (czasownik „panuje”)</text>
      <rect x="10" y="100" width="380" height="80" rx="12" class="f2 s2 sw"/>
      <text x="20" y="135" class="tx-b">Cisza na sali.</text>
      <text x="20" y="166" class="tx-s">równoważnik zdania – nie ma czasownika</text>
    </svg>`,
    text: `<p><b>Zdanie</b> ma <b>orzeczenie</b> – czasownik, który mówi, co ktoś robi albo co się dzieje: <i>Na sali <b>panuje</b> cisza.</i></p>
      <p><b>Równoważnik zdania</b> nie ma takiego czasownika, ale też przekazuje myśl: <i>Cisza na sali. Pożar! Dzień dobry!</i> Często spotkasz go w tytułach, ogłoszeniach i planach.</p>`,
    hook: 'Szukaj czasownika: jest – <b>zdanie</b>, nie ma – <b>równoważnik</b>.',
    check: { q: 'Które wypowiedzenie jest równoważnikiem zdania?', options: ['Dom się pali!', 'Pożar!', 'Strażacy gaszą pożar.'], answer: 1, explain: '„Pożar!” nie ma czasownika – to równoważnik zdania.' },
  },
  {
    title: 'Podmiot i orzeczenie',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Zdanie Mały pies głośno szczeka. Podmiot pies odpowiada na pytanie kto, orzeczenie szczeka na pytanie co robi. Mały i głośno to określenia">
      <defs><marker id="a-k4pl-zd-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="145" y="26" class="tx-b" text-anchor="middle">podmiot</text>
      <text x="342" y="26" class="tx-b" text-anchor="middle">orzeczenie</text>
      <text x="145" y="46" class="tx-s" text-anchor="middle">kto? co?</text>
      <text x="342" y="46" class="tx-s" text-anchor="middle">co robi?</text>
      <rect x="20" y="58" width="80" height="42" rx="8" class="bg ln"/>
      <rect x="105" y="58" width="80" height="42" rx="8" class="f1 s1 sw"/>
      <rect x="200" y="58" width="85" height="42" rx="8" class="bg ln"/>
      <rect x="295" y="58" width="95" height="42" rx="8" class="f2 s2 sw"/>
      <text x="60" y="85" class="tx-b" text-anchor="middle">Mały</text>
      <text x="145" y="85" class="tx-b" text-anchor="middle">pies</text>
      <text x="242" y="85" class="tx-b" text-anchor="middle">głośno</text>
      <text x="342" y="85" class="tx-b" text-anchor="middle">szczeka.</text>
      <g class="ln s2">
        <path d="M60,102 Q100,130 140,104" marker-end="url(#a-k4pl-zd-3)"/>
        <path d="M242,102 Q290,130 336,104" marker-end="url(#a-k4pl-zd-3)"/>
      </g>
      <text x="60" y="150" class="tx-s" text-anchor="middle">określenie</text>
      <text x="242" y="150" class="tx-s" text-anchor="middle">określenie</text>
    </svg>`,
    text: `<p>Najważniejsze części zdania to <b>podmiot</b> i <b>orzeczenie</b>. Orzeczenie mówi, co się dzieje (<i>co robi?</i>). Podmiot – kto to robi (<i>kto? co?</i>).</p>
      <p>Pozostałe wyrazy to <b>określenia</b>. Dokładniej opisują podmiot (<i>jaki pies? – mały</i>) albo orzeczenie (<i>jak szczeka? – głośno</i>).</p>`,
    remember: 'Najpierw znajdź orzeczenie (czasownik), potem zapytaj: kto to robi? – to podmiot.',
    hook: 'Zdanie to przedstawienie: <b>podmiot</b> to aktor, a <b>orzeczenie</b> – to, co aktor robi na scenie.',
  },
  {
    title: 'Zdanie pojedyncze i złożone',
    svg: `<svg viewBox="0 0 400 185" role="img" aria-label="Kasia czyta to zdanie pojedyncze z jednym orzeczeniem. Kasia czyta, a Tomek rysuje to zdanie złożone z dwoma orzeczeniami">
      <rect x="10" y="10" width="380" height="72" rx="12" class="f1 s1 sw"/>
      <rect x="76" y="20" width="64" height="30" rx="6" class="f4 s4"/>
      <text x="20" y="41" class="tx-b">Kasia</text>
      <text x="80" y="41" class="tx-b">czyta.</text>
      <text x="20" y="70" class="tx-s">jedno orzeczenie → zdanie pojedyncze</text>
      <rect x="10" y="94" width="380" height="82" rx="12" class="f3 s3 sw"/>
      <rect x="76" y="106" width="60" height="30" rx="6" class="f4 s4"/>
      <rect x="242" y="106" width="74" height="30" rx="6" class="f4 s4"/>
      <text x="20" y="127" class="tx-b">Kasia</text>
      <text x="80" y="127" class="tx-b">czyta,</text>
      <text x="152" y="127" class="tx-b">a</text>
      <text x="172" y="127" class="tx-b">Tomek</text>
      <text x="246" y="127" class="tx-b">rysuje.</text>
      <text x="20" y="160" class="tx-s">dwa orzeczenia → zdanie złożone</text>
    </svg>`,
    text: `<p><b>Zdanie pojedyncze</b> ma jedno orzeczenie: <i>Kasia czyta.</i></p>
      <p><b>Zdanie złożone</b> ma co najmniej dwa orzeczenia: <i>Kasia czyta, a Tomek rysuje.</i> Części zdania złożonego często łączy spójnik (<i>i, a, ale, bo, że</i>). Przed <i>a, ale, bo, że</i> stawiamy przecinek.</p>`,
    hook: 'Policz czasowniki – policzysz zdania w zdaniu złożonym.',
    check: { q: 'Ile orzeczeń ma zdanie „Pada deszcz i wieje wiatr.”?', options: ['1', '4', '2'], answer: 2, explain: 'Orzeczenia to „pada” i „wieje” – są dwa, więc to zdanie złożone.' },
  },
  {
    title: 'Znaki, które porządkują zdanie',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Sześć kafelków ze znakami: przecinek przed a, że, bo; przecinek przy wyliczeniu; przecinek przy zwrocie do kogoś; dwukropek przed wyliczeniem; cudzysłów przy tytule; nawias przy wyjaśnieniu">
      <g class="f4 s4">
        <rect x="8" y="8" width="124" height="88" rx="10"/><rect x="138" y="8" width="124" height="88" rx="10"/><rect x="268" y="8" width="124" height="88" rx="10"/>
        <rect x="8" y="102" width="124" height="88" rx="10"/><rect x="138" y="102" width="124" height="88" rx="10"/><rect x="268" y="102" width="124" height="88" rx="10"/>
      </g>
      <text x="70" y="32" class="tx-b" text-anchor="middle">,</text>
      <text x="200" y="32" class="tx-b" text-anchor="middle">,</text>
      <text x="330" y="32" class="tx-b" text-anchor="middle">,</text>
      <text x="70" y="126" class="tx-b" text-anchor="middle">:</text>
      <text x="200" y="126" class="tx-b" text-anchor="middle">„ ”</text>
      <text x="330" y="126" class="tx-b" text-anchor="middle">( )</text>
      <text x="70" y="52" class="tx" text-anchor="middle">przecinek</text>
      <text x="200" y="52" class="tx" text-anchor="middle">przecinek</text>
      <text x="330" y="52" class="tx" text-anchor="middle">przecinek</text>
      <text x="70" y="146" class="tx" text-anchor="middle">dwukropek</text>
      <text x="200" y="146" class="tx" text-anchor="middle">cudzysłów</text>
      <text x="330" y="146" class="tx" text-anchor="middle">nawias</text>
      <text x="70" y="70" class="tx-s" text-anchor="middle">przed a, że, bo</text>
      <text x="200" y="70" class="tx-s" text-anchor="middle">wyliczenie</text>
      <text x="330" y="70" class="tx-s" text-anchor="middle">zwrot do kogoś</text>
      <text x="70" y="164" class="tx-s" text-anchor="middle">przed wyliczeniem</text>
      <text x="200" y="164" class="tx-s" text-anchor="middle">tytuł, cudze słowa</text>
      <text x="330" y="164" class="tx-s" text-anchor="middle">wyjaśnienie</text>
      <text x="70" y="88" class="tx-s" text-anchor="middle">Wiem, że wiesz.</text>
      <text x="200" y="88" class="tx-s" text-anchor="middle">psy, koty i ryby</text>
      <text x="330" y="88" class="tx-s" text-anchor="middle">Mamo, chodź!</text>
      <text x="70" y="182" class="tx-s" text-anchor="middle">trzy rzeczy: …</text>
      <text x="200" y="182" class="tx-s" text-anchor="middle">„Rota”</text>
      <text x="330" y="182" class="tx-s" text-anchor="middle">brat (6 lat)</text>
    </svg>`,
    text: `<p><b>Przecinek</b> stawiasz przed <i>a, ale, lecz, że, bo, który</i>, między wyliczanymi wyrazami (ale nie przed <i>i</i>) oraz przy zwrocie do kogoś: <i>Mamo, chodź!</i></p>
      <p><b>Dwukropek</b> stawiasz przed wyliczeniem albo przed cudzymi słowami. W <b>cudzysłowie</b> zapisujesz tytuły i cudze słowa. W <b>nawiasie</b> – dodatkowe wyjaśnienie.</p>`,
    remember: 'Przecinek przed: a, ale, lecz, że, bo, który. Przed „i” w wyliczeniu – bez przecinka.',
    check: { q: 'Które zdanie zapisano poprawnie?', options: ['Lubię lody, ale nie zimą.', 'Lubię lody ale, nie zimą.', 'Lubię, lody ale nie zimą.'], answer: 0, explain: 'Przecinek stawiamy przed „ale”.' },
  },
];

window.LESSONS['polski/glosk-pisownia'] = [
  {
    title: 'Głoska i litera',
    svg: `<svg viewBox="0 0 400 195" role="img" aria-label="Wyraz szafa: pięć liter s, z, a, f, a, ale cztery głoski sz, a, f, a">
      <text x="10" y="22" class="tx-s">litery</text>
      <g class="f1 s1">
        <rect x="60" y="30" width="50" height="44" rx="8"/><rect x="118" y="30" width="50" height="44" rx="8"/><rect x="176" y="30" width="50" height="44" rx="8"/>
        <rect x="234" y="30" width="50" height="44" rx="8"/><rect x="292" y="30" width="50" height="44" rx="8"/>
      </g>
      <text x="85" y="59" class="tx-b" text-anchor="middle">s</text>
      <text x="143" y="59" class="tx-b" text-anchor="middle">z</text>
      <text x="201" y="59" class="tx-b" text-anchor="middle">a</text>
      <text x="259" y="59" class="tx-b" text-anchor="middle">f</text>
      <text x="317" y="59" class="tx-b" text-anchor="middle">a</text>
      <g class="ln-thin">
        <line x1="85" y1="76" x2="114" y2="108"/><line x1="143" y1="76" x2="114" y2="108"/>
        <line x1="201" y1="76" x2="201" y2="108"/><line x1="259" y1="76" x2="259" y2="108"/><line x1="317" y1="76" x2="317" y2="108"/>
      </g>
      <text x="10" y="102" class="tx-s">głoski</text>
      <g class="f2 s2">
        <rect x="60" y="110" width="108" height="44" rx="8"/><rect x="176" y="110" width="50" height="44" rx="8"/>
        <rect x="234" y="110" width="50" height="44" rx="8"/><rect x="292" y="110" width="50" height="44" rx="8"/>
      </g>
      <text x="114" y="139" class="tx-b" text-anchor="middle">sz</text>
      <text x="201" y="139" class="tx-b" text-anchor="middle">a</text>
      <text x="259" y="139" class="tx-b" text-anchor="middle">f</text>
      <text x="317" y="139" class="tx-b" text-anchor="middle">a</text>
      <text x="200" y="182" class="tx-b" text-anchor="middle">5 liter, ale 4 głoski</text>
    </svg>`,
    text: `<p><b>Głoska</b> to dźwięk, który wymawiasz i słyszysz. <b>Litera</b> to znak, którym głoskę zapisujesz.</p>
      <p>Czasem jedną głoskę zapisujemy dwiema literami: <b>ch, cz, dz, dź, dż, rz, sz</b>. Dlatego wyraz <i>szafa</i> ma 5 liter, ale tylko 4 głoski.</p>`,
    remember: 'Głoskę słyszysz, literę widzisz.',
    hook: 'Dwuznaki to „bliźniaki”: dwie litery, jedna głoska – ch, cz, dz, dź, dż, rz, sz.',
    check: { q: 'Ile głosek ma wyraz „chata”?', options: ['5', '4', '3'], answer: 1, explain: 'ch – a – t – a: cztery głoski, choć liter jest pięć.' },
  },
  {
    title: 'Samogłoski i sylaby',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dziewięć samogłosek: a, ą, e, ę, i, o, ó, u, y. Wyraz hulajnoga podzielony na cztery sylaby: hu, laj, no, ga">
      <g class="f3 s3">
        <circle cx="30" cy="36" r="18"/><circle cx="72" cy="36" r="18"/><circle cx="114" cy="36" r="18"/>
        <circle cx="156" cy="36" r="18"/><circle cx="198" cy="36" r="18"/><circle cx="240" cy="36" r="18"/>
        <circle cx="282" cy="36" r="18"/><circle cx="324" cy="36" r="18"/><circle cx="366" cy="36" r="18"/>
      </g>
      <text x="30" y="42" class="tx-b" text-anchor="middle">a</text>
      <text x="72" y="42" class="tx-b" text-anchor="middle">ą</text>
      <text x="114" y="42" class="tx-b" text-anchor="middle">e</text>
      <text x="156" y="42" class="tx-b" text-anchor="middle">ę</text>
      <text x="198" y="42" class="tx-b" text-anchor="middle">i</text>
      <text x="240" y="42" class="tx-b" text-anchor="middle">o</text>
      <text x="282" y="42" class="tx-b" text-anchor="middle">ó</text>
      <text x="324" y="42" class="tx-b" text-anchor="middle">u</text>
      <text x="366" y="42" class="tx-b" text-anchor="middle">y</text>
      <text x="200" y="78" class="tx-s" text-anchor="middle">samogłoski – reszta to spółgłoski</text>
      <g class="f1 s1">
        <rect x="40" y="96" width="70" height="44" rx="20"/><rect x="125" y="96" width="70" height="44" rx="20"/>
        <rect x="210" y="96" width="70" height="44" rx="20"/><rect x="295" y="96" width="70" height="44" rx="20"/>
      </g>
      <text x="75" y="125" class="tx-b" text-anchor="middle">hu</text>
      <text x="160" y="125" class="tx-b" text-anchor="middle">laj</text>
      <text x="245" y="125" class="tx-b" text-anchor="middle">no</text>
      <text x="330" y="125" class="tx-b" text-anchor="middle">ga</text>
      <text x="200" y="176" class="tx-b" text-anchor="middle">4 samogłoski → 4 sylaby</text>
    </svg>`,
    text: `<p><b>Samogłoski</b> to: a, ą, e, ę, i, o, ó, u, y. Pozostałe głoski to <b>spółgłoski</b>.</p>
      <p><b>Sylaba</b> to część wyrazu z jedną samogłoską: <i>hu-laj-no-ga</i>. Gdy przenosisz wyraz do następnej linii, dzielisz go według sylab (<i>hulaj-noga</i>) i nie zostawiasz ani nie przenosisz pojedynczej litery.</p>`,
    hook: 'W każdej sylabie siedzi jedna samogłoska – policz samogłoski, a policzysz sylaby.',
    check: { q: 'Ile sylab ma wyraz „parasol”?', options: ['3', '2', '7'], answer: 0, explain: 'pa-ra-sol – trzy sylaby, trzy samogłoski.' },
  },
  {
    title: 'Dźwięczne i bezdźwięczne',
    svg: `<svg viewBox="0 0 400 195" role="img" aria-label="Pary głosek: dźwięczne b, d, g, w, z, ż i bezdźwięczne p, t, k, f, s, sz. Przykład: słyszysz chlep, odmieniasz chleba, piszesz chleb">
      <defs><marker id="a-k4pl-gl-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="380" height="40" rx="8" class="f3 s3"/>
      <rect x="10" y="56" width="380" height="40" rx="8" class="f1 s1"/>
      <text x="18" y="35" class="tx-s">dźwięczne</text>
      <text x="18" y="81" class="tx-s">bezdźwięczne</text>
      <text x="130" y="37" class="tx-b" text-anchor="middle">b</text><text x="130" y="83" class="tx-b" text-anchor="middle">p</text>
      <text x="174" y="37" class="tx-b" text-anchor="middle">d</text><text x="174" y="83" class="tx-b" text-anchor="middle">t</text>
      <text x="218" y="37" class="tx-b" text-anchor="middle">g</text><text x="218" y="83" class="tx-b" text-anchor="middle">k</text>
      <text x="262" y="37" class="tx-b" text-anchor="middle">w</text><text x="262" y="83" class="tx-b" text-anchor="middle">f</text>
      <text x="306" y="37" class="tx-b" text-anchor="middle">z</text><text x="306" y="83" class="tx-b" text-anchor="middle">s</text>
      <text x="350" y="37" class="tx-b" text-anchor="middle">ż</text><text x="350" y="83" class="tx-b" text-anchor="middle">sz</text>
      <rect x="10" y="110" width="380" height="78" rx="12" class="f4 s4 sw"/>
      <text x="20" y="140" class="tx">słyszysz [chlep]</text>
      <line x1="172" y1="135" x2="204" y2="135" class="ln s2" marker-end="url(#a-k4pl-gl-3)"/>
      <text x="212" y="140" class="tx">odmieniasz: chleba</text>
      <text x="200" y="174" class="tx-b" text-anchor="middle">piszesz: chleb</text>
    </svg>`,
    text: `<p>Połóż dłoń na gardle i powiedz „bbb”, a potem „ppp”. Przy <b>b</b> gardło drży – to głoska <b>dźwięczna</b>. Przy <b>p</b> nie drży – to głoska <b>bezdźwięczna</b>.</p>
      <p>Na końcu wyrazu często słyszymy głoskę bezdźwięczną zamiast dźwięcznej: mówimy [chlep], a piszemy <i>chleb</i>. Odmień wyraz (<i>chleba</i>) – usłyszysz, co napisać. Są też głoski <b>nosowe</b>: przy <b>ą</b> i <b>ę</b> powietrze przechodzi przez nos.</p>`,
    remember: 'Nie wiesz, czy b, czy p? Odmień wyraz: chleb – chleba, ząb – zęby.',
    hook: 'Dłoń na gardle: drży – dźwięczna, cisza – bezdźwięczna.',
    check: { q: 'Wyraz „ząb” piszemy przez „b”, bo…', options: ['to wyjątek', 'po „ą” zawsze jest „b”', 'mówimy „zęby”'], answer: 2, explain: 'W formie „zęby” wyraźnie słychać „b”.' },
  },
  {
    title: 'Ó i rz – sprawdź wymianę',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Wymiana liter: wózek – wozy, pióro – pierze, wrócić – wracać, czyli ó na o, e, a; morze – morski, dobrze – dobry, czyli rz na r">
      <defs><marker id="a-k4pl-gl-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f2 s2">
        <rect x="10" y="8" width="380" height="30" rx="6"/><rect x="10" y="42" width="380" height="30" rx="6"/><rect x="10" y="76" width="380" height="30" rx="6"/>
      </g>
      <g class="f1 s1">
        <rect x="10" y="116" width="380" height="30" rx="6"/><rect x="10" y="150" width="380" height="30" rx="6"/>
      </g>
      <g class="ln s2">
        <line x1="130" y1="23" x2="190" y2="23" marker-end="url(#a-k4pl-gl-4)"/>
        <line x1="130" y1="57" x2="190" y2="57" marker-end="url(#a-k4pl-gl-4)"/>
        <line x1="130" y1="91" x2="190" y2="91" marker-end="url(#a-k4pl-gl-4)"/>
        <line x1="130" y1="131" x2="190" y2="131" marker-end="url(#a-k4pl-gl-4)"/>
        <line x1="130" y1="165" x2="190" y2="165" marker-end="url(#a-k4pl-gl-4)"/>
      </g>
      <text x="30" y="29" class="tx-b">wózek</text><text x="205" y="29" class="tx-b">wozy</text><text x="330" y="29" class="tx-s">ó → o</text>
      <text x="30" y="63" class="tx-b">pióro</text><text x="205" y="63" class="tx-b">pierze</text><text x="330" y="63" class="tx-s">ó → e</text>
      <text x="30" y="97" class="tx-b">wrócić</text><text x="205" y="97" class="tx-b">wracać</text><text x="330" y="97" class="tx-s">ó → a</text>
      <text x="30" y="137" class="tx-b">morze</text><text x="205" y="137" class="tx-b">morski</text><text x="330" y="137" class="tx-s">rz → r</text>
      <text x="30" y="171" class="tx-b">dobrze</text><text x="205" y="171" class="tx-b">dobry</text><text x="330" y="171" class="tx-s">rz → r</text>
    </svg>`,
    text: `<p><b>Ó</b> piszemy, gdy w innej formie wyrazu słychać <b>o, e</b> lub <b>a</b>. <b>Rz</b> piszemy, gdy wymienia się na <b>r</b>.</p>
      <p>Pamiętaj też o innych regułach: <b>ó</b> w zakończeniach <i>-ów, -ówka</i> (Kraków, pocztówka); <b>u</b> na początku wyrazu (ucho) i w zakończeniach <i>-unek, -uje</i> (rysunek, maluje); <b>rz</b> po literach <i>b, p, d, t, g, k, ch, j, w</i> (brzeg, trzy, krzesło).</p>`,
    remember: 'Zmień formę wyrazu albo znajdź wyraz pokrewny: stół – stoły, morze – morski.',
    hook: 'Słyszysz <b>o</b> w innej formie? Pisz <b>ó</b> z kreską – kreska to „pamiątka” po o.',
    check: { q: 'Jaką literę wpiszesz: „m_j”, bo „moja”?', options: ['u', 'ó'], answer: 1, explain: 'Mój – moja: ó wymienia się na o.' },
  },
  {
    title: 'Ż, ch, wielka litera i „nie”',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Cztery kafelki: ż wymienne na g – odważny, odwaga; ch wymienne na sz – mucha, musze; wielka litera – Gdańsk, Wisła, Ola, ale małą maj, wtorek; nie wiem osobno, niemiły razem">
      <rect x="10" y="10" width="185" height="86" rx="10" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="86" rx="10" class="f1 s1"/>
      <rect x="10" y="104" width="185" height="86" rx="10" class="f3 s3"/>
      <rect x="205" y="104" width="185" height="86" rx="10" class="f5 s5"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">ż wymienne na g</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">ch wymienne na sz</text>
      <text x="102" y="130" class="tx-b" text-anchor="middle">wielka litera</text>
      <text x="297" y="130" class="tx-b" text-anchor="middle">„nie”</text>
      <text x="102" y="60" class="tx" text-anchor="middle">odważny – odwaga</text>
      <text x="297" y="60" class="tx" text-anchor="middle">mucha – musze</text>
      <text x="102" y="154" class="tx" text-anchor="middle">Gdańsk, Wisła, Ola</text>
      <text x="297" y="154" class="tx" text-anchor="middle">nie wiem – osobno</text>
      <text x="102" y="82" class="tx-s" text-anchor="middle">też na h, z, s, dz</text>
      <text x="297" y="82" class="tx-s" text-anchor="middle">po s zawsze ch: schody</text>
      <text x="102" y="176" class="tx-s" text-anchor="middle">małą: maj, wtorek</text>
      <text x="297" y="176" class="tx-s" text-anchor="middle">niemiły – razem</text>
    </svg>`,
    text: `<p><b>Ż</b> piszemy, gdy wymienia się na <i>g, h, z, s, dz</i> (odważny – odwaga) albo po <i>l, ł, r, n</i> (lżejszy, oranżada). <b>Ch</b> piszemy, gdy wymienia się na <i>sz</i> (mucha – musze), po literze <i>s</i> (schody) i zwykle na końcu wyrazu (dach).</p>
      <p><b>Wielką literą</b> piszesz imiona, nazwy miast, rzek, gór i państw, a <b>małą</b> – dni tygodnia i miesiące. <b>„Nie”</b> z czasownikami piszesz <b>osobno</b> (nie wiem), a z przymiotnikami w stopniu równym – <b>razem</b> (niemiły).</p>`,
    remember: '„Nie” + czasownik – osobno. „Nie” + przymiotnik – razem.',
    check: { q: 'Który zapis jest poprawny?', options: ['nie lubię', 'nielubię'], answer: 0, explain: '„Nie” z czasownikami piszemy osobno: nie lubię.' },
  },
];

window.LESSONS['polski/slownictwo'] = [
  {
    title: 'Synonimy i antonimy',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Synonimy znaczą podobnie: duży i wielki, wesoły i radosny. Antonimy znaczą przeciwnie: duży i mały, ciepły i zimny">
      <rect x="10" y="10" width="185" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="150" rx="12" class="f2 s2 sw"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">synonimy ≈</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">antonimy ↔</text>
      <text x="102" y="62" class="tx-s" text-anchor="middle">znaczą podobnie</text>
      <text x="297" y="62" class="tx-s" text-anchor="middle">znaczą przeciwnie</text>
      <text x="102" y="104" class="tx" text-anchor="middle">duży ≈ wielki</text>
      <text x="102" y="136" class="tx" text-anchor="middle">wesoły ≈ radosny</text>
      <text x="297" y="104" class="tx" text-anchor="middle">duży ↔ mały</text>
      <text x="297" y="136" class="tx" text-anchor="middle">ciepły ↔ zimny</text>
    </svg>`,
    text: `<p><b>Synonimy</b> (wyrazy bliskoznaczne) znaczą to samo lub prawie to samo: <i>duży – wielki</i>. Przydają się, gdy nie chcesz powtarzać ciągle tego samego słowa.</p>
      <p><b>Antonimy</b> (wyrazy przeciwstawne) znaczą coś przeciwnego: <i>duży – mały, dzień – noc</i>.</p>`,
    remember: 'Synonim – podobne znaczenie. Antonim – przeciwne znaczenie.',
    hook: '<b>Anty</b>nim jest „<b>anty</b>”, czyli przeciw.',
    check: { q: 'Który wyraz jest antonimem słowa „smutny”?', options: ['przygnębiony', 'markotny', 'wesoły'], answer: 2, explain: 'Wesoły to przeciwieństwo smutnego. „Przygnębiony” i „markotny” to synonimy.' },
  },
  {
    title: 'Związki frazeologiczne',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Trzy związki frazeologiczne i ich znaczenia: mieć muchy w nosie – być obrażonym; trzymać język za zębami – nie zdradzić tajemnicy; bujać w obłokach – marzyć">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f4 s4"/>
      <rect x="10" y="66" width="380" height="50" rx="10" class="f1 s1"/>
      <rect x="10" y="122" width="380" height="50" rx="10" class="f5 s5"/>
      <text x="22" y="32" class="tx">🪰 mieć muchy w nosie</text>
      <text x="22" y="52" class="tx-s">= być obrażonym, w złym humorze</text>
      <text x="22" y="88" class="tx">🤐 trzymać język za zębami</text>
      <text x="22" y="108" class="tx-s">= nie zdradzić tajemnicy</text>
      <text x="22" y="144" class="tx">☁️ bujać w obłokach</text>
      <text x="22" y="164" class="tx-s">= marzyć, nie skupiać się</text>
    </svg>`,
    text: `<p><b>Związek frazeologiczny</b> to utarte połączenie wyrazów o znaczeniu przenośnym. Ktoś, kto „ma muchy w nosie”, wcale nie ma owadów w nosie – jest po prostu obrażony.</p>
      <p>Inne przykłady: <i>mieć dwie lewe ręce</i> (być niezgrabnym w pracach ręcznych), <i>spać jak suseł</i> (spać mocno), <i>kamień spadł mi z serca</i> (poczułem ulgę).</p>`,
    remember: 'Związek frazeologiczny ma znaczenie przenośne – nie tłumacz go słowo po słowie.',
    hook: 'Ucz się związków w całości, jak krótkich wierszyków – i wyobraź sobie obrazek: mucha w nosie, głowa w chmurach.',
    check: { q: 'Co znaczy „spać jak suseł”?', options: ['nie móc zasnąć', 'spać mocno, twardo', 'spać na drzewie'], answer: 1, explain: 'Tak mówimy o kimś, kto śpi bardzo mocno.' },
  },
  {
    title: 'Dosłownie czy w przenośni?',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Porównanie: złoty pierścionek – znaczenie dosłowne, zrobiony ze złota; złote serce – znaczenie przenośne, ktoś jest bardzo dobry">
      <rect x="10" y="10" width="185" height="140" rx="12" class="f4 s4 sw"/>
      <rect x="205" y="10" width="185" height="140" rx="12" class="f5 s5 sw"/>
      <text x="102" y="38" class="tx-b" text-anchor="middle">dosłownie</text>
      <text x="297" y="38" class="tx-b" text-anchor="middle">w przenośni</text>
      <text x="102" y="74" class="tx-b" text-anchor="middle">💍</text>
      <text x="297" y="74" class="tx-b" text-anchor="middle">❤️</text>
      <text x="102" y="104" class="tx" text-anchor="middle">złoty pierścionek</text>
      <text x="297" y="104" class="tx" text-anchor="middle">złote serce</text>
      <text x="102" y="132" class="tx-s" text-anchor="middle">= zrobiony ze złota</text>
      <text x="297" y="132" class="tx-s" text-anchor="middle">= ktoś jest bardzo dobry</text>
    </svg>`,
    text: `<p>Wyraz może mieć <b>znaczenie dosłowne</b> – zwykłe, podstawowe. <i>Złoty pierścionek</i> jest naprawdę ze złota.</p>
      <p>Może też mieć <b>znaczenie przenośne</b> – inne niż zwykle. <i>Złote serce</i> nie jest ze złota – mówimy tak o kimś, kto jest bardzo dobry. Znaczenie poznasz z <b>kontekstu</b>, czyli z tego, co jest wokół wyrazu.</p>`,
    hook: 'Zapytaj: „Czy to naprawdę tak jest?”. Tak – dosłownie. Nie – w przenośni.',
    check: { q: 'W którym zdaniu „ostry” ma znaczenie przenośne?', options: ['Ten nóż jest ostry.', 'Trener był dziś ostry.', 'Igła jest ostra.'], answer: 1, explain: 'Trener nie kłuje ani nie tnie – był surowy. To znaczenie przenośne.' },
  },
  {
    title: 'Zdrobnienia i zgrubienia',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Tabela: zdrobnienie, wyraz neutralny, zgrubienie. Piesek – pies – psisko, domek – dom – domisko, kotek – kot – kocisko">
      <rect x="10" y="10" width="125" height="170" rx="12" class="f3 s3"/>
      <rect x="140" y="10" width="120" height="170" rx="12" class="bg ln"/>
      <rect x="265" y="10" width="125" height="170" rx="12" class="f2 s2"/>
      <text x="72" y="36" class="tx-b" text-anchor="middle">zdrobnienie</text>
      <text x="200" y="36" class="tx-b" text-anchor="middle">neutralny</text>
      <text x="327" y="36" class="tx-b" text-anchor="middle">zgrubienie</text>
      <text x="72" y="76" class="tx-b" text-anchor="middle">piesek</text><text x="200" y="76" class="tx-b" text-anchor="middle">pies</text><text x="327" y="76" class="tx-b" text-anchor="middle">psisko</text>
      <text x="72" y="110" class="tx-b" text-anchor="middle">domek</text><text x="200" y="110" class="tx-b" text-anchor="middle">dom</text><text x="327" y="110" class="tx-b" text-anchor="middle">domisko</text>
      <text x="72" y="144" class="tx-b" text-anchor="middle">kotek</text><text x="200" y="144" class="tx-b" text-anchor="middle">kot</text><text x="327" y="144" class="tx-b" text-anchor="middle">kocisko</text>
      <text x="72" y="168" class="tx-s" text-anchor="middle">małe, miłe</text>
      <text x="200" y="168" class="tx-s" text-anchor="middle">zwykłe</text>
      <text x="327" y="168" class="tx-s" text-anchor="middle">duże, niemiłe</text>
    </svg>`,
    text: `<p>Wyrazy <b>neutralne</b> tylko nazywają: <i>pies, dom</i>. Wyrazy <b>wartościujące</b> pokazują też, co czujemy.</p>
      <p><b>Zdrobnienia</b> pokazują, że coś jest małe albo miłe: <i>piesek, domek</i>. <b>Zgrubienia</b> pokazują, że coś jest duże albo niemiłe: <i>psisko, domisko</i>. Wybór słowa zdradza twoje uczucia.</p>`,
    remember: 'Zdrobnienie – małe i miłe. Zgrubienie – duże albo niemiłe.',
    hook: '<i>-ek</i> to „głaskanie”: piesek, kotek. <i>-isko</i> to „groźna mina”: psisko, kocisko.',
  },
  {
    title: 'Słowniki – gdzie szukać?',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Cztery słowniki: języka polskiego – co znaczy wyraz; ortograficzny – jak się pisze; synonimów – wyrazy bliskoznaczne; frazeologiczny – związki frazeologiczne">
      <rect x="8" y="8" width="190" height="86" rx="10" class="f1 s1"/>
      <rect x="202" y="8" width="190" height="86" rx="10" class="f2 s2"/>
      <rect x="8" y="102" width="190" height="86" rx="10" class="f3 s3"/>
      <rect x="202" y="102" width="190" height="86" rx="10" class="f5 s5"/>
      <text x="103" y="36" class="tx-b" text-anchor="middle">📕</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">✏️</text>
      <text x="103" y="130" class="tx-b" text-anchor="middle">🔁</text>
      <text x="297" y="130" class="tx-b" text-anchor="middle">💬</text>
      <text x="103" y="60" class="tx" text-anchor="middle">języka polskiego</text>
      <text x="297" y="60" class="tx" text-anchor="middle">ortograficzny</text>
      <text x="103" y="154" class="tx" text-anchor="middle">synonimów</text>
      <text x="297" y="154" class="tx" text-anchor="middle">frazeologiczny</text>
      <text x="103" y="80" class="tx-s" text-anchor="middle">co znaczy wyraz?</text>
      <text x="297" y="80" class="tx-s" text-anchor="middle">jak się pisze?</text>
      <text x="103" y="174" class="tx-s" text-anchor="middle">jak powiedzieć inaczej?</text>
      <text x="297" y="174" class="tx-s" text-anchor="middle">co znaczy związek?</text>
    </svg>`,
    text: `<p>Nie znasz słowa? Zajrzyj do słownika. W <b>słowniku języka polskiego</b> sprawdzisz znaczenie, w <b>ortograficznym</b> – pisownię, w <b>słowniku synonimów</b> (wyrazów bliskoznacznych) – słowa o podobnym znaczeniu, a we <b>frazeologicznym</b> – związki frazeologiczne.</p>
      <p>Wyrazy w słowniku są ułożone <b>alfabetycznie</b>. Wiele słowników znajdziesz też w internecie.</p>`,
    remember: 'Znaczenie – słownik języka polskiego. Pisownia – ortograficzny.',
    hook: '„Orto” jak „prosto”: słownik <b>orto</b>graficzny prostuje błędy w pisowni.',
    check: { q: 'Gdzie sprawdzisz, co znaczy „bujać w obłokach”?', options: ['w słowniku ortograficznym', 'w słowniku synonimów', 'w słowniku frazeologicznym'], answer: 2, explain: '„Bujać w obłokach” to związek frazeologiczny – jego znaczenie jest w słowniku frazeologicznym.' },
  },
];

window.LESSONS['polski/teksty-kultury'] = [
  {
    title: 'Świat przedstawiony',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: świat przedstawiony w środku, a wokół cztery elementy: czas – kiedy, miejsce – gdzie, bohaterowie – kto, wydarzenia – co się dzieje">
      <g class="ln-thin">
        <line x1="200" y1="100" x2="85" y2="40"/><line x1="200" y1="100" x2="315" y2="40"/>
        <line x1="200" y1="100" x2="85" y2="160"/><line x1="200" y1="100" x2="315" y2="160"/>
      </g>
      <g class="f4 s4">
        <rect x="10" y="10" width="150" height="60" rx="10"/><rect x="240" y="10" width="150" height="60" rx="10"/>
        <rect x="10" y="130" width="150" height="60" rx="10"/><rect x="240" y="130" width="150" height="60" rx="10"/>
      </g>
      <rect x="100" y="78" width="200" height="44" rx="22" class="f5 s5 sw"/>
      <text x="200" y="106" class="tx" text-anchor="middle">świat przedstawiony</text>
      <text x="85" y="36" class="tx-b" text-anchor="middle">🕰️ czas</text>
      <text x="315" y="36" class="tx-b" text-anchor="middle">📍 miejsce</text>
      <text x="85" y="156" class="tx-b" text-anchor="middle">👥 bohaterowie</text>
      <text x="315" y="156" class="tx-b" text-anchor="middle">⚡ wydarzenia</text>
      <text x="85" y="58" class="tx-s" text-anchor="middle">kiedy?</text>
      <text x="315" y="58" class="tx-s" text-anchor="middle">gdzie?</text>
      <text x="85" y="178" class="tx-s" text-anchor="middle">kto?</text>
      <text x="315" y="178" class="tx-s" text-anchor="middle">co się dzieje?</text>
    </svg>`,
    text: `<p>Każdy utwór – książka, film, komiks – tworzy swój świat. To <b>świat przedstawiony</b>: <b>czas</b> i <b>miejsce</b> akcji, <b>bohaterowie</b> i <b>wydarzenia</b>. Jest to <b>fikcja</b>, czyli świat wymyślony przez autora.</p>
      <p>Wydarzenia ułożone po kolei to <b>fabuła</b>. Bohaterów możesz oceniać: czy postąpili dobrze? Co ty zrobiłbyś na ich miejscu?</p>`,
    remember: 'Świat przedstawiony = czas + miejsce + bohaterowie + wydarzenia.',
    hook: 'Cztery pytania: <b>kiedy? gdzie? kto? co?</b> – i masz cały świat utworu.',
    check: { q: 'Fabuła to…', options: ['ciąg wydarzeń ułożonych po kolei', 'miejsce akcji', 'główny bohater'], answer: 0, explain: 'Fabuła to wydarzenia w utworze, jedno po drugim.' },
  },
  {
    title: 'Autor, narrator, podmiot mówiący',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy pojęcia: autor – prawdziwa osoba, która napisała utwór; narrator – opowiada o wydarzeniach w opowiadaniu, baśni lub powieści; podmiot mówiący – ja, które mówi w wierszu">
      <rect x="10" y="10" width="380" height="54" rx="10" class="f1 s1"/>
      <rect x="10" y="70" width="380" height="54" rx="10" class="f3 s3"/>
      <rect x="10" y="130" width="380" height="54" rx="10" class="f2 s2"/>
      <text x="22" y="34" class="tx-b">✍️ autor</text>
      <text x="22" y="54" class="tx-s">prawdziwa osoba, która napisała utwór</text>
      <text x="22" y="94" class="tx-b">🗣️ narrator</text>
      <text x="22" y="114" class="tx-s">opowiada o wydarzeniach (opowiadanie, baśń, powieść)</text>
      <text x="22" y="154" class="tx-b">🎤 podmiot mówiący</text>
      <text x="22" y="174" class="tx-s">„ja”, które mówi w wierszu</text>
    </svg>`,
    text: `<p><b>Autor</b> to prawdziwa osoba, która napisała utwór – jego nazwisko jest na okładce. <b>Narrator</b> to ten, kto w utworze opowiada o wydarzeniach. Autor go wymyślił, tak jak bohaterów.</p>
      <p>W wierszu zamiast narratora mówi <b>podmiot mówiący</b> – to „ja”, które dzieli się myślami i uczuciami.</p>`,
    hook: 'Autor siedzi przy biurku, a narrator mieszka w środku książki.',
    check: { q: 'Kto opowiada historię w baśni?', options: ['podmiot mówiący', 'narrator', 'czytelnik'], answer: 1, explain: 'W utworach, które opowiadają historię (baśń, opowiadanie, powieść), opowiada narrator.' },
  },
  {
    title: 'Realistyczny czy fantastyczny?',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Porównanie: utwór realistyczny – mogło się zdarzyć naprawdę, np. wycieczka, kłótnia przyjaciół; utwór fantastyczny – rzeczy niemożliwe, np. czary, smoki, mówiące zwierzęta">
      <rect x="10" y="10" width="185" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="150" rx="12" class="f5 s5 sw"/>
      <text x="102" y="48" class="tx-b" text-anchor="middle">🏫</text>
      <text x="297" y="48" class="tx-b" text-anchor="middle">🐉</text>
      <text x="102" y="76" class="tx-b" text-anchor="middle">realistyczny</text>
      <text x="297" y="76" class="tx-b" text-anchor="middle">fantastyczny</text>
      <text x="102" y="100" class="tx-s" text-anchor="middle">mogło się zdarzyć naprawdę</text>
      <text x="297" y="100" class="tx-s" text-anchor="middle">rzeczy niemożliwe</text>
      <text x="102" y="126" class="tx-s" text-anchor="middle">wycieczka klasowa,</text>
      <text x="102" y="144" class="tx-s" text-anchor="middle">kłótnia przyjaciół</text>
      <text x="297" y="126" class="tx-s" text-anchor="middle">czary, smoki,</text>
      <text x="297" y="144" class="tx-s" text-anchor="middle">mówiące zwierzęta</text>
    </svg>`,
    text: `<p>W <b>utworze realistycznym</b> wszystko mogłoby się zdarzyć naprawdę: bohaterowie chodzą do szkoły, kłócą się i godzą, jadą na wycieczkę.</p>
      <p>W <b>utworze fantastycznym</b> są rzeczy niemożliwe: czary, smoki, latające dywany, zwierzęta mówiące ludzkim głosem. Fantastyczne są np. baśnie.</p>`,
    remember: 'Mogło się zdarzyć naprawdę – realistyczny. Są czary i rzeczy niemożliwe – fantastyczny.',
    check: { q: 'Pies w opowiadaniu rozmawia z chłopcem ludzkim głosem. To element…', options: ['fantastyczny', 'realistyczny'], answer: 0, explain: 'Psy nie mówią ludzkim głosem – to element fantastyczny.' },
  },
  {
    title: 'Baśń, legenda, mit, przypowieść',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Cztery gatunki: baśń – czary, dobro zwycięża zło; legenda – prawda i fikcja, np. skąd nazwa miejsca; mit – starożytni Grecy, bogowie, początek świata; przypowieść – krótka opowieść z ukrytą nauką">
      <rect x="10" y="10" width="185" height="82" rx="10" class="f5 s5"/>
      <rect x="205" y="10" width="185" height="82" rx="10" class="f4 s4"/>
      <rect x="10" y="100" width="185" height="82" rx="10" class="f1 s1"/>
      <rect x="205" y="100" width="185" height="82" rx="10" class="f3 s3"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">🧚 baśń</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">🏰 legenda</text>
      <text x="102" y="126" class="tx-b" text-anchor="middle">⚡ mit</text>
      <text x="297" y="126" class="tx-b" text-anchor="middle">🌾 przypowieść</text>
      <text x="102" y="58" class="tx-s" text-anchor="middle">czary i wróżki</text>
      <text x="102" y="78" class="tx-s" text-anchor="middle">dobro zwycięża zło</text>
      <text x="297" y="58" class="tx-s" text-anchor="middle">prawda + fikcja</text>
      <text x="297" y="78" class="tx-s" text-anchor="middle">np. skąd nazwa miejsca</text>
      <text x="102" y="148" class="tx-s" text-anchor="middle">starożytni Grecy</text>
      <text x="102" y="168" class="tx-s" text-anchor="middle">bogowie, początek świata</text>
      <text x="297" y="148" class="tx-s" text-anchor="middle">krótka opowieść</text>
      <text x="297" y="168" class="tx-s" text-anchor="middle">z ukrytą nauką</text>
    </svg>`,
    text: `<p><b>Baśń</b> ma czary i istoty fantastyczne, a dobro zwycięża zło. <b>Legenda</b> łączy prawdę i fikcję – często wyjaśnia, skąd wzięła się nazwa miejsca. <b>Mit</b> to opowieść starożytnych, np. Greków, o bogach, bohaterach i powstaniu świata. <b>Przypowieść</b> to krótka opowieść z ukrytą nauką.</p>
      <p>Dłuższe utwory pisane prozą to <b>opowiadanie</b> (krótsze, jeden główny ciąg wydarzeń) i <b>powieść</b> (długa, wiele wątków, rozdziały). W klasach 4–6 poznasz m.in. wybrane mity greckie, fragmenty Biblii, baśnie i legendy, a także „Mazurka Dąbrowskiego” i „Rotę”.</p>`,
    remember: 'Baśń – czary. Legenda – prawda i fikcja. Mit – bogowie i początek świata. Przypowieść – ukryta nauka.',
    hook: 'Baśń <b>czaruje</b>, legenda <b>wyjaśnia nazwy</b>, mit opowiada o <b>bogach</b>, przypowieść <b>uczy</b>.',
  },
  {
    title: 'Środki, które działają na wyobraźnię',
    svg: `<svg viewBox="0 0 400 248" role="img" aria-label="Tabela środków artystycznych z przykładami: epitet ciemna noc, porównanie szybki jak wiatr, przenośnia dywan z liści, wyliczenie maki, chabry, bratki, powtórzenie cicho, cicho, cicho, wyraz dźwiękonaśladowczy hau, bęc, rym kotek – płotek">
      <g class="f1 s1">
        <rect x="8" y="8" width="384" height="30" rx="6"/><rect x="8" y="42" width="384" height="30" rx="6"/>
        <rect x="8" y="76" width="384" height="30" rx="6"/><rect x="8" y="110" width="384" height="30" rx="6"/>
        <rect x="8" y="144" width="384" height="30" rx="6"/><rect x="8" y="178" width="384" height="30" rx="6"/>
        <rect x="8" y="212" width="384" height="30" rx="6"/>
      </g>
      <text x="16" y="29" class="tx-b">epitet</text><text x="212" y="29" class="tx">ciemna noc</text>
      <text x="16" y="63" class="tx-b">porównanie</text><text x="212" y="63" class="tx">szybki jak wiatr</text>
      <text x="16" y="97" class="tx-b">przenośnia</text><text x="212" y="97" class="tx">dywan z liści</text>
      <text x="16" y="131" class="tx-b">wyliczenie</text><text x="212" y="131" class="tx">maki, chabry, bratki</text>
      <text x="16" y="165" class="tx-b">powtórzenie</text><text x="212" y="165" class="tx">cicho, cicho, cicho</text>
      <text x="16" y="199" class="tx-b">dźwiękonaśladowczy</text><text x="212" y="199" class="tx">hau, bęc, kap-kap</text>
      <text x="16" y="233" class="tx-b">rym</text><text x="212" y="233" class="tx">kotek – płotek</text>
    </svg>`,
    text: `<p>Pisarze i poeci używają <b>środków artystycznych</b>, żeby tekst był ciekawszy i działał na wyobraźnię. <b>Epitet</b> określa rzeczownik (<i>ciemna noc</i>). <b>Porównanie</b> zestawia dwie rzeczy słowem <i>jak, niby, niczym</i>. <b>Przenośnia</b> (metafora) nadaje słowom nowe znaczenie – liście nie są dywanem, ale go przypominają.</p>
      <p><b>Wyliczenie</b> wymienia wiele rzeczy po kolei, <b>powtórzenie</b> wzmacnia słowo, <b>wyrazy dźwiękonaśladowcze</b> naśladują dźwięki, a <b>rymy</b> to podobne końcówki wyrazów w wersach wiersza.</p>`,
    remember: 'Jest „jak” – porównanie. Brak „jak”, a słowa znaczą coś innego niż zwykle – przenośnia.',
    hook: 'Porównanie ma „<b>jak</b>” – jak klej, który skleja dwie rzeczy.',
    check: { q: '„Oczy jak dwa węgielki.” – jaki to środek?', options: ['epitet', 'rym', 'porównanie'], answer: 2, explain: 'Słowo „jak” zestawia oczy z węgielkami – to porównanie.' },
  },
];

window.LESSONS['polski/formy-wypowiedzi'] = [
  {
    title: 'Notatka i mapa myśli',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Mapa myśli: w środku temat pies, wokół gałęzie: wygląd – sierść, ogon; jedzenie – karma, woda; zabawy – piłka, spacer; opieka – weterynarz">
      <g class="ln-thin">
        <line x1="200" y1="100" x2="70" y2="40"/><line x1="200" y1="100" x2="330" y2="40"/>
        <line x1="200" y1="100" x2="70" y2="160"/><line x1="200" y1="100" x2="330" y2="160"/>
      </g>
      <g class="f3 s3">
        <rect x="10" y="15" width="120" height="50" rx="12"/><rect x="270" y="15" width="120" height="50" rx="12"/>
        <rect x="10" y="135" width="120" height="50" rx="12"/><rect x="270" y="135" width="120" height="50" rx="12"/>
      </g>
      <ellipse cx="200" cy="100" rx="60" ry="28" class="f5 s5 sw"/>
      <text x="200" y="106" class="tx-b" text-anchor="middle">🐕 pies</text>
      <text x="70" y="36" class="tx" text-anchor="middle">wygląd</text>
      <text x="330" y="36" class="tx" text-anchor="middle">jedzenie</text>
      <text x="70" y="156" class="tx" text-anchor="middle">zabawy</text>
      <text x="330" y="156" class="tx" text-anchor="middle">opieka</text>
      <text x="70" y="56" class="tx-s" text-anchor="middle">sierść, ogon</text>
      <text x="330" y="56" class="tx-s" text-anchor="middle">karma, woda</text>
      <text x="70" y="176" class="tx-s" text-anchor="middle">piłka, spacer</text>
      <text x="330" y="176" class="tx-s" text-anchor="middle">weterynarz</text>
    </svg>`,
    text: `<p><b>Notatka</b> to krótki zapis najważniejszych informacji – z lekcji, z podręcznika, z filmu. Może mieć formę punktów, tabeli albo <b>mapy myśli</b>.</p>
      <p>W mapie myśli temat zapisujesz w środku kartki. Od niego rysujesz gałęzie, a na nich – najważniejsze informacje. Kolory i rysunki pomagają zapamiętać.</p>`,
    remember: 'Notatka = najważniejsze informacje, krótko.',
    hook: 'Mapa myśli wygląda jak pająk: temat to tułów, a informacje to nogi.',
    check: { q: 'Co zapisujesz w notatce?', options: ['cały tekst słowo w słowo', 'najważniejsze informacje', 'tylko tytuł'], answer: 1, explain: 'Notatka jest krótka – zawiera tylko to, co najważniejsze.' },
  },
  {
    title: 'Plan wydarzeń',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Porównanie planów: jednolity plan z samych równoważników zdań i niejednolity plan, w którym pomieszano zdania i równoważniki">
      <rect x="10" y="10" width="185" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="205" y="10" width="185" height="150" rx="12" class="f2 s2 sw"/>
      <text x="102" y="38" class="tx-b" text-anchor="middle">✔️ jednolity</text>
      <text x="297" y="38" class="tx-b" text-anchor="middle">✖️ pomieszany</text>
      <text x="20" y="70" class="tx-s">1. Wyjazd na wycieczkę.</text>
      <text x="20" y="96" class="tx-s">2. Zgubienie mapy.</text>
      <text x="20" y="122" class="tx-s">3. Szczęśliwy powrót.</text>
      <text x="215" y="70" class="tx-s">1. Wyjazd na wycieczkę.</text>
      <text x="215" y="96" class="tx-s">2. Uczniowie gubią mapę.</text>
      <text x="215" y="122" class="tx-s">3. Szczęśliwy powrót.</text>
      <text x="102" y="150" class="tx-s" text-anchor="middle">same równoważniki</text>
      <text x="297" y="150" class="tx-s" text-anchor="middle">zdanie wśród równoważników</text>
    </svg>`,
    text: `<p>Żeby dobrze zrozumieć tekst, zadaj do niego pytania: <i>kto? co? gdzie? kiedy? dlaczego?</i> Potem możesz ułożyć <b>plan odtwórczy</b> – najważniejsze wydarzenia w punktach, w tej samej kolejności co w tekście.</p>
      <p>Plan powinien być <b>jednolity</b>: wszystkie punkty to zdania (<i>Uczniowie gubią mapę.</i>) albo wszystkie to równoważniki zdań (<i>Zgubienie mapy.</i>).</p>`,
    remember: 'Plan odtwórczy: wydarzenia po kolei, punkty w jednej formie.',
    hook: 'Plan jest jak koraliki na sznurku: jeden po drugim i wszystkie z tego samego kompletu.',
    check: { q: 'Który punkt pasuje do planu: „1. Przyjazd do babci. 2. ___ 3. Powrót do domu.”?', options: ['Wizyta w zoo.', 'Idziemy do zoo.', 'Czy pójdziemy do zoo?'], answer: 0, explain: 'Pozostałe punkty to równoważniki zdań, więc drugi też powinien nim być: „Wizyta w zoo.”' },
  },
  {
    title: 'Opowiadanie: wstęp, rozwinięcie, zakończenie',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Budowa opowiadania: wstęp – kto, gdzie, kiedy; rozwinięcie – wydarzenia po kolei, najciekawsze; zakończenie – jak się skończyło. Każda część zaczyna się akapitem, czyli wcięciem">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f1 s1"/>
      <rect x="10" y="68" width="380" height="80" rx="10" class="f2 s2"/>
      <rect x="10" y="156" width="380" height="50" rx="10" class="f3 s3"/>
      <text x="24" y="32" class="tx-b">wstęp</text>
      <text x="24" y="50" class="tx-s">kto? gdzie? kiedy?</text>
      <text x="24" y="92" class="tx-b">rozwinięcie</text>
      <text x="24" y="112" class="tx-s">wydarzenia po kolei</text>
      <text x="24" y="130" class="tx-s">i to najciekawsze!</text>
      <text x="24" y="178" class="tx-b">zakończenie</text>
      <text x="24" y="196" class="tx-s">jak się skończyło?</text>
      <g class="ln-thin">
        <line x1="250" y1="24" x2="378" y2="24"/><line x1="226" y1="36" x2="378" y2="36"/><line x1="226" y1="48" x2="320" y2="48"/>
        <line x1="250" y1="82" x2="378" y2="82"/><line x1="226" y1="94" x2="378" y2="94"/><line x1="226" y1="106" x2="378" y2="106"/>
        <line x1="226" y1="118" x2="378" y2="118"/><line x1="226" y1="130" x2="340" y2="130"/>
        <line x1="250" y1="170" x2="378" y2="170"/><line x1="226" y1="182" x2="378" y2="182"/><line x1="226" y1="194" x2="300" y2="194"/>
      </g>
      <text x="244" y="29" class="tx-s" text-anchor="end">akapit →</text>
    </svg>`,
    text: `<p><b>Opowiadanie</b> ma trzy części. We <b>wstępie</b> przedstawiasz bohaterów, miejsce i czas. W <b>rozwinięciu</b> opisujesz wydarzenia po kolei – także to najciekawsze. W <b>zakończeniu</b> piszesz, jak wszystko się skończyło i co z tego wynika.</p>
      <p>Każdą część zaczynasz od nowej linii, z małym wcięciem – to <b>akapit</b>. Kolejność wydarzeń pokażesz słowami: <i>najpierw, potem, następnie, nagle, w końcu</i>.</p>`,
    remember: 'Wstęp – rozwinięcie – zakończenie. Nowa część = nowy akapit.',
    hook: 'Kto? Gdzie? Kiedy? → Co się stało? → Jak się skończyło?',
    check: { q: 'Co piszesz w zakończeniu opowiadania?', options: ['kto jest bohaterem', 'gdzie i kiedy to się działo', 'jak się skończyło i co z tego wynika'], answer: 2, explain: 'Bohaterów, miejsce i czas przedstawiasz we wstępie. W zakończeniu piszesz, jak skończyła się historia.' },
  },
  {
    title: 'List – część po części',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Wzór listu: w prawym górnym rogu miejscowość i data, potem zwrot Droga Babciu, treść, pozdrowienia Ściskam mocno i podpis Ola">
      <rect x="10" y="8" width="250" height="188" rx="8" class="bg ln"/>
      <text x="250" y="30" class="tx-s" text-anchor="end">Kraków, 5 listopada 2026 r.</text>
      <text x="24" y="62" class="tx">Droga Babciu,</text>
      <g class="ln-thin">
        <line x1="44" y1="82" x2="245" y2="82"/><line x1="24" y1="94" x2="245" y2="94"/>
        <line x1="24" y1="106" x2="245" y2="106"/><line x1="24" y1="118" x2="180" y2="118"/>
      </g>
      <text x="120" y="150" class="tx">Ściskam mocno,</text>
      <text x="120" y="178" class="tx-b">Ola</text>
      <text x="272" y="30" class="tx-s">← data</text>
      <text x="272" y="62" class="tx-s">← zwrot</text>
      <text x="272" y="100" class="tx-s">← treść</text>
      <text x="272" y="150" class="tx-s">← pozdrowienia</text>
      <text x="272" y="178" class="tx-s">← podpis</text>
    </svg>`,
    text: `<p><b>List tradycyjny</b> ma stałe części: miejscowość i datę (w prawym górnym rogu), zwrot do adresata, treść, pozdrowienia i podpis. W liście z szacunku piszesz wielką literą zwroty do adresata: <i>Ty, Ciebie, Ci</i>.</p>
      <p><b>E-mail</b> ma podobne części, ale zamiast daty i miejscowości wpisujesz adres odbiorcy i <b>temat</b> wiadomości. Do dorosłych piszesz oficjalnie, np. „Szanowna Pani,”.</p>`,
    remember: 'Data → zwrot → treść → pozdrowienia → podpis.',
    hook: 'List czytasz jak schody – z góry na dół: data, zwrot, treść, pozdrowienia, podpis.',
    check: { q: 'Co piszesz zaraz po zwrocie „Droga Babciu,”?', options: ['podpis', 'treść listu', 'datę'], answer: 1, explain: 'Data jest na samej górze, podpis na końcu. Po zwrocie piszesz treść.' },
  },
  {
    title: 'Opis przedmiotu i opinia',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Po lewej kolejność opisu przedmiotu: nazwa i ogólny wygląd, szczegóły, do czego służy, moja opinia. Po prawej wzór opinii: Moim zdaniem piórnik jest super, bo ma dużo przegródek">
      <defs><marker id="a-k4pl-fw-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f1 s1">
        <rect x="10" y="10" width="200" height="34" rx="8"/><rect x="10" y="54" width="200" height="34" rx="8"/>
        <rect x="10" y="98" width="200" height="34" rx="8"/><rect x="10" y="142" width="200" height="34" rx="8"/>
      </g>
      <g class="ln s2">
        <line x1="110" y1="45" x2="110" y2="52" marker-end="url(#a-k4pl-fw-5)"/>
        <line x1="110" y1="89" x2="110" y2="96" marker-end="url(#a-k4pl-fw-5)"/>
        <line x1="110" y1="133" x2="110" y2="140" marker-end="url(#a-k4pl-fw-5)"/>
      </g>
      <text x="20" y="32" class="tx-s">1. nazwa, ogólny wygląd</text>
      <text x="20" y="76" class="tx-s">2. szczegóły, materiał</text>
      <text x="20" y="120" class="tx-s">3. do czego służy</text>
      <text x="20" y="164" class="tx-s">4. co o nim myślę</text>
      <rect x="225" y="10" width="165" height="166" rx="12" class="f4 s4 sw"/>
      <text x="307" y="36" class="tx-b" text-anchor="middle">opinia</text>
      <text x="237" y="66" class="tx-s">Moim zdaniem</text>
      <text x="237" y="86" class="tx-s">piórnik jest super,</text>
      <text x="237" y="114" class="tx-b">bo</text>
      <text x="237" y="140" class="tx-s">ma dużo przegródek.</text>
      <text x="237" y="164" class="tx-s">← uzasadnienie</text>
    </svg>`,
    text: `<p><b>Opis przedmiotu</b> prowadzisz od ogółu do szczegółu: najpierw nazwa i ogólny wygląd (kształt, wielkość, kolor), potem szczegóły, do czego przedmiot służy, a na końcu – co o nim myślisz. Pomagają przymiotniki: <i>okrągły, drewniany, gładki</i>.</p>
      <p><b>Opinia</b> to twoje zdanie. Zawsze ją <b>uzasadnij</b>, czyli podaj powód, po słowach <i>bo, ponieważ, dlatego że</i>.</p>`,
    remember: 'Opis: od ogółu do szczegółu. Opinia: „uważam, że…, bo…”.',
    hook: 'Opinia bez „bo” jest jak rower bez łańcucha – nikogo nie przekona.',
    check: { q: 'Uzupełnij: „Lubię ten rower, ___ jest szybki i lekki.”', options: ['ale', 'bo', 'lub'], answer: 1, explain: '„Bo” wprowadza uzasadnienie – powód, dla którego lubisz rower.' },
  },
];

window.LESSONS['polski/dialog-wywiad'] = [
  {
    title: 'Dialog czy monolog?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Po lewej dialog: dwie osoby na zmianę mówią w dymkach – Idziesz na boisko? Jasne, zaraz! Po prawej monolog: jedna osoba w dużym dymku opowiada historię.">
      <rect x="8" y="8" width="190" height="194" rx="12" class="f1 s1"/>
      <rect x="206" y="8" width="186" height="194" rx="12" class="f2 s2"/>
      <text x="103" y="32" class="tx-b" text-anchor="middle">dialog</text>
      <text x="299" y="32" class="tx-b" text-anchor="middle">monolog</text>
      <rect x="20" y="44" width="130" height="34" rx="12" class="bg ln"/>
      <text x="85" y="66" class="tx-s" text-anchor="middle">Idziesz na boisko?</text>
      <rect x="56" y="88" width="130" height="34" rx="12" class="bg ln"/>
      <text x="121" y="110" class="tx-s" text-anchor="middle">Jasne, zaraz!</text>
      <text x="40" y="168" class="tx-b" style="font-size:30px" text-anchor="middle">🧒</text>
      <text x="160" y="168" class="tx-b" style="font-size:30px" text-anchor="middle">👧</text>
      <text x="103" y="192" class="tx-s" text-anchor="middle">co najmniej dwie osoby</text>
      <rect x="218" y="44" width="162" height="88" rx="14" class="bg ln"/>
      <text x="299" y="66" class="tx-s" text-anchor="middle">Kiedy byłem mały,</text>
      <text x="299" y="84" class="tx-s" text-anchor="middle">mieszkałem nad morzem.</text>
      <text x="299" y="102" class="tx-s" text-anchor="middle">Codziennie rano</text>
      <text x="299" y="120" class="tx-s" text-anchor="middle">biegałem na plażę…</text>
      <text x="299" y="168" class="tx-b" style="font-size:30px" text-anchor="middle">🧑</text>
      <text x="299" y="192" class="tx-s" text-anchor="middle">jedna osoba</text>
    </svg>`,
    text: `<p><b>Dialog</b> to rozmowa co najmniej dwóch osób – wypowiedzi przeplatają się: jedna pyta, druga odpowiada.</p>
      <p><b>Monolog</b> to dłuższa wypowiedź jednej osoby, np. gdy ktoś opowiada historię albo postać w sztuce mówi sama do siebie.</p>`,
    remember: 'Dialog – rozmowa (co najmniej dwie osoby). Monolog – mówi jedna osoba.',
    hook: '<b>Mono</b> znaczy „jeden” – jak <b>mono</b>cykl, rower z jednym kołem. Monolog – mówi jeden.',
    check: { q: 'Kuba opowiada klasie długą historię o wakacjach, a wszyscy słuchają. To…', options: ['monolog', 'dialog', 'wywiad'], answer: 0, explain: 'Mówi tylko Kuba – to monolog.' },
  },
  {
    title: 'Jak zapisać dialog?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Zeszyt z zapisem dialogu. Linijka 1: – Gdzie jest mój plecak? – zapytała Ola. Linijka 2: – Pod biurkiem – odpowiedział tata. Linijka 3: – Dziękuję! Strzałki: każda wypowiedź od nowej linijki i od myślnika, słowa narratora małą literą, przed nimi bez kropki.">
      <rect x="8" y="8" width="384" height="150" rx="10" class="bg ln"/>
      <g class="ln-thin"><line x1="20" y1="52" x2="380" y2="52"/><line x1="20" y1="94" x2="380" y2="94"/><line x1="20" y1="136" x2="380" y2="136"/></g>
      <text x="20" y="46" class="tx"><tspan class="tx-b t2">–</tspan> Gdzie jest mój plecak? <tspan class="tx-b t2">–</tspan> <tspan class="t1">zapytała Ola.</tspan></text>
      <text x="20" y="88" class="tx"><tspan class="tx-b t2">–</tspan> Pod biurkiem <tspan class="tx-b t2">–</tspan> <tspan class="t1">odpowiedział tata.</tspan></text>
      <text x="20" y="130" class="tx"><tspan class="tx-b t2">–</tspan> Dziękuję!</text>
      <rect x="8" y="168" width="124" height="46" rx="8" class="f2 s2"/>
      <rect x="138" y="168" width="124" height="46" rx="8" class="f1 s1"/>
      <rect x="268" y="168" width="124" height="46" rx="8" class="f4 s4"/>
      <text x="70" y="188" class="tx-s" text-anchor="middle">nowa linijka</text><text x="70" y="206" class="tx-s" text-anchor="middle">i myślnik</text>
      <text x="200" y="188" class="tx-s" text-anchor="middle">narrator: mała</text><text x="200" y="206" class="tx-s" text-anchor="middle">litera</text>
      <text x="330" y="188" class="tx-s" text-anchor="middle">przed narratorem</text><text x="330" y="206" class="tx-s" text-anchor="middle">bez kropki</text>
    </svg>`,
    text: `<p>W opowiadaniu wypowiedź każdej postaci zaczynasz <b>od nowej linijki</b> i od <b>myślnika</b>. Dzięki temu od razu widać, że ktoś mówi i kiedy zaczyna mówić ktoś inny.</p>
      <p>Słowa narratora (kto mówi, jak) oddzielasz myślnikiem i piszesz małą literą. Przed nimi nie stawiasz kropki – ale znak zapytania i wykrzyknik zostają: <i>– Uważaj! – krzyknął tata.</i></p>`,
    remember: 'Nowa linijka + myślnik · narrator małą literą · przed narratorem bez kropki (? i ! zostają).',
    hook: 'Myślnik w dialogu to jak podniesiona ręka: „Teraz ja mówię!”.',
    check: { q: 'Który zapis jest poprawny?', options: ['– Idę już – powiedziała Zosia.', '– Idę już. – Powiedziała Zosia.', '– Idę już, – powiedziała Zosia.'], answer: 0, explain: 'Przed dopiskiem narratora z czasownikiem „powiedziała” nie ma kropki ani przecinka, a dopisek zaczyna się małą literą.' },
  },
  {
    title: 'Wywiad – krok po kroku',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Pięć kroków wywiadu: 1 temat i rozmówca, 2 lista pytań, 3 umówienie się i zgoda, 4 rozmowa z notatkami lub nagraniem, 5 zapis i podziękowanie.">
      <defs><marker id="a-k4pl-wyw-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f3 s3">
        <rect x="8" y="10" width="120" height="86" rx="10"/><rect x="140" y="10" width="120" height="86" rx="10"/><rect x="272" y="10" width="120" height="86" rx="10"/>
        <rect x="74" y="120" width="120" height="86" rx="10"/><rect x="206" y="120" width="120" height="86" rx="10"/>
      </g>
      <g class="tx-b" style="font-size:24px" text-anchor="middle">
        <text x="68" y="42">🎯</text><text x="200" y="42">📝</text><text x="332" y="42">🤝</text><text x="134" y="152">🎙️</text><text x="266" y="152">📰</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="68" y="66">1. temat</text><text x="68" y="84">i rozmówca</text>
        <text x="200" y="66">2. lista</text><text x="200" y="84">pytań</text>
        <text x="332" y="66">3. umów się,</text><text x="332" y="84">poproś o zgodę</text>
        <text x="134" y="176">4. rozmowa</text><text x="134" y="194">i notatki</text>
        <text x="266" y="176">5. zapis</text><text x="266" y="194">i podziękowanie</text>
      </g>
      <g class="ln s2"><line x1="130" y1="53" x2="138" y2="53" marker-end="url(#a-k4pl-wyw-1)"/><line x1="262" y1="53" x2="270" y2="53" marker-end="url(#a-k4pl-wyw-1)"/><line x1="196" y1="163" x2="204" y2="163" marker-end="url(#a-k4pl-wyw-1)"/></g>
      <path d="M332,98 C332,112 150,104 140,118" class="ln s2" marker-end="url(#a-k4pl-wyw-1)"/>
    </svg>`,
    text: `<p><b>Wywiad</b> to rozmowa dziennikarza z rozmówcą, zapisana albo nagrana dla czytelników, widzów lub słuchaczy. Rozmówcą może być ktoś znany, ale też sąsiadka, trener czy babcia.</p>
      <p>Zapis wywiadu: tytuł, krótki wstęp o rozmówcy, potem pytania i odpowiedzi – każde od nowej linijki, pytania wyróżnione (np. pogrubione). Na koniec – podziękowanie.</p>`,
    remember: 'Temat → pytania → zgoda rozmówcy → rozmowa → zapis: tytuł, wstęp, pytania i odpowiedzi, podziękowanie.',
    hook: 'Dobry dziennikarz jest jak detektyw: przygotowuje się wcześniej i słucha uważnie.',
    check: { q: 'Co warto zrobić przed wywiadem?', options: ['przygotować listę pytań', 'wymyślić odpowiedzi rozmówcy', 'napisać morał'], answer: 0, explain: 'Pytania przygotowujemy wcześniej – odpowiedzi daje rozmówca.' },
  },
  {
    title: 'Pytania otwarte i zamknięte',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwie kolumny. Pytania zamknięte – odpowiedź tak albo nie: Czy lubi Pan piłkę? Pytania otwarte – odpowiedź to opowieść: Jak wyglądał Pana pierwszy mecz?">
      <rect x="8" y="10" width="186" height="190" rx="12" class="f2 s2"/>
      <rect x="206" y="10" width="186" height="190" rx="12" class="f3 s3"/>
      <text x="101" y="38" class="tx-b" text-anchor="middle">🔒 zamknięte</text>
      <text x="299" y="38" class="tx-b" text-anchor="middle">🔓 otwarte</text>
      <text x="101" y="74" class="tx-s" text-anchor="middle">Czy lubi Pan piłkę?</text>
      <text x="101" y="98" class="tx-b t2" text-anchor="middle">– Tak.</text>
      <text x="101" y="134" class="tx-s" text-anchor="middle">Czy był Pan zdenerwowany?</text>
      <text x="101" y="158" class="tx-b t2" text-anchor="middle">– Nie.</text>
      <text x="101" y="188" class="tx-s" text-anchor="middle">krótko: tak / nie</text>
      <text x="299" y="74" class="tx-s" text-anchor="middle">Jak wyglądał</text>
      <text x="299" y="92" class="tx-s" text-anchor="middle">Pana pierwszy mecz?</text>
      <text x="299" y="122" class="tx-s" text-anchor="middle">Co poradziłby Pan</text>
      <text x="299" y="140" class="tx-s" text-anchor="middle">młodym piłkarzom?</text>
      <text x="299" y="166" class="tx-b t3" text-anchor="middle">– Opowieść…</text>
      <text x="299" y="188" class="tx-s" text-anchor="middle">jak? co? dlaczego?</text>
    </svg>`,
    text: `<p>Na <b>pytanie zamknięte</b> wystarczy odpowiedzieć „tak” albo „nie”. Z takich odpowiedzi niewiele się dowiesz.</p>
      <p><b>Pytanie otwarte</b> zaczyna się często od „jak”, „co”, „dlaczego”, „kiedy” – i zachęca do opowiadania. W wywiadzie zadawaj głównie pytania otwarte i słuchaj uważnie – czasem odpowiedź podsunie ci kolejne pytanie.</p>`,
    remember: 'Pytania otwarte (jak? co? dlaczego?) dają ciekawe odpowiedzi; zamknięte – tylko „tak” lub „nie”.',
    hook: 'Pytanie otwarte <b>otwiera drzwi</b> do opowieści 🔓, zamknięte – zamyka je jednym słowem 🔒.',
    check: { q: 'Które pytanie jest otwarte?', options: ['Co było najtrudniejsze na pierwszym treningu?', 'Czy lubi Pan trenować?', 'Czy wygrał Pan mecz?'], answer: 0, explain: 'Na to pytanie nie odpowiesz „tak” ani „nie” – trzeba opowiedzieć.' },
  },
  {
    title: 'Nastrój – co czujesz, czytając?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwie karty. Radosny nastrój: słońce, ptaki, śmiech dzieci – czytaj żywo. Tajemniczy nastrój: zmrok, pusty dom, skrzypienie, wycie wiatru – czytaj wolno i ciszej.">
      <rect x="8" y="10" width="186" height="200" rx="12" class="f4 s4"/>
      <rect x="206" y="10" width="186" height="200" rx="12" class="f5 s5"/>
      <text x="101" y="50" class="tx-b" style="font-size:30px" text-anchor="middle">☀️🐦</text>
      <text x="299" y="50" class="tx-b" style="font-size:30px" text-anchor="middle">🌙🏚️</text>
      <text x="101" y="82" class="tx-b" text-anchor="middle">radosny</text>
      <text x="299" y="82" class="tx-b" text-anchor="middle">tajemniczy</text>
      <g class="tx-s" text-anchor="middle">
        <text x="101" y="110">słońce świeciło</text><text x="101" y="128">ptaki śpiewały</text><text x="101" y="146">radosny śmiech</text>
        <text x="299" y="110">zapadał zmrok</text><text x="299" y="128">skrzypiały schody</text><text x="299" y="146">wył wiatr</text>
      </g>
      <line x1="24" y1="162" x2="178" y2="162" class="ln-thin"/><line x1="222" y1="162" x2="376" y2="162" class="ln-thin"/>
      <text x="101" y="184" class="tx-s" text-anchor="middle">czytaj żywo,</text><text x="101" y="200" class="tx-s" text-anchor="middle">z uśmiechem</text>
      <text x="299" y="184" class="tx-s" text-anchor="middle">czytaj wolniej,</text><text x="299" y="200" class="tx-s" text-anchor="middle">ciszej, z pauzami</text>
    </svg>`,
    text: `<p><b>Nastrój</b> to atmosfera utworu – uczucia, które w tobie budzi. Może być wesoły, smutny, tajemniczy, groźny, spokojny, uroczysty, tęskny.</p>
      <p>Tworzą go słowa (np. epitety), opisy pory dnia i pogody, dźwięki, kolory i wydarzenia. Gdy czytasz na głos, pokaż nastrój głosem: dobierz tempo, głośność i pauzy.</p>`,
    remember: 'Nastrój = atmosfera utworu. Szukaj go w słowach, opisach, dźwiękach i kolorach.',
    hook: 'Zapytaj siebie: „Jaką muzykę puściłbym do tego tekstu?” Wesołą – nastrój radosny; cichą i niepokojącą – tajemniczy.',
    check: { q: 'Jaki nastrój budzi opis: „Cicho padał śnieg, w kominku trzaskał ogień, a kot mruczał na kolanach babci.”?', options: ['spokojny, ciepły', 'groźny', 'tajemniczy, straszny'], answer: 0, explain: 'Cichy śnieg, ciepły ogień i mruczący kot – to nastrój spokojny, przytulny.' },
  },
];

window.LESSONS['polski/teatr'] = [
  {
    title: 'Teatr – sztuka na żywo',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Przekrój teatru: scena z aktorami, po bokach kurtyna i kulisy, z przodu widownia z rzędami widzów.">
      <rect x="10" y="10" width="380" height="20" class="f2 s2"/>
      <rect x="10" y="30" width="48" height="110" class="f5 s5"/>
      <rect x="342" y="30" width="48" height="110" class="f5 s5"/>
      <path d="M58,30 Q80,80 66,140 L58,140 Z" class="f2 s2"/>
      <path d="M342,30 Q320,80 334,140 L342,140 Z" class="f2 s2"/>
      <rect x="58" y="120" width="284" height="20" class="f4 s4"/>
      <text x="200" y="100" class="tx-b" style="font-size:34px" text-anchor="middle">🤴 👸</text>
      <text x="200" y="135" class="tx-s" text-anchor="middle">scena</text>
      <text x="34" y="70" class="tx-s" text-anchor="middle">kulisy</text>
      <text x="366" y="70" class="tx-s" text-anchor="middle">kulisy</text>
      <text x="96" y="52" class="tx-s t2">kurtyna</text>
      <text x="200" y="180" class="tx-b" style="font-size:22px" text-anchor="middle">👤👤👤👤👤👤👤</text>
      <text x="200" y="206" class="tx-b" style="font-size:22px" text-anchor="middle">👤👤👤👤👤👤👤👤</text>
      <text x="200" y="226" class="tx-s" text-anchor="middle">widownia</text>
    </svg>`,
    text: `<p>W <b>teatrze</b> aktorzy grają <b>na żywo</b> – w tym samym miejscu i czasie co widzowie. Dlatego każde przedstawienie jest trochę inne. Tym teatr różni się od filmu, który nagrywa się wcześniej.</p>
      <p>Aktorzy grają na <b>scenie</b>, widzowie siedzą na <b>widowni</b>. Scenę od widowni oddziela <b>kurtyna</b>, a za sceną i po jej bokach są <b>kulisy</b> – tam aktorzy czekają na swoje wejście.</p>`,
    remember: 'scena – aktorzy · widownia – widzowie · kurtyna – zasłona · kulisy – za sceną i po bokach.',
    hook: '„Za kulisami” mówimy też o czymś, czego zwykle nie widać: „zobacz, jak powstaje gra – za kulisami”.',
    check: { q: 'Gdzie siedzą widzowie?', options: ['na widowni', 'w kulisach', 'na scenie'], answer: 0, explain: 'Widownia to część teatru dla publiczności.' },
  },
  {
    title: 'Kto tworzy przedstawienie?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sześć kafelków: aktor – gra rolę, reżyser – kieruje przedstawieniem, scenograf – projektuje dekoracje, charakteryzator – makijaż i peruki, sufler – podpowiada tekst, widzowie – oglądają.">
      <g class="f1 s1">
        <rect x="8" y="10" width="124" height="92" rx="10"/><rect x="138" y="10" width="124" height="92" rx="10"/><rect x="268" y="10" width="124" height="92" rx="10"/>
        <rect x="8" y="110" width="124" height="92" rx="10"/><rect x="138" y="110" width="124" height="92" rx="10"/><rect x="268" y="110" width="124" height="92" rx="10"/>
      </g>
      <g class="tx-b" style="font-size:24px" text-anchor="middle">
        <text x="70" y="40">🎭</text><text x="200" y="40">🎬</text><text x="330" y="40">🎨</text>
        <text x="70" y="140">💄</text><text x="200" y="140">🤫</text><text x="330" y="140">👏</text>
      </g>
      <g class="tx-b" style="font-size:15px" text-anchor="middle">
        <text x="70" y="66">aktor</text><text x="200" y="66">reżyser</text><text x="330" y="66">scenograf</text>
        <text x="70" y="166">charakteryzator</text><text x="200" y="166">sufler</text><text x="330" y="166">widzowie</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="88">gra rolę</text><text x="200" y="88">kieruje całością</text><text x="330" y="88">dekoracje</text>
        <text x="70" y="188">makijaż, peruki</text><text x="200" y="188">podpowiada tekst</text><text x="330" y="188">oglądają</text>
      </g>
    </svg>`,
    text: `<p>Przedstawienie to praca wielu osób. <b>Reżyser</b> decyduje, jak wystawić sztukę, i prowadzi próby. <b>Aktorzy</b> grają role. <b>Scenograf</b> projektuje <b>scenografię</b> – wygląd sceny i dekoracje.</p>
      <p><b>Charakteryzator</b> zmienia wygląd aktorów (makijaż, peruki, brody), a <b>sufler</b> podpowiada tekst, gdy aktor go zapomni. Aktorów grających w danym spektaklu nazywamy <b>obsadą</b>.</p>`,
    remember: 'reżyser – kieruje · scenograf – dekoracje · charakteryzator – wygląd aktorów · sufler – podpowiada · obsada – aktorzy spektaklu.',
    hook: 'Reżyser jest jak trener drużyny: sam nie gra, ale mówi wszystkim, co i jak robić.',
    check: { q: 'Kto projektuje dekoracje?', options: ['scenograf', 'sufler', 'reżyser'], answer: 0, explain: 'Wygląd sceny projektuje scenograf.' },
  },
  {
    title: 'Kostium, rekwizyt, afisz, premiera',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sześć kafelków: kostium – strój aktora, rekwizyt – przedmiot na scenie, afisz – plakat, program – broszura o spektaklu, próba – ćwiczenie, premiera – pierwsze przedstawienie.">
      <g class="f4 s4">
        <rect x="8" y="10" width="124" height="92" rx="10"/><rect x="138" y="10" width="124" height="92" rx="10"/><rect x="268" y="10" width="124" height="92" rx="10"/>
        <rect x="8" y="110" width="124" height="92" rx="10"/><rect x="138" y="110" width="124" height="92" rx="10"/><rect x="268" y="110" width="124" height="92" rx="10"/>
      </g>
      <g class="tx-b" style="font-size:24px" text-anchor="middle">
        <text x="70" y="40">👑</text><text x="200" y="40">🧺</text><text x="330" y="40">📜</text>
        <text x="70" y="140">📖</text><text x="200" y="140">🔁</text><text x="330" y="140">⭐</text>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="66">kostium</text><text x="200" y="66">rekwizyt</text><text x="330" y="66">afisz</text>
        <text x="70" y="166">program</text><text x="200" y="166">próba</text><text x="330" y="166">premiera</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="88">strój aktora</text><text x="200" y="88">rzecz na scenie</text><text x="330" y="88">plakat o spektaklu</text>
        <text x="70" y="188">broszura</text><text x="200" y="188">ćwiczenie</text><text x="330" y="188">pierwszy spektakl</text>
      </g>
    </svg>`,
    text: `<p>Aktor nosi <b>kostium</b> i używa <b>rekwizytów</b> – przedmiotów potrzebnych na scenie, np. koszyka Czerwonego Kapturka albo miecza rycerza.</p>
      <p>O spektaklu informuje <b>afisz</b> (plakat), a w teatrze można kupić <b>program teatralny</b> z obsadą i opisem. Zanim widzowie zobaczą przedstawienie, aktorzy ćwiczą na <b>próbach</b>. Pierwsze przedstawienie dla publiczności to <b>premiera</b>.</p>`,
    remember: 'kostium – strój · rekwizyt – przedmiot · afisz – plakat · próba – ćwiczenie · premiera – pierwsze przedstawienie.',
    hook: 'Premiera – od francuskiego „première”, czyli „pierwsza”. To pierwszy raz przed widzami.',
    check: { q: 'Korona na głowie aktora grającego króla to…', options: ['element kostiumu', 'afisz', 'kurtyna'], answer: 0, explain: 'Korona jest częścią stroju króla – to kostium (gdyby aktor trzymał ją w ręku i używał w scenie, byłaby rekwizytem).' },
  },
  {
    title: 'Tekst główny i tekst poboczny',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Kartka ze sztuką. KUBA, w nawiasie: cicho, rozglądając się – to tekst poboczny. Czy ktoś tu jest? – tekst główny. OLA, w nawiasie: wychodzi zza szafy – tekst poboczny. Jestem! – tekst główny.">
      <defs><marker id="a-k4pl-tea-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t5"/></marker>
      <marker id="a-k4pl-tea-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
      <rect x="8" y="10" width="384" height="130" rx="10" class="bg ln"/>
      <text x="22" y="42" class="tx t5" font-style="italic">KUBA (cicho, rozglądając się):</text>
      <text x="40" y="68" class="tx-b t3">Czy ktoś tu jest?</text>
      <text x="22" y="100" class="tx t5" font-style="italic">OLA (wychodzi zza szafy):</text>
      <text x="40" y="126" class="tx-b t3">Jestem!</text>
      <rect x="8" y="152" width="186" height="60" rx="10" class="f5 s5"/>
      <rect x="206" y="152" width="186" height="60" rx="10" class="f3 s3"/>
      <text x="101" y="176" class="tx-b" text-anchor="middle">tekst poboczny</text>
      <text x="101" y="198" class="tx-s" text-anchor="middle">wskazówki – nie mówi się ich</text>
      <text x="299" y="176" class="tx-b" text-anchor="middle">tekst główny</text>
      <text x="299" y="198" class="tx-s" text-anchor="middle">słowa postaci na scenie</text>
      <path d="M300,102 C330,110 330,140 316,150" class="ln s3" marker-end="url(#a-k4pl-tea-2)"/>
      <path d="M150,104 C120,120 110,136 104,150" class="ln s5" marker-end="url(#a-k4pl-tea-1)"/>
    </svg>`,
    text: `<p>Sztukę teatralną pisze się inaczej niż opowiadanie – nie ma w niej narratora. Są dwa rodzaje tekstu:</p>
      <ul><li><b>tekst główny</b> – to, co mówią postacie (ich kwestie);</li>
      <li><b>tekst poboczny</b> (didaskalia) – wskazówki autora: kto mówi, gdzie dzieje się akcja, co robią postacie i jak mówią. Zwykle jest pisany kursywą albo w nawiasie, a aktorzy go nie wypowiadają.</li></ul>`,
    remember: 'Tekst główny – aktor mówi. Tekst poboczny – aktor robi (to wskazówki).',
    hook: 'Tekst poboczny to „instrukcja obsługi” sceny – jak przepis, który mówi, co zrobić, ale nikt go nie czyta na głos przy stole.',
    check: { q: 'Które słowa aktorka wypowie na scenie?', options: ['Jestem!', 'wychodzi zza szafy', 'OLA'], answer: 0, explain: 'Na scenie mówi się tylko tekst główny. Imię i słowa w nawiasie to tekst poboczny.' },
  },
  {
    title: 'Teatr lalek i dobre maniery',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Trzy lalki: pacynka na dłoni, kukiełka na kiju poruszana od dołu, marionetka na nitkach poruszana od góry. Pod spodem zasady: wyłącz telefon, bądź cicho, nie jedz, bij brawo na końcu.">
      <rect x="8" y="10" width="124" height="148" rx="10" class="f1 s1"/>
      <rect x="138" y="10" width="124" height="148" rx="10" class="f3 s3"/>
      <rect x="268" y="10" width="124" height="148" rx="10" class="f2 s2"/>
      <circle cx="70" cy="52" r="16" class="f4 s4"/>
      <path d="M50,70 L90,70 L96,112 L44,112 Z" class="f5 s5"/>
      <text x="70" y="130" class="tx-b" style="font-size:18px" text-anchor="middle">✋</text>
      <circle cx="200" cy="44" r="16" class="f4 s4"/>
      <path d="M182,62 L218,62 L214,92 L186,92 Z" class="f5 s5"/>
      <line x1="200" y1="92" x2="200" y2="114" class="ln sw"/>
      <text x="200" y="132" class="tx-s" text-anchor="middle">↑ od dołu</text>
      <line x1="302" y1="18" x2="358" y2="18" class="ln sw"/>
      <g class="ln-thin"><line x1="310" y1="18" x2="318" y2="80"/><line x1="350" y1="18" x2="342" y2="80"/><line x1="330" y1="18" x2="330" y2="42"/></g>
      <circle cx="330" cy="56" r="14" class="f4 s4"/>
      <path d="M316,72 L344,72 L346,106 L314,106 Z" class="f5 s5"/>
      <text x="330" y="126" class="tx-s" text-anchor="middle">↓ od góry</text>
      <text x="70" y="150" class="tx-b" text-anchor="middle">pacynka</text>
      <text x="200" y="150" class="tx-b" text-anchor="middle">kukiełka</text>
      <text x="330" y="150" class="tx-b" text-anchor="middle">marionetka</text>
      <rect x="8" y="168" width="384" height="56" rx="10" class="f4 s4"/>
      <text x="200" y="194" class="tx-s" text-anchor="middle">📵 telefon · 🤫 cisza · 🚫🍿 bez jedzenia · 👏 na koniec</text>
      <text x="200" y="214" class="tx-s" text-anchor="middle">kurtkę zostaw w szatni, przyjdź punktualnie</text>
    </svg>`,
    text: `<p>W <b>teatrze lalek</b> grają lalki, a poruszają nimi aktorzy-lalkarze. <b>Pacynkę</b> zakłada się na dłoń jak rękawiczkę, <b>kukiełka</b> jest na kiju i porusza się nią od dołu, a <b>marionetka</b> wisi na nitkach – lalkarz porusza nią z góry.</p>
      <p>W każdym teatrze obowiązują dobre maniery: przyjdź punktualnie, kurtkę zostaw w szatni, wyłącz telefon, nie rozmawiaj i nie jedz. Na koniec nagródź aktorów brawami.</p>`,
    remember: 'pacynka – na dłoni · kukiełka – na kiju (od dołu) · marionetka – na nitkach (od góry).',
    hook: '<b>Ma</b>rionetka <b>ma</b> nitki – oba słowa zaczynają się od „ma”.',
    check: { q: 'Którą lalkę porusza się za pomocą nitek od góry?', options: ['marionetkę', 'pacynkę', 'kukiełkę'], answer: 0, explain: 'Marionetka wisi na nitkach przymocowanych do krzyżaka, którym porusza lalkarz.' },
  },
];
