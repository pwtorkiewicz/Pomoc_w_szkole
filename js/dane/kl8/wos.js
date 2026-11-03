/* Wiedza o społeczeństwie – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, wiedza o społeczeństwie – tylko klasa VIII).
 * Działy I–XII podstawy, podzielone na 14 działów aplikacji (podział – decyzja redakcyjna, opisana w `basis`).
 * Fakty prawne sprawdzone 2.11.2026 w tekstach aktów na eli.gov.pl (Konstytucja RP – Dz.U. 1997 nr 78 poz. 483;
 * teksty jednolite ustaw – numery podane w `basis` działów), pojęcia i fakty o ONZ, NATO, UE – w e-podręczniku
 * do WOS na zpe.gov.pl (wątki LPH9xTWqwi, LP10nQC1Vf, LPXe7XhjcT). Celowo nie podajemy nazwisk osób pełniących
 * obecnie urzędy ani listy partii w Sejmie – ściąga wskazuje, gdzie to sprawdzić. */
window.SUBJECTS.push({
  id: 'wos',
  name: 'Wiedza o społeczeństwie',
  icon: '⚖️',
  color: '#7a8b2e',
  topics: [
    {
      id: 'czlowiek-w-grupie',
      name: 'Człowiek w grupie',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. I „Społeczna natura człowieka”, wym. 1–5 (potrzeby społeczne, cechy grup, grupa koleżeńska i zadaniowa, podejmowanie decyzji, asertywność, przyczyny i sposoby rozwiązywania konfliktów). Pojęcia – e-podręcznik WOS na zpe.gov.pl, moduł „Społeczna natura człowieka, czyli jak funkcjonować w grupach” (wątek LPH9xTWqwi).',
      theory: `
        <h3>Człowiek – istota społeczna</h3>
        <p>Nikt nie żyje sam. W grupach zaspokajamy nie tylko potrzeby biologiczne, ale też <b>potrzeby społeczne</b>:</p>
        <ul>
          <li><b>kontaktu</b> – rozmowy, bycia z innymi,</li>
          <li><b>przynależności</b> – poczucia, że jesteś „swój” (rodzina, klasa, drużyna),</li>
          <li><b>uznania</b> – szacunku i docenienia przez innych.</li>
        </ul>
        <p>Potrzeby często pokazuje się w <b>piramidzie Maslowa</b> – od fizjologicznych u podstawy po samorealizację na szczycie.</p>
        <h3>Grupa społeczna</h3>
        <p>To nie przypadkowy tłum, tylko ludzie połączeni <b>więzią</b>. Cechy grupy: wspólny <b>cel</b> lub interes, <b>więź</b> i poczucie „my”, wspólne <b>normy</b> (zasady), <b>struktura</b> – role i pozycje (np. kapitan drużyny), trwałość kontaktów.</p>
        <table>
          <tr><th>Grupa koleżeńska</th><th>Grupa zadaniowa</th></tr>
          <tr><td>powstaje spontanicznie, łączy ją sympatia i wspólne zainteresowania; zasady są niepisane (grupa nieformalna)</td><td>powstaje, by wykonać konkretne zadanie (projekt, klasowy zespół, drużyna przed turniejem); ma podział ról i termin</td></tr>
        </table>
        <p><b>Dobra współpraca</b> się opłaca: zadanie robi się szybciej, każdy wnosi swoje mocne strony, uczysz się od innych.</p>
        <h3>Decyzje w grupie</h3>
        <table>
          <tr><th>Sposób</th><th>Na czym polega</th><th>Plus / minus</th></tr>
          <tr><td><b>głosowanie</b> (większość)</td><td>wygrywa rozwiązanie z największym poparciem</td><td>szybko / mniejszość może być niezadowolona</td></tr>
          <tr><td><b>konsensus</b></td><td>szukamy rozwiązania, które akceptują wszyscy</td><td>wszyscy popierają decyzję / trwa długo</td></tr>
          <tr><td><b>kompromis</b></td><td>każda strona trochę ustępuje</td><td>nikt nie przegrywa całkiem / nikt nie dostaje wszystkiego</td></tr>
          <tr><td><b>decyzja lidera</b></td><td>rozstrzyga jedna osoba (np. kapitan)</td><td>szybko / inni nie mają wpływu</td></tr>
        </table>
        <p>Etapy podejmowania decyzji: nazwij problem → zbierz pomysły → oceń je według kryteriów → wybierz → zrealizuj → oceń skutki.</p>
        <h3>Asertywność</h3>
        <p><b>Asertywność</b> to stanowcze i uczciwe wyrażanie swoich uczuć, opinii i potrzeb <b>z szacunkiem dla innych</b>. To ani <b>uległość</b> (robię, czego chcą inni, wbrew sobie), ani <b>agresja</b> (stawiam na swoim kosztem innych).</p>
        <ul>
          <li><b>komunikat „ja”</b>: „Czuję się…, kiedy…, dlatego proszę…”,</li>
          <li><b>zdarta płyta</b> – spokojnie powtarzasz odmowę tymi samymi słowami,</li>
          <li>asertywności potrzebujesz np. gdy ktoś namawia cię do picia alkoholu, ściągania, wyśmiewania kogoś albo wrzucenia czyjegoś zdjęcia do sieci.</li>
        </ul>
        <h3>Konflikt</h3>
        <p>Przyczyny: <b>sprzeczne interesy</b>, <b>inne cele</b>, różne wartości, nieporozumienia, brak informacji. Konflikt jest naturalny – ważne, jak go rozwiązujesz.</p>
        <table>
          <tr><th>Sposób</th><th>Kto decyduje</th></tr>
          <tr><td><b>negocjacje</b></td><td>same strony – rozmawiają i szukają porozumienia</td></tr>
          <tr><td><b>mediacja</b></td><td>strony, a pomaga im bezstronny <b>mediator</b>, który nie narzuca rozwiązania</td></tr>
          <tr><td><b>arbitraż</b></td><td><b>arbiter</b> – osoba trzecia wydaje rozstrzygnięcie, które strony przyjmują</td></tr>
        </table>
        <p>Najtrwalsze jest rozwiązanie <b>„wygrany–wygrany”</b>: obie strony coś zyskują. Unikanie konfliktu albo siłowe „wygrany–przegrany” zwykle tylko odkłada problem.</p>
        <div class="tip">💡 Mediator <b>pomaga</b>, arbiter <b>rozstrzyga</b>. Asertywny = „ja jestem OK i ty jesteś OK”.</div>`,
      infographicNote: 'Porównuj w poziomie: trzy sposoby rozwiązania konfliktu różnią się tym, kto decyduje.',
      infographic: {
        type: 'porownanie',
        top: { title: '⚡ Skąd konflikt?', text: 'sprzeczne interesy, inne cele, różne wartości, nieporozumienia, brak informacji', kolor: 2 },
        kolumny: [{ title: 'Negocjacje', kolor: 1 }, { title: 'Mediacja', kolor: 3 }, { title: 'Arbitraż', kolor: 5 }],
        wiersze: [
          { label: 'Kto bierze udział?', cells: ['same strony', 'strony i mediator', 'strony i arbiter'] },
          { label: 'Kto decyduje?', cells: ['strony', 'strony', 'arbiter'], bold: true },
          { label: 'Co robi osoba trzecia?', cells: ['nie ma jej', 'pomaga, nie narzuca', 'rozstrzyga spór'] },
        ],
        bottom: { title: '💡 Najlepiej: wygrany–wygrany', text: 'Obie strony coś zyskują – to najtrwalsze porozumienie.', kolor: 3 },
      },
      flashcards: [
        ['Potrzeby społeczne człowieka (wg podstawy)', 'Kontaktu, przynależności, uznania'],
        ['Grupa społeczna', 'Co najmniej kilka osób połączonych więzią, wspólnym celem i normami, z podziałem ról'],
        ['Grupa koleżeńska', 'Nieformalna, powstaje spontanicznie; łączy ją sympatia i zainteresowania'],
        ['Grupa zadaniowa', 'Powstaje, by wykonać konkretne zadanie; ma podział ról'],
        ['Konsensus', 'Decyzja, którą akceptują wszyscy członkowie grupy'],
        ['Kompromis', 'Rozwiązanie, w którym każda strona trochę ustępuje'],
        ['Asertywność', 'Stanowcze wyrażanie swoich uczuć i opinii z szacunkiem dla innych'],
        ['Komunikat „ja”', '„Czuję…, kiedy…, dlatego proszę…” – mówisz o sobie, nie atakujesz'],
        ['Technika „zdartej płyty”', 'Spokojne powtarzanie odmowy tymi samymi słowami'],
        ['Mediacja', 'Bezstronny mediator pomaga stronom dojść do porozumienia, ale nie narzuca rozwiązania'],
        ['Arbitraż', 'Osoba trzecia (arbiter) rozstrzyga spór'],
        ['Rozwiązanie „wygrany–wygrany”', 'Obie strony konfliktu coś zyskują – najtrwalsze porozumienie'],
      ],
      questions: [
        { id: '9p1m5c', q: 'Która potrzeba jest potrzebą społeczną wymienioną w podstawie programowej?', options: ['potrzeba snu', 'potrzeba uznania', 'potrzeba jedzenia', 'potrzeba ciepła'], answer: 1, explain: 'Podstawa wymienia potrzeby kontaktu, przynależności i uznania. Sen, jedzenie i ciepło to potrzeby biologiczne.' },
        { id: 'p5560y', q: 'Która zbiorowość NIE jest grupą społeczną?', options: ['drużyna harcerska przy szkole', 'rodzina', 'ludzie czekający na przystanku', 'klasa szkolna z wychowawcą'], answer: 2, explain: 'Przypadkowych ludzi na przystanku nie łączy więź, wspólny cel ani normy – to zbiorowisko, nie grupa.' },
        { id: 'boucmh', q: 'Czym grupa zadaniowa różni się od koleżeńskiej?', options: ['powstaje, by wykonać konkretne zadanie', 'nie ma żadnych zasad ani podziału ról', 'zawsze liczy tylko dwie osoby', 'jej członkowie są sobie obcy'], answer: 0, explain: 'Grupa zadaniowa ma cel do zrealizowania i podział ról, np. zespół robiący projekt.' },
        { id: 'ew0866', q: 'Klasa wybiera cel wycieczki tak długo, aż wszyscy zgodzą się na jedno miejsce. To:', options: ['decyzja lidera', 'głosowanie większościowe', 'losowanie', 'konsensus'], answer: 3, explain: 'Konsensus to rozwiązanie akceptowane przez wszystkich – trwa długo, ale nikt nie czuje się pominięty.' },
        { id: 'a8tx8n', q: 'Jaka jest główna wada głosowania większościowego?', options: ['trwa kilka tygodni, bo każdy musi się zgodzić', 'przegłosowana mniejszość może być niezadowolona', 'nie da się go przeprowadzić w klasie', 'decyzję podejmuje jedna osoba – lider grupy'], answer: 1, explain: 'Głosowanie jest szybkie, ale część grupy musi się podporządkować.' },
        { id: 'm4axkv', q: 'Która wypowiedź jest asertywna?', options: ['„Dobra, dam ci spisać, tylko się nie obrażaj i nikomu nie mów…”', '„Spadaj, frajerze! Sam sobie rób zadania, nie będę cię niańczyć.”', '„Nie dam ci spisać, bo to nieuczciwe. Mogę ci za to wytłumaczyć zadanie.”', '„Zrobię, co chcesz, byle tylko nikt się na mnie nie gniewał.”'], answer: 2, explain: 'Asertywna odmowa jest jasna, uzasadniona i nie obraża drugiej osoby.' },
        { id: 'qlg803', q: 'Na czym polega technika „zdartej płyty”?', options: ['na spokojnym powtarzaniu odmowy tymi samymi słowami', 'na krzyczeniu coraz głośniej, aż druga osoba się podda', 'na zmianie tematu, gdy ktoś cię o coś prosi', 'na ustąpieniu i zgodzie po trzeciej prośbie tej samej osoby'], answer: 0, explain: 'Powtarzasz swoje „nie” bez tłumaczenia się w kółko i bez agresji.' },
        { id: 'b43iaz', q: 'Kto rozstrzyga spór w arbitrażu?', options: ['same strony, bez pomocy', 'mediator, który tylko pomaga w rozmowie', 'osoba trzecia – arbiter', 'ten, kto głośniej krzyczy'], answer: 2, explain: 'Arbiter wydaje rozstrzygnięcie, które strony przyjmują. Mediator niczego nie narzuca.' },
        { id: 'py7qrg', q: 'Dwie osoby z klasy kłócą się o miejsce w ławce, a przewodniczący samorządu pomaga im spokojnie porozmawiać, nie mówiąc, kto ma rację. To:', options: ['arbitraż', 'mediacja', 'negocjacje bez udziału osób trzecich', 'unikanie konfliktu'], answer: 1, explain: 'Bezstronna osoba pomagająca w rozmowie to mediator – decyzję podejmują same strony.' },
        { id: 'mt8a9t', q: 'Które rozwiązanie konfliktu jest zwykle najtrwalsze?', options: ['wygrany–przegrany', 'przegrany–przegrany', 'udawanie, że konfliktu nie ma', 'wygrany–wygrany'], answer: 3, explain: 'Gdy obie strony coś zyskują, nikt nie ma powodu, by wracać do sporu.' },
        { id: 'z3igrd', q: 'Która przyczyna konfliktu to „sprzeczne interesy”?', options: ['bracia chcą naraz korzystać z jedynego komputera', 'kolega źle usłyszał godzinę spotkania drużyny', 'koleżanka lubi inną muzykę niż jej przyjaciółka', 'dwie osoby mają ten sam kolor plecaka'], answer: 0, explain: 'Sprzeczne interesy: obie strony chcą tego samego ograniczonego dobra.' },
        { id: 'z9nxmf', q: 'Prawda czy fałsz?\nAsertywność oznacza, że zawsze stawiasz na swoim, nie licząc się z innymi.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. To opis agresji. Asertywność łączy szacunek dla siebie z szacunkiem dla innych.' },
      ],
    },
    {
      id: 'rodzina',
      name: 'Rodzina i budżet domowy',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. II „Rodzina”, wym. 1–3 (rodzina jako grupa społeczna, rola rodziców i osób starszych, wartości, wpływ rodziny na dzieci, prawa i obowiązki dzieci, gospodarstwo domowe i budżet). Prawa i obowiązki – Kodeks rodzinny i opiekuńczy (tekst jedn. Dz.U. 2026 poz. 236), art. 87, 91, 95, 96¹, 133; Konstytucja RP art. 18, 48, 72. Funkcje rodziny i pojęcia budżetu – zpe.gov.pl (wątek LPH9xTWqwi, moduł „Rodzina”).',
      theory: `
        <h3>Rodzina – szczególna grupa</h3>
        <p>Rodzina to <b>mała grupa pierwotna</b>: należysz do niej od urodzenia, łączą was silne więzi uczuciowe i pokrewieństwo (albo przysposobienie). Konstytucja: małżeństwo, rodzina, macierzyństwo i rodzicielstwo są pod ochroną państwa (art. 18).</p>
        <h3>Funkcje rodziny</h3>
        <table>
          <tr><th>Funkcja</th><th>Co to znaczy</th></tr>
          <tr><td>prokreacyjna</td><td>przychodzą na świat dzieci</td></tr>
          <tr><td>opiekuńcza</td><td>troska o dzieci, chorych, starszych</td></tr>
          <tr><td>ekonomiczna</td><td>zarabianie i wspólne gospodarowanie pieniędzmi</td></tr>
          <tr><td>emocjonalna</td><td>miłość, wsparcie, poczucie bezpieczeństwa</td></tr>
          <tr><td>wychowawcza (socjalizacyjna)</td><td>przekazywanie wartości, norm, języka, tradycji</td></tr>
          <tr><td>kontrolna</td><td>pilnowanie, by członkowie przestrzegali zasad</td></tr>
          <tr><td>rekreacyjno-towarzyska</td><td>wspólny czas wolny, święta, wyjazdy</td></tr>
        </table>
        <p><b>Rodzice</b> wychowują i utrzymują dzieci. <b>Dziadkowie</b> często przekazują tradycję i historię rodziny, pomagają w opiece. Rodzina najsilniej wpływa na twoje wartości, nawyki i poglądy – to pierwsza „szkoła życia”.</p>
        <h3>Prawa i obowiązki dziecka (Kodeks rodzinny i opiekuńczy)</h3>
        <ul>
          <li>rodzice i dzieci są obowiązani do <b>wzajemnego szacunku i wspierania się</b> (art. 87),</li>
          <li>rodzice wychowują dziecko <b>z poszanowaniem jego godności i praw</b>, a w ważnych sprawach powinni <b>wysłuchać</b> dziecka (art. 95),</li>
          <li><b>zakaz kar cielesnych</b> (art. 96¹),</li>
          <li>rodzice muszą łożyć na <b>utrzymanie</b> dziecka, które nie może utrzymać się samo (alimenty, art. 133),</li>
          <li>dziecko winno rodzicom <b>posłuszeństwo</b> (art. 95 § 2),</li>
          <li>dziecko na utrzymaniu rodziców, które z nimi mieszka, ma obowiązek <b>pomagać w domu</b> (art. 91).</li>
        </ul>
        <h3>Gospodarstwo domowe i budżet</h3>
        <p><b>Gospodarstwo domowe</b> to osoby, które razem mieszkają i wspólnie się utrzymują. <b>Budżet domowy</b> to zestawienie <b>dochodów</b> i <b>wydatków</b> na dany okres (zwykle miesiąc).</p>
        <table>
          <tr><th>Dochody</th><th>Wydatki stałe</th><th>Wydatki zmienne</th></tr>
          <tr><td>wynagrodzenie za pracę, dochody z własnej firmy, emerytury i renty, zasiłki i świadczenia</td><td>co miesiąc podobne: czynsz, prąd, gaz, internet, rata kredytu, bilet miesięczny</td><td>zmieniają się: jedzenie, ubrania, kino, prezenty, naprawy</td></tr>
        </table>
        <ul>
          <li><b>nadwyżka</b>: dochody &gt; wydatki – można oszczędzać,</li>
          <li><b>budżet zrównoważony</b>: dochody = wydatki,</li>
          <li><b>deficyt</b>: wydatki &gt; dochody – trzeba ciąć wydatki albo pożyczać.</li>
        </ul>
        <div class="tip">💡 Saldo = dochody − wydatki. Najpierw zaplanuj wydatki stałe, potem odłóż oszczędności, a dopiero resztę wydawaj na zmienne.</div>`,
      infographicNote: 'Czytaj od góry: planujesz budżet po kolei – od dochodów do wydatków zmiennych – a na dole sprawdzasz saldo.',
      infographic: {
        type: 'kroki',
        top: { icon: '🏠', title: 'Budżet domowy', text: 'zestawienie dochodów i wydatków gospodarstwa domowego, zwykle na miesiąc', kolor: 5 },
        items: [
          { title: '1. Dochody', text: 'wynagrodzenie, własna firma, emerytury i renty, zasiłki', kolor: 3 },
          { title: '2. Wydatki stałe', text: 'co miesiąc podobne: czynsz, prąd, internet, rata kredytu', kolor: 1 },
          { title: '3. Oszczędności', text: 'odłóż je, zanim wydasz resztę', kolor: 3 },
          { title: '4. Wydatki zmienne', text: 'zmieniają się: jedzenie, ubrania, kino, prezenty', kolor: 4 },
        ],
        bottom: { title: '⚖️ Saldo = dochody − wydatki', items: ['nadwyżka: dochody > wydatki – oszczędzasz', 'budżet zrównoważony: dochody = wydatki', 'deficyt: wydatki > dochody – tnij wydatki albo pożyczaj'], kolor: 2 },
      },
      flashcards: [
        ['Rodzina jako grupa', 'Mała grupa pierwotna oparta na silnych więziach uczuciowych'],
        ['Funkcja socjalizacyjna (wychowawcza) rodziny', 'Przekazywanie wartości, norm, języka i tradycji'],
        ['Funkcja ekonomiczna rodziny', 'Zarabianie i wspólne gospodarowanie pieniędzmi'],
        ['Obowiązek z art. 87 KRO', 'Rodzice i dzieci – wzajemny szacunek i wspieranie się'],
        ['Zakaz kar cielesnych', 'Art. 96¹ Kodeksu rodzinnego i opiekuńczego'],
        ['Obowiązek dziecka w domu (art. 91 KRO)', 'Pomoc rodzicom we wspólnym gospodarstwie, jeśli jest na ich utrzymaniu i z nimi mieszka'],
        ['Gospodarstwo domowe', 'Osoby wspólnie mieszkające i wspólnie się utrzymujące'],
        ['Budżet domowy', 'Zestawienie dochodów i wydatków na dany okres'],
        ['Wydatki stałe', 'Co miesiąc podobne: czynsz, prąd, rata, bilet miesięczny'],
        ['Wydatki zmienne', 'Zależne od decyzji: jedzenie, ubrania, rozrywka'],
        ['Nadwyżka budżetowa', 'Dochody większe od wydatków'],
        ['Deficyt budżetowy', 'Wydatki większe od dochodów'],
      ],
      questions: [
        { id: '3sd3un', q: 'Dlaczego rodzinę nazywamy grupą pierwotną?', options: ['bo powstała najwcześniej w historii ze wszystkich grup ludzkich', 'bo należymy do niej od urodzenia i łączą nas silne więzi', 'bo ma spisany regulamin i formalny podział obowiązków', 'bo liczy więcej niż 10 osób z kilku pokoleń'], answer: 1, explain: 'Grupy pierwotne opierają się na bliskich, emocjonalnych więziach.' },
        { id: 'b4d47d', q: 'Babcia uczy wnuczkę lepić pierogi według rodzinnego przepisu i opowiada historię rodu. Którą funkcję rodziny to ilustruje?', options: ['ekonomiczną (wspólne gospodarowanie pieniędzmi)', 'prokreacyjną (narodziny dzieci)', 'socjalizacyjną (przekaz tradycji)', 'kontrolną (pilnowanie zasad)'], answer: 2, explain: 'Przekazywanie tradycji i wartości to funkcja socjalizacyjno-wychowawcza.' },
        { id: 'xett0d', q: 'Który przepis Kodeksu rodzinnego i opiekuńczego zakazuje stosowania kar cielesnych wobec dziecka?', options: ['art. 96¹', 'art. 18', 'art. 133', 'art. 10'], answer: 0, explain: 'Art. 96¹ KRO zakazuje kar cielesnych osobom sprawującym władzę rodzicielską lub opiekę.' },
        { id: 'xk2mey', q: 'Który obowiązek ma dziecko mieszkające z rodzicami i pozostające na ich utrzymaniu?', options: ['płacenie połowy czynszu za wspólne mieszkanie', 'pomoc rodzicom we wspólnym gospodarstwie domowym', 'zarabianie na utrzymanie całej rodziny', 'płacenie podatków i rachunków za rodziców'], answer: 1, explain: 'Art. 91 § 2 KRO: dziecko na utrzymaniu rodziców, które z nimi mieszka, ma pomagać we wspólnym gospodarstwie.' },
        { id: 'nzbnwf', q: 'Co według Kodeksu rodzinnego i opiekuńczego powinni zrobić rodzice przed ważną decyzją dotyczącą dziecka (jeśli pozwala na to jego dojrzałość)?', options: ['nic – decydują sami', 'zapytać szkołę o zgodę', 'zgłosić sprawę do sądu', 'wysłuchać dziecka'], answer: 3, explain: 'Art. 95 § 4 KRO: rodzice powinni wysłuchać dziecko i w miarę możliwości uwzględnić jego rozsądne życzenia.' },
        { id: '1vzexj', q: 'Który z wydatków jest wydatkiem stałym?', options: ['bilet do kina', 'nowa kurtka', 'czynsz za mieszkanie', 'prezent urodzinowy'], answer: 2, explain: 'Czynsz płaci się co miesiąc w podobnej wysokości – to wydatek stały.' },
        { id: '20oce4', q: 'Co jest dochodem gospodarstwa domowego?', options: ['emerytura dziadka mieszkającego z rodziną', 'rachunek za prąd i gaz za ostatni miesiąc', 'rata kredytu zaciągniętego na mieszkanie', 'abonament telefoniczny całej rodziny'], answer: 0, explain: 'Emerytura to wpływ pieniędzy do budżetu. Pozostałe to wydatki.' },
        { id: '30z7zu', q: 'Miesięczne dochody rodziny to 7 000 zł, a wydatki 7 400 zł. Jaki to budżet?', options: ['z nadwyżką 400 zł', 'zrównoważony', 'z deficytem 400 zł', 'z nadwyżką 7 400 zł'], answer: 2, explain: '7 000 − 7 400 = −400 zł. Wydatki są większe od dochodów – deficyt.' },
        { id: 'zxugem', q: 'Rodzina ma 9 000 zł dochodu, a jej wydatki wynoszą 8 100 zł. Ile może zaoszczędzić?', options: ['90 zł', '900 zł', '1 900 zł', '8 100 zł'], answer: 1, explain: '9 000 − 8 100 = 900 zł nadwyżki.' },
        { id: '7b5dly', q: 'Po co planuje się budżet domowy?', options: ['żeby co miesiąc wydać wszystkie pieniądze jak najszybciej', 'bo co roku nakazuje to każdej rodzinie urząd skarbowy', 'żeby kontrolować wydatki, unikać długów i móc oszczędzać', 'żeby zwiększyć wydatki zmienne kosztem oszczędności'], answer: 2, explain: 'Plan pomaga zobaczyć, na co idą pieniądze, i odłożyć coś na przyszłość.' },
        { id: 'r7va8m', q: 'Prawda czy fałsz?\nWedług Kodeksu rodzinnego i opiekuńczego rodzice i dzieci są obowiązani do wzajemnego szacunku i wspierania się.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tak stanowi art. 87 KRO – obowiązek działa w obie strony.' },
      ],
      tasks: [
        {
          id: '3vivcm',
          points: 3,
          q: 'Czteroosobowa rodzina ma miesięcznie: pensja mamy 5 200 zł, pensja taty 4 800 zł, inne dochody 600 zł. Wydatki stałe: czynsz 1 400 zł, prąd i gaz 450 zł, internet i telefony 200 zł, rata kredytu 1 800 zł, bilety miesięczne 180 zł. Wydatki zmienne: jedzenie 2 600 zł, ubrania 500 zł, kultura i rozrywka 400 zł, inne 870 zł.\na) Oblicz dochody i wydatki rodziny oraz saldo budżetu. Jaki to budżet?\nb) Rodzina chce co miesiąc odkładać 20% dochodów. Czy przy tych wydatkach jest to możliwe? Uzasadnij obliczeniem.',
          steps: [
            'Dochody: 5 200 + 4 800 + 600 = 10 600 zł.',
            'Wydatki stałe: 1 400 + 450 + 200 + 1 800 + 180 = 4 030 zł.',
            'Wydatki zmienne: 2 600 + 500 + 400 + 870 = 4 370 zł.',
            'Wydatki razem: 4 030 + 4 370 = 8 400 zł.',
            'Saldo: 10 600 − 8 400 = 2 200 zł – budżet z nadwyżką.',
            '20% dochodów: 0,2 · 10 600 = 2 120 zł. 2 120 zł < 2 200 zł, więc oszczędzanie 20% jest możliwe (zostaje jeszcze 80 zł).',
          ],
          answer: 'Dochody 10 600 zł, wydatki 8 400 zł, nadwyżka 2 200 zł. Tak – 20% dochodów to 2 120 zł, mniej niż nadwyżka.',
          scoring: [
            '1 pkt – poprawne dochody (10 600 zł) i wydatki (8 400 zł).',
            '1 pkt – saldo 2 200 zł i nazwa: budżet z nadwyżką.',
            '1 pkt – obliczenie 20% (2 120 zł) i poprawny wniosek, że to możliwe.',
          ],
        },
      ],
    },
    {
      id: 'szkola',
      name: 'Szkoła i samorząd uczniowski',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. III „Szkoła i edukacja”, wym. 1–3 (funkcje szkoły, klasa i społeczność szkolna, samorząd uczniowski, prawa i obowiązki ucznia, naruszenia praw uczniów i pracowników szkoły, dochodzenie praw). Prawo oświatowe (tekst jedn. Dz.U. 2026 poz. 820): art. 35 (obowiązek szkolny i obowiązek nauki), art. 51 (kurator oświaty – nadzór pedagogiczny), art. 85 (samorząd uczniowski), art. 98 ust. 1 pkt 17 i art. 99 (prawa i obowiązki w statucie); Konstytucja RP art. 70; Karta Nauczyciela (tekst jedn. Dz.U. 2026 poz. 515) art. 63. Funkcje szkoły i organy – zpe.gov.pl (wątek LPH9xTWqwi, moduł „Szkoła i edukacja…”).',
      theory: `
        <h3>Po co jest szkoła</h3>
        <table>
          <tr><th>Funkcja</th><th>Przykład</th></tr>
          <tr><td><b>kształcąca</b></td><td>wiedza i umiejętności – lekcje, sprawdziany</td></tr>
          <tr><td><b>wychowawcza</b></td><td>postawy i wartości – szacunek, odpowiedzialność</td></tr>
          <tr><td><b>opiekuńcza</b></td><td>bezpieczeństwo, świetlica, pomoc pedagoga i psychologa</td></tr>
          <tr><td><b>kulturalna</b></td><td>akademie, wyjścia do teatru, tradycje szkoły</td></tr>
        </table>
        <p>Konstytucja: <b>nauka do 18. roku życia jest obowiązkowa</b>, a w szkołach publicznych – bezpłatna (art. 70). Obowiązek szkolny zaczyna się w roku, w którym kończysz 7 lat, i trwa do ukończenia szkoły podstawowej (Prawo oświatowe, art. 35).</p>
        <h3>Społeczność szkolna</h3>
        <p>Tworzą ją uczniowie, nauczyciele, rodzice i inni pracownicy. Organy szkoły: <b>dyrektor</b>, <b>rada pedagogiczna</b>, <b>rada rodziców</b>, <b>samorząd uczniowski</b>. Najważniejszy dokument szkoły to <b>statut</b> – zapisuje m.in. prawa i obowiązki uczniów oraz <b>tryb składania skarg</b>, gdy prawa ucznia zostaną naruszone.</p>
        <h3>Samorząd uczniowski (Prawo oświatowe, art. 85)</h3>
        <ul>
          <li>tworzą go <b>wszyscy uczniowie</b> szkoły – nie trzeba się zapisywać,</li>
          <li>zasady wyborów określa <b>regulamin</b> uchwalany przez ogół uczniów w głosowaniu <b>równym, tajnym i powszechnym</b>,</li>
          <li>może przedstawiać dyrektorowi i radzie pedagogicznej <b>wnioski i opinie</b> we wszystkich sprawach szkoły,</li>
          <li>dba m.in. o prawo do: zapoznania z programem i wymaganiami, <b>jawnej i umotywowanej oceny</b>, wydawania <b>gazety szkolnej</b>, organizowania imprez, <b>wyboru opiekuna</b> samorządu,</li>
          <li>w porozumieniu z dyrektorem może prowadzić <b>wolontariat</b> i wyłonić radę wolontariatu.</li>
        </ul>
        <h3>Obowiązki ucznia (art. 99 – szczegóły w statucie)</h3>
        <p>Właściwe zachowanie na lekcjach, usprawiedliwianie nieobecności, przestrzeganie zasad stroju i korzystania z telefonów, szacunek wobec nauczycieli, pracowników i kolegów.</p>
        <h3>Gdy prawa są łamane</h3>
        <p>Naruszenie praw ucznia to np. niejawna ocena bez uzasadnienia, upokarzanie przy klasie, czytanie czyjejś korespondencji. Naruszenie praw pracownika szkoły to np. obrażanie nauczyciela czy nagrywanie go i publikowanie nagrania. Nauczyciel w czasie pracy jest chroniony jak <b>funkcjonariusz publiczny</b> (Karta Nauczyciela, art. 63).</p>
        <p><b>Droga dochodzenia praw</b>: rozmowa z nauczycielem → wychowawca, pedagog → samorząd uczniowski → dyrektor (skarga według statutu) → <b>kuratorium oświaty</b> (nadzór pedagogiczny) → Rzecznik Praw Dziecka.</p>
        <div class="tip">💡 Samorząd uczniowski to <b>wszyscy uczniowie</b>, a nie tylko wybrany zarząd. Twoje prawa i obowiązki znajdziesz w <b>statucie</b> szkoły.</div>`,
      infographicNote: 'Czytaj od góry: gdy łamane są twoje prawa, idź krok po kroku – od rozmowy z nauczycielem do Rzecznika Praw Dziecka.',
      infographic: {
        type: 'kroki',
        top: { icon: '📜', title: 'Statut szkoły', text: 'prawa i obowiązki uczniów oraz tryb składania skarg', kolor: 4 },
        items: [
          { title: 'Rozmowa z nauczycielem', kolor: 1 },
          { title: 'Wychowawca, pedagog', kolor: 1 },
          { title: 'Samorząd uczniowski', text: 'to wszyscy uczniowie szkoły', kolor: 3 },
          { title: 'Dyrektor', text: 'skarga według statutu', kolor: 1 },
          { title: 'Kuratorium oświaty', text: 'nadzór pedagogiczny', kolor: 5 },
          { title: 'Rzecznik Praw Dziecka', kolor: 5 },
        ],
      },
      flashcards: [
        ['Funkcje szkoły', 'Kształcąca, wychowawcza, opiekuńcza, kulturalna'],
        ['Obowiązek nauki (Konstytucja, art. 70)', 'Nauka jest obowiązkowa do 18. roku życia'],
        ['Kto tworzy samorząd uczniowski?', 'Wszyscy uczniowie szkoły'],
        ['Regulamin samorządu uczniowskiego', 'Uchwalany przez ogół uczniów w głosowaniu równym, tajnym i powszechnym'],
        ['Prawo do oceny (art. 85 Prawa oświatowego)', 'Jawna i umotywowana ocena postępów w nauce i zachowaniu'],
        ['Statut szkoły', 'Najważniejszy dokument szkoły: organy, prawa i obowiązki uczniów, tryb skarg'],
        ['Organy szkoły', 'Dyrektor, rada pedagogiczna, rada rodziców, samorząd uczniowski'],
        ['Kto sprawuje nadzór pedagogiczny nad szkołami w województwie?', 'Kurator oświaty (kuratorium)'],
        ['Rada wolontariatu', 'Może ją wyłonić samorząd uczniowski ze swojego składu'],
        ['Ochrona nauczyciela', 'W czasie pracy – jak funkcjonariusz publiczny (Karta Nauczyciela, art. 63)'],
      ],
      questions: [
        { id: 'ddf8w4', q: 'Szkoła organizuje opiekę w świetlicy i dyżury nauczycieli na przerwach. Którą funkcję realizuje?', options: ['kształcącą', 'opiekuńczą', 'kulturalną', 'ekonomiczną'], answer: 1, explain: 'Dbanie o bezpieczeństwo i opiekę nad uczniami to funkcja opiekuńcza.' },
        { id: 'hpvqej', q: 'Do kiedy według Konstytucji RP nauka jest obowiązkowa?', options: ['do ukończenia szkoły podstawowej', 'do 16. roku życia', 'do 18. roku życia', 'do zdania matury'], answer: 2, explain: 'Art. 70 ust. 1 Konstytucji: nauka do 18. roku życia jest obowiązkowa.' },
        { id: 'u407fh', q: 'Kto tworzy samorząd uczniowski?', options: ['wszyscy uczniowie szkoły', 'tylko przewodniczący klas', 'uczniowie, którzy się zapiszą', 'dyrektor i nauczyciele'], answer: 0, explain: 'Art. 85 Prawa oświatowego: samorząd tworzą wszyscy uczniowie szkoły.' },
        { id: '59teb8', q: 'W jakim głosowaniu uczniowie uchwalają regulamin samorządu uczniowskiego?', options: ['jawnym, przez podniesienie ręki', 'równym, tajnym i powszechnym', 'tylko przez przedstawicieli klas', 'regulamin nadaje dyrektor bez głosowania'], answer: 1, explain: 'Tak stanowi art. 85 ust. 3 Prawa oświatowego.' },
        { id: 'cm0ae4', q: 'Które prawo samorząd uczniowski może wskazywać w swoich wnioskach do dyrektora?', options: ['prawo do niechodzenia na zapowiedziane sprawdziany', 'prawo do wyboru dyrektora spośród nauczycieli', 'prawo do zmiany podstawy programowej', 'prawo do redagowania i wydawania gazety szkolnej'], answer: 3, explain: 'Art. 85 ust. 5 wymienia m.in. prawo redagowania i wydawania gazety szkolnej.' },
        { id: 'zhbq25', q: 'Gdzie znajdziesz tryb składania skarg, gdy twoje prawa jako ucznia zostały naruszone?', options: ['w statucie szkoły', 'w Kodeksie karnym', 'w dzienniku elektronicznym', 'w regulaminie biblioteki'], answer: 0, explain: 'Statut musi określać prawa i obowiązki uczniów oraz tryb składania skarg (art. 98 Prawa oświatowego).' },
        { id: 'fkxnqw', q: 'Nauczyciel wystawia ocenę i odmawia wyjaśnienia, za co ją dostałeś. Które prawo ucznia może być naruszone?', options: ['prawo do wypoczynku', 'prawo do jawnej i umotywowanej oceny', 'prawo do wyboru opiekuna samorządu', 'prawo do gazety szkolnej'], answer: 1, explain: 'Uczeń ma prawo do jawnej i umotywowanej oceny postępów w nauce i zachowaniu.' },
        { id: 'l81sas', q: 'Który organ sprawuje nadzór pedagogiczny nad szkołami w województwie?', options: ['wójt gminy', 'Rzecznik Praw Obywatelskich', 'rada rodziców', 'kurator oświaty'], answer: 3, explain: 'Art. 51 Prawa oświatowego: kurator oświaty w imieniu wojewody sprawuje nadzór pedagogiczny.' },
        { id: '3updhn', q: 'Który z obowiązków ucznia wymienia Prawo oświatowe (art. 99)?', options: ['usprawiedliwianie nieobecności w określonym terminie i formie', 'płacenie za podręczniki i materiały do wszystkich zajęć', 'pomoc w sprzątaniu pokoju nauczycielskiego po lekcjach', 'udział we wszystkich zawodach sportowych organizowanych przez szkołę'], answer: 0, explain: 'Art. 99 wymienia m.in. usprawiedliwianie nieobecności, właściwe zachowanie na zajęciach i wobec innych.' },
        { id: 'qnjchv', q: 'Uczeń nagrał nauczycielkę na lekcji i wrzucił nagranie z obraźliwym podpisem do sieci. Czyje prawa naruszył?', options: ['swoje własne – to jego telefon i jego konto', 'niczyje – to był żart, a nie atak', 'pracownika szkoły – jej dobre imię i wizerunek', 'wyłącznie dyrektora – to on odpowiada za lekcje'], answer: 2, explain: 'Pracownicy szkoły też mają prawo do szacunku, dobrego imienia i ochrony wizerunku.' },
        { id: 'irwkc1', q: 'Prawda czy fałsz?\nSamorząd uczniowski może, w porozumieniu z dyrektorem, prowadzić działania wolontariackie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Art. 85 ust. 6–7 Prawa oświatowego; samorząd może też wyłonić radę wolontariatu.' },
      ],
    },
    {
      id: 'prawa-czlowieka',
      name: 'Godność i prawa człowieka',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. IV „Prawa człowieka”, wym. 1, 2 i 5 (godność jako źródło praw, cechy praw człowieka, preambuła PDPC, prawa a wolności na przykładzie praw osobistych z Konstytucji, prawa i wolności polityczne). Konstytucja RP (Dz.U. 1997 nr 78 poz. 483), art. 30–31, 38–42, 45, 47–54, 57–63. Powszechna Deklaracja Praw Człowieka (data, preambuła) i cechy praw – zpe.gov.pl (wątek LPH9xTWqwi, moduł „Prawa człowieka – ich źródła i ochrona”).',
      theory: `
        <h3>Godność – fundament</h3>
        <p>Konstytucja, art. 30: „<i>Przyrodzona i niezbywalna godność człowieka stanowi źródło wolności i praw człowieka i obywatela. Jest ona nienaruszalna, a jej poszanowanie i ochrona jest obowiązkiem władz publicznych.</i>” Godność masz dlatego, że jesteś człowiekiem – nie za zasługi. Do godności odwołują się różne systemy moralne i religie.</p>
        <h3>Cechy praw człowieka</h3>
        <table>
          <tr><th>Cecha</th><th>Znaczenie</th></tr>
          <tr><td><b>przyrodzone</b></td><td>masz je od urodzenia, państwo ich nie „nadaje”, tylko chroni</td></tr>
          <tr><td><b>powszechne</b></td><td>przysługują każdemu człowiekowi</td></tr>
          <tr><td><b>niezbywalne</b></td><td>nie można się ich zrzec ani ich sprzedać</td></tr>
          <tr><td><b>nienaruszalne</b></td><td>władza nie może ich dowolnie odebrać</td></tr>
        </table>
        <h3>Powszechna Deklaracja Praw Człowieka</h3>
        <p>Uchwalona przez <b>Zgromadzenie Ogólne ONZ 10 grudnia 1948 r.</b> w Paryżu, po doświadczeniach II wojny światowej. Preambuła zaczyna się od słów: „<i>uznanie przyrodzonej godności oraz równych i niezbywalnych praw wszystkich członków rodziny ludzkiej stanowi podstawę wolności, sprawiedliwości i pokoju na świecie</i>”.</p>
        <h3>Wolność czy prawo?</h3>
        <table>
          <tr><th>Wolność</th><th>Prawo</th></tr>
          <tr><td>państwo ma <b>nie przeszkadzać</b> – sam decydujesz</td><td>możesz <b>żądać</b> od państwa działania lub ochrony</td></tr>
          <tr><td>wolność sumienia i religii (art. 53), wyrażania poglądów (art. 54), poruszania się i wyboru miejsca zamieszkania (art. 52), nienaruszalność mieszkania (art. 50)</td><td>prawo do ochrony życia (art. 38), do obrony w procesie (art. 42), do sądu (art. 45), do ochrony prywatności i dobrego imienia (art. 47)</td></tr>
        </table>
        <p>Ograniczyć wolności i prawa można tylko <b>w ustawie</b> i tylko gdy to konieczne, np. dla bezpieczeństwa czy praw innych osób – i nigdy w ich istocie (art. 31).</p>
        <h3>Prawa i wolności polityczne (art. 57–63)</h3>
        <ul>
          <li>wolność <b>pokojowych zgromadzeń</b> (art. 57) i <b>zrzeszania się</b> (art. 58, 59 – też związki zawodowe),</li>
          <li>dostęp do <b>służby publicznej</b> (art. 60),</li>
          <li>prawo do <b>informacji</b> o działalności władz (art. 61),</li>
          <li><b>prawo wyborcze i udziału w referendum</b> – od <b>18 lat</b> (art. 62),</li>
          <li>prawo składania <b>petycji, wniosków i skarg</b> (art. 63).</li>
        </ul>
        <p>Dzięki nim możesz realnie wpływać na życie publiczne: głosować, protestować, zakładać stowarzyszenia, pytać władze, składać petycje.</p>
        <div class="tip">💡 <b>P-P-N-N</b>: przyrodzone, powszechne, niezbywalne, nienaruszalne. Wolność = „państwo, nie wtrącaj się”, prawo = „państwo, zadziałaj”.</div>`,
      infographicNote: 'Czytaj od góry: z godności wynikają wolności (niebieskie – państwo nie przeszkadza) i prawa (zielone – możesz żądać od państwa).',
      infographic: {
        type: 'drzewo', kolumny: 2,
        top: { title: 'Cechy praw: P-P-N-N', text: 'przyrodzone, powszechne, niezbywalne, nienaruszalne', kolor: 4 },
        root: { title: 'Godność człowieka', text: 'źródło wolności i praw (art. 30)', kolor: 5 },
        branches: [
          { title: 'Wolności', text: 'państwo ma nie przeszkadzać', items: ['sumienia i religii', 'wyrażania poglądów', 'poruszania się'], kolor: 1 },
          { title: 'Prawa', text: 'możesz żądać działania lub ochrony', items: ['ochrona życia', 'prawo do sądu', 'ochrona prywatności'], kolor: 3 },
          { title: 'Wolności polityczne', items: ['pokojowe zgromadzenia', 'zrzeszanie się'], kolor: 1 },
          { title: 'Prawa polityczne', items: ['wybory i referendum od 18 lat', 'informacja o władzach', 'petycje, wnioski, skargi'], kolor: 3 },
        ],
        bottom: { title: '⚠️ Ograniczenie (art. 31)', text: 'tylko w ustawie, gdy to konieczne – nigdy w ich istocie', kolor: 2 },
      },
      flashcards: [
        ['Art. 30 Konstytucji', 'Przyrodzona i niezbywalna godność człowieka jest źródłem wolności i praw; jest nienaruszalna'],
        ['Prawa przyrodzone', 'Człowiek ma je od urodzenia; państwo ich nie nadaje, tylko chroni'],
        ['Prawa niezbywalne', 'Nie można się ich zrzec ani ich przekazać'],
        ['Prawa powszechne', 'Przysługują każdemu człowiekowi'],
        ['Powszechna Deklaracja Praw Człowieka', 'Uchwalona przez Zgromadzenie Ogólne ONZ 10 grudnia 1948 r.'],
        ['Wolność (w sensie konstytucyjnym)', 'Sfera, w którą państwo nie może ingerować'],
        ['Prawo (w sensie konstytucyjnym)', 'Uprawnienie do żądania działania lub ochrony od państwa'],
        ['Kiedy można ograniczyć wolności i prawa? (art. 31)', 'Tylko w ustawie i tylko gdy to konieczne, bez naruszania ich istoty'],
        ['Od ilu lat masz prawo głosować i brać udział w referendum?', 'Od 18 lat (art. 62 Konstytucji)'],
        ['Art. 63 Konstytucji', 'Prawo składania petycji, wniosków i skarg'],
        ['Wolność zgromadzeń', 'Każdy może organizować pokojowe zgromadzenia i w nich uczestniczyć (art. 57)'],
      ],
      questions: [
        { id: 'xjb537', q: 'Co według art. 30 Konstytucji RP jest źródłem wolności i praw człowieka?', options: ['wola parlamentu wyrażona w ustawach', 'obywatelstwo polskie nadane przy urodzeniu', 'przyrodzona i niezbywalna godność człowieka', 'umowy międzynarodowe ratyfikowane przez Polskę'], answer: 2, explain: 'Godność jest źródłem praw – państwo ma ją szanować i chronić.' },
        { id: 'zx4881', q: 'Prawa człowieka są niezbywalne. Oznacza to, że:', options: ['nie można się ich zrzec ani ich przekazać', 'przysługują tylko obywatelom danego państwa', 'można je kupić albo sprzedać innej osobie', 'nadaje je i odbiera prezydent państwa'], answer: 0, explain: 'Niezbywalny = nie da się go „oddać”, nawet dobrowolnie.' },
        { id: 'paiw6o', q: 'Kiedy uchwalono Powszechną Deklarację Praw Człowieka?', options: ['1 września 1939 r.', '2 kwietnia 1997 r.', '20 listopada 1989 r.', '10 grudnia 1948 r.'], answer: 3, explain: 'PDPC uchwaliło Zgromadzenie Ogólne ONZ 10 grudnia 1948 r. w Paryżu.' },
        { id: 'puud6r', q: 'Według preambuły PDPC uznanie godności i praw człowieka jest podstawą:', options: ['handlu międzynarodowego i wspólnego rynku', 'wolności, sprawiedliwości i pokoju na świecie', 'władzy królów i dziedzicznych przywilejów', 'gospodarki rynkowej i własności prywatnej'], answer: 1, explain: 'Preambuła wiąże prawa człowieka z wolnością, sprawiedliwością i pokojem.' },
        { id: 'vrdbh6', q: 'Która z wymienionych to wolność, a nie prawo?', options: ['wolność sumienia i religii', 'prawo do obrony w procesie karnym', 'prawo do sądu', 'prawo do ochrony zdrowia'], answer: 0, explain: 'Wolność sumienia i religii polega na tym, że państwo nie wtrąca się w twoje przekonania.' },
        { id: '7143hb', q: 'Czym prawo (w sensie konstytucyjnym) różni się od wolności?', options: ['niczym – w Konstytucji to synonimy', 'prawa dotyczą tylko dorosłych, a wolności – wszystkich ludzi', 'na podstawie prawa możesz żądać od państwa działania lub ochrony', 'wolności państwo może ograniczać dowolnie, nawet bez ustawy'], answer: 2, explain: 'Wolność to sfera bez ingerencji państwa, prawo – uprawnienie do żądania czegoś od państwa.' },
        { id: 'glnrvx', q: 'W jaki sposób wolno ograniczyć konstytucyjne wolności i prawa?', options: ['zarządzeniem dyrektora szkoły', 'tylko w ustawie, gdy to konieczne, bez naruszania ich istoty', 'decyzją każdego policjanta', 'nie wolno ich ograniczać nigdy i w żaden sposób'], answer: 1, explain: 'Art. 31 ust. 3 Konstytucji określa warunki ograniczeń.' },
        { id: 'hnr1eu', q: 'Które prawo jest prawem politycznym?', options: ['prawo do ochrony zdrowia', 'prawo do nauki', 'prawo do wypoczynku', 'prawo do udziału w referendum'], answer: 3, explain: 'Art. 62 – prawo udziału w referendum i wybierania przedstawicieli to prawa polityczne.' },
        { id: '2ia89s', q: 'Mieszkańcy zbierają podpisy pod pismem do rady miasta z prośbą o budowę przejścia dla pieszych. Z jakiego prawa korzystają?', options: ['prawa do petycji', 'prawa łaski Prezydenta', 'immunitetu poselskiego', 'prawa azylu'], answer: 0, explain: 'Art. 63 Konstytucji: każdy może składać petycje, wnioski i skargi do władz publicznych.' },
        { id: '6ovnuu', q: 'Od ilu lat obywatel polski ma prawo wybierania posłów, senatorów i prezydenta?', options: ['od 16 lat', 'od 18 lat', 'od 21 lat', 'od 25 lat'], answer: 1, explain: 'Art. 62 Konstytucji: jeżeli najpóźniej w dniu głosowania kończy 18 lat.' },
        { id: 'rr6lg2', q: 'Który przepis Konstytucji gwarantuje wolność organizowania pokojowych zgromadzeń?', options: ['art. 18', 'art. 82', 'art. 57', 'art. 126'], answer: 2, explain: 'Art. 57 zapewnia każdemu wolność organizowania pokojowych zgromadzeń i uczestniczenia w nich.' },
        { id: '3400g2', q: 'Prawda czy fałsz?\nGodność człowieka zależy od jego osiągnięć i pozycji społecznej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Godność jest przyrodzona – ma ją każdy człowiek, niezależnie od zasług.' },
      ],
    },
    {
      id: 'ochrona-praw',
      name: 'Prawa dziecka i ochrona praw',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. IV „Prawa człowieka”, wym. 3, 4, 6 i 7 (Konwencja o prawach dziecka, Rzecznik Praw Dziecka, Rzecznik Praw Obywatelskich, organizacje pozarządowe, przeciwdziałanie nietolerancji). Konwencja o prawach dziecka (Dz.U. 1991 nr 120 poz. 526), art. 1, 3, 12, 13, 16, 19, 28, 31, 32; Konstytucja RP art. 32, 72, 80, 208–212; ustawa o Rzeczniku Praw Dziecka (tekst jedn. Dz.U. 2023 poz. 292) art. 1–6, 10; ustawa o RPO (tekst jedn. Dz.U. 2024 poz. 1264) art. 5, 9–11, 14. Polski projekt Konwencji (1978) i organizacje pozarządowe – zpe.gov.pl (wątek LPH9xTWqwi, moduł „Prawa człowieka”); telefon 800 12 12 12 – gov.pl.',
      theory: `
        <h3>Konwencja o prawach dziecka</h3>
        <p>Przyjęta przez <b>Zgromadzenie Ogólne ONZ 20 listopada 1989 r.</b> Jej projekt zaproponowała <b>Polska</b> (w 1978 r.). Dzieckiem jest każdy człowiek <b>poniżej 18 lat</b> (art. 1). We wszystkich sprawach dzieci najważniejsze jest <b>dobro dziecka</b> (art. 3).</p>
        <table>
          <tr><th>Artykuł</th><th>Prawo dziecka</th></tr>
          <tr><td>12–13</td><td>wyrażanie własnych poglądów i swoboda wypowiedzi</td></tr>
          <tr><td>16</td><td>prywatność – także korespondencji</td></tr>
          <tr><td>19</td><td>ochrona przed przemocą, krzywdą i zaniedbaniem</td></tr>
          <tr><td>28</td><td>nauka (szkoła podstawowa obowiązkowa i bezpłatna)</td></tr>
          <tr><td>31</td><td>wypoczynek, czas wolny, zabawa, udział w kulturze</td></tr>
          <tr><td>32</td><td>ochrona przed wyzyskiem i szkodliwą pracą</td></tr>
        </table>
        <p>Konstytucja, art. 72: państwo chroni prawa dziecka, a każdy może żądać od władz ochrony dziecka przed przemocą, okrucieństwem, wyzyskiem i demoralizacją.</p>
        <h3>Rzecznik Praw Dziecka (RPD)</h3>
        <ul>
          <li>stoi na straży praw dziecka z Konstytucji, Konwencji i innych przepisów,</li>
          <li>powołuje go <b>Sejm za zgodą Senatu</b> na <b>5 lat</b>, najwyżej na dwie kolejne kadencje,</li>
          <li>może m.in. <b>zbadać każdą sprawę na miejscu</b>, żądać wyjaśnień od urzędów i szkół, brać udział w sprawach sądowych dotyczących dzieci, upowszechniać prawa dziecka,</li>
          <li><b>Dziecięcy Telefon Zaufania RPD: 800 12 12 12</b> – bezpłatny, całodobowy.</li>
        </ul>
        <h3>Rzecznik Praw Obywatelskich (RPO)</h3>
        <ul>
          <li>stoi na straży wolności i praw człowieka i obywatela (Konstytucja, art. 208),</li>
          <li>powołuje go <b>Sejm za zgodą Senatu</b> na <b>5 lat</b>; nie może należeć do partii; jest niezależny i odpowiada tylko przed Sejmem,</li>
          <li><b>każdy</b> może się do niego zwrócić, gdy jego prawa naruszył organ władzy publicznej (art. 80); wniosek jest <b>bezpłatny</b> i nie wymaga specjalnej formy,</li>
          <li>może np. skierować wystąpienie do urzędu, przyłączyć się do sprawy w sądzie, złożyć wniosek do Trybunału Konstytucyjnego; co roku informuje Sejm i Senat o stanie przestrzegania praw.</li>
        </ul>
        <p>Nazwiska osób pełniących dziś te funkcje sprawdzisz na stronach brpd.gov.pl i bip.brpo.gov.pl.</p>
        <h3>Organizacje pozarządowe</h3>
        <p>Prawa człowieka chronią też organizacje obywateli: monitorują przestrzeganie praw, informują o naruszeniach, pomagają ofiarom. Przykłady: <b>Amnesty International</b> (od 1961 r.), <b>Helsińska Fundacja Praw Człowieka</b>, <b>Polska Akcja Humanitarna</b>.</p>
        <h3>Tolerancja</h3>
        <p>Konstytucja, art. 32: wszyscy są wobec prawa równi, nikt nie może być dyskryminowany z jakiejkolwiek przyczyny. Brak tolerancji wobec mniejszości (narodowych, religijnych, osób z niepełnosprawnością i innych) to np. wyzwiska, wykluczanie z grupy, mowa nienawiści w sieci. Sprzeciw – choćby zgłoszenie dorosłemu lub moderatorowi – to obowiązek przyzwoitego człowieka.</p>
        <div class="tip">💡 Dwa rzeczniki, ta sama „formuła”: <b>Sejm + zgoda Senatu, 5 lat</b>. RPD – dzieci (do 18 lat), RPO – wszyscy.</div>`,
      infographicNote: 'Porównuj w poziomie: dwaj rzecznicy mają tę samą „formułę” wyboru, ale chronią różne osoby.',
      infographic: {
        type: 'porownanie',
        top: { title: '📘 Konwencja o prawach dziecka', text: 'ONZ, 20 listopada 1989 r., projekt Polski; najważniejsze jest dobro dziecka', kolor: 4 },
        kolumny: [{ title: 'Rzecznik Praw Dziecka', kolor: 3 }, { title: 'Rzecznik Praw Obywatelskich', kolor: 1 }],
        wiersze: [
          { label: 'Kogo chroni?', cells: ['dzieci (do 18 lat)', 'wszystkich'], bold: true },
          { label: 'Kto powołuje i na ile?', cells: ['Sejm za zgodą Senatu, 5 lat', 'Sejm za zgodą Senatu, 5 lat'] },
          { label: 'Co może?', cells: ['zbadać sprawę na miejscu, żądać wyjaśnień', 'wystąpić do urzędu, złożyć wniosek do TK'] },
          { label: 'Jak się zwrócić?', cells: ['telefon 800 12 12 12 – bezpłatny, całodobowy', 'wniosek bezpłatny, bez specjalnej formy'] },
        ],
        bottom: { title: '🤝 Organizacje pozarządowe', text: 'Amnesty International, Helsińska Fundacja Praw Człowieka, Polska Akcja Humanitarna', kolor: 5 },
      },
      flashcards: [
        ['Konwencja o prawach dziecka', 'Przyjęta przez Zgromadzenie Ogólne ONZ 20 listopada 1989 r.; projekt zaproponowała Polska'],
        ['Kto jest dzieckiem według Konwencji?', 'Każdy człowiek poniżej 18 lat'],
        ['Zasada z art. 3 Konwencji', 'We wszystkich sprawach dotyczących dzieci najważniejsze jest dobro dziecka'],
        ['Art. 31 Konwencji', 'Prawo do wypoczynku, czasu wolnego i zabawy'],
        ['Rzecznik Praw Dziecka – kto i na ile?', 'Sejm za zgodą Senatu, na 5 lat'],
        ['Dziecięcy Telefon Zaufania RPD', '800 12 12 12 – bezpłatny, całodobowy'],
        ['Rzecznik Praw Obywatelskich – kto i na ile?', 'Sejm za zgodą Senatu, na 5 lat'],
        ['Kto może zwrócić się do RPO?', 'Każdy, czyje prawa naruszył organ władzy publicznej; wniosek jest bezpłatny'],
        ['Amnesty International', 'Międzynarodowa organizacja pozarządowa broniąca praw człowieka (od 1961 r.)'],
        ['Art. 32 Konstytucji', 'Równość wobec prawa i zakaz dyskryminacji'],
        ['Art. 72 Konstytucji', 'Państwo chroni prawa dziecka; każdy może żądać ochrony dziecka przed przemocą'],
      ],
      questions: [
        { id: 'kns1md', q: 'Kiedy Zgromadzenie Ogólne ONZ przyjęło Konwencję o prawach dziecka?', options: ['10 grudnia 1948 r.', '20 listopada 1989 r.', '4 kwietnia 1949 r.', '1 maja 2004 r.'], answer: 1, explain: '20 listopada 1989 r. Ten dzień obchodzi się jako Dzień Praw Dziecka.' },
        { id: 'afvu6l', q: 'Które państwo zaproponowało projekt Konwencji o prawach dziecka?', options: ['Francja', 'Szwecja', 'Polska', 'USA'], answer: 2, explain: 'Polska złożyła propozycję projektu Konwencji w 1978 r.' },
        { id: 'mh8sxu', q: 'Do jakiego wieku człowiek jest dzieckiem w rozumieniu Konwencji (o ile wcześniej nie uzyska pełnoletności)?', options: ['do 18 lat', 'do 13 lat', 'do 16 lat', 'do 21 lat'], answer: 0, explain: 'Art. 1 Konwencji: każda istota ludzka w wieku poniżej osiemnastu lat.' },
        { id: 'jz3kbr', q: 'Które prawo gwarantuje art. 31 Konwencji o prawach dziecka?', options: ['prawo do głosowania', 'prawo do prowadzenia samochodu', 'prawo do zarabiania pieniędzy', 'prawo do wypoczynku i zabawy'], answer: 3, explain: 'Art. 31: wypoczynek, czas wolny, zabawa i udział w życiu kulturalnym.' },
        { id: 'nj20eg', q: 'Kto powołuje Rzecznika Praw Dziecka?', options: ['Prezydent RP', 'Sejm za zgodą Senatu', 'minister edukacji', 'Zgromadzenie Ogólne ONZ'], answer: 1, explain: 'Ustawa o RPD, art. 4: Sejm za zgodą Senatu.' },
        { id: 'xcnuoy', q: 'Na jaką kadencję powoływany jest Rzecznik Praw Obywatelskich?', options: ['4 lata', '5 lat', '6 lat', '9 lat'], answer: 1, explain: 'Ustawa o RPO, art. 5: kadencja trwa pięć lat (tyle samo co RPD).' },
        { id: 'z56cyi', q: 'Które działanie może podjąć Rzecznik Praw Dziecka?', options: ['zbadać sprawę na miejscu, nawet bez uprzedzenia', 'wydać wyrok skazujący sprawcę krzywdy dziecka', 'uchwalić ustawę o prawach dziecka', 'samodzielnie odwołać dyrektora szkoły z urzędu'], answer: 0, explain: 'Art. 10 ustawy o RPD: może zbadać każdą sprawę na miejscu i żądać wyjaśnień.' },
        { id: 's3ly61', q: 'Pod jakim numerem działa Dziecięcy Telefon Zaufania Rzecznika Praw Dziecka?', options: ['112', '997', '800 12 12 12', '19 115'], answer: 2, explain: '800 12 12 12 – bezpłatnie i całodobowo.' },
        { id: 'c5f0p3', q: 'W jakiej sytuacji możesz zwrócić się do Rzecznika Praw Obywatelskich?', options: ['gdy kolega z klasy nie oddał ci pożyczonego długopisu', 'gdy twoje prawa naruszył organ władzy publicznej, np. urząd', 'gdy chcesz zmienić ocenę z matematyki na koniec roku', 'tylko wtedy, gdy reprezentuje cię adwokat lub radca prawny'], answer: 1, explain: 'Art. 80 Konstytucji: wniosek o pomoc w ochronie praw naruszonych przez organy władzy publicznej.' },
        { id: 'k5xyt3', q: 'Ile kosztuje złożenie wniosku do Rzecznika Praw Obywatelskich?', options: ['100 zł – opłata stała za każdy wniosek', 'zależy od sprawy – opłatę ustala Rzecznik', '1% rocznego dochodu wnioskodawcy', 'nic – wniosek jest wolny od opłat'], answer: 3, explain: 'Art. 10 ustawy o RPO: wniosek jest wolny od opłat i nie wymaga szczególnej formy.' },
        { id: 'wargvj', q: 'Która organizacja jest pozarządową organizacją broniącą praw człowieka?', options: ['Amnesty International', 'Sejm RP', 'Trybunał Konstytucyjny', 'Rada Ministrów'], answer: 0, explain: 'Amnesty International działa od 1961 r. i nie jest częścią żadnego rządu.' },
        { id: 'a075ep', q: 'Prawda czy fałsz?\nKonstytucja RP zakazuje dyskryminowania kogokolwiek w życiu politycznym, społecznym lub gospodarczym z jakiejkolwiek przyczyny.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tak stanowi art. 32 ust. 2 Konstytucji.' },
      ],
    },
    {
      id: 'nieletni',
      name: 'Nieletni wobec prawa',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. V „Nieletni wobec prawa”, wym. 1–4 (przemoc fizyczna i psychiczna, kogo powiadomić, korzyści i zagrożenia internetu, cyberprzemoc, odpowiedzialność nieletnich, uprawnienia policji i innych służb, prawa w kontakcie z nimi). Ustawa o wspieraniu i resocjalizacji nieletnich (tekst jedn. Dz.U. 2026 poz. 163) art. 1, 4, 6–10, 36, 48; Kodeks karny (tekst jedn. Dz.U. 2026 poz. 1342) art. 10, 190a, 216, 217; ustawa o Policji (tekst jedn. Dz.U. 2025 poz. 636) art. 14 ust. 3, art. 15; ustawa o strażach gminnych (tekst jedn. Dz.U. 2021 poz. 1763) art. 12. Reagowanie na cyberprzemoc i telefon 116 111 – zpe.gov.pl (wątek LPH9xTWqwi, moduł „Nieletni wobec prawa”).',
      theory: `
        <h3>Przemoc – rozpoznaj ją</h3>
        <table>
          <tr><th>Rodzaj</th><th>Przykłady</th></tr>
          <tr><td><b>fizyczna</b></td><td>bicie, popychanie, kopanie, niszczenie rzeczy</td></tr>
          <tr><td><b>psychiczna</b></td><td>zastraszanie, szantaż, wykluczanie z grupy, ośmieszanie</td></tr>
          <tr><td><b>werbalna</b> (słowna)</td><td>wyzwiska, groźby, obraźliwe przezwiska</td></tr>
          <tr><td><b>cyberprzemoc</b></td><td>hejt, publikowanie zdjęć bez zgody, podszywanie się, nękanie wiadomościami</td></tr>
        </table>
        <p><b>Kogo powiadomić</b>: rodziców, wychowawcę, pedagoga lub psychologa szkolnego, dyrektora, a gdy jest zagrożenie – <b>policję (112)</b>. Pomoc anonimowo: <b>800 12 12 12</b> (Rzecznik Praw Dziecka), <b>116 111</b> (telefon zaufania dla dzieci i młodzieży).</p>
        <h3>Internet: plusy i minusy</h3>
        <p>Plusy: wiedza, nauka, kontakt z bliskimi, rozwój pasji. Zagrożenia: cyberprzemoc, fałszywe informacje, wyłudzanie danych, kontakt z obcymi podającymi się za rówieśników, uzależnienie.</p>
        <p><b>Gdy spotyka cię cyberprzemoc</b>: nie odpowiadaj agresją, <b>zrób zrzuty ekranu</b> (dowody), zablokuj sprawcę, zgłoś treść administratorowi serwisu, powiedz zaufanemu dorosłemu. Nielegalne treści można zgłosić do dyzurnet.pl. Podszywanie się pod kogoś w sieci, które wyrządza mu szkodę, jest <b>przestępstwem</b> (Kodeks karny, art. 190a § 2).</p>
        <h3>Odpowiedzialność nieletnich</h3>
        <table>
          <tr><th>Wiek</th><th>Co grozi</th></tr>
          <tr><td>od <b>10 lat</b> do pełnoletności</td><td>postępowanie w sprawie <b>demoralizacji</b> (np. wagary, picie alkoholu, środki odurzające)</td></tr>
          <tr><td><b>13–17 lat</b></td><td>za <b>czyn karalny</b> (przestępstwo, wykroczenie) – <b>sąd rodzinny</b>; środki wychowawcze, leczniczy albo poprawczy</td></tr>
          <tr><td>od <b>17 lat</b></td><td>odpowiedzialność karna <b>jak dorosły</b> (Kodeks karny, art. 10)</td></tr>
          <tr><td>wyjątek: od 15 lat (za najcięższe zbrodnie, np. zabójstwo – od 14 lat)</td><td>sąd może orzec karę jak wobec dorosłego, gdy inne środki zawiodły</td></tr>
        </table>
        <p><b>Środki wychowawcze</b> (ustawa o wspieraniu i resocjalizacji nieletnich, art. 7): upomnienie, zobowiązanie (np. do przeproszenia pokrzywdzonego, naprawienia szkody, prac społecznych), nadzór rodziców lub <b>kuratora</b>, umieszczenie w młodzieżowym ośrodku wychowawczym. Środek poprawczy – <b>zakład poprawczy</b>.</p>
        <h3>Policja i inne służby</h3>
        <p>Policjant może m.in. <b>legitymować</b> (ustalić tożsamość), <b>zatrzymać</b>, przeszukać czy dokonać kontroli osobistej – w przypadkach określonych w ustawach. Legitymować może też np. <b>straż miejska (gminna)</b>. Policjanci muszą <b>szanować godność</b> i prawa człowieka (ustawa o Policji, art. 14).</p>
        <p><b>Twoje prawa jako zatrzymanego nieletniego</b> (art. 48 ustawy o nieletnich): natychmiastowa informacja o przyczynie zatrzymania, pouczenie o prawach, prawo do <b>obrońcy</b>, do <b>kontaktu z rodzicem</b> lub obrońcą, do odmowy wyjaśnień, do pomocy medycznej, kopia protokołu. Policja zawiadamia rodziców i sąd rodzinny.</p>
        <div class="tip">💡 <b>10 – 13 – 17</b>: od 10 lat demoralizacja, od 13 – sąd rodzinny za czyny karalne, od 17 – odpowiadasz jak dorosły.</div>`,
      infographicNote: 'Czytaj od góry: co robić, gdy spotyka cię przemoc, potem oś wieku – od ilu lat za co odpowiadasz – i twoje prawa przy zatrzymaniu.',
      infographic: {
        type: 'os',
        top: { title: '🆘 Przemoc? Powiedz dorosłemu', text: 'policja 112 · Rzecznik Praw Dziecka 800 12 12 12 · telefon zaufania 116 111', kolor: 2 },
        items: [
          { label: '10 lat', title: 'Demoralizacja', text: 'postępowanie (do pełnoletności), np. za wagary', kolor: 1 },
          { label: '13 lat', title: 'Czyn karalny → sąd rodzinny', text: 'środki wychowawcze, leczniczy albo poprawczy', kolor: 1 },
          { label: '15 lat', title: 'Wyjątek', text: 'za najcięższe zbrodnie sąd może orzec karę jak wobec dorosłego (zabójstwo – od 14 lat)', kolor: 5 },
          { label: '17 lat', title: 'Jak dorosły', text: 'odpowiedzialność karna (Kodeks karny, art. 10)', kolor: 2 },
        ],
        bottom: { title: '🛡️ Zatrzymany nieletni ma prawo do', items: ['informacji o przyczynie zatrzymania', 'obrońcy i kontaktu z rodzicem', 'odmowy wyjaśnień'], kolor: 3 },
      },
      flashcards: [
        ['Przemoc psychiczna – przykłady', 'Zastraszanie, szantaż, ośmieszanie, wykluczanie z grupy'],
        ['Cyberprzemoc', 'Przemoc w sieci: hejt, publikowanie zdjęć bez zgody, podszywanie się, nękanie'],
        ['Co zrobić przy cyberprzemocy?', 'Nie odpowiadać agresją, zrobić zrzuty ekranu, zablokować, zgłosić, powiedzieć dorosłemu'],
        ['Telefon zaufania dla dzieci i młodzieży', '116 111'],
        ['Od ilu lat sąd rodzinny zajmuje się czynami karalnymi nieletnich?', 'Od 13 lat (czyn popełniony między 13 a 17 rokiem życia)'],
        ['Od ilu lat odpowiada się karnie jak dorosły?', 'Od 17 lat (Kodeks karny, art. 10)'],
        ['Postępowanie w sprawie demoralizacji', 'Wobec osób od 10 lat do pełnoletności'],
        ['Środki wychowawcze – przykłady', 'Upomnienie, nadzór kuratora, przeproszenie pokrzywdzonego, prace społeczne'],
        ['Środek poprawczy', 'Umieszczenie w zakładzie poprawczym'],
        ['Legitymowanie', 'Ustalenie tożsamości osoby przez policję lub straż miejską'],
        ['Prawa zatrzymanego nieletniego – trzy przykłady', 'Informacja o przyczynie, kontakt z rodzicem lub obrońcą, prawo do odmowy wyjaśnień'],
        ['Podszywanie się pod kogoś w sieci, które wyrządza mu szkodę', 'Przestępstwo – Kodeks karny, art. 190a § 2'],
      ],
      questions: [
        { id: '4ix382', q: 'Które zachowanie to przemoc psychiczna?', options: ['zastraszanie i szantażowanie kolegi', 'popchnięcie kolegi na korytarzu', 'zabranie komuś roweru bez pytania', 'kopnięcie piłką w okno sąsiada'], answer: 0, explain: 'Przemoc psychiczna rani bez użycia siły fizycznej – groźbami, szantażem, ośmieszaniem.' },
        { id: 'etkoqz', q: 'Ktoś rozsyła na grupie klasowej przerobione, ośmieszające zdjęcie twojej koleżanki. Co zrobić NAJPIERW?', options: ['przesłać je dalej, żeby wszyscy wiedzieli', 'zrobić zrzut ekranu i powiedzieć zaufanemu dorosłemu', 'odpisać sprawcy wulgarnie', 'udawać, że nic się nie stało'], answer: 1, explain: 'Dowody i zgłoszenie dorosłemu to podstawa. Udostępnianie dalej powiększa krzywdę.' },
        { id: 'rpovsn', q: 'Który numer to telefon zaufania dla dzieci i młodzieży?', options: ['997', '116 111', '998', '19 282'], answer: 1, explain: '116 111 – telefon zaufania dla dzieci i młodzieży; jest też 800 12 12 12 (RPD).' },
        { id: 'k8i7z1', q: 'Od ilu lat ustawa o wspieraniu i resocjalizacji nieletnich przewiduje postępowanie w sprawie demoralizacji?', options: ['od 7 lat', 'od 13 lat', 'od 10 lat', 'od 17 lat'], answer: 2, explain: 'Art. 1 ustawy z 2022 r.: wobec osób, które ukończyły 10 lat i nie są pełnoletnie.' },
        { id: '8nnbj8', q: '15-latek ukradł telefon. Kto zajmie się jego sprawą?', options: ['sąd rodzinny', 'Trybunał Konstytucyjny', 'dyrektor szkoły – i nikt więcej', 'sąd jak dla dorosłych – zawsze'], answer: 0, explain: 'Czyny karalne osób w wieku 13–17 lat rozpatruje sąd rodzinny.' },
        { id: '1qp851', q: 'Od ilu lat co do zasady odpowiada się za przestępstwo według Kodeksu karnego, czyli jak dorosły?', options: ['od 13 lat', 'od 15 lat', 'od 16 lat', 'od 17 lat'], answer: 3, explain: 'Art. 10 § 1 Kodeksu karnego: odpowiada ten, kto popełnia czyn zabroniony po ukończeniu 17 lat.' },
        { id: '6mmydb', q: 'Który z wymienionych to środek wychowawczy wobec nieletniego?', options: ['kara więzienia', 'nadzór kuratora sądowego', 'grzywna 10 000 zł', 'utrata prawa wyborczego'], answer: 1, explain: 'Nadzór kuratora to jeden ze środków wychowawczych z art. 7 ustawy o nieletnich.' },
        { id: '2edinf', q: 'Czym jest środek poprawczy?', options: ['upomnieniem', 'umieszczeniem w zakładzie poprawczym', 'przeproszeniem pokrzywdzonego', 'zakazem korzystania z telefonu'], answer: 1, explain: 'Art. 9 ustawy: środkiem poprawczym jest umieszczenie w zakładzie poprawczym.' },
        { id: 's2j2kk', q: 'Które prawo przysługuje zatrzymanemu nieletniemu?', options: ['prawo do kontaktu z rodzicem lub obrońcą', 'prawo do odmowy podania imienia i ucieczki', 'prawo do natychmiastowego zwolnienia bez względu na sprawę', 'prawo do wyboru policjanta'], answer: 0, explain: 'Art. 48 ustawy o nieletnich: m.in. kontakt z rodzicem lub obrońcą, informacja o przyczynie, odmowa wyjaśnień.' },
        { id: 'mxm08x', q: 'Co oznacza legitymowanie przez policjanta?', options: ['przeszukanie mieszkania', 'wystawienie mandatu', 'ustalenie tożsamości osoby', 'zatrzymanie na 48 godzin'], answer: 2, explain: 'Legitymowanie służy ustaleniu tożsamości (ustawa o Policji, art. 15).' },
        { id: 'ftad5n', q: 'Ktoś założył konto ze zdjęciem i imieniem kolegi i publikuje w jego imieniu obraźliwe wpisy. Jak ocenia to prawo?', options: ['to legalny żart, dopóki nikt nie traci pieniędzy', 'to przestępstwo podszywania się (Kodeks karny, art. 190a § 2)', 'to naruszenie regulaminu szkoły, a nie prawa', 'to wolność słowa chroniona przez Konstytucję RP'], answer: 1, explain: 'Podszywanie się pod inną osobę z użyciem jej wizerunku lub danych, które wyrządza jej szkodę, jest przestępstwem.' },
        { id: '6lj9b5', q: 'Prawda czy fałsz?\nPolicjanci w czasie wykonywania czynności mają obowiązek respektować godność ludzką i prawa człowieka.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tak stanowi art. 14 ust. 3 ustawy o Policji.' },
      ],
      tasks: [
        {
          id: '5g9yh9',
          points: 3,
          q: '14-letni Kuba wrzucił do sieci przerobione zdjęcie Oli z obraźliwym podpisem, a potem założył konto, na którym podszywa się pod nią i pisze w jej imieniu wulgarne komentarze.\na) Nazwij zjawisko, którego ofiarą jest Ola.\nb) Podaj dwa właściwe sposoby reakcji Oli.\nc) Wyjaśnij, na jakich zasadach odpowie Kuba (kto zajmie się sprawą i co może mu grozić).',
          steps: [
            'a) To cyberprzemoc (przemoc w sieci): publikowanie ośmieszających treści i podszywanie się pod inną osobę.',
            'b) Np.: zrobić zrzuty ekranu (zabezpieczyć dowody), zgłosić konto i wpisy administratorowi serwisu, powiedzieć rodzicom lub pedagogowi, zgłosić sprawę na policję, zadzwonić pod 116 111 lub 800 12 12 12. Nie odpowiadać agresją.',
            'c) Kuba ma 14 lat, więc jest nieletnim: za czyn karalny (podszywanie się z art. 190a § 2 Kodeksu karnego) odpowiada przed sądem rodzinnym.',
            'Sąd może zastosować środki wychowawcze (np. upomnienie, zobowiązanie do przeproszenia Oli, nadzór kuratora) albo – w poważniejszej sytuacji – środek poprawczy.',
          ],
          answer: 'Cyberprzemoc; np. zabezpieczenie dowodów i zgłoszenie dorosłemu/administratorowi/policji; Kuba (14 lat) odpowiada przed sądem rodzinnym – środki wychowawcze lub poprawczy.',
          scoring: [
            '1 pkt – nazwa zjawiska: cyberprzemoc.',
            '1 pkt – dwa właściwe sposoby reakcji.',
            '1 pkt – sąd rodzinny i przykład środka (wychowawczego lub poprawczego).',
          ],
        },
      ],
    },
    {
      id: 'gmina',
      name: 'Gmina – samorząd najbliżej ciebie',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. VI „Społeczność lokalna”, wym. 1–6 (zadania samorządu gminnego, urząd gminy, organy stanowiące i wykonawcze, ich wybór i odwołanie, osoby pełniące funkcje, informacje o gminie, problemy społeczności lokalnej). Konstytucja RP art. 16, 163–171; ustawa o samorządzie gminnym (tekst jedn. Dz.U. 2026 poz. 662) art. 5, 7, 8, 11a, 11b, 15–19, 26–33; Kodeks wyborczy (tekst jedn. Dz.U. 2026 poz. 1261) art. 10, 11, 416, 418, 471, 473; ustawa o referendum lokalnym (tekst jedn. Dz.U. 2025 poz. 472) art. 2, 4, 5, 55.',
      theory: `
        <h3>Gmina – podstawowa jednostka samorządu</h3>
        <p>Mieszkańcy gminy z mocy prawa tworzą <b>wspólnotę samorządową</b> (Konstytucja, art. 16). Gmina zajmuje się <b>wszystkimi sprawami publicznymi o znaczeniu lokalnym</b>, których ustawy nie przypisały komuś innemu.</p>
        <h3>Zadania gminy</h3>
        <ul>
          <li><b>zadania własne</b> (art. 7) – m.in. gminne drogi i ulice, wodociągi i kanalizacja, wywóz śmieci, lokalny transport, <b>szkoły podstawowe i przedszkola</b> (edukacja publiczna), biblioteki i kultura, sport, zieleń, pomoc społeczna, porządek publiczny, promocja gminy, współpraca z organizacjami pozarządowymi,</li>
          <li><b>zadania zlecone</b> przez państwo (art. 8) – np. organizacja wyborów i referendów.</li>
        </ul>
        <h3>Organy gminy</h3>
        <table>
          <tr><th></th><th>Rada gminy (rada miejska)</th><th>Wójt / burmistrz / prezydent miasta</th></tr>
          <tr><td>rola</td><td>organ <b>stanowiący i kontrolny</b>: uchwala budżet, statut, plany zagospodarowania, kontroluje wójta</td><td>organ <b>wykonawczy</b>: wykonuje uchwały i budżet, kieruje urzędem, reprezentuje gminę</td></tr>
          <tr><td>wybór</td><td>wybory bezpośrednie; w gminie do 20 tys. mieszkańców – okręgi jednomandatowe, w większej – proporcjonalne</td><td>wybory bezpośrednie; wygrywa kandydat z <b>ponad połową</b> ważnych głosów, inaczej <b>druga tura po 14 dniach</b></td></tr>
          <tr><td>kadencja</td><td><b>5 lat</b>; 15–45 radnych (zależnie od liczby mieszkańców)</td><td>tyle co rada (5 lat); ta sama osoba może być wybrana w danej gminie najwyżej <b>dwa razy</b></td></tr>
          <tr><td>wiek kandydata</td><td>18 lat</td><td>25 lat</td></tr>
        </table>
        <p><b>Burmistrz</b> – gdy siedziba władz jest w mieście; <b>prezydent miasta</b> – w miastach powyżej 100 tys. mieszkańców. <b>Przewodniczący rady</b> (wybierany przez radnych spośród siebie) tylko organizuje pracę rady i prowadzi obrady – nie rządzi gminą.</p>
        <h3>Urząd gminy</h3>
        <p>Wójt wykonuje zadania przy pomocy <b>urzędu gminy</b> i jest jego kierownikiem; organizację urzędu określa regulamin organizacyjny. Pomagają mu m.in. zastępca, sekretarz i skarbnik (główny księgowy budżetu, powoływany przez radę na wniosek wójta). Gmina może mieć <b>jednostki pomocnicze</b>: sołectwa (zebranie wiejskie i <b>sołtys</b>), dzielnice, osiedla.</p>
        <h3>Jak odwołać władze gminy?</h3>
        <p>W <b>referendum lokalnym</b> – na wniosek co najmniej <b>10%</b> uprawnionych mieszkańców (rada może też zarządzić referendum w sprawie odwołania wójta). Referendum o odwołanie jest ważne, gdy wzięło w nim udział co najmniej <b>3/5 liczby głosujących</b> w wyborach odwoływanego organu.</p>
        <h3>Gmina jest jawna</h3>
        <p>Możesz przyjść na <b>sesję rady</b> i posiedzenia komisji, czytać protokoły i sprawdzać, jak głosował radny (art. 11b, 14). Kto jest wójtem i przewodniczącym rady w twojej gminie, sprawdzisz w <b>Biuletynie Informacji Publicznej (BIP)</b> i na stronie gminy. Problemy lokalne (np. starzenie się mieszkańców, wyjazdy młodych, brak pracy, korki, brak kanalizacji) omawia się m.in. przy corocznym <b>raporcie o stanie gminy</b>.</p>
        <div class="tip">💡 Rada <b>uchwala</b>, wójt <b>wykonuje</b>. Obie kadencje – <b>5 lat</b>.</div>`,
      infographicNote: 'Porównuj w poziomie: rada gminy uchwala, wójt wykonuje – obu wybierają mieszkańcy.',
      infographic: {
        type: 'porownanie',
        top: { title: '🏘️ Mieszkańcy gminy', text: 'tworzą wspólnotę samorządową i wybierają władze gminy', kolor: 4 },
        kolumny: [{ title: 'Rada gminy', kolor: 1 }, { title: 'Wójt / burmistrz / prezydent miasta', kolor: 2 }],
        wiersze: [
          { label: 'Rola', cells: ['uchwala i kontroluje', 'wykonuje'], bold: true },
          { label: 'Co robi?', cells: ['uchwala budżet i statut, kontroluje wójta', 'wykonuje uchwały i budżet, kieruje urzędem gminy'] },
          { label: 'Jak wybrany?', cells: ['wybory bezpośrednie', 'bezpośrednio: ponad połowa głosów, inaczej druga tura'] },
          { label: 'Kadencja', cells: ['5 lat', '5 lat'], bold: true },
          { label: 'Wiek kandydata', cells: ['18 lat', '25 lat'], bold: true },
        ],
        bottom: { title: '🗳️ Odwołanie', text: 'referendum lokalne na wniosek co najmniej 10% uprawnionych mieszkańców', kolor: 5 },
      },
      flashcards: [
        ['Podstawowa jednostka samorządu terytorialnego', 'Gmina (Konstytucja, art. 164)'],
        ['Organ stanowiący i kontrolny gminy', 'Rada gminy (w mieście – rada miejska)'],
        ['Organ wykonawczy gminy', 'Wójt, burmistrz albo prezydent miasta'],
        ['Kadencja rady gminy i wójta', '5 lat'],
        ['Kiedy prezydent miasta zamiast burmistrza?', 'W miastach powyżej 100 tys. mieszkańców'],
        ['Jak wybiera się wójta?', 'Bezpośrednio; trzeba ponad połowy ważnych głosów, inaczej druga tura po 14 dniach'],
        ['Zadanie przewodniczącego rady gminy', 'Tylko organizowanie pracy rady i prowadzenie obrad'],
        ['Zadania własne gminy – przykłady', 'Drogi gminne, wodociągi, śmieci, szkoły podstawowe, biblioteki'],
        ['Zadania zlecone gminie – przykład', 'Organizacja wyborów i referendów'],
        ['Sołtys', 'Organ wykonawczy sołectwa (jednostki pomocniczej gminy)'],
        ['Kto może zażądać referendum w sprawie odwołania władz gminy?', 'Co najmniej 10% uprawnionych mieszkańców'],
        ['BIP', 'Biuletyn Informacji Publicznej – tu znajdziesz dane o władzach i uchwałach gminy'],
      ],
      questions: [
        { id: 'veplwq', q: 'Która jednostka jest według Konstytucji podstawową jednostką samorządu terytorialnego?', options: ['województwo', 'powiat', 'gmina', 'sołectwo'], answer: 2, explain: 'Art. 164 Konstytucji: podstawową jednostką samorządu terytorialnego jest gmina.' },
        { id: 'li0ncb', q: 'Który organ jest organem stanowiącym i kontrolnym w gminie?', options: ['rada gminy', 'wójt', 'sołtys', 'wojewoda'], answer: 0, explain: 'Rada gminy uchwala (stanowi) i kontroluje wójta.' },
        { id: '5quw47', q: 'Ile trwa kadencja rady gminy?', options: ['4 lata', '6 lat', '3 lata', '5 lat'], answer: 3, explain: 'Art. 16 ustawy o samorządzie gminnym: kadencja rady gminy trwa 5 lat.' },
        { id: 'qdxytx', q: 'Kto jest organem wykonawczym w mieście liczącym 300 tys. mieszkańców?', options: ['wójt gminy', 'burmistrz miasta', 'prezydent miasta', 'starosta powiatu'], answer: 2, explain: 'W miastach powyżej 100 tys. mieszkańców organem wykonawczym jest prezydent miasta.' },
        { id: 'jd4czd', q: 'Które zadanie jest zadaniem własnym gminy?', options: ['prowadzenie szkół podstawowych', 'prowadzenie uniwersytetów', 'obrona granic państwa', 'polityka zagraniczna'], answer: 0, explain: 'Edukacja publiczna (szkoły podstawowe, przedszkola) należy do zadań własnych gminy.' },
        { id: 'zwi4i2', q: 'W pierwszej turze wyborów na wójta żaden kandydat nie zdobył ponad połowy ważnych głosów. Co dalej?', options: ['wójta wybiera rada gminy spośród wszystkich kandydatów', 'wygrywa ten, kto zdobył najwięcej głosów w pierwszej turze', 'po 14 dniach jest druga tura z dwoma najlepszymi kandydatami', 'wybory unieważnia się i powtarza dopiero za 5 lat'], answer: 2, explain: 'Kodeks wyborczy, art. 473: ponowne głosowanie czternastego dnia po pierwszym.' },
        { id: 'wf3oiz', q: 'Jaki jest minimalny wiek kandydata na wójta?', options: ['18 lat', '21 lat', '25 lat', '30 lat'], answer: 2, explain: 'Kodeks wyborczy, art. 11: kandydat na wójta musi najpóźniej w dniu głosowania kończyć 25 lat.' },
        { id: '4vnvvn', q: 'Kto uchwala budżet gminy?', options: ['wójt', 'rada gminy', 'skarbnik', 'regionalna izba obrachunkowa'], answer: 1, explain: 'Uchwalanie budżetu należy do wyłącznej właściwości rady gminy; wójt przygotowuje projekt i wykonuje budżet.' },
        { id: '811e4l', q: 'Czym zajmuje się przewodniczący rady gminy?', options: ['kieruje urzędem gminy i jego pracownikami', 'organizuje pracę rady i prowadzi jej obrady', 'reprezentuje gminę na zewnątrz i podpisuje umowy', 'zatrudnia pracowników urzędu'], answer: 1, explain: 'Art. 19 ustawy o samorządzie gminnym – to wyłącznie organizacja pracy rady i prowadzenie obrad.' },
        { id: 'l0noma', q: 'Jak mieszkańcy mogą odwołać radę gminy przed końcem kadencji?', options: ['w referendum lokalnym', 'przez petycję do premiera', 'przez wpis w mediach społecznościowych', 'nie mogą tego zrobić'], answer: 0, explain: 'O odwołaniu organu stanowiącego przed upływem kadencji rozstrzyga się wyłącznie w referendum.' },
        { id: 't25dqw', q: 'Co najmniej jaki odsetek uprawnionych mieszkańców gminy musi poprzeć wniosek o referendum lokalne?', options: ['1%', '5%', '50%', '10%'], answer: 3, explain: 'Ustawa o referendum lokalnym, art. 4: 10% uprawnionych mieszkańców gminy albo powiatu.' },
        { id: '5e8f69', q: 'Prawda czy fałsz?\nKażdy mieszkaniec może przyjść na sesję rady gminy i obserwować obrady.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Działalność organów gminy jest jawna – obejmuje to wstęp na sesje rady (art. 11b).' },
      ],
    },
    {
      id: 'powiat-wojewodztwo',
      name: 'Powiat i województwo',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. VII „Społeczność regionalna”, wym. 1–4 (region i województwa, zadania samorządu powiatowego i województwa, ich organy, wybór i odwołanie, tradycje regionu). Ustawa o wprowadzeniu zasadniczego trójstopniowego podziału terytorialnego państwa (Dz.U. 1998 nr 96 poz. 603) art. 1–2; ustawa o samorządzie powiatowym (tekst jedn. Dz.U. 2025 poz. 1684) art. 4, 8, 9, 26, 27, 31, 34, 91, 92; ustawa o samorządzie województwa (tekst jedn. Dz.U. 2026 poz. 720) art. 14–16, 31, 32, 37, 41, 43; Konstytucja RP art. 152, 171; ustawa o referendum lokalnym art. 4.',
      theory: `
        <h3>Trzy szczeble samorządu</h3>
        <p>Od <b>1 stycznia 1999 r.</b> Polska dzieli się na <b>gminy, powiaty i województwa</b>. Województw jest <b>16</b>. Region to wspólnota mieszkańców województwa – z własną historią, tradycjami, czasem gwarą lub językiem regionalnym.</p>
        <h3>Powiat</h3>
        <ul>
          <li>wykonuje zadania <b>ponadgminne</b>: m.in. szkoły ponadpodstawowe (edukacja publiczna), ochrona zdrowia (szpitale powiatowe), drogi powiatowe, przeciwdziałanie bezrobociu (<b>powiatowy urząd pracy</b>), pomoc rodzinie i osobom z niepełnosprawnością, ochrona praw konsumenta, porządek publiczny,</li>
          <li><b>rada powiatu</b> – organ stanowiący i kontrolny, wybierana w wyborach bezpośrednich na <b>5 lat</b>,</li>
          <li><b>zarząd powiatu</b> (3–5 osób) z <b>starostą</b> na czele – organ wykonawczy; starostę wybiera <b>rada powiatu</b> (bezwzględną większością ustawowego składu, w głosowaniu tajnym); pracuje przy pomocy <b>starostwa powiatowego</b>,</li>
          <li><b>miasto na prawach powiatu</b> (np. duże miasta) to gmina, która wykonuje też zadania powiatu – jego organy to rada miasta i prezydent miasta.</li>
        </ul>
        <h3>Województwo</h3>
        <ul>
          <li>zadania <b>regionalne</b>: m.in. szkolnictwo wyższe, ochrona zdrowia, kultura i zabytki, transport zbiorowy i drogi wojewódzkie, zagospodarowanie przestrzenne, ochrona środowiska, modernizacja wsi, rynek pracy,</li>
          <li><b>sejmik województwa</b> – organ stanowiący i kontrolny, wybory bezpośrednie, <b>5 lat</b> (30 radnych w województwie do 2 mln mieszkańców, więcej w większych),</li>
          <li><b>zarząd województwa</b> (5 osób) z <b>marszałkiem województwa</b> – organ wykonawczy; marszałka wybiera <b>sejmik</b>; urząd: <b>urząd marszałkowski</b>.</li>
        </ul>
        <h3>Uwaga: wojewoda to nie samorząd!</h3>
        <p><b>Wojewoda</b> jest przedstawicielem <b>Rady Ministrów</b> (rządu) w województwie (Konstytucja, art. 152) i m.in. nadzoruje, czy samorządy działają zgodnie z prawem (art. 171). Marszałek – samorząd, wojewoda – rząd.</p>
        <h3>Odwołanie</h3>
        <p>Radę powiatu i sejmik można odwołać w <b>referendum</b> – wniosek musi poprzeć 10% mieszkańców powiatu albo <b>5%</b> mieszkańców województwa. Starostę może odwołać rada powiatu, a marszałka – sejmik (większością 3/5 ustawowego składu, na wniosek co najmniej 1/4 radnych).</p>
        <h3>Twój region</h3>
        <p>Poznaj herb i historię województwa, jego ważne postacie, święta i zwyczaje, potrawy, stroje i gwarę. Informacje znajdziesz na stronach urzędu marszałkowskiego, w muzeach regionalnych i bibliotekach.</p>
        <div class="tip">💡 Pary „organ wykonawczy – szef”: gmina – <b>wójt</b>, powiat – zarząd ze <b>starostą</b>, województwo – zarząd z <b>marszałkiem</b>.</div>`,
      infographicNote: 'Porównuj w poziomie: powiat i województwo mają taki sam układ – organ stanowiący wybiera szefa organu wykonawczego.',
      infographic: {
        type: 'porownanie',
        top: { title: '🗺️ Trzy szczeble od 1.01.1999 r.', text: 'gminy, powiaty i województwa (jest ich 16)', kolor: 4 },
        kolumny: [{ title: 'Powiat', kolor: 1 }, { title: 'Województwo', kolor: 3 }],
        wiersze: [
          { label: 'Organ stanowiący (5 lat)', cells: ['rada powiatu', 'sejmik województwa'], bold: true },
          { label: 'Organ wykonawczy', cells: ['zarząd ze starostą', 'zarząd z marszałkiem'], bold: true },
          { label: 'Kto wybiera szefa?', cells: ['rada powiatu wybiera starostę', 'sejmik wybiera marszałka'] },
          { label: 'Urząd', cells: ['starostwo powiatowe', 'urząd marszałkowski'] },
          { label: 'Zadania – przykłady', cells: ['szkoły ponadpodstawowe, szpital, urząd pracy', 'szkolnictwo wyższe, kultura, drogi wojewódzkie'] },
        ],
        bottom: { title: '⚠️ Wojewoda to nie samorząd', text: 'przedstawiciel Rady Ministrów; nadzoruje, czy samorządy działają zgodnie z prawem', kolor: 2 },
      },
      flashcards: [
        ['Trójstopniowy podział terytorialny', 'Gminy, powiaty, województwa – od 1 stycznia 1999 r.'],
        ['Ile jest województw?', '16'],
        ['Organ stanowiący powiatu', 'Rada powiatu (kadencja 5 lat)'],
        ['Organ wykonawczy powiatu', 'Zarząd powiatu ze starostą na czele'],
        ['Kto wybiera starostę?', 'Rada powiatu'],
        ['Urząd, przy pomocy którego działa zarząd powiatu', 'Starostwo powiatowe'],
        ['Organ stanowiący województwa', 'Sejmik województwa (kadencja 5 lat)'],
        ['Organ wykonawczy województwa', 'Zarząd województwa z marszałkiem na czele'],
        ['Kto wybiera marszałka województwa?', 'Sejmik województwa'],
        ['Wojewoda', 'Przedstawiciel Rady Ministrów w województwie (nie samorząd)'],
        ['Miasto na prawach powiatu', 'Gmina wykonująca także zadania powiatu; organy: rada miasta i prezydent miasta'],
        ['Zadanie powiatu – przykład', 'Szkoły ponadpodstawowe, szpital powiatowy, powiatowy urząd pracy'],
      ],
      questions: [
        { id: '6ure51', q: 'Od kiedy obowiązuje w Polsce trójstopniowy podział na gminy, powiaty i województwa?', options: ['od 1 stycznia 1999 r.', 'od 1 maja 2004 r.', 'od 4 czerwca 1989 r.', 'od 11 listopada 1918 r.'], answer: 0, explain: 'Wprowadziła go ustawa z 24 lipca 1998 r., z dniem 1 stycznia 1999 r.' },
        { id: 'k1z1rh', q: 'Ile województw ma Polska?', options: ['49', '16', '17', '12'], answer: 1, explain: 'Od 1999 r. jest 16 województw.' },
        { id: '331wjj', q: 'Kto stoi na czele zarządu powiatu?', options: ['marszałek', 'wojewoda', 'starosta', 'burmistrz'], answer: 2, explain: 'Starosta przewodniczy zarządowi powiatu.' },
        { id: 'an9d4a', q: 'Kto wybiera starostę?', options: ['mieszkańcy w wyborach bezpośrednich', 'wojewoda', 'Prezes Rady Ministrów', 'rada powiatu'], answer: 3, explain: 'Starostę wybiera rada powiatu bezwzględną większością głosów ustawowego składu, w głosowaniu tajnym.' },
        { id: 'g4kk48', q: 'Który organ jest organem stanowiącym samorządu województwa?', options: ['sejmik województwa', 'zarząd województwa', 'wojewoda', 'Senat'], answer: 0, explain: 'Sejmik uchwala i kontroluje; zarząd z marszałkiem wykonuje.' },
        { id: '150x02', q: 'Kim jest wojewoda?', options: ['szefem samorządu województwa wybieranym przez sejmik', 'przedstawicielem Rady Ministrów w województwie', 'przewodniczącym sejmiku województwa', 'starostą największego powiatu'], answer: 1, explain: 'Konstytucja, art. 152: przedstawicielem Rady Ministrów w województwie jest wojewoda.' },
        { id: 'ochwfx', q: 'Które zadanie należy do powiatu?', options: ['prowadzenie powiatowego urzędu pracy', 'prowadzenie przedszkoli gminnych', 'uchwalanie ustaw', 'prowadzenie ambasad'], answer: 0, explain: 'Przeciwdziałanie bezrobociu i aktywizacja rynku pracy to zadanie powiatu (art. 4 ustawy o samorządzie powiatowym).' },
        { id: '83ypmm', q: 'Które zadanie wymienia ustawa o samorządzie województwa?', options: ['wydawanie dowodów osobistych mieszkańcom', 'szkolnictwo wyższe w ramach edukacji publicznej', 'wywóz śmieci z osiedli i domów jednorodzinnych', 'obsada stanowisk sędziów w sądach okręgowych'], answer: 1, explain: 'Art. 14 ustawy: edukacja publiczna, w tym szkolnictwo wyższe.' },
        { id: 'x62q5n', q: 'Ile trwa kadencja sejmiku województwa?', options: ['4 lata', '6 lat', '5 lat', '9 lat'], answer: 2, explain: 'Art. 16 ustawy o samorządzie województwa: 5 lat od dnia wyborów.' },
        { id: 'y1v79m', q: 'Jaki odsetek uprawnionych mieszkańców województwa musi poprzeć wniosek o referendum wojewódzkie?', options: ['5%', '10%', '20%', '50%'], answer: 0, explain: 'Ustawa o referendum lokalnym, art. 4: 5% dla województwa (10% dla gminy i powiatu).' },
        { id: 'f6cd79', q: 'Kto pełni funkcję organu wykonawczego w mieście na prawach powiatu?', options: ['starosta powiatu', 'marszałek województwa', 'wojewoda', 'prezydent miasta'], answer: 3, explain: 'Art. 92 ustawy o samorządzie powiatowym: rada miasta i prezydent miasta.' },
        { id: 'l5mngf', q: 'Prawda czy fałsz?\nMarszałka województwa wybierają mieszkańcy w wyborach bezpośrednich.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Marszałka wybiera sejmik województwa; bezpośrednio wybieramy tylko radnych sejmiku.' },
      ],
    },
    {
      id: 'narod',
      name: 'Naród, obywatelstwo, mniejszości',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. VIII „Wspólnoty narodowe/etniczne i ojczyzna”, wym. 1–5 (bycie Polakiem i członkiem innej wspólnoty, obywatelstwo a narodowość, obowiązki obywatela, symbole RP, patriotyzm, mniejszości i język regionalny, migranci i uchodźcy, łączenie tożsamości, ksenofobia). Konstytucja RP art. 27, 28, 34, 35, 56, 82–86, 137; ustawa o obywatelstwie polskim (tekst jedn. Dz.U. 2025 poz. 1611) art. 4, 14, 15, 18; ustawa o godle, barwach i hymnie RP (tekst jedn. Dz.U. 2025 poz. 299) art. 1, 2, 4, 6a, 12, 14; ustawa o mniejszościach narodowych i etnicznych oraz o języku regionalnym (tekst jedn. Dz.U. 2026 poz. 75) art. 2, 19 oraz zmiana Dz.U. 2026 poz. 780 (mniejszość grecka od 16.12.2026). Miejsca zamieszkania mniejszości i uchodźcy z Ukrainy – zpe.gov.pl (wątek LP10nQC1Vf, moduł „Wspólnoty narodowe/etniczne i państwowe”).',
      theory: `
        <h3>Naród i ojczyzna</h3>
        <p><b>Naród</b> to wspólnota ludzi, których łączy język, kultura, historia, tradycje i <b>poczucie przynależności</b>. Z ojczyzną łączą cię miejsca, ludzie, język, pamięć o przodkach. Polakiem można być także za granicą – Konstytucja mówi o pomocy Polakom za granicą (art. 6).</p>
        <h3>Narodowość a obywatelstwo</h3>
        <table>
          <tr><th>Narodowość</th><th>Obywatelstwo</th></tr>
          <tr><td>poczucie przynależności do narodu (wspólnota kulturowa)</td><td><b>więź prawna</b> z państwem – daje prawa i nakłada obowiązki</td></tr>
          <tr><td>np. obywatel polski może być narodowości ukraińskiej lub niemieckiej</td><td>nabywa się je m.in. przez <b>urodzenie</b>, gdy co najmniej jedno z rodziców jest obywatelem polskim; może je też <b>nadać Prezydent RP</b></td></tr>
        </table>
        <p>Obywatelstwa polskiego nie można utracić, chyba że samemu się go zrzeknie (Konstytucja, art. 34).</p>
        <h3>Obowiązki obywatela (Konstytucja, art. 82–86)</h3>
        <ul>
          <li><b>wierność</b> Rzeczypospolitej i <b>troska o dobro wspólne</b> (art. 82),</li>
          <li><b>przestrzeganie prawa</b> (art. 83),</li>
          <li>płacenie <b>podatków</b> i innych świadczeń (art. 84),</li>
          <li><b>obrona Ojczyzny</b> (art. 85),</li>
          <li><b>dbałość o środowisko</b> (art. 86).</li>
        </ul>
        <h3>Symbole RP</h3>
        <table>
          <tr><th>Symbol</th><th>Opis</th></tr>
          <tr><td><b>godło</b></td><td>orzeł biały ze złotą koroną, złotym dziobem i szponami, w czerwonym polu tarczy</td></tr>
          <tr><td><b>barwy</b></td><td>biały i czerwony – <b>biały u góry</b>; 2 maja – Dzień Flagi RP</td></tr>
          <tr><td><b>hymn</b></td><td>„Mazurek Dąbrowskiego”; słuchamy go na stojąco, w postawie wyrażającej szacunek</td></tr>
        </table>
        <p><b>Patriotyzm</b> młodego człowieka: nauka, szacunek dla symboli i historii, dbanie o swoją okolicę, pomoc innym. Dorosłego: uczciwa praca, płacenie podatków, udział w wyborach, gotowość do obrony kraju.</p>
        <h3>Mniejszości w Polsce</h3>
        <p>To <b>obywatele polscy</b>, których przodkowie mieszkają na ziemiach Polski od co najmniej 100 lat i którzy chcą zachować swój język i kulturę.</p>
        <ul>
          <li><b>narodowe</b> (mają własne państwo): białoruska, czeska, litewska, niemiecka, ormiańska, rosyjska, słowacka, ukraińska, żydowska – a od <b>16 grudnia 2026 r.</b> także <b>grecka</b>,</li>
          <li><b>etniczne</b> (bez własnego państwa): karaimska, łemkowska, romska, tatarska,</li>
          <li><b>język regionalny</b>: <b>kaszubski</b> (Pomorze).</li>
        </ul>
        <p>Np. mniejszość niemiecka mieszka zwarcie na Śląsku Opolskim, białoruska i litewska – na Podlasiu. Konstytucja (art. 35) daje mniejszościom prawo do zachowania <b>języka, obyczajów i kultury</b> oraz do własnych szkół i instytucji kultury.</p>
        <h3>Migranci i uchodźcy</h3>
        <p><b>Migrant</b> zmienia kraj zamieszkania z różnych powodów (np. praca, nauka). <b>Uchodźca</b> ucieka przed prześladowaniem lub wojną i szuka ochrony – Konstytucja przewiduje prawo azylu i status uchodźcy (art. 56). Po ataku Rosji na Ukrainę (24 lutego 2022 r.) do Polski przybyło bardzo wielu uchodźców z Ukrainy.</p>
        <h3>Tożsamości i ksenofobia</h3>
        <p>Możesz być jednocześnie np. Ślązakiem lub Kaszubą (tożsamość regionalna), Polakiem (narodowa), obywatelem RP (państwowa) i Europejczykiem. <b>Ksenofobia</b> to niechęć do obcych; jej odmiany: <b>rasizm</b> (wobec innej rasy), <b>szowinizm</b> (przekonanie o wyższości własnego narodu), <b>antysemityzm</b> (wrogość wobec Żydów).</p>
        <div class="tip">💡 Narodowość = <b>czujesz</b>, obywatelstwo = <b>masz w dokumentach</b>. Mniejszości: <b>9 narodowych + 4 etniczne + 1 język regionalny</b> (od 16.12.2026 – 10 narodowych).</div>`,
      infographicNote: 'Czytaj od góry: obywatelstwo to więź z państwem – a narodowość może być różna; mniejszości to też obywatele polscy.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        top: { title: 'Narodowość – czujesz\nObywatelstwo – masz w dokumentach', kolor: 4 },
        root: { title: 'Obywatel RP', text: 'więź prawna z państwem: prawa i obowiązki', kolor: 1 },
        branches: [
          { title: 'Jak zostać obywatelem?', items: ['urodzenie: rodzic – obywatel polski', 'nadanie przez Prezydenta RP'], kolor: 1 },
          { title: 'Obowiązki', items: ['wierność RP i troska o dobro wspólne', 'przestrzeganie prawa', 'podatki', 'obrona Ojczyzny', 'dbałość o środowisko'], kolor: 2 },
          { title: 'Narodowość', text: 'może być inna niż polska, np. ukraińska lub niemiecka', kolor: 5 },
          { title: 'Mniejszości', text: 'to obywatele polscy', items: ['9 narodowych (od 16.12.2026 r. – 10)', '4 etniczne', 'język regionalny: kaszubski'], kolor: 3 },
        ],
      },
      flashcards: [
        ['Narodowość', 'Poczucie przynależności do narodu – wspólnoty kultury, języka i historii'],
        ['Obywatelstwo', 'Więź prawna z państwem, która daje prawa i nakłada obowiązki'],
        ['Nabycie obywatelstwa przez urodzenie', 'Gdy co najmniej jedno z rodziców jest obywatelem polskim'],
        ['Kto nadaje obywatelstwo polskie cudzoziemcowi?', 'Prezydent RP'],
        ['Konstytucyjne obowiązki obywatela', 'Wierność RP i troska o dobro wspólne, przestrzeganie prawa, podatki, obrona Ojczyzny, dbałość o środowisko'],
        ['Godło RP', 'Orzeł biały ze złotą koroną w czerwonym polu tarczy'],
        ['Barwy RP', 'Biały (górny pas) i czerwony (dolny)'],
        ['Dzień Flagi RP', '2 maja'],
        ['Mniejszości etniczne w Polsce', 'Karaimska, łemkowska, romska, tatarska'],
        ['Język regionalny w Polsce', 'Kaszubski'],
        ['Różnica: mniejszość narodowa a etniczna', 'Narodowa utożsamia się z narodem mającym własne państwo, etniczna – nie'],
        ['Szowinizm', 'Przekonanie o wyższości własnego narodu nad innymi'],
      ],
      questions: [
        { id: '8zv729', q: 'Czym jest obywatelstwo?', options: ['poczuciem przynależności do narodu i jego kultury', 'więzią prawną z państwem, dającą prawa i obowiązki', 'miejscem urodzenia wpisanym do aktu urodzenia', 'wyznawaną religią i przynależnością do Kościoła'], answer: 1, explain: 'Obywatelstwo to więź prawna. Narodowość to poczucie wspólnoty kulturowej.' },
        { id: '23a6f4', q: 'Dziecko urodziło się w Niemczech. Jego mama jest obywatelką Polski, a tata – Niemiec. Czy dziecko nabywa obywatelstwo polskie przez urodzenie?', options: ['nie, bo urodziło się na terytorium Niemiec, a nie Polski', 'tak, bo co najmniej jedno z rodziców jest obywatelem polskim', 'tak, ale tylko jeśli zamieszka w Polsce przed 18. urodzinami', 'tak, ale dopiero po decyzji Prezydenta o nadaniu obywatelstwa'], answer: 1, explain: 'Art. 14 ustawy o obywatelstwie polskim: wystarczy, że co najmniej jedno z rodziców jest obywatelem polskim.' },
        { id: '5catrp', q: 'Kto według Konstytucji nadaje obywatelstwo polskie?', options: ['Prezydent RP', 'Sejm', 'wojewoda', 'Rzecznik Praw Obywatelskich'], answer: 0, explain: 'Art. 137 Konstytucji: Prezydent nadaje obywatelstwo polskie.' },
        { id: 'hctm80', q: 'Który obowiązek jest konstytucyjnym obowiązkiem obywatela polskiego?', options: ['należenie do partii', 'obrona Ojczyzny', 'posiadanie samochodu', 'udział w każdej demonstracji'], answer: 1, explain: 'Art. 85 Konstytucji: obowiązkiem obywatela jest obrona Ojczyzny.' },
        { id: 'j8wm25', q: 'Jak według ustawy wygląda flaga państwowa RP w układzie poziomym?', options: ['czerwony pas u góry, biały u dołu', 'biały pas u góry, czerwony u dołu', 'pasy pionowe: czerwony z lewej', 'biały orzeł na czerwonym tle'], answer: 1, explain: 'Art. 4 ustawy o godle, barwach i hymnie: górny pas biały, dolny czerwony.' },
        { id: 'bvzxhe', q: 'Jakiego dnia obchodzimy Dzień Flagi Rzeczypospolitej Polskiej?', options: ['3 maja', '11 listopada', '2 maja', '1 sierpnia'], answer: 2, explain: 'Art. 6a ustawy o godle, barwach i hymnie: 2 maja.' },
        { id: 'hxotxi', q: 'Która mniejszość jest mniejszością etniczną?', options: ['niemiecka', 'ukraińska', 'litewska', 'romska'], answer: 3, explain: 'Etniczne: karaimska, łemkowska, romska, tatarska – nie utożsamiają się z narodem mającym własne państwo.' },
        { id: '5udo1r', q: 'Który język jest w Polsce ustawowo językiem regionalnym?', options: ['kaszubski', 'śląski', 'góralski', 'kurpiowski'], answer: 0, explain: 'Art. 19 ustawy o mniejszościach: językiem regionalnym jest język kaszubski.' },
        { id: '6wona6', q: 'Gdzie zwarcie mieszka mniejszość niemiecka?', options: ['na Podlasiu, koło Białegostoku', 'na Śląsku Opolskim', 'na Kaszubach', 'na Podhalu, koło Zakopanego'], answer: 1, explain: 'Najliczniejsze skupiska mniejszości niemieckiej są na Śląsku Opolskim (woj. opolskie).' },
        { id: 'rdukiw', q: 'Co gwarantuje mniejszościom art. 35 Konstytucji?', options: ['zwolnienie z podatków i opłat na rzecz państwa', 'prawo do własnego wojska i policji na swoim terenie', 'wolność zachowania i rozwoju języka, obyczajów i kultury', 'osobny parlament i odrębne prawo dla swoich członków'], answer: 2, explain: 'Mniejszości mogą też tworzyć własne instytucje edukacyjne, kulturalne i religijne.' },
        { id: 'ga6rzh', q: 'Kim jest uchodźca?', options: ['osobą, która wyjechała za granicę na studia', 'turystą przebywającym w Polsce', 'osobą szukającą ochrony przed prześladowaniem lub wojną', 'każdym cudzoziemcem pracującym w Polsce'], answer: 2, explain: 'Uchodźca ucieka przed zagrożeniem; migrant zmienia kraj z różnych powodów.' },
        { id: 'e6gqhq', q: 'Które zjawisko to antysemityzm?', options: ['wrogość wobec Żydów', 'niechęć wobec wszystkich sąsiadów', 'przekonanie o wyższości własnego narodu', 'miłość do ojczyzny'], answer: 0, explain: 'Antysemityzm to uprzedzenia i wrogość wobec Żydów – odmiana ksenofobii.' },
        { id: 'kh56mo', q: 'Prawda czy fałsz?\nMożna być jednocześnie Kaszubą, Polakiem i Europejczykiem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tożsamość regionalna, narodowa, państwowa i europejska nie wykluczają się.' },
      ],
    },
    {
      id: 'spoleczenstwo-obywatelskie',
      name: 'Społeczeństwo obywatelskie',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. IX „Udział obywateli w życiu publicznym – społeczeństwo obywatelskie”, wym. 1–5 (cnoty obywatelskie, organizacje pozarządowe, organizacje młodzieżowe i wolontariat, wpływ na władze samorządowe, budżet obywatelski, młodzieżowa rada gminy, etyka w życiu publicznym). Ustawa o działalności pożytku publicznego i o wolontariacie (tekst jedn. Dz.U. 2025 poz. 1338) art. 2–3, 27, 42–44; Prawo o stowarzyszeniach (tekst jedn. Dz.U. 2020 poz. 2261) art. 2, 3, 9; ustawa o fundacjach (tekst jedn. Dz.U. 2023 poz. 166) art. 1, 3; ustawa o samorządzie gminnym art. 5a, 5b, 28aa; Konstytucja RP art. 12, 63. Przykłady osób i organizacji – zpe.gov.pl (wątek LP10nQC1Vf, moduł „Społeczeństwo obywatelskie”).',
      theory: `
        <h3>Cnoty obywatelskie</h3>
        <p>Podstawa wymienia m.in.: <b>odpowiedzialność</b>, <b>troskę o dobro wspólne</b>, <b>aktywność</b>, <b>przedsiębiorczość</b>, <b>solidarność</b>, <b>roztropność</b>, <b>tolerancję</b>, <b>odwagę cywilną</b>. Przykłady Polaków, którzy je urzeczywistniali: Janina Ochojska – założycielka <b>Polskiej Akcji Humanitarnej</b> (1993 r.), Jerzy Owsiak – twórca <b>Wielkiej Orkiestry Świątecznej Pomocy</b>, Jacek Kuroń – współzałożyciel Komitetu Obrony Robotników.</p>
        <h3>Organizacje pozarządowe (NGO, trzeci sektor)</h3>
        <p>Nie są częścią administracji publicznej i <b>nie działają dla zysku</b> (ustawa o działalności pożytku publicznego, art. 3). Najczęstsze formy:</p>
        <table>
          <tr><th>Stowarzyszenie</th><th>Fundacja</th></tr>
          <tr><td>dobrowolne, samorządne, trwałe zrzeszenie ludzi o celach niezarobkowych; zakłada je co najmniej <b>7 osób</b></td><td>tworzy ją <b>fundator</b>, który przeznacza <b>majątek</b> na społecznie lub gospodarczo użyteczny cel</td></tr>
        </table>
        <p>Działają lokalnie: kluby sportowe, koła gospodyń, ochotnicza straż pożarna, stowarzyszenia miłośników okolicy, schroniska, banki żywności. Organizacjom pożytku publicznego można przekazać <b>1,5% podatku</b>. <b>Małoletni</b>: od 16 lat możesz należeć do stowarzyszenia z prawem głosu, poniżej 16 lat – za zgodą rodziców, bez prawa głosu w wyborach władz.</p>
        <h3>Wolontariat</h3>
        <p><b>Wolontariusz</b> to osoba, która <b>ochotniczo i bez wynagrodzenia</b> wykonuje świadczenia (np. dla organizacji pozarządowych, szkół, szpitali). Przy pracy dłuższej niż 30 dni porozumienie zawiera się na piśmie; wolontariusz może dostać zaświadczenie. W szkole wolontariat prowadzi samorząd uczniowski.</p>
        <h3>Jak wpływać na władze samorządowe</h3>
        <ul>
          <li><b>wybory</b> i <b>referendum lokalne</b>,</li>
          <li><b>konsultacje społeczne</b> – gmina pyta mieszkańców o zdanie,</li>
          <li><b>budżet obywatelski</b> – mieszkańcy w bezpośrednim głosowaniu co roku decydują o części wydatków gminy (np. plac zabaw, ścieżka rowerowa); w miastach na prawach powiatu jest obowiązkowy i wynosi co najmniej <b>0,5% wydatków</b> gminy,</li>
          <li><b>petycje</b>, wnioski i skargi (Konstytucja, art. 63), udział w sesji rady, zabranie głosu w debacie nad raportem o stanie gminy,</li>
          <li><b>młodzieżowa rada gminy</b> – ma charakter <b>konsultacyjny, doradczy i inicjatywny</b>; tworzy ją rada gminy (wniosek może złożyć np. samorząd uczniowski); opiniuje uchwały dotyczące młodzieży, a wójt musi odpowiedzieć na jej pytania na piśmie w ciągu 30 dni.</li>
        </ul>
        <h3>Etyka w życiu publicznym</h3>
        <p>Osoby publiczne powinny być uczciwe, bezstronne i jawnie działać. Łamanie zasad to np. <b>korupcja</b> (łapówki), <b>nepotyzm</b> (zatrudnianie krewnych), kłamstwo, wykorzystywanie stanowiska dla siebie. Skutki: utrata zaufania obywateli, marnowanie publicznych pieniędzy, odpowiedzialność karna.</p>
        <div class="tip">💡 Stowarzyszenie = <b>ludzie</b> (min. 7), fundacja = <b>majątek</b> na cel. Wolontariat = <b>dobrowolnie i za darmo</b>.</div>`,
      infographicNote: 'Porównuj w poziomie: stowarzyszenie to ludzie, fundacja to majątek; na dole – jak wpływasz na gminę.',
      infographic: {
        type: 'porownanie',
        top: { title: '🤝 Organizacje pozarządowe', text: 'poza administracją publiczną, nie działają dla zysku', kolor: 4 },
        kolumny: [{ title: 'Stowarzyszenie', kolor: 1 }, { title: 'Fundacja', kolor: 5 }],
        wiersze: [
          { label: 'Podstawa', cells: ['ludzie', 'majątek'], bold: true },
          { label: 'Kto zakłada?', cells: ['co najmniej 7 osób', 'fundator'] },
          { label: 'Cel', cells: ['niezarobkowy', 'społecznie lub gospodarczo użyteczny'] },
        ],
        bottom: { title: '🏛️ Jak wpływasz na gminę?', items: ['wybory i referendum lokalne', 'konsultacje społeczne', 'budżet obywatelski', 'petycje, wnioski i skargi', 'młodzieżowa rada gminy'], kolor: 3 },
      },
      flashcards: [
        ['Cnoty obywatelskie – przykłady', 'Odpowiedzialność, troska o dobro wspólne, solidarność, tolerancja, odwaga cywilna'],
        ['Odwaga cywilna', 'Gotowość do sprzeciwu wobec zła, nawet gdy grozi to nieprzyjemnościami'],
        ['Organizacja pozarządowa', 'Organizacja obywateli spoza administracji publicznej, niedziałająca dla zysku'],
        ['Stowarzyszenie', 'Dobrowolne, samorządne, trwałe zrzeszenie o celach niezarobkowych; min. 7 założycieli'],
        ['Fundacja', 'Majątek przeznaczony przez fundatora na społecznie lub gospodarczo użyteczny cel'],
        ['Wolontariusz', 'Osoba wykonująca świadczenia ochotniczo i bez wynagrodzenia'],
        ['1,5% podatku', 'Część podatku, którą można przekazać organizacji pożytku publicznego'],
        ['Budżet obywatelski', 'Mieszkańcy w bezpośrednim głosowaniu decydują co roku o części wydatków gminy'],
        ['Budżet obywatelski w mieście na prawach powiatu', 'Obowiązkowy, co najmniej 0,5% wydatków gminy'],
        ['Młodzieżowa rada gminy', 'Ciało konsultacyjne, doradcze i inicjatywne; tworzy ją rada gminy'],
        ['Korupcja', 'Przyjmowanie lub dawanie korzyści (np. łapówki) w zamian za decyzję'],
        ['Polska Akcja Humanitarna', 'Organizacja pomocy humanitarnej założona przez Janinę Ochojską w 1993 r.'],
      ],
      questions: [
        { id: '1iik4k', q: 'Która cecha jest cnotą obywatelską wymienioną w podstawie programowej?', options: ['obojętność', 'solidarność', 'chciwość', 'bierność'], answer: 1, explain: 'Podstawa wymienia m.in. solidarność, odpowiedzialność, troskę o dobro wspólne, tolerancję, odwagę cywilną.' },
        { id: 'vkkvr7', q: 'Uczeń staje w obronie wyśmiewanego kolegi, choć wie, że sam może stać się celem docinków. Jaką cnotę pokazuje?', options: ['przedsiębiorczość', 'roztropność', 'odwagę cywilną', 'oszczędność'], answer: 2, explain: 'Odwaga cywilna to sprzeciw wobec zła mimo ryzyka.' },
        { id: 'su3khq', q: 'Kto założył Polską Akcję Humanitarną?', options: ['Janina Ochojska', 'Jerzy Owsiak', 'Irena Sendlerowa', 'Wisława Szymborska'], answer: 0, explain: 'PAH założyła Janina Ochojska w 1993 r.' },
        { id: 'm10oy1', q: 'Co wyróżnia organizację pozarządową?', options: ['jest częścią administracji rządowej i podlega ministrowi', 'działa przede wszystkim dla zysku swoich właścicieli', 'nie należy do administracji publicznej i nie działa dla zysku', 'należy do niej z urzędu każdy pełnoletni obywatel'], answer: 2, explain: 'Tak definiuje ją art. 3 ustawy o działalności pożytku publicznego i o wolontariacie.' },
        { id: 'k17n0i', q: 'Ile co najmniej osób musi założyć stowarzyszenie?', options: ['7', '3', '15', '100'], answer: 0, explain: 'Prawo o stowarzyszeniach, art. 9: co najmniej siedem osób uchwala statut i wybiera władze.' },
        { id: 'uw3909', q: 'Czym fundacja różni się od stowarzyszenia?', options: ['fundacja musi przynosić zysk, a stowarzyszenie – nie', 'podstawą fundacji jest majątek, a stowarzyszenia – członkowie', 'fundację zakłada rząd, a stowarzyszenie – samorząd', 'stowarzyszenie nie może mieć statutu, a fundacja musi'], answer: 1, explain: 'Fundator wskazuje cel i majątek; stowarzyszenie to zrzeszenie członków.' },
        { id: 'oi3to9', q: 'Masz 14 lat. Czy możesz należeć do stowarzyszenia?', options: ['nie, do stowarzyszeń można wstępować dopiero od 18 lat', 'tak, za zgodą rodziców, ale bez prawa głosu w wyborach władz', 'tak, bez zgody rodziców i z pełnią praw, także w zarządzie', 'nie, w tym wieku można należeć tylko do partii politycznej'], answer: 1, explain: 'Prawo o stowarzyszeniach, art. 3 ust. 3: poniżej 16 lat – za zgodą przedstawicieli ustawowych, bez prawa głosowania na walnych zebraniach.' },
        { id: '1wbbkq', q: 'Kim jest wolontariusz według ustawy?', options: ['pracownikiem zatrudnionym w organizacji na umowie o pracę', 'osobą wykonującą świadczenia ochotniczo i bez wynagrodzenia', 'radnym gminy wybranym w wyborach samorządowych', 'każdym członkiem partii politycznej lub związku zawodowego'], answer: 1, explain: 'Art. 2 pkt 3 ustawy o działalności pożytku publicznego i o wolontariacie.' },
        { id: '9xtmre', q: 'Na czym polega budżet obywatelski?', options: ['mieszkańcy w głosowaniu decydują o części wydatków gminy', 'radni dzielą pieniądze z budżetu gminy między siebie', 'państwo co roku zwraca obywatelom część zapłaconych podatków', 'wójt sam wybiera inwestycje, nie pytając mieszkańców o zdanie'], answer: 0, explain: 'Art. 5a ustawy o samorządzie gminnym: to szczególna forma konsultacji społecznych.' },
        { id: '16cqte', q: 'Jaki charakter ma młodzieżowa rada gminy?', options: ['stanowiący – uchwala budżet gminy', 'konsultacyjny, doradczy i inicjatywny', 'sądowniczy', 'wykonawczy – zastępuje wójta'], answer: 1, explain: 'Art. 5b ust. 5 ustawy o samorządzie gminnym.' },
        { id: 'cn6sbf', q: 'Młodzieżowa rada gminy skierowała do wójta pytanie w formie uchwały. W jakim terminie wójt musi odpowiedzieć na piśmie?', options: ['7 dni', '14 dni', '30 dni', '1 roku'], answer: 2, explain: 'Art. 5b ust. 7: nie później niż w terminie 30 dni od otrzymania uchwały.' },
        { id: 'zaqmkh', q: 'Burmistrz zatrudnił w urzędzie swoich krewnych zamiast najlepszych kandydatów. Jak nazywa się to zjawisko?', options: ['wolontariat', 'nepotyzm', 'konsultacje społeczne', 'subsydiarność'], answer: 1, explain: 'Nepotyzm – faworyzowanie krewnych przy obsadzaniu stanowisk – łamie zasady etyki publicznej.' },
        { id: 'hy6yrz', q: 'Prawda czy fałsz?\nW miastach na prawach powiatu utworzenie budżetu obywatelskiego jest obowiązkowe.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Musi on wynosić co najmniej 0,5% wydatków gminy (art. 5a ust. 5 ustawy o samorządzie gminnym).' },
      ],
      tasks: [
        {
          id: '2928mq',
          points: 2,
          q: 'Miasto na prawach powiatu w ostatnim sprawozdaniu z wykonania budżetu wykazało wydatki 840 mln zł.\na) Oblicz, ile co najmniej musi wynosić budżet obywatelski tego miasta.\nb) Na osiedlu mieszka 12 000 osób. Rada miasta może wymagać, by projekt poparli mieszkańcy, ale nie więcej niż 0,1% mieszkańców terenu, którego dotyczy pula. Ile co najwyżej podpisów rada może wymagać pod projektem z tego osiedla?',
          steps: [
            'a) Budżet obywatelski w mieście na prawach powiatu to co najmniej 0,5% wydatków: 0,005 · 840 000 000 zł = 4 200 000 zł (4,2 mln zł).',
            'Sprawdzenie: 1% z 840 mln to 8,4 mln, a połowa tego to 4,2 mln zł.',
            'b) 0,1% z 12 000 = 0,001 · 12 000 = 12 podpisów.',
          ],
          answer: 'a) co najmniej 4,2 mln zł; b) najwyżej 12 podpisów',
          scoring: [
            '1 pkt – poprawne obliczenie 0,5% wydatków: 4,2 mln zł.',
            '1 pkt – poprawne obliczenie 0,1% mieszkańców: 12 podpisów.',
          ],
        },
      ],
    },
    {
      id: 'media',
      name: 'Media i opinia publiczna',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. X „Środki masowego przekazu”, wym. 1–4 (funkcje i rodzaje mediów, wolność słowa, fakty i opinie, rzetelność dziennikarzy, kampanie społeczne, opinia publiczna i jej badania). Konstytucja RP art. 14, 54, 213; Prawo prasowe (tekst jedn. Dz.U. 2018 poz. 1914) art. 12. Funkcje mediów, kampanie społeczne, opinia publiczna – zpe.gov.pl (wątek LP10nQC1Vf, moduł „Środki masowego przekazu i znaczenie opinii społecznej”).',
      theory: `
        <h3>Rodzaje i funkcje mediów</h3>
        <p>Środki masowego przekazu: <b>prasa</b>, <b>radio</b>, <b>telewizja</b>, <b>internet</b> (portale, media społecznościowe, podcasty).</p>
        <table>
          <tr><th>Funkcja</th><th>Na czym polega</th></tr>
          <tr><td><b>informacyjna</b></td><td>przekazuje wiadomości o wydarzeniach</td></tr>
          <tr><td><b>opiniotwórcza</b></td><td>kształtuje poglądy i postawy odbiorców</td></tr>
          <tr><td><b>kontrolna</b></td><td>patrzy władzy na ręce, ujawnia nadużycia – stąd określenie „czwarta władza”</td></tr>
          <tr><td><b>edukacyjno-kulturalna</b></td><td>uczy, promuje kulturę</td></tr>
          <tr><td><b>rozrywkowa</b></td><td>seriale, teleturnieje, muzyka</td></tr>
        </table>
        <h3>Wolność słowa</h3>
        <p>Konstytucja zapewnia <b>wolność prasy</b> (art. 14) i <b>wolność wyrażania poglądów</b> oraz pozyskiwania i rozpowszechniania informacji (art. 54). <b>Cenzura prewencyjna jest zakazana</b>. Na straży wolności słowa w radiu i telewizji stoi <b>Krajowa Rada Radiofonii i Telewizji</b> (art. 213). Bez wolnych mediów obywatele nie wiedzieliby, co robi władza.</p>
        <h3>Fakt czy opinia?</h3>
        <table>
          <tr><th>Fakt</th><th>Opinia</th></tr>
          <tr><td>da się sprawdzić; konkret: kto, co, kiedy, gdzie, ile</td><td>czyjś pogląd, ocena; słowa wartościujące: „najlepszy”, „skandaliczny”, „moim zdaniem”</td></tr>
          <tr><td>„Rada miasta przyjęła budżet 12 głosami”</td><td>„Rada przyjęła fatalny budżet”</td></tr>
        </table>
        <p><b>Rzetelny dziennikarz</b> (Prawo prasowe, art. 12) zachowuje szczególną staranność: <b>sprawdza</b>, czy informacja jest prawdziwa, albo <b>podaje jej źródło</b>; oddziela informację od komentarza, wysłuchuje obu stron, chroni dobra osobiste. Ty też weryfikuj: sprawdź źródło, datę, poszukaj tej informacji w kilku niezależnych mediach.</p>
        <h3>Kampania społeczna</h3>
        <p>Ma <b>zmienić wiedzę, postawy lub zachowania</b> wobec ważnego problemu (np. bezpieczeństwo na drodze, hejt, zdrowie, ekologia). Różnica: <b>reklama</b> ma sprzedać produkt (zysk), kampania społeczna – przynieść korzyść społeczeństwu. Analizując kampanię, pytaj: kto jest nadawcą, do kogo mówi, jaki ma cel, jakich środków używa (hasło, obraz, emocje, znana osoba).</p>
        <h3>Opinia publiczna</h3>
        <p>To poglądy dużej części społeczeństwa na ważne sprawy. Politycy, firmy i organizacje biorą ją pod uwagę. Bada się ją w <b>sondażach</b> na <b>reprezentatywnej próbie</b> (np. CBOS – Centrum Badania Opinii Społecznej). Czytając wyniki, sprawdź: kto badał, kiedy, na ilu osobach, jak brzmiało pytanie; patrz na procenty i zmiany w czasie.</p>
        <div class="tip">💡 Fakt – <b>sprawdzisz</b>, opinia – <b>ocenisz</b>. Kampania społeczna zmienia zachowania, reklama – sprzedaje.</div>`,
      infographicNote: 'Porównuj w poziomie: fakt sprawdzisz, opinię ocenisz – a rzetelny dziennikarz je oddziela.',
      infographic: {
        type: 'porownanie',
        top: { title: '📰 Media – „czwarta władza”', text: 'patrzą władzy na ręce; wolność prasy, cenzura prewencyjna zakazana', kolor: 4 },
        kolumny: [{ title: 'Fakt', kolor: 3 }, { title: 'Opinia', kolor: 2 }],
        wiersze: [
          { label: 'W skrócie', cells: ['sprawdzisz', 'ocenisz'], bold: true },
          { label: 'Rozpoznasz po', cells: ['konkret: kto, co, kiedy, gdzie, ile', 'słowa wartościujące: „najlepszy”, „moim\u00a0zdaniem”'] },
          { label: 'Przykład', cells: ['„Rada miasta przyjęła budżet 12 głosami”', '„Rada przyjęła fatalny budżet”'] },
        ],
        bottom: { title: '✍️ Rzetelny dziennikarz', items: ['sprawdza informację albo podaje źródło', 'oddziela informację od komentarza', 'wysłuchuje obu stron'], kolor: 1 },
      },
      flashcards: [
        ['Środki masowego przekazu', 'Prasa, radio, telewizja, internet'],
        ['Funkcja kontrolna mediów', 'Patrzenie władzy na ręce, ujawnianie nadużyć'],
        ['„Czwarta władza”', 'Potoczne określenie mediów kontrolujących władzę'],
        ['Funkcja opiniotwórcza mediów', 'Kształtowanie poglądów i postaw odbiorców'],
        ['Cenzura prewencyjna', 'Kontrola treści przed publikacją – zakazana (art. 54 Konstytucji)'],
        ['KRRiT', 'Krajowa Rada Radiofonii i Telewizji – stoi na straży wolności słowa w radiu i telewizji'],
        ['Fakt', 'Informacja, którą da się sprawdzić'],
        ['Opinia', 'Czyjś pogląd lub ocena, często ze słowami wartościującymi'],
        ['Obowiązek dziennikarza (Prawo prasowe, art. 12)', 'Szczególna staranność i rzetelność: sprawdzić prawdziwość informacji lub podać źródło'],
        ['Kampania społeczna', 'Działania mające zmienić wiedzę, postawy lub zachowania wobec problemu społecznego'],
        ['Opinia publiczna', 'Poglądy dużej części społeczeństwa na ważne sprawy'],
        ['Próba reprezentatywna', 'Grupa badanych, która odzwierciedla strukturę całego społeczeństwa'],
      ],
      questions: [
        { id: '01b09v', q: 'Dziennikarze ujawnili, że urzędnik przyznawał zlecenia firmie swojego brata. Którą funkcję pełnią media?', options: ['rozrywkową', 'kontrolną', 'reklamową', 'edukacyjną'], answer: 1, explain: 'Ujawnianie nadużyć władzy to funkcja kontrolna – stąd „czwarta władza”.' },
        { id: 'f283a4', q: 'Które zdanie jest faktem?', options: ['„To najgorszy mecz w historii.”', '„Polska wygrała mecz 2:1.”', '„Trener powinien odejść.”', '„Kibice mieli fatalny wieczór.”'], answer: 1, explain: 'Wynik meczu da się sprawdzić. Pozostałe zdania to oceny.' },
        { id: 'iz19qc', q: 'Po czym najłatwiej rozpoznać opinię?', options: ['po liczbach, datach i danych statystycznych', 'po słowach wartościujących i ocenach', 'po nazwach miast i nazwiskach osób', 'po cytatach z ustaw i dokumentów'], answer: 1, explain: 'Opinie zawierają oceny: „świetny”, „skandaliczny”, „moim zdaniem”.' },
        { id: '6gnurl', q: 'Co według art. 12 Prawa prasowego musi zrobić dziennikarz z uzyskaną wiadomością?', options: ['opublikować ją jak najszybciej, zanim zrobi to konkurencja', 'sprawdzić jej zgodność z prawdą lub podać jej źródło', 'uzyskać zgodę ministra na jej publikację', 'dodać do niej swój komentarz i ocenę'], answer: 1, explain: 'Dziennikarz ma zachować szczególną staranność i rzetelność.' },
        { id: 'ku8o7k', q: 'Który przepis Konstytucji zakazuje cenzury prewencyjnej środków społecznego przekazu?', options: ['art. 54', 'art. 30', 'art. 96', 'art. 127'], answer: 0, explain: 'Art. 54 ust. 2: cenzura prewencyjna i koncesjonowanie prasy są zakazane.' },
        { id: 'couqhc', q: 'Który organ stoi na straży wolności słowa w radiu i telewizji?', options: ['Urząd Ochrony Konkurencji i Konsumentów', 'Najwyższa Izba Kontroli', 'Krajowa Rada Radiofonii i Telewizji', 'Trybunał Stanu'], answer: 2, explain: 'Art. 213 Konstytucji.' },
        { id: 'dbptzz', q: 'Czym kampania społeczna różni się od reklamy?', options: ['kampania nie może używać obrazów ani filmów, a reklama – może', 'kampania ma zmienić postawy, a reklama – sprzedać produkt', 'reklama jest darmowa, a kampania – płatna', 'kampanię prowadzą szkoły, a reklamę – firmy'], answer: 1, explain: 'Cel kampanii społecznej to korzyść społeczna, a nie zysk.' },
        { id: 't69eou', q: 'Który z przykładów to kampania społeczna?', options: ['spot zachęcający do zapinania pasów w samochodzie', 'plakat zachęcający do kupna nowego smartfona', 'promocja „2 w cenie 1” w osiedlowym sklepie', 'zwiastun filmu, który wchodzi do kin'], answer: 0, explain: 'Spot o pasach ma zmienić zachowanie i chronić życie – to kampania społeczna.' },
        { id: 'ib6uoq', q: 'Dlaczego sondaż przeprowadza się na próbie reprezentatywnej?', options: ['żeby wynik zgadzał się z oczekiwaniami zamawiającego', 'żeby wyniki dało się odnieść do całego społeczeństwa', 'żeby pytać tylko znajomych i rodzinę ankietera', 'bo prawo zakazuje pytania więcej niż 10 osób naraz'], answer: 1, explain: 'Próba reprezentatywna odzwierciedla strukturę społeczeństwa (wiek, płeć, miejsce zamieszkania).' },
        { id: '4f9j6k', q: 'W sondażu 1000 osób 35% odpowiedziało „tak”. Ilu to badanych?', options: ['35', '135', '350', '650'], answer: 2, explain: '35% z 1000 = 0,35 · 1000 = 350 osób.' },
        { id: 'eu0153', q: 'Widzisz w sieci szokującą „informację” bez podanego źródła. Co zrobić?', options: ['od razu udostępnić ją znajomym, żeby ich ostrzec', 'sprawdzić ją w kilku niezależnych, wiarygodnych źródłach', 'uwierzyć w nią, bo ma dużo polubień i udostępnień', 'napisać w komentarzu, że to prawda, i oznaczyć znajomych'], answer: 1, explain: 'Liczba polubień nie świadczy o prawdzie. Weryfikacja chroni przed fałszywymi informacjami.' },
        { id: 'nv85im', q: 'Prawda czy fałsz?\nKonstytucja RP zapewnia wolność prasy i innych środków społecznego przekazu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tak stanowi art. 14 Konstytucji.' },
      ],
      tasks: [
        {
          id: 'z8war1',
          points: 2,
          q: 'Przykładowe (wymyślone) wyniki sondażu na próbie 1000 osób. Pytanie: „Czy ufasz informacjom z mediów społecznościowych?” Odpowiedzi: zdecydowanie tak – 6%, raczej tak – 24%, raczej nie – 41%, zdecydowanie nie – 19%, trudno powiedzieć – 10%.\na) Jaki odsetek badanych ufa informacjom z mediów społecznościowych, a jaki im nie ufa? Ilu to badanych z 1000?\nb) Sformułuj jedno zdanie-fakt i jedno zdanie-opinię o tych wynikach.',
          steps: [
            'Sprawdzenie sumy: 6 + 24 + 41 + 19 + 10 = 100%.',
            'Ufa: 6% + 24% = 30%, czyli 0,30 · 1000 = 300 osób.',
            'Nie ufa: 41% + 19% = 60%, czyli 0,60 · 1000 = 600 osób.',
            'b) Fakt (da się sprawdzić w wynikach): „W badaniu 60% osób nie ufa informacjom z mediów społecznościowych.” Opinia (ocena): „To dobrze, że ludzie są ostrożni wobec mediów społecznościowych.”',
          ],
          answer: 'Ufa 30% (300 osób), nie ufa 60% (600 osób); fakt – zdanie oparte na liczbach z badania, opinia – zdanie oceniające',
          scoring: [
            '1 pkt – poprawne odsetki i liczby osób (30% – 300, 60% – 600).',
            '1 pkt – poprawnie sformułowany fakt i opinia.',
          ],
        },
      ],
    },
    {
      id: 'sejm-senat',
      name: 'Państwo, referendum, Sejm i Senat',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. XI „Demokracja w Rzeczypospolitej Polskiej”, wym. 1–4 (cechy i funkcje państwa, suwerenność narodu i referendum, zasada przedstawicielstwa, wybory do Sejmu i Senatu, kompetencje izb, pluralizm i partie polityczne). Konstytucja RP art. 4, 11, 13, 90, 95–125, 235; Kodeks wyborczy (tekst jedn. Dz.U. 2026 poz. 1261) art. 10, 11, 192, 193, 196, 197, 201, 255, 256, 260, 273 i zał. nr 1 (41 okręgów do Sejmu); ustawa o referendum ogólnokrajowym (tekst jedn. Dz.U. 2025 poz. 300) art. 3, 63; ustawa o partiach politycznych (tekst jedn. Dz.U. 2023 poz. 1215) art. 1–2. Cechy i funkcje państwa, referendum akcesyjne 2003 – zpe.gov.pl (wątek LPXe7XhjcT).',
      theory: `
        <h3>Państwo</h3>
        <p>Cechy państwa: <b>terytorium</b> (ląd, wody, przestrzeń powietrzna), <b>ludność</b>, <b>suwerenna władza</b> – niezależna od innych państw, która może stanowić prawo i stosować <b>przymus</b>. Funkcje: <b>wewnętrzna</b> (porządek, bezpieczeństwo, prawo, gospodarka, edukacja, zdrowie) i <b>zewnętrzna</b> (obrona, polityka zagraniczna).</p>
        <h3>Suwerenność narodu</h3>
        <p>Konstytucja, art. 4: „<i>Władza zwierzchnia w Rzeczypospolitej Polskiej należy do Narodu</i>”, który sprawuje ją <b>przez przedstawicieli</b> (demokracja pośrednia – wybory) lub <b>bezpośrednio</b> (referendum, obywatelska inicjatywa ustawodawcza – 100 000 podpisów).</p>
        <h3>Referendum ogólnokrajowe</h3>
        <ul>
          <li>w <b>sprawach o szczególnym znaczeniu dla państwa</b> (art. 125), np. zgoda na ratyfikację umowy przekazującej organizacji międzynarodowej część kompetencji (art. 90) – tak było z wejściem Polski do UE (referendum 7–8 czerwca 2003 r.), albo zatwierdzenie zmiany Konstytucji (art. 235),</li>
          <li>zarządza je <b>Sejm</b> (bezwzględną większością) albo <b>Prezydent za zgodą Senatu</b>,</li>
          <li>wynik jest <b>wiążący</b>, gdy głosowała <b>więcej niż połowa</b> uprawnionych,</li>
          <li>obywatele mogą zebrać <b>500 000</b> podpisów pod wnioskiem – ale decyzję o referendum podejmuje Sejm; nie może ono dotyczyć podatków i wydatków, obronności ani amnestii.</li>
        </ul>
        <h3>Sejm i Senat – władza ustawodawcza</h3>
        <table>
          <tr><th></th><th>Sejm</th><th>Senat</th></tr>
          <tr><td>skład</td><td><b>460</b> posłów</td><td><b>100</b> senatorów</td></tr>
          <tr><td>wybory</td><td><b>powszechne, równe, bezpośrednie, proporcjonalne, tajne</b> („pięcioprzymiotnikowe”); 41 okręgów wielomandatowych; próg <b>5%</b> (koalicje – 8%), komitety mniejszości narodowych mogą być zwolnione z progu</td><td>powszechne, bezpośrednie, tajne; <b>zasada większości</b> – 100 okręgów jednomandatowych, wygrywa kandydat z największą liczbą głosów</td></tr>
          <tr><td>bierne prawo wyborcze</td><td>od <b>21 lat</b></td><td>od <b>30 lat</b></td></tr>
          <tr><td>kadencja</td><td colspan="2"><b>4 lata</b> (Sejm może ją skrócić większością 2/3)</td></tr>
        </table>
        <p><b>Kompetencje Sejmu</b>: <b>ustawodawcza</b> (uchwala ustawy w trzech czytaniach), <b>kontrolna</b> wobec rządu (wotum zaufania i nieufności, interpelacje, komisje śledcze), <b>kreacyjna</b> (wybiera np. sędziów TK, powołuje RPO i RPD). <b>Senat</b> w ciągu <b>30 dni</b> może przyjąć ustawę, wprowadzić poprawki albo ją odrzucić; Sejm może odrzucić stanowisko Senatu bezwzględną większością głosów. Inicjatywa ustawodawcza: posłowie, Senat, Prezydent, Rada Ministrów, <b>100 000 obywateli</b>. Sejm i Senat obradujące razem to <b>Zgromadzenie Narodowe</b>.</p>
        <h3>Pluralizm i partie</h3>
        <p><b>Pluralizm polityczny</b>: wolność tworzenia i działania partii (art. 11) – konkurują one w wyborach o głosy. <b>Partia</b> to dobrowolna organizacja, która chce metodami demokratycznymi wpływać na politykę państwa lub sprawować władzę; członkiem może być obywatel od <b>18 lat</b>; finansowanie partii jest <b>jawne</b>. Zakazane są partie odwołujące się do nazizmu, faszyzmu, komunizmu i nienawiści rasowej (art. 13). Partie, które razem rządzą, tworzą <b>koalicję</b>; pozostałe – <b>opozycję</b>. Aktualną listę klubów i kół poselskich znajdziesz na <b>sejm.gov.pl</b>, a działania partii – na ich stronach.</p>
        <div class="tip">💡 <b>460 / 100</b>, <b>21 / 30 lat</b>, kadencja <b>4 lata</b>. Sejm – proporcjonalnie, Senat – większościowo.</div>`,
      infographicNote: 'Porównuj w poziomie: Sejm i Senat to dwie izby władzy ustawodawczej – wybierane inaczej, z tą samą kadencją.',
      infographic: {
        type: 'porownanie',
        top: { title: '👥 Władza należy do Narodu (art. 4)', text: 'przez przedstawicieli (wybory) lub bezpośrednio (referendum)', kolor: 4 },
        kolumny: [{ title: 'Sejm', kolor: 1 }, { title: 'Senat', kolor: 5 }],
        wiersze: [
          { label: 'Skład', cells: ['460 posłów', '100 senatorów'], bold: true },
          { label: 'Wybory', cells: ['proporcjonalne, 41 okręgów, próg 5%', 'większościowe, 100 okręgów jednomandatowych'] },
          { label: 'Kandydat – od ilu lat?', cells: ['21 lat', '30 lat'], bold: true },
          { label: 'Kadencja', cells: ['4 lata', '4 lata'], bold: true },
          { label: 'Ustawy', cells: ['uchwala w trzech czytaniach', 'w 30 dni: przyjmuje, poprawia albo odrzuca'] },
        ],
        bottom: { title: '🗳️ Referendum ogólnokrajowe', items: ['zarządza Sejm albo Prezydent za zgodą Senatu', 'wiążące, gdy głosowała ponad połowa uprawnionych'], kolor: 2 },
      },
      flashcards: [
        ['Cechy państwa', 'Terytorium, ludność, suwerenna władza'],
        ['Art. 4 Konstytucji', 'Władza zwierzchnia należy do Narodu – sprawuje ją przez przedstawicieli lub bezpośrednio'],
        ['Demokracja pośrednia', 'Obywatele rządzą przez wybranych przedstawicieli'],
        ['Kiedy referendum ogólnokrajowe jest wiążące?', 'Gdy wzięła w nim udział więcej niż połowa uprawnionych'],
        ['Kto zarządza referendum ogólnokrajowe?', 'Sejm albo Prezydent za zgodą Senatu'],
        ['Skład Sejmu i Senatu', '460 posłów, 100 senatorów'],
        ['Przymiotniki wyborów do Sejmu', 'Powszechne, równe, bezpośrednie, proporcjonalne, tajne'],
        ['Próg wyborczy do Sejmu', '5% dla komitetów, 8% dla koalicji'],
        ['Bierne prawo wyborcze do Sejmu i Senatu', 'Sejm – 21 lat, Senat – 30 lat'],
        ['Kadencja Sejmu i Senatu', '4 lata'],
        ['Ile dni ma Senat na rozpatrzenie ustawy?', '30 dni'],
        ['Obywatelska inicjatywa ustawodawcza', '100 000 obywateli z prawem wybierania do Sejmu'],
        ['Pluralizm polityczny', 'Wolność tworzenia i działania wielu partii, które konkurują o władzę'],
      ],
      questions: [
        { id: 'd4iq5q', q: 'Który zestaw zawiera cechy państwa?', options: ['terytorium, ludność, suwerenna władza', 'hymn, flaga, godło i stolica', 'armia, policja, sądy i urzędy', 'wspólny język, religia i historia'], answer: 0, explain: 'Klasyczne cechy państwa to terytorium, ludność i suwerenna władza.' },
        { id: '3e920d', q: 'Do kogo według art. 4 Konstytucji należy władza zwierzchnia w RP?', options: ['do Prezydenta', 'do Sejmu', 'do Narodu', 'do Rady Ministrów'], answer: 2, explain: 'Zasada suwerenności narodu: władza zwierzchnia należy do Narodu.' },
        { id: 'xxsa9z', q: 'Który przykład to demokracja bezpośrednia?', options: ['uchwalenie ustawy przez Sejm', 'referendum', 'powołanie ministra', 'wybór marszałka Sejmu'], answer: 1, explain: 'W referendum obywatele sami rozstrzygają sprawę, bez pośrednictwa przedstawicieli.' },
        { id: '555zrw', q: 'Kiedy wynik referendum ogólnokrajowego jest wiążący?', options: ['zawsze, bez względu na liczbę głosujących', 'gdy wzięło w nim udział więcej niż połowa uprawnionych', 'gdy wzięło w nim udział 30% uprawnionych', 'gdy zatwierdzi go Senat bezwzględną większością głosów'], answer: 1, explain: 'Art. 125 ust. 3 Konstytucji.' },
        { id: 'kdwtlx', q: 'Ile podpisów muszą zebrać obywatele pod wnioskiem o referendum ogólnokrajowe?', options: ['100 000', '1 000 000', '50 000', '500 000'], answer: 3, explain: 'Ustawa o referendum ogólnokrajowym, art. 63: co najmniej 500 000 osób; decyzję podejmuje Sejm.' },
        { id: 'r46zy0', q: 'Z ilu posłów składa się Sejm RP?', options: ['100', '460', '560', '360'], answer: 1, explain: 'Art. 96 Konstytucji: Sejm składa się z 460 posłów.' },
        { id: 'en0mch', q: 'Który przymiotnik dotyczy wyborów do Sejmu, ale NIE wyborów do Senatu?', options: ['proporcjonalne', 'powszechne', 'bezpośrednie', 'tajne'], answer: 0, explain: 'Do Senatu wybiera się według zasady większości, a do Sejmu – proporcjonalnie.' },
        { id: '9v4nlj', q: 'Ile lat musi mieć najpóźniej w dniu wyborów kandydat na senatora?', options: ['18', '21', '30', '35'], answer: 2, explain: 'Art. 99 Konstytucji: do Senatu – 30 lat, do Sejmu – 21 lat.' },
        { id: 'h6deo5', q: 'Jaki próg wyborczy w skali kraju musi przekroczyć lista komitetu (niekoalicyjnego), by brać udział w podziale mandatów do Sejmu?', options: ['3%', '5%', '8%', '10%'], answer: 1, explain: 'Kodeks wyborczy, art. 196: 5% dla komitetów, 8% dla koalicyjnych.' },
        { id: 'i8kh96', q: 'Co może zrobić Senat z ustawą uchwaloną przez Sejm?', options: ['tylko ją podpisać, bez prawa do wprowadzania zmian', 'w ciągu 30 dni przyjąć ją, poprawić albo odrzucić', 'skierować ją od razu do ogólnokrajowego referendum', 'samodzielnie zmienić Konstytucję, żeby ustawa była z nią zgodna'], answer: 1, explain: 'Art. 121 Konstytucji; Sejm może odrzucić stanowisko Senatu bezwzględną większością.' },
        { id: 'sj3gfq', q: 'Komu NIE przysługuje inicjatywa ustawodawcza?', options: ['Prezydentowi', 'Radzie Ministrów', 'grupie 100 000 obywateli', 'Trybunałowi Konstytucyjnemu'], answer: 3, explain: 'Art. 118 Konstytucji: posłowie, Senat, Prezydent, Rada Ministrów i 100 000 obywateli.' },
        { id: 'zvxq0h', q: 'Na czym polega pluralizm polityczny?', options: ['na rządach jednej partii, która nie ma opozycji', 'na wolności działania wielu partii, które konkurują o władzę', 'na zakazie tworzenia i działania partii politycznych', 'na wyborze posłów przez prezydenta, a nie przez obywateli'], answer: 1, explain: 'Art. 11 Konstytucji zapewnia wolność tworzenia i działania partii politycznych.' },
        { id: 'j8zipm', q: 'Prawda czy fałsz?\nCzłonkiem partii politycznej może zostać obywatel polski, który ukończył 16 lat.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Ustawa o partiach politycznych (art. 2): członkami mogą być obywatele, którzy ukończyli 18 lat.' },
      ],
    },
    {
      id: 'wladza-wykonawcza-sady',
      name: 'Prezydent, rząd, sądy i Konstytucja',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. XI „Demokracja w Rzeczypospolitej Polskiej”, wym. 5–8 (republikańska forma rządu, wybór i kompetencje Prezydenta, państwo prawa, niezależność sądów i niezawisłość sędziów, dwuinstancyjność, konstytucjonalizm i cechy konstytucji, Trybunał Konstytucyjny, trójpodział władzy, Rada Ministrów i większość sejmowa, wpływ ministerstw na życie rodziny). Konstytucja RP art. 2, 7, 8, 10, 122, 126–162, 173–198, 235, 243; Kodeks wyborczy art. 11. Struktura sądów powszechnych – zpe.gov.pl (wątek LPXe7XhjcT, rozdz. „Władza sądownicza”); przykład ministerstwa – rozporządzenie Ministra Edukacji Dz.U. 2024 poz. 996.',
      theory: `
        <h3>Trójpodział władzy (art. 10)</h3>
        <table>
          <tr><th>Ustawodawcza</th><th>Wykonawcza</th><th>Sądownicza</th></tr>
          <tr><td>Sejm i Senat</td><td>Prezydent i Rada Ministrów</td><td>sądy i trybunały</td></tr>
        </table>
        <p>Władze się <b>równoważą</b> i kontrolują – żadna nie ma pełni władzy. <b>Państwo prawa</b>: organy władzy działają <b>na podstawie i w granicach prawa</b> (art. 7).</p>
        <h3>Prezydent RP</h3>
        <ul>
          <li><b>Republika</b> – głowę państwa wybiera się na kadencję, władza nie jest dziedziczna,</li>
          <li>wybory <b>powszechne, równe, bezpośrednie, tajne</b>; kadencja <b>5 lat</b>, można być wybranym <b>ponownie tylko raz</b>,</li>
          <li>kandydat: obywatel, który kończy <b>35 lat</b>, zgłoszony przez <b>100 000</b> wyborców; wygrywa ten, kto zdobędzie <b>ponad połowę</b> ważnych głosów – inaczej po 14 dniach druga tura dwóch kandydatów,</li>
          <li>kompetencje: najwyższy przedstawiciel państwa, <b>zwierzchnik Sił Zbrojnych</b>, ratyfikuje umowy międzynarodowe, <b>podpisuje ustawy</b> albo stosuje <b>weto</b> (Sejm może je odrzucić większością <b>3/5</b>) lub kieruje ustawę do TK, ma inicjatywę ustawodawczą, desygnuje premiera i powołuje rząd, powołuje sędziów, stosuje <b>prawo łaski</b>, nadaje obywatelstwo i ordery, zarządza wybory do parlamentu,</li>
          <li>gdy nie może sprawować urzędu – zastępuje go <b>Marszałek Sejmu</b>.</li>
        </ul>
        <h3>Rada Ministrów (rząd)</h3>
        <p>Skład: <b>Prezes Rady Ministrów</b> (premier) i <b>ministrowie</b> (mogą być wicepremierzy). Prowadzi <b>politykę wewnętrzną i zagraniczną</b>: wykonuje ustawy, wydaje rozporządzenia, przygotowuje <b>projekt budżetu</b>, dba o bezpieczeństwo. Rząd potrzebuje <b>poparcia większości w Sejmie</b>: po powołaniu premier w ciągu 14 dni prosi Sejm o <b>wotum zaufania</b> (bezwzględna większość). Sejm może odwołać rząd <b>konstruktywnym wotum nieufności</b> – wniosek co najmniej <b>46 posłów</b> musi wskazać nowego premiera i zostać przyjęty większością ustawowej liczby posłów. Decyzje ministerstw dotyczą twojej rodziny: np. <b>Minister Edukacji</b> wydał rozporządzenie o podstawie programowej (Dz.U. 2024 poz. 996) – to z niej wiesz, czego uczysz się na WOS.</p>
        <p>Kto jest dziś prezydentem i premierem, sprawdzisz na <b>prezydent.pl</b> i <b>premier.gov.pl</b> (gov.pl).</p>
        <h3>Sądy</h3>
        <ul>
          <li>wymiar sprawiedliwości: <b>Sąd Najwyższy</b>, sądy <b>powszechne</b> (rejonowe, okręgowe, apelacyjne), <b>administracyjne</b> (kontrolują urzędy), wojskowe,</li>
          <li>postępowanie jest <b>co najmniej dwuinstancyjne</b> (art. 176) – od wyroku możesz się odwołać do sądu wyższej instancji (np. z rejonowego do okręgowego),</li>
          <li>sądy są <b>niezależne</b> od innych władz (art. 173), a sędziowie <b>niezawiśli</b> – podlegają tylko Konstytucji i ustawom, nie mogą należeć do partii (art. 178); sędziów powołuje Prezydent na wniosek Krajowej Rady Sądownictwa, na czas nieoznaczony; są <b>nieusuwalni</b>.</li>
        </ul>
        <h3>Konstytucja i Trybunał Konstytucyjny</h3>
        <p><b>Konstytucjonalizm</b>: konstytucja jest <b>najwyższym prawem</b> (art. 8) – inne akty muszą być z nią zgodne. Konstytucję RP uchwaliło Zgromadzenie Narodowe <b>2 kwietnia 1997 r.</b>, a Naród przyjął ją w referendum 25 maja 1997 r. Szczególne cechy: najwyższa moc prawna, szczególny <b>tryb zmiany</b> (Sejm – większość 2/3 głosów, Senat – bezwzględna większość), szczególna treść (zasady ustroju, prawa i obowiązki), uroczysta nazwa i preambuła. Ma 13 rozdziałów.</p>
        <p><b>Trybunał Konstytucyjny</b>: <b>15 sędziów</b> wybieranych przez Sejm na <b>9 lat</b> (bez ponownego wyboru). Orzeka m.in. o <b>zgodności ustaw i umów międzynarodowych z Konstytucją</b>, rozpatruje <b>skargi konstytucyjne</b>, ocenia zgodność celów partii z Konstytucją, rozstrzyga spory kompetencyjne. Jego orzeczenia są <b>ostateczne</b>.</p>
        <div class="tip">💡 Prezydent: <b>35 lat, 5 lat, raz ponownie</b>. Weto odrzucasz <b>3/5</b>. TK: <b>15 sędziów na 9 lat</b>.</div>`,
      infographicNote: 'Czytaj od góry: trzy władze (niebieska, pomarańczowa, fioletowa) równoważą się i kontrolują nawzajem.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        top: { title: '⚖️ Państwo prawa (art. 7)', text: 'organy władzy działają na podstawie i w granicach prawa', kolor: 4 },
        root: { title: 'Trójpodział władzy (art. 10)', text: 'władze się równoważą i kontrolują', kolor: 4 },
        branches: [
          { title: '🏛️ Ustawodawcza: Sejm i Senat', items: ['Sejm odrzuca weto prezydenta większością 3/5', 'rząd potrzebuje poparcia większości w Sejmie'], kolor: 1 },
          { title: '👔 Wykonawcza: Prezydent i Rada Ministrów', items: ['Prezydent: 5 lat, ponownie tylko raz; podpisuje ustawy albo weto', 'Rada Ministrów: premier i ministrowie; wykonuje ustawy'], kolor: 2 },
          { title: '⚖️ Sądownicza: sądy i trybunały', items: ['sądy niezależne, sędziowie niezawiśli', 'co najmniej dwie instancje', 'TK: 15 sędziów na 9 lat; bada zgodność ustaw z Konstytucją'], kolor: 5 },
        ],
        bottom: { title: '📜 Konstytucja – najwyższe prawo', text: 'uchwalona 2 kwietnia 1997 r.; inne akty muszą być z nią zgodne', kolor: 3 },
      },
      flashcards: [
        ['Trójpodział władzy (art. 10)', 'Ustawodawcza – Sejm i Senat; wykonawcza – Prezydent i Rada Ministrów; sądownicza – sądy i trybunały'],
        ['Zasada republikańskiej formy rządu', 'Głowa państwa wybierana na kadencję, władza nie jest dziedziczna'],
        ['Kadencja Prezydenta RP', '5 lat; można być wybranym ponownie tylko raz'],
        ['Minimalny wiek kandydata na Prezydenta', '35 lat'],
        ['Weto prezydenckie', 'Odmowa podpisania ustawy; Sejm może je odrzucić większością 3/5'],
        ['Prawo łaski', 'Kompetencja Prezydenta – darowanie lub złagodzenie kary skazanemu'],
        ['Kto zastępuje Prezydenta, gdy nie może sprawować urzędu?', 'Marszałek Sejmu'],
        ['Konstruktywne wotum nieufności', 'Odwołanie rządu z jednoczesnym wskazaniem nowego premiera; wniosek min. 46 posłów'],
        ['Dwuinstancyjność postępowania sądowego', 'Od wyroku I instancji można się odwołać do sądu II instancji'],
        ['Niezawisłość sędziów', 'Sędziowie podlegają tylko Konstytucji i ustawom'],
        ['Kiedy uchwalono Konstytucję RP?', '2 kwietnia 1997 r. (Zgromadzenie Narodowe); referendum – 25 maja 1997 r.'],
        ['Trybunał Konstytucyjny – skład', '15 sędziów wybieranych przez Sejm na 9 lat'],
        ['Państwo prawa (art. 7)', 'Organy władzy działają na podstawie i w granicach prawa'],
      ],
      questions: [
        { id: 'qiociu', q: 'Które organy sprawują w Polsce władzę wykonawczą?', options: ['posłowie i senatorowie', 'Prezydent i Rada Ministrów', 'sądy powszechne i trybunały', 'Sejm i Prezydent RP'], answer: 1, explain: 'Art. 10 ust. 2 Konstytucji.' },
        { id: 'yn63sd', q: 'Na czym polega zasada republikańskiej formy rządu?', options: ['głowę państwa wybiera się na kadencję', 'władzę dziedziczy najstarszy syn', 'rządzi jedna partia', 'nie ma głowy państwa'], answer: 0, explain: 'W republice władza głowy państwa pochodzi z wyboru i jest kadencyjna.' },
        { id: 'l93zn0', q: 'Ile trwa kadencja Prezydenta RP?', options: ['4 lata', '5 lat', '6 lat', '7 lat'], answer: 1, explain: 'Art. 127 ust. 2 Konstytucji: pięcioletnia kadencja, ponowny wybór tylko raz.' },
        { id: 'b0w2so', q: 'Ile podpisów wyborców potrzeba, by zgłosić kandydata na Prezydenta RP?', options: ['1 000', '50 000', '100 000', '500 000'], answer: 2, explain: 'Art. 127 ust. 3 Konstytucji: kandydata zgłasza co najmniej 100 000 obywateli.' },
        { id: 'noh871', q: 'Prezydent zawetował ustawę. Jaką większością Sejm może odrzucić weto?', options: ['zwykłą większością', 'bezwzględną większością', '2/3 głosów', '3/5 głosów'], answer: 3, explain: 'Art. 122 ust. 5: 3/5 głosów w obecności co najmniej połowy ustawowej liczby posłów.' },
        { id: '37ehgh', q: 'Która kompetencja należy do Prezydenta RP?', options: ['uchwalanie budżetu państwa', 'stosowanie prawa łaski', 'wydawanie wyroków', 'wybór sędziów Trybunału Konstytucyjnego'], answer: 1, explain: 'Art. 139 Konstytucji. Budżet uchwala parlament, sędziów TK wybiera Sejm.' },
        { id: 'b9jrc9', q: 'Kto przejmuje obowiązki Prezydenta, gdy ten nie może sprawować urzędu?', options: ['Prezes Rady Ministrów', 'Marszałek Senatu – zawsze', 'Marszałek Sejmu', 'Pierwszy Prezes Sądu Najwyższego'], answer: 2, explain: 'Art. 131 Konstytucji. Marszałek Senatu – dopiero gdy nie może Marszałek Sejmu.' },
        { id: 'gpy1js', q: 'Dlaczego Rada Ministrów potrzebuje poparcia większości w Sejmie?', options: ['bo Sejm udziela jej wotum zaufania i może ją odwołać', 'bo Sejm powołuje ministrów bez udziału Prezydenta', 'bo premier pełni jednocześnie funkcję marszałka Sejmu', 'nie potrzebuje, bo odpowiada tylko przed Prezydentem'], answer: 0, explain: 'Rząd musi uzyskać wotum zaufania, a Sejm może go odwołać konstruktywnym wotum nieufności.' },
        { id: '8kfzt5', q: 'Co jest cechą konstruktywnego wotum nieufności?', options: ['wniosek musi wskazać kandydata na nowego premiera', 'głosuje nad nim Senat, a nie Sejm', 'wymaga zatwierdzenia w ogólnokrajowym referendum', 'wniosek musi zgłosić Prezydent RP, a nie posłowie'], answer: 0, explain: 'Art. 158: wniosek min. 46 posłów wskazujący imiennie kandydata na premiera.' },
        { id: 'uha9j1', q: 'Sąd rejonowy wydał wyrok, z którym się nie zgadzasz. Dzięki jakiej zasadzie możesz się odwołać?', options: ['zasadzie trójpodziału i równowagi władzy', 'zasadzie dwuinstancyjności postępowania sądowego', 'zasadzie pluralizmu politycznego', 'zasadzie suwerenności narodu'], answer: 1, explain: 'Art. 176 Konstytucji: postępowanie sądowe jest co najmniej dwuinstancyjne.' },
        { id: 'u2ga82', q: 'Co oznacza niezawisłość sędziów?', options: ['sędziowie wykonują polecenia ministra', 'sędziowie podlegają tylko Konstytucji i ustawom', 'sędziowie są wybierani co 4 lata', 'sędziowie należą do partii rządzącej'], answer: 1, explain: 'Art. 178 Konstytucji; sędzia nie może też należeć do partii politycznej.' },
        { id: 'cfdy37', q: 'Kiedy Zgromadzenie Narodowe uchwaliło obowiązującą Konstytucję RP?', options: ['3 maja 1791 r.', '2 kwietnia 1997 r.', '17 marca 1921 r.', '1 maja 2004 r.'], answer: 1, explain: 'Konstytucję uchwalono 2 kwietnia 1997 r., a w referendum przyjęto 25 maja 1997 r.' },
        { id: 'knjpob', q: 'Ilu sędziów liczy Trybunał Konstytucyjny i na ile lat są wybierani?', options: ['9 sędziów na 15 lat', '15 sędziów na 9 lat', '15 sędziów na 4 lata', '100 sędziów dożywotnio'], answer: 1, explain: 'Art. 194 Konstytucji: 15 sędziów wybieranych przez Sejm na 9 lat.' },
        { id: 'kjvxmc', q: 'Prawda czy fałsz?\nTrybunał Konstytucyjny orzeka o zgodności ustaw z Konstytucją.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. To pierwsza z jego kompetencji wymienionych w art. 188 Konstytucji.' },
      ],
    },
    {
      id: 'sprawy-miedzynarodowe',
      name: 'ONZ, NATO i Unia Europejska',
      basis: 'Dz.U. 2024 poz. 996, wiedza o społeczeństwie, dz. XII „Sprawy międzynarodowe”, wym. 1–4 (cele i działania ONZ i NATO, cele UE i korzyści z członkostwa, fundusze unijne, działalność Polski w tych organizacjach, problemy współczesnego świata). Traktat Północnoatlantycki (Dz.U. 2000 nr 87 poz. 970) art. 5; oświadczenie rządowe Dz.U. 2000 nr 87 poz. 971 (Polska w NATO od 12.03.1999); oświadczenie rządowe Dz.U. 2024 poz. 483 (Szwecja w NATO od 7.03.2024 – 32 państwa). ONZ (Karta NZ, Rada Bezpieczeństwa, 193 członków, misje pokojowe, UNIFIL), NATO (siedziba, misje), UE (27 państw, swobody, Schengen, referendum 2003, instytucje, fundusze) – zpe.gov.pl (wątek LPXe7XhjcT, moduł „Polska w Europie i świecie”).',
      theory: `
        <h3>ONZ – Organizacja Narodów Zjednoczonych</h3>
        <ul>
          <li>powstała po II wojnie światowej: <b>Karta Narodów Zjednoczonych</b> podpisana 26 czerwca 1945 r. w San Francisco, weszła w życie <b>24 października 1945 r.</b>; siedziba główna – <b>Nowy Jork</b>; członków – <b>193</b> państwa,</li>
          <li>cele: utrzymanie <b>międzynarodowego pokoju i bezpieczeństwa</b>, przyjazne stosunki między narodami, współpraca w rozwiązywaniu problemów (gospodarczych, społecznych, humanitarnych), poszanowanie <b>praw człowieka</b>,</li>
          <li><b>Zgromadzenie Ogólne</b> – wszystkie państwa, każde ma jeden głos; <b>Rada Bezpieczeństwa</b> – 15 członków, w tym 5 stałych z <b>prawem weta</b> (Chiny, Francja, Rosja, USA, Wielka Brytania), pozostali wybierani na 2 lata; może nakładać sankcje i powoływać <b>misje pokojowe</b> („błękitne hełmy”),</li>
          <li>agendy ONZ, np. <b>UNICEF</b> (pomoc dzieciom), UNESCO (edukacja, nauka, kultura),</li>
          <li><b>Polska w ONZ</b>: należy od początku; z polskiej inicjatywy powstała Konwencja o prawach dziecka; polscy żołnierze służą w misjach pokojowych, np. w Libanie (UNIFIL).</li>
        </ul>
        <h3>NATO – Organizacja Traktatu Północnoatlantyckiego</h3>
        <ul>
          <li><b>Traktat Północnoatlantycki</b> podpisano <b>4 kwietnia 1949 r. w Waszyngtonie</b> (12 państw założycielskich); siedziba – <b>Bruksela</b>,</li>
          <li>cel: <b>zbiorowa obrona</b> i bezpieczeństwo członków. <b>Artykuł 5</b>: zbrojna napaść na jednego lub więcej członków w Europie lub Ameryce Północnej jest uznana za <b>napaść na wszystkich</b>; po raz pierwszy uruchomiono go po zamachach na USA <b>11 września 2001 r.</b>,</li>
          <li><b>Polska w NATO od 12 marca 1999 r.</b> (razem z Czechami i Węgrami); polscy żołnierze uczestniczyli m.in. w misjach w Afganistanie i Kosowie,</li>
          <li>od <b>7 marca 2024 r.</b> (przyjęcie Szwecji) NATO liczy <b>32</b> państwa.</li>
        </ul>
        <h3>Unia Europejska</h3>
        <ul>
          <li>powstała na mocy traktatu z <b>Maastricht</b>; dziś liczy <b>27</b> państw (Wielka Brytania wystąpiła 1 lutego 2020 r.),</li>
          <li>cele: pokój i wartości (demokracja, prawa człowieka), dobrobyt mieszkańców, <b>wspólny rynek</b> ze swobodnym przepływem <b>osób, towarów, usług i kapitału</b>, obszar bez kontroli na granicach wewnętrznych (<b>strefa Schengen</b>), solidarność między regionami,</li>
          <li><b>Polska w UE od 1 maja 2004 r.</b> – po <b>referendum 7–8 czerwca 2003 r.</b>; traktat akcesyjny podpisano w Atenach 16 kwietnia 2003 r.; Polska ma swoich przedstawicieli we wszystkich instytucjach UE,</li>
          <li>instytucje: <b>Parlament Europejski</b> (wybierany przez obywateli; siedziba oficjalna – Strasburg), <b>Rada Europejska</b> (szefowie państw i rządów), <b>Rada UE</b> (ministrowie; przewodniczą jej państwa po pół roku – prezydencja), <b>Komisja Europejska</b> (po jednym komisarzu z każdego państwa), Trybunał Sprawiedliwości UE,</li>
          <li><b>korzyści</b>: możesz <b>pracować, uczyć się i mieszkać</b> w innych krajach UE, podróżować bez kontroli granicznej w strefie Schengen; gminy i regiony dostają <b>fundusze unijne</b> na drogi, szkoły, kanalizację – poznasz je po tablicach informacyjnych przy inwestycjach i na stronie gminy. Polska płaci <b>złotym</b>, nie euro.</li>
        </ul>
        <h3>Problemy współczesnego świata</h3>
        <p>Wojny i uchodźstwo, głód i ubóstwo, zmiany klimatu, choroby, terroryzm. Pomóc możesz np. przez wolontariat, wsparcie organizacji humanitarnych (np. UNICEF, PAH), odpowiedzialne zakupy, oszczędzanie wody i energii.</p>
        <div class="tip">💡 Daty Polski: <b>NATO – 12 III 1999</b>, <b>UE – 1 V 2004</b>. ONZ – pokój na świecie, NATO – wspólna obrona (art. 5), UE – wspólny rynek i wartości.</div>`,
      infographicNote: 'Porównuj w poziomie: każda organizacja ma inny główny cel; w wierszu „Polska od” – daty do zapamiętania.',
      infographic: {
        type: 'porownanie',
        kolumny: [{ title: 'ONZ', kolor: 1 }, { title: 'NATO', kolor: 2 }, { title: 'UE', kolor: 5 }],
        wiersze: [
          { label: 'Główny cel', cells: ['pokój na świecie', 'wspólna obrona', 'wspólny rynek'], bold: true },
          { label: 'Ile państw?', cells: ['193', '32', '27'], bold: true },
          { label: 'Polska od', cells: ['początku', '12.03.1999', '1.05.2004'], bold: true },
          { label: 'Hasło do zapamiętania', cells: ['Rada Bezpieczeństwa', 'artykuł 5', 'strefa Schengen'] },
        ],
        bottom: { title: '🇪🇺 Co daje ci UE?', items: ['praca, nauka i mieszkanie w innych krajach UE', 'podróże bez kontroli granicznej w strefie Schengen', 'fundusze unijne dla gmin i regionów'], kolor: 3 },
      },
      flashcards: [
        ['Karta Narodów Zjednoczonych', 'Podpisana 26 czerwca 1945 r. w San Francisco; weszła w życie 24 października 1945 r.'],
        ['Siedziba główna ONZ', 'Nowy Jork'],
        ['Stali członkowie Rady Bezpieczeństwa ONZ', 'Chiny, Francja, Rosja, USA, Wielka Brytania – mają prawo weta'],
        ['Główny cel ONZ', 'Utrzymanie międzynarodowego pokoju i bezpieczeństwa'],
        ['UNICEF', 'Fundusz Narodów Zjednoczonych na rzecz Dzieci'],
        ['Traktat Północnoatlantycki', 'Podpisany 4 kwietnia 1949 r. w Waszyngtonie'],
        ['Art. 5 Traktatu Północnoatlantyckiego', 'Zbrojna napaść na jednego członka to napaść na wszystkich'],
        ['Polska w NATO', 'Od 12 marca 1999 r. (razem z Czechami i Węgrami)'],
        ['Siedziba NATO', 'Bruksela'],
        ['Polska w Unii Europejskiej', 'Od 1 maja 2004 r.; referendum akcesyjne 7–8 czerwca 2003 r.'],
        ['Cztery swobody wspólnego rynku UE', 'Przepływ osób, towarów, usług i kapitału'],
        ['Strefa Schengen', 'Obszar bez kontroli na granicach wewnętrznych'],
        ['Komisja Europejska', 'Instytucja UE z jednym komisarzem z każdego państwa członkowskiego'],
      ],
      questions: [
        { id: 'vrnmc2', q: 'Jaki jest najważniejszy cel ONZ?', options: ['utrzymanie międzynarodowego pokoju i bezpieczeństwa', 'wspólna waluta wszystkich państw członkowskich', 'zbiorowa obrona państw Europy i Ameryki Północnej', 'organizowanie letnich i zimowych igrzysk olimpijskich'], answer: 0, explain: 'Karta NZ stawia na pierwszym miejscu pokój i bezpieczeństwo międzynarodowe.' },
        { id: 'u209vy', q: 'Gdzie mieści się główna siedziba ONZ?', options: ['w Genewie', 'w Brukseli', 'w Nowym Jorku', 'w Paryżu'], answer: 2, explain: 'Główna siedziba ONZ jest w Nowym Jorku.' },
        { id: 'nhxze7', q: 'Które państwo jest stałym członkiem Rady Bezpieczeństwa ONZ?', options: ['Niemcy', 'Francja', 'Polska', 'Japonia'], answer: 1, explain: 'Stali członkowie: Chiny, Francja, Rosja, USA, Wielka Brytania.' },
        { id: 'sr0t2z', q: 'Czym jest misja pokojowa ONZ?', options: ['wycieczką dyplomatów do państw członkowskich ONZ', 'operacją wojskową ONZ, która pomaga utrzymać pokój', 'coroczną zbiórką pieniędzy na rzecz UNICEF', 'szczytem przywódców państw Unii Europejskiej'], answer: 1, explain: 'Żołnierze misji pokojowych („błękitne hełmy”) pilnują rozejmów i chronią cywilów, np. UNIFIL w Libanie.' },
        { id: 'c1qaf5', q: 'Kiedy i gdzie podpisano Traktat Północnoatlantycki?', options: ['4 kwietnia 1949 r. w Waszyngtonie', '26 czerwca 1945 r. w San Francisco', '1 maja 2004 r. w Brukseli', '12 marca 1999 r. w Warszawie'], answer: 0, explain: 'NATO powstało na mocy traktatu z 4 kwietnia 1949 r.' },
        { id: 'r0fdrl', q: 'Co stanowi art. 5 Traktatu Północnoatlantyckiego?', options: ['że członkowie sojuszu mają wspólną walutę – euro', 'że zbrojna napaść na jednego członka to napaść na wszystkich', 'że NATO ma siedzibę w Brukseli', 'że każde państwo świata może zostać członkiem bez zgody innych'], answer: 1, explain: 'To zasada zbiorowej obrony – „jeden za wszystkich, wszyscy za jednego”.' },
        { id: 'rekqc6', q: 'Od kiedy Polska jest członkiem NATO?', options: ['od 1 maja 2004 r.', 'od 4 czerwca 1989 r.', 'od 12 marca 1999 r.', 'od 24 października 1945 r.'], answer: 2, explain: 'Traktat wszedł w życie wobec Polski 12 marca 1999 r. (Dz.U. 2000 nr 87 poz. 971).' },
        { id: 'q148e0', q: 'Po jakim wydarzeniu po raz pierwszy uruchomiono art. 5 Traktatu Północnoatlantyckiego?', options: ['po zamachach na USA 11 września 2001 r.', 'po upadku muru berlińskiego w 1989 r.', 'po wejściu Polski do UE w 2004 r.', 'po zakończeniu II wojny światowej'], answer: 0, explain: 'Państwa NATO uznały atak terrorystyczny na USA za atak na cały sojusz.' },
        { id: 'q9g5dl', q: 'Od kiedy Polska należy do Unii Europejskiej?', options: ['od 12 marca 1999 r.', 'od 1 maja 2004 r.', 'od 7 czerwca 2003 r.', 'od 1 stycznia 1999 r.'], answer: 1, explain: 'Polska weszła do UE 1 maja 2004 r., po referendum z 7–8 czerwca 2003 r.' },
        { id: '27m1qh', q: 'Które swobody tworzą wspólny rynek UE?', options: ['przepływ osób, towarów, usług i kapitału', 'swoboda wyboru waluty, języka i religii', 'wolność słowa, zgromadzeń i prasy', 'wspólne wojsko, policja i sądy'], answer: 0, explain: 'To cztery swobody jednolitego rynku.' },
        { id: 'o646ws', q: 'Która korzyść z członkostwa w UE dotyczy pracowników?', options: ['brak podatków od wynagrodzenia w całej UE', 'możliwość podjęcia pracy w innych państwach UE', 'darmowe mieszkanie w każdym kraju członkowskim', 'jednakowa emerytura dla wszystkich obywateli UE'], answer: 1, explain: 'Swobodny przepływ osób pozwala obywatelom UE pracować w innych państwach członkowskich.' },
        { id: 'rf5sp4', q: 'Gdzie najłatwiej sprawdzić, które inwestycje w twojej gminie sfinansowano z funduszy unijnych?', options: ['w Konstytucji RP, w rozdziale o samorządzie', 'na tablicach przy inwestycjach i na stronie gminy', 'w Karcie Narodów Zjednoczonych i jej załącznikach', 'w statucie szkoły i regulaminie samorządu uczniowskiego'], answer: 1, explain: 'Inwestycje z funduszy UE oznacza się tablicami, a gminy informują o nich na swoich stronach.' },
        { id: 'lkg8h5', q: 'Prawda czy fałsz?\nPo przyjęciu Szwecji w 2024 r. NATO liczy 32 państwa członkowskie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Szwecja stała się stroną traktatu 7 marca 2024 r. (Dz.U. 2024 poz. 483).' },
      ],
    },
  ],
});
