/* Wychowanie fizyczne – klasa 3, tylko wiedza (dotychczasowa podstawa programowa w brzmieniu z Dz.U. 2025 poz. 1052:
 * I etap edukacyjny – IX. Wychowanie fizyczne). Ćwiczenia ruchowe dziecko wykonuje na zajęciach. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap) w brzmieniu z Dz.U. 2025 poz. 1052 (od 1.09.2025), IX. Wychowanie fizyczne';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III. Aplikacja ćwiczy tylko wiedzę – sprawność ćwiczy się na zajęciach.';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'wf',
    name: 'Wychowanie fizyczne',
    icon: '⚽',
    color: '#2f9d8f',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'ruch-zdrowie',
        name: 'Ruch, zdrowie i fair play',
        basis: `${PP}, 1. Profilaktyka zdrowia i bezpieczeństwa, pkt 1 (higiena ciała, strój sportowy do miejsca zajęć i pogody), pkt 2–3 (aktywność w domu, szkole i na dworze; przerwy, weekendy, wakacje), pkt 4 (zapobieganie wadom postawy), pkt 5 (rozgrzewka i jej cel), pkt 6 (systematyczność i wytrwałość), pkt 7 (zasady zabaw i gier); 3. Zabawy i gry, pkt 4 (współpraca), pkt 6 (fair play). Testy sprawnościowe od lutego do kwietnia (bieg wahadłowy, deska, skok w dal z miejsca) – „Warunki i sposób realizacji” w brzmieniu z Dz.U. 2025 poz. 1052 (eli.gov.pl, sprawdzone 2.11.2026).${KONIEC}`,
        theory: `
          <h3>Ruch to zdrowie</h3>
          <p>Ruch wzmacnia mięśnie, serce i kości, poprawia humor i sen. Ruszaj się codziennie: w domu, w szkole i na dworze.</p>
          <p>Pomysły: <b>aktywna przerwa</b> (gra w klasy, skakanka), w weekend rower albo spacer, w wakacje pływanie pod opieką dorosłych.</p>
          <h3>Przed i po zajęciach</h3>
          <ul>
            <li>Przebierasz się w <b>strój sportowy</b> dopasowany do miejsca i pogody: w sali – zmienne buty, na dworze – ubranie do pogody.</li>
            <li>Po zajęciach myjesz ręce i przebierasz się.</li>
          </ul>
          <h3>Rozgrzewka</h3>
          <p>Na początku zajęć robisz <b>rozgrzewkę</b>: trucht, krążenia ramion, skłony. Rozgrzewka przygotowuje mięśnie do wysiłku i chroni przed kontuzją.</p>
          <h3>Prosta postawa</h3>
          <p>Siedź prosto, nie garb się, noś plecak na <b>obu ramionach</b>. Ćwiczenia na zajęciach pomagają zapobiegać <b>wadom postawy</b>.</p>
          <h3>Fair play</h3>
          <p><b>Fair play</b> (czytaj: fer plej) to gra uczciwa: przestrzegasz zasad, szanujesz rywala, gratulujesz zwycięzcom i nie obrażasz się po przegranej. Każdy ma inne możliwości – nie wyśmiewamy słabszych.</p>
          <h3>Testy sprawności</h3>
          <p>Co roku od lutego do kwietnia nauczyciel sprawdza twoją sprawność: <b>bieg wahadłowy</b> (tam i z powrotem), <b>deska</b> (podpór na przedramionach), <b>skok w dal z miejsca</b>. Wyniki pokazują, co ćwiczyć – to nie są oceny.</p>`,
        flashcards: [
          ['Po co ruch?', 'wzmacnia mięśnie, serce i kości, poprawia humor i sen'],
          ['Aktywna przerwa', 'ruch na przerwie, np. skakanka, gra w klasy'],
          ['Rozgrzewka', 'przygotowuje mięśnie do wysiłku, chroni przed kontuzją'],
          ['Strój sportowy', 'dopasowany do miejsca zajęć i pogody'],
          ['Jak nosić plecak?', 'na obu ramionach'],
          ['Wady postawy', 'np. garbienie się; zapobiegają im ćwiczenia'],
          ['Fair play', 'gra uczciwa: zasady, szacunek dla rywala, gratulacje'],
          ['Systematyczność', 'ćwiczysz regularnie, nie od święta'],
          ['Testy sprawności', 'luty–kwiecień: bieg wahadłowy, deska, skok w dal z miejsca'],
        ],
        questions: [
          { id: '9co6pq', q: 'Co robimy na początku zajęć ruchowych?', options: ['rozgrzewkę', 'drzemkę', 'od razu mecz bez przygotowania'], answer: 0, explain: 'Rozgrzewka przygotowuje mięśnie do wysiłku.' },
          { id: 't328v7', q: 'Po co jest rozgrzewka?', options: ['żeby przygotować mięśnie', 'żeby się szybko zmęczyć', 'żeby skończyć zajęcia wcześniej'], answer: 0, explain: 'Rozgrzane mięśnie lepiej pracują i trudniej je naciągnąć.' },
          { id: 'r84poq', q: 'Co dobrego daje codzienny ruch?', options: ['wzmacnia mięśnie i serce', 'osłabia mięśnie i kości', 'psuje zęby i męczy oczy'], answer: 0, explain: 'Ruch wzmacnia mięśnie, serce i kości, poprawia humor i sen.' },
          { id: 'omlnpq', q: 'Co to jest aktywna przerwa?', options: ['ruch na przerwie', 'granie na telefonie', 'siedzenie w ławce'], answer: 0, explain: 'Na aktywnej przerwie się ruszasz – skaczesz, grasz w klasy.' },
          { id: 'rqyyfo', q: 'Zajęcia są na boisku, jest chłodno. Jak się ubierzesz?', options: ['strój sportowy i bluzę', 'sandały i krótki rękaw', 'kurtkę zimową i kalosze'], answer: 0, explain: 'Strój dopasowujesz do miejsca zajęć i pogody.' },
          { id: '532wlt', q: 'Jak nosić plecak, żeby dbać o prostą postawę?', options: ['na obu ramionach', 'na jednym ramieniu', 'w ręce, ciągnąc po ziemi'], answer: 0, explain: 'Plecak na obu ramionach rozkłada ciężar równo.' },
          { id: '5ixcqn', q: 'Twoja drużyna przegrała mecz. Co jest zachowaniem fair play?', options: ['gratuluję zwycięzcom', 'obrażam się i wychodzę', 'mówię, że oszukiwali'], answer: 0, explain: 'Fair play: gratulujesz zwycięzcom i szanujesz rywala.' },
          { id: 'xs9quw', q: 'Kolega biega wolniej od innych. Jak się zachowasz?', options: ['dopinguję go', 'wyśmiewam go', 'nie chcę z nim grać'], answer: 0, explain: 'Każdy ma inne możliwości. Wspieramy się nawzajem.' },
          { id: 'edspc7', q: 'Co robisz po zajęciach WF?', options: ['myję ręce i przebieram się', 'od razu jem kanapkę brudnymi rękami', 'zostaję w spoconym stroju cały dzień'], answer: 0, explain: 'Po zajęciach dbasz o higienę: myjesz ręce i się przebierasz.' },
          { id: 'ot1jcf', q: 'Kiedy w szkole są testy sprawności fizycznej?', options: ['od lutego do kwietnia', 'w czasie wakacji letnich', 'w Wigilię'], answer: 0, explain: 'Testy są co roku od lutego do kwietnia.' },
          { id: '5a15bs', q: 'Które ćwiczenie jest w testach sprawności?', options: ['skok w dal z miejsca', 'skok o tyczce', 'pływanie na czas'], answer: 0, explain: 'W testach są: bieg wahadłowy, deska i skok w dal z miejsca.' },
          { id: 'uwpplp', q: 'Prawda czy fałsz?\nŻeby być sprawnym, wystarczy poćwiczyć raz w roku.', options: TF, ...PF, answer: 1, explain: 'Liczy się systematyczność – ruszamy się regularnie, najlepiej codziennie.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'bezpiecznie',
        name: 'Bezpiecznie na kółkach, nad wodą i w górach',
        basis: `${PP}, 1. Profilaktyka zdrowia i bezpieczeństwa, pkt 8 (bezpieczne poruszanie się pieszo, na rowerze, hulajnodze i rolkach), pkt 9 (bezpieczeństwo nad wodą i w górach, zachowanie w środowisku naturalnym i ochrona przyrody); 3. pkt 5 (rolki, łyżwy, sanki, hulajnoga, rower – jazda dostosowana do warunków i zasad bezpieczeństwa). Kask: Prawo o ruchu drogowym, art. 33 ust. 1b dodany ustawą z 17.10.2025 (Dz.U. 2025 poz. 1676, art. 1 pkt 4; w mocy od 2.06.2026) – kierujący rowerem, hulajnogą elektryczną lub urządzeniem transportu osobistego, który nie ukończył 16 lat, jeździ w kasku. Flagi na kąpielisku: rozporządzenie MSWiA, tekst jednolity Dz.U. 2022 poz. 1979, § 9 (biała – kąpiel dozwolona, czerwona – zakaz kąpieli). Góry: nie schodzić ze szlaku, numer ratunkowy GOPR/TOPR 601 100 300 lub 985; nad wodą 601 100 100 (gov.pl – PSSE Kamień Pomorski „Bezpiecznie w górach” i KP PSP Limanowa „Inne numery alarmowe”). Sprawdzone 2.11.2026.${KONIEC}`,
        theory: `
          <h3>Na rowerze, hulajnodze i rolkach</h3>
          <ul>
            <li>Na rowerze, hulajnodze i rolkach zakładasz <b>kask</b> i zapinasz pasek pod brodą. Prawo nakazuje kask każdemu, kto nie ma 16 lat i kieruje rowerem albo hulajnogą elektryczną.</li>
            <li>Na rolkach przydają się <b>ochraniacze</b> na kolana, łokcie i nadgarstki.</li>
            <li>Jeździsz pod opieką dorosłego, w bezpiecznym miejscu, z dala od ruchliwej ulicy. Po zmroku – <b>odblaski</b> i światła.</li>
            <li>Sprzęt musi być sprawny: hamulce, dzwonek, opony.</li>
          </ul>
          <h3>Nad wodą</h3>
          <ul>
            <li>Kąpiesz się tylko na <b>strzeżonym kąpielisku</b>, pod opieką dorosłego.</li>
            <li>🏳️ <b>Flaga biała</b> – kąpiel dozwolona. 🚩 <b>Flaga czerwona</b> – zakaz kąpieli.</li>
            <li>Nie skaczesz do wody w nieznanym miejscu. Słuchasz ratownika.</li>
            <li>Numer ratunkowy nad wodą: <b>601 100 100</b> (albo 112).</li>
          </ul>
          <h3>W górach</h3>
          <ul>
            <li>Idziesz tylko <b>wyznaczonym szlakiem</b>, z dorosłym. Sprawdzacie pogodę przed wyjściem.</li>
            <li>Wygodne buty, ubranie na zmianę pogody, woda i przekąska w plecaku.</li>
            <li>Nie śmiecisz, nie hałasujesz, nie płoszysz zwierząt – szanujesz przyrodę.</li>
            <li>Numer ratunkowy w górach (GOPR, TOPR): <b>601 100 300</b> albo <b>985</b> (albo 112).</li>
          </ul>`,
        flashcards: [
          ['Kask', 'na rower, hulajnogę i rolki; na rowerze obowiązkowy do 16 lat'],
          ['Ochraniacze', 'na kolana, łokcie i nadgarstki – na rolkach'],
          ['Flaga biała na kąpielisku', 'kąpiel dozwolona'],
          ['Flaga czerwona na kąpielisku', 'zakaz kąpieli'],
          ['Gdzie się kąpać?', 'tylko na strzeżonym kąpielisku, z dorosłym'],
          ['Numer ratunkowy nad wodą', '601 100 100 (albo 112)'],
          ['W górach chodzisz…', 'tylko wyznaczonym szlakiem'],
          ['Numer ratunkowy w górach', '601 100 300 albo 985 (albo 112)'],
          ['Przed wyjściem w góry', 'sprawdź pogodę, weź wodę i ubranie na zmianę'],
        ],
        questions: [
          { id: 'kqxwy5', q: 'Jedziesz na rowerze. Co musisz mieć na głowie?', options: ['kask', 'czapkę z daszkiem', 'słuchawki'], answer: 0, explain: 'Kask chroni głowę przy upadku. Prawo nakazuje go rowerzystom, którzy nie mają 16 lat.' },
          { id: 'zridkp', q: 'Co warto założyć do jazdy na rolkach?', options: ['kask i ochraniacze', 'klapki na bose stopy', 'długi szalik'], answer: 0, explain: 'Kask chroni głowę, a ochraniacze – kolana, łokcie i nadgarstki.' },
          { id: 'odc8r1', q: 'Gdzie najbezpieczniej jeździć na hulajnodze?', options: ['z dala od ruchliwej ulicy', 'na środku jezdni', 'po schodach przed szkołą'], answer: 0, explain: 'Jeździsz tam, gdzie nie ma ruchu samochodów, pod opieką dorosłego.' },
          { id: 'si4jtn', q: 'Co oznacza czerwona flaga na kąpielisku?', options: ['zakaz kąpieli', 'kąpiel dozwolona', 'woda jest ciepła'], answer: 0, explain: 'Czerwona flaga – zakaz kąpieli. Biała – kąpiel dozwolona.' },
          { id: 'py9hof', q: 'Co oznacza biała flaga na kąpielisku?', options: ['kąpiel dozwolona', 'zakaz kąpieli', 'kąpielisko zamknięte'], answer: 0, explain: 'Biała flaga – można się kąpać.' },
          { id: 'md1drc', q: 'Gdzie wolno ci się kąpać?', options: ['na strzeżonym kąpielisku', 'w głębokim stawie za domem', 'w rzece pod mostem'], answer: 0, explain: 'Kąpiemy się tylko tam, gdzie jest ratownik, i pod opieką dorosłego.' },
          { id: 'kv0giu', q: 'Jak chodzimy po górach?', options: ['wyznaczonym szlakiem', 'na skróty przez las', 'gdzie chcemy'], answer: 0, explain: 'Szlak chroni przed zgubieniem się i chroni przyrodę.' },
          { id: 'qxd7to', q: 'Jaki numer to numer ratunkowy w górach (GOPR, TOPR)?', options: ['985', '998', '997'], answer: 0, explain: 'W górach dzwonisz pod 985 albo 601 100 300. Działa też 112.' },
          { id: 'hv41by', q: 'Co sprawdzasz z dorosłym przed wyjściem w góry?', options: ['prognozę pogody', 'program telewizyjny', 'wyniki meczu'], answer: 0, explain: 'Pogoda w górach szybko się zmienia – sprawdź ją przed wyjściem.' },
          { id: 'p4yze8', q: 'Co spakujesz do plecaka w góry?', options: ['wodę, jedzenie i kurtkę', 'zabawki i gry planszowe', 'nic – plecak ma być pusty'], answer: 0, explain: 'W górach przydadzą się woda, jedzenie i cieplejsze ubranie.' },
          { id: 'gylv3r', q: 'Jak zachowujesz się w górach wobec przyrody?', options: ['nie śmiecę i nie hałasuję', 'płoszę zwierzęta', 'zrywam wszystkie kwiaty'], answer: 0, explain: 'Szanujemy przyrodę: nie śmiecimy, nie hałasujemy, nie płoszymy zwierząt.' },
          { id: 'adsoky', q: 'Prawda czy fałsz?\nMożna skakać do wody w miejscu, którego nie znamy.', options: TF, ...PF, answer: 1, explain: 'W nieznanym miejscu może być płytko albo leżeć kamienie. Nie skaczemy!' },
        ],
      },
    ],
  });
})();
