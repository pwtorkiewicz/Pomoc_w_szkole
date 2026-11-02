/* Zajęcia praktyczno-techniczne – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, zajęcia praktyczno-techniczne kl. IV–VI).
 * Przepisy ruchu drogowego sprawdzone 1.11.2026 w tekstach aktów (eli.gov.pl) – patrz pole basis każdego działu. */
window.SUBJECTS.push({
  id: 'technika',
  name: 'Zajęcia praktyczno-techniczne',
  icon: '🚲',
  color: '#d08a1f',
  topics: [
    {
      id: 'pieszy',
      name: 'Bezpieczny pieszy',
      basis: 'Dz.U. 2026 poz. 378, zajęcia praktyczno-techniczne kl. IV–VI: dz. 8 „Bezpieczne i odpowiedzialne uczestnictwo w ruchu drogowym”, wym. 1 (zasady ruchu drogowego podczas poruszania się pieszo), wym. 2 (etyka i szacunek dla innych), wym. 4 (ocena sytuacji na drodze, pierwszeństwo), wym. 10 (zagrożenia, w tym korzystanie z urządzeń elektronicznych). Przepisy: Prawo o ruchu drogowym, tekst jednolity Dz.U. 2024 poz. 1251 ze zm., art. 2 pkt 15, 17, 18; art. 11, 13, 14, 43 (sprawdzone 1.11.2026). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Kto jest kim na drodze</h3>
        <ul>
          <li><b>Uczestnik ruchu</b> – każdy, kto jest na drodze: pieszy, kierujący (np. rowerzysta, kierowca) i pasażer.</li>
          <li><b>Pieszy</b> – osoba, która idzie po drodze, a nie jedzie pojazdem.</li>
        </ul>
        <h3>Części drogi</h3>
        <table>
          <tr><th>Część drogi</th><th>Dla kogo</th></tr>
          <tr><td><b>jezdnia</b></td><td>dla pojazdów (samochodów, autobusów)</td></tr>
          <tr><td><b>chodnik</b></td><td>dla pieszych</td></tr>
          <tr><td><b>pobocze</b></td><td>pas obok jezdni; mogą z niego korzystać piesi</td></tr>
          <tr><td><b>droga dla rowerów</b></td><td>dla rowerów, hulajnóg elektrycznych i podobnych pojazdów</td></tr>
        </table>
        <h3>Którędy idzie pieszy</h3>
        <ol>
          <li>Chodnikiem (drogą dla pieszych).</li>
          <li>Gdy nie ma chodnika – <b>poboczem</b>.</li>
          <li>Gdy nie ma też pobocza – jezdnią, jak najbliżej jej krawędzi, ustępując miejsca nadjeżdżającym pojazdom.</li>
        </ol>
        <p>Poboczem i jezdnią idziesz <b>lewą stroną drogi</b>. Dzięki temu widzisz pojazdy, które jadą z naprzeciwka. Jezdnią piesi idą <b>jeden za drugim</b>. Tylko na drodze o małym ruchu, gdy jest dobra widoczność, dwie osoby mogą iść obok siebie.</p>
        <div class="tip">💡 <b>Odblaski.</b> Po zmierzchu <b>poza obszarem zabudowanym</b> pieszy musi nosić <b>elementy odblaskowe</b> tak, żeby inni je widzieli. Nie musi, gdy idzie chodnikiem (drogą dla pieszych). Obszar zabudowany to teren oznaczony specjalnymi znakami drogowymi – zwykle miasto lub wieś.</div>
        <h3>Jak przechodzić przez jezdnię</h3>
        <ul>
          <li>Przechodź przez <b>przejście dla pieszych</b> i zachowaj szczególną ostrożność.</li>
          <li>Pieszy <b>na przejściu</b> ma <b>pierwszeństwo</b> przed pojazdem. Pierwszeństwo – to znaczy, że pojazd musi cię przepuścić. Pieszy, który <b>wchodzi</b> na przejście, też ma pierwszeństwo, ale <b>nie przed tramwajem</b>.</li>
          <li>Mimo to <b>nie wolno wchodzić bezpośrednio przed jadący pojazd</b> – także na przejściu. Kierowca może nie zdążyć zahamować. Zanim wejdziesz, zatrzymaj się, rozejrzyj i upewnij się, że pojazdy cię przepuszczą.</li>
          <li>Jeśli nad jezdnią jest kładka albo pod nią tunel dla pieszych – musisz z nich skorzystać.</li>
        </ul>
        <h3>Czego pieszemu nie wolno</h3>
        <ul>
          <li><b>przebiegać</b> przez jezdnię,</li>
          <li>wchodzić na jezdnię <b>zza pojazdu</b> lub innej przeszkody, która zasłania widok (np. zza autobusu),</li>
          <li>przechodzić w miejscu, gdzie <b>słabo widać</b> drogę (np. na zakręcie),</li>
          <li>zwalniać lub zatrzymywać się bez potrzeby na jezdni,</li>
          <li>chodzić po torowisku i wchodzić na nie, gdy zapory są opuszczone,</li>
          <li><b>korzystać z telefonu</b> podczas przechodzenia przez jezdnię tak, że nie widzisz, co się dzieje na drodze.</li>
        </ul>
        <h3>Małe dzieci</h3>
        <p>Dziecko w wieku <b>do 7 lat</b> może korzystać z drogi tylko pod opieką osoby, która ma <b>co najmniej 10 lat</b>. Ten przepis nie dotyczy chodnika i strefy zamieszkania.</p>
        <div class="tip">💡 Bądź uprzejmy: przepuszczaj starsze osoby, pomagaj młodszym, nie popychaj innych na przystanku. Bezpieczeństwo to także szacunek dla innych.</div>
      `,
      flashcards: [
        ['Uczestnik ruchu', 'Każdy, kto jest na drodze: pieszy, kierujący i pasażer'],
        ['Jezdnia', 'Część drogi dla pojazdów'],
        ['Pobocze', 'Pas obok jezdni – mogą z niego korzystać piesi'],
        ['Którędy idzie pieszy?', 'Chodnikiem; gdy go nie ma – poboczem; gdy nie ma pobocza – jezdnią przy krawędzi'],
        ['Którą stroną drogi idziesz poboczem lub jezdnią?', 'Lewą – widzisz pojazdy jadące z naprzeciwka'],
        ['Kiedy pieszy musi mieć odblaski?', 'Po zmierzchu poza obszarem zabudowanym (chyba że idzie chodnikiem)'],
        ['Kto ma pierwszeństwo na przejściu dla pieszych?', 'Pieszy, który jest na przejściu (wchodzący – też, ale nie przed tramwajem)'],
        ['Czy można wejść na przejście tuż przed jadący samochód?', 'Nie – to zabronione, nawet na przejściu'],
        ['Kładka lub tunel dla pieszych', 'Jeśli są, trzeba z nich korzystać'],
        ['Dziecko do 7 lat na drodze', 'Tylko pod opieką osoby, która ma co najmniej 10 lat'],
        ['Telefon na przejściu', 'Nie wolno z niego korzystać tak, że nie obserwujesz drogi'],
      ],
      questions: [
        { id: 't4yq9j', q: 'Przy ulicy jest chodnik. Którędy powinien iść pieszy?', options: ['chodnikiem', 'jezdnią', 'drogą dla rowerów', 'poboczem po drugiej stronie jezdni'], answer: 0, explain: 'Pieszy korzysta z chodnika (drogi dla pieszych). Pobocze i jezdnia są dla niego dopiero wtedy, gdy chodnika nie ma.' },
        { id: 'med0ws', q: 'Idziesz drogą za miastem. Nie ma chodnika, ale jest pobocze. Którą stroną drogi idziesz?', options: ['lewą', 'prawą', 'środkiem jezdni', 'obojętnie którą'], answer: 0, explain: 'Poboczem i jezdnią pieszy idzie lewą stroną drogi.' },
        { id: 'bnd01q', q: 'Dlaczego pieszy idzie poboczem lewą stroną drogi?', options: ['bo widzi pojazdy, które jadą z naprzeciwka', 'bo lewa strona jest zawsze krótsza', 'bo po prawej jeżdżą tylko rowery', 'bo tak jest wygodniej nieść plecak'], answer: 0, explain: 'Idąc lewą stroną, masz przed sobą pojazdy jadące najbliżej ciebie – widzisz je i możesz się odsunąć.' },
        { id: 'bgptog', q: 'Nie ma chodnika ani pobocza. Jak idzie po jezdni troje kolegów?', options: ['jeden za drugim, przy krawędzi jezdni', 'trzy osoby obok siebie', 'środkiem jezdni', 'zygzakiem, żeby było ich lepiej widać'], answer: 0, explain: 'Piesi idący jezdnią idą jeden za drugim, jak najbliżej krawędzi.' },
        { id: 'a8zuq5', q: 'Kiedy pieszy musi mieć elementy odblaskowe?', options: ['po zmierzchu poza obszarem zabudowanym, gdy nie idzie chodnikiem', 'w dzień w obszarze zabudowanym, gdy idzie chodnikiem', 'tylko wtedy, gdy pada deszcz albo śnieg', 'nigdy – odblaski to tylko ozdoba plecaka'], answer: 0, explain: 'Przepis: po zmierzchu poza obszarem zabudowanym pieszy na drodze musi używać odblasków (nie dotyczy chodnika i dróg dla pieszych lub rowerów). Odblaski warto nosić także w innych sytuacjach.' },
        { id: 'txh9rm', q: 'Pieszy idzie po przejściu dla pieszych. Nadjeżdża samochód. Kto ma pierwszeństwo?', options: ['pieszy', 'samochód', 'ten, kto jest szybszy', 'ten, kto jest starszy'], answer: 0, explain: 'Pieszy znajdujący się na przejściu dla pieszych ma pierwszeństwo przed pojazdem.' },
        { id: 'eg5chm', q: 'Prawda czy fałsz?\nSkoro pieszy ma pierwszeństwo na przejściu, może na nie wejść tuż przed jadący samochód.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Zabronione jest wchodzenie na jezdnię bezpośrednio przed jadący pojazd – także na przejściu dla pieszych. Kierowca może nie zdążyć zahamować.' },
        { id: '3gvucy', q: 'Przed kim pieszy wchodzący na przejście NIE ma pierwszeństwa?', options: ['przed tramwajem', 'przed samochodem osobowym', 'przed autobusem', 'przed rowerem'], answer: 0, explain: 'Pieszy wchodzący na przejście ma pierwszeństwo przed pojazdem – z wyłączeniem tramwaju.' },
        { id: '4dbiep', q: 'Czego pieszemu nie wolno?', options: ['przebiegać przez jezdnię', 'przechodzić po przejściu dla pieszych', 'iść chodnikiem', 'korzystać z kładki dla pieszych'], answer: 0, explain: 'Przepisy zabraniają przebiegania przez jezdnię.' },
        { id: 'qiqvab', q: 'Wysiadasz z autobusu i chcesz przejść na drugą stronę ulicy. Autobus jeszcze stoi. Co robisz?', options: ['nie wychodzę zza autobusu – idę do przejścia i tam przechodzę', 'wybiegam zza autobusu, bo kierowcy na pewno go omijają', 'przechodzę zaraz przed autobusem, póki jeszcze stoi', 'przechodzę zaraz za autobusem, gdy tylko z niego wysiądę'], answer: 0, explain: 'Nie wolno wchodzić na jezdnię zza pojazdu, który zasłania widok. Ani ty nie widzisz samochodów, ani kierowcy nie widzą ciebie.' },
        { id: 'sx1mpj', q: 'Prawda czy fałsz?\nPisanie wiadomości na telefonie podczas przechodzenia przez jezdnię po przejściu jest dozwolone.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Nie wolno korzystać z telefonu podczas przechodzenia przez jezdnię tak, że nie obserwujesz drogi. Pisanie wiadomości właśnie tak odciąga uwagę.' },
        { id: '3ard9b', q: 'Które zachowanie na przejściu dla pieszych jest zabronione?', options: ['zatrzymanie się bez potrzeby na środku jezdni', 'przechodzenie spokojnym krokiem, bez biegania', 'rozejrzenie się przed wejściem na przejście', 'przechodzenie razem z kolegą'], answer: 0, explain: 'Na jezdni nie wolno bez potrzeby zwalniać kroku ani się zatrzymywać.' },
        { id: 'lf2rrn', q: 'Nad ruchliwą ulicą jest kładka dla pieszych. Jak przejdziesz na drugą stronę?', options: ['kładką', 'jezdnią pod kładką', 'jezdnią, ale biegiem', 'tak, jak mi wygodniej'], answer: 0, explain: 'Jeśli na drodze jest kładka (wiadukt) lub tunel dla pieszych, pieszy musi z niego skorzystać.' },
        { id: 'jlhn3r', q: 'Twój brat ma 5 lat. Kto może się nim opiekować, gdy idzie z nim poboczem drogi?', options: ['ty – masz 10 lat', 'jego kolega – ma 6 lat', 'siostra – ma 8 lat', 'nikt – brat może iść sam'], answer: 0, explain: 'Dziecko do 7 lat może korzystać z drogi tylko pod opieką osoby, która ma co najmniej 10 lat.' },
        { id: 'g6lmd4', q: 'Kto z nich jest uczestnikiem ruchu drogowego?', options: ['pieszy, rowerzysta i pasażer autobusu', 'tylko kierowca samochodu lub autobusu', 'tylko rowerzysta, ale nie pieszy', 'tylko pieszy, ale nie pasażer'], answer: 0, explain: 'Uczestnik ruchu to pieszy, kierujący (np. rowerzysta, kierowca), a także osoba jadąca w pojeździe lub na nim.' },
        { id: '1xgdy8', q: 'Co to jest jezdnia?', options: ['część drogi przeznaczona do ruchu pojazdów', 'część drogi przeznaczona tylko dla pieszych', 'pas trawy obok drogi, gdzie rosną drzewa', 'miejsce postoju autobusu na przystanku'], answer: 0, explain: 'Jezdnią jeżdżą pojazdy. Dla pieszych jest chodnik.' },
      ],
    },
    {
      id: 'rowerzysta',
      name: 'Rower i rowerzysta',
      basis: 'Dz.U. 2026 poz. 378, zajęcia praktyczno-techniczne kl. IV–VI: dz. 8, wym. 1 (zasady ruchu podczas jazdy rowerem), wym. 3 (warunki dopuszczenia do ruchu, obowiązek kasku do 16 lat), wym. 6 (budowa roweru), wym. 7 (obowiązkowe i zalecane wyposażenie roweru), wym. 8 (eksploatacja i konserwacja roweru). Przepisy: Prawo o ruchu drogowym (Dz.U. 2024 poz. 1251 ze zm.) art. 2 pkt 47, art. 33 (w tym ust. 1b i 2 w brzmieniu ustawy Dz.U. 2025 poz. 1676 – kask do 16 lat od 2.06.2026), art. 51 ust. 6; ustawa o kierujących pojazdami (Dz.U. 2025 poz. 1226 ze zm.) art. 8 ust. 1 pkt 11; rozporządzenie w sprawie warunków technicznych pojazdów (Dz.U. 2024 poz. 502) § 53 ust. 1 (sprawdzone 1.11.2026). Wybór na klasę 4 – decyzja redakcyjna.',
      theory: `
        <h3>Budowa roweru</h3>
        <table>
          <tr><th>Część</th><th>Do czego służy</th></tr>
          <tr><td>rama</td><td>„szkielet” roweru – łączy wszystkie części</td></tr>
          <tr><td>kierownica</td><td>do kierowania; są na niej dźwignie hamulców i dzwonek</td></tr>
          <tr><td>siodełko</td><td>do siedzenia</td></tr>
          <tr><td>koła (opony, obręcze, szprychy)</td><td>toczą się po drodze</td></tr>
          <tr><td>pedały i korba</td><td>naciskasz je nogami i napędzasz rower</td></tr>
          <tr><td>łańcuch</td><td>przenosi ruch z pedałów na tylne koło</td></tr>
          <tr><td>hamulce</td><td>zatrzymują rower</td></tr>
          <tr><td>światła i odblask</td><td>dzięki nim jesteś widoczny</td></tr>
          <tr><td>dzwonek</td><td>ostrzega innych</td></tr>
        </table>
        <h3>Obowiązkowe wyposażenie roweru</h3>
        <ul>
          <li><b>z przodu</b> – co najmniej jedno światło pozycyjne <b>białe lub żółte selektywne</b>,</li>
          <li><b>z tyłu</b> – co najmniej jedno <b>czerwone światło odblaskowe</b> (odblask) o kształcie <b>innym niż trójkąt</b> i co najmniej jedno <b>czerwone światło pozycyjne</b>,</li>
          <li>co najmniej <b>jeden sprawny hamulec</b>,</li>
          <li><b>dzwonek</b> lub inny sygnał ostrzegawczy o nieprzeraźliwym dźwięku.</li>
        </ul>
        <p>W dzień światła pozycyjne można zdjąć, jeśli nie musisz ich używać. <b>Od zmierzchu do świtu i w tunelu</b> światła roweru muszą być włączone.</p>
        <p><b>Zalecane</b> (nieobowiązkowe) jest np. dodatkowe oświetlenie i odblaski, błotniki, nóżka, a dla starszych rowerzystów – kask.</p>
        <h3>Kask</h3>
        <div class="tip">💡 Od 2 czerwca 2026 r. każdy, kto <b>nie ukończył 16 lat</b>, musi jeździć w <b>kasku</b> – na rowerze, hulajnodze elektrycznej i urządzeniu transportu osobistego. Kask chroni głowę przy upadku. Zapnij pasek pod brodą.</div>
        <h3>Gdzie jedzie rowerzysta</h3>
        <ul>
          <li>Jeśli w twoim kierunku jest <b>droga dla rowerów</b> (albo droga dla pieszych i rowerów lub pas ruchu dla rowerów) – musisz z niej korzystać.</li>
          <li>Na drodze dla pieszych i rowerów uważaj i <b>ustępuj pierwszeństwa pieszym</b>.</li>
          <li><b>Chodnikiem</b> rowerem wolno jechać tylko wyjątkowo, np. gdy opiekujesz się dzieckiem do 10 lat, które jedzie rowerem, albo gdy na jezdni jest niebezpiecznie przez pogodę (śnieg, silny wiatr, ulewa, gołoledź, gęsta mgła). Na chodniku jedziesz <b>powoli, prawie jak pieszy</b>, i przepuszczasz pieszych.</li>
        </ul>
        <h3>Czego rowerzyście nie wolno</h3>
        <ul>
          <li>jechać bez trzymania <b>co najmniej jednej ręki na kierownicy</b> i nóg na pedałach,</li>
          <li><b>czepiać się</b> pojazdów,</li>
          <li>jechać po jezdni obok innego uczestnika ruchu (wyjątkowo wolno obok drugiego roweru, jeśli nie przeszkadza to innym).</li>
        </ul>
        <h3>Przewożenie dziecka</h3>
        <p>Dziecko do 7 lat może jechać na rowerze na <b>dodatkowym siodełku lub w foteliku rowerowym</b> i w <b>kasku</b>. Przewozić inną osobę rowerem może dopiero kierujący, który ma <b>17 lat</b>.</p>
        <h3>Przegląd przed jazdą</h3>
        <ul>
          <li>Czy działają <b>hamulce</b>?</li>
          <li>Czy <b>opony</b> są dobrze napompowane i nie są przebite?</li>
          <li>Czy <b>łańcuch</b> nie spada i jest naoliwiony?</li>
          <li>Czy działają <b>światła i dzwonek</b>, czy jest odblask?</li>
          <li>Czy <b>kierownica i siodełko</b> są dokręcone?</li>
        </ul>
      `,
      flashcards: [
        ['Łańcuch', 'Przenosi ruch z pedałów na tylne koło'],
        ['Rama', '„Szkielet” roweru, który łączy wszystkie części'],
        ['Światło z przodu roweru', 'Pozycyjne, białe lub żółte selektywne'],
        ['Z tyłu roweru', 'Czerwony odblask (nie trójkątny) i czerwone światło pozycyjne'],
        ['Hamulec', 'Co najmniej jeden sprawny – obowiązkowo'],
        ['Dzwonek', 'Obowiązkowy (albo inny sygnał o nieprzeraźliwym dźwięku)'],
        ['Kask', 'Obowiązkowy dla każdego, kto nie ukończył 16 lat'],
        ['Kiedy włączasz światła roweru?', 'Od zmierzchu do świtu i w tunelu'],
        ['Rowerem po chodniku?', 'Tylko wyjątkowo, np. opiekując się dzieckiem do 10 lat na rowerze lub w złą pogodę; powoli i ustępując pieszym'],
        ['Zakazy dla rowerzysty', 'Jazda bez trzymania kierownicy, czepianie się pojazdów, jazda obok innego uczestnika ruchu po jezdni'],
        ['Przegląd roweru', 'Hamulce, opony, łańcuch, światła, dzwonek, dokręcona kierownica i siodełko'],
      ],
      questions: [
        { id: 'dnj06l', q: 'Jakie światło musi mieć rower z przodu?', options: ['białe lub żółte selektywne', 'czerwone lub pomarańczowe', 'niebieskie lub fioletowe', 'zielone lub czerwone'], answer: 0, explain: 'Z przodu rower ma co najmniej jedno światło pozycyjne barwy białej lub żółtej selektywnej.' },
        { id: 'mrbwsx', q: 'Co musi mieć rower z tyłu?', options: ['czerwony odblask (nie trójkątny) i czerwone światło pozycyjne', 'białe światło pozycyjne i żółty odblask w kształcie koła', 'tylko czerwony odblask w kształcie trójkąta', 'nic – wystarczą światła z przodu roweru'], answer: 0, explain: 'Z tyłu: co najmniej jedno czerwone światło odblaskowe o kształcie innym niż trójkąt i co najmniej jedno czerwone światło pozycyjne.' },
        { id: 'k787mw', q: 'Który element NIE jest obowiązkowym wyposażeniem roweru?', options: ['lusterko', 'dzwonek', 'hamulec', 'tylny czerwony odblask'], answer: 0, explain: 'Obowiązkowe są: światła z przodu i z tyłu, tylny odblask, co najmniej jeden hamulec i dzwonek. Lusterko nie jest obowiązkowe.' },
        { id: 'yl2x3g', q: 'Ile sprawnych hamulców musi mieć rower co najmniej?', options: ['jeden', 'dwa', 'trzy', 'żadnego'], answer: 0, explain: 'Przepis wymaga co najmniej jednego skutecznie działającego hamulca.' },
        { id: 'fog0kk', q: 'Masz 11 lat i jedziesz rowerem do szkoły. Czy musisz mieć kask?', options: ['tak – kask jest obowiązkowy do 16 lat', 'nie – kask jest obowiązkowy tylko do 7 lat', 'tylko gdy jadę jezdnią', 'tylko po zmroku'], answer: 0, explain: 'Od 2 czerwca 2026 r. kierujący rowerem, który nie ukończył 16 lat, musi używać kasku ochronnego.' },
        { id: '0v1kca', q: 'Wzdłuż ulicy w twoim kierunku biegnie droga dla rowerów. Którędy jedziesz rowerem?', options: ['drogą dla rowerów', 'jezdnią, przy jej krawędzi', 'chodnikiem, ale powoli', 'tak, jak mi wygodniej'], answer: 0, explain: 'Jeśli droga dla rowerów jest wyznaczona dla kierunku, w którym jedziesz, musisz z niej korzystać.' },
        { id: 'mknmgz', q: 'Jedziesz drogą dla pieszych i rowerów. Przed tobą idzie pieszy. Kto ma pierwszeństwo?', options: ['pieszy', 'rowerzysta', 'ten, kto pierwszy zadzwoni', 'nikt'], answer: 0, explain: 'Na drodze dla pieszych i rowerów rowerzysta zachowuje szczególną ostrożność i ustępuje pierwszeństwa pieszemu.' },
        { id: 'yyje09', q: 'Kiedy rowerzysta może jechać chodnikiem?', options: ['gdy opiekuje się dzieckiem do 10 lat, które jedzie rowerem', 'zawsze, gdy spieszy się do szkoły albo do domu', 'gdy na jezdni jest kilka samochodów i trochę hałasu', 'gdy jedzie z kolegą i chcą spokojnie pogadać'], answer: 0, explain: 'Chodnikiem wolno jechać tylko wyjątkowo. Jeden z takich wyjątków: rowerzysta opiekuje się osobą do 10 lat jadącą rowerem.' },
        { id: 'c0rma0', q: 'Pada gęsty śnieg i jedziesz wyjątkowo chodnikiem. Jak jedziesz?', options: ['powoli, prawie jak pieszy, i przepuszczam pieszych', 'szybko, żeby jak najkrócej być na chodniku', 'dzwonię, żeby piesi zeszli mi z drogi', 'środkiem chodnika, nie zwalniając'], answer: 0, explain: 'Na chodniku rowerzysta jedzie z prędkością zbliżoną do prędkości pieszego, uważa i ustępuje pierwszeństwa pieszym.' },
        { id: '92nnzc', q: 'Czego nie wolno robić rowerzyście?', options: ['jechać bez trzymania kierownicy choćby jedną ręką', 'jechać drogą dla rowerów wyznaczoną w swoim kierunku', 'mieć włączone światła po zmroku', 'jechać w kasku zapiętym pod brodą'], answer: 0, explain: 'Zabroniona jest jazda bez trzymania co najmniej jednej ręki na kierownicy i nóg na pedałach.' },
        { id: '8f6330', q: 'Prawda czy fałsz?\nRowerzysta może złapać się jadącego samochodu, żeby szybciej podjechać pod górkę.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Czepianie się pojazdów jest zabronione – to bardzo niebezpieczne.' },
        { id: 'uen7ur', q: 'Kiedy w rowerze muszą być włączone światła?', options: ['od zmierzchu do świtu i w tunelu', 'tylko w zimie', 'tylko w mieście', 'nigdy – wystarczą odblaski'], answer: 0, explain: 'Rower, który nie ma świateł mijania, od zmierzchu do świtu i w tunelu jedzie z włączonymi światłami pozycyjnymi.' },
        { id: 'zlmqwh', q: 'Która część roweru przenosi ruch z pedałów na tylne koło?', options: ['łańcuch', 'kierownica', 'siodełko', 'dzwonek'], answer: 0, explain: 'Naciskasz pedały, a łańcuch przenosi ten ruch na tylne koło.' },
        { id: 'pz99nh', q: 'Robisz przegląd roweru przed jazdą. Co jest najważniejsze dla bezpieczeństwa?', options: ['czy działają hamulce', 'jakiego koloru jest rama', 'czy rower jest umyty', 'czy na ramie są naklejki'], answer: 0, explain: 'Sprawne hamulce to podstawa bezpieczeństwa. Sprawdzasz też opony, łańcuch, światła i dzwonek.' },
        { id: 't7e7am', q: 'Ile lat musi mieć rowerzysta, który przewozi na rowerze inną osobę?', options: ['17 lat', '10 lat', '13 lat', '16 lat'], answer: 0, explain: 'Minimalny wiek do kierowania rowerem przewożącym inną osobę to 17 lat. Czwartoklasista nie może nikogo wozić na rowerze.' },
        { id: 'rwexms', q: 'Jak może być przewożone na rowerze dziecko do 7 lat?', options: ['na dodatkowym siodełku lub w foteliku rowerowym, w kasku', 'na ramie przed kierującym, bez kasku', 'na bagażniku, trzymając się mocno kierującego', 'na kierownicy, trzymając się jej rękami'], answer: 0, explain: 'Dziecko do 7 lat jedzie na dodatkowym siodełku lub w foteliku rowerowym i używa kasku.' },
        { id: 'etldcy', q: 'Prawda czy fałsz?\nOdblask z tyłu roweru może mieć kształt trójkąta.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Tylne czerwone światło odblaskowe roweru musi mieć kształt inny niż trójkąt.' },
      ],
    },
    {
      id: 'karta-hulajnoga',
      name: 'Karta rowerowa i hulajnoga elektryczna',
      basis: 'Dz.U. 2026 poz. 378, zajęcia praktyczno-techniczne kl. IV–VI: dz. 8, wym. 2 (etyka, szacunek dla innych uczestników ruchu), wym. 3 (warunki dopuszczenia do ruchu kierującego rowerem, hulajnogą elektryczną lub urządzeniem transportu osobistego; kask do 16 lat), wym. 10 (zagrożenia: prędkość, alkohol i środki odurzające, urządzenia elektroniczne), wym. 11 (przygotowanie do karty rowerowej). Przepisy: ustawa o kierujących pojazdami, tekst jednolity Dz.U. 2025 poz. 1226, art. 7 ust. 1 pkt 2, art. 8 ust. 1 pkt 10–10a (w brzmieniu Dz.U. 2025 poz. 1676 – hulajnoga od 13 lat, od 2.03.2026), art. 17; Prawo o ruchu drogowym (Dz.U. 2024 poz. 1251 ze zm.) art. 2 pkt 16, 47b, 47c, art. 33 ust. 1 i 1b, art. 33a ust. 3, art. 33d (w brzmieniu Dz.U. 2025 poz. 1676) (sprawdzone 1.11.2026). Wybór na klasę 4 – decyzja redakcyjna.',
      theory: `
        <h3>Karta rowerowa</h3>
        <p><b>Karta rowerowa</b> to dokument, który pozwala osobie <b>poniżej 18 lat</b> jeździć po drodze rowerem, a także hulajnogą elektryczną i urządzeniem transportu osobistego (zamiast niej może to być prawo jazdy niektórych kategorii).</p>
        <ul>
          <li>Można ją dostać od <b>10 lat</b>.</li>
          <li>Uczniowi szkoły podstawowej wydaje ją <b>dyrektor szkoły</b>, <b>za darmo</b>.</li>
          <li>Potrzebna jest <b>pisemna zgoda rodzica lub opiekuna</b>.</li>
          <li>Trzeba pokazać na zajęciach, że umiesz bezpiecznie jeździć i znasz przepisy.</li>
          <li>Kartę rowerową można mieć także w aplikacji <b>mObywatel</b>.</li>
        </ul>
        <div class="tip">💡 Przygotowanie do karty rowerowej to część zajęć praktyczno-technicznych. Ucz się przepisów dla pieszych i rowerzystów oraz znaków drogowych.</div>
        <h3>Hulajnoga elektryczna i urządzenie transportu osobistego</h3>
        <ul>
          <li><b>Hulajnoga elektryczna</b> – pojazd z silnikiem elektrycznym, z kierownicą, bez siedzenia i pedałów. Jedzie na niej jedna osoba, stojąc.</li>
          <li><b>Urządzenie transportu osobistego</b> – inny pojazd na prąd, bez siedzenia i pedałów, dla jednej osoby (np. elektryczna deskorolka).</li>
        </ul>
        <table>
          <tr><th>Wiek</th><th>Co wolno</th></tr>
          <tr><td>do 13 lat</td><td>po drodze – <b>nie wolno</b>; tylko w <b>strefie zamieszkania</b> i tylko <b>pod opieką dorosłego</b></td></tr>
          <tr><td>od 13 do 18 lat</td><td>wolno, z <b>kartą rowerową</b> (albo prawem jazdy niektórych kategorii)</td></tr>
          <tr><td>do 16 lat</td><td>zawsze w <b>kasku</b></td></tr>
        </table>
        <p><b>Strefa zamieszkania</b> to obszar oznaczony znakami (np. osiedle), gdzie obowiązują specjalne zasady – pieszy może chodzić całą szerokością drogi i ma pierwszeństwo przed pojazdami.</p>
        <p>Hulajnogą elektryczną <b>nie wolno przewozić innej osoby</b>, zwierzęcia ani bagażu. Jeśli jest droga dla rowerów, jedziesz nią.</p>
        <div class="tip">💡 Nowe przepisy: od 2 marca 2026 r. hulajnogą elektryczną wolno jeździć od <b>13 lat</b> (wcześniej od 10). W starszych książkach może być inaczej.</div>
        <h3>Co grozi wypadkiem</h3>
        <ul>
          <li><b>za duża prędkość</b> – trudniej zahamować i ominąć przeszkodę,</li>
          <li><b>nieuwaga i telefon</b> – patrzysz w ekran, a nie na drogę,</li>
          <li><b>alkohol i inne środki odurzające</b> – spowalniają reakcję i osłabiają uwagę; kierowanie po nich jest zabronione i bardzo niebezpieczne,</li>
          <li>brak kasku i świateł, niesprawny pojazd.</li>
        </ul>
        <h3>Szacunek na drodze</h3>
        <p>Dobry uczestnik ruchu myśli o innych: przepuszcza pieszych, uważa na dzieci i osoby starsze, nie popisuje się i nie przeszkadza innym. Daje dobry przykład młodszym.</p>
      `,
      flashcards: [
        ['Karta rowerowa', 'Dokument pozwalający osobie poniżej 18 lat jeździć rowerem (też hulajnogą elektryczną)'],
        ['Od ilu lat karta rowerowa?', 'Od 10 lat'],
        ['Kto wydaje kartę rowerową uczniowi?', 'Dyrektor szkoły – za darmo'],
        ['Czyja zgoda jest potrzebna?', 'Pisemna zgoda rodzica lub opiekuna'],
        ['Karta rowerowa w telefonie', 'Może być w aplikacji mObywatel'],
        ['Hulajnoga elektryczna – od ilu lat?', 'Od 13 lat (od 2.03.2026); młodsze dzieci tylko w strefie zamieszkania pod opieką dorosłego'],
        ['Kask na hulajnodze elektrycznej', 'Obowiązkowy do 16 lat'],
        ['Pasażer na hulajnodze elektrycznej', 'Zabroniony – nie wolno przewozić innej osoby, zwierzęcia ani bagażu'],
        ['Strefa zamieszkania', 'Obszar oznaczony znakami, gdzie pieszy chodzi całą szerokością drogi i ma pierwszeństwo'],
        ['Główne zagrożenia na drodze', 'Za duża prędkość, telefon i nieuwaga, alkohol i środki odurzające'],
      ],
      questions: [
        { id: 'spbrrt', q: 'Czym jest karta rowerowa?', options: ['dokumentem, który pozwala osobie poniżej 18 lat jeździć rowerem', 'legitymacją szkolną, którą dostaje każdy uczeń', 'mapą ścieżek rowerowych w okolicy szkoły i domu', 'gwarancją na nowy rower, którą daje sklep rowerowy'], answer: 0, explain: 'Karta rowerowa potwierdza uprawnienie do kierowania rowerem (a także hulajnogą elektryczną) przez osobę, która nie ukończyła 18 lat.' },
        { id: 'l889ny', q: 'Od ilu lat można uzyskać kartę rowerową?', options: ['od 10 lat', 'od 7 lat', 'od 13 lat', 'od 16 lat'], answer: 0, explain: 'Minimalny wiek do kierowania rowerem to 10 lat – od tego wieku można uzyskać kartę rowerową.' },
        { id: 'cn0rio', q: 'Kto wydaje kartę rowerową uczniowi szkoły podstawowej?', options: ['dyrektor szkoły', 'policjant', 'sprzedawca w sklepie rowerowym', 'wychowawca na wycieczce'], answer: 0, explain: 'Uczniowi szkoły podstawowej kartę rowerową wydaje dyrektor szkoły.' },
        { id: 'i48kkc', q: 'Ile kosztuje karta rowerowa wydawana w szkole?', options: ['nic – jest bezpłatna', '10 zł', '50 zł', 'tyle, ile kosztuje rower'], answer: 0, explain: 'Kartę rowerową wydaje się nieodpłatnie.' },
        { id: '8vksou', q: 'Co jest potrzebne, żeby uczeń dostał kartę rowerową?', options: ['pisemna zgoda rodzica lub opiekuna', 'własny samochód lub motocykl', 'prawo jazdy na samochód osobowy', 'skończone 18 lat i dowód osobisty'], answer: 0, explain: 'Kartę rowerową wydaje się za pisemną zgodą rodzica lub opiekuna. Uczeń musi też mieć 10 lat i wykazać się umiejętnościami na zajęciach.' },
        { id: '1dup07', q: 'Od ilu lat wolno jeździć hulajnogą elektryczną po drodze (poza strefą zamieszkania)?', options: ['od 13 lat', 'od 7 lat', 'od 10 lat', 'od 18 lat'], answer: 0, explain: 'Od 2 marca 2026 r. minimalny wiek dla hulajnogi elektrycznej to 13 lat.' },
        { id: 'usb5xa', q: 'Ola ma 11 lat. Gdzie wolno jej jeździć hulajnogą elektryczną?', options: ['tylko w strefie zamieszkania, pod opieką dorosłego', 'drogą dla rowerów, sama, jeśli ma kartę rowerową', 'chodnikiem, sama, jeśli jedzie powoli', 'jezdnią, jeśli jedzie w kasku i przy krawędzi'], answer: 0, explain: 'Dziecka do 13 lat nie wolno dopuszczać do jazdy hulajnogą elektryczną po drodze. W strefie zamieszkania może jeździć tylko pod opieką osoby dorosłej.' },
        { id: 'kms1vn', q: 'Kuba ma 14 lat i jeździ hulajnogą elektryczną. Jakiego dokumentu potrzebuje?', options: ['karty rowerowej', 'dowodu osobistego', 'legitymacji szkolnej', 'żadnego'], answer: 0, explain: 'Osoba poniżej 18 lat kierująca hulajnogą elektryczną musi mieć kartę rowerową (albo prawo jazdy kategorii AM, A1, B1 lub T).' },
        { id: '0m6rqv', q: 'Kuba ma 14 lat. Czy na hulajnodze elektrycznej musi mieć kask?', options: ['tak – do 16 lat kask jest obowiązkowy', 'nie – kask jest tylko dla rowerzystów', 'tylko na jezdni', 'tylko w nocy'], answer: 0, explain: 'Kierujący hulajnogą elektryczną, który nie ukończył 16 lat, musi używać kasku.' },
        { id: 'pfq2zl', q: 'Prawda czy fałsz?\nNa hulajnodze elektrycznej można przewieźć kolegę, jeśli jedzie się powoli.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Kierującemu hulajnogą elektryczną nie wolno przewozić innej osoby, zwierzęcia ani ładunku.' },
        { id: 'y7ix0j', q: 'Prawda czy fałsz?\nKartę rowerową można mieć w aplikacji mObywatel.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Karta rowerowa może być udostępniana jako dokument mobilny w aplikacji mObywatel.' },
        { id: 'vgfu3v', q: 'Czym jest strefa zamieszkania?', options: ['obszarem oznaczonym znakami, gdzie pieszy ma pierwszeństwo', 'każdą drogą przy domu, także bez żadnych znaków', 'drogą, na której samochody zawsze mają pierwszeństwo', 'tylko podwórkiem szkoły, gdzie nie wjeżdżają auta'], answer: 0, explain: 'Strefa zamieszkania to obszar oznaczony znakami drogowymi, gdzie obowiązują szczególne zasady – pieszy korzysta z całej szerokości drogi i ma pierwszeństwo przed pojazdem.' },
        { id: 'wuiqy2', q: 'Co najbardziej zwiększa ryzyko wypadku?', options: ['jazda za szybko', 'jazda w kasku', 'sprawne hamulce', 'włączone światła po zmroku'], answer: 0, explain: 'Przy dużej prędkości trudniej zahamować i ominąć przeszkodę. Pozostałe odpowiedzi to zachowania bezpieczne.' },
        { id: '8bys38', q: 'Dlaczego nie wolno korzystać z telefonu podczas jazdy rowerem?', options: ['bo odciąga uwagę od drogi', 'bo telefon się rozładuje', 'bo rower jedzie wtedy wolniej', 'bo można zgubić słuchawki'], answer: 0, explain: 'Patrząc w ekran, nie widzisz, co dzieje się na drodze, i reagujesz za późno.' },
        { id: 'cp7wv0', q: 'Jak alkohol i inne środki odurzające działają na kierującego?', options: ['spowalniają reakcję i osłabiają uwagę', 'przyspieszają reakcję i poprawiają refleks', 'nie mają żadnego wpływu na jazdę', 'poprawiają wzrok i słuch kierującego'], answer: 0, explain: 'Takie środki spowalniają reakcje i osłabiają uwagę – kierowanie po nich jest bardzo niebezpieczne i zabronione.' },
        { id: 'dpehx8', q: 'Jedziesz rowerem drogą dla pieszych i rowerów. Przed tobą powoli idzie starsza pani. Co robisz?', options: ['zwalniam i ostrożnie ją mijam, ustępując jej', 'dzwonię długo, żeby zeszła mi z drogi', 'mijam ją szybko tuż obok', 'krzyczę, żeby się pospieszyła'], answer: 0, explain: 'Na drodze dla pieszych i rowerów pieszy ma pierwszeństwo. Szacunek dla innych to też część bezpiecznej jazdy.' },
      ],
    },
    {
      id: 'znaki-wypadek',
      name: 'Znaki drogowe, wypadek i bezpieczna praca',
      basis: 'Dz.U. 2026 poz. 378, zajęcia praktyczno-techniczne kl. IV–VI: dz. 8, wym. 1 (znaki i sygnały drogowe), wym. 5 (zachowanie w miejscu wypadku, przekazanie informacji służbom); dz. 1 „Środowisko techniczne”, wym. 1 (zasady bezpieczeństwa pracy w pracowni technicznej). Znaki: rozporządzenie w sprawie znaków i sygnałów drogowych, Dz.U. 2019 poz. 2310 (nazwy znaków); szczegółowe warunki techniczne dla znaków, Dz.U. 2019 poz. 2311 (kształty znaków) (sprawdzone 1.11.2026). Pierwsza pomoc – tylko ogólne zasady (bezpieczeństwo, wezwanie pomocy); praktykę prowadzi szkoła. Wybór na klasę 4 – decyzja redakcyjna.',
      theory: `
        <h3>Grupy znaków drogowych</h3>
        <table>
          <tr><th>Grupa</th><th>Kształt</th><th>Co robi</th></tr>
          <tr><td><b>ostrzegawcze</b> (litera A)</td><td>trójkąt wierzchołkiem do góry; zwykle żółte z czerwoną obwódką</td><td>ostrzegają przed niebezpieczeństwem</td></tr>
          <tr><td><b>zakazu</b> (B)</td><td>zwykle koło z czerwoną obwódką</td><td>mówią, czego nie wolno</td></tr>
          <tr><td><b>nakazu</b> (C)</td><td>koło, niebieskie</td><td>mówią, co trzeba robić</td></tr>
          <tr><td><b>informacyjne</b> (D)</td><td>kwadrat lub prostokąt, zwykle niebieskie</td><td>informują, np. gdzie jest przejście</td></tr>
        </table>
        <p>Wyjątek: znak A-7 „ustąp pierwszeństwa” to trójkąt <b>wierzchołkiem w dół</b>.</p>
        <h3>Ważne znaki dla pieszego i rowerzysty</h3>
        <table>
          <tr><th>Znak</th><th>Nazwa i znaczenie</th></tr>
          <tr><td>A-16</td><td>„przejście dla pieszych” – <b>ostrzega</b>, że niedaleko jest przejście</td></tr>
          <tr><td>A-17</td><td>„dzieci” – ostrzega o miejscu, gdzie często są dzieci (np. przy szkole)</td></tr>
          <tr><td>A-7</td><td>„ustąp pierwszeństwa”</td></tr>
          <tr><td>B-9</td><td>„zakaz wjazdu rowerów”</td></tr>
          <tr><td>B-41</td><td>„zakaz ruchu pieszych”</td></tr>
          <tr><td>C-13</td><td>„droga dla rowerów”</td></tr>
          <tr><td>C-16</td><td>„droga dla pieszych”</td></tr>
          <tr><td>D-6</td><td>„przejście dla pieszych” – oznacza miejsce do przechodzenia w poprzek drogi</td></tr>
          <tr><td>D-6a</td><td>„przejazd dla rowerzystów”</td></tr>
          <tr><td>D-6b</td><td>„przejście dla pieszych i przejazd dla rowerzystów”</td></tr>
        </table>
        <div class="tip">💡 Trójkąt – <b>uwaga</b>! Koło – <b>zakaz albo nakaz</b>. Kwadrat – <b>informacja</b>.</div>
        <h3>Gdy widzisz wypadek</h3>
        <ol>
          <li><b>Zadbaj o swoje bezpieczeństwo</b> – nie wbiegaj na jezdnię.</li>
          <li><b>Zawołaj dorosłego</b> i <b>wezwij pomoc</b>: numer alarmowy <b>112</b>.</li>
          <li>Powiedz spokojnie: <b>kto</b> dzwoni, <b>gdzie</b> to się stało, <b>co</b> się stało i <b>ilu</b> jest poszkodowanych.</li>
          <li>Słuchaj pytań i poleceń osoby, która odebrała telefon (dyspozytora).</li>
          <li>Zostań przy poszkodowanym, jeśli jest bezpiecznie, i rozmawiaj z nim do przyjazdu pomocy.</li>
        </ol>
        <p>Pierwszą pomoc ćwiczy się na zajęciach w szkole. Najważniejsze: bezpieczeństwo i szybkie wezwanie pomocy.</p>
        <h3>Bezpieczna praca w pracowni</h3>
        <ul>
          <li>Przestrzegaj <b>regulaminu pracowni</b> i poleceń nauczyciela.</li>
          <li>Używaj narzędzi <b>zgodnie z przeznaczeniem</b> i instrukcją.</li>
          <li>Utrzymuj <b>porządek</b> na stanowisku pracy.</li>
          <li>Ostre narzędzia (np. nożyczki) podawaj rękojeścią do drugiej osoby.</li>
          <li><b>Każde skaleczenie</b> lub wypadek od razu zgłoś nauczycielowi.</li>
          <li>Zwracaj uwagę na znaki w szkole, np. wskazujące wyjście ewakuacyjne.</li>
        </ul>
      `,
      flashcards: [
        ['Znaki ostrzegawcze', 'Trójkąt wierzchołkiem do góry – ostrzegają przed niebezpieczeństwem'],
        ['Znaki zakazu', 'Zwykle okrągłe z czerwoną obwódką – czego nie wolno'],
        ['Znaki nakazu', 'Okrągłe, niebieskie – co trzeba robić'],
        ['Znaki informacyjne', 'Kwadratowe lub prostokątne – informują'],
        ['A-7', '„ustąp pierwszeństwa” – trójkąt wierzchołkiem w dół'],
        ['C-13', '„droga dla rowerów”'],
        ['B-9', '„zakaz wjazdu rowerów”'],
        ['A-17', '„dzieci” – ostrzega o miejscu, gdzie często są dzieci'],
        ['Numer alarmowy', '112'],
        ['Co powiesz dyspozytorowi?', 'Kto dzwoni, gdzie, co się stało, ilu jest poszkodowanych'],
        ['Skaleczenie w pracowni', 'Od razu zgłoś nauczycielowi'],
      ],
      questions: [
        { id: 'ylda27', q: 'Jaki kształt mają znaki ostrzegawcze?', options: ['trójkąta', 'koła', 'kwadratu', 'ośmiokąta'], answer: 0, explain: 'Znaki ostrzegawcze mają kształt trójkąta równobocznego, zwykle wierzchołkiem do góry.' },
        { id: 'h2igjc', q: 'Jaki kształt mają znaki nakazu?', options: ['koła', 'trójkąta', 'kwadratu', 'rombu'], answer: 0, explain: 'Znaki nakazu są okrągłe (niebieskie).' },
        { id: 'stb6p2', q: 'Jaki kształt mają znaki informacyjne?', options: ['kwadratu lub prostokąta', 'trójkąta wierzchołkiem do góry', 'koła z czerwoną obwódką', 'serca'], answer: 0, explain: 'Znaki informacyjne mają kształt kwadratu lub prostokąta.' },
        {
          id: 't4dsqb', q: 'Do jakiej grupy należy znak o takim kształcie?',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Znak w kształcie trójkąta wierzchołkiem do góry, w środku idący pieszy">
            <path d="M150,12 L222,118 L78,118 Z" class="f4 s2 sw"/>
            <text x="150" y="102" class="tx-b" text-anchor="middle">🚶</text>
          </svg>`,
          options: ['ostrzegawcze', 'nakazu', 'informacyjne'], answer: 0, explain: 'Trójkąt wierzchołkiem do góry to znak ostrzegawczy (ten ostrzega o przejściu dla pieszych – A-16).',
        },
        {
          id: '1mrbcy', q: 'Do jakiej grupy należy znak o takim kształcie?',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Znak w kształcie kwadratu, w środku idący pieszy">
            <rect x="100" y="12" width="100" height="100" rx="6" class="f1 s1 sw"/>
            <text x="150" y="74" class="tx-b" text-anchor="middle">🚶</text>
          </svg>`,
          options: ['informacyjne', 'ostrzegawcze', 'nakazu'], answer: 0, explain: 'Kwadrat lub prostokąt to znak informacyjny (np. D-6 „przejście dla pieszych”).',
        },
        {
          id: 's4a93n', q: 'Ten znak to trójkąt wierzchołkiem w dół. Jak się nazywa?',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Pusty znak w kształcie trójkąta wierzchołkiem w dół">
            <path d="M78,12 L222,12 L150,118 Z" class="f4 s2 sw"/>
          </svg>`,
          options: ['„ustąp pierwszeństwa”', '„droga dla rowerów”', '„zakaz ruchu pieszych”', '„dzieci”'], answer: 0, explain: 'Znak A-7 „ustąp pierwszeństwa” to jedyny znak ostrzegawczy umieszczany wierzchołkiem w dół.',
        },
        { id: '38ivg9', q: 'Co oznacza znak C-13?', options: ['drogę dla rowerów', 'zakaz wjazdu rowerów', 'przejście dla pieszych', 'drogę z pierwszeństwem'], answer: 0, explain: 'C-13 to znak nakazu „droga dla rowerów”.' },
        { id: 'ruknz2', q: 'Co oznacza znak B-9?', options: ['zakaz wjazdu rowerów', 'drogę dla rowerów', 'przejazd dla rowerzystów', 'zakaz ruchu pieszych'], answer: 0, explain: 'B-9 to znak zakazu „zakaz wjazdu rowerów”.' },
        { id: '9cy1e3', q: 'Przed czym ostrzega znak A-17 „dzieci”?', options: ['przed miejscem, gdzie często są dzieci, np. przy szkole', 'przed placem zabaw, na który nie wolno wchodzić', 'przed sklepem z zabawkami', 'przed przejazdem kolejowym'], answer: 0, explain: 'A-17 ostrzega o miejscu szczególnie uczęszczanym przez dzieci lub o bliskości takiego miejsca.' },
        { id: 'kwfz76', q: 'Który znak oznacza miejsce przeznaczone do przechodzenia pieszych w poprzek drogi?', options: ['D-6 „przejście dla pieszych”', 'B-41 „zakaz ruchu pieszych”', 'C-13 „droga dla rowerów”', 'A-7 „ustąp pierwszeństwa”'], answer: 0, explain: 'Znak informacyjny D-6 oznacza przejście dla pieszych. Znak ostrzegawczy A-16 tylko uprzedza, że przejście jest niedaleko.' },
        { id: 'cxzm1j', q: 'Co oznacza znak B-41?', options: ['zakaz ruchu pieszych', 'drogę dla pieszych', 'przejście dla pieszych', 'strefę zamieszkania'], answer: 0, explain: 'B-41 to znak zakazu „zakaz ruchu pieszych”.' },
        { id: 'pn8yfi', q: 'Pod jaki numer zadzwonisz, gdy zobaczysz wypadek?', options: ['112', '100', '123', '911'], answer: 0, explain: '112 to numer alarmowy, pod który dzwonisz, by wezwać pomoc.' },
        { id: 'xi3ooh', q: 'Dzwonisz pod 112. Co powiesz?', options: ['kto dzwoni, gdzie i co się stało oraz ilu jest poszkodowanych', 'tylko swoje imię', 'tylko „szybko, pomocy!” i od razu się rozłączasz', 'nic – czekasz, aż ktoś odgadnie'], answer: 0, explain: 'Najważniejsze informacje: kto dzwoni, gdzie, co się stało i ilu jest poszkodowanych. Potem słuchaj pytań dyspozytora.' },
        { id: 'jzj5n2', q: 'Widzisz wypadek na ulicy. Co robisz najpierw?', options: ['dbam o swoje bezpieczeństwo i wzywam pomoc', 'wbiegam na jezdnię, nie rozglądając się', 'uciekam i nikomu nic nie mówię', 'nagrywam film telefonem dla kolegów'], answer: 0, explain: 'Najpierw twoje bezpieczeństwo, potem szybkie wezwanie pomocy.' },
        { id: 'i4pb2m', q: 'W pracowni skaleczyłeś się nożyczkami. Co robisz?', options: ['od razu mówię nauczycielowi', 'ukrywam to do końca lekcji', 'pracuję dalej, żeby skończyć', 'idę sam do domu'], answer: 0, explain: 'Każde skaleczenie lub wypadek w pracowni trzeba od razu zgłosić nauczycielowi.' },
        { id: 'igkbts', q: 'Jak używasz narzędzi w pracowni technicznej?', options: ['zgodnie z przeznaczeniem i instrukcją', 'jak chcę, byle szybko skończyć pracę', 'nożyczkami odkręcam śrubki', 'bawię się nimi w przerwie z kolegami'], answer: 0, explain: 'Narzędzia używamy zgodnie z przeznaczeniem i regulaminem pracowni – wtedy praca jest bezpieczna.' },
      ],
    },
  ],
});
