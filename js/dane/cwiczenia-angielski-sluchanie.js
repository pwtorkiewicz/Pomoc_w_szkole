/* Zestawy ćwiczeń z języka angielskiego – Listening (rozumienie ze słuchu, synteza mowy przeglądarki).
 * Nagrania i zadania napisane do aplikacji (nie są to zadania CKE); typy zadań jak w informatorze CKE
 * o egzaminie ósmoklasisty od r. szk. 2024/2025: wybór wielokrotny, dobieranie, luki, reakcje.
 * Kolejność opcji nie jest tasowana – poprawne odpowiedzi rozłożone na różne litery. */
window.EXERCISES = window.EXERCISES || [];

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'i18ja2',
  title: 'Krótkie dialogi na co dzień',
  kind: 'Krótkie teksty · wybór wielokrotny',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny, wariant II.1: II.1–II.6 (rozumienie wypowiedzi ustnych), m.in. II.2 (główna myśl), II.4 (kontekst wypowiedzi), II.5 (określone informacje); tematy I.3, I.5, I.9, I.10. Informator CKE (język angielski, od r. szk. 2024/2025): rozumienie ze słuchu – wybór wielokrotny.',
  intro: 'Usłyszysz dwukrotnie cztery teksty. W zadaniach 1–4, na podstawie informacji zawartych w nagraniu, z podanych odpowiedzi wybierz właściwą.',
  audio: [
    {
      label: 'Tekst 1',
      voices: { A: 'f', B: 'm' },
      lines: [
        { who: 'A', text: 'Excuse me, I’d like to take these two books home. Is that possible?' },
        { who: 'B', text: 'Of course. Can I see your card, please?' },
        { who: 'A', text: 'Here you are. Oh, and do you have the new book about sharks? My friend says they sell it in the shop next to the train station, but it’s very expensive there.' },
        { who: 'B', text: 'We have it, but somebody has borrowed it. It should be back on Friday. I can keep it for you.' },
        { who: 'A', text: 'Great, thanks. When do I have to bring these two back?' },
        { who: 'B', text: 'In three weeks. The date is on this piece of paper.' },
      ],
    },
    {
      label: 'Tekst 2',
      voices: { A: 'm', B: 'f' },
      lines: [
        { who: 'A', text: 'Hi Emma. Are we still going to the cinema on Saturday?' },
        { who: 'B', text: 'Yes, of course! The film starts at a quarter past six.' },
        { who: 'A', text: 'So let’s meet at six o’clock in front of the cinema.' },
        { who: 'B', text: 'Hmm, I want to buy some popcorn first, and there’s always a long queue. Can we meet at half past five?' },
        { who: 'A', text: 'I’ve got a football match until five, so half past five is too early for me. What about a quarter to six?' },
        { who: 'B', text: 'OK, that’s fine. See you then!' },
      ],
    },
    {
      label: 'Tekst 3',
      lines: [
        { text: 'Hi Ben, it’s Lucy. I’m calling about our science project. Last week you borrowed my notebook with all our notes, and Mr Collins wants to see the project tomorrow morning. Could you bring the notebook to my house this evening? I know you’re busy because of your birthday party, so if you can’t come, just put it in my bag at school before the first lesson. Thanks a lot, and see you at your party on Saturday!' },
      ],
    },
    {
      label: 'Tekst 4',
      voices: { A: 'f', B: 'm' },
      lines: [
        { who: 'A', text: 'Hi Jack. You look upset. What’s wrong?' },
        { who: 'B', text: 'Do you remember the tennis tournament? I trained for it all summer, and now I can’t play in it.' },
        { who: 'A', text: 'Oh no! Why not? Are you ill?' },
        { who: 'B', text: 'No, I’m fine. My coach forgot to send my name to the organisers, and now it’s too late.' },
        { who: 'A', text: 'That’s terrible. But there’s another tournament in October, isn’t there?' },
        { who: 'B', text: 'Yes, there is. I’m not worried about the matches at all. I’m just so sad that all my training was for nothing.' },
      ],
    },
  ],
  items: [
    {
      id: '8gz6c2',
      q: '(Tekst 1) Where are the speakers?',
      options: ['in a bookshop', 'in a library', 'at a train station'],
      answer: 1,
      explain: 'Klientka chce wypożyczyć książki („take these two books home”), pokazuje kartę, pyta, kiedy ma je oddać, a pracownik odpowiada: „In three weeks”. To wypożyczenie, nie zakup. Księgarnia i dworzec pojawiają się tylko w zdaniu o sklepie, w którym książka jest droga.',
    },
    {
      id: 'o11tmq',
      q: '(Tekst 2) What time are Emma and her friend going to meet?',
      options: ['at half past five', 'at a quarter past six', 'at a quarter to six'],
      answer: 2,
      explain: 'Kolega Emmy nie może o wpół do szóstej (ma mecz do piątej) i proponuje „a quarter to six” (17:45) – Emma się zgadza: „OK, that’s fine.” O kwadrans po szóstej zaczyna się film.',
    },
    {
      id: 'h0hgoi',
      q: '(Tekst 3) Lucy is calling Ben to',
      options: ['invite him to her birthday party.', 'ask him to give back her notebook.', 'tell him about a new science teacher.'],
      answer: 1,
      explain: 'Lucy prosi: „Could you bring the notebook to my house this evening?” – chce odzyskać zeszyt. Urodziny są Bena, nie jej („your birthday party”), a o nauczycielu mówi tylko, że chce zobaczyć projekt.',
    },
    {
      id: 'k0nuks',
      q: '(Tekst 4) How does Jack feel?',
      options: ['disappointed', 'nervous', 'bored'],
      answer: 0,
      explain: 'Jack trenował całe lato i nie zagra w turnieju: „I’m just so sad that all my training was for nothing” – jest rozczarowany. Zdenerwowanie wyklucza sam: „I’m not worried about the matches at all.”',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'aj6mnb',
  title: 'Sport w moim życiu',
  kind: 'Cztery wypowiedzi · dobieranie',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny, wariant II.1: II.1–II.6 (rozumienie wypowiedzi ustnych), m.in. II.5 (określone informacje); temat I.10 (sport). Informator CKE (język angielski, od r. szk. 2024/2025): rozumienie ze słuchu – dobieranie (jedna opcja nadmiarowa).',
  intro: 'Usłyszysz dwukrotnie cztery wypowiedzi na temat sportu. Do każdej wypowiedzi (1–4) dobierz odpowiadające jej zdanie (A–E). Uwaga! Jedno zdanie zostało podane dodatkowo i nie pasuje do żadnej wypowiedzi.',
  audio: [
    {
      label: 'Wypowiedź 1',
      lines: [
        { text: 'I’ve always loved swimming, but I only started doing it seriously two years ago. Our PE teacher, Mr Green, saw me in the school pool and said I was really fast. He told me about a swimming club in our town and even talked to my parents about it. Now I train there three times a week. I haven’t won any medals yet, but I’m getting better.' },
      ],
    },
    {
      label: 'Wypowiedź 2',
      lines: [
        { text: 'Football was my whole life. I played for the school team for four years, and last year we came second in the city competition. But in March I broke my leg during a match. The doctor said I mustn’t play for at least a year. Now I watch matches on TV with my dad, but I don’t really enjoy it. I want to be on the pitch, not on the sofa!' },
      ],
    },
    {
      label: 'Wypowiedź 3',
      lines: [
        { text: 'My older brother and I go running every Sunday morning. It was his idea. At first I hated it, because I had to get up at seven o’clock, but now it’s my favourite part of the week. We run about five kilometres in the park and then we have breakfast in a little café. My friends think I’m crazy. They prefer sleeping late and watching sport on TV.' },
      ],
    },
    {
      label: 'Wypowiedź 4',
      lines: [
        { text: 'I’m not a very sporty person. I don’t like football or running. But last spring a friend from school took me to a climbing wall, and I loved it immediately. In September I took part in a climbing competition for teenagers in our city, and I got first place! I couldn’t believe it. My parents were so proud of me.' },
      ],
    },
  ],
  items: [
    {
      id: 'nia2ak',
      q: 'Wypowiedź 1. This speaker…',
      options: ['stopped doing a sport because of an injury.', 'does sport with a member of his/her family.', 'won a competition.', 'started doing a sport thanks to a teacher.', 'prefers watching sport on TV to doing it.'],
      answer: 3,
      explain: 'Nauczyciel WF-u zauważył, że ta osoba szybko pływa, i opowiedział jej o klubie: „Our PE teacher, Mr Green, saw me… He told me about a swimming club”. Zawodów jeszcze nie wygrała („I haven’t won any medals yet”).',
    },
    {
      id: '6ai0aw',
      q: 'Wypowiedź 2. This speaker…',
      options: ['stopped doing a sport because of an injury.', 'does sport with a member of his/her family.', 'won a competition.', 'started doing a sport thanks to a teacher.', 'prefers watching sport on TV to doing it.'],
      answer: 0,
      explain: 'Osoba mówiąca złamała nogę i nie może grać: „I broke my leg… I mustn’t play for at least a year.” Pułapki: drużyna była druga, a nie pierwsza („came second”), a mecze w telewizji z tatą jej nie cieszą („I don’t really enjoy it”).',
    },
    {
      id: 'nabzqo',
      q: 'Wypowiedź 3. This speaker…',
      options: ['stopped doing a sport because of an injury.', 'does sport with a member of his/her family.', 'won a competition.', 'started doing a sport thanks to a teacher.', 'prefers watching sport on TV to doing it.'],
      answer: 1,
      explain: 'Osoba mówiąca biega ze starszym bratem: „My older brother and I go running every Sunday morning.” Oglądanie sportu w telewizji wolą jej znajomi, a nie ona.',
    },
    {
      id: '4w9tub',
      q: 'Wypowiedź 4. This speaker…',
      options: ['stopped doing a sport because of an injury.', 'does sport with a member of his/her family.', 'won a competition.', 'started doing a sport thanks to a teacher.', 'prefers watching sport on TV to doing it.'],
      answer: 2,
      explain: 'Osoba mówiąca wygrała zawody wspinaczkowe: „I got first place!” Na ściankę zabrał go kolega ze szkoły, nie nauczyciel. Zdanie E jest nadmiarowe – nie pasuje do żadnej wypowiedzi.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'ybwqx4',
  title: 'Wywiad z młodym fotografem',
  kind: 'Wywiad · uzupełnianie notatki',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny, wariant II.1: II.1–II.6 (rozumienie wypowiedzi ustnych), m.in. II.5 (określone informacje); I (środki językowe – poprawny zapis); tematy I.5 (życie prywatne – zainteresowania), I.13 (świat przyrody). Informator CKE (język angielski, od r. szk. 2024/2025): rozumienie ze słuchu – zadanie z lukami.',
  intro: 'Usłyszysz dwukrotnie wywiad ze zwycięzcą konkursu fotograficznego. Na podstawie informacji zawartych w nagraniu uzupełnij luki 1–5 w notatce. Luki uzupełnij w języku angielskim (jedno–trzy słowa).',
  audio: [
    {
      label: 'Wywiad',
      voices: { Interviewer: 'f', Oliver: 'm' },
      lines: [
        { who: 'Interviewer', text: 'Today our guest is Oliver Hart, the winner of the Young Nature Photographer competition. Oliver, when did you start taking photos?' },
        { who: 'Oliver', text: 'My grandad gave me his old camera when I was eight, but I didn’t use it much. I got my own camera at the age of ten, and that’s when it all started.' },
        { who: 'Interviewer', text: 'What do you like photographing most?' },
        { who: 'Oliver', text: 'Everybody thinks it’s foxes or deer, but my real passion is birds.' },
        { who: 'Interviewer', text: 'And what was the prize?' },
        { who: 'Oliver', text: 'A new camera and a trip to Scotland with a professional photographer.' },
        { who: 'Interviewer', text: 'When is the best time to take photos of birds?' },
        { who: 'Oliver', text: 'Early in the morning, when birds are very active. In the afternoon the light is usually too strong.' },
        { who: 'Interviewer', text: 'And what’s next?' },
        { who: 'Oliver', text: 'People ask me about a book, but that’s too expensive for now. So I’m going to make a calendar with my best photos.' },
      ],
    },
  ],
  items: [
    {
      id: 'as1wzj',
      type: 'input',
      q: 'OLIVER HART – YOUNG NATURE PHOTOGRAPHER. 1. got his own camera at the age of …',
      accept: ['10', 'ten', '10 years', 'ten years', '10 years old', 'ten years old'],
      explain: '„I got my own camera at the age of ten.” Liczba 8 to pułapka – wtedy dostał stary aparat dziadka.',
    },
    {
      id: 'mxa4g0',
      type: 'input',
      q: 'favourite things to photograph: …',
      accept: ['birds', 'wild birds'],
      explain: '„My real passion is birds.” Lisy i jelenie („foxes or deer”) to tylko to, co myślą inni.',
    },
    {
      id: 'u8ht8i',
      type: 'input',
      q: 'prize: a new camera and a trip to …',
      accept: ['Scotland'],
      explain: '„A new camera and a trip to Scotland with a professional photographer.”',
    },
    {
      id: 'yolpjv',
      type: 'input',
      q: 'best time for bird photos: early in the …',
      accept: ['morning'],
      explain: '„Early in the morning, when birds are very active.” Popołudnie odpada – światło jest wtedy za mocne.',
    },
    {
      id: 'antnmj',
      type: 'input',
      q: 'next project: a … with his best photos',
      accept: ['calendar', 'a calendar'],
      explain: '„I’m going to make a calendar with my best photos.” Książka („a book”) jest na razie za droga.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'smvvlm',
  title: 'Jak zareagować?',
  kind: 'Funkcje językowe · reakcje na wypowiedzi',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny, wariant II.1: VI.1–VI.14 (reagowanie ustne), m.in. VI.3 (informacje i wyjaśnienia), VI.10 (prośba o pozwolenie i jego udzielanie); tematy I.1–I.13. Informator CKE (język angielski, od r. szk. 2024/2025): znajomość funkcji językowych – reakcje na wysłuchane krótkie wypowiedzi.',
  intro: 'Usłyszysz dwukrotnie sześć wypowiedzi. Do każdej z nich (1–6) wybierz właściwą reakcję.',
  audio: [
    { label: 'Wypowiedź 1', lines: [{ text: 'I’ve broken my arm, so I can’t go skiing with you next week.' }] },
    { label: 'Wypowiedź 2', lines: [{ text: 'Would you like another piece of chocolate cake?' }] },
    { label: 'Wypowiedź 3', lines: [{ text: 'Excuse me, how can I get to the railway station from here?' }] },
    { label: 'Wypowiedź 4', lines: [{ text: 'Guess what! I’ve won first prize in the school photo competition!' }] },
    { label: 'Wypowiedź 5', lines: [{ text: 'Thank you so much for helping me with my maths homework.' }] },
    { label: 'Wypowiedź 6', lines: [{ text: 'Can I borrow your bike this afternoon? Mine is broken.' }] },
  ],
  items: [
    {
      id: 'z7ollg',
      q: '(Wypowiedź 1) Wybierz właściwą reakcję.',
      options: ['Congratulations!', 'I’m sorry to hear that.', 'Yes, I’d love to.'],
      answer: 1,
      explain: 'Ktoś złamał rękę i nie pojedzie na narty – to zła wiadomość, więc wyrażamy współczucie: „I’m sorry to hear that.”',
    },
    {
      id: 'menz37',
      q: '(Wypowiedź 2) Wybierz właściwą reakcję.',
      options: ['No, thanks. I’m full.', 'It’s very kind of you to come.', 'I’ll have the soup, please.'],
      answer: 0,
      explain: 'Ktoś proponuje kolejny kawałek ciasta. Grzecznie odmawiamy: „No, thanks. I’m full.” (Nie, dziękuję, najadłem się).',
    },
    {
      id: 'azrlnm',
      q: '(Wypowiedź 3) Wybierz właściwą reakcję.',
      options: ['It leaves at ten o’clock.', 'It takes about two hours by train.', 'Go straight on and turn left at the bank.'],
      answer: 2,
      explain: 'Pytanie „how can I get to…?” dotyczy drogi, więc odpowiadamy wskazówką: „Go straight on and turn left at the bank.” Pozostałe odpowiedzi mówią o godzinie odjazdu i czasie podróży.',
    },
    {
      id: '6tg1q3',
      q: '(Wypowiedź 4) Wybierz właściwą reakcję.',
      options: ['What a pity!', 'Help yourself!', 'Congratulations!'],
      answer: 2,
      explain: 'Ktoś wygrał konkurs – gratulujemy: „Congratulations!” „What a pity!” (Jaka szkoda!) pasuje do złej wiadomości, „Help yourself!” (Częstuj się!) – do poczęstunku.',
    },
    {
      id: '4zqvuz',
      q: '(Wypowiedź 5) Wybierz właściwą reakcję.',
      options: ['You’re welcome.', 'Yes, please.', 'Same to you.'],
      answer: 0,
      explain: 'Na podziękowanie odpowiadamy: „You’re welcome.” (Nie ma za co). „Same to you” (Nawzajem) mówimy w odpowiedzi na życzenia.',
    },
    {
      id: 'mrnszv',
      q: '(Wypowiedź 6) Wybierz właściwą reakcję.',
      options: ['Yes, I do.', 'Sure, but bring it back by six.', 'By bike, of course.'],
      answer: 1,
      explain: 'Ktoś prosi o pożyczenie roweru – zgadzamy się: „Sure, but bring it back by six.” „Yes, I do” nie pasuje do pytania z „Can I…?”, a „By bike” odpowiada na pytanie „How…?”.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'listening',
  id: 'kcfvbp',
  title: 'Komunikaty: dworzec, szkoła, radio',
  kind: 'Ogłoszenia · wybór wielokrotny',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny, wariant II.1: II.1–II.6 (rozumienie wypowiedzi ustnych), m.in. II.5 (określone informacje); tematy I.3 (edukacja), I.8 (podróżowanie i turystyka), I.13 (świat przyrody). Informator CKE (język angielski, od r. szk. 2024/2025): rozumienie ze słuchu – wybór wielokrotny.',
  intro: 'Usłyszysz dwukrotnie trzy komunikaty. W zadaniach 1–5, na podstawie informacji zawartych w nagraniu, z podanych odpowiedzi wybierz właściwą.',
  audio: [
    {
      label: 'Komunikat 1',
      lines: [
        { text: 'Good morning. This is an announcement for passengers travelling to Brighton. The ten fifteen train to Brighton is about twenty minutes late because of a problem with the doors. Today it will leave from platform four, not platform two. Passengers for Brighton, please go to platform four. Please note that the café on platform two is closed today, but you can buy drinks and snacks from the machines in the main hall. We are sorry for the delay.' },
      ],
    },
    {
      label: 'Komunikat 2',
      lines: [
        { text: 'Good morning, everyone. This is Mrs Taylor with some information about Friday’s school trip to the science museum. The bus will leave at eight o’clock, not at half past eight as we said last week, so please be at the school gate at a quarter to eight. You don’t need to bring money for tickets, because the school has already paid for them. But please bring a packed lunch, because the museum café will be closed for repairs. And remember, we are going even if it rains!' },
      ],
    },
    {
      label: 'Komunikat 3',
      lines: [
        { text: 'And now some news for animal lovers. This Saturday, the Green Park Animal Shelter is opening its doors to visitors. You can meet the dogs and cats that are looking for a new home, and children can take part in a drawing competition. The event starts at ten in the morning and finishes at four in the afternoon. Entry is free, but the shelter is asking visitors to bring old blankets or towels for the animals. Please don’t bring any food, because the animals are on special diets.' },
      ],
    },
  ],
  items: [
    {
      id: '7vhrab',
      q: '(Komunikat 1) Passengers going to Brighton should go to',
      options: ['platform two.', 'the main hall.', 'platform four.'],
      answer: 2,
      explain: '„Today it will leave from platform four, not platform two. Passengers for Brighton, please go to platform four.”',
    },
    {
      id: 'ws471f',
      q: '(Komunikat 1) Where can passengers buy something to drink today?',
      options: ['in the café on platform two', 'in the main hall', 'on the train'],
      answer: 1,
      explain: 'Kawiarnia na peronie drugim jest dziś zamknięta, ale „you can buy drinks and snacks from the machines in the main hall” – w automatach w hali głównej.',
    },
    {
      id: '6bj8un',
      q: '(Komunikat 2) What time should the students be at the school gate?',
      options: ['at a quarter to eight', 'at eight o’clock', 'at half past eight'],
      answer: 0,
      explain: 'Autobus odjeżdża o ósmej, a uczniowie mają być przy bramie wcześniej: „please be at the school gate at a quarter to eight” (7:45). Wpół do dziewiątej to stara, nieaktualna godzina.',
    },
    {
      id: 'p34vvq',
      q: '(Komunikat 2) Why do the students have to bring their own lunch?',
      options: ['The bus trip is very long.', 'The museum café will not be open.', 'The school has no money for lunch.'],
      answer: 1,
      explain: '„Please bring a packed lunch, because the museum café will be closed for repairs.” Szkoła zapłaciła za bilety, więc pieniędzy nie brakuje.',
    },
    {
      id: '9uaxc0',
      q: '(Komunikat 3) What should visitors bring to the shelter?',
      options: ['food for the animals', 'money for the tickets', 'old blankets or towels'],
      answer: 2,
      explain: '„The shelter is asking visitors to bring old blankets or towels.” Jedzenia nie wolno przynosić („Please don’t bring any food”), a wstęp jest darmowy („Entry is free”).',
    },
  ],
});
