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
    {
      id: 'chrzescijanstwo',
      name: 'Narodziny chrześcijaństwa',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 8 „Narodziny chrześcijaństwa”, wym. 1 (założenia religii chrześcijańskiej: dekalog, judaizm, Mesjasz, monoteizm – moduł kultura), wym. 2 (wiek powstania chrześcijaństwa i uznania go za religię panującą w Rzymie oraz znaczenie tych wydarzeń), wym. 3 (miejsce narodzin i kierunki rozprzestrzenienia się chrześcijaństwa w imperium rzymskim na mapie), wym. 4 (powody przyjmowania chrześcijaństwa przez różne grupy społeczne, wpływ chrześcijaństwa na współczesną Europę). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Dział opisuje chrześcijaństwo jako zjawisko historyczne – z perspektywy historyka, bez treści katechetycznych (aplikacja nie obejmuje religii ani etyki – decyzja rodzica). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Narodziny i rozwój chrześcijaństwa”, „Początki chrześcijaństwa”, „Starożytny Izrael”, słowniczek „dekalog”) i w serwisie imperiumromanum.pl („Chrześcijanie wobec cesarstwa rzymskiego”, „Edykt mediolański”, „Teodozjusz I Wielki”): Palestyna jako prowincja rzymska, Poncjusz Piłat, Paweł z Tarsu, Neron i pożar Rzymu (64 r.), sprzeciw chrześcijan wobec kultu cesarza, katakumby, edykt mediolański (313 r. – wolność wyznania), edykt Teodozjusza (380 r.; część źródeł wiąże ten krok z 381 r., dlatego pytania dotyczą wieku – IV w.), miasta z dużymi gminami chrześcijańskimi (Antiochia, Efez, Aleksandria, Kartagina, Rzym). Daty narodzin i śmierci Jezusa pominięto – źródła podają je tylko w przybliżeniu.',
      theory: `
        <h3>Judaizm – wiara w jednego Boga</h3>
        <p>W starożytnej <b>Palestynie</b>, nad wschodnim brzegiem Morza Śródziemnego, mieszkali <b>Żydzi</b>. Ich religia to <b>judaizm</b>.</p>
        <ul>
          <li>Żydzi wierzyli w <b>jednego Boga</b>. Wiarę w jednego Boga nazywamy <b>monoteizmem</b>. Egipcjanie, Grecy i Rzymianie wierzyli w wielu bogów – to <b>politeizm</b>.</li>
          <li>Według Biblii Mojżesz otrzymał od Boga na górze <b>Synaj</b> kamienne tablice z <b>dekalogiem</b>, czyli <b>dziesięcioma przykazaniami</b> – zasadami, jak żyć. Są wśród nich takie, które znasz też z prawa, np. „nie zabijaj” i „nie kradnij”.</li>
          <li>Żydzi oczekiwali <b>Mesjasza</b> – wysłannika Boga. Słowo „Mesjasz” pochodzi z hebrajskiego i znaczy „namaszczony”. Po grecku to samo słowo brzmi <b>„Chrystus”</b>.</li>
        </ul>
        <h3>Jezus z Nazaretu i pierwsi chrześcijanie</h3>
        <p>W <b>I wieku n.e.</b> Palestyna była prowincją (częścią) imperium rzymskiego. Działał tam <b>Jezus z Nazaretu</b> – żydowski nauczyciel. Jego uczniowie uznali, że to on jest Mesjaszem – Chrystusem. Od tego słowa wyznawców Jezusa nazwano <b>chrześcijanami</b>. Najbliższych uczniów Jezusa nazywamy <b>apostołami</b>.</p>
        <p>Jezus został ukrzyżowany z rozkazu rzymskiego namiestnika <b>Poncjusza Piłata</b>. Jego uczniowie głosili, że zmartwychwstał. O życiu i nauce Jezusa opowiadają cztery <b>Ewangelie</b>, które są częścią Biblii chrześcijan.</p>
        <h3>W co wierzą chrześcijanie? (najważniejsze założenia)</h3>
        <table>
          <tr><th>Założenie</th><th>Skąd się wzięło?</th></tr>
          <tr><td>jeden Bóg (<b>monoteizm</b>)</td><td>z judaizmu</td></tr>
          <tr><td>przestrzeganie <b>dekalogu</b></td><td>z judaizmu</td></tr>
          <tr><td>Jezus jest <b>Mesjaszem</b> (Chrystusem)</td><td>to odróżnia chrześcijan od wyznawców judaizmu</td></tr>
          <tr><td>miłość bliźniego – trzeba pomagać innym, zwłaszcza ubogim i chorym</td><td>z nauki Jezusa</td></tr>
          <tr><td>wszyscy ludzie są <b>równi wobec Boga</b>: bogaty i biedny, wolny i niewolnik</td><td>z nauki Jezusa i apostołów</td></tr>
          <tr><td>życie wieczne po śmierci</td><td>z nauki Jezusa</td></tr>
        </table>
        <div class="tip">💡 Chrześcijaństwo <b>wyrosło z judaizmu</b> – przejęło od niego wiarę w jednego Boga i dekalog.</div>
        <h3>Jak chrześcijaństwo się rozprzestrzeniało?</h3>
        <p>Chrześcijaństwo narodziło się w <b>Palestynie</b>. Uczniowie Jezusa wędrowali rzymskimi drogami i płynęli statkami po Morzu Śródziemnym do wielkich miast imperium. Szczególnie dużo podróżował <b>Paweł z Tarsu</b>. Wcześniej prześladował wyznawców Jezusa, a potem sam został chrześcijaninem i głosił nową wiarę także ludziom, którzy nie byli Żydami.</p>
        <ul>
          <li><b>Kierunki</b>: z Palestyny na północ (Syria – Antiochia), na zachód (Azja Mniejsza – Efez, Grecja, Italia – Rzym), na południe (Egipt – Aleksandria) i do północnej Afryki (Kartagina).</li>
          <li>Najpierw i najszybciej nowa wiara docierała do <b>dużych miast</b> połączonych drogami. Na wsiach przyjmowano ją znacznie później.</li>
        </ul>
        <h3>Prześladowania</h3>
        <p>Chrześcijanie nie chcieli oddawać czci rzymskim bogom ani cesarzowi. Dlatego wielu Rzymian uważało ich za wrogów państwa. Cesarz <b>Neron</b> obwinił chrześcijan o wielki <b>pożar Rzymu w 64 r.</b> – wielu z nich zginęło. Później chrześcijan prześladowano jeszcze wiele razy.</p>
        <ul>
          <li>Chrześcijanie spotykali się w domach, często w ukryciu.</li>
          <li>Zmarłych chowali m.in. w <b>katakumbach</b> – podziemnych cmentarzach. Na ich ścianach zachowały się malowidła.</li>
          <li>Jednym ze znaków chrześcijan była <b>ryba</b>. Po grecku „ryba” to <i>ichthys</i>. Te litery to początki greckich słów: Jezus Chrystus, Syn Boży, Zbawiciel.</li>
        </ul>
        <h3>Od zakazu do religii panującej</h3>
        <table>
          <tr><th>Kiedy?</th><th>Co się stało?</th></tr>
          <tr><td><b>I w. n.e.</b></td><td>powstanie chrześcijaństwa w Palestynie</td></tr>
          <tr><td>64 r.</td><td>Neron obwinia chrześcijan o pożar Rzymu – prześladowania</td></tr>
          <tr><td><b>313 r.</b></td><td><b>edykt mediolański</b>: cesarz <b>Konstantyn Wielki</b> (razem z drugim cesarzem, Licyniuszem) daje <b>wolność wyznania</b> – chrześcijanie mogą otwarcie wyznawać swoją wiarę</td></tr>
          <tr><td><b>380 r.</b> (IV w.)</td><td>cesarz <b>Teodozjusz Wielki</b> ogłasza chrześcijaństwo <b>religią panującą</b> (państwową) w cesarstwie</td></tr>
        </table>
        <p><b>Edykt</b> to zarządzenie władcy. Pod koniec IV wieku Teodozjusz zakazał też oddawania czci dawnym rzymskim bogom.</p>
        <p><b>Znaczenie</b>: w ciągu niecałych 400 lat chrześcijaństwo zmieniło się z małej, prześladowanej grupy w religię całego imperium. Dzięki temu później stało się religią większości mieszkańców Europy.</p>
        <h3>Kto przyjmował chrześcijaństwo i dlaczego?</h3>
        <table>
          <tr><th>Kto?</th><th>Dlaczego?</th></tr>
          <tr><td><b>ubodzy i niewolnicy</b></td><td>nauka, że wszyscy ludzie są równi wobec Boga; nadzieja na życie wieczne; wspólnota chrześcijan pomagała biednym i chorym</td></tr>
          <tr><td><b>mieszkańcy miast</b> (rzemieślnicy, kupcy)</td><td>nowa wiara docierała najpierw do miast; dawała poczucie wspólnoty i bezpieczeństwa</td></tr>
          <tr><td><b>bogaci i urzędnicy</b></td><td>szczególnie po 313 r., gdy chrześcijaństwo zaczęli wspierać cesarze</td></tr>
        </table>
        <p>Nowa religia była dla każdego – bez względu na pochodzenie, majątek i to, czy ktoś był wolny.</p>
        <h3>Ślady chrześcijaństwa w dzisiejszej Europie</h3>
        <ul>
          <li>Lata liczymy od umownej daty narodzin Jezusa – stąd <b>nasza era</b> (n.e.).</li>
          <li><b>Boże Narodzenie</b> i <b>Wielkanoc</b> to dni wolne w wielu krajach Europy, a <b>niedziela</b> jest dniem odpoczynku.</li>
          <li>Kościoły i katedry to często najstarsze zabytki miast.</li>
          <li>Zasady z dekalogu (np. „nie zabijaj”, „nie kradnij”) i pomoc potrzebującym są obecne w prawie i zwyczajach.</li>
        </ul>
      `,
      flashcards: [
        ['Judaizm', 'Religia Żydów – wiara w jednego Boga; z judaizmu wyrosło chrześcijaństwo'],
        ['Monoteizm', 'Wiara w jednego Boga (przeciwieństwo: politeizm – wiara w wielu bogów)'],
        ['Dekalog', 'Dziesięć przykazań; według Biblii Mojżesz otrzymał je na górze Synaj'],
        ['Mesjasz', 'Wysłannik Boga, którego oczekiwali Żydzi; po grecku: Chrystus („namaszczony”)'],
        ['Gdzie narodziło się chrześcijaństwo?', 'W Palestynie – prowincji rzymskiej nad wschodnim brzegiem Morza Śródziemnego'],
        ['Kiedy powstało chrześcijaństwo?', 'W I wieku n.e.'],
        ['Apostołowie', 'Najbliżsi uczniowie Jezusa, którzy głosili jego naukę'],
        ['Paweł z Tarsu', 'Głosił naukę Jezusa także tym, którzy nie byli Żydami; dużo podróżował po imperium'],
        ['Prześladowania chrześcijan', 'Neron obwinił chrześcijan o pożar Rzymu (64 r.); chrześcijanie spotykali się w ukryciu'],
        ['Katakumby', 'Podziemne cmentarze, m.in. w Rzymie – chowano w nich pierwszych chrześcijan'],
        ['313 r. – edykt mediolański', 'Cesarz Konstantyn Wielki daje wolność wyznania – chrześcijanie mogą otwarcie wyznawać wiarę'],
        ['380 r. – cesarz Teodozjusz Wielki', 'Chrześcijaństwo religią panującą w cesarstwie rzymskim (IV w.)'],
        ['Dlaczego ubodzy i niewolnicy przyjmowali chrześcijaństwo?', 'Nauka o równości ludzi wobec Boga, nadzieja na życie wieczne, pomoc we wspólnocie'],
        ['Ślady chrześcijaństwa w Europie', 'Liczenie lat (n.e.), niedziela, Boże Narodzenie i Wielkanoc, kościoły-zabytki'],
      ],
      questions: [
        { id: '77a0w9', q: 'Jak nazywa się religia Żydów, z której wyrosło chrześcijaństwo?', options: ['judaizm', 'politeizm', 'mitologia', 'filozofia'], answer: 0, explain: 'Religia Żydów to judaizm. Chrześcijaństwo przejęło od niego wiarę w jednego Boga i dekalog.' },
        { id: 'ibfuf6', q: 'Co oznacza słowo „monoteizm”?', options: ['wiarę w wielu bogów', 'wiarę w jednego Boga', 'władzę ludu', 'pismo obrazkowe'], answer: 1, explain: 'Monoteizm to wiara w jednego Boga (judaizm, chrześcijaństwo). Wiara w wielu bogów to politeizm.' },
        { id: 'krnkfc', q: 'Czym jest dekalog?', options: ['listą rzymskich cesarzy', 'mapą Palestyny', 'dziesięcioma przykazaniami', 'greckim teatrem'], answer: 2, explain: 'Dekalog to dziesięć przykazań. Według Biblii Mojżesz otrzymał je na górze Synaj. Przyjęli je też chrześcijanie.' },
        { id: 'zekiwo', q: 'Kim był Mesjasz, którego oczekiwali Żydzi?', options: ['rzymskim cesarzem', 'wysłannikiem Boga', 'greckim filozofem', 'egipskim faraonem'], answer: 1, explain: 'Mesjasz to oczekiwany wysłannik Boga. Uczniowie Jezusa uznali, że to on jest Mesjaszem.' },
        { id: '6fi0ci', q: 'Co oznacza greckie słowo „Chrystus”?', options: ['to samo co Mesjasz – „namaszczony”', '„umiłowanie mądrości”', '„władza ludu”', '„rzecz publiczna”'], answer: 0, explain: '„Mesjasz” (z hebrajskiego) i „Chrystus” (z greckiego) znaczą to samo: „namaszczony”. Od słowa Chrystus pochodzi nazwa „chrześcijanie”.' },
        { id: 'yz2vjj', q: 'W której krainie narodziło się chrześcijaństwo?', options: ['w Galii', 'w Grecji', 'w Egipcie', 'w Palestynie'], answer: 3, explain: 'Chrześcijaństwo narodziło się w Palestynie, która była wtedy prowincją imperium rzymskiego. Do Grecji i Egiptu dotarło później.' },
        { id: 'z6bzbk', q: 'W którym wieku powstało chrześcijaństwo?', options: ['w I w. n.e.', 'w I w. p.n.e.', 'w IV w. n.e.', 'w X w.'], answer: 0, explain: 'Chrześcijaństwo powstało w I wieku naszej ery. W IV wieku stało się religią panującą w cesarstwie.' },
        { id: 'feulth', q: 'Jak nazywamy najbliższych uczniów Jezusa?', options: ['konsulowie', 'apostołowie', 'faraonowie', 'filozofowie'], answer: 1, explain: 'Najbliżsi uczniowie Jezusa to apostołowie. Po jego śmierci głosili jego naukę.' },
        { id: 'xslhfd', q: 'Który cesarz obwinił chrześcijan o pożar Rzymu w 64 r. i zaczął ich prześladować?', options: ['Konstantyn Wielki', 'Teodozjusz Wielki', 'Neron', 'Oktawian August'], answer: 2, explain: 'Neron obwinił chrześcijan o pożar Rzymu. Konstantyn i Teodozjusz – przeciwnie – wspierali chrześcijaństwo.' },
        { id: 'ggjtco', q: 'Dlaczego Rzymianie prześladowali chrześcijan?', options: ['bo chrześcijanie nie chcieli oddawać czci rzymskim bogom i cesarzowi', 'bo chrześcijanie mówili po łacinie', 'bo chrześcijanie nie płacili za wodę z akweduktów', 'bo chrześcijanie wygrywali igrzyska'], answer: 0, explain: 'Odmowę oddawania czci bogom i cesarzowi wielu Rzymian uważało za wrogość wobec państwa.' },
        { id: '1wfr6g', q: 'Czym były katakumby?', options: ['rzymskimi łaźniami', 'podziemnymi cmentarzami', 'greckimi teatrami', 'świątyniami Zeusa'], answer: 1, explain: 'Katakumby to podziemne cmentarze, m.in. w Rzymie. Chowano w nich pierwszych chrześcijan.' },
        { id: 'ngdptu', q: 'Co dał chrześcijanom edykt mediolański z 313 r.?', options: ['obowiązek czczenia cesarza', 'zakaz budowania kościołów', 'wolność wyznawania swojej wiary', 'prawo wyboru konsulów'], answer: 2, explain: 'Edykt mediolański cesarza Konstantyna Wielkiego dał wolność wyznania – chrześcijanie mogli otwarcie wyznawać wiarę.' },
        { id: 'x6t2rz', q: 'W którym wieku chrześcijaństwo stało się religią panującą w cesarstwie rzymskim?', options: ['w I w. n.e.', 'w I w. p.n.e.', 'w X w.', 'w IV w. n.e.'], answer: 3, explain: 'Zrobił to cesarz Teodozjusz Wielki w 380 r. 380 → 3 + 1 = 4, czyli IV wiek.' },
        { id: 'r5224z', q: 'Który cesarz ogłosił chrześcijaństwo religią panującą w cesarstwie?', options: ['Teodozjusz Wielki', 'Neron', 'Juliusz Cezar', 'Trajan'], answer: 0, explain: 'Teodozjusz Wielki zrobił to w 380 r. Neron prześladował chrześcijan, a Cezar i Trajan żyli, zanim chrześcijaństwo stało się religią panującą.' },
        { id: 'pyob9t', q: 'Dlaczego wielu ubogich i niewolników przyjmowało chrześcijaństwo?', options: ['bo zmuszał ich do tego Neron', 'bo chrześcijaństwo obiecywało im urząd konsula', 'bo chrześcijanie uczyli, że wszyscy ludzie są równi wobec Boga, i pomagali potrzebującym', 'bo chrześcijanie rozdawali bilety na walki gladiatorów'], answer: 2, explain: 'Nauka o równości wszystkich wobec Boga, nadzieja na życie wieczne i pomoc we wspólnocie przyciągały ubogich i niewolników.' },
        {
          id: 'ltw09m',
          q: 'Na schemacie zachód jest po lewej, a wschód po prawej. Którą literą oznaczono Palestynę – miejsce narodzin chrześcijaństwa?',
          svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Schemat Morza Śródziemnego. Litera A na zachodnim krańcu, B na północnym brzegu pośrodku, C na wschodnim brzegu, D na południowym brzegu">
      <ellipse cx="180" cy="105" rx="140" ry="55" class="f1 s1 sw"/>
      <text x="180" y="100" class="tx" text-anchor="middle">Morze</text>
      <text x="180" y="120" class="tx" text-anchor="middle">Śródziemne</text>
      <circle cx="25" cy="105" r="14" class="f4 s4 sw"/>
      <text x="25" y="111" class="tx-b" text-anchor="middle">A</text>
      <circle cx="180" cy="32" r="14" class="f4 s4 sw"/>
      <text x="180" y="38" class="tx-b" text-anchor="middle">B</text>
      <circle cx="335" cy="105" r="14" class="f4 s4 sw"/>
      <text x="335" y="111" class="tx-b" text-anchor="middle">C</text>
      <circle cx="180" cy="178" r="14" class="f4 s4 sw"/>
      <text x="180" y="184" class="tx-b" text-anchor="middle">D</text>
      <text x="12" y="192" class="tx-s">← zachód</text>
      <text x="348" y="192" class="tx-s" text-anchor="end">wschód →</text>
    </svg>`,
          options: ['A', 'B', 'C', 'D'],
          noShuffle: true,
          answer: 2,
          explain: 'Palestyna leży na wschodnim brzegu Morza Śródziemnego – to litera C. Stamtąd chrześcijaństwo rozeszło się na zachód, aż do Rzymu.',
        },
        { id: '9cnorj', q: 'Który z tych zwyczajów to ślad chrześcijaństwa w dzisiejszej Europie?', options: ['igrzyska olimpijskie', 'liczenie lat od umownej daty narodzin Jezusa (n.e.)', 'pismo hieroglificzne', 'głosowanie na agorze'], answer: 1, explain: 'Naszą erę liczymy od umownej daty narodzin Jezusa. Igrzyska i agora to dziedzictwo Grecji, a hieroglify – Egiptu.' },
        { id: 'fvzuq6', q: 'Prawda czy fałsz?\nEdykt mediolański z 313 r. zakazał wyznawania wszystkich religii oprócz chrześcijaństwa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Edykt mediolański dał wolność wyznania. Kultu dawnych bogów zakazał dopiero cesarz Teodozjusz pod koniec IV wieku.' },
        { id: 'fx0ujo', q: 'Prawda czy fałsz?\nChrześcijaństwo wyrosło z judaizmu – przejęło od niego m.in. wiarę w jednego Boga i dekalog.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Jezus i apostołowie byli Żydami. Chrześcijanie przejęli od judaizmu wiarę w jednego Boga i dziesięć przykazań.' },
        { id: 'xw91t7', q: 'Ułóż chronologicznie (od najdawniejszego): edykt mediolański, chrześcijaństwo religią panującą (Teodozjusz), prześladowania za Nerona.', options: ['Neron (64) → edykt mediolański (313) → Teodozjusz (380)', 'edykt mediolański (313) → Neron (64) → Teodozjusz (380)', 'Teodozjusz (380) → edykt mediolański (313) → Neron (64)', 'Neron (64) → Teodozjusz (380) → edykt mediolański (313)'], answer: 0, explain: 'Wszystkie lata są n.e., więc mniejsza liczba to dawniej: 64 → 313 → 380.' },
      ],
    },
    {
      id: 'sredniowiecze',
      name: 'Średniowieczna Europa',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 9 „Średniowieczna Europa”, wym. 1 (wspólnoty społeczne w średniowieczu: chrześcijaństwo, monarchia, plemię, samorząd, senior, stan, wasal), wym. 2 (zasięg chrześcijaństwa we wczesnym i późnym średniowieczu na mapach), wym. 3 (warunki życia mieszkańców wsi, miast, zamków i klasztorów), wym. 4 (osiągnięcia: sztuka gotycka, sztuka romańska, uniwersytet i ich wpływ na współczesną Europę – moduł kultura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Społeczeństwo stanowe w średniowieczu”, ćwiczenie „Drabina feudalna”, „Kościół w średniowieczu”, „Architektura i plastyka romańska w Polsce”, „Witraż – obraz światłem malowany”, „Państwa plemienne na ziemiach polskich”), na stronach Uniwersytetu Jagiellońskiego (założenie w 1364 r. przez Kazimierza Wielkiego, odnowienie w 1400 r.) i w opracowaniach o chrzcie Rusi (988 – data tradycyjna) i Litwy (1387). Granice epoki (476–1492) są umowne. Na mapie zasięgu chrześcijaństwa podano tylko daty, co do których źródła są zgodne.',
      theory: `
        <h3>Średniowiecze – kiedy?</h3>
        <p><b>Średniowiecze</b> to epoka po starożytności. Umownie zaczyna się w <b>476 r.</b> (upadek zachodniej części cesarstwa rzymskiego), a kończy w <b>1492 r.</b> (Krzysztof Kolumb dopływa do Ameryki). Trwało więc ok. 1000 lat. Pierwsze wieki to <b>wczesne średniowiecze</b>, ostatnie (XIV–XV w.) – <b>późne średniowiecze</b>.</p>
        <h3>Wspólnoty ludzi w średniowieczu</h3>
        <table>
          <tr><th>Pojęcie</th><th>Co oznacza?</th></tr>
          <tr><td><b>plemię</b></td><td>wspólnota ludzi z jednego terenu, którzy mówią tym samym językiem i mają te same zwyczaje i wierzenia; ważne sprawy omawiali wolni mężczyźni na zebraniu zwanym <b>wiecem</b></td></tr>
          <tr><td><b>monarchia</b></td><td>państwo, którym rządzi jeden władca – <b>król</b> lub <b>książę</b>; władzę zwykle dziedziczył syn po ojcu</td></tr>
          <tr><td><b>chrześcijaństwo</b></td><td>wspólna wiara łączyła mieszkańców wielu krajów Europy; językiem Kościoła i nauki była <b>łacina</b></td></tr>
          <tr><td><b>stan</b></td><td>duża grupa ludzi o tych samych prawach i obowiązkach; do stanu zwykle się rodziło</td></tr>
          <tr><td><b>samorząd</b></td><td>mieszkańcy sami decydują o części swoich spraw, np. wybierają władze miasta</td></tr>
        </table>
        <h3>Senior i wasal</h3>
        <p>Król nie mógł sam rządzić ogromnym krajem i utrzymać wojska. Dlatego dawał ziemię – zwaną <b>lennem</b> – możnym ludziom. W zamian obiecywali mu <b>wierność</b> i <b>pomoc wojskową</b>. Uroczystą przysięgę wierności nazywano <b>hołdem lennym</b>.</p>
        <ul>
          <li><b>Senior</b> – ten, kto daje ziemię (po łacinie „senior” to „starszy”).</li>
          <li><b>Wasal</b> – ten, kto dostaje ziemię i służy seniorowi.</li>
          <li>Wasal mógł sam dać część ziemi rycerzom – wtedy był dla nich seniorem. Tak powstawała <b>drabina feudalna</b>: król → możni → rycerze.</li>
          <li><b>Chłopi</b> nie byli wasalami – pracowali na ziemi swoich panów.</li>
        </ul>
        <h3>Stany</h3>
        <table>
          <tr><th>Stan</th><th>Zadanie</th></tr>
          <tr><td><b>duchowieństwo</b> (księża, biskupi, mnisi)</td><td>modlitwa, opieka nad kościołami, nauka</td></tr>
          <tr><td><b>rycerstwo</b></td><td>walka konno i obrona kraju; w zamian ziemia</td></tr>
          <tr><td><b>mieszczanie</b></td><td>rzemiosło i handel w miastach</td></tr>
          <tr><td><b>chłopi</b> – stan <b>najliczniejszy</b></td><td>uprawa ziemi; oddawali panu część plonów (daniny) lub pracowali na jego polu</td></tr>
        </table>
        <div class="tip">💡 W średniowieczu mówiono: jedni się <b>modlą</b> (duchowni), drudzy <b>walczą</b> (rycerze), a trzeci <b>pracują</b>, żeby wszystkich wyżywić.</div>
        <h3>Jak żyli ludzie? Wieś, miasto, zamek, klasztor</h3>
        <table>
          <tr><th>Gdzie?</th><th>Jak tam żyli ludzie?</th></tr>
          <tr><td><b>wieś</b></td><td>mieszkała tu większość ludzi – chłopi; drewniane chaty, praca na polu od świtu do zmroku, daniny dla pana</td></tr>
          <tr><td><b>miasto</b></td><td><b>mury</b> z bramami, w środku <b>rynek</b> z <b>ratuszem</b> (siedzibą władz miasta) i kościołem; mieszczanie – rzemieślnicy i kupcy; rzemieślnicy jednego zawodu łączyli się w <b>cechy</b>; miasto miało <b>samorząd</b> – radę miejską z burmistrzem</td></tr>
          <tr><td><b>zamek</b></td><td>siedziba władcy lub rycerza; grube <b>mury</b>, <b>baszty</b> (wieże), <b>fosa</b> z wodą i <b>most zwodzony</b> – wszystko do obrony</td></tr>
          <tr><td><b>klasztor</b></td><td>dom <b>mnichów</b> (zakonników); <b>benedyktyni</b> żyli według zasady „<b>módl się i pracuj</b>”: modlitwa, praca w ogrodzie i na polu, ręczne przepisywanie ksiąg w <b>skryptorium</b>; przy klasztorach działały szkoły i biblioteki</td></tr>
        </table>
        <h3>Zasięg chrześcijaństwa</h3>
        <ul>
          <li><b>Wczesne średniowiecze</b>: chrześcijańskie są przede wszystkim ziemie dawnego imperium rzymskiego. <b>Misjonarze</b> – głosiciele wiary – docierają coraz dalej na północ i wschód Europy.</li>
          <li>W X w. chrzest przyjmują m.in. <b>Polska (966)</b> i <b>Ruś (988)</b>.</li>
          <li><b>Późne średniowiecze</b>: chrześcijańska jest prawie cała Europa. Jako ostatnia chrzest przyjęła <b>Litwa (1387)</b>.</li>
          <li>Chrześcijaństwo podzieliło się na <b>zachodnie</b> (z papieżem w Rzymie, łacina) i <b>wschodnie</b> (z centrum w Konstantynopolu). Polska przyjęła chrześcijaństwo zachodnie, a Ruś – wschodnie.</li>
        </ul>
        <h3>Sztuka romańska i gotycka</h3>
        <table>
          <tr><th></th><th>Styl romański</th><th>Styl gotycki</th></tr>
          <tr><td>kiedy?</td><td>X–XIII w.</td><td>od XII w. (narodził się we Francji); w Polsce od XIII w.</td></tr>
          <tr><td>mury</td><td>grube, ciężkie – budowla przypomina twierdzę</td><td>lżejsze; ciężar dźwigają filary i <b>przypory</b> (podpory na zewnątrz)</td></tr>
          <tr><td>okna i łuki</td><td><b>małe okna</b>, łuki <b>półkoliste</b></td><td><b>duże okna</b>, łuki <b>ostre</b> (ostrołuki), okrągłe okna – <b>rozety</b></td></tr>
          <tr><td>wnętrze</td><td>półmrok</td><td>jasne, kolorowe światło z <b>witraży</b> – obrazów z kolorowych kawałków szkła</td></tr>
          <tr><td>kształt</td><td>niska, prosta bryła</td><td>wysoka, <b>strzelista</b> – „pnie się do nieba”</td></tr>
          <tr><td>przykłady w Polsce</td><td>kolegiata w Tumie pod Łęczycą, rotunda na Wawelu</td><td>kościół Mariacki w Krakowie, kościół Mariacki w Gdańsku</td></tr>
        </table>
        <p>Nazwa „romański” pochodzi od Rzymu – budowniczowie naśladowali budowle rzymskie.</p>
        <h3>Uniwersytety</h3>
        <p><b>Uniwersytet</b> to szkoła wyższa – uczą się w niej dorośli studenci, a wykładają uczeni. Pierwsze uniwersytety powstały w średniowieczu we Włoszech (m.in. w <b>Bolonii</b>) i we Francji (w <b>Paryżu</b>). Wykłady prowadzono po łacinie.</p>
        <p>W Polsce pierwszy uniwersytet – <b>Akademię Krakowską</b> – założył król <b>Kazimierz Wielki</b> w <b>1364 r.</b> W 1400 r. odnowił ją król Władysław Jagiełło dzięki darowi zmarłej królowej Jadwigi. Dziś to <b>Uniwersytet Jagielloński</b> – najstarsza polska uczelnia.</p>
        <h3>Co zostało nam po średniowieczu?</h3>
        <ul>
          <li><b>uniwersytety</b> – dziś są w każdym dużym mieście;</li>
          <li>romańskie i gotyckie kościoły, zamki i ratusze – cenne <b>zabytki</b>;</li>
          <li>miasta z <b>rynkiem i ratuszem</b>;</li>
          <li><b>samorząd</b> – dziś też mieszkańcy wybierają radę miasta lub gminy.</li>
        </ul>
      `,
      flashcards: [
        ['Średniowiecze', 'Epoka od 476 r. (upadek zachodniego cesarstwa rzymskiego) do 1492 r. (Kolumb dopływa do Ameryki) – daty umowne'],
        ['Plemię', 'Wspólnota ludzi z jednego terenu: ten sam język, zwyczaje i wierzenia; sprawy omawiano na wiecu'],
        ['Monarchia', 'Państwo, którym rządzi jeden władca – król lub książę; władza zwykle dziedziczna'],
        ['Senior', 'Ten, kto daje ziemię (lenno) w zamian za wierność i pomoc wojskową'],
        ['Wasal', 'Ten, kto dostaje ziemię od seniora i przysięga mu wierność i pomoc wojskową'],
        ['Drabina feudalna', 'Król → możni → rycerze; wasal mógł być seniorem dla kogoś niżej'],
        ['Stan', 'Grupa ludzi o tych samych prawach i obowiązkach: duchowieństwo, rycerstwo, mieszczanie, chłopi'],
        ['Samorząd', 'Mieszkańcy sami decydują o części swoich spraw; w mieście – rada miejska z burmistrzem'],
        ['Klasztor', 'Dom mnichów; benedyktyni: „módl się i pracuj”; przepisywanie ksiąg w skryptorium'],
        ['Sztuka romańska', 'Grube mury, małe okna, półkoliste łuki, półmrok (X–XIII w.); np. kolegiata w Tumie'],
        ['Sztuka gotycka', 'Strzeliste budowle, ostrołuki, duże okna z witrażami (od XII w.); np. kościół Mariacki w Krakowie'],
        ['Uniwersytet', 'Szkoła wyższa; pierwsze powstały we Włoszech (Bolonia) i we Francji (Paryż)'],
        ['Akademia Krakowska', 'Założona w 1364 r. przez Kazimierza Wielkiego; dziś Uniwersytet Jagielloński'],
        ['Zasięg chrześcijaństwa', 'Wczesne średniowiecze – głównie dawne ziemie rzymskie; późne – prawie cała Europa (Litwa jako ostatnia, 1387)'],
      ],
      questions: [
        { id: 'z7rp8l', q: 'Która epoka trwała umownie od 476 do 1492 r.?', options: ['starożytność', 'średniowiecze', 'prehistoria', 'współczesność'], answer: 1, explain: 'Średniowiecze zaczęło się po upadku zachodniego cesarstwa rzymskiego (476) i trwało do dotarcia Kolumba do Ameryki (1492).' },
        { id: 'n7om9u', q: 'Kim był wasal?', options: ['władcą, który rozdawał ziemię', 'człowiekiem, który dostał ziemię od seniora i przysiągł mu wierność', 'mnichem przepisującym księgi', 'kupcem z miasta'], answer: 1, explain: 'Wasal dostawał od seniora ziemię (lenno), a w zamian przysięgał wierność i pomoc wojskową.' },
        { id: 'fc88cf', q: 'Co wasal obiecywał seniorowi w zamian za ziemię?', options: ['wierność i pomoc wojskową', 'że zostanie mnichem', 'że wybuduje mu katedrę', 'że będzie płacił za studia jego synów'], answer: 0, explain: 'Wasal przysięgał seniorowi wierność i pomoc wojskową – to był hołd lenny.' },
        { id: 'kmrdiu', q: 'Prawda czy fałsz?\nWasal mógł być jednocześnie seniorem dla rycerzy, którym sam dał część ziemi.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Tak powstawała drabina feudalna: król → możni → rycerze. Ten sam człowiek był wasalem króla i seniorem swoich rycerzy.' },
        { id: '1fb912', q: 'Prawda czy fałsz?\nChłopi składali hołd lenny i dostawali od seniora lenna.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Chłopi nie byli wasalami. Pracowali na ziemi swoich panów i oddawali im część plonów lub pracowali na ich polu.' },
        { id: 'de6l2e', q: 'Co to był stan w średniowieczu?', options: ['miasto otoczone murami', 'duża grupa ludzi o tych samych prawach i obowiązkach', 'jedna wieś z kościołem', 'ziemia dana wasalowi'], answer: 1, explain: 'Stany to duchowieństwo, rycerstwo, mieszczanie i chłopi. Do stanu zwykle się rodziło.' },
        { id: 'ks0d4d', q: 'Który stan był w średniowieczu najliczniejszy?', options: ['rycerstwo', 'duchowieństwo', 'mieszczanie', 'chłopi'], answer: 3, explain: 'Najwięcej było chłopów – większość ludzi mieszkała na wsi i uprawiała ziemię.' },
        { id: 'sqr48f', q: 'Co oznacza słowo „samorząd”?', options: ['mieszkańcy sami decydują o części swoich spraw, np. wybierają radę', 'król decyduje o wszystkim sam', 'wszyscy muszą słuchać seniora', 'w mieście rządzi zakonnik'], answer: 0, explain: 'W średniowiecznych miastach samorząd to rada miejska z burmistrzem. Dziś też wybieramy radę miasta lub gminy.' },
        { id: '1gewt5', q: 'Jak nazywamy państwo, którym rządzi jeden władca – król lub książę?', options: ['demokracja', 'republika', 'monarchia', 'plemię'], answer: 2, explain: 'Monarchia to rządy jednej osoby. W demokracji i republice o władzy decydują obywatele.' },
        { id: '19j1eg', q: 'Co łączyło członków jednego plemienia?', options: ['wspólny uniwersytet', 'wspólny teren, język, zwyczaje i wierzenia', 'mieszkanie w jednym zamku', 'przynależność do jednego cechu'], answer: 1, explain: 'Plemię to wspólnota ludzi z jednego terenu, którzy mówią tym samym językiem i mają te same zwyczaje.' },
        { id: 'g9jy2u', q: 'Gdzie mnisi ręcznie przepisywali księgi?', options: ['w ratuszu', 'na rynku', 'w skryptorium w klasztorze', 'w zamkowej baszcie'], answer: 2, explain: 'Skryptorium to sala w klasztorze, w której mnisi przepisywali księgi. Druku jeszcze nie znano.' },
        { id: 'rulwp1', q: 'Jak brzmiała zasada mnichów benedyktynów?', options: ['„Wiem, że nic nie wiem”', '„Módl się i pracuj”', '„Kto pierwszy, ten lepszy”', '„Władza dla ludu”'], answer: 1, explain: 'Benedyktyni łączyli modlitwę z pracą: w ogrodzie, na polu i przy przepisywaniu ksiąg. Po łacinie: ora et labora.' },
        { id: 'x08yac', q: 'Co chroniło średniowieczny zamek przed wrogami?', options: ['witraże w oknach', 'rynek z ratuszem', 'skryptorium', 'grube mury, baszty i fosa z wodą'], answer: 3, explain: 'Zamek był budowany do obrony: grube mury, baszty, fosa i most zwodzony.' },
        { id: 'mwattt', q: 'Która cecha pasuje do stylu romańskiego?', options: ['grube mury i małe okna', 'duże okna z witrażami', 'strzeliste wieże i ostrołuki', 'jasne, wysokie wnętrza'], answer: 0, explain: 'Budowle romańskie mają grube mury, małe okna z półkolistymi łukami i półmrok w środku. Pozostałe cechy to gotyk.' },
        { id: 'pqiavo', q: 'Która cecha pasuje do stylu gotyckiego?', options: ['grube mury i półmrok w środku', 'małe okna z półkolistym łukiem', 'wysokie, strzeliste budowle z ostrołukowymi oknami', 'niska bryła jak twierdza'], answer: 2, explain: 'Gotyk „pnie się do nieba”: wysokie budowle, ostrołuki, duże okna z witrażami.' },
        {
          id: 'mprnqk',
          q: 'Który kościół na rysunku zbudowano w stylu gotyckim?',
          svg: `<svg viewBox="0 0 340 210" role="img" aria-label="Dwa kościoły. A: niski i szeroki, grube mury, małe okna zakończone półkoliście. B: wysoki, z dwiema strzelistymi wieżami, dużymi oknami zakończonymi ostro i okrągłym oknem">
      <rect x="25" y="100" width="120" height="75" class="f4 s4 sw"/>
      <polygon points="18,100 85,62 152,100" class="f2 s2 sw"/>
      <path d="M48,134 L48,120 A7,7 0 0 1 62,120 L62,134 Z" class="bg ln"/>
      <path d="M78,134 L78,120 A7,7 0 0 1 92,120 L92,134 Z" class="bg ln"/>
      <path d="M108,134 L108,120 A7,7 0 0 1 122,120 L122,134 Z" class="bg ln"/>
      <path d="M72,175 L72,160 A13,13 0 0 1 98,160 L98,175 Z" class="bg ln"/>
      <rect x="200" y="85" width="110" height="90" class="f1 s1 sw"/>
      <rect x="200" y="45" width="26" height="40" class="f1 s1 sw"/>
      <rect x="284" y="45" width="26" height="40" class="f1 s1 sw"/>
      <polygon points="200,45 213,8 226,45" class="f5 s5 sw"/>
      <polygon points="284,45 297,8 310,45" class="f5 s5 sw"/>
      <circle cx="255" cy="105" r="13" class="f4 s4"/>
      <path d="M215,165 L215,135 Q215,122 223,114 Q231,122 231,135 L231,165 Z" class="f4 s4"/>
      <path d="M279,165 L279,135 Q279,122 287,114 Q295,122 295,135 L295,165 Z" class="f4 s4"/>
      <path d="M243,175 L243,145 Q243,132 255,124 Q267,132 267,145 L267,175 Z" class="bg ln"/>
      <text x="85" y="200" class="tx-b" text-anchor="middle">A</text>
      <text x="255" y="200" class="tx-b" text-anchor="middle">B</text>
    </svg>`,
          options: ['A', 'B'],
          noShuffle: true,
          answer: 1,
          explain: 'Kościół B jest wysoki i strzelisty, ma ostrołukowe, duże okna i rozetę – to gotyk. Kościół A (grube mury, małe półkoliste okna) to styl romański.',
        },
        { id: 'pwun3c', q: 'Co to jest witraż?', options: ['podziemny cmentarz', 'obraz z kolorowych kawałków szkła w oknie', 'list króla do papieża', 'wieża zamku'], answer: 1, explain: 'Witraże wypełniały duże okna kościołów gotyckich. Przez kolorowe szkło wpadało do środka barwne światło.' },
        { id: 'k6n7mq', q: 'Kto i kiedy założył uniwersytet w Krakowie (Akademię Krakowską)?', options: ['Mieszko I w 966 r.', 'Bolesław Chrobry w 1025 r.', 'Kazimierz Wielki w 1364 r.', 'Juliusz Cezar w 44 r. p.n.e.'], answer: 2, explain: 'Akademię Krakowską założył król Kazimierz Wielki w 1364 r. Dziś to Uniwersytet Jagielloński.' },
        { id: 'vr9o5g', q: 'Które państwo przyjęło chrześcijaństwo jako ostatnie w Europie (w 1387 r.)?', options: ['Polska', 'Ruś', 'Litwa', 'Czechy'], answer: 2, explain: 'Litwa przyjęła chrzest w 1387 r. Polska – w 966 r., a Ruś – w 988 r.' },
        { id: 'ypxtge', q: 'Jak zmienił się zasięg chrześcijaństwa od wczesnego do późnego średniowiecza?', options: ['zmniejszył się do samego Rzymu', 'nie zmienił się wcale', 'chrześcijaństwo zniknęło z Europy', 'objął prawie całą Europę, także jej północ i wschód'], answer: 3, explain: 'Na początku średniowiecza chrześcijańskie były głównie dawne ziemie rzymskie. Pod koniec – prawie cała Europa.' },
      ],
    },
    {
      id: 'narodziny-polski',
      name: 'Od plemienia do królestwa – narodziny Polski',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 10 „Od plemienia do królestwa – narodziny Polski”, wym. 1 (państwo Mieszka I: drużyna, gród, książę, postać Dobrawy), wym. 2 (daty chrztu Mieszka I i koronacji królewskiej Bolesława Chrobrego oraz ich znaczenie), wym. 3 (rozwój terytorialny państwa pierwszych Piastów na mapie), wym. 4 (metody poznawania przeszłości w badaniach nad okresem wczesnopiastowskim). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Panowanie Mieszka I”, „Chrzest Polski”, „Zjazd gnieźnieński i ustanowienie arcybiskupstwa”, „Koronacja Bolesława Chrobrego – 1025 rok”, „Kronika polska Galla tzw. Anonima”, „Od ekspansji do upadku władzy pierwszych Piastów”), na dzieje.pl (Dobrawa, data chrztu, Dagome iudex, biskupstwo poznańskie 968) i w opracowaniach naukowych (relacja Ibrahima ibn Jakuba o 3000 wojowników drużyny; kronika Thietmara urwana z jego śmiercią w 1018 r.; datowanie dendrochronologiczne mostu na Ostrowie Lednickim na 2. połowę X w.; badania DNA Piastów – IChB PAN i UAM). Rok 966 to data przyjęta przez historyków (część badaczy dopuszcza lata 966–968); miejsca chrztu nie podajemy – jest sporne. Zasięg państwa podano ogólnie: przyłączenie Śląska ok. 990 r. jest potwierdzone, a moment przyłączenia Małopolski – sporny (pewne jest, że w 1000 r. powstało biskupstwo w Krakowie).',
      theory: `
        <h3>Grody i plemiona</h3>
        <p>We wczesnym średniowieczu na ziemiach dzisiejszej Polski żyły <b>plemiona słowiańskie</b>. Wierzyły w wielu bogów. Ludzie budowali <b>grody</b> – osady obronne otoczone <b>wałem</b> z drewna i ziemi, stawiane w miejscach trudnych do zdobycia, np. na wyspie lub wśród bagien. W grodzie mieszkał władca albo jego urzędnik z wojownikami, a w razie napadu chronili się tu okoliczni mieszkańcy.</p>
        <p>W X w. w <b>Wielkopolsce</b> rządził ród <b>Piastów</b>. Ich najważniejsze grody to m.in. <b>Gniezno</b>, <b>Poznań</b>, <b>Ostrów Lednicki</b> i <b>Giecz</b>.</p>
        <h3>Mieszko I – książę i jego drużyna</h3>
        <p><b>Mieszko I</b> to pierwszy władca Polski, o którym wiemy ze źródeł pisanych. Nosił tytuł <b>księcia</b> – był władcą państwa, ale nie królem.</p>
        <p>Siłą księcia była <b>drużyna</b> – oddział zawodowych wojowników, których książę utrzymywał. Podróżnik <b>Ibrahim ibn Jakub</b> z dalekiej Hiszpanii pisał ok. 966 r., że Mieszko ma <b>3000 zbrojnych</b> i daje im ubrania, konie i broń.</p>
        <h3>Dobrawa i chrzest – 966</h3>
        <ul>
          <li>W <b>965 r.</b> Mieszko poślubił <b>Dobrawę</b> (Dąbrówkę) – <b>czeską księżniczkę</b>, córkę księcia czeskiego Bolesława I. Czechy były już krajem chrześcijańskim. Ślub umocnił sojusz Mieszka z Czechami.</li>
          <li>Według kronikarza Galla Anonima to Dobrawa skłoniła Mieszka do przyjęcia chrztu.</li>
          <li>W <b>966 r.</b> Mieszko I przyjął <b>chrzest</b> – razem z nim jego dwór. To wydarzenie nazywamy <b>chrztem Polski</b>.</li>
          <li>W <b>968 r.</b> powstało pierwsze biskupstwo – w <b>Poznaniu</b>. Pierwszym biskupem był Jordan.</li>
          <li>Synem Mieszka i Dobrawy był <b>Bolesław Chrobry</b>.</li>
        </ul>
        <p><b>Dlaczego chrzest był ważny?</b></p>
        <ul>
          <li>Polska weszła do grona <b>chrześcijańskich państw Europy</b> – Mieszko stał się dla innych władców równym partnerem.</li>
          <li>Przybyli <b>duchowni</b>, którzy umieli czytać i pisać po łacinie – zaczęto spisywać dokumenty.</li>
          <li>Zaczęto budować pierwsze <b>kamienne kościoły</b> i pałace.</li>
          <li>Wspólna wiara pomagała łączyć mieszkańców państwa i wzmacniała władzę księcia.</li>
        </ul>
        <h3>Państwo rośnie</h3>
        <p>Państwo Mieszka I wyrosło z Wielkopolski. Pod koniec jego panowania należały do niego m.in. Wielkopolska, Kujawy, Mazowsze, Pomorze nad Bałtykiem i <b>Śląsk</b>, przyłączony ok. <b>990 r.</b> po wojnie z Czechami.</p>
        <p>Ok. 991 r. Mieszko i jego druga żona Oda oddali państwo pod opiekę papieża. Wiemy o tym z dokumentu zwanego <b>Dagome iudex</b> (czyt. dagome judeks). Zachował się tylko jego krótki odpis. To najstarszy opis granic państwa polskiego.</p>
        <p>Około 1000 r. państwo Piastów obejmowało Wielkopolskę, Kujawy, Mazowsze, Śląsk, Małopolskę z Krakowem i Pomorze. <b>Bolesław Chrobry</b> po wojnach z Niemcami zdobył na pewien czas <b>Łużyce i Milsko</b> (pokój w Budziszynie, 1018 r.), a po wyprawie na Kijów – <b>Grody Czerwieńskie</b> (1018 r.).</p>
        <h3>Zjazd gnieźnieński – 1000</h3>
        <p>Biskup <b>Wojciech</b> wyruszył w 997 r. z Polski, żeby głosić chrześcijaństwo pogańskim <b>Prusom</b>. Prusowie go zabili. Bolesław Chrobry wykupił jego ciało i pochował je w Gnieźnie. Wkrótce Wojciech został ogłoszony świętym.</p>
        <p>W <b>1000 r.</b> do grobu św. Wojciecha w Gnieźnie przybył z pielgrzymką cesarz <b>Otton III</b>. Spotkanie z Bolesławem Chrobrym nazywamy <b>zjazdem gnieźnieńskim</b>. Utworzono wtedy <b>arcybiskupstwo w Gnieźnie</b> i biskupstwa w <b>Krakowie</b>, <b>Wrocławiu</b> i <b>Kołobrzegu</b>. Dzięki temu Kościół w Polsce nie podlegał biskupom niemieckim.</p>
        <h3>Koronacja – 1025</h3>
        <p>W <b>1025 r.</b> Bolesław Chrobry został koronowany – stał się <b>pierwszym królem Polski</b>. Zmarł kilka miesięcy później.</p>
        <p><b>Znaczenie koronacji</b>: Polska stała się <b>królestwem</b> – państwem równym innym królestwom Europy. Król nie był zależny od cesarza. Od tej koronacji zaczęła się tradycja koronowania polskich władców.</p>
        <table>
          <tr><th>Data</th><th>Wydarzenie</th></tr>
          <tr><td>965</td><td>ślub Mieszka I z Dobrawą</td></tr>
          <tr><td><b>966</b></td><td><b>chrzest Mieszka I</b> (chrzest Polski)</td></tr>
          <tr><td>1000</td><td>zjazd gnieźnieński</td></tr>
          <tr><td><b>1025</b></td><td><b>koronacja Bolesława Chrobrego</b> – pierwszy król Polski</td></tr>
        </table>
        <h3>Skąd to wiemy? Metody badania przeszłości</h3>
        <table>
          <tr><th>Metoda</th><th>Przykład</th></tr>
          <tr><td><b>źródła pisane</b></td><td>relacja <b>Ibrahima ibn Jakuba</b> o państwie Mieszka; kronika <b>Thietmara</b> – niemieckiego biskupa z Merseburga, który pisał w czasach Chrobrego (nie lubił go, więc historyk musi to brać pod uwagę); <b>kronika Galla Anonima</b> – najstarsza kronika polska (ok. 1112–1116), napisana po łacinie przez cudzoziemca; dokument <b>Dagome iudex</b></td></tr>
          <tr><td><b>archeologia</b></td><td>wykopaliska – archeolodzy odkopują wały grodów, fundamenty kościołów i pałaców, groby, broń, narzędzia; np. na <b>Ostrowie Lednickim</b> odkryto ruiny pałacu i kościoła oraz baseny do chrztu</td></tr>
          <tr><td><b>dendrochronologia</b></td><td>określanie wieku drewna na podstawie <b>słojów</b> (każdy rok to jeden słój); tak ustalono, że most prowadzący na Ostrów Lednicki zbudowano w 2. połowie X w.</td></tr>
          <tr><td><b>badanie monet</b></td><td>monety znalezione w grobie pomagają ustalić, kiedy kogoś pochowano</td></tr>
          <tr><td><b>badania DNA</b></td><td>genetycy badają szczątki Piastów i ich pokrewieństwo</td></tr>
        </table>
        <div class="tip">💡 Pisanych źródeł z czasów Mieszka jest bardzo mało. Dlatego tak ważne są badania archeologów i innych naukowców – a każde źródło trzeba sprawdzać i porównywać z innymi.</div>
      `,
      flashcards: [
        ['Gród', 'Osada obronna otoczona wałem z drewna i ziemi, w miejscu trudnym do zdobycia'],
        ['Książę', 'Władca państwa (niższy tytuł niż król); Mieszko I był księciem'],
        ['Drużyna', 'Oddział zawodowych wojowników utrzymywanych przez księcia'],
        ['Mieszko I', 'Pierwszy znany ze źródeł władca Polski z rodu Piastów; chrzest w 966 r.'],
        ['Dobrawa', 'Czeska księżniczka, żona Mieszka I (ślub 965 r.); według Galla Anonima skłoniła go do chrztu'],
        ['966 r.', 'Chrzest Mieszka I – chrzest Polski'],
        ['968 r.', 'Pierwsze biskupstwo – w Poznaniu (biskup Jordan)'],
        ['Dagome iudex', 'Dokument z ok. 991 r.: Mieszko I oddaje państwo pod opiekę papieża; najstarszy opis granic'],
        ['Zjazd gnieźnieński (1000 r.)', 'Otton III u grobu św. Wojciecha; arcybiskupstwo w Gnieźnie, biskupstwa w Krakowie, Wrocławiu, Kołobrzegu'],
        ['1025 r.', 'Koronacja Bolesława Chrobrego – pierwszy król Polski'],
        ['Zdobycze Bolesława Chrobrego', 'Łużyce i Milsko (pokój w Budziszynie, 1018), Grody Czerwieńskie (1018)'],
        ['Gall Anonim', 'Autor najstarszej kroniki polskiej (ok. 1112–1116), cudzoziemiec piszący po łacinie'],
        ['Archeologia', 'Nauka badająca przeszłość dzięki przedmiotom i budowlom odkopanym podczas wykopalisk'],
        ['Dendrochronologia', 'Określanie wieku drewna na podstawie słojów (przyrostów rocznych)'],
      ],
      questions: [
        { id: 'mem045', q: 'Czym był gród?', options: ['kamiennym kościołem', 'osadą obronną otoczoną wałem z drewna i ziemi', 'oddziałem wojowników', 'dokumentem papieża'], answer: 1, explain: 'Gród to osada obronna – otaczał ją wał z drewna i ziemi. Budowano go w miejscu trudnym do zdobycia.' },
        { id: '3b379o', q: 'Jak nazywał się oddział zawodowych wojowników, których utrzymywał książę?', options: ['plemię', 'cech', 'drużyna', 'stan'], answer: 2, explain: 'Drużyna to wojownicy księcia. Według Ibrahima ibn Jakuba Mieszko miał ich 3000 i dawał im ubrania, konie i broń.' },
        { id: 'qqyfsf', q: 'Jaki tytuł nosił Mieszko I?', options: ['księcia', 'króla', 'cesarza', 'faraona'], answer: 0, explain: 'Mieszko I był księciem. Pierwszym królem Polski został jego syn, Bolesław Chrobry, w 1025 r.' },
        { id: 'ky7a6b', q: 'Kim była Dobrawa?', options: ['córką Bolesława Chrobrego', 'rzymską cesarzową', 'czeską księżniczką, żoną Mieszka I', 'królową Francji'], answer: 2, explain: 'Dobrawa była córką księcia czeskiego. Poślubiła Mieszka I w 965 r.' },
        { id: 'j5ufg9', q: 'W którym roku Mieszko I przyjął chrzest?', options: ['966', '965', '1000', '1025'], answer: 0, explain: 'Chrzest Mieszka I odbył się w 966 r. Rok wcześniej (965) Mieszko poślubił Dobrawę.' },
        { id: 'gdwz7j', q: 'Dlaczego chrzest Mieszka I był ważny dla Polski?', options: ['Mieszko od razu został królem', 'Polska weszła do grona chrześcijańskich państw Europy', 'Polska przyłączyła Rzym', 'wszyscy w jeden dzień nauczyli się czytać'], answer: 1, explain: 'Po chrzcie Polska była dla innych państw chrześcijańskich równym partnerem. Przybyli duchowni, którzy znali pismo.' },
        { id: 'qsgkem', q: 'Kto według kroniki Galla Anonima skłonił Mieszka I do przyjęcia chrztu?', options: ['Otton III', 'Dobrawa', 'św. Wojciech', 'Kazimierz Wielki'], answer: 1, explain: 'Gall Anonim pisze, że to Dobrawa namówiła męża do chrztu. Św. Wojciech i Otton III działali później, za Bolesława Chrobrego.' },
        { id: 'z0bqrx', q: 'W którym roku Bolesław Chrobry został koronowany na króla?', options: ['966', '1000', '1025', '1410'], answer: 2, explain: 'Koronacja Bolesława Chrobrego odbyła się w 1025 r. Zmarł kilka miesięcy później.' },
        { id: 'mhbsrx', q: 'Co zmieniła koronacja Bolesława Chrobrego?', options: ['Polska stała się królestwem równym innym królestwom Europy', 'Polska przestała być chrześcijańska', 'Polska stała się częścią Czech', 'Bolesław oddał władzę cesarzowi'], answer: 0, explain: 'Król nie był zależny od cesarza. Polska stała się samodzielnym królestwem, uznawanym przez inne państwa Europy.' },
        { id: 'lwtdvw', q: 'Co postanowiono podczas zjazdu gnieźnieńskiego w 1000 r.?', options: ['założono Akademię Krakowską', 'Mieszko I przyjął chrzest', 'utworzono arcybiskupstwo w Gnieźnie', 'Polska przyłączyła Litwę'], answer: 2, explain: 'Utworzono arcybiskupstwo w Gnieźnie i biskupstwa w Krakowie, Wrocławiu i Kołobrzegu.' },
        { id: 'dglaw6', q: 'Do czyjego grobu w Gnieźnie przybył w 1000 r. cesarz Otton III?', options: ['Mieszka I', 'św. Wojciecha', 'Dobrawy', 'Juliusza Cezara'], answer: 1, explain: 'Otton III przybył z pielgrzymką do grobu św. Wojciecha, zabitego przez Prusów w 997 r.' },
        { id: 'xkiai4', q: 'Czym był dokument Dagome iudex?', options: ['najstarszą kroniką polską', 'oddaniem państwa Mieszka pod opiekę papieża, z opisem granic', 'umową o koronacji Chrobrego', 'listą wojowników drużyny'], answer: 1, explain: 'Ok. 991 r. Mieszko I i Oda oddali państwo pod opiekę papieża. Dokument opisuje granice – to najstarszy taki opis.' },
        { id: 'icm5wk', q: 'Którą krainę przyłączył Mieszko I ok. 990 r., po wojnie z Czechami?', options: ['Litwę', 'Łużyce', 'Ruś', 'Śląsk'], answer: 3, explain: 'Mieszko przyłączył Śląsk ok. 990 r. Łużyce zdobył później Bolesław Chrobry, a Litwa i Ruś nie należały do państwa Piastów.' },
        { id: 'ffoauk', q: 'Jakie ziemie zdobył Bolesław Chrobry po wojnach z Niemcami (pokój w Budziszynie, 1018 r.)?', options: ['Łużyce i Milsko', 'Śląsk i Pomorze', 'Litwę i Ruś', 'Wielkopolskę i Kujawy'], answer: 0, explain: 'W 1018 r. Chrobry zatrzymał Łużyce i Milsko. Śląsk, Pomorze, Wielkopolska i Kujawy należały do państwa już wcześniej.' },
        { id: 'cflc8z', q: 'Kto napisał najstarszą kronikę polską?', options: ['Thietmar', 'Gall Anonim', 'Ibrahim ibn Jakub', 'Mieszko I'], answer: 1, explain: 'Gall Anonim napisał kronikę ok. 1112–1116 r., po łacinie. Thietmar był niemieckim kronikarzem, a Ibrahim ibn Jakub – podróżnikiem.' },
        { id: 'uu6b48', q: 'Jak nazywa się nauka, która bada przeszłość dzięki przedmiotom i budowlom odkopanym podczas wykopalisk?', options: ['astronomia', 'geografia', 'archeologia', 'filozofia'], answer: 2, explain: 'Archeolodzy odkopują wały grodów, fundamenty kościołów, groby i przedmioty – np. na Ostrowie Lednickim.' },
        { id: 'zu1z2y', q: 'Jak dendrochronologia pomaga poznać przeszłość?', options: ['określa wiek drewna na podstawie słojów', 'odczytuje dawne pismo', 'bada pochodzenie monet', 'mierzy wysokość wałów'], answer: 0, explain: 'Każdy rok życia drzewa to jeden słój. Dzięki temu można ustalić, kiedy ścięto drewno użyte np. do budowy mostu lub wału grodu.' },
        {
          id: '4xpflo',
          q: 'Którą literą na osi czasu oznaczono rok chrztu Mieszka I?',
          svg: `<svg viewBox="0 0 360 130" role="img" aria-label="Oś czasu z czterema punktami: A – rok 965, B – rok 966, C – rok 1000, D – rok 1025">
      <line x1="15" y1="60" x2="345" y2="60" class="ln sw"/>
      <line x1="60" y1="50" x2="60" y2="70" class="ln sw"/>
      <line x1="135" y1="50" x2="135" y2="70" class="ln sw"/>
      <line x1="215" y1="50" x2="215" y2="70" class="ln sw"/>
      <line x1="295" y1="50" x2="295" y2="70" class="ln sw"/>
      <circle cx="60" cy="27" r="14" class="f4 s4 sw"/>
      <circle cx="135" cy="27" r="14" class="f4 s4 sw"/>
      <circle cx="215" cy="27" r="14" class="f4 s4 sw"/>
      <circle cx="295" cy="27" r="14" class="f4 s4 sw"/>
      <text x="60" y="33" class="tx-b" text-anchor="middle">A</text>
      <text x="135" y="33" class="tx-b" text-anchor="middle">B</text>
      <text x="215" y="33" class="tx-b" text-anchor="middle">C</text>
      <text x="295" y="33" class="tx-b" text-anchor="middle">D</text>
      <text x="60" y="95" class="tx" text-anchor="middle">965</text>
      <text x="135" y="95" class="tx" text-anchor="middle">966</text>
      <text x="215" y="95" class="tx" text-anchor="middle">1000</text>
      <text x="295" y="95" class="tx" text-anchor="middle">1025</text>
      <text x="180" y="122" class="tx-s" text-anchor="middle">oś czasu (odstępy nie są w skali)</text>
    </svg>`,
          options: ['A', 'B', 'C', 'D'],
          noShuffle: true,
          answer: 1,
          explain: 'Chrzest Mieszka I to rok 966 – litera B. W 965 r. (A) był ślub z Dobrawą, w 1000 r. (C) – zjazd gnieźnieński, a w 1025 r. (D) – koronacja Chrobrego.',
        },
        { id: 'rd3mdj', q: 'Prawda czy fałsz?\nMieszko I był pierwszym królem Polski.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Mieszko I był księciem. Pierwszym królem był jego syn Bolesław Chrobry (koronacja w 1025 r.).' },
        { id: 'vfpw4d', q: 'Ułóż chronologicznie (od najdawniejszego): zjazd gnieźnieński, koronacja Bolesława Chrobrego, chrzest Mieszka I.', options: ['chrzest (966) → zjazd (1000) → koronacja (1025)', 'zjazd (1000) → chrzest (966) → koronacja (1025)', 'koronacja (1025) → zjazd (1000) → chrzest (966)', 'chrzest (966) → koronacja (1025) → zjazd (1000)'], answer: 0, explain: 'Mniejsza liczba to dawniej: 966 → 1000 → 1025.' },
      ],
    },
    {
      id: 'rozbicie-dzielnicowe',
      name: 'Rozbicie dzielnicowe',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 11 „Ziemie polskie w okresie rozbicia dzielnicowego”, wym. 1 (przyczyny i skutki rozbicia dzielnicowego po śmierci Bolesława Krzywoustego: pryncypat, zasada senioratu), wym. 2 (przyczyny i skutki sprowadzenia Zakonu Krzyżackiego), wym. 3 (przemiany społeczno-gospodarcze i ich wpływ na losy regionu), wym. 4 (zabytki sztuki romańskiej i gotyckiej w Polsce i ich ochrona – moduł kultura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Rozbicie dzielnicowe”, „Testament Bolesława Krzywoustego i jego skutki”, „Państwo zakonu krzyżackiego”, „Przemiany społeczno-gospodarcze na ziemiach polskich oraz społeczno-kulturowe skutki kolonizacji na prawie niemieckim”) i na dzieje.pl (Drzwi Gnieźnieńskie – XII w.; zamek w Malborku – siedziba wielkich mistrzów od 1309 r., na liście UNESCO od 1997 r.). Okres rozbicia: 1138–1320 (za ZPE). Oryginał „testamentu” Krzywoustego się nie zachował – podział znamy z kronik, dlatego dzielnice synów podano ogólnie. Sprowadzenie Krzyżaków datujemy „ok. 1226 r.” (dokument nadania ziemi chełmińskiej pochodzi z 1228 r.). Daty lokacji poszczególnych miast pominięto – podajemy tylko wiek.',
      theory: `
        <h3>Testament Bolesława Krzywoustego – 1138</h3>
        <p>Książę <b>Bolesław Krzywousty</b> zmarł w <b>1138 r.</b> Przed śmiercią podzielił państwo między swoich synów – każdy dostał <b>dzielnicę</b>, czyli część kraju. Ten dokument nazywamy <b>testamentem Krzywoustego</b> (oryginał się nie zachował – wiemy o nim z kronik). Książę chciał, żeby synowie nie walczyli ze sobą o tron.</p>
        <table>
          <tr><th>Syn</th><th>Dzielnica (w uproszczeniu)</th></tr>
          <tr><td>Władysław (najstarszy) – <b>senior</b></td><td>Śląsk i <b>dzielnica senioralna</b> z <b>Krakowem</b></td></tr>
          <tr><td>Bolesław Kędzierzawy</td><td>Mazowsze z Kujawami</td></tr>
          <tr><td>Mieszko Stary</td><td>Wielkopolska</td></tr>
          <tr><td>Henryk</td><td>ziemia sandomierska</td></tr>
        </table>
        <p>Najmłodszy syn, Kazimierz, był wtedy niemowlęciem i nie dostał dzielnicy.</p>
        <h3>Zasada senioratu i pryncypat</h3>
        <ul>
          <li><b>Zasada senioratu</b> – najważniejszym władcą miał być zawsze <b>najstarszy</b> z rodu Piastów, czyli <b>senior</b>. (Łacińskie <i>senior</i> = starszy.)</li>
          <li><b>Pryncypat</b> – zwierzchnia władza seniora nad całym krajem. Senior (princeps) rządził w Krakowie, dowodził obroną granic, prowadził rozmowy z innymi państwami, bił monety i mianował biskupów.</li>
          <li>Młodsi bracia – <b>juniorzy</b> – rządzili w swoich dzielnicach, ale mieli słuchać seniora.</li>
        </ul>
        <h3>Dlaczego państwo się rozpadło?</h3>
        <p>Plan się nie udał. Pierwszy senior, Władysław, chciał rządzić całym krajem sam. Bracia pokonali go i wygnali z Polski (1146 r.) – dlatego nazywamy go <b>Władysławem Wygnańcem</b>. Potem książęta dzielili swoje ziemie między własnych synów, więc dzielnice rozpadały się na coraz mniejsze <b>księstwa</b>. W XIII w. było ich prawie 20! Książęta walczyli między sobą o Kraków. Ten okres – od <b>1138 do 1320 r.</b> – nazywamy <b>rozbiciem dzielnicowym</b>.</p>
        <h3>Skutki rozbicia</h3>
        <ul>
          <li>Małe księstwa były <b>słabe</b> – trudniej było obronić się przed sąsiadami i najazdami (np. Prusów, Litwinów i Mongołów).</li>
          <li>W <b>1241 r.</b> do Polski wtargnęli <b>Mongołowie</b> (Tatarzy). W bitwie pod <b>Legnicą</b> zginął książę <b>Henryk Pobożny</b>.</li>
          <li>Mimo podziału przetrwało poczucie wspólnoty: ten sam ród władców (Piastowie), ten sam język, wspólny Kościół z arcybiskupem w Gnieźnie i pamięć o jednym Królestwie Polskim.</li>
        </ul>
        <h3>Krzyżacy – skąd się wzięli w Polsce?</h3>
        <p>Na północ od Mazowsza żyli <b>Prusowie</b> – plemiona, które nie były chrześcijańskie. Często napadali na Mazowsze. Około <b>1226 r.</b> książę <b>Konrad Mazowiecki</b> poprosił o pomoc <b>Zakon Krzyżacki</b> – zakon rycerski, czyli wspólnotę rycerzy-zakonników (nosili białe płaszcze z czarnym krzyżem). W zamian dał im <b>ziemię chełmińską</b>.</p>
        <ul>
          <li><b>Przyczyny</b>: obrona Mazowsza przed Prusami, chęć nawrócenia Prusów.</li>
          <li><b>Skutki</b>: Krzyżacy podbili Prusów (do 1283 r.) i założyli <b>własne państwo zakonne</b>. Nie chcieli słuchać polskich książąt. Wyrósł bardzo silny i groźny sąsiad. W 1308–1309 r. Krzyżacy zajęli <b>Pomorze Gdańskie</b>. Od 1309 r. ich stolicą był <b>Malbork</b>.</li>
        </ul>
        <h3>Nowe wsie i miasta – lokacja na prawie niemieckim</h3>
        <p>W XIII w. książęta i inni właściciele ziemi sprowadzali <b>osadników</b> – głównie z Niemiec i Flandrii – a także zakładali nowe wsie i miasta dla miejscowej ludności. Założenie osady według nowych zasad nazywamy <b>lokacją na prawie niemieckim</b>.</p>
        <ul>
          <li><b>Zasadźca</b> sprowadzał osadników. Potem zostawał <b>sołtysem</b> we wsi albo <b>wójtem</b> w mieście.</li>
          <li>Chłopi byli <b>wolni osobiście</b>, dostawali ziemię i płacili panu stałą opłatę – <b>czynsz</b>. Na początku mieli <b>wolniznę</b> – czas bez opłat (czasem nawet ponad 20 lat), żeby urządzić gospodarstwo.</li>
          <li>Upowszechnił się <b>ciężki pług</b> z żelaznym lemieszem (zamiast drewnianego radła) i <b>trójpolówka</b> – ziemię dzielono na trzy pola: jedno obsiane zbożem ozimym, drugie jarym, a trzecie odpoczywało (ugór). Plony były większe.</li>
          <li>Miasto miało <b>rynek</b> z <b>ratuszem</b>, ulice jak na <b>szachownicy</b> i <b>mury obronne</b>. Rządził nim <b>samorząd</b>: <b>rada miejska</b> z <b>burmistrzem</b> oraz wójt z ławnikami, którzy sądzili.</li>
          <li>W XIII w. lokowano m.in. Wrocław, Kraków i Poznań.</li>
        </ul>
        <div class="tip">💡 Sprawdź, kiedy lokowano twoje miasto albo najbliższe miasto. Czy ma rynek z ratuszem i ulice jak na szachownicy?</div>
        <h3>Zabytki romańskie i gotyckie w Polsce</h3>
        <table>
          <tr><th>Styl romański</th><th>Styl gotycki</th></tr>
          <tr><td>kolegiata w <b>Tumie</b> pod Łęczycą; <b>Drzwi Gnieźnieńskie</b> – brązowe drzwi katedry w Gnieźnie z XII w. ze scenami z życia św. Wojciecha</td><td><b>zamek w Malborku</b> – siedziba wielkich mistrzów krzyżackich, największa ceglana budowla gotycka w Europie (na liście UNESCO); kościół Mariacki w Krakowie; kościół Mariacki w Gdańsku</td></tr>
        </table>
        <p><b>Dlaczego chronimy zabytki?</b> Są świadkami przeszłości – uczą nas historii. Zniszczonego zabytku nie da się naprawdę odtworzyć. Są ważne dla mieszkańców regionu i przyciągają turystów. Dlatego nie wolno ich niszczyć, np. malować po murach.</p>
      `,
      flashcards: [
        ['Testament Krzywoustego (1138 r.)', 'Podział państwa między synów Bolesława Krzywoustego – początek rozbicia dzielnicowego'],
        ['Rozbicie dzielnicowe', 'Okres 1138–1320, gdy Polska była podzielona na dzielnice i coraz mniejsze księstwa'],
        ['Zasada senioratu', 'Najważniejszym władcą jest zawsze najstarszy z rodu Piastów (senior)'],
        ['Pryncypat', 'Zwierzchnia władza seniora nad całym krajem (obrona, sprawy zagraniczne, monety)'],
        ['Dzielnica senioralna', 'Ziemie seniora z Krakowem – miały należeć do najstarszego Piasta'],
        ['Senior i juniorzy', 'Senior – najstarszy, najważniejszy książę; juniorzy – młodsi bracia w swoich dzielnicach'],
        ['Władysław Wygnaniec', 'Pierwszy senior; chciał rządzić sam, bracia wygnali go z kraju (1146)'],
        ['1241 r.', 'Najazd Mongołów; bitwa pod Legnicą – zginął Henryk Pobożny'],
        ['Konrad Mazowiecki', 'Książę, który ok. 1226 r. sprowadził Krzyżaków do obrony Mazowsza przed Prusami'],
        ['Zakon Krzyżacki', 'Zakon rycerski; dostał ziemię chełmińską, podbił Prusów i założył własne państwo'],
        ['Malbork', 'Od 1309 r. stolica państwa krzyżackiego; gotycki zamek z cegły'],
        ['Lokacja na prawie niemieckim', 'Zakładanie wsi i miast według nowych zasad: czynsz, wolność osobista, samorząd'],
        ['Sołtys / wójt', 'Zasadźca, który sprowadził osadników: we wsi – sołtys, w mieście – wójt'],
        ['Wolnizna', 'Okres zwolnienia osadników z opłat na początku gospodarowania'],
        ['Czynsz', 'Stała opłata, którą chłop płacił panu za ziemię'],
        ['Trójpolówka', 'Podział ziemi na 3 pola: zboże ozime, zboże jare, ugór (odpoczywa)'],
        ['Drzwi Gnieźnieńskie', 'Romańskie brązowe drzwi katedry w Gnieźnie (XII w.), sceny z życia św. Wojciecha'],
      ],
      questions: [
        { id: '5gikbz', q: 'W którym roku zmarł Bolesław Krzywousty i zaczęło się rozbicie dzielnicowe?', options: ['1025', '1138', '1241', '1320'], answer: 1, explain: 'Krzywousty zmarł w 1138 r., po podzieleniu państwa między synów. Rozbicie trwało do 1320 r.' },
        { id: '05blqf', q: 'Dlaczego Bolesław Krzywousty podzielił państwo między synów?', options: ['chciał, żeby synowie nie walczyli o tron', 'chciał oddać Polskę cesarzowi', 'tak nakazali mu Krzyżacy', 'żaden z synów nie chciał rządzić'], answer: 0, explain: 'Krzywousty chciał zapobiec walce synów o władzę. Każdy dostał dzielnicę, a najstarszy miał być najważniejszy.' },
        { id: 'z8987a', q: 'Na czym polegała zasada senioratu?', options: ['rządzi najmłodszy syn władcy', 'władcę wybierają mieszkańcy miast', 'najważniejszym władcą jest najstarszy z rodu Piastów', 'kraj ma dwóch równych królów'], answer: 2, explain: 'Senior to najstarszy Piast. Miał zwierzchnią władzę (pryncypat) i rządził w Krakowie.' },
        { id: 'gk4dkq', q: 'Co oznacza pojęcie „pryncypat”?', options: ['zwierzchnią władzę seniora nad całym krajem', 'podział ziemi na trzy pola', 'opłatę za ziemię', 'zakon rycerski'], answer: 0, explain: 'Pryncypat to władza seniora (princepsa): obrona granic, sprawy zagraniczne, bicie monet, mianowanie biskupów.' },
        { id: '8m91m0', q: 'Które miasto należało do dzielnicy senioralnej?', options: ['Gniezno', 'Kraków', 'Płock', 'Sandomierz'], answer: 1, explain: 'Senior rządził w Krakowie – kto miał Kraków, miał władzę zwierzchnią. Dlatego książęta tak długo walczyli o to miasto.' },
        { id: '352ycw', q: 'Skąd wziął się przydomek Władysława Wygnańca?', options: ['wygnał Krzyżaków z Polski', 'wygnał Mongołów spod Legnicy', 'bracia wygnali go z kraju', 'wygnał wszystkich osadników'], answer: 2, explain: 'Władysław chciał rządzić sam, bez braci. Juniorzy pokonali go i wygnali z Polski (1146 r.).' },
        { id: 'r1d4p8', q: 'Który skutek rozbicia dzielnicowego był najgroźniejszy dla Polski?', options: ['powstanie nowych miast', 'słabe, małe księstwa trudno było obronić przed najazdami', 'upowszechnienie trójpolówki', 'zbudowanie kościoła Mariackiego'], answer: 1, explain: 'Podzielony kraj był słaby. Najeżdżali go m.in. Prusowie, Litwini i Mongołowie. Nowe miasta i trójpolówka to zmiany korzystne.' },
        { id: 'v0yvxz', q: 'Kto zginął w bitwie z Mongołami pod Legnicą w 1241 r.?', options: ['Henryk Pobożny', 'Bolesław Chrobry', 'Konrad Mazowiecki', 'Władysław Łokietek'], answer: 0, explain: 'Książę Henryk Pobożny zginął pod Legnicą, walcząc z Mongołami (Tatarami).' },
        { id: 'dj4bup', q: 'Co mimo rozbicia łączyło ziemie polskie?', options: ['jeden król w Krakowie', 'wspólna armia', 'ten sam ród władców, język i Kościół z arcybiskupem w Gnieźnie', 'wspólna stolica w Malborku'], answer: 2, explain: 'Książęta byli Piastami, ludzie mówili tym samym językiem, a Kościół miał wspólnego arcybiskupa w Gnieźnie. Króla wtedy nie było.' },
        { id: '1uxcj0', q: 'Kto sprowadził Krzyżaków do Polski?', options: ['Bolesław Krzywousty', 'Kazimierz Wielki', 'Henryk Pobożny', 'Konrad Mazowiecki'], answer: 3, explain: 'Konrad Mazowiecki sprowadził Krzyżaków ok. 1226 r., żeby bronili Mazowsza przed Prusami.' },
        { id: '7zhl47', q: 'Dlaczego Konrad Mazowiecki sprowadził Krzyżaków?', options: ['do obrony Mazowsza przed napadami Prusów', 'do budowy kościołów w Krakowie', 'żeby koronowali go na króla', 'do walki z Mongołami pod Legnicą'], answer: 0, explain: 'Pogańscy Prusowie napadali na Mazowsze. Krzyżacy mieli ich pokonać i nawrócić.' },
        { id: '9eqd5y', q: 'Jaką ziemię dostali Krzyżacy od Konrada Mazowieckiego?', options: ['Pomorze Gdańskie', 'ziemię chełmińską', 'Śląsk', 'ziemię sandomierską'], answer: 1, explain: 'Krzyżacy dostali ziemię chełmińską. Pomorze Gdańskie zajęli sami znacznie później (1308–1309).' },
        { id: '55ghup', q: 'Jaki był skutek sprowadzenia Krzyżaków?', options: ['Prusowie podbili Mazowsze', 'Krzyżacy zostali poddanymi księcia mazowieckiego', 'Krzyżacy wyjechali po roku', 'powstało silne państwo zakonne, groźne dla Polski'], answer: 3, explain: 'Krzyżacy podbili Prusów i założyli własne państwo. Nie słuchali polskich książąt i zajęli Pomorze Gdańskie.' },
        { id: 'j02w6w', q: 'Które miasto było od 1309 r. stolicą państwa krzyżackiego?', options: ['Malbork', 'Gniezno', 'Legnica', 'Kraków'], answer: 0, explain: 'Stolicą Krzyżaków był Malbork z ogromnym gotyckim zamkiem z cegły.' },
        { id: 'ughn9i', q: 'Kim był sołtys we wsi lokowanej na prawie niemieckim?', options: ['księciem seniorem', 'zasadźcą, który sprowadził osadników i kierował wsią', 'rycerzem zakonnym', 'burmistrzem miasta'], answer: 1, explain: 'Zasadźca sprowadzał osadników i zostawał sołtysem we wsi (w mieście – wójtem).' },
        { id: 'fdcpe1', q: 'Co to była wolnizna?', options: ['podatek dla księcia', 'wolny dzień w tygodniu', 'czas, w którym osadnicy nie płacili opłat', 'nazwa nowego pługa'], answer: 2, explain: 'Na początku osadnicy mieli wolniznę – lata bez opłat, żeby karczować las i urządzić gospodarstwo. Potem płacili czynsz.' },
        { id: 'x2rpg0', q: 'Na czym polegała trójpolówka?', options: ['na sianiu jednego zboża co roku na całym polu', 'na dzieleniu ziemi na trzy pola: zboże ozime, zboże jare i ugór', 'na oraniu trzema pługami naraz', 'na zbieraniu plonów trzy razy w roku'], answer: 1, explain: 'Jedno pole obsiewano zbożem ozimym, drugie jarym, a trzecie odpoczywało. Co roku pola się zmieniały.' },
        { id: 'l9lny5', q: 'Co było w centrum miasta lokowanego na prawie niemieckim?', options: ['rynek z ratuszem', 'zamek krzyżacki', 'wał z drewna i ziemi', 'pole uprawne'], answer: 0, explain: 'W środku był rynek z ratuszem, ulice tworzyły szachownicę, a miasto otaczały mury obronne.' },
        { id: 'gylued', q: 'Kto rządził miastem lokowanym na prawie niemieckim?', options: ['wyłącznie książę', 'wielki mistrz', 'senior z Krakowa', 'samorząd: rada miejska z burmistrzem oraz wójt z ławnikami'], answer: 3, explain: 'Miasta miały samorząd. Rada z burmistrzem zarządzała miastem, a wójt z ławnikami sądził.' },
        { id: 'fie0v9', q: 'Który zabytek jest przykładem sztuki romańskiej?', options: ['zamek w Malborku', 'kościół Mariacki w Krakowie', 'Drzwi Gnieźnieńskie', 'kościół Mariacki w Gdańsku'], answer: 2, explain: 'Brązowe Drzwi Gnieźnieńskie pochodzą z XII w. – to sztuka romańska. Pozostałe budowle są gotyckie.' },
        { id: 'perr4b', q: 'Która budowla to największa ceglana budowla gotycka w Europie?', options: ['kolegiata w Tumie', 'zamek w Malborku', 'rotunda na Wawelu', 'Drzwi Gnieźnieńskie'], answer: 1, explain: 'Zamek w Malborku był siedzibą wielkich mistrzów krzyżackich. Jest na liście światowego dziedzictwa UNESCO.' },
        { id: '0q02bm', q: 'Prawda czy fałsz?\nZasada senioratu na długo zapewniła jedność Polski.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Nie udało się. Bracia walczyli z seniorem, a dzielnice rozpadały się na coraz mniejsze księstwa.' },
      ],
    },
    {
      id: 'ostatni-piastowie',
      name: 'Polska ostatnich Piastów',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 12 „Zjednoczone królestwo – Polska ostatnich Piastów”, wym. 1 (dokonania Władysława Łokietka i Kazimierza Wielkiego: Akademia Krakowska, koronacja, monarchia stanowa), wym. 2 (daty koronacji Władysława Łokietka i wygaśnięcia dynastii Piastów na tronie Polski oraz ich znaczenie), wym. 3 (zmiany terytorialne państwa ostatnich Piastów na mapie). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Rządy Kazimierza Wielkiego”, „Polityka zagraniczna Kazimierza Wielkiego”, „Konflikt z Krzyżakami i Czechami”, „Rozbicie dzielnicowe”, „Zastał Polskę drewnianą – sukcesy polityki wewnętrznej Kazimierza Wielkiego”): koronacja Łokietka 20.01.1320 w Krakowie, bitwa pod Płowcami 1331 (nierozstrzygnięta), koronacja Kazimierza 1333, układ w Wyszehradzie 1335, pokój kaliski 1343 (powrót Kujaw i ziemi dobrzyńskiej, Pomorze Gdańskie przy Krzyżakach), pokój w Namysłowie 1348 (Śląsk przy Czechach), przyłączanie Rusi Halickiej (1340–1366, Lwów 1349), zwierzchnictwo nad Mazowszem (1351), statut wiślicki, Akademia Krakowska 1364 (kształcenie prawników), zjazd monarchów w Krakowie 1364, śmierć Kazimierza w 1370 r. i następca – Ludwik Węgierski (Andegaweński), siostrzeniec. Powiedzenie o „Polsce drewnianej i murowanej” zapisał kronikarz Jan Długosz prawie sto lat po śmierci króla – historycy traktują je jako uproszczenie. Zasięg ziem podano schematycznie.',
      theory: `
        <h3>Władysław Łokietek jednoczy kraj</h3>
        <p><b>Władysław Łokietek</b> był księciem kujawskim z rodu Piastów. Przez wiele lat walczył o zjednoczenie ziem polskich. Przydomek „Łokietek” zawdzięczał niskiemu wzrostowi (łokieć to dawna miara długości).</p>
        <ul>
          <li>W 1308–1309 r. Krzyżacy podstępem zajęli <b>Pomorze Gdańskie</b>. Łokietek nie zdołał go odzyskać.</li>
          <li><b>20 stycznia 1320 r.</b> Łokietek został <b>koronowany na króla Polski</b> w katedrze w <b>Krakowie</b>. To koniec rozbicia dzielnicowego. Od tej pory przez kilkaset lat koronacje polskich królów odbywały się zwykle w Krakowie.</li>
          <li>W <b>1331 r.</b> rycerstwo Łokietka starło się z Krzyżakami pod <b>Płowcami</b>. Bitwa była nierozstrzygnięta, ale pokazała, że z Krzyżakami można walczyć.</li>
          <li>Łokietek zmarł w 1333 r. Zostawił królestwo złożone głównie z <b>Wielkopolski i Małopolski</b>. Śląsk, Mazowsze i Pomorze Gdańskie były poza jego granicami.</li>
        </ul>
        <p><b>Znaczenie koronacji z 1320 r.</b>: znów było jedno <b>Królestwo Polskie</b> z królem na czele – silniejsze i uznawane w Europie.</p>
        <p><b>Koronacja</b> – uroczyste nałożenie korony nowemu królowi, znak, że obejmuje władzę.</p>
        <h3>Kazimierz Wielki – dyplomata</h3>
        <p>Syn Łokietka, <b>Kazimierz Wielki</b>, rządził w latach <b>1333–1370</b>. Wolał rozmowy i umowy (<b>dyplomację</b>) od wojen.</p>
        <ul>
          <li><b>1335 r.</b> – w Wyszehradzie zapłacił królowi Czech, żeby ten zrezygnował z prawa do korony polskiej.</li>
          <li><b>1343 r.</b> – <b>pokój w Kaliszu</b> z Krzyżakami: Polska odzyskała <b>Kujawy i ziemię dobrzyńską</b>, ale <b>Pomorze Gdańskie zostało przy Krzyżakach</b>.</li>
          <li><b>1348 r.</b> – uznał, że <b>Śląsk</b> należy do Czech.</li>
          <li>Na wschodzie przyłączył <b>Ruś Halicką</b> ze <b>Lwowem</b>.</li>
          <li>Książęta <b>Mazowsza</b> złożyli mu hołd – uznali go za swojego zwierzchnika.</li>
        </ul>
        <h3>Reformy Kazimierza Wielkiego</h3>
        <ul>
          <li><b>Prawo</b>: kazał spisać prawa – <b>statuty</b> (np. statut wiślicki). Sędziowie mieli sądzić według tych samych zasad.</li>
          <li><b>Pieniądz</b>: w Krakowie działała mennica królewska, w której bito monety.</li>
          <li><b>Budowy</b>: zakładał nowe miasta (np. Kazimierz pod Krakowem), budował zamki i mury obronne. Kronikarz Jan Długosz napisał o nim, że <b>„zastał Polskę drewnianą, a zostawił murowaną”</b>.</li>
          <li><b>Rada królewska</b>: król rządził z pomocą najważniejszych dostojników.</li>
          <li><b>Akademia Krakowska</b> – w <b>1364 r.</b> założył w Krakowie uczelnię – pierwszy uniwersytet w Polsce. Kształcili się tu głównie przyszli prawnicy. Dziś to Uniwersytet Jagielloński.</li>
          <li>W 1364 r. w Krakowie spotkali się królowie i książęta z wielu krajów (zjazd monarchów) – Polska była szanowana w Europie.</li>
        </ul>
        <p><b>Monarchia stanowa</b> – państwo, w którym rządzi król, a społeczeństwo dzieli się na <b>stany</b> (duchowieństwo, rycerstwo, mieszczanie, chłopi) o różnych prawach i obowiązkach. Najważniejsze stany pomagają królowi rządzić. Za Kazimierza Wielkiego Polska stawała się monarchią stanową.</p>
        <h3>Koniec dynastii Piastów na tronie – 1370</h3>
        <p>Kazimierz Wielki zmarł w <b>1370 r.</b> Miał córki, ale nie miał syna, a kobiety nie dziedziczyły wtedy tronu. Na tym <b>skończyło się panowanie Piastów na tronie Polski</b> (książęta z tego rodu rządzili jeszcze długo m.in. na Mazowszu i Śląsku). Królem został <b>Ludwik Węgierski</b> (Andegaweński) – król Węgier, siostrzeniec Kazimierza.</p>
        <p><b>Znaczenie</b>: na tron weszła nowa dynastia z zagranicy. Polska zaczęła się wiązać z innymi państwami przez osobę władcy.</p>
        <table>
          <tr><th>Data</th><th>Wydarzenie</th></tr>
          <tr><td><b>1320</b></td><td><b>koronacja Władysława Łokietka</b> – koniec rozbicia dzielnicowego</td></tr>
          <tr><td>1333</td><td>początek panowania Kazimierza Wielkiego</td></tr>
          <tr><td>1343</td><td>pokój w Kaliszu – powrót Kujaw i ziemi dobrzyńskiej</td></tr>
          <tr><td>1364</td><td>założenie Akademii Krakowskiej</td></tr>
          <tr><td><b>1370</b></td><td><b>śmierć Kazimierza Wielkiego – koniec dynastii Piastów na tronie Polski</b></td></tr>
        </table>
        <h3>Jak zmieniły się granice? (1333 → 1370)</h3>
        <table>
          <tr><th>Zyskane</th><th>Poza granicami</th></tr>
          <tr><td>Kujawy i ziemia dobrzyńska (1343), Ruś Halicka ze Lwowem, zwierzchnictwo nad Mazowszem</td><td>Pomorze Gdańskie (Krzyżacy), Śląsk (Czechy)</td></tr>
        </table>
      `,
      flashcards: [
        ['Władysław Łokietek', 'Książę kujawski, zjednoczył ziemie polskie; koronowany na króla w 1320 r.'],
        ['1320 r.', 'Koronacja Władysława Łokietka w Krakowie – koniec rozbicia dzielnicowego'],
        ['Koronacja', 'Uroczyste nałożenie korony nowemu królowi – znak objęcia władzy'],
        ['Płowce (1331 r.)', 'Bitwa rycerstwa Łokietka z Krzyżakami – nierozstrzygnięta, ale dodała Polakom otuchy'],
        ['Kazimierz Wielki', 'Syn Łokietka, król w latach 1333–1370; dyplomata, reformator, założyciel Akademii Krakowskiej'],
        ['Pokój w Kaliszu (1343 r.)', 'Krzyżacy oddali Kujawy i ziemię dobrzyńską, zatrzymali Pomorze Gdańskie'],
        ['Ruś Halicka', 'Ziemie ze Lwowem, przyłączone przez Kazimierza Wielkiego'],
        ['Akademia Krakowska (1364 r.)', 'Pierwszy uniwersytet w Polsce, założony przez Kazimierza Wielkiego; dziś Uniwersytet Jagielloński'],
        ['Statut', 'Spisany zbiór praw; za Kazimierza Wielkiego np. statut wiślicki'],
        ['„Zastał Polskę drewnianą, a zostawił murowaną”', 'Słowa Jana Długosza o Kazimierzu Wielkim – budowniczym zamków, murów i miast'],
        ['Monarchia stanowa', 'Państwo z królem, w którym społeczeństwo dzieli się na stany o różnych prawach, a najważniejsze stany pomagają rządzić'],
        ['1370 r.', 'Śmierć Kazimierza Wielkiego – koniec dynastii Piastów na tronie Polski'],
        ['Ludwik Węgierski', 'Król Węgier, siostrzeniec Kazimierza Wielkiego; król Polski od 1370 r.'],
      ],
      questions: [
        { id: 'y35zgw', q: 'W którym roku Władysław Łokietek został koronowany na króla Polski?', options: ['1138', '1320', '1370', '1410'], answer: 1, explain: 'Koronacja Łokietka odbyła się 20 stycznia 1320 r. w Krakowie.' },
        { id: 'osvo70', q: 'Jakie znaczenie miała koronacja Władysława Łokietka?', options: ['zakończyła rozbicie dzielnicowe – znów było jedno Królestwo Polskie', 'zaczęła rozbicie dzielnicowe', 'oznaczała chrzest Polski', 'oddała Polskę pod władzę Czech'], answer: 0, explain: 'Rok 1320 kończy rozbicie dzielnicowe. Królestwo Polskie znów miało króla.' },
        { id: '33xaar', q: 'W którym mieście koronowano Władysława Łokietka?', options: ['w Gnieźnie', 'w Malborku', 'w Krakowie', 'w Poznaniu'], answer: 2, explain: 'Łokietek koronował się w katedrze w Krakowie. Później przez kilkaset lat koronacje odbywały się zwykle właśnie tam.' },
        { id: '9a8y6t', q: 'Które ziemie zajęli Krzyżacy w latach 1308–1309?', options: ['Ruś Halicką', 'Pomorze Gdańskie', 'Mazowsze', 'Śląsk'], answer: 1, explain: 'Krzyżacy podstępem zajęli Pomorze Gdańskie z Gdańskiem. Łokietek nie zdołał go odzyskać.' },
        { id: '3h960i', q: 'Z kim walczyło rycerstwo Łokietka pod Płowcami w 1331 r.?', options: ['z Mongołami', 'z Rzymianami', 'z Czechami', 'z Krzyżakami'], answer: 3, explain: 'Pod Płowcami walczono z Krzyżakami. Bitwa była nierozstrzygnięta, ale pokazała, że można ich pokonać.' },
        { id: '6hjv71', q: 'Kim był Kazimierz Wielki dla Władysława Łokietka?', options: ['synem', 'bratem', 'wnukiem', 'teściem'], answer: 0, explain: 'Kazimierz Wielki był synem Łokietka. Panował po nim w latach 1333–1370.' },
        { id: 'j39ytw', q: 'Co Polska odzyskała na mocy pokoju w Kaliszu (1343 r.)?', options: ['Pomorze Gdańskie', 'Śląsk', 'Kujawy i ziemię dobrzyńską', 'Prusy'], answer: 2, explain: 'Krzyżacy oddali Kujawy i ziemię dobrzyńską, ale zatrzymali Pomorze Gdańskie.' },
        { id: 'gmm7lq', q: 'Jakie ziemie przyłączył Kazimierz Wielki na wschodzie?', options: ['Ruś Halicką ze Lwowem', 'Pomorze Gdańskie', 'Litwę', 'Łużyce'], answer: 0, explain: 'Kazimierz przyłączył Ruś Halicką ze Lwowem. Pomorze Gdańskie pozostało przy Krzyżakach.' },
        { id: 'i8080x', q: 'Którą krainę Kazimierz Wielki uznał za część Czech?', options: ['Mazowsze', 'Śląsk', 'Kujawy', 'Wielkopolskę'], answer: 1, explain: 'W 1348 r. Kazimierz uznał, że Śląsk należy do Czech – w zamian za spokój na zachodzie.' },
        { id: '67i7x9', q: 'W którym roku Kazimierz Wielki założył Akademię Krakowską?', options: ['1320', '1343', '1364', '1410'], answer: 2, explain: 'Akademia Krakowska powstała w 1364 r. To pierwszy uniwersytet w Polsce – dziś Uniwersytet Jagielloński.' },
        { id: 'ovwhd8', q: 'Kogo kształciła przede wszystkim Akademia Krakowska założona przez Kazimierza Wielkiego?', options: ['rycerzy zakonnych', 'przyszłych prawników', 'kowali i cieśli', 'żeglarzy'], answer: 1, explain: 'Państwo potrzebowało ludzi znających prawo – urzędników i sędziów.' },
        { id: '5f7kio', q: 'O kim Jan Długosz napisał, że „zastał Polskę drewnianą, a zostawił murowaną”?', options: ['o Mieszku I', 'o Bolesławie Krzywoustym', 'o Władysławie Łokietku', 'o Kazimierzu Wielkim'], answer: 3, explain: 'Tak pisano o Kazimierzu Wielkim, który budował zamki, mury obronne i zakładał miasta.' },
        { id: 'svhqkt', q: 'Czym jest statut?', options: ['spisanym zbiorem praw', 'rodzajem monety', 'zamkiem obronnym', 'uroczystością koronacji'], answer: 0, explain: 'Statut to spisane prawo. Za Kazimierza Wielkiego spisano m.in. statut wiślicki.' },
        { id: 'uf0ize', q: 'Co to jest monarchia stanowa?', options: ['państwo bez króla', 'państwo z królem, w którym społeczeństwo dzieli się na stany, a najważniejsze stany pomagają rządzić', 'państwo rządzone przez zakon rycerski', 'państwo podzielone na dzielnice'], answer: 1, explain: 'W monarchii stanowej rządzi król, a stany (np. duchowieństwo, rycerstwo, mieszczanie) mają różne prawa i obowiązki.' },
        { id: 'ibizw2', q: 'Dlaczego w 1370 r. skończyło się panowanie Piastów na tronie Polski?', options: ['Kazimierz Wielki zginął pod Grunwaldem', 'Kazimierz Wielki oddał tron Krzyżakom', 'Kazimierz Wielki zmarł bez syna, a kobiety nie dziedziczyły tronu', 'Piastowie przenieśli się na Węgry'], answer: 2, explain: 'Kazimierz miał tylko córki. Tron objął jego siostrzeniec, Ludwik Węgierski.' },
        { id: '3donjo', q: 'Kto został królem Polski po śmierci Kazimierza Wielkiego?', options: ['Ludwik Węgierski', 'Władysław Łokietek', 'Bolesław Chrobry', 'Konrad Mazowiecki'], answer: 0, explain: 'Królem został Ludwik Węgierski (Andegaweński) – król Węgier i siostrzeniec Kazimierza.' },
        {
          id: '7kmt8u',
          q: 'Którą literą na osi czasu oznaczono koniec dynastii Piastów na tronie Polski?',
          svg: `<svg viewBox="0 0 360 130" role="img" aria-label="Oś czasu z czterema punktami: A – rok 1138, B – rok 1320, C – rok 1364, D – rok 1370">
      <line x1="15" y1="60" x2="345" y2="60" class="ln sw"/>
      <line x1="60" y1="50" x2="60" y2="70" class="ln sw"/>
      <line x1="135" y1="50" x2="135" y2="70" class="ln sw"/>
      <line x1="215" y1="50" x2="215" y2="70" class="ln sw"/>
      <line x1="295" y1="50" x2="295" y2="70" class="ln sw"/>
      <circle cx="60" cy="27" r="14" class="f4 s4 sw"/>
      <circle cx="135" cy="27" r="14" class="f4 s4 sw"/>
      <circle cx="215" cy="27" r="14" class="f4 s4 sw"/>
      <circle cx="295" cy="27" r="14" class="f4 s4 sw"/>
      <text x="60" y="33" class="tx-b" text-anchor="middle">A</text>
      <text x="135" y="33" class="tx-b" text-anchor="middle">B</text>
      <text x="215" y="33" class="tx-b" text-anchor="middle">C</text>
      <text x="295" y="33" class="tx-b" text-anchor="middle">D</text>
      <text x="60" y="95" class="tx" text-anchor="middle">1138</text>
      <text x="135" y="95" class="tx" text-anchor="middle">1320</text>
      <text x="215" y="95" class="tx" text-anchor="middle">1364</text>
      <text x="295" y="95" class="tx" text-anchor="middle">1370</text>
      <text x="180" y="122" class="tx-s" text-anchor="middle">oś czasu (odstępy nie są w skali)</text>
    </svg>`,
          options: ['A', 'B', 'C', 'D'],
          noShuffle: true,
          answer: 3,
          explain: 'Kazimierz Wielki zmarł w 1370 r. – litera D. 1138 (A) to początek rozbicia dzielnicowego, 1320 (B) – koronacja Łokietka, 1364 (C) – założenie Akademii Krakowskiej.',
        },
        { id: 'av7ji6', q: 'Prawda czy fałsz?\nKazimierz Wielki odzyskał od Krzyżaków Pomorze Gdańskie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Pomorze Gdańskie zostało przy Krzyżakach. W 1343 r. Polska odzyskała tylko Kujawy i ziemię dobrzyńską.' },
        { id: 'ruyiaa', q: 'Ułóż chronologicznie (od najdawniejszego): założenie Akademii Krakowskiej, koronacja Łokietka, pokój w Kaliszu.', options: ['koronacja (1320) → pokój w Kaliszu (1343) → Akademia (1364)', 'Akademia (1364) → koronacja (1320) → pokój w Kaliszu (1343)', 'pokój w Kaliszu (1343) → koronacja (1320) → Akademia (1364)', 'koronacja (1320) → Akademia (1364) → pokój w Kaliszu (1343)'], answer: 0, explain: 'Mniejsza liczba to dawniej: 1320 → 1343 → 1364.' },
      ],
    },
    {
      id: 'polska-litwa',
      name: 'Polska i Litwa przeciw Krzyżakom',
      basis: 'Dz.U. 2026 poz. 378, historia kl. IV–VI: dz. 13 „Początki państwa polsko-litewskiego i relacje z Krzyżakami”, wym. 1 (przyczyny i skutki sporu polsko-krzyżackiego oraz unii polsko-litewskiej: chrystianizacja, unia personalna), wym. 2 (data bitwy pod Grunwaldem; chronologia: umowa w Krewie, II pokój toruński), wym. 3 (zasięg Polski i Litwy oraz zmiany granic na mocy II pokoju toruńskiego na mapie), wym. 4 (wpływ Jadwigi i Władysława Jagiełły na odnowienie Akademii Krakowskiej – moduł kultura), wym. 5 (Zawisza Czarny jako ideał rycerza średniowiecznego, aktualność etosu rycerskiego – moduł kultura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy). Fakty sprawdzone 2.11.2026 w materiałach Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Od unii w Krewie do II pokoju toruńskiego”, „Jadwiga i Jagiełło”, „Wielka wojna z zakonem krzyżackim”, „Jadwiga Andegaweńska na polskim tronie”, „W kręgu kultury rycerskiej”, „Wojna trzynastoletnia i jej skutki”), na dzieje.pl (testament Jadwigi i odnowienie Akademii) i w materiałach o hołdach wielkich mistrzów po 1466 r.: koronacja Jadwigi 16.10.1384, umowa w Krewie 14.08.1385, chrzest i ślub Jagiełły oraz koronacja w 1386 r., chrzest Litwy 1387, odnowienie Akademii 1400, wielka wojna 1409–1411, Grunwald 15.07.1410 (Ulryk von Jungingen poległ; dwa nagie miecze), oblężenie Malborka (ok. dwóch miesięcy, nieudane), I pokój toruński 1411 (Żmudź dla Litwy, ziemia dobrzyńska dla Polski), wojna trzynastoletnia 1454–1466, II pokój toruński 1466 (Prusy Królewskie, hołd lenny wielkich mistrzów). Zawisza Czarny – „polegać jak na Zawiszy”, męstwo pod Grunwaldem, sława turniejowa, śmierć w 1428 r. w walce z Turkami. Obraz Zawiszy jako rycerza bez skazy to w dużej mierze legenda – zaznaczamy to w tekście.',
      theory: `
        <h3>Jadwiga – król Polski</h3>
        <p>Po śmierci Ludwika Węgierskiego tron objęła jego córka <b>Jadwiga</b>. W <b>1384 r.</b> została koronowana na <b>króla</b> Polski (a nie królową) – tak podkreślono, że to ona ma pełnię władzy. Polscy możni szukali dla niej męża, który pomoże w walce z Krzyżakami.</p>
        <h3>Litwa i Krzyżacy</h3>
        <p><b>Wielkie Księstwo Litewskie</b> było ogromnym państwem na wschód od Polski. Litwini nie byli jeszcze chrześcijanami. Władcą był wielki książę <b>Jagiełło</b>. Krzyżacy najeżdżali Litwę, tłumacząc, że chcą ją nawrócić. Polska i Litwa miały więc <b>wspólnego wroga</b>.</p>
        <h3>Umowa w Krewie – 1385</h3>
        <p>W <b>1385 r.</b> w <b>Krewie</b> Jagiełło obiecał, że:</p>
        <ul>
          <li>przyjmie <b>chrzest</b> razem z poddanymi,</li>
          <li><b>połączy Litwę z Polską</b>,</li>
          <li>będzie się starał <b>odzyskać utracone ziemie</b> Polski.</li>
        </ul>
        <p>W zamian miał poślubić Jadwigę i zostać królem Polski. W <b>1386 r.</b> Jagiełło przyjął chrzest (imię <b>Władysław</b>), poślubił Jadwigę i został koronowany. W <b>1387 r.</b> nastąpił <b>chrzest Litwy</b>.</p>
        <ul>
          <li><b>Unia</b> – związek dwóch państw.</li>
          <li><b>Unia personalna</b> – dwa państwa mają <b>wspólnego władcę</b>, ale każde ma swoje prawa i urzędy. (Łacińskie <i>persona</i> = osoba – łączy je osoba władcy.)</li>
          <li><b>Chrystianizacja</b> – szerzenie chrześcijaństwa, nawracanie ludzi na tę wiarę. Chrzest Litwy odebrał Krzyżakom powód do najazdów.</li>
        </ul>
        <p><b>Skutki unii</b>: Polska i Litwa razem były silniejsze od Krzyżaków. Od Jagiełły pochodzi nowa dynastia – <b>Jagiellonowie</b>.</p>
        <h3>Jadwiga, Jagiełło i Akademia Krakowska</h3>
        <p>Uczelnia założona przez Kazimierza Wielkiego podupadła. Królowa <b>Jadwiga</b> zapisała w testamencie swoje <b>klejnoty</b> i kosztowności na jej odnowienie. Zmarła w 1399 r., a <b>Władysław Jagiełło</b> spełnił jej wolę – w <b>1400 r.</b> <b>odnowił Akademię Krakowską</b>. Dlatego dziś nosi ona nazwę <b>Uniwersytet Jagielloński</b>.</p>
        <h3>Wielka wojna i Grunwald – 1410</h3>
        <p>Spór o <b>Żmudź</b> (ziemię litewską zajętą przez Krzyżaków) doprowadził do <b>wielkiej wojny</b> (1409–1411).</p>
        <ul>
          <li><b>15 lipca 1410 r.</b> – <b>bitwa pod Grunwaldem</b>. Wojskami polsko-litewskimi dowodzili król <b>Władysław Jagiełło</b> i wielki książę litewski <b>Witold</b>. Krzyżakami – wielki mistrz <b>Ulryk von Jungingen</b>.</li>
          <li>Przed bitwą posłowie krzyżaccy przynieśli królowi i Witoldowi <b>dwa nagie miecze</b> – było to wyzwanie do walki.</li>
          <li>Krzyżacy ponieśli klęskę, a wielki mistrz poległ. To jedna z największych bitew średniowiecznej Europy.</li>
          <li>Wojska oblegały potem <b>Malbork</b> przez około dwa miesiące, ale go nie zdobyły.</li>
          <li><b>I pokój toruński (1411)</b>: Litwa odzyskała Żmudź, Polska – ziemię dobrzyńską. Krzyżacy byli osłabieni, ale nadal silni. Upadł jednak mit, że są niezwyciężeni.</li>
        </ul>
        <h3>Zawisza Czarny – wzór rycerza</h3>
        <p><b>Zawisza Czarny z Garbowa</b> walczył pod Grunwaldem i słynął ze zwycięstw w <b>turniejach</b> rycerskich. Zginął w 1428 r. w walce z Turkami. Uważano go za ideał rycerza – mówimy do dziś: <b>„polegać jak na Zawiszy”</b>, czyli na kimś, kto nigdy nie zawiedzie.</p>
        <p><b>Etos rycerski</b> – zasady, którymi miał się kierować dobry rycerz: <b>odwaga</b>, <b>wierność</b> danemu słowu i władcy, <b>honor</b>, uczciwa walka, <b>obrona słabszych</b>. Wiele opowieści o Zawiszy to legenda – ale pokazuje, kogo wtedy podziwiano.</p>
        <div class="tip">💡 Do dyskusji: czy cechy dobrego rycerza są ważne także dziś? Kogo dziś nazwałbyś „Zawiszą” – na kim zawsze można polegać? Uzasadnij swoje zdanie.</div>
        <h3>Wojna trzynastoletnia i II pokój toruński – 1466</h3>
        <p>Mieszkańcy miast i rycerze z państwa krzyżackiego mieli dość rządów zakonu. W 1454 r. poprosili króla Polski o przyłączenie do Polski. Wybuchła <b>wojna trzynastoletnia</b> (1454–1466).</p>
        <p><b>II pokój toruński (1466)</b>:</p>
        <ul>
          <li>Polska odzyskała <b>Pomorze Gdańskie</b> z Gdańskiem i <b>ziemię chełmińską</b>, a także zdobyła <b>Warmię</b>, <b>Malbork</b> i <b>Elbląg</b>. Te ziemie nazwano <b>Prusami Królewskimi</b>.</li>
          <li>Polska odzyskała <b>dostęp do morza</b> i Gdańsk.</li>
          <li>Reszta ziem zakonu, ze stolicą w <b>Królewcu</b>, to <b>Prusy Zakonne</b>. Wielki mistrz musiał składać królowi Polski <b>hołd lenny</b> – przysięgać mu wierność.</li>
        </ul>
        <table>
          <tr><th>Data</th><th>Wydarzenie</th></tr>
          <tr><td>1384</td><td>koronacja Jadwigi</td></tr>
          <tr><td><b>1385</b></td><td><b>umowa w Krewie</b></td></tr>
          <tr><td>1386 / 1387</td><td>Jagiełło królem Polski / chrzest Litwy</td></tr>
          <tr><td>1400</td><td>odnowienie Akademii Krakowskiej</td></tr>
          <tr><td><b>1410</b></td><td><b>bitwa pod Grunwaldem</b></td></tr>
          <tr><td><b>1466</b></td><td><b>II pokój toruński</b></td></tr>
        </table>
      `,
      flashcards: [
        ['Jadwiga', 'Córka Ludwika Węgierskiego, koronowana na króla Polski w 1384 r.; żona Jagiełły'],
        ['Jagiełło', 'Wielki książę litewski; po chrzcie Władysław, król Polski od 1386 r.'],
        ['Umowa w Krewie (1385 r.)', 'Jagiełło obiecał chrzest, połączenie Litwy z Polską i odzyskanie ziem – w zamian za rękę Jadwigi i koronę'],
        ['Unia personalna', 'Dwa państwa mają wspólnego władcę, ale osobne prawa i urzędy'],
        ['Chrystianizacja', 'Szerzenie chrześcijaństwa, nawracanie ludzi na tę wiarę'],
        ['1387 r.', 'Chrzest Litwy'],
        ['Jagiellonowie', 'Dynastia wywodząca się od Władysława Jagiełły'],
        ['Odnowienie Akademii Krakowskiej (1400 r.)', 'Jadwiga zapisała na nią klejnoty, Jagiełło odnowił uczelnię – dziś Uniwersytet Jagielloński'],
        ['Bitwa pod Grunwaldem', '15 lipca 1410 r.; wojska polsko-litewskie (Jagiełło, Witold) pokonały Krzyżaków'],
        ['Ulryk von Jungingen', 'Wielki mistrz krzyżacki; poległ pod Grunwaldem'],
        ['Dwa nagie miecze', 'Wyzwanie do walki – miecze przyniesione przez posłów krzyżackich przed bitwą pod Grunwaldem'],
        ['I pokój toruński (1411 r.)', 'Litwa odzyskała Żmudź, Polska – ziemię dobrzyńską'],
        ['Zawisza Czarny z Garbowa', 'Słynny rycerz, walczył pod Grunwaldem; „polegać jak na Zawiszy” – na kimś, kto nie zawiedzie'],
        ['Etos rycerski', 'Zasady dobrego rycerza: odwaga, wierność, honor, uczciwa walka, obrona słabszych'],
        ['Wojna trzynastoletnia', 'Wojna Polski z Krzyżakami w latach 1454–1466'],
        ['II pokój toruński (1466 r.)', 'Polska odzyskała Pomorze Gdańskie i ziemię chełmińską, zdobyła Warmię, Malbork i Elbląg (Prusy Królewskie)'],
        ['Hołd lenny', 'Przysięga wierności składana zwierzchnikowi – po 1466 r. wielki mistrz składał ją królowi Polski'],
      ],
      questions: [
        { id: 'tyxzo5', q: 'Na kogo koronowano Jadwigę w 1384 r.?', options: ['na króla Polski', 'na cesarzową', 'na wielką księżną litewską', 'na królową Węgier'], answer: 0, explain: 'Jadwigę koronowano na króla Polski – podkreślano tak, że to ona ma pełnię władzy.' },
        { id: 'na0zjv', q: 'Co łączyło Polskę i Litwę pod koniec XIV w.?', options: ['wspólna stolica', 'wspólny wróg – Krzyżacy', 'ten sam język', 'wspólna wiara od X w.'], answer: 1, explain: 'Krzyżacy zajęli polskie ziemie i najeżdżali Litwę. Wspólny wróg zbliżył oba państwa.' },
        { id: 'sryg3q', q: 'W którym roku zawarto umowę w Krewie?', options: ['1370', '1385', '1410', '1466'], answer: 1, explain: 'Umowę w Krewie zawarto w 1385 r. Rok później Jagiełło został królem Polski.' },
        { id: '0eohn1', q: 'Co obiecał Jagiełło w Krewie?', options: ['oddać Litwę Krzyżakom', 'zrezygnować z tronu Polski', 'przyjąć chrzest z poddanymi i połączyć Litwę z Polską', 'przenieść stolicę do Malborka'], answer: 2, explain: 'Jagiełło obiecał chrzest, połączenie Litwy z Polską i odzyskanie utraconych ziem. W zamian poślubił Jadwigę i został królem.' },
        { id: 'o2r58u', q: 'Co oznacza unia personalna?', options: ['dwa państwa mają wspólnego władcę, ale osobne prawa i urzędy', 'jedno państwo podbija drugie', 'państwo dzieli się na dzielnice', 'król rządzi z pomocą rady'], answer: 0, explain: 'Unia personalna łączy państwa osobą władcy (łac. persona – osoba). Każde państwo zachowuje swoje prawa.' },
        { id: 'pxdlus', q: 'Czym jest chrystianizacja?', options: ['budową zamków', 'szerzeniem chrześcijaństwa', 'zakładaniem miast', 'spisywaniem praw'], answer: 1, explain: 'Chrystianizacja to nawracanie ludzi na chrześcijaństwo. Chrzest Litwy nastąpił w 1387 r.' },
        { id: 'gx5lba', q: 'W którym roku nastąpił chrzest Litwy?', options: ['966', '1320', '1387', '1466'], answer: 2, explain: 'Litwa przyjęła chrzest w 1387 r. – rok po koronacji Jagiełły. Polska – w 966 r.' },
        { id: '4wkc2g', q: 'Jak chrzest Litwy wpłynął na spór z Krzyżakami?', options: ['Krzyżacy stracili powód do najazdów pod pozorem nawracania', 'Krzyżacy zostali sojusznikami Litwy', 'Litwa stała się częścią państwa zakonnego', 'Krzyżacy wyjechali z Prus'], answer: 0, explain: 'Krzyżacy mówili, że walczą z poganami. Po chrzcie Litwy to tłumaczenie straciło sens.' },
        { id: 'iwq4tc', q: 'Kto spełnił wolę Jadwigi i w 1400 r. odnowił Akademię Krakowską?', options: ['Kazimierz Wielki', 'Władysław Łokietek', 'Zawisza Czarny', 'Władysław Jagiełło'], answer: 3, explain: 'Jadwiga zapisała na uczelnię swoje klejnoty, a Jagiełło ją odnowił. Dlatego to Uniwersytet Jagielloński.' },
        { id: 'haq73t', q: 'Co Jadwiga zapisała w testamencie na odnowienie Akademii Krakowskiej?', options: ['zamek w Malborku', 'swoje klejnoty i kosztowności', 'ziemię chełmińską', 'koronę Bolesława Chrobrego'], answer: 1, explain: 'Królowa przeznaczyła na uczelnię swoje klejnoty i kosztowności.' },
        { id: 'zkyptw', q: 'Kiedy rozegrała się bitwa pod Grunwaldem?', options: ['15 lipca 1410 r.', '20 stycznia 1320 r.', '14 sierpnia 1385 r.', 'w 1466 r.'], answer: 0, explain: 'Bitwa pod Grunwaldem: 15 lipca 1410 r. W 1320 r. była koronacja Łokietka, w 1385 r. – umowa w Krewie.' },
        { id: 'lt80tg', q: 'Kto dowodził wojskami polsko-litewskimi pod Grunwaldem?', options: ['Kazimierz Wielki i Łokietek', 'Ulryk von Jungingen', 'Władysław Jagiełło i Witold', 'Konrad Mazowiecki i Henryk Pobożny'], answer: 2, explain: 'Wojskami dowodzili król Władysław Jagiełło i wielki książę litewski Witold. Ulryk von Jungingen był wielkim mistrzem krzyżackim.' },
        { id: 'kgaqoz', q: 'Co oznaczały dwa nagie miecze przyniesione przed bitwą pod Grunwaldem?', options: ['prośbę o pokój', 'dar na koronację', 'wyzwanie do walki', 'poddanie się Krzyżaków'], answer: 2, explain: 'Posłowie krzyżaccy przynieśli miecze królowi i Witoldowi jako wyzwanie. Ci przyjęli je i odpowiedzieli, że chcą walczyć.' },
        { id: 'xl6pxt', q: 'Co się stało z wielkim mistrzem Ulrykiem von Jungingenem?', options: ['poległ w bitwie pod Grunwaldem', 'został królem Polski', 'uciekł na Litwę', 'założył Akademię Krakowską'], answer: 0, explain: 'Wielki mistrz poległ pod Grunwaldem razem z wieloma rycerzami zakonnymi.' },
        { id: 'ggznjr', q: 'Jaki był skutek zwycięstwa pod Grunwaldem?', options: ['państwo krzyżackie od razu przestało istnieć', 'upadł mit niezwyciężoności Krzyżaków, a ich państwo zaczęło słabnąć', 'Polska zdobyła Malbork w ciągu jednego dnia', 'Litwa przyłączyła Polskę'], answer: 1, explain: 'Krzyżacy przegrali, ale Malborka nie zdobyto. Zakon był osłabiony, lecz przetrwał jeszcze długo.' },
        { id: '85z1bj', q: 'Co oznacza powiedzenie „polegać jak na Zawiszy”?', options: ['ufać komuś, kto nigdy nie zawiedzie', 'bać się kogoś', 'nie dotrzymać słowa', 'zwyciężyć w turnieju'], answer: 0, explain: 'Zawisza Czarny uchodził za ideał rycerza – wiernego i niezawodnego.' },
        { id: 'l97vys', q: 'Która cecha NIE należała do ideału średniowiecznego rycerza?', options: ['odwaga', 'wierność danemu słowu', 'obrona słabszych', 'podstęp i atak na bezbronnych'], answer: 3, explain: 'Dobry rycerz miał walczyć uczciwie, dotrzymywać słowa i bronić słabszych.' },
        { id: 'fb8y7n', q: 'W jakich latach trwała wojna trzynastoletnia?', options: ['1409–1411', '1454–1466', '1138–1320', '1333–1370'], answer: 1, explain: 'Wojna trzynastoletnia trwała od 1454 do 1466 r. i zakończyła się II pokojem toruńskim.' },
        { id: 'lujf41', q: 'Co Polska uzyskała na mocy II pokoju toruńskiego (1466 r.)?', options: ['Żmudź', 'Ruś Halicką', 'Pomorze Gdańskie, ziemię chełmińską, Warmię, Malbork i Elbląg', 'Śląsk'], answer: 2, explain: 'Te ziemie nazwano Prusami Królewskimi. Polska odzyskała dostęp do morza.' },
        { id: 'ehejxp', q: 'Jak nazwano ziemie przyłączone do Polski w 1466 r.?', options: ['Prusy Zakonne', 'Prusy Królewskie', 'Ruś Halicka', 'dzielnica senioralna'], answer: 1, explain: 'Prusy Królewskie należały do Polski. Prusy Zakonne ze stolicą w Królewcu zostały przy zakonie.' },
        { id: '7vzbi2', q: 'Co musiał robić wielki mistrz krzyżacki po II pokoju toruńskim?', options: ['składać hołd lenny królowi Polski', 'płacić czynsz sołtysowi', 'mieszkać w Krakowie', 'wybierać króla Polski'], answer: 0, explain: 'Wielki mistrz przysięgał wierność królowi Polski – składał mu hołd lenny.' },
        { id: 'todw9u', q: 'Ułóż chronologicznie (od najdawniejszego): II pokój toruński, umowa w Krewie, bitwa pod Grunwaldem.', options: ['Grunwald (1410) → Krewo (1385) → II pokój toruński (1466)', 'Krewo (1385) → II pokój toruński (1466) → Grunwald (1410)', 'II pokój toruński (1466) → Grunwald (1410) → Krewo (1385)', 'Krewo (1385) → Grunwald (1410) → II pokój toruński (1466)'], answer: 3, explain: 'Mniejsza liczba to dawniej: 1385 → 1410 → 1466.' },
        { id: '37c5xw', q: 'Prawda czy fałsz?\nPo bitwie pod Grunwaldem wojska polsko-litewskie zdobyły Malbork.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Malbork oblegano ok. dwóch miesięcy, ale go nie zdobyto. Do Polski przeszedł dopiero w czasie wojny trzynastoletniej (potwierdził to II pokój toruński w 1466 r.).' },
      ],
    },
  ],
});
