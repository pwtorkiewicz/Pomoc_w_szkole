/* Przyroda – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, przyroda kl. IV–VI) */
window.SUBJECTS.push({
  id: 'przyroda',
  name: 'Przyroda',
  icon: '🌿',
  color: '#2e9e6b',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'poznajemy',
      name: 'Jak poznajemy przyrodę',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 1 „Spotkania z przyrodą”, wym. 2–6 (skuteczne uczenie się, przyrządy, dociekanie naukowe, zmysły i rola mózgu, bezpieczeństwo pracy badawczej). Dział 1 realizuje się przez trzy lata; wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Zmysły i mózg</h3>
        <p>Przyrodę poznajemy <b>zmysłami</b>. Człowiek ma pięć zmysłów:</p>
        <table>
          <tr><th>Zmysł</th><th>Narząd</th><th>Przykład</th></tr>
          <tr><td>wzrok</td><td>oczy</td><td>widzisz kolor liścia</td></tr>
          <tr><td>słuch</td><td>uszy</td><td>słyszysz śpiew ptaka</td></tr>
          <tr><td>węch</td><td>nos</td><td>czujesz zapach kwiatów</td></tr>
          <tr><td>smak</td><td>język</td><td>czujesz, że jabłko jest kwaśne</td></tr>
          <tr><td>dotyk</td><td>skóra</td><td>czujesz, że kora jest szorstka</td></tr>
        </table>
        <p>Zmysły odbierają sygnały i przesyłają je do <b>mózgu</b>. To mózg rozpoznaje, co widzisz albo słyszysz, zapamiętuje to i decyduje, co zrobić.</p>
        <p><b>Zmysły mają ograniczenia.</b> Nie zobaczysz gołym okiem bardzo małych rzeczy ani dokładnie tego, co jest daleko. Zmysły można też oszukać: włóż jedną rękę do ciepłej wody, a drugą do zimnej. Potem włóż obie do letniej – jednej ręce wyda się chłodna, drugiej ciepła.</p>
        <div class="tip">💡 Dlatego badacze przyrody używają <b>przyrządów</b> – są dokładniejsze niż zmysły.</div>
        <h3>Przyrządy</h3>
        <table>
          <tr><th>Przyrząd</th><th>Do czego służy</th></tr>
          <tr><td>lupa</td><td>powiększa małe obiekty, np. mrówkę, liść</td></tr>
          <tr><td>mikroskop</td><td>pokazuje obiekty niewidoczne gołym okiem</td></tr>
          <tr><td>lornetka</td><td>przybliża obiekty daleko od nas, np. ptaka na drzewie</td></tr>
          <tr><td>kompas</td><td>pozwala wyznaczyć kierunki</td></tr>
          <tr><td>taśma miernicza</td><td>mierzy długość, np. obwód pnia drzewa</td></tr>
          <tr><td>termometr</td><td>mierzy temperaturę</td></tr>
          <tr><td>waga</td><td>mierzy masę</td></tr>
          <tr><td>menzurka (naczynie z podziałką)</td><td>odmierza objętość cieczy</td></tr>
        </table>
        <h3>Obserwacja i doświadczenie</h3>
        <ul>
          <li><b>Obserwacja</b> – uważnie się przyglądasz i zapisujesz, co widzisz. <b>Niczego nie zmieniasz.</b> Np. liczysz ptaki w karmniku.</li>
          <li><b>Doświadczenie</b> – celowo <b>zmieniasz jeden warunek</b> i sprawdzasz, co się stanie. Np. sprawdzasz, czy fasola wykiełkuje bez wody.</li>
        </ul>
        <h3>Etapy doświadczenia</h3>
        <ol>
          <li><b>Pytanie badawcze</b> – co chcesz sprawdzić? „Czy nasiona fasoli potrzebują wody, żeby kiełkować?”</li>
          <li><b>Hipoteza</b> – przypuszczenie, które sprawdzisz: „Myślę, że bez wody fasola nie wykiełkuje”.</li>
          <li><b>Plan</b> – czego potrzebujesz i co zrobisz.</li>
          <li><b>Doświadczenie</b> – przygotowujesz dwa zestawy:
            <ul>
              <li><b>próba badawcza</b> – zmieniasz badany warunek (nasiona na <b>suchej</b> wacie),</li>
              <li><b>próba kontrolna</b> – wszystko tak samo, ale bez tej zmiany (nasiona na <b>wilgotnej</b> wacie). Służy do porównania.</li>
            </ul>
          </li>
          <li><b>Wynik</b> – zapisujesz, co zaobserwowałeś (np. co dzień przez tydzień).</li>
          <li><b>Wniosek</b> – odpowiedź na pytanie badawcze. Sprawdzasz, czy hipoteza się potwierdziła.</li>
        </ol>
        <div class="tip">💡 W obu próbach zmieniasz <b>tylko jeden warunek</b>. Wtedy wiesz, co spowodowało wynik.</div>
        <h3>Bezpieczeństwo</h3>
        <ul>
          <li>Pracuj według instrukcji i słuchaj nauczyciela.</li>
          <li>Nie próbuj niczego smakiem. Nie wąchaj substancji bezpośrednio – jeśli nauczyciel pozwoli, <b>nawiewaj zapach dłonią</b> w stronę nosa.</li>
          <li>Uważaj na szkło, ostre narzędzia i ogień. Utrzymuj porządek na stole.</li>
          <li>Po pracy umyj ręce. Każdy wypadek od razu zgłoś dorosłemu.</li>
        </ul>
        <h3>Jak się skutecznie uczyć</h3>
        <ul>
          <li><b>Powtarzaj</b> krótko, ale kilka razy w różne dni – to lepsze niż jedna długa nauka.</li>
          <li><b>Sprawdzaj się</b>: fiszki, quizy, opowiadanie z pamięci.</li>
          <li><b>Rób notatki</b>: zwykłe (punkty jeden pod drugim) albo graficzne, np. <b>mapę myśli</b> – temat w środku, a wokół niego gałęzie z najważniejszymi informacjami.</li>
          <li><b>Zadbaj o miejsce i spokój</b>: porządek na biurku, cisza, telefon odłożony. Rób jedną rzecz naraz.</li>
          <li><b>Wysypiaj się</b> – podczas snu mózg utrwala to, czego się nauczyłeś.</li>
        </ul>
      `,
      flashcards: [
        ['Pięć zmysłów człowieka', 'wzrok, słuch, węch, smak, dotyk'],
        ['Rola mózgu', 'Odbiera sygnały od zmysłów, rozpoznaje je, zapamiętuje i decyduje, co zrobić'],
        ['Lupa', 'Powiększa małe obiekty, np. mrówkę'],
        ['Mikroskop', 'Pokazuje obiekty niewidoczne gołym okiem'],
        ['Lornetka', 'Przybliża obiekty daleko od nas, np. ptaka na drzewie'],
        ['Menzurka', 'Naczynie z podziałką do odmierzania objętości cieczy'],
        ['Obserwacja', 'Przyglądanie się i zapisywanie – bez zmieniania warunków'],
        ['Doświadczenie', 'Celowo zmieniamy jeden warunek i sprawdzamy, co się stanie'],
        ['Hipoteza', 'Przypuszczenie, które sprawdzamy w doświadczeniu'],
        ['Próba kontrolna', 'Zestaw bez zmiany badanego warunku – do porównania z próbą badawczą'],
      ],
      questions: [
        { id: 'cikwsh', q: 'Którym zmysłem rozpoznajesz zapach kwiatów?', options: ['węchem', 'słuchem', 'dotykiem', 'wzrokiem'], answer: 0, explain: 'Zapachy rozpoznajemy węchem – narządem węchu jest nos.' },
        { id: '9gljtc', q: 'Który narząd rozpoznaje sygnały od zmysłów i decyduje, co zrobić?', options: ['serce', 'mózg', 'żołądek', 'płuca'], answer: 1, explain: 'Zmysły przesyłają sygnały do mózgu. To mózg je rozpoznaje i podejmuje decyzje.' },
        { id: 'hkd5cr', q: 'Czym najlepiej obejrzysz z bliska nóżki mrówki na spacerze?', options: ['lornetką', 'kompasem', 'lupą', 'termometrem'], answer: 2, explain: 'Lupa powiększa małe obiekty. Lornetka przybliża obiekty daleko od nas.' },
        { id: 'csaylk', q: 'Czym obejrzysz ptaka siedzącego wysoko na drzewie, żeby go nie spłoszyć?', options: ['lupą', 'lornetką', 'wagą', 'taśmą mierniczą'], answer: 1, explain: 'Lornetka przybliża obiekty, które są daleko – nie musisz podchodzić do ptaka.' },
        { id: '7wmadj', q: 'Czym zmierzysz obwód pnia drzewa?', options: ['termometrem', 'menzurką', 'wagą', 'taśmą mierniczą'], answer: 3, explain: 'Taśma miernicza mierzy długość. Możesz nią owinąć pień i odczytać obwód.' },
        { id: '5rzm3u', q: 'Do czego służy menzurka?', options: ['do odmierzania objętości cieczy', 'do mierzenia masy', 'do mierzenia temperatury', 'do wyznaczania kierunków'], answer: 0, explain: 'Menzurka to naczynie z podziałką – odczytasz na niej, ile jest cieczy.' },
        { id: '7umyvd', q: 'Prawda czy fałsz?\nZmysł dotyku zawsze dokładnie mówi, jaką temperaturę ma woda.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Zmysły można oszukać. Ręka wyjęta z ciepłej wody odczuje letnią wodę jako chłodną. Dokładną temperaturę pokaże termometr.' },
        { id: 'ww519g', q: 'Ola codziennie zapisuje, jakie ptaki przylatują do karmnika. Niczego przy tym nie zmienia. Co prowadzi Ola?', options: ['doświadczenie', 'obserwację', 'próbę kontrolną'], answer: 1, explain: 'Obserwacja to przyglądanie się bez zmieniania warunków. W doświadczeniu celowo coś zmieniamy.' },
        { id: '8ki4py', q: 'Kuba mówi: „Myślę, że bez wody fasola nie wykiełkuje”. To zdanie jest…', options: ['pytaniem badawczym', 'wynikiem', 'hipotezą', 'wnioskiem'], answer: 2, explain: 'Hipoteza to przypuszczenie, które sprawdzamy w doświadczeniu. Słowo „myślę” pokazuje, że Kuba jeszcze tego nie sprawdził.' },
        { id: '7fqbd7', q: 'Która kolejność etapów doświadczenia jest prawidłowa?', options: ['pytanie badawcze → hipoteza → doświadczenie → wniosek', 'hipoteza → wniosek → pytanie badawcze → doświadczenie', 'doświadczenie → pytanie badawcze → wniosek → hipoteza', 'wniosek → doświadczenie → hipoteza → pytanie badawcze'], answer: 0, explain: 'Najpierw pytasz, potem przypuszczasz (hipoteza), sprawdzasz w doświadczeniu, a na końcu wyciągasz wniosek.' },
        { id: '1x3sji', q: 'Sprawdzasz, czy fasola potrzebuje wody do kiełkowania. W próbie badawczej nasiona leżą na suchej wacie. Jak przygotujesz próbę kontrolną?', options: ['tak samo, ale wata będzie wilgotna', 'na suchej wacie, ale w ciemnej szafie', 'na suchej wacie, ale w lodówce', 'bez nasion i bez waty'], answer: 0, explain: 'Próba kontrolna różni się od badawczej tylko badanym warunkiem – tutaj wodą. Wszystko inne (miejsce, światło, temperatura) musi być takie samo.' },
        { id: '1gsiox', q: 'Dlaczego w doświadczeniu zmieniamy tylko jeden warunek?', options: ['żeby skończyć szybciej', 'żeby wiedzieć, co spowodowało wynik', 'żeby zużyć mniej wody', 'żeby doświadczenie ładniej wyglądało'], answer: 1, explain: 'Gdybyśmy zmienili kilka rzeczy naraz, nie wiedzielibyśmy, która z nich zadziałała.' },
        { id: '22jg1p', q: 'Prawda czy fałsz?\nW pracowni wolno spróbować nieznanej substancji, żeby ją rozpoznać.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Nigdy nie próbujemy smakiem substancji w pracowni – mogą być szkodliwe.' },
        { id: '47lwew', q: 'Nauczyciel pozwolił powąchać substancję. Jak zrobisz to bezpiecznie?', options: ['włożę nos do naczynia', 'nawieję zapach dłonią w stronę nosa', 'wysypię trochę na rękę i powącham', 'podgrzeję ją i powącham z bliska'], answer: 1, explain: 'Nawiewanie zapachu dłonią jest bezpieczne – do nosa trafia tylko trochę zapachu.' },
        { id: 'lkwo2t', q: 'Który sposób nauki pomoże ci zapamiętać materiał na dłużej?', options: ['krótkie powtórki przez kilka dni', 'jedno długie czytanie w noc przed sprawdzianem', 'nauka przy włączonym telewizorze', 'czytanie notatki tylko raz'], answer: 0, explain: 'Krótkie, ale powtarzane w różne dni powtórki działają najlepiej. Sen i spokojne miejsce też pomagają.' },
        { id: 'b3lm9s', q: 'Prawda czy fałsz?\nPodczas snu mózg utrwala to, czego się nauczyłeś.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Sen jest ważny dla pamięci. Niewyspany uczeń gorzej się skupia i mniej zapamiętuje.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'orientacja',
      name: 'Kierunki, kompas, plan i mapa',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 1 wym. 3 i 7 (kompas, mapy i plany, położenie w terenie); dz. 2 wym. 13 (elementy okolicy odczytane z planu lub mapy); dz. 5 wym. 4 (materiały magnetyczne, zasada działania kompasu, ziemski magnetyzm), wym. 6 (tylko kierunki geograficzne), wym. 18 (tylko skala). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Kierunki geograficzne</h3>
        <table>
          <tr><th>Kierunki główne</th><th>Kierunki pośrednie</th></tr>
          <tr><td>północ (N)</td><td>północny wschód (NE)</td></tr>
          <tr><td>wschód (E)</td><td>południowy wschód (SE)</td></tr>
          <tr><td>południe (S)</td><td>południowy zachód (SW)</td></tr>
          <tr><td>zachód (W)</td><td>północny zachód (NW)</td></tr>
        </table>
        <p>Rysunek, który pokazuje wszystkie kierunki, to <b>róża wiatrów</b>. Północ jest na górze, południe na dole, wschód po prawej, zachód po lewej.</p>
        <div class="tip">💡 Kierunki pośrednie leżą między głównymi. Ich nazwa zaczyna się od północy albo południa: <b>północny</b> wschód, <b>południowy</b> zachód.</div>
        <h3>Magnes</h3>
        <ul>
          <li>Magnes ma dwa <b>bieguny</b>: północny (N) i południowy (S).</li>
          <li>Bieguny <b>różne</b> (N i S) się <b>przyciągają</b>. Bieguny <b>jednakowe</b> (N i N, S i S) się <b>odpychają</b>.</li>
          <li>Magnes przyciąga przedmioty z <b>żelaza i stali</b>, np. gwoździe, spinacze. To <b>materiały magnetyczne</b>.</li>
          <li>Nie przyciąga drewna, papieru, plastiku ani szkła.</li>
        </ul>
        <h3>Kompas</h3>
        <p>W kompasie jest <b>igła magnetyczna</b> – mały magnes, który może się obracać. Ziemia działa jak wielki magnes, dlatego igła zawsze ustawia się w kierunku <b>północ – południe</b>. Koniec igły wskazujący północ jest zwykle wyróżniony kolorem.</p>
        <p><b>Jak wyznaczyć kierunki kompasem:</b></p>
        <ol>
          <li>Połóż kompas poziomo, z dala od magnesów, przedmiotów z żelaza i telefonu.</li>
          <li>Poczekaj, aż igła się zatrzyma.</li>
          <li>Obracaj kompas, aż litera N na tarczy znajdzie się pod końcem igły wskazującym północ.</li>
          <li>Teraz odczytaj kierunki z tarczy.</li>
        </ol>
        <div class="tip">💡 W słoneczny dzień w Polsce kierunki pomoże wyznaczyć też Słońce. W południe (kiedy jest najwyżej na niebie) Słońce jest po stronie <b>południowej</b>, a cienie są najkrótsze i wskazują <b>północ</b>.</div>
        <h3>Plan i mapa</h3>
        <ul>
          <li><b>Plan</b> – rysunek niewielkiego terenu (pokoju, szkoły, osiedla) widzianego z góry i zmniejszonego.</li>
          <li><b>Mapa</b> – przedstawia większy obszar, np. gminę, Polskę, świat.</li>
          <li><b>Legenda</b> – objaśnienie znaków użytych na planie lub mapie (np. zielony kolor – park, krzyżyk – kościół).</li>
          <li>Na większości map i planów północ jest u góry.</li>
        </ul>
        <h3>Skala</h3>
        <p>Skala mówi, <b>ile razy</b> zmniejszono odległości na planie lub mapie.</p>
        <table>
          <tr><th>Skala</th><th>Znaczenie</th><th>1 cm na planie to w terenie</th></tr>
          <tr><td>1 : 100</td><td>zmniejszono 100 razy</td><td>100 cm = 1 m</td></tr>
          <tr><td>1 : 1000</td><td>zmniejszono 1000 razy</td><td>1000 cm = 10 m</td></tr>
          <tr><td>1 : 100 000</td><td>zmniejszono 100 000 razy</td><td>100 000 cm = 1 km</td></tr>
        </table>
        <p>Przykład: plan w skali 1 : 100, ławka ma na nim 3 cm. W rzeczywistości: 3 · 100 cm = 300 cm = <b>3 m</b>.</p>
        <div class="tip">💡 Skalę można też zapisać słowami: „1 cm – 1 m” znaczy to samo co 1 : 100. Pamiętaj: 1 m = 100 cm, 1 km = 1000 m.</div>
      `,
      flashcards: [
        ['Kierunki główne', 'północ (N), wschód (E), południe (S), zachód (W)'],
        ['Kierunki pośrednie', 'północny wschód (NE), południowy wschód (SE), południowy zachód (SW), północny zachód (NW)'],
        ['Róża wiatrów', 'Rysunek pokazujący kierunki geograficzne'],
        ['Igła magnetyczna kompasu', 'Mały magnes – ustawia się w kierunku północ – południe'],
        ['Bieguny magnesu', 'północny (N) i południowy (S)'],
        ['Bieguny różne (N i S)', 'przyciągają się'],
        ['Bieguny jednakowe (N i N)', 'odpychają się'],
        ['Legenda mapy', 'Objaśnienie znaków użytych na mapie lub planie'],
        ['Skala 1 : 100', 'Zmniejszono 100 razy; 1 cm na planie = 1 m w terenie'],
        ['Cień w południe (w Polsce)', 'Jest najkrótszy i wskazuje północ'],
      ],
      questions: [
        { id: 'yclaso', q: 'Który kierunek leży naprzeciwko północy?', options: ['wschód', 'południe', 'zachód', 'północny wschód'], answer: 1, explain: 'Północ i południe leżą naprzeciw siebie, tak samo wschód i zachód.' },
        {
          id: 'u9xhs3',
          q: 'Jaki kierunek oznaczono na róży wiatrów znakiem zapytania?',
          svg: `<svg viewBox="0 0 300 220" role="img" aria-label="Róża wiatrów z literami N, E, S, W. Znak zapytania między północą a wschodem">
      <line x1="150" y1="30" x2="150" y2="190" class="ln"/>
      <line x1="40" y1="110" x2="260" y2="110" class="ln"/>
      <line x1="108" y1="68" x2="192" y2="152" class="ln-thin"/>
      <line x1="108" y1="152" x2="150" y2="110" class="ln-thin"/>
      <line x1="150" y1="110" x2="200" y2="60" class="s2 sw"/>
      <circle cx="150" cy="110" r="5" class="t2"/>
      <text x="150" y="22" class="tx-b" text-anchor="middle">N</text>
      <text x="150" y="212" class="tx-b" text-anchor="middle">S</text>
      <text x="272" y="116" class="tx-b" text-anchor="middle">E</text>
      <text x="26" y="116" class="tx-b" text-anchor="middle">W</text>
      <text x="214" y="54" class="tx-b t2" text-anchor="middle">?</text>
    </svg>`,
          options: ['północny wschód', 'północny zachód', 'południowy wschód', 'wschód'],
          answer: 0,
          explain: 'Znak zapytania leży między północą (N) a wschodem (E), więc to północny wschód (NE).',
        },
        { id: '5gw3zj', q: 'Co oznacza skrót SW?', options: ['północny wschód', 'południowy zachód', 'południowy wschód', 'północny zachód'], answer: 1, explain: 'S – południe (ang. south), W – zachód (ang. west). SW to południowy zachód.' },
        { id: 'o5kg2k', q: 'W jakim kierunku ustawia się igła magnetyczna kompasu?', options: ['wschód – zachód', 'zawsze tam, gdzie patrzysz', 'północ – południe', 'w stronę Słońca'], answer: 2, explain: 'Igła to mały magnes. Ziemia działa jak wielki magnes, dlatego igła ustawia się w kierunku północ – południe.' },
        { id: '5hwo8x', q: 'Który przedmiot przyciągnie magnes?', options: ['drewniany klocek', 'plastikowa linijka', 'stalowy spinacz', 'papierowa kartka'], answer: 2, explain: 'Magnes przyciąga przedmioty z żelaza i stali. Drewno, plastik i papier nie są materiałami magnetycznymi.' },
        { id: 'hfncdf', q: 'Prawda czy fałsz?\nDwa magnesy zbliżone biegunami N i N przyciągają się.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Jednakowe bieguny (N i N albo S i S) się odpychają. Przyciągają się bieguny różne.' },
        { id: '7vcjf7', q: 'Dlaczego podczas wyznaczania kierunków kompas trzymamy z dala od magnesów i przedmiotów z żelaza?', options: ['bo mogą odchylić igłę i kompas pokaże zły kierunek', 'bo mogą zarysować szybkę', 'bo kompas wtedy szybciej się rozładuje', 'bo igła zacznie świecić'], answer: 0, explain: 'Igła kompasu to magnes – inne magnesy i żelazo przyciągają ją i zakłócają pomiar.' },
        { id: '9p8ofz', q: 'Co oznacza skala 1 : 100?', options: ['odległości powiększono 100 razy', 'odległości zmniejszono 100 razy', '1 m na planie to 100 m w terenie', 'plan ma 100 cm długości'], answer: 1, explain: 'Skala mówi, ile razy zmniejszono odległości. 1 : 100 – sto razy, czyli 1 cm na planie to 100 cm (1 m) w terenie.' },
        { id: '3kuqk7', q: 'Na planie w skali 1 : 100 ławka ma 3 cm długości. Ile ma naprawdę?', options: ['30 cm', '3 m', '30 m', '300 m'], answer: 1, explain: '3 cm · 100 = 300 cm = 3 m.' },
        { id: 'mh5a2q', q: 'Na planie w skali 1 : 1000 ścieżka ma 5 cm. Jaka jest jej długość w terenie?', options: ['5 m', '50 m', '500 m', '5 km'], answer: 1, explain: '5 cm · 1000 = 5000 cm = 50 m (bo 100 cm = 1 m).' },
        { id: 'zcnqe8', q: 'Mapa ma skalę 1 : 100 000. Ile w terenie to 1 cm na mapie?', options: ['1 m', '100 m', '1 km', '10 km'], answer: 2, explain: '100 000 cm = 1000 m = 1 km.' },
        { id: 'scvdy0', q: 'Która skala oznacza większe zmniejszenie?', options: ['1 : 100', '1 : 1000', 'obie tak samo'], answer: 1, explain: '1 : 1000 – zmniejszono 1000 razy, a 1 : 100 – tylko 100 razy.' },
        { id: 'pujlxn', q: 'Gdzie na mapie znajdziesz objaśnienie znaków?', options: ['w legendzie', 'w skali', 'w róży wiatrów', 'w tytule'], answer: 0, explain: 'Legenda objaśnia znaki i kolory użyte na mapie lub planie.' },
        { id: 'ea76zs', q: 'W słoneczny dzień w Polsce, w południe, gdy Słońce jest najwyżej na niebie, cień drzewa wskazuje…', options: ['wschód', 'zachód', 'południe', 'północ'], answer: 3, explain: 'W południe Słońce jest po stronie południowej, więc cień pada na przeciwną stronę – na północ.' },
        { id: 'jgvqj8', q: 'Prawda czy fałsz?\nPlan przedstawia teren widziany z góry.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Plan to zmniejszony rysunek terenu widzianego z góry – jak z lotu ptaka.' },
        {
          id: 'cm9e32',
          q: 'Spójrz na plan. W którym kierunku od domu leży szkoła?',
          svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Plan okolicy. Strzałka północy skierowana w górę. Dom po lewej stronie, szkoła po prawej, park na górze">
      <rect x="10" y="10" width="340" height="180" rx="8" class="bg ln-thin"/>
      <rect x="20" y="96" width="320" height="22" class="f4"/>
      <rect x="40" y="58" width="70" height="34" rx="4" class="f2 s2 sw"/>
      <text x="75" y="80" class="tx" text-anchor="middle">dom</text>
      <rect x="240" y="58" width="80" height="34" rx="4" class="f1 s1 sw"/>
      <text x="280" y="80" class="tx" text-anchor="middle">szkoła</text>
      <rect x="140" y="140" width="100" height="40" rx="6" class="f3 s3"/>
      <text x="190" y="166" class="tx" text-anchor="middle">park</text>
      <line x1="175" y1="88" x2="175" y2="44" class="ln sw"/>
      <path d="M167,54 L175,38 L183,54 z" class="t2"/>
      <text x="190" y="50" class="tx-b t2">N</text>
    </svg>`,
          options: ['na wschód', 'na zachód', 'na północ', 'na południe'],
          answer: 0,
          explain: 'Strzałka N wskazuje północ w górę planu. Wtedy wschód jest po prawej – a szkoła leży na prawo od domu.',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'rosliny',
      name: 'Przyroda ożywiona i nieożywiona. Rośliny',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 2 wym. 1 (składniki przyrody ożywionej i nieożywionej, elementy antropogeniczne), wym. 2 (rośliny zarodnikowe i nasienne), wym. 12 (tylko: do czego rośliny wykorzystują światło – fotosynteza, w uproszczeniu); dz. 4 wym. 1 (tylko cechy organizmu żywego, organizmy samożywne i cudzożywne), wym. 5 (budowa zewnętrzna rośliny). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Co nas otacza?</h3>
        <table>
          <tr><th>Składniki nieożywione</th><th>Składniki ożywione</th><th>Elementy stworzone przez człowieka</th></tr>
          <tr><td>woda, powietrze, skały, gleba, światło słoneczne</td><td>rośliny, zwierzęta, grzyby, ludzie</td><td>domy, drogi, mosty, ławki, latarnie</td></tr>
        </table>
        <p>Elementy stworzone przez człowieka nazywamy <b>antropogenicznymi</b> (od greckiego „anthropos” – człowiek).</p>
        <p>Wszystkie składniki są ze sobą powiązane. Roślina potrzebuje światła, wody, powietrza i gleby. Zwierzęta potrzebują powietrza, wody i pokarmu, np. roślin.</p>
        <h3>Cechy organizmów żywych</h3>
        <p>Każdy organizm żywy (roślina, zwierzę, grzyb, człowiek):</p>
        <ul>
          <li><b>oddycha</b> – także rośliny,</li>
          <li><b>odżywia się</b>,</li>
          <li><b>rośnie i rozwija się</b>,</li>
          <li><b>rozmnaża się</b> – wydaje potomstwo,</li>
          <li><b>reaguje</b> na to, co się dzieje wokół (np. roślina na parapecie wygina się w stronę okna),</li>
          <li><b>wydala</b> – pozbywa się zbędnych substancji,</li>
          <li><b>porusza się</b> – rośliny też, ale powoli (np. kwiaty otwierają się i zamykają).</li>
        </ul>
        <h3>Samożywne i cudzożywne</h3>
        <ul>
          <li><b>Organizmy samożywne</b> same wytwarzają pokarm. To rośliny.</li>
          <li><b>Organizmy cudzożywne</b> zjadają inne organizmy albo ich szczątki. To zwierzęta, grzyby i człowiek.</li>
        </ul>
        <p><b>Fotosynteza</b> – tak roślina wytwarza pokarm. W zielonych liściach, z <b>wody</b> i <b>dwutlenku węgla</b> (gazu z powietrza), z pomocą <b>światła</b> powstaje pokarm (cukier). Przy okazji roślina wydziela <b>tlen</b>, którym oddychamy.</p>
        <div class="tip">💡 Bez światła roślina nie wytworzy pokarmu. Dzięki fotosyntezie jest pokarm i tlen dla zwierząt i ludzi.</div>
        <h3>Budowa rośliny</h3>
        <table>
          <tr><th>Część</th><th>Funkcja</th></tr>
          <tr><td>korzeń</td><td>utrzymuje roślinę w ziemi, pobiera wodę i sole mineralne</td></tr>
          <tr><td>łodyga</td><td>podtrzymuje liście i kwiaty, przewodzi wodę i pokarm</td></tr>
          <tr><td>liście</td><td>wytwarzają pokarm (fotosynteza)</td></tr>
          <tr><td>kwiat</td><td>służy do rozmnażania</td></tr>
          <tr><td>owoc</td><td>chroni nasiona i pomaga je rozsiewać</td></tr>
          <tr><td>nasiono</td><td>wyrasta z niego nowa roślina</td></tr>
        </table>
        <p><b>Części kwiatu:</b></p>
        <ul>
          <li><b>okwiat</b> – płatki i działki; kolorowe płatki wabią owady,</li>
          <li><b>pręciki</b> – wytwarzają pyłek,</li>
          <li><b>słupek</b> – w nim powstają nasiona; z jego dolnej części powstaje owoc.</li>
        </ul>
        <h3>Rośliny zarodnikowe i nasienne</h3>
        <ul>
          <li><b>Zarodnikowe</b> – rozmnażają się przez <b>zarodniki</b> (bardzo drobne, jak pył). Nie mają kwiatów ani nasion. Przykłady: <b>mchy, paprocie</b>.</li>
          <li><b>Nasienne</b> – wytwarzają <b>nasiona</b>. Przykłady: dąb, sosna, mniszek, fasola.</li>
        </ul>
        <div class="tip">💡 Paproć ma zarodniki w brązowych kropkach na spodniej stronie liści.</div>
      `,
      flashcards: [
        ['Składniki nieożywione przyrody', 'woda, powietrze, skały, gleba, światło słoneczne'],
        ['Element antropogeniczny', 'Stworzony przez człowieka, np. droga, most, dom'],
        ['Cechy organizmu żywego', 'oddycha, odżywia się, rośnie, rozmnaża się, reaguje, wydala, porusza się'],
        ['Organizm samożywny', 'Sam wytwarza pokarm, np. roślina'],
        ['Organizm cudzożywny', 'Zjada inne organizmy lub ich szczątki, np. zwierzę, grzyb'],
        ['Fotosynteza', 'Wytwarzanie pokarmu przez roślinę z wody i dwutlenku węgla przy użyciu światła; powstaje też tlen'],
        ['Korzeń', 'Utrzymuje roślinę w ziemi i pobiera wodę'],
        ['Pręciki', 'Wytwarzają pyłek'],
        ['Słupek', 'Powstają w nim nasiona; z jego dolnej części powstaje owoc'],
        ['Rośliny zarodnikowe', 'Rozmnażają się przez zarodniki, np. mchy i paprocie'],
      ],
      questions: [
        { id: 'r1q7wm', q: 'Który składnik przyrody jest nieożywiony?', options: ['dąb', 'jeż', 'skała', 'mech'], answer: 2, explain: 'Skała nie oddycha, nie rośnie i nie rozmnaża się – to składnik nieożywiony.' },
        { id: 'gm4im8', q: 'Który element krajobrazu został stworzony przez człowieka?', options: ['rzeka', 'most', 'chmura', 'paproć'], answer: 1, explain: 'Most zbudowali ludzie – to element antropogeniczny.' },
        { id: '377q50', q: 'Prawda czy fałsz?\nRośliny nie oddychają – oddychają tylko zwierzęta i ludzie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Oddychanie to cecha każdego organizmu żywego, także rośliny.' },
        { id: 'w4sqnf', q: 'Które organizmy są samożywne?', options: ['zwierzęta', 'grzyby', 'rośliny', 'ludzie'], answer: 2, explain: 'Rośliny same wytwarzają pokarm (fotosynteza). Zwierzęta, grzyby i ludzie są cudzożywni.' },
        { id: 'gs0lno', q: 'Kot jest organizmem cudzożywnym, ponieważ…', options: ['zjada inne organizmy', 'sam wytwarza pokarm dzięki światłu', 'nie oddycha', 'rośnie'], answer: 0, explain: 'Organizm cudzożywny zdobywa pokarm, zjadając inne organizmy (albo ich szczątki).' },
        { id: '4hs0dp', q: 'Bez czego roślina nie wytworzy pokarmu w procesie fotosyntezy?', options: ['bez kwiatów', 'bez światła', 'bez owoców', 'bez wiatru'], answer: 1, explain: 'Do fotosyntezy potrzebne jest światło (oraz woda i dwutlenek węgla).' },
        { id: '14xi07', q: 'Dlaczego fotosynteza jest ważna także dla zwierząt i ludzi?', options: ['bo powstaje pokarm i tlen', 'bo powstają chmury', 'bo rośliny przestają oddychać', 'bo ogrzewa powietrze'], answer: 0, explain: 'Rośliny są pokarmem dla zwierząt, a tlen wydzielany podczas fotosyntezy jest potrzebny do oddychania.' },
        { id: 'o16ut9', q: 'Która część rośliny pobiera wodę z gleby?', options: ['liść', 'kwiat', 'korzeń', 'owoc'], answer: 2, explain: 'Korzeń utrzymuje roślinę w ziemi i pobiera z niej wodę.' },
        { id: 'aqdmna', q: 'W której części rośliny zachodzi przede wszystkim fotosynteza?', options: ['w korzeniach', 'w zielonych liściach', 'w nasionach'], answer: 1, explain: 'Fotosynteza zachodzi w zielonych częściach rośliny, przede wszystkim w liściach.' },
        { id: 'a3cdf8', q: 'Która część rośliny podtrzymuje liście i kwiaty?', options: ['łodyga', 'korzeń', 'pręcik', 'nasiono'], answer: 0, explain: 'Łodyga podtrzymuje liście i kwiaty oraz przewodzi wodę.' },
        {
          id: 'yo1bb9',
          q: 'Jak nazywa się część kwiatu oznaczona znakiem zapytania?',
          svg: `<svg viewBox="0 0 300 240" role="img" aria-label="Przekrój kwiatu. Znak zapytania wskazuje część pośrodku kwiatu, z grubszą dolną częścią i długą szyjką">
      <line x1="150" y1="150" x2="150" y2="232" class="s3" stroke-width="6"/>
      <ellipse cx="90" cy="112" rx="58" ry="20" transform="rotate(-28 90 112)" class="f2 s2 sw"/>
      <ellipse cx="210" cy="112" rx="58" ry="20" transform="rotate(28 210 112)" class="f2 s2 sw"/>
      <ellipse cx="150" cy="146" rx="34" ry="10" class="f3 s3 sw"/>
      <line x1="134" y1="140" x2="114" y2="78" class="ln"/>
      <line x1="166" y1="140" x2="186" y2="78" class="ln"/>
      <ellipse cx="113" cy="72" rx="7" ry="10" class="f4 s4 sw"/>
      <ellipse cx="187" cy="72" rx="7" ry="10" class="f4 s4 sw"/>
      <ellipse cx="150" cy="122" rx="14" ry="18" class="f5 s5 sw"/>
      <line x1="150" y1="104" x2="150" y2="56" class="s5" stroke-width="5"/>
      <ellipse cx="150" cy="52" rx="11" ry="6" class="f5 s5 sw"/>
      <line x1="236" y1="36" x2="164" y2="60" class="ln"/>
      <text x="250" y="42" class="tx-b t2" text-anchor="middle">?</text>
    </svg>`,
          options: ['pręcik', 'słupek', 'płatek', 'łodyga'],
          answer: 1,
          explain: 'Pośrodku kwiatu jest słupek: na dole grubsza część, w której powstają nasiona, wyżej długa szyjka. Pręciki to cienkie nitki z woreczkami pyłku na końcu.',
        },
        { id: 'niqetj', q: 'Co wytwarzają pręciki?', options: ['nasiona', 'pyłek', 'zarodniki', 'korzenie'], answer: 1, explain: 'Pręciki wytwarzają pyłek. Nasiona powstają w słupku.' },
        { id: 'dq83dh', q: 'Co powstaje z dolnej części słupka i chroni nasiona?', options: ['owoc', 'liść', 'korzeń', 'płatek'], answer: 0, explain: 'Owoc powstaje z dolnej części słupka. Chroni nasiona i pomaga je rozsiewać.' },
        { id: 'jwwvqx', q: 'Do czego służą kolorowe płatki kwiatu?', options: ['wabią owady', 'pobierają wodę z gleby', 'wytwarzają pyłek', 'utrzymują roślinę w ziemi'], answer: 0, explain: 'Kolorowe płatki (część okwiatu) przyciągają owady do kwiatu.' },
        { id: '0sz8wb', q: 'Która roślina jest zarodnikowa?', options: ['dąb', 'sosna', 'paproć', 'mniszek'], answer: 2, explain: 'Paprocie (i mchy) rozmnażają się przez zarodniki. Dąb, sosna i mniszek wytwarzają nasiona.' },
        { id: 'f6epfn', q: 'Prawda czy fałsz?\nMchy wytwarzają nasiona.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Mchy są roślinami zarodnikowymi – rozmnażają się przez zarodniki, nie mają nasion.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'skaly-gleba',
      name: 'Skały i gleba',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 2 wym. 6 (skały najbliższej okolicy – barwa, spójność, twardość, odporność na działanie wody; porównanie z innymi skałami Polski), wym. 7 (gleba okolicy, porównanie z ziemią ogrodową, przydatność do uprawy roślin); doświadczenia edukacyjne – zajęcia terenowe, pkt 4 (próbka gleby: barwa, próchnica, uziarnienie, organizmy). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Skały wokół nas</h3>
        <p><b>Skały</b> to naturalne składniki przyrody nieożywionej, z których zbudowana jest skorupa Ziemi. Spotkasz je w górach i kamieniołomach, ale też na plaży, na polu i w budynkach (schody, parapety, kostka brukowa).</p>
        <p>Ze względu na <b>spójność</b> (czy ziarna trzymają się razem) dzielimy skały na:</p>
        <table>
          <tr><th>Skały lite</th><th>Skały zwięzłe</th><th>Skały luźne</th></tr>
          <tr><td>twarde, ziarna mocno ze sobą połączone</td><td>ziarna połączone słabiej; mokre dają się formować</td><td>ziarna niepołączone, rozsypują się</td></tr>
          <tr><td>granit, piaskowiec, wapień</td><td>glina</td><td>piasek, żwir</td></tr>
        </table>
        <h3>Jak badamy skały?</h3>
        <ul>
          <li><b>Barwa</b> – oglądamy skałę, najlepiej przez lupę. Granit ma widoczne różnokolorowe ziarna, wapień jest zwykle jasny.</li>
          <li><b>Twardość</b> – próbujemy zarysować skałę gwoździem. Granitu gwoździem nie zarysujesz, wapień – tak.</li>
          <li><b>Odporność na wodę</b> – kładziemy próbkę do wody. Glina nasiąka i staje się plastyczna (można z niej lepić). Piasek przepuszcza wodę.</li>
          <li><b>Wapień</b> rozpoznasz po tym, że po polaniu octem pojawiają się pęcherzyki gazu (skała „musuje”).</li>
        </ul>
        <div class="tip">💡 Przy badaniu skał pracuj w okularach ochronnych i pod opieką dorosłego. Nie bierz skał do ust.</div>
        <h3>Skały w Polsce – przykłady</h3>
        <ul>
          <li><b>granit</b> – m.in. w Karkonoszach i w Tatrach; używa się go na schody, pomniki, nagrobki,</li>
          <li><b>piaskowiec</b> – np. w Górach Stołowych; to sklejone ziarna piasku,</li>
          <li><b>wapień</b> – np. na Wyżynie Krakowsko-Częstochowskiej; z wapienia robi się m.in. wapno i cement,</li>
          <li><b>glina</b> – surowiec do wyrobu cegieł i naczyń,</li>
          <li><b>piasek i żwir</b> – na plażach, w korytach rzek, w żwirowniach; używa się ich na budowach,</li>
          <li><b>głazy narzutowe</b> – duże kamienie przyniesione na teren Polski przez lądolód ze Skandynawii.</li>
        </ul>
        <h3>Gleba</h3>
        <p><b>Gleba</b> to wierzchnia warstwa ziemi, w której rosną rośliny. Powstaje bardzo powoli – przez setki lat – z rozdrobnionych skał i szczątków organizmów.</p>
        <p><b>Składniki gleby:</b></p>
        <ul>
          <li>okruchy skał (np. piasek, glina),</li>
          <li><b>próchnica</b> – ciemna substancja z rozłożonych szczątków roślin i zwierząt; daje roślinom składniki odżywcze,</li>
          <li>woda i powietrze (w szczelinach między grudkami),</li>
          <li>organizmy – m.in. dżdżownice, owady, bakterie i grzyby. Dżdżownice drążą korytarze i mieszają glebę, a bakterie i grzyby rozkładają szczątki na próchnicę.</li>
        </ul>
        <h3>Jaka gleba jest najlepsza dla roślin?</h3>
        <table>
          <tr><th>Gleba piaszczysta</th><th>Gleba gliniasta</th><th>Ziemia ogrodowa</th></tr>
          <tr><td>jasna, sypka; woda szybko przez nią przecieka, więc szybko wysycha; mało próchnicy</td><td>zbita, ciężka; zatrzymuje wodę, po deszczu robi się błoto; mało powietrza</td><td>ciemna, pulchna; dużo próchnicy (np. z kompostu); dobrze trzyma wodę i ma powietrze</td></tr>
        </table>
        <p>Im <b>ciemniejsza</b> gleba, tym zwykle więcej w niej próchnicy i tym lepiej rosną w niej rośliny.</p>
        <h3>Doświadczenie: gleba w słoiku</h3>
        <p>Wsyp trochę gleby do słoika z wodą, zamieszaj i odstaw. Po pewnym czasie zobaczysz <b>warstwy</b>: na dnie najcięższe ziarna (żwir, piasek), wyżej drobne cząstki (muł, glina), a na powierzchni pływają szczątki roślin. Pęcherzyki powietrza pokazują, że w glebie było powietrze.</p>
      `,
      flashcards: [
        ['Skały lite – przykłady', 'granit, piaskowiec, wapień'],
        ['Skała zwięzła – przykład', 'glina (mokra daje się formować)'],
        ['Skały luźne – przykłady', 'piasek, żwir'],
        ['Jak rozpoznać wapień?', 'Po polaniu octem musuje – powstają pęcherzyki gazu'],
        ['Jak zbadać twardość skały?', 'Próbujemy zarysować ją gwoździem'],
        ['Głazy narzutowe', 'Duże kamienie przyniesione przez lądolód ze Skandynawii'],
        ['Gleba', 'Wierzchnia warstwa ziemi, w której rosną rośliny'],
        ['Próchnica', 'Ciemna substancja z rozłożonych szczątków roślin i zwierząt; użyźnia glebę'],
        ['Składniki gleby', 'okruchy skał, próchnica, woda, powietrze, organizmy'],
        ['Rola dżdżownic w glebie', 'Drążą korytarze i mieszają glebę'],
        ['Gleba piaszczysta', 'Przepuszcza wodę i szybko wysycha, ma mało próchnicy'],
      ],
      questions: [
        { id: '12b888', q: 'Która skała jest skałą luźną?', options: ['piasek', 'granit', 'wapień', 'piaskowiec'], answer: 0, explain: 'Ziarna piasku nie są ze sobą połączone – piasek się rozsypuje. Granit, wapień i piaskowiec to skały lite.' },
        { id: 'lxa3wt', q: 'Która skała po zwilżeniu daje się formować jak plastelina?', options: ['glina', 'żwir', 'granit', 'piasek'], answer: 0, explain: 'Mokra glina jest plastyczna – lepi się z niej naczynia i robi cegły.' },
        { id: 'qk0h17', q: 'Którą skałę rozpoznasz po tym, że po polaniu octem pojawiają się pęcherzyki gazu?', options: ['wapień', 'granit', 'glinę', 'piasek'], answer: 0, explain: 'Wapień pod wpływem octu „musuje” – wydziela się gaz.' },
        { id: '1gxlzg', q: 'Jak sprawdzisz twardość skały?', options: ['próbując zarysować ją gwoździem', 'wąchając ją', 'mierząc ją linijką', 'ważąc ją'], answer: 0, explain: 'Twardą skałę (np. granit) trudno zarysować gwoździem, a miękką (np. wapień) – łatwo.' },
        { id: '3n5tog', q: 'Prawda czy fałsz?\nGranit to skała luźna.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Granit to twarda skała lita – jego ziarna są mocno ze sobą połączone.' },
        { id: 'l4nh68', q: 'Skąd na terenie Polski wzięły się głazy narzutowe?', options: ['przyniósł je lądolód ze Skandynawii', 'przyniosły je rzeki z Tatr', 'wyrzuciły je wulkany', 'ułożyli je ludzie'], answer: 0, explain: 'Głazy narzutowe przyniósł lądolód, który dawno temu nasunął się na teren Polski ze Skandynawii.' },
        { id: '7tg1x4', q: 'Piaskowiec to skała zbudowana z…', options: ['sklejonych ziaren piasku', 'zastygłej lawy', 'muszli i lodu', 'mokrej gliny'], answer: 0, explain: 'Sama nazwa podpowiada: piaskowiec to ziarna piasku mocno ze sobą sklejone.' },
        { id: 'nlgsff', q: 'Do czego używa się gliny?', options: ['do wyrobu cegieł i naczyń', 'do produkcji szkła okiennego', 'jako paliwa', 'do budowy kompasów'], answer: 0, explain: 'Z gliny wypala się cegły, dachówki i naczynia.' },
        { id: 'nle2kz', q: 'Co to jest próchnica w glebie?', options: ['ciemna substancja z rozłożonych szczątków roślin i zwierząt', 'choroba zębów roślin', 'rodzaj skały litej', 'woda w glebie'], answer: 0, explain: 'Próchnica powstaje z rozłożonych szczątków organizmów. Dostarcza roślinom składników odżywczych.' },
        { id: '3t5jiu', q: 'Który składnik NIE wchodzi w skład gleby?', options: ['plastik', 'próchnica', 'woda', 'okruchy skał'], answer: 0, explain: 'Gleba składa się z okruchów skał, próchnicy, wody, powietrza i organizmów. Plastik to śmieć, który do gleby nie należy.' },
        { id: '0bb1i0', q: 'Jaką rolę w glebie pełnią dżdżownice?', options: ['drążą korytarze i mieszają glebę', 'wytwarzają skały', 'zjadają korzenie zdrowych roślin', 'wysuszają glebę'], answer: 0, explain: 'Dżdżownice spulchniają i mieszają glebę – dzięki temu dostaje się do niej powietrze i woda.' },
        { id: 'okzbb5', q: 'Która gleba szybko przepuszcza wodę i szybko wysycha?', options: ['piaszczysta', 'gliniasta', 'ziemia ogrodowa z kompostem'], answer: 0, explain: 'Ziarna piasku są duże i luźne – woda łatwo między nimi przecieka.' },
        { id: 'p6qn4c', q: 'Po deszczu na tej glebie długo stoją kałuże i robi się błoto. To najpewniej gleba…', options: ['gliniasta', 'piaszczysta', 'żwirowa'], answer: 0, explain: 'Glina zatrzymuje wodę i słabo ją przepuszcza.' },
        { id: 'v6etg7', q: 'W której glebie rośliny będą rosły najlepiej?', options: ['w ciemnej ziemi ogrodowej z dużą ilością próchnicy', 'w czystym piasku', 'w ubitej glinie', 'w żwirze'], answer: 0, explain: 'Ziemia ogrodowa ma dużo próchnicy (składników odżywczych), dobrze trzyma wodę i ma powietrze.' },
        { id: 'nzm3al', q: 'Do słoika z wodą wsypano glebę, zamieszano i odstawiono. Co będzie na dnie?', options: ['najcięższe ziarna – żwir i piasek', 'szczątki roślin', 'pęcherzyki powietrza', 'nic – wszystko się rozpuści'], answer: 0, explain: 'Najcięższe ziarna opadają najszybciej i leżą na dnie. Szczątki roślin pływają na powierzchni.' },
        { id: 'r60utl', q: 'Prawda czy fałsz?\nGleba powstaje bardzo powoli – przez setki lat.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Skały kruszą się, a szczątki organizmów rozkładają się bardzo powoli. Dlatego trzeba dbać o glebę.' },
        { id: '0zgoyw', q: 'Ciemna barwa gleby świadczy zwykle o tym, że…', options: ['jest w niej dużo próchnicy', 'jest w niej dużo piasku', 'jest zanieczyszczona', 'nie ma w niej wody'], answer: 0, explain: 'Próchnica jest ciemna – im ciemniejsza gleba, tym zwykle więcej w niej próchnicy.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'zwierzeta',
      name: 'Zwierzęta i grzyby w naszej okolicy',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 2 wym. 3 (zwierzęta lądowe okolicy, ślady bytowania, kręgowce i bezkręgowce), wym. 4 (grzyby kapeluszowe, zbieranie grzybów, grzybnia, znaczenie grzybów), wym. 5 (trujące rośliny i grzyby, jadowite zwierzęta w Polsce); dz. 4 wym. 9 (zimowanie zwierząt, odpowiedzialne dokarmianie). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Kręgowce i bezkręgowce</h3>
        <table>
          <tr><th>Kręgowce</th><th>Bezkręgowce</th></tr>
          <tr><td>mają <b>kręgosłup</b> (i szkielet z kości w środku ciała)</td><td><b>nie mają</b> kręgosłupa</td></tr>
          <tr><td>jeż, sarna, kot, wróbel, sikora, żaba, jaszczurka, ryby</td><td>biedronka, mrówka, pszczoła, pająk, ślimak, dżdżownica</td></tr>
        </table>
        <h3>Ślady zwierząt</h3>
        <p>Wiele zwierząt trudno zobaczyć, ale łatwo znaleźć ich <b>ślady bytowania</b>:</p>
        <ul>
          <li><b>tropy</b> – odciski łap na śniegu albo w błocie,</li>
          <li><b>nory</b> i <b>kretowiska</b> (kopczyki ziemi wypchniętej przez kreta),</li>
          <li><b>gniazda</b> ptaków, os, mrówek (mrowisko),</li>
          <li><b>zgryzy</b> – ślady jedzenia, np. obgryzione szyszki, nadgryzione orzechy,</li>
          <li><b>pióra</b>, sierść, odchody.</li>
        </ul>
        <h3>Grzyby kapeluszowe</h3>
        <ul>
          <li>To, co zbieramy w lesie, to <b>owocnik</b>: <b>kapelusz</b> i <b>trzon</b>.</li>
          <li>Pod kapeluszem są <b>blaszki</b> (np. u muchomora) albo <b>rurki</b> (np. u prawdziwka). Tam powstają zarodniki.</li>
          <li>W ziemi rośnie <b>grzybnia</b> – plątanina cienkich nitek. To najważniejsza część grzyba. Z niej co roku wyrastają nowe owocniki.</li>
        </ul>
        <p>Inne grzyby nie mają kapeluszy, np. <b>pleśń</b> na zepsutym chlebie albo <b>drożdże</b> używane do pieczenia ciasta.</p>
        <p><b>Znaczenie grzybów:</b> są cudzożywne. Rozkładają opadłe liście, martwe drewno i inne szczątki – dzięki nim powstaje żyzna gleba. Wiele grzybów współpracuje z korzeniami drzew.</p>
        <h3>Jak zbierać grzyby</h3>
        <ul>
          <li>Zbieraj <b>tylko grzyby, które na pewno znasz</b> – najlepiej z dorosłym, który dobrze zna grzyby.</li>
          <li>Grzyb ostrożnie wykręć albo wytnij nożykiem przy ziemi – nie niszcz grzybni.</li>
          <li>Nie kop i nie niszcz grzybów, których nie zbierasz – są ważne dla lasu.</li>
          <li>Zbieraj do koszyka, a nie do foliowej torby.</li>
        </ul>
        <h3>Uwaga – trujące i jadowite!</h3>
        <ul>
          <li><b>Muchomor sromotnikowy</b> – grzyb <b>śmiertelnie trujący</b>. Nawet jeden grzyb może zabić człowieka. Trujący jest też <b>muchomor czerwony</b> (czerwony kapelusz z białymi kropkami).</li>
          <li><b>Konwalia</b> – roślina trująca (także jej owoce).</li>
          <li><b>Barszcz Sosnowskiego</b> – bardzo duża roślina; jej sok na skórze w słońcu powoduje groźne oparzenia. Nie dotykaj go!</li>
          <li><b>Żmija zygzakowata</b> – jedyny jadowity wąż w Polsce. Zwykle ma ciemny zygzak na grzbiecie. Gdy ją zobaczysz – spokojnie się oddal.</li>
          <li><b>Osy, pszczoły i szerszenie</b> żądlą. Użądlenie jest szczególnie groźne dla osób uczulonych.</li>
        </ul>
        <div class="tip">💡 Trującego grzyba nie rozpoznasz po zapachu ani smaku. Nie zrywaj i nie jedz nieznanych grzybów, roślin ani owoców. Jeśli ktoś zjadł nieznanego grzyba lub roślinę – od razu powiedz dorosłemu; trzeba wezwać pomoc (112).</div>
        <h3>Zwierzęta zimą</h3>
        <table>
          <tr><th>Sposób</th><th>Przykład</th></tr>
          <tr><td><b>sen zimowy (hibernacja)</b> – zwierzę zasypia w kryjówce, jego organizm prawie się „wyłącza”</td><td>jeż, nietoperze</td></tr>
          <tr><td><b>odlot</b> do ciepłych krajów</td><td>bocian, jaskółka</td></tr>
          <tr><td><b>gromadzenie zapasów</b></td><td>wiewiórka (orzechy, żołędzie)</td></tr>
        </table>
        <p>Wiele ptaków zostaje na zimę, np. wróbel i sikora.</p>
        <h3>Dokarmianie ptaków</h3>
        <ul>
          <li>Dokarmiaj zimą, gdy jest mróz albo śnieg. Jeśli zaczniesz – rób to regularnie.</li>
          <li><b>Dobre:</b> nasiona słonecznika, ziarna zbóż, niesolona słonina, kawałki jabłek.</li>
          <li><b>Złe:</b> chleb, jedzenie solone (np. słone orzeszki, solona słonina), przyprawione, zepsute lub spleśniałe.</li>
          <li>Dbaj o czystość karmnika.</li>
        </ul>
      `,
      flashcards: [
        ['Kręgowce', 'Mają kręgosłup, np. jeż, wróbel, żaba'],
        ['Bezkręgowce', 'Nie mają kręgosłupa, np. biedronka, ślimak, dżdżownica'],
        ['Ślady bytowania zwierząt', 'tropy, nory, gniazda, zgryzy, pióra'],
        ['Grzybnia', 'Plątanina nitek grzyba w ziemi – jego najważniejsza część'],
        ['Owocnik grzyba kapeluszowego', 'kapelusz i trzon'],
        ['Znaczenie grzybów w lesie', 'Rozkładają szczątki (liście, drewno) – powstaje żyzna gleba'],
        ['Muchomor sromotnikowy', 'Grzyb śmiertelnie trujący'],
        ['Żmija zygzakowata', 'Jedyny jadowity wąż w Polsce'],
        ['Sen zimowy (hibernacja)', 'Zimowanie w głębokim śnie w kryjówce, np. jeż'],
        ['Czego nie dawać ptakom zimą', 'chleba i jedzenia solonego, przyprawionego, zepsutego'],
      ],
      questions: [
        { id: 'uf95r2', q: 'Które zwierzę jest kręgowcem?', options: ['biedronka', 'dżdżownica', 'jeż', 'ślimak'], answer: 2, explain: 'Jeż ma kręgosłup, więc jest kręgowcem. Biedronka, dżdżownica i ślimak to bezkręgowce.' },
        { id: 'kj4hop', q: 'Które zwierzę jest bezkręgowcem?', options: ['wróbel', 'żaba', 'sarna', 'mrówka'], answer: 3, explain: 'Mrówka nie ma kręgosłupa – jest bezkręgowcem (owadem).' },
        { id: 'kdbgy5', q: 'Kopczyki ziemi na trawniku (kretowiska) to przykład…', options: ['śladów bytowania zwierzęcia', 'grzybni', 'gniazd ptaków', 'skał'], answer: 0, explain: 'Kretowiska usypuje kret, kopiąc korytarze pod ziemią. To ślad jego bytowania.' },
        { id: 'y0p6iw', q: 'Znalazłeś w lesie obgryzioną szyszkę. Jaki to ślad?', options: ['trop', 'zgryz (ślad jedzenia)', 'gniazdo', 'nora'], answer: 1, explain: 'Zgryzy to ślady jedzenia zostawione przez zwierzęta, np. obgryzione szyszki i nadgryzione orzechy.' },
        { id: 'ves3op', q: 'Jak nazywa się część grzyba ukryta w ziemi, złożona z cienkich nitek?', options: ['kapelusz', 'trzon', 'blaszki', 'grzybnia'], answer: 3, explain: 'Grzybnia to plątanina nitek w ziemi. Z niej wyrastają owocniki (kapelusz i trzon).' },
        {
          id: 'cfry19',
          q: 'Jak nazywa się część grzyba oznaczona znakiem zapytania?',
          svg: `<svg viewBox="0 0 300 220" role="img" aria-label="Grzyb kapeluszowy nad ziemią i nitki pod ziemią. Znak zapytania wskazuje część łączącą kapelusz z ziemią">
      <line x1="20" y1="160" x2="280" y2="160" class="ln"/>
      <path d="M60,90 Q60,20 140,20 Q220,20 220,90 Z" class="f2 s2 sw"/>
      <path d="M62,90 L218,90 L186,106 L94,106 Z" class="f5 s5"/>
      <g class="ln-thin">
        <line x1="80" y1="90" x2="100" y2="106"/><line x1="100" y1="90" x2="114" y2="106"/><line x1="120" y1="90" x2="128" y2="106"/>
        <line x1="160" y1="90" x2="152" y2="106"/><line x1="180" y1="90" x2="166" y2="106"/><line x1="200" y1="90" x2="180" y2="106"/>
      </g>
      <rect x="124" y="104" width="32" height="56" rx="8" class="f4 s4 sw"/>
      <g class="ln-thin">
        <path d="M130,162 Q100,180 60,176"/><path d="M140,162 Q130,195 90,205"/><path d="M150,162 Q170,195 210,205"/><path d="M152,162 Q190,178 240,172"/>
      </g>
      <line x1="240" y1="126" x2="162" y2="132" class="ln"/>
      <text x="252" y="132" class="tx-b t2" text-anchor="middle">?</text>
    </svg>`,
          options: ['trzon', 'kapelusz', 'grzybnia', 'blaszki'],
          answer: 0,
          explain: 'Trzon to „nóżka” grzyba – łączy kapelusz z ziemią. Kapelusz jest na górze, grzybnia w ziemi.',
        },
        { id: 'l9jwze', q: 'Jaką ważną rolę pełnią grzyby w lesie?', options: ['rozkładają opadłe liście i martwe drewno', 'wytwarzają pokarm dzięki światłu', 'zapylają kwiaty', 'odstraszają żmije'], answer: 0, explain: 'Grzyby rozkładają szczątki roślin i zwierząt – dzięki temu powstaje żyzna gleba.' },
        { id: 'y0drp0', q: 'Jak prawidłowo zbierać grzyby?', options: ['zbierać tylko grzyby, które na pewno znamy', 'zbierać wszystkie, a w domu sprawdzić, które są jadalne', 'wyrywać je razem z grzybnią', 'rozkopywać ziemię w poszukiwaniu młodych grzybów'], answer: 0, explain: 'Zbieramy tylko grzyby, które na pewno znamy. Ostrożnie wykręcamy je albo wycinamy, nie niszcząc grzybni.' },
        { id: 'ffgox1', q: 'Prawda czy fałsz?\nGrzyb trujący zawsze można rozpoznać po brzydkim zapachu albo gorzkim smaku.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Trujący grzyb może mieć przyjemny zapach i smak. Dlatego nigdy nie zbieramy i nie jemy nieznanych grzybów.' },
        { id: 'llu62o', q: 'Który grzyb jest śmiertelnie trujący?', options: ['pieczarka', 'muchomor sromotnikowy', 'prawdziwek'], answer: 1, explain: 'Muchomor sromotnikowy jest śmiertelnie trujący – nawet jeden grzyb może zabić człowieka.' },
        { id: 'lpivcf', q: 'Jedyny jadowity wąż żyjący w Polsce to…', options: ['zaskroniec', 'żmija zygzakowata', 'padalec'], answer: 1, explain: 'Żmija zygzakowata to jedyny jadowity wąż w Polsce. Zaskroniec nie jest jadowity, a padalec to beznoga jaszczurka.' },
        { id: 'qbf13i', q: 'Dlaczego nie wolno dotykać barszczu Sosnowskiego?', options: ['jego sok na skórze w słońcu powoduje oparzenia', 'ma bardzo ostre kolce', 'gryzie', 'jest bardzo gorący'], answer: 0, explain: 'Sok barszczu Sosnowskiego na skórze wystawionej na słońce powoduje groźne oparzenia.' },
        { id: 'w5dhn8', q: 'Prawda czy fałsz?\nKonwalia jest rośliną trującą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Konwalia jest trująca, także jej czerwone owoce. Nie zrywaj i nie jedz nieznanych roślin.' },
        { id: 'dxguf7', q: 'Jak jeż spędza zimę?', options: ['odlatuje do ciepłych krajów', 'zapada w sen zimowy', 'gromadzi zapasy w dziupli', 'zmienia kolor na biały'], answer: 1, explain: 'Jeż zimuje w kryjówce, np. w stercie liści, i zapada w sen zimowy (hibernację).' },
        { id: 'as6gii', q: 'Które zwierzę gromadzi zapasy na zimę?', options: ['bocian', 'jeż', 'wiewiórka'], answer: 2, explain: 'Wiewiórka chowa na zimę orzechy i żołędzie. Bocian odlatuje, a jeż zapada w sen zimowy.' },
        { id: 'il7g7b', q: 'Co NIE nadaje się do karmnika dla ptaków?', options: ['nasiona słonecznika', 'chleb', 'niesolona słonina', 'ziarna zbóż'], answer: 1, explain: 'Chleb szkodzi ptakom. Nie dajemy też jedzenia solonego, przyprawionego ani zepsutego.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'woda',
      name: 'Woda i jej stany skupienia',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 3 wym. 2 (stany skupienia – kształt i ściśliwość, model drobinowy), wym. 3 (stany skupienia wody i przemiany), wym. 4 (opady i osady atmosferyczne), wym. 5 (zmiany temperatury i stanu skupienia wody a organizmy i skały, pokrywa śnieżna); dz. 5 wym. 27 (schemat obiegu wody – w uproszczeniu). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Trzy stany skupienia</h3>
        <table>
          <tr><th>Stan</th><th>Woda jako…</th><th>Kształt</th><th>Czy da się ścisnąć?</th></tr>
          <tr><td>stały</td><td>lód, śnieg</td><td>ma własny kształt</td><td>prawie nie</td></tr>
          <tr><td>ciekły</td><td>woda</td><td>przyjmuje kształt naczynia</td><td>prawie nie</td></tr>
          <tr><td>gazowy</td><td>para wodna</td><td>wypełnia całe naczynie</td><td>tak, łatwo</td></tr>
        </table>
        <p><b>Model drobinowy:</b> wszystko jest zbudowane z bardzo małych drobin.</p>
        <ul>
          <li>w ciele <b>stałym</b> drobiny są ciasno ułożone i tylko drgają w miejscu,</li>
          <li>w <b>cieczy</b> są blisko siebie, ale mogą się przesuwać,</li>
          <li>w <b>gazie</b> są daleko od siebie i szybko poruszają się we wszystkie strony – dlatego gaz łatwo ścisnąć.</li>
        </ul>
        <div class="tip">💡 Para wodna jest <b>niewidoczna</b>. Biała „mgiełka” nad garnkiem to już malutkie kropelki wody, które powstały z pary.</div>
        <h3>Przemiany</h3>
        <table>
          <tr><th>Nazwa</th><th>Co się dzieje</th><th>Przykład</th></tr>
          <tr><td>topnienie</td><td>stały → ciekły</td><td>sopel topnieje w słońcu</td></tr>
          <tr><td>krzepnięcie (zamarzanie)</td><td>ciekły → stały</td><td>woda zamarza w zamrażarce</td></tr>
          <tr><td>parowanie</td><td>ciekły → gazowy</td><td>pranie schnie na sznurku</td></tr>
          <tr><td>skraplanie</td><td>gazowy → ciekły</td><td>lustro paruje po kąpieli</td></tr>
          <tr><td>resublimacja</td><td>gazowy → stały</td><td>szron na szybie</td></tr>
          <tr><td>sublimacja</td><td>stały → gazowy</td><td>śnieg znika w mroźny, słoneczny dzień, choć się nie topi</td></tr>
        </table>
        <ul>
          <li>Lód topnieje, a woda zamarza w temperaturze <b>0°C</b>.</li>
          <li><b>Wrzenie</b> to bardzo szybkie parowanie w całej objętości wody (widać bąble). Woda wrze w temperaturze około <b>100°C</b>.</li>
        </ul>
        <h3>Opady i osady</h3>
        <ul>
          <li><b>Opady</b> spadają z chmur: <b>deszcz</b> (ciekły), <b>śnieg</b> (stały), <b>grad</b> – kulki lodu (stały), zwykle podczas burzy.</li>
          <li><b>Osady</b> powstają na powierzchni przedmiotów i roślin przy ziemi: <b>rosa</b> – kropelki wody (ciekła), <b>szron</b> – lodowe kryształki, gdy jest mróz (stały), <b>szadź</b> – lód osadzony na gałęziach podczas mroźnej mgły (stały).</li>
        </ul>
        <h3>Zamarzająca woda zajmuje więcej miejsca</h3>
        <ul>
          <li>Woda, zamarzając, <b>zwiększa objętość</b>. Dlatego pełna butelka wody może pęknąć w zamrażarce.</li>
          <li>Woda w szczelinach skał zamarza, rozpycha je i powoli <b>kruszy skały</b>.</li>
          <li>Lód jest lżejszy od wody, więc <b>pływa</b>. Jezioro zamarza od góry, a ryby przeżywają zimę w wodzie pod lodem.</li>
          <li>Mróz może uszkodzić rośliny – woda w nich zamarza.</li>
          <li><b>Pokrywa śnieżna</b> zawiera dużo powietrza i działa jak kołderka – chroni glebę, rośliny i małe zwierzęta przed mrozem.</li>
        </ul>
        <h3>Obieg wody w przyrodzie</h3>
        <ol>
          <li>Słońce ogrzewa wodę – woda <b>paruje</b> z mórz, jezior, rzek, gleby i roślin.</li>
          <li>Para wodna unosi się, ochładza i <b>skrapla</b> – powstają chmury.</li>
          <li>Z chmur spadają <b>opady</b> (deszcz, śnieg).</li>
          <li>Woda <b>wsiąka</b> w glebę albo <b>spływa</b> rzekami do mórz – i wszystko zaczyna się od nowa.</li>
        </ol>
        <div class="tip">💡 Człowiek też wpływa na obieg wody. Gdy dużo terenu przykryje się betonem i asfaltem, mniej wody wsiąka w ziemię, a więcej szybko spływa.</div>
      `,
      flashcards: [
        ['Trzy stany skupienia wody', 'stały (lód), ciekły (woda), gazowy (para wodna)'],
        ['Topnienie', 'stały → ciekły (lód → woda)'],
        ['Krzepnięcie (zamarzanie)', 'ciekły → stały (woda → lód)'],
        ['Parowanie', 'ciekły → gazowy (np. schnące pranie)'],
        ['Skraplanie', 'gazowy → ciekły (np. zaparowane lustro)'],
        ['Resublimacja', 'gazowy → stały (np. szron)'],
        ['Wrzenie', 'Bardzo szybkie parowanie w całej objętości; woda wrze w ok. 100°C'],
        ['Opady atmosferyczne', 'Spadają z chmur: deszcz, śnieg, grad'],
        ['Osady atmosferyczne', 'Powstają na przedmiotach: rosa, szron, szadź'],
        ['Woda zamarzając…', '…zwiększa objętość (butelka w zamrażarce może pęknąć)'],
      ],
      questions: [
        { id: 'c4a9nb', q: 'W którym stanie skupienia woda ma własny kształt?', options: ['stałym', 'ciekłym', 'gazowym'], answer: 0, explain: 'Lód (stan stały) ma własny kształt. Woda przyjmuje kształt naczynia, a para wypełnia całe naczynie.' },
        { id: 'aink25', q: 'Co najłatwiej ścisnąć, np. w strzykawce z zatkanym końcem?', options: ['lód', 'wodę', 'gaz, np. powietrze'], answer: 2, explain: 'W gazie drobiny są daleko od siebie, więc można je zbliżyć – gaz łatwo ścisnąć.' },
        { id: '6dhgjz', q: 'Lód zmienia się w wodę. Jak nazywa się ta przemiana?', options: ['krzepnięcie', 'topnienie', 'skraplanie', 'parowanie'], answer: 1, explain: 'Topnienie to przejście ze stanu stałego w ciekły.' },
        { id: '7mgt0d', q: 'Po gorącej kąpieli lustro w łazience pokrywa się kropelkami. Jak nazywa się ta przemiana?', options: ['parowanie', 'topnienie', 'skraplanie', 'krzepnięcie'], answer: 2, explain: 'Para wodna z powietrza ochładza się na zimnym lustrze i skrapla – zamienia się w kropelki wody.' },
        { id: 'ctjb3m', q: 'Mokre pranie schnie na sznurku. Co dzieje się z wodą?', options: ['paruje', 'skrapla się', 'krzepnie', 'topnieje'], answer: 0, explain: 'Woda z prania paruje – zmienia się w niewidoczną parę wodną.' },
        { id: 'ef1xf1', q: 'Woda w zamrażarce zmienia się w lód. Jak nazywa się ta przemiana?', options: ['topnienie', 'parowanie', 'skraplanie', 'krzepnięcie'], answer: 3, explain: 'Krzepnięcie (zamarzanie) to przejście ze stanu ciekłego w stały.' },
        { id: '7cmd6k', q: 'W jakiej temperaturze lód topnieje?', options: ['0°C', '10°C', '37°C', '100°C'], answer: 0, explain: 'Lód topnieje, a woda zamarza w temperaturze 0°C.' },
        { id: 'z4ta0v', q: 'W jakiej temperaturze wrze woda w garnku?', options: ['około 0°C', 'około 37°C', 'około 50°C', 'około 100°C'], answer: 3, explain: 'Woda wrze w temperaturze około 100°C.' },
        { id: 'ii61ad', q: 'Które zjawisko jest osadem atmosferycznym?', options: ['deszcz', 'śnieg', 'grad', 'rosa'], answer: 3, explain: 'Rosa powstaje na trawie i przedmiotach – to osad. Deszcz, śnieg i grad spadają z chmur – to opady.' },
        { id: '1s9jmc', q: 'Czym jest grad?', options: ['kulkami lodu spadającymi z chmur', 'kropelkami wody na trawie o poranku', 'lodowymi kryształkami na szybie', 'mgłą przy ziemi'], answer: 0, explain: 'Grad to opad w postaci kulek lodu. Zwykle pada podczas burzy.' },
        { id: 'fau6qv', q: 'Dlaczego pełna, zakręcona butelka wody może pęknąć w zamrażarce?', options: ['bo woda, zamarzając, zwiększa objętość', 'bo woda, zamarzając, zmniejsza objętość', 'bo lód jest bardzo gorący', 'bo plastik topnieje w zimnie'], answer: 0, explain: 'Lód zajmuje więcej miejsca niż woda, z której powstał – rozpycha i rozrywa butelkę.' },
        { id: 'j0y41f', q: 'Prawda czy fałsz?\nLód pływa po wodzie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Lód jest lżejszy od wody, dlatego pływa, a jeziora zamarzają od góry.' },
        { id: 'zuho3i', q: 'Prawda czy fałsz?\nPara wodna jest biała i dobrze ją widać.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Para wodna jest niewidoczna. Biała „mgiełka” nad garnkiem to malutkie kropelki wody, które z niej powstały.' },
        { id: '7k2fsg', q: 'Jak pokrywa śnieżna pomaga roślinom zimą?', options: ['chroni je przed mrozem jak kołderka', 'sprawia, że szybciej rosną zimą', 'daje im światło', 'nie ma na nie żadnego wpływu'], answer: 0, explain: 'Śnieg zawiera dużo powietrza i nie przepuszcza mrozu do gleby – chroni rośliny i małe zwierzęta.' },
        { id: '3st88z', q: 'Rano przy mrozie na trawie pojawiły się lodowe kryształki. Para wodna od razu zamieniła się w lód. To…', options: ['rosa', 'szron', 'grad', 'deszcz'], answer: 1, explain: 'Szron to osad z lodowych kryształków. Powstaje, gdy para wodna od razu zamienia się w lód (resublimacja).' },
        {
          id: 'nan7mk',
          q: 'Spójrz na schemat obiegu wody. Co oznaczono znakiem zapytania?',
          svg: `<svg viewBox="0 0 380 210" role="img" aria-label="Schemat obiegu wody: Słońce, morze, strzałka w górę od morza do chmury oznaczona znakiem zapytania, deszcz nad górą i rzeka">
      <defs><marker id="a-k4p-q-woda" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="40" cy="36" r="20" class="f4 s4 sw"/>
      <path d="M10,170 Q60,160 110,170 Q160,180 170,170 L170,200 L10,200 Z" class="f1 s1"/>
      <text x="80" y="194" class="tx-s" text-anchor="middle">morze</text>
      <path d="M190,200 L280,110 L370,200 Z" class="f3 s3"/>
      <path d="M200,40 Q205,20 230,24 Q245,8 268,20 Q295,16 296,40 Q300,58 276,58 L214,58 Q194,58 200,40 Z" class="f1 s1 sw"/>
      <path d="M90,156 Q110,90 190,50" class="ln s2 sw" marker-end="url(#a-k4p-q-woda)"/>
      <text x="108" y="96" class="tx-b t2" text-anchor="middle">?</text>
      <g class="s1" stroke-width="3"><line x1="240" y1="66" x2="234" y2="86"/><line x1="258" y1="66" x2="252" y2="86"/><line x1="276" y1="66" x2="270" y2="86"/></g>
      <path d="M300,176 Q250,186 180,182" class="ln s1 sw" marker-end="url(#a-k4p-q-woda)"/>
    </svg>`,
          options: ['parowanie', 'skraplanie', 'opady', 'krzepnięcie'],
          answer: 0,
          explain: 'Słońce ogrzewa wodę w morzu, woda paruje, a para wodna unosi się w górę. Wysoko skrapla się i tworzy chmury.',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'rzeka-jezioro',
      name: 'Rzeka i jezioro',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 4 „Organizmy i ekosystemy”, wym. 6 (wody płynące i stojące, cechy środowiska wodnego, elementy systemu rzecznego – rzeka główna, dopływ, źródło, ujście), wym. 17 (funkcja rzeki i jej doliny, składniki krajobrazu stworzone przez rzekę); dz. 5 „Planeta Ziemia”, wym. 23 (geneza jezior – tylko jeziora polodowcowe i zbiorniki zaporowe; rola rzek i jezior w życiu ludzi). Definicje (źródło, ujście, dopływ, dorzecze, system rzeczny, rzeka główna, brzeg lewy i prawy, bieg górny, środkowy i dolny, zakole, starorzecze), źródło Wisły na Baraniej Górze, ujście Wisły do Zatoki Gdańskiej i Odry do Zalewu Szczecińskiego, dopływy Wisły i Odry – według ZPE („Nad brzegiem rzeki”, „System rzeczny”, zpe.gov.pl), sprawdzone 2.11.2026. Jeziora: większość jezior w Polsce ma pochodzenie polodowcowe, największe Śniardwy, najgłębsze Hańcza – materiały ZPE i PIG, sprawdzone 2.11.2026. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Wody płynące i stojące</h3>
        <table>
          <tr><th>Wody płynące</th><th>Wody stojące</th></tr>
          <tr><td>woda płynie w jednym kierunku – z wyżej położonych miejsc w niższe</td><td>woda się nie przemieszcza z miejsca na miejsce, wypełnia zagłębienie terenu</td></tr>
          <tr><td>strumień, potok, <b>rzeka</b>; <b>kanał</b> – koryto wykopane przez ludzi</td><td><b>jezioro</b>, <b>staw</b>, zbiornik zaporowy</td></tr>
        </table>
        <h3>Jak zbudowana jest rzeka?</h3>
        <ul>
          <li><b>Źródło</b> – miejsce, w którym rzeka bierze początek. Najwięcej źródeł jest w górach i na wyżynach. Wisła zaczyna się na stoku <b>Baraniej Góry</b> w Beskidzie Śląskim.</li>
          <li><b>Ujście</b> – miejsce, w którym rzeka wpada do innej rzeki, jeziora albo morza. Wisła uchodzi do Zatoki Gdańskiej (Morze Bałtyckie).</li>
          <li><b>Koryto</b> – zagłębienie, w którym płynie rzeka. <b>Nurt</b> – miejsce w korycie, gdzie woda płynie najszybciej.</li>
          <li><b>Dopływ</b> – rzeka, która wpada do większej rzeki.</li>
          <li><b>Rzeka główna</b> – wpada prosto do morza (albo jeziora) i nie jest niczyim dopływem, np. Wisła, Odra.</li>
          <li><b>System rzeczny</b> – rzeka główna razem ze wszystkimi dopływami. Na mapie wygląda jak <b>drzewo</b>: rzeka główna to pień, dopływy – gałęzie.</li>
          <li><b>Dorzecze</b> – cały obszar, z którego woda spływa do danej rzeki i jej dopływów.</li>
        </ul>
        <h3>Dopływ lewy czy prawy?</h3>
        <p>Stań <b>tyłem do źródła</b>, a <b>twarzą do ujścia</b> – czyli patrz tam, dokąd płynie woda. To, co masz po lewej ręce, to <b>lewy brzeg</b> i <b>lewe dopływy</b>, a po prawej – <b>prawy brzeg</b> i <b>prawe dopływy</b>.</p>
        <table>
          <tr><th>Rzeka</th><th>Prawe dopływy (przykłady)</th><th>Lewe dopływy (przykłady)</th></tr>
          <tr><td>Wisła</td><td>Dunajec, San, Narew</td><td>Pilica, Bzura</td></tr>
          <tr><td>Odra</td><td>Warta</td><td>Nysa Łużycka, Bóbr</td></tr>
        </table>
        <div class="tip">💡 Na mapie lewy brzeg <b>nie zawsze</b> jest po lewej stronie kartki. Liczy się kierunek, w którym płynie woda.</div>
        <h3>Bieg rzeki i dolina</h3>
        <table>
          <tr><th>Bieg</th><th>Jak płynie woda</th><th>Co tam widać</th></tr>
          <tr><td><b>górny</b></td><td>szybko</td><td>wąska, stroma dolina, wodospady, mało roślin</td></tr>
          <tr><td><b>środkowy</b></td><td>wolniej</td><td>rzeka podmywa brzegi i poszerza dolinę, powstają <b>zakola</b> i <b>starorzecza</b></td></tr>
          <tr><td><b>dolny</b></td><td>najwolniej</td><td>rzeka osadza piasek i muł, tworzą się piaszczyste łachy</td></tr>
        </table>
        <ul>
          <li><b>Dolina rzeczna</b> – obniżenie terenu, które wyżłobiła rzeka.</li>
          <li><b>Zakole</b> – łuk albo pętla koryta. Na zewnętrznym brzegu woda płynie szybciej i podmywa go, na wewnętrznym – osadza piasek.</li>
          <li><b>Starorzecze</b> – jezioro w dolinie rzeki: kawałek dawnego koryta (np. zakola), odcięty od rzeki.</li>
          <li><b>Powódź</b> – rzeka wylewa z koryta i zalewa okoliczne tereny. Płaskie dno doliny często zalewa woda – dlatego niebezpiecznie jest budować tam domy.</li>
        </ul>
        <h3>Życie w wodzie i nad wodą</h3>
        <ul>
          <li>Im głębiej, tym <b>mniej światła</b>.</li>
          <li>Temperatura wody zmienia się <b>wolniej</b> niż temperatura powietrza.</li>
          <li>Organizmy wodne oddychają <b>tlenem rozpuszczonym w wodzie</b>, np. ryby – za pomocą skrzeli.</li>
          <li>Rzeka i jej dolina to dom ryb, płazów, ptaków (np. czapli) i ssaków (np. bobra). Dolina rzeki to też „korytarz”, którym wędrują zwierzęta.</li>
        </ul>
        <h3>Jeziora</h3>
        <ul>
          <li><b>Jezioro</b> – naturalne zagłębienie terenu wypełnione wodą stojącą.</li>
          <li>Większość jezior w Polsce to <b>jeziora polodowcowe</b> – powstały w zagłębieniach po lądolodzie, który dawno temu przykrywał północ Polski. Dlatego najwięcej jezior jest na <b>pojezierzach</b> na północy kraju.</li>
          <li>Największe jezioro Polski – <b>Śniardwy</b>. Najgłębsze – <b>Hańcza</b>.</li>
          <li><b>Zbiornik zaporowy</b> (sztuczne jezioro) – powstaje, gdy ludzie zbudują na rzece <b>zaporę</b>, np. Jezioro Solińskie na Sanie.</li>
          <li><b>Staw</b> – zwykle niewielki i płytki zbiornik zrobiony przez człowieka, np. do hodowli ryb. (Uwaga: w górach stawami nazywa się też naturalne jeziora, np. Czarny Staw).</li>
        </ul>
        <p><b>Po co ludziom rzeki i jeziora?</b> Dają wodę (do picia, dla rolnictwa i fabryk), ryby, prąd z elektrowni wodnych, służą do transportu i wypoczynku.</p>
      `,
      flashcards: [
        ['Wody płynące – przykłady', 'strumień, potok, rzeka, kanał'],
        ['Wody stojące – przykłady', 'jezioro, staw, zbiornik zaporowy'],
        ['Źródło rzeki', 'Miejsce, w którym rzeka bierze początek'],
        ['Ujście rzeki', 'Miejsce, w którym rzeka wpada do innej rzeki, jeziora lub morza'],
        ['Dopływ', 'Rzeka, która wpada do większej rzeki'],
        ['Rzeka główna', 'Rzeka, która wpada do morza (lub jeziora) i nie jest dopływem, np. Wisła, Odra'],
        ['System rzeczny', 'Rzeka główna razem ze wszystkimi dopływami'],
        ['Dorzecze', 'Obszar, z którego woda spływa do danej rzeki i jej dopływów'],
        ['Jak rozpoznać lewy i prawy brzeg?', 'Stań twarzą do ujścia (tam, dokąd płynie woda): lewa ręka – lewy brzeg'],
        ['Źródło i ujście Wisły', 'źródło – Barania Góra w Beskidzie Śląskim; ujście – Zatoka Gdańska (Bałtyk)'],
        ['Zakole', 'Łuk lub pętla koryta rzeki'],
        ['Starorzecze', 'Jezioro w dolinie rzeki – odcięty kawałek dawnego koryta'],
        ['Jeziora polodowcowe', 'Powstały w zagłębieniach po lądolodzie; najwięcej ich na pojezierzach na północy Polski'],
        ['Największe i najgłębsze jezioro Polski', 'największe – Śniardwy; najgłębsze – Hańcza'],
        ['Zbiornik zaporowy', 'Sztuczne jezioro powstałe po zbudowaniu zapory na rzece, np. Jezioro Solińskie'],
      ],
      questions: [
        { id: 'gc9oj9', q: 'Która z tych wód jest wodą płynącą?', options: ['potok', 'jezioro', 'staw', 'zbiornik zaporowy'], answer: 0, explain: 'Potok, strumień, rzeka i kanał to wody płynące. Jezioro, staw i zbiornik zaporowy – stojące.' },
        { id: '3mtdbh', q: 'Która z tych wód jest wodą stojącą?', options: ['jezioro', 'rzeka', 'strumień', 'kanał'], answer: 0, explain: 'Woda w jeziorze wypełnia zagłębienie terenu i nie płynie z miejsca na miejsce.' },
        { id: 'kevhmp', q: 'Jak nazywa się miejsce, w którym rzeka bierze początek?', options: ['źródło', 'ujście', 'zakole', 'dopływ'], answer: 0, explain: 'Rzeka zaczyna się w źródle, a kończy w ujściu.' },
        { id: '439mzs', q: 'Ujście rzeki to miejsce, w którym…', options: ['rzeka wpada do innej rzeki, jeziora albo morza', 'rzeka bierze początek', 'rzeka płynie najszybciej', 'rzeka zakręca'], answer: 0, explain: 'W ujściu rzeka kończy swój bieg – wpada do innej rzeki, jeziora albo morza.' },
        { id: '3bkps3', q: 'Gdzie zaczyna się Wisła?', options: ['na stoku Baraniej Góry w Beskidzie Śląskim', 'w Tatrach pod Rysami', 'na Żuławach Wiślanych', 'w jeziorze Śniardwy'], answer: 0, explain: 'Wisła wypływa na stoku Baraniej Góry w Beskidzie Śląskim i uchodzi do Zatoki Gdańskiej.' },
        { id: 'ew7xa3', q: 'Dopływ to…', options: ['rzeka, która wpada do większej rzeki', 'miejsce, w którym rzeka się zaczyna', 'sztuczne jezioro', 'najszybsze miejsce w korycie'], answer: 0, explain: 'Dopływ to rzeka wpadająca do większej rzeki, np. San jest dopływem Wisły.' },
        { id: 'j7zrbn', q: 'Rzeka główna razem ze wszystkimi dopływami to…', options: ['system rzeczny', 'dorzecze', 'starorzecze', 'zakole'], answer: 0, explain: 'System rzeczny to rzeka główna i jej dopływy. Na mapie wygląda jak drzewo. Dorzecze to obszar, z którego woda do nich spływa.' },
        { id: '0qyce3', q: 'Jak ustalić, który brzeg rzeki jest lewy?', options: ['stanąć twarzą do ujścia – lewy brzeg jest po lewej ręce', 'stanąć twarzą do źródła – lewy brzeg jest po lewej ręce', 'spojrzeć na mapę – lewy brzeg jest zawsze po lewej stronie kartki', 'lewy brzeg to zawsze brzeg zachodni'], answer: 0, explain: 'Patrzysz tam, dokąd płynie woda (twarzą do ujścia). Wtedy po lewej masz lewy brzeg, a po prawej – prawy.' },
        {
          id: '9f3mgc',
          q: 'Rzeka płynie w stronę wskazaną strzałką. Jakim dopływem jest rzeka A?',
          svg: `<svg viewBox="0 0 360 180" role="img" aria-label="Rzeka główna płynie od lewej do prawej, strzałka kierunku w prawo. Z góry wpada do niej rzeka A.">
      <defs><marker id="a-k4pr-q-rz" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M10,120 C80,100 120,140 190,118 C250,100 290,130 350,112" class="ln s1 sw"/>
      <path d="M150,20 C170,50 160,80 190,116" class="ln s1"/>
      <text x="140" y="20" class="tx-b t1" text-anchor="middle">A</text>
      <text x="40" y="158" class="tx-s">źródło</text>
      <text x="300" y="158" class="tx-s">ujście</text>
      <line x1="230" y1="72" x2="300" y2="72" class="ln s2 sw" marker-end="url(#a-k4pr-q-rz)"/>
      <text x="265" y="62" class="tx-s" text-anchor="middle">kierunek</text>
    </svg>`,
          options: ['lewym', 'prawym'],
          answer: 0,
          explain: 'Stań twarzą do ujścia – patrzysz w prawo (w stronę strzałki). Wtedy twoja lewa ręka wskazuje górę rysunku, a stamtąd wpada rzeka A. To lewy dopływ.',
        },
        { id: 'up04ww', q: 'Który z tych dopływów Wisły jest dopływem prawym?', options: ['San', 'Pilica', 'Bzura'], answer: 0, explain: 'San, Dunajec i Narew to prawe dopływy Wisły. Pilica i Bzura – lewe.' },
        { id: 'djmvy4', q: 'W którym biegu rzeka płynie najszybciej i tworzy wodospady?', options: ['w górnym', 'w środkowym', 'w dolnym'], answer: 0, explain: 'W górnym biegu, zwykle w górach, woda płynie szybko, żłobi wąską i stromą dolinę i tworzy wodospady.' },
        { id: 'wky55k', q: 'Jak nazywa się łuk albo pętla koryta rzeki?', options: ['zakole', 'źródło', 'ujście', 'nurt'], answer: 0, explain: 'Zakole to łuk lub pętla koryta. Na zewnętrznym brzegu woda podmywa brzeg, na wewnętrznym osadza piasek.' },
        { id: 'mk4vfg', q: 'Starorzecze to…', options: ['jezioro w dolinie rzeki – odcięty kawałek dawnego koryta', 'najstarsza rzeka w Polsce', 'źródło rzeki w górach', 'sztuczne jezioro za zaporą'], answer: 0, explain: 'Starorzecze powstaje, gdy kawałek koryta (np. zakole) zostaje odcięty od rzeki.' },
        { id: '0wvixp', q: 'Jak powstała większość jezior w Polsce?', options: ['w zagłębieniach po lądolodzie – to jeziora polodowcowe', 'po zbudowaniu zapór na rzekach', 'w kraterach wulkanów', 'wykopali je ludzie'], answer: 0, explain: 'Dawno temu północ Polski przykrywał lądolód. W zagłębieniach, które po nim zostały, powstały jeziora – najwięcej ich na pojezierzach.' },
        { id: 'k89h7n', q: 'Które jezioro jest największe w Polsce?', options: ['Śniardwy', 'Hańcza', 'Morskie Oko', 'Jezioro Solińskie'], answer: 0, explain: 'Największe jezioro w Polsce to Śniardwy. Najgłębsze jest Hańcza.' },
        { id: 'fj6rz2', q: 'Jak powstaje zbiornik zaporowy?', options: ['ludzie budują na rzece zaporę i woda się za nią spiętrza', 'lądolód zostawia zagłębienie', 'rzeka odcina swoje zakole', 'morze zalewa ląd'], answer: 0, explain: 'Zbiornik zaporowy to sztuczne jezioro za zaporą, np. Jezioro Solińskie na Sanie.' },
        { id: 'jkroml', q: 'Prawda czy fałsz?\nIm głębiej w jeziorze, tym więcej światła.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Woda pochłania światło – im głębiej, tym ciemniej. Dlatego rośliny wodne rosną głównie przy brzegu i blisko powierzchni.' },
        { id: 'eok8kf', q: 'Czym oddychają ryby?', options: ['tlenem rozpuszczonym w wodzie, za pomocą skrzeli', 'powietrzem, które łapią nad wodą płucami', 'nie oddychają wcale', 'dwutlenkiem węgla z powietrza'], answer: 0, explain: 'Ryby oddychają skrzelami – pobierają tlen rozpuszczony w wodzie.' },
        { id: 'qrxg9w', q: 'Dlaczego niebezpiecznie jest budować domy na płaskim dnie doliny rzeki?', options: ['bo podczas powodzi rzeka może zalać ten teren', 'bo tam jest zawsze susza', 'bo tam nie dociera światło', 'bo tam nie ma gleby'], answer: 0, explain: 'Gdy w korycie jest za dużo wody, rzeka wylewa i zalewa dno doliny – to powódź.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'powietrze',
      name: 'Powietrze i jego składniki',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 2 wym. 9 (właściwości powietrza, tlenu i dwutlenku węgla: stan skupienia, barwa, rozpuszczalność w wodzie, zapach, palność; skład powietrza), wym. 10 (jakość powietrza, wpływ na zdrowie, zanieczyszczenie powietrza a zmiana klimatu – moduł klimatyczny); dz. 5 wym. 14 (przyczyny smogu, działania ograniczające – moduł klimatyczny). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Powietrze – niewidzialne, ale jest</h3>
        <p>Powietrza nie widać, ale czujesz je, gdy wieje wiatr. Powietrze <b>zajmuje miejsce</b> (pusta butelka jest pełna powietrza) i ma <b>masę</b> (napompowana piłka jest ciut cięższa niż pusta). Powietrze to <b>mieszanina gazów</b>.</p>
        <h3>Z czego składa się powietrze?</h3>
        <table>
          <tr><th>Gaz</th><th>Ile go jest (w przybliżeniu)</th></tr>
          <tr><td>azot</td><td>78 części na 100</td></tr>
          <tr><td>tlen</td><td>21 części na 100</td></tr>
          <tr><td>inne gazy: argon, dwutlenek węgla i inne</td><td>około 1 części na 100 (dwutlenku węgla – tylko ok. 4 części na 10 000)</td></tr>
        </table>
        <p>W powietrzu jest też <b>para wodna</b> – raz więcej, raz mniej – oraz <b>pyły</b>.</p>
        <div class="tip">💡 Najwięcej w powietrzu jest azotu, a nie tlenu.</div>
        <h3>Tlen i dwutlenek węgla</h3>
        <table>
          <tr><th></th><th>Tlen</th><th>Dwutlenek węgla</th></tr>
          <tr><td>stan skupienia, barwa, zapach</td><td>gaz, bezbarwny, bez zapachu</td><td>gaz, bezbarwny, bez zapachu</td></tr>
          <tr><td>palenie</td><td><b>podtrzymuje palenie</b> – tląca się drewniana drzazga w tlenie zapala się płomieniem</td><td><b>nie podtrzymuje palenia</b> – płomień w nim gaśnie; używa się go w niektórych gaśnicach</td></tr>
          <tr><td>w wodzie</td><td>rozpuszcza się słabo, ale wystarcza dla ryb</td><td>rozpuszcza się – są w nim „bąbelki” w wodzie gazowanej</td></tr>
          <tr><td>dla organizmów</td><td>potrzebny do <b>oddychania</b></td><td>wydychamy go; rośliny pobierają go do <b>fotosyntezy</b></td></tr>
        </table>
        <p>Dwutlenek węgla jest <b>cięższy od powietrza</b> – zbiera się przy ziemi. Wykrywamy go <b>wodą wapienną</b>: gdy przez słomkę wdmuchujesz do niej wydychane powietrze, woda wapienna mętnieje.</p>
        <p>Azot nie podtrzymuje palenia i nie ma barwy ani zapachu.</p>
        <h3>Zanieczyszczenia i smog</h3>
        <p>Powietrze zanieczyszczają przede wszystkim <b>dymy i spaliny</b>: z pieców opalanych węglem lub drewnem (zwłaszcza gdy ktoś pali w nich śmieci), z samochodów, z fabryk i elektrowni. W powietrzu unoszą się wtedy drobne <b>pyły</b> i szkodliwe gazy.</p>
        <p><b>Smog</b> (od angielskich słów „smoke” – dym i „fog” – mgła) to zanieczyszczone powietrze zalegające nad miastem lub wsią. Tworzy się najczęściej, gdy:</p>
        <ul>
          <li>do powietrza trafia dużo dymu i spalin (np. zimą, w sezonie grzewczym),</li>
          <li>nie ma wiatru, który rozwiałby zanieczyszczenia,</li>
          <li>miejscowość leży w dolinie lub kotlinie.</li>
        </ul>
        <p><b>Skutki dla zdrowia:</b> kaszel, ból głowy, łzawienie oczu, trudności z oddychaniem; po latach – choroby płuc i serca. Jakość powietrza możesz sprawdzić w aplikacji lub na stronie z pomiarami. Gdy jest zła, lepiej ograniczyć wysiłek na dworze.</p>
        <h3>Powietrze a klimat</h3>
        <p>Spalanie węgla, ropy i gazu (w piecach, elektrowniach, samochodach) dodaje do powietrza <b>dwutlenek węgla</b>. Im więcej go w powietrzu, tym mocniej Ziemia się ogrzewa – to jedna z przyczyn <b>zmiany klimatu</b>.</p>
        <h3>Co możemy zrobić?</h3>
        <ul>
          <li>nigdy nie palić śmieci,</li>
          <li>chodzić pieszo, jeździć rowerem lub komunikacją miejską zamiast samochodem,</li>
          <li>oszczędzać prąd i ciepło (gasić światło, nie przegrzewać mieszkań),</li>
          <li>sadzić drzewa i dbać o zieleń – rośliny zatrzymują pyły i pobierają dwutlenek węgla.</li>
        </ul>
      `,
      flashcards: [
        ['Powietrze to…', 'mieszanina gazów (głównie azotu i tlenu)'],
        ['Najwięcej w powietrzu jest…', 'azotu – ok. 78 części na 100'],
        ['Ile tlenu jest w powietrzu?', 'ok. 21 części na 100'],
        ['Tlen a palenie', 'Podtrzymuje palenie – tląca się drzazga się zapala'],
        ['Dwutlenek węgla a palenie', 'Nie podtrzymuje palenia – płomień gaśnie'],
        ['Jak wykryć dwutlenek węgla?', 'Woda wapienna mętnieje'],
        ['Bąbelki w wodzie gazowanej', 'dwutlenek węgla rozpuszczony w wodzie'],
        ['Smog', 'Zanieczyszczone powietrze (dym + mgła) zalegające nad miejscowością'],
        ['Kiedy łatwo o smog?', 'Dużo dymu i spalin, brak wiatru, zwykle zimą'],
        ['Jak ograniczyć zanieczyszczenie powietrza?', 'Nie palić śmieci, wybierać rower i komunikację miejską, oszczędzać energię, sadzić drzewa'],
      ],
      questions: [
        { id: 'dauwli', q: 'Którego gazu jest w powietrzu najwięcej?', options: ['azotu', 'tlenu', 'dwutlenku węgla', 'pary wodnej'], answer: 0, explain: 'Azot to ok. 78 części na 100 części powietrza, tlen – ok. 21.' },
        { id: '20pzz6', q: 'Ile mniej więcej tlenu jest w powietrzu?', options: ['ok. 21 części na 100', 'ok. 78 części na 100', 'ok. 50 części na 100', 'ok. 1 części na 100'], answer: 0, explain: 'Tlen stanowi ok. 21 części na 100 części powietrza. 78 części to azot.' },
        { id: 'jvjvjq', q: 'Do słoika z tlenem włożono tlącą się drzazgę. Co się stanie?', options: ['drzazga zapali się płomieniem', 'drzazga zgaśnie', 'nic się nie zmieni', 'słoik napełni się wodą'], answer: 0, explain: 'Tlen podtrzymuje palenie – tląca się drzazga w czystym tlenie rozbłyska płomieniem.' },
        { id: 'x97ugp', q: 'Który gaz gasi płomień i jest używany w niektórych gaśnicach?', options: ['dwutlenek węgla', 'tlen', 'para wodna'], answer: 0, explain: 'Dwutlenek węgla nie podtrzymuje palenia – płomień w nim gaśnie.' },
        { id: 'moq9fk', q: 'Jak można wykryć dwutlenek węgla?', options: ['woda wapienna mętnieje', 'gaz ma zapach zgniłych jaj', 'gaz ma niebieski kolor', 'gaz świeci w ciemności'], answer: 0, explain: 'Dwutlenek węgla jest bezbarwny i bez zapachu. Rozpoznajemy go po tym, że woda wapienna mętnieje.' },
        { id: '6lp5vc', q: 'Co to są bąbelki w wodzie gazowanej?', options: ['dwutlenek węgla', 'tlen', 'azot', 'para wodna'], answer: 0, explain: 'Do wody gazowanej dodaje się dwutlenek węgla – rozpuszcza się w wodzie, a po otwarciu butelki uwalnia się w postaci bąbelków.' },
        { id: 'dnohax', q: 'Jaki gaz pobierają rośliny z powietrza do fotosyntezy?', options: ['dwutlenek węgla', 'tlen', 'azot', 'argon'], answer: 0, explain: 'Rośliny pobierają dwutlenek węgla, a podczas fotosyntezy wydzielają tlen.' },
        { id: 's377jb', q: 'Prawda czy fałsz?\nTlen ma niebieską barwę i ostry zapach.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Tlen jest bezbarwny i nie ma zapachu – tak jak całe czyste powietrze.' },
        { id: 'lpe9q0', q: 'Prawda czy fałsz?\nPowietrze zajmuje miejsce i ma masę.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '„Pusta” butelka jest pełna powietrza, a napompowana piłka waży trochę więcej niż pusta.' },
        { id: '1vzoop', q: 'Dlaczego dwutlenek węgla zbiera się przy ziemi, np. na dnie piwnicy?', options: ['bo jest cięższy od powietrza', 'bo jest lżejszy od powietrza', 'bo jest ciekły', 'bo przyciąga go glina'], answer: 0, explain: 'Dwutlenek węgla jest cięższy od powietrza, więc opada w dół.' },
        { id: 'u1k2gb', q: 'Słowo „smog” powstało z połączenia angielskich słów oznaczających…', options: ['dym i mgłę', 'deszcz i śnieg', 'wiatr i burzę', 'słońce i chmury'], answer: 0, explain: 'Smoke – dym, fog – mgła. Smog to zanieczyszczone powietrze zalegające nad miejscowością.' },
        { id: 'o22awm', q: 'Kiedy najłatwiej o smog?', options: ['zimą, przy bezwietrznej pogodzie, gdy pracuje dużo pieców', 'latem, podczas silnego wiatru', 'podczas ulewnego deszczu', 'gdy wieje silny wiatr od morza'], answer: 0, explain: 'Zimą do powietrza trafia dużo dymu z pieców, a gdy nie ma wiatru, zanieczyszczenia nie są rozwiewane.' },
        { id: '9yfj16', q: 'Co NIE powoduje zanieczyszczenia powietrza?', options: ['jazda na rowerze', 'palenie śmieci w piecu', 'spaliny z samochodów', 'dym z kominów fabryk'], answer: 0, explain: 'Rower nie wytwarza spalin. Palenie śmieci, spaliny i dymy zanieczyszczają powietrze.' },
        { id: 'rx7tko', q: 'Jakie mogą być skutki oddychania zanieczyszczonym powietrzem?', options: ['kaszel i trudności z oddychaniem', 'lepszy wzrok', 'szybszy wzrost włosów', 'nie ma żadnych skutków'], answer: 0, explain: 'Pyły i szkodliwe gazy podrażniają drogi oddechowe. Po latach mogą prowadzić do chorób płuc i serca.' },
        { id: '4zameo', q: 'W aplikacji sprawdziłeś, że jakość powietrza jest dziś bardzo zła. Co warto zrobić?', options: ['ograniczyć wysiłek na dworze', 'pobiegać dłużej niż zwykle', 'otworzyć okna na cały dzień', 'rozpalić ognisko'], answer: 0, explain: 'Podczas wysiłku oddychamy szybciej i wciągamy więcej zanieczyszczeń. Lepiej przenieść ruch do domu lub sali.' },
        { id: 'urkwez', q: 'Jak spalanie węgla, ropy i gazu wpływa na klimat?', options: ['dodaje do powietrza dwutlenek węgla, przez co Ziemia mocniej się ogrzewa', 'zwiększa ilość tlenu w powietrzu', 'ochładza Ziemię', 'nie ma żadnego wpływu'], answer: 0, explain: 'Przy spalaniu powstaje dwutlenek węgla. Im więcej go w powietrzu, tym mocniej ogrzewa się Ziemia – to jedna z przyczyn zmiany klimatu.' },
        { id: 'i0i6ed', q: 'Które działanie pomaga dbać o czyste powietrze?', options: ['sadzenie drzew', 'palenie liści i śmieci w ogródku', 'jeżdżenie samochodem na krótkie odległości', 'zostawianie włączonego światła'], answer: 0, explain: 'Rośliny zatrzymują pyły i pobierają dwutlenek węgla. Pozostałe działania zanieczyszczają powietrze albo marnują energię.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'pogoda',
      name: 'Pogoda i jej składniki',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 5 wym. 10 (pomiar składników pogody, przyrządy i jednostki), wym. 11 (odczytywanie danych z mapy pogody), wym. 13 (przewidywanie burzy, zasady bezpieczeństwa). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Co to jest pogoda?</h3>
        <p><b>Pogoda</b> to stan powietrza w danym miejscu i czasie: czy jest ciepło, czy pada, czy wieje. Pogoda często się zmienia – nawet w ciągu kilku godzin.</p>
        <h3>Składniki pogody i przyrządy</h3>
        <table>
          <tr><th>Składnik</th><th>Przyrząd</th><th>Jednostka</th></tr>
          <tr><td>temperatura powietrza</td><td>termometr</td><td>°C (stopnie Celsjusza)</td></tr>
          <tr><td>opady (ile spadło deszczu)</td><td>deszczomierz</td><td>mm (milimetry)</td></tr>
          <tr><td>kierunek wiatru</td><td>wiatrowskaz</td><td>nazwa kierunku, np. wiatr zachodni</td></tr>
          <tr><td>prędkość wiatru</td><td>wiatromierz</td><td>m/s albo km/h</td></tr>
          <tr><td>ciśnienie atmosferyczne (jak mocno powietrze naciska)</td><td>barometr</td><td>hPa (hektopaskale)</td></tr>
          <tr><td>zachmurzenie (jaka część nieba jest zakryta chmurami)</td><td>oceniamy, patrząc na niebo</td><td>np. bezchmurnie, małe, duże, całkowite</td></tr>
        </table>
        <ul>
          <li>Temperaturę powietrza mierzymy <b>w cieniu</b>, nie w pełnym słońcu.</li>
          <li>Temperatura poniżej 0°C to <b>mróz</b>. Zapis −5°C czytamy „minus pięć stopni”, czyli 5 stopni poniżej zera.</li>
        </ul>
        <h3>Kierunek wiatru</h3>
        <p>Wiatr nazywamy od kierunku, <b>z którego wieje</b>. Wiatr <b>północny</b> wieje <b>z północy</b> na południe. Wiatr zachodni wieje z zachodu na wschód.</p>
        <div class="tip">💡 Na mapie pogody strzałka pokazuje, <b>dokąd</b> wieje wiatr. Strzałka skierowana na wschód (w prawo) to wiatr <b>zachodni</b>.</div>
        <h3>Mapa pogody</h3>
        <table>
          <tr><th>Znak</th><th>Znaczenie</th></tr>
          <tr><td>☀️</td><td>słonecznie, bezchmurnie</td></tr>
          <tr><td>⛅</td><td>niewielkie zachmurzenie</td></tr>
          <tr><td>☁️</td><td>pochmurno</td></tr>
          <tr><td>🌧️</td><td>deszcz</td></tr>
          <tr><td>❄️</td><td>śnieg</td></tr>
          <tr><td>⛈️</td><td>burza</td></tr>
          <tr><td>liczba, np. 12°</td><td>temperatura powietrza</td></tr>
        </table>
        <h3>Burza</h3>
        <p>Podczas burzy powstają <b>błyskawice</b> – ogromne iskry elektryczne. Błyskawica, która uderza w ziemię, to <b>piorun</b>. <b>Grzmot</b> to huk, który wtedy słychać.</p>
        <p><b>Oznaki zbliżającej się burzy:</b> szybko rosnące, wysokie, ciemne chmury, robi się ciemno, wiatr się wzmaga, w oddali słychać grzmoty.</p>
        <p><b>Jak się zachować:</b></p>
        <ul>
          <li>Schowaj się w <b>budynku</b> – to najbezpieczniejsze miejsce.</li>
          <li><b>Nie stój pod samotnym drzewem</b> – piorun często uderza w wysokie obiekty.</li>
          <li><b>Zejdź z otwartej przestrzeni</b> (łąka, boisko, pole) i ze wzniesień.</li>
          <li><b>Wyjdź z wody</b> – z jeziora, rzeki, basenu.</li>
        </ul>
        <div class="tip">💡 Jeśli słyszysz grzmot, burza jest na tyle blisko, że piorun może uderzyć także w twojej okolicy. Nie czekaj – od razu szukaj schronienia.</div>
      `,
      flashcards: [
        ['Składniki pogody', 'temperatura, opady, zachmurzenie, wiatr, ciśnienie atmosferyczne'],
        ['Termometr', 'Mierzy temperaturę – w °C'],
        ['Deszczomierz', 'Mierzy ilość opadów – w mm'],
        ['Wiatromierz', 'Mierzy prędkość wiatru – w m/s lub km/h'],
        ['Wiatrowskaz', 'Pokazuje kierunek wiatru'],
        ['Barometr', 'Mierzy ciśnienie atmosferyczne – w hPa'],
        ['Wiatr północny', 'Wieje z północy (na południe)'],
        ['Zachmurzenie', 'Jaka część nieba jest zakryta chmurami'],
        ['−3°C', 'Trzy stopnie poniżej zera – mróz'],
        ['Burza, a ty jesteś na łące', 'Zejdź z otwartej przestrzeni, nie stój pod samotnym drzewem, szukaj budynku'],
      ],
      questions: [
        { id: 'j2ygyr', q: 'Którym przyrządem mierzymy temperaturę powietrza?', options: ['barometrem', 'termometrem', 'deszczomierzem', 'wiatromierzem'], answer: 1, explain: 'Termometr mierzy temperaturę – w stopniach Celsjusza (°C).' },
        { id: 'mwvj0a', q: 'Co mierzy deszczomierz?', options: ['ilość opadów', 'prędkość wiatru', 'ciśnienie', 'temperaturę'], answer: 0, explain: 'Deszczomierz pokazuje, ile spadło deszczu – w milimetrach (mm).' },
        { id: '89b775', q: 'Barometr mierzy…', options: ['kierunek wiatru', 'ciśnienie atmosferyczne', 'zachmurzenie', 'ilość opadów'], answer: 1, explain: 'Barometr mierzy ciśnienie atmosferyczne – w hektopaskalach (hPa).' },
        { id: '4lblop', q: 'W jakich jednostkach podajemy ciśnienie atmosferyczne?', options: ['°C', 'mm', 'hPa', 'km/h'], answer: 2, explain: 'Ciśnienie podajemy w hektopaskalach (hPa). °C – temperatura, mm – opady, km/h – prędkość wiatru.' },
        { id: '0bk6f6', q: 'W jakich jednostkach podajemy prędkość wiatru?', options: ['w m/s albo km/h', 'w °C', 'w hPa', 'w mm'], answer: 0, explain: 'Prędkość wiatru podajemy w metrach na sekundę (m/s) albo kilometrach na godzinę (km/h).' },
        { id: '9dxefd', q: 'Wiatr zachodni wieje…', options: ['z zachodu', 'na zachód', 'z północy', 'z południa'], answer: 0, explain: 'Wiatr nazywamy od kierunku, z którego wieje. Wiatr zachodni wieje z zachodu na wschód.' },
        {
          id: 'y005ia',
          q: 'Na mapie pogody narysowano strzałkę wiatru. Jaki to wiatr?',
          svg: `<svg viewBox="0 0 320 170" role="img" aria-label="Mapa z oznaczeniem północy u góry i dużą strzałką wiatru skierowaną w prawo, czyli na wschód">
      <rect x="10" y="10" width="300" height="150" rx="10" class="f3 s3"/>
      <line x1="270" y1="70" x2="270" y2="36" class="ln sw"/>
      <path d="M262,46 L270,30 L278,46 z" class="t2"/>
      <text x="270" y="92" class="tx-b" text-anchor="middle">N</text>
      <path d="M50,105 L170,105 L170,88 L210,115 L170,142 L170,125 L50,125 Z" class="f1 s1 sw"/>
      <text x="110" y="76" class="tx-s" text-anchor="middle">wiatr</text>
    </svg>`,
          options: ['zachodni', 'wschodni', 'północny', 'południowy'],
          answer: 0,
          explain: 'Strzałka pokazuje, dokąd wieje wiatr – tu na wschód (w prawo). Wiatr wieje więc z zachodu, czyli jest to wiatr zachodni.',
        },
        {
          id: 'o0tvvs',
          q: 'Jaką temperaturę pokazuje termometr?',
          svg: `<svg viewBox="0 0 300 240" role="img" aria-label="Termometr ze skalą od minus 10 do 10 stopni Celsjusza. Słupek cieczy kończy się jedną kreskę powyżej minus 5">
      <rect x="136" y="20" width="28" height="182" rx="14" class="bg ln"/>
      <rect x="143" y="142" width="14" height="70" class="t2"/>
      <circle cx="150" cy="212" r="18" class="t2"/>
      <g class="ln-thin">
        <line x1="164" y1="38" x2="172" y2="38"/><line x1="164" y1="46" x2="172" y2="46"/><line x1="164" y1="54" x2="172" y2="54"/><line x1="164" y1="62" x2="172" y2="62"/>
        <line x1="164" y1="78" x2="172" y2="78"/><line x1="164" y1="86" x2="172" y2="86"/><line x1="164" y1="94" x2="172" y2="94"/><line x1="164" y1="102" x2="172" y2="102"/>
        <line x1="164" y1="118" x2="172" y2="118"/><line x1="164" y1="126" x2="172" y2="126"/><line x1="164" y1="134" x2="172" y2="134"/><line x1="164" y1="142" x2="172" y2="142"/>
        <line x1="164" y1="158" x2="172" y2="158"/><line x1="164" y1="166" x2="172" y2="166"/><line x1="164" y1="174" x2="172" y2="174"/><line x1="164" y1="182" x2="172" y2="182"/>
      </g>
      <g class="ln">
        <line x1="164" y1="30" x2="180" y2="30"/><line x1="164" y1="70" x2="180" y2="70"/><line x1="164" y1="110" x2="180" y2="110"/><line x1="164" y1="150" x2="180" y2="150"/><line x1="164" y1="190" x2="180" y2="190"/>
      </g>
      <text x="188" y="36" class="tx">10</text>
      <text x="188" y="76" class="tx">5</text>
      <text x="188" y="116" class="tx-b">0</text>
      <text x="188" y="156" class="tx">−5</text>
      <text x="188" y="196" class="tx">−10</text>
      <text x="110" y="36" class="tx-b" text-anchor="end">°C</text>
    </svg>`,
          options: ['−4°C', '4°C', '−6°C', '6°C'],
          answer: 0,
          explain: 'Słupek kończy się poniżej zera, jedną kreskę nad −5. Każda kreska to 1 stopień, więc termometr pokazuje −4°C.',
        },
        { id: '8uce6y', q: 'Gdzie mierzymy temperaturę powietrza?', options: ['w cieniu', 'w pełnym słońcu', 'przy grzejniku', 'w kieszeni'], answer: 0, explain: 'Słońce nagrzewa termometr, więc w słońcu wynik byłby za wysoki. Mierzymy w cieniu.' },
        { id: 'iqqfzs', q: 'Rano było 3°C, a wieczorem −2°C. O ile stopni spadła temperatura?', options: ['o 1 stopień', 'o 3 stopnie', 'o 5 stopni', 'o 2 stopnie'], answer: 2, explain: 'Od 3°C do 0°C to 3 stopnie, od 0°C do −2°C – jeszcze 2. Razem 5 stopni.' },
        { id: '2h27xt', q: 'Co oznacza na mapie pogody znak ❄️?', options: ['opady śniegu', 'silny wiatr', 'burzę', 'słońce'], answer: 0, explain: 'Płatek śniegu oznacza opady śniegu.' },
        { id: '630bwl', q: 'Która oznaka może zapowiadać burzę?', options: ['wysokie, ciemne chmury i grzmoty w oddali', 'bezchmurne niebo i brak wiatru', 'szron na trawie', 'rosa o poranku'], answer: 0, explain: 'Przed burzą szybko rosną wysokie, ciemne chmury, wzmaga się wiatr i słychać grzmoty.' },
        { id: 'ji66h6', q: 'Gdzie najlepiej schronić się podczas burzy?', options: ['pod samotnym drzewem', 'w budynku', 'na szczycie wzgórza', 'w jeziorze'], answer: 1, explain: 'Budynek jest najbezpieczniejszym miejscem. Samotne drzewo, szczyt wzgórza i woda są niebezpieczne.' },
        { id: 'x4bdp7', q: 'Prawda czy fałsz?\nPodczas burzy można spokojnie pływać w jeziorze.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'W czasie burzy trzeba od razu wyjść z wody i schować się w budynku.' },
        { id: 'eqlml0', q: 'Prawda czy fałsz?\nPogoda może się zmienić nawet w ciągu kilku godzin.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Pogoda zmienia się często – rano może świecić słońce, a po południu padać deszcz.' },
        { id: 'mdt1h2', q: 'Co oznacza słowo „zachmurzenie”?', options: ['jaka część nieba jest zakryta chmurami', 'jak szybko wieje wiatr', 'ile spadło deszczu', 'jak wysoko są chmury'], answer: 0, explain: 'Zachmurzenie mówi, jaka część nieba jest zakryta chmurami – od bezchmurnego nieba do całkowitego zachmurzenia.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'las-laka',
      name: 'Las i łąka',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 4 „Organizmy i ekosystemy”, wym. 12 (ekosystemy w otoczeniu – naturalne i sztuczne, miejsce człowieka w ekosystemie, organizmy inwazyjne), wym. 13 (ekosystem łąki – gatunki, znaczenie łąk, wpływ człowieka, kwiaty traw a kwiaty z okwiatem – moduł klimatyczny), wym. 14 (las – gatunki, typ lasu, funkcje lasu, wpływ człowieka – moduł klimatyczny). Fakty sprawdzone 2.11.2026: warstwy lasu, typy lasu, gatunki łąki i lasu – zpe.gov.pl („Jakie bogactwa kryją lasy?”, „W lesie”, „Na łące i polu uprawnym”); funkcje lasu – Lasy Państwowe („Lasy Państwowe w liczbach”); gatunki inwazyjne (barszcz Sosnowskiego, szop pracz – na liście inwazyjnych gatunków obcych stwarzających zagrożenie dla Unii) – GDOŚ i RDOŚ (gov.pl); zakaz wypalania łąk – ustawa o ochronie przyrody, art. 124 (tekst jednolity Dz.U. 2026 poz. 1315). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Ekosystem</h3>
        <p><b>Ekosystem</b> to miejsce w przyrodzie razem ze wszystkim, co w nim żyje (rośliny, zwierzęta, grzyby, bakterie), i z warunkami, jakie tam panują (światło, woda, gleba, powietrze). Wszystko jest ze sobą powiązane – np. kto kogo zjada.</p>
        <table>
          <tr><th>Ekosystemy naturalne</th><th>Ekosystemy sztuczne</th></tr>
          <tr><td>powstały bez udziału człowieka</td><td>stworzył je człowiek i musi o nie dbać</td></tr>
          <tr><td>las naturalny (np. Puszcza Białowieska), jezioro, rzeka, torfowisko</td><td>pole uprawne, sad, park, ogród</td></tr>
        </table>
        <p><b>Człowiek</b> też jest częścią ekosystemów. Korzysta z nich (drewno, pożywienie, wypoczynek), ale też je zmienia: wycina lasy, osusza bagna, zakłada pola, zanieczyszcza wodę i powietrze. Może też przyrodę chronić.</p>
        <h3>Gatunki inwazyjne</h3>
        <p><b>Gatunek obcy</b> to roślina lub zwierzę przywiezione przez człowieka z innej części świata. Gdy taki gatunek szybko się rozprzestrzenia i szkodzi gatunkom <b>rodzimym</b> (żyjącym u nas od dawna), nazywamy go <b>inwazyjnym</b>. Przykłady:</p>
        <ul>
          <li><b>barszcz Sosnowskiego</b> – roślina z Kaukazu; zarasta duże obszary i wypiera rodzime rośliny; jego sok na słońcu parzy skórę,</li>
          <li><b>szop pracz</b> – ssak z Ameryki Północnej; może niszczyć gniazda ptaków wodnych i zagraża rzadkiemu żółwiowi błotnemu.</li>
        </ul>
        <div class="tip">💡 Nigdy nie wypuszczaj na wolność zwierząt domowych ani egzotycznych (np. żółwia z akwarium). Mogą zaszkodzić rodzimej przyrodzie.</div>
        <h3>Łąka</h3>
        <p><b>Łąka</b> to teren porośnięty głównie <b>trawami</b> i innymi roślinami zielnymi, bez drzew. Jest tam dużo światła i wieje wiatr. Łąkę się <b>nie orze</b> i przez wiele lat rosną na niej te same, bardzo różne rośliny. Na <b>polu</b> uprawnym rośnie zwykle jeden gatunek, a pole orze się co roku.</p>
        <table>
          <tr><th>Rośliny łąki</th><th>Zwierzęta łąki</th></tr>
          <tr><td>trawy, koniczyna, mniszek, jaskier, szczaw</td><td>pasikonik, świerszcz, motyle, trzmiele, mrówki, żaba trawna, kuropatwa, myszołów (szuka tu pokarmu), mysz, kret, zając</td></tr>
        </table>
        <p><b>Znaczenie łąk:</b> są domem wielu gatunków, dają pokarm (nektar i pyłek) owadom zapylającym, a ludziom – <b>siano</b> i paszę dla zwierząt hodowlanych.</p>
        <p><b>Człowiek a łąka:</b> dzięki <b>koszeniu</b> i <b>wypasowi</b> zwierząt łąka nie zarasta krzewami i lasem. Szkodzi jej osuszanie i zamiana w pole. <b>Wypalanie łąk jest zabronione</b> przez ustawę o ochronie przyrody – w ogniu giną zwierzęta, a pożar łatwo wymyka się spod kontroli.</p>
        <h3>Kwiaty traw a kwiaty z okwiatem</h3>
        <table>
          <tr><th>Kwiat z barwnym okwiatem (np. jaskier, mak, koniczyna)</th><th>Kwiaty traw</th></tr>
          <tr><td>duże, kolorowe płatki, zapach, nektar</td><td>drobne, niepozorne, zielonkawe, zebrane w kłosy lub wiechy</td></tr>
          <tr><td><b>wabią owady</b>, które przenoszą pyłek</td><td>pyłek przenosi <b>wiatr</b> – kwiaty nie muszą wabić owadów, więc nie mają barwnych płatków</td></tr>
        </table>
        <h3>Las i jego warstwy</h3>
        <p><b>Las</b> to ekosystem, w którym najważniejsze są <b>drzewa</b>. Las ma <b>cztery warstwy</b> (piętra), od góry:</p>
        <table>
          <tr><th>Warstwa</th><th>Co tam rośnie i żyje</th></tr>
          <tr><td><b>korony drzew</b></td><td>sosna, świerk, dąb, buk, brzoza; wiewiórka, kuna, gniazda ptaków drapieżnych (np. myszołowa)</td></tr>
          <tr><td><b>podszyt</b></td><td>młode drzewa i krzewy: leszczyna, jarzębina, kalina, jałowiec, bez czarny; ptaki, np. rudzik, kos</td></tr>
          <tr><td><b>runo leśne</b></td><td>mchy, paprocie, krzewinki (borówka czarna, wrzos), grzyby; pokarmu szukają tu dziki, sarny, lisy</td></tr>
          <tr><td><b>ściółka</b></td><td>opadłe liście, igły, gałązki; dżdżownice, grzyby i bakterie rozkładają je na <b>próchnicę</b></td></tr>
        </table>
        <p>Im niższa warstwa, tym <b>mniej światła</b>, <b>większa wilgotność</b> i <b>słabszy wiatr</b>.</p>
        <h3>Typy lasu</h3>
        <ul>
          <li><b>las iglasty</b> (bór) – rosną w nim drzewa iglaste: sosna, świerk, jodła, modrzew (modrzew zrzuca igły na zimę),</li>
          <li><b>las liściasty</b> – drzewa liściaste: dąb, buk, grab, lipa, klon, brzoza,</li>
          <li><b>las mieszany</b> – rosną razem drzewa iglaste i liściaste.</li>
        </ul>
        <p>Typ lasu poznasz po drzewach, które tworzą korony. Najczęstszym drzewem w polskich lasach jest <b>sosna</b>.</p>
        <h3>Po co nam las?</h3>
        <table>
          <tr><th>Funkcje lasu</th><th>Przykłady</th></tr>
          <tr><td><b>ochronne</b> (przyrodnicze)</td><td>dom dla roślin, zwierząt i grzybów; wytwarza tlen i pochłania dwutlenek węgla – gaz, przez który Ziemia mocniej się ogrzewa (zmiana klimatu); zatrzymuje wodę (np. w mchach) i chroni przed powodzią; chroni glebę</td></tr>
          <tr><td><b>gospodarcze</b> (produkcyjne)</td><td>drewno, grzyby, jagody</td></tr>
          <tr><td><b>społeczne</b></td><td>wypoczynek, zdrowie, miejsca pracy</td></tr>
        </table>
        <p><b>Człowiek a las:</b> ludzie wycinają lasy i sadzą nowe. Często sadzono lasy z jednego gatunku drzew (np. samej sosny) – takie lasy łatwiej niszczą szkodniki, np. korniki. Lasowi szkodzą też śmieci, hałas i pożary. W lesie nie hałasuj, nie rozpalaj ogniska poza wyznaczonym miejscem i zabieraj śmieci ze sobą.</p>
      `,
      flashcards: [
        ['Ekosystem', 'Miejsce w przyrodzie razem z organizmami, które w nim żyją, i warunkami, jakie tam panują'],
        ['Ekosystemy naturalne – przykłady', 'las naturalny (np. Puszcza Białowieska), jezioro, rzeka, torfowisko'],
        ['Ekosystemy sztuczne – przykłady', 'pole uprawne, sad, park, ogród'],
        ['Gatunek inwazyjny', 'Gatunek obcy przywieziony przez człowieka, który szybko się rozprzestrzenia i szkodzi gatunkom rodzimym'],
        ['Barszcz Sosnowskiego', 'Inwazyjna roślina z Kaukazu; wypiera rodzime rośliny, jej sok na słońcu parzy skórę'],
        ['Szop pracz', 'Inwazyjny ssak z Ameryki Północnej; niszczy gniazda ptaków wodnych, zagraża żółwiowi błotnemu'],
        ['Rośliny łąki – przykłady', 'trawy, koniczyna, mniszek, jaskier, szczaw'],
        ['Zwierzęta łąki – przykłady', 'pasikonik, świerszcz, trzmiel, motyle, kuropatwa, kret, zając'],
        ['Kwiaty traw', 'Drobne, niepozorne, bez barwnych płatków; pyłek przenosi wiatr, więc nie muszą wabić owadów'],
        ['Warstwy lasu (od góry)', 'korony drzew, podszyt, runo leśne, ściółka'],
        ['Typy lasu', 'iglasty (bór), liściasty, mieszany'],
        ['Funkcje lasu', 'ochronne (przyrodnicze), gospodarcze (produkcyjne), społeczne'],
      ],
      questions: [
        { id: 'jocjms', q: 'Ekosystem to…', options: ['miejsce w przyrodzie razem z organizmami, które w nim żyją, i warunkami, jakie tam panują', 'tylko rośliny rosnące w jednym miejscu', 'tylko zwierzęta żyjące w lesie', 'mapa okolicy'], answer: 0, explain: 'Ekosystem to organizmy (rośliny, zwierzęta, grzyby, bakterie) razem z miejscem i warunkami życia – światłem, wodą, glebą, powietrzem.' },
        { id: '1l77ua', q: 'Który ekosystem jest sztuczny?', options: ['pole uprawne', 'jezioro', 'Puszcza Białowieska', 'torfowisko'], answer: 0, explain: 'Pole założył człowiek i co roku je uprawia – to ekosystem sztuczny.' },
        { id: 'dycljp', q: 'Który ekosystem jest naturalny?', options: ['jezioro', 'sad', 'park miejski', 'ogród'], answer: 0, explain: 'Jezioro powstało bez udziału człowieka. Sad, park i ogród stworzyli ludzie.' },
        { id: 'fa66x9', q: 'Gatunek inwazyjny to…', options: ['gatunek obcy, który szybko się rozprzestrzenia i szkodzi gatunkom rodzimym', 'każdy gatunek chroniony', 'gatunek, który żyje u nas od zawsze', 'gatunek, który wyginął'], answer: 0, explain: 'Gatunek inwazyjny przywiózł człowiek z innej części świata. Rozprzestrzenia się i szkodzi gatunkom rodzimym.' },
        { id: 'f3a4ox', q: 'Który z tych gatunków jest w Polsce gatunkiem inwazyjnym?', options: ['szop pracz', 'żubr', 'sarna', 'jeż'], answer: 0, explain: 'Szop pracz pochodzi z Ameryki Północnej. Może niszczyć gniazda ptaków wodnych i zagraża żółwiowi błotnemu.' },
        { id: 'uohtpa', q: 'Skąd pochodzi barszcz Sosnowskiego?', options: ['z Kaukazu', 'z Tatr', 'z Puszczy Białowieskiej', 'z Australii'], answer: 0, explain: 'Barszcz Sosnowskiego to roślina z Kaukazu. W Polsce jest gatunkiem inwazyjnym.' },
        { id: '43qm01', q: 'Masz w domu żółwia, który już ci się znudził. Co zrobisz?', options: ['poszukam mu nowego opiekuna, np. przez sklep zoologiczny lub schronisko – nie wypuszczę go na wolność', 'wypuszczę go do stawu', 'zaniosę go do lasu', 'wypuszczę go nad rzeką'], answer: 0, explain: 'Zwierzę wypuszczone na wolność może zginąć albo zaszkodzić rodzimym gatunkom.' },
        { id: '7lspk1', q: 'Czym różni się łąka od pola uprawnego?', options: ['na łące rośnie wiele różnych gatunków roślin i łąki się nie orze', 'na łące rosną drzewa', 'na łące uprawia się jeden gatunek zboża', 'łąkę orze się co roku'], answer: 0, explain: 'Na łące przez lata rosną te same, bardzo różne rośliny. Na polu zwykle uprawia się jeden gatunek, a pole orze się co roku.' },
        { id: 'zpn8vc', q: 'Która roślina jest typowa dla łąki?', options: ['koniczyna', 'paproć', 'świerk', 'wrzos'], answer: 0, explain: 'Na łące rosną trawy, koniczyna, mniszek, jaskier, szczaw. Paproć i wrzos to rośliny runa leśnego, świerk – drzewo.' },
        { id: 'xzi07p', q: 'Które zwierzę często spotkasz na łące?', options: ['pasikonika', 'wiewiórkę', 'dzięcioła', 'kunę'], answer: 0, explain: 'Pasikoniki i świerszcze to typowe owady łąk. Wiewiórka, dzięcioł i kuna żyją w lesie.' },
        { id: '2f8ce8', q: 'Dlaczego kwiaty traw nie mają kolorowych płatków?', options: ['bo ich pyłek przenosi wiatr, więc nie muszą wabić owadów', 'bo rosną w cieniu drzew', 'bo kwitną tylko w nocy', 'bo owady nie lubią łąk'], answer: 0, explain: 'Barwny okwiat, zapach i nektar służą do wabienia owadów. Trawy zapyla wiatr, więc ich kwiaty są drobne i niepozorne.' },
        { id: 'wowoz9', q: 'Prawda czy fałsz?\nWypalanie łąk jest w Polsce zabronione.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Zakazuje tego ustawa o ochronie przyrody (art. 124). W ogniu giną zwierzęta, a pożar łatwo wymyka się spod kontroli.' },
        { id: 'cn25ur', q: 'Co sprawia, że łąka nie zarasta krzewami i lasem?', options: ['koszenie i wypas zwierząt', 'orka co roku', 'wypalanie traw', 'sadzenie drzew'], answer: 0, explain: 'Łąki są koszone na siano albo wypasa się na nich zwierzęta – dlatego nie zarastają.' },
        { id: '32d2we', q: 'Jaka jest kolejność warstw lasu od góry?', options: ['korony drzew, podszyt, runo leśne, ściółka', 'podszyt, korony drzew, ściółka, runo leśne', 'runo leśne, podszyt, korony drzew, ściółka', 'ściółka, runo leśne, podszyt, korony drzew'], answer: 0, explain: 'Najwyżej są korony drzew, niżej podszyt (krzewy i młode drzewa), przy ziemi runo leśne, a na samej ziemi – ściółka.' },
        { id: 'cdcyt5', q: 'W której warstwie lasu rosną mchy, paprocie i borówki?', options: ['w runie leśnym', 'w koronach drzew', 'w podszycie', 'w ściółce'], answer: 0, explain: 'Runo leśne to najniższa warstwa roślin: mchy, paprocie, krzewinki (borówka czarna, wrzos), a także grzyby.' },
        { id: 'poa1q9', q: 'Z czego składa się ściółka?', options: ['z opadłych liści, igieł i gałązek', 'z młodych drzew i krzewów', 'z mchów i paproci', 'z koron drzew'], answer: 0, explain: 'Ściółka to opadłe liście, igły i gałązki. Rozkładają je dżdżownice, grzyby i bakterie – powstaje próchnica.' },
        { id: '3r5ass', q: 'W lesie rosną sosny i świerki, a nie ma drzew liściastych. To las…', options: ['iglasty (bór)', 'liściasty', 'mieszany'], answer: 0, explain: 'Las z drzewami iglastymi (sosna, świerk, jodła, modrzew) to las iglasty, czyli bór.' },
        { id: '7ioi8h', q: 'Który przykład to funkcja społeczna lasu?', options: ['spacer i wypoczynek w lesie', 'pozyskiwanie drewna', 'zatrzymywanie wody w mchach', 'pochłanianie dwutlenku węgla'], answer: 0, explain: 'Funkcje społeczne to wypoczynek, zdrowie i praca. Drewno to funkcja gospodarcza, a zatrzymywanie wody i pochłanianie dwutlenku węgla – ochronna.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'teren',
      name: 'Niziny, wyżyny i góry',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 5 „Planeta Ziemia”, wym. 17 (główne formy ukształtowania terenu, przykłady nizin, wyżyn i gór w Polsce), wym. 18 (wysokość bezwzględna i względna na mapie; skala – w dziale „Kierunki, kompas, plan i mapa”). Progi wysokości nizin, wyżyn i gór, podział gór na niskie, średnie i wysokie, depresja (Żuławy Wiślane, ok. 1,8 m p.p.m. koło Raczek Elbląskich), Rysy 2499 m n.p.m., poziomice i mapa hipsometryczna – według ZPE („Jaki kształt może mieć powierzchnia Ziemi?”, zpe.gov.pl), sprawdzone 2.11.2026. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Formy terenu</h3>
        <p>Powierzchnia Ziemi nie jest płaska jak stół. Jej kształt to <b>ukształtowanie terenu</b> (inaczej rzeźba terenu).</p>
        <table>
          <tr><th>Formy wypukłe (wznoszą się)</th><th>Formy wklęsłe (obniżenia)</th></tr>
          <tr><td>pagórek, wzgórze, góra</td><td><b>dolina</b> – wydłużone obniżenie, zwykle płynie nim rzeka<br><b>kotlina</b> – obniżenie otoczone ze wszystkich stron wyższym terenem</td></tr>
        </table>
        <p>Każde wzniesienie ma <b>szczyt</b> (najwyższy punkt), <b>stoki</b> (zbocza) i <b>podnóże</b> (miejsce, gdzie stok przechodzi w płaski teren).</p>
        <h3>Wysokość bezwzględna i względna</h3>
        <ul>
          <li><b>Wysokość bezwzględna</b> – liczona od <b>poziomu morza</b>. Zapisujemy ją w <b>m n.p.m.</b> (metrach nad poziomem morza), np. Rysy – 2499 m n.p.m.</li>
          <li><b>Wysokość względna</b> – liczona od <b>wybranego miejsca</b>, np. od podnóża do szczytu. Obliczasz ją, odejmując wysokości bezwzględne.</li>
        </ul>
        <p>Przykład: szczyt ma 1200 m n.p.m., a schronisko pod nim – 900 m n.p.m. Szczyt jest wyżej od schroniska o 1200 − 900 = <b>300 m</b>. To wysokość względna.</p>
        <div class="tip">💡 Wysokość bezwzględna – „od morza”, ma dopisek n.p.m. Wysokość względna – „od czegoś innego”, liczysz ją odejmowaniem.</div>
        <h3>Niziny, wyżyny, góry</h3>
        <table>
          <tr><th>Forma</th><th>Wysokość bezwzględna</th><th>Różnice wysokości</th><th>Przykłady w Polsce</th></tr>
          <tr><td><b>nizina</b></td><td>od 0 do 300 m n.p.m.</td><td>małe – teren płaski albo lekko falisty</td><td>wybrzeże Bałtyku, Nizina Mazowiecka</td></tr>
          <tr><td><b>wyżyna</b></td><td>powyżej 300 m n.p.m.</td><td>nie większe niż 300 m</td><td>Wyżyna Krakowsko-Częstochowska, Wyżyna Lubelska</td></tr>
          <tr><td><b>góry</b></td><td>powyżej 300 m n.p.m.</td><td>większe niż 300 m</td><td>Tatry, Sudety, Beskidy, Bieszczady</td></tr>
        </table>
        <p>Wyżyna i góry są tak samo wysoko nad morzem. Różnią się tym, że w górach różnice między szczytami a dolinami są <b>duże</b>, a stoki <b>strome</b>.</p>
        <ul>
          <li><b>Góry niskie</b>, np. Góry Świętokrzyskie – łagodne stoki, zaokrąglone szczyty.</li>
          <li><b>Góry średnie</b>, np. Sudety, Beskidy, Bieszczady – strome stoki, łagodne szczyty.</li>
          <li><b>Góry wysokie</b> – w Polsce tylko <b>Tatry</b>: ostre szczyty, bardzo strome stoki. Tu jest najwyższy szczyt Polski – <b>Rysy (2499 m n.p.m.)</b>.</li>
        </ul>
        <p><b>Depresja</b> to ląd położony <b>poniżej poziomu morza</b>. W Polsce jest na <b>Żuławach Wiślanych</b>, niedaleko ujścia Wisły. Najniższy punkt Polski leży ok. 1,8 m p.p.m. (pod poziomem morza).</p>
        <h3>Wysokości na mapie</h3>
        <ul>
          <li><b>Poziomica</b> – linia na mapie, która łączy punkty o <b>tej samej wysokości bezwzględnej</b>.</li>
          <li>Poziomice <b>gęsto</b> obok siebie – stok <b>stromy</b>. Poziomice <b>rzadko</b> – stok <b>łagodny</b>.</li>
          <li><b>Mapa hipsometryczna</b> (barwna mapa wysokości) – obszary między poziomicami są pomalowane kolorami: zielony – najniżej (niziny), żółty i pomarańczowy – wyżej, brązowy albo czerwony – najwyżej (góry). Niebieski to wody.</li>
          <li><b>Punkt wysokościowy</b> – kropka albo trójkąt z liczbą, np. ▲ 1603 – wysokość tego miejsca w m n.p.m.</li>
        </ul>
        <div class="tip">💡 Zawsze patrz na <b>legendę</b> – podaje, jaką wysokość oznacza każdy kolor.</div>
      `,
      flashcards: [
        ['Ukształtowanie terenu', 'Kształt powierzchni Ziemi: wzniesienia, obniżenia i równiny (inaczej rzeźba terenu)'],
        ['Części wzniesienia', 'szczyt, stoki (zbocza), podnóże'],
        ['Dolina', 'Wydłużone obniżenie terenu, zwykle płynie nim rzeka'],
        ['Kotlina', 'Obniżenie otoczone ze wszystkich stron wyższym terenem'],
        ['Wysokość bezwzględna', 'Wysokość liczona od poziomu morza, w m n.p.m.'],
        ['Wysokość względna', 'Wysokość liczona od wybranego miejsca, np. od podnóża do szczytu; obliczasz ją odejmowaniem'],
        ['Nizina', 'Teren od 0 do 300 m n.p.m., płaski lub lekko falisty, np. Nizina Mazowiecka'],
        ['Wyżyna', 'Teren powyżej 300 m n.p.m., różnice wysokości nie większe niż 300 m, np. Wyżyna Lubelska'],
        ['Góry', 'Teren powyżej 300 m n.p.m., różnice wysokości większe niż 300 m, strome stoki'],
        ['Jedyne góry wysokie w Polsce', 'Tatry; najwyższy szczyt Polski – Rysy (2499 m n.p.m.)'],
        ['Depresja', 'Ląd położony poniżej poziomu morza; w Polsce – Żuławy Wiślane'],
        ['Poziomica', 'Linia na mapie łącząca punkty o tej samej wysokości bezwzględnej'],
        ['Poziomice gęsto / rzadko', 'gęsto – stok stromy; rzadko – stok łagodny'],
      ],
      questions: [
        { id: 'wrlhkk', q: 'Wysokość bezwzględna to wysokość liczona…', options: ['od poziomu morza', 'od podnóża góry', 'od najbliższego miasta', 'od dna doliny'], answer: 0, explain: 'Wysokość bezwzględną liczymy od poziomu morza i zapisujemy w m n.p.m.' },
        { id: '2rvig1', q: 'Co oznacza skrót „m n.p.m.”?', options: ['metry nad poziomem morza', 'metry na planie mapy', 'metry na północ od morza', 'metry nad powierzchnią mapy'], answer: 0, explain: 'm n.p.m. – metry nad poziomem morza. Tak zapisujemy wysokość bezwzględną.' },
        { id: 'yfuncw', q: 'Szczyt ma 1200 m n.p.m., a schronisko pod nim – 900 m n.p.m. O ile metrów szczyt jest wyżej niż schronisko?', options: ['300 m', '2100 m', '1200 m', '900 m'], answer: 0, explain: 'Wysokość względna to różnica: 1200 − 900 = 300 m.' },
        {
          id: '0op8ic',
          q: 'Jaka jest wysokość względna wzgórza – od podnóża do szczytu?',
          svg: `<svg viewBox="0 0 340 190" role="img" aria-label="Przekrój wzgórza. Szczyt: 650 m n.p.m. Podnóże: 400 m n.p.m.">
      <line x1="10" y1="160" x2="330" y2="160" class="ln-thin"/>
      <path d="M40,160 Q110,150 150,90 Q170,56 190,56 Q215,58 240,110 Q265,155 310,160 Z" class="f3 s3"/>
      <circle cx="190" cy="56" r="5" class="t2"/>
      <circle cx="60" cy="158" r="5" class="t2"/>
      <text x="190" y="38" class="tx-b" text-anchor="middle">650 m n.p.m.</text>
      <text x="60" y="184" class="tx-b" text-anchor="middle">400 m n.p.m.</text>
      <text x="292" y="40" class="tx-s" text-anchor="middle">szczyt</text>
      <text x="60" y="142" class="tx-s" text-anchor="middle">podnóże</text>
    </svg>`,
          options: ['250 m', '1050 m', '650 m', '400 m'],
          answer: 0,
          explain: 'Wysokość względna to różnica wysokości bezwzględnych: 650 − 400 = 250 m.',
        },
        { id: 'r2evu2', q: 'Na jakiej wysokości leżą niziny?', options: ['od 0 do 300 m n.p.m.', 'powyżej 300 m n.p.m.', 'powyżej 2000 m n.p.m.', 'poniżej poziomu morza'], answer: 0, explain: 'Niziny leżą od 0 do 300 m n.p.m. Teren poniżej poziomu morza to depresja.' },
        { id: 'en9vex', q: 'Czym góry różnią się od wyżyn?', options: ['w górach różnice wysokości są większe niż 300 m, a stoki strome', 'góry leżą poniżej 300 m n.p.m.', 'na wyżynach są ostre szczyty', 'niczym – to to samo'], answer: 0, explain: 'Wyżyny i góry leżą powyżej 300 m n.p.m. W górach różnice między szczytami a dolinami są jednak większe niż 300 m.' },
        { id: '2ya7pb', q: 'Które góry w Polsce są górami wysokimi?', options: ['Tatry', 'Sudety', 'Góry Świętokrzyskie', 'Bieszczady'], answer: 0, explain: 'Tatry to jedyne góry wysokie w Polsce: ostre szczyty i bardzo strome stoki.' },
        { id: 'k7ywnf', q: 'Jak nazywa się najwyższy szczyt Polski?', options: ['Rysy', 'Śnieżka', 'Giewont', 'Łysica'], answer: 0, explain: 'Rysy w Tatrach mają 2499 m n.p.m. – to najwyższy szczyt Polski.' },
        { id: 'bma9fq', q: 'Które z tych miejsc to wyżyna?', options: ['Wyżyna Krakowsko-Częstochowska', 'Tatry', 'Nizina Mazowiecka', 'Żuławy Wiślane'], answer: 0, explain: 'Wyżyna Krakowsko-Częstochowska leży powyżej 300 m n.p.m., ale nie ma dużych różnic wysokości.' },
        { id: 'g0t4nw', q: 'Depresja to…', options: ['ląd położony poniżej poziomu morza', 'najwyższy szczyt w górach', 'teren od 0 do 300 m n.p.m.', 'dolina rzeki w górach'], answer: 0, explain: 'Depresja to ląd poniżej poziomu morza. W Polsce jest na Żuławach Wiślanych.' },
        { id: 'cshhzh', q: 'Gdzie w Polsce znajduje się depresja?', options: ['na Żuławach Wiślanych', 'w Tatrach', 'na Wyżynie Lubelskiej', 'w Bieszczadach'], answer: 0, explain: 'Depresja jest na Żuławach Wiślanych, niedaleko ujścia Wisły. Najniższy punkt leży ok. 1,8 m pod poziomem morza.' },
        { id: '0dj2i5', q: 'Poziomica to linia na mapie, która łączy punkty…', options: ['o tej samej wysokości bezwzględnej', 'o tej samej temperaturze', 'leżące nad tą samą rzeką', 'oddalone o 1 km'], answer: 0, explain: 'Poziomica łączy miejsca położone na tej samej wysokości nad poziomem morza.' },
        {
          id: 'nuz5s4',
          q: 'Na rysunku są poziomice wzgórza. Który stok jest bardziej stromy?',
          svg: `<svg viewBox="0 0 340 200" role="img" aria-label="Poziomice wzgórza. Po lewej stronie linie leżą bardzo blisko siebie, po prawej – daleko od siebie. Lewy stok oznaczono literą A, prawy literą B.">
      <ellipse cx="170" cy="100" rx="130" ry="80" class="ln"/>
      <ellipse cx="148" cy="100" rx="100" ry="62" class="ln"/>
      <ellipse cx="126" cy="100" rx="70" ry="44" class="ln"/>
      <ellipse cx="106" cy="100" rx="42" ry="26" class="ln"/>
      <circle cx="90" cy="100" r="4" class="t2"/>
      <text x="22" y="106" class="tx-b t2" text-anchor="middle">A</text>
      <text x="322" y="106" class="tx-b t2" text-anchor="middle">B</text>
    </svg>`,
          options: ['stok A – poziomice są gęsto', 'stok B – poziomice są rzadko', 'oba są tak samo strome'],
          answer: 0,
          explain: 'Im gęściej leżą poziomice, tym na krótkim odcinku teren bardziej się wznosi – stok jest stromy. Po stronie A poziomice są blisko siebie.',
        },
        { id: 'i34oa1', q: 'Na mapie hipsometrycznej niziny są zwykle zaznaczone kolorem…', options: ['zielonym', 'brązowym', 'niebieskim', 'czerwonym'], answer: 0, explain: 'Niziny – zielony, wyższe tereny – żółty i pomarańczowy, góry – brązowy. Niebieski oznacza wody. Kolory zawsze sprawdzaj w legendzie.' },
        { id: '5t1giv', q: 'Jak nazywa się obniżenie terenu otoczone ze wszystkich stron wyższym terenem?', options: ['kotlina', 'szczyt', 'stok', 'wyżyna'], answer: 0, explain: 'Kotlina to obniżenie otoczone ze wszystkich stron wyższym terenem.' },
        { id: 'pdiqw5', q: 'Jak nazywa się wydłużone obniżenie terenu, którym zwykle płynie rzeka?', options: ['dolina', 'kotlina', 'depresja', 'podnóże'], answer: 0, explain: 'Dolina to wydłużone obniżenie terenu – zwykle płynie nim rzeka.' },
        { id: '3q8hco', q: 'Prawda czy fałsz?\nWysokość względną obliczamy, odejmując od siebie dwie wysokości bezwzględne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Np. szczyt 650 m n.p.m. i podnóże 400 m n.p.m.: 650 − 400 = 250 m wysokości względnej.' },
        { id: 'b23oey', q: 'Jak nazywa się miejsce, w którym stok wzniesienia przechodzi w płaski teren?', options: ['podnóże', 'szczyt', 'dolina', 'poziomica'], answer: 0, explain: 'Wzniesienie ma szczyt, stoki i podnóże – miejsce, gdzie stok przechodzi w płaski teren.' },
        { id: 'igyixr', q: 'Do jakich gór należą Góry Świętokrzyskie?', options: ['do gór niskich', 'do gór wysokich', 'do gór średnich', 'to nie są góry, tylko depresja'], answer: 0, explain: 'Góry Świętokrzyskie to góry niskie – mają łagodne stoki i zaokrąglone szczyty.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'ochrona',
      name: 'Ochrona przyrody',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 2 wym. 8 (formy ochrony przyrody w otoczeniu, walory przyrodnicze podlegające ochronie). Formy ochrony przyrody, opisy parku narodowego, rezerwatu, parku krajobrazowego, pomnika przyrody, zakazy w parku narodowym i liczba parków narodowych – według ustawy o ochronie przyrody (tekst jednolity Dz.U. 2026 poz. 1315: art. 6, 8, 13, 15, 16, 40 i załącznik), sprawdzone 2.11.2026. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Po co chronimy przyrodę?</h3>
        <p>Ludzie budują drogi i domy, wycinają lasy, osuszają bagna, zanieczyszczają wodę i powietrze. Przez to niektóre rośliny, zwierzęta i grzyby tracą miejsca do życia i stają się rzadkie. Dlatego najcenniejsze miejsca i gatunki chroni <b>prawo</b> – ustawa o ochronie przyrody.</p>
        <h3>Formy ochrony przyrody</h3>
        <p>Ustawa wymienia 10 form ochrony przyrody. Najważniejsze dla ciebie:</p>
        <table>
          <tr><th>Forma</th><th>Co chroni?</th></tr>
          <tr><td><b>park narodowy</b></td><td>duży obszar (co najmniej 1000 ha) o szczególnych wartościach; chroniona jest <b>cała przyroda</b> i krajobraz</td></tr>
          <tr><td><b>rezerwat przyrody</b></td><td>mniejszy obszar zachowany w stanie naturalnym lub mało zmienionym, np. fragment lasu, torfowisko, miejsce życia rzadkich roślin</td></tr>
          <tr><td><b>park krajobrazowy</b></td><td>obszar cenny ze względu na przyrodę, historię, kulturę i krajobraz; mogą tam mieszkać ludzie, działają gospodarstwa</td></tr>
          <tr><td><b>pomnik przyrody</b></td><td>pojedynczy twór przyrody lub ich skupisko, np. okazałe stare drzewo, źródło, wodospad, skałka, jaskinia, <b>głaz narzutowy</b></td></tr>
          <tr><td><b>ochrona gatunkowa</b></td><td>wybrane gatunki roślin, zwierząt i grzybów – chronione wszędzie, gdzie występują</td></tr>
        </table>
        <p>Pozostałe formy to: obszary chronionego krajobrazu, obszary Natura 2000, stanowiska dokumentacyjne, użytki ekologiczne i zespoły przyrodniczo-krajobrazowe.</p>
        <h3>Parki narodowe w Polsce</h3>
        <p>Według ustawy w Polsce są <b>23 parki narodowe</b> (stan z 2026 r.). Przykłady:</p>
        <ul>
          <li><b>Białowieski</b> – stary las (Puszcza Białowieska), żyją tam żubry,</li>
          <li><b>Tatrzański</b> – najwyższe polskie góry,</li>
          <li><b>Słowiński</b> – nad morzem, ruchome wydmy,</li>
          <li><b>Kampinoski</b> – Puszcza Kampinoska tuż obok Warszawy,</li>
          <li><b>Ojcowski</b> – wapienne skały i jaskinie na Wyżynie Krakowsko-Częstochowskiej.</li>
        </ul>
        <h3>Jak się zachować w parku narodowym i rezerwacie?</h3>
        <p>Ustawa zakazuje tam m.in.:</p>
        <ul>
          <li>chodzenia i jeżdżenia rowerem <b>poza wyznaczonymi szlakami</b>,</li>
          <li>zrywania roślin i zbierania grzybów (poza miejscami wyznaczonymi),</li>
          <li>płoszenia, chwytania i zabijania dzikich zwierząt, niszczenia gniazd i nor,</li>
          <li>palenia ognisk (poza miejscami wyznaczonymi),</li>
          <li><b>zakłócania ciszy</b>,</li>
          <li>zabierania skał, skamieniałości i minerałów.</li>
        </ul>
        <div class="tip">💡 Zasada turysty: idź szlakiem, nie hałasuj, niczego nie zrywaj i nie zostawiaj śmieci – zabierz je ze sobą.</div>
        <h3>Ochrona gatunkowa</h3>
        <p>Gatunków chronionych nie wolno m.in. zrywać, wykopywać, zabijać, płoszyć ani niszczyć ich gniazd. Przykładem jest <b>żubr</b> – największy ssak lądowy Europy. Na początku XX wieku żubry żyjące na wolności wyginęły. Odtworzono je z kilku zwierząt z ogrodów zoologicznych i dzięki ochronie znów żyją w polskich lasach.</p>
        <h3>Ochrona przyrody w twojej okolicy</h3>
        <p>Rozejrzyj się: w wielu miejscowościach są pomniki przyrody – stare drzewa albo duże głazy z tabliczką. W okolicy może być też rezerwat albo park krajobrazowy. Informacje znajdziesz na tablicach w terenie i na stronach gminy.</p>
      `,
      flashcards: [
        ['Ile jest form ochrony przyrody w ustawie?', '10'],
        ['Park narodowy', 'Duży obszar (min. 1000 ha), w którym chroni się całą przyrodę i krajobraz'],
        ['Rezerwat przyrody', 'Obszar zachowany w stanie naturalnym lub mało zmienionym, chroniony ze względu na szczególne wartości'],
        ['Park krajobrazowy', 'Obszar chroniony ze względu na przyrodę, historię, kulturę i krajobraz; mogą w nim mieszkać ludzie'],
        ['Pomnik przyrody – przykłady', 'Okazałe stare drzewo, źródło, wodospad, skałka, jaskinia, głaz narzutowy'],
        ['Ochrona gatunkowa', 'Ochrona wybranych gatunków roślin, zwierząt i grzybów wszędzie, gdzie występują'],
        ['Ile jest parków narodowych w Polsce?', '23 (według ustawy, stan z 2026 r.)'],
        ['Białowieski Park Narodowy', 'Puszcza Białowieska; żyją tam żubry'],
        ['W parku narodowym chodzimy…', 'tylko wyznaczonymi szlakami'],
        ['Żubr', 'Największy ssak lądowy Europy; uratowany dzięki ochronie'],
      ],
      questions: [
        { id: '4b9d7i', q: 'Która forma ochrony przyrody obejmuje duży obszar, na którym chroni się całą przyrodę i krajobraz?', options: ['park narodowy', 'pomnik przyrody', 'ochrona gatunkowa', 'użytek ekologiczny'], answer: 0, explain: 'W parku narodowym (o powierzchni co najmniej 1000 ha) ochronie podlega cała przyroda i walory krajobrazowe.' },
        { id: 'dub58h', q: 'Stary, ogromny dąb w środku wsi może zostać…', options: ['pomnikiem przyrody', 'parkiem narodowym', 'parkiem krajobrazowym', 'obszarem Natura 2000'], answer: 0, explain: 'Pomnikiem przyrody może być pojedynczy twór przyrody, np. okazałe drzewo, źródło, skałka albo głaz narzutowy.' },
        { id: 'y7kj0u', q: 'Która forma ochrony obejmuje wybrane gatunki roślin, zwierząt i grzybów wszędzie, gdzie występują?', options: ['ochrona gatunkowa', 'rezerwat przyrody', 'park narodowy', 'pomnik przyrody'], answer: 0, explain: 'Gatunek chroniony jest chroniony nie tylko w parku – także w twoim ogrodzie czy przy drodze.' },
        { id: 'b17xr0', q: 'Która forma ochrony obejmuje obszar cenny ze względu na przyrodę, historię, kulturę i krajobraz, na którym zwykle mieszkają ludzie i działają gospodarstwa?', options: ['park krajobrazowy', 'pomnik przyrody', 'ochrona gatunkowa'], answer: 0, explain: 'Park krajobrazowy chroni przyrodę, historię, kulturę i krajobraz, ale mieszkańcy żyją tam i pracują.' },
        { id: 'uor3oa', q: 'Ile parków narodowych jest w Polsce według ustawy o ochronie przyrody (stan z 2026 r.)?', options: ['23', '10', '16', '50'], answer: 0, explain: 'Wykaz w załączniku do ustawy obejmuje 23 parki narodowe. 16 to liczba województw, a 10 – liczba form ochrony przyrody.' },
        { id: 'kc8k7b', q: 'W którym parku narodowym żyją żubry w starej puszczy?', options: ['w Białowieskim', 'w Słowińskim', 'w Tatrzańskim', 'w Ojcowskim'], answer: 0, explain: 'Białowieski Park Narodowy chroni fragment Puszczy Białowieskiej – żyją tam żubry.' },
        { id: 'opm4iq', q: 'Który park narodowy leży nad morzem i słynie z ruchomych wydm?', options: ['Słowiński', 'Tatrzański', 'Kampinoski', 'Białowieski'], answer: 0, explain: 'Słowiński Park Narodowy leży nad Bałtykiem. Wiatr przesuwa tam wydmy.' },
        { id: '348ydz', q: 'Który park narodowy chroni najwyższe polskie góry?', options: ['Tatrzański', 'Słowiński', 'Kampinoski', 'Wielkopolski'], answer: 0, explain: 'Tatry to najwyższe góry w Polsce – chroni je Tatrzański Park Narodowy.' },
        { id: 'yyibn4', q: 'Jak należy się poruszać w parku narodowym?', options: ['tylko wyznaczonymi szlakami', 'gdzie się chce, byle cicho', 'na skróty przez łąki', 'rowerem po lesie, poza drogami'], answer: 0, explain: 'Ustawa zakazuje ruchu pieszego i rowerowego poza wyznaczonymi szlakami.' },
        { id: 'qr0a5j', q: 'Co wolno robić w parku narodowym?', options: ['podziwiać przyrodę, idąc szlakiem', 'zerwać kwiaty na bukiet', 'zabrać ładny kamień na pamiątkę', 'rozpalić ognisko w lesie, gdzie się chce'], answer: 0, explain: 'W parku narodowym nie wolno zrywać roślin, zabierać skał ani palić ognisk poza miejscami wyznaczonymi.' },
        { id: 'sgo6d6', q: 'Prawda czy fałsz?\nW parku narodowym i rezerwacie przyrody nie wolno zakłócać ciszy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Zakaz zakłócania ciszy jest w ustawie o ochronie przyrody. Hałas płoszy zwierzęta.' },
        { id: 'm57oox', q: 'Prawda czy fałsz?\nGatunki chronione są chronione tylko na terenie parków narodowych.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Ochrona gatunkowa obowiązuje wszędzie, gdzie dany gatunek występuje.' },
        { id: '5qgp4y', q: 'Który z tych obiektów może być pomnikiem przyrody?', options: ['głaz narzutowy', 'stary most', 'zabytkowy kościół', 'pomnik bohatera'], answer: 0, explain: 'Pomnik przyrody to twór przyrody, np. głaz narzutowy. Most, kościół i pomnik bohatera stworzyli ludzie – to nie są twory przyrody.' },
        { id: 'xgdis3', q: 'Obszar zachowany w stanie naturalnym lub mało zmienionym, np. torfowisko z rzadkimi roślinami, mniejszy niż park narodowy, to najczęściej…', options: ['rezerwat przyrody', 'pomnik przyrody', 'park miejski', 'ogród botaniczny'], answer: 0, explain: 'Rezerwat przyrody chroni obszary zachowane w stanie naturalnym lub mało zmienionym, wyróżniające się szczególnymi wartościami.' },
        { id: 'yxxezi', q: 'Dlaczego trzeba chronić przyrodę?', options: ['bo przez działalność ludzi wiele gatunków traci miejsca do życia', 'bo rośliny przeszkadzają w budowie dróg', 'bo zwierzęta są groźne', 'bo tak każą turyści'], answer: 0, explain: 'Wycinanie lasów, osuszanie bagien i zanieczyszczenia sprawiają, że gatunki stają się rzadkie. Ochrona daje im szansę przetrwać.' },
        { id: 'qhizry', q: 'Żubr to…', options: ['największy ssak lądowy Europy, uratowany dzięki ochronie', 'gatunek ptaka żyjący w Tatrach', 'roślina chroniona', 'zwierzę domowe'], answer: 0, explain: 'Na wolności żubry wyginęły na początku XX wieku. Odtworzono je z kilku zwierząt z ogrodów zoologicznych i dziś znów żyją w polskich lasach, m.in. w Puszczy Białowieskiej.' },
        { id: '08li5b', q: 'Idziesz szlakiem w parku narodowym i masz pusty papierek po batonie. Co robisz?', options: ['chowam go do plecaka i wyrzucam do kosza poza parkiem lub w domu', 'zakopuję go pod drzewem', 'wrzucam go w krzaki', 'zostawiam na ławce'], answer: 0, explain: 'Śmieci zabieramy ze sobą – zasada każdego turysty.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'mieszaniny',
      name: 'Rozpuszczanie i mieszaniny',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 3 „Materia i jej przemiany w przyrodzie”, wym. 6 (rozpuszczanie się w wodzie substancji i produktów stosowanych na co dzień, substancje rozpuszczalne i nierozpuszczalne, czynniki wpływające na szybkość rozpuszczania), wym. 9 (mieszaniny jednorodne i niejednorodne, rozdzielanie mieszanin); doświadczenia edukacyjne – eksperymenty, pkt 2 (wpływ mieszania, rozdrobnienia i temperatury na szybkość rozpuszczania) i pkt 3 (rozdzielanie mieszanin przez sączenie, odparowanie, krystalizację, dekantację, sedymentację i sposoby mechaniczne). Opisy metod rozdzielania i podziału mieszanin – według słowniczków Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl), sprawdzone 2.11.2026. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Rozpuszczanie</h3>
        <p>Wsyp łyżeczkę cukru do wody i zamieszaj. Cukier „znika”, ale woda jest słodka. Cukier nie zniknął – rozpadł się na drobinki tak małe, że ich nie widać, i rozszedł się w wodzie. Mówimy, że cukier <b>rozpuścił się</b>. Tak powstaje <b>roztwór</b>.</p>
        <table>
          <tr><th>Rozpuszczają się w wodzie</th><th>Nie rozpuszczają się w wodzie</th></tr>
          <tr><td>cukier, sól kuchenna, kawa rozpuszczalna</td><td>piasek, kreda, olej, żwir</td></tr>
        </table>
        <h3>Co przyspiesza rozpuszczanie?</h3>
        <ul>
          <li><b>mieszanie</b> – cukier w herbacie rozpuści się szybciej, gdy zamieszasz łyżeczką,</li>
          <li><b>rozdrobnienie</b> – cukier puder rozpuści się szybciej niż kostka cukru,</li>
          <li><b>wyższa temperatura</b> – w ciepłej wodzie cukier rozpuści się szybciej niż w zimnej.</li>
        </ul>
        <div class="tip">💡 Gdy badasz, co przyspiesza rozpuszczanie, zmieniaj tylko <b>jedną rzecz</b>, a resztę zostaw tak samo (tyle samo wody i cukru, takie same szklanki). Tylko wtedy wiesz, co zadziałało.</div>
        <h3>Mieszaniny</h3>
        <p><b>Mieszanina</b> to co najmniej dwie substancje zmieszane ze sobą. Każda z nich zachowuje swoje właściwości, dlatego mieszaninę można rozdzielić na składniki.</p>
        <table>
          <tr><th>Mieszanina jednorodna</th><th>Mieszanina niejednorodna</th></tr>
          <tr><td>składników <b>nie rozróżnisz</b> gołym okiem ani przez lupę</td><td>składniki <b>widać</b> gołym okiem albo przez lupę</td></tr>
          <tr><td>woda z cukrem, woda z solą</td><td>woda z piaskiem, woda z olejem, piasek z żwirem, groch z kaszą</td></tr>
        </table>
        <h3>Jak rozdzielić mieszaninę?</h3>
        <table>
          <tr><th>Sposób</th><th>Na czym polega</th><th>Przykład</th></tr>
          <tr><td><b>sposoby mechaniczne</b></td><td>wybieranie ręką, przesiewanie przez <b>sito</b>, przyciąganie <b>magnesem</b></td><td>groch z kaszą (sito), opiłki żelaza z piaskiem (magnes)</td></tr>
          <tr><td><b>sedymentacja</b></td><td>odstawiamy mieszaninę, a cięższe cząstki <b>opadają na dno</b></td><td>piasek opada na dno szklanki z wodą</td></tr>
          <tr><td><b>dekantacja</b></td><td>ostrożne <b>zlewanie cieczy znad osadu</b></td><td>zlewamy wodę znad piasku</td></tr>
          <tr><td><b>sączenie</b> (filtrowanie)</td><td>przelewamy mieszaninę przez <b>sączek</b> (np. bibułę, filtr do kawy); ciało stałe zostaje na sączku, ciecz przecieka</td><td>woda z piaskiem albo kredą</td></tr>
          <tr><td><b>odparowanie</b></td><td>ogrzewamy roztwór – woda odparowuje, a substancja rozpuszczona zostaje</td><td>z wody z solą zostaje sól</td></tr>
          <tr><td><b>krystalizacja</b></td><td>z roztworu powoli wydzielają się <b>kryształy</b> substancji, np. gdy woda wolno paruje</td><td>kryształki soli na dnie talerzyka z solanką</td></tr>
        </table>
        <p><b>Sączenie nie rozdzieli</b> wody i soli – sól jest rozpuszczona i przecieka razem z wodą przez sączek. Tu trzeba odparować wodę.</p>
        <h3>Zadanie z życia: sól z piaskiem</h3>
        <p>1) Wsyp mieszaninę do wody i zamieszaj – sól się rozpuści, piasek nie. 2) Przesącz – piasek zostanie na sączku. 3) Odparuj wodę z przesączu – zostanie sól.</p>
        <div class="tip">⚠️ Doświadczenia z ogrzewaniem rób tylko z dorosłym. W pracowni nie próbuj niczego na smak.</div>
      `,
      flashcards: [
        ['Roztwór', 'Mieszanina jednorodna, która powstaje np. po rozpuszczeniu cukru lub soli w wodzie'],
        ['Substancje rozpuszczalne w wodzie – przykłady', 'cukier, sól kuchenna, kawa rozpuszczalna'],
        ['Substancje nierozpuszczalne w wodzie – przykłady', 'piasek, kreda, olej, żwir'],
        ['Co przyspiesza rozpuszczanie?', 'mieszanie, rozdrobnienie, wyższa temperatura'],
        ['Mieszanina', 'Co najmniej dwie substancje zmieszane ze sobą; każda zachowuje swoje właściwości'],
        ['Mieszanina jednorodna', 'Składników nie rozróżnisz gołym okiem ani przez lupę, np. woda z solą'],
        ['Mieszanina niejednorodna', 'Składniki widać gołym okiem lub przez lupę, np. woda z piaskiem'],
        ['Sedymentacja', 'Opadanie cięższych cząstek na dno naczynia'],
        ['Dekantacja', 'Zlewanie cieczy znad osadu'],
        ['Sączenie', 'Przelewanie mieszaniny przez sączek; ciało stałe zostaje na sączku'],
        ['Odparowanie', 'Ogrzewanie roztworu, aż woda odparuje, a substancja rozpuszczona zostanie'],
        ['Krystalizacja', 'Wydzielanie się kryształów substancji z roztworu'],
      ],
      questions: [
        { id: '83ysyq', q: 'Która substancja rozpuszcza się w wodzie?', options: ['cukier', 'piasek', 'kreda', 'żwir'], answer: 0, explain: 'Cukier rozpuszcza się w wodzie. Piasek, kreda i żwir się nie rozpuszczają.' },
        { id: 'ldmvc9', q: 'Która substancja NIE rozpuszcza się w wodzie?', options: ['olej', 'sól kuchenna', 'cukier', 'kawa rozpuszczalna'], answer: 0, explain: 'Olej się nie rozpuszcza – zbiera się w warstwę na powierzchni wody.' },
        { id: 'pzew5h', q: 'Cukier wsypany do wody „zniknął”, ale woda jest słodka. Co się stało?', options: ['cukier rozpuścił się – rozpadł się na niewidoczne drobinki w wodzie', 'cukier wyparował', 'cukier zamienił się w wodę', 'cukier opadł na dno i jest niewidoczny'], answer: 0, explain: 'Cukier się rozpuścił: rozpadł się na drobinki tak małe, że ich nie widać. Dlatego woda jest słodka.' },
        { id: 'yfng2l', q: 'W którym przypadku kostka cukru rozpuści się najszybciej?', options: ['w ciepłej wodzie, gdy mieszasz', 'w zimnej wodzie, bez mieszania', 'w zimnej wodzie, gdy mieszasz', 'w ciepłej wodzie, bez mieszania'], answer: 0, explain: 'Rozpuszczanie przyspiesza zarówno mieszanie, jak i wyższa temperatura. Tu działają oba czynniki naraz.' },
        { id: 'dvxv0b', q: 'Co rozpuści się szybciej w takiej samej szklance wody?', options: ['łyżeczka cukru pudru', 'kostka cukru o takiej samej masie', 'oba tak samo szybko'], answer: 0, explain: 'Rozdrobnienie przyspiesza rozpuszczanie. Cukier puder to bardzo drobno zmielony cukier.' },
        { id: 'bjokle', q: 'Ola chce sprawdzić, czy temperatura wody wpływa na szybkość rozpuszczania. Co powinna zrobić?', options: ['wsypać tyle samo cukru do dwóch szklanek z taką samą ilością wody – ciepłej i zimnej – i nie mieszać żadnej', 'do ciepłej wody wsypać cukier puder, a do zimnej kostkę', 'ciepłą wodę mieszać, a zimnej nie', 'do ciepłej wody wsypać więcej cukru niż do zimnej'], answer: 0, explain: 'W doświadczeniu zmieniamy tylko jedną rzecz (tu temperaturę), a reszta musi być taka sama.' },
        { id: 'lbgclw', q: 'Która mieszanina jest jednorodna?', options: ['woda z solą', 'woda z piaskiem', 'woda z olejem', 'groch z kaszą'], answer: 0, explain: 'W wodzie z solą nie rozróżnisz składników ani gołym okiem, ani przez lupę – to mieszanina jednorodna.' },
        { id: 'qzjchx', q: 'Która mieszanina jest niejednorodna?', options: ['woda z piaskiem', 'woda z cukrem', 'woda z solą'], answer: 0, explain: 'Piasek widać w wodzie i opada na dno – to mieszanina niejednorodna.' },
        { id: 'sdmr8q', q: 'Jak najprościej oddzielić opiłki żelaza od piasku?', options: ['magnesem', 'przez odparowanie', 'przez rozpuszczenie w wodzie', 'przez krystalizację'], answer: 0, explain: 'Magnes przyciąga żelazo, a piasku nie – to sposób mechaniczny.' },
        { id: '7n9ohi', q: 'Odstawiasz szklankę wody z piaskiem i po chwili piasek leży na dnie. Jak nazywa się opadanie cząstek na dno?', options: ['sedymentacja', 'dekantacja', 'krystalizacja', 'odparowanie'], answer: 0, explain: 'Sedymentacja to opadanie cięższych cząstek na dno naczynia.' },
        { id: 'gig4a7', q: 'Ostrożne zlewanie wody znad piasku, który opadł na dno, to…', options: ['dekantacja', 'sedymentacja', 'sączenie', 'odparowanie'], answer: 0, explain: 'Dekantacja to zlewanie cieczy znad osadu.' },
        { id: 'wt19x2', q: 'Przelewasz wodę z kredą przez filtr do kawy. Kreda zostaje na filtrze. Ten sposób to…', options: ['sączenie', 'odparowanie', 'krystalizacja', 'rozpuszczanie'], answer: 0, explain: 'Sączenie (filtrowanie): ciało stałe zostaje na sączku, a ciecz przecieka.' },
        { id: '9mkc5w', q: 'Jak odzyskać sól z wody z solą?', options: ['odparować wodę', 'przesączyć przez bibułę', 'użyć magnesu', 'przesiać przez sito'], answer: 0, explain: 'Sól jest rozpuszczona, więc przecieka przez sączek. Gdy odparujemy wodę, sól zostanie.' },
        { id: '0qd7w3', q: 'Prawda czy fałsz?\nWodę z rozpuszczoną solą można rozdzielić, przelewając ją przez sączek.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Rozpuszczona sól przecieka przez sączek razem z wodą. Sączenie oddziela tylko to, co się nie rozpuściło, np. piasek.' },
        { id: 'uphlmw', q: 'Masz mieszaninę soli i piasku. W jakiej kolejności je rozdzielisz?', options: ['dodam wody i zamieszam → przesączę → odparuję wodę', 'odparuję → dodam wody → przesączę', 'przesączę suchą mieszaninę → dodam wody', 'użyję magnesu → odparuję'], answer: 0, explain: 'Sól rozpuści się w wodzie, piasek zostanie na sączku, a po odparowaniu wody z przesączu zostanie sól.' },
        { id: '16bzop', q: 'Na talerzyku z solanką po kilku dniach na dnie pojawiły się małe kryształki soli. Jak nazywa się to zjawisko?', options: ['krystalizacja', 'sedymentacja', 'dekantacja', 'sączenie'], answer: 0, explain: 'Krystalizacja to wydzielanie się kryształów substancji z roztworu, np. gdy woda powoli paruje.' },
        { id: 't5y958', q: 'Jak rozdzielić groch i kaszę jaglaną?', options: ['przesiać przez sito', 'odparować', 'przesączyć przez bibułę', 'rozpuścić w wodzie'], answer: 0, explain: 'Drobna kasza przejdzie przez oczka sita, a większy groch zostanie. To sposób mechaniczny.' },
        { id: 'qiw12c', q: 'Prawda czy fałsz?\nW mieszaninie każda substancja zachowuje swoje właściwości.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Dlatego mieszaninę można rozdzielić – np. magnes nadal przyciąga opiłki żelaza wymieszane z piaskiem.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'gestosc',
      name: 'Gęstość, tonięcie i pływanie',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 3 „Materia i jej przemiany w przyrodzie”, wym. 10 (pojęcie gęstości na podstawie modelu, zależność gęstości od temperatury i stanu skupienia – zwłaszcza woda i jej znaczenie w przyrodzie); dz. 4 „Organizmy i ekosystemy”, wym. 7 (tonięcie i pływanie ciał a gęstość, codzienne zastosowania, przystosowania organizmów do życia w wodzie, wpływ kształtu ciała na pływanie). Bez wzoru na gęstość i bez jednostek gęstości (fizyka kl. VII). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Co to jest gęstość?</h3>
        <p>Weź do ręki kostkę styropianu i kostkę żelaza tej samej wielkości. Żelazna jest dużo cięższa, bo w tej samej objętości mieści się więcej masy. Mówimy, że żelazo ma większą <b>gęstość</b>.</p>
        <p><b>Gęstość</b> mówi, ile masy mieści się w określonej objętości substancji. W modelu drobinowym: im ciaśniej i im cięższe drobiny są upakowane, tym większa gęstość.</p>
        <div class="tip">💡 Kilogram styropianu i kilogram żelaza ważą tyle samo – ale styropian zajmuje dużo więcej miejsca, bo ma mniejszą gęstość.</div>
        <h3>Tonie czy pływa?</h3>
        <ul>
          <li>Ciało o gęstości <b>większej</b> niż gęstość wody – <b>tonie</b> (kamień, gwóźdź, moneta).</li>
          <li>Ciało o gęstości <b>mniejszej</b> niż gęstość wody – <b>pływa</b> (korek, styropian, większość drewna, lód).</li>
          <li>Tak samo ciecze: olej ma mniejszą gęstość niż woda, więc zbiera się na jej powierzchni.</li>
        </ul>
        <h3>Kształt ma znaczenie</h3>
        <p>Kulka z plasteliny tonie. Ale gdy z tej samej plasteliny ulepisz <b>łódeczkę</b>, będzie pływać. W łódce jest dużo powietrza, więc cała łódka (plastelina razem z powietrzem w środku) jest „lżejsza” niż tyle samo wody. Dlatego pływają ogromne stalowe statki.</p>
        <h3>Woda słona i słodka</h3>
        <p>Słona woda ma większą gęstość niż słodka. Dlatego w morzu łatwiej się unosić niż w jeziorze. Jajko tonie w wodzie z kranu, ale wypływa w bardzo mocno osolonej wodzie.</p>
        <h3>Gęstość a temperatura i stan skupienia</h3>
        <ul>
          <li>Ciepłe powietrze ma mniejszą gęstość niż zimne – dlatego unosi się do góry (tak lata balon na ogrzane powietrze).</li>
          <li>Ciepła woda unosi się nad zimną – latem w jeziorze na powierzchni woda jest najcieplejsza.</li>
          <li><b>Woda jest wyjątkowa</b>: lód ma mniejszą gęstość niż woda w stanie ciekłym, dlatego pływa. Większość substancji ma w stanie stałym większą gęstość niż w ciekłym – woda nie.</li>
          <li>Woda ma największą gęstość w temperaturze ok. <b>4°C</b>. Zimą taka woda opada na dno jeziora, a lód tworzy się na górze. Lód działa jak przykrywka – jezioro nie zamarza do dna i ryby przeżywają zimę.</li>
        </ul>
        <h3>Przystosowania do życia w wodzie</h3>
        <ul>
          <li>Wiele ryb ma <b>pęcherz pławny</b> – worek wypełniony gazem. Napełniając go albo opróżniając, ryba unosi się albo opada bez wysiłku.</li>
          <li>Opływowy kształt ciała (ryby, foki) ułatwia poruszanie się w wodzie.</li>
          <li>Rośliny wodne (np. grzybienie, czyli lilie wodne) mają w liściach i łodygach dużo powietrza, więc ich liście unoszą się na wodzie.</li>
        </ul>
        <h3>Na co dzień</h3>
        <p>Kamizelka ratunkowa i koło ratunkowe są wypełnione lekkim materiałem albo powietrzem – zmniejszają gęstość „człowieka z kamizelką” i utrzymują go na wodzie.</p>
      `,
      flashcards: [
        ['Gęstość', 'Ile masy mieści się w określonej objętości substancji'],
        ['Kiedy ciało tonie w wodzie?', 'Gdy ma większą gęstość niż woda'],
        ['Kiedy ciało pływa po wodzie?', 'Gdy ma mniejszą gęstość niż woda'],
        ['Olej i woda w jednym naczyniu', 'Olej na górze – ma mniejszą gęstość'],
        ['Dlaczego pływa stalowy statek?', 'Dzięki kształtowi – w środku jest dużo powietrza'],
        ['Woda słona a słodka', 'Słona ma większą gęstość – łatwiej się w niej unosić'],
        ['Dlaczego lód pływa?', 'Ma mniejszą gęstość niż woda w stanie ciekłym'],
        ['Największa gęstość wody', 'W temperaturze ok. 4°C – taka woda opada na dno jeziora'],
        ['Dlaczego jeziora nie zamarzają do dna?', 'Lód tworzy się na górze i jak przykrywka chroni wodę pod spodem'],
        ['Pęcherz pławny', 'Worek z gazem u wielu ryb – pomaga unosić się i opadać'],
        ['Ciepłe powietrze', 'Ma mniejszą gęstość niż zimne – unosi się do góry'],
      ],
      questions: [
        { id: 'fus9yk', q: 'Co to jest gęstość?', options: ['ile masy mieści się w określonej objętości substancji', 'jak wysoko coś leży', 'jak szybko coś się rozpuszcza', 'jaką coś ma temperaturę'], answer: 0, explain: 'Gęstość mówi, ile masy „upchnięto” w danej objętości. Żelazo ma dużą gęstość, styropian – małą.' },
        { id: '7cpnyb', q: 'Masz dwie kostki tej samej wielkości: z żelaza i ze styropianu. Która ma większą gęstość?', options: ['żelazna', 'styropianowa', 'mają taką samą'], noShuffle: true, answer: 0, explain: 'W tej samej objętości żelazo ma dużo większą masę niż styropian, więc ma większą gęstość.' },
        { id: '7f197w', q: 'Kiedy przedmiot tonie w wodzie?', options: ['gdy ma większą gęstość niż woda', 'gdy ma mniejszą gęstość niż woda', 'gdy jest duży', 'gdy jest kolorowy'], answer: 0, explain: 'Tonie to, co ma większą gęstość niż woda. Wielkość przedmiotu nie decyduje – wielki pień drzewa pływa, a mały gwóźdź tonie.' },
        { id: '43m3fh', q: 'Który przedmiot będzie pływał po wodzie?', options: ['korek', 'gwóźdź', 'moneta', 'kamyk'], answer: 0, explain: 'Korek ma mniejszą gęstość niż woda, więc pływa. Gwóźdź, moneta i kamyk toną.' },
        { id: 'xd9b6f', q: 'Do szklanki z wodą wlano olej. Gdzie znajdzie się olej?', options: ['na powierzchni wody', 'na dnie', 'wymiesza się z wodą na stałe', 'zniknie'], answer: 0, explain: 'Olej ma mniejszą gęstość niż woda i nie miesza się z nią, więc zbiera się na górze.' },
        { id: 'u3a9gx', q: 'Kulka z plasteliny tonie. Co zrobić z tą samą plasteliną, żeby pływała?', options: ['ulepić z niej łódeczkę', 'zgnieść ją mocniej', 'podzielić na dwie kulki', 'pomalować ją'], answer: 0, explain: 'Łódeczka zamyka w sobie dużo powietrza. Kształt zmienia zdolność do pływania – tak pływają stalowe statki.' },
        { id: 'ksbdlw', q: 'Dlaczego ogromny stalowy statek nie tonie?', options: ['dzięki kształtowi – w kadłubie jest dużo powietrza', 'bo stal ma mniejszą gęstość niż woda', 'bo statek ciągle płynie', 'bo woda w morzu jest zimna'], answer: 0, explain: 'Stal sama tonie. Statek pływa, bo jego kadłub jest pusty w środku – stal razem z powietrzem w kadłubie jest „lżejsza” niż tyle samo wody.' },
        { id: 'sim7ar', q: 'W której wodzie łatwiej się unosić?', options: ['w słonej wodzie morskiej', 'w słodkiej wodzie w jeziorze', 'w obu tak samo'], noShuffle: true, answer: 0, explain: 'Słona woda ma większą gęstość niż słodka, więc mocniej utrzymuje ciało na powierzchni.' },
        { id: '3xiz45', q: 'Jajko tonie w wodzie z kranu. Co się stanie, gdy rozpuścisz w wodzie dużo soli?', options: ['jajko wypłynie', 'jajko pęknie', 'jajko zacznie się gotować', 'nic się nie zmieni'], answer: 0, explain: 'Bardzo słona woda ma większą gęstość niż jajko, więc jajko wypływa.' },
        { id: '3hfywp', q: 'Dlaczego lód pływa po wodzie?', options: ['ma mniejszą gęstość niż woda w stanie ciekłym', 'ma większą gęstość niż woda', 'jest bardzo zimny', 'jest twardy'], answer: 0, explain: 'Woda jest wyjątkowa: w stanie stałym (lód) ma mniejszą gęstość niż w stanie ciekłym. Dlatego lód unosi się na wodzie.' },
        { id: 'kg8i0j', q: 'W jakiej temperaturze woda ma największą gęstość?', options: ['ok. 4°C', '0°C', '100°C', '20°C'], answer: 0, explain: 'Najgęstsza jest woda o temperaturze ok. 4°C. Zimą zbiera się ona na dnie jezior.' },
        { id: 'erut07', q: 'Dlaczego ryby mogą przeżyć zimę w zamarzniętym jeziorze?', options: ['lód tworzy się na górze, a pod nim zostaje woda', 'ryby zamarzają i odmarzają wiosną', 'jezioro zamarza od dna', 'ryby przenoszą się do morza'], answer: 0, explain: 'Lód ma mniejszą gęstość niż woda, więc zostaje na górze i jak przykrywka chroni wodę pod spodem przed zamarznięciem.' },
        { id: 'cdf4w3', q: 'Do czego służy rybom pęcherz pławny?', options: ['pomaga unosić się i opadać w wodzie', 'służy do trawienia', 'chroni przed drapieżnikami', 'wytwarza ikrę'], answer: 0, explain: 'Pęcherz pławny to worek z gazem. Ryba zmienia ilość gazu i dzięki temu bez wysiłku unosi się albo opada.' },
        { id: '0ms0kk', q: 'Dlaczego liście grzybieni (lilii wodnych) unoszą się na wodzie?', options: ['mają w sobie dużo powietrza', 'są przyklejone do dna', 'są bardzo ciężkie', 'nie mają łodyg'], answer: 0, explain: 'Rośliny wodne mają w liściach i łodygach przestrzenie wypełnione powietrzem – to zmniejsza ich gęstość.' },
        { id: 'q0pdpo', q: 'Dlaczego balon na ogrzane powietrze unosi się do góry?', options: ['ciepłe powietrze ma mniejszą gęstość niż zimne', 'ciepłe powietrze ma większą gęstość niż zimne', 'balon jest przyciągany przez Słońce', 'balon nie ma masy'], answer: 0, explain: 'Po ogrzaniu powietrze rozszerza się, a jego gęstość maleje. Lżejsze, ciepłe powietrze unosi się nad zimnym.' },
        { id: 'kbu5uy', q: 'Jak działa kamizelka ratunkowa?', options: ['jest wypełniona lekkim materiałem albo powietrzem i utrzymuje człowieka na wodzie', 'ogrzewa wodę wokół człowieka', 'zwiększa masę człowieka', 'odpycha wodę magnesem'], answer: 0, explain: 'Lekki materiał albo powietrze w kamizelce sprawiają, że człowiek razem z kamizelką ma mniejszą gęstość niż woda.' },
        { id: 'wjilr3', q: 'Latem w jeziorze najcieplejsza woda jest…', options: ['przy powierzchni', 'przy dnie', 'wszędzie taka sama'], noShuffle: true, answer: 0, explain: 'Ciepła woda ma mniejszą gęstość niż zimna, więc zostaje na górze.' },
        { id: 'ht4nky', q: 'Prawda czy fałsz?\nDuże i ciężkie przedmioty zawsze toną, a małe i lekkie zawsze pływają.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Decyduje gęstość, nie wielkość. Ogromny pień drzewa pływa, a mała moneta tonie.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'uklad-sloneczny',
      name: 'Ziemia w Układzie Słonecznym',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 5 „Planeta Ziemia”, wym. 1 (planety i inne ciała niebieskie Układu Słonecznego, budowa Układu Słonecznego na podstawie modelu), wym. 2 (fazy Księżyca, zaćmienie Słońca i zaćmienie Księżyca), wym. 3 (ruch obrotowy i obiegowy Ziemi i ich konsekwencje – dzień i noc, doba, rok, pory roku; w uproszczeniu). Kolejność i podział planet, planety karłowate, czas obrotu i obiegu Ziemi, nachylenie osi, fazy Księżyca i warunki zaćmień – według materiałów Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl: „Czy Ziemia stoi w miejscu?”, „Z czego zbudowany jest Jowisz?”, „Co to jest zaćmienie Księżyca?”, „Zaćmienia Słońca i Księżyca”), sprawdzone 2.11.2026. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Układ Słoneczny</h3>
        <p>W środku <b>Układu Słonecznego</b> jest <b>Słońce</b> – <b>gwiazda</b>, czyli ogromna, gorąca kula gazów, która <b>świeci własnym światłem</b>. Wokół Słońca krąży <b>8 planet</b>. Planety nie świecą same – <b>odbijają światło Słońca</b>.</p>
        <p>Planety po kolei, od najbliższej Słońcu:</p>
        <table>
          <tr><th>Planety skaliste (bliżej Słońca, mniejsze)</th><th>Gazowe olbrzymy (dalej od Słońca, ogromne)</th></tr>
          <tr><td>1. Merkury · 2. Wenus · 3. <b>Ziemia</b> · 4. Mars</td><td>5. <b>Jowisz</b> – największa planeta · 6. Saturn · 7. Uran · 8. Neptun</td></tr>
        </table>
        <div class="tip">💡 Kolejność planet zapamiętasz zdaniem: <b>M</b>ama <b>W</b>iesia <b>Z</b>jada <b>M</b>archewkę, <b>J</b>aś <b>S</b>zybko <b>U</b>nosi <b>N</b>ogi (Merkury, Wenus, Ziemia, Mars, Jowisz, Saturn, Uran, Neptun).</div>
        <h3>Inne ciała niebieskie</h3>
        <ul>
          <li><b>Księżyce</b> – krążą wokół planet. Ziemia ma jeden – <b>Księżyc</b>.</li>
          <li><b>Planetoidy</b> – małe skaliste ciała. Najwięcej jest ich w <b>pasie planetoid</b> między Marsem a Jowiszem.</li>
          <li><b>Planety karłowate</b> – np. <b>Pluton</b>. Do 2006 r. Pluton był uznawany za dziewiątą planetę; dziś jest <b>planetą karłowatą</b>. Krąży daleko, za Neptunem.</li>
        </ul>
        <h3>Ruch obrotowy Ziemi – dzień i noc</h3>
        <p>Ziemia obraca się wokół własnej <b>osi</b> – wyobrażonej linii przechodzącej przez biegun północny i południowy. Obraca się <b>z zachodu na wschód</b>. Jeden pełny obrót trwa prawie <b>24 godziny</b> – to <b>doba</b>.</p>
        <p>Słońce oświetla zawsze tylko połowę Ziemi. Na oświetlonej połowie jest <b>dzień</b>, na drugiej – <b>noc</b>. Dlatego, że Ziemia się obraca, nam się wydaje, że to Słońce wędruje po niebie ze wschodu na zachód.</p>
        <h3>Ruch obiegowy Ziemi – rok i pory roku</h3>
        <p>Ziemia krąży też wokół Słońca. Jedno okrążenie trwa około <b>365 dni i ćwierć doby</b> – to <b>rok</b>. Z tych „ćwiartek” co cztery lata zbiera się dodatkowy dzień: rok <b>przestępny</b> ma 366 dni (29 lutego).</p>
        <p>Oś Ziemi jest <b>nachylona</b>. Dlatego przez część roku silniej oświetlona jest północna połowa Ziemi (tam leży Polska), a przez część roku – południowa. Gdy u nas jest <b>lato</b>, Słońce jest wysoko, dzień jest długi i jest ciepło. Zimą Słońce jest nisko, dzień jest krótki i jest zimno. Tak powstają <b>pory roku</b>.</p>
        <h3>Fazy Księżyca</h3>
        <p>Księżyc krąży wokół Ziemi. Nie świeci sam – odbija światło Słońca. Słońce zawsze oświetla połowę Księżyca, ale z Ziemi widzimy raz większą, raz mniejszą część tej oświetlonej połowy. Te zmiany wyglądu to <b>fazy Księżyca</b>:</p>
        <table>
          <tr><th>Faza</th><th>Co widać (z Polski)</th></tr>
          <tr><td><b>nów</b></td><td>Księżyca nie widać – jest między Ziemią a Słońcem</td></tr>
          <tr><td><b>pierwsza kwadra</b></td><td>oświetlona <b>prawa</b> połowa tarczy; Księżyca przybywa</td></tr>
          <tr><td><b>pełnia</b></td><td>oświetlona cała tarcza</td></tr>
          <tr><td><b>ostatnia kwadra</b></td><td>oświetlona <b>lewa</b> połowa tarczy; Księżyca ubywa</td></tr>
        </table>
        <p>Od nowiu do następnego nowiu mija około <b>29,5 dnia</b>, czyli prawie miesiąc.</p>
        <div class="tip">💡 Trik: gdy do Księżyca da się dorysować kreskę i wyjdzie litera <b>P</b> – Księżyca <b>przybywa</b>. Gdy wygląda jak litera <b>C</b> – <b>cofa się</b> (ubywa).</div>
        <h3>Zaćmienia</h3>
        <table>
          <tr><th></th><th>Zaćmienie Słońca</th><th>Zaćmienie Księżyca</th></tr>
          <tr><td>ustawienie w jednej linii</td><td>Słońce – <b>Księżyc</b> – Ziemia</td><td>Słońce – <b>Ziemia</b> – Księżyc</td></tr>
          <tr><td>co się dzieje</td><td>Księżyc zasłania Słońce</td><td>Księżyc wchodzi w cień Ziemi, ciemnieje i często robi się czerwonawy</td></tr>
          <tr><td>kiedy może być</td><td>tylko w czasie <b>nowiu</b> (ale nie przy każdym)</td><td>tylko w czasie <b>pełni</b> (ale nie przy każdej)</td></tr>
        </table>
        <div class="tip">⚠️ Nigdy nie patrz na Słońce gołym okiem ani przez lornetkę – także podczas zaćmienia. Możesz trwale uszkodzić wzrok. Zaćmienie Słońca ogląda się tylko przez specjalne okulary do obserwacji Słońca.</div>
      `,
      flashcards: [
        ['Słońce', 'Gwiazda w środku Układu Słonecznego; świeci własnym światłem'],
        ['Ile planet krąży wokół Słońca?', '8'],
        ['Kolejność planet od Słońca', 'Merkury, Wenus, Ziemia, Mars, Jowisz, Saturn, Uran, Neptun'],
        ['Największa planeta Układu Słonecznego', 'Jowisz'],
        ['Planety skaliste', 'Merkury, Wenus, Ziemia, Mars'],
        ['Gazowe olbrzymy', 'Jowisz, Saturn, Uran, Neptun'],
        ['Pluton', 'Planeta karłowata (do 2006 r. uznawany za planetę)'],
        ['Ruch obrotowy Ziemi', 'Obrót wokół własnej osi z zachodu na wschód; trwa prawie 24 h (doba); skutek: dzień i noc'],
        ['Ruch obiegowy Ziemi', 'Okrążanie Słońca; trwa ok. 365 dni i ćwierć doby (rok); z nachyleniem osi daje pory roku'],
        ['Rok przestępny', '366 dni – ma 29 lutego; zdarza się co cztery lata'],
        ['Fazy Księżyca', 'nów → pierwsza kwadra → pełnia → ostatnia kwadra; cykl ok. 29,5 dnia'],
        ['Zaćmienie Słońca', 'Księżyc między Słońcem a Ziemią zasłania Słońce; tylko w czasie nowiu'],
        ['Zaćmienie Księżyca', 'Ziemia między Słońcem a Księżycem; Księżyc w cieniu Ziemi; tylko w czasie pełni'],
      ],
      questions: [
        { id: 'biwkmc', q: 'Co znajduje się w środku Układu Słonecznego?', options: ['Słońce', 'Ziemia', 'Księżyc', 'Jowisz'], answer: 0, explain: 'W środku jest Słońce – gwiazda. Wokół niego krążą planety, w tym Ziemia.' },
        { id: 'vcm3ap', q: 'Ile planet krąży wokół Słońca?', options: ['8', '9', '7', '12'], answer: 0, explain: 'Planet jest 8: Merkury, Wenus, Ziemia, Mars, Jowisz, Saturn, Uran, Neptun. Pluton jest dziś planetą karłowatą.' },
        { id: 'ex5orw', q: 'Która planeta jest najbliżej Słońca?', options: ['Merkury', 'Wenus', 'Ziemia', 'Neptun'], answer: 0, explain: 'Kolejność od Słońca: Merkury, Wenus, Ziemia, Mars… Najbliżej jest Merkury.' },
        { id: 'g3af86', q: 'Która planeta jest największa w Układzie Słonecznym?', options: ['Jowisz', 'Ziemia', 'Saturn', 'Mars'], answer: 0, explain: 'Największa jest Jowisz – gazowy olbrzym, piąta planeta od Słońca.' },
        { id: 'zabwoo', q: 'Którą planetą od Słońca jest Ziemia?', options: ['trzecią', 'pierwszą', 'czwartą', 'piątą'], answer: 0, explain: 'Merkury (1), Wenus (2), Ziemia (3).' },
        { id: 'lchzjn', q: 'Która planeta NIE jest planetą skalistą?', options: ['Saturn', 'Merkury', 'Wenus', 'Mars'], answer: 0, explain: 'Planety skaliste to Merkury, Wenus, Ziemia i Mars. Saturn to gazowy olbrzym.' },
        { id: 'q54wkg', q: 'Czym jest dziś Pluton?', options: ['planetą karłowatą', 'dziewiątą planetą', 'gwiazdą', 'księżycem Ziemi'], answer: 0, explain: 'Do 2006 r. Pluton był uznawany za planetę. Dziś zalicza się go do planet karłowatych.' },
        { id: 'hvuqth', q: 'Prawda czy fałsz?\nPlanety świecą własnym światłem, tak jak Słońce.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Własnym światłem świeci Słońce (gwiazda). Planety i Księżyc odbijają światło Słońca.' },
        { id: 'dbuyv0', q: 'Co jest skutkiem ruchu obrotowego Ziemi?', options: ['dzień i noc', 'pory roku', 'fazy Księżyca', 'zaćmienie Słońca'], answer: 0, explain: 'Ziemia obraca się wokół osi, więc raz jesteśmy po stronie oświetlonej (dzień), a raz po ciemnej (noc).' },
        { id: '2rwua2', q: 'Ile trwa jeden pełny obrót Ziemi wokół własnej osi?', options: ['prawie 24 godziny', 'około tygodnia', 'około miesiąca', 'około roku'], answer: 0, explain: 'Jeden obrót trwa prawie 24 godziny – to doba.' },
        { id: 'm3426j', q: 'W którą stronę obraca się Ziemia?', options: ['z zachodu na wschód', 'ze wschodu na zachód', 'z północy na południe', 'z południa na północ'], answer: 0, explain: 'Ziemia obraca się z zachodu na wschód. Dlatego wydaje nam się, że Słońce wędruje po niebie ze wschodu na zachód.' },
        { id: 'whd3z8', q: 'Ile mniej więcej trwa jedno okrążenie Ziemi wokół Słońca?', options: ['około 365 dni', 'około 24 godzin', 'około 29,5 dnia', 'około 7 dni'], answer: 0, explain: 'Okrążenie Słońca trwa około 365 dni i ćwierć doby – to rok.' },
        { id: 'smjujh', q: 'Dlaczego na Ziemi są pory roku?', options: ['bo Ziemia krąży wokół Słońca, a jej oś jest nachylona', 'bo Ziemia obraca się wokół osi', 'bo Księżyc zasłania Słońce', 'bo Słońce raz świeci mocniej, a raz słabiej'], answer: 0, explain: 'Przez nachylenie osi w czasie ruchu obiegowego raz silniej oświetlona jest półkula północna, a raz południowa.' },
        { id: 'vqt33i', q: 'Ile dni ma rok przestępny?', options: ['366', '365', '364', '360'], answer: 0, explain: 'Rok przestępny ma dodatkowy dzień – 29 lutego – więc ma 366 dni.' },
        { id: '4r53bj', q: 'W której fazie Księżyca w ogóle go nie widać?', options: ['w nowiu', 'w pełni', 'w pierwszej kwadrze', 'w ostatniej kwadrze'], answer: 0, explain: 'W czasie nowiu Księżyc jest między Ziemią a Słońcem i zwraca do nas swoją nieoświetloną stronę.' },
        {
          id: '8pmjj8',
          q: 'Patrzysz na Księżyc z Polski. Oświetlona jest jego prawa połowa. Jaka to faza?',
          svg: `<svg viewBox="0 0 300 140" role="img" aria-label="Tarcza Księżyca: prawa połowa jasna, lewa ciemna">
      <circle cx="150" cy="70" r="55" class="bg ln"/>
      <path d="M150,15 A55,55 0 0 1 150,125 Z" class="f4 s4"/>
      <circle cx="150" cy="70" r="55" class="ln"/>
    </svg>`,
          options: ['pierwsza kwadra', 'ostatnia kwadra', 'pełnia', 'nów'],
          answer: 0,
          explain: 'Gdy oświetlona jest prawa połowa, do Księżyca da się dorysować kreskę i wychodzi „P” – przybywa. To pierwsza kwadra.',
        },
        { id: 'nu16jl', q: 'Ile mniej więcej dni mija od jednego nowiu do następnego?', options: ['około 29,5 dnia', 'około 7 dni', 'około 365 dni', 'około 24 godzin'], answer: 0, explain: 'Pełny cykl faz Księżyca trwa około 29,5 dnia – prawie miesiąc.' },
        { id: 'oktkky', q: 'Kiedy dochodzi do zaćmienia Słońca?', options: ['gdy Księżyc znajdzie się między Słońcem a Ziemią i zasłoni Słońce', 'gdy Ziemia znajdzie się między Słońcem a Księżycem', 'gdy Słońce schowa się za chmurami', 'gdy na Ziemi jest noc'], answer: 0, explain: 'Przy zaćmieniu Słońca ustawienie jest takie: Słońce – Księżyc – Ziemia. Może się to zdarzyć tylko w czasie nowiu.' },
        { id: 'bkz2n9', q: 'Podczas zaćmienia Księżyca…', options: ['Księżyc wchodzi w cień Ziemi', 'Księżyc zasłania Słońce', 'Słońce zasłania Księżyc', 'Ziemia chowa się w cieniu Księżyca'], answer: 0, explain: 'Przy zaćmieniu Księżyca Ziemia jest między Słońcem a Księżycem, a Księżyc wchodzi w jej cień. Może się to zdarzyć tylko w czasie pełni.' },
        { id: 'g4yzip', q: 'Jak bezpiecznie oglądać zaćmienie Słońca?', options: ['tylko przez specjalne okulary do obserwacji Słońca', 'gołym okiem, bo Słońce jest zasłonięte', 'przez lornetkę', 'przez zwykłe okulary przeciwsłoneczne'], answer: 0, explain: 'Patrzenie na Słońce gołym okiem, przez lornetkę czy zwykłe okulary przeciwsłoneczne może trwale uszkodzić wzrok.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'metale',
      name: 'Metale, stopy i przewodzenie ciepła',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 3 „Materia i jej przemiany w przyrodzie”, wym. 7 (właściwości metali i niemetali: stan skupienia, barwa, połysk, przewodnictwo elektryczne i cieplne), wym. 8 (metal a stop metalu, korozja stali, zabezpieczanie przed korozją), wym. 11 (przepływ ciepła, przewodniki i izolatory ciepła, izolacja cieplna w przyrodzie i życiu codziennym). Skład stopów (brąz – miedź i cyna, mosiądz – miedź i cynk, stal – żelazo z węglem), warunki rdzewienia (woda i tlen, sól przyspiesza) i sposoby ochrony przed korozją – według materiałów ZPE (zpe.gov.pl), sprawdzone 2.11.2026. Pierwiastki i układ okresowy (wym. 1) – w kolejnych klasach. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Metale i niemetale</h3>
        <table>
          <tr><th></th><th>Metale</th><th>Niemetale</th></tr>
          <tr><td>przykłady</td><td>żelazo, miedź, glin (aluminium), cynk, cyna, srebro, złoto, rtęć</td><td>tlen, azot, siarka, węgiel</td></tr>
          <tr><td>stan skupienia</td><td>prawie wszystkie <b>stałe</b>; wyjątek – <b>rtęć</b> jest cieczą</td><td>stałe (siarka, węgiel) albo <b>gazy</b> (tlen, azot); jeden – brom – jest cieczą</td></tr>
          <tr><td>barwa i połysk</td><td>zwykle srebrzystoszare (miedź – czerwonobrązowa, złoto – żółte); mają <b>metaliczny połysk</b></td><td>różne barwy (siarka – żółta, węgiel – czarny); zwykle <b>bez połysku</b></td></tr>
          <tr><td>prąd i ciepło</td><td><b>dobrze przewodzą</b></td><td>zwykle <b>nie przewodzą</b> (wyjątek: grafit w ołówku przewodzi prąd)</td></tr>
          <tr><td>inne</td><td>są <b>kowalne</b> – można je kuć, wyginać, rozklepywać</td><td>stałe niemetale są zwykle <b>kruche</b> – kruszą się</td></tr>
        </table>
        <div class="tip">💡 Dlatego przewody elektryczne robi się z miedzi, a garnki – z metalu.</div>
        <h3>Stopy metali</h3>
        <p><b>Stop</b> powstaje, gdy metal stopi się (rozgrzeje do postaci cieczy) razem z innym metalem albo z niemetalem (np. węglem), a potem całość zastygnie. Stop często jest <b>twardszy</b> i <b>odporniejszy</b> niż czysty metal.</p>
        <table>
          <tr><th>Stop</th><th>Z czego</th><th>Zastosowanie</th></tr>
          <tr><td><b>stal</b></td><td>żelazo + węgiel</td><td>mosty, szyny, gwoździe, narzędzia, karoserie</td></tr>
          <tr><td><b>stal nierdzewna</b></td><td>stal z dodatkiem chromu i niklu</td><td>sztućce, zlewy, garnki</td></tr>
          <tr><td><b>brąz</b></td><td>miedź + cyna</td><td>pomniki, dzwony, medale</td></tr>
          <tr><td><b>mosiądz</b></td><td>miedź + cynk</td><td>klamki, krany, instrumenty dęte blaszane (np. trąbka)</td></tr>
        </table>
        <h3>Korozja – metal się niszczy</h3>
        <p><b>Korozja</b> to niszczenie metali pod wpływem otoczenia. Korozja żelaza i stali to <b>rdzewienie</b>. Żelazo rdzewieje, gdy ma dostęp do <b>wody</b> (wilgoci) i <b>tlenu</b> (powietrza). <b>Sól</b> przyspiesza rdzewienie – dlatego zimą, na posypanych solą drogach, samochody szybciej rdzewieją.</p>
        <p><b>Doświadczenie:</b> trzy stalowe gwoździe – w suchym słoiku, w wodzie z kranu i w wodzie z solą. Po kilku dniach: w suchym słoiku gwóźdź jest prawie bez zmian, w wodzie – zardzewiały, w słonej wodzie – najbardziej zardzewiały.</p>
        <p><b>Jak chronić metal przed korozją?</b></p>
        <ul>
          <li><b>malowanie</b> farbą (np. płoty, mosty),</li>
          <li><b>smarowanie</b> olejem albo smarem (np. łańcuch roweru),</li>
          <li><b>pokrywanie innym metalem</b> – np. cynkiem (<b>cynkowanie</b> – rynny, siatki ogrodzeniowe) albo chromem,</li>
          <li>używanie <b>stali nierdzewnej</b>,</li>
          <li>trzymanie metalowych rzeczy w <b>suchym</b> miejscu, wycieranie do sucha.</li>
        </ul>
        <h3>Przepływ ciepła</h3>
        <p>Ciepło zawsze przepływa z ciała <b>cieplejszego</b> do <b>chłodniejszego</b>, aż ich temperatury się wyrównają. Gorąca herbata stygnie, bo oddaje ciepło powietrzu. Łyżeczka w herbacie się nagrzewa, bo dostaje ciepło od herbaty.</p>
        <table>
          <tr><th>Dobre przewodniki ciepła</th><th>Izolatory ciepła (słabo przewodzą)</th></tr>
          <tr><td>metale: miedź, glin, żelazo, stal</td><td>drewno, plastik, styropian, wełna, pierze, powietrze</td></tr>
          <tr><td>garnek, kaloryfer, patelnia</td><td>uchwyt garnka, rękawica kuchenna, termos, ocieplenie domu</td></tr>
        </table>
        <p><b>Izolacja cieplna</b> zatrzymuje ciepło. W przyrodzie chronią przed zimnem <b>futro</b> ssaków, <b>pióra i puch</b> ptaków, gruba warstwa <b>tłuszczu</b> (np. u fok) i <b>pokrywa śnieżna</b>, która chroni glebę i rośliny przed mrozem. Ludzie ocieplają domy styropianem albo wełną mineralną i noszą zimą kilka warstw ubrań – między nimi jest powietrze, które słabo przewodzi ciepło.</p>
        <div class="tip">⚠️ Metalowa łyżka w gorącej zupie szybko się nagrzewa – możesz się oparzyć. Drewniana zostaje chłodna.</div>
      `,
      flashcards: [
        ['Metale – przykłady', 'żelazo, miedź, glin (aluminium), cynk, cyna, srebro, złoto, rtęć'],
        ['Właściwości metali', 'metaliczny połysk, dobrze przewodzą prąd i ciepło, są kowalne; prawie wszystkie stałe'],
        ['Jedyny metal ciekły w temperaturze pokojowej', 'rtęć'],
        ['Niemetale – przykłady', 'tlen, azot (gazy), siarka, węgiel (ciała stałe)'],
        ['Właściwości niemetali', 'zwykle bez połysku, nie przewodzą prądu i ciepła, stałe są kruche'],
        ['Stop metali', 'Metal stopiony razem z innym metalem lub niemetalem i zastygły; zwykle twardszy i odporniejszy'],
        ['Stal', 'stop żelaza z węglem'],
        ['Brąz', 'stop miedzi z cyną'],
        ['Mosiądz', 'stop miedzi z cynkiem'],
        ['Korozja', 'Niszczenie metali pod wpływem otoczenia; korozja żelaza to rdzewienie'],
        ['Co jest potrzebne, żeby żelazo rdzewiało?', 'woda (wilgoć) i tlen (powietrze); sól przyspiesza rdzewienie'],
        ['Ochrona przed korozją', 'malowanie, smarowanie, cynkowanie lub chromowanie, stal nierdzewna, trzymanie w suchym miejscu'],
        ['Kierunek przepływu ciepła', 'od ciała cieplejszego do chłodniejszego, aż temperatury się wyrównają'],
        ['Izolatory ciepła – przykłady', 'drewno, plastik, styropian, wełna, pierze, powietrze'],
        ['Izolacja cieplna w przyrodzie', 'futro, pióra i puch, tłuszcz, pokrywa śnieżna'],
      ],
      questions: [
        { id: 'rgh2h0', q: 'Która substancja jest metalem?', options: ['miedź', 'siarka', 'tlen', 'węgiel'], answer: 0, explain: 'Miedź to metal – ma połysk i dobrze przewodzi prąd. Siarka, tlen i węgiel to niemetale.' },
        { id: '05a3nz', q: 'Która substancja jest niemetalem?', options: ['siarka', 'żelazo', 'cynk', 'srebro'], answer: 0, explain: 'Siarka to żółty, kruchy niemetal bez połysku. Żelazo, cynk i srebro to metale.' },
        { id: 'jfu12m', q: 'Który metal w temperaturze pokojowej jest cieczą?', options: ['rtęć', 'żelazo', 'miedź', 'glin'], answer: 0, explain: 'Prawie wszystkie metale są stałe. Wyjątkiem jest rtęć – jest cieczą.' },
        { id: 'jdz9bm', q: 'Dlaczego przewody elektryczne robi się z miedzi?', options: ['bo miedź dobrze przewodzi prąd', 'bo miedź jest kruchą substancją', 'bo miedź jest gazem', 'bo miedź nie przewodzi prądu'], answer: 0, explain: 'Metale dobrze przewodzą prąd elektryczny, a miedź – bardzo dobrze.' },
        { id: 'o3j68w', q: 'Która cecha jest typowa dla metali?', options: ['metaliczny połysk', 'kruchość', 'brak przewodzenia ciepła', 'w większości są gazami'], answer: 0, explain: 'Metale mają połysk, dobrze przewodzą prąd i ciepło i są kowalne. Kruchość jest typowa dla stałych niemetali.' },
        { id: '842i25', q: 'Stop metali to…', options: ['metal stopiony razem z innym metalem lub niemetalem, który potem zastygł', 'zardzewiały metal', 'metal w stanie ciekłym', 'czysty metal bez domieszek'], answer: 0, explain: 'Stop powstaje po stopieniu metalu z innym metalem (lub np. z węglem) i zastygnięciu. Ma często lepsze właściwości niż czysty metal.' },
        { id: 'y8xjes', q: 'Z czego składa się brąz?', options: ['z miedzi i cyny', 'z żelaza i węgla', 'z miedzi i cynku', 'ze złota i srebra'], answer: 0, explain: 'Brąz to stop miedzi z cyną. Mosiądz – miedzi z cynkiem, a stal – żelaza z węglem.' },
        { id: 'p5znct', q: 'Stal to stop…', options: ['żelaza z węglem', 'miedzi z cyną', 'miedzi z cynkiem', 'glinu z tlenem'], answer: 0, explain: 'Stal to stop żelaza z węglem. Jest twardsza i wytrzymalsza niż czyste żelazo.' },
        { id: 'nh5ngu', q: 'Z którego stopu robi się trąbki i klamki?', options: ['z mosiądzu', 'z brązu', 'ze stali', 'z rtęci'], answer: 0, explain: 'Mosiądz (miedź + cynk) to stop, z którego robi się m.in. klamki, krany i instrumenty dęte blaszane.' },
        { id: 'z15ibw', q: 'Co jest potrzebne, żeby żelazny gwóźdź zardzewiał?', options: ['woda i tlen', 'tylko suche powietrze', 'tylko ciemność', 'wysoka temperatura i brak powietrza'], answer: 0, explain: 'Żelazo rdzewieje, gdy ma dostęp do wody (wilgoci) i tlenu z powietrza.' },
        {
          id: '2a4gks',
          q: 'Trzy takie same stalowe gwoździe zostawiono na tydzień w słoikach. W którym gwóźdź zardzewieje najbardziej?',
          svg: `<svg viewBox="0 0 360 190" role="img" aria-label="Trzy słoiki z gwoździami. A – suchy słoik bez wody. B – woda z kranu. C – woda z solą.">
      <rect x="20" y="40" width="90" height="120" rx="10" class="bg ln"/>
      <rect x="135" y="40" width="90" height="120" rx="10" class="bg ln"/>
      <rect x="250" y="40" width="90" height="120" rx="10" class="bg ln"/>
      <rect x="137" y="90" width="86" height="68" rx="8" class="f1"/>
      <rect x="252" y="90" width="86" height="68" rx="8" class="f1"/>
      <line x1="65" y1="70" x2="65" y2="150" class="ln sw"/>
      <line x1="180" y1="70" x2="180" y2="150" class="ln sw"/>
      <line x1="295" y1="70" x2="295" y2="150" class="ln sw"/>
      <line x1="57" y1="70" x2="73" y2="70" class="ln sw"/>
      <line x1="172" y1="70" x2="188" y2="70" class="ln sw"/>
      <line x1="287" y1="70" x2="303" y2="70" class="ln sw"/>
      <text x="65" y="28" class="tx-b" text-anchor="middle">A</text>
      <text x="180" y="28" class="tx-b" text-anchor="middle">B</text>
      <text x="295" y="28" class="tx-b" text-anchor="middle">C</text>
      <text x="65" y="182" class="tx-s" text-anchor="middle">sucho</text>
      <text x="180" y="182" class="tx-s" text-anchor="middle">woda z kranu</text>
      <text x="295" y="182" class="tx-s" text-anchor="middle">woda z solą</text>
    </svg>`,
          options: ['C – w wodzie z solą', 'B – w wodzie z kranu', 'A – w suchym słoiku'],
          answer: 0,
          explain: 'Do rdzewienia potrzebne są woda i tlen, a sól je przyspiesza. W suchym słoiku gwóźdź prawie się nie zmieni.',
        },
        { id: 'cxz8dd', q: 'Dlaczego zimą samochody na solonych drogach szybciej rdzewieją?', options: ['bo sól przyspiesza rdzewienie', 'bo zimą jest mniej tlenu', 'bo mróz zamienia stal w rdzę', 'bo śnieg jest metalem'], answer: 0, explain: 'Woda z rozpuszczoną solą przyspiesza korozję stali.' },
        { id: 'lic8kf', q: 'Który sposób NIE chroni metalu przed korozją?', options: ['zostawianie go mokrego na deszczu', 'malowanie farbą', 'smarowanie olejem', 'pokrycie cynkiem'], answer: 0, explain: 'Wilgoć sprzyja rdzewieniu. Farba, olej i warstwa cynku odcinają metal od wody i powietrza.' },
        { id: 'kv7bge', q: 'Dlaczego łańcuch roweru smaruje się olejem?', options: ['olej chroni go przed wodą i rdzą', 'olej sprawia, że łańcuch przewodzi prąd', 'olej zamienia stal w mosiądz', 'olej ogrzewa łańcuch'], answer: 0, explain: 'Warstwa oleju lub smaru odcina metal od wody i powietrza, więc łańcuch nie rdzewieje (i lepiej się obraca).' },
        { id: 'dnk6j9', q: 'W którą stronę płynie ciepło?', options: ['od ciała cieplejszego do chłodniejszego', 'od ciała chłodniejszego do cieplejszego', 'zawsze z dołu do góry', 'ciepło nie płynie'], answer: 0, explain: 'Ciepło przepływa od cieplejszego do chłodniejszego, aż temperatury się wyrównają – np. gorąca herbata stygnie.' },
        { id: 'fbj6lr', q: 'Która łyżka szybciej nagrzeje się w gorącej zupie?', options: ['metalowa', 'drewniana', 'plastikowa'], answer: 0, explain: 'Metale dobrze przewodzą ciepło. Drewno i plastik to izolatory – nagrzewają się wolno.' },
        { id: 'kl95qm', q: 'Który materiał jest dobrym izolatorem ciepła?', options: ['styropian', 'miedź', 'glin', 'stal'], answer: 0, explain: 'Styropian słabo przewodzi ciepło – dlatego ociepla się nim domy. Miedź, glin i stal to dobre przewodniki ciepła.' },
        { id: '4m0pqc', q: 'Dlaczego uchwyty garnków robi się często z plastiku albo drewna?', options: ['bo słabo przewodzą ciepło i nie parzą', 'bo dobrze przewodzą prąd', 'bo nie rdzewieją w wodzie z solą', 'bo są cięższe od metalu'], answer: 0, explain: 'Plastik i drewno to izolatory ciepła – uchwyt zostaje chłodny, choć garnek jest gorący.' },
        { id: '0txyem', q: 'Co chroni rośliny i glebę przed mrozem zimą?', options: ['pokrywa śnieżna', 'silny wiatr', 'bezchmurne niebo', 'lód na rzece'], answer: 0, explain: 'Śnieg zawiera dużo powietrza i słabo przewodzi ciepło – działa jak kołdra.' },
        { id: 'oq4n91', q: 'Prawda czy fałsz?\nGęste futro i puch chronią zwierzęta przed utratą ciepła.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Między włosami i piórami jest powietrze, które słabo przewodzi ciepło – to naturalna izolacja.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sily',
      name: 'Grawitacja, tarcie i opór powietrza',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 5 „Planeta Ziemia”, wym. 5 (pomiar masy obiektów, działanie siły grawitacji ziemskiej), wym. 21 (zależność siły tarcia od różnych czynników, przykłady zmniejszania i zwiększania tarcia w przyrodzie); dz. 4 „Organizmy i ekosystemy”, wym. 3 (wspólne cechy organizmów zdolnych do lotu, zależność oporu powietrza od różnych czynników, zwiększanie i zmniejszanie oporu powietrza w przyrodzie). Bez jednostek siły i siłomierza (fizyka kl. VII). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Masa i jej pomiar</h3>
        <p><b>Masa</b> mówi, ile jest substancji w danym ciele. Mierzymy ją <b>wagą</b> (kuchenną, łazienkową, sklepową) w gramach (g), dekagramach (dag), kilogramach (kg) i tonach (t).</p>
        <h3>Grawitacja</h3>
        <p>Ziemia <b>przyciąga</b> wszystkie ciała – ciebie, piłkę, deszcz, Księżyc. To przyciąganie nazywamy <b>siłą grawitacji</b> (siłą ciężkości).</p>
        <ul>
          <li>Dzięki grawitacji upuszczony przedmiot spada <b>w dół</b>, a rzucona piłka wraca na ziemię.</li>
          <li>Grawitacja sprawia, że woda w rzekach płynie z wyższych miejsc w niższe, a krople deszczu spadają na ziemię.</li>
          <li>Grawitacja utrzymuje nas na powierzchni Ziemi – po każdej stronie globu „w dół” oznacza w stronę środka Ziemi.</li>
          <li>Księżyc przyciąga słabiej niż Ziemia – ok. 6 razy. Astronauta ma na Księżycu taką samą masę, ale może skakać dużo wyżej.</li>
        </ul>
        <h3>Tarcie</h3>
        <p><b>Tarcie</b> to siła, która <b>utrudnia przesuwanie</b> się jednego ciała po drugim. Działa przeciwnie do kierunku ruchu – dlatego toczona piłka w końcu się zatrzymuje.</p>
        <p>Tarcie zależy od:</p>
        <ul>
          <li><b>rodzaju powierzchni</b> – po szorstkiej (dywan, asfalt) jest większe niż po gładkiej (lód, szkło),</li>
          <li><b>nacisku</b> – im mocniej ciało naciska na podłoże (np. im cięższe pudło), tym trudniej je przesunąć.</li>
        </ul>
        <table>
          <tr><th>Zwiększamy tarcie</th><th>Zmniejszamy tarcie</th></tr>
          <tr><td>sypiemy piasek na oblodzony chodnik</td><td>smarujemy olejem łańcuch roweru i zawiasy</td></tr>
          <tr><td>buty z bieżnikiem, opony zimowe</td><td>łyżwy i narty – gładkie płozy</td></tr>
          <tr><td>szczecinki dżdżownicy zaczepiają się o glebę</td><td>śluz na ciele dżdżownicy i ślimaka</td></tr>
          <tr><td></td><td>śliska skóra ryb pokryta śluzem</td></tr>
        </table>
        <div class="tip">💡 Tarcie bywa potrzebne: bez niego nie dałoby się chodzić – stopy ślizgałyby się jak na lodzie.</div>
        <h3>Opór powietrza</h3>
        <p><b>Opór powietrza</b> to siła, którą powietrze hamuje poruszające się w nim ciała. Czujesz ją, jadąc szybko na rowerze.</p>
        <p>Opór powietrza jest większy, gdy:</p>
        <ul>
          <li>ciało ma <b>większą powierzchnię</b> zwróconą w kierunku ruchu (rozłożony spadochron, rozłożona kartka),</li>
          <li>ciało porusza się <b>szybciej</b>.</li>
        </ul>
        <p>Opór jest mniejszy, gdy ciało ma <b>kształt opływowy</b> – wydłużony i zwężony z przodu, jak kropla, ryba czy ptak.</p>
        <p>Doświadczenie: upuść jednocześnie płaską kartkę i taką samą kartkę zgniecioną w kulkę. Kulka spadnie szybciej – ma mniejszą powierzchnię, więc mniejszy opór.</p>
        <h3>Latanie w przyrodzie</h3>
        <ul>
          <li>Organizmy latające (ptaki, owady, nietoperze) mają <b>skrzydła</b> i <b>lekkie ciało</b>.</li>
          <li>Ptaki mają pióra, opływowy kształt ciała i lekkie kości – wiele z nich jest pustych w środku i wypełnionych powietrzem.</li>
          <li>Lądując, ptak szeroko rozkłada skrzydła i ogon – <b>zwiększa opór</b> i zwalnia. Gdy nurkuje po zdobycz, składa skrzydła – <b>zmniejsza opór</b>.</li>
          <li>Nasiona też „latają”: puch mniszka lekarskiego (dmuchawca) działa jak spadochron, a skrzydlaki klonu wirują jak śmigło – zwiększają opór, dzięki czemu wiatr niesie je daleko.</li>
        </ul>
      `,
      flashcards: [
        ['Masa', 'Ile jest substancji w ciele; mierzymy ją wagą (g, dag, kg, t)'],
        ['Grawitacja', 'Przyciąganie ciał przez Ziemię – dlatego przedmioty spadają w dół'],
        ['Grawitacja na Księżycu', 'Ok. 6 razy słabsza niż na Ziemi; masa się nie zmienia'],
        ['Tarcie', 'Siła, która utrudnia przesuwanie się jednego ciała po drugim'],
        ['Od czego zależy tarcie?', 'Od rodzaju powierzchni (szorstka – większe) i od nacisku'],
        ['Jak zwiększyć tarcie?', 'Piasek na lodzie, bieżnik butów, opony zimowe'],
        ['Jak zmniejszyć tarcie?', 'Smar, olej, gładkie płozy łyżew'],
        ['Tarcie u dżdżownicy', 'Szczecinki zwiększają tarcie, śluz je zmniejsza'],
        ['Opór powietrza', 'Siła, którą powietrze hamuje poruszające się ciała'],
        ['Kiedy opór powietrza jest większy?', 'Przy większej powierzchni i większej prędkości'],
        ['Kształt opływowy', 'Wydłużony, zwężony z przodu – zmniejsza opór'],
        ['Wspólne cechy zwierząt latających', 'Skrzydła i lekkie ciało'],
      ],
      questions: [
        { id: 'joy0w6', q: 'Czym mierzymy masę?', options: ['wagą', 'termometrem', 'linijką', 'kompasem'], answer: 0, explain: 'Masę mierzymy wagą – w gramach, dekagramach, kilogramach i tonach.' },
        { id: '8ivwhw', q: 'Dlaczego upuszczony długopis spada na podłogę?', options: ['bo przyciąga go Ziemia – działa siła grawitacji', 'bo popycha go powietrze', 'bo działa tarcie', 'bo przyciąga go magnes w podłodze'], answer: 0, explain: 'Ziemia przyciąga wszystkie ciała. Ta siła to grawitacja (siła ciężkości).' },
        { id: '06ywwi', q: 'Dzięki której sile woda w rzece płynie z gór w stronę morza?', options: ['grawitacji', 'tarcia', 'oporu powietrza', 'magnetyzmu'], answer: 0, explain: 'Grawitacja ciągnie wodę w dół, więc płynie ona z wyżej położonych miejsc w niżej położone.' },
        { id: 'u8aow8', q: 'Astronauta poleciał na Księżyc. Co się zmieniło?', options: ['Księżyc przyciąga go słabiej niż Ziemia, więc skacze wyżej', 'jego masa zmalała 6 razy', 'przestała na niego działać jakakolwiek siła', 'jego masa wzrosła'], answer: 0, explain: 'Masa astronauty jest taka sama, ale Księżyc przyciąga ok. 6 razy słabiej niż Ziemia.' },
        { id: 'n295ew', q: 'Co to jest tarcie?', options: ['siła, która utrudnia przesuwanie się jednego ciała po drugim', 'siła, z jaką Ziemia przyciąga ciała', 'przyciąganie przez magnes', 'siła, z jaką woda wypycha ciała do góry'], answer: 0, explain: 'Tarcie działa między stykającymi się powierzchniami i hamuje ruch.' },
        { id: '8dpvjf', q: 'Po której powierzchni klocek przesunie się najłatwiej?', options: ['po gładkim lodzie', 'po szorstkim asfalcie', 'po dywanie', 'po piasku'], answer: 0, explain: 'Na gładkim lodzie tarcie jest najmniejsze. Szorstkie powierzchnie mają duże tarcie.' },
        { id: '9rtzf1', q: 'Które pudło trudniej przesunąć po podłodze?', options: ['pudło pełne książek', 'puste pudło', 'oba tak samo'], noShuffle: true, answer: 0, explain: 'Pełne pudło mocniej naciska na podłogę, więc tarcie jest większe.' },
        { id: 'cda4k7', q: 'Po co zimą sypie się piasek na oblodzony chodnik?', options: ['żeby zwiększyć tarcie i nie poślizgnąć się', 'żeby szybciej stopić lód', 'żeby zmniejszyć tarcie', 'żeby chodnik był ładniejszy'], answer: 0, explain: 'Piasek tworzy szorstką warstwę – tarcie rośnie, a buty się nie ślizgają.' },
        { id: '9j57a6', q: 'Po co smaruje się olejem łańcuch roweru?', options: ['żeby zmniejszyć tarcie', 'żeby zwiększyć tarcie', 'żeby łańcuch był cięższy', 'żeby rower szybciej hamował'], answer: 0, explain: 'Smar i olej zmniejszają tarcie – części łatwiej się poruszają i mniej się zużywają.' },
        { id: 'n8ottr', q: 'Jak dżdżownica zwiększa tarcie, gdy porusza się w glebie?', options: ['zaczepia się szczecinkami', 'wydziela śluz', 'zwija się w kłębek', 'zmienia kolor'], answer: 0, explain: 'Drobne szczecinki zaczepiają się o glebę i pomagają się przesuwać. Śluz – przeciwnie – zmniejsza tarcie.' },
        { id: 'hubpvz', q: 'Co zmniejsza tarcie w przyrodzie?', options: ['śluz na ciele ślimaka', 'szczecinki dżdżownicy', 'bieżnik na butach', 'piasek na lodzie'], answer: 0, explain: 'Śluz sprawia, że ślimak łatwiej sunie po podłożu. Pozostałe przykłady zwiększają tarcie.' },
        { id: '7nkhx5', q: 'Co to jest opór powietrza?', options: ['siła, którą powietrze hamuje poruszające się ciała', 'ciężar powietrza', 'ruch powietrza, czyli wiatr', 'siła przyciągania przez Ziemię'], answer: 0, explain: 'Opór powietrza hamuje ruch – czujesz go, jadąc szybko na rowerze.' },
        { id: 'a9q81s', q: 'Upuszczasz jednocześnie płaską kartkę i taką samą kartkę zgniecioną w kulkę. Która spadnie szybciej?', options: ['zgnieciona w kulkę', 'płaska', 'spadną jednocześnie'], noShuffle: true, answer: 0, explain: 'Kulka ma mniejszą powierzchnię, więc mniejszy opór powietrza. Płaska kartka szybuje wolniej.' },
        { id: 'w3fdxi', q: 'Dlaczego spadochron spowalnia spadanie?', options: ['ma dużą powierzchnię, więc opór powietrza jest duży', 'jest bardzo ciężki', 'zmniejsza grawitację', 'ma kształt opływowy'], answer: 0, explain: 'Rozłożony spadochron ma ogromną powierzchnię. Im większa powierzchnia, tym większy opór powietrza.' },
        { id: 't9fept', q: 'Jaki kształt ma najmniejszy opór powietrza?', options: ['opływowy – wydłużony i zwężony z przodu', 'płaski jak talerz', 'sześcian', 'rozłożona parasolka'], answer: 0, explain: 'Kształt opływowy, jak u ryby czy ptaka, pozwala „przecinać” powietrze i wodę z małym oporem.' },
        { id: 'p4emhl', q: 'Które cechy mają wspólne ptaki, owady i nietoperze?', options: ['skrzydła i lekkie ciało', 'pióra i dziób', 'łuski i płetwy', 'sierść i pazury'], answer: 0, explain: 'Wszystkie organizmy zdolne do lotu mają skrzydła i lekkie ciało. Pióra mają tylko ptaki.' },
        { id: '6bynlf', q: 'Dlaczego kości wielu ptaków są puste w środku i wypełnione powietrzem?', options: ['bo są lżejsze, co ułatwia latanie', 'bo ptaki są małe', 'bo ptaki nie potrzebują szkieletu', 'bo pomagają ptakom pływać'], answer: 0, explain: 'Lekkie kości zmniejszają masę ciała ptaka – łatwiej mu wzbić się w powietrze.' },
        { id: 'jta967', q: 'Co robi ptak, gdy chce wylądować i zwolnić?', options: ['szeroko rozkłada skrzydła i ogon', 'składa skrzydła', 'chowa nogi', 'zamyka oczy'], answer: 0, explain: 'Rozłożone skrzydła i ogon mają dużą powierzchnię – opór powietrza rośnie i ptak zwalnia.' },
        { id: 'co4m91', q: 'Dzięki czemu nasiona mniszka lekarskiego (dmuchawca) lecą daleko z wiatrem?', options: ['puch działa jak spadochron i zwiększa opór powietrza', 'są bardzo ciężkie', 'mają kształt opływowy', 'przyciąga je Słońce'], answer: 0, explain: 'Puch ma dużą powierzchnię, więc nasionko opada powoli, a wiatr niesie je daleko.' },
        { id: '2ex9p7', q: 'Prawda czy fałsz?\nTarcie jest zawsze szkodliwe.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Bez tarcia nie dałoby się chodzić ani hamować rowerem – stopy i opony ślizgałyby się jak na lodzie.' },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'krainy',
      name: 'Krainy geograficzne Polski i lądolód',
      basis: 'Dz.U. 2026 poz. 378, przyroda kl. IV–VI: dz. 5 „Planeta Ziemia”, wym. 19 (krainy geograficzne Polski na mapie, ich położenie i krajobraz), wym. 20 (dlaczego lądolód nazywamy skandynawskim, zasięg maksymalny i zasięg ostatniego zlodowacenia, wpływ lądolodu na współczesną rzeźbę). Pasy rzeźby i przykłady krain – według ZPE (lekcja o pasach rzeźby Polski, zpe.gov.pl/a/DIlK4PLj6); lądolód – według ZPE („Młodoglacjalny czy staroglacjalny?”, zpe.gov.pl/a/przeczytaj/DV0xUhxT2: lądolód skandynawski nasuwał się z północy; w najdalszym zasięgu dosięgnął północnych stoków Karpat i Sudetów; ostatni raz osiągnął maksymalny zasięg ok. 20 tys. lat temu, a ok. 14 tys. lat temu opuścił teren Polski), sprawdzone 2.11.2026. Bez nazw zlodowaceń i dokładnego przebiegu granic (geografia kl. V–VIII). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Sześć pasów rzeźby</h3>
        <p>Krainy geograficzne Polski układają się w <b>pasy</b> ciągnące się z zachodu na wschód. Od północy na południe:</p>
        <table>
          <tr><th>Pas</th><th>Przykłady krain</th><th>Krajobraz</th></tr>
          <tr><td>1. <b>pobrzeża</b></td><td>Pobrzeże Szczecińskie, Koszalińskie, Gdańskie</td><td>wąski pas nad Bałtykiem; teren płaski lub lekko pofałdowany, plaże i wydmy</td></tr>
          <tr><td>2. <b>pojezierza</b></td><td>Pojezierze Pomorskie, Mazurskie, Wielkopolskie</td><td>pofałdowany teren, liczne jeziora polodowcowe, wzgórza, duże lasy</td></tr>
          <tr><td>3. <b>niziny środkowopolskie</b></td><td>Nizina Wielkopolska, Mazowiecka, Śląska, Podlaska</td><td>teren równinny, dużo pól uprawnych i łąk</td></tr>
          <tr><td>4. <b>wyżyny</b></td><td>Wyżyna Śląska, Krakowsko-Częstochowska, Lubelska, Małopolska (z Górami Świętokrzyskimi)</td><td>teren wyżej położony, zróżnicowany: skałki i jaskinie, pola, zakłady przemysłowe</td></tr>
          <tr><td>5. <b>kotliny podgórskie</b></td><td>Kotlina Oświęcimska, Kotlina Sandomierska</td><td>płaskie obniżenia u podnóża Karpat</td></tr>
          <tr><td>6. <b>góry</b></td><td>Sudety (np. Karkonosze), Karpaty (np. Tatry, Pieniny, Beskidy, Bieszczady)</td><td>wysokie wzniesienia, strome stoki, głębokie doliny</td></tr>
        </table>
        <div class="tip">💡 Kolejność od morza w stronę gór: <b>Po</b>brzeża – <b>Po</b>jezierza – <b>Ni</b>ziny – <b>Wy</b>żyny – <b>Ko</b>tliny – <b>Gó</b>ry.</div>
        <h3>Jak czytać mapę krain?</h3>
        <ul>
          <li>Na mapie hipsometrycznej niziny są zielone, wyżyny – żółte i pomarańczowe, góry – brązowe.</li>
          <li>Nazwa krainy jest zwykle napisana dużymi literami w poprzek obszaru, który zajmuje.</li>
          <li>Położenie krainy opisujesz kierunkami: np. Pojezierze Mazurskie leży na północnym wschodzie Polski, a Sudety – na południowym zachodzie.</li>
        </ul>
        <h3>Lądolód skandynawski</h3>
        <p><b>Lądolód</b> to ogromna, bardzo gruba warstwa lodu przykrywająca ląd. Dawno temu, gdy klimat był dużo zimniejszy, lądolód kilka razy nasuwał się na teren Polski. Przychodził <b>z północy, ze Skandynawii</b> – dlatego nazywamy go <b>skandynawskim</b>.</p>
        <ul>
          <li><b>Zasięg maksymalny</b>: w czasie największego zasięgu lądolód przykrył prawie całą Polskę – dotarł aż do Sudetów i Karpat (do ich północnych stoków).</li>
          <li><b>Zasięg ostatniego zlodowacenia</b>: ostatni lądolód objął tylko <b>północną część Polski</b> – pobrzeża i pojezierza. Swój największy zasięg osiągnął ok. 20 tysięcy lat temu, a ok. 14 tysięcy lat temu całkiem się wytopił z terenu Polski.</li>
        </ul>
        <h3>Ślady lądolodu w krajobrazie</h3>
        <ul>
          <li>Lądolód niósł ze sobą skały, piasek i glinę. Gdy się topił, zostawiał je na miejscu – tak powstały <b>wzgórza morenowe</b> i <b>głazy narzutowe</b>.</li>
          <li>W zagłębieniach po lodzie powstały <b>jeziora polodowcowe</b>. Długie i wąskie <b>jeziora rynnowe</b> leżą w rynnach wyżłobionych przez wodę płynącą pod lądolodem.</li>
          <li>Wody z topniejącego lodu usypały <b>piaszczyste równiny</b>.</li>
        </ul>
        <p>Na <b>północy</b> (pojezierza) te ślady są „świeże”: wzgórza są wyraźne, a jezior jest bardzo dużo. Na <b>nizinach środkowopolskich</b> lądolód był dawno – wzgórza zostały wyrównane, a jeziora zarosły. Dlatego pojezierza są tylko na północy Polski.</p>
      `,
      flashcards: [
        ['Pasy rzeźby Polski od północy', 'pobrzeża, pojezierza, niziny środkowopolskie, wyżyny, kotliny podgórskie, góry'],
        ['Pobrzeża', 'Wąski pas nad Bałtykiem: plaże, wydmy, płaski teren'],
        ['Pojezierza', 'Pofałdowany teren i liczne jeziora polodowcowe, np. Pojezierze Mazurskie'],
        ['Niziny środkowopolskie', 'Równinny teren, dużo pól, np. Nizina Mazowiecka'],
        ['Wyżyny – przykłady', 'Wyżyna Krakowsko-Częstochowska, Lubelska, Śląska, Małopolska'],
        ['Kotliny podgórskie', 'Kotlina Oświęcimska i Sandomierska – u podnóża Karpat'],
        ['Góry w Polsce', 'Sudety i Karpaty (Tatry, Pieniny, Beskidy, Bieszczady)'],
        ['Lądolód', 'Ogromna, gruba warstwa lodu przykrywająca ląd'],
        ['Dlaczego lądolód jest „skandynawski”?', 'Bo nasuwał się z północy, ze Skandynawii'],
        ['Zasięg maksymalny lądolodu', 'Prawie cała Polska – aż do Sudetów i Karpat'],
        ['Zasięg ostatniego zlodowacenia', 'Tylko północna Polska – pobrzeża i pojezierza'],
        ['Ślady lądolodu', 'Wzgórza morenowe, głazy narzutowe, jeziora polodowcowe'],
      ],
      questions: [
        { id: 'x12mtl', q: 'Który pas rzeźby leży najdalej na północ?', options: ['pobrzeża', 'pojezierza', 'wyżyny', 'kotliny podgórskie'], answer: 0, explain: 'Pobrzeża to wąski pas nad Morzem Bałtyckim – najbardziej na północ.' },
        { id: 'ci89yj', q: 'Który pas rzeźby leży najdalej na południe?', options: ['góry', 'niziny środkowopolskie', 'pobrzeża', 'pojezierza'], answer: 0, explain: 'Na południu Polski leżą góry: Sudety i Karpaty.' },
        { id: 'tocrsn', q: 'Która kolejność pasów rzeźby (od północy na południe) jest poprawna?', options: ['pobrzeża, pojezierza, niziny, wyżyny, kotliny, góry', 'pojezierza, pobrzeża, wyżyny, niziny, góry, kotliny', 'góry, wyżyny, niziny, pojezierza, pobrzeża, kotliny', 'pobrzeża, niziny, pojezierza, kotliny, wyżyny, góry'], answer: 0, explain: 'Od morza: pobrzeża, pojezierza, niziny środkowopolskie, wyżyny, kotliny podgórskie, góry.' },
        { id: '5rcpft', q: 'Do którego pasa rzeźby należy Pojezierze Mazurskie?', options: ['pojezierzy', 'pobrzeży', 'nizin środkowopolskich', 'wyżyn'], answer: 0, explain: 'Pojezierze Mazurskie (razem z Pomorskim i Wielkopolskim) należy do pasa pojezierzy.' },
        { id: '4aqs39', q: 'Do którego pasa rzeźby należy Nizina Mazowiecka?', options: ['nizin środkowopolskich', 'pobrzeży', 'kotlin podgórskich', 'gór'], answer: 0, explain: 'Nizina Mazowiecka leży w środkowej Polsce, w pasie nizin środkowopolskich.' },
        { id: 'cm7iob', q: 'Która kraina jest wyżyną?', options: ['Wyżyna Lubelska', 'Pobrzeże Gdańskie', 'Kotlina Sandomierska', 'Nizina Podlaska'], answer: 0, explain: 'Wyżyna Lubelska leży w pasie wyżyn. Pozostałe krainy należą do innych pasów.' },
        { id: 'g1acwo', q: 'Gdzie w Polsce leżą kotliny podgórskie?', options: ['u podnóża Karpat, między wyżynami a górami', 'nad Morzem Bałtyckim', 'między pojezierzami a pobrzeżami', 'w środku Tatr'], answer: 0, explain: 'Kotliny Oświęcimska i Sandomierska to płaskie obniżenia między pasem wyżyn a Karpatami.' },
        { id: 'fvv2f2', q: 'Które góry należą do Karpat?', options: ['Tatry', 'Karkonosze', 'Góry Stołowe', 'Góry Izerskie'], answer: 0, explain: 'Tatry, Pieniny, Beskidy i Bieszczady to Karpaty. Karkonosze, Góry Stołowe i Izerskie należą do Sudetów.' },
        { id: '0kbie6', q: 'Krajobraz z plażami i wydmami nad morzem to krajobraz…', options: ['pobrzeży', 'pojezierzy', 'wyżyn', 'kotlin podgórskich'], answer: 0, explain: 'Pobrzeża to wąski pas nad Bałtykiem – są tu piaszczyste plaże i wydmy.' },
        { id: 't5o3s2', q: 'Gdzie w Polsce jest najwięcej jezior?', options: ['na pojezierzach', 'w górach', 'na wyżynach', 'w kotlinach podgórskich'], answer: 0, explain: 'Na pojezierzach na północy Polski jest mnóstwo jezior polodowcowych.' },
        { id: '2cdkny', q: 'Co to jest lądolód?', options: ['ogromna, gruba warstwa lodu przykrywająca ląd', 'zamarznięte jezioro', 'lód na chodniku', 'góra lodowa pływająca w morzu'], answer: 0, explain: 'Lądolód to bardzo gruba warstwa lodu, która przykrywa ogromne obszary lądu.' },
        { id: 'vj71bw', q: 'Dlaczego lądolód, który przykrywał Polskę, nazywamy skandynawskim?', options: ['bo nasuwał się z północy, ze Skandynawii', 'bo odkryli go Skandynawowie', 'bo był tak zimny jak Skandynawia', 'bo stopił się w Skandynawii'], answer: 0, explain: 'Lądolód narastał na północy i przesuwał się ze Skandynawii na południe, aż na teren Polski.' },
        { id: 'xgxqk0', q: 'Dokąd sięgał lądolód w czasie swojego największego zasięgu?', options: ['aż do Sudetów i Karpat – przykrył prawie całą Polskę', 'tylko do wybrzeża Bałtyku', 'tylko do pojezierzy', 'nigdy nie dotarł do Polski'], answer: 0, explain: 'W czasie największego zasięgu lądolód dosięgnął północnych stoków Sudetów i Karpat.' },
        { id: 'qcrmwq', q: 'Które obszary przykrył ostatni lądolód?', options: ['północną część Polski – pobrzeża i pojezierza', 'całą Polskę razem z Tatrami', 'tylko góry', 'tylko wyżyny'], answer: 0, explain: 'Ostatni lądolód objął tylko północ Polski. Dlatego ślady po nim – jeziora i wzgórza – są tam najlepiej widoczne.' },
        { id: 'm7e8rm', q: 'Jak powstały głazy narzutowe?', options: ['przyniósł je lądolód ze Skandynawii', 'wyrzuciły je wulkany', 'przyniosły je rzeki z Tatr', 'spadły z kosmosu'], answer: 0, explain: 'Lądolód niósł skały z północy. Gdy się wytopił, zostawił je na terenie Polski.' },
        { id: 's0tdot', q: 'Jak powstały długie i wąskie jeziora rynnowe?', options: ['w rynnach wyżłobionych przez wodę płynącą pod lądolodem', 'w kraterach wulkanów', 'wykopali je ludzie', 'powstały za zaporami na rzekach'], answer: 0, explain: 'Pod lądolodem płynęła woda, która żłobiła długie rynny. Po stopieniu lodu wypełniła je woda.' },
        { id: 'fg0hkn', q: 'Dlaczego pojezierza są na północy Polski, a w środkowej Polsce jezior polodowcowych prawie nie ma?', options: ['ostatni lądolód był tylko na północy – w środkowej Polsce lądolód był dawno i jeziora zarosły', 'w środkowej Polsce nigdy nie było lądolodu', 'jeziora w środkowej Polsce osuszyli ludzie', 'na północy pada więcej deszczu'], answer: 0, explain: 'Na północy ślady ostatniego lądolodu są „świeże”. W środkowej Polsce lód był dużo dawniej – wzgórza się wyrównały, a jeziora zarosły.' },
        {
          id: 's3batg',
          q: 'Który pas rzeźby oznaczono na schemacie znakiem zapytania?',
          svg: `<svg viewBox="0 0 320 250" role="img" aria-label="Schemat pasów rzeźby Polski od północy: 1 pobrzeża, 2 pojezierza, 3 znak zapytania, 4 wyżyny, 5 kotliny podgórskie, 6 góry">
      <rect x="20" y="10" width="280" height="34" rx="6" class="f1 s1"/><rect x="20" y="48" width="280" height="34" rx="6" class="f3 s3"/>
      <rect x="20" y="86" width="280" height="34" rx="6" class="f3 s3"/><rect x="20" y="124" width="280" height="34" rx="6" class="f4 s4"/>
      <rect x="20" y="162" width="280" height="34" rx="6" class="f3 s3"/><rect x="20" y="200" width="280" height="34" rx="6" class="f2 s2"/>
      <g class="tx" text-anchor="middle"><text x="160" y="33">1. pobrzeża</text><text x="160" y="71">2. pojezierza</text><text x="160" y="147">4. wyżyny</text><text x="160" y="185">5. kotliny podgórskie</text><text x="160" y="223">6. góry</text></g>
      <text x="160" y="110" class="tx-b" text-anchor="middle">3. ?</text>
    </svg>`,
          options: ['niziny środkowopolskie', 'pojezierza', 'kotliny podgórskie', 'pobrzeża'],
          answer: 0,
          explain: 'Między pojezierzami a wyżynami leżą niziny środkowopolskie, np. Nizina Mazowiecka i Wielkopolska.',
        },
        { id: 'dlb9r6', q: 'Prawda czy fałsz?\nOstatni lądolód przykrył całą Polskę razem z górami.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Ostatni lądolód objął tylko północną Polskę. Prawie całą Polskę – aż do Sudetów i Karpat – lądolód przykrył dużo wcześniej, w czasie największego zasięgu.' },
      ],
    },
  ],
});
