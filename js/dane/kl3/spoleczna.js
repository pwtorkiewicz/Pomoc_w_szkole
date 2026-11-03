/* Edukacja społeczna – klasa 3 (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – III. Edukacja społeczna). Osiągnięcia na koniec klasy 3, bez podziału na klasy I–III.
 * Fakty spoza podstawy sprawdzone 2.11.2026 – źródła w polu basis i na stronie „Źródła”. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), III. Edukacja społeczna';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.';
  const ZPE = 'Zintegrowana Platforma Edukacyjna (zpe.gov.pl)';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  // Trzy flagi do wyboru: A – biel na górze, B – czerwień na górze, C – pasy pionowe
  const SVG_FLAGI = `<svg viewBox="0 0 400 150" role="img" aria-label="Trzy flagi. A: biały pas na górze, czerwony na dole. B: czerwony pas na górze, biały na dole. C: pas biały po lewej i czerwony po prawej">
      <rect x="14" y="34" width="112" height="36" class="pl-w ln"/>
      <rect x="14" y="70" width="112" height="36" class="pl-r ln"/>
      <rect x="144" y="34" width="112" height="36" class="pl-r ln"/>
      <rect x="144" y="70" width="112" height="36" class="pl-w ln"/>
      <rect x="274" y="34" width="56" height="72" class="pl-w ln"/>
      <rect x="330" y="34" width="56" height="72" class="pl-r ln"/>
      <text x="70" y="24" class="tx-b" text-anchor="middle">A</text>
      <text x="200" y="24" class="tx-b" text-anchor="middle">B</text>
      <text x="330" y="24" class="tx-b" text-anchor="middle">C</text>
      <text x="70" y="132" class="tx-s" text-anchor="middle">flaga A</text>
      <text x="200" y="132" class="tx-s" text-anchor="middle">flaga B</text>
      <text x="330" y="132" class="tx-s" text-anchor="middle">flaga C</text>
    </svg>`;

  window.SUBJECTS.push({
    id: 'spoleczna',
    name: 'Edukacja społeczna',
    icon: '🇵🇱',
    color: '#c8423b',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'grupy-zasady',
        name: 'Rodzina, klasa i zasady',
        basis: `${PP}, 1. Rozumienie środowiska społecznego, pkt 1 (grupy: rodzina, klasa, drużyna, społeczność lokalna, naród; normy i reguły), pkt 2 (prawa i obowiązki), pkt 3 (konsekwencje postępowania), pkt 4 (wartości: sprawiedliwość, obowiązkowość, odpowiedzialność, przyjaźń, życzliwość, pomoc, zadośćuczynienie, przepraszanie, uczciwość, wdzięczność), pkt 5 (dane osobiste tylko w sytuacjach bezpiecznych, powściągliwość w sytuacjach nowych i wirtualnych), pkt 8 (porozumienie, umowa, wybory samorządu uczniowskiego). Telefon zaufania 116 111 – serwis „Numer alarmowy 112” MSWiA (gov.pl, sprawdzone 2.11.2026: bezpłatny, czynny całą dobę).${KONIEC}`,
        theory: `
          <h3>Do jakich grup należysz?</h3>
          <p>Należysz do wielu <b>grup</b>: <b>rodziny</b>, <b>klasy</b>, może <b>drużyny</b> sportowej, do mieszkańców swojej <b>miejscowości</b> i do <b>narodu</b> – jesteś Polakiem albo Polką. Każda grupa ma swoje <b>zasady</b>.</p>
          <h3>Prawa i obowiązki</h3>
          <table><tr><th>prawa – co ci się należy</th><th>obowiązki – co musisz robić</th></tr>
            <tr><td>nauka</td><td>chodzić do szkoły, odrabiać lekcje</td></tr>
            <tr><td>zabawa i odpoczynek</td><td>pomagać w domu</td></tr>
            <tr><td>opieka i bezpieczeństwo</td><td>dbać o swoje i cudze rzeczy</td></tr>
            <tr><td>szacunek, własne zdanie</td><td>szanować innych</td></tr></table>
          <p>Prawa i obowiązki mają <b>wszyscy</b> ludzie – dzieci i dorośli.</p>
          <h3>Umowa w klasie</h3>
          <p><b>Porozumienie</b> – ludzie rozmawiają i dogadują się. <b>Umowa</b> – to, co razem ustalili, np. „nie przerywamy sobie”. Kto złamie zasadę, ponosi <b>konsekwencje</b>: przeprasza, naprawia szkodę.</p>
          <p>W <b>wyborach do samorządu</b> klasa wybiera np. przewodniczącego. Każdy uczeń ma jeden głos.</p>
          <h3>Ważne wartości</h3>
          <ul>
            <li><b>uczciwość</b> – mówisz prawdę, nie oszukujesz,</li>
            <li><b>odpowiedzialność</b> – robisz, co obiecałeś, i przyznajesz się do błędu,</li>
            <li><b>życzliwość</b> i <b>pomoc</b> – jesteś miły i pomagasz innym,</li>
            <li><b>wdzięczność</b> – mówisz „dziękuję”,</li>
            <li><b>przepraszanie</b> i <b>zadośćuczynienie</b> – przepraszasz i naprawiasz krzywdę.</li>
          </ul>
          <h3>Twoje dane</h3>
          <p>Imię, nazwisko, adres i numer telefonu to twoje <b>dane osobowe</b>. Podajesz je tylko zaufanym osobom i w bezpiecznej sytuacji, np. w szkole albo policjantowi. W internecie i nieznajomym – <b>nie</b>.</p>
          <p class="tip">Masz kłopot i nie wiesz, z kim pogadać? Zadzwoń pod <b>116 111</b> – Telefon Zaufania dla Dzieci i Młodzieży. Jest bezpłatny i czynny całą dobę.</p>`,
        infographicNote: 'Każda grupa ma swoje zasady: prawa, obowiązki i umowy.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { icon: '👨‍👩‍👧', title: 'Twoje grupy', text: 'rodzina, klasa, drużyna, miejscowość, naród', kolor: 5 },
          items: [
            { icon: '🎈', title: 'Prawa', text: 'nauka, zabawa, opieka', kolor: 3 },
            { icon: '🎒', title: 'Obowiązki', text: 'szkoła, lekcje, pomoc w domu', kolor: 1 },
            { icon: '🤝', title: 'Umowa', text: 'to, co razem ustalamy', kolor: 4 },
            { icon: '💛', title: 'Wartości', text: 'mówisz prawdę, pomagasz, dziękujesz', kolor: 4 },
            { icon: '🔒', title: 'Twoje dane', text: 'tylko dla zaufanych osób', kolor: 2 },
            { icon: '📞', title: '116 111', text: 'Telefon Zaufania – całą dobę', kolor: 2 },
          ],
        },
        flashcards: [
          ['Grupy, do których należysz', 'rodzina, klasa, drużyna, mieszkańcy miejscowości, naród'],
          ['Prawo', 'to, co ci się należy, np. nauka, zabawa, opieka'],
          ['Obowiązek', 'to, co musisz robić, np. chodzić do szkoły'],
          ['Porozumienie', 'ludzie rozmawiają i dogadują się'],
          ['Umowa', 'to, co ludzie razem ustalili'],
          ['Konsekwencje', 'skutki tego, co zrobiłeś, np. trzeba przeprosić i naprawić szkodę'],
          ['Uczciwość', 'mówisz prawdę i nie oszukujesz'],
          ['Zadośćuczynienie', 'naprawienie krzywdy, którą się komuś zrobiło'],
          ['Dane osobowe', 'imię, nazwisko, adres, telefon – podajesz tylko zaufanym'],
          ['Samorząd klasowy', 'uczniowie wybrani przez klasę, np. przewodniczący'],
          ['116 111', 'Telefon Zaufania dla Dzieci i Młodzieży – bezpłatny, całą dobę'],
        ],
        questions: [
          { id: 'plnszm', q: 'Która grupa to twoja rodzina?', options: ['rodzice, rodzeństwo, dziadkowie', 'uczniowie z twojej klasy', 'drużyna piłkarska'], answer: 0, explain: 'Rodzina to rodzice, rodzeństwo, dziadkowie i inni krewni.' },
          { id: '6xpkwt', q: 'Co jest twoim prawem?', options: ['nauka i zabawa', 'odrabianie lekcji', 'sprzątanie pokoju'], answer: 0, explain: 'Prawo to to, co ci się należy, np. nauka, zabawa i opieka.' },
          { id: 'jppve6', q: 'Co jest twoim obowiązkiem?', options: ['chodzić do szkoły', 'oglądać bajki do nocy', 'jeść słodycze'], answer: 0, explain: 'Obowiązek to to, co musisz robić. Uczeń ma obowiązek chodzić do szkoły.' },
          { id: '0a21kx', q: 'Prawda czy fałsz?\nPrawa mają tylko dorośli.', options: TF, ...PF, answer: 1, explain: 'Wszyscy ludzie mają prawa i obowiązki – dzieci też.' },
          { id: 'cstrqp', q: 'Klasa ustaliła: „Nie przerywamy sobie”. Jak nazwiesz to ustalenie?', options: ['umowa', 'kłótnia', 'kara'], answer: 0, explain: 'To, co ludzie razem ustalą, to umowa.' },
          { id: 'ixchjb', q: 'Kuba stłukł niechcący doniczkę w klasie. Co powinien zrobić?', options: ['przeprosić i pomóc posprzątać', 'szybko uciec i nic nie mówić', 'powiedzieć, że to zrobiła Ola'], answer: 0, explain: 'Gdy coś zepsujesz, przyznaj się, przeproś i napraw szkodę. To odpowiedzialność.' },
          { id: 'xjq2a9', q: 'Ola znalazła na korytarzu cudzy piórnik. Co zrobi uczciwa osoba?', options: ['odda go właścicielowi', 'zatrzyma go dla siebie', 'wyrzuci go do kosza'], answer: 0, explain: 'Uczciwość: nie bierzemy cudzych rzeczy. Gdy nie wiesz, czyj jest piórnik, oddaj go nauczycielowi.' },
          { id: 'tx1j09', q: 'Babcia upiekła ci ciasto. Jakie słowo pokazuje wdzięczność?', options: ['dziękuję', 'przepraszam', 'proszę'], answer: 0, explain: 'Wdzięczność okazujemy słowem „dziękuję”.' },
          { id: 'h6m9bp', q: 'Jak nazywa się naprawienie krzywdy, którą się komuś zrobiło?', options: ['zadośćuczynienie', 'nieposłuszeństwo', 'zazdrość'], answer: 0, explain: 'Zadośćuczynienie to naprawienie krzywdy, np. oddanie zepsutej rzeczy naprawionej.' },
          { id: 'qjj5aw', q: 'Jak klasa wybiera przewodniczącego?', options: ['w wyborach – każdy ma jeden głos', 'wybiera go sam najstarszy uczeń', 'wygrywa ten, kto najgłośniej krzyczy'], answer: 0, explain: 'W wyborach do samorządu każdy uczeń ma jeden głos.' },
          { id: 'mj7fxa', q: 'Komu możesz podać swój adres?', options: ['policjantowi, gdy się zgubisz', 'nieznajomemu w grze w internecie', 'obcej osobie na ulicy'], answer: 0, explain: 'Dane osobowe podajesz tylko w bezpiecznej sytuacji, np. policjantowi albo nauczycielowi.' },
          { id: 'yiz3vx', q: 'Do jakiej grupy należą wszyscy Polacy?', options: ['do narodu polskiego', 'do jednej klasy', 'do jednej drużyny'], answer: 0, explain: 'Wszyscy Polacy tworzą naród polski.' },
          { id: 'j1wm9s', q: 'Pod jaki numer zadzwoni dziecko, które ma kłopot i chce porozmawiać?', options: ['116 111', '997', '123 456'], answer: 0, explain: '116 111 to Telefon Zaufania dla Dzieci i Młodzieży – bezpłatny i czynny całą dobę.' },
          { id: 'gnq7lf', q: 'Prawda czy fałsz?\nKto złamie zasadę w grupie, ponosi konsekwencje.', options: TF, ...PF, answer: 0, explain: 'Np. musi przeprosić albo naprawić szkodę.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'miejscowosc-panstwo',
        name: 'Moja miejscowość, Polska i Europa',
        basis: `${PP}, 1. Rozumienie środowiska społecznego, pkt 1 (społeczność lokalna, naród), pkt 5 (adres, adres szkoły, zawód i miejsce pracy rodziców), pkt 6 (grupy, do których uczeń nie należy: kluby sportowe, zespoły artystyczne, inne narodowości), pkt 8 (stowarzyszenia pomocy chorym, organizacje ekologiczne, miasta i państwa, Unia Europejska); 2. Orientacja w czasie historycznym, pkt 4 (patron szkoły i miejscowości, pojęcie „patron”, obecny prezydent Polski). Prezydent: Karol Nawrocki objął urząd 6.08.2025 (senat.gov.pl, sprawdzone 2.11.2026 – przy zmianie prezydenta trzeba poprawić dział). Unia Europejska: Polska od 1.05.2004, flaga i hymn UE – ${ZPE}, „Zjednoczeni w różnorodności – symbole UE” (sprawdzone 2.11.2026).${KONIEC}`,
        theory: `
          <h3>Moja miejscowość</h3>
          <p>Mieszkasz we <b>wsi</b> albo w <b>mieście</b>. Naucz się swojego <b>adresu</b> i adresu szkoły. Wiedz, gdzie pracują twoi rodzice.</p>
          <h3>Patron</h3>
          <p><b>Patron</b> to ważna osoba, której imię nosi szkoła, ulica albo plac. Patron jest dla nas wzorem. Np. „Szkoła Podstawowa <b>im.</b> …” – „im.” znaczy „imienia”.</p>
          <h3>Grupy, do których nie należysz</h3>
          <p>Kluby sportowe, zespoły muzyczne, teatralne, a także <b>inne narodowości</b>, np. Czesi, Niemcy, Litwini. Możesz się nimi ciekawić i je szanować.</p>
          <h3>Ludzie łączą się, żeby pomagać</h3>
          <p><b>Stowarzyszenia</b> i <b>organizacje</b> to grupy ludzi, którzy razem coś robią, np. pomagają chorym dzieciom, zwierzętom albo chronią przyrodę (organizacje <b>ekologiczne</b>).</p>
          <h3>Polska – nasze państwo</h3>
          <p>Stolica Polski to <b>Warszawa</b>. Obecny prezydent Polski to <b>Karol Nawrocki</b> (od 2025 roku).</p>
          <h3>Unia Europejska</h3>
          <p><b>Unia Europejska</b> (UE) to wspólnota wielu państw Europy. Polska należy do niej od <b>2004 roku</b>.</p>
          <ul>
            <li>Flaga UE: <b>12 złotych gwiazd</b> ułożonych w koło na <b>niebieskim</b> tle.</li>
            <li>Hymn UE: <b>„Oda do radości”</b> – muzyka Ludwiga van Beethovena.</li>
          </ul>`,
        infographicNote: 'Od twojej miejscowości aż do Unii Europejskiej.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '🏡', title: 'Miejscowość', text: 'wieś albo miasto – znasz swój adres', kolor: 3 },
            { icon: '🏫', title: 'Patron', text: 'jego imię nosi szkoła, ulica, plac', kolor: 3 },
            { icon: '🤝', title: 'Stowarzyszenia', text: 'ludzie razem pomagają', kolor: 4 },
            { icon: '🌍', title: 'Inne narodowości', text: 'Czesi, Niemcy, Litwini', kolor: 4 },
            { icon: '🏛️', title: 'Polska', text: 'stolica: Warszawa,\nprezydent:\nKarol Nawrocki', kolor: 2 },
            { icon: '⭐', title: 'Unia Europejska', text: 'Polska jest w niej od 2004 roku', kolor: 1 },
          ],
          bottom: { title: '⭐ Flaga i hymn Unii', text: '12 złotych gwiazd w kole na niebieskim tle; „Oda do radości”', kolor: 1 },
        },
        flashcards: [
          ['Patron', 'ważna osoba, której imię nosi szkoła, ulica albo plac'],
          ['Co znaczy „im.” w nazwie szkoły?', 'imienia, np. Szkoła Podstawowa im. patrona'],
          ['Stowarzyszenie', 'grupa ludzi, którzy razem coś robią, np. pomagają chorym'],
          ['Organizacja ekologiczna', 'ludzie, którzy razem chronią przyrodę'],
          ['Inne narodowości', 'np. Czesi, Niemcy, Litwini'],
          ['Stolica Polski', 'Warszawa'],
          ['Obecny prezydent Polski', 'Karol Nawrocki (od 2025 r.)'],
          ['Unia Europejska', 'wspólnota wielu państw Europy'],
          ['Od kiedy Polska jest w UE?', 'od 2004 roku'],
          ['Flaga Unii Europejskiej', '12 złotych gwiazd w kole na niebieskim tle'],
          ['Hymn Unii Europejskiej', '„Oda do radości” – muzyka Beethovena'],
        ],
        questions: [
          { id: 'xya0p3', q: 'Szkoła nazywa się „Szkoła Podstawowa im. Marii Konopnickiej”. Kim jest Maria Konopnicka dla tej szkoły?', options: ['patronem', 'dyrektorem', 'uczennicą'], answer: 0, explain: 'Szkoła nosi imię patrona. „Im.” znaczy „imienia”.' },
          { id: '29e0qd', q: 'Kim jest patron?', options: ['osobą, której imię nosi szkoła', 'najstarszym uczniem w szkole', 'kucharzem ze szkolnej stołówki'], answer: 0, explain: 'Patron to osoba, której imię nosi szkoła, ulica albo plac. Jest dla nas wzorem.' },
          { id: 'ngqlqc', q: 'Kto jest obecnie prezydentem Polski?', options: ['Karol Nawrocki', 'Mikołaj Kopernik', 'Bolesław Chrobry'], answer: 0, explain: 'Od 2025 roku prezydentem Polski jest Karol Nawrocki.' },
          { id: 'n4trfx', q: 'Jak nazywa się stolica Polski?', options: ['Warszawa', 'Kraków', 'Gniezno'], answer: 0, explain: 'Dziś stolicą Polski jest Warszawa. Gniezno było pierwszą stolicą dawno temu.' },
          { id: 'ott28k', q: 'Grupa ludzi zbiera pieniądze na leczenie chorych dzieci. Jak to nazwiesz?', options: ['stowarzyszenie', 'drużyna piłkarska', 'rodzina'], answer: 0, explain: 'Stowarzyszenie to grupa ludzi, którzy razem działają, np. pomagają chorym.' },
          { id: 'px92wr', q: 'Czym zajmuje się organizacja ekologiczna?', options: ['ochroną przyrody', 'budową dróg', 'sprzedażą zabawek'], answer: 0, explain: 'Ekologia – przyroda. Organizacje ekologiczne chronią przyrodę.' },
          { id: '0yy98f', q: 'Co to jest Unia Europejska?', options: ['wspólnota wielu państw Europy', 'jedno duże miasto w Europie', 'nazwa morza na północy Europy'], answer: 0, explain: 'Do Unii Europejskiej należy wiele państw Europy, w tym Polska.' },
          { id: 'obpwj9', q: 'Od którego roku Polska należy do Unii Europejskiej?', options: ['od 2004', 'od 1918', 'od 966'], answer: 0, explain: 'Polska weszła do Unii Europejskiej w 2004 roku.' },
          { id: 'ye2ph3', q: 'Jak wygląda flaga Unii Europejskiej?', options: ['złote gwiazdy w kole na niebieskim tle', 'biały orzeł w koronie na czerwonym tle', 'białe gwiazdy w kole na zielonym tle'], answer: 0, explain: 'Na fladze UE jest 12 złotych gwiazd ułożonych w koło na niebieskim tle.' },
          { id: '37mbyy', q: 'Ile gwiazd jest na fladze Unii Europejskiej?', options: ['12', '7', '20'], answer: 0, explain: 'Na fladze UE jest 12 złotych gwiazd.' },
          { id: 's13wj5', q: 'Jak nazywa się hymn Unii Europejskiej?', options: ['„Oda do radości”', '„Mazurek Dąbrowskiego”', '„Sto lat”'], answer: 0, explain: 'Hymn UE to „Oda do radości” z muzyką Beethovena. „Mazurek Dąbrowskiego” to hymn Polski.' },
          { id: 'b79ul4', q: 'Które z nich to inna narodowość?', options: ['Czesi', 'Polacy', 'uczniowie'], answer: 0, explain: 'Czesi mieszkają w Czechach, naszym sąsiednim państwie. To inna narodowość.' },
          { id: 'ujidbf', q: 'Prawda czy fałsz?\nWarto znać swój adres i adres swojej szkoły.', options: TF, ...PF, answer: 0, explain: 'Adres przyda się np. wtedy, gdy się zgubisz i poprosisz o pomoc policjanta.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'symbole-swieta',
        name: 'Symbole Polski i święta narodowe',
        basis: `${PP}, 2. Orientacja w czasie historycznym, pkt 2 (godło, barwy, hymn narodowy, stroje ludowe), pkt 3 (święta narodowe, kokarda narodowa, biało-czerwony proporczyk, zachowanie podczas hymnu i wciągania flagi). Godło, barwy, hymn, Dzień Flagi i zachowanie podczas hymnu: ustawa o godle, barwach i hymnie RP, tekst jednolity Dz.U. 2025 poz. 299, art. 1, 2, 4, 6a, 12, 14 (eli.gov.pl, sprawdzone 2.11.2026). Autor słów hymnu i pierwszy wers, Konstytucja 3 maja 1791, odzyskanie niepodległości 1918 po 123 latach zaborów: ${ZPE}, „Państwo polskie” i „Święta narodowe i państwowe”. Stroje ludowe: ${ZPE}, „Regiony Polski” (strój krakowski, łowicki, kaszubski, kurpiowski).${KONIEC}`,
        theory: `
          <h3>Symbole Polski</h3>
          <ul>
            <li><b>Godło</b> – <b>biały orzeł</b> ze <b>złotą koroną</b> na <b>czerwonym</b> tle (tarczy).</li>
            <li><b>Barwy</b> – <b>biała</b> i <b>czerwona</b>. Na fladze biały pas jest <b>na górze</b>, czerwony – <b>na dole</b>.</li>
            <li><b>Hymn</b> – „<b>Mazurek Dąbrowskiego</b>”. Słowa napisał <b>Józef Wybicki</b>. Hymn zaczyna się od słów: „Jeszcze Polska nie zginęła, kiedy my żyjemy”.</li>
          </ul>
          <h3>Szacunek dla symboli</h3>
          <p>Gdy grają hymn albo wciągają flagę na maszt: <b>stoisz prosto, w ciszy i spokoju</b>. Chłopcy i mężczyźni <b>zdejmują czapki</b>. Nie rozmawiasz i nie jesz.</p>
          <p>W święta przypinamy <b>kokardę narodową</b> i machamy <b>biało-czerwonym proporczykiem</b>.</p>
          <h3>Święta narodowe</h3>
          <table><tr><th>data</th><th>święto</th></tr>
            <tr><td>2 maja</td><td><b>Dzień Flagi</b></td></tr>
            <tr><td>3 maja</td><td><b>Święto Konstytucji 3 Maja</b> – w 1791 roku uchwalono pierwszą polską konstytucję, czyli najważniejsze prawo</td></tr>
            <tr><td>11 listopada</td><td><b>Narodowe Święto Niepodległości</b> – w 1918 roku Polska znów stała się wolna, po 123 latach niewoli (zaborów)</td></tr></table>
          <h3>Stroje ludowe</h3>
          <p>W różnych regionach Polski noszono różne stroje. Np. w stroju <b>krakowskim</b> mężczyźni mają czerwoną czapkę z pawim piórem, a kobiety – wianek z kwiatów i korale. Strój <b>łowicki</b> ma kolorowe spódnice i spodnie w paski. Są też stroje <b>kaszubskie</b>, <b>kurpiowskie</b> i wiele innych.</p>`,
        infographicNote: 'Pomarańczowe – symbole Polski, żółte – święta.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '🦅', title: 'Godło', text: 'biały orzeł w złotej koronie na czerwonym tle', kolor: 2 },
            { icon: '🤍❤️', title: 'Barwy', text: 'biel na górze, czerwień na dole', kolor: 2 },
            { icon: '🎵', title: 'Hymn', text: '„Mazurek Dąbrowskiego”, słowa: Józef Wybicki', kolor: 2 },
            { icon: '🧍', title: 'Gdy grają hymn', text: 'stoisz prosto, w ciszy; chłopcy zdejmują czapki', kolor: 3 },
          ],
          bottom: { title: '📅 Święta narodowe', items: ['2 maja – Dzień Flagi', '3 maja – Święto Konstytucji 3 Maja', '11 listopada – Narodowe Święto Niepodległości'], kolor: 4 },
        },
        flashcards: [
          ['Godło Polski', 'biały orzeł w złotej koronie na czerwonym tle'],
          ['Barwy Polski', 'biała i czerwona – biel na górze, czerwień na dole'],
          ['Hymn Polski', '„Mazurek Dąbrowskiego”'],
          ['Kto napisał słowa hymnu?', 'Józef Wybicki'],
          ['Pierwsze słowa hymnu', '„Jeszcze Polska nie zginęła, kiedy my żyjemy”'],
          ['Jak się zachować, gdy grają hymn?', 'stać prosto, w ciszy; chłopcy zdejmują czapki'],
          ['2 maja', 'Dzień Flagi'],
          ['3 maja', 'Święto Konstytucji 3 Maja (1791 r.)'],
          ['11 listopada', 'Narodowe Święto Niepodległości (1918 r.)'],
          ['Konstytucja', 'najważniejsze prawo w państwie'],
          ['Stroje ludowe', 'np. krakowski, łowicki, kaszubski, kurpiowski'],
        ],
        questions: [
          { id: 'cactu5', q: 'Co jest na godle Polski?', options: ['biały orzeł w złotej koronie na czerwonym tle', 'czerwony orzeł w złotej koronie na białym tle', 'złoty lew w koronie na niebieskim tle'], answer: 0, explain: 'Godło Polski to biały orzeł ze złotą koroną na czerwonej tarczy.' },
          { id: 'mj12rv', q: 'Która flaga jest flagą Polski?', svg: SVG_FLAGI, say: 'Flaga A: biały pas na górze, czerwony na dole. Flaga B: czerwony na górze, biały na dole. Flaga C: biały po lewej, czerwony po prawej. Która flaga jest flagą Polski?', options: ['A', 'B', 'C'], ...PF, answer: 0, explain: 'Na fladze Polski biały pas jest na górze, a czerwony na dole.' },
          { id: '7tddzu', q: 'Jak nazywa się hymn Polski?', options: ['„Mazurek Dąbrowskiego”', '„Oda do radości”', '„Wlazł kotek na płotek”'], answer: 0, explain: 'Hymn Polski to „Mazurek Dąbrowskiego”.' },
          { id: '9gmm22', q: 'Kto napisał słowa „Mazurka Dąbrowskiego”?', options: ['Józef Wybicki', 'Mikołaj Kopernik', 'Jan Paweł II'], answer: 0, explain: 'Słowa hymnu Polski napisał Józef Wybicki.' },
          { id: 't5fo8m', q: 'Jakimi słowami zaczyna się hymn Polski?', options: ['„Jeszcze Polska nie zginęła…”', '„Sto lat, sto lat…”', '„Kto ty jesteś? Polak mały…”'], answer: 0, explain: 'Hymn zaczyna się od słów: „Jeszcze Polska nie zginęła, kiedy my żyjemy”.' },
          { id: 'n9fqzq', q: 'Na apelu grają hymn. Co robisz?', options: ['stoję prosto i w ciszy', 'rozmawiam z kolegą', 'siadam na podłodze'], answer: 0, explain: 'Podczas hymnu stoimy prosto, spokojnie i w ciszy.' },
          { id: 'z5t1sd', q: 'Co robią chłopcy i mężczyźni w czapkach, gdy grają hymn?', options: ['zdejmują czapki', 'zakładają drugą czapkę', 'machają czapkami'], answer: 0, explain: 'Z szacunku dla hymnu zdejmują nakrycie głowy.' },
          { id: '5wtm33', q: 'Kiedy obchodzimy Dzień Flagi?', options: ['2 maja', '11 listopada', '24 grudnia'], answer: 0, explain: '2 maja to Dzień Flagi Rzeczypospolitej Polskiej.' },
          { id: 'rgjiok', q: 'Co świętujemy 3 maja?', options: ['uchwalenie Konstytucji 3 Maja', 'pierwszy dzień wiosny', 'koniec roku szkolnego i wakacje'], answer: 0, explain: '3 maja 1791 roku uchwalono pierwszą polską konstytucję.' },
          { id: '1rn3qf', q: 'Co świętujemy 11 listopada?', options: ['odzyskanie niepodległości', 'uchwalenie Konstytucji 3 Maja', 'Dzień Dziecka'], answer: 0, explain: '11 listopada to Narodowe Święto Niepodległości. W 1918 roku Polska znów stała się wolna.' },
          { id: 'i26mhz', q: 'Co to jest konstytucja?', options: ['najważniejsze prawo w państwie', 'najważniejsza piosenka w państwie', 'flaga wywieszana w święto'], answer: 0, explain: 'Konstytucja to najważniejsze prawo w państwie. Pierwszą polską uchwalono 3 maja 1791 roku.' },
          { id: 'x1xocc', q: 'Którą rzecz przypinamy w święto narodowe?', options: ['biało-czerwoną kokardę', 'małą choinkę z bombkami', 'zielony wianek'], answer: 0, explain: 'W święta narodowe przypinamy kokardę w barwach Polski.' },
          { id: 'vbzebm', q: 'W którym stroju ludowym mężczyzna ma czerwoną czapkę z pawim piórem?', options: ['w krakowskim', 'w łowickim', 'w kaszubskim'], answer: 0, explain: 'Czerwona czapka z pawim piórem to część stroju krakowskiego.' },
          { id: 'fnp5ux', q: 'Prawda czy fałsz?\nNa fladze Polski czerwony pas jest na górze.', options: TF, ...PF, answer: 1, explain: 'Biały pas jest na górze, a czerwony na dole.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'legendy-wladcy',
        name: 'Legendy i pierwsi władcy',
        basis: `${PP}, 2. Orientacja w czasie historycznym, pkt 1 (legendarne powstanie państwa polskiego, związek legendy z godłem i barwami, legendy regionu), pkt 4 (pierwszy władca i król Polski, pierwsza stolica); 1. Rozumienie środowiska społecznego, pkt 7 (postaci fikcyjne i realne). Treść legend i fakty: ${ZPE}, „Legendarne początki Polski” (legenda o Lechu, Czechu i Rusie, o Kraku i smoku wawelskim), „Legenda o Lechu, Czechu i Rusie” (wersja łatwa do czytania: biały orzeł na czerwonym niebie), „Mieszko I – początki państwa polskiego” (pierwszy historyczny władca, chrzest 966), „Bolesław Chrobry – pierwszy król Polski” (najstarszy syn Mieszka I, koronacja 1025; Gniezno – pierwsza stolica); legenda o Warsie i Sawie – wyniki wyszukiwarki ograniczonej do zpe.gov.pl (nazwa Warszawy od imion Warsa i Sawy, syrenka w herbie). Sprawdzone 2.11.2026.${KONIEC}`,
        theory: `
          <h3>Co to jest legenda?</h3>
          <p><b>Legenda</b> to bardzo stara opowieść. Nie wiemy, kto ją wymyślił. Jest w niej dużo fantazji, ale też ziarno prawdy.</p>
          <h3>Lech, Czech i Rus</h3>
          <p>Trzej bracia wędrowali ze swoimi ludźmi. <b>Lech</b> zobaczył w gnieździe <b>białego orła</b> na tle <b>czerwonego</b> nieba o zachodzie słońca. Uznał to za dobry znak i został w tym miejscu. Gród nazwał <b>Gniezno</b> – od orlego <b>gniazda</b>.</p>
          <p><b>Czech</b> poszedł na <b>południe</b> (Czechy), a <b>Rus</b> – na <b>wschód</b> (Ruś).</p>
          <p class="tip">Biały orzeł na czerwonym tle stał się znakiem Polski – <b>godłem</b>. Stąd też nasze barwy: <b>biało-czerwone</b>.</p>
          <h3>Legendy o miastach</h3>
          <ul>
            <li><b>Kraków</b> – pod wzgórzem <b>Wawel</b> mieszkał straszny <b>smok</b>. Pokonano go sprytem: zjadł skórę wypchaną <b>siarką</b>. Miasto nazwano od imienia <b>Kraka</b>.</li>
            <li><b>Warszawa</b> – według legendy nazwa pochodzi od imion <b>Warsa</b> i <b>Sawy</b>. W herbie Warszawy jest <b>syrenka</b>.</li>
          </ul>
          <h3>Prawdziwi pierwsi władcy</h3>
          <table><tr><th>kto</th><th>co warto wiedzieć</th></tr>
            <tr><td><b>Mieszko I</b></td><td>pierwszy władca Polski znany z historii; w <b>966</b> roku przyjął chrzest</td></tr>
            <tr><td><b>Bolesław Chrobry</b></td><td>syn Mieszka; <b>pierwszy król Polski</b> – koronował się w <b>1025</b> roku</td></tr></table>
          <p><b>Gniezno</b> było <b>pierwszą stolicą</b> Polski.</p>
          <p class="tip">Lech, Krak i smok to postacie z legend (fikcyjne). Mieszko I i Bolesław Chrobry żyli naprawdę.</p>`,
        infographicNote: 'Fioletowe – legendy, niebieskie – władcy, którzy żyli naprawdę.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { icon: '📖', title: 'Legenda', text: 'bardzo stara opowieść: dużo fantazji, trochę prawdy', kolor: 5 },
          items: [
            { icon: '🦅', title: 'Lech', text: 'orzeł w gnieździe – gród Gniezno', kolor: 5 },
            { icon: '🧭', title: 'Czech i Rus', text: 'Czech na południe, Rus na wschód', kolor: 5 },
            { icon: '🐉', title: 'Smok wawelski', text: 'Kraków; smok zjadł skórę z siarką', kolor: 5 },
            { icon: '🧜', title: 'Wars i Sawa', text: 'Warszawa; w herbie syrenka', kolor: 5 },
            { icon: '👑', title: 'Mieszko I', text: 'pierwszy władca; chrzest w 966 roku', kolor: 1 },
            { icon: '👑', title: 'Bolesław Chrobry', text: 'pierwszy król – koronował się w 1025 roku', kolor: 1 },
          ],
          bottom: { title: '🏰 Pierwsza stolica', text: 'Gniezno', kolor: 1 },
        },
        flashcards: [
          ['Legenda', 'bardzo stara opowieść – dużo fantazji, trochę prawdy'],
          ['Lech, Czech i Rus', 'bracia z legendy o początkach Polski'],
          ['Co zobaczył Lech?', 'białego orła w gnieździe na tle czerwonego nieba'],
          ['Skąd nazwa Gniezno?', 'od orlego gniazda'],
          ['Dokąd poszli Czech i Rus?', 'Czech na południe, Rus na wschód'],
          ['Legenda o smoku wawelskim', 'Kraków; smok spod Wawelu zjadł skórę z siarką'],
          ['Wars i Sawa', 'legenda o nazwie Warszawy; w herbie Warszawy jest syrenka'],
          ['Mieszko I', 'pierwszy władca Polski znany z historii; chrzest w 966 r.'],
          ['Bolesław Chrobry', 'pierwszy król Polski (1025 r.)'],
          ['Pierwsza stolica Polski', 'Gniezno'],
          ['Postać fikcyjna', 'wymyślona, np. smok, Lech z legendy'],
        ],
        questions: [
          { id: '68hory', q: 'Co to jest legenda?', options: ['bardzo stara opowieść', 'artykuł w dzisiejszej gazecie', 'przepis na ciasto'], answer: 0, explain: 'Legendy to stare opowieści. Nie znamy ich autorów. Jest w nich dużo fantazji i ziarno prawdy.' },
          { id: 'ywkr2k', q: 'Co zobaczył Lech, gdy postanowił zostać?', options: ['białego orła w gnieździe', 'zielonego smoka w jaskini', 'syrenkę w rzece'], answer: 0, explain: 'Lech zobaczył białego orła w gnieździe na tle czerwonego nieba.' },
          { id: 'qy4rau', q: 'Od czego pochodzi nazwa Gniezno według legendy?', options: ['od orlego gniazda', 'od gniewu', 'od imienia Gniewko'], answer: 0, explain: 'Lech nazwał gród na pamiątkę orlego gniazda.' },
          { id: 'eipv69', q: 'Dokąd według legendy poszedł Czech?', options: ['na południe', 'na wschód', 'na zachód'], answer: 0, explain: 'Czech poszedł na południe i tam powstały Czechy. Rus poszedł na wschód.' },
          { id: 'n3ffa9', q: 'Jak legenda o Lechu łączy się z godłem Polski?', options: ['biały orzeł stał się godłem', 'zielony smok stał się godłem', 'syrenka stała się godłem'], answer: 0, explain: 'Biały orzeł na czerwonym niebie stał się znakiem Polski – godłem.' },
          { id: '1uy1xb', q: 'W którym mieście mieszkał według legendy smok wawelski?', options: ['w Krakowie', 'w Gnieźnie', 'w Warszawie'], answer: 0, explain: 'Smok mieszkał pod wzgórzem Wawel w Krakowie.' },
          { id: 'yyzul6', q: 'Jak pokonano smoka wawelskiego?', options: ['sprytem – zjadł skórę z siarką', 'siłą – zamknięto go w wielkiej klatce', 'czarami – zamieniono go w kamień'], answer: 0, explain: 'Smok połknął skórę wypchaną siarką i zginął. Wygrał spryt.' },
          { id: 'dmmyts', q: 'Od czyich imion pochodzi według legendy nazwa Warszawy?', options: ['Warsa i Sawy', 'Lecha i Czecha', 'Kraka i Wandy'], answer: 0, explain: 'Według legendy nazwa Warszawy pochodzi od imion Warsa i Sawy.' },
          { id: 'olg7qd', q: 'Kto był pierwszym władcą Polski znanym z historii?', options: ['Mieszko I', 'Lech', 'Bolesław Chrobry'], answer: 0, explain: 'Mieszko I żył naprawdę i był pierwszy. Bolesław Chrobry to jego syn, a Lech to postać z legendy.' },
          { id: 'poo95p', q: 'Kto był pierwszym królem Polski?', options: ['Bolesław Chrobry', 'Mieszko I', 'Stefan Batory'], answer: 0, explain: 'Bolesław Chrobry, syn Mieszka I, koronował się na króla w 1025 roku.' },
          { id: 'viqoza', q: 'Które miasto było pierwszą stolicą Polski?', options: ['Gniezno', 'Warszawa', 'Gdańsk'], answer: 0, explain: 'Pierwszą stolicą Polski było Gniezno.' },
          { id: 'x00tkb', q: 'W którym roku Mieszko I przyjął chrzest?', options: ['w 966', 'w 1918', 'w 2004'], answer: 0, explain: 'Mieszko I przyjął chrzest w 966 roku.' },
          { id: 'yh4qc7', q: 'Która postać jest wymyślona (z legendy)?', options: ['smok wawelski', 'Mieszko I', 'Bolesław Chrobry'], answer: 0, explain: 'Smok to postać fikcyjna. Mieszko I i Bolesław Chrobry żyli naprawdę.' },
          { id: '1908e6', q: 'Co jest w herbie Warszawy?', options: ['syrenka', 'smok', 'niedźwiedź'], answer: 0, explain: 'W herbie Warszawy jest syrenka.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'wielcy-polacy',
        name: 'Wielcy Polacy',
        basis: `${PP}, 2. Orientacja w czasie historycznym, pkt 7 (historia rodziny; wielcy Polacy: królowa Jadwiga, król Stefan Batory, Mikołaj Kopernik, Maria Skłodowska-Curie, Wanda Rutkiewicz, Jan Paweł II, gen. Elżbieta Zawacka „Zo”), pkt 6 (dorobek minionych epok: cyfry arabskie i rzymskie, papier, mydło, instrumenty muzyczne). Fakty o postaciach: ${ZPE}, e-materiał „Wielcy Polacy” dla klasy III (gra, słownik i ciekawostki; sprawdzone 2.11.2026). Pominięto szczegóły, które w źródle budzą wątpliwości (np. wiek Jadwigi przy koronacji).${KONIEC}`,
        theory: `
          <h3>Wielcy Polacy</h3>
          <table><tr><th>kto</th><th>z czego jest znany</th></tr>
            <tr><td>👑 <b>królowa Jadwiga</b></td><td>mądrze rządziła Polską; odnowiła <b>Akademię Krakowską</b> (uczelnię); wspierała budowę kościołów i szpitali; jej mężem był Władysław Jagiełło</td></tr>
            <tr><td>⚔️ <b>król Stefan Batory</b></td><td>król Polski, z pochodzenia Węgier; świetny dowódca – <b>ulepszył polskie wojsko</b></td></tr>
            <tr><td>🔭 <b>Mikołaj Kopernik</b></td><td>astronom z <b>Torunia</b>; odkrył, że <b>Ziemia krąży wokół Słońca</b></td></tr>
            <tr><td>🧪 <b>Maria Skłodowska-Curie</b></td><td>urodziła się w <b>Warszawie</b>; naukowczyni (fizyka i chemia); <b>dwa razy</b> dostała <b>Nagrodę Nobla</b></td></tr>
            <tr><td>🏔️ <b>Wanda Rutkiewicz</b></td><td><b>himalaistka</b>; w 1978 roku weszła na <b>Mount Everest</b> – najwyższą górę świata; pierwsza kobieta na szczycie K2</td></tr>
            <tr><td>⛪ <b>Jan Paweł II</b></td><td>Karol Wojtyła z <b>Wadowic</b>; <b>pierwszy polski papież</b> (od 1978 roku); „papież pielgrzym”</td></tr>
            <tr><td>🎖️ <b>Elżbieta Zawacka „Zo”</b></td><td><b>nauczycielka</b> i żołnierz; jedyna kobieta wśród <b>cichociemnych</b> (żołnierzy do zadań specjalnych) w czasie II wojny światowej; generał</td></tr></table>
          <h3>Dawne wynalazki, których używasz</h3>
          <p>Ludzie dawno temu wymyślili rzeczy, z których korzystasz codziennie: <b>cyfry arabskie</b> (1, 2, 3…) i <b>rzymskie</b> (I, II, III…), <b>papier</b>, <b>mydło</b>, <b>instrumenty muzyczne</b>.</p>
          <h3>Historia twojej rodziny</h3>
          <p>Zapytaj dziadków i rodziców, jak żyli, gdy byli mali. Obejrzyjcie stare zdjęcia. Możesz narysować <b>drzewo rodziny</b>: ty, rodzice, dziadkowie, pradziadkowie.</p>`,
        infographicNote: 'Niebieskie – władcy, zielone – naukowcy, żółte – twoja rodzina.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '👑', title: 'Królowa Jadwiga', text: 'odnowiła Akademię Krakowską', kolor: 1 },
            { icon: '⚔️', title: 'Stefan Batory', text: 'król; ulepszył polskie wojsko', kolor: 1 },
            { icon: '🔭', title: 'Mikołaj Kopernik', text: 'Ziemia krąży wokół Słońca', kolor: 3 },
            { icon: '🧪', title: 'Maria Skłodowska-Curie', text: 'dwa razy Nagroda Nobla', kolor: 3 },
            { icon: '🏔️', title: 'Wanda Rutkiewicz', text: 'Mount Everest w 1978 roku', kolor: 5 },
            { icon: '⛪', title: 'Jan Paweł II', text: 'pierwszy polski papież', kolor: 5 },
            { icon: '🎖️', title: 'Elżbieta Zawacka „Zo”', text: 'jedyna kobieta wśród cichociemnych', kolor: 5 },
            { icon: '🌳', title: 'Drzewo rodziny', text: 'ty, rodzice, dziadkowie, pradziadkowie', kolor: 4 },
          ],
        },
        flashcards: [
          ['Królowa Jadwiga', 'odnowiła Akademię Krakowską, wspierała kościoły i szpitale'],
          ['Stefan Batory', 'król Polski, Węgier z pochodzenia; ulepszył wojsko'],
          ['Mikołaj Kopernik', 'astronom z Torunia; Ziemia krąży wokół Słońca'],
          ['Maria Skłodowska-Curie', 'naukowczyni z Warszawy; dwa razy Nagroda Nobla'],
          ['Wanda Rutkiewicz', 'himalaistka; Mount Everest w 1978 r.'],
          ['Jan Paweł II', 'Karol Wojtyła z Wadowic; pierwszy polski papież'],
          ['Elżbieta Zawacka „Zo”', 'nauczycielka i jedyna kobieta wśród cichociemnych'],
          ['Cichociemni', 'żołnierze przeszkoleni do zadań specjalnych'],
          ['Himalaistka', 'kobieta, która wspina się w najwyższych górach świata – Himalajach'],
          ['Astronom', 'naukowiec, który bada gwiazdy, planety i kosmos'],
          ['Drzewo rodziny', 'rysunek: ty, rodzice, dziadkowie, pradziadkowie'],
        ],
        questions: [
          { id: 'p764if', q: 'Kto odkrył, że Ziemia krąży wokół Słońca?', options: ['Mikołaj Kopernik', 'Stefan Batory', 'Jan Paweł II'], answer: 0, explain: 'Mikołaj Kopernik był astronomem. Odkrył, że Ziemia krąży wokół Słońca.' },
          { id: 'salzyt', q: 'W jakim mieście urodził się Mikołaj Kopernik?', options: ['w Toruniu', 'w Wadowicach', 'w Gnieźnie'], answer: 0, explain: 'Kopernik urodził się w Toruniu.' },
          { id: 'iuhr6g', q: 'Kto dwa razy dostał Nagrodę Nobla?', options: ['Maria Skłodowska-Curie', 'Elżbieta Zawacka „Zo”', 'Wanda Rutkiewicz'], answer: 0, explain: 'Maria Skłodowska-Curie dostała Nagrodę Nobla z fizyki i z chemii.' },
          { id: 'b4p72k', q: 'Kim była Wanda Rutkiewicz?', options: ['himalaistką', 'królową Polski', 'malarką'], answer: 0, explain: 'Wanda Rutkiewicz wspinała się w najwyższych górach świata. W 1978 roku weszła na Mount Everest.', say: 'Kim była Wanda Rutkiewicz?', sayExplain: ['Wanda Rutkiewicz wspinała się w najwyższych górach świata. W 1978 roku weszła na', ['Mount Everest', 'en'], '.'] },
          { id: '4b5zyk', q: 'Kto był pierwszym polskim papieżem?', options: ['Jan Paweł II', 'Mieszko I', 'Mikołaj Kopernik'], answer: 0, explain: 'Karol Wojtyła z Wadowic został papieżem w 1978 roku i przyjął imię Jan Paweł II.' },
          { id: 'syaquc', q: 'Jak nazywał się Jan Paweł II, zanim został papieżem?', options: ['Karol Wojtyła', 'Józef Wybicki', 'Stefan Batory'], answer: 0, explain: 'Jan Paweł II to Karol Wojtyła.' },
          { id: 's27fyn', q: 'Z jakiego miasta pochodził Karol Wojtyła?', options: ['z Wadowic', 'z Torunia', 'z Krakowa'], answer: 0, explain: 'Karol Wojtyła urodził się w Wadowicach.' },
          { id: 'wudpoa', q: 'Która królowa odnowiła Akademię Krakowską?', options: ['królowa Jadwiga', 'Maria Skłodowska-Curie', 'Wanda Rutkiewicz'], answer: 0, explain: 'Królowa Jadwiga odnowiła Akademię Krakowską i wspierała budowę szpitali.' },
          { id: 'oonhe6', q: 'Który król ulepszył polskie wojsko i był z pochodzenia Węgrem?', options: ['Stefan Batory', 'Bolesław Chrobry', 'Mieszko I'], answer: 0, explain: 'Stefan Batory był świetnym dowódcą i ulepszył polskie wojsko.' },
          { id: '0zl8mq', q: 'Kim byli cichociemni?', options: ['żołnierzami do zadań specjalnych', 'astronomami, którzy badali gwiazdy', 'muzykami z cichej orkiestry'], answer: 0, explain: 'Cichociemni to żołnierze przeszkoleni do zadań specjalnych. Była wśród nich Elżbieta Zawacka „Zo”.' },
          { id: 'w7m1jd', q: 'Kim była z zawodu Elżbieta Zawacka „Zo”?', options: ['nauczycielką', 'kucharką', 'himalaistką'], answer: 0, explain: 'Elżbieta Zawacka była nauczycielką, a w czasie wojny – żołnierzem.' },
          { id: 'yuc9w0', q: 'W jakim mieście urodziła się Maria Skłodowska-Curie?', options: ['w Warszawie', 'w Toruniu', 'w Krakowie'], answer: 0, explain: 'Maria Skłodowska urodziła się w Warszawie, a na studia wyjechała do Francji.' },
          { id: 'owx4ez', q: 'Który z tych wynalazków wymyślono dawno temu, a używasz go codziennie?', options: ['mydło', 'tablet', 'smartfon'], answer: 0, explain: 'Mydło, papier i cyfry ludzie znają od bardzo dawna.' },
          { id: '6ujnb0', q: 'Kto jest w drzewie rodziny wyżej niż twoi rodzice?', options: ['dziadkowie', 'rodzeństwo', 'koledzy z klasy'], answer: 0, explain: 'W drzewie rodziny: ty, nad tobą rodzice, nad nimi dziadkowie, a jeszcze wyżej pradziadkowie.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'tradycje',
        name: 'Święta i zwyczaje',
        basis: `${PP}, 1. Rozumienie środowiska społecznego, pkt 9 (zwyczaje i tradycje różnych grup i narodów, święta w regionach Polski i w innych krajach); 2. Orientacja w czasie historycznym, pkt 5 (znaczenie wybranych zwyczajów i tradycji polskich). Zwyczaje według ${ZPE}: „Zwyczaje i tradycje wigilijne” (kl. III: pierwsza gwiazdka, opłatek, siano, biały obrus), „Sztuka ludowa. Kalendarz świąt” (topienie Marzanny – przywoływanie wiosny, Niedziela Palmowa – palmy, dożynki – zakończenie żniw, wieńce z plonów, Zaduszki – wspominanie zmarłych, znicze), „Regiony Polski” (śmigus-dyngus w Poniedziałek Wielkanocny, andrzejki 29/30 listopada – lanie wosku); pisanki – wyniki wyszukiwarki ograniczonej do zpe.gov.pl. 24 grudnia – dzień wolny od pracy od 2025 r.: Dz.U. 2024 poz. 1965 (eli.gov.pl). Sprawdzone 2.11.2026.${KONIEC}`,
        theory: `
          <h3>Boże Narodzenie</h3>
          <p>W <b>Wigilię</b> (24 grudnia) czekamy na <b>pierwszą gwiazdkę</b> na niebie. Potem dzielimy się <b>opłatkiem</b> i składamy sobie życzenia. Pod białym obrusem kładzie się trochę <b>siana</b>. Ubieramy <b>choinkę</b>.</p>
          <h3>Wielkanoc</h3>
          <ul>
            <li><b>Niedziela Palmowa</b> – przynosimy <b>palmy</b>.</li>
            <li>Malujemy jajka – <b>pisanki</b>. Do koszyczka ze <b>święconką</b> wkładamy m.in. pisanki.</li>
            <li><b>Śmigus-dyngus</b> – w Poniedziałek Wielkanocny oblewamy się wodą.</li>
          </ul>
          <h3>Przez cały rok</h3>
          <table><tr><th>kiedy</th><th>zwyczaj</th></tr>
            <tr><td>pierwszy dzień wiosny</td><td><b>topienie Marzanny</b> – żegnamy zimę, witamy wiosnę</td></tr>
            <tr><td>po żniwach</td><td><b>dożynki</b> – święto zakończenia żniw; wieńce z kłosów i owoców</td></tr>
            <tr><td>listopad</td><td><b>Zaduszki</b> – wspominamy zmarłych, zapalamy <b>znicze</b> na grobach</td></tr>
            <tr><td>29/30 listopada</td><td><b>andrzejki</b> – wróżby, np. lanie wosku</td></tr></table>
          <h3>Inne kraje – inne zwyczaje</h3>
          <p>W różnych regionach Polski i w innych krajach ludzie świętują trochę inaczej. Szanujemy cudze zwyczaje i chętnie je poznajemy.</p>`,
        infographicNote: 'Niebieskie – wielkie święta, zielone – zwyczaje przez cały rok.',
        infographic: {
          type: 'karty', kolumny: 2,
          items: [
            { icon: '🎄', title: 'Boże Narodzenie', text: 'Wigilia: gwiazdka, opłatek, choinka', kolor: 1 },
            { icon: '🥚', title: 'Wielkanoc', text: 'palmy, pisanki, śmigus-dyngus', kolor: 1 },
            { icon: '🌷', title: 'Topienie Marzanny', text: 'żegnamy zimę, witamy wiosnę', kolor: 3 },
            { icon: '🌾', title: 'Dożynki', text: 'koniec żniw, wieńce z kłosów', kolor: 3 },
            { icon: '🕯️', title: 'Zaduszki', text: 'wspominamy zmarłych, znicze', kolor: 3 },
            { icon: '🔮', title: 'Andrzejki', text: 'wróżby, lanie wosku', kolor: 3 },
          ],
          bottom: { title: '🌍 Inne kraje – inne zwyczaje', text: 'szanujemy cudze zwyczaje i chętnie je poznajemy', kolor: 4 },
        },
        flashcards: [
          ['Na co czekamy w Wigilię?', 'na pierwszą gwiazdkę'],
          ['Czym dzielimy się w Wigilię?', 'opłatkiem – i składamy życzenia'],
          ['Co kładziemy pod obrusem w Wigilię?', 'trochę siana'],
          ['Pisanki', 'malowane jajka na Wielkanoc'],
          ['Śmigus-dyngus', 'oblewanie się wodą w Poniedziałek Wielkanocny'],
          ['Niedziela Palmowa', 'przynosimy palmy'],
          ['Topienie Marzanny', 'pierwszy dzień wiosny – żegnamy zimę'],
          ['Dożynki', 'święto zakończenia żniw, wieńce z kłosów'],
          ['Zaduszki', 'wspominamy zmarłych, zapalamy znicze'],
          ['Andrzejki', 'wróżby w nocy z 29 na 30 listopada, np. lanie wosku'],
        ],
        questions: [
          { id: '3selvk', q: 'Na co czekamy w Wigilię, zanim zaczniemy kolację?', options: ['na pierwszą gwiazdkę', 'na pierwszy śnieg', 'na wschód słońca'], answer: 0, explain: 'Wieczerzę wigilijną zaczynamy, gdy na niebie pojawi się pierwsza gwiazdka.' },
          { id: 'p4n833', q: 'Czym dzielimy się w Wigilię, składając życzenia?', options: ['opłatkiem', 'jajkiem', 'chlebem z masłem'], answer: 0, explain: 'W Wigilię dzielimy się opłatkiem. Jajkiem dzielimy się w Wielkanoc.' },
          { id: 'qf4wx6', q: 'Którego dnia jest Wigilia Bożego Narodzenia?', options: ['24 grudnia', '11 listopada', '3 maja'], answer: 0, explain: 'Wigilia jest 24 grudnia.' },
          { id: 'omf5uv', q: 'Co kładzie się pod białym obrusem na wigilijnym stole?', options: ['trochę siana', 'kamyki', 'liście klonu'], answer: 0, explain: 'Siano pod obrusem to stary wigilijny zwyczaj.' },
          { id: 'wp2t7h', q: 'Jak nazywamy malowane jajka na Wielkanoc?', options: ['pisanki', 'palmy', 'znicze'], answer: 0, explain: 'Pisanki to jajka ozdobione na Wielkanoc.' },
          { id: '43ro30', q: 'Kiedy jest śmigus-dyngus?', options: ['w Poniedziałek Wielkanocny', 'w Wigilię Bożego Narodzenia', 'w Niedzielę Palmową'], answer: 0, explain: 'W Poniedziałek Wielkanocny oblewamy się wodą – to śmigus-dyngus.' },
          { id: '0auuwx', q: 'Co przynosimy w Niedzielę Palmową?', options: ['palmy', 'znicze', 'choinkę'], answer: 0, explain: 'W Niedzielę Palmową przynosimy palmy.' },
          { id: 'ai4l6e', q: 'Który zwyczaj jest w pierwszy dzień wiosny?', options: ['topienie Marzanny', 'dzielenie się opłatkiem', 'lanie wosku'], answer: 0, explain: 'Topiąc Marzannę, żegnamy zimę i witamy wiosnę.' },
          { id: 'avlyia', q: 'Jakie święto obchodzi się po zakończeniu żniw?', options: ['dożynki', 'andrzejki', 'Zaduszki'], answer: 0, explain: 'Dożynki to święto zakończenia żniw. Robi się wtedy wieńce z kłosów.' },
          { id: 'x61ws3', q: 'Co zapalamy na grobach w Zaduszki?', options: ['znicze', 'fajerwerki', 'ognisko'], answer: 0, explain: 'W Zaduszki wspominamy zmarłych i zapalamy znicze.' },
          { id: 'v97bl1', q: 'Kiedy są andrzejki?', options: ['w nocy z 29 na 30 listopada', 'w nocy z 31 grudnia na 1 stycznia', 'w nocy z 23 na 24 grudnia'], answer: 0, explain: 'Andrzejki są w nocy z 29 na 30 listopada. Wróży się wtedy, np. lejąc wosk.' },
          { id: 'umk7ji', q: 'Który zwyczaj pasuje do andrzejek?', options: ['lanie wosku', 'malowanie pisanek', 'ubieranie choinki'], answer: 0, explain: 'W andrzejki lejemy wosk i zgadujemy, co przypomina jego kształt.' },
          { id: 'osn2db', q: 'Prawda czy fałsz?\nW innych krajach ludzie mogą świętować inaczej niż my – trzeba to szanować.', options: TF, ...PF, answer: 0, explain: 'Każdy naród ma swoje zwyczaje. Szanujemy je i chętnie poznajemy.' },
        ],
      },
    ],
  });
})();
