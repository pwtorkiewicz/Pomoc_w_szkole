/* Wychowanie fizyczne – klasa 8 (podstawa programowa: rozporządzenie MEN z 14.02.2017, Dz.U. 2017 poz. 356, zał. nr 2,
 * część „Wychowanie fizyczne” w brzmieniu nadanym przez Dz.U. 2025 poz. 1052 – obowiązuje od 1.09.2025; blok „Klasy VII i VIII”,
 * dz. I–IX). W r. szk. 2026/2027 klasa VIII realizuje tę „dotychczasową” podstawę (§ 4 ust. 2 Dz.U. 2026 poz. 378).
 * Priorytet C: tylko wiedza (trening, pomiary, przepisy, bezpieczeństwo, olimpizm) – ćwiczeń aplikacja nie zastąpi; bez lekcji.
 * Fakty sprawdzone 2.11.2026: tekst podstawy – eli.gov.pl; tętno, zalecenia WHO, tabata, nordic walking, olimpizm,
 * turniej „każdy z każdym” – e-materiały i scenariusze zpe.gov.pl; przepisy gier, paraolimpiada i Olimpiady Specjalne –
 * wyszukiwarka (materiały szkoleniowe, paralympic.org.pl, wroclaw.pl, Britannica, specialolympics.org); kąpieliska –
 * Dz.U. 2022 poz. 1979. Szczegóły: docs/PLAN-kl8.md. */
