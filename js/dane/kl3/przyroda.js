/* Edukacja przyrodnicza – klasa 3 (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – IV. Edukacja przyrodnicza). Osiągnięcia na koniec klasy 3, bez podziału na klasy I–III.
 * Fakty spoza podstawy sprawdzone 1.11.2026 – źródła w polu basis i na stronie „Źródła”. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), IV. Edukacja przyrodnicza';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  const SVG_ROZA = `<svg viewBox="0 0 300 230" role="img" aria-label="Róża wiatrów: na górze N – północ, na dole S – południe, po prawej E – wschód, po lewej W – zachód">
      <polygon points="150,20 165,95 150,110 135,95" class="f1 s1 sw"/>
      <polygon points="150,200 135,125 150,110 165,125" class="f4 s4 sw"/>
      <polygon points="240,110 165,125 150,110 165,95" class="f3 s3 sw"/>
      <polygon points="60,110 135,95 150,110 135,125" class="f2 s2 sw"/>
      <text x="150" y="16" class="tx-b" text-anchor="middle">N</text>
      <text x="150" y="218" class="tx-b" text-anchor="middle">S</text>
      <text x="256" y="116" class="tx-b">E</text>
      <text x="44" y="116" class="tx-b" text-anchor="end">W</text>
    </svg>`;

  const SVG_ZNAK_A = `<svg viewBox="0 0 300 170" role="img" aria-label="Znak drogowy w kształcie trójkąta wierzchołkiem do góry, z czerwoną obwódką i żółtym środkiem">
      <polygon points="150,14 250,156 50,156" class="f4 s2" stroke-width="12" stroke-linejoin="round"/>
      <text x="150" y="128" class="tx-b" text-anchor="middle" style="font-size:40px">❗</text>
    </svg>`;

  const SVG_POJEMNIKI = `<svg viewBox="0 0 400 150" role="img" aria-label="Cztery pojemniki z napisami: Papier, Szkło, Metale i tworzywa sztuczne, Bio. Pytanie: który jest na butelkę ze szkła?">
      <rect x="12" y="30" width="86" height="100" rx="8" class="f1 s1 sw"/>
      <rect x="110" y="30" width="86" height="100" rx="8" class="f3 s3 sw"/>
      <rect x="208" y="30" width="86" height="100" rx="8" class="f4 s4 sw"/>
      <rect x="306" y="30" width="86" height="100" rx="8" class="f2 s2 sw"/>
      <text x="55" y="22" class="tx-b" text-anchor="middle">A</text>
      <text x="153" y="22" class="tx-b" text-anchor="middle">B</text>
      <text x="251" y="22" class="tx-b" text-anchor="middle">C</text>
      <text x="349" y="22" class="tx-b" text-anchor="middle">D</text>
      <text x="55" y="86" class="tx-s" text-anchor="middle">Papier</text>
      <text x="153" y="86" class="tx-s" text-anchor="middle">Szkło</text>
      <text x="251" y="78" class="tx-s" text-anchor="middle">Metale</text>
      <text x="251" y="96" class="tx-s" text-anchor="middle">i tworzywa</text>
      <text x="349" y="86" class="tx-s" text-anchor="middle">Bio</text>
    </svg>`;

  window.SUBJECTS.push({
    id: 'przyroda',
    name: 'Edukacja przyrodnicza',
    icon: '🌳',
    color: '#3a9b4f',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'rosliny-zwierzeta',
        name: 'Rośliny i zwierzęta wokół nas',
        basis: `${PP}, 1. Rozumienie środowiska przyrodniczego, pkt 1 (popularne gatunki roślin i zwierząt, zwierzęta hodowlane), pkt 3 (zwierzęta i rośliny, których w naturze nie spotyka się w Polsce), pkt 5 (proste hodowle roślin, opieka nad zwierzętami), pkt 6 (proste obserwacje i doświadczenia). Wybór gatunków – decyzja redakcyjna.${KONIEC}`,
        theory: `
          <h3>Drzewa w parku i w lesie</h3>
          <ul>
            <li><b>Dąb</b> – jego owoce to <b>żołędzie</b>.</li>
            <li><b>Kasztanowiec</b> – jesienią spadają z niego <b>kasztany</b>.</li>
            <li><b>Brzoza</b> – ma <b>białą korę</b> z czarnymi plamkami.</li>
            <li><b>Sosna</b> i <b>świerk</b> mają <b>igły</b> – to drzewa iglaste. Dąb, brzoza i klon mają <b>liście</b> – to drzewa liściaste.</li>
          </ul>
          <h3>Zwierzęta w mieście i na wsi</h3>
          <p>Ptaki: wróbel, sikora, gołąb, bocian. Ssaki: jeż, wiewiórka, sarna, zając.</p>
          <h3>Zwierzęta hodowlane – co nam dają?</h3>
          <table><tr><th>zwierzę</th><th>co daje</th></tr>
            <tr><td>krowa 🐄</td><td>mleko</td></tr><tr><td>kura 🐔</td><td>jajka</td></tr>
            <tr><td>owca 🐑</td><td>wełnę</td></tr><tr><td>pszczoła 🐝</td><td>miód</td></tr></table>
          <h3>Nie spotkasz ich w polskim lesie</h3>
          <p>Słoń, żyrafa, lew, kangur, pingwin, wielbłąd żyją w naturze w innych częściach świata. W Polsce zobaczysz je tylko w zoo. Rośliny z daleka: kaktus, palma, banan, ananas.</p>
          <h3>Hodowla roślin</h3>
          <p>Roślina potrzebuje: <b>wody</b> 💧, <b>światła</b> ☀️, <b>powietrza</b> i <b>ciepła</b>. Z nasiona fasoli na wilgotnej wacie po kilku dniach wyrasta kiełek.</p>
          <h3>Opieka nad zwierzęciem</h3>
          <p>Zwierzę domowe potrzebuje jedzenia, świeżej wody, czystego miejsca, ruchu i opieki weterynarza. Zwierzę to nie zabawka – czuje ból i strach.</p>
          <p class="tip">Obserwacja: patrzysz uważnie, zapisujesz albo rysujesz, co widzisz, i porównujesz.</p>`,
        flashcards: [
          ['Owoce dębu', 'żołędzie'],
          ['Drzewo z białą korą', 'brzoza'],
          ['Drzewa iglaste', 'mają igły, np. sosna, świerk'],
          ['Drzewa liściaste', 'mają liście, np. dąb, brzoza, klon'],
          ['Co daje krowa?', 'mleko'],
          ['Co daje owca?', 'wełnę'],
          ['Co daje pszczoła?', 'miód'],
          ['Zwierzęta hodowlane', 'zwierzęta, które ludzie hodują, np. krowa, kura, owca, świnia'],
          ['Czego potrzebuje roślina?', 'wody, światła, powietrza i ciepła'],
          ['Zwierzęta, których nie ma w polskim lesie', 'np. słoń, żyrafa, lew, kangur'],
          ['Obserwacja', 'uważne oglądanie i zapisywanie, co się dzieje'],
        ],
        questions: [
          { id: 'rgec8t', q: 'Z którego drzewa spadają żołędzie?', options: ['z dębu', 'z brzozy', 'z sosny'], answer: 0, explain: 'Żołędzie to owoce dębu.' },
          { id: 'txnpc9', q: 'Które drzewo ma białą korę?', options: ['brzoza', 'dąb', 'świerk'], answer: 0, explain: 'Brzozę łatwo poznać po białej korze z czarnymi plamkami.' },
          { id: 'n2c94q', q: 'Które drzewo jest iglaste?', options: ['sosna', 'klon', 'kasztanowiec'], answer: 0, explain: 'Sosna ma igły. Klon i kasztanowiec mają liście.' },
          { id: 'ub3zux', q: 'Które zwierzę daje nam wełnę?', options: ['owca', 'krowa', 'kura'], answer: 0, explain: 'Z wełny owiec robi się np. swetry.' },
          { id: 'o9g0qj', q: 'Które zwierzę daje nam miód?', options: ['pszczoła', 'mucha', 'motyl'], answer: 0, explain: 'Pszczoły robią miód z nektaru kwiatów.' },
          { id: 'oh4hwd', q: 'Które zwierzę jest zwierzęciem hodowlanym?', options: ['kura', 'sarna', 'lis'], answer: 0, explain: 'Kury hodujemy w gospodarstwie. Sarna i lis żyją dziko.' },
          { id: 'evk4j1', q: 'Którego zwierzęcia nie spotkasz w polskim lesie?', options: ['żyrafy', 'jeża', 'wiewiórki'], answer: 0, explain: 'Żyrafa żyje w naturze w Afryce. W Polsce zobaczysz ją tylko w zoo.' },
          { id: '5bl7dy', q: 'Która roślina nie rośnie dziko w Polsce?', options: ['palma', 'brzoza', 'mniszek'], answer: 0, explain: 'Palmy rosną w ciepłych krajach. W Polsce – tylko w domu albo w szklarni.' },
          { id: 'u2anrq', q: 'Czego NIE potrzebuje roślina, żeby rosnąć?', options: ['słodyczy', 'wody', 'światła'], answer: 0, explain: 'Roślina potrzebuje wody, światła, powietrza i ciepła.' },
          { id: 'wzsrj5', q: 'Kwiatek na ciemnej półce zrobił się blady i słaby. Czego mu brakowało?', options: ['światła', 'muzyki', 'cienia'], answer: 0, explain: 'Bez światła roślina słabnie i blednie. Postaw ją bliżej okna.' },
          { id: 'qyx3g2', q: 'Czego potrzebuje chomik w klatce?', options: ['jedzenia, wody i czystego miejsca', 'tylko zabawek', 'głośnej muzyki'], answer: 0, explain: 'Zwierzę domowe potrzebuje jedzenia, świeżej wody, czystości i spokoju.' },
          { id: 'b2r163', q: 'Prawda czy fałsz?\nPsa można zostawić samego na tydzień bez opieki.', options: TF, ...PF, answer: 1, explain: 'Pies potrzebuje codziennej opieki: jedzenia, wody i spaceru.' },
          { id: 'dgu9ra', q: 'Ola położyła fasolę na mokrej wacie. Co zobaczy po kilku dniach?', options: ['kiełek', 'kwiat', 'strąk z fasolkami'], answer: 0, explain: 'Najpierw z nasiona wyrasta kiełek. Na kwiaty i strąki trzeba czekać tygodniami.' },
          { id: 'nx7340', q: 'Jak nazywamy uważne oglądanie, np. jak rośnie fasola?', options: ['obserwacja', 'wycieczka', 'zgadywanie'], answer: 0, explain: 'Obserwujesz – patrzysz uważnie i zapisujesz, co widzisz.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'ekosystemy',
        name: 'Las, łąka, woda i pole',
        basis: `${PP}, 1. Rozumienie środowiska przyrodniczego, pkt 2 (cechy ekosystemów: łąka, jezioro, rzeka, morze, pole, staw, las, las gospodarczy; składowe i funkcje ekosystemu na przykładzie lasu – warstwy lasu, polany, torfowiska, martwe drzewo). Warstwy lasu i rola martwego drewna według Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl, sprawdzone 2.11.2026): korony drzew, podszyt, runo, ściółka.${KONIEC}`,
        theory: `
          <h3>Warstwy lasu (od góry)</h3>
          <ol>
            <li><b>Korony drzew</b> – najwyżej, najwięcej światła. Gniazda ptaków, wiewiórki.</li>
            <li><b>Podszyt</b> – krzewy i młode drzewa, np. leszczyna.</li>
            <li><b>Runo</b> – niskie rośliny: paprocie, mchy, jagody, grzyby.</li>
            <li><b>Ściółka</b> – na ziemi: opadłe liście, igły, gałązki. Mieszkają w niej dżdżownice, mrówki, chrząszcze.</li>
          </ol>
          <p class="tip">Im niżej, tym ciemniej i wilgotniej.</p>
          <h3>W lesie</h3>
          <ul>
            <li><b>Polana</b> – miejsce w lesie bez drzew, dużo słońca i trawy.</li>
            <li><b>Martwe drzewo</b> nie jest bezużyteczne: to dom i jedzenie dla owadów, grzybów, dzięcioła. Powoli zamienia się w ziemię.</li>
            <li><b>Torfowisko</b> – bardzo mokre, grząskie miejsce z mchami.</li>
            <li><b>Las gospodarczy</b> – las, który sadzą i pielęgnują leśnicy, a drewno wykorzystują ludzie.</li>
          </ul>
          <h3>Łąka i pole</h3>
          <p><b>Łąka</b> – trawy i dzikie kwiaty (np. mniszek, koniczyna), motyle, pszczoły, koniki polne. Rośnie sama.</p>
          <p><b>Pole</b> – rolnik sieje i zbiera rośliny: zboża (pszenica, żyto), ziemniaki, buraki.</p>
          <h3>Wody</h3>
          <ul>
            <li><b>Rzeka</b> – woda <b>płynie</b>, od źródła do ujścia.</li>
            <li><b>Jezioro</b> – duży zbiornik wody, która stoi. <b>Staw</b> – mały i płytki, często wykopany przez ludzi.</li>
            <li><b>Morze</b> – ogromne, woda jest <b>słona</b>. Polska leży nad Morzem Bałtyckim.</li>
          </ul>`,
        flashcards: [
          ['Warstwy lasu od góry', 'korony drzew, podszyt, runo, ściółka'],
          ['Podszyt', 'krzewy i młode drzewa'],
          ['Runo', 'niskie rośliny: mchy, paprocie, jagody, grzyby'],
          ['Ściółka', 'opadłe liście, igły i gałązki na ziemi'],
          ['Polana', 'miejsce w lesie bez drzew'],
          ['Martwe drzewo', 'dom i jedzenie dla owadów, grzybów i ptaków'],
          ['Las gospodarczy', 'las sadzony i pielęgnowany przez leśników, daje drewno'],
          ['Łąka', 'trawy i dzikie kwiaty, rośnie sama'],
          ['Pole', 'rolnik sieje i zbiera, np. zboże'],
          ['Rzeka a jezioro', 'w rzece woda płynie, w jeziorze stoi'],
          ['Morze', 'ogromna słona woda, np. Morze Bałtyckie'],
        ],
        questions: [
          { id: 'zhsrt3', q: 'Która warstwa lasu jest najwyżej?', options: ['korony drzew', 'podszyt', 'runo', 'ściółka'], answer: 0, explain: 'Od góry: korony drzew, podszyt, runo, ściółka.' },
          { id: 'sqzxdn', q: 'Jak nazywa się warstwa z opadłych liści i igieł na ziemi?', options: ['ściółka', 'runo', 'podszyt'], answer: 0, explain: 'Ściółka leży na samym dole, na ziemi.' },
          { id: 'sr52rn', q: 'W której warstwie lasu rosną mchy, paprocie i jagody?', options: ['w runie', 'w koronach drzew', 'w podszycie'], answer: 0, explain: 'Runo to niskie rośliny lasu.' },
          { id: '9tpl3e', q: 'Krzewy i młode drzewa w lesie to…', options: ['podszyt', 'ściółka', 'polana'], answer: 0, explain: 'Podszyt jest między runem a koronami drzew.' },
          { id: 'oqkmt4', q: 'Gdzie w lesie jest najciemniej i najwilgotniej?', options: ['przy ziemi', 'w koronach drzew', 'na czubku sosny'], answer: 0, explain: 'Im niżej, tym mniej światła i więcej wilgoci.' },
          { id: 'xrad9k', q: 'Po co w lesie zostawia się martwe drzewa?', options: ['są domem i jedzeniem dla owadów, grzybów i ptaków', 'żeby las wyglądał strasznie', 'na opał dla turystów'], answer: 0, explain: 'W martwym drzewie żyją owady, rosną grzyby, a dzięcioł szuka w nim jedzenia.' },
          { id: 'ozi2or', q: 'Jak nazywa się miejsce w lesie bez drzew?', options: ['polana', 'torfowisko', 'podszyt'], answer: 0, explain: 'Na polanie jest dużo słońca i trawy.' },
          { id: 'yd0693', q: 'Kto sadzi i pielęgnuje las gospodarczy?', options: ['leśnicy', 'rolnicy', 'rybacy'], answer: 0, explain: 'Las gospodarczy prowadzą leśnicy – sadzą drzewa, dbają o nie, a drewno wykorzystują ludzie.' },
          { id: 'uj187v', q: 'Czym różni się łąka od pola?', options: ['łąka rośnie sama, a pole sieje rolnik', 'na łące rośnie zboże', 'pole jest zawsze w lesie'], answer: 0, explain: 'Na łące rosną dzikie trawy i kwiaty. Na polu rolnik uprawia np. zboże.' },
          { id: 'rmkwd4', q: 'Co rośnie na polu?', options: ['pszenica', 'paproć', 'mech'], answer: 0, explain: 'Pszenica to zboże. Rolnik sieje ją na polu.' },
          { id: 'kus0zc', q: 'W którym zbiorniku woda płynie?', options: ['w rzece', 'w jeziorze', 'w stawie'], answer: 0, explain: 'Rzeka płynie od źródła do ujścia. W jeziorze i stawie woda stoi.' },
          { id: '0gzjl2', q: 'Gdzie woda jest słona?', options: ['w morzu', 'w rzece', 'w stawie'], answer: 0, explain: 'Woda w morzu jest słona. W rzekach i jeziorach – słodka.' },
          { id: 'tf7jq8', q: 'Nad jakim morzem leży Polska?', options: ['nad Morzem Bałtyckim', 'nad Morzem Czarnym', 'nad Morzem Śródziemnym'], answer: 0, explain: 'Na północy Polski jest Morze Bałtyckie.' },
          { id: 'iza6uc', q: 'Prawda czy fałsz?\nStaw jest zwykle mniejszy i płytszy niż jezioro.', options: TF, ...PF, answer: 0, explain: 'Staw to mały, płytki zbiornik, często wykopany przez ludzi.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'ochrona',
        name: 'Chronimy przyrodę',
        basis: `${PP}, 1. Rozumienie środowiska przyrodniczego, pkt 1 (gatunki objęte ochroną), pkt 7 (chroni przyrodę, wskazuje miejsca ochrony przyrody, parki narodowe, pomniki przyrody), pkt 8 (segreguje odpady, zna przyczyny i skutki). Kolory pojemników i odpady niebezpieczne: rozporządzenie Ministra Klimatu i Środowiska z 10.05.2021, Dz.U. 2021 poz. 906, § 3, oraz serwis Edukacja Ekologiczna Ministerstwa Klimatu i Środowiska (gov.pl, „JSSO” i „Jak segregować”; sprawdzone 2.11.2026). Gatunki chronione: rozporządzenia w sprawie ochrony gatunkowej zwierząt (Dz.U. 2016 poz. 2183, tekst jednolity Dz.U. 2022 poz. 2380) i roślin (Dz.U. 2014 poz. 1409) – sprawdzone 2.11.2026.${KONIEC}`,
        theory: `
          <h3>Segregujemy odpady</h3>
          <table><tr><th>pojemnik</th><th>co wrzucamy</th></tr>
            <tr><td>🟦 niebieski <b>„Papier”</b></td><td>gazety, kartony, zeszyty</td></tr>
            <tr><td>🟩 zielony <b>„Szkło”</b></td><td>szklane butelki i słoiki</td></tr>
            <tr><td>🟨 żółty <b>„Metale i tworzywa sztuczne”</b></td><td>plastikowe butelki, puszki, kartony po mleku i soku</td></tr>
            <tr><td>🟫 brązowy <b>„Bio”</b></td><td>obierki z warzyw i owoców, liście</td></tr></table>
          <p>Resztę wyrzucamy do odpadów <b>zmieszanych</b>. W niektórych gminach szkło bezbarwne zbiera się osobno – do białego pojemnika.</p>
          <p><b>Zużyte baterie, przeterminowane leki i zepsuty sprzęt elektryczny</b> (np. stara suszarka) są niebezpieczne – nie wrzucamy ich do żadnego zwykłego pojemnika. Oddajemy je w sklepie, w aptece albo w gminnym punkcie zbiórki (PSZOK).</p>
          <p class="tip">Po co? Z posegregowanych odpadów robi się nowe rzeczy (np. papier z makulatury), a na wysypiska trafia mniej śmieci.</p>
          <h3>Gatunki chronione</h3>
          <p>Niektórych zwierząt i roślin jest mało. Prawo zabrania ich łapania, zrywania i niszczenia. Chronione są np. <b>żubr</b>, <b>ryś</b>, <b>niedźwiedź brunatny</b>, <b>bocian biały</b>, <b>jeż</b>, a z roślin np. <b>sasanki</b> i <b>rosiczka</b>.</p>
          <h3>Miejsca ochrony przyrody</h3>
          <ul>
            <li><b>Park narodowy</b> – duży obszar o wyjątkowej przyrodzie, chroniony prawem. Np. <b>Białowieski Park Narodowy</b> (żyją tam żubry) i <b>Tatrzański Park Narodowy</b> (w Tatrach).</li>
            <li><b>Pomnik przyrody</b> – pojedynczy cenny twór przyrody, np. bardzo stare drzewo albo wielki głaz. Często stoi przy nim tabliczka „Pomnik przyrody”.</li>
            <li>Sprawdź, czy w twojej okolicy jest park narodowy, rezerwat albo pomnik przyrody!</li>
          </ul>
          <h3>Jak chronić przyrodę na co dzień</h3>
          <p>Nie śmieć, zabieraj odpady z wycieczki, nie hałasuj w lesie, nie zrywaj chronionych roślin, zakręcaj wodę, gaś niepotrzebne światło.</p>`,
        flashcards: [
          ['Pojemnik niebieski', 'papier'],
          ['Pojemnik zielony', 'szkło'],
          ['Pojemnik żółty', 'metale i tworzywa sztuczne (plastik, puszki)'],
          ['Pojemnik brązowy', 'bio – obierki, liście'],
          ['Po co segregować?', 'z odpadów powstają nowe rzeczy, mniej śmieci na wysypiskach'],
          ['Zużyte baterie, stare leki', 'nie do kosza – do punktu zbiórki w sklepie, aptece albo PSZOK-u'],
          ['Gatunek chroniony', 'roślina lub zwierzę, których nie wolno zrywać, łapać ani niszczyć'],
          ['Przykłady zwierząt chronionych', 'żubr, ryś, niedźwiedź brunatny, bocian biały, jeż'],
          ['Park narodowy', 'duży obszar o wyjątkowej przyrodzie, chroniony prawem'],
          ['Pomnik przyrody', 'np. bardzo stare drzewo albo wielki głaz pod ochroną'],
          ['Gdzie żyją żubry?', 'np. w Białowieskim Parku Narodowym'],
        ],
        questions: [
          { id: 'i007tr', q: 'Do którego pojemnika wyrzucisz stary zeszyt?', options: ['niebieskiego – papier', 'zielonego – szkło', 'brązowego – bio'], answer: 0, explain: 'Papier, gazety i kartony – do niebieskiego pojemnika.' },
          { id: 'd4i4ee', q: 'Do którego pojemnika wyrzucisz pusty słoik?', svg: SVG_POJEMNIKI, say: 'Do którego pojemnika wyrzucisz pusty słoik? A – papier, B – szkło, C – metale i tworzywa sztuczne, D – bio.', options: ['B', 'A', 'C', 'D'], answer: 0, explain: 'Słoik jest ze szkła – do pojemnika „Szkło” (zielonego).' },
          { id: 'kld7ry', q: 'Do którego pojemnika wyrzucisz plastikową butelkę po wodzie?', options: ['żółtego', 'zielonego', 'niebieskiego'], answer: 0, explain: 'Żółty pojemnik to „Metale i tworzywa sztuczne” – plastik i puszki.' },
          { id: 'gpjxvs', q: 'Gdzie wyrzucisz skórkę od banana?', options: ['do brązowego – bio', 'do żółtego', 'do niebieskiego'], answer: 0, explain: 'Obierki z owoców i warzyw to odpady bio – brązowy pojemnik.' },
          { id: 'ulyxnn', q: 'Do którego pojemnika wyrzucisz puszkę po napoju?', options: ['żółtego', 'brązowego', 'niebieskiego'], answer: 0, explain: 'Metal – do żółtego pojemnika „Metale i tworzywa sztuczne”.' },
          { id: 'w6dyfl', q: 'Bateria w zabawce się zużyła. Co z nią zrobisz?', options: ['oddam do punktu zbiórki baterii', 'wrzucę do żółtego pojemnika', 'wrzucę do brązowego pojemnika'], answer: 0, explain: 'Baterie są niebezpieczne dla przyrody. Zbiera się je osobno – np. w sklepie albo w gminnym punkcie zbiórki.' },
          { id: 'jvkp76', q: 'Po co segregujemy odpady?', options: ['żeby zrobić z nich nowe rzeczy i mieć mniej śmieci', 'żeby pojemniki były kolorowe', 'żeby śmieciarka przyjeżdżała częściej'], answer: 0, explain: 'Z makulatury powstaje nowy papier, ze stłuczki – nowe szkło. Wysypiska rosną wolniej.' },
          { id: 'dmkf7t', q: 'Które zwierzę jest w Polsce pod ochroną?', options: ['żubr', 'mucha', 'komar'], answer: 0, explain: 'Żubr jest gatunkiem chronionym. Żyje np. w Puszczy Białowieskiej.' },
          { id: 'ybeb13', q: 'Znalazłeś w ogrodzie jeża. Co robisz?', options: ['zostawiam go w spokoju', 'zabieram go do domu', 'wkładam go do pudełka'], answer: 0, explain: 'Jeż jest pod ochroną. Dzikie zwierzę zostawiamy w jego środowisku.' },
          { id: 'bij9ct', q: 'W lesie rośnie sasanka. Wolno ją zerwać?', options: ['nie, jest pod ochroną', 'tak, jeśli zerwę jedną', 'tak, na bukiet dla mamy'], answer: 0, explain: 'Sasanki są chronione. Można je oglądać i fotografować, ale nie zrywać.' },
          { id: '1ajy6c', q: 'Bardzo stare, cenne drzewo objęte ochroną to…', options: ['pomnik przyrody', 'park narodowy', 'las gospodarczy'], answer: 0, explain: 'Pomnik przyrody to pojedynczy cenny twór przyrody, np. sędziwe drzewo albo głaz.' },
          { id: 's0vlja', q: 'Gdzie żyją na wolności żubry?', options: ['w Białowieskim Parku Narodowym', 'w Tatrzańskim Parku Narodowym na szczytach', 'w Morzu Bałtyckim'], answer: 0, explain: 'Białowieski Park Narodowy jest znany z żubrów.' },
          { id: 'lgfa0z', q: 'Park narodowy to…', options: ['duży obszar o wyjątkowej przyrodzie, chroniony prawem', 'park z placem zabaw w mieście', 'ogród przy szkole'], answer: 0, explain: 'W parku narodowym przyroda jest chroniona, a turyści chodzą tylko wyznaczonymi szlakami.' },
          { id: 'klrkpa', q: 'Co zrobisz ze śmieciami po pikniku w lesie?', options: ['zabiorę je i wyrzucę do kosza', 'zakopię je pod drzewem', 'zostawię na polanie'], answer: 0, explain: 'Śmieci zabieramy ze sobą. W lesie szkodzą zwierzętom.' },
          { id: 'blcnlz', q: 'Prawda czy fałsz?\nZakręcanie wody podczas mycia zębów pomaga chronić przyrodę.', options: TF, ...PF, answer: 0, explain: 'Oszczędzasz wodę – to też ochrona przyrody.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'zdrowie',
        name: 'Zdrowie, jedzenie i higiena',
        basis: `${PP}, 2. Funkcje życiowe człowieka, ochrona zdrowia, bezpieczeństwo i odpoczynek, pkt 4 (higiena i estetyka własna i otoczenia), pkt 7 (wartości odżywcze produktów, znaczenie diety, umiar w słodyczach), pkt 8 (przygotowuje zdrowe posiłki), pkt 9 (ubiera się odpowiednio do pogody, szuka informacji o pogodzie). Proporcje na talerzu według „Talerza zdrowego żywienia” Narodowego Instytutu Zdrowia Publicznego PZH (pacjent.gov.pl, „Jak zdrowo się odżywiać”, oraz zpe.gov.pl; sprawdzone 2.11.2026).${KONIEC}`,
        theory: `
          <h3>Higiena</h3>
          <ul>
            <li>Myj ręce <b>mydłem</b>: przed jedzeniem, po wyjściu z toalety, po powrocie do domu, po zabawie ze zwierzęciem.</li>
            <li>Myj zęby <b>rano i wieczorem</b>.</li>
            <li>Codziennie się myj i zmieniaj bieliznę. Przy kichaniu zasłaniaj usta i nos – chusteczką albo łokciem.</li>
            <li>Dbaj o porządek: w pokoju, w tornistrze, w ławce.</li>
          </ul>
          <h3>Zdrowe jedzenie</h3>
          <ul>
            <li><b>Warzywa i owoce</b> – codziennie, przy każdym posiłku. Mają witaminy.</li>
            <li><b>Pełnoziarniste pieczywo, kasze</b> – dają siłę na długo.</li>
            <li><b>Mleko, jogurt, ser</b> – wapń na mocne kości i zęby.</li>
            <li><b>Mięso, ryby, jajka, fasola</b> – białko, z którego rośnie ciało.</li>
            <li>Pij <b>wodę</b>. Słodkie napoje, słodycze, chipsy i fast food – rzadko i mało. Za dużo cukru psuje zęby i szkodzi zdrowiu.</li>
          </ul>
          <h3>Talerz zdrowego żywienia</h3>
          <p>Na talerzu: <b>połowa</b> – warzywa i owoce (więcej warzyw), <b>ćwierć</b> – produkty zbożowe (najlepiej pełnoziarniste), <b>ćwierć</b> – produkty białkowe (np. jajka, ryby, ser, fasola).</p>
          <p class="tip">Zdrowe drugie śniadanie: kanapka z pełnoziarnistego chleba z serem i warzywami, jabłko, woda.</p>
          <h3>Ubierz się do pogody</h3>
          <p>Sprawdź pogodę (prognoza w telewizji, radiu, internecie). Zimno – czapka, szalik, rękawiczki. Deszcz – kurtka z kapturem, kalosze, parasol. Upał – czapka z daszkiem, woda, krem z filtrem. Ubieraj się „na cebulkę” – kilka warstw, które łatwo zdjąć.</p>
          <h3>Ruch i odpoczynek</h3>
          <p>Codziennie ruszaj się na świeżym powietrzu i wysypiaj się. Zmęczone ciało gorzej się uczy.</p>`,
        flashcards: [
          ['Kiedy myjesz ręce?', 'przed jedzeniem, po toalecie, po powrocie do domu, po zabawie ze zwierzęciem'],
          ['Ile razy dziennie myjesz zęby?', 'rano i wieczorem'],
          ['Kichasz – co robisz?', 'zasłaniasz usta i nos chusteczką albo łokciem'],
          ['Warzywa i owoce', 'codziennie – mają witaminy'],
          ['Mleko, jogurt, ser', 'wapń na mocne kości i zęby'],
          ['Najlepszy napój', 'woda'],
          ['Talerz zdrowego żywienia', 'połowa – warzywa i owoce, ćwierć – produkty zbożowe, ćwierć – białko'],
          ['Słodycze', 'rzadko i mało – psują zęby'],
          ['Ubieranie „na cebulkę”', 'kilka warstw, które łatwo zdjąć'],
          ['Upał', 'czapka z daszkiem, woda, krem z filtrem'],
          ['Gdzie sprawdzisz pogodę?', 'w prognozie: telewizja, radio, internet'],
        ],
        questions: [
          { id: 'uwpxin', q: 'Kiedy trzeba umyć ręce?', options: ['przed jedzeniem', 'tylko w niedzielę', 'tylko po kąpieli'], answer: 0, explain: 'Na rękach są zarazki, których nie widać. Myj je przed każdym jedzeniem.' },
          { id: 'rsbaf1', q: 'Kiedy myjesz zęby?', options: ['rano i wieczorem', 'tylko rano', 'raz w tygodniu'], answer: 0, explain: 'Zęby myjemy rano i wieczorem, przed snem.' },
          { id: 'r0qo94', q: 'Chce ci się kichnąć. Co robisz?', options: ['zasłaniam usta i nos łokciem albo chusteczką', 'kicham na kolegę', 'kicham na dłoń i podaję komuś rękę'], answer: 0, explain: 'Tak zarazki nie lecą na innych.' },
          { id: 'cvf7ta', q: 'Co najlepiej gasi pragnienie?', options: ['woda', 'słodka oranżada', 'cola'], answer: 0, explain: 'Woda gasi pragnienie i nie ma cukru.' },
          { id: 'ycfiri', q: 'Które drugie śniadanie jest najzdrowsze?', options: ['kanapka z serem i warzywami, jabłko i woda', 'batonik i słodki napój', 'chipsy i cola'], answer: 0, explain: 'Pieczywo, ser, warzywa i owoce dają siłę na długo.' },
          { id: '51du1o', q: 'Co daje nam mleko i ser?', options: ['wapń na mocne kości i zęby', 'cukier na energię do nocy', 'nic ważnego'], answer: 0, explain: 'Produkty mleczne mają wapń – budulec kości i zębów.' },
          { id: 'de5nb5', q: 'Co się stanie, gdy codziennie zjadasz dużo słodyczy?', options: ['mogą się psuć zęby i możesz chorować', 'zęby będą mocniejsze', 'będziesz szybciej biegać'], answer: 0, explain: 'Cukier w nadmiarze szkodzi zębom i zdrowiu. Słodycze – rzadko i mało.' },
          { id: '15a8ht', q: 'Co warto jeść codziennie?', options: ['warzywa i owoce', 'frytki', 'cukierki'], answer: 0, explain: 'Warzywa i owoce mają witaminy – jedz je przy każdym posiłku.' },
          { id: '72vchv', q: 'Na dworze pada deszcz. Co założysz?', options: ['kurtkę z kapturem i kalosze', 'sandały i koszulkę', 'strój kąpielowy'], answer: 0, explain: 'Kurtka z kapturem i kalosze chronią przed zmoknięciem.' },
          { id: 'lsoydw', q: 'Jest upał ☀️. Co ze sobą weźmiesz?', say: 'Jest upał. Co ze sobą weźmiesz?', options: ['czapkę z daszkiem i wodę', 'szalik i rękawiczki', 'kalosze'], answer: 0, explain: 'W upale chroń głowę przed słońcem i dużo pij.' },
          { id: 'mduw8y', q: 'Co znaczy „ubierać się na cebulkę”?', options: ['zakładać kilka warstw ubrań', 'ubierać się na żółto', 'jeść cebulę na śniadanie'], answer: 0, explain: 'Kilka cienkich warstw łatwo zdjąć, gdy zrobi się ciepło.' },
          { id: 'xeptqu', q: 'Gdzie sprawdzisz, jaka jutro będzie pogoda?', options: ['w prognozie pogody', 'w słowniku', 'w książce kucharskiej'], answer: 0, explain: 'Prognozę pogody podaje telewizja, radio i internet.' },
          { id: 'uvrldo', q: 'Prawda czy fałsz?\nSen i ruch na świeżym powietrzu są ważne dla zdrowia.', options: TF, ...PF, answer: 0, explain: 'Wyspany i wybiegany uczeń lepiej się czuje i lepiej się uczy.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'bezpieczenstwo',
        name: 'Wzywamy pomocy',
        basis: `${PP}, 2. Funkcje życiowe człowieka, ochrona zdrowia, bezpieczeństwo i odpoczynek, pkt 1 (zawody: nauczyciel, żołnierz, policjant, strażak, lekarz, pielęgniarz, leśnik; praca w służbach mundurowych i medycznych), pkt 2–3 (numery alarmowe, wezwanie o pomoc, dane osobowe w kontakcie ze służbami), pkt 5–6 (reaguje w sytuacji zagrożenia, podstawowe zasady pierwszej pomocy), pkt 11 (droga ewakuacyjna, znaki bezpieczeństwa, bezpieczna zabawa), pkt 12 (zagrożenia ze środowiska: burza, huragan, ulewa, susza, powódź, pożar, piorun). Numery alarmowe i sposób wzywania pomocy według serwisu „Numer alarmowy 112” MSWiA (gov.pl, „Inne numery alarmowe”, „Jak zgłaszać?”) i Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl, „Pierwsza pomoc – podstawy”; sprawdzone 2.11.2026): 112 – jednolity numer alarmowy w całej UE; 997, 998, 999 nadal działają.${KONIEC}`,
        theory: `
          <h3>Ludzie, którzy pomagają</h3>
          <ul>
            <li><b>Strażak</b> 🚒 – gasi pożary, ratuje ludzi i zwierzęta, pomaga przy powodzi i wypadku.</li>
            <li><b>Policjant</b> 🚓 – pilnuje porządku i bezpieczeństwa, pomaga zgubionym.</li>
            <li><b>Lekarz</b> i <b>pielęgniarz</b> 🚑 – leczą chorych i ratują życie.</li>
            <li><b>Żołnierz</b> – broni kraju, pomaga przy klęskach, np. powodzi.</li>
            <li><b>Leśnik</b> – opiekuje się lasem. <b>Nauczyciel</b> – uczy i dba o uczniów w szkole.</li>
          </ul>
          <h3>Numery alarmowe</h3>
          <table><tr><th>numer</th><th>kto</th></tr>
            <tr><td><b>112</b></td><td>numer alarmowy – działa w całej Unii Europejskiej</td></tr>
            <tr><td><b>997</b></td><td>Policja</td></tr>
            <tr><td><b>998</b></td><td>Straż Pożarna</td></tr>
            <tr><td><b>999</b></td><td>Pogotowie Ratunkowe</td></tr></table>
          <p>Dzwoń <b>tylko wtedy, gdy ktoś potrzebuje pomocy</b>. Żarty blokują linię komuś w potrzebie.</p>
          <h3>Jak wezwać pomoc?</h3>
          <ol><li>Powiedz, <b>kim jesteś</b> (imię i nazwisko).</li><li>Powiedz, <b>co się stało</b>.</li><li>Podaj <b>adres</b> – gdzie to jest.</li><li>Odpowiadaj na pytania i <b>nie rozłączaj się pierwszy</b>.</li></ol>
          <p class="tip">Naucz się na pamięć swojego adresu i telefonu do rodzica.</p>
          <h3>Pierwsza pomoc</h3>
          <p>Najpierw sprawdź, czy <b>tobie</b> nic nie grozi. Potem zawołaj dorosłego albo zadzwoń pod 112. Mała rana: przemyj czystą wodą i zaklej plastrem. Oparzenie: polewaj chłodną wodą.</p>
          <h3>Zagrożenia z przyrody</h3>
          <ul>
            <li><b>Burza</b> ⛈️ – schowaj się w budynku. Nie stój pod drzewem i nie kąp się w jeziorze – może uderzyć <b>piorun</b>.</li>
            <li><b>Huragan</b> (bardzo silny wiatr) – zostań w domu, z daleka od okien.</li>
            <li><b>Ulewa</b> i <b>powódź</b> – nie wchodź do płynącej wody. <b>Susza</b> – łatwo o <b>pożar</b> lasu: nie rozpalaj ognia.</li>
          </ul>
          <h3>W szkole</h3>
          <p><b>Zielony znak z biegnącym ludzikiem</b> pokazuje drogę ewakuacyjną – którędy wyjść, gdy jest pożar. Podczas alarmu słuchaj nauczyciela i wychodź spokojnie, bez biegania.</p>`,
        flashcards: [
          ['112', 'numer alarmowy w całej Unii Europejskiej'],
          ['997', 'Policja'],
          ['998', 'Straż Pożarna'],
          ['999', 'Pogotowie Ratunkowe'],
          ['Wzywam pomocy – co mówię?', 'kim jestem, co się stało, gdzie (adres); nie rozłączam się pierwszy'],
          ['Strażak', 'gasi pożary, ratuje ludzi i zwierzęta'],
          ['Leśnik', 'opiekuje się lasem'],
          ['Burza – gdzie się schować?', 'w budynku; nie pod drzewem'],
          ['Oparzenie', 'polewać chłodną wodą'],
          ['Zielony znak z biegnącym ludzikiem', 'droga ewakuacyjna – którędy wyjść'],
        ],
        questions: [
          { id: 'svffgc', q: 'Jaki jest numer alarmowy w całej Unii Europejskiej?', options: ['112', '997', '123'], answer: 0, explain: '112 działa w Polsce i w innych krajach Unii Europejskiej.' },
          { id: 'gx8be3', q: 'Pod jaki numer zadzwonisz po Straż Pożarną?', options: ['998', '997', '999'], answer: 0, explain: '998 – Straż Pożarna. Możesz też zadzwonić pod 112.' },
          { id: '2nzudu', q: 'Pod jaki numer zadzwonisz po Pogotowie Ratunkowe?', options: ['999', '998', '997'], answer: 0, explain: '999 – Pogotowie Ratunkowe. Możesz też zadzwonić pod 112.' },
          { id: '74yx1i', q: 'Numer 997 to…', options: ['Policja', 'Straż Pożarna', 'Pogotowie Ratunkowe'], answer: 0, explain: '997 – Policja.' },
          { id: '5tevvs', q: 'Co powiesz najpierw, gdy dzwonisz po pomoc?', options: ['kim jestem i co się stało', 'jaka jest pogoda', 'jaki mam ulubiony kolor'], answer: 0, explain: 'Powiedz, kim jesteś, co się stało i gdzie. Potem odpowiadaj na pytania.' },
          { id: 'zz0mcj', q: 'Kiedy możesz się rozłączyć, gdy wzywasz pomocy?', options: ['gdy dyspozytor pozwoli', 'od razu po pierwszym zdaniu', 'gdy się znudzę'], answer: 0, explain: 'Nie rozłączaj się pierwszy – dyspozytor może mieć jeszcze pytania.' },
          { id: 'epkixn', q: 'Kolega dla żartu chce zadzwonić pod 112. Co mu powiesz?', options: ['Nie rób tego – zablokujesz linię komuś w potrzebie.', 'Dobry pomysł!', 'Zadzwoń dwa razy.'], answer: 0, explain: 'Na numer alarmowy dzwonimy tylko w nagłej sytuacji.' },
          { id: 'pyc212', q: 'Kto opiekuje się lasem?', options: ['leśnik', 'strażak', 'pielęgniarz'], answer: 0, explain: 'Leśnik dba o las: sadzi drzewa i pilnuje porządku w lesie.' },
          { id: '539rhx', q: 'Kto gasi pożary?', options: ['strażak', 'nauczyciel', 'lekarz'], answer: 0, explain: 'Strażak gasi pożary i ratuje ludzi i zwierzęta.' },
          { id: 'b0uc1f', q: 'Zaczyna się burza. Gdzie się schowasz?', options: ['w budynku', 'pod wysokim drzewem', 'w jeziorze'], answer: 0, explain: 'W budynku jesteś bezpieczny. Piorun często uderza w wysokie drzewa.' },
          { id: 'uar58j', q: 'Oparzyłeś palec o gorący garnek. Co robisz?', options: ['polewam palec chłodną wodą', 'smaruję masłem', 'nic nie mówię dorosłym'], answer: 0, explain: 'Chłodna woda łagodzi oparzenie. Powiedz też dorosłemu.' },
          { id: 'y4b8qi', q: 'Widzisz, że ktoś leży na ulicy. Co zrobisz najpierw?', options: ['sprawdzę, czy mnie nic nie grozi, i zawołam dorosłego', 'ucieknę', 'zrobię zdjęcie'], answer: 0, explain: 'Najpierw twoje bezpieczeństwo. Potem wezwij dorosłego albo zadzwoń pod 112.' },
          { id: 'vkrztm', q: 'Co pokazuje zielony znak z biegnącym ludzikiem?', options: ['drogę ewakuacyjną', 'boisko szkolne', 'sklepik'], answer: 0, explain: 'Tym znakiem oznacza się drogę wyjścia w razie pożaru lub innego zagrożenia.' },
          { id: 'ghncy4', q: 'Prawda czy fałsz?\nPodczas suszy w lesie łatwo o pożar.', options: TF, ...PF, answer: 0, explain: 'Suche liście i trawa szybko się palą. Nie rozpalaj ognia w lesie.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'droga-internet',
        name: 'Na drodze i w internecie',
        basis: `${PP}, 2. Funkcje życiowe człowieka, ochrona zdrowia, bezpieczeństwo i odpoczynek, pkt 10 (podstawowe znaki drogowe, bezpieczeństwo w ruchu drogowym i w miejscach publicznych, zachowanie w środkach transportu zbiorowego), pkt 13 (nieprawdziwe informacje – sprawdza je, pytając nauczyciela, rodziców, policjanta), pkt 14 (bezpieczeństwo przy urządzeniach cyfrowych, ograniczenie czasu, netykieta), pkt 15–16 (nieodpowiedzialne korzystanie z technologii szkodzi zdrowiu; pozytywne znaczenie technologii). Grupy znaków: rozporządzenie w sprawie znaków i sygnałów drogowych, Dz.U. 2019 poz. 2310, i warunki techniczne, Dz.U. 2019 poz. 2311.${KONIEC}`,
        theory: `
          <h3>Znaki drogowe – po kształcie poznasz grupę</h3>
          <table><tr><th>znak</th><th>co robi</th></tr>
            <tr><td>🔺 <b>ostrzegawczy</b> – trójkąt, żółty z czerwoną obwódką</td><td>ostrzega przed niebezpieczeństwem, np. „dzieci”</td></tr>
            <tr><td>⭕ <b>zakazu</b> – koło z czerwoną obwódką</td><td>mówi, czego <b>nie wolno</b></td></tr>
            <tr><td>🔵 <b>nakazu</b> – niebieskie koło</td><td>mówi, co <b>trzeba</b> robić</td></tr>
            <tr><td>🟦 <b>informacyjny</b> – niebieski prostokąt lub kwadrat</td><td>informuje, np. o przejściu dla pieszych</td></tr></table>
          <h3>Przechodzę przez jezdnię</h3>
          <ol><li>Przechodź <b>po przejściu dla pieszych</b> („zebrze”).</li><li>Zatrzymaj się przed krawężnikiem.</li><li>Popatrz <b>w lewo, w prawo i jeszcze raz w lewo</b>.</li><li>Gdy nic nie jedzie – przejdź, nie biegnij.</li></ol>
          <p>Przy sygnalizatorze idziesz tylko na <b>zielonym</b> świetle. Po zmroku noś <b>odblaski</b> – kierowca zobaczy cię z daleka.</p>
          <h3>W autobusie i tramwaju</h3>
          <p>Trzymaj się poręczy, nie hałasuj, ustąp miejsca osobie starszej, osobie z małym dzieckiem i osobie z niepełnosprawnością. Wsiadasz i wysiadasz dopiero, gdy pojazd stoi.</p>
          <h3>Bezpiecznie w internecie</h3>
          <ul>
            <li>Nie podawaj obcym <b>adresu, nazwiska, hasła ani zdjęć</b>.</li>
            <li>Gdy coś cię przestraszy albo ktoś jest niemiły – <b>powiedz rodzicowi</b> albo nauczycielowi.</li>
            <li><b>Netykieta</b> – grzeczność w sieci: piszesz miło, nie obrażasz, nie wysyłasz cudzych zdjęć bez zgody.</li>
            <li>Nie wszystko w internecie jest prawdą. Gdy masz wątpliwości, <b>zapytaj</b> rodzica, nauczyciela albo policjanta.</li>
            <li>Ustal z rodzicem, <b>ile czasu</b> spędzasz przed ekranem. Za długo – bolą oczy i plecy, gorzej się śpi.</li>
          </ul>
          <p class="tip">Technologia pomaga: rozmowa z babcią na wideo, mapa w telefonie, prognoza pogody, ciekawe filmy o przyrodzie.</p>`,
        flashcards: [
          ['Znak ostrzegawczy', 'trójkąt, żółty z czerwoną obwódką'],
          ['Znak zakazu', 'koło z czerwoną obwódką – czego nie wolno'],
          ['Znak nakazu', 'niebieskie koło – co trzeba robić'],
          ['Znak informacyjny', 'niebieski prostokąt lub kwadrat'],
          ['Przed przejściem patrzysz…', 'w lewo, w prawo i jeszcze raz w lewo'],
          ['Po zmroku na drodze', 'noś odblaski'],
          ['W autobusie', 'trzymaj się poręczy, ustępuj miejsca'],
          ['Netykieta', 'zasady grzeczności w internecie'],
          ['Czego nie podajesz w internecie?', 'adresu, nazwiska, hasła, zdjęć'],
          ['Wątpisz, czy to prawda?', 'zapytaj rodzica, nauczyciela albo policjanta'],
        ],
        questions: [
          { id: 'djaxav', q: 'Jaki to rodzaj znaku?', svg: SVG_ZNAK_A, say: 'Na obrazku jest trójkątny znak, żółty z czerwoną obwódką. Jaki to rodzaj znaku?', options: ['ostrzegawczy', 'nakazu', 'informacyjny'], answer: 0, explain: 'Trójkąt z czerwoną obwódką to znak ostrzegawczy.' },
          { id: '8ke26u', q: 'Jaki kształt mają znaki zakazu?', options: ['koło z czerwoną obwódką', 'żółty trójkąt', 'niebieski prostokąt'], answer: 0, explain: 'Znak zakazu mówi, czego nie wolno. Zwykle jest to koło z czerwoną obwódką.' },
          { id: '4wmdft', q: 'Niebieskie koło to znak…', options: ['nakazu', 'zakazu', 'ostrzegawczy'], answer: 0, explain: 'Znaki nakazu są okrągłe i niebieskie – mówią, co trzeba robić.' },
          { id: 'dinifn', q: 'W którą stronę patrzysz przed wejściem na jezdnię?', options: ['w lewo, w prawo i jeszcze raz w lewo', 'tylko w prawo', 'nigdzie, biegnę'], answer: 0, explain: 'Najpierw w lewo, bo z lewej nadjeżdżają auta po bliższym pasie.' },
          { id: 'zdtmlv', q: 'Gdzie bezpiecznie przejdziesz przez jezdnię?', options: ['po przejściu dla pieszych', 'zza zaparkowanego auta', 'na zakręcie'], answer: 0, explain: 'Przejście dla pieszych („zebra”) to miejsce do przechodzenia.' },
          { id: 'hapvcq', q: 'Na sygnalizatorze dla pieszych świeci się czerwony ludzik. Co robisz?', options: ['czekam', 'przechodzę szybko', 'przebiegam'], answer: 0, explain: 'Na czerwonym świetle stoimy. Idziemy na zielonym.' },
          { id: 'c6zbyb', q: 'Po co nosić odblaski po zmroku?', options: ['żeby kierowca zobaczył cię z daleka', 'żeby było modnie', 'żeby było cieplej'], answer: 0, explain: 'Światła auta odbijają się od odblasku – kierowca widzi cię wcześniej.' },
          { id: 'fcv3s1', q: 'Do autobusu wsiada starsza pani, a ty siedzisz. Co robisz?', options: ['ustępuję jej miejsca', 'udaję, że śpię', 'kładę tornister na wolnym miejscu'], answer: 0, explain: 'Miejsce ustępujemy osobom starszym, z małymi dziećmi i z niepełnosprawnością.' },
          { id: 'jvq32c', q: 'Nieznajomy w grze internetowej pyta o twój adres. Co robisz?', options: ['nie podaję i mówię rodzicowi', 'podaję adres', 'wysyłam zdjęcie domu'], answer: 0, explain: 'Adresu, nazwiska, hasła i zdjęć nie podajemy obcym. Powiedz o tym dorosłemu.' },
          { id: 'b3r1bg', q: 'Co to jest netykieta?', options: ['zasady grzeczności w internecie', 'gra w sieci', 'etykieta na ubraniu'], answer: 0, explain: 'W sieci też jesteśmy mili: nie obrażamy i nie wysyłamy cudzych zdjęć bez zgody.' },
          { id: 'uzpif0', q: 'W internecie przeczytałeś, że jutro nie będzie szkoły. Co robisz?', options: ['pytam rodzica albo nauczyciela, czy to prawda', 'od razu wierzę', 'wysyłam to wszystkim kolegom'], answer: 0, explain: 'Nie wszystko w internecie jest prawdą. Sprawdź u dorosłego.' },
          { id: '7ffod9', q: 'Co może się stać, gdy bardzo długo grasz na tablecie?', options: ['bolą oczy i plecy, gorzej śpisz', 'lepiej widzisz', 'rosną mięśnie'], answer: 0, explain: 'Za długie siedzenie przed ekranem szkodzi zdrowiu. Ustal czas z rodzicem.' },
          { id: '4ry3hc', q: 'W czym technologia nam pomaga?', options: ['np. w rozmowie z babcią na wideo', 'w myciu zębów za nas', 'w spaniu za nas'], answer: 0, explain: 'Dzięki technologii rozmawiamy z bliskimi z daleka, sprawdzamy mapę i pogodę.' },
          { id: 'et5w5d', q: 'Prawda czy fałsz?\nDo autobusu wsiadamy dopiero, gdy się zatrzyma.', options: TF, ...PF, answer: 0, explain: 'Do jadącego pojazdu nie wsiadamy – to bardzo niebezpieczne.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'polska',
        name: 'Polska na mapie',
        basis: `${PP}, 3. Rozumienie przestrzeni geograficznej, pkt 1 (miejscowość i okolica), pkt 2 (granice Polski, główne miasta, rzeki, krainy na mapie), pkt 3 (proste plany, kierunki główne na mapie, znaki kartograficzne), pkt 4 (stolica Polski – obiekty i znaczenie), pkt 5 (z czego Polska słynie). Sąsiedzi Polski i bieg Wisły według zpe.gov.pl (sprawdzone 2.11.2026). Wybór miast, obiektów i postaci – decyzja redakcyjna.${KONIEC}`,
        theory: `
          <h3>Mapa</h3>
          <p>Mapa to rysunek terenu z góry, bardzo pomniejszony. Na mapie <b>północ jest u góry</b>. Kolory mapy fizycznej: <b>zielony</b> – niziny, <b>żółty i brązowy</b> – wyżyny i góry (im ciemniej, tym wyżej), <b>niebieski</b> – woda.</p>
          <p><b>Plan</b> pokazuje mały teren dokładniej, np. plan miasta, osiedla, szkoły. Znaki na mapie i planie objaśnia <b>legenda</b>.</p>
          <h3>Granice i sąsiedzi</h3>
          <p>Na północy Polski jest <b>Morze Bałtyckie</b>, na południu – <b>góry</b> (np. Tatry, Sudety).</p>
          <p>Polska ma <b>7 sąsiadów</b>: Niemcy (zachód), Czechy i Słowację (południe), Ukrainę i Białoruś (wschód), Litwę i Rosję (północ i północny wschód).</p>
          <h3>Rzeki</h3>
          <p><b>Wisła</b> – najdłuższa rzeka Polski. Płynie z gór na południu przez Kraków, Warszawę i Toruń, a koło Gdańska wpada do Morza Bałtyckiego. <b>Odra</b> płynie na zachodzie, przez Wrocław.</p>
          <h3>Stolica – Warszawa</h3>
          <p>Warszawa leży nad Wisłą. Pracują w niej najważniejsze urzędy: prezydent, rząd i Sejm. Ciekawe miejsca: Zamek Królewski i Stare Miasto, Pałac Kultury i Nauki, Łazienki Królewskie. Symbol Warszawy to <b>Syrenka</b>.</p>
          <h3>Duże miasta</h3>
          <p>Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Katowice, Białystok.</p>
          <h3>Z czego słynie Polska?</h3>
          <p>Np. z muzyki <b>Fryderyka Chopina</b> (kompozytor i pianista) i z odkryć <b>Marii Skłodowskiej-Curie</b> (uczona, dwukrotna laureatka Nagrody Nobla). Ty też poznaj, z czego słynie twój region: zabytki, pomniki, parki, zakłady pracy.</p>`,
        flashcards: [
          ['Stolica Polski', 'Warszawa – nad Wisłą'],
          ['Najdłuższa rzeka Polski', 'Wisła'],
          ['Morze na północy Polski', 'Morze Bałtyckie'],
          ['Ilu sąsiadów ma Polska?', '7: Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa, Rosja'],
          ['Na mapie u góry jest…', 'północ'],
          ['Kolor niebieski na mapie', 'woda: morza, jeziora, rzeki'],
          ['Kolor zielony na mapie', 'niziny'],
          ['Brązowy na mapie', 'góry'],
          ['Legenda mapy', 'objaśnienie znaków i kolorów'],
          ['Symbol Warszawy', 'Syrenka'],
          ['Fryderyk Chopin', 'polski kompozytor i pianista'],
        ],
        questions: [
          { id: 'uscg1e', q: 'Jak nazywa się stolica Polski?', options: ['Warszawa', 'Kraków', 'Gdańsk'], answer: 0, explain: 'Warszawa jest stolicą Polski. Leży nad Wisłą.' },
          { id: 'v2u4ld', q: 'Nad jaką rzeką leży Warszawa?', options: ['nad Wisłą', 'nad Odrą', 'nad Wartą'], answer: 0, explain: 'Wisła płynie przez Kraków, Warszawę i Toruń, a koło Gdańska wpada do morza.' },
          { id: 'qhns9e', q: 'Która rzeka jest najdłuższa w Polsce?', options: ['Wisła', 'Odra', 'Warta'], answer: 0, explain: 'Wisła to najdłuższa rzeka Polski.' },
          { id: 'w4ngek', q: 'Do jakiego morza wpływa Wisła?', options: ['do Morza Bałtyckiego', 'do Morza Czarnego', 'do Morza Północnego'], answer: 0, explain: 'Wisła wpływa do Morza Bałtyckiego koło Gdańska.' },
          { id: '3j0y2r', q: 'Co jest na południu Polski?', options: ['góry', 'morze', 'Litwa'], answer: 0, explain: 'Na południu są góry, np. Tatry. Na północy – Morze Bałtyckie.' },
          { id: 'jnltpg', q: 'Ilu sąsiadów ma Polska?', options: ['7', '4', '10'], answer: 0, explain: 'Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa i Rosja – 7 państw.' },
          { id: '6x3i2c', q: 'Które państwo graniczy z Polską od zachodu?', options: ['Niemcy', 'Ukraina', 'Litwa'], answer: 0, explain: 'Na zachodzie Polska graniczy z Niemcami.' },
          { id: 'thkm7i', q: 'Które z tych państw NIE jest sąsiadem Polski?', options: ['Francja', 'Czechy', 'Słowacja'], answer: 0, explain: 'Francja leży dalej na zachodzie. Czechy i Słowacja to nasi południowi sąsiedzi.' },
          { id: 'xxjh63', q: 'Jakim kolorem zaznacza się na mapie wodę?', options: ['niebieskim', 'zielonym', 'brązowym'], answer: 0, explain: 'Morza, jeziora i rzeki są na mapie niebieskie.' },
          { id: 'i68lrx', q: 'Co na mapie fizycznej oznacza kolor brązowy?', options: ['góry', 'niziny', 'morze'], answer: 0, explain: 'Zielony – niziny, żółty i brązowy – wyżyny i góry, niebieski – woda.' },
          { id: 'ib4iro', q: 'Gdzie na mapie jest północ?', options: ['u góry', 'na dole', 'po lewej'], answer: 0, explain: 'Na mapie północ jest zawsze u góry.' },
          { id: 'mj4ttm', q: 'Co objaśnia znaki na mapie?', options: ['legenda', 'okładka', 'tytuł'], answer: 0, explain: 'Legenda mapy mówi, co znaczą kolory i znaki.' },
          { id: 'tuplaf', q: 'Co jest symbolem Warszawy?', options: ['Syrenka', 'smok', 'żubr'], answer: 0, explain: 'Syrenka z mieczem i tarczą to symbol Warszawy. Smok Wawelski kojarzy się z Krakowem.' },
          { id: 'ksdccl', q: 'Kim był Fryderyk Chopin?', options: ['kompozytorem i pianistą', 'królem Polski', 'piłkarzem'], answer: 0, explain: 'Chopin to słynny polski kompozytor i pianista.' },
          { id: 'det77e', q: 'Prawda czy fałsz?\nPlan miasta pokazuje mały teren dokładniej niż mapa Polski.', options: TF, ...PF, answer: 0, explain: 'Na planie widać ulice i budynki, a na mapie Polski – tylko duże miasta i rzeki.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'kierunki',
        name: 'Kierunki, pogoda i Ziemia',
        basis: `${PP}, 3. Rozumienie przestrzeni geograficznej, pkt 3 (kierunki główne na mapie), pkt 6 (kierunki główne w terenie na podstawie cienia, z którego kierunku wieje wiatr, rodzaje opadów), pkt 7 (położenie Ziemi w Układzie Słonecznym); 2. pkt 9 (informacje o pogodzie).${KONIEC}`,
        theory: `
          <h3>Cztery kierunki główne</h3>
          <p><b>północ</b> (N), <b>południe</b> (S), <b>wschód</b> (E), <b>zachód</b> (W). Pokazuje je <b>róża wiatrów</b> i kompas – igła kompasu wskazuje północ.</p>
          <h3>Kierunki według Słońca i cienia</h3>
          <ul>
            <li>Rano Słońce jest na <b>wschodzie</b>, wieczorem – na <b>zachodzie</b>.</li>
            <li>W Polsce w <b>południe</b> Słońce jest po stronie <b>południowej</b>, a cień jest najkrótszy i wskazuje <b>północ</b>.</li>
          </ul>
          <p class="tip">Stań w południe tyłem do Słońca: przed tobą północ, za tobą południe, po prawej wschód, po lewej zachód.</p>
          <h3>Wiatr</h3>
          <p>Nazwa wiatru mówi, <b>skąd</b> wieje: wiatr północny wieje <b>z północy</b>. Kierunek pokaże chorągiewka albo wiatrowskaz.</p>
          <h3>Opady</h3>
          <p><b>deszcz</b> 🌧️ (krople wody) · <b>mżawka</b> (bardzo drobny deszcz) · <b>śnieg</b> ❄️ (płatki lodu) · <b>grad</b> (kulki lodu, często w czasie burzy)</p>
          <h3>Ziemia w kosmosie</h3>
          <ul>
            <li><b>Słońce</b> to gwiazda. Daje światło i ciepło.</li>
            <li>Wokół Słońca krąży <b>8 planet</b>. Razem tworzą <b>Układ Słoneczny</b>.</li>
            <li><b>Ziemia</b> jest <b>trzecią</b> planetą od Słońca (po Merkurym i Wenus). Na niej żyjemy.</li>
            <li>Ziemia obraca się wokół siebie – stąd <b>dzień i noc</b>. Jeden obrót trwa dobę.</li>
            <li>Ziemia okrąża Słońce w ciągu <b>roku</b>.</li>
            <li><b>Księżyc</b> krąży wokół Ziemi.</li>
          </ul>`,
        flashcards: [
          ['Cztery kierunki główne', 'północ, południe, wschód, zachód'],
          ['N, S, E, W', 'północ, południe, wschód, zachód'],
          ['Gdzie Słońce jest rano?', 'na wschodzie'],
          ['Gdzie Słońce jest wieczorem?', 'na zachodzie'],
          ['Cień w południe (w Polsce)', 'jest najkrótszy i wskazuje północ'],
          ['Wiatr zachodni', 'wieje z zachodu'],
          ['Rodzaje opadów', 'deszcz, mżawka, śnieg, grad'],
          ['Słońce', 'gwiazda – daje światło i ciepło'],
          ['Która planeta od Słońca to Ziemia?', 'trzecia'],
          ['Ile planet ma Układ Słoneczny?', '8'],
          ['Dzień i noc', 'bo Ziemia obraca się wokół siebie'],
          ['Ziemia okrąża Słońce w ciągu…', 'roku'],
        ],
        questions: [
          { id: '6uykze', q: 'Który kierunek pokazuje litera N na róży wiatrów?', svg: SVG_ROZA, say: 'Róża wiatrów ma litery N, S, E i W. Który kierunek pokazuje litera N?', options: ['północ', 'południe', 'wschód', 'zachód'], answer: 0, explain: 'N – północ, S – południe, E – wschód, W – zachód.' },
          { id: 'dl4rtz', q: 'Gdzie jest Słońce rano?', options: ['na wschodzie', 'na zachodzie', 'na północy'], answer: 0, explain: 'Słońce wschodzi na wschodzie, a zachodzi na zachodzie.' },
          { id: '4e54dj', q: 'Gdzie Słońce zachodzi wieczorem?', options: ['na zachodzie', 'na wschodzie', 'na południu'], answer: 0, explain: 'Słońce zachodzi na zachodzie – nawet nazwy są podobne.' },
          { id: '110zrh', q: 'W Polsce w południe cień drzewa wskazuje…', options: ['północ', 'południe', 'wschód'], answer: 0, explain: 'W południe Słońce jest na południu, więc cień pada na przeciwną stronę – na północ.' },
          { id: 'xdrtht', q: 'Stoisz twarzą na północ. Co masz po prawej ręce?', options: ['wschód', 'zachód', 'południe'], answer: 0, explain: 'Twarzą na północ: z tyłu południe, po prawej wschód, po lewej zachód.' },
          { id: 'en0pij', q: 'Co wskazuje igła kompasu?', options: ['północ', 'Słońce', 'szkołę'], answer: 0, explain: 'Igła kompasu ustawia się w kierunku północy.' },
          { id: 'kr0lgn', q: 'Wiatr wschodni wieje…', options: ['ze wschodu', 'na wschód', 'z zachodu'], answer: 0, explain: 'Nazwa wiatru mówi, skąd wieje: wschodni – ze wschodu.' },
          { id: 'h0jcfg', q: 'Kulki lodu spadające z chmur w czasie burzy to…', options: ['grad', 'mżawka', 'mgła'], answer: 0, explain: 'Grad to kulki lodu. Mżawka to bardzo drobny deszcz.' },
          { id: 'vpub2r', q: 'Który opad to płatki lodu?', options: ['śnieg', 'deszcz', 'mżawka'], answer: 0, explain: 'Płatki śniegu to małe kryształki lodu.' },
          { id: '1srbwa', q: 'Czym jest Słońce?', options: ['gwiazdą', 'planetą', 'księżycem'], answer: 0, explain: 'Słońce to gwiazda. Daje Ziemi światło i ciepło.' },
          { id: 'd6h35i', q: 'Którą planetą od Słońca jest Ziemia?', options: ['trzecią', 'pierwszą', 'piątą'], answer: 0, explain: 'Merkury, Wenus, a potem Ziemia – trzecia.' },
          { id: '9s9di0', q: 'Ile planet krąży wokół Słońca?', options: ['8', '3', '12'], answer: 0, explain: 'W Układzie Słonecznym jest 8 planet.' },
          { id: 'dlg2ou', q: 'Dlaczego jest dzień i noc?', options: ['bo Ziemia obraca się wokół siebie', 'bo Słońce gaśnie na noc', 'bo Księżyc zasłania Słońce co wieczór'], answer: 0, explain: 'Ziemia się obraca. Strona zwrócona do Słońca ma dzień, a druga – noc.' },
          { id: 'oiwvxl', q: 'Ile czasu Ziemia okrąża Słońce?', options: ['rok', 'dzień', 'tydzień'], answer: 0, explain: 'Jedno okrążenie Słońca trwa rok.' },
          { id: 'v7l8g8', q: 'Prawda czy fałsz?\nKsiężyc krąży wokół Ziemi.', options: TF, ...PF, answer: 0, explain: 'Księżyc krąży wokół Ziemi, a Ziemia – wokół Słońca.' },
        ],
      },
    ],
  });
})();
