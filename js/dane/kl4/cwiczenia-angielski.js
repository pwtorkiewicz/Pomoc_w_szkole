/* Klasa 4 – zestawy ćwiczeń z języka angielskiego: Reading i Listening (poziom A1).
 * Teksty, nagrania i zadania napisano do aplikacji; postacie są wymyślone. Słownictwo
 * i struktury z działów klasy 4 (be, have got, can, present simple i continuous,
 * some/any, there is/are, przyimki miejsca, godziny). Nagrania czyta syntezator mowy.
 * Opcje zadań zamkniętych nie są tasowane – poprawne odpowiedzi rozłożone na różne litery. */
window.EXERCISES = window.EXERCISES || [];

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: 'ub7pyo',
  title: 'E-mail od nowego kolegi',
  kind: 'E-mail · główna myśl i szczegóły',
  basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 3 (rozumie bardzo proste wypowiedzi pisemne, np. e-maile): 3.1 (główna myśl, intencja autora), 3.2 (określone informacje); tematy z wym. 1: człowiek, życie prywatne (rodzina, czas wolny), edukacja, świat przyrody (zwierzęta).',
  source: 'Tekst napisany do aplikacji.',
  intro: 'Przeczytaj e-mail. Polecenia są po polsku, odpowiedzi – po angielsku.',
  text: `
    <div class="box" lang="en">
      <p>Hi Kasia,</p>
      <p>My name is Tom and I’m your new e-pal! I’m ten years old and I’m from Manchester. It’s a big city in England.</p>
      <p>I’ve got a sister, Lucy. She’s seven. We’ve got a dog, Max. He’s black and white and he can run very fast!</p>
      <p>I go to school by bus. My favourite subject is Science. On Mondays and Wednesdays I play football after school. I can’t swim very well, but I’m learning.</p>
      <p>What about you? Have you got any brothers or sisters? Can you send me a photo of your town?</p>
      <p>Bye for now,<br>Tom</p>
    </div>`,
  items: [
    {
      id: 'gujwgo',
      q: 'Skąd jest Tom?',
      options: ['London', 'Manchester', 'Dublin', 'Washington'],
      answer: 1,
      explain: '„I’m from Manchester. It’s a big city in England.”',
    },
    {
      id: 'b8keyx',
      q: 'Kim jest Lucy?',
      options: ['Tom’s mum', 'Tom’s dog', 'Tom’s sister', 'Tom’s teacher'],
      answer: 2,
      explain: '„I’ve got a sister, Lucy.” – Lucy to siostra Toma. Pies ma na imię Max.',
    },
    {
      id: '9tkkwm',
      q: 'Prawda czy fałsz?\nPies Toma umie bardzo szybko biegać.',
      options: ['Prawda', 'Fałsz'],
      answer: 0,
      explain: '„He can run very fast!” – on umie bardzo szybko biegać.',
    },
    {
      id: 'i46i6c',
      q: 'Jak Tom dojeżdża do szkoły?',
      options: ['by bike', 'on foot', 'by car', 'by bus'],
      answer: 3,
      explain: '„I go to school by bus.” – autobusem.',
    },
    {
      id: 'bvq582',
      q: 'Co Tom robi w poniedziałki i środy po szkole?',
      options: ['He plays football.', 'He swims.', 'He walks the dog.', 'He plays computer games.'],
      answer: 0,
      explain: '„On Mondays and Wednesdays I play football after school.”',
    },
    {
      id: '6z401r',
      type: 'input',
      q: 'Czego Tom nie umie jeszcze robić dobrze? Wpisz jeden czasownik po angielsku.',
      accept: ['swim', 'swimming'],
      explain: '„I can’t swim very well, but I’m learning.” – swim = pływać.',
    },
    {
      id: '20v43v',
      q: 'Jaki jest główny cel e-maila?',
      options: ['zaprosić Kasię na urodziny', 'przedstawić się i poznać Kasię', 'przeprosić za spóźnienie', 'opisać wycieczkę do zoo'],
      answer: 1,
      explain: 'Tom pisze o sobie i swojej rodzinie, a na końcu pyta Kasię o jej rodzinę – chce się zapoznać.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: 'cvqkzc',
  title: 'Napisy, ogłoszenia i SMS',
  kind: 'Krótkie teksty · kontekst i szczegóły',
  basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 3 (rozumie bardzo proste wypowiedzi pisemne, np. napisy, ogłoszenia, SMS-y, jadłospisy): 3.1 (kontekst, intencja autora), 3.2 (określone informacje); tematy z wym. 1: edukacja, żywienie, zakupy, życie prywatne.',
  source: 'Teksty napisane do aplikacji.',
  intro: 'Przeczytaj pięć krótkich tekstów (1–5) i rozwiąż zadania.',
  text: `
    <div lang="en">
      <div class="box"><p><span class="gapno">1</span> <b>LIBRARY</b><br>Please be quiet. No food or drinks.</p></div>
      <div class="box"><p><span class="gapno">2</span> <b>SCHOOL TRIP TO THE ZOO</b><br>Friday, 9 o’clock. Bring a packed lunch and a raincoat!</p></div>
      <div class="box"><p><span class="gapno">3</span> <b>FOR SALE</b><br>Blue bike, two years old – only £40! Ask Sam in class 5B.</p></div>
      <div class="box"><p><span class="gapno">4</span> <b>CAFÉ</b><br>Today’s special: tomato soup and a cheese sandwich – £5</p></div>
      <div class="box"><p><span class="gapno">5</span> Mum, I’m at Jake’s house. We’re doing our homework. Can you pick me up at six? Love, Ben</p></div>
    </div>`,
  items: [
    {
      id: 'khvmwv',
      q: 'Tekst 1. Czego nie wolno robić w tym miejscu?',
      options: ['czytać książek', 'siedzieć przy stole', 'jeść i pić', 'pisać w zeszycie'],
      answer: 2,
      explain: '„No food or drinks.” – nie wolno jeść ani pić. „Please be quiet” – prosimy o ciszę.',
    },
    {
      id: '7diomu',
      q: 'Tekst 2. Co uczniowie mają zabrać na wycieczkę?',
      options: ['a packed lunch and a raincoat', 'a camera and a hat', 'money and a ticket', 'a book and a pencil'],
      answer: 0,
      explain: '„Bring a packed lunch and a raincoat!” – drugie śniadanie i płaszcz przeciwdeszczowy.',
    },
    {
      id: 'c61f01',
      type: 'input',
      q: 'Tekst 3. Ile funtów kosztuje rower? Wpisz liczbę.',
      accept: ['40', '£40', '40 funtów', '40 pounds', 'forty'],
      explain: '„Only £40” – 40 funtów.',
    },
    {
      id: '1l8efe',
      q: 'Tekst 4. Co jest dziś daniem dnia w kawiarni?',
      options: ['pizza and orange juice', 'tomato soup and a cheese sandwich', 'chicken and chips', 'a chocolate cake'],
      answer: 1,
      explain: '„Today’s special: tomato soup and a cheese sandwich.”',
    },
    {
      id: 'hmf7yp',
      q: 'Tekst 5. Co Ben robi teraz?',
      options: ['He’s playing football.', 'He’s watching TV.', 'He’s sleeping.', 'He’s doing homework with Jake.'],
      answer: 3,
      explain: '„I’m at Jake’s house. We’re doing our homework.” – present continuous: to, co dzieje się teraz.',
    },
    {
      id: 'nyruio',
      q: 'Tekst 5. O co Ben prosi mamę?',
      options: ['żeby kupiła mu rower', 'żeby odebrała go o szóstej', 'żeby pozwoliła mu nocować u Jake’a', 'żeby pomogła mu w lekcjach'],
      answer: 1,
      explain: '„Can you pick me up at six?” – czy możesz mnie odebrać o szóstej?',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'bet51h',
  title: 'W sklepie i w mieście',
  kind: 'Krótkie dialogi · wybór odpowiedzi',
  basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 2 (rozumie bardzo proste wypowiedzi ustne, artykułowane wyraźnie i powoli): 2.2 (kontekst, sytuacja), 2.3 (określone informacje); tematy z wym. 1: zakupy, podróżowanie (orientacja w terenie), życie prywatne (określanie czasu).',
  source: 'Nagrania napisane do aplikacji.',
  intro: 'Posłuchaj czterech krótkich dialogów. Do każdego wybierz właściwą odpowiedź. Każdego nagrania posłuchaj dwa razy.',
  audio: [
    {
      label: 'Dialog 1',
      voices: { A: 'm', B: 'f' },
      lines: [
        { who: 'A', text: 'Hello. Can I help you?' },
        { who: 'B', text: 'Yes, please. I’d like some apples.' },
        { who: 'A', text: 'How many?' },
        { who: 'B', text: 'Six, please. And have you got any bananas?' },
        { who: 'A', text: 'Sorry, we haven’t got any bananas today.' },
      ],
    },
    {
      label: 'Dialog 2',
      voices: { A: 'f', B: 'm' },
      lines: [
        { who: 'A', text: 'Excuse me, where is the post office?' },
        { who: 'B', text: 'It’s in Green Street. It’s next to the bank, opposite the park.' },
        { who: 'A', text: 'Thank you very much!' },
      ],
    },
    {
      label: 'Dialog 3',
      voices: { A: 'm', B: 'f' },
      lines: [
        { who: 'A', text: 'Hi, Mia! What are you doing?' },
        { who: 'B', text: 'I’m making a cake. It’s Dad’s birthday today!' },
      ],
    },
    {
      label: 'Dialog 4',
      voices: { A: 'f', B: 'm' },
      lines: [
        { who: 'A', text: 'What time is it, Leo?' },
        { who: 'B', text: 'It’s half past four.' },
        { who: 'A', text: 'Oh no! My piano lesson is at five!' },
      ],
    },
  ],
  items: [
    {
      id: 'yyamy1',
      q: 'Dialog 1. Czego dziś nie ma w sklepie?',
      options: ['apples', 'bananas', 'oranges', 'bread'],
      answer: 1,
      explain: '„Sorry, we haven’t got any bananas today.” – dziś nie ma bananów. Jabłka są – klientka kupuje sześć.',
    },
    {
      id: 'zfxkex',
      q: 'Dialog 2. Gdzie jest poczta?',
      options: ['opposite the bank', 'next to the park', 'between the bank and the park', 'next to the bank'],
      answer: 3,
      explain: '„It’s next to the bank, opposite the park.” – obok banku, naprzeciwko parku.',
    },
    {
      id: 'oqi4ya',
      q: 'Dialog 3. Co robi teraz Mia?',
      options: ['She’s making a cake.', 'She’s buying a present.', 'She’s reading a book.', 'She’s playing the piano.'],
      answer: 0,
      explain: '„I’m making a cake.” – piecze ciasto na urodziny taty.',
    },
    {
      id: 'l46qjv',
      q: 'Dialog 4. Która jest godzina?',
      options: ['5:00', '4:15', '4:30', '5:30'],
      answer: 2,
      explain: '„It’s half past four.” – wpół do piątej, czyli 4:30. O piątej jest lekcja gry na pianinie.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'f3r9se',
  title: 'Oliver opowiada o rodzinie',
  kind: 'Wypowiedź · szczegóły, luki',
  basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 2 (rozumie bardzo proste wypowiedzi ustne): 2.2 (główna myśl), 2.3 (określone informacje); tematy z wym. 1: człowiek, praca (zawody), życie prywatne (rodzina, czas wolny), świat przyrody (zwierzęta).',
  source: 'Nagranie napisane do aplikacji.',
  intro: 'Posłuchaj, jak Oliver opowiada o swojej rodzinie, i rozwiąż zadania. Nagrania posłuchaj dwa razy.',
  audio: [
    {
      label: 'Nagranie',
      voices: { Oliver: 'm' },
      lines: [
        { who: 'Oliver', text: 'Hello! I’m Oliver and this is my family.' },
        { who: 'Oliver', text: 'My brother Harry is twelve. He’s tall and he’s got short brown hair. He can play the guitar.' },
        { who: 'Oliver', text: 'My mum is a doctor. She works in a big hospital.' },
        { who: 'Oliver', text: 'My dad likes cooking. Every Sunday he makes pizza for us.' },
        { who: 'Oliver', text: 'We’ve got a cat. His name is Ginger and he sleeps all day!' },
        { who: 'Oliver', text: 'My grandma lives in the country, near a lake. We visit her in the summer.' },
      ],
    },
  ],
  items: [
    {
      id: 'iujlx7',
      type: 'input',
      q: 'Ile lat ma Harry? Wpisz liczbę.',
      accept: ['12', 'twelve', 'dwanaście'],
      explain: '„My brother Harry is twelve.” – twelve = 12.',
    },
    {
      id: 'cy5uy3',
      q: 'Co umie Harry?',
      options: ['play the piano', 'swim very fast', 'play the guitar', 'cook pizza'],
      answer: 2,
      explain: '„He can play the guitar.” – umie grać na gitarze.',
    },
    {
      id: '0glyub',
      q: 'Kim z zawodu jest mama Olivera?',
      options: ['a doctor', 'a teacher', 'a cook', 'a police officer'],
      answer: 0,
      explain: '„My mum is a doctor. She works in a big hospital.”',
    },
    {
      id: 'q1rkxh',
      type: 'input',
      q: 'Uzupełnij po angielsku: Every Sunday Dad makes ______ .',
      accept: ['pizza'],
      explain: '„Every Sunday he makes pizza for us.”',
    },
    {
      id: '8qsfvp',
      q: 'Prawda czy fałsz?\nKot Olivera, Ginger, przez cały dzień bawi się w ogrodzie.',
      options: ['Prawda', 'Fałsz'],
      answer: 1,
      explain: '„He sleeps all day!” – Ginger cały dzień śpi.',
    },
    {
      id: '3zqcvw',
      q: 'Gdzie mieszka babcia Olivera?',
      options: ['in a big city', 'in the country, near a lake', 'next to Oliver’s school', 'in the mountains'],
      answer: 1,
      explain: '„My grandma lives in the country, near a lake.” – na wsi, niedaleko jeziora.',
    },
  ],
});
