/* Język angielski – klasa 3 (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – X. Edukacja językowa. Język obcy nowożytny).
 * Podstawa podaje osiągnięcia na koniec klasy 3 i 13 tematów (X.1) – bez listy słówek i bez gramatyki.
 * Wybór słów i zwrotów to decyzja redakcyjna (bardzo podstawowy zasób, angielski brytyjski). */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), X. Edukacja językowa – język obcy nowożytny';
  const WYBOR = ' Podstawa nie podaje listy słów – wybór słów i zwrotów (angielski brytyjski) to decyzja redakcyjna. Osiągnięcia na koniec klasy 3, bez podziału na klasy I–III.';

  // Tekst z fragmentami po angielsku w {klamrach}: pokazujemy go bez klamer,
  // a przy czytaniu na głos fragmenty w klamrach czyta głos angielski (pola say i sayExplain).
  const show = (t) => t.replace(/[{}]/g, '');
  const read = (t) => t.split(/(\{[^}]*\})/).filter(Boolean).map((p) => (p[0] === '{' ? [p.slice(1, -1), 'en'] : p));
  // Q(id, pytanie, odpowiedzi, nr dobrej, wyjaśnienie, dodatkowe pola) – odpowiedzi po angielsku: { optLang: 'en' }
  function Q(id, q, options, answer, explain, extra = {}) {
    const o = { id, q: show(q), options, answer, explain: show(explain), ...extra };
    if (q.includes('{')) o.say = read(q);
    if (explain.includes('{')) o.sayExplain = read(explain);
    return o;
  }
  const EN = { optLang: 'en' };
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];
  const en = (t) => `<b lang="en">${t}</b>`;
  const ei = (t) => `<i lang="en">${t}</i>`;
  // wiersze tabeli: [angielski, polski]
  const rows = (list) => list.map(([a, b]) => `<tr><td>${en(a)}</td><td>${b}</td></tr>`).join('');
  const table = (list) => `<table><tr><th>po angielsku</th><th>po polsku</th></tr>${rows(list)}</table>`;

  window.SUBJECTS.push({
    id: 'angielski',
    name: 'Język angielski',
    icon: '🇬🇧',
    color: '#2f9e6e',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'hello',
        name: 'Hello! Powitania, ja i liczby',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. tematy 1 (ja i moi bliscy), 11 (moje samopoczucie); 6.2 (przedstawia siebie – jak się nazywa, ile ma lat, skąd pochodzi), 6.3 (pytania i odpowiedzi w ramach wyuczonych zwrotów), 6.4 (wita się i żegna, dziękuje, prosi, przeprasza); liczby 1–20 – do mówienia o wieku.${WYBOR}`,
        theory: `
          <h3>Powitanie i pożegnanie</h3>
          <ul>
            <li>${en('Hello!')} / ${en('Hi!')} – Cześć! Dzień dobry!</li>
            <li>${en('Good morning!')} – Dzień dobry! (rano)</li>
            <li>${en('Goodbye!')} / ${en('Bye!')} – Do widzenia! Pa!</li>
            <li>${en('Good night!')} – Dobranoc! (wieczorem, przed snem)</li>
          </ul>
          <h3>Kim jesteś?</h3>
          <ul>
            <li>${en('What’s your name?')} – Jak masz na imię? → ${ei('My name is Ola.')}</li>
            <li>${en('How old are you?')} – Ile masz lat? → ${ei('I’m eight.')} (Mam 8 lat.)</li>
            <li>${en('Where are you from?')} – Skąd jesteś? → ${ei('I’m from Poland.')}</li>
            <li>${en('How are you?')} – Jak się masz? → ${ei('I’m fine, thank you.')}</li>
          </ul>
          <h3>Jak się czujesz?</h3>
          <p>${en('I’m happy.')} 😀 Jestem wesoły. · ${en('I’m sad.')} 😢 Jestem smutny. · ${en('I’m tired.')} 😴 Jestem zmęczony. · ${en('I’m hungry.')} 🍽️ Jestem głodny.</p>
          <h3>Magiczne słowa</h3>
          <p>${en('please')} – proszę · ${en('thank you')} – dziękuję · ${en('sorry')} – przepraszam</p>
          <h3>Liczby 1–20</h3>
          <table>
            <tr><td>1 ${ei('one')}</td><td>2 ${ei('two')}</td><td>3 ${ei('three')}</td><td>4 ${ei('four')}</td><td>5 ${ei('five')}</td></tr>
            <tr><td>6 ${ei('six')}</td><td>7 ${ei('seven')}</td><td>8 ${ei('eight')}</td><td>9 ${ei('nine')}</td><td>10 ${ei('ten')}</td></tr>
            <tr><td>11 ${ei('eleven')}</td><td>12 ${ei('twelve')}</td><td>13 ${ei('thirteen')}</td><td>14 ${ei('fourteen')}</td><td>15 ${ei('fifteen')}</td></tr>
            <tr><td>16 ${ei('sixteen')}</td><td>17 ${ei('seventeen')}</td><td>18 ${ei('eighteen')}</td><td>19 ${ei('nineteen')}</td><td>20 ${ei('twenty')}</td></tr>
          </table>
          <p class="tip">Od 13 do 19 liczby kończą się na <b lang="en">-teen</b>: ${ei('fourteen')} – 14.</p>`,
        flashcards: [
          ['Hello!', 'Cześć! Dzień dobry!'],
          ['Good morning!', 'Dzień dobry! (rano)'],
          ['Goodbye!', 'Do widzenia!'],
          ['Good night!', 'Dobranoc!'],
          ['What’s your name?', 'Jak masz na imię?'],
          ['How old are you?', 'Ile masz lat?'],
          ['I’m from Poland.', 'Jestem z Polski.'],
          ['thank you', 'dziękuję'],
          ['please', 'proszę'],
          ['sorry', 'przepraszam'],
          ['happy', 'wesoły 😀'],
          ['sad', 'smutny 😢'],
          ['tired', 'zmęczony 😴'],
          ['eight', '8'],
          ['twelve', '12'],
          ['twenty', '20'],
        ],
        questions: [
          Q('2lq2vc', 'Rano wchodzisz do klasy. Co powiesz?', ['Good morning!', 'Good night!', 'Goodbye!'], 0, '{Good morning!} to „dzień dobry” rano. {Good night!} mówisz przed snem.', EN),
          Q('bqfmay', 'Wychodzisz ze szkoły do domu. Co powiesz?', ['Goodbye!', 'Hello!', 'Good morning!'], 0, '{Goodbye!} to „do widzenia”.', EN),
          Q('t0y18i', 'Kolega pyta: {What’s your name?} Co odpowiesz?', ['My name is Kuba.', 'I’m eight.', 'I’m fine.'], 0, '{What’s your name?} to pytanie o imię. Odpowiadasz: {My name is…}', EN),
          Q('37jj08', 'O co pyta kolega: {How old are you?}', ['Ile masz lat?', 'Jak masz na imię?', 'Skąd jesteś?'], 0, '{How old} – ile lat. Odpowiadasz np. {I’m eight.}'),
          Q('csepyv', 'Jak powiesz, że masz 8 lat?', ['I’m eight.', 'I’m eighteen.', 'I’m fine.'], 0, '{eight} to 8, a {eighteen} to 18.', EN),
          Q('6y3mr3', 'Co znaczy {thank you}?', ['dziękuję', 'proszę', 'przepraszam'], 0, '{Thank you} – dziękuję. {Please} – proszę.'),
          Q('rs3ajf', 'Niechcący potrąciłeś kolegę. Co powiesz?', ['Sorry!', 'Thank you!', 'Hello!'], 0, '{Sorry} znaczy „przepraszam”.', EN),
          Q('53e24n', 'Co znaczy {I’m happy}?', ['Jestem wesoły.', 'Jestem smutny.', 'Jestem zmęczony.'], 0, '{happy} – wesoły, szczęśliwy 😀'),
          Q('f7j2u0', 'Jak po angielsku jest „smutny”?', ['sad', 'happy', 'tired'], 0, '{sad} – smutny 😢. {tired} – zmęczony.', EN),
          Q('bqxz3d', 'Jaka to liczba: {seven}?', ['7', '6', '9'], 0, '{seven} to 7.'),
          Q('1wps6u', 'Jak po angielsku jest 12?', ['twelve', 'twenty', 'two'], 0, '12 to {twelve}. {twenty} to 20, a {two} to 2.', EN),
          Q('a6kk9q', 'Ile to jest {three} i {two}?', ['five', 'four', 'six'], 0, '3 + 2 = 5, czyli {five}.', EN),
          Q('d0fcrf', 'Ktoś pyta: {Where are you from?} Co odpowiesz?', ['I’m from Poland.', 'I’m ten.', 'My name is Ola.'], 0, '{Where are you from?} – skąd jesteś? {I’m from Poland} – jestem z Polski.', EN),
          Q('vgpnx5', 'Prawda czy fałsz?\n{Good night!} mówimy na powitanie rano.', TF, 1, '{Good night!} to „dobranoc” – mówisz wieczorem, przed snem.', PF),
          Q('9ihujf', 'Która liczba to {fifteen}?', ['15', '50', '5'], 0, 'Końcówka {-teen} to liczby od 13 do 19. {fifteen} – 15.'),
          Q('nyw1dk', 'Babcia pyta: {How are you?} Co odpowiesz?', ['I’m fine, thank you.', 'I’m from Poland.', 'Goodbye!'], 0, '{How are you?} – jak się masz? {I’m fine} – dobrze.', EN),
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'szkola',
        name: 'Moja szkoła i kolory',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. temat 3 (moja szkoła); 2.1 i 6.1 (reaguje na polecenia); 4.2 (nazywa obiekty z otoczenia i opisuje je); 7 (nazywa przedmioty z najbliższego otoczenia).${WYBOR}`,
        theory: `
          <h3>W tornistrze</h3>
          ${table([['a pencil', 'ołówek ✏️'], ['a pen', 'długopis 🖊️'], ['a book', 'książka 📕'], ['a rubber', 'gumka'], ['a ruler', 'linijka 📏'], ['a crayon', 'kredka 🖍️'], ['a pencil case', 'piórnik'], ['a schoolbag', 'tornister 🎒']])}
          <h3>W klasie</h3>
          <p>${en('a desk')} – ławka · ${en('a chair')} – krzesło 🪑 · ${en('a teacher')} – nauczyciel, nauczycielka</p>
          <h3>Kolory</h3>
          <p>${en('red')} 🟥 czerwony · ${en('blue')} 🟦 niebieski · ${en('green')} 🟩 zielony · ${en('yellow')} 🟨 żółty · ${en('orange')} 🟧 pomarańczowy · ${en('pink')} różowy · ${en('purple')} 🟪 fioletowy · ${en('brown')} 🟫 brązowy · ${en('black')} ⬛ czarny · ${en('white')} ⬜ biały</p>
          <h3>Pytamy i odpowiadamy</h3>
          <ul>
            <li>${en('What’s this?')} – Co to jest? → ${ei('It’s a pencil.')} – To jest ołówek.</li>
            <li>${en('What colour is it?')} – Jakiego to jest koloru? → ${ei('It’s red.')} – Jest czerwony.</li>
          </ul>
          <h3>Polecenia pani</h3>
          <p>${en('Stand up!')} – Wstań! · ${en('Sit down!')} – Usiądź! · ${en('Open your book!')} – Otwórz książkę! · ${en('Close your book!')} – Zamknij książkę! · ${en('Listen!')} – Słuchaj! · ${en('Look!')} – Popatrz!</p>`,
        flashcards: [
          ['a pencil', 'ołówek ✏️'],
          ['a pen', 'długopis'],
          ['a book', 'książka'],
          ['a rubber', 'gumka'],
          ['a ruler', 'linijka'],
          ['a pencil case', 'piórnik'],
          ['a schoolbag', 'tornister 🎒'],
          ['a chair', 'krzesło'],
          ['red', 'czerwony'],
          ['blue', 'niebieski'],
          ['green', 'zielony'],
          ['yellow', 'żółty'],
          ['What colour is it?', 'Jakiego to jest koloru?'],
          ['Stand up!', 'Wstań!'],
          ['Sit down!', 'Usiądź!'],
          ['Listen!', 'Słuchaj!'],
        ],
        questions: [
          Q('gyl1kz', 'Co znaczy {a pencil}?', ['ołówek', 'długopis', 'linijka'], 0, '{a pencil} – ołówek ✏️. {a pen} – długopis.'),
          Q('3c4v09', 'Jak po angielsku jest „książka”?', ['a book', 'a pen', 'a desk'], 0, '📕 {a book} – książka.', EN),
          Q('ufdfz2', 'Co to jest? 📏', ['a ruler', 'a rubber', 'a chair'], 0, '📏 to linijka – {a ruler}. {a rubber} to gumka.', { ...EN, say: 'Co to jest? Na obrazku jest linijka. Jak to powiesz po angielsku?' }),
          Q('gjhq48', 'Jaki to kolor? 🟥', ['red', 'blue', 'green'], 0, 'Czerwony to {red}.', { ...EN, say: 'Jaki to kolor? Na obrazku jest czerwony kwadrat. Jak to powiesz po angielsku?' }),
          Q('0z726s', 'Co znaczy {green}?', ['zielony', 'żółty', 'niebieski'], 0, '{green} – zielony 🟩. {yellow} – żółty, {blue} – niebieski.'),
          Q('mxfjss', 'Pani mówi: {Stand up!} Co robisz?', ['Wstaję.', 'Siadam.', 'Otwieram książkę.'], 0, '{Stand up!} – wstań!'),
          Q('7p372e', 'Pani mówi: {Sit down!} Co robisz?', ['Siadam.', 'Wstaję.', 'Słucham.'], 0, '{Sit down!} – usiądź!'),
          Q('bvd9im', 'Pani mówi: {Open your book!} Co robisz?', ['Otwieram książkę.', 'Zamykam książkę.', 'Patrzę na tablicę.'], 0, '{Open} – otwórz. {Close} – zamknij.'),
          Q('0g8j56', 'Pani mówi: {Listen!} Co robisz?', ['Słucham.', 'Patrzę.', 'Wstaję.'], 0, '{Listen!} – słuchaj! 👂 {Look!} – popatrz! 👀'),
          Q('5ytxah', 'Jak po angielsku jest „gumka”?', ['a rubber', 'a ruler', 'a pencil case'], 0, 'Gumka to {a rubber}. {a ruler} – linijka, {a pencil case} – piórnik.', EN),
          Q('hceluv', 'O co pytamy: {What colour is it?}', ['Jakiego to jest koloru?', 'Co to jest?', 'Ile to jest?'], 0, '{colour} – kolor. Odpowiedź np. {It’s blue.}'),
          Q('z0j1vm', '{What’s this?} – {It’s a chair.} Co to jest?', ['krzesło', 'ławka', 'kredka'], 0, '{a chair} – krzesło 🪑. {a desk} – ławka.'),
          Q('tf76gs', 'Jak po angielsku jest „czarny”?', ['black', 'brown', 'blue'], 0, 'Czarny to {black}. {brown} – brązowy, {blue} – niebieski.', EN),
          Q('hxej5b', 'Prawda czy fałsz?\n{A schoolbag} to tornister.', TF, 0, 'Tak! 🎒 {a schoolbag} – tornister.', PF),
          Q('ibplwf', 'Jaki to kolor? 🟨', ['yellow', 'orange', 'white'], 0, 'Żółty to {yellow}.', { ...EN, say: 'Jaki to kolor? Na obrazku jest żółty kwadrat. Jak to powiesz po angielsku?' }),
          Q('cibhz3', 'Co znaczy {a crayon}?', ['kredka', 'gumka', 'tornister'], 0, '🖍️ {a crayon} – kredka.'),
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'rodzina',
        name: 'Rodzina i mój dom',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. tematy 1 (ja i moi bliscy – rodzina, przyjaciele) i 2 (moje miejsce zamieszkania – mój dom); 6.2 (przedstawia inne osoby); 7 (nazywa osoby i przedmioty z najbliższego otoczenia).${WYBOR}`,
        theory: `
          <h3>Moja rodzina – <span lang="en">my family</span></h3>
          ${table([['mum', 'mama'], ['dad', 'tata'], ['sister', 'siostra'], ['brother', 'brat'], ['grandma', 'babcia'], ['grandpa', 'dziadek'], ['baby', 'niemowlę, maluszek'], ['friend', 'przyjaciel, kolega']])}
          <p>Przedstawiasz kogoś: ${ei('This is my mum.')} – To jest moja mama.</p>
          <p class="tip">Słowo ${ei('my')} znaczy „mój”, „moja” i „moje” – zawsze tak samo: ${ei('my dad')}, ${ei('my sister')}.</p>
          <h3>Mój dom – <span lang="en">my house</span></h3>
          ${table([['a house', 'dom'], ['a flat', 'mieszkanie'], ['a kitchen', 'kuchnia'], ['a bedroom', 'sypialnia'], ['a bathroom', 'łazienka'], ['a living room', 'pokój dzienny'], ['a garden', 'ogród']])}
          <p>${en('a door')} – drzwi 🚪 · ${en('a window')} – okno 🪟 · ${en('a bed')} – łóżko 🛏️ · ${en('a table')} – stół</p>
          <p>${ei('I live in a flat.')} – Mieszkam w mieszkaniu. · ${ei('I live in Gdańsk.')} – Mieszkam w Gdańsku.</p>`,
        flashcards: [
          ['mum', 'mama'],
          ['dad', 'tata'],
          ['sister', 'siostra'],
          ['brother', 'brat'],
          ['grandma', 'babcia'],
          ['grandpa', 'dziadek'],
          ['friend', 'przyjaciel, kolega'],
          ['This is my mum.', 'To jest moja mama.'],
          ['a house', 'dom'],
          ['a kitchen', 'kuchnia'],
          ['a bedroom', 'sypialnia'],
          ['a bathroom', 'łazienka'],
          ['a window', 'okno'],
          ['a bed', 'łóżko'],
        ],
        questions: [
          Q('218xub', 'Co znaczy {brother}?', ['brat', 'siostra', 'tata'], 0, '{brother} – brat, {sister} – siostra.'),
          Q('zlrn1y', 'Jak po angielsku jest „babcia”?', ['grandma', 'grandpa', 'mum'], 0, 'Babcia to {grandma}, a dziadek – {grandpa}.', EN),
          Q('4sxsx0', 'Jak przedstawisz tatę?', ['This is my dad.', 'This is my mum.', 'I’m from Poland.'], 0, '{This is my dad} – to jest mój tata.', EN),
          Q('3k6uw5', 'Co znaczy {This is my sister}?', ['To jest moja siostra.', 'To jest mój brat.', 'Mam siostrę i brata.'], 0, '{This is} – to jest, {my sister} – moja siostra.'),
          Q('xrs2ul', 'Jak po angielsku jest „przyjaciel”?', ['friend', 'family', 'father'], 0, '{friend} – przyjaciel, kolega. {family} – rodzina.', EN),
          Q('1jp3e5', 'Gdzie gotujemy obiad?', ['in the kitchen', 'in the bathroom', 'in the bedroom'], 0, '{kitchen} – kuchnia 🍳.', EN),
          Q('p7yfxp', 'Gdzie myjesz zęby?', ['in the bathroom', 'in the kitchen', 'in the garden'], 0, '{bathroom} – łazienka 🛁. Tam myjesz zęby.', EN),
          Q('t7mmey', 'Co znaczy {a bedroom}?', ['sypialnia', 'kuchnia', 'ogród'], 0, '{bed} to łóżko, a {bedroom} – pokój z łóżkiem, czyli sypialnia.'),
          Q('krfwey', 'Co to jest? 🪟', ['a window', 'a door', 'a table'], 0, '🪟 to okno – {a window}. {a door} – drzwi.', { ...EN, say: 'Co to jest? Na obrazku jest okno. Jak to powiesz po angielsku?' }),
          Q('1q6dd5', 'Co znaczy {I live in a house}?', ['Mieszkam w domu.', 'Mieszkam w mieszkaniu.', 'Lubię mój dom.'], 0, '{I live} – mieszkam, {a house} – dom. Mieszkanie to {a flat}.'),
          Q('0k175e', 'Jak po angielsku jest „ogród”?', ['a garden', 'a kitchen', 'a flat'], 0, 'Ogród to {a garden} 🌷.', EN),
          Q('12ggns', 'Prawda czy fałsz?\n{Mum} to mama.', TF, 0, 'Tak! {mum} – mama, {dad} – tata.', PF),
          Q('jl808h', 'Prawda czy fałsz?\n{Grandpa} to babcia.', TF, 1, '{grandpa} to dziadek. Babcia to {grandma}.', PF),
          Q('plb7bv', 'Co to jest? 🛏️', ['a bed', 'a chair', 'a door'], 0, '🛏️ to łóżko – {a bed}.', { ...EN, say: 'Co to jest? Na obrazku jest łóżko. Jak to powiesz po angielsku?' }),
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'jedzenie',
        name: 'Jedzenie i sklep',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. tematy 6 (jedzenie) i 7 (sklep); 6.3 (pytania i odpowiedzi w ramach wyuczonych zwrotów), 6.4 (prosi, dziękuje), 6.5 (wyraża swoje upodobania – I like / I don’t like).${WYBOR}`,
        theory: `
          <h3>Owoce i inne jedzenie</h3>
          ${table([['an apple', 'jabłko 🍎'], ['a banana', 'banan 🍌'], ['an orange', 'pomarańcza 🍊'], ['bread', 'chleb 🍞'], ['cheese', 'ser 🧀'], ['an egg', 'jajko 🥚'], ['a sandwich', 'kanapka 🥪'], ['ice cream', 'lody 🍦'], ['a cake', 'ciasto, tort 🎂'], ['chocolate', 'czekolada 🍫']])}
          <p class="tip">Przed słowem, które zaczyna się od samogłoski (a, e, i, o, u), mówimy <b lang="en">an</b>: ${ei('an apple')}, ${ei('an egg')}, ${ei('an orange')}.</p>
          <h3>Do picia</h3>
          <p>${en('milk')} – mleko 🥛 · ${en('water')} – woda 💧 · ${en('juice')} – sok 🧃 · ${en('tea')} – herbata</p>
          <h3>Lubię – nie lubię</h3>
          <ul>
            <li>${ei('I like apples.')} 👍 – Lubię jabłka.</li>
            <li>${ei('I don’t like milk.')} 👎 – Nie lubię mleka.</li>
            <li>${en('Do you like bananas?')} – Czy lubisz banany? → ${ei('Yes, I do.')} / ${ei('No, I don’t.')}</li>
          </ul>
          <h3>W sklepie – <span lang="en">in the shop</span></h3>
          <ul>
            <li>${en('Can I have an apple, please?')} – Czy mogę prosić jabłko?</li>
            <li>${en('Here you are.')} – Proszę bardzo. (gdy coś podajesz)</li>
            <li>${en('Thank you!')} – Dziękuję!</li>
          </ul>`,
        flashcards: [
          ['an apple', 'jabłko 🍎'],
          ['a banana', 'banan 🍌'],
          ['an orange', 'pomarańcza 🍊'],
          ['bread', 'chleb'],
          ['cheese', 'ser'],
          ['an egg', 'jajko'],
          ['milk', 'mleko'],
          ['water', 'woda'],
          ['juice', 'sok'],
          ['ice cream', 'lody 🍦'],
          ['I like…', 'Lubię…'],
          ['I don’t like…', 'Nie lubię…'],
          ['Can I have…, please?', 'Czy mogę prosić…?'],
          ['Here you are.', 'Proszę bardzo. (podaję coś)'],
          ['a shop', 'sklep'],
        ],
        questions: [
          Q('7ph8fv', 'Co znaczy {an apple}?', ['jabłko', 'banan', 'jajko'], 0, '🍎 {an apple} – jabłko.'),
          Q('yxd7a9', 'Jak po angielsku jest „mleko”?', ['milk', 'water', 'juice'], 0, 'Mleko to {milk} 🥛. {water} – woda, {juice} – sok.', EN),
          Q('3b6hjg', 'Co to jest? 🧀', ['cheese', 'bread', 'cake'], 0, '🧀 to ser – {cheese}.', { ...EN, say: 'Co to jest? Na obrazku jest ser. Jak to powiesz po angielsku?' }),
          Q('8e9y08', 'Co znaczy {I like bananas}?', ['Lubię banany.', 'Nie lubię bananów.', 'Mam banana.'], 0, '{I like} – lubię 👍.'),
          Q('g7zct0', 'Jak powiesz, że nie lubisz mleka?', ['I don’t like milk.', 'I like milk.', 'Can I have milk?'], 0, '{I don’t like} – nie lubię 👎.', EN),
          Q('xp897f', 'Chcesz kupić jabłko. Co powiesz w sklepie?', ['Can I have an apple, please?', 'This is my apple.', 'I’m an apple.'], 0, '{Can I have…, please?} – czy mogę prosić…?', EN),
          Q('a3om0r', 'Pani w sklepie podaje ci sok i mówi: {Here you are.} Co odpowiesz?', ['Thank you!', 'Goodbye, mum!', 'Sorry!'], 0, 'Gdy ktoś ci coś podaje, dziękujesz: {Thank you!}', EN),
          Q('lsiw45', 'Kolega pyta: {Do you like pizza?} Lubisz pizzę. Co odpowiesz?', ['Yes, I do.', 'No, I don’t.', 'I’m fine.'], 0, '{Yes, I do} – tak, lubię. {No, I don’t} – nie, nie lubię.', EN),
          Q('fvxliu', 'Które słowo pasuje: … egg', ['an', 'a'], 0, 'Przed samogłoską mówimy {an}: {an egg}, {an apple}.', { ...EN, ...PF, say: ['Które słowo pasuje przed słowem', ['egg', 'en'], '?'] }),
          Q('d5gf32', 'Jak po angielsku jest „chleb”?', ['bread', 'butter', 'cake'], 0, 'Chleb to {bread} 🍞.', EN),
          Q('47dlwr', 'Co znaczy {ice cream}?', ['lody', 'ciasto', 'czekolada'], 0, '🍦 {ice cream} – lody. {cake} – ciasto, {chocolate} – czekolada.'),
          Q('6d4tm3', 'Co to jest? 🍊', ['an orange', 'an apple', 'a banana'], 0, '🍊 to pomarańcza – {an orange}. Słowo {orange} znaczy też „pomarańczowy”.', { ...EN, say: 'Co to jest? Na obrazku jest pomarańcza. Jak to powiesz po angielsku?' }),
          Q('53wcxx', 'Prawda czy fałsz?\n{Water} to woda.', TF, 0, 'Tak! 💧 {water} – woda.', PF),
          Q('zehifw', 'Co znaczy {a shop}?', ['sklep', 'kanapka', 'szkoła'], 0, '{a shop} – sklep. {a sandwich} – kanapka.'),
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'zwierzeta',
        name: 'Zwierzęta, pogoda i pory roku',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. temat 12 (przyroda wokół mnie); 4.2 (nazywa obiekty i opisuje je – big, small); 7 (nazywa zwierzęta z otoczenia i z obrazków).${WYBOR}`,
        theory: `
          <h3>Zwierzęta w domu</h3>
          <p>${en('a cat')} 🐱 kot · ${en('a dog')} 🐶 pies · ${en('a fish')} 🐟 ryba · ${en('a rabbit')} 🐰 królik · ${en('a hamster')} 🐹 chomik</p>
          <h3>Zwierzęta na wsi</h3>
          <p>${en('a cow')} 🐮 krowa · ${en('a horse')} 🐴 koń · ${en('a pig')} 🐷 świnia · ${en('a sheep')} 🐑 owca · ${en('a duck')} 🦆 kaczka · ${en('a hen')} 🐔 kura</p>
          <h3>Zwierzęta w zoo</h3>
          <p>${en('a lion')} 🦁 lew · ${en('an elephant')} 🐘 słoń · ${en('a monkey')} 🐵 małpa · ${en('a giraffe')} 🦒 żyrafa</p>
          <p>${ei('An elephant is big.')} – Słoń jest duży. · ${ei('A hamster is small.')} – Chomik jest mały.</p>
          <h3>Jaka jest pogoda?</h3>
          <p>${en('What’s the weather like?')} – Jaka jest pogoda?</p>
          <p>${ei('It’s sunny.')} ☀️ słonecznie · ${ei('It’s rainy.')} 🌧️ deszczowo · ${ei('It’s windy.')} 💨 wietrznie · ${ei('It’s snowy.')} ❄️ śnieżnie · ${ei('It’s hot.')} gorąco · ${ei('It’s cold.')} zimno</p>
          <h3>Pory roku</h3>
          <p>${en('spring')} 🌷 wiosna · ${en('summer')} 🏖️ lato · ${en('autumn')} 🍂 jesień · ${en('winter')} ⛄ zima</p>
          <p>W przyrodzie: ${en('a tree')} – drzewo 🌳 · ${en('a flower')} – kwiat 🌼 · ${en('the sun')} – słońce</p>`,
        flashcards: [
          ['a cat', 'kot 🐱'],
          ['a dog', 'pies 🐶'],
          ['a rabbit', 'królik 🐰'],
          ['a cow', 'krowa 🐮'],
          ['a horse', 'koń 🐴'],
          ['a pig', 'świnia 🐷'],
          ['a lion', 'lew 🦁'],
          ['an elephant', 'słoń 🐘'],
          ['big', 'duży'],
          ['small', 'mały'],
          ['It’s sunny.', 'Jest słonecznie. ☀️'],
          ['It’s rainy.', 'Pada deszcz. 🌧️'],
          ['It’s cold.', 'Jest zimno.'],
          ['spring', 'wiosna'],
          ['summer', 'lato'],
          ['autumn', 'jesień'],
          ['winter', 'zima'],
        ],
        questions: [
          Q('wom5ob', 'Co znaczy {a dog}?', ['pies', 'kot', 'koń'], 0, '🐶 {a dog} – pies. 🐱 {a cat} – kot.'),
          Q('gbt4re', 'Co to jest? 🐰', ['a rabbit', 'a hamster', 'a fish'], 0, '🐰 to królik – {a rabbit}.', { ...EN, say: 'Co to jest? Na obrazku jest królik. Jak to powiesz po angielsku?' }),
          Q('czwiub', 'Jak po angielsku jest „krowa”?', ['a cow', 'a horse', 'a pig'], 0, 'Krowa to {a cow} 🐮. {a horse} – koń, {a pig} – świnia.', EN),
          Q('jec2oq', 'Które zwierzę mieszka w zoo, a nie na wsi?', ['a giraffe', 'a hen', 'a sheep'], 0, '🦒 {a giraffe} – żyrafa. Kura i owca żyją na wsi.', EN),
          Q('7wd03x', 'Co znaczy {An elephant is big}?', ['Słoń jest duży.', 'Słoń jest mały.', 'Lew jest duży.'], 0, '{an elephant} – słoń, {big} – duży, {small} – mały.'),
          Q('gwta9x', 'Na dworze świeci słońce ☀️. Jaka jest pogoda?', ['It’s sunny.', 'It’s rainy.', 'It’s snowy.'], 0, '{sunny} – słonecznie. {rainy} – deszczowo.', { ...EN, say: 'Na dworze świeci słońce. Jaka jest pogoda?' }),
          Q('84mvbt', 'Co znaczy {It’s windy}?', ['Jest wietrznie.', 'Pada śnieg.', 'Jest gorąco.'], 0, '{wind} – wiatr 💨, {windy} – wietrznie.'),
          Q('bulwec', 'Pada śnieg ❄️. Jaka jest pogoda?', ['It’s snowy.', 'It’s hot.', 'It’s sunny.'], 0, '{snow} – śnieg, {snowy} – śnieżnie.', { ...EN, say: 'Pada śnieg. Jaka jest pogoda?' }),
          Q('ferlwa', 'Jak po angielsku jest „zima”?', ['winter', 'summer', 'spring'], 0, 'Zima to {winter} ⛄. {summer} – lato, {spring} – wiosna.', EN),
          Q('29gk24', 'Co znaczy {autumn}?', ['jesień', 'wiosna', 'lato'], 0, '🍂 {autumn} – jesień.'),
          Q('27dwuq', 'W której porze roku są wakacje?', ['summer', 'winter', 'autumn'], 0, 'Wakacje są latem – {in summer} 🏖️.', EN),
          Q('hgoxbo', 'Co to jest? 🦁', ['a lion', 'a monkey', 'a duck'], 0, '🦁 to lew – {a lion}.', { ...EN, say: 'Co to jest? Na obrazku jest lew. Jak to powiesz po angielsku?' }),
          Q('jr1gcp', 'Prawda czy fałsz?\n{A fish} to ryba.', TF, 0, 'Tak! 🐟 {a fish} – ryba.', PF),
          Q('pvaek3', 'Co znaczy {a flower}?', ['kwiat', 'drzewo', 'słońce'], 0, '🌼 {a flower} – kwiat. 🌳 {a tree} – drzewo.'),
          Q('r6dqt5', 'Prawda czy fałsz?\n{It’s cold} znaczy „jest gorąco”.', TF, 1, '{cold} – zimno, {hot} – gorąco.', PF),
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'zabawy',
        name: 'Mój dzień, zabawy i sport',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. tematy 5 (mój dzień, moje zabawy), 8 (mój czas wolny i wakacje) i 10 (sport); 6.2 (mówi, co potrafi robić – I can), 6.5 (wyraża swoje upodobania).${WYBOR}`,
        theory: `
          <h3>Dni tygodnia</h3>
          <p>${en('Monday')} poniedziałek · ${en('Tuesday')} wtorek · ${en('Wednesday')} środa · ${en('Thursday')} czwartek · ${en('Friday')} piątek · ${en('Saturday')} sobota · ${en('Sunday')} niedziela</p>
          <p class="tip">Po angielsku dni tygodnia piszemy <b>wielką literą</b>: ${ei('Monday')}. Po polsku – małą: poniedziałek.</p>
          <h3>Zabawki – <span lang="en">toys</span></h3>
          <p>${en('a ball')} ⚽ piłka · ${en('a doll')} lalka · ${en('a teddy bear')} 🧸 miś · ${en('a car')} 🚗 samochód · ${en('a kite')} 🪁 latawiec · ${en('a bike')} 🚲 rower</p>
          <h3>Sport i zabawa</h3>
          <p>${ei('play football')} – grać w piłkę nożną · ${ei('swim')} – pływać · ${ei('run')} – biegać · ${ei('jump')} – skakać · ${ei('ride a bike')} – jeździć na rowerze · ${ei('dance')} – tańczyć · ${ei('sing')} – śpiewać</p>
          <h3>Co potrafisz?</h3>
          <ul>
            <li>${ei('I can swim.')} ✔ – Umiem pływać.</li>
            <li>${ei('I can’t dance.')} ✘ – Nie umiem tańczyć.</li>
            <li>${en('Can you ride a bike?')} – Czy umiesz jeździć na rowerze? → ${ei('Yes, I can.')} / ${ei('No, I can’t.')}</li>
          </ul>
          <p>${ei('I like football.')} – Lubię piłkę nożną. · ${ei('Let’s play!')} – Pobawmy się!</p>`,
        flashcards: [
          ['Monday', 'poniedziałek'],
          ['Wednesday', 'środa'],
          ['Friday', 'piątek'],
          ['Saturday', 'sobota'],
          ['Sunday', 'niedziela'],
          ['a ball', 'piłka ⚽'],
          ['a doll', 'lalka'],
          ['a teddy bear', 'miś 🧸'],
          ['a kite', 'latawiec 🪁'],
          ['a bike', 'rower 🚲'],
          ['swim', 'pływać'],
          ['jump', 'skakać'],
          ['play football', 'grać w piłkę nożną'],
          ['I can…', 'Umiem…, potrafię…'],
          ['I can’t…', 'Nie umiem…'],
        ],
        questions: [
          Q('7yxpr3', 'Co znaczy {Sunday}?', ['niedziela', 'sobota', 'poniedziałek'], 0, '{Sunday} – niedziela. {Saturday} – sobota.'),
          Q('kud4k9', 'Jak po angielsku jest „poniedziałek”?', ['Monday', 'Friday', 'Tuesday'], 0, 'Poniedziałek to {Monday}.', EN),
          Q('r1t1up', 'Który dzień jest po piątku ({Friday})?', ['Saturday', 'Thursday', 'Monday'], 0, 'Po piątku jest sobota – {Saturday}.', EN),
          Q('wrkzuc', 'Jak piszemy dni tygodnia po angielsku?', ['wielką literą', 'małą literą'], 0, 'Po angielsku: {Monday} – wielką literą. Po polsku: poniedziałek – małą.', PF),
          Q('o1a8ny', 'Co to jest? 🧸', ['a teddy bear', 'a doll', 'a ball'], 0, '🧸 to miś – {a teddy bear}.', { ...EN, say: 'Co to jest? Na obrazku jest miś. Jak to powiesz po angielsku?' }),
          Q('vloa1q', 'Co znaczy {a kite}?', ['latawiec', 'rower', 'lalka'], 0, '🪁 {a kite} – latawiec. Puszczasz go, gdy wieje wiatr.'),
          Q('x17lc5', 'Co znaczy {I can swim}?', ['Umiem pływać.', 'Nie umiem pływać.', 'Lubię pływać.'], 0, '{I can} – umiem, {swim} – pływać.'),
          Q('tlpna7', 'Nie umiesz tańczyć. Co powiesz?', ['I can’t dance.', 'I can dance.', 'I like dance.'], 0, '{I can’t} – nie umiem.', EN),
          Q('38mnhb', 'Kolega pyta: {Can you ride a bike?} Umiesz. Co odpowiesz?', ['Yes, I can.', 'No, I can’t.', 'Yes, I do.'], 0, '{Yes, I can} – tak, umiem.', EN),
          Q('3vug93', 'Jak po angielsku jest „skakać”?', ['jump', 'run', 'sing'], 0, 'Skakać to {jump}. {run} – biegać, {sing} – śpiewać.', EN),
          Q('bnvbtw', 'Co znaczy {play football}?', ['grać w piłkę nożną', 'jeździć na rowerze', 'pływać'], 0, '{football} – piłka nożna ⚽.'),
          Q('x636yk', 'Co to jest? 🚲', ['a bike', 'a car', 'a kite'], 0, '🚲 to rower – {a bike}.', { ...EN, say: 'Co to jest? Na obrazku jest rower. Jak to powiesz po angielsku?' }),
          Q('bsciqs', 'Prawda czy fałsz?\n{Let’s play!} znaczy „Pobawmy się!”.', TF, 0, 'Tak! Tak zapraszasz kolegę do zabawy.', PF),
          Q('2jn3xw', 'Ile dni ma tydzień? Policz po angielsku.', ['seven', 'five', 'six'], 0, 'Tydzień ma 7 dni – {seven}: od {Monday} do {Sunday}.', EN),
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'swieta',
        name: 'Święta, baśnie i kraje',
        cardLang: ['en', 'pl'],
        basis: `${PP}: 1. tematy 9 (święta i tradycje, mój kraj) i 13 (świat baśni i wyobraźni); 8.1 (ludzie posługują się różnymi językami), 8.2 (podstawowe informacje o krajach, w których mówi się po angielsku).${WYBOR} Wymieniono tylko kilka krajów, w których angielski jest językiem urzędowym lub powszechnym.`,
        theory: `
          <h3>Życzenia</h3>
          <ul>
            <li>${en('Happy birthday!')} 🎂 – Wszystkiego najlepszego z okazji urodzin!</li>
            <li>${en('Merry Christmas!')} 🎄 – Wesołych Świąt (Bożego Narodzenia)!</li>
            <li>${en('Happy Easter!')} 🐣 – Wesołych Świąt (Wielkanocnych)!</li>
            <li>${en('Happy New Year!')} 🎆 – Szczęśliwego Nowego Roku!</li>
          </ul>
          <p>${en('a present')} – prezent 🎁 · ${en('a Christmas tree')} – choinka 🎄 · ${en('an Easter egg')} – pisanka 🥚 · ${en('a birthday cake')} – tort urodzinowy</p>
          <h3>Ludzie mówią różnymi językami</h3>
          <p>Na świecie jest wiele języków. Kiedy znasz język innej osoby, łatwiej się z nią porozumiesz. Po polsku mówisz „cześć”, a po angielsku – ${en('hello')}.</p>
          <p>${ei('I’m from Poland.')} – Jestem z Polski. · ${ei('I speak Polish.')} – Mówię po polsku. · ${ei('English')} – angielski</p>
          <h3>Gdzie mówi się po angielsku?</h3>
          <p>Między innymi w <b>Wielkiej Brytanii</b> (${ei('the UK')}, stolica: <b>Londyn</b> – ${ei('London')}), w <b>Irlandii</b>, w <b>Stanach Zjednoczonych</b> (${ei('the USA')}) i w <b>Australii</b>.</p>
          <h3>W baśniach – <span lang="en">fairy tales</span></h3>
          <p>${en('a king')} 👑 król · ${en('a queen')} królowa · ${en('a princess')} 👸 księżniczka · ${en('a dragon')} 🐉 smok · ${en('a castle')} 🏰 zamek</p>`,
        flashcards: [
          ['Happy birthday!', 'Wszystkiego najlepszego z okazji urodzin!'],
          ['Merry Christmas!', 'Wesołych Świąt Bożego Narodzenia!'],
          ['Happy Easter!', 'Wesołych Świąt Wielkanocnych!'],
          ['a present', 'prezent 🎁'],
          ['a Christmas tree', 'choinka 🎄'],
          ['Poland', 'Polska'],
          ['Polish', 'polski, po polsku'],
          ['English', 'angielski, po angielsku'],
          ['London', 'Londyn – stolica Wielkiej Brytanii'],
          ['a king', 'król'],
          ['a queen', 'królowa'],
          ['a dragon', 'smok 🐉'],
          ['a castle', 'zamek 🏰'],
        ],
        questions: [
          Q('d6ygfl', 'Kolega ma urodziny. Co mu powiesz?', ['Happy birthday!', 'Merry Christmas!', 'Good night!'], 0, '{Happy birthday!} – wszystkiego najlepszego z okazji urodzin! 🎂', EN),
          Q('99pzs9', 'Jakie życzenia składasz w Boże Narodzenie?', ['Merry Christmas!', 'Happy Easter!', 'Happy birthday!'], 0, '{Merry Christmas!} – Wesołych Świąt Bożego Narodzenia! 🎄', EN),
          Q('1gb0p5', 'Co znaczy {Happy Easter!}?', ['Wesołych Świąt Wielkanocnych!', 'Szczęśliwego Nowego Roku!', 'Wszystkiego najlepszego!'], 0, '{Easter} – Wielkanoc 🐣.'),
          Q('r62mkw', 'Co znaczy {a present}?', ['prezent', 'choinka', 'tort'], 0, '🎁 {a present} – prezent.'),
          Q('aq2oq6', 'Jak po angielsku jest „Polska”?', ['Poland', 'Polish', 'English'], 0, 'Polska to {Poland}. {Polish} znaczy „polski”.', EN),
          Q('7bmdw6', 'Co znaczy {I speak Polish}?', ['Mówię po polsku.', 'Jestem z Polski.', 'Mówię po angielsku.'], 0, '{I speak} – mówię, {Polish} – po polsku.'),
          Q('ky46l3', 'Stolica Wielkiej Brytanii to…', ['Londyn', 'Warszawa', 'Paryż'], 0, '{London} – Londyn – to stolica Wielkiej Brytanii. Warszawa to stolica Polski.'),
          Q('d9hm8f', 'W którym kraju ludzie mówią po angielsku?', ['w Irlandii', 'w Polsce', 'w Niemczech'], 0, 'W Irlandii mówi się po angielsku (i po irlandzku). W Polsce – po polsku, w Niemczech – po niemiecku.'),
          Q('yaq3ge', 'Po co uczymy się języków obcych?', ['żeby porozumieć się z ludźmi z innych krajów', 'żeby zapomnieć polski', 'żeby nie rozmawiać z kolegami'], 0, 'Kiedy znasz język innej osoby, łatwiej ją zrozumiesz i porozmawiasz z nią.'),
          Q('v3xsfa', 'Co to jest? 🐉', ['a dragon', 'a king', 'a castle'], 0, '🐉 to smok – {a dragon}.', { ...EN, say: 'Co to jest? Na obrazku jest smok. Jak to powiesz po angielsku?' }),
          Q('y5ojje', 'Co znaczy {a queen}?', ['królowa', 'król', 'księżniczka'], 0, '{a queen} – królowa, {a king} – król, {a princess} – księżniczka.'),
          Q('9hocyo', 'Jak po angielsku jest „zamek” w baśni? 🏰', ['a castle', 'a house', 'a flat'], 0, '🏰 {a castle} – zamek.', EN),
          Q('72ujol', 'Prawda czy fałsz?\n{Happy New Year!} mówimy w urodziny.', TF, 1, '{Happy New Year!} – Szczęśliwego Nowego Roku! W urodziny mówimy {Happy birthday!}', PF),
          Q('z0rsdt', 'Co znaczy {a Christmas tree}?', ['choinka', 'pisanka', 'prezent'], 0, '🎄 {a Christmas tree} – choinka.'),
        ],
      },
    ],
  });
})();
