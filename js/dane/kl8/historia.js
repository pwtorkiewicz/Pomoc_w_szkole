/* Historia – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, historia kl. IV–VIII).
 * Podstawa zaleca, by w klasie VIII realizować działy XXXI–XLI (od wojny obronnej 1939 r.
 * do miejsca Polski we współczesnym świecie) – „Warunki i sposób realizacji”.
 * Podstawa „nie zawiera skodyfikowanego zapisu wydarzeń i dat” – daty wybrano z materiałów
 * zpe.gov.pl (e-podręcznik do historii dla klasy 8), w których zostały sprawdzone (szczegóły: docs/PLAN-kl8.md). */
window.SUBJECTS.push({
  id: 'historia',
  name: 'Historia',
  icon: '🏛️',
  color: '#8c6d3f',
  topics: [
    {
      id: 'wrzesien-1939',
      name: 'Wrzesień 1939',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXI „Wojna obronna Polski we wrześniu 1939 r. Agresja Niemiec (1 września) i Związku Sowieckiego (17 września)”, wym. 1–3 (położenie międzynarodowe Polski, etapy i kluczowe wydarzenia wojny obronnej, przykłady bohaterstwa żołnierzy i ludności cywilnej). Podstawa zaleca realizację działów XXXI–XLI w klasie VIII.',
      theory: `
        <h3>Polska przed wojną – w pułapce</h3>
        <ul>
          <li>Polska miała sojusze z <b>Francją</b> i <b>Wielką Brytanią</b> (układ sojuszniczy z Wielką Brytanią zawarto 25 sierpnia 1939 r.).</li>
          <li><b>23 sierpnia 1939 r.</b> Niemcy i ZSRS zawarły <b>pakt Ribbentrop–Mołotow</b> – układ o nieagresji. W <b>tajnym protokole</b> podzieliły Europę Środkową na strefy wpływów; granica w Polsce miała biec mniej więcej wzdłuż Narwi, Wisły i Sanu.</li>
          <li>Polska znalazła się między dwoma wrogami, którzy porozumieli się przeciw niej.</li>
        </ul>
        <h3>1 września – atak Niemiec</h3>
        <ul>
          <li><b>1 września 1939 r.</b> o 4.45 pancernik „Schleswig-Holstein” ostrzelał <b>Westerplatte</b>; w tym samym czasie Niemcy zbombardowali <b>Wieluń</b> – głównie ludność cywilną i szpital. Niemcy zaatakowali bez wypowiedzenia wojny – zaczęła się <b>II wojna światowa</b>.</li>
          <li><b>3 września</b> Francja i Wielka Brytania wypowiedziały wojnę Niemcom, ale nie podjęły poważnych działań zbrojnych – to tzw. <b>„dziwna wojna”</b>.</li>
        </ul>
        <h3>Najważniejsze walki</h3>
        <table>
          <tr><th>Wydarzenie</th><th>Co warto wiedzieć</th></tr>
          <tr><td><b>Westerplatte</b></td><td>ok. 220 obrońców (mjr Henryk Sucharski) broniło się tydzień – do 7 września</td></tr>
          <tr><td><b>Poczta Polska w Gdańsku</b></td><td>pocztowcy bronili gmachu 1 września; schwytanych Niemcy rozstrzelali</td></tr>
          <tr><td><b>Mokra</b> (1 IX)</td><td>Wołyńska Brygada Kawalerii zniszczyła wiele niemieckich czołgów</td></tr>
          <tr><td><b>Wizna</b> (7–10 IX)</td><td>„polskie Termopile” – kpt. Władysław Raginis z ok. 700 żołnierzami przeciw dziesiątkom tysięcy Niemców</td></tr>
          <tr><td><b>bitwa nad Bzurą</b> (od 9 IX)</td><td><b>największa bitwa</b> kampanii wrześniowej</td></tr>
          <tr><td><b>obrona Warszawy</b></td><td>stolica skapitulowała <b>28 września</b></td></tr>
          <tr><td><b>Hel</b>, <b>Kock</b></td><td>Hel bronił się do 2 października; bitwa pod Kockiem (gen. Franciszek Kleeberg) na początku października – <b>ostatnia bitwa</b> kampanii</td></tr>
        </table>
        <h3>17 września – atak ZSRS</h3>
        <p><b>17 września 1939 r.</b> Armia Czerwona przekroczyła wschodnią granicę Polski – realizowała tajny protokół paktu Ribbentrop–Mołotow. Polskie władze przekroczyły granicę z Rumunią i zostały tam internowane. Prezydentem na uchodźstwie został Władysław Raczkiewicz, premierem – gen. Władysław Sikorski. Polacy walczyli też z Sowietami, np. w obronie Grodna.</p>
        <h3>Dlaczego Polska przegrała</h3>
        <p>Ogromna przewaga Niemiec i ZSRS, atak z kilku stron naraz, słabsze uzbrojenie i <b>bierność sojuszników</b>. Mimo to Polska broniła się ponad miesiąc, a żołnierze i cywile (np. obrońcy Warszawy, pocztowcy, harcerze) wykazali się bohaterstwem.</p>
        <div class="tip">💡 Dwie daty, dwóch agresorów: <b>1 IX</b> – Niemcy, <b>17 IX</b> – ZSRS. Obie wynikały z paktu z <b>23 VIII</b>.</div>`,
      flashcards: [
        ['Pakt Ribbentrop–Mołotow', '23 sierpnia 1939 r.; układ Niemiec i ZSRS z tajnym protokołem o podziale stref wpływów'],
        ['Atak Niemiec na Polskę', '1 września 1939 r. – początek II wojny światowej'],
        ['Atak ZSRS na Polskę', '17 września 1939 r.'],
        ['Westerplatte', 'Obrona do 7 września 1939 r.; dowódca mjr Henryk Sucharski'],
        ['Wieluń', 'Miasto zbombardowane przez Niemców rano 1 września 1939 r. – atak na cywilów'],
        ['„Dziwna wojna”', 'Francja i Wielka Brytania wypowiedziały wojnę Niemcom 3 IX 1939, ale nie walczyły na serio'],
        ['Największa bitwa kampanii wrześniowej', 'Bitwa nad Bzurą'],
        ['„Polskie Termopile”', 'Obrona Wizny – kpt. Władysław Raginis'],
        ['Kapitulacja Warszawy', '28 września 1939 r.'],
        ['Ostatnia bitwa kampanii wrześniowej', 'Bitwa pod Kockiem (gen. Franciszek Kleeberg), początek października 1939'],
        ['Przyczyny klęski wrześniowej', 'Przewaga Niemiec i ZSRS, atak z wielu stron, bierność sojuszników'],
      ],
      questions: [
        { id: 'xu6exq', q: 'Kiedy Niemcy napadły na Polskę?', options: ['17 września 1939 r.', '1 września 1939 r.', '23 sierpnia 1939 r.', '3 września 1939 r.'], answer: 1, explain: '1 września 1939 r. Niemcy zaatakowały Polskę – zaczęła się II wojna światowa.' },
        { id: 'z49lpa', q: 'Kiedy ZSRS zaatakował Polskę?', options: ['1 września 1939 r.', '28 września 1939 r.', '17 września 1939 r.', '22 czerwca 1941 r.'], answer: 2, explain: '17 września 1939 r. Armia Czerwona przekroczyła wschodnią granicę Polski.' },
        { id: 'cjdi42', q: 'Co zawierał tajny protokół do paktu Ribbentrop–Mołotow?', options: ['podział Europy Środkowej na niemiecką i sowiecką strefę wpływów', 'sojusz Polski z Francją', 'zakończenie I wojny światowej', 'utworzenie ONZ'], answer: 0, explain: 'Niemcy i ZSRS potajemnie podzieliły między siebie m.in. ziemie Polski.' },
        { id: '7m0oqq', q: 'Które państwa wypowiedziały wojnę Niemcom 3 września 1939 r.?', options: ['ZSRS i Japonia', 'USA i Kanada', 'Włochy i Węgry', 'Francja i Wielka Brytania'], answer: 3, explain: 'Sojusznicy Polski wypowiedzieli wojnę, ale prowadzili tylko „dziwną wojnę” – bez poważnej pomocy.' },
        { id: '5882ow', q: 'Co oznacza określenie „dziwna wojna”?', options: ['walki na Westerplatte', 'brak poważnych działań zbrojnych Francji i Wielkiej Brytanii przeciw Niemcom we wrześniu 1939 r.', 'obronę Warszawy', 'wojnę na Pacyfiku'], answer: 1, explain: 'Sojusznicy formalnie byli w stanie wojny, ale nie zaatakowali Niemiec, gdy te walczyły z Polską.' },
        { id: 'gmpwk8', q: 'Która bitwa była największą bitwą kampanii wrześniowej?', options: ['bitwa nad Bzurą', 'bitwa pod Mokrą', 'obrona Wizny', 'obrona Helu'], answer: 0, explain: 'Bitwa nad Bzurą (od 9 września) była największą bitwą wojny obronnej 1939 r.' },
        { id: 'yasfvf', q: 'Kto dowodził obroną Westerplatte?', options: ['gen. Władysław Sikorski', 'kpt. Władysław Raginis', 'mjr Henryk Sucharski', 'gen. Franciszek Kleeberg'], answer: 2, explain: 'Obrońcami Westerplatte dowodził mjr Henryk Sucharski.' },
        { id: 'o28ame', q: 'Którą obronę nazywa się „polskimi Termopilami”?', options: ['obronę Warszawy', 'obronę Wizny', 'obronę Poczty Polskiej', 'bitwę pod Kockiem'], answer: 1, explain: 'Pod Wizną kpt. Raginis z kilkuset żołnierzami bronił się przed wielokrotnie liczniejszym wrogiem.' },
        { id: 'gm5ari', q: 'Kiedy skapitulowała Warszawa?', options: ['1 września 1939 r.', '17 września 1939 r.', '6 października 1939 r.', '28 września 1939 r.'], answer: 3, explain: 'Po ciężkich walkach i bombardowaniach Warszawa poddała się 28 września 1939 r.' },
        { id: '8tmmz9', q: 'Która bitwa była ostatnią bitwą kampanii wrześniowej?', options: ['bitwa pod Kockiem', 'bitwa nad Bzurą', 'obrona Westerplatte', 'bitwa pod Mokrą'], answer: 0, explain: 'Grupa gen. Kleeberga walczyła pod Kockiem na początku października 1939 r.' },
        { id: 'r9l7un', q: 'Dlaczego bombardowanie Wielunia uznaje się za atak na ludność cywilną?', options: ['bo w mieście stacjonowała cała armia', 'bo bomby spadły m.in. na szpital i domy mieszkańców', 'bo zrobili to Sowieci', 'bo Wieluń leżał w Niemczech'], answer: 1, explain: 'Wieluń nie był celem wojskowym – Niemcy zbombardowali m.in. oznakowany szpital.' },
        { id: 'i9xe8g', q: 'Która przyczyna klęski Polski we wrześniu 1939 r. jest prawdziwa?', options: ['Polska nie miała wojska', 'Polacy nie stawiali oporu', 'Niemcy i ZSRS zaatakowały z kilku stron, a sojusznicy nie pomogli', 'Polska zaatakowała pierwsza'], answer: 2, explain: 'Przewaga dwóch agresorów i bierność Francji i Wielkiej Brytanii zdecydowały o klęsce.' },
        { id: 'gsrnip', q: 'Prawda czy fałsz?\nAtak ZSRS 17 września 1939 r. był realizacją tajnego protokołu paktu Ribbentrop–Mołotow.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Sowiecka propaganda twierdziła inaczej, ale ZSRS zajął ziemie przydzielone mu w tajnym protokole.' },
      ],
      tasks: [
        {
          id: '6y3c7h',
          points: 2,
          q: 'Uporządkuj chronologicznie wydarzenia: A. kapitulacja Warszawy, B. pakt Ribbentrop–Mołotow, C. agresja ZSRS na Polskę, D. atak Niemiec na Westerplatte. Następnie wyjaśnij, jaki związek ma wydarzenie B z wydarzeniem C.',
          steps: [
            'B – 23 sierpnia 1939 r.',
            'D – 1 września 1939 r.',
            'C – 17 września 1939 r.',
            'A – 28 września 1939 r.',
            'Związek: w tajnym protokole paktu (B) Niemcy i ZSRS podzieliły strefy wpływów; atak ZSRS (C) był jego realizacją.',
          ],
          answer: 'B, D, C, A; agresja ZSRS była realizacją tajnego protokołu paktu Ribbentrop–Mołotow',
          scoring: [
            '1 pkt – poprawna kolejność B, D, C, A.',
            '1 pkt – wyjaśnienie związku (tajny protokół – podział stref wpływów – atak ZSRS).',
          ],
        },
      ],
    },
    {
      id: 'ii-wojna',
      name: 'II wojna światowa',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXII „II wojna światowa i jej etapy”, wym. 1, 3–5 (przełomowe wydarzenia polityczne i militarne, przyczyny klęski państw Osi, decyzje konferencji Wielkiej Trójki w Teheranie, Jałcie i Poczdamie, bezpośrednie skutki wojny, zmiany granic i przesiedlenia). Wym. 2 (okupacja Europy, Holokaust) – w dziale „Holokaust”.',
      theory: `
        <h3>Najważniejsze wydarzenia</h3>
        <table>
          <tr><th>Kiedy</th><th>Co</th></tr>
          <tr><td>1939</td><td>atak Niemiec (1 IX) i ZSRS (17 IX) na Polskę</td></tr>
          <tr><td>1940</td><td>Niemcy zajmują m.in. Norwegię i Francję; <b>bitwa o Anglię</b> – Niemcy nie pokonali Wielkiej Brytanii</td></tr>
          <tr><td>22 VI 1941</td><td>Niemcy atakują <b>ZSRS</b> („plan Barbarossa”)</td></tr>
          <tr><td>7 XII 1941</td><td>Japonia atakuje amerykańską bazę <b>Pearl Harbor</b> – <b>USA</b> przystępują do wojny</td></tr>
          <tr><td>1942–1943</td><td>bitwa pod <b>Stalingradem</b> (kapitulacja Niemców 31 I 1943) – <b>przełom</b> na froncie wschodnim; potem bitwa na łuku kurskim</td></tr>
          <tr><td>6 VI 1944</td><td>lądowanie aliantów w <b>Normandii</b> – drugi front w Europie</td></tr>
          <tr><td>8 V 1945</td><td><b>bezwarunkowa kapitulacja Niemiec</b> – koniec wojny w Europie</td></tr>
          <tr><td>6 i 9 VIII 1945</td><td>bomby atomowe na <b>Hiroszimę</b> i <b>Nagasaki</b></td></tr>
          <tr><td>2 IX 1945</td><td><b>kapitulacja Japonii</b> – koniec II wojny światowej</td></tr>
        </table>
        <p><b>Państwa Osi</b>: Niemcy, Włochy, Japonia (i ich sojusznicy). <b>Wielka koalicja</b> (alianci): Wielka Brytania, ZSRS, USA i inne państwa, w tym Polska.</p>
        <h3>Dlaczego Oś przegrała</h3>
        <ul>
          <li>ogromna <b>przewaga gospodarcza</b> aliantów – zwłaszcza USA („arsenał demokracji”),</li>
          <li>walka na <b>wielu frontach</b> naraz,</li>
          <li>ogromne zasoby ludzkie ZSRS i straty Niemców na wschodzie,</li>
          <li>błędy Hitlera i opór narodów okupowanych.</li>
        </ul>
        <h3>Wielka Trójka</h3>
        <p>Przywódcy USA (Roosevelt, potem Truman), Wielkiej Brytanii (Churchill, potem Attlee) i ZSRS (Stalin) ustalali losy świata – często bez udziału Polski.</p>
        <table>
          <tr><th>Konferencja</th><th>Najważniejsze decyzje</th></tr>
          <tr><td><b>Teheran</b> (koniec 1943)</td><td>termin i miejsce drugiego frontu (Normandia, 1944); zgoda na wschodnią granicę Polski na <b>linii Curzona</b> – bez zgody rządu polskiego</td></tr>
          <tr><td><b>Jałta</b> (luty 1945)</td><td>potwierdzenie granicy na linii Curzona; utworzenie w Polsce <b>Tymczasowego Rządu Jedności Narodowej</b> i zapowiedź wyborów; sprawy ONZ – Polska w <b>strefie wpływów ZSRS</b></td></tr>
          <tr><td><b>Poczdam</b> (lipiec–sierpień 1945)</td><td>zachodnia granica Polski na <b>Odrze i Nysie Łużyckiej</b>; wysiedlenie Niemców z ziem przyznanych Polsce; Niemcy podzielone na <b>4 strefy okupacyjne</b></td></tr>
        </table>
        <h3>Skutki wojny</h3>
        <ul>
          <li>dziesiątki milionów zabitych, zniszczone miasta (np. Warszawa),</li>
          <li><b>zmiana granic</b> Polski – przesunięcie „na zachód”: utrata ziem wschodnich (Kresów), przyznanie ziem poniemieckich,</li>
          <li><b>przesiedlenia</b>: Polacy z Kresów na zachód, Niemcy wysiedleni z ziem przyznanych Polsce,</li>
          <li>podział Europy na wpływy ZSRS i Zachodu; powstanie ONZ.</li>
        </ul>
        <div class="tip">💡 Kolejność konferencji: <b>T-J-P</b> – Teheran, Jałta, Poczdam (1943 → luty 1945 → lato 1945). Granica wschodnia – Teheran i Jałta; zachodnia – Poczdam.</div>`,
      flashcards: [
        ['Atak Niemiec na ZSRS', '22 czerwca 1941 r.'],
        ['Pearl Harbor', '7 grudnia 1941 r. – atak Japonii, USA przystępują do wojny'],
        ['Przełom na froncie wschodnim', 'Bitwa pod Stalingradem (kapitulacja Niemców 31 I 1943)'],
        ['Lądowanie w Normandii', '6 czerwca 1944 r. – drugi front w Europie'],
        ['Kapitulacja Niemiec', '8 maja 1945 r.'],
        ['Kapitulacja Japonii', '2 września 1945 r. – koniec II wojny światowej'],
        ['Państwa Osi', 'Niemcy, Włochy, Japonia'],
        ['Wielka Trójka', 'Przywódcy USA, Wielkiej Brytanii i ZSRS'],
        ['Konferencja w Teheranie', 'Koniec 1943: drugi front; zgoda na granicę Polski na linii Curzona'],
        ['Konferencja w Jałcie', 'Luty 1945: linia Curzona, Tymczasowy Rząd Jedności Narodowej, Polska w strefie wpływów ZSRS'],
        ['Konferencja w Poczdamie', 'Lato 1945: granica na Odrze i Nysie Łużyckiej, wysiedlenie Niemców, 4 strefy okupacyjne Niemiec'],
        ['Przyczyny klęski Osi', 'Przewaga gospodarcza aliantów (USA), wiele frontów, zasoby ZSRS'],
      ],
      questions: [
        { id: 'zjq1a9', q: 'Kiedy Niemcy zaatakowały ZSRS?', options: ['1 września 1939 r.', '22 czerwca 1941 r.', '7 grudnia 1941 r.', '6 czerwca 1944 r.'], answer: 1, explain: '22 czerwca 1941 r. Niemcy zaatakowały ZSRS (plan „Barbarossa”).' },
        { id: '9s2osr', q: 'Które wydarzenie spowodowało przystąpienie USA do wojny?', options: ['atak Japonii na Pearl Harbor', 'bitwa o Anglię', 'atak Niemiec na Polskę', 'bitwa pod Stalingradem'], answer: 0, explain: '7 grudnia 1941 r. Japonia zaatakowała Pearl Harbor; dzień później USA wypowiedziały wojnę Japonii.' },
        { id: 'z8tbia', q: 'Która bitwa była przełomem na froncie wschodnim?', options: ['bitwa o Anglię', 'bitwa nad Bzurą', 'bitwa pod Stalingradem', 'bitwa pod Monte Cassino'], answer: 2, explain: 'Klęska Niemców pod Stalingradem (kapitulacja 31 I 1943) odwróciła losy wojny na wschodzie.' },
        { id: 'f68bed', q: 'Co wydarzyło się 6 czerwca 1944 r.?', options: ['kapitulacja Niemiec', 'atak na Pearl Harbor', 'konferencja w Jałcie', 'lądowanie aliantów w Normandii'], answer: 3, explain: 'Lądowanie w Normandii otworzyło drugi front w Europie.' },
        { id: 'tt4o4g', q: 'Kiedy zakończyła się II wojna światowa w Europie?', options: ['8 maja 1945 r.', '2 września 1945 r.', '17 stycznia 1945 r.', '6 sierpnia 1945 r.'], answer: 0, explain: '8 maja 1945 r. Niemcy podpisały bezwarunkową kapitulację. Cała wojna skończyła się kapitulacją Japonii 2 września 1945 r.' },
        { id: 'i7bss1', q: 'Na które miasta Amerykanie zrzucili bomby atomowe?', options: ['Tokio i Kioto', 'Hiroszimę i Nagasaki', 'Berlin i Drezno', 'Pearl Harbor i Midway'], answer: 1, explain: '6 sierpnia 1945 r. na Hiroszimę, 9 sierpnia – na Nagasaki.' },
        { id: 'r3jzge', q: 'Które państwa tworzyły trzon państw Osi?', options: ['USA, Wielka Brytania, ZSRS', 'Polska, Francja, Wielka Brytania', 'Niemcy, Włochy, Japonia', 'Kanada, Australia, Nowa Zelandia'], answer: 2, explain: 'Oś to Niemcy, Włochy i Japonia oraz ich sojusznicy.' },
        { id: 'fk0sn5', q: 'Która przyczyna klęski państw Osi jest prawdziwa?', options: ['przewaga gospodarcza aliantów, zwłaszcza USA', 'brak armii w Niemczech', 'sojusz Niemiec z USA', 'pokój zawarty w 1940 r.'], answer: 0, explain: 'USA produkowały ogromne ilości broni i sprzętu – były „arsenałem demokracji”.' },
        { id: 'zgip3a', q: 'Na której konferencji ustalono zachodnią granicę Polski na Odrze i Nysie Łużyckiej?', options: ['w Teheranie', 'w Jałcie', 'w Wersalu', 'w Poczdamie'], answer: 3, explain: 'W Poczdamie (lato 1945) ustalono granicę zachodnią i wysiedlenie Niemców z ziem przyznanych Polsce.' },
        { id: '67o9zd', q: 'Na której konferencji Wielka Trójka po raz pierwszy zgodziła się na granicę wschodnią Polski na linii Curzona?', options: ['w Teheranie', 'w Poczdamie', 'w Monachium', 'w San Francisco'], answer: 0, explain: 'W Teheranie (koniec 1943 r.) Churchill i Roosevelt zgodzili się na to bez zgody rządu polskiego.' },
        { id: '5589cu', q: 'Co postanowiono w Jałcie w sprawie Polski?', options: ['że Polska odzyska Kresy', 'że w Polsce powstanie Tymczasowy Rząd Jedności Narodowej, a granica wschodnia biegnie linią Curzona', 'że Polska wejdzie do NATO', 'że Niemcy oddadzą Polsce Berlin'], answer: 1, explain: 'Jałta oznaczała Polskę w strefie wpływów ZSRS.' },
        { id: '0ycfyf', q: 'Na ile stref okupacyjnych podzielono Niemcy po wojnie?', options: ['dwie', 'trzy', 'cztery', 'pięć'], answer: 2, explain: 'Amerykańską, brytyjską, francuską i sowiecką.' },
        { id: 'my1d4t', q: 'Prawda czy fałsz?\nPo II wojnie światowej granice Polski przesunięto na zachód.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Polska straciła Kresy Wschodnie, a otrzymała ziemie poniemieckie na zachodzie i północy.' },
      ],
    },
    {
      id: 'holokaust',
      name: 'Okupacja Europy i Holokaust',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXII, wym. 2 (polityka Niemiec na terenach okupowanej Europy; zagłada Żydów i Romów, eksterminacja innych narodów; postawy Polaków wobec Holokaustu).',
      theory: `
        <h3>Ideologia rasistowska</h3>
        <p>Niemieccy naziści uważali Niemców za „rasę panów”. <b>Żydów</b> i <b>Romów</b> chcieli wymordować, a <b>Słowian</b> (m.in. Polaków) uważali za „podludzi”, którzy mieli być tanią siłą roboczą. Okupacja była najbrutalniejsza na wschodzie, w tym w Polsce.</p>
        <h3>Holokaust – zagłada Żydów</h3>
        <ol>
          <li><b>Getta</b> – wydzielone, zamknięte dzielnice, do których Niemcy przesiedlali Żydów; panował tam głód i choroby.</li>
          <li><b>Masowe egzekucje</b> – po ataku na ZSRS rozstrzeliwano Żydów na zajętych terenach.</li>
          <li><b>Obozy zagłady</b> (śmierci) – Niemcy założyli je na okupowanych ziemiach polskich: <b>Chełmno</b> (pierwszy, od grudnia 1941), <b>Bełżec</b>, <b>Sobibór</b>, <b>Treblinka</b>, <b>Auschwitz-Birkenau</b> (największy; zabijano gazem cyklon B).</li>
        </ol>
        <p>Niemcy zamordowali ok. <b>6 milionów Żydów</b> z całej Europy. Ofiarami ludobójstwa byli też <b>Romowie</b>. Żydzi stawiali opór – największym zrywem było <b>powstanie w getcie warszawskim</b> (19 kwietnia – 16 maja 1943 r.; Mordechaj Anielewicz).</p>
        <h3>Postawy Polaków wobec Holokaustu</h3>
        <p>W okupowanej Polsce za ukrywanie Żydów groziła <b>kara śmierci</b> – często dla całej rodziny (rozporządzenie Hansa Franka z 15 października 1941 r.). Postawy były różne:</p>
        <ul>
          <li><b>pomoc</b> – wielu Polaków ukrywało Żydów. Państwo podziemne utworzyło w 1942 r. <b>Radę Pomocy Żydom „Żegota”</b>; <b>Irena Sendlerowa</b> kierowała grupą ratującą żydowskie dzieci. Rodzina <b>Ulmów</b> z Markowej została zamordowana przez Niemców za ukrywanie Żydów. Polacy są najliczniejszą grupą odznaczonych tytułem <b>Sprawiedliwy wśród Narodów Świata</b>,</li>
          <li><b>obojętność</b> – wielu bało się albo nie reagowało,</li>
          <li><b>szmalcownictwo</b> – szantażowanie i wydawanie Żydów Niemcom; państwo podziemne karało szmalcowników śmiercią.</li>
        </ul>
        <div class="tip">💡 Getto → egzekucje → obozy zagłady: tak krok po kroku Niemcy realizowali „ostateczne rozwiązanie”. Obozy śmierci założyli <b>Niemcy</b> – na okupowanych ziemiach polskich.</div>`,
      flashcards: [
        ['Holokaust (Zagłada)', 'Wymordowanie przez Niemców ok. 6 mln Żydów w czasie II wojny światowej'],
        ['Getto', 'Wydzielona, zamknięta dzielnica, do której Niemcy przesiedlali Żydów'],
        ['Obóz zagłady', 'Obóz stworzony do masowego zabijania ludzi, np. Auschwitz-Birkenau, Treblinka'],
        ['Pierwszy niemiecki obóz zagłady', 'Chełmno (od grudnia 1941 r.)'],
        ['Największy obóz zagłady', 'Auschwitz-Birkenau'],
        ['Powstanie w getcie warszawskim', '19 kwietnia – 16 maja 1943 r.; Mordechaj Anielewicz'],
        ['Kara za ukrywanie Żydów w okupowanej Polsce', 'Śmierć – często całej rodziny'],
        ['„Żegota”', 'Rada Pomocy Żydom – powołana w 1942 r. przez polskie państwo podziemne'],
        ['Irena Sendlerowa', 'W „Żegocie” kierowała grupą ratującą żydowskie dzieci'],
        ['Rodzina Ulmów', 'Rodzina z Markowej zamordowana przez Niemców za ukrywanie Żydów'],
        ['Szmalcownik', 'Ktoś, kto szantażował lub wydawał ukrywających się Żydów'],
        ['Inne ofiary ludobójstwa', 'Romowie'],
      ],
      questions: [
        { id: 'ffwmn1', q: 'Czym był Holokaust?', options: ['nazwą bitwy w 1944 r.', 'wymordowaniem przez Niemców ok. 6 mln Żydów', 'przesiedleniem ludności po wojnie', 'planem odbudowy Europy'], answer: 1, explain: 'Holokaust (Zagłada) to ludobójstwo Żydów dokonane przez Niemców.' },
        { id: 'he11ye', q: 'Kto założył obozy zagłady na okupowanych ziemiach polskich?', options: ['Niemcy', 'Polacy', 'Brytyjczycy', 'Amerykanie'], answer: 0, explain: 'Obozy zagłady założyli i prowadzili Niemcy na okupowanych przez siebie ziemiach.' },
        { id: 'g9ap8k', q: 'Który obóz był największym ośrodkiem zagłady?', options: ['Chełmno', 'Sobibór', 'Auschwitz-Birkenau', 'Bełżec'], answer: 2, explain: 'W Auschwitz-Birkenau zabijano ofiary gazem cyklon B na ogromną skalę.' },
        { id: '9doo3n', q: 'Czym było getto?', options: ['obozem jenieckim', 'dzielnicą, do której Niemcy przesiedlali i w której zamykali Żydów', 'polską organizacją podziemną', 'niemiecką fabryką broni'], answer: 1, explain: 'W gettach panowały głód, przeludnienie i choroby; potem Niemcy wywozili stamtąd ludzi do obozów zagłady.' },
        { id: 'zo5uch', q: 'Kiedy wybuchło powstanie w getcie warszawskim?', options: ['1 sierpnia 1944 r.', '1 września 1939 r.', '11 listopada 1918 r.', '19 kwietnia 1943 r.'], answer: 3, explain: 'Powstanie w getcie trwało od 19 kwietnia do 16 maja 1943 r.' },
        { id: '6fv3fg', q: 'Jaka kara groziła w okupowanej Polsce za ukrywanie Żydów?', options: ['grzywna', 'kara śmierci', 'kilka dni aresztu', 'żadna'], answer: 1, explain: 'Rozporządzenie Hansa Franka z 1941 r. przewidywało karę śmierci; często mordowano całe rodziny.' },
        { id: '4pe7j8', q: 'Czym była „Żegota”?', options: ['Radą Pomocy Żydom działającą w ramach polskiego państwa podziemnego', 'niemieckim obozem', 'oddziałem Armii Czerwonej', 'gazetą okupacyjną'], answer: 0, explain: '„Żegotę” utworzono w 1942 r., by ratować Żydów: dawała schronienie, dokumenty i pieniądze.' },
        { id: 'v065ui', q: 'Z czego znana jest Irena Sendlerowa?', options: ['dowodziła powstaniem warszawskim', 'była premierem rządu na uchodźstwie', 'ratowała żydowskie dzieci', 'broniła Westerplatte'], answer: 2, explain: 'W „Żegocie” kierowała grupą pomagającą żydowskim dzieciom.' },
        { id: 'g07rtt', q: 'Kim byli szmalcownicy?', options: ['ludźmi ukrywającymi Żydów', 'ludźmi szantażującymi i wydającymi Żydów Niemcom', 'żołnierzami AK', 'kurierami rządu'], answer: 1, explain: 'Państwo podziemne wydawało na szmalcowników wyroki śmierci.' },
        { id: '6gajqr', q: 'Kogo – oprócz Żydów – naziści planowo mordowali jako ofiary ludobójstwa?', options: ['Romów', 'Szwedów', 'Hiszpanów', 'Szwajcarów'], answer: 0, explain: 'Romowie również byli ofiarami zagłady.' },
        { id: '9tlcrq', q: 'Prawda czy fałsz?\nWszyscy Polacy zachowywali się wobec Holokaustu tak samo.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Postawy były różne: od bohaterskiej pomocy, przez obojętność, po szmalcownictwo.' },
        { id: 'muqnfm', q: 'Prawda czy fałsz?\nPolacy są najliczniejszą grupą wśród odznaczonych tytułem Sprawiedliwy wśród Narodów Świata.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tytuł przyznaje Instytut Yad Vashem osobom, które ratowały Żydów.' },
      ],
    },
    {
      id: 'okupacja',
      name: 'Polska pod dwiema okupacjami',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXIII „Polska pod okupacją niemiecką i sowiecką”, wym. 1–3 (polityka niemiecka i sowiecka w okupowanej Polsce, zbrodnie ogólnokrajowe i regionalne: zbrodnia katyńska, Auschwitz-Birkenau, Palmiry, kaźń profesorów lwowskich, Zamojszczyzna; konflikt polsko-ukraiński i ludobójstwo na Wołyniu i w Małopolsce Wschodniej). Fakty o kaźni profesorów lwowskich – materiały IPN.',
      theory: `
        <h3>Podział ziem polskich</h3>
        <table>
          <tr><th>okupacja niemiecka</th><th>okupacja sowiecka</th></tr>
          <tr><td>zachodnie ziemie <b>wcielone do Rzeszy</b>; w środku – <b>Generalne Gubernatorstwo</b> (rządził nim Hans Frank)</td><td>ziemie wschodnie <b>wcielone do ZSRS</b></td></tr>
          <tr><td>prześladowania według kryterium <b>narodowego (rasowego)</b>: Polacy mieli być siłą roboczą, Żydzi – wymordowani</td><td>prześladowania według kryterium <b>klasowego</b>: „wrogowie” to np. ziemianie, oficerowie, urzędnicy, policjanci</td></tr>
          <tr><td>wysiedlenia, łapanki, egzekucje, wywózki na roboty do Niemiec, obozy koncentracyjne; zamknięte szkoły średnie i wyższe</td><td>aresztowania, <b>deportacje</b> w głąb ZSRS (m.in. do Kazachstanu, na Syberię) w latach 1940–1941; narzucanie sowieckiego systemu</td></tr>
        </table>
        <p>Cel obu okupantów był podobny: <b>zniszczyć polskie elity</b> i podporządkować sobie społeczeństwo.</p>
        <h3>Zbrodnie niemieckie</h3>
        <ul>
          <li><b>Auschwitz-Birkenau</b> – obóz koncentracyjny i największy obóz zagłady; ginęli tam Żydzi, Polacy, Romowie, jeńcy sowieccy i inni,</li>
          <li><b>Palmiry</b> pod Warszawą – miejsce masowych egzekucji polskich elit (ok. 1,7 tys. ofiar),</li>
          <li><b>kaźń profesorów lwowskich</b> – w lipcu 1941 r. Niemcy zamordowali we Lwowie (na Wzgórzach Wuleckich) polskich profesorów i ich bliskich,</li>
          <li><b>Zamojszczyzna</b> – w latach 1942–1943 Niemcy wysiedlali Polaków z ich wsi, by osiedlić tam Niemców; tysiące dzieci odebrano rodzinom (dzieci Zamojszczyzny).</li>
        </ul>
        <h3>Zbrodnie sowieckie</h3>
        <ul>
          <li><b>Zbrodnia katyńska</b> – wiosną <b>1940 r.</b> NKWD, na podstawie decyzji najwyższych władz ZSRS, zamordowało ok. 22 tys. polskich obywateli, w tym tysiące oficerów (m.in. w Katyniu, Charkowie, Twerze). ZSRS przez dziesiątki lat kłamał, że zrobili to Niemcy – przyznał się dopiero w 1990 r.</li>
          <li><b>Deportacje</b> setek tysięcy ludzi w głąb ZSRS.</li>
        </ul>
        <h3>Wołyń i Małopolska Wschodnia</h3>
        <p>W 1943 r. ukraińscy nacjonaliści (OUN-UPA) dokonali <b>ludobójstwa</b> ludności polskiej na <b>Wołyniu</b>, a potem w <b>Małopolsce Wschodniej</b> – zginęło kilkadziesiąt tysięcy Polaków. Najkrwawszy dzień to <b>11 lipca 1943 r.</b> (ataki na ok. 100 miejscowości). Celem było usunięcie Polaków z ziem, na których nacjonaliści chcieli utworzyć państwo ukraińskie. Polacy organizowali samoobronę; dochodziło też do polskich akcji odwetowych. Sejm uznał zbrodnię wołyńską za ludobójstwo, a 11 lipca jest Narodowym Dniem Pamięci jej ofiar.</p>
        <div class="tip">💡 Niemcy – Auschwitz, Palmiry, Lwów, Zamojszczyzna. Sowieci – Katyń, deportacje. Obaj okupanci niszczyli <b>elity</b>.</div>`,
      flashcards: [
        ['Generalne Gubernatorstwo', 'Część ziem polskich pod okupacją niemiecką, niewcielona do Rzeszy; rządził Hans Frank'],
        ['Kryterium prześladowań u Niemców', 'Narodowe (rasowe)'],
        ['Kryterium prześladowań u Sowietów', 'Klasowe'],
        ['Deportacje sowieckie', 'Lata 1940–1941 – wywózki Polaków w głąb ZSRS (Kazachstan, Syberia)'],
        ['Zbrodnia katyńska', 'Wiosna 1940 r.; NKWD zamordowało ok. 22 tys. polskich obywateli, w tym tysiące oficerów'],
        ['Kiedy ZSRS przyznał się do Katynia?', 'Dopiero w 1990 r.'],
        ['Palmiry', 'Miejsce niemieckich egzekucji polskich elit pod Warszawą'],
        ['Kaźń profesorów lwowskich', 'Lipiec 1941 r. – Niemcy zamordowali polskich profesorów we Lwowie'],
        ['Zamojszczyzna', 'Niemieckie wysiedlenia Polaków 1942–1943; odbieranie dzieci'],
        ['Zbrodnia wołyńska', 'Ludobójstwo Polaków dokonane przez OUN-UPA w 1943 r.'],
        ['11 lipca 1943 r.', 'Najkrwawszy dzień zbrodni wołyńskiej; dziś Narodowy Dzień Pamięci jej ofiar'],
      ],
      questions: [
        { id: 'kxxjvm', q: 'Jak nazywała się część ziem polskich pod okupacją niemiecką, której nie wcielono do Rzeszy?', options: ['Kraj Warty', 'Generalne Gubernatorstwo', 'Królestwo Polskie', 'Polska Lubelska'], answer: 1, explain: 'Generalnym Gubernatorstwem rządził Hans Frank.' },
        { id: '0o7tjq', q: 'Według jakiego kryterium prześladowali ludzi okupanci sowieccy?', options: ['klasowego', 'rasowego', 'wieku', 'wzrostu'], answer: 0, explain: 'Sowieci uderzali w „wrogów klasowych”: ziemian, oficerów, urzędników, policjantów. Niemcy – według kryterium narodowego.' },
        { id: 'cpr9jj', q: 'Kto dokonał zbrodni katyńskiej?', options: ['Niemcy', 'Ukraińscy nacjonaliści', 'NKWD (ZSRS)', 'Japończycy'], answer: 2, explain: 'Zbrodni dokonało NKWD na podstawie decyzji najwyższych władz ZSRS.' },
        { id: 'voio2t', q: 'Kiedy dokonano zbrodni katyńskiej?', options: ['we wrześniu 1939 r.', 'wiosną 1940 r.', 'latem 1944 r.', 'w 1956 r.'], answer: 1, explain: 'Masowe egzekucje polskich jeńców trwały wiosną 1940 r.' },
        { id: 'ze944o', q: 'Co przez dziesiątki lat twierdziły władze ZSRS w sprawie Katynia?', options: ['że zbrodni dokonali Niemcy', 'że oficerowie wyjechali do Anglii', 'że to był wypadek', 'nic nie mówiły, bo przyznały się od razu'], answer: 0, explain: 'ZSRS kłamał, obciążając Niemców; przyznał się dopiero w 1990 r.' },
        { id: 'qtc08t', q: 'Która zbrodnia była zbrodnią niemiecką?', options: ['Katyń', 'deportacje na Syberię', 'zbrodnia wołyńska', 'kaźń profesorów lwowskich'], answer: 3, explain: 'Profesorów we Lwowie zamordowali w lipcu 1941 r. Niemcy.' },
        { id: 'k2dy1b', q: 'Co stało się na Zamojszczyźnie w latach 1942–1943?', options: ['Niemcy wysiedlali Polaków i odbierali im dzieci', 'wybuchło powstanie warszawskie', 'powstał rząd emigracyjny', 'odbyła się konferencja Wielkiej Trójki'], answer: 0, explain: 'Niemcy chcieli osiedlić tam Niemców; tysiące dzieci odebrano rodzinom.' },
        { id: '4waw32', q: 'Czym były Palmiry?', options: ['obozem zagłady', 'miejscem niemieckich egzekucji polskich elit pod Warszawą', 'stacją polarną', 'bazą lotniczą'], answer: 1, explain: 'W Palmirach Niemcy rozstrzelali ok. 1,7 tys. osób.' },
        { id: 'ngc7tb', q: 'Kto dokonał ludobójstwa ludności polskiej na Wołyniu w 1943 r.?', options: ['NKWD', 'Armia Krajowa', 'ukraińscy nacjonaliści z OUN-UPA', 'Wehrmacht w 1939 r.'], answer: 2, explain: 'Zbrodnię wołyńską przeprowadziły formacje OUN-UPA.' },
        { id: 'y10sk4', q: 'Który dzień jest Narodowym Dniem Pamięci ofiar zbrodni wołyńskiej?', options: ['1 września', '17 września', '1 sierpnia', '11 lipca'], answer: 3, explain: '11 lipca 1943 r. nacjonaliści zaatakowali ok. 100 miejscowości jednocześnie.' },
        { id: 'ohe3eb', q: 'Dokąd Sowieci deportowali Polaków w latach 1940–1941?', options: ['do Francji', 'w głąb ZSRS, m.in. do Kazachstanu i na Syberię', 'do Generalnego Gubernatorstwa', 'do USA'], answer: 1, explain: 'Setki tysięcy ludzi wywieziono w bydlęcych wagonach w głąb ZSRS.' },
        { id: '1oxc8m', q: 'Prawda czy fałsz?\nZarówno Niemcy, jak i Sowieci dążyli do zniszczenia polskich elit.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Metody były podobne, różniły się kryteria wyboru ofiar.' },
      ],
    },
    {
      id: 'panstwo-podziemne',
      name: 'Państwo podziemne i powstanie warszawskie',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXIII, wym. 4–5 (polityczna i militarna działalność polskiego państwa podziemnego, formy oporu; przyczyny, skutki i ocena powstania warszawskiego, postawa aliantów i ZSRS).',
      theory: `
        <h3>Polskie Państwo Podziemne</h3>
        <p>Pod okupacją Polacy stworzyli <b>tajne państwo</b> podległe rządowi na uchodźstwie. W żadnym innym okupowanym kraju nie powstały tak rozbudowane struktury.</p>
        <table>
          <tr><th>Część</th><th>Co to było</th></tr>
          <tr><td><b>Delegatura Rządu na Kraj</b></td><td>tajna administracja (urzędy, sądy, szkolnictwo)</td></tr>
          <tr><td>zalążek parlamentu</td><td>porozumienie najważniejszych partii politycznych</td></tr>
          <tr><td><b>Armia Krajowa (AK)</b></td><td>konspiracyjne wojsko; powstała <b>14 lutego 1942 r.</b> z przekształcenia Związku Walki Zbrojnej; pierwszy komendant – gen. <b>Stefan Rowecki „Grot”</b>, po jego aresztowaniu – gen. <b>Tadeusz Komorowski „Bór”</b></td></tr>
        </table>
        <h3>Formy oporu</h3>
        <ul>
          <li><b>tajne nauczanie</b> – podziemne szkoły i uczelnie (komplety),</li>
          <li><b>prasa podziemna</b>, mały sabotaż (np. napisy na murach),</li>
          <li><b>sabotaż i dywersja</b> – niszczenie transportów, akcje zbrojne, wyroki na zbrodniarzach i zdrajcach,</li>
          <li><b>wywiad</b> – informacje dla aliantów,</li>
          <li>harcerze z <b>Szarych Szeregów</b> brali udział w akcjach (np. „Zośka”, „Alek”, „Rudy”).</li>
        </ul>
        <h3>Akcja „Burza”</h3>
        <p>W 1944 r., gdy zbliżał się front, AK atakowała wycofujących się Niemców, a jej dowódcy wychodzili Sowietom naprzeciw jako gospodarze. Sowieci jednak często <b>rozbrajali i aresztowali</b> żołnierzy AK.</p>
        <h3>Powstanie warszawskie</h3>
        <ul>
          <li><b>Wybuch</b>: <b>1 sierpnia 1944 r.</b> o godz. 17 („godzina W”).</li>
          <li><b>Przyczyny</b>: chęć wyzwolenia stolicy przez Polaków przed wkroczeniem Armii Czerwonej i przyjęcia jej jako gospodarze; dowódcy liczyli na zaskoczenie Niemców i szybkie wejście Sowietów (którzy byli już blisko Pragi).</li>
          <li><b>Przebieg</b>: brakowało broni; walczono 63 dni. Armia Czerwona stała po drugiej stronie Wisły i <b>nie pomogła</b>. Zachodni alianci nie planowali pomocy dla powstania; zrzuty zaopatrzenia były niewielkie.</li>
          <li><b>Kapitulacja</b>: <b>2 października 1944 r.</b> – Niemcy uznali powstańców za żołnierzy (prawa kombatanckie).</li>
          <li><b>Skutki</b>: śmierć ponad 18 tys. powstańców i ok. 180 tys. cywilów; mieszkańców wypędzono, a Niemcy <b>zburzyli Warszawę</b>; AK bardzo osłabła.</li>
        </ul>
        <p>Ocena powstania do dziś jest przedmiotem dyskusji: bohaterski zryw o wolność czy decyzja, która przyniosła ogromne straty?</p>
        <div class="tip">💡 Powstanie: <b>1 VIII – 2 X 1944</b>, 63 dni. Na każdy dzień powstania przypadały tysiące ofiar wśród cywilów.</div>`,
      flashcards: [
        ['Polskie Państwo Podziemne', 'Tajne struktury państwa polskiego w okupowanym kraju, podległe rządowi na uchodźstwie'],
        ['Delegatura Rządu na Kraj', 'Tajna administracja państwa podziemnego'],
        ['Armia Krajowa', 'Konspiracyjne wojsko; powstało 14 lutego 1942 r. ze Związku Walki Zbrojnej'],
        ['Pierwszy komendant AK', 'Gen. Stefan Rowecki „Grot”'],
        ['Tajne nauczanie', 'Podziemne szkoły i uczelnie (komplety)'],
        ['Szare Szeregi', 'Konspiracyjne harcerstwo'],
        ['Akcja „Burza”', '1944: AK atakuje Niemców przed wejściem Armii Czerwonej'],
        ['Wybuch powstania warszawskiego', '1 sierpnia 1944 r., godz. 17 („godzina W”)'],
        ['Kapitulacja powstania warszawskiego', '2 października 1944 r., po 63 dniach'],
        ['Postawa ZSRS wobec powstania', 'Armia Czerwona stała za Wisłą i nie pomogła'],
        ['Skutki powstania', 'Ok. 18 tys. poległych powstańców, ok. 180 tys. cywilów, zburzona Warszawa'],
      ],
      questions: [
        { id: 'zds7qh', q: 'Czym było Polskie Państwo Podziemne?', options: ['rządem w Moskwie', 'tajnymi strukturami państwa polskiego w okupowanym kraju', 'partią komunistyczną', 'niemiecką administracją'], answer: 1, explain: 'Państwo podziemne miało administrację, wojsko i zalążek parlamentu, podległe rządowi na uchodźstwie.' },
        { id: 'u2qlq8', q: 'Z jakiej organizacji powstała w 1942 r. Armia Krajowa?', options: ['ze Związku Walki Zbrojnej', 'z Armii Czerwonej', 'z Szarych Szeregów', 'z Legionów'], answer: 0, explain: '14 lutego 1942 r. Związek Walki Zbrojnej przemianowano na Armię Krajową.' },
        { id: 'x3v0ho', q: 'Kto był pierwszym komendantem Armii Krajowej?', options: ['gen. Władysław Sikorski', 'gen. Władysław Anders', 'gen. Stefan Rowecki „Grot”', 'gen. Wojciech Jaruzelski'], answer: 2, explain: 'Po aresztowaniu „Grota” przez Niemców w 1943 r. dowództwo objął gen. Tadeusz Komorowski „Bór”.' },
        { id: '709w8j', q: 'Która forma oporu polegała na prowadzeniu podziemnych szkół?', options: ['dywersja', 'wywiad', 'mały sabotaż', 'tajne nauczanie'], answer: 3, explain: 'Niemcy zamknęli szkoły średnie i wyższe – Polacy uczyli się w tajnych kompletach.' },
        { id: '0a6vcv', q: 'Kiedy wybuchło powstanie warszawskie?', options: ['19 kwietnia 1943 r.', '1 sierpnia 1944 r.', '17 stycznia 1945 r.', '1 września 1939 r.'], answer: 1, explain: '„Godzina W” – 1 sierpnia 1944 r. o 17.00.' },
        { id: 'cp9yix', q: 'Ile dni trwało powstanie warszawskie?', options: ['7', '28', '63', '365'], answer: 2, explain: 'Od 1 sierpnia do 2 października 1944 r. – 63 dni.' },
        { id: '9lw5qe', q: 'Jaka była postawa Armii Czerwonej wobec powstania warszawskiego?', options: ['nie udzieliła pomocy, choć stała po drugiej stronie Wisły', 'natychmiast wyzwoliła Warszawę', 'zrzucała broń każdego dnia', 'walczyła ramię w ramię z AK od pierwszego dnia'], answer: 0, explain: 'Stalinowi zależało na osłabieniu AK i władz podległych rządowi w Londynie.' },
        { id: 'tkpb79', q: 'Który cel przyświecał dowódcom powstania warszawskiego?', options: ['przyłączenie Warszawy do Niemiec', 'pomoc Armii Czerwonej w zajęciu Berlina', 'zakończenie wojny na Pacyfiku', 'wyzwolenie stolicy przez Polaków przed wkroczeniem Sowietów'], answer: 3, explain: 'Chciano, by to władze polskie przyjęły Armię Czerwoną jako gospodarze stolicy.' },
        { id: 'exieip', q: 'Jaki był skutek powstania warszawskiego?', options: ['wyzwolenie Polski', 'śmierć ok. 180 tys. cywilów i zniszczenie Warszawy', 'wejście Polski do NATO', 'powrót rządu z Londynu'], answer: 1, explain: 'Po kapitulacji Niemcy wypędzili mieszkańców i burzyli miasto.' },
        { id: 'hlt0s4', q: 'Na czym polegała akcja „Burza”?', options: ['na atakowaniu wycofujących się Niemców przez AK przed wejściem Armii Czerwonej', 'na bombardowaniu Berlina', 'na ewakuacji rządu do Rumunii', 'na strajkach w stoczniach'], answer: 0, explain: 'AK chciała występować jako gospodarz wyzwalanych terenów; Sowieci często rozbrajali i aresztowali jej żołnierzy.' },
        { id: '5rh6o4', q: 'Prawda czy fałsz?\nPo kapitulacji powstania Niemcy uznali powstańców za żołnierzy z prawami kombatanckimi.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Tak stanowił układ kapitulacyjny z 2 października 1944 r.' },
      ],
    },
    {
      id: 'sprawa-polska',
      name: 'Rząd na uchodźstwie i Polacy na frontach',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXIV „Sprawa polska w czasie II wojny światowej”, wym. 1–3 (rząd RP na wychodźstwie, polskie formacje na frontach wojny, polityka mocarstw wobec sprawy polskiej).',
      theory: `
        <h3>Rząd na uchodźstwie</h3>
        <ul>
          <li>We wrześniu 1939 r. władze przekroczyły granicę z Rumunią i zostały internowane. Nowym prezydentem został <b>Władysław Raczkiewicz</b>, a premierem i Naczelnym Wodzem – gen. <b>Władysław Sikorski</b>.</li>
          <li>Rząd działał najpierw we <b>Francji</b>, a po jej klęsce w 1940 r. – w <b>Londynie</b>.</li>
          <li><b>30 lipca 1941 r.</b> – <b>układ Sikorski–Majski</b> z ZSRS (po ataku Niemiec na ZSRS): zwolnienie Polaków z łagrów i utworzenie w ZSRS polskiej armii pod dowództwem gen. <b>Władysława Andersa</b>. W 1942 r. armia Andersa wyszła z ZSRS na Bliski Wschód.</li>
          <li>W 1943 r. Niemcy ujawnili groby w Katyniu. Gdy rząd polski zażądał wyjaśnień, <b>ZSRS zerwał z nim stosunki</b>.</li>
          <li><b>4 lipca 1943 r.</b> gen. Sikorski zginął w katastrofie lotniczej w <b>Gibraltarze</b>.</li>
        </ul>
        <h3>Polacy na frontach</h3>
        <table>
          <tr><th>Gdzie</th><th>Kto</th></tr>
          <tr><td><b>Narwik</b> (Norwegia, 1940)</td><td>Samodzielna Brygada Strzelców Podhalańskich</td></tr>
          <tr><td><b>bitwa o Anglię</b> (1940)</td><td>polscy lotnicy, m.in. <b>Dywizjon 303</b></td></tr>
          <tr><td><b>Tobruk</b> (Libia, 1941)</td><td>Samodzielna Brygada Strzelców Karpackich</td></tr>
          <tr><td><b>Monte Cassino</b> (Włochy, maj 1944)</td><td><b>2 Korpus Polski</b> gen. Andersa zdobył klasztor</td></tr>
          <tr><td><b>Falaise</b> (Francja, 1944)</td><td><b>1 Dywizja Pancerna</b> gen. Stanisława Maczka</td></tr>
          <tr><td><b>Arnhem</b> (Holandia, 1944)</td><td>1 Samodzielna Brygada Spadochronowa gen. Stanisława Sosabowskiego</td></tr>
          <tr><td><b>Lenino</b> (ZSRS, 12 X 1943)</td><td>1 Dywizja im. Tadeusza Kościuszki (gen. Zygmunt Berling) – wojsko tworzone przez komunistów u boku Armii Czerwonej</td></tr>
        </table>
        <h3>Polityka mocarstw wobec Polski</h3>
        <p>Wielka Brytania i USA potrzebowały ZSRS do pokonania Niemiec, więc <b>ustępowały Stalinowi</b>: w Teheranie i Jałcie zgodziły się na granicę na linii Curzona i na Polskę w strefie wpływów ZSRS – bez zgody rządu polskiego. W 1945 r. wycofały uznanie dla rządu w Londynie i uznały Tymczasowy Rząd Jedności Narodowej, zdominowany przez komunistów.</p>
        <div class="tip">💡 Polacy walczyli na lądzie, morzu i w powietrzu od pierwszego do ostatniego dnia wojny – ale o losie Polski zdecydowały mocarstwa.</div>`,
      flashcards: [
        ['Premier i Naczelny Wódz na uchodźstwie (od 1939)', 'Gen. Władysław Sikorski'],
        ['Siedziba rządu na uchodźstwie', 'Najpierw Francja, od 1940 r. Londyn'],
        ['Układ Sikorski–Majski', '30 lipca 1941 r.; zwolnienie Polaków z łagrów, armia polska w ZSRS'],
        ['Armia Andersa', 'Polska armia utworzona w ZSRS; w 1942 r. wyszła na Bliski Wschód'],
        ['Śmierć gen. Sikorskiego', '4 lipca 1943 r., katastrofa lotnicza w Gibraltarze'],
        ['Dywizjon 303', 'Polscy lotnicy w bitwie o Anglię (1940)'],
        ['Monte Cassino', 'Maj 1944 – zdobycie klasztoru przez 2 Korpus gen. Andersa'],
        ['Falaise', '1944 – bitwa z udziałem 1 Dywizji Pancernej gen. Maczka'],
        ['Arnhem', '1944 – Brygada Spadochronowa gen. Sosabowskiego'],
        ['Lenino', '12 października 1943 r. – chrzest bojowy 1 Dywizji im. Kościuszki'],
        ['Postawa mocarstw zachodnich', 'Ustępowały Stalinowi kosztem Polski (Teheran, Jałta)'],
      ],
      questions: [
        { id: 'ckijk2', q: 'Kto był premierem rządu RP na uchodźstwie i Naczelnym Wodzem od 1939 r.?', options: ['Władysław Anders', 'Władysław Sikorski', 'Stanisław Mikołajczyk', 'Józef Piłsudski'], answer: 1, explain: 'Gen. Władysław Sikorski kierował rządem i wojskiem do śmierci w 1943 r.' },
        { id: 'jfy0it', q: 'Gdzie działał rząd RP na uchodźstwie po klęsce Francji w 1940 r.?', options: ['w Moskwie', 'w Waszyngtonie', 'w Londynie', 'w Rzymie'], answer: 2, explain: 'Po upadku Francji rząd przeniósł się do Londynu.' },
        { id: 'wf0lfa', q: 'Co przewidywał układ Sikorski–Majski z 1941 r.?', options: ['podział Polski', 'utworzenie polskiej armii w ZSRS i zwolnienie Polaków z łagrów', 'wejście Polski do NATO', 'kapitulację Niemiec'], answer: 1, explain: 'Na tej podstawie powstała armia gen. Andersa.' },
        { id: 'xu3uqm', q: 'Dlaczego ZSRS zerwał w 1943 r. stosunki z rządem polskim?', options: ['bo rząd zażądał wyjaśnienia zbrodni katyńskiej', 'bo Polska zaatakowała ZSRS', 'bo Sikorski zginął', 'bo powstanie warszawskie się nie udało'], answer: 0, explain: 'Gdy Niemcy ujawnili groby w Katyniu, rząd polski poprosił o zbadanie sprawy – Stalin wykorzystał to jako pretekst.' },
        { id: 'esuise', q: 'Gdzie zginął gen. Władysław Sikorski?', options: ['pod Monte Cassino', 'w Katyniu', 'w Warszawie', 'w katastrofie lotniczej w Gibraltarze'], answer: 3, explain: '4 lipca 1943 r. samolot z gen. Sikorskim rozbił się zaraz po starcie w Gibraltarze.' },
        { id: 'i422l2', q: 'W której bitwie zasłynął Dywizjon 303?', options: ['w bitwie o Anglię', 'pod Monte Cassino', 'pod Lenino', 'nad Bzurą'], answer: 0, explain: 'Polscy lotnicy bronili Wielkiej Brytanii przed Luftwaffe w 1940 r.' },
        { id: '5c9l53', q: 'Która polska formacja zdobyła klasztor na Monte Cassino?', options: ['1 Dywizja Pancerna', 'Brygada Spadochronowa', '2 Korpus Polski gen. Andersa', 'Dywizja im. Kościuszki'], answer: 2, explain: 'W maju 1944 r. 2 Korpus zdobył wzgórze klasztorne we Włoszech.' },
        { id: '3r432i', q: 'Którą formacją dowodził gen. Stanisław Maczek?', options: ['1 Dywizją Pancerną', 'Dywizjonem 303', 'Armią Krajową', 'Brygadą Karpacką'], answer: 0, explain: 'Dywizja Maczka walczyła m.in. pod Falaise, a potem w Belgii i Holandii.' },
        { id: 'evmp7n', q: 'Pod Lenino w 1943 r. walczyła…', options: ['armia Andersa', 'Brygada Podhalańska', '1 Dywizja im. Tadeusza Kościuszki u boku Armii Czerwonej', 'Armia Krajowa'], answer: 2, explain: 'To wojsko tworzone przez komunistów w ZSRS; dowodził gen. Zygmunt Berling.' },
        { id: '3t3vrx', q: 'Jak zachowywały się Wielka Brytania i USA wobec żądań Stalina w sprawie Polski?', options: ['zdecydowanie się sprzeciwiały', 'ustępowały, bo potrzebowały ZSRS do pokonania Niemiec', 'wypowiedziały ZSRS wojnę', 'nie wiedziały o nich'], answer: 1, explain: 'Na konferencjach w Teheranie i Jałcie zgodziły się na granicę na linii Curzona i wpływy ZSRS w Polsce.' },
        { id: '6916ia', q: 'Prawda czy fałsz?\nArmia gen. Andersa wyszła z ZSRS w 1942 r. na Bliski Wschód.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Potem jako 2 Korpus walczyła m.in. we Włoszech.' },
      ],
    },
    {
      id: 'zimna-wojna',
      name: 'Świat po wojnie i zimna wojna',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXV „Świat po II wojnie światowej”, wym. 1–8 (skutki wojny i powstanie ONZ, rozpad koalicji i początki zimnej wojny, NATO i Układ Warszawski, interwencje ZSRS na Węgrzech i w Czechosłowacji, dekolonizacja, konflikty zimnej wojny, przyczyny konfliktu na Bliskim Wschodzie, przemiany w Chinach).',
      theory: `
        <h3>ONZ</h3>
        <p>W 1945 r. powstała <b>Organizacja Narodów Zjednoczonych</b> – miała dbać o pokój na świecie. Najważniejsze decyzje podejmuje <b>Rada Bezpieczeństwa</b>; jej <b>pięciu stałych członków</b> (USA, ZSRS – dziś Rosja, Wielka Brytania, Francja, Chiny) ma <b>prawo weta</b>.</p>
        <h3>Zimna wojna (1947–1991)</h3>
        <p>Koalicja antyhitlerowska rozpadła się: Zachód (demokracja, gospodarka rynkowa) i ZSRS (komunizm) zaczęły rywalizować. Nazwano to <b>zimną wojną</b> – napięcie, wyścig zbrojeń, propaganda, ale bez bezpośredniej wojny między USA a ZSRS.</p>
        <ul>
          <li><b>żelazna kurtyna</b> – granica dzieląca Europę na wschód i zachód,</li>
          <li><b>plan Marshalla</b> – amerykańska pomoc w odbudowie Europy; Stalin zmusił państwa bloku wschodniego (także Polskę) do odrzucenia go,</li>
          <li><b>blokada Berlina Zachodniego</b> (1948–1949) przez ZSRS – Zachód zaopatrywał miasto mostem powietrznym,</li>
          <li>w 1949 r. powstały dwa państwa niemieckie – RFN i NRD; w 1961 r. zbudowano <b>mur berliński</b>.</li>
        </ul>
        <h3>Dwa bloki</h3>
        <table>
          <tr><th>NATO (1949)</th><th>Układ Warszawski (1955)</th></tr>
          <tr><td>sojusz państw zachodnich, m.in. USA, Kanada, Wielka Brytania, Francja</td><td>sojusz państw bloku wschodniego pod przewodnictwem ZSRS, w tym PRL</td></tr>
        </table>
        <h3>ZSRS pilnuje swojego bloku</h3>
        <ul>
          <li><b>Węgry 1956</b> – Węgrzy wystąpili przeciw władzy komunistycznej; premier Imre Nagy zapowiedział zmiany – wojska sowieckie krwawo stłumiły powstanie.</li>
          <li><b>Czechosłowacja 1968</b> – reformy „<b>Praskiej Wiosny</b>” zdławiła interwencja wojsk Układu Warszawskiego (także polskich).</li>
        </ul>
        <h3>Konflikty zimnej wojny (przykłady)</h3>
        <ul>
          <li><b>wojna koreańska</b> (1950–1953) – Korea Północna (wspierana przez ZSRS i Chiny) zaatakowała Południe (wspierane przez USA i ONZ); Korea pozostała podzielona,</li>
          <li><b>kryzys kubański</b> (1962) – sowieckie rakiety na Kubie; świat stanął na krawędzi wojny atomowej,</li>
          <li><b>wojna w Wietnamie</b> – USA wspierały Wietnam Południowy przeciw komunistom z Północy,</li>
          <li>wojna w Afganistanie w latach 80. – interwencja ZSRS.</li>
        </ul>
        <h3>Dekolonizacja</h3>
        <p>Po wojnie kolonie w Azji i Afryce zdobywały niepodległość (np. Indie w 1947 r.; <b>1960 – „Rok Afryki”</b>, gdy niepodległość uzyskało wiele państw afrykańskich). Skutki: powstanie wielu nowych państw, ale też konflikty, bieda i wojny domowe.</p>
        <h3>Bliski Wschód i Chiny</h3>
        <ul>
          <li>W <b>1948 r.</b> powstał <b>Izrael</b>; państwa arabskie go nie uznały – zaczął się <b>konflikt arabsko-izraelski</b> (spór o ziemię Palestyny).</li>
          <li>W <b>1949 r.</b> komuniści pod wodzą <b>Mao Zedonga</b> utworzyli <b>Chińską Republikę Ludową</b>. Rządy Mao (m.in. rewolucja kulturalna) kosztowały życie milionów ludzi. Po jego śmierci (1976) Deng Xiaoping wprowadził <b>reformy gospodarcze</b>, ale nie demokrację – protesty w Pekinie w 1989 r. krwawo stłumiono.</li>
        </ul>
        <div class="tip">💡 NATO – 19<b>49</b>, Układ Warszawski – 19<b>55</b>: najpierw Zachód, potem odpowiedź Wschodu.</div>`,
      flashcards: [
        ['ONZ', 'Organizacja Narodów Zjednoczonych (1945) – ma dbać o pokój na świecie'],
        ['Prawo weta w ONZ', 'Mają je stali członkowie Rady Bezpieczeństwa'],
        ['Zimna wojna', '1947–1991 – rywalizacja Zachodu z ZSRS bez bezpośredniej wojny między nimi'],
        ['Żelazna kurtyna', 'Granica dzieląca Europę na blok wschodni i zachodni'],
        ['Plan Marshalla', 'Amerykańska pomoc w odbudowie Europy; blok wschodni musiał ją odrzucić'],
        ['NATO', '1949 – sojusz państw zachodnich'],
        ['Układ Warszawski', '1955 – sojusz bloku wschodniego pod przewodnictwem ZSRS'],
        ['Mur berliński', 'Zbudowany w 1961 r., zburzony w 1989 r.'],
        ['Węgry 1956', 'Powstanie przeciw komunistom stłumione przez wojska sowieckie'],
        ['Praska Wiosna', 'Reformy w Czechosłowacji 1968, zdławione przez wojska Układu Warszawskiego'],
        ['Kryzys kubański', '1962 – sowieckie rakiety na Kubie, groźba wojny atomowej'],
        ['Rok Afryki', '1960 – niepodległość wielu państw afrykańskich'],
        ['Powstanie ChRL', '1949 – Mao Zedong'],
        ['Powstanie Izraela', '1948 – początek konfliktu arabsko-izraelskiego'],
      ],
      questions: [
        { id: 'jmbgna', q: 'Kiedy powstała Organizacja Narodów Zjednoczonych?', options: ['1919', '1939', '1945', '1989'], answer: 2, explain: 'ONZ powstała w 1945 r., pod koniec II wojny światowej.' },
        { id: 'fel66n', q: 'Co oznacza prawo weta stałych członków Rady Bezpieczeństwa ONZ?', options: ['każdy z nich może zablokować decyzję Rady', 'mogą wyrzucić każde państwo z ONZ', 'mają podwójny głos w wyborach', 'nie płacą składek'], answer: 0, explain: 'Sprzeciw jednego stałego członka blokuje decyzję – dlatego w czasie zimnej wojny ONZ często była bezradna.' },
        { id: 'm4rpfe', q: 'Czym była zimna wojna?', options: ['wojną toczoną zimą w Rosji', 'rywalizacją Zachodu i ZSRS bez bezpośredniej wojny między USA a ZSRS', 'konfliktem Polski z Niemcami', 'wojną w Arktyce'], answer: 1, explain: 'Rywalizacja polityczna, gospodarcza i wyścig zbrojeń trwały w latach 1947–1991.' },
        { id: 'ueb0y9', q: 'Dlaczego Polska nie skorzystała z planu Marshalla?', options: ['bo nie była zniszczona', 'bo USA jej nie zaprosiły', 'bo pomoc była za mała', 'bo Stalin zmusił państwa bloku wschodniego do odrzucenia pomocy'], answer: 3, explain: 'ZSRS nie chciał wpływów amerykańskich w swojej strefie.' },
        { id: 'wy7zij', q: 'Kiedy powstało NATO?', options: ['1949', '1955', '1961', '1999'], answer: 0, explain: 'NATO powstało w 1949 r.; Układ Warszawski – w 1955 r.' },
        { id: 'f5ffj3', q: 'Czym był Układ Warszawski?', options: ['traktatem pokojowym z Niemcami', 'sojuszem państw bloku wschodniego pod przewodnictwem ZSRS', 'umową handlową Polski i USA', 'organizacją ochrony przyrody'], answer: 1, explain: 'Układ Warszawski (1955–1991) był przeciwwagą dla NATO.' },
        { id: '6t602h', q: 'Które wydarzenie było interwencją ZSRS w państwie bloku wschodniego?', options: ['blokada Berlina Zachodniego', 'wojna w Korei', 'stłumienie powstania na Węgrzech w 1956 r.', 'kryzys kubański'], answer: 2, explain: 'Wojska sowieckie krwawo stłumiły węgierskie powstanie. W 1968 r. wojska Układu Warszawskiego zdławiły Praską Wiosnę.' },
        { id: 'vd6a5h', q: 'W którym roku wojska Układu Warszawskiego zdławiły Praską Wiosnę w Czechosłowacji?', options: ['1956', '1968', '1980', '1989'], answer: 1, explain: 'W 1968 r. – w interwencji wzięło udział także wojsko PRL.' },
        { id: 'pmmjn3', q: 'Które wydarzenie zimnej wojny postawiło świat na krawędzi wojny atomowej?', options: ['kryzys kubański w 1962 r.', 'powstanie ONZ', 'budowa Nowej Huty', 'Rok Afryki'], answer: 0, explain: 'ZSRS rozmieścił rakiety na Kubie; po kilkunastu dniach napięcia mocarstwa się porozumiały.' },
        { id: 'l5w091', q: 'Dlaczego rok 1960 nazwano „Rokiem Afryki”?', options: ['bo odkryto wtedy Afrykę', 'bo w Afryce zbudowano mur', 'bo w Afryce odbyły się igrzyska', 'bo niepodległość uzyskało wtedy wiele państw afrykańskich'], answer: 3, explain: 'To był szczyt dekolonizacji Afryki.' },
        { id: '383qv2', q: 'Co zapoczątkowało konflikt arabsko-izraelski?', options: ['powstanie państwa Izrael w 1948 r., którego państwa arabskie nie uznały', 'kryzys kubański', 'wojna w Korei', 'upadek muru berlińskiego'], answer: 0, explain: 'Spór dotyczył ziemi Palestyny.' },
        { id: 'o5rfly', q: 'Kto utworzył w 1949 r. Chińską Republikę Ludową?', options: ['Deng Xiaoping', 'komuniści pod wodzą Mao Zedonga', 'Japończycy', 'Amerykanie'], answer: 1, explain: 'Po wojnie domowej władzę w Chinach przejęli komuniści Mao Zedonga.' },
        { id: '0queli', q: 'Prawda czy fałsz?\nPo śmierci Mao Zedonga w Chinach wprowadzono reformy gospodarcze, ale nie demokrację.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Protesty w Pekinie w 1989 r. zostały krwawo stłumione.' },
      ],
    },
    {
      id: 'europa-1989',
      name: 'Upadek komunizmu i zjednoczona Europa',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXV, wym. 9–11 (przemiany w Europie Środkowo-Wschodniej w latach 1989–1991 i rozpad ZSRS, cele i etapy integracji europejskiej, przemiany kulturowe i społeczne po II wojnie światowej).',
      theory: `
        <h3>Jesień Ludów (1989)</h3>
        <ul>
          <li>Od 1985 r. przywódcą ZSRS był <b>Michaił Gorbaczow</b> – próbował reformować kraj; ZSRS przestał siłą pilnować swoich „satelitów”.</li>
          <li>W 1989 r. komunizm upadł w kolejnych państwach Europy Środkowo-Wschodniej. Zaczęło się w <b>Polsce</b> (Okrągły Stół, wybory 4 czerwca 1989). Ponieważ większość przemian nastąpiła jesienią – mówimy o <b>Jesieni Ludów</b>.</li>
          <li><b>9 listopada 1989 r.</b> – otwarcie granicy i <b>upadek muru berlińskiego</b>; <b>3 października 1990 r.</b> – <b>zjednoczenie Niemiec</b>.</li>
          <li>W 1991 r. rozwiązano Układ Warszawski, a w <b>grudniu 1991 r.</b> <b>rozpadł się ZSRS</b> – powstały niepodległe państwa, m.in. Ukraina, Litwa, Białoruś, Rosja. Koniec zimnej wojny.</li>
        </ul>
        <h3>Integracja europejska</h3>
        <p><b>Cele</b>: pokój w Europie (żeby nigdy więcej nie było wojny między Francją a Niemcami), wspólny rynek i dobrobyt, współpraca państw demokratycznych.</p>
        <table>
          <tr><th>Rok</th><th>Etap</th></tr>
          <tr><td>1950</td><td><b>plan Schumana</b> – wspólne zarządzanie węglem i stalą</td></tr>
          <tr><td>1951</td><td>Europejska Wspólnota Węgla i Stali (EWWiS)</td></tr>
          <tr><td>1957</td><td><b>traktaty rzymskie</b> – Europejska Wspólnota Gospodarcza (EWG): wspólny rynek, unia celna</td></tr>
          <tr><td>1992</td><td><b>traktat z Maastricht</b> – powołanie <b>Unii Europejskiej</b></td></tr>
          <tr><td>2004</td><td>wielkie rozszerzenie – do UE wstępuje m.in. <b>Polska</b></td></tr>
        </table>
        <h3>Przemiany kulturowe i społeczne po wojnie</h3>
        <ul>
          <li><b>kultura masowa</b>: telewizja, muzyka rockowa, filmy, moda młodzieżowa,</li>
          <li><b>podbój kosmosu</b>: 1961 – Jurij Gagarin pierwszym człowiekiem w kosmosie; 1969 – <b>Neil Armstrong</b> na Księżycu,</li>
          <li>bunt młodzieży: ruch hipisowski i protesty przeciw wojnie w Wietnamie,</li>
          <li>rozwój techniki: komputery, a potem internet.</li>
        </ul>
        <div class="tip">💡 Kolejność integracji: <b>węgiel i stal → gospodarka (EWG) → Unia</b>: 1951 → 1957 → 1992.</div>`,
      flashcards: [
        ['Jesień Ludów', '1989 – upadek komunizmu w krajach Europy Środkowo-Wschodniej'],
        ['Michaił Gorbaczow', 'Przywódca ZSRS od 1985 r., próbował reformować kraj'],
        ['Upadek muru berlińskiego', '9 listopada 1989 r.'],
        ['Zjednoczenie Niemiec', '3 października 1990 r.'],
        ['Rozpad ZSRS', 'Grudzień 1991 r. – powstały niepodległe państwa, m.in. Ukraina, Litwa, Rosja'],
        ['Cele integracji europejskiej', 'Pokój, wspólny rynek i dobrobyt, współpraca demokratycznych państw'],
        ['Plan Schumana', '1950 – wspólne zarządzanie węglem i stalą'],
        ['Traktaty rzymskie', '1957 – Europejska Wspólnota Gospodarcza (EWG)'],
        ['Traktat z Maastricht', '1992 – powołanie Unii Europejskiej'],
        ['Pierwszy człowiek w kosmosie', 'Jurij Gagarin, 1961'],
        ['Pierwszy człowiek na Księżycu', 'Neil Armstrong, 1969'],
      ],
      questions: [
        { id: 'w2n6z4', q: 'Co nazywamy Jesienią Ludów?', options: ['powstanie na Węgrzech w 1956 r.', 'upadek komunizmu w krajach Europy Środkowo-Wschodniej w 1989 r.', 'zjednoczenie Europy w 2004 r.', 'rewolucję w Rosji'], answer: 1, explain: 'Większość przemian nastąpiła jesienią 1989 r. – stąd nazwa.' },
        { id: 'a6q8sp', q: 'Kiedy upadł mur berliński?', options: ['13 sierpnia 1961 r.', '4 czerwca 1989 r.', '9 listopada 1989 r.', '3 października 1990 r.'], answer: 2, explain: '9 listopada 1989 r. władze NRD otworzyły granicę – mur zaczęto burzyć.' },
        { id: 'n11a7b', q: 'Kiedy zjednoczyły się Niemcy?', options: ['3 października 1990 r.', '9 listopada 1989 r.', '8 maja 1945 r.', '1 maja 2004 r.'], answer: 0, explain: 'NRD przyłączyła się do RFN 3 października 1990 r.' },
        { id: 'qw9xr8', q: 'W którym roku rozpadł się ZSRS?', options: ['1956', '1981', '1989', '1991'], answer: 3, explain: 'W grudniu 1991 r. ZSRS przestał istnieć – powstały niepodległe państwa, m.in. Ukraina i Litwa.' },
        { id: 'sv2x5f', q: 'Kto był przywódcą ZSRS w czasie Jesieni Ludów?', options: ['Józef Stalin', 'Michaił Gorbaczow', 'Nikita Chruszczow', 'Lech Wałęsa'], answer: 1, explain: 'Gorbaczow (od 1985 r.) próbował reform i nie interweniował zbrojnie w krajach bloku.' },
        { id: 'asufoo', q: 'Który był główny cel integracji europejskiej po II wojnie światowej?', options: ['utrwalenie pokoju i współpraca gospodarcza', 'odbudowa kolonii', 'walka z USA', 'utworzenie wspólnej armii przeciw NATO'], answer: 0, explain: 'Wspólne zarządzanie węglem i stalą miało uniemożliwić kolejną wojnę Francji z Niemcami.' },
        { id: 'pcj5ja', q: 'Który dokument powołał Europejską Wspólnotę Gospodarczą (EWG)?', options: ['traktat z Maastricht', 'plan Marshalla', 'traktaty rzymskie', 'Karta Narodów Zjednoczonych'], answer: 2, explain: 'Traktaty rzymskie podpisano w 1957 r.' },
        { id: 'jn1gnx', q: 'Który traktat powołał Unię Europejską?', options: ['traktat z Maastricht (1992)', 'traktat wersalski', 'traktaty rzymskie (1957)', 'Układ Warszawski'], answer: 0, explain: 'Traktat z Maastricht przekształcił wspólnoty w Unię Europejską.' },
        { id: 'reawso', q: 'Uporządkuj etapy integracji: EWG, EWWiS, Unia Europejska. Który był pierwszy?', options: ['Unia Europejska', 'EWG', 'wszystkie powstały razem', 'EWWiS'], answer: 3, explain: 'EWWiS (1951) → EWG (1957) → UE (1992).' },
        { id: '9clabb', q: 'Kto jako pierwszy człowiek stanął na Księżycu?', options: ['Jurij Gagarin', 'Neil Armstrong', 'Mirosław Hermaszewski', 'Michaił Gorbaczow'], answer: 1, explain: 'Neil Armstrong w 1969 r. Gagarin był pierwszym człowiekiem w kosmosie (1961).' },
        { id: '6zidab', q: 'Prawda czy fałsz?\nPrzemiany Jesieni Ludów rozpoczęły się w Polsce.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Okrągły Stół i wybory 4 czerwca 1989 r. otworzyły drogę zmianom w regionie.' },
      ],
    },
    {
      id: 'polska-1944-1956',
      name: 'Komuniści u władzy i stalinizm (1944–1956)',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXVI „Początki komunizmu w Polsce” (okoliczności przejęcia władzy, postawy Polaków i formy oporu) i dz. XXXVII „Stalinizm w Polsce i jego skutki” (terror i przemiany w okresie stalinizmu, poznański czerwiec 1956, Październik 1956).',
      theory: `
        <h3>Jak komuniści przejęli władzę</h3>
        <table>
          <tr><th>Kiedy</th><th>Co</th></tr>
          <tr><td>22 lipca 1944</td><td><b>Manifest PKWN</b> – komuniści pod opieką Stalina ogłaszają się władzą w Polsce; nie uznają rządu w Londynie</td></tr>
          <tr><td>czerwiec 1945</td><td><b>Tymczasowy Rząd Jedności Narodowej</b> (realizacja ustaleń z Jałty) – przewaga komunistów, wicepremierem Stanisław Mikołajczyk (PSL); Zachód przestaje uznawać rząd w Londynie</td></tr>
          <tr><td>30 czerwca 1946</td><td><b>referendum</b> („3 razy TAK”) – <b>sfałszowane</b></td></tr>
          <tr><td>19 stycznia 1947</td><td><b>wybory do Sejmu</b> – sfałszowane; komuniści przejmują pełnię władzy, Mikołajczyk ucieka z kraju</td></tr>
          <tr><td>grudzień 1948</td><td>powstaje <b>PZPR</b> – partia komunistyczna, która rządzi aż do 1989 r.</td></tr>
          <tr><td>22 lipca 1952</td><td><b>Konstytucja PRL</b> – nowa nazwa: <b>Polska Rzeczpospolita Ludowa</b>; wzorowana na sowieckiej</td></tr>
        </table>
        <h3>Postawy Polaków</h3>
        <ul>
          <li><b>opór zbrojny</b> – podziemie niepodległościowe walczyło z komunistami; jego członków nazywamy <b>żołnierzami wyklętymi</b> (do końca lat 40. w większości rozbici),</li>
          <li><b>opór legalny</b> – PSL Mikołajczyka,</li>
          <li><b>przystosowanie</b> – wielu chciało po prostu odbudować kraj i żyć,</li>
          <li><b>poparcie</b> – część ludzi popierała reformy (np. reforma rolna, odbudowa).</li>
        </ul>
        <h3>Stalinizm (ok. 1948–1956)</h3>
        <ul>
          <li><b>terror</b> – aparat bezpieczeństwa (UB), tortury, pokazowe procesy, wyroki śmierci (np. na rotmistrzu Witoldzie Pileckim),</li>
          <li>władza w rękach partii; przywódca – Bolesław Bierut,</li>
          <li><b>plan sześcioletni</b> – budowa przemysłu ciężkiego, np. kombinat i miasto <b>Nowa Huta</b>; mało towarów dla ludzi,</li>
          <li><b>kolektywizacja</b> – zmuszanie chłopów do wspólnych gospodarstw (spółdzielni produkcyjnych),</li>
          <li>walka z <b>Kościołem</b> – uwięziono prymasa <b>Stefana Wyszyńskiego</b>,</li>
          <li>w kulturze obowiązywał <b>socrealizm</b> – sztuka miała chwalić władzę i budowę socjalizmu.</li>
        </ul>
        <h3>1956: Poznań i Październik</h3>
        <ul>
          <li><b>Czerwiec 1956</b> – robotnicy w <b>Poznaniu</b> wyszli na ulice, żądając poprawy warunków życia; protest przerodził się w walki, władza użyła wojska – zginęło kilkadziesiąt osób.</li>
          <li><b>Październik 1956</b> – „<b>odwilż</b>”: I sekretarzem PZPR został <b>Władysław Gomułka</b>; uwolniono prymasa Wyszyńskiego, ograniczono terror, zaniechano przymusowej kolektywizacji. Komunizm jednak pozostał.</li>
        </ul>
        <div class="tip">💡 Droga do pełni władzy: <b>PKWN (1944) → referendum (1946) → wybory (1947) → PZPR (1948) → Konstytucja PRL (1952)</b>.</div>`,
      flashcards: [
        ['Manifest PKWN', '22 lipca 1944 r. – komuniści ogłaszają się władzą w Polsce'],
        ['TRJN', 'Tymczasowy Rząd Jedności Narodowej (1945) – realizacja ustaleń z Jałty'],
        ['Referendum „3 razy TAK”', '30 czerwca 1946 r. – sfałszowane'],
        ['Wybory do Sejmu 1947', '19 stycznia 1947 r. – sfałszowane'],
        ['PZPR', 'Partia komunistyczna utworzona w grudniu 1948 r., rządziła do 1989 r.'],
        ['Konstytucja PRL', '22 lipca 1952 r.; nazwa Polska Rzeczpospolita Ludowa'],
        ['Żołnierze wyklęci', 'Żołnierze podziemia niepodległościowego walczący z komunistami po wojnie'],
        ['Stalinizm', 'Okres terroru i podporządkowania ZSRS (ok. 1948–1956)'],
        ['Nowa Huta', 'Kombinat i miasto budowane w planie sześcioletnim'],
        ['Kolektywizacja', 'Zmuszanie chłopów do wspólnych gospodarstw'],
        ['Socrealizm', 'Obowiązkowy styl w sztuce – chwalenie władzy i budowy socjalizmu'],
        ['Czerwiec 1956', 'Protest robotników w Poznaniu, krwawo stłumiony przez wojsko'],
        ['Październik 1956', 'Odwilż; Władysław Gomułka I sekretarzem PZPR, uwolnienie prymasa Wyszyńskiego'],
      ],
      questions: [
        { id: 'onr1c4', q: 'Kiedy ogłoszono Manifest PKWN?', options: ['22 lipca 1944 r.', '1 sierpnia 1944 r.', '8 maja 1945 r.', '19 stycznia 1947 r.'], answer: 0, explain: 'Manifest PKWN ogłoszono 22 lipca 1944 r. – komuniści, wspierani przez Stalina, ogłosili się władzą.' },
        { id: 'lpal2a', q: 'Jak przeprowadzono referendum w 1946 r. i wybory w 1947 r.?', options: ['uczciwie, pod nadzorem ONZ', 'zostały sfałszowane przez komunistów', 'nie odbyły się', 'wygrało je PSL i objęło władzę'], answer: 1, explain: 'Fałszerstwa pozwoliły komunistom przejąć pełnię władzy.' },
        { id: 'uj9j3g', q: 'Kto był przywódcą legalnej opozycji (PSL) po wojnie?', options: ['Bolesław Bierut', 'Władysław Gomułka', 'Stanisław Mikołajczyk', 'Wojciech Jaruzelski'], answer: 2, explain: 'Po sfałszowanych wyborach w 1947 r. Mikołajczyk uciekł z kraju.' },
        { id: 'vtlbdd', q: 'Kim byli „żołnierze wyklęci”?', options: ['żołnierzami Armii Czerwonej', 'żołnierzami podziemia niepodległościowego walczącymi z komunistami po wojnie', 'polskimi lotnikami w Anglii', 'strażnikami granicy'], answer: 1, explain: 'Walczyli z narzuconą władzą komunistyczną; większość oddziałów rozbito do końca lat 40.' },
        { id: 'c8q5u0', q: 'Jaka partia rządziła w Polsce od 1948 do 1989 r.?', options: ['PZPR', 'PSL', 'PPS', 'Solidarność'], answer: 0, explain: 'Polska Zjednoczona Partia Robotnicza powstała w grudniu 1948 r.' },
        { id: '838bdz', q: 'Która nazwa państwa obowiązywała od Konstytucji z 1952 r.?', options: ['Rzeczpospolita Polska', 'Królestwo Polskie', 'Polska Rzeczpospolita Ludowa', 'Generalne Gubernatorstwo'], answer: 2, explain: 'Konstytucja z 22 lipca 1952 r. wprowadziła nazwę PRL.' },
        { id: '8ypy80', q: 'Która cecha NIE pasuje do stalinizmu w Polsce?', options: ['terror aparatu bezpieczeństwa', 'kolektywizacja rolnictwa', 'socrealizm w sztuce', 'wolne wybory'], answer: 3, explain: 'W okresie stalinizmu nie było wolnych wyborów.' },
        { id: 'rqbx0q', q: 'Co było symbolem planu sześcioletniego?', options: ['budowa kombinatu i miasta Nowa Huta', 'budowa metra w Krakowie', 'wejście Polski do UE', 'Okrągły Stół'], answer: 0, explain: 'Plan stawiał na przemysł ciężki – Nowa Huta była jego wizytówką.' },
        { id: 'udn6bf', q: 'Którego duchownego uwięziły władze w okresie stalinizmu?', options: ['ks. Jerzego Popiełuszkę', 'prymasa Stefana Wyszyńskiego', 'papieża Jana Pawła II', 'abp. Bolesława Kominka'], answer: 1, explain: 'Prymasa Wyszyńskiego uwięziono w czasach stalinizmu; wyszedł na wolność jesienią 1956 r.' },
        { id: 'prxsny', q: 'Gdzie w czerwcu 1956 r. robotnicy wyszli na ulice, a protest stłumiło wojsko?', options: ['w Gdańsku', 'w Radomiu', 'w Poznaniu', 'w Warszawie'], answer: 2, explain: 'Protest robotników w Poznaniu krwawo stłumiono – zginęło kilkadziesiąt osób.' },
        { id: 'rp60k0', q: 'Kto objął władzę w PZPR w Październiku 1956 r.?', options: ['Edward Gierek', 'Bolesław Bierut', 'Wojciech Jaruzelski', 'Władysław Gomułka'], answer: 3, explain: 'Gomułka stał się symbolem odwilży – ograniczono terror i uwolniono prymasa.' },
        { id: 'crsggu', q: 'Prawda czy fałsz?\nPo Październiku 1956 r. komunizm w Polsce się skończył.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Nastąpiła „odwilż”, ale władza komunistyczna trwała do 1989 r.' },
      ],
      tasks: [
        {
          id: 'f2sb0t',
          points: 2,
          q: 'Uporządkuj chronologicznie etapy przejmowania władzy przez komunistów: A. sfałszowane wybory do Sejmu, B. Manifest PKWN, C. Konstytucja PRL, D. sfałszowane referendum „3 razy TAK”. Podaj jeden sposób, w jaki Polacy przeciwstawiali się nowej władzy.',
          steps: [
            'B – 22 lipca 1944 r.',
            'D – 30 czerwca 1946 r.',
            'A – 19 stycznia 1947 r.',
            'C – 22 lipca 1952 r.',
            'Opór: np. zbrojna walka podziemia niepodległościowego (żołnierze wyklęci) albo legalna opozycja PSL Mikołajczyka.',
          ],
          answer: 'B, D, A, C; np. walka zbrojnego podziemia (żołnierze wyklęci) lub działalność PSL',
          scoring: [
            '1 pkt – poprawna kolejność B, D, A, C.',
            '1 pkt – poprawnie podana forma oporu.',
          ],
        },
      ],
    },
    {
      id: 'prl-1957-1980',
      name: 'PRL 1957–1980 i narodziny „Solidarności”',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXVIII „Polska w latach 1957–1981”, wym. 1–8 (system władzy i zależność od ZSRS, realia życia za Gomułki i Gierka, kryzysy 1968, 1970, 1976, rola Kościoła, opozycja 1976–1980, Jan Paweł II, strajki sierpniowe 1980, ruch „Solidarność”).',
      theory: `
        <h3>System władzy</h3>
        <p>Rządziła <b>PZPR</b>, a najważniejszą osobą był <b>I sekretarz</b> partii. Wybory nie były wolne, działała cenzura. PRL była zależna od <b>ZSRS</b> (m.in. w Układzie Warszawskim; w kraju stacjonowały wojska sowieckie).</p>
        <h3>Gomułka i Gierek</h3>
        <table>
          <tr><th></th><th>Władysław Gomułka (1956–1970)</th><th>Edward Gierek (1970–1980)</th></tr>
          <tr><td>nazwa okresu</td><td>„<b>mała stabilizacja</b>” – skromne, ale spokojniejsze życie</td><td>„dekada Gierka” – pozorny dobrobyt</td></tr>
          <tr><td>gospodarka</td><td>dalszy rozwój przemysłu ciężkiego, braki w sklepach</td><td>rozwój za <b>kredyty z Zachodu</b>; więcej towarów, ale ogromne długi</td></tr>
          <tr><td>kryzys</td><td><b>Marzec 1968</b>, <b>Grudzień 1970</b></td><td><b>Czerwiec 1976</b>, <b>Sierpień 1980</b></td></tr>
        </table>
        <h3>Kryzysy</h3>
        <ul>
          <li><b>Marzec 1968</b> – po zakazie wystawiania „<b>Dziadów</b>” Mickiewicza (sztuka miała antyrosyjską wymowę) zaprotestowali <b>studenci</b>; władze odpowiedziały represjami i <b>kampanią antysemicką</b> – tysiące osób pochodzenia żydowskiego musiały wyjechać z Polski.</li>
          <li><b>Grudzień 1970</b> – przed świętami władze podniosły ceny żywności; zaprotestowali <b>robotnicy Wybrzeża</b> (m.in. Gdańsk, Gdynia); doszło do masakry – było wielu zabitych i rannych. Gomułkę zastąpił Gierek.</li>
          <li><b>Czerwiec 1976</b> – kolejne podwyżki cen; protesty w <b>Radomiu</b>, <b>Ursusie</b> i Płocku; podwyżki odwołano, ale uczestników protestów brutalnie represjonowano.</li>
        </ul>
        <h3>Opozycja i Kościół</h3>
        <ul>
          <li>W obronie represjonowanych robotników w <b>1976 r.</b> powstał <b>Komitet Obrony Robotników (KOR)</b>; potem m.in. Wolne Związki Zawodowe. Wydawano niezależne książki i gazety („drugi obieg”).</li>
          <li><b>Kościół katolicki</b> był ostoją niezależności: prymas Wyszyński, obchody 1000-lecia chrztu Polski (1966), orędzie biskupów polskich do niemieckich (1965) – „przebaczamy i prosimy o przebaczenie”.</li>
          <li><b>16 października 1978 r.</b> kard. <b>Karol Wojtyła</b> został papieżem – <b>Janem Pawłem II</b>. Podczas pielgrzymki w 1979 r. mówił w Warszawie: „Niech zstąpi Duch Twój i odnowi oblicze ziemi. <b>Tej ziemi</b>”. Polacy poczuli, że jest ich wielu i mogą się zjednoczyć.</li>
        </ul>
        <h3>Sierpień 1980 i „Solidarność”</h3>
        <ul>
          <li>Latem 1980 r. wybuchły strajki. <b>14 sierpnia</b> zaczął się strajk w <b>Stoczni Gdańskiej</b> – początkowo w obronie zwolnionej <b>Anny Walentynowicz</b>; przywódcą został <b>Lech Wałęsa</b>.</li>
          <li>Międzyzakładowy Komitet Strajkowy ogłosił <b>21 postulatów</b>, m.in. wolne związki zawodowe.</li>
          <li><b>Porozumienia sierpniowe</b> (m.in. 31 sierpnia w Gdańsku) – władza zgodziła się na niezależne związki zawodowe.</li>
          <li>Powstał <b>NSZZ „Solidarność”</b> – liczył blisko <b>10 milionów</b> członków. To był wielki ruch społeczny walczący o prawa pracowników, wolność i godność.</li>
        </ul>
        <div class="tip">💡 Kryzysy PRL co kilka lat: <b>56 – 68 – 70 – 76 – 80</b>. Zwykle iskrą były podwyżki cen albo ograniczenia wolności.</div>`,
      flashcards: [
        ['„Mała stabilizacja”', 'Czasy Władysława Gomułki (1956–1970)'],
        ['Edward Gierek', 'I sekretarz PZPR 1970–1980; rozwój na kredyt z Zachodu'],
        ['Marzec 1968', 'Protesty studentów po zakazie „Dziadów”; represje i kampania antysemicka'],
        ['Grudzień 1970', 'Protesty robotników Wybrzeża po podwyżkach cen; masakra – wielu zabitych'],
        ['Czerwiec 1976', 'Protesty w Radomiu, Ursusie i Płocku po podwyżkach cen'],
        ['KOR', 'Komitet Obrony Robotników, powstał w 1976 r.'],
        ['Orędzie biskupów polskich do niemieckich', '1965 – „przebaczamy i prosimy o przebaczenie”'],
        ['Wybór Jana Pawła II', '16 października 1978 r. – kard. Karol Wojtyła papieżem'],
        ['„Niech zstąpi Duch Twój…”', 'Słowa Jana Pawła II w Warszawie w 1979 r.'],
        ['Strajk w Stoczni Gdańskiej', 'Od 14 sierpnia 1980 r.; Anna Walentynowicz, Lech Wałęsa'],
        ['21 postulatów', 'Żądania strajkujących w 1980 r., m.in. wolne związki zawodowe'],
        ['NSZZ „Solidarność”', 'Niezależny związek zawodowy (1980), blisko 10 mln członków'],
      ],
      questions: [
        { id: 'w4x43x', q: 'Kto rządził w PRL w latach „małej stabilizacji”?', options: ['Edward Gierek', 'Władysław Gomułka', 'Bolesław Bierut', 'Wojciech Jaruzelski'], answer: 1, explain: 'Gomułka był I sekretarzem PZPR w latach 1956–1970.' },
        { id: 'pvptnm', q: 'Czym wyróżniała się polityka gospodarcza Edwarda Gierka?', options: ['zakazem handlu z Zachodem', 'rozwojem gospodarki za kredyty zaciągnięte na Zachodzie', 'likwidacją przemysłu', 'kolektywizacją rolnictwa'], answer: 1, explain: 'Kredyty dały chwilowy wzrost, ale doprowadziły do ogromnego zadłużenia.' },
        { id: '906gnx', q: 'Co było bezpośrednią przyczyną protestów studentów w marcu 1968 r.?', options: ['podwyżki cen', 'zakaz wystawiania „Dziadów” Mickiewicza', 'wybór papieża', 'stan wojenny'], answer: 1, explain: 'Zdjęcie spektaklu z afisza wywołało protest studentów; władze odpowiedziały represjami.' },
        { id: '1pxsk9', q: 'Gdzie w grudniu 1970 r. doszło do masakry protestujących robotników?', options: ['na Wybrzeżu – m.in. w Gdańsku i Gdyni', 'w Poznaniu', 'w Nowej Hucie', 'w Lublinie'], answer: 0, explain: 'Protest wywołały podwyżki cen żywności przed świętami; było wielu zabitych i rannych.' },
        { id: 'jghfl4', q: 'W których miastach w czerwcu 1976 r. doszło do protestów po podwyżkach cen?', options: ['w Gdańsku i Szczecinie', 'w Radomiu, Ursusie i Płocku', 'w Krakowie i Wrocławiu', 'w Poznaniu i Łodzi'], answer: 1, explain: 'Podwyżki odwołano, ale uczestników protestów surowo represjonowano.' },
        { id: 'h0b3bu', q: 'Jaka organizacja powstała w 1976 r. w obronie represjonowanych robotników?', options: ['PZPR', 'Komitet Obrony Robotników (KOR)', 'Armia Krajowa', 'ZOMO'], answer: 1, explain: 'KOR był początkiem zorganizowanej opozycji demokratycznej.' },
        { id: '8ifj55', q: 'Kiedy kard. Karol Wojtyła został wybrany na papieża?', options: ['16 października 1978 r.', '13 grudnia 1981 r.', '4 czerwca 1989 r.', '1 maja 2004 r.'], answer: 0, explain: 'Przyjął imię Jan Paweł II.' },
        { id: 'dm3zdw', q: 'Jakie znaczenie miała pielgrzymka Jana Pawła II do Polski w 1979 r.?', options: ['zakończyła stan wojenny', 'Polacy poczuli, że jest ich wielu i mogą się zjednoczyć', 'wprowadziła wolne wybory', 'była początkiem PZPR'], answer: 1, explain: 'Słowa „Niech zstąpi Duch Twój i odnowi oblicze ziemi. Tej ziemi” dodały ludziom nadziei.' },
        { id: '2kr2z0', q: 'Od czego zaczął się strajk w Stoczni Gdańskiej w sierpniu 1980 r.?', options: ['od żądania przywrócenia do pracy Anny Walentynowicz', 'od wyboru papieża', 'od wprowadzenia stanu wojennego', 'od zakazu „Dziadów”'], answer: 0, explain: 'Strajk szybko przerodził się w protest z 21 postulatami.' },
        { id: 'nkxatg', q: 'Co było najważniejszym postulatem strajkujących w 1980 r.?', options: ['wejście Polski do UE', 'zgoda na wolne, niezależne od władzy związki zawodowe', 'budowa Nowej Huty', 'kolektywizacja'], answer: 1, explain: 'W porozumieniach sierpniowych władza zgodziła się na niezależne związki – powstała „Solidarność”.' },
        { id: 'yikv0s', q: 'Ilu członków liczyła „Solidarność” w 1981 r.?', options: ['ok. 10 tys.', 'ok. 100 tys.', 'ok. 1 mln', 'blisko 10 mln'], answer: 3, explain: 'Do „Solidarności” należało blisko 10 milionów ludzi.' },
        { id: 'qec579', q: 'Kto stanął na czele „Solidarności”?', options: ['Lech Wałęsa', 'Edward Gierek', 'Tadeusz Mazowiecki', 'Władysław Gomułka'], answer: 0, explain: 'Lech Wałęsa przewodził strajkowi w Stoczni Gdańskiej, a potem związkowi.' },
      ],
    },
    {
      id: 'stan-wojenny-1989',
      name: 'Stan wojenny i Okrągły Stół',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XXXIX „Dekada 1981–1989”, wym. 1–3 (przyczyny i konsekwencje stanu wojennego, postawy Polaków i opór społeczny, przyczyny, uczestnicy i postanowienia Okrągłego Stołu).',
      theory: `
        <h3>Stan wojenny</h3>
        <ul>
          <li><b>Przyczyny</b>: władze bały się utraty władzy – „Solidarność” była ogromna i domagała się zmian; ZSRS naciskał na rozprawę ze związkiem; władze tłumaczyły, że chcą uniknąć interwencji sowieckiej.</li>
          <li>W nocy z 12 na <b>13 grudnia 1981 r.</b> władzę przejęła <b>Wojskowa Rada Ocalenia Narodowego (WRON)</b>, a gen. <b>Wojciech Jaruzelski</b> ogłosił w telewizji <b>stan wojenny</b>.</li>
        </ul>
        <h3>Jak wyglądał stan wojenny</h3>
        <ul>
          <li><b>internowanie</b> (uwięzienie bez wyroku) tysięcy działaczy „Solidarności”, także Lecha Wałęsy,</li>
          <li><b>godzina milicyjna</b>, zakaz zgromadzeń i strajków, wyłączone telefony, czołgi na ulicach, cenzura listów,</li>
          <li>siłowe tłumienie strajków – w kopalni <b>„Wujek”</b> w Katowicach (16 grudnia 1981 r.) zginęło <b>9 górników</b>,</li>
          <li>„Solidarność” zdelegalizowano. Stan wojenny zniesiono w lipcu 1983 r., ale represje trwały.</li>
        </ul>
        <h3>Opór społeczny</h3>
        <ul>
          <li><b>podziemna „Solidarność”</b> – tajne struktury, ulotki, gazety i książki z „drugiego obiegu”, podziemne radio,</li>
          <li>demonstracje, bojkot oficjalnych mediów, symbole oporu (np. krzyże układane z kwiatów),</li>
          <li>wsparcie <b>Kościoła</b> – msze za ojczyznę ks. <b>Jerzego Popiełuszki</b>; w 1984 r. został zamordowany przez funkcjonariuszy Służby Bezpieczeństwa,</li>
          <li>Lech Wałęsa otrzymał <b>Pokojową Nagrodę Nobla</b> (1983).</li>
        </ul>
        <h3>Okrągły Stół (1989)</h3>
        <p><b>Przyczyny rozmów</b>: kryzys gospodarczy, strajki w 1988 r. (m.in. w Stoczni Gdańskiej), zmiany w ZSRS za Gorbaczowa – władza zrozumiała, że sama nie wyjdzie z kryzysu.</p>
        <ul>
          <li>Obrady trwały od <b>6 lutego do 5 kwietnia 1989 r.</b> w Warszawie.</li>
          <li><b>Uczestnicy</b>: strona rządowa (m.in. gen. <b>Czesław Kiszczak</b>), opozycja (<b>Lech Wałęsa</b>, Tadeusz Mazowiecki, Bronisław Geremek, Jacek Kuroń, Adam Michnik); pośredniczyli przedstawiciele <b>Kościoła</b>.</li>
          <li><b>Postanowienia</b>: <b>ponowna legalizacja „Solidarności”</b>; <b>częściowo wolne wybory</b> do Sejmu – 65% mandatów dla strony rządowej, 35% do wolnej walki; <b>w pełni wolne wybory do Senatu</b> (przywróconego); urząd <b>prezydenta</b>.</li>
        </ul>
        <div class="tip">💡 13 XII 1981 – stan wojenny. 6 II – 5 IV 1989 – Okrągły Stół. 4 VI 1989 – wybory. Od siły do rozmowy.</div>`,
      flashcards: [
        ['Wprowadzenie stanu wojennego', '13 grudnia 1981 r.; gen. Wojciech Jaruzelski'],
        ['WRON', 'Wojskowa Rada Ocalenia Narodowego – przejęła władzę w stanie wojennym'],
        ['Internowanie', 'Uwięzienie bez wyroku sądu – tysiące działaczy „Solidarności”'],
        ['Kopalnia „Wujek”', '16 grudnia 1981 r. – zginęło 9 strajkujących górników'],
        ['Godzina milicyjna', 'Zakaz wychodzenia z domu w nocy w stanie wojennym'],
        ['Ks. Jerzy Popiełuszko', 'Kapelan „Solidarności”, zamordowany przez funkcjonariuszy SB w 1984 r.'],
        ['Nobel Lecha Wałęsy', 'Pokojowa Nagroda Nobla, 1983'],
        ['Okrągły Stół', '6 lutego – 5 kwietnia 1989 r.; rozmowy władzy z opozycją'],
        ['Postanowienia Okrągłego Stołu', 'Legalizacja „Solidarności”, częściowo wolne wybory do Sejmu, wolne do Senatu, urząd prezydenta'],
        ['Podział mandatów w Sejmie w 1989 r.', '65% dla strony rządowej, 35% do wolnej walki'],
      ],
      questions: [
        { id: 'tmdihb', q: 'Kiedy wprowadzono stan wojenny?', options: ['31 sierpnia 1980 r.', '13 grudnia 1981 r.', '4 czerwca 1989 r.', '16 października 1978 r.'], answer: 1, explain: 'W nocy z 12 na 13 grudnia 1981 r. władzę przejęła WRON.' },
        { id: '6q6zkl', q: 'Kto ogłosił wprowadzenie stanu wojennego?', options: ['Lech Wałęsa', 'Edward Gierek', 'gen. Wojciech Jaruzelski', 'Tadeusz Mazowiecki'], answer: 2, explain: 'Gen. Jaruzelski ogłosił stan wojenny w przemówieniu telewizyjnym 13 grudnia 1981 r.' },
        { id: 't5y6am', q: 'Co oznaczało internowanie?', options: ['wyjazd za granicę na studia', 'uwięzienie bez wyroku sądu', 'przyjęcie do partii', 'zatrudnienie w stoczni'], answer: 1, explain: 'Internowano tysiące działaczy „Solidarności”, m.in. Lecha Wałęsę.' },
        { id: 'ulkae1', q: 'W której kopalni podczas pacyfikacji strajku w grudniu 1981 r. zginęło 9 górników?', options: ['„Wujek”', '„Wieliczka”', '„Bogdanka”', '„Turów”'], answer: 0, explain: 'W kopalni „Wujek” w Katowicach użyto ostrej amunicji.' },
        { id: 'rp8dzx', q: 'Która forma oporu była typowa dla czasu stanu wojennego?', options: ['wolne wybory do Sejmu', 'oficjalne strajki za zgodą władz', 'podziemne gazety i ulotki „Solidarności”', 'wstąpienie do PZPR'], answer: 2, explain: '„Solidarność” działała w podziemiu: wydawała gazety, książki i ulotki.' },
        { id: 'dcvb23', q: 'Kto zamordował w 1984 r. ks. Jerzego Popiełuszkę?', options: ['funkcjonariusze Służby Bezpieczeństwa', 'żołnierze sowieccy', 'nieznani złodzieje', 'członkowie „Solidarności”'], answer: 0, explain: 'Kapelana „Solidarności” zamordowali oficerowie SB.' },
        { id: 'r5sf9z', q: 'Co skłoniło władze PRL do rozmów z opozycją w 1989 r.?', options: ['wybór papieża', 'wygrana w wyborach', 'zakończenie II wojny', 'kryzys gospodarczy, strajki w 1988 r. i zmiany w ZSRS'], answer: 3, explain: 'Władza nie potrafiła sama wyjść z kryzysu, a ZSRS Gorbaczowa nie chciał interweniować.' },
        { id: 'pvfdnb', q: 'Kiedy obradował Okrągły Stół?', options: ['od 6 lutego do 5 kwietnia 1989 r.', 'w sierpniu 1980 r.', 'w grudniu 1981 r.', 'w czerwcu 1956 r.'], answer: 0, explain: 'Rozmowy toczyły się w Warszawie przez dwa miesiące.' },
        { id: '7zeyeo', q: 'Kto stał na czele strony opozycyjnej przy Okrągłym Stole?', options: ['Czesław Kiszczak', 'Wojciech Jaruzelski', 'Lech Wałęsa', 'Edward Gierek'], answer: 2, explain: 'Opozycji przewodził Lech Wałęsa; stronie rządowej – m.in. Czesław Kiszczak.' },
        { id: 'jecfqu', q: 'Które postanowienie przyjęto przy Okrągłym Stole?', options: ['całkowicie wolne wybory do Sejmu', 'ponowna legalizacja „Solidarności” i wolne wybory do Senatu', 'wystąpienie z Układu Warszawskiego', 'wejście do NATO'], answer: 1, explain: 'Do Sejmu wybory były częściowo wolne (35% mandatów), do Senatu – w pełni wolne.' },
        { id: 'ga89s8', q: 'Jaka część mandatów w Sejmie była w 1989 r. do wolnej walki?', options: ['35%', '65%', '100%', '50%'], answer: 0, explain: '65% miejsc zapewniono stronie rządowej, a o 35% walczono w wolnych wyborach.' },
        { id: 'ywzowv', q: 'Prawda czy fałsz?\nLech Wałęsa otrzymał Pokojową Nagrodę Nobla.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – w 1983 r.' },
      ],
    },
    {
      id: 'iii-rp',
      name: 'III Rzeczpospolita, NATO i UE',
      basis: 'Dz.U. 2024 poz. 996, historia kl. IV–VIII, dz. XL „Narodziny III Rzeczypospolitej” (przemiany ustrojowe 1989–1997, przemiany lat 90., przyczyny napięć społecznych) i dz. XLI „Miejsce Polski w świecie współczesnym” (znaczenie wejścia do NATO w 1999 r. i do UE w 2004 r.).',
      theory: `
        <h3>Przełom 1989</h3>
        <ul>
          <li><b>4 czerwca 1989 r.</b> – wybory „kontraktowe”: <b>wielkie zwycięstwo „Solidarności”</b> – zdobyła wszystkie mandaty w Sejmie, o które można było walczyć, i 99 ze 100 miejsc w Senacie.</li>
          <li>Prezydentem został gen. Jaruzelski, ale premierem – <b>Tadeusz Mazowiecki</b>; jego rząd był pierwszym niekomunistycznym rządem w Europie Środkowo-Wschodniej po II wojnie.</li>
          <li><b>29 grudnia 1989 r.</b> – powrót nazwy <b>Rzeczpospolita Polska</b> i <b>orła w koronie</b> w godle.</li>
        </ul>
        <h3>Przemiany ustrojowe 1989–1997</h3>
        <table>
          <tr><th>Rok</th><th>Wydarzenie</th></tr>
          <tr><td>1990</td><td>start <b>planu Balcerowicza</b> – przejście do gospodarki rynkowej; <b>Lech Wałęsa</b> wybrany na prezydenta w wyborach powszechnych</td></tr>
          <tr><td>1991</td><td>pierwsze w pełni <b>wolne wybory do Sejmu</b> (27 października)</td></tr>
          <tr><td>1993</td><td>ostatni żołnierze sowieckich (rosyjskich) wojsk opuszczają Polskę</td></tr>
          <tr><td>1997</td><td>uchwalenie <b>Konstytucji RP</b> (2 kwietnia), zatwierdzonej w referendum</td></tr>
        </table>
        <h3>Lata 90. – zmiany i napięcia</h3>
        <ul>
          <li><b>Pozytywne</b>: wolność słowa i zgromadzeń, wolne wybory, pełne półki w sklepach, prywatne firmy, samorządy, wolne media, możliwość podróżowania.</li>
          <li><b>Trudne</b>: <b>bezrobocie</b> (upadek wielu państwowych zakładów), wysokie koszty reform, rozwarstwienie – jedni szybko się bogacili, inni biednieli.</li>
          <li><b>Napięcia społeczne</b> brały się z kosztów reform, rozczarowania części ludzi i sporów o rozliczenie PRL.</li>
        </ul>
        <h3>Polska w NATO i UE</h3>
        <table>
          <tr><th>NATO</th><th>Unia Europejska</th></tr>
          <tr><td><b>12 marca 1999 r.</b></td><td><b>1 maja 2004 r.</b> (wcześniej referendum w czerwcu 2003 r.)</td></tr>
          <tr><td><b>bezpieczeństwo</b> – sojusznicy zobowiązani do wzajemnej obrony; trwałe związanie z Zachodem</td><td><b>rozwój</b> – wspólny rynek, fundusze unijne na drogi, szkoły, szpitale; swoboda podróżowania, pracy i nauki w innych krajach UE; wpływ na decyzje w Europie</td></tr>
        </table>
        <div class="tip">💡 Trzy daty III RP: <b>4 VI 1989</b> – wolność; <b>12 III 1999</b> – NATO (bezpieczeństwo); <b>1 V 2004</b> – UE (rozwój).</div>`,
      flashcards: [
        ['Wybory „kontraktowe”', '4 czerwca 1989 r. – zwycięstwo „Solidarności”'],
        ['Pierwszy niekomunistyczny premier', 'Tadeusz Mazowiecki (1989)'],
        ['Powrót nazwy Rzeczpospolita Polska i orła w koronie', '29 grudnia 1989 r.'],
        ['Plan Balcerowicza', 'Od 1990 r. – przejście do gospodarki rynkowej'],
        ['Pierwszy prezydent wybrany w wyborach powszechnych', 'Lech Wałęsa (1990)'],
        ['Pierwsze w pełni wolne wybory do Sejmu', '27 października 1991 r.'],
        ['Konstytucja RP', 'Uchwalona 2 kwietnia 1997 r.'],
        ['Problemy lat 90.', 'Bezrobocie, koszty reform, rozwarstwienie społeczne'],
        ['Polska w NATO', '12 marca 1999 r. – bezpieczeństwo'],
        ['Polska w UE', '1 maja 2004 r. – rozwój, wspólny rynek, fundusze'],
      ],
      questions: [
        { id: 'i02psn', q: 'Kiedy odbyły się wybory, w których zwyciężyła „Solidarność”?', options: ['13 grudnia 1981 r.', '4 czerwca 1989 r.', '27 października 1991 r.', '1 maja 2004 r.'], answer: 1, explain: 'Wybory „kontraktowe” 4 czerwca 1989 r. były wielkim zwycięstwem „Solidarności”.' },
        { id: '0y8gqw', q: 'Kto został w 1989 r. pierwszym niekomunistycznym premierem?', options: ['Lech Wałęsa', 'Leszek Balcerowicz', 'Tadeusz Mazowiecki', 'Wojciech Jaruzelski'], answer: 2, explain: 'Tadeusz Mazowiecki stanął na czele rządu w sierpniu 1989 r.' },
        { id: 'h5hgq7', q: 'Co zmieniło się 29 grudnia 1989 r.?', options: ['przywrócono nazwę Rzeczpospolita Polska i orła w koronie', 'Polska weszła do NATO', 'wprowadzono stan wojenny', 'uchwalono Konstytucję PRL'], answer: 0, explain: 'Sejm zmienił konstytucję – symbolicznie skończyła się PRL.' },
        { id: 'c400t9', q: 'Czemu służył plan Balcerowicza?', options: ['kolektywizacji rolnictwa', 'budowie Nowej Huty', 'wejściu do Układu Warszawskiego', 'przejściu do gospodarki rynkowej'], answer: 3, explain: 'Od 1990 r. wprowadzano wolny rynek; reformy miały też wysokie koszty społeczne.' },
        { id: 'krwib7', q: 'Kto został w 1990 r. prezydentem wybranym w wyborach powszechnych?', options: ['Lech Wałęsa', 'Tadeusz Mazowiecki', 'Aleksander Kwaśniewski', 'Czesław Kiszczak'], answer: 0, explain: 'Lech Wałęsa wygrał pierwsze powszechne wybory prezydenckie.' },
        { id: 'co24u5', q: 'Kiedy odbyły się pierwsze w pełni wolne wybory do Sejmu?', options: ['w 1989 r.', 'w 1991 r.', 'w 1997 r.', 'w 2004 r.'], answer: 1, explain: '27 października 1991 r. – po raz pierwszy wszystkie mandaty były do wolnej walki.' },
        { id: 'rdtzur', q: 'Kiedy uchwalono obecną Konstytucję RP?', options: ['22 lipca 1952 r.', '3 maja 1791 r.', '2 kwietnia 1997 r.', '12 marca 1999 r.'], answer: 2, explain: 'Konstytucję uchwaliło Zgromadzenie Narodowe 2 kwietnia 1997 r., a potwierdziło ją referendum.' },
        { id: 'c0crjn', q: 'Który problem społeczny pojawił się w Polsce w latach 90.?', options: ['brak towarów w sklepach', 'kartki na mięso', 'bezrobocie', 'godzina milicyjna'], answer: 2, explain: 'Upadek wielu państwowych zakładów sprawił, że wielu ludzi straciło pracę.' },
        { id: 'c53ww6', q: 'Kiedy Polska weszła do NATO?', options: ['12 marca 1999 r.', '1 maja 2004 r.', '4 czerwca 1989 r.', '3 października 1990 r.'], answer: 0, explain: 'NATO zapewnia Polsce bezpieczeństwo – sojusznicy zobowiązali się do wzajemnej obrony.' },
        { id: '0883e1', q: 'Kiedy Polska weszła do Unii Europejskiej?', options: ['12 marca 1999 r.', '1 stycznia 1990 r.', '2 kwietnia 1997 r.', '1 maja 2004 r.'], answer: 3, explain: 'Wcześniej, w czerwcu 2003 r., Polacy poparli to w referendum.' },
        { id: '7ejxgz', q: 'Które znaczenie ma przede wszystkim członkostwo Polski w NATO?', options: ['bezpieczeństwo i obrona przez sojuszników', 'wspólna waluta', 'fundusze na rolnictwo', 'zniesienie granic w Europie'], answer: 0, explain: 'NATO to sojusz obronny. Korzyści gospodarcze przyniosło głównie członkostwo w UE.' },
        { id: 'rs7q73', q: 'Która korzyść wynika z członkostwa Polski w UE?', options: ['obowiązkowa służba w armii USA', 'fundusze unijne i swoboda pracy, nauki i podróży w krajach UE', 'zakaz handlu z Niemcami', 'powrót do gospodarki planowej'], answer: 1, explain: 'UE to wspólny rynek, fundusze na rozwój i swobody obywateli.' },
      ],
    },
  ],
});
