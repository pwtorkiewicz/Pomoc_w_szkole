/* Język polski – klasa 8
 * Format pytania: { q: 'treść', options: ['...'], answer: indeks_poprawnej, explain: 'wyjaśnienie' }
 */
window.SUBJECTS.push({
  id: 'polski',
  name: 'Język polski',
  icon: '📚',
  color: '#d6604d',
  exam: '<b>10 maja 2027</b>, 150 minut, 45 pkt. Część I: ok. 20 zadań do tekstu literackiego i nieliterackiego (25 pkt). Część II: wypracowanie – opowiadanie albo rozprawka/przemówienie, min. 200 wyrazów (20 pkt).',
  topics: [
    {
      id: 'srodki-stylistyczne',
      name: 'Środki stylistyczne',
      basis: 'Podstawa programowa, klasy VII–VIII: kształcenie literackie (rozpoznawanie środków stylistycznych i określanie ich funkcji).',
      theory: `
        <h3>Najważniejsze środki stylistyczne</h3>
        <table>
          <tr><th>Środek</th><th>Na czym polega</th><th>Przykład</th></tr>
          <tr><td>Epitet</td><td>określenie rzeczownika (najczęściej przymiotnik)</td><td>„<b>złote</b> słońce”</td></tr>
          <tr><td>Porównanie</td><td>zestawienie dwóch rzeczy za pomocą słów <i>jak, niby, niczym, jakby</i></td><td>„oczy <b>jak</b> gwiazdy”</td></tr>
          <tr><td>Metafora (przenośnia)</td><td>połączenie słów, które razem nabierają nowego znaczenia</td><td>„ocean traw”</td></tr>
          <tr><td>Uosobienie (personifikacja)</td><td>nadanie cech <b>ludzkich</b> przedmiotom, zwierzętom, zjawiskom</td><td>„wiatr śpiewa piosenkę”</td></tr>
          <tr><td>Ożywienie (animizacja)</td><td>nadanie cech <b>istot żywych</b> (np. ruchu) przedmiotom martwym</td><td>„chmury biegną po niebie”</td></tr>
          <tr><td>Apostrofa</td><td>bezpośredni, uroczysty zwrot do kogoś lub czegoś</td><td>„Litwo! Ojczyzno moja!”</td></tr>
          <tr><td>Pytanie retoryczne</td><td>pytanie, na które nie oczekuje się odpowiedzi</td><td>„Czy jest coś piękniejszego niż wiosna?”</td></tr>
          <tr><td>Wyliczenie</td><td>wymienienie wielu elementów po kolei</td><td>„krzesła, stoły, szafy i łóżka”</td></tr>
          <tr><td>Onomatopeja</td><td>wyraz naśladujący dźwięk</td><td>„szu, plum, bęc”</td></tr>
          <tr><td>Anafora</td><td>powtórzenie tego samego słowa na początku kolejnych wersów</td><td>„Kocham… / Kocham…”</td></tr>
          <tr><td>Hiperbola</td><td>celowa przesada</td><td>„mówiłem ci to milion razy”</td></tr>
          <tr><td>Oksymoron</td><td>połączenie słów o przeciwnym znaczeniu</td><td>„gorący lód”, „żywy trup”</td></tr>
          <tr><td>Zdrobnienie</td><td>wyraz o znaczeniu pomniejszającym, czułym</td><td>„domek”, „słoneczko”</td></tr>
        </table>
        <div class="tip">💡 Uosobienie = cechy <b>człowieka</b> (śpiewa, płacze, myśli). Ożywienie = cechy <b>istoty żywej</b> (biegnie, oddycha).</div>
        <h3>Jak pisać o funkcji środka?</h3>
        <p>Na egzaminie nie wystarczy nazwać środka – trzeba napisać, <b>czemu służy</b>: np. „Porównanie podkreśla piękno oczu bohaterki”, „Pytanie retoryczne skłania czytelnika do refleksji”.</p>
      `,
      flashcards: [
        ['Epitet', 'Określenie rzeczownika, np. „złote słońce”'],
        ['Porównanie', 'Zestawienie za pomocą „jak, niby, niczym”, np. „biały jak śnieg”'],
        ['Metafora', 'Połączenie słów tworzące nowe znaczenie, np. „ocean traw”'],
        ['Uosobienie', 'Nadanie cech ludzkich, np. „wiatr śpiewa”'],
        ['Ożywienie', 'Nadanie cech istot żywych, np. „chmury biegną”'],
        ['Apostrofa', 'Uroczysty zwrot do kogoś/czegoś, np. „Litwo! Ojczyzno moja!”'],
        ['Pytanie retoryczne', 'Pytanie, na które nie oczekujemy odpowiedzi'],
        ['Onomatopeja', 'Wyraz dźwiękonaśladowczy, np. „szelest”, „bęc”'],
        ['Anafora', 'Powtórzenie słowa na początku kolejnych wersów'],
        ['Hiperbola', 'Celowa przesada, np. „milion razy”'],
        ['Oksymoron', 'Połączenie sprzeczności, np. „gorący lód”'],
      ],
      questions: [
        { q: 'Jaki środek stylistyczny zastosowano w wyrażeniu „złote słońce”?', options: ['epitet', 'porównanie', 'onomatopeja', 'apostrofa'], answer: 0, explain: 'Przymiotnik „złote” określa rzeczownik „słońce” – to epitet.' },
        { q: '„Jej oczy błyszczały jak gwiazdy.” – jaki to środek?', options: ['metafora', 'porównanie', 'hiperbola', 'uosobienie'], answer: 1, explain: 'Słowo „jak” łączy dwie zestawiane rzeczy – to porównanie.' },
        { q: '„Wiatr śpiewał smutną piosenkę.” – jaki to środek?', options: ['uosobienie', 'epitet', 'oksymoron', 'wyliczenie'], answer: 0, explain: 'Śpiewanie to czynność ludzka nadana zjawisku przyrody – uosobienie (personifikacja).' },
        { q: '„Chmury biegły po niebie.” – jaki to środek?', options: ['apostrofa', 'ożywienie', 'onomatopeja', 'porównanie'], answer: 1, explain: 'Chmurom nadano cechę istoty żywej (ruch, bieg) – ożywienie (animizacja).' },
        { q: '„Litwo! Ojczyzno moja!” – jaki środek stylistyczny otwiera „Pana Tadeusza”?', options: ['pytanie retoryczne', 'hiperbola', 'apostrofa', 'oksymoron'], answer: 2, explain: 'Poeta zwraca się bezpośrednio i uroczyście do ojczyzny – to apostrofa.' },
        { q: 'Który przykład to oksymoron?', options: ['zimny wiatr', 'gorący lód', 'szybki jak strzała', 'trzask, prask'], answer: 1, explain: 'Oksymoron łączy wyrazy o przeciwnym znaczeniu: „gorący” i „lód”.' },
        { q: '„Mówiłem ci to już milion razy!” – jaki to środek?', options: ['hiperbola', 'epitet', 'anafora', 'ożywienie'], answer: 0, explain: 'To celowa przesada – hiperbola.' },
        { q: 'Wyrazy „plum”, „szelest”, „kukułka kuka” to przykłady…', options: ['wyliczenia', 'onomatopei', 'metafor', 'zdrobnień'], answer: 1, explain: 'Wyrazy naśladujące dźwięki to onomatopeje (wyrazy dźwiękonaśladowcze).' },
        { q: 'Powtórzenie tego samego słowa na początku kolejnych wersów to…', options: ['anafora', 'apostrofa', 'epitet', 'puenta'], answer: 0 },
        { q: 'Jaką funkcję najczęściej pełni pytanie retoryczne?', options: ['podaje dokładną informację', 'skłania odbiorcę do refleksji', 'naśladuje dźwięki', 'opisuje wygląd postaci'], answer: 1, explain: 'Na pytanie retoryczne nie oczekuje się odpowiedzi – ma pobudzić do zastanowienia się.' },
      ],
    },
    {
      id: 'lektury-7-8',
      name: 'Lektury klas VII–VIII (w całości)',
      basis: 'Informator CKE o egzaminie ósmoklasisty z języka polskiego od r. szk. 2024/2025 – lista lektur obowiązkowych, klasy VII i VIII (pozycje książkowe poznawane w całości).',
      theory: `
        <p>Na egzaminie z lektur klas VII–VIII sprawdza się znajomość <b>całego utworu</b> (treści i problematyki). W wypracowaniu trzeba odwołać się do wybranej lektury obowiązkowej.</p>
        <table>
          <tr><th>Tytuł</th><th>Autor</th><th>Rodzaj / gatunek</th><th>Najważniejsze</th></tr>
          <tr><td>Opowieść wigilijna</td><td>Karol Dickens</td><td>epika, opowiadanie</td><td>Skąpy Ebenezer Scrooge, duch wspólnika Jacoba Marleya i trzy duchy (Wigilijnej Przeszłości, Teraźniejszości i Przyszłości). Przemiana bohatera, rodzina Cratchitów, mały Tim.</td></tr>
          <tr><td>Zemsta</td><td>Aleksander Fredro</td><td>dramat, komedia</td><td>Spór Cześnika Raptusiewicza z Rejentem Milczkiem o mur graniczny w zamku. Papkin – tchórzliwy samochwała. Miłość Wacława (syna Rejenta) i Klary (bratanicy Cześnika) kończy spór.</td></tr>
          <tr><td>Dziady cz. II</td><td>Adam Mickiewicz</td><td>dramat (romantyczny)</td><td>Obrzęd prowadzi Guślarz. Duchy lekkie (Józio i Rózia), ciężkie (Widmo Złego Pana), pośrednie (pasterka Zosia). Każdy duch przekazuje prawdę moralną.</td></tr>
          <tr><td>Balladyna</td><td>Juliusz Słowacki</td><td>dramat (romantyczny), tragedia</td><td>Siostry Balladyna i Alina zbierają maliny – która pierwsza zbierze dzban, poślubi Kirkora. Balladyna zabija siostrę, a potem kolejne osoby, by zdobyć władzę. Świat fantastyczny: Goplana, Skierka, Chochlik. Pustelnik (dawny król Popiel III). Zostaje królową, wydaje trzy wyroki śmierci na samą siebie i ginie od pioruna. Temat: żądza władzy, wina i kara.</td></tr>
          <tr><td>Mały Książę</td><td>Antoine de Saint-Exupéry</td><td>epika (baśń filozoficzna)</td><td>Pilot ląduje awaryjnie na Saharze i spotyka Małego Księcia z planety B-612. Róża, podróż po planetach (król, próżny, pijak, bankier, latarnik, geograf), Lis i „oswajanie”. „Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.”</td></tr>
          <tr><td>Kamienie na szaniec</td><td>Aleksander Kamiński</td><td>epika, literatura faktu</td><td>Rudy (Jan Bytnar), Alek (Aleksy Dawidowski), Zośka (Tadeusz Zawadzki) – harcerze Szarych Szeregów. Mały sabotaż, akcja pod Arsenałem (odbicie Rudego). Przyjaźń, patriotyzm, poświęcenie.</td></tr>
        </table>
        <div class="tip">⚠️ Jeśli w wypracowaniu w ogóle nie odwołasz się do lektury wskazanej w poleceniu, cała praca dostanie <b>0 punktów</b>. Samo podanie imienia bohatera to za mało – trzeba wykorzystać treść utworu.</div>
        <p>Lektury klas IV–VI są w osobnym dziale. Lista lektur obowiązkowych będzie wydrukowana na początku arkusza egzaminacyjnego.</p>
      `,
      flashcards: [
        ['„Zemsta” – przedmiot sporu', 'Mur graniczny w zamku'],
        ['„Niech się dzieje wola nieba” – kto tak mówi?', 'Rejent Milczek („Zemsta”)'],
        ['Jacob Marley', 'Zmarły wspólnik Scrooge’a, który ukazuje mu się jako duch'],
        ['Guślarz', 'Prowadzi obrzęd w „Dziadach cz. II”'],
        ['Duchy w „Dziadach cz. II”', 'lekkie: Józio i Rózia · ciężkie: Zły Pan · pośrednie: Zosia'],
        ['Balladyna – o co był zakład z Aliną?', 'Która pierwsza zbierze dzban malin, poślubi Kirkora'],
        ['Goplana', 'Nimfa (królowa jeziora Gopło) z „Balladyny”'],
        ['Jak ginie Balladyna?', 'Od pioruna – po wydaniu na siebie trzech wyroków śmierci'],
        ['„Oswoić” według Lisa', 'Stworzyć więzy'],
        ['„Dobrze widzi się tylko sercem…”', '„…Najważniejsze jest niewidoczne dla oczu.” – Lis, „Mały Książę”'],
        ['Rudy, Alek, Zośka', 'Bohaterowie „Kamieni na szaniec”'],
      ],
      questions: [
        { q: 'Kto jest autorem „Zemsty”?', options: ['Aleksander Fredro', 'Adam Mickiewicz', 'Henryk Sienkiewicz', 'Juliusz Słowacki'], answer: 0 },
        { q: 'O co spierali się Cześnik i Rejent w „Zemście”?', options: ['o majątek po stryju', 'o mur graniczny w zamku', 'o rękę Klary', 'o konia'], answer: 1, explain: 'Obaj mieszkali w jednym zamku, a spór dotyczył naprawy muru granicznego.' },
        { q: 'Która postać „Zemsty” jest tchórzliwym samochwałą?', options: ['Wacław', 'Dyndalski', 'Papkin', 'Rejent'], answer: 2 },
        { q: 'Ile duchów (oprócz Marleya) odwiedziło Scrooge’a w „Opowieści wigilijnej”?', options: ['jeden', 'dwa', 'trzy', 'cztery'], answer: 2, explain: 'Duch Wigilijnej Przeszłości, Duch Wigilijnej Teraźniejszości i Duch Wigilijnej Przyszłości.' },
        { q: 'Dlaczego Józio i Rózia z „Dziadów cz. II” nie mogli dostać się do nieba?', options: ['bo byli okrutni', 'bo nie zaznali goryczy w życiu', 'bo nikogo nie kochali', 'bo nie mieli grobu'], answer: 1, explain: '„Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie.” – prosili o dwa ziarnka gorczycy.' },
        { q: 'O co prosi pasterka Zosia w „Dziadach cz. II”?', options: ['o dwa ziarnka gorczycy', 'o jedzenie i picie', 'aby młodzieńcy przyciągnęli ją do ziemi', 'o modlitwę'], answer: 2, explain: '„Kto nie dotknął ziemi ni razu, ten nigdy nie może być w niebie.” – Zosia za życia nikogo nie kochała.' },
        { q: 'Kto jest autorem „Balladyny”?', options: ['Adam Mickiewicz', 'Juliusz Słowacki', 'Aleksander Fredro', 'Henryk Sienkiewicz'], answer: 1 },
        { q: 'Jaki był warunek zakładu sióstr w „Balladynie”?', options: ['która pierwsza zbierze dzban malin, poślubi Kirkora', 'która ładniej zaśpiewa, zostanie królową', 'która znajdzie koronę, odziedziczy zamek', 'która pierwsza wróci do domu, dostanie posag'], answer: 0 },
        { q: 'Jaki jest główny problem „Balladyny”?', options: ['tęsknota za ojczyzną', 'żądza władzy i kara za zbrodnię', 'przyjaźń w czasie wojny', 'skąpstwo i jego skutki'], answer: 1 },
        { q: 'Co według Lisa z „Małego Księcia” znaczy „oswoić”?', options: ['nakarmić', 'stworzyć więzy', 'wytresować', 'zapomnieć'], answer: 1 },
        { q: 'Gdzie pilot spotkał Małego Księcia?', options: ['w Paryżu', 'na Saharze', 'na planecie B-612', 'na statku'], answer: 1, explain: 'Pilot wylądował awaryjnie na pustyni Sahara.' },
        { q: 'Kogo odbito w akcji pod Arsenałem („Kamienie na szaniec”)?', options: ['Zośkę', 'Alka', 'Rudego', 'Słonia'], answer: 2, explain: 'Akcja pod Arsenałem (marzec 1943) – odbicie Jana Bytnara „Rudego” z rąk gestapo.' },
        { q: 'Do jakiej organizacji należeli bohaterowie „Kamieni na szaniec”?', options: ['Szare Szeregi', 'Legiony Polskie', 'Armia Krajowa – kawaleria', 'Gwardia Ludowa'], answer: 0 },
      ],
    },
    {
      id: 'utwory-krotsze',
      name: 'Utwory krótsze i fragmenty',
      basis: 'Informator CKE (język polski, od r. szk. 2024/2025) – klasy VII i VIII: krótkie utwory poznawane w całości, utwory poznawane we fragmentach i utwory poetyckie.',
      theory: `
        <p>Według informatora CKE: z <i>Pana Tadeusza</i> zadania w części I arkusza dotyczą tylko fragmentów z ksiąg I, II, IV, X, XI i XII, ale w wypracowaniu można odwołać się do całego utworu.</p>
        <table>
          <tr><th>Utwór</th><th>Autor</th><th>Najważniejsze</th></tr>
          <tr><td>Pan Tadeusz (księgi I, II, IV, X, XI, XII)</td><td>Adam Mickiewicz</td><td>Epopeja. Spór Sopliców i Horeszków o zamek. Jacek Soplica jako ksiądz Robak, Gerwazy – klucznik Horeszków. Obraz szlachty i przyrody Litwy. Inwokacja: „Litwo! Ojczyzno moja!”. Księga XII „Kochajmy się!” – koncert Jankiela, polonez.</td></tr>
          <tr><td>Reduta Ordona</td><td>Adam Mickiewicz</td><td>Obrona Warszawy w powstaniu listopadowym (1831). Relacja adiutanta. Wysadzenie reduty – bohaterstwo obrońców.</td></tr>
          <tr><td>Świtezianka</td><td>Adam Mickiewicz</td><td>Ballada. Strzelec przysięga wierność tajemniczej dziewczynie, łamie przysięgę i zostaje ukarany – wciąga go toń jeziora Świteź.</td></tr>
          <tr><td>Treny (VII, VIII)</td><td>Jan Kochanowski</td><td>Utwory żałobne po śmierci córki Urszulki. Tren VII – ubranka córki, Tren VIII – „Wielkieś mi uczyniła pustki w domu moim”.</td></tr>
          <tr><td>Fraszki (wybór), pieśń</td><td>Jan Kochanowski</td><td>Krótkie, żartobliwe lub refleksyjne utwory z puentą.</td></tr>
          <tr><td>Latarnik</td><td>Henryk Sienkiewicz</td><td>Nowela. Stary tułacz Skawiński zostaje latarnikiem w Aspinwall. Zaczytany w „Panu Tadeuszu” nie zapala latarni i traci posadę. Tęsknota za ojczyzną.</td></tr>
          <tr><td>Quo vadis (fragmenty)</td><td>Henryk Sienkiewicz</td><td>Powieść historyczna. Rzym za Nerona: Winicjusz, Ligia, Ursus, Petroniusz. Pożar Rzymu i prześladowania chrześcijan.</td></tr>
          <tr><td>Syzyfowe prace (fragmenty)</td><td>Stefan Żeromski</td><td>Powieść o rusyfikacji polskiej młodzieży w gimnazjum w Klerykowie (zabór rosyjski). Marcin Borowicz, Andrzej Radek. Scena, w której Bernard Zygier recytuje na lekcji „Redutę Ordona” – przebudzenie patriotyzmu uczniów.</td></tr>
          <tr><td>Artysta</td><td>Sławomir Mrożek</td><td>Krótkie opowiadanie satyryczne.</td></tr>
        </table>
      `,
      flashcards: [
        ['Pan Tadeusz – które księgi obowiązują?', 'I, II, IV, X, XI, XII'],
        ['Ksiądz Robak', 'Jacek Soplica („Pan Tadeusz”)'],
        ['Gerwazy', 'Klucznik Horeszków („Pan Tadeusz”)'],
        ['„Reduta Ordona” – jakie wydarzenie?', 'Obrona Warszawy w powstaniu listopadowym, 1831'],
        ['„Świtezianka” – gatunek', 'Ballada'],
        ['Skawiński', 'Tytułowy latarnik z noweli Sienkiewicza'],
        ['Urszulka', 'Córka Jana Kochanowskiego – „Treny”'],
        ['„Quo vadis” – cesarz', 'Neron'],
        ['„Syzyfowe prace” – temat', 'Rusyfikacja polskiej młodzieży w gimnazjum w Klerykowie'],
        ['Bernard Zygier', 'Recytuje „Redutę Ordona” w „Syzyfowych pracach”'],
      ],
      questions: [
        { q: 'Kim okazał się ksiądz Robak w „Panu Tadeuszu”?', options: ['Gerwazym', 'Jackiem Soplicą', 'Hrabią', 'Sędzią'], answer: 1 },
        { q: 'Jak zaczyna się Inwokacja „Pana Tadeusza”?', options: ['„Litwo! Ojczyzno moja!”', '„Kochajmy się!”', '„Polska jeszcze nie zginęła”', '„Nie rzucim ziemi”'], answer: 0 },
        { q: 'Jakiego wydarzenia dotyczy „Reduta Ordona”?', options: ['bitwy pod Grunwaldem', 'obrony Warszawy w powstaniu listopadowym', 'powstania warszawskiego', 'obrony Częstochowy'], answer: 1 },
        { q: 'Za co został ukarany strzelec w „Świteziance”?', options: ['za kradzież', 'za złamanie przysięgi wierności', 'za tchórzostwo', 'za kłusownictwo'], answer: 1 },
        { q: 'Dlaczego Skawiński z „Latarnika” stracił posadę?', options: ['zasnął pijany', 'zaczytał się w „Panu Tadeuszu” i nie zapalił latarni', 'uciekł z wyspy', 'pokłócił się z konsulem'], answer: 1 },
        { q: 'Po czyjej śmierci Jan Kochanowski napisał „Treny”?', options: ['żony', 'ojca', 'córki Urszulki', 'przyjaciela'], answer: 2 },
        { q: 'Za panowania którego cesarza toczy się akcja „Quo vadis”?', options: ['Juliusza Cezara', 'Nerona', 'Oktawiana Augusta', 'Konstantyna'], answer: 1 },
        { q: 'Jakim gatunkiem jest „Latarnik”?', options: ['nowela', 'ballada', 'komedia', 'epopeja'], answer: 0 },
        { q: 'Jaki problem przedstawiają „Syzyfowe prace” Stefana Żeromskiego?', options: ['rusyfikację polskiej młodzieży w szkole', 'walkę z Krzyżakami', 'życie w Rzymie za Nerona', 'spór o zamek'], answer: 0 },
        { q: 'Który utwór recytuje Bernard Zygier w „Syzyfowych pracach”?', options: ['„Świteziankę”', '„Redutę Ordona”', '„Pana Tadeusza”', '„Rotę”'], answer: 1 },
        { q: 'Które treny Kochanowskiego są lekturą obowiązkową na egzaminie (wg informatora CKE)?', options: ['I i V', 'VII i VIII', 'XIX', 'wszystkie'], answer: 1, explain: 'Treny I i V zostały wykreślone z podstawy w 2024 r. – można się do nich odwoływać, ale nie są lekturą obowiązkową.' },
      ],
    },
    {
      id: 'lektury-4-6',
      name: 'Lektury klas IV–VI',
      basis: 'Informator CKE (język polski, od r. szk. 2024/2025) – lektury obowiązkowe klas IV–VI. Ograniczenie zadań tylko do fragmentu w arkuszu zapisano dla lat szkolnych 2024/2025 i 2025/2026.',
      theory: `
        <div class="tip">⚠️ W informatorze CKE zapisano, że w latach szkolnych <b>2024/2025 i 2025/2026</b> zadania z lektur klas IV–VI dotyczą tylko fragmentu wydrukowanego w arkuszu. Dla egzaminu w 2027 r. takiego zastrzeżenia nie ma, więc <b>bezpieczniej znać treść całych lektur</b>. Zapytaj nauczyciela, czy CKE wydała nowy komunikat.</div>
        <table>
          <tr><th>Tytuł</th><th>Autor</th><th>Najważniejsze</th></tr>
          <tr><td>Akademia Pana Kleksa</td><td>Jan Brzechwa</td><td>Narratorem jest Adaś Niezgódka, uczeń niezwykłej akademii, do której przyjmowani są tylko chłopcy o imionach na literę A. Szpak Mateusz to zaczarowany książę. Przeciwnikiem pana Kleksa jest golibroda Filip.</td></tr>
          <tr><td>Kajko i Kokosz. Szkoła latania</td><td>Janusz Christa</td><td>Komiks. Dzielni wojowie Kajko i Kokosz z grodu Mirmiłowo (kasztelan Mirmił) i ich przeciwnicy – Zbójcerze z Hegemonem na czele.</td></tr>
          <tr><td>Opowieści z Narnii. Lew, czarownica i stara szafa</td><td>C.S. Lewis</td><td>Rodzeństwo Pevensie (Piotr, Zuzanna, Edmund, Łucja) przez szafę trafia do Narnii, w której Biała Czarownica sprawiła wieczną zimę. Edmund zdradza rodzeństwo. Lew Aslan oddaje za niego życie i zmartwychwstaje.</td></tr>
          <tr><td>Chłopcy z Placu Broni</td><td>Ferenc Molnár</td><td>Chłopcy z Budapesztu bronią swojego placu zabaw przed Czerwonymi Koszulami (wódz Feri Acz). Wodzem chłopców jest Boka. Najmłodszy, szeregowiec Nemeczek, choruje po kąpielach w zimnej wodzie i umiera. Gereb zdradza kolegów.</td></tr>
          <tr><td>Hobbit, czyli tam i z powrotem</td><td>J.R.R. Tolkien</td><td>Hobbit Bilbo Baggins wyrusza z czarodziejem Gandalfem i trzynastoma krasnoludami (wódz Thorin Dębowa Tarcza) po skarb strzeżony przez smoka Smauga w Samotnej Górze. Bilbo zdobywa pierścień od Golluma w grze w zagadki. Smoka zabija Bard.</td></tr>
        </table>
        <h3>Utwory, do których można się odwołać (nie są sprawdzane)</h3>
        <p>Kl. IV–VI: <i>Mikołajek</i>, bajki Krasickiego, mity greckie (m.in. o Prometeuszu, Syzyfie, Dedalu i Ikarze), przypowieści biblijne, legendy i baśnie, <i>Rota</i>.<br>
        Wykreślone w 2024 r., ale wolno się do nich odwoływać w latach 2025–2028, m.in.: <i>W pustyni i w puszczy</i>, <i>Katarynka</i>, treny I i V, <i>Żona modna</i>, <i>Śmierć Pułkownika</i>, pozostałe księgi <i>Pana Tadeusza</i>.</p>
      `,
      flashcards: [
        ['Adaś Niezgódka', 'Narrator „Akademii Pana Kleksa”'],
        ['Szpak Mateusz', 'Zaczarowany książę („Akademia Pana Kleksa”)'],
        ['Aslan', 'Lew – prawowity władca Narnii, oddaje życie za Edmunda'],
        ['Nemeczek', 'Najmłodszy z „Chłopców z Placu Broni”, umiera na końcu powieści'],
        ['Boka', 'Wódz chłopców z Placu Broni'],
        ['Feri Acz', 'Wódz Czerwonych Koszul'],
        ['Smaug', 'Smok z „Hobbita”'],
        ['Thorin Dębowa Tarcza', 'Wódz krasnoludów z „Hobbita”'],
        ['Mirmiłowo', 'Gród Kajka i Kokosza'],
      ],
      questions: [
        { q: 'Kto jest narratorem „Akademii Pana Kleksa”?', options: ['Adaś Niezgódka', 'Pan Kleks', 'Szpak Mateusz', 'Filip golibroda'], answer: 0 },
        { q: 'Jaki warunek musieli spełnić uczniowie Akademii Pana Kleksa?', options: ['mieć imię na literę A', 'umieć latać', 'mieszkać w Paryżu', 'mieć rude włosy'], answer: 0 },
        { q: 'Kto zdradził rodzeństwo w „Opowieściach z Narnii”?', options: ['Piotr', 'Edmund', 'Łucja', 'Zuzanna'], answer: 1 },
        { q: 'Co Biała Czarownica zrobiła z Narnią?', options: ['zatopiła ją', 'sprawiła, że panuje wieczna zima', 'spaliła lasy', 'zamieniła w pustynię'], answer: 1 },
        { q: 'Jak kończy się „Chłopcy z Placu Broni”?', options: ['chłopcy przegrywają bitwę', 'Nemeczek umiera, a plac ma zostać zabudowany', 'Boka wyjeżdża do Ameryki', 'Czerwone Koszule przejmują plac'], answer: 1 },
        { q: 'Kim był Feri Acz?', options: ['wodzem Czerwonych Koszul', 'nauczycielem chłopców', 'stróżem placu', 'bratem Nemeczka'], answer: 0 },
        { q: 'Od kogo Bilbo zdobył pierścień w „Hobbicie”?', options: ['od Gandalfa', 'od Smauga', 'od Golluma', 'od Thorina'], answer: 2, explain: 'Bilbo znalazł pierścień w jaskini i przechytrzył Golluma w grze w zagadki.' },
        { q: 'Kto zabił smoka Smauga?', options: ['Bilbo', 'Thorin', 'Bard', 'Gandalf'], answer: 2 },
        { q: 'Jakim tekstem kultury jest „Kajko i Kokosz. Szkoła latania”?', options: ['komiksem', 'baśnią w wierszu', 'dramatem', 'filmem'], answer: 0 },
      ],
    },
    {
      id: 'czesci-mowy',
      name: 'Części mowy i imiesłowy',
      basis: 'Podstawa programowa, klasy VII–VIII: kształcenie językowe (gramatyka – części mowy, imiesłowy; ortografia „nie”).',
      theory: `
        <h3>Części mowy</h3>
        <table>
          <tr><th>Odmienne</th><th>Nieodmienne</th></tr>
          <tr><td>rzeczownik, czasownik, przymiotnik, liczebnik, zaimek</td><td>przysłówek, przyimek, spójnik, partykuła, wykrzyknik</td></tr>
        </table>
        <h3>Imiesłowy</h3>
        <table>
          <tr><th>Rodzaj</th><th>Zakończenie</th><th>Przykład</th></tr>
          <tr><td>przymiotnikowy czynny</td><td>-ący</td><td>czytający</td></tr>
          <tr><td>przymiotnikowy bierny</td><td>-ny, -ony, -ty</td><td>przeczytany, umyty</td></tr>
          <tr><td>przysłówkowy współczesny</td><td>-ąc</td><td>czytając</td></tr>
          <tr><td>przysłówkowy uprzedni</td><td>-łszy, -wszy</td><td>przeczytawszy, zjadłszy</td></tr>
        </table>
        <div class="tip">💡 Pisownia „nie”: z imiesłowami <b>przymiotnikowymi razem</b> (niepalący), z <b>przysłówkowymi osobno</b> (nie czytając).</div>
        <h3>Czasownik</h3>
        <ul>
          <li><b>Tryby:</b> oznajmujący (czytam), rozkazujący (czytaj!), przypuszczający (czytałbym).</li>
          <li><b>Strony:</b> czynna (Ania napisała list), bierna (List został napisany przez Anię).</li>
          <li><b>Aspekt:</b> niedokonany (pisać), dokonany (napisać).</li>
        </ul>
      `,
      flashcards: [
        ['czytający', 'imiesłów przymiotnikowy czynny'],
        ['przeczytany', 'imiesłów przymiotnikowy bierny'],
        ['czytając', 'imiesłów przysłówkowy współczesny'],
        ['przeczytawszy', 'imiesłów przysłówkowy uprzedni'],
        ['Części mowy nieodmienne', 'przysłówek, przyimek, spójnik, partykuła, wykrzyknik'],
        ['Tryb przypuszczający', 'zrobiłbym, poszłabyś'],
      ],
      questions: [
        { q: 'Wyraz „czytając” to…', options: ['imiesłów przymiotnikowy czynny', 'imiesłów przysłówkowy współczesny', 'imiesłów przysłówkowy uprzedni', 'przysłówek'], answer: 1, explain: 'Zakończenie -ąc oznacza imiesłów przysłówkowy współczesny.' },
        { q: 'Wyraz „przeczytawszy” to…', options: ['imiesłów przysłówkowy uprzedni', 'imiesłów przymiotnikowy bierny', 'czasownik w trybie rozkazującym', 'rzeczownik'], answer: 0, explain: 'Zakończenia -wszy/-łszy tworzą imiesłów przysłówkowy uprzedni.' },
        { q: 'Wyraz „umyty” to…', options: ['imiesłów przymiotnikowy czynny', 'imiesłów przymiotnikowy bierny', 'przymiotnik', 'imiesłów przysłówkowy'], answer: 1 },
        { q: 'Która część mowy jest NIEODMIENNA?', options: ['zaimek', 'liczebnik', 'przyimek', 'przymiotnik'], answer: 2 },
        { q: 'Który zapis jest poprawny?', options: ['nie palący', 'niepalący', 'nie-palący', 'niepalac'], answer: 1, explain: '„Nie” z imiesłowami przymiotnikowymi piszemy łącznie.' },
        { q: 'Który zapis jest poprawny?', options: ['niewiedząc', 'nie wiedząc', 'nie-wiedząc', 'niewiedzac'], answer: 1, explain: '„Nie” z imiesłowami przysłówkowymi piszemy osobno.' },
        { q: 'W jakim trybie jest czasownik „poszedłbym”?', options: ['oznajmującym', 'rozkazującym', 'przypuszczającym', 'bezokoliczniku'], answer: 2 },
        { q: 'Które zdanie jest w stronie biernej?', options: ['Ania napisała list.', 'List został napisany przez Anię.', 'Ania pisze list.', 'Ania napisze list.'], answer: 1 },
        { q: 'Wyraz „trzeci” to liczebnik…', options: ['główny', 'porządkowy', 'zbiorowy', 'ułamkowy'], answer: 1 },
        { q: 'Jaką częścią mowy jest wyraz „szybko”?', options: ['przymiotnik', 'przysłówek', 'imiesłów', 'partykuła'], answer: 1, explain: 'Przysłówek określa czasownik i odpowiada na pytanie „jak?”.' },
      ],
    },
    {
      id: 'skladnia',
      name: 'Składnia – zdania złożone',
      basis: 'Podstawa programowa, klasy VII–VIII: kształcenie językowe (składnia – zdania złożone, wypowiedzenia, interpunkcja).',
      theory: `
        <h3>Wypowiedzenia</h3>
        <ul>
          <li><b>Zdanie</b> – ma osobową formę czasownika (orzeczenie): „Pada deszcz.”</li>
          <li><b>Równoważnik zdania</b> – nie ma osobowej formy czasownika: „Cisza w lesie.”, „Zakaz wjazdu.”</li>
        </ul>
        <h3>Części zdania</h3>
        <p>podmiot (kto? co?) · orzeczenie (co robi?) · przydawka (jaki? czyj? który?) · dopełnienie (pytania przypadków poza mianownikiem) · okolicznik (gdzie? kiedy? jak? dlaczego?)</p>
        <h3>Zdania złożone współrzędnie</h3>
        <table>
          <tr><th>Rodzaj</th><th>Spójniki</th><th>Przykład</th></tr>
          <tr><td>łączne</td><td>i, oraz, a, ani, ni</td><td>Poszedłem do sklepu i kupiłem chleb.</td></tr>
          <tr><td>rozłączne</td><td>lub, albo, czy</td><td>Pójdziesz do kina czy zostaniesz w domu?</td></tr>
          <tr><td>przeciwstawne</td><td>ale, lecz, a, jednak, natomiast</td><td>Chciałem przyjść, ale zachorowałem.</td></tr>
          <tr><td>wynikowe</td><td>więc, zatem, dlatego, toteż</td><td>Padało, więc zostaliśmy w domu.</td></tr>
        </table>
        <h3>Zdania złożone podrzędnie</h3>
        <table>
          <tr><th>Rodzaj</th><th>Pytanie</th><th>Przykład</th></tr>
          <tr><td>podmiotowe</td><td>kto? co?</td><td>Kto pyta, nie błądzi.</td></tr>
          <tr><td>orzecznikowe</td><td>kim jest? czym jest? jaki jest?</td><td>Był taki, jakim go zapamiętałem.</td></tr>
          <tr><td>przydawkowe</td><td>jaki? który? czyj?</td><td>Kupiłem książkę, która mi się podobała.</td></tr>
          <tr><td>dopełnieniowe</td><td>kogo? czego? co? o czym?…</td><td>Wiem, że masz rację.</td></tr>
          <tr><td>okolicznikowe</td><td>gdzie? kiedy? dlaczego? jak? w jakim celu? pod jakim warunkiem?</td><td>Kiedy wróciłem, wszyscy spali.</td></tr>
        </table>
        <div class="tip">💡 Przecinek stawiamy przed: <i>że, który, ponieważ, ale, lecz, więc, dlatego</i>. Nie stawiamy go przed pojedynczym <i>i, oraz, lub, albo</i>.</div>
      `,
      flashcards: [
        ['Równoważnik zdania', 'Wypowiedzenie bez osobowej formy czasownika, np. „Cisza w lesie.”'],
        ['Spójniki zdań przeciwstawnych', 'ale, lecz, a, jednak, natomiast'],
        ['Spójniki zdań wynikowych', 'więc, zatem, dlatego, toteż'],
        ['Zdanie przydawkowe – pytanie', 'jaki? który? czyj?'],
        ['Przydawka', 'Określa rzeczownik: jaki? czyj? który?'],
        ['Okolicznik', 'gdzie? kiedy? jak? dlaczego? w jakim celu?'],
      ],
      questions: [
        { q: 'Które wypowiedzenie jest równoważnikiem zdania?', options: ['Pada deszcz.', 'Cisza w lesie.', 'Kot śpi.', 'Idziemy do domu.'], answer: 1, explain: 'Nie ma w nim osobowej formy czasownika.' },
        { q: '„Poszedłem do sklepu i kupiłem chleb.” – to zdanie złożone współrzędnie…', options: ['łączne', 'rozłączne', 'przeciwstawne', 'wynikowe'], answer: 0 },
        { q: '„Chciałem przyjść, ale zachorowałem.” – to zdanie złożone współrzędnie…', options: ['łączne', 'rozłączne', 'przeciwstawne', 'wynikowe'], answer: 2 },
        { q: '„Padał deszcz, więc zostaliśmy w domu.” – to zdanie złożone współrzędnie…', options: ['łączne', 'wynikowe', 'rozłączne', 'przeciwstawne'], answer: 1 },
        { q: '„Wiem, że masz rację.” – jakie to zdanie podrzędne?', options: ['przydawkowe', 'dopełnieniowe', 'okolicznikowe czasu', 'podmiotowe'], answer: 1, explain: 'Wiem co? – że masz rację. Pytanie przypadka zależnego wskazuje na dopełnienie.' },
        { q: '„Kupiłem książkę, która mi się podobała.” – jakie to zdanie podrzędne?', options: ['przydawkowe', 'dopełnieniowe', 'okolicznikowe miejsca', 'orzecznikowe'], answer: 0, explain: 'Książkę jaką? którą? – która mi się podobała.' },
        { q: '„Kiedy wróciłem, wszyscy spali.” – jakie to zdanie podrzędne?', options: ['okolicznikowe czasu', 'okolicznikowe przyczyny', 'przydawkowe', 'podmiotowe'], answer: 0 },
        { q: '„Zostałem w domu, ponieważ byłem chory.” – jakie to zdanie podrzędne?', options: ['okolicznikowe celu', 'okolicznikowe przyczyny', 'okolicznikowe warunku', 'dopełnieniowe'], answer: 1, explain: 'Dlaczego zostałem? – ponieważ byłem chory.' },
        { q: '„Mój brat czyta ciekawą książkę.” – jaką częścią zdania jest wyraz „ciekawą”?', options: ['dopełnieniem', 'przydawką', 'okolicznikiem', 'orzeczeniem'], answer: 1 },
        { q: 'W którym zdaniu przecinek postawiono poprawnie?', options: ['Kupiłem jabłka, i gruszki.', 'Myślę, że jutro będzie ładnie.', 'Pójdę do kina, lub do teatru.', 'Mój, brat jest wysoki.'], answer: 1, explain: 'Przed „że” zawsze stawiamy przecinek. Przed pojedynczym „i” oraz „lub” – nie.' },
      ],
    },
    {
      id: 'slowotworstwo',
      name: 'Słowotwórstwo',
      basis: 'Podstawa programowa, klasy VII–VIII: kształcenie językowe (słowotwórstwo – budowa wyrazu, rodzina wyrazów).',
      theory: `
        <h3>Podstawowe pojęcia</h3>
        <ul>
          <li><b>Wyraz podstawowy</b> – wyraz, od którego tworzymy nowy (dom).</li>
          <li><b>Wyraz pochodny</b> – wyraz utworzony od innego (domek).</li>
          <li><b>Podstawa słowotwórcza</b> – część wyrazu pochodnego wspólna z wyrazem podstawowym (dom-).</li>
          <li><b>Formant</b> – cząstka, która tworzy nowy wyraz (-ek).</li>
          <li><b>Rdzeń</b> – wspólna część wszystkich wyrazów w rodzinie.</li>
          <li><b>Rodzina wyrazów</b> – wyrazy o wspólnym rdzeniu (las, lasek, leśnik, zalesić).</li>
        </ul>
        <h3>Rodzaje formantów</h3>
        <table>
          <tr><th>Formant</th><th>Gdzie?</th><th>Przykład</th></tr>
          <tr><td>przedrostek</td><td>przed podstawą</td><td><b>prze</b>pisać</td></tr>
          <tr><td>przyrostek</td><td>po podstawie</td><td>dom<b>ek</b></td></tr>
          <tr><td>przedrostek + przyrostek</td><td>przed i po</td><td><b>pod</b>okien<b>nik</b></td></tr>
        </table>
        <h3>Wyrazy złożone</h3>
        <ul>
          <li><b>złożenie</b> – połączone wrostkiem -o-, -i-, -y-: długopis, językoznawca</li>
          <li><b>zrost</b> – zrośnięte wyrazy bez zmian: Wielkanoc, dobranoc</li>
          <li><b>zestawienie</b> – kilka osobnych wyrazów o jednym znaczeniu: maszyna do szycia</li>
        </ul>
      `,
      flashcards: [
        ['Formant', 'Cząstka tworząca nowy wyraz (przedrostek, przyrostek)'],
        ['Podstawa słowotwórcza', 'Część wyrazu pochodnego wspólna z wyrazem podstawowym'],
        ['Rodzina wyrazów', 'Wyrazy o wspólnym rdzeniu'],
        ['Złożenie', 'Wyrazy połączone wrostkiem, np. długopis'],
        ['Zrost', 'Wyrazy zrośnięte bez zmian, np. Wielkanoc'],
        ['Zestawienie', 'Kilka wyrazów o jednym znaczeniu, np. maszyna do szycia'],
      ],
      questions: [
        { q: 'Jaki jest wyraz podstawowy dla wyrazu „domek”?', options: ['domowy', 'dom', 'domownik', 'domek'], answer: 1 },
        { q: 'Jaki formant występuje w wyrazie „przepisać”?', options: ['przyrostek', 'przedrostek', 'wrostek', 'końcówka'], answer: 1, explain: 'Cząstka „prze-” stoi przed podstawą – to przedrostek.' },
        { q: 'Który wyraz NIE należy do rodziny wyrazu „las”?', options: ['leśniczy', 'lasek', 'lis', 'zalesić'], answer: 2, explain: '„Lis” nie ma wspólnego rdzenia z „las” – to inny wyraz.' },
        { q: 'Wyraz „długopis” to…', options: ['złożenie', 'zrost', 'zestawienie', 'zdrobnienie'], answer: 0, explain: 'Połączono „długi” i „pisać” wrostkiem „-o-”.' },
        { q: 'Wyraz „Wielkanoc” to…', options: ['złożenie', 'zrost', 'zestawienie', 'skrótowiec'], answer: 1 },
        { q: '„Maszyna do szycia” to…', options: ['złożenie', 'zrost', 'zestawienie', 'wyraz podstawowy'], answer: 2 },
        { q: 'Jaką funkcję pełni formant „-ek” w wyrazie „kotek”?', options: ['tworzy nazwę wykonawcy czynności', 'tworzy zdrobnienie', 'tworzy zgrubienie', 'tworzy nazwę miejsca'], answer: 1 },
        { q: 'Co to jest podstawa słowotwórcza wyrazu „piekarz”?', options: ['piek-', '-arz', 'piekarz', 'piec'], answer: 0, explain: 'Podstawa to część wspólna z wyrazem podstawowym (piec → piek-); „-arz” to formant.' },
      ],
    },
    {
      id: 'frazeologia',
      name: 'Frazeologizmy i znaczenie wyrazów',
      basis: 'Podstawa programowa, kształcenie językowe (wymagania przywoływane w zadaniach informatora CKE): rozpoznaje związki frazeologiczne i rozumie ich znaczenie; rozróżnia synonimy, antonimy, homonimy; rozróżnia treść i zakres znaczeniowy wyrazu; rozpoznaje słownictwo neutralne i wartościujące; rozumie znaczenie dosłowne i przenośne.',
      theory: `
        <h3>Związki frazeologiczne</h3>
        <p>To utrwalone połączenia wyrazów o znaczeniu przenośnym – nie można ich rozumieć dosłownie.</p>
        <table>
          <tr><th>Frazeologizm</th><th>Znaczenie</th></tr>
          <tr><td>mieć muchy w nosie</td><td>być w złym humorze, obrażonym</td></tr>
          <tr><td>obiecywać gruszki na wierzbie</td><td>obiecywać coś niemożliwego</td></tr>
          <tr><td>drzeć z kimś koty</td><td>kłócić się z kimś</td></tr>
          <tr><td>wziąć nogi za pas</td><td>uciec</td></tr>
          <tr><td>pójść po rozum do głowy</td><td>zastanowić się, zmądrzeć</td></tr>
          <tr><td>trzymać język za zębami</td><td>nie zdradzić tajemnicy</td></tr>
          <tr><td>syzyfowa praca</td><td>daremny, bezskuteczny trud (mit o Syzyfie)</td></tr>
          <tr><td>pięta achillesowa</td><td>czyjś słaby punkt</td></tr>
          <tr><td>puszka Pandory</td><td>źródło nieszczęść</td></tr>
          <tr><td>nić Ariadny</td><td>sposób wyjścia z trudnej sytuacji</td></tr>
        </table>
        <h3>Relacje między wyrazami</h3>
        <ul>
          <li><b>Synonimy</b> – wyrazy bliskoznaczne: <i>mądry – inteligentny</i></li>
          <li><b>Antonimy</b> – wyrazy przeciwstawne: <i>wesoły – smutny</i></li>
          <li><b>Homonimy</b> – wyrazy o tym samym brzmieniu i różnych znaczeniach: <i>zamek</i> (budowla, w drzwiach, błyskawiczny)</li>
        </ul>
        <h3>Treść i zakres wyrazu</h3>
        <p><b>Treść</b> – zbiór cech, które przypisujemy temu, co nazywa wyraz. <b>Zakres</b> – zbiór wszystkich rzeczy, które można nazwać tym wyrazem. Im <b>bogatsza treść</b>, tym <b>węższy zakres</b>: <i>pies</i> ma szerszy zakres niż <i>jamnik</i>, ale <i>jamnik</i> ma bogatszą treść.</p>
        <h3>Inne pojęcia</h3>
        <ul>
          <li><b>Słownictwo neutralne i wartościujące</b>: <i>pies</i> (neutralne) – <i>piesek</i> (pozytywne) – <i>kundel</i> (negatywne).</li>
          <li><b>Archaizmy</b> – wyrazy dawne, dziś nieużywane: <i>białogłowa</i> (kobieta), <i>azali</i> (czy).</li>
          <li><b>Neologizmy</b> – wyrazy nowo utworzone, np. przez pisarza.</li>
          <li><b>Zapożyczenia</b> – wyrazy przejęte z innych języków: <i>komputer, weekend</i>.</li>
        </ul>
      `,
      flashcards: [
        ['mieć muchy w nosie', 'być w złym humorze'],
        ['obiecywać gruszki na wierzbie', 'obiecywać coś niemożliwego'],
        ['drzeć z kimś koty', 'kłócić się'],
        ['wziąć nogi za pas', 'uciec'],
        ['syzyfowa praca', 'daremny trud'],
        ['pięta achillesowa', 'słaby punkt'],
        ['puszka Pandory', 'źródło nieszczęść'],
        ['nić Ariadny', 'sposób wyjścia z trudnej sytuacji'],
        ['Homonimy', 'Wyrazy o tym samym brzmieniu i różnych znaczeniach'],
        ['Treść a zakres', 'Bogatsza treść = węższy zakres'],
      ],
      questions: [
        { q: 'Co znaczy frazeologizm „drzeć z kimś koty”?', options: ['opiekować się zwierzętami', 'kłócić się z kimś', 'bawić się z kimś', 'uciekać przed kimś'], answer: 1 },
        { q: 'Co znaczy „obiecywać gruszki na wierzbie”?', options: ['obiecywać coś niemożliwego', 'zachęcać do pracy w ogrodzie', 'dotrzymywać obietnic', 'mówić prawdę'], answer: 0 },
        { q: 'Co znaczy „syzyfowa praca”?', options: ['praca dobrze opłacana', 'daremny, bezskuteczny trud', 'praca zespołowa', 'praca w ogrodzie'], answer: 1, explain: 'Syzyf za karę wtaczał na górę głaz, który zawsze staczał się w dół.' },
        { q: 'Co znaczy „pięta achillesowa”?', options: ['czyjś słaby punkt', 'szybki bieg', 'odwaga', 'kontuzja nogi'], answer: 0 },
        { q: 'Który związek frazeologiczny znaczy „uciec”?', options: ['mieć muchy w nosie', 'wziąć nogi za pas', 'pójść po rozum do głowy', 'trzymać język za zębami'], answer: 1 },
        { q: 'Wyraz „zamek” (budowla, zamek w drzwiach, zamek błyskawiczny) to przykład…', options: ['synonimu', 'antonimu', 'homonimu', 'archaizmu'], answer: 2 },
        { q: 'Który wyraz ma węższy zakres znaczeniowy?', options: ['zwierzę', 'pies', 'jamnik', 'ssak'], answer: 2, explain: 'Jamnik ma najbogatszą treść (najwięcej cech), więc najwęższy zakres.' },
        { q: 'Który wyraz jest nacechowany negatywnie?', options: ['pies', 'piesek', 'kundel', 'psina'], answer: 2 },
        { q: 'Wyraz „białogłowa” (kobieta) to…', options: ['neologizm', 'archaizm', 'zapożyczenie', 'zdrobnienie'], answer: 1 },
        { q: 'Synonimem wyrazu „mądry” jest…', options: ['głupi', 'inteligentny', 'wysoki', 'smutny'], answer: 1 },
      ],
    },
    {
      id: 'rodzaje-literackie',
      name: 'Rodzaje i gatunki literackie',
      basis: 'Podstawa programowa, klasy VII–VIII: kształcenie literackie i kulturowe (rozpoznawanie rodzajów i gatunków).',
      theory: `
        <table>
          <tr><th>Rodzaj</th><th>Cechy</th><th>Gatunki</th></tr>
          <tr><td><b>Epika</b></td><td>narrator, fabuła, świat przedstawiony, zwykle proza</td><td>powieść, nowela, opowiadanie, baśń, legenda, mit, epopeja</td></tr>
          <tr><td><b>Liryka</b></td><td>podmiot liryczny, wyrażanie uczuć i przeżyć, zwykle wiersz</td><td>fraszka, tren, hymn, pieśń, sonet</td></tr>
          <tr><td><b>Dramat</b></td><td>przeznaczony do wystawienia na scenie, dialogi (tekst główny), didaskalia (tekst poboczny), podział na akty i sceny</td><td>komedia, tragedia, dramat romantyczny</td></tr>
        </table>
        <div class="tip">💡 <b>Ballada</b> łączy cechy liryki, epiki i dramatu (to tzw. synkretyzm rodzajowy), np. „Świtezianka”.</div>
        <h3>Ważne gatunki</h3>
        <ul>
          <li><b>Nowela</b> – krótki utwór prozatorski, jeden wątek, wyraźny punkt kulminacyjny, często puenta („Latarnik”).</li>
          <li><b>Epopeja</b> – obszerny utwór pokazujący losy zbiorowości na tle przełomowych wydarzeń („Pan Tadeusz”).</li>
          <li><b>Komedia</b> – utwór dramatyczny ze szczęśliwym zakończeniem, wyśmiewa ludzkie wady („Zemsta”).</li>
          <li><b>Tragedia</b> – utwór dramatyczny o bohaterze uwikłanym w konflikt, który kończy się jego klęską („Balladyna”).</li>
          <li><b>Powieść historyczna</b> – akcja osadzona w przeszłości, obok postaci fikcyjnych występują historyczne („Quo vadis”).</li>
          <li><b>Fraszka</b> – krótki, żartobliwy lub refleksyjny utwór zakończony puentą.</li>
          <li><b>Tren</b> – utwór żałobny po śmierci kogoś bliskiego.</li>
        </ul>
        <h3>Komizm w komedii</h3>
        <p><b>sytuacyjny</b> (zabawne sytuacje), <b>słowny</b> (zabawny język), <b>postaci</b> (śmieszne zachowanie, wygląd).</p>
      `,
      flashcards: [
        ['Didaskalia', 'Tekst poboczny w dramacie – wskazówki dla aktorów i reżysera'],
        ['Podmiot liryczny', '„Ja” mówiące w utworze lirycznym (to nie zawsze autor!)'],
        ['Narrator', 'Osoba opowiadająca w utworze epickim'],
        ['Synkretyzm rodzajowy', 'Łączenie cech epiki, liryki i dramatu (np. ballada)'],
        ['Nowela', 'Krótka proza, jeden wątek, punkt kulminacyjny'],
        ['Epopeja', 'Obszerny utwór o losach zbiorowości, np. „Pan Tadeusz”'],
      ],
      questions: [
        { q: 'Jak nazywa się tekst poboczny w dramacie (wskazówki dla aktorów)?', options: ['didaskalia', 'monolog', 'prolog', 'puenta'], answer: 0 },
        { q: 'Kto „mówi” w utworze lirycznym?', options: ['narrator', 'podmiot liryczny', 'bohater zbiorowy', 'autor zawsze osobiście'], answer: 1 },
        { q: 'Który gatunek łączy cechy liryki, epiki i dramatu?', options: ['nowela', 'ballada', 'fraszka', 'komedia'], answer: 1 },
        { q: 'Do jakiego gatunku należy „Pan Tadeusz”?', options: ['nowela', 'komedia', 'epopeja', 'tren'], answer: 2 },
        { q: 'Do jakiego rodzaju literackiego należy „Balladyna”?', options: ['epika', 'liryka', 'dramat', 'żadnego'], answer: 2 },
        { q: '„Zemsta” to…', options: ['tragedia', 'komedia', 'epopeja', 'powieść'], answer: 1 },
        { q: 'Utwór żałobny po śmierci bliskiej osoby to…', options: ['hymn', 'fraszka', 'tren', 'oda'], answer: 2 },
        { q: 'Narrator pierwszoosobowy…', options: ['opowiada o sobie i uczestniczy w wydarzeniach', 'nigdy nie występuje w powieści', 'wie wszystko o wszystkich bohaterach', 'mówi tylko w dramacie'], answer: 0 },
        { q: 'Komizm sytuacyjny polega na…', options: ['zabawnym języku postaci', 'śmiesznych zdarzeniach i sytuacjach', 'śmiesznym wyglądzie postaci', 'rymach'], answer: 1 },
        { q: '„Quo vadis” to powieść…', options: ['fantastyczna', 'historyczna', 'detektywistyczna', 'przygodowa o piratach'], answer: 1 },
      ],
    },
    {
      id: 'formy-wypowiedzi',
      name: 'Egzamin i wypracowanie',
      basis: 'Informator CKE o egzaminie ósmoklasisty z języka polskiego od r. szk. 2024/2025: opis arkusza i kryteria oceniania wypracowania.',
      theory: `
        <h3>Jak wygląda arkusz (150 minut, 45 punktów)</h3>
        <ul>
          <li><b>Część I</b> – ok. 20 zadań do dwóch tekstów: literackiego i nieliterackiego (naukowego, popularnonaukowego albo publicystycznego), razem do 1000 wyrazów. <b>25 pkt</b>, ok. połowa za zadania otwarte.</li>
          <li><b>Część II</b> – wypracowanie: wybierasz <b>jeden z dwóch tematów</b> – twórczy (<b>opowiadanie</b>) albo argumentacyjny (<b>rozprawka</b> lub <b>przemówienie</b>). Co najmniej <b>200 wyrazów</b>. <b>20 pkt</b>.</li>
        </ul>
        <h3>Kryteria oceny wypracowania (20 pkt)</h3>
        <table>
          <tr><th>Kryterium</th><th>Pkt</th></tr>
          <tr><td>1. Realizacja tematu (forma zgodna z poleceniem, odwołanie do wskazanej lektury, całość na temat)</td><td>0–2</td></tr>
          <tr><td>2. Elementy twórcze (opowiadanie) / elementy retoryczne (rozprawka, przemówienie)</td><td>0–5</td></tr>
          <tr><td>3. Kompetencje literackie i kulturowe (funkcjonalne wykorzystanie lektury)</td><td>0–2</td></tr>
          <tr><td>4. Kompozycja</td><td>0–2</td></tr>
          <tr><td>5. Styl</td><td>0–2</td></tr>
          <tr><td>6. Język (zakres środków i liczba błędów)</td><td>0–4</td></tr>
          <tr><td>7. Ortografia (maks. 1 błąd = 2 pkt)</td><td>0–2</td></tr>
          <tr><td>8. Interpunkcja (maks. 9 błędów = 1 pkt)</td><td>0–1</td></tr>
        </table>
        <div class="tip">⚠️ Pułapki, za które tracisz wszystko:<br>
        • <b>0 pkt w kryterium 1</b> (np. zła forma – rozprawka zamiast opowiadania) = 0 pkt za całą pracę.<br>
        • <b>Brak odwołania do lektury wskazanej w poleceniu</b> = 0 pkt za całą pracę.<br>
        • Praca <b>180 wyrazów lub krótsza</b> jest oceniana tylko w kryteriach 1–3.<br>
        • Komiks, manga, gra komputerowa ani scenariusz filmowy nie liczą się jako utwór literacki w wypracowaniu.</div>
        <h3>Opowiadanie – elementy twórcze</h3>
        <p>Na 5 pkt trzeba funkcjonalnie wykorzystać <b>co najmniej 6</b> z elementów: opis, charakterystyka bohatera, czas akcji, miejsce akcji, zwrot akcji, puenta, punkt kulminacyjny, dialog, monolog, retrospekcja. Narracja musi być konsekwentna, a zdarzenia ułożone logicznie. Treść lektury wykorzystaj twórczo.</p>
        <h3>Rozprawka i przemówienie – elementy retoryczne</h3>
        <p>Na 5 pkt: pogłębiona argumentacja, argumenty odwołujące się np. do faktów, logiki, emocji, zilustrowane przykładami, <b>uporządkowane</b> (np. od najważniejszego albo w układzie argument – kontrargument).</p>
        <ul>
          <li><b>Rozprawka</b>: wstęp z tezą lub hipotezą → argumenty z przykładami (każdy w osobnym akapicie) → zakończenie z podsumowaniem.</li>
          <li><b>Przemówienie</b>: zwrot do słuchaczy na początku („Drodzy koledzy i koleżanki!”), argumenty z przykładami, zwroty do słuchaczy w trakcie, pytania retoryczne, apel na końcu, podziękowanie za uwagę.</li>
        </ul>
        <p>Pamiętaj: <b>przykład to nie argument</b>. Argument uzasadnia tezę, a przykład (np. z lektury) go ilustruje.</p>
      `,
      flashcards: [
        ['Czas egzaminu z polskiego', '150 minut'],
        ['Punkty: część I / wypracowanie', '25 pkt / 20 pkt (razem 45)'],
        ['Minimalna długość wypracowania', '200 wyrazów'],
        ['Formy wypracowania', 'opowiadanie albo rozprawka / przemówienie'],
        ['Ile elementów twórczych na 5 pkt?', 'Co najmniej 6 (np. dialog, opis, zwrot akcji, puenta…)'],
        ['Brak odwołania do lektury', '0 pkt za całe wypracowanie'],
        ['Teza', 'Stanowisko, które udowadniasz'],
        ['Hipoteza', 'Przypuszczenie, które sprawdzasz'],
      ],
      questions: [
        { q: 'Ile wyrazów musi mieć co najmniej wypracowanie na egzaminie ósmoklasisty?', options: ['100', '150', '200', '400'], answer: 2 },
        { q: 'Co się stanie, jeśli w wypracowaniu w ogóle nie odwołasz się do lektury wskazanej w poleceniu?', options: ['stracisz 1 punkt', 'praca dostanie 0 punktów', 'nic, liczy się styl', 'stracisz punkty tylko za kompozycję'], answer: 1 },
        { q: 'Ile elementów (np. dialog, opis, zwrot akcji, puenta) trzeba funkcjonalnie wykorzystać w opowiadaniu, aby dostać 5 pkt za elementy twórcze?', options: ['co najmniej 2', 'co najmniej 4', 'co najmniej 6', 'wszystkie 10'], answer: 2 },
        { q: 'Ile punktów można zdobyć za wypracowanie?', options: ['10', '20', '25', '45'], answer: 1 },
        { q: 'Który element jest typowy dla przemówienia, a nie dla rozprawki?', options: ['teza', 'argumenty', 'zwroty do słuchaczy', 'zakończenie'], answer: 2 },
        { q: 'Czym różni się argument od przykładu?', options: ['niczym', 'argument uzasadnia tezę, a przykład go ilustruje', 'przykład jest zawsze dłuższy', 'argument musi być cytatem'], answer: 1 },
        { q: 'Która praca NIE zostanie uznana za utwór literacki w wypracowaniu?', options: ['nowela', 'gra komputerowa', 'ballada', 'powieść'], answer: 1 },
        { q: 'Praca ma 170 wyrazów. Co z tego wynika?', options: ['jest oceniana normalnie', 'jest oceniana tylko w kryteriach realizacji tematu, elementów twórczych/retorycznych i kompetencji literackich', 'dostaje dodatkowe punkty za zwięzłość', 'nie ma to znaczenia'], answer: 1 },
        { q: 'Jak zapisujemy dialog w opowiadaniu?', options: ['w nawiasach', 'każdą wypowiedź od nowej linii, od myślnika', 'drukowanymi literami', 'bez znaków interpunkcyjnych'], answer: 1 },
        { q: 'Jak może być uporządkowana argumentacja w rozprawce?', options: ['losowo', 'od najważniejszego argumentu albo w układzie argument – kontrargument', 'alfabetycznie', 'od najkrótszego'], answer: 1 },
      ],
    },
  ],
});
