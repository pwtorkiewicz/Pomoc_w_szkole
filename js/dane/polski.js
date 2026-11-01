/* Język polski – klasa 8
 * Format pytania: { id: 'stały-unikalny-id', q: 'treść', options: ['...'], answer: indeks_poprawnej, explain: 'wyjaśnienie' }
 * id: losowy, nigdy go nie zmieniaj (powtórka błędów zapamiętuje pytania po id). Nowe pytanie = nowe id (node tools/nowe-id.js).
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
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kształcenie literackie: rozpoznawanie środków stylistycznych i określanie ich funkcji (wymaganie przywoływane w zadaniach informatora CKE).',
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
        { id: 'trikdy', q: 'Jaki środek stylistyczny zastosowano w wyrażeniu „złote słońce”?', options: ['epitet', 'porównanie', 'onomatopeja', 'apostrofa'], answer: 0, explain: 'Przymiotnik „złote” określa rzeczownik „słońce” – to epitet.' },
        { id: 'ghe8sj', q: '„Jej oczy błyszczały jak gwiazdy.” – jaki to środek?', options: ['metafora', 'porównanie', 'hiperbola', 'uosobienie'], answer: 1, explain: 'Słowo „jak” łączy dwie zestawiane rzeczy – to porównanie.' },
        { id: '1ya01r', q: '„Wiatr śpiewał smutną piosenkę.” – jaki to środek?', options: ['uosobienie', 'epitet', 'oksymoron', 'wyliczenie'], answer: 0, explain: 'Śpiewanie to czynność ludzka nadana zjawisku przyrody – uosobienie (personifikacja).' },
        { id: 'kei0yf', q: '„Chmury biegły po niebie.” – jaki to środek?', options: ['apostrofa', 'ożywienie', 'onomatopeja', 'porównanie'], answer: 1, explain: 'Chmurom nadano cechę istoty żywej (ruch, bieg) – ożywienie (animizacja).' },
        { id: 'td7uck', q: '„Litwo! Ojczyzno moja!” – jaki środek stylistyczny otwiera „Pana Tadeusza”?', options: ['pytanie retoryczne', 'hiperbola', 'apostrofa', 'oksymoron'], answer: 2, explain: 'Poeta zwraca się bezpośrednio i uroczyście do ojczyzny – to apostrofa.' },
        { id: 'xgo6e2', q: 'Który przykład to oksymoron?', options: ['zimny wiatr', 'gorący lód', 'szybki jak strzała', 'trzask, prask'], answer: 1, explain: 'Oksymoron łączy wyrazy o przeciwnym znaczeniu: „gorący” i „lód”.' },
        { id: 'z17oty', q: '„Mówiłem ci to już milion razy!” – jaki to środek?', options: ['hiperbola', 'epitet', 'anafora', 'ożywienie'], answer: 0, explain: 'To celowa przesada – hiperbola.' },
        { id: 'f2f7on', q: 'Wyrazy „plum”, „szelest”, „kukułka kuka” to przykłady…', options: ['wyliczenia', 'onomatopei', 'metafor', 'zdrobnień'], answer: 1, explain: 'Wyrazy naśladujące dźwięki to onomatopeje (wyrazy dźwiękonaśladowcze).' },
        { id: 'kmda94', q: 'Powtórzenie tego samego słowa na początku kolejnych wersów to…', options: ['anafora', 'apostrofa', 'epitet', 'puenta'], answer: 0 },
        { id: '4t934o', q: 'Jaką funkcję najczęściej pełni pytanie retoryczne?', options: ['podaje dokładną informację', 'skłania odbiorcę do refleksji', 'naśladuje dźwięki', 'opisuje wygląd postaci'], answer: 1, explain: 'Na pytanie retoryczne nie oczekuje się odpowiedzi – ma pobudzić do zastanowienia się.' },
        { id: 'avs3fe', q: '„Szu, szu – szumiały liście.” – czym jest wyraz „szu”?', options: ['epitetem', 'onomatopeją', 'apostrofą', 'oksymoronem'], answer: 1, explain: 'Naśladuje dźwięk – to wyraz dźwiękonaśladowczy.' },
        { id: 'z4t6iy', q: 'Które wyrażenie zawiera porównanie?', options: ['biały jak śnieg', 'biały śnieg', 'śnieg skrzy się', 'zima zasypała świat'], answer: 0, explain: 'Porównanie łączy dwie rzeczy słowem „jak”, „niby”, „niczym”, „jakby”.' },
        { id: '7yhf4c', q: '„Ocean traw” to przykład…', options: ['porównania', 'onomatopei', 'metafory', 'apostrofy'], answer: 2, explain: 'Połączone słowa tworzą nowe, przenośne znaczenie – bez słowa „jak”.' },
        { id: 'kvk6av', q: 'Który wyraz jest zdrobnieniem?', options: ['słońce', 'słoneczny', 'słoneczko', 'nasłonecznienie'], answer: 2 },
        { id: 'auj4q9', q: '„W pokoju stały krzesła, stoły, szafy i łóżka.” – jaki środek zastosowano?', options: ['onomatopeję', 'apostrofę', 'oksymoron', 'wyliczenie'], answer: 3 },
        { id: '7q5mul', q: '„Słońce uśmiechało się do nas.” – jaki to środek?', options: ['uosobienie', 'porównanie', 'onomatopeja', 'apostrofa'], answer: 0, explain: 'Uśmiech to cecha człowieka nadana zjawisku przyrody.' },
        { id: 'h2le21', q: 'Czym różni się uosobienie od ożywienia?', options: ['niczym – to dwie nazwy tego samego', 'uosobienie dotyczy tylko zwierząt', 'uosobienie nadaje cechy ludzkie, a ożywienie – cechy istot żywych', 'ożywienie to uroczysty zwrot do kogoś'], answer: 2 },
        { id: '8rp34u', q: 'Jaką funkcję pełnią zdrobnienia w opisie małego dziecka?', options: ['naśladują dźwięki', 'wyrażają pogardę', 'podają dokładne dane', 'wyrażają czułość i serdeczność'], answer: 3 },
      ],
      tasks: [
        {
          id: 'o2l8s6',
          points: 2,
          q: 'Napisz dwuzdaniowy opis jesiennego parku. Użyj w nim uosobienia i porównania, a potem wskaż oba środki.',
          steps: [
            'Uosobienie: przyrodzie lub rzeczom nadajemy cechy i zachowania człowieka (np. drzewa się smucą, wiatr szepcze).',
            'Porównanie: zestawienie dwóch rzeczy za pomocą wyrazów „jak”, „jakby”, „niby”, „niczym”.',
            'W odpowiedzi zacytuj oba środki i nazwij je.',
          ],
          answer: 'Stare kasztany smutno opuszczają gałęzie i żegnają lato. Liście na alejkach leżą jak kolorowy dywan. Uosobienie: „kasztany […] żegnają lato”; porównanie: „jak kolorowy dywan”.',
          scoring: [
            '1 pkt – poprawnie użyte i wskazane uosobienie.',
            '2 pkt – poprawnie użyte i wskazane porównanie.',
          ],
        },
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
        { id: '78aeae', q: 'Kto jest autorem „Zemsty”?', options: ['Aleksander Fredro', 'Adam Mickiewicz', 'Henryk Sienkiewicz', 'Juliusz Słowacki'], answer: 0 },
        { id: 'dn4ew0', q: 'O co spierali się Cześnik i Rejent w „Zemście”?', options: ['o majątek po stryju', 'o mur graniczny w zamku', 'o rękę Klary', 'o konia'], answer: 1, explain: 'Obaj mieszkali w jednym zamku, a spór dotyczył naprawy muru granicznego.' },
        { id: 'bjhje9', q: 'Która postać „Zemsty” jest tchórzliwym samochwałą?', options: ['Wacław', 'Dyndalski', 'Papkin', 'Rejent'], answer: 2 },
        { id: '7t5af5', q: 'Ile duchów (oprócz Marleya) odwiedziło Scrooge’a w „Opowieści wigilijnej”?', options: ['jeden', 'dwa', 'trzy', 'cztery'], answer: 2, explain: 'Duch Wigilijnej Przeszłości, Duch Wigilijnej Teraźniejszości i Duch Wigilijnej Przyszłości.' },
        { id: 'mh3e2o', q: 'Dlaczego Józio i Rózia z „Dziadów cz. II” nie mogli dostać się do nieba?', options: ['bo byli okrutni', 'bo nie zaznali goryczy w życiu', 'bo nikogo nie kochali', 'bo nie mieli grobu'], answer: 1, explain: '„Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie.” – prosili o dwa ziarnka gorczycy.' },
        { id: 'yn28qs', q: 'O co prosi pasterka Zosia w „Dziadach cz. II”?', options: ['o dwa ziarnka gorczycy', 'o jedzenie i picie', 'aby młodzieńcy przyciągnęli ją do ziemi', 'o modlitwę'], answer: 2, explain: '„Kto nie dotknął ziemi ni razu, ten nigdy nie może być w niebie.” – Zosia za życia nikogo nie kochała.' },
        { id: 'nf1tar', q: 'Kto jest autorem „Balladyny”?', options: ['Adam Mickiewicz', 'Juliusz Słowacki', 'Aleksander Fredro', 'Henryk Sienkiewicz'], answer: 1 },
        { id: '6xkcf1', q: 'Jaki był warunek zakładu sióstr w „Balladynie”?', options: ['która pierwsza zbierze dzban malin, poślubi Kirkora', 'która ładniej zaśpiewa, zostanie królową', 'która znajdzie koronę, odziedziczy zamek', 'która pierwsza wróci do domu, dostanie posag'], answer: 0 },
        { id: 'hql8je', q: 'Jaki jest główny problem „Balladyny”?', options: ['tęsknota za ojczyzną', 'żądza władzy i kara za zbrodnię', 'przyjaźń w czasie wojny', 'skąpstwo i jego skutki'], answer: 1 },
        { id: '6sna7h', q: 'Co według Lisa z „Małego Księcia” znaczy „oswoić”?', options: ['nakarmić', 'stworzyć więzy', 'wytresować', 'zapomnieć'], answer: 1 },
        { id: '2l2evd', q: 'Gdzie pilot spotkał Małego Księcia?', options: ['w Paryżu', 'na Saharze', 'na planecie B-612', 'na statku'], answer: 1, explain: 'Pilot wylądował awaryjnie na pustyni Sahara.' },
        { id: 'zd9xmk', q: 'Kogo odbito w akcji pod Arsenałem („Kamienie na szaniec”)?', options: ['Zośkę', 'Alka', 'Rudego', 'Słonia'], answer: 2, explain: 'Akcja pod Arsenałem (marzec 1943) – odbicie Jana Bytnara „Rudego” z rąk gestapo.' },
        { id: 'vq0yj9', q: 'Do jakiej organizacji należeli bohaterowie „Kamieni na szaniec”?', options: ['Szare Szeregi', 'Legiony Polskie', 'Armia Krajowa – kawaleria', 'Gwardia Ludowa'], answer: 0 },
        { id: 'rsbh4d', q: 'Kto jest autorem „Opowieści wigilijnej”?', options: ['Antoine de Saint-Exupéry', 'Aleksander Kamiński', 'Karol Dickens', 'C.S. Lewis'], answer: 2 },
        { id: 'ukpdkr', q: 'Kim był Jacob Marley z „Opowieści wigilijnej”?', options: ['zmarłym wspólnikiem Scrooge’a', 'bratankiem Scrooge’a', 'Duchem Wigilijnej Przyszłości', 'ojcem małego Tima'], answer: 0, explain: 'Marley ukazuje się Scrooge’owi jako duch, zanim przyjdą trzy kolejne duchy.' },
        { id: 'e9vsfi', q: 'Kto prowadzi obrzęd w „Dziadach cz. II”?', options: ['Pustelnik', 'Guślarz', 'Widmo Złego Pana', 'Kirkor'], answer: 1 },
        { id: 'zm2fjm', q: 'Do której grupy duchów w „Dziadach cz. II” należy Widmo Złego Pana?', options: ['do duchów ciężkich', 'do duchów lekkich', 'do duchów pośrednich', 'do duchów wodnych'], answer: 0, explain: 'Lekkie: Józio i Rózia, ciężkie: Zły Pan, pośrednie: pasterka Zosia.' },
        { id: 'gud0ou', q: 'Kim jest Goplana w „Balladynie”?', options: ['siostrą Balladyny', 'żoną Pustelnika', 'nimfą, królową jeziora Gopło', 'matką Kirkora'], answer: 2 },
        { id: 'fkijzf', q: 'Kim okazuje się Pustelnik w „Balladynie”?', options: ['Kirkorem w przebraniu', 'Skierką', 'Guślarzem', 'dawnym królem Popielem III'], answer: 3 },
        { id: 'mwcsxn', q: 'Jak ginie Balladyna?', options: ['od pioruna, po wydaniu trzech wyroków śmierci na samą siebie', 'w pojedynku z Kirkorem', 'w jeziorze Gopło', 'ze starości w zamku'], answer: 0 },
        { id: 'yazmho', q: 'Z jakiej planety pochodzi Mały Książę?', options: ['z Marsa', 'z planety B-612', 'z planety latarnika', 'z Księżyca'], answer: 1 },
        { id: 'od84v8', q: 'Kto w „Małym Księciu” mówi: „Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.”?', options: ['Lis', 'Róża', 'pilot', 'król'], answer: 0 },
        { id: 'o5z0oq', q: 'Kto w „Zemście” powtarza: „Niech się dzieje wola nieba”?', options: ['Cześnik Raptusiewicz', 'Papkin', 'Rejent Milczek', 'Wacław'], answer: 2 },
        { id: 'ly3msg', q: 'Co kończy spór Cześnika i Rejenta w „Zemście”?', options: ['miłość Wacława i Klary', 'wyrok sądu', 'zburzenie muru przez Papkina', 'wyjazd Rejenta z zamku'], answer: 0 },
        { id: '7wepwg', q: 'Kim była Klara w „Zemście”?', options: ['córką Rejenta', 'siostrą Papkina', 'bratanicą Cześnika', 'matką Wacława'], answer: 2 },
        { id: 'lx1pqs', q: 'Jak nazywał się naprawdę „Rudy” z „Kamieni na szaniec”?', options: ['Aleksy Dawidowski', 'Tadeusz Zawadzki', 'Marcin Borowicz', 'Jan Bytnar'], answer: 3, explain: 'Alek to Aleksy Dawidowski, Zośka – Tadeusz Zawadzki.' },
        { id: '9ivlhn', q: 'Do jakiego gatunku należą „Kamienie na szaniec”?', options: ['baśń', 'literatura faktu', 'komedia', 'ballada'], answer: 1, explain: 'Książka opowiada o prawdziwych ludziach i wydarzeniach.' },
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
        { id: 'rw6h1i', q: 'Kim okazał się ksiądz Robak w „Panu Tadeuszu”?', options: ['Gerwazym', 'Jackiem Soplicą', 'Hrabią', 'Sędzią'], answer: 1 },
        { id: 'sp60kb', q: 'Jak zaczyna się Inwokacja „Pana Tadeusza”?', options: ['„Litwo! Ojczyzno moja!”', '„Kochajmy się!”', '„Polska jeszcze nie zginęła”', '„Nie rzucim ziemi”'], answer: 0 },
        { id: 'z5b1v0', q: 'Jakiego wydarzenia dotyczy „Reduta Ordona”?', options: ['bitwy pod Grunwaldem', 'obrony Warszawy w powstaniu listopadowym', 'powstania warszawskiego', 'obrony Częstochowy'], answer: 1 },
        { id: '0xk7pi', q: 'Za co został ukarany strzelec w „Świteziance”?', options: ['za kradzież', 'za złamanie przysięgi wierności', 'za tchórzostwo', 'za kłusownictwo'], answer: 1 },
        { id: 'l5874w', q: 'Dlaczego Skawiński z „Latarnika” stracił posadę?', options: ['zasnął pijany', 'zaczytał się w „Panu Tadeuszu” i nie zapalił latarni', 'uciekł z wyspy', 'pokłócił się z konsulem'], answer: 1 },
        { id: '952d0d', q: 'Po czyjej śmierci Jan Kochanowski napisał „Treny”?', options: ['żony', 'ojca', 'córki Urszulki', 'przyjaciela'], answer: 2 },
        { id: 'eawsns', q: 'Za panowania którego cesarza toczy się akcja „Quo vadis”?', options: ['Juliusza Cezara', 'Nerona', 'Oktawiana Augusta', 'Konstantyna'], answer: 1 },
        { id: 'w7honr', q: 'Jakim gatunkiem jest „Latarnik”?', options: ['nowela', 'ballada', 'komedia', 'epopeja'], answer: 0 },
        { id: 'vvjpmd', q: 'Jaki problem przedstawiają „Syzyfowe prace” Stefana Żeromskiego?', options: ['rusyfikację polskiej młodzieży w szkole', 'walkę z Krzyżakami', 'życie w Rzymie za Nerona', 'spór o zamek'], answer: 0 },
        { id: 'w28l0z', q: 'Który utwór recytuje Bernard Zygier w „Syzyfowych pracach”?', options: ['„Świteziankę”', '„Redutę Ordona”', '„Pana Tadeusza”', '„Rotę”'], answer: 1 },
        { id: 'k0n08g', q: 'Które treny Kochanowskiego są lekturą obowiązkową na egzaminie (wg informatora CKE)?', options: ['I i V', 'VII i VIII', 'XIX', 'wszystkie'], answer: 1, explain: 'Treny I i V zostały wykreślone z podstawy w 2024 r. – można się do nich odwoływać, ale nie są lekturą obowiązkową.' },
        { id: '77yf4g', q: 'Kim jest Gerwazy w „Panu Tadeuszu”?', options: ['księdzem Robakiem', 'synem Sędziego', 'karczmarzem', 'klucznikiem Horeszków'], answer: 3 },
        { id: 'x8q18y', q: 'W której księdze „Pana Tadeusza” jest koncert Jankiela?', options: ['XII', 'I', 'IV', 'X'], answer: 0, explain: 'Księga XII „Kochajmy się!” – koncert Jankiela i polonez.' },
        { id: 'hdbvi0', q: 'O co spierają się Soplicowie i Horeszkowie w „Panu Tadeuszu”?', options: ['o mur graniczny', 'o zamek', 'o rękę Ligii', 'o latarnię'], answer: 1, explain: 'Uwaga: spór o mur graniczny to „Zemsta” Fredry.' },
        { id: 'id6p16', q: 'Kto relacjonuje wydarzenia w „Reducie Ordona”?', options: ['adiutant', 'sam Ordon', 'Jankiel', 'Skawiński'], answer: 0 },
        { id: 'rn445u', q: 'Gdzie Skawiński zostaje latarnikiem?', options: ['w Gdańsku', 'w Rzymie', 'w Aspinwall', 'w Klerykowie'], answer: 2 },
        { id: 'ctmv01', q: 'Jak kończy się „Świtezianka” dla strzelca?', options: ['żeni się z tajemniczą dziewczyną', 'zostaje królem', 'wciąga go toń jeziora Świteź', 'szczęśliwie wraca do domu'], answer: 2 },
        { id: 'gkhvxh', q: 'Z którego trenu Kochanowskiego pochodzą słowa „Wielkieś mi uczyniła pustki w domu moim”?', options: ['z Trenu VIII', 'z Trenu VII', 'z Trenu I', 'z Trenu XIX'], answer: 0 },
        { id: 'uvxpwt', q: 'Kto jest autorem opowiadania „Artysta”?', options: ['Stefan Żeromski', 'Jan Kochanowski', 'Sławomir Mrożek', 'Aleksander Fredro'], answer: 2 },
        { id: '7baw8k', q: 'Z jakiego utworu pochodzą postacie Winicjusza, Ligii i Ursusa?', options: ['„Pan Tadeusz”', '„Quo vadis”', '„Syzyfowe prace”', '„Latarnik”'], answer: 1 },
        { id: 'ugjazn', q: 'Gdzie rozgrywa się akcja „Syzyfowych prac”?', options: ['w Rzymie za Nerona', 'w Aspinwall', 'nad jeziorem Świteź', 'w gimnazjum w Klerykowie'], answer: 3 },
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
        { id: 'igggia', q: 'Kto jest narratorem „Akademii Pana Kleksa”?', options: ['Adaś Niezgódka', 'Pan Kleks', 'Szpak Mateusz', 'Filip golibroda'], answer: 0 },
        { id: 'eptyym', q: 'Jaki warunek musieli spełnić uczniowie Akademii Pana Kleksa?', options: ['mieć imię na literę A', 'umieć latać', 'mieszkać w Paryżu', 'mieć rude włosy'], answer: 0 },
        { id: 'm2xzro', q: 'Kto zdradził rodzeństwo w „Opowieściach z Narnii”?', options: ['Piotr', 'Edmund', 'Łucja', 'Zuzanna'], answer: 1 },
        { id: '3u4uvb', q: 'Co Biała Czarownica zrobiła z Narnią?', options: ['zatopiła ją', 'sprawiła, że panuje wieczna zima', 'spaliła lasy', 'zamieniła w pustynię'], answer: 1 },
        { id: '94h4pq', q: 'Jak kończy się „Chłopcy z Placu Broni”?', options: ['chłopcy przegrywają bitwę', 'Nemeczek umiera, a plac ma zostać zabudowany', 'Boka wyjeżdża do Ameryki', 'Czerwone Koszule przejmują plac'], answer: 1 },
        { id: 'zlbgxw', q: 'Kim był Feri Acz?', options: ['wodzem Czerwonych Koszul', 'nauczycielem chłopców', 'stróżem placu', 'bratem Nemeczka'], answer: 0 },
        { id: 'zz6b51', q: 'Od kogo Bilbo zdobył pierścień w „Hobbicie”?', options: ['od Gandalfa', 'od Smauga', 'od Golluma', 'od Thorina'], answer: 2, explain: 'Bilbo znalazł pierścień w jaskini i przechytrzył Golluma w grze w zagadki.' },
        { id: '2ig3gu', q: 'Kto zabił smoka Smauga?', options: ['Bilbo', 'Thorin', 'Bard', 'Gandalf'], answer: 2 },
        { id: 'dqx8nn', q: 'Jakim tekstem kultury jest „Kajko i Kokosz. Szkoła latania”?', options: ['komiksem', 'baśnią w wierszu', 'dramatem', 'filmem'], answer: 0 },
        { id: 'xxf8fc', q: 'Kim był szpak Mateusz w „Akademii Pana Kleksa”?', options: ['dyrektorem akademii', 'golibrodą', 'zaczarowanym księciem', 'narratorem powieści'], answer: 2 },
        { id: 'nbrrtp', q: 'Kto jest przeciwnikiem pana Kleksa?', options: ['golibroda Filip', 'Adaś Niezgódka', 'szpak Mateusz', 'Feri Acz'], answer: 0 },
        { id: 'hl2m89', q: 'Jak rodzeństwo Pevensie trafia do Narnii?', options: ['przez lustro', 'statkiem', 'na grzbiecie smoka', 'przez szafę'], answer: 3 },
        { id: 'qbf3mj', q: 'Kto w „Opowieściach z Narnii” oddaje życie za Edmunda i zmartwychwstaje?', options: ['Biała Czarownica', 'lew Aslan', 'Piotr', 'Gandalf'], answer: 1 },
        { id: 'sx1nwz', q: 'Kto jest wodzem chłopców z Placu Broni?', options: ['Boka', 'Nemeczek', 'Gereb', 'Feri Acz'], answer: 0 },
        { id: 'tqv564', q: 'Kto zdradza kolegów w „Chłopcach z Placu Broni”?', options: ['Boka', 'Nemeczek', 'Gereb', 'Feri Acz'], answer: 2 },
        { id: '1oc26p', q: 'W jakim mieście toczy się akcja „Chłopców z Placu Broni”?', options: ['w Warszawie', 'w Wiedniu', 'w Pradze', 'w Budapeszcie'], answer: 3 },
        { id: 'wuso99', q: 'Z kim Bilbo wyrusza po skarb w „Hobbicie”?', options: ['z rodzeństwem Pevensie', 'z Kajkiem i Kokoszem', 'z dwunastoma elfami', 'z czarodziejem Gandalfem i trzynastoma krasnoludami'], answer: 3 },
        { id: 'ekkgxm', q: 'Gdzie smok Smaug strzeże skarbu?', options: ['w Narnii', 'w Samotnej Górze', 'w Mirmiłowie', 'na Placu Broni'], answer: 1 },
        { id: 'dzf2l7', q: 'Kim są Zbójcerze w komiksie o Kajku i Kokoszu?', options: ['przeciwnikami Kajka i Kokosza', 'mieszkańcami Mirmiłowa', 'krasnoludami', 'uczniami pana Kleksa'], answer: 0, explain: 'Na ich czele stoi Hegemon.' },
      ],
    },
    {
      id: 'czesci-mowy',
      name: 'Części mowy i imiesłowy',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kształcenie językowe: kl. IV–VI II.1.1–5 (części mowy, formy bezosobowe, strona czynna i bierna); kl. VII–VIII II.1.4 (imiesłowy, imiesłowowy równoważnik zdania); II.4.4 (pisownia „nie”).',
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
          <li><b>Formy bezosobowe:</b> zakończone na -no, -to (<i>zrobiono, umyto</i>) i z „się” (<i>mówi się</i>).</li>
        </ul>
        <h3>Imiesłowowy równoważnik zdania</h3>
        <p>To część zdania z imiesłowem przysłówkowym: <i><b>Wróciwszy do domu,</b> zjadłem obiad.</i> Można go zamienić na zdanie złożone: <i>Kiedy wróciłem do domu, zjadłem obiad.</i></p>
        <div class="tip">⚠️ Warunek poprawności: <b>ta sama osoba</b> wykonuje obie czynności. Błędnie: <s>Jadąc tramwajem, padał deszcz.</s> (deszcz nie jechał tramwajem!). Poprawnie: <i>Jadąc tramwajem, patrzyłem na deszcz.</i> Imiesłowowy równoważnik oddzielamy przecinkiem.</div>
      `,
      flashcards: [
        ['czytający', 'imiesłów przymiotnikowy czynny'],
        ['przeczytany', 'imiesłów przymiotnikowy bierny'],
        ['czytając', 'imiesłów przysłówkowy współczesny'],
        ['przeczytawszy', 'imiesłów przysłówkowy uprzedni'],
        ['Części mowy nieodmienne', 'przysłówek, przyimek, spójnik, partykuła, wykrzyknik'],
        ['Tryb przypuszczający', 'zrobiłbym, poszłabyś'],
        ['Imiesłowowy równoważnik zdania', 'Zwrot z imiesłowem przysłówkowym; obie czynności wykonuje ta sama osoba'],
        ['Formy bezosobowe czasownika', '-no, -to (zrobiono), konstrukcje z „się”'],
      ],
      questions: [
        { id: 'cw2fsl', q: 'Wyraz „czytając” to…', options: ['imiesłów przymiotnikowy czynny', 'imiesłów przysłówkowy współczesny', 'imiesłów przysłówkowy uprzedni', 'przysłówek'], answer: 1, explain: 'Zakończenie -ąc oznacza imiesłów przysłówkowy współczesny.' },
        { id: 'lb1vts', q: 'Wyraz „przeczytawszy” to…', options: ['imiesłów przysłówkowy uprzedni', 'imiesłów przymiotnikowy bierny', 'czasownik w trybie rozkazującym', 'rzeczownik'], answer: 0, explain: 'Zakończenia -wszy/-łszy tworzą imiesłów przysłówkowy uprzedni.' },
        { id: 'uu4zbq', q: 'Wyraz „umyty” to…', options: ['imiesłów przymiotnikowy czynny', 'imiesłów przymiotnikowy bierny', 'przymiotnik', 'imiesłów przysłówkowy'], answer: 1 },
        { id: 'tgkyzr', q: 'Która część mowy jest NIEODMIENNA?', options: ['zaimek', 'liczebnik', 'przyimek', 'przymiotnik'], answer: 2 },
        { id: 'rilnjq', q: 'Który zapis jest poprawny?', options: ['nie palący', 'niepalący', 'nie-palący', 'niepalac'], answer: 1, explain: '„Nie” z imiesłowami przymiotnikowymi piszemy łącznie.' },
        { id: '398b38', q: 'Który zapis jest poprawny?', options: ['niewiedząc', 'nie wiedząc', 'nie-wiedząc', 'niewiedzac'], answer: 1, explain: '„Nie” z imiesłowami przysłówkowymi piszemy osobno.' },
        { id: 'j2qjb1', q: 'W jakim trybie jest czasownik „poszedłbym”?', options: ['oznajmującym', 'rozkazującym', 'przypuszczającym', 'bezokoliczniku'], answer: 2 },
        { id: 'ezo6qc', q: 'Które zdanie jest w stronie biernej?', options: ['Ania napisała list.', 'List został napisany przez Anię.', 'Ania pisze list.', 'Ania napisze list.'], answer: 1 },
        { id: 'rglu6q', q: 'Wyraz „trzeci” to liczebnik…', options: ['główny', 'porządkowy', 'zbiorowy', 'ułamkowy'], answer: 1 },
        { id: 'ucb3rf', q: 'Które zdanie z imiesłowowym równoważnikiem zdania jest POPRAWNE?', options: ['Jadąc tramwajem, padał deszcz.', 'Czytając książkę, zadzwonił telefon.', 'Wróciwszy do domu, zjadłem obiad.', 'Idąc do szkoły, spadł śnieg.'], answer: 2, explain: 'Tylko tu ta sama osoba (ja) wraca i je obiad.' },
        { id: 'e7z5br', q: 'Zamień na zdanie złożone: „Skończywszy lekcje, poszedłem na boisko.”', options: ['Kiedy skończyłem lekcje, poszedłem na boisko.', 'Skończyłem lekcje i boisko.', 'Lekcje skończone, boisko.', 'Gdybym skończył lekcje, poszedłbym na boisko.'], answer: 0 },
        { id: '2yvgnp', q: 'Która forma jest bezosobową formą czasownika?', options: ['zrobił', 'zrobiono', 'zrobiony', 'zrobiwszy'], answer: 1 },
        { id: 'w63exj', q: 'Jaką częścią mowy jest wyraz „szybko”?', options: ['przymiotnik', 'przysłówek', 'imiesłów', 'partykuła'], answer: 1, explain: 'Przysłówek określa czasownik i odpowiada na pytanie „jak?”.' },
        { id: 'ejmgsb', q: 'Wyraz „śpiewający” to…', options: ['imiesłów przymiotnikowy czynny', 'imiesłów przymiotnikowy bierny', 'imiesłów przysłówkowy współczesny', 'przysłówek'], answer: 0, explain: 'Zakończenie -ący oznacza imiesłów przymiotnikowy czynny.' },
        { id: '4v6dsl', q: 'Wyraz „napisawszy” to…', options: ['imiesłów przysłówkowy współczesny', 'imiesłów przymiotnikowy bierny', 'czasownik w trybie przypuszczającym', 'imiesłów przysłówkowy uprzedni'], answer: 3 },
        { id: '4xmvou', q: 'Który wyraz jest imiesłowem przymiotnikowym biernym?', options: ['budujący', 'zbudowany', 'budując', 'zbudowawszy'], answer: 1 },
        { id: 'i9r8ap', q: 'W jakim trybie jest czasownik „przeczytaj”?', options: ['rozkazującym', 'oznajmującym', 'przypuszczającym', 'w żadnym – to forma bezosobowa'], answer: 0 },
        { id: 'qhy30c', q: 'Jaki aspekt ma czasownik „napisać”?', options: ['niedokonany', 'rozkazujący', 'dokonany', 'bierny'], answer: 2, explain: '„Napisać” oznacza czynność zakończoną; „pisać” – niedokonany.' },
        { id: '0o2gvd', q: 'Jaką częścią mowy jest wyraz „nad” w wyrażeniu „nad rzeką”?', options: ['przyimkiem', 'spójnikiem', 'przysłówkiem', 'partykułą'], answer: 0 },
        { id: '4n8j23', q: 'Jaką częścią mowy jest wyraz „i” w zdaniu „Ala i Ola idą do kina.”?', options: ['przyimkiem', 'partykułą', 'spójnikiem', 'wykrzyknikiem'], answer: 2 },
        { id: '71aogt', q: 'Który wyraz jest zaimkiem?', options: ['koło', 'kolorowy', 'kolorowo', 'ktoś'], answer: 3 },
        { id: '0urlau', q: 'Które zdanie zawiera bezosobową formę czasownika?', options: ['Mama umyła okna.', 'Umyto okna.', 'Okna są umyte.', 'Umyj okna!'], answer: 1, explain: 'Formy na -no, -to nie wskazują, kto wykonał czynność.' },
        { id: 'twppbr', q: 'W którym zdaniu poprawnie postawiono przecinek?', options: ['Wracając ze szkoły spotkałem, kolegę.', 'Wracając, ze szkoły spotkałem kolegę.', 'Wracając ze, szkoły spotkałem kolegę.', 'Wracając ze szkoły, spotkałem kolegę.'], answer: 3, explain: 'Imiesłowowy równoważnik zdania („Wracając ze szkoły”) oddzielamy przecinkiem.' },
      ],
      tasks: [
        {
          id: 'omkjo6',
          points: 2,
          q: 'Przekształć zdania ze strony czynnej na stronę bierną: a) „Uczniowie posadzili drzewa.” b) „Burza zniszczyła most.”',
          steps: [
            'W stronie biernej dopełnienie ze zdania czynnego staje się podmiotem: drzewa, most.',
            'Orzeczenie: forma czasownika „zostać” (albo „być”) + imiesłów przymiotnikowy bierny: zostały posadzone, został zniszczony.',
            'Wykonawcę czynności podajemy z przyimkiem „przez”: przez uczniów, przez burzę.',
          ],
          answer: 'a) Drzewa zostały posadzone przez uczniów. b) Most został zniszczony przez burzę.',
          scoring: [
            '1 pkt – poprawnie przekształcone zdanie a).',
            '2 pkt – poprawnie przekształcone zdanie b).',
          ],
        },
        {
          id: 'ngk3w4',
          points: 2,
          q: 'Od czasownika „czytać” utwórz imiesłów przymiotnikowy czynny i imiesłów przymiotnikowy bierny. Użyj każdego z nich w zdaniu.',
          steps: [
            'Imiesłów przymiotnikowy czynny ma przyrostek -ący (-ąca, -ące): czytający.',
            'Imiesłów przymiotnikowy bierny ma przyrostek -ny, -ony albo -ty: czytany.',
            'Imiesłowy przymiotnikowe odmieniają się jak przymiotniki i określają rzeczownik.',
          ],
          answer: 'czytający – „Chłopiec czytający komiks nie zauważył autobusu.”; czytany – „To najczęściej czytany artykuł w gazetce szkolnej.”',
          scoring: [
            '1 pkt – poprawne formy obu imiesłowów (czytający, czytany).',
            '2 pkt – oba imiesłowy poprawnie użyte w zdaniach.',
          ],
        },
      ],
    },
    {
      id: 'skladnia',
      name: 'Składnia – zdania złożone',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kształcenie językowe: kl. IV–VI II.1.8–13 (części zdania, zdania złożone, równoważniki); kl. VII–VIII II.1.5–6 (wypowiedzenia wielokrotnie złożone, mowa zależna i niezależna).',
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
        <h3>Wypowiedzenie wielokrotnie złożone</h3>
        <p>Ma co najmniej <b>trzy</b> zdania składowe: <i>Kiedy wróciłem do domu, mama gotowała obiad, a tata czytał gazetę.</i></p>
        <h3>Mowa niezależna i zależna</h3>
        <ul>
          <li><b>Niezależna</b> – dosłowne przytoczenie w cudzysłowie: <i>Ania powiedziała: „Jestem zmęczona”.</i></li>
          <li><b>Zależna</b> – przekazanie cudzych słów własnymi: <i>Ania powiedziała, że jest zmęczona.</i></li>
        </ul>
        <p>Przy zamianie zmienia się osoba czasownika i zaimki, a cudzysłów zastępujemy spójnikiem (<i>że, czy, żeby</i>).</p>
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
        { id: 'pnnhub', q: 'Które wypowiedzenie jest równoważnikiem zdania?', options: ['Pada deszcz.', 'Cisza w lesie.', 'Kot śpi.', 'Idziemy do domu.'], answer: 1, explain: 'Nie ma w nim osobowej formy czasownika.' },
        { id: 'pqohgn', q: '„Poszedłem do sklepu i kupiłem chleb.” – to zdanie złożone współrzędnie…', options: ['łączne', 'rozłączne', 'przeciwstawne', 'wynikowe'], answer: 0 },
        { id: 'uqjbc1', q: '„Chciałem przyjść, ale zachorowałem.” – to zdanie złożone współrzędnie…', options: ['łączne', 'rozłączne', 'przeciwstawne', 'wynikowe'], answer: 2 },
        { id: 'f5nkk2', q: '„Padał deszcz, więc zostaliśmy w domu.” – to zdanie złożone współrzędnie…', options: ['łączne', 'wynikowe', 'rozłączne', 'przeciwstawne'], answer: 1 },
        { id: 'nsuu1b', q: '„Wiem, że masz rację.” – jakie to zdanie podrzędne?', options: ['przydawkowe', 'dopełnieniowe', 'okolicznikowe czasu', 'podmiotowe'], answer: 1, explain: 'Wiem co? – że masz rację. Pytanie przypadka zależnego wskazuje na dopełnienie.' },
        { id: 'f56dhs', q: '„Kupiłem książkę, która mi się podobała.” – jakie to zdanie podrzędne?', options: ['przydawkowe', 'dopełnieniowe', 'okolicznikowe miejsca', 'orzecznikowe'], answer: 0, explain: 'Książkę jaką? którą? – która mi się podobała.' },
        { id: 'gpg51s', q: '„Kiedy wróciłem, wszyscy spali.” – jakie to zdanie podrzędne?', options: ['okolicznikowe czasu', 'okolicznikowe przyczyny', 'przydawkowe', 'podmiotowe'], answer: 0 },
        { id: 'etogmq', q: '„Zostałem w domu, ponieważ byłem chory.” – jakie to zdanie podrzędne?', options: ['okolicznikowe celu', 'okolicznikowe przyczyny', 'okolicznikowe warunku', 'dopełnieniowe'], answer: 1, explain: 'Dlaczego zostałem? – ponieważ byłem chory.' },
        { id: 'cxg2bo', q: '„Mój brat czyta ciekawą książkę.” – jaką częścią zdania jest wyraz „ciekawą”?', options: ['dopełnieniem', 'przydawką', 'okolicznikiem', 'orzeczeniem'], answer: 1 },
        { id: '0l7bxo', q: 'Zamień na mowę zależną: Tomek powiedział: „Jutro pojadę do babci.”', options: ['Tomek powiedział, że jutro pojedzie do babci.', 'Tomek powiedział: jutro pojadę do babci.', 'Tomek powiedział, że jutro pojadę do babci.', 'Tomek powie, że pojechał do babci.'], answer: 0, explain: 'W mowie zależnej zmieniamy osobę: „pojadę” → „pojedzie”.' },
        { id: 'qu3yxq', q: 'Ile zdań składowych ma wypowiedzenie: „Kiedy wróciłem do domu, mama gotowała obiad, a tata czytał gazetę.”?', options: ['jedno', 'dwa', 'trzy', 'cztery'], answer: 2, explain: 'Trzy orzeczenia: wróciłem, gotowała, czytał – to wypowiedzenie wielokrotnie złożone.' },
        { id: 'isy6pi', q: 'W którym zdaniu przecinek postawiono poprawnie?', options: ['Kupiłem jabłka, i gruszki.', 'Myślę, że jutro będzie ładnie.', 'Pójdę do kina, lub do teatru.', 'Mój, brat jest wysoki.'], answer: 1, explain: 'Przed „że” zawsze stawiamy przecinek. Przed pojedynczym „i” oraz „lub” – nie.' },
        { id: '1929wf', q: '„Pójdziesz do kina czy zostaniesz w domu?” – to zdanie złożone współrzędnie…', options: ['łączne', 'przeciwstawne', 'wynikowe', 'rozłączne'], answer: 3, explain: 'Spójnik „czy” wskazuje na wybór jednej z możliwości.' },
        { id: 'c07q9z', q: '„Kto pyta, nie błądzi.” – jakie to zdanie podrzędne?', options: ['przydawkowe', 'okolicznikowe czasu', 'dopełnieniowe', 'podmiotowe'], answer: 3, explain: 'Kto nie błądzi? – kto pyta. Zdanie podrzędne zastępuje podmiot.' },
        { id: 'lpxa0t', q: '„Mieszkam tam, gdzie rośnie stary dąb.” – jakie to zdanie podrzędne?', options: ['okolicznikowe czasu', 'okolicznikowe miejsca', 'przydawkowe', 'podmiotowe'], answer: 1, explain: 'Gdzie mieszkam? – tam, gdzie rośnie stary dąb.' },
        { id: 'yvrdz3', q: '„Uczę się, żeby zdać egzamin.” – jakie to zdanie podrzędne?', options: ['okolicznikowe celu', 'okolicznikowe przyczyny', 'okolicznikowe warunku', 'okolicznikowe czasu'], answer: 0, explain: 'W jakim celu się uczę? – żeby zdać egzamin.' },
        { id: 'xz9hgr', q: '„Jeśli będzie ładnie, pójdziemy na spacer.” – jakie to zdanie podrzędne?', options: ['okolicznikowe celu', 'okolicznikowe przyczyny', 'okolicznikowe warunku', 'okolicznikowe miejsca'], answer: 2, explain: 'Pod jakim warunkiem pójdziemy? – jeśli będzie ładnie.' },
        { id: '752g47', q: '„Wczoraj padał deszcz.” – jaką częścią zdania jest wyraz „wczoraj”?', options: ['podmiotem', 'orzeczeniem', 'przydawką', 'okolicznikiem'], answer: 3, explain: 'Kiedy padał? – wczoraj. To okolicznik czasu.' },
        { id: 'hnok58', q: 'Co jest podmiotem w zdaniu „Na drzewie siedzi rudy kot.”?', options: ['kot', 'siedzi', 'rudy', 'na drzewie'], answer: 0, explain: 'Kto siedzi? – kot.' },
        { id: 'f4cgy5', q: 'Zamień na mowę zależną: Ola zapytała Tomka: „Czy idziesz z nami?”', options: ['Ola zapytała Tomka, czy idzie z nimi.', 'Ola zapytała Tomka, czy idziesz z nami.', 'Ola zapytała Tomka, że idzie z nimi.', 'Ola zapytała Tomka: czy idzie z nimi.'], answer: 0, explain: 'Pytanie przekazujemy spójnikiem „czy” i zmieniamy osobę: „idziesz” → „idzie”, „z nami” → „z nimi”.' },
        { id: '7lx6mo', q: 'Przed którym spójnikiem zawsze stawiamy przecinek?', options: ['ponieważ', 'i', 'lub', 'oraz'], answer: 0, explain: 'Przed pojedynczym „i”, „lub”, „oraz” przecinka nie stawiamy.' },
        { id: 'qayr05', q: 'Które wypowiedzenie jest zdaniem, a nie równoważnikiem zdania?', options: ['Zamknij drzwi.', 'Zakaz wjazdu.', 'Cisza w lesie.', 'Piękny dzień.'], answer: 0, explain: '„Zamknij” to osobowa forma czasownika (tryb rozkazujący).' },
      ],
      tasks: [
        {
          id: 'kh305y',
          points: 2,
          q: 'Przekształć zdanie złożone na zdanie z imiesłowowym równoważnikiem zdania: „Kiedy Ola wróciła ze szkoły, od razu usiadła do lekcji.”',
          steps: [
            'Sprawdź, czy obie czynności wykonuje ta sama osoba: wróciła – Ola, usiadła – Ola. Tylko wtedy wolno użyć imiesłowowego równoważnika.',
            'Najpierw wróciła, potem usiadła – czynność wcześniejsza, więc potrzebny jest imiesłów przysłówkowy uprzedni (-wszy, -łszy): wróciwszy.',
            'Imiesłowowy równoważnik oddzielamy przecinkiem od reszty zdania.',
          ],
          answer: 'Wróciwszy ze szkoły, Ola od razu usiadła do lekcji.',
          scoring: [
            '1 pkt – użycie imiesłowu przysłówkowego uprzedniego „wróciwszy” (a nie współczesnego „wracając”, który zmienia sens).',
            '2 pkt – całe zdanie poprawne, z zachowanym sensem i przecinkiem po równoważniku.',
          ],
        },
        {
          id: 'nzf44p',
          points: 2,
          q: 'Wyjaśnij, dlaczego zdanie „Czytając lekturę, zadzwonił telefon.” jest błędne. Zapisz je poprawnie.',
          steps: [
            'Imiesłowowy równoważnik zdania można stosować tylko wtedy, gdy wykonawca czynności z imiesłowu jest podmiotem zdania.',
            'Kto czytał lekturę? Ja (albo ktoś inny). Co zadzwoniło? Telefon. Wychodzi na to, że telefon czytał lekturę – to błąd.',
            'Trzeba zamienić równoważnik na zdanie podrzędne z własnym podmiotem albo zmienić podmiot zdania.',
          ],
          answer: 'Błąd polega na tym, że podmiot zdania (telefon) nie jest wykonawcą czynności z imiesłowu (czytania). Poprawnie: „Kiedy czytałem lekturę, zadzwonił telefon.” albo „Czytając lekturę, usłyszałem dzwonek telefonu.”',
          scoring: [
            '1 pkt – wyjaśnienie: wykonawca czynności z imiesłowu i podmiot zdania to różne osoby/rzeczy (telefon nie czyta).',
            '2 pkt – poprawnie zapisane zdanie (np. ze zdaniem podrzędnym „Kiedy czytałem…”).',
          ],
        },
        {
          id: '9xhqfu',
          points: 2,
          q: 'Przekształć mowę niezależną na zależną: Mama zapytała Kubę: „Czy odrobiłeś już lekcje?”',
          steps: [
            'Pytanie bez zaimka pytającego w mowie zależnej wprowadzamy spójnikiem „czy”.',
            'Znikają dwukropek, cudzysłów i znak zapytania. Przed „czy” stawiamy przecinek.',
            'Zmieniamy osobę: Mama mówi o Kubie, więc „odrobiłeś” → „odrobił”.',
          ],
          answer: 'Mama zapytała Kubę, czy odrobił już lekcje.',
          scoring: [
            '1 pkt – zdanie złożone ze spójnikiem „czy”, bez cudzysłowu, dwukropka i pytajnika.',
            '2 pkt – poprawna zmiana osoby czasownika („odrobił”) i przecinek przed „czy”.',
          ],
        },
      ],
    },
    {
      id: 'slowotworstwo',
      name: 'Słowotwórstwo',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. VII–VIII II.1.2–3: wyraz podstawowy i pochodny, temat słowotwórczy, formant i jego funkcje, rodzina wyrazów, rdzeń, wyrazy złożone.',
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
        { id: '3cdhvc', q: 'Jaki jest wyraz podstawowy dla wyrazu „domek”?', options: ['domowy', 'dom', 'domownik', 'domek'], answer: 1 },
        { id: 'twv9ai', q: 'Jaki formant występuje w wyrazie „przepisać”?', options: ['przyrostek', 'przedrostek', 'wrostek', 'końcówka'], answer: 1, explain: 'Cząstka „prze-” stoi przed podstawą – to przedrostek.' },
        { id: '1mr6iq', q: 'Który wyraz NIE należy do rodziny wyrazu „las”?', options: ['leśniczy', 'lasek', 'lis', 'zalesić'], answer: 2, explain: '„Lis” nie ma wspólnego rdzenia z „las” – to inny wyraz.' },
        { id: 'rbskzh', q: 'Wyraz „długopis” to…', options: ['złożenie', 'zrost', 'zestawienie', 'zdrobnienie'], answer: 0, explain: 'Połączono „długi” i „pisać” wrostkiem „-o-”.' },
        { id: 'sy09md', q: 'Wyraz „Wielkanoc” to…', options: ['złożenie', 'zrost', 'zestawienie', 'skrótowiec'], answer: 1 },
        { id: 'bafqez', q: '„Maszyna do szycia” to…', options: ['złożenie', 'zrost', 'zestawienie', 'wyraz podstawowy'], answer: 2 },
        { id: 'x8fkdw', q: 'Jaką funkcję pełni formant „-ek” w wyrazie „kotek”?', options: ['tworzy nazwę wykonawcy czynności', 'tworzy zdrobnienie', 'tworzy zgrubienie', 'tworzy nazwę miejsca'], answer: 1 },
        { id: '96qqvy', q: 'Co to jest podstawa słowotwórcza wyrazu „piekarz”?', options: ['piek-', '-arz', 'piekarz', 'piec'], answer: 0, explain: 'Podstawa to część wspólna z wyrazem podstawowym (piec → piek-); „-arz” to formant.' },
        { id: 'ewg6jm', q: 'Jaki formant występuje w wyrazie „podokiennik”?', options: ['tylko przedrostek', 'tylko przyrostek', 'przedrostek i przyrostek', 'wrostek'], answer: 2, explain: 'pod- (przed podstawą) i -nik (po podstawie).' },
        { id: '7zx9ml', q: 'Wyraz „językoznawca” to…', options: ['zrost', 'zestawienie', 'złożenie', 'zdrobnienie'], answer: 2, explain: 'Połączono „język” i „znawca” wrostkiem „-o-”.' },
        { id: 'ddl94b', q: 'Wyraz „dobranoc” to…', options: ['zrost', 'złożenie', 'zestawienie', 'skrótowiec'], answer: 0, explain: 'Dwa wyrazy zrosły się bez zmian i bez wrostka.' },
        { id: '1bguk9', q: 'Jaki formant ma wyraz „pisarz” utworzony od „pisać”?', options: ['przyrostek', 'przedrostek', 'przedrostek i przyrostek', 'wrostek'], answer: 0, explain: 'Cząstka „-arz” stoi po podstawie.' },
        { id: 'dmzqpj', q: 'Wyrazem podstawowym dla wyrazu „nocny” jest…', options: ['nocować', 'noc', 'nocleg', 'nocny'], answer: 1 },
        { id: '3sjusp', q: 'W którym szeregu są wyrazy z jednej rodziny?', options: ['woda, wada, wata', 'dom, dym, dama', 'las, lis, list', 'woda, wodny, podwodny'], answer: 3, explain: 'Wyrazy z jednej rodziny mają wspólny rdzeń i są związane znaczeniem.' },
      ],
      tasks: [
        {
          id: 'msd576',
          points: 2,
          q: 'W wyrazach „czytelnia” i „nieuczciwy” wskaż wyraz podstawowy i formant. Nazwij rodzaj formantu.',
          steps: [
            'Wyraz podstawowy to ten, od którego utworzono wyraz pochodny. Czytelnia to miejsce, gdzie się czyta – od „czytać”.',
            'Temat słowotwórczy: czyt-, formant: -elnia – stoi po temacie, więc to przyrostek.',
            'Nieuczciwy to „nie uczciwy” – od „uczciwy”. Formant nie- stoi przed tematem, więc to przedrostek.',
          ],
          answer: 'czytelnia ← czytać, formant -elnia (przyrostek); nieuczciwy ← uczciwy, formant nie- (przedrostek).',
          scoring: [
            '1 pkt – poprawna analiza jednego wyrazu (wyraz podstawowy, formant, rodzaj formantu).',
            '2 pkt – poprawna analiza obu wyrazów.',
          ],
        },
        {
          id: '7c3apa',
          points: 2,
          q: 'Uzasadnij, że wyrazy „las”, „leśny”, „leśniczy” i „zalesić” należą do jednej rodziny wyrazów. Wskaż ich rdzeń.',
          steps: [
            'Rodzina wyrazów to wyrazy pokrewne – mają wspólny rdzeń i są związane znaczeniem.',
            'Wszystkie wyrazy łączy znaczenie „las”: leśny – dotyczący lasu, leśniczy – opiekuje się lasem, zalesić – posadzić las.',
            'Rdzeń: las- / leś- (wymiana głosek a : e i s : ś).',
          ],
          answer: 'Wyrazy mają wspólny rdzeń las-/leś- (z wymianą a : e, s : ś) i wspólne znaczenie związane z lasem, więc tworzą jedną rodzinę wyrazów.',
          scoring: [
            '1 pkt – wskazanie rdzenia las- / leś- (z obocznością).',
            '2 pkt – uzasadnienie odwołujące się do wspólnego rdzenia i pokrewnego znaczenia.',
          ],
        },
      ],
    },
    {
      id: 'frazeologia',
      name: 'Frazeologizmy i znaczenie wyrazów',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. IV–VI II.2.4–8 i kl. VII–VIII II.2.4–5 (wymagania przywoływane też w zadaniach informatora CKE): rozpoznaje związki frazeologiczne i rozumie ich znaczenie; rozróżnia synonimy, antonimy, homonimy; rozróżnia treść i zakres znaczeniowy wyrazu; rozpoznaje słownictwo neutralne i wartościujące; rozumie znaczenie dosłowne i przenośne.',
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
        { id: '44qbme', q: 'Co znaczy frazeologizm „drzeć z kimś koty”?', options: ['opiekować się zwierzętami', 'kłócić się z kimś', 'bawić się z kimś', 'uciekać przed kimś'], answer: 1 },
        { id: 'xqop23', q: 'Co znaczy „obiecywać gruszki na wierzbie”?', options: ['obiecywać coś niemożliwego', 'zachęcać do pracy w ogrodzie', 'dotrzymywać obietnic', 'mówić prawdę'], answer: 0 },
        { id: 'e0574o', q: 'Co znaczy „syzyfowa praca”?', options: ['praca dobrze opłacana', 'daremny, bezskuteczny trud', 'praca zespołowa', 'praca w ogrodzie'], answer: 1, explain: 'Syzyf za karę wtaczał na górę głaz, który zawsze staczał się w dół.' },
        { id: 'r8wymp', q: 'Co znaczy „pięta achillesowa”?', options: ['czyjś słaby punkt', 'szybki bieg', 'odwaga', 'kontuzja nogi'], answer: 0 },
        { id: 'u5zq2v', q: 'Który związek frazeologiczny znaczy „uciec”?', options: ['mieć muchy w nosie', 'wziąć nogi za pas', 'pójść po rozum do głowy', 'trzymać język za zębami'], answer: 1 },
        { id: 'z3qex4', q: 'Wyraz „zamek” (budowla, zamek w drzwiach, zamek błyskawiczny) to przykład…', options: ['synonimu', 'antonimu', 'homonimu', 'archaizmu'], answer: 2 },
        { id: '4oepm6', q: 'Który wyraz ma węższy zakres znaczeniowy?', options: ['zwierzę', 'pies', 'jamnik', 'ssak'], answer: 2, explain: 'Jamnik ma najbogatszą treść (najwięcej cech), więc najwęższy zakres.' },
        { id: 'k6fs2f', q: 'Który wyraz jest nacechowany negatywnie?', options: ['pies', 'piesek', 'kundel', 'psina'], answer: 2 },
        { id: 'fx47g3', q: 'Wyraz „białogłowa” (kobieta) to…', options: ['neologizm', 'archaizm', 'zapożyczenie', 'zdrobnienie'], answer: 1 },
        { id: 'rhxzr6', q: 'Synonimem wyrazu „mądry” jest…', options: ['głupi', 'inteligentny', 'wysoki', 'smutny'], answer: 1 },
        { id: 'glp6le', q: 'Co znaczy „mieć muchy w nosie”?', options: ['być przeziębionym', 'być w złym humorze', 'mieć dużo pomysłów', 'być bardzo ciekawskim'], answer: 1 },
        { id: 'myvrgl', q: 'Co znaczy „trzymać język za zębami”?', options: ['nie zdradzić tajemnicy', 'mówić niewyraźnie', 'bać się dentysty', 'kłamać'], answer: 0 },
        { id: '2g6fyb', q: 'Co znaczy „pójść po rozum do głowy”?', options: ['iść do lekarza', 'zapomnieć o czymś', 'zastanowić się, zmądrzeć', 'stracić cierpliwość'], answer: 2 },
        { id: 'u15sru', q: 'Który frazeologizm oznacza źródło nieszczęść?', options: ['nić Ariadny', 'pięta achillesowa', 'syzyfowa praca', 'puszka Pandory'], answer: 3 },
        { id: '3ea7vn', q: 'Co znaczy „nić Ariadny”?', options: ['sposób wyjścia z trudnej sytuacji', 'źródło nieszczęść', 'daremny trud', 'czyjś słaby punkt'], answer: 0 },
        { id: '50q2c7', q: 'Antonimem wyrazu „wesoły” jest…', options: ['radosny', 'uśmiechnięty', 'zabawny', 'smutny'], answer: 3, explain: 'Antonim to wyraz o przeciwnym znaczeniu; pozostałe to synonimy.' },
        { id: '4d36en', q: 'Który wyraz ma najszerszy zakres znaczeniowy?', options: ['pojazd', 'samochód', 'samochód osobowy', 'taksówka'], answer: 0, explain: 'Pojazdem nazwiesz najwięcej rzeczy – ten wyraz ma najuboższą treść.' },
        { id: '18x8ws', q: 'Wyraz „komputer” to…', options: ['archaizm', 'zapożyczenie', 'neologizm', 'zdrobnienie'], answer: 1, explain: 'Wyraz przejęty z innego języka.' },
      ],
      tasks: [
        {
          id: '3z93r9',
          points: 2,
          q: 'Napisz dwa zdania o życiu szkolnym: jedno z frazeologizmem „syzyfowa praca”, drugie z frazeologizmem „pięta achillesowa”. Z kontekstu ma wynikać znaczenie każdego z nich.',
          steps: [
            '„Syzyfowa praca” to praca ciężka i daremna, która nie przynosi efektu (od mitu o Syzyfie).',
            '„Pięta achillesowa” to czyjś słaby punkt (od mitu o Achillesie).',
            'Zdanie ma pokazywać sens: np. coś trzeba ciągle robić od nowa / coś jest czyjąś słabością.',
          ],
          answer: 'Sprzątanie szatni, w której wszyscy rzucają buty na podłogę, to syzyfowa praca – po każdej przerwie znów jest bałagan. Ortografia to moja pięta achillesowa: z każdego dyktanda tracę punkty za „ó” i „u”.',
          scoring: [
            '1 pkt – poprawne użycie jednego frazeologizmu, znaczenie jasne z kontekstu.',
            '2 pkt – poprawne użycie drugiego frazeologizmu, znaczenie jasne z kontekstu.',
          ],
        },
        {
          id: 'lz70he',
          points: 2,
          q: 'Ułóż dwa zdania, w których wyraz „zamek” będzie miał dwa różne znaczenia. Jak nazywamy takie wyrazy?',
          steps: [
            'Ten sam wyraz może mieć kilka niezwiązanych ze sobą znaczeń: zamek – budowla, zamek w drzwiach, zamek błyskawiczny.',
            'W każdym zdaniu kontekst musi jednoznacznie wskazywać znaczenie.',
            'Wyrazy o tym samym brzmieniu i różnych znaczeniach to homonimy.',
          ],
          answer: 'Na wycieczce zwiedzaliśmy średniowieczny zamek. Zepsuł mi się zamek w kurtce i nie mogłem jej zapiąć. Takie wyrazy to homonimy.',
          scoring: [
            '1 pkt – dwa zdania z wyrazem „zamek” w różnych, jasnych z kontekstu znaczeniach.',
            '2 pkt – poprawna nazwa: homonimy.',
          ],
        },
      ],
    },
    {
      id: 'fonetyka-ortografia',
      name: 'Głoski, akcent i ortografia',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996): kl. IV–VI II.3.5 (głoska, litera, sylaba, akcent); kl. VII–VIII II.1.1 (upodobnienia fonetyczne, rozbieżności między mową a pismem), II.1.7 (wyjątki od reguły akcentu), II.4.1, II.4.3–4 (wymiana głosek, pisownia, partykuła „nie”).',
      theory: `
        <h3>Głoska a litera</h3>
        <p><b>Głoska</b> to dźwięk, <b>litera</b> to znak pisma. W wyrazie <i>chleb</i> jest 5 liter, ale 4 głoski: [x], [l], [e], [p] – bo „ch” to jedna głoska, a „b” na końcu brzmi jak [p].</p>
        <h3>Upodobnienia fonetyczne</h3>
        <ul>
          <li><b>Pod względem dźwięczności</b>: <i>babka</i> wymawiamy [bapka] – [b] staje się bezdźwięczne pod wpływem [k].</li>
          <li><b>Wsteczne</b> – głoska upodabnia się do następnej (<i>babka</i> [bapka]); <b>postępowe</b> – do poprzedniej (<i>kwiat</i> [kf'at]).</li>
          <li>Na końcu wyrazu głoski dźwięczne tracą dźwięczność: <i>chleb</i> [xlep], <i>róg</i> [ruk].</li>
        </ul>
        <h3>Akcent</h3>
        <p>W polszczyźnie akcent pada zwykle na <b>przedostatnią</b> sylabę: <i>szko-ła, ksią-żka</i>.</p>
        <p><b>Wyjątki</b>:</p>
        <ul>
          <li>na trzecią sylabę od końca: wyrazy pochodzenia greckiego i łacińskiego (<i>ma-te-<b>ma</b>-ty-ka, <b>fi</b>-zy-ka, <b>mu</b>-zy-ka, u-ni-<b>wer</b>-sy-tet</i>) i czasowniki w 1. i 2. os. lm czasu przeszłego (<i><b>by</b>-li-śmy, zro-<b>bi</b>-li-ście</i>);</li>
          <li>na czwartą sylabę od końca: 1. i 2. os. lm trybu przypuszczającego (<i>zro-<b>bi</b>-li-by-śmy</i>).</li>
        </ul>
        <h3>Ortografia – wymiana głosek</h3>
        <p>Pisownię sprawdzamy w wyrazach pokrewnych lub innych formach: <b>ó</b> wymienia się na o (<i>stół – stołu</i>), <b>rz</b> na r (<i>morze – morski</i>), <b>ż</b> na g, z, h (<i>może – mogę, wozić – wożę, druh – drużyna</i>), <b>ch</b> na sz (<i>mucha – musze</i>).</p>
        <h3>Pisownia „nie”</h3>
        <table>
          <tr><th>Razem</th><th>Osobno</th></tr>
          <tr><td>z rzeczownikami (<i>nieprzyjaciel</i>), przymiotnikami w stopniu równym (<i>niemiły</i>), imiesłowami przymiotnikowymi (<i>niepalący</i>), przysłówkami od przymiotników (<i>niedobrze</i>)</td><td>z czasownikami (<i>nie wiem</i>), imiesłowami przysłówkowymi (<i>nie wiedząc</i>), przymiotnikami i przysłówkami w stopniu wyższym i najwyższym (<i>nie lepszy</i>), liczebnikami (<i>nie pięć</i>)</td></tr>
        </table>
        <p>Wyjątki: czasowniki, które bez „nie” nie istnieją, piszemy razem: <i>nienawidzić, niepokoić, niedowidzieć</i>.</p>
      `,
      flashcards: [
        ['Akcent w języku polskim', 'Zwykle na przedostatnią sylabę'],
        ['matematyka – akcent', 'ma-te-MA-ty-ka (3. sylaba od końca)'],
        ['zrobilibyśmy – akcent', 'zro-BI-li-by-śmy (4. sylaba od końca)'],
        ['Głoska a litera', 'Głoska – dźwięk, litera – znak pisma'],
        ['„nie” z czasownikami', 'osobno (nie wiem); wyjątki: nienawidzić, niepokoić'],
        ['„nie” z przymiotnikami', 'razem (niemiły), ale w stopniu wyższym osobno (nie lepszy)'],
      ],
      questions: [
        { id: '3h0s1o', q: 'Na którą sylabę pada akcent w wyrazie „matematyka”?', options: ['ostatnią', 'przedostatnią', 'trzecią od końca', 'pierwszą'], answer: 2, explain: 'ma-te-MA-ty-ka – wyraz pochodzenia greckiego, wyjątek od reguły.' },
        { id: 'il12qf', q: 'Który wyraz ma akcent na czwartą sylabę od końca?', options: ['zrobiliśmy', 'zrobilibyśmy', 'zrobiony', 'matematyka'], answer: 1 },
        { id: '1a2pjr', q: 'W którym wyrazie akcent pada zgodnie z ogólną regułą (na przedostatnią sylabę)?', options: ['fizyka', 'byliśmy', 'książka', 'muzyka'], answer: 2 },
        { id: 'bm85k2', q: 'Ile głosek jest w wyrazie „chleb”?', options: ['3', '4', '5', '6'], answer: 1, explain: '[x][l][e][p] – „ch” to jedna głoska.' },
        { id: 'xvuwoq', q: 'Jak wymawiamy wyraz „babka”?', options: ['[babka]', '[bapka]', '[pabka]', '[papka]'], answer: 1, explain: 'Upodobnienie wsteczne pod względem dźwięczności: [b] przed [k] traci dźwięczność.' },
        { id: 'nmab1t', q: 'Który zapis jest poprawny?', options: ['niewiem', 'nie lepszy', 'nie miły', 'nie przyjaciel'], answer: 1, explain: '„Nie” z przymiotnikiem w stopniu wyższym piszemy osobno.' },
        { id: 'edhi32', q: 'Który czasownik piszemy z „nie” łącznie?', options: ['nie lubić', 'nienawidzić', 'nie chcieć', 'nie wiedzieć'], answer: 1, explain: 'Nie ma czasownika „nawidzić”, więc piszemy razem.' },
        { id: 'urv4o1', q: 'Jakim wyrazem pokrewnym uzasadnisz pisownię „ó” w wyrazie „stół”?', options: ['stolik / stołu', 'stal', 'stać', 'stuł'], answer: 0, explain: '„Ó” wymienia się na „o”.' },
        { id: 'qccjkd', q: 'Uzasadnieniem pisowni „rz” w wyrazie „morze” jest wyraz…', options: ['morski', 'mżawka', 'mróz', 'mazać'], answer: 0, explain: '„Rz” wymienia się na „r”.' },
        { id: 'ku4fpf', q: 'Na którą sylabę pada akcent w wyrazie „zrobiliście”?', options: ['trzecią od końca', 'przedostatnią', 'ostatnią', 'czwartą od końca'], answer: 0, explain: 'zro-BI-li-ście – 2. os. lm czasu przeszłego to wyjątek od reguły.' },
        { id: 'tulfs4', q: 'Na którą sylabę pada akcent w wyrazie „uniwersytet”?', options: ['przedostatnią', 'pierwszą', 'trzecią od końca', 'ostatnią'], answer: 2, explain: 'u-ni-WER-sy-tet – wyraz pochodzenia łacińskiego.' },
        { id: 'ml31tv', q: 'Ile liter i ile głosek ma wyraz „szczur”?', options: ['6 liter, 6 głosek', '6 liter, 4 głoski', '4 litery, 4 głoski', '5 liter, 4 głoski'], answer: 1, explain: 's-z-c-z-u-r to 6 liter, a głoski są 4: [sz][cz][u][r].' },
        { id: '2e00bl', q: 'Jak wymawiamy wyraz „róg”?', options: ['[rug]', '[rog]', '[rok]', '[ruk]'], answer: 3, explain: 'Na końcu wyrazu [g] traci dźwięczność i brzmi jak [k].' },
        { id: 'ycjd2u', q: 'Którym wyrazem uzasadnisz pisownię „ż” w wyrazie „może”?', options: ['morze', 'mozół', 'mogę', 'możliwy'], answer: 2, explain: '„Ż” wymienia się na „g”.' },
        { id: 'ta2apn', q: 'Którym wyrazem uzasadnisz pisownię „ch” w wyrazie „mucha”?', options: ['muchomor', 'mus', 'musze', 'muzyka'], answer: 2, explain: '„Ch” wymienia się na „sz”.' },
        { id: 'emk9oj', q: 'W którym szeregu wszystkie wyrazy zapisano poprawnie?', options: ['nie miły, nielepszy, niewiem', 'niemiły, nielepszy, nie wiem', 'nie miły, nie lepszy, niewiem', 'niemiły, nie lepszy, nie wiem'], answer: 3, explain: 'Razem z przymiotnikiem w stopniu równym, osobno ze stopniem wyższym i z czasownikiem.' },
        { id: 'd6y2xg', q: 'Wyraz „kwiat” wymawiamy [kf\'at]. Jakie to upodobnienie?', options: ['postępowe', 'wsteczne', 'nie ma tu upodobnienia', 'upodobnienie na końcu wyrazu'], answer: 0, explain: '[w] upodabnia się do poprzedzającego [k] i traci dźwięczność.' },
      ],
    },
    {
      id: 'interpunkcja-ortografia',
      name: 'Interpunkcja i ortografia',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język polski: kl. IV–VI II.4.1–2 (reguły pisowni; kropka, przecinek, znak zapytania, wykrzyknik, cudzysłów, dwukropek, średnik, nawias); kl. VII–VIII II.4.1–4 (wymiana głosek, przytaczanie cudzych wypowiedzi, samogłoski nosowe, spółgłoski miękkie, pisownia wyrazów nieodmiennych i „nie”). Ortografia i interpunkcja to też kryteria 7 i 8 oceny wypracowania (informator CKE).',
      theory: `
        <h3>Przecinek</h3>
        <table>
          <tr><th>Stawiamy</th><th>Nie stawiamy</th></tr>
          <tr><td>przed spójnikami i zaimkami, które zaczynają zdanie podrzędne lub przeciwstawne: <i>że, żeby, aby, bo, ponieważ, który, gdy, kiedy, jeśli, ale, lecz, więc, dlatego</i></td><td>przed pojedynczymi spójnikami <i>i, oraz, lub, albo, ani, czy</i>: <i>Kupiłem chleb i mleko.</i></td></tr>
          <tr><td>przed powtórzonym spójnikiem: <i>Kupiłem i chleb, i mleko.</i></td><td>w porównaniu bez czasownika: <i>biały jak śnieg</i></td></tr>
          <tr><td>między elementami wyliczenia: <i>jabłka, gruszki, śliwki i banany</i></td><td>między podmiotem a orzeczeniem: <s>Mój brat, jest wysoki.</s></td></tr>
          <tr><td>z obu stron wtrącenia: <i>Mój brat, który mieszka w Gdańsku, przyjedzie jutro.</i></td><td></td></tr>
          <tr><td>przy wołaczu i wykrzykniku: <i>Aniu, chodź tu! Ach, jak pięknie!</i></td><td></td></tr>
          <tr><td>po imiesłowowym równoważniku zdania: <i>Wróciwszy do domu, zjadłem obiad.</i></td><td></td></tr>
        </table>
        <h3>Inne znaki</h3>
        <ul>
          <li><b>Kropka</b> – na końcu zdania oznajmującego, po skrótach (<i>np., tzn., ul.</i>). Bez kropki piszemy skróty kończące się ostatnią literą wyrazu: <i>dr</i> (doktor), <i>mgr</i> (magister).</li>
          <li><b>Dwukropek</b> – przed zapowiedzianym wyliczeniem (<i>Miałem trzy rzeczy: kanapki, wodę i mapę.</i>), przed przytoczeniem cudzych słów i przed wyjaśnieniem.</li>
          <li><b>Średnik</b> – oddziela dłuższe, dość samodzielne części zdania złożonego, zwłaszcza gdy są w nich już przecinki.</li>
          <li><b>Myślnik</b> – rozpoczyna wypowiedź postaci w dialogu i oddziela słowa narratora; może też wydzielać wtrącenie.</li>
          <li><b>Cudzysłów</b> „…” – przytoczenie dosłowne, tytuły, wyrazy użyte w nietypowym (np. ironicznym) znaczeniu.</li>
          <li><b>Nawias</b> – wtrącenia, dodatkowe informacje i objaśnienia.</li>
        </ul>
        <h3>Przytaczanie cudzych słów</h3>
        <ul>
          <li>Mowa niezależna: <i>Ola powiedziała: „Jutro przyjdę”.</i> Gdy przytoczenie kończy się pytajnikiem lub wykrzyknikiem, nie dodajemy już kropki: <i>Ola zapytała: „Przyjdziesz jutro?”</i></li>
          <li>Dialog: każda wypowiedź od nowej linii, od myślnika. Słowa narratora po myślniku małą literą: <i>– Przyjdę jutro – powiedziała Ola.</i></li>
          <li>Mowa zależna – bez cudzysłowu, ze spójnikiem: <i>Ola powiedziała, że jutro przyjdzie.</i></li>
        </ul>
        <h3>Wielka i mała litera</h3>
        <table>
          <tr><th>Wielką</th><th>Małą</th></tr>
          <tr><td>imiona, nazwiska, przydomki; nazwy państw, miast, rzek, gór, mórz (<i>Morze Bałtyckie, Tatry</i>); mieszkańcy krajów, części świata i regionów (<i>Polak, Europejczyk, Ślązak</i>); nazwy świąt (<i>Boże Narodzenie</i>); pierwszy wyraz tytułu (<i>Kamienie na szaniec</i>); zwroty grzecznościowe w listach (<i>Ty, Pan</i>)</td><td>dni tygodnia i miesiące (<i>poniedziałek, maj</i>); mieszkańcy miast (<i>warszawianin, krakowianin</i>); przymiotniki od nazw (<i>polski, warszawski</i>)</td></tr>
        </table>
        <h3>Ortografia – najważniejsze reguły</h3>
        <ul>
          <li><b>ó</b> – gdy wymienia się na o, e, a (<i>stół – stołu, siódmy – siedem</i>) i w zakończeniach <i>-ów, -ówka</i> (<i>Kraków, złotówka</i>). <b>u</b> – na początku wyrazu (<i>ucho</i>; wyjątki: <i>ósmy, ów</i>) i w zakończeniach <i>-uje, -unek, -uch, -usz, -utki</i> (<i>maluje, rysunek, kapelusz, malutki</i>).</li>
          <li><b>rz</b> – gdy wymienia się na r (<i>morze – morski</i>), po spółgłoskach b, p, d, t, g, k, ch, j, w (<i>brzeg, trzy, krzesło, wrzesień</i>; wyjątki m.in. <i>pszenica, pszczoła, kształt</i>) i w zakończeniach <i>-arz, -erz</i> (<i>lekarz, rycerz</i>).</li>
          <li><b>ż</b> – gdy wymienia się na g, dz, z, s, h (<i>może – mogę, wożę – wozić, wyżej – wysoki, drużyna – druh</i>) i po literach l, ł, r, n (<i>lżejszy, oranżada</i>).</li>
          <li><b>ch</b> – gdy wymienia się na sz (<i>mucha – musze</i>) i na końcu wyrazu (<i>dach, groch</i>; wyjątek: <i>druh</i>). <b>h</b> – gdy wymienia się na g, ż, z (<i>druh – drużyna</i>).</li>
          <li><b>ą, ę</b>: <i>tę</i> książkę (kogo? co?), z <i>tą</i> książką (z kim? z czym?); <i>ja piszę</i>, <i>oni piszą</i>.</li>
          <li><b>Zmiękczenia</b>: przed spółgłoską i na końcu wyrazu kreska (<i>śnieg, ćma, koń</i>), przed samogłoską „i” (<i>siano, ciocia, zima, niebo, dziadek</i>).</li>
          <li><b>Przedrostki</b>: <i>s-</i> przed p, t, k, f, ch (<i>spisać, stracić, skończyć, schować</i>), <i>ś-</i> przed ć (<i>ściąć</i>), w pozostałych przypadkach <i>z-</i> (<i>zrobić, zbić</i>); <i>roz-</i> i <i>bez-</i> zawsze przez z (<i>rozpakować, bezpieczny</i>).</li>
        </ul>
        <h3>Razem czy osobno?</h3>
        <ul>
          <li><b>Razem</b>: przyimki złożone (<i>spod, znad, sprzed, spoza, zza</i>), przysłówki (<i>naprawdę, naprzód, wewnątrz, dokoła</i>), cząstka <i>-by</i> z czasownikiem i spójnikiem (<i>zrobiłbym, gdyby, żeby</i>).</li>
          <li><b>Osobno</b>: wyrażenia przyimkowe (<i>na pewno, w ogóle, z powrotem, na razie, po prostu, do widzenia, po polsku</i>), <i>by</i> przy innych wyrazach (<i>Kto by pomyślał?</i>).</li>
          <li>Pisownia „nie” – w dziale „Głoski, akcent i ortografia”.</li>
        </ul>
        <div class="tip">💡 Na egzaminie za ortografię możesz dostać 2 pkt (najwyżej 1 błąd), a za interpunkcję 1 pkt (najwyżej 9 błędów). Zostaw sobie kilka minut na sprawdzenie wypracowania.</div>
      `,
      flashcards: [
        ['Przecinek stawiamy przed…', 'że, żeby, aby, bo, ponieważ, który, gdy, jeśli, ale, lecz, więc, dlatego'],
        ['Bez przecinka przed pojedynczym…', 'i, oraz, lub, albo, ani, czy'],
        ['Powtórzony spójnik', 'Przecinek przed drugim: Kupiłem i chleb, i mleko.'],
        ['Wtrącenie', 'Oddzielamy przecinkami z obu stron'],
        ['Wołacz', 'Oddzielamy przecinkiem: Aniu, chodź tu!'],
        ['Dwukropek', 'Przed zapowiedzianym wyliczeniem, przytoczeniem, wyjaśnieniem'],
        ['Średnik', 'Oddziela dłuższe części zdania złożonego (zwłaszcza z przecinkami)'],
        ['Przytoczenie zakończone pytajnikiem', 'Ola zapytała: „Przyjdziesz jutro?” – bez kropki na końcu'],
        ['Dialog', '– Przyjdę jutro – powiedziała Ola.'],
        ['Wielką literą', 'Polak, Ślązak, Morze Bałtyckie, Boże Narodzenie, pierwszy wyraz tytułu'],
        ['Małą literą', 'poniedziałek, maj, warszawianin, polski'],
        ['u, nie ó', '-uje, -unek, -uch, -usz, -utki: maluje, rysunek, kapelusz'],
        ['ó', 'wymienia się na o, e, a; -ów, -ówka: Kraków, złotówka'],
        ['rz po spółgłoskach', 'b, p, d, t, g, k, ch, j, w: brzeg, trzy, krzesło (wyjątki: pszenica, pszczoła, kształt)'],
        ['ż po literach', 'l, ł, r, n: lżejszy, oranżada'],
        ['tę czy tą?', 'tę książkę (kogo? co?), z tą książką (z kim? z czym?)'],
        ['s- czy z-?', 's- przed p, t, k, f, ch (spisać, schować); roz-, bez- zawsze przez z'],
        ['Razem czy osobno?', 'razem: spod, znad, naprawdę, zrobiłbym; osobno: na pewno, w ogóle, z powrotem'],
      ],
      questions: [
        { id: 'yerhft', q: 'W którym zdaniu przecinek postawiono poprawnie?', options: ['Aniu podaj, mi książkę.', 'Aniu podaj mi, książkę.', 'Aniu podaj mi książkę, teraz.', 'Aniu, podaj mi książkę.'], answer: 3, explain: 'Wołacz (Aniu) oddzielamy przecinkiem.' },
        { id: 'g2o1iy', q: 'Które zdanie ma poprawną interpunkcję?', options: ['Mój brat, który mieszka w Gdańsku przyjedzie jutro.', 'Mój brat który mieszka w Gdańsku, przyjedzie jutro.', 'Mój brat, który mieszka w Gdańsku, przyjedzie jutro.', 'Mój brat, który mieszka, w Gdańsku przyjedzie jutro.'], answer: 2, explain: 'Wtrącenie „który mieszka w Gdańsku” oddzielamy przecinkami z obu stron.' },
        { id: 'yfybkj', q: 'W którym zdaniu przecinek jest błędny?', options: ['Kupiłem i chleb, i mleko.', 'Kupiłem chleb, i mleko.', 'Kupiłem chleb, bo był świeży.', 'Kupiłem chleb, mleko i ser.'], answer: 1, explain: 'Przed pojedynczym „i” nie stawiamy przecinka. Przed powtórzonym „i… i…” – stawiamy.' },
        { id: 'vji8r8', q: 'Które zdanie zapisano poprawnie?', options: ['Był biały, jak śnieg.', 'Był, biały jak śnieg.', 'Był biały jak śnieg.', 'Był biały jak, śnieg.'], answer: 2, explain: 'W porównaniu bez czasownika („jak śnieg”) nie stawiamy przecinka.' },
        { id: 'fu6buu', q: 'W którym zdaniu poprawnie użyto dwukropka?', options: ['W plecaku miałem trzy rzeczy: kanapki, wodę i mapę.', 'W plecaku: miałem trzy rzeczy, kanapki, wodę i mapę.', 'W plecaku miałem trzy rzeczy, kanapki: wodę i mapę.', 'W: plecaku miałem trzy rzeczy, kanapki, wodę i mapę.'], answer: 0, explain: 'Dwukropek stoi przed wyliczeniem zapowiedzianym słowami „trzy rzeczy”.' },
        { id: 'ihzrbe', q: 'Który zapis cudzych słów jest poprawny?', options: ['Ola powiedziała, „Jutro przyjdę”.', 'Ola powiedziała: „Jutro przyjdę”.', 'Ola powiedziała: Jutro przyjdę.', 'Ola powiedziała „Jutro”: przyjdę.'], answer: 1, explain: 'Przed przytoczeniem stawiamy dwukropek, a słowa przytoczone ujmujemy w cudzysłów.' },
        { id: 'boripu', q: 'Który zapis jest poprawny?', options: ['Ola zapytała: „Przyjdziesz jutro?”', 'Ola zapytała: „Przyjdziesz jutro”?', 'Ola zapytała: „Przyjdziesz jutro?”.', 'Ola zapytała, przyjdziesz jutro?'], answer: 0, explain: 'Pytajnik należy do przytoczenia, więc stoi w cudzysłowie; po nim nie dodajemy kropki.' },
        { id: '9ztxwg', q: 'Jak poprawnie zapisać wypowiedź postaci w dialogu?', options: ['– Przyjdę jutro – Powiedziała Ola.', 'Przyjdę jutro, powiedziała Ola –', '„– Przyjdę jutro” – powiedziała Ola –', '– Przyjdę jutro – powiedziała Ola.'], answer: 3, explain: 'Wypowiedź zaczyna myślnik, a słowa narratora po myślniku piszemy małą literą.' },
        { id: '7r3izv', q: 'Który znak oddziela dłuższe, dość samodzielne części zdania złożonego, zwłaszcza gdy są w nich już przecinki?', options: ['dwukropek', 'średnik', 'myślnik', 'nawias'], answer: 1 },
        { id: 'pz8bo6', q: 'Do czego najczęściej służy nawias?', options: ['do zapisu dialogu', 'do zakończenia zdania pytającego', 'do wtrąceń i dodatkowych objaśnień', 'do zapowiedzi wyliczenia'], answer: 2 },
        { id: '1q2s9n', q: 'Jak poprawnie zapisać skrót wyrazu „doktor”?', options: ['dr.', 'Dr.', 'dok', 'dr'], answer: 3, explain: 'Skróty kończące się ostatnią literą wyrazu piszemy bez kropki: dr, mgr.' },
        { id: 'hw02qu', q: 'W którym szeregu wszystkie wyrazy zapisano poprawnie?', options: ['polak, Warszawianin, Poniedziałek', 'Polak, Warszawianin, poniedziałek', 'polak, warszawianin, Poniedziałek', 'Polak, warszawianin, poniedziałek'], answer: 3, explain: 'Mieszkańca kraju piszemy wielką literą, mieszkańca miasta i dzień tygodnia – małą.' },
        { id: 'nsi9be', q: 'Który zapis jest poprawny?', options: ['Morze Bałtyckie', 'morze Bałtyckie', 'Morze bałtyckie', 'morze bałtyckie'], answer: 0, explain: 'W nazwach mórz oba wyrazy piszemy wielką literą.' },
        { id: 'pvhcpk', q: 'Który tytuł zapisano poprawnie?', options: ['„Kamienie Na Szaniec”', '„kamienie na szaniec”', '„Kamienie na Szaniec”', '„Kamienie na szaniec”'], answer: 3, explain: 'W tytułach książek wielką literą piszemy pierwszy wyraz (i nazwy własne).' },
        { id: '21mzd7', q: 'Które wyrazy piszemy małą literą?', options: ['nazwy państw', 'imiona i nazwiska', 'nazwy dni tygodnia i miesięcy', 'nazwy świąt'], answer: 2 },
        { id: 'finq1k', q: 'W którym szeregu we wszystkie luki wpiszesz „ó”?', options: ['kr_l, mal_je, Krak_w', 'st_ł, rys_nek, kr_l', 'Krak_w, kapel_sz, st_ł', 'kr_l, st_ł, Krak_w'], answer: 3, explain: 'król (królowa), stół (stołu), Kraków (-ów). Maluje, rysunek, kapelusz piszemy przez „u”.' },
        { id: 'steng8', q: 'Dlaczego w wyrazie „maluje” piszemy „u”?', options: ['bo „u” wymienia się na „o”', 'bo to zakończenie -uje', 'bo stoi na początku wyrazu', 'bo tak słychać w wymowie'], answer: 1 },
        { id: 'yj0w2b', q: 'Którym wyrazem uzasadnisz pisownię „ó” w wyrazie „siódmy”?', options: ['siódemka', 'sito', 'siadać', 'siedem'], answer: 3, explain: '„Ó” wymienia się na „e”.' },
        { id: '3po7ej', q: 'Dlaczego w wyrazie „krzesło” piszemy „rz”?', options: ['bo wymienia się na „r”', 'bo to zakończenie -arz', 'bo stoi po spółgłosce k', 'bo stoi na początku wyrazu'], answer: 2 },
        { id: '1go6ux', q: 'Który wyraz jest wyjątkiem od reguły pisania „rz” po spółgłoskach?', options: ['przyjaciel', 'pszenica', 'trzeba', 'brzeg'], answer: 1 },
        { id: '2c0wu1', q: 'W której parze „ż” wymienia się na „g”?', options: ['wożę – wozić', 'wyżej – wysoki', 'może – mogę', 'drużyna – druh'], answer: 2, explain: 'W pozostałych parach ż wymienia się na z, s i h.' },
        { id: '6t8k49', q: 'W którym wyrazie piszemy „ch”, bo wymienia się na „sz”?', options: ['druh – drużyna', 'mucha – musze', 'dach – dachy', 'hak – haki'], answer: 1 },
        { id: 'v3so3g', q: 'Które zdanie zapisano poprawnie?', options: ['Czytam tą książkę z tą okładką.', 'Czytam tę książkę z tę okładką.', 'Czytam tę książkę z tą okładką.', 'Czytam tą książkę z tę okładką.'], answer: 2, explain: 'Czytam kogo? co? – tę książkę. Z kim? z czym? – z tą okładką.' },
        { id: '1zydnz', q: '„Ja (pisać) list, a oni (pisać) e-maile.” Które formy są poprawne?', options: ['pisze, piszą', 'piszę, piszom', 'pisze, piszom', 'piszę, piszą'], answer: 3 },
        { id: '00scq1', q: 'W którym szeregu wszystkie wyrazy zapisano poprawnie?', options: ['sinieg, siano, koń, niebo', 'śnieg, śano, koń, niebo', 'śnieg, siano, koń, ńebo', 'śnieg, siano, koń, niebo'], answer: 3, explain: 'Przed spółgłoską i na końcu wyrazu piszemy kreskę (ś, ń), przed samogłoską – „i” (si, ni).' },
        { id: 'n1y7wo', q: 'Który wyraz zapisano poprawnie?', options: ['spisać', 'zpisać', 'zkończyć', 'zfotografować'], answer: 0, explain: 'Przed p, t, k, f, ch piszemy przedrostek s-: spisać, skończyć, sfotografować.' },
        { id: 'krlnvc', q: 'Który zapis jest poprawny?', options: ['rozpakować', 'rospakować', 'roz pakować', 'rośpakować'], answer: 0, explain: 'Przedrostek roz- zawsze piszemy przez z.' },
        { id: 'o7jc2x', q: 'W którym szeregu wszystkie wyrażenia zapisano poprawnie?', options: ['napewno, wogóle, zpowrotem', 'na pewno, wogóle, z powrotem', 'napewno, w ogóle, z powrotem', 'na pewno, w ogóle, z powrotem'], answer: 3 },
        { id: 'paogrv', q: 'Który zapis jest poprawny?', options: ['Wyszedł spod mostu.', 'Wyszedł z pod mostu.', 'Wyszedł s pod mostu.', 'Wyszedł zpod mostu.'], answer: 0, explain: 'Przyimki złożone (spod, znad, sprzed, zza) piszemy łącznie.' },
        { id: 'p7njef', q: 'W którym zdaniu poprawnie zapisano cząstkę „by”?', options: ['Zrobił bym to, gdybym miał czas.', 'Zrobiłbym to, gdybym miał czas.', 'Zrobiłbym to, gdy bym miał czas.', 'Zrobił bym to, gdy bym miał czas.'], answer: 1, explain: '„-by” piszemy łącznie z czasownikiem w formie osobowej i ze spójnikiem (gdyby, żeby).' },
        { id: 'yjgbq8', q: 'Który wyraz piszemy łącznie?', options: ['na pewno', 'w ogóle', 'na razie', 'naprawdę'], answer: 3 },
        { id: 'mdy3pj', q: 'Prawda czy fałsz?\nNazwy miesięcy piszemy wielką literą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Dni tygodnia i miesiące piszemy małą literą: maj, poniedziałek.' },
        { id: 'qpv1b4', q: 'Prawda czy fałsz?\nWołacz (np. „Aniu”) oddzielamy w zdaniu przecinkiem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
        { id: 'sk90tf', q: 'Prawda czy fałsz?\nPrzed pojedynczym spójnikiem „oraz” nie stawiamy przecinka.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
      ],
      tasks: [
        {
          id: 'ts060h',
          points: 2,
          q: 'Przepisz zdanie, wstawiając przecinki, i uzasadnij jeden z nich: „Kiedy wróciłem do domu okazało się że nikt nie pamiętał o moich urodzinach.”',
          steps: [
            'Znajdź orzeczenia: wróciłem, okazało się, nie pamiętał – są trzy zdania składowe.',
            'Zdania składowe w zdaniu złożonym oddzielamy przecinkami: po „do domu” i przed „że”.',
            'Uzasadnienie: przecinek stawiamy przed spójnikiem „że”, który wprowadza zdanie podrzędne; przecinek oddziela też zdanie podrzędne „Kiedy wróciłem do domu” od nadrzędnego.',
          ],
          answer: 'Kiedy wróciłem do domu, okazało się, że nikt nie pamiętał o moich urodzinach. (Przecinek przed „że”, bo spójnik ten rozpoczyna zdanie podrzędne).',
          scoring: [
            '1 pkt – oba przecinki postawione poprawnie.',
            '2 pkt – poprawne uzasadnienie jednego z przecinków (oddziela zdania składowe / stoi przed spójnikiem „że”).',
          ],
        },
        {
          id: '8vauku',
          points: 2,
          q: 'Zapisz poprawnie, z odpowiednimi znakami interpunkcyjnymi, wypowiedź w mowie niezależnej: nauczycielka powiedziała jutro piszemy sprawdzian z ortografii. Potem zapisz to samo w mowie zależnej.',
          steps: [
            'Mowa niezależna: po zdaniu wprowadzającym stawiamy dwukropek, a przytoczenie zaczynamy wielką literą i ujmujemy w cudzysłów.',
            'Kropkę kończącą całe zdanie stawiamy po cudzysłowie zamykającym.',
            'Mowa zależna: bez dwukropka i cudzysłowu, ze spójnikiem „że” (przed nim przecinek); osoba czasownika może się zmienić.',
          ],
          answer: 'Nauczycielka powiedziała: „Jutro piszemy sprawdzian z ortografii”. Mowa zależna: Nauczycielka powiedziała, że jutro piszemy sprawdzian z ortografii.',
          scoring: [
            '1 pkt – poprawny zapis mowy niezależnej (dwukropek, cudzysłów, wielka litera).',
            '2 pkt – poprawny zapis mowy zależnej (spójnik „że” z przecinkiem, bez cudzysłowu).',
          ],
        },
      ],
    },
    {
      id: 'style-komunikacja',
      name: 'Style, słownictwo i komunikacja',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996): kl. VII–VIII II.2.1–3 i II.2.6 (słownictwo ogólnonarodowe i o ograniczonym zasięgu, zapożyczenia, nazwy osobowe i miejscowe, style), II.3.1–3 (grzeczność, norma, błąd językowy), III.1.8 (manipulacja); kl. IV–VI II.3.1–3 (nadawca, odbiorca, sytuacja komunikacyjna).',
      theory: `
        <h3>Style wypowiedzi</h3>
        <table>
          <tr><th>Styl</th><th>Cechy</th><th>Gdzie?</th></tr>
          <tr><td>potoczny</td><td>swobodny, kolokwializmy, emocje</td><td>rozmowy z bliskimi, SMS</td></tr>
          <tr><td>urzędowy</td><td>oficjalny, schematyczny, stałe formuły</td><td>podanie, wniosek, regulamin</td></tr>
          <tr><td>naukowy</td><td>precyzyjny, terminy naukowe, brak emocji</td><td>podręcznik, encyklopedia</td></tr>
          <tr><td>publicystyczny</td><td>przekonuje, komentuje bieżące sprawy</td><td>artykuły, felietony</td></tr>
          <tr><td>artystyczny</td><td>środki stylistyczne, obrazowość</td><td>literatura piękna</td></tr>
        </table>
        <h3>Słownictwo</h3>
        <ul>
          <li><b>Ogólnonarodowe</b> – znane wszystkim; <b>o ograniczonym zasięgu</b> – terminy naukowe, archaizmy, <b>kolokwializmy</b> (wyrazy potoczne: <i>kasa</i> = pieniądze, <i>fajny</i>).</li>
          <li><b>Wyrazy rodzime</b> i <b>zapożyczone</b> (<i>weekend, komputer, pizza</i>).</li>
          <li>Nazwy mieszkańców: Kraków – <i>krakowianin</i>, Warszawa – <i>warszawianin</i>, Gdańsk – <i>gdańszczanin</i>, Poznań – <i>poznaniak</i>.</li>
        </ul>
        <h3>Komunikacja i kultura języka</h3>
        <ul>
          <li><b>Nadawca</b> – kto mówi/pisze, <b>odbiorca</b> – do kogo; <b>sytuacja komunikacyjna</b> wpływa na wybór słów.</li>
          <li><b>Grzeczność językowa</b> – formy „proszę, dziękuję, przepraszam”, zwroty „Pan/Pani”.</li>
          <li><b>Norma wzorcowa</b> (staranna, oficjalna) i <b>użytkowa</b> (codzienna, dopuszczalna). <b>Błąd językowy</b> – naruszenie normy.</li>
          <li><b>Manipulacja</b> – wpływanie na odbiorcę w ukryty sposób, np. przemilczenia, uogólnienia („wszyscy to mają!”), wywoływanie emocji zamiast argumentów.</li>
        </ul>
        <h3>Inne formy wypowiedzi z podstawy</h3>
        <p>recenzja, podanie, CV, list motywacyjny, przemówienie, wywiad, rozprawka; streszczenie i parafraza tekstu.</p>
      `,
      flashcards: [
        ['Styl urzędowy', 'Oficjalny, schematyczny – podanie, regulamin'],
        ['Styl naukowy', 'Precyzyjny, terminy – podręcznik'],
        ['Kolokwializm', 'Wyraz potoczny, np. „kasa” = pieniądze'],
        ['Zapożyczenie', 'Wyraz z innego języka, np. weekend'],
        ['Manipulacja', 'Ukryte wpływanie na odbiorcę, np. „wszyscy to mają!”'],
        ['Mieszkaniec Gdańska', 'gdańszczanin'],
      ],
      questions: [
        { id: 'h1lftc', q: 'W jakim stylu pisze się podanie do dyrektora szkoły?', options: ['potocznym', 'urzędowym', 'artystycznym', 'naukowym'], answer: 1 },
        { id: 'pskue3', q: 'Który wyraz jest kolokwializmem?', options: ['pieniądze', 'kasa (o pieniądzach)', 'fundusze', 'środki finansowe'], answer: 1 },
        { id: 'lsdsm5', q: 'Który wyraz jest zapożyczeniem?', options: ['dom', 'weekend', 'chleb', 'woda'], answer: 1 },
        { id: '7xbs8j', q: 'Jak nazywa się mieszkaniec Krakowa?', options: ['krakowczyk', 'krakowianin', 'krakowiec', 'krakowski'], answer: 1 },
        { id: 'p00ha5', q: 'Hasło reklamy „Wszyscy już to mają – a ty?” to przykład…', options: ['rzeczowego argumentu', 'manipulacji językowej', 'stylu naukowego', 'archaizmu'], answer: 1, explain: 'To fałszywe uogólnienie, które wywiera presję zamiast podawać argumenty.' },
        { id: 'pof5nd', q: 'Który tekst jest napisany stylem naukowym?', options: ['SMS do kolegi', 'hasło w encyklopedii', 'wiersz', 'felieton'], answer: 1 },
        { id: 'sqng54', q: 'Kto jest nadawcą listu?', options: ['ten, kto go pisze', 'ten, kto go czyta', 'listonosz', 'nikt'], answer: 0 },
        { id: 'yjynmd', q: 'Która forma jest przykładem grzeczności językowej w rozmowie z nauczycielem?', options: ['Ej, mogę wyjść?', 'Przepraszam, czy mogę wyjść?', 'Wychodzę.', 'Muszę iść, nara.'], answer: 1 },
        { id: 'si2gpq', q: 'Jakim stylem napisany jest podręcznik do fizyki?', options: ['potocznym', 'urzędowym', 'artystycznym', 'naukowym'], answer: 3 },
        { id: 'c0zghk', q: 'Jakim stylem pisze się felietony w gazecie?', options: ['publicystycznym', 'urzędowym', 'naukowym', 'potocznym'], answer: 0 },
        { id: 'p31erd', q: 'Jak nazywa się mieszkaniec Gdańska?', options: ['gdańszczak', 'gdańszczanin', 'gdańczyk', 'gdańsiak'], answer: 1 },
        { id: 'nysbk7', q: 'Które zdanie jest napisane stylem urzędowym?', options: ['Siema, mogę dziś nie przyjść?', 'Zwracam się z uprzejmą prośbą o zwolnienie z zajęć.', 'Słońce tańczyło na falach jeziora.', 'Woda wrze w temperaturze 100°C.'], answer: 1 },
        { id: 'bgnu2z', q: 'Co to jest błąd językowy?', options: ['każdy wyraz potoczny', 'każdy wyraz zapożyczony', 'naruszenie normy językowej', 'pytanie retoryczne'], answer: 2 },
        { id: '63evfd', q: 'Jak najlepiej zacząć e-mail do dyrektorki szkoły?', options: ['Hej!', 'Siema, pani dyrektor!', 'Szanowna Pani Dyrektor,', 'Cześć,'], answer: 2 },
        { id: '9qbctr', q: 'Która wypowiedź jest przykładem manipulacji?', options: ['„Telefon waży 180 g.”', '„Tylko naiwniak nie kupi naszego telefonu!”', '„Sklep jest czynny od 9 do 17.”', '„Cena telefonu wynosi 900 zł.”'], answer: 1, explain: 'Wywiera presję i obraża zamiast podawać argumenty.' },
      ],
      tasks: [
        {
          id: 'a0awx4',
          points: 2,
          q: 'Przeredaguj wiadomość tak, aby można ją było wysłać do dyrektora szkoły: „Siema, chcemy zrobić turniej w kosza, da się w piątek wziąć salę?”',
          steps: [
            'Wiadomość do dyrektora to sytuacja oficjalna – potrzebny styl urzędowy/oficjalny, bez kolokwializmów („siema”, „w kosza”, „da się”).',
            'Dodaj zwroty grzecznościowe: powitanie („Szanowny Panie Dyrektorze”), prośbę, podziękowanie, podpis.',
            'Podaj konkretnie: kto prosi, o co i kiedy.',
          ],
          answer: 'Szanowny Panie Dyrektorze, uczniowie klasy 8b chcieliby zorganizować szkolny turniej koszykówki. Uprzejmie prosimy o zgodę na korzystanie z sali gimnastycznej w piątek po lekcjach. Z góry dziękujemy. Z wyrazami szacunku – Jan Kowalski, w imieniu klasy 8b.',
          scoring: [
            '1 pkt – zwroty grzecznościowe odpowiednie wobec dyrektora (powitanie, prośba, pożegnanie/podpis).',
            '2 pkt – cała wiadomość w stylu oficjalnym, bez kolokwializmów, z jasną prośbą (co, kiedy, kto).',
          ],
        },
        {
          id: 't7osa0',
          points: 2,
          q: 'Samorząd uczniowski organizuje zbiórkę książek dla biblioteki w szpitalu dziecięcym. Napisz ogłoszenie. Wymyśl brakujące szczegóły.',
          steps: [
            'Ogłoszenie musi zawierać informacje: kto ogłasza, co się wydarzy (zbiórka książek), gdzie i kiedy, ewentualnie jakie książki przynosić i do kogo się zgłosić.',
            'Pisz krótko i konkretnie – ogłoszenie ma szybko poinformować.',
            'Można dodać zachętę, ale bez zbędnych opisów.',
          ],
          answer: 'OGŁOSZENIE. Samorząd Uczniowski zbiera książki dla biblioteki w szpitalu dziecięcym. Przynoś książki dla dzieci i młodzieży w dobrym stanie od 4 do 15 marca, codziennie na długiej przerwie, do świetlicy (sala 5). Pytania: Ola Nowak, 8a. Dziękujemy!',
          scoring: [
            '1 pkt – wszystkie niezbędne informacje: kto ogłasza, co, gdzie, kiedy.',
            '2 pkt – tekst ma formę ogłoszenia: zwięzły, rzeczowy, bez zbędnych informacji.',
          ],
        },
      ],
    },
    {
      id: 'rodzaje-literackie',
      name: 'Rodzaje i gatunki literackie',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. VII–VIII I.1.1–6: rodzaje i gatunki (komedia, fraszka, pieśń, tren, ballada, epopeja, tragedia), elementy dramatu, neologizm, inwokacja, symbol, alegoria, komizm, ironia; I.2.5: reportaż, wywiad, artykuł.',
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
        <h3>Pojęcia z podstawy (kl. VII–VIII)</h3>
        <ul>
          <li><b>Inwokacja</b> – uroczysty zwrot na początku epopei (np. „Litwo! Ojczyzno moja!” w „Panu Tadeuszu”).</li>
          <li><b>Symbol</b> – znak o wielu możliwych znaczeniach, trzeba go odczytać (np. światło, droga).</li>
          <li><b>Alegoria</b> – znak o <b>jednym</b>, umownym znaczeniu (np. lis = przebiegłość, waga = sprawiedliwość).</li>
          <li><b>Ironia</b> – mówienie czegoś odwrotnego, niż się myśli, zwykle z kpiną („Pięknie się spisałeś!” po porażce).</li>
          <li><b>Neologizm</b> – nowo utworzony wyraz.</li>
        </ul>
        <h3>Teksty nieliterackie</h3>
        <p>Gatunki dziennikarskie: <b>reportaż</b> (relacja z wydarzeń oparta na faktach, z elementami opisu), <b>wywiad</b> (rozmowa w formie pytań i odpowiedzi), <b>artykuł</b> (tekst prasowy na dany temat). Odróżniaj literaturę piękną od tekstów naukowych, popularnonaukowych i publicystycznych.</p>
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
        { id: 'vfzzkj', q: 'Jak nazywa się tekst poboczny w dramacie (wskazówki dla aktorów)?', options: ['didaskalia', 'monolog', 'prolog', 'puenta'], answer: 0 },
        { id: '0rc3fl', q: 'Kto „mówi” w utworze lirycznym?', options: ['narrator', 'podmiot liryczny', 'bohater zbiorowy', 'autor zawsze osobiście'], answer: 1 },
        { id: '796a2k', q: 'Który gatunek łączy cechy liryki, epiki i dramatu?', options: ['nowela', 'ballada', 'fraszka', 'komedia'], answer: 1 },
        { id: 'mi627l', q: 'Do jakiego gatunku należy „Pan Tadeusz”?', options: ['nowela', 'komedia', 'epopeja', 'tren'], answer: 2 },
        { id: '8run0z', q: 'Do jakiego rodzaju literackiego należy „Balladyna”?', options: ['epika', 'liryka', 'dramat', 'żadnego'], answer: 2 },
        { id: '68qm5k', q: '„Zemsta” to…', options: ['tragedia', 'komedia', 'epopeja', 'powieść'], answer: 1 },
        { id: 'tegq69', q: 'Utwór żałobny po śmierci bliskiej osoby to…', options: ['hymn', 'fraszka', 'tren', 'oda'], answer: 2 },
        { id: 'oz0p3r', q: 'Narrator pierwszoosobowy…', options: ['opowiada o sobie i uczestniczy w wydarzeniach', 'nigdy nie występuje w powieści', 'wie wszystko o wszystkich bohaterach', 'mówi tylko w dramacie'], answer: 0 },
        { id: 'uo4cxt', q: 'Komizm sytuacyjny polega na…', options: ['zabawnym języku postaci', 'śmiesznych zdarzeniach i sytuacjach', 'śmiesznym wyglądzie postaci', 'rymach'], answer: 1 },
        { id: 'n0wcf7', q: 'Uroczysty zwrot rozpoczynający epopeję to…', options: ['inwokacja', 'puenta', 'didaskalia', 'epilog'], answer: 0 },
        { id: 'uv98p8', q: 'Czym alegoria różni się od symbolu?', options: ['alegoria ma jedno, umowne znaczenie, a symbol wiele', 'symbol jest zawsze zwierzęciem', 'niczym', 'alegoria występuje tylko w dramacie'], answer: 0 },
        { id: 'a4nhmw', q: 'Ktoś przegrał mecz 0 : 10, a kolega mówi: „No, świetnie zagraliście!”. To przykład…', options: ['ironii', 'inwokacji', 'alegorii', 'onomatopei'], answer: 0 },
        { id: 'w16rse', q: 'Tekst w formie pytań dziennikarza i odpowiedzi rozmówcy to…', options: ['reportaż', 'wywiad', 'felieton', 'nowela'], answer: 1 },
        { id: 'ca0rip', q: '„Quo vadis” to powieść…', options: ['fantastyczna', 'historyczna', 'detektywistyczna', 'przygodowa o piratach'], answer: 1 },
        { id: 'hu2gp9', q: 'Kto opowiada o wydarzeniach w utworze epickim?', options: ['podmiot liryczny', 'narrator', 'aktor', 'reżyser'], answer: 1 },
        { id: 'r3369n', q: 'Do jakiego rodzaju literackiego należy fraszka?', options: ['do epiki', 'do dramatu', 'do liryki', 'do literatury faktu'], answer: 2 },
        { id: 'nwjfff', q: 'Do jakiego rodzaju literackiego należy nowela?', options: ['do liryki', 'do dramatu', 'do epiki', 'do żadnego'], answer: 2 },
        { id: 'y87zhc', q: 'Znak o jednym, umownym znaczeniu (np. waga = sprawiedliwość) to…', options: ['symbol', 'alegoria', 'ironia', 'neologizm'], answer: 1, explain: 'Symbol ma wiele możliwych znaczeń, alegoria – jedno.' },
        { id: 'yw5ql7', q: 'Na co zwykle dzieli się tekst dramatu?', options: ['na akty i sceny', 'na zwrotki i wersy', 'na księgi z inwokacją', 'na trzy rodzaje komizmu'], answer: 0 },
        { id: 'eu17dq', q: 'Komizm słowny polega na…', options: ['śmiesznych sytuacjach', 'zabawnym języku postaci', 'śmiesznym wyglądzie postaci', 'smutnym zakończeniu'], answer: 1 },
        { id: 'qt0n1u', q: 'Relacja z prawdziwych wydarzeń oparta na faktach, z elementami opisu, to…', options: ['wywiad', 'reportaż', 'fraszka', 'tren'], answer: 1 },
      ],
      tasks: [
        {
          id: 'tp2ym5',
          points: 2,
          q: 'Uzasadnij, że „Zemsta” Aleksandra Fredry jest komedią. Podaj dwie cechy komedii i do każdej przykład z utworu.',
          steps: [
            'Komedia to gatunek dramatu, który ma bawić widza i zwykle kończy się szczęśliwie.',
            'Źródłem śmiechu jest komizm: postaci (śmieszne cechy bohatera), sytuacji (zabawne wydarzenia), słowa (język bohaterów).',
            'Dobierz przykłady: Papkin – tchórzliwy samochwała (komizm postaci); spór o mur kończy się szczęśliwie – miłością Wacława i Klary.',
          ],
          answer: '1) Komizm postaci – Papkin to tchórzliwy samochwała: przechwala się odwagą, a w czasie bójki się chowa. 2) Szczęśliwe zakończenie – spór Cześnika i Rejenta o mur kończy miłość Wacława i Klary. Utwór jest też dramatem: ma akty, sceny i didaskalia.',
          scoring: [
            '1 pkt – jedna cecha komedii poprawnie nazwana i zilustrowana przykładem z „Zemsty”.',
            '2 pkt – druga cecha komedii poprawnie nazwana i zilustrowana przykładem z „Zemsty”.',
          ],
        },
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
        • Powieść obrazkowa, manga, scenariusz filmowy ani gra komputerowa nie liczą się jako utwór literacki w wypracowaniu (tak w informatorze CKE). Komiks „Kajko i Kokosz” jest lekturą obowiązkową.</div>
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
        { id: '1sp47r', q: 'Ile wyrazów musi mieć co najmniej wypracowanie na egzaminie ósmoklasisty?', options: ['100', '150', '200', '400'], answer: 2 },
        { id: 'pa0vhh', q: 'Co się stanie, jeśli w wypracowaniu w ogóle nie odwołasz się do lektury wskazanej w poleceniu?', options: ['stracisz 1 punkt', 'praca dostanie 0 punktów', 'nic, liczy się styl', 'stracisz punkty tylko za kompozycję'], answer: 1 },
        { id: '82nsqh', q: 'Ile elementów (np. dialog, opis, zwrot akcji, puenta) trzeba funkcjonalnie wykorzystać w opowiadaniu, aby dostać 5 pkt za elementy twórcze?', options: ['co najmniej 2', 'co najmniej 4', 'co najmniej 6', 'wszystkie 10'], answer: 2 },
        { id: '5wg79i', q: 'Ile punktów można zdobyć za wypracowanie?', options: ['10', '20', '25', '45'], answer: 1 },
        { id: 'kxifme', q: 'Który element jest typowy dla przemówienia, a nie dla rozprawki?', options: ['teza', 'argumenty', 'zwroty do słuchaczy', 'zakończenie'], answer: 2 },
        { id: '9yief2', q: 'Czym różni się argument od przykładu?', options: ['niczym', 'argument uzasadnia tezę, a przykład go ilustruje', 'przykład jest zawsze dłuższy', 'argument musi być cytatem'], answer: 1 },
        { id: 'u41l82', q: 'Która praca NIE zostanie uznana za utwór literacki w wypracowaniu?', options: ['nowela', 'gra komputerowa', 'ballada', 'powieść'], answer: 1 },
        { id: '18asgg', q: 'Praca ma 170 wyrazów. Co z tego wynika?', options: ['jest oceniana normalnie', 'jest oceniana tylko w kryteriach realizacji tematu, elementów twórczych/retorycznych i kompetencji literackich', 'dostaje dodatkowe punkty za zwięzłość', 'nie ma to znaczenia'], answer: 1 },
        { id: 'v9nrkj', q: 'Jak zapisujemy dialog w opowiadaniu?', options: ['w nawiasach', 'każdą wypowiedź od nowej linii, od myślnika', 'drukowanymi literami', 'bez znaków interpunkcyjnych'], answer: 1 },
        { id: 'yqoopr', q: 'Jak może być uporządkowana argumentacja w rozprawce?', options: ['losowo', 'od najważniejszego argumentu albo w układzie argument – kontrargument', 'alfabetycznie', 'od najkrótszego'], answer: 1 },
        { id: '4dcv4g', q: 'Ile minut trwa egzamin ósmoklasisty z języka polskiego?', options: ['100', '120', '180', '150'], answer: 3 },
        { id: 'dc5yu7', q: 'Ile punktów można zdobyć za część I arkusza (zadania do tekstów)?', options: ['20', '30', '25', '45'], answer: 2 },
        { id: 'kt5lm6', q: 'Z jakich form wybierasz wypracowanie na egzaminie?', options: ['list albo dziennik', 'recenzja albo CV', 'wiersz albo fraszka', 'opowiadanie albo rozprawka lub przemówienie'], answer: 3 },
        { id: 'gcao5y', q: 'Co powinno się znaleźć we wstępie rozprawki?', options: ['podziękowanie za uwagę', 'dialog bohaterów', 'teza lub hipoteza', 'podpis i data'], answer: 2 },
        { id: 'y7d040', q: 'Ile najwyżej błędów ortograficznych może mieć wypracowanie, żeby dostać 2 pkt za ortografię?', options: ['3', '5', '9', '1'], answer: 3 },
        { id: '498n8q', q: 'Czym zwykle kończy się przemówienie?', options: ['apelem do słuchaczy i podziękowaniem za uwagę', 'puentą jak we fraszce', 'podpisem i datą', 'inwokacją'], answer: 0 },
        { id: 'ix1jns', q: 'Polecenie wymaga opowiadania, a ty napiszesz rozprawkę. Co się stanie?', options: ['stracisz 1 punkt', 'cała praca dostanie 0 pkt', 'nic – liczy się tylko długość', 'stracisz tylko punkty za styl'], answer: 1, explain: 'Forma niezgodna z poleceniem to 0 pkt za realizację tematu, a wtedy 0 pkt za całe wypracowanie.' },
      ],
      tasks: [
        {
          id: 'i8d716',
          points: 3,
          q: 'Temat rozprawki: „Czy człowiek może się zmienić?”. Sformułuj tezę i napisz jeden akapit z argumentem i przykładem z „Opowieści wigilijnej” Karola Dickensa.',
          steps: [
            'Teza to twoje stanowisko – zdanie twierdzące, które odpowiada na pytanie z tematu.',
            'Argument to uzasadnienie tezy (dlaczego tak uważasz). Przykład to konkretna sytuacja, która argument potwierdza.',
            'W „Opowieści wigilijnej” skąpy Ebenezer Scrooge po wizytach duchów przemienia się w człowieka dobrego i hojnego – to przykład do argumentu o przemianie.',
          ],
          answer: 'Teza: Uważam, że człowiek może się zmienić. Argument: Przeżycia, które pozwalają spojrzeć na własne życie z boku, mogą zmienić czyjąś postawę. Przykład: Ebenezer Scrooge z „Opowieści wigilijnej” był skąpy i nieczuły, ale po wizytach duchów zrozumiał swoje błędy i stał się człowiekiem dobrym i hojnym.',
          scoring: [
            '1 pkt – teza: jasne stanowisko w sprawie z tematu.',
            '2 pkt – argument logicznie uzasadniający tezę (a nie sam przykład).',
            '3 pkt – trafny przykład z „Opowieści wigilijnej” powiązany z argumentem.',
          ],
        },
      ],
    },
  ],
});
