/* Język angielski – klasa 3: słuchanie (listening), czytanie (reading) i dyktando słówek
 * (Dz.U. 2024 poz. 996, zał. 1, I etap, X. Edukacja językowa – język obcy nowożytny, wymagania 2, 3 i 5).
 * Nagrania, teksty i zdania czyta głos angielski syntezatora mowy. Słowa tylko z działów angielskiego klasy 3
 * (js/dane/kl3/angielski.js); nagrania, teksty i zadania napisane do aplikacji.
 * Dyktando: odpowiedź sprawdzana dokładnie, z wielkością liter (kropka i wykrzyknik na końcu są pomijane);
 * pojedyncze słowa można wpisać małą albo wielką literą, rzeczowniki także z a / an. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), X. Edukacja językowa – język obcy nowożytny';
  const WYBOR = ' Słowa i zwroty z działów angielskiego tej ścieżki (wybór redakcyjny, angielski brytyjski). Nagrania napisane do aplikacji.';
  const LISTEN = `${PP}: 2. rozumie bardzo proste wypowiedzi ustne, artykułowane wyraźnie i powoli, w standardowej odmianie języka`;
  const WRITE = `${PP}: 5. w zakresie wypowiedzi pisemnych`;

  // ------------------------------------------------------------------ Słuchanie
  window.EXERCISES.push({
    subject: 'angielski', mode: 'listening', id: '4r6tlg',
    title: 'Posłuchaj i wybierz',
    kind: 'Krótkie nagrania · polecenia, zwierzęta, kolory',
    basis: `${LISTEN}: 2.1 (reaguje na polecenia), 2.3 (znajduje w wypowiedzi określone informacje); tematy z wym. 1: 1 (ja i moi bliscy), 3 (moja szkoła), 6 (jedzenie), 12 (przyroda wokół mnie).${WYBOR}`,
    source: 'Nagrania napisane do aplikacji.',
    intro: 'Kliknij ▶ i posłuchaj. Każde nagranie jest krótkie. Potem wybierz dobrą odpowiedź.',
    audio: [
      { label: 'Nagranie 1', voices: { Pani: 'f' }, lines: [{ who: 'Pani', text: 'Stand up, please!' }] },
      { label: 'Nagranie 2', voices: { Tom: 'm' }, lines: [{ who: 'Tom', text: 'Look! It’s a big elephant!' }] },
      {
        label: 'Nagranie 3', voices: { Ola: 'f', Tom: 'm' },
        lines: [{ who: 'Ola', text: 'What colour is your pencil?' }, { who: 'Tom', text: 'It’s green.' }],
      },
      {
        label: 'Nagranie 4', voices: { Tom: 'm', Lily: 'f' },
        lines: [{ who: 'Tom', text: 'How old are you?' }, { who: 'Lily', text: 'I’m eight.' }],
      },
      { label: 'Nagranie 5', voices: { Lily: 'f' }, lines: [{ who: 'Lily', text: 'Oh no! It’s rainy and cold today.' }] },
      {
        label: 'Nagranie 6', voices: { Tom: 'm', Mama: 'f' },
        lines: [{ who: 'Tom', text: 'Can I have an apple, please?' }, { who: 'Mama', text: 'Here you are.' }, { who: 'Tom', text: 'Thank you!' }],
      },
    ],
    items: [
      {
        id: '1pz97g', q: 'Nagranie 1. Co mówi pani?',
        options: ['Wstań.', 'Usiądź.', 'Słuchaj.', 'Otwórz okno.'], answer: 0,
        explain: '„Stand up, please!” – Wstań, proszę! (Usiądź to „Sit down”, a słuchaj – „Listen”).',
      },
      {
        id: '6gsivl', q: 'Nagranie 2. Jakie zwierzę widzi Tom?',
        options: ['🦁 lew', '🐘 słoń', '🐴 koń', '🐷 świnia'], answer: 1,
        explain: '„Look! It’s a big elephant!” – Patrz! To duży słoń!',
      },
      {
        id: 'z83uaa', q: 'Nagranie 3. Jakiego koloru jest ołówek Toma?',
        options: ['🔴 czerwony', '🔵 niebieski', '🟡 żółty', '🟢 zielony'], answer: 3,
        explain: '„What colour is your pencil?” – „It’s green.” Green to zielony.',
      },
      {
        id: 'snnf8t', q: 'Nagranie 4. Ile lat ma Lily?',
        options: ['6', '7', '8', '9'], answer: 2,
        explain: '„How old are you?” – „I’m eight.” Eight to 8.',
      },
      {
        id: 'gljfgw', q: 'Nagranie 5. Jaka jest dziś pogoda?',
        options: ['☀️ słonecznie i ciepło', '🌧️ pada deszcz i jest zimno', '❄️ pada śnieg', '🌬️ wieje wiatr'], answer: 1,
        explain: '„It’s rainy and cold today.” – Dziś pada deszcz i jest zimno.',
      },
      {
        id: 'y7kdgl', q: 'Nagranie 6. O co prosi Tom?',
        options: ['🍎 o jabłko', '🍌 o banana', '🍊 o pomarańczę', '🍦 o lody'], answer: 0,
        explain: '„Can I have an apple, please?” – Czy mogę prosić jabłko? Mama podaje: „Here you are”.',
      },
    ],
  });

  window.EXERCISES.push({
    subject: 'angielski', mode: 'listening', id: 'k6v0o9',
    title: 'Tom mówi o sobie',
    kind: 'Krótka wypowiedź · ja i moi bliscy',
    basis: `${LISTEN}: 2.2 (rozumie sens krótkich wypowiedzi), 2.3 (znajduje w wypowiedzi określone informacje); tematy z wym. 1: 1 (ja i moi bliscy), 10 (sport), 12 (przyroda wokół mnie); por. 6.2 (przedstawia siebie i inne osoby).${WYBOR}`,
    source: 'Nagranie napisane do aplikacji.',
    intro: 'Tom opowiada o sobie. Posłuchaj dwa razy i wybierz dobre odpowiedzi.',
    audio: [
      {
        label: 'Nagranie', voices: { Tom: 'm' },
        lines: [
          { who: 'Tom', text: 'Hello! My name is Tom.' },
          { who: 'Tom', text: 'I’m nine. I’m from London.' },
          { who: 'Tom', text: 'This is my sister. Her name is Amy. She’s six.' },
          { who: 'Tom', text: 'I like football. I can swim, too.' },
          { who: 'Tom', text: 'This is my dog, Max. He’s small and he’s happy!' },
        ],
      },
    ],
    items: [
      {
        id: '4c24r0', q: 'Ile lat ma Tom?',
        options: ['6', '8', '9', '12'], answer: 2,
        explain: '„I’m nine.” – Mam dziewięć lat. Sześć lat (six) ma jego siostra.',
      },
      {
        id: 'il4jje', q: 'Skąd jest Tom?',
        options: ['z Polski', 'z Londynu', 'z Dublina', 'z Paryża'], answer: 1,
        explain: '„I’m from London.” – Jestem z Londynu. Londyn to stolica Wielkiej Brytanii.',
      },
      {
        id: 'tumsnj', q: 'Kim jest Amy?',
        options: ['mamą Toma', 'koleżanką Toma', 'siostrą Toma', 'babcią Toma'], answer: 2,
        explain: '„This is my sister. Her name is Amy.” – To moja siostra. Ma na imię Amy.',
      },
      {
        id: '6a49z7', q: 'Co lubi Tom?',
        options: ['⚽ piłkę nożną', '🪁 latawce', '🧸 misie', '🍦 lody'], answer: 0,
        explain: '„I like football.” – Lubię piłkę nożną. Umie też pływać: „I can swim, too”.',
      },
      {
        id: 'qors2o', q: 'Prawda czy fałsz?\nPies Max jest duży.',
        options: ['Prawda', 'Fałsz'], answer: 1,
        explain: '„He’s small and he’s happy!” – Max jest mały (small) i wesoły. Duży to „big”.',
      },
    ],
  });

  window.EXERCISES.push({
    subject: 'angielski', mode: 'listening', id: 'xnxi8p',
    title: 'Krótkie rozmowy',
    kind: 'Dialogi · sklep, urodziny, dni tygodnia, pory roku',
    basis: `${LISTEN}: 2.2 (rozumie sens krótkich wypowiedzi), 2.3 (znajduje w wypowiedzi określone informacje); tematy z wym. 1: 5 (mój dzień, moje zabawy), 6 (jedzenie), 7 (sklep), 9 (święta i tradycje), 12 (przyroda wokół mnie); por. 6.3–6.5 (pytania i odpowiedzi, zwroty grzecznościowe, upodobania).${WYBOR}`,
    source: 'Nagrania napisane do aplikacji.',
    intro: 'Posłuchaj czterech krótkich rozmów. Do każdej wybierz dobrą odpowiedź.',
    audio: [
      {
        label: 'Rozmowa 1', voices: { Tom: 'm', Sprzedawczyni: 'f' },
        lines: [
          { who: 'Tom', text: 'Hello! Can I have milk, please?' },
          { who: 'Sprzedawczyni', text: 'Here you are.' },
          { who: 'Tom', text: 'Thank you! Goodbye!' },
        ],
      },
      {
        label: 'Rozmowa 2', voices: { Tata: 'm', Anna: 'f' },
        lines: [
          { who: 'Tata', text: 'Happy birthday, Anna! This is your present.' },
          { who: 'Anna', text: 'Oh, a teddy bear! Thank you, Dad!' },
        ],
      },
      {
        label: 'Rozmowa 3', voices: { Lily: 'f', Tom: 'm' },
        lines: [
          { who: 'Lily', text: 'What day is it today?' },
          { who: 'Tom', text: 'It’s Sunday!' },
        ],
      },
      {
        label: 'Rozmowa 4', voices: { Tom: 'm', Ola: 'f' },
        lines: [
          { who: 'Tom', text: 'Do you like winter?' },
          { who: 'Ola', text: 'No, I don’t. It’s cold! I like summer. I can swim in summer.' },
        ],
      },
    ],
    items: [
      {
        id: 'caveuz', q: 'Rozmowa 1. Co kupuje Tom?',
        options: ['🍞 chleb', '🧀 ser', '🥛 mleko', '🧃 sok'], answer: 2,
        explain: '„Can I have milk, please?” – Czy mogę prosić mleko? Milk to mleko.',
      },
      {
        id: 'stp1nw', q: 'Rozmowa 2. Co dostała Anna na urodziny?',
        options: ['🪁 latawiec', '🧸 misia', '⚽ piłkę', '🚲 rower'], answer: 1,
        explain: '„Oh, a teddy bear!” – O, miś! Teddy bear to pluszowy miś.',
      },
      {
        id: 'xoe9uz', q: 'Rozmowa 3. Jaki jest dziś dzień?',
        options: ['poniedziałek', 'środa', 'sobota', 'niedziela'], answer: 3,
        explain: '„It’s Sunday!” – Jest niedziela! (Saturday to sobota, Monday – poniedziałek, Wednesday – środa).',
      },
      {
        id: 'o2119k', q: 'Rozmowa 4. Jaką porę roku lubi Ola?',
        options: ['🌸 wiosnę', '☀️ lato', '🍂 jesień', '❄️ zimę'], answer: 1,
        explain: '„I like summer.” – Lubię lato. Zimy (winter) nie lubi, bo jest zimno.',
      },
      {
        id: 'z94pp2', q: 'Rozmowa 4. Prawda czy fałsz?\nOla umie pływać.',
        options: ['Prawda', 'Fałsz'], answer: 0,
        explain: '„I can swim in summer.” – Latem pływam. „I can swim” znaczy: umiem pływać.',
      },
    ],
  });

  // ------------------------------------------------------------------ Dyktando słówek
  // słowo: [mała litera, wielka litera]; z przedimkiem: też „a cat”, „A cat”
  const w = (x) => [x, x[0].toUpperCase() + x.slice(1)];
  const wa = (x, art = 'a') => [...w(x), ...w(`${art} ${x}`)];
  // lektor: słowo – zdanie – słowo (głos angielski)
  const say = (word, sentence) => [[word, 'en'], [sentence, 'en'], [word, 'en']];
  const INTRO = 'Kliknij 🔊, posłuchaj i wpisz słówko po angielsku. Obrazek podpowie ci, co ono znaczy.';

  window.EXERCISES.push({
    subject: 'angielski', mode: 'dyktando', id: 'v2hba6',
    title: 'Słówka: zwierzęta i kolory', kind: 'Pisanie słówek ze słuchu',
    basis: `${WRITE}: 5.2 (pisze pojedyncze wyrazy i zwroty); tematy z wym. 1: 3 (moja szkoła – kolory), 12 (przyroda wokół mnie); por. 7 (nazywa zwierzęta).${WYBOR}`,
    intro: INTRO,
    items: [
      { id: 'h3472o', type: 'input', q: 'Słówko 1 🐱', say: say('cat', 'This is my cat.'), accept: wa('cat'), explain: 'cat – kot. Litery: c, a, t.' },
      { id: '8nfp5z', type: 'input', q: 'Słówko 2 🐶', say: say('dog', 'I like my dog.'), accept: wa('dog'), explain: 'dog – pies. Litery: d, o, g.' },
      { id: '08yxaa', type: 'input', q: 'Słówko 3 🐷', say: say('pig', 'Look! A pig!'), accept: wa('pig'), explain: 'pig – świnia. Litery: p, i, g.' },
      { id: '0i43ru', type: 'input', q: 'Słówko 4 🐮', say: say('cow', 'The cow is big.'), accept: wa('cow'), explain: 'cow – krowa. Na końcu jest litera w: c, o, w.' },
      { id: 'b7f7cj', type: 'input', q: 'Słówko 5 🔴', say: say('red', 'My ball is red.'), accept: w('red'), explain: 'red – czerwony. Litery: r, e, d.' },
      { id: 't98ub1', type: 'input', q: 'Słówko 6 🔵', say: say('blue', 'My pen is blue.'), accept: w('blue'), explain: 'blue – niebieski. Na końcu jest e, którego nie słychać: b, l, u, e.' },
      { id: 'd5lult', type: 'input', q: 'Słówko 7 🟢', say: say('green', 'My book is green.'), accept: w('green'), explain: 'green – zielony. W środku dwa e: g, r, e, e, n.' },
      { id: 'oo054c', type: 'input', q: 'Słówko 8 🟡', say: say('yellow', 'The banana is yellow.'), accept: w('yellow'), explain: 'yellow – żółty. W środku dwa l: y, e, l, l, o, w.' },
    ],
  });

  window.EXERCISES.push({
    subject: 'angielski', mode: 'dyktando', id: 'x5xx40',
    title: 'Słówka: szkoła i jedzenie', kind: 'Pisanie słówek ze słuchu',
    basis: `${WRITE}: 5.2 (pisze pojedyncze wyrazy i zwroty); tematy z wym. 1: 3 (moja szkoła), 6 (jedzenie); por. 7 (nazywa przedmioty z najbliższego otoczenia).${WYBOR}`,
    intro: INTRO,
    items: [
      { id: 'f5y38x', type: 'input', q: 'Słówko 1 🖊️', say: say('pen', 'This is my pen.'), accept: wa('pen'), explain: 'pen – długopis. Litery: p, e, n.' },
      { id: '516bv6', type: 'input', q: 'Słówko 2 📕', say: say('book', 'I like my book.'), accept: wa('book'), explain: 'book – książka. W środku dwa o: b, o, o, k.' },
      { id: 'qybu8d', type: 'input', q: 'Słówko 3 📏', say: say('ruler', 'This is a ruler.'), accept: wa('ruler'), explain: 'ruler – linijka. Litery: r, u, l, e, r.' },
      { id: 'wq64bi', type: 'input', q: 'Słówko 4 🪑', say: say('chair', 'This is my chair.'), accept: wa('chair'), explain: 'chair – krzesło. Litery: c, h, a, i, r.' },
      { id: 'pl9eaz', type: 'input', q: 'Słówko 5 🍎', say: say('apple', 'Can I have an apple, please?'), accept: wa('apple', 'an'), explain: 'apple – jabłko. W środku dwa p: a, p, p, l, e. Mówimy „an apple”.' },
      { id: 'l9lrb8', type: 'input', q: 'Słówko 6 🥚', say: say('egg', 'This is an egg.'), accept: wa('egg', 'an'), explain: 'egg – jajko. Na końcu dwa g: e, g, g. Mówimy „an egg”.' },
      { id: 'fm9yzc', type: 'input', q: 'Słówko 7 🥛', say: say('milk', 'I like milk.'), accept: w('milk'), explain: 'milk – mleko. Litery: m, i, l, k.' },
      { id: 'lw0x00', type: 'input', q: 'Słówko 8 💧', say: say('water', 'Can I have water, please?'), accept: w('water'), explain: 'water – woda. Litery: w, a, t, e, r.' },
    ],
  });

  // zdanie czytane dwa razy (głos angielski)
  const twice = (s) => [[s, 'en'], [s, 'en']];
  window.EXERCISES.push({
    subject: 'angielski', mode: 'dyktando', id: 'qissql',
    title: 'Krótkie zdania', kind: 'Pisanie zdań ze słuchu',
    basis: `${WRITE}: 5.2 (pisze pojedyncze wyrazy i zwroty), 5.3 (pisze bardzo proste i krótkie zdania według wzoru i samodzielnie); zwroty z wym. 6.2–6.5.${WYBOR}`,
    intro: 'Kliknij 🔊, posłuchaj i wpisz zdanie po angielsku. Zacznij wielką literą!',
    items: [
      { id: 'nirtqh', type: 'input', q: 'Zdanie 1 👋', say: twice('Hello!'), accept: ['Hello'], explain: 'Hello! – Cześć! Na początku wielka litera H, na końcu dwa l: H, e, l, l, o.' },
      { id: '90yqwa', type: 'input', q: 'Zdanie 2 🙏', say: twice('Thank you.'), accept: ['Thank you'], explain: 'Thank you. – Dziękuję. Dwa wyrazy: Thank i you.' },
      { id: 'ix84cq', type: 'input', q: 'Zdanie 3 🥛', say: twice('I like milk.'), accept: ['I like milk'], explain: 'I like milk. – Lubię mleko. „I” (ja) piszemy zawsze wielką literą.' },
      { id: 'pf2exh', type: 'input', q: 'Zdanie 4 🏊', say: twice('I can swim.'), accept: ['I can swim'], explain: 'I can swim. – Umiem pływać. „I” zawsze wielką literą.' },
      { id: 'gatdo2', type: 'input', q: 'Zdanie 5 👩', say: twice('This is my mum.'), accept: ['This is my mum', 'This is my mom'], explain: 'This is my mum. – To jest moja mama. (Po amerykańsku piszą „mom”).' },
      { id: 'k9wijx', type: 'input', q: 'Zdanie 6 ☀️', say: twice('It’s sunny.'), accept: ['It\'s sunny', 'It is sunny'], explain: 'It’s sunny. – Jest słonecznie. It’s to skrót od „it is”: zamiast i stawiamy apostrof ’.' },
    ],
  });

  // ------------------------------------------------------------------ Czytanie (reading)
  // Tekst: fragmenty po angielsku w elementach z lang="en" (bez zagnieżdżania tego samego znacznika) –
  // przycisk 🔊 „Posłuchaj tekstu” czyta je głosem angielskim (X.3.1: tekst „wspierany obrazem lub dźwiękiem”).
  const READ = `${PP}: 3. rozumie wyrazy oraz jedno- lub kilkuzdaniowe, bardzo proste wypowiedzi pisemne (np. historyjki obrazkowe z tekstem, opowiadania)`;
  const WYBOR_T = WYBOR.replace('Nagrania napisane', 'Teksty napisane');
  const frame = (n, pic, html) => `<div class="frame"><div class="pic" aria-hidden="true"><span class="gapno">${n}</span> ${pic}</div>${html}</div>`;

  window.EXERCISES.push({
    subject: 'angielski', mode: 'reading', id: 'jt6saa',
    title: 'Historyjka: urodziny Lily',
    kind: 'Historyjka obrazkowa · o czym jest, szczegóły',
    basis: `${READ}: 3.1 (rozumie ogólny sens tekstu, szczególnie gdy jest wspierany obrazem lub dźwiękiem), 3.2 (znajduje w wypowiedzi określone informacje); tematy z wym. 1: 1 (ja i moi bliscy), 6 (jedzenie), 9 (święta i tradycje), 11 (moje samopoczucie).${WYBOR_T}`,
    source: 'Historyjka napisana do aplikacji.',
    intro: 'Przeczytaj historyjkę. Jeśli coś jest trudne, kliknij 🔊 i posłuchaj. Potem wybierz dobre odpowiedzi.',
    text: `<div class="story">
      ${frame(1, '🎂🎈', '<p lang="en">Today is Sunday. It’s Lily’s birthday. She is eight!</p>')}
      ${frame(2, '🎁', '<p lang="en">Mum: Happy birthday, Lily! Here you are.<br>Lily: Oh, a bike! Thank you, Mum!</p>')}
      ${frame(3, '👧👦', '<p lang="en">Tom is Lily’s friend. Lily and Tom like ice cream.</p>')}
      ${frame(4, '🌙', '<p lang="en">It’s night. Lily is tired and happy. Good night, Lily!</p>')}
    </div>`,
    items: [
      {
        id: 'jg566a', q: 'O czym jest ta historyjka?',
        options: ['o wycieczce do zoo', 'o urodzinach Lily', 'o pierwszym dniu w szkole', 'o zakupach w sklepie'], answer: 1,
        explain: '„It’s Lily’s birthday.” – To urodziny Lily. Są tort, prezent i życzenia „Happy birthday!”.',
      },
      {
        id: 'ppv973', q: 'Ile lat kończy Lily?',
        options: ['6', '7', '8', '9'], answer: 2,
        explain: '„She is eight!” – Ma osiem lat.',
      },
      {
        id: '7bioeq', q: 'Co Lily dostała od mamy?',
        options: ['🚲 rower', '🧸 misia', '🪁 latawiec', '📕 książkę'], answer: 0,
        explain: '„Oh, a bike!” – O, rower! Bike to rower.',
      },
      {
        id: '59q8fo', q: 'Kim jest Tom?',
        options: ['bratem Lily', 'tatą Lily', 'kolegą Lily', 'dziadkiem Lily'], answer: 2,
        explain: '„Tom is Lily’s friend.” – Tom jest kolegą (przyjacielem) Lily. Friend to przyjaciel, kolega.',
      },
      {
        id: 'zjeadr', q: 'Prawda czy fałsz?\nWieczorem Lily jest smutna.',
        options: ['Prawda', 'Fałsz'], answer: 1,
        explain: '„Lily is tired and happy.” – Lily jest zmęczona i wesoła. Smutny to „sad”.',
      },
    ],
  });

  window.EXERCISES.push({
    subject: 'angielski', mode: 'reading', id: 'pj6kpc',
    title: 'Zgadnij, kim jestem',
    kind: 'Zagadki o zwierzętach · szczegóły',
    basis: `${READ}: 3.2 (znajduje w wypowiedzi określone informacje); tematy z wym. 1: 12 (przyroda wokół mnie); por. 7 (nazywa zwierzęta).${WYBOR_T}`,
    source: 'Zagadki napisane do aplikacji.',
    intro: 'Każde zwierzę mówi o sobie. Przeczytaj zagadki i zgadnij, kto to jest.',
    text: `
      <div class="box"><p><span class="gapno">Zagadka 1</span></p><p lang="en">I’m big. I like water.</p></div>
      <div class="box"><p><span class="gapno">Zagadka 2</span></p><p lang="en">I’m small. I can swim. I can’t run. I live in water.</p></div>
      <div class="box"><p><span class="gapno">Zagadka 3</span></p><p lang="en">I’m brown. I can jump. I like bananas!</p></div>
      <div class="box"><p><span class="gapno">Zagadka 4</span></p><p lang="en">I’m small. I can run and jump. I live in a house with my family.</p></div>`,
    items: [
      {
        id: '37e6c6', q: 'Zagadka 1. Kto to?',
        options: ['🐱 kot', '🐘 słoń', '🐔 kura', '🐹 chomik'], answer: 1,
        explain: '„I’m big.” – Jestem duży. Z tych zwierząt duży jest tylko słoń.',
      },
      {
        id: '9uetid', q: 'Zagadka 2. Kto to?',
        options: ['🐶 pies', '🐴 koń', '🐑 owca', '🐟 ryba'], answer: 3,
        explain: '„I can swim. I can’t run. I live in water.” – Pływam, nie umiem biegać, mieszkam w wodzie. To ryba.',
      },
      {
        id: '89eiht', q: 'Zagadka 3. Kto to?',
        options: ['🐮 krowa', '🦆 kaczka', '🐒 małpa', '🐟 ryba'], answer: 2,
        explain: '„I can jump. I like bananas!” – Skaczę i lubię banany. To małpa.',
      },
      {
        id: 'hxtpgp', q: 'Zagadka 4. Kto to?',
        options: ['🐱 kot', '🐟 ryba', '🦁 lew', '🐘 słoń'], answer: 0,
        explain: '„I’m small. I can run and jump. I live in a house with my family.” – Jestem mały, biegam i skaczę, mieszkam w domu z rodziną. To kot.',
      },
      {
        id: '0pt5hw', q: 'Prawda czy fałsz?\nZwierzę z zagadki 2 umie biegać.',
        options: ['Prawda', 'Fałsz'], answer: 1,
        explain: '„I can’t run.” – Nie umiem biegać. I can’t… – nie umiem…',
      },
    ],
  });

  window.EXERCISES.push({
    subject: 'angielski', mode: 'reading', id: 'u2osvr',
    title: 'Tydzień Toma',
    kind: 'Plan tygodnia · dni i zajęcia',
    basis: `${READ}: 3.2 (znajduje w wypowiedzi określone informacje); tematy z wym. 1: 5 (mój dzień, moje zabawy), 8 (mój czas wolny), 10 (sport); por. 6.5 (wyraża swoje upodobania).${WYBOR_T}`,
    source: 'Tekst napisany do aplikacji.',
    intro: 'Tom pisze, co robi w każdy dzień tygodnia. Przeczytaj i odpowiedz na pytania.',
    text: `
      <div class="box">
        <p lang="en">Hi! I’m Tom. This is my week.</p>
        <p lang="en"><b>Monday:</b> I play football.</p>
        <p lang="en"><b>Tuesday:</b> I sing.</p>
        <p lang="en"><b>Wednesday:</b> I swim.</p>
        <p lang="en"><b>Thursday:</b> I ride a bike.</p>
        <p lang="en"><b>Friday:</b> I dance.</p>
        <p lang="en">I like Wednesday. I like water!</p>
      </div>`,
    items: [
      {
        id: 'maottz', q: 'Co Tom robi w środę?',
        options: ['⚽ gra w piłkę', '🎤 śpiewa', '🏊 pływa', '🚲 jeździ na rowerze'], answer: 2,
        explain: '„Wednesday: I swim.” – Wednesday to środa, swim – pływać.',
      },
      {
        id: 'fmeye3', q: 'Kiedy Tom jeździ na rowerze?',
        options: ['w czwartek', 'w poniedziałek', 'we wtorek', 'w piątek'], answer: 0,
        explain: '„Thursday: I ride a bike.” – Thursday to czwartek.',
      },
      {
        id: 'z01znw', q: 'Co Tom robi w poniedziałek?',
        options: ['💃 tańczy', '⚽ gra w piłkę', '🎤 śpiewa', '🏊 pływa'], answer: 1,
        explain: '„Monday: I play football.” – Monday to poniedziałek, play football – grać w piłkę nożną.',
      },
      {
        id: 'khy4ip', q: 'Który dzień lubi Tom?',
        options: ['poniedziałek', 'wtorek', 'środę', 'piątek'], answer: 2,
        explain: '„I like Wednesday. I like water!” – Lubi środę, bo lubi wodę – w środę pływa.',
      },
      {
        id: '409klp', q: 'Prawda czy fałsz?\nWe wtorek Tom śpiewa.',
        options: ['Prawda', 'Fałsz'], answer: 0,
        explain: '„Tuesday: I sing.” – Tuesday to wtorek, sing – śpiewać.',
      },
    ],
  });
})();
