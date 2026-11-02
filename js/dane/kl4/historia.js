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
    {
      id: 'poczatki-cywilizacji',
      name: 'Od jaskiń do miast: Egipt i pismo',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 5 „Od jaskiń do miast – początki cywilizacji”, wym. 1 (rewolucja neolityczna: koczowniczy i osiadły tryb życia, wpływ warunków naturalnych), wym. 2 (życie w starożytnym Egipcie: faraon, hieroglify, piramidy, politeizm, życie pozagrobowe), wym. 3 (osiągnięcia Egiptu: astronomia, matematyka, medycyna i ich wpływ na Europę – moduł kultura), wym. 4 (rola pisma w rozwoju cywilizacji i dziś – moduł kultura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl, lekcje „Pismo – wielki wynalazek człowieka”, „Mezopotamia – kraina między Eufratem a Tygrysem”, „Egipt – państwo nad Nilem”, „Starożytny Egipt”, „Jak doszło do powstania pierwszych cywilizacji?”). Daty bardzo dawnych wydarzeń (początki rolnictwa, wynalezienie pisma) źródła podają różnie – dlatego tylko w przybliżeniu („ponad 10 tysięcy lat temu”, „ponad 5000 lat temu”).',
      theory: `
        <h3>Koczownicy – życie w drodze</h3>
        <p>Najdawniejsi ludzie byli <b>koczownikami</b>. <b>Koczowniczy tryb życia</b> oznacza, że ludzie nie mieli stałego domu: żyli w małych grupach i wędrowali z miejsca na miejsce. Polowali, łowili ryby i zbierali dzikie owoce i rośliny. Schronienie dawały im szałasy i jaskinie.</p>
        <p>Na ścianach jaskiń malowali zwierzęta i sceny polowań. Malowidła z jaskini Lascaux we Francji mają prawdopodobnie ponad 17 tysięcy lat.</p>
        <h3>Rewolucja neolityczna</h3>
        <p>Ponad 10 tysięcy lat temu (naukowcy podają różne daty) ludzie na <b>Bliskim Wschodzie</b> zaczęli <b>uprawiać rośliny</b> (pszenicę, jęczmień) i <b>hodować zwierzęta</b> (kozy, owce, krowy). Nie musieli już wędrować za jedzeniem – zamieszkali na stałe w jednym miejscu. To <b>osiadły tryb życia</b>.</p>
        <p>Tę wielką zmianę nazywamy <b>rewolucją neolityczną</b> (neolit to młodsza epoka kamienia). Rewolucja to tu nie walka, tylko ogromna, ważna zmiana w życiu ludzi.</p>
        <table>
          <tr><th>Koczowniczy tryb życia</th><th>Osiadły tryb życia</th></tr>
          <tr><td>wędrówki z miejsca na miejsce</td><td>stały dom w osadzie</td></tr>
          <tr><td>polowanie, łowienie ryb, zbieranie roślin</td><td>uprawa roli i hodowla zwierząt</td></tr>
          <tr><td>szałasy, jaskinie</td><td>trwałe domy, potem miasta</td></tr>
        </table>
        <h3>Dlaczego nad rzekami?</h3>
        <p>Rolnicy potrzebują wody i żyznej ziemi. Dlatego pierwsze osady powstawały w <b>dolinach wielkich rzek</b> o ciepłym klimacie. Rzeka dawała wodę do picia i do nawadniania pól, a <b>muł</b> (błoto naniesione przez wodę) użyźniał glebę.</p>
        <p>Gdy jedzenia było więcej, rodziło się więcej ludzi. Nie wszyscy musieli pracować na roli – część została <b>rzemieślnikami</b> (np. garncarzami, tkaczami). Z osad wyrosły miasta i pierwsze państwa. Tak powstały pierwsze <b>cywilizacje</b>, m.in. w Mezopotamii (nad Eufratem i Tygrysem) i w Egipcie (nad Nilem). <b>Cywilizacja</b> to poziom rozwoju społeczeństwa – jego wynalazki, budowle, wiedza, sztuka.</p>
        <h3>Egipt – dar Nilu</h3>
        <p>Egipt leży w północno-wschodniej Afryce. Wokół są pustynie, a przez środek płynie rzeka <b>Nil</b>. Co roku Nil wylewał, a gdy woda opadała, na polach zostawał <b>żyzny muł</b>. Dzięki temu rolnicy mieli bogate plony. Dlatego Egipt nazywano <b>darem Nilu</b>.</p>
        <h3>Faraon i społeczeństwo</h3>
        <p><b>Faraon</b> był władcą Egiptu. Egipcjanie wierzyli, że jest bogiem – synem boga słońca. Jego władza była nieograniczona, a cały kraj należał do niego.</p>
        <p>Społeczeństwo przypominało <b>piramidę</b>: na szczycie faraon, niżej <b>kapłani</b> (służyli bogom, znali matematykę, medycynę i astronomię), potem <b>urzędnicy</b> (zbierali podatki, umieli czytać, pisać i liczyć), a na dole najliczniejsza grupa: <b>chłopi</b>, <b>rzemieślnicy</b> i <b>kupcy</b>.</p>
        <h3>Bogowie i życie pozagrobowe</h3>
        <p>Egipcjanie wierzyli w <b>wielu bogów</b>. Taką religię nazywamy <b>politeizmem</b>. Bogów wyobrażali sobie jako zwierzęta albo ludzi z głowami zwierząt. Ważnymi bogami byli m.in. bóg Słońca Re (zwany też Ra) i Ozyrys – bóg świata podziemnego.</p>
        <p>Wierzyli też w <b>życie pozagrobowe</b> – drugie, nowe życie po śmierci. Żeby ciało przetrwało, robiono <b>mumifikację</b>: usuwano wnętrzności, nacierano ciało olejkami i owijano bandażami. Powstawała <b>mumia</b>, którą składano do <b>sarkofagu</b> (trumny w kształcie człowieka). Do grobu wkładano przedmioty potrzebne w nowym życiu.</p>
        <h3>Piramidy</h3>
        <p><b>Piramidy</b> to ogromne kamienne grobowce faraonów. Najsłynniejsze stoją w <b>Gizie</b> – zbudowano je ok. 4500 lat temu dla faraonów Cheopsa, Chefrena i Mykerinosa. Największa jest piramida <b>Cheopsa</b> – ma 139 m wysokości i powstała z ponad 2 milionów kamiennych bloków. Obok stoi <b>Sfinks</b> – ogromny posąg lwa z głową człowieka.</p>
        <p>W 1922 r. Howard Carter odnalazł w Dolinie Królów nietknięty grób faraona <b>Tutanchamona</b> pełen skarbów.</p>
        <h3>Co zawdzięczamy Egipcjanom?</h3>
        <table>
          <tr><th>Dziedzina</th><th>Osiągnięcia</th></tr>
          <tr><td><b>astronomia</b> (nauka o gwiazdach i niebie)</td><td>obserwowali niebo, przewidywali wylewy Nilu; stworzyli <b>kalendarz słoneczny – 365 dni</b>. Nasz kalendarz jest wzorowany na egipskim.</td></tr>
          <tr><td><b>matematyka</b></td><td>skomplikowane obliczenia przy budowie piramid; liczyli w systemie dziesiątkowym, jak my, znali ułamki</td></tr>
          <tr><td><b>medycyna</b> (leczenie ludzi)</td><td>dzięki mumifikacji poznali budowę ciała; spisali pierwsze podręczniki dla lekarzy na papirusie</td></tr>
        </table>
        <h3>Pismo – wielki wynalazek</h3>
        <p>Pismo powstało ponad 5000 lat temu. Najstarsze pisma to <b>pismo klinowe</b> Sumerów w Mezopotamii (znaki jak małe kliny, odciskane w glinianych tabliczkach) i <b>hieroglify</b> w Egipcie.</p>
        <ul>
          <li><b>Hieroglify</b> („święte znaki”) to pismo obrazkowe – było w nim ponad 700 znaków. Umieli je tylko nieliczni, głównie kapłani i urzędnicy (pisarze).</li>
          <li>Egipcjanie pisali na <b>papirusie</b> – materiale z łodyg rośliny rosnącej nad Nilem. Od słowa „papirus” pochodzi słowo <b>„papier”</b>.</li>
          <li>Hieroglify odczytał w 1822 r. Francuz <b>Jean-François Champollion</b> dzięki <b>Kamieniowi z Rosetty</b> – był na nim ten sam tekst zapisany trzema pismami, w tym po grecku.</li>
        </ul>
        <p><b>Wynalezienie pisma</b> historycy uważają za <b>koniec prehistorii</b> i początek historii – pierwszą epoką jest <b>starożytność</b>. Dzięki pismu ludzie mogli zapisywać plony, umowy, prawa, wiedzę i wydarzenia i przekazywać je innym – nawet daleko i po wielu latach. Dziś też pismo jest wszędzie: w zeszycie, książce, SMS-ie i w internecie.</p>
        <div class="tip">💡 Nasze litery to <b>alfabet łaciński</b>: alfabet wymyślili Fenicjanie, przejęli go Grecy, a od nich Rzymianie. Jedna litera = jedna głoska – dużo łatwiej niż 700 hieroglifów!</div>
      `,
      flashcards: [
        ['Koczowniczy tryb życia', 'Wędrowanie z miejsca na miejsce; polowanie, łowienie ryb, zbieranie roślin'],
        ['Osiadły tryb życia', 'Mieszkanie na stałe w jednym miejscu; uprawa roli i hodowla zwierząt'],
        ['Rewolucja neolityczna', 'Przejście od koczowniczego do osiadłego trybu życia – początek rolnictwa i hodowli (ponad 10 tys. lat temu, Bliski Wschód)'],
        ['Dlaczego pierwsze cywilizacje powstały nad rzekami?', 'Rzeka dawała wodę do picia i nawadniania, a muł użyźniał glebę'],
        ['Egipt – „dar Nilu”', 'Wylewy Nilu zostawiały na polach żyzny muł – dzięki temu były plony'],
        ['Faraon', 'Władca Egiptu uważany za boga; miał nieograniczoną władzę'],
        ['Politeizm', 'Wiara w wielu bogów'],
        ['Mumifikacja', 'Zabezpieczanie ciała zmarłego przed rozkładem – Egipcjanie wierzyli w życie pozagrobowe'],
        ['Piramidy', 'Kamienne grobowce faraonów; największa – Cheopsa w Gizie (139 m)'],
        ['Hieroglify', 'Egipskie pismo obrazkowe („święte znaki”); odczytał je Champollion w 1822 r.'],
        ['Papirus', 'Materiał do pisania z łodyg rośliny znad Nilu; od niego pochodzi słowo „papier”'],
        ['Osiągnięcia Egipcjan', 'Kalendarz słoneczny (365 dni), matematyka, medycyna'],
        ['Znaczenie pisma', 'Kończy prehistorię i zaczyna historię; pozwala zapisać i przekazać wiedzę'],
      ],
      questions: [
        { id: 'f9rghu', q: 'Jak żyli koczownicy?', options: ['wędrowali z miejsca na miejsce, polowali i zbierali rośliny', 'mieszkali w murowanych miastach', 'uprawiali pola przy swoich domach', 'pracowali dla faraona przy budowie piramid'], answer: 0, explain: 'Koczownicy nie mieli stałego domu – szli tam, gdzie było jedzenie.' },
        { id: 'qz213o', q: 'Co zmieniła rewolucja neolityczna?', options: ['ludzie zaczęli uprawiać rośliny, hodować zwierzęta i mieszkać na stałe w jednym miejscu', 'ludzie wynaleźli komputer', 'ludzie przestali budować domy i zaczęli wędrować', 'ludzie zaczęli walczyć z królem'], answer: 0, explain: 'Rewolucja neolityczna to przejście od koczowniczego do osiadłego trybu życia – narodziło się rolnictwo.' },
        { id: 't0pq4a', q: 'Dlaczego pierwsze osady rolników powstawały nad wielkimi rzekami?', options: ['rzeka dawała wodę, a naniesiony muł użyźniał glebę', 'nad rzekami nie było zwierząt', 'rzeki chroniły przed deszczem', 'nad rzekami zawsze było chłodno'], answer: 0, explain: 'Rolnik potrzebuje wody i żyznej ziemi – w dolinach rzek miał jedno i drugie.' },
        { id: 'vctxib', q: 'Dlaczego Egipt nazywano „darem Nilu”?', options: ['bo wylewy Nilu zostawiały na polach żyzny muł i dzięki temu były plony', 'bo faraon dostał Nil w prezencie', 'bo Nil był pełen złota', 'bo nad Nilem nie trzeba było pracować'], answer: 0, explain: 'Wokół Egiptu są pustynie. Uprawiać można było tylko ziemię użyźnioną przez Nil.' },
        { id: 'ncnyj7', q: 'Kim był faraon?', options: ['władcą Egiptu, którego uważano za boga', 'najbiedniejszym chłopem', 'kapłanem greckiego boga Zeusa', 'budowniczym rzymskich akweduktów'], answer: 0, explain: 'Faraon miał nieograniczoną władzę, a Egipcjanie wierzyli, że jest synem boga słońca.' },
        { id: 'duq5an', q: 'Która grupa w Egipcie była najliczniejsza?', options: ['chłopi', 'kapłani', 'urzędnicy', 'faraonowie'], answer: 0, explain: 'Na dole „piramidy społeczeństwa” byli chłopi, rzemieślnicy i kupcy – najwięcej było chłopów.' },
        { id: 'szgmk8', q: 'Co oznacza słowo „politeizm”?', options: ['wiarę w wielu bogów', 'wiarę w jednego boga', 'rządy ludu', 'pismo obrazkowe'], answer: 0, explain: 'Egipcjanie czcili wielu bogów, np. boga Słońca Re i boga świata podziemnego Ozyrysa – to politeizm.' },
        { id: '5foe61', q: 'Po co Egipcjanie mumifikowali zmarłych?', options: ['bo wierzyli w życie pozagrobowe i chcieli, żeby ciało przetrwało', 'bo chcieli straszyć wrogów', 'bo tak leczono choroby', 'bo mumie sprzedawano kupcom'], answer: 0, explain: 'Egipcjanie wierzyli w drugie, nowe życie po śmierci. Mumifikacja chroniła ciało przed rozkładem.' },
        { id: '64snn3', q: 'Czym były piramidy?', options: ['grobowcami faraonów', 'pałacami, w których mieszkali chłopi', 'świątyniami Zeusa', 'magazynami na zboże'], answer: 0, explain: 'Piramidy to ogromne kamienne grobowce faraonów.' },
        { id: '6fg824', q: 'Największa piramida w Gizie została zbudowana dla faraona…', options: ['Cheopsa', 'Tutanchamona', 'Peryklesa', 'Juliusza Cezara'], answer: 0, explain: 'Piramida Cheopsa ma 139 m wysokości. Tutanchamon został pochowany w Dolinie Królów, a Perykles i Cezar nie byli władcami Egiptu.' },
        { id: 'kl3lfj', q: 'Czym były hieroglify?', options: ['egipskim pismem obrazkowym', 'grobowcami faraonów', 'egipskimi bogami', 'łodziami na Nilu'], answer: 0, explain: 'Hieroglify („święte znaki”) to pismo obrazkowe Egipcjan – miało ponad 700 znaków.' },
        { id: 'hzm4u3', q: 'Kto odczytał hieroglify dzięki Kamieniowi z Rosetty?', options: ['Jean-François Champollion', 'Howard Carter', 'faraon Cheops', 'Sokrates'], answer: 0, explain: 'Champollion odczytał hieroglify w 1822 r. Howard Carter odnalazł grób Tutanchamona.' },
        { id: 'z2xs95', q: 'Od nazwy którego materiału do pisania pochodzi słowo „papier”?', options: ['papirusu', 'pergaminu', 'glinianej tabliczki', 'kamienia'], answer: 0, explain: 'Papirus robiono z łodyg rośliny rosnącej nad Nilem. Od niego wzięła się nazwa papieru.' },
        { id: 'us32i0', q: 'Ile dni miał kalendarz słoneczny Egipcjan?', options: ['365', '100', '12', '1000'], answer: 0, explain: 'Egipscy kapłani obserwowali niebo i stworzyli kalendarz słoneczny o 365 dniach. Nasz kalendarz jest na nim wzorowany.' },
        { id: 's96mmi', q: 'Jak mumifikacja pomogła w rozwoju medycyny w Egipcie?', options: ['dzięki niej Egipcjanie poznali budowę ludzkiego ciała', 'mumie leczyły choroby', 'dzięki niej wynaleziono kalendarz', 'nie miała żadnego związku z medycyną'], answer: 0, explain: 'Przygotowując mumie, Egipcjanie poznawali budowę ciała. Spisali też pierwsze podręczniki dla lekarzy.' },
        { id: 'jde92p', q: 'Co historycy uważają za koniec prehistorii i początek historii?', options: ['wynalezienie pisma', 'budowę piramid', 'pierwsze igrzyska olimpijskie', 'rewolucję neolityczną'], answer: 0, explain: 'Od kiedy ludzie zaczęli pisać, mamy pisane źródła – zaczyna się historia, a pierwszą epoką jest starożytność.' },
        { id: 'ic6anx', q: 'Jak nazywa się pismo Sumerów z Mezopotamii, odciskane w glinianych tabliczkach?', options: ['pismo klinowe', 'hieroglify', 'alfabet łaciński', 'pismo greckie'], answer: 0, explain: 'Znaki tego pisma wyglądały jak małe kliny – stąd nazwa.' },
        { id: 'a32bkv', q: 'Prawda czy fałsz?\nW starożytnym Egipcie czytać i pisać umieli prawie wszyscy chłopi.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Hieroglifów było ponad 700, a nauka trwała latami. Pisać umieli nieliczni – głównie kapłani i urzędnicy.' },
        { id: '73h72j', q: 'Prawda czy fałsz?\nDzięki pismu ludzie mogą przekazywać wiedzę osobom, które żyją daleko albo urodzą się wiele lat później.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To właśnie największa siła pisma: zapis przetrwa dłużej niż ludzka pamięć.' },
      ],
    },
    {
      id: 'grecja',
      name: 'Dziedzictwo starożytnej Grecji',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 6 „Dziedzictwo starożytnej Grecji”, wym. 1 (społeczeństwo ateńskiej polis w czasach Peryklesa: agora, Akropol, demokracja, miasto-państwo, obywatele), wym. 2 (wpływ warunków naturalnych Grecji, zasięg cywilizacji greckiej na mapie współczesnego świata), wym. 3 (osiągnięcia: demokracja, filozofia, igrzyska olimpijskie, mitologia, teatr i ich wpływ na Europę – moduł filozoficzny, moduł kultura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl, lekcje „Demokratyczne Ateny”, „Przeszłość mityczna – świat bogów i herosów”, „O greckim teatrze, igrzyskach olimpijskich i filozofii”, „Kolonizacja grecka i fenicka w basenie Morza Śródziemnego i Czarnego”): obywatelstwo Aten, Perykles (V w. p.n.e.), pierwsze igrzyska w 776 r. p.n.e. Mitologię (np. mity o Dedalu i Ikarze, Syzyfie) omawia też język polski.',
      theory: `
        <h3>Kraj gór i morza</h3>
        <p>Starożytna Grecja leżała na południu <b>Półwyspu Bałkańskiego</b> i na wielu wyspach. Grecy nazywali swój kraj <b>Helladą</b>, a siebie <b>Hellenami</b>. Mówili jednym językiem i wierzyli w tych samych bogów.</p>
        <ul>
          <li>Prawie cały kraj pokrywają <b>góry</b>. Dzieliły one Grecję na małe krainy, między którymi trudno było podróżować. Dlatego Grecy nie stworzyli jednego państwa, tylko wiele <b>miast-państw</b>.</li>
          <li>Było mało żyznej ziemi, ale wszędzie było blisko <b>morza</b>. Grecy zostali świetnymi <b>żeglarzami</b> i kupcami. Zakładali też nowe miasta – <b>kolonie</b> – na wybrzeżach Morza Śródziemnego i Morza Czarnego, np. na Sycylii i w południowej Italii (dziś to Włochy).</li>
        </ul>
        <p>Na dzisiejszej mapie dawne greckie miasta znajdziemy m.in. w Grecji, na zachodnim wybrzeżu Turcji, w południowych Włoszech i nad Morzem Czarnym.</p>
        <h3>Polis – miasto-państwo</h3>
        <p><b>Polis</b> to <b>miasto-państwo</b>: miasto razem z okolicznymi wsiami, które miało własne prawa, władze i wojsko. Do największych należały <b>Ateny</b> i <b>Sparta</b>. Od słowa „polis” pochodzą słowa <b>polityka</b> i <b>polityk</b>.</p>
        <table>
          <tr><th>Miejsce w Atenach</th><th>Co to było?</th></tr>
          <tr><td><b>Akropol</b></td><td>wzgórze – najwyżej położona część miasta ze świątyniami z marmuru; najsłynniejsza z nich to <b>Partenon</b>, świątynia bogini Ateny, opiekunki miasta</td></tr>
          <tr><td><b>agora</b></td><td>główny plac miasta: targ, sądy, spotkania, rozmowy o polityce</td></tr>
        </table>
        <h3>Demokracja w Atenach</h3>
        <p>Na przełomie VI i V wieku p.n.e. w Atenach narodziła się <b>demokracja</b>. To greckie słowo oznacza <b>„władzę ludu”</b>: o sprawach państwa decydują obywatele.</p>
        <ul>
          <li><b>Obywatelami</b> Aten byli <b>wolni mężczyźni urodzeni w Atenach</b>. <b>Kobiety, niewolnicy i cudzoziemcy</b> nie mieli prawa głosu.</li>
          <li>Obywatele spotykali się na <b>Zgromadzeniu Ludowym</b>. Każdy mógł zabrać głos, a decyzje zapadały w głosowaniu. Głos biednego i bogatego był tak samo ważny.</li>
          <li>Większość urzędników <b>losowano</b>, żeby każdy obywatel miał szansę pełnić urząd.</li>
        </ul>
        <h3>Ateny w czasach Peryklesa</h3>
        <p><b>Perykles</b> żył w <b>V wieku p.n.e.</b> Był świetnym mówcą i wiele razy wybierano go na <b>stratega</b> (dowódcę wojskowego). Za jego czasów Ateny przeżywały okres największego rozkwitu – „złoty wiek”:</p>
        <ul>
          <li>wprowadził <b>diety</b> – zapłatę za udział w zgromadzeniu, żeby nawet biedni mogli w nim uczestniczyć,</li>
          <li>zatrudniał architektów i rzeźbiarzy – na Akropolu powstały wspaniałe świątynie, m.in. Partenon,</li>
          <li>rozbudował flotę i mury obronne.</li>
        </ul>
        <h3>Mitologia</h3>
        <p><b>Mity</b> to opowieści o bogach i <b>herosach</b> (bohaterach o nadludzkiej sile, np. Heraklesie). Zbiór mitów to <b>mitologia</b>. Grecy wierzyli, że bogowie mieszkają na górze <b>Olimp</b>, wyglądają jak ludzie i mają ludzkie uczucia.</p>
        <table>
          <tr><th>Bóg lub bogini</th><th>Czym się opiekował(a)?</th></tr>
          <tr><td><b>Zeus</b></td><td>władca bogów, niebo, pioruny</td></tr>
          <tr><td><b>Hera</b></td><td>żona Zeusa, małżeństwo i rodzina</td></tr>
          <tr><td><b>Posejdon</b></td><td>morza (trójząb)</td></tr>
          <tr><td><b>Hades</b></td><td>podziemna kraina umarłych</td></tr>
          <tr><td><b>Atena</b></td><td>mądrość (sowa), opiekunka Aten</td></tr>
          <tr><td><b>Afrodyta</b></td><td>miłość i piękno</td></tr>
          <tr><td><b>Apollo</b></td><td>muzyka i poezja</td></tr>
        </table>
        <h3>Igrzyska olimpijskie</h3>
        <p>W <b>Olimpii</b> co <b>cztery lata</b> odbywały się <b>igrzyska ku czci Zeusa</b>. Pierwsze igrzyska olimpijskie rozegrano w <b>776 r. p.n.e.</b> Startowali tylko mężczyźni (biegi, zapasy, wyścigi rydwanów i inne). Na czas igrzysk przerywano wojny, żeby sportowcy i widzowie mogli bezpiecznie dotrzeć do Olimpii. Zwycięzcy zdobywali wieniec i sławę.</p>
        <p>Igrzyska wskrzeszono pod koniec XIX wieku. Do dziś ogień olimpijski zapala się w greckiej Olimpii.</p>
        <h3>Teatr</h3>
        <p>Teatr narodził się w Atenach podczas świąt ku czci <b>Dionizosa</b>, boga wina. Przedstawienia grano <b>pod gołym niebem</b>, a widzowie siedzieli na kamiennych ławach na zboczu wzgórza. Grali tylko mężczyźni, w <b>maskach</b>, razem z <b>chórem</b>. Wystawiano <b>tragedie</b> (poważne, smutne) i <b>komedie</b> (zabawne).</p>
        <h3>Filozofia</h3>
        <p><b>Filozofia</b> po grecku znaczy <b>„umiłowanie mądrości”</b>. Filozofowie zamiast tłumaczyć świat tylko mitami, szukali prawdy, zadając pytania i rozumując. Najsłynniejsi to <b>Sokrates</b> (mawiał: „Wiem, że nic nie wiem”), jego uczeń <b>Platon</b> i uczeń Platona – <b>Arystoteles</b>.</p>
        <div class="tip">💡 Grecy zostawili nam demokrację, igrzyska olimpijskie, teatr, filozofię i mity – i wiele słów: <i>demokracja</i>, <i>polityka</i>, <i>teatr</i>, <i>filozofia</i>. Nawet słowo <i>alfabet</i> pochodzi od dwóch pierwszych liter greckich: <b>alfa</b> i <b>beta</b>.</div>
      `,
      flashcards: [
        ['Hellada, Hellenowie', 'Tak starożytni Grecy nazywali swój kraj i siebie'],
        ['Jak góry wpłynęły na Grecję?', 'Podzieliły kraj na małe krainy – powstało wiele miast-państw zamiast jednego państwa'],
        ['Jak morze wpłynęło na Greków?', 'Zostali żeglarzami i kupcami, zakładali kolonie nad Morzem Śródziemnym i Czarnym'],
        ['Polis', 'Miasto-państwo: miasto z okolicznymi wsiami, z własnymi prawami, władzami i wojskiem'],
        ['Akropol', 'Wzgórze w Atenach ze świątyniami, m.in. Partenonem'],
        ['Agora', 'Główny plac greckiego miasta: targ, sądy, spotkania'],
        ['Demokracja', '„Władza ludu” – o sprawach państwa decydują obywatele'],
        ['Kto był obywatelem Aten?', 'Wolni mężczyźni urodzeni w Atenach (bez kobiet, niewolników i cudzoziemców)'],
        ['Perykles', 'Ateński strateg i mówca z V w. p.n.e.; „złoty wiek” Aten'],
        ['Igrzyska olimpijskie', 'W Olimpii, ku czci Zeusa, co 4 lata; pierwsze w 776 r. p.n.e.'],
        ['Teatr grecki', 'Pod gołym niebem, aktorzy w maskach, tragedie i komedie'],
        ['Filozofia', '„Umiłowanie mądrości”; Sokrates, Platon, Arystoteles'],
        ['Mitologia', 'Zbiór mitów – opowieści o bogach i herosach; bogowie mieszkali na Olimpie'],
      ],
      questions: [
        { id: '89cme2', q: 'Dlaczego starożytni Grecy nie stworzyli jednego państwa, tylko wiele miast-państw?', options: ['bo góry dzieliły kraj na małe krainy', 'bo mówili wieloma różnymi językami', 'bo zakazał tego faraon', 'bo nie umieli budować miast'], answer: 0, explain: 'Wysokie góry utrudniały podróże, więc każda kraina żyła osobno – powstały polis.' },
        { id: 'jwj9wg', q: 'Dlaczego Grecy byli świetnymi żeglarzami?', options: ['bo prawie wszędzie w Grecji było blisko morza', 'bo w Grecji nie było gór', 'bo mieszkali na pustyni', 'bo Rzymianie zabraniali im chodzić pieszo'], answer: 0, explain: 'Grecja ma długie wybrzeże i wiele wysp. Morzem łatwiej było podróżować niż przez góry.' },
        { id: 'pqygkk', q: 'Co to była polis?', options: ['miasto-państwo z własnymi prawami, władzami i wojskiem', 'grecka świątynia', 'grecki bóg morza', 'rzymski urzędnik'], answer: 0, explain: 'Polis to miasto razem z okolicznymi wsiami, które rządziło się samo. Do największych należały Ateny i Sparta.' },
        { id: '6a624d', q: 'Jak nazywał się główny plac greckiego miasta, na którym handlowano, sądzono i rozmawiano o polityce?', options: ['agora', 'Akropol', 'Olimp', 'amfiteatr'], answer: 0, explain: 'Agora była sercem miasta. Akropol to wzgórze ze świątyniami, Olimp – góra bogów.' },
        { id: '83nt24', q: 'Akropol w Atenach to…', options: ['wzgórze ze świątyniami, m.in. Partenonem', 'targ na środku miasta', 'port nad morzem', 'stadion w Olimpii'], answer: 0, explain: 'Akropol to najwyżej położona część Aten. Stał tam Partenon – świątynia Ateny.' },
        { id: '4aaj74', q: 'Co oznacza słowo „demokracja”?', options: ['władzę ludu', 'władzę jednego króla', 'umiłowanie mądrości', 'miasto-państwo'], answer: 0, explain: 'Demokracja to „władza ludu” – o państwie decydują obywatele. „Umiłowanie mądrości” to filozofia.' },
        { id: '54ysro', q: 'Kto w Atenach za czasów Peryklesa mógł głosować na Zgromadzeniu Ludowym?', options: ['wolni mężczyźni urodzeni w Atenach', 'wszyscy mieszkańcy, także niewolnicy', 'tylko kobiety', 'tylko cudzoziemcy'], answer: 0, explain: 'Obywatelami byli wolni mężczyźni urodzeni w Atenach. Kobiety, niewolnicy i cudzoziemcy nie mieli prawa głosu.' },
        { id: 'cqyyyb', q: 'W którym wieku żył Perykles?', options: ['w V w. p.n.e.', 'w V w. n.e.', 'w XV w.', 'w I w. n.e.'], answer: 0, explain: 'Perykles kierował Atenami w V wieku przed naszą erą – to „złoty wiek” Aten.' },
        { id: 'tl0sst', q: 'Po co Perykles wprowadził diety – zapłatę za udział w zgromadzeniu?', options: ['żeby nawet biedni obywatele mogli brać udział w obradach', 'żeby zgromadzenie było krótsze', 'żeby kobiety mogły głosować', 'żeby zebrać pieniądze na wojsko'], answer: 0, explain: 'Rzemieślnik czy rolnik tracił zarobek, gdy szedł na obrady. Dieta mu to wynagradzała.' },
        { id: '5i6ywc', q: 'Ku czci którego boga odbywały się igrzyska w Olimpii?', options: ['Zeusa', 'Posejdona', 'Dionizosa', 'Hadesa'], answer: 0, explain: 'Igrzyska olimpijskie urządzano ku czci Zeusa, władcy bogów. Ku czci Dionizosa wystawiano przedstawienia teatralne.' },
        { id: 'kjsj0v', q: 'Kiedy według źródeł rozegrano pierwsze igrzyska olimpijskie?', options: ['w 776 r. p.n.e.', 'w 776 r. n.e.', 'w 1410 r.', 'w 44 r. p.n.e.'], answer: 0, explain: 'Pierwsze igrzyska olimpijskie odbyły się w 776 r. p.n.e. To VIII wiek p.n.e.' },
        { id: 'kzye3x', q: 'Co ile lat odbywały się igrzyska w Olimpii?', options: ['co 4 lata', 'co roku', 'co 10 lat', 'co 100 lat'], answer: 0, explain: 'Igrzyska odbywały się co cztery lata – tak jak dzisiejsze igrzyska olimpijskie.' },
        { id: '1kxu2w', q: 'Który z tych opisów pasuje do teatru w starożytnej Grecji?', options: ['przedstawienia pod gołym niebem, aktorzy w maskach', 'kino z ekranem i fotelami', 'aktorki grały wszystkie role kobiet', 'przedstawienia tylko w zimie, w krytych salach'], answer: 0, explain: 'Grano pod gołym niebem, a wszystkie role grali mężczyźni w maskach.' },
        { id: '11pf5e', q: 'Poważna, smutna sztuka teatralna to…', options: ['tragedia', 'komedia', 'agora', 'mit'], answer: 0, explain: 'Grecy wystawiali tragedie (poważne) i komedie (zabawne).' },
        { id: '7clvzc', q: 'Co oznacza słowo „filozofia”?', options: ['umiłowanie mądrości', 'władzę ludu', 'opowieść o bogach', 'miasto-państwo'], answer: 0, explain: 'Filozofowie szukali mądrości i prawdy, zadając pytania i rozumując.' },
        { id: 'ep9qcp', q: 'Który filozof mawiał: „Wiem, że nic nie wiem”?', options: ['Sokrates', 'Perykles', 'Zeus', 'Juliusz Cezar'], answer: 0, explain: 'Sokrates rozmawiał z ludźmi na ulicach Aten. Jego uczniem był Platon, a uczniem Platona – Arystoteles.' },
        { id: '9dk53i', q: 'Gdzie według Greków mieszkali bogowie?', options: ['na górze Olimp', 'na Akropolu', 'w Olimpii', 'nad Nilem'], answer: 0, explain: 'Bogowie mieszkali na Olimpie. Olimpia to inne miejsce – tam odbywały się igrzyska. Nie pomyl ich!' },
        { id: 'iu2wxt', q: 'Który grecki bóg panował nad morzami?', options: ['Posejdon', 'Hades', 'Apollo', 'Zeus'], answer: 0, explain: 'Posejdon władał morzami i trójzębem wzburzał fale. Hades rządził krainą umarłych.' },
        { id: 'k65v7l', q: 'Prawda czy fałsz?\nW Atenach kobiety mogły głosować na Zgromadzeniu Ludowym.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Kobiety, niewolnicy i cudzoziemcy nie mieli w Atenach prawa głosu.' },
        { id: 'y2n3kb', q: 'Prawda czy fałsz?\nSłowo „alfabet” pochodzi od nazw dwóch pierwszych liter greckich: alfa i beta.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Alfa + beta = alfabet. To jedno z wielu słów, które zawdzięczamy Grekom.' },
      ],
    },
    {
      id: 'rzym',
      name: 'Dziedzictwo starożytnego Rzymu',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 7 „Dziedzictwo starożytnego Rzymu”, wym. 1 (społeczeństwo Rzymu w czasach Juliusza Cezara: cesarstwo, niewolnicy, obywatele), wym. 2 (położenie Rzymu, największy zasięg cesarstwa, zasięg cywilizacji rzymskiej na mapie współczesnego świata), wym. 3 (osiągnięcia: akwedukt, amfiteatr, cesarstwo, łacina, łuk triumfalny, prawo rzymskie, republika i ich wpływ na Europę – moduł kultura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl, lekcje „Rzym – od osady do imperium”, „Osiągnięcia starożytnych Rzymian”, „Społeczeństwo Rzymu”) i w serwisie imperiumromanum.pl (Oktawian jako spadkobierca Cezara, tytuł August w 27 r. p.n.e., pochodzenie słowa „cesarz”, największy zasięg państwa za Trajana). Daty 753 i 509 r. p.n.e. to daty tradycyjne (według rzymskich przekazów).',
      theory: `
        <h3>Miasto nad Tybrem</h3>
        <p>Rzym leży na <b>Półwyspie Apenińskim</b> (w starożytności nazywanym <b>Italią</b> – dziś to Włochy), nad rzeką <b>Tyber</b>. Powstał z osad na siedmiu wzgórzach.</p>
        <p>Według <b>legendy</b> Rzym założyli bliźniacy <b>Romulus i Remus</b>, których jako niemowlęta wykarmiła <b>wilczyca</b>. Tradycja podaje datę <b>753 r. p.n.e.</b> Od imienia Romulusa pochodzi nazwa miasta – <i>Roma</i>. Wilczyca stała się symbolem Rzymu.</p>
        <h3>Królestwo, republika, cesarstwo</h3>
        <table>
          <tr><th>Okres</th><th>Kto rządził?</th></tr>
          <tr><td><b>królestwo</b> (do ok. 509 r. p.n.e.)</td><td>królowie; ostatniego mieszkańcy wypędzili</td></tr>
          <tr><td><b>republika</b> (509–27 r. p.n.e.)</td><td>urzędnicy wybierani na rok przez obywateli; najważniejsi byli dwaj <b>konsulowie</b></td></tr>
          <tr><td><b>cesarstwo</b> (od 27 r. p.n.e.)</td><td><b>cesarz</b> – jeden władca z ogromną władzą</td></tr>
        </table>
        <p><b>Republika</b> to łacińskie słowo: „rzecz publiczna”, czyli sprawa wszystkich obywateli. Dziś Polska też jest republiką – Rzecząpospolitą.</p>
        <h3>Juliusz Cezar</h3>
        <p><b>Juliusz Cezar</b> żył w <b>I wieku p.n.e.</b> Był zdolnym wodzem i politykiem. Został konsulem i podbił dla Rzymu <b>Galię</b> (m.in. dzisiejszą Francję). Z pomocą wojska stał się najważniejszą osobą w państwie – <b>dyktatorem</b>, czyli człowiekiem z pełnią władzy. W <b>44 r. p.n.e.</b> zamordowali go przeciwnicy polityczni.</p>
        <p>Po wojnie domowej władzę zdobył <b>Oktawian</b> – krewny Cezara, którego Cezar w testamencie uczynił swoim następcą. W 27 r. p.n.e. dostał tytuł <b>August</b> i został <b>pierwszym cesarzem</b>. Od przydomka Cezar pochodzi polskie słowo <b>„cesarz”</b>.</p>
        <h3>Obywatele i niewolnicy</h3>
        <ul>
          <li><b>Obywatele rzymscy</b> mieli prawa: mężczyźni mogli głosować i zostawać urzędnikami. Kobiety też były obywatelkami, ale nie mogły głosować ani pełnić urzędów.</li>
          <li><b>Niewolnicy</b> nie mieli żadnych praw – według prawa byli własnością pana, jak rzecz. Najczęściej byli to <b>jeńcy wojenni</b>. Pracowali na polach, w domach, w warsztatach. Niektórzy zostawali wyzwoleni (stawali się <b>wyzwoleńcami</b>).</li>
        </ul>
        <p>W I wieku n.e. Rzym był jednym z największych miast świata – mieszkało w nim ok. miliona ludzi. Życie toczyło się na <b>forum</b> – głównym placu miasta.</p>
        <h3>Imperium wokół morza</h3>
        <p>Rzymianie podbili najpierw Italię, a potem prawie wszystkie krainy wokół <b>Morza Śródziemnego</b> – nazywali je „naszym morzem”. Ich państwo to <b>imperium rzymskie</b>. Najwięcej ziem miało za cesarza <b>Trajana</b>, na początku II wieku n.e.</p>
        <p>Na dzisiejszej mapie dawne ziemie rzymskie to m.in. Włochy, Hiszpania, Portugalia, Francja, Grecja, Turcja, Egipt i część Wielkiej Brytanii. Zachodnia część cesarstwa upadła w 476 r. n.e.</p>
        <h3>Co zostawili nam Rzymianie?</h3>
        <table>
          <tr><th>Osiągnięcie</th><th>Co to jest?</th></tr>
          <tr><td><b>akwedukt</b></td><td>most z kanałem, którym płynęła woda ze źródeł w górach do miasta; niektóre stoją do dziś</td></tr>
          <tr><td><b>amfiteatr</b></td><td>owalna budowla z areną i trybunami dookoła; odbywały się tam walki <b>gladiatorów</b> (wyszkolonych wojowników). Najsłynniejszy – <b>Koloseum</b> w Rzymie</td></tr>
          <tr><td><b>łuk triumfalny</b></td><td>wielka ozdobna brama zbudowana na pamiątkę zwycięstwa; naśladowano ją później, np. Łuk Triumfalny w Paryżu</td></tr>
          <tr><td><b>beton</b></td><td>wynalazek Rzymian – dzięki niemu budowali łuki, kopuły i ogromne gmachy</td></tr>
          <tr><td><b>łacina</b></td><td>język Rzymian; wywodzą się z niej m.in. języki włoski, francuski, hiszpański, portugalski i rumuński; litery łacińskie to nasz alfabet</td></tr>
          <tr><td><b>prawo rzymskie</b></td><td>spisane zasady prawa (już w V w. p.n.e. – Prawo XII Tablic na forum); wiele dzisiejszych zasad prawa pochodzi z prawa rzymskiego, np. że trzeba wysłuchać obu stron sporu</td></tr>
        </table>
        <div class="tip">💡 Rzymianie czcili wielu bogów podobnych do greckich, ale pod innymi imionami: Zeus = <b>Jowisz</b>, Posejdon = <b>Neptun</b>, Afrodyta = <b>Wenus</b>. Imiona rzymskich bogów noszą dziś niektóre planety: Jowisz, Neptun, Wenus.</div>
      `,
      flashcards: [
        ['Położenie Rzymu', 'Półwysep Apeniński (Italia), nad rzeką Tyber'],
        ['Legenda o założeniu Rzymu', 'Romulus i Remus, wykarmieni przez wilczycę; tradycyjna data: 753 r. p.n.e.'],
        ['Republika', '„Rzecz publiczna”; urzędnicy wybierani na rok, na czele dwaj konsulowie'],
        ['Cesarstwo', 'Państwo rządzone przez cesarza (w Rzymie od 27 r. p.n.e.)'],
        ['Juliusz Cezar', 'Wódz i polityk z I w. p.n.e.; podbił Galię, został dyktatorem, zamordowany w 44 r. p.n.e.'],
        ['Pierwszy cesarz rzymski', 'Oktawian August (od 27 r. p.n.e.)'],
        ['Obywatel rzymski', 'Osoba z prawami obywatelskimi; mężczyźni mogli głosować i pełnić urzędy'],
        ['Niewolnik w Rzymie', 'Człowiek bez praw, własność pana; najczęściej jeniec wojenny'],
        ['Akwedukt', 'Most z kanałem doprowadzający wodę do miasta'],
        ['Amfiteatr', 'Budowla z areną i trybunami dookoła, np. Koloseum; walki gladiatorów'],
        ['Łuk triumfalny', 'Ozdobna brama na pamiątkę zwycięstwa'],
        ['Łacina', 'Język Rzymian; z niej m.in. włoski, francuski, hiszpański; nasz alfabet jest łaciński'],
        ['Prawo rzymskie', 'Podstawa wielu zasad dzisiejszego prawa w Europie'],
      ],
      questions: [
        { id: '15h1ut', q: 'Nad jaką rzeką leży Rzym?', options: ['nad Tybrem', 'nad Nilem', 'nad Wisłą', 'nad Eufratem'], answer: 0, explain: 'Rzym leży nad Tybrem na Półwyspie Apenińskim. Nad Nilem leży Egipt, a nad Eufratem – Mezopotamia.' },
        { id: 'n7obxe', q: 'Na jakim półwyspie leży Rzym?', options: ['na Apenińskim', 'na Bałkańskim', 'na Helskim', 'na Skandynawskim'], answer: 0, explain: 'Rzymianie nazywali Półwysep Apeniński Italią. Na Półwyspie Bałkańskim leży Grecja.' },
        { id: 'f9zqua', q: 'Kto według legendy założył Rzym?', options: ['Romulus i Remus', 'Perykles i Sokrates', 'Cheops i Chefren', 'Zeus i Hera'], answer: 0, explain: 'Bliźniaków Romulusa i Remusa wykarmiła wilczyca. Tradycja podaje rok 753 p.n.e.' },
        { id: '5p8smf', q: 'Co oznacza słowo „republika”?', options: ['rzecz publiczną – sprawę wszystkich obywateli', 'władzę jednego cesarza', 'umiłowanie mądrości', 'most z kanałem na wodę'], answer: 0, explain: 'W republice rządzili urzędnicy wybierani przez obywateli na rok.' },
        { id: '9up4b9', q: 'Kto był najwyższym urzędnikiem w republice rzymskiej?', options: ['konsul (wybierano dwóch na rok)', 'faraon', 'strateg', 'cesarz'], answer: 0, explain: 'W republice wybierano co roku dwóch konsulów. Cesarze rządzili dopiero w okresie cesarstwa.' },
        { id: 'yl8jpo', q: 'Jaką krainę podbił dla Rzymu Juliusz Cezar?', options: ['Galię', 'Chiny', 'Skandynawię', 'Amerykę'], answer: 0, explain: 'Cezar podbił Galię – tereny m.in. dzisiejszej Francji.' },
        { id: 'n8h7p0', q: 'W którym roku zamordowano Juliusza Cezara?', options: ['44 r. p.n.e.', '44 r. n.e.', '753 r. p.n.e.', '476 r. n.e.'], answer: 0, explain: 'Cezar zginął w 44 r. p.n.e. z rąk przeciwników politycznych.' },
        { id: '8ww8r2', q: 'Kto został pierwszym cesarzem rzymskim?', options: ['Oktawian August', 'Juliusz Cezar', 'Romulus', 'Trajan'], answer: 0, explain: 'Juliusz Cezar był dyktatorem, ale nie cesarzem. Pierwszym cesarzem został jego następca Oktawian, który w 27 r. p.n.e. dostał tytuł August.' },
        { id: 'yea8cl', q: 'Od czyjego przydomka pochodzi polskie słowo „cesarz”?', options: ['Juliusza Cezara', 'Peryklesa', 'Romulusa', 'Cheopsa'], answer: 0, explain: 'Przydomek Cezar przyjmowali kolejni władcy Rzymu – stąd słowo „cesarz”.' },
        { id: 'etl4bl', q: 'Kim najczęściej byli niewolnicy w starożytnym Rzymie?', options: ['jeńcami wojennymi', 'konsulami', 'senatorami', 'obywatelami, którzy wygrali wybory'], answer: 0, explain: 'Rzymianie zabierali do niewoli pokonanych wrogów. Niewolnicy nie mieli żadnych praw.' },
        { id: 'cn79sq', q: 'Jak prawo rzymskie traktowało niewolnika?', options: ['jak własność pana, bez żadnych praw', 'jak obywatela z prawem głosu', 'jak urzędnika państwowego', 'jak cesarza'], answer: 0, explain: 'Niewolnik był własnością – mógł go kupić i sprzedać pan. Niektórzy zostawali wyzwoleni.' },
        { id: '59kpuh', q: 'Wokół jakiego morza leżały ziemie imperium rzymskiego?', options: ['Morza Śródziemnego', 'Morza Bałtyckiego', 'Morza Północnego', 'Morza Karaibskiego'], answer: 0, explain: 'Rzymianie podbili prawie wszystkie krainy wokół Morza Śródziemnego i nazywali je „naszym morzem”.' },
        { id: 'idau33', q: 'Do czego służył akwedukt?', options: ['do doprowadzania wody do miasta', 'do walk gladiatorów', 'do świętowania zwycięstw', 'do chowania cesarzy'], answer: 0, explain: 'Akwedukt to most z kanałem – woda płynęła nim ze źródeł w górach do miasta.' },
        { id: 'dvqk5z', q: 'Jak nazywa się budowla z areną i trybunami dookoła, np. Koloseum?', options: ['amfiteatr', 'akwedukt', 'łuk triumfalny', 'piramida'], answer: 0, explain: 'W amfiteatrach odbywały się walki gladiatorów. Najsłynniejszy to Koloseum w Rzymie.' },
        { id: 'ockk5w', q: 'Na pamiątkę czego budowano łuki triumfalne?', options: ['zwycięstwa', 'pożaru miasta', 'narodzin niewolnika', 'wylewu rzeki'], answer: 0, explain: 'Łuk triumfalny to ozdobna brama upamiętniająca zwycięstwo. Rzymian naśladowano później, np. w Paryżu.' },
        { id: 'q6f3q1', q: 'Który język NIE wywodzi się z łaciny?', options: ['polski', 'włoski', 'francuski', 'hiszpański'], answer: 0, explain: 'Włoski, francuski, hiszpański, portugalski i rumuński wywodzą się z łaciny. Polski nie – ale piszemy alfabetem łacińskim.' },
        { id: '8nek9a', q: 'Która zasada dzisiejszego prawa pochodzi z prawa rzymskiego?', options: ['trzeba wysłuchać obu stron sporu', 'kto silniejszy, ten ma rację', 'wyrok wydaje się bez słuchania stron', 'sędzią zostaje ten, kto wygra wyścig rydwanów'], answer: 0, explain: 'Wiele zasad prawa w Europie opiera się na prawie rzymskim, np. ta, że trzeba wysłuchać obu stron.' },
        { id: '78znal', q: 'Prawda czy fałsz?\nPolskie litery to alfabet łaciński – zawdzięczamy go starożytnym Rzymianom.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Kształt naszych liter zawdzięczamy Rzymianom. Od ich języka, łaciny, alfabet nazywa się łacińskim.' },
        { id: 'rngm4l', q: 'Prawda czy fałsz?\nJuliusz Cezar był pierwszym cesarzem rzymskim.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Cezar był konsulem i dyktatorem. Pierwszym cesarzem został Oktawian August.' },
        { id: '1tarw4', q: 'Ułóż chronologicznie (od najdawniejszego): śmierć Juliusza Cezara (44 r. p.n.e.), założenie Rzymu według legendy (753 r. p.n.e.), upadek cesarstwa zachodniego (476 r. n.e.).', options: ['753 p.n.e., 44 p.n.e., 476 n.e.', '44 p.n.e., 753 p.n.e., 476 n.e.', '476 n.e., 44 p.n.e., 753 p.n.e.', '753 p.n.e., 476 n.e., 44 p.n.e.'], answer: 0, explain: 'W latach p.n.e. większa liczba to dawniej: 753 p.n.e. → 44 p.n.e. Lata n.e. są później: 476 n.e.' },
      ],
    },
  ],
});
