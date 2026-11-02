/* Edukacja techniczna – klasa 3, tylko wiedza (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – VI. Edukacja techniczna). Część praktyczną (majsterkowanie) dziecko wykonuje na zajęciach. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), VI. Edukacja techniczna';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III. Aplikacja ćwiczy tylko wiedzę – prace techniczne wykonuje się na zajęciach.';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'technika',
    name: 'Edukacja techniczna',
    icon: '🔧',
    color: '#7a6a55',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'warsztat',
        name: 'Porządek, narzędzia i połączenia',
        basis: `${PP}, 1. Organizacja pracy, pkt 2 (ład, porządek i dobra organizacja miejsca pracy ze względów bezpieczeństwa), pkt 3 (gospodarność, oszczędność, umiar w korzystaniu z materiałów i narzędzi); 2. Znajomość informacji technicznej, materiałów i technologii wytwarzania, pkt 1 (instrukcja), pkt 2 (połączenia nierozłączne: klej, wiązanie, szycie, zszywki, taśma; rozłączne: spinacze, sznurek, wstążka; bez kleju, taśm i zszywek: origami, modele nacinane); 3. pkt 2 (proste narzędzia pomiarowe). Przykłady narzędzi – decyzja redakcyjna.${KONIEC}`,
        theory: `
          <h3>Porządek przy pracy</h3>
          <ul>
            <li>Przed pracą przygotuj na ławce tylko to, czego potrzebujesz.</li>
            <li>Nożyczki podajesz koledze <b>rączką do przodu</b>, zamknięte. Nie biegasz z nożyczkami.</li>
            <li>Po pracy <b>sprzątasz</b>: ścinki do kosza, narzędzia na miejsce.</li>
          </ul>
          <p class="tip">Porządek to bezpieczeństwo: na zagraconej ławce łatwo o skaleczenie.</p>
          <h3>Oszczędnie!</h3>
          <p>Wycinaj elementy blisko siebie, przy brzegu kartki, a resztki papieru wykorzystaj później. Kleju bierz tyle, ile trzeba.</p>
          <h3>Instrukcja</h3>
          <p><b>Instrukcja</b> mówi krok po kroku, jak coś zrobić albo jak używać urządzenia. Czytaj ją <b>przed</b> pracą.</p>
          <h3>Jak łączymy materiały?</h3>
          <table><tr><th>połączenie</th><th>przykłady</th></tr>
            <tr><td><b>nierozłączne</b> – trudno rozdzielić bez zniszczenia</td><td>klejenie, zszywanie zszywaczem, szycie, sklejanie taśmą</td></tr>
            <tr><td><b>rozłączne</b> – łatwo rozdzielić</td><td>spinacz biurowy, sznurek, wstążka zawiązana na kokardkę</td></tr>
            <tr><td><b>bez kleju i taśmy</b></td><td><b>origami</b> – składanie figurek z papieru; modele z kartonu z nacięciami</td></tr></table>
          <h3>Czym mierzymy?</h3>
          <p><b>Linijka</b> – długość (cm). <b>Miarka krawiecka</b> – np. obwód głowy. <b>Waga</b> – masa (kg, g). <b>Termometr</b> – temperatura (°C).</p>`,
        flashcards: [
          ['Jak podajesz nożyczki?', 'zamknięte, rączką do przodu'],
          ['Po co porządek przy pracy?', 'dla bezpieczeństwa i wygody'],
          ['Instrukcja', 'opis krok po kroku, jak coś zrobić albo jak używać urządzenia'],
          ['Połączenie nierozłączne', 'trudno rozdzielić, np. klej, zszywki, szycie'],
          ['Połączenie rozłączne', 'łatwo rozdzielić, np. spinacz, sznurek, wstążka'],
          ['Origami', 'składanie figurek z papieru bez kleju i nożyczek'],
          ['Oszczędnie z papierem', 'wycinaj przy brzegu, resztki wykorzystaj'],
          ['Linijka mierzy…', 'długość'],
          ['Waga mierzy…', 'masę'],
          ['Termometr mierzy…', 'temperaturę'],
        ],
        questions: [
          { id: 'n0a7ey', q: 'Jak bezpiecznie podać koledze nożyczki?', options: ['zamknięte, rączką do przodu', 'otwarte, ostrzem do przodu', 'rzucić przez ławkę'], answer: 0, explain: 'Nożyczki podajemy zamknięte, rączką w stronę kolegi.' },
          { id: 'hzjcb1', q: 'Co robisz po skończonej pracy technicznej?', options: ['sprzątam swoje miejsce', 'zostawiam bałagan na ławce', 'chowam ścinki pod ławkę'], answer: 0, explain: 'Po pracy sprzątamy: ścinki do kosza, narzędzia na miejsce.' },
          { id: 'evn79b', q: 'Dlaczego przy pracy trzeba mieć porządek?', options: ['bo tak jest bezpieczniej', 'bo tak każe kolega', 'bo wtedy praca idzie wolniej'], answer: 0, explain: 'Na zagraconej ławce łatwo się skaleczyć albo coś zepsuć.' },
          { id: 'i8udyu', q: 'Które połączenie jest rozłączne – łatwo je rozdzielić?', options: ['spinacz biurowy', 'klej z tubki', 'zszywki'], answer: 0, explain: 'Spinacz zdejmujesz i kartki są znowu osobno. Klej i zszywki trzymają na stałe.' },
          { id: 'ahsv6n', q: 'Które połączenie jest nierozłączne?', options: ['sklejenie klejem', 'zawiązanie wstążki na kokardkę', 'spięcie spinaczem'], answer: 0, explain: 'Sklejonych kartek nie rozdzielisz bez zniszczenia.' },
          { id: 'iqo7xx', q: 'Co to jest origami?', options: ['składanie figurek z papieru', 'lepienie figurek z plasteliny', 'malowanie obrazków farbami'], answer: 0, explain: 'W origami figurki powstają tylko przez składanie papieru – bez kleju i nożyczek.' },
          { id: 'vurgmq', q: 'Czego nie używamy w origami?', options: ['kleju', 'papieru', 'rąk'], answer: 0, explain: 'Origami to samo składanie papieru, bez kleju, taśmy i zszywek.' },
          { id: 'r8nkvh', q: 'Kiedy czytasz instrukcję?', options: ['przed pracą', 'gdy wszystko zepsujesz', 'nigdy'], answer: 0, explain: 'Instrukcję czytamy przed pracą – mówi, co robić krok po kroku.' },
          { id: '40xfea', q: 'Jak oszczędzać papier, gdy wycinasz?', options: ['wycinam przy brzegu kartki', 'wycinam ze środka kartki', 'biorę nową kartkę na każdy kształt'], answer: 0, explain: 'Wycinaj przy brzegu, a resztki wykorzystaj później.' },
          { id: 'tkwbov', q: 'Czym zmierzysz długość ołówka?', options: ['linijką', 'wagą', 'termometrem'], answer: 0, explain: 'Długość mierzymy linijką.' },
          { id: '01wkxg', q: 'Czym zmierzysz obwód głowy?', options: ['miarką krawiecką', 'wagą łazienkową', 'termometrem'], answer: 0, explain: 'Miarka krawiecka jest miękka – można nią owinąć głowę.' },
          { id: 'xltcko', q: 'Prawda czy fałsz?\nZszywki to połączenie rozłączne.', options: TF, ...PF, answer: 1, explain: 'Zszywki trzymają na stałe – to połączenie nierozłączne.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'urzadzenia',
        name: 'Urządzenia w domu i prąd',
        basis: `${PP}, 3. Stosowanie narzędzi i obsługa urządzeń technicznych, pkt 1 (działanie i funkcja narzędzi i urządzeń w gospodarstwie domowym i szkole), pkt 2 (bezpieczne posługiwanie się urządzeniami); 1. pkt 4 (zdrowie i bezpieczeństwo przy korzystaniu z urządzeń); 2. pkt 1 (instrukcja obsługi), pkt 2 lit. d (przedmioty z wykorzystaniem prądu elektrycznego). Zasady bezpieczeństwa z prądem według Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl, „Bezpieczeństwo w domu”, sprawdzone 2.11.2026): nie dotykać mokrymi rękami pracujących urządzeń i nie wyciągać nimi wtyczek – woda przewodzi prąd; nie ciągnąć za kabel.${KONIEC}`,
        theory: `
          <h3>Urządzenia w domu i w szkole</h3>
          <table><tr><th>urządzenie</th><th>do czego służy</th></tr>
            <tr><td>🧊 lodówka</td><td>przechowuje jedzenie w chłodzie</td></tr>
            <tr><td>🫖 czajnik elektryczny</td><td>gotuje wodę</td></tr>
            <tr><td>👕 pralka</td><td>pierze ubrania</td></tr>
            <tr><td>🧹 odkurzacz</td><td>zbiera kurz i okruchy</td></tr>
            <tr><td>💨 suszarka do włosów</td><td>suszy włosy</td></tr>
            <tr><td>🍞 toster</td><td>opieka kromki chleba</td></tr></table>
          <p>Urządzenia ułatwiają pracę. Działają na <b>prąd</b> – z gniazdka albo z baterii.</p>
          <h3>Ostrożnie z prądem!</h3>
          <ul>
            <li><b>Nie dotykaj mokrymi rękami</b> włączonych urządzeń i wtyczek – woda przewodzi prąd.</li>
            <li>Wyjmując wtyczkę z gniazdka, trzymaj <b>wtyczkę</b>, nie ciągnij za kabel.</li>
            <li>Nie wkładaj niczego do <b>gniazdka</b>.</li>
            <li>Uszkodzony kabel albo iskrzące urządzenie – nie dotykaj, powiedz dorosłemu.</li>
          </ul>
          <p class="tip">Nowe urządzenie? Najpierw dorosły czyta z tobą <b>instrukcję obsługi</b>.</p>
          <h3>Prąd w pracach technicznych</h3>
          <p>Na lekcji możesz zrobić <b>lampion</b> albo świąteczną dekorację ze światełkiem na <b>baterię</b>. Bateria daje słaby, bezpieczny prąd. Prąd z gniazdka jest silny i groźny.</p>`,
        flashcards: [
          ['Lodówka', 'przechowuje jedzenie w chłodzie'],
          ['Pralka', 'pierze ubrania'],
          ['Odkurzacz', 'zbiera kurz i okruchy'],
          ['Czajnik elektryczny', 'gotuje wodę'],
          ['Mokre ręce i prąd', 'nie dotykaj – woda przewodzi prąd'],
          ['Jak wyjąć wtyczkę?', 'trzymasz wtyczkę, nie ciągniesz za kabel'],
          ['Gniazdko', 'nie wkładasz do niego niczego'],
          ['Instrukcja obsługi', 'mówi, jak bezpiecznie używać urządzenia'],
          ['Bateria a gniazdko', 'bateria – słaby prąd; gniazdko – silny i groźny'],
        ],
        questions: [
          { id: 'ciwdi8', q: 'Które urządzenie pierze ubrania?', options: ['pralka', 'lodówka', 'toster'], answer: 0, explain: 'Pralka pierze ubrania.' },
          { id: 'pfdzha', q: 'Do czego służy lodówka?', options: ['chłodzi jedzenie', 'gotuje wodę na herbatę', 'suszy mokre włosy'], answer: 0, explain: 'W lodówce jedzenie dłużej jest świeże.' },
          { id: '6w3xcl', q: 'Które urządzenie zbiera kurz z podłogi?', options: ['odkurzacz', 'czajnik', 'pralka'], answer: 0, explain: 'Odkurzacz wciąga kurz i okruchy.' },
          { id: 'rfi0l4', q: 'Masz mokre ręce, a chcesz włączyć suszarkę. Co robisz?', options: ['najpierw wycieram ręce', 'włączam od razu mokrymi rękami', 'myję ręce jeszcze raz'], answer: 0, explain: 'Woda przewodzi prąd. Urządzeń elektrycznych dotykamy suchymi rękami.' },
          { id: 'dloavi', q: 'Jak bezpiecznie wyjąć wtyczkę z gniazdka?', options: ['trzymam wtyczkę i wyciągam', 'ciągnę mocno za kabel', 'szarpię nogą'], answer: 0, explain: 'Ciągnięcie za kabel może go uszkodzić. Trzymaj wtyczkę.' },
          { id: '5zswl8', q: 'Kabel od lampki jest pęknięty. Co robisz?', options: ['nie dotykam i mówię dorosłemu', 'sam owijam kabel taśmą klejącą', 'włączam lampkę'], answer: 0, explain: 'Uszkodzony kabel jest groźny. Powiedz dorosłemu.' },
          { id: 'ictpla', q: 'Prawda czy fałsz?\nDo gniazdka elektrycznego można włożyć spinacz.', options: TF, ...PF, answer: 1, explain: 'Do gniazdka nie wkładamy niczego – grozi porażenie prądem.' },
          { id: 'xkfvhj', q: 'Gdzie sprawdzisz, jak bezpiecznie używać nowego urządzenia?', options: ['w instrukcji obsługi', 'w książce z bajkami', 'w kalendarzu'], answer: 0, explain: 'Instrukcja obsługi mówi, jak bezpiecznie używać urządzenia.' },
          { id: 'if638b', q: 'Robisz w szkole lampion ze światełkiem. Skąd weźmie prąd?', options: ['z baterii', 'z gniazdka w ścianie', 'z wody'], answer: 0, explain: 'Bateria daje słaby, bezpieczny prąd. Prąd z gniazdka jest groźny.' },
          { id: 'msqp8s', q: 'Które urządzenie gotuje wodę na herbatę?', options: ['czajnik', 'odkurzacz', 'pralka'], answer: 0, explain: 'Wodę gotujemy w czajniku. Ostrożnie – gorąca para parzy!' },
          { id: 'wc9frk', q: 'Prawda czy fałsz?\nUrządzenia elektryczne ułatwiają ludziom pracę w domu.', options: TF, ...PF, answer: 0, explain: 'Pralka, odkurzacz i lodówka oszczędzają nam czas i siły.' },
        ],
      },
    ],
  });
})();