window.SUBJECTS.push({
  id: 'wf',
  name: 'Wychowanie fizyczne',
  icon: '🏃',
  color: '#1f8a9e',
  topics: [
    {
      id: 'trening',
      name: 'Rozgrzewka, trening i relaks',
      basis: 'Dz.U. 2017 poz. 356, zał. nr 2 w brzmieniu z Dz.U. 2025 poz. 1052, wychowanie fizyczne, Klasy VII i VIII: dz. I „Ćwiczenia ogólnorozwojowe”, wym. 2 (trening funkcjonalny wzmacniający gorset mięśniowy), 3 (trening wzmacniający, np. HIIT, tabata, trening obwodowy), 5 (nowoczesne formy aktywności, np. pilates, zumba, nordic walking), 6 (rozgrzewka dostosowana do rodzaju aktywności), 7 (ergonomiczne podnoszenie i przenoszenie przedmiotów), 8 (aktywność fizyczna na świeżym powietrzu); dz. V „Relaksacja i odprężenie”; dz. VII „Sprawność fizyczna w służbach mundurowych i innych zawodach” – dział fakultatywny (o jego realizacji decyduje nauczyciel). Tabata – scenariusze zajęć WF na zpe.gov.pl („TABATA w rytmie serca”, kl. VIII); nordic walking – e-materiał zpe.gov.pl „Ruch to zdrowie”.',
      theory: `
        <h3>Rozgrzewka</h3>
        <ul>
          <li>Przygotowuje <b>mięśnie, stawy, serce i płuca</b> do wysiłku i zmniejsza ryzyko urazu.</li>
          <li>Zaczynasz od lekkich ćwiczeń (trucht, krążenia ramion i bioder), a intensywność <b>zwiększasz stopniowo</b>.</li>
          <li>Rozgrzewkę <b>dopasowujesz do aktywności</b>: przed siatkówką szczególnie barki, nadgarstki i palce, przed biegiem – stawy skokowe, kolana i mięśnie nóg.</li>
        </ul>
        <h3>Trening funkcjonalny i gorset mięśniowy</h3>
        <p>Trening funkcjonalny to ćwiczenia angażujące <b>wiele mięśni naraz</b>, w ruchach podobnych do tych z życia i sportu (przysiad, wykrok, podpór). <b>Gorset mięśniowy</b> to mięśnie brzucha, grzbietu i pośladków – stabilizują kręgosłup i pomagają utrzymać prawidłową postawę. Dobre ćwiczenie: <b>deska</b> (podpór na przedramionach).</p>
        <h3>Treningi wzmacniające</h3>
        <table>
          <tr><th>Trening</th><th>Na czym polega</th></tr>
          <tr><td><b>HIIT</b></td><td>trening interwałowy: krótkie odcinki <b>bardzo intensywnego</b> wysiłku na przemian z odpoczynkiem albo bardzo lekkim wysiłkiem</td></tr>
          <tr><td><b>tabata</b></td><td>rodzaj treningu interwałowego: <b>20 s</b> wysiłku na maksa, <b>10 s</b> przerwy; klasycznie <b>8 rund = 4 minuty</b>. Nazwa od japońskiego badacza Izumiego Tabaty</td></tr>
          <tr><td><b>obwodowy</b></td><td>kilka <b>stacji</b>, na każdej inne ćwiczenie; przechodzisz kolejno od stacji do stacji (to jest <b>obwód</b>) i możesz powtórzyć cały obwód</td></tr>
        </table>
        <h3>Nowoczesne formy aktywności</h3>
        <ul>
          <li><b>Pilates</b> – spokojne, dokładne ćwiczenia na macie, wzmacniające głównie mięśnie brzucha i grzbietu.</li>
          <li><b>Zumba</b> – fitness w formie tańca przy rytmicznej muzyce.</li>
          <li><b>Nordic walking</b> – marsz ze specjalnymi kijkami. Pracują nie tylko nogi, ale też ręce, ramiona i plecy. Można go uprawiać o każdej porze roku.</li>
        </ul>
        <h3>Relaksacja po wysiłku</h3>
        <p>Na koniec zajęć <b>wyciszasz organizm</b>: spokojne rozciąganie i ćwiczenia oddechowe (powolny, głęboki oddech). To pomaga się zregenerować, obniżyć tętno i napięcie oraz poprawia samopoczucie.</p>
        <h3>Jak podnosić ciężkie rzeczy</h3>
        <ul>
          <li>Podchodzisz blisko, <b>uginasz kolana</b> (przysiad), plecy trzymasz <b>proste</b>.</li>
          <li>Ciężar trzymasz <b>blisko ciała</b> i unosisz go siłą nóg, a nie pleców.</li>
          <li><b>Nie skręcasz tułowia</b> z ciężarem w rękach – obracasz się całym ciałem. Duże i ciężkie przedmioty przenosicie we dwoje.</li>
        </ul>
        <h3>Ruch na świeżym powietrzu</h3>
        <p>Aktywność na dworze służy zdrowiu fizycznemu i psychicznemu: pomaga się zregenerować, poprawia samopoczucie i chroni przed chorobami (profilaktyka zdrowotna). Warto ćwiczyć na zewnątrz także jesienią i zimą – w stroju dopasowanym do pogody.</p>
        <h3>Sprawność w pracy (dział do wyboru nauczyciela)</h3>
        <p>Przy rekrutacji do <b>służb mundurowych</b> sprawdza się sprawność fizyczną, np. biegami średnimi i długimi, pompkami (uginanie ramion w podporze przodem) i podciąganiem na drążku – w tej pracy trzeba być wytrzymałym i silnym. Wysokiej sprawności wymagają też np. zawód sportowca, ratownika GOPR, trenera personalnego czy górnika.</p>
        <div class="tip">💡 Tabata = <b>20 – 10 – 8</b>: 20 s pracy, 10 s przerwy, 8 rund (4 minuty).</div>
      `,
      infographicNote: 'Czytaj od góry: od rozgrzewki przez trening do wyciszenia.',
      infographic: {
        type: 'kroki',
        items: [
          { icon: '🔥', title: 'Rozgrzewka', text: 'od lekkich ćwiczeń, stopniowo mocniej; dopasowana do aktywności', kolor: 2 },
          { icon: '💪', title: 'Trening funkcjonalny', text: 'wiele mięśni naraz: przysiad, wykrok, podpór; wzmacnia gorset mięśniowy' },
          { icon: '⏱️', title: 'Trening wzmacniający', items: ['HIIT – bardzo intensywnie na przemian z odpoczynkiem', 'tabata – 20 s pracy, 10 s przerwy', 'obwodowy – stacje po kolei'] },
          { icon: '🧘', title: 'Relaksacja', text: 'spokojne rozciąganie i oddech – regeneracja, niższe tętno', kolor: 3 },
        ],
        bottom: { title: '💡 Tabata = 20 – 10 – 8', text: '20 s pracy, 10 s przerwy, 8 rund (4 minuty)', kolor: 4 },
      },
      flashcards: [
        ['Po co rozgrzewka?', 'Przygotowuje mięśnie, stawy, serce i płuca do wysiłku; zmniejsza ryzyko urazu'],
        ['Jak prowadzić rozgrzewkę?', 'Od lekkich ćwiczeń, stopniowo coraz intensywniej; dopasowana do rodzaju aktywności'],
        ['Trening funkcjonalny', 'Ćwiczenia wielu mięśni naraz w ruchach podobnych do codziennych i sportowych (przysiad, wykrok, podpór)'],
        ['Gorset mięśniowy', 'Mięśnie brzucha, grzbietu i pośladków stabilizujące kręgosłup'],
        ['HIIT', 'Trening interwałowy: krótkie odcinki bardzo intensywnego wysiłku na przemian z odpoczynkiem lub lekkim wysiłkiem'],
        ['Tabata', '20 s wysiłku na maksa, 10 s przerwy; klasycznie 8 rund = 4 minuty'],
        ['Trening obwodowy', 'Kilka stacji z różnymi ćwiczeniami wykonywanymi po kolei (obwód)'],
        ['Pilates', 'Spokojne, dokładne ćwiczenia na macie wzmacniające głównie mięśnie brzucha i grzbietu'],
        ['Zumba', 'Fitness w formie tańca przy rytmicznej muzyce'],
        ['Nordic walking', 'Marsz ze specjalnymi kijkami; pracują też ręce, ramiona i plecy'],
        ['Relaksacja po wysiłku', 'Spokojne rozciąganie i ćwiczenia oddechowe – regeneracja i wyciszenie'],
        ['Ergonomiczne podnoszenie', 'Ugięte kolana, proste plecy, ciężar blisko ciała, bez skrętu tułowia'],
        ['Próby sprawności w służbach mundurowych (przykłady)', 'Biegi średnie i długie, pompki, podciąganie na drążku'],
      ],
      questions: [
        { id: 'lbeqpn', q: 'Po co przed zajęciami robisz rozgrzewkę?', options: ['żeby porządnie się zmęczyć jeszcze przed rozpoczęciem gry', 'żeby przygotować mięśnie, stawy i serce do wysiłku', 'żeby rozciągnąć mięśnie do granic możliwości', 'żeby nauczyciel mógł w tym czasie sprawdzić obecność'], answer: 1, explain: 'Rozgrzane mięśnie i stawy lepiej znoszą wysiłek, a serce i płuca stopniowo przyspieszają pracę.' },
        { id: 'pmmpvv', q: 'Jak powinna przebiegać rozgrzewka?', options: ['od sprintu na maksa, bez lżejszych ćwiczeń na początek', 'od lekkich ćwiczeń, ze stopniowym zwiększaniem intensywności', 'od najtrudniejszych ćwiczeń, ze stopniowym zmniejszaniem intensywności', 'od statycznego rozciągania na siedząco, bez żadnego ruchu'], answer: 1, explain: 'Intensywność zwiększamy stopniowo – organizm ma czas przygotować się do wysiłku.' },
        { id: 'p6bkn5', q: 'Przed meczem siatkówki szczególnie rozgrzewasz:', options: ['barki, nadgarstki i palce', 'tylko mięśnie szyi', 'wyłącznie stawy skokowe', 'nic – w siatkówce rozgrzewka nie jest potrzebna'], answer: 0, explain: 'Rozgrzewkę dopasowujemy do aktywności. W siatkówce mocno pracują ręce: barki, nadgarstki i palce.' },
        { id: 'fw22a5', q: 'Co to jest „gorset mięśniowy”?', options: ['specjalny pas do ćwiczeń na siłowni', 'mięśnie brzucha, grzbietu i pośladków stabilizujące kręgosłup', 'mięśnie łydek i stóp odpowiadające za odbicie przy skoku', 'obcisłe ubranie uciskowe noszone przez sportowców na treningu'], answer: 1, explain: 'Silne mięśnie brzucha, grzbietu i pośladków utrzymują kręgosłup i pomagają zachować prawidłową postawę.' },
        { id: '67cs2k', q: 'Które ćwiczenie dobrze wzmacnia gorset mięśniowy?', options: ['deska (podpór na przedramionach)', 'leżenie na plecach bez ruchu', 'krążenia nadgarstków', 'chodzenie na palcach'], answer: 0, explain: 'W desce pracują mięśnie brzucha, grzbietu i pośladków – cały gorset mięśniowy.' },
        { id: 'ea2tix', q: 'Na czym polega trening HIIT?', options: ['na bardzo długim, spokojnym biegu w jednym, stałym tempie bez przerw', 'na krótkich, bardzo intensywnych wysiłkach na przemian z odpoczynkiem', 'na ćwiczeniach oddechowych i rozciąganiu w leżeniu na macie', 'na podnoszeniu jednego ciężaru jak najwięcej razy z rzędu'], answer: 1, explain: 'HIIT to trening interwałowy o wysokiej intensywności: krótkie bardzo mocne odcinki przeplatane odpoczynkiem.' },
        { id: '5avqiz', q: 'Jak wygląda klasyczny protokół tabaty?', options: ['20 s wysiłku, 10 s przerwy, 8 rund', '10 s wysiłku, 20 s przerwy, 4 rundy', '1 minuta wysiłku, 1 minuta przerwy, 10 rund', '30 s wysiłku, 30 s przerwy, 6 rund'], answer: 0, explain: 'Tabata: 20 s pracy na maksa i 10 s przerwy. 8 rund po 30 s to 4 minuty.' },
        { id: 'rko5wt', q: 'Ile trwa klasyczna tabata (8 rund po 20 s wysiłku i 10 s przerwy)?', options: ['2 minuty', '4 minuty', '8 minut', '20 minut'], answer: 1, explain: 'Jedna runda trwa 20 + 10 = 30 s. 8 · 30 s = 240 s = 4 minuty.' },
        { id: 'mza9xu', q: 'Na czym polega trening obwodowy?', options: ['na bieganiu wokół boiska', 'na wykonywaniu kolejno ćwiczeń na kilku stacjach', 'na grze w koszykówkę na pół boiska', 'na ćwiczeniu tylko jednej partii mięśni'], answer: 1, explain: 'W treningu obwodowym przechodzisz od stacji do stacji – na każdej czeka inne ćwiczenie.' },
        { id: 'oedyw2', q: 'Która forma aktywności to marsz ze specjalnymi kijkami?', options: ['zumba', 'pilates', 'nordic walking', 'trening obwodowy'], answer: 2, explain: 'Nordic walking to marsz z kijkami – pracują też ręce, ramiona i plecy.' },
        { id: 'nimcp3', q: 'Która forma aktywności to fitness w formie tańca przy rytmicznej muzyce?', options: ['zumba', 'nordic walking', 'trening obwodowy', 'pilates'], answer: 0, explain: 'Zumba łączy ćwiczenia fitness z tańcem przy muzyce.' },
        { id: 'pnu7kr', q: 'Który opis pasuje do pilatesu?', options: ['spokojne, dokładne ćwiczenia na macie wzmacniające brzuch i grzbiet', 'bieg po lesie z mapą i szukanie punktów kontrolnych', 'fitness w formie tańca przy rytmicznej muzyce', 'szybki marsz ze specjalnymi kijkami, w którym pracują też ręce i plecy'], answer: 0, explain: 'Pilates to spokojne, precyzyjne ćwiczenia na macie, mocno angażujące mięśnie brzucha i grzbietu.' },
        { id: 'pgncmc', q: 'Co robisz na koniec intensywnych zajęć, żeby się zregenerować?', options: ['siedzenie bez ruchu na zimnej ławce', 'spokojne rozciąganie i ćwiczenia oddechowe', 'kolejną serię sprintów z maksymalną prędkością', 'wstrzymywanie oddechu na minutę lub dłużej'], answer: 1, explain: 'Rozciąganie i spokojny, głęboki oddech wyciszają organizm i pomagają w regeneracji.' },
        { id: 'vp7jr1', q: 'Jak bezpiecznie podnieść z podłogi ciężką skrzynię?', options: ['na prostych nogach, z mocnym pochyleniem pleców do przodu', 'z przysiadu: ugięte kolana, proste plecy, skrzynia blisko ciała', 'szarpnięciem, z jednoczesnym skrętem tułowia w bok', 'na wyprostowanych rękach, trzymając skrzynię daleko od siebie'], answer: 1, explain: 'Pracują wtedy mocne mięśnie nóg, a kręgosłup jest chroniony. Ciężar trzymamy blisko ciała.' },
        { id: '95ecc1', q: 'Prawda czy fałsz?\nNiosąc ciężki karton, możesz bezpiecznie skręcić tułów, żeby odłożyć go z boku.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Skręt tułowia z ciężarem obciąża kręgosłup. Obracasz się całym ciałem, przestawiając stopy.' },
        { id: '6r9phr', q: 'Które próby sprawności są przykładem testów przy rekrutacji do służb mundurowych (wymienione w podstawie programowej)?', options: ['biegi średnie i długie, pompki, podciąganie na drążku', 'rzut lotką do tarczy i strzelanie z łuku do celu', 'skoki na trampolinie, żonglerka piłkami i jazda na rolkach', 'pływanie synchroniczne i taniec towarzyski w parach'], answer: 0, explain: 'Podstawa podaje przykłady: biegi średnie i długie, uginanie ramion w podporze przodem (pompki) i podciąganie się na drążku.' },
      ],
    },
    {
      id: 'pomiary',
      name: 'Tętno, testy sprawności i monitorowanie',
      basis: 'Dz.U. 2017 poz. 356, zał. nr 2 w brzmieniu z Dz.U. 2025 poz. 1052, wychowanie fizyczne, Klasy VII i VIII: dz. VI „Monitorowanie aktywności i sprawności fizycznej”, wym. 1 (testy sprawności fizycznej i nowoczesne technologie), 2 (urządzenia pomiarowe: aplikacje mobilne, opaski na rękę, sporttestery), 3 (pomiar dziennej aktywności); dz. I wym. 4 (technologie do oceny dziennej aktywności); „Warunki i sposób realizacji” – testy sprawnościowe z art. 28 ust. 2a Prawa oświatowego (cztery próby, luty–kwiecień, nie są kryterium oceny). Tętno, tętno maksymalne i zalecenia WHO – e-materiały zpe.gov.pl „Rola aktywności fizycznej w życiu człowieka” i „Tętno i jego pomiar”.',
      theory: `
        <h3>Testy sprawności w szkole</h3>
        <p>Co roku <b>od lutego do kwietnia</b> robi się w szkole cztery próby:</p>
        <table>
          <tr><th>Próba</th><th>Co mierzy</th></tr>
          <tr><td>bieg wahadłowy <b>10 × 5 m</b></td><td>zdolności szybkościowo-siłowo-koordynacyjne</td></tr>
          <tr><td><b>20-metrowy</b> wytrzymałościowy bieg wahadłowy (test Eurofit)</td><td>wytrzymałość w biegu</td></tr>
          <tr><td><b>deska</b> – podpór leżąc przodem na przedramionach</td><td>siłę i wytrzymałość mięśni całego ciała</td></tr>
          <tr><td><b>skok w dal z miejsca</b></td><td>skoczność i siłę</td></tr>
        </table>
        <p>Wyniki <b>nie są podstawą oceny</b> z WF. Pokazują twoje mocne i słabe strony i pomagają zaplanować dalsze ćwiczenia.</p>
        <h3>Tętno</h3>
        <ul>
          <li>Tętno to liczba uderzeń serca na minutę. Mierzysz je <b>palcem wskazującym i środkowym</b> na wewnętrznej stronie nadgarstka albo na szyi (z boku krtani).</li>
          <li>Szybki sposób: liczysz uderzenia przez <b>15 sekund</b> i mnożysz przez <b>4</b>.</li>
          <li>Tętno <b>spoczynkowe</b> nastolatka to ok. 85 uderzeń na minutę, dorosłego – ok. 70. U osób regularnie trenujących bywa niższe.</li>
          <li>Podczas wysiłku tętno <b>rośnie</b> – mięśnie potrzebują więcej tlenu. Rośnie też przy stresie, gorączce czy upale.</li>
          <li><b>Tętno maksymalne</b> (HRmax) to najwyższe tętno w czasie wysiłku. Szacuje się je wzorami – najprostszy to <b>220 − wiek</b>. To tylko przybliżenie (są też inne wzory).</li>
        </ul>
        <h3>Ile ruchu?</h3>
        <p>Światowa Organizacja Zdrowia (<b>WHO</b>) zaleca, żeby dzieci i młodzież w wieku 5–17 lat były aktywne fizycznie <b>codziennie co najmniej 60 minut</b> (wysiłek umiarkowany), a trzy razy w tygodniu ruch może być intensywny.</p>
        <h3>Technologia w treningu</h3>
        <ul>
          <li><b>Aplikacje mobilne</b>, <b>opaski na rękę</b> i <b>sporttestery</b> (zegarki z pomiarem tętna) liczą kroki, mierzą tętno i czas aktywności.</li>
          <li>Pomagają zaplanować trening i sprawdzić, czy ruszasz się wystarczająco. Nie wszystkie urządzenia są tak samo dokładne – wynik traktuj jako wskazówkę.</li>
          <li><b>Dzienniczek treningowy</b> – zapisujesz, co ćwiczyłeś, jak długo i jak się czułeś; ustalasz kolejne cele.</li>
        </ul>
        <div class="tip">💡 Tętno w minutę: <b>15 sekund × 4</b>. Np. 21 uderzeń w 15 s → 21 · 4 = 84 na minutę.</div>
      `,
      infographicNote: 'U góry zasady testów, niżej – cztery próby i co mierzą, na dole – tętno i ruch.',
      infographic: {
        type: 'karty', kolumny: 1,
        top: { title: '📋 Testy sprawności', text: 'co roku od lutego do kwietnia; wynik nie jest podstawą oceny', kolor: 5 },
        items: [
          { icon: '🔁', title: 'Bieg wahadłowy 10 × 5 m', text: 'zdolności szybkościowo-siłowo-koordynacyjne' },
          { icon: '🏃', title: '20-metrowy bieg wahadłowy', text: 'wytrzymałość w biegu' },
          { icon: '🧱', title: 'Deska', text: 'siła i wytrzymałość mięśni całego ciała' },
          { icon: '🦘', title: 'Skok w dal z miejsca', text: 'skoczność i siła' },
        ],
        bottom: { title: '❤️ Tętno i ruch', kolor: 2, items: ['tętno na minutę = uderzenia w 15 s × 4', 'tętno maksymalne ≈ 220 − wiek', 'WHO: codziennie co najmniej 60 minut ruchu'] },
      },
      flashcards: [
        ['Kiedy są szkolne testy sprawności?', 'Co roku, od lutego do kwietnia'],
        ['Bieg wahadłowy 10 × 5 m', 'Mierzy zdolności szybkościowo-siłowo-koordynacyjne'],
        ['20-metrowy bieg wahadłowy (Eurofit)', 'Mierzy wytrzymałość w biegu'],
        ['Deska (podpór na przedramionach)', 'Mierzy siłę i wytrzymałość mięśni całego ciała'],
        ['Skok w dal z miejsca', 'Mierzy skoczność i siłę'],
        ['Czy wyniki testów wpływają na ocenę z WF?', 'Nie – służą do poznania mocnych i słabych stron i planowania ćwiczeń'],
        ['Szybki pomiar tętna', 'Liczba uderzeń w 15 s × 4'],
        ['Gdzie mierzymy tętno?', 'Na wewnętrznej stronie nadgarstka albo na szyi; palcem wskazującym i środkowym'],
        ['Tętno spoczynkowe nastolatka', 'Ok. 85 uderzeń na minutę'],
        ['Tętno maksymalne – najprostszy wzór', '220 − wiek (przybliżenie)'],
        ['Zalecenie WHO dla 5–17 lat', 'Codziennie co najmniej 60 minut ruchu'],
        ['Sporttester', 'Urządzenie (np. zegarek) mierzące m.in. tętno podczas wysiłku'],
        ['Dzienniczek treningowy', 'Zapis ćwiczeń, czasu i samopoczucia; pomaga wyznaczać cele'],
      ],
      questions: [
        { id: 't146xq', q: 'W jakim okresie przeprowadza się w szkole testy sprawności fizycznej?', options: ['od września do listopada', 'od lutego do kwietnia', 'w maju i czerwcu', 'w czasie ferii zimowych'], answer: 1, explain: 'Według podstawy programowej testy sprawnościowe przeprowadza się od lutego do kwietnia.' },
        { id: 'jn07ic', q: 'Która próba NIE należy do czterech szkolnych testów sprawności?', options: ['bieg wahadłowy 10 × 5 m', 'deska', 'skok w dal z miejsca', 'rzut piłką lekarską'], answer: 3, explain: 'Cztery próby to: bieg wahadłowy 10 × 5 m, 20-metrowy wytrzymałościowy bieg wahadłowy, deska i skok w dal z miejsca.' },
        { id: 'tix7v4', q: 'Co mierzy 20-metrowy wytrzymałościowy bieg wahadłowy?', options: ['wytrzymałość w biegu', 'gibkość kręgosłupa', 'skoczność', 'siłę chwytu dłoni'], answer: 0, explain: 'To test z europejskiego zestawu Eurofit – sprawdza wytrzymałość w biegu.' },
        { id: '9imh85', q: 'Co mierzy skok w dal z miejsca?', options: ['wytrzymałość', 'skoczność i siłę', 'równowagę', 'szybkość reakcji na sygnał'], answer: 1, explain: 'Skok w dal z miejsca służy do pomiaru skoczności i siły.' },
        { id: 'jd85b7', q: 'Do czego służą wyniki szkolnych testów sprawności?', options: ['są podstawą wystawienia oceny semestralnej i rocznej z WF', 'pomagają poznać mocne i słabe strony i zaplanować ćwiczenia', 'decydują o przyjęciu do wybranego liceum po ósmej klasie', 'służą do porównywania szkół w ogólnopolskim rankingu'], answer: 1, explain: 'Podstawa mówi wprost: pomiary nie mogą być kryterium oceny – służą do planowania rozwoju sprawności.' },
        { id: 'x1i6h9', q: 'W ciągu 15 sekund naliczyłeś 22 uderzenia serca. Ile wynosi tętno na minutę?', options: ['66', '88', '44', '110'], answer: 1, explain: 'Minuta to 4 razy po 15 sekund: 22 · 4 = 88 uderzeń na minutę.' },
        { id: 'dggmst', q: 'Po biegu naliczyłeś 40 uderzeń serca w ciągu 15 sekund. Ile wynosi tętno na minutę?', options: ['120', '140', '160', '180'], answer: 2, explain: '40 · 4 = 160 uderzeń na minutę.' },
        { id: 'd57qxp', q: 'Według wzoru 220 − wiek, ile wynosi szacunkowe tętno maksymalne 14-latka?', options: ['196', '206', '214', '234'], answer: 1, explain: '220 − 14 = 206. To tylko przybliżenie – są też inne wzory.' },
        { id: 'b2li36', q: 'Jakie jest typowe tętno spoczynkowe nastolatka?', options: ['ok. 40 uderzeń na minutę', 'ok. 85 uderzeń na minutę', 'ok. 150 uderzeń na minutę', 'ok. 200 uderzeń na minutę'], answer: 1, explain: 'Materiały ZPE podają ok. 85 uderzeń na minutę u nastolatka (u dorosłego ok. 70).' },
        { id: '0wur2r', q: 'Dlaczego podczas wysiłku tętno rośnie?', options: ['bo zmęczone serce zaczyna bić coraz wolniej', 'bo pracujące mięśnie potrzebują więcej tlenu', 'bo w czasie wysiłku spada temperatura ciała', 'bo podczas biegu oddychamy wolniej i płycej niż w spoczynku'], answer: 1, explain: 'Pracujące mięśnie zużywają więcej tlenu – serce bije szybciej, żeby go dostarczyć.' },
        { id: '6vm2ur', q: 'Ile ruchu dziennie zaleca WHO dzieciom i młodzieży w wieku 5–17 lat?', options: ['co najmniej 15 minut', 'co najmniej 30 minut', 'co najmniej 60 minut', 'co najmniej 3 godziny'], answer: 2, explain: 'WHO zaleca co najmniej 60 minut aktywności fizycznej każdego dnia.' },
        { id: '51ddtq', q: 'Którym palcem NIE mierzysz tętna?', options: ['wskazującym', 'środkowym', 'kciukiem'], answer: 2, explain: 'W kciuku wyczuwasz własne tętno, więc pomiar byłby niedokładny.' },
        { id: 'kb58s1', q: 'Które urządzenie pozwala mierzyć tętno podczas biegu?', options: ['sporttester (zegarek z pomiarem tętna)', 'zwykły stoper do mierzenia czasu biegu', 'taśma miernicza do pomiaru skoku w dal', 'gwizdek, którym nauczyciel daje sygnał startu'], answer: 0, explain: 'Sporttestery i opaski z czujnikiem mierzą tętno w czasie wysiłku.' },
        { id: 'az8jih', q: 'Prawda czy fałsz?\nWynik pomiaru z każdej opaski sportowej jest zawsze dokładny i nie trzeba go traktować z rezerwą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Urządzenia różnią się dokładnością. Ich wyniki to wskazówka, a nie pomiar laboratoryjny.' },
        { id: '1ybbh5', q: 'Co zapisujesz w dzienniczku treningowym?', options: ['oceny z innych przedmiotów i terminy sprawdzianów', 'formy aktywności, ich czas i samopoczucie oraz kolejne cele', 'wyniki meczów ulubionej reprezentacji', 'hasła i loginy do aplikacji treningowych'], answer: 1, explain: 'Dzienniczek pomaga śledzić postępy i świadomie planować aktywność.' },
      ],
      tasks: [
        {
          id: 'z0jcqs',
          points: 3,
          q: '14-letnia Ola zmierzyła tętno. Przed zajęciami naliczyła 19 uderzeń w ciągu 15 sekund, a zaraz po biegu – 42 uderzenia w ciągu 15 sekund.\na) Oblicz tętno spoczynkowe Oli (na minutę).\nb) Oblicz tętno Oli po biegu (na minutę).\nc) Oszacuj tętno maksymalne Oli wzorem 220 − wiek. O ile uderzeń na minutę tętno po biegu było od niego niższe?',
          steps: [
            'a) 19 · 4 = 76 uderzeń na minutę.',
            'b) 42 · 4 = 168 uderzeń na minutę.',
            'c) 220 − 14 = 206 uderzeń na minutę (szacunkowo).',
            'Różnica: 206 − 168 = 38 uderzeń na minutę.',
          ],
          answer: 'a) 76/min; b) 168/min; c) ok. 206/min, tętno po biegu niższe o 38 uderzeń na minutę.',
          scoring: [
            '1 pkt – tętno spoczynkowe: 76 uderzeń na minutę.',
            '1 pkt – tętno po biegu: 168 uderzeń na minutę.',
            '1 pkt – tętno maksymalne 206 i różnica 38 uderzeń na minutę.',
          ],
        },
      ],
    },
    {
      id: 'gry',
      name: 'Gry zespołowe, rozgrywki i lekkoatletyka',
      basis: 'Dz.U. 2017 poz. 356, zał. nr 2 w brzmieniu z Dz.U. 2025 poz. 1052, wychowanie fizyczne, Klasy VII i VIII: dz. II „Gry zespołowe i rekreacyjne”, wym. 1 (elementy techniczne w koszykówce, piłce nożnej, piłce ręcznej i siatkówce), 2 (pozycja w ataku i obronie), 4 (zawodnik i sędzia), 5 (rozgrywki systemem pucharowym i „każdy z każdym”); dz. III „Lekkoatletyka”, wym. 1 (bieg krótki ze startu niskiego), 3 (rzut zamachowy piłką z krokiem skrzyżnym), 4 (przekazanie pałeczki w sztafecie), 5 (marszobieg lub bieg terenowy z orientacją), 6 (skok w dal z rozbiegu); dz. IX wym. 3 i 6 (przepisy, rola sędziego i organizatora). Przepisy gier (liczba zawodników, sety w siatkówce, 24 i 3 sekundy w koszykówce, pole bramkowe, rzut karny z 7 m, 3 kroki i 3 sekundy w piłce ręcznej) – materiały szkoleniowe i regulaminy znalezione wyszukiwarką 2.11.2026; turniej „każdy z każdym” – scenariusz zajęć na zpe.gov.pl (5 drużyn – 10 meczów); liczby meczów policzone.',
      theory: `
        <h3>Gry zespołowe – najważniejsze przepisy</h3>
        <p>„Graczy” – ilu zawodników jednej drużyny jest naraz na boisku.</p>
        <table>
          <tr><th>Gra</th><th>Graczy</th><th>Warto wiedzieć</th></tr>
          <tr><td><b>siatkówka</b></td><td>6</td><td>set wygrywa drużyna, która zdobędzie <b>25 punktów</b> i ma co najmniej <b>2 punkty przewagi</b>; przy stanie 2:2 w setach gra się piąty set (<b>tie-break</b>) do <b>15 punktów</b></td></tr>
          <tr><td><b>koszykówka</b></td><td>5</td><td>drużyna ma <b>24 sekundy</b> na akcję; zawodnik nie może przebywać dłużej niż <b>3 sekundy</b> w polu 3 sekund przeciwnika, gdy jego drużyna ma piłkę</td></tr>
          <tr><td><b>piłka ręczna</b></td><td>7 (z bramkarzem)</td><td>w <b>polu bramkowym</b> (linia 6 m) może być tylko bramkarz; <b>rzut karny z 7 m</b>; z piłką w rękach najwyżej <b>3 kroki</b> i najwyżej <b>3 sekundy</b> trzymania piłki</td></tr>
          <tr><td><b>piłka nożna</b></td><td>11 (z bramkarzem)</td><td>–</td></tr>
        </table>
        <ul>
          <li><b>Zwód</b> – ruch, który ma zmylić przeciwnika (np. pozorujesz podanie w jedną stronę, a biegniesz w drugą).</li>
          <li>Obrona <b>„każdy swego”</b> – każdy obrońca pilnuje jednego, wyznaczonego przeciwnika.</li>
          <li><b>Sędzia</b> pilnuje przepisów, przyznaje punkty i rzuty, decyduje o przewinieniach. Jego decyzje się szanuje.</li>
        </ul>
        <h3>Jak zaplanować szkolne rozgrywki</h3>
        <table>
          <tr><th>System</th><th>Zasada</th><th>Liczba meczów dla n drużyn</th></tr>
          <tr><td><b>pucharowy</b></td><td>przegrany <b>odpada</b>, zwycięzca gra dalej, aż do finału</td><td><b>n − 1</b> (każdy mecz eliminuje jedną drużynę)</td></tr>
          <tr><td><b>„każdy z każdym”</b></td><td>każda drużyna gra z każdą inną; o miejscu decyduje <b>tabela</b> (punkty za mecze)</td><td><b>n · (n − 1) : 2</b></td></tr>
        </table>
        <ul>
          <li>Pucharowy jest <b>szybki</b> (mało meczów), ale jedna porażka kończy grę. Gdy liczba drużyn nie pasuje do par, część drużyn przechodzi dalej bez meczu (<b>wolny los</b>).</li>
          <li>„Każdy z każdym” jest <b>sprawiedliwszy</b> (każdy gra tyle samo razy), ale trwa dłużej. Np. 5 drużyn: 5 · 4 : 2 = <b>10 meczów</b>.</li>
          <li>Można łączyć systemy: eliminacje w grupach „każdy z każdym”, a potem faza pucharowa.</li>
        </ul>
        <h3>Lekkoatletyka</h3>
        <ul>
          <li><b>Start niski</b> – przed sygnałem startu opierasz ręce o ziemię; stosuje się go w <b>biegach krótkich</b> (sprintach), żeby szybko osiągnąć maksymalną prędkość.</li>
          <li><b>Sztafeta</b> – kolejni zawodnicy drużyny biegną po sobie odcinki trasy i <b>przekazują sobie pałeczkę</b>.</li>
          <li><b>Skok w dal z rozbiegu</b> – po rozbiegu odbijasz się z <b>belki</b> albo ze <b>strefy odbicia</b> i lądujesz w piasku.</li>
          <li><b>Rzut piłką z rozbiegu</b> – przed wyrzutem robisz <b>krok skrzyżny</b> i przyjmujesz pozycję wyrzutną.</li>
          <li><b>Bieg terenowy z orientacją</b> – pokonujesz trasę w terenie, korzystając z mapy (np. szukasz punktów kontrolnych).</li>
        </ul>
        <div class="tip">💡 „Każdy z każdym”: <b>n · (n − 1) : 2</b> meczów. Puchar: <b>n − 1</b> meczów.</div>
      `,
      infographicNote: 'Porównuj w poziomie dwa systemy rozgrywek; u góry – ilu graczy jednej drużyny jest na boisku.',
      infographic: {
        type: 'porownanie',
        top: { title: '👥 Graczy na boisku', text: 'siatkówka 6 · koszykówka 5\npiłka ręczna 7 · piłka nożna 11', kolor: 4 },
        kolumny: [{ title: '🏆 Pucharowy', kolor: 1 }, { title: '🔄 Każdy z każdym', kolor: 5 }],
        wiersze: [
          { label: 'zasada', cells: ['przegrany odpada', 'każdy gra z każdym, decyduje tabela'] },
          { label: 'liczba meczów dla n drużyn', cells: ['n − 1', 'n · (n − 1) : 2'], bold: true },
          { label: 'przykład: 5 drużyn', cells: ['4 mecze', '10 meczów'], bold: true },
          { label: 'plus i minus', cells: ['szybki, ale jedna porażka kończy grę', 'sprawiedliwszy, ale trwa dłużej'] },
        ],
      },
      flashcards: [
        ['Siatkówka – liczba zawodników', '6 w jednej drużynie na boisku'],
        ['Koszykówka – liczba zawodników', '5 w jednej drużynie na boisku'],
        ['Piłka ręczna – liczba zawodników', '7 (z bramkarzem)'],
        ['Siatkówka – kiedy wygrywasz seta?', 'Gdy masz co najmniej 25 punktów i 2 punkty przewagi'],
        ['Tie-break w siatkówce', 'Piąty set przy stanie 2:2, gra się do 15 punktów (z 2 punktami przewagi)'],
        ['Koszykówka – 24 sekundy', 'Czas, jaki drużyna ma na akcję'],
        ['Koszykówka – 3 sekundy', 'Najdłuższy czas przebywania w polu 3 sekund przeciwnika, gdy twoja drużyna ma piłkę'],
        ['Piłka ręczna – rzut karny', 'Z 7 metrów'],
        ['Piłka ręczna – pole bramkowe', 'Wyznacza je linia 6 m; może w nim być tylko bramkarz'],
        ['Piłka ręczna – kroki i czas z piłką', 'Najwyżej 3 kroki i najwyżej 3 sekundy trzymania piłki'],
        ['Zwód', 'Ruch mylący przeciwnika'],
        ['Obrona „każdy swego”', 'Każdy obrońca pilnuje jednego przeciwnika'],
        ['System pucharowy', 'Przegrany odpada; n drużyn → n − 1 meczów'],
        ['System „każdy z każdym”', 'Każdy gra z każdym; n drużyn → n · (n − 1) : 2 meczów'],
        ['Wolny los', 'Drużyna przechodzi do następnej rundy bez meczu'],
        ['Start niski', 'Start z rękami opartymi o ziemię – w biegach krótkich (sprintach)'],
      ],
      questions: [
        { id: 'qjj1dv', q: 'Ilu zawodników jednej drużyny gra jednocześnie na boisku w piłkę ręczną?', options: ['5', '6', '7', '11'], answer: 2, explain: 'W piłce ręcznej na boisku jest 7 zawodników z każdej drużyny (w tym bramkarz).' },
        { id: '81aob3', q: 'Ilu zawodników jednej drużyny gra jednocześnie na boisku w siatkówkę?', options: ['5', '6', '7', '9'], answer: 1, explain: 'Siatkówka – 6, koszykówka – 5, piłka ręczna – 7, piłka nożna – 11.' },
        { id: '03s1cf', q: 'W secie siatkówki jest 24:24. Kiedy set się skończy?', options: ['gdy któraś drużyna zdobędzie następny punkt', 'gdy jedna drużyna uzyska 2 punkty przewagi', 'gdy obie drużyny dojdą do 30 punktów', 'od razu – set kończy się remisem 24:24'], answer: 1, explain: 'Set wygrywa drużyna, która ma co najmniej 25 punktów i 2 punkty przewagi – przy 24:24 gra się „na przewagi”.' },
        { id: 'riypqz', q: 'Do ilu punktów gra się tie-break (piąty set) w siatkówce?', options: ['do 10', 'do 15', 'do 21', 'do 25'], answer: 1, explain: 'Piąty set, rozgrywany przy stanie 2:2, gra się do 15 punktów – też z 2 punktami przewagi.' },
        { id: 'ikx6sz', q: 'Ile czasu ma drużyna w koszykówce na przeprowadzenie akcji?', options: ['8 sekund', '24 sekundy', '30 sekund', '1 minutę'], answer: 1, explain: 'Zespół ma 24 sekundy na akcję zakończoną rzutem.' },
        { id: 'ayqvur', q: 'Z jakiej odległości wykonuje się rzut karny w piłce ręcznej?', options: ['z 6 m', 'z 7 m', 'z 9 m', 'z 11 m'], answer: 1, explain: 'Rzut karny w piłce ręcznej wykonuje się z 7 metrów. Linia 6 m wyznacza pole bramkowe.' },
        { id: 'fi4upd', q: 'Kto może przebywać w polu bramkowym w piłce ręcznej?', options: ['tylko bramkarz', 'każdy zawodnik drużyny broniącej', 'zawodnik z piłką', 'sędzia i trener'], answer: 0, explain: 'W polu bramkowym (wyznaczonym linią 6 m) może być tylko bramkarz.' },
        { id: 'aflhmn', q: 'Ile najwyżej kroków możesz zrobić z piłką trzymaną w rękach w piłce ręcznej?', options: ['1', '2', '3', '5'], answer: 2, explain: 'Z piłką w rękach można zrobić najwyżej 3 kroki i trzymać ją najwyżej 3 sekundy.' },
        { id: 'noqfwe', q: 'Co to jest zwód?', options: ['przewinienie za popchnięcie rywala', 'ruch, który ma zmylić przeciwnika', 'podanie do bramkarza', 'przerwa na żądanie trenera'], answer: 1, explain: 'Zwód to np. pozorowanie podania w jedną stronę i ruch w drugą – żeby minąć obrońcę.' },
        { id: 'duyx1i', q: 'Na czym polega obrona „każdy swego”?', options: ['każdy obrońca pilnuje jednego przeciwnika', 'wszyscy stoją pod własnym koszem', 'bramkarz broni sam', 'obrońcy zmieniają się co minutę'], answer: 0, explain: 'W obronie „każdy swego” każdy zawodnik odpowiada za krycie jednego rywala.' },
        { id: '62yrcy', q: 'W turnieju systemem pucharowym gra 8 drużyn. Ile meczów trzeba rozegrać, żeby wyłonić zwycięzcę?', options: ['4', '7', '8', '28'], answer: 1, explain: 'Każdy mecz eliminuje jedną drużynę, a odpaść musi 7 z 8: 4 ćwierćfinały + 2 półfinały + finał = 7 meczów.' },
        { id: 'r7lays', q: 'W turnieju „każdy z każdym” gra 4 drużyny. Ile meczów trzeba rozegrać?', options: ['3', '4', '6', '8'], answer: 2, explain: '4 · 3 : 2 = 6 meczów (A–B, A–C, A–D, B–C, B–D, C–D).' },
        { id: 'dleshe', q: 'W turnieju „każdy z każdym” gra 6 drużyn. Ile meczów rozegra każda drużyna?', options: ['3', '5', '6', '15'], answer: 1, explain: 'Każda drużyna gra z każdą z pozostałych 5 drużyn – 5 meczów. Wszystkich meczów jest 6 · 5 : 2 = 15.' },
        { id: '2hxhl2', q: 'Który system rozgrywek jest szybszy, ale jedna porażka kończy udział drużyny?', options: ['pucharowy', '„każdy z każdym”', 'oba tak samo', 'żaden'], answer: 0, explain: 'W systemie pucharowym przegrany odpada, więc meczów jest mało – ale nie ma drugiej szansy.' },
        { id: 'xgki3z', q: 'Co oznacza „wolny los” w turnieju pucharowym?', options: ['drużyna przechodzi do następnej rundy bez meczu', 'drużyna zostaje zdyskwalifikowana z turnieju', 'mecz kończy się remisem i obie drużyny grają dalej', 'drużyna sama wybiera sędziego swojego meczu'], answer: 0, explain: 'Gdy liczba drużyn nie pasuje do par, niektóre przechodzą dalej bez gry – dostają wolny los.' },
        { id: 'dwpjxh', q: 'W jakich biegach stosuje się start niski?', options: ['w biegach krótkich (sprintach)', 'w maratonie i biegach długich', 'w marszobiegu terenowym z mapą', 'w nordic walkingu i marszach'], answer: 0, explain: 'Start niski pozwala szybko osiągnąć maksymalną prędkość – dlatego stosuje się go w sprintach.' },
        { id: 'yr6h50', q: 'Co przekazują sobie zawodnicy w biegu sztafetowym?', options: ['pałeczkę', 'numer startowy', 'piłkę', 'chorągiewkę'], answer: 0, explain: 'W sztafecie kolejni zawodnicy drużyny biegną odcinki trasy i przekazują sobie pałeczkę.' },
        { id: 'i60lp1', q: 'Jaki krok wykonujesz przed wyrzutem w rzucie piłką z rozbiegu?', options: ['krok skrzyżny', 'krok odstawno-dostawny w tył', 'podskok obunóż', 'przysiad podparty'], answer: 0, explain: 'Podstawa programowa: rzut zamachowy piłką z rozbiegu z zaznaczeniem kroku skrzyżnego i pozycji wyrzutnej.' },
      ],
      tasks: [
        {
          id: 'qbxtbe',
          points: 3,
          q: 'Samorząd planuje turniej siatkówki dla 6 klas.\na) Ile meczów trzeba rozegrać systemem „każdy z każdym”?\nb) Ile meczów trzeba rozegrać systemem pucharowym (bez meczu o 3. miejsce)?\nc) Na turniej jest tylko jedna lekcja i jedno boisko, a mecz trwa 8 minut. Który system wybierzesz? Uzasadnij obliczeniem.',
          steps: [
            'a) Każda z 6 drużyn gra z 5 pozostałymi: 6 · 5 = 30, ale każdy mecz policzyliśmy dwa razy, więc 30 : 2 = 15 meczów.',
            'b) Każdy mecz eliminuje jedną drużynę, a odpaść musi 5 drużyn – 5 meczów (np. 2 mecze w 1. rundzie, 2 drużyny z wolnym losem, 2 półfinały, finał).',
            'c) „Każdy z każdym”: 15 · 8 min = 120 min – nie zmieści się w 45-minutowej lekcji.',
            'Pucharowy: 5 · 8 min = 40 min – zmieści się w lekcji. Wybieram system pucharowy.',
          ],
          answer: 'a) 15 meczów; b) 5 meczów; c) system pucharowy – 5 meczów to 40 min (mieści się w lekcji), a 15 meczów „każdy z każdym” to 120 min.',
          scoring: [
            '1 pkt – 15 meczów w systemie „każdy z każdym”.',
            '1 pkt – 5 meczów w systemie pucharowym.',
            '1 pkt – wybór systemu pucharowego z uzasadnieniem obliczeniem czasu.',
          ],
        },
      ],
    },
    {
      id: 'bezpieczenstwo',
      name: 'Bezpieczeństwo, olimpizm i fair play',
      basis: 'Dz.U. 2017 poz. 356, zał. nr 2 w brzmieniu z Dz.U. 2025 poz. 1052, wychowanie fizyczne, Klasy VII i VIII: dz. VIII „Bezpieczeństwo w aktywności fizycznej”, wym. 1 (zapobieganie urazom i wypadkom), 2 (samoasekuracja i asekuracja), 3 (aktywność nad wodą, w górach i w terenie zielonym); dz. IX „Kompetencje społeczne”, wym. 1 (idea olimpizmu i fair play), 2–4, 7 (kulturalne kibicowanie), 10 (emocje w rywalizacji), 12–14 (wspieranie mniej sprawnych, rozwiązywanie nieporozumień). Postępowanie przy urazach – zgodnie z działem EDB „Złamania, zwichnięcia, skręcenia i oparzenia”. Flagi i boje na kąpielisku – rozporządzenie MSW (t.j. Dz.U. 2022 poz. 1979, § 2 i § 9); numery 601 100 100 i 601 100 300 – sprawdzone 1.11.2026. Olimpizm – e-materiały zpe.gov.pl; paraolimpiada – paralympic.org.pl, wroclaw.pl, Britannica; Olimpiady Specjalne – specialolympics.org.',
      theory: `
        <h3>Skąd biorą się urazy na WF</h3>
        <ul>
          <li>brak rozgrzewki, zbyt trudne ćwiczenie „na siłę”, zmęczenie;</li>
          <li>ćwiczenie zbyt blisko ściany, kaloryfera czy innych osób; źle przenoszone przyrządy;</li>
          <li>niesprawdzony sprzęt, brak asekuracji przy trudnych ćwiczeniach;</li>
          <li>nieodpowiedni strój i obuwie, biżuteria; niesłuchanie poleceń nauczyciela.</li>
        </ul>
        <p><b>Zapobieganie</b>: rozgrzewka, sprawdzony sprzęt i materace, bezpieczne odstępy, strój sportowy, stopniowanie trudności, picie wody, ćwiczenia na trudnych przyrządach tylko za zgodą i pod okiem nauczyciela.</p>
        <h3>Samoasekuracja i asekuracja</h3>
        <ul>
          <li><b>Samoasekuracja</b> – sam chronisz się przed urazem, np. bezpiecznie upadasz: broda przy klatce piersiowej, zaokrąglone plecy, przetoczenie, <b>bez podpierania się wyprostowanymi rękami</b>.</li>
          <li><b>Asekuracja</b> – zabezpieczasz kolegę, np. stoisz obok przy staniu na rękach lub przewrocie, gotów go podtrzymać. Asekurujący jest skupiony i nie żartuje.</li>
        </ul>
        <h3>Gdy dojdzie do urazu</h3>
        <ul>
          <li>Od razu przerwij ćwiczenie i <b>zgłoś to nauczycielowi</b>. W nagłym wypadku – <b>112</b>.</li>
          <li>Podejrzenie złamania lub zwichnięcia: nie prostuj i nie nastawiaj, unieruchom w zastanej pozycji (szczegóły – w EDB).</li>
          <li>Przy skręceniu zimny okład (przez materiał) zmniejsza ból i obrzęk.</li>
        </ul>
        <h3>Planujesz aktywność w terenie</h3>
        <ul>
          <li><b>Nad wodą</b>: tylko kąpielisko strzeżone. Flaga <b>biała</b> – kąpiel dozwolona, <b>czerwona</b> – zakaz, <b>brak flagi</b> – brak ratownika. Boje: białe – brodzik, czerwone – strefa dla nieumiejących pływać, żółte – dla umiejących. Nie skaczesz do wody w nieznanym miejscu (uraz kręgosłupa). Numer ratunkowy: <b>601 100 100</b>.</li>
          <li><b>W górach</b>: sprawdzasz pogodę, idziesz wyznaczonym szlakiem, mówisz komuś, dokąd idziesz; przy burzy zawracasz. Numer ratunkowy: <b>601 100 300</b>, aplikacja <b>Ratunek</b>; ratownicy – GOPR, w Tatrach TOPR.</li>
          <li><b>W lesie i parku narodowym</b>: chodzisz szlakami, nie hałasujesz, nie zrywasz roślin, zabierasz śmieci, ognisko tylko w wyznaczonym miejscu.</li>
        </ul>
        <h3>Olimpizm</h3>
        <ul>
          <li>Starożytne igrzyska odbywały się w <b>Olimpii</b> ku czci Zeusa (pierwsze datuje się na 776 r. p.n.e.).</li>
          <li>Twórca nowożytnego ruchu olimpijskiego: <b>Pierre de Coubertin</b>. Pierwsze nowożytne igrzyska – <b>Ateny 1896</b>.</li>
          <li>Idea olimpijska: rozwój człowieka przez sport, <b>fair play</b>, pokój i przyjaźń między narodami.</li>
          <li><b>Pięć splecionych kół</b> – pięć kontynentów połączonych ideą olimpijską. <b>Znicz</b> – ogień zapalany w greckiej Olimpii i niesiony do miasta igrzysk.</li>
          <li>Motto: „Citius, altius, fortius” – szybciej, wyżej, silniej (w 2021 r. dodano „communiter” – razem).</li>
        </ul>
        <h3>Igrzyska paraolimpijskie i Olimpiady Specjalne</h3>
        <ul>
          <li><b>Igrzyska paraolimpijskie</b> – dla sportowców z niepełnosprawnościami. Ich ojciec to <b>Ludwig Guttmann</b>, lekarz z Wrocławia: w 1948 r. zorganizował zawody łucznicze dla weteranów na wózkach w szpitalu Stoke Mandeville w Anglii. Za pierwsze igrzyska paraolimpijskie uznaje się zawody w <b>Rzymie w 1960 r.</b></li>
          <li><b>Olimpiady Specjalne</b> – zawody dla osób z <b>niepełnosprawnością intelektualną</b>. Zapoczątkowała je Eunice Kennedy Shriver; pierwsze igrzyska odbyły się w Chicago w 1968 r.</li>
        </ul>
        <h3>Fair play i kibicowanie</h3>
        <ul>
          <li>Fair play: przestrzegasz przepisów, szanujesz rywala i sędziego, nie oszukujesz, po meczu dziękujesz za grę – niezależnie od wyniku.</li>
          <li>Kulturalny kibic dopinguje swoich, ale nie obraża rywali ani sędziego.</li>
          <li>W drużynie sukces zależy od wszystkich. Wspierasz słabszych, nie wykluczasz nikogo, spory rozwiązujesz rozmową.</li>
          <li>Wygrana i porażka budzą silne emocje – nazwij je i ochłoń, zanim zareagujesz.</li>
        </ul>
        <div class="tip">💡 <b>Sam</b>oasekuracja – chronisz <b>sam</b> siebie. Asekuracja – chronisz kogoś.</div>
      `,
      infographicNote: 'U góry – co robisz przy urazie; gałęzie: jak chronić siebie i innych, nad wodą i w górach.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        top: { title: '🩹 Uraz na lekcji', text: 'przerwij ćwiczenie, zgłoś nauczycielowi; w nagłym wypadku – 112', kolor: 2 },
        root: { title: 'Bezpiecznie na WF i w terenie' },
        branches: [
          { title: '🛡️ Samoasekuracja', text: 'chronisz sam siebie', kolor: 1, items: ['bezpieczny upadek: broda przy klatce, zaokrąglone plecy, przetoczenie'] },
          { title: '🤝 Asekuracja', text: 'chronisz kogoś', kolor: 1, items: ['stoisz obok, gotów podtrzymać'] },
          { title: '🌊 Nad wodą', kolor: 5, items: ['tylko kąpielisko strzeżone', 'flaga biała – kąpiel, czerwona – zakaz, brak flagi – brak ratownika', 'numer ratunkowy: 601 100 100'] },
          { title: '⛰️ W górach', kolor: 5, items: ['sprawdź pogodę, idź szlakiem, powiedz, dokąd idziesz', 'przy burzy zawracasz', 'numer ratunkowy: 601 100 300, aplikacja Ratunek'] },
        ],
        bottom: { title: '🏅 Fair play', text: 'przepisy, szacunek dla rywala i sędziego, bez oszukiwania', kolor: 3 },
      },
      flashcards: [
        ['Najczęstsze przyczyny urazów na WF (przykłady)', 'Brak rozgrzewki, niesprawdzony sprzęt, brak asekuracji, za mało miejsca, niesłuchanie poleceń'],
        ['Samoasekuracja', 'Ochrona samego siebie, np. bezpieczny upadek'],
        ['Asekuracja', 'Zabezpieczanie innej osoby podczas ćwiczenia'],
        ['Bezpieczny upadek', 'Broda przy klatce, zaokrąglone plecy, przetoczenie, bez podpierania się prostymi rękami'],
        ['Uraz na lekcji', 'Przerwać ćwiczenie i zgłosić nauczycielowi'],
        ['Skręcenie stawu', 'Zimny okład przez materiał; nie nastawiać'],
        ['Numer ratunkowy nad wodą', '601 100 100'],
        ['Numer ratunkowy w górach', '601 100 300 (aplikacja Ratunek)'],
        ['Brak flagi na kąpielisku', 'Brak dyżuru ratownika – nie kąpię się'],
        ['Twórca nowożytnego ruchu olimpijskiego', 'Pierre de Coubertin'],
        ['Pierwsze nowożytne igrzyska', 'Ateny, 1896'],
        ['Pięć kół olimpijskich', 'Pięć kontynentów połączonych ideą olimpijską'],
        ['Znicz olimpijski', 'Ogień zapalany w greckiej Olimpii i niesiony do miasta igrzysk'],
        ['Igrzyska paraolimpijskie', 'Dla sportowców z niepełnosprawnościami; pierwsze – Rzym 1960; ojciec – Ludwig Guttmann'],
        ['Olimpiady Specjalne', 'Zawody dla osób z niepełnosprawnością intelektualną'],
        ['Fair play', 'Uczciwa gra: przepisy, szacunek dla rywala i sędziego'],
      ],
      questions: [
        { id: '0rkj5i', q: 'Która sytuacja na WF najbardziej zwiększa ryzyko urazu?', options: ['ćwiczenie na przyrządzie bez rozgrzewki i bez asekuracji', 'rozgrzewka prowadzona przez nauczyciela przed grą', 'ćwiczenie w stroju sportowym i w obuwiu sportowym', 'sprawdzenie materacy i sprzętu przed rozpoczęciem ćwiczeń'], answer: 0, explain: 'Brak rozgrzewki i asekuracji to częste przyczyny urazów. Pozostałe zachowania im zapobiegają.' },
        { id: '2rf4um', q: 'Czym różni się samoasekuracja od asekuracji?', options: ['samoasekuracja to ochrona siebie, asekuracja – zabezpieczanie innej osoby', 'samoasekuracja to zabezpieczanie innej osoby, asekuracja – ochrona siebie', 'samoasekuracja dotyczy pływania, a asekuracja – gier zespołowych', 'to dwie nazwy tego samego: w obu chodzi o pomoc koledze przy ćwiczeniu'], answer: 0, explain: 'Samoasekuracja – np. bezpieczny upadek. Asekuracja – np. podtrzymanie kolegi przy staniu na rękach.' },
        { id: 'kn8i78', q: 'Jak bezpiecznie upaść do tyłu?', options: ['podeprzeć się wyprostowanymi rękami, żeby zamortyzować upadek', 'przyciągnąć brodę do klatki, zaokrąglić plecy i się przetoczyć', 'odchylić głowę do tyłu i wyprostować plecy', 'usztywnić całe ciało i upaść na plecy bez przetaczania'], answer: 1, explain: 'Broda przy klatce chroni głowę, zaokrąglone plecy pozwalają się przetoczyć. Prostymi rękami łatwo złamać nadgarstek.' },
        { id: '35sztj', q: 'Podczas gry kolega skręcił kostkę. Co robisz najpierw?', options: ['każę mu grać dalej', 'przerywam grę i wołam nauczyciela', 'próbuję nastawić staw', 'masuję mocno bolące miejsce'], answer: 1, explain: 'Każdy uraz zgłaszamy nauczycielowi. Stawu nie nastawiamy; zimny okład przez materiał zmniejsza ból i obrzęk.' },
        { id: 'f4xlyv', q: 'Na kąpielisku nie ma żadnej flagi. Co to oznacza?', options: ['kąpiel dozwolona – można pływać, gdzie się chce', 'ratownik nie pełni dyżuru – nie kąpię się', 'kąpiel dozwolona w strefie wyznaczonej żółtymi bojami', 'woda jest bardzo ciepła – można się kąpać'], answer: 1, explain: 'Brak flagi oznacza brak dyżuru ratowniczego. Bez ratownika się nie kąpiemy.' },
        { id: '5hzcqv', q: 'Pod jaki numer dzwonisz po pomoc w górach (poza 112)?', options: ['601 100 100', '601 100 300', '997', '986'], answer: 1, explain: 'W górach: 601 100 300 albo aplikacja Ratunek. Nad wodą: 601 100 100.' },
        { id: 'wmtcb2', q: 'Planujesz z klasą wyjście w góry. Co jest najważniejsze dla bezpieczeństwa?', options: ['sprawdzić pogodę, iść szlakiem i powiedzieć komuś o trasie', 'iść na skróty poza szlakiem, żeby zdążyć przed zmrokiem', 'zabrać sam telefon, bez kurtki i bez zapasu wody', 'przy burzy jak najszybciej wejść na sam szczyt'], answer: 0, explain: 'Pogoda, wyznaczony szlak, odpowiedni strój i informacja o trasie to podstawy bezpieczeństwa. Przy burzy zawracamy.' },
        { id: 'i014lh', q: 'Dlaczego nie skaczesz do wody w nieznanym miejscu?', options: ['bo woda w nieznanym miejscu jest za zimna na skoki', 'bo możesz uderzyć głową o dno i uszkodzić kręgosłup', 'bo skakanie do wody jest zabronione w morzu, a w jeziorach dozwolone', 'bo skoki do wody bardzo męczą mięśnie nóg'], answer: 1, explain: 'Skok do płytkiej wody grozi urazem kręgosłupa – nawet trwałym paraliżem.' },
        { id: 'tmlts3', q: 'Kto jest twórcą nowożytnego ruchu olimpijskiego?', options: ['Ludwig Guttmann', 'Pierre de Coubertin', 'Izumi Tabata', 'Eunice Kennedy Shriver'], answer: 1, explain: 'Pierre de Coubertin zainicjował nowożytne igrzyska – pierwsze odbyły się w Atenach w 1896 r.' },
        { id: 'yh94dt', q: 'Co symbolizuje pięć splecionych kół olimpijskich?', options: ['pięć dyscyplin rozgrywanych na pierwszych igrzyskach', 'pięć kontynentów połączonych ideą olimpijską', 'pięć pierwszych nowożytnych igrzysk olimpijskich', 'pięć zasad fair play obowiązujących sportowców'], answer: 1, explain: 'Koła symbolizują pięć kontynentów, które łączy idea olimpijska.' },
        { id: '3jfawl', q: 'Gdzie zapala się ogień olimpijski przed igrzyskami?', options: ['w Atenach na stadionie', 'w greckiej Olimpii', 'w Lozannie', 'w mieście, w którym odbywają się igrzyska'], answer: 1, explain: 'Ogień zapala się w Olimpii, a potem w sztafecie niesie się go do miasta igrzysk.' },
        { id: 'khsrgu', q: 'Dla kogo są igrzyska paraolimpijskie?', options: ['dla sportowców z niepełnosprawnościami', 'tylko dla juniorów', 'dla weteranów sportu powyżej 60 lat', 'dla sportowców uprawiających sporty zimowe'], answer: 0, explain: 'Igrzyska paraolimpijskie są dla sportowców z niepełnosprawnościami. Pierwsze uznaje się za rozegrane w Rzymie w 1960 r.' },
        { id: '4axph9', q: 'Kogo nazywa się ojcem ruchu paraolimpijskiego?', options: ['Pierre’a de Coubertina', 'Ludwiga Guttmanna', 'Izumiego Tabatę', 'Johna Kennedy’ego'], answer: 1, explain: 'Ludwig Guttmann, lekarz z Wrocławia, w 1948 r. zorganizował w Stoke Mandeville zawody dla weteranów na wózkach.' },
        { id: 'gdohch', q: 'Dla kogo są Olimpiady Specjalne?', options: ['dla osób z niepełnosprawnością intelektualną', 'dla zawodowych sportowców z najlepszymi wynikami', 'dla uczniów szkół sportowych i ich trenerów', 'dla sędziów sportowych i działaczy olimpijskich'], answer: 0, explain: 'Olimpiady Specjalne to zawody dla osób z niepełnosprawnością intelektualną – pierwsze igrzyska odbyły się w Chicago w 1968 r.' },
        { id: 'o9ibea', q: 'Które zachowanie jest zgodne z zasadą fair play?', options: ['przyznaję się sędziemu, że piłka dotknęła mnie przed wyjściem na aut', 'udaję faul w polu karnym, żeby sędzia podyktował rzut karny', 'kłócę się z sędzią o każdy gwizdek, żeby wymusić korzystne decyzje', 'wyśmiewam przegraną drużynę i jej najsłabszych zawodników'], answer: 0, explain: 'Fair play to uczciwość także wtedy, gdy nie opłaca się w danej chwili.' },
        { id: 'go0qje', q: 'Twoja drużyna przegrała ważny mecz. Jak zachowasz się zgodnie z duchem sportu?', options: ['dziękuję rywalom za grę i gratuluję im', 'obwiniam najsłabszego kolegę za porażkę drużyny', 'nie podaję ręki przeciwnikom i schodzę z boiska', 'domagam się powtórzenia meczu'], answer: 0, explain: 'Szacunek dla rywala i umiejętność przyjęcia porażki to podstawa fair play.' },
        { id: 'g222j8', q: 'Kolega z klasy jest mniej sprawny i nikt nie chce go w drużynie. Co robisz?', options: ['zapraszam go do drużyny i wspieram w grze', 'udaję, że tego nie widzę', 'mówię, że przez niego przegramy', 'proponuję, żeby sędziował, bo i tak słabo gra'], answer: 0, explain: 'Podstawa wymaga przeciwdziałania wykluczeniu mniej sprawnych i wzajemnego wsparcia.' },
        { id: 'hws9jz', q: 'Jak zachowuje się kulturalny kibic?', options: ['dopinguje swoich i nie obraża rywali ani sędziego', 'gwiżdże i buczy przy każdej akcji przeciwnika', 'rzuca przedmiotami na boisko, gdy sędzia się pomyli', 'wbiega na boisko, żeby świętować gola z piłkarzami'], answer: 0, explain: 'Kulturalny kibic wspiera swoją drużynę i szanuje rywali oraz sędziego.' },
      ],
    },
  ],
});
