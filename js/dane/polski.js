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
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kształcenie literackie: rozpoznawanie środków stylistycznych i określanie ich funkcji (wymaganie przywoływane w zadaniach informatora CKE). Kl. IV–VI I.1.4: epitet, porównanie, przenośnia, uosobienie, ożywienie, wyrazy dźwiękonaśladowcze, zdrobnienie, zgrubienie, apostrofa, pytanie retoryczne, powtórzenie.',
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
          <tr><td>Zgrubienie</td><td>wyraz o znaczeniu powiększającym, często z niechęcią lub lekceważeniem</td><td>„psisko”, „łapsko”, „domisko”</td></tr>
          <tr><td>Powtórzenie</td><td>ponowne użycie tego samego wyrazu lub zwrotu, żeby coś podkreślić</td><td>„Czekałem, czekałem i czekałem.”</td></tr>
        </table>
        <div class="tip">💡 Uosobienie = cechy <b>człowieka</b> (śpiewa, płacze, myśli). Ożywienie = cechy <b>istoty żywej</b> (biegnie, oddycha).</div>
        <div class="tip">💡 Zdrobnienie zmniejsza i ociepla (<i>piesek</i>), zgrubienie powiększa i często dodaje niechęci (<i>psisko</i>). Anafora to szczególny rodzaj powtórzenia – powtarzany wyraz stoi na początku kolejnych wersów.</div>
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
        ['Zgrubienie', 'Wyraz o znaczeniu powiększającym, często z niechęcią, np. „psisko”, „łapsko”'],
        ['Powtórzenie', 'Ponowne użycie tego samego wyrazu dla podkreślenia, np. „czekałem, czekałem”'],
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
        { id: 'ybaf2v', q: 'Który wyraz jest zgrubieniem?', options: ['piesek', 'psiak', 'psisko', 'psi'], answer: 2, explain: '„Psisko” powiększa znaczenie wyrazu „pies”. „Piesek” i „psiak” to zdrobnienia, „psi” – przymiotnik.' },
        { id: 'urtf7d', q: 'Zgrubienia, np. „łapsko”, „psisko”, najczęściej…', options: ['wyrażają czułość i serdeczność', 'podkreślają wielkość, często z niechęcią lub lekceważeniem', 'naśladują dźwięki', 'są uroczystym zwrotem do adresata'], answer: 1, explain: 'Zgrubienie to przeciwieństwo zdrobnienia: powiększa i zwykle dodaje negatywnego zabarwienia.' },
        { id: '8jrx3v', q: '„Czekałem, czekałem i czekałem, ale autobus nie przyjechał.” – jaki środek zastosowano?', options: ['oksymoron', 'zgrubienie', 'onomatopeję', 'powtórzenie'], answer: 3, explain: 'Ten sam wyraz użyto trzy razy, żeby podkreślić, jak długo trwało czekanie.' },
        { id: 'ank0m9', q: 'Prawda czy fałsz?\nAnafora jest odmianą powtórzenia – powtarzany wyraz stoi na początku kolejnych wersów.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0 },
        { id: '9uv95x', q: 'Jaką funkcję pełni powtórzenie w zdaniu „Biegł, biegł, biegł, aż zabrakło mu tchu.”?', options: ['wyraża czułość wobec bohatera', 'podkreśla długość i wysiłek biegu', 'naśladuje dźwięk kroków', 'jest pytaniem do czytelnika'], answer: 1 },
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
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. IV–VI II.2.4–8 i kl. VII–VIII II.2.4–5 (wymagania przywoływane też w zadaniach informatora CKE): rozpoznaje związki frazeologiczne i rozumie ich znaczenie; rozróżnia synonimy, antonimy, homonimy; rozróżnia treść i zakres znaczeniowy wyrazu; rozpoznaje słownictwo neutralne i wartościujące (II.2.6) i rozumie jego funkcje; rozumie znaczenie dosłowne i przenośne, rozpoznaje wyrazy wieloznaczne i rozumie ich znaczenie w tekście (kl. IV–VI II.2.4 – na tym wymaganiu opierają się zadania o znaczeniu wyrazu w kontekście w informatorze CKE).',
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
        <h3>Znaczenie dosłowne i przenośne, wyrazy wieloznaczne</h3>
        <p>Wiele wyrazów ma <b>kilka znaczeń</b> – to <b>wyrazy wieloznaczne</b>. Właściwe znaczenie podpowiada <b>kontekst</b>: <i>ostry nóż</i> (dobrze tnie), <i>ostry zakręt</i> (gwałtowny), <i>ostry ból</i> (silny).</p>
        <ul>
          <li><b>Znaczenie dosłowne</b> – podstawowe: <i>złoty pierścionek</i> (ze złota), <i>ciężki plecak</i> (dużo waży).</li>
          <li><b>Znaczenie przenośne</b> – przeniesione na coś innego: <i>złote serce</i> (dobroć), <i>ciężki dzień</i> (trudny, męczący), <i>ten test to pestka</i> (coś łatwego).</li>
        </ul>
        <div class="tip">💡 Na egzaminie bywa polecenie: wyjaśnij, co znaczy wyraz <b>w tym tekście</b>. W przykładzie z informatora CKE w zdaniu z opowiadania S. Lema „Niebyt jest dla mnie fraszką” <i>fraszka</i> to nie gatunek literacki, tylko <b>drobiazg, coś łatwego</b>. Zawsze sprawdzaj znaczenie w kontekście.</div>
        <h3>Treść i zakres wyrazu</h3>
        <p><b>Treść</b> – zbiór cech, które przypisujemy temu, co nazywa wyraz. <b>Zakres</b> – zbiór wszystkich rzeczy, które można nazwać tym wyrazem. Im <b>bogatsza treść</b>, tym <b>węższy zakres</b>: <i>pies</i> ma szerszy zakres niż <i>jamnik</i>, ale <i>jamnik</i> ma bogatszą treść.</p>
        <h3>Inne pojęcia</h3>
        <ul>
          <li><b>Słownictwo neutralne i wartościujące</b>: <i>pies</i> (neutralne) – <i>piesek</i> (pozytywne) – <i>kundel</i> (negatywne); <i>mieszkanie</i> – <i>mieszkanko</i> (+) – <i>nora</i> (–). Wyrazy wartościujące wyrażają <b>ocenę i emocje nadawcy</b> (np. w opinii, reklamie, charakterystyce postaci), neutralne tylko nazywają (np. w tekście informacyjnym).</li>
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
        ['Wyraz wieloznaczny', 'Ma kilka znaczeń; właściwe podpowiada kontekst (ostry nóż, ostry zakręt)'],
        ['Znaczenie przenośne', 'Przeniesione na coś innego: złote serce = dobroć, ciężki dzień = trudny'],
        ['Słownictwo wartościujące', 'Wyraża ocenę i emocje: mieszkanko (+), nora (–); neutralne: mieszkanie'],
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
        { id: 'q7b397', q: 'W którym zdaniu wyraz „złoty” ma znaczenie przenośne?', options: ['Babcia nosi złoty pierścionek.', 'Nasza wychowawczyni ma złote serce.', 'Kupiłem mamie złoty łańcuszek.', 'Król miał złotą koronę.'], answer: 1, explain: '„Złote serce” to nie serce ze złota, tylko dobroć i życzliwość.' },
        { id: 'ka7jgk', q: 'Co znaczy wyraz „ciężki” w zdaniu „Mam za sobą ciężki tydzień.”?', options: ['ważący dużo', 'nudny', 'trudny, męczący', 'krótki'], answer: 2, explain: 'Tydzień nie może ważyć – to znaczenie przenośne.' },
        { id: 'ymnxus', q: 'Wyraz „ostry” jest wieloznaczny. W którym zdaniu znaczy „gwałtowny, nagle zmieniający kierunek”?', options: ['Kroję chleb ostrym nożem.', 'Ta zupa jest bardzo ostra.', 'Mam ostry ból zęba.', 'Kierowca zwolnił przed ostrym zakrętem.'], answer: 3 },
        { id: 'p1633g', q: 'Który wyraz wartościuje pozytywnie?', options: ['mieszkanie', 'nora', 'mieszkanko', 'lokal'], answer: 2, explain: '„Mieszkanie” i „lokal” są neutralne, „nora” – negatywna, „mieszkanko” wyraża sympatię.' },
        { id: 'rt2udw', q: 'Prawda czy fałsz?\nW zdaniu „Ten sprawdzian to dla mnie pestka.” wyraz „pestka” ma znaczenie dosłowne.', options: ['Prawda', 'Fałsz'], answer: 1, noShuffle: true, explain: '„Pestka” znaczy tu „coś bardzo łatwego” – to znaczenie przenośne.' },
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
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996): kl. VII–VIII II.2.1–3 i II.2.6 (słownictwo ogólnonarodowe i o ograniczonym zasięgu, zapożyczenia, nazwy osobowe i miejscowe, sposoby wzbogacania słownictwa, style), II.3.1–3 (grzeczność, norma, błąd językowy), III.1.3 (spójność między akapitami), III.1.8 (manipulacja); kl. IV–VI II.2.1 (cechy języka mówionego i pisanego), II.2.9 (spójność formalna i semantyczna tekstu – zadanie na środki spójności jest w informatorze CKE), II.3.1–3 (nadawca, odbiorca, sytuacja komunikacyjna).',
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
        <h3>Jak wzbogaca się słownictwo?</h3>
        <table>
          <tr><th>Sposób</th><th>Przykłady</th></tr>
          <tr><td>tworzenie wyrazów pochodnych</td><td>drukarka (od: drukować), wyszukiwarka (od: wyszukiwać)</td></tr>
          <tr><td>tworzenie wyrazów złożonych</td><td>długopis, gwiazdozbiór, Wielkanoc</td></tr>
          <tr><td>zapożyczanie wyrazów z innych języków</td><td>weekend, komputer, pizza</td></tr>
          <tr><td>nadawanie nowych znaczeń wyrazom, które już istnieją</td><td>mysz (komputerowa), komórka (telefon)</td></tr>
          <tr><td>tworzenie związków wyrazowych</td><td>dać zielone światło (pozwolić), maszyna do szycia</td></tr>
          <tr><td>skróty i skrótowce</td><td>skróty: np., ul., godz.; skrótowce: PKP, ONZ</td></tr>
        </table>
        <h3>Język mówiony a pisany</h3>
        <table>
          <tr><th>Mówiony</th><th>Pisany</th></tr>
          <tr><td>powstaje na bieżąco, spontanicznie</td><td>przemyślany – można go poprawić przed wysłaniem</td></tr>
          <tr><td>odbiorca zwykle jest obok i może od razu dopytać</td><td>odbiorca czyta później i nie może dopytać</td></tr>
          <tr><td>pomagają intonacja, gesty, mimika</td><td>pomagają interpunkcja, akapity, układ tekstu</td></tr>
          <tr><td>krótkie, czasem niedokończone zdania, powtórzenia, wyrazy potoczne</td><td>pełne, poprawne zdania, staranne słownictwo</td></tr>
        </table>
        <p>SMS-y i czaty są pisane, ale mają wiele cech języka mówionego.</p>
        <h3>Spójność tekstu</h3>
        <ul>
          <li><b>Spójność semantyczna</b> (treściowa) – wszystkie zdania dotyczą tematu, myśli wynikają jedna z drugiej i są ułożone w logicznym porządku.</li>
          <li><b>Spójność formalna</b> (językowa) – zdania łączą się środkami językowymi: wyrazy porządkujące (<i>najpierw, następnie, na koniec</i>), spójniki i wyrazy pokazujące związki myśli (<i>dlatego, jednak, zatem, otóż, ponadto</i>), zaimki zamiast powtórzeń (<i>on, ten, który</i>), synonimy, zgodne formy (ten sam czas, ta sama osoba).</li>
        </ul>
        <div class="tip">✘ „Kupiłem psa. Pies jest czarny. Pies lubi spacery.”<br>✔ „Kupiłem psa. Jest czarny i uwielbia spacery, dlatego codziennie z nim wychodzę.”<br>Na egzaminie może paść polecenie: wypisz z tekstu środki językowe, dzięki którym tekst jest spójny (tak jest w przykładowym zadaniu informatora CKE).</div>
        <h3>Komunikacja i kultura języka</h3>
        <ul>
          <li><b>Nadawca</b> – kto mówi/pisze, <b>odbiorca</b> – do kogo; <b>sytuacja komunikacyjna</b> wpływa na wybór słów.</li>
          <li><b>Grzeczność językowa</b> – formy „proszę, dziękuję, przepraszam”, zwroty „Pan/Pani”.</li>
          <li><b>Norma wzorcowa</b> (staranna, oficjalna) i <b>użytkowa</b> (codzienna, dopuszczalna). <b>Błąd językowy</b> – naruszenie normy.</li>
          <li><b>Manipulacja</b> – wpływanie na odbiorcę w ukryty sposób, np. przemilczenia, uogólnienia („wszyscy to mają!”), wywoływanie emocji zamiast argumentów.</li>
        </ul>
        <h3>Inne formy wypowiedzi z podstawy</h3>
        <p>recenzja, podanie, CV, list motywacyjny, przemówienie, wywiad, rozprawka; streszczenie i parafraza tekstu. Elementy każdej formy – zob. dział <a href="#/s/polski/t/formy-uzytkowe">„Formy wypowiedzi: od ogłoszenia do CV”</a>.</p>
      `,
      flashcards: [
        ['Styl urzędowy', 'Oficjalny, schematyczny – podanie, regulamin'],
        ['Styl naukowy', 'Precyzyjny, terminy – podręcznik'],
        ['Kolokwializm', 'Wyraz potoczny, np. „kasa” = pieniądze'],
        ['Zapożyczenie', 'Wyraz z innego języka, np. weekend'],
        ['Manipulacja', 'Ukryte wpływanie na odbiorcę, np. „wszyscy to mają!”'],
        ['Mieszkaniec Gdańska', 'gdańszczanin'],
        ['Spójność semantyczna', 'Zdania dotyczą tematu i logicznie z siebie wynikają'],
        ['Spójność formalna', 'Zdania łączą: najpierw, dlatego, jednak, zaimki, synonimy'],
        ['Język mówiony', 'Spontaniczny; pomagają intonacja i gesty; krótkie zdania, powtórzenia'],
        ['Język pisany', 'Przemyślany, staranny; pomagają interpunkcja i akapity'],
        ['Sposoby wzbogacania słownictwa', 'Wyrazy pochodne i złożone, zapożyczenia, nowe znaczenia, związki wyrazowe, skróty i skrótowce'],
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
        { id: 'ohvh48', q: 'Która cecha jest typowa dla języka mówionego?', options: ['staranne, pełne zdania', 'możliwość poprawienia tekstu przed wysłaniem', 'intonacja, gesty i mimika, które pomagają zrozumieć wypowiedź', 'akapity i interpunkcja'], answer: 2 },
        { id: '2wleys', q: 'Prawda czy fałsz?\nW języku pisanym rolę intonacji przejmują m.in. znaki interpunkcyjne.', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'Pytajnik, wykrzyknik czy przecinek pokazują to, co w mowie słychać w głosie.' },
        { id: 'rk6i8h', q: 'Który wyraz uzupełni lukę tak, by tekst był spójny: „Najpierw przeczytaj polecenie. ___ podkreśl w nim najważniejsze słowa.”?', options: ['Wczoraj', 'Następnie', 'Natomiast', 'Ponieważ'], answer: 1, explain: '„Najpierw… następnie…” porządkuje kolejność czynności.' },
        { id: 'wcz0m9', q: 'Jak poprawić spójność tekstu „Ola ma kota. Kot jest rudy. Kot lubi spać na parapecie.”?', options: ['dopisać więcej zdań o kocie', 'zapisać każde zdanie w osobnym akapicie', 'zmienić kota na psa', 'zastąpić powtórzenia zaimkiem i połączyć zdania, np. „Ola ma rudego kota, który lubi spać na parapecie.”'], answer: 3 },
        { id: '9cguwt', q: 'Wypracowanie o wycieczce nagle zaczyna opisywać ulubioną grę autora, a potem wraca do wycieczki. Którą zasadę naruszono?', options: ['spójność semantyczną (treściową)', 'zasady ortografii', 'grzeczność językową', 'zasady akcentowania'], answer: 0, explain: 'Wszystkie części tekstu powinny dotyczyć tematu i logicznie się łączyć.' },
        { id: 'ynuxx1', q: 'Wyraz „mysz” w znaczeniu ‘urządzenie do sterowania komputerem’ to przykład wzbogacania słownictwa przez…', options: ['tworzenie skrótowca', 'nadanie nowego znaczenia wyrazowi, który już istniał', 'tworzenie wyrazu złożonego', 'tworzenie zdrobnienia'], answer: 1 },
        { id: 'uvd2xr', q: 'Który wyraz jest skrótowcem?', options: ['np.', 'ul.', 'PKP', 'itd.'], answer: 2, explain: 'Skrótowiec powstaje z pierwszych liter nazwy (Polskie Koleje Państwowe) i czyta się go jako całość. „np.”, „ul.”, „itd.” to skróty.' },
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
        {
          id: 'vu9851',
          points: 2,
          q: 'Popraw spójność tekstu: usuń powtórzenia i połącz zdania wyrazami łączącymi. Zachowaj wszystkie informacje. „Wczoraj byliśmy w muzeum. W muzeum była wystawa o dinozaurach. Wystawa była ciekawa. Na wystawie widzieliśmy szkielet tyranozaura. Szkielet był ogromny.”',
          steps: [
            'Znajdź powtórzenia: muzeum, wystawa, szkielet. Zastąp je zaimkami (który, tam, go) albo połącz zdania.',
            'Połącz krótkie zdania spójnikami i wyrazami łączącymi (gdzie, który, a, najbardziej…).',
            'Sprawdź, czy zostały wszystkie informacje: muzeum, wystawa o dinozaurach, ciekawa, szkielet tyranozaura, ogromny.',
          ],
          answer: 'Wczoraj byliśmy w muzeum na ciekawej wystawie o dinozaurach. Widzieliśmy tam szkielet tyranozaura, który był ogromny.',
          scoring: [
            '1 pkt – usunięte powtórzenia (zaimki, połączenie zdań), zachowane wszystkie informacje.',
            '2 pkt – zdania logicznie połączone wyrazami łączącymi, tekst poprawny językowo.',
          ],
        },
      ],
    },
    {
      id: 'odmiana-zdanie',
      name: 'Odmiana wyrazów i zdanie pojedyncze',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kształcenie językowe, kl. IV–VI: II.1.4 (przypadek, liczba, rodzaj, osoba, czas, tryb), II.1.6 (poprawne formy wyrazów odmiennych), II.1.7 (stopniowanie przymiotników i przysłówków), II.1.8–10 (części zdania, wyrazy poza zdaniem, związki wyrazów), II.1.11 (wypowiedzenia oznajmujące, pytające, rozkazujące), II.1.12–13 (zdanie pojedyncze, złożone, równoważnik zdania; przekształcenia – takie zadanie jest też w informatorze CKE). Części zdania i zdania złożone – zob. dział „Składnia”, strona bierna i imiesłowy – „Części mowy i imiesłowy”.',
      theory: `
        <h3>Przypadki</h3>
        <p>Rzeczownik, przymiotnik, liczebnik i zaimek odmieniają się przez <b>przypadki</b>. Przypadek rozpoznasz po pytaniu.</p>
        <table>
          <tr><th>Przypadek</th><th>Pytania</th><th>Przykład</th></tr>
          <tr><td>mianownik (M.)</td><td>kto? co?</td><td>(to jest) kot, książka</td></tr>
          <tr><td>dopełniacz (D.)</td><td>kogo? czego?</td><td>(nie ma) kota, książki</td></tr>
          <tr><td>celownik (C.)</td><td>komu? czemu?</td><td>(przyglądam się) kotu, książce</td></tr>
          <tr><td>biernik (B.)</td><td>kogo? co?</td><td>(widzę) kota, książkę</td></tr>
          <tr><td>narzędnik (N.)</td><td>(z) kim? (z) czym?</td><td>(idę z) kotem, książką</td></tr>
          <tr><td>miejscownik (Ms.)</td><td>(o) kim? (o) czym?</td><td>(mówię o) kocie, książce</td></tr>
          <tr><td>wołacz (W.)</td><td>o!</td><td>kocie! Kasiu!</td></tr>
        </table>
        <div class="tip">💡 Mianownik to zwykle <b>podmiot</b>. „Kogo?” pasuje i do dopełniacza, i do biernika – dodaj wyraz pomocniczy: <i>nie ma</i> kogo? (D.), <i>widzę</i> kogo? (B.). Po przeczeniu biernik zmienia się w dopełniacz: <i>mam czas</i> → <i>nie mam czasu</i>.</div>
        <h3>Liczba, rodzaj, osoba</h3>
        <ul>
          <li><b>Liczba</b>: pojedyncza (kot) i mnoga (koty). Niektóre rzeczowniki mają tylko liczbę mnogą: <i>drzwi, nożyczki, spodnie, okulary</i>.</li>
          <li><b>Rodzaj</b> w liczbie pojedynczej: męski (ten stół), żeński (ta lampa), nijaki (to okno). W liczbie mnogiej: <b>męskoosobowy</b> (ci chłopcy – oni grali) i <b>niemęskoosobowy</b> (te dziewczyny, te psy – one grały).</li>
          <li><b>Osoba</b> (czasownik, zaimek osobowy): 1. ja / my, 2. ty / wy, 3. on, ona, ono / oni, one.</li>
        </ul>
        <h3>Czasownik: czas i tryb</h3>
        <table>
          <tr><th>Czas</th><th>Przykład</th></tr>
          <tr><td>przeszły</td><td>czytałem, przeczytałem</td></tr>
          <tr><td>teraźniejszy</td><td>czytam – tylko czasowniki niedokonane</td></tr>
          <tr><td>przyszły prosty</td><td>przeczytam – czasowniki dokonane</td></tr>
          <tr><td>przyszły złożony</td><td>będę czytać / będę czytał – czasowniki niedokonane</td></tr>
        </table>
        <table>
          <tr><th>Tryb</th><th>Przykład</th><th>Do czego służy?</th></tr>
          <tr><td>oznajmujący</td><td>czytam, czytałem, będę czytać</td><td>informuje o tym, co jest, było, będzie</td></tr>
          <tr><td>rozkazujący</td><td>czytaj! niech czyta, czytajmy, czytajcie</td><td>polecenie, prośba, rada, zachęta</td></tr>
          <tr><td>przypuszczający</td><td>czytałbym, czytałabyś, czytalibyśmy</td><td>warunek, marzenie, grzeczna prośba („Czy mógłbyś…?”)</td></tr>
        </table>
        <div class="tip">💡 Cząstkę <b>-by</b> piszemy łącznie z osobową formą czasownika: <i>zrobiłbym, poszłabyś</i>.</div>
        <h3>Poprawne formy – typowe błędy</h3>
        <table>
          <tr><th>✔ Poprawnie</th><th>✘ Błędnie</th></tr>
          <tr><td>wziąć, wziąłem, wzięła</td><td>wziąść, wziełem</td></tr>
          <tr><td>poszedłem</td><td>poszłem</td></tr>
          <tr><td>włączać, wyłączać</td><td>włanczać, wyłanczać</td></tr>
          <tr><td>weź, weźcie</td><td>weźmij, weźmijcie</td></tr>
          <tr><td>rozumiem, umiem</td><td>rozumię, umię</td></tr>
          <tr><td>mieliśmy</td><td>mięliśmy</td></tr>
          <tr><td>(czytam) tę książkę – biernik; (z) tą książką – narzędnik</td><td>(czytam) tą książkę – błąd w starannej polszczyźnie</td></tr>
          <tr><td>półtora roku, półtora dnia; półtorej godziny</td><td>półtorej roku, półtora godziny</td></tr>
          <tr><td>Nie mam czasu.</td><td>Nie mam czas.</td></tr>
        </table>
        <h3>Stopniowanie przymiotników i przysłówków</h3>
        <p>Trzy stopnie: <b>równy</b> – <b>wyższy</b> – <b>najwyższy</b>.</p>
        <table>
          <tr><th>Stopniowanie</th><th>Przymiotnik</th><th>Przysłówek</th></tr>
          <tr><td><b>proste</b> (-szy, -ejszy; -ej)</td><td>miły – milszy – najmilszy; ładny – ładniejszy – najładniejszy</td><td>szybko – szybciej – najszybciej; ładnie – ładniej – najładniej</td></tr>
          <tr><td><b>opisowe</b> (bardziej, najbardziej; mniej, najmniej)</td><td>zmęczony – bardziej zmęczony – najbardziej zmęczony</td><td>interesująco – bardziej interesująco – najbardziej interesująco</td></tr>
          <tr><td><b>nieregularne</b> (inny wyraz w stopniu wyższym)</td><td>dobry – lepszy – najlepszy; zły – gorszy – najgorszy; duży – większy – największy; mały – mniejszy – najmniejszy</td><td>dobrze – lepiej – najlepiej; źle – gorzej – najgorzej; dużo – więcej – najwięcej; mało – mniej – najmniej</td></tr>
        </table>
        <div class="tip">⚠️ Nie łącz dwóch sposobów: <s>bardziej lepszy</s>, <s>najbardziej najlepszy</s>. Niektórych przymiotników w ogóle nie stopniujemy, np. <i>drewniany, szkolny, wczorajszy</i>.</div>
        <h3>Związki wyrazów w zdaniu</h3>
        <p>Wyrazy w zdaniu łączą się w pary: <b>nadrzędny</b> (określany) i <b>podrzędny</b> (określający). Pytanie zadajesz od nadrzędnego: <i>brat</i> (jaki?) <i>młodszy</i>.</p>
        <ul>
          <li><b>Związek główny</b> – podmiot + orzeczenie: <i>brat czyta</i>.</li>
          <li><b>Związek zgody</b> – wyraz podrzędny dopasowuje się do nadrzędnego (przypadek, liczba, rodzaj) i odmienia się razem z nim: <i>młodszy brat – młodszego brata – młodszemu bratu</i>.</li>
          <li><b>Związek rządu</b> – wyraz nadrzędny narzuca podrzędnemu przypadek, który się nie zmienia: <i>czytam komiksy, czytałem komiksy; szukam kluczy; pomagam mamie</i>.</li>
          <li><b>Związek przynależności</b> – wyraz podrzędny jest nieodmienny (np. przysłówek, bezokolicznik) i tylko „przylega” do nadrzędnego: <i>czyta szybko, chcę czytać, bardzo ciekawy</i>.</li>
        </ul>
        <p><b>Wyrazy poza zdaniem.</b> Nie każdy wyraz jest częścią zdania: <b>wykrzykniki</b> (<i>Ach!, Hej!</i>) i <b>zwroty do kogoś w wołaczu</b> (<i>Kasiu, poczekaj!</i>) nie wchodzą w związki z innymi wyrazami – oddzielamy je przecinkiem. Przyimek i spójnik nie są samodzielnymi częściami zdania: <i>w parku</i> to jeden okolicznik.</p>
        <h3>Rodzaje wypowiedzeń</h3>
        <table>
          <tr><th>Ze względu na cel</th><th>Przykład</th></tr>
          <tr><td><b>oznajmujące</b> – informuje</td><td>Jutro mamy test.</td></tr>
          <tr><td><b>pytające</b> – o coś pyta</td><td>Czy jutro mamy test?</td></tr>
          <tr><td><b>rozkazujące</b> – polecenie, prośba (wykrzyknik albo kropka)</td><td>Naucz się na test! Proszę otworzyć zeszyty.</td></tr>
        </table>
        <table>
          <tr><th>Ze względu na budowę</th><th>Przykład</th></tr>
          <tr><td><b>zdanie pojedyncze</b> – jedno orzeczenie</td><td>Wieczorem Ola czytała książkę.</td></tr>
          <tr><td><b>zdanie złożone</b> – co najmniej dwa orzeczenia</td><td>Ola czytała, a Tomek grał.</td></tr>
          <tr><td><b>równoważnik zdania</b> – bez osobowej formy czasownika</td><td>Cisza w klasie. Zakaz wjazdu.</td></tr>
        </table>
        <div class="tip">💡 „Idę do kina.” to zdanie, choć nie widać podmiotu – forma czasownika mówi, że chodzi o „ja” (<b>podmiot domyślny</b>). Cel i budowa to dwie różne sprawy: „Zamknij okno!” jest rozkazujące i jest zdaniem pojedynczym.</div>
        <h3>Przekształcenia – ten sam sens, inna budowa</h3>
        <table>
          <tr><th>Zamiana</th><th>Przed</th><th>Po</th></tr>
          <tr><td>złożone → pojedyncze</td><td>Kiedy skończyły się lekcje, poszliśmy do domu.</td><td>Po lekcjach poszliśmy do domu.</td></tr>
          <tr><td>złożone → pojedyncze</td><td>Nie wyszliśmy, ponieważ padał deszcz.</td><td>Nie wyszliśmy z powodu deszczu.</td></tr>
          <tr><td>pojedyncze → złożone</td><td>Po powrocie do domu zjadłem obiad.</td><td>Kiedy wróciłem do domu, zjadłem obiad.</td></tr>
          <tr><td>zdanie → równoważnik</td><td>W lesie panuje cisza.</td><td>Cisza w lesie.</td></tr>
          <tr><td>równoważnik → zdanie</td><td>Koniec lekcji.</td><td>Lekcja się skończyła.</td></tr>
        </table>
        <div class="tip">💡 Zamieniając zdanie złożone na pojedyncze, zastąp zdanie podrzędne <b>jedną częścią zdania</b> – często rzeczownikiem utworzonym od czasownika: <i>wrócić → po powrocie, przyjść → przyjście</i>. Sens musi zostać ten sam. Zamiana na imiesłowowy równoważnik zdania – zob. dział „Części mowy i imiesłowy”.</div>
      `,
      flashcards: [
        ['Siedem przypadków', 'mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik, wołacz'],
        ['Celownik – pytania', 'komu? czemu?'],
        ['Narzędnik – pytania', '(z) kim? (z) czym?'],
        ['Rodzaje w liczbie mnogiej', 'męskoosobowy (ci chłopcy) i niemęskoosobowy (te dziewczyny, te psy)'],
        ['Czas przyszły złożony', 'będę czytać / będę czytał – tylko czasowniki niedokonane'],
        ['Stopniowanie nieregularne', 'dobry – lepszy, zły – gorszy, duży – większy, mały – mniejszy; dobrze – lepiej, źle – gorzej'],
        ['Związek zgody', 'Podrzędny odmienia się razem z nadrzędnym: młodszy brat – młodszego brata'],
        ['Związek rządu', 'Nadrzędny narzuca stały przypadek: szukam kluczy, pomagam mamie'],
        ['Związek przynależności', 'Wyraz nieodmienny przylega do nadrzędnego: czyta szybko, chcę czytać'],
        ['Zdanie pojedyncze', 'Ma jedno orzeczenie: „Wieczorem Ola czytała książkę.”'],
        ['wziąć czy wziąść?', 'wziąć (wziąłem, wzięła); też: poszedłem, weź, rozumiem, włączać'],
      ],
      questions: [
        { id: 'a7h51e', q: 'Na jakie pytania odpowiada celownik?', options: ['kogo? czego?', 'komu? czemu?', '(z) kim? (z) czym?', '(o) kim? (o) czym?'], answer: 1 },
        { id: 'l7xsnh', q: 'W jakim przypadku jest wyraz „bratu” w zdaniu „Pomagam bratu w lekcjach.”?', options: ['w dopełniaczu', 'w bierniku', 'w celowniku', 'w miejscowniku'], answer: 2, explain: 'Pomagam komu? – bratu. Pytanie „komu?” to celownik.' },
        { id: '4g7is6', q: 'W zdaniu „Nie widzę mojego plecaka.” wyraz „plecaka” jest w…', options: ['bierniku', 'mianowniku', 'narzędniku', 'dopełniaczu'], answer: 3, explain: 'Nie widzę kogo? czego? – plecaka. Po przeczeniu biernik zmienia się w dopełniacz: widzę plecak – nie widzę plecaka.' },
        { id: '742o1b', q: 'Który rzeczownik ma tylko liczbę mnogą?', options: ['nożyczki', 'krzesła', 'książki', 'okna'], answer: 0, explain: 'Nie ma formy „jedna nożyczka”. Tak samo: drzwi, spodnie, okulary.' },
        { id: 'gg3eqk', q: 'W którym zdaniu podmiot jest rodzaju męskoosobowego?', options: ['Psy szczekały.', 'Dziewczyny śpiewały.', 'Chłopcy grali w piłkę.', 'Okna były otwarte.'], answer: 2, explain: 'Rodzaj męskoosobowy to „oni” – mężczyźni (czasownik: grali). Pozostałe to „one” – rodzaj niemęskoosobowy (szczekały, śpiewały, były).' },
        { id: 'mplk98', q: 'W jakim czasie jest czasownik „będę pisał”?', options: ['przeszłym', 'teraźniejszym', 'przyszłym prostym', 'przyszłym złożonym'], answer: 3 },
        { id: 'mjm57s', q: 'Który czasownik NIE ma czasu teraźniejszego?', options: ['czytać', 'biegać', 'śpiewać', 'napisać'], answer: 3, explain: 'Czasowniki dokonane (napisać) mają tylko czas przeszły i przyszły prosty: napisałem, napiszę.' },
        { id: 'dpnypu', q: 'W którym zdaniu tryb przypuszczający wyraża grzeczną prośbę?', options: ['Czy mógłbyś zamknąć okno?', 'Zamknij okno!', 'Zamknąłem okno.', 'Okno jest zamknięte.'], answer: 0 },
        { id: 'tirbhl', q: 'Jaki jest stopień najwyższy przymiotnika „zły”?', options: ['najzłejszy', 'najbardziej zły', 'najgorszy', 'najgorzej'], answer: 2, explain: '„Zły” stopniuje się nieregularnie: zły – gorszy – najgorszy. „Najgorzej” to stopień najwyższy przysłówka „źle”.' },
        { id: 'k35na8', q: 'Który przymiotnik stopniuje się w sposób prosty?', options: ['zmęczony', 'drewniany', 'zadowolony', 'ładny'], answer: 3, explain: 'ładny – ładniejszy – najładniejszy. „Zmęczony” i „zadowolony” stopniujemy opisowo (bardziej, najbardziej), a „drewniany” się nie stopniuje.' },
        { id: 'vqdbk1', q: 'Stopień wyższy przysłówka „dobrze” to…', options: ['lepszy', 'dobrzej', 'bardziej dobrze', 'lepiej'], answer: 3, explain: '„Lepszy” to stopień wyższy przymiotnika „dobry”.' },
        { id: 'id55m6', q: 'Które zdanie jest poprawne?', options: ['Ten rower jest bardziej lepszy.', 'Ten rower jest najbardziej lepszy.', 'Ten rower jest lepszy.', 'Ten rower jest bardziej dobrzejszy.'], answer: 2, explain: '„Lepszy” to już stopień wyższy – nie dodajemy „bardziej”.' },
        { id: 'hnodn5', q: 'Którego przymiotnika nie stopniujemy?', options: ['wysoki', 'ciekawy', 'mądry', 'drewniany'], answer: 3, explain: 'Coś jest z drewna albo nie – nie może być „bardziej drewniane”.' },
        { id: 'n7wkgq', q: 'W którym zdaniu forma czasownika jest poprawna?', options: ['Wczoraj poszłem do kina.', 'Weźmij parasol!', 'Nie rozumię tego zadania.', 'Wziąłem ze sobą parasol.'], answer: 3, explain: 'Poprawnie: poszedłem, weź, rozumiem, wziąłem.' },
        { id: 'i53h9k', q: 'Która forma jest poprawna?', options: ['półtorej roku', 'półtora godziny', 'półtorej godziny', 'półtorej dnia'], answer: 2, explain: '„Półtorej” – z rzeczownikami rodzaju żeńskiego (godzina), „półtora” – z męskimi i nijakimi (rok, dzień).' },
        { id: 'vab3pt', q: 'Które zdanie jest zgodne z normą wzorcową?', options: ['Poproszę tą bluzę.', 'Nie mam czas.', 'Poproszę tę bluzę.', 'Włanczam komputer.'], answer: 2, explain: 'Biernik: tę bluzę („tą” – narzędnik: z tą bluzą). Poprawnie też: nie mam czasu, włączam.' },
        { id: 'br6zwu', q: 'Jaki związek tworzą wyrazy „młodszy brat”?', options: ['związek zgody', 'związek rządu', 'związek przynależności', 'związek główny'], answer: 0, explain: 'Przymiotnik odmienia się razem z rzeczownikiem: młodszego brata, młodszemu bratu.' },
        { id: 'qw1eiu', q: 'Jaki związek tworzą wyrazy „szukam kluczy”?', options: ['zgody', 'rządu', 'przynależności', 'główny'], answer: 1, explain: '„Szukać” wymaga dopełniacza (czego?): szukam kluczy, szukałem kluczy – przypadek się nie zmienia.' },
        { id: '60y40d', q: 'Jaki związek tworzą wyrazy „biegnie szybko”?', options: ['zgody', 'rządu', 'główny', 'przynależności'], answer: 3, explain: 'Przysłówek „szybko” jest nieodmienny – tylko przylega do czasownika.' },
        { id: '4mizcj', q: 'Co jest związkiem głównym w zdaniu „Wczoraj nasza drużyna wygrała mecz.”?', options: ['nasza drużyna', 'wygrała mecz', 'drużyna wygrała', 'wczoraj wygrała'], answer: 2, explain: 'Związek główny to podmiot (drużyna) i orzeczenie (wygrała).' },
        { id: 'ki61i5', q: 'Które wypowiedzenie jest rozkazujące?', options: ['Proszę zamknąć drzwi.', 'Drzwi są zamknięte.', 'Czy drzwi są zamknięte?', 'Zamknąłem drzwi.'], answer: 0, explain: 'Wyraża prośbę (polecenie). Wypowiedzenie rozkazujące może kończyć się kropką.' },
        { id: 'wehfy0', q: 'Które wypowiedzenie jest zdaniem pojedynczym?', options: ['Ola czyta, a Tomek gra.', 'Rano Ola przeczytała list od babci.', 'Cisza w bibliotece.', 'Kiedy przyszłam, Ola czytała.'], answer: 1, explain: 'Ma jedno orzeczenie (przeczytała). „Cisza w bibliotece” to równoważnik zdania.' },
        { id: 'optv9j', q: 'Które zdanie pojedyncze ma ten sam sens co „Kiedy skończył się koncert, wróciliśmy do domu.”?', options: ['Po koncercie wróciliśmy do domu.', 'Przed koncertem wróciliśmy do domu.', 'Koncert i dom.', 'Wróciliśmy do domu, bo był koncert.'], answer: 0 },
        { id: 'vcxz58', q: 'Który równoważnik zdania ma ten sam sens co zdanie „Wjazd jest zabroniony.”?', options: ['Zakaz wjazdu.', 'Wjazd jest otwarty.', 'Nie wjeżdżaj!', 'Wjeżdżamy.'], answer: 0, explain: '„Zakaz wjazdu.” nie ma osobowej formy czasownika. „Nie wjeżdżaj!” to zdanie (wjeżdżaj – tryb rozkazujący).' },
        { id: '9dfd4o', q: 'Czym jest wyraz „Kasiu” w zdaniu „Kasiu, podaj mi sól.”?', options: ['podmiotem', 'dopełnieniem', 'zwrotem w wołaczu – stoi poza związkami zdania', 'okolicznikiem'], answer: 2, explain: 'Wołacz to zwrot do kogoś – oddzielamy go przecinkiem. Podmiot jest domyślny: (ty) podaj.' },
      ],
      tasks: [
        {
          id: 'tixg3o',
          points: 2,
          q: 'Przekształć zdania złożone na zdania pojedyncze, zachowując ich sens: a) „Kiedy skończyły się lekcje, poszliśmy na boisko.” b) „Nie pojechaliśmy na wycieczkę, ponieważ padał ulewny deszcz.”',
          steps: [
            'Zdanie pojedyncze ma jedno orzeczenie – jedno z orzeczeń (skończyły się, padał) musi zniknąć.',
            'Zdanie podrzędne zastąp jedną częścią zdania: w a) okolicznikiem czasu (kiedy?), w b) okolicznikiem przyczyny (dlaczego?).',
            'Pomagają wyrażenia z przyimkiem i rzeczownikiem: po lekcjach, z powodu deszczu.',
          ],
          answer: 'a) Po lekcjach poszliśmy na boisko. b) Nie pojechaliśmy na wycieczkę z powodu ulewnego deszczu.',
          scoring: [
            '1 pkt – poprawnie przekształcone zdanie a) (jedno orzeczenie, ten sam sens).',
            '2 pkt – poprawnie przekształcone zdanie b).',
          ],
        },
        {
          id: 'dcre6k',
          points: 2,
          q: 'a) Zamień zdanie na równoważnik zdania: „W bibliotece panuje cisza.” b) Zamień równoważnik zdania na zdanie: „Koniec wakacji.”',
          steps: [
            'Równoważnik zdania nie ma osobowej formy czasownika – usuń orzeczenie (panuje) i zostaw najważniejsze wyrazy.',
            'Żeby z równoważnika zrobić zdanie, dodaj osobową formę czasownika, np. skończyły się, dobiegły.',
            'Sprawdź, czy sens się nie zmienił.',
          ],
          answer: 'a) Cisza w bibliotece. b) Wakacje się skończyły. (albo: Wakacje dobiegły końca.)',
          scoring: [
            '1 pkt – poprawny równoważnik w a) (bez osobowej formy czasownika, ten sam sens).',
            '2 pkt – poprawne zdanie w b) (z osobową formą czasownika, ten sam sens).',
          ],
        },
        {
          id: 'oc25st',
          points: 3,
          q: 'W zdaniu „Mój młodszy brat szybko czyta komiksy.” wskaż związek główny, a potem wypisz po jednym związku zgody, rządu i przynależności.',
          steps: [
            'Związek główny: kto czyta? – brat czyta (podmiot + orzeczenie).',
            'Zgoda: wyraz podrzędny odmienia się razem z nadrzędnym (młodszy brat → młodszego brata). Rząd: nadrzędny narzuca przypadek (czyta co? – komiksy; czytał komiksy – przypadek ten sam).',
            'Przynależność: wyraz nieodmienny przylega do nadrzędnego (czyta jak? – szybko).',
          ],
          answer: 'Związek główny: brat czyta. Zgody: młodszy brat (albo: mój brat). Rządu: czyta komiksy. Przynależności: czyta szybko.',
          scoring: [
            '1 pkt – poprawny związek zgody (młodszy brat / mój brat).',
            '2 pkt – poprawny związek rządu (czyta komiksy).',
            '3 pkt – poprawny związek przynależności (czyta szybko).',
          ],
        },
      ],
    },
    {
      id: 'formy-uzytkowe',
      name: 'Formy wypowiedzi: od ogłoszenia do CV',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), tworzenie wypowiedzi: kl. IV–VI III.2.1 (m.in. opis, w tym opis przeżyć wewnętrznych, list, sprawozdanie, dedykacja, zaproszenie, podziękowanie, ogłoszenie, życzenia, charakterystyka), III.2.3–4 (plan odtwórczy i twórczy, notatki), III.2.7 (współczesne formy komunikatów); kl. VII–VIII III.2.1 (recenzja, podanie, CV, list motywacyjny, wywiad), III.2.2 (streszczenie, parafraza). Informator CKE o egzaminie ósmoklasisty od r. szk. 2024/2025: zadania krótkiej odpowiedzi sprawdzające tworzenie form użytkowych – ogłoszenia i zaproszenia – oraz przykładowe zadanie na streszczenie (opisane tu zasady oceniania pochodzą z przykładowych zadań informatora). Opowiadanie, rozprawka i przemówienie – dział „Egzamin i wypracowanie”.',
      theory: `
        <h3>Na egzaminie: zaproszenie i ogłoszenie</h3>
        <p>Według informatora CKE w części I arkusza mogą być zadania sprawdzające <b>formy użytkowe – ogłoszenie i zaproszenie</b>. W przykładowych zadaniach informatora taki tekst jest za <b>3 pkt</b>: 2 pkt za treść i formę, 1 pkt za poprawność.</p>
        <table>
          <tr><th></th><th>Zaproszenie</th><th>Ogłoszenie</th></tr>
          <tr><td>Cel</td><td>zaprosić adresatów na wydarzenie i zachęcić do udziału</td><td>poinformować wielu odbiorców o wydarzeniu lub sprawie</td></tr>
          <tr><td>5 elementów</td><td>kto zaprasza? kogo? na co? kiedy? gdzie?</td><td>kto ogłasza? dla kogo? o czym? kiedy? gdzie?</td></tr>
          <tr><td>Zachęta</td><td colspan="2">gdy polecenie każe zachęcić – podaj <b>2 argumenty</b> (np. co ciekawego się wydarzy, co uczestnik zyska)</td></tr>
          <tr><td>Język</td><td>zwroty grzecznościowe („Serdecznie zapraszamy…”), zwroty do adresatów z grzeczności wielką literą (Was, Wam)</td><td>zwięźle i konkretnie</td></tr>
          <tr><td>Typowy błąd</td><td>brak nadawcy (podpisu), daty albo miejsca</td><td>brak informacji, kto ogłasza; zbędne opisy zamiast konkretów</td></tr>
        </table>
        <div class="tip">⚠️ Tak oceniano przykładowe zadania w informatorze CKE. <b>Treść i forma (0–2 pkt):</b> treść zgodna z poleceniem i 2 argumenty oraz <b>wszystkie 5 elementów</b> = 2 pkt, 4 elementy = 1 pkt, tylko 3 elementy = 0 pkt; 5 elementów, ale tylko 1 argument = 1 pkt. <b>Poprawność (0–1 pkt):</b> łącznie najwyżej <b>2 błędy</b> językowe, ortograficzne i interpunkcyjne. Oba kryteria ocenia się osobno.</div>
        <h3>Inne formy z klas IV–VI</h3>
        <table>
          <tr><th>Forma – do czego służy</th><th>Co musi zawierać · ✘ typowy błąd</th></tr>
          <tr><td><b>Życzenia</b> – z okazji świąt, urodzin, imienin</td><td>zwrot do adresata, okazja, treść życzeń, podpis<br>✘ <i>brak okazji albo podpisu; same ogólniki</i></td></tr>
          <tr><td><b>Podziękowanie</b> – wyrażenie wdzięczności</td><td>komu dziękujesz, za co, kto dziękuje (podpis)<br>✘ <i>nie wiadomo, za co dziękujesz</i></td></tr>
          <tr><td><b>Dedykacja</b> – krótki wpis, np. w książce podarowanej komuś</td><td>komu (np. „Kochanej Babci”), z jakiej okazji lub dlaczego, podpis, często data<br>✘ <i>brak adresata albo podpisu</i></td></tr>
          <tr><td><b>List</b> – wiadomość do kogoś, kto jest daleko</td><td>miejscowość i data (prawy górny róg), zwrot do adresata, treść (wstęp, rozwinięcie, zakończenie), pozdrowienia, podpis; może być dopisek (PS)<br>✘ <i>brak daty, zwrotu do adresata albo podpisu</i></td></tr>
          <tr><td><b>E-mail</b> (współczesna forma komunikatu)</td><td>temat wiadomości, powitanie, treść, pożegnanie, podpis<br>✘ <i>brak tematu; styl potoczny w wiadomości do nauczyciela lub urzędu</i></td></tr>
          <tr><td><b>Sprawozdanie</b> – relacja z wydarzenia, w którym brałeś udział</td><td>co, gdzie, kiedy, kto uczestniczył; przebieg w kolejności, w jakiej się działo; na końcu ocena lub wrażenia<br>✘ <i>zmyślone zdarzenia jak w opowiadaniu; pomieszana kolejność</i></td></tr>
          <tr><td><b>Opis</b> przedmiotu, miejsca, postaci</td><td>wstęp (co opisujesz), opis uporządkowany, np. od ogółu do szczegółu, zakończenie (ocena, wrażenie)<br>✘ <i>chaotyczne skakanie po szczegółach</i></td></tr>
          <tr><td><b>Opis przeżyć wewnętrznych</b> – przedstawia uczucia</td><td>sytuacja, która wywołała uczucia; nazwy emocji i to, jak się zmieniały; objawy (drżące ręce, ściśnięte gardło); porównania<br>✘ <i>opowiadanie wydarzeń zamiast opisu uczuć</i></td></tr>
          <tr><td><b>Charakterystyka</b> – przedstawienie postaci</td><td>kim jest postać, wygląd (krótko), cechy charakteru <b>poparte przykładami</b> zachowań, ocena postaci<br>✘ <i>lista cech bez przykładów; sam opis wyglądu</i></td></tr>
          <tr><td><b>Plan</b> – odtwórczy (przeczytanego tekstu) lub twórczy (własnej wypowiedzi)</td><td>punkty w kolejności, zapisane <b>konsekwentnie</b>: same zdania albo same równoważniki zdań<br>✘ <i>mieszanie zdań i równoważników</i></td></tr>
          <tr><td><b>Notatka</b> – zapis najważniejszych informacji</td><td>tekst ciągły, plan, tabela albo schemat; tylko kluczowe informacje<br>✘ <i>przepisywanie całych zdań z tekstu</i></td></tr>
        </table>
        <h3>Formy z klas VII–VIII</h3>
        <table>
          <tr><th>Forma – do czego służy</th><th>Co musi zawierać · ✘ typowy błąd</th></tr>
          <tr><td><b>Recenzja</b> – ocena książki, filmu, spektaklu, wystawy</td><td>tytuł i twórca (autor, reżyser), krótka informacja o treści, ocena elementów dzieła z uzasadnieniem, ocena ogólna (polecam / nie polecam)<br>✘ <i>streszczenie całej fabuły z zakończeniem zamiast oceny; ocena bez uzasadnienia</i></td></tr>
          <tr><td><b>Podanie</b> – oficjalna prośba do szkoły, urzędu, instytucji</td><td>miejscowość i data (prawy górny róg), dane nadawcy (lewy górny róg), adresat (po prawej), prośba i jej <b>uzasadnienie</b>, zwrot grzecznościowy, własnoręczny podpis; styl urzędowy<br>✘ <i>brak uzasadnienia albo podpisu; styl potoczny</i></td></tr>
          <tr><td><b>CV</b> (życiorys) – przedstawienie kandydata do szkoły lub pracy</td><td>dane osobowe i kontaktowe, wykształcenie, doświadczenie, umiejętności (np. języki obce), zainteresowania; w punktach, od najnowszych informacji<br>✘ <i>pisanie CV jak opowiadania; informacje nieistotne dla adresata</i></td></tr>
          <tr><td><b>List motywacyjny</b> – dołączony do CV; przekonuje, że jesteś dobrym kandydatem</td><td>miejscowość i data, dane nadawcy i adresata, zwrot do adresata, o co się ubiegasz, twoje umiejętności i motywacja (z przykładami), zakończenie z nadzieją na pozytywną odpowiedź, podpis<br>✘ <i>przepisanie CV; ogólniki („jestem pracowity”) bez przykładów</i></td></tr>
          <tr><td><b>Wywiad</b> – rozmowa z ciekawą osobą zapisana jako pytania i odpowiedzi</td><td>wstęp (kim jest rozmówca), pytania i odpowiedzi oznaczone imionami lub inicjałami, podziękowanie na końcu<br>✘ <i>pytania, na które wystarczy odpowiedzieć „tak” albo „nie”</i></td></tr>
        </table>
        <div class="tip">📝 Opowiadanie, rozprawka, przemówienie (tekst argumentacyjny) i zapis dialogu – zob. dział <a href="#/s/polski/t/formy-wypowiedzi">„Egzamin i wypracowanie”</a>. To formy wypracowania z części II arkusza.</div>
        <h3>Streszczenie i parafraza</h3>
        <table>
          <tr><th></th><th>Streszczenie</th><th>Parafraza</th></tr>
          <tr><td>Co robi?</td><td>skraca tekst – zostają tylko najważniejsze informacje</td><td>przekształca tekst – ta sama treść innymi słowami, często z objaśnieniem</td></tr>
          <tr><td>Długość</td><td>dużo krótsze od oryginału</td><td>podobna jak oryginał albo dłuższa</td></tr>
          <tr><td>Zasady</td><td>własne słowa, kolejność jak w tekście; bez szczegółów, dialogów, cytatów i własnych ocen</td><td>zachowany sens i wszystkie myśli, prostszy język; bez dodawania własnych opinii</td></tr>
        </table>
        <div class="tip">⚠️ W przykładowym zadaniu informatora CKE na streszczenie trzeba było podać <b>temat</b> tekstu i <b>to, co na ten temat powiedziano</b>, zachowując <b>właściwy poziom uogólnienia</b> (bez drobnych szczegółów). Odpowiedź złożona w całości z fragmentów przepisanych z tekstu dostaje 0 pkt.</div>
      `,
      flashcards: [
        ['Zaproszenie – 5 elementów', 'kto zaprasza? kogo? na co? kiedy? gdzie?'],
        ['Ogłoszenie – 5 elementów', 'kto ogłasza? dla kogo? o czym? kiedy? gdzie?'],
        ['Polecenie „zachęć” w zaproszeniu / ogłoszeniu', 'Podaj 2 argumenty'],
        ['Punkt za poprawność w zaproszeniu / ogłoszeniu', 'Łącznie najwyżej 2 błędy (językowe, ortograficzne, interpunkcyjne)'],
        ['Podanie – najważniejsze', 'Prośba z uzasadnieniem, dane nadawcy i adresata, data, podpis, styl urzędowy'],
        ['CV', 'Dane, wykształcenie, umiejętności, zainteresowania – w punktach, od najnowszych'],
        ['List motywacyjny', 'Dołączony do CV; przekonuje, że jesteś dobrym kandydatem – z przykładami'],
        ['Recenzja', 'Informacja o dziele + ocena z uzasadnieniem; nie zdradza zakończenia'],
        ['Wywiad', 'Wstęp o rozmówcy, pytania i odpowiedzi, podziękowanie'],
        ['Streszczenie', 'Krótko, własnymi słowami, najważniejsze treści; bez ocen i cytatów'],
        ['Parafraza', 'Ta sama treść innymi słowami, często z objaśnieniem; długość podobna'],
        ['Charakterystyka', 'Kim jest postać, wygląd, cechy poparte przykładami, ocena'],
        ['Plan – zasada zapisu', 'Konsekwentnie: same zdania albo same równoważniki'],
        ['Sprawozdanie', 'Relacja z wydarzenia: co, gdzie, kiedy; przebieg po kolei; ocena'],
      ],
      questions: [
        { id: 'yw4fog', q: 'Który element NIE należy do pięciu elementów zaproszenia ocenianych w zadaniach z informatora CKE?', options: ['kto zaprasza', 'kiedy odbywa się wydarzenie', 'ile kosztował wynajem sali', 'gdzie odbywa się wydarzenie'], answer: 2, explain: 'Pięć elementów: kto zaprasza? kogo? na co? kiedy? gdzie?' },
        { id: 'ok1fb5', q: 'Polecenie brzmi: „Zredaguj ogłoszenie i zachęć do udziału w wydarzeniu”. Ile argumentów trzeba podać według zasad z informatora CKE, żeby dostać pełną liczbę punktów za treść?', options: ['jeden', 'dwa', 'trzy', 'żadnego'], answer: 1, explain: '5 elementów i tylko 1 argument to 1 pkt zamiast 2.' },
        { id: 'oh1o9h', q: 'Ogłoszenie ma wszystkie 5 elementów i dwa argumenty, ale łącznie 4 błędy ortograficzne i interpunkcyjne. Ile punktów (w skali 0–3 jak w informatorze CKE) dostanie?', options: ['3', '2', '1', '0'], answer: 1, explain: '2 pkt za treść i formę + 0 pkt za poprawność (punkt jest za najwyżej 2 błędy).' },
        { id: 'rcr1ij', q: 'Czym zaproszenie różni się od ogłoszenia?', options: ['zaproszenie nie podaje miejsca wydarzenia', 'zaproszenie zwraca się do adresatów i zaprasza ich do udziału, ogłoszenie informuje szerokie grono odbiorców', 'ogłoszenie zawsze jest pisane wierszem', 'niczym się nie różnią'], answer: 1 },
        { id: 'lp08ud', q: 'Który element jest obowiązkowy w podaniu?', options: ['uzasadnienie prośby', 'dialog', 'pytanie retoryczne', 'puenta'], answer: 0 },
        { id: 'b4puff', q: 'Gdzie w podaniu zapisuje się miejscowość i datę?', options: ['pod podpisem', 'w lewym dolnym rogu', 'w prawym górnym rogu', 'nie zapisuje się ich'], answer: 2 },
        { id: 'ovgznp', q: 'Czym streszczenie różni się od parafrazy?', options: ['streszczenie zawiera ocenę tekstu, a parafraza nie', 'parafraza jest zawsze dużo krótsza od streszczenia', 'niczym – to dwie nazwy tego samego', 'streszczenie skraca tekst do najważniejszych informacji, a parafraza oddaje całą treść innymi słowami'], answer: 3 },
        { id: 'dqykmo', q: 'Czego NIE powinno być w streszczeniu?', options: ['najważniejszych wydarzeń', 'własnych ocen i dialogów', 'kolejności wydarzeń jak w tekście', 'informacji o temacie tekstu'], answer: 1 },
        { id: 'ul5uql', q: 'Prawda czy fałsz?\nStreszczenie złożone w całości z przepisanych zdań tekstu jest dobre, bo wiernie oddaje treść.', options: ['Prawda', 'Fałsz'], answer: 1, noShuffle: true, explain: 'Streszczamy własnymi słowami. W przykładowym zadaniu CKE taka odpowiedź dostaje 0 pkt.' },
        { id: 'vm06dj', q: 'Która wypowiedź jest parafrazą przysłowia „Kto pyta, nie błądzi”?', options: ['Pytanie to błąd.', 'Ten, kto pyta, gdy czegoś nie wie, nie popełnia błędów.', 'Błądzić jest rzeczą ludzką.', 'Kto nie pyta, ten pyta.'], answer: 1 },
        { id: 'a4f6eo', q: 'Co jest najważniejsze w recenzji?', options: ['dokładne opowiedzenie zakończenia', 'ocena dzieła z uzasadnieniem', 'dialog bohaterów', 'życiorys aktorów'], answer: 1 },
        { id: '1lm4mf', q: 'Jak zwykle układa się informacje w CV?', options: ['jak opowiadanie, od dzieciństwa', 'wierszem', 'w formie dialogu', 'w punktach, od najnowszych'], answer: 3 },
        { id: '7g536l', q: 'Do czego służy list motywacyjny?', options: ['opowiada historię rodziny', 'zaprasza na urodziny', 'przekonuje adresata, że jesteś dobrym kandydatem, np. do szkoły', 'streszcza lekturę'], answer: 2 },
        { id: 'ttps54', q: 'Które pytanie najlepiej nadaje się do wywiadu z podróżnikiem?', options: ['Czy lubi pan podróże?', 'Czy był pan kiedyś w górach?', 'Co najbardziej zaskoczyło pana podczas ostatniej wyprawy?', 'Czy ma pan plecak?'], answer: 2, explain: 'Pytanie otwarte zachęca do ciekawej odpowiedzi; na pozostałe wystarczy „tak” albo „nie”.' },
        { id: 'nzcgsn', q: 'Co musi się znaleźć w charakterystyce postaci?', options: ['dialog', 'dokładne streszczenie utworu', 'data i podpis', 'cechy charakteru poparte przykładami zachowań'], answer: 3 },
        { id: '5mhqkz', q: 'Który plan jest zapisany poprawnie (konsekwentnie)?', options: ['1. Wyjazd na obóz. 2. Bohater gubi się w lesie. 3. Szczęśliwy powrót.', '1. Wyjazd na obóz. 2. Zgubienie się w lesie. 3. Szczęśliwy powrót.', '1. Bohater wyjeżdża. 2. Zgubienie się. 3. Wrócił szczęśliwie.', '1. Wyjazd. 2. Gubi się. 3. Powrót.'], answer: 1, explain: 'Wszystkie punkty to równoważniki zdań. W pozostałych zdania mieszają się z równoważnikami.' },
        { id: 'sdgejp', q: 'Czym sprawozdanie różni się od opowiadania?', options: ['sprawozdanie relacjonuje wydarzenie, w którym się uczestniczyło, w kolejności, w jakiej przebiegało', 'sprawozdanie musi mieć dialog i zwrot akcji', 'sprawozdanie pisze się wierszem', 'niczym się nie różni'], answer: 0 },
        { id: '3f06ox', q: 'Co jest najważniejsze w opisie przeżyć wewnętrznych?', options: ['dokładny opis wyglądu pokoju', 'przedstawienie uczuć i tego, jak się zmieniały', 'podanie daty i miejsca', 'lista wydarzeń dnia'], answer: 1 },
        { id: 'xn2v17', q: 'Co musi zawierać podziękowanie?', options: ['cenę prezentu', 'argumenty i kontrargumenty', 'informację, komu i za co dziękujemy, oraz podpis', 'datę urodzenia adresata'], answer: 2 },
        { id: '4yecuv', q: 'Która informacja jest zbędna w ogłoszeniu o szkolnym kiermaszu ciast?', options: ['data i godzina', 'miejsce', 'kto organizuje kiermasz', 'przepis babci na sernik'], answer: 3, explain: 'Ogłoszenie ma być zwięzłe – podaje tylko potrzebne informacje.' },
      ],
      tasks: [
        {
          id: 'd9el6m',
          points: 3,
          q: 'Zredaguj zaproszenie na szkolny Dzień Gier Planszowych organizowany przez samorząd uczniowski. Zachęć do udziału, podając dwa argumenty. Wymyśl brakujące szczegóły. W ocenie liczy się też poprawność językowa, ortograficzna i interpunkcyjna.',
          steps: [
            'Sprawdź 5 elementów: kto zaprasza (samorząd), kogo (np. uczniów klas 4–8), na co (Dzień Gier Planszowych), kiedy (data i godzina), gdzie (np. biblioteka szkolna).',
            'Dodaj dwa argumenty: co ciekawego się wydarzy i co uczestnik zyska.',
            'Użyj zwrotów grzecznościowych („Serdecznie zapraszamy…”) i przeczytaj tekst jeszcze raz – szukaj błędów.',
          ],
          answer: 'Zaproszenie. Samorząd Uczniowski serdecznie zaprasza uczniów klas 4–8 na Dzień Gier Planszowych, który odbędzie się 14 marca w godzinach 15.00–18.00 w bibliotece szkolnej. Czekają na Was dziesiątki gier – od szybkich karcianek po długie strategie – a zasady wytłumaczą Wam doświadczeni gracze. To także świetna okazja, by poznać kolegów i koleżanki z innych klas. Do zobaczenia! Samorząd Uczniowski',
          scoring: [
            'Treść i forma: 1 pkt – treść zgodna z poleceniem, 2 argumenty, 4 z 5 elementów (albo 5 elementów i 1 argument).',
            'Treść i forma: 2 pkt – treść zgodna z poleceniem, 2 argumenty i wszystkie 5 elementów (kto, kogo, na co, kiedy, gdzie).',
            'Poprawność (oceniana osobno): 1 pkt – łącznie najwyżej 2 błędy językowe, ortograficzne i interpunkcyjne. Punktacja orientacyjna, wzorowana na przykładach z informatora CKE.',
          ],
        },
        {
          id: 'pypo2p',
          points: 2,
          q: 'Streść akapit w jednym–dwóch zdaniach (do 30 wyrazów): „Wielu uczniów zapomina treść lektury już kilka tygodni po jej przeczytaniu. Dobrym sposobem, by temu zapobiec, jest prowadzenie dziennika czytelniczego. Wystarczy po każdym rozdziale zapisać w zeszycie kilka zdań: co się wydarzyło, kto brał w tym udział i co nas zaskoczyło. Takie notatki zajmują tylko kilka minut, a przed sprawdzianem pozwalają szybko przypomnieć sobie fabułę. Co więcej, zapisując własne wrażenia, uczymy się formułować opinie, które przydają się później w wypracowaniu.”',
          steps: [
            'Ustal temat: o czym jest akapit? – o prowadzeniu dziennika czytelniczego.',
            'Ustal, co autor o tym mówi: dziennik pomaga zapamiętać treść lektury i uczy formułowania opinii.',
            'Pomiń szczegóły (kilka minut, po każdym rozdziale, w zeszycie) i pisz własnymi słowami – nie przepisuj zdań.',
          ],
          answer: 'Tekst dotyczy prowadzenia dziennika czytelniczego. Autor przekonuje, że regularne, krótkie notatki z lektury pomagają zapamiętać jej treść i uczą formułowania własnych opinii.',
          scoring: [
            '1 pkt – poprawnie podany temat (dziennik czytelniczy) i to, co autor o nim mówi (pomaga zapamiętać lekturę, uczy formułowania opinii).',
            '2 pkt – właściwy poziom uogólnienia: bez drobnych szczegółów, własnymi słowami, nie przepisane z tekstu.',
          ],
        },
        {
          id: 'j59www',
          points: 2,
          q: 'Sparafrazuj zdanie z regulaminu wycieczki tak, żeby zrozumiał je młodszy uczeń: „Uczestnicy wycieczki zobowiązani są do bezwzględnego przestrzegania poleceń opiekunów oraz niezwłocznego informowania ich o wszelkich problemach zdrowotnych.”',
          steps: [
            'Parafraza zachowuje sens i wszystkie informacje, ale wyraża je innymi, prostszymi słowami.',
            'Zdanie zawiera dwie informacje: trzeba słuchać opiekunów i od razu mówić im o złym samopoczuciu.',
            'Zamień trudne wyrazy: zobowiązani są → trzeba / musisz; bezwzględnego → zawsze; niezwłocznego → od razu.',
          ],
          answer: 'Na wycieczce musisz zawsze słuchać opiekunów i od razu im powiedzieć, jeśli źle się poczujesz.',
          scoring: [
            '1 pkt – zachowane obie informacje: słuchanie poleceń opiekunów oraz natychmiastowe informowanie o problemach zdrowotnych.',
            '2 pkt – własne, prostsze słowa (bez „zobowiązani”, „bezwzględnego”, „niezwłocznego”), zdanie poprawne, bez dodawania nowych treści.',
          ],
        },
      ],
    },
    {
      id: 'rodzaje-literackie',
      name: 'Rodzaje i gatunki literackie',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. VII–VIII I.1.1–6: rodzaje i gatunki (komedia, fraszka, pieśń, tren, ballada, epopeja, tragedia), elementy dramatu, neologizm, inwokacja, symbol, alegoria, komizm, ironia; I.2.5: reportaż, wywiad, artykuł. Kl. IV–VI I.1.3: baśń, legenda, bajka, hymn, przypowieść, mit, opowiadanie, nowela, powieść oraz odmiany powieści i opowiadania (obyczajowe, przygodowe, detektywistyczne, fantastycznonaukowe, fantasy). Przypis 7 podstawy: na egzaminie nie obowiązuje znajomość treści i problematyki krótkich utworów kl. IV–VI – obowiązuje rozpoznawanie gatunków.',
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
        <h3>Gatunki z klas IV–VI</h3>
        <p>Treści mitów, bajek czy legend z klas IV–VI na egzaminie się nie sprawdza – ale trzeba umieć <b>rozpoznać gatunek po jego cechach</b>.</p>
        <table>
          <tr><th>Gatunek</th><th>Najważniejsze cechy</th></tr>
          <tr><td><b>Baśń</b></td><td>czas i miejsce <b>nieokreślone</b> („dawno, dawno temu, za siedmioma górami”), czary i fantastyczne postacie, walka dobra ze złem – dobro zwycięża, zło zostaje ukarane</td></tr>
          <tr><td><b>Legenda</b></td><td>opowieść o dawnych wydarzeniach związana z <b>konkretnym, istniejącym miejscem</b> lub postacią z przeszłości, połączona z elementami fantastycznymi; często wyjaśnia np. pochodzenie nazwy</td></tr>
          <tr><td><b>Mit</b></td><td>opowieść o <b>bogach i herosach</b>; wyjaśnia powstanie świata, zjawiska przyrody, sens ludzkiego losu (np. mity greckie)</td></tr>
          <tr><td><b>Bajka</b></td><td>krótki utwór, często wierszowany, z <b>morałem</b> (pouczeniem); bohaterowie – zwykle zwierzęta – uosabiają ludzkie cechy (lis = przebiegłość)</td></tr>
          <tr><td><b>Przypowieść</b></td><td>krótka opowieść, w której zwykłe zdarzenia mają <b>drugie, przenośne znaczenie</b>; uczy prawd moralnych lub religijnych (np. przypowieści biblijne)</td></tr>
          <tr><td><b>Hymn</b></td><td>uroczysta, podniosła <b>pieśń pochwalna</b> (liryka), np. na cześć Boga, ojczyzny, ważnej idei</td></tr>
          <tr><td><b>Opowiadanie</b></td><td>krótszy utwór prozą, niewielu bohaterów, prosta fabuła; budowa luźniejsza niż w noweli</td></tr>
          <tr><td><b>Nowela</b></td><td>krótka proza o <b>zwartej</b> budowie: jeden wątek, wyraźny punkt kulminacyjny, często puenta</td></tr>
          <tr><td><b>Powieść</b></td><td>obszerny utwór prozą, <b>wielowątkowy</b>, wielu bohaterów, rozbudowany świat przedstawiony</td></tr>
        </table>
        <h3>Odmiany powieści i opowiadania</h3>
        <ul>
          <li><b>obyczajowa</b> – codzienne życie, rodzina, szkoła, relacje między ludźmi;</li>
          <li><b>przygodowa</b> – wartka akcja, podróże, niebezpieczeństwa;</li>
          <li><b>detektywistyczna</b> (kryminalna) – zagadka przestępstwa, którą rozwiązuje detektyw;</li>
          <li><b>fantastycznonaukowa</b> (science fiction) – przyszłość, wynalazki, roboty, podróże kosmiczne – fantastyka oparta na nauce i technice;</li>
          <li><b>fantasy</b> – wymyślony świat z magią i fantastycznymi istotami (smoki, krasnoludy, czarodzieje), np. „Hobbit” albo „Opowieści z Narnii”;</li>
          <li><b>historyczna</b> – akcja w przeszłości, obok fikcyjnych postaci występują historyczne („Quo vadis”).</li>
        </ul>
        <div class="tip">💡 Baśń czy legenda? Zapytaj: <b>gdzie</b> to się dzieje? „Za siedmioma górami” – baśń. W prawdziwym mieście, nad prawdziwą rzeką – legenda. Bajka czy przypowieść? Bajka ma morał i zwierzęta, przypowieść – ludzi i ukryte, przenośne znaczenie.</div>
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
        <p>Gatunki dziennikarskie: <b>reportaż</b> (relacja z wydarzeń oparta na faktach, z elementami opisu), <b>wywiad</b> (rozmowa w formie pytań i odpowiedzi), <b>artykuł</b> (tekst prasowy na dany temat). Odróżniaj literaturę piękną od tekstów naukowych, popularnonaukowych i publicystycznych. Więcej – w dziale „Teksty nieliterackie i teksty kultury”.</p>
      `,
      flashcards: [
        ['Didaskalia', 'Tekst poboczny w dramacie – wskazówki dla aktorów i reżysera'],
        ['Podmiot liryczny', '„Ja” mówiące w utworze lirycznym (to nie zawsze autor!)'],
        ['Narrator', 'Osoba opowiadająca w utworze epickim'],
        ['Synkretyzm rodzajowy', 'Łączenie cech epiki, liryki i dramatu (np. ballada)'],
        ['Nowela', 'Krótka proza, jeden wątek, punkt kulminacyjny'],
        ['Epopeja', 'Obszerny utwór o losach zbiorowości, np. „Pan Tadeusz”'],
        ['Baśń', 'Nieokreślony czas i miejsce, czary, dobro zwycięża zło'],
        ['Legenda', 'Opowieść związana z konkretnym miejscem lub postacią z przeszłości, z elementami fantastycznymi'],
        ['Mit', 'Opowieść o bogach i herosach, wyjaśnia powstanie świata i zjawiska przyrody'],
        ['Bajka', 'Krótki utwór z morałem; zwierzęta uosabiają ludzkie cechy'],
        ['Przypowieść', 'Krótka opowieść z drugim, przenośnym znaczeniem – uczy prawd moralnych'],
        ['Hymn', 'Uroczysta pieśń pochwalna (na cześć Boga, ojczyzny, idei)'],
        ['Powieść a opowiadanie', 'Powieść – obszerna, wielowątkowa; opowiadanie – krótsze, prostsza fabuła'],
        ['Odmiany powieści', 'obyczajowa, przygodowa, detektywistyczna, fantastycznonaukowa, fantasy, historyczna'],
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
        { id: '977cge', q: 'Krótki utwór z morałem, w którym zwierzęta mają ludzkie cechy (np. lis jest przebiegły), to…', options: ['bajka', 'hymn', 'legenda', 'powieść przygodowa'], answer: 0 },
        { id: 'cegc0p', q: 'Opowieść o bogach i herosach, która wyjaśnia np. powstanie świata albo zjawiska przyrody, to…', options: ['bajka', 'nowela', 'mit', 'fraszka'], answer: 2 },
        { id: 'rxt614', q: 'Czym legenda różni się od baśni?', options: ['w legendzie nie ma żadnych elementów fantastycznych', 'legenda jest związana z konkretnym, istniejącym miejscem lub postacią z przeszłości, a w baśni czas i miejsce są nieokreślone', 'baśń zawsze jest pisana wierszem', 'legenda zawsze kończy się morałem wypowiedzianym przez zwierzę'], answer: 1 },
        { id: 'tqkrur', q: '„Dawno, dawno temu, za siedmioma górami…” – taki początek, nieokreślony czas i miejsce akcji oraz zwycięstwo dobra nad złem to cechy…', options: ['reportażu', 'hymnu', 'powieści historycznej', 'baśni'], answer: 3 },
        { id: 'm6mdkj', q: 'Uroczysta pieśń pochwalna, np. na cześć Boga lub ojczyzny, to…', options: ['tren', 'fraszka', 'hymn', 'bajka'], answer: 2 },
        { id: '8fneub', q: 'Krótka opowieść, w której zwykłe zdarzenia mają drugie, przenośne znaczenie i uczą prawd moralnych lub religijnych, to…', options: ['przypowieść', 'powieść detektywistyczna', 'komedia', 'powieść fantastycznonaukowa'], answer: 0 },
        { id: '5xbi9l', q: 'Obszerny utwór prozą, wielowątkowy, z wieloma bohaterami, to…', options: ['opowiadanie', 'powieść', 'fraszka', 'bajka'], answer: 1 },
        { id: 'upsb41', q: 'Do jakiej odmiany powieści należy „Hobbit” J.R.R. Tolkiena (czarodziej, krasnoludy, smok)?', options: ['obyczajowej', 'detektywistycznej', 'fantastycznonaukowej', 'fantasy'], answer: 3, explain: 'Wymyślony świat z magią i fantastycznymi istotami to fantasy. Science fiction opiera fantastykę na nauce i technice.' },
        { id: 'mrvy39', q: 'Powieść, w której detektyw rozwiązuje zagadkę przestępstwa, to powieść…', options: ['obyczajowa', 'fantasy', 'detektywistyczna (kryminalna)', 'historyczna'], answer: 2 },
        { id: 'io89zr', q: 'Akcja w przyszłości, podróże kosmiczne, roboty i wynalazki to cechy…', options: ['powieści fantastycznonaukowej (science fiction)', 'legendy', 'powieści obyczajowej', 'przypowieści'], answer: 0 },
        { id: 'enqqi4', q: 'Powieść o codziennym życiu rodziny i szkoły, o przyjaźni i pierwszych miłościach – bez czarów i bez wyprawy po skarb – to powieść…', options: ['fantasy', 'fantastycznonaukowa', 'historyczna', 'obyczajowa'], answer: 3 },
        { id: '12oj1x', q: 'Prawda czy fałsz?\nNa egzaminie ósmoklasisty trzeba umieć rozpoznać cechy mitu czy bajki, ale nie sprawdza się znajomości treści mitów i bajek z klas IV–VI.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Tak stanowi przypis 7 podstawy programowej; informator CKE wymienia te utwory jako takie, do których można się odwołać, ale których znajomość nie jest sprawdzana.' },
        { id: 'oggc4x', q: 'Czym nowela różni się od opowiadania?', options: ['nowela jest zawsze pisana wierszem', 'nowela ma zwartą budowę: jeden wątek, wyraźny punkt kulminacyjny, często puentę', 'opowiadanie jest zawsze dłuższe od powieści', 'niczym – to dwie nazwy tego samego'], answer: 1 },
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
      id: 'budowa-utworu',
      name: 'Budowa utworu: wers, narrator, wątek',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. IV–VI: I.1.1–2 (świat przedstawiony, fikcja literacka, elementy realistyczne i fantastyczne), I.1.5–6 (tytuł, podtytuł, motto, puenta, punkt kulminacyjny; wers, rym, strofa, refren), I.1.8–13 (dialog i monolog, podmiot liryczny, narrator, narracja pierwszo- i trzecioosobowa, bohaterowie główni i drugoplanowi, tematyka i problematyka, wątek główny i wątki poboczne). Punkt kulminacyjny, puenta, dialog i monolog to też elementy ocenianego opowiadania (informator CKE, kryteria wypracowania).',
      theory: `
        <h3>Świat przedstawiony</h3>
        <p>To wszystko, co dzieje się w utworze: <b>bohaterowie</b>, <b>wydarzenia</b> (fabuła), <b>czas</b> i <b>miejsce akcji</b>. Świat przedstawiony to <b>fikcja literacka</b> – wymyślił go autor, nawet jeśli przypomina prawdziwy. Wyjątek: literatura faktu, np. „Kamienie na szaniec”, opowiada o prawdziwych ludziach i wydarzeniach.</p>
        <table>
          <tr><th>Elementy realistyczne</th><th>Elementy fantastyczne</th></tr>
          <tr><td>mogłyby się zdarzyć naprawdę</td><td>są niemożliwe w rzeczywistości</td></tr>
          <tr><td>„Balladyna”: siostry zbierają maliny</td><td>„Balladyna”: nimfa Goplana, Skierka, Chochlik</td></tr>
          <tr><td>„Opowieść wigilijna”: skąpy Scrooge, rodzina Cratchitów</td><td>„Opowieść wigilijna”: duch Marleya i trzy duchy</td></tr>
        </table>
        <h3>Kto mówi w utworze?</h3>
        <ul>
          <li><b>Narrator</b> (epika) – opowiada historię.
            <ul>
              <li><b>Narracja pierwszoosobowa</b> – narrator jest bohaterem i mówi „ja”: <i>„Wszedłem do klasy i od razu poczułem, że coś jest nie tak.”</i> Tak opowiada Adaś Niezgódka w „Akademii Pana Kleksa”. Funkcja: poznajemy z bliska myśli i uczucia bohatera, ale widzimy świat tylko jego oczami.</li>
              <li><b>Narracja trzecioosobowa</b> – narrator stoi z boku i mówi o bohaterach „on, ona, oni”: <i>„Ania weszła do klasy i od razu poczuła, że coś jest nie tak.”</i> Funkcja: szerszy, bardziej obiektywny obraz; narrator często wie o bohaterach wszystko.</li>
            </ul></li>
          <li><b>Podmiot liryczny</b> (liryka) – „ja” mówiące w wierszu. Nie utożsamiaj go automatycznie z autorem!</li>
          <li><b>Dialog</b> – rozmowa co najmniej dwóch postaci; ożywia akcję i pokazuje bohaterów przez to, jak mówią. <b>Monolog</b> – dłuższa wypowiedź jednej postaci (do siebie lub do innych); odsłania jej myśli, uczucia i zamiary.</li>
        </ul>
        <h3>Bohaterowie</h3>
        <p><b>Bohater główny</b> – w centrum wydarzeń, wokół niego toczy się akcja (często jest tytułowy). <b>Bohaterowie drugoplanowi</b> – ważni dla fabuły, ale nie są w centrum. Przykład: w „Hobbicie” głównym bohaterem jest Bilbo, drugoplanowymi m.in. Gandalf i Thorin.</p>
        <h3>Fabuła: wątki, punkt kulminacyjny, puenta</h3>
        <ul>
          <li><b>Wątek</b> – ciąg zdarzeń związanych z jedną sprawą lub postacią. <b>Wątek główny</b> jest najważniejszy, <b>wątki poboczne</b> mu towarzyszą. „Zemsta”: wątek główny – spór Cześnika i Rejenta o mur graniczny; wątek poboczny – miłość Wacława i Klary (to on prowadzi do zakończenia sporu).</li>
          <li><b>Punkt kulminacyjny</b> – moment największego napięcia; potem akcja zmierza do rozwiązania. W „Latarniku” to noc, gdy Skawiński zaczytany w „Panu Tadeuszu” nie zapala latarni.</li>
          <li><b>Puenta</b> – zaskakujące, błyskotliwe zakończenie, które podsumowuje utwór (typowe dla fraszki, anegdoty, noweli).</li>
        </ul>
        <h3>Tematyka i problematyka</h3>
        <p><b>Tematyka</b> – <i>o czym</i> jest utwór (jakie sprawy i zdarzenia przedstawia). <b>Problematyka</b> – <i>nad czym</i> każe się zastanowić (jakie ważne problemy i pytania stawia). „Latarnik”: tematyka – losy starego tułacza, który zostaje latarnikiem w Aspinwall; problematyka – tęsknota za ojczyzną. „Balladyna”: problematyka – żądza władzy, wina i kara.</p>
        <h3>Elementy konstrukcyjne</h3>
        <table>
          <tr><th>Element</th><th>Czym jest i po co jest</th></tr>
          <tr><td>Tytuł</td><td>zapowiada temat, zaciekawia, może mieć sens przenośny (częste zadanie: „Jaki związek z treścią ma tytuł?”)</td></tr>
          <tr><td>Podtytuł</td><td>dodatkowa informacja pod tytułem, np. o gatunku albo temacie</td></tr>
          <tr><td>Motto</td><td>cytat z innego utworu umieszczony przed tekstem; podpowiada, jak odczytać całość</td></tr>
          <tr><td>Punkt kulminacyjny</td><td>buduje napięcie, jest szczytem akcji</td></tr>
          <tr><td>Puenta</td><td>zaskakuje, podsumowuje, skłania do refleksji</td></tr>
        </table>
        <h3>Wiersz: wers, strofa, rym, refren</h3>
        <ul>
          <li><b>Wers</b> – pojedyncza linijka wiersza.</li>
          <li><b>Strofa</b> (zwrotka) – grupa wersów oddzielona odstępem.</li>
          <li><b>Rym</b> – współbrzmienie zakończeń wyrazów, zwykle na końcu wersów. Rymy <b>parzyste</b> (aabb) – rymują się sąsiednie wersy; <b>przeplatane</b> (abab) – co drugi wers.</li>
          <li><b>Refren</b> – wers lub kilka wersów powtarzanych w wierszu, np. po każdej strofie (jak w piosence).</li>
        </ul>
        <p>Przykład rymów parzystych – „Pan Tadeusz”, księga I (brzmienie za informatorem CKE): „Śród takich pól przed laty, nad brzegiem <b>ruczaju</b>, / Na pagórku niewielkim, we brzozowym <b>gaju</b>, / Stał dwór szlachecki, z drzewa, lecz <b>podmurowany</b>; / Świeciły się z daleka pobielane <b>ściany</b>”.</p>
      `,
      flashcards: [
        ['Świat przedstawiony', 'Bohaterowie, wydarzenia, czas i miejsce akcji'],
        ['Fikcja literacka', 'Świat wymyślony przez autora, nawet jeśli przypomina prawdziwy'],
        ['Narracja pierwszoosobowa', 'Narrator jest bohaterem i mówi „ja”, np. Adaś Niezgódka w „Akademii Pana Kleksa”'],
        ['Narracja trzecioosobowa', 'Narrator stoi z boku i mówi „on, ona, oni”'],
        ['Dialog a monolog', 'Dialog – rozmowa co najmniej dwóch postaci; monolog – dłuższa wypowiedź jednej postaci'],
        ['Bohater główny a drugoplanowy', 'Główny – w centrum akcji; drugoplanowy – ważny, ale nie w centrum'],
        ['Wątek główny i poboczny', '„Zemsta”: spór o mur (główny), miłość Wacława i Klary (poboczny)'],
        ['Punkt kulminacyjny', 'Moment największego napięcia w utworze'],
        ['Puenta', 'Zaskakujące, błyskotliwe zakończenie'],
        ['Motto', 'Cytat umieszczony przed tekstem, podpowiada sens całości'],
        ['Tematyka a problematyka', 'O czym jest utwór a jakie problemy i pytania stawia'],
        ['Wers, strofa', 'Wers – linijka wiersza; strofa – grupa wersów (zwrotka)'],
        ['Refren', 'Powtarzany wers lub kilka wersów, np. po każdej strofie'],
      ],
      questions: [
        { id: 'mokdba', q: 'Jak nazywa się pojedyncza linijka wiersza?', options: ['strofa', 'wers', 'refren', 'rym'], answer: 1 },
        { id: 'zrv1jb', q: 'Grupa wersów oddzielona w wierszu odstępem to…', options: ['strofa (zwrotka)', 'refren', 'puenta', 'motto'], answer: 0 },
        { id: 'ffjlra', q: 'Wers lub kilka wersów powtarzanych w wierszu, np. po każdej zwrotce, to…', options: ['rym', 'motto', 'refren', 'monolog'], answer: 2 },
        { id: 'hocbmh', q: 'Które wyrazy się rymują?', options: ['pola – lasy', 'ruczaju – gaju', 'dom – most', 'ściany – ławka'], answer: 1, explain: 'Rymują się wyrazy o podobnie brzmiących zakończeniach: ruczAJU – gAJU (to rym z „Pana Tadeusza”).' },
        { id: '8b19ao', q: 'Wersy wiersza kończą się kolejno słowami: dom – kot – tom – płot. Jaki to układ rymów?', options: ['parzysty (aabb)', 'przeplatany (abab)', 'brak rymów', 'jeden rym we wszystkich wersach'], answer: 1, explain: 'Rymują się wersy 1 i 3 (dom – tom) oraz 2 i 4 (kot – płot) – co drugi wers, czyli rym przeplatany.' },
        { id: 'wj944f', q: '„Wszedłem do klasy i od razu poczułem, że coś jest nie tak.” – jaka to narracja?', options: ['trzecioosobowa', 'prowadzona przez podmiot liryczny', 'pierwszoosobowa', 'zapisana w didaskaliach'], answer: 2, explain: 'Formy „wszedłem”, „poczułem” – narrator mówi o sobie, jest bohaterem.' },
        { id: 'l9l08p', q: '„Akademię Pana Kleksa” opowiada jeden z uczniów, Adaś Niezgódka. To narracja…', options: ['pierwszoosobowa', 'trzecioosobowa', 'dramatyczna', 'liryczna'], answer: 0 },
        { id: '87zelu', q: 'Jaką funkcję najczęściej pełni narracja pierwszoosobowa?', options: ['zapewnia całkowicie obiektywny obraz wydarzeń', 'pozwala z bliska poznać myśli i uczucia narratora-bohatera', 'zastępuje wszystkie dialogi', 'dzieli utwór na akty i sceny'], answer: 1 },
        { id: 'jpllkh', q: 'Narrator trzecioosobowy…', options: ['zawsze jest głównym bohaterem', 'występuje tylko w wierszach', 'to inaczej podmiot liryczny', 'opowiada o bohaterach z boku, używając form „on”, „ona”, „oni”'], answer: 3 },
        { id: 'xafgho', q: 'Prawda czy fałsz?\nPodmiot liryczny to zawsze sam autor wiersza.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Podmiot liryczny to „ja” mówiące w wierszu – poeta może mówić czyimś głosem, np. dziecka, żołnierza, przedmiotu.' },
        { id: 'i8zfsq', q: 'Czym różni się monolog od dialogu?', options: ['monolog występuje tylko w liryce', 'dialog to tekst poboczny w dramacie', 'monolog to dłuższa wypowiedź jednej postaci, a dialog – rozmowa co najmniej dwóch', 'niczym – to synonimy'], answer: 2 },
        { id: 'xruiud', q: 'Dialog w opowiadaniu najczęściej…', options: ['ożywia akcję i pokazuje bohaterów przez to, jak mówią', 'zastępuje zakończenie', 'jest zawsze zapisany wierszem', 'służy wyłącznie do opisu przyrody'], answer: 0 },
        { id: 'toku4k', q: 'Moment największego napięcia w utworze, po którym akcja zmierza do rozwiązania, to…', options: ['puenta', 'motto', 'refren', 'punkt kulminacyjny'], answer: 3 },
        { id: 'qxdb7l', q: 'Zaskakujące, błyskotliwe zakończenie utworu (np. fraszki) to…', options: ['puenta', 'inwokacja', 'podtytuł', 'strofa'], answer: 0 },
        { id: 'frxtan', q: 'Cytat z innego utworu umieszczony przed początkiem tekstu to…', options: ['refren', 'motto', 'dialog', 'puenta'], answer: 1 },
        { id: '2y2boc', q: 'Co jest punktem kulminacyjnym „Latarnika”?', options: ['przyjazd Skawińskiego do Aspinwall', 'pierwszy dzień Skawińskiego w pracy', 'noc, w której Skawiński zaczytany w „Panu Tadeuszu” nie zapala latarni', 'zatrudnienie nowego latarnika'], answer: 2, explain: 'To moment największego napięcia – od niego zależą dalsze losy bohatera, który traci posadę.' },
        { id: 'src5on', q: 'Który element świata przedstawionego w „Balladynie” jest fantastyczny?', options: ['siostry zbierające maliny', 'dzban na maliny', 'zakład dwóch sióstr', 'nimfa Goplana, królowa jeziora'], answer: 3 },
        { id: 'jhoiy2', q: 'Fikcja literacka oznacza, że…', options: ['świat przedstawiony wymyślił autor, nawet jeśli przypomina prawdziwy', 'w utworze zawsze występują smoki i czarodzieje', 'utwór opisuje wyłącznie prawdziwe wydarzenia', 'tekst jest napisany wierszem'], answer: 0 },
        { id: 'l46qrt', q: 'Który utwór opowiada o prawdziwych ludziach i wydarzeniach (to literatura faktu)?', options: ['„Balladyna”', '„Kamienie na szaniec”', '„Opowieść wigilijna”', '„Hobbit”'], answer: 1 },
        { id: 'qdu5jg', q: 'Wątek w utworze to…', options: ['pojedyncza linijka wiersza', 'cytat przed tekstem', 'ciąg zdarzeń związanych z jedną sprawą lub postacią', 'opis miejsca akcji'], answer: 2 },
        { id: 'cwb1zr', q: 'Co jest wątkiem głównym „Zemsty”?', options: ['spór Cześnika i Rejenta o mur graniczny', 'miłość Wacława i Klary', 'przechwałki Papkina', 'obrzęd dziadów'], answer: 0, explain: 'Wokół sporu o mur zbudowana jest cała akcja. Miłość Wacława i Klary to ważny wątek poboczny – to ona kończy spór.' },
        { id: 'imfwp2', q: 'Kto jest bohaterem głównym „Hobbita”?', options: ['Gandalf', 'Thorin Dębowa Tarcza', 'smok Smaug', 'Bilbo Baggins'], answer: 3, explain: 'Wokół wyprawy Bilba toczy się akcja. Gandalf i Thorin to bohaterowie drugoplanowi.' },
        { id: 'rxua7e', q: 'Czym różni się tematyka utworu od problematyki?', options: ['tematyka dotyczy tylko wierszy, a problematyka – prozy', 'to dwie nazwy tego samego', 'problematyka to streszczenie fabuły', 'tematyka – o czym opowiada utwór; problematyka – jakie ważne problemy i pytania stawia'], answer: 3 },
      ],
      tasks: [
        {
          id: 's371ua',
          points: 2,
          q: 'Przeczytaj fragment (przykład napisany do ćwiczenia):\n„Stałem na peronie i nerwowo patrzyłem na zegar. Pociąg miał już dziesięć minut spóźnienia, a ja wiedziałem, że babcia czeka.”\nOkreśl rodzaj narracji i uzasadnij odpowiedź. Następnie przekształć pierwsze zdanie tak, aby narracja była trzecioosobowa.',
          steps: [
            'Poszukaj form czasowników i zaimków: kto mówi „ja”?',
            'Formy „stałem”, „patrzyłem”, „ja wiedziałem” to 1. osoba – narrator jest bohaterem.',
            'Przy przekształceniu zamień 1. osobę na 3. osobę i wprowadź imię lub zaimek „on”/„ona”.',
          ],
          answer: 'Narracja pierwszoosobowa – narrator jest jednocześnie bohaterem i mówi o sobie: „stałem”, „patrzyłem”, „ja wiedziałem”. Przekształcenie: „Tomek stał na peronie i nerwowo patrzył na zegar.”',
          scoring: [
            '1 pkt – rozpoznanie narracji pierwszoosobowej z uzasadnieniem (wskazanie form 1. osoby albo tego, że narrator jest bohaterem).',
            '2 pkt – poprawne przekształcenie zdania na narrację trzecioosobową.',
          ],
        },
        {
          id: 'buj8qu',
          points: 2,
          q: 'Przeczytaj wiersz (przykład napisany do ćwiczenia):\n\nJesienny wiatr po polach gna,\nw kałużach drobny deszczyk gra.\nAch, wróć już, lato, wróć!\n\nNa drzewach złote liście drżą,\na ptaki już za morzem są.\nAch, wróć już, lato, wróć!\n\nPodaj liczbę strof i liczbę wersów w każdej strofie. Wskaż refren i nazwij rodzaj rymów (podaj przykład).',
          steps: [
            'Strofy to grupy wersów oddzielone odstępem – policz je.',
            'Refren to wers, który się powtarza.',
            'Sprawdź, które wersy się rymują: sąsiednie (parzyste) czy co drugi (przeplatane).',
          ],
          answer: 'Wiersz ma 2 strofy, w każdej są 3 wersy. Refren: „Ach, wróć już, lato, wróć!”. Rymy parzyste – rymują się sąsiednie wersy: „gna – gra”, „drżą – są”.',
          scoring: [
            '1 pkt – poprawna liczba strof (2) i wersów w strofie (3).',
            '2 pkt – wskazanie refrenu oraz rymów parzystych z przykładem.',
          ],
        },
      ],
    },
    {
      id: 'teksty-kultury',
      name: 'Teksty nieliterackie i teksty kultury',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996): kl. IV–VI I.2.1–10 (tekst informacyjny, publicystyczny, reklamowy; informacje wprost i pośrednio; fakty i opinie; komiks; teatr, film, muzyka, sztuki plastyczne; elementy spektaklu i filmu; program informacyjny i rozrywkowy; adaptacja), III.1.2 i III.1.6 (argumenty odwołujące się do faktów i logiki oraz do emocji; środki perswazji); kl. VII–VIII I.2.1, I.2.3–5 i I.2.7 (teksty publicystyczne, popularnonaukowe i naukowe; interpretacja dzieł sztuki; literatura piękna a literatura naukowa, popularnonaukowa i publicystyka; reportaż, wywiad, artykuł; nawiązania w kulturze popularnej). W informatorze CKE – zadanie łączące wiersz ze zdjęciem (kl. IV–VI I.2.12).',
      theory: `
        <h3>Fakt czy opinia?</h3>
        <table>
          <tr><th>Fakt</th><th>Opinia</th></tr>
          <tr><td>informacja, którą <b>da się sprawdzić</b> (daty, liczby, zdarzenia)</td><td>czyjś <b>sąd, ocena, pogląd</b> – można się z nią zgodzić albo nie</td></tr>
          <tr><td>„Biblioteka jest czynna od 8.00 do 15.00.”</td><td>„To najprzytulniejsza biblioteka w mieście.”</td></tr>
          <tr><td>„Film trwa 120 minut.”</td><td>„Moim zdaniem film jest za długi.”</td></tr>
        </table>
        <div class="tip">💡 Sygnały opinii: słowa wartościujące (<i>najlepszy, nudny, wspaniały, niestety, szkoda</i>) i zwroty <i>moim zdaniem, uważam, sądzę, wydaje mi się</i>.</div>
        <h3>Rodzaje tekstów nieliterackich</h3>
        <table>
          <tr><th>Tekst</th><th>Cel</th><th>Cechy i przykłady</th></tr>
          <tr><td><b>informacyjny</b></td><td>przekazać wiadomość</td><td>konkretne dane (kto? co? gdzie? kiedy?), język rzeczowy, bez ocen; np. notatka prasowa, komunikat</td></tr>
          <tr><td><b>publicystyczny</b></td><td>skomentować bieżące sprawy, przekonać</td><td>opinie autora, argumenty, wyrazisty język; np. felieton, komentarz, artykuł publicystyczny</td></tr>
          <tr><td><b>reklamowy</b></td><td>zachęcić do kupna lub skorzystania z oferty</td><td>hasło (slogan), obietnice, tryb rozkazujący, zwroty do odbiorcy, obraz; np. plakat, ulotka, spot</td></tr>
          <tr><td><b>popularnonaukowy</b></td><td>przystępnie wyjaśnić wiedzę</td><td>dla szerokiego odbiorcy, przykłady, porównania, objaśnione terminy</td></tr>
          <tr><td><b>naukowy</b></td><td>przedstawić wyniki badań</td><td>dla specjalistów, terminy naukowe, przypisy, bibliografia</td></tr>
        </table>
        <p><b>Literatura piękna</b> (epika, liryka, dramat) tworzy świat przedstawiony i pełni przede wszystkim funkcję <b>artystyczną</b> (estetyczną). Teksty naukowe i popularnonaukowe pełnią funkcję <b>poznawczą</b> (przekazują wiedzę), a publicystyka – komentuje rzeczywistość i <b>przekonuje</b>.</p>
        <h3>Gatunki dziennikarskie</h3>
        <ul>
          <li><b>Reportaż</b> – relacja z prawdziwych wydarzeń oparta na faktach; autor zwykle był na miejscu, opisuje, co zobaczył, przytacza wypowiedzi ludzi.</li>
          <li><b>Wywiad</b> – rozmowa dziennikarza z rozmówcą w formie pytań i odpowiedzi, zwykle ze wstępem przedstawiającym rozmówcę.</li>
          <li><b>Artykuł</b> – tekst prasowy na określony temat (informacyjny albo publicystyczny).</li>
        </ul>
        <h3>Argumenty i perswazja</h3>
        <ul>
          <li><b>Argumenty odwołujące się do faktów i logiki</b> – dane, liczby, przykłady, wyniki badań, rozumowanie „skoro…, to…”.</li>
          <li><b>Argumenty odwołujące się do emocji</b> – budzą uczucia: współczucie, dumę, wstyd, strach („Pomyśl, jak smutno jest temu psu w schronisku!”).</li>
          <li><b>Perswazja</b> – jawne przekonywanie odbiorcy do poglądu lub działania. <b>Środki perswazji</b>: zwroty do odbiorcy (<i>ty, wy</i>), tryb rozkazujący (<i>Dołącz!</i>), pytania retoryczne, wykrzyknienia, powtórzenia, słownictwo wartościujące, przesada, obietnice, odwołanie do autorytetu.</li>
        </ul>
        <div class="tip">⚠️ Perswazja przekonuje jawnie. <b>Manipulacja</b> wpływa na odbiorcę w ukryty, nieuczciwy sposób (np. „Wszyscy już to mają!”) – więcej w dziale „Style, słownictwo i komunikacja”.</div>
        <h3>Teatr i film</h3>
        <table>
          <tr><th>Element</th><th>Co to jest</th></tr>
          <tr><td>reżyseria</td><td>reżyser decyduje o całym kształcie przedstawienia lub filmu i kieruje aktorami</td></tr>
          <tr><td>gra aktorska</td><td>sposób, w jaki aktor tworzy postać: głos, gest, mimika, ruch</td></tr>
          <tr><td>dekoracja (scenografia)</td><td>wygląd sceny lub planu – pokazuje miejsce i czas akcji</td></tr>
          <tr><td>charakteryzacja</td><td>zmiana wyglądu aktora: makijaż, peruka, sztuczny zarost</td></tr>
          <tr><td>kostiumy</td><td>stroje aktorów – mówią o epoce, zawodzie, charakterze postaci</td></tr>
          <tr><td>rekwizyty</td><td>przedmioty, których aktorzy używają w czasie gry (list, miecz, filiżanka)</td></tr>
          <tr><td>muzyka</td><td>buduje nastrój i napięcie</td></tr>
        </table>
        <p>Film dodaje to, czego nie ma w teatrze: <b>ujęcia</b> kamery (np. zbliżenie twarzy), <b>montaż</b> (łączenie ujęć), efekty specjalne. Program <b>informacyjny</b> przekazuje aktualne wiadomości, program <b>rozrywkowy</b> ma bawić.</p>
        <p><b>Adaptacja</b> – przeniesienie utworu literackiego na inny rodzaj sztuki (film, spektakl, komiks, słuchowisko). Twórcy adaptacji mogą coś pominąć, dodać albo zmienić – porównując, sprawdź fabułę, bohaterów, zakończenie i sposób pokazania świata.</p>
        <h3>Komiks</h3>
        <p>Opowieść w obrazkach: <b>kadry</b> (pojedyncze obrazki) ułożone w kolejności, <b>dymki</b> (chmurki) z wypowiedziami postaci, <b>onomatopeje</b> (BUM! TRACH!), ramki z tekstem narratora (np. „Tymczasem w grodzie…”). Lektura-komiks: „Kajko i Kokosz. Szkoła latania” Janusza Christy.</p>
        <h3>Dzieło sztuki: obraz, grafika, rzeźba, fotografia</h3>
        <ol>
          <li><b>Co przedstawia?</b> Temat, postacie, sytuacja; tytuł dzieła.</li>
          <li><b>Kompozycja</b> – układ elementów: co jest na <b>pierwszym planie</b>, co w <b>tle</b>, co w centrum (to zwykle najważniejsze).</li>
          <li><b>Kolorystyka</b> – barwy ciepłe (czerwień, pomarańcz, żółć) często dają nastrój radości i energii, zimne (błękit, szarość) – spokoju, chłodu, smutku.</li>
          <li><b>Światło</b> – co jest oświetlone, a co w cieniu; kontrast jasne – ciemne kieruje wzrok widza.</li>
          <li><b>Nastrój i sens</b> – jakie emocje budzi dzieło, co chciał przekazać artysta.</li>
        </ol>
        <p>W rzeźbie zwróć też uwagę na materiał, pozę i gest, w fotografii – na kadr (co jest w nim, a co pominięto) i moment, który uchwycono.</p>
        <h3>Nawiązania w kulturze popularnej</h3>
        <p>Filmy, komiksy, piosenki i gry często korzystają z <b>tradycyjnych wątków</b>: mitów, Biblii, baśni, legend. Przykład: „Percy Jackson i bogowie olimpijscy” Ricka Riordana nawiązuje do mitologii greckiej; wiele filmów opowiada na nowo historię Kopciuszka. Szukając nawiązania, zapytaj: <i>jaką znaną historię, postać albo motyw (np. walka dobra ze złem, wędrówka, przemiana bohatera) to przypomina?</i></p>
      `,
      flashcards: [
        ['Fakt', 'Informacja, którą da się sprawdzić'],
        ['Opinia', 'Czyjś sąd lub ocena; sygnały: „moim zdaniem”, słowa wartościujące'],
        ['Tekst informacyjny', 'Rzeczowo przekazuje wiadomość: kto? co? gdzie? kiedy?'],
        ['Tekst publicystyczny', 'Komentuje bieżące sprawy i przekonuje, np. felieton'],
        ['Tekst reklamowy', 'Zachęca do kupna: slogan, obietnice, tryb rozkazujący'],
        ['Argumenty rzeczowe a emocjonalne', 'Rzeczowe – fakty i logika; emocjonalne – odwołują się do uczuć'],
        ['Perswazja a manipulacja', 'Perswazja przekonuje jawnie, manipulacja – w ukryty, nieuczciwy sposób'],
        ['Reportaż', 'Relacja z prawdziwych wydarzeń, autor był na miejscu'],
        ['Charakteryzacja', 'Zmiana wyglądu aktora: makijaż, peruka, zarost'],
        ['Rekwizyt', 'Przedmiot, którego aktor używa w czasie gry'],
        ['Adaptacja', 'Przeniesienie utworu literackiego na inny rodzaj sztuki, np. film'],
        ['Kadr i dymek', 'Kadr – pojedynczy obrazek komiksu; dymek – miejsce na wypowiedź postaci'],
        ['Kompozycja obrazu', 'Układ elementów: pierwszy plan, tło, centrum'],
        ['Kolorystyka', 'Dobór barw: ciepłe (radość, energia) i zimne (spokój, chłód)'],
      ],
      questions: [
        { id: 'gtj9lo', q: 'Które zdanie przedstawia fakt?', options: ['To najprzytulniejsza biblioteka w mieście.', 'Biblioteka szkolna jest czynna od 8.00 do 15.00.', 'Moim zdaniem w bibliotece jest za mało komiksów.', 'Szkoda, że biblioteka zamyka się tak wcześnie.'], answer: 1 },
        { id: '62nkow', q: 'Które zdanie wyraża opinię?', options: ['Film trwa 120 minut.', 'Premiera filmu odbyła się w piątek.', 'Ten film jest nudny i zdecydowanie za długi.', 'W filmie zagrało dwoje debiutantów.'], answer: 2 },
        { id: 'xidoor', q: 'Po czym najłatwiej poznać, że zdanie wyraża opinię?', options: ['po liczbach i datach', 'po słowach wartościujących i zwrotach typu „uważam”, „moim zdaniem”', 'po tym, że da się je sprawdzić w encyklopedii', 'po tym, że zawsze jest pytaniem'], answer: 1 },
        { id: 'ivnpqj', q: 'Tekst, którego głównym celem jest rzeczowe przekazanie wiadomości (kto? co? gdzie? kiedy?) bez ocen autora, to tekst…', options: ['reklamowy', 'publicystyczny', 'informacyjny', 'literacki'], answer: 2 },
        { id: 'vw7v89', q: 'Autor tekstu w gazecie ocenia nowy pomysł władz miasta i przekonuje czytelników, że to błąd. To tekst…', options: ['publicystyczny', 'informacyjny', 'reklamowy', 'popularnonaukowy'], answer: 0 },
        { id: '9z7sq1', q: 'Hasło „Kup teraz, a drugą parę butów dostaniesz gratis!” pochodzi z tekstu…', options: ['informacyjnego', 'naukowego', 'publicystycznego', 'reklamowego'], answer: 3 },
        { id: 'rdg1yu', q: 'Który argument odwołuje się do faktów i logiki? (przykłady napisane do ćwiczenia)', options: ['„Pomyślcie, jak smutno jest, gdy rower moknie na deszczu!”', '„Każdy, komu zależy na szkole, poprze ten pomysł.”', '„Z ankiety wynika, że rowerem przyjeżdża 45 uczniów, a stojak mieści tylko 20 rowerów – potrzebujemy drugiego.”', '„Wstyd, że wciąż nie mamy nowego stojaka!”'], answer: 2 },
        { id: 'swpoo6', q: '„Spójrz w oczy temu bezdomnemu psu – czy naprawdę przejdziesz obojętnie?” To argument odwołujący się…', options: ['do faktów', 'do emocji', 'do statystyk', 'do wyników badań'], answer: 1 },
        { id: '50whxh', q: 'Który z wymienionych elementów NIE jest środkiem perswazji?', options: ['tryb rozkazujący („Dołącz do nas!”)', 'pytanie retoryczne', 'bezpośredni zwrot do odbiorcy', 'numer strony w spisie treści'], answer: 3 },
        { id: 'rph4zh', q: 'Czym perswazja różni się od manipulacji?', options: ['perswazja jawnie przekonuje, a manipulacja wpływa na odbiorcę w ukryty, nieuczciwy sposób', 'perswazja zawsze jest kłamstwem', 'manipulacja występuje tylko w literaturze pięknej', 'niczym – to synonimy'], answer: 0 },
        { id: 'fzpspj', q: 'Czym literatura piękna różni się od tekstu popularnonaukowego?', options: ['literatura piękna zawsze jest pisana wierszem', 'tekst popularnonaukowy nie może mieć ilustracji', 'tekst popularnonaukowy jest pisany tylko dla naukowców', 'literatura piękna pełni przede wszystkim funkcję artystyczną, a tekst popularnonaukowy przystępnie przekazuje wiedzę'], answer: 3 },
        { id: '9wawr6', q: 'Tekst dla specjalistów, z terminami naukowymi, przypisami i bibliografią, to tekst…', options: ['popularnonaukowy', 'naukowy', 'reklamowy', 'reportaż'], answer: 1 },
        { id: '7zr01u', q: 'Dziennikarz pojechał na miejsce powodzi, rozmawiał z mieszkańcami i opisał, co zobaczył. Napisał…', options: ['wywiad', 'reportaż', 'fraszkę', 'tekst reklamowy'], answer: 1 },
        { id: 'atizgd', q: 'Kto w teatrze decyduje o całym kształcie przedstawienia i kieruje pracą aktorów?', options: ['charakteryzator', 'sufler', 'reżyser', 'widz'], answer: 2 },
        { id: '9ae908', q: 'Charakteryzacja w teatrze i filmie to…', options: ['zmiana wyglądu aktora za pomocą makijażu, peruki, sztucznego zarostu', 'przedmioty, których aktorzy używają na scenie', 'muzyka grana w czasie spektaklu', 'tekst poboczny w dramacie'], answer: 0 },
        { id: 'xx23u2', q: 'Przedmioty, którymi posługują się aktorzy w czasie gry (np. list, miecz, filiżanka), to…', options: ['kostiumy', 'rekwizyty', 'didaskalia', 'kadry'], answer: 1 },
        { id: '8xzddc', q: 'Adaptacja utworu literackiego to…', options: ['streszczenie lektury', 'recenzja filmu', 'tłumaczenie książki na inny język', 'przeniesienie utworu na inny rodzaj sztuki, np. film lub spektakl'], answer: 3 },
        { id: 'qdesqb', q: 'W komiksie wypowiedzi postaci umieszcza się zwykle…', options: ['w dymkach (chmurkach)', 'w didaskaliach', 'w przypisach', 'w mottach'], answer: 0 },
        { id: 'cg7ysz', q: 'Pojedynczy obrazek w komiksie to…', options: ['strofa', 'kadr', 'akt', 'wers'], answer: 1 },
        { id: 'whb3dc', q: 'Analizując obraz, piszesz o jego kompozycji. Chodzi o…', options: ['cenę obrazu', 'biografię malarza', 'układ elementów: co jest na pierwszym planie, co w tle, co w centrum', 'rodzaj ramy'], answer: 2 },
        { id: 'aochz5', q: 'Przewaga barw ciepłych (czerwieni, pomarańczu, żółci) na obrazie najczęściej…', options: ['nadaje mu radosny, pełen energii nastrój', 'sprawia, że obraz staje się grafiką', 'oznacza, że to fotografia', 'oznacza, że obraz jest niedokończony'], answer: 0 },
        { id: '5wh8wb', q: 'Prawda czy fałsz?\nPowieść „Percy Jackson i bogowie olimpijscy” Ricka Riordana nawiązuje do mitologii greckiej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Bogowie olimpijscy to bogowie greccy – tak kultura popularna korzysta z tradycyjnych wątków.' },
        { id: 'lljums', q: 'Film o dobrej dziewczynie, którą krzywdzi zła macocha, a która dzięki czarom trafia na bal i zdobywa szczęście, nawiązuje do baśni o…', options: ['Syzyfie', 'Kopciuszku', 'Ikarze', 'Prometeuszu'], answer: 1, explain: 'Syzyf, Ikar i Prometeusz to bohaterowie mitów greckich, nie baśni.' },
        { id: '1z602r', q: 'Program telewizyjny, którego celem jest przekazanie aktualnych wiadomości z kraju i ze świata, to program…', options: ['rozrywkowy', 'informacyjny', 'reklamowy', 'muzyczny'], answer: 1 },
      ],
      tasks: [
        {
          id: 'h3jagc',
          points: 2,
          q: 'Przeczytaj notatkę (tekst napisany do ćwiczenia):\n„W sobotę w parku miejskim odbył się festyn rodzinny. Przyszło na niego około 500 osób. Moim zdaniem był to najlepszy festyn w historii naszego miasta. Organizatorzy przygotowali 12 stanowisk z grami. Szkoda tylko, że koncert był tak nudny.”\nWypisz jedno zdanie, które przedstawia fakt, i jedno, które wyraża opinię. Każdy wybór uzasadnij.',
          steps: [
            'Fakt to informacja, którą da się sprawdzić (liczba, data, zdarzenie).',
            'Opinię zdradzają słowa wartościujące („najlepszy”, „nudny”, „szkoda”) i zwroty typu „moim zdaniem”.',
            'Uzasadnij wybór, wskazując konkretne słowa.',
          ],
          answer: 'Fakt: „Przyszło na niego około 500 osób.” – liczbę uczestników można sprawdzić (to samo dotyczy zdań o terminie festynu i o 12 stanowiskach). Opinia: „Moim zdaniem był to najlepszy festyn w historii naszego miasta.” – to ocena autora, świadczy o tym zwrot „moim zdaniem” i słowo wartościujące „najlepszy” (opinią jest też zdanie o nudnym koncercie).',
          scoring: [
            '1 pkt – poprawnie wskazany fakt z uzasadnieniem.',
            '2 pkt – poprawnie wskazana opinia z uzasadnieniem.',
          ],
        },
        {
          id: 'z680kq',
          points: 2,
          q: 'Przeczytaj reklamę (tekst napisany do ćwiczenia):\n„Masz dość nudnych przerw? Sięgnij po chrupiące batoniki Zeta! Energia, którą pokochasz od pierwszego gryza. Wszyscy w twojej klasie już je mają – a ty?”\nNazwij dwa różne środki perswazji zastosowane w tym tekście i do każdego podaj przykład.',
          steps: [
            'Przypomnij sobie środki perswazji: pytanie retoryczne, tryb rozkazujący, zwrot do odbiorcy, słownictwo wartościujące, obietnica, odwołanie do tego, co „robią wszyscy”.',
            'Do każdego nazwanego środka zacytuj pasujący fragment.',
          ],
          answer: 'Np.: 1) pytanie retoryczne – „Masz dość nudnych przerw?”; 2) tryb rozkazujący – „Sięgnij po chrupiące batoniki Zeta!”. Inne poprawne: słownictwo wartościujące („chrupiące”, „pokochasz”), zwrot bezpośredni do odbiorcy („a ty?”), odwołanie do tego, co robią wszyscy („Wszyscy w twojej klasie już je mają”) – to już chwyt manipulacyjny.',
          scoring: [
            '1 pkt – poprawnie nazwany pierwszy środek perswazji z trafnym przykładem.',
            '2 pkt – poprawnie nazwany drugi, inny środek perswazji z trafnym przykładem.',
          ],
        },
      ],
    },
    {
      id: 'poezja',
      name: 'Wiersze poetów XX wieku – jak je czytać',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), kl. VII–VIII: lektury – „wybrane wiersze: Krzysztofa Kamila Baczyńskiego, Zbigniewa Herberta, Bolesława Leśmiana, Czesława Miłosza, Tadeusza Różewicza, Wisławy Szymborskiej, oraz aforyzmy Stanisława Jerzego Leca”; I.1.7 (problematyka egzystencjalna), I.1.10 (konteksty: biograficzny, historyczny, kulturowy); kl. IV–VI I.1.1, I.1.4, I.1.6, I.1.9, I.1.14–15 (obrazy poetyckie, środki stylistyczne, wers, rym, strofa, podmiot liryczny, wrażenia, znaczenia dosłowne i przenośne). Informator CKE: zadania do tekstów poetyckich nie sprawdzają znajomości treści konkretnego wiersza, tylko umiejętność analizy i interpretacji. Fakty o poetach sprawdzone w nobelprize.org, culture.pl, zpe.gov.pl, IPN i PAP (dzieje.pl).',
      theory: `
        <div class="tip">💡 Według informatora CKE w arkuszu może być wiersz poety z listy albo zupełnie innego. Zadania <b>nie sprawdzają, czy znasz ten wiersz</b> – sprawdzają, czy umiesz go przeczytać i zinterpretować. Dlatego najważniejsza jest <b>metoda</b>.</div>
        <h3>Plan analizy wiersza – 7 pytań</h3>
        <ol>
          <li><b>Kto mówi?</b> – podmiot liryczny: kim jest, co czuje, czy mówi „ja”, „my”, czy się ukrywa.</li>
          <li><b>Do kogo?</b> – adresat: do kogo lub do czego zwraca się podmiot (ty, wy, apostrofa).</li>
          <li><b>W jakiej sytuacji?</b> – sytuacja liryczna: gdzie, kiedy i w jakich okolicznościach mówi podmiot (wspomina, patrzy przez okno, żegna się…).</li>
          <li><b>Co widzę?</b> – obrazy poetyckie: fragmenty, które pobudzają wyobraźnię.</li>
          <li><b>Jakimi środkami i po co?</b> – środki stylistyczne i ich <b>funkcja</b> (epitet, metafora, porównanie, pytanie retoryczne, powtórzenie, neologizm…).</li>
          <li><b>Jak jest zbudowany?</b> – wersy, strofy, rymy. Wiersz regularny ma stałą liczbę sylab i zwykle rymy; <b>wiersz wolny</b> nie ma stałej liczby sylab w wersach i zwykle nie ma rymów.</li>
          <li><b>O czym i po co?</b> – temat, problematyka, nastrój, przesłanie; związek tytułu z treścią.</li>
        </ol>
        <h3>Przećwicz na przykładzie</h3>
        <p><i>Przykład napisany do ćwiczenia:</i></p>
        <p>Stoję przy oknie. Miasto zasypia,<br>latarnie gaszą swoje żółte oczy.<br>Ktoś jeszcze biegnie – dokąd? po co?<br>A ja wciąż liczę kroki,<br>których nie zrobiłem.</p>
        <table>
          <tr><th>Pytanie</th><th>Odpowiedź</th></tr>
          <tr><td>Podmiot i sytuacja</td><td>„ja” stoi wieczorem przy oknie i obserwuje zasypiające miasto</td></tr>
          <tr><td>Obraz poetycki</td><td>gasnące latarnie, pusta ulica, ktoś biegnący</td></tr>
          <tr><td>Środki i funkcja</td><td>metafora „latarnie gaszą swoje żółte oczy” – miasto staje się żywe, zamyka oczy jak do snu; pytania retoryczne „dokąd? po co?” – skłaniają do refleksji nad sensem pośpiechu</td></tr>
          <tr><td>Budowa</td><td>wiersz wolny – wersy różnej długości, bez rymów</td></tr>
          <tr><td>Nastrój i problematyka</td><td>nastrój refleksyjny, melancholijny; problematyka egzystencjalna – przemijanie i niewykorzystane szanse („kroki, których nie zrobiłem”)</td></tr>
        </table>
        <h3>Problematyka egzystencjalna i konteksty</h3>
        <p><b>Problematyka egzystencjalna</b> to podstawowe pytania o ludzkie życie: sens istnienia, przemijanie, śmierć, miłość, samotność, miejsce człowieka w świecie.</p>
        <p><b>Konteksty</b> pomagają w interpretacji: <b>biograficzny</b> (wydarzenia z życia poety), <b>historyczny</b> (czas powstania utworu, np. II wojna światowa), <b>kulturowy</b> (nawiązania do mitów, Biblii, innych dzieł). Kontekst ma wspierać czytanie tekstu, a nie je zastępować.</p>
        <h3>Poeci z podstawy programowej</h3>
        <table>
          <tr><th>Poeta</th><th>Warto wiedzieć</th></tr>
          <tr><td>Krzysztof Kamil Baczyński</td><td>poeta pokolenia wojennego, żołnierz Armii Krajowej; zginął w czwartym dniu powstania warszawskiego, 4 sierpnia 1944 r.</td></tr>
          <tr><td>Bolesław Leśmian</td><td>słynie z neologizmów – nazywa się je „leśmianizmami” (np. tworzone z przedrostkami <i>bez-</i>, <i>nie-</i>)</td></tr>
          <tr><td>Czesław Miłosz</td><td>laureat literackiej Nagrody Nobla (1980)</td></tr>
          <tr><td>Wisława Szymborska</td><td>laureatka literackiej Nagrody Nobla (1996)</td></tr>
          <tr><td>Zbigniew Herbert</td><td>stworzył postać Pana Cogito – bohatera tomu wierszy „Pan Cogito” (1974)</td></tr>
          <tr><td>Tadeusz Różewicz</td><td>od początku pisał wierszem wolnym; mówił w wierszach o doświadczeniu wojny, np. „Ocalony” z tomu „Niepokój” (1947)</td></tr>
          <tr><td>Stanisław Jerzy Lec</td><td>autor aforyzmów, zebranych m.in. w tomie „Myśli nieuczesane”</td></tr>
        </table>
        <p>Wiersze tych poetów są chronione prawem autorskim – przeczytasz je w podręczniku lub tomikach. Tu ćwiczymy na przykładach napisanych specjalnie do nauki.</p>
        <h3>Aforyzm</h3>
        <p><b>Aforyzm</b> – krótka, zwięzła i błyskotliwa myśl (zwykle jedno zdanie) o życiu, ludziach, świecie. Często zaskakuje grą słów albo ironią i zmusza do zastanowienia. Ma <b>znanego autora</b> – tym różni się od ludowego, anonimowego przysłowia. Przykłady napisane do ćwiczenia: <i>„Najdłużej trwają chwile, na które czekamy.”</i>, <i>„Łatwo mieć zdanie, gdy nie ma się wątpliwości.”</i></p>
      `,
      flashcards: [
        ['Sytuacja liryczna', 'Gdzie, kiedy i w jakich okolicznościach mówi podmiot liryczny'],
        ['Adresat', 'Osoba lub rzecz, do której zwraca się podmiot liryczny'],
        ['Obraz poetycki', 'Fragment wiersza, który pobudza wyobraźnię – pozwala „zobaczyć” sytuację'],
        ['Wiersz wolny', 'Bez stałej liczby sylab w wersach, zwykle bez rymów'],
        ['Nastrój', 'Emocje i atmosfera wiersza: radość, smutek, niepokój, refleksja…'],
        ['Problematyka egzystencjalna', 'Pytania o sens życia, przemijanie, śmierć, miłość, samotność'],
        ['Kontekst biograficzny / historyczny', 'Życie poety / czas i wydarzenia, w których powstał utwór'],
        ['Aforyzm', 'Krótka, błyskotliwa myśl znanego autora, np. S.J. Lec, „Myśli nieuczesane”'],
        ['Nagroda Nobla – poeci z listy', 'Czesław Miłosz (1980), Wisława Szymborska (1996)'],
        ['Krzysztof Kamil Baczyński', 'Poeta pokolenia wojennego, zginął w powstaniu warszawskim (4 VIII 1944)'],
        ['Bolesław Leśmian', 'Mistrz neologizmów – „leśmianizmów”'],
        ['Pan Cogito', 'Bohater wierszy Zbigniewa Herberta (tom „Pan Cogito”, 1974)'],
        ['Tadeusz Różewicz', 'Wiersz wolny, doświadczenie wojny, np. „Ocalony” (tom „Niepokój”, 1947)'],
      ],
      questions: [
        { id: 'cde2f8', q: 'Kto otrzymał literacką Nagrodę Nobla w 1996 roku?', options: ['Wisława Szymborska', 'Czesław Miłosz', 'Zbigniew Herbert', 'Tadeusz Różewicz'], answer: 0, explain: 'Czesław Miłosz otrzymał tę nagrodę wcześniej – w 1980 roku.' },
        { id: '2iiq6n', q: 'Który poeta z listy lektur otrzymał literacką Nagrodę Nobla w 1980 roku?', options: ['Bolesław Leśmian', 'Krzysztof Kamil Baczyński', 'Czesław Miłosz', 'Stanisław Jerzy Lec'], answer: 2 },
        { id: '5bfc11', q: 'Który poeta zginął w powstaniu warszawskim w 1944 roku?', options: ['Czesław Miłosz', 'Krzysztof Kamil Baczyński', 'Wisława Szymborska', 'Zbigniew Herbert'], answer: 1 },
        { id: '19vw90', q: 'Z czego słynie poezja Bolesława Leśmiana?', options: ['z wierszy pisanych wyłącznie po łacinie', 'z braku jakichkolwiek środków stylistycznych', 'z aforyzmów zebranych w „Myślach nieuczesanych”', 'z licznych neologizmów (tzw. leśmianizmów)'], answer: 3 },
        { id: 'yn2oyv', q: 'Kto jest autorem aforyzmów zebranych w tomie „Myśli nieuczesane”?', options: ['Tadeusz Różewicz', 'Stanisław Jerzy Lec', 'Bolesław Leśmian', 'Czesław Miłosz'], answer: 1 },
        { id: 'ye7xqz', q: 'Pan Cogito to postać stworzona przez…', options: ['Wisławę Szymborską', 'Krzysztofa Kamila Baczyńskiego', 'Zbigniewa Herberta', 'Bolesława Leśmiana'], answer: 2 },
        { id: 'tokz21', q: 'Który poeta od początku twórczości pisał wierszem wolnym, a w wierszu „Ocalony” mówił o doświadczeniu wojny?', options: ['Bolesław Leśmian', 'Stanisław Jerzy Lec', 'Krzysztof Kamil Baczyński', 'Tadeusz Różewicz'], answer: 3 },
        { id: 'p7in2e', q: 'Aforyzm to…', options: ['krótka, zwięzła i błyskotliwa myśl o życiu lub ludziach, mająca znanego autora', 'długi wiersz o bohaterach narodowych', 'ludowe, anonimowe przysłowie', 'utwór dramatyczny w jednym akcie'], answer: 0 },
        { id: 'pdd1om', q: 'Który tekst jest aforyzmem? (przykłady napisane do ćwiczenia)', options: ['„Pociąg do Krakowa odjeżdża o 7.15 z peronu drugiego.”', '„Kup dwa, zapłać za jeden!”', '„Łatwo mieć zdanie, gdy nie ma się wątpliwości.”', '„Prosimy o zachowanie ciszy w czytelni.”'], answer: 2 },
        { id: '9diaxa', q: 'Wiersz wolny to wiersz…', options: ['bez stałej liczby sylab w wersach i zwykle bez rymów', 'w którym wszystkie wersy rymują się parami', 'pisany zawsze jednym długim zdaniem', 'którego nie wolno interpretować'], answer: 0 },
        { id: 'mwg139', q: 'Przeczytaj fragment (przykład napisany do ćwiczenia):\n„Stoję przy oknie. Miasto zasypia,\nlatarnie gaszą swoje żółte oczy.”\nJaka jest sytuacja liryczna?', options: ['podmiot liryczny opowiada o bitwie', 'podmiot liryczny wieczorem obserwuje z okna zasypiające miasto', 'podmiot liryczny rozmawia z przyjacielem przez telefon', 'podmiot liryczny wspomina wakacje nad morzem'], answer: 1 },
        { id: '33v34o', q: 'W wersie „latarnie gaszą swoje żółte oczy” (przykład napisany do ćwiczenia) zastosowano przede wszystkim…', options: ['onomatopeję', 'przenośnię (metaforę)', 'pytanie retoryczne', 'apostrofę'], answer: 1 },
        { id: '3lw5rk', q: 'Jaką funkcję pełnią pytania w wersie „Ktoś jeszcze biegnie – dokąd? po co?” (przykład napisany do ćwiczenia)?', options: ['podają dokładne informacje o celu podróży', 'naśladują dźwięk kroków', 'są pytaniami retorycznymi – skłaniają do refleksji nad sensem pośpiechu', 'są uroczystym zwrotem do Boga'], answer: 2 },
        { id: '959h7q', q: 'Problematyka egzystencjalna dotyczy…', options: ['podstawowych pytań o ludzkie życie: sens istnienia, przemijanie, śmierć, miłość, samotność', 'wyłącznie zasad pisowni', 'budowy wiersza: liczby wersów i strof', 'tylko cen i zakupów'], answer: 0 },
        { id: 'ject86', q: 'Odwołanie do wydarzeń z życia poety przy interpretacji wiersza to wykorzystanie kontekstu…', options: ['słowotwórczego', 'biograficznego', 'fonetycznego', 'gramatycznego'], answer: 1 },
        { id: 'zan3wd', q: 'Interpretujesz wiersz Baczyńskiego, odwołując się do II wojny światowej i okupacji. Wykorzystujesz kontekst…', options: ['historyczny', 'słowotwórczy', 'komiczny', 'gramatyczny'], answer: 0 },
        { id: 'lj8v0h', q: 'Prawda czy fałsz?\nZadania do wiersza na egzaminie ósmoklasisty sprawdzają, czy umiesz go przeanalizować i zinterpretować, a nie, czy znasz go wcześniej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Tak zapisano w informatorze CKE: zadania nie sprawdzają znajomości treści konkretnego utworu poetyckiego.' },
        { id: '6h88fw', q: 'Nastrój wiersza to…', options: ['liczba wersów w strofie', 'emocje i atmosfera, które tworzy wiersz (np. radość, smutek, niepokój)', 'imię adresata', 'układ rymów'], answer: 1 },
        { id: 'm00rnl', q: 'Adresat w wierszu to…', options: ['autor wiersza', 'tytuł wiersza', 'ostatni wers', 'osoba lub rzecz, do której zwraca się podmiot liryczny'], answer: 3 },
        { id: '1t81v5', q: 'Obraz poetycki to…', options: ['ilustracja wydrukowana obok wiersza', 'fragment wiersza, który pobudza wyobraźnię i pozwala „zobaczyć” opisaną sytuację', 'podpis autora pod wierszem', 'spis treści tomiku'], answer: 1 },
      ],
      tasks: [
        {
          id: '8mfe3x',
          points: 3,
          q: 'Przeczytaj wiersz (przykład napisany do ćwiczenia):\n\nStoję przy oknie. Miasto zasypia,\nlatarnie gaszą swoje żółte oczy.\nKtoś jeszcze biegnie – dokąd? po co?\nA ja wciąż liczę kroki,\nktórych nie zrobiłem.\n\na) Opisz sytuację liryczną.\nb) Nazwij jeden środek stylistyczny i określ jego funkcję.\nc) Określ nastrój wiersza i problem, nad którym zastanawia się podmiot liryczny.',
          steps: [
            'Sytuacja liryczna: kto mówi, gdzie jest, co robi, kiedy.',
            'Szukaj środków: przenośnia o latarniach, pytania retoryczne. Nie wystarczy nazwa – napisz, czemu środek służy.',
            'Nastrój odczytasz z obrazów (noc, gasnące światła) i ostatnich wersów. Co znaczą „kroki, których nie zrobiłem”?',
          ],
          answer: 'a) Podmiot liryczny stoi wieczorem przy oknie i patrzy na zasypiające miasto. b) Np. przenośnia „latarnie gaszą swoje żółte oczy” – ożywia miasto, które jak człowiek zamyka oczy do snu; albo pytania retoryczne „dokąd? po co?” – skłaniają do zastanowienia się nad sensem pośpiechu. c) Nastrój refleksyjny, melancholijny. Podmiot myśli o przemijaniu i o niewykorzystanych szansach – o tym, czego nie zrobił („kroki, których nie zrobiłem”).',
          scoring: [
            '1 pkt – poprawny opis sytuacji lirycznej.',
            '2 pkt – poprawnie nazwany środek stylistyczny z trafnie określoną funkcją.',
            '3 pkt – trafnie określony nastrój i problem (np. przemijanie, niewykorzystane szanse).',
          ],
        },
        {
          id: 'kwz7ev',
          points: 2,
          q: 'Przeczytaj aforyzm (przykład napisany do ćwiczenia): „Najdłużej trwają chwile, na które czekamy.”\nWyjaśnij jego sens i podaj przykład sytuacji z życia, która go potwierdza.',
          steps: [
            'Zastanów się, czy chwile naprawdę trwają dłużej, czy tylko nam się tak wydaje.',
            'Aforyzm opiera się na paradoksie: czas mierzony zegarem jest taki sam, a w odczuciu – różny.',
            'Podaj konkretny przykład z codziennego życia.',
          ],
          answer: 'Aforyzm mówi, że czas płynie w naszym odczuciu wolniej, gdy z niecierpliwością na coś czekamy – choć zegar odmierza go tak samo. Przykład: ostatni tydzień przed wakacjami albo ostatnie minuty lekcji przed dzwonkiem ciągną się w nieskończoność.',
          scoring: [
            '1 pkt – trafne wyjaśnienie sensu aforyzmu (czas wydaje się płynąć wolniej, gdy czekamy).',
            '2 pkt – trafny przykład sytuacji, która potwierdza aforyzm.',
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
