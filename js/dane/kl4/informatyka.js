/* Informatyka – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, informatyka kl. IV–VI) */
window.SUBJECTS.push({
  id: 'informatyka',
  name: 'Informatyka',
  icon: '💻',
  color: '#3b6fd8',
  topics: [
    {
      id: 'algorytmy',
      name: 'Algorytmy i programowanie',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 1 wym. 1–4 (porządkowanie obiektów, podejście komputacyjne, wyszukiwanie elementów o podanych własnościach, planowanie zachowania robota); dz. 2 wym. 1–4 (algorytmy z poleceniami sekwencyjnymi, warunkowymi i iteracyjnymi, testowanie i poprawianie programu, objaśnianie rozwiązania, sterowanie robotem). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści kl. IV–VI na klasy). Programowanie to praca przy komputerze, której aplikacja nie zastąpi – tu utrwalasz pojęcia.',
      theory: `
        <h3>Co to jest algorytm?</h3>
        <p><b>Algorytm</b> to przepis, jak coś zrobić <b>krok po kroku</b>. Kroki muszą być jasne i ułożone w dobrej kolejności. Algorytmem jest np. przepis na kanapkę albo instrukcja, jak dojść do szkoły.</p>
        <p><b>Program</b> to algorytm zapisany tak, żeby mógł go wykonać komputer albo robot. W szkole programujesz często w <b>środowisku blokowym</b> (np. Scratch) – układasz program z kolorowych klocków-poleceń.</p>
        <h3>Trzy rodzaje poleceń</h3>
        <table>
          <tr><th>Rodzaj</th><th>Co robi</th><th>Przykład</th></tr>
          <tr><td><b>sekwencja</b></td><td>polecenia wykonują się po kolei, jedno po drugim</td><td>idź 1 krok, idź 1 krok, skręć w lewo</td></tr>
          <tr><td><b>warunek</b></td><td>polecenie wykona się tylko wtedy, gdy coś jest prawdą</td><td>jeżeli pada deszcz, to weź parasol</td></tr>
          <tr><td><b>powtarzanie (pętla)</b></td><td>te same polecenia wykonują się kilka razy</td><td>powtórz 4 razy: idź 1 krok</td></tr>
        </table>
        <div class="tip">💡 Pętla skraca program. Zamiast pisać 10 razy „idź 1 krok”, piszesz: „powtórz 10 razy: idź 1 krok”.</div>
        <h3>Robot na planszy</h3>
        <p>Robot porusza się po polach planszy. Strzałka mówi, w którą stronę zrobić <b>jeden krok</b> (na jedno pole): → w prawo, ← w lewo, ↑ w górę, ↓ w dół. Zanim uruchomisz program, prześledź palcem drogę robota pole po polu.</p>
        <h3>Porządkowanie i wyszukiwanie</h3>
        <ul>
          <li><b>Porządkowanie</b> (sortowanie) – układanie rzeczy według jakiejś cechy: liczby od najmniejszej do największej, słowa w kolejności alfabetycznej, uczniów według wzrostu.</li>
          <li><b>Wyszukiwanie</b> – znajdowanie w zbiorze elementów o podanej cesze, np. wszystkich liczb parzystych albo wszystkich czerwonych klocków.</li>
        </ul>
        <p>Jak ułożyć słowa alfabetycznie? Patrzysz na <b>pierwszą literę</b>. Gdy jest taka sama – na drugą: <i>kot, koza</i> (t jest przed z).</p>
        <h3>Błędy i testowanie</h3>
        <p><b>Błąd</b> w programie sprawia, że program działa inaczej, niż chcesz. <b>Testowanie</b> to uruchamianie programu i sprawdzanie, czy robi to, co miał robić. Gdy znajdziesz błąd, <b>poprawiasz</b> program i testujesz jeszcze raz.</p>
        <div class="tip">💡 Duży problem dziel na małe części. Każdą część rozwiąż osobno – tak myśli informatyk.</div>
      `,
      flashcards: [
        ['Algorytm', 'Przepis, jak coś zrobić krok po kroku, w dobrej kolejności'],
        ['Program', 'Algorytm zapisany tak, żeby mógł go wykonać komputer albo robot'],
        ['Sekwencja', 'Polecenia wykonywane po kolei, jedno po drugim'],
        ['Warunek', '„Jeżeli…, to…” – polecenie wykona się tylko wtedy, gdy coś jest prawdą'],
        ['Pętla (powtarzanie)', 'Te same polecenia wykonywane kilka razy, np. „powtórz 4 razy”'],
        ['Środowisko blokowe', 'Program do programowania, w którym układasz polecenia z klocków, np. Scratch'],
        ['Porządkowanie (sortowanie)', 'Układanie rzeczy według cechy, np. liczb od najmniejszej do największej'],
        ['Wyszukiwanie', 'Znajdowanie w zbiorze elementów o podanej cesze'],
        ['Błąd w programie', 'Program działa inaczej, niż chcieliśmy'],
        ['Testowanie', 'Uruchamianie programu i sprawdzanie, czy działa tak, jak miał'],
      ],
      questions: [
        { id: '6vwp94', q: 'Co to jest algorytm?', options: ['przepis, jak coś zrobić krok po kroku', 'część komputera, np. monitor albo mysz', 'rodzaj gry komputerowej dla dzieci', 'nazwa strony z grami w internecie'], answer: 0, explain: 'Algorytm to uporządkowany opis kroków, które prowadzą do celu.' },
        { id: 'r1jgul', q: 'Który przykład to polecenie z warunkiem?', options: ['jeżeli jest zimno, to załóż czapkę', 'powtórz 3 razy: klaśnij w dłonie', 'idź 2 kroki do przodu i usiądź', 'narysuj kwadrat, a potem koło'], answer: 0, explain: 'Warunek ma postać „jeżeli…, to…” – polecenie wykona się tylko wtedy, gdy warunek jest spełniony.' },
        { id: '9n96pt', q: 'Który przykład to powtarzanie (pętla)?', options: ['powtórz 5 razy: podskocz', 'jeżeli pada, weź parasol', 'idź 1 krok, potem skręć', 'zatrzymaj się'], answer: 0, explain: 'Pętla to wykonanie tych samych poleceń wiele razy.' },
        { id: '59bq6p', q: 'Program: „powtórz 4 razy: idź 2 kroki”. Ile kroków zrobi robot?', options: ['8', '6', '4', '2'], answer: 0, explain: '4 razy po 2 kroki: 4 · 2 = 8 kroków.' },
        { id: 'wrenr0', q: 'Ułóż słowa alfabetycznie: kot, arbuz, mleko, banan. Które słowo będzie trzecie?', options: ['kot', 'mleko', 'banan', 'arbuz'], answer: 0, explain: 'Kolejność: arbuz, banan, kot, mleko. Trzecie jest „kot”.' },
        { id: 'qst4dc', q: 'Które słowo jest pierwsze w kolejności alfabetycznej?', options: ['kasa', 'koza', 'kot', 'kura'], answer: 0, explain: 'Wszystkie zaczynają się na „k”, więc patrzymy na drugą literę: a, o, o, u. Najwcześniej w alfabecie jest „a” – kasa.' },
        { id: 'pf6u4j', q: 'Uporządkuj od najmniejszej: 15, 8, 23, 4. Która liczba będzie druga?', options: ['8', '4', '15', '23'], answer: 0, explain: 'Kolejność: 4, 8, 15, 23. Druga jest 8.' },
        { id: 'tq5sn4', q: 'Wyszukaj liczby parzyste w zbiorze: 3, 6, 9, 10, 15. Ile ich jest?', options: ['2', '1', '3', '5'], answer: 0, explain: 'Parzyste są 6 i 10 – to dwie liczby.' },
        {
          id: '3e4j91',
          q: 'Robot 🤖 idzie o jedno pole w kierunku każdej strzałki. Który program doprowadzi go do gwiazdki ⭐?',
          svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Plansza 5 na 4 pola. Robot stoi w lewym dolnym rogu. Gwiazdka jest trzy pola w prawo i dwa pola w górę od robota.">
      <g class="ln-thin">
        <line x1="35" y1="10" x2="285" y2="10"/><line x1="35" y1="60" x2="285" y2="60"/><line x1="35" y1="110" x2="285" y2="110"/><line x1="35" y1="160" x2="285" y2="160"/><line x1="35" y1="210" x2="285" y2="210"/>
        <line x1="35" y1="10" x2="35" y2="210"/><line x1="85" y1="10" x2="85" y2="210"/><line x1="135" y1="10" x2="135" y2="210"/><line x1="185" y1="10" x2="185" y2="210"/><line x1="235" y1="10" x2="235" y2="210"/><line x1="285" y1="10" x2="285" y2="210"/>
      </g>
      <rect x="36" y="161" width="48" height="48" class="f1"/>
      <rect x="186" y="61" width="48" height="48" class="f4"/>
      <text x="60" y="193" class="tx-b" text-anchor="middle">🤖</text>
      <text x="210" y="93" class="tx-b" text-anchor="middle">⭐</text>
    </svg>`,
          options: ['→ → → ↑ ↑', '→ → ↑ ↑', '↑ ↑ ↑ → → →', '→ → → ↓ ↓'],
          answer: 0,
          explain: 'Gwiazdka jest 3 pola w prawo i 2 pola w górę od robota: → → → ↑ ↑. Program „→ → ↑ ↑” kończy o jedno pole za wcześnie, a „↓” prowadzi poza planszę.',
        },
        {
          id: 'fb96u4',
          q: 'Robot 🤖 wykonuje program: „powtórz 3 razy: → ↑”. Na którym polu się zatrzyma?',
          svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Plansza 5 na 4 pola. Robot stoi w lewym dolnym rogu. Litery: A – czwarta kolumna, górny rząd; B – czwarta kolumna, dolny rząd; C – pierwsza kolumna, górny rząd; D – trzecia kolumna, drugi rząd od góry.">
      <g class="ln-thin">
        <line x1="35" y1="10" x2="285" y2="10"/><line x1="35" y1="60" x2="285" y2="60"/><line x1="35" y1="110" x2="285" y2="110"/><line x1="35" y1="160" x2="285" y2="160"/><line x1="35" y1="210" x2="285" y2="210"/>
        <line x1="35" y1="10" x2="35" y2="210"/><line x1="85" y1="10" x2="85" y2="210"/><line x1="135" y1="10" x2="135" y2="210"/><line x1="185" y1="10" x2="185" y2="210"/><line x1="235" y1="10" x2="235" y2="210"/><line x1="285" y1="10" x2="285" y2="210"/>
      </g>
      <rect x="36" y="161" width="48" height="48" class="f1"/>
      <text x="60" y="193" class="tx-b" text-anchor="middle">🤖</text>
      <text x="210" y="42" class="tx-b t2" text-anchor="middle">A</text>
      <text x="210" y="192" class="tx-b t2" text-anchor="middle">B</text>
      <text x="60" y="42" class="tx-b t2" text-anchor="middle">C</text>
      <text x="160" y="92" class="tx-b t2" text-anchor="middle">D</text>
    </svg>`,
          options: ['A', 'B', 'C', 'D'],
          answer: 0,
          explain: 'Każde powtórzenie to 1 pole w prawo i 1 pole w górę. Po 3 powtórzeniach robot jest 3 pola w prawo i 3 pola w górę od startu – na polu A. Pole D to miejsce po 2 powtórzeniach.',
        },
        { id: 's43dju', q: 'Program miał narysować kwadrat, a narysował trójkąt. Co to znaczy?', options: ['w programie jest błąd i trzeba go poprawić', 'komputer jest zepsuty i trzeba kupić nowy', 'program działa dobrze i nic nie trzeba robić', 'trzeba wyłączyć komputer i iść na przerwę'], answer: 0, explain: 'Program działa inaczej, niż chcieliśmy – to błąd. Szukamy go, poprawiamy i testujemy jeszcze raz.' },
        { id: '6ptxd2', q: 'Co to jest testowanie programu?', options: ['uruchamianie programu i sprawdzanie, czy działa tak, jak miał', 'pisanie całego programu od nowa, bez uruchamiania go', 'przepisywanie programu do zeszytu ładnymi literami', 'drukowanie programu na kartce, żeby powiesić go w klasie'], answer: 0, explain: 'Testując, porównujesz działanie programu z tym, co zaplanowałeś.' },
        { id: '7f9u6w', q: 'Prawda czy fałsz?\nW algorytmie kolejność kroków nie ma znaczenia.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Kolejność jest ważna. Najpierw smarujesz chleb masłem, a dopiero potem kładziesz ser – odwrotnie się nie da.' },
        { id: 'vhhjd1', q: 'Prawda czy fałsz?\nPętla pozwala skrócić program, w którym te same polecenia się powtarzają.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Zamiast pisać to samo wiele razy, używasz polecenia „powtórz”.' },
        { id: 'zbe5hl', q: 'Jak informatyk radzi sobie z dużym, trudnym problemem?', options: ['dzieli go na mniejsze części i rozwiązuje je po kolei', 'od razu się poddaje i zostawia problem innym', 'zgaduje odpowiedź i nie sprawdza, czy jest dobra', 'czeka, aż problem sam zniknie'], answer: 0, explain: 'Podział na mniejsze części to ważna część myślenia komputacyjnego.' },
        { id: 'ml3ndj', q: 'W jakim środowisku układasz program z kolorowych klocków-poleceń?', options: ['w środowisku blokowym, np. Scratch', 'w kalkulatorze w telefonie', 'w edytorze tekstu, np. do wypracowań', 'w przeglądarce zdjęć na komputerze'], answer: 0, explain: 'W środowisku blokowym polecenia mają postać klocków, które łączysz w program.' },
      ],
    },
    {
      id: 'komputer-i-siec',
      name: 'Komputer, sieć i pliki',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 4 wym. 1 (celowe i bezpieczne korzystanie z urządzeń cyfrowych, w tym z zestawu komputerowego), wym. 2 (funkcjonowanie sieci komputerowej), wym. 5 (wpływ technologii na środowisko, oszczędzanie energii); dz. 3 wym. 7 (zapisywanie pracy lokalnie i w chmurze). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści kl. IV–VI na klasy).',
      theory: `
        <h3>Zestaw komputerowy</h3>
        <p>Komputer to nie tylko ekran. W skład <b>zestawu komputerowego</b> wchodzą: <b>jednostka centralna</b> (obudowa z najważniejszymi częściami komputera), <b>monitor</b>, <b>klawiatura</b>, <b>mysz</b>, a często też głośniki, słuchawki, mikrofon i drukarka. W laptopie wiele z tych części jest w jednej obudowie.</p>
        <table>
          <tr><th>Urządzenia wejścia</th><th>Urządzenia wyjścia</th></tr>
          <tr><td>wprowadzają informacje <b>do</b> komputera</td><td>pokazują informacje <b>z</b> komputera</td></tr>
          <tr><td>klawiatura, mysz, mikrofon, skaner</td><td>monitor, głośniki, słuchawki, drukarka</td></tr>
        </table>
        <h3>Bezpieczna praca przy komputerze</h3>
        <ul>
          <li>Siedź prosto, oprzyj plecy, stopy postaw na podłodze.</li>
          <li>Monitor ustaw na wprost, nie siedź za blisko ekranu.</li>
          <li>Rób <b>przerwy</b>: wstań, poruszaj się, popatrz w dal – oczy odpoczną.</li>
          <li>Nie jedz i nie pij przy klawiaturze. Nie dotykaj kabli i gniazdek mokrymi rękami.</li>
        </ul>
        <h3>Sieć i internet</h3>
        <p><b>Sieć komputerowa</b> to połączone ze sobą komputery i inne urządzenia. Dzięki niej mogą wymieniać informacje. <b>Internet</b> to ogromna sieć, która łączy sieci z całego świata. Dzięki niemu wyszukujesz informacje, wysyłasz wiadomości, oglądasz filmy.</p>
        <p>W domu urządzenia łączą się z internetem zwykle przez <b>router</b> – kablem albo bezprzewodowo, przez <b>Wi‑Fi</b>.</p>
        <h3>Pliki i foldery</h3>
        <ul>
          <li><b>Plik</b> – zapisana praca: rysunek, tekst, prezentacja. Każdy plik ma <b>nazwę</b>, np. <i>moj_rysunek.png</i>.</li>
          <li><b>Folder</b> – „teczka” na pliki. Pomaga utrzymać porządek, np. folder „Informatyka”.</li>
          <li>Zapis <b>lokalny</b> – na dysku twojego komputera albo na pendrivie.</li>
          <li>Zapis <b>w chmurze</b> – na dysku w internecie. Otworzysz plik na innym urządzeniu po zalogowaniu się na swoje konto.</li>
        </ul>
        <div class="tip">💡 Zapisuj pracę często i nadawaj plikom nazwy, które mówią, co w nich jest.</div>
        <h3>Oszczędzanie energii</h3>
        <p>Komputery i inne urządzenia zużywają prąd, a produkcja prądu wpływa na środowisko. Wyłączaj komputer i monitor, gdy z nich nie korzystasz. Nie zostawiaj ładowarki w gniazdku bez potrzeby. Zepsutego sprzętu nie wyrzucaj do zwykłego kosza – oddaj go do punktu zbiórki elektroodpadów.</p>
      `,
      flashcards: [
        ['Jednostka centralna', 'Obudowa z najważniejszymi częściami komputera'],
        ['Urządzenie wejścia', 'Wprowadza informacje do komputera: klawiatura, mysz, mikrofon, skaner'],
        ['Urządzenie wyjścia', 'Pokazuje informacje z komputera: monitor, głośniki, drukarka'],
        ['Sieć komputerowa', 'Połączone urządzenia, które wymieniają informacje'],
        ['Internet', 'Ogromna sieć łącząca sieci z całego świata'],
        ['Wi‑Fi', 'Bezprzewodowe połączenie z siecią'],
        ['Plik', 'Zapisana praca, np. rysunek albo tekst; ma swoją nazwę'],
        ['Folder', '„Teczka” na pliki, pomaga utrzymać porządek'],
        ['Zapis w chmurze', 'Zapis na dysku w internecie – plik otworzysz na innym urządzeniu po zalogowaniu'],
        ['Oszczędzanie energii', 'Wyłączaj komputer i monitor, gdy z nich nie korzystasz'],
      ],
      questions: [
        { id: 'sktiue', q: 'Które urządzenie jest urządzeniem wejścia?', options: ['klawiatura', 'monitor', 'głośniki', 'drukarka'], answer: 0, explain: 'Klawiaturą wprowadzasz informacje do komputera. Pozostałe urządzenia pokazują informacje z komputera.' },
        { id: '3x77bu', q: 'Które urządzenie jest urządzeniem wyjścia?', options: ['drukarka', 'mysz', 'mikrofon', 'skaner'], answer: 0, explain: 'Drukarka wyprowadza informacje z komputera na papier.' },
        { id: 'kf91qg', q: 'Którym urządzeniem nagrasz swój głos na komputerze?', options: ['mikrofonem', 'monitorem', 'drukarką', 'głośnikiem'], answer: 0, explain: 'Mikrofon zamienia dźwięk na informację dla komputera – to urządzenie wejścia.' },
        { id: '9s41v2', q: 'Jak nazywa się obudowa z najważniejszymi częściami komputera?', options: ['jednostka centralna', 'monitor z głośnikami', 'router Wi‑Fi', 'przenośny pendrive'], answer: 0, explain: 'W jednostce centralnej są najważniejsze części komputera.' },
        { id: '2j9wwz', q: 'Które zachowanie przy komputerze jest prawidłowe?', options: ['co jakiś czas wstajesz i robisz przerwę', 'pijesz sok nad klawiaturą', 'siedzisz zgarbiony z nosem przy ekranie', 'dotykasz gniazdka mokrą ręką'], answer: 0, explain: 'Przerwy dają odpocząć oczom i plecom. Pozostałe zachowania są szkodliwe albo niebezpieczne.' },
        { id: 'o5t6rp', q: 'Co to jest sieć komputerowa?', options: ['połączone urządzenia, które wymieniają informacje', 'kabel, który daje prąd komputerowi', 'gra komputerowa dla kilku graczy naraz', 'nazwa programu do rysowania i malowania'], answer: 0, explain: 'W sieci urządzenia są połączone i mogą przesyłać sobie informacje.' },
        { id: 'rh37qs', q: 'Co to jest internet?', options: ['ogromna sieć łącząca sieci z całego świata', 'jeden komputer w szkolnej pracowni', 'program do pisania tekstów i listów', 'rodzaj drukarki, która drukuje kolorowo'], answer: 0, explain: 'Internet łączy sieci komputerowe na całym świecie.' },
        { id: 'qjjsoa', q: 'Co oznacza Wi‑Fi?', options: ['bezprzewodowe połączenie z siecią', 'połączenie wyłącznie kablem', 'rodzaj klawiatury', 'program antywirusowy'], answer: 0, explain: 'Wi‑Fi pozwala łączyć się z siecią bez kabla.' },
        { id: 'y0fyyp', q: 'Do czego służy folder?', options: ['do porządkowania plików', 'do drukowania', 'do łączenia z internetem', 'do nagrywania dźwięku'], answer: 0, explain: 'Folder to „teczka”, w której trzymasz pliki na jeden temat.' },
        { id: '32vuf3', q: 'Ola zapisała rysunek w chmurze. Co to znaczy?', options: ['otworzy go na innym urządzeniu po zalogowaniu', 'rysunek jest tylko na jej pendrivie i nigdzie indziej', 'rysunek wydrukował się na szkolnej drukarce', 'rysunek został na zawsze usunięty'], answer: 0, explain: 'Chmura to dysk w internecie. Pliki z chmury otworzysz na różnych urządzeniach po zalogowaniu.' },
        { id: 'wliga4', q: 'Która nazwa pliku najlepiej mówi, co jest w środku?', options: ['las_jesienia_rysunek', 'plik1_kopia_kopia', 'asdfgh_qwerty', 'nowy_dokument_2'], answer: 0, explain: 'Dobra nazwa opisuje zawartość – łatwo potem znaleźć plik.' },
        { id: 's1u8s0', q: 'Prawda czy fałsz?\nZapis lokalny oznacza zapis na dysku twojego komputera albo na pendrivie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Lokalnie – czyli na urządzeniu, które masz przy sobie.' },
        { id: '6b980a', q: 'Jak oszczędzać energię przy komputerze?', options: ['wyłączać komputer i monitor, gdy z nich nie korzystasz', 'zostawiać komputer włączony na całą noc', 'zostawiać ładowarkę w gniazdku bez telefonu', 'ustawiać najjaśniejszy ekran'], answer: 0, explain: 'Urządzenie wyłączone nie zużywa prądu, a to dobre dla środowiska.' },
        { id: 'rhe4fa', q: 'Co zrobić z zepsutym starym komputerem?', options: ['oddać do punktu zbiórki elektroodpadów', 'wyrzucić do zwykłego kosza na śmieci', 'wywieźć do lasu i zostawić pod drzewem', 'spalić w ognisku'], answer: 0, explain: 'Elektroodpady oddajemy do specjalnych punktów, żeby nie szkodziły środowisku.' },
        { id: 'iqxw41', q: 'Prawda czy fałsz?\nDzięki routerowi urządzenia w domu mogą łączyć się z internetem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Router łączy domowe urządzenia z internetem – kablem albo przez Wi‑Fi.' },
      ],
    },
    {
      id: 'programy',
      name: 'Grafika, tekst, arkusz, prezentacja i AI',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 3 wym. 1 (edytor grafiki), wym. 2 (arkusz kalkulacyjny: proste obliczenia i wykresy), wym. 3 (dokumenty tekstowe: formatowanie, wyliczenia, tabele, ilustracje), wym. 4 (prezentacje), wym. 5 (materiały multimedialne), wym. 6 (proste narzędzia sztucznej inteligencji); dz. 4 wym. 4 (trenowanie prostego modelu AI, wpływ danych na wyniki). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści kl. IV–VI na klasy). Praca w programach wymaga ćwiczeń przy komputerze – aplikacja utrwala tylko pojęcia.',
      theory: `
        <h3>Edytor grafiki – rysujesz na komputerze</h3>
        <table>
          <tr><th>Narzędzie</th><th>Do czego służy</th></tr>
          <tr><td>pędzel, ołówek</td><td>rysowanie linii odręcznie</td></tr>
          <tr><td>wypełnienie (wiaderko)</td><td>zamalowanie zamkniętego obszaru jednym kolorem</td></tr>
          <tr><td>gumka</td><td>wymazywanie</td></tr>
          <tr><td>zaznaczanie</td><td>wybranie fragmentu rysunku, żeby go przesunąć, skopiować albo usunąć</td></tr>
          <tr><td>kopiuj i wklej</td><td>powielenie zaznaczonego fragmentu (często skróty <b>Ctrl+C</b> i <b>Ctrl+V</b>)</td></tr>
        </table>
        <div class="tip">💡 Wypełnienie „wycieka”, gdy kształt nie jest zamknięty – wtedy zamaluje się całe tło.</div>
        <h3>Edytor tekstu – piszesz i formatujesz</h3>
        <p><b>Formatowanie</b> to zmiana wyglądu tekstu, a nie jego treści:</p>
        <ul>
          <li><b>pogrubienie</b>, <i>kursywa</i> (pochylenie), <u>podkreślenie</u>,</li>
          <li>wyrównanie: do lewej, do środka (wyśrodkowanie), do prawej,</li>
          <li>lista <b>wypunktowana</b> (kropki) i <b>numerowana</b> (1., 2., 3.),</li>
          <li><b>tabela</b> (wiersze i kolumny) i wstawiony <b>obrazek</b>.</li>
        </ul>
        <h3>Arkusz kalkulacyjny – liczy za ciebie</h3>
        <ul>
          <li>Arkusz to tabela z <b>komórkami</b>. <b>Kolumny</b> mają litery (A, B, C…), <b>wiersze</b> – numery (1, 2, 3…).</li>
          <li><b>Adres komórki</b> to litera kolumny i numer wiersza, np. <b>B3</b> – kolumna B, wiersz 3.</li>
          <li><b>Formuła</b> zaczyna się od znaku <b>=</b>. Np. <b>=A1+A2</b> dodaje liczby z komórek A1 i A2. Gdy zmienisz liczbę w A1, wynik sam się przeliczy.</li>
          <li>Z danych w arkuszu zrobisz <b>wykres</b>, np. słupkowy – łatwiej wtedy porównać liczby.</li>
        </ul>
        <h3>Prezentacja</h3>
        <p>Prezentacja składa się ze <b>slajdów</b>. Dobry slajd ma tytuł, mało tekstu (najważniejsze hasła), duże, czytelne litery i obrazek, który pasuje do tematu. Resztę mówisz sam.</p>
        <h3>Sztuczna inteligencja (AI)</h3>
        <ul>
          <li>Proste narzędzia <b>AI</b> potrafią na twoje polecenie stworzyć obrazek albo tekst.</li>
          <li>AI <b>może się mylić</b> i podawać nieprawdziwe informacje. Sprawdzaj je w innych źródłach, np. w podręczniku.</li>
          <li>Model AI <b>uczy się na przykładach</b> (danych). Od danych zależy wynik: model uczony tylko na zdjęciach kotów nie rozpozna psa.</li>
        </ul>
      `,
      flashcards: [
        ['Wypełnienie (wiaderko)', 'Zamalowuje zamknięty obszar jednym kolorem'],
        ['Zaznaczanie', 'Wybranie fragmentu, żeby go przesunąć, skopiować albo usunąć'],
        ['Formatowanie tekstu', 'Zmiana wyglądu tekstu: pogrubienie, kursywa, podkreślenie, wyrównanie'],
        ['Kursywa', 'Pochylone litery'],
        ['Lista numerowana', 'Kolejne punkty oznaczone liczbami: 1., 2., 3.'],
        ['Komórka arkusza', 'Pole tabeli w arkuszu; ma adres, np. B3'],
        ['Adres komórki', 'Litera kolumny i numer wiersza, np. C2'],
        ['Formuła w arkuszu', 'Zaczyna się od =, np. =A1+A2'],
        ['Slajd', 'Jedna „strona” prezentacji'],
        ['Sztuczna inteligencja (AI)', 'Program, który uczy się na przykładach; może się mylić, więc sprawdzaj wyniki'],
      ],
      questions: [
        { id: 'eulggz', q: 'Którym narzędziem edytora grafiki zamalujesz cały zamknięty obszar jednym kolorem?', options: ['wypełnieniem (wiaderkiem)', 'gumką (wymazywaniem)', 'zaznaczaniem fragmentu', 'narzędziem do pisania tekstu'], answer: 0, explain: 'Wypełnienie zamalowuje zamknięty obszar jednym kliknięciem.' },
        { id: 'q9hzmu', q: 'Kliknąłeś wiaderkiem w środek koła, a zamalowało się całe tło. Dlaczego?', options: ['linia koła nie była zamknięta', 'wybrałeś za mały pędzel', 'komputer jest zepsuty', 'koło było za duże'], answer: 0, explain: 'Przez przerwę w linii kolor „wycieka” na zewnątrz kształtu.' },
        { id: 'su0qpr', q: 'Chcesz narysować 5 jednakowych domków. Co zrobisz najszybciej?', options: ['narysujesz jeden, zaznaczysz go, skopiujesz i wkleisz', 'narysujesz każdy od nowa, kreska po kresce', 'zmażesz wszystko gumką i zaczniesz od nowa', 'wydrukujesz pusty rysunek bez domków'], answer: 0, explain: 'Kopiowanie i wklejanie powiela zaznaczony fragment.' },
        { id: 'xaxxr2', q: 'Co to jest formatowanie tekstu?', options: ['zmiana wyglądu tekstu, np. pogrubienie', 'usunięcie całego tekstu z dokumentu', 'zmiana treści tekstu, np. dopisanie zdań', 'wyłączenie komputera po pisaniu'], answer: 0, explain: 'Formatowanie zmienia wygląd, a treść zostaje ta sama.' },
        { id: 'f02c3x', q: 'Jak nazywa się pochylenie liter?', options: ['kursywa', 'pogrubienie', 'podkreślenie', 'wyśrodkowanie'], answer: 0, explain: 'Kursywa to litery pochylone w prawo.' },
        { id: '0rovcn', q: 'Chcesz wypisać w punktach: 1. jabłka, 2. mleko, 3. chleb. Jakiej listy użyjesz?', options: ['numerowanej', 'wypunktowanej', 'żadnej – wstawisz tabelę', 'kursywy'], answer: 0, explain: 'Lista z liczbami 1., 2., 3. to lista numerowana.' },
        {
          id: '05a01p',
          q: 'Jaki adres ma zaznaczona komórka?',
          svg: `<svg viewBox="0 0 320 190" role="img" aria-label="Fragment arkusza kalkulacyjnego: kolumny A, B, C i wiersze 1 do 4. Zaznaczona jest komórka w kolumnie B i wierszu 3.">
      <rect x="20" y="10" width="40" height="34" class="f5"/>
      <rect x="60" y="10" width="80" height="34" class="f5"/><rect x="140" y="10" width="80" height="34" class="f5"/><rect x="220" y="10" width="80" height="34" class="f5"/>
      <rect x="20" y="44" width="40" height="34" class="f5"/><rect x="20" y="78" width="40" height="34" class="f5"/><rect x="20" y="112" width="40" height="34" class="f5"/><rect x="20" y="146" width="40" height="34" class="f5"/>
      <rect x="140" y="112" width="80" height="34" class="f4 s2 sw"/>
      <g class="ln-thin">
        <line x1="20" y1="10" x2="300" y2="10"/><line x1="20" y1="44" x2="300" y2="44"/><line x1="20" y1="78" x2="300" y2="78"/><line x1="20" y1="112" x2="300" y2="112"/><line x1="20" y1="146" x2="300" y2="146"/><line x1="20" y1="180" x2="300" y2="180"/>
        <line x1="20" y1="10" x2="20" y2="180"/><line x1="60" y1="10" x2="60" y2="180"/><line x1="140" y1="10" x2="140" y2="180"/><line x1="220" y1="10" x2="220" y2="180"/><line x1="300" y1="10" x2="300" y2="180"/>
      </g>
      <text x="100" y="33" class="tx-b" text-anchor="middle">A</text>
      <text x="180" y="33" class="tx-b" text-anchor="middle">B</text>
      <text x="260" y="33" class="tx-b" text-anchor="middle">C</text>
      <text x="40" y="67" class="tx-b" text-anchor="middle">1</text>
      <text x="40" y="101" class="tx-b" text-anchor="middle">2</text>
      <text x="40" y="135" class="tx-b" text-anchor="middle">3</text>
      <text x="40" y="169" class="tx-b" text-anchor="middle">4</text>
    </svg>`,
          options: ['B3', '3B', 'C3', 'B2'],
          answer: 0,
          explain: 'Adres to najpierw litera kolumny, potem numer wiersza: kolumna B, wiersz 3 – B3.',
        },
        { id: '94j9w4', q: 'W komórce A1 jest liczba 5, a w A2 liczba 7. Co pokaże komórka z formułą =A1+A2?', options: ['12', '57', 'A1+A2', '2'], answer: 0, explain: 'Formuła dodaje liczby z komórek: 5 + 7 = 12.' },
        { id: 'ct6bq6', q: 'Od jakiego znaku zaczyna się formuła w arkuszu kalkulacyjnym?', options: ['=', '+', '?', '#'], answer: 0, explain: 'Znak = mówi arkuszowi, że ma coś obliczyć.' },
        { id: 'et8fy0', q: 'Masz w arkuszu liczbę uczniów w klasach 4a, 4b i 4c. Jak najłatwiej je porównać?', options: ['zrobić wykres słupkowy', 'pogrubić wszystkie liczby', 'zmienić czcionkę na większą', 'usunąć tabelę'], answer: 0, explain: 'Na wykresie od razu widać, który słupek jest najwyższy.' },
        { id: 'mp5urz', q: 'Który slajd prezentacji jest najlepiej przygotowany?', options: ['tytuł, kilka haseł, duże litery i pasujący obrazek', 'cała strona drobnego tekstu bez żadnego obrazka', 'same kolorowe napisy, bez tytułu i bez porządku', 'jasnożółte litery na białym tle'], answer: 0, explain: 'Slajd ma być czytelny: mało tekstu, duże litery, dobry kontrast.' },
        { id: '3hapr9', q: 'Prawda czy fałsz?\nNarzędzie AI zawsze podaje prawdziwe informacje.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'AI może się mylić. Ważne informacje sprawdzaj w innych źródłach.' },
        { id: 'w5jyeo', q: 'Model AI uczono rozpoznawać zwierzęta, ale pokazywano mu tylko zdjęcia kotów. Co się stanie, gdy zobaczy psa?', options: ['prawdopodobnie go nie rozpozna', 'na pewno rozpozna psa', 'sam nauczy się bez przykładów', 'zmieni zdjęcie w kota'], answer: 0, explain: 'Model uczy się na przykładach. Bez zdjęć psów nie ma skąd wiedzieć, jak wygląda pies.' },
        { id: 'd9rbwq', q: 'AI napisało ci tekst o wielorybach do referatu. Co powinieneś zrobić?', options: ['sprawdzić informacje w innym źródle', 'od razu oddać tekst jako swój', 'uwierzyć we wszystko bez sprawdzania', 'usunąć wszystkie liczby'], answer: 0, explain: 'AI może podać błędne informacje, więc je sprawdzasz.' },
        { id: 'nrq72p', q: 'Prawda czy fałsz?\nGdy zmienisz liczbę w komórce A1, wynik formuły =A1+A2 sam się przeliczy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To zaleta arkusza – formuły przeliczają się automatycznie.' },
      ],
    },
    {
      id: 'bezpiecznie-w-sieci',
      name: 'Bezpiecznie i kulturalnie w sieci',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 4 wym. 3 (podejrzane treści on-line, podstawowe działania obronne); dz. 5 wym. 1–7 (współpraca w narzędziach cyfrowych, netykieta i regulaminy, bezpieczne i higieniczne korzystanie z technologii, zagrożenia cyfrowe i szukanie wsparcia, ochrona danych osobowych – hasła i ustawienia prywatności, prawa autorskie, licencje oprogramowania). Wybór na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści kl. IV–VI na klasy).',
      theory: `
        <h3>Netykieta – dobre maniery w internecie</h3>
        <ul>
          <li>Pisz grzecznie, tak jak mówisz do kogoś twarzą w twarz.</li>
          <li>Nie obrażaj, nie wyśmiewaj, nie rozsyłaj cudzych zdjęć bez zgody.</li>
          <li>NIE PISZ SAMYMI WIELKIMI LITERAMI – to jak krzyk.</li>
          <li>Przestrzegaj <b>regulaminu</b> strony czy gry – to zasady, które ustalił jej właściciel.</li>
        </ul>
        <h3>Silne hasło</h3>
        <ul>
          <li><b>Długie</b>, z małymi i wielkimi literami, cyframi i znakami.</li>
          <li>Nie jest twoim imieniem, datą urodzenia ani „12345”.</li>
          <li><b>Różne hasła</b> do różnych kont.</li>
          <li><b>Nie podawaj hasła nikomu</b> poza rodzicem lub opiekunem – nawet przyjacielowi.</li>
        </ul>
        <h3>Dane osobowe</h3>
        <p><b>Dane osobowe</b> to informacje o tobie: imię i nazwisko, adres, numer telefonu, szkoła, zdjęcia. Nie podawaj ich obcym w internecie. W <b>ustawieniach prywatności</b> wybierz, kto widzi twoje wpisy i zdjęcia.</p>
        <h3>Podejrzane wiadomości</h3>
        <p>Uważaj na wiadomości typu „Wygrałeś telefon! Kliknij link”, prośby o hasło albo dane, linki od nieznajomych. <b>Nie klikaj</b>, nie odpowiadaj, pokaż wiadomość dorosłemu.</p>
        <h3>Cyberprzemoc – gdzie szukać pomocy</h3>
        <p><b>Cyberprzemoc</b> to dokuczanie, obrażanie, straszenie lub ośmieszanie kogoś w internecie. Gdy cię to spotka albo to widzisz:</p>
        <ul>
          <li>nie odpowiadaj agresją, zrób zrzut ekranu (dowód),</li>
          <li>powiedz rodzicowi, nauczycielowi lub pedagogowi szkolnemu,</li>
          <li>możesz zadzwonić na <b>telefon zaufania dla dzieci i młodzieży: 116 111</b>.</li>
        </ul>
        <h3>Higiena cyfrowa</h3>
        <p>Rób przerwy od ekranu, nie korzystaj z telefonu tuż przed snem, spędzaj czas także z ludźmi i na ruchu.</p>
        <h3>Prawo autorskie i licencje</h3>
        <ul>
          <li>Autor ma prawa do swojego <b>utworu</b> (tekstu, zdjęcia, muzyki, rysunku). Nie podpisuj cudzej pracy swoim imieniem.</li>
          <li>Gdy korzystasz z cudzego obrazka czy tekstu, <b>podaj źródło</b> (autora i skąd pochodzi).</li>
          <li><b>Licencja</b> to zasady korzystania z programu ustalone przez jego twórcę. Niektóre programy są darmowe, za inne trzeba zapłacić. Instaluj programy tylko za zgodą dorosłego i z pewnych źródeł.</li>
        </ul>
      `,
      flashcards: [
        ['Netykieta', 'Zasady dobrego zachowania w internecie'],
        ['Silne hasło', 'Długie, z literami małymi i wielkimi, cyframi i znakami; różne do różnych kont'],
        ['Komu wolno podać hasło?', 'Nikomu poza rodzicem lub opiekunem'],
        ['Dane osobowe', 'Informacje o tobie: imię i nazwisko, adres, telefon, szkoła, zdjęcia'],
        ['Ustawienia prywatności', 'Wybierasz w nich, kto widzi twoje wpisy i zdjęcia'],
        ['Cyberprzemoc', 'Dokuczanie, obrażanie, straszenie lub ośmieszanie kogoś w internecie'],
        ['Telefon zaufania dla dzieci i młodzieży', '116 111'],
        ['Prawo autorskie', 'Autor ma prawa do swojego utworu; korzystając z niego, podajesz źródło'],
        ['Licencja programu', 'Zasady korzystania z programu ustalone przez twórcę'],
        ['Podejrzana wiadomość', '„Wygrałeś! Kliknij link” – nie klikaj, pokaż dorosłemu'],
      ],
      questions: [
        { id: 'orb67e', q: 'Co to jest netykieta?', options: ['zasady dobrego zachowania w internecie', 'rodzaj wirusa, który psuje komputer', 'nazwa przeglądarki internetowej', 'sklep internetowy z naklejkami'], answer: 0, explain: 'Netykieta to „savoir-vivre” sieci – grzeczność i szacunek w internecie.' },
        { id: '0nn3ze', q: 'Które hasło jest najsilniejsze?', options: ['Zielony_Kot!Skacze7', '12345', 'ola2015', 'mojehaslo123456'], answer: 0, explain: 'Jest długie i ma małe i wielkie litery, znaki i cyfrę. Pozostałe łatwo zgadnąć.' },
        { id: 's21x68', q: 'Kolega prosi o hasło do twojej gry, bo chce ci „pomóc wbić poziom”. Co robisz?', options: ['nie podaję hasła', 'podaję, bo to kolega', 'wysyłam hasło SMS-em', 'piszę hasło na tablicy w klasie'], answer: 0, explain: 'Hasła nie podajesz nikomu poza rodzicem lub opiekunem.' },
        { id: 'cgl0w0', q: 'Prawda czy fałsz?\nNajlepiej mieć jedno hasło do wszystkich kont.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Gdy ktoś pozna jedno hasło, dostanie się do wszystkich kont. Do różnych kont używaj różnych haseł.' },
        { id: 'dqzgy5', q: 'Które informacje to dane osobowe?', options: ['imię, nazwisko i adres', 'ulubiony kolor tęczy', 'nazwa gry, w którą gra cała klasa', 'tytuł bajki'], answer: 0, explain: 'Dane osobowe pozwalają ustalić, kim jesteś i gdzie mieszkasz.' },
        { id: 'dtihgd', q: 'Nieznajomy w grze pyta, gdzie mieszkasz i do której szkoły chodzisz. Co robisz?', options: ['nie odpowiadam i mówię o tym rodzicowi', 'podaję adres, bo to miły gracz', 'wysyłam zdjęcie szkoły i mojej klasy', 'umawiam się na spotkanie po lekcjach'], answer: 0, explain: 'Danych osobowych nie podajesz obcym. O takiej rozmowie mówisz dorosłemu.' },
        { id: 'muigl3', q: 'Dostajesz wiadomość: „Wygrałeś nowy telefon! Kliknij link i wpisz hasło”. Co robisz?', options: ['nie klikam i pokazuję wiadomość dorosłemu', 'klikam szybko, zanim ktoś mnie uprzedzi', 'wpisuję hasło', 'wysyłam link kolegom'], answer: 0, explain: 'To podejrzana wiadomość – może chodzić o wyłudzenie hasła lub danych.' },
        { id: 'vg5jrv', q: 'Gdzie wybierzesz, kto widzi twoje zdjęcia na koncie?', options: ['w ustawieniach prywatności', 'w kalkulatorze w telefonie', 'w edytorze grafiki', 'w koszu na usunięte pliki'], answer: 0, explain: 'W ustawieniach prywatności decydujesz, kto ma dostęp do twoich wpisów i zdjęć.' },
        { id: 'pe66ub', q: 'Co to jest cyberprzemoc?', options: ['dokuczanie lub obrażanie kogoś w internecie', 'szybkie pisanie wiadomości na klawiaturze', 'wspólna gra w zespole przez internet', 'naprawianie komputera kolegi'], answer: 0, explain: 'Cyberprzemoc to przemoc z użyciem internetu i telefonu.' },
        { id: '4l7fkm', q: 'Ktoś obraża cię na czacie klasowym. Co warto zrobić?', options: ['zrobić zrzut ekranu i powiedzieć dorosłemu', 'odpisać jeszcze gorszymi słowami', 'nikomu nic nie mówić i czekać', 'udostępnić wiadomość całej klasie'], answer: 0, explain: 'Zrzut ekranu to dowód. Dorosły pomoże rozwiązać problem.' },
        { id: 'txmg0e', q: 'Jaki jest numer telefonu zaufania dla dzieci i młodzieży?', options: ['116 111', '123 456', '100 200', '111 222'], answer: 0, explain: 'Pod numer 116 111 możesz zadzwonić, gdy potrzebujesz pomocy lub rozmowy.' },
        { id: '1oboxv', q: 'Które zachowanie jest zgodne z netykietą?', options: ['piszę grzecznie i szanuję innych', 'piszę SAMYMI WIELKIMI LITERAMI', 'wrzucam cudze zdjęcia bez zgody', 'wyśmiewam błędy innych'], answer: 0, explain: 'W sieci obowiązuje taka sama grzeczność jak w rozmowie twarzą w twarz.' },
        { id: 'dlw8hl', q: 'Do prezentacji użyłeś zdjęcia z internetu. Co musisz zrobić?', options: ['podać źródło zdjęcia', 'podpisać zdjęcie swoim imieniem', 'nic – zdjęcia z internetu są niczyje', 'zmienić kolory, żeby nikt nie poznał'], answer: 0, explain: 'Autor ma prawa do swojego zdjęcia. Podając źródło, szanujesz jego pracę.' },
        { id: '39kv5x', q: 'Co to jest licencja programu?', options: ['zasady korzystania z programu ustalone przez jego twórcę', 'hasło do komputera, które ustala jego właściciel', 'rodzaj wirusa, który niszczy programy', 'instrukcja obsługi myszy i klawiatury'], answer: 0, explain: 'Licencja mówi, jak wolno korzystać z programu, np. czy jest darmowy.' },
        { id: '5pkgwk', q: 'Prawda czy fałsz?\nTuż przed snem najlepiej długo grać na telefonie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Ekran przed snem utrudnia zaśnięcie. Higiena cyfrowa to m.in. odłożenie telefonu przed snem.' },
        { id: 'hsvhaz', q: 'Chcesz zainstalować nową grę. Co robisz?', options: ['pytam rodzica i instaluję tylko z pewnego źródła', 'pobieram ją z pierwszej lepszej strony w internecie', 'wyłączam program antywirusowy', 'proszę obcą osobę o plik'], answer: 0, explain: 'Programy z niepewnych źródeł mogą zawierać wirusy albo łamać licencję.' },
      ],
    },
  ],
});
