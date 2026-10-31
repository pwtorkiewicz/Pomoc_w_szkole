/* Język angielski – klasa 8 */
window.SUBJECTS.push({
  id: 'angielski',
  name: 'Język angielski',
  icon: '🇬🇧',
  color: '#2f9e6e',
  topics: [
    {
      id: 'present',
      name: 'Present Simple i Present Continuous',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość środków językowych (gramatyka).',
      theory: `
        <table>
          <tr><th></th><th>Present Simple</th><th>Present Continuous</th></tr>
          <tr><td>Kiedy?</td><td>zwyczaje, fakty, rozkłady jazdy</td><td>czynność trwająca teraz, sytuacje tymczasowe, ustalone plany</td></tr>
          <tr><td>Budowa</td><td>I play / he play<b>s</b><br>I <b>don't</b> play / he <b>doesn't</b> play<br><b>Do</b> you play? <b>Does</b> he play?</td><td>I <b>am</b> play<b>ing</b><br>he <b>is</b> play<b>ing</b><br>they <b>are</b> play<b>ing</b></td></tr>
          <tr><td>Słowa-klucze</td><td>always, usually, often, sometimes, never, every day</td><td>now, right now, at the moment, today, this week, Look!, Listen!</td></tr>
        </table>
        <div class="tip">💡 W 3. osobie l. poj. (he/she/it) dodajemy <b>-s</b>: she work<b>s</b>, he watch<b>es</b>, it fl<b>ies</b>.</div>
        <div class="tip">💡 Czasowniki stanu (<i>like, love, hate, know, understand, want, need, believe</i>) zwykle <b>nie</b> występują w Continuous: <i>I understand</i>, nie <s>I am understanding</s>.</div>
      `,
      flashcards: [
        ['always, usually, every day', 'Present Simple'],
        ['now, at the moment, Look!', 'Present Continuous'],
        ['he / she / it + Present Simple', 'czasownik + -s (works, goes, watches)'],
        ['Przeczenie Present Simple (he)', 'he doesn\'t + czasownik bez -s'],
        ['Czasowniki stanu', 'like, love, know, understand, want – bez -ing'],
      ],
      questions: [
        { q: 'She usually ___ to school by bus.', options: ['go', 'goes', 'is going', 'going'], answer: 1, explain: '„Usually” → Present Simple, a „she” wymaga końcówki -es.' },
        { q: 'Look! It ___ .', options: ['rains', 'is raining', 'rain', 'rained'], answer: 1, explain: '„Look!” – coś dzieje się teraz → Present Continuous.' },
        { q: 'Water ___ at 100°C.', options: ['boils', 'is boiling', 'boil', 'boiling'], answer: 0, explain: 'Fakt naukowy → Present Simple.' },
        { q: 'I can\'t talk now. I ___ my homework.', options: ['do', 'does', 'am doing', 'did'], answer: 2 },
        { q: 'He ___ like coffee.', options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'], answer: 1 },
        { q: '___ you often play football?', options: ['Are', 'Does', 'Do', 'Is'], answer: 2 },
        { q: 'I ___ what you mean.', options: ['am understanding', 'understand', 'understands', 'am understand'], answer: 1, explain: '„Understand” to czasownik stanu – nie używamy go w Continuous.' },
        { q: 'This week I ___ with my grandparents because my parents are away.', options: ['stay', 'am staying', 'stays', 'staying'], answer: 1, explain: 'Sytuacja tymczasowa (this week) → Present Continuous.' },
        { q: 'The train ___ at 7:15 every morning.', options: ['is leaving', 'leave', 'leaves', 'left'], answer: 2, explain: 'Rozkład jazdy → Present Simple.' },
        { q: 'What ___ she doing now?', options: ['does', 'do', 'is', 'are'], answer: 2 },
      ],
    },
    {
      id: 'past',
      name: 'Czasy przeszłe i Present Perfect',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość środków językowych (gramatyka).',
      theory: `
        <h3>Past Simple</h3>
        <p>Zakończona czynność w <b>określonym czasie w przeszłości</b>. Słowa-klucze: <i>yesterday, last week, ago, in 2019, when…</i></p>
        <p>I play<b>ed</b> / I <b>went</b> · I <b>didn't</b> go · <b>Did</b> you go?</p>
        <h3>Past Continuous</h3>
        <p>Czynność trwająca w danym momencie w przeszłości, często przerwana inną: <i>I <b>was watching</b> TV when the phone <b>rang</b>.</i></p>
        <h3>Present Perfect</h3>
        <p><b>have/has + III forma</b>. Doświadczenia, skutki widoczne teraz, czynności trwające do teraz.</p>
        <p>Słowa-klucze: <i>ever, never, already, yet, just, since, for</i></p>
        <ul>
          <li><b>since</b> + punkt w czasie: since 2020, since Monday</li>
          <li><b>for</b> + okres: for five years, for two hours</li>
          <li><b>already</b> i <b>just</b> – w zdaniach twierdzących; <b>yet</b> – w pytaniach i przeczeniach (na końcu zdania)</li>
        </ul>
        <div class="tip">💡 Jeśli w zdaniu jest konkretny czas przeszły (<i>yesterday, last year, ago</i>) – zawsze Past Simple, nie Present Perfect!</div>
      `,
      flashcards: [
        ['yesterday, ago, last week', 'Past Simple'],
        ['ever, never, already, yet, just', 'Present Perfect'],
        ['since', 'od (punkt w czasie): since 2020'],
        ['for', 'przez (okres): for 5 years'],
        ['Budowa Present Perfect', 'have/has + III forma czasownika'],
        ['Past Continuous', 'was/were + czasownik-ing'],
      ],
      questions: [
        { q: 'I ___ him yesterday.', options: ['have seen', 'saw', 'see', 'seen'], answer: 1, explain: '„Yesterday” → Past Simple.' },
        { q: 'I have never ___ to London.', options: ['went', 'go', 'been', 'was'], answer: 2 },
        { q: 'She ___ already finished her project.', options: ['have', 'has', 'is', 'did'], answer: 1 },
        { q: 'When ___ you arrive?', options: ['have', 'did', 'do', 'were'], answer: 1, explain: 'Pytanie „when” dotyczy konkretnego momentu → Past Simple.' },
        { q: 'They have lived here ___ 2020.', options: ['for', 'since', 'ago', 'from'], answer: 1, explain: '2020 to punkt w czasie → since.' },
        { q: 'I have known her ___ five years.', options: ['since', 'ago', 'for', 'during'], answer: 2, explain: '„Five years” to okres → for.' },
        { q: 'Have you finished your homework ___ ?', options: ['already', 'yet', 'just', 'since'], answer: 1, explain: '„Yet” stawiamy na końcu pytań i przeczeń.' },
        { q: 'We ___ a new car two years ago.', options: ['have bought', 'buy', 'bought', 'were buying'], answer: 2 },
        { q: 'I was watching TV when the phone ___ .', options: ['was ringing', 'rang', 'rings', 'has rung'], answer: 1, explain: 'Krótka czynność przerywająca dłuższą → Past Simple.' },
        { q: 'What ___ you doing at 8 p.m. yesterday?', options: ['did', 'was', 'were', 'have'], answer: 2, explain: 'Past Continuous: were + you + -ing.' },
      ],
    },
    {
      id: 'future',
      name: 'Przyszłość: will, going to',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość środków językowych (gramatyka).',
      theory: `
        <table>
          <tr><th>Forma</th><th>Kiedy?</th><th>Przykład</th></tr>
          <tr><td><b>will</b></td><td>decyzja podjęta w chwili mówienia, przewidywanie (opinia), obietnica</td><td>I'm thirsty. – I'll get you some water.<br>I think she will win.</td></tr>
          <tr><td><b>be going to</b></td><td>wcześniejsze plany i zamiary, przewidywanie na podstawie tego, co widać</td><td>I'm going to study medicine.<br>Look at the clouds! It's going to rain.</td></tr>
          <tr><td><b>Present Continuous</b></td><td>ustalone spotkania i plany (z datą/godziną)</td><td>We're meeting at 6 tomorrow.</td></tr>
          <tr><td><b>Present Simple</b></td><td>rozkłady jazdy, plany lekcji</td><td>The film starts at 8.</td></tr>
        </table>
        <div class="tip">💡 Po <i>I think, probably, I'm sure</i> zwykle używamy <b>will</b>.</div>
      `,
      flashcards: [
        ['Decyzja w chwili mówienia', 'will'],
        ['Plan / zamiar', 'be going to'],
        ['Przewidywanie na podstawie dowodów', 'be going to (Look at the clouds!)'],
        ['Ustalone spotkanie', 'Present Continuous'],
        ['I think… / probably', 'will'],
      ],
      questions: [
        { q: 'Look at those black clouds! It ___ rain.', options: ['will', 'is going to', 'rains', 'is raining'], answer: 1, explain: 'Przewidywanie na podstawie tego, co widać → going to.' },
        { q: '„I\'m so thirsty.” – „Wait, I ___ get you some water.”', options: ['\'ll', '\'m going to', 'get', '\'m getting'], answer: 0, explain: 'Decyzja podjęta w chwili mówienia → will.' },
        { q: 'We ___ meet Tom at 6 p.m. tomorrow – it\'s in my calendar.', options: ['will', 'are meeting', 'meet', 'met'], answer: 1, explain: 'Ustalone spotkanie → Present Continuous.' },
        { q: 'I think she ___ the competition.', options: ['wins', 'is winning', 'will win', 'won'], answer: 2 },
        { q: 'Next year I ___ study in Kraków. I\'ve already decided.', options: ['will', 'am going to', 'study', 'would'], answer: 1, explain: 'Wcześniej podjęta decyzja (plan) → going to.' },
        { q: 'The concert ___ at 8 p.m. (programme)', options: ['starts', 'will starting', 'is going start', 'start'], answer: 0 },
        { q: 'Don\'t worry, I ___ tell anyone your secret. I promise!', options: ['won\'t', 'am not going', 'don\'t', 'not will'], answer: 0, explain: 'Obietnica → will / won\'t.' },
      ],
    },
    {
      id: 'irregular',
      name: 'Czasowniki nieregularne',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość środków językowych.',
      theory: `
        <p>Czasowniki nieregularne mają własne formy w Past Simple (II forma) i Present Perfect (III forma). Trzeba się ich nauczyć na pamięć – najlepiej z fiszkami!</p>
        <table>
          <tr><th>I forma</th><th>II forma</th><th>III forma</th><th>Znaczenie</th></tr>
          <tr><td>be</td><td>was / were</td><td>been</td><td>być</td></tr>
          <tr><td>go</td><td>went</td><td>gone</td><td>iść, jechać</td></tr>
          <tr><td>see</td><td>saw</td><td>seen</td><td>widzieć</td></tr>
          <tr><td>take</td><td>took</td><td>taken</td><td>brać</td></tr>
          <tr><td>write</td><td>wrote</td><td>written</td><td>pisać</td></tr>
          <tr><td>eat</td><td>ate</td><td>eaten</td><td>jeść</td></tr>
          <tr><td>buy</td><td>bought</td><td>bought</td><td>kupować</td></tr>
          <tr><td>teach</td><td>taught</td><td>taught</td><td>uczyć</td></tr>
          <tr><td>swim</td><td>swam</td><td>swum</td><td>pływać</td></tr>
          <tr><td>break</td><td>broke</td><td>broken</td><td>łamać, tłuc</td></tr>
          <tr><td>put</td><td>put</td><td>put</td><td>kłaść</td></tr>
        </table>
        <div class="tip">💡 Grupuj je: <b>bring–brought, buy–bought, think–thought</b> (-ought); <b>catch–caught, teach–taught</b> (-aught); <b>cut, put, let, hit</b> (wszystkie formy takie same).</div>
      `,
      flashcards: [
        ['be', 'was/were – been (być)'],
        ['go', 'went – gone (iść)'],
        ['have', 'had – had (mieć)'],
        ['do', 'did – done (robić)'],
        ['see', 'saw – seen (widzieć)'],
        ['take', 'took – taken (brać)'],
        ['write', 'wrote – written (pisać)'],
        ['eat', 'ate – eaten (jeść)'],
        ['drink', 'drank – drunk (pić)'],
        ['buy', 'bought – bought (kupować)'],
        ['bring', 'brought – brought (przynosić)'],
        ['think', 'thought – thought (myśleć)'],
        ['catch', 'caught – caught (łapać)'],
        ['teach', 'taught – taught (uczyć)'],
        ['swim', 'swam – swum (pływać)'],
        ['begin', 'began – begun (zaczynać)'],
        ['break', 'broke – broken (łamać)'],
        ['choose', 'chose – chosen (wybierać)'],
        ['forget', 'forgot – forgotten (zapominać)'],
        ['give', 'gave – given (dawać)'],
        ['know', 'knew – known (wiedzieć, znać)'],
        ['fly', 'flew – flown (latać)'],
        ['speak', 'spoke – spoken (mówić)'],
        ['wear', 'wore – worn (nosić ubranie)'],
        ['find', 'found – found (znajdować)'],
        ['leave', 'left – left (opuszczać, wyjeżdżać)'],
        ['lose', 'lost – lost (gubić, przegrywać)'],
        ['feel', 'felt – felt (czuć)'],
        ['sleep', 'slept – slept (spać)'],
        ['meet', 'met – met (spotykać)'],
        ['sell', 'sold – sold (sprzedawać)'],
        ['tell', 'told – told (mówić, opowiadać)'],
        ['run', 'ran – run (biegać)'],
        ['come', 'came – come (przychodzić)'],
        ['become', 'became – become (stawać się)'],
        ['put', 'put – put (kłaść)'],
        ['read', 'read – read (czytać; wymowa: /ri:d/ – /red/ – /red/)'],
      ],
      questions: [
        { q: 'Past Simple od „teach” to…', options: ['teached', 'taught', 'thought', 'tought'], answer: 1 },
        { q: 'III forma (Past Participle) od „write” to…', options: ['wrote', 'writed', 'written', 'writen'], answer: 2 },
        { q: 'She has ___ her keys again!', options: ['lose', 'losed', 'lost', 'loosen'], answer: 2 },
        { q: 'I ___ a great film yesterday.', options: ['saw', 'seen', 'seed', 'have seen'], answer: 0 },
        { q: 'Have you ever ___ sushi?', options: ['ate', 'eat', 'eaten', 'eated'], answer: 2 },
        { q: 'He ___ the window by accident.', options: ['breaked', 'broke', 'broken', 'brake'], answer: 1 },
        { q: 'III forma od „swim” to…', options: ['swam', 'swimmed', 'swum', 'swimming'], answer: 2 },
        { q: 'We ___ to Spain last summer.', options: ['flew', 'flied', 'flown', 'fly'], answer: 0 },
        { q: 'Past Simple od „bring” to…', options: ['brang', 'brought', 'bringed', 'brung'], answer: 1 },
        { q: 'Który czasownik ma wszystkie trzy formy takie same?', options: ['go', 'put', 'take', 'give'], answer: 1, explain: 'put – put – put.' },
      ],
    },
    {
      id: 'comparison',
      name: 'Stopniowanie przymiotników',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość środków językowych (gramatyka).',
      theory: `
        <table>
          <tr><th>Przymiotnik</th><th>Stopień wyższy</th><th>Stopień najwyższy</th></tr>
          <tr><td>krótki: tall</td><td>tall<b>er</b></td><td>the tall<b>est</b></td></tr>
          <tr><td>zakończony na -y: happy</td><td>happ<b>ier</b></td><td>the happ<b>iest</b></td></tr>
          <tr><td>samogłoska + spółgłoska: big</td><td>bi<b>gg</b>er</td><td>the bi<b>gg</b>est</td></tr>
          <tr><td>długi: beautiful</td><td><b>more</b> beautiful</td><td><b>the most</b> beautiful</td></tr>
        </table>
        <h3>Nieregularne</h3>
        <p>good – better – the best · bad – worse – the worst · far – farther/further – the farthest/furthest · many/much – more – the most · little – less – the least</p>
        <h3>Porównania</h3>
        <ul>
          <li>Tom is taller <b>than</b> Jack. (wyższy niż)</li>
          <li>She is <b>as</b> tall <b>as</b> her brother. (tak samo wysoka jak)</li>
          <li>It's <b>not as</b> cold <b>as</b> yesterday. (nie tak zimno jak)</li>
        </ul>
      `,
      flashcards: [
        ['good', 'better – the best'],
        ['bad', 'worse – the worst'],
        ['far', 'farther/further – the farthest/furthest'],
        ['big', 'bigger – the biggest'],
        ['happy', 'happier – the happiest'],
        ['interesting', 'more interesting – the most interesting'],
        ['as … as', 'tak samo … jak'],
      ],
      questions: [
        { q: 'Stopień wyższy od „big” to…', options: ['biger', 'bigger', 'more big', 'biggest'], answer: 1 },
        { q: 'This is the ___ day of my life!', options: ['good', 'better', 'best', 'goodest'], answer: 2 },
        { q: 'My test result was ___ than yours.', options: ['badder', 'worse', 'worst', 'more bad'], answer: 1 },
        { q: 'Tom is taller ___ Jack.', options: ['that', 'then', 'than', 'as'], answer: 2 },
        { q: 'She is as tall ___ her brother.', options: ['than', 'as', 'like', 'that'], answer: 1 },
        { q: 'This book is ___ than that one.', options: ['interestinger', 'more interesting', 'most interesting', 'the more interesting'], answer: 1 },
        { q: 'Stopień najwyższy od „happy” to…', options: ['the happyest', 'the most happy', 'the happiest', 'the happier'], answer: 2 },
        { q: 'Mount Everest is ___ mountain in the world.', options: ['the highest', 'higher', 'the most high', 'highest than'], answer: 0 },
      ],
    },
    {
      id: 'conditionals',
      name: 'Zdania warunkowe',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość środków językowych (gramatyka).',
      theory: `
        <table>
          <tr><th>Typ</th><th>Budowa</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>0</td><td>If + Present Simple, Present Simple</td><td>prawdy ogólne, prawa przyrody</td><td>If you heat ice, it melts.</td></tr>
          <tr><td>1</td><td>If + Present Simple, will + czasownik</td><td>realna sytuacja w przyszłości</td><td>If it rains, we will stay at home.</td></tr>
          <tr><td>2</td><td>If + Past Simple, would + czasownik</td><td>sytuacja nierealna, wyobrażona</td><td>If I had a million, I would buy a house.</td></tr>
        </table>
        <div class="tip">💡 Po <b>if</b> nigdy nie stawiamy <i>will</i>! Źle: <s>If it will rain</s>. Dobrze: <i>If it rains</i>.</div>
        <div class="tip">💡 W 2. trybie z „be” mówimy <b>If I were…</b> (np. <i>If I were you, I would…</i> – „Na twoim miejscu…”).</div>
        <p><b>Unless</b> = if not: <i>Unless you hurry, you will miss the bus.</i></p>
      `,
      flashcards: [
        ['Zero conditional', 'If + Present Simple, Present Simple'],
        ['First conditional', 'If + Present Simple, will + verb'],
        ['Second conditional', 'If + Past Simple, would + verb'],
        ['If I were you…', 'Na twoim miejscu…'],
        ['unless', 'jeśli nie (= if not)'],
      ],
      questions: [
        { q: 'If you heat ice, it ___ .', options: ['melts', 'will melt', 'would melt', 'melted'], answer: 0, explain: 'Prawo przyrody → zero conditional.' },
        { q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'would stay', 'stayed'], answer: 1 },
        { q: 'If she ___ hard, she will pass the exam.', options: ['will study', 'studies', 'studied', 'would study'], answer: 1, explain: 'Po „if” w 1. trybie – Present Simple, nie „will”.' },
        { q: 'If I ___ rich, I would travel around the world.', options: ['am', 'will be', 'were', 'would be'], answer: 2 },
        { q: 'If I had more time, I ___ learn Spanish.', options: ['will', 'would', 'am', 'did'], answer: 1 },
        { q: 'Unless you hurry, you ___ miss the bus.', options: ['will', 'would', 'are', 'did'], answer: 0 },
        { q: '„If I were you, I would see a doctor.” oznacza:', options: ['Gdybym był lekarzem…', 'Na twoim miejscu poszedłbym do lekarza.', 'Byłem u lekarza.', 'Jestem tobą.'], answer: 1 },
        { q: 'Które zdanie jest poprawne?', options: ['If it will be sunny, we will go out.', 'If it is sunny, we will go out.', 'If it is sunny, we would go out.', 'If it was sunny, we will go out.'], answer: 1 },
      ],
    },
    {
      id: 'functions',
      name: 'Reakcje językowe',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: znajomość funkcji językowych (reagowanie w typowych sytuacjach).',
      theory: `
        <p>Na egzaminie często trzeba wybrać właściwą reakcję na sytuację. Zapamiętaj najważniejsze zwroty:</p>
        <table>
          <tr><th>Sytuacja</th><th>Zwrot</th></tr>
          <tr><td>Propozycja</td><td>How about going…? · Why don't we…? · Let's…</td></tr>
          <tr><td>Prośba</td><td>Could you help me, please? · Can you…?</td></tr>
          <tr><td>Pytanie o pozwolenie</td><td>Can I / May I open the window?</td></tr>
          <tr><td>Odpowiedź na „Thank you”</td><td>You're welcome. · Not at all. · No problem.</td></tr>
          <tr><td>Odpowiedź na przeprosiny</td><td>That's OK. · Never mind. · Don't worry.</td></tr>
          <tr><td>Pytanie o cenę</td><td>How much is it? · How much does it cost?</td></tr>
          <tr><td>Gratulacje</td><td>Congratulations! · Well done!</td></tr>
          <tr><td>Kichnięcie</td><td>Bless you!</td></tr>
          <tr><td>Pytanie o drogę</td><td>Excuse me, how do I get to…?</td></tr>
        </table>
        <div class="tip">💡 <b>What is she like?</b> – pytanie o charakter (She's friendly).<br><b>What does she look like?</b> – pytanie o wygląd (She's tall with dark hair).<br><b>What does she like?</b> – co lubi (She likes music).</div>
      `,
      flashcards: [
        ['Thank you!', 'You\'re welcome.'],
        ['I\'m sorry I\'m late.', 'That\'s OK. / Never mind.'],
        ['Propozycja', 'How about… / Why don\'t we… / Let\'s…'],
        ['What is he like?', 'Pytanie o charakter'],
        ['What does he look like?', 'Pytanie o wygląd'],
        ['Kichnięcie', 'Bless you!'],
      ],
      questions: [
        { q: 'Your friend says: „Thank you so much for your help!” You answer:', options: ['You\'re welcome.', 'Bless you!', 'Me too.', 'Here you are.'], answer: 0 },
        { q: 'You want to suggest going to the cinema. You say:', options: ['Do you go to the cinema?', 'How about going to the cinema?', 'I went to the cinema.', 'Did you like the cinema?'], answer: 1 },
        { q: 'Someone says: „I\'m sorry I\'m late.” You answer:', options: ['Congratulations!', 'Never mind.', 'You\'re welcome.', 'Me neither.'], answer: 1 },
        { q: 'You want to know the price of a T-shirt. You ask:', options: ['How many is it?', 'How much is it?', 'What is it?', 'How is it?'], answer: 1 },
        { q: '„What does your sister look like?” – Która odpowiedź pasuje?', options: ['She likes music.', 'She\'s tall with long dark hair.', 'She\'s a teacher.', 'She\'s very kind.'], answer: 1, explain: '„Look like” to pytanie o wygląd.' },
        { q: '„What is your brother like?” – Która odpowiedź pasuje?', options: ['He\'s friendly and funny.', 'He likes pizza.', 'He\'s at home.', 'He looks like me.'], answer: 0, explain: '„What is he like?” to pytanie o charakter.' },
        { q: '„Would you like some tea?” – Grzeczna odpowiedź to:', options: ['Yes, please.', 'Yes, I would like tea yesterday.', 'You\'re welcome.', 'Here you are.'], answer: 0 },
        { q: 'Your friend passed a difficult exam. You say:', options: ['Bless you!', 'Congratulations!', 'Never mind.', 'Excuse me.'], answer: 1 },
        { q: 'You want to ask for permission to open the window. You say:', options: ['Open the window!', 'May I open the window?', 'You open the window.', 'Did you open the window?'], answer: 1 },
      ],
    },
    {
      id: 'slownictwo',
      name: 'Słownictwo – tematy z podstawy',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Podstawa programowa wymienia 14 obszarów tematycznych słownictwa.',
      theory: `
        <p>Podstawa programowa dzieli słownictwo na tematy. Teksty na egzaminie (słuchanie, czytanie) dotyczą tych obszarów:</p>
        <table>
          <tr><th>Temat</th><th>Przykładowe słówka</th></tr>
          <tr><td>Człowiek</td><td>tall, curly hair, friendly, shy, feelings: angry, worried</td></tr>
          <tr><td>Miejsce zamieszkania</td><td>flat, block of flats, living room, neighbourhood</td></tr>
          <tr><td>Edukacja</td><td>timetable, subject, break, homework, test</td></tr>
          <tr><td>Praca</td><td>job, nurse, plumber, salary, office</td></tr>
          <tr><td>Życie prywatne</td><td>family, relatives, celebrate, birthday party</td></tr>
          <tr><td>Żywienie</td><td>vegetables, dairy, fry, boil, menu, bill</td></tr>
          <tr><td>Zakupy i usługi</td><td>shop assistant, receipt, refund, discount, size</td></tr>
          <tr><td>Podróżowanie i turystyka</td><td>platform, return ticket, sightseeing, luggage</td></tr>
          <tr><td>Kultura</td><td>exhibition, novel, director, concert</td></tr>
          <tr><td>Sport</td><td>coach, team, win, lose, score a goal</td></tr>
          <tr><td>Zdrowie</td><td>headache, sore throat, prescription, take medicine</td></tr>
          <tr><td>Nauka i technika</td><td>device, download, charger, invention</td></tr>
          <tr><td>Świat przyrody</td><td>weather, environment, pollution, recycle</td></tr>
          <tr><td>Życie społeczne</td><td>crime, police, charity, volunteer</td></tr>
        </table>
        <div class="tip">💡 Ucz się słów w grupach tematycznych i całych wyrażeń (np. <i>take a photo, do homework, make a mistake</i>).</div>
      `,
      flashcards: [
        ['receipt', 'paragon'],
        ['refund', 'zwrot pieniędzy'],
        ['luggage', 'bagaż'],
        ['return ticket', 'bilet powrotny'],
        ['sore throat', 'ból gardła'],
        ['prescription', 'recepta'],
        ['charger', 'ładowarka'],
        ['neighbourhood', 'okolica, sąsiedztwo'],
        ['volunteer', 'wolontariusz'],
        ['make a mistake', 'popełnić błąd'],
        ['do homework', 'odrabiać pracę domową'],
        ['take a photo', 'zrobić zdjęcie'],
      ],
      questions: [
        { q: 'Which word means „paragon”?', options: ['recipe', 'receipt', 'refund', 'record'], answer: 1, explain: '„Recipe” to przepis kulinarny – częsta pułapka!' },
        { q: 'You have a ___ throat. You should drink hot tea.', options: ['sore', 'pain', 'hurt', 'ache'], answer: 0 },
        { q: 'I\'d like a ___ ticket to Kraków, please. I\'m coming back tomorrow.', options: ['single', 'return', 'one-way', 'back'], answer: 1 },
        { q: 'Which phrase is correct?', options: ['make homework', 'do a mistake', 'make a mistake', 'do a photo'], answer: 2 },
        { q: 'My phone is dead. Can I borrow your ___ ?', options: ['charger', 'device', 'download', 'battery life'], answer: 0 },
        { q: 'A person who works without payment to help others is a…', options: ['volunteer', 'customer', 'coach', 'neighbour'], answer: 0 },
        { q: 'The doctor gave me a ___ for some medicine.', options: ['receipt', 'prescription', 'menu', 'ticket'], answer: 1 },
        { q: 'Which word does NOT belong to the topic „Sport”?', options: ['coach', 'score', 'team', 'luggage'], answer: 3 },
      ],
    },
    {
      id: 'email',
      name: 'Wypowiedź pisemna: e-mail',
      basis: 'Egzamin sprawdza wymagania podstawy programowej dla szkoły podstawowej (poziom ok. A2). Część: wypowiedź pisemna (np. e-mail / wiadomość do kolegi).',
      theory: `
        <h3>Jak napisać e-mail na egzaminie?</h3>
        <ol>
          <li><b>Przeczytaj polecenie</b> i podkreśl wszystkie punkty, które musisz rozwinąć. Każdy punkt trzeba nie tylko wspomnieć, ale też <b>rozwinąć</b> (dodać szczegół, powód, przykład).</li>
          <li><b>Początek</b>: Hi Tom, / Hello Anna, / Dear Mark,</li>
          <li><b>Wstęp</b>: Thanks for your e-mail. / I'm writing to tell you about…</li>
          <li><b>Treść</b>: po kolei wszystkie punkty polecenia.</li>
          <li><b>Zakończenie</b>: Write back soon! / I can't wait to hear from you. / See you soon!</li>
          <li><b>Podpis</b>: Love, / Best wishes, / Bye for now, + imię podane w poleceniu (zwykle XYZ).</li>
        </ol>
        <h3>Przydatne zwroty</h3>
        <table>
          <tr><th>Funkcja</th><th>Zwroty</th></tr>
          <tr><td>Opisywanie wydarzenia</td><td>Last weekend I went to… It was amazing because…</td></tr>
          <tr><td>Opinia</td><td>In my opinion… / I think… / I really liked…</td></tr>
          <tr><td>Propozycja</td><td>Why don't we…? / How about…? / Let's…</td></tr>
          <tr><td>Prośba o radę</td><td>What do you think I should do?</td></tr>
          <tr><td>Rada</td><td>You should… / If I were you, I would…</td></tr>
          <tr><td>Przeprosiny</td><td>I'm sorry, but I can't… because…</td></tr>
        </table>
        <div class="tip">💡 Sprawdź na końcu: czy odniosłeś się do <b>każdego</b> punktu? Czy użyłeś poprawnych czasów?</div>
      `,
      flashcards: [
        ['Początek e-maila do kolegi', 'Hi Tom, / Hello Anna,'],
        ['Podziękowanie za list', 'Thanks for your e-mail.'],
        ['Zakończenie e-maila', 'Write back soon! / See you soon!'],
        ['Podpis', 'Love, / Best wishes, + imię'],
        ['Rada', 'You should… / If I were you, I would…'],
        ['Propozycja', 'Why don\'t we…? / How about…?'],
      ],
      questions: [
        { q: 'Which is a good way to start an e-mail to a friend?', options: ['Dear Sir or Madam,', 'Hi Kate,', 'To whom it may concern,', 'Yours faithfully,'], answer: 1 },
        { q: 'Which sentence is a good ending for an e-mail to a friend?', options: ['Write back soon!', 'Thanks for your e-mail.', 'I\'m writing to tell you…', 'Last weekend I went…'], answer: 0 },
        { q: 'You want to give advice. Which sentence fits?', options: ['If I were you, I would talk to her.', 'I went to the cinema.', 'Thanks for your e-mail.', 'How much is it?'], answer: 0 },
        { q: 'Co trzeba zrobić z punktami podanymi w poleceniu?', options: ['wybrać jeden z nich', 'odnieść się do każdego i go rozwinąć', 'przepisać je po polsku', 'pominąć, jeśli tekst jest długi'], answer: 1 },
        { q: 'You describe last weekend. Which sentence is correct?', options: ['Last weekend I go to the mountains.', 'Last weekend I have gone to the mountains.', 'Last weekend I went to the mountains.', 'Last weekend I am going to the mountains.'], answer: 2, explain: '„Last weekend” → Past Simple.' },
        { q: 'You want to suggest meeting. Which sentence fits?', options: ['Why don\'t we meet on Saturday?', 'Why didn\'t we meet on Saturday?', 'We met on Saturday.', 'Do we meet on Saturday?'], answer: 0 },
      ],
    },
  ],
});
