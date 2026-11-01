/* Plastyka – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, plastyka – II etap edukacyjny).
 * Plastyka jest w klasach IV–VII (ramowy plan: Dz.U. 2026 poz. 1028, zał. nr 1); podstawa nie dzieli wymagań na klasy.
 * Priorytet C: tylko wiedza (ściąga, fiszki, quiz) – tworzenia prac aplikacja nie zastąpi. */
window.SUBJECTS.push({
  id: 'plastyka',
  name: 'Plastyka',
  icon: '🎨',
  color: '#c2571a',
  topics: [
    {
      id: 'barwy-i-srodki',
      name: 'Barwy i środki wyrazu',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 1 „Własna aktywność twórcza”, wym. 2 (środki wyrazu: linia, plama, kolor, walor, faktura, kompozycja, kształt), wym. 3 (barwy podstawowe, pochodne, czyste, złamane, dopełniające, ciepłe, zimne); dz. 3 wym. 5 (pojęcia języka plastycznego: linia, barwa, gama barwna, plama, kształt, kontur, światłocień, kompozycja, perspektywa, walor, bryła, faktura). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli wymagań na klasy). Barwy podstawowe podano tak, jak w szkolnym malarstwie farbami (żółta, czerwona, niebieska). Eksperymenty z farbami to praca na lekcji – tu utrwalasz pojęcia.',
      theory: `
        <h3>Barwy podstawowe i pochodne</h3>
        <p><b>Barwy podstawowe</b> to <b>żółta, czerwona i niebieska</b>. Nie da się ich uzyskać przez mieszanie innych farb.</p>
        <p><b>Barwy pochodne</b> powstają ze zmieszania dwóch barw podstawowych:</p>
        <table>
          <tr><th>Mieszamy</th><th>Otrzymujemy</th></tr>
          <tr><td>żółta + czerwona</td><td><b>pomarańczowa</b></td></tr>
          <tr><td>żółta + niebieska</td><td><b>zielona</b></td></tr>
          <tr><td>czerwona + niebieska</td><td><b>fioletowa</b></td></tr>
        </table>
        <h3>Barwy dopełniające</h3>
        <p>To pary barw, które najmocniej się różnią. Barwę dopełniającą tworzą <b>dwie pozostałe barwy podstawowe</b>. Położone obok siebie wzajemnie się „wzmacniają” – tworzą <b>kontrast</b>.</p>
        <ul>
          <li><b>czerwona – zielona</b> (zielona = żółta + niebieska),</li>
          <li><b>żółta – fioletowa</b> (fioletowa = czerwona + niebieska),</li>
          <li><b>niebieska – pomarańczowa</b> (pomarańczowa = żółta + czerwona).</li>
        </ul>
        <h3>Barwy ciepłe i zimne</h3>
        <ul>
          <li><b>ciepłe</b> – kojarzą się ze słońcem i ogniem: żółta, pomarańczowa, czerwona,</li>
          <li><b>zimne</b> – kojarzą się z wodą, lodem i cieniem: niebieska, błękitna, granatowa, niebieskozielona.</li>
        </ul>
        <p><b>Gama barwna</b> to zestaw barw, które przeważają w obrazie. Obraz w gamie ciepłej wydaje się radosny i gorący, w gamie zimnej – spokojny, chłodny albo smutny.</p>
        <h3>Barwy czyste, złamane, walor</h3>
        <ul>
          <li><b>barwa czysta</b> – prosto z tubki, intensywna, bez dodatków,</li>
          <li><b>barwa złamana</b> – „przygaszona”: zmieszana z odrobiną szarości, czerni albo barwy dopełniającej,</li>
          <li><b>walor</b> – stopień <b>jasności</b> barwy: od jasnoniebieskiej do granatowej to ta sama barwa w różnych walorach,</li>
          <li><b>barwy niekolorowe</b> (achromatyczne): biała, czarna i szare.</li>
        </ul>
        <h3>Inne środki wyrazu</h3>
        <table>
          <tr><th>Pojęcie</th><th>Co to jest</th></tr>
          <tr><td><b>linia</b></td><td>ślad narzędzia: prosta, falista, łamana, gruba, cienka</td></tr>
          <tr><td><b>kontur</b></td><td>linia, która obrysowuje kształt</td></tr>
          <tr><td><b>plama</b></td><td>zamalowana powierzchnia o jakimś kształcie</td></tr>
          <tr><td><b>faktura</b></td><td>wygląd powierzchni: gładka, chropowata, puszysta…</td></tr>
          <tr><td><b>światłocień</b></td><td>jasne i ciemne miejsca, które pokazują, skąd pada światło; dzięki niemu przedmiot wygląda na bryłę</td></tr>
          <tr><td><b>perspektywa</b></td><td>sposób pokazania głębi: to, co daleko, rysujemy mniejsze i bledsze</td></tr>
          <tr><td><b>kompozycja</b></td><td>układ wszystkich elementów w obrazie</td></tr>
        </table>
        <h3>Rodzaje kompozycji</h3>
        <ul>
          <li><b>symetryczna</b> – lewa i prawa strona są jak odbicie w lustrze; <b>asymetryczna</b> – strony się różnią,</li>
          <li><b>zamknięta</b> – wszystko mieści się w obrazie; <b>otwarta</b> – elementy są „ucięte” brzegami, jakby obraz ciągnął się dalej,</li>
          <li><b>statyczna</b> – spokojna, bez ruchu (linie poziome i pionowe); <b>dynamiczna</b> – pełna ruchu (linie ukośne),</li>
          <li><b>rytmiczna</b> – te same elementy powtarzają się w równych odstępach.</li>
        </ul>
        <div class="tip">💡 Kółko barw: naprzeciwko każdej barwy podstawowej leży jej barwa dopełniająca.</div>
      `,
      flashcards: [
        ['Barwy podstawowe', 'żółta, czerwona, niebieska'],
        ['Barwy pochodne', 'pomarańczowa (ż + cz), zielona (ż + n), fioletowa (cz + n)'],
        ['Pary barw dopełniających', 'czerwona – zielona, żółta – fioletowa, niebieska – pomarańczowa'],
        ['Barwy ciepłe', 'żółta, pomarańczowa, czerwona'],
        ['Barwy zimne', 'niebieska, błękitna, granatowa, niebieskozielona'],
        ['Gama barwna', 'Zestaw barw, które przeważają w obrazie'],
        ['Barwa złamana', 'Przygaszona – zmieszana z szarością, czernią albo barwą dopełniającą'],
        ['Walor', 'Stopień jasności barwy'],
        ['Kontur', 'Linia obrysowująca kształt'],
        ['Faktura', 'Wygląd powierzchni: gładka, chropowata…'],
        ['Światłocień', 'Jasne i ciemne miejsca pokazujące światło i bryłę'],
        ['Perspektywa', 'Pokazanie głębi: dalsze rzeczy mniejsze i bledsze'],
        ['Kompozycja', 'Układ elementów w obrazie'],
        ['Kompozycja otwarta', 'Elementy ucięte brzegami obrazu – jakby obraz ciągnął się dalej'],
        ['Kompozycja dynamiczna', 'Pełna ruchu, z liniami ukośnymi'],
      ],
      questions: [
        { id: '8jktcf', q: 'Która trójka to barwy podstawowe?', options: ['żółta, czerwona, niebieska', 'zielona, fioletowa, pomarańczowa', 'biała, czarna, szara', 'czerwona, zielona, brązowa'], answer: 0, explain: 'Barwy podstawowe to żółta, czerwona i niebieska. Z nich mieszamy pozostałe.' },
        { id: '82n3cq', q: 'Jaką barwę otrzymasz, mieszając żółtą z niebieską?', options: ['zieloną', 'pomarańczową', 'fioletową', 'brązową'], answer: 0, explain: 'Żółta + niebieska = zielona.' },
        { id: 't7j0ka', q: 'Jaką barwę otrzymasz, mieszając czerwoną z niebieską?', options: ['fioletową', 'zieloną', 'pomarańczową', 'żółtą'], answer: 0, explain: 'Czerwona + niebieska = fioletowa.' },
        { id: 'w1zvwb', q: 'Z jakich barw zmieszasz pomarańczową?', options: ['z żółtej i czerwonej', 'z niebieskiej i żółtej', 'z czerwonej i niebieskiej', 'z białej i czarnej'], answer: 0, explain: 'Żółta + czerwona = pomarańczowa.' },
        { id: 'inbqgs', q: 'Która barwa jest dopełniająca do czerwonej?', options: ['zielona', 'pomarańczowa', 'fioletowa', 'żółta'], answer: 0, explain: 'Dopełniającą tworzą dwie pozostałe barwy podstawowe: żółta + niebieska = zielona.' },
        { id: '0jnb3d', q: 'Która barwa jest dopełniająca do niebieskiej?', options: ['pomarańczowa', 'zielona', 'fioletowa', 'granatowa'], answer: 0, explain: 'Pozostałe barwy podstawowe to żółta i czerwona – razem dają pomarańczową.' },
        { id: '2eq7cj', q: 'Która barwa jest ciepła?', options: ['pomarańczowa', 'niebieska', 'granatowa', 'błękitna'], answer: 0, explain: 'Pomarańczowa kojarzy się ze słońcem i ogniem – to barwa ciepła. Pozostałe są zimne.' },
        { id: '1sqdkc', q: 'Malujesz zimowy wieczór nad zamarzniętym jeziorem. Jaka gama barwna najlepiej odda chłód?', options: ['zimna: błękity, granaty, biel', 'ciepła: żółcie, pomarańcze, czerwienie', 'same jaskrawe czerwienie', 'same brązy i pomarańcze'], answer: 0, explain: 'Barwy zimne kojarzą się z wodą, lodem i chłodem.' },
        { id: 'z7nf0r', q: 'Co to jest walor?', options: ['stopień jasności barwy', 'rodzaj pędzla', 'linia obrysowująca kształt', 'wygląd powierzchni'], answer: 0, explain: 'Walor to jasność barwy, np. jasnoniebieski i granatowy to ta sama barwa w różnych walorach.' },
        { id: 'qoqay3', q: 'Jak nazywa się barwa „przygaszona” dodatkiem szarości lub czerni?', options: ['barwa złamana', 'barwa czysta', 'barwa podstawowa', 'barwa dopełniająca'], answer: 0, explain: 'Barwa czysta jest intensywna, prosto z tubki. Po dodaniu szarości, czerni albo barwy dopełniającej staje się złamana.' },
        { id: 'vyvwno', q: 'Jak nazywa się linia, która obrysowuje kształt?', options: ['kontur', 'faktura', 'walor', 'plama'], answer: 0, explain: 'Kontur to linia otaczająca kształt przedmiotu.' },
        { id: 'icj5wq', q: 'Kora drzewa jest chropowata, a szkło – gładkie. Który środek wyrazu opisuje taką różnicę?', options: ['faktura', 'perspektywa', 'gama barwna', 'kompozycja'], answer: 0, explain: 'Faktura to wygląd powierzchni – gładkiej, chropowatej, puszystej.' },
        { id: 'fyjjhz', q: 'Na rysunku drzewa w oddali są małe i blade, a te z przodu – duże i wyraźne. Co pokazuje głębię?', options: ['perspektywa', 'kontur', 'faktura', 'barwa czysta'], answer: 0, explain: 'Perspektywa to sposób pokazania głębi: to, co daleko, jest mniejsze i bledsze.' },
        { id: 'cc006v', q: 'Dzięki czemu narysowana kula wygląda na bryłę, a nie na płaskie kółko?', options: ['dzięki światłocieniowi', 'dzięki konturowi', 'dzięki barwom dopełniającym', 'dzięki kompozycji otwartej'], answer: 0, explain: 'Światłocień – jasna strona od światła i ciemna w cieniu – pokazuje kształt bryły.' },
        {
          id: 'i2xn9b', q: 'Jaka to kompozycja?',
          svg: `<svg viewBox="0 0 300 160" role="img" aria-label="Prostokątny obraz. Na środku stoi wazon, a po obu jego stronach jednakowe kwiaty, ułożone jak odbicie w lustrze.">
            <rect x="40" y="10" width="220" height="140" class="ln"/>
            <path d="M130,140 L170,140 L178,90 L122,90 Z" class="f1 s1"/>
            <circle cx="110" cy="60" r="16" class="f4 s4"/>
            <circle cx="190" cy="60" r="16" class="f4 s4"/>
            <circle cx="150" cy="40" r="16" class="f2 s2"/>
            <line x1="122" y1="72" x2="140" y2="90" class="ln"/>
            <line x1="178" y1="72" x2="160" y2="90" class="ln"/>
            <line x1="150" y1="56" x2="150" y2="90" class="ln"/>
            <rect x="60" y="120" width="30" height="20" class="f3 s3"/>
            <rect x="210" y="120" width="30" height="20" class="f3 s3"/>
          </svg>`,
          options: ['symetryczna', 'otwarta', 'dynamiczna', 'asymetryczna'], answer: 0, explain: 'Lewa i prawa strona obrazu są jak odbicie w lustrze względem osi – to kompozycja symetryczna.',
        },
        {
          id: 'zxa79p', q: 'Jaka to kompozycja?',
          svg: `<svg viewBox="0 0 300 160" role="img" aria-label="Prostokątny obraz. Duże koło i kilka prostokątów są ucięte przez brzegi obrazu, jakby wychodziły poza ramę.">
            <path d="M40,10 L105.8,10 A50,50 0 0 1 40,75.8 Z" class="f4 s4"/>
            <rect x="200" y="100" width="60" height="50" class="f1 s1"/>
            <rect x="120" y="120" width="40" height="30" class="f3 s3"/>
            <rect x="230" y="10" width="30" height="30" class="f2 s2"/>
            <rect x="40" y="10" width="220" height="140" class="ln"/>
          </svg>`,
          options: ['otwarta', 'zamknięta', 'symetryczna', 'rytmiczna'], answer: 0, explain: 'Elementy są ucięte brzegami obrazu – wygląda, jakby obraz ciągnął się dalej. To kompozycja otwarta.',
        },
        { id: 'klt091', q: 'Obraz pełen ruchu, w którym przeważają linie ukośne, ma kompozycję…', options: ['dynamiczną', 'statyczną', 'symetryczną', 'zamkniętą'], answer: 0, explain: 'Ukośne linie sprawiają wrażenie ruchu – to kompozycja dynamiczna. Statyczna jest spokojna, z liniami poziomymi i pionowymi.' },
        { id: 'b22yf7', q: 'Prawda czy fałsz?\nBiała, czarna i szara to barwy niekolorowe (achromatyczne).', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Biel, czerń i szarości nie mają koloru – to barwy achromatyczne.' },
      ],
    },
    {
      id: 'techniki-i-dziedziny',
      name: 'Techniki plastyczne i dziedziny sztuki',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 2 „Techniki plastyczne”, wym. 1 (rozpoznaje podstawowe techniki plastyczne), wym. 2 (dobiera narzędzia i materiały do techniki), wym. 5 (techniki tradycyjne i cyfrowe); dz. 1 wym. 5 (maluje, rysuje, rzeźbi), wym. 7 (rodzaje sztuk performatywnych), wym. 8 (bryły i reliefy), wym. 13 (np. street art, land art); dz. 4 wym. 1 (grafika użytkowa: plakat, zaproszenie, logo), wym. 2 (dziedziny sztuki użytkowej), wym. 4 (architektura, mała architektura, architektura krajobrazu). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli wymagań na klasy).',
      theory: `
        <h3>Dziedziny sztuki</h3>
        <table>
          <tr><th>Dziedzina</th><th>Co tworzy artysta</th></tr>
          <tr><td><b>rysunek</b></td><td>prace wykonane kreską – ołówkiem, węglem, kredką, tuszem</td></tr>
          <tr><td><b>malarstwo</b></td><td>obrazy malowane farbami</td></tr>
          <tr><td><b>grafika</b></td><td>odbitki z przygotowanej płytki (<b>matrycy</b>); dziś także obrazy tworzone na komputerze</td></tr>
          <tr><td><b>rzeźba</b></td><td>przestrzenne formy z gliny, kamienia, drewna, metalu</td></tr>
          <tr><td><b>architektura</b></td><td>budynki i całe założenia, np. place, osiedla</td></tr>
          <tr><td><b>fotografia</b></td><td>zdjęcia; ważne są światło i kadr</td></tr>
          <tr><td><b>sztuka użytkowa</b></td><td>ładne i wygodne przedmioty codziennego użytku: meble, naczynia (ceramika), ubrania, plakaty, logo</td></tr>
        </table>
        <h3>Techniki malarskie</h3>
        <ul>
          <li><b>akwarela</b> – farby rozpuszczane wodą, <b>przezroczyste</b>; spod farby prześwituje papier,</li>
          <li><b>plakatówka</b> (tempera) – farba wodna, <b>kryjąca</b>: zasłania to, co pod nią,</li>
          <li><b>farby olejne</b> i <b>akrylowe</b> – często maluje się nimi na płótnie rozpiętym na krosnach.</li>
        </ul>
        <p>Przyda się: <b>pędzle</b> (płaskie i okrągłe), <b>paleta</b> do mieszania farb, pojemnik z wodą, a malarz-artysta stawia obraz na <b>sztaludze</b>.</p>
        <h3>Techniki graficzne – odbijanie</h3>
        <p>Artysta przygotowuje <b>matrycę</b>, nakłada na nią farbę <b>wałkiem</b> i odbija na papierze. Powstaje <b>odbitka</b>. Z jednej matrycy można zrobić wiele odbitek.</p>
        <ul>
          <li><b>linoryt</b> – matryca z <b>linoleum</b>, wycinana <b>dłutkami</b>,</li>
          <li><b>drzeworyt</b> – matryca z <b>drewna</b>,</li>
          <li><b>monotypia</b> – daje tylko <b>jedną</b> odbitkę („mono” = jeden).</li>
        </ul>
        <div class="tip">💡 Na matrycy wszystko jest odwrócone jak w lustrze. Napis na linorycie trzeba wyciąć od tyłu, żeby na odbitce był prosty.</div>
        <h3>Rzeźba</h3>
        <ul>
          <li><b>rzeźba pełna</b> – można ją obejść i oglądać ze wszystkich stron,</li>
          <li><b>płaskorzeźba</b> (relief) – wystaje z płaskiego tła, np. na monecie albo na ścianie budynku,</li>
          <li>w szkole rzeźbisz w glinie, modelinie, plastelinie albo masie solnej.</li>
        </ul>
        <h3>Techniki łączone i nowe</h3>
        <ul>
          <li><b>kolaż</b> – praca z naklejonych różnych materiałów: wycinków z gazet, tkanin, zdjęć,</li>
          <li><b>wydzieranka</b> – obraz z wydzieranych kawałków kolorowego papieru,</li>
          <li><b>grafika komputerowa</b> – obrazy tworzone w programie graficznym; <b>kolaż cyfrowy</b> – kolaż ze zdjęć na komputerze,</li>
          <li><b>mural</b> – duży obraz namalowany na ścianie budynku (sztuka ulicy – <b>street art</b>),</li>
          <li><b>land art</b> – sztuka w krajobrazie, z kamieni, liści, piasku.</li>
        </ul>
        <h3>Sztuki performatywne</h3>
        <p>To sztuki, które dzieją się <b>na żywo przed widzami</b>: teatr, taniec, a także <b>performance</b> – działanie artysty, który sam jest częścią dzieła.</p>
        <h3>Sztuka wokół nas</h3>
        <ul>
          <li><b>architektura</b> – budynki,</li>
          <li><b>mała architektura</b> – ławki, fontanny, latarnie, altany, place zabaw,</li>
          <li><b>architektura krajobrazu</b> – zaprojektowane parki i ogrody,</li>
          <li><b>grafika użytkowa</b> – plakat, zaproszenie, kartka świąteczna, logo; ma szybko przekazać informację.</li>
        </ul>
      `,
      flashcards: [
        ['Malarstwo', 'Obrazy malowane farbami'],
        ['Grafika (warsztatowa)', 'Odbitki z matrycy, np. linoryt, drzeworyt'],
        ['Matryca', 'Płytka, z której odbija się odbitki'],
        ['Linoryt', 'Matryca z linoleum wycinana dłutkami'],
        ['Monotypia', 'Technika graficzna dająca tylko jedną odbitkę'],
        ['Akwarela', 'Przezroczyste farby wodne – prześwituje papier'],
        ['Plakatówka', 'Kryjąca farba wodna'],
        ['Paleta / sztaluga', 'Deseczka do mieszania farb / podstawka pod obraz'],
        ['Rzeźba pełna', 'Można ją oglądać ze wszystkich stron'],
        ['Płaskorzeźba (relief)', 'Rzeźba wystająca z płaskiego tła'],
        ['Kolaż', 'Praca z naklejonych różnych materiałów'],
        ['Mural', 'Duży obraz na ścianie budynku'],
        ['Mała architektura', 'Ławki, fontanny, latarnie, altany'],
        ['Sztuka użytkowa', 'Ładne i wygodne przedmioty codziennego użytku: meble, ceramika, plakaty'],
        ['Sztuki performatywne', 'Dzieją się na żywo przed widzami: teatr, taniec, performance'],
      ],
      questions: [
        { id: 'z39huo', q: 'Jak nazywa się płytka, z której artysta grafik robi odbitki?', options: ['matryca', 'paleta', 'sztaluga', 'kontur'], answer: 0, explain: 'Na matrycę nakłada się farbę i odbija ją na papierze.' },
        { id: 'iwpcn8', q: 'Z czego jest matryca w linorycie?', options: ['z linoleum', 'z drewna', 'z gliny', 'ze szkła'], answer: 0, explain: 'Nazwa podpowiada: linoryt – linoleum. Z drewna jest matryca w drzeworycie.' },
        { id: 'm0qzr6', q: 'Która technika graficzna daje tylko jedną odbitkę?', options: ['monotypia', 'linoryt', 'drzeworyt', 'akwarela'], answer: 0, explain: '„Mono” znaczy „jeden” – monotypia daje jedną odbitkę.' },
        { id: '9dytwo', q: 'Którą farbą namalujesz obraz, przez który prześwituje biel papieru?', options: ['akwarelą', 'plakatówką', 'farbą olejną na płótnie', 'farbą do ścian'], answer: 0, explain: 'Akwarela jest przezroczysta. Plakatówka jest kryjąca.' },
        { id: 'qxssbr', q: 'Do czego służy paleta?', options: ['do mieszania farb', 'do wycinania matrycy', 'do stawiania obrazu', 'do rzeźbienia w glinie'], answer: 0, explain: 'Na palecie malarz miesza farby. Obraz stawia na sztaludze.' },
        { id: 'ma6fke', q: 'Czym wycina się matrycę linorytu?', options: ['dłutkami', 'pędzlem', 'wałkiem', 'nożyczkami do papieru'], answer: 0, explain: 'Linoleum wycina się specjalnymi dłutkami. Wałkiem nakłada się farbę.' },
        { id: 'mxuvbw', q: 'Jak nazywa się rzeźba, która wystaje z płaskiego tła, np. na monecie?', options: ['płaskorzeźba (relief)', 'rzeźba pełna', 'kolaż', 'mural'], answer: 0, explain: 'Płaskorzeźba jest związana z tłem. Rzeźbę pełną można obejść dookoła.' },
        { id: '836phb', q: 'Jak nazywa się praca z naklejonych wycinków gazet, tkanin i zdjęć?', options: ['kolaż', 'akwarela', 'linoryt', 'relief'], answer: 0, explain: 'Kolaż łączy różne naklejone materiały.' },
        { id: '2eke7v', q: 'Jak nazywa się duży obraz namalowany na ścianie budynku?', options: ['mural', 'miniatura', 'linoryt', 'monotypia'], answer: 0, explain: 'Mural to duże malowidło na ścianie – przykład sztuki ulicy (street art).' },
        { id: 'swrpwh', q: 'Która dziedzina sztuki zajmuje się projektowaniem budynków?', options: ['architektura', 'grafika', 'malarstwo', 'rysunek'], answer: 0, explain: 'Architektura to sztuka projektowania i wznoszenia budynków.' },
        { id: 'gezejo', q: 'Co należy do małej architektury?', options: ['ławka i fontanna w parku', 'wieżowiec', 'obraz w muzeum', 'linoryt'], answer: 0, explain: 'Mała architektura to niewielkie obiekty w przestrzeni: ławki, fontanny, latarnie, altany.' },
        { id: 'y4k7kb', q: 'Która praca to przykład grafiki użytkowej?', options: ['plakat zapraszający na festyn', 'rzeźba z marmuru', 'pejzaż malowany farbami olejnymi', 'ogród w parku'], answer: 0, explain: 'Grafika użytkowa ma przekazać informację – to plakaty, zaproszenia, logo.' },
        { id: 'qqm4vh', q: 'Która ze sztuk jest performatywna – dzieje się na żywo przed widzami?', options: ['teatr', 'rzeźba', 'architektura', 'fotografia'], answer: 0, explain: 'Sztuki performatywne to np. teatr, taniec i performance.' },
        { id: '2slgpf', q: 'Artysta ułożył na plaży wielki wzór z kamieni. To przykład…', options: ['land artu', 'linorytu', 'akwareli', 'płaskorzeźby'], answer: 0, explain: 'Land art to sztuka tworzona w krajobrazie, z materiałów takich jak kamienie, piasek, liście.' },
        { id: 'mb5iby', q: 'Prawda czy fałsz?\nZ jednej matrycy linorytu można zrobić wiele odbitek.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Matrycę linorytu można wiele razy pokryć farbą i odbić. Tylko monotypia daje jedną odbitkę.' },
        { id: '7v5bbz', q: 'Prawda czy fałsz?\nNa matrycy rysunek jest odwrócony jak w lustrze.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Podczas odbijania obraz się odwraca, więc na matrycy musi być odwrócony – zwłaszcza napisy.' },
      ],
    },
    {
      id: 'dzielo-sztuki',
      name: 'Dzieło sztuki: gatunki, oryginał i kopia, muzeum',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 3 „Sztuka jako komunikat”, wym. 1 (dzieła z dziedzictwa kulturowego Polski, Europy i świata), wym. 2 (dzieła z różnych okresów: prehistoria, starożytność, średniowiecze, nowożytność, współczesność), wym. 5 (opis dzieła językiem plastycznym), wym. 7 (wrażenia estetyczne), wym. 10 (zasady prawa autorskiego), wym. 11 (inspiracja, oryginał, kopia, reprodukcja, falsyfikat); dz. 4 wym. 5 i 9 (wydarzenia kulturalne, sztuka w codziennym życiu). Gatunki malarskie (portret, pejzaż, martwa natura) – pojęcia pomocnicze do opisu dzieła (wym. 5). Dzieła: „Dama z gronostajem” (Muzeum Książąt Czartoryskich, oddział Muzeum Narodowego w Krakowie), „Bitwa pod Grunwaldem” (Muzeum Narodowe w Warszawie), „Mona Lisa” (Luwr). Wybór na klasę 4 – decyzja redakcyjna.',
      theory: `
        <h3>Gatunki malarskie – co przedstawia obraz?</h3>
        <table>
          <tr><th>Gatunek</th><th>Co przedstawia</th></tr>
          <tr><td><b>portret</b></td><td>konkretną osobę</td></tr>
          <tr><td><b>autoportret</b></td><td>samego artystę – namalował siebie</td></tr>
          <tr><td><b>pejzaż</b></td><td>krajobraz: góry, las, morze, miasto</td></tr>
          <tr><td><b>martwa natura</b></td><td>ułożone przedmioty: owoce, kwiaty w wazonie, naczynia</td></tr>
          <tr><td><b>scena rodzajowa</b></td><td>codzienne życie ludzi: pracę, zabawę, targ</td></tr>
          <tr><td><b>obraz historyczny</b></td><td>ważne wydarzenie z przeszłości, np. bitwę</td></tr>
        </table>
        <h3>Słynne dzieła</h3>
        <ul>
          <li>„<b>Dama z gronostajem</b>” – <b>Leonarda da Vinci</b>; portret, który można oglądać w <b>Krakowie</b> (Muzeum Książąt Czartoryskich).</li>
          <li>„<b>Mona Lisa</b>” – też Leonarda da Vinci; wisi w muzeum <b>Luwr</b> w Paryżu.</li>
          <li>„<b>Bitwa pod Grunwaldem</b>” – <b>Jan Matejko</b>; ogromny obraz historyczny w Muzeum Narodowym w <b>Warszawie</b>.</li>
        </ul>
        <h3>Sztuka w różnych epokach</h3>
        <ul>
          <li><b>prehistoria</b> – malowidła na ścianach jaskiń: zwierzęta, sceny polowań,</li>
          <li><b>starożytność</b> – np. piramidy w Egipcie, greckie świątynie i rzeźby,</li>
          <li><b>średniowiecze</b> – kościoły i katedry, zamki, ręcznie zdobione księgi,</li>
          <li><b>współczesność</b> – obok malarstwa także fotografia, film, instalacje, murale, sztuka cyfrowa.</li>
        </ul>
        <p>Sztuka każdej epoki odpowiada na potrzeby ludzi swoich czasów: ozdabia, opowiada, upamiętnia, pomaga się modlić.</p>
        <h3>Oryginał, kopia, reprodukcja</h3>
        <table>
          <tr><th>Pojęcie</th><th>Co to jest</th></tr>
          <tr><td><b>oryginał</b></td><td>dzieło wykonane przez samego artystę</td></tr>
          <tr><td><b>kopia</b></td><td>wierne powtórzenie dzieła wykonane przez kogoś innego – uczciwie podpisane jako kopia</td></tr>
          <tr><td><b>reprodukcja</b></td><td>odbitka dzieła, np. zdjęcie obrazu w książce, plakat, pocztówka</td></tr>
          <tr><td><b>falsyfikat</b></td><td>podróbka udająca oryginał, zrobiona, żeby <b>oszukać</b></td></tr>
          <tr><td><b>inspiracja</b></td><td>pomysł zaczerpnięty z czegoś (z przyrody, z innego dzieła), z którego powstaje <b>nowe, własne</b> dzieło</td></tr>
        </table>
        <h3>Prawo autorskie – szanuj cudzą pracę</h3>
        <ul>
          <li>Autor (twórca) ma prawo do swojego dzieła: decyduje, kto i jak może z niego korzystać.</li>
          <li>Nie podpisuj cudzej pracy swoim imieniem. Takie przywłaszczenie to <b>plagiat</b>.</li>
          <li>Gdy w swojej pracy używasz cudzego zdjęcia albo obrazka, <b>podaj autora i źródło</b> i sprawdź, czy wolno go użyć.</li>
          <li>Twoje rysunki też są chronione – są twoim dziełem.</li>
        </ul>
        <h3>W muzeum i galerii</h3>
        <ul>
          <li>Nie dotykaj dzieł, chyba że wolno (np. specjalne wystawy dla dzieci). Mów cicho.</li>
          <li>Zdjęcia rób tylko tam, gdzie jest to dozwolone (zwykle bez lampy błyskowej).</li>
          <li><b>Wernisaż</b> to uroczyste otwarcie wystawy.</li>
        </ul>
        <div class="tip">💡 Opisując obraz, odpowiedz na pytania: Co przedstawia (gatunek)? Jakie są barwy (gama ciepła czy zimna)? Jaka jest kompozycja? Jaki nastrój? Co czujesz, patrząc na niego?</div>
      `,
      flashcards: [
        ['Portret / autoportret', 'Obraz konkretnej osoby / artysta przedstawia siebie'],
        ['Pejzaż', 'Obraz przedstawiający krajobraz'],
        ['Martwa natura', 'Obraz ułożonych przedmiotów: owoców, kwiatów, naczyń'],
        ['Scena rodzajowa', 'Obraz codziennego życia ludzi'],
        ['„Dama z gronostajem”', 'Leonardo da Vinci; można ją oglądać w Krakowie'],
        ['„Bitwa pod Grunwaldem”', 'Jan Matejko; Muzeum Narodowe w Warszawie'],
        ['Oryginał', 'Dzieło wykonane przez samego artystę'],
        ['Kopia', 'Wierne powtórzenie dzieła przez inną osobę, uczciwie podpisane'],
        ['Reprodukcja', 'Odbitka dzieła, np. zdjęcie obrazu w książce'],
        ['Falsyfikat', 'Podróbka udająca oryginał – po to, by oszukać'],
        ['Inspiracja', 'Pomysł zaczerpnięty z czegoś, z którego powstaje nowe, własne dzieło'],
        ['Plagiat', 'Podpisanie cudzej pracy jako własnej'],
        ['Wernisaż', 'Uroczyste otwarcie wystawy'],
      ],
      questions: [
        { id: 'qez7t1', q: 'Obraz przedstawia góry, jezioro i las. Jaki to gatunek?', options: ['pejzaż', 'portret', 'martwa natura', 'autoportret'], answer: 0, explain: 'Pejzaż to obraz krajobrazu.' },
        { id: '4p6ueq', q: 'Obraz przedstawia jabłka, dzbanek i kwiaty w wazonie na stole. Jaki to gatunek?', options: ['martwa natura', 'pejzaż', 'portret', 'scena rodzajowa'], answer: 0, explain: 'Martwa natura przedstawia ułożone przedmioty.' },
        { id: 'rmvymh', q: 'Malarz namalował samego siebie. Jak nazywa się taki obraz?', options: ['autoportret', 'pejzaż', 'martwa natura', 'kopia'], answer: 0, explain: 'Autoportret – „auto” znaczy „sam”, artysta przedstawia siebie.' },
        { id: 'u844sp', q: 'Obraz pokazuje ludzi kupujących warzywa na wiejskim targu. Jaki to gatunek?', options: ['scena rodzajowa', 'martwa natura', 'autoportret', 'pejzaż'], answer: 0, explain: 'Scena rodzajowa przedstawia codzienne życie ludzi.' },
        { id: 'tnzemw', q: 'Kto namalował „Bitwę pod Grunwaldem”?', options: ['Jan Matejko', 'Leonardo da Vinci', 'Fryderyk Chopin', 'Józef Wybicki'], answer: 0, explain: '„Bitwa pod Grunwaldem” to obraz historyczny Jana Matejki. Można go zobaczyć w Muzeum Narodowym w Warszawie.' },
        { id: 'jqj5vc', q: 'W którym polskim mieście można obejrzeć „Damę z gronostajem” Leonarda da Vinci?', options: ['w Krakowie', 'w Gdańsku', 'w Poznaniu', 'w Lublinie'], answer: 0, explain: '„Dama z gronostajem” jest w Muzeum Książąt Czartoryskich w Krakowie.' },
        { id: 'xqi84n', q: 'Kto namalował „Mona Lisę”?', options: ['Leonardo da Vinci', 'Jan Matejko', 'Ludwig van Beethoven', 'Maria Konopnicka'], answer: 0, explain: '„Mona Lisę” namalował Leonardo da Vinci. Obraz jest w Luwrze w Paryżu.' },
        { id: 'vya2g0', q: 'Z której epoki pochodzą malowidła zwierząt na ścianach jaskiń?', options: ['z prehistorii', 'ze średniowiecza', 'ze współczesności', 'z XIX wieku'], answer: 0, explain: 'Malowidła naskalne w jaskiniach to jedna z najstarszych form sztuki – z prehistorii.' },
        { id: '0rsqeg', q: 'Zdjęcie słynnego obrazu wydrukowane w podręczniku to…', options: ['reprodukcja', 'oryginał', 'falsyfikat', 'płaskorzeźba'], answer: 0, explain: 'Reprodukcja to odbitka dzieła – zdjęcie w książce, plakat, pocztówka.' },
        { id: 'c0dfz7', q: 'Ktoś namalował obraz w stylu słynnego artysty i podpisał go jego nazwiskiem, żeby drogo sprzedać. Co powstało?', options: ['falsyfikat', 'kopia', 'reprodukcja', 'oryginał'], answer: 0, explain: 'Falsyfikat to podróbka udająca oryginał – zrobiona po to, by oszukać.' },
        { id: 'giw658', q: 'Uczeń w muzeum starannie odmalował słynny obraz i podpisał: „kopia, wykonał Jan Kowalski”. Co namalował?', options: ['kopię', 'falsyfikat', 'oryginał', 'reprodukcję'], answer: 0, explain: 'Kopia to uczciwie podpisane powtórzenie dzieła. Nie udaje oryginału, więc nie jest falsyfikatem.' },
        { id: 'ux25sl', q: 'Zachwycona wzorami na skrzydłach motyli Ola zaprojektowała własny wzór na koszulkę. Motyle były dla niej…', options: ['inspiracją', 'falsyfikatem', 'reprodukcją', 'kopią'], answer: 0, explain: 'Inspiracja to źródło pomysłu, z którego powstaje nowe, własne dzieło.' },
        { id: 'k2k7ad', q: 'Używasz w prezentacji zdjęcia znalezionego w internecie. Co robisz zgodnie z prawem autorskim?', options: ['sprawdzam, czy wolno go użyć, i podaję autora i źródło', 'podpisuję je swoim imieniem', 'nic – wszystko z internetu jest za darmo', 'wycinam podpis autora'], answer: 0, explain: 'Autor ma prawo do swojego zdjęcia. Trzeba sprawdzić, czy wolno go użyć, i podać autora oraz źródło.' },
        { id: 'e5kxqf', q: 'Jak nazywa się podpisanie cudzej pracy jako własnej?', options: ['plagiat', 'inspiracja', 'wernisaż', 'kopia'], answer: 0, explain: 'Plagiat to przywłaszczenie cudzej pracy. To nieuczciwe i niezgodne z prawem.' },
        { id: 'gpu7wg', q: 'Jak nazywa się uroczyste otwarcie wystawy?', options: ['wernisaż', 'premiera filmu', 'kolaż', 'falsyfikat'], answer: 0, explain: 'Wernisaż to otwarcie wystawy, często z udziałem artysty.' },
        { id: 'zmd1x0', q: 'Które zachowanie w muzeum jest właściwe?', options: ['oglądam z bliska, ale nie dotykam obrazów', 'dotykam farby, żeby sprawdzić fakturę', 'robię zdjęcia z lampą błyskową, gdzie chcę', 'biegam między salami'], answer: 0, explain: 'Dzieła są cenne i delikatne. Nie dotykamy ich i zachowujemy się spokojnie.' },
      ],
    },
  ],
});
