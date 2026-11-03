/* Wychowanie fizyczne – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, wychowanie fizyczne – blok „Klasa IV”).
 * Priorytet C: tylko wiedza (zasady bezpieczeństwa, zdrowie, fair play) – ćwiczeń aplikacja nie zastąpi.
 * Zasady na kąpielisku – rozporządzenie MSW (tekst jednolity Dz.U. 2022 poz. 1979), sprawdzone 1.11.2026. */
window.SUBJECTS.push({
  id: 'wf',
  name: 'Wychowanie fizyczne',
  icon: '⚽',
  color: '#1f8a9e',
  topics: [
    {
      id: 'bezpiecznie',
      name: 'Bezpiecznie na WF, nad wodą i w górach',
      basis: 'Dz.U. 2026 poz. 378, wychowanie fizyczne, Klasa IV: dz. 7 „Bezpieczeństwo w aktywności fizycznej”, wym. 1 (regulamin sali gimnastycznej i boiska), wym. 2 (bezpieczne poruszanie się po boisku), wym. 3 (do kogo zwrócić się o pomoc przy urazie – moduł bezpieczeństwo i obrona), wym. 4–7 (zasady bezpiecznego zachowania, bezpieczne miejsce zabaw, strój i obuwie, przybory zgodnie z przeznaczeniem), wym. 8 (samoasekuracja), wym. 9 (zasady bezpiecznego zachowania nad wodą i w górach, zachowanie na terenach zielonych – moduł bezpieczeństwo i obrona). Flagi i boje na kąpielisku: rozporządzenie MSW z 6.03.2012 w sprawie oznakowania i zabezpieczania obszarów wodnych (tekst jednolity Dz.U. 2022 poz. 1979, § 2 i § 9). Numery ratunkowe 601 100 100 (nad wodą) i 601 100 300 (w górach) – serwisy ratownicze i operator sieci, sprawdzone 1.11.2026; 112 – numer alarmowy.',
      theory: `
        <h3>Na lekcji WF</h3>
        <ul>
          <li>Przebierasz się w <b>strój sportowy</b> i <b>obuwie sportowe</b>. Zdejmujesz zegarek, łańcuszki, kolczyki – mogą zranić ciebie albo innych. Nie żujesz gumy.</li>
          <li>Na salę wchodzisz i z przyrządów korzystasz <b>tylko za zgodą nauczyciela</b>. Przyborów (piłek, skakanek, płotków) używasz tak, jak do tego służą.</li>
          <li>Słuchasz poleceń i sygnałów nauczyciela, np. gwizdka.</li>
          <li>Na boisku patrzysz, gdzie biegniesz, nie popychasz innych, nie wbiegasz pod lecącą piłkę.</li>
          <li>Na zajęciach na dworze ubierasz się do pogody – a w chłodne dni warstwami.</li>
        </ul>
        <h3>Gdy coś się stanie</h3>
        <ul>
          <li>Każdy uraz (skręcenie, otarcie, uderzenie) <b>od razu zgłaszasz nauczycielowi</b> – nawet jeśli wydaje się drobny. W szkole pomoże też <b>pielęgniarka szkolna</b>.</li>
          <li>Poza szkołą wołasz osobę dorosłą. W nagłym wypadku dzwonisz pod numer alarmowy <b>112</b>.</li>
        </ul>
        <h3>Samoasekuracja – jak bezpiecznie upaść</h3>
        <p>To sposób upadania, który chroni przed urazem: <b>przyciągasz brodę do klatki piersiowej</b> (chronisz głowę), zaokrąglasz plecy, <b>nie podpierasz się wyprostowanymi rękami</b>, przetaczasz się.</p>
        <h3>Nad wodą</h3>
        <ul>
          <li>Kąpiesz się tylko na <b>kąpielisku strzeżonym</b>, gdzie jest ratownik, i tylko pod opieką dorosłych.</li>
          <li><b>Flaga biała</b> – kąpiel dozwolona. <b>Flaga czerwona</b> – zakaz kąpieli. <b>Brak flagi</b> – ratownik nie pełni dyżuru, więc się nie kąpiesz.</li>
          <li>Boje: <b>białe</b> – brodzik dla dzieci (do 40 cm głębokości), <b>czerwone</b> – strefa dla nieumiejących pływać (do 120 cm), <b>żółte</b> – strefa dla umiejących pływać.</li>
          <li>Nie skaczesz do wody w nieznanym miejscu. Nie wchodzisz gwałtownie do zimnej wody, gdy jesteś rozgrzany po słońcu.</li>
          <li>Zimą nie wchodzisz na lód na stawach i rzekach.</li>
          <li>Numer ratunkowy nad wodą: <b>601 100 100</b> (albo 112).</li>
        </ul>
        <h3>W górach</h3>
        <ul>
          <li>Przed wyjściem sprawdzasz <b>pogodę</b> i planujesz trasę z dorosłymi. Mówisz komuś, dokąd idziesz.</li>
          <li>Idziesz tylko <b>wyznaczonym szlakiem</b>. Masz dobre buty, ciepłą kurtkę i coś przeciwdeszczowego, wodę i naładowany telefon.</li>
          <li>Gdy nadchodzi burza albo mgła – zawracasz.</li>
          <li>Numer ratunkowy w górach: <b>601 100 300</b> (albo 112). Ratownicy górscy to GOPR i – w Tatrach – TOPR. Wezwać pomoc można też aplikacją <b>Ratunek</b>.</li>
        </ul>
        <h3>W lesie, w parku narodowym, na łące</h3>
        <ul>
          <li>Chodzisz po ścieżkach i szlakach, nie hałasujesz, nie płoszysz zwierząt.</li>
          <li>Nie zrywasz roślin w parku narodowym i rezerwacie, nie rozpalasz ognisk w niedozwolonych miejscach.</li>
          <li>Zabierasz swoje śmieci ze sobą.</li>
        </ul>
        <div class="tip">💡 Zapamiętaj: <b>biała</b> flaga – <b>b</b>ezpiecznie się kąpać, <b>czerwona</b> – <b>cz</b>ekaj na brzegu.</div>
      `,
      infographicNote: 'Każda gałąź to inne miejsce i jego zasady; na dole – co robisz, gdy coś się stanie.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '🛡️', title: 'Bezpiecznie w ruchu', kolor: 5 },
        branches: [
          { title: '🏫 Na WF', items: ['strój i obuwie sportowe, bez biżuterii', 'przyrządy tylko za zgodą nauczyciela', 'upadek: broda do klatki, zaokrąglone plecy'], kolor: 4 },
          { title: '🏊 Nad wodą', items: ['tylko kąpielisko strzeżone, z dorosłym', 'flaga biała – kąpiel dozwolona', 'flaga czerwona albo brak flagi – nie kąpiesz się', 'ratunek: 601 100 100'], kolor: 1 },
          { title: '⛰️ W górach', items: ['sprawdź pogodę, powiedz, dokąd idziesz', 'idź tylko wyznaczonym szlakiem', 'burza albo mgła – zawracasz', 'ratunek: 601 100 300'], kolor: 5 },
          { title: '🌲 W lesie i parku narodowym', items: ['chodzisz po ścieżkach, nie hałasujesz', 'w parku narodowym nie zrywasz roślin', 'zabierasz swoje śmieci'], kolor: 3 },
        ],
        bottom: { title: '🆘 Gdy coś się stanie', items: ['uraz na WF – od razu mówisz nauczycielowi', 'poza szkołą – wołasz dorosłego', 'nagły wypadek – dzwonisz pod 112'], kolor: 2 },
      },
      flashcards: [
        ['Strój na WF', 'Strój i obuwie sportowe; bez zegarka, biżuterii i gumy do żucia'],
        ['Przyrządy na sali', 'Tylko za zgodą nauczyciela i zgodnie z przeznaczeniem'],
        ['Uraz na lekcji', 'Od razu zgłaszam nauczycielowi'],
        ['Numer alarmowy', '112'],
        ['Samoasekuracja', 'Bezpieczne upadanie: broda do klatki, zaokrąglone plecy, bez podpierania się prostymi rękami'],
        ['Flaga biała na kąpielisku', 'Kąpiel dozwolona'],
        ['Flaga czerwona na kąpielisku', 'Zakaz kąpieli'],
        ['Brak flagi na kąpielisku', 'Brak dyżuru ratownika – nie kąpię się'],
        ['Boje białe / czerwone / żółte', 'Brodzik / strefa dla nieumiejących pływać / strefa dla umiejących pływać'],
        ['Numer ratunkowy nad wodą', '601 100 100'],
        ['Numer ratunkowy w górach', '601 100 300'],
        ['W górach', 'Sprawdź pogodę, idź szlakiem, powiedz komuś, dokąd idziesz'],
      ],
      questions: [
        { id: 'l1ignb', q: 'Co zdejmujesz przed lekcją WF?', options: ['zegarek i biżuterię', 'buty sportowe', 'koszulkę sportową', 'nic nie zdejmuję'], answer: 0, explain: 'Zegarek, łańcuszek czy kolczyki mogą zranić ciebie albo kolegę podczas ćwiczeń.' },
        { id: 'f0cked', q: 'Kiedy możesz ćwiczyć na drabinkach albo na skrzyni?', options: ['gdy nauczyciel pozwoli', 'zawsze, gdy sala jest otwarta', 'podczas przerwy, gdy nikt nie widzi', 'gdy kolega mnie namówi'], answer: 0, explain: 'Z przyrządów korzystamy tylko za zgodą i pod opieką nauczyciela.' },
        { id: 'ckqbo5', q: 'Podczas gry skręciłeś kostkę, ale boli tylko trochę. Co robisz?', options: ['od razu mówię o tym nauczycielowi', 'gram dalej, żeby nie przeszkadzać', 'idę sam do domu', 'nikomu nie mówię'], answer: 0, explain: 'Każdy uraz zgłaszamy nauczycielowi – nawet mały może być poważny.' },
        { id: 'wni1nz', q: 'Jaki jest numer alarmowy, pod który dzwonisz w nagłym wypadku?', options: ['112', '601 100 300', '100', '911'], answer: 0, explain: '112 to numer alarmowy w Polsce i w całej Unii Europejskiej.' },
        { id: 'qice1n', q: 'Jak bezpiecznie upaść do tyłu?', options: ['przyciągnąć brodę do klatki i zaokrąglić plecy', 'podeprzeć się za plecami wyprostowanymi rękami', 'odchylić głowę do tyłu i wyprostować plecy', 'usztywnić całe ciało'], answer: 0, explain: 'Broda przy klatce chroni głowę, a zaokrąglone plecy pozwalają się przetoczyć. Prostymi rękami łatwo złamać nadgarstek.' },
        { id: 'lx1cux', q: 'Na kąpielisku powiewa czerwona flaga. Co to znaczy?', options: ['zakaz kąpieli', 'kąpiel dozwolona', 'kąpiel tylko dla dorosłych', 'woda jest ciepła'], answer: 0, explain: 'Czerwona flaga to zakaz kąpieli. Wywiesza się ją np. przy zimnej wodzie, silnym wietrze albo burzy.' },
        { id: '1bcvc1', q: 'Na kąpielisku nie ma żadnej flagi. Co to znaczy?', options: ['ratownik nie pełni dyżuru – nie kąpię się', 'można się kąpać bez ograniczeń', 'kąpiel jest dozwolona tylko w żółtej strefie', 'flagę ktoś ukradł, więc wolno pływać'], answer: 0, explain: 'Brak flagi oznacza brak dyżuru ratowniczego. Bez ratownika się nie kąpiemy.' },
        { id: 'weyb9w', q: 'Nie umiesz jeszcze pływać. Gdzie możesz się kąpać na kąpielisku?', options: ['w strefie wyznaczonej czerwonymi bojami', 'za żółtymi bojami', 'gdzie chcę, byle płytko', 'przy pomoście, gdzie skaczą dorośli'], answer: 0, explain: 'Czerwone boje wyznaczają strefę dla nieumiejących pływać (woda do 120 cm). Małe dzieci kąpią się w brodziku z białymi bojami.' },
        { id: 'f601sz', q: 'Jaki jest numer ratunkowy nad wodą?', options: ['601 100 100', '601 100 300', '997', '123 456 789'], answer: 0, explain: 'Nad wodą: 601 100 100. W górach: 601 100 300. Zawsze działa też 112.' },
        { id: 'v0aqbx', q: 'Jaki jest numer ratunkowy w górach?', options: ['601 100 300', '601 100 100', '998', '700 800 900'], answer: 0, explain: 'W górach dzwonisz do ratowników górskich: 601 100 300 (albo 112).' },
        { id: 'coc9q8', q: 'Co robisz w górach, gdy nadchodzi burza?', options: ['zawracam i schodzę w bezpieczne miejsce', 'wchodzę na szczyt, żeby zdążyć', 'chowam się pod samotnym drzewem', 'idę na skróty poza szlakiem'], answer: 0, explain: 'W burzę najbezpieczniej zawrócić. Szczyty i samotne drzewa przyciągają pioruny.' },
        { id: 't45ytr', q: 'Które zachowanie w parku narodowym jest właściwe?', options: ['chodzę wyznaczonym szlakiem i zabieram śmieci', 'zrywam kwiaty i zabieram je do domu na pamiątkę', 'karmię dzikie zwierzęta i podchodzę do nich blisko', 'głośno puszczam muzykę'], answer: 0, explain: 'W parku narodowym chronimy przyrodę: idziemy szlakiem, nie zrywamy roślin, nie hałasujemy.' },
        { id: 'q660oz', q: 'Prawda czy fałsz?\nPrzed wyjściem w góry warto sprawdzić prognozę pogody i powiedzieć komuś, dokąd się idzie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Pogoda w górach zmienia się szybko. Gdy ktoś wie, dokąd poszedłeś, łatwiej cię odnaleźć.' },
        { id: '22torq', q: 'Prawda czy fałsz?\nZimą można bezpiecznie chodzić po każdym zamarzniętym stawie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Lód może być cienki i się załamać. Nie wchodzimy na zamarznięte stawy i rzeki.' },
      ],
    },
    {
      id: 'ruch-zdrowie-fair-play',
      name: 'Ruch, zdrowie i fair play',
      basis: 'Dz.U. 2026 poz. 378, wychowanie fizyczne, Klasa IV: dz. 6 „Monitorowanie aktywności i sprawności fizycznej”, wym. 1 (zdolności motoryczne), wym. 2 (cechy prawidłowej postawy ciała), wym. 3 (pomiar tętna przed i po wysiłku); dz. 1 wym. 4 (prawidłowa postawa ciała); dz. 2 wym. 1 (elementy techniczne koszykówki, piłki nożnej, piłki ręcznej i siatkówki); dz. 3 (lekkoatletyka: start wysoki, sztafeta, skok w dal z miejsca, marszobieg); dz. 5 (relaksacja: ćwiczenia oddechowe i rozciągające); dz. 8 „Kompetencje społeczne”, wym. 1 (idea olimpizmu i fair play), wym. 3 (szacunek dla przeciwnika i sędziego), wym. 6 (organizator, sędzia, kibic), wym. 7 (kulturalne kibicowanie). Olimpizm: pierwsze nowożytne igrzyska – Ateny 1896; koła olimpijskie i motto – Międzynarodowy Komitet Olimpijski (sprawdzone 1.11.2026). Liczba zawodników na boisku – podstawowe przepisy gier.',
      theory: `
        <h3>Zdolności motoryczne – co potrafi twoje ciało?</h3>
        <table>
          <tr><th>Zdolność</th><th>Co to jest</th><th>Przykład</th></tr>
          <tr><td><b>siła</b></td><td>pokonywanie oporu, podnoszenie, pchanie</td><td>pompki, przeciąganie liny</td></tr>
          <tr><td><b>szybkość</b></td><td>wykonanie ruchu w jak najkrótszym czasie</td><td>bieg na 60 m</td></tr>
          <tr><td><b>wytrzymałość</b></td><td>długi wysiłek bez dużego zmęczenia</td><td>marszobieg, długa jazda na rowerze</td></tr>
          <tr><td><b>gibkość</b></td><td>duży zakres ruchu w stawach</td><td>skłon w przód, szpagat</td></tr>
          <tr><td><b>zdolności koordynacyjne</b></td><td>zręczność, równowaga, zgranie ruchów</td><td>chodzenie po ławeczce, żonglowanie, kozłowanie piłki</td></tr>
        </table>
        <h3>Prawidłowa postawa ciała</h3>
        <ul>
          <li>Głowa prosto, broda lekko cofnięta, barki na tej samej wysokości.</li>
          <li>Plecy wyprostowane, brzuch lekko wciągnięty.</li>
          <li>Plecak nosisz <b>na obu ramionach</b>. Przy biurku siedzisz prosto, ze stopami na podłodze.</li>
        </ul>
        <h3>Tętno</h3>
        <p><b>Tętno</b> to liczba uderzeń serca na minutę. Wyczujesz je dwoma palcami (wskazującym i środkowym – nie kciukiem) na <b>nadgarstku</b> albo z boku <b>szyi</b>. Szybki sposób: licz uderzenia przez <b>15 sekund</b> i pomnóż przez <b>4</b>.</p>
        <p>Podczas wysiłku tętno <b>rośnie</b>, bo mięśnie potrzebują więcej tlenu. Po odpoczynku wraca do spokojnego rytmu. U osoby, która regularnie ćwiczy, wraca szybciej.</p>
        <h3>Gry zespołowe i lekkoatletyka</h3>
        <table>
          <tr><th>Gra</th><th>Zawodników jednej drużyny na boisku</th><th>Ważne elementy</th></tr>
          <tr><td>koszykówka</td><td>5</td><td>kozłowanie, podanie, rzut do kosza</td></tr>
          <tr><td>siatkówka</td><td>6</td><td>odbicie piłki sposobem górnym i dolnym</td></tr>
          <tr><td>piłka ręczna</td><td>7 (z bramkarzem)</td><td>kozłowanie, podanie, rzut do bramki</td></tr>
          <tr><td>piłka nożna</td><td>11 (z bramkarzem)</td><td>prowadzenie piłki, podanie, strzał</td></tr>
        </table>
        <ul>
          <li><b>Kozłowanie</b> – odbijanie piłki od podłoża jedną ręką w czasie ruchu.</li>
          <li><b>Start wysoki</b> – start do biegu z pozycji stojącej, jedna noga wysunięta w przód.</li>
          <li><b>Sztafeta</b> – drużyna biegnie po kolei, zawodnicy przekazują sobie <b>pałeczkę</b>.</li>
          <li><b>Skok w dal z miejsca</b> – odbicie obunóż, wymach rąk, lądowanie na obie nogi.</li>
          <li><b>Marszobieg</b> – przeplatanie marszu i biegu; buduje wytrzymałość.</li>
        </ul>
        <h3>Odpoczynek po wysiłku</h3>
        <p>Po ćwiczeniach robisz spokojne <b>ćwiczenia oddechowe</b> (wdech nosem, długi wydech ustami) i <b>rozciąganie</b>. Pomagają się wyciszyć i zregenerować.</p>
        <h3>Olimpizm i fair play</h3>
        <ul>
          <li>Pierwsze nowożytne igrzyska olimpijskie odbyły się w <b>1896 r.</b> w <b>Atenach</b>. Ich pomysłodawcą był Francuz <b>Pierre de Coubertin</b>.</li>
          <li>Symbol to <b>pięć splecionych kół</b>: niebieskie, żółte, czarne, zielone i czerwone na białym tle. Oznaczają części świata połączone przez sport.</li>
          <li>Motto olimpijskie: <i>Citius, altius, fortius</i> – „szybciej, wyżej, silniej”. W 2021 r. dodano słowo <i>communiter</i> – „razem”.</li>
          <li><b>Fair play</b> to uczciwa gra: przestrzegasz zasad, szanujesz przeciwnika i sędziego, nie oszukujesz, po meczu podajesz rękę – i gdy wygrasz, i gdy przegrasz.</li>
          <li><b>Kulturalny kibic</b> dopinguje swoją drużynę, ale nie obraża rywali ani sędziego i docenia dobrą grę przeciwnika.</li>
        </ul>
        <div class="tip">💡 Przegrana też uczy. Złość po meczu jest naturalna – ważne, co z nią zrobisz: pogratuluj rywalom i zastanów się, co poprawić.</div>
      `,
      infographicNote: 'U góry zdolności motoryczne, niżej każda z przykładem ćwiczenia; na dole – jak zmierzyć tętno.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '🏃', title: 'Zdolności motoryczne', text: 'co potrafi twoje ciało?', kolor: 5 },
        branches: [
          { title: '💪 Siła', text: 'pokonywanie oporu', items: ['pompki, przeciąganie liny'], kolor: 1 },
          { title: '⚡ Szybkość', text: 'ruch w jak najkrótszym czasie', items: ['bieg na 60 m'], kolor: 1 },
          { title: '🔋 Wytrzymałość', text: 'długi wysiłek bez dużego zmęczenia', items: ['marszobieg'], kolor: 1 },
          { title: '🧘 Gibkość', text: 'duży zakres ruchu w stawach', items: ['skłon w przód, szpagat'], kolor: 1 },
          { title: '🤹 Zdolności koordynacyjne', text: 'zręczność, równowaga, zgranie ruchów', items: ['chodzenie po ławeczce, żonglowanie, kozłowanie'], kolor: 1 },
        ],
        bottom: { title: '❤️ Tętno', items: ['licz uderzenia przez 15 s i pomnóż przez 4', 'podczas wysiłku rośnie – mięśnie potrzebują więcej tlenu'], kolor: 2 },
      },
      flashcards: [
        ['Siła', 'Pokonywanie oporu – podnoszenie, pchanie, pompki'],
        ['Szybkość', 'Wykonanie ruchu w jak najkrótszym czasie'],
        ['Wytrzymałość', 'Długi wysiłek bez dużego zmęczenia'],
        ['Gibkość', 'Duży zakres ruchu w stawach'],
        ['Zdolności koordynacyjne', 'Zręczność, równowaga, zgranie ruchów'],
        ['Tętno', 'Liczba uderzeń serca na minutę; mierzysz na nadgarstku albo szyi'],
        ['Szybki pomiar tętna', 'Liczba uderzeń w 15 s × 4'],
        ['Kozłowanie', 'Odbijanie piłki od podłoża jedną ręką w czasie ruchu'],
        ['Sztafeta', 'Bieg drużyny po kolei z przekazywaniem pałeczki'],
        ['Liczba zawodników na boisku', 'koszykówka 5, siatkówka 6, piłka ręczna 7, piłka nożna 11'],
        ['Pierwsze nowożytne igrzyska', 'Ateny 1896; pomysłodawca: Pierre de Coubertin'],
        ['Koła olimpijskie', '5 kół: niebieskie, żółte, czarne, zielone, czerwone'],
        ['Fair play', 'Uczciwa gra i szacunek dla przeciwnika i sędziego'],
      ],
      questions: [
        { id: 'j405sg', q: 'Biegniesz długo w spokojnym tempie i nie męczysz się szybko. Którą zdolność wtedy wykorzystujesz?', options: ['wytrzymałość', 'gibkość', 'siłę', 'szybkość'], answer: 0, explain: 'Wytrzymałość to zdolność do długiego wysiłku bez dużego zmęczenia.' },
        { id: 'wuo50i', q: 'W skłonie w przód dotykasz dłońmi podłogi. Na czym polega ta zdolność?', options: ['na gibkości', 'na wytrzymałości', 'na sile', 'na szybkości'], answer: 0, explain: 'Gibkość to duży zakres ruchu w stawach.' },
        { id: 't00zji', q: 'Którą zdolność ćwiczysz, chodząc po wąskiej ławeczce?', options: ['równowagę', 'siłę', 'wytrzymałość', 'szybkość'], answer: 0, explain: 'Utrzymanie równowagi to jedna ze zdolności koordynacyjnych.' },
        { id: 'nt8uzq', q: 'Jak nosić plecak, żeby dbać o postawę?', options: ['na obu ramionach', 'na jednym ramieniu', 'w ręce, raz w lewej, raz w prawej', 'ciągnąc po ziemi'], answer: 0, explain: 'Plecak na obu ramionach równo obciąża plecy.' },
        { id: 'xjboan', q: 'Co to jest tętno?', options: ['liczba uderzeń serca na minutę', 'liczba oddechów na godzinę', 'temperatura ciała', 'czas biegu na 60 m'], answer: 0, explain: 'Tętno mówi, ile razy na minutę uderza serce.' },
        { id: 'ep3nme', q: 'W ciągu 15 sekund naliczyłeś 25 uderzeń serca. Ile wynosi tętno na minutę?', options: ['100', '25', '125', '60'], answer: 0, explain: 'Minuta to 4 razy po 15 sekund: 25 · 4 = 100 uderzeń na minutę.' },
        { id: '1hv20c', q: 'Jak zmienia się tętno podczas szybkiego biegu?', options: ['rośnie', 'maleje', 'zatrzymuje się', 'nie zmienia się'], answer: 0, explain: 'Podczas wysiłku mięśnie potrzebują więcej tlenu, więc serce bije szybciej.' },
        { id: '4csru7', q: 'Którym palcem NIE mierzymy tętna?', options: ['kciukiem', 'wskazującym', 'środkowym'], answer: 0, explain: 'W kciuku wyczuwasz własne tętno, więc pomiar byłby niedokładny. Używamy palca wskazującego i środkowego.' },
        { id: '5byvn3', q: 'Ilu zawodników jednej drużyny gra na boisku w siatkówkę?', options: ['6', '5', '7', '11'], answer: 0, explain: 'Siatkówka – 6, koszykówka – 5, piłka ręczna – 7, piłka nożna – 11.' },
        { id: 'uve5uk', q: 'Ilu zawodników jednej drużyny gra na boisku w koszykówkę?', options: ['5', '6', '7', '11'], answer: 0, explain: 'W koszykówce na boisku jest pięciu zawodników z każdej drużyny.' },
        { id: 'i47ehk', q: 'Co to jest kozłowanie?', options: ['odbijanie piłki od podłoża jedną ręką w ruchu', 'kopanie piłki nogą do bramki przeciwnika', 'odbijanie piłki oburącz nad siatką', 'rzut piłką do kosza z jednego miejsca'], answer: 0, explain: 'Kozłowanie stosujesz w koszykówce i piłce ręcznej.' },
        { id: 'fb2mvl', q: 'Co przekazują sobie zawodnicy w sztafecie?', options: ['pałeczkę', 'piłkę do koszykówki', 'skakankę', 'gwizdek'], answer: 0, explain: 'W sztafecie biegacz przekazuje pałeczkę kolejnemu zawodnikowi z drużyny.' },
        { id: 'dmq7a4', q: 'Co robisz po intensywnym wysiłku, żeby się zregenerować?', options: ['spokojne ćwiczenia oddechowe i rozciąganie', 'od razu kolejny szybki sprint przez całe boisko', 'siadam bez ruchu i nic nie piję', 'kładę się na zimnej ziemi'], answer: 0, explain: 'Ćwiczenia oddechowe i rozciągające pomagają się wyciszyć i zregenerować.' },
        { id: 'c6lp16', q: 'Gdzie i kiedy odbyły się pierwsze nowożytne igrzyska olimpijskie?', options: ['w Atenach w 1896 r.', 'w Paryżu w 1924 r.', 'w Warszawie w 1918 r.', 'w Rzymie w 1960 r.'], answer: 0, explain: 'Pierwsze nowożytne igrzyska odbyły się w Atenach w 1896 r. Pomysłodawcą był Pierre de Coubertin.' },
        { id: 'i7f751', q: 'Ile kół jest na fladze olimpijskiej?', options: ['5', '4', '6', '7'], answer: 0, explain: 'Pięć splecionych kół: niebieskie, żółte, czarne, zielone i czerwone.' },
        { id: '02hwii', q: 'Co znaczy motto olimpijskie „Citius, altius, fortius”?', options: ['szybciej, wyżej, silniej', 'razem, zawsze, wszędzie', 'zwycięstwo za wszelką cenę', 'graj czysto i uczciwie'], answer: 0, explain: '„Citius, altius, fortius” to po łacinie „szybciej, wyżej, silniej”. W 2021 r. dodano „communiter” – „razem”.' },
        { id: 'mstvp7', q: 'Które zachowanie jest zgodne z zasadą fair play?', options: ['po meczu podaję rękę rywalom, choć przegraliśmy', 'udaję, że ktoś mnie sfaulował, żeby dostać rzut karny', 'kłócę się z sędzią po każdym gwizdku', 'wyśmiewam słabszego zawodnika'], answer: 0, explain: 'Fair play to uczciwa gra i szacunek dla przeciwnika – także po porażce.' },
        { id: '3845xa', q: 'Jak zachowuje się kulturalny kibic?', options: ['dopinguje swoich i nie obraża rywali ani sędziego', 'gwiżdże na każdego zawodnika drużyny przeciwnej', 'rzuca przedmiotami na boisko, gdy jego drużyna przegrywa', 'wyzywa sędziego'], answer: 0, explain: 'Kulturalny kibic wspiera swoją drużynę i szanuje rywali oraz sędziego.' },
        { id: 'b1vbtw', q: 'Prawda czy fałsz?\nSukces drużyny zależy od zaangażowania wszystkich zawodników, nie tylko najlepszego.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'W grze zespołowej liczy się współpraca całej drużyny.' },
      ],
    },
  ],
});
