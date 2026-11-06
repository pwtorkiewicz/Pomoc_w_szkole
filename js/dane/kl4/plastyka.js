/* Plastyka – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, plastyka – II etap edukacyjny).
 * Plastyka jest w klasach IV–VII (ramowy plan: Dz.U. 2026 poz. 1028, zał. nr 1); podstawa nie dzieli wymagań na klasy.
 * Priorytet C: tylko wiedza (ściąga, fiszki, quiz) – tworzenia prac aplikacja nie zastąpi. */
window.SUBJECTS.push({
  id: 'plastyka',
  name: 'Plastyka',
  icon: '🎨',
  color: '#c2571a',
  book: 'Do dzieła! 4 (Nowa Era)',
  topics: [
    {
      id: 'linia-i-plama',
      name: 'Linia, plama i wycinanka ludowa',
      chapter: 'rozdział I „Język plastyki”, lekcje 1–2 (linia, plama) i wycinanka ludowa',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 1 „Własna aktywność twórcza”, wym. 2 (środki wyrazu: linia, plama, kształt), wym. 10 (inspiruje się sztuką ludową oraz kulturą różnych regionów Polski); dz. 3 wym. 5 (pojęcia języka plastycznego: linia, plama, kształt, kontur). Wybór na klasę 4 – decyzja redakcyjna według podręcznika „Do dzieła! 4” (podstawa nie dzieli wymagań na klasy). Fakty sprawdzone 6.11.2026 w lekcjach ZPE (zpe.gov.pl): „Linia i kreska jako środki wyrazu plastycznego” (DkHkQQkj0 – kreska, kontur, rodzaje i „nastroje” linii), „Plama barwna” (DEIXMmT7K – definicja, plamy o ostrych i miękkich brzegach, lawowana), „Podróż do wymarzonej krainy” (D19RFulMJ – plama otoczona konturem), scenariusz o płaskiej plamie u Gauguina (D1G7FnEhw – tylko opis z wyszukiwarki), „Praca plastyczna z wykorzystaniem symetrii” (D12MXsSgr – wycinanka, symetria, nożyce do strzyżenia owiec, regiony, kodra, gwiazda, tasiemka, leluja), „Sztuka ludowa – symetria w kompozycji” (D2RUyElwm – kodra); Słownik języka polskiego PWN (wycinanka). Warstwy naklejanego papieru w wycinance łowickiej i leluja jako podstawowa forma wycinanki z Puszczy Zielonej – zgodne opracowania i materiały muzealne (m.in. Muzeum Kultury Kurpiowskiej w Ostrołęce) przez wyszukiwarkę. Pominięte: wycinanki innych regionów (sieradzkie, lubelskie, opoczyńskie) i daty powstania poszczególnych wzorów.',
      theory: `
        <h3>Linia i kreska</h3>
        <p><b>Linia</b> to jeden z najważniejszych środków wyrazu w plastyce. Widzisz ją wszędzie: w gałęziach drzew, w drutach, w śladach na piasku, w bruzdach na polu.</p>
        <ul>
          <li><b>kreska</b> – ślad, jaki zostawia na kartce narzędzie rysunkowe: ołówek, kredka, pisak, węgiel,</li>
          <li><b>kontur</b> – linia, która pokazuje <b>kształt</b>, zarys postaci albo przedmiotu. W przyrodzie przedmioty nie mają narysowanych konturów – kontur dodajemy w rysunku, żeby pokazać kształt.</li>
        </ul>
        <h3>Rodzaje linii</h3>
        <table>
          <tr><th>Linia</th><th>Jak wygląda</th></tr>
          <tr><td><b>prosta</b></td><td>biegnie w jednym kierunku jak po linijce</td></tr>
          <tr><td><b>falista</b></td><td>łagodnie faluje jak woda</td></tr>
          <tr><td><b>łamana</b> (zygzakowata)</td><td>ostro zmienia kierunek – zygzak</td></tr>
          <tr><td><b>spiralna</b></td><td>zwija się jak ślimak albo sprężyna</td></tr>
          <tr><td><b>przerywana</b></td><td>składa się z krótkich kresek z przerwami</td></tr>
        </table>
        <p>Linia może być też <b>cienka</b> albo <b>gruba</b>, delikatna albo mocna.</p>
        <h3>Linia, która ma charakter</h3>
        <p>Linią można wyrazić <b>nastrój i uczucia</b>. Artyści mówią o liniach „wesołych”, „odważnych”, „wystraszonych”, „smutnych”. Liczy się to, jak prowadzisz narzędzie: mocno czy delikatnie, szybko czy powoli.</p>
        <ul>
          <li>linie <b>poziome</b> kojarzą się ze <b>spokojem</b> (np. spokojne jezioro, linia horyzontu),</li>
          <li>linie <b>ukośne</b> – z <b>ruchem</b> (np. deszcz przy wietrze, pochylone drzewa).</li>
        </ul>
        <h3>Plama barwna</h3>
        <p><b>Plama barwna</b> to ślad o różnym kształcie, wielkości i barwie. To <b>główny środek wyrazu w malarstwie</b>. Wygląd plamy zależy od narzędzia (pędzel, szpachla, gąbka) i od tego, jak go używasz.</p>
        <table>
          <tr><th>Plama</th><th>Jak wygląda</th></tr>
          <tr><td><b>o ostrych brzegach</b></td><td>ma wyraźną krawędź, jak wycięta nożyczkami</td></tr>
          <tr><td><b>o miękkich brzegach</b></td><td>brzegi są łagodne, rozmyte</td></tr>
          <tr><td><b>rozpływająca się</b> (lawowana)</td><td>farba rozlewa się w wodzie na mokrym papierze</td></tr>
          <tr><td><b>otoczona konturem</b></td><td>wokół plamy biegnie linia</td></tr>
          <tr><td><b>płaska</b></td><td>cała w jednej, jednolitej barwie, bez cieni</td></tr>
        </table>
        <p>Francuski malarz <b>Paul Gauguin</b> malował duże <b>płaskie plamy</b> jednolitej barwy oddzielone wyraźnym <b>konturem</b>.</p>
        <h3>Wycinanka ludowa</h3>
        <ul>
          <li><b>Wycinanka</b> to ludowa ozdoba wycięta ręcznie z papieru – najpierw białego, z czasem kolorowego.</li>
          <li>Papier składano kilka razy i dopiero wtedy wycinano. Dlatego wzór jest zwykle <b>symetryczny</b> – względem jednej albo kilku osi.</li>
          <li>Wycinano przeważnie <b>nożycami do strzyżenia owiec</b>.</li>
          <li>Od połowy XIX wieku wycinanki zdobiły wiejskie izby, zwłaszcza <b>przed świętami</b>.</li>
          <li>Najważniejsze regiony wycinanek to <b>region łowicki</b> i <b>region kurpiowski</b> (Kurpie).</li>
        </ul>
        <table>
          <tr><th></th><th>Wycinanka łowicka</th><th>Wycinanka kurpiowska</th></tr>
          <tr><td><b>wygląd</b></td><td><b>wielobarwna</b> – warstwy kolorowego papieru nakleja się jedna na drugą</td><td>leluje i gwiazdy z Puszczy Zielonej – zwykle wycięte z <b>jednego kawałka</b> papieru w jednym kolorze</td></tr>
          <tr><td><b>wzory</b></td><td><b>kodra</b> – prostokątna, pozioma, z kwiatami, kogutami albo scenami z życia wsi; <b>gwiazda</b> – okrągła; <b>tasiemka</b> – pionowy pas</td><td><b>leluja</b> – ozdobne drzewko, często z ptakami; <b>gwiazda</b> – okrągła</td></tr>
        </table>
        <div class="tip">💡 Złożysz papier na pół i wytniesz wzór przy zgięciu – po rozłożeniu dostaniesz symetrię jak w lustrze. Tak powstają wycinanki.</div>
      `,
      infographicNote: 'Trzy gałęzie: linia, plama i wycinanka ludowa – w każdej rodzaje do zapamiętania.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '✏️', title: 'Linia, plama, wycinanka', kolor: 5 },
        branches: [
          { title: '〰️ Linia', text: 'kreska – ślad narzędzia; kontur – pokazuje kształt', items: ['prosta, falista, łamana, spiralna, przerywana', 'pozioma – spokój, ukośna – ruch'], kolor: 1 },
          { title: '🎨 Plama barwna', text: 'główny środek wyrazu w malarstwie', items: ['o ostrych i o miękkich brzegach', 'rozpływająca się (lawowana)', 'otoczona konturem, płaska'], kolor: 2 },
          { title: '✂️ Wycinanka łowicka', items: ['wielobarwna, z warstw naklejanego papieru', 'kodra, gwiazda, tasiemka'], kolor: 3 },
          { title: '✂️ Wycinanka kurpiowska', items: ['leluja – ozdobne drzewko', 'gwiazda – zwykle jeden kolor'], kolor: 4 },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'Wycinankę tnie się ze złożonego papieru – dlatego wzór jest symetryczny.', kolor: 5 },
      },
      flashcards: [
        ['Kreska', 'Ślad, jaki zostawia na kartce narzędzie rysunkowe'],
        ['Kontur', 'Linia, która pokazuje kształt, zarys postaci albo przedmiotu'],
        ['Rodzaje linii', 'prosta, falista, łamana (zygzak), spiralna, przerywana; cienka i gruba'],
        ['Linie poziome / ukośne', 'Poziome kojarzą się ze spokojem, ukośne – z ruchem'],
        ['Plama barwna', 'Ślad o różnym kształcie, wielkości i barwie – główny środek wyrazu w malarstwie'],
        ['Rodzaje plam', 'o ostrych brzegach, o miękkich brzegach, rozpływająca się (lawowana), otoczona konturem, płaska'],
        ['Płaska plama', 'Plama jednolitej barwy, bez cieni – malował nimi Paul Gauguin'],
        ['Wycinanka ludowa', 'Ozdoba wycięta ręcznie z papieru; zwykle symetryczna, bo papier się składa'],
        ['Czym wycinano wycinanki?', 'Przeważnie nożycami do strzyżenia owiec'],
        ['Wycinanka łowicka', 'Wielobarwna – z warstw kolorowego papieru naklejanych jedna na drugą'],
        ['Kodra', 'Prostokątna, pozioma wycinanka łowicka z kwiatami, zwierzętami albo scenami z życia wsi'],
        ['Leluja', 'Kurpiowska wycinanka w kształcie ozdobnego drzewka'],
      ],
      questions: [
        { id: '2z29yi', q: 'Co to jest kreska?', options: ['ślad, jaki zostawia na kartce narzędzie rysunkowe', 'zamalowana powierzchnia jednolitej barwy', 'układ wszystkich elementów w obrazie', 'stopień jasności wybranej barwy'], answer: 0, explain: 'Kreska to ślad ołówka, kredki, pisaka czy węgla. Zamalowana powierzchnia to plama.' },
        { id: 'vyvwno', q: 'Jak nazywa się linia, która obrysowuje kształt?', options: ['kontur', 'faktura', 'walor', 'plama'], answer: 0, explain: 'Kontur to linia otaczająca kształt przedmiotu.' },
        { id: 'h4jfoe', q: 'Prawda czy fałsz?\nW przyrodzie przedmioty nie mają narysowanych konturów – kontur dodajemy w rysunku, żeby pokazać kształt.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Jabłko czy drzewo nie mają wokół siebie czarnej linii. Kontur to sposób rysownika na pokazanie kształtu.' },
        {
          id: 'wtpfnp', q: 'Jaka to linia?',
          svg: `<svg viewBox="0 0 300 120" role="img" aria-label="Linia, która ostro zmienia kierunek – w górę i w dół, jak zygzak.">
            <path d="M20,90 L60,30 L100,90 L140,30 L180,90 L220,30 L260,90 L280,60" class="ln sw"/>
          </svg>`,
          options: ['łamana', 'falista', 'spiralna', 'przerywana'], answer: 0, explain: 'Linia ostro zmienia kierunek – to linia łamana, czyli zygzakowata. Falista zmienia kierunek łagodnie.',
        },
        {
          id: 'ibbhlv', q: 'Jaka to linia?',
          svg: `<svg viewBox="0 0 300 140" role="img" aria-label="Linia, która zwija się do środka jak muszla ślimaka.">
            <path d="M150,70 m0,-6 a6,6 0 1 1 -6,6 a14,14 0 0 1 14,-14 a22,22 0 0 1 22,22 a30,30 0 0 1 -30,30 a38,38 0 0 1 -38,-38 a46,46 0 0 1 46,-46 a54,54 0 0 1 54,54" class="ln sw"/>
          </svg>`,
          options: ['spiralna', 'łamana', 'prosta', 'przerywana'], answer: 0, explain: 'Linia zwija się jak ślimak albo sprężyna – to linia spiralna.',
        },
        { id: 'h2hwb2', q: 'Rysujesz spokojne jezioro w bezwietrzny dzień. Jakie linie najlepiej oddadzą spokój?', options: ['poziome', 'ukośne', 'zygzakowate', 'poszarpane'], answer: 0, explain: 'Linie poziome kojarzą się ze spokojem. Ukośne i zygzakowate dają wrażenie ruchu.' },
        { id: 'nrj3up', q: 'Który środek wyrazu jest najważniejszy w malarstwie?', options: ['plama barwna', 'kontur', 'kreska', 'linia przerywana'], answer: 0, explain: 'Malarz pracuje przede wszystkim plamą barwną – śladem farby o różnym kształcie, wielkości i barwie.' },
        { id: '1bara8', q: 'Plama ma wyraźną, równą krawędź – jakby była wycięta nożyczkami. Jaka to plama?', options: ['o ostrych brzegach', 'o miękkich brzegach', 'rozpływająca się (lawowana)', 'rozmyta gąbką'], answer: 0, explain: 'Wyraźna krawędź to plama o ostrych brzegach. Plama o miękkich brzegach ma brzegi rozmyte.' },
        { id: 'cqy5oo', q: 'Kropla farby spadła na mokry papier i rozlała się w wodzie. Jaka powstała plama?', options: ['rozpływająca się (lawowana)', 'płaska, jednolitej barwy', 'o ostrych, wyraźnych brzegach', 'otoczona wyraźnym konturem'], answer: 0, explain: 'Farba rozlewająca się w wodzie daje plamę rozpływającą się, inaczej lawowaną.' },
        { id: 'ri9iem', q: 'Paul Gauguin malował duże plamy jednolitej barwy, bez cieni, oddzielone wyraźnym konturem. Jakie to plamy?', options: ['płaskie', 'rozpływające się', 'o miękkich brzegach', 'lawowane'], answer: 0, explain: 'Plama jednolitej barwy, bez cieni, to plama płaska. Gauguin dodatkowo obwodził ją konturem.' },
        { id: '5fdug1', q: 'Co to jest wycinanka ludowa?', options: ['ozdoba wycięta ręcznie z papieru', 'obraz z wydzieranych kawałków papieru', 'odbitka zrobiona z matrycy z linoleum', 'rzeźba wycięta nożem w drewnie'], answer: 0, explain: 'Wycinanka to ludowa ozdoba wycięta ręcznie z papieru. Obraz z wydzieranych kawałków to wydzieranka.' },
        { id: 'gmyvsm', q: 'Dlaczego wzór wycinanki ludowej jest zwykle symetryczny?', options: ['bo wycina się go ze złożonego papieru', 'bo rysuje się go od linijki', 'bo odbija się go z matrycy', 'bo maluje się go przez szablon'], answer: 0, explain: 'Papier składano kilka razy i dopiero wtedy wycinano. Po rozłożeniu wzór powtarza się symetrycznie.' },
        { id: 'eg6qto', q: 'Czym przeważnie wycinano ludowe wycinanki?', options: ['nożycami do strzyżenia owiec', 'dłutkami do cięcia linoleum', 'małą piłką do cięcia drewna', 'ostrym nożykiem do tapet'], answer: 0, explain: 'Wycinano przeważnie nożycami do strzyżenia owiec – dawały się nimi wyciąć nawet drobne wzory.' },
        { id: '7j2dk1', q: 'Z którego regionu pochodzi wycinanka zwana kodrą?', options: ['z regionu łowickiego', 'z regionu kurpiowskiego', 'z Podhala', 'z Kaszub'], answer: 0, explain: 'Kodra to prostokątna, pozioma wycinanka łowicka z kwiatami, zwierzętami albo scenami z życia wsi.' },
        { id: '4oom1u', q: 'Jak nazywa się kurpiowska wycinanka w kształcie ozdobnego drzewka?', options: ['leluja', 'kodra', 'tasiemka', 'makatka'], answer: 0, explain: 'Leluja to ozdobne drzewko, często z ptakami – podstawowa wycinanka z Puszczy Zielonej na Kurpiach.' },
        { id: '19soxk', q: 'Prawda czy fałsz?\nWycinanki łowickie są wielobarwne – warstwy kolorowego papieru nakleja się jedna na drugą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Wycinanka łowicka składa się z kilku warstw kolorowego papieru. Kurpiowskie leluje i gwiazdy są zwykle wycięte z jednego kawałka papieru w jednym kolorze.' },
        { id: '8r0g6q', q: 'Kiedy dawniej wycinanki szczególnie zdobiły wiejskie izby?', options: ['przed świętami', 'w czasie żniw', 'w czasie roztopów', 'w czasie siewów'], answer: 0, explain: 'Od połowy XIX wieku wycinanki były ważną ozdobą wiejskich izb, zwłaszcza przed świętami.' },
      ],
    },
    {
      id: 'barwy-i-srodki',
      name: 'Barwy: podstawowe, pochodne, dopełniające, złamane',
      chapter: 'rozdział I „Język plastyki”, lekcje 3–4 (barwy podstawowe i pochodne, dopełniające i złamane)',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 1 „Własna aktywność twórcza”, wym. 2 (środki wyrazu: kolor), wym. 3 (barwy podstawowe, pochodne, czyste, złamane, dopełniające, ciepłe, zimne); dz. 3 wym. 5 (pojęcia języka plastycznego: barwa, gama barwna). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli wymagań na klasy). Barwy podstawowe podano tak, jak w szkolnym malarstwie farbami (żółta, czerwona, niebieska). Eksperymenty z farbami to praca na lekcji – tu utrwalasz pojęcia. Walor, faktura, światłocień, perspektywa i kompozycja – w dziale „na zapas” (w podręczniku w kolejnych klasach).',
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
        <h3>Barwy czyste i złamane</h3>
        <ul>
          <li><b>barwa czysta</b> – prosto z tubki, intensywna, bez dodatków,</li>
          <li><b>barwa złamana</b> – „przygaszona”: zmieszana z odrobiną szarości, czerni albo barwy dopełniającej,</li>
          <li><b>barwy niekolorowe</b> (achromatyczne): biała, czarna i szare.</li>
        </ul>
        <div class="tip">💡 Kółko barw: naprzeciwko każdej barwy podstawowej leży jej barwa dopełniająca.</div>
      `,
      infographicNote: 'Czytaj wierszami: barwa podstawowa, jej para dopełniająca i z czego tę parę zmieszasz.',
      infographic: {
        type: 'porownanie',
        top: { title: '🎨 Barwy podstawowe', text: 'żółta, czerwona, niebieska – nie uzyskasz ich przez mieszanie innych farb', kolor: 4 },
        kolumny: [{ title: 'Podstawowa', kolor: 4 }, { title: 'Dopełniająca (pochodna)', kolor: 5 }, { title: 'Z czego?', kolor: 1 }],
        wiersze: [
          { cells: ['czerwona', 'zielona', 'żółta + niebieska'] },
          { cells: ['żółta', 'fioletowa', 'czerwona + niebieska'] },
          { cells: ['niebieska', 'pomarańczowa', 'żółta + czerwona'] },
        ],
        bottom: { title: '🌡️ Barwy ciepłe i zimne', items: ['☀️ ciepłe: żółta, pomarańczowa, czerwona', '❄️ zimne: niebieska, błękitna, granatowa, niebieskozielona'], kolor: 2 },
      },
      flashcards: [
        ['Barwy podstawowe', 'żółta, czerwona, niebieska'],
        ['Barwy pochodne', 'pomarańczowa (ż + cz), zielona (ż + n), fioletowa (cz + n)'],
        ['Pary barw dopełniających', 'czerwona – zielona, żółta – fioletowa, niebieska – pomarańczowa'],
        ['Barwy ciepłe', 'żółta, pomarańczowa, czerwona'],
        ['Barwy zimne', 'niebieska, błękitna, granatowa, niebieskozielona'],
        ['Gama barwna', 'Zestaw barw, które przeważają w obrazie'],
        ['Barwa złamana', 'Przygaszona – zmieszana z szarością, czernią albo barwą dopełniającą'],
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
        { id: 'qoqay3', q: 'Jak nazywa się barwa „przygaszona” dodatkiem szarości lub czerni?', options: ['barwa złamana', 'barwa czysta', 'barwa podstawowa', 'barwa dopełniająca'], answer: 0, explain: 'Barwa czysta jest intensywna, prosto z tubki. Po dodaniu szarości, czerni albo barwy dopełniającej staje się złamana.' },
        { id: 'h9ils5', q: 'Która barwa jest zimna?', options: ['granatowa', 'pomarańczowa', 'czerwona', 'żółta'], answer: 0, explain: 'Granatowa kojarzy się z wodą i cieniem – to barwa zimna. Pozostałe są ciepłe.' },
        { id: 'nasv27', q: 'Jak nazywa się intensywna barwa prosto z tubki, bez żadnych dodatków?', options: ['barwa czysta', 'barwa złamana', 'barwa niekolorowa', 'barwa przygaszona'], answer: 0, explain: 'Barwa czysta jest intensywna, bez dodatków. Po dodaniu szarości, czerni albo barwy dopełniającej staje się złamana, czyli przygaszona.' },
        { id: 'b22yf7', q: 'Prawda czy fałsz?\nBiała, czarna i szara to barwy niekolorowe (achromatyczne).', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Biel, czerń i szarości nie mają koloru – to barwy achromatyczne.' },
      ],
    },
    {
      id: 'techniki-i-dziedziny',
      name: 'Techniki plastyczne i dziedziny sztuki',
      chapter: 'rozdziały II „Techniki plastyczne” (techniki rysunkowe, pastele, malarskie, mieszane) i III.1 „Grafika na co dzień” (stempel)',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 2 „Techniki plastyczne”, wym. 1 (rozpoznaje podstawowe techniki plastyczne), wym. 2 (dobiera narzędzia i materiały do techniki), wym. 5 (techniki tradycyjne i cyfrowe); dz. 1 wym. 5 (maluje, rysuje, rzeźbi), wym. 7 (rodzaje sztuk performatywnych), wym. 8 (bryły i reliefy), wym. 13 (np. street art, land art); dz. 4 wym. 1 (grafika użytkowa: plakat, zaproszenie, logo), wym. 2 (dziedziny sztuki użytkowej), wym. 4 (architektura, mała architektura, architektura krajobrazu); dz. 2 wym. 3 (łączy różne techniki plastyczne) i wymaganie do wyboru dz. 2 pkt 2 (techniki mieszane). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli wymagań na klasy). Pastele, techniki mieszane, wydrapywanka i stempel – fakty sprawdzone 6.11.2026 w lekcjach ZPE (zpe.gov.pl): „Techniki malarskie” (DVHCxk6Co – pastel jako technika między rysunkiem a malarstwem, chropowate podłoże, rozcieranie palcem; techniki mieszane, kombinowane, własne), „Namalować uczucia” (D1C3sVlma – skład pasteli, pastele suche i tłuste, Wyspiański), „Mój księgozbiór, mój ekslibris” (DWeCI3rAG – druk wypukły, pieczątka z ziemniaka i z gumki, litery w lustrzanym odbiciu), „Pracownia grafiki warsztatowej w twoim domu” (D9nE6HcWN), wydrapywanka – lekcja ZPE o technikach rysunkowych (opis z wyszukiwarki); Słownik języka polskiego PWN (fiksatywa, stempel). Pominięte: farby z natury (rozdział II.3) – brak sprawdzonego opisu.',
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
        <h3>Pastele</h3>
        <ul>
          <li><b>Pastel</b> to technika <b>pośrednia między rysunkiem a malarstwem</b>. Zamiast farb i pędzli używasz kredek – <b>pasteli</b>.</li>
          <li>Pastele robi się z barwnika z dodatkiem kredy, gipsu i odrobiny spoiwa (substancji, która wszystko łączy).</li>
          <li><b>pastele suche</b> – praca wygląda jak narysowana kolorową <b>kredą</b>; kolory łatwo <b>rozetrzeć palcem</b>, najlepiej na chropowatym papierze,</li>
          <li><b>pastele tłuste</b> (olejne) – praca wygląda jak zrobiona <b>kredką świecową</b> (woskową).</li>
          <li>Rysunek suchym pastelem łatwo się ściera. Można go utrwalić <b>fiksatywą</b> – płynem do utrwalania rysunków.</li>
          <li>Pastelami tworzył portrety <b>Stanisław Wyspiański</b>.</li>
        </ul>
        <h3>Techniki graficzne – odbijanie</h3>
        <p>Artysta przygotowuje <b>matrycę</b>, nakłada na nią farbę <b>wałkiem</b> i odbija na papierze. Powstaje <b>odbitka</b>. Z jednej matrycy można zrobić wiele odbitek.</p>
        <ul>
          <li><b>linoryt</b> – matryca z <b>linoleum</b>, wycinana <b>dłutkami</b>,</li>
          <li><b>drzeworyt</b> – matryca z <b>drewna</b>,</li>
          <li><b>monotypia</b> – daje tylko <b>jedną</b> odbitkę („mono” = jeden).</li>
        </ul>
        <div class="tip">💡 Na matrycy wszystko jest odwrócone jak w lustrze. Napis na linorycie trzeba wyciąć od tyłu, żeby na odbitce był prosty.</div>
        <h3>Stempel – grafika na co dzień</h3>
        <ul>
          <li><b>Stempel</b> (pieczątka) to przyrząd do odbijania wzoru. To najprostsza grafika: stempel jest matrycą.</li>
          <li>Linoryt, drzeworyt i stempel to <b>druk wypukły</b>: farba zostaje na <b>wypukłych</b> częściach, a wycięte zagłębienia na odbitce są puste.</li>
          <li><b>Stempel z ziemniaka</b>: przekrój ziemniak na pół, narysuj prosty wzór, wytnij nożykiem zagłębienia, wypukłe części pomaluj gęstą farbą plakatową i odbij na papierze.</li>
          <li>Litery i napisy wycinasz w <b>lustrzanym odbiciu</b>.</li>
          <li>Pieczątka z ziemniaka jest <b>nietrwała</b>. Trwalszy stempel wytniesz w gumce do mazania.</li>
          <li>Odbijając stempel wiele razy w równych odstępach, tworzysz <b>wzór rytmiczny</b>, np. na papier do pakowania prezentów.</li>
        </ul>
        <h3>Rzeźba</h3>
        <ul>
          <li><b>rzeźba pełna</b> – można ją obejść i oglądać ze wszystkich stron,</li>
          <li><b>płaskorzeźba</b> (relief) – wystaje z płaskiego tła, np. na monecie albo na ścianie budynku,</li>
          <li>w szkole rzeźbisz w glinie, modelinie, plastelinie albo masie solnej.</li>
        </ul>
        <h3>Techniki łączone i nowe</h3>
        <ul>
          <li><b>techniki mieszane</b> (kombinowane) – w jednej pracy łączysz różne techniki i materiały, np. farbę, naklejony papier i tusz; artyści szukają tak własnych, niepowtarzalnych efektów,</li>
          <li><b>kolaż</b> – praca z naklejonych różnych materiałów: wycinków z gazet, tkanin, zdjęć,</li>
          <li><b>wydrapywanka</b> – kolorowy podkład pokrywa się czarnym tuszem; gdy wyschnie, wydrapujesz rysunek i spod tuszu wychodzi kolor,</li>
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
      infographicNote: 'Każda gałąź to dziedzina sztuki albo grupa technik – w środku przykłady.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '🖼️', title: 'Dziedziny i techniki', kolor: 5 },
        branches: [
          { title: '✏️ Rysunek i pastele', text: 'kreska: ołówek, węgiel, kredka, tusz', items: ['pastele suche – jak kreda, rozcierasz palcem', 'pastele tłuste – jak kredka świecowa'], kolor: 1 },
          { title: '🖌️ Malarstwo', text: 'obrazy malowane farbami', items: ['akwarela – przezroczysta, prześwituje papier', 'plakatówka – kryjąca', 'farby olejne i akrylowe – często na płótnie'], kolor: 2 },
          { title: '🖨️ Grafika', text: 'matryca → farba wałkiem → odbitka', items: ['linoryt – matryca z linoleum', 'drzeworyt – matryca z drewna', 'stempel, np. z ziemniaka', 'monotypia – tylko jedna odbitka'], kolor: 3 },
          { title: '🗿 Rzeźba', items: ['rzeźba pełna – obejdziesz ją dookoła', 'płaskorzeźba (relief) – wystaje z tła'], kolor: 4 },
          { title: '✂️ Techniki mieszane i nowe', items: ['techniki mieszane, kolaż, wydrapywanka', 'grafika komputerowa, kolaż cyfrowy', 'mural, land art'], kolor: 1 },
          { title: '🏛️ Sztuka wokół nas', items: ['architektura i mała architektura', 'architektura krajobrazu – parki, ogrody', 'grafika użytkowa – plakat, logo'], kolor: 5 },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'Na matrycy wszystko jest odwrócone jak w lustrze.', kolor: 3 },
      },
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
        ['Pastel', 'Technika między rysunkiem a malarstwem – kredki z barwnika, kredy i gipsu'],
        ['Pastele suche / tłuste', 'Suche – jak kolorowa kreda; tłuste (olejne) – jak kredka świecowa'],
        ['Fiksatywa', 'Płyn do utrwalania rysunków, które łatwo się ścierają (np. pastelowych)'],
        ['Techniki mieszane', 'Łączenie w jednej pracy różnych technik i materiałów'],
        ['Wydrapywanka', 'Kolorowy podkład pokryty czarnym tuszem; rysunek się wydrapuje'],
        ['Stempel', 'Przyrząd do odbijania wzoru; druk wypukły – farba na wypukłych częściach'],
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
        { id: 'n0hooj', q: 'Pastel to technika pośrednia między…', options: ['rysunkiem a malarstwem', 'rzeźbą a architekturą', 'grafiką a fotografią', 'kolażem a mozaiką'], answer: 0, explain: 'Pastelami rysuje się jak kredkami, ale kolory można rozcierać i nakładać plamami jak farbę.' },
        { id: 'kshwg7', q: 'Praca wykonana tłustymi (olejnymi) pastelami wygląda podobnie jak praca wykonana…', options: ['kredką świecową', 'kolorową kredą', 'akwarelą', 'ołówkiem'], answer: 0, explain: 'Tłusty pastel przypomina kredkę świecową (woskową). Suchy pastel – kolorową kredę.' },
        { id: 'dyrqpz', q: 'Do czego służy fiksatywa?', options: ['do utrwalania rysunków, które łatwo się ścierają', 'do mieszania farb przed malowaniem obrazu', 'do mycia pędzli po skończonym malowaniu', 'do wycinania matrycy w kawałku linoleum'], answer: 0, explain: 'Fiksatywa to płyn do utrwalania rysunków, np. wykonanych suchymi pastelami.' },
        { id: '6eo5gg', q: 'Ola namalowała tło farbą, nakleiła wycinki z gazet i dorysowała szczegóły tuszem. W jakiej technice wykonała pracę?', options: ['w technice mieszanej', 'w technice monotypii', 'w technice akwareli', 'w technice linorytu'], answer: 0, explain: 'Połączenie w jednej pracy różnych technik i materiałów to technika mieszana (kombinowana).' },
        { id: 'qpb7kh', q: 'Kolorowy podkład pokryto czarnym tuszem, a po wyschnięciu wydrapano rysunek. Jaka to technika?', options: ['wydrapywanka', 'wydzieranka', 'akwarela', 'monotypia'], answer: 0, explain: 'W wydrapywance spod czarnego tuszu wydrapuje się kolorowy podkład. Wydzieranka to obraz z wydzieranych kawałków papieru.' },
        { id: '76w9lj', q: 'Które części stempla zostawiają ślad na papierze?', options: ['wypukłe, pokryte farbą', 'wycięte zagłębienia', 'tylko boki stempla', 'miejsca bez farby'], answer: 0, explain: 'Stempel to druk wypukły: farba zostaje na wypukłych częściach i to one odbijają się na papierze.' },
        { id: 'kt88jo', q: 'Robisz stempel z literą F. Jak narysujesz ją na ziemniaku?', options: ['w lustrzanym odbiciu', 'tak jak w zeszycie', 'do góry nogami', 'obróconą na bok'], answer: 0, explain: 'Odbitka odwraca wzór jak lustro. Żeby litera na papierze była prosta, na stemplu musi być w lustrzanym odbiciu.' },
        { id: '4aq9dc', q: 'Do której grupy technik graficznych należą linoryt, drzeworyt i stempel?', options: ['do druku wypukłego', 'do druku wklęsłego', 'do technik malarskich', 'do technik rzeźbiarskich'], answer: 0, explain: 'W druku wypukłym farbę przyjmują wypukłe części matrycy, a wycięte zagłębienia zostają puste.' },
        { id: 'uko0mw', q: 'Prawda czy fałsz?\nStempel z ziemniaka jest trwały – posłuży przez wiele lat.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Pieczątka z ziemniaka jest nietrwała – szybko wysycha i się psuje. Trwalszy stempel wytniesz w gumce do mazania.' },
        { id: 'ixv60g', q: 'Odbijasz ten sam stempel na papierze rząd po rzędzie, w równych odstępach. Jaki wzór powstaje?', options: ['rytmiczny', 'otwarty', 'asymetryczny', 'przypadkowy'], answer: 0, explain: 'Te same elementy powtarzane w równych odstępach tworzą wzór rytmiczny.' },
        { id: '7v5bbz', q: 'Prawda czy fałsz?\nNa matrycy rysunek jest odwrócony jak w lustrze.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Podczas odbijania obraz się odwraca, więc na matrycy musi być odwrócony – zwłaszcza napisy.' },
      ],
    },
    {
      id: 'historia-sztuki',
      name: 'Historia sztuki: prehistoria, Egipt, antyk',
      chapter: 'wstawki „Historia sztuki” w rozdziałach I–III (sztuka prehistoryczna, starożytny Egipt, sztuka antyku)',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 3 „Sztuka jako komunikat”, wym. 1 (dzieła architektury i sztuk plastycznych z dziedzictwa kulturowego Europy i świata), wym. 2 (porównuje dzieła z różnych okresów – prehistoria, starożytność – i wskazuje, jak sztuka odpowiada na potrzeby swojej epoki). Wybór na klasę 4 według podręcznika „Do dzieła! 4”. Fakty sprawdzone 6.11.2026 w lekcjach ZPE (zpe.gov.pl): o sztuce prehistorycznej (D5QJVS41F, D44KU69VV – malowidła w Altamirze i Lascaux, barwniki, Wenus z Willendorfu, megality, Stonehenge), o Egipcie (D4J9JZ3NF, D4REZVBUQ, DC4US6ZVK – piramidy w Gizie, Sfinks, zasady malowania postaci, maska Tutanchamona, popiersie Nefertiti), o Grecji (D4hV6enbC – Partenon, porządki, kariatydy, Dyskobol, malowane rzeźby) i o Rzymie (DF97NS1MT, DTrpCHFam – Koloseum, akwedukty, łuki triumfalne, Panteon, beton, mozaika); piramida Cheopsa jako cud świata – lekcje matematyki ZPE (D15pfPFgo, D6O8qw2D0); definicje w Słowniku języka polskiego PWN (menhir, dolmen, megalit, hieroglif, papirus, mumia, sarkofag, mozaika, akwedukt). Odciski dłoni i miejsce przechowywania popiersia Nefertiti – zgodne źródła przez wyszukiwarkę. Pominięte, bo źródła się różnią: wiek malowideł z Lascaux, wysokość piramidy Cheopsa, data końca budowy Partenonu, obecne miejsce przechowywania maski Tutanchamona. Cele powstania malowideł jaskiniowych to przypuszczenia badaczy – tak je opisano.',
      theory: `
        <h3>Prehistoria – sztuka sprzed wynalezienia pisma</h3>
        <ul>
          <li>Najstarsze obrazy ludzie malowali na <b>ścianach jaskiń</b>. Przedstawiali głównie <b>zwierzęta</b>: bizony, konie, jelenie, tury, mamuty. Ludzi malowali rzadko i bardzo prosto.</li>
          <li><b>Barwniki</b> brali z natury: <b>ochrę</b> (czerwoną i żółtą ziemię) i <b>węgiel drzewny</b>. Rozrabiali je z wodą albo tłuszczem zwierzęcym.</li>
          <li>Malowali <b>palcami</b>, pędzlami z sierści albo <b>wydmuchiwali</b> barwnik przez rurki z kości. Wykorzystywali wypukłości skały – dzięki nim zwierzę wyglądało na trójwymiarowe.</li>
          <li><b>Odciski dłoni</b>: ktoś przykładał dłoń do skały i wydmuchiwał wokół niej barwnik – na skale zostawał obrys dłoni.</li>
          <li>Najsłynniejsze jaskinie: <b>Altamira</b> w Hiszpanii (bizony malowane czerwienią i czernią na sklepieniu) i <b>Lascaux</b> we Francji (Sala Byków z wielkimi końmi, turami i jeleniami).</li>
          <li>Małe figurki kobiet nazywamy „Wenus”. Najsłynniejsza to <b>Wenus z Willendorfu</b> – mała kamienna figurka bez rysów twarzy.</li>
          <li><b>Megality</b> to budowle z wielkich kamieni: <b>menhir</b> – pionowo ustawiony głaz, <b>dolmen</b> – grobowiec z pionowych głazów przykrytych płaską płytą. Kamienny krąg <b>Stonehenge</b> w Anglii budowano około 5000 lat temu; jego układ wiąże się z ruchem słońca.</li>
        </ul>
        <p>Po co ludzie malowali w jaskiniach? Tego nie wiemy na pewno. Badacze <b>przypuszczają</b>, że malowidła miały związek z obrzędami i magią – np. z prośbą o udane polowanie.</p>
        <h3>Starożytny Egipt – sztuka dla wieczności</h3>
        <ul>
          <li><b>Piramidy w Gizie</b> to grobowce faraonów (królów Egiptu). Największa – <b>piramida Cheopsa</b> – należała do siedmiu cudów świata.</li>
          <li><b>Wielki Sfinks</b> to posąg <b>lwa z głową człowieka</b>: lew oznacza siłę, a ludzka głowa – władzę faraona. Sfinks strzegł grobowców.</li>
          <li>Malowidła w grobowcach pokazywały życie, jakie zmarły chciał wieść po śmierci. Egipcjanie wierzyli, że to, co namalowane, będzie naprawdę istnieć w zaświatach.</li>
          <li><b>Mumia</b> to ciało zabezpieczone przed rozkładem; składano ją w <b>sarkofagu</b> – grobowcu w kształcie trumny, najczęściej z kamienia.</li>
          <li><b>Złota maska Tutanchamona</b> leżała na głowie i ramionach mumii faraona – ze złota, kolorowego szkła i kamieni.</li>
          <li><b>Popiersie Nefertiti</b>, żony faraona, z malowanego wapienia – królowa ma wysoką niebieską koronę. Jest w muzeum w Berlinie.</li>
          <li>Egipcjanie pisali <b>hieroglifami</b> – znakami pisma obrazkowego – na <b>papirusie</b>, materiale z rośliny.</li>
        </ul>
        <h3>Jak Egipcjanie malowali ludzi?</h3>
        <p>Według stałych zasad (<b>kanonu</b>):</p>
        <ul>
          <li><b>głowa i nogi z profilu</b> (z boku), a <b>tors, ramiona i oko – od przodu</b>,</li>
          <li><b>wielkość postaci zależy od jej ważności</b>: faraon i bogowie są najwięksi, słudzy – mali.</li>
        </ul>
        <h3>Starożytna Grecja</h3>
        <ul>
          <li><b>Partenon</b> to świątynia bogini Ateny na wzgórzu <b>Akropol</b> w <b>Atenach</b>.</li>
          <li>Kolumna ma trzy części: <b>bazę</b> (podstawę), <b>trzon</b> i <b>głowicę</b>.</li>
          <li><b>Kariatydy</b> to kolumny w kształcie kobiet.</li>
          <li>Rzeźba „<b>Dyskobol</b>” Myrona przedstawia sportowca rzucającego dyskiem. Oryginał z brązu zaginął – znamy go z rzymskich kopii.</li>
          <li>Greckie rzeźby były <b>malowane</b> – dziś farby prawie zniknęły.</li>
        </ul>
        <table>
          <tr><th>Porządek</th><th>Jak go rozpoznać</th></tr>
          <tr><td><b>dorycki</b></td><td>najprostszy; kolumna <b>bez bazy</b>, prosta głowica (jak spłaszczona poduszka z płytą)</td></tr>
          <tr><td><b>joński</b></td><td>smuklejsza kolumna na bazie; głowica ze <b>ślimacznicami</b> (zwojami)</td></tr>
          <tr><td><b>koryncki</b></td><td>najbardziej ozdobny; głowica z <b>liśćmi akantu</b></td></tr>
        </table>
        <h3>Starożytny Rzym</h3>
        <ul>
          <li><b>Koloseum</b> – ogromny amfiteatr w Rzymie na około 50 tysięcy widzów; odbywały się w nim walki gladiatorów.</li>
          <li><b>Akwedukt</b> – wodociąg na łukach, który doprowadzał wodę do miast.</li>
          <li><b>Łuk triumfalny</b> – stawiany na pamiątkę zwycięstwa, np. łuk Konstantyna obok Koloseum.</li>
          <li><b>Panteon</b> – „świątynia wszystkich bogów” z wielką kopułą, na której szczycie jest okrągły otwór.</li>
          <li>Rzymianie wynaleźli <b>beton</b> – dzięki niemu budowali łuki i kopuły.</li>
          <li><b>Mozaika</b> – obraz z drobnych kawałków kolorowych kamieni albo szkła; Rzymianie zdobili nią podłogi i ściany.</li>
        </ul>
        <div class="tip">💡 Kolejność: jaskinie → piramidy → greckie świątynie → rzymskie budowle. Sztuka każdej epoki odpowiadała na potrzeby ludzi: pomagała w obrzędach, zapewniała życie po śmierci, czciła bogów, upamiętniała zwycięstwa.</div>
      `,
      infographicNote: 'Czytaj od góry – od najstarszej sztuki do starożytnego Rzymu.',
      infographic: {
        type: 'os',
        items: [
          { label: 'jaskinie', title: '🦬 Prehistoria', text: 'malowidła zwierząt (Altamira, Lascaux), odciski dłoni, Wenus z Willendorfu', kolor: 2 },
          { label: 'kamienie', title: '🪨 Megality', text: 'menhir, dolmen, krąg Stonehenge', kolor: 2 },
          { label: 'Egipt', title: '🔺 Piramidy i Sfinks', text: 'grobowce faraonów; postać: głowa z profilu, tors od przodu', kolor: 4 },
          { label: 'Grecja', title: '🏛️ Partenon', text: 'porządki: dorycki, joński, koryncki; Dyskobol', kolor: 1 },
          { label: 'Rzym', title: '🏟️ Koloseum', text: 'akwedukt, łuk triumfalny, Panteon, mozaika', kolor: 3 },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'W Egipcie wielkość postaci zależy od jej ważności.', kolor: 5 },
      },
      flashcards: [
        ['Malowidła jaskiniowe', 'Głównie zwierzęta: bizony, konie, jelenie, tury, mamuty (Altamira, Lascaux)'],
        ['Czym malowano w jaskiniach?', 'Ochrą i węglem drzewnym – palcami, pędzlami z sierści, wydmuchując barwnik przez rurki'],
        ['Wenus z Willendorfu', 'Mała prehistoryczna kamienna figurka kobiety bez rysów twarzy'],
        ['Menhir / dolmen', 'Pionowo ustawiony głaz / grobowiec z głazów przykrytych płytą'],
        ['Stonehenge', 'Kamienny krąg w Anglii; jego układ wiąże się z ruchem słońca'],
        ['Piramidy w Gizie', 'Grobowce faraonów; piramida Cheopsa – jeden z siedmiu cudów świata'],
        ['Wielki Sfinks', 'Lew z głową człowieka – siła i władza faraona; strzegł grobowców'],
        ['Kanon egipski', 'Głowa i nogi z profilu, tors, ramiona i oko od przodu'],
        ['Wielkość postaci w Egipcie', 'Zależy od ważności: faraon największy, słudzy mali'],
        ['Hieroglify / papirus', 'Pismo obrazkowe / materiał do pisania z rośliny'],
        ['Partenon', 'Świątynia Ateny na Akropolu w Atenach'],
        ['Porządki greckie', 'dorycki – bez bazy, prosty; joński – ślimacznice; koryncki – liście akantu'],
        ['Kariatyda', 'Kolumna w kształcie kobiety'],
        ['Koloseum', 'Amfiteatr w Rzymie – walki gladiatorów'],
        ['Akwedukt', 'Wodociąg na łukach doprowadzający wodę do miast'],
        ['Mozaika', 'Obraz z drobnych kawałków kolorowych kamieni albo szkła'],
      ],
      questions: [
        { id: 'vya2g0', q: 'Z której epoki pochodzą malowidła zwierząt na ścianach jaskiń?', options: ['z prehistorii', 'ze średniowiecza', 'ze współczesności', 'z XIX wieku'], answer: 0, explain: 'Malowidła naskalne w jaskiniach to jedna z najstarszych form sztuki – z prehistorii.' },
        { id: '174cqs', q: 'Co najczęściej przedstawiają malowidła w jaskiniach Altamira i Lascaux?', options: ['zwierzęta', 'portrety królów', 'budynki i miasta', 'kwiaty w wazonach'], answer: 0, explain: 'Prehistoryczni malarze przedstawiali głównie zwierzęta: bizony, konie, jelenie, tury. Ludzi malowali rzadko.' },
        { id: 'yr9mt0', q: 'Czym malowali ludzie w jaskiniach?', options: ['ochrą i węglem drzewnym', 'farbami olejnymi z tubek', 'pastelami i kredkami świecowymi', 'akwarelą i tuszem'], answer: 0, explain: 'Barwniki brano z natury: ochrę (kolorową ziemię) i węgiel drzewny. Farb w tubkach jeszcze nie było.' },
        { id: '3utaog', q: 'Jak powstawały prehistoryczne odciski dłoni na skałach?', options: ['wokół przyłożonej dłoni wydmuchiwano barwnik', 'dłoń wycinano w skale kamiennym dłutem', 'dłoń odbijano z drewnianej matrycy', 'dłoń rysowano grafitowym ołówkiem'], answer: 0, explain: 'Ktoś przykładał dłoń do skały i wydmuchiwał wokół niej barwnik – zostawał obrys dłoni.' },
        { id: '8awcq3', q: 'Jak nazywa się pionowo ustawiony wielki głaz z czasów prehistorycznych?', options: ['menhir', 'dolmen', 'sarkofag', 'akwedukt'], answer: 0, explain: 'Menhir to pionowy głaz. Dolmen to grobowiec z głazów przykrytych płaską płytą.' },
        { id: 'ls4qev', q: 'Prawda czy fałsz?\nWiemy na pewno, po co ludzie malowali zwierzęta w jaskiniach.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Nie wiemy tego na pewno. Badacze przypuszczają, że malowidła miały związek z obrzędami i magią, np. z prośbą o udane polowanie.' },
        { id: 'aavcqp', q: 'Czym były piramidy w Gizie?', options: ['grobowcami faraonów', 'pałacami królowych', 'świątyniami greckich bogów', 'twierdzami obronnymi'], answer: 0, explain: 'Piramidy to grobowce faraonów – królów starożytnego Egiptu.' },
        { id: 'yx7dil', q: 'Jak wygląda Wielki Sfinks?', options: ['lew z głową człowieka', 'człowiek z głową sokoła', 'byk ze skrzydłami orła', 'kot z koroną faraona'], answer: 0, explain: 'Sfinks to lew (siła) z głową człowieka (władza faraona). Strzegł grobowców.' },
        { id: 'vmjbzv', q: 'Jak Egipcjanie malowali ludzką postać?', options: ['głowa i nogi z profilu, tors od przodu', 'cała postać od przodu, bez cieni', 'cała postać z profilu, z cieniem', 'głowa od przodu, nogi i tors z tyłu'], answer: 0, explain: 'Według egipskiego kanonu głowę i nogi malowano z profilu, a tors, ramiona i oko – od przodu.' },
        { id: 'xj1i05', q: 'Na egipskim malowidle faraon jest dużo większy od sług. Dlaczego?', options: ['bo był najważniejszy', 'bo stał bliżej malarza', 'bo był najwyższym człowiekiem', 'bo malarz pomylił proporcje'], answer: 0, explain: 'W sztuce egipskiej wielkość postaci zależała od jej ważności – nie od odległości ani wzrostu.' },
        { id: '05qdp3', q: 'Jak nazywają się znaki egipskiego pisma obrazkowego?', options: ['hieroglify', 'kariatydy', 'mozaiki', 'menhiry'], answer: 0, explain: 'Hieroglify to znaki pisma obrazkowego. Pisano je m.in. na papirusie.' },
        { id: 'oylrty', q: 'Prawda czy fałsz?\nEgipcjanie wierzyli, że to, co namalowano w grobowcu, będzie istnieć w zaświatach.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Dlatego w grobowcach malowano życie, jakie zmarły chciał wieść po śmierci.' },
        { id: 'tcqjxs', q: 'Gdzie stoi Partenon – świątynia bogini Ateny?', options: ['na Akropolu w Atenach', 'w Gizie nad Nilem', 'w Rzymie obok Koloseum', 'w Krakowie na Wawelu'], answer: 0, explain: 'Partenon stoi na wzgórzu Akropol w Atenach, w Grecji.' },
        {
          id: 'orbbh8', q: 'Głowica tej kolumny ma liście akantu. Jaki to porządek?',
          svg: `<svg viewBox="0 0 300 200" role="img" aria-label="Kolumna na podstawie. Głowica ozdobiona rzędami liści, które zawijają się na końcach.">
            <rect x="110" y="170" width="80" height="16" class="f4 s4"/>
            <rect x="124" y="70" width="52" height="100" class="f4 s4"/>
            <line x1="137" y1="72" x2="137" y2="168" class="ln-thin"/>
            <line x1="150" y1="72" x2="150" y2="168" class="ln-thin"/>
            <line x1="163" y1="72" x2="163" y2="168" class="ln-thin"/>
            <path d="M120,70 C116,55 128,52 130,62 C132,46 142,44 144,56 C146,42 156,42 158,56 C160,44 170,46 172,62 C174,52 186,55 180,70 Z" class="f3 s3"/>
            <path d="M118,50 C110,38 126,30 132,42 C138,26 150,26 152,40 C156,26 168,28 170,42 C176,30 192,38 182,50 Z" class="f3 s3"/>
            <rect x="104" y="18" width="92" height="14" class="f4 s4"/>
            <path d="M112,32 C104,30 104,22 112,22 M188,32 C196,30 196,22 188,22" class="ln"/>
          </svg>`,
          options: ['koryncki', 'dorycki', 'joński', 'egipski'], answer: 0, explain: 'Najbardziej ozdobny jest porządek koryncki – jego głowica ma liście akantu. Joński ma ślimacznice, a dorycki – prostą głowicę bez ozdób.',
        },
        { id: 'vaeo87', q: 'Który porządek grecki jest najprostszy – kolumna nie ma bazy, a głowica jest bez ozdób?', options: ['dorycki', 'joński', 'koryncki', 'rzymski'], answer: 0, explain: 'Porządek dorycki jest najstarszy i najprostszy. Joński ma ślimacznice, koryncki – liście akantu.' },
        { id: 'hofx4k', q: 'Jak nazywa się kolumna w kształcie kobiety?', options: ['kariatyda', 'mozaika', 'mumia', 'sfinks'], answer: 0, explain: 'Kariatydy to kolumny w kształcie kobiet – np. w świątyni na Akropolu w Atenach.' },
        { id: '3la7i9', q: 'Co przedstawia grecka rzeźba „Dyskobol”?', options: ['sportowca rzucającego dyskiem', 'boginię Atenę w hełmie', 'faraona na tronie', 'cesarza na koniu'], answer: 0, explain: '„Dyskobol” Myrona to sportowiec rzucający dyskiem. Znamy go z rzymskich kopii, bo oryginał z brązu zaginął.' },
        { id: '6roi96', q: 'Do czego służył rzymski akwedukt?', options: ['do doprowadzania wody do miast', 'do walk gladiatorów', 'do upamiętniania zwycięstw', 'do chowania cesarzy'], answer: 0, explain: 'Akwedukt to wodociąg na łukach. Walki gladiatorów odbywały się w amfiteatrze, np. w Koloseum.' },
        { id: 'gxcpuv', q: 'Jak nazywa się obraz ułożony z drobnych kawałków kolorowych kamieni albo szkła?', options: ['mozaika', 'fresk', 'akwarela', 'linoryt'], answer: 0, explain: 'Mozaikami Rzymianie zdobili podłogi i ściany.' },
        { id: 'e2vkl7', q: 'Która budowla stoi w Rzymie?', options: ['Koloseum', 'Partenon', 'piramida Cheopsa', 'Stonehenge'], answer: 0, explain: 'Koloseum to amfiteatr w Rzymie. Partenon jest w Atenach, piramida Cheopsa w Gizie (Egipt), a Stonehenge – w Anglii.' },
      ],
    },
    {
      id: 'zabytki',
      name: 'Sztuka wokół nas i zabytki regionów Polski',
      chapter: 'rozdział III „Sztuka wokół nas”, lekcje 2–3 (sztuka w naszym otoczeniu, zabytki regionów Polski)',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 3 wym. 1 (dzieła architektury należące do dziedzictwa kulturowego Polski), dz. 4 wym. 4 (estetyka otoczenia: architektura w przestrzeni publicznej), wym. 9 (sztuka w otaczającej przestrzeni), dz. 1 wym. 10 (kultura różnych regionów Polski). Wybór na klasę 4 według podręcznika „Do dzieła! 4”; zabytki do działu wybrano redakcyjnie (spisu zabytków z podręcznika nie znamy). Definicja zabytku i formy ochrony – ustawa o ochronie zabytków i opiece nad zabytkami (t.j. Dz.U. 2024 poz. 1292 ze zm.), art. 3 pkt 1, art. 7, 8, 15 (eli.gov.pl, sprawdzone 6.11.2026). Lista UNESCO – gov.pl (Ministerstwo Kultury, „Światowe dziedzictwo UNESCO”): 18 polskich obiektów, najnowszy – Modernistyczne Centrum Gdyni (2026); ZPE (DiVczVNxc) podaje starszą liczbę. Opisy zabytków – lekcja ZPE o polskich obiektach UNESCO (DiVczVNxc, D3Y60X9t3) i gov.pl; Biskupin – zarządzenie Prezydenta RP o uznaniu za pomnik historii (M.P. 1994 nr 50 poz. 412); Wawel, Sukiennice i styl zakopiański (S. Witkiewicz, willa „Koliba”) – zgodne źródła przez wyszukiwarkę (m.in. dzieje.pl). Pominięte: wielkość Malborka („największa twierdza” – źródła różne), liczba koronacji na Wawelu, szczegóły budowy chaty góralskiej.',
      theory: `
        <h3>Co to jest zabytek?</h3>
        <p><b>Zabytek</b> to budynek albo przedmiot zrobiony przez człowieka, który jest <b>świadectwem minionych czasów</b> i warto go zachować, bo ma wartość historyczną, artystyczną albo naukową. Zabytkiem może być zamek, kościół, kamienica, ale też obraz czy stara maszyna.</p>
        <h3>Jak chronimy zabytki?</h3>
        <ul>
          <li><b>rejestr zabytków</b> – lista zabytków w województwie; prowadzi go <b>wojewódzki konserwator zabytków</b>,</li>
          <li><b>pomnik historii</b> – szczególnie cenny zabytek; tytuł nadaje <b>Prezydent RP</b>,</li>
          <li><b>Lista światowego dziedzictwa UNESCO</b> – najcenniejsze miejsca świata; w Polsce jest ich <b>18</b>.</li>
        </ul>
        <p>Ty też chronisz zabytki: nie piszesz po murach, nie niszczysz, nie wspinasz się na pomniki, zostawiasz porządek.</p>
        <h3>Zabytki regionów Polski</h3>
        <table>
          <tr><th>Gdzie</th><th>Zabytek</th></tr>
          <tr><td><b>Kraków</b> (Małopolska)</td><td><b>Wawel</b> – zamek królewski i katedra, w której koronowano i chowano królów; <b>Sukiennice</b> – dawna hala targowa na Rynku</td></tr>
          <tr><td><b>Wieliczka</b></td><td><b>kopalnia soli</b> – sól wydobywano tu od średniowiecza (XIII w.)</td></tr>
          <tr><td><b>Malbork</b> (Pomorze)</td><td>ogromny <b>zamek krzyżacki</b> z czerwonej cegły – od 1309 r. siedziba wielkiego mistrza zakonu</td></tr>
          <tr><td><b>Toruń</b></td><td><b>gotyckie miasto z cegły</b>, założone przez Krzyżaków</td></tr>
          <tr><td><b>Zamość</b> (Lubelszczyzna)</td><td>renesansowe „<b>miasto idealne</b>” – założył je w XVI w. Jan Zamoyski, zaprojektował Włoch Bernardo Morando</td></tr>
          <tr><td><b>Warszawa</b></td><td><b>Stare Miasto</b> – zburzone w czasie II wojny światowej i odbudowane; wpisane na listę UNESCO jako wyjątkowy przykład odbudowy</td></tr>
          <tr><td><b>Jawor i Świdnica</b> (Śląsk)</td><td><b>Kościoły Pokoju</b> – ogromne kościoły o drewnianej konstrukcji szkieletowej z XVII w.</td></tr>
          <tr><td><b>Południe Polski</b></td><td><b>drewniane kościoły</b> (np. w Dębnie) i <b>drewniane cerkwie</b> w Karpatach (np. w Kwiatoniu)</td></tr>
          <tr><td><b>Biskupin</b></td><td>prehistoryczna <b>osada obronna</b> na półwyspie jeziora, dziś częściowo odtworzona; pomnik historii (nie jest na liście UNESCO)</td></tr>
          <tr><td><b>Zakopane</b> (Podhale)</td><td><b>styl zakopiański</b> – wymyślił go <b>Stanisław Witkiewicz</b>, wzorując się na drewnianych domach górali; pierwsza była willa „Koliba”</td></tr>
          <tr><td><b>Gdynia</b></td><td><b>Modernistyczne Centrum Gdyni</b> – nowoczesne budynki z XX w.; najnowszy polski wpis na liście UNESCO (2026)</td></tr>
        </table>
        <h3>Sztuka w naszym otoczeniu</h3>
        <p>Sztukę mijasz codziennie w drodze do szkoły: ciekawe budynki (<b>architektura</b>), ławki, fontanny i latarnie (<b>mała architektura</b>), parki (<b>architektura krajobrazu</b>), pomniki, <b>murale</b>, szyldy i plakaty. Warto się im przyglądać i oceniać: co jest ładne, co wygodne, co można poprawić.</p>
        <div class="tip">💡 Zamek w Malborku i Stare Miasto w Toruniu są z <b>cegły</b>, Kościoły Pokoju i kościółek w Dębnie mają konstrukcję z <b>drewna</b>.</div>
      `,
      infographicNote: 'Karty to zabytki z różnych regionów Polski; na dole – jak chronimy zabytki.',
      infographic: {
        type: 'karty', kolumny: 2,
        items: [
          { icon: '🏰', title: 'Kraków', text: 'Wawel – zamek i katedra królów; Sukiennice', kolor: 1 },
          { icon: '🧱', title: 'Malbork', text: 'zamek krzyżacki z czerwonej cegły', kolor: 2 },
          { icon: '🏘️', title: 'Zamość', text: 'renesansowe „miasto idealne”', kolor: 4 },
          { icon: '🏙️', title: 'Warszawa', text: 'Stare Miasto odbudowane po wojnie', kolor: 3 },
          { icon: '⛪', title: 'Jawor, Świdnica, Dębno', text: 'drewniane kościoły', kolor: 5 },
          { icon: '🏡', title: 'Zakopane', text: 'styl zakopiański – Stanisław Witkiewicz', kolor: 1 },
        ],
        bottom: { title: '🛡️ Ochrona zabytków', items: ['rejestr zabytków – wojewódzki konserwator', 'pomnik historii – Prezydent RP', 'lista UNESCO – 18 miejsc w Polsce'], kolor: 3 },
      },
      flashcards: [
        ['Zabytek', 'Budynek albo przedmiot zrobiony przez człowieka – świadectwo minionych czasów, warte zachowania'],
        ['Rejestr zabytków', 'Lista zabytków w województwie; prowadzi ją wojewódzki konserwator zabytków'],
        ['Pomnik historii', 'Szczególnie cenny zabytek; tytuł nadaje Prezydent RP'],
        ['Lista UNESCO w Polsce', '18 miejsc; najnowsze – Modernistyczne Centrum Gdyni (2026)'],
        ['Wawel', 'Zamek królewski i katedra w Krakowie – koronacje i groby królów'],
        ['Malbork', 'Zamek krzyżacki z czerwonej cegły; od 1309 r. siedziba wielkiego mistrza'],
        ['Zamość', 'Renesansowe „miasto idealne” Jana Zamoyskiego'],
        ['Stare Miasto w Warszawie', 'Zburzone w czasie wojny i odbudowane – na liście UNESCO'],
        ['Kościoły Pokoju', 'Jawor i Świdnica – ogromne kościoły o drewnianej konstrukcji szkieletowej'],
        ['Biskupin', 'Odtworzona prehistoryczna osada obronna; pomnik historii'],
        ['Styl zakopiański', 'Stanisław Witkiewicz – wzorował się na drewnianych domach górali'],
      ],
      questions: [
        { id: '1nc3vp', q: 'Co to jest zabytek?', options: ['dzieło człowieka, które jest świadectwem minionych czasów', 'każdy nowy, duży budynek w centrum dużego miasta', 'każdy stary przedmiot znaleziony przypadkiem w lesie', 'rzadkie drzewo albo skała chroniona przez prawo'], answer: 0, explain: 'Zabytek to dzieło człowieka (budynek, przedmiot), które świadczy o minionych czasach i warto je zachować. Drzewa i skały chroni się jako pomniki przyrody.' },
        { id: 'x59r8g', q: 'Kto prowadzi rejestr zabytków w województwie?', options: ['wojewódzki konserwator zabytków', 'dyrektor najbliższej szkoły', 'proboszcz każdej parafii', 'komendant straży pożarnej'], answer: 0, explain: 'Rejestr zabytków w województwie prowadzi wojewódzki konserwator zabytków.' },
        { id: 'uvod6u', q: 'Kto nadaje zabytkowi tytuł pomnika historii?', options: ['Prezydent RP', 'burmistrz miasta', 'dyrektor muzeum', 'wojewódzki konserwator zabytków'], answer: 0, explain: 'Pomnik historii ustanawia Prezydent RP.' },
        { id: 'p58gdo', q: 'Ile polskich miejsc jest na Liście światowego dziedzictwa UNESCO (stan na listopad 2026 r.)?', options: ['18', '8', '28', '3'], answer: 0, explain: 'W Polsce jest 18 miejsc z listy UNESCO. Najnowsze – Modernistyczne Centrum Gdyni – wpisano w 2026 r.' },
        { id: 'mxwto5', q: 'Gdzie stoi Wawel – zamek królewski i katedra, w której koronowano królów?', options: ['w Krakowie', 'w Malborku', 'w Toruniu', 'w Zamościu'], answer: 0, explain: 'Wawel jest w Krakowie. W katedrze wawelskiej koronowano i chowano polskich królów.' },
        { id: 'm2a490', q: 'Który zamek z czerwonej cegły był siedzibą wielkiego mistrza zakonu krzyżackiego?', options: ['zamek w Malborku', 'zamek na Wawelu', 'Zamek Królewski w Warszawie', 'zamek w Zakopanem'], answer: 0, explain: 'Od 1309 r. Malbork był siedzibą wielkiego mistrza zakonu krzyżackiego.' },
        { id: 'zqsl9x', q: 'Które miasto nazywamy renesansowym „miastem idealnym”?', options: ['Zamość', 'Wieliczkę', 'Gdynię', 'Biskupin'], answer: 0, explain: 'Zamość założył w XVI w. Jan Zamoyski, a zaprojektował go Bernardo Morando.' },
        { id: 'gzqs93', q: 'Dlaczego Stare Miasto w Warszawie wpisano na listę UNESCO?', options: ['bo zostało odbudowane po zniszczeniach wojny', 'bo jest najstarszym miastem na świecie', 'bo zbudowano je w całości z drewna', 'bo nigdy nie było zniszczone'], answer: 0, explain: 'W czasie II wojny światowej Stare Miasto zburzono. Po wojnie je odbudowano – to wyjątkowy przykład odbudowy.' },
        { id: 'ycaeuq', q: 'Co wydobywano w zabytkowej kopalni w Wieliczce?', options: ['sól', 'węgiel', 'złoto', 'żelazo'], answer: 0, explain: 'Wieliczka to kopalnia soli – wydobywano ją tam od średniowiecza.' },
        { id: 'huglgh', q: 'Jaką konstrukcję mają Kościoły Pokoju w Jaworze i Świdnicy?', options: ['drewnianą, szkieletową', 'murowaną z cegły', 'kamienną, z marmuru', 'stalową, ze szkłem'], answer: 0, explain: 'Kościoły Pokoju to ogromne świątynie z XVII w. o drewnianej konstrukcji szkieletowej.' },
        { id: '6hdewe', q: 'Kto stworzył styl zakopiański?', options: ['Stanisław Witkiewicz', 'Jan Matejko', 'Jan Zamoyski', 'Stanisław Wyspiański'], answer: 0, explain: 'Stanisław Witkiewicz wzorował się na drewnianych domach górali z Podhala. Pierwszym budynkiem w tym stylu była willa „Koliba”.' },
        { id: 'jej49x', q: 'Prawda czy fałsz?\nBiskupin jest na Liście światowego dziedzictwa UNESCO.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Biskupin jest pomnikiem historii, ale nie ma go na liście UNESCO.' },
        { id: '64m597', q: 'Które zachowanie chroni zabytki?', options: ['oglądam, ale nie piszę po murach i nie niszczę', 'zabieram sobie kawałek starej cegły na pamiątkę', 'wspinam się na pomnik, żeby mieć ładne zdjęcie', 'podpisuję się markerem na zabytkowej ścianie'], answer: 0, explain: 'Zabytki są cenne i nie da się ich zastąpić. Nie niszczymy ich i nie zabieramy z nich niczego.' },
        { id: '8s5inh', q: 'Co jest najnowszym polskim wpisem na liście UNESCO (2026)?', options: ['Modernistyczne Centrum Gdyni', 'Zamek w Malborku', 'Stare Miasto w Zamościu', 'Kopalnia soli w Wieliczce'], answer: 0, explain: 'Modernistyczne Centrum Gdyni wpisano w 2026 r. Pozostałe zabytki są na liście od dawna.' },
        { id: '9aqjg4', q: 'Ławki, fontanny i latarnie w parku to przykłady…', options: ['małej architektury', 'malarstwa ściennego', 'grafiki użytkowej', 'rzeźby pełnej'], answer: 0, explain: 'Mała architektura to niewielkie obiekty w przestrzeni: ławki, fontanny, latarnie, altany.' },
      ],
    },
    {
      id: 'dzielo-sztuki',
      name: 'Dzieło sztuki: gatunki, słynne obrazy, muzeum',
      chapter: '„Dzieło sztuki pod lupą” (na końcu podręcznika) i rozdział III „Sztuka wokół nas”',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 3 „Sztuka jako komunikat”, wym. 1 (dzieła z dziedzictwa kulturowego Polski, Europy i świata), wym. 2 (dzieła z różnych okresów: prehistoria, starożytność, średniowiecze, nowożytność, współczesność), wym. 5 (opis dzieła językiem plastycznym), wym. 7 (wrażenia estetyczne); dz. 4 wym. 5 i 9 (wydarzenia kulturalne, sztuka w codziennym życiu). Gatunki malarskie (portret, pejzaż, martwa natura) – pojęcia pomocnicze do opisu dzieła (wym. 5). Dzieła: „Dama z gronostajem” (Muzeum Książąt Czartoryskich, oddział Muzeum Narodowego w Krakowie), „Bitwa pod Grunwaldem” (Muzeum Narodowe w Warszawie), „Mona Lisa” (Luwr). Wybór na klasę 4 – decyzja redakcyjna. Oryginał, kopia, reprodukcja, falsyfikat i prawo autorskie – w dziale „na zapas” (w podręczniku w kolejnych klasach).',
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
        <h3>W muzeum i galerii</h3>
        <ul>
          <li>Nie dotykaj dzieł, chyba że wolno (np. specjalne wystawy dla dzieci). Mów cicho.</li>
          <li>Zdjęcia rób tylko tam, gdzie jest to dozwolone (zwykle bez lampy błyskowej).</li>
          <li><b>Wernisaż</b> to uroczyste otwarcie wystawy.</li>
        </ul>
        <div class="tip">💡 Opisując obraz, odpowiedz na pytania: Co przedstawia (gatunek)? Jakie są barwy (gama ciepła czy zimna)? Jaka jest kompozycja? Jaki nastrój? Co czujesz, patrząc na niego?</div>
      `,
      infographicNote: 'Każda gałąź to gatunek malarski – po tym, co przedstawia obraz, rozpoznasz gatunek.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        root: { icon: '🖼️', title: 'Co przedstawia obraz?', kolor: 5 },
        branches: [
          { title: '🙂 Portret', text: 'konkretna osoba; autoportret – artysta sam siebie', kolor: 1 },
          { title: '🏞️ Pejzaż', text: 'krajobraz: góry, las, morze, miasto', kolor: 3 },
          { title: '🍎 Martwa natura', text: 'ułożone przedmioty: owoce, kwiaty, naczynia', kolor: 4 },
          { title: '🧺 Scena rodzajowa', text: 'codzienne życie ludzi: praca, zabawa, targ', kolor: 2 },
          { title: '⚔️ Obraz historyczny', text: 'ważne wydarzenie z przeszłości, np. bitwa', kolor: 5 },
        ],
        bottom: { title: '💡 Opisując obraz, zapytaj', text: 'Co przedstawia? Jakie barwy? Jaka kompozycja? Jaki nastrój?', kolor: 3 },
      },
      flashcards: [
        ['Portret / autoportret', 'Obraz konkretnej osoby / artysta przedstawia siebie'],
        ['Pejzaż', 'Obraz przedstawiający krajobraz'],
        ['Martwa natura', 'Obraz ułożonych przedmiotów: owoców, kwiatów, naczyń'],
        ['Scena rodzajowa', 'Obraz codziennego życia ludzi'],
        ['„Dama z gronostajem”', 'Leonardo da Vinci; można ją oglądać w Krakowie'],
        ['„Bitwa pod Grunwaldem”', 'Jan Matejko; Muzeum Narodowe w Warszawie'],
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
        { id: 'gpu7wg', q: 'Jak nazywa się uroczyste otwarcie wystawy?', options: ['wernisaż', 'premiera filmu', 'kolaż', 'falsyfikat'], answer: 0, explain: 'Wernisaż to otwarcie wystawy, często z udziałem artysty.' },
        { id: 'zmd1x0', q: 'Które zachowanie w muzeum jest właściwe?', options: ['oglądam z bliska, ale nie dotykam obrazów', 'dotykam farby, żeby sprawdzić fakturę', 'robię zdjęcia z lampą błyskową, gdzie chcę', 'biegam między salami'], answer: 0, explain: 'Dzieła są cenne i delikatne. Nie dotykamy ich i zachowujemy się spokojnie.' },
      ],
    },
    {
      id: 'walor-faktura-kompozycja',
      name: 'Walor, faktura, światłocień i kompozycja',
      extra: true,
      chapter: 'w podręczniku „Do dzieła!” – w kolejnych klasach (walor, kontrast, faktura i kompozycja według zapowiedzi układu treści kl. 5–7)',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 1 wym. 2 (środki wyrazu: walor, faktura, kompozycja, kształt); dz. 3 wym. 5 (pojęcia języka plastycznego: światłocień, kompozycja, perspektywa, walor, bryła, faktura). Dział „na zapas” – tych pojęć nie ma w podręczniku „Do dzieła! 4”; treści i pytania przeniesione 6.11.2026 z działu o barwach (pytania z tymi samymi id).',
      theory: `
        <h3>Walor, faktura, światłocień, perspektywa</h3>
        <table>
          <tr><th>Pojęcie</th><th>Co to jest</th></tr>
          <tr><td><b>walor</b></td><td>stopień <b>jasności</b> barwy: od jasnoniebieskiej do granatowej to ta sama barwa w różnych walorach</td></tr>
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
      `,
      infographicNote: 'Czytaj wierszami: dwa przeciwne rodzaje kompozycji obok siebie.',
      infographic: {
        type: 'porownanie',
        top: { title: '🔆 Środki wyrazu', items: ['walor – jasność barwy', 'faktura – wygląd powierzchni', 'światłocień – bryła; perspektywa – głębia'], kolor: 4 },
        kolumny: [{ title: 'Kompozycja…', kolor: 1 }, { title: '…albo', kolor: 2 }],
        wiersze: [
          { label: 'strony obrazu', cells: ['symetryczna – jak w lustrze', 'asymetryczna – strony różne'] },
          { label: 'brzegi obrazu', cells: ['zamknięta – wszystko w obrazie', 'otwarta – elementy ucięte'] },
          { label: 'ruch', cells: ['statyczna – linie poziome, pionowe', 'dynamiczna – linie ukośne'] },
        ],
        bottom: { title: '🔁 Kompozycja rytmiczna', text: 'te same elementy w równych odstępach', kolor: 3 },
      },
      flashcards: [
        ['Walor', 'Stopień jasności barwy'],
        ['Faktura', 'Wygląd powierzchni: gładka, chropowata…'],
        ['Światłocień', 'Jasne i ciemne miejsca pokazujące światło i bryłę'],
        ['Perspektywa', 'Pokazanie głębi: dalsze rzeczy mniejsze i bledsze'],
        ['Kompozycja', 'Układ elementów w obrazie'],
        ['Kompozycja otwarta', 'Elementy ucięte brzegami obrazu – jakby obraz ciągnął się dalej'],
        ['Kompozycja dynamiczna', 'Pełna ruchu, z liniami ukośnymi'],
      ],
      questions: [
        { id: 'z7nf0r', q: 'Co to jest walor?', options: ['stopień jasności barwy', 'rodzaj pędzla', 'linia obrysowująca kształt', 'wygląd powierzchni'], answer: 0, explain: 'Walor to jasność barwy, np. jasnoniebieski i granatowy to ta sama barwa w różnych walorach.' },
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
      ],
    },
    {
      id: 'oryginal-i-kopia',
      name: 'Oryginał, kopia, reprodukcja i prawo autorskie',
      extra: true,
      chapter: 'w podręczniku „Do dzieła!” – w kolejnych klasach (oryginał, kopia, reprodukcja, falsyfikat i prawo autorskie według zapowiedzi układu treści kl. 5–7)',
      basis: 'Dz.U. 2026 poz. 378, plastyka (II etap, przedmiot w kl. IV–VII): dz. 3 „Sztuka jako komunikat”, wym. 10 (najważniejsze zasady prawa autorskiego w odniesieniu do wytworów sztuki, także w świecie cyfrowym), wym. 11 (inspiracja, oryginał, kopia, reprodukcja, falsyfikat). Dział „na zapas” – tych pojęć nie ma w podręczniku „Do dzieła! 4”; treści i pytania przeniesione 6.11.2026 z działu „Dzieło sztuki” (pytania z tymi samymi id).',
      theory: `
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
      `,
      infographicNote: 'U góry dzieło artysty, niżej – co może z niego powstać: zielone uczciwie, pomarańczowe nieuczciwie.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '🖼️', title: 'Oryginał', text: 'dzieło wykonane przez samego artystę', kolor: 5 },
        branches: [
          { title: '✅ Kopia', text: 'wierne powtórzenie przez kogoś innego – podpisane jako kopia', kolor: 3 },
          { title: '✅ Reprodukcja', text: 'odbitka dzieła: zdjęcie w książce, plakat, pocztówka', kolor: 3 },
          { title: '✅ Inspiracja', text: 'pomysł z czegoś – powstaje nowe, własne dzieło', kolor: 3 },
          { title: '❌ Falsyfikat', text: 'podróbka udająca oryginał, żeby oszukać', kolor: 2 },
          { title: '❌ Plagiat', text: 'cudza praca podpisana jako własna', kolor: 2 },
        ],
        bottom: { title: '📝 Prawo autorskie', text: 'Używasz cudzego zdjęcia lub obrazka? Podaj autora i źródło i sprawdź, czy wolno go użyć.', kolor: 4 },
      },
      flashcards: [
        ['Oryginał', 'Dzieło wykonane przez samego artystę'],
        ['Kopia', 'Wierne powtórzenie dzieła przez inną osobę, uczciwie podpisane'],
        ['Reprodukcja', 'Odbitka dzieła, np. zdjęcie obrazu w książce'],
        ['Falsyfikat', 'Podróbka udająca oryginał – po to, by oszukać'],
        ['Inspiracja', 'Pomysł zaczerpnięty z czegoś, z którego powstaje nowe, własne dzieło'],
        ['Plagiat', 'Podpisanie cudzej pracy jako własnej'],
      ],
      questions: [
        { id: '0rsqeg', q: 'Zdjęcie słynnego obrazu wydrukowane w podręczniku to…', options: ['reprodukcja', 'oryginał', 'falsyfikat', 'płaskorzeźba'], answer: 0, explain: 'Reprodukcja to odbitka dzieła – zdjęcie w książce, plakat, pocztówka.' },
        { id: 'c0dfz7', q: 'Ktoś namalował obraz w stylu słynnego artysty i podpisał go jego nazwiskiem, żeby drogo sprzedać. Co powstało?', options: ['falsyfikat', 'kopia', 'reprodukcja', 'oryginał'], answer: 0, explain: 'Falsyfikat to podróbka udająca oryginał – zrobiona po to, by oszukać.' },
        { id: 'giw658', q: 'Uczeń w muzeum starannie odmalował słynny obraz i podpisał: „kopia, wykonał Jan Kowalski”. Co namalował?', options: ['kopię', 'falsyfikat', 'oryginał', 'reprodukcję'], answer: 0, explain: 'Kopia to uczciwie podpisane powtórzenie dzieła. Nie udaje oryginału, więc nie jest falsyfikatem.' },
        { id: 'ux25sl', q: 'Zachwycona wzorami na skrzydłach motyli Ola zaprojektowała własny wzór na koszulkę. Motyle były dla niej…', options: ['inspiracją', 'falsyfikatem', 'reprodukcją', 'kopią'], answer: 0, explain: 'Inspiracja to źródło pomysłu, z którego powstaje nowe, własne dzieło.' },
        { id: 'k2k7ad', q: 'Używasz w prezentacji zdjęcia znalezionego w internecie. Co robisz zgodnie z prawem autorskim?', options: ['sprawdzam, czy wolno go użyć, i podaję autora i źródło', 'podpisuję je swoim imieniem', 'nic – wszystko z internetu jest za darmo', 'wycinam podpis autora'], answer: 0, explain: 'Autor ma prawo do swojego zdjęcia. Trzeba sprawdzić, czy wolno go użyć, i podać autora oraz źródło.' },
        { id: 'e5kxqf', q: 'Jak nazywa się podpisanie cudzej pracy jako własnej?', options: ['plagiat', 'inspiracja', 'wernisaż', 'kopia'], answer: 0, explain: 'Plagiat to przywłaszczenie cudzej pracy. To nieuczciwe i niezgodne z prawem.' },
      ],
    },
  ],
});
