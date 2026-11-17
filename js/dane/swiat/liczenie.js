/* 🌍 Świat – nauka z innych krajów: liczenie po świecie.
 * Ścieżka POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Działy ułożone według tematów, nie klas: level (1–3), age ([od, do] – sugerowany wiek), requires ('przedmiot/dział'), where – gdzie się tego uczą.
 * Fakty o szkołach za granicą – tylko z dokumentów ministerstw (adresy w polu basis i w js/dane/swiat/zrodla.js). */
(function () {
  const TF = ['Prawda', 'Fałsz'];
  const JP_SHO = 'Japonia: 小学校学習指導要領 (podstawa programowa szkoły podstawowej, MEXT, ogłoszona 2017, obowiązuje od 2020; mext.go.jp, plik 20230120-mxt_kyoiku02-100002604_01.pdf)';
  const JP_KOM = 'komentarz 小学校学習指導要領解説 算数編 (MEXT; mext.go.jp, plik 20211102-mxt_kyoiku02-100002607_04.pdf)';
  const JP_WIEK = 'wiek uczniów w Japonii – strona MEXT „就学義務とは” (obowiązek szkolny): szkoła podstawowa od początku roku szkolnego po ukończeniu 6 lat (kl. 3 = 8–9 lat, kl. 4 = 9–10 lat), sprawdzone 14.11.2026';

  // Rysunek sorobanu do pytań (dział „soroban”): cyfry od lewej, np. [3, 0, 5] = 305.
  // Na pręcie: 1 koralik nad belką (5) i 4 pod belką (po 1); liczy się koralik przysunięty do belki. Tylko klasy CSS (tryb ciemny).
  const MIEJSCA = ['tysiące', 'setki', 'dziesiątki', 'jedności'];
  const dolne = (k) => (k === 0 ? 'żaden dolny koralik' : k === 1 ? '1 dolny koralik' : `${k} dolne koraliki`);
  const SB = (cyfry) => {
    const n = cyfry.length;
    const W = 30 + n * 90;
    const nazwy = MIEJSCA.slice(4 - n);
    const kor = (cx, y) => `<rect x="${cx - 29}" y="${y}" width="58" height="22" rx="11" class="f2 s2 sw"/>`;
    let rys = '';
    const opis = [];
    cyfry.forEach((c, i) => {
      const cx = 60 + i * 90;
      const gora = c >= 5;
      const dol = c % 5;
      rys += `<line x1="${cx}" y1="10" x2="${cx}" y2="214" class="ln"/>` + kor(cx, gora ? 57 : 12);
      for (let k = 0; k < 4; k++) rys += kor(cx, k < dol ? 92 + k * 23 : 118 + k * 23);
      rys += `<text x="${cx}" y="238" text-anchor="middle" class="tx-s">${nazwy[i]}</text>`;
      opis.push(`${nazwy[i]}: górny koralik ${gora ? 'przy belce' : 'daleko od belki'}, przy belce ${dolne(dol)}`);
    });
    return `<svg viewBox="0 0 ${W} 246" role="img" aria-label="Soroban z ${n} prętami. ${opis.join('. ')}.">
      <rect x="8" y="8" width="${W - 16}" height="208" rx="6" class="ln sw"/>${rys}
      <rect x="8" y="80" width="${W - 16}" height="10" class="f4 s4 sw"/>
    </svg>`;
  };

  window.SUBJECTS.push({
    id: 'liczenie',
    name: 'Liczenie po świecie',
    icon: '🔢',
    color: '#d0662f',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'tabliczka-12',
        name: 'Tabliczka mnożenia do 12 × 12',
        level: 1,
        age: [8, 10],
        where: 'Anglia – Year 4 (dzieci 8–9 lat): tabliczka do 12 × 12 na pamięć i sprawdzian na komputerze',
        basis: 'Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Źródła (gov.uk, sprawdzone 14.11.2026): National curriculum in England: mathematics programmes of study, key stages 1 and 2 (Department for Education, 2013) – Year 4: „recall multiplication and division facts for multiplication tables up to 12 × 12”, „By the end of year 4, pupils should have memorised their multiplication tables up to and including the 12 multiplication table”, przykład rozdzielności „39 × 7 = 30 × 7 + 9 × 7”; ulotka „Multiplication tables check: information for parents” (Standards and Testing Agency, 2025) – sprawdzian w Year 4 w czerwcu, na ekranie, 25 pytań, 6 sekund na pytanie, 3 pytania na próbę, nie ma progu zaliczenia; Year 4 = dzieci w wieku 8–9 lat (strona „The national curriculum”). W polskiej podstawie klasy 1–3 (Dz.U. 2024 poz. 996): tabliczka mnożenia w zakresie 100 i mnożenie przez 10 liczb mniejszych od 20 – dział rozszerza to o mnożenie przez 11 i 12. Tuzin – „dwanaście sztuk czegoś” (Słownik języka polskiego PWN, sjp.pwn.pl). Wszystkie wyniki policzone dwukrotnie.',
        theory: `
          <h3>Jak to jest w Anglii?</h3>
          <p>W Anglii dzieci w wieku 8–9 lat uczą się tabliczki mnożenia <b>aż do 12 × 12</b>.</p>
          <p>W czerwcu piszą sprawdzian na komputerze: <b>25 pytań</b>, na każde mają <b>6 sekund</b>.</p>
          <h3>Razy 11</h3>
          <p>11 × 2 = 22, 11 × 3 = 33, 11 × 4 = 44, …, 11 × 9 = 99</p>
          <p class="tip">Do 9: napisz tę samą cyfrę dwa razy! 11 × 7 = 77.</p>
          <p>11 × 10 = 110</p>
          <h3>Razy 12</h3>
          <p>12 to 10 i 2. Pomnóż przez 10, pomnóż przez 2 i dodaj:</p>
          <p><b>12 × 4</b> = 10 × 4 + 2 × 4 = 40 + 8 = <b>48</b></p>
          <table><tr><th>12 × 2</th><th>12 × 3</th><th>12 × 4</th><th>12 × 5</th><th>12 × 6</th></tr>
            <tr><td>24</td><td>36</td><td>48</td><td>60</td><td>72</td></tr></table>
          <p>12 × 10 = 120, 12 × 12 = 144</p>
          <h3>Gdzie jest 12?</h3>
          <p>🥚 <b>tuzin</b> = 12 sztuk, 📅 rok ma 12 miesięcy, 🕛 na zegarze jest 12 godzin</p>`,
        infographicNote: 'Na górze – angielski sprawdzian. Niżej – sztuczki na razy 11 i razy 12.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '⏱️ Anglia: 25 pytań', text: 'po 6 sekund na pytanie' },
          items: [
            { icon: '1️⃣', kolor: 1, title: 'Razy 11', text: '11 × 3 = 33\ncyfra dwa razy' },
            { icon: '🔟', kolor: 1, title: '11 × 10', text: '110' },
            { icon: '➕', kolor: 3, title: 'Razy 12', text: '12 × 4 = 40 + 8 = 48' },
            { icon: '🏆', kolor: 3, title: '12 × 12', text: '144' },
            { icon: '🥚', kolor: 2, title: 'Tuzin', text: '12 sztuk' },
            { icon: '📅', kolor: 2, title: 'Rok', text: '12 miesięcy' },
          ],
        },
        flashcards: [
          ['11 × 4', '44'],
          ['11 × 8', '88'],
          ['11 × 10', '110'],
          ['12 × 3', '36'],
          ['12 × 5', '60'],
          ['12 × 6', '72'],
          ['12 × 10', '120'],
          ['12 × 12', '144'],
          ['Tuzin', '12 sztuk'],
          ['Sprawdzian w Anglii', '25 pytań, po 6 sekund'],
        ],
        questions: [
          { id: 'fm1fe6', q: '11 × 3 = ?', options: ['33', '31', '14'], answer: 0, explain: 'Razy 11 (do 9): ta sama cyfra dwa razy. 11 × 3 = 33.' },
          { id: '8lv5jz', q: '11 × 5 = ?', options: ['55', '51', '16'], answer: 0, explain: 'Cyfra 5 dwa razy: 11 × 5 = 55.' },
          { id: '0l7ocy', q: '11 × 9 = ?', options: ['99', '91', '20'], answer: 0, explain: 'Cyfra 9 dwa razy: 11 × 9 = 99.' },
          { id: 'suhdkz', q: '11 × 10 = ?', options: ['110', '1010', '21'], answer: 0, explain: 'Razy 10: dopisz zero. 11 × 10 = 110.' },
          { id: 'mjuyco', q: '12 × 2 = ?', options: ['24', '14', '22'], answer: 0, explain: '12 + 12 = 24.' },
          { id: '6kjd4o', q: '12 × 3 = ?', options: ['36', '33', '15'], answer: 0, explain: '10 × 3 + 2 × 3 = 30 + 6 = 36.' },
          { id: '0v23fe', q: '12 × 4 = ?', options: ['48', '44', '42'], answer: 0, explain: '10 × 4 + 2 × 4 = 40 + 8 = 48.' },
          { id: 'z3l85x', q: '12 × 5 = ?', options: ['60', '55', '52'], answer: 0, explain: '10 × 5 + 2 × 5 = 50 + 10 = 60.' },
          { id: 'io5anl', q: '12 × 6 = ?', options: ['72', '62', '66'], answer: 0, explain: '10 × 6 + 2 × 6 = 60 + 12 = 72.' },
          { id: 'xpga66', q: '12 × 10 = ?', options: ['120', '102', '22'], answer: 0, explain: 'Razy 10: dopisz zero. 12 × 10 = 120.' },
          { id: '9uva39', q: 'Ile to jest tuzin?', options: ['12 sztuk', '10 sztuk', '20 sztuk'], answer: 0, explain: 'Tuzin to 12 sztuk, np. tuzin jajek.' },
          { id: 'xwtkio', q: 'Mama kupiła 2 tuziny jajek. Ile to jajek?', options: ['24', '12', '22'], answer: 0, explain: 'Tuzin to 12. 2 tuziny: 12 × 2 = 24 jajka.' },
          { id: 'grsq0h', q: 'Rok ma 12 miesięcy. Ile miesięcy mają 3 lata?', options: ['36', '15', '33'], answer: 0, explain: '12 × 3 = 36 miesięcy.' },
          { id: '8akbm2', q: '24 : 12 = ?', options: ['2', '12', '4'], answer: 0, explain: '12 × 2 = 24, więc 24 : 12 = 2.' },
          { id: '12y6oc', q: 'Ile sekund mają angielskie dzieci na jedno pytanie na sprawdzianie z tabliczki?', options: ['6 sekund', '60 sekund', '1 sekundę'], answer: 0, explain: 'Na każde z 25 pytań jest 6 sekund. Trzeba znać tabliczkę na pamięć!' },
          { id: 'qylgfb', q: 'Prawda czy fałsz?\n12 × 4 = 10 × 4 + 2 × 4', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. 12 to 10 i 2: 40 + 8 = 48.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'soroban',
        name: 'Soroban – japońskie liczydło',
        level: 1,
        age: [8, 10],
        where: 'Japonia – matematyka w 3. klasie (dzieci 8–9 lat) i w 4. klasie (9–10 lat): soroban jest w programie obu klas',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Dział według standardu „różnicy”: wspólne z polską szkołą tylko jako przypomnienie, rdzeń – to, czego polska podstawa nie wymaga. POLSKA (tekst podstaw, eli.gov.pl, sprawdzone 16.11.2026): Dz.U. 2024 poz. 996, edukacja wczesnoszkolna (s. 34): II.2.3 „wyjaśnia znaczenie cyfr w zapisie liczby; wskazuje jedności, dziesiątki, setki itd.”, II.3.2 – dodawanie i odejmowanie w pamięci, II.3.3 „stosuje własne strategie, wykonując obliczenia”; matematyka kl. IV–VI (s. 183): „Liczby naturalne w dziesiątkowym układzie pozycyjnym”, dodawanie i odejmowanie w pamięci. Dz.U. 2026 poz. 378, edukacja wczesnoszkolna (s. 57): 5.1.b „rozumie, że wartość liczby zależy od liczby cyfr oraz ich położenia w jej zapisie”, 5.1.f – dodawanie w pamięci, 5.1.j „tworzy i stosuje własne strategie obliczeń”; warunki realizacji (s. 76): liczmany, klocki, patyczki, palce; matematyka kl. IV–VI (s. 237–238): dziesiątkowy system zapisu, dodawanie i odejmowanie w pamięci. W żadnej z podstaw nie ma liczydła ani sorobanu (0 trafień „liczyd”, „abak”, „soroban”) ani wymaganej strategii „dołóż piątkę/dziesiątkę i zabierz resztę”. JAPONIA: (1) ${JP_SHO}, 算数 kl. 3 A⑻ (s. 73–74): „そろばんによる数の表し方について知ること” (znać sposób przedstawiania liczb na sorobanie), „簡単な加法及び減法の計算の仕方について知り，計算すること” (znać sposób prostego dodawania i odejmowania i liczyć), „そろばんの仕組みに着目し，大きな数や小数の計算の仕方を考えること” (patrząc na budowę sorobanu, obmyślać sposób liczenia dużych liczb i ułamków dziesiętnych); kl. 4 A⑻ (s. 78–79): dodawanie i odejmowanie na sorobanie; 第3 2⑹ (s. 93): w kl. 1–2 soroban i konkretne przedmioty – pomoc „w razie potrzeby”. (2) ${JP_KOM}, s. 157–158 (kl. 3): soroban – narzędzie używane w Japonii od dawna; uczy się go w kl. 3 i 4; najpierw ustala się miejsce (rząd), potem przesuwa koraliki; kl. 3 – liczby całkowite „do jednostki 万” (万の単位の数まで; według komentarza s. 137 to 万, 十万, 百万, 千万 – od dziesięciu tysięcy do dziesiątek milionów) i ułamki do części dziesiątych; działania od „2 + 1”, „3 − 1”, przez składanie i rozkładanie piątki („4 + 3”, „6 − 4”), do przeniesienia i pożyczania („8 + 9”, „15 − 7”), także „3万 + 5万” i „2,6 + 0,3”; „どの桁の珠も同じ大きさの形” – koraliki każdego rzędu są jednakowe, jak cyfry w systemie pozycyjnym, więc lekcja porównuje budowę sorobanu z budową liczby; s. 200–201 (kl. 4): liczby do 億 i 兆, części setne. (3) ${JP_WIEK}. BUDOWA SOROBANU: budowy liczydła (1 koralik nad belką = 5, 4 pod belką = po 1, liczy się koralik przy belce) nie znaleźliśmy w dokumentach MEXT; w encyklopedii jej nie sprawdziliśmy – to wiedza powszechna, do sprawdzenia. Z MEXT wynika tylko pośrednio: koraliki są jednakowe na każdym pręcie, 4 + 3 i 6 − 4 wymagają piątki, na pręcie mieści się najwyżej 9. Kropek na belce ani historii sorobanu nie podajemy – brak źródła. Wiedza o systemie pozycyjnym – ZPE („Jedności, dziesiątki, setki”, „Dziesiątkowy system pozycyjny”). Tłumaczenia – nasze. Zadania i rysunki – nasze; wszystkie wyniki policzone dwukrotnie. Notatki: docs/research/research_notes/Soroban – standard różnicy/zrodla.md.`,
        theory: `
          <p class="tip">🇵🇱 <b>W polskiej szkole</b> w klasach 1–3 poznajesz jedności, dziesiątki i setki i liczysz w pamięci. <b>Liczydła ani sorobanu polska podstawa programowa nie wymaga.</b> Najpierw krótkie przypomnienie, a potem to, czego uczą się dzieci w Japonii.</p>
          <h3>🇵🇱 Przypomnienie (klasy 1–3)</h3>
          <ul>
            <li>Ta sama cyfra znaczy co innego w innym miejscu. Liczba <b>352</b> to 3 setki, 5 dziesiątek i 2 jedności.</li>
            <li>Gdy czegoś nie ma, piszesz <b>0</b>. Liczba <b>207</b> to 2 setki, 0 dziesiątek i 7 jedności.</li>
          </ul>
          <h3>🌍 1. Co to jest soroban?</h3>
          <p>Soroban to <b>japońskie liczydło</b>. W Japonii używa się go od dawna. Ma ramkę, pręty i <b>belkę</b> w poprzek. Na prętach są koraliki.</p>
          <h3>🌍 2. Piątka na górze, jedynki na dole</h3>
          <ul>
            <li>Koralik <b>nad belką</b> jest wart <b>5</b>.</li>
            <li>Koralik <b>pod belką</b> jest wart <b>1</b>. Pod belką są <b>4</b> koraliki.</li>
            <li>Koralik się liczy, gdy <b>dotyka belki</b>.</li>
          </ul>
          <p><b>7</b> to piątka i 2 jedynki. Na jednym pręcie zmieścisz od 0 do <b>9</b>, bo 5 + 4 = 9.</p>
          <h3>🌍 3. Każdy pręt to jedno miejsce</h3>
          <p>Soroban ma dużo prętów. Dlatego najpierw umawiasz się, który pręt to <b>jedności</b>. Na lewo od niego są <b>dziesiątki</b>, potem <b>setki</b>. Koraliki na każdym pręcie są takie same. Ale na pręcie dziesiątek każdy dolny koralik jest wart <b>10</b>, a na pręcie setek – <b>100</b>. Pusty pręt to <b>0</b>.</p>
          <h3>🌍 4. Brakuje jedynek? Weź piątkę!</h3>
          <p><b>4 + 3</b>: przy belce są już 4 jedynki, więcej nie ma. Dołóż piątkę i zabierz 2 jedynki. Liczysz tak: 4 + 5 − 2 = 7.</p>
          <p><b>6 − 4</b>: przy belce jest tylko 1 jedynka. Zabierz piątkę i dołóż 1 jedynkę. Liczysz tak: 6 − 5 + 1 = 2.</p>
          <h3>🌍 5. Brakuje miejsca? Weź dziesiątkę!</h3>
          <p><b>8 + 9</b>: dołóż 1 koralik na pręcie dziesiątek (to 10) i zabierz 1 jedynkę. Liczysz tak: 8 + 10 − 1 = 17.</p>
          <p><b>15 − 7</b>: zabierz 1 dziesiątkę i dołóż 3 jedynki. Liczysz tak: 15 − 10 + 3 = 8.</p>
          <h3>🌍 6. Duże liczby – tak samo</h3>
          <p>30 tysięcy dodać 50 tysięcy liczysz na sorobanie jak 3 + 5 – tylko na pręcie dziesiątek tysięcy. Wynik to <b>80 tysięcy</b>.</p>
          <h3>Jak uczą tego w Japonii?</h3>
          <p>Soroban jest w programie matematyki w <b>3. i 4. klasie</b>. W 3. klasie dzieci ustawiają na nim bardzo duże liczby – nawet miliony – a także liczby z przecinkiem. Liczą po kolei. Najpierw łatwe działania, np. 2 + 1 i 3 − 1. Potem z piątką, np. 4 + 3 i 6 − 4. Potem z dziesiątką, np. 8 + 9 i 15 − 7. W 4. klasie liczby są jeszcze większe.</p>
          <p>Japoński poradnik dla nauczycieli radzi porównywać soroban z zapisem liczby. Ten sam koralik znaczy co innego na innym pręcie – tak jak cyfra w liczbie.</p>
          <h3>Uważaj!</h3>
          <ul>
            <li>Czytaj od lewej: setki, dziesiątki, jedności.</li>
            <li>Koralik w połowie drogi – przesuń go do końca. Liczy się tylko ten przy belce.</li>
          </ul>`,
        infographicNote: 'Na górze – przypomnienie z polskiej szkoły. Niżej – jak działa japoński soroban.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🇵🇱 Przypomnienie (kl. 1–3)', text: '352 = 3 setki, 5 dziesiątek, 2 jedności' },
          items: [
            { icon: '⬆️', kolor: 1, title: 'Nad belką', text: 'koralik = 5' },
            { icon: '⬇️', kolor: 1, title: 'Pod belką', text: '4 koraliki, każdy = 1' },
            { icon: '🎯', kolor: 3, title: 'Liczy się', text: 'koralik przy belce' },
            { icon: '🔢', kolor: 3, title: 'Pręt = miejsce', text: 'jedności, dziesiątki, setki; pusty = 0' },
            { icon: '🖐️', kolor: 2, title: '4 + 3', text: 'dołóż 5, zabierz 2' },
            { icon: '🔟', kolor: 2, title: '8 + 9', text: 'dołóż 10, zabierz 1' },
          ],
          bottom: { kolor: 5, title: '🇯🇵 Japonia', text: 'soroban na matematyce w 3. i 4. klasie' },
        },
        parent: {
          goal: 'Dziecko poznaje japońskie liczydło: ustawia i odczytuje liczby, a dodając i odejmując, korzysta z piątki i dziesiątki (4 + 3 = 4 + 5 − 2; 8 + 9 = 8 + 10 − 1). Nowe względem polskiej podstawy: samo liczydło i ta strategia. Wspólne: jedności, dziesiątki, setki i liczenie w pamięci (kl. 1–3).',
          time: 'lekcja ok. 15 minut; soroban na kartce ok. 15 minut; soroban z pudełka ok. 40 minut',
          avoid: [
            'Nie zaczynaj od szybkości – w Japonii zaczyna się od łatwych działań (2 + 1, 3 − 1), dopiero potem piątka i dziesiątka.',
            'Pytaj „ile jest przy belce?”, a nie „ile jest koralików?” – liczą się tylko koraliki przy belce.',
            'Japoński komentarz do podstawy nie opisuje typowych pomyłek dzieci – nie podajemy ich tu.',
          ],
          prepare: [
            'kartka, ołówek, linijka i 15 ziaren fasoli albo guzików (soroban na kartce)',
            'do sorobanu z pudełka: wieczko pudełka po butach, 3 patyczki do szaszłyków albo słomki, 15 kawałków krótkiego, prostego makaronu rurki (np. ditalini), plastelina',
            'wydrukowana karta z zakładki 🛠️ Zrób',
          ],
          talk: [
            'Dlaczego górny koralik jest wart aż 5? Jak to pomaga liczyć szybciej?',
            'Czym różni się koralik na pręcie setek od koralika na pręcie jedności?',
            'Jak policzyłbyś 7 + 8 bez sorobanu? A jak na sorobanie?',
          ],
        },
        activities: [
          {
            id: 'yzfowd', kind: 'doswiadczenie', title: 'Soroban na kartce', time: '15 minut',
            intro: 'Narysuj soroban, a koraliki zrób z fasoli. Ustawiaj liczby jak dzieci w Japonii.',
            safety: ['Fasoli ani guzików nie bierz do ust ani do nosa.', 'Po zabawie schowaj je przed młodszym rodzeństwem.'],
            needs: ['kartka', 'ołówek i linijka', '15 ziaren fasoli albo guzików', 'wydrukowana karta'],
            steps: [
              'Narysuj ramkę. W środku narysuj 3 pionowe kreski – to pręty.',
              'Pod prętami podpisz od lewej: setki, dziesiątki, jedności.',
              'Bliżej góry narysuj grubą kreskę w poprzek – to belka.',
              'Na każdym pręcie połóż 1 fasolkę nad belką i 4 pod belką – daleko od belki. To jest 0.',
              'Pokaż 7: przesuń do belki górną fasolkę (5) i 2 dolne (1 + 1).',
              'Pokaż liczby z tabeli. Poproś kogoś, żeby je odczytał.',
              'Dla chętnych: ustaw 4 i dodaj 3 jak w Japonii. Dołóż piątkę i zabierz 2 jedynki.',
            ],
            table: { cols: ['Liczba', 'Ustawiłem', 'Ktoś odczytał'], rows: ['7', '25', '108', '360', '999'] },
            conclusion: 'Fasolka nad belką jest warta …, pod belką – … . Na pręcie setek dolna fasolka jest warta … .',
            expected: 'Nad belką – 5, pod belką – 1. Na pręcie setek dolna fasolka jest warta 100. 999 to na każdym pręcie piątka i 4 jedynki przy belce. 4 + 3 to przy belce piątka i 2 jedynki, czyli 7.',
            source: 'Japonia – podstawa MEXT, matematyka kl. 3 A⑻ (ustawianie liczb na sorobanie) i komentarz MEXT s. 157–158 (4 + 3 ze składaniem piątki); budowa 1 + 4 (koralik nad belką i 4 pod belką) – wiedza powszechna; soroban z kartki i fasoli – nasz pomysł, jeszcze niewypróbowany',
          },
          {
            id: 'dje35f', kind: 'projekt', title: 'Soroban z pudełka i makaronu', time: '40 minut', adult: true,
            intro: 'Zbuduj prawdziwy soroban z trzema prętami: setki, dziesiątki, jedności.',
            safety: ['Patyczki do szaszłyków są ostre – końce odcina dorosły. Możesz też użyć słomek.', 'Dziurki w pudełku robi dorosły.', 'Nie jedz surowego makaronu i nie bierz go do ust.', 'Po zabawie schowaj makaron i kulki plasteliny przed młodszym rodzeństwem.'],
            needs: ['wieczko pudełka po butach', '3 patyczki do szaszłyków albo słomki – dłuższe niż krótszy bok wieczka', '15 kawałków krótkiego, prostego makaronu rurki (np. ditalini) – kolanka nie przejdą przez prosty patyczek', 'plastelina', 'flamaster'],
            constraints: ['3 pręty', '15 koralików z makaronu', 'najwyżej 30 minut budowania'],
            steps: [
              'Zanim zaczniesz: sprawdź, czy makaron łatwo wchodzi na patyczek (albo słomkę) i po nim jeździ.',
              'Dorosły robi po 3 dziurki w dwóch dłuższych ściankach wieczka – naprzeciw siebie, w równych odstępach.',
              'Przełóż patyczek przez dziurkę w pierwszej ściance. Teraz nawlecz na niego 1 makaron.',
              'Przyklej na patyczku kulkę plasteliny – to belka. Daj ją mniej więcej w 1/3 drogi od tej ścianki, tak żeby górny makaron miał miejsce na ruch.',
              'Nawlecz 4 makarony i przełóż patyczek przez dziurkę w drugiej ściance. Tak samo zrób dwa pozostałe pręty.',
              'Kulki plasteliny ustaw w jednej linii i narysuj flamastrem belkę na dnie wieczka. Podpisz pręty: setki, dziesiątki, jedności.',
              'Wyzeruj: górny makaron do ścianki, dolne – do drugiej ścianki. Ustaw liczby z tabeli i poproś kogoś, żeby je odczytał.',
            ],
            criteria: [
              'Każdy pręt ma 1 koralik nad belką i 4 pod belką.',
              'Koraliki łatwo się przesuwają i nie spadają.',
              'Umiesz wyzerować soroban.',
              'Ktoś inny odczytał twoje liczby bez pomyłki.',
            ],
            table: { cols: ['Liczba', 'Ustawiona?', 'Odczytana?'], rows: ['8', '46', '205', '999'] },
            conclusion: 'Najtrudniej było …, a poprawiłem to tak: …',
            source: 'Japonia – podstawa MEXT, matematyka kl. 3–4 A⑻ (soroban); budowa 1 + 4 – wiedza powszechna; model z pudełka, patyczków i makaronu – nasz pomysł, jeszcze niewypróbowany',
          },
        ],
        materials: [
          { type: 'lekcja', title: 'Jedności, dziesiątki, setki – przypomnienie z klas 1–3', url: 'https://zpe.gov.pl/b/jednosci-dziesiatki-setki/P1HuLxYSP', source: 'ZPE (zpe.gov.pl) – edukacja matematyczna, szkoła podstawowa I–III', license: 'animacja CC BY-SA 3.0', note: 'Materiał dla klasy 3: wprowadzenie, animacja, ćwiczenia „Sprawdź się”, słowniczek (system pozycyjny, układ dziesiątkowy) i zabawa w tworzenie liczb kostkami.', expect: 'Jedności, dziesiątki, setki' },
          { type: 'lekcja', title: 'Dziesiątkowy system pozycyjny – ta sama cyfra, inna wartość', url: 'https://zpe.gov.pl/a/dziesiatkowy-system-pozycyjny/D6ZvYMnsD', source: 'ZPE (zpe.gov.pl) – matematyka, szkoła podstawowa IV–VIII', license: 'rysunki i animacje CC BY 3.0', note: 'W liczbie 12 dwójka to 2 jedności, a w 21 – 2 dziesiątki. Tak samo jest z koralikiem na sorobanie. Materiał dla starszych klas – czytaj z dorosłym.', expect: 'Dziesiątkowy system pozycyjny' },
          { type: 'lekcja', title: 'Komputery wokół nas – od liczydła do komputera', url: 'https://zpe.gov.pl/a/komputery-wokol-nas/D1NVKqZ8o', source: 'ZPE (zpe.gov.pl) – informatyka, szkoła podstawowa IV–VIII', note: 'Oś czasu maszyn liczących. Na początku są liczydła, m.in. zdjęcie chińskiego liczydła (suanpan). Sorobanu tu nie ma. Dla starszych – z dorosłym.', expect: 'Komputery wokół nas' },
          { type: 'dokument', forParent: true, title: 'Podstawa programowa szkoły podstawowej (Japonia, MEXT) – soroban: matematyka kl. 3 s. 73–74, kl. 4 s. 78–79, kl. 1–2 s. 93', url: 'https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf', lang: 'ja', source: 'Ministerstwo edukacji Japonii (MEXT), 小学校学習指導要領' },
          { type: 'dokument', forParent: true, title: 'Komentarz do podstawy matematyki (Japonia, MEXT) – soroban: kl. 3 s. 157–158, kl. 4 s. 200–201', url: 'https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf', lang: 'ja', source: 'Ministerstwo edukacji Japonii (MEXT), 小学校学習指導要領解説 算数編' },
          { type: 'dokument', forParent: true, title: 'Polska podstawa 2024 (Dz.U. 2024 poz. 996) – edukacja wczesnoszkolna, matematyka: s. 34', url: 'https://eli.gov.pl/api/acts/DU/2024/996/text/O/D20240996.pdf', source: 'Internetowy System Aktów Prawnych (eli.gov.pl)' },
          { type: 'dokument', forParent: true, title: 'Polska podstawa 2026 (Dz.U. 2026 poz. 378) – edukacja wczesnoszkolna, matematyka: s. 57 i 76', url: 'https://eli.gov.pl/api/acts/DU/2026/378/text/O/D20260378.pdf', source: 'Internetowy System Aktów Prawnych (eli.gov.pl)' },
        ],
        flashcards: [
          ['Soroban', 'japońskie liczydło'],
          ['Koralik nad belką', 'jest wart 5'],
          ['Koralik pod belką', 'jest wart 1 – pod belką są 4 koraliki'],
          ['Kiedy koralik się liczy?', 'gdy dotyka belki'],
          ['Najwięcej na jednym pręcie', '9 = 5 + 4'],
          ['7 na sorobanie', 'przy belce piątka i 2 jedynki'],
          ['Każdy pręt to…', '…jedno miejsce: jedności, dziesiątki, setki'],
          ['Pusty pręt', 'cyfra 0'],
          ['Dolny koralik na pręcie setek', 'jest wart 100'],
          ['4 + 3 na sorobanie', 'dołóż 5, zabierz 2'],
          ['6 − 4 na sorobanie', 'zabierz 5, dołóż 1'],
          ['8 + 9 na sorobanie', 'dołóż 10, zabierz 1'],
          ['15 − 7 na sorobanie', 'zabierz 10, dołóż 3'],
          ['Soroban w Japonii', 'na matematyce w 3. i 4. klasie'],
        ],
        questions: [
          // przypomnienie (polska edukacja wczesnoszkolna)
          { id: 'm8l33s', q: 'W liczbie 352 cyfra 5 oznacza…', options: ['5 dziesiątek', '5 jedności', '5 setek'], answer: 0, explain: '352 to 3 setki, 5 dziesiątek i 2 jedności. Piątka stoi w środku – na miejscu dziesiątek.' },
          { id: '768he3', q: 'Jaka cyfra stoi na miejscu dziesiątek w liczbie 207?', options: ['0', '2', '7'], answer: 0, explain: '207 to 2 setki, 0 dziesiątek i 7 jedności. Zero stoi w środku – na miejscu dziesiątek.' },
          // budowa
          { id: 'snyaxi', q: 'Ile jest wart koralik nad belką sorobanu?', options: ['5', '1', '10'], answer: 0, explain: 'Górny koralik, nad belką, jest wart 5.' },
          { id: 'kjf172', q: 'Ile jest wart jeden koralik pod belką?', options: ['1', '5', '4'], answer: 0, explain: 'Każdy koralik pod belką jest wart 1. Są cztery.' },
          { id: 'yqwx7v', q: 'Kiedy koralik na sorobanie się liczy?', options: ['gdy dotyka belki', 'gdy dotyka ramki', 'zawsze, gdy jest na pręcie'], answer: 0, explain: 'Liczą się tylko koraliki przysunięte do belki. Te przy ramce się nie liczą.' },
          { id: '9x1sat', q: 'Jaka największa cyfra zmieści się na jednym pręcie?', options: ['9', '5', '10'], answer: 0, explain: 'Piątka i 4 jedynki: 5 + 4 = 9. Większej liczby jeden pręt nie pokaże – wtedy pomaga pręt dziesiątek.' },
          { id: 'lfvfav', q: 'Chcesz pokazać 8 na jednym pręcie. Co przesuwasz do belki?', options: ['górny koralik i 3 dolne', 'górny koralik i 4 dolne', '8 dolnych koralików'], answer: 0, explain: '8 = 5 + 3: górny koralik (5) i 3 dolne (po 1). Pod belką są tylko 4 koraliki, więc 8 dolnych nie ma.' },
          // jaką liczbę pokazuje?
          { id: 'wy3dcw', q: 'Jaką liczbę pokazuje soroban?', svg: SB([0, 0, 7]), options: ['7', '2', '12'], answer: 0, explain: 'Na pręcie jedności przy belce: piątka i 2 jedynki – to 7. Setki i dziesiątki są puste (0).' },
          { id: 'pibk3g', q: 'Jaką liczbę pokazuje soroban?', svg: SB([0, 3, 8]), options: ['38', '83', '53'], answer: 0, explain: 'Dziesiątki: 3 jedynki – 3. Jedności: piątka i 3 jedynki – 8. Razem 38.' },
          { id: '0onhxf', q: 'Jaką liczbę pokazuje soroban?', svg: SB([5, 0, 6]), options: ['506', '56', '560'], answer: 0, explain: 'Setki: piątka – 5. Dziesiątki: pusto – 0. Jedności: piątka i 1 jedynka – 6. Razem 506.' },
          { id: 'dsl7sd', q: 'Jaką liczbę pokazuje soroban?', svg: SB([2, 4, 9]), options: ['249', '294', '244'], answer: 0, explain: 'Setki: 2. Dziesiątki: 4 jedynki – 4. Jedności: piątka i 4 jedynki – 9. Razem 249.' },
          { id: 'jaxvu1', q: 'Jaką liczbę pokazuje soroban?', svg: SB([1, 6, 0]), options: ['160', '16', '106'], answer: 0, explain: 'Setki: 1. Dziesiątki: piątka i 1 jedynka – 6. Jedności: pusto – 0. Razem 160.' },
          { id: 'xvfssf', q: 'Jaką liczbę pokazuje soroban?', svg: SB([0, 9, 5]), options: ['95', '59', '45'], answer: 0, explain: 'Dziesiątki: piątka i 4 jedynki – 9. Jedności: sama piątka – 5. Razem 95.' },
          // piątka
          { id: 'g2qs8r', q: 'Na pręcie jest 4. Jak dodać 3 na sorobanie?', options: ['dołóż 5 i zabierz 2', 'dołóż 3 dolne koraliki', 'dołóż 5 i dołóż 3'], answer: 0, explain: 'Przy belce są już wszystkie 4 jedynki. Dołóż piątkę i zabierz 2 jedynki. Liczysz tak: 4 + 5 − 2 = 7.' },
          { id: '8o3ep9', q: 'Na pręcie jest 4. Czy dodasz 3, przesuwając same dolne koraliki?', options: ['nie', 'tak'], answer: 0, explain: 'Nie. Wszystkie 4 dolne koraliki są już przy belce – trzeba wziąć piątkę.',
            why: { options: ['wszystkie 4 dolne są już przy belce', 'dolne koraliki są warte po 5', 'na sorobanie nie da się dodawać'], answer: 0, explain: 'Pod belką są tylko 4 koraliki. Gdy wszystkie są przy belce, pomaga piątka: dołóż 5 i zabierz 2.', optionExplain: ['', 'Dolne koraliki są warte po 1, a górny – 5.', 'Da się – japońskie dzieci dodają i odejmują na sorobanie w 3. klasie.'] } },
          { id: 'f51800', q: 'Na pręcie jest 6. Jak odjąć 4 na sorobanie?', options: ['zabierz 5 i dołóż 1', 'zabierz 4 dolne koraliki', 'zabierz 5 i zabierz 1'], answer: 0, explain: '6 to piątka i 1 jedynka – 4 jedynek do zabrania nie ma. Zabierz piątkę i dołóż 1 jedynkę. Liczysz tak: 6 − 5 + 1 = 2.' },
          { id: 'iwi8oi', q: 'Prawda czy fałsz?\n4 + 3 = 4 + 5 − 2', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. 4 + 5 = 9, a 9 − 2 = 7. Tak samo 4 + 3 = 7.' },
          // dziesiątka
          { id: '5l8vl9', q: 'Na sorobanie 8 + 9 liczysz tak: dołóż 10, zabierz 1. Ile wyjdzie?', options: ['17', '18', '19'], answer: 0, explain: '8 + 10 = 18, a 18 − 1 = 17. Sprawdź: 8 + 9 = 17.' },
          { id: '65bios', q: 'Na sorobanie 15 − 7 liczysz tak: zabierz 10, dołóż 3. Ile wyjdzie?', options: ['8', '9', '7'], answer: 0, explain: '15 − 10 = 5, a 5 + 3 = 8. Sprawdź: 15 − 7 = 8.' },
          { id: 'iegtfd', q: 'Na pręcie jedności jest 7. Jak dodać 8 na sorobanie?', options: ['dołóż 10, zabierz 2', 'dołóż 10, zabierz 8', 'dołóż 5, dołóż 2'], answer: 0, explain: 'Na pręcie jedności nie ma miejsca na 8. Dołóż 10 (1 koralik na pręcie dziesiątek) i zabierz 2 jedynki. Liczysz tak: 7 + 10 − 2 = 15.' },
          // pręty i miejsca
          { id: '8suddh', q: 'Ile jest wart jeden dolny koralik na pręcie setek?', options: ['100', '10', '500'], answer: 0, explain: 'Koraliki są takie same na każdym pręcie. Ale na pręcie setek każdy dolny koralik jest wart 100. 500 to górny koralik na pręcie setek.' },
          { id: '02xi98', q: 'Na pręcie dziesiątek przy belce są 3 dolne koraliki. Inne pręty są puste. Jaka to liczba?', options: ['30', '3', '300'], answer: 0, explain: '3 dziesiątki i 0 jedności to 30.',
            why: { options: ['na pręcie dziesiątek dolny koralik jest wart 10', 'koraliki na pręcie dziesiątek są większe od innych', 'na każdym pręcie dolny koralik jest wart 3'], answer: 0, explain: 'Wartość koralika zależy od pręta – tak jak wartość cyfry od miejsca w liczbie.', optionExplain: ['', 'Koraliki na wszystkich prętach są takie same – liczy się pręt.', 'Dolny koralik jest wart 1, 10 albo 100 – zależnie od pręta.'] } },
          { id: 'agyrhl', q: 'Na pręcie żaden koralik nie dotyka belki. Jaka to cyfra?', options: ['0', '5', '9'], answer: 0, explain: 'Liczą się tylko koraliki przy belce. Gdy żaden jej nie dotyka – to 0.' },
          // Japonia
          { id: 'gfau39', q: 'W których klasach soroban jest w japońskim programie matematyki?', options: ['w 3. i 4. klasie', 'w 5. i 6. klasie', 'w 7. i 8. klasie'], answer: 0, explain: 'Według japońskiej podstawy programowej soroban jest na matematyce w 3. i 4. klasie. W 1. i 2. klasie nauczyciel może go użyć jako pomocy.' },
          { id: 'fbxeld', q: '30 000 + 50 000 = ?', say: 'Ile to jest trzydzieści tysięcy dodać pięćdziesiąt tysięcy?', options: ['80 000', '8 000', '800 000'], sayOptions: ['osiemdziesiąt tysięcy', 'osiem tysięcy', 'osiemset tysięcy'], answer: 0, explain: 'Liczysz jak 3 + 5 = 8, tylko na dziesiątkach tysięcy: 80 000. Takie działanie jest w japońskim programie 3. klasy.', sayExplain: 'Liczysz jak trzy dodać pięć, tylko na dziesiątkach tysięcy: osiemdziesiąt tysięcy. Takie działanie jest w japońskim programie trzeciej klasy.' },
        ],
      },
    ],
  });
})();
