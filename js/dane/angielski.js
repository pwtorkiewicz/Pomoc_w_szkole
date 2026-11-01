/* Język angielski – klasa 8 */
window.SUBJECTS.push({
  id: 'angielski',
  name: 'Język angielski',
  icon: '🇬🇧',
  color: '#2f9e6e',
  exam: '<b>12 maja 2027</b>, 110 minut, 45–55 zadań. Części: rozumienie ze słuchu, znajomość funkcji językowych, rozumienie tekstów pisanych, znajomość środków językowych, wypowiedź pisemna (e-mail lub wpis na blogu, 50–120 wyrazów). Poziom A2.',
  topics: [
    {
      id: 'present',
      name: 'Present Simple i Present Continuous',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025): poziom A2 (A2+ w rozumieniu), lista struktur gramatycznych – czasy i konstrukcje czasownikowe.',
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
        { id: 'pgfqxk', q: 'She usually ___ to school by bus.', options: ['go', 'goes', 'is going', 'going'], answer: 1, explain: '„Usually” → Present Simple, a „she” wymaga końcówki -es.' },
        { id: 'sgyur7', q: 'Look! It ___ .', options: ['rains', 'is raining', 'rain', 'rained'], answer: 1, explain: '„Look!” – coś dzieje się teraz → Present Continuous.' },
        { id: '3u8zjc', q: 'Water ___ at 100°C.', options: ['boils', 'is boiling', 'boil', 'boiling'], answer: 0, explain: 'Fakt naukowy → Present Simple.' },
        { id: 'd9rfp3', q: 'I can\'t talk now. I ___ my homework.', options: ['do', 'does', 'am doing', 'did'], answer: 2 },
        { id: 'len0z8', q: 'He ___ like coffee.', options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'], answer: 1 },
        { id: 'g5mfk1', q: '___ you often play football?', options: ['Are', 'Does', 'Do', 'Is'], answer: 2 },
        { id: '5sgy4e', q: 'I ___ what you mean.', options: ['am understanding', 'understand', 'understands', 'am understand'], answer: 1, explain: '„Understand” to czasownik stanu – nie używamy go w Continuous.' },
        { id: 'mp4w5u', q: 'This week I ___ with my grandparents because my parents are away.', options: ['stay', 'am staying', 'stays', 'staying'], answer: 1, explain: 'Sytuacja tymczasowa (this week) → Present Continuous.' },
        { id: 'o6zxd5', q: 'The train ___ at 7:15 every morning.', options: ['is leaving', 'leave', 'leaves', 'left'], answer: 2, explain: 'Rozkład jazdy → Present Simple.' },
        { id: 'nunukl', q: 'What ___ she doing now?', options: ['does', 'do', 'is', 'are'], answer: 2 },
        { id: 'lf9k3k', q: 'My brother ___ TV every evening.', options: ['watch', 'is watching', 'watchs', 'watches'], answer: 3, explain: '„Every evening” → Present Simple; po „watch” w 3. os. dodajemy -es.' },
        { id: 'mql62v', q: 'Listen! Somebody ___ at the door.', options: ['knocks', 'knock', 'is knocking', 'knocked'], answer: 2, explain: '„Listen!” – dzieje się to teraz → Present Continuous.' },
        { id: '9fqqek', q: '___ your sister speak French?', options: ['Does', 'Do', 'Is', 'Are'], answer: 0 },
        { id: 'mwspkz', q: 'We ___ dinner right now. Can I call you later?', options: ['have', 'are having', 'has', 'had'], answer: 1, explain: '„Right now” → Present Continuous.' },
        { id: 'bynols', q: 'I ___ the answer to this question.', options: ['am knowing', 'knows', 'knowing', 'know'], answer: 3, explain: '„Know” to czasownik stanu – bez formy -ing.' },
        { id: '563t8m', q: 'She ___ eat meat. She\'s a vegetarian.', options: ['doesn\'t', 'don\'t', 'isn\'t', 'not'], answer: 0 },
        { id: 'brp4l2', q: 'How often ___ you go swimming?', options: ['does', 'do', 'are', 'is'], answer: 1 },
      ],
    },
    {
      id: 'past',
      name: 'Czasy przeszłe i Present Perfect',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025): poziom A2 (A2+ w rozumieniu), lista struktur gramatycznych – czasy i konstrukcje czasownikowe.',
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
        { id: 'hmm0d4', q: 'I ___ him yesterday.', options: ['have seen', 'saw', 'see', 'seen'], answer: 1, explain: '„Yesterday” → Past Simple.' },
        { id: 'rc7xr0', q: 'I have never ___ to London.', options: ['went', 'go', 'been', 'was'], answer: 2 },
        { id: 'h82laz', q: 'She ___ already finished her project.', options: ['have', 'has', 'is', 'did'], answer: 1 },
        { id: '9j8bfg', q: 'When ___ you arrive?', options: ['have', 'did', 'do', 'were'], answer: 1, explain: 'Pytanie „when” dotyczy konkretnego momentu → Past Simple.' },
        { id: 'z1emok', q: 'They have lived here ___ 2020.', options: ['for', 'since', 'ago', 'from'], answer: 1, explain: '2020 to punkt w czasie → since.' },
        { id: 'udk35j', q: 'I have known her ___ five years.', options: ['since', 'ago', 'for', 'during'], answer: 2, explain: '„Five years” to okres → for.' },
        { id: 'e7lu4j', q: 'Have you finished your homework ___ ?', options: ['already', 'yet', 'just', 'since'], answer: 1, explain: '„Yet” stawiamy na końcu pytań i przeczeń.' },
        { id: 'rixe7u', q: 'We ___ a new car two years ago.', options: ['have bought', 'buy', 'bought', 'were buying'], answer: 2 },
        { id: 'bz5jvh', q: 'I was watching TV when the phone ___ .', options: ['was ringing', 'rang', 'rings', 'has rung'], answer: 1, explain: 'Krótka czynność przerywająca dłuższą → Past Simple.' },
        { id: 'vq6kq8', q: 'What ___ you doing at 8 p.m. yesterday?', options: ['did', 'was', 'were', 'have'], answer: 2, explain: 'Past Continuous: were + you + -ing.' },
        { id: 'g7q5gk', q: 'She ___ to the party last Saturday.', options: ['didn\'t came', 'didn\'t come', 'hasn\'t come', 'doesn\'t come'], answer: 1, explain: '„Last Saturday” → Past Simple; po „didn\'t” czasownik w I formie.' },
        { id: '22k8gc', q: 'At 7 p.m. yesterday I ___ dinner with my family.', options: ['have had', 'am having', 'was having', 'have'], answer: 2, explain: 'Czynność trwająca w określonym momencie przeszłości → Past Continuous.' },
        { id: 'ak789p', q: 'She has lived in Gdańsk ___ she was born.', options: ['for', 'ago', 'during', 'since'], answer: 3, explain: 'Od momentu narodzin – punkt w czasie → since.' },
        { id: '82ewty', q: 'Have you ever ___ a famous person?', options: ['meet', 'met', 'meeted', 'meeting'], answer: 1, explain: 'Present Perfect: have + III forma (meet – met – met).' },
        { id: 'oe5w8s', q: 'I ___ my grandma three days ago.', options: ['have visited', 'visit', 'am visiting', 'visited'], answer: 3, explain: '„Ago” → Past Simple.' },
        { id: '5wekq9', q: 'They ___ their homework yet.', options: ['haven\'t did', 'hasn\'t done', 'haven\'t done', 'don\'t done'], answer: 2, explain: 'Present Perfect: they + haven\'t + III forma.' },
        { id: 'e8pr12', q: '___ you see the match last night?', options: ['Have', 'Did', 'Were', 'Do'], answer: 1 },
      ],
    },
    {
      id: 'future',
      name: 'Przyszłość: will, going to',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025): poziom A2 (A2+ w rozumieniu), lista struktur gramatycznych – czasy i konstrukcje czasownikowe.',
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
        { id: 'vmdxuw', q: 'Look at those black clouds! It ___ rain.', options: ['will', 'is going to', 'rains', 'is raining'], answer: 1, explain: 'Przewidywanie na podstawie tego, co widać → going to.' },
        { id: 'sn3epj', q: '„I\'m so thirsty.” – „Wait, I ___ get you some water.”', options: ['\'ll', '\'m going to', 'get', '\'m getting'], answer: 0, explain: 'Decyzja podjęta w chwili mówienia → will.' },
        { id: 'p4htz5', q: 'We ___ meet Tom at 6 p.m. tomorrow – it\'s in my calendar.', options: ['will', 'are meeting', 'meet', 'met'], answer: 1, explain: 'Ustalone spotkanie → Present Continuous.' },
        { id: '50s67b', q: 'I think she ___ the competition.', options: ['wins', 'is winning', 'will win', 'won'], answer: 2 },
        { id: 'xhhav0', q: 'Next year I ___ study in Kraków. I\'ve already decided.', options: ['will', 'am going to', 'study', 'would'], answer: 1, explain: 'Wcześniej podjęta decyzja (plan) → going to.' },
        { id: 'guh8dd', q: 'The concert ___ at 8 p.m. (programme)', options: ['starts', 'will starting', 'is going start', 'start'], answer: 0 },
        { id: 'tvt97y', q: 'Don\'t worry, I ___ tell anyone your secret. I promise!', options: ['won\'t', 'am not going', 'don\'t', 'not will'], answer: 0, explain: 'Obietnica → will / won\'t.' },
        { id: 'nghzj5', q: 'I\'m sure you ___ the exam.', options: ['pass', 'are passing', 'passed', 'will pass'], answer: 3, explain: 'Po „I\'m sure” – przewidywanie → will.' },
        { id: 'b3mhyp', q: 'Kate has bought some paint. She ___ paint her room.', options: ['is going to', 'paints', 'painted', 'is paint'], answer: 0, explain: 'Zamiar zaplanowany wcześniej → be going to.' },
        { id: 'xnqj7m', q: 'Our flight ___ at 6:30 tomorrow morning. (rozkład lotów)', options: ['is leave', 'leaving', 'leaves', 'left'], answer: 2, explain: 'Rozkłady jazdy i lotów → Present Simple.' },
        { id: 'h4uh3y', q: 'Which sentence is correct?', options: ['It will probably rain tomorrow.', 'It probably wills rain tomorrow.', 'It will probably raining tomorrow.', 'It is probably rain tomorrow.'], answer: 0 },
        { id: '3vmqxd', q: 'What ___ you going to do this weekend?', options: ['do', 'are', 'will', 'is'], answer: 1 },
        { id: '14fjwt', q: 'I promise I ___ late again.', options: ['am not being', 'won\'t be', 'don\'t be', 'not will be'], answer: 1, explain: 'Obietnica → will / won\'t.' },
      ],
    },
    {
      id: 'irregular',
      name: 'Czasowniki nieregularne',
      basis: 'Informator CKE (język angielski): lista struktur – czasowniki regularne i nieregularne (np. do – did – done).',
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
        { id: 'u7sxv3', q: 'Past Simple od „teach” to…', options: ['teached', 'taught', 'thought', 'tought'], answer: 1 },
        { id: 'c4wc1i', q: 'III forma (Past Participle) od „write” to…', options: ['wrote', 'writed', 'written', 'writen'], answer: 2 },
        { id: 'g3blk0', q: 'She has ___ her keys again!', options: ['lose', 'losed', 'lost', 'loosen'], answer: 2 },
        { id: 'lei9er', q: 'I ___ a great film yesterday.', options: ['saw', 'seen', 'seed', 'have seen'], answer: 0 },
        { id: '0v2frn', q: 'Have you ever ___ sushi?', options: ['ate', 'eat', 'eaten', 'eated'], answer: 2 },
        { id: 'sbxw32', q: 'He ___ the window by accident.', options: ['breaked', 'broke', 'broken', 'brake'], answer: 1 },
        { id: 'j33y5s', q: 'III forma od „swim” to…', options: ['swam', 'swimmed', 'swum', 'swimming'], answer: 2 },
        { id: 'ogc67e', q: 'We ___ to Spain last summer.', options: ['flew', 'flied', 'flown', 'fly'], answer: 0 },
        { id: 'juzg9k', q: 'Past Simple od „bring” to…', options: ['brang', 'brought', 'bringed', 'brung'], answer: 1 },
        { id: '9hmq0m', q: 'Który czasownik ma wszystkie trzy formy takie same?', options: ['go', 'put', 'take', 'give'], answer: 1, explain: 'put – put – put.' },
        { id: 'lb3m0l', q: 'Past Simple od „think” to…', options: ['thought', 'thinked', 'taught', 'thank'], answer: 0, explain: 'Uwaga: „taught” to forma od „teach”.' },
        { id: 'lnvzqx', q: 'III forma od „speak” to…', options: ['spoke', 'speaked', 'spoken', 'speaken'], answer: 2 },
        { id: 'toa6dw', q: 'I ___ my homework before dinner yesterday.', options: ['did', 'done', 'doed', 'have done'], answer: 0, explain: '„Yesterday” → Past Simple: do – did – done.' },
        { id: '8292du', q: 'They ___ the match 0 : 3 last Sunday.', options: ['losed', 'loosed', 'lose', 'lost'], answer: 3 },
        { id: 'fq58bt', q: 'Have you ___ my phone? I can\'t find it.', options: ['seen', 'saw', 'see', 'seed'], answer: 0 },
        { id: '8udgix', q: 'III forma od „choose” to…', options: ['chose', 'chosen', 'choosed', 'choosen'], answer: 1 },
        { id: 'nwboiw', q: 'He ___ me a funny story yesterday.', options: ['telled', 'tell', 'tolded', 'told'], answer: 3 },
        { id: 'bndv16', q: 'Który czasownik jest regularny?', options: ['go', 'play', 'buy', 'swim'], answer: 1, explain: 'play – played – played (końcówka -ed).' },
      ],
    },
    {
      id: 'comparison',
      name: 'Stopniowanie przymiotników',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025): poziom A2 (A2+ w rozumieniu), lista struktur gramatycznych – czasy i konstrukcje czasownikowe.',
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
        { id: 'vm9u2x', q: 'Stopień wyższy od „big” to…', options: ['biger', 'bigger', 'more big', 'biggest'], answer: 1 },
        { id: '6m5lyb', q: 'This is the ___ day of my life!', options: ['good', 'better', 'best', 'goodest'], answer: 2 },
        { id: 'w2lp7i', q: 'My test result was ___ than yours.', options: ['badder', 'worse', 'worst', 'more bad'], answer: 1 },
        { id: 'o06azr', q: 'Tom is taller ___ Jack.', options: ['that', 'then', 'than', 'as'], answer: 2 },
        { id: '7lmkti', q: 'She is as tall ___ her brother.', options: ['than', 'as', 'like', 'that'], answer: 1 },
        { id: 'jw0joz', q: 'This book is ___ than that one.', options: ['interestinger', 'more interesting', 'most interesting', 'the more interesting'], answer: 1 },
        { id: 'i9is7v', q: 'Stopień najwyższy od „happy” to…', options: ['the happyest', 'the most happy', 'the happiest', 'the happier'], answer: 2 },
        { id: 'k66n1h', q: 'Mount Everest is ___ mountain in the world.', options: ['the highest', 'higher', 'the most high', 'highest than'], answer: 0 },
        { id: 'yumkmt', q: 'Stopień wyższy od „hot” to…', options: ['hoter', 'hotter', 'more hot', 'hottest'], answer: 1, explain: 'Samogłoska + spółgłoska na końcu → podwajamy spółgłoskę.' },
        { id: '77b8bm', q: 'This is the ___ film I have ever seen. I hated it!', options: ['baddest', 'worse', 'worst', 'most bad'], answer: 2 },
        { id: 'u6q9q1', q: 'Stopień najwyższy od „expensive” to…', options: ['the expensivest', 'the more expensive', 'the most expensive', 'the most expensiver'], answer: 2 },
        { id: 'xc1aqv', q: 'Today it\'s not as cold ___ yesterday.', options: ['than', 'like', 'that', 'as'], answer: 3 },
        { id: 'wjaj5j', q: 'Which sentence is correct?', options: ['My bag is heavier than yours.', 'My bag is more heavy than yours.', 'My bag is heavyer than yours.', 'My bag is heavier that yours.'], answer: 0 },
        { id: 'wmq2xw', q: 'I have ___ free time than my sister.', options: ['least', 'fewer', 'littler', 'less'], answer: 3, explain: 'little – less – the least; „time” jest niepoliczalne.' },
        { id: 'voet57', q: 'Stopień wyższy od „easy” to…', options: ['easier', 'easyer', 'more easy', 'easiest'], answer: 0 },
      ],
    },
    {
      id: 'zdania-warunkowe',
      name: 'Zdania warunkowe (typ 0 i I) i spójniki',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur gramatycznych: zdania okolicznikowe warunku typu 0 i I, czasu, celu, przyczyny, skutku; spójniki and, or, because, if, before, so.',
      theory: `
        <div class="tip">📋 Na liście struktur CKE są zdania warunkowe <b>tylko typu 0 i I</b>. Typ II (<i>If I were…, I would…</i>) nie jest wymagany na egzaminie ósmoklasisty.</div>
        <table>
          <tr><th>Typ</th><th>Budowa</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>0</td><td>If/When + Present Simple, Present Simple</td><td>prawdy ogólne, prawa przyrody, coś, co dzieje się zawsze</td><td>When it is hot, we drink more.</td></tr>
          <tr><td>I</td><td>If + Present Simple, will + czasownik</td><td>realna sytuacja w przyszłości</td><td>If we win the match, we will have a party.</td></tr>
        </table>
        <div class="tip">💡 Po <b>if</b> i <b>when</b> (o przyszłości) nie stawiamy <i>will</i>! Źle: <s>If it will rain</s>. Dobrze: <i>If it rains</i>.</div>
        <h3>Inne zdania złożone z listy CKE</h3>
        <table>
          <tr><th>Rodzaj</th><th>Przykład</th></tr>
          <tr><td>celu (to + czasownik)</td><td>I came here <b>to give</b> you this letter.</td></tr>
          <tr><td>czasu (when)</td><td>The phone rang <b>when</b> we were leaving the flat.</td></tr>
          <tr><td>przyczyny (because)</td><td>She is happy <b>because</b> she won the lottery.</td></tr>
          <tr><td>skutku (so)</td><td>I was tired, <b>so</b> I went straight to bed.</td></tr>
          <tr><td>przydawkowe (who, which, that)</td><td>The man <b>who</b> lives next door is a famous actor.</td></tr>
        </table>
      `,
      flashcards: [
        ['Zero conditional', 'If/When + Present Simple, Present Simple'],
        ['First conditional', 'If + Present Simple, will + czasownik'],
        ['because', 'ponieważ (przyczyna)'],
        ['so', 'więc (skutek)'],
        ['to + czasownik', 'żeby… (cel): I came to help you.'],
        ['who / which', 'który (who – o ludziach, which – o rzeczach)'],
      ],
      questions: [
        { id: 'd51r89', q: 'If you heat ice, it ___ .', options: ['melts', 'will melt', 'melted', 'is melting'], answer: 0, explain: 'Prawo przyrody → zero conditional.' },
        { id: '2squc6', q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'stayed', 'are stay'], answer: 1 },
        { id: 'yu4kzd', q: 'If she ___ hard, she will pass the exam.', options: ['will study', 'studies', 'studied', 'study'], answer: 1, explain: 'Po „if” w trybie I – Present Simple, nie „will”.' },
        { id: 'bwj979', q: 'When it ___ hot, we drink more water.', options: ['is', 'will be', 'was', 'be'], answer: 0 },
        { id: 'uu0358', q: 'Które zdanie jest poprawne?', options: ['If it will be sunny, we will go out.', 'If it is sunny, we will go out.', 'If it is sunny, we go out tomorrow.', 'If it was sunny, we will go out.'], answer: 1 },
        { id: 'bsd6ho', q: 'I went to the shop ___ buy some bread.', options: ['for', 'to', 'so', 'because'], answer: 1, explain: 'Cel wyrażamy przez „to” + czasownik.' },
        { id: 'w5dpxy', q: 'I was tired, ___ I went to bed early.', options: ['because', 'so', 'or', 'before'], answer: 1 },
        { id: 'k6xw7b', q: 'She stayed at home ___ she was ill.', options: ['so', 'because', 'and', 'if'], answer: 1 },
        { id: 'tndeu5', q: 'The girl ___ sits next to me is my cousin.', options: ['which', 'who', 'what', 'where'], answer: 1, explain: 'O ludziach – who.' },
        { id: 'susvl3', q: 'If you mix red and white, you ___ pink.', options: ['got', 'getting', 'get', 'are get'], answer: 2, explain: 'To zawsze prawda → zero conditional (Present Simple w obu częściach).' },
        { id: 'cr3mc1', q: 'If I ___ time tomorrow, I will call you.', options: ['will have', 'had', 'have', 'having'], answer: 2, explain: 'Po „if” – Present Simple, nie „will”.' },
        { id: 'tav0n5', q: 'If you don\'t hurry, you ___ the bus.', options: ['missed', 'are missing', 'will miss', 'misses'], answer: 2 },
        { id: '41mtfo', q: 'I\'ll text you when I ___ home.', options: ['will get', 'got', 'get', 'getting'], answer: 2, explain: 'Po „when” o przyszłości – Present Simple.' },
        { id: '6q2v10', q: 'This is the book ___ I told you about.', options: ['who', 'where', 'which', 'what'], answer: 2, explain: 'O rzeczach – which (o ludziach – who).' },
        { id: '8ykx48', q: 'You can have dessert ___ you eat your vegetables.', options: ['so', 'or', 'but', 'if'], answer: 3 },
        { id: 'o887tb', q: 'Which sentence is correct?', options: ['When I finish school, I will go to university.', 'When I will finish school, I will go to university.', 'When I finished school, I will go to university.', 'When I finish school, I went to university.'], answer: 0 },
      ],
    },
    {
      id: 'modalne',
      name: 'Czasowniki modalne i konstrukcje',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur: can, could, may, must, should, will; have to; would like to; tryb rozkazujący; konstrukcje bezokolicznikowe i gerundialne.',
      theory: `
        <table>
          <tr><th>Czasownik</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td><b>can / can't</b></td><td>umiejętność, możliwość, prośba</td><td>I can speak English. Can you help me?</td></tr>
          <tr><td><b>could</b></td><td>uprzejma prośba; umiejętność w przeszłości</td><td>Could you speak more slowly?</td></tr>
          <tr><td><b>may</b></td><td>pozwolenie (grzecznie); możliwość</td><td>May I speak to Sam? It may be too late.</td></tr>
          <tr><td><b>must</b></td><td>wewnętrzny obowiązek; pewność</td><td>I must finish it today. It must be Tom.</td></tr>
          <tr><td><b>mustn't</b></td><td><b>zakaz</b></td><td>You mustn't smoke here.</td></tr>
          <tr><td><b>have to</b></td><td>obowiązek zewnętrzny (przepisy, inni)</td><td>He has to go there.</td></tr>
          <tr><td><b>don't have to</b></td><td><b>brak konieczności</b> (nie musisz)</td><td>I don't have to do it.</td></tr>
          <tr><td><b>should / shouldn't</b></td><td>rada</td><td>You shouldn't do it.</td></tr>
          <tr><td><b>would like to</b></td><td>chęć (grzecznie)</td><td>I would like to meet him.</td></tr>
        </table>
        <div class="tip">💡 Uwaga na pułapkę: <b>mustn't</b> = nie wolno, a <b>don't have to</b> = nie musisz.</div>
        <div class="tip">💡 Po czasownikach modalnych czasownik <b>bez „to”</b>: <i>I can swim</i> (nie <s>I can to swim</s>). Wyjątki: <i>have to</i>, <i>would like to</i>.</div>
        <h3>Bezokolicznik czy forma -ing?</h3>
        <ul>
          <li>Po <b>enjoy, like, love, hate, prefer</b> często -ing: <i>I enjoy walking.</i></li>
          <li>Po przyimku zawsze -ing: <i>I'm good at swimming.</i></li>
          <li>Po przymiotniku + to: <i>I'm very happy to see you.</i></li>
        </ul>
        <h3>Tryb rozkazujący</h3>
        <p><i>Come here! Don't touch that!</i></p>
      `,
      flashcards: [
        ['mustn\'t', 'nie wolno (zakaz)'],
        ['don\'t have to', 'nie musisz (brak konieczności)'],
        ['should', 'powinieneś (rada)'],
        ['May I…?', 'Czy mogę…? (grzeczna prośba o pozwolenie)'],
        ['Could you…?', 'Czy mógłbyś…? (uprzejma prośba)'],
        ['It must be Tom.', 'To na pewno Tom.'],
        ['be good at + -ing', 'być dobrym w czymś: I\'m good at swimming.'],
      ],
      questions: [
        { id: 'v7f2va', q: 'You ___ smoke here. It\'s forbidden.', options: ['don\'t have to', 'mustn\'t', 'shouldn\'t to', 'can'], answer: 1, explain: 'Zakaz → mustn\'t.' },
        { id: 'mrdcyg', q: 'Tomorrow is Sunday, so I ___ get up early.', options: ['mustn\'t', 'don\'t have to', 'can\'t', 'may not'], answer: 1, explain: 'Nie ma takiej konieczności → don\'t have to.' },
        { id: '4wua3a', q: 'You look tired. You ___ go to bed.', options: ['should', 'must to', 'have', 'would'], answer: 0 },
        { id: 'mjc4os', q: '___ you speak more slowly, please?', options: ['Must', 'Should', 'Could', 'Have'], answer: 2 },
        { id: 'g1c8wl', q: 'She ___ to wear a uniform at school.', options: ['must', 'has', 'have', 'can'], answer: 1, explain: 'have to → she has to.' },
        { id: 'jvy2km', q: 'I can ___ the guitar.', options: ['play', 'to play', 'playing', 'plays'], answer: 0 },
        { id: '5e2bvg', q: 'I enjoy ___ in the mountains.', options: ['walk', 'to walking', 'walking', 'walked'], answer: 2 },
        { id: 'gts7zv', q: 'I\'m very good ___ maths.', options: ['in', 'at', 'on', 'for'], answer: 1 },
        { id: '6mt9e1', q: 'I would like ___ a new bike.', options: ['buy', 'to buy', 'buying', 'bought'], answer: 1 },
        { id: 'lmg6cs', q: 'Someone is knocking. It ___ be Tom – he promised to come.', options: ['must', 'mustn\'t', 'has to', 'should to'], answer: 0, explain: 'Pewność, przypuszczenie → must.' },
        { id: '5id26q', q: 'You ___ wear a helmet when you ride a bike. It\'s safer.', options: ['mustn\'t', 'should to', 'shoulds', 'should'], answer: 3 },
        { id: '6776rn', q: '___ I borrow your pen, please?', options: ['Do', 'May', 'Have', 'Must'], answer: 1, explain: 'Grzeczna prośba o pozwolenie → May I…? (albo Can I…?).' },
        { id: 'vn2ecx', q: 'You ___ take a passport to France – an ID card is enough.', options: ['mustn\'t', 'must', 'don\'t have to', 'have to'], answer: 2, explain: 'Nie ma takiej konieczności → don\'t have to.' },
        { id: '5m1azn', q: 'When I was five, I ___ swim.', options: ['can', 'must', 'should', 'could'], answer: 3, explain: 'Umiejętność w przeszłości → could.' },
        { id: 'mqdliv', q: 'Students ___ use phones during the exam. It\'s against the rules.', options: ['don\'t have to', 'should', 'can', 'mustn\'t'], answer: 3, explain: 'Zakaz → mustn\'t.' },
        { id: 'd8il6c', q: 'I\'m interested in ___ photos.', options: ['taking', 'take', 'to take', 'took'], answer: 0, explain: 'Po przyimku (in) – forma -ing.' },
        { id: '5q8v51', q: '___ the door, please!', options: ['Closing', 'To close', 'Close', 'Closes'], answer: 2, explain: 'Tryb rozkazujący – czasownik w formie podstawowej.' },
        { id: 'twd46e', q: 'Which sentence is correct?', options: ['She can speak three languages.', 'She can speaks three languages.', 'She can to speak three languages.', 'She cans speak three languages.'], answer: 0 },
      ],
    },
    {
      id: 'bierna-zaimki',
      name: 'Strona bierna, przyimki, zaimki',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur: strona bierna w Present/Past/Future Simple; przyimki miejsca, czasu i sposobu; zaimki (some, any, much, many, a few, a little, zwrotne, dzierżawcze); too / enough; so, such; there is / there are.',
      theory: `
        <h3>Strona bierna (be + III forma)</h3>
        <table>
          <tr><th>Czas</th><th>Przykład</th></tr>
          <tr><td>Present Simple</td><td>English <b>is spoken</b> all over the world.</td></tr>
          <tr><td>Past Simple</td><td>My car <b>was stolen</b> last night.</td></tr>
          <tr><td>Future Simple</td><td>The results <b>will be announced</b> tomorrow.</td></tr>
        </table>
        <h3>Przyimki czasu</h3>
        <p><b>at</b> + godzina, noc: at 7 o'clock, at night · <b>on</b> + dzień, data: on Monday, on 5th May · <b>in</b> + miesiąc, rok, pora roku/dnia: in July, in 2027, in the morning</p>
        <p>Sposób: <b>by</b> bus/car/train, ale <b>on</b> foot; <b>with</b> a pen.</p>
        <h3>Zaimki i określniki</h3>
        <ul>
          <li><b>some</b> – w zdaniach twierdzących; <b>any</b> – w pytaniach i przeczeniach</li>
          <li><b>many / a few</b> – z rzeczownikami policzalnymi (many books); <b>much / a little</b> – z niepoliczalnymi (much money)</li>
          <li>Zwrotne: myself, yourself, himself, herself, ourselves, themselves</li>
          <li>Dzierżawcze: my – mine, your – yours, our – ours</li>
        </ul>
        <h3>too, enough, so, such</h3>
        <p><b>too</b> + przymiotnik (za): too large · przymiotnik + <b>enough</b> (wystarczająco): sweet enough<br>
        <b>so</b> + przymiotnik: She is so nice. · <b>such</b> + (a) przymiotnik + rzeczownik: She is such a nice girl.</p>
        <h3>There is / there are</h3>
        <p>There <b>is</b> a new restaurant. There <b>are</b> clouds. There <b>were</b> twenty people. There <b>will be</b> a party.</p>
      `,
      flashcards: [
        ['Strona bierna – budowa', 'be + III forma (is made, was built, will be done)'],
        ['at / on / in (czas)', 'at 7 o\'clock · on Monday · in July'],
        ['many / much', 'many + policzalne, much + niepoliczalne'],
        ['some / any', 'some – twierdzenia, any – pytania i przeczenia'],
        ['too', 'za (zbyt): too big'],
        ['enough', 'wystarczająco: big enough'],
        ['such a…', 'such + a + przymiotnik + rzeczownik'],
      ],
      questions: [
        { id: '6975y5', q: 'My bike ___ last week.', options: ['stole', 'was stolen', 'is stealing', 'has stole'], answer: 1, explain: 'Strona bierna w Past Simple: was + III forma.' },
        { id: 'rxh1qv', q: 'English ___ in many countries.', options: ['speaks', 'is spoken', 'spoke', 'is speaking'], answer: 1 },
        { id: 'ywq6fp', q: 'The results ___ tomorrow.', options: ['will announce', 'will be announced', 'are announce', 'announced'], answer: 1 },
        { id: '8ppiv6', q: 'I was born ___ 2013.', options: ['on', 'at', 'in', 'by'], answer: 2 },
        { id: 'nmsn37', q: 'The lesson starts ___ 8 o\'clock.', options: ['in', 'at', 'on', 'by'], answer: 1 },
        { id: 'y835b4', q: 'We have a test ___ Friday.', options: ['in', 'at', 'on', 'by'], answer: 2 },
        { id: '1wx808', q: 'How ___ money have you got?', options: ['many', 'much', 'few', 'lot'], answer: 1, explain: '„Money” jest niepoliczalne → much.' },
        { id: 'xsc4sc', q: 'Have you got ___ brothers or sisters?', options: ['some', 'any', 'much', 'a little'], answer: 1 },
        { id: 'fvsnme', q: 'This T-shirt is ___ big for me. I need a smaller one.', options: ['enough', 'too', 'such', 'so much'], answer: 1 },
        { id: 'nmgjdr', q: 'She is ___ a nice girl!', options: ['so', 'such', 'too', 'very'], answer: 1 },
        { id: 'shxo36', q: 'There ___ twenty people at the party yesterday.', options: ['was', 'were', 'is', 'are'], answer: 1 },
        { id: 'zumyhz', q: 'We go to school ___ bus.', options: ['on', 'by', 'with', 'in'], answer: 1 },
        { id: '61m0a3', q: 'This bridge ___ in 1990.', options: ['built', 'was built', 'is building', 'has built'], answer: 1, explain: 'Most nie zbudował się sam → strona bierna w Past Simple.' },
        { id: 'r2wdg2', q: 'Paper ___ from wood.', options: ['makes', 'is making', 'made', 'is made'], answer: 3, explain: 'Fakt ogólny w stronie biernej: is + III forma.' },
        { id: '3s9qe8', q: 'I hurt ___ when I fell off my bike.', options: ['me', 'mine', 'myself', 'my'], answer: 2, explain: 'Zaimek zwrotny: I → myself.' },
        { id: '8h9zgu', q: 'This isn\'t my bag. Is it ___ ?', options: ['your', 'you', 'yourself', 'yours'], answer: 3, explain: 'Na końcu zdania, bez rzeczownika – yours.' },
        { id: '8b3sxc', q: 'There are only ___ apples left. Let\'s buy more.', options: ['a few', 'a little', 'much', 'any'], answer: 0, explain: '„Apples” są policzalne → a few.' },
        { id: 'tts7nw', q: 'I\'m not tall ___ to reach the top shelf.', options: ['too', 'enough', 'so', 'such'], answer: 1, explain: 'Przymiotnik + enough = wystarczająco.' },
        { id: 'k9w94q', q: 'We usually go skiing ___ winter.', options: ['on', 'in', 'at', 'by'], answer: 1, explain: 'Pory roku → in.' },
        { id: '57c1zd', q: 'I go to school ___ foot.', options: ['by', 'with', 'on', 'in'], answer: 2, explain: 'by bus, by car, ale on foot.' },
      ],
    },
    {
      id: 'functions',
      name: 'Reakcje językowe',
      basis: 'Informator CKE (język angielski): część arkusza „Znajomość funkcji językowych” – reagowanie na wypowiedzi w typowych sytuacjach.',
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
        { id: 'a0eo2i', q: 'Your friend says: „Thank you so much for your help!” You answer:', options: ['You\'re welcome.', 'Bless you!', 'Me too.', 'Here you are.'], answer: 0 },
        { id: 'mhnk9h', q: 'You want to suggest going to the cinema. You say:', options: ['Do you go to the cinema?', 'How about going to the cinema?', 'I went to the cinema.', 'Did you like the cinema?'], answer: 1 },
        { id: '6ul019', q: 'Someone says: „I\'m sorry I\'m late.” You answer:', options: ['Congratulations!', 'Never mind.', 'You\'re welcome.', 'Me neither.'], answer: 1 },
        { id: 'bki7xj', q: 'You want to know the price of a T-shirt. You ask:', options: ['How many is it?', 'How much is it?', 'What is it?', 'How is it?'], answer: 1 },
        { id: 'yvjid4', q: '„What does your sister look like?” – Która odpowiedź pasuje?', options: ['She likes music.', 'She\'s tall with long dark hair.', 'She\'s a teacher.', 'She\'s very kind.'], answer: 1, explain: '„Look like” to pytanie o wygląd.' },
        { id: 'v6f7la', q: '„What is your brother like?” – Która odpowiedź pasuje?', options: ['He\'s friendly and funny.', 'He likes pizza.', 'He\'s at home.', 'He looks like me.'], answer: 0, explain: '„What is he like?” to pytanie o charakter.' },
        { id: 'j0ofnk', q: '„Would you like some tea?” – Grzeczna odpowiedź to:', options: ['Yes, please.', 'Yes, I would like tea yesterday.', 'You\'re welcome.', 'Here you are.'], answer: 0 },
        { id: '81jnyn', q: 'Your friend passed a difficult exam. You say:', options: ['Bless you!', 'Congratulations!', 'Never mind.', 'Excuse me.'], answer: 1 },
        { id: '87pams', q: 'You want to ask for permission to open the window. You say:', options: ['Open the window!', 'May I open the window?', 'You open the window.', 'Did you open the window?'], answer: 1 },
        { id: 'r2gfxy', q: 'Your friend sneezes. You say:', options: ['Cheers!', 'Well done!', 'You\'re welcome.', 'Bless you!'], answer: 3 },
        { id: 'kdkk8h', q: 'You are lost in a city. You ask:', options: ['Where did you go yesterday?', 'Excuse me, how do I get to the station?', 'Excuse me, how much is the station?', 'How are you getting?'], answer: 1 },
        { id: 'rgyrbi', q: '„Can you help me with my homework?” – „___”', options: ['Sure, no problem.', 'You\'re welcome.', 'Bless you!', 'Congratulations!'], answer: 0 },
        { id: 'shs07b', q: '„Here\'s your coffee.” – „___”', options: ['Bless you!', 'You\'re welcome.', 'Thank you.', 'Never mind.'], answer: 2 },
        { id: 'avh8n1', q: '„What does your brother like?” – Która odpowiedź pasuje?', options: ['He\'s tall and slim.', 'He\'s very kind.', 'He likes playing computer games.', 'He\'s fine, thanks.'], answer: 2, explain: '„What does he like?” to pytanie o to, co lubi.' },
        { id: '80hbpw', q: '„Why don\'t we go to the park?” – Która odpowiedź oznacza zgodę?', options: ['That\'s a great idea!', 'I don\'t think so.', 'Never mind.', 'Bless you!'], answer: 0 },
        { id: '0czu9r', q: 'You didn\'t hear what the teacher said. You say:', options: ['Well done!', 'You\'re welcome.', 'Sorry, could you repeat that, please?', 'Here you are.'], answer: 2 },
        { id: 'anxqhv', q: '„How are you?” – „___”', options: ['I\'m 14.', 'I\'m fine, thanks.', 'I\'m from Poland.', 'I\'m a student.'], answer: 1 },
      ],
    },
    {
      id: 'slownictwo',
      name: 'Słownictwo – tematy z podstawy',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy – wariant II.1, wymaganie szczegółowe I.1–13: tematy słownictwa; informator CKE: tematyka tekstów I.1–I.13.',
      theory: `
        <p>Podstawa programowa (wariant II.1, wymaganie I.1–13) wymienia 13 tematów. Teksty na egzaminie dotyczą tych obszarów:</p>
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
        { id: '81g3fz', q: 'Which word means „paragon”?', options: ['recipe', 'receipt', 'refund', 'record'], answer: 1, explain: '„Recipe” to przepis kulinarny – częsta pułapka!' },
        { id: 'oqjb74', q: 'You have a ___ throat. You should drink hot tea.', options: ['sore', 'pain', 'hurt', 'ache'], answer: 0 },
        { id: '4ap1eb', q: 'I\'d like a ___ ticket to Kraków, please. I\'m coming back tomorrow.', options: ['single', 'return', 'one-way', 'back'], answer: 1 },
        { id: 'rerevw', q: 'Which phrase is correct?', options: ['make homework', 'do a mistake', 'make a mistake', 'do a photo'], answer: 2 },
        { id: 'q8291x', q: 'My phone is dead. Can I borrow your ___ ?', options: ['charger', 'device', 'download', 'battery life'], answer: 0 },
        { id: '07f6ef', q: 'A person who works without payment to help others is a…', options: ['volunteer', 'customer', 'coach', 'neighbour'], answer: 0 },
        { id: 'qn4nzy', q: 'The doctor gave me a ___ for some medicine.', options: ['receipt', 'prescription', 'menu', 'ticket'], answer: 1 },
        { id: '6q9j95', q: 'Which word does NOT belong to the topic „Sport”?', options: ['coach', 'score', 'team', 'luggage'], answer: 3 },
        { id: 'htkbap', q: 'Which word means „bagaż”?', options: ['language', 'luggage', 'luck', 'lunch'], answer: 1 },
        { id: '555qbx', q: 'A person who trains a sports team is a…', options: ['coach', 'nurse', 'plumber', 'shop assistant'], answer: 0 },
        { id: 'wguuw8', q: 'Which word belongs to the topic „Zdrowie”?', options: ['platform', 'headache', 'exhibition', 'discount'], answer: 1 },
        { id: 'zxkfv9', q: 'The shoes were too small. I took them back and asked for my money back – I wanted a ___ .', options: ['receipt', 'refund', 'recipe', 'prescription'], answer: 1 },
        { id: 'mrjgzb', q: 'At the station you wait for your train on the ___ .', options: ['luggage', 'menu', 'platform', 'charger'], answer: 2 },
        { id: 'bii0ux', q: 'Which word does NOT belong to the topic „Żywienie”?', options: ['vegetables', 'charger', 'menu', 'dairy'], answer: 1 },
        { id: 'kk5eex', q: '„Okolica, sąsiedztwo” to po angielsku…', options: ['neighbour', 'neither', 'neighbourhood', 'nowhere'], answer: 2, explain: '„Neighbour” to sąsiad.' },
        { id: '7ti7ne', q: 'In a restaurant you ask for the ___ when you want to pay.', options: ['menu', 'recipe', 'refund', 'bill'], answer: 3 },
      ],
    },
    {
      id: 'email',
      name: 'Wypowiedź pisemna: e-mail',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025): wypowiedź pisemna – e-mail lub wpis na blogu, 50–120 wyrazów, trzy podpunkty do rozwinięcia, ok. 20% wyniku.',
      theory: `
        <h3>Zadanie na egzaminie (wg informatora CKE)</h3>
        <ul>
          <li>Forma: <b>e-mail</b> albo <b>wpis na blogu</b>, długość <b>50–120 wyrazów</b>.</li>
          <li>Polecenie jest po polsku i zawiera <b>trzy podpunkty</b>. Początek wypowiedzi jest podany.</li>
          <li>Ocena (10 pkt): <b>treść 0–4</b>, spójność i logika 0–2, zakres środków językowych 0–2, poprawność językowa 0–2.</li>
          <li>Za treść liczy się, do ilu podpunktów się odniosłeś i ile <b>rozwinąłeś</b>. Rozwinięcie to np. dwa odniesienia do podpunktu albo jedno rozbudowane (szczegół, powód, przykład). Same słowa <i>very, much</i> nie wystarczą.</li>
        </ul>
        <h3>Jak napisać e-mail?</h3>
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
          <tr><td>Rada</td><td>You should… / You shouldn't… / Why don't you…?</td></tr>
          <tr><td>Przeprosiny</td><td>I'm sorry, but I can't… because…</td></tr>
        </table>
        <div class="tip">💡 Sprawdź na końcu: czy odniosłeś się do <b>każdego</b> punktu? Czy użyłeś poprawnych czasów?</div>
      `,
      flashcards: [
        ['Początek e-maila do kolegi', 'Hi Tom, / Hello Anna,'],
        ['Podziękowanie za list', 'Thanks for your e-mail.'],
        ['Zakończenie e-maila', 'Write back soon! / See you soon!'],
        ['Podpis', 'Love, / Best wishes, + imię'],
        ['Długość wypowiedzi pisemnej', '50–120 wyrazów'],
        ['Ocena wypowiedzi pisemnej', 'treść 4 + spójność 2 + zakres 2 + poprawność 2 = 10 pkt'],
        ['Rada', 'You should… / Why don\'t you…?'],
        ['Propozycja', 'Why don\'t we…? / How about…?'],
      ],
      questions: [
        { id: 'mtj8ho', q: 'Which is a good way to start an e-mail to a friend?', options: ['Dear Sir or Madam,', 'Hi Kate,', 'To whom it may concern,', 'Yours faithfully,'], answer: 1 },
        { id: 'rakxpt', q: 'Which sentence is a good ending for an e-mail to a friend?', options: ['Write back soon!', 'Thanks for your e-mail.', 'I\'m writing to tell you…', 'Last weekend I went…'], answer: 0 },
        { id: 'e2v2hc', q: 'You want to give advice. Which sentence fits?', options: ['You should talk to her.', 'I went to the cinema.', 'Thanks for your e-mail.', 'How much is it?'], answer: 0 },
        { id: 'rj621k', q: 'Ile wyrazów powinna mieć wypowiedź pisemna na egzaminie z angielskiego?', options: ['20–40', '50–120', '150–200', 'co najmniej 200'], answer: 1 },
        { id: 'aidkh8', q: 'Ile podpunktów zawiera polecenie do wypowiedzi pisemnej?', options: ['jeden', 'dwa', 'trzy', 'pięć'], answer: 2 },
        { id: 'z6c737', q: 'Co trzeba zrobić z punktami podanymi w poleceniu?', options: ['wybrać jeden z nich', 'odnieść się do każdego i go rozwinąć', 'przepisać je po polsku', 'pominąć, jeśli tekst jest długi'], answer: 1 },
        { id: '4i93je', q: 'You describe last weekend. Which sentence is correct?', options: ['Last weekend I go to the mountains.', 'Last weekend I have gone to the mountains.', 'Last weekend I went to the mountains.', 'Last weekend I am going to the mountains.'], answer: 2, explain: '„Last weekend” → Past Simple.' },
        { id: '1f4srt', q: 'You want to suggest meeting. Which sentence fits?', options: ['Why don\'t we meet on Saturday?', 'Why didn\'t we meet on Saturday?', 'We met on Saturday.', 'Do we meet on Saturday?'], answer: 0 },
        { id: 'jgl6qm', q: 'Which sentence is a good start of an e-mail to a friend who wrote to you?', options: ['Write back soon!', 'Bye for now,', 'Thanks for your e-mail.', 'Best wishes,'], answer: 2 },
        { id: 'vxbt6d', q: 'You can\'t come to a party. Which sentence fits?', options: ['I\'m sorry, but I can\'t come because I\'m ill.', 'I\'m sorry, but I can come.', 'Congratulations on your party!', 'Why don\'t we come?'], answer: 0 },
        { id: 'xngdnu', q: 'You want to ask your friend for advice. Which sentence fits?', options: ['You should do it.', 'What do you think I should do?', 'I did it yesterday.', 'How much is it?'], answer: 1 },
        { id: 'lrpdnm', q: 'Which sentence gives an opinion?', options: ['The film started at 6 p.m.', 'I went to the cinema with Tom.', 'Write back soon!', 'In my opinion, the film was really funny.'], answer: 3 },
        { id: 'xgxalw', q: 'Ile punktów najwyżej można dostać za treść wypowiedzi pisemnej?', options: ['2', '6', '10', '4'], answer: 3 },
        { id: '2w85fy', q: 'Ile punktów łącznie można dostać za wypowiedź pisemną na egzaminie z angielskiego?', options: ['4', '20', '45', '10'], answer: 3, explain: 'Treść 4 + spójność 2 + zakres środków 2 + poprawność 2 = 10 pkt.' },
      ],
    },
  ],
});
