/* Geografia – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, geografia kl. V–VIII).
 * Podstawa proponuje w klasie VIII działy XIV–XVIII: Azja, Afryka, Ameryka Północna i Południowa,
 * Australia i Oceania, obszary okołobiegunowe („Warunki i sposób realizacji”).
 * Podstawa podkreśla, że chodzi o zależności (np. płyty litosfery – wulkany), a nie o zapamiętywanie
 * wielu liczb – dlatego liczby podajemy w zaokrągleniu i tylko te najważniejsze.
 * Fakty sprawdzone w e-podręczniku „Geografia szyta na miarę geografów” na zpe.gov.pl (szczegóły: docs/PLAN-kl8.md). */
window.SUBJECTS.push({
  id: 'geografia',
  name: 'Geografia',
  icon: '🌍',
  color: '#2f8fa3',
  topics: [
    {
      id: 'azja',
      name: 'Azja – kontrasty i pierścień ognia',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XIV „Wybrane problemy i regiony geograficzne Azji”, wym. 1–3 (Azja jako obszar wielkich kontrastów; granice płyt litosfery a rowy tektoniczne, wulkany, trzęsienia ziemi i tsunami; zapobieganie skutkom trzęsień ziemi i tsunami). Podstawa proponuje dział XIV w klasie VIII.',
      theory: `
        <h3>Azja – kontynent kontrastów</h3>
        <p>Azja to <b>największy kontynent</b> na Ziemi (ok. 30% powierzchni lądów). Razem z Europą tworzy jeden ląd – <b>Eurazję</b>. Od Afryki oddziela ją Kanał Sueski i Morze Czerwone, od Ameryki Północnej – Cieśnina Beringa.</p>
        <table>
          <tr><th>Kontrast</th><th>Przykład</th></tr>
          <tr><td>najwyżej – najniżej</td><td><b>Mount Everest</b> w Himalajach (ok. 8850 m n.p.m.) – najwyższy szczyt Ziemi; brzeg <b>Morza Martwego</b> (ponad 400 m p.p.m.) – najgłębsza depresja na lądzie</td></tr>
          <tr><td>góry – niziny</td><td>Himalaje, Karakorum, Wyżyna Tybetańska (najwyższa wyżyna świata) – Nizina Zachodniosyberyjska, Nizina Chińska, Nizina Gangesu</td></tr>
          <tr><td>klimat</td><td>w Azji są <b>wszystkie strefy klimatyczne</b> – od równikowej po polarną; jest też klimat monsunowy</td></tr>
          <tr><td>wilgotno – sucho</td><td>wilgotne lasy równikowe na Archipelagu Malajskim – pustynie i stepy we wnętrzu lądu</td></tr>
          <tr><td>ludność</td><td>gęsto zaludnione Azja Wschodnia i Południowa – prawie puste Syberia i Tybet</td></tr>
        </table>
        <p>W Azji ok. <b>3/4 powierzchni</b> zajmują wyżyny i góry. Tylko tu są szczyty wyższe niż 8000 m. We wnętrzu lądu jest największy na Ziemi obszar bezodpływowy – rzeki nie docierają do oceanu (np. spływają do Morza Kaspijskiego albo giną w piaskach pustyń).</p>
        <h3>Pacyficzny Pierścień Ognia</h3>
        <p>Skorupa ziemska (litosfera) jest podzielona na <b>płyty</b>, które powoli się przesuwają. Wokół Oceanu Spokojnego oceaniczna <b>płyta pacyficzna</b> wsuwa się pod sąsiednie płyty (to <b>subdukcja</b>). Na tej granicy występuje <b>większość trzęsień ziemi i wulkanów</b> na Ziemi – to <b>Pacyficzny Pierścień Ognia</b>.</p>
        <ul>
          <li>Wzdłuż wschodnich wybrzeży Azji są <b>głębokie rowy oceaniczne</b> i <b>łuki wysp</b> (np. Wyspy Japońskie, Filipiny, Indonezja).</li>
          <li><b>Japonia</b> leży na granicy płyt – ma czynne wulkany (najwyższy z nich to <b>Fudżi</b>) i częste trzęsienia ziemi.</li>
          <li><b>Tsunami</b> – ogromne fale morskie wywołane trzęsieniem ziemi lub wybuchem wulkanu pod dnem morza. W 2011 r. tsunami po trzęsieniu ziemi u wybrzeży wyspy Honsiu zalało m.in. elektrownię atomową w Fukushimie.</li>
        </ul>
        <h3>Jak ograniczać skutki trzęsień ziemi i tsunami</h3>
        <ul>
          <li>budynki odporne na wstrząsy (elastyczne konstrukcje, przepisy budowlane),</li>
          <li>systemy ostrzegania (czujniki, alarmy, komunikaty w telefonach),</li>
          <li>ćwiczenia ewakuacyjne w szkołach i zakładach pracy, oznaczone drogi ucieczki na wzniesienia,</li>
          <li>falochrony i mury przeciw tsunami, niebudowanie domów tuż przy brzegu.</li>
        </ul>
        <div class="tip">💡 Pierścień Ognia = granica płyty pacyficznej. Gdzie płyty się zderzają – tam trzęsie się ziemia i wybuchają wulkany.</div>`,
      flashcards: [
        ['Największy kontynent', 'Azja'],
        ['Eurazja', 'Azja i Europa razem – jeden zwarty ląd'],
        ['Najwyższy szczyt Ziemi', 'Mount Everest w Himalajach – ok. 8850 m n.p.m.'],
        ['Najgłębsza depresja na lądzie', 'Brzeg Morza Martwego – ponad 400 m p.p.m.'],
        ['Najwyższa wyżyna świata', 'Wyżyna Tybetańska'],
        ['Ile Azji zajmują wyżyny i góry?', 'Ok. 3/4 powierzchni'],
        ['Strefy klimatyczne w Azji', 'Wszystkie – od równikowej po polarną'],
        ['Pacyficzny Pierścień Ognia', 'Granica płyty pacyficznej – większość wulkanów i trzęsień ziemi na Ziemi'],
        ['Subdukcja', 'Wsuwanie się jednej płyty litosfery pod drugą'],
        ['Tsunami', 'Ogromna fala morska wywołana trzęsieniem ziemi lub wybuchem wulkanu pod dnem morza'],
        ['Najwyższy wulkan Japonii', 'Fudżi'],
        ['Ochrona przed trzęsieniami ziemi', 'Budynki odporne na wstrząsy, systemy ostrzegania, ćwiczenia ewakuacyjne'],
      ],
      questions: [
        { id: 'vofsx4', q: 'Który kontynent jest największy na Ziemi?', options: ['Afryka', 'Azja', 'Ameryka Północna', 'Antarktyda'], answer: 1, explain: 'Azja zajmuje ok. 30% powierzchni lądów.' },
        { id: '8zngg3', q: 'Gdzie leży najwyższy szczyt Ziemi – Mount Everest?', options: ['w Andach', 'w Alpach', 'w Himalajach', 'w Górach Skalistych'], answer: 2, explain: 'Mount Everest (ok. 8850 m n.p.m.) leży w Himalajach, w Azji.' },
        { id: '96kuhg', q: 'Gdzie jest najgłębsza depresja na lądzie?', options: ['nad Morzem Martwym', 'nad Morzem Kaspijskim', 'na Nizinie Amazonki', 'na Saharze'], answer: 0, explain: 'Brzeg Morza Martwego leży ponad 400 m poniżej poziomu morza.' },
        { id: '9pcl7a', q: 'Która cecha NIE świadczy o kontrastach w Azji?', options: ['są tu wszystkie strefy klimatyczne', 'obok najwyższego szczytu jest najgłębsza depresja lądowa', 'gęsto zaludnione wybrzeża i prawie puste wnętrze lądu', 'cały kontynent ma ten sam klimat i roślinność'], answer: 3, explain: 'Azja ma ogromne różnice klimatu i roślinności – od lasów równikowych po tundrę.' },
        { id: 'uh5i7r', q: 'Jaka część Azji to wyżyny i góry?', options: ['ok. 1/10', 'ok. 1/4', 'ok. 1/2', 'ok. 3/4'], answer: 3, explain: 'Wyżyny i góry zajmują ok. 3/4 powierzchni Azji – to najwyższy z zamieszkanych kontynentów.' },
        { id: 'rmtz9v', q: 'Czym jest Pacyficzny Pierścień Ognia?', options: ['pasem pustyń wokół Pacyfiku', 'obszarem na granicy płyty pacyficznej z dużą liczbą wulkanów i trzęsień ziemi', 'ciepłym prądem morskim', 'łańcuchem wysp koralowych'], answer: 1, explain: 'Na granicy płyty pacyficznej i otaczających ją płyt jest większość wulkanów i trzęsień ziemi na Ziemi.' },
        { id: 'e5fu9y', q: 'Dlaczego Japonia ma tak dużo wulkanów i trzęsień ziemi?', options: ['bo leży na granicy płyt litosfery', 'bo ma klimat monsunowy', 'bo leży na równiku', 'bo jest gęsto zaludniona'], answer: 0, explain: 'Japonia leży w Pierścieniu Ognia, gdzie płyta pacyficzna wsuwa się pod sąsiednie płyty.' },
        { id: 'lwolax', q: 'Co najczęściej wywołuje tsunami?', options: ['silny wiatr nad oceanem', 'przypływ morza', 'trzęsienie ziemi lub wybuch wulkanu pod dnem morza', 'topnienie lodowców'], answer: 2, explain: 'Gwałtowny ruch dna morskiego wypycha ogromne masy wody – powstaje fala tsunami.' },
        { id: '4egjat', q: 'Jak nazywa się zjawisko wsuwania się jednej płyty litosfery pod drugą?', options: ['erozja', 'subdukcja', 'monsun', 'wietrzenie'], answer: 1, explain: 'To subdukcja – na jej obszarach tworzą się rowy oceaniczne, łuki wysp i wulkany.' },
        { id: 'tmgyue', q: 'Które działanie najlepiej chroni ludzi przed skutkami tsunami?', options: ['sadzenie kwiatów na plaży', 'budowanie domów tuż przy brzegu', 'wyłączanie prądu w całym kraju', 'system ostrzegania i szybka ewakuacja na wzniesienia'], answer: 3, explain: 'Ostrzeżenie daje czas na ucieczkę w wyżej położone miejsca, zanim dotrze fala.' },
        { id: 'w8go2d', q: 'Prawda czy fałsz?\nW Azji występują wszystkie strefy klimatyczne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Azja rozciąga się od równika do wysokich szerokości północnych.' },
        { id: 'qc1yt4', q: 'Prawda czy fałsz?\nWszystkie rzeki Azji uchodzą do oceanów.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. We wnętrzu Azji jest największy na Ziemi obszar bezodpływowy – rzeki spływają np. do Morza Kaspijskiego albo giną w piaskach.' },
        { id: 'qmgbav', q: 'Co oddziela Azję od Ameryki Północnej?', options: ['Kanał Sueski', 'Cieśnina Gibraltarska', 'Cieśnina Beringa', 'Morze Czerwone'], answer: 2, explain: 'Cieśnina Beringa ma tylko ok. 85 km szerokości.' },
      ],
      tasks: [
        {
          id: '8xzn3b',
          points: 2,
          q: 'Przyjmij, że Mount Everest ma 8850 m n.p.m., a brzeg Morza Martwego leży 403 m p.p.m. Oblicz różnicę wysokości między tymi miejscami i wyjaśnij, dlaczego jest to przykład kontrastu w Azji.',
          steps: [
            'Punkt poniżej poziomu morza ma wysokość ujemną: −403 m.',
            'Różnica: 8850 m − (−403 m) = 8850 m + 403 m = 9253 m.',
            'Sprawdzenie: 9253 m − 403 m = 8850 m.',
            'Kontrast: na jednym kontynencie są najwyższy punkt Ziemi i najgłębsza depresja na lądzie.',
          ],
          answer: '9253 m; na jednym kontynencie leży najwyższy szczyt Ziemi i najniższy punkt lądu',
          scoring: [
            '1 pkt – poprawne obliczenie (9253 m).',
            '1 pkt – wyjaśnienie: skrajne wysokości Ziemi na jednym kontynencie.',
          ],
        },
      ],
    },
    {
      id: 'monsun-japonia',
      name: 'Monsuny i ryż; Japonia',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XIV, wym. 4–5 (klimat monsunowy a rytm upraw i „kultura ryżu” w Azji Południowo-Wschodniej; warunki przyrodnicze i czynniki społeczno-kulturowe w tworzeniu nowoczesnej gospodarki Japonii).',
      theory: `
        <h3>Monsun – wiatr, który zmienia kierunek</h3>
        <p>W Azji Południowej i Południowo-Wschodniej wieje <b>monsun</b> – wiatr, który <b>dwa razy w roku zmienia kierunek</b>:</p>
        <table>
          <tr><th></th><th>monsun letni</th><th>monsun zimowy</th></tr>
          <tr><td>skąd wieje</td><td><b>znad oceanu</b> nad ląd</td><td><b>znad lądu</b> nad ocean</td></tr>
          <tr><td>powietrze</td><td>ciepłe i wilgotne</td><td>suche i chłodniejsze</td></tr>
          <tr><td>skutek</td><td><b>pora deszczowa</b> – obfite (czasem zbyt obfite) opady</td><td><b>pora sucha</b></td></tr>
          <tr><td>nazwa ludowa</td><td>„tragarz deszczu”</td><td>„wiatr głodowy”</td></tr>
        </table>
        <h3>Ryż i „kultura ryżu”</h3>
        <ul>
          <li><b>Ryż</b> to podstawowe zboże Azji Południowo-Wschodniej. Potrzebuje <b>gorącego i wilgotnego</b> klimatu, a pola są zalewane wodą.</li>
          <li>Rytm prac wyznacza monsun: sadzenie i wzrost ryżu – w porze deszczowej. W porze suchej ryż można uprawiać tylko na polach <b>sztucznie nawadnianych</b>.</li>
          <li>Tam, gdzie ciepło i wilgotno jest przez cały rok, zbiera się ryż <b>co najmniej dwa razy w roku</b>.</li>
          <li>Pola są małe, często na <b>tarasach</b> na zboczach, a większość prac wykonuje się <b>ręcznie</b>. Wspólne przygotowanie i utrzymanie pól wytworzyło szczególne zwyczaje i współpracę mieszkańców – to <b>kultura ryżowa</b>.</li>
          <li>Państwa Azji zbierają zdecydowaną większość ryżu na świecie.</li>
        </ul>
        <h3>Japonia – bogata mimo trudnych warunków</h3>
        <p><b>Trudne warunki przyrodnicze:</b></p>
        <ul>
          <li>państwo wyspiarskie – <b>cztery duże wyspy</b> i tysiące małych; przeważają <b>góry i wyżyny</b>, nizin jest mało,</li>
          <li>trzęsienia ziemi, tsunami, czynne wulkany, <b>tajfuny</b>,</li>
          <li>prawie <b>brak surowców mineralnych</b> – Japonia je importuje.</li>
        </ul>
        <p><b>Czynniki społeczno-kulturowe, które pomogły:</b> sumienność i dyscyplina, przywiązanie do firmy, wysokie kwalifikacje pracowników, szacunek dla wiedzy, duże nakłady na naukę i nowe technologie.</p>
        <p><b>Gospodarka:</b> Japonia sprowadza surowce i sprzedaje <b>wysoko przetworzone produkty</b> dobrej jakości: samochody, elektronikę, statki. Ma rozbudowaną flotę morską i porty, bo prawie cały handel idzie morzem. To jedna z największych gospodarek świata. Społeczeństwo Japonii się <b>starzeje</b>.</p>
        <div class="tip">💡 Monsun letni = z <b>morza</b> → <b>mokro</b>. Monsun zimowy = z lądu → sucho.</div>`,
      flashcards: [
        ['Monsun', 'Wiatr zmieniający kierunek dwa razy w roku'],
        ['Monsun letni', 'Wieje znad oceanu nad ląd – pora deszczowa („tragarz deszczu”)'],
        ['Monsun zimowy', 'Wieje znad lądu nad ocean – pora sucha („wiatr głodowy”)'],
        ['Wymagania ryżu', 'Gorący i wilgotny klimat, zalewane pola'],
        ['Kultura ryżowa', 'Zwyczaje i współpraca ludzi związane ze wspólną uprawą i utrzymaniem pól ryżowych'],
        ['Ile zbiorów ryżu w roku w gorącym i wilgotnym klimacie?', 'Co najmniej dwa'],
        ['Warunki przyrodnicze Japonii', 'Wyspy, przewaga gór, mało nizin, trzęsienia ziemi, tsunami, wulkany, tajfuny'],
        ['Surowce mineralne Japonii', 'Prawie ich nie ma – importuje je'],
        ['Czynniki sukcesu Japonii', 'Sumienność, dyscyplina, przywiązanie do firmy, kwalifikacje, nauka i technologie'],
        ['Co Japonia eksportuje?', 'Wysoko przetworzone produkty: samochody, elektronikę, statki'],
        ['Tajfun', 'Cyklon tropikalny u wschodnich wybrzeży Azji'],
      ],
      questions: [
        { id: 'f9hyz6', q: 'Czym jest monsun?', options: ['wiatrem wiejącym zawsze w tę samą stronę', 'wiatrem zmieniającym kierunek dwa razy w roku', 'wiatrem w górach', 'prądem morskim'], answer: 1, explain: 'Monsun latem wieje znad oceanu, a zimą znad lądu.' },
        { id: 'xa2zqx', q: 'Dlaczego monsun letni przynosi obfite opady?', options: ['bo wieje znad oceanu i niesie wilgotne powietrze', 'bo wieje znad pustyni', 'bo jest bardzo zimny', 'bo wieje tylko w nocy'], answer: 0, explain: 'Wilgotne powietrze znad oceanu nad lądem daje ulewne deszcze – to pora deszczowa.' },
        { id: '5yka6v', q: 'Dlaczego monsun zimowy nazywa się „wiatrem głodowym”?', options: ['bo przynosi powodzie', 'bo jest bardzo silny', 'bo jest suchy i bez nawadniania nie da się wtedy uprawiać ryżu', 'bo wieje znad oceanu'], answer: 2, explain: 'Suchy wiatr znad lądu oznacza porę suchą – bez sztucznego nawadniania ryż nie urośnie.' },
        { id: '6gze0n', q: 'Jakich warunków potrzebuje ryż?', options: ['zimnego i suchego klimatu', 'gorącego i wilgotnego klimatu', 'wiecznej zmarzliny', 'piaszczystych pustyń'], answer: 1, explain: 'Ryż rośnie na zalewanych polach w gorącym, wilgotnym klimacie.' },
        { id: '5l6d9w', q: 'Co to jest „kultura ryżowa”?', options: ['sposób gotowania ryżu', 'nazwa odmiany ryżu', 'festiwal muzyki w Azji', 'zwyczaje i współpraca ludzi związane ze wspólną uprawą pól ryżowych'], answer: 3, explain: 'Wspólne przygotowanie pól, nawadnianie i zbiory wytworzyły szczególne zwyczaje społeczne.' },
        { id: 'x9eenm', q: 'Dlaczego w wielu miejscach Azji Południowo-Wschodniej zbiera się ryż dwa razy w roku lub częściej?', options: ['bo przez cały rok jest ciepło i wilgotno albo pola są nawadniane', 'bo ryż rośnie tydzień', 'bo nie ma tam pory deszczowej', 'bo pola są bardzo duże'], answer: 0, explain: 'Ciepły i wilgotny klimat (lub nawadnianie) pozwala na ciągły okres wegetacji.' },
        { id: 'olh0ug', q: 'Która cecha przyrody Japonii UTRUDNIA rozwój gospodarki?', options: ['dostęp do morza', 'brak surowców mineralnych i mało nizin', 'liczne porty', 'długie wybrzeże'], answer: 1, explain: 'Japonia ma mało surowców i mało płaskich terenów – musi importować surowce i oszczędnie gospodarować miejscem.' },
        { id: 'cuwzqz', q: 'Który czynnik społeczno-kulturowy pomógł w rozwoju gospodarki Japonii?', options: ['brak szkół', 'niechęć do nowych technologii', 'sumienność, dyscyplina i wysokie kwalifikacje pracowników', 'brak handlu z innymi krajami'], answer: 2, explain: 'Tradycyjne postawy Japończyków – sumienność, dyscyplina, przywiązanie do firmy, szacunek dla wiedzy – sprzyjały rozwojowi.' },
        { id: '3spxnh', q: 'Co Japonia głównie eksportuje?', options: ['ropę naftową', 'rudy żelaza', 'węgiel kamienny', 'wysoko przetworzone produkty, np. samochody i elektronikę'], answer: 3, explain: 'Japonia importuje surowce, a sprzedaje drogie, zaawansowane wyroby przemysłowe.' },
        { id: 'xq1j76', q: 'Jak nazywa się cyklon tropikalny u wschodnich wybrzeży Azji?', options: ['tajfun', 'tornado', 'monsun', 'pasat'], answer: 0, explain: 'W Azji Wschodniej cyklony tropikalne to tajfuny; w Ameryce – huragany.' },
        { id: 'pxn3mw', q: 'Dlaczego Japonia ma rozbudowaną flotę morską i wiele portów?', options: ['bo ma mało gór', 'bo surowce przywozi, a wyroby wywozi drogą morską', 'bo nie ma kolei', 'bo leży w głębi lądu'], answer: 1, explain: 'Wyspiarskie państwo bez surowców prowadzi handel głównie przez morze.' },
        { id: 'wn94sc', q: 'Prawda czy fałsz?\nMonsun letni wieje znad lądu w stronę oceanu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Monsun letni wieje znad oceanu nad ląd i przynosi deszcze.' },
        { id: 'g0e2we', q: 'Prawda czy fałsz?\nSpołeczeństwo Japonii się starzeje.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Od lat 80. XX wieku w Japonii przybywa osób starszych, a ubywa młodych.' },
      ],
    },
    {
      id: 'chiny-indie',
      name: 'Chiny i Indie',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XIV, wym. 6–8 (zróżnicowanie gęstości zaludnienia Chin, kierunki rozwoju gospodarczego Chin i ich znaczenie w gospodarce światowej, możliwości rozwoju gospodarczego i kontrasty społeczne Indii).',
      theory: `
        <h3>Chiny – gdzie mieszkają ludzie</h3>
        <p>Chiny są jednym z największych państw świata i jednym z dwóch najludniejszych (obok Indii). Ludność jest rozmieszczona <b>bardzo nierównomiernie</b>:</p>
        <table>
          <tr><th>Chiny Wschodnie</th><th>Chiny Zachodnie</th></tr>
          <tr><td>niziny (np. <b>Nizina Chińska</b>), doliny wielkich rzek</td><td>góry i wyżyny (Wyżyna Tybetańska, Himalaje), pustynie</td></tr>
          <tr><td>klimat wilgotny, monsunowy</td><td>klimat suchy lub surowy górski</td></tr>
          <tr><td>uprawa ryżu, wielkie miasta, porty</td><td>pasterstwo, słabe zaludnienie</td></tr>
          <tr><td>mieszka tu <b>ok. 95% ludności</b> (na ok. 1/3 powierzchni kraju)</td><td>bardzo mało ludzi</td></tr>
        </table>
        <p>Głównym powodem nierównomiernego rozmieszczenia są <b>warunki przyrodnicze</b>: ukształtowanie terenu i klimat.</p>
        <h3>Gospodarka Chin</h3>
        <ul>
          <li>Pod koniec lat 70. XX w. Chiny zaczęły <b>reformy gospodarcze</b> i utworzyły <b>specjalne strefy ekonomiczne</b> – ulgi dla zagranicznych firm, tania ziemia, tania siła robocza.</li>
          <li>Firmy z całego świata przeniosły tu produkcję. Dziś rozwijają też <b>nowoczesne technologie</b> (np. Shenzhen, dzielnica Pudong w Szanghaju).</li>
          <li>Chiny to <b>druga gospodarka świata</b> (po USA), <b>największy eksporter</b> świata i czołowy producent żywności (ryż, pszenica, herbata).</li>
          <li>Wielu mieszkańców wciąż pracuje w trudnych warunkach za niskie wynagrodzenie.</li>
        </ul>
        <h3>Indie – kraj kontrastów</h3>
        <ul>
          <li><b>Najludniejsze państwo świata</b>; liczba ludności wciąż szybko rośnie. Najgęściej zaludnione są żyzne <b>Nizina Gangesu</b> i delta tej rzeki. Na wsi mieszka ok. 2/3 ludności.</li>
          <li>Dominuje <b>hinduizm</b>; na wsi wciąż utrzymuje się podział na <b>kasty</b>. Religia zakazuje uboju bydła – krowy dają mleko, nawóz (także na opał) i siłę pociągową.</li>
          <li>Prawie połowa pracujących pracuje w <b>rolnictwie</b>. <b>Zielona rewolucja</b> (wysokoplenne odmiany pszenicy i ryżu) bardzo zwiększyła zbiory.</li>
          <li>Od 1991 r. Indie stawiają na nowoczesny przemysł i usługi. Symbolem jest <b>Bengaluru</b> – ośrodek informatyczny. Atuty: <b>znajomość angielskiego</b>, wysokie kwalifikacje i <b>niskie koszty pracy</b>.</li>
          <li><b>Kontrasty społeczne</b>: obok nowoczesnych dzielnic i bogatych firm – <b>dzielnice nędzy</b> (np. w Mumbaju), bieda i analfabetyzm na wsi.</li>
        </ul>
        <div class="tip">💡 Chiny: ludzie na <b>wschodzie</b>, bo tam niziny, woda i deszcz. Indie: nowoczesne IT obok biednych wiosek – stąd „kraj kontrastów”.</div>`,
      flashcards: [
        ['Gdzie mieszka większość Chińczyków?', 'We wschodniej części kraju – ok. 95% ludności'],
        ['Dlaczego Chiny Zachodnie są słabo zaludnione?', 'Góry, wyżyny, pustynie, suchy lub surowy klimat'],
        ['Najgęściej zaludniony region Chin', 'Nizina Chińska'],
        ['Specjalne strefy ekonomiczne', 'Obszary z ulgami dla firm zagranicznych, tanią ziemią i siłą roboczą'],
        ['Pozycja Chin w gospodarce świata', 'Druga gospodarka świata, największy eksporter'],
        ['Najludniejsze państwo świata', 'Indie'],
        ['Dominująca religia w Indiach', 'Hinduizm'],
        ['Kasty', 'Dziedziczny podział społeczeństwa w Indiach, wciąż obecny na wsi'],
        ['Zielona rewolucja', 'Wprowadzenie wysokoplennych odmian zbóż – wzrost zbiorów'],
        ['Indyjski ośrodek informatyczny', 'Bengaluru'],
        ['Atuty Indii w usługach', 'Znajomość angielskiego, kwalifikacje, niskie koszty pracy'],
      ],
      questions: [
        { id: 'p7uk9s', q: 'W której części Chin mieszka większość ludności?', options: ['we wschodniej', 'w zachodniej', 'w Tybecie', 'na pustyniach północy'], answer: 0, explain: 'Na wschodzie – niziny, wilgotny klimat i doliny rzek; mieszka tam ok. 95% ludności.' },
        { id: 'b05obe', q: 'Co jest głównym powodem słabego zaludnienia Chin Zachodnich?', options: ['zakaz osiedlania się', 'góry, wyżyny, pustynie i trudny klimat', 'brak rzek na całym obszarze Chin', 'za duża liczba miast'], answer: 1, explain: 'O rozmieszczeniu ludności w Chinach decydują przede wszystkim warunki przyrodnicze.' },
        { id: 'yyvbiv', q: 'Który region Chin ma największą gęstość zaludnienia?', options: ['Wyżyna Tybetańska', 'pustynia Gobi', 'Nizina Chińska', 'Himalaje'], answer: 2, explain: 'Żyzna Nizina Chińska z dogodnym klimatem jest najgęściej zaludniona.' },
        { id: '1rjrcm', q: 'Co przyciągnęło zagraniczne firmy do specjalnych stref ekonomicznych w Chinach?', options: ['wysokie podatki', 'brak pracowników', 'zakaz eksportu', 'ulgi, tania ziemia i tania siła robocza'], answer: 3, explain: 'Strefy dawały zagranicznym inwestorom ulgi i niskie koszty – to napędziło rozwój Chin.' },
        { id: 'u6k2qe', q: 'Jaką pozycję mają Chiny w gospodarce światowej?', options: ['są jednym z najbiedniejszych krajów', 'to druga gospodarka świata i największy eksporter', 'nie handlują z innymi krajami', 'mają tylko rolnictwo'], answer: 1, explain: 'Chiny są drugą gospodarką świata (po USA) i pierwszym eksporterem.' },
        { id: 'xphdu4', q: 'Które państwo ma najwięcej mieszkańców na świecie?', options: ['Chiny', 'Stany Zjednoczone', 'Indie', 'Japonia'], answer: 2, explain: 'Najludniejszym państwem świata są Indie; Chiny są na drugim miejscu.' },
        { id: 'rdgy9f', q: 'Która religia dominuje w Indiach?', options: ['hinduizm', 'buddyzm', 'chrześcijaństwo', 'judaizm'], answer: 0, explain: 'Większość mieszkańców Indii to wyznawcy hinduizmu.' },
        { id: '8rzdgm', q: 'Czym była zielona rewolucja w Indiach?', options: ['sadzeniem lasów w miastach', 'wprowadzeniem wysokoplennych odmian zbóż, co zwiększyło zbiory', 'zakazem uprawy ryżu', 'zmianą flagi'], answer: 1, explain: 'Nowe, plenniejsze odmiany pszenicy i ryżu bardzo zwiększyły zbiory.' },
        { id: 'a2epb9', q: 'Dlaczego w Indiach rozwijają się usługi informatyczne dla firm z całego świata?', options: ['bo w Indiach nie ma rolnictwa', 'bo Indie leżą na biegunie', 'bo pracownicy znają angielski, mają kwalifikacje, a koszty pracy są niskie', 'bo w Indiach nie ma miast'], answer: 2, explain: 'Te atuty sprawiają, że firmy, np. z USA, zlecają pracę w Bengaluru i innych miastach.' },
        { id: 'e57toy', q: 'Który przykład pokazuje kontrasty społeczne w Indiach?', options: ['nowoczesne firmy IT obok dzielnic nędzy', 'jednakowe dochody wszystkich mieszkańców', 'brak wsi', 'ta sama religia i język w całym kraju'], answer: 0, explain: 'W Indiach bogactwo i nowoczesność sąsiadują z biedą – np. w Mumbaju.' },
        { id: 'xzasuk', q: 'Dlaczego w Indiach nie zabija się krów?', options: ['bo krowy są dzikie', 'bo nie ma tam krów', 'bo krowy są własnością państwa', 'bo hinduizm zakazuje uboju bydła'], answer: 3, explain: 'Religijny zakaz uboju sprawia, że krowy dają mleko, nawóz i siłę pociągową.' },
        { id: 'ynivwm', q: 'Prawda czy fałsz?\nNa wsi w Indiach mieszka większość ludności tego kraju.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Na wsi mieszka ok. 2/3 mieszkańców Indii.' },
        { id: '3rslru', q: 'Prawda czy fałsz?\nLudność Chin jest rozmieszczona równomiernie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Ok. 95% mieszka we wschodniej części kraju.' },
      ],
      tasks: [
        {
          id: 'a7ddx6',
          points: 2,
          q: 'Pewien region ma powierzchnię 25 000 km² i 5 mln mieszkańców, a drugi – 400 000 km² i 2 mln mieszkańców. Oblicz gęstość zaludnienia obu regionów i wskaż, który z nich może leżeć na Nizinie Chińskiej, a który w Tybecie.',
          steps: [
            'Gęstość zaludnienia = liczba ludności : powierzchnia.',
            'Region 1: 5 000 000 : 25 000 km² = 200 osób na 1 km².',
            'Region 2: 2 000 000 : 400 000 km² = 5 osób na 1 km².',
            'Gęsto zaludniony (200 os./km²) – Nizina Chińska; słabo (5 os./km²) – Tybet, bo to wysoka, chłodna wyżyna.',
          ],
          answer: '200 os./km² – Nizina Chińska; 5 os./km² – Tybet',
          scoring: [
            '1 pkt – oba poprawne wyniki (200 i 5 osób na 1 km²).',
            '1 pkt – poprawne przyporządkowanie z uzasadnieniem.',
          ],
        },
      ],
    },
    {
      id: 'bliski-wschod',
      name: 'Bliski Wschód',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XIV, wym. 9–10 (Bliski Wschód – cechy kulturowe, zasoby ropy naftowej, poziom rozwoju gospodarczego; miejsca konfliktów zbrojnych, ich główne przyczyny i skutki).',
      theory: `
        <h3>Gdzie to jest</h3>
        <p><b>Bliski Wschód</b> to region w Azji Południowo-Zachodniej: Półwysep Arabski (największy półwysep świata), Azja Mniejsza (Turcja), Iran, Irak, Syria, Izrael i ich sąsiedzi. Przeważa <b>klimat zwrotnikowy suchy</b> i <b>pustynie</b> – wody jest mało.</p>
        <h3>Kultura i religie</h3>
        <ul>
          <li>Tu powstały <b>trzy wielkie religie monoteistyczne</b>: <b>judaizm</b>, <b>chrześcijaństwo</b> i <b>islam</b>.</li>
          <li>Dominuje <b>islam</b>; w wielu krajach jest religią państwową.</li>
          <li>Większość państw zamieszkują <b>Arabowie</b>. Inne narody mają Turcja, Iran i Izrael. <b>Izrael</b> to jedyne państwo, w którym przeważają wyznawcy <b>judaizmu</b>.</li>
        </ul>
        <h3>„Czarne złoto”</h3>
        <ul>
          <li>Państwa wokół <b>Zatoki Perskiej</b> wydobywają ponad <b>1/3 światowej ropy naftowej</b> i dużo gazu ziemnego.</li>
          <li>Dzięki ropie i gazowi niektóre kraje (np. Katar, Zjednoczone Emiraty Arabskie) bardzo się wzbogaciły – budują nowoczesne miasta, rozwijają usługi, turystykę i handel.</li>
          <li>Poziom rozwoju jest <b>zróżnicowany</b>: obok bogatych państw naftowych są kraje biedne lub zniszczone wojnami.</li>
          <li>Ropa sprawia, że region ma <b>ogromne znaczenie</b> dla państw, które ją kupują.</li>
        </ul>
        <h3>Konflikty zbrojne</h3>
        <p>Od dziesięcioleci Bliski Wschód jest obszarem konfliktów. <b>Najdłuższy</b> to <b>konflikt arabsko-izraelski</b> – od 1948 r., gdy powstało państwo Izrael, a państwa arabskie go nie uznały. Jego częścią są dążenia <b>Palestyńczyków</b> do własnego państwa. Inne przykłady: wojna Iraku z Iranem (1980–1988), wojny w Zatoce Perskiej (Irak napadł na Kuwejt w 1990 r.), wojna domowa w Syrii.</p>
        <table>
          <tr><th>Przyczyny konfliktów</th><th>Skutki</th></tr>
          <tr><td>spory o terytorium i granice; różnice religijne i narodowe; walka o <b>ropę</b> i o <b>wodę</b>; walka o władzę</td><td>śmierć wielu ludzi, <b>uchodźcy</b>, zniszczone miasta, bieda; katastrofy ekologiczne (np. podpalone szyby naftowe w Kuwejcie)</td></tr>
        </table>
        <div class="tip">💡 Bliski Wschód w trzech słowach: <b>pustynia, ropa, religie</b> – i wszystkie trzy wiążą się z konfliktami.</div>`,
      flashcards: [
        ['Bliski Wschód', 'Region w Azji Południowo-Zachodniej: Półwysep Arabski, Azja Mniejsza, Iran, Irak i sąsiedzi'],
        ['Największy półwysep świata', 'Półwysep Arabski'],
        ['Religie, które powstały na Bliskim Wschodzie', 'Judaizm, chrześcijaństwo, islam'],
        ['Dominująca religia Bliskiego Wschodu', 'Islam'],
        ['Jedyne państwo z przewagą wyznawców judaizmu', 'Izrael'],
        ['Zatoka Perska', 'Państwa wokół niej wydobywają ponad 1/3 światowej ropy naftowej'],
        ['„Czarne złoto”', 'Ropa naftowa'],
        ['Najdłuższy konflikt Bliskiego Wschodu', 'Konflikt arabsko-izraelski (od 1948 r.)'],
        ['Przyczyny konfliktów na Bliskim Wschodzie', 'Terytorium, religia i narodowość, ropa, woda, władza'],
        ['Skutki konfliktów', 'Ofiary, uchodźcy, zniszczenia, bieda, katastrofy ekologiczne'],
      ],
      questions: [
        { id: 'rthvjd', q: 'Jaki klimat przeważa na Bliskim Wschodzie?', options: ['równikowy wilgotny', 'polarny', 'umiarkowany morski', 'zwrotnikowy suchy'], answer: 3, explain: 'Region zajmują głównie pustynie i półpustynie klimatu zwrotnikowego suchego.' },
        { id: '3jllpu', q: 'Które trzy religie powstały na Bliskim Wschodzie?', options: ['buddyzm, hinduizm, islam', 'judaizm, chrześcijaństwo, islam', 'hinduizm, chrześcijaństwo, sikhizm', 'buddyzm, judaizm, taoizm'], answer: 1, explain: 'To trzy wielkie religie monoteistyczne – wiara w jednego Boga.' },
        { id: 'qi39sp', q: 'W którym państwie przeważają wyznawcy judaizmu?', options: ['w Iranie', 'w Arabii Saudyjskiej', 'w Izraelu', 'w Turcji'], answer: 2, explain: 'Izrael to jedyne państwo na świecie z przewagą wyznawców judaizmu.' },
        { id: 'ydj618', q: 'Jaki surowiec decyduje o znaczeniu Zatoki Perskiej w świecie?', options: ['ropa naftowa', 'węgiel kamienny', 'rudy żelaza', 'złoto'], answer: 0, explain: 'Państwa znad Zatoki Perskiej wydobywają ponad 1/3 światowej ropy naftowej.' },
        { id: 'yhc3s7', q: 'Który największy półwysep świata leży na Bliskim Wschodzie?', options: ['Półwysep Indyjski', 'Półwysep Arabski', 'Półwysep Skandynawski', 'Półwysep Malajski'], answer: 1, explain: 'Półwysep Arabski jest największym półwyspem na świecie.' },
        { id: 'a0mhtc', q: 'Który konflikt na Bliskim Wschodzie trwa najdłużej?', options: ['wojna Iraku z Iranem', 'wojna w Zatoce Perskiej', 'konflikt arabsko-izraelski', 'wojna o Kuwejt'], answer: 2, explain: 'Konflikt arabsko-izraelski trwa od 1948 r., gdy powstało państwo Izrael.' },
        { id: '4xr8xj', q: 'Która przyczyna konfliktów jest typowa dla Bliskiego Wschodu?', options: ['nadmiar wody pitnej', 'spory o terytorium, ropę i wodę', 'zbyt chłodny klimat', 'brak religii'], answer: 1, explain: 'Konflikty wynikają m.in. ze sporów o ziemię, bogactwa naturalne i rzadką wodę oraz z różnic religijnych i narodowych.' },
        { id: 'vp28n8', q: 'Który skutek wojen dotyka zwykłych ludzi najbardziej?', options: ['uchodźstwo i utrata domów', 'wzrost liczby turystów', 'więcej opadów', 'tańsza ropa dla mieszkańców'], answer: 0, explain: 'Wojny powodują śmierć, ucieczkę z domów (uchodźcy), zniszczenia i biedę.' },
        { id: '7989ih', q: 'Jak ropa naftowa zmieniła niektóre kraje Zatoki Perskiej, np. Katar?', options: ['zubożyła je', 'zamieniła je w kraje rolnicze', 'zmieniła ich klimat', 'pozwoliła im się wzbogacić i zbudować nowoczesne miasta'], answer: 3, explain: 'Dochody z ropy i gazu pozwoliły rozwinąć nowoczesne usługi, handel i turystykę.' },
        { id: 'bgaiem', q: 'Jaki był ekologiczny skutek wojny w Zatoce Perskiej (1990–1991)?', options: ['zalesienie pustyni', 'podpalenie szybów naftowych w Kuwejcie', 'powstanie nowych jezior', 'wzrost liczby wielbłądów'], answer: 1, explain: 'Wycofujące się wojska irackie podpaliły kuwejckie szyby naftowe – doszło do katastrofy ekologicznej.' },
        { id: 'atoxaq', q: 'Prawda czy fałsz?\nWszystkie państwa Bliskiego Wschodu są bardzo bogate.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Obok bogatych państw naftowych są kraje biedne i zniszczone wojnami.' },
        { id: 'wdk1ev', q: 'Prawda czy fałsz?\nIslam jest dominującą religią na Bliskim Wschodzie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. W wielu krajach regionu islam jest religią państwową.' },
      ],
    },
    {
      id: 'afryka-przyroda',
      name: 'Afryka – klimat, strefy, Sahel',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XV „Wybrane problemy i regiony geograficzne Afryki”, wym. 1–3 (opady a cyrkulacja powietrza w strefie międzyzwrotnikowej, strefowość klimatyczno-roślinno-glebowa, gospodarowanie w strefie Sahelu i pustynnienie). Podstawa proponuje dział XV w klasie VIII.',
      theory: `
        <h3>Afryka na równiku</h3>
        <p>Afryka to <b>drugi co do wielkości</b> kontynent. Leży <b>symetrycznie po obu stronach równika</b> – ok. 4/5 lądu jest między zwrotnikami. Przeważają wyżyny; brak wielkich łańcuchów górskich. Najwyższa góra: <b>Kilimandżaro</b> (prawie 5900 m n.p.m.).</p>
        <h3>Skąd deszcz, a skąd pustynia – cyrkulacja</h3>
        <ol>
          <li>Nad <b>równikiem</b> Słońce mocno grzeje. Ciepłe, wilgotne powietrze <b>unosi się</b>, ochładza, a para wodna się skrapla – padają ulewne <b>deszcze zenitalne</b>. Przy ziemi jest niskie ciśnienie.</li>
          <li>Na dużej wysokości powietrze płynie ku zwrotnikom.</li>
          <li>Nad <b>zwrotnikami</b> powietrze <b>opada</b>, ogrzewa się i wysycha – jest wysokie ciśnienie, prawie nie pada. Tu leżą <b>pustynie</b>, np. <b>Sahara</b> – największa pustynia świata.</li>
          <li>Przy ziemi powietrze wraca od zwrotników ku równikowi – to stałe wiatry <b>pasaty</b>.</li>
        </ol>
        <p>Pas deszczów „wędruje” za Słońcem: między równikiem a zwrotnikami pada tylko <b>w części roku</b> – są <b>pora deszczowa</b> i <b>pora sucha</b>.</p>
        <h3>Strefowość klimatyczno-roślinno-glebowa</h3>
        <p>Klimat, roślinność i gleby układają się w <b>pasy (strefy)</b> – tak samo na północ i na południe od równika:</p>
        <table>
          <tr><th>Klimat</th><th>Roślinność</th></tr>
          <tr><td>równikowy wilgotny (deszcz przez cały rok)</td><td><b>wilgotny las równikowy</b> – gęsty, wielopiętrowy, wiecznie zielony</td></tr>
          <tr><td>podrównikowy (pora deszczowa i sucha)</td><td><b>sawanna</b> – trawy z pojedynczymi drzewami (np. akacje)</td></tr>
          <tr><td>zwrotnikowy suchy</td><td><b>półpustynie i pustynie</b> (Sahara, Kalahari, Namib)</td></tr>
          <tr><td>podzwrotnikowy śródziemnomorski (na krańcach)</td><td><b>makia</b> – twardolistne, zimozielone zarośla</td></tr>
        </table>
        <p>Roślinność jest „odbiciem” klimatu – po niej poznasz, jaki klimat panuje.</p>
        <h3>Sahel i pustynnienie</h3>
        <p><b>Sahel</b> to pas na <b>południe od Sahary</b>, gdzie pada ok. 200–500 mm rocznie, a pora deszczowa jest krótka i niepewna. Tradycyjnie ludzie zajmują się <b>koczowniczym pasterstwem</b> – wędrują ze stadami.</p>
        <p><b>Pustynnienie</b> – zamiana terenów na obrzeżach pustyni w pustynię. Przyczyny:</p>
        <ul>
          <li><b>susze</b> – brak opadów przez kilka lat,</li>
          <li><b>nadmierny wypas</b> – zbyt duże stada zjadają roślinność, ubijają glebę,</li>
          <li><b>wycinanie drzew i krzewów na opał</b>,</li>
          <li>szybki <b>przyrost ludności</b> – coraz więcej ludzi i zwierząt na tym samym terenie.</li>
        </ul>
        <p>Bez roślin wiatr wywiewa glebę, a na dawne pastwiska wkracza pustynia. Ludzie tracą źródło utrzymania. Środowisko Sahelu trzeba użytkować ostrożnie – nie „rabować” go.</p>
        <div class="tip">💡 Równik: powietrze <b>w górę</b> → deszcz. Zwrotniki: powietrze <b>w dół</b> → susza i pustynia.</div>`,
      flashcards: [
        ['Położenie Afryki', 'Symetrycznie po obu stronach równika; ok. 4/5 między zwrotnikami'],
        ['Najwyższa góra Afryki', 'Kilimandżaro (prawie 5900 m n.p.m.)'],
        ['Dlaczego nad równikiem dużo pada?', 'Ciepłe, wilgotne powietrze unosi się, ochładza i para wodna się skrapla'],
        ['Deszcze zenitalne', 'Ulewne deszcze w strefie równikowej, gdy Słońce jest wysoko'],
        ['Dlaczego przy zwrotnikach są pustynie?', 'Powietrze opada, ogrzewa się i wysycha – prawie nie pada'],
        ['Pasaty', 'Stałe wiatry wiejące od zwrotników ku równikowi'],
        ['Największa pustynia świata', 'Sahara'],
        ['Sawanna', 'Trawy z pojedynczymi drzewami; klimat z porą deszczową i suchą'],
        ['Wilgotny las równikowy', 'Gęsty, wielopiętrowy, wiecznie zielony; deszcz przez cały rok'],
        ['Sahel', 'Pas na południe od Sahary; ok. 200–500 mm opadów rocznie'],
        ['Pustynnienie', 'Zamiana terenów na obrzeżach pustyni w pustynię'],
        ['Przyczyny pustynnienia', 'Susze, nadmierny wypas, wycinanie drzew na opał, przyrost ludności'],
      ],
      questions: [
        { id: '2hfrzu', q: 'Jak położona jest Afryka względem równika?', options: ['cała na półkuli południowej', 'symetrycznie po obu stronach równika', 'cała na półkuli północnej', 'równik jej nie przecina'], answer: 1, explain: 'Afryka leży po obu stronach równika – dlatego jej strefy klimatyczne układają się symetrycznie.' },
        { id: 'lzq8n9', q: 'Dlaczego w strefie równikowej często występują ulewne deszcze?', options: ['bo wieją tam suche wiatry z pustyni', 'bo jest tam bardzo zimno', 'bo ciepłe, wilgotne powietrze unosi się, ochładza i para wodna się skrapla', 'bo powietrze opada i wysycha'], answer: 2, explain: 'Wznoszące się powietrze ochładza się – para wodna skrapla się i spada jako deszcz zenitalny.' },
        { id: '8a545j', q: 'Dlaczego w pobliżu zwrotników powstały pustynie, np. Sahara?', options: ['bo powietrze opada, ogrzewa się i wysycha', 'bo jest tam za dużo rzek', 'bo leżą wysoko w górach', 'bo pada tam śnieg'], answer: 0, explain: 'Opadające powietrze się ogrzewa i jest suche – chmury nie powstają, więc prawie nie pada.' },
        { id: '7l8rdx', q: 'Jak nazywają się stałe wiatry wiejące od zwrotników ku równikowi?', options: ['monsuny', 'tajfuny', 'bryzy', 'pasaty'], answer: 3, explain: 'Pasaty wieją przez cały rok od zwrotników w stronę równika.' },
        { id: 'xk2xsa', q: 'Która formacja roślinna rośnie w klimacie z porą deszczową i porą suchą?', options: ['wilgotny las równikowy', 'sawanna', 'tundra', 'tajga'], answer: 1, explain: 'Sawanna – trawy z pojedynczymi drzewami – to typowa roślinność klimatu podrównikowego.' },
        { id: 'zxfad7', q: 'W jakim klimacie rośnie gęsty, wielopiętrowy, wiecznie zielony las?', options: ['zwrotnikowym suchym', 'śródziemnomorskim', 'równikowym wilgotnym', 'polarnym'], answer: 2, explain: 'Wilgotny las równikowy potrzebuje ciepła i deszczu przez cały rok.' },
        { id: 'rqz56g', q: 'Jak zmienia się roślinność Afryki od równika do zwrotnika?', options: ['las równikowy → sawanna → pustynia', 'pustynia → sawanna → las równikowy', 'tundra → tajga → step', 'makia → las → tundra'], answer: 0, explain: 'Im dalej od równika, tym krócej trwa pora deszczowa: las → sawanna → półpustynia i pustynia.' },
        { id: 'eb70vc', q: 'Gdzie leży Sahel?', options: ['na północ od Sahary, nad Morzem Śródziemnym', 'w lasach nad Kongo', 'na Madagaskarze', 'na południe od Sahary'], answer: 3, explain: 'Sahel to pas półsuchych terenów na południowym skraju Sahary.' },
        { id: 'r1wkni', q: 'Czym jest pustynnienie?', options: ['powstawaniem oaz', 'zamianą terenów na obrzeżach pustyni w pustynię', 'nawadnianiem pustyni', 'topnieniem lodowców'], answer: 1, explain: 'Pustynnienie to degradacja środowiska – pustynia „wkracza” na tereny dotąd użytkowane.' },
        { id: 'c97534', q: 'Która działalność ludzi przyspiesza pustynnienie w Sahelu?', options: ['sadzenie drzew', 'oszczędzanie wody', 'nadmierny wypas zwierząt i wycinanie krzewów na opał', 'ochrona pastwisk'], answer: 2, explain: 'Zbyt duże stada i wycinanie roślin niszczą pokrywę roślinną – wiatr wywiewa glebę.' },
        { id: 'pynlk7', q: 'Jaka jest tradycyjna forma gospodarki w Sahelu?', options: ['koczownicze pasterstwo', 'uprawa ryżu na tarasach', 'przemysł high-tech', 'górnictwo węgla'], answer: 0, explain: 'Koczownicy wędrują ze stadami w poszukiwaniu pastwisk i wody.' },
        { id: 'ojhp2c', q: 'Prawda czy fałsz?\nNa północ i na południe od równika strefy klimatyczne w Afryce układają się podobnie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Symetryczne położenie względem równika daje symetryczny układ stref.' },
        { id: 'ahq599', q: 'Prawda czy fałsz?\nSahara jest największą pustynią świata.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Sahara to największa pustynia na Ziemi (wśród pustyń gorących).' },
      ],
    },
    {
      id: 'afryka-gospodarka',
      name: 'Afryka – turystyka, głód, gospodarka',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XV, wym. 4–6 (walory przyrodnicze i kulturowe a turystyka na przykładzie wybranego kraju – w aplikacji Kenia; przyczyny i skutki niedożywienia – przykład Etiopii; tradycyjne i nowoczesne działy gospodarki).',
      theory: `
        <h3>Turystyka w Kenii</h3>
        <p><b>Kenia</b> leży we wschodniej Afryce, <b>po obu stronach równika</b>, nad Oceanem Indyjskim. Panuje klimat podrównikowy.</p>
        <ul>
          <li><b>Walory przyrodnicze</b>: rozległe <b>sawanny</b> z dzikimi zwierzętami w parkach narodowych i rezerwatach (np. Masai Mara, Tsavo, Amboseli) – <b>safari</b>; „Wielka Piątka Afryki”: lew, lampart, słoń, nosorożec, bawół; wygasłe wulkany i Wielki Rów Wschodni; piaszczyste <b>plaże</b> nad Oceanem Indyjskim (np. okolice Mombasy).</li>
          <li><b>Walory kulturowe</b>: różnorodność ludów i języków, tradycje <b>Masajów</b> – tańce, stroje, wioski.</li>
          <li>Turystyka daje <b>pracę</b> i <b>dochody</b> – z biletów do parków utrzymuje się ochronę przyrody.</li>
        </ul>
        <h3>Głód i niedożywienie – przykład Etiopii</h3>
        <p><b>Niedożywienie</b> – długotrwały niedobór kalorii i składników odżywczych. <b>Głód</b> – czasowy brak pożywienia. Większość krajów z tym problemem leży w Afryce, zwłaszcza środkowej i wschodniej. Etiopię kilka razy dotknęły klęski głodu.</p>
        <table>
          <tr><th>Przyczyny naturalne</th><th>Przyczyny zależne od ludzi</th></tr>
          <tr><td>susze (brak opadów), plagi owadów, choroby roślin</td><td><b>konflikty zbrojne</b> i uchodźcy, bardzo <b>duży przyrost naturalny</b>, słabo rozwinięte rolnictwo, bieda, złe drogi</td></tr>
        </table>
        <p><b>Skutki:</b> choroby, wysoka śmiertelność dzieci, słabszy rozwój, migracje. <b>Rozwiązania:</b> pomoc żywnościowa w nagłych wypadkach, ale na dłuższą metę – nowoczesne rolnictwo i nawadnianie, drogi i magazyny, szkoły i służba zdrowia, zakończenie wojen.</p>
        <h3>Gospodarka Afryki – tradycja i nowoczesność</h3>
        <ul>
          <li>Afryka jest <b>najbiedniejszym</b> i najsłabiej rozwiniętym kontynentem, ale różnice między krajami są duże.</li>
          <li><b>Rolnictwo tradycyjne</b> – na własne potrzeby, proste narzędzia, np. <b>rolnictwo żarowo-odłogowe</b>: wypala się kawałek lasu, uprawia kilka lat, a gdy gleba się wyjałowi – przenosi się w nowe miejsce.</li>
          <li><b>Plantacje</b> – wielkie uprawy jednej rośliny <b>na eksport</b>: kawa, herbata, kakaowiec, bawełna. Nie poprawiają wyżywienia mieszkańców, jałowią glebę.</li>
          <li><b>Górnictwo</b> – Afryka ma bogate złoża (złoto, diamenty, ropa naftowa, rudy miedzi). Często surowce wywozi się <b>nieprzetworzone</b>. Bogatsze są kraje z górnictwem i przemysłem, np. <b>RPA</b>.</li>
          <li>Nowoczesne usługi i turystyka szybko się rozwijają. Rozwój hamują <b>brak pieniędzy na inwestycje</b> i <b>konflikty zbrojne</b>.</li>
        </ul>
        <div class="tip">💡 Głód w Afryce to nie tylko susza – zawsze sprawdź też wojnę, biedę i szybki przyrost ludności.</div>`,
      flashcards: [
        ['Położenie Kenii', 'Wschodnia Afryka, po obu stronach równika, nad Oceanem Indyjskim'],
        ['Walory przyrodnicze Kenii', 'Sawanny z dzikimi zwierzętami (safari), parki narodowe, wulkany, plaże'],
        ['Walory kulturowe Kenii', 'Różnorodność ludów, tradycje Masajów'],
        ['Wielka Piątka Afryki', 'Lew, lampart, słoń, nosorożec, bawół'],
        ['Niedożywienie', 'Długotrwały niedobór kalorii i składników odżywczych'],
        ['Naturalne przyczyny głodu w Etiopii', 'Susze, plagi owadów, choroby roślin'],
        ['Przyczyny głodu zależne od ludzi', 'Wojny, duży przyrost naturalny, słabe rolnictwo, bieda'],
        ['Rolnictwo żarowo-odłogowe', 'Wypalanie lasu pod uprawę, po wyjałowieniu gleby – przeniesienie pola'],
        ['Rolnictwo plantacyjne', 'Wielkie uprawy jednej rośliny na eksport: kawa, kakao, herbata, bawełna'],
        ['Co hamuje rozwój gospodarki Afryki?', 'Brak pieniędzy na inwestycje i konflikty zbrojne'],
        ['Surowce Afryki', 'M.in. złoto, diamenty, ropa naftowa, miedź'],
      ],
      questions: [
        { id: 'g6ev7t', q: 'Co jest główną atrakcją przyrodniczą Kenii dla turystów?', options: ['lodowce', 'sawanny z dzikimi zwierzętami w parkach narodowych', 'pustynie lodowe', 'fiordy'], answer: 1, explain: 'Safari w parkach i rezerwatach (np. Masai Mara) to największy magnes turystyczny Kenii.' },
        { id: '8rzmao', q: 'Który walor Kenii jest walorem kulturowym?', options: ['plaże nad Oceanem Indyjskim', 'wygasłe wulkany', 'sawanna', 'tradycje i tańce Masajów'], answer: 3, explain: 'Walory kulturowe to dzieła i tradycje ludzi; pozostałe to walory przyrodnicze.' },
        { id: 'oas6gg', q: 'Jak turystyka może pomagać w ochronie przyrody w Kenii?', options: ['opłaty za wstęp do parków finansują ochronę zwierząt', 'turyści polują na zwierzęta', 'turystyka niszczy parki', 'nie ma to związku'], answer: 0, explain: 'Dochody z turystyki pozwalają utrzymywać parki i strażników, a mieszkańcom dają pracę.' },
        { id: '8ixy1n', q: 'Czym różni się niedożywienie od głodu?', options: ['niczym', 'niedożywienie to czasowy brak jedzenia', 'niedożywienie trwa długo i polega na niedoborze kalorii i składników, głód to czasowy brak pożywienia', 'głód dotyczy tylko zwierząt'], answer: 2, explain: 'Niedożywienie to stan długotrwały; głód – czasowy brak pożywienia.' },
        { id: 'ed0yy9', q: 'Która przyczyna głodu w Etiopii jest przyczyną naturalną?', options: ['susza', 'wojna', 'duży przyrost naturalny', 'złe drogi'], answer: 0, explain: 'Susze, plagi owadów i choroby roślin to przyczyny naturalne; wojny i bieda – antropogeniczne (zależne od ludzi).' },
        { id: 'j2r1e2', q: 'Która przyczyna głodu zależy od ludzi?', options: ['brak opadów', 'plaga szarańczy', 'choroby roślin', 'konflikty zbrojne'], answer: 3, explain: 'Wojny niszczą pola i drogi, zmuszają ludzi do ucieczki i utrudniają dowóz żywności.' },
        { id: 'd7l7xj', q: 'Które działanie najlepiej ograniczy głód w Etiopii na dłuższą metę?', options: ['tylko jednorazowa dostawa żywności', 'unowocześnienie rolnictwa, nawadnianie, drogi i zakończenie wojen', 'zakaz uprawy roślin', 'wycięcie lasów'], answer: 1, explain: 'Pomoc żywnościowa ratuje w kryzysie, ale trwale pomaga tylko rozwój rolnictwa, infrastruktury i pokój.' },
        { id: 'ydgcmc', q: 'Na czym polega rolnictwo żarowo-odłogowe?', options: ['na uprawie ryżu na tarasach', 'na hodowli owiec na farmach', 'na wypalaniu lasu pod pole i przenoszeniu się, gdy gleba się wyjałowi', 'na uprawie w szklarniach'], answer: 2, explain: 'Popiół na krótko użyźnia glebę; po kilku latach pole się porzuca (odłóg).' },
        { id: 'pi2cjw', q: 'Dlaczego plantacje nie poprawiają wyżywienia mieszkańców Afryki?', options: ['bo uprawia się na nich rośliny głównie na eksport, np. kawę i kakao', 'bo są bardzo małe', 'bo nic na nich nie rośnie', 'bo uprawia się na nich tylko ryż dla mieszkańców'], answer: 0, explain: 'Produkcja plantacji idzie na sprzedaż za granicę – miejscowi nie mają z tego jedzenia.' },
        { id: 'h5ehmp', q: 'Które państwo afrykańskie należy do najbogatszych dzięki górnictwu i przemysłowi?', options: ['Etiopia', 'Republika Południowej Afryki', 'Czad', 'Somalia'], answer: 1, explain: 'RPA wydobywa m.in. złoto i diamenty i ma rozwinięty przemysł.' },
        { id: 'h4dryf', q: 'Co hamuje rozwój nowoczesnej gospodarki w wielu krajach Afryki?', options: ['nadmiar inwestycji', 'zbyt dobre drogi', 'zbyt mało surowców w całej Afryce', 'brak pieniędzy na inwestycje i konflikty zbrojne'], answer: 3, explain: 'Bez kapitału i w czasie wojen trudno budować fabryki, drogi i szkoły.' },
        { id: '3g6vv6', q: 'Prawda czy fałsz?\nWiele krajów Afryki eksportuje surowce w postaci nieprzetworzonej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Na przetworzeniu surowców zarabiają wtedy inne kraje.' },
      ],
    },
    {
      id: 'ameryka-przyroda',
      name: 'Ameryki – rzeźba, tornada, Amazonia',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XVI „Wybrane problemy i regiony geograficzne Ameryki Północnej i Południowej”, wym. 1–3 (ukształtowanie powierzchni, skutki tornad i cyklonów tropikalnych w Ameryce Północnej, konflikt interesów w Amazonii). Podstawa proponuje dział XVI w klasie VIII.',
      theory: `
        <h3>Dwa kontynenty, jeden plan</h3>
        <p>Ameryka Północna i Ameryka Południowa łączą się wąskim <b>Przesmykiem Panamskim</b>. Razem mają <b>największą rozciągłość południkową</b> spośród lądów – ponad 15 tys. km z północy na południe. Dlatego są tu prawie wszystkie strefy klimatyczne.</p>
        <table>
          <tr><th></th><th>Ameryka Północna</th><th>Ameryka Południowa</th></tr>
          <tr><td>zachód – młode góry wzdłuż wybrzeża</td><td><b>Kordyliery</b> (m.in. Góry Skaliste), szczyt <b>Denali</b></td><td><b>Andy</b>, szczyt <b>Aconcagua</b> – najwyższy w obu Amerykach (ok. 6960 m)</td></tr>
          <tr><td>środek – niziny</td><td>Wielkie Równiny, Niziny Wewnętrzne (rzeka Missisipi)</td><td><b>Nizina Amazonki</b> (największa nizina rzeczna świata), Nizina La Platy</td></tr>
          <tr><td>wschód – stare góry i wyżyny</td><td><b>Appalachy</b></td><td>Wyżyna Brazylijska, Wyżyna Gujańska</td></tr>
        </table>
        <p>Góry i doliny biegną z <b>północy na południe</b> (południkowo). Kordyliery i Andy razem to <b>najdłuższy system górski świata</b>. W Ameryce Północnej są też <b>Wielkie Jeziora</b> – największy zbiornik słodkiej wody, a <b>Amazonka</b> ma największe dorzecze i najwięcej wody spośród rzek świata.</p>
        <h3>Tornada i cyklony tropikalne</h3>
        <table>
          <tr><th></th><th>tornado</th><th>cyklon tropikalny (huragan)</th></tr>
          <tr><td>jak powstaje</td><td>przy zderzeniu ciepłego, wilgotnego powietrza (znad Zatoki Meksykańskiej) z zimnym, suchym (z północy); lej z chmury burzowej</td><td>nad <b>bardzo ciepłym oceanem</b> w strefie międzyzwrotnikowej; ogromny wir z „okiem” w środku</td></tr>
          <tr><td>wielkość</td><td>mały, ale niezwykle gwałtowny</td><td>wielki – setki kilometrów</td></tr>
          <tr><td>gdzie w USA</td><td><b>Aleja Tornad</b> (środek USA) i Aleja Dixie (południowy wschód)</td><td>południowo-wschodnie wybrzeża (Zatoka Meksykańska, Floryda); w Ameryce nazywa się <b>huraganem</b></td></tr>
        </table>
        <p>W środku Ameryki Północnej góry biegną południkowo, więc nic nie zatrzymuje mas powietrza z północy i z południa – zderzają się nad Wielkimi Równinami.</p>
        <p><b>Skutki:</b> zniszczone domy, drzewa, linie energetyczne, powodzie, ofiary. <b>Ochrona:</b> prognozy i ostrzeżenia, schrony przeciw tornadom, ewakuacja przed huraganem.</p>
        <h3>Amazonia – las czy pastwisko?</h3>
        <p>Wilgotny las równikowy na Nizinie Amazonki (w Brazylii zwany <b>selwą</b>) to obszar ogromnej <b>bioróżnorodności</b>; nazywa się go „<b>zielonymi płucami Ziemi</b>”.</p>
        <table>
          <tr><th>Dlaczego się go wycina (korzyści gospodarcze)</th><th>Skutki ekologiczne wylesiania</th></tr>
          <tr><td>pastwiska dla <b>bydła</b> i pola pod <b>soję</b>; cenne drewno; kopalnie surowców; drogi (np. Transamazonika); osadnictwo – praca i rozwój dla mieszkańców Brazylii</td><td>więcej <b>CO<sub>2</sub></b> w atmosferze i zmiana klimatu; <b>wymieranie gatunków</b>; erozja gleby; niszczenie domu <b>rdzennych mieszkańców</b></td></tr>
        </table>
        <p>To <b>konflikt interesów</b>: gospodarka kontra przyroda. Rozwiązaniem jest zrównoważone korzystanie z lasu i jego ochrona.</p>
        <div class="tip">💡 Ameryka to „kanapka”: góry na zachodzie, niziny w środku, starsze góry i wyżyny na wschodzie.</div>`,
      flashcards: [
        ['Połączenie obu Ameryk', 'Przesmyk Panamski'],
        ['Cecha szczególna Ameryki', 'Największa rozciągłość południkowa – ponad 15 tys. km'],
        ['Góry na zachodzie Ameryki Północnej', 'Kordyliery (m.in. Góry Skaliste)'],
        ['Góry na zachodzie Ameryki Południowej', 'Andy; najwyższy szczyt Aconcagua'],
        ['Największa nizina rzeczna świata', 'Nizina Amazonki'],
        ['Wielkie Jeziora', 'Największy zbiornik słodkiej wody na Ziemi (Ameryka Północna)'],
        ['Tornado', 'Gwałtowny wir powietrza – lej z chmury burzowej; powstaje przy zderzeniu ciepłych i zimnych mas powietrza'],
        ['Aleja Tornad', 'Obszar w środkowej części USA z największą liczbą tornad'],
        ['Huragan', 'Cyklon tropikalny w Ameryce; powstaje nad bardzo ciepłym oceanem'],
        ['Selwa', 'Wilgotny las równikowy nad Amazonką'],
        ['Przyczyny wycinania Amazonii', 'Pastwiska dla bydła, uprawa soi, drewno, kopalnie, drogi'],
        ['Skutki wylesiania Amazonii', 'Więcej CO₂, utrata bioróżnorodności, erozja, niszczenie domu rdzennej ludności'],
      ],
      questions: [
        { id: '5m9oca', q: 'Co łączy Amerykę Północną z Ameryką Południową?', options: ['Cieśnina Beringa', 'Przesmyk Panamski', 'Kanał Sueski', 'Wielkie Jeziora'], answer: 1, explain: 'Oba kontynenty łączy wąski pomost lądowy – Przesmyk Panamski.' },
        { id: 'aks5kb', q: 'Jak nazywają się młode góry wzdłuż zachodnich wybrzeży Ameryki Południowej?', options: ['Appalachy', 'Kordyliery', 'Andy', 'Himalaje'], answer: 2, explain: 'Andy ciągną się wzdłuż całego zachodniego wybrzeża Ameryki Południowej.' },
        { id: 'b5azo3', q: 'Jak ułożone są główne pasma gór i niziny w obu Amerykach?', options: ['południkowo – z północy na południe', 'równoleżnikowo – z zachodu na wschód', 'w kształcie koła', 'bez żadnego porządku'], answer: 0, explain: 'Kordyliery, Andy, niziny i Appalachy biegną z północy na południe.' },
        { id: 'lasl4p', q: 'Gdzie leży największa nizina rzeczna świata?', options: ['nad Missisipi', 'nad Gangesem', 'nad Nilem', 'nad Amazonką'], answer: 3, explain: 'Nizina Amazonki jest największą niziną utworzoną przez rzekę.' },
        { id: 'ljynzo', q: 'Dlaczego w Ameryce występują prawie wszystkie strefy klimatyczne?', options: ['bo jest bardzo wysoko', 'bo ma największą rozciągłość z północy na południe', 'bo leży na równiku w całości', 'bo ma dużo jezior'], answer: 1, explain: 'Ameryka rozciąga się od obszarów polarnych na północy po chłodne krańce na południu.' },
        { id: 'o9dmh0', q: 'Jak powstaje tornado w Ameryce Północnej?', options: ['nad bardzo ciepłym oceanem, jako ogromny wir z okiem', 'gdy w górach topnieje śnieg', 'przy zderzeniu ciepłego, wilgotnego powietrza z zimnym, suchym – lej z chmury burzowej', 'z wybuchu wulkanu'], answer: 2, explain: 'Ciepłe, wilgotne powietrze znad Zatoki Meksykańskiej spotyka się z zimnym, suchym z północy.' },
        { id: 'wg9zx2', q: 'Jak w Ameryce nazywa się cyklon tropikalny?', options: ['tajfun', 'tornado', 'monsun', 'huragan'], answer: 3, explain: 'W Ameryce i na Atlantyku cyklony tropikalne to huragany; w Azji Wschodniej – tajfuny.' },
        { id: 'm6ar2k', q: 'Dlaczego masy powietrza z północy i z południa łatwo spotykają się w środkowej części USA?', options: ['bo góry biegną tam południkowo i nie zatrzymują powietrza', 'bo leży tam Ocean Spokojny', 'bo jest tam równik', 'bo są tam lodowce'], answer: 0, explain: 'Między Kordylierami a Appalachami są rozległe niziny – nic nie blokuje napływu powietrza.' },
        { id: 'jy90ap', q: 'Gdzie powstają cyklony tropikalne?', options: ['nad zimnymi morzami polarnymi', 'nad pustyniami', 'nad bardzo ciepłymi wodami oceanów w strefie międzyzwrotnikowej', 'nad górami'], answer: 2, explain: 'Energię daje im parowanie bardzo ciepłej wody oceanu.' },
        { id: 'lmx142', q: 'Która jest główna przyczyna wycinania lasów Amazonii?', options: ['budowa stoków narciarskich', 'pozyskiwanie terenów pod pastwiska dla bydła i uprawę soi', 'ochrona gatunków', 'zakładanie parków narodowych'], answer: 1, explain: 'Las wycina się i wypala, żeby zdobyć ziemię dla rolnictwa; do tego dochodzi drewno, kopalnie i drogi.' },
        { id: '0xeoq3', q: 'Który skutek wylesiania Amazonii jest ekologiczny?', options: ['więcej miejsc pracy', 'większy eksport soi', 'nowe drogi', 'wymieranie gatunków i więcej CO₂ w atmosferze'], answer: 3, explain: 'Pozostałe odpowiedzi to korzyści gospodarcze – na tym polega konflikt interesów.' },
        { id: 'c7e54p', q: 'Na czym polega konflikt interesów w Amazonii?', options: ['gospodarka chce wykorzystywać las, a ochrona przyrody wymaga jego zachowania', 'rzeka płynie w dwie strony', 'turyści nie lubią deszczu', 'Brazylia nie ma lasów'], answer: 0, explain: 'Wycinka daje dochody i rozwój, ale niszczy bioróżnorodność i klimat.' },
        { id: 'rg4w7m', q: 'Prawda czy fałsz?\nTornado jest dużo większe niż cyklon tropikalny.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Tornado jest małe (ale bardzo gwałtowne), a cyklon tropikalny ma setki kilometrów średnicy.' },
      ],
    },
    {
      id: 'ameryka-ludnosc',
      name: 'Ameryki – ludność, miasta, USA',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XVI, wym. 4–7 (sytuacja rdzennej ludności, megalopolis w Ameryce Północnej i slumsy w Ameryce Południowej, Dolina Krzemowa jako technopolia, rola Stanów Zjednoczonych w gospodarce światowej).',
      theory: `
        <h3>Rdzenni mieszkańcy Ameryki</h3>
        <p>Rdzenną ludnością obu Ameryk są <b>Indianie</b> i <b>Inuici</b>. Ich przodkowie przybyli z Azji przez dawny most lądowy w miejscu dzisiejszej Cieśniny Beringa.</p>
        <p>Od XV wieku <b>podbój</b> (konkwista) i <b>kolonizacja</b> europejska doprowadziły do wyniszczenia dużej części Indian i zanikania ich kultur.</p>
        <ul>
          <li>Indian wypierano z ich ziem, przesiedlano i zamykano w <b>rezerwatach</b>; narzucano europejski sposób życia i religię.</li>
          <li>Dziś wielu rdzennych mieszkańców zasymilowało się (przyjęło kulturę większości).</li>
          <li>W rezerwatach często panują <b>bieda</b>, <b>bezrobocie</b> i złe warunki zdrowotne.</li>
          <li>W Amazonii wylesianie niszczy środowisko życia plemion indiańskich.</li>
        </ul>
        <h3>Megalopolis i slumsy</h3>
        <p><b>Megalopolis</b> (gr. „wielkie miasto”) – pas wielu miast i aglomeracji, które zrosły się w jeden ogromny obszar miejski.</p>
        <ul>
          <li><b>BosWash</b> – wschodnie wybrzeże USA od <b>Bos</b>tonu przez Nowy Jork do <b>Wash</b>ingtonu; największa struktura miejska świata.</li>
          <li><b>SanSan</b> – zachodnie wybrzeże USA, od San Diego do San Francisco.</li>
          <li>Cechy: gęsta zabudowa, dziesiątki milionów mieszkańców, świetne połączenia (autostrady, koleje, lotniska), siedziby firm, banków, uczelni.</li>
        </ul>
        <p><b>Slumsy</b> – dzielnice nędzy na obrzeżach wielkich miast; w Brazylii nazywa się je <b>fawelami</b>. Powstają, bo:</p>
        <ul>
          <li>ludzie ze wsi masowo przenoszą się do miast w poszukiwaniu <b>pracy</b> i lepszego życia,</li>
          <li>pracy jest za mało, a mieszkania są za drogie,</li>
          <li>więc ludzie budują domy sami, z przypadkowych materiałów, bez pozwoleń – bez wodociągów, kanalizacji, szkół i przychodni.</li>
        </ul>
        <h3>Dolina Krzemowa – technopolia</h3>
        <p><b>Technopolia</b> – obszar, gdzie uczelnie i ośrodki badawcze współpracują z firmami <b>nowoczesnych technologii (high-tech)</b>, a wiedza szybko zamienia się w produkty. <b>Dolina Krzemowa</b> w Kalifornii (koło San Francisco) to najbardziej znana technopolia świata – siedziba wielkich firm komputerowych i internetowych.</p>
        <p><b>Przyczyny rozwoju</b>: bliskość uczelni (zwłaszcza Uniwersytetu Stanforda), wykwalifikowani specjaliści, pieniądze na badania i nowe firmy, dobra infrastruktura, przyjemny klimat i czyste środowisko. To przykład <b>gospodarki opartej na wiedzy</b>.</p>
        <h3>Potęga gospodarcza USA</h3>
        <ul>
          <li><b>Największa gospodarka świata</b>; najwięcej osób pracuje w <b>usługach</b>, bardzo mało w rolnictwie.</li>
          <li>Wysoko <b>zmechanizowane rolnictwo</b> – USA to jeden z największych producentów i eksporterów żywności.</li>
          <li>Przemysł high-tech, wielkie korporacje, ogromny handel (USA są największym eksporterem i importerem usług) i inwestycje za granicą.</li>
          <li>Przyczyny: duże terytorium z dostępem do dwóch oceanów, bogate surowce, dobre gleby, napływ przedsiębiorczych <b>imigrantów</b>, nauka i innowacje.</li>
        </ul>
        <div class="tip">💡 Bos-Wash = <b>Bos</b>ton + <b>Wash</b>ington. San-San = <b>San</b> Diego + <b>San</b> Francisco.</div>`,
      flashcards: [
        ['Rdzenni mieszkańcy Ameryki', 'Indianie i Inuici'],
        ['Skąd przybyli przodkowie Indian?', 'Z Azji – przez dawny most lądowy w miejscu Cieśniny Beringa'],
        ['Przyczyny zanikania kultur indiańskich', 'Podbój, wypieranie z ziem, przesiedlenia, rezerwaty, narzucanie europejskiego stylu życia'],
        ['Megalopolis', 'Pas zrośniętych miast i aglomeracji – ogromny obszar miejski'],
        ['BosWash', 'Megalopolis na wschodzie USA: od Bostonu do Waszyngtonu'],
        ['SanSan', 'Megalopolis na zachodzie USA: od San Diego do San Francisco'],
        ['Slumsy (fawele)', 'Dzielnice nędzy na obrzeżach wielkich miast'],
        ['Przyczyny powstawania slumsów', 'Masowy napływ ludzi ze wsi, brak pracy i tanich mieszkań'],
        ['Technopolia', 'Obszar współpracy uczelni, ośrodków badawczych i firm high-tech'],
        ['Dolina Krzemowa', 'Najbardziej znana technopolia – Kalifornia, koło San Francisco'],
        ['Czynniki rozwoju Doliny Krzemowej', 'Uczelnie (Stanford), specjaliści, pieniądze na badania, infrastruktura, klimat'],
        ['Pozycja USA w gospodarce', 'Największa gospodarka świata; przewaga usług'],
      ],
      questions: [
        { id: 'et987v', q: 'Kto jest rdzenną ludnością Ameryki?', options: ['Indianie i Inuici', 'Aborygeni', 'Masajowie', 'Arabowie'], answer: 0, explain: 'Indianie i Inuici zamieszkiwali Amerykę przed przybyciem Europejczyków.' },
        { id: 'go27qk', q: 'Co było jedną z głównych przyczyn zmniejszenia liczby Indian po przybyciu Europejczyków?', options: ['susza na Saharze', 'trzęsienia ziemi w Japonii', 'podbój i kolonizacja ich ziem przez Europejczyków', 'brak pożywienia na Antarktydzie'], answer: 2, explain: 'Konkwista i kolonizacja doprowadziły do wyniszczenia znacznej części rdzennej ludności.' },
        { id: 'qb7csh', q: 'Jaka jest dziś sytuacja w wielu rezerwatach indiańskich?', options: ['bardzo wysokie dochody', 'bieda, bezrobocie i złe warunki zdrowotne', 'najlepsze szkoły w kraju', 'brak mieszkańców'], answer: 1, explain: 'W rezerwatach często panują bieda i bezrobocie, co prowadzi do problemów społecznych.' },
        { id: '24vr80', q: 'Czym jest megalopolis?', options: ['jedną wioską', 'pasem zrośniętych miast i aglomeracji', 'dzielnicą nędzy', 'parkiem narodowym'], answer: 1, explain: 'Megalopolis tworzą liczne miasta, które zrosły się w jeden wielki obszar miejski.' },
        { id: 'ng4ptu', q: 'Między jakimi miastami rozciąga się megalopolis BosWash?', options: ['San Diego i San Francisco', 'Rio de Janeiro i São Paulo', 'Chicago i Detroit', 'Boston i Waszyngton'], answer: 3, explain: 'Nazwa to połączenie słów Boston i Washington.' },
        { id: 'w8dy0w', q: 'Dlaczego w miastach Ameryki Południowej powstają slumsy?', options: ['bo ludzie ze wsi masowo przybywają do miast, a brakuje pracy i tanich mieszkań', 'bo miasta są za małe dla turystów', 'bo bogaci przenoszą się na wieś', 'bo w miastach nie ma ludzi'], answer: 0, explain: 'Biedni przybysze budują domy sami na obrzeżach – bez wody, kanalizacji i usług.' },
        { id: 'vv5ixz', q: 'Jak w Brazylii nazywa się dzielnice nędzy?', options: ['rezerwaty', 'technopolie', 'fawele', 'megalopolis'], answer: 2, explain: 'Słowo „fawela” pochodzi z Rio de Janeiro.' },
        { id: 'vf2op6', q: 'Czym jest technopolia?', options: ['obszarem współpracy uczelni, ośrodków badawczych i firm high-tech', 'dzielnicą biedy', 'kopalnią węgla', 'portem rybackim'], answer: 0, explain: 'W technopolii wiedza z uczelni szybko zamienia się w nowoczesne produkty.' },
        { id: '4mmp68', q: 'Gdzie leży Dolina Krzemowa?', options: ['w Teksasie', 'w Kalifornii, koło San Francisco', 'w Nowym Jorku', 'w Kanadzie'], answer: 1, explain: 'Dolina Krzemowa leży w Kalifornii, na zachodnim wybrzeżu USA.' },
        { id: 'btdneq', q: 'Który czynnik najbardziej przyczynił się do rozwoju Doliny Krzemowej?', options: ['tania ziemia rolna', 'kopalnie węgla', 'brak dróg', 'bliskość uczelni i ośrodków badawczych, np. Uniwersytetu Stanforda'], answer: 3, explain: 'Przemysł high-tech potrzebuje wiedzy, specjalistów i badań – to zapewniały uczelnie.' },
        { id: 'ajpapk', q: 'W jakim sektorze gospodarki pracuje najwięcej mieszkańców USA?', options: ['w rolnictwie', 'w usługach', 'w górnictwie', 'w rybołówstwie'], answer: 1, explain: 'W USA w usługach pracuje zdecydowana większość ludzi, a w rolnictwie – bardzo mało.' },
        { id: 'ofd751', q: 'Która cecha wyróżnia rolnictwo USA?', options: ['praca ręczna na małych polach', 'brak eksportu żywności', 'wysoka mechanizacja i produkcja na sprzedaż, także na eksport', 'uprawa tylko ryżu'], answer: 2, explain: 'Bardzo mało rolników dzięki maszynom wytwarza ogromne ilości żywności.' },
        { id: 'ygi8yt', q: 'Prawda czy fałsz?\nStany Zjednoczone są największą gospodarką świata.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Drugie miejsce zajmują Chiny.' },
      ],
    },
    {
      id: 'australia',
      name: 'Australia i Oceania',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XVII „Wybrane problemy i regiony geograficzne Australii i Oceanii”, wym. 1–2 (specyfika środowiska przyrodniczego; rozmieszczenie ludności i cechy gospodarki Australii na tle warunków przyrodniczych).',
      theory: `
        <h3>Najmniejszy kontynent</h3>
        <p><b>Australia</b> to <b>najmniejszy kontynent</b>. Leży w całości na <b>półkuli południowej</b>, a przecina ją <b>zwrotnik Koziorożca</b>. Na całym kontynencie jest jedno państwo – <b>Związek Australijski</b>.</p>
        <ul>
          <li>Trzy regiony: Wyżyna Zachodnioaustralijska, Nizina Środkowoaustralijska, <b>Wielkie Góry Wododziałowe</b> na wschodzie. Najwyższy szczyt to <b>Góra Kościuszki</b> (ok. 2230 m) – nazwę nadał jej polski badacz <b>Paweł Edmund Strzelecki</b>.</li>
          <li>Klimat: na północy podrównikowy, w środku i na zachodzie (największa część) <b>zwrotnikowy suchy</b> – pustynie i półpustynie; na południu podzwrotnikowy. Australia to bardzo <b>suchy</b> kontynent.</li>
          <li>Ok. 60% lądu nie ma stałych rzek. Najważniejsza rzeka to <b>Murray</b> z dopływem Darling. Wodę dają <b>baseny artezyjskie</b> – wody podziemne, np. <b>Wielki Basen Artezyjski</b>.</li>
        </ul>
        <h3>Endemity</h3>
        <p>Australia bardzo dawno oddzieliła się od innych lądów, więc ma wiele <b>endemitów</b> – gatunków, które żyją tylko tam:</p>
        <ul>
          <li><b>torbacze</b> – młode dorastają w torbie matki: <b>kangury</b>, <b>koale</b> (jedzą liście eukaliptusa),</li>
          <li><b>stekowce</b> – ssaki składające jaja: <b>dziobak</b> i kolczatka,</li>
          <li>roślinność: <b>eukaliptusy</b> i akacje.</li>
        </ul>
        <h3>Ludność</h3>
        <ul>
          <li>Australia jest <b>słabo zaludniona</b> (średnio ok. 3 osoby na 1 km²), a ludność rozmieszczona bardzo nierównomiernie.</li>
          <li>Najwięcej ludzi mieszka na <b>południowo-wschodnim wybrzeżu</b> – tu jest łagodny klimat i woda. Wnętrze lądu (pustynie) jest prawie puste.</li>
          <li>Większość mieszka w <b>miastach</b> na wybrzeżu: Sydney, Melbourne, Brisbane, Perth. Stolicą jest Canberra.</li>
          <li>Rdzenni mieszkańcy to <b>Aborygeni</b> – wyparci przez osadników na obrzeża pustyń. Dzisiejsze społeczeństwo powstało głównie z imigrantów.</li>
        </ul>
        <h3>Gospodarka</h3>
        <ul>
          <li><b>Hodowla owiec</b> (wełna) i bydła na ogromnych farmach – na terenach półsuchych dzięki wodzie z basenów artezyjskich; uprawa pszenicy i trzciny cukrowej.</li>
          <li><b>Górnictwo</b> – bogate złoża m.in. węgla kamiennego, rud żelaza, miedzi i złota.</li>
          <li>Australia <b>eksportuje głównie surowce</b> (mineralne i rolne). To państwo wysoko rozwinięte.</li>
        </ul>
        <h3>Oceania</h3>
        <p>Oceania to tysiące wysp na Oceanie Spokojnym (m.in. Nowa Zelandia, Nowa Gwinea, Polinezja). Wyspy są <b>kontynentalne</b> (duże, np. Nowa Zelandia), <b>wulkaniczne</b> (na styku płyt) albo <b>koralowe</b> – atole zbudowane przez koralowce w ciepłej wodzie.</p>
        <div class="tip">💡 Australijczycy mieszkają „na brzegu talerza”: na wybrzeżach, bo środek to pustynia.</div>`,
      flashcards: [
        ['Najmniejszy kontynent', 'Australia'],
        ['Półkula Australii', 'W całości półkula południowa; przecina ją zwrotnik Koziorożca'],
        ['Najwyższy szczyt Australii', 'Góra Kościuszki (ok. 2230 m) – nazwę nadał Paweł Edmund Strzelecki'],
        ['Przeważający klimat Australii', 'Zwrotnikowy suchy – pustynie i półpustynie'],
        ['Basen artezyjski', 'Zbiornik wód podziemnych – źródło wody na suchych terenach'],
        ['Endemit', 'Gatunek żyjący tylko na jednym obszarze, np. kangur, koala, dziobak'],
        ['Torbacze', 'Ssaki, których młode rozwijają się w torbie – kangur, koala'],
        ['Stekowce', 'Ssaki składające jaja – dziobak, kolczatka'],
        ['Gdzie mieszka najwięcej Australijczyków?', 'Na południowo-wschodnim wybrzeżu, w miastach'],
        ['Aborygeni', 'Rdzenni mieszkańcy Australii'],
        ['Główne działy gospodarki Australii', 'Górnictwo, hodowla owiec i bydła, eksport surowców'],
        ['Atol', 'Wyspa koralowa'],
      ],
      questions: [
        { id: '4b8k8y', q: 'Który kontynent jest najmniejszy?', options: ['Europa', 'Antarktyda', 'Australia', 'Ameryka Południowa'], answer: 2, explain: 'Australia to najmniejszy kontynent na Ziemi.' },
        { id: '76de4o', q: 'Który klimat zajmuje największą część Australii?', options: ['zwrotnikowy suchy', 'równikowy wilgotny', 'polarny', 'umiarkowany chłodny'], answer: 0, explain: 'Środek i zachód Australii to pustynie i półpustynie klimatu zwrotnikowego suchego.' },
        { id: 'uxbxny', q: 'Kto nadał nazwę najwyższemu szczytowi Australii – Górze Kościuszki?', options: ['Krzysztof Kolumb', 'James Cook', 'Ferdynand Magellan', 'Paweł Edmund Strzelecki'], answer: 3, explain: 'Nazwę nadał polski badacz Paweł Edmund Strzelecki, który badał południowo-wschodnią Australię.' },
        { id: 'anq77u', q: 'Skąd bierze się woda dla farm na suchych terenach Australii?', options: ['z lodowców', 'z basenów artezyjskich – wód podziemnych', 'z jezior górskich w Himalajach', 'z monsunów'], answer: 1, explain: 'Wielki Basen Artezyjski dostarcza wody do pojenia zwierząt na pastwiskach.' },
        { id: 'ktbo49', q: 'Dlaczego w Australii jest tak wiele endemitów?', options: ['bo kontynent bardzo dawno oddzielił się od innych lądów', 'bo jest tam bardzo zimno', 'bo leży na równiku', 'bo zwierzęta przywieźli tam ludzie'], answer: 0, explain: 'Przez miliony lat izolacji rozwinęły się gatunki, których nie ma nigdzie indziej.' },
        { id: 'wp43f9', q: 'Które zwierzę jest torbaczem?', options: ['dziobak', 'kangur', 'lew', 'niedźwiedź polarny'], answer: 1, explain: 'Kangury i koale to torbacze; dziobak jest stekowcem – składa jaja.' },
        { id: 'rbiztd', q: 'Gdzie mieszka większość Australijczyków?', options: ['w środku kontynentu', 'na zachodniej pustyni', 'na południowo-wschodnim wybrzeżu', 'na wyspach Oceanii'], answer: 2, explain: 'Tam jest łagodny klimat i woda – leżą tu Sydney i Melbourne.' },
        { id: 's3zhpc', q: 'Kim są Aborygeni?', options: ['rdzennymi mieszkańcami Australii', 'imigrantami z Europy', 'mieszkańcami Antarktydy', 'Indianami z Ameryki'], answer: 0, explain: 'Aborygeni zamieszkiwali Australię przed przybyciem Europejczyków.' },
        { id: 'b5enb4', q: 'Co Australia głównie eksportuje?', options: ['samochody i elektronikę', 'ropę z Zatoki Perskiej', 'ryż', 'surowce mineralne i rolne, np. rudy żelaza, węgiel, wełnę'], answer: 3, explain: 'Australia sprzedaje głównie surowce – wydobywane i pochodzenia rolnego.' },
        { id: 'kwa2ya', q: 'Jak powstają wyspy koralowe (atole)?', options: ['z lawy wulkanów', 'z lodu', 'ze szkieletów koralowców w ciepłej wodzie', 'z piasku nawianego z pustyni'], answer: 2, explain: 'Koralowce budują wapienne rafy wokół wysp – tak powstają atole.' },
        { id: 'cdlwf9', q: 'Prawda czy fałsz?\nAustralia jest gęsto zaludniona w całym kraju.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Średnio to ok. 3 osoby na 1 km², a wnętrze lądu jest prawie puste.' },
        { id: '5g9nhu', q: 'Prawda czy fałsz?\nDziobak składa jaja, choć jest ssakiem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Dziobak i kolczatka to stekowce – ssaki składające jaja.' },
      ],
    },
    {
      id: 'polarne',
      name: 'Obszary okołobiegunowe',
      basis: 'Dz.U. 2024 poz. 996, geografia kl. V–VIII, dz. XVIII „Geografia obszarów okołobiegunowych”, wym. 1–2 (położenie i środowisko przyrodnicze Antarktydy, status określony Traktatem Antarktycznym; skutki zmian klimatu, w tym zmian zlodzenia, w obszarach okołobiegunowych). Podstawa proponuje dział XVIII w klasie VIII.',
      theory: `
        <h3>Arktyka i Antarktyka</h3>
        <table>
          <tr><th></th><th>Arktyka (północ)</th><th>Antarktyka (południe)</th></tr>
          <tr><td>co to jest</td><td><b>Ocean Arktyczny</b> pokryty lodem morskim + północne wybrzeża Eurazji i Ameryki Północnej + <b>Grenlandia</b></td><td>kontynent <b>Antarktyda</b> wokół bieguna południowego + otaczające wody i wyspy</td></tr>
          <tr><td>lód</td><td>lód morski (pływa); lądolód Grenlandii – największej wyspy świata</td><td><b>lądolód</b> pokrywa prawie całą Antarktydę (ok. 96%) – średnio grubość ponad 2 km</td></tr>
          <tr><td>zwierzęta</td><td><b>niedźwiedź polarny</b>, wół piżmowy, renifer, foki</td><td><b>pingwiny</b>, foki; w wodach bardzo bogate życie</td></tr>
          <tr><td>ludzie</td><td>mieszkają rdzenni mieszkańcy (np. Inuici)</td><td><b>brak stałych mieszkańców</b> – tylko naukowcy w stacjach badawczych</td></tr>
        </table>
        <h3>Środowisko Antarktydy</h3>
        <ul>
          <li><b>Najzimniejszy</b> kontynent – w stacji Wostok zanotowano −89,2°C. Opady głównie w postaci śniegu, silne wiatry.</li>
          <li>W lądolodzie zgromadzona jest ok. <b>70% słodkiej wody</b> Ziemi.</li>
          <li>Prawie brak roślin; życie skupia się na wybrzeżach i w morzu.</li>
        </ul>
        <h3>Traktat (Układ) Antarktyczny</h3>
        <p>W <b>1959 r.</b> państwa prowadzące badania podpisały <b>Układ Antarktyczny</b>. Obejmuje obszar na południe od <b>60°S</b>. Ustalenia:</p>
        <ul>
          <li>Antarktyda służy tylko <b>celom pokojowym i naukowym</b>,</li>
          <li>jest <b>zdemilitaryzowana</b> – bez baz wojskowych i broni,</li>
          <li>roszczenia terytorialne są <b>zamrożone</b> – Antarktyda nie należy do żadnego państwa,</li>
          <li>trzeba <b>chronić przyrodę</b>.</li>
        </ul>
        <p>Dlaczego to ważne: Antarktyda to wielkie laboratorium (badania klimatu, lodu, kosmosu), magazyn słodkiej wody i delikatny ekosystem, który łatwo zniszczyć. Polska ma stałą stację <b>im. Henryka Arctowskiego</b> na Wyspie Króla Jerzego.</p>
        <p>Sytuacja prawna Oceanu Arktycznego <b>nie jest w pełni uregulowana</b>.</p>
        <h3>Skutki zmian klimatu</h3>
        <ul>
          <li><b>Arktyka ociepla się najszybciej</b>. Latem zasięg lodu morskiego jest coraz mniejszy, a lód coraz cieńszy.</li>
          <li><b>Lądolód Grenlandii</b> się kurczy – woda z topniejących lądolodów <b>podnosi poziom mórz</b> (zagrożenie dla wybrzeży i wysp).</li>
          <li>Rozmarza <b>wieloletnia zmarzlina</b> – uwalnia się metan (gaz cieplarniany), co jeszcze bardziej ociepla klimat; drogi i domy na zmarzlinie się zapadają.</li>
          <li>Ciemna woda w miejscu białego lodu pochłania więcej ciepła – ocieplenie przyspiesza.</li>
          <li>Zwierzęta zależne od lodu (np. niedźwiedź polarny, foki) tracą miejsce do polowania i życia.</li>
          <li>Na Półwyspie Antarktycznym wyraźnie się ociepla – rozpadają się lodowce szelfowe.</li>
        </ul>
        <div class="tip">💡 Niedźwiedzie polarne i pingwiny nigdy się nie spotkają w naturze: misie – na <b>północy</b> (Arktyka), pingwiny – na <b>południu</b> (Antarktyka).</div>`,
      flashcards: [
        ['Arktyka', 'Obszar wokół bieguna północnego: Ocean Arktyczny, północne wybrzeża Eurazji i Ameryki, Grenlandia'],
        ['Antarktyka', 'Obszar wokół bieguna południowego: Antarktyda z otaczającymi wodami i wyspami'],
        ['Największa wyspa świata', 'Grenlandia'],
        ['Ile Antarktydy pokrywa lądolód?', 'Ok. 96% powierzchni'],
        ['Rekord zimna', '−89,2°C w stacji Wostok na Antarktydzie'],
        ['Ile słodkiej wody jest w lądolodzie Antarktydy?', 'Ok. 70% słodkiej wody Ziemi'],
        ['Układ Antarktyczny', '1959 r.; obszar na południe od 60°S – tylko cele pokojowe i naukowe, zakaz działań wojskowych'],
        ['Czy Antarktyda należy do jakiegoś państwa?', 'Nie – roszczenia są zamrożone Układem Antarktycznym'],
        ['Polska stacja na Antarktydzie', 'Stacja im. Henryka Arctowskiego na Wyspie Króla Jerzego'],
        ['Skutki ocieplenia w Arktyce', 'Mniej lodu morskiego, topnienie lądolodu Grenlandii, rozmarzanie zmarzliny'],
        ['Skutek topnienia lądolodów', 'Podnoszenie się poziomu mórz'],
      ],
      questions: [
        { id: 'c7z3e4', q: 'Gdzie żyją niedźwiedzie polarne?', options: ['w Antarktyce', 'w Arktyce', 'na Saharze', 'w Australii'], answer: 1, explain: 'Niedźwiedź polarny żyje w Arktyce, a pingwiny – w Antarktyce.' },
        { id: 'kxq65s', q: 'Czym jest Antarktyda?', options: ['zamarzniętym oceanem', 'wyspą w Arktyce', 'kontynentem wokół bieguna południowego', 'półwyspem Ameryki'], answer: 2, explain: 'Antarktyda to kontynent pokryty prawie w całości lądolodem.' },
        { id: 'vcrejz', q: 'Która wyspa jest największa na świecie?', options: ['Madagaskar', 'Nowa Gwinea', 'Borneo', 'Grenlandia'], answer: 3, explain: 'Grenlandia, w większości pokryta lądolodem, należy do Arktyki.' },
        { id: 'w9k0el', q: 'Jaka część słodkiej wody Ziemi jest zgromadzona w lądolodzie Antarktydy?', options: ['ok. 70%', 'ok. 1%', 'ok. 10%', 'ok. 30%'], answer: 0, explain: 'Lądolód Antarktydy to największy magazyn słodkiej wody na Ziemi.' },
        { id: 'b77c9u', q: 'W którym roku podpisano Układ Antarktyczny?', options: ['1918', '1945', '1959', '2004'], answer: 2, explain: 'Układ Antarktyczny zawarto w 1959 r.' },
        { id: 'db03yf', q: 'Co ustala Układ Antarktyczny?', options: ['podział Antarktydy między państwa', 'że Antarktyda służy tylko celom pokojowym i naukowym', 'budowę baz wojskowych', 'wydobycie ropy przez każde państwo'], answer: 1, explain: 'Antarktyda jest zdemilitaryzowana, a roszczenia terytorialne są zamrożone.' },
        { id: 'c352fz', q: 'Dlaczego ważne jest zachowanie statusu Antarktydy z Układu Antarktycznego?', options: ['bo to delikatny ekosystem, magazyn słodkiej wody i miejsce badań naukowych', 'bo jest tam dużo miast', 'bo to najcieplejszy kontynent', 'bo mieszka tam wielu ludzi'], answer: 0, explain: 'Chroniąc Antarktydę, chronimy przyrodę, wodę i możliwość badań dla całej ludzkości.' },
        { id: 'udfhqd', q: 'Kto mieszka na Antarktydzie?', options: ['Inuici', 'Aborygeni', 'kilka milionów ludzi w miastach', 'nie ma stałych mieszkańców – tylko naukowcy w stacjach'], answer: 3, explain: 'Na Antarktydzie działają stacje badawcze, ale nie ma stałej ludności.' },
        { id: 'ziapvx', q: 'Jak nazywa się polska stała stacja na Antarktydzie?', options: ['stacja im. Henryka Arctowskiego', 'stacja Wostok', 'stacja im. Kopernika', 'stacja im. Strzeleckiego'], answer: 0, explain: 'Polska stacja im. Henryka Arctowskiego leży na Wyspie Króla Jerzego.' },
        { id: 'y8esu5', q: 'Który skutek ocieplenia klimatu obserwuje się w Arktyce?', options: ['coraz większy zasięg lodu morskiego latem', 'zmniejszanie się zasięgu i grubości lodu morskiego', 'powstawanie nowych lodowców na Saharze', 'ochładzanie się oceanu'], answer: 1, explain: 'Arktyka ociepla się najszybciej – lodu morskiego jest coraz mniej.' },
        { id: '824fdj', q: 'Jak topnienie lądolodów wpływa na świat?', options: ['obniża poziom mórz', 'nie ma żadnego wpływu', 'podnosi poziom mórz, zagrażając wybrzeżom', 'zwiększa ilość lodu w Arktyce'], answer: 2, explain: 'Woda z lądolodów spływa do oceanu i podnosi jego poziom.' },
        { id: 'uyn9bi', q: 'Dlaczego rozmarzanie wieloletniej zmarzliny przyspiesza ocieplenie?', options: ['bo uwalnia się metan – gaz cieplarniany', 'bo powstaje więcej lodu', 'bo rosną nowe lasy', 'bo spada ilość CO₂'], answer: 0, explain: 'Metan uwięziony w zmarzlinie trafia do atmosfery i wzmacnia efekt cieplarniany.' },
        { id: 'wwprez', q: 'Prawda czy fałsz?\nSytuacja prawna Oceanu Arktycznego jest uregulowana tak samo jak Antarktydy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Antarktydę obejmuje Układ Antarktyczny, a sytuacja prawna Oceanu Arktycznego nie jest w pełni uregulowana.' },
      ],
    },
  ],
});
