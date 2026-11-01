/* Historia – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, historia kl. IV–VI, dz. 1–4 – tematyka wprowadzająca) */
window.SUBJECTS.push({
  id: 'historia',
  name: 'Historia',
  icon: '🏛️',
  color: '#8c6d3f',
  topics: [
    {
      id: 'historia-nauka',
      name: 'Czym jest historia',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 1 „Refleksja nad historią jako nauką”, wym. 1–6 (znaczenia słowa historia, przydatność historii, historia a fikcja literacka i dzieje legendarne, praca historyka, źródło historyczne i jego wiarygodność, przykłady źródeł). Podstawa przewiduje, że nauka historii w klasie IV zaczyna się od tematyki wprowadzającej; wybór działów 1–4 na klasę 4 i ich kolejność – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Trzy znaczenia słowa „historia”</h3>
        <table>
          <tr><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td><b>przeszłość</b> – wszystko, co już się wydarzyło</td><td>„To już historia” – czyli to minęło.</td></tr>
          <tr><td><b>nauka o przeszłości</b> – bada, co i dlaczego się wydarzyło</td><td>W szkole masz lekcje historii.</td></tr>
          <tr><td><b>opowieść</b> – opowiadanie o jakimś zdarzeniu</td><td>„Opowiem ci pewną historię…”</td></tr>
        </table>
        <h3>Po co znać historię?</h3>
        <ul>
          <li>Rozumiesz, <b>skąd się wzięło</b> to, co jest dziś: nazwy miast, święta, zabytki, zwyczaje.</li>
          <li>Wiesz, kim byli twoi <b>przodkowie</b>, i czujesz, że należysz do rodziny, regionu i narodu.</li>
          <li>Możesz <b>uczyć się na błędach i sukcesach</b> ludzi z przeszłości.</li>
        </ul>
        <h3>Historia, legenda, fikcja</h3>
        <table>
          <tr><th></th><th>Czy to się wydarzyło?</th></tr>
          <tr><td><b>historia</b> (nauka)</td><td>Tak – historyk opiera się na <b>dowodach</b> (źródłach).</td></tr>
          <tr><td><b>legenda</b></td><td>Częściowo – miesza <b>prawdziwe</b> miejsca i postacie z <b>wymyślonymi</b> zdarzeniami, np. z czarami lub smokami.</td></tr>
          <tr><td><b>fikcja literacka</b></td><td>Nie – zdarzenia wymyślił autor, nawet jeśli wyglądają prawdziwie.</td></tr>
        </table>
        <h3>Praca historyka</h3>
        <p><b>Historyk</b> to badacz przeszłości. Działa jak detektyw: zbiera ślady, porównuje je i sprawdza, czy można im wierzyć. Na tej podstawie opisuje, co się wydarzyło.</p>
        <p>Ślady przeszłości to <b>źródła historyczne</b> – wszystko, co powstało w przeszłości i mówi nam coś o niej.</p>
        <table>
          <tr><th>Rodzaj źródła</th><th>Przykłady</th></tr>
          <tr><td><b>pisane</b></td><td>kronika, list, pamiętnik, dokument, akt urodzenia, stara gazeta</td></tr>
          <tr><td><b>materialne</b> (rzeczowe)</td><td>narzędzia, monety, broń, ubrania, budowle, naczynia</td></tr>
          <tr><td><b>ikonograficzne</b> (obrazowe)</td><td>obrazy, rysunki, fotografie, plakaty</td></tr>
          <tr><td><b>ustne</b></td><td>wspomnienia opowiadane przez babcię, piosenki, opowieści przekazywane z ust do ust</td></tr>
          <tr><td><b>audiowizualne</b></td><td>nagrania dźwięku, filmy</td></tr>
        </table>
        <div class="tip">💡 Źródła pisane mają tekst. Wszystkie pozostałe to <b>źródła niepisane</b>.</div>
        <h3>Czy źródłu można wierzyć?</h3>
        <p><b>Wiarygodne</b> źródło to takie, któremu można ufać. Historyk zadaje pytania:</p>
        <ul>
          <li>Kto je stworzył i kiedy? Czy autor był <b>świadkiem</b> zdarzeń?</li>
          <li>Czy autor miał powód, żeby coś ukryć albo upiększyć?</li>
          <li>Czy inne źródła mówią <b>to samo</b>?</li>
        </ul>
        <h3>Gdzie szukać źródeł?</h3>
        <table>
          <tr><td><b>muzeum</b></td><td>gromadzi i pokazuje dawne przedmioty, obrazy, pamiątki</td></tr>
          <tr><td><b>archiwum</b></td><td>przechowuje stare dokumenty, np. akty, mapy, listy</td></tr>
          <tr><td><b>biblioteka</b></td><td>gromadzi książki, czasopisma, stare gazety</td></tr>
        </table>
      `,
      flashcards: [
        ['Trzy znaczenia słowa „historia”', 'przeszłość · nauka o przeszłości · opowieść'],
        ['Historyk', 'Badacz przeszłości – opisuje ją na podstawie źródeł'],
        ['Źródło historyczne', 'Wszystko, co powstało w przeszłości i mówi nam coś o niej'],
        ['Źródło pisane', 'Ma tekst: kronika, list, pamiętnik, dokument'],
        ['Źródło materialne', 'Przedmiot: moneta, narzędzie, budowla, naczynie'],
        ['Źródło ikonograficzne', 'Obraz: rysunek, fotografia, plakat'],
        ['Źródło ustne', 'Wspomnienia i opowieści przekazywane z ust do ust'],
        ['Wiarygodne źródło', 'Źródło, któremu można ufać – sprawdzasz autora, czas powstania i porównujesz z innymi'],
        ['Legenda', 'Opowieść, w której prawdziwe miejsca i postacie mieszają się z wymyślonymi zdarzeniami'],
        ['Archiwum', 'Miejsce, gdzie przechowuje się stare dokumenty'],
      ],
      questions: [
        { id: 's3ep0w', q: 'W którym zdaniu słowo „historia” oznacza naukę o przeszłości?', options: ['Jutro mamy sprawdzian z historii.', 'Babcia opowiedziała mi śmieszną historię.', 'Ta kłótnia to już historia – pogodziliśmy się.', 'Opowiem ci historię o moim psie.'], answer: 0, explain: 'Przedmiot szkolny historia to nauka o przeszłości. W pozostałych zdaniach „historia” to opowieść albo coś, co już minęło.' },
        { id: 'g797h4', q: 'Kim jest historyk?', options: ['pisarzem, który wymyśla przygody', 'badaczem przeszłości', 'kimś, kto przewiduje przyszłość', 'sprzedawcą starych przedmiotów'], answer: 1, explain: 'Historyk bada przeszłość na podstawie źródeł historycznych.' },
        { id: 'gbtn1k', q: 'Co to jest źródło historyczne?', options: ['książka napisana w tym roku o przygodach smoka', 'każda rzecz, która powstała w przeszłości i mówi coś o niej', 'tylko stare dokumenty z pieczątką', 'rzeka, przy której zbudowano miasto'], answer: 1, explain: 'Źródłem może być dokument, ale też moneta, zdjęcie czy wspomnienie – wszystko, co powstało w przeszłości i coś o niej mówi.' },
        { id: 'm7drzj', q: 'Które źródło jest źródłem pisanym?', options: ['stara moneta', 'pamiętnik pradziadka', 'zdjęcie ślubne dziadków', 'dawny młotek'], answer: 1, explain: 'Pamiętnik ma tekst – to źródło pisane. Moneta i młotek to źródła materialne, a zdjęcie – ikonograficzne.' },
        { id: '0hl820', q: 'Do jakiego rodzaju źródeł należy gliniany dzban wykopany przez archeologów?', options: ['pisanych', 'materialnych', 'ustnych', 'audiowizualnych'], answer: 1, explain: 'Dzban to przedmiot – źródło materialne (rzeczowe).' },
        { id: '7bl8td', q: 'Dawna fotografia twojej szkoły to źródło…', options: ['ikonograficzne', 'pisane', 'ustne', 'materialne'], answer: 0, explain: 'Fotografie, obrazy i rysunki to źródła ikonograficzne, czyli obrazowe.' },
        { id: 'ge4gv2', q: 'Dziadek opowiada ci, jak wyglądała jego szkoła, gdy był mały. To źródło…', options: ['pisane', 'materialne', 'ustne', 'ikonograficzne'], answer: 2, explain: 'Wspomnienia opowiadane na głos to źródło ustne.' },
        { id: 'jrparh', q: 'Gdzie najlepiej szukać starych dokumentów, np. dawnych aktów urodzenia?', options: ['w archiwum', 'w sklepie z zabawkami', 'na boisku', 'w aptece'], answer: 0, explain: 'Archiwum przechowuje stare dokumenty.' },
        { id: 'llvbzz', q: 'Gdzie obejrzysz dawne przedmioty, np. zbroje i monety, wystawione dla zwiedzających?', options: ['w archiwum', 'w muzeum', 'w urzędzie pocztowym', 'w bibliotece'], answer: 1, explain: 'Muzeum gromadzi dawne przedmioty i pokazuje je zwiedzającym.' },
        { id: '1g7mv5', q: 'Czym legenda różni się od historii jako nauki?', options: ['Legenda miesza prawdziwe miejsca i postacie z wymyślonymi zdarzeniami.', 'Legenda zawsze opisuje tylko prawdziwe zdarzenia.', 'Legenda jest zawsze dłuższa.', 'Niczym się nie różnią.'], answer: 0, explain: 'Historyk opiera się na źródłach. Legenda może mówić o prawdziwym mieście, ale dodaje zdarzenia wymyślone, np. czary.' },
        { id: 'j8zu84', q: 'Które pytanie historyk zada, sprawdzając, czy może wierzyć źródłu?', options: ['Czy autor był świadkiem tych zdarzeń?', 'Czy kartka ma ładny kolor?', 'Ile dziś kosztowałby ten dokument?', 'Czy źródło jest krótkie?'], answer: 0, explain: 'Świadek zdarzeń wie więcej niż ktoś, kto zna je tylko z opowieści. Historyk sprawdza też, czy inne źródła mówią to samo.' },
        { id: 'kxk84y', q: 'Prawda czy fałsz?\nHistoryk powinien porównać kilka źródeł, zanim napisze, co się wydarzyło.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Jedno źródło może się mylić. Gdy kilka źródeł mówi to samo, łatwiej im zaufać.' },
        { id: '5ex8iw', q: 'Prawda czy fałsz?\nŹródłem historycznym mogą być tylko dokumenty pisane.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Źródłem są też przedmioty, obrazy, zdjęcia, nagrania i wspomnienia.' },
        { id: '4575lw', q: 'Który przykład pokazuje, że historia jest przydatna dziś?', options: ['Dzięki historii rozumiesz, skąd wzięło się święto, które obchodzisz.', 'Historia mówi, jaka będzie jutro pogoda.', 'Historia pomaga szybciej biegać.', 'Historia jest potrzebna tylko historykom.'], answer: 0, explain: 'Historia wyjaśnia, skąd się wzięło to, co nas otacza: święta, nazwy, zabytki, zwyczaje.' },
        { id: 'ksi65p', q: 'Jak nazywamy wszystkie źródła, które nie mają tekstu (np. przedmioty, obrazy)?', options: ['niepisane', 'tajne', 'nowoczesne', 'naukowe'], answer: 0, explain: 'Źródła dzielimy na pisane (z tekstem) i niepisane (pozostałe).' },
      ],
    },
    {
      id: 'rodzina-region',
      name: 'Moja rodzina i mój region',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 2 „Elementy historii rodzinnej, lokalnej i regionalnej”, wym. 1–5 (informacje i pamiątki rodzinne, regiony Polski i własny region, historia okolicy i formy upamiętniania zasłużonych postaci, zabytki i ich ochrona, legendy związane z okolicą – elementy historyczne i fikcyjne). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Regiony podano ogólnie, bez granic – granice regionów historycznych bywają różnie wyznaczane.',
      theory: `
        <h3>Historia rodziny</h3>
        <ul>
          <li><b>Przodkowie</b> – członkowie rodziny, którzy żyli przed tobą: rodzice, dziadkowie, pradziadkowie.</li>
          <li><b>Potomkowie</b> – ci, którzy urodzili się po kimś w jego rodzinie: dzieci, wnuki, prawnuki.</li>
          <li><b>Pokolenie</b> – ludzie w rodzinie w podobnym wieku: ty i twoje rodzeństwo to jedno pokolenie, rodzice – drugie, dziadkowie – trzecie.</li>
          <li><b>Drzewo genealogiczne</b> – rysunek, który pokazuje członków rodziny i ich pokrewieństwo, pokolenie po pokoleniu.</li>
        </ul>
        <table>
          <tr><th>Kto to?</th><th>Nazwa</th></tr>
          <tr><td>mama lub tata twojej mamy albo taty</td><td>babcia, dziadek</td></tr>
          <tr><td>rodzice babci lub dziadka</td><td>prababcia, pradziadek</td></tr>
          <tr><td>dziecko twojego dziecka</td><td>wnuk, wnuczka</td></tr>
        </table>
        <p><b>Pamiątki rodzinne</b> to przedmioty przechowywane na pamiątkę: stare zdjęcia, listy, dokumenty, medale, biżuteria, książki z dedykacją. Są źródłami historii twojej rodziny.</p>
        <div class="tip">💡 Najlepszym źródłem wiedzy o rodzinie są często <b>rozmowy z dziadkami</b> – to źródło ustne.</div>
        <h3>Regiony Polski</h3>
        <p><b>Region</b> to część kraju, której mieszkańców łączą wspólna historia, tradycje, czasem gwara i stroje. Przykłady regionów historycznych:</p>
        <table>
          <tr><th>Region</th><th>Gdzie mniej więcej leży</th><th>Duże miasto</th></tr>
          <tr><td>Pomorze</td><td>na północy, nad Bałtykiem</td><td>Gdańsk</td></tr>
          <tr><td>Warmia i Mazury</td><td>na północnym wschodzie</td><td>Olsztyn</td></tr>
          <tr><td>Podlasie</td><td>na wschodzie</td><td>Białystok</td></tr>
          <tr><td>Mazowsze</td><td>w środkowej Polsce</td><td>Warszawa</td></tr>
          <tr><td>Wielkopolska</td><td>na zachodzie</td><td>Poznań</td></tr>
          <tr><td>Śląsk</td><td>na południowym zachodzie</td><td>Wrocław, Katowice</td></tr>
          <tr><td>Małopolska</td><td>na południu</td><td>Kraków</td></tr>
        </table>
        <p>Region, w którym mieszkasz, znajdziesz na mapie. Zapytaj też nauczyciela lub rodziców, jak się nazywa.</p>
        <h3>Historia okolicy</h3>
        <ul>
          <li><b>Zabytek</b> – budowla lub przedmiot z przeszłości, który ma wartość historyczną lub artystyczną, np. zamek, kościół, ratusz, stary dworek. Zabytki są <b>chronione</b>, bo gdy zniszczymy zabytek, nie da się go odtworzyć.</li>
          <li>Jak chronimy zabytki: nie niszczymy ich, nie piszemy po murach, nie zabieramy kamieni „na pamiątkę”, słuchamy przewodnika i zasad zwiedzania.</li>
          <li><b>Upamiętnienie</b> zasłużonych ludzi i ważnych wydarzeń: <b>pomnik</b>, <b>tablica pamiątkowa</b>, <b>nazwa ulicy lub szkoły</b> (patron), muzeum.</li>
        </ul>
        <h3>Legendy z okolicy</h3>
        <p>Wiele miejscowości ma swoją <b>legendę</b>, np. o tym, skąd się wzięła nazwa miasta. W legendzie szukaj dwóch rodzajów elementów:</p>
        <ul>
          <li><b>elementy historyczne</b> – to, co istnieje naprawdę albo co potwierdzają źródła: miasto, rzeka, wzgórze, zamek, władca;</li>
          <li><b>elementy fikcyjne</b> – to, co wymyślono: smoki, czary, gadające zwierzęta.</li>
        </ul>
        <p>Przykład: w legendzie o smoku wawelskim prawdziwe są Kraków i wzgórze Wawel, a smok jest postacią wymyśloną.</p>
      `,
      flashcards: [
        ['Przodkowie', 'Członkowie rodziny żyjący przed tobą: rodzice, dziadkowie, pradziadkowie'],
        ['Potomkowie', 'Dzieci, wnuki, prawnuki'],
        ['Pokolenie', 'Ludzie w rodzinie w podobnym wieku, np. ty i twoje rodzeństwo'],
        ['Drzewo genealogiczne', 'Rysunek pokazujący członków rodziny i ich pokrewieństwo'],
        ['Pamiątki rodzinne', 'Stare zdjęcia, listy, dokumenty, medale przechowywane w rodzinie'],
        ['Region', 'Część kraju z wspólną historią i tradycjami, np. Mazowsze, Śląsk'],
        ['Zabytek', 'Budowla lub przedmiot z przeszłości o wartości historycznej lub artystycznej – chroniony'],
        ['Formy upamiętnienia', 'pomnik · tablica pamiątkowa · nazwa ulicy lub szkoły · muzeum'],
        ['Elementy historyczne w legendzie', 'To, co istnieje naprawdę: miasto, rzeka, wzgórze'],
        ['Elementy fikcyjne w legendzie', 'To, co wymyślono: smoki, czary'],
      ],
      questions: [
        { id: 'hp2dxx', q: 'Kto należy do twoich przodków?', options: ['pradziadek', 'młodszy brat', 'kuzyn w twoim wieku', 'twój przyszły wnuk'], answer: 0, explain: 'Przodkowie żyli przed tobą: rodzice, dziadkowie, pradziadkowie.' },
        { id: 'zfnwct', q: 'Jak nazywa się rysunek, który pokazuje członków rodziny pokolenie po pokoleniu?', options: ['drzewo genealogiczne', 'mapa myśli', 'oś czasu', 'plan miasta'], answer: 0, explain: 'Drzewo genealogiczne pokazuje, kto jest z kim spokrewniony.' },
        { id: 'xw9yzt', q: 'Mama twojego taty to twoja…', options: ['ciocia', 'babcia', 'prababcia', 'siostra'], answer: 1, explain: 'Rodzice twoich rodziców to twoi dziadkowie – mama taty jest twoją babcią.' },
        { id: 'esg3yc', q: 'Kim jest dla ciebie tata twojej babci?', options: ['dziadkiem', 'wujkiem', 'pradziadkiem', 'kuzynem'], answer: 2, explain: 'Rodzice dziadków to pradziadkowie.' },
        { id: 'errhl9', q: 'Ty i twoje rodzeństwo należycie do…', options: ['tego samego pokolenia', 'różnych pokoleń', 'pokolenia dziadków', 'pokolenia rodziców'], answer: 0, explain: 'Rodzeństwo jest w podobnym wieku – to jedno pokolenie.' },
        { id: 'hqc7ki', q: 'Która rzecz jest pamiątką rodzinną?', options: ['stare zdjęcie ślubne pradziadków', 'nowa gumka do mazania', 'dzisiejsza gazeta z kiosku', 'bilet do kina na jutro'], answer: 0, explain: 'Pamiątki rodzinne to przedmioty z przeszłości rodziny, przechowywane na pamiątkę.' },
        { id: 'iqnjjk', q: 'W którym regionie leży Kraków?', options: ['w Małopolsce', 'na Pomorzu', 'na Podlasiu', 'w Wielkopolsce'], answer: 0, explain: 'Kraków to największe miasto Małopolski.' },
        { id: 'vgegvr', q: 'Który region leży na północy Polski, nad Morzem Bałtyckim?', options: ['Pomorze', 'Śląsk', 'Małopolska', 'Mazowsze'], answer: 0, explain: 'Pomorze to region nad Bałtykiem – jego dużym miastem jest Gdańsk.' },
        { id: 'ga9jgx', q: 'W którym regionie leży Poznań?', options: ['w Wielkopolsce', 'na Śląsku', 'na Podlasiu', 'na Mazurach'], answer: 0, explain: 'Poznań to największe miasto Wielkopolski.' },
        { id: 'y8p0d0', q: 'Co to jest zabytek?', options: ['budowla lub przedmiot z przeszłości o wartości historycznej lub artystycznej', 'każdy nowy budynek w mieście', 'stara, zepsuta zabawka bez znaczenia', 'nazwa ulicy'], answer: 0, explain: 'Zabytek ma wartość historyczną lub artystyczną. Dlatego jest chroniony.' },
        { id: 'rexcwa', q: 'Jak zachowasz się, zwiedzając stary zamek?', options: ['nie dotykam tego, czego nie wolno, i nie piszę po murach', 'wydrapuję na murze swoje imię', 'zabieram cegłę na pamiątkę', 'rzucam śmieci do fosy zamku'], answer: 0, explain: 'Zabytków nie wolno niszczyć. Zniszczonego zabytku nie da się odtworzyć.' },
        { id: 'q6e6o6', q: 'Która forma upamiętnia zasłużonego mieszkańca twojej miejscowości?', options: ['ulica nazwana jego imieniem', 'nowy przystanek autobusowy bez nazwy', 'parking przed sklepem', 'kosz na śmieci'], answer: 0, explain: 'Ludzi zasłużonych upamiętniamy pomnikami, tablicami i nazwami ulic lub szkół.' },
        { id: 'r1c5wm', q: 'Który element legendy o smoku wawelskim jest historyczny (prawdziwy)?', options: ['wzgórze Wawel w Krakowie', 'smok', 'smok ziejący ogniem', 'pokonanie smoka'], answer: 0, explain: 'Wawel naprawdę istnieje. Smok to postać wymyślona – element fikcyjny.' },
        { id: 'ykybci', q: 'Prawda czy fałsz?\nW legendach mogą być zarówno elementy prawdziwe, jak i wymyślone.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Legenda często opowiada o prawdziwym miejscu, ale dodaje zdarzenia wymyślone.' },
        { id: '4mfrjx', q: 'Prawda czy fałsz?\nPokolenie to wszyscy ludzie mieszkający w jednym regionie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Pokolenie to ludzie w podobnym wieku, np. ty i twoje rodzeństwo. Mieszkańców regionu tak nie nazywamy.' },
      ],
    },
    {
      id: 'wspolnota-panstwowa',
      name: 'Symbole i święta Polski',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 3 „Wspólnota państwowa”, wym. 1–4 (symbole państwowe: barwy, godło, hymn; święta państwowe; obrzędy, tradycje i zwyczaje regionalne; symbole Unii Europejskiej: flaga i hymn). Autor słów „Mazurka Dąbrowskiego” – Józef Wybicki – za podstawą programową z języka polskiego (dz. 7 wym. 6). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Symbole państwowe Polski</h3>
        <p><b>Symbol</b> to znak, który coś oznacza. Symbole państwowe oznaczają Polskę i łączą wszystkich jej obywateli.</p>
        <table>
          <tr><th>Symbol</th><th>Jak wygląda / co to jest</th></tr>
          <tr><td><b>barwy</b></td><td>biała i czerwona – dwa poziome pasy: <b>biały na górze, czerwony na dole</b>; to barwy flagi Polski</td></tr>
          <tr><td><b>godło</b></td><td><b>biały orzeł</b> w złotej koronie, na <b>czerwonym</b> tle tarczy</td></tr>
          <tr><td><b>hymn</b></td><td>„<b>Mazurek Dąbrowskiego</b>”, słowa napisał <b>Józef Wybicki</b></td></tr>
        </table>
        <div class="tip">💡 Zapamiętaj: <b>biel na górze</b>, czerwień na dole. Flaga odwrócona do góry nogami (czerwień na górze) to błąd.</div>
        <h3>Jak okazujemy szacunek symbolom</h3>
        <ul>
          <li>Podczas hymnu <b>stoimy spokojnie i w ciszy</b> – tak okazujemy szacunek. Chłopcy i mężczyźni zdejmują czapki. Nie jemy, nie rozmawiamy.</li>
          <li>Flagi nie rzucamy na ziemię i nie niszczymy jej. W święta wywieszamy ją na budynkach.</li>
        </ul>
        <h3>Święta państwowe</h3>
        <table>
          <tr><th>Data</th><th>Święto</th></tr>
          <tr><td><b>2 maja</b></td><td>Dzień Flagi Rzeczypospolitej Polskiej</td></tr>
          <tr><td><b>3 maja</b></td><td>Święto Narodowe Trzeciego Maja – rocznica uchwalenia Konstytucji 3 Maja (1791 r.)</td></tr>
          <tr><td><b>11 listopada</b></td><td>Narodowe Święto Niepodległości – Polska odzyskała niepodległość w 1918 r.</td></tr>
        </table>
        <p>Święta państwowe przypominają ważne chwile z dziejów Polski. Ludzie obchodzą je razem: biorą udział w uroczystościach, wywieszają flagi, śpiewają hymn. Dzięki temu czują, że tworzą jedną <b>wspólnotę</b>.</p>
        <h3>Tradycje regionalne</h3>
        <p>Różne regiony Polski mają swoje <b>obrzędy, zwyczaje i tradycje</b>: stroje ludowe, tańce, pieśni, potrawy, gwarę (sposób mówienia mieszkańców regionu). Dzięki nim mieszkańcy regionu czują się sobie bliscy, a Polska jest różnorodna.</p>
        <h3>Symbole Unii Europejskiej</h3>
        <p>Polska należy do <b>Unii Europejskiej</b> – wspólnoty wielu państw Europy.</p>
        <table>
          <tr><td><b>flaga UE</b></td><td><b>12 złotych gwiazd</b> ułożonych w krąg na <b>niebieskim</b> tle</td></tr>
          <tr><td><b>hymn UE</b></td><td>„<b>Oda do radości</b>” – muzyka Ludwiga van Beethovena</td></tr>
        </table>
        <div class="tip">💡 Gwiazd jest zawsze 12 – ta liczba nie zależy od tego, ile państw należy do Unii.</div>
      `,
      flashcards: [
        ['Symbole państwowe Polski', 'barwy (biało-czerwone) · godło (biały orzeł) · hymn („Mazurek Dąbrowskiego”)'],
        ['Barwy Polski', 'Biały pas na górze, czerwony na dole'],
        ['Godło Polski', 'Biały orzeł w złotej koronie na czerwonym tle'],
        ['Hymn Polski', '„Mazurek Dąbrowskiego”, słowa: Józef Wybicki'],
        ['Zachowanie podczas hymnu', 'Stoimy spokojnie i w ciszy; chłopcy i mężczyźni zdejmują czapki'],
        ['2 maja', 'Dzień Flagi Rzeczypospolitej Polskiej'],
        ['3 maja', 'Święto Narodowe Trzeciego Maja – rocznica Konstytucji 3 Maja (1791 r.)'],
        ['11 listopada', 'Narodowe Święto Niepodległości – odzyskanie niepodległości w 1918 r.'],
        ['Flaga Unii Europejskiej', '12 złotych gwiazd w kręgu na niebieskim tle'],
        ['Hymn Unii Europejskiej', '„Oda do radości” – muzyka Ludwiga van Beethovena'],
      ],
      questions: [
        { id: 'auowy2', q: 'Jak nazywa się hymn Polski?', options: ['„Mazurek Dąbrowskiego”', '„Oda do radości”', '„Rota”', '„Sto lat”'], answer: 0, explain: 'Hymn państwowy Polski to „Mazurek Dąbrowskiego”. „Oda do radości” to hymn Unii Europejskiej.' },
        { id: 'v0f2a9', q: 'Kto napisał słowa „Mazurka Dąbrowskiego”?', options: ['Józef Wybicki', 'Ludwig van Beethoven', 'Maria Konopnicka', 'Adam Mickiewicz'], answer: 0, explain: 'Słowa hymnu Polski napisał Józef Wybicki.' },
        { id: 'ce871w', q: 'Jak wygląda godło Polski?', options: ['biały orzeł w złotej koronie na czerwonym tle', 'czerwony orzeł na białym tle', 'złote gwiazdy na niebieskim tle', 'biały lew na zielonym tle'], answer: 0, explain: 'Godło Polski to biały orzeł w złotej koronie na czerwonej tarczy.' },
        { id: 'n3e37w', q: 'Która flaga jest flagą Polski?', options: ['biały pas na górze, czerwony na dole', 'czerwony pas na górze, biały na dole', 'biały i czerwony pas obok siebie, pionowo', 'czerwona z białym krzyżem'], answer: 0, explain: 'Na fladze Polski biel jest na górze, a czerwień na dole. Odwrócona flaga to błąd.' },
        { id: 'ga90qr', q: 'Jak zachowasz się, gdy podczas szkolnej uroczystości grają hymn Polski?', options: ['stoję prosto i w ciszy', 'siedzę i rozmawiam z kolegą', 'jem kanapkę', 'przeglądam telefon'], answer: 0, explain: 'Podczas hymnu okazujemy szacunek: stoimy prosto i w ciszy, zdejmujemy czapkę.' },
        { id: 'cg4wwe', q: 'Kiedy obchodzimy Narodowe Święto Niepodległości?', options: ['11 listopada', '3 maja', '2 maja', '1 stycznia'], answer: 0, explain: '11 listopada przypominamy odzyskanie przez Polskę niepodległości w 1918 r.' },
        { id: 'g0p35r', q: 'Którego dnia obchodzimy Dzień Flagi Rzeczypospolitej Polskiej?', options: ['2 maja', '3 maja', '11 listopada', '1 czerwca'], answer: 0, explain: 'Dzień Flagi przypada 2 maja – dzień przed Świętem Narodowym Trzeciego Maja.' },
        { id: '961tvs', q: 'Rocznicę czego obchodzimy 3 maja?', options: ['uchwalenia Konstytucji 3 Maja', 'odzyskania niepodległości', 'wstąpienia do Unii Europejskiej', 'początku roku szkolnego'], answer: 0, explain: 'Święto Narodowe Trzeciego Maja to rocznica uchwalenia Konstytucji 3 Maja w 1791 r.' },
        { id: 't9m0jj', q: 'W którym roku Polska odzyskała niepodległość (pamiętamy o tym 11 listopada)?', options: ['1918', '1791', '966', '1410'], answer: 0, explain: 'Polska odzyskała niepodległość w 1918 r.' },
        { id: 'aqzui9', q: 'Jak wygląda flaga Unii Europejskiej?', options: ['12 złotych gwiazd w kręgu na niebieskim tle', 'biały orzeł na czerwonym tle', '12 białych gwiazd na czerwonym tle', 'złota korona na zielonym tle'], answer: 0, explain: 'Flaga UE ma 12 złotych gwiazd ułożonych w krąg na niebieskim tle.' },
        { id: '6d4sb0', q: 'Który utwór jest hymnem Unii Europejskiej?', options: ['„Oda do radości”', '„Mazurek Dąbrowskiego”', '„Rota”', '„Wlazł kotek na płotek”'], answer: 0, explain: 'Hymnem UE jest „Oda do radości” z muzyką Ludwiga van Beethovena.' },
        { id: '7885ol', q: 'Prawda czy fałsz?\nNa fladze Unii Europejskiej jest tyle gwiazd, ile państw należy do Unii.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Gwiazd jest zawsze 12. Ta liczba nie zależy od liczby państw w Unii.' },
        { id: 'x38323', q: 'Które z wymienionych są symbolami państwowymi Polski?', options: ['barwy, godło i hymn', 'herb miasta, pomnik i park', 'stolica, rzeka i góry', 'gwiazdy, hymn UE i euro'], answer: 0, explain: 'Symbole państwowe Polski to barwy (biało-czerwone), godło (biały orzeł) i hymn („Mazurek Dąbrowskiego”).' },
        { id: '63g37q', q: 'Po co ludzie wspólnie obchodzą święta państwowe?', options: ['żeby pamiętać o ważnych wydarzeniach i czuć się wspólnotą', 'żeby nie chodzić do szkoły', 'żeby kupić nowe ubrania', 'nie ma żadnego powodu'], answer: 0, explain: 'Święta państwowe przypominają ważne chwile z dziejów Polski i łączą obywateli we wspólnotę.' },
        { id: '5zh21u', q: 'Prawda czy fałsz?\nRegiony Polski różnią się strojami ludowymi, tańcami i potrawami.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Każdy region ma swoje tradycje, obrzędy i zwyczaje – to bogactwo Polski.' },
      ],
    },
    {
      id: 'czas-mapa',
      name: 'Czas w historii: wiek, oś czasu, mapa',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 4 „Czas i miejsce wydarzeń historycznych”, wym. 1–4 (pojęcia: data, epoka, nasza era, przed naszą erą, rok, stulecie, tysiąclecie, wiek; określanie wieku wydarzeń p.n.e. i n.e.; upływ czasu między wydarzeniami; oś czasu; mapa historyczna, plan, legenda). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Daty historyczne w przykładach: 966, 1410, 1791, 1918.',
      theory: `
        <h3>Jednostki czasu w historii</h3>
        <table>
          <tr><th>Pojęcie</th><th>Co oznacza</th></tr>
          <tr><td><b>data</b></td><td>dokładny czas wydarzenia, np. 11 listopada 1918 r. albo sam rok: 966 r.</td></tr>
          <tr><td><b>wiek</b> = <b>stulecie</b></td><td>100 lat</td></tr>
          <tr><td><b>tysiąclecie</b></td><td>1000 lat = 10 wieków</td></tr>
          <tr><td><b>epoka</b></td><td>długi okres, w którym życie ludzi miało podobne cechy, np. starożytność, średniowiecze</td></tr>
        </table>
        <p>Wieki zapisujemy <b>cyframi rzymskimi</b>: I, II, III, IV, V, VI, VII, VIII, IX, X, XI, … XIX, XX, XXI.</p>
        <h3>Nasza era i przed naszą erą</h3>
        <p>Lata liczymy od umownej daty narodzin Jezusa Chrystusa. Od tego momentu trwa <b>nasza era (n.e.)</b>: rok 1, 2, 3… aż do dziś. Lata wcześniejsze to <b>przed naszą erą (p.n.e.)</b> – liczymy je wstecz.</p>
        <p><b>Nie było roku zerowego</b>: po roku 1 p.n.e. od razu nastąpił rok 1 n.e.</p>
        <div class="tip">💡 Im <b>większa</b> liczba p.n.e., tym <b>dawniej</b>: rok 500 p.n.e. był wcześniej niż rok 100 p.n.e.</div>
        <h3>Jak określić wiek?</h3>
        <ul>
          <li>Rok <b>kończy się dwoma zerami</b> (np. 1500, 1900) → wiek = <b>pierwsze cyfry</b>: 1500 → XV wiek, 1900 → XIX wiek.</li>
          <li><b>Inne lata</b> → weź cyfry setek i tysięcy i <b>dodaj 1</b>: 1410 → 14 + 1 = 15 → <b>XV wiek</b>; 966 → 9 + 1 = 10 → <b>X wiek</b>; 1918 → 19 + 1 = 20 → <b>XX wiek</b>.</li>
          <li>Lata od 1 do 99 to I wiek.</li>
          <li>Tak samo p.n.e.: 250 p.n.e. → 2 + 1 = 3 → <b>III wiek p.n.e.</b>; 100 p.n.e. → <b>I wiek p.n.e.</b></li>
        </ul>
        <table>
          <tr><th>Wiek</th><th>Lata</th></tr>
          <tr><td>I w. n.e.</td><td>1–100</td></tr>
          <tr><td>X w.</td><td>901–1000</td></tr>
          <tr><td>XV w.</td><td>1401–1500</td></tr>
          <tr><td>XX w.</td><td>1901–2000</td></tr>
          <tr><td>XXI w.</td><td>2001–2100</td></tr>
        </table>
        <p>Tysiąclecia liczymy podobnie: I tysiąclecie n.e. to lata 1–1000, II tysiąclecie – 1001–2000, a III tysiąclecie trwa od 2001 r.</p>
        <h3>Ile lat minęło?</h3>
        <ul>
          <li><b>Oba lata n.e.</b> – odejmij: od 966 do 1410 minęło 1410 − 966 = <b>444 lata</b>.</li>
          <li><b>Oba lata p.n.e.</b> – odejmij mniejszą liczbę od większej: od 500 p.n.e. do 200 p.n.e. minęło 500 − 200 = <b>300 lat</b>.</li>
          <li><b>Jeden rok p.n.e., drugi n.e.</b> – <b>dodaj</b> oba lata i <b>odejmij 1</b> (bo nie było roku zerowego): od 50 p.n.e. do 50 n.e. minęło 50 + 50 − 1 = <b>99 lat</b>.</li>
        </ul>
        <h3>Oś czasu</h3>
        <p><b>Oś czasu</b> to linia, na której zaznaczamy wydarzenia w kolejności, w jakiej się wydarzyły – od najdawniejszych (po lewej) do najnowszych (po prawej). W środku leży początek naszej ery: na lewo od niego lata p.n.e., na prawo – n.e.</p>
        <h3>Mapa historyczna i plan</h3>
        <ul>
          <li><b>Mapa historyczna</b> pokazuje, jak wyglądał świat lub kraj w przeszłości: dawne granice, miasta, bitwy, szlaki.</li>
          <li><b>Plan</b> pokazuje mały obszar bardzo dokładnie, np. dawne miasto, zamek albo pole bitwy.</li>
          <li><b>Legenda mapy</b> to objaśnienie znaków i kolorów użytych na mapie. Zawsze zaczynaj od niej!</li>
        </ul>
      `,
      flashcards: [
        ['Wiek (stulecie)', '100 lat'],
        ['Tysiąclecie', '1000 lat = 10 wieków'],
        ['Epoka', 'Długi okres o podobnych cechach życia ludzi, np. starożytność, średniowiecze'],
        ['n.e. i p.n.e.', 'nasza era (od umownej daty narodzin Jezusa Chrystusa) i przed naszą erą'],
        ['Rok kończący się na 00', 'Wiek = pierwsze cyfry: 1500 → XV w.'],
        ['Rok niekończący się na 00', 'Cyfry setek i tysięcy + 1: 1410 → XV w., 966 → X w.'],
        ['Upływ czasu: p.n.e. i n.e.', 'Dodaj lata i odejmij 1 (nie było roku zerowego): 50 p.n.e. → 50 n.e. = 99 lat'],
        ['Oś czasu', 'Linia z wydarzeniami ułożonymi od najdawniejszych do najnowszych'],
        ['Legenda mapy', 'Objaśnienie znaków i kolorów na mapie'],
        ['Mapa historyczna', 'Mapa pokazująca świat lub kraj w przeszłości'],
      ],
      questions: [
        { id: '715uib', q: 'W którym wieku był rok 1410 (bitwa pod Grunwaldem)?', options: ['XV', 'XIV', 'XVI', 'XIII'], answer: 0, explain: 'Rok nie kończy się na 00: 14 + 1 = 15 → XV wiek.' },
        { id: 'z5c1o5', q: 'W którym wieku był rok 966 (chrzest Polski)?', options: ['X', 'IX', 'XI', 'XX'], answer: 0, explain: 'Cyfra setek to 9: 9 + 1 = 10 → X wiek.' },
        { id: 'bvwv7h', q: 'W którym wieku był rok 1500?', options: ['XV', 'XVI', 'XIV', 'XVII'], answer: 0, explain: 'Rok kończy się na 00, więc wiek to pierwsze cyfry: 15 → XV wiek. Rok 1500 to ostatni rok XV wieku.' },
        { id: 'avm0lr', q: 'W którym wieku był rok 1918 (odzyskanie niepodległości)?', options: ['XX', 'XIX', 'XXI', 'XVIII'], answer: 0, explain: '19 + 1 = 20 → XX wiek.' },
        { id: '50wzjk', q: 'W którym wieku żyjemy teraz?', options: ['XXI', 'XX', 'XXII', 'XIX'], answer: 0, explain: 'Lata 2001–2100 to XXI wiek.' },
        { id: 'o0sko8', q: 'W którym wieku był rok 250 p.n.e.?', options: ['III w. p.n.e.', 'II w. p.n.e.', 'III w. n.e.', 'XXV w. p.n.e.'], answer: 0, explain: 'Liczymy jak w naszej erze: 2 + 1 = 3 → III wiek p.n.e.' },
        { id: 'wcftcl', q: 'Ile lat ma jedno stulecie?', options: ['100', '10', '1000', '50'], answer: 0, explain: 'Stulecie to inaczej wiek – 100 lat.' },
        { id: 'gbi1f9', q: 'Ile lat minęło od chrztu Polski (966) do bitwy pod Grunwaldem (1410)?', options: ['444', '544', '434', '2376'], answer: 0, explain: 'Oba lata n.e. – odejmujemy: 1410 − 966 = 444.' },
        { id: 'b7vg72', q: 'Ile lat minęło od roku 50 p.n.e. do roku 50 n.e.?', options: ['99', '100', '0', '101'], answer: 0, explain: 'Dodajemy i odejmujemy 1, bo nie było roku zerowego: 50 + 50 − 1 = 99.' },
        { id: '3oevzc', q: 'Ile lat minęło od roku 500 p.n.e. do roku 200 p.n.e.?', options: ['300', '700', '699', '250'], answer: 0, explain: 'Oba lata p.n.e. – odejmujemy mniejszą liczbę od większej: 500 − 200 = 300.' },
        { id: '9zzntv', q: 'Które wydarzenie było najdawniej?', options: ['rok 400 p.n.e.', 'rok 100 p.n.e.', 'rok 100 n.e.', 'rok 966'], answer: 0, explain: 'W latach p.n.e. im większa liczba, tym dawniej. 400 p.n.e. było przed 100 p.n.e., a wszystkie lata p.n.e. – przed latami n.e.' },
        { id: '1xn0sk', q: 'Prawda czy fałsz?\nPo roku 1 p.n.e. był rok 0, a potem rok 1 n.e.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Nie było roku zerowego: po roku 1 p.n.e. od razu nastąpił rok 1 n.e.' },
        { id: 'zyvlr0', q: 'Co to jest legenda mapy?', options: ['objaśnienie znaków i kolorów na mapie', 'opowieść o smoku narysowana na mapie', 'tytuł mapy', 'strzałka wskazująca północ'], answer: 0, explain: 'Legenda mapy wyjaśnia, co oznaczają znaki i kolory. Słowo „legenda” ma tu inne znaczenie niż opowieść.' },
        { id: 'juwnsx', q: 'Jak ułożysz wydarzenia na osi czasu?', options: ['od najdawniejszych po lewej do najnowszych po prawej', 'od najważniejszych do najmniej ważnych', 'alfabetycznie', 'w dowolnej kolejności'], answer: 0, explain: 'Oś czasu pokazuje kolejność wydarzeń w czasie – najdawniejsze są po lewej.' },
        { id: 'li9s0q', q: 'Ułóż chronologicznie (od najdawniejszego): chrzest Polski 966, odzyskanie niepodległości 1918, bitwa pod Grunwaldem 1410.', options: ['966, 1410, 1918', '1918, 1410, 966', '1410, 966, 1918', '966, 1918, 1410'], answer: 0, explain: 'Wszystkie lata są n.e. – mniejsza liczba to dawniej: 966 → 1410 → 1918.' },
        { id: 'w0cv5r', q: 'Która mapa pokaże, jak wyglądały granice Polski dawno temu?', options: ['mapa historyczna', 'plan twojego osiedla', 'mapa pogody na jutro', 'rozkład jazdy autobusów'], answer: 0, explain: 'Mapa historyczna przedstawia świat lub kraj w przeszłości.' },
      ],
    },
  ],
});
