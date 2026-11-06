/* Muzyka – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, muzyka – II etap edukacyjny).
 * Muzyka jest w klasach IV–VII (ramowy plan: Dz.U. 2026 poz. 1028, zał. nr 1); podstawa nie dzieli wymagań na klasy.
 * Priorytet C: tylko wiedza (ściąga, fiszki, quiz) – śpiewu, gry i tańca aplikacja nie zastąpi.
 * Fakty o hymnie, „Odzie do radości”, Chopinie i Paderewskim sprawdzone 1.11.2026 (patrz pole basis i strona „Źródła”). */
window.SUBJECTS.push({
  id: 'muzyka',
  name: 'Muzyka',
  icon: '🎵',
  color: '#b0479a',
  book: 'Wszystko gra 4 (Nowa Era)',
  topics: [
    {
      id: 'elementy-i-nuty',
      name: 'Elementy muzyki i zapis nutowy',
      chapter: 'rozdział I „Barwy jesieni” (rytm, pięciolinia, tempo, dynamika)',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 1 „Uczeń jako twórca i wykonawca”, wym. 9 (pojęcia związane z podstawowymi elementami muzyki: rytm, melodia, metrum, tempo, dynamika), wym. 10 (kodowanie i dekodowanie muzyki z użyciem notacji muzycznej). Wybór na klasę 4 i zakres zapisu nutowego (klucz wiolinowy, dźwięki od c¹ do c², wartości od całej nuty do ósemki) – decyzja redakcyjna (podstawa nie dzieli wymagań na klasy). Śpiew i gra to praca na lekcji – tu utrwalasz pojęcia.',
      theory: `
        <h3>Z czego zbudowana jest muzyka?</h3>
        <table>
          <tr><th>Element</th><th>Co to znaczy</th></tr>
          <tr><td><b>melodia</b></td><td>dźwięki wysokie i niskie ułożone jeden po drugim – to, co nucisz</td></tr>
          <tr><td><b>rytm</b></td><td>dźwięki krótkie i długie ułożone w czasie – to, co wyklaszczesz</td></tr>
          <tr><td><b>metrum</b></td><td>regularne powtarzanie akcentów: <b>RAZ</b>-dwa, <b>RAZ</b>-dwa-trzy…</td></tr>
          <tr><td><b>tempo</b></td><td>szybkość wykonania utworu</td></tr>
          <tr><td><b>dynamika</b></td><td>głośność – cicho albo głośno</td></tr>
          <tr><td><b>barwa dźwięku</b></td><td>„kolor” dźwięku – po nim odróżniasz skrzypce od trąbki</td></tr>
        </table>
        <h3>Pięciolinia i klucz wiolinowy</h3>
        <p>Nuty zapisujemy na <b>pięciolinii</b> – to pięć poziomych linii. Linie liczymy <b>od dołu</b>. Nuty stoją na liniach albo w polach między nimi. Im wyżej nuta, tym wyższy dźwięk.</p>
        <p>Na początku pięciolinii stoi <b>klucz wiolinowy</b> (klucz G). Zaczyna się na <b>drugiej linii</b> i mówi, że na tej linii leży dźwięk <b>g</b>.</p>
        <p>Nazwy dźwięków po kolei: <b>c, d, e, f, g, a, h, c</b>. Śpiewamy je też sylabami (solmizacją): <b>do, re, mi, fa, sol, la, si, do</b>.</p>
        <table>
          <tr><th>Miejsce nuty (klucz wiolinowy)</th><th>Dźwięk</th></tr>
          <tr><td>pod pięciolinią, na dodanej krótkiej linii</td><td>c¹ (do)</td></tr>
          <tr><td>pod pierwszą linią</td><td>d¹ (re)</td></tr>
          <tr><td>na pierwszej linii</td><td>e¹ (mi)</td></tr>
          <tr><td>między pierwszą a drugą linią</td><td>f¹ (fa)</td></tr>
          <tr><td>na drugiej linii</td><td>g¹ (sol)</td></tr>
          <tr><td>między drugą a trzecią linią</td><td>a¹ (la)</td></tr>
          <tr><td>na trzeciej linii</td><td>h¹ (si)</td></tr>
          <tr><td>między trzecią a czwartą linią</td><td>c² (do)</td></tr>
        </table>
        <div class="tip">💡 W polskich nazwach jest dźwięk <b>h</b>. W języku angielskim ten sam dźwięk nazywa się B.</div>
        <h3>Wartości rytmiczne</h3>
        <table>
          <tr><th>Nuta</th><th>Jak wygląda</th><th>Ile trwa (licząc ćwierćnutami)</th></tr>
          <tr><td><b>cała nuta</b></td><td>pusta główka, bez laski</td><td>4 ćwierćnuty</td></tr>
          <tr><td><b>półnuta</b></td><td>pusta główka z laską</td><td>2 ćwierćnuty</td></tr>
          <tr><td><b>ćwierćnuta</b></td><td>zamalowana główka z laską</td><td>1 ćwierćnuta</td></tr>
          <tr><td><b>ósemka</b></td><td>zamalowana główka, laska i chorągiewka</td><td>pół ćwierćnuty</td></tr>
        </table>
        <p>Każda nuta ma swoją <b>pauzę</b> – znak ciszy, która trwa tyle samo co nuta.</p>
        <h3>Takt i metrum</h3>
        <p>Utwór dzielimy na <b>takty</b> pionowymi <b>kreskami taktowymi</b>. Na końcu utworu stoi podwójna kreska. Metrum zapisujemy na początku jak ułamek: <b>2/4</b> – w każdym takcie są 2 ćwierćnuty, <b>3/4</b> – 3 ćwierćnuty, <b>4/4</b> – 4 ćwierćnuty.</p>
        <h3>Tempo i dynamika – włoskie nazwy</h3>
        <table>
          <tr><th>Tempo</th><th>Znaczenie</th></tr>
          <tr><td><b>largo</b></td><td>bardzo wolno</td></tr>
          <tr><td><b>andante</b></td><td>spokojnie, w tempie kroku</td></tr>
          <tr><td><b>allegro</b></td><td>szybko, wesoło</td></tr>
          <tr><td><b>presto</b></td><td>bardzo szybko</td></tr>
        </table>
        <table>
          <tr><th>Znak</th><th>Nazwa</th><th>Znaczenie</th></tr>
          <tr><td><b>pp</b></td><td>pianissimo</td><td>bardzo cicho</td></tr>
          <tr><td><b>p</b></td><td>piano</td><td>cicho</td></tr>
          <tr><td><b>mf</b></td><td>mezzoforte</td><td>średnio głośno</td></tr>
          <tr><td><b>f</b></td><td>forte</td><td>głośno</td></tr>
          <tr><td><b>ff</b></td><td>fortissimo</td><td>bardzo głośno</td></tr>
          <tr><td><b>crescendo</b></td><td>&lt;</td><td>coraz głośniej</td></tr>
          <tr><td><b>decrescendo</b> (diminuendo)</td><td>&gt;</td><td>coraz ciszej</td></tr>
        </table>
        <div class="tip">💡 <b>F</b>orte – <b>f</b>ajerwerki, głośno. <b>P</b>iano – <b>p</b>szczółka, cichutko.</div>
      `,
      infographicNote: 'U góry muzyka, niżej jej elementy – a w każdym, jak go zapisujemy albo nazywamy.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { icon: '🎵', title: 'Z czego zbudowana jest muzyka?', kolor: 5 },
        branches: [
          { title: '🎶 Melodia', text: 'dźwięki wysokie i niskie', items: ['na pięciolinii: im wyżej nuta, tym wyższy dźwięk'], kolor: 1 },
          { title: '👏 Rytm', text: 'dźwięki krótkie i długie', items: ['cała nuta – 4 ćwierćnuty', 'półnuta – 2 ćwierćnuty', 'ćwierćnuta – 1', 'ósemka – pół ćwierćnuty'], kolor: 3 },
          { title: '📏 Metrum', text: 'regularne akcenty: RAZ-dwa, RAZ-dwa-trzy', items: ['2/4, 3/4, 4/4 – tyle ćwierćnut w takcie'], kolor: 3 },
          { title: '🐢 Tempo', text: 'szybkość: od bardzo wolno do bardzo szybko', items: ['largo → andante → allegro → presto'], kolor: 4 },
          { title: '🔊 Dynamika', text: 'głośność: od bardzo cicho do bardzo głośno', items: ['pp → p → mf → f → ff', 'crescendo < coraz głośniej', 'decrescendo > coraz ciszej'], kolor: 2 },
          { title: '🎻 Barwa dźwięku', text: '„kolor” dźwięku – skrzypce czy trąbka?', kolor: 5 },
        ],
      },
      flashcards: [
        ['Melodia', 'Dźwięki wysokie i niskie ułożone jeden po drugim'],
        ['Rytm', 'Dźwięki krótkie i długie ułożone w czasie'],
        ['Tempo', 'Szybkość wykonania utworu'],
        ['Dynamika', 'Głośność muzyki: cicho – głośno'],
        ['Pięciolinia', 'Pięć linii, na których zapisujemy nuty; linie liczymy od dołu'],
        ['Klucz wiolinowy (G)', 'Zaczyna się na 2. linii; na tej linii leży dźwięk g'],
        ['Dźwięki po kolei', 'c, d, e, f, g, a, h, c (do, re, mi, fa, sol, la, si, do)'],
        ['Cała nuta', 'Pusta główka bez laski – trwa 4 ćwierćnuty'],
        ['Półnuta', 'Pusta główka z laską – trwa 2 ćwierćnuty'],
        ['Ósemka', 'Zamalowana główka z laską i chorągiewką – trwa pół ćwierćnuty'],
        ['Pauza', 'Znak ciszy w muzyce'],
        ['Metrum 3/4', 'W każdym takcie są 3 ćwierćnuty'],
        ['Forte (f) / piano (p)', 'Głośno / cicho'],
        ['Crescendo', 'Coraz głośniej'],
        ['Allegro / largo', 'Szybko / bardzo wolno'],
      ],
      questions: [
        { id: '0a6syk', q: 'Jak nazywamy szybkość wykonania utworu?', options: ['tempo', 'dynamika', 'melodia', 'barwa'], answer: 0, explain: 'Tempo mówi, jak szybko gramy albo śpiewamy.' },
        { id: '8ocgno', q: 'Jak nazywamy głośność muzyki?', options: ['dynamika', 'tempo', 'metrum', 'rytm'], answer: 0, explain: 'Dynamika to głośność: od bardzo cicho (pp) do bardzo głośno (ff).' },
        { id: 'uhl4e0', q: 'Klaszczesz w dłonie dźwięki krótkie i długie piosenki. Który element muzyki odtwarzasz?', options: ['rytm', 'melodię', 'dynamikę', 'barwę'], answer: 0, explain: 'Rytm to układ dźwięków krótkich i długich – da się go wyklaskać.' },
        { id: 'fy4f6s', q: 'Ile linii ma pięciolinia?', options: ['5', '4', '6', '3'], answer: 0, explain: 'Nazwa mówi wszystko: pięć linii.' },
        { id: 'xzdmnf', q: 'Na której linii zaczyna się klucz wiolinowy?', options: ['na drugiej', 'na pierwszej', 'na trzeciej', 'na piątej'], answer: 0, explain: 'Klucz wiolinowy (klucz G) zaczyna się na drugiej linii – tam leży dźwięk g.' },
        {
          id: 'faszsd', q: 'Jaki dźwięk zapisano w kluczu wiolinowym? (Linie liczymy od dołu.)',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Pięciolinia z liniami ponumerowanymi od dołu od 1 do 5. Nuta leży na drugiej linii.">
            <line x1="40" y1="30" x2="270" y2="30" class="ln"/>
            <line x1="40" y1="46" x2="270" y2="46" class="ln"/>
            <line x1="40" y1="62" x2="270" y2="62" class="ln"/>
            <line x1="40" y1="78" x2="270" y2="78" class="ln"/>
            <line x1="40" y1="94" x2="270" y2="94" class="ln"/>
            <text x="22" y="99" class="tx-s">1</text>
            <text x="22" y="83" class="tx-s">2</text>
            <text x="22" y="67" class="tx-s">3</text>
            <text x="22" y="51" class="tx-s">4</text>
            <text x="22" y="35" class="tx-s">5</text>
            <ellipse cx="160" cy="78" rx="10" ry="7" transform="rotate(-20 160 78)" class="tx"/>
            <line x1="169" y1="75" x2="169" y2="30" class="ln"/>
            <text x="155" y="122" class="tx-s" text-anchor="middle">klucz wiolinowy</text>
          </svg>`,
          options: ['g', 'e', 'a', 'h'], answer: 0, explain: 'W kluczu wiolinowym na drugiej linii leży dźwięk g (sol). Na pierwszej linii jest e, a na trzeciej – h.',
        },
        {
          id: 'qsrji5', q: 'Jaki dźwięk zapisano w kluczu wiolinowym? (Linie liczymy od dołu.)',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Pięciolinia z liniami ponumerowanymi od dołu od 1 do 5. Nuta leży na pierwszej linii.">
            <line x1="40" y1="30" x2="270" y2="30" class="ln"/>
            <line x1="40" y1="46" x2="270" y2="46" class="ln"/>
            <line x1="40" y1="62" x2="270" y2="62" class="ln"/>
            <line x1="40" y1="78" x2="270" y2="78" class="ln"/>
            <line x1="40" y1="94" x2="270" y2="94" class="ln"/>
            <text x="22" y="99" class="tx-s">1</text>
            <text x="22" y="83" class="tx-s">2</text>
            <text x="22" y="67" class="tx-s">3</text>
            <text x="22" y="51" class="tx-s">4</text>
            <text x="22" y="35" class="tx-s">5</text>
            <ellipse cx="160" cy="94" rx="10" ry="7" transform="rotate(-20 160 94)" class="tx"/>
            <line x1="169" y1="91" x2="169" y2="46" class="ln"/>
            <text x="155" y="122" class="tx-s" text-anchor="middle">klucz wiolinowy</text>
          </svg>`,
          options: ['e', 'g', 'c', 'f'], answer: 0, explain: 'W kluczu wiolinowym na pierwszej (najniższej) linii leży dźwięk e (mi).',
        },
        { id: 'w25m29', q: 'Który dźwięk jest następny po kolei: c, d, e, f, g, a, …?', options: ['h', 'b', 'i', 'c'], answer: 0, explain: 'W polskich nazwach po a jest h, a potem znowu c.' },
        { id: '63q61x', q: 'Którą sylabą solmizacji śpiewamy dźwięk g?', options: ['sol', 'la', 'fa', 'mi'], answer: 0, explain: 'c – do, d – re, e – mi, f – fa, g – sol, a – la, h – si.' },
        {
          id: 'av7st4', q: 'Jak nazywa się ta nuta?',
          svg: `<svg viewBox="0 0 300 120" role="img" aria-label="Nuta z pustą (niezamalowaną) główką i pionową laską">
            <ellipse cx="140" cy="88" rx="13" ry="9" transform="rotate(-20 140 88)" class="ln"/>
            <line x1="152" y1="84" x2="152" y2="20" class="ln"/>
          </svg>`,
          options: ['półnuta', 'cała nuta', 'ćwierćnuta', 'ósemka'], answer: 0, explain: 'Pusta główka z laską to półnuta. Cała nuta nie ma laski, a ćwierćnuta ma zamalowaną główkę.',
        },
        {
          id: 'm8dymq', q: 'Jak nazywa się ta nuta?',
          svg: `<svg viewBox="0 0 300 120" role="img" aria-label="Nuta z zamalowaną główką, pionową laską i chorągiewką na górze laski">
            <ellipse cx="140" cy="88" rx="13" ry="9" transform="rotate(-20 140 88)" class="tx"/>
            <line x1="152" y1="84" x2="152" y2="20" class="ln"/>
            <path d="M152,20 C156,36 176,42 172,66" class="ln"/>
          </svg>`,
          options: ['ósemka', 'ćwierćnuta', 'półnuta', 'cała nuta'], answer: 0, explain: 'Chorągiewka przy lasce oznacza ósemkę. Ćwierćnuta ma zamalowaną główkę i laskę, ale bez chorągiewki.',
        },
        { id: 'hr6qx7', q: 'Ile ćwierćnut trwa cała nuta?', options: ['4', '2', '3', '1'], answer: 0, explain: 'Cała nuta = 2 półnuty = 4 ćwierćnuty.' },
        { id: '4njels', q: 'Ile ósemek trwa jedna półnuta?', options: ['4', '2', '8', '1'], answer: 0, explain: 'Półnuta = 2 ćwierćnuty, a każda ćwierćnuta = 2 ósemki. 2 · 2 = 4 ósemki.' },
        { id: '6ek36d', q: 'Utwór ma metrum 3/4. Ile ćwierćnut mieści się w jednym takcie?', options: ['3', '4', '2', '7'], answer: 0, explain: 'Górna liczba mówi, ile jest jednostek w takcie, a dolna 4 – że tą jednostką jest ćwierćnuta. 3/4 – trzy ćwierćnuty.' },
        { id: 'lsu8mp', q: 'Takt w metrum 4/4 zawiera już półnutę. Co jeszcze zmieści się w tym takcie, żeby był pełny?', options: ['dwie ćwierćnuty', 'cała nuta', 'jedna ćwierćnuta', 'jedna ósemka'], answer: 0, explain: 'W takcie 4/4 są 4 ćwierćnuty. Półnuta to 2 ćwierćnuty, brakuje jeszcze 2 ćwierćnut.' },
        { id: '9m9d8c', q: 'Co oznacza w nutach znak f (forte)?', options: ['głośno', 'cicho', 'szybko', 'wolno'], answer: 0, explain: 'Forte – głośno. Piano (p) – cicho.' },
        { id: 'k7pypy', q: 'Który znak każe zagrać bardzo cicho?', options: ['pp', 'ff', 'mf', 'f'], answer: 0, explain: 'pp to pianissimo – bardzo cicho. ff (fortissimo) to bardzo głośno.' },
        { id: 'oxvacn', q: 'Co oznacza crescendo?', options: ['coraz głośniej', 'coraz ciszej', 'coraz szybciej', 'koniec utworu'], answer: 0, explain: 'Crescendo – stopniowe zwiększanie głośności. Odwrotność to decrescendo (diminuendo).' },
        { id: 'ancf4q', q: 'Które tempo jest najszybsze?', options: ['presto', 'largo', 'andante', 'allegro'], answer: 0, explain: 'Od najwolniejszego: largo, andante, allegro, presto.' },
        { id: 'xt1hsv', q: 'Kołysanka ma usypiać. Jakie tempo i jaka dynamika najbardziej do niej pasują?', options: ['wolne tempo i cicho', 'szybkie tempo i głośno', 'szybkie tempo i cicho', 'wolne tempo i bardzo głośno'], answer: 0, explain: 'Do zasypiania pasuje muzyka wolna i cicha.' },
        { id: '1bs4jq', q: 'Prawda czy fałsz?\nPauza to znak ciszy w muzyce.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Pauza oznacza, że przez pewien czas nie gramy i nie śpiewamy. Każda nuta ma swoją pauzę o tej samej długości.' },
      ],
    },
    {
      id: 'instrumenty-i-formy',
      name: 'Instrumenty, głosy i formy muzyczne',
      chapter: 'rozdziały I–III (gramy na instrumentach, rodzaje głosów, instrumenty perkusyjne; część form – w kolejnych klasach)',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 2 „Uczeń jako słuchacz”, wym. 3 (rozpoznaje instrumenty muzyczne i grupuje je ze względu na sposób wydobycia dźwięku), wym. 4 (pojęcia: głosy ludzkie, formy – piosenka, pieśń, kanon, koncert, symfonia; gatunki – opera, balet, musical, muzyka filmowa; zespoły wykonawcze – solo, chór, orkiestra), wym. 5 (funkcje muzyki: rozrywkowa, religijna, obrzędowa, sygnalizacyjna), wym. 7 (muzyka w mediach, reklamie, filmie i grach); dz. 1 wym. 8 (role w zespole, np. dyrygent, chórzysta, solista); dz. 4 wym. 2–3 (higiena głosu i słuchu). Wybór na klasę 4 – decyzja redakcyjna. Rozpoznawanie brzmienia instrumentów wymaga słuchania – ćwicz je na lekcjach.',
      theory: `
        <h3>Grupy instrumentów – jak powstaje dźwięk?</h3>
        <table>
          <tr><th>Grupa</th><th>Jak powstaje dźwięk</th><th>Przykłady</th></tr>
          <tr><td><b>strunowe smyczkowe</b></td><td>smyczek pociera struny</td><td>skrzypce, altówka, wiolonczela, kontrabas</td></tr>
          <tr><td><b>strunowe szarpane</b></td><td>szarpiesz struny palcami albo kostką</td><td>gitara, harfa</td></tr>
          <tr><td><b>dęte drewniane</b></td><td>dmuchasz w instrument</td><td>flet, klarnet, obój, fagot</td></tr>
          <tr><td><b>dęte blaszane</b></td><td>dmuchasz w ustnik, drgają wargi</td><td>trąbka, puzon, róg (waltornia), tuba</td></tr>
          <tr><td><b>perkusyjne</b></td><td>uderzasz albo potrząsasz</td><td>bęben, talerze, trójkąt, tamburyn, kotły, ksylofon, dzwonki</td></tr>
          <tr><td><b>klawiszowe</b></td><td>naciskasz klawisze</td><td>fortepian, pianino, organy</td></tr>
        </table>
        <p>Instrumenty perkusyjne dzielimy na <b>melodyczne</b> (grają różne wysokości dźwięków, np. dzwonki, ksylofon) i <b>niemelodyczne</b> (dają tylko rytm, np. bęben, trójkąt, tamburyn).</p>
        <div class="tip">💡 Im większy instrument smyczkowy, tym niżej gra. Najwyżej grają skrzypce, najniżej – ogromny kontrabas.</div>
        <h3>Głosy ludzkie</h3>
        <table>
          <tr><th></th><th>wysoki</th><th>niski</th></tr>
          <tr><td>głosy kobiece</td><td><b>sopran</b></td><td><b>alt</b></td></tr>
          <tr><td>głosy męskie</td><td><b>tenor</b></td><td><b>bas</b></td></tr>
        </table>
        <h3>Kto wykonuje muzykę?</h3>
        <ul>
          <li><b>solista</b> – wykonuje utwór sam albo ma główną partię; <b>duet</b> – 2 osoby, <b>trio</b> – 3, <b>kwartet</b> – 4,</li>
          <li><b>chór</b> – zespół śpiewaków; śpiewa w nim <b>chórzysta</b>,</li>
          <li><b>orkiestra</b> – duży zespół muzyków grających na instrumentach; kieruje nią <b>dyrygent</b>,</li>
          <li>muzyka <b>wokalna</b> – śpiewana; <b>instrumentalna</b> – grana; <b>wokalno-instrumentalna</b> – śpiew z instrumentami.</li>
        </ul>
        <h3>Formy i gatunki</h3>
        <table>
          <tr><th>Nazwa</th><th>Co to jest</th></tr>
          <tr><td><b>piosenka</b></td><td>krótki utwór do śpiewania; ma <b>zwrotki</b> (różne słowa) i <b>refren</b> (powtarzany fragment)</td></tr>
          <tr><td><b>kanon</b></td><td>wszyscy śpiewają tę samą melodię, ale zaczynają po kolei, jeden po drugim</td></tr>
          <tr><td><b>pieśń</b></td><td>utwór na głos z akompaniamentem, często poważniejszy niż piosenka</td></tr>
          <tr><td><b>symfonia</b></td><td>duży utwór na orkiestrę, zwykle z kilku części</td></tr>
          <tr><td><b>koncert</b></td><td>utwór na <b>solistę i orkiestrę</b> (to też nazwa występu muzyków)</td></tr>
          <tr><td><b>opera</b></td><td>przedstawienie, w którym aktorzy-śpiewacy <b>śpiewają</b> swoje role</td></tr>
          <tr><td><b>balet</b></td><td>przedstawienie, w którym historię opowiada <b>taniec</b> przy muzyce, bez słów</td></tr>
          <tr><td><b>musical</b></td><td>przedstawienie, w którym się śpiewa, tańczy i mówi</td></tr>
          <tr><td><b>muzyka filmowa</b></td><td>muzyka napisana do filmu; buduje nastrój scen</td></tr>
        </table>
        <h3>Do czego służy muzyka?</h3>
        <ul>
          <li><b>rozrywkowa</b> – dla przyjemności, do zabawy i tańca,</li>
          <li><b>religijna</b> – w kościele i podczas modlitwy,</li>
          <li><b>obrzędowa</b> – podczas uroczystości i zwyczajów (np. wesele, dożynki),</li>
          <li><b>sygnalizacyjna</b> – przekazuje sygnał (np. hejnał, sygnał na rozpoczęcie zawodów).</li>
        </ul>
        <p>W filmie, reklamie i grach muzyka buduje nastrój: szybka i głośna – napięcie, wolna i cicha – spokój. Krótka melodyjka w reklamie (dżingiel) ma się łatwo zapamiętać.</p>
        <h3>Dbaj o głos i słuch</h3>
        <ul>
          <li>Nie krzycz i nie śpiewaj na siłę. Gdy boli cię gardło, daj głosowi odpocząć.</li>
          <li>Przed śpiewaniem rozgrzej głos (np. mrucz cicho melodię), pij wodę.</li>
          <li>Słuchaj muzyki w słuchawkach <b>cicho</b> i rób przerwy. Głośny dźwięk może trwale uszkodzić słuch.</li>
          <li>Nie stój tuż przy głośnikach na koncercie.</li>
        </ul>
      `,
      infographicNote: 'Instrumenty dzielimy według tego, jak powstaje dźwięk; ten sam kolor – ta sama rodzina.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        root: { icon: '🎼', title: 'Instrumenty', text: 'Jak powstaje dźwięk?', kolor: 5 },
        branches: [
          { title: '🎻 Strunowe smyczkowe', text: 'smyczek pociera struny', items: ['skrzypce, altówka, wiolonczela, kontrabas'], kolor: 1 },
          { title: '🎸 Strunowe szarpane', text: 'szarpiesz struny palcami albo kostką', items: ['gitara, harfa'], kolor: 1 },
          { title: '🌬️ Dęte drewniane', text: 'dmuchasz w instrument', items: ['flet, klarnet, obój, fagot'], kolor: 3 },
          { title: '🎺 Dęte blaszane', text: 'dmuchasz w ustnik, drgają wargi', items: ['trąbka, puzon, róg, tuba'], kolor: 3 },
          { title: '🥁 Perkusyjne', text: 'uderzasz albo potrząsasz', items: ['melodyczne: dzwonki, ksylofon', 'niemelodyczne: bęben, trójkąt'], kolor: 2 },
          { title: '🎹 Klawiszowe', text: 'naciskasz klawisze', items: ['fortepian, pianino, organy'], kolor: 4 },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'Im większy instrument smyczkowy, tym niżej gra: skrzypce – najwyżej, kontrabas – najniżej.', kolor: 1 },
      },
      flashcards: [
        ['Instrumenty strunowe smyczkowe', 'Smyczek pociera struny: skrzypce, altówka, wiolonczela, kontrabas'],
        ['Instrumenty strunowe szarpane', 'Struny się szarpie: gitara, harfa'],
        ['Instrumenty dęte drewniane', 'flet, klarnet, obój, fagot'],
        ['Instrumenty dęte blaszane', 'trąbka, puzon, róg (waltornia), tuba'],
        ['Instrumenty perkusyjne', 'Dźwięk przez uderzanie lub potrząsanie: bęben, talerze, trójkąt, ksylofon'],
        ['Instrumenty klawiszowe', 'fortepian, pianino, organy'],
        ['Sopran i alt', 'Wysoki i niski głos kobiecy'],
        ['Tenor i bas', 'Wysoki i niski głos męski'],
        ['Dyrygent', 'Kieruje orkiestrą albo chórem'],
        ['Chór', 'Zespół śpiewaków'],
        ['Kanon', 'Ta sama melodia śpiewana przez kilka grup, które zaczynają po kolei'],
        ['Refren', 'Powtarzany fragment piosenki (zwrotki mają różne słowa)'],
        ['Symfonia', 'Duży utwór na orkiestrę, zwykle z kilku części'],
        ['Opera / balet', 'Przedstawienie śpiewane / przedstawienie tańczone bez słów'],
        ['Muzyka sygnalizacyjna', 'Przekazuje sygnał, np. hejnał'],
      ],
      questions: [
        { id: 'w9uuw4', q: 'Do której grupy należą skrzypce?', options: ['strunowe smyczkowe', 'dęte drewniane', 'perkusyjne', 'dęte blaszane'], answer: 0, explain: 'Na skrzypcach gra się smyczkiem, który pociera struny.' },
        { id: '15gp6g', q: 'Który instrument jest dęty blaszany?', options: ['trąbka', 'flet', 'gitara', 'bęben'], answer: 0, explain: 'Trąbka to instrument dęty blaszany. Flet jest dęty drewniany, gitara – strunowa, bęben – perkusyjny.' },
        { id: 'c7a0mh', q: 'Na którym instrumencie gra się, szarpiąc struny?', options: ['na gitarze', 'na wiolonczeli', 'na trąbce', 'na trójkącie'], answer: 0, explain: 'Gitara to instrument strunowy szarpany. Na wiolonczeli gra się zwykle smyczkiem.' },
        { id: 'jgdx7y', q: 'Który instrument perkusyjny jest melodyczny, czyli zagrasz na nim melodię?', options: ['dzwonki', 'trójkąt', 'tamburyn', 'bęben'], answer: 0, explain: 'Dzwonki mają sztabki o różnej wysokości dźwięku. Trójkąt, tamburyn i bęben dają tylko rytm.' },
        { id: 'ffsf37', q: 'Który instrument smyczkowy gra najniżej?', options: ['kontrabas', 'skrzypce', 'altówka', 'wiolonczela'], answer: 0, explain: 'Kontrabas jest największy i gra najniżej. Najwyżej grają skrzypce.' },
        { id: '63fson', q: 'Do której grupy należy fortepian?', options: ['instrumenty klawiszowe', 'instrumenty dęte', 'instrumenty smyczkowe', 'instrumenty szarpane'], answer: 0, explain: 'Na fortepianie gra się, naciskając klawisze.' },
        { id: '70dfl2', q: 'Jak nazywa się wysoki głos kobiecy?', options: ['sopran', 'alt', 'tenor', 'bas'], answer: 0, explain: 'Sopran – wysoki kobiecy, alt – niski kobiecy, tenor – wysoki męski, bas – niski męski.' },
        { id: '1b84bo', q: 'Jak nazywa się niski głos męski?', options: ['bas', 'tenor', 'sopran', 'alt'], answer: 0, explain: 'Bas to najniższy głos męski.' },
        { id: '06uyjt', q: 'Kto kieruje orkiestrą?', options: ['dyrygent', 'solista', 'chórzysta', 'kompozytor'], answer: 0, explain: 'Dyrygent pokazuje muzykom tempo, wejścia i dynamikę.' },
        { id: '79t05o', q: 'Jak nazywa się zespół, w którym śpiewają cztery osoby?', options: ['kwartet', 'trio', 'duet', 'chór'], answer: 0, explain: 'Duet – 2, trio – 3, kwartet – 4 osoby.' },
        { id: '8g08qx', q: 'Klasa śpiewa jedną melodię. Każdy rząd zaczyna śpiewać później niż poprzedni. Co śpiewa klasa?', options: ['kanon', 'symfonię', 'operę', 'refren'], answer: 0, explain: 'W kanonie ta sama melodia rozpoczyna się kolejno w różnych głosach.' },
        { id: 'hy2e8c', q: 'Jak nazywa się powtarzany fragment piosenki?', options: ['refren', 'zwrotka', 'takt', 'pauza'], answer: 0, explain: 'Zwrotki mają różne słowa, a refren powtarza się po każdej zwrotce.' },
        { id: '7t45gd', q: 'W którym przedstawieniu historię opowiada się tańcem, bez słów?', options: ['w balecie', 'w operze', 'w musicalu', 'w kanonie'], answer: 0, explain: 'W balecie tancerze opowiadają historię ruchem przy muzyce.' },
        { id: 'qt287l', q: 'W którym przedstawieniu aktorzy-śpiewacy śpiewają swoje role?', options: ['w operze', 'w balecie', 'w symfonii', 'w hejnale'], answer: 0, explain: 'W operze bohaterowie śpiewają.' },
        { id: '0e3lv4', q: 'Jak nazywa się duży utwór na orkiestrę, zwykle z kilku części?', options: ['symfonia', 'piosenka', 'kanon', 'kołysanka'], answer: 0, explain: 'Symfonia to duża forma na orkiestrę symfoniczną.' },
        { id: 'z1bq5i', q: 'Jaką funkcję ma hejnał grany na rozpoczęcie zawodów?', options: ['sygnalizacyjną', 'religijną', 'rozrywkową', 'obrzędową'], answer: 0, explain: 'Hejnał przekazuje sygnał – np. że coś się zaczyna.' },
        { id: 'kiy5cz', q: 'W filmie zbliża się groźna scena. Jaka muzyka najczęściej buduje napięcie?', options: ['coraz szybsza i coraz głośniejsza', 'wolna kołysanka', 'cisza i spokojna melodia', 'wesoła piosenka dla dzieci'], answer: 0, explain: 'Przyspieszanie i crescendo budują napięcie.' },
        { id: '2m5uio', q: 'Jak dbać o słuch, słuchając muzyki w słuchawkach?', options: ['słuchać cicho i robić przerwy', 'ustawić największą głośność', 'słuchać bez przerwy cały dzień', 'zasypiać w głośnych słuchawkach'], answer: 0, explain: 'Głośny dźwięk może trwale uszkodzić słuch. Cicho i z przerwami – to bezpieczny sposób.' },
        { id: '2fsre0', q: 'Prawda czy fałsz?\nGdy boli cię gardło, warto dać głosowi odpocząć i nie śpiewać na siłę.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To zasada higieny głosu. Śpiewanie na siłę może głos nadwyrężyć.' },
      ],
    },
    {
      id: 'muzyka-polska',
      name: 'Hymn Polski, hymn UE, krakowiak i Paderewski',
      chapter: 'rozdziały I.10 („Mazurek Dąbrowskiego”) i III.5 („Krakowiak – taniec narodowy”); pozostałe tańce, „Rota” i twórczość Chopina – w dziale „na zapas”',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 3 „Uczeń jako uczestnik kultury”, wym. 2 (hymn państwowy – melodia, słowa, postawa, okoliczności powstania), wym. 5 (polskie tańce narodowe – tu krakowiak), wym. 7 (Ignacy Jan Paderewski), wym. 8 (hymn Unii Europejskiej); dz. 1 wym. 6 (kroki krakowiaka); dz. 2 wym. 1 (zachowanie podczas wydarzeń muzycznych). Fakty sprawdzone 1.11.2026: hymn – Konstytucja RP art. 28 ust. 3, ustawa o godle, barwach i hymnie (Dz.U. 2025 poz. 299), dzieje.pl, zpe.gov.pl; hymn UE – european-union.europa.eu; Paderewski – dzieje.pl, PAP, IPN; tańce narodowe – zpe.gov.pl. Wybór na klasę 4 według podręcznika „Wszystko gra 4” (6.11.2026: polonez, mazur, kujawiak, oberek, „Rota” i Chopin przeniesione do działu „na zapas”).',
      theory: `
        <h3>„Mazurek Dąbrowskiego” – hymn Polski</h3>
        <ul>
          <li>Słowa napisał <b>Józef Wybicki</b> w <b>1797 r.</b> we Włoszech (w mieście Reggio nell’Emilia). Była to pieśń dla <b>Legionów Polskich</b> – polskich żołnierzy, którymi dowodził generał <b>Jan Henryk Dąbrowski</b>. Polski wtedy nie było na mapie, a legioniści chcieli walczyć o jej wolność.</li>
          <li>Pierwsza nazwa to „Pieśń Legionów Polskich we Włoszech”. Melodia jest ludowa – to <b>mazurek</b>; nie wiadomo, kto ją ułożył.</li>
          <li>Dziś „Mazurek Dąbrowskiego” jest hymnem Polski – zapisano to w Konstytucji.</li>
          <li>Gdy grają hymn, przyjmujemy <b>postawę zasadniczą</b>: stoimy prosto i w ciszy. Chłopcy i mężczyźni zdejmują czapki.</li>
        </ul>
        <h3>Hymn Unii Europejskiej</h3>
        <p>To melodia „<b>Ody do radości</b>” z <b>IX Symfonii</b> Ludwiga van <b>Beethovena</b>. Beethoven napisał muzykę do wiersza Friedricha Schillera. Hymn UE wykonuje się <b>bez słów</b> – samą melodią, bo muzyka jest wspólnym językiem wszystkich krajów Unii.</p>
        <h3>Krakowiak – taniec narodowy</h3>
        <ul>
          <li>Polska ma <b>pięć tańców narodowych</b>: polonez, krakowiak, mazur, kujawiak i oberek (o czterech pozostałych – w dziale „na zapas”).</li>
          <li><b>Krakowiak</b> pochodzi z <b>okolic Krakowa</b>. Jest <b>żywy i skoczny</b>.</li>
          <li>Ma metrum <b>2/4</b> – liczymy „raz, dwa”.</li>
        </ul>
        <div class="tip">💡 Tylko <b>krakowiak</b> ma metrum dwudzielne (2/4). Pozostałe tańce narodowe liczymy „na trzy”.</div>
        <h3>Ignacy Jan Paderewski</h3>
        <p>Słynny na cały świat <b>pianista</b> i kompozytor. Podczas koncertów i spotkań przekonywał ludzi na świecie, że Polska powinna odzyskać niepodległość. Pieniądze z koncertów przeznaczał też na pomoc dla Polaków. W <b>1919 r.</b> był <b>premierem</b> odrodzonej Polski.</p>
        <h3>Jak zachować się na koncercie?</h3>
        <ul>
          <li>Przychodzisz punktualnie, wyciszasz telefon, nie rozmawiasz podczas muzyki.</li>
          <li>W muzyce poważnej klaszczesz <b>po zakończeniu całego utworu</b>, a nie w przerwach między jego częściami.</li>
        </ul>
      `,
      infographicNote: 'Cztery gałęzie: dwa hymny, taniec narodowy z podręcznika i słynny pianista.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        root: { icon: '🇵🇱', title: 'Muzyka polska i europejska', kolor: 5 },
        branches: [
          { title: '🎵 Hymn Polski', items: ['„Mazurek Dąbrowskiego”', 'Józef Wybicki, 1797, Włochy', 'postawa zasadnicza'], kolor: 2 },
          { title: '🇪🇺 Hymn UE', items: ['„Oda do radości”', 'IX Symfonia Beethovena', 'bez słów'], kolor: 1 },
          { title: '💃 Krakowiak', items: ['z okolic Krakowa', 'żywy, skoczny', 'metrum 2/4'], kolor: 3 },
          { title: '🎹 Paderewski', items: ['słynny pianista', 'walczył o niepodległość', 'premier w 1919 r.'], kolor: 4 },
        ],
        bottom: { title: '👏 Na koncercie', text: 'Brawa po zakończeniu całego utworu.', kolor: 5 },
      },
      flashcards: [
        ['Hymn Polski', '„Mazurek Dąbrowskiego” – słowa Józef Wybicki, 1797 r.'],
        ['Gdzie powstał „Mazurek Dąbrowskiego”?', 'We Włoszech (Reggio nell’Emilia), w Legionach Polskich gen. Jana Henryka Dąbrowskiego'],
        ['Postawa podczas hymnu', 'Postawa zasadnicza: stoimy prosto i w ciszy, mężczyźni zdejmują czapki'],
        ['Hymn Unii Europejskiej', '„Oda do radości” z IX Symfonii Ludwiga van Beethovena, wykonywana bez słów'],
        ['Pięć polskich tańców narodowych', 'polonez, krakowiak, mazur, kujawiak, oberek'],
        ['Krakowiak', 'Żywy, skoczny taniec w metrum 2/4'],
        ['Ignacy Jan Paderewski', 'Słynny pianista i kompozytor; walczył o niepodległość Polski; premier w 1919 r.'],
        ['Brawa na koncercie', 'Po zakończeniu całego utworu, nie między jego częściami'],
      ],
      questions: [
        { id: 'ow19rn', q: 'Kto napisał słowa „Mazurka Dąbrowskiego”?', options: ['Józef Wybicki', 'Fryderyk Chopin', 'Jan Henryk Dąbrowski', 'Maria Konopnicka'], answer: 0, explain: 'Słowa napisał Józef Wybicki. Generał Dąbrowski dowodził legionami, dla których powstała pieśń.' },
        { id: '817k6m', q: 'Gdzie powstał „Mazurek Dąbrowskiego”?', options: ['we Włoszech, w Legionach Polskich', 'w Warszawie, na zamku królewskim', 'w Krakowie, na Wawelu', 'w Paryżu, w operze'], answer: 0, explain: 'Pieśń powstała w 1797 r. we Włoszech, gdzie walczyły Legiony Polskie gen. Jana Henryka Dąbrowskiego.' },
        { id: 'djtjhp', q: 'W którym roku powstał „Mazurek Dąbrowskiego”?', options: ['1797', '1918', '1810', '1945'], answer: 0, explain: 'Józef Wybicki napisał pieśń w 1797 r.' },
        { id: 'nuv5kf', q: 'Jak zachowujesz się, gdy grają hymn Polski?', options: ['stoję w postawie zasadniczej, w ciszy', 'siedzę i klaszczę do rytmu', 'rozmawiam po cichu', 'tańczę mazurka'], answer: 0, explain: 'Podczas hymnu stoimy prosto i w ciszy – to wyraz szacunku.' },
        { id: 'e848n6', q: 'Z jakiego utworu pochodzi melodia hymnu Unii Europejskiej?', options: ['z IX Symfonii Beethovena', 'z polonezu Chopina', 'z „Roty”', 'z „Mazurka Dąbrowskiego”'], answer: 0, explain: 'Hymn UE to „Oda do radości” z IX Symfonii Ludwiga van Beethovena.' },
        { id: 'muvtzn', q: 'Prawda czy fałsz?\nHymn Unii Europejskiej wykonuje się bez słów.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Hymn UE to sama melodia „Ody do radości”. Muzyka ma być wspólnym językiem krajów Unii.' },
        { id: 'me2gfg', q: 'Który polski taniec narodowy ma metrum 2/4?', options: ['krakowiak', 'polonez', 'kujawiak', 'mazur'], answer: 0, explain: 'Krakowiak jest jedynym polskim tańcem narodowym w metrum dwudzielnym. Pozostałe liczymy „na trzy”.' },
        { id: '4jpvtx', q: 'Ile jest polskich tańców narodowych?', options: ['5', '3', '7', '10'], answer: 0, explain: 'Polonez, krakowiak, mazur, kujawiak i oberek – razem pięć.' },
        { id: 'qy3jii', q: 'Z jakiego regionu pochodzi krakowiak?', options: ['z okolic Krakowa', 'z regionu Kujaw', 'z Mazowsza', 'z regionu Kaszub'], answer: 0, explain: 'Nazwa podpowiada: krakowiak – Kraków. Kujawiak pochodzi z Kujaw, a mazur – z Mazowsza.' },
        { id: 'm5ud28', q: 'Jaki charakter ma krakowiak?', options: ['żywy i skoczny', 'wolny i kołyszący', 'uroczysty i „chodzony”', 'smutny i bardzo wolny'], answer: 0, explain: 'Krakowiak jest żywy i skoczny, w metrum 2/4.' },
        { id: 'afiumn', q: 'Kim był Ignacy Jan Paderewski?', options: ['słynnym pianistą, który walczył o niepodległość Polski', 'autorem słów hymnu Polski', 'generałem Legionów Polskich', 'twórcą „Ody do radości”'], answer: 0, explain: 'Paderewski był pianistą i kompozytorem. Działał na rzecz niepodległości, a w 1919 r. był premierem Polski.' },
        { id: 'k3hle5', q: 'Kiedy klaszczesz na koncercie muzyki poważnej?', options: ['po zakończeniu całego utworu', 'w każdej przerwie między częściami', 'w trakcie gry, do rytmu', 'w ogóle nie klaszczę'], answer: 0, explain: 'Brawa są po całym utworze. Krótka cisza między częściami utworu to jeszcze nie koniec.' },
      ],
    },
    {
      id: 'swieta-w-muzyce',
      name: 'Kolędy i tradycje świąt: Boże Narodzenie i Wielkanoc',
      chapter: 'rozdziały II „Zimowy czas” (świąteczne tradycje, kolędujemy!) i III „Rytmy wiosny” (wielkanocne tradycje)',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 1 „Uczeń jako twórca i wykonawca”, wym. 2 (utwory z repertuaru tradycyjnego i ludowego – moduł kultura); dz. 2 „Uczeń jako słuchacz”, wym. 5 (funkcje muzyki: religijna, obrzędowa); dz. 3 „Uczeń jako uczestnik kultury”, wym. 4 (cechy polskiej muzyki tradycyjnej, pojęcia związane z folklorem), wym. 6 (utwory Fryderyka Chopina – Scherzo h-moll). Temat z podręcznika „Wszystko gra 4” (rozdziały II i III); elementy związane z religią katolicką – decyzja rodzica (3.11.2026). Fakty sprawdzone 3.11.2026: lekcje ZPE (zpe.gov.pl) „Polskie obyczaje bożonarodzeniowe: kolęda, pastorałka, kolędnicy i kolędowanie”, „Kolędujmy małemu – tradycje Bożego Narodzenia”, „Oj Maluśki – kolędy i pastorałki”, „Kolęda w muzyce artystycznej”, „Sztuka ludowa. Kalendarz świąt”, „Muzyka polskiego średniowiecza”; definicje – Słownik języka polskiego PWN (sjp.pwn.pl): kolęda, pastorałka, pasterka, adwent, turoń, jasełka, Wielkanoc, palma, święconka, rezurekcja, pisanka, kraszanka, śmigus-dyngus. Pominięte, bo źródła się różnią: rytm kolędy „Jezus malusieńki” (kujawiak albo chodzony).',
      theory: `
        <h3>Kolęda i pastorałka</h3>
        <table>
          <tr><th>Pieśń</th><th>Co to jest</th></tr>
          <tr><td><b>kolęda</b></td><td>pieśń religijna o narodzeniu Jezusa Chrystusa</td></tr>
          <tr><td><b>pastorałka</b></td><td>ludowa pieśń o Bożym Narodzeniu, wesoła i lekka; często opowiada o pasterzach i wiejskich zwyczajach – np. „Oj maluśki, maluśki” z Podhala</td></tr>
        </table>
        <ul>
          <li>Kolędy i pastorałki śpiewa się <b>od 24 grudnia do 2 lutego</b>. 2 lutego to święto Ofiarowania Pańskiego, nazywane też świętem Matki Boskiej Gromnicznej.</li>
          <li>Kolędy i pastorałki są najczęściej <b>anonimowe</b> – nie wiemy, kto je ułożył. Długo przekazywano je ustnie, z pokolenia na pokolenie, a zapisano dopiero po latach. Dlatego mają różne wersje.</li>
          <li>W kolędach często słychać <b>rytmy polskich tańców</b>, np. poloneza.</li>
        </ul>
        <h3>Znane polskie kolędy</h3>
        <table>
          <tr><th>Kolęda</th><th>Co warto wiedzieć</th></tr>
          <tr><td>„<b>Bóg się rodzi</b>”</td><td>słowa napisał poeta <b>Franciszek Karpiński</b>; melodia ma rytm <b>poloneza</b></td></tr>
          <tr><td>„<b>Lulajże, Jezuniu</b>”</td><td>kolęda-<b>kołysanka</b>; <b>Fryderyk Chopin</b> wplótł jej melodię w środkową część utworu fortepianowego <b>Scherzo h-moll</b></td></tr>
          <tr><td>„<b>Wśród nocnej ciszy</b>”</td><td>jedna z najczęściej śpiewanych kolęd; tradycyjnie rozpoczyna <b>pasterkę</b></td></tr>
          <tr><td>„W żłobie leży”</td><td>też w rytmie poloneza</td></tr>
          <tr><td>„Przybieżeli do Betlejem”, „Jezus malusieńki”</td><td>znane kolędy, których autorów nie znamy</td></tr>
        </table>
        <h3>Adwent, Wigilia i pasterka</h3>
        <ul>
          <li><b>Adwent</b> – cztery tygodnie przed Bożym Narodzeniem, czas oczekiwania. Dawniej w wielu regionach Polski grano wtedy na <b>ligawce</b> – długim, drewnianym instrumencie dętym.</li>
          <li><b>Wigilia</b> – 24 grudnia, uroczysta kolacja. Według tradycji zaczyna się, gdy na niebie pojawi się <b>pierwsza gwiazda</b>. Pod obrusem kładzie się sianko, a rodzina dzieli się <b>opłatkiem</b> i śpiewa kolędy.</li>
          <li><b>Boże Narodzenie</b> – 25 grudnia, święto na pamiątkę narodzin Jezusa.</li>
          <li><b>Pasterka</b> – msza w noc Bożego Narodzenia, o północy. Przypomina przybycie pasterzy do Betlejem.</li>
        </ul>
        <h3>Kolędnicy</h3>
        <p><b>Kolędnicy</b> chodzą od domu do domu: śpiewają kolędy, składają życzenia i odgrywają scenki. Gospodarze dają im smakołyki albo drobne datki. To <b>kolędowanie</b>.</p>
        <ul>
          <li>Kolędnicy chodzą z <b>gwiazdą</b> albo z <b>szopką</b> – w szopce kukiełki odgrywają przedstawienie. Bardzo znane są <b>szopki krakowskie</b>.</li>
          <li><b>Turoń</b> – kolędnik przebrany za rogate zwierzę, podobne do wołu. Kolędnicy przebierają się też np. za kozę, niedźwiedzia czy bociana.</li>
          <li><b>Herody</b> – grupy kolędników, które odgrywają opowieść o narodzeniu Jezusa, z zabawnymi, ludowymi scenkami.</li>
          <li><b>Jasełka</b> – przedstawienie o narodzeniu Chrystusa (często przygotowują je szkoły).</li>
        </ul>
        <div class="tip">💡 Pieśni i zwyczaje ludowe zapisywał w XIX wieku <b>Oskar Kolberg</b> – etnograf i kompozytor. <b>Etnografia</b> to nauka o tradycyjnej kulturze ludów. Dzięki Kolbergowi wiele pieśni i zwyczajów nie zostało zapomnianych.</div>
        <h3>Wielkanoc</h3>
        <p><b>Wielkanoc</b> to święto chrześcijan na pamiątkę <b>zmartwychwstania Chrystusa</b>. Obchodzimy je w <b>niedzielę po pierwszej wiosennej pełni Księżyca</b> – dlatego co roku wypada w innym dniu.</p>
        <table>
          <tr><th>Dzień</th><th>Zwyczaj</th></tr>
          <tr><td><b>Niedziela Palmowa</b> (ostatnia niedziela przed Wielkanocą)</td><td>w kościele święci się <b>palmy</b> – gałązki na pamiątkę wjazdu Jezusa do Jerozolimy</td></tr>
          <tr><td><b>Wielka Sobota</b></td><td><b>święconka</b> – potrawy w koszyczku (np. jajka, chleb, sól) święcone w kościele</td></tr>
          <tr><td><b>Niedziela Wielkanocna</b></td><td><b>rezurekcja</b> – uroczyste nabożeństwo z procesją</td></tr>
          <tr><td><b>Poniedziałek Wielkanocny</b> (lany poniedziałek)</td><td><b>śmigus-dyngus</b> – polewanie się wodą; w niektórych wsiach chłopcy chodzą też z kogutkiem</td></tr>
        </table>
        <ul>
          <li><b>Pisanka</b> – jajko barwione lub malowane na Wielkanoc. <b>Kraszanka</b> – pisanka pomalowana na jeden kolor, bez wzorów.</li>
          <li><b>Pieśni wielkanocne</b> – np. „<b>Chrystus zmartwychwstał jest</b>” i „<b>Wesoły nam dzień dziś nastał</b>”. Powstały w średniowieczu (w XIV wieku), a w kościołach śpiewa się je do dziś.</li>
        </ul>
        <h3>Do czego służy ta muzyka?</h3>
        <p>Kolędy i pieśni wielkanocne to <b>muzyka religijna</b> – śpiewa się je w kościele i w domu. Pieśni kolędników towarzyszą zwyczajom, czyli obrzędom – to <b>muzyka obrzędowa</b>.</p>
      `,
      infographicNote: 'Porównaj w poziomie: to samo pytanie dla Bożego Narodzenia i dla Wielkanocy.',
      infographic: {
        type: 'porownanie',
        top: { kolor: 5, title: '🎶 Święta w muzyce', text: 'Pieśni religijne i ludowe – przekazywane z pokolenia na pokolenie' },
        kolumny: [{ title: '🎄 Boże Narodzenie', kolor: 1 }, { title: '🐣 Wielkanoc', kolor: 3 }],
        wiersze: [
          { label: 'na pamiątkę', cells: ['narodzin Jezusa', 'zmartwychwstania Chrystusa'] },
          { label: 'kiedy?', cells: ['25 grudnia (Wigilia – 24 grudnia)', 'niedziela po pierwszej wiosennej pełni'] },
          { label: 'pieśni', cells: ['kolędy i pastorałki', '„Wesoły nam dzień dziś nastał”'], bold: true },
          { label: 'w kościele', cells: ['pasterka – msza o północy', 'rezurekcja – nabożeństwo z procesją'] },
          { label: 'zwyczaje', cells: ['opłatek, kolędnicy z gwiazdą i szopką', 'palmy, święconka, pisanki, śmigus-dyngus'] },
        ],
        bottom: { kolor: 4, title: '💡 Zapamiętaj', items: ['„Bóg się rodzi” – rytm poloneza, słowa F. Karpiński', '„Lulajże, Jezuniu” – w Scherzu h-moll Chopina', 'kolędy śpiewamy od 24 grudnia do 2 lutego'] },
      },
      flashcards: [
        ['Kolęda', 'Pieśń religijna o narodzeniu Jezusa Chrystusa'],
        ['Pastorałka', 'Wesoła, ludowa pieśń o Bożym Narodzeniu – często o pasterzach i wiejskich zwyczajach'],
        ['Kiedy śpiewamy kolędy?', 'Od 24 grudnia do 2 lutego'],
        ['„Bóg się rodzi”', 'Słowa: Franciszek Karpiński; melodia w rytmie poloneza'],
        ['„Lulajże, Jezuniu”', 'Kolęda-kołysanka; Chopin wplótł jej melodię w Scherzo h-moll'],
        ['„Wśród nocnej ciszy”', 'Kolęda, która tradycyjnie rozpoczyna pasterkę'],
        ['Pasterka', 'Msza w noc Bożego Narodzenia (o północy) – na pamiątkę przybycia pasterzy do Betlejem'],
        ['Adwent', 'Cztery tygodnie przed Bożym Narodzeniem; dawniej grano wtedy na ligawce (drewniany instrument dęty)'],
        ['Wigilia', '24 grudnia: kolacja od pierwszej gwiazdy, opłatek, sianko pod obrusem, kolędy'],
        ['Kolędnicy', 'Chodzą od domu do domu z gwiazdą lub szopką, śpiewają kolędy i składają życzenia'],
        ['Turoń', 'Kolędnik przebrany za rogate zwierzę, podobne do wołu'],
        ['Herody / jasełka', 'Przedstawienia o narodzeniu Jezusa (w herodach – z zabawnymi, ludowymi scenkami)'],
        ['Oskar Kolberg', 'Etnograf i kompozytor z XIX wieku; zapisywał pieśni i zwyczaje ludowe'],
        ['Wielkanoc', 'Święto na pamiątkę zmartwychwstania Chrystusa; niedziela po pierwszej wiosennej pełni Księżyca'],
        ['Niedziela Palmowa', 'Ostatnia niedziela przed Wielkanocą – święci się palmy na pamiątkę wjazdu Jezusa do Jerozolimy'],
        ['Święconka', 'Potrawy w koszyczku święcone w kościele w Wielką Sobotę'],
        ['Pisanka / kraszanka', 'Jajko barwione lub malowane na Wielkanoc / pisanka w jednym kolorze, bez wzorów'],
        ['Śmigus-dyngus', 'Polewanie się wodą w Poniedziałek Wielkanocny (lany poniedziałek)'],
        ['Pieśni wielkanocne', '„Chrystus zmartwychwstał jest”, „Wesoły nam dzień dziś nastał” – ze średniowiecza'],
      ],
      questions: [
        { id: '06lg0w', q: 'Co to jest kolęda?', options: ['pieśń religijna o narodzeniu Jezusa', 'pieśń ludowa o wiosennych pracach w polu', 'szybki taniec ludowy z okolic Krakowa', 'pieśń żołnierzy Legionów Polskich'], answer: 0, explain: 'Kolęda to pieśń religijna o narodzeniu Jezusa Chrystusa. Śpiewamy ją w okresie Bożego Narodzenia.' },
        { id: '23efxs', q: 'Co to jest pastorałka?', options: ['wesoła, ludowa pieśń o Bożym Narodzeniu', 'uroczysta pieśń śpiewana w kościele na Wielkanoc', 'hymn śpiewany na początku koncertu', 'smutna pieśń o pożegnaniu z domem'], answer: 0, explain: 'Pastorałka to lekka, wesoła pieśń ludowa o Bożym Narodzeniu – często o pasterzach i wiejskich zwyczajach.' },
        { id: 'pgcjjb', q: 'Kiedy tradycyjnie śpiewa się kolędy?', options: ['od 24 grudnia do 2 lutego', 'od 1 listopada do 24 grudnia', 'tylko w jeden dzień – w Wigilię', 'od Wielkanocy do początku wakacji'], answer: 0, explain: 'Kolędy i pastorałki śpiewa się od Wigilii, 24 grudnia, do 2 lutego – święta Ofiarowania Pańskiego.' },
        { id: 'hmne08', q: 'Kto napisał słowa kolędy „Bóg się rodzi”?', options: ['Franciszek Karpiński', 'Józef Wybicki', 'Ignacy Jan Paderewski', 'Maria Konopnicka'], answer: 0, explain: 'Słowa kolędy „Bóg się rodzi” napisał poeta Franciszek Karpiński. Wybicki napisał słowa hymnu, a Konopnicka – „Roty”.' },
        { id: '8webvl', q: 'W rytmie jakiego tańca jest kolęda „Bóg się rodzi”?', options: ['poloneza', 'krakowiaka', 'oberka', 'walca'], answer: 0, explain: 'Melodia „Bóg się rodzi” ma rytm poloneza – uroczystego polskiego tańca narodowego.' },
        { id: '3kdzfb', q: 'Melodię której kolędy Fryderyk Chopin wplótł w Scherzo h-moll?', options: ['„Lulajże, Jezuniu”', '„Bóg się rodzi”', '„Przybieżeli do Betlejem”', '„W żłobie leży”'], answer: 0, explain: 'W środkowej, spokojnej części Scherza h-moll Chopin użył melodii kolędy-kołysanki „Lulajże, Jezuniu”.' },
        { id: 'f1w3zw', q: 'Prawda czy fałsz?\n„Lulajże, Jezuniu” to kolęda-kołysanka.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To prawda. „Lulajże, Jezuniu” to spokojna kołysanka dla małego Jezusa.' },
        { id: 'm2dulc', q: 'Która kolęda tradycyjnie rozpoczyna pasterkę?', options: ['„Wśród nocnej ciszy”', '„Lulajże, Jezuniu”', '„Oj maluśki, maluśki”', '„W żłobie leży”'], answer: 0, explain: '„Wśród nocnej ciszy” to jedna z najczęściej śpiewanych kolęd – tradycyjnie zaczyna się nią pasterkę.' },
        { id: 'w6y2p0', q: 'Co to jest pasterka?', options: ['msza w noc Bożego Narodzenia', 'kolacja wigilijna z opłatkiem', 'pieśń pasterzy z Podhala', 'kolędnik przebrany za zwierzę'], answer: 0, explain: 'Pasterka to msza o północy w noc Bożego Narodzenia. Przypomina przybycie pasterzy do Betlejem.' },
        { id: '5owij4', q: 'Kiedy według tradycji zaczyna się kolacja wigilijna?', options: ['gdy na niebie pojawi się pierwsza gwiazda', 'gdy zegar na wieży kościoła wybije północ', 'zaraz po powrocie wszystkich z pasterki', 'w samo południe, gdy słońce jest najwyżej'], answer: 0, explain: 'Według tradycji do wigilijnego stołu siadamy, gdy na niebie pojawi się pierwsza gwiazda.' },
        { id: 'tqthwg', q: 'Kim jest turoń?', options: ['kolędnikiem przebranym za rogate zwierzę', 'pasterzem, o którym śpiewa się w kolędach', 'długim, drewnianym instrumentem dętym', 'etnografem z XIX wieku, znawcą zwyczajów'], answer: 0, explain: 'Turoń to kolędnik przebrany za rogate zwierzę, podobne do wołu.' },
        { id: 'opukm8', q: 'Co robią kolędnicy?', options: ['chodzą od domu do domu, śpiewają kolędy i składają życzenia', 'grają w orkiestrze podczas pasterki w kościele o północy', 'pieką pierniki i ubierają choinkę w dniu Wigilii przed kolacją', 'piszą słowa i melodie nowych kolęd na szkolny konkurs'], answer: 0, explain: 'Kolędnicy odwiedzają domy z gwiazdą albo szopką, śpiewają kolędy, składają życzenia i odgrywają scenki.' },
        { id: '5dnf2i', q: 'Czym są herody?', options: ['przedstawieniem kolędników o narodzeniu Jezusa', 'kolędami śpiewanymi zawsze w rytmie poloneza', 'średniowiecznymi pieśniami na Wielkanoc w kościele', 'ozdobami z bibuły wieszanymi na choince'], answer: 0, explain: 'Herody to grupy kolędników, które odgrywają opowieść o narodzeniu Jezusa, z zabawnymi, ludowymi scenkami.' },
        { id: 'sh0r7j', q: 'Na jakim instrumencie w Adwencie grano dawniej w wielu regionach Polski?', options: ['na ligawce', 'na gitarze', 'na kontrabasie', 'na tamburynie'], answer: 0, explain: 'Ligawka to długi, drewniany instrument dęty. W Adwencie grano na niej w wielu regionach Polski.' },
        { id: '6lg5bm', q: 'Kim był Oskar Kolberg?', options: ['etnografem, który zapisywał pieśni i zwyczaje ludowe', 'poetą, który napisał słowa do kolędy „Bóg się rodzi”', 'kompozytorem, który ułożył melodię hymnu Unii Europejskiej', 'pianistą, który był premierem odrodzonej Polski'], answer: 0, explain: 'Oskar Kolberg żył w XIX wieku. Jeździł po wsiach i zapisywał pieśni, melodie i zwyczaje ludowe.' },
        { id: 'd8zf9g', q: 'Kiedy obchodzimy Wielkanoc?', options: ['w niedzielę po pierwszej wiosennej pełni Księżyca', 'zawsze w pierwszą niedzielę kwietnia każdego roku', 'zawsze w ostatnią niedzielę marca, przed kwietniem', 'w pierwszy dzień kalendarzowej wiosny w marcu'], answer: 0, explain: 'Wielkanoc wypada w niedzielę po pierwszej wiosennej pełni Księżyca – dlatego co roku jest w innym dniu.' },
        { id: 'gq3qlu', q: 'Co święci się w kościele w Niedzielę Palmową?', options: ['palmy z gałązek', 'potrawy w koszyczku', 'jajka na śmigus-dyngus', 'opłatek na Wigilię'], answer: 0, explain: 'W Niedzielę Palmową święci się palmy – na pamiątkę wjazdu Jezusa do Jerozolimy. Potrawy święci się w Wielką Sobotę.' },
        { id: '0k3ee7', q: 'Co to jest święconka?', options: ['potrawy w koszyczku święcone w Wielką Sobotę', 'uroczysta msza o północy w noc Bożego Narodzenia', 'średniowieczna pieśń o zmartwychwstaniu', 'palma z gałązek na Niedzielę Palmową'], answer: 0, explain: 'Święconka to potrawy (np. jajka, chleb, sól) w koszyczku, święcone w kościele w Wielką Sobotę.' },
        { id: 'shf3cf', q: 'Czym jest kraszanka?', options: ['pisanką w jednym kolorze, bez wzorów', 'pisanką z wieloma kolorowymi wzorami', 'koszyczkiem z potrawami na święconkę', 'kolędą śpiewaną w Wielkanoc'], answer: 0, explain: 'Kraszanka to pisanka pomalowana na jeden kolor, bez wzorów.' },
        { id: '1td7kc', q: 'Na czym polega śmigus-dyngus?', options: ['na polewaniu się wodą w Poniedziałek Wielkanocny', 'na święceniu palm w kościele w Niedzielę Palmową', 'na chodzeniu z gwiazdą i szopką od domu do domu', 'na śpiewaniu kolęd przy wigilijnym stole z rodziną'], answer: 0, explain: 'Śmigus-dyngus to zwyczaj polewania się wodą w Poniedziałek Wielkanocny – stąd nazwa „lany poniedziałek”.' },
        { id: 'l89x00', q: 'Która z tych pieśni jest pieśnią wielkanocną?', options: ['„Wesoły nam dzień dziś nastał”', '„Przybieżeli do Betlejem”', '„Anioł pasterzom mówił”', '„Gdy się Chrystus rodzi”'], answer: 0, explain: '„Wesoły nam dzień dziś nastał” to średniowieczna pieśń wielkanocna. Pozostałe to kolędy.' },
        { id: '1vrqn9', q: 'Prawda czy fałsz?\nKolędy i pastorałki są najczęściej utworami anonimowymi – nie wiemy, kto je ułożył.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To prawda. Długo przekazywano je ustnie, z pokolenia na pokolenie, dlatego autorzy zwykle są nieznani.' },
      ],
    },
    {
      id: 'cudowne-dzieci',
      name: 'Cudowne dzieci muzyki i muzyka ilustracyjna',
      chapter: 'rozdziały II.6 „Cudowne dzieci muzyki” i IV.3 „O czym może mówić muzyka?” (muzyka ilustracyjna i programowa; „Zima” Vivaldiego pasuje też do lekcji II.4 „Zima malowana dźwiękami”)',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 3 wym. 6 (utwory Fryderyka Chopina), dz. 2 wym. 2 (słucha utworów i rozpoznaje ich charakter), dz. 1 wym. 9–10 (elementy muzyki: tempo, dynamika, barwa) – przykłady muzyki ilustracyjnej i znani kompozytorzy. Wybór na klasę 4 według podręcznika „Wszystko gra 4”; które utwory omawia podręcznik, nie wiadomo – przykłady wybrano redakcyjnie. Fakty sprawdzone 6.11.2026: definicje – Słownik języka polskiego PWN (muzyka programowa, muzyka ilustracyjna, wunderkind – „cudowne dziecko”) i lekcja ZPE „Muzyka ilustracyjna i programowa” (zpe.gov.pl/a/DIjC0yUDV; także muzyka absolutna, Musorgski); Mozart – lekcja ZPE „Wybrane opery Mozarta” (DcPew4xdW; daty, lekcje u ojca, podróże z siostrą od 1762 r., pierwszy utwór w wieku 5 lat – też Larousse przez wyszukiwarkę, „Czarodziejski flet” 1791), „Eine kleine Nachtmusik” na smyczki – katalog Mozarteum przez wyszukiwarkę; Chopin – lekcje ZPE „Wybrani kompozytorzy XIX wieku – Fryderyk Chopin” (DeoY4I6LS: Żywny, Elsner, Polonez g-moll z 1817 r.), „Rodem Warszawianin…” (D9YLc12XQ, DrekPiXYV: pierwszy publiczny występ 24.02.1818 w Pałacu Radziwiłłowskim) i NIFC przez wyszukiwarkę; Vivaldi – ZPE „Cztery pory roku Antonia Vivaldiego” (PWl3eZZK0) i „Pory roku w muzyce” (DlchV2yam); Saint-Saëns, Grieg, Musorgski – ZPE „Jak muzyka opowiada” (DbqQmZX0k); Prokofiew – ZPE „Między awangardą a tradycją” (DcNaLirph) i zgodne opracowania; „Lot trzmiela” – zgodne źródła przez wyszukiwarkę. Pominięte, bo źródła się różnią: dzień urodzin Chopina, wiek Mozarta, gdy zaczął grać, rok wydania „Czterech pór roku”, autor sonetów, instrumenty myśliwych w „Piotrusiu i wilku”, liczba części „Obrazków z wystawy”.',
      theory: `
        <h3>Cudowne dzieci</h3>
        <p><b>Cudowne dziecko</b> to dziecko o wybitnych zdolnościach – np. takie, które już jako małe dziecko świetnie gra i komponuje.</p>
        <h3>Wolfgang Amadeusz Mozart</h3>
        <ul>
          <li>Urodził się w <b>1756 r.</b> w <b>Salzburgu</b>, zmarł w <b>1791 r.</b> w <b>Wiedniu</b> – żył niecałe 36 lat.</li>
          <li>Pierwszych lekcji gry udzielał mu <b>ojciec, Leopold</b> – skrzypek i kompozytor.</li>
          <li>Pierwszy utwór skomponował, gdy miał <b>5 lat</b>.</li>
          <li>Od <b>1762 r.</b> (miał wtedy 6 lat) podróżował z ojcem i starszą siostrą <b>Marią Anną (Nannerl)</b> po Europie i grał na dworach królów i książąt jako cudowne dziecko.</li>
          <li>Znane utwory: opera „<b>Czarodziejski flet</b>” (1791) i serenada „<b>Eine kleine Nachtmusik</b>” na instrumenty smyczkowe.</li>
        </ul>
        <h3>Mały Fryderyk Chopin</h3>
        <ul>
          <li>Urodził się w <b>1810 r.</b> w <b>Żelazowej Woli</b>.</li>
          <li>Gdy miał 6 lat, zaczął naukę gry na fortepianie u <b>Wojciecha Żywnego</b>.</li>
          <li>W <b>1817 r.</b>, gdy miał <b>7 lat</b>, wydano jego pierwszy utwór – <b>Polonez g-moll</b>.</li>
          <li>W <b>1818 r.</b>, w wieku <b>8 lat</b>, po raz pierwszy zagrał publicznie – na koncercie w Warszawie.</li>
          <li>Później kompozycji uczył go <b>Józef Elsner</b>. O swoim uczniu napisał: „szczególna zdatność, geniusz muzyczny”.</li>
        </ul>
        <h3>O czym może mówić muzyka?</h3>
        <table>
          <tr><th>Rodzaj</th><th>Co to jest</th></tr>
          <tr><td><b>muzyka ilustracyjna</b></td><td>dźwiękami <b>ilustruje</b> (naśladuje) zjawiska: śpiew ptaków, burzę, szum wody, kroki; używa się jej też w filmie i w teatrze</td></tr>
          <tr><td><b>muzyka programowa</b></td><td>jest związana z jakąś <b>treścią</b> – opowieścią, obrazem, wierszem; kompozytor podaje ją w <b>tytule</b> albo w opisie utworu</td></tr>
          <tr><td><b>muzyka absolutna</b></td><td>nie opowiada żadnej historii; tytuł mówi tylko, jaka to forma, np. sonata, koncert, etiuda</td></tr>
        </table>
        <p>Jak muzyka „maluje”? Kompozytor dobiera <b>instrumenty</b> (barwę), <b>tempo</b>, <b>dynamikę</b> i wysokość dźwięków. Niski, ciężki kontrabas pasuje do słonia, a wysoki, zwinny flet – do ptaszka.</p>
        <h3>Słynne przykłady</h3>
        <ul>
          <li><b>Antonio Vivaldi</b>, „<b>Cztery pory roku</b>” – cztery koncerty na <b>skrzypce</b> z orkiestrą: „Wiosna”, „Lato”, „Jesień”, „Zima”. Do każdego dołączono wiersz (sonet). W „Wiośnie” słychać śpiew ptaków, szum strumienia i burzę.</li>
          <li><b>Camille Saint-Saëns</b>, „<b>Karnawał zwierząt</b>” – „Łabędzia” grają wiolonczela i fortepian, a „Słonia” – kontrabasy.</li>
          <li><b>Edvard Grieg</b>, „<b>W grocie Króla Gór</b>” – ta sama melodia powtarza się <b>coraz szybciej i coraz głośniej</b>.</li>
          <li><b>Modest Musorgski</b>, „<b>Obrazki z wystawy</b>” – utwory na fortepian o obrazach przyjaciela, malarza Wiktora Hartmanna, np. „Taniec kurcząt w skorupkach”, „Baba Jaga”.</li>
          <li><b>Nikołaj Rimski-Korsakow</b>, „<b>Lot trzmiela</b>” – fragment opery „Bajka o carze Sałtanie”; szybkie dźwięki naśladują brzęczenie trzmiela.</li>
        </ul>
        <h3>„Piotruś i wilk” – bajka z instrumentami</h3>
        <p><b>Siergiej Prokofiew</b> napisał bajkę symfoniczną dla <b>narratora i orkiestry</b>. Chciał przy okazji pokazać dzieciom instrumenty orkiestry. Każda postać ma swój instrument i swoją melodię:</p>
        <table>
          <tr><th>Postać</th><th>Instrument</th></tr>
          <tr><td>🐦 ptaszek</td><td><b>flet</b></td></tr>
          <tr><td>🦆 kaczka</td><td><b>obój</b></td></tr>
          <tr><td>🐈 kot</td><td><b>klarnet</b></td></tr>
          <tr><td>👴 dziadek</td><td><b>fagot</b></td></tr>
          <tr><td>🐺 wilk</td><td><b>rogi</b> (waltornie)</td></tr>
          <tr><td>👦 Piotruś</td><td><b>instrumenty smyczkowe</b></td></tr>
        </table>
        <div class="tip">💡 Tytuł mówi, o czym jest utwór? To muzyka programowa. Dźwięki naśladują ptaki, burzę czy brzęczenie? To muzyka ilustracyjna.</div>
      `,
      infographicNote: 'U góry cudowne dzieci, niżej – trzy rodzaje muzyki, a na dole postacie z „Piotrusia i wilka”.',
      infographic: {
        type: 'drzewo', kolumny: 2,
        root: { icon: '🎼', title: 'Cudowne dzieci i muzyka, która opowiada', kolor: 5 },
        branches: [
          { title: '👦 Mozart', items: ['1756 Salzburg – 1791 Wiedeń', 'komponował od 5 lat', 'koncerty z ojcem i siostrą'], kolor: 1 },
          { title: '👦 Chopin', items: ['1810 Żelazowa Wola', '7 lat – Polonez g-moll', '8 lat – pierwszy koncert'], kolor: 2 },
          { title: '🐦 Muzyka ilustracyjna', items: ['naśladuje zjawiska', 'ptaki, burza, szum wody'], kolor: 3 },
          { title: '📖 Muzyka programowa', items: ['treść w tytule lub opisie', '„Cztery pory roku”, „Obrazki z wystawy”'], kolor: 4 },
        ],
        bottom: { title: '🐺 „Piotruś i wilk” (Prokofiew)', items: ['ptaszek – flet, kaczka – obój, kot – klarnet', 'dziadek – fagot, wilk – rogi, Piotruś – smyczki'], kolor: 5 },
      },
      flashcards: [
        ['Cudowne dziecko', 'Dziecko o wybitnych zdolnościach'],
        ['Wolfgang Amadeusz Mozart', 'Ur. 1756 w Salzburgu, zm. 1791 w Wiedniu; komponował od 5 lat'],
        ['Kto uczył małego Mozarta?', 'Ojciec, Leopold Mozart – skrzypek i kompozytor'],
        ['Nannerl', 'Maria Anna – starsza siostra Mozarta; razem koncertowali po Europie'],
        ['Pierwszy wydany utwór Chopina', 'Polonez g-moll, 1817 r. – Chopin miał 7 lat'],
        ['Nauczyciele Chopina', 'Wojciech Żywny (fortepian), Józef Elsner (kompozycja)'],
        ['Muzyka ilustracyjna', 'Dźwiękami ilustruje zjawiska: ptaki, burzę, szum wody'],
        ['Muzyka programowa', 'Związana z treścią podaną w tytule lub opisie utworu'],
        ['Muzyka absolutna', 'Bez treści pozamuzycznej; tytuł to forma: sonata, koncert, etiuda'],
        ['„Cztery pory roku”', 'Antonio Vivaldi – cztery koncerty skrzypcowe z sonetami'],
        ['„Karnawał zwierząt”', 'Camille Saint-Saëns – np. „Łabędź” (wiolonczela), „Słoń” (kontrabasy)'],
        ['„Piotruś i wilk”', 'Siergiej Prokofiew – bajka symfoniczna; każda postać ma swój instrument'],
        ['„W grocie Króla Gór”', 'Edvard Grieg – melodia coraz szybsza i głośniejsza'],
      ],
      questions: [
        { id: 'mpgsp6', q: 'Kogo nazywamy „cudownym dzieckiem”?', options: ['dziecko o wybitnych zdolnościach', 'dziecko, które gra na kilku instrumentach naraz', 'każde dziecko, które chodzi do szkoły muzycznej', 'dziecko, które śpiewa w chórze kościelnym'], answer: 0, explain: 'Cudowne dziecko to dziecko o wybitnych zdolnościach – jak Mozart czy Chopin.' },
        { id: '9wv53w', q: 'Gdzie urodził się Wolfgang Amadeusz Mozart?', options: ['w Salzburgu', 'w Warszawie', 'w Paryżu', 'w Wenecji'], answer: 0, explain: 'Mozart urodził się w 1756 r. w Salzburgu, a zmarł w 1791 r. w Wiedniu.' },
        { id: '87v56p', q: 'Kto dawał małemu Mozartowi pierwsze lekcje muzyki?', options: ['jego ojciec Leopold', 'Fryderyk Chopin', 'Józef Elsner', 'Antonio Vivaldi'], answer: 0, explain: 'Pierwszych lekcji udzielał mu ojciec, Leopold Mozart – skrzypek i kompozytor.' },
        { id: 'l7le7s', q: 'Ile lat miał Mozart, gdy skomponował swój pierwszy utwór?', options: ['5', '15', '25', '10'], answer: 0, explain: 'Pierwszy utwór Mozart skomponował w wieku 5 lat – dlatego nazywano go cudownym dzieckiem.' },
        { id: 'lcrvql', q: 'Z kim mały Mozart podróżował po Europie i dawał koncerty?', options: ['z ojcem i starszą siostrą', 'z dziadkiem i młodszym bratem', 'sam, bez rodziny', 'z orkiestrą szkolną'], answer: 0, explain: 'Od 1762 r. Wolfgang podróżował z ojcem i starszą siostrą Marią Anną (Nannerl) i grał na dworach.' },
        { id: 'q69xcp', q: 'Który utwór skomponował Mozart?', options: ['operę „Czarodziejski flet”', 'koncerty „Cztery pory roku”', 'bajkę „Piotruś i wilk”', 'cykl „Karnawał zwierząt”'], answer: 0, explain: '„Czarodziejski flet” to opera Mozarta z 1791 r. „Cztery pory roku” napisał Vivaldi, „Piotrusia i wilka” – Prokofiew, „Karnawał zwierząt” – Saint-Saëns.' },
        { id: '0w2uzs', q: 'Gdzie urodził się Fryderyk Chopin?', options: ['w Żelazowej Woli', 'w Paryżu', 'w Krakowie', 'w Wiedniu'], answer: 0, explain: 'Chopin urodził się w 1810 r. w Żelazowej Woli na Mazowszu. Zmarł w Paryżu.' },
        { id: 'ev2tie', q: 'Jaki był pierwszy wydany utwór siedmioletniego Fryderyka Chopina?', options: ['Polonez g-moll', 'Mazurek Dąbrowskiego', 'Oda do radości', 'Lot trzmiela'], answer: 0, explain: 'W 1817 r. wydano Polonez g-moll – Chopin miał wtedy 7 lat.' },
        { id: 'rz3omv', q: 'Ile lat miał Chopin, gdy po raz pierwszy zagrał publicznie na koncercie?', options: ['8', '18', '3', '28'], answer: 0, explain: 'W 1818 r., w wieku 8 lat, Chopin zagrał na koncercie w Warszawie.' },
        { id: '1tvaov', q: 'Kto był pierwszym nauczycielem gry na fortepianie Fryderyka Chopina?', options: ['Wojciech Żywny', 'Leopold Mozart', 'Józef Wybicki', 'Ignacy Jan Paderewski'], answer: 0, explain: 'Grę na fortepianie zaczął u Wojciecha Żywnego. Kompozycji uczył go później Józef Elsner.' },
        { id: 'n1kc5q', q: 'Muzyka naśladuje śpiew ptaków, burzę i szum strumienia. Jak nazywamy taką muzykę?', options: ['ilustracyjną', 'absolutną', 'ludową', 'religijną'], answer: 0, explain: 'Muzyka ilustracyjna dźwiękami ilustruje zjawiska – ptaki, burzę, szum wody.' },
        { id: '7xp9g6', q: 'Utwór opowiada historię, którą kompozytor podał w tytule i opisie. To muzyka…', options: ['programowa', 'absolutna', 'taneczna', 'wojskowa'], answer: 0, explain: 'Muzyka programowa jest związana z treścią – opowieścią, obrazem, wierszem – podaną w tytule albo opisie.' },
        { id: 'f57710', q: 'Utwór ma tytuł „Sonata”. Nie opowiada żadnej historii. To muzyka…', options: ['absolutna', 'programowa', 'ilustracyjna', 'filmowa'], answer: 0, explain: 'Muzyka absolutna nie ma treści pozamuzycznej – tytuł mówi tylko o formie: sonata, koncert, etiuda.' },
        { id: '1kmoa9', q: 'Kto skomponował „Cztery pory roku”?', options: ['Antonio Vivaldi', 'Wolfgang Amadeusz Mozart', 'Fryderyk Chopin', 'Edvard Grieg'], answer: 0, explain: '„Cztery pory roku” to cztery koncerty skrzypcowe Antonia Vivaldiego: „Wiosna”, „Lato”, „Jesień” i „Zima”.' },
        { id: 'i24fqt', q: 'Który instrument gra główną rolę w „Czterech porach roku” Vivaldiego?', options: ['skrzypce', 'fortepian', 'trąbka', 'kontrabas'], answer: 0, explain: 'To koncerty na skrzypce z orkiestrą.' },
        { id: 'r7n5lt', q: 'Jakie instrumenty grają „Słonia” w „Karnawale zwierząt” Saint-Saënsa?', options: ['kontrabasy', 'flety', 'skrzypce', 'trójkąty'], answer: 0, explain: 'Ciężkiego słonia grają kontrabasy – instrumenty o bardzo niskim brzmieniu.' },
        { id: 'dkxw4h', q: 'Który instrument przedstawia ptaszka w „Piotrusiu i wilku”?', options: ['flet', 'fagot', 'rogi', 'kontrabas'], answer: 0, explain: 'Ptaszka gra wysoki, zwinny flet. Fagot to dziadek, a rogi – wilk.' },
        { id: 'alouku', q: 'Który instrument przedstawia kaczkę w „Piotrusiu i wilku”?', options: ['obój', 'flet', 'klarnet', 'trąbka'], answer: 0, explain: 'Kaczka – obój, ptaszek – flet, kot – klarnet.' },
        { id: 'eotmwb', q: 'Kogo w „Piotrusiu i wilku” grają rogi (waltornie)?', options: ['wilka', 'dziadka', 'kota', 'Piotrusia'], answer: 0, explain: 'Wilka grają rogi. Dziadek – fagot, kot – klarnet, Piotruś – instrumenty smyczkowe.' },
        { id: 'kpvspq', q: 'Jak zmienia się muzyka w utworze „W grocie Króla Gór” Griega?', options: ['jest coraz szybsza i głośniejsza', 'jest coraz wolniejsza i cichsza', 'cały czas jest tak samo cicha', 'nagle milknie na samym początku'], answer: 0, explain: 'Ta sama melodia powtarza się coraz szybciej i coraz głośniej – rośnie napięcie.' },
        { id: 'rd4lot', q: 'Co zainspirowało Musorgskiego do napisania „Obrazków z wystawy”?', options: ['obrazy jego przyjaciela, malarza', 'śpiew ptaków w lesie', 'wiersz o czterech porach roku', 'bajka o Piotrusiu i wilku'], answer: 0, explain: '„Obrazki z wystawy” powstały pod wpływem wystawy prac przyjaciela Musorgskiego, malarza Wiktora Hartmanna.' },
      ],
    },
    {
      id: 'kalendarz-muzyczny',
      name: 'Muzyka w kalendarzu: święta szkolne, państwowe i rodzinne',
      chapter: 'rozdziały I.6 (Dzień Edukacji Narodowej), I.9 „Gdy piosenka z wojskiem szła”, II.5 (muzyczny prezent dla babci i dziadka), III.6 „Nasze majowe święta”, IV.1–2 (dla mamy i taty, święto wszystkich dzieci)',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 1 „Uczeń jako twórca i wykonawca”, wym. 2 (utwory z repertuaru tradycyjnego i patriotycznego – moduł kultura), wym. 9 (metrum); dz. 2 „Uczeń jako słuchacz”, wym. 6 (charakter i przebieg utworów); dz. 3 „Uczeń jako uczestnik kultury”, wym. 3 (pieśni patriotyczne – kontekst historyczny, rola dawniej i dziś), wym. 5 (tańce narodowe – rytm mazura w pieśni), wymaganie do wyboru 1 (dziedzictwo muzyczne rodziny i szkoły); doświadczenie edukacyjne 2 (współtworzenie występu dla społeczności szkolnej). Temat z podręcznika „Wszystko gra 4” (rozdziały I.6, I.9, II.5, III.6, IV.1–2). Fakty sprawdzone 6.11.2026: Karta Nauczyciela, art. 74 (tekst jednolity Dz.U. 2026 poz. 515); ustawa o dniach wolnych od pracy, art. 1 (Dz.U. 2020 poz. 1920 – 1 maja „Święto Państwowe”, 3 maja, 11 listopada); ustawa o godle, barwach i hymnie, art. 6a (Dz.U. 2025 poz. 299 – Dzień Flagi); lekcje ZPE (zpe.gov.pl) „Majowe śpiewanie” (Konstytucja 3 maja – pierwsza w Europie, druga na świecie; „Witaj, majowa jutrzenko” – Mazurek 3 Maja, metrum 3/4, rytm mazura) i „Pieśni legionów” („My, Pierwsza Brygada” – pieśń Legionów z I wojny światowej, ulubiona pieśń J. Piłsudskiego, od 2007 r. Pieśń Reprezentacyjna Wojska Polskiego; „Piechota”); definicje – Słownik języka polskiego PWN: marsz, akademia, laurka, jutrzenka, kołysanka. Słowa „Witaj, majowa jutrzenko” – R. Suchodolski (zgodne śpiewniki, m.in. Śpiewnik Niepodległości); Komisja Edukacji Narodowej jako pierwsze ministerstwo oświaty w Europie – zgodne źródła przez wyszukiwarkę (dzieje.pl, Radio Kraków). Dzień Babci, Dziadka, Matki, Dziecka i Ojca – daty zwyczajowe (bez aktu prawnego; zgodne źródła prasowe). Pominięte, bo źródła się różnią: autorzy słów i melodii „My, Pierwszej Brygady” i „Piechoty”, autor melodii „Witaj, majowa jutrzenko”, początki świąt rodzinnych.',
      theory: `
        <h3>Muzyka przez cały rok szkolny</h3>
        <p>Każde święto ma swoją muzykę. W szkole świętujemy razem na <b>akademii</b> – to uroczystość z okazji święta: śpiewamy pieśni, recytujemy wiersze, gramy na instrumentach. Na święta państwowe wybieramy <b>pieśni patriotyczne</b>, a na święta rodzinne – <b>piosenki z życzeniami</b>.</p>
        <table>
          <tr><th>Data</th><th>Święto</th></tr>
          <tr><td><b>14 października</b></td><td>🏫 Dzień Edukacji Narodowej</td></tr>
          <tr><td><b>11 listopada</b></td><td>🇵🇱 Narodowe Święto Niepodległości</td></tr>
          <tr><td><b>21 i 22 stycznia</b></td><td>👵 Dzień Babci i 👴 Dzień Dziadka</td></tr>
          <tr><td><b>1 maja</b></td><td>🇵🇱 Święto Państwowe, zwane Świętem Pracy</td></tr>
          <tr><td><b>2 maja</b></td><td>🇵🇱 Dzień Flagi Rzeczypospolitej Polskiej</td></tr>
          <tr><td><b>3 maja</b></td><td>🇵🇱 Święto Narodowe Trzeciego Maja</td></tr>
          <tr><td><b>26 maja</b></td><td>💐 Dzień Matki</td></tr>
          <tr><td><b>1 czerwca</b></td><td>🎈 Dzień Dziecka</td></tr>
          <tr><td><b>23 czerwca</b></td><td>👔 Dzień Ojca</td></tr>
        </table>
        <h3>Dzień Edukacji Narodowej – 14 października</h3>
        <ul>
          <li>14 października <b>1773 r.</b> powstała <b>Komisja Edukacji Narodowej</b> – urząd, który zajmował się szkołami w całym państwie. Uważa się ją za pierwsze w Europie ministerstwo oświaty.</li>
          <li>W rocznicę jej utworzenia obchodzimy <b>Dzień Edukacji Narodowej</b> (tak mówi ustawa „Karta Nauczyciela”). To święto nauczycieli i wszystkich pracowników szkoły. Tego dnia <b>nie ma lekcji</b>.</li>
          <li>Uczniowie dziękują nauczycielom, np. piosenką albo <b>laurką</b> – kartką ozdobioną rysunkiem, z życzeniami.</li>
        </ul>
        <h3>11 listopada i pieśni żołnierskie</h3>
        <p><b>11 listopada 1918 r.</b> Polska odzyskała niepodległość. O wolność walczyli m.in. <b>Legiony Polskie</b> – oddziały wojskowe, które w czasie I wojny światowej działały u boku <b>Józefa Piłsudskiego</b>. Żołnierze mieli swoje pieśni – to <b>pieśni żołnierskie</b>.</p>
        <ul>
          <li>„<b>My, Pierwsza Brygada</b>” – pieśń Legionów Polskich z czasów I wojny światowej, ulubiona pieśń Józefa Piłsudskiego. Od <b>2007 r.</b> jest <b>Pieśnią Reprezentacyjną Wojska Polskiego</b> – wykonuje się ją na uroczystościach wojskowych.</li>
          <li>„<b>Piechota</b>” („Nie noszą lampasów…”) – jedna z najpopularniejszych polskich pieśni żołnierskich, też z czasów I wojny światowej.</li>
          <li><b>Marsz</b> – bardzo rytmiczny utwór w <b>metrum parzystym</b> (np. 2/4: RAZ-dwa, RAZ-dwa). W jego rytm łatwo iść równym krokiem: lewa, prawa, lewa, prawa.</li>
        </ul>
        <h3>Majowe święta</h3>
        <ul>
          <li><b>1 maja</b> – Święto Państwowe, zwane Świętem Pracy.</li>
          <li><b>2 maja</b> – <b>Dzień Flagi Rzeczypospolitej Polskiej</b>: święto biało-czerwonej flagi.</li>
          <li><b>3 maja</b> – <b>Święto Narodowe Trzeciego Maja</b>, rocznica uchwalenia <b>Konstytucji 3 maja</b> w <b>1791 r.</b> Konstytucja to zbiór najważniejszych praw w państwie. Konstytucja 3 maja była <b>pierwszą konstytucją w Europie</b> i drugą na świecie.</li>
        </ul>
        <p>Z Konstytucją 3 maja wiąże się pieśń „<b>Witaj, majowa jutrzenko</b>”, nazywana też <b>Mazurkiem 3 Maja</b>. Słowa napisał <b>Rajnold Suchodolski</b>. Pieśń jest radosna, ma metrum <b>3/4</b> i rytm <b>mazura</b> – polskiego tańca narodowego. <b>Jutrzenka</b> to w języku poezji jasność przed wschodem słońca.</p>
        <div class="tip">💡 Porównaj: marsz liczymy „na dwa” (RAZ-dwa), a Mazurek 3 Maja – „na trzy” (RAZ-dwa-trzy), jak każdy mazur.</div>
        <h3>Święta rodzinne – muzyczny prezent</h3>
        <ul>
          <li><b>Dzień Babci</b> – 21 stycznia, <b>Dzień Dziadka</b> – 22 stycznia.</li>
          <li><b>Dzień Matki</b> – 26 maja, <b>Dzień Dziecka</b> – 1 czerwca, <b>Dzień Ojca</b> – 23 czerwca.</li>
          <li>Muzyczny prezent to np. piosenka z życzeniami, wspólne śpiewanie albo krótki utwór zagrany na flecie lub dzwonkach. Możesz też przypomnieć piosenki, które śpiewano w twojej rodzinie – np. <b>kołysanki</b>, czyli piosenki śpiewane przy usypianiu dziecka.</li>
        </ul>
      `,
      infographicNote: 'Czytaj od góry – od września do czerwca. Kolory: niebieski – święto szkolne, pomarańczowy – państwowe, zielony – rodzinne.',
      infographic: {
        type: 'os',
        items: [
          { label: '14 X', title: '🏫 Dzień Edukacji Narodowej', text: 'rocznica Komisji Edukacji Narodowej (1773); bez lekcji', kolor: 1 },
          { label: '11 XI', title: '🇵🇱 Święto Niepodległości', text: '1918 r.; pieśni żołnierskie, np. „My, Pierwsza Brygada”', kolor: 2 },
          { label: '21–22 I', title: '👵👴 Dzień Babci i Dziadka', text: 'muzyczny prezent: piosenka z życzeniami', kolor: 3 },
          { label: '1–3 V', title: '🇵🇱 Majowe święta', text: 'Święto Pracy, Dzień Flagi, Konstytucja 3 maja (1791)', kolor: 2 },
          { label: '26 V', title: '💐 Dzień Matki', kolor: 3 },
          { label: '1 VI', title: '🎈 Dzień Dziecka', kolor: 3 },
          { label: '23 VI', title: '👔 Dzień Ojca', kolor: 3 },
        ],
        bottom: { title: '💡 Zapamiętaj', items: ['marsz – metrum parzyste: RAZ-dwa, równy krok', '„Witaj, majowa jutrzenko” – Mazurek 3 Maja, rytm mazura (3/4)', 'akademia – szkolna uroczystość z okazji święta'], kolor: 4 },
      },
      flashcards: [
        ['Dzień Edukacji Narodowej', '14 października – rocznica utworzenia Komisji Edukacji Narodowej (1773); święto nauczycieli i pracowników szkoły, bez lekcji'],
        ['Komisja Edukacji Narodowej', 'Urząd z 1773 r., który zajmował się szkołami w całym państwie; uważana za pierwsze w Europie ministerstwo oświaty'],
        ['Akademia (w szkole)', 'Uroczystość z okazji święta: pieśni, wiersze, gra na instrumentach'],
        ['Laurka', 'Kartka ozdobiona rysunkiem, z życzeniami – prezent od dziecka'],
        ['Narodowe Święto Niepodległości', '11 listopada – w 1918 r. Polska odzyskała niepodległość'],
        ['„My, Pierwsza Brygada”', 'Pieśń Legionów Polskich z I wojny światowej; ulubiona pieśń Józefa Piłsudskiego; od 2007 r. Pieśń Reprezentacyjna Wojska Polskiego'],
        ['„Piechota”', 'Jedna z najpopularniejszych polskich pieśni żołnierskich, z czasów I wojny światowej'],
        ['Marsz', 'Bardzo rytmiczny utwór w metrum parzystym (np. 2/4) – w jego rytm idzie się równym krokiem'],
        ['Majowe święta', '1 maja – Święto Pracy, 2 maja – Dzień Flagi RP, 3 maja – Święto Narodowe Trzeciego Maja'],
        ['Konstytucja 3 maja', 'Uchwalona w 1791 r.; pierwsza konstytucja w Europie, druga na świecie'],
        ['Konstytucja', 'Zbiór najważniejszych praw w państwie'],
        ['„Witaj, majowa jutrzenko”', 'Mazurek 3 Maja; słowa: Rajnold Suchodolski; radosna, metrum 3/4, rytm mazura'],
        ['Jutrzenka', 'W języku poezji: jasność przed wschodem słońca'],
        ['Dzień Babci / Dzień Dziadka', '21 stycznia / 22 stycznia'],
        ['Dzień Matki / Dzień Ojca', '26 maja / 23 czerwca'],
        ['Dzień Dziecka', '1 czerwca'],
        ['Kołysanka', 'Piosenka śpiewana przy usypianiu dziecka'],
      ],
      questions: [
        { id: 'fl36ep', q: 'Kiedy obchodzimy Dzień Edukacji Narodowej?', options: ['14 października', '11 listopada', '1 czerwca', '3 maja'], answer: 0, explain: 'Dzień Edukacji Narodowej przypada 14 października – w rocznicę utworzenia Komisji Edukacji Narodowej.' },
        { id: 'l9j3bo', q: 'Rocznicę jakiego wydarzenia upamiętnia Dzień Edukacji Narodowej?', options: ['utworzenia Komisji Edukacji Narodowej (1773)', 'uchwalenia Konstytucji 3 maja (1791)', 'odzyskania niepodległości przez Polskę (1918)', 'napisania słów hymnu Polski przez Wybickiego (1797)'], answer: 0, explain: '14 października 1773 r. powstała Komisja Edukacji Narodowej – urząd, który zajmował się szkołami w całym państwie.' },
        { id: '47x6bb', q: 'Prawda czy fałsz?\nDzień Edukacji Narodowej jest wolny od zajęć lekcyjnych.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To prawda. Tak mówi ustawa „Karta Nauczyciela”: to święto pracowników oświaty, wolne od lekcji.' },
        { id: 'pl4ewy', q: 'Czym była Komisja Edukacji Narodowej?', options: ['urzędem, który zajmował się szkołami w państwie', 'oddziałem wojska walczącym w czasie I wojny światowej', 'zespołem muzyków grających na szkolnych akademiach', 'zbiorem najważniejszych praw w państwie z 1791 r.'], answer: 0, explain: 'Komisja Edukacji Narodowej (1773) zajmowała się szkołami w całym państwie. Uważa się ją za pierwsze w Europie ministerstwo oświaty.' },
        { id: 'hd7hm9', q: 'Co to jest akademia szkolna?', options: ['uroczystość z okazji święta', 'lekcja gry na flecie prostym', 'konkurs na najładniejszą laurkę', 'wycieczka klasowa do filharmonii'], answer: 0, explain: 'Akademia to uroczystość z okazji święta – uczniowie śpiewają pieśni, recytują wiersze, grają na instrumentach.' },
        { id: 'd9yhqs', q: 'Co to jest laurka?', options: ['kartka ozdobiona rysunkiem, z życzeniami', 'piosenka śpiewana przy usypianiu dziecka', 'pieśń żołnierzy śpiewana w czasie marszu', 'uroczystość w szkole z okazji ważnego święta'], answer: 0, explain: 'Laurka to kartka ozdobiona rysunkiem, z tekstem życzeń – np. dla nauczyciela albo dla mamy.' },
        { id: 'oymt18', q: 'Jakie święto obchodzimy 11 listopada?', options: ['Narodowe Święto Niepodległości', 'Święto Narodowe Trzeciego Maja', 'Dzień Edukacji Narodowej', 'Dzień Flagi Rzeczypospolitej Polskiej'], answer: 0, explain: '11 listopada to Narodowe Święto Niepodległości – w 1918 r. Polska odzyskała niepodległość.' },
        { id: '7baj41', q: 'W którym roku Polska odzyskała niepodległość?', options: ['1918', '1791', '1773', '1797'], answer: 0, explain: 'Polska odzyskała niepodległość 11 listopada 1918 r. 1791 to Konstytucja 3 maja, 1773 – Komisja Edukacji Narodowej, 1797 – „Mazurek Dąbrowskiego”.' },
        { id: 'mqiokg', q: '„My, Pierwsza Brygada” to pieśń…', options: ['Legionów Polskich z czasów I wojny światowej', 'kolędników chodzących z gwiazdą i szopką', 'o Konstytucji 3 maja, w rytmie mazura', 'na Dzień Matki, śpiewana z życzeniami'], answer: 0, explain: '„My, Pierwsza Brygada” to pieśń żołnierska Legionów Polskich z czasów I wojny światowej.' },
        { id: 'mcyo4b', q: 'Czyją ulubioną pieśnią była „My, Pierwsza Brygada”?', options: ['Józefa Piłsudskiego', 'Fryderyka Chopina', 'Józefa Wybickiego', 'Rajnolda Suchodolskiego'], answer: 0, explain: 'To była ulubiona pieśń Józefa Piłsudskiego – Legiony Polskie działały u jego boku.' },
        { id: '150kx7', q: 'Czym jest dziś pieśń „My, Pierwsza Brygada”?', options: ['Pieśnią Reprezentacyjną Wojska Polskiego', 'hymnem państwowym Rzeczypospolitej Polskiej', 'hymnem Unii Europejskiej, wykonywanym bez słów', 'pieśnią na Dzień Edukacji Narodowej'], answer: 0, explain: 'Od 2007 r. „My, Pierwsza Brygada” jest Pieśnią Reprezentacyjną Wojska Polskiego. Hymnem Polski jest „Mazurek Dąbrowskiego”.' },
        { id: 'vcyi6b', q: 'Co to jest marsz?', options: ['bardzo rytmiczny utwór w metrum parzystym', 'spokojna piosenka do usypiania dziecka', 'szybki taniec w metrum trzy czwarte', 'pieśń religijna o narodzeniu Jezusa'], answer: 0, explain: 'Marsz to bardzo rytmiczny utwór w metrum parzystym, np. 2/4 – w jego rytm idzie się równym krokiem.' },
        { id: 'gddpdf', q: 'Prawda czy fałsz?\nMarsz ma metrum trójdzielne, np. 3/4.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Marsz ma metrum parzyste, np. 2/4: RAZ-dwa, RAZ-dwa – jak kroki: lewa, prawa.' },
        { id: 'e4v3j4', q: 'W rytm którego utworu najłatwiej iść równym krokiem?', options: ['marsza', 'kołysanki', 'kujawiaka', 'nokturnu'], answer: 0, explain: 'Marsz ma wyraźny rytm w metrum parzystym – raz lewa, raz prawa noga. Kołysanka i kujawiak są spokojne i kołyszące.' },
        { id: '4jgv67', q: 'Jaka muzyka najbardziej pasuje na akademię z okazji 11 listopada?', options: ['pieśni patriotyczne i żołnierskie', 'kolędy i pastorałki', 'kołysanki dla małych dzieci', 'piosenki o wakacjach nad morzem'], answer: 0, explain: '11 listopada to Narodowe Święto Niepodległości – śpiewamy wtedy pieśni patriotyczne, np. pieśni żołnierskie Legionów.' },
        { id: 'hgslgv', q: 'Co obchodzimy 2 maja?', options: ['Dzień Flagi Rzeczypospolitej Polskiej', 'Narodowe Święto Niepodległości', 'Dzień Edukacji Narodowej', 'Święto Narodowe Trzeciego Maja'], answer: 0, explain: '2 maja to Dzień Flagi Rzeczypospolitej Polskiej. Dzień wcześniej jest Święto Pracy, dzień później – Święto Narodowe Trzeciego Maja.' },
        { id: 'hl6owf', q: 'Rocznicę czego świętujemy 3 maja?', options: ['uchwalenia Konstytucji w 1791 r.', 'odzyskania niepodległości w 1918 r.', 'utworzenia Komisji Edukacji Narodowej', 'powstania Legionów Polskich we Włoszech'], answer: 0, explain: '3 maja to rocznica uchwalenia Konstytucji 3 maja w 1791 r.' },
        { id: 'lc0tho', q: 'Co to jest konstytucja?', options: ['zbiór najważniejszych praw w państwie', 'uroczysta pieśń śpiewana na akademii', 'urząd, który zajmuje się szkołami', 'oddział wojska walczący o wolność'], answer: 0, explain: 'Konstytucja to zbiór najważniejszych praw w państwie.' },
        { id: 'npuwam', q: 'Prawda czy fałsz?\nKonstytucja 3 maja była pierwszą konstytucją w Europie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To prawda. Konstytucja 3 maja (1791) była pierwszą konstytucją w Europie i drugą na świecie.' },
        { id: 'ssu82f', q: 'Jak inaczej nazywa się pieśń „Witaj, majowa jutrzenko”?', options: ['Mazurek 3 Maja', 'Pieśń Legionów Polskich', 'Oda do radości', 'Pierwsza Brygada'], answer: 0, explain: '„Witaj, majowa jutrzenko” to pieśń o Konstytucji 3 maja, nazywana też Mazurkiem 3 Maja.' },
        { id: 'qw4q3u', q: 'Rytm jakiego tańca słychać w pieśni „Witaj, majowa jutrzenko”?', options: ['mazura', 'krakowiaka', 'poloneza', 'walca'], answer: 0, explain: 'Pieśń ma rytm mazura – stąd druga nazwa: Mazurek 3 Maja.' },
        { id: 'gpkgh5', q: 'Jakie metrum ma pieśń „Witaj, majowa jutrzenko”?', options: ['3/4', '2/4', '4/4', '2/2'], answer: 0, explain: 'Pieśń ma metrum 3/4 – liczymy „na trzy”, jak w mazurze.' },
        { id: '7g910d', q: 'Kto napisał słowa pieśni „Witaj, majowa jutrzenko”?', options: ['Rajnold Suchodolski', 'Józef Wybicki', 'Maria Konopnicka', 'Franciszek Karpiński'], answer: 0, explain: 'Słowa napisał Rajnold Suchodolski. Wybicki napisał słowa hymnu, Konopnicka – „Roty”, a Karpiński – kolędy „Bóg się rodzi”.' },
        { id: 'yvn3ca', q: 'Co znaczy słowo „jutrzenka” w tytule pieśni „Witaj, majowa jutrzenko”?', options: ['jasność przed wschodem słońca', 'wiosenna burza z piorunami', 'pierwszy dzień szkolnych wakacji', 'wieczorna mgła nad łąką'], answer: 0, explain: 'Jutrzenka to w języku poezji jasność przed wschodem słońca – początek nowego dnia.' },
        { id: 'nahguq', q: 'Kiedy obchodzimy Dzień Matki?', options: ['26 maja', '1 czerwca', '23 czerwca', '21 stycznia'], answer: 0, explain: 'Dzień Matki jest 26 maja. 1 czerwca to Dzień Dziecka, 23 czerwca – Dzień Ojca, a 21 stycznia – Dzień Babci.' },
        { id: 'nzbey0', q: 'Które święto obchodzimy 23 czerwca?', options: ['Dzień Ojca', 'Dzień Matki', 'Dzień Dziecka', 'Dzień Dziadka'], answer: 0, explain: '23 czerwca to Dzień Ojca.' },
        { id: 'efpzmn', q: 'Kiedy jest Dzień Dziecka?', options: ['1 czerwca', '26 maja', '14 października', '22 stycznia'], answer: 0, explain: 'Dzień Dziecka obchodzimy 1 czerwca – między Dniem Matki (26 maja) a Dniem Ojca (23 czerwca).' },
        { id: 'glehnd', q: 'Dzień Babci obchodzimy 21 stycznia. Kiedy jest Dzień Dziadka?', options: ['22 stycznia', '20 stycznia', '21 lutego', '23 czerwca'], answer: 0, explain: 'Dzień Dziadka jest dzień po Dniu Babci – 22 stycznia.' },
        { id: '4x91yu', q: 'Co to jest kołysanka?', options: ['piosenka śpiewana przy usypianiu dziecka', 'pieśń żołnierska w rytmie marsza', 'uroczysta pieśń na szkolną akademię', 'szybki taniec ludowy w metrum 2/4'], answer: 0, explain: 'Kołysanka to piosenka śpiewana przy usypianiu dziecka – spokojna i kołysząca.' },
        { id: 'ffnjby', q: 'Które z tych świąt obchodzimy najwcześniej w roku szkolnym (licząc od września)?', options: ['Dzień Edukacji Narodowej', 'Narodowe Święto Niepodległości', 'Dzień Babci', 'Święto Narodowe Trzeciego Maja'], answer: 0, explain: 'Kolejno: Dzień Edukacji Narodowej (14 października), Święto Niepodległości (11 listopada), Dzień Babci (21 stycznia), 3 Maja.' },
      ],
    },
    {
      id: 'tance-chopin',
      name: 'Tańce narodowe, „Rota” i Fryderyk Chopin',
      extra: true,
      chapter: 'w podręczniku „Wszystko gra” – w kolejnych klasach (polonez, mazur, kujawiak, oberek, „Rota” i twórczość Chopina)',
      basis: 'Dz.U. 2026 poz. 378, muzyka (II etap, przedmiot w kl. IV–VII): dz. 3 wym. 3 (pieśni patriotyczne), wym. 5 (polskie tańce narodowe), wym. 6 (utwory Fryderyka Chopina); dz. 1 wym. 6 (kroki kujawiaka i poloneza). Fakty sprawdzone 1.11.2026: Chopin – Narodowy Instytut Fryderyka Chopina (nifc.pl); tańce narodowe – zpe.gov.pl. Dział „na zapas” – tych tematów nie ma w podręczniku „Wszystko gra 4”; treści i pytania przeniesione 6.11.2026 z działu o hymnie (pytania z tymi samymi id). Dzieciństwo Chopina – w dziale „Cudowne dzieci muzyki i muzyka ilustracyjna”.',
      theory: `
        <h3>„Rota” i inne pieśni patriotyczne</h3>
        <p>„<b>Rota</b>” – słowa napisała <b>Maria Konopnicka</b>, muzykę skomponował <b>Feliks Nowowiejski</b>. Pieśni patriotyczne opowiadają o miłości do ojczyzny i walce o wolność. Śpiewamy je podczas świąt państwowych.</p>
        <h3>Polskie tańce narodowe</h3>
        <table>
          <tr><th>Taniec</th><th>Metrum</th><th>Charakter</th></tr>
          <tr><td><b>polonez</b></td><td>3/4</td><td>uroczysty, dostojny, w umiarkowanym tempie; pary idą w korowodzie – to taniec „chodzony”</td></tr>
          <tr><td><b>krakowiak</b></td><td><b>2/4</b></td><td>żywy, skoczny; pochodzi z okolic Krakowa</td></tr>
          <tr><td><b>mazur</b></td><td>3/4</td><td>szybki, z podskokami; pochodzi z Mazowsza</td></tr>
          <tr><td><b>kujawiak</b></td><td>3/4</td><td>wolny, śpiewny, kołyszący; pochodzi z Kujaw</td></tr>
          <tr><td><b>oberek</b></td><td>trójdzielne</td><td>bardzo szybki, z wirowaniem</td></tr>
        </table>
        <div class="tip">💡 Tylko <b>krakowiak</b> ma metrum dwudzielne (2/4). Pozostałe tańce narodowe liczymy „na trzy”.</div>
        <h3>Fryderyk Chopin</h3>
        <ul>
          <li>Urodził się w <b>1810 r.</b> w <b>Żelazowej Woli</b> na Mazowszu. Zmarł w <b>1849 r.</b> w <b>Paryżu</b>.</li>
          <li>Był genialnym <b>pianistą</b> i kompozytorem. Komponował przede wszystkim <b>na fortepian</b>: mazurki, polonezy, walce, nokturny, etiudy.</li>
          <li>W mazurkach i polonezach wykorzystywał polskie tańce i melodie ludowe.</li>
          <li>Na jego prośbę serce kompozytora przewieziono do Warszawy. Spoczywa w filarze <b>kościoła Świętego Krzyża</b>.</li>
          <li>Co pięć lat w Warszawie odbywa się <b>Międzynarodowy Konkurs Pianistyczny im. Fryderyka Chopina</b>.</li>
        </ul>
      `,
      infographicNote: 'Czytaj wierszami: taniec, jego metrum i charakter; u góry „Rota”, na dole Chopin.',
      infographic: {
        type: 'porownanie',
        top: { title: '🇵🇱 „Rota”', text: 'słowa Maria Konopnicka, muzyka Feliks Nowowiejski', kolor: 2 },
        kolumny: [{ title: 'Metrum', kolor: 4 }, { title: 'Charakter', kolor: 1 }],
        wiersze: [
          { label: 'polonez', cells: ['3/4', 'uroczysty, „chodzony”'] },
          { label: 'mazur', cells: ['3/4', 'szybki, z podskokami'] },
          { label: 'kujawiak', cells: ['3/4', 'wolny, kołyszący'] },
          { label: 'oberek', cells: ['na trzy', 'bardzo szybki, wirowanie'] },
          { label: 'krakowiak', cells: ['2/4', 'żywy, skoczny'], bold: true },
        ],
        bottom: { title: '🎹 Fryderyk Chopin', items: ['1810 Żelazowa Wola – 1849 Paryż', 'muzyka na fortepian: mazurki, polonezy', 'serce – kościół Świętego Krzyża'], kolor: 3 },
      },
      flashcards: [
        ['„Rota”', 'Słowa: Maria Konopnicka, muzyka: Feliks Nowowiejski'],
        ['Polonez', 'Uroczysty taniec „chodzony” w metrum 3/4'],
        ['Kujawiak', 'Wolny, śpiewny, kołyszący taniec w metrum 3/4'],
        ['Mazur / oberek', 'Szybki z podskokami / bardzo szybki z wirowaniem'],
        ['Fryderyk Chopin', 'Pianista i kompozytor; ur. 1810 w Żelazowej Woli, zm. 1849 w Paryżu; muzyka fortepianowa'],
        ['Serce Chopina', 'W filarze kościoła Świętego Krzyża w Warszawie'],
      ],
      questions: [
        { id: 'k6frgd', q: 'Kto napisał słowa „Roty”?', options: ['Maria Konopnicka', 'Józef Wybicki', 'Fryderyk Chopin', 'Ignacy Jan Paderewski'], answer: 0, explain: 'Słowa „Roty” napisała Maria Konopnicka, a muzykę skomponował Feliks Nowowiejski.' },
        { id: 't51xl9', q: 'Który taniec jest uroczysty i „chodzony” – pary idą w korowodzie?', options: ['polonez', 'oberek', 'krakowiak', 'mazur'], answer: 0, explain: 'Polonez to dostojny taniec w umiarkowanym tempie. Często rozpoczyna bale, np. studniówki.' },
        { id: 'ar1615', q: 'Który taniec narodowy jest wolny, śpiewny i kołyszący?', options: ['kujawiak', 'oberek', 'krakowiak', 'mazur'], answer: 0, explain: 'Kujawiak ma wolne tempo i spokojny, kołyszący charakter.' },
        { id: 'gfae1t', q: 'Który taniec narodowy jest bardzo szybki i ma dużo wirowania?', options: ['oberek', 'polonez', 'kujawiak', 'żaden z nich'], answer: 0, explain: 'Oberek to bardzo szybki taniec, w którym pary wirują.' },
        { id: '835d1f', q: 'Na jaki instrument Chopin komponował przede wszystkim?', options: ['na fortepian', 'na skrzypce', 'na trąbkę', 'na organy'], answer: 0, explain: 'Chopin był pianistą i prawie wszystkie jego utwory są na fortepian.' },
        { id: 'nokvqg', q: 'Które utwory Chopina nawiązują do polskich tańców?', options: ['mazurki i polonezy', 'opery i balety', 'symfonie', 'kanony'], answer: 0, explain: 'Chopin skomponował wiele mazurków i polonezów – to tańce polskie.' },
        { id: '2q1l6v', q: 'Gdzie spoczywa serce Fryderyka Chopina?', options: ['w kościele Świętego Krzyża w Warszawie', 'w Żelazowej Woli', 'na Wawelu w Krakowie', 'w Paryżu'], answer: 0, explain: 'Na prośbę Chopina jego serce przewieziono do Warszawy. Spoczywa w filarze kościoła Świętego Krzyża.' },
      ],
    },
  ],
});
