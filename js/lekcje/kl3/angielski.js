/* Lekcje – język angielski, klasa 3. Klucz: 'angielski/<id działu>'. Format: docs/LEKCJE.md
 * Fragmenty po angielsku w tekście oznaczone lang="en" – czyta je głos angielski. */
window.LESSONS = window.LESSONS || {};
(function () {
  const L = window.LESSONS;
  const en = (t) => `<b lang="en">${t}</b>`;
  const ei = (t) => `<i lang="en">${t}</i>`;

  // Kafelki: [emoji, po angielsku, po polsku], cols kolumn
  // cls – jedna klasa dla wszystkich kafelków (np. przy kolorach, żeby ramki nie myliły)
  function cards(label, items, cols, cls) {
    const W = 400, g = 8, w = Math.floor((W - g * (cols + 1)) / cols), h = 92;
    const H = Math.ceil(items.length / cols) * (h + g) + g;
    const body = items.map(([e, a, b], k) => {
      const x = g + (k % cols) * (w + g), y = g + Math.floor(k / cols) * (h + g), cx = x + w / 2, c = (k % 5) + 1;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="${cls || `f${c} s${c}`} sw"/>
        <text x="${cx}" y="${y + 34}" class="tx" text-anchor="middle" style="font-size:26px">${e}</text>
        <text x="${cx}" y="${y + 60}" class="tx-b" text-anchor="middle">${a}</text>
        <text x="${cx}" y="${y + 80}" class="tx-s" text-anchor="middle">${b}</text>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}">${body}</svg>`;
  }
  // Lista w wierszach: [emoji, po angielsku, po polsku]; px – gdzie zaczyna się tekst polski
  function list(label, items, px = 240) {
    const h = 42, g = 6, H = items.length * (h + g) + g;
    const body = items.map(([e, a, b], k) => {
      const y = g + k * (h + g), c = (k % 5) + 1;
      return `<rect x="6" y="${y}" width="388" height="${h}" rx="9" class="f${c} s${c} sw"/>
        <text x="30" y="${y + 29}" class="tx" text-anchor="middle" style="font-size:22px">${e}</text>
        <text x="56" y="${y + 28}" class="tx-b">${a}</text>
        <text x="${px}" y="${y + 28}" class="tx">${b}</text>`;
    }).join('');
    return `<svg viewBox="0 0 400 ${H}" role="img" aria-label="${label}">${body}</svg>`;
  }
  // Rozmowa: [emoji osoby, po angielsku, po polsku]; osoby na zmianę z lewej i z prawej
  function chat(label, lines) {
    const h = 54, g = 10, H = lines.length * (h + g) + g;
    const body = lines.map(([who, a, b], k) => {
      const y = g + k * (h + g), left = k % 2 === 0;
      const ex = left ? 24 : 376, bx = left ? 50 : 30, c = left ? 1 : 3;
      return `<text x="${ex}" y="${y + 36}" class="tx" text-anchor="middle" style="font-size:28px">${who}</text>
        <rect x="${bx}" y="${y}" width="320" height="${h}" rx="14" class="f${c} s${c} sw"/>
        <text x="${bx + 14}" y="${y + 23}" class="tx-b">${a}</text>
        <text x="${bx + 14}" y="${y + 44}" class="tx-s">${b}</text>`;
    }).join('');
    return `<svg viewBox="0 0 400 ${H}" role="img" aria-label="${label}">${body}</svg>`;
  }

  // ------------------------------------------------------------------
  L['angielski/hello'] = [
    {
      title: 'Hello! – tak się witamy',
      svg: chat('Rozmowa: Ola mówi Hello! I’m Ola. Kuba odpowiada Hi! My name is Kuba.', [
        ['👧', 'Hello! I’m Ola.', 'Cześć! Jestem Ola.'],
        ['👦', 'Hi! My name is Kuba.', 'Cześć! Mam na imię Kuba.'],
        ['👧', 'Goodbye, Kuba!', 'Do widzenia, Kubo!'],
      ]),
      text: `<p>Po angielsku witasz się słowem ${en('Hello!')} albo ${en('Hi!')}.</p>
        <p>Mówisz, jak masz na imię: ${ei('My name is Ola.')} albo krócej: ${ei('I’m Ola.')} Na pożegnanie: ${en('Goodbye!')} albo ${en('Bye!')}</p>`,
      remember: `${en('Hello!')} – cześć · ${en('Goodbye!')} – do widzenia`,
      hook: `${en('Hello')} brzmi trochę jak „halo” w telefonie 📞 – też tak zaczynasz rozmowę.`,
    },
    {
      title: 'Rano, wieczorem, na pożegnanie',
      svg: list('Good morning – dzień dobry rano, Goodbye – do widzenia, Good night – dobranoc', [
        ['☀️', 'Good morning!', 'dzień dobry (rano)'],
        ['👋', 'Goodbye!', 'do widzenia'],
        ['🌙', 'Good night!', 'dobranoc'],
      ], 220),
      text: `<p>Rano mówisz ${en('Good morning!')} – dzień dobry.</p>
        <p>Wieczorem, przed snem: ${en('Good night!')} – dobranoc. To pożegnanie, a nie powitanie!</p>`,
      hook: `${en('night')} to noc 🌙. ${en('Good night')} – „dobrej nocy”, czyli dobranoc.`,
      check: { q: 'Idziesz spać. Co powiesz mamie?', options: ['Good night!', 'Good morning!', 'Hello!'], answer: 0, optLang: 'en', explain: 'Przed snem mówisz: dobranoc – Good night!', sayExplain: ['Przed snem mówisz: dobranoc –', ['Good night!', 'en']] },
    },
    {
      title: 'How old are you? – ile masz lat?',
      svg: cards('Liczby od 1 do 10 po angielsku: one, two, three, four, five, six, seven, eight, nine, ten', [
        ['1', 'one', 'jeden'], ['2', 'two', 'dwa'], ['3', 'three', 'trzy'], ['4', 'four', 'cztery'], ['5', 'five', 'pięć'],
        ['6', 'six', 'sześć'], ['7', 'seven', 'siedem'], ['8', 'eight', 'osiem'], ['9', 'nine', 'dziewięć'], ['10', 'ten', 'dziesięć'],
      ], 5),
      text: `<p>Ktoś pyta: ${en('How old are you?')} – ile masz lat?</p>
        <p>Odpowiadasz: ${ei('I’m eight.')} – mam 8 lat. Albo: ${ei('I’m nine.')} – mam 9 lat.</p>
        <p>Liczby od 13 do 19 kończą się na <b lang="en">-teen</b>: ${ei('thirteen')} 13, ${ei('fourteen')} 14. A 20 to ${ei('twenty')}.</p>`,
      remember: `${en('How old are you?')} → ${ei('I’m eight.')}`,
      check: { q: 'Jaka to liczba: „nine”?', say: ['Jaka to liczba:', ['nine', 'en'], '?'], options: ['9', '5', '19'], answer: 0, explain: 'nine to 9. 19 to nineteen – z końcówką -teen.', sayExplain: [['nine', 'en'], 'to 9. 19 to', ['nineteen', 'en'], ', z końcówką', ['teen', 'en']] },
    },
    {
      title: 'How are you? – jak się czujesz?',
      svg: cards('Uczucia: happy – wesoły, sad – smutny, tired – zmęczony, hungry – głodny', [
        ['😀', 'happy', 'wesoły'], ['😢', 'sad', 'smutny'], ['😴', 'tired', 'zmęczony'], ['🍽️', 'hungry', 'głodny'],
      ], 4),
      text: `<p>${en('How are you?')} – jak się masz? Najczęściej odpowiadasz: ${ei('I’m fine, thank you.')} – dobrze, dziękuję.</p>
        <p>Możesz też powiedzieć, jak się czujesz: ${ei('I’m happy.')} – jestem wesoły. ${ei('I’m tired.')} – jestem zmęczony.</p>`,
      hook: `${en('I’m')} znaczy „jestem”. Dodaj słowo i gotowe: ${ei('I’m happy')}, ${ei('I’m sad')}.`,
      check: { q: 'Jak powiesz „jestem smutny”?', options: ['I’m sad.', 'I’m happy.', 'I’m hungry.'], answer: 0, optLang: 'en', explain: 'sad – smutny 😢.', sayExplain: [['sad', 'en'], 'znaczy smutny.'] },
    },
    {
      title: 'Magiczne słowa',
      svg: list('Magiczne słowa: please – proszę, thank you – dziękuję, sorry – przepraszam', [
        ['🙏', 'please', 'proszę'],
        ['💐', 'thank you', 'dziękuję'],
        ['😔', 'sorry', 'przepraszam'],
      ]),
      text: `<p>Te słowa otwierają wszystkie drzwi – po polsku i po angielsku.</p>
        <p>Prosisz: ${en('please')}. Dziękujesz: ${en('thank you')}. Przepraszasz: ${en('sorry')}.</p>`,
      remember: `${en('please')} – proszę · ${en('thank you')} – dziękuję · ${en('sorry')} – przepraszam`,
    },
  ];

  // ------------------------------------------------------------------
  L['angielski/szkola'] = [
    {
      title: 'Co jest w tornistrze?',
      svg: cards('Przybory: pencil – ołówek, pen – długopis, book – książka, ruler – linijka, crayon – kredka, rubber – gumka', [
        ['✏️', 'a pencil', 'ołówek'], ['🖊️', 'a pen', 'długopis'], ['📕', 'a book', 'książka'],
        ['📏', 'a ruler', 'linijka'], ['🖍️', 'a crayon', 'kredka'], ['', 'a rubber', 'gumka'],
      ], 3),
      text: `<p>W tornistrze – ${en('a schoolbag')} – nosisz przybory. Przed nazwą rzeczy często mówimy ${en('a')}: ${ei('a pencil')}, ${ei('a book')}.</p>`,
      hook: `Uwaga, podobne słowa! ${en('a ruler')} 📏 – linijka, a ${en('a rubber')} – gumka. Ruler ma „l” jak <b>l</b>inijka.`,
      check: { q: 'Co znaczy „a pen”?', say: ['Co znaczy', ['a pen', 'en'], '?'], options: ['długopis', 'ołówek', 'piórnik'], answer: 0, explain: 'a pen – długopis. Ołówek to a pencil.', sayExplain: [['a pen', 'en'], 'to długopis. Ołówek to', ['a pencil', 'en']] },
    },
    {
      title: 'Kolory – colours',
      svg: cards('Kolory: red – czerwony, blue – niebieski, green – zielony, yellow – żółty, orange – pomarańczowy, purple – fioletowy, brown – brązowy, black – czarny, white – biały', [
        ['🟥', 'red', 'czerwony'], ['🟦', 'blue', 'niebieski'], ['🟩', 'green', 'zielony'],
        ['🟨', 'yellow', 'żółty'], ['🟧', 'orange', 'pomarańczowy'], ['🟪', 'purple', 'fioletowy'],
        ['🟫', 'brown', 'brązowy'], ['⬛', 'black', 'czarny'], ['⬜', 'white', 'biały'],
      ], 3, 'bg ln'),
      text: `<p>Kolor to po angielsku ${en('colour')}. Jest jeszcze ${en('pink')} – różowy.</p>
        <p>Słowo ${en('orange')} znaczy „pomarańczowy” i „pomarańcza” 🍊.</p>`,
      hook: `${en('blue')} i „błękitny” zaczynają się podobnie: <b>bl</b>… 💙`,
      check: { q: 'Jakiego koloru jest trawa? 🌱', say: 'Jakiego koloru jest trawa?', options: ['green', 'red', 'blue'], answer: 0, optLang: 'en', explain: 'Trawa jest zielona – green.', sayExplain: ['Trawa jest zielona –', ['green', 'en']] },
    },
    {
      title: 'What’s this? What colour is it?',
      svg: chat('Rozmowa: pani pyta What’s this? Uczeń: It’s a pencil. Pani: What colour is it? Uczeń: It’s red.', [
        ['👩‍🏫', 'What’s this?', 'Co to jest?'],
        ['👦', 'It’s a pencil.', 'To jest ołówek.'],
        ['👩‍🏫', 'What colour is it?', 'Jakiego jest koloru?'],
        ['👦', 'It’s red.', 'Jest czerwony.'],
      ]),
      text: `<p>${en('What’s this?')} – co to jest? Odpowiadasz: ${ei('It’s a…')} – to jest…</p>
        <p>${en('What colour is it?')} – jakiego jest koloru? Odpowiadasz: ${ei('It’s red.')} – jest czerwony.</p>`,
      remember: `${en('It’s')} – to jest: ${ei('It’s a book. It’s blue.')}`,
    },
    {
      title: 'Polecenia pani',
      svg: list('Polecenia: Stand up – wstań, Sit down – usiądź, Open your book – otwórz książkę, Listen – słuchaj, Look – popatrz', [
        ['🧍', 'Stand up!', 'Wstań!'],
        ['🪑', 'Sit down!', 'Usiądź!'],
        ['📖', 'Open your book!', 'Otwórz książkę!'],
        ['👂', 'Listen!', 'Słuchaj!'],
        ['👀', 'Look!', 'Popatrz!'],
      ]),
      text: `<p>Na lekcji angielskiego pani mówi po angielsku. Gdy znasz polecenia, od razu wiesz, co robić.</p>
        <p>${en('Close your book!')} – zamknij książkę.</p>`,
      hook: `${en('up')} – w górę ⬆️, ${en('down')} – w dół ⬇️. ${ei('Stand up')} – wstań, ${ei('sit down')} – usiądź.`,
      check: { q: 'Pani mówi: „Look!” Co robisz?', say: ['Pani mówi:', ['Look!', 'en'], 'Co robisz?'], options: ['Patrzę.', 'Słucham.', 'Siadam.'], answer: 0, explain: 'Look! – popatrz! 👀', sayExplain: [['Look!', 'en'], 'znaczy: popatrz!'] },
    },
  ];

  // ------------------------------------------------------------------
  const SVG_DOM = `<svg viewBox="0 0 400 270" role="img" aria-label="Dom z czterema pokojami: kitchen – kuchnia, bathroom – łazienka, bedroom – sypialnia, living room – pokój dzienny">
      <polygon points="40,90 200,14 360,90" class="f2 s2 sw"/>
      <text x="200" y="72" class="tx-b" text-anchor="middle">a house</text>
      <rect x="40" y="90" width="320" height="172" class="bg ln sw"/>
      <line x1="200" y1="90" x2="200" y2="262" class="ln sw"/>
      <line x1="40" y1="176" x2="360" y2="176" class="ln sw"/>
      <rect x="46" y="96" width="148" height="74" rx="6" class="f4"/>
      <rect x="206" y="96" width="148" height="74" rx="6" class="f1"/>
      <rect x="46" y="182" width="148" height="74" rx="6" class="f5"/>
      <rect x="206" y="182" width="148" height="74" rx="6" class="f3"/>
      <text x="120" y="126" class="tx" text-anchor="middle" style="font-size:24px">🍳</text>
      <text x="120" y="148" class="tx-b" text-anchor="middle">kitchen</text>
      <text x="120" y="165" class="tx-s" text-anchor="middle">kuchnia</text>
      <text x="280" y="126" class="tx" text-anchor="middle" style="font-size:24px">🛁</text>
      <text x="280" y="148" class="tx-b" text-anchor="middle">bathroom</text>
      <text x="280" y="165" class="tx-s" text-anchor="middle">łazienka</text>
      <text x="120" y="212" class="tx" text-anchor="middle" style="font-size:24px">🛏️</text>
      <text x="120" y="234" class="tx-b" text-anchor="middle">bedroom</text>
      <text x="120" y="251" class="tx-s" text-anchor="middle">sypialnia</text>
      <text x="280" y="212" class="tx" text-anchor="middle" style="font-size:24px">🛋️</text>
      <text x="280" y="234" class="tx-b" text-anchor="middle">living room</text>
      <text x="280" y="251" class="tx-s" text-anchor="middle">pokój dzienny</text>
    </svg>`;

  L['angielski/rodzina'] = [
    {
      title: 'My family – moja rodzina',
      svg: cards('Rodzina: mum – mama, dad – tata, sister – siostra, brother – brat, grandma – babcia, grandpa – dziadek', [
        ['👩', 'mum', 'mama'], ['👨', 'dad', 'tata'], ['👧', 'sister', 'siostra'],
        ['👦', 'brother', 'brat'], ['👵', 'grandma', 'babcia'], ['👴', 'grandpa', 'dziadek'],
      ], 3),
      text: `<p>Rodzina to po angielsku ${en('family')}. Kolega albo przyjaciel to ${en('friend')}.</p>`,
      hook: `${en('grandma')} = ${en('grand')} + ${en('ma')} (mama), ${en('grandpa')} = ${en('grand')} + ${en('pa')} (tata). Babcia i dziadek to „wielka mama” i „wielki tata”! 👵👴`,
      check: { q: 'Co znaczy „sister”?', say: ['Co znaczy', ['sister', 'en'], '?'], options: ['siostra', 'brat', 'babcia'], answer: 0, explain: 'sister – siostra, brother – brat.', sayExplain: [['sister', 'en'], 'to siostra,', ['brother', 'en'], 'to brat.'] },
    },
    {
      title: 'This is my mum',
      svg: chat('Rozmowa: Ola mówi This is my mum. Kuba: Hello! Ola: This is my brother, Tom.', [
        ['👧', 'This is my mum.', 'To jest moja mama.'],
        ['👦', 'Hello!', 'Dzień dobry!'],
        ['👧', 'This is my brother, Tom.', 'To jest mój brat, Tom.'],
      ]),
      text: `<p>Tak przedstawiasz kogoś: ${ei('This is my…')} – to jest mój, moja…</p>
        <p>Słowo ${en('my')} jest zawsze takie samo: ${ei('my mum')} – moja mama, ${ei('my dad')} – mój tata.</p>`,
      remember: `${en('This is my dad.')} – To jest mój tata.`,
      check: { q: 'Jak przedstawisz brata?', options: ['This is my brother.', 'This is my sister.', 'I’m a brother.'], answer: 0, optLang: 'en', explain: 'brother – brat.', sayExplain: [['brother', 'en'], 'to brat.'] },
    },
    {
      title: 'My house – mój dom',
      svg: SVG_DOM,
      text: `<p>Dom to ${en('a house')}, a mieszkanie w bloku – ${en('a flat')}. Pokój to ${en('a room')}.</p>
        <p>W kuchni gotujemy, w łazience się myjemy, w sypialni śpimy.</p>`,
      hook: `${en('bed')} (łóżko) + ${en('room')} (pokój) = ${en('bedroom')} – sypialnia. ${en('bath')} (wanna) + ${en('room')} = ${en('bathroom')} – łazienka. 🛁`,
      check: { q: 'Gdzie śpisz?', options: ['in the bedroom', 'in the kitchen', 'in the bathroom'], answer: 0, optLang: 'en', explain: 'Śpisz w sypialni – bedroom.', sayExplain: ['Śpisz w sypialni –', ['bedroom', 'en']] },
    },
    {
      title: 'Drzwi, okno, ogród',
      svg: cards('W domu: door – drzwi, window – okno, bed – łóżko, garden – ogród', [
        ['🚪', 'a door', 'drzwi'], ['🪟', 'a window', 'okno'], ['🛏️', 'a bed', 'łóżko'], ['🌷', 'a garden', 'ogród'],
      ], 4),
      text: `<p>Mówisz, gdzie mieszkasz: ${ei('I live in a house.')} – mieszkam w domu. ${ei('I live in a flat.')} – mieszkam w mieszkaniu.</p>
        <p>Możesz dodać miasto: ${ei('I live in Poznań.')}</p>`,
      remember: `${en('I live in…')} – mieszkam w…`,
      hook: `W słowie ${en('window')} ukrył się ${en('wind')} – wiatr 🌬️. Dawno temu okno było „okiem dla wiatru”.`,
    },
  ];

  // ------------------------------------------------------------------
  const SVG_A_AN = `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej a: a banana, a cake, a sandwich. Po prawej an przed samogłoską: an apple, an egg, an orange">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f1 s1 sw"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f2 s2 sw"/>
      <text x="102" y="44" class="tx-b" text-anchor="middle" style="font-size:26px">a</text>
      <text x="297" y="44" class="tx-b" text-anchor="middle" style="font-size:26px">an</text>
      <text x="30" y="88" class="tx">🍌 a banana</text>
      <text x="30" y="124" class="tx">🎂 a cake</text>
      <text x="30" y="160" class="tx">🥪 a sandwich</text>
      <text x="225" y="88" class="tx">🍎 an <tspan class="t2">a</tspan>pple</text>
      <text x="225" y="124" class="tx">🥚 an <tspan class="t2">e</tspan>gg</text>
      <text x="225" y="160" class="tx">🍊 an <tspan class="t2">o</tspan>range</text>
    </svg>`;

  L['angielski/jedzenie'] = [
    {
      title: 'Co jemy? – food',
      svg: cards('Jedzenie: apple – jabłko, banana – banan, orange – pomarańcza, bread – chleb, cheese – ser, egg – jajko', [
        ['🍎', 'an apple', 'jabłko'], ['🍌', 'a banana', 'banan'], ['🍊', 'an orange', 'pomarańcza'],
        ['🍞', 'bread', 'chleb'], ['🧀', 'cheese', 'ser'], ['🥚', 'an egg', 'jajko'],
      ], 3),
      text: `<p>Jedzenie to ${en('food')}. Do picia: ${en('milk')} – mleko, ${en('water')} – woda, ${en('juice')} – sok.</p>
        <p>Na deser: ${en('ice cream')} – lody 🍦, ${en('chocolate')} – czekolada.</p>`,
      check: { q: 'Co znaczy „bread”?', say: ['Co znaczy', ['bread', 'en'], '?'], options: ['chleb', 'ser', 'masło'], answer: 0, explain: 'bread – chleb 🍞. Ser to cheese.', sayExplain: [['bread', 'en'], 'to chleb. Ser to', ['cheese', 'en']] },
    },
    {
      title: 'a czy an?',
      svg: SVG_A_AN,
      text: `<p>Przed jedną rzeczą mówimy ${en('a')}: ${ei('a banana')}.</p>
        <p>Gdy słowo zaczyna się od samogłoski – a, e, i, o, u – mówimy ${en('an')}: ${ei('an apple')}, ${ei('an egg')}.</p>`,
      remember: `${en('an')} przed a, e, i, o, u: ${ei('an apple')}, ${ei('an orange')}`,
      hook: 'Literka <b>n</b> w „an” to mostek 🌉 – dzięki niemu łatwiej powiedzieć dwie samogłoski obok siebie.',
      check: { q: 'Które słowo pasuje: … orange 🍊', say: ['Które słowo pasuje przed słowem', ['orange', 'en'], '?'], options: ['an', 'a'], answer: 0, optLang: 'en', explain: 'orange zaczyna się od o – samogłoski. Mówimy: an orange.', sayExplain: [['orange', 'en'], 'zaczyna się od samogłoski o. Mówimy:', ['an orange', 'en']] },
    },
    {
      title: 'Lubię – nie lubię',
      svg: list('I like apples – lubię jabłka. I don’t like milk – nie lubię mleka. Do you like bananas? Yes, I do', [
        ['👍', 'I like apples.', 'Lubię jabłka.'],
        ['👎', 'I don’t like milk.', 'Nie lubię mleka.'],
        ['❓', 'Do you like cake?', 'Lubisz ciasto?'],
        ['🙂', 'Yes, I do.', 'Tak, lubię.'],
      ], 245),
      text: `<p>${ei('I like…')} – lubię. ${ei('I don’t like…')} – nie lubię.</p>
        <p>Pytasz kolegę: ${en('Do you like…?')} Odpowiedź: ${ei('Yes, I do.')} albo ${ei('No, I don’t.')}</p>`,
      hook: `${en('don’t')} to „nie” – jak kciuk w dół 👎.`,
      check: { q: 'Co znaczy „I don’t like cheese”?', say: ['Co znaczy', ['I don’t like cheese', 'en'], '?'], options: ['Nie lubię sera.', 'Lubię ser.', 'Chcę ser.'], answer: 0, explain: 'I don’t like – nie lubię, cheese – ser.', sayExplain: [['I don’t like', 'en'], 'to nie lubię,', ['cheese', 'en'], 'to ser.'] },
    },
    {
      title: 'W sklepie – in the shop',
      svg: chat('Rozmowa w sklepie: Can I have an apple, please? Here you are. Thank you!', [
        ['👦', 'Can I have an apple, please?', 'Czy mogę prosić jabłko?'],
        ['👩', 'Here you are.', 'Proszę bardzo.'],
        ['👦', 'Thank you!', 'Dziękuję!'],
      ]),
      text: `<p>W sklepie – ${en('in the shop')} – prosisz: ${en('Can I have…, please?')}</p>
        <p>Gdy ktoś ci coś podaje, mówi: ${en('Here you are.')} – proszę bardzo. A ty dziękujesz: ${en('Thank you!')}</p>`,
      remember: `${en('Can I have…, please?')} – Czy mogę prosić…?`,
      hook: `${en('please')} to magiczne słowo ✨ – po angielsku też działa!`,
    },
  ];

  // ------------------------------------------------------------------
  const SVG_BIG = `<svg viewBox="0 0 400 180" role="img" aria-label="Słoń – an elephant is big, czyli duży. Chomik – a hamster is small, czyli mały">
      <rect x="10" y="10" width="230" height="160" rx="12" class="f1 s1 sw"/>
      <rect x="250" y="10" width="140" height="160" rx="12" class="f3 s3 sw"/>
      <text x="125" y="104" class="tx" text-anchor="middle" style="font-size:72px">🐘</text>
      <text x="125" y="140" class="tx-b" text-anchor="middle">big</text>
      <text x="125" y="160" class="tx-s" text-anchor="middle">duży</text>
      <text x="320" y="104" class="tx" text-anchor="middle" style="font-size:26px">🐹</text>
      <text x="320" y="140" class="tx-b" text-anchor="middle">small</text>
      <text x="320" y="160" class="tx-s" text-anchor="middle">mały</text>
    </svg>`;

  L['angielski/zwierzeta'] = [
    {
      title: 'Zwierzęta w domu i na wsi',
      svg: cards('Zwierzęta: cat – kot, dog – pies, rabbit – królik, fish – ryba, cow – krowa, horse – koń, pig – świnia, sheep – owca', [
        ['🐱', 'a cat', 'kot'], ['🐶', 'a dog', 'pies'], ['🐰', 'a rabbit', 'królik'], ['🐟', 'a fish', 'ryba'],
        ['🐮', 'a cow', 'krowa'], ['🐴', 'a horse', 'koń'], ['🐷', 'a pig', 'świnia'], ['🐑', 'a sheep', 'owca'],
      ], 4),
      text: `<p>W domu mieszkają zwierzęta domowe: kot, pies, chomik – ${en('a hamster')}.</p>
        <p>Na wsi są krowy, konie, świnie, owce, kaczki – ${en('ducks')} i kury – ${en('hens')}.</p>`,
      check: { q: 'Co znaczy „a horse”?', say: ['Co znaczy', ['a horse', 'en'], '?'], options: ['koń', 'krowa', 'owca'], answer: 0, explain: 'a horse – koń 🐴.', sayExplain: [['a horse', 'en'], 'to koń.'] },
    },
    {
      title: 'W zoo: big czy small?',
      svg: SVG_BIG,
      text: `<p>W zoo mieszkają ${en('a lion')} – lew 🦁, ${en('an elephant')} – słoń 🐘, ${en('a monkey')} – małpa 🐵 i ${en('a giraffe')} – żyrafa 🦒.</p>
        <p>Możesz opisać zwierzę: ${ei('An elephant is big.')} – słoń jest duży. ${ei('A hamster is small.')} – chomik jest mały.</p>`,
      remember: `${en('big')} – duży · ${en('small')} – mały`,
      hook: `${en('small')} – mały jak ślimak 🐌: oba słowa zaczynają się od „s”.`,
      check: { q: 'Jak powiesz, że mysz jest mała? 🐭', say: 'Jak powiesz, że mysz jest mała?', options: ['It’s small.', 'It’s big.', 'It’s sunny.'], answer: 0, optLang: 'en', explain: 'small – mały.', sayExplain: [['small', 'en'], 'znaczy mały.'] },
    },
    {
      title: 'What’s the weather like? – jaka jest pogoda?',
      svg: cards('Pogoda: sunny – słonecznie, rainy – deszczowo, windy – wietrznie, snowy – śnieżnie, hot – gorąco, cold – zimno', [
        ['☀️', 'sunny', 'słonecznie'], ['🌧️', 'rainy', 'deszczowo'], ['💨', 'windy', 'wietrznie'],
        ['❄️', 'snowy', 'śnieżnie'], ['🥵', 'hot', 'gorąco'], ['🥶', 'cold', 'zimno'],
      ], 3),
      text: `<p>Pytamy: ${en('What’s the weather like?')} Odpowiadamy: ${ei('It’s sunny.')} – jest słonecznie.</p>`,
      hook: `${en('sun')} (słońce) + y = ${en('sunny')}. ${en('rain')} (deszcz) + y = ${en('rainy')}. ${en('snow')} (śnieg) + y = ${en('snowy')}. ☀️🌧️❄️`,
      check: { q: 'Pada deszcz. Jaka jest pogoda?', options: ['It’s rainy.', 'It’s sunny.', 'It’s hot.'], answer: 0, optLang: 'en', explain: 'rain – deszcz, rainy – deszczowo.', sayExplain: [['rain', 'en'], 'to deszcz,', ['rainy', 'en'], 'to deszczowo.'] },
    },
    {
      title: 'Pory roku – seasons',
      svg: cards('Pory roku: spring – wiosna, summer – lato, autumn – jesień, winter – zima', [
        ['🌷', 'spring', 'wiosna'], ['🏖️', 'summer', 'lato'], ['🍂', 'autumn', 'jesień'], ['⛄', 'winter', 'zima'],
      ], 4),
      text: `<p>Rok ma cztery pory roku. Wiosną kwitną kwiaty – ${en('flowers')}. Jesienią z drzew – ${en('trees')} – spadają liście.</p>`,
      remember: `${en('spring')}, ${en('summer')}, ${en('autumn')}, ${en('winter')}`,
      check: { q: 'Kiedy lepimy bałwana? ⛄', say: 'Kiedy lepimy bałwana?', options: ['in winter', 'in summer', 'in spring'], answer: 0, optLang: 'en', explain: 'Bałwana lepimy zimą – in winter.', sayExplain: ['Bałwana lepimy zimą –', ['in winter', 'en']] },
    },
  ];

  // ------------------------------------------------------------------
  const SVG_DNI = `<svg viewBox="0 0 400 300" role="img" aria-label="Dni tygodnia: Monday poniedziałek, Tuesday wtorek, Wednesday środa, Thursday czwartek, Friday piątek, Saturday sobota, Sunday niedziela. Sobota i niedziela to weekend">
      ${[['Monday', 'poniedziałek'], ['Tuesday', 'wtorek'], ['Wednesday', 'środa'], ['Thursday', 'czwartek'], ['Friday', 'piątek'], ['Saturday', 'sobota'], ['Sunday', 'niedziela']].map(([a, b], k) => `
        <rect x="6" y="${6 + k * 41}" width="300" height="35" rx="8" class="${k < 5 ? 'f1 s1' : 'f2 s2'} sw"/>
        <text x="20" y="${30 + k * 41}" class="tx-b">${a}</text>
        <text x="170" y="${30 + k * 41}" class="tx">${b}</text>`).join('')}
      <text x="356" y="235" class="tx-b t2" text-anchor="middle">weekend</text>
      <text x="356" y="260" class="tx" text-anchor="middle" style="font-size:24px">🎉</text>
      <text x="356" y="110" class="tx" text-anchor="middle" style="font-size:24px">🎒</text>
      <text x="356" y="140" class="tx-s" text-anchor="middle">szkoła</text>
    </svg>`;

  L['angielski/zabawy'] = [
    {
      title: 'Dni tygodnia',
      svg: SVG_DNI,
      text: `<p>Tydzień ma 7 dni. Po angielsku dni tygodnia piszemy <b>wielką literą</b>: ${ei('Monday')}, ${ei('Friday')}.</p>
        <p>Sobota i niedziela to ${en('weekend')}.</p>`,
      remember: 'Po angielsku: <b>M</b>onday – wielka litera. Po polsku: poniedziałek – mała.',
      hook: `${en('Sunday')} to „dzień słońca” – ${en('sun')} ☀️. ${en('Monday')} to „dzień księżyca” – ${en('moon')} 🌙.`,
      check: { q: 'Jaki dzień jest po środzie?', options: ['Thursday', 'Tuesday', 'Monday'], answer: 0, optLang: 'en', explain: 'Po środzie (Wednesday) jest czwartek – Thursday.', sayExplain: ['Po środzie jest czwartek –', ['Thursday', 'en']] },
    },
    {
      title: 'Zabawki – toys',
      svg: cards('Zabawki: ball – piłka, teddy bear – miś, car – samochód, kite – latawiec, bike – rower', [
        ['⚽', 'a ball', 'piłka'], ['🧸', 'teddy bear', 'miś'], ['🚗', 'a car', 'samochód'],
        ['🪁', 'a kite', 'latawiec'], ['🚲', 'a bike', 'rower'],
      ], 3),
      text: `<p>Zabawki to ${en('toys')}. Lalka to ${en('a doll')}. Zapraszasz kolegę do zabawy: ${en('Let’s play!')} – pobawmy się!</p>`,
      hook: `${en('teddy bear')} – ${en('bear')} to niedźwiedź 🐻. Miś to mały pluszowy niedźwiadek.`,
      check: { q: 'Co znaczy „a ball”?', say: ['Co znaczy', ['a ball', 'en'], '?'], options: ['piłka', 'lalka', 'latawiec'], answer: 0, explain: 'a ball – piłka ⚽.', sayExplain: [['a ball', 'en'], 'to piłka.'] },
    },
    {
      title: 'Ruch i sport',
      svg: cards('Czynności: swim – pływać, run – biegać, jump – skakać, football – piłka nożna, dance – tańczyć, sing – śpiewać', [
        ['🏊', 'swim', 'pływać'], ['🏃', 'run', 'biegać'], ['🤸', 'jump', 'skakać'],
        ['⚽', 'football', 'piłka nożna'], ['💃', 'dance', 'tańczyć'], ['🎤', 'sing', 'śpiewać'],
      ], 3),
      text: `<p>Te słowa mówią, co robisz. Grać w piłkę nożną to ${ei('play football')}. Jeździć na rowerze – ${ei('ride a bike')}.</p>`,
      hook: 'Pokaż słowo ruchem! Powiedz <b lang="en">jump</b> i podskocz 🤸, powiedz <b lang="en">swim</b> i „popłyń” rękami.',
    },
    {
      title: 'I can – umiem!',
      svg: list('I can swim – umiem pływać. I can’t dance – nie umiem tańczyć. Can you run? Yes, I can', [
        ['✔️', 'I can swim.', 'Umiem pływać.'],
        ['❌', 'I can’t dance.', 'Nie umiem tańczyć.'],
        ['❓', 'Can you run?', 'Umiesz biegać?'],
        ['🙂', 'Yes, I can.', 'Tak, umiem.'],
      ], 220),
      text: `<p>${ei('I can…')} – umiem, potrafię. ${ei('I can’t…')} – nie umiem.</p>
        <p>Pytasz: ${en('Can you…?')} Odpowiedź: ${ei('Yes, I can.')} albo ${ei('No, I can’t.')}</p>`,
      remember: `${en('I can')} ✔️ · ${en('I can’t')} ❌`,
      check: { q: 'Jak powiesz „umiem skakać”?', options: ['I can jump.', 'I can’t jump.', 'I like jump.'], answer: 0, optLang: 'en', explain: 'I can – umiem, jump – skakać.', sayExplain: [['I can', 'en'], 'to umiem,', ['jump', 'en'], 'to skakać.'] },
    },
  ];

  // ------------------------------------------------------------------
  const SVG_JEZYKI = `<svg viewBox="0 0 400 170" role="img" aria-label="Dziecko z Polski mówi Cześć!, dziecko z Wielkiej Brytanii mówi Hello! – różne języki, to samo powitanie">
      <rect x="14" y="14" width="160" height="60" rx="16" class="f2 s2 sw"/>
      <rect x="226" y="14" width="160" height="60" rx="16" class="f1 s1 sw"/>
      <text x="94" y="52" class="tx-b" text-anchor="middle">Cześć!</text>
      <text x="306" y="52" class="tx-b" text-anchor="middle">Hello!</text>
      <text x="94" y="120" class="tx" text-anchor="middle" style="font-size:36px">🧒</text>
      <text x="306" y="120" class="tx" text-anchor="middle" style="font-size:36px">🧒</text>
      <text x="94" y="156" class="tx" text-anchor="middle">po polsku</text>
      <text x="306" y="156" class="tx" text-anchor="middle">po angielsku</text>
      <text x="200" y="104" class="tx-b t3" text-anchor="middle">=</text>
    </svg>`;

  L['angielski/swieta'] = [
    {
      title: 'Życzenia',
      svg: list('Życzenia: Happy birthday – urodziny, Merry Christmas – Boże Narodzenie, Happy Easter – Wielkanoc, Happy New Year – Nowy Rok', [
        ['🎂', 'Happy birthday!', 'urodziny'],
        ['🎄', 'Merry Christmas!', 'Boże Narodzenie'],
        ['🐣', 'Happy Easter!', 'Wielkanoc'],
        ['🎆', 'Happy New Year!', 'Nowy Rok'],
      ]),
      text: `<p>W urodziny mówisz ${en('Happy birthday!')}. W Boże Narodzenie – ${en('Merry Christmas!')}. W Wielkanoc – ${en('Happy Easter!')}</p>
        <p>Pod choinką – ${en('a Christmas tree')} – leżą prezenty: ${en('presents')} 🎁.</p>`,
      hook: `${en('Happy')} znaczy „szczęśliwy” 😀 – składasz komuś życzenia szczęścia.`,
      check: { q: 'Siostra ma urodziny. Co powiesz?', options: ['Happy birthday!', 'Merry Christmas!', 'Happy Easter!'], answer: 0, optLang: 'en', explain: 'W urodziny mówimy Happy birthday!', sayExplain: ['W urodziny mówimy', ['Happy birthday!', 'en']] },
    },
    {
      title: 'Ludzie mówią różnymi językami',
      svg: SVG_JEZYKI,
      text: `<p>Na świecie ludzie mówią różnymi językami. Ty mówisz po polsku – ${ei('I speak Polish')}.</p>
        <p>Gdy znasz język kolegi z innego kraju, łatwiej się dogadacie. Dlatego uczysz się angielskiego – ${en('English')}.</p>`,
      remember: `${en('Poland')} – Polska · ${en('Polish')} – polski · ${en('English')} – angielski`,
    },
    {
      title: 'Gdzie mówi się po angielsku?',
      svg: list('Po angielsku mówi się między innymi w Wielkiej Brytanii, Irlandii, Stanach Zjednoczonych i Australii', [
        ['🇬🇧', 'the UK', 'Wielka Brytania'],
        ['🇮🇪', 'Ireland', 'Irlandia'],
        ['🇺🇸', 'the USA', 'Stany Zjednoczone'],
        ['🇦🇺', 'Australia', 'Australia'],
      ], 190),
      text: `<p>Po angielsku mówi się w wielu krajach, na przykład w <b>Wielkiej Brytanii</b>, w <b>Irlandii</b>, w <b>Stanach Zjednoczonych</b> i w <b>Australii</b>.</p>
        <p>Stolica Wielkiej Brytanii to <b>Londyn</b> – ${en('London')}.</p>`,
      hook: 'Język <b>angielski</b> wziął nazwę od Anglii – części Wielkiej Brytanii. 🇬🇧',
      check: { q: 'Jak nazywa się stolica Wielkiej Brytanii?', options: ['Londyn', 'Warszawa', 'Dublin'], answer: 0, explain: 'Stolica Wielkiej Brytanii to Londyn – London.', sayExplain: ['Stolica Wielkiej Brytanii to Londyn –', ['London', 'en']] },
    },
    {
      title: 'W baśni – fairy tales',
      svg: cards('Z baśni: king – król, princess – księżniczka, dragon – smok, castle – zamek', [
        ['👑', 'a king', 'król'], ['👸', 'a princess', 'księżniczka'], ['🐉', 'a dragon', 'smok'], ['🏰', 'a castle', 'zamek'],
      ], 4),
      text: `<p>Baśnie to ${en('fairy tales')}. Mieszkają w nich król, królowa – ${en('a queen')}, księżniczka, a czasem smok!</p>
        <p>${ei('The king lives in a castle.')} – Król mieszka w zamku.</p>`,
      hook: `${en('king')} i ${en('queen')} – jak król i dama w kartach 🃏.`,
      check: { q: 'Co znaczy „a dragon”?', say: ['Co znaczy', ['a dragon', 'en'], '?'], options: ['smok', 'zamek', 'król'], answer: 0, explain: 'a dragon – smok 🐉.', sayExplain: [['a dragon', 'en'], 'to smok.'] },
    },
  ];
})();
