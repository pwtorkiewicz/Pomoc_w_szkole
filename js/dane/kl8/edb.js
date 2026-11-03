/* Edukacja dla bezpieczeństwa – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa,
 * przedmiot tylko w klasie VIII, dz. I–IV). Od r. szk. 2027/2028 w klasie VIII zastąpi go „kształcenie obronne”
 * z nowej podstawy (§ 4 ust. 2 Dz.U. 2026 poz. 378 w brzmieniu z Dz.U. 2026 poz. 958) – w 2026/2027 obowiązuje jeszcze EDB.
 * Pierwsza pomoc: wytyczne Europejskiej Rady Resuscytacji (ERC) 2025 i e-materiały EDB na zpe.gov.pl.
 * Prawo: akty z eli.gov.pl – ustawa o obronie Ojczyzny (Dz.U. 2025 poz. 825 ze zm.), ustawa o ochronie ludności
 * i obronie cywilnej (Dz.U. 2024 poz. 1907), rozporządzenie MSWiA w sprawie alarmów i komunikatów ostrzegawczych
 * (Dz.U. 2025 poz. 645), ustawa o Państwowym Ratownictwie Medycznym (Dz.U. 2026 poz. 141), Kodeks karny (Dz.U. 2025 poz. 383),
 * ustawa o krajowym systemie cyberbezpieczeństwa (Dz.U. 2026 poz. 20). Szczegóły: docs/PLAN-kl8.md. */
