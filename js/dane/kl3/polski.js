/* Edukacja polonistyczna – klasa 3 (podstawa: Dz.U. 2024 poz. 996, zał. 1, I etap – edukacja wczesnoszkolna, I. Edukacja polonistyczna) */
window.SUBJECTS.push({
  id: 'polski',
  name: 'Edukacja polonistyczna',
  icon: '📚',
  color: '#d9534f',
  topics: [
    {
      id: 'alfabet',
      name: 'Głoski, litery i alfabet',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 5. kształcenie językowe, pkt 1 (wyróżnia w wypowiedziach zdania, w zdaniach wyrazy, w wyrazach samogłoski i spółgłoski); 4. pisanie, pkt 6 (porządkuje wyrazy w kolejności alfabetycznej według pierwszej i drugiej litery). Rozróżnienie głoski i litery (np. sz, cz, rz) – pomoc do pkt 5.1 (decyzja redakcyjna). Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Zdanie, wyraz, głoska</h3>
        <p>Mówimy i piszemy <b>zdaniami</b>. Zdanie składa się z <b>wyrazów</b>. Wyraz składa się z <b>głosek</b>.</p>
        <p>Ola ma psa. → Ola · ma · psa → O · l · a</p>
        <h3>Samogłoski i spółgłoski</h3>
        <p><b>Samogłoski</b> to: <b>a, ą, e, ę, i, o, ó, u, y</b>. Możesz je śpiewać długo: aaa, ooo.</p>
        <p>Wszystkie inne to <b>spółgłoski</b>, np. b, d, k, m, s, t.</p>
        <h3>Głoska i litera</h3>
        <p><b>Głoskę</b> słyszysz. <b>Literę</b> widzisz i piszesz.</p>
        <p>Czasem jedną głoskę piszesz dwiema literami: <b>ch, cz, dz, rz, sz</b> (i dź, dż).</p>
        <table>
          <tr><th>Wyraz</th><th>Litery</th><th>Głoski</th></tr>
          <tr><td>kot</td><td>3</td><td>3</td></tr>
          <tr><td>szafa</td><td>5</td><td>4 (sz-a-f-a)</td></tr>
          <tr><td>czapka</td><td>6</td><td>5 (cz-a-p-k-a)</td></tr>
        </table>
        <h3>Alfabet</h3>
        <p>Polski alfabet ma <b>32 litery</b>:</p>
        <p>a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż</p>
        <p>Litery q, v, x nie należą do polskiego alfabetu.</p>
        <h3>Kolejność alfabetyczna</h3>
        <ul>
          <li>Patrz na <b>pierwszą literę</b>: ananas, dom, kot.</li>
          <li>Gdy pierwsza jest taka sama – patrz na <b>drugą</b>: bajka, bocian, bułka.</li>
        </ul>
        <p class="tip">💡 Litera z ogonkiem albo kreską stoi zaraz za swoją „siostrą”: a – ą, l – ł, z – ź – ż.</p>
      `,
      flashcards: [
        ['Zdanie', 'Składa się z wyrazów. Na końcu ma kropkę, znak zapytania albo wykrzyknik.'],
        ['Wyraz', 'Część zdania. W piśmie oddzielasz go odstępem.'],
        ['Głoska', 'To, co słyszysz i wymawiasz.'],
        ['Litera', 'To, co widzisz i piszesz.'],
        ['Samogłoski', 'a, ą, e, ę, i, o, ó, u, y'],
        ['Spółgłoski', 'Wszystkie inne głoski, np. b, k, m, s, t'],
        ['Ile liter ma polski alfabet?', '32 litery'],
        ['Dwie litery – jedna głoska', 'ch, cz, dz, rz, sz (i dź, dż)'],
        ['Kolejność alfabetyczna', 'Patrzysz na pierwszą literę. Gdy jest taka sama – na drugą.'],
      ],
      questions: [
        { id: 'qt8wqw', q: 'Ile liter ma polski alfabet?', options: ['32', '26', '30'], answer: 0, explain: 'Polski alfabet ma 32 litery – od a do ż.' },
        { id: 'l54dwt', q: 'Ile wyrazów ma zdanie:\n„Mój pies lubi kości.”', options: ['4', '3', '5'], answer: 0, explain: 'Mój · pies · lubi · kości – to 4 wyrazy.' },
        { id: 'ahz59s', q: 'Ile zdań jest w tekście:\n„Pada deszcz. Biorę parasol. Idę do szkoły.”', options: ['3', '2', '7'], answer: 0, explain: 'Każde zdanie kończy się kropką. Są trzy kropki – są trzy zdania.' },
        { id: 'j6kqe0', q: 'Która litera to samogłoska?', options: ['o', 'k', 'm', 't'], answer: 0, explain: 'Samogłoski to: a, ą, e, ę, i, o, ó, u, y. Litera o jest samogłoską.' },
        { id: 'zbmb3r', q: 'Która litera to spółgłoska?', options: ['b', 'a', 'e', 'u'], answer: 0, explain: 'a, e, u to samogłoski. b to spółgłoska.' },
        { id: 'b60udp', q: 'Ile samogłosek ma wyraz „parasol”?', options: ['3', '2', '4'], answer: 0, explain: 'p-a-r-a-s-o-l: samogłoski to a, a, o – są trzy.' },
        { id: 'putdnn', q: 'Ile samogłosek ma wyraz „ogórek”?', options: ['3', '2', '4'], answer: 0, explain: 'o-g-ó-r-e-k: samogłoski to o, ó, e – są trzy.' },
        { id: 'iqlpsh', q: 'Ile liter ma wyraz „szafa”?', options: ['5', '4', '6'], answer: 0, explain: 's-z-a-f-a – to 5 liter.' },
        { id: 'j6t1oc', q: 'Ile głosek słyszysz w wyrazie „szafa”?', options: ['4', '5', '3'], answer: 0, explain: 'sz-a-f-a – to 4 głoski. Litery s i z razem oznaczają jedną głoskę „sz”.' },
        { id: 'u2kgjv', q: 'Prawda czy fałsz?\nLitera y to samogłoska.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, say: 'Prawda czy fałsz? Litera igrek to samogłoska.', explain: 'Tak. Samogłoski to: a, ą, e, ę, i, o, ó, u, y.' },
        { id: 'ywcckf', q: 'Prawda czy fałsz?\nW polskim alfabecie jest litera v.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, say: 'Prawda czy fałsz? W polskim alfabecie jest litera fau.', explain: 'Fałsz. Liter q, v, x nie ma w polskim alfabecie.' },
        { id: 'mf30os', q: 'Która litera jest w alfabecie zaraz po „l”?', options: ['ł', 'm', 'k'], sayOptions: ['eł', 'em', 'ka'], answer: 0, say: 'Która litera jest w alfabecie zaraz po literze el?', explain: 'Po l stoi ł, a dopiero potem m.' },
        { id: 'v8fzpu', q: 'Który wyraz będzie pierwszy w kolejności alfabetycznej?', options: ['lew', 'lis', 'łoś'], answer: 0, explain: '„Lew” i „lis” zaczynają się od l. Druga litera: e jest przed i. „Łoś” jest na końcu, bo ł stoi po l.' },
        { id: '90hdaa', q: 'Które wyrazy są ułożone w kolejności alfabetycznej?', options: ['bajka, bocian, bułka', 'bułka, bocian, bajka', 'bocian, bajka, bułka'], answer: 0, explain: 'Wszystkie zaczynają się od b. Druga litera: a, o, u – w takiej kolejności są w alfabecie.' },
        { id: 'uwfip5', q: 'Który wyraz zaczyna się od samogłoski?', options: ['osa', 'kot', 'dom', 'las'], answer: 0, explain: '„Osa” zaczyna się od o – to samogłoska.' },
        {
          id: 'cbzzke', q: 'Jakiej litery brakuje w alfabecie?', options: ['c', 'd', 'e'], sayOptions: ['ce', 'de', 'e'], answer: 0,
          say: 'Popatrz na obrazek. Jakiej litery brakuje w alfabecie między literą be a literą cie?',
          svg: `<svg viewBox="0 0 360 90" role="img" aria-label="Pięć kafelków z literami: a, ą, b, puste pole ze znakiem zapytania, ć">
            <g class="f1 s1 sw"><rect x="15" y="15" width="60" height="60" rx="10"/><rect x="85" y="15" width="60" height="60" rx="10"/><rect x="155" y="15" width="60" height="60" rx="10"/><rect x="295" y="15" width="60" height="60" rx="10"/></g>
            <rect x="225" y="15" width="60" height="60" rx="10" class="f4 s4 sw dash"/>
            <text x="45" y="52" class="tx-b" text-anchor="middle">a</text>
            <text x="115" y="52" class="tx-b" text-anchor="middle">ą</text>
            <text x="185" y="52" class="tx-b" text-anchor="middle">b</text>
            <text x="255" y="52" class="tx-b" text-anchor="middle">?</text>
            <text x="325" y="52" class="tx-b" text-anchor="middle">ć</text>
          </svg>`,
          explain: 'Alfabet zaczyna się tak: a, ą, b, c, ć, d… Brakuje litery c.',
        },
      ],
    },
    {
      id: 'ortografia',
      name: 'Ó czy u? Rz czy ż? Ch czy h?',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 4. pisanie, pkt 4 (pisze z pamięci i ze słuchu; przestrzega poprawności ortograficznej w wyrazach poznanych i opracowanych podczas zajęć); 6. samokształcenie, pkt 1 (sprawdza zapis w słowniku ortograficznym). Podstawa nie wymienia reguł ani wyrazów – wybór najprostszych reguł pisowni ó/u, rz/ż, ch/h i przykładów to decyzja redakcyjna. Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Jak wybrać literę?</h3>
        <p>Ó i u, rz i ż, ch i h brzmią tak samo. Pomaga <b>reguła</b> (zmień wyraz i posłuchaj) albo <b>pamięć</b>. Gdy nie wiesz – sprawdź w słowniku ortograficznym.</p>
        <h3>Ó</h3>
        <ul>
          <li>ó wymienia się na <b>o</b>: stół – stoły, mróz – mrozy, wóz – wozy, róg – rogi,</li>
          <li>ó wymienia się na <b>e</b> lub <b>a</b>: niósł – niesie, wrócić – wracać,</li>
          <li>ó w zakończeniach <b>-ów, -ówka, -ówna</b>: Kraków, pocztówka.</li>
        </ul>
        <h3>U</h3>
        <ul>
          <li>na <b>początku</b> wyrazu: ucho, ulica (ale: ósmy – bo osiem),</li>
          <li>na <b>końcu</b> wyrazu: do domu, z lasu,</li>
          <li>w zakończeniu <b>-uje</b>: maluje, rysuje, buduje.</li>
        </ul>
        <h3>Rz</h3>
        <ul>
          <li>rz wymienia się na <b>r</b>: morze – morski, góra – na górze, lekarz – lekarski,</li>
          <li>po <b>b, p, d, t, g, k, ch, j, w</b>: brzeg, przedszkole, drzewo, trzy, grzyb, krzesło, wrzesień.</li>
        </ul>
        <p>Uwaga: <b>pszczoła</b> i <b>pszenica</b> piszemy przez sz.</p>
        <h3>Ż</h3>
        <p>ż wymienia się na <b>g, h, z, s, dz</b>:</p>
        <table>
          <tr><th>ż ↔</th><th>przykład</th></tr>
          <tr><td>g</td><td>książka – księga, dróżka – droga</td></tr>
          <tr><td>h</td><td>drużyna – druh</td></tr>
          <tr><td>z</td><td>zamrażarka – mróz</td></tr>
          <tr><td>s</td><td>wyższy – wysoki</td></tr>
          <tr><td>dz</td><td>pieniężny – pieniądze</td></tr>
        </table>
        <h3>Ch i h</h3>
        <ul>
          <li><b>ch</b> na końcu wyrazu: dach, groch, brzuch (wyjątek: druh),</li>
          <li><b>ch</b> wymienia się na <b>sz</b>: mucha – muszka, ucho – uszy, groch – groszek,</li>
          <li><b>h</b> wymienia się na ż: druh – drużyna.</li>
        </ul>
        <h3>Zapamiętaj pisownię</h3>
        <p>ó: góra, żółw, żółty, król · u: zupa, kura, chmura · rz: rzeka, burza · ż: żaba, jeż · h: herbata, hulajnoga, huśtawka · ch: chleb, chmura</p>
        <p class="tip">💡 Zostań detektywem: zmień wyraz (jeden – dwa, mały – duży) i posłuchaj, czy nie ukryło się o, r, g albo sz.</p>
      `,
      flashcards: [
        ['ó wymienne na o', 'stół – stoły, mróz – mrozy, wóz – wozy, róg – rogi'],
        ['ó wymienne na e lub a', 'niósł – niesie, wrócić – wracać'],
        ['ó w zakończeniach', '-ów, -ówka, -ówna: Kraków, pocztówka'],
        ['Kiedy piszemy u?', 'Na początku wyrazu (ulica), na końcu (do domu) i w -uje (maluje)'],
        ['rz wymienne na r', 'morze – morski, góra – na górze'],
        ['rz po spółgłoskach', 'po b, p, d, t, g, k, ch, j, w: brzeg, drzewo, trzy, krzesło'],
        ['ż wymienne', 'na g, h, z, s, dz: książka – księga, druh – drużyna, mróz – zamrażarka, wysoki – wyższy'],
        ['ch na końcu wyrazu', 'dach, groch, brzuch (wyjątek: druh)'],
        ['ch wymienne na sz', 'mucha – muszka, ucho – uszy, groch – groszek'],
        ['Do zapamiętania', 'góra, żółw, zupa, rzeka, żaba, herbata, chleb'],
      ],
      questions: [
        { id: 'iyq1dd', q: 'Który wyraz jest napisany poprawnie?', options: ['stół', 'stuł'], sayOptions: ['przez o z kreską', 'przez u otwarte'], answer: 0, explain: 'Piszemy ó, bo stół – stoły: ó wymienia się na o.' },
        { id: 'k6koj8', q: 'Dlaczego piszemy ó w wyrazie „mróz”?', options: ['bo mówimy: mrozy', 'bo jest zimno', 'bo ó jest na końcu'], answer: 0, explain: 'Mróz – mrozy: ó wymienia się na o.' },
        { id: '5kii7u', q: 'W którym wyrazie ó wymienia się na o?', options: ['wóz', 'góra', 'żółw'], answer: 0, explain: 'Wóz – wozy. „Góra” i „żółw” to wyrazy do zapamiętania – nie ma w nich takiej wymiany.' },
        { id: 'bejj9b', q: 'Który wyraz jest napisany poprawnie?', options: ['ulica', 'ólica'], sayOptions: ['przez u otwarte', 'przez o z kreską'], answer: 0, explain: 'Na początku wyrazu piszemy u: ulica, ucho, ubranie.' },
        { id: 'zatoea', q: 'Który wyraz jest napisany poprawnie?', options: ['maluje', 'malóje'], sayOptions: ['przez u otwarte', 'przez o z kreską'], answer: 0, explain: 'W zakończeniu -uje piszemy u: maluje, rysuje, buduje.' },
        { id: '8nowjt', q: 'Który wyraz pomoże ci napisać „morze”?', options: ['morski', 'mokry', 'motyl'], answer: 0, explain: 'Morze – morski: rz wymienia się na r, więc piszemy rz.' },
        { id: 'otwhsk', q: 'Który wyraz jest napisany poprawnie?', options: ['drzewo', 'dżewo'], sayOptions: ['przez er zet', 'przez de i żet z kropką'], answer: 0, explain: 'Po literze d piszemy rz: drzewo.' },
        { id: '0aoeck', q: 'Dlaczego w wyrazie „krzesło” piszemy rz?', options: ['bo rz stoi po k', 'bo krzesło ma nogi', 'bo na końcu jest o'], answer: 0, explain: 'Po b, p, d, t, g, k, ch, j, w piszemy rz: krzesło, drzewo, trzy.' },
        { id: 'jwng4w', q: 'Dlaczego piszemy ż w wyrazie „książka”?', options: ['bo mówimy: księga', 'bo to rzecz', 'bo ż stoi po k'], answer: 0, explain: 'Książka – księga: ż wymienia się na g.' },
        { id: 'g520n5', q: 'Uzupełnij wyraz: dró_ka\nPodpowiedź: droga.', options: ['ż', 'rz'], sayOptions: ['żet z kropką', 'er zet'], answer: 0, say: 'Jak napiszesz wyraz dróżka? Pomyśl o wyrazie droga.', explain: 'Dróżka – droga: ż wymienia się na g. A ó – na o.' },
        { id: 'vqrou1', q: 'Który wyraz jest napisany poprawnie?', options: ['dach', 'dah'], sayOptions: ['przez ce ha', 'przez samo ha'], answer: 0, explain: 'Na końcu wyrazu piszemy ch: dach, groch, brzuch.' },
        { id: 'j5ho25', q: 'Dlaczego w wyrazie „mucha” piszemy ch?', options: ['bo mówimy: muszka', 'bo mucha lata', 'bo ch jest na początku'], answer: 0, explain: 'Mucha – muszka: ch wymienia się na sz.' },
        { id: 'rtlii1', q: 'Prawda czy fałsz?\n„Herbata” piszemy przez h.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Herbatę przez h trzeba po prostu zapamiętać.' },
        { id: '4mcekd', q: 'Prawda czy fałsz?\nW wyrazie „góra” ó wymienia się na o.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. „Góra” to wyraz do zapamiętania – nie ma w nim wymiany na o.' },
        { id: 'e7dxjc', q: 'Uzupełnij wyraz: k_ra\nPodpowiedź: ptak, który znosi jajka.', options: ['u', 'ó'], sayOptions: ['u otwarte', 'o z kreską'], answer: 0, say: 'Jak napiszesz wyraz kura? To ptak, który znosi jajka.', explain: 'Kura piszemy przez u – to wyraz do zapamiętania.' },
        { id: 'holzoo', q: 'W którym wyrazie ó jest w zakończeniu -ówka?', options: ['pocztówka', 'ołówek', 'ogórek'], answer: 0, explain: 'Pocztówka kończy się na -ówka. W zakończeniach -ów, -ówka piszemy ó.' },
      ],
    },
    {
      id: 'zdanie',
      name: 'Zdanie i znaki na końcu',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 5. kształcenie językowe, pkt 1–3 (zdania; zdania oznajmujące, pytające, rozkazujące; przekształcanie zdań oznajmujących w pytania i odwrotnie oraz pojedynczych w złożone) i pkt 6 (łączy wyrazy w wypowiedzenia, formułuje zdanie pojedyncze i złożone); 4. pisanie, pkt 5 (znaki interpunkcyjne na końcu zdania, przecinki przy wyliczaniu). Przecinek przed „ale” i „bo” w prostych zdaniach złożonych – uzupełnienie do pkt 5.3 (decyzja redakcyjna). Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Trzy rodzaje zdań</h3>
        <table>
          <tr><th>Zdanie</th><th>Co robi?</th><th>Na końcu</th><th>Przykład</th></tr>
          <tr><td><b>oznajmujące</b></td><td>informuje</td><td>kropka .</td><td>Pada śnieg.</td></tr>
          <tr><td><b>pytające</b></td><td>pyta</td><td>znak zapytania ?</td><td>Czy pada śnieg?</td></tr>
          <tr><td><b>rozkazujące</b></td><td>wydaje polecenie, prosi</td><td>zwykle wykrzyknik !</td><td>Zamknij drzwi!</td></tr>
        </table>
        <h3>Zdanie → pytanie</h3>
        <p>Dodaj <b>czy</b> albo wyraz <b>kto? gdzie? kiedy? dlaczego?</b> i postaw znak zapytania.</p>
        <p>Kot śpi. → Czy kot śpi? → Gdzie śpi kot?</p>
        <p>I odwrotnie: Czy pies szczeka? → Pies szczeka.</p>
        <h3>Zdanie pojedyncze i złożone</h3>
        <ul>
          <li><b>pojedyncze</b> – jedno zdanie: Pada deszcz.</li>
          <li><b>złożone</b> – dwa zdania połączone w jedno, np. słowem <b>i</b>, <b>ale</b>, <b>bo</b>: Pada deszcz i wieje wiatr.</li>
        </ul>
        <p>Przed <b>ale</b> i <b>bo</b> stawiasz przecinek: Chcę iść do parku, ale pada. Biorę parasol, bo pada.</p>
        <h3>Przecinek przy wyliczaniu</h3>
        <p>Kupiłam jabłka, gruszki i banany.</p>
        <p class="tip">💡 Przed „i” na końcu wyliczania nie stawiasz przecinka.</p>
        <h3>Dobrze zapisane zdanie</h3>
        <p>Zaczyna się <b>wielką literą</b>, ma znak na końcu, a wyrazy stoją tak, żeby zdanie miało sens.</p>
      `,
      flashcards: [
        ['Zdanie oznajmujące', 'Informuje. Na końcu kropka: Pada śnieg.'],
        ['Zdanie pytające', 'Pyta. Na końcu znak zapytania: Czy pada śnieg?'],
        ['Zdanie rozkazujące', 'Wydaje polecenie albo prosi. Na końcu zwykle wykrzyknik: Zamknij drzwi!'],
        ['Jak zrobić pytanie?', 'Dodaj „czy” albo kto? gdzie? kiedy? i postaw znak zapytania.'],
        ['Zdanie pojedyncze', 'Jedno zdanie: Kot śpi.'],
        ['Zdanie złożone', 'Dwa zdania w jednym, np. połączone słowem i, ale, bo: Kot śpi, a pies szczeka.'],
        ['Przecinek przed ale i bo', 'Chcę iść, ale pada. Biorę parasol, bo pada.'],
        ['Przecinek przy wyliczaniu', 'Jabłka, gruszki i banany – przed „i” bez przecinka.'],
        ['Pierwszy wyraz zdania', 'Zawsze wielką literą.'],
      ],
      questions: [
        { id: 'vpzfyw', q: 'Jakie to zdanie?\n„Kot śpi na kanapie.”', options: ['oznajmujące', 'pytające', 'rozkazujące'], noShuffle: true, answer: 0, explain: 'Zdanie informuje, co robi kot, i kończy się kropką – to zdanie oznajmujące.' },
        { id: 'te37hw', q: 'Jakie to zdanie?\n„Czy masz kredki?”', options: ['oznajmujące', 'pytające', 'rozkazujące'], noShuffle: true, answer: 1, explain: 'Zdanie pyta i kończy się znakiem zapytania – to zdanie pytające.' },
        { id: 'j8y9it', q: 'Jakie to zdanie?\n„Zamknij okno!”', options: ['oznajmujące', 'pytające', 'rozkazujące'], noShuffle: true, answer: 2, explain: 'Zdanie wydaje polecenie – to zdanie rozkazujące.' },
        { id: 'h9lrp6', q: 'Jaki znak postawisz na końcu?\n„Gdzie mieszkasz”', options: ['?', '.', ','], sayOptions: ['znak zapytania', 'kropkę', 'przecinek'], answer: 0, say: 'Jaki znak postawisz na końcu zdania: Gdzie mieszkasz', explain: 'To pytanie, więc na końcu stawiasz znak zapytania: Gdzie mieszkasz?' },
        { id: 'mzjqnc', q: 'Jaki znak postawisz na końcu?\n„Dziś jest wtorek”', options: ['.', '?', ','], sayOptions: ['kropkę', 'znak zapytania', 'przecinek'], answer: 0, say: 'Jaki znak postawisz na końcu zdania: Dziś jest wtorek', explain: 'Zdanie informuje – to zdanie oznajmujące, na końcu kropka.' },
        { id: 'z12ufc', q: 'Jaki znak postawisz na końcu?\n„Uważaj, gorące”', options: ['!', '?', ','], sayOptions: ['wykrzyknik', 'znak zapytania', 'przecinek'], answer: 0, say: 'Jaki znak postawisz na końcu zdania: Uważaj, gorące', explain: 'To ostrzeżenie i polecenie – na końcu wykrzyknik: Uważaj, gorące!' },
        { id: 'eahrxq', q: 'Jak zmienisz to zdanie w pytanie?\n„Ola lubi lody.”', options: ['Czy Ola lubi lody?', 'Ola lubi lody!', 'Ola nie lubi lodów.'], answer: 0, explain: 'Dodajesz „czy” i znak zapytania: Czy Ola lubi lody?' },
        { id: 'yq4f4w', q: 'Jak zmienisz to pytanie w zdanie oznajmujące?\n„Czy pies szczeka?”', options: ['Pies szczeka.', 'Czy pies szczeka!', 'Szczekaj, piesku!'], answer: 0, explain: 'Usuwasz „czy” i stawiasz kropkę: Pies szczeka.' },
        { id: 'xsaac0', q: 'Które zdanie jest złożone?', options: ['Pada deszcz i wieje wiatr.', 'Pada zimny deszcz.', 'Wieje silny wiatr.'], answer: 0, explain: '„Pada deszcz” i „wieje wiatr” to dwa zdania połączone słowem „i” – razem tworzą zdanie złożone.' },
        { id: 'zbwo9n', q: 'Które zdanie jest pojedyncze?', options: ['Kot śpi na kanapie.', 'Kot śpi, a pies szczeka.', 'Mama gotuje, bo jest pora obiadu.'], answer: 0, explain: '„Kot śpi na kanapie” to jedno zdanie. Pozostałe mają po dwie części – są złożone.' },
        { id: 'w6xkhe', q: 'Który wyraz pasuje?\n„Chcę iść do parku, … pada deszcz.”', options: ['ale', 'czy', 'albo'], answer: 0, explain: 'Chcę iść do parku, ale pada deszcz. „Ale” łączy dwie przeciwne myśli.' },
        { id: 'd6wptp', q: 'W którym zdaniu przecinki są postawione dobrze?', options: ['Mam kredki, farby i pędzel.', 'Mam kredki farby, i pędzel.', 'Mam, kredki, farby, i pędzel.'], sayOptions: ['przecinek tylko po wyrazie kredki', 'przecinek tylko po wyrazie farby', 'przecinki po wyrazach mam, kredki i farby'], answer: 0, explain: 'Przy wyliczaniu oddzielasz wyrazy przecinkami, ale przed „i” przecinka nie stawiasz.' },
        { id: '1fbdmg', q: 'Prawda czy fałsz?\nPrzy wyliczaniu przed wyrazem „i” stawiamy przecinek.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Jabłka, gruszki i banany – przed „i” nie ma przecinka.' },
        { id: '7kwwzl', q: 'Które zdanie jest zapisane poprawnie?', options: ['Mama piecze ciasto.', 'mama piecze ciasto.', 'Mama piecze ciasto'], sayOptions: ['wielka litera na początku i kropka na końcu', 'mała litera na początku i kropka na końcu', 'wielka litera na początku i bez kropki'], answer: 0, explain: 'Zdanie zaczynasz wielką literą i kończysz kropką.' },
        { id: '162av2', q: 'Ułóż zdanie z wyrazów:\nszkoły · idę · Rano · do', options: ['Rano idę do szkoły.', 'Idę rano szkoły do.', 'Szkoły do idę rano.'], answer: 0, say: 'Ułóż zdanie z wyrazów: szkoły, idę, rano, do. Wyraz rano jest napisany wielką literą.', explain: 'Wyraz z wielką literą („Rano”) będzie pierwszy. Rano idę do szkoły.' },
        { id: 'dihsd7', q: 'Prawda czy fałsz?\nZdanie pytające kończymy znakiem zapytania.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda: Czy idziesz z nami?' },
      ],
    },
    {
      id: 'wielka-litera',
      name: 'Wielka litera i skróty',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 4. pisanie, pkt 8 (poprawna wielkość liter w zapisie tytułów utworów, książek, poznanych nazw geograficznych, imion i nazwisk), pkt 5 (zapisuje poznane i najczęściej stosowane skróty, w tym skróty matematyczne), pkt 7 (zapisuje poprawnie liczebniki). Mała litera w nazwach dni tygodnia, miesięcy i pór roku oraz zapis daty – uzupełnienie do pkt 8 i 5 (decyzja redakcyjna). Tytuły w przykładach pochodzą z listy lektur w podstawie (bez opisu treści). Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Wielką literą piszesz</h3>
        <ul>
          <li>pierwszy wyraz w zdaniu: <b>D</b>ziś pada.</li>
          <li>imiona i nazwiska: <b>A</b>nia <b>N</b>owak,</li>
          <li>imiona zwierząt: <b>B</b>urek,</li>
          <li>nazwy miast: <b>K</b>raków, <b>G</b>dańsk,</li>
          <li>nazwy państw: <b>P</b>olska, <b>N</b>iemcy,</li>
          <li>nazwy rzek i gór: <b>W</b>isła, <b>O</b>dra, <b>T</b>atry.</li>
        </ul>
        <h3>Tytuły książek</h3>
        <p>Wielką literą tylko <b>pierwszy wyraz</b> i <b>nazwy własne</b>:</p>
        <ul>
          <li>„Dzieci z Bullerbyn”</li>
          <li>„O psie, który jeździł koleją”</li>
          <li>„Doktor Dolittle i jego zwierzęta”</li>
        </ul>
        <h3>Małą literą piszesz</h3>
        <p>dni tygodnia (<b>w</b>torek), miesiące (<b>m</b>aj), pory roku (<b>w</b>iosna) – chyba że zaczynają zdanie.</p>
        <h3>Skróty</h3>
        <table>
          <tr><th>Z kropką</th><th>Bez kropki</th></tr>
          <tr><td>np. – na przykład</td><td>cm, m, km</td></tr>
          <tr><td>itd. – i tak dalej</td><td>kg, g</td></tr>
          <tr><td>ul. – ulica</td><td>l (litr)</td></tr>
          <tr><td>r. – rok</td><td>zł, gr</td></tr>
          <tr><td>godz. – godzina</td><td></td></tr>
        </table>
        <h3>Data i liczby</h3>
        <p>Datę piszesz tak: <b>5 maja 2026 r.</b></p>
        <p>Liczby słowami: 11 – jedenaście, 12 – dwanaście, 15 – piętnaście, 40 – czterdzieści.</p>
        <p class="tip">💡 Nazwa własna to „imię” osoby, zwierzęcia albo miejsca – dlatego dostaje wielką literę.</p>
      `,
      flashcards: [
        ['Początek zdania', 'Zawsze wielką literą: Dziś pada.'],
        ['Imiona i nazwiska', 'Wielką literą: Ania Kowalska, Tomek Nowak'],
        ['Imiona zwierząt', 'Wielką literą: Burek, Mruczek'],
        ['Miasta i państwa', 'Wielką literą: Kraków, Gdańsk, Polska'],
        ['Rzeki i góry', 'Wielką literą: Wisła, Odra, Tatry'],
        ['Tytuł książki', 'Wielką literą pierwszy wyraz i nazwy własne: Dzieci z Bullerbyn'],
        ['Małą literą', 'Dni tygodnia, miesiące, pory roku: wtorek, maj, wiosna'],
        ['Skróty z kropką', 'np. (na przykład), itd. (i tak dalej), ul. (ulica), r. (rok), godz. (godzina)'],
        ['Skróty miar bez kropki', 'cm, m, km, kg, g, l, zł, gr'],
        ['Jak zapisać datę?', '5 maja 2026 r.'],
      ],
      questions: [
        { id: 'mkxcrx', q: 'Który zapis jest poprawny?', options: ['Mieszkam w Gdańsku.', 'Mieszkam w gdańsku.'], sayOptions: ['Gdańsku wielką literą', 'gdańsku małą literą'], answer: 0, explain: 'Nazwy miast piszemy wielką literą: Gdańsk, Kraków.' },
        { id: 'dyl7ko', q: 'Który zapis jest poprawny?', options: ['Moja siostra ma na imię Zosia.', 'Moja siostra ma na imię zosia.'], sayOptions: ['Zosia wielką literą', 'zosia małą literą'], answer: 0, explain: 'Imiona piszemy wielką literą.' },
        { id: 'w4swg3', q: 'Który zapis jest poprawny?', options: ['Wisła to długa rzeka.', 'wisła to długa rzeka.', 'Wisła To długa rzeka.'], sayOptions: ['wielka litera tylko w wyrazie Wisła', 'wszystko małą literą', 'wielka litera w wyrazach Wisła i to'], answer: 0, explain: 'Wisła – nazwa rzeki i pierwszy wyraz zdania – wielką literą. „To” w środku zdania – małą.' },
        { id: 'augyh3', q: 'Który zapis jest poprawny?', options: ['W środę mam basen.', 'W Środę mam basen.'], sayOptions: ['środę małą literą', 'Środę wielką literą'], answer: 0, explain: 'Dni tygodnia piszemy małą literą: poniedziałek, wtorek, środa.' },
        { id: 'u9ppdx', q: 'Który zapis jest poprawny?', options: ['Urodziny mam w lipcu.', 'Urodziny mam w Lipcu.'], sayOptions: ['lipcu małą literą', 'Lipcu wielką literą'], answer: 0, explain: 'Nazwy miesięcy piszemy małą literą: styczeń, maj, lipiec.' },
        { id: 'g358fi', q: 'Prawda czy fałsz?\nNazwy pór roku (wiosna, lato, jesień, zima) piszemy wielką literą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Pory roku piszemy małą literą (chyba że zaczynają zdanie).' },
        { id: 'zih6gk', q: 'Prawda czy fałsz?\nNazwę państwa „Polska” piszemy wielką literą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Nazwy państw piszemy wielką literą: Polska, Niemcy.' },
        { id: 'xeugnd', q: 'Który tytuł książki jest zapisany poprawnie?', options: ['Dzieci z Bullerbyn', 'Dzieci Z Bullerbyn', 'dzieci z bullerbyn'], sayOptions: ['wielka litera w wyrazach Dzieci i Bullerbyn', 'wielka litera w każdym wyrazie', 'wszystko małą literą'], answer: 0, explain: 'W tytule wielką literą piszesz pierwszy wyraz i nazwy własne. Bullerbyn to nazwa własna.' },
        { id: '9nzu6c', q: 'Który tytuł książki jest zapisany poprawnie?', options: ['O psie, który jeździł koleją', 'O Psie, Który Jeździł Koleją', 'o psie, który jeździł koleją'], sayOptions: ['wielka litera tylko w pierwszym wyrazie', 'wielka litera w każdym wyrazie', 'wszystko małą literą'], answer: 0, explain: 'W tytule wielką literą piszesz tylko pierwszy wyraz (i nazwy własne – tu ich nie ma).' },
        { id: '51ma1c', q: 'Który zapis jest poprawny?', options: ['Zimą jedziemy w Tatry.', 'Zimą jedziemy w tatry.'], sayOptions: ['Tatry wielką literą', 'tatry małą literą'], answer: 0, explain: 'Nazwy gór piszemy wielką literą: Tatry.' },
        { id: 'fx3bf6', q: 'Co znaczy skrót „np.”?', options: ['na przykład', 'na pewno', 'nie pamiętam'], answer: 0, say: 'Co znaczy skrót, który piszemy literami en i pe z kropką?', explain: 'np. = na przykład. Na końcu ma kropkę.' },
        { id: 'ddt2ak', q: 'Jak skracamy wyraz „ulica”?', options: ['ul.', 'ulc', 'u.'], sayOptions: ['u, el i kropka', 'u, el, ce, bez kropki', 'samo u i kropka'], answer: 0, explain: 'ulica → ul. (z kropką), np. ul. Kwiatowa 5.' },
        { id: '75da35', q: 'Które zdanie jest zapisane poprawnie?', options: ['Kupiłam 2 kg jabłek.', 'Kupiłam 2 kg. jabłek.'], sayOptions: ['ka gie bez kropki', 'ka gie z kropką'], answer: 0, say: 'Kupiłam 2 kilogramy jabłek. Jak zapiszesz skrót ka gie: bez kropki czy z kropką?', explain: 'Skróty miar piszemy bez kropki: kg, cm, m, zł.' },
        { id: '21og2v', q: 'Jak zapiszesz datę?', options: ['5 maja 2026 r.', '5 Maja 2026 r.', '5 maja 2026 R.'], sayOptions: ['maja małą literą, małe er z kropką', 'Maja wielką literą', 'wielkie er z kropką'], answer: 0, explain: 'Nazwa miesiąca – małą literą, skrót r. (roku) – małą literą z kropką.' },
        { id: 'hgf71d', q: 'Jak zapiszesz słowami liczbę 15?', options: ['piętnaście', 'pietnaście', 'pientnaście'], sayOptions: ['przez ę z ogonkiem', 'przez e bez ogonka', 'przez e i n'], answer: 0, explain: '15 – piętnaście, przez ę (jak pięć).' },
        { id: 'b1ctmq', q: 'Jak zapiszesz słowami liczbę 12?', options: ['dwanaście', 'dwanascie', 'dwanaśćie'], sayOptions: ['przez ś z kreską', 'przez s bez kreski', 'przez ś i ć z kreskami'], answer: 0, explain: '12 – dwanaście: ś z kreską, a potem „cie”.' },
      ],
    },
    {
      id: 'czesci-mowy',
      name: 'Rzeczownik, czasownik, przymiotnik',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 5. kształcenie językowe, pkt 4 (rozróżnia rzeczowniki, czasowniki, przymiotniki i stosuje je w poprawnej formie). Liczba pojedyncza i mnoga – w prostych przykładach, jako „poprawna forma” z pkt 4 (decyzja redakcyjna). Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Trzy grupy wyrazów</h3>
        <table>
          <tr><th>Nazwa</th><th>Pytanie</th><th>Przykłady</th></tr>
          <tr><td><b>rzeczownik</b></td><td>kto? co?</td><td>mama, pies, rower, drzewo</td></tr>
          <tr><td><b>czasownik</b></td><td>co robi? co się z nim dzieje?</td><td>biega, czyta, śpi, pada, rośnie</td></tr>
          <tr><td><b>przymiotnik</b></td><td>jaki? jaka? jakie?</td><td>rudy, zielona, czerwone</td></tr>
        </table>
        <h3>Rzeczownik</h3>
        <p>Nazywa ludzi, zwierzęta, rośliny i rzeczy. O ludzi i zwierzęta pytasz <b>kto?</b>, o rzeczy i rośliny – <b>co?</b>.</p>
        <h3>Czasownik</h3>
        <p>Mówi, co ktoś <b>robi</b> (Ola czyta) albo co się <b>dzieje</b> (śnieg pada, kwiat rośnie).</p>
        <h3>Przymiotnik</h3>
        <p>Mówi, <b>jaki</b> jest ktoś lub coś: rudy kot, zielona żaba, czerwone jabłko.</p>
        <h3>Jeden czy wiele?</h3>
        <ul>
          <li><b>liczba pojedyncza</b> – jeden: kot, duży dom, dziecko czyta,</li>
          <li><b>liczba mnoga</b> – wiele: koty, duże domy, dzieci czytają.</li>
        </ul>
        <p class="tip">💡 Zadaj pytanie: kto? co? – rzeczownik, co robi? – czasownik, jaki? – przymiotnik.</p>
      `,
      flashcards: [
        ['Rzeczownik', 'Odpowiada na pytanie kto? co?: mama, kot, rower, róża'],
        ['Czasownik', 'Odpowiada na pytanie co robi? co się z nim dzieje?: biega, czyta, pada, rośnie'],
        ['Przymiotnik', 'Odpowiada na pytanie jaki? jaka? jakie?: duży, zielona, wesołe'],
        ['Pytanie „kto?”', 'O ludzi i zwierzęta: mama, pies'],
        ['Pytanie „co?”', 'O rzeczy i rośliny: rower, drzewo'],
        ['Co się z nim dzieje?', 'Też pytanie o czasownik: śnieg pada, kwiat rośnie'],
        ['Liczba pojedyncza', 'Jeden: kot, piłka, duży dom'],
        ['Liczba mnoga', 'Wiele: koty, piłki, duże domy'],
        ['Mały kot pije mleko.', 'mały – przymiotnik, kot – rzeczownik, pije – czasownik, mleko – rzeczownik'],
      ],
      questions: [
        { id: 'y9l3cc', q: 'Który wyraz to rzeczownik?', options: ['jabłko', 'skacze', 'czerwony'], answer: 0, explain: 'Co? – jabłko. To rzeczownik.' },
        { id: '8wy3q9', q: 'Który wyraz to czasownik?', options: ['czyta', 'książka', 'gruba'], answer: 0, explain: 'Co robi? – czyta. To czasownik.' },
        { id: '3hjzfz', q: 'Który wyraz to przymiotnik?', options: ['wesoły', 'pies', 'biega'], answer: 0, explain: 'Jaki? – wesoły. To przymiotnik.' },
        { id: 'yv0e46', q: 'Na jakie pytanie odpowiada rzeczownik?', options: ['kto? co?', 'co robi?', 'jaki?'], answer: 0, explain: 'Rzeczownik: kto? (mama, pies) co? (rower, drzewo).' },
        { id: 'gtot4h', q: 'Na jakie pytanie odpowiada czasownik?', options: ['co robi?', 'kto? co?', 'jaka?'], answer: 0, explain: 'Czasownik: co robi? co się z nim dzieje? (biega, pada).' },
        { id: 'ez2ybl', q: 'Na jakie pytanie odpowiada przymiotnik?', options: ['jaki? jaka? jakie?', 'kto? co?', 'co robi?'], answer: 0, explain: 'Przymiotnik: jaki? jaka? jakie? (rudy, zielona, wesołe).' },
        { id: '8r813g', q: 'Który wyraz w zdaniu to czasownik?\n„Mały kot pije mleko.”', options: ['pije', 'kot', 'mały'], answer: 0, explain: 'Co robi kot? – pije. To czasownik.' },
        { id: 'b0j8rx', q: 'Który wyraz w zdaniu to przymiotnik?\n„Zielona żaba skacze.”', options: ['zielona', 'żaba', 'skacze'], answer: 0, explain: 'Jaka żaba? – zielona. To przymiotnik.' },
        { id: 'dphtjm', q: 'Który wyraz w zdaniu to rzeczownik?\n„Babcia piecze pyszne ciasto.”', options: ['ciasto', 'piecze', 'pyszne'], answer: 0, explain: 'Co piecze babcia? – ciasto. To rzeczownik (babcia też, ale nie ma jej w odpowiedziach).' },
        { id: 'ds1k9u', q: 'Jaka jest liczba mnoga od wyrazu „lalka”?', options: ['lalki', 'lalce', 'lalką'], answer: 0, explain: 'Jedna lalka – dwie lalki.' },
        { id: 'xvaq32', q: 'Jaka jest liczba mnoga od wyrazu „pies”?', options: ['psy', 'piesek', 'psa'], answer: 0, explain: 'Jeden pies – dwa psy.' },
        { id: 'wpc81t', q: 'Jaka jest liczba pojedyncza od wyrazu „dzieci”?', options: ['dziecko', 'dzieciak', 'dziecięcy'], answer: 0, explain: 'Wiele dzieci – jedno dziecko.' },
        { id: 'mun5gg', q: '„Ola czyta.” Jak powiesz o Oli i Kubie?', options: ['Ola i Kuba czytają.', 'Ola i Kuba czyta.', 'Ola i Kuba czytam.'], answer: 0, explain: 'Gdy osób jest więcej, czasownik też zmienia formę: czyta → czytają.' },
        { id: 'jr31f9', q: 'Prawda czy fałsz?\nWyraz „słodki” to przymiotnik.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Jaki? – słodki.' },
        { id: '8wbuwo', q: 'Prawda czy fałsz?\nWyraz „rower” to czasownik.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Co? – rower. To rzeczownik.' },
        { id: '4teb0m', q: '„Kwiat rośnie.” Wyraz „rośnie” to…', options: ['czasownik', 'rzeczownik', 'przymiotnik'], noShuffle: true, answer: 0, explain: 'Co się dzieje z kwiatem? – rośnie. To czasownik.' },
      ],
    },
    {
      id: 'wyrazy',
      name: 'Wyrazy przeciwne, bliskoznaczne i pokrewne',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 5. kształcenie językowe, pkt 5 (rozpoznaje wyrazy o znaczeniu przeciwnym, wyrazy pokrewne i o znaczeniu bliskoznacznym). Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Wyrazy przeciwne</h3>
        <p>Znaczą coś odwrotnego: duży – mały, dzień – noc, wesoły – smutny, zimny – gorący, otwierać – zamykać.</p>
        <h3>Wyrazy bliskoznaczne</h3>
        <p>Znaczą prawie to samo: auto – samochód, wielki – ogromny, ładny – piękny, wesoły – radosny, szybki – prędki.</p>
        <p>Dzięki nim nie powtarzasz ciągle tego samego słowa.</p>
        <h3>Wyrazy pokrewne (rodzina wyrazów)</h3>
        <p>Mają <b>wspólną część</b> i łączy je <b>znaczenie</b>:</p>
        <ul>
          <li>las – lasek – leśny – leśniczy,</li>
          <li>ryba – rybka – rybak – rybny,</li>
          <li>ogród – ogródek – ogrodnik.</li>
        </ul>
        <p>Uwaga: „lis” i „lista” brzmią podobnie, ale nie są rodziną – nie łączy ich znaczenie.</p>
        <p class="tip">💡 Rodzina wyrazów pomaga w pisowni: stół – stolik, morze – morski.</p>
      `,
      flashcards: [
        ['Wyrazy przeciwne', 'Znaczą coś odwrotnego: duży – mały, dzień – noc'],
        ['Wyrazy bliskoznaczne', 'Znaczą prawie to samo: auto – samochód, wielki – ogromny'],
        ['Wyrazy pokrewne', 'Jedna rodzina: wspólna część i wspólne znaczenie, np. las – leśny'],
        ['Rodzina wyrazu „las”', 'las, lasek, leśny, leśniczy'],
        ['Rodzina wyrazu „ryba”', 'ryba, rybka, rybak, rybny'],
        ['Przeciwny do „wysoki”', 'niski'],
        ['Bliskoznaczny do „wesoły”', 'radosny'],
        ['Pułapka: lis i lista', 'Brzmią podobnie, ale nie są pokrewne – nie łączy ich znaczenie.'],
        ['Po co rodzina wyrazów?', 'Pomaga w pisowni: stół – stolik, morze – morski'],
      ],
      questions: [
        { id: 'jyktxz', q: 'Który wyraz jest przeciwny do „duży”?', options: ['mały', 'wielki', 'gruby'], answer: 0, explain: 'Duży – mały. „Wielki” znaczy prawie to samo co „duży”.' },
        { id: 'xrv6f5', q: 'Który wyraz jest przeciwny do „dzień”?', options: ['noc', 'słońce', 'tydzień'], answer: 0, explain: 'Dzień – noc.' },
        { id: 'kn4kso', q: 'Który wyraz jest przeciwny do „wesoły”?', options: ['smutny', 'radosny', 'miły'], answer: 0, explain: 'Wesoły – smutny. „Radosny” znaczy prawie to samo co „wesoły”.' },
        { id: 'g2cghp', q: 'Który wyraz jest przeciwny do „otwierać”?', options: ['zamykać', 'wchodzić', 'pukać'], answer: 0, explain: 'Otwierać – zamykać.' },
        { id: 'b2rpt0', q: 'Który wyraz jest przeciwny do „zimny”?', options: ['gorący', 'chłodny', 'mokry'], answer: 0, explain: 'Zimny – gorący. „Chłodny” znaczy prawie to samo co „zimny”.' },
        { id: 'u9x25d', q: 'Który wyraz znaczy prawie to samo co „samochód”?', options: ['auto', 'rower', 'droga'], answer: 0, explain: 'Samochód – auto: to wyrazy bliskoznaczne.' },
        { id: 'aofiww', q: 'Który wyraz znaczy prawie to samo co „wielki”?', options: ['ogromny', 'mały', 'niski'], answer: 0, explain: 'Wielki – ogromny: to wyrazy bliskoznaczne.' },
        { id: 'aye5g4', q: 'Który wyraz znaczy prawie to samo co „piękny”?', options: ['ładny', 'brzydki', 'stary'], answer: 0, explain: 'Piękny – ładny: to wyrazy bliskoznaczne. „Brzydki” to wyraz przeciwny.' },
        { id: '77iim4', q: 'Który wyraz znaczy prawie to samo co „szybki”?', options: ['prędki', 'wolny', 'leniwy'], answer: 0, explain: 'Szybki – prędki: to wyrazy bliskoznaczne.' },
        { id: 'b59y7z', q: 'Który wyraz jest pokrewny z wyrazem „las”?', options: ['leśniczy', 'lis', 'lato'], answer: 0, explain: 'Las – leśniczy: wspólna część i wspólne znaczenie (leśniczy dba o las).' },
        { id: 'rcgb6p', q: 'Który wyraz NIE należy do rodziny wyrazu „szkoła”?', options: ['uczeń', 'szkolny', 'szkółka'], answer: 0, explain: '„Uczeń” wiąże się ze szkołą znaczeniem, ale nie ma z nią wspólnej części. „Szkolny” i „szkółka” to rodzina.' },
        { id: 'r7nrzy', q: 'Która grupa to rodzina wyrazów?', options: ['ryba, rybak, rybny', 'ryba, rak, rzeka', 'ryba, ryk, rysunek'], answer: 0, explain: 'Ryba, rybak, rybny – wspólna część „ryb” i wspólne znaczenie.' },
        { id: 'e2kuwq', q: 'Który wyraz jest z rodziny wyrazu „ogród”?', options: ['ogrodnik', 'ogon', 'grad'], answer: 0, explain: 'Ogród – ogrodnik: ogrodnik pracuje w ogrodzie.' },
        { id: 'bnflvu', q: 'Prawda czy fałsz?\n„Kot” i „kotek” to wyrazy pokrewne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Mają wspólną część i to samo znaczenie – kotek to mały kot.' },
        { id: 'mh16da', q: 'Prawda czy fałsz?\n„Lis” i „lista” to wyrazy pokrewne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Brzmią podobnie, ale nie łączy ich znaczenie.' },
        { id: 'c0qagz', q: 'Prawda czy fałsz?\n„Duży” i „wielki” to wyrazy przeciwne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. „Duży” i „wielki” znaczą prawie to samo – to wyrazy bliskoznaczne.' },
      ],
    },
    {
      id: 'teksty',
      name: 'Wiersz, opowiadanie, list i zaproszenie',
      basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna: 5. kształcenie językowe, pkt 7 (odróżnia utwory wierszowane od pisanych prozą; rozpoznaje notatkę, zagadkę, list, życzenia, podziękowanie, ogłoszenie, opowiadanie, opis); 3. czytanie, pkt 3 (postacie i zdarzenia, kolejność zdarzeń, postacie główne i drugorzędne) i pkt 6 (dialog, opowiadanie, opis); 4. pisanie, pkt 2 (opowiadanie, opis), pkt 3 (notatka, życzenie, ogłoszenie, zaproszenie, podziękowanie, list; adres nadawcy i odbiorcy) i pkt 9 (kolejność zdarzeń, plan wypowiedzi). Wers, zwrotka i rym – pomoc do pkt 5.7 (decyzja redakcyjna). Wszystkie przykładowe teksty i wiersz napisano do ćwiczeń. Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.',
      theory: `
        <h3>Wiersz i proza</h3>
        <p><b>Wiersz</b> ma linijki – to <b>wersy</b>. Wersy łączą się w <b>zwrotki</b>. Na końcu wersów często są <b>rymy</b> (kot – płot).</p>
        <p><b>Proza</b> to tekst pisany zwykłymi zdaniami, np. opowiadanie, list.</p>
        <p><i>Kot i słonko</i> (wiersz napisany do ćwiczeń):</p>
        <p>Rano słonko wstało,<br>w okno nam zajrzało.<br>Zbudził się nasz kot<br>i wyskoczył przez płot.</p>
        <p>Pobiegł prosto w las,<br>bo to już zabawy czas.<br>Biegał cały dzień po lesie,<br>aż go wiatr do domu niesie.</p>
        <p>Ten wiersz ma 2 zwrotki po 4 wersy. Rymy: wstało – zajrzało, kot – płot, las – czas, lesie – niesie.</p>
        <h3>Opowiadanie</h3>
        <ul>
          <li><b>początek</b> – kto? gdzie? kiedy?</li>
          <li><b>rozwinięcie</b> – co się wydarzyło? (po kolei)</li>
          <li><b>zakończenie</b> – jak się skończyło?</li>
        </ul>
        <p>Przed pisaniem ułóż <b>plan</b> – zdarzenia po kolei. <b>Postać główna</b> to ta, o której jest najwięcej. Inne to postacie <b>drugoplanowe</b>.</p>
        <p><b>Dialog</b> to rozmowa postaci. <b>Opis</b> mówi, jak ktoś lub coś wygląda.</p>
        <h3>Krótkie teksty</h3>
        <table>
          <tr><th>Tekst</th><th>Co w nim jest?</th></tr>
          <tr><td><b>zaproszenie</b></td><td>kto zaprasza, kogo, na co, gdzie, kiedy</td></tr>
          <tr><td><b>życzenia</b></td><td>z jakiej okazji, czego życzysz, podpis</td></tr>
          <tr><td><b>podziękowanie</b></td><td>komu i za co dziękujesz, podpis</td></tr>
          <tr><td><b>ogłoszenie</b></td><td>co się stało lub będzie, gdzie, kiedy, kontakt</td></tr>
          <tr><td><b>notatka</b></td><td>krótka, ważna informacja</td></tr>
          <tr><td><b>zagadka</b></td><td>opis czegoś bez nazwy – trzeba zgadnąć</td></tr>
        </table>
        <h3>List</h3>
        <ol>
          <li>miejscowość i data (u góry po prawej),</li>
          <li>zwrot do adresata: Droga Babciu!</li>
          <li>treść,</li>
          <li>pozdrowienia,</li>
          <li>podpis.</li>
        </ol>
        <h3>Adres na kopercie</h3>
        <p>Imię i nazwisko · ulica i numer domu · kod pocztowy i miejscowość, np.:</p>
        <p>Ola Nowak<br>ul. Lipowa 3<br>12-345 Słoneczkowo</p>
        <p class="tip">💡 Adres <b>adresata</b> (do kogo) piszesz na dole po prawej, adres <b>nadawcy</b> (od kogo) – u góry po lewej.</p>
      `,
      flashcards: [
        ['Wiersz', 'Tekst w wersach, często ze zwrotkami i rymami'],
        ['Proza', 'Tekst pisany zwykłymi zdaniami, np. opowiadanie'],
        ['Wers', 'Jedna linijka wiersza'],
        ['Zwrotka', 'Kilka wersów razem, oddzielonych odstępem'],
        ['Rym', 'Podobne brzmienie końcówek wyrazów: kot – płot'],
        ['Opowiadanie', 'Początek, rozwinięcie, zakończenie. Zdarzenia po kolei.'],
        ['Dialog i opis', 'Dialog – rozmowa postaci. Opis – jak ktoś lub coś wygląda.'],
        ['Zaproszenie', 'Kto zaprasza? Kogo? Na co? Gdzie? Kiedy?'],
        ['List', 'Miejscowość i data, zwrot do adresata, treść, pozdrowienia, podpis'],
        ['Adres na kopercie', 'Imię i nazwisko, ulica i numer, kod pocztowy i miejscowość. Adresat – na dole po prawej.'],
      ],
      questions: [
        { id: '3cljs2', q: 'Tekst z wersami i zwrotkami to…', options: ['wiersz', 'list', 'ogłoszenie'], answer: 0, explain: 'Wersy i zwrotki ma wiersz.' },
        { id: '8vxdrk', q: 'Jak nazywamy jedną linijkę wiersza?', options: ['wers', 'zwrotka', 'rym'], answer: 0, explain: 'Jedna linijka wiersza to wers. Kilka wersów razem to zwrotka.' },
        { id: 'ie0g69', q: 'Które wyrazy się rymują?', options: ['kot – płot', 'kot – pies', 'kot – dom'], answer: 0, explain: 'Kot – płot: końcówki brzmią podobnie, to rym.' },
        { id: '036nfq', q: 'Prawda czy fałsz?\nProza to tekst pisany zwykłymi zdaniami, bez wersów i zwrotek.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Prozą pisze się np. opowiadania i listy.' },
        { id: 'z25324', q: 'Opowiadanie ma trzy części. Która jest w środku?', options: ['rozwinięcie', 'zakończenie', 'tytuł'], answer: 0, explain: 'Początek → rozwinięcie → zakończenie.' },
        { id: '4ofg21', q: 'Kim jest postać główna w opowiadaniu?', options: ['tą, o której jest najwięcej', 'każdą osobą, która coś powie', 'autorem książki'], answer: 0, explain: 'Postać główna jest najważniejsza – tekst opowiada najwięcej o niej. Inne postacie są drugoplanowe.' },
        { id: 'eu4xj0', q: 'Rozmowa postaci zapisana w tekście to…', options: ['dialog', 'opis', 'zagadka'], answer: 0, explain: 'Dialog to rozmowa postaci.' },
        { id: '718dxw', q: '„Mój kot jest rudy, ma długi ogon i zielone oczy.” To…', options: ['opis', 'dialog', 'zaproszenie'], answer: 0, explain: 'Tekst mówi, jak wygląda kot – to opis.' },
        { id: 'uxitz0', q: 'Co musi być w zaproszeniu?', options: ['kto zaprasza, kogo, na co, gdzie i kiedy', 'tylko rysunek', 'przepis na ciasto'], answer: 0, explain: 'Zaproszenie odpowiada na pytania: kto? kogo? na co? gdzie? kiedy?' },
        { id: 'cf0q9k', q: '„Zapraszam cię na moje urodziny w sobotę o 15.00. Kasia”\nCzego brakuje w tym zaproszeniu?', options: ['gdzie będą urodziny', 'kto zaprasza', 'kiedy będą urodziny'], answer: 0, explain: 'Jest kto (Kasia), kogo (cię), na co (urodziny) i kiedy (sobota, 15.00). Brakuje, gdzie.' },
        { id: '885r6o', q: 'Gdzie w liście piszesz miejscowość i datę?', options: ['na górze, po prawej stronie', 'na dole, po lewej stronie', 'w środku treści'], answer: 0, explain: 'Miejscowość i datę piszesz na górze, po prawej stronie.' },
        { id: 'yx59lj', q: 'Co piszesz w adresie na kopercie?', options: ['imię i nazwisko, ulicę i numer, kod pocztowy i miejscowość', 'tylko imię', 'datę i godzinę'], answer: 0, explain: 'Adres: imię i nazwisko, ulica i numer domu, kod pocztowy i miejscowość.' },
        {
          id: 'dy2uyi', q: 'Gdzie na kopercie piszesz adres adresata (osoby, do której wysyłasz list)?', options: ['w polu A', 'w polu B'], noShuffle: true, answer: 1,
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Koperta. Pole A u góry po lewej, pole B na dole po prawej, znaczek w prawym górnym rogu">
            <rect x="10" y="10" width="380" height="210" rx="8" class="bg ln sw"/>
            <rect x="25" y="25" width="170" height="70" rx="8" class="f1 s1"/>
            <rect x="200" y="130" width="175" height="75" rx="8" class="f3 s3"/>
            <rect x="330" y="25" width="45" height="52" rx="4" class="f4 s4 dash"/>
            <text x="44" y="68" class="tx-b" text-anchor="middle">A</text>
            <text x="219" y="175" class="tx-b" text-anchor="middle">B</text>
            <g class="ln-thin">
              <line x1="62" y1="45" x2="180" y2="45"/><line x1="62" y1="60" x2="180" y2="60"/><line x1="62" y1="75" x2="180" y2="75"/>
              <line x1="238" y1="150" x2="362" y2="150"/><line x1="238" y1="168" x2="362" y2="168"/><line x1="238" y1="186" x2="362" y2="186"/>
            </g>
            <text x="352" y="58" class="tx" text-anchor="middle">✉️</text>
          </svg>`,
          explain: 'Adres adresata piszesz na dole po prawej (pole B). U góry po lewej (pole A) piszesz adres nadawcy – swój.',
        },
        { id: '2ayl8s', q: '„Zielona, w stawie mieszka, skacze i kumka.” To…', options: ['zagadka', 'zaproszenie', 'list'], answer: 0, explain: 'Tekst opisuje coś, ale nie mówi, co to jest – to zagadka (odpowiedź: żaba).' },
        { id: 'tevhpc', q: '„Kochana Babciu! Z okazji Twojego święta życzę Ci zdrowia i uśmiechu. Ola” To…', options: ['życzenia', 'ogłoszenie', 'zagadka'], answer: 0, explain: 'Jest okazja, życzenia i podpis – to życzenia.' },
        { id: 'irkq8q', q: '„Zgubiłem czerwoną czapkę na boisku. Proszę o oddanie jej do sali 12. Kuba z klasy 3b” To…', options: ['ogłoszenie', 'życzenia', 'wiersz'], answer: 0, explain: 'Tekst jest dla wielu osób i podaje informację z kontaktem – to ogłoszenie.' },
      ],
    },
  ],
});
