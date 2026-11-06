/* Informatyka – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, informatyka kl. IV–VI) */
window.SUBJECTS.push({
  id: 'informatyka',
  name: 'Informatyka',
  icon: '💻',
  color: '#3b6fd8',
  book: 'Informatyka w akcji 4 (Nowa Era)',
  topics: [
    {
      id: 'komputer-i-siec',
      name: 'Komputer, sieć i pliki',
      chapter: 'rozdział I „Komputer i Ty” i rozdział II (co warto wiedzieć o internecie)',
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
      infographicNote: 'U góry zestaw komputerowy, niżej – co warto o nim wiedzieć; na dole – o czym pamiętać.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '💻', title: 'Zestaw komputerowy', text: 'jednostka centralna, monitor, klawiatura, mysz', kolor: 5 },
        branches: [
          { title: '⌨️ Wejście', text: 'informacje do komputera', items: ['klawiatura, mysz', 'mikrofon, skaner'], kolor: 1 },
          { title: '🖨️ Wyjście', text: 'informacje z komputera', items: ['monitor, głośniki', 'słuchawki, drukarka'], kolor: 1 },
          { title: '📁 Pliki', text: 'plik ma nazwę, folder to „teczka” na pliki', items: ['lokalnie – na dysku', 'w chmurze – w internecie'], kolor: 4 },
          { title: '🌐 Sieć', text: 'połączone urządzenia wymieniają informacje', items: ['internet łączy sieci świata', 'router – kablem lub Wi‑Fi'], kolor: 2 },
        ],
        bottom: { title: '✅ Pamiętaj', items: ['siedź prosto, rób przerwy', 'zapisuj pracę często', 'wyłączaj komputer, gdy z niego nie korzystasz'], kolor: 3 },
      },
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
      id: 'bezpiecznie-w-sieci',
      name: 'Bezpiecznie i kulturalnie w sieci',
      chapter: 'rozdział II „Jak korzystać z internetu?” – lekcja 2 „Bezpieczni w cyfrowym świecie”',
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
      infographicNote: 'Porównuj w poziomie: po lewej – co robisz, po prawej – czego nie robisz.',
      infographic: {
        type: 'porownanie',
        kolumny: [{ title: '✅ Rób', kolor: 3 }, { title: '❌ Nie rób', kolor: 2 }],
        wiersze: [
          { label: 'pisanie w sieci (netykieta)', cells: ['pisz grzecznie', 'nie obrażaj, nie pisz WIELKIMI LITERAMI'] },
          { label: 'hasło', cells: ['długie, różne do różnych kont', 'nie podawaj nikomu poza rodzicem lub opiekunem'] },
          { label: 'dane osobowe', cells: ['ustaw, kto widzi twoje wpisy', 'nie podawaj ich obcym'] },
          { label: '„Wygrałeś! Kliknij link”', cells: ['pokaż wiadomość dorosłemu', 'nie klikaj, nie odpowiadaj'] },
          { label: 'cudzy obrazek lub tekst', cells: ['podaj źródło', 'nie podpisuj go swoim imieniem'] },
        ],
        bottom: { title: '🆘 Cyberprzemoc', text: 'Nie odpowiadaj agresją. Zrób zrzut ekranu, powiedz rodzicowi lub nauczycielowi.\nTelefon zaufania: 116 111', kolor: 5 },
      },
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
    {
      id: 'szukanie-i-komunikacja',
      name: 'Szukanie informacji i komunikacja w sieci',
      chapter: 'rozdział II „Jak korzystać z internetu?” – lekcje 3 „Jak szukać informacji?” i 4 „Komunikacja w internecie”',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: wymaganie ogólne 5 (krytyczna ocena informacji, komunikacja w środowisku cyfrowym); dz. 1 wym. 3 (znajdowanie w zbiorach informacji elementów o podanych własnościach); dz. 4 wym. 2 (sieć komputerowa w kontekście komunikacji i dostępu do informacji), wym. 3 (podejrzane treści on-line – moduł medialny); dz. 5 wym. 2 (komunikacja zgodna z netykietą), wym. 4 (zagrożenia cyfrowe i reagowanie), wym. 6 (podawanie źródeł); „Warunki i sposób realizacji” – formułowanie trafnych zapytań, ocena wiarygodności treści, analiza treści generowanych przez systemy cyfrowe. Wybór na klasę 4 – decyzja redakcyjna (zakres według podręcznika „Informatyka w akcji 4”). Fakty sprawdzone 6.11.2026: wyszukiwanie (słowa kluczowe, cudzysłów, minus, wielkość liter, zakładki z obrazami) – lekcje ZPE „Wyszukiwanie informacji w sieci na zadany temat” i scenariusz „Zaawansowane wykorzystywanie zasobów Internetu” (kryteria oceny strony: aktualność, źródła, autor); minus bez spacji – scenariusz ZPE (zgodnie z pomocą Google o operatorach, znaną tylko z fragmentu w wyszukiwarce); fałszywe informacje i sposób ich sprawdzania – gov.pl, Baza wiedzy „Rozpoznawanie nieprawdziwych informacji”; deepfake – gov.pl (KOWR, „Cyberbezpieczeństwo – najważniejsze zagrożenia”); budowa adresu e-mail, poczta przez stronę WWW lub program pocztowy – lekcja ZPE „Poczta elektroniczna”.',
      theory: `
        <h3>Przeglądarka i wyszukiwarka</h3>
        <ul>
          <li><b>Przeglądarka internetowa</b> – program, w którym oglądasz strony internetowe, np. Firefox, Chrome, Edge.</li>
          <li><b>Wyszukiwarka</b> – strona, która znajduje inne strony według wpisanych przez ciebie słów. Otwierasz ją w przeglądarce.</li>
        </ul>
        <h3>Jak szukać, żeby znaleźć?</h3>
        <ol>
          <li>Zastanów się, czego dokładnie szukasz.</li>
          <li>Wpisz kilka <b>słów kluczowych</b> – najważniejszych słów tematu, najlepiej rzeczowników, np. <i>jeż pożywienie</i>.</li>
          <li>Wyników za dużo albo nie na temat? Dodaj słowo bardziej szczegółowe.</li>
        </ol>
        <table>
          <tr><th>Co wpisujesz</th><th>Co się dzieje</th></tr>
          <tr><td><b>"Dzień Edukacji Narodowej"</b> – słowa w cudzysłowie</td><td>wyszukiwarka szuka tych słów <b>dokładnie w tej kolejności</b></td></tr>
          <tr><td><b>zebra -przejście</b> – minus przed słowem, bez spacji</td><td>pomija strony z tym słowem (tu: o przejściu dla pieszych)</td></tr>
          <tr><td><b>Kraków</b> albo <b>kraków</b></td><td>to samo – wielkość liter nie ma znaczenia</td></tr>
        </table>
        <p>Zdjęcia znajdziesz w zakładce <b>Grafika</b> albo <b>Obrazy</b>, są też zakładki z filmami, mapami i wiadomościami. Część wyników to <b>reklamy</b> – są oznaczone, np. słowem „Sponsorowane”. Zanim klikniesz, przeczytaj tytuł i adres strony.</p>
        <h3>Czy tej stronie można wierzyć?</h3>
        <p><b>Wiarygodne źródło</b> to takie, któremu można zaufać. Sprawdź:</p>
        <ul>
          <li><b>Kto</b> to napisał? Muzeum, park narodowy, encyklopedia, urząd – czy nieznana osoba?</li>
          <li><b>Kiedy</b>? Stara informacja mogła się zmienić.</li>
          <li>Czy autor podaje, <b>skąd wie</b> (źródła)?</li>
          <li>Czy tekst jest napisany <b>spokojnie</b>? Krzykliwy nagłówek („SZOK!!!”) i dużo emocji to sygnał ostrzegawczy.</li>
          <li>Czy to <b>fakt</b>, czy czyjaś <b>opinia</b>?</li>
          <li><b>Porównaj</b> informację z innymi wiarygodnymi źródłami.</li>
        </ul>
        <div class="tip">💡 Odpowiedź czatbota AI też sprawdzaj w innym źródle – AI może się mylić. A gdy korzystasz z cudzej informacji, podaj źródło.</div>
        <h3>Fałszywe informacje i deepfake</h3>
        <ul>
          <li><b>Fałszywa informacja</b> (ang. <i>fake news</i>) – wiadomość nieprawdziwa albo przekręcona, która celowo wprowadza w błąd. Często szokuje i budzi silne emocje.</li>
          <li><b>Deepfake</b> (czytaj: dipfejk) – film, zdjęcie albo nagranie głosu przerobione lub stworzone przez sztuczną inteligencję tak, że wygląda prawdziwie, choć to się nigdy nie wydarzyło. Na przykład film, w którym znana osoba „mówi” coś, czego nie powiedziała.</li>
        </ul>
        <p>Sygnały ostrzegawcze: ruch ust nie pasuje do słów, twarz rusza się nienaturalnie, nie wiadomo, kto opublikował nagranie. Dobry deepfake trudno rozpoznać na oko – dlatego sprawdzaj, czy piszą o tym wiarygodne źródła.</p>
        <p><b>Co robisz?</b> Nie udostępniasz dalej. Sprawdzasz w innych źródłach. Pytasz dorosłego.</p>
        <h3>Poczta elektroniczna (e-mail)</h3>
        <p><b>E-mail</b> to wiadomość wysłana przez internet – z tekstem, a nawet z plikami. Pocztę czytasz na stronie internetowej poczty albo w programie pocztowym. Konto pocztowe zakładasz razem z rodzicem.</p>
        <p><b>Adres e-mail</b> ma trzy części: <b>nazwa użytkownika</b> + <b>@</b> („małpa”) + <b>domena</b> (nazwa dostawcy poczty), np. <i>ola.nowak@szkolnapoczta.pl</i>. Każdy adres jest niepowtarzalny.</p>
        <table>
          <tr><th>Część wiadomości</th><th>Co tam jest</th></tr>
          <tr><td>Do</td><td>adres e-mail odbiorcy</td></tr>
          <tr><td>Temat</td><td>krótko: czego dotyczy wiadomość</td></tr>
          <tr><td>Treść</td><td>powitanie, sprawa, podpis</td></tr>
          <tr><td>Załącznik 📎</td><td>plik dołączony do wiadomości, np. zdjęcie pracy</td></tr>
        </table>
        <p>Przycisk <b>Odpowiedz</b> – piszesz do nadawcy. <b>Przekaż dalej</b> – wysyłasz otrzymaną wiadomość komuś innemu.</p>
        <h3>Komunikatory</h3>
        <p><b>Komunikator</b> to aplikacja do szybkich rozmów przez internet – tekstem, głosem albo z obrazem (wideo). Można w nim tworzyć grupy, np. klasową.</p>
        <ul>
          <li>Pisz na temat i grzecznie – obowiązuje <b>netykieta</b>.</li>
          <li>Nie wysyłaj łańcuszków i dziesiątek naklejek. Zdjęcia innych osób – tylko za ich zgodą.</li>
          <li>Nie otwieraj linków i załączników od nieznajomych – pokaż je dorosłemu.</li>
          <li>W ważnej sprawie do nauczyciela napisz e-mail: z tematem, powitaniem i podpisem.</li>
        </ul>
      `,
      infographicNote: 'Czytaj od góry: szukasz, sprawdzasz, uważasz na fałsz – a gdy piszesz do innych, trzymasz się netykiety.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '🌐', title: 'Internet: szukam i piszę', text: 'przeglądarka otwiera strony, wyszukiwarka je znajduje', kolor: 5 },
        branches: [
          { title: '🔎 Szukam', text: 'słowa kluczowe – kilka najważniejszych słów', items: ['"cudzysłów" – dokładnie te słowa', 'minus: zebra -przejście'], kolor: 1 },
          { title: '✅ Sprawdzam', text: 'czy źródło jest wiarygodne?', items: ['kto napisał i kiedy?', 'porównuję z innymi źródłami'], kolor: 3 },
          { title: '⚠️ Uważam na fałsz', text: 'fake news i deepfake wyglądają prawdziwie', items: ['krzykliwy nagłówek – uwaga', 'nie udostępniam, pytam dorosłego'], kolor: 2 },
          { title: '✉️ Piszę', text: 'e-mail: nazwa@domena, temat, załącznik', items: ['komunikator – szybka rozmowa', 'netykieta: grzecznie i na temat'], kolor: 4 },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'Zanim uwierzysz i udostępnisz – sprawdź źródło.', kolor: 5 },
      },
      flashcards: [
        ['Przeglądarka internetowa', 'Program do oglądania stron internetowych, np. Firefox, Chrome, Edge'],
        ['Wyszukiwarka', 'Strona, która znajduje inne strony według wpisanych słów kluczowych'],
        ['Słowa kluczowe', 'Kilka najważniejszych słów tematu, np. jeż pożywienie'],
        ['Słowa w cudzysłowie w wyszukiwarce', 'Wyszukiwarka szuka tych słów dokładnie w tej kolejności'],
        ['Minus przed słowem w wyszukiwarce', 'Pomija strony z tym słowem, np. zebra -przejście'],
        ['Wynik „Sponsorowane”', 'Reklama w wynikach wyszukiwania'],
        ['Wiarygodne źródło', 'Wiadomo, kto je napisał i kiedy; podaje, skąd ma informacje'],
        ['Jak sprawdzić informację?', 'Kto napisał, kiedy, czy podaje źródła, czy pisze spokojnie; porównaj z innymi źródłami'],
        ['Fałszywa informacja (fake news)', 'Wiadomość nieprawdziwa albo przekręcona, która celowo wprowadza w błąd'],
        ['Deepfake', 'Film, zdjęcie lub nagranie głosu przerobione lub stworzone przez AI tak, że wygląda prawdziwie'],
        ['Poczta elektroniczna (e-mail)', 'Wysyłanie wiadomości i plików przez internet'],
        ['Budowa adresu e-mail', 'nazwa użytkownika + @ + domena, np. ola.nowak@szkolnapoczta.pl'],
        ['Znak @ („małpa”)', 'Oddziela nazwę użytkownika od domeny w adresie e-mail'],
        ['Załącznik', 'Plik dołączony do wiadomości e-mail'],
        ['Komunikator', 'Aplikacja do szybkich rozmów przez internet: tekstem, głosem, wideo'],
        ['E-mail do nauczyciela', 'Temat, powitanie, krótka treść i podpis'],
      ],
      questions: [
        { id: 't2vjrz', q: 'Do czego służy wyszukiwarka internetowa?', options: ['do znajdowania stron według wpisanych słów', 'do pisania i formatowania długich tekstów i listów', 'do rysowania obrazków na komputerze', 'do łączenia komputera z siecią Wi‑Fi'], answer: 0, explain: 'Wpisujesz słowa kluczowe, a wyszukiwarka pokazuje listę stron, na których one występują.' },
        { id: '3cxzvs', q: 'Czym różni się przeglądarka od wyszukiwarki?', options: ['przeglądarka otwiera strony, wyszukiwarka je znajduje', 'to dwie nazwy tego samego programu do stron', 'przeglądarka znajduje strony, wyszukiwarka je drukuje', 'wyszukiwarka to program, przeglądarka to kabel'], answer: 0, explain: 'Przeglądarka (np. Firefox, Chrome, Edge) to program do oglądania stron. Wyszukiwarkę otwierasz w przeglądarce – ona znajduje strony na dany temat.' },
        { id: '020qts', q: 'Co to są słowa kluczowe?', options: ['najważniejsze słowa tematu wpisywane do wyszukiwarki', 'hasła, którymi logujesz się na swoje konto w grze lub poczcie', 'słowa, których nie wolno pisać w internecie', 'nazwy klawiszy na klawiaturze komputera'], answer: 0, explain: 'Słowa kluczowe to kilka najważniejszych słów tematu, najlepiej rzeczowników, np. „jeż pożywienie”.' },
        { id: 'h263yl', q: 'Chcesz się dowiedzieć, co jedzą jeże. Które zapytanie najlepiej wpisać do wyszukiwarki?', options: ['jeż pożywienie', 'zwierzęta w lesie', 'ciekawe rzeczy', 'mam pytanie'], answer: 0, explain: 'Dobre słowa kluczowe są konkretne i dotyczą tematu: kto (jeż) i co (pożywienie). Pozostałe zapytania są zbyt ogólne.' },
        { id: '4g1obs', q: 'Co da wpisanie do wyszukiwarki "Dzień Edukacji Narodowej" w cudzysłowie?', options: ['strony z tymi słowami dokładnie w tej kolejności', 'strony, na których nie ma ani jednego z tych trzech słów', 'tylko obrazki związane z tymi słowami', 'strony napisane wyłącznie wielkimi literami'], answer: 0, explain: 'Cudzysłów oznacza: szukaj dokładnie tego wyrażenia – tych słów w tej kolejności.' },
        { id: 'he6znx', q: 'Szukasz informacji o zebrach, a wyszukiwarka pokazuje przejścia dla pieszych. Które zapytanie pomoże?', options: ['zebra -przejście', 'zebra przejście', 'ZEBRA PRZEJŚCIE', '"zebra przejście"'], answer: 0, explain: 'Minus przed słowem (bez spacji) każe wyszukiwarce pominąć strony z tym słowem – zostaną strony o zwierzętach.' },
        { id: 'isdtrq', q: 'Prawda czy fałsz?\nWyszukiwarka pokaże inne wyniki dla słowa „Kraków” i dla słowa „kraków”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Wyszukiwarki nie zwracają uwagi na wielkość liter – wyniki będą takie same.' },
        { id: 'l2lril', q: 'Gdzie w wyszukiwarce znajdziesz zdjęcia na wybrany temat?', options: ['w zakładce Grafika lub Obrazy', 'w ustawieniach prywatności konta', 'w koszu z usuniętymi plikami', 'w polu Temat wiadomości e-mail'], answer: 0, explain: 'Wyszukiwarki mają osobne zakładki: z obrazami, filmami, mapami i wiadomościami.' },
        { id: 'xsb7jj', q: 'Wyszukiwarka pokazała wynik oznaczony słowem „Sponsorowane”. Co to znaczy?', options: ['to reklama – ktoś zapłacił za jej pokazanie', 'to najlepsza i najbardziej sprawdzona strona', 'to strona przygotowana przez nauczycieli', 'to strona, na której nie ma żadnych informacji'], answer: 0, explain: 'Wyniki sponsorowane to reklamy. Nie muszą być najlepszą odpowiedzią na twoje pytanie.' },
        { id: '4s56x4', q: 'Które pytanie pomaga ocenić, czy stronie można wierzyć?', options: ['Kto jest autorem i skąd ma informacje?', 'Czy strona ma dużo kolorowych obrazków?', 'Czy strona jest pierwsza na liście wyników?', 'Czy strona ma bardzo długi adres w pasku?'], answer: 0, explain: 'Wiarygodne źródło podaje, kto je napisał i skąd wie to, co pisze. Kolory i miejsce na liście wyników o tym nie świadczą.' },
        { id: '0ivy5i', q: 'Które źródło jest najbardziej wiarygodne do referatu o bocianach?', options: ['strona parku narodowego albo encyklopedii', 'komentarz nieznanego gracza na forum gry', 'wpis z nagłówkiem „SZOK! Bociany znikną!”', 'film bez autora z nieznanego kanału'], answer: 0, explain: 'Park narodowy i encyklopedia to znani autorzy, którzy sprawdzają informacje. Pozostałe źródła są anonimowe albo krzykliwe.' },
        { id: 'ws8gwq', q: 'Znalazłeś ciekawą informację na jednej stronie. Co robisz, zanim wpiszesz ją do referatu?', options: ['sprawdzam ją w innych wiarygodnych źródłach', 'wpisuję ją od razu, bo przecież jest w internecie', 'zmieniam kilka słów i nie podaję źródła', 'pytam o nią nieznajomego na czacie gry'], answer: 0, explain: 'W internecie każdy może napisać wszystko. Informację porównujesz z innymi wiarygodnymi źródłami, a w referacie podajesz, skąd ją masz.' },
        { id: 'i5ewtl', q: 'Który nagłówek powinien cię zaniepokoić?', options: ['„SZOK!!! Tego nikt ci nie powie!”', '„Muzeum zaprasza na nową wystawę”', '„Prognoza pogody na weekend”', '„Biblioteka zmienia godziny otwarcia”'], answer: 0, explain: 'Krzykliwy nagłówek, wykrzykniki i silne emocje to sygnał ostrzegawczy – tak często wyglądają fałszywe informacje. Wiarygodne teksty piszą spokojnie.' },
        { id: '2wsss2', q: 'Dlaczego warto sprawdzić datę napisania tekstu na stronie?', options: ['informacja mogła się od tamtej pory zmienić', 'starsze strony zawsze mają w sobie wirusy', 'data mówi, kto jest autorem całej strony internetowej', 'bez daty strona w ogóle się nie otworzy'], answer: 0, explain: 'Stary tekst może być nieaktualny, np. godziny otwarcia czy ceny mogły się zmienić.' },
        { id: 'p0hsvj', q: 'W referacie korzystasz z informacji ze strony internetowej. Co dopisujesz?', options: ['źródło – skąd pochodzi informacja', 'swoje hasło do poczty e-mail', 'adres domowy autora strony', 'nic – internet jest dla wszystkich'], answer: 0, explain: 'Podając źródło, szanujesz pracę autora, a czytelnik może sprawdzić informację.' },
        { id: '6x9pu8', q: 'Prawda czy fałsz?\nOdpowiedź czatbota AI warto sprawdzić w innym źródle.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Sztuczna inteligencja może się mylić i podawać nieprawdę pewnym tonem. Sprawdzaj jej odpowiedzi.' },
        { id: '2l57jp', q: 'Co to jest fałszywa informacja (fake news)?', options: ['wiadomość nieprawdziwa lub przekręcona, która wprowadza w błąd', 'prawdziwa wiadomość z gazety o jutrzejszej pogodzie', 'wiadomość e-mail, do której dołączono plik ze zdjęciem z wycieczki', 'zabawna wiadomość wysłana przez kolegę z klasy'], answer: 0, explain: 'Fake news celowo wprowadza w błąd. Często szokuje, żeby ludzie szybko podawali go dalej.' },
        { id: '9g7jbc', q: 'Co to jest deepfake?', options: ['film, zdjęcie lub głos przerobione przez AI tak, by wyglądały prawdziwie', 'prawdziwy film nagrany kamerą przez reportera w czasie ważnego wydarzenia', 'rodzaj wirusa, który po cichu kasuje pliki z dysku komputera', 'bardzo głęboko schowany folder z wieloma plikami w środku'], answer: 0, explain: 'Deepfake tworzy się za pomocą sztucznej inteligencji. Pokazuje coś, czego nie było, np. znaną osobę mówiącą słowa, których nie wypowiedziała.' },
        { id: 's9w03m', q: 'Widzisz film, w którym znany piosenkarz obiecuje rozdać telefony. Ruch jego ust nie pasuje do słów. Co robisz?', options: ['nie udostępniam i sprawdzam w wiarygodnych źródłach', 'od razu wysyłam film całej klasie', 'klikam link pod filmem i podaję swoje imię, nazwisko i adres', 'uznaję, że to prawda, bo widać to na filmie'], answer: 0, explain: 'Ruch ust niepasujący do słów to sygnał, że film może być deepfakiem. Nie podajesz go dalej, sprawdzasz i pytasz dorosłego.' },
        { id: 'eg91hh', q: 'Prawda czy fałsz?\nJeśli coś widać na filmie, to na pewno się wydarzyło.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Film można przerobić albo stworzyć za pomocą sztucznej inteligencji (deepfake). Sprawdzaj, kto go opublikował i czy piszą o tym wiarygodne źródła.' },
        { id: 'tn1rly', q: 'Jak potocznie nazywa się znak @ w adresie e-mail?', options: ['małpa', 'gwiazdka', 'kratka', 'ukośnik'], answer: 0, explain: 'Znak @ to „małpa”. Oddziela nazwę użytkownika od domeny.' },
        { id: 'h96zup', q: 'Co jest nazwą użytkownika w adresie ola.nowak@szkolnapoczta.pl?', options: ['ola.nowak', 'szkolnapoczta.pl', '@', 'pl'], answer: 0, explain: 'Nazwa użytkownika stoi przed znakiem @. Po znaku @ jest domena – nazwa dostawcy poczty.' },
        { id: 'g55fcf', q: 'Co jest w adresie e-mail po znaku @?', options: ['domena – nazwa dostawcy poczty', 'hasło do skrzynki pocztowej', 'imię i nazwisko odbiorcy wiadomości', 'temat wysyłanej wiadomości'], answer: 0, explain: 'Adres e-mail to: nazwa użytkownika + @ + domena. Hasła nigdy nie ma w adresie.' },
        { id: 'wr4ega', q: 'Który adres e-mail jest zapisany poprawnie?', options: ['jan.kowal@szkolnapoczta.pl', 'jan.kowal.szkolnapoczta.pl', 'jan kowal@szkolna poczta.pl', '@jan.kowal szkolnapoczta'], answer: 0, explain: 'Poprawny adres ma nazwę użytkownika, znak @ i domenę – bez spacji.' },
        { id: 'z46ptq', q: 'Prawda czy fałsz?\nKażdy adres e-mail jest niepowtarzalny – nie ma dwóch takich samych.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Dzięki temu wiadomość trafia zawsze do właściwej osoby.' },
        { id: 'efjyar', q: 'Jak możesz czytać swoją pocztę e-mail?', options: ['na stronie internetowej poczty albo w programie pocztowym', 'tylko na komputerze w szkolnej pracowni', 'tylko po wydrukowaniu każdej wiadomości', 'tylko wtedy, gdy nadawca wiadomości jest w tej chwili online'], answer: 0, explain: 'Pocztę czytasz po zalogowaniu na stronie dostawcy poczty albo w programie pocztowym – na dowolnym urządzeniu z internetem.' },
        { id: '19t4py', q: 'Co to jest załącznik?', options: ['plik dołączony do wiadomości e-mail', 'temat wiadomości wpisany na górze', 'adres e-mail odbiorcy wiadomości', 'podpis nadawcy na samym końcu wiadomości'], answer: 0, explain: 'Załącznik (📎) to plik wysłany razem z wiadomością, np. zdjęcie albo dokument.' },
        { id: 'pfvbxl', q: 'Co wpisujesz w polu „Temat” wiadomości e-mail?', options: ['krótko, czego dotyczy wiadomość', 'adres e-mail odbiorcy wiadomości', 'swoje hasło do skrzynki pocztowej', 'całą treść wiadomości z podpisem'], answer: 0, explain: 'Temat mówi odbiorcy, o co chodzi, zanim otworzy wiadomość, np. „Praca domowa z przyrody – Ola Nowak”.' },
        { id: 'uwjh7z', q: 'Piszesz e-mail do wychowawczyni. Co powinno się w nim znaleźć?', options: ['temat, powitanie, krótka treść i podpis', 'same emotki, bez tematu i podpisu', 'tekst pisany SAMYMI WIELKIMI LITERAMI, bez podpisu', 'tylko załącznik, bez żadnego tekstu'], answer: 0, explain: 'Wiadomość do nauczyciela piszesz grzecznie i jasno: temat, powitanie, sprawa i podpis.' },
        { id: 'al1npy', q: 'Co robi przycisk „Przekaż dalej” w poczcie e-mail?', options: ['wysyła otrzymaną wiadomość innej osobie', 'odpowiada nadawcy na jego ostatnią wiadomość', 'usuwa wiadomość na zawsze ze skrzynki', 'drukuje wiadomość na szkolnej drukarce'], answer: 0, explain: '„Przekaż dalej” wysyła wiadomość komuś innemu. „Odpowiedz” – piszesz do nadawcy.' },
        { id: 'c3avc2', q: 'Dostajesz e-mail od nieznajomego z załącznikiem „nagroda.exe”. Co robisz?', options: ['nie otwieram załącznika i pokazuję wiadomość dorosłemu', 'otwieram załącznik, żeby zobaczyć swoją nagrodę', 'przesyłam tę wiadomość wszystkim kolegom i koleżankom z klasy', 'odpisuję i podaję swój adres domowy i telefon'], answer: 0, explain: 'Załącznik od nieznajomego może zawierać wirusa. Nie otwierasz go i mówisz dorosłemu.' },
        { id: 'evqn9o', q: 'Do czego służy komunikator?', options: ['do szybkich rozmów przez internet – tekstem, głosem, wideo', 'do wyszukiwania stron internetowych według wpisanych słów kluczowych', 'do rysowania i poprawiania zdjęć na komputerze', 'do liczenia w tabelach i rysowania wykresów'], answer: 0, explain: 'Komunikator to aplikacja do rozmów na bieżąco. Można w nim tworzyć grupy, np. klasową.' },
        { id: '4s5h2i', q: 'Które zachowanie na klasowej grupie w komunikatorze jest właściwe?', options: ['piszę na temat i szanuję innych', 'wysyłam łańcuszki i dziesiątki naklejek', 'wrzucam zdjęcie kolegi bez jego zgody', 'wyśmiewam czyjś błąd w wiadomości'], answer: 0, explain: 'W komunikatorze obowiązuje netykieta: grzecznie, na temat, z szacunkiem dla innych.' },
      ],
    },
    {
      id: 'programy',
      name: 'Grafika komputerowa i edytor tekstu',
      chapter: 'rozdziały III „Grafika komputerowa” (zaznaczanie, kopiowanie, przekształcanie, warstwy) i IV „Edytor tekstu”',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 3 wym. 1 (tworzenie i edycja rysunków w edytorze grafiki), wym. 3 (dokumenty tekstowe: formatowanie, wyliczenia, tabele, ilustracje), wym. 5 (materiały multimedialne). Wybór na klasę 4 – decyzja redakcyjna (zakres według podręcznika „Informatyka w akcji 4”, rozdziały III i IV). Fakty sprawdzone 6.11.2026: zaznaczenie prostokątne i dowolnego kształtu, wytnij, kopiuj, wklej (schowek), obrót o 90° i 180°, przerzucanie w pionie i w poziomie, zmiana rozmiaru z zachowaniem proporcji i pochylenie – lekcja ZPE „Tworzenie cyfrowych obrazów” (zpe.gov.pl/a/D1HUrXmsY, opis edytora Paint); warstwy jako przezroczyste folie, kolejność warstw, osobna edycja i scalanie – materiał ZPE „Obróbka cyfrowa zdjęć w warstwach” (zpe.gov.pl/a/D7MsGZCWV). Praca w programach wymaga ćwiczeń przy komputerze – aplikacja utrwala tylko pojęcia; nazwy poleceń mogą się różnić w różnych programach.',
      theory: `
        <h3>Edytor grafiki – rysujesz na komputerze</h3>
        <table>
          <tr><th>Narzędzie</th><th>Do czego służy</th></tr>
          <tr><td>pędzel, ołówek</td><td>rysowanie linii odręcznie</td></tr>
          <tr><td>wypełnienie (wiaderko)</td><td>zamalowanie zamkniętego obszaru jednym kolorem</td></tr>
          <tr><td>gumka</td><td>wymazywanie</td></tr>
          <tr><td>kształty</td><td>gotowe figury: linia, prostokąt, elipsa, strzałka…</td></tr>
          <tr><td>zaznaczanie</td><td>wybranie fragmentu rysunku, żeby go przesunąć, skopiować, obrócić albo usunąć</td></tr>
        </table>
        <div class="tip">💡 Wypełnienie „wycieka”, gdy kształt nie jest zamknięty – wtedy zamaluje się całe tło.</div>
        <h3>Zaznacz, a potem kopiuj albo wytnij</h3>
        <p>Zaznaczenie może mieć kształt <b>prostokąta</b> albo <b>dowolnego kształtu</b>, który obrysujesz myszą. Możesz też zaznaczyć cały rysunek.</p>
        <table>
          <tr><th>Polecenie</th><th>Co się dzieje</th><th>Skrót</th></tr>
          <tr><td><b>kopiuj</b></td><td>fragment <b>zostaje</b> na rysunku, a jego kopia trafia do schowka</td><td>Ctrl+C</td></tr>
          <tr><td><b>wytnij</b></td><td>fragment <b>znika</b> z rysunku, ale trafia do schowka</td><td>Ctrl+X</td></tr>
          <tr><td><b>wklej</b></td><td>fragment ze schowka pojawia się na rysunku – przesuń go w dobre miejsce</td><td>Ctrl+V</td></tr>
        </table>
        <p><b>Schowek</b> to miejsce w pamięci komputera, w którym czeka skopiowany albo wycięty fragment. Ten sam fragment możesz wkleić wiele razy.</p>
        <h3>Przekształcanie zaznaczonego fragmentu</h3>
        <ul>
          <li><b>Obrót</b> o 90° w prawo, o 90° w lewo albo o 180°. Strzałka ↑ po obrocie o 90° w prawo wskazuje →, a po obrocie o 180° – ↓.</li>
          <li><b>Przerzuć w poziomie</b> – lustrzane odbicie: lewa strona zamienia się z prawą. Rybka płynąca w prawo popłynie w lewo.</li>
          <li><b>Przerzuć w pionie</b> – góra zamienia się z dołem. Domek stanie „do góry nogami”.</li>
          <li><b>Zmiana rozmiaru</b> – powiększasz albo pomniejszasz fragment. Zaznacz <b>„zachowaj współczynnik proporcji”</b>, żeby rysunek się nie rozciągnął ani nie spłaszczył.</li>
          <li><b>Pochylenie</b> – przechylasz fragment w bok o podany kąt.</li>
        </ul>
        <div class="tip">💡 Sprytny motyl: narysuj jedno skrzydło, skopiuj je, wklej, przerzuć w poziomie i dosuń do pierwszego. Oba skrzydła są takie same – motyl jest symetryczny.</div>
        <h3>Obraz z warstw</h3>
        <p>Niektóre edytory grafiki pozwalają pracować na <b>warstwach</b>. Warstwa jest jak <b>przezroczysta folia</b>: na każdej rysujesz coś innego, a potem kładziesz folie jedna na drugiej. Patrzysz na nie razem – i widzisz jeden obraz.</p>
        <ul>
          <li>Np. warstwa 1 – zdjęcie owoców, warstwa 2 – ramki, warstwa 3 – podpisy.</li>
          <li>To, co jest na <b>wyższej</b> warstwie, <b>zasłania</b> to, co jest pod spodem. Gdy zmienisz <b>kolejność warstw</b>, zmienisz, co jest z przodu.</li>
          <li>Każdą warstwę zmieniasz <b>osobno</b>: przesuniesz albo zmażesz napis i nie zepsujesz zdjęcia pod nim.</li>
          <li>Gdy wszystko jest gotowe, możesz <b>scalić</b> warstwy – połączyć je w jedną.</li>
        </ul>
        <h3>Edytor tekstu – piszesz i formatujesz</h3>
        <p><b>Formatowanie</b> to zmiana wyglądu tekstu, a nie jego treści:</p>
        <ul>
          <li><b>pogrubienie</b>, <i>kursywa</i> (pochylenie), <u>podkreślenie</u>,</li>
          <li>wyrównanie: do lewej, do środka (wyśrodkowanie), do prawej,</li>
          <li>lista <b>wypunktowana</b> (kropki) i <b>numerowana</b> (1., 2., 3.),</li>
          <li><b>tabela</b> (wiersze i kolumny) i wstawiony <b>obrazek</b>.</li>
        </ul>
        <p>Arkusz kalkulacyjny, prezentacje i narzędzia AI – w dziale „na zapas” <i>Arkusz, prezentacja i AI</i>.</p>
      `,
      infographicNote: 'Każdy kafelek to jedna umiejętność; czytaj od narzędzi do warstw, a na końcu – edytor tekstu.',
      infographic: {
        type: 'karty', kolumny: 2,
        items: [
          { icon: '🎨', title: 'Narzędzia', text: 'pędzel, wiaderko, gumka, kształty', kolor: 5 },
          { icon: '✂️', title: 'Zaznacz i skopiuj', text: 'kopiuj (Ctrl+C), wytnij (Ctrl+X), wklej (Ctrl+V)', kolor: 1 },
          { icon: '🔄', title: 'Przekształć', text: 'obróć, przerzuć w poziomie lub w pionie, zmień rozmiar', kolor: 1 },
          { icon: '🗂️', title: 'Warstwy', text: 'przezroczyste folie – wyższa zasłania niższą', kolor: 3 },
          { icon: '📝', title: 'Formatowanie', text: 'pogrubienie, kursywa, wyrównanie', kolor: 4 },
          { icon: '📋', title: 'Listy i tabele', text: 'wypunktowana, numerowana, tabela, obrazek', kolor: 4 },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'Najpierw zaznacz fragment – potem go kopiuj, obracaj albo przerzucaj.', kolor: 2 },
      },
      flashcards: [
        ['Wypełnienie (wiaderko)', 'Zamalowuje zamknięty obszar jednym kolorem'],
        ['Zaznaczanie', 'Wybranie fragmentu, żeby go przesunąć, skopiować, obrócić albo usunąć'],
        ['Kopiuj (Ctrl+C)', 'Fragment zostaje na rysunku, a kopia trafia do schowka'],
        ['Wytnij (Ctrl+X)', 'Fragment znika z rysunku i trafia do schowka'],
        ['Wklej (Ctrl+V)', 'Wstawia fragment ze schowka'],
        ['Schowek', 'Miejsce w pamięci komputera, w którym czeka skopiowany albo wycięty fragment'],
        ['Przerzuć w poziomie', 'Lustrzane odbicie: lewa strona zamienia się z prawą'],
        ['Przerzuć w pionie', 'Góra zamienia się z dołem – rysunek „do góry nogami”'],
        ['Zachowaj współczynnik proporcji', 'Przy zmianie rozmiaru rysunek się nie rozciąga ani nie spłaszcza'],
        ['Warstwa', 'Jak przezroczysta folia – każdą część obrazu rysujesz na osobnej warstwie'],
        ['Kolejność warstw', 'Wyższa warstwa zasłania to, co jest pod nią'],
        ['Scalanie warstw', 'Połączenie kilku warstw w jedną'],
        ['Formatowanie tekstu', 'Zmiana wyglądu tekstu: pogrubienie, kursywa, podkreślenie, wyrównanie'],
        ['Kursywa', 'Pochylone litery'],
        ['Lista numerowana', 'Kolejne punkty oznaczone liczbami: 1., 2., 3.'],
      ],
      questions: [
        { id: 'eulggz', q: 'Którym narzędziem edytora grafiki zamalujesz cały zamknięty obszar jednym kolorem?', options: ['wypełnieniem (wiaderkiem)', 'gumką (wymazywaniem)', 'zaznaczaniem fragmentu', 'narzędziem do pisania tekstu'], answer: 0, explain: 'Wypełnienie zamalowuje zamknięty obszar jednym kliknięciem.' },
        { id: 'q9hzmu', q: 'Kliknąłeś wiaderkiem w środek koła, a zamalowało się całe tło. Dlaczego?', options: ['linia koła nie była zamknięta', 'wybrałeś za mały pędzel', 'komputer jest zepsuty', 'koło było za duże'], answer: 0, explain: 'Przez przerwę w linii kolor „wycieka” na zewnątrz kształtu.' },
        { id: 'su0qpr', q: 'Chcesz narysować 5 jednakowych domków. Co zrobisz najszybciej?', options: ['narysujesz jeden, zaznaczysz go, skopiujesz i wkleisz', 'narysujesz każdy od nowa, kreska po kresce', 'zmażesz wszystko gumką i zaczniesz od nowa', 'wydrukujesz pusty rysunek bez domków'], answer: 0, explain: 'Kopiowanie i wklejanie powiela zaznaczony fragment.' },
        { id: 'a8hqb5', q: 'Czym różni się „wytnij” od „kopiuj”?', options: ['po wycięciu fragment znika z rysunku, a po skopiowaniu zostaje', 'po skopiowaniu fragment znika z rysunku, a po wycięciu zostaje', 'wycięty fragment trafia do kosza, a skopiowany – do schowka', 'nie różnią się niczym, to dwie nazwy tego samego polecenia'], answer: 0, explain: 'Oba polecenia wkładają fragment do schowka. Wytnij usuwa go z rysunku, kopiuj – zostawia.' },
        { id: 'ldnxpy', q: 'Gdzie trafia fragment rysunku, który skopiowałeś?', options: ['do schowka', 'do kosza', 'na pulpit', 'do drukarki'], answer: 0, explain: 'Schowek to miejsce w pamięci komputera, w którym fragment czeka na wklejenie.' },
        { id: 'vmp2lb', q: 'Który skrót klawiszowy wkleja fragment ze schowka?', options: ['Ctrl+V', 'Ctrl+C', 'Ctrl+X', 'Ctrl+Z'], answer: 0, explain: 'Ctrl+C – kopiuj, Ctrl+X – wytnij, Ctrl+V – wklej.' },
        {
          id: 'm5fo8e',
          q: 'Rybka płynie w prawo. Zaznaczasz ją i wybierasz „przerzuć w poziomie”. W którą stronę będzie płynąć?',
          svg: `<svg viewBox="0 0 320 130" role="img" aria-label="Rybka zwrócona głową w prawo: ogon po lewej stronie, oko po prawej. Strzałka pokazuje, że płynie w prawo.">
      <defs><marker id="a-k4inf-ryba" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L13,7 L0,14 z" class="t1"/></marker></defs>
      <path d="M70,65 L30,35 L30,95 Z" class="f2 s2"/>
      <ellipse cx="130" cy="65" rx="65" ry="38" class="f2 s2 sw"/>
      <circle cx="165" cy="55" r="7" class="t2"/>
      <path d="M215,65 H290" class="ln sw" marker-end="url(#a-k4inf-ryba)"/>
    </svg>`,
          options: ['w lewo', 'w prawo', 'w górę', 'w dół'],
          answer: 0,
          explain: 'Przerzucenie w poziomie to lustrzane odbicie: lewa strona zamienia się z prawą. Głowa będzie po lewej, więc rybka popłynie w lewo.',
        },
        { id: 'utre1k', q: 'Narysowany domek stoi dachem do góry. Co się stanie po poleceniu „przerzuć w pionie”?', options: ['dach będzie na dole – domek stanie do góry nogami', 'domek zamieni lewą stronę z prawą, a dach zostanie na górze', 'domek zrobi się dwa razy większy niż przedtem', 'domek zniknie z rysunku i trafi do schowka'], answer: 0, explain: 'Przerzucenie w pionie zamienia górę z dołem.' },
        { id: 'ulosm5', q: 'Strzałka wskazuje w górę ↑. W którą stronę wskaże po obrocie o 90° w prawo?', options: ['w prawo →', 'w lewo ←', 'w dół ↓', 'nadal w górę ↑'], answer: 0, explain: 'Obrót o 90° w prawo to obrót zgodny z ruchem wskazówek zegara – z góry na prawo.' },
        { id: 'cmaip7', q: 'Strzałka wskazuje w prawo →. W którą stronę wskaże po obrocie o 180°?', options: ['w lewo ←', 'w prawo →', 'w górę ↑', 'w dół ↓'], answer: 0, explain: 'Obrót o 180° to pół obrotu – strzałka wskaże przeciwny kierunek.' },
        { id: '4fiefz', q: 'Narysowałeś jedno skrzydło motyla. Jak najszybciej zrobisz drugie, tak samo wyglądające?', options: ['skopiujesz je, wkleisz i przerzucisz w poziomie', 'skopiujesz je, wkleisz i przerzucisz w pionie', 'wytniesz je i wkleisz w to samo miejsce', 'zamalujesz je wiaderkiem w innym kolorze'], answer: 0, explain: 'Drugie skrzydło to lustrzane odbicie pierwszego – lewa strona zamienia się z prawą, czyli przerzucenie w poziomie.' },
        { id: '8wj23u', q: 'Powiększyłeś zdjęcie kolegi i jego twarz zrobiła się dziwnie szeroka. Czego zabrakło?', options: ['zaznaczenia „zachowaj współczynnik proporcji”', 'przerzucenia zdjęcia w pionie przed powiększeniem', 'skopiowania zdjęcia do schowka przed zmianą', 'zamalowania tła zdjęcia wiaderkiem'], answer: 0, explain: 'Gdy proporcje są zachowane, szerokość i wysokość zmieniają się tak samo i obraz się nie rozciąga.' },
        { id: 'znn6gj', q: 'Do czego można porównać warstwę w edytorze grafiki?', options: ['do przezroczystej folii', 'do kartki w zeszycie', 'do gumki do mazania', 'do ramki na zdjęcie'], answer: 0, explain: 'Warstwy są jak przezroczyste folie położone jedna na drugiej – razem tworzą jeden obraz.' },
        { id: 'spdkds', q: 'Podpis „Jabłko” jest na warstwie pod zdjęciem i nie widać go. Co zrobisz?', options: ['przeniesiesz warstwę z podpisem nad zdjęcie', 'zmażesz zdjęcie gumką, żeby odsłonić podpis', 'napiszesz podpis jeszcze raz na tej samej warstwie', 'przerzucisz zdjęcie w poziomie'], answer: 0, explain: 'Wyższa warstwa zasłania niższą. Gdy podpis będzie wyżej, zobaczysz go na zdjęciu.' },
        { id: 'k4w6g2', q: 'Prawda czy fałsz?\nGdy napis i zdjęcie są na osobnych warstwach, zmazanie napisu gumką usunie też fragment zdjęcia.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Każdą warstwę zmieniasz osobno. Gumka na warstwie z napisem nie dotyka zdjęcia.' },
        { id: '0663ao', q: 'Co to znaczy „scalić warstwy”?', options: ['połączyć kilka warstw w jedną', 'podzielić jedną warstwę na kilka', 'usunąć wszystkie warstwy z obrazu', 'zmienić kolejność wszystkich warstw'], answer: 0, explain: 'Scalenie łączy warstwy w jedną – robisz to, gdy obraz jest gotowy.' },
        { id: 'xaxxr2', q: 'Co to jest formatowanie tekstu?', options: ['zmiana wyglądu tekstu, np. pogrubienie', 'usunięcie całego tekstu z dokumentu', 'zmiana treści tekstu, np. dopisanie zdań', 'wyłączenie komputera po pisaniu'], answer: 0, explain: 'Formatowanie zmienia wygląd, a treść zostaje ta sama.' },
        { id: 'f02c3x', q: 'Jak nazywa się pochylenie liter?', options: ['kursywa', 'pogrubienie', 'podkreślenie', 'wyśrodkowanie'], answer: 0, explain: 'Kursywa to litery pochylone w prawo.' },
        { id: '0rovcn', q: 'Chcesz wypisać w punktach: 1. jabłka, 2. mleko, 3. chleb. Jakiej listy użyjesz?', options: ['numerowanej', 'wypunktowanej', 'żadnej – wstawisz tabelę', 'kursywy'], answer: 0, explain: 'Lista z liczbami 1., 2., 3. to lista numerowana.' },
      ],
    },
    {
      id: 'algorytmy',
      name: 'Algorytmy i programowanie',
      chapter: 'rozdział V „Programowanie w Scratchu”',
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
      infographicNote: 'Czytaj od góry: od algorytmu do programu, który działa tak, jak chcesz.',
      infographic: {
        type: 'kroki',
        top: { title: '🧩 Duży problem?', text: 'Podziel go na małe części – każdą rozwiąż osobno.', kolor: 5 },
        items: [
          { icon: '📝', title: 'Algorytm', text: 'przepis krok po kroku, w dobrej kolejności', kolor: 1 },
          { icon: '🧱', title: 'Program', text: 'algorytm zapisany dla komputera albo robota, np. z klocków w Scratchu', kolor: 1 },
          { icon: '▶️', title: 'Testowanie', text: 'uruchom program i sprawdź, czy robi to, co miał', kolor: 3 },
          { icon: '🐞', title: 'Błąd? Popraw!', text: 'popraw program i testuj jeszcze raz', kolor: 2 },
        ],
        bottom: { title: '💡 Trzy rodzaje poleceń', items: ['sekwencja – po kolei, jedno po drugim', 'warunek – „jeżeli…, to…”', 'pętla – powtórz kilka razy'], kolor: 4 },
      },
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
      id: 'scratch',
      name: 'Scratch: duszek, scena i sterowanie',
      chapter: 'rozdział V „Programowanie w Scratchu” – lekcje 1 „Wprowadzenie do programu Scratch”, 2 „Kiedy postać mówi i myśli”, 3 „Sterowanie duszkiem”',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 1 wym. 4 (planowanie zachowania robota na ekranie); dz. 2 wym. 1 (historyjki i proste algorytmy z poleceniami sekwencyjnymi, warunkowymi i iteracyjnymi w wybranym środowisku programistycznym), wym. 2 (uruchamianie i testowanie programu, poprawianie błędów), wym. 3 (objaśnianie działania instrukcji), wym. 4 (programowanie robota na ekranie lub sterowanie nim); dz. 3 wym. 5 (proste animacje – moduł medialny). Wybór na klasę 4 – decyzja redakcyjna (zakres według podręcznika „Informatyka w akcji 4”, rozdział V; tekst rozporządzenia sprawdzony 6.11.2026). Fakty sprawdzone 6.11.2026: nazwy bloków i kategorii – oficjalne polskie tłumaczenie Scratcha (repozytorium scratch-l10n Fundacji Scratch); okno programu (scena, duszek, kostiumy, tła, obszar skryptów, zielona flaga, stop, osobne skrypty dla każdego duszka i sceny) – lekcja ZPE „Interfejs programu Scratch” (zpe.gov.pl/a/DdNsZxwD0); współrzędne x i y, ujemna liczba kroków, „jeżeli na brzegu, odbij się”, „ustaw styl obrotu”, animacja przez zmianę kostiumów, „powiedz” bez czasu – lekcje ZPE „Małe i duże kroki duszka” (zpe.gov.pl/a/DhgGSVafU), „Pierwszy projekt w środowisku Scratch” (zpe.gov.pl/a/DmRVAvZt2), „Duszek przechodzi przez jezdnię” (zpe.gov.pl/a/Dgu5LogRs); kierunki 90, −90, 0, 180 – materiał ZPE „Sterowanie postacią w programie Scratch” (fragment w wyszukiwarce) i forum Scratcha; wymiary sceny (x od −240 do 240, y od −180 do 180) – kilka zgodnych materiałów edukacyjnych (przez wyszukiwarkę; Scratch Wiki niedostępne z sesji). Programowanie to praca przy komputerze – aplikacja utrwala tylko pojęcia.',
      theory: `
        <h3>Okno Scratcha</h3>
        <p><b>Scratch</b> to wizualny język programowania: program układasz z <b>bloków</b> (klocków), które łączą się jak puzzle. Działa w przeglądarce (scratch.mit.edu) albo po zainstalowaniu na komputerze. Język zmienisz, klikając globus – wybierz „Polski”.</p>
        <table>
          <tr><th>Część</th><th>Co to jest</th></tr>
          <tr><td><b>scena</b></td><td>miejsce, w którym występują duszki i dzieje się akcja; ma <b>tło</b></td></tr>
          <tr><td><b>duszek</b></td><td>postać albo przedmiot na scenie – na początku jest tam kotek</td></tr>
          <tr><td><b>kostium</b></td><td>wygląd duszka; duszek może mieć kilka kostiumów</td></tr>
          <tr><td><b>kategorie bloków</b></td><td>Ruch, Wygląd, Dźwięk, Zdarzenia, Kontrola, Czujniki, Wyrażenia, Zmienne, Moje bloki – każda ma swój kolor</td></tr>
          <tr><td><b>obszar skryptów</b></td><td>tu przeciągasz bloki i łączysz je w <b>skrypt</b>; każdy duszek (i scena) ma swoje skrypty</td></tr>
          <tr><td>🚩 <b>zielona flaga</b></td><td>uruchamia program</td></tr>
          <tr><td>🛑 <b>czerwony znak stop</b></td><td>zatrzymuje program</td></tr>
        </table>
        <h3>Kiedy skrypt startuje? (kategoria Zdarzenia)</h3>
        <ul>
          <li><b>kiedy kliknięto 🚩</b> – po kliknięciu zielonej flagi,</li>
          <li><b>kiedy klawisz … naciśnięty</b> – z listy wybierasz klawisz, np. spacja albo strzałka w lewo,</li>
          <li><b>kiedy ten duszek kliknięty</b> – po kliknięciu duszka myszą.</li>
        </ul>
        <h3>Postać mówi i myśli (kategoria Wygląd)</h3>
        <table>
          <tr><th>Blok</th><th>Co widać na scenie</th></tr>
          <tr><td><b>powiedz</b> Cześć! <b>przez</b> 2 <b>sekund</b></td><td>dymek jak w komiksie – znika po 2 sekundach</td></tr>
          <tr><td><b>powiedz</b> Cześć!</td><td>dymek zostaje, aż duszek powie albo pomyśli coś innego</td></tr>
          <tr><td><b>pomyśl</b> Hmm… <b>przez</b> 2 <b>sekund</b></td><td>chmurka z myślą – znika po 2 sekundach</td></tr>
        </table>
        <p>Tak brzmią napisy na klockach („przez 2 sekund”). Rozmowa dwóch duszków: pierwszy mówi „Cześć!” przez 2 sekundy, a drugi najpierw <b>czeka 2 sekundy</b> (blok <b>czekaj</b> z kategorii Kontrola) i dopiero wtedy odpowiada – inaczej mówiliby naraz.</p>
        <h3>Gdzie jest duszek? Współrzędne x i y</h3>
        <ul>
          <li><b>x</b> mówi, gdzie duszek jest <b>w poziomie</b>: im większy x, tym bardziej <b>w prawo</b>.</li>
          <li><b>y</b> mówi, gdzie duszek jest <b>w pionie</b>: im większy y, tym wyżej (<b>w górę</b>).</li>
          <li>Środek sceny to <b>x: 0, y: 0</b>. Na lewo od środka x jest ujemny (np. −100), poniżej środka – y jest ujemny. Scena sięga od x = −240 do 240 i od y = −180 do 180.</li>
        </ul>
        <h3>Sterowanie duszkiem strzałkami (kategoria Ruch)</h3>
        <table>
          <tr><th>Gdy naciśniesz…</th><th>blok pod „kiedy klawisz … naciśnięty”</th></tr>
          <tr><td>strzałkę w prawo</td><td><b>zmień x o 10</b></td></tr>
          <tr><td>strzałkę w lewo</td><td><b>zmień x o −10</b></td></tr>
          <tr><td>strzałkę w górę</td><td><b>zmień y o 10</b></td></tr>
          <tr><td>strzałkę w dół</td><td><b>zmień y o −10</b></td></tr>
        </table>
        <p>Drugi sposób: <b>ustaw kierunek na</b> … i <b>przesuń o 10 kroków</b>. Kierunek <b>90</b> – w prawo, <b>−90</b> – w lewo, <b>0</b> – w górę, <b>180</b> – w dół. Ujemna liczba kroków (np. −10) cofa duszka.</p>
        <ul>
          <li><b>jeżeli na brzegu, odbij się</b> – gdy duszek dotknie brzegu sceny, zawraca.</li>
          <li><b>ustaw styl obrotu na lewo-prawo</b> – duszek patrzy tylko w lewo albo w prawo i nie chodzi do góry nogami.</li>
        </ul>
        <h3>Animacja i pętle</h3>
        <ul>
          <li><b>następny kostium</b> – duszek zmienia wygląd na kolejny kostium (po ostatnim wraca pierwszy). Gdy kostiumy szybko się zmieniają, duszek „chodzi” – to <b>animacja</b>.</li>
          <li><b>powtórz 10 razy</b> – bloki w środku wykonają się 10 razy; <b>zawsze</b> – powtarzają się bez końca, aż klikniesz stop.</li>
        </ul>
        <div class="tip">💡 Po każdej zmianie kliknij zieloną flagę i sprawdź, czy duszek robi to, co zaplanowałeś. Coś nie gra? Popraw skrypt i testuj znowu.</div>
      `,
      infographicNote: 'Każdy kafelek to jedna część Scratcha albo jeden rodzaj bloków; na dole – jak czytać współrzędne.',
      infographic: {
        type: 'karty', kolumny: 2,
        items: [
          { icon: '🎭', title: 'Scena', text: 'tu występują duszki; ma tło', kolor: 5 },
          { icon: '🐱', title: 'Duszek', text: 'postać na scenie; kostiumy to jej wygląd', kolor: 5 },
          { icon: '🚩', title: 'Start i stop', text: 'zielona flaga uruchamia, czerwony znak zatrzymuje', kolor: 4 },
          { icon: '💬', title: 'Wygląd', text: 'powiedz – dymek, pomyśl – chmurka', kolor: 5 },
          { icon: '⌨️', title: 'Zdarzenia', text: 'kiedy klawisz … naciśnięty – start skryptu', kolor: 4 },
          { icon: '➡️', title: 'Ruch', text: 'zmień x o 10 – w prawo, zmień y o 10 – w górę', kolor: 1 },
        ],
        bottom: { title: '📍 Współrzędne', text: 'Środek sceny: x 0, y 0. Większy x – w prawo, większy y – w górę.', kolor: 3 },
      },
      flashcards: [
        ['Scratch', 'Wizualny język programowania – program układasz z bloków jak z puzzli'],
        ['Scena', 'Miejsce, w którym występują duszki i dzieje się akcja; ma tło'],
        ['Duszek', 'Postać albo przedmiot na scenie, który wykonuje skrypty'],
        ['Kostium', 'Wygląd duszka; zmiana kostiumów daje animację'],
        ['Skrypt', 'Połączone bloki – program dla jednego duszka albo dla sceny'],
        ['Zielona flaga i stop', 'Flaga uruchamia program, czerwony znak stop go zatrzymuje'],
        ['powiedz … przez 2 sekund', 'Dymek jak w komiksie, który znika po 2 sekundach (kategoria Wygląd)'],
        ['pomyśl …', 'Chmurka z myślą nad duszkiem (kategoria Wygląd)'],
        ['kiedy klawisz … naciśnięty', 'Blok startowy z kategorii Zdarzenia – skrypt rusza po naciśnięciu klawisza'],
        ['Współrzędna x', 'Położenie w poziomie: większy x – bardziej w prawo'],
        ['Współrzędna y', 'Położenie w pionie: większy y – wyżej'],
        ['Środek sceny', 'x: 0, y: 0'],
        ['Kierunek w Scratchu', '90 – w prawo, −90 – w lewo, 0 – w górę, 180 – w dół'],
        ['jeżeli na brzegu, odbij się', 'Duszek zawraca, gdy dotknie brzegu sceny'],
        ['zawsze', 'Pętla bez końca – bloki w środku powtarzają się, aż klikniesz stop'],
      ],
      questions: [
        { id: 'frpknz', q: 'Co to jest duszek w Scratchu?', options: ['postać albo przedmiot na scenie, który wykonuje skrypty', 'błąd w programie, który trzeba szybko znaleźć', 'tło sceny, które można zmieniać w zakładce Tła', 'przycisk, który uruchamia i zatrzymuje program'], answer: 0, explain: 'Duszki to bohaterowie projektu – na początku na scenie jest kotek.' },
        { id: '3zahyx', q: 'Co to jest scena w Scratchu?', options: ['miejsce, w którym występują duszki; ma tło', 'lista wszystkich bloków z kategorii Ruch', 'wygląd duszka, który można zmieniać', 'blok, który zatrzymuje cały program'], answer: 0, explain: 'Na scenie dzieje się akcja. Scena ma tło, które możesz zmienić.' },
        { id: 'd4c2yu', q: 'Co to jest kostium duszka?', options: ['wygląd duszka – może mieć ich kilka', 'skrypt, który porusza duszka po scenie', 'miejsce, w którym duszek stoi na scenie', 'kategoria bloków z dźwiękami'], answer: 0, explain: 'Kostium to wygląd. Gdy duszek zmienia kostiumy, może np. ruszać nogami.' },
        { id: 'wos3vr', q: 'Do czego służy zielona flaga nad sceną?', options: ['uruchamia program', 'zatrzymuje program', 'zapisuje projekt', 'dodaje nowego duszka'], answer: 0, explain: 'Zielona flaga uruchamia program, a czerwony znak stop – zatrzymuje.' },
        { id: '5h3s9b', q: 'W której kategorii znajdziesz bloki „powiedz” i „pomyśl”?', options: ['Wygląd', 'Ruch', 'Dźwięk', 'Zdarzenia'], answer: 0, explain: 'Dymek i chmurka zmieniają to, jak duszek wygląda na scenie – są w kategorii Wygląd.' },
        { id: 'kkd9mx', q: 'W której kategorii jest blok „kiedy klawisz spacja naciśnięty”?', options: ['Zdarzenia', 'Kontrola', 'Wyrażenia', 'Zmienne'], answer: 0, explain: 'Bloki, od których zaczyna się skrypt (kliknięcie flagi, klawisza, duszka), są w kategorii Zdarzenia.' },
        { id: 'ztlezl', q: 'Czym różni się blok „pomyśl” od bloku „powiedz”?', options: ['„pomyśl” pokazuje chmurkę z myślą, a „powiedz” – dymek', '„pomyśl” odtwarza dźwięk, a „powiedz” pokazuje napis', '„pomyśl” porusza duszka, a „powiedz” go zatrzymuje', 'niczym – oba pokazują dokładnie taki sam dymek'], answer: 0, explain: 'Duszek „mówi” w dymku jak w komiksie, a „myśli” w chmurce.' },
        { id: '2irnre', q: 'Duszek ma powiedzieć „Kliknij mnie!” i nie wiesz, jak długo trzeba będzie czekać. Którego bloku użyjesz?', options: ['powiedz Kliknij mnie!', 'powiedz Kliknij mnie! przez 2 sekund', 'pomyśl Kliknij mnie! przez 2 sekund', 'czekaj 2 sekund'], answer: 0, explain: 'Blok „powiedz” bez czasu zostawia dymek na scenie, aż duszek powie albo pomyśli coś innego.' },
        {
          id: 'cuofgb',
          q: 'Co zobaczysz po kliknięciu zielonej flagi?',
          svg: `<svg viewBox="0 0 380 130" role="img" aria-label="Skrypt w Scratchu: kiedy kliknięto zieloną flagę; powiedz Cześć! przez 2 sekund; pomyśl Co dziś zjem? przez 2 sekund.">
      <rect x="10" y="8" width="210" height="38" rx="14" class="f4 s4 sw"/>
      <text x="22" y="33" class="tx">kiedy kliknięto 🚩</text>
      <rect x="10" y="48" width="290" height="34" rx="6" class="f5 s5"/>
      <text x="22" y="71" class="tx">powiedz Cześć! przez 2 sekund</text>
      <rect x="10" y="84" width="360" height="34" rx="6" class="f5 s5"/>
      <text x="22" y="107" class="tx">pomyśl Co dziś zjem? przez 2 sekund</text>
    </svg>`,
          options: ['najpierw dymek „Cześć!”, potem chmurkę z myślą', 'najpierw chmurkę z myślą, potem dymek „Cześć!”', 'oba napisy naraz, w jednym wspólnym dymku', 'nic – skrypt nie ma bloku, który go uruchamia'], answer: 0,
          explain: 'Bloki wykonują się po kolei, od góry: najpierw dymek przez 2 sekundy, potem chmurka przez 2 sekundy.',
        },
        { id: 'oi4hwy', q: 'Kotek mówi „Cześć!” przez 2 sekundy. Piesek ma odpowiedzieć dopiero po nim. Co dasz na początku skryptu pieska (po bloku z flagą)?', options: ['czekaj 2 sekund', 'powiedz Cześć!', 'następny kostium', 'zmień x o 10'], answer: 0, explain: 'Piesek odczeka, aż kotek skończy mówić – wtedy nie będą mówić naraz.' },
        {
          id: '4jj811',
          q: 'Co zrobi duszek po naciśnięciu strzałki w lewo?',
          svg: `<svg viewBox="0 0 400 90" role="img" aria-label="Skrypt w Scratchu: kiedy klawisz strzałka w lewo naciśnięty; zmień x o minus 10.">
      <rect x="10" y="8" width="380" height="38" rx="14" class="f4 s4 sw"/>
      <text x="22" y="33" class="tx">kiedy klawisz strzałka w lewo naciśnięty</text>
      <rect x="10" y="48" width="170" height="34" rx="6" class="f1 s1"/>
      <text x="22" y="71" class="tx">zmień x o −10</text>
    </svg>`,
          options: ['przesunie się w lewo', 'przesunie się w prawo', 'przesunie się w górę', 'przesunie się w dół'], answer: 0,
          explain: 'x to położenie w poziomie. Gdy x maleje (−10), duszek przesuwa się w lewo.',
        },
        { id: 'lqom8n', q: 'Strzałka w górę ma przesuwać duszka w górę. Który blok wstawisz pod „kiedy klawisz strzałka w górę naciśnięty”?', options: ['zmień y o 10', 'zmień x o 10', 'zmień y o −10', 'zmień x o −10'], answer: 0, explain: 'y to położenie w pionie: większy y – wyżej.' },
        { id: 'v79cl8', q: 'Gdzie jest środek sceny?', options: ['x: 0, y: 0', 'x: 240, y: 180', 'x: −240, y: 0', 'x: 0, y: 180'], answer: 0, explain: 'W środku sceny obie współrzędne są równe 0.' },
        { id: 'w8and2', q: 'Duszek stoi w punkcie x: 100, y: 0. Gdzie jest względem środka sceny?', options: ['na prawo od środka', 'na lewo od środka', 'nad środkiem sceny', 'pod środkiem sceny'], answer: 0, explain: 'y = 0, więc jest na wysokości środka, a x = 100 (większy od 0) – na prawo.' },
        {
          id: 'f7hmbb',
          q: 'Gdzie będzie duszek po wykonaniu skryptu?',
          svg: `<svg viewBox="0 0 320 186" role="img" aria-label="Skrypt w Scratchu: kiedy kliknięto zieloną flagę; idź do x: 0 y: 0; powtórz 3 razy: zmień x o 20.">
      <rect x="10" y="8" width="210" height="38" rx="14" class="f4 s4 sw"/>
      <text x="22" y="33" class="tx">kiedy kliknięto 🚩</text>
      <rect x="10" y="48" width="200" height="34" rx="6" class="f1 s1"/>
      <text x="22" y="71" class="tx">idź do x: 0 y: 0</text>
      <path d="M10,84 H200 Q206,84 206,90 V112 Q206,118 200,118 H34 V156 H200 Q206,156 206,162 V172 Q206,178 200,178 H10 Z" class="f2 s2"/>
      <text x="22" y="107" class="tx">powtórz 3 razy</text>
      <rect x="34" y="120" width="160" height="34" rx="6" class="f1 s1"/>
      <text x="46" y="143" class="tx">zmień x o 20</text>
    </svg>`,
          options: ['x: 60, y: 0', 'x: 20, y: 0', 'x: 0, y: 60', 'x: 23, y: 0'], answer: 0,
          explain: 'Duszek startuje ze środka (x: 0). Trzy razy zwiększa x o 20: 0 + 20 + 20 + 20 = 60. y się nie zmienia.',
        },
        { id: 'lhgetr', q: 'Na jaką liczbę ustawisz kierunek, żeby duszek szedł w prawo?', options: ['90', '0', '−90', '180'], answer: 0, explain: 'W Scratchu: 90 – w prawo, −90 – w lewo, 0 – w górę, 180 – w dół.' },
        { id: 'ahu7o0', q: 'Duszek ma kierunek 180 i wykonuje „przesuń o 10 kroków”. W którą stronę pójdzie?', options: ['w dół', 'w górę', 'w prawo', 'w lewo'], answer: 0, explain: 'Kierunek 180 to w dół (0 – w górę, 90 – w prawo, −90 – w lewo).' },
        { id: '13nzhg', q: 'Co robi blok „jeżeli na brzegu, odbij się”?', options: ['gdy duszek dotknie brzegu sceny, zawraca', 'gdy duszek dotknie brzegu sceny, znika', 'przenosi duszka na środek sceny', 'zatrzymuje cały program na brzegu'], answer: 0, explain: 'Duszek zmienia kierunek na przeciwny i nie „ucieka” poza scenę.' },
        { id: 'vxn6r4', q: 'Duszek chodzi tam i z powrotem, ale po odbiciu od brzegu idzie do góry nogami. Co pomoże?', options: ['ustaw styl obrotu na lewo-prawo', 'zmień tło sceny na inne', 'usuń blok z zieloną flagą', 'dodaj blok „pomyśl Hmm…”'], answer: 0, explain: 'Styl obrotu „lewo-prawo” sprawia, że duszek patrzy tylko w lewo albo w prawo.' },
        { id: '32xygr', q: 'Jak sprawić, żeby kotek „chodził” – ruszał nogami?', options: ['zmieniać kostiumy blokiem „następny kostium”', 'zmieniać tło sceny blokiem „zmień tło”', 'powiększać kotka blokiem „zmień rozmiar”', 'kliknąć kilka razy czerwony znak stop'], answer: 0, explain: 'Kostiumy to różne wyglądy duszka. Gdy szybko się zmieniają, powstaje animacja.' },
        { id: 'deatto', q: 'Czym różni się pętla „zawsze” od „powtórz 10 razy”?', options: ['„zawsze” powtarza bez końca, aż klikniesz stop', '„zawsze” wykonuje bloki tylko jeden raz', '„zawsze” działa tylko po naciśnięciu spacji', 'niczym – obie powtarzają dokładnie 10 razy'], answer: 0, explain: '„powtórz 10 razy” kończy się po 10 powtórzeniach, a „zawsze” – dopiero po zatrzymaniu programu.' },
        { id: 'ar1vxh', q: 'Skrypt: „powtórz 4 razy: przesuń o 10 kroków”. O ile kroków przesunie się duszek?', options: ['40', '14', '10', '4'], answer: 0, explain: '4 razy po 10 kroków: 4 · 10 = 40.' },
        { id: '6fi7ck', q: 'Co zrobi duszek po bloku „przesuń o −10 kroków”?', options: ['cofnie się o 10 kroków', 'pójdzie 10 kroków do przodu', 'obróci się o 10 stopni', 'nie ruszy się z miejsca'], answer: 0, explain: 'Ujemna liczba kroków przesuwa duszka do tyłu.' },
        { id: 'nux7kc', q: 'Prawda czy fałsz?\nKażdy duszek ma swoje skrypty – w obszarze skryptów widzisz bloki tego duszka, którego wybrałeś.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Każdy duszek (i scena) ma osobny obszar skryptów. Klikasz duszka – widzisz jego skrypty.' },
        { id: 'twtxqv', q: 'Kliknąłeś zieloną flagę, a kotek idzie w lewo, choć miał iść w prawo. Co robisz?', options: ['szukasz błędu, poprawiasz skrypt i testujesz znowu', 'usuwasz kotka i dodajesz zupełnie innego duszka', 'zostawiasz tak, bo program przecież coś robi', 'zmieniasz tło sceny i klikasz flagę jeszcze raz'], answer: 0, explain: 'Program działa inaczej, niż planowałeś – to błąd. Poprawiasz go i sprawdzasz jeszcze raz.' },
      ],
    },
    {
      id: 'arkusz-ai',
      name: 'Arkusz, prezentacja i AI',
      extra: true,
      chapter: 'w podręczniku „Informatyka w akcji” – w kolejnych klasach (arkusz kalkulacyjny i prezentacje według układu treści w kl. 5–6)',
      basis: 'Dz.U. 2026 poz. 378, informatyka kl. IV–VI: dz. 3 wym. 2 (arkusz kalkulacyjny: proste obliczenia i wykresy), wym. 4 (prezentacje), wym. 6 (proste narzędzia sztucznej inteligencji); dz. 4 wym. 4 (trenowanie prostego modelu AI, wpływ danych na wyniki). Dział „na zapas” – tych tematów nie ma w podręczniku „Informatyka w akcji 4”. Praca w programach wymaga ćwiczeń przy komputerze – aplikacja utrwala tylko pojęcia.',
      theory: `
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
      infographicNote: 'Każdy kafelek to jedno pojęcie z arkusza albo prezentacji; na dole – uwaga o AI.',
      infographic: {
        type: 'karty', kolumny: 2,
        items: [
          { icon: '🔲', title: 'Komórka', text: 'adres: litera kolumny i numer wiersza, np. B3', kolor: 3 },
          { icon: '🧮', title: 'Formuła', text: 'zaczyna się od =, np. =A1+A2', kolor: 3 },
          { icon: '📊', title: 'Wykres', text: 'słupki pomagają porównać liczby', kolor: 3 },
          { icon: '🖼️', title: 'Slajd', text: 'tytuł, mało tekstu, duże litery, obrazek', kolor: 4 },
        ],
        bottom: { title: '🤖 Sztuczna inteligencja (AI)', text: 'Uczy się na przykładach i może się mylić – sprawdzaj jej wyniki w innych źródłach.', kolor: 2 },
      },
      flashcards: [
        ['Komórka arkusza', 'Pole tabeli w arkuszu; ma adres, np. B3'],
        ['Adres komórki', 'Litera kolumny i numer wiersza, np. C2'],
        ['Formuła w arkuszu', 'Zaczyna się od =, np. =A1+A2'],
        ['Slajd', 'Jedna „strona” prezentacji'],
        ['Sztuczna inteligencja (AI)', 'Program, który uczy się na przykładach; może się mylić, więc sprawdzaj wyniki'],
      ],
      questions: [
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
        { id: 'nrq72p', q: 'Prawda czy fałsz?\nGdy zmienisz liczbę w komórce A1, wynik formuły =A1+A2 sam się przeliczy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To zaleta arkusza – formuły przeliczają się automatycznie.' },
        { id: 'mp5urz', q: 'Który slajd prezentacji jest najlepiej przygotowany?', options: ['tytuł, kilka haseł, duże litery i pasujący obrazek', 'cała strona drobnego tekstu bez żadnego obrazka', 'same kolorowe napisy, bez tytułu i bez porządku', 'jasnożółte litery na białym tle'], answer: 0, explain: 'Slajd ma być czytelny: mało tekstu, duże litery, dobry kontrast.' },
        { id: '3hapr9', q: 'Prawda czy fałsz?\nNarzędzie AI zawsze podaje prawdziwe informacje.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'AI może się mylić. Ważne informacje sprawdzaj w innych źródłach.' },
        { id: 'w5jyeo', q: 'Model AI uczono rozpoznawać zwierzęta, ale pokazywano mu tylko zdjęcia kotów. Co się stanie, gdy zobaczy psa?', options: ['prawdopodobnie go nie rozpozna', 'na pewno rozpozna psa', 'sam nauczy się bez przykładów', 'zmieni zdjęcie w kota'], answer: 0, explain: 'Model uczy się na przykładach. Bez zdjęć psów nie ma skąd wiedzieć, jak wygląda pies.' },
        { id: 'd9rbwq', q: 'AI napisało ci tekst o wielorybach do referatu. Co powinieneś zrobić?', options: ['sprawdzić informacje w innym źródle', 'od razu oddać tekst jako swój', 'uwierzyć we wszystko bez sprawdzania', 'usunąć wszystkie liczby'], answer: 0, explain: 'AI może podać błędne informacje, więc je sprawdzasz.' },
      ],
    },
  ],
});