window.SUBJECTS.push({
  id: 'edb',
  name: 'Edukacja dla bezpieczeństwa',
  icon: '🚑',
  color: '#c2364a',
  topics: [
    {
      id: 'bezpieczenstwo',
      name: 'Bezpieczeństwo państwa i położenie Polski',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. I „Bezpieczeństwo państwa”, wym. 1–3 (pojęcia i składniki bezpieczeństwa państwa, geopolityczne uwarunkowania wynikające z położenia Polski, rola organizacji międzynarodowych).',
      theory: `
        <h3>Co to jest bezpieczeństwo państwa</h3>
        <p><b>Bezpieczeństwo</b> to stan, w którym nic nam nie zagraża albo potrafimy się skutecznie obronić przed zagrożeniami. <b>Bezpieczeństwo państwa</b> oznacza, że państwo może przetrwać, rozwijać się i chronić swoich obywateli – a obywatele czują się bezpiecznie.</p>
        <h3>Składniki (wymiary) bezpieczeństwa</h3>
        <table>
          <tr><th>Wymiar</th><th>O co chodzi</th></tr>
          <tr><td><b>militarne</b></td><td>ochrona przed atakiem zbrojnym: sprawne siły zbrojne, sojusze wojskowe</td></tr>
          <tr><td><b>polityczne</b></td><td>stabilny porządek konstytucyjny, sprawne instytucje, przestrzeganie praw człowieka</td></tr>
          <tr><td><b>gospodarcze</b> (w tym <b>energetyczne</b>)</td><td>stabilna gospodarka, pewne dostawy energii, gazu i ropy</td></tr>
          <tr><td><b>społeczne</b></td><td>spokój społeczny, ochrona zdrowia i życia obywateli</td></tr>
          <tr><td><b>cyberbezpieczeństwo</b></td><td>odporność systemów informatycznych na ataki</td></tr>
        </table>
        <p>Przykłady <b>zagrożeń militarnych</b>: demonstracja siły, szantaż militarny, prowokacja i incydent na granicy, konflikt zbrojny. Zagrożenia <b>niemilitarne</b> to np. terroryzm, ekstremizmy, cyberataki, katastrofy.</p>
        <h3>Położenie Polski – szansa i wyzwanie</h3>
        <ul>
          <li>Polska leży w <b>Europie Środkowej</b> i graniczy z <b>7 państwami</b>: Niemcami (zachód), Czechami i Słowacją (południe), Ukrainą i Białorusią (wschód), Litwą i Rosją – obwodem królewieckim (północ). Na północy ma dostęp do Morza Bałtyckiego.</li>
          <li>Wschodnia granica Polski jest jednocześnie <b>zewnętrzną granicą Unii Europejskiej i NATO</b>.</li>
          <li><b>Tranzytowość</b> – przez Polskę biegną ważne szlaki ze wschodu na zachód i z północy na południe. To <b>szansa</b> (handel, transport), ale też <b>zagrożenie</b> – łatwo przez nas przejść obcym wojskom (rozległe niziny).</li>
          <li>Ważne jest <b>bezpieczeństwo energetyczne</b> – np. gazoport w Świnoujściu uniezależnia nas od jednego dostawcy gazu.</li>
        </ul>
        <h3>Organizacje międzynarodowe</h3>
        <table>
          <tr><th>Organizacja</th><th>Polska członkiem od</th><th>Znaczenie dla bezpieczeństwa</th></tr>
          <tr><td><b>NATO</b> (Organizacja Traktatu Północnoatlantyckiego, założona w 1949 r.)</td><td>1999</td><td>sojusz wojskowo-polityczny; <b>kolektywna obrona</b> (art. 5): napaść na jednego członka to napaść na wszystkich</td></tr>
          <tr><td><b>Unia Europejska</b></td><td>1 maja 2004</td><td>związek gospodarczo-polityczny 27 państw; wspólny rozwój i bezpieczeństwo</td></tr>
          <tr><td><b>OBWE</b> (Organizacja Bezpieczeństwa i Współpracy w Europie)</td><td>–</td><td>57 państw; bezpieczeństwo w wymiarze polityczno-wojskowym, gospodarczo-ekologicznym i ludzkim</td></tr>
          <tr><td><b>ONZ</b></td><td>–</td><td>organizacja ogólnoświatowa; utrzymanie międzynarodowego pokoju i bezpieczeństwa</td></tr>
        </table>
        <p>Członkostwo w organizacjach zmniejsza negatywne skutki położenia i daje sojuszników, ale <b>nie usuwa wszystkich zagrożeń</b>.</p>
        <div class="tip">💡 Bezpieczeństwo Polski stoi na dwóch filarach: <b>własna siła</b> (wojsko, gospodarka, społeczeństwo) + <b>sojusze</b> (NATO, UE).</div>`,
      infographicNote: 'Czytaj od góry: położenie daje szanse i zagrożenia – chronią nas dwa filary.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        top: { title: '🗺️ Położenie Polski', kolor: 2, items: ['wschodnia granica = zewnętrzna granica UE i NATO', 'tranzyt: szansa (handel, transport) i zagrożenie (rozległe niziny)'] },
        root: { title: 'Dwa filary bezpieczeństwa' },
        branches: [
          { title: '💪 Własna siła', kolor: 1, items: ['wojsko', 'gospodarka (też dostawy energii)', 'społeczeństwo'] },
          { title: '🤝 Sojusze', kolor: 3, items: ['NATO – od 1999', 'Unia Europejska – od 1 maja 2004'] },
        ],
        bottom: { title: '💡 Art. 5 NATO', text: 'napaść na jednego członka = napaść na wszystkich', kolor: 3 },
      },
      flashcards: [
        ['Bezpieczeństwo państwa', 'Stan, w którym państwo może przetrwać, rozwijać się i chronić obywateli przed zagrożeniami'],
        ['Składniki bezpieczeństwa państwa', 'Militarne, polityczne, gospodarcze (energetyczne), społeczne, cyberbezpieczeństwo'],
        ['Bezpieczeństwo militarne', 'Ochrona przed zagrożeniem zbrojnym – sprawne siły zbrojne i sojusze wojskowe'],
        ['Z iloma państwami graniczy Polska?', 'Z 7: Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa, Rosja (obwód królewiecki)'],
        ['Co jest szczególnego we wschodniej granicy Polski?', 'Jest zewnętrzną granicą Unii Europejskiej i NATO'],
        ['Tranzytowość Polski', 'Przez Polskę biegną ważne szlaki wschód–zachód i północ–południe: szansa dla gospodarki, ale i zagrożenie militarne'],
        ['Od kiedy Polska jest w NATO?', 'Od 1999 r.'],
        ['Od kiedy Polska jest w Unii Europejskiej?', 'Od 1 maja 2004 r.'],
        ['Zasada kolektywnej obrony NATO (art. 5)', 'Napaść zbrojna na jednego członka jest traktowana jak napaść na wszystkich'],
        ['OBWE', 'Organizacja Bezpieczeństwa i Współpracy w Europie – 57 państw; wymiar polityczno-wojskowy, gospodarczo-ekologiczny i ludzki'],
        ['Bezpieczeństwo energetyczne', 'Pewne dostawy energii, gazu i ropy, np. dzięki gazoportowi w Świnoujściu'],
      ],
      questions: [
        { id: 'stg5n3', q: 'Który zestaw zawiera wyłącznie składniki (wymiary) bezpieczeństwa państwa?', options: ['polityczne, rozrywkowe, modowe', 'militarne, turystyczne, motoryzacyjne', 'militarne, polityczne, gospodarcze', 'gospodarcze, kulinarne, muzyczne'], answer: 2, explain: 'Wymiary bezpieczeństwa państwa to m.in. militarne, polityczne, gospodarcze (w tym energetyczne), społeczne i cyberbezpieczeństwo.' },
        { id: 'g55sv6', q: 'Z iloma państwami graniczy Polska?', options: ['7', '6', '5', '8'], answer: 0, explain: 'Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa i Rosja (obwód królewiecki) – razem 7.' },
        { id: 'fa8pc0', q: 'Które państwo NIE jest sąsiadem Polski?', options: ['Litwa', 'Białoruś', 'Słowacja', 'Łotwa'], answer: 3, explain: 'Łotwa graniczy z Litwą, ale nie z Polską.' },
        { id: 'tuyfvl', q: 'Dlaczego położenie Polski ma znaczenie dla bezpieczeństwa całej Unii Europejskiej i NATO?', options: ['Polska leży nad Morzem Śródziemnym, na południu Europy.', 'Wschodnia granica Polski jest zewnętrzną granicą UE i NATO.', 'Zachodnia granica Polski jest zewnętrzną granicą UE i NATO.', 'Polska nie należy ani do Unii Europejskiej, ani do NATO.'], answer: 1, explain: 'Polska jest państwem granicznym UE i NATO – jej wschodnia granica to granica tych organizacji.' },
        { id: 'usvjrd', q: 'Na czym polega zasada kolektywnej obrony w NATO?', options: ['Napaść zbrojna na jednego członka jest traktowana jak napaść na wszystkich.', 'Każde państwo w razie napaści zbrojnej broni się samo, bez pomocy sojuszników z NATO.', 'Państwa NATO mają wspólną walutę, wspólny rząd i jeden parlament.', 'NATO zajmuje się pomocą humanitarną, a nie obroną swoich członków.'], answer: 0, explain: 'To zasada z art. 5 Traktatu Północnoatlantyckiego – fundament bezpieczeństwa członków sojuszu.' },
        { id: 'd37pan', q: 'W którym roku Polska wstąpiła do NATO?', options: ['1989', '2004', '1999', '2007'], answer: 2, explain: 'Polska jest członkiem NATO od 1999 r. Do Unii Europejskiej wstąpiła w 2004 r.' },
        { id: 'ylc0nu', q: 'Od kiedy Polska jest członkiem Unii Europejskiej?', options: ['od 1 listopada 1993 r.', 'od 1 stycznia 1999 r.', 'od 4 kwietnia 1949 r.', 'od 1 maja 2004 r.'], answer: 3, explain: '1 maja 2004 r. Polska weszła do UE na mocy traktatu akcesyjnego.' },
        { id: '4obnfp', q: 'Co oznacza, że Polska ma położenie „tranzytowe”?', options: ['Nie ma dostępu do morza i leży z dala od ważnych szlaków handlowych.', 'Biegną przez nią ważne szlaki wschód–zachód i północ–południe.', 'Ma jednego sąsiada, z którym prowadzi cały handel.', 'Leży na wyspie, oddzielona morzem od reszty kontynentu.'], answer: 1, explain: 'Tranzytowość to szansa dla handlu i transportu, ale też zagrożenie – tędy łatwo mogą przemieszczać się obce wojska.' },
        { id: 'dc14hv', q: 'Który przykład dotyczy bezpieczeństwa energetycznego Polski?', options: ['nowy park miejski', 'budowa stadionu', 'gazoport w Świnoujściu', 'festiwal muzyczny'], answer: 2, explain: 'Gazoport pozwala sprowadzać gaz drogą morską od różnych dostawców.' },
        { id: 'lvlyuf', q: 'Która organizacja skupia 57 państw i zajmuje się bezpieczeństwem w wymiarze polityczno-wojskowym, gospodarczo-ekologicznym i ludzkim?', options: ['OBWE', 'Unia Europejska', 'NATO', 'Rada Europy'], answer: 0, explain: 'Organizacja Bezpieczeństwa i Współpracy w Europie (OBWE) – 57 państw uczestniczących.' },
        { id: 'u07cdy', q: 'Które z wymienionych zagrożeń ma charakter militarny?', options: ['powódź', 'epidemia grypy', 'awaria sieci wodociągowej', 'incydent zbrojny na granicy'], answer: 3, explain: 'Do zagrożeń militarnych należą m.in. demonstracja siły, prowokacje, incydenty i konflikty zbrojne.' },
        { id: 'djdouo', q: 'Prawda czy fałsz?\nCzłonkostwo Polski w NATO i UE usuwa wszystkie zagrożenia wynikające z położenia geograficznego.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Sojusze zmniejszają zagrożenia i dają sojuszników, ale nie usuwają wszystkich ryzyk – Polska jest państwem granicznym tych organizacji.' },
      ],
    },
    {
      id: 'wojsko',
      name: 'Siły Zbrojne RP i obowiązek obrony',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. I „Bezpieczeństwo państwa”, wym. 4 (misja Sił Zbrojnych RP, ich rola i zadania w systemie obronności, struktura organizacyjna i uzbrojenie). Stan prawny: ustawa z 11 marca 2022 r. o obronie Ojczyzny (Dz.U. 2025 poz. 825 ze zm.) – art. 3–5, 11, 13, 15, 25, 28, 129–131.',
      theory: `
        <h3>Misja Sił Zbrojnych</h3>
        <p>Według ustawy o obronie Ojczyzny <b>Siły Zbrojne stoją na straży suwerenności i niepodległości państwa oraz jego bezpieczeństwa i pokoju</b>. To zhierarchizowana, umundurowana i uzbrojona formacja – część systemu obronnego państwa.</p>
        <p>Wojsko pomaga też w czasie pokoju: przy <b>klęskach żywiołowych</b> (np. powodziach), w akcjach poszukiwawczych i ratowniczych, w działaniach antyterrorystycznych, w ochronie cyberprzestrzeni i przy oczyszczaniu terenu z niewybuchów.</p>
        <h3>Kto dowodzi</h3>
        <ul>
          <li><b>Prezydent RP</b> – najwyższy zwierzchnik Sił Zbrojnych. W czasie pokoju sprawuje zwierzchnictwo <b>za pośrednictwem Ministra Obrony Narodowej</b>.</li>
          <li><b>Minister Obrony Narodowej</b> – kieruje obronnością kraju.</li>
          <li>Na czas wojny Prezydent mianuje <b>Naczelnego Dowódcę Sił Zbrojnych</b> (kandydata wskazuje na wniosek premiera).</li>
          <li><b>Szef Sztabu Generalnego Wojska Polskiego</b> – organ pomocniczy Prezydenta w kierowaniu obroną.</li>
        </ul>
        <h3>Struktura – rodzaje Sił Zbrojnych</h3>
        <table>
          <tr><th>Rodzaj</th><th>Gdzie działa</th></tr>
          <tr><td><b>Wojska Lądowe</b></td><td>na lądzie</td></tr>
          <tr><td><b>Siły Powietrzne</b></td><td>w powietrzu</td></tr>
          <tr><td><b>Marynarka Wojenna</b></td><td>na morzu</td></tr>
          <tr><td><b>Wojska Specjalne</b></td><td>operacje specjalne</td></tr>
          <tr><td><b>Wojska Obrony Terytorialnej</b> (WOT)</td><td>w swoim regionie; żołnierze często łączą służbę z pracą lub nauką</td></tr>
        </table>
        <p>W skład Sił Zbrojnych wchodzą też <b>Żandarmeria Wojskowa</b> i <b>Wojska Obrony Cyberprzestrzeni</b>. Dowódcami rodzajów sił zbrojnych są: Dowódca Generalny, Dowódca Operacyjny i Dowódca WOT.</p>
        <p><b>Uzbrojenie</b> – np. polski karabinek <b>Grot</b> (produkowany od 2018 r., amunicja standardu NATO) czy pistolet VIS 100. Wojsko korzysta też z czołgów, samolotów, okrętów i systemów obrony powietrznej.</p>
        <h3>Obowiązek obrony Ojczyzny</h3>
        <ul>
          <li>Podlegają mu <b>obywatele polscy</b> zdolni do niego ze względu na wiek i stan zdrowia.</li>
          <li>Obejmuje m.in.: <b>służbę wojskową</b>, przydziały mobilizacyjne, służbę w jednostkach zmilitaryzowanych, świadczenia na rzecz obrony, a także służbę w <b>obronie cywilnej</b>.</li>
          <li>Obowiązkowi <b>służby wojskowej</b> podlega się <b>od 18. roku życia</b> do końca roku, w którym kończy się 60 lat (podoficerowie i oficerowie – 63 lata).</li>
        </ul>
        <h3>Rodzaje służby wojskowej</h3>
        <table>
          <tr><th>Czynna służba wojskowa</th><th>Służba w rezerwie</th></tr>
          <tr><td>zasadnicza (<b>dobrowolna</b> albo obowiązkowa), <b>terytorialna</b>, w aktywnej rezerwie (w dniach służby), <b>zawodowa</b>, w razie mobilizacji i wojny</td><td><b>aktywna rezerwa</b> (ochotnicy, którzy złożyli przysięgę) i <b>pasywna rezerwa</b></td></tr>
        </table>
        <p><b>Święto Wojska Polskiego</b> obchodzimy <b>15 sierpnia</b>.</p>
        <div class="tip">💡 Pięć rodzajów sił zbrojnych zapamiętasz jako „<b>ląd – powietrze – morze – specjalni – terytorialsi</b>”.</div>`,
      infographicNote: 'Od góry: misja wojska, a pod nią – kto dowodzi, z czego się składa i kto służy.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        top: { title: '🎯 Misja', text: 'straż suwerenności i niepodległości państwa oraz jego bezpieczeństwa i pokoju', kolor: 1 },
        root: { title: '🇵🇱 Siły Zbrojne RP' },
        branches: [
          { title: 'Kto dowodzi', kolor: 2, items: ['Prezydent – najwyższy zwierzchnik', 'w pokoju – przez Ministra Obrony Narodowej', 'na czas wojny – Naczelny Dowódca'] },
          { title: 'Rodzaje', kolor: 5, items: ['Wojska Lądowe', 'Siły Powietrzne', 'Marynarka Wojenna', 'Wojska Specjalne', 'Wojska Obrony Terytorialnej'] },
          { title: 'Służba wojskowa', kolor: 3, items: ['czynna albo w rezerwie', 'obowiązek od 18 lat'] },
          { title: 'Pomoc w pokoju', kolor: 4, items: ['klęski żywiołowe', 'akcje ratownicze', 'usuwanie niewybuchów'] },
        ],
        bottom: { title: '📅 Święto Wojska Polskiego', text: '15 sierpnia', kolor: 1 },
      },
      flashcards: [
        ['Misja Sił Zbrojnych RP', 'Stoją na straży suwerenności i niepodległości państwa oraz jego bezpieczeństwa i pokoju'],
        ['Najwyższy zwierzchnik Sił Zbrojnych', 'Prezydent RP'],
        ['Za czyim pośrednictwem Prezydent sprawuje zwierzchnictwo nad wojskiem w czasie pokoju?', 'Ministra Obrony Narodowej'],
        ['Rodzaje Sił Zbrojnych RP', 'Wojska Lądowe, Siły Powietrzne, Marynarka Wojenna, Wojska Specjalne, Wojska Obrony Terytorialnej'],
        ['Wojska Obrony Cyberprzestrzeni', 'Specjalistyczny komponent Sił Zbrojnych do działań w cyberprzestrzeni'],
        ['Żandarmeria Wojskowa', 'Wyodrębniona i wyspecjalizowana służba w składzie Sił Zbrojnych'],
        ['Zadania wojska w czasie pokoju (przykłady)', 'Pomoc przy klęskach żywiołowych, akcje poszukiwawcze i ratownicze, działania antyterrorystyczne, usuwanie niewybuchów'],
        ['Od jakiego wieku obowiązuje obowiązek służby wojskowej?', 'Od 18 lat (do końca roku, w którym kończy się 60 lat; podoficerowie i oficerowie – 63)'],
        ['Rodzaje służby wojskowej', 'Czynna służba wojskowa i służba w rezerwie (aktywnej lub pasywnej)'],
        ['Dobrowolna zasadnicza służba wojskowa', 'Rodzaj czynnej służby wojskowej, do której zgłasza się ochotnik'],
        ['Święto Wojska Polskiego', '15 sierpnia'],
      ],
      questions: [
        { id: 'ssa9rd', q: 'Kto jest najwyższym zwierzchnikiem Sił Zbrojnych RP?', options: ['Prezes Rady Ministrów', 'Prezydent RP', 'Marszałek Sejmu', 'Szef Sztabu Generalnego'], answer: 1, explain: 'Najwyższym zwierzchnikiem Sił Zbrojnych jest Prezydent RP; w czasie pokoju sprawuje zwierzchnictwo za pośrednictwem Ministra Obrony Narodowej.' },
        { id: 'lfx8z0', q: 'Za czyim pośrednictwem Prezydent RP sprawuje w czasie pokoju zwierzchnictwo nad Siłami Zbrojnymi?', options: ['Ministra Obrony Narodowej', 'Ministra Spraw Zagranicznych', 'Rzecznika Praw Obywatelskich', 'wojewody'], answer: 0, explain: 'Tak stanowi ustawa o obronie Ojczyzny (art. 28).' },
        { id: 'u1gj4z', q: 'Który z wymienionych NIE jest rodzajem Sił Zbrojnych RP?', options: ['Wojska Lądowe', 'Marynarka Wojenna', 'Straż Graniczna', 'Wojska Obrony Terytorialnej'], answer: 2, explain: 'Straż Graniczna to formacja mundurowa, ale nie rodzaj Sił Zbrojnych. Rodzaje to: WL, SP, MW, WS i WOT.' },
        { id: '0pgwud', q: 'Ile jest rodzajów Sił Zbrojnych RP według ustawy o obronie Ojczyzny?', options: ['3', '4', '7', '5'], answer: 3, explain: 'Wojska Lądowe, Siły Powietrzne, Marynarka Wojenna, Wojska Specjalne i Wojska Obrony Terytorialnej.' },
        { id: '02pqi7', q: 'Jaka jest główna misja Sił Zbrojnych RP?', options: ['ściganie przestępstw drogowych i kierowanie ruchem na drogach publicznych', 'stanie na straży suwerenności i niepodległości państwa oraz jego bezpieczeństwa i pokoju', 'gaszenie pożarów w miastach i nadzór nad ochroną przeciwpożarową budynków', 'pobieranie podatków i kontrolowanie finansów przedsiębiorstw w całym kraju'], answer: 1, explain: 'Tak określa ją art. 11 ustawy o obronie Ojczyzny.' },
        { id: '2qe6d2', q: 'W którym zadaniu wojsko może pomagać w czasie pokoju?', options: ['w prowadzeniu lekcji w szkołach podstawowych', 'w wystawianiu mandatów', 'w usuwaniu skutków powodzi', 'w ustalaniu cen w sklepach'], answer: 2, explain: 'Siły Zbrojne mogą brać udział w zwalczaniu klęsk żywiołowych i likwidacji ich skutków.' },
        { id: 'iqk12w', q: 'Którzy żołnierze najczęściej łączą służbę z pracą zawodową lub nauką i działają w swoim regionie?', options: ['żołnierze Wojsk Obrony Terytorialnej', 'marynarze na okrętach Marynarki Wojennej', 'żołnierze Wojsk Specjalnych', 'piloci samolotów Sił Powietrznych'], answer: 0, explain: 'WOT to wojska działające lokalnie – żołnierze terytorialnej służby wojskowej często pracują lub uczą się na co dzień.' },
        { id: 'a07ccg', q: 'Od jakiego wieku obywatel polski podlega obowiązkowi służby wojskowej?', options: ['od 16 lat', 'od 25 lat', 'od 21 lat', 'od 18 lat'], answer: 3, explain: 'Od dnia ukończenia 18 lat do końca roku, w którym kończy się 60 lat (podoficerowie i oficerowie – 63).' },
        { id: 'plvrns', q: 'Na jakie dwa rodzaje dzieli się służba wojskowa?', options: ['służbę lądową i służbę morską na okrętach', 'czynną służbę wojskową i służbę w rezerwie', 'krótką służbę wojskową i długą służbę wojskową', 'służbę płatną i służbę bezpłatną'], answer: 1, explain: 'Art. 129 ustawy o obronie Ojczyzny: czynna służba wojskowa i służba w rezerwie (aktywnej lub pasywnej).' },
        { id: '5a1xql', q: 'Która formacja jest specjalistycznym komponentem Sił Zbrojnych do działań w cyberprzestrzeni?', options: ['Wojska Obrony Cyberprzestrzeni', 'Żandarmeria Wojskowa', 'Wojska Obrony Terytorialnej', 'Państwowa Straż Pożarna'], answer: 0, explain: 'Wojska Obrony Cyberprzestrzeni odpowiadają za ochronę i obronę zasobów cyberprzestrzeni kluczowych dla Sił Zbrojnych.' },
        { id: '8sg3l7', q: 'Kiedy obchodzimy Święto Wojska Polskiego?', options: ['3 maja', '11 listopada', '15 sierpnia', '1 września'], answer: 2, explain: 'Ustawa o obronie Ojczyzny ustanawia 15 sierpnia Świętem Wojska Polskiego.' },
        { id: 'vn8qvr', q: 'Prawda czy fałsz?\nObowiązek obrony Ojczyzny może być spełniany nie tylko przez służbę wojskową, lecz także np. przez służbę w obronie cywilnej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Obowiązek obrony obejmuje m.in. służbę wojskową, przydziały mobilizacyjne, świadczenia na rzecz obrony i służbę w obronie cywilnej.' },
      ],
    },
    {
      id: 'alarmy',
      name: 'Zagrożenia, alarmy i ewakuacja',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. II „Działania w sytuacjach nadzwyczajnych zagrożeń”, wym. 1–4 (przykłady zagrożeń, ostrzeganie ludności, sygnały i środki alarmowe, ewakuacja, rola służb). Sygnały: rozporządzenie MSWiA z 14 maja 2025 r. w sprawie alarmów i komunikatów ostrzegawczych (Dz.U. 2025 poz. 645); obowiązki ludności: ustawa o ochronie ludności i obronie cywilnej (Dz.U. 2024 poz. 1907), art. 68–71.',
      theory: `
        <h3>Nadzwyczajne zagrożenia</h3>
        <table>
          <tr><th>Pochodzenia naturalnego</th><th>Wywołane przez człowieka</th></tr>
          <tr><td>powodzie, huragany i silne wiatry, śnieżyce, lawiny, pożary lasów od pioruna</td><td>awarie techniczne, katastrofy budowlane i komunikacyjne, wycieki substancji chemicznych, pożary, zamachy terrorystyczne, wojna</td></tr>
        </table>
        <h3>Sygnały alarmowe (obowiązują od 2025 r.)</h3>
        <table>
          <tr><th></th><th>Ogłoszenie alarmu</th><th>Odwołanie alarmu</th></tr>
          <tr><td><b>syrena</b></td><td><b>modulowany</b> dźwięk (raz wyżej, raz niżej) przez <b>3 minuty</b></td><td><b>ciągły</b> dźwięk przez <b>3 minuty</b></td></tr>
          <tr><td><b>głos</b> (megafon, radio)</td><td>„Uwaga! Uwaga! Uwaga! Ogłaszam alarm…” – trzy razy</td><td>„Uwaga! Uwaga! Uwaga! Odwołuję alarm…” – trzy razy</td></tr>
          <tr><td><b>znak</b></td><td><b>żółty trójkąt równoboczny</b> skierowany podstawą w dół</td><td>usunięcie żółtego trójkąta</td></tr>
        </table>
        <p>Inne sygnały syren: <b>alarm ćwiczebny</b> – ciągły dźwięk przez <b>1 minutę</b>; <b>alarm dla strażaków</b> (wezwanie jednostki ochrony przeciwpożarowej) – trzy razy narastający i opadający dźwięk z 30-sekundowymi przerwami.</p>
        <h3>Komunikaty ostrzegawcze</h3>
        <p>Ostrzegają przed zagrożeniem, zanim się pojawi lub gdy trwa. Docierają przez: aplikację <b>RSO</b> (Regionalny System Ostrzegania), radio i telewizję, strony internetowe i gazety oraz <b>ALERT RCB</b> – SMS na telefon wysyłany na zlecenie Rządowego Centrum Bezpieczeństwa. Alarm lub komunikat ogłasza organ ochrony ludności, np. <b>wójt, burmistrz, prezydent miasta</b>, starosta lub wojewoda.</p>
        <h3>Co robisz po ogłoszeniu alarmu</h3>
        <ol>
          <li>Nie panikuj. Przerwij to, co robisz.</li>
          <li>Wyłącz prąd i gaz, zgaś ogień w piecu lub kominku.</li>
          <li>Zabierz dokumenty, leki, wodę i żywność, latarkę, radio na baterie, telefon, ciepłe ubranie.</li>
          <li>Zamknij okna i drzwi, sprawdź, czy sąsiedzi wiedzą o alarmie, pomóż słabszym.</li>
          <li>Idź do wyznaczonego miejsca (schron, ukrycie) i <b>słuchaj komunikatów</b> (radio, RSO, ALERT RCB).</li>
        </ol>
        <p>Po odwołaniu alarmu wychodź ostrożnie, omijaj podejrzane przedmioty i rozlane substancje, wracaj do domu dopiero, gdy służby uznają, że jest bezpiecznie.</p>
        <h3>Ewakuacja</h3>
        <p><b>Ewakuacja</b> to zorganizowane przemieszczenie ludzi (a także zwierząt i mienia) z terenu zagrożonego w bezpieczne miejsce.</p>
        <ul>
          <li>Wykonuj <b>polecenia służb</b> i osoby kierującej ewakuacją.</li>
          <li>Zabierz najpotrzebniejsze rzeczy (dokumenty, leki, wodę, telefon), zakręć gaz i wodę, wyłącz prąd, zamknij mieszkanie.</li>
          <li>Nie zatrzymuj się na drogach ewakuacyjnych, nie idź pod prąd ruchu, nie wywołuj paniki.</li>
          <li>Pierwszeństwo mają dzieci, osoby starsze i z niepełnosprawnościami.</li>
          <li><b>W szkole</b>: nie odłączaj się od klasy, idź zgodnie ze znakami ewakuacyjnymi, nauczyciel sprawdza obecność na miejscu zbiórki.</li>
        </ul>
        <h3>Służby – dlaczego trzeba ich słuchać</h3>
        <p>Straż pożarna, policja, zespoły ratownictwa medycznego, straż miejska, ratownicy górscy i wodni, wojsko (np. WOT przy powodzi), Rządowe Centrum Bezpieczeństwa. Służby mają informacje o zagrożeniu, sprzęt i przeszkolenie. Ustawa nakazuje osobom zaalarmowanym zachowywać się <b>zgodnie z komunikatem</b> władz lub kierującego akcją ratowniczą. Kto nie słucha – naraża siebie, innych i ratowników.</p>
        <div class="tip">💡 Syrena <b>faluje</b> – <b>uwaga, alarm</b>! Syrena <b>gra równo</b> – <b>już w porządku</b>.</div>`,
      infographicNote: 'Porównuj w poziomie: lewa kolumna to ogłoszenie alarmu, prawa – jego odwołanie.',
      infographic: {
        type: 'porownanie',
        top: { title: '🔔 Alarm ćwiczebny', text: 'ciągły dźwięk syreny przez 1 minutę', kolor: 4 },
        kolumny: [{ title: '🚨 Ogłoszenie alarmu', kolor: 2 }, { title: '✅ Odwołanie alarmu', kolor: 3 }],
        wiersze: [
          { label: 'syrena', cells: ['dźwięk modulowany (falujący), 3 minuty', 'dźwięk ciągły, 3 minuty'] },
          { label: 'głos – trzy razy', cells: ['„Uwaga! … Ogłaszam alarm…”', '„Uwaga! … Odwołuję alarm…”'] },
          { label: 'znak', cells: ['żółty trójkąt podstawą w dół', 'usunięcie żółtego trójkąta'] },
        ],
        bottom: { title: '🏃 Po ogłoszeniu alarmu', text: 'wyłącz prąd i gaz, zabierz dokumenty i leki, idź do schronu, słuchaj komunikatów (radio, RSO, ALERT RCB)', kolor: 1 },
      },
      flashcards: [
        ['Ogłoszenie alarmu – syrena', 'Modulowany (falujący) dźwięk syreny przez 3 minuty'],
        ['Odwołanie alarmu – syrena', 'Ciągły dźwięk syreny przez 3 minuty'],
        ['Alarm ćwiczebny – syrena', 'Ciągły dźwięk syreny przez 1 minutę'],
        ['Wizualny sygnał alarmu', 'Żółty trójkąt równoboczny skierowany podstawą w dół'],
        ['Słowne ogłoszenie alarmu', '„Uwaga! Uwaga! Uwaga! Ogłaszam alarm…” – powtarzane trzy razy'],
        ['ALERT RCB', 'SMS ostrzegawczy na telefon wysyłany na zlecenie Rządowego Centrum Bezpieczeństwa'],
        ['RSO', 'Regionalny System Ostrzegania – aplikacja z komunikatami ostrzegawczymi'],
        ['Kto ogłasza alarm w gminie?', 'Organ ochrony ludności, np. wójt, burmistrz lub prezydent miasta'],
        ['Ewakuacja', 'Zorganizowane przemieszczenie ludzi, zwierząt i mienia z terenu zagrożonego w bezpieczne miejsce'],
        ['Co zabrać przy ewakuacji?', 'Dokumenty, leki, wodę i żywność, telefon, latarkę, radio na baterie, ciepłe ubranie'],
        ['Zagrożenia naturalne – przykłady', 'Powódź, huragan, śnieżyca, lawina, pożar lasu od pioruna'],
        ['Zagrożenia wywołane przez człowieka – przykłady', 'Awaria techniczna, katastrofa budowlana, wyciek chemikaliów, zamach terrorystyczny'],
      ],
      questions: [
        { id: 'cxui9x', q: 'Jak brzmi syrena ogłaszająca alarm dla ludności?', options: ['ciągły dźwięk przez 1 minutę', 'trzy krótkie sygnały', 'ciągły dźwięk przez 3 minuty', 'modulowany dźwięk przez 3 minuty'], answer: 3, explain: 'Ogłoszenie alarmu: modulowany (falujący) dźwięk syreny przez 3 minuty.' },
        { id: 'apott9', q: 'Słyszysz ciągły, równy dźwięk syreny trwający 3 minuty. Co on oznacza?', options: ['ogłoszenie alarmu', 'odwołanie alarmu', 'alarm ćwiczebny', 'wezwanie strażaków'], answer: 1, explain: 'Ciągły dźwięk przez 3 minuty to odwołanie alarmu. Ciągły dźwięk przez 1 minutę to alarm ćwiczebny.' },
        { id: 'zej3i6', q: 'Jaki sygnał syreny oznacza alarm ćwiczebny (treningowy)?', options: ['modulowany dźwięk przez 3 minuty', 'ciągły dźwięk przez 3 minuty', 'ciągły dźwięk przez 1 minutę', 'brak dźwięku'], answer: 2, explain: 'Zgodnie z rozporządzeniem z 2025 r. alarm ćwiczebny to ciągły dźwięk syreny trwający jedną minutę.' },
        { id: 'wy4d04', q: 'Jak wygląda wizualny sygnał alarmowy?', options: ['żółty trójkąt równoboczny', 'niebieski kwadrat z białą ramką', 'zielony krzyż na białym tle', 'czerwony trójkąt równoboczny'], answer: 0, explain: 'Żółty trójkąt równoboczny skierowany podstawą w dół; jego usunięcie oznacza odwołanie alarmu.' },
        { id: 'u88d1h', q: 'Czym jest ALERT RCB?', options: ['numer alarmowy, pod którym zgłasza się przestępstwa policji', 'rodzaj syreny, która ogłasza alarm modulowanym dźwiękiem', 'aplikacja z mapą defibrylatorów AED w najbliższej okolicy', 'SMS ostrzegawczy wysyłany na zlecenie Rządowego Centrum Bezpieczeństwa'], answer: 3, explain: 'ALERT RCB to krótka wiadomość tekstowa wysyłana przez operatorów sieci komórkowych do osób na zagrożonym obszarze.' },
        { id: 'ogtf8j', q: 'Kto podejmuje decyzję o ogłoszeniu alarmu na terenie gminy?', options: ['dyrektor szkoły lub przewodniczący rady rodziców', 'wójt, burmistrz lub prezydent miasta', 'proboszcz najbliższej parafii', 'każdy mieszkaniec, który zauważy zagrożenie'], answer: 1, explain: 'Alarm ogłasza terytorialny organ ochrony ludności – na terenie gminy jest to wójt, burmistrz lub prezydent miasta.' },
        { id: 'ifq3rd', q: 'Co powinieneś zrobić w pierwszej kolejności po ogłoszeniu alarmu w domu?', options: ['przerwać zajęcia, wyłączyć prąd i gaz, zabrać najważniejsze rzeczy', 'wyjść na balkon i nagrywać film', 'otworzyć wszystkie okna', 'zadzwonić do znajomych, żeby zapytać, co się dzieje'], answer: 0, explain: 'Przerywasz zajęcia, zabezpieczasz mieszkanie, zabierasz dokumenty, leki, wodę itp. i idziesz w wyznaczone miejsce, słuchając komunikatów.' },
        { id: '3z4hbo', q: 'Które zachowanie podczas ewakuacji szkoły jest błędne?', options: ['iść zgodnie ze znakami ewakuacyjnymi', 'trzymać się swojej klasy', 'wrócić do sali po zapomniany telefon', 'zgłosić się na miejscu zbiórki'], answer: 2, explain: 'Nie wolno wracać ani iść pod prąd ewakuacji – to blokuje drogę innym i naraża ciebie.' },
        { id: '3i6z7f', q: 'Który przykład to zagrożenie pochodzenia naturalnego?', options: ['katastrofa budowlana', 'wyciek chloru z cysterny', 'zamach terrorystyczny', 'huragan'], answer: 3, explain: 'Huragan to zjawisko przyrodnicze. Pozostałe zagrożenia wywołuje człowiek.' },
        { id: 'r9p0ti', q: 'Dlaczego w czasie zagrożenia trzeba bezwzględnie stosować się do poleceń służb?', options: ['bo inaczej dostaniesz złą ocenę z edukacji dla bezpieczeństwa w szkole', 'bo służby znają zagrożenie i mają sprzęt, a nieposłuszeństwo naraża ciebie i innych', 'bo służby lubią rozkazywać, a posłuszeństwo jest ważniejsze niż bezpieczeństwo', 'bo to nie ma znaczenia – ważne jest, jak szybko uciekniesz z miejsca'], answer: 1, explain: 'Ustawa o ochronie ludności nakazuje zachowywać się zgodnie z komunikatem władz lub kierującego działaniem ratowniczym.' },
        { id: 'njrzmm', q: 'Który kanał NIE jest wymieniany jako sposób przekazywania komunikatów ostrzegawczych?', options: ['aplikacja RSO (Regionalny System Ostrzegania)', 'radio, telewizja i strony internetowe', 'ulotki rozdawane w kinie', 'ALERT RCB'], answer: 2, explain: 'Komunikaty ostrzegawcze przekazuje się przez RSO, media (radio, TV, gazety, strony internetowe), operatorów sieci komórkowych i ALERT RCB.' },
        { id: 'w6kxhc', q: 'Prawda czy fałsz?\nZnak żółtego trójkąta umieszcza się po ogłoszeniu alarmu, a jego usunięcie oznacza odwołanie alarmu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – tak opisuje wizualny sygnał alarmowy rozporządzenie MSWiA z 2025 r.' },
      ],
    },
    {
      id: 'zagrozenia',
      name: 'Pożar, powódź, chemikalia, zamach',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. II, wym. 5 (zasady postępowania w razie pożaru, wypadku komunikacyjnego, zagrożenia powodzią, intensywnej śnieżycy, uwolnienia niebezpiecznych środków chemicznych, zdarzenia terrorystycznego) oraz dz. III, wym. 15b (zasada „uciekaj, schowaj się, walcz”).',
      theory: `
        <h3>Pożar</h3>
        <p>Do spalania potrzebne są trzy rzeczy – <b>trójkąt spalania</b>: <b>materiał palny</b>, <b>powietrze (tlen)</b> i <b>źródło ciepła</b>. Usuń jeden element, a ogień zgaśnie.</p>
        <ol>
          <li><b>Zaalarmuj</b> osoby w zagrożonym miejscu.</li>
          <li>Wezwij straż pożarną: <b>112</b> lub <b>998</b>. Podaj: kto dzwoni, adres, co i gdzie się pali, czy zagrożeni są ludzie.</li>
          <li>Jeśli możesz – odetnij dopływ powietrza (zamknij okno, drzwi do pomieszczenia z ogniem).</li>
          <li><b>Ewakuuj się</b> drogą ewakuacyjną. Nie ratuj rzeczy.</li>
        </ol>
        <p><b>Nie gaś wodą</b> płonącego oleju (np. na patelni) ani urządzeń pod napięciem – do tego służą gaśnice, np. proszkowe lub śniegowe (CO₂). <b>Płonące ubranie</b>: połóż osobę na ziemi i stłum płomienie kocem lub ubraniem z naturalnych włókien (nie z syntetyku – topi się).</p>
        <h3>Powódź</h3>
        <ul>
          <li>Słuchaj komunikatów (radio, TV, RSO) i poleceń służb.</li>
          <li>Przenieś się na <b>wyższe piętro</b>, zabezpiecz dokumenty, wodę pitną i jedzenie.</li>
          <li>W razie potrzeby odłącz prąd i gaz. Przygotuj latarkę.</li>
          <li>Nie wchodź do wody płynącej ulicą. Gdy nie zdążysz się ewakuować – czekaj na służby.</li>
        </ul>
        <h3>Intensywna śnieżyca i mróz</h3>
        <ul>
          <li>Jeśli nie musisz – <b>nie wychodź</b>. Ubieraj się warstwowo, chroń dłonie, stopy i twarz.</li>
          <li>Zjedz ciepły posiłek przed wyjściem. Powiedz bliskim, dokąd idziesz.</li>
          <li>Omijaj miejsca pod dachami, z których może spaść śnieg lub sople.</li>
        </ul>
        <h3>Uwolnienie niebezpiecznych substancji chemicznych</h3>
        <ul>
          <li>Nie zbliżaj się do miejsca wycieku. Słuchaj komunikatów i poleceń służb.</li>
          <li>Opuszczając teren, zwróć uwagę na <b>kierunek wiatru</b> i oddalaj się <b>prostopadle do niego</b> (w bok od chmury).</li>
          <li>W budynku: zamknij i uszczelnij okna i drzwi, nie wychodź, dopóki służby nie pozwolą.</li>
          <li>Osłoń usta i nos (np. tkaniną), nie jedz i nie pij niczego, co mogło zostać skażone.</li>
        </ul>
        <h3>Wypadek komunikacyjny</h3>
        <ul>
          <li>Zadbaj o swoje bezpieczeństwo: <b>kamizelka odblaskowa</b>, ostrzeż innych kierowców (trójkąt ostrzegawczy, światła awaryjne – zrobi to dorosły).</li>
          <li>Wezwij pomoc (<b>112</b>), poproś świadków o pomoc.</li>
          <li>Nie wyciągaj poszkodowanych z auta bez potrzeby (możliwy uraz kręgosłupa) – chyba że grozi im bezpośrednie niebezpieczeństwo, np. ogień.</li>
        </ul>
        <h3>Zdarzenie terrorystyczne</h3>
        <ul>
          <li><b>Podejrzany pakunek</b>: nie dotykaj, nie przenoś, odsuń się i ostrzeż innych, zgłoś (112 lub 997).</li>
          <li>Atak (strzały, wybuch) – zasada <b>„uciekaj, schowaj się, walcz”</b>:
            <ul>
              <li><b>Uciekaj</b> – jak najdalej od zagrożenia, ostrzegaj innych; gdy będziesz bezpieczny, dzwoń 112.</li>
              <li><b>Schowaj się</b> – gdy ucieczka jest niemożliwa: zabarykaduj drzwi, wycisz telefon, odsuń się od drzwi i okien.</li>
              <li><b>Walcz</b> – tylko w ostateczności, gdy ucieczka i kryjówka zawiodły.</li>
            </ul>
          </li>
          <li>Podczas akcji antyterrorystycznej: <b>połóż się</b>, trzymaj <b>ręce na widoku</b> z otwartymi dłońmi, nie wykonuj gwałtownych ruchów, słuchaj poleceń.</li>
        </ul>
        <div class="tip">💡 We wszystkich zagrożeniach powtarza się ten sam schemat: <b>spokój → twoje bezpieczeństwo → alarm (112) → słuchaj służb</b>.</div>`,
      infographicNote: 'U góry schemat wspólny dla wszystkich zagrożeń, niżej – najważniejsza zasada dla każdego z nich.',
      infographic: {
        type: 'karty', kolumny: 2,
        top: { title: 'Zawsze ten sam schemat', text: 'spokój → twoje bezpieczeństwo → alarm (112) → słuchaj służb', kolor: 5 },
        items: [
          { icon: '🔥', title: 'Pożar', text: '112 lub 998; oleju nie gaś wodą', kolor: 2 },
          { icon: '🌊', title: 'Powódź', text: 'wyższe piętro, słuchaj komunikatów', kolor: 1 },
          { icon: '❄️', title: 'Śnieżyca', text: 'nie musisz – nie wychodź', kolor: 1 },
          { icon: '☣️', title: 'Chemikalia', text: 'uciekaj prostopadle do kierunku wiatru', kolor: 4 },
          { icon: '🚗', title: 'Wypadek', text: 'kamizelka odblaskowa, 112', kolor: 4 },
          { icon: '🏃', title: 'Zamach', text: 'uciekaj, schowaj się, walcz (ostateczność)', kolor: 2 },
        ],
      },
      flashcards: [
        ['Trójkąt spalania', 'Materiał palny + powietrze (tlen) + źródło ciepła'],
        ['Numery do wezwania straży pożarnej', '112 lub 998'],
        ['Co podajesz, zgłaszając pożar?', 'Kto dzwoni, adres, co i gdzie się pali, czy zagrożeni są ludzie'],
        ['Czym nie gasimy płonącego oleju na patelni?', 'Wodą – używa się np. gaśnicy proszkowej lub śniegowej (CO₂)'],
        ['Płonące ubranie na człowieku', 'Połóż osobę i stłum płomienie kocem lub ubraniem z naturalnych włókien'],
        ['Powódź – gdzie się schronić?', 'Na wyższym piętrze budynku; słuchaj komunikatów i poleceń służb'],
        ['Śnieżyca – najważniejsza zasada', 'Jeśli nie musisz, nie wychodź; ubieraj się warstwowo, chroń dłonie, stopy i twarz'],
        ['Wyciek toksycznych chemikaliów – kierunek ucieczki', 'Prostopadle do kierunku wiatru'],
        ['Podejrzany pakunek', 'Nie dotykaj, nie przenoś, odsuń się, ostrzeż innych, zgłoś służbom'],
        ['Zasada przy ataku terrorystycznym', '„Uciekaj, schowaj się, walcz” – walka tylko w ostateczności'],
        ['Zachowanie podczas akcji antyterrorystycznej', 'Połóż się, ręce na widoku z otwartymi dłońmi, bez gwałtownych ruchów, słuchaj poleceń'],
      ],
      questions: [
        { id: 'see6a1', q: 'Które trzy elementy tworzą trójkąt spalania?', options: ['materiał palny, powietrze (tlen), źródło ciepła', 'woda, piasek, koc gaśniczy (środki gaśnicze)', 'dym, popiół, sadza (produkty spalania)', 'materiał palny, woda (wilgoć), silne źródło światła'], answer: 0, explain: 'Bez któregokolwiek z tych trzech elementów spalanie ustaje.' },
        { id: 'vizhkx', q: 'Na patelni zapalił się olej. Czego NIE wolno robić?', options: ['zakręcić gazu, jeśli to bezpieczne', 'użyć gaśnicy proszkowej', 'wezwać straż pożarną, gdy ogień się rozprzestrzenia', 'zalać patelnię wodą'], answer: 3, explain: 'Woda na płonący olej powoduje gwałtowne rozprysk i rozprzestrzenienie ognia. Olej gasi się np. gaśnicą proszkową lub śniegową.' },
        { id: 'jonf0k', q: 'Jaka jest prawidłowa kolejność działań, gdy zauważysz pożar w mieszkaniu?', options: ['ratuję cenne rzeczy, potem dzwonię pod 112, ewakuuję się', 'alarmuję innych, wzywam straż (112/998), ewakuuję się', 'czekam w mieszkaniu, aż ogień zgaśnie sam', 'otwieram okna, żeby wyleciał dym, i gaszę ogień wodą'], answer: 1, explain: 'Najważniejsze są ludzie: zaalarmuj, wezwij pomoc, opuść zagrożone miejsce. Otwieranie okien dostarcza ogniowi tlenu.' },
        { id: 'q0hxcb', q: 'Na koledze zapaliła się bluza. Co robisz?', options: ['kładziesz go i tłumisz płomienie kocem lub ubraniem z naturalnych włókien', 'każesz mu biec do łazienki, żeby jak najszybciej polał się wodą', 'zarzucasz na niego kurtkę z nylonu lub z innego sztucznego materiału, np. polaru', 'wachlujesz płomienie zeszytem, żeby zdmuchnąć ogień z bluzy'], answer: 0, explain: 'Bieg i podmuch powietrza podsycają ogień. Płomienie tłumi się kocem lub ubraniem z naturalnych włókien – syntetyki się topią.' },
        { id: 'i729q7', q: 'Ogłoszono zagrożenie powodziowe. Które zachowanie jest właściwe?', options: ['pojechać nad wezbraną rzekę, żeby sprawdzić poziom wody', 'zejść do piwnicy i przenieść tam dokumenty oraz zapasy jedzenia', 'przenieść się na wyższe piętro i zabezpieczyć dokumenty oraz wodę pitną', 'zignorować komunikaty i czekać, aż woda sama opadnie'], answer: 2, explain: 'Przy powodzi kierujesz się w górę budynku i słuchasz komunikatów i poleceń służb.' },
        { id: '0mf0ze', q: 'Trwa intensywna śnieżyca i silny mróz. Co jest najlepszym wyborem?', options: ['iść na długi spacer w jednej cienkiej kurtce', 'stać pod dachem, z którego zwisają duże sople lodu', 'wyjść bez czapki i rękawiczek', 'zostać w domu, jeśli wyjście nie jest konieczne'], answer: 3, explain: 'Przy śnieżycy najbezpieczniej nie wychodzić; jeśli trzeba – ubrać się warstwowo i chronić dłonie, stopy i twarz.' },
        { id: 'moxpy4', q: 'W pobliżu doszło do wycieku toksycznego gazu z cysterny. W którą stronę się oddalasz?', options: ['zgodnie z kierunkiem wiatru', 'prostopadle do kierunku wiatru', 'pod wiatr, prosto na cysternę', 'w stronę miejsca wycieku, żeby zobaczyć, co się stało'], answer: 1, explain: 'Wiatr niesie chmurę gazu – oddalasz się w bok od niej, czyli prostopadle do kierunku wiatru.' },
        { id: 'rd2v48', q: 'Jesteś w domu, a służby ostrzegają przed chmurą substancji toksycznej. Co robisz?', options: ['otwierasz szeroko okna, żeby wywietrzyć mieszkanie', 'wychodzisz na spacer, żeby zobaczyć, skąd idzie chmura', 'zamykasz i uszczelniasz okna oraz drzwi i słuchasz komunikatów', 'pijesz wodę z ogrodowej beczki i jesz owoce z działki'], answer: 2, explain: 'Szczelne pomieszczenie chroni przed skażonym powietrzem; czekasz na polecenia służb.' },
        { id: '037bl2', q: 'Na przystanku leży porzucona torba, z której wystają przewody. Co robisz?', options: ['nie dotykasz jej, odsuwasz się, ostrzegasz innych i zgłaszasz służbom', 'zanosisz ją ostrożnie do kierowcy autobusu albo do najbliższego sklepu', 'zaglądasz do środka, żeby sprawdzić, czy to naprawdę bomba', 'robisz zdjęcie z bliska i wrzucasz do internetu'], answer: 0, explain: 'Podejrzanego przedmiotu nie wolno dotykać ani przenosić. Oddal się i zgłoś (112 lub 997).' },
        { id: 's43shd', q: 'Słyszysz strzały w galerii handlowej. Co robisz najpierw, jeśli możesz bezpiecznie opuścić to miejsce?', options: ['próbujesz obezwładnić napastnika', 'chowasz się w przymierzalni', 'idziesz zobaczyć, co się dzieje', 'uciekasz i ostrzegasz innych'], answer: 3, explain: 'Zasada „uciekaj, schowaj się, walcz” – najpierw ucieczka. Walka to ostateczność.' },
        { id: '0xaxvk', q: 'Jak zachować się podczas akcji grupy antyterrorystycznej?', options: ['biec jak najszybciej w stronę wyjścia, omijając antyterrorystów', 'położyć się, trzymać ręce na widoku z otwartymi dłońmi i słuchać poleceń', 'nagrywać antyterrorystów telefonem, żeby mieć dowód akcji', 'chwycić leżący przedmiot do obrony i trzymać go w dłoni'], answer: 1, explain: 'Gwałtowny ruch lub przedmiot w ręku może sprawić, że zostaniesz uznany za napastnika.' },
        { id: '9abfts', q: 'Prawda czy fałsz?\nPo wypadku samochodowym zawsze trzeba od razu wyciągnąć wszystkich poszkodowanych z auta.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Poszkodowanych nie wyciąga się bez potrzeby (możliwy uraz kręgosłupa) – tylko wtedy, gdy grozi im bezpośrednie niebezpieczeństwo, np. ogień.' },
      ],
      tasks: [
        {
          id: 'p87s8t',
          points: 3,
          q: 'Wracasz do domu i widzisz dym wydobywający się spod drzwi mieszkania sąsiadów na twoim piętrze. Opisz krok po kroku, co robisz.',
          steps: [
            'Nie otwieram drzwi do płonącego mieszkania – nie wchodzę w dym.',
            'Alarmuję sąsiadów i inne osoby w budynku (głośno, pukając do drzwi).',
            'Dzwonię pod 112 lub 998 i podaję: kim jestem, adres, co się pali (mieszkanie, piętro), czy w środku mogą być ludzie; nie rozłączam się pierwszy.',
            'Opuszczam budynek drogą ewakuacyjną, pomagam słabszym, na zewnątrz czekam na straż i przekazuję jej informacje.',
          ],
          answer: 'Alarmuję innych, wzywam straż pożarną (112/998) z pełną informacją, ewakuuję się i słucham poleceń strażaków – nie wchodzę do płonącego mieszkania.',
          scoring: [
            '1 pkt – zaalarmowanie innych osób w budynku.',
            '1 pkt – wezwanie straży (112 lub 998) z podaniem adresu i informacji o zdarzeniu.',
            '1 pkt – ewakuacja z budynku (bez wchodzenia w dym i do płonącego mieszkania).',
          ],
        },
      ],
    },
    {
      id: 'swiadek',
      name: 'Świadek zdarzenia: bezpieczeństwo i wzywanie pomocy',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. III „Podstawy pierwszej pomocy”, wym. 1–7 (rola świadka, bezpieczeństwo na miejscu zdarzenia i ochrona przed zakażeniem, zagrożenia w różnych środowiskach, stan zagrożenia życia, wzywanie pomocy, aplikacje). Prawo: ustawa o Państwowym Ratownictwie Medycznym (Dz.U. 2026 poz. 141) art. 3 pkt 7–8, art. 4–5; Kodeks karny (Dz.U. 2025 poz. 383) art. 162; ustawa o ochronie ludności i obronie cywilnej art. 68.',
      theory: `
        <div class="tip">⚠️ Ta aplikacja <b>nie zastępuje kursu pierwszej pomocy</b>. Uciskania klatki piersiowej, pozycji bocznej czy opatrunków naucz się praktycznie – na zajęciach EDB lub kursie z instruktorem.</div>
        <h3>Rola świadka</h3>
        <p>Zanim przyjedzie karetka, mijają minuty – a mózg bez tlenu zaczyna się nieodwracalnie uszkadzać już po <b>3–5 minutach</b>. Dlatego to <b>świadek</b> (czyli ty) zaczyna łańcuch ratunkowy: zauważa, wzywa pomoc i udziela pierwszej pomocy. <b>Pierwsza pomoc</b> to czynności ratujące osobę w stanie nagłego zagrożenia zdrowotnego, wykonywane przez osobę na miejscu zdarzenia.</p>
        <h3>Co mówi prawo</h3>
        <ul>
          <li>Kto zauważy osobę w stanie nagłego zagrożenia zdrowotnego, ma obowiązek – w miarę możliwości i umiejętności – <b>powiadomić służby</b> (ustawa o Państwowym Ratownictwie Medycznym, art. 4).</li>
          <li>Kto nie udziela pomocy człowiekowi w bezpośrednim niebezpieczeństwie utraty życia, choć mógł to zrobić <b>bez narażenia siebie</b>, podlega karze do <b>3 lat</b> pozbawienia wolności (Kodeks karny, art. 162).</li>
          <li>Osoba udzielająca pierwszej pomocy jest chroniona prawnie <b>tak jak funkcjonariusz publiczny</b> (ustawa o PRM, art. 5).</li>
        </ul>
        <h3>Najpierw bezpieczeństwo</h3>
        <ol>
          <li><b>Twoje</b> – nie narażaj się (ruch uliczny, ogień, dym, prąd, gaz, woda, agresywna osoba lub pies).</li>
          <li><b>Otoczenia</b> – ostrzeż innych, nie pozwól, by przybyło ofiar.</li>
          <li><b>Poszkodowanego</b>.</li>
        </ol>
        <p><b>Oceń swoje możliwości</b>: rób to, co potrafisz i co jest bezpieczne. Ranny ratownik nikomu nie pomoże.</p>
        <h3>Ochrona przed zakażeniem</h3>
        <ul>
          <li>Krew i płyny ustrojowe mogą przenosić wirusy, np. <b>HBV, HCV i HIV</b>.</li>
          <li>Używaj <b>rękawiczek jednorazowych</b> (lateksowych, nitrylowych) i <b>maseczki lub ustnika</b> do oddechów ratowniczych – to uniwersalne środki ochrony osobistej z apteczki.</li>
          <li><b>Zdejmowanie rękawiczek</b>: chwyć pierwszą rękawiczkę od zewnątrz przy nadgarstku i ściągnij ją, wywijając na lewą stronę; trzymaj ją w drugiej dłoni. Palce gołej dłoni wsuń <b>pod brzeg</b> drugiej rękawiczki i ściągnij ją też na lewą stronę – pierwsza zostanie w środku. Wyrzuć, umyj ręce.</li>
        </ul>
        <h3>Gdzie czyhają zagrożenia</h3>
        <table>
          <tr><th>Środowisko</th><th>Przykłady zagrożeń</th></tr>
          <tr><td>dom</td><td>prąd, gaz, gorące płyny, środki chemiczne, upadki</td></tr>
          <tr><td>ulica</td><td>ruch pojazdów, śliska nawierzchnia, agresja</td></tr>
          <tr><td>woda</td><td>utonięcie, skok do płytkiej wody (uraz kręgosłupa), wychłodzenie</td></tr>
          <tr><td>przestrzenie podziemne</td><td>ciemność, gazy, zawalenie, trudna ucieczka</td></tr>
          <tr><td>las</td><td>zabłądzenie, pożar, burza, kleszcze</td></tr>
        </table>
        <h3>Stan zagrożenia życia</h3>
        <p><b>Stan nagłego zagrożenia zdrowotnego</b> – nagłe pogorszenie zdrowia, które może prowadzić do poważnego uszkodzenia organizmu lub śmierci i wymaga natychmiastowej pomocy. Przyczyny: urazy (wypadki, upadki), zawał serca, zadławienie, utonięcie, porażenie prądem, zatrucia, duże krwotoki.</p>
        <p>Życie podtrzymują trzy układy, które działają razem: <b>nerwowy</b> (mózg – świadomość, sterowanie oddychaniem), <b>oddechowy</b> (dostarcza tlen) i <b>krążenia</b> (serce rozprowadza krew z tlenem). Awaria jednego szybko wyłącza pozostałe.</p>
        <h3>Jak wezwać pomoc</h3>
        <table>
          <tr><th>Numer</th><th>Służba</th></tr>
          <tr><td><b>112</b></td><td>numer alarmowy (w całej UE) – centrum powiadamiania ratunkowego</td></tr>
          <tr><td><b>999</b></td><td>pogotowie ratunkowe</td></tr>
          <tr><td><b>998</b></td><td>straż pożarna</td></tr>
          <tr><td><b>997</b></td><td>policja</td></tr>
        </table>
        <p>Dzwoń, gdy zagrożone jest życie lub zdrowie. Mów spokojnie i podaj: <b>kim jesteś</b>, <b>co się stało</b>, <b>gdzie</b> (adres, punkty orientacyjne), <b>ilu jest poszkodowanych</b> i w jakim są stanie (czy reagują, czy oddychają). <b>Odpowiadaj na pytania</b> dyspozytora i <b>nie rozłączaj się</b>, dopóki on nie zakończy. Włącz <b>głośnik</b> – ręce będziesz mieć wolne.</p>
        <h3>Aplikacje w telefonie</h3>
        <ul>
          <li><b>Alarm112</b> (MSWiA) – zgłoszenie na numer alarmowy bez rozmowy: wybierasz piktogramy, potem piszesz SMS-y z operatorem. Przydaje się osobom głuchym i z zaburzeniami mowy (trzeba się wcześniej zarejestrować).</li>
          <li>Aplikacje z <b>mapą defibrylatorów AED</b>, np. <b>Staying Alive</b> – pokazują najbliższe AED.</li>
        </ul>`,
      infographicNote: 'Czytaj od góry: najpierw bezpieczeństwo w tej kolejności, potem wezwanie pomocy.',
      infographic: {
        type: 'kroki',
        top: { title: '⏱️ Liczą się minuty', text: 'mózg bez tlenu uszkadza się nieodwracalnie po 3–5 minutach', kolor: 2 },
        items: [
          { icon: '🦺', title: '1. Twoje bezpieczeństwo', text: 'ruch uliczny, ogień, dym, prąd, gaz, woda – nie narażaj się' },
          { icon: '🚧', title: '2. Bezpieczeństwo otoczenia', text: 'ostrzeż innych, żeby nie przybyło ofiar' },
          { icon: '🧑', title: '3. Bezpieczeństwo poszkodowanego' },
          { icon: '📞', title: 'Wezwij pomoc', text: 'kim jesteś, co się stało, gdzie, ilu poszkodowanych; nie rozłączaj się', kolor: 3 },
        ],
        bottom: { title: '☎️ Numery', text: '112 – alarmowy · 999 – pogotowie\n998 – straż pożarna · 997 – policja', kolor: 1 },
      },
      flashcards: [
        ['Kolejność bezpieczeństwa na miejscu zdarzenia', '1. ratownik (ty), 2. otoczenie, 3. poszkodowany'],
        ['Pierwsza pomoc (definicja z ustawy)', 'Czynności ratujące osobę w stanie nagłego zagrożenia zdrowotnego, wykonywane przez osobę na miejscu zdarzenia'],
        ['Stan nagłego zagrożenia zdrowotnego', 'Nagłe pogorszenie zdrowia, które może prowadzić do poważnego uszkodzenia organizmu lub śmierci'],
        ['Po ilu minutach bez tlenu mózg uszkadza się nieodwracalnie?', 'Po ok. 3–5 minutach'],
        ['112', 'Numer alarmowy w całej UE – centrum powiadamiania ratunkowego'],
        ['999 / 998 / 997', 'Pogotowie ratunkowe / straż pożarna / policja'],
        ['Co podajesz, wzywając pomoc?', 'Kim jesteś, co się stało, gdzie, ilu poszkodowanych i w jakim stanie; nie rozłączasz się pierwszy'],
        ['Kodeks karny, art. 162', 'Kara do 3 lat za nieudzielenie pomocy, jeśli można było jej udzielić bez narażenia siebie'],
        ['Ochrona prawna ratującego', 'Osoba udzielająca pierwszej pomocy korzysta z ochrony jak funkcjonariusz publiczny'],
        ['Uniwersalne środki ochrony osobistej', 'Rękawiczki jednorazowe i maseczka (ustnik) do oddechów ratowniczych'],
        ['Jak zdjąć rękawiczki?', 'Obie ściągasz na lewą stronę, nie dotykając gołą skórą ich zewnętrznej strony; potem myjesz ręce'],
        ['Alarm112', 'Aplikacja MSWiA do zgłoszeń alarmowych bez rozmowy (piktogramy, SMS)'],
      ],
      questions: [
        { id: '35pjq2', q: 'Widzisz leżącego na jezdni rowerzystę. Co sprawdzasz najpierw?', options: ['czy ty możesz bezpiecznie podejść (ruch pojazdów)', 'czy poszkodowany ma przy sobie dokumenty (dowód osobisty)', 'czy rower jest uszkodzony i da się go jeszcze naprawić', 'kto spowodował wypadek (świadkowie, nagrania)'], answer: 0, explain: 'Bezpieczeństwo ratownika jest na pierwszym miejscu. Potem otoczenie, potem poszkodowany.' },
        { id: '5l2fp7', q: 'Jaka jest prawidłowa kolejność zapewniania bezpieczeństwa na miejscu zdarzenia?', options: ['poszkodowany – otoczenie – ratownik', 'otoczenie – poszkodowany – ratownik', 'ratownik – otoczenie – poszkodowany', 'poszkodowany – ratownik – otoczenie'], answer: 2, explain: 'Najpierw ty, potem inni świadkowie, potem poszkodowany – inaczej może przybyć ofiar.' },
        { id: '6mpn8b', q: 'Pod jakim numerem zadzwonisz po pogotowie ratunkowe (poza 112)?', options: ['997', '998', '986', '999'], answer: 3, explain: '999 – pogotowie ratunkowe, 998 – straż pożarna, 997 – policja.' },
        { id: 'p9sqmc', q: 'Który numer jest numerem alarmowym obowiązującym w całej Unii Europejskiej?', options: ['997', '112', '911', '999'], answer: 1, explain: '112 łączy z centrum powiadamiania ratunkowego, które przekazuje zgłoszenie właściwej służbie.' },
        { id: '29ygwx', q: 'Co zrobisz po podaniu dyspozytorowi wszystkich informacji?', options: ['od razu się rozłączę, żeby nie blokować linii alarmowej innym', 'zadzwonię jeszcze pod 997 i 998', 'nie rozłączę się, dopóki dyspozytor nie zakończy rozmowy', 'wyłączę telefon, żeby oszczędzać baterię'], answer: 2, explain: 'Dyspozytor może mieć pytania lub podpowiedzieć, co robić. Nie rozłączaj się pierwszy.' },
        { id: 'aqkz0t', q: 'Czego chronią rękawiczki jednorazowe podczas udzielania pierwszej pomocy?', options: ['przed kontaktem z krwią i płynami ustrojowymi poszkodowanego', 'przed oparzeniem słonecznym i promieniowaniem UV', 'przed zimnem i odmrożeniem palców podczas akcji', 'przed brudem, żeby nie trzeba było potem myć rąk'], answer: 0, explain: 'Krew i płyny ustrojowe mogą przenosić wirusy (np. HBV, HCV, HIV). Rękawiczki i maseczka to uniwersalne środki ochrony osobistej ratownika; po zdjęciu rękawiczek myjesz ręce.' },
        { id: '22157d', q: 'Jak prawidłowo zdjąć zakrwawione rękawiczki?', options: ['ściągnąć je zębami, żeby nie brudzić drugiej dłoni', 'zdjąć je, chwytając gołą ręką za zakrwawione palce drugiej rękawiczki', 'umyć je dokładnie pod bieżącą wodą z mydłem i schować do kieszeni na później', 'ściągnąć obie na lewą stronę bez dotykania gołą skórą ich zewnętrznej strony'], answer: 3, explain: 'Pierwszą chwytasz od zewnątrz przy nadgarstku, drugą – palcami od środka; obie lądują na lewej stronie, jedna w drugiej.' },
        { id: 'za0ohy', q: 'Co grozi osobie, która nie udzieliła pomocy człowiekowi w bezpośrednim niebezpieczeństwie utraty życia, choć mogła to zrobić bez narażania siebie?', options: ['nic – prawo nie przewiduje za to żadnej kary', 'kara pozbawienia wolności do 3 lat', 'upomnienie od policji', 'mandat 50 zł nałożony przez straż miejską'], answer: 1, explain: 'Kodeks karny, art. 162 § 1.' },
        { id: 'rrdud5', q: 'Które układy wspólnie podtrzymują podstawowe funkcje życiowe?', options: ['nerwowy, oddechowy, krążenia', 'pokarmowy, wydalniczy, rozrodczy', 'kostny, mięśniowy, pokarmowy', 'hormonalny, wydalniczy, odpornościowy'], answer: 0, explain: 'Mózg steruje oddychaniem, płuca dostarczają tlen, a serce rozprowadza go z krwią. Awaria jednego szybko wyłącza pozostałe.' },
        { id: '84loz1', q: 'Dlaczego pomoc świadka w pierwszych minutach jest tak ważna?', options: ['bo karetka przyjeżdża dopiero wtedy, gdy świadek zacznie RKO', 'bo świadek może postawić diagnozę i wypisać leki', 'bo mózg bez tlenu uszkadza się nieodwracalnie już po ok. 3–5 minutach', 'bo świadek ma lepszy sprzęt medyczny niż zespół ratowników'], answer: 2, explain: 'Działania świadka (wezwanie pomocy, RKO) wypełniają czas do przyjazdu zespołu ratownictwa.' },
        { id: 'fi6reb', q: 'Do czego służy aplikacja Alarm112?', options: ['do zamawiania jedzenia i śledzenia dostawy na mapie', 'do sprawdzania prognozy pogody na najbliższe dni', 'do nauki języków obcych przez krótkie rozmowy wideo z lektorem', 'do zgłaszania zdarzeń na numer alarmowy bez rozmowy głosowej'], answer: 3, explain: 'Alarm112 (MSWiA) pozwala zgłosić zdarzenie piktogramami i SMS-ami – ważne np. dla osób głuchych.' },
        { id: 'z0vopg', q: 'Prawda czy fałsz?\nOsoba udzielająca pierwszej pomocy korzysta z ochrony prawnej przewidzianej dla funkcjonariuszy publicznych.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – tak stanowi art. 5 ustawy o Państwowym Ratownictwie Medycznym.' },
      ],
    },
    {
      id: 'nieprzytomny',
      name: 'Osoba nieprzytomna i pozycja boczna',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. III „Podstawy pierwszej pomocy”, wym. 8–9 (objawy utraty przytomności, ocena przytomności i oddechu, mechanizm niedrożności dróg oddechowych, rękoczyn czoło–żuchwa, pozycja boczna bezpieczna, komfort termiczny, ponawianie oceny oddechu). Wytyczne ERC 2025 i e-materiały zpe.gov.pl.',
      theory: `
        <h3>Objawy utraty przytomności</h3>
        <p>Osoba nieprzytomna <b>nie reaguje</b> na głos ani dotyk, nie otwiera oczu, nie ma z nią kontaktu, jest <b>wiotka</b>. Krótka utrata przytomności (kilka–kilkadziesiąt sekund) to <b>omdlenie</b>. Dłuższy brak przytomności bezpośrednio zagraża życiu.</p>
        <h3>Krok 1. Oceń przytomność</h3>
        <p>Klęknij przy poszkodowanym, delikatnie <b>potrząśnij go za ramiona</b> i zapytaj głośno: „Czy mnie słyszysz? Co się stało?”. Każda reakcja (ruch, grymas, otwarcie oczu) oznacza, że reaguje.</p>
        <p><b>Nie</b> klepiemy po twarzy, nie polewamy wodą, nie szczypiemy.</p>
        <h3>Krok 2. Wezwij pomoc</h3>
        <p>Zawołaj o pomoc osoby w pobliżu. Gdy poszkodowany nie reaguje – <b>dzwoń 112</b> (wytyczne ERC 2025 zalecają wezwać pomoc od razu, zanim skończysz ocenę oddechu). Włącz głośnik – dyspozytor pomoże ci ocenić oddech.</p>
        <h3>Krok 3. Udrożnij drogi oddechowe</h3>
        <p><b>Dlaczego?</b> U nieprzytomnego mięśnie wiotczeją – <b>język opada na tylną ścianę gardła</b> i zamyka drogi oddechowe. Grozi też zachłyśnięcie śliną lub wymiocinami.</p>
        <p><b>Rękoczyn czoło–żuchwa</b>: jedną dłoń połóż na czole, palce drugiej pod brodą (na kości żuchwy). <b>Odegnij głowę do tyłu</b> i unieś żuchwę – język odsunie się od gardła.</p>
        <h3>Krok 4. Oceń oddech – do 10 sekund</h3>
        <p>Pochyl się nad twarzą poszkodowanego i trzema zmysłami sprawdzaj: <b>widzę</b> ruchy klatki piersiowej, <b>słyszę</b> oddech, <b>czuję</b> go na policzku. Rób to <b>nie dłużej niż 10 sekund</b>.</p>
        <table>
          <tr><th>Wynik</th><th>Co robisz</th></tr>
          <tr><td>oddycha <b>prawidłowo</b> (regularnie, spokojnie)</td><td><b>pozycja boczna bezpieczna</b></td></tr>
          <tr><td><b>nie oddycha</b> albo oddycha <b>nieprawidłowo</b> (np. rzadkie westchnięcia)</td><td><b>resuscytacja (RKO)</b> – dział „RKO i AED”</td></tr>
        </table>
        <h3>Pozycja boczna bezpieczna</h3>
        <ol>
          <li>Zdejmij okulary. Wyprostuj nogi poszkodowanego.</li>
          <li>Bliższą rękę ułóż pod kątem prostym do ciała, zgiętą w łokciu, dłonią do góry.</li>
          <li>Dalszą rękę przełóż przez klatkę piersiową i przyłóż grzbietem dłoni do jego policzka.</li>
          <li>Dalszą nogę zegnij w kolanie (stopa na ziemi).</li>
          <li>Pociągnij za kolano i ramię – przetocz poszkodowanego na bok, do siebie.</li>
          <li>Ułóż nogę tak, by biodro i kolano tworzyły kąty proste. <b>Odegnij głowę</b> lekko do tyłu.</li>
        </ol>
        <p>Pozycja jest <b>stabilna</b>, utrzymuje <b>drożne drogi oddechowe</b> i chroni przed <b>zachłyśnięciem</b>. Kobietę w widocznej ciąży układamy na <b>lewym</b> boku.</p>
        <h3>Komfort termiczny i kontrola</h3>
        <ul>
          <li>Nieprzytomny szybko się wychładza – <b>okryj go</b> (koc, folia NRC), odizoluj od zimnego podłoża.</li>
          <li><b>Regularnie</b> (np. co minutę) <b>sprawdzaj oddech</b>. Gdy przestanie oddychać prawidłowo – połóż go na plecach i zacznij RKO.</li>
          <li>Nie zostawiaj poszkodowanego samego.</li>
        </ul>
        <div class="tip">💡 Schemat: <b>Bezpiecznie? → Reaguje? → 112 → Drogi oddechowe → Oddech 10 s</b>. Oddycha – na bok. Nie oddycha – uciskaj.</div>`,
      infographicNote: 'Czytaj od góry: kolejne kroki oceny, a na dole – co robisz po ocenie oddechu.',
      infographic: {
        type: 'kroki',
        items: [
          { icon: '⚠️', title: 'Bezpiecznie?' },
          { icon: '👋', title: 'Reaguje?', text: 'potrząśnij za ramiona, zapytaj głośno: „Czy mnie słyszysz?”' },
          { icon: '📞', title: 'Nie reaguje → 112', text: 'zawołaj pomoc, włącz głośnik' },
          { icon: '🙆', title: 'Drogi oddechowe', text: 'czoło–żuchwa: odegnij głowę do tyłu, unieś żuchwę' },
          { icon: '👀', title: 'Oddech – do 10 s', text: 'widzę, słyszę, czuję' },
        ],
        bottom: { title: 'Wynik oceny oddechu', kolor: 4, items: ['oddycha prawidłowo → pozycja boczna bezpieczna, okrycie, kontrola oddechu', 'nie oddycha lub nieprawidłowo → RKO'] },
      },
      flashcards: [
        ['Objawy utraty przytomności', 'Brak reakcji na głos i dotyk, oczy zamknięte, brak kontaktu, wiotkość'],
        ['Omdlenie', 'Krótkotrwała utrata przytomności (kilka–kilkadziesiąt sekund)'],
        ['Jak ocenić przytomność?', 'Delikatnie potrząsnąć za ramiona i głośno zapytać, np. „Czy mnie słyszysz?”'],
        ['Czego nie robimy przy ocenie przytomności?', 'Nie klepiemy po twarzy, nie polewamy wodą, nie zadajemy bólu'],
        ['Dlaczego nieprzytomny może się udusić?', 'Wiotki język opada na tylną ścianę gardła i zamyka drogi oddechowe'],
        ['Rękoczyn czoło–żuchwa', 'Dłoń na czole, palce pod brodą – odgięcie głowy do tyłu i uniesienie żuchwy'],
        ['Ocena oddechu', 'Widzę – słyszę – czuję, nie dłużej niż 10 sekund'],
        ['Oddycha prawidłowo – co dalej?', 'Pozycja boczna bezpieczna, okrycie, regularna kontrola oddechu, 112'],
        ['Nie oddycha lub oddycha nieprawidłowo – co dalej?', 'Resuscytacja krążeniowo-oddechowa (RKO) i AED'],
        ['Cechy pozycji bocznej bezpiecznej', 'Stabilna, drożne drogi oddechowe, chroni przed zachłyśnięciem'],
        ['Na który bok układamy kobietę w widocznej ciąży?', 'Na lewy'],
        ['Komfort termiczny', 'Okrycie kocem lub folią NRC i odizolowanie od zimnego podłoża'],
      ],
      questions: [
        { id: '7fahlt', q: 'Jak prawidłowo ocenić przytomność poszkodowanego?', options: ['polać twarz zimną wodą i głośno zapytać „Czy mnie słyszysz?”', 'delikatnie potrząsnąć za ramiona i głośno zapytać „Czy mnie słyszysz?”', 'uszczypnąć w ucho i sprawdzić, czy poszkodowany otworzy oczy', 'klepnąć mocno w policzek i głośno zapytać „Co się stało?”'], answer: 1, explain: 'Stosujemy bodziec głosowy i dotyk. Klepanie, polewanie wodą czy ból mogą wywołać odruchową reakcję obronną.' },
        { id: '2mdj5u', q: 'Co jest najczęstszą przyczyną niedrożności dróg oddechowych u osoby nieprzytomnej leżącej na plecach?', options: ['zbyt szybkie oddychanie przez otwarte usta', 'skurcz mięśni szyi zaciskający tchawicę', 'język opadający na tylną ścianę gardła', 'zbyt wąska tchawica od urodzenia'], answer: 2, explain: 'Nieprzytomny wiotczeje, także język, który opada i zamyka gardło.' },
        { id: '8d8fgy', q: 'Na czym polega rękoczyn czoło–żuchwa?', options: ['na odgięciu głowy do tyłu (dłoń na czole) i uniesieniu żuchwy', 'na podłożeniu poduszki pod głowę i ułożeniu jej prosto', 'na uciskaniu klatki piersiowej w tempie 100–120 na minutę', 'na pochyleniu głowy do przodu i przyciśnięciu brody do klatki'], answer: 0, explain: 'Odgięcie głowy i uniesienie żuchwy odsuwa język od tylnej ściany gardła.' },
        { id: 'pc1ae1', q: 'Jak długo oceniasz oddech u osoby nieprzytomnej?', options: ['do przyjazdu karetki', 'dokładnie 1 minutę', '3 sekundy', 'nie dłużej niż 10 sekund'], answer: 3, explain: 'Ocena trwa do 10 sekund, żeby nie opóźniać ewentualnej resuscytacji.' },
        { id: 'ksw875', q: 'Którymi zmysłami oceniasz oddech?', options: ['tylko wzrokiem, patrząc na klatkę', 'wzrokiem, słuchem i dotykiem', 'smakiem, węchem i dotykiem', 'słuchem i węchem'], answer: 1, explain: 'Widzisz ruchy klatki piersiowej, słyszysz oddech i czujesz go na policzku.' },
        { id: '209jjv', q: 'Poszkodowany nie reaguje, ale oddycha prawidłowo. Co robisz?', options: ['układasz go w pozycji bocznej bezpiecznej i kontrolujesz oddech', 'zaczynasz uciskać klatkę piersiową w tempie 100–120 uciśnięć na minutę', 'sadzasz go na krześle i co chwilę sprawdzasz, czy się ocknął', 'podajesz mu wodę do picia i zostawiasz na plecach'], answer: 0, explain: 'Pozycja boczna chroni drogi oddechowe. Nieprzytomnemu nie podajemy nic do picia.' },
        { id: 'a9ha7e', q: 'Poszkodowany nie reaguje i tylko co jakiś czas rzadko „westchnie”. Jak ocenisz ten oddech?', options: ['jako prawidłowy – można odejść', 'jako prawidłowy – pozycja boczna', 'jako nieprawidłowy – trzeba zacząć RKO', 'jako objaw snu'], answer: 2, explain: 'Rzadkie westchnięcia (oddech agonalny) to nie jest prawidłowy oddech – traktujemy to jak zatrzymanie krążenia.' },
        { id: 'dgt3fz', q: 'Która cecha NIE opisuje pozycji bocznej bezpiecznej?', options: ['jest stabilna', 'utrzymuje drożne drogi oddechowe', 'chroni przed zachłyśnięciem śliną lub wymiocinami', 'pozwala prowadzić uciśnięcia klatki piersiowej'], answer: 3, explain: 'Uciśnięcia wykonuje się u poszkodowanego leżącego na plecach na twardym podłożu.' },
        { id: '05s4vb', q: 'Na który bok układasz nieprzytomną kobietę w widocznej ciąży?', options: ['na prawy', 'na lewy', 'na brzuch', 'nie ma to znaczenia'], answer: 1, explain: 'Kobietę w widocznej ciąży układamy na lewym boku.' },
        { id: 'rsqqtl', q: 'Po co okrywasz osobę nieprzytomną kocem lub folią NRC?', options: ['żeby nikt jej nie widział i nie robił zdjęć poszkodowanemu', 'żeby nie mogła się ruszać i nie zmieniła pozycji bocznej', 'żeby zapewnić jej komfort termiczny, bo szybko się wychładza', 'żeby ułatwić ponowną ocenę oddechu i uciskanie klatki piersiowej'], answer: 2, explain: 'Wychłodzenie pogarsza stan poszkodowanego. Odizoluj go też od zimnego podłoża.' },
        { id: 'q9wwz3', q: 'Poszkodowany leży w pozycji bocznej. Co robisz do przyjazdu pomocy?', options: ['regularnie sprawdzam jego oddech i nie zostawiam go samego', 'odchodzę, bo w pozycji bocznej jest już całkiem bezpieczny', 'co chwilę próbuję go posadzić, żeby szybciej odzyskał przytomność', 'podaję mu tabletki przeciwbólowe i coś ciepłego do picia'], answer: 0, explain: 'Stan może się pogorszyć – regularnie ponawiasz ocenę oddechu. Gdy przestanie prawidłowo oddychać, zaczynasz RKO.' },
        { id: 'wahpkr', q: 'Prawda czy fałsz?\nPrzed ułożeniem poszkodowanego w pozycji bocznej zdejmujemy mu okulary.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Okulary mogłyby się złamać i zranić twarz.' },
      ],
    },
    {
      id: 'rko',
      name: 'Resuscytacja (RKO) i defibrylator AED',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. III „Podstawy pierwszej pomocy”, wym. 10 (nagłe zatrzymanie krążenia, resuscytacja wysokiej jakości, uniwersalny algorytm, uciski i oddechy samodzielnie i w parze, AED). Parametry według wytycznych Europejskiej Rady Resuscytacji 2025 (podstawowe zabiegi resuscytacyjne u dorosłych) i e-materiałów zpe.gov.pl.',
      theory: `
        <h3>Nagłe zatrzymanie krążenia (NZK)</h3>
        <p><b>NZK</b> – serce przestaje skutecznie pompować krew, więc krew z tlenem nie dociera do mózgu i innych narządów. Przyczyny to m.in. <b>zawał serca</b>, zaburzenia rytmu serca, zatrucie, zator.</p>
        <p><b>Oznaki</b>: poszkodowany <b>nie reaguje</b> i <b>nie oddycha</b> albo <b>oddycha nieprawidłowo</b> (np. rzadkie westchnięcia). Wtedy przyjmujesz, że doszło do NZK.</p>
        <p>Szybka resuscytacja przez świadków może <b>dwu-, a nawet trzykrotnie</b> zwiększyć szanse przeżycia.</p>
        <h3>Uniwersalny algorytm (dorosły)</h3>
        <ol>
          <li>Upewnij się, że jest <b>bezpiecznie</b>.</li>
          <li>Sprawdź, czy <b>reaguje</b>. Nie reaguje → <b>dzwoń 112</b> (głośnik!) i poproś kogoś o przyniesienie <b>AED</b>.</li>
          <li><b>Udrożnij drogi oddechowe</b> i oceń <b>oddech</b> (do 10 s).</li>
          <li>Brak prawidłowego oddechu → <b>30 uciśnięć</b> klatki piersiowej.</li>
          <li><b>2 oddechy ratownicze</b>.</li>
          <li>Kontynuuj <b>30 : 2</b>. Gdy przyniosą AED – <b>włącz go i wykonuj polecenia</b>.</li>
        </ol>
        <h3>Resuscytacja wysokiej jakości</h3>
        <table>
          <tr><th>Element</th><th>Jak</th></tr>
          <tr><td>miejsce</td><td><b>środek klatki piersiowej</b> (dolna połowa mostka), poszkodowany na plecach na <b>twardym</b> podłożu</td></tr>
          <tr><td>głębokość</td><td><b>5–6 cm</b> (co najmniej 5, nie więcej niż 6)</td></tr>
          <tr><td>tempo</td><td><b>100–120 uciśnięć na minutę</b></td></tr>
          <tr><td>odprężenie</td><td>po każdym uciśnięciu klatka <b>w pełni wraca</b> – nie opieraj się na niej</td></tr>
          <tr><td>ręce</td><td>dłoń na dłoni, palce splecione, <b>ramiona wyprostowane</b>, pionowo nad klatką</td></tr>
          <tr><td>przerwy</td><td>jak najkrótsze (np. na 2 oddechy)</td></tr>
          <tr><td>oddech ratowniczy</td><td>udrożnij drogi oddechowe, zaciśnij nos, wdmuchuj powietrze ok. <b>1 sekundę</b>, aż klatka zacznie się unosić; używaj maseczki lub ustnika</td></tr>
        </table>
        <p>Jeśli nie umiesz lub nie możesz wykonać oddechów – rób <b>same uciśnięcia</b> bez przerw. To dużo lepsze niż nic.</p>
        <h3>Dwóch ratowników</h3>
        <p>Jeden uciska, drugi wykonuje oddechy i obsługuje AED. <b>Zmieniajcie się co ok. 2 minuty</b>, bo zmęczenie obniża jakość uciśnięć. Uciskający głośno liczy, żeby zmiana była płynna.</p>
        <h3>Kiedy przerwać RKO</h3>
        <ul>
          <li>gdy <b>przyjadą służby</b> i przejmą działania,</li>
          <li>gdy poszkodowany zacznie <b>reagować</b> – poruszy się, otworzy oczy, zacznie normalnie oddychać,</li>
          <li>gdy <b>opadniesz z sił</b> i nikt cię nie zmieni,</li>
          <li>gdy pojawi się <b>zagrożenie</b> dla ciebie (np. ogień).</li>
        </ul>
        <h3>AED – automatyczny defibrylator zewnętrzny</h3>
        <ul>
          <li>Urządzenie <b>samo analizuje rytm serca</b> i, jeśli trzeba, poleca wykonać wyładowanie elektryczne (defibrylację). Podaje polecenia głosem – obsłuży je każdy.</li>
          <li>Elektrody naklej na nagą klatkę: jedną <b>pod prawym obojczykiem</b>, drugą <b>pod lewą pachą</b> (na boku) – jak na rysunku na elektrodach.</li>
          <li>Podczas analizy i wyładowania <b>nikt nie dotyka</b> poszkodowanego („Odsuń się!”).</li>
          <li>Po wyładowaniu – <b>od razu wracasz do uciśnięć</b>. AED co 2 minuty ponownie analizuje rytm.</li>
          <li>AED znajdziesz m.in. na dworcach, lotniskach, w galeriach handlowych, urzędach i szkołach. Im szybciej użyty, tym większa szansa na przeżycie.</li>
        </ul>
        <div class="tip">💡 100–120 na minutę to prawie <b>2 uciśnięcia na sekundę</b> – licz na głos. <b>30 : 2, 5–6 cm, 100–120</b> – trzy liczby, które ratują życie.</div>`,
      infographicNote: 'Czytaj od góry: uniwersalny algorytm u dorosłego, na dole – jak uciskać.',
      infographic: {
        type: 'kroki',
        items: [
          { icon: '⚠️', title: 'Bezpiecznie?' },
          { icon: '👋', title: 'Reaguje?', text: 'nie reaguje → dzwoń 112 (głośnik!), poproś o przyniesienie AED' },
          { icon: '👀', title: 'Drogi oddechowe i oddech', text: 'udrożnij, oceń oddech – do 10 s' },
          { title: '30 uciśnięć', text: 'brak prawidłowego oddechu → uciskaj klatkę piersiową', kolor: 2 },
          { title: '2 oddechy ratownicze', kolor: 2 },
          { title: 'Kontynuuj 30 : 2', text: 'gdy przyniosą AED – włącz go i wykonuj polecenia', kolor: 3 },
        ],
        bottom: { title: '💡 Resuscytacja wysokiej jakości', kolor: 4, items: ['środek klatki piersiowej (dolna połowa mostka)', 'głębokość 5–6 cm', 'tempo 100–120 uciśnięć na minutę', 'po każdym uciśnięciu klatka w pełni wraca', 'bez oddechów? Same uciśnięcia, bez przerw'] },
      },
      flashcards: [
        ['Nagłe zatrzymanie krążenia (NZK)', 'Serce przestaje skutecznie pompować krew – brak dopływu tlenu do mózgu'],
        ['Oznaki NZK', 'Nie reaguje i nie oddycha lub oddycha nieprawidłowo'],
        ['Stosunek uciśnięć do oddechów u dorosłego', '30 : 2'],
        ['Głębokość uciśnięć u dorosłego', '5–6 cm'],
        ['Tempo uciśnięć', '100–120 na minutę'],
        ['Gdzie kładziesz ręce przy uciśnięciach?', 'Na środku klatki piersiowej (dolna połowa mostka)'],
        ['Oddech ratowniczy', 'Ok. 1 sekundy, aż klatka piersiowa zacznie się unosić; z maseczką lub ustnikiem'],
        ['Co, jeśli nie chcesz lub nie możesz robić oddechów?', 'Prowadzisz same uciśnięcia, bez przerw'],
        ['Co ile zmieniają się ratownicy przy uciśnięciach?', 'Co ok. 2 minuty'],
        ['AED', 'Automatyczny defibrylator zewnętrzny – analizuje rytm serca i w razie potrzeby wykonuje defibrylację'],
        ['Gdzie przyklejasz elektrody AED?', 'Pod prawym obojczykiem i pod lewą pachą (na boku klatki)'],
        ['Kiedy przerywasz RKO?', 'Gdy przejmą służby, poszkodowany zacznie reagować i normalnie oddychać, opadniesz z sił lub pojawi się zagrożenie'],
      ],
      questions: [
        { id: 'uabq5i', q: 'Jaki jest stosunek uciśnięć klatki piersiowej do oddechów ratowniczych u dorosłego?', options: ['15 : 2', '2 : 30', '5 : 1', '30 : 2'], answer: 3, explain: '30 uciśnięć, potem 2 oddechy ratownicze – i tak w kółko.' },
        { id: 'jzmnuk', q: 'Na jaką głębokość uciskasz klatkę piersiową dorosłego?', options: ['1–2 cm', '5–6 cm', '3–4 cm', '8–10 cm'], answer: 1, explain: 'Co najmniej 5 cm, ale nie więcej niż 6 cm.' },
        { id: 'gzw285', q: 'W jakim tempie uciskasz klatkę piersiową?', options: ['100–120 na minutę', '60–80 na minutę', '150–180 na minutę', '30 na minutę'], answer: 0, explain: 'Tempo 100–120 uciśnięć na minutę.' },
        { id: '6tm5t0', q: 'Gdzie kładziesz ręce podczas uciskania klatki piersiowej?', options: ['na brzuchu, między pępkiem a końcem mostka', 'na lewej stronie klatki piersiowej, bezpośrednio nad sercem', 'na środku klatki piersiowej (dolna połowa mostka)', 'na szyi'], answer: 2, explain: 'Nasada dłoni na środku klatki piersiowej, druga dłoń na niej, palce splecione.' },
        { id: 'p5wktg', q: 'Które oznaki każą ci rozpocząć RKO?', options: ['poszkodowany jest przytomny, ale blady', 'poszkodowany skarży się na ból głowy', 'poszkodowany kaszle', 'poszkodowany nie reaguje i nie oddycha prawidłowo'], answer: 3, explain: 'Brak reakcji + brak prawidłowego oddechu = przyjmujesz nagłe zatrzymanie krążenia.' },
        { id: 'z1sqdm', q: 'Co jest ważne po każdym uciśnięciu?', options: ['opieranie się całym ciężarem na klatce', 'pełne odprężenie klatki piersiowej', 'sprawdzenie tętna', 'pauza na 5 sekund'], answer: 1, explain: 'Klatka musi wrócić do wyjściowego kształtu – wtedy serce wypełnia się krwią.' },
        { id: 'zynbco', q: 'Nie masz maseczki i nie chcesz wykonywać oddechów ratowniczych. Co robisz?', options: ['nic nie robię i czekam na przyjazd karetki', 'robię same oddechy ratownicze przez chusteczkę', 'prowadzę same uciśnięcia klatki piersiowej bez przerw', 'sprawdzam co minutę, czy poszkodowany zaczął oddychać'], answer: 2, explain: 'Same uciśnięcia są dużo lepsze niż brak jakiejkolwiek pomocy.' },
        { id: 'bxpd45', q: 'Dwóch ratowników prowadzi RKO. Co ile powinni się zmieniać przy uciśnięciach?', options: ['co ok. 2 minuty', 'co 10 minut', 'co 30 sekund', 'nie powinni się zmieniać'], answer: 0, explain: 'Po ok. 2 minutach uciskający się męczy i uciśnięcia stają się płytsze.' },
        { id: 'bb1kvr', q: 'Co robisz, gdy AED analizuje rytm serca?', options: ['uciskasz dalej', 'odklejasz elektrody', 'robisz oddechy ratownicze', 'nikt nie dotyka poszkodowanego'], answer: 3, explain: 'Ruch i dotyk zakłócają analizę, a podczas wyładowania mogłyby porazić ratownika.' },
        { id: 's9zd87', q: 'Gdzie przyklejasz elektrody AED u dorosłego?', options: ['obie na plecach, między łopatkami', 'pod prawym obojczykiem i pod lewą pachą', 'na obu ramionach, nad łokciami', 'jedną na brzuchu, drugą na szyi'], answer: 1, explain: 'Takie ułożenie sprawia, że prąd przepływa przez serce. Rysunek na elektrodach pokazuje, gdzie je przykleić.' },
        { id: 'mbg7yq', q: 'AED wykonał wyładowanie. Co dalej?', options: ['natychmiast wracasz do uciśnięć klatki piersiowej', 'odłączasz AED', 'czekasz 5 minut', 'układasz poszkodowanego w pozycji bocznej'], answer: 0, explain: 'Po wyładowaniu od razu wznawiasz RKO; AED po 2 minutach znów przeanalizuje rytm.' },
        { id: 'gao9r7', q: 'Kiedy możesz przerwać resuscytację?', options: ['po 30 sekundach, jeśli poszkodowany nie zaczął oddychać', 'gdy podejdzie pierwszy przechodzień i zacznie się wszystkiemu przyglądać', 'gdy poszkodowany zacznie normalnie oddychać lub przejmą go służby', 'gdy minie 5 minut, nawet jeśli nikt cię nie zmienił'], answer: 2, explain: 'Także gdy opadniesz z sił lub zagrozi ci niebezpieczeństwo.' },
        { id: 'ksxq7q', q: 'Prawda czy fałsz?\nAED może bezpiecznie obsłużyć osoba bez wykształcenia medycznego, bo urządzenie podaje polecenia głosem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. AED sam analizuje rytm serca i prowadzi ratownika krok po kroku.' },
      ],
      tasks: [
        {
          id: 'ys8urh',
          points: 3,
          q: 'Na boisku szkolnym dorosły mężczyzna nagle upada. Nie reaguje na głos i potrząsanie, a w ciągu 10 sekund nie widzisz, nie słyszysz i nie czujesz prawidłowego oddechu. W szkole jest AED. Opisz, co robisz.',
          steps: [
            'Sprawdzam, czy jest bezpiecznie; wołam o pomoc.',
            'Dzwonię pod 112 (włączam głośnik) i proszę kogoś o natychmiastowe przyniesienie AED.',
            'Rozpoczynam RKO: ręce na środku klatki piersiowej, uciśnięcia na głębokość 5–6 cm w tempie 100–120/min, 30 uciśnięć i 2 oddechy ratownicze (albo same uciśnięcia).',
            'Gdy przyniosą AED – włączam go, przyklejam elektrody (pod prawym obojczykiem i pod lewą pachą), wykonuję polecenia; podczas analizy i wyładowania nikt nie dotyka poszkodowanego, potem od razu wracam do uciśnięć.',
          ],
          answer: 'Bezpieczeństwo → 112 i prośba o AED → RKO 30 : 2 (5–6 cm, 100–120/min) → AED według poleceń urządzenia, bez dotykania poszkodowanego podczas analizy i wyładowania; RKO do przyjazdu służb lub powrotu oddechu.',
          scoring: [
            '1 pkt – wezwanie pomocy (112) i zorganizowanie AED.',
            '1 pkt – rozpoczęcie RKO z poprawnym stosunkiem 30 : 2 (lub same uciśnięcia) i co najmniej jednym poprawnym parametrem uciśnięć (miejsce, głębokość albo tempo).',
            '1 pkt – poprawne użycie AED (wykonywanie poleceń, nikt nie dotyka podczas analizy/wyładowania, powrót do RKO).',
          ],
        },
      ],
    },
    {
      id: 'zadlawienie',
      name: 'Zadławienie',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. III „Podstawy pierwszej pomocy”, wym. 11 (pojęcie i mechanizm zadławienia, schemat postępowania, rękoczyny ratunkowe, zapobieganie zadławieniom u małych dzieci). Postępowanie według wytycznych ERC 2025 i e-materiałów zpe.gov.pl.',
      theory: `
        <h3>Co to jest zadławienie</h3>
        <p><b>Zadławienie</b> – do dróg oddechowych dostaje się <b>ciało obce</b> (najczęściej kawałek jedzenia) i częściowo albo całkowicie blokuje przepływ powietrza. Sprzyjają mu: pośpiech, mówienie i śmiech przy jedzeniu, połykanie dużych, niepogryzionych kęsów, jedzenie w biegu lub w nienaturalnej pozycji.</p>
        <table>
          <tr><th></th><th>Łagodna niedrożność</th><th>Ciężka niedrożność</th></tr>
          <tr><td>objawy</td><td>poszkodowany <b>mówi</b>, <b>kaszle</b> skutecznie, oddycha</td><td><b>nie może mówić</b>, kaszel słaby lub żaden, nie może oddychać, często chwyta się za szyję</td></tr>
          <tr><td>co robisz</td><td><b>zachęcasz do kaszlu</b> i obserwujesz – nie uderzasz!</td><td><b>rękoczyny ratunkowe</b></td></tr>
        </table>
        <p>Kaszel wytwarza wysokie ciśnienie w drogach oddechowych i najskuteczniej wypycha ciało obce. Uderzanie przy skutecznym kaszlu mogłoby przesunąć ciało obce głębiej.</p>
        <h3>Schemat – osoba dorosła, przytomna, ciężka niedrożność</h3>
        <ol>
          <li><b>5 uderzeń w plecy</b>: stań z boku, trochę za poszkodowanym, podtrzymaj klatkę piersiową jedną ręką, pochyl poszkodowanego do przodu. Nasadą drugiej dłoni uderz <b>między łopatki</b> do 5 razy.</li>
          <li>Nie pomogło? <b>5 uciśnięć nadbrzusza</b> (<b>rękoczyn Heimlicha</b>): stań za poszkodowanym, obejmij go, pięść połóż między pępkiem a końcem mostka, drugą dłonią chwyć pięść i <b>pociągnij mocno do siebie i ku górze</b> – do 5 razy.</li>
          <li>Nadal nie pomogło? <b>Na zmianę</b> 5 uderzeń w plecy i 5 uciśnięć nadbrzusza.</li>
          <li>Poszkodowany <b>traci przytomność</b> → ostrożnie połóż go na ziemi, <b>dzwoń 112</b> i rozpocznij <b>RKO</b>.</li>
        </ol>
        <ul>
          <li>Ciało obce widać w ustach? Usuń je. Nie wkładaj jednak palców do gardła „na ślepo”.</li>
          <li><b>Po uciśnięciach nadbrzusza</b> poszkodowany zawsze powinien zostać zbadany przez <b>lekarza</b> – mogą powstać obrażenia wewnętrzne.</li>
          <li>Nadbrzusza <b>nie uciskamy</b> u <b>kobiet w ciąży</b> i <b>niemowląt</b> (u niemowląt obowiązuje inny sposób postępowania).</li>
          <li>Gdy jesteś sam i się dławisz – możesz wykonać uciśnięcie nadbrzusza samemu, mocno opierając się nadbrzuszem o oparcie krzesła.</li>
        </ul>
        <h3>Jak chronić małe dzieci</h3>
        <ul>
          <li>Drobne przedmioty (monety, guziki, baterie, klocki) trzymaj <b>poza zasięgiem</b> dziecka.</li>
          <li>Kupuj zabawki <b>dostosowane do wieku</b> (oznaczenia na opakowaniu, np. 3+), nie dawaj maluchom zabawek starszego rodzeństwa.</li>
          <li>Pokarm <b>kroj na małe kawałki</b> (np. winogrona); uważaj na orzechy, twarde cukierki, żelki, popcorn.</li>
          <li>Dziecko je <b>na siedząco i pod opieką dorosłego</b> – nie w biegu, nie przy zabawie.</li>
        </ul>
        <div class="tip">💡 Kaszle – <b>nie przeszkadzaj</b>. Nie kaszle – <b>5 w plecy, 5 w brzuch</b>. Traci przytomność – <b>112 i RKO</b>.</div>`,
      infographicNote: 'Czytaj od góry: najpierw oceń kaszel, potem kolejne rękoczyny przy ciężkiej niedrożności.',
      infographic: {
        type: 'kroki',
        top: { title: '😮‍💨 Mówi i kaszle?', text: 'łagodna niedrożność: zachęcaj do kaszlu, obserwuj – nie uderzaj!', kolor: 3 },
        items: [
          { title: 'Nie mówi, nie oddycha', text: 'ciężka niedrożność – kaszel słaby lub żaden', kolor: 2 },
          { title: '5 uderzeń w plecy', text: 'pochyl do przodu; nasadą dłoni między łopatki, do 5 razy' },
          { title: '5 uciśnięć nadbrzusza', text: 'rękoczyn Heimlicha: pięść między pępkiem a mostkiem, do siebie i ku górze' },
          { title: 'Na zmianę 5 + 5', text: 'uderzenia w plecy i uciśnięcia nadbrzusza' },
          { title: 'Traci przytomność', text: 'połóż na ziemi, dzwoń 112, rozpocznij RKO', kolor: 2 },
        ],
        bottom: { title: '⚠️ Pamiętaj', kolor: 4, items: ['po uciśnięciach nadbrzusza – do lekarza', 'nie uciskaj nadbrzusza u kobiet w ciąży i niemowląt'] },
      },
      flashcards: [
        ['Zadławienie', 'Zablokowanie dróg oddechowych przez ciało obce (np. kawałek jedzenia)'],
        ['Objawy łagodnej niedrożności', 'Poszkodowany mówi, skutecznie kaszle, oddycha'],
        ['Objawy ciężkiej niedrożności', 'Nie może mówić ani oddychać, kaszel nieskuteczny, chwyta się za szyję'],
        ['Postępowanie przy łagodnej niedrożności', 'Zachęcać do kaszlu i obserwować'],
        ['Pierwszy rękoczyn przy ciężkiej niedrożności', 'Do 5 uderzeń nasadą dłoni między łopatki, poszkodowany pochylony do przodu'],
        ['Rękoczyn Heimlicha', 'Do 5 uciśnięć nadbrzusza: pięść między pępkiem a mostkiem, pociągnięcie do siebie i ku górze'],
        ['Rękoczyny nie pomagają – co dalej?', 'Na zmianę 5 uderzeń w plecy i 5 uciśnięć nadbrzusza'],
        ['Dławiący się traci przytomność', 'Połóż na ziemi, 112, rozpocznij RKO'],
        ['U kogo nie uciskamy nadbrzusza?', 'U kobiet w ciąży i u niemowląt'],
        ['Po uciśnięciach nadbrzusza', 'Poszkodowany musi zostać zbadany przez lekarza (ryzyko obrażeń wewnętrznych)'],
        ['Zapobieganie zadławieniom u małych dzieci', 'Drobne przedmioty poza zasięgiem, zabawki według wieku, krojenie pokarmu, jedzenie na siedząco pod opieką'],
      ],
      questions: [
        { id: 'mczd3n', q: 'Kolega zakrztusił się kanapką, ale głośno kaszle i mówi. Co robisz?', options: ['uderzasz go mocno w plecy', 'wykonujesz rękoczyn Heimlicha', 'podajesz mu szybko dużo wody do picia', 'zachęcasz go do kaszlu i obserwujesz'], answer: 3, explain: 'Przy łagodnej niedrożności najskuteczniejszy jest kaszel. Uderzanie mogłoby przesunąć ciało obce głębiej.' },
        { id: 'w4lqvq', q: 'Który objaw świadczy o ciężkiej niedrożności dróg oddechowych?', options: ['poszkodowany mówi, głośno i skutecznie kaszle', 'poszkodowany nie może mówić ani oddychać', 'poszkodowany mówi i prosi o wodę', 'poszkodowany ma czkawkę'], answer: 1, explain: 'Brak możliwości mówienia i oddychania, słaby lub żaden kaszel – to ciężka niedrożność.' },
        { id: '3hqxzq', q: 'Od czego zaczynasz pomoc przytomnej dorosłej osobie z ciężką niedrożnością dróg oddechowych?', options: ['od wkładania palców do gardła', 'od 30 uciśnięć klatki piersiowej', 'od 5 uderzeń między łopatki', 'od położenia jej na plecach'], answer: 2, explain: 'Najpierw do 5 uderzeń w okolicę międzyłopatkową, przy poszkodowanym pochylonym do przodu.' },
        { id: 'dw6n5q', q: 'Uderzenia w plecy nie pomogły. Co teraz?', options: ['do 5 uciśnięć nadbrzusza (rękoczyn Heimlicha)', 'czekasz na karetkę', 'kładziesz poszkodowanego w pozycji bocznej', 'dajesz mu chleb, żeby „przepchnął”'], answer: 0, explain: 'Po 5 uderzeniach w plecy – do 5 uciśnięć nadbrzusza; potem na zmianę.' },
        { id: '451xgo', q: 'Gdzie kładziesz pięść, wykonując uciśnięcia nadbrzusza?', options: ['na mostku', 'na dole brzucha, nisko pod pępkiem', 'na plecach', 'między pępkiem a końcem mostka'], answer: 3, explain: 'Pięść w nadbrzuszu – między pępkiem a końcem mostka; ciągniesz do siebie i ku górze.' },
        { id: '2s9rjo', q: 'Dławiąca się osoba straciła przytomność. Co robisz?', options: ['dalej uciskasz nadbrzusze na stojąco', 'kładziesz ją na ziemi, dzwonisz 112 i zaczynasz RKO', 'polewasz ją wodą, żeby odzyskała przytomność', 'sadzasz ją na krześle i uderzasz w plecy'], answer: 1, explain: 'U nieprzytomnego rozpoczynasz resuscytację – uciśnięcia klatki mogą też wypchnąć ciało obce.' },
        { id: 'xfkoyh', q: 'U kogo NIE wykonuje się uciśnięć nadbrzusza?', options: ['u kobiet w ciąży i niemowląt', 'u dorosłych, sprawnych mężczyzn', 'u nastolatków w wieku szkolnym', 'u osób starszych'], answer: 0, explain: 'U kobiet w ciąży i niemowląt uciśnięcia nadbrzusza mogłyby spowodować poważne obrażenia.' },
        { id: 'z4v42o', q: 'Dlaczego po wykonaniu uciśnięć nadbrzusza poszkodowany powinien pójść do lekarza?', options: ['bo musi dostać zwolnienie', 'bo lekarz musi sprawdzić gardło na zapalenie', 'bo mogą powstać obrażenia wewnętrzne', 'to nie jest potrzebne'], answer: 2, explain: 'Silne uciśnięcia mogą uszkodzić narządy wewnętrzne – konieczna jest kontrola lekarska.' },
        { id: '9zvwh4', q: 'Które zachowanie sprzyja zadławieniu?', options: ['jedzenie na siedząco', 'dokładne gryzienie', 'krojenie jedzenia na małe kawałki', 'rozmawianie i śmiech z pełnymi ustami'], answer: 3, explain: 'Mówienie i śmiech przy jedzeniu oraz pośpiech sprzyjają zadławieniom.' },
        { id: 'dxwi64', q: 'Który sposób zapobiega zadławieniom u małego dziecka?', options: ['dawanie mu do zabawy monet, guzików i małych klocków', 'krojenie winogron na małe kawałki i jedzenie pod opieką dorosłego', 'pozwalanie mu jeść w biegu i podczas zabawy z innymi', 'dawanie mu całych orzechów i twardych cukierków do ssania'], answer: 1, explain: 'Małe dzieci mają wąskie drogi oddechowe i słabo gryzą – pokarm trzeba rozdrabniać, a drobne przedmioty chować.' },
        { id: 's5dwi3', q: 'Jesteś sam i się dławisz. Co możesz zrobić?', options: ['położyć się na plecach i spokojnie czekać, aż minie', 'wypić szybko dużo wody, żeby przepchnąć ciało obce do żołądka', 'uciskać nadbrzusze, opierając się mocno o oparcie krzesła', 'zacząć biegać, żeby wstrząsy wypchnęły ciało obce'], answer: 2, explain: 'Rękoczyn można wykonać samemu – nadbrzuszem o twardą krawędź, np. oparcie krzesła.' },
        { id: '72od3d', q: 'Prawda czy fałsz?\nCiało obce trzeba za wszelką cenę wyjąć palcami z gardła, nawet jeśli go nie widać.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Usuwasz tylko to, co widać w ustach. Szukanie „na ślepo” może wepchnąć ciało obce głębiej.' },
      ],
    },
    {
      id: 'rany',
      name: 'Rany, krwotoki i apteczka',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. III „Podstawy pierwszej pomocy”, wym. 12 (wyposażenie apteczki domowej, samochodowej i turystycznej), 13a–e (rana, krwotok, opatrunek osłaniający i uciskowy, zdejmowanie rękawiczek) i 15a (rodzaje krwotoków, tamowanie dłonią i opatrunkiem uciskowym). Wytyczne ERC 2025/2021 (pierwsza pomoc) i e-materiały zpe.gov.pl.',
      theory: `
        <h3>Rana</h3>
        <p><b>Rana</b> – uszkodzenie (przerwanie ciągłości) skóry, czasem także głębszych tkanek: mięśni, nerwów, naczyń. Rodzaje: otarcie, rana cięta, kłuta, szarpana, tłuczona, kąsana, postrzałowa. Dla pierwszej pomocy ważniejsze od rodzaju jest to, <b>jak bardzo krwawi</b>.</p>
        <h3>Krwawienie czy krwotok?</h3>
        <ul>
          <li><b>Krwawienie</b> – uszkodzone drobne naczynia, krew wypływa powoli, zwykle samo ustaje.</li>
          <li><b>Krwotok</b> – uszkodzona <b>tętnica</b> lub <b>duża żyła</b>; krew wypływa szybko i obficie. Utrata ok. <b>1/3 krwi</b> zagraża życiu – krwotok trzeba <b>natychmiast</b> zatamować.</li>
        </ul>
        <table>
          <tr><th></th><th>Krwotok tętniczy</th><th>Krwotok żylny</th></tr>
          <tr><td>kolor krwi</td><td><b>jasnoczerwona</b> (dużo tlenu)</td><td><b>ciemnoczerwona</b></td></tr>
          <tr><td>wypływ</td><td><b>pulsujący</b>, tryska w rytmie serca</td><td><b>równy, jednostajny</b> strumień</td></tr>
        </table>
        <p>Krwotok <b>zewnętrzny</b> rozpoznasz, bo widać dużo krwi: szybko przesiąka przez ubranie, tworzy kałużę. Krwotok <b>wewnętrzny</b> jest niewidoczny – zdradzają go objawy ogólne: bladość, zimny pot, szybkie tętno, osłabienie, niepokój (to też objawy <b>wstrząsu</b>).</p>
        <h3>Opatrunek osłaniający – mała rana</h3>
        <ol>
          <li>Załóż <b>rękawiczki</b>.</li>
          <li>Przemyj ranę chłodną, czystą bieżącą wodą.</li>
          <li>Przyłóż <b>jałową gazę</b> (w ostateczności czystą bawełnianą tkaninę).</li>
          <li>Zabandażuj – <b>nie za ciasno</b>.</li>
        </ol>
        <h3>Tamowanie krwotoku</h3>
        <ol>
          <li>Rękawiczki. Poszkodowany siada lub kładzie się.</li>
          <li><b>Natychmiast uciśnij ranę dłonią</b> przez gazę (w ostateczności przez czysty materiał). Krwotoku <b>nie przemywamy</b>.</li>
          <li><b>Opatrunek uciskowy</b>: na ranę jałowa gaza, na nią – dokładnie nad raną – <b>wałek</b> (np. zwinięty bandaż), całość <b>mocno zabandażuj</b>.</li>
          <li>Opatrunek <b>przesiąka</b>? <b>Nie zdejmuj go</b> – dołóż kolejną warstwę i uciśnij mocniej.</li>
          <li>Dzwoń <b>112</b>, okryj poszkodowanego, obserwuj go.</li>
        </ol>
        <ul>
          <li><b>Rana głowy</b>: tylko opatrunek <b>osłaniający</b>, bez silnego ucisku – może być złamana kość czaszki.</li>
          <li><b>Opaska uciskowa</b> – ostateczność, gdy ucisk nie zatrzymuje krwotoku z kończyny (np. amputacja); zakłada się ją powyżej rany i <b>zapisuje godzinę</b> założenia. Tego uczy się na kursie.</li>
        </ul>
        <h3>Apteczka</h3>
        <p>Oznaczenie: <b>biały krzyż na zielonym tle</b>.</p>
        <table>
          <tr><th>Apteczka</th><th>Co powinno w niej być</th></tr>
          <tr><td><b>domowa</b></td><td>rękawiczki jednorazowe (kilka par), maseczka do oddechów, folia NRC, chusta trójkątna, bandaże i opaski elastyczne, gaza jałowa, plastry z opatrunkiem, plaster na szpuli, siatka opatrunkowa, nożyczki z zaokrąglonymi końcami</td></tr>
          <tr><td><b>samochodowa</b></td><td>opatrunki indywidualne i kompresy, bandaże, chusty trójkątne, koc ratunkowy, rękawiczki, ustnik do oddechów, nożyczki, instrukcja z numerami alarmowymi</td></tr>
          <tr><td><b>turystyczna</b></td><td>to, co w domowej (w mniejszej ilości), plus plastry na odciski, opatrunki na skręcenia i złamania (chusta, opaska elastyczna), folia NRC, zimą ogrzewacze chemiczne</td></tr>
        </table>
        <p><b>Nie</b> wkładamy do apteczki <b>waty ani ligniny</b> (zostawiają strzępki w ranie) ani ostrych przedmiotów, np. agrafek.</p>
        <div class="tip">💡 Krwotok: <b>ręka – gaza – wałek – bandaż</b>. Przesiąka? <b>Dokładaj, nie zdejmuj.</b></div>`,
      infographicNote: 'Czytaj od góry: tak po kolei tamujesz krwotok.',
      infographic: {
        type: 'kroki',
        top: { title: '🩸 Krwotok – działaj natychmiast', text: 'utrata ok. 1/3 krwi zagraża życiu', kolor: 2 },
        items: [
          { icon: '🧤', title: 'Rękawiczki', text: 'poszkodowany siada lub kładzie się' },
          { icon: '✋', title: 'Uciśnij ranę dłonią', text: 'natychmiast, przez gazę; krwotoku nie przemywasz' },
          { icon: '🩹', title: 'Opatrunek uciskowy', text: 'gaza, dokładnie nad raną wałek, mocno zabandażuj' },
          { icon: '🔁', title: 'Przesiąka?', text: 'nie zdejmuj – dołóż warstwę, uciśnij mocniej' },
          { icon: '📞', title: 'Dzwoń 112', text: 'okryj poszkodowanego, obserwuj go' },
        ],
        bottom: { title: '⚠️ Rana głowy', text: 'tylko opatrunek osłaniający, bez silnego ucisku', kolor: 4 },
      },
      flashcards: [
        ['Rana', 'Przerwanie ciągłości skóry, czasem także głębszych tkanek'],
        ['Krwotok', 'Szybki, obfity wypływ krwi z uszkodzonej tętnicy lub dużej żyły'],
        ['Krwotok tętniczy', 'Krew jasnoczerwona, wypływa pulsująco (tryska)'],
        ['Krwotok żylny', 'Krew ciemnoczerwona, wypływa równym strumieniem'],
        ['Objawy dużej utraty krwi (wstrząsu)', 'Bladość, zimny pot, szybkie tętno, osłabienie, niepokój'],
        ['Opatrunek osłaniający', 'Jałowa gaza + bandaż (nie za ciasno) – chroni ranę przed zakażeniem'],
        ['Pierwszy krok przy krwotoku', 'Natychmiastowy ucisk rany dłonią przez gazę (w rękawiczkach)'],
        ['Opatrunek uciskowy', 'Gaza na ranę, na nią wałek dokładnie nad raną, mocne zabandażowanie'],
        ['Opatrunek przesiąka krwią', 'Nie zdejmujesz go – dokładasz kolejną warstwę i uciskasz mocniej'],
        ['Rana głowy', 'Opatrunek osłaniający, bez silnego ucisku'],
        ['Oznaczenie apteczki', 'Biały krzyż na zielonym tle'],
        ['Czego nie wkładamy do apteczki?', 'Waty i ligniny oraz ostrych przedmiotów (np. agrafek)'],
      ],
      questions: [
        { id: 'x2cpda', q: 'Krew z rany na udzie jest jasnoczerwona i wypływa pulsująco. Jaki to krwotok?', options: ['tętniczy', 'żylny', 'wewnętrzny', 'to tylko otarcie'], answer: 0, explain: 'Krew tętnicza jest jasnoczerwona i wypływa w rytmie pracy serca.' },
        { id: 'vprylw', q: 'Jak wypływa krew przy krwotoku żylnym?', options: ['tryska pulsacyjnie, jest jasnoczerwona', 'wypływa tylko kroplami', 'nie wypływa wcale', 'wypływa równym strumieniem, jest ciemnoczerwona'], answer: 3, explain: 'Krew żylna jest ciemnoczerwona i płynie jednostajnie.' },
        { id: '0v38bc', q: 'Co robisz najpierw, widząc silny krwotok z przedramienia (masz rękawiczki)?', options: ['przemywasz ranę dokładnie wodą utlenioną', 'od razu mocno uciskasz ranę dłonią przez gazę', 'czekasz, aż krew sama zakrzepnie', 'smarujesz ranę maścią i przyklejasz na nią plaster'], answer: 1, explain: 'Bezpośredni ucisk to najszybszy sposób zatamowania krwotoku. Krwotoku nie przemywamy.' },
        { id: 'fzmjkl', q: 'Z czego składa się opatrunek uciskowy?', options: ['z gazy na ranie, wałka nad raną i mocno zawiązanego bandaża', 'z samego plastra przyklejonego mocno na brzegi rany', 'z waty na ranie, ligniny i luźno zawiązanego bandaża', 'z lodu owiniętego folią i przyłożonego obok rany'], answer: 0, explain: 'Wałek dociska krwawiące naczynia, a bandaż utrzymuje ucisk.' },
        { id: 'lag9wj', q: 'Opatrunek uciskowy przesiąkł krwią. Co robisz?', options: ['zdejmujesz go i zakładasz nowy, czysty opatrunek', 'luzujesz bandaż, żeby krew swobodnie odpłynęła', 'dokładasz kolejną warstwę i zwiększasz ucisk', 'polewasz go wodą, żeby zmyć krew'], answer: 2, explain: 'Zdjęcie opatrunku zerwałoby tworzący się skrzep – dokładasz warstwy i uciskasz mocniej.' },
        { id: 'jvkcue', q: 'Jaki opatrunek zakładasz na krwawiącą ranę głowy?', options: ['opaskę uciskową', 'żaden', 'bardzo ciasny opatrunek uciskowy', 'opatrunek osłaniający bez silnego ucisku'], answer: 3, explain: 'Przy urazie głowy może być złamana kość czaszki – silny ucisk mógłby zaszkodzić.' },
        { id: 'cq7xpk', q: 'Który objaw może świadczyć o krwotoku wewnętrznym (wstrząsie)?', options: ['zaczerwieniona, ciepła skóra', 'bladość, zimny pot i szybkie tętno', 'wysoka gorączka', 'swędzenie skóry'], answer: 1, explain: 'Krwotoku wewnętrznego nie widać – zdradzają go objawy ogólne: bladość, zimny pot, przyspieszone tętno, osłabienie, niepokój.' },
        { id: '179iwp', q: 'Co robisz z małą, czystą raną na palcu?', options: ['zakładasz opaskę uciskową powyżej rany i zapisujesz godzinę', 'zasypujesz ją ziemią albo piaskiem, żeby zatamować krew', 'przemywasz czystą wodą i zakładasz opatrunek osłaniający lub plaster', 'zostawiasz bez opatrunku na tydzień, żeby szybciej się zagoiła'], answer: 2, explain: 'Drobną ranę przemywasz i osłaniasz przed zabrudzeniem i zakażeniem.' },
        { id: 'qk87k2', q: 'Czego NIE powinno być w apteczce pierwszej pomocy?', options: ['waty', 'gazy jałowej', 'rękawiczek jednorazowych', 'folii NRC'], answer: 0, explain: 'Wata zostawia strzępki w ranie, które trudno potem usunąć.' },
        { id: 'yvmnjm', q: 'Jak oznacza się miejsce, gdzie jest apteczka?', options: ['czarnym wykrzyknikiem w żółtym trójkącie', 'niebieską literą A w białym kole', 'żółtym kołem', 'białym krzyżem na zielonym tle'], answer: 3, explain: 'Jednolite oznaczenie (biały krzyż na zielonym tle) pomaga szybko znaleźć apteczkę.' },
        { id: 'x2zvme', q: 'Co warto zabrać do apteczki turystycznej, oprócz podstawowych opatrunków?', options: ['agrafki i żyletki do cięcia bandaży', 'plastry na odciski i folię NRC', 'ligninę i watę do przemywania ran', 'nic więcej'], answer: 1, explain: 'Na wędrówce przydają się plastry na odciski, folia NRC (chroni przed wychłodzeniem), opatrunki na skręcenia; zimą ogrzewacze chemiczne.' },
        { id: 'epq8rh', q: 'Prawda czy fałsz?\nOpaskę uciskową stosuje się jako pierwszy krok przy każdej krwawiącej ranie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Najpierw ucisk bezpośredni i opatrunek uciskowy. Opaska to ostateczność przy krwotoku z kończyny, którego nie da się inaczej zatamować.' },
      ],
      tasks: [
        {
          id: 'ximlbi',
          points: 3,
          q: 'Kolega przeciął przedramię o szybę. Z rany szybko wypływa dużo ciemnoczerwonej krwi. Masz apteczkę. Opisz, jak udzielisz pomocy.',
          steps: [
            'Zakładam rękawiczki z apteczki (ochrona przed kontaktem z krwią); sadzam lub kładę kolegę.',
            'Natychmiast uciskam ranę dłonią przez jałową gazę.',
            'Zakładam opatrunek uciskowy: gaza na ranę, na nią wałek ze zwiniętego bandaża dokładnie nad raną, mocno bandażuję. Gdy przesiąka – dokładam kolejną warstwę i uciskam mocniej, nie zdejmuję.',
            'Wzywam pomoc (112 lub dorosły), okrywam kolegę i obserwuję, czy nie pojawiają się objawy wstrząsu (bladość, zimny pot).',
          ],
          answer: 'Rękawiczki → ucisk rany dłonią przez gazę → opatrunek uciskowy (gaza, wałek, mocny bandaż; przy przesiąkaniu dokładam warstwy) → wezwanie pomocy, okrycie, obserwacja.',
          scoring: [
            '1 pkt – zabezpieczenie się rękawiczkami i natychmiastowy ucisk rany.',
            '1 pkt – poprawny opatrunek uciskowy (gaza, wałek nad raną, mocne zabandażowanie) i prawidłowe postępowanie przy przesiąkaniu.',
            '1 pkt – wezwanie pomocy oraz obserwacja/okrycie poszkodowanego.',
          ],
        },
      ],
    },
    {
      id: 'urazy',
      name: 'Złamania, zwichnięcia, skręcenia i oparzenia',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. III „Podstawy pierwszej pomocy”, wym. 13f–h (złamanie, skręcenie, zwichnięcie, unieruchamianie doraźne, zapobieganie urazom) i 14 (oparzenie, postępowanie przy oparzeniu termicznym, chłodzenie, zapobieganie oparzeniom). Chłodzenie oparzeń według ILCOR/ERC 2025 (pierwsza pomoc) i e-materiałów zpe.gov.pl.',
      theory: `
        <h3>Urazy kości i stawów</h3>
        <table>
          <tr><th>Uraz</th><th>Co się dzieje</th></tr>
          <tr><td><b>złamanie</b></td><td>przerwanie ciągłości kości; <b>zamknięte</b> (skóra cała) lub <b>otwarte</b> (rana, czasem widać odłamy kości)</td></tr>
          <tr><td><b>zwichnięcie</b></td><td>powierzchnie stawowe kości <b>przemieszczają się</b> względem siebie; uszkodzona torebka stawowa i więzadła</td></tr>
          <tr><td><b>skręcenie</b></td><td>uraz więzadeł i torebki stawowej, ale kości <b>wracają na swoje miejsce</b></td></tr>
        </table>
        <p><b>Objawy</b> są podobne: ból nasilający się przy ruchu, obrzęk, siniak, zniekształcenie, ograniczona ruchomość. Bez zdjęcia RTG nie odróżnisz tych urazów – dlatego w pierwszej pomocy <b>każdy traktujesz jak złamanie</b>.</p>
        <h3>Unieruchomienie doraźne</h3>
        <ul>
          <li>Unieruchom kończynę <b>w zastanej pozycji</b>. <b>Nie prostuj</b> i <b>nie nastawiaj</b>.</li>
          <li>Złamana <b>kość</b> → unieruchom ją razem z <b>dwoma sąsiednimi stawami</b>.</li>
          <li>Uszkodzony <b>staw</b> → unieruchom go razem z <b>dwiema sąsiednimi kośćmi</b>.</li>
          <li><b>Ręka</b>: chusta trójkątna (temblak) albo podwinięta koszulka czy sweter. <b>Noga</b>: np. przymocuj do zdrowej nogi (bez siłowania).</li>
          <li>Złamanie <b>otwarte</b>: najpierw <b>jałowy opatrunek</b> na ranę, potem unieruchomienie.</li>
          <li>Zdejmij pierścionki i bransoletki, zanim pojawi się obrzęk. Okryj poszkodowanego, wezwij pomoc lub zawieź do lekarza.</li>
          <li>Przy skręceniu zimny okład (przez materiał) zmniejsza ból i obrzęk.</li>
        </ul>
        <p><b>Zapobieganie urazom</b>: rozgrzewka przed sportem, kask i ochraniacze, odpowiednie buty; w domu – dobre oświetlenie, stabilna drabina zamiast krzesła; w pracy – przestrzeganie zasad BHP i środki ochrony.</p>
        <h3>Oparzenia</h3>
        <p><b>Oparzenie</b> – uszkodzenie skóry (a czasem głębszych tkanek) przez czynnik: <b>termiczny</b> (ogień, gorący płyn, para), <b>chemiczny</b> (kwasy, zasady), <b>elektryczny</b>, promieniowanie (np. słońce).</p>
        <table>
          <tr><th>Stopień</th><th>Objawy</th></tr>
          <tr><td>I</td><td>zaczerwienienie i ból (tylko naskórek)</td></tr>
          <tr><td>II</td><td>pęcherze, obrzęk, silny ból</td></tr>
          <tr><td>III</td><td>skóra biaława lub zwęglona, <b>brak czucia</b> w tym miejscu</td></tr>
        </table>
        <h3>Oparzenie termiczne – co robisz</h3>
        <ol>
          <li>Zadbaj o swoje bezpieczeństwo i <b>przerwij działanie czynnika</b> (odsuń od ognia, zdejmij ubranie oblane wrzątkiem, jeśli nie przywarło).</li>
          <li><b>Chłodź od razu</b> chłodną (nie lodowatą) <b>bieżącą wodą przez ok. 20 minut</b>.</li>
          <li>W trakcie chłodzenia zdejmij pierścionki, zegarek i uciskające ubranie – zanim pojawi się obrzęk. <b>Nie odrywaj</b> ubrania przyklejonego do skóry.</li>
          <li>Przykryj luźno jałowym opatrunkiem (najlepiej hydrożelowym).</li>
          <li>Oparzenia II i III stopnia, chemiczne, elektryczne i rozległe – <b>do lekarza / 112</b>. Przy rozległych oparzeniach uważaj, by nie wychłodzić poszkodowanego.</li>
        </ol>
        <p><b>Nie wolno</b>: lodu, masła, oleju, przypadkowych maści, spirytusu, przekłuwania pęcherzy.</p>
        <h3>Zapobieganie oparzeniom (szczególnie u małych dzieci)</h3>
        <ul>
          <li>Rączki garnków odwracaj do ściany, gotuj na tylnych palnikach.</li>
          <li>Gorące napoje i czajnik stawiaj poza zasięgiem dziecka; nie trzymaj dziecka na rękach, pijąc gorącą herbatę.</li>
          <li>Sprawdzaj temperaturę wody do kąpieli.</li>
          <li>Zapałki i zapalniczki chowaj; zabezpieczaj gniazdka elektryczne.</li>
          <li>Latem – krem z filtrem UV i nakrycie głowy.</li>
        </ul>
        <div class="tip">💡 Złamanie: „<b>nie ruszaj, unieruchom, wezwij</b>”. Oparzenie: „<b>woda – 20 minut</b>”, nigdy lód ani masło.</div>`,
      infographicNote: 'Dwie gałęzie: urazy kości i stawów oraz oparzenie – w każdej czynności od góry po kolei.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        top: { title: 'Złamanie, zwichnięcie, skręcenie?', text: 'bez RTG nie odróżnisz – każdy uraz traktuj jak złamanie', kolor: 5 },
        root: { title: 'Pierwsza pomoc przy urazach' },
        branches: [
          { title: '🦴 Kości i stawy', kolor: 1, items: ['nie prostuj, nie nastawiaj', 'unieruchom w zastanej pozycji', 'kość + 2 sąsiednie stawy', 'staw + 2 sąsiednie kości', 'złamanie otwarte: najpierw jałowy opatrunek', 'okryj, wezwij pomoc lub zawieź do lekarza'] },
          { title: '🔥 Oparzenie termiczne', kolor: 2, items: ['przerwij działanie czynnika', 'chłodź bieżącą wodą ok. 20 minut', 'w trakcie chłodzenia zdejmij pierścionki, zegarek', 'przykryj luźno jałowym opatrunkiem', 'II i III stopień, chemiczne, elektryczne, rozległe – lekarz / 112'] },
        ],
        bottom: { title: '🚫 Przy oparzeniu nie wolno', text: 'lód, masło, olej, maści, spirytus, przekłuwanie pęcherzy', kolor: 2 },
      },
      flashcards: [
        ['Złamanie', 'Przerwanie ciągłości kości; zamknięte lub otwarte'],
        ['Zwichnięcie', 'Przemieszczenie powierzchni stawowych kości z uszkodzeniem torebki i więzadeł'],
        ['Skręcenie', 'Uraz więzadeł i torebki stawowej; kości wracają na miejsce'],
        ['Objawy urazów kości i stawów', 'Ból przy ruchu, obrzęk, siniak, zniekształcenie, ograniczona ruchomość'],
        ['Zasada unieruchamiania kości', 'Kość + dwa sąsiednie stawy'],
        ['Zasada unieruchamiania stawu', 'Staw + dwie sąsiednie kości'],
        ['Czego nie robisz przy złamaniu?', 'Nie prostujesz i nie nastawiasz kończyny'],
        ['Złamanie otwarte – kolejność', 'Najpierw jałowy opatrunek na ranę, potem unieruchomienie'],
        ['Oparzenie', 'Uszkodzenie skóry i tkanek przez czynnik termiczny, chemiczny, elektryczny lub promieniowanie'],
        ['Chłodzenie oparzenia termicznego', 'Chłodną bieżącą wodą przez ok. 20 minut, jak najszybciej'],
        ['Czego nie robisz przy oparzeniu?', 'Lód, masło, olej, maści, spirytus, przekłuwanie pęcherzy'],
        ['Oparzenie III stopnia – charakterystyczny objaw', 'Skóra biaława lub zwęglona, brak czucia'],
      ],
      questions: [
        { id: 'kr1gtl', q: 'Czym różni się zwichnięcie od skręcenia?', options: ['przy zwichnięciu kości zostają przemieszczone, przy skręceniu wracają na miejsce', 'niczym – to dwie nazwy tego samego urazu stawu', 'zwichnięcie dotyczy kości, a skręcenie samej skóry', 'przy skręceniu kości zostają przemieszczone, przy zwichnięciu wracają na miejsce'], answer: 0, explain: 'W obu przypadkach uszkodzone są więzadła i torebka stawowa, ale tylko przy zwichnięciu kości pozostają przemieszczone.' },
        { id: 'sf9j8f', q: 'Koleżanka upadła na rękę, przedramię jest spuchnięte i zniekształcone. Co robisz?', options: ['próbujesz wyprostować rękę i dopiero potem ją unieruchamiasz', 'każesz jej poruszać ręką, żeby sprawdzić, czy boli', 'unieruchamiasz rękę w zastanej pozycji (np. temblakiem) i wzywasz pomoc', 'masujesz miejsce urazu, żeby zmniejszyć obrzęk'], answer: 2, explain: 'Kończyny nie prostujemy i nie nastawiamy – unieruchamiamy ją tak, jak jest ułożona.' },
        { id: '2w0awm', q: 'Jak unieruchamiasz złamaną kość przedramienia?', options: ['samo miejsce złamania, bez nadgarstka i łokcia', 'palce i nadgarstek, a łokieć zostawiasz wolny', 'kość razem z jednym sąsiednim stawem (nadgarstkiem)', 'kość razem z dwoma sąsiednimi stawami (nadgarstkiem i łokciem)'], answer: 3, explain: 'Zasada: przy złamaniu kości unieruchamiamy ją z dwoma sąsiednimi stawami.' },
        { id: 'vo1mv8', q: 'Jak unieruchamiasz uszkodzony staw kolanowy?', options: ['samą rzepkę, a udo i podudzie zostawiasz wolne', 'staw i dwie sąsiednie kości (udową i kości podudzia)', 'stopę i staw skokowy', 'nie unieruchamiasz go, bo stawu nie da się unieruchomić'], answer: 1, explain: 'Przy urazie stawu unieruchamiamy go razem z dwiema sąsiednimi kośćmi.' },
        { id: 'x5p4c5', q: 'Dlaczego w pierwszej pomocy każdy uraz kości lub stawu traktujesz jak złamanie?', options: ['bo złamanie jest jedynym urazem, który wymaga pomocy lekarza', 'bo tak jest szybciej i nie trzeba wzywać pomocy', 'bo bez RTG nie da się pewnie odróżnić złamania, zwichnięcia i skręcenia', 'bo złamanie nie boli, więc trudno je zauważyć bez badania'], answer: 2, explain: 'Objawy są podobne, a unieruchomienie chroni przed pogłębieniem urazu w każdym przypadku.' },
        { id: '97ln0j', q: 'Z rany na podudziu wystaje odłam kości. Co robisz najpierw?', options: ['zakładasz jałowy opatrunek na ranę, potem unieruchamiasz', 'wciskasz kość na miejsce, potem zakładasz opatrunek', 'przemywasz ranę alkoholem i zostawiasz ją odkrytą', 'prostujesz nogę, potem zakładasz opatrunek na ranę'], answer: 0, explain: 'Złamanie otwarte: osłoń ranę jałowym opatrunkiem, unieruchom kończynę i wezwij pomoc.' },
        { id: 'jwvjrm', q: 'Jak chłodzisz oparzoną wrzątkiem dłoń?', options: ['lodem prosto z zamrażarki przez 2 minuty', 'polewasz spirytusem', 'smarujesz masłem', 'chłodną bieżącą wodą przez ok. 20 minut'], answer: 3, explain: 'Szybkie i długie chłodzenie wodą ogranicza pogłębianie się oparzenia. Lód może dodatkowo uszkodzić tkanki.' },
        { id: 'ceyjll', q: 'Którego z działań NIE wykonujesz przy oparzeniu?', options: ['zdjęcie pierścionka przed pojawieniem się obrzęku', 'przekłucie pęcherzy', 'chłodzenie bieżącą wodą', 'przykrycie jałowym opatrunkiem'], answer: 1, explain: 'Pęcherzy nie przekłuwamy – chronią ranę przed zakażeniem.' },
        { id: 'zq2cq0', q: 'Po co zdejmujesz biżuterię z oparzonej lub złamanej kończyny?', options: ['bo po pojawieniu się obrzęku może uciskać i będzie trudna do zdjęcia', 'żeby jej nie zgubić ani nie porysować w czasie akcji', 'bo przeszkadza w ocenie oddechu i przytomności', 'to niepotrzebne – biżuterię zdejmuje się dopiero w szpitalu'], answer: 0, explain: 'Obrzęk narasta szybko – pierścionek czy bransoletka mogą zacząć uciskać.' },
        { id: 'qup48s', q: 'Oparzona skóra jest biaława, a poszkodowany nie czuje w tym miejscu dotyku. Jaki to stopień oparzenia?', options: ['I', 'II', 'III', 'to nie jest oparzenie'], answer: 2, explain: 'W oparzeniu III stopnia zniszczona jest cała grubość skóry wraz z zakończeniami nerwowymi.' },
        { id: 'ceb4tb', q: 'Który sposób zapobiega oparzeniom małych dzieci w kuchni?', options: ['zostawianie zapałek na stole', 'stawianie gorącej herbaty na brzegu stołu', 'trzymanie dziecka na rękach przy gotowaniu', 'odwracanie rączek garnków do ściany'], answer: 3, explain: 'Dziecko nie zdoła wtedy pociągnąć garnka z gorącą zawartością.' },
        { id: '7dkv5o', q: 'Prawda czy fałsz?\nUbranie, które przywarło do oparzonej skóry, trzeba szybko oderwać.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Przywartego ubrania nie odrywamy – powstałaby otwarta rana. Usuwają je lekarze.' },
      ],
    },
    {
      id: 'obronnosc',
      name: 'Postawy obronne: teren, cyberbezpieczeństwo, broń',
      basis: 'Dz.U. 2024 poz. 996, edukacja dla bezpieczeństwa (kl. VIII), dz. IV „Kształtowanie postaw obronnych”: 1. Terenoznawstwo (wym. 1–2), 2. Cyberbezpieczeństwo w wymiarze wojskowym (wym. 1–2), 3. Przygotowanie do szkolenia strzeleckiego (wym. 1–4). Definicja cyberbezpieczeństwa: ustawa o krajowym systemie cyberbezpieczeństwa (Dz.U. 2026 poz. 20) art. 2 pkt 4; Wojska Obrony Cyberprzestrzeni: ustawa o obronie Ojczyzny art. 15 ust. 4. Zasady obchodzenia się z bronią – e-materiały EDB na zpe.gov.pl.',
      theory: `
        <h3>1. Terenoznawstwo – orientacja w terenie</h3>
        <ul>
          <li><b>Kompas</b> – igła magnetyczna wskazuje <b>północ magnetyczną</b>.</li>
          <li><b>Busola</b> – kompas z podziałką; pozwala wyznaczyć i utrzymać <b>azymut</b>.</li>
          <li><b>Azymut</b> – kąt między kierunkiem północy a kierunkiem marszu, mierzony <b>zgodnie z ruchem wskazówek zegara</b> (np. wschód = 90°, południe = 180°).</li>
          <li><b>GPS</b> – nawigacja satelitarna (np. w telefonie). Wada: może się rozładować bateria albo zniknąć sygnał – dlatego warto umieć korzystać z mapy i kompasu.</li>
        </ul>
        <table>
          <tr><th>Północ</th><th>Co ją wyznacza</th></tr>
          <tr><td>geograficzna</td><td>południki zbiegające się na biegunie</td></tr>
          <tr><td>magnetyczna</td><td>ziemskie pole magnetyczne (wskazuje ją igła kompasu)</td></tr>
          <tr><td>topograficzna</td><td>pionowe linie siatki na mapie</td></tr>
        </table>
        <p><b>Orientowanie mapy</b>: połóż kompas na mapie i obracaj mapę, aż kierunek północy na mapie (południki) zgodzi się z igłą. Teraz kierunki na mapie i w terenie są takie same. Swoje położenie ustalasz według <b>charakterystycznych przedmiotów terenowych</b> (wieża, kościół, most, skrzyżowanie dróg, skraj lasu, rzeka). Bez przyrządów pomoże Słońce – w samo południe słoneczne jest u nas na <b>południu</b>.</p>
        <p><b>Mapy</b>: <b>topograficzna</b> (wielkoskalowa, bardzo szczegółowa – najlepsza do orientacji w terenie), turystyczna i drogowa (tematyczne), ogólnogeograficzna, polityczna. Im większa skala (np. 1:25 000), tym więcej szczegółów.</p>
        <h3>2. Cyberbezpieczeństwo w wymiarze wojskowym</h3>
        <p><b>Cyberbezpieczeństwo</b> (definicja z ustawy) – <b>odporność systemów informacyjnych</b> na działania naruszające poufność, integralność, dostępność i autentyczność danych lub usług.</p>
        <ul>
          <li>Cyberprzestrzeń to dziś – obok lądu, morza, powietrza i kosmosu – jeszcze jedno pole walki. Celem ataków bywa <b>infrastruktura krytyczna</b> (energetyka, łączność, transport) i systemy wojskowe; ataki są elementem <b>wojny hybrydowej</b>.</li>
          <li>W Siłach Zbrojnych działają <b>Wojska Obrony Cyberprzestrzeni</b> – chronią i aktywnie bronią zasobów cyberprzestrzeni ważnych dla wojska.</li>
          <li>W krajowym systemie cyberbezpieczeństwa incydenty obsługują zespoły <b>CSIRT MON</b> (Minister Obrony Narodowej), <b>CSIRT NASK</b> i <b>CSIRT GOV</b> (szef ABW).</li>
          <li><b>Twoja rola</b>: silne, różne hasła i weryfikacja dwuetapowa, aktualizacje, nieklikanie w podejrzane linki, sprawdzanie informacji w oficjalnych źródłach. Nie publikuj w sieci zdjęć ani informacji o ruchach wojsk czy obiektach wojskowych – mogą pomóc przeciwnikowi.</li>
        </ul>
        <h3>3. Broń strzelecka – bezpieczeństwo</h3>
        <ol>
          <li>Traktuj <b>każdą broń jak załadowaną</b> – nawet gdy „na pewno” jest pusta.</li>
          <li>Lufę kieruj <b>zawsze w bezpiecznym kierunku</b> (ziemia, tarcza) – nigdy na ludzi i zwierzęta.</li>
          <li><b>Palec poza spustem</b>, dopóki nie zdecydujesz się oddać strzału.</li>
          <li>Sprawdzaj, czy broń jest rozładowana; przechowuj ją rozładowaną i zabezpieczoną (sejf, szafa na broń). Na strzelnicy wykonuj <b>polecenia prowadzącego</b>.</li>
        </ol>
        <p><b>Części broni</b> (np. pistolet VIS 100): <b>lufa</b>, <b>zamek</b>, szkielet z chwytem, <b>język spustowy</b> osłonięty <b>kabłąkiem</b>, <b>magazynek</b>, przyrządy celownicze: <b>muszka</b> (z przodu) i <b>szczerbinka</b> (bliżej oka).</p>
        <p><b>Postawy strzeleckie</b>: <b>stojąca</b>, <b>klęcząca</b> (niska lub wysoka), <b>leżąca</b> (najbardziej obniża sylwetkę).</p>
        <p><b>Celny strzał</b>: zgraj przyrządy – <b>muszka pośrodku wycięcia szczerbinki</b>; uspokój oddech; ściągaj spust <b>płynnie</b>, jednym ruchem, środkiem opuszki palca – strzał nie powinien cię zaskoczyć.</p>
        <div class="tip">💡 Trzy żelazne zasady: <b>„zawsze załadowana – lufa w bezpieczną stronę – palec poza spustem”</b>.</div>`,
      infographicNote: 'Trzy gałęzie to trzy części działu – w każdej najważniejsze zasady.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { title: 'Postawy obronne' },
        branches: [
          { title: '🧭 Orientacja w terenie', kolor: 1, items: ['azymut – kąt od północy do kierunku marszu, zgodnie z ruchem wskazówek zegara', 'orientowanie mapy: północ na mapie zgodna z igłą kompasu', 'do orientacji najlepsza mapa topograficzna'] },
          { title: '💻 Cyberbezpieczeństwo', kolor: 5, items: ['odporność systemów informacyjnych na naruszenia danych i usług', 'w wojsku: Wojska Obrony Cyberprzestrzeni', 'ty: silne hasła, aktualizacje, bez podejrzanych linków'] },
          { title: '🎯 Broń – trzy zasady', kolor: 2, items: ['traktuj każdą broń jak załadowaną', 'lufa zawsze w bezpieczną stronę', 'palec poza spustem'] },
        ],
        bottom: { title: '💡 Celny strzał', text: 'muszka pośrodku wycięcia szczerbinki; spust ściągaj płynnie', kolor: 3 },
      },
      flashcards: [
        ['Kompas', 'Przyrząd z igłą magnetyczną wskazującą północ magnetyczną'],
        ['Busola', 'Kompas z podziałką kątową – służy m.in. do wyznaczania azymutu'],
        ['Azymut', 'Kąt między kierunkiem północy a kierunkiem marszu, mierzony zgodnie z ruchem wskazówek zegara'],
        ['Trzy północe', 'Geograficzna (południki), magnetyczna (igła kompasu), topograficzna (siatka na mapie)'],
        ['Orientowanie mapy', 'Obracanie mapy, aż jej północ zgodzi się z igłą kompasu'],
        ['Mapa najlepsza do orientacji w terenie', 'Topograficzna – wielkoskalowa, bardzo szczegółowa'],
        ['Cyberbezpieczeństwo (ustawa)', 'Odporność systemów informacyjnych na działania naruszające poufność, integralność, dostępność i autentyczność danych'],
        ['Wojska Obrony Cyberprzestrzeni', 'Komponent Sił Zbrojnych chroniący i broniący cyberprzestrzeni ważnej dla wojska'],
        ['CSIRT MON', 'Zespół reagowania na incydenty komputerowe prowadzony przez Ministra Obrony Narodowej'],
        ['Trzy zasady bezpieczeństwa z bronią', 'Traktuj jak załadowaną; lufa w bezpieczną stronę; palec poza spustem'],
        ['Postawy strzeleckie', 'Stojąca, klęcząca (niska/wysoka), leżąca'],
        ['Zgranie przyrządów celowniczych', 'Muszka pośrodku wycięcia szczerbinki'],
      ],
      questions: [
        { id: 'lpa1e9', q: 'Co to jest azymut?', options: ['odległość do celu w metrach, mierzona krokami', 'kąt między kierunkiem północy a kierunkiem marszu', 'wysokość punktu nad poziomem morza', 'kąt między kierunkiem południa a kierunkiem wiatru'], answer: 1, explain: 'Azymut mierzy się zgodnie z ruchem wskazówek zegara i wyznacza busolą; np. kierunek na wschód to azymut 90°.' },
        { id: 'wr6qoy', q: 'Jaki azymut ma kierunek na południe?', options: ['90°', '270°', '180°', '360°'], answer: 2, explain: 'Północ 0°, wschód 90°, południe 180°, zachód 270° – liczymy zgodnie z ruchem wskazówek zegara.' },
        { id: 'zwta3j', q: 'Którą północ wskazuje igła kompasu?', options: ['magnetyczną', 'geograficzną', 'topograficzną', 'żadną'], answer: 0, explain: 'Igła ustawia się zgodnie z ziemskim polem magnetycznym.' },
        { id: 'l3re6e', q: 'Jak zorientować mapę za pomocą kompasu?', options: ['skierować górny brzeg mapy w stronę Słońca', 'położyć mapę napisami do siebie', 'obracać kompas na mapie, aż igła wskaże jej dolny, południowy brzeg', 'obracać mapę, aż jej północ zgodzi się z igłą kompasu'], answer: 3, explain: 'Zorientowana mapa ma te same kierunki co teren.' },
        { id: '3z5izt', q: 'Która mapa jest najlepsza do orientowania się w terenie?', options: ['mapa polityczna świata', 'mapa topograficzna', 'mapa klimatyczna Europy', 'mapa gęstości zaludnienia'], answer: 1, explain: 'Mapa topograficzna jest wielkoskalowa i pokazuje szczegóły terenu: drogi, budynki, lasy, rzeźbę.' },
        { id: 'qx0jto', q: 'Jaka jest wada nawigacji GPS w telefonie w czasie wędrówki?', options: ['może zabraknąć baterii lub sygnału', 'zawsze pokazuje zły kierunek', 'działa tylko w nocy', 'nie pokazuje dróg'], answer: 0, explain: 'Dlatego warto umieć korzystać z mapy i kompasu.' },
        { id: '8hwk7a', q: 'Czym jest cyberbezpieczeństwo według ustawy?', options: ['szybkością działania systemów informacyjnych i dostępnością szerokopasmowego internetu w całym kraju', 'liczbą komputerów, serwerów i kont w mediach społecznościowych zarejestrowanych w urzędach', 'odpornością systemów informacyjnych na działania naruszające poufność, integralność, dostępność i autentyczność danych', 'całkowitym zakazem korzystania z internetu przez obywateli w czasie zagrożenia państwa'], answer: 2, explain: 'To definicja z ustawy o krajowym systemie cyberbezpieczeństwa.' },
        { id: '3bjcgu', q: 'Która formacja w Siłach Zbrojnych RP odpowiada za obronę cyberprzestrzeni?', options: ['Wojska Obrony Terytorialnej', 'Wojska Specjalne', 'Żandarmeria Wojskowa', 'Wojska Obrony Cyberprzestrzeni'], answer: 3, explain: 'Wojska Obrony Cyberprzestrzeni to specjalistyczny komponent Sił Zbrojnych.' },
        { id: 'gu24z2', q: 'Które zachowanie w sieci wzmacnia bezpieczeństwo?', options: ['jedno hasło do wszystkich kont', 'weryfikacja dwuetapowa i aktualizowanie urządzeń', 'publikowanie w sieci zdjęć przejazdu kolumny wojskowej', 'klikanie w linki z nieznanych SMS-ów'], answer: 1, explain: 'Silne, różne hasła, weryfikacja dwuetapowa i aktualizacje utrudniają włamania. Informacje o ruchach wojsk mogą pomóc przeciwnikowi.' },
        { id: 'wr0zlp', q: 'Która zasada obchodzenia się z bronią jest najważniejsza?', options: ['broń rozładowaną można kierować na ludzi', 'palec zawsze trzymaj na spuście', 'każdą broń traktuj tak, jakby była załadowana', 'lufę kieruj w stronę kolegi, żeby widział, co robisz'], answer: 2, explain: 'Do tego: lufa zawsze w bezpiecznym kierunku i palec poza spustem do momentu decyzji o strzale.' },
        { id: 'd63tfl', q: 'Jak prawidłowo zgrać przyrządy celownicze?', options: ['muszka pośrodku wycięcia szczerbinki', 'szczerbinka przed muszką', 'muszka nad szczerbinką', 'patrzeć tylko na cel, bez przyrządów'], answer: 0, explain: 'Muszka (z przodu broni) ma się znaleźć pośrodku wycięcia szczerbinki (bliżej oka).' },
        { id: 'qdd9ro', q: 'Która postawa strzelecka najbardziej obniża sylwetkę strzelca?', options: ['stojąca', 'klęcząca wysoka', 'klęcząca niska', 'leżąca'], answer: 3, explain: 'Postawa leżąca najbardziej obniża sylwetkę strzelca.' },
        { id: 'ca5nd7', q: 'Prawda czy fałsz?\nJęzyk spustowy jest chroniony przed przypadkowym naciśnięciem przez kabłąk spustowy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Kabłąk to wygięta osłona języka spustowego.' },
      ],
    },
  ],
});
