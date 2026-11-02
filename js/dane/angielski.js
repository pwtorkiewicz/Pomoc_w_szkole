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
        { id: 'd9rfp3', q: 'I can\'t talk now. I ___ my homework.', options: ['do', 'does', 'am doing', 'did'], answer: 2, explain: '„I can\'t talk now” – czynność trwa w tej chwili → Present Continuous: I am doing.' },
        { id: 'len0z8', q: 'He ___ like coffee.', options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'], answer: 1, explain: 'Przeczenie w Present Simple dla he/she/it: doesn\'t + czasownik bez -s → He doesn\'t like coffee.' },
        { id: 'g5mfk1', q: '___ you often play football?', options: ['Are', 'Does', 'Do', 'Is'], answer: 2, explain: '„Often” → Present Simple; pytanie z „you” zaczynasz od Do.' },
        { id: '5sgy4e', q: 'I ___ what you mean.', options: ['am understanding', 'understand', 'understands', 'am understand'], answer: 1, explain: '„Understand” to czasownik stanu – nie używamy go w Continuous.' },
        { id: 'mp4w5u', q: 'This week I ___ with my grandparents because my parents are away.', options: ['stay', 'am staying', 'stays', 'staying'], answer: 1, explain: 'Sytuacja tymczasowa (this week) → Present Continuous.' },
        { id: 'o6zxd5', q: 'The train ___ at 7:15 every morning.', options: ['is leaving', 'leave', 'leaves', 'left'], answer: 2, explain: 'Rozkład jazdy → Present Simple.' },
        { id: 'nunukl', q: 'What ___ she doing now?', options: ['does', 'do', 'is', 'are'], answer: 2, explain: '„Now” i „doing” → Present Continuous; dla „she” używasz is: What is she doing?' },
        { id: 'lf9k3k', q: 'My brother ___ TV every evening.', options: ['watch', 'is watching', 'watchs', 'watches'], answer: 3, explain: '„Every evening” → Present Simple; po „watch” w 3. os. dodajemy -es.' },
        { id: 'mql62v', q: 'Listen! Somebody ___ at the door.', options: ['knocks', 'knock', 'is knocking', 'knocked'], answer: 2, explain: '„Listen!” – dzieje się to teraz → Present Continuous.' },
        { id: '9fqqek', q: '___ your sister speak French?', options: ['Does', 'Do', 'Is', 'Are'], answer: 0, explain: '„Your sister” to „she”, więc pytanie w Present Simple zaczynasz od Does, a czasownik zostaje bez -s.' },
        { id: 'mwspkz', q: 'We ___ dinner right now. Can I call you later?', options: ['have', 'are having', 'has', 'had'], answer: 1, explain: '„Right now” → Present Continuous.' },
        { id: 'bynols', q: 'I ___ the answer to this question.', options: ['am knowing', 'knows', 'knowing', 'know'], answer: 3, explain: '„Know” to czasownik stanu – bez formy -ing.' },
        { id: '563t8m', q: 'She ___ eat meat. She\'s a vegetarian.', options: ['doesn\'t', 'don\'t', 'isn\'t', 'not'], answer: 0, explain: 'Mówisz o jej stałym zwyczaju → Present Simple; przeczenie dla „she” to doesn\'t + czasownik (doesn\'t eat).' },
        { id: 'brp4l2', q: 'How often ___ you go swimming?', options: ['does', 'do', 'are', 'is'], answer: 1, explain: '„How often” pyta o zwyczaj → Present Simple; z „you” używasz do.' },
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
        { id: 'rc7xr0', q: 'I have never ___ to London.', options: ['went', 'go', 'been', 'was'], answer: 2, explain: 'Present Perfect: have + III forma; od „be” III forma to been (be – was/were – been).' },
        { id: 'h82laz', q: 'She ___ already finished her project.', options: ['have', 'has', 'is', 'did'], answer: 1, explain: '„Already” → Present Perfect; dla „she” to has + III forma (has finished).' },
        { id: '9j8bfg', q: 'When ___ you arrive?', options: ['have', 'did', 'do', 'were'], answer: 1, explain: 'Pytanie „when” dotyczy konkretnego momentu → Past Simple.' },
        { id: 'z1emok', q: 'They have lived here ___ 2020.', options: ['for', 'since', 'ago', 'from'], answer: 1, explain: '2020 to punkt w czasie → since.' },
        { id: 'udk35j', q: 'I have known her ___ five years.', options: ['since', 'ago', 'for', 'during'], answer: 2, explain: '„Five years” to okres → for.' },
        { id: 'e7lu4j', q: 'Have you finished your homework ___ ?', options: ['already', 'yet', 'just', 'since'], answer: 1, explain: '„Yet” stawiamy na końcu pytań i przeczeń.' },
        { id: 'rixe7u', q: 'We ___ a new car two years ago.', options: ['have bought', 'buy', 'bought', 'were buying'], answer: 2, explain: '„Two years ago” → Past Simple: buy – bought – bought.' },
        { id: 'bz5jvh', q: 'I was watching TV when the phone ___ .', options: ['was ringing', 'rang', 'rings', 'has rung'], answer: 1, explain: 'Krótka czynność przerywająca dłuższą → Past Simple.' },
        { id: 'vq6kq8', q: 'What ___ you doing at 8 p.m. yesterday?', options: ['did', 'was', 'were', 'have'], answer: 2, explain: 'Past Continuous: were + you + -ing.' },
        { id: 'g7q5gk', q: 'She ___ to the party last Saturday.', options: ['didn\'t came', 'didn\'t come', 'hasn\'t come', 'doesn\'t come'], answer: 1, explain: '„Last Saturday” → Past Simple; po „didn\'t” czasownik w I formie.' },
        { id: '22k8gc', q: 'At 7 p.m. yesterday I ___ dinner with my family.', options: ['have had', 'am having', 'was having', 'have'], answer: 2, explain: 'Czynność trwająca w określonym momencie przeszłości → Past Continuous.' },
        { id: 'ak789p', q: 'She has lived in Gdańsk ___ she was born.', options: ['for', 'ago', 'during', 'since'], answer: 3, explain: 'Od momentu narodzin – punkt w czasie → since.' },
        { id: '82ewty', q: 'Have you ever ___ a famous person?', options: ['meet', 'met', 'meeted', 'meeting'], answer: 1, explain: 'Present Perfect: have + III forma (meet – met – met).' },
        { id: 'oe5w8s', q: 'I ___ my grandma three days ago.', options: ['have visited', 'visit', 'am visiting', 'visited'], answer: 3, explain: '„Ago” → Past Simple.' },
        { id: '5wekq9', q: 'They ___ their homework yet.', options: ['haven\'t did', 'hasn\'t done', 'haven\'t done', 'don\'t done'], answer: 2, explain: 'Present Perfect: they + haven\'t + III forma.' },
        { id: 'e8pr12', q: '___ you see the match last night?', options: ['Have', 'Did', 'Were', 'Do'], answer: 1, explain: '„Last night” → Past Simple, a pytanie tworzysz z did: Did you see…?' },
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
        { id: '50s67b', q: 'I think she ___ the competition.', options: ['wins', 'is winning', 'will win', 'won'], answer: 2, explain: 'Po „I think” przewidujesz (wyrażasz opinię) → will: she will win.' },
        { id: 'xhhav0', q: 'Next year I ___ study in Kraków. I\'ve already decided.', options: ['will', 'am going to', 'study', 'would'], answer: 1, explain: 'Wcześniej podjęta decyzja (plan) → going to.' },
        { id: 'guh8dd', q: 'The concert ___ at 8 p.m. (programme)', options: ['starts', 'will starting', 'is going start', 'start'], answer: 0, explain: 'Program koncertu działa jak rozkład jazdy → Present Simple: The concert starts at 8 p.m. Pozostałe formy są niepoprawne.' },
        { id: 'tvt97y', q: 'Don\'t worry, I ___ tell anyone your secret. I promise!', options: ['won\'t', 'am not going', 'don\'t', 'not will'], answer: 0, explain: 'Obietnica → will / won\'t.' },
        { id: 'nghzj5', q: 'I\'m sure you ___ the exam.', options: ['pass', 'are passing', 'passed', 'will pass'], answer: 3, explain: 'Po „I\'m sure” – przewidywanie → will.' },
        { id: 'b3mhyp', q: 'Kate has bought some paint. She ___ paint her room.', options: ['is going to', 'paints', 'painted', 'is paint'], answer: 0, explain: 'Zamiar zaplanowany wcześniej → be going to.' },
        { id: 'xnqj7m', q: 'Our flight ___ at 6:30 tomorrow morning. (rozkład lotów)', options: ['is leave', 'leaving', 'leaves', 'left'], answer: 2, explain: 'Rozkłady jazdy i lotów → Present Simple.' },
        { id: 'h4uh3y', q: 'Which sentence is correct?', options: ['It will probably rain tomorrow.', 'It probably wills rain tomorrow.', 'It will probably raining tomorrow.', 'It is probably rain tomorrow.'], answer: 0, explain: '„Probably” → will, a po will czasownik stoi w I formie bez końcówek: will rain. Samo „will” też się nie odmienia (nie „wills”).' },
        { id: '3vmqxd', q: 'What ___ you going to do this weekend?', options: ['do', 'are', 'will', 'is'], answer: 1, explain: 'Be going to: pytanie z „you” zaczynasz od are – What are you going to do?' },
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
        { id: 'u7sxv3', q: 'Past Simple od „teach” to…', options: ['teached', 'taught', 'thought', 'tought'], answer: 1, explain: 'teach – taught – taught (grupa -aught, jak catch – caught). „Thought” to forma od „think”.' },
        { id: 'c4wc1i', q: 'III forma (Past Participle) od „write” to…', options: ['wrote', 'writed', 'written', 'writen'], answer: 2, explain: 'write – wrote – written: III forma ma podwójne „t”. „Wrote” to II forma (Past Simple).' },
        { id: 'g3blk0', q: 'She has ___ her keys again!', options: ['lose', 'losed', 'lost', 'loosen'], answer: 2, explain: 'Present Perfect: has + III forma; lose – lost – lost. „Loosen” to zupełnie inne słowo.' },
        { id: 'lei9er', q: 'I ___ a great film yesterday.', options: ['saw', 'seen', 'seed', 'have seen'], answer: 0, explain: '„Yesterday” → Past Simple, czyli II forma: see – saw – seen. „Have seen” nie łączy się z „yesterday”.' },
        { id: '0v2frn', q: 'Have you ever ___ sushi?', options: ['ate', 'eat', 'eaten', 'eated'], answer: 2, explain: 'Have you ever… → Present Perfect, czyli have + III forma: eat – ate – eaten.' },
        { id: 'sbxw32', q: 'He ___ the window by accident.', options: ['breaked', 'broke', 'broken', 'brake'], answer: 1, explain: 'Zakończona czynność w przeszłości → Past Simple: break – broke – broken. „Broken” to III forma (np. has broken).' },
        { id: 'j33y5s', q: 'III forma od „swim” to…', options: ['swam', 'swimmed', 'swum', 'swimming'], answer: 2, explain: 'swim – swam – swum: II forma ma „a”, a III forma – „u”.' },
        { id: 'ogc67e', q: 'We ___ to Spain last summer.', options: ['flew', 'flied', 'flown', 'fly'], answer: 0, explain: '„Last summer” → Past Simple: fly – flew – flown.' },
        { id: 'juzg9k', q: 'Past Simple od „bring” to…', options: ['brang', 'brought', 'bringed', 'brung'], answer: 1, explain: 'bring – brought – brought (grupa -ought, jak buy – bought i think – thought).' },
        { id: '9hmq0m', q: 'Który czasownik ma wszystkie trzy formy takie same?', options: ['go', 'put', 'take', 'give'], answer: 1, explain: 'put – put – put.' },
        { id: 'lb3m0l', q: 'Past Simple od „think” to…', options: ['thought', 'thinked', 'taught', 'thank'], answer: 0, explain: 'Uwaga: „taught” to forma od „teach”.' },
        { id: 'lnvzqx', q: 'III forma od „speak” to…', options: ['spoke', 'speaked', 'spoken', 'speaken'], answer: 2, explain: 'speak – spoke – spoken: „spoke” to II forma, a III forma kończy się na -en.' },
        { id: 'toa6dw', q: 'I ___ my homework before dinner yesterday.', options: ['did', 'done', 'doed', 'have done'], answer: 0, explain: '„Yesterday” → Past Simple: do – did – done.' },
        { id: '8292du', q: 'They ___ the match 0 : 3 last Sunday.', options: ['losed', 'loosed', 'lose', 'lost'], answer: 3, explain: '„Last Sunday” → Past Simple: lose – lost – lost. To czasownik nieregularny, więc nie dodajesz -ed.' },
        { id: 'fq58bt', q: 'Have you ___ my phone? I can\'t find it.', options: ['seen', 'saw', 'see', 'seed'], answer: 0, explain: 'Have you… → Present Perfect, czyli have + III forma: see – saw – seen.' },
        { id: '8udgix', q: 'III forma od „choose” to…', options: ['chose', 'chosen', 'choosed', 'choosen'], answer: 1, explain: 'choose – chose – chosen: „chose” to II forma, a III forma kończy się na -en: chosen.' },
        { id: 'nwboiw', q: 'He ___ me a funny story yesterday.', options: ['telled', 'tell', 'tolded', 'told'], answer: 3, explain: '„Yesterday” → Past Simple: tell – told – told.' },
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
        { id: 'vm9u2x', q: 'Stopień wyższy od „big” to…', options: ['biger', 'bigger', 'more big', 'biggest'], answer: 1, explain: 'Big kończy się na samogłoskę + spółgłoskę, więc podwajasz spółgłoskę: bigger. „Biggest” to stopień najwyższy.' },
        { id: '6m5lyb', q: 'This is the ___ day of my life!', options: ['good', 'better', 'best', 'goodest'], answer: 2, explain: '„The … day of my life” – najlepszy ze wszystkich → stopień najwyższy: good – better – the best.' },
        { id: 'w2lp7i', q: 'My test result was ___ than yours.', options: ['badder', 'worse', 'worst', 'more bad'], answer: 1, explain: '„Than” wymaga stopnia wyższego, a bad jest nieregularny: bad – worse – the worst.' },
        { id: 'o06azr', q: 'Tom is taller ___ Jack.', options: ['that', 'then', 'than', 'as'], answer: 2, explain: 'Po stopniu wyższym porównujesz za pomocą „than” (niż): taller than. Uważaj na pisownię – „then” to inne słowo.' },
        { id: '7lmkti', q: 'She is as tall ___ her brother.', options: ['than', 'as', 'like', 'that'], answer: 1, explain: '„Tak samo … jak” to as … as: She is as tall as her brother.' },
        { id: 'jw0joz', q: 'This book is ___ than that one.', options: ['interestinger', 'more interesting', 'most interesting', 'the more interesting'], answer: 1, explain: 'Interesting to długi przymiotnik → more interesting. Przed „than” stoi stopień wyższy, nie najwyższy.' },
        { id: 'i9is7v', q: 'Stopień najwyższy od „happy” to…', options: ['the happyest', 'the most happy', 'the happiest', 'the happier'], answer: 2, explain: 'Przymiotnik na -y: zamieniasz y na i i dodajesz -est → the happiest. „Happier” to stopień wyższy.' },
        { id: 'k66n1h', q: 'Mount Everest is ___ mountain in the world.', options: ['the highest', 'higher', 'the most high', 'highest than'], answer: 0, explain: '„In the world” – najwyższa ze wszystkich → stopień najwyższy. High jest krótki, więc the highest, a nie „the most high”.' },
        { id: 'yumkmt', q: 'Stopień wyższy od „hot” to…', options: ['hoter', 'hotter', 'more hot', 'hottest'], answer: 1, explain: 'Samogłoska + spółgłoska na końcu → podwajamy spółgłoskę.' },
        { id: '77b8bm', q: 'This is the ___ film I have ever seen. I hated it!', options: ['baddest', 'worse', 'worst', 'most bad'], answer: 2, explain: '„The … film I have ever seen” → stopień najwyższy; „I hated it”, więc najgorszy: bad – worse – the worst.' },
        { id: 'u6q9q1', q: 'Stopień najwyższy od „expensive” to…', options: ['the expensivest', 'the more expensive', 'the most expensive', 'the most expensiver'], answer: 2, explain: 'Expensive to długi przymiotnik → the most expensive, bez końcówki -est.' },
        { id: 'xc1aqv', q: 'Today it\'s not as cold ___ yesterday.', options: ['than', 'like', 'that', 'as'], answer: 3, explain: '„Nie tak … jak” to not as … as: not as cold as yesterday.' },
        { id: 'wjaj5j', q: 'Which sentence is correct?', options: ['My bag is heavier than yours.', 'My bag is more heavy than yours.', 'My bag is heavyer than yours.', 'My bag is heavier that yours.'], answer: 0, explain: 'Heavy kończy się na -y → heavier, a „niż” to than. W ostatnim zdaniu jest „that” zamiast „than”.' },
        { id: 'wmq2xw', q: 'I have ___ free time than my sister.', options: ['least', 'fewer', 'littler', 'less'], answer: 3, explain: 'little – less – the least; „time” jest niepoliczalne.' },
        { id: 'voet57', q: 'Stopień wyższy od „easy” to…', options: ['easier', 'easyer', 'more easy', 'easiest'], answer: 0, explain: 'Easy kończy się na -y, więc zamieniasz y na i: easier. „Easiest” to stopień najwyższy.' },
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
        { id: '2squc6', q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'stayed', 'are stay'], answer: 1, explain: 'Zdanie warunkowe typu I: If + Present Simple (rains), will + czasownik (will stay).' },
        { id: 'yu4kzd', q: 'If she ___ hard, she will pass the exam.', options: ['will study', 'studies', 'studied', 'study'], answer: 1, explain: 'Po „if” w trybie I – Present Simple, nie „will”.' },
        { id: 'bwj979', q: 'When it ___ hot, we drink more water.', options: ['is', 'will be', 'was', 'be'], answer: 0, explain: 'Typ 0 – coś, co dzieje się zawsze: When + Present Simple, Present Simple (it is hot, we drink).' },
        { id: 'uu0358', q: 'Które zdanie jest poprawne?', options: ['If it will be sunny, we will go out.', 'If it is sunny, we will go out.', 'If it is sunny, we go out tomorrow.', 'If it was sunny, we will go out.'], answer: 1, explain: 'Typ I: If + Present Simple, will + czasownik. Po „if” nie stawiasz „will” ani czasu przeszłego, a o konkretnej przyszłości (tomorrow) mówisz z will.' },
        { id: 'bsd6ho', q: 'I went to the shop ___ buy some bread.', options: ['for', 'to', 'so', 'because'], answer: 1, explain: 'Cel wyrażamy przez „to” + czasownik.' },
        { id: 'w5dpxy', q: 'I was tired, ___ I went to bed early.', options: ['because', 'so', 'or', 'before'], answer: 1, explain: 'Pójście spać to skutek zmęczenia → so (więc). „Because” wprowadza przyczynę.' },
        { id: 'k6xw7b', q: 'She stayed at home ___ she was ill.', options: ['so', 'because', 'and', 'if'], answer: 1, explain: 'Choroba to przyczyna zostania w domu → because (ponieważ). „So” wprowadza skutek.' },
        { id: 'tndeu5', q: 'The girl ___ sits next to me is my cousin.', options: ['which', 'who', 'what', 'where'], answer: 1, explain: 'O ludziach – who.' },
        { id: 'susvl3', q: 'If you mix red and white, you ___ pink.', options: ['got', 'getting', 'get', 'are get'], answer: 2, explain: 'To zawsze prawda → zero conditional (Present Simple w obu częściach).' },
        { id: 'cr3mc1', q: 'If I ___ time tomorrow, I will call you.', options: ['will have', 'had', 'have', 'having'], answer: 2, explain: 'Po „if” – Present Simple, nie „will”.' },
        { id: 'tav0n5', q: 'If you don\'t hurry, you ___ the bus.', options: ['missed', 'are missing', 'will miss', 'misses'], answer: 2, explain: 'Typ I: If + Present Simple (don\'t hurry), will + czasownik → you will miss the bus.' },
        { id: '41mtfo', q: 'I\'ll text you when I ___ home.', options: ['will get', 'got', 'get', 'getting'], answer: 2, explain: 'Po „when” o przyszłości – Present Simple.' },
        { id: '6q2v10', q: 'This is the book ___ I told you about.', options: ['who', 'where', 'which', 'what'], answer: 2, explain: 'O rzeczach – which (o ludziach – who).' },
        { id: '8ykx48', q: 'You can have dessert ___ you eat your vegetables.', options: ['so', 'or', 'but', 'if'], answer: 3, explain: 'Zjedzenie warzyw to warunek, więc potrzebujesz if (jeśli).' },
        { id: 'o887tb', q: 'Which sentence is correct?', options: ['When I finish school, I will go to university.', 'When I will finish school, I will go to university.', 'When I finished school, I will go to university.', 'When I finish school, I went to university.'], answer: 0, explain: 'Po „when” mówiącym o przyszłości nie stawiasz „will”: When I finish school, a w drugiej części – I will go.' },
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
        { id: '4wua3a', q: 'You look tired. You ___ go to bed.', options: ['should', 'must to', 'have', 'would'], answer: 0, explain: 'Rada → should + czasownik bez „to”. „Must to” jest błędne – po must też nie ma „to”.' },
        { id: 'mjc4os', q: '___ you speak more slowly, please?', options: ['Must', 'Should', 'Could', 'Have'], answer: 2, explain: 'Uprzejma prośba → Could you…? Must wyraża obowiązek, a should – radę.' },
        { id: 'g1c8wl', q: 'She ___ to wear a uniform at school.', options: ['must', 'has', 'have', 'can'], answer: 1, explain: 'have to → she has to.' },
        { id: 'jvy2km', q: 'I can ___ the guitar.', options: ['play', 'to play', 'playing', 'plays'], answer: 0, explain: 'Po czasownikach modalnych (can) czasownik stoi bez „to” i bez końcówek: I can play.' },
        { id: '5e2bvg', q: 'I enjoy ___ in the mountains.', options: ['walk', 'to walking', 'walking', 'walked'], answer: 2, explain: 'Po „enjoy” używasz formy -ing: I enjoy walking.' },
        { id: 'gts7zv', q: 'I\'m very good ___ maths.', options: ['in', 'at', 'on', 'for'], answer: 1, explain: '„Być dobrym w czymś” to be good at: I\'m good at maths.' },
        { id: '6mt9e1', q: 'I would like ___ a new bike.', options: ['buy', 'to buy', 'buying', 'bought'], answer: 1, explain: 'Po „would like” stawiasz to + czasownik: I would like to buy – to jeden z wyjątków od reguły „bez to”.' },
        { id: 'lmg6cs', q: 'Someone is knocking. It ___ be Tom – he promised to come.', options: ['must', 'mustn\'t', 'has to', 'should to'], answer: 0, explain: 'Pewność, przypuszczenie → must.' },
        { id: '5id26q', q: 'You ___ wear a helmet when you ride a bike. It\'s safer.', options: ['mustn\'t', 'should to', 'shoulds', 'should'], answer: 3, explain: 'Rada (It\'s safer) → should + czasownik bez „to”; should się nie odmienia. „Mustn\'t” oznacza zakaz.' },
        { id: '6776rn', q: '___ I borrow your pen, please?', options: ['Do', 'May', 'Have', 'Must'], answer: 1, explain: 'Grzeczna prośba o pozwolenie → May I…? (albo Can I…?).' },
        { id: 'vn2ecx', q: 'You ___ take a passport to France – an ID card is enough.', options: ['mustn\'t', 'must', 'don\'t have to', 'have to'], answer: 2, explain: 'Nie ma takiej konieczności → don\'t have to.' },
        { id: '5m1azn', q: 'When I was five, I ___ swim.', options: ['can', 'must', 'should', 'could'], answer: 3, explain: 'Umiejętność w przeszłości → could.' },
        { id: 'mqdliv', q: 'Students ___ use phones during the exam. It\'s against the rules.', options: ['don\'t have to', 'should', 'can', 'mustn\'t'], answer: 3, explain: 'Zakaz → mustn\'t.' },
        { id: 'd8il6c', q: 'I\'m interested in ___ photos.', options: ['taking', 'take', 'to take', 'took'], answer: 0, explain: 'Po przyimku (in) – forma -ing.' },
        { id: '5q8v51', q: '___ the door, please!', options: ['Closing', 'To close', 'Close', 'Closes'], answer: 2, explain: 'Tryb rozkazujący – czasownik w formie podstawowej.' },
        { id: 'twd46e', q: 'Which sentence is correct?', options: ['She can speak three languages.', 'She can speaks three languages.', 'She can to speak three languages.', 'She cans speak three languages.'], answer: 0, explain: 'Po can czasownik stoi w I formie bez „to” i bez -s, a samo can się nie odmienia: She can speak.' },
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
        { id: 'rxh1qv', q: 'English ___ in many countries.', options: ['speaks', 'is spoken', 'spoke', 'is speaking'], answer: 1, explain: 'To nie język mówi – ktoś nim mówi, więc strona bierna: is + III forma (is spoken).' },
        { id: 'ywq6fp', q: 'The results ___ tomorrow.', options: ['will announce', 'will be announced', 'are announce', 'announced'], answer: 1, explain: 'Ktoś ogłosi wyniki – strona bierna w przyszłości: will be + III forma (will be announced).' },
        { id: '8ppiv6', q: 'I was born ___ 2013.', options: ['on', 'at', 'in', 'by'], answer: 2, explain: 'Przed rokiem stawiasz in: in 2013.' },
        { id: 'nmsn37', q: 'The lesson starts ___ 8 o\'clock.', options: ['in', 'at', 'on', 'by'], answer: 1, explain: 'Przed godziną stawiasz at: at 8 o\'clock.' },
        { id: 'y835b4', q: 'We have a test ___ Friday.', options: ['in', 'at', 'on', 'by'], answer: 2, explain: 'Przed dniem tygodnia stawiasz on: on Friday.' },
        { id: '1wx808', q: 'How ___ money have you got?', options: ['many', 'much', 'few', 'lot'], answer: 1, explain: '„Money” jest niepoliczalne → much.' },
        { id: 'xsc4sc', q: 'Have you got ___ brothers or sisters?', options: ['some', 'any', 'much', 'a little'], answer: 1, explain: 'W pytaniach używasz any. Much i a little łączą się z niepoliczalnymi, a „brothers” da się policzyć.' },
        { id: 'fvsnme', q: 'This T-shirt is ___ big for me. I need a smaller one.', options: ['enough', 'too', 'such', 'so much'], answer: 1, explain: 'Too + przymiotnik = za (zbyt): too big – za duża, dlatego potrzebna mniejsza. „Enough” znaczy „wystarczająco” i stoi po przymiotniku.' },
        { id: 'nmgjdr', q: 'She is ___ a nice girl!', options: ['so', 'such', 'too', 'very'], answer: 1, explain: 'Przed a + przymiotnik + rzeczownik stawiasz such: such a nice girl. „So” stoi przed samym przymiotnikiem: She is so nice.' },
        { id: 'shxo36', q: 'There ___ twenty people at the party yesterday.', options: ['was', 'were', 'is', 'are'], answer: 1, explain: '„Twenty people” to liczba mnoga, a „yesterday” – przeszłość → There were.' },
        { id: 'zumyhz', q: 'We go to school ___ bus.', options: ['on', 'by', 'with', 'in'], answer: 1, explain: 'Środek transportu: by bus, by car, by train (ale on foot).' },
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
      id: 'rzeczowniki-przedimki',
      name: 'Rzeczowniki, przedimki, liczebniki',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur gramatycznych: rzeczownik 1–4 (policzalne i niepoliczalne, liczba mnoga regularna i nieregularna, forma dzierżawcza, rzeczowniki złożone), przedimek 1–3 (a/an, the, przedimek zerowy), liczebnik 1–2 (główne i porządkowe), zaimek 1, 4, 9 (osobowe w formie podmiotu i dopełnienia, wskazujące, one/ones).',
      theory: `
        <h3>Policzalne i niepoliczalne</h3>
        <ul>
          <li><b>Policzalne</b> – da się je policzyć: <i>a book – two books, an apple – three apples</i>.</li>
          <li><b>Niepoliczalne</b> – bez <i>a/an</i> i bez liczby mnogiej: <i>water, money, information, advice, rice, bread, furniture, homework</i>. Mówimy <i>some information</i>, <i>a piece of advice</i>, <i>a bottle of water</i>, <i>much money</i>.</li>
        </ul>
        <h3>Liczba mnoga</h3>
        <table>
          <tr><th>Reguła</th><th>Przykład</th></tr>
          <tr><td>zwykle + <b>-s</b></td><td>book – books, boy – boys</td></tr>
          <tr><td>po -s, -x, -ch, -sh (i w potato, tomato) + <b>-es</b></td><td>bus – buses, box – boxes, watch – watches, dish – dishes</td></tr>
          <tr><td>spółgłoska + y → <b>-ies</b></td><td>city – cities, baby – babies</td></tr>
          <tr><td>-f / -fe → <b>-ves</b> (w wielu wyrazach)</td><td>leaf – leaves, knife – knives, wife – wives</td></tr>
          <tr><td><b>nieregularne</b></td><td>man – men, woman – women, child – children, person – people, foot – feet, tooth – teeth, mouse – mice, sheep – sheep, fish – fish</td></tr>
        </table>
        <h3>Czyje? – forma dzierżawcza</h3>
        <ul>
          <li><b>'s</b> – osoby i zwierzęta: <i>my sister's room, Tom's bike</i>.</li>
          <li><b>s'</b> – liczba mnoga zakończona na -s: <i>my parents' car</i> (samochód rodziców). Nieregularna liczba mnoga + 's: <i>children's toys</i>.</li>
          <li><b>of</b> – zwykle rzeczy i części czegoś: <i>the colour of her eyes, the end of the film</i>.</li>
        </ul>
        <p><b>Rzeczowniki złożone</b>: <i>washing machine, toothpaste, bus stop, sister-in-law</i> (szwagierka/bratowa).</p>
        <h3>Przedimki: a/an, the, brak przedimka</h3>
        <table>
          <tr><th>Przedimek</th><th>Kiedy?</th><th>Przykład</th></tr>
          <tr><td><b>a / an</b></td><td>jedna rzecz policzalna, wspomniana pierwszy raz; zawód. <b>a</b> przed spółgłoską w wymowie, <b>an</b> przed samogłoską w wymowie</td><td>I saw a dog. She is a teacher. a cup, a university, an animal, an hour</td></tr>
          <tr><td><b>the</b></td><td>rzecz już znana lub wspomniana wcześniej; jedyna w swoim rodzaju; stopień najwyższy; liczebniki porządkowe; niektóre nazwy (the USA, the UK, rzeki, morza, oceany)</td><td>The dog was big. the sun, the best, the first, the Vistula</td></tr>
          <tr><td><b>—</b> (brak)</td><td>posiłki, sporty, języki, większość krajów i miast, ogólne stwierdzenia o rzeczownikach w liczbie mnogiej lub niepoliczalnych, wyrażenia typu go home, go to school, by bus</td><td>have dinner, play football, speak English, Poland, I like cats.</td></tr>
        </table>
        <div class="tip">💡 Liczy się <b>wymowa</b>, nie litera: <i>a university</i> [ju:], <i>an hour</i> (h nieme).</div>
        <h3>Liczebniki</h3>
        <ul>
          <li>Główne: <i>one, two, three… thirteen, fourteen… twenty, twenty-one… forty (bez „u”!), a hundred, a thousand</i>.</li>
          <li>Porządkowe: <i>first, second, third, fourth, fifth, eighth, ninth, twelfth, twentieth, twenty-first, twenty-fourth</i> – zwykle z <i>the</i>.</li>
          <li>Daty: piszemy <i>5th May</i> albo <i>May 5th</i>, mówimy <i>the fifth of May</i>; <i>on 5th May</i>, <i>in 2027</i>.</li>
        </ul>
        <h3>Zaimki</h3>
        <ul>
          <li>Osobowe – podmiot / dopełnienie: <i>I – me, you – you, he – him, she – her, it – it, we – us, they – them</i>. Po czasowniku i przyimku – forma dopełnienia: <i>Help me! I play with him.</i></li>
          <li>Wskazujące: <i>this</i> (ten, blisko) – <i>these</i> (te, blisko); <i>that</i> (tamten, daleko) – <i>those</i> (tamte, daleko).</li>
          <li><i>one / ones</i> – zamiast powtarzania rzeczownika: <i>I'll take the green one. These shoes are small – have you got bigger ones?</i></li>
        </ul>
      `,
      flashcards: [
        ['child', 'children (dzieci)'],
        ['man / woman', 'men / women'],
        ['person', 'people (ludzie)'],
        ['foot / tooth', 'feet / teeth'],
        ['mouse', 'mice (myszy)'],
        ['knife / leaf', 'knives / leaves'],
        ['city / boy', 'cities / boys'],
        ['Niepoliczalne', 'water, money, information, advice, rice, bread, furniture, homework'],
        ['a czy an?', 'Zależy od wymowy: a university, a cup · an hour, an animal'],
        ['Kiedy the?', 'rzecz znana / wspomniana; jedyna (the sun); the best; the first; the USA'],
        ['Bez przedimka', 'posiłki (have dinner), sporty (play football), języki, większość krajów'],
        ['my sister\'s room', '\'s – czyjś (pokój siostry)'],
        ['my parents\' car', 's\' – liczba mnoga na -s (samochód rodziców)'],
        ['40, 9., 12.', 'forty · ninth · twelfth'],
        ['24 maja (data)', '24th May – „the twenty-fourth of May”'],
        ['I / he / she / we / they – dopełnienie', 'me / him / her / us / them'],
        ['this / that – liczba mnoga', 'these / those'],
        ['one / ones', 'I\'ll take the green one. Have you got bigger ones?'],
      ],
      questions: [
        { id: 'xdhlu5', q: 'Liczba mnoga od „child” to…', options: ['childs', 'children', 'childrens', 'childes'], answer: 1, explain: 'child – children to nieregularna liczba mnoga; „childrens” ma niepotrzebne -s.' },
        { id: 'isc35s', q: 'Liczba mnoga od „woman” to…', options: ['womans', 'womens', 'womanes', 'women'], answer: 3, explain: 'woman – women: nieregularna liczba mnoga, bez końcówki -s.' },
        { id: 'r8jpc3', q: 'Liczba mnoga od „tooth” to…', options: ['tooths', 'teeth', 'teeths', 'toothes'], answer: 1, explain: 'tooth – teeth: nieregularna liczba mnoga (jak foot – feet).' },
        { id: '0ty2ic', q: 'Liczba mnoga od „city” to…', options: ['cities', 'citys', 'cityes', 'citis'], answer: 0, explain: 'Spółgłoska + y → -ies (ale boy – boys).' },
        { id: 'kf719t', q: 'Liczba mnoga od „knife” to…', options: ['knives', 'knifes', 'knifs', 'knive'], answer: 0, explain: 'Wiele rzeczowników na -f/-fe ma liczbę mnogą na -ves: knife – knives (jak leaf – leaves).' },
        { id: 'izqmp2', q: 'Liczba mnoga od „box” to…', options: ['boxs', 'boxen', 'boxes', 'boxies'], answer: 2, explain: 'Po -x dodajemy -es.' },
        { id: 'niem6h', q: 'Liczba mnoga od „mouse” to…', options: ['mice', 'mouses', 'mices', 'meese'], answer: 0, explain: 'mouse – mice: nieregularna liczba mnoga, bez -s.' },
        { id: '8pv5ha', q: 'Which noun is uncountable?', options: ['book', 'information', 'chair', 'apple'], answer: 1, explain: 'Information jest niepoliczalne – nie ma a/an ani liczby mnogiej (some information). Book, chair i apple da się policzyć.' },
        { id: '011rwf', q: 'Can you give me some ___ ? I don\'t know what to do.', options: ['advices', 'advice', 'an advice', 'a advice'], answer: 1, explain: '„Advice” jest niepoliczalne: some advice, a piece of advice.' },
        { id: '7yeska', q: 'We need ___ new furniture for the living room.', options: ['some', 'a', 'many', 'an'], answer: 0, explain: '„Furniture” jest niepoliczalne – bez a/an i bez many.' },
        { id: '63jacx', q: 'This is my ___ room. She is 16.', options: ['sisters', 'sister', 'sister\'s', 'sisters\'s'], answer: 2, explain: 'Jedna siostra → \'s.' },
        { id: 't0crb7', q: 'The car belongs to my mum and dad. It\'s my ___ car.', options: ['parent\'s', 'parents\'s', 'parents\'', 'parents'], answer: 2, explain: 'Liczba mnoga zakończona na -s → sam apostrof: parents\'.' },
        { id: 'zy7z72', q: 'The ___ toys are all over the floor.', options: ['childrens\'', 'children', 'children\'s', 'childs\''], answer: 2, explain: 'Nieregularna liczba mnoga (children) + \'s.' },
        { id: 'qlmg8v', q: 'Which phrase is correct?', options: ['the her eyes colour', 'her eyes\'s colour', 'the colour of her eyes', 'the colour her of eyes'], answer: 2, explain: 'O rzeczach i częściach czegoś mówisz zwykle z of: the colour of her eyes.' },
        { id: 'dn6sy5', q: 'Where\'s the ___ ? I want to brush my teeth.', options: ['washing machine', 'bus stop', 'sister-in-law', 'toothpaste'], answer: 3, explain: 'Do mycia zębów (brush my teeth) potrzebujesz pasty – toothpaste, rzeczownik złożony z tooth + paste.' },
        { id: 'faadmx', q: 'I saw ___ elephant at the zoo.', options: ['a', 'many', 'much', 'an'], answer: 3, explain: '„Elephant” zaczyna się samogłoską w wymowie → an.' },
        { id: 'ebtn7n', q: 'My aunt is ___ nurse.', options: ['an', '— (bez przedimka)', 'some', 'a'], answer: 3, explain: 'Przed zawodem stawiamy a/an.' },
        { id: 'eq0pj8', q: 'The journey takes ___ hour.', options: ['a', 'many', 'much', 'an'], answer: 3, explain: 'W „hour” h jest nieme – wymowa zaczyna się samogłoską.' },
        { id: 'byr049', q: 'My brother studies at ___ university in Kraków.', options: ['a', 'an', 'many', 'much'], answer: 0, explain: '„University” wymawiamy [ju:…] – zaczyna się dźwiękiem spółgłoskowym, więc a.' },
        { id: 'qkqf5l', q: '___ sun is very hot today.', options: ['The', 'A', 'An', '— (bez przedimka)'], answer: 0, explain: 'Słońce jest jedyne w swoim rodzaju → the.' },
        { id: '9pe86e', q: 'We usually have ___ dinner at 6 p.m.', options: ['a', '— (bez przedimka)', 'an', 'the'], answer: 1, explain: 'Przed nazwami posiłków nie stawiamy przedimka.' },
        { id: 'i4iwco', q: 'He plays ___ football every Saturday.', options: ['the', 'a', 'an', '— (bez przedimka)'], answer: 3, explain: 'Przed nazwami sportów nie stawiamy przedimka.' },
        { id: '031g5a', q: 'I live in ___ Poland, but my cousin lives in ___ USA.', options: ['the / —', 'the / the', '— / the', '— / —'], answer: 2, explain: 'Przed większością krajów nie ma przedimka (Poland), ale mówisz the USA.' },
        { id: 'ck8b9s', q: 'This is ___ best pizza in town!', options: ['the', 'a', 'an', '— (bez przedimka)'], answer: 0, explain: 'Stopień najwyższy → the.' },
        { id: 'oic5z7', q: 'I saw a cat in the garden. ___ cat was black.', options: ['The', 'A', 'An', '— (bez przedimka)'], answer: 0, explain: 'Kot był już wspomniany → the.' },
        { id: 'jn9j7q', q: 'Jak zapisać słownie liczbę 40?', options: ['fourty', 'forty', 'fourteen', 'fortie'], answer: 1, explain: '40 to forty – bez „u”, choć 4 to four. Fourteen to 14.' },
        { id: 'r2k2km', q: 'Liczebnik porządkowy od „nine” to…', options: ['nineth', 'nine', 'nineteenth', 'ninth'], answer: 3, explain: 'Porządkowy od nine to ninth – bez „e” (nie „nineth”). Nineteenth to „dziewiętnasty”.' },
        { id: 'azco1x', q: 'Liczebnik porządkowy od „twelve” to…', options: ['twelfth', 'twelveth', 'twelvth', 'twelf'], answer: 0, explain: 'Porządkowy od twelve to twelfth: „ve” zamienia się na „f” i dochodzi -th.' },
        { id: 'dwlw4v', q: 'My birthday is on the ___ of June. (24 czerwca)', options: ['twenty-four', 'twentieth-four', 'twenty-fourth', 'twenty-fourteenth'], answer: 2, explain: 'W dacie stawiasz liczebnik porządkowy: twenty-fourth (the twenty-fourth of June). Twenty-four to zwykłe „dwadzieścia cztery”.' },
        { id: 'bq283q', q: 'Która liczba to „a thousand”?', options: ['100', '10 000', '1 000 000', '1000'], answer: 3, explain: 'A thousand to tysiąc, czyli 1000.' },
        { id: 'hsc8ge', q: 'Can you help ___ ? I can\'t do it alone.', options: ['I', 'my', 'me', 'mine'], answer: 2, explain: 'Po czasowniku – forma dopełnienia: me.' },
        { id: 'z9g4yc', q: 'I love my cousins. I often visit ___ .', options: ['they', 'them', 'their', 'theirs'], answer: 1, explain: 'Po czasowniku (visit) stawiasz zaimek w formie dopełnienia: they → them.' },
        { id: 'pie9a1', q: 'Mark is my best friend. I play tennis with ___ every week.', options: ['him', 'he', 'his', 'her'], answer: 0, explain: 'Po przyimku „with” – forma dopełnienia: him.' },
        { id: 'qqrlej', q: 'Look at ___ birds over there in the sky!', options: ['those', 'this', 'that', 'them'], answer: 0, explain: 'Liczba mnoga i daleko („over there”) → those.' },
        { id: 'lvlbpn', q: 'I don\'t like the red T-shirt. I\'ll take the blue ___ .', options: ['ones', 'it', 'once', 'one'], answer: 3, explain: 'Jedna koszulka → one.' },
        { id: '7wggnb', q: 'These jeans are too small. Have you got bigger ___ ?', options: ['one', 'it', 'once', 'ones'], answer: 3, explain: '„Jeans” są w liczbie mnogiej → ones.' },
        { id: 'o8nish', q: 'Prawda czy fałsz?\nRzeczownik „money” jest w języku angielskim niepoliczalny.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Mówimy much money, some money – bez a/an i bez -s.' },
        { id: '5jolua', q: 'Prawda czy fałsz?\nPrzed wyrazem „hour” używamy przedimka „a”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'H jest nieme, więc wymowa zaczyna się samogłoską: an hour.' },
      ],
    },
    {
      id: 'phrasal-przyimki',
      name: 'Phrasal verbs i przyimki po czasownikach',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur gramatycznych: CZASOWNIK 8 (czasowniki złożone – phrasal verbs, np. get up, break down, look for), PRZYIMEK 4 (przyimki po niektórych czasownikach i przymiotnikach, np. think of, interested in), SKŁADNIA 8 (konstrukcje gerundialne, np. I\'m good at swimming). Słownictwo z tematów życia codziennego (podstawa, Dz.U. 2024 poz. 996, wariant II.1, wymaganie I).',
      theory: `
        <h3>Co to jest phrasal verb?</h3>
        <p>To czasownik + krótkie słówko (<i>up, down, on, off, out, back, after, for</i>), które razem mają <b>nowe znaczenie</b>. Często nie da się go zgadnąć z części: <i>look</i> – patrzeć, ale <i>look <b>for</b></i> – szukać, <i>look <b>after</b></i> – opiekować się.</p>
        <h3>Dom i poranek</h3>
        <table>
          <tr><th>Phrasal verb</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>wake up</td><td>budzić się</td><td>I wake up at 6:30.</td></tr>
          <tr><td>get up</td><td>wstawać (z łóżka)</td><td>I get up at 7.</td></tr>
          <tr><td>put on</td><td>zakładać (ubranie)</td><td>Put on your coat – it's cold.</td></tr>
          <tr><td>take off</td><td>zdejmować (ubranie); <b>startować</b> (samolot)</td><td>Take off your shoes. The plane took off at 6.</td></tr>
          <tr><td>turn on / turn off</td><td>włączać / wyłączać</td><td>Turn off the light, please.</td></tr>
          <tr><td>turn up / turn down</td><td>podgłośnić / ściszyć</td><td>Can you turn down the music?</td></tr>
          <tr><td>sit down / stand up</td><td>usiąść / wstać (z krzesła)</td><td>Please sit down.</td></tr>
          <tr><td>throw away</td><td>wyrzucać</td><td>Don't throw away that box.</td></tr>
          <tr><td>hurry up</td><td>pospieszyć się</td><td>Hurry up! We're late.</td></tr>
        </table>
        <h3>Szukanie, opieka, informacje</h3>
        <table>
          <tr><th>Phrasal verb</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>look for</td><td>szukać</td><td>I'm looking for my keys.</td></tr>
          <tr><td>look after</td><td>opiekować się</td><td>Grandma looks after my sister.</td></tr>
          <tr><td>find out</td><td>dowiedzieć się</td><td>I want to find out the truth.</td></tr>
          <tr><td>fill in</td><td>wypełniać (formularz)</td><td>Fill in this form, please.</td></tr>
          <tr><td>try on</td><td>przymierzać</td><td>Can I try on these jeans?</td></tr>
          <tr><td>call back</td><td>oddzwonić</td><td>I'll call you back later.</td></tr>
        </table>
        <h3>Ruch, podróż, życie</h3>
        <table>
          <tr><th>Phrasal verb</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>get on / get off</td><td>wsiadać / wysiadać (autobus, pociąg)</td><td>We got off the bus at the museum.</td></tr>
          <tr><td>set off</td><td>wyruszać w drogę</td><td>We set off at 5 a.m.</td></tr>
          <tr><td>come back</td><td>wracać</td><td>When are you coming back?</td></tr>
          <tr><td>go out</td><td>wychodzić (np. na miasto)</td><td>Let's go out tonight.</td></tr>
          <tr><td>pick up</td><td>podnieść; <b>odebrać kogoś</b></td><td>Mum picks me up from school.</td></tr>
          <tr><td>break down</td><td>zepsuć się (auto, maszyna)</td><td>Our car broke down.</td></tr>
          <tr><td>give up</td><td>rzucić (nałóg), poddać się</td><td>He gave up smoking.</td></tr>
          <tr><td>grow up</td><td>dorastać</td><td>I grew up in Gdańsk.</td></tr>
          <tr><td>get on (well) with</td><td>dogadywać się z kimś</td><td>I get on well with my sister.</td></tr>
        </table>
        <div class="tip">💡 Wiele phrasal verbs ma <b>kilka znaczeń</b> – o wyborze decyduje reszta zdania: <i>take off your shoes</i> (zdejmij) / <i>the plane took off</i> (wystartował); <i>pick up the pen</i> (podnieś) / <i>pick me up at 5</i> (odbierz mnie).</div>
        <div class="tip">💡 Gdy dopełnieniem jest <b>it / them</b>, w czasownikach typu <i>put on, take off, turn on/off, pick up, try on, fill in, throw away</i> zaimek stoi <b>w środku</b>: <i>Put <b>it</b> on. Turn <b>it</b> off. Pick <b>them</b> up.</i> (nie: <s>Turn off it</s>). Ale: <i>look for <b>it</b>, look after <b>them</b></i> – tu zaimek idzie na koniec.</div>
        <h3>Przyimki po czasownikach</h3>
        <table>
          <tr><th>Połączenie</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>listen <b>to</b></td><td>słuchać czegoś</td><td>I listen to music.</td></tr>
          <tr><td>wait <b>for</b></td><td>czekać na</td><td>We're waiting for the bus.</td></tr>
          <tr><td>look <b>at</b></td><td>patrzeć na</td><td>Look at this photo!</td></tr>
          <tr><td>think <b>of / about</b></td><td>myśleć o</td><td>I'm thinking of buying a bike.</td></tr>
          <tr><td>talk <b>to</b> sb <b>about</b> sth</td><td>rozmawiać z kimś o czymś</td><td>I talked to Ola about the trip.</td></tr>
          <tr><td>depend <b>on</b></td><td>zależeć od</td><td>It depends on the weather.</td></tr>
          <tr><td>belong <b>to</b></td><td>należeć do</td><td>This bag belongs to Tom.</td></tr>
          <tr><td>agree <b>with</b></td><td>zgadzać się z</td><td>I agree with you.</td></tr>
          <tr><td>worry <b>about</b></td><td>martwić się o</td><td>Don't worry about the test.</td></tr>
          <tr><td>pay <b>for</b> / ask <b>for</b></td><td>płacić za / prosić o</td><td>Who paid for the pizza? Ask for help.</td></tr>
          <tr><td>laugh <b>at</b></td><td>śmiać się z</td><td>Don't laugh at me!</td></tr>
        </table>
        <h3>Przyimki po przymiotnikach</h3>
        <table>
          <tr><th>Połączenie</th><th>Znaczenie</th><th>Przykład</th></tr>
          <tr><td>good <b>at</b> / bad <b>at</b></td><td>dobry / słaby w czymś</td><td>She's good at maths.</td></tr>
          <tr><td>interested <b>in</b></td><td>zainteresowany czymś</td><td>I'm interested in history.</td></tr>
          <tr><td>afraid <b>of</b></td><td>bać się czegoś</td><td>He's afraid of spiders.</td></tr>
          <tr><td>proud <b>of</b></td><td>dumny z</td><td>We're proud of you.</td></tr>
          <tr><td>tired <b>of</b></td><td>zmęczony czymś, mający dość</td><td>I'm tired of waiting.</td></tr>
          <tr><td>famous <b>for</b></td><td>słynny z</td><td>Kraków is famous for its old town.</td></tr>
          <tr><td>different <b>from</b></td><td>różny od</td><td>My room is different from yours.</td></tr>
          <tr><td>worried <b>about</b> / excited <b>about</b></td><td>zmartwiony / podekscytowany czymś</td><td>I'm excited about the trip.</td></tr>
          <tr><td>late <b>for</b> / ready <b>for</b></td><td>spóźniony na / gotowy na</td><td>Don't be late for school.</td></tr>
        </table>
        <div class="tip">💡 Po przyimku czasownik ma formę <b>-ing</b>: <i>good at swimming, interested in drawing, tired of waiting</i>.</div>
        <div class="tip">⚠️ Typowe błędy Polaków: <s>listen music</s> → listen <b>to</b> music · <s>wait the bus</s> → wait <b>for</b> the bus · <s>afraid from</s> → afraid <b>of</b> · <s>depend from</s> → depend <b>on</b>.</div>
      `,
      flashcards: [
        ['get up / wake up', 'wstawać / budzić się'],
        ['put on', 'zakładać (ubranie)'],
        ['take off', 'zdejmować (ubranie); startować (samolot)'],
        ['turn on / turn off', 'włączać / wyłączać'],
        ['turn up / turn down', 'podgłośnić / ściszyć'],
        ['look for', 'szukać'],
        ['look after', 'opiekować się'],
        ['find out', 'dowiedzieć się'],
        ['give up', 'rzucić (np. palenie), poddać się'],
        ['break down', 'zepsuć się (auto, maszyna)'],
        ['pick up', 'podnieść; odebrać kogoś (np. ze szkoły)'],
        ['try on', 'przymierzać'],
        ['fill in', 'wypełniać (formularz)'],
        ['set off', 'wyruszać w drogę'],
        ['grow up', 'dorastać'],
        ['get on / get off', 'wsiadać / wysiadać (autobus, pociąg)'],
        ['come back / go out', 'wracać / wychodzić (np. na miasto)'],
        ['Turn off it? Turn it off?', 'Turn it off. – zaimek it/them w środku'],
        ['listen ___ / wait ___', 'listen to / wait for'],
        ['depend ___ / belong ___', 'depend on / belong to'],
        ['good ___ / interested ___', 'good at / interested in'],
        ['afraid ___ / proud ___', 'afraid of / proud of'],
      ],
      questions: [
        { id: 'r0arkk', q: 'I usually ___ at 7 o\'clock, have a shower and eat breakfast.', options: ['get up', 'get on', 'give up', 'grow up'], answer: 0, explain: 'get up – wstawać z łóżka.' },
        { id: 'eybi0y', q: 'It\'s cold outside. ___ your jacket!', options: ['Take off', 'Put on', 'Turn on', 'Give up'], answer: 1, explain: 'put on – założyć (ubranie). Take off – zdjąć.' },
        { id: 't2idw1', q: 'I can\'t find my keys. Can you help me ___ them?', options: ['look after', 'look for', 'give up', 'turn off'], answer: 1, explain: 'look for – szukać. Look after – opiekować się.' },
        { id: 'ls5v3w', q: 'My grandma ___ my little brother when my parents are at work.', options: ['looks for', 'breaks down', 'looks after', 'gives up'], answer: 2, explain: 'look after – opiekować się.' },
        { id: 'sqxj81', q: 'Our car ___ on the motorway, so we had to call for help.', options: ['broke down', 'gave up', 'set off', 'grew up'], answer: 0, explain: 'break down (broke down) – zepsuć się.' },
        { id: 'd7q0bl', q: 'My dad ___ smoking last year. He feels much better now.', options: ['grew up', 'picked up', 'turned off', 'gave up'], answer: 3, explain: 'give up (gave up) – rzucić nałóg.' },
        { id: 'w78q02', q: 'Please ___ this form and give it back to me.', options: ['fill in', 'find out', 'try on', 'set off'], answer: 0, explain: 'fill in – wypełnić (formularz).' },
        { id: 'um4ffa', q: 'Please ___ the TV. I want to sleep.', options: ['turn on', 'turn up', 'turn off', 'put on'], answer: 2, explain: 'Chcesz spać → wyłącz telewizor: turn off.' },
        { id: 'pvt2hb', q: 'I can\'t hear the music. Can you turn it ___ , please?', options: ['off', 'down', 'up', 'away'], answer: 2, explain: 'turn up – podgłośnić; turn down – ściszyć.' },
        { id: 'n4uent', q: 'We ___ very early in the morning because we had a long journey ahead of us.', options: ['set off', 'got off', 'gave up', 'grew up'], answer: 0, explain: 'set off – wyruszyć w drogę.' },
        { id: 'cout7o', q: 'The plane ___ at 6:15 and landed in London two hours later.', options: ['put on', 'got up', 'took off', 'broke up'], answer: 2, explain: 'take off o samolocie – wystartować (przeciwieństwo: land – wylądować).' },
        { id: 'yatw27', q: 'I ___ in a small village, but now I live in Warsaw.', options: ['got up', 'grew up', 'gave up', 'set off'], answer: 1, explain: 'grow up (grew up) – dorastać.' },
        { id: '1dp7gj', q: 'My train arrives at 5. Can you pick me ___ at the station?', options: ['on', 'off', 'out', 'up'], answer: 3, explain: 'pick sb up – odebrać kogoś (np. z dworca).' },
        { id: 'gkhx55', q: 'I want to ___ more about this museum before we go there.', options: ['find out', 'fill in', 'turn off', 'give up'], answer: 0, explain: 'find out – dowiedzieć się.' },
        { id: 'bqihtv', q: 'We\'re on the bus. This is our stop – we have to ___ now!', options: ['get on', 'get off', 'get up', 'take off'], answer: 1, explain: 'get off – wysiąść (z autobusu, pociągu). Get on – wsiąść.' },
        { id: '94q4ds', q: 'Which sentence is correct?', options: ['Turn off it, please.', 'Turn it, off please.', 'Turn it off, please.', 'Off turn it, please.'], answer: 2, explain: 'Zaimek it stoi w środku: turn it off, put it on.' },
        { id: 'ym53vi', q: 'I\'m listening ___ my favourite song.', options: ['at', 'to', 'for', 'on'], answer: 1, explain: 'listen to – słuchać czegoś.' },
        { id: 'qbh5x9', q: 'We waited ___ the bus for twenty minutes.', options: ['for', 'on', 'to', 'at'], answer: 0, explain: 'wait for – czekać na.' },
        { id: '42vmx6', q: 'My sister is very good ___ maths.', options: ['in', 'on', 'at', 'of'], answer: 2, explain: 'good at – dobry w czymś.' },
        { id: 'uupzgq', q: 'Are you interested ___ history?', options: ['on', 'at', 'about', 'in'], answer: 3, explain: 'interested in – zainteresowany czymś.' },
        { id: 'w1x591', q: 'My little brother is afraid ___ dogs.', options: ['of', 'from', 'before', 'at'], answer: 0, explain: 'afraid of – bać się czegoś (nie „afraid from”).' },
        { id: 'bfq0z6', q: 'We\'re very proud ___ our team. They won the cup!', options: ['at', 'with', 'of', 'on'], answer: 2, explain: 'proud of – dumny z.' },
        { id: 'lqjoyu', q: 'We may have a picnic tomorrow. It depends ___ the weather.', options: ['of', 'from', 'at', 'on'], answer: 3, explain: 'depend on – zależeć od (nie „depend from”).' },
        { id: 'n23jk2', q: 'This bike belongs ___ my cousin.', options: ['to', 'for', 'of', 'with'], answer: 0, explain: 'belong to – należeć do.' },
        { id: '7akz8g', q: 'Przekład: „Czekam na ciebie.”', options: ['I\'m waiting you.', 'I\'m waiting for you.', 'I\'m waiting to you.', 'I\'m waiting at you.'], answer: 1, explain: 'wait for somebody – czekać na kogoś.' },
        { id: '0nzij8', q: 'Przekład: „Opiekuję się psem sąsiadów.”', options: ['I look for my neighbours\' dog.', 'I look at my neighbours\' dog.', 'I look after my neighbours\' dog.', 'I look up my neighbours\' dog.'], answer: 2, explain: 'look after – opiekować się.' },
        { id: 'aavgqt', q: 'Don\'t laugh ___ me! It isn\'t funny.', options: ['on', 'at', 'of', 'for'], answer: 1, explain: 'laugh at – śmiać się z kogoś.' },
        { id: '9w5p5w', q: 'Prawda czy fałsz?\nZdanie „I\'m thinking of buying a new phone.” jest poprawne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'think of – myśleć o; po przyimku czasownik ma formę -ing (buying).' },
      ],
    },
    {
      id: 'przyslowki',
      name: 'Przysłówki; so, such, how, what',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur gramatycznych: PRZYSŁÓWEK 1–3 (stopniowanie regularne i nieregularne, np. elegantly – more elegantly – the most elegantly, badly – worse – the worst; too i enough; miejsce przysłówka w zdaniu), PRZYMIOTNIK 2 (użycie so, such, how i what z przymiotnikami, np. She is such a nice girl. How nice!).',
      theory: `
        <h3>Przymiotnik czy przysłówek?</h3>
        <ul>
          <li><b>Przymiotnik</b> opisuje rzeczownik – <i>jaki?</i>: <i>a <b>careful</b> driver, She is <b>quick</b>.</i></li>
          <li><b>Przysłówek</b> opisuje czynność – <i>jak?</i>: <i>He drives <b>carefully</b>. She runs <b>quickly</b>.</i></li>
        </ul>
        <h3>Tworzenie przysłówków</h3>
        <table>
          <tr><th>Reguła</th><th>Przykład</th></tr>
          <tr><td>przymiotnik + <b>-ly</b></td><td>slow – slowly, quick – quickly, quiet – quietly, careful – carefully, bad – badly</td></tr>
          <tr><td>spółgłoska + y → <b>-ily</b></td><td>easy – easily, happy – happily, noisy – noisily</td></tr>
          <tr><td>-le → <b>-ly</b></td><td>terrible – terribly, simple – simply</td></tr>
          <tr><td><b>wyjątki</b></td><td>good → <b>well</b> · fast → <b>fast</b> · hard → <b>hard</b> · late → <b>late</b> · early → <b>early</b></td></tr>
        </table>
        <div class="tip">⚠️ <b>hardly</b> to nie „ciężko”, tylko „prawie wcale”: <i>I can hardly hear you.</i> A <b>lately</b> znaczy „ostatnio”. Ciężko pracować to <i>work <b>hard</b></i>, a spóźnić się – <i>arrive <b>late</b></i>.</div>
        <h3>Stopniowanie przysłówków</h3>
        <table>
          <tr><th>Typ</th><th>Stopień wyższy</th><th>Stopień najwyższy</th></tr>
          <tr><td>krótkie: fast, hard, late</td><td>fast<b>er</b>, hard<b>er</b>, lat<b>er</b></td><td>the fast<b>est</b>, the hard<b>est</b>, the lat<b>est</b></td></tr>
          <tr><td>early</td><td>earl<b>ier</b></td><td>the earl<b>iest</b></td></tr>
          <tr><td>z końcówką -ly</td><td><b>more</b> carefully, <b>more</b> elegantly</td><td><b>the most</b> carefully, <b>the most</b> elegantly</td></tr>
          <tr><td><b>nieregularne</b></td><td>well – <b>better</b> · badly – <b>worse</b> · far – <b>farther/further</b></td><td><b>the best</b> · <b>the worst</b> · <b>the farthest/furthest</b></td></tr>
        </table>
        <p>Porównania: <i>She sings <b>better than</b> me. He drives <b>more carefully than</b> his brother. I can't run <b>as fast as</b> you.</i></p>
        <h3>Miejsce przysłówka w zdaniu</h3>
        <ul>
          <li><b>Częstotliwość</b> (always, usually, often, sometimes, never) – <b>przed czasownikiem głównym</b>: <i>She often goes to the cinema.</i></li>
          <li>…ale <b>po „be”</b>: <i>They are always late.</i> i po czasowniku posiłkowym lub modalnym: <i>I have never been to London. You can always call me.</i></li>
          <li><b>Sposób</b> (jak?) – zwykle <b>na końcu</b>, po dopełnieniu: <i>Do it quickly! She speaks English very well.</i> (nie: <s>She speaks very well English</s>).</li>
          <li><b>Miejsce i czas</b> – na końcu, najpierw miejsce, potem czas: <i>We met in the park yesterday.</i></li>
        </ul>
        <h3>so, such, how, what</h3>
        <table>
          <tr><th>Słowo</th><th>Budowa</th><th>Przykład</th></tr>
          <tr><td><b>so</b></td><td>so + przymiotnik / przysłówek (bez rzeczownika)</td><td>She is so nice. You speak so fast!</td></tr>
          <tr><td><b>such</b></td><td>such <b>a/an</b> + przymiotnik + rzeczownik (l. poj.)<br>such + przymiotnik + rzeczownik (l. mn. / niepoliczalny)</td><td>She is such a nice girl.<br>They are such nice people. It was such good weather.</td></tr>
          <tr><td><b>How …!</b></td><td>How + przymiotnik!</td><td>How nice! How interesting!</td></tr>
          <tr><td><b>What …!</b></td><td>What <b>a/an</b> + przymiotnik + rzeczownik (l. poj.)!<br>What + przymiotnik + rzeczownik (l. mn. / niepoliczalny)!</td><td>What a nice day!<br>What lovely flowers! What awful weather!</td></tr>
        </table>
        <p><b>so / such … that</b> – tak…, że: <i>It was <b>so</b> cold <b>that</b> we stayed at home. It was <b>such</b> a good film <b>that</b> I watched it twice.</i></p>
        <div class="tip">💡 Sprawdź, czy po luce jest <b>rzeczownik</b>: jest → <b>such</b> / <b>What</b>; nie ma → <b>so</b> / <b>How</b>. Słówka <i>too</i> i <i>enough</i> znajdziesz w dziale „Strona bierna, przyimki, zaimki”.</div>
      `,
      flashcards: [
        ['quick → przysłówek', 'quickly'],
        ['easy → przysłówek', 'easily (-y → -ily)'],
        ['good → przysłówek', 'well: She sings well.'],
        ['fast, hard, late, early → przysłówek', 'bez zmian: fast, hard, late, early'],
        ['hard czy hardly?', 'hard – ciężko; hardly – prawie wcale'],
        ['well', 'better – the best'],
        ['badly', 'worse – the worst'],
        ['carefully', 'more carefully – the most carefully'],
        ['fast', 'faster – the fastest'],
        ['always, often, never – gdzie w zdaniu?', 'przed czasownikiem głównym: She often goes…'],
        ['…a przy „be”?', 'po be: They are always late.'],
        ['przysłówek sposobu – gdzie?', 'na końcu: Do it quickly! She speaks English well.'],
        ['so + …', 'so + przymiotnik: so nice'],
        ['such + …', 'such a + przymiotnik + rzeczownik: such a nice girl'],
        ['How …!', 'How + przymiotnik: How nice!'],
        ['What …!', 'What a + przymiotnik + rzeczownik: What a nice day!'],
        ['tak zimno, że…', 'so cold that… / such a cold day that…'],
      ],
      questions: [
        { id: 'vvdqig', q: 'Przysłówek od „careful” to…', options: ['carefuly', 'carefully', 'carefull', 'carefulily'], answer: 1, explain: 'careful + -ly = carefully (dwa „l”).' },
        { id: '29oaqq', q: 'Przysłówek od „easy” to…', options: ['easyly', 'easly', 'easily', 'easiely'], answer: 2, explain: 'Spółgłoska + y → -ily: easily.' },
        { id: 'e0f0p7', q: 'She speaks English very ___ .', options: ['good', 'well', 'goodly', 'better'], answer: 1, explain: 'Przysłówek od good to well.' },
        { id: 'uqlf1y', q: 'He is a ___ driver. He always drives ___ .', options: ['careful / carefully', 'carefully / careful', 'careful / careful', 'carefully / carefully'], answer: 0, explain: 'Przed rzeczownikiem (driver) – przymiotnik; po czasowniku (drives) – przysłówek.' },
        { id: 'mp5f6m', q: 'Tom runs very ___ . He won the race.', options: ['fastly', 'fast', 'faster', 'fastest'], answer: 1, explain: 'Fast to przymiotnik i przysłówek – bez -ly.' },
        { id: '7cnw9b', q: 'I worked very ___ yesterday and now I\'m tired.', options: ['hardly', 'harder', 'hard', 'hardest'], answer: 2, explain: 'work hard – ciężko pracować. Hardly znaczy „prawie wcale”.' },
        { id: 'jbqfpf', q: 'I got up very ___ this morning – at 5 a.m.!', options: ['earlily', 'early', 'earliest', 'more early'], answer: 1, explain: 'Early to przymiotnik i przysłówek – bez -ly.' },
        { id: '3u9du7', q: 'Stopień wyższy od „well” to…', options: ['weller', 'more well', 'best', 'better'], answer: 3, explain: 'well – better – the best.' },
        { id: 'nquru2', q: 'We played ___ than last week. We lost 0:5!', options: ['badder', 'worse', 'the worst', 'worsely'], answer: 1, explain: 'badly – worse – the worst.' },
        { id: '4jyrm1', q: 'Could you speak ___ , please? I don\'t understand.', options: ['more slowly', 'slowlier', 'most slowly', 'slowlyer'], answer: 0, explain: 'Przysłówki z -ly stopniujemy przez more: more slowly.' },
        { id: '2cz2ew', q: 'My mum sings well, my sister sings better, but my dad sings ___ of all.', options: ['good', 'well', 'better', 'the best'], answer: 3, explain: 'Stopień najwyższy od well: the best.' },
        { id: 'wx4va2', q: 'Which sentence is correct?', options: ['She goes often to the cinema.', 'She often goes to the cinema.', 'She go often to the cinema.', 'Often she go to the cinema.'], answer: 1, explain: 'Przysłówek częstotliwości stoi przed czasownikiem głównym.' },
        { id: 'vpgf6u', q: 'Which sentence is correct?', options: ['They always are late.', 'They always late are.', 'They are always late.', 'Always they late are.'], answer: 2, explain: 'Przy „be” przysłówek częstotliwości stoi po nim: are always.' },
        { id: 'zxdv1m', q: 'I ___ breakfast before school.', options: ['have usually', 'usually have', 'usually am having', 'am usually have'], answer: 1, explain: 'usually + czasownik główny: I usually have breakfast.' },
        { id: 'ge229l', q: 'Which sentence is correct?', options: ['She speaks very well English.', 'She very well speaks English.', 'She speaks English very good.', 'She speaks English very well.'], answer: 3, explain: 'Przysłówek sposobu stoi na końcu, po dopełnieniu (English).' },
        { id: 'maw0o6', q: 'It was ___ a beautiful day that we went to the beach.', options: ['so', 'such', 'how', 'what'], answer: 1, explain: 'Po luce jest a + przymiotnik + rzeczownik → such.' },
        { id: 'iqapi4', q: 'The film was ___ boring that I fell asleep.', options: ['such', 'what', 'so', 'how'], answer: 2, explain: 'Po luce sam przymiotnik (boring) → so.' },
        { id: 'ju09aj', q: '___ a nice surprise! Thank you!', options: ['How', 'So', 'Very', 'What'], answer: 3, explain: 'What a + przymiotnik + rzeczownik!' },
        { id: 'dvgbnw', q: '___ interesting! Tell me more.', options: ['What', 'How', 'Such', 'What a'], answer: 1, explain: 'How + sam przymiotnik!' },
        { id: '3c044o', q: 'They are ___ nice people!', options: ['such', 'so', 'such a', 'how'], answer: 0, explain: 'Liczba mnoga (people) → such bez „a”.' },
        { id: '5244cb', q: 'What ___ weather! It\'s raining again.', options: ['an awful', 'awful', 'a awful', 'so awful'], answer: 1, explain: '„Weather” jest niepoliczalne → What awful weather! (bez a/an).' },
        { id: '8zcd8b', q: 'Prawda czy fałsz?\n„Hardly” znaczy to samo co „hard” (ciężko).', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Hardly znaczy „prawie wcale”: I can hardly see. Ciężko pracować – work hard.' },
      ],
    },
    {
      id: 'zaimki-zdania',
      name: 'Zaimki nieokreślone i budowa zdania',
      basis: 'Informator CKE (język angielski, od r. szk. 2024/2025), lista struktur gramatycznych: ZAIMEK 7 (zaimki nieokreślone, np. some, any, no, (a) few, (a) little, other, another, somebody, anything), ZAIMEK 8 (zaimek bezosobowy you), SKŁADNIA 2 (zdania z podmiotem it, np. It rained heavily last night.), SKŁADNIA 4 (zdania z dwoma dopełnieniami, np. Yesterday I bought my grandma a nice present.).',
      theory: `
        <h3>some-, any-, no-, every-</h3>
        <table>
          <tr><th></th><th>osoba</th><th>rzecz</th><th>miejsce</th></tr>
          <tr><td><b>some-</b></td><td>somebody / someone – ktoś</td><td>something – coś</td><td>somewhere – gdzieś</td></tr>
          <tr><td><b>any-</b></td><td>anybody / anyone – ktoś? / nikt (w przeczeniu)</td><td>anything – coś? / nic</td><td>anywhere – gdzieś? / nigdzie</td></tr>
          <tr><td><b>no-</b></td><td>nobody / no one – nikt</td><td>nothing – nic</td><td>nowhere – nigdzie</td></tr>
          <tr><td><b>every-</b></td><td>everybody / everyone – wszyscy</td><td>everything – wszystko</td><td>everywhere – wszędzie</td></tr>
        </table>
        <ul>
          <li><b>some-</b> – w zdaniach twierdzących oraz w prośbach i propozycjach: <i>There's somebody at the door. Would you like something to drink?</i></li>
          <li><b>any-</b> – w pytaniach i przeczeniach: <i>Is there anybody here? I didn't see anything.</i></li>
          <li><b>no-</b> – zdanie przeczące <b>bez not</b>: <i>I saw nobody.</i> = <i>I didn't see anybody.</i></li>
          <li>Po <i>everybody, nobody, somebody</i> czasownik jest w <b>liczbie pojedynczej</b>: <i>Everybody <b>likes</b> pizza. Nobody <b>knows</b>.</i></li>
        </ul>
        <div class="tip">⚠️ Po angielsku w zdaniu jest <b>tylko jedno przeczenie</b>. Polskie „Nikt nic nie wie” to <i>Nobody knows anything.</i> (nie: <s>Nobody knows nothing</s>, <s>I didn't see nobody</s>).</div>
        <h3>no = not any</h3>
        <p><b>no</b> + rzeczownik: <i>There's <b>no</b> milk.</i> = <i>There isn't <b>any</b> milk.</i> · <i>I've got <b>no</b> time.</i></p>
        <h3>a few / few, a little / little</h3>
        <table>
          <tr><th></th><th>policzalne (books, people)</th><th>niepoliczalne (time, money)</th></tr>
          <tr><td>trochę, kilka – <b>wystarczy</b> 🙂</td><td><b>a few</b>: I have a few friends here.</td><td><b>a little</b>: We've got a little time.</td></tr>
          <tr><td>mało, niewiele – <b>za mało</b> 🙁</td><td><b>few</b>: Very few people came.</td><td><b>little</b>: There's very little milk left.</td></tr>
        </table>
        <h3>another, other, the other</h3>
        <ul>
          <li><b>another</b> (= an + other, pisane razem) – jeszcze jeden / inny, z rzeczownikiem w <b>l. poj.</b>: <i>Can I have another biscuit? Let's meet another day.</i></li>
          <li><b>other</b> + rzeczownik w <b>l. mn.</b>: <i>other people, other books</i>. Bez rzeczownika: <b>others</b> – <i>Some students walk to school, others go by bus.</i></li>
          <li><b>the other</b> – ten drugi (z dwóch) / pozostały: <i>I have two brothers. One is 10, <b>the other</b> is 15.</i></li>
        </ul>
        <h3>Bezosobowe „you” (= „się”, ludzie w ogóle)</h3>
        <p><i><b>You</b> can't park here.</i> (Nie wolno tu parkować.) · <i>How do <b>you</b> spell it?</i> (Jak to się pisze?) · <i><b>You</b> need a ticket to get in.</i> (Żeby wejść, potrzeba biletu.)</p>
        <h3>Podmiot „it”</h3>
        <p>W angielskim zdanie musi mieć podmiot. Gdy po polsku go nie ma, wstawiamy <b>it</b>:</p>
        <ul>
          <li>pogoda: <i>It's raining. It's cold. It rained heavily last night.</i></li>
          <li>czas i data: <i>It's 5 o'clock. It's Monday. It's my birthday today.</i></li>
          <li>odległość: <i>It's two kilometres to school.</i></li>
          <li>ocena + to + bezokolicznik: <i>It's difficult to learn Chinese. It's nice to see you.</i></li>
        </ul>
        <div class="tip">⚠️ Nie pisz <s>Is raining.</s> ani <s>Is cold.</s> – zawsze <b>It's</b> raining, <b>It's</b> cold.</div>
        <h3>Zdania z dwoma dopełnieniami</h3>
        <table>
          <tr><th>osoba + rzecz</th><th>rzecz + to / for + osoba</th></tr>
          <tr><td>I gave <b>my brother</b> a book.</td><td>I gave a book <b>to</b> my brother.</td></tr>
          <tr><td>She sent <b>me</b> a message.</td><td>She sent a message <b>to</b> me.</td></tr>
          <tr><td>I bought <b>my grandma</b> a present.</td><td>I bought a present <b>for</b> my grandma.</td></tr>
          <tr><td>Mum made <b>us</b> a cake.</td><td>Mum made a cake <b>for</b> us.</td></tr>
        </table>
        <p><b>to</b>: give, send, show, lend, bring, write · <b>for</b>: buy, make. Gdy rzecz to zaimek (it, them), wybierz drugą wersję: <i>Give <b>it to</b> me. I bought <b>it for</b> her.</i></p>
        <div class="tip">💡 W pierwszej wersji (osoba + rzecz) <b>nie ma przyimka</b>: <i>give me the salt</i>, nie <s>give to me the salt</s>.</div>
      `,
      flashcards: [
        ['somebody / someone', 'ktoś'],
        ['something / somewhere', 'coś / gdzieś'],
        ['nobody / nothing / nowhere', 'nikt / nic / nigdzie'],
        ['everybody / everything / everywhere', 'wszyscy / wszystko / wszędzie'],
        ['Do you need ___? (coś)', 'anything – w pytaniach any-'],
        ['Nikt nic nie wie.', 'Nobody knows anything. (jedno przeczenie!)'],
        ['There\'s no milk.', '= There isn\'t any milk.'],
        ['a few / a little', 'kilka / trochę (wystarczy)'],
        ['few / little', 'mało, niewiele (za mało)'],
        ['another', 'jeszcze jeden, inny (l. poj.): another cake'],
        ['other / others', 'inne (+ l. mn.): other people · bez rzeczownika: others'],
        ['the other', 'ten drugi (z dwóch)'],
        ['bezosobowe you', '„się”: How do you spell it? You can\'t park here.'],
        ['Pada deszcz. / Jest zimno.', 'It\'s raining. / It\'s cold.'],
        ['Jest piąta.', 'It\'s 5 o\'clock.'],
        ['Trudno jest…', 'It\'s difficult to…'],
        ['give somebody something', '= give something to somebody'],
        ['buy somebody something', '= buy something for somebody'],
        ['Daj mi to.', 'Give it to me.'],
      ],
      questions: [
        { id: 'we6i1a', q: 'There\'s ___ at the door. Can you open it?', options: ['anybody', 'somebody', 'nobody', 'everybody'], answer: 1, explain: 'Zdanie twierdzące → some-: somebody (ktoś).' },
        { id: 'lsw6cu', q: 'The fridge is empty. There isn\'t ___ to eat.', options: ['something', 'nothing', 'anything', 'everything'], answer: 2, explain: 'Przeczenie (isn\'t) → any-: anything. „Isn\'t nothing” to podwójne przeczenie.' },
        { id: 'vlns71', q: 'I invited ten friends, but ___ came. I was so sad.', options: ['somebody', 'anybody', 'everybody', 'nobody'], answer: 3, explain: 'nobody – nikt; czasownik twierdzący (came), bo przeczenie jest już w nobody.' },
        { id: 'tsgzn6', q: 'I didn\'t see ___ in the park. It was empty.', options: ['anybody', 'nobody', 'somebody', 'everybody'], answer: 0, explain: 'Po didn\'t → any-: anybody. „Didn\'t see nobody” to podwójne przeczenie.' },
        { id: 'xxwufx', q: 'Where are my glasses? I\'ve looked ___ !', options: ['anywhere', 'everywhere', 'nowhere', 'somewhere'], answer: 1, explain: 'everywhere – wszędzie.' },
        { id: 'pc6zio', q: 'Everybody in my class ___ the new teacher.', options: ['like', 'are liking', 'likes', 'have liked'], answer: 2, explain: 'Po everybody czasownik w liczbie pojedynczej: likes.' },
        { id: '7vjbtt', q: 'Przekład: „Nikt nic nie wie.”', options: ['Nobody knows nothing.', 'Nobody doesn\'t know anything.', 'Anybody knows nothing.', 'Nobody knows anything.'], answer: 3, explain: 'Po angielsku tylko jedno przeczenie: nobody + anything.' },
        { id: 'pe3thl', q: 'Sorry, I can\'t buy it. I\'ve got ___ money.', options: ['no', 'any', 'none', 'not'], answer: 0, explain: 'no + rzeczownik = not any: I\'ve got no money = I haven\'t got any money.' },
        { id: '4ok3xw', q: 'There ___ milk in the fridge. We need to buy some.', options: ['is any', 'isn\'t no', 'are no', 'is no'], answer: 3, explain: 'There is no milk = There isn\'t any milk. „Milk” jest niepoliczalne → is.' },
        { id: 'i5t49w', q: 'Can I have ___ piece of cake? It\'s delicious!', options: ['other', 'another', 'others', 'the others'], answer: 1, explain: 'another – jeszcze jeden (l. poj.).' },
        { id: 'so48sc', q: 'I have two cats. One is black and ___ is white.', options: ['the other', 'another', 'other', 'others'], answer: 0, explain: 'Ten drugi z dwóch → the other.' },
        { id: 'npvi6c', q: 'Some of my friends like football, but ___ friends prefer basketball.', options: ['another', 'others', 'other', 'the another'], answer: 2, explain: 'other + rzeczownik w l. mn. (friends).' },
        { id: '3eq2yk', q: 'Don\'t worry, we\'ve got ___ time before the film starts – about ten minutes.', options: ['a few', 'a little', 'many', 'few'], answer: 1, explain: '„Time” jest niepoliczalne, a czasu wystarczy → a little.' },
        { id: 'aj94fv', q: 'Very ___ people came to the concert. The hall was almost empty.', options: ['a few', 'little', 'few', 'a little'], answer: 2, explain: 'Mało, za mało + policzalne (people) → few.' },
        { id: '21mkra', q: '„Jak to się pisze?” po angielsku to:', options: ['How does it spell?', 'How do you spell it?', 'How is spelling it?', 'How spell you it?'], answer: 1, explain: 'Bezosobowe you = „się”: How do you spell it?' },
        { id: 'cr8wky', q: 'Prawda czy fałsz?\nW zdaniu „You can\'t take photos in this museum.” słowo „you” oznacza ludzi w ogóle (nie wolno tu robić zdjęć).', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To bezosobowe you – zakaz dotyczy wszystkich.' },
        { id: 'vitrop', q: '___ raining. Take an umbrella!', options: ['It\'s', 'Is', 'There\'s', 'It'], answer: 0, explain: 'Pogoda → podmiot it: It\'s raining.' },
        { id: 'vzatz0', q: '___ difficult to learn Chinese.', options: ['Is', 'There is', 'It\'s', 'This is'], answer: 2, explain: 'It\'s + przymiotnik + to + bezokolicznik.' },
        { id: 'yowjfm', q: '„Jest zimno.” po angielsku to:', options: ['Is cold.', 'There is cold.', 'It cold.', 'It\'s cold.'], answer: 3, explain: 'Zdanie musi mieć podmiot: It\'s cold.' },
        { id: 'b1zvt2', q: 'Yesterday I bought ___ a nice present.', options: ['to my grandma', 'my grandma', 'for my grandma', 'my grandma for'], answer: 1, explain: 'buy somebody something – osoba bez przyimka przed rzeczą.' },
        { id: '6y63hw', q: 'I gave the book ___ my brother.', options: ['to', 'for', 'at', 'with'], answer: 0, explain: 'give something to somebody.' },
        { id: 'e08fdt', q: 'Which sentence is correct?', options: ['Can you give to me the salt?', 'Can you give the salt me?', 'Can you give me the salt?', 'Can you give for me the salt?'], answer: 2, explain: 'give + osoba + rzecz, bez przyimka: give me the salt.' },
        { id: 'tiarxx', q: 'Mum made a birthday cake ___ me.', options: ['to', 'at', 'with', 'for'], answer: 3, explain: 'make something for somebody.' },
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
        { id: 'a0eo2i', q: 'Your friend says: „Thank you so much for your help!” You answer:', options: ['You\'re welcome.', 'Bless you!', 'Me too.', 'Here you are.'], answer: 0, explain: 'Na podziękowanie odpowiadasz You\'re welcome. (Nie ma za co). „Bless you!” mówisz po kichnięciu.' },
        { id: 'mhnk9h', q: 'You want to suggest going to the cinema. You say:', options: ['Do you go to the cinema?', 'How about going to the cinema?', 'I went to the cinema.', 'Did you like the cinema?'], answer: 1, explain: 'Propozycję zgłaszasz zwrotem How about + -ing…? Pozostałe zdania to pytania lub informacje, a nie propozycje.' },
        { id: '6ul019', q: 'Someone says: „I\'m sorry I\'m late.” You answer:', options: ['Congratulations!', 'Never mind.', 'You\'re welcome.', 'Me neither.'], answer: 1, explain: 'Na przeprosiny odpowiadasz np. Never mind. albo That\'s OK. „You\'re welcome.” to odpowiedź na podziękowanie.' },
        { id: 'bki7xj', q: 'You want to know the price of a T-shirt. You ask:', options: ['How many is it?', 'How much is it?', 'What is it?', 'How is it?'], answer: 1, explain: 'O cenę pytasz: How much is it? albo How much does it cost?' },
        { id: 'yvjid4', q: '„What does your sister look like?” – Która odpowiedź pasuje?', options: ['She likes music.', 'She\'s tall with long dark hair.', 'She\'s a teacher.', 'She\'s very kind.'], answer: 1, explain: '„Look like” to pytanie o wygląd.' },
        { id: 'v6f7la', q: '„What is your brother like?” – Która odpowiedź pasuje?', options: ['He\'s friendly and funny.', 'He likes pizza.', 'He\'s at home.', 'He looks like me.'], answer: 0, explain: '„What is he like?” to pytanie o charakter.' },
        { id: 'j0ofnk', q: '„Would you like some tea?” – Grzeczna odpowiedź to:', options: ['Yes, please.', 'Yes, I would like tea yesterday.', 'You\'re welcome.', 'Here you are.'], answer: 0, explain: 'Grzecznie przyjmujesz propozycję: Yes, please. „You\'re welcome.” to odpowiedź na „Thank you”.' },
        { id: '81jnyn', q: 'Your friend passed a difficult exam. You say:', options: ['Bless you!', 'Congratulations!', 'Never mind.', 'Excuse me.'], answer: 1, explain: 'Gratulacje składasz zwrotem Congratulations! (albo Well done!).' },
        { id: '87pams', q: 'You want to ask for permission to open the window. You say:', options: ['Open the window!', 'May I open the window?', 'You open the window.', 'Did you open the window?'], answer: 1, explain: 'O pozwolenie pytasz: May I / Can I…? „Open the window!” to polecenie, a nie pytanie o pozwolenie.' },
        { id: 'r2gfxy', q: 'Your friend sneezes. You say:', options: ['Cheers!', 'Well done!', 'You\'re welcome.', 'Bless you!'], answer: 3, explain: 'Po kichnięciu mówisz Bless you!' },
        { id: 'kdkk8h', q: 'You are lost in a city. You ask:', options: ['Where did you go yesterday?', 'Excuse me, how do I get to the station?', 'Excuse me, how much is the station?', 'How are you getting?'], answer: 1, explain: 'O drogę pytasz: Excuse me, how do I get to…? „How much” pyta o cenę, a stacji nie kupujesz.' },
        { id: 'rgyrbi', q: '„Can you help me with my homework?” – „___”', options: ['Sure, no problem.', 'You\'re welcome.', 'Bless you!', 'Congratulations!'], answer: 0, explain: 'Na prośbę o pomoc zgadzasz się np. Sure, no problem. „You\'re welcome.” to odpowiedź na podziękowanie.' },
        { id: 'shs07b', q: '„Here\'s your coffee.” – „___”', options: ['Bless you!', 'You\'re welcome.', 'Thank you.', 'Never mind.'], answer: 2, explain: 'Gdy ktoś ci coś podaje, dziękujesz: Thank you. „You\'re welcome.” to odpowiedź tej drugiej osoby na twoje podziękowanie.' },
        { id: 'avh8n1', q: '„What does your brother like?” – Która odpowiedź pasuje?', options: ['He\'s tall and slim.', 'He\'s very kind.', 'He likes playing computer games.', 'He\'s fine, thanks.'], answer: 2, explain: '„What does he like?” to pytanie o to, co lubi.' },
        { id: '80hbpw', q: '„Why don\'t we go to the park?” – Która odpowiedź oznacza zgodę?', options: ['That\'s a great idea!', 'I don\'t think so.', 'Never mind.', 'Bless you!'], answer: 0, explain: '„That\'s a great idea!” to entuzjastyczna zgoda. „I don\'t think so.” oznacza, że się nie zgadzasz.' },
        { id: '0czu9r', q: 'You didn\'t hear what the teacher said. You say:', options: ['Well done!', 'You\'re welcome.', 'Sorry, could you repeat that, please?', 'Here you are.'], answer: 2, explain: 'Gdy czegoś nie dosłyszysz, grzecznie prosisz o powtórzenie: Sorry, could you repeat that, please?' },
        { id: 'anxqhv', q: '„How are you?” – „___”', options: ['I\'m 14.', 'I\'m fine, thanks.', 'I\'m from Poland.', 'I\'m a student.'], answer: 1, explain: '„How are you?” pyta o samopoczucie, więc odpowiadasz I\'m fine, thanks. Pozostałe odpowiedzi mówią o wieku, pochodzeniu i zajęciu.' },
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
          <tr><td>Człowiek</td><td>tall, curly hair, friendly, shy, feelings: angry, worried, curly hair, beard, slim, hard-working, lazy, bored, proud, teenager</td></tr>
          <tr><td>Miejsce zamieszkania</td><td>flat, block of flats, living room, neighbourhood, neighbour, stairs, ceiling, wardrobe, armchair, the suburbs, make the bed, take out the rubbish</td></tr>
          <tr><td>Edukacja</td><td>timetable, subject, break, homework, test, pencil case, ruler, mark, pass / fail an exam, revise, classmate, headteacher</td></tr>
          <tr><td>Praca</td><td>job, nurse, plumber, salary, office, firefighter, vet, hairdresser, mechanic, earn, boss, colleague, part-time job</td></tr>
          <tr><td>Życie prywatne</td><td>family, relatives, celebrate, birthday party, relatives, cousin, wedding, get married, get on well with, argue, hang out, Christmas Eve</td></tr>
          <tr><td>Żywienie</td><td>vegetables, dairy, fry, boil, menu, bill, dairy products, bake, slice, spicy, sour, waiter, order</td></tr>
          <tr><td>Zakupy i usługi</td><td>shop assistant, receipt, refund, discount, size, customer, sale, bargain, try on, fit, changing room, cash, pay by card, post office</td></tr>
          <tr><td>Podróżowanie i turystyka</td><td>platform, return ticket, sightseeing, luggage, single ticket, delay, miss the bus, guidebook, campsite, book a room, abroad, go straight on</td></tr>
          <tr><td>Kultura</td><td>exhibition, novel, director, concert, painting, audience, play, stage, writer, the news, custom</td></tr>
          <tr><td>Sport</td><td>coach, team, win, lose, score a goal, match, referee, competition, stadium, swimming pool, racket, gym, go skiing, champion</td></tr>
          <tr><td>Zdrowie</td><td>headache, sore throat, prescription, take medicine, stomachache, cough, have a cold, flu, have a temperature, break your leg, hurt, healthy lifestyle</td></tr>
          <tr><td>Nauka i technika</td><td>device, download, charger, invention, inventor, scientist, screen, keyboard, password, turn on / off, send a text message</td></tr>
          <tr><td>Świat przyrody</td><td>weather, environment, pollution, recycle, foggy, storm, season, forest, lake, protect, endangered animals, rubbish</td></tr>
        </table>
        <div class="tip">💡 Ucz się słów w grupach tematycznych i całych wyrażeń (np. <i>take a photo, do homework, make a mistake</i>).</div>
        <p>W fiszkach jest po ok. 10 słówek do każdego tematu – na odwrocie karty widać, z którego tematu pochodzi słówko. Wybrane słowa i zwroty są na poziomie A2, którego wymaga egzamin.</p>
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
        ['curly hair', 'kręcone włosy · 👤 człowiek'],
        ['beard', 'broda (zarost) · 👤 człowiek'],
        ['slim', 'szczupły · 👤 człowiek'],
        ['shy', 'nieśmiały · 👤 człowiek'],
        ['hard-working', 'pracowity · 👤 człowiek'],
        ['lazy', 'leniwy · 👤 człowiek'],
        ['worried', 'zmartwiony · 👤 człowiek'],
        ['bored', 'znudzony · 👤 człowiek'],
        ['proud', 'dumny · 👤 człowiek'],
        ['teenager', 'nastolatek · 👤 człowiek'],
        ['block of flats', 'blok mieszkalny · 🏠 miejsce zamieszkania'],
        ['neighbour', 'sąsiad · 🏠 miejsce zamieszkania'],
        ['stairs', 'schody · 🏠 miejsce zamieszkania'],
        ['ceiling', 'sufit · 🏠 miejsce zamieszkania'],
        ['wardrobe', 'szafa na ubrania · 🏠 miejsce zamieszkania'],
        ['armchair', 'fotel · 🏠 miejsce zamieszkania'],
        ['do the washing-up', 'zmywać naczynia · 🏠 miejsce zamieszkania'],
        ['make the bed', 'ścielić łóżko · 🏠 miejsce zamieszkania'],
        ['take out the rubbish', 'wynosić śmieci · 🏠 miejsce zamieszkania'],
        ['the suburbs', 'przedmieścia · 🏠 miejsce zamieszkania'],
        ['timetable', 'plan lekcji · 🎒 edukacja'],
        ['subject', 'przedmiot szkolny · 🎒 edukacja'],
        ['pencil case', 'piórnik · 🎒 edukacja'],
        ['ruler', 'linijka · 🎒 edukacja'],
        ['mark', 'ocena (szkolna) · 🎒 edukacja'],
        ['pass an exam', 'zdać egzamin · 🎒 edukacja'],
        ['fail an exam', 'nie zdać egzaminu · 🎒 edukacja'],
        ['revise for a test', 'powtarzać materiał do sprawdzianu · 🎒 edukacja'],
        ['classmate', 'kolega / koleżanka z klasy · 🎒 edukacja'],
        ['headteacher', 'dyrektor szkoły · 🎒 edukacja'],
        ['plumber', 'hydraulik · 💼 praca'],
        ['firefighter', 'strażak · 💼 praca'],
        ['vet', 'weterynarz · 💼 praca'],
        ['hairdresser', 'fryzjer · 💼 praca'],
        ['mechanic', 'mechanik · 💼 praca'],
        ['salary', 'pensja · 💼 praca'],
        ['earn', 'zarabiać · 💼 praca'],
        ['boss', 'szef · 💼 praca'],
        ['colleague', 'współpracownik · 💼 praca'],
        ['part-time job', 'praca w niepełnym wymiarze godzin · 💼 praca'],
        ['relatives', 'krewni · 👪 życie prywatne'],
        ['cousin', 'kuzyn, kuzynka · 👪 życie prywatne'],
        ['get married', 'pobrać się · 👪 życie prywatne'],
        ['wedding', 'ślub, wesele · 👪 życie prywatne'],
        ['get on well with sb', 'dobrze się z kimś dogadywać · 👪 życie prywatne'],
        ['argue', 'kłócić się · 👪 życie prywatne'],
        ['hang out with friends', 'spędzać czas z przyjaciółmi · 👪 życie prywatne'],
        ['free time', 'czas wolny · 👪 życie prywatne'],
        ['Christmas Eve', 'Wigilia · 👪 życie prywatne'],
        ['wake up', 'obudzić się · 👪 życie prywatne'],
        ['dairy products', 'nabiał · 🍽️ żywienie'],
        ['fry', 'smażyć · 🍽️ żywienie'],
        ['boil', 'gotować (w wodzie) · 🍽️ żywienie'],
        ['bake', 'piec · 🍽️ żywienie'],
        ['slice', 'plasterek, kromka · 🍽️ żywienie'],
        ['spicy', 'ostry, pikantny · 🍽️ żywienie'],
        ['sour', 'kwaśny · 🍽️ żywienie'],
        ['waiter', 'kelner · 🍽️ żywienie'],
        ['order', 'zamawiać · 🍽️ żywienie'],
        ['bill', 'rachunek (w restauracji) · 🍽️ żywienie'],
        ['customer', 'klient · 🛍️ zakupy i usługi'],
        ['discount', 'zniżka · 🛍️ zakupy i usługi'],
        ['sale', 'wyprzedaż · 🛍️ zakupy i usługi'],
        ['bargain', 'okazja (tani zakup) · 🛍️ zakupy i usługi'],
        ['try on', 'przymierzyć · 🛍️ zakupy i usługi'],
        ['fit', 'pasować (rozmiarem) · 🛍️ zakupy i usługi'],
        ['changing room', 'przymierzalnia · 🛍️ zakupy i usługi'],
        ['cash', 'gotówka · 🛍️ zakupy i usługi'],
        ['pay by card', 'płacić kartą · 🛍️ zakupy i usługi'],
        ['post office', 'poczta · 🛍️ zakupy i usługi'],
        ['single ticket', 'bilet w jedną stronę · ✈️ podróżowanie'],
        ['platform', 'peron · ✈️ podróżowanie'],
        ['delay', 'opóźnienie · ✈️ podróżowanie'],
        ['miss the bus', 'spóźnić się na autobus · ✈️ podróżowanie'],
        ['sightseeing', 'zwiedzanie · ✈️ podróżowanie'],
        ['guidebook', 'przewodnik (książka) · ✈️ podróżowanie'],
        ['campsite', 'kemping, pole namiotowe · ✈️ podróżowanie'],
        ['book a room', 'zarezerwować pokój · ✈️ podróżowanie'],
        ['abroad', 'za granicą, za granicę · ✈️ podróżowanie'],
        ['go straight on', 'idź prosto · ✈️ podróżowanie'],
        ['exhibition', 'wystawa · 🎭 kultura'],
        ['novel', 'powieść · 🎭 kultura'],
        ['director', 'reżyser · 🎭 kultura'],
        ['painting', 'obraz · 🎭 kultura'],
        ['audience', 'publiczność · 🎭 kultura'],
        ['play', 'sztuka teatralna · 🎭 kultura'],
        ['stage', 'scena · 🎭 kultura'],
        ['writer', 'pisarz · 🎭 kultura'],
        ['the news', 'wiadomości (w mediach) · 🎭 kultura'],
        ['custom', 'zwyczaj · 🎭 kultura'],
        ['score a goal', 'strzelić gola · ⚽ sport'],
        ['match', 'mecz · ⚽ sport'],
        ['referee', 'sędzia (np. w piłce nożnej) · ⚽ sport'],
        ['competition', 'zawody, konkurs · ⚽ sport'],
        ['stadium', 'stadion · ⚽ sport'],
        ['swimming pool', 'basen · ⚽ sport'],
        ['racket', 'rakieta (tenisowa) · ⚽ sport'],
        ['gym', 'siłownia, sala gimnastyczna · ⚽ sport'],
        ['go skiing', 'jeździć na nartach · ⚽ sport'],
        ['champion', 'mistrz · ⚽ sport'],
        ['headache', 'ból głowy · 🩺 zdrowie'],
        ['stomachache', 'ból brzucha · 🩺 zdrowie'],
        ['cough', 'kaszel · 🩺 zdrowie'],
        ['have a cold', 'być przeziębionym · 🩺 zdrowie'],
        ['flu', 'grypa · 🩺 zdrowie'],
        ['have a temperature', 'mieć gorączkę · 🩺 zdrowie'],
        ['take medicine', 'brać lekarstwo · 🩺 zdrowie'],
        ['break your leg', 'złamać nogę · 🩺 zdrowie'],
        ['hurt', 'boleć; zranić · 🩺 zdrowie'],
        ['healthy lifestyle', 'zdrowy tryb życia · 🩺 zdrowie'],
        ['invention', 'wynalazek · 💻 nauka i technika'],
        ['inventor', 'wynalazca · 💻 nauka i technika'],
        ['scientist', 'naukowiec · 💻 nauka i technika'],
        ['screen', 'ekran · 💻 nauka i technika'],
        ['keyboard', 'klawiatura · 💻 nauka i technika'],
        ['password', 'hasło · 💻 nauka i technika'],
        ['download', 'pobierać (z internetu) · 💻 nauka i technika'],
        ['turn on', 'włączyć · 💻 nauka i technika'],
        ['turn off', 'wyłączyć · 💻 nauka i technika'],
        ['send a text message', 'wysłać SMS-a · 💻 nauka i technika'],
        ['foggy', 'mglisty · 🌳 świat przyrody'],
        ['storm', 'burza · 🌳 świat przyrody'],
        ['season', 'pora roku · 🌳 świat przyrody'],
        ['forest', 'las · 🌳 świat przyrody'],
        ['lake', 'jezioro · 🌳 świat przyrody'],
        ['pollution', 'zanieczyszczenie · 🌳 świat przyrody'],
        ['recycle', 'przetwarzać (odpady), recyklingować · 🌳 świat przyrody'],
        ['protect the environment', 'chronić środowisko · 🌳 świat przyrody'],
        ['endangered animals', 'zwierzęta zagrożone wyginięciem · 🌳 świat przyrody'],
        ['rubbish', 'śmieci · 🌳 świat przyrody'],
      ],
      questions: [
        { id: '81g3fz', q: 'Which word means „paragon”?', options: ['recipe', 'receipt', 'refund', 'record'], answer: 1, explain: '„Recipe” to przepis kulinarny – częsta pułapka!' },
        { id: 'oqjb74', q: 'You have a ___ throat. You should drink hot tea.', options: ['sore', 'pain', 'hurt', 'ache'], answer: 0, explain: 'Sore throat = ból gardła – to stałe wyrażenie z tematu „Zdrowie”.' },
        { id: '4ap1eb', q: 'I\'d like a ___ ticket to Kraków, please. I\'m coming back tomorrow.', options: ['single', 'return', 'one-way', 'back'], answer: 1, explain: 'Wracasz jutro, więc potrzebujesz biletu w obie strony – return ticket (bilet powrotny). Single ticket to bilet w jedną stronę.' },
        { id: 'rerevw', q: 'Which phrase is correct?', options: ['make homework', 'do a mistake', 'make a mistake', 'do a photo'], answer: 2, explain: 'Popełnić błąd to make a mistake. Mówisz też do homework i take a photo – dlatego pozostałe połączenia są błędne.' },
        { id: 'q8291x', q: 'My phone is dead. Can I borrow your ___ ?', options: ['charger', 'device', 'download', 'battery life'], answer: 0, explain: 'Rozładowany telefon („dead”) ładujesz ładowarką – charger.' },
        { id: '07f6ef', q: 'A person who works without payment to help others is a…', options: ['volunteer', 'customer', 'coach', 'neighbour'], answer: 0, explain: 'Volunteer to wolontariusz – pomaga innym bez zapłaty. Customer to klient, a neighbour – sąsiad.' },
        { id: 'qn4nzy', q: 'The doctor gave me a ___ for some medicine.', options: ['receipt', 'prescription', 'menu', 'ticket'], answer: 1, explain: 'Lekarz wypisuje receptę – prescription. Receipt to paragon.' },
        { id: '6q9j95', q: 'Which word does NOT belong to the topic „Sport”?', options: ['coach', 'score', 'team', 'luggage'], answer: 3, explain: 'Luggage to bagaż – słowo z tematu „Podróżowanie”. Coach, score i team dotyczą sportu.' },
        { id: 'htkbap', q: 'Which word means „bagaż”?', options: ['language', 'luggage', 'luck', 'lunch'], answer: 1, explain: 'Bagaż to luggage. Uważaj na podobnie wyglądające language, luck i lunch.' },
        { id: '555qbx', q: 'A person who trains a sports team is a…', options: ['coach', 'nurse', 'plumber', 'shop assistant'], answer: 0, explain: 'Coach to trener – słowo z tematu „Sport”. Plumber to hydraulik.' },
        { id: 'wguuw8', q: 'Which word belongs to the topic „Zdrowie”?', options: ['platform', 'headache', 'exhibition', 'discount'], answer: 1, explain: 'Headache (ból głowy) dotyczy zdrowia. Platform to peron, exhibition – wystawa, a discount – zniżka.' },
        { id: 'zxkfv9', q: 'The shoes were too small. I took them back and asked for my money back – I wanted a ___ .', options: ['receipt', 'refund', 'recipe', 'prescription'], answer: 1, explain: 'Oddałeś buty i chcesz z powrotem pieniądze – to refund (zwrot pieniędzy). Receipt to paragon, a prescription – recepta.' },
        { id: 'mrjgzb', q: 'At the station you wait for your train on the ___ .', options: ['luggage', 'menu', 'platform', 'charger'], answer: 2, explain: 'Na pociąg czekasz na peronie – platform.' },
        { id: 'bii0ux', q: 'Which word does NOT belong to the topic „Żywienie”?', options: ['vegetables', 'charger', 'menu', 'dairy'], answer: 1, explain: 'Charger (ładowarka) to słowo z tematu „Nauka i technika”. Vegetables, menu i dairy dotyczą żywienia.' },
        { id: 'kk5eex', q: '„Okolica, sąsiedztwo” to po angielsku…', options: ['neighbour', 'neither', 'neighbourhood', 'nowhere'], answer: 2, explain: '„Neighbour” to sąsiad.' },
        { id: '7ti7ne', q: 'In a restaurant you ask for the ___ when you want to pay.', options: ['menu', 'recipe', 'refund', 'bill'], answer: 3, explain: 'Gdy chcesz zapłacić, prosisz o rachunek – the bill. Menu to karta dań, a refund – zwrot pieniędzy.' },
        { id: 'dzsq8o', q: 'My brother never helps at home and sleeps until noon. He\'s very ___ .', options: ['hard-working', 'shy', 'lazy', 'proud'], answer: 2, explain: 'Ktoś, kto nie pomaga w domu i śpi do południa, jest lazy (leniwy). Hard-working znaczy odwrotnie – pracowity.' },
        { id: '26xfla', q: 'Which word means „nieśmiały”?', options: ['proud', 'shy', 'bored', 'lazy'], answer: 1, explain: 'Shy = nieśmiały. Proud to dumny, bored – znudzony, a lazy – leniwy.' },
        { id: 'nsf0t3', q: 'I got the best mark in the class. My parents are very ___ of me.', options: ['bored', 'proud', 'worried', 'shy'], answer: 1, explain: 'Rodzice cieszą się z dobrej oceny – są z ciebie dumni: proud of. Worried znaczy „zmartwiony”.' },
        { id: 'dkizje', q: 'We live on the fifth floor of a big ___ .', options: ['garden', 'block of flats', 'ceiling', 'armchair'], answer: 1, explain: 'Piąte piętro ma blok mieszkalny – block of flats. Ceiling to sufit, a armchair – fotel.' },
        { id: 'lcatl6', q: 'I keep my clothes in the ___ .', options: ['ceiling', 'stairs', 'wardrobe', 'fridge'], answer: 2, explain: 'Ubrania trzymasz w szafie – wardrobe. Ceiling to sufit, a stairs – schody.' },
        { id: '8phntc', q: 'Which phrase means „wynosić śmieci”?', options: ['make the bed', 'do the washing-up', 'lay the table', 'take out the rubbish'], answer: 3, explain: 'Take out the rubbish = wynosić śmieci. Make the bed to ścielić łóżko, a do the washing-up – zmywać naczynia.' },
        { id: 'megfrx', q: 'Look at the ___ – we have maths after the break.', options: ['pencil case', 'timetable', 'ruler', 'headteacher'], answer: 1, explain: 'Z planu lekcji – timetable – dowiesz się, co masz po przerwie.' },
        { id: '67a74y', q: 'I didn\'t study and I ___ the test. I have to write it again.', options: ['passed', 'failed', 'revised', 'taught'], answer: 1, explain: 'Nie uczyłeś się i musisz pisać test jeszcze raz, czyli go nie zdałeś – failed. Passed znaczy „zdałem”.' },
        { id: '9178t3', q: 'The ___ is the person who runs the school.', options: ['classmate', 'subject', 'headteacher', 'timetable'], answer: 2, explain: 'Headteacher to dyrektor szkoły – osoba, która nią kieruje. Classmate to kolega z klasy.' },
        { id: 'ichc3y', q: 'Water is coming out of a pipe in the kitchen. Call a ___ !', options: ['plumber', 'hairdresser', 'vet', 'firefighter'], answer: 0, explain: 'Cieknącą rurę naprawia hydraulik – plumber.' },
        { id: 'pobdte', q: 'A ___ looks after sick animals.', options: ['mechanic', 'plumber', 'vet', 'hairdresser'], answer: 2, explain: 'Chorymi zwierzętami zajmuje się weterynarz – vet. Mechanic to mechanik.' },
        { id: 'x3tp6g', q: '„Salary” to po polsku…', options: ['sałatka', 'sala', 'pensja', 'zniżka'], answer: 2, explain: 'Salary to pensja. Nie daj się zwieść podobieństwu do „sałatki” czy „sali”; zniżka to discount.' },
        { id: 'pbdla1', q: 'My aunts, uncles and cousins are my ___ .', options: ['neighbours', 'colleagues', 'relatives', 'classmates'], answer: 2, explain: 'Ciocie, wujkowie i kuzyni to krewni – relatives. Neighbours to sąsiedzi, a colleagues – współpracownicy.' },
        { id: 'vbai2n', q: 'I ___ well with my sister – we never argue.', options: ['get up', 'get off', 'get on', 'get in'], answer: 2, explain: 'get on well with sb – dobrze się z kimś dogadywać.' },
        { id: 'xwrwew', q: 'Which word means „Wigilia”?', options: ['Christmas Day', 'Easter', 'Christmas Eve', 'New Year\'s Day'], answer: 2, explain: 'Wigilia to Christmas Eve – wieczór przed Bożym Narodzeniem.' },
        { id: 'xjw93u', q: 'Milk, cheese and yoghurt are ___ products.', options: ['diary', 'dairy', 'daily', 'dirty'], answer: 1, explain: 'Uwaga: „diary” to pamiętnik, „daily” – codzienny.' },
        { id: 'vl9hab', q: 'This curry is very ___ – my mouth is on fire!', options: ['sour', 'spicy', 'sweet', 'boiled'], answer: 1, explain: '„My mouth is on fire” – w ustach pali, więc danie jest ostre: spicy. Sour znaczy „kwaśny”.' },
        { id: 'dml5aw', q: 'Excuse me, can we have the ___ , please? We want to pay.', options: ['menu', 'waiter', 'bill', 'slice'], answer: 2, explain: 'Chcecie zapłacić, więc prosicie o rachunek – the bill. Waiter to kelner.' },
        { id: '84t99f', q: 'Can I ___ these jeans? Where is the changing room?', options: ['try out', 'try on', 'put off', 'fit on'], answer: 1, explain: 'Przymierzyć ubranie to try on – robisz to w przymierzalni (changing room).' },
        { id: 'b9h75q', q: 'Everything is 50% cheaper – there\'s a big ___ in this shop.', options: ['receipt', 'customer', 'sale', 'cash'], answer: 2, explain: 'Wszystko o 50% taniej – to wyprzedaż, sale. Receipt to paragon, a customer – klient.' },
        { id: 'i17hiz', q: 'These shoes don\'t ___ me. They\'re too small.', options: ['fit', 'try', 'wear', 'size'], answer: 0, explain: 'Fit = pasować (rozmiarem): These shoes don\'t fit me – są za małe.' },
        { id: 'fvbex8', q: 'Our train is late. There\'s a 30-minute ___ .', options: ['platform', 'luggage', 'campsite', 'delay'], answer: 3, explain: 'Pociąg się spóźnia, więc jest opóźnienie – delay. Platform to peron.' },
        { id: '213twy', q: 'I\'m going to Kraków and I\'m not coming back. A ___ ticket, please.', options: ['return', 'double', 'back', 'single'], answer: 3, explain: 'Nie wracasz, więc potrzebujesz biletu w jedną stronę – single ticket. Return ticket to bilet powrotny.' },
        { id: 'hpp7if', q: 'Go ___ on and then turn left at the bank.', options: ['right', 'direct', 'forward', 'straight'], answer: 3, explain: '„Idź prosto” to go straight on.' },
        { id: 'ex9ly2', q: 'The person who tells the actors what to do when making a film is the ___ .', options: ['director', 'audience', 'painter', 'stage'], answer: 0, explain: 'Reżyser – director – mówi aktorom, co mają robić. Audience to publiczność.' },
        { id: 'h8p35m', q: 'There\'s a new ___ of modern paintings at the museum.', options: ['exhibition', 'novel', 'stage', 'audience'], answer: 0, explain: 'Obrazy w muzeum ogląda się na wystawie – exhibition. Novel to powieść.' },
        { id: '1tvc7h', q: 'The ___ clapped at the end of the concert.', options: ['stage', 'director', 'exhibition', 'audience'], answer: 3, explain: 'Na koniec koncertu klaszcze publiczność – audience. Stage to scena.' },
        { id: 'rr6jy2', q: 'The ___ showed the player a red card.', options: ['coach', 'referee', 'champion', 'fan'], answer: 1, explain: 'Czerwoną kartkę pokazuje sędzia – referee. Coach to trener.' },
        { id: '9gxy3o', q: 'You need a ___ to play tennis.', options: ['skis', 'goal', 'racket', 'swimming pool'], answer: 2, explain: 'Do tenisa potrzebna jest rakieta – racket.' },
        { id: '6a47kw', q: 'Our team won because Ola ___ two goals.', options: ['made', 'did', 'won', 'scored'], answer: 3, explain: 'Strzelić gola to score a goal: Ola scored two goals.' },
        { id: 'do5fvk', q: 'I have a ___ . My head hurts.', options: ['stomachache', 'toothache', 'headache', 'cough'], answer: 2, explain: 'Boli cię głowa (head), więc masz headache – ból głowy. Stomachache to ból brzucha.' },
        { id: '6bfo0r', q: 'He\'s got a high ___ – 39°C!', options: ['cough', 'headache', 'prescription', 'temperature'], answer: 3, explain: '39°C to gorączka: have a (high) temperature. Cough to kaszel.' },
        { id: 'ct4if7', q: 'Which phrase means „brać lekarstwo”?', options: ['drink medicine', 'eat medicine', 'do medicine', 'take medicine'], answer: 3, explain: 'Brać lekarstwo to take medicine – nie „drink” ani „eat”.' },
        { id: '7grspx', q: 'I forgot my ___ , so I can\'t log in.', options: ['keyboard', 'password', 'screen', 'charger'], answer: 1, explain: 'Do logowania potrzebne jest hasło – password. Keyboard to klawiatura.' },
        { id: 'm4dn68', q: 'Please ___ your phones during the exam.', options: ['turn on', 'download', 'send', 'turn off'], answer: 3, explain: 'Podczas egzaminu telefony trzeba wyłączyć – turn off. Turn on znaczy „włączyć”.' },
        { id: 'a0mb5i', q: 'Which word means „wynalazek”?', options: ['invention', 'inventor', 'investigation', 'invitation'], answer: 0, explain: 'Wynalazek to invention, a inventor to wynalazca. Pozostałe słowa tylko podobnie wyglądają.' },
        { id: 'skaib8', q: 'It\'s very ___ today – I can\'t see anything!', options: ['sunny', 'windy', 'hot', 'foggy'], answer: 3, explain: 'Nic nie widać, bo jest mgła – foggy (mglisty).' },
        { id: 'quzz1s', q: 'We should ___ plastic bottles, not throw them away.', options: ['pollute', 'recycle', 'destroy', 'waste'], answer: 1, explain: 'Plastikowe butelki należy oddawać do recyklingu – recycle. Pollute znaczy „zanieczyszczać”.' },
        { id: '2eh26s', q: 'Pandas are ___ animals – there are very few of them left.', options: ['dangerous', 'endangered', 'dairy', 'foggy'], answer: 1, explain: '„Dangerous” to niebezpieczny – częsta pułapka.' },
      ],
    },
    {
      id: 'kraje',
      name: 'Kraje anglojęzyczne',
      basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1, wymaganie IX.1–2: podstawowa wiedza o krajach, społeczeństwach i kulturach społeczności posługujących się językiem angielskim oraz o kraju ojczystym; świadomość związku między kulturą własną i obcą. Fakty sprawdzone 1.11.2026 w Britannice, CIA World Factbook, na stronach rządowych (parliament.uk, canada.ca, pmc.gov.au, gov.pl, europa.eu) i w słownikach Oxford Learner\'s, Cambridge i Britannica.',
      theory: `
        <h3>Wielka Brytania – the United Kingdom (the UK)</h3>
        <p>Pełna nazwa: <i>the United Kingdom of Great Britain and Northern Ireland</i>. <b>Great Britain</b> to wyspa, na której leżą Anglia, Szkocja i Walia; razem z <b>Irlandią Północną</b> tworzą one Zjednoczone Królestwo.</p>
        <table>
          <tr><th>Część UK</th><th>Stolica</th></tr>
          <tr><td>England – Anglia</td><td>London (też stolica całego UK)</td></tr>
          <tr><td>Scotland – Szkocja</td><td>Edinburgh</td></tr>
          <tr><td>Wales – Walia</td><td>Cardiff</td></tr>
          <tr><td>Northern Ireland – Irlandia Północna</td><td>Belfast</td></tr>
        </table>
        <p>Waluta: <b>funt szterling</b> (<i>the pound</i>, £). <b>Big Ben</b> to właściwie nazwa wielkiego dzwonu w wieży zegarowej Parlamentu (od 2012 r. wieża nazywa się <i>Elizabeth Tower</i>).</p>
        <div class="tip">⚠️ <b>Irlandia</b> (<i>Ireland</i>, stolica <b>Dublin</b>, waluta <b>euro</b>) to osobne państwo – <b>nie</b> należy do UK. Do UK należy tylko Irlandia <b>Północna</b>.</div>
        <h3>Inne kraje anglojęzyczne</h3>
        <table>
          <tr><th>Kraj</th><th>Stolica</th><th>Waluta</th><th>Warto wiedzieć</th></tr>
          <tr><td>the USA – Stany Zjednoczone</td><td>Washington, D.C.</td><td>dollar ($)</td><td>50 stanów; Statua Wolności w Nowym Jorku – dar Francji (1886)</td></tr>
          <tr><td>Canada – Kanada</td><td>Ottawa</td><td>Canadian dollar</td><td>dwa języki urzędowe: angielski i francuski; liść klonu na fladze</td></tr>
          <tr><td>Australia</td><td>Canberra (nie Sydney!)</td><td>Australian dollar</td><td>kangur i emu w herbie; Sydney Opera House</td></tr>
          <tr><td>New Zealand – Nowa Zelandia</td><td>Wellington</td><td>New Zealand dollar</td><td>ptak kiwi – mieszkańców nazywa się potocznie <i>Kiwis</i></td></tr>
          <tr><td>Ireland – Irlandia</td><td>Dublin</td><td>euro (€)</td><td>koniczyna (shamrock) – symbol św. Patryka</td></tr>
        </table>
        <h3>Święta i tradycje</h3>
        <table>
          <tr><th>Święto</th><th>Kiedy?</th><th>Gdzie?</th><th>O co chodzi?</th></tr>
          <tr><td>Burns Night</td><td>25 stycznia</td><td>Szkocja</td><td>urodziny szkockiego poety Roberta Burnsa; kolacja z <i>haggis</i></td></tr>
          <tr><td>Australia Day</td><td>26 stycznia</td><td>Australia</td><td>święto narodowe Australii</td></tr>
          <tr><td>St Patrick's Day</td><td>17 marca</td><td>Irlandia i Irlandczycy na całym świecie</td><td>dzień patrona Irlandii, św. Patryka; symbol – koniczyna (shamrock)</td></tr>
          <tr><td>Canada Day</td><td>1 lipca</td><td>Kanada</td><td>święto narodowe Kanady</td></tr>
          <tr><td>Independence Day (the Fourth of July)</td><td>4 lipca</td><td>USA</td><td>rocznica przyjęcia Deklaracji Niepodległości (1776); parady, pikniki, fajerwerki</td></tr>
          <tr><td>Halloween</td><td>31 października</td><td>m.in. USA, UK, Irlandia</td><td>wieczór przed Wszystkimi Świętymi; dzieci w przebraniach chodzą po domach i mówią <i>„Trick or treat!”</i></td></tr>
          <tr><td>Bonfire Night (Guy Fawkes Night)</td><td>5 listopada</td><td>UK</td><td>pamiątka udaremnionego spisku prochowego z 1605 r. (plan wysadzenia Parlamentu z królem Jakubem I); ogniska i fajerwerki</td></tr>
          <tr><td>Thanksgiving</td><td>czwarty czwartek listopada</td><td>USA (w Kanadzie – drugi poniedziałek października)</td><td>Święto Dziękczynienia</td></tr>
        </table>
        <p>Patroni: Anglii – św. Jerzy (<i>St George</i>, 23 kwietnia), Szkocji – św. Andrzej (<i>St Andrew</i>, 30 listopada), Walii – św. Dawid (<i>St David</i>, 1 marca), Irlandii – św. Patryk (17 marca).</p>
        <h3>Brytyjski i amerykański angielski</h3>
        <table>
          <tr><th>British English 🇬🇧</th><th>American English 🇺🇸</th><th>po polsku</th></tr>
          <tr><td>flat</td><td>apartment</td><td>mieszkanie</td></tr>
          <tr><td>lift</td><td>elevator</td><td>winda</td></tr>
          <tr><td>holiday</td><td>vacation</td><td>wakacje, urlop</td></tr>
          <tr><td>autumn</td><td>fall</td><td>jesień</td></tr>
          <tr><td>biscuit</td><td>cookie</td><td>herbatnik, ciastko</td></tr>
          <tr><td>chips</td><td>French fries</td><td>frytki</td></tr>
          <tr><td>crisps</td><td>chips</td><td>chipsy</td></tr>
          <tr><td>the underground (w Londynie: the Tube)</td><td>the subway</td><td>metro</td></tr>
          <tr><td>rubbish</td><td>garbage / trash</td><td>śmieci</td></tr>
          <tr><td>queue</td><td>line</td><td>kolejka</td></tr>
        </table>
        <div class="tip">💡 Uwaga na <b>chips</b>: w Londynie dostaniesz frytki (<i>fish and chips</i>), w Nowym Jorku – chipsy. W tekstach i nagraniach możesz spotkać oba warianty – dobrze rozumieć jeden i drugi.</div>
        <p><b>Zwyczaje</b> – ostrożnie, to tylko popularne stereotypy: mówi się, że Brytyjczycy chętnie zaczynają rozmowę od pogody (<i>Lovely day, isn't it?</i>) i cierpliwie stoją w kolejce (<i>queue</i>). Pamiętaj: każdy człowiek jest inny, a stereotyp to nie fakt.</p>
        <h3>Opowiedz o Polsce po angielsku</h3>
        <ul>
          <li><i>Poland is in Central Europe. The capital of Poland is <b>Warsaw</b>.</i></li>
          <li><i>We use the <b>złoty</b>. The longest river in Poland is <b>the Vistula</b>.</i></li>
          <li><i>Our National Independence Day is on <b>11th November</b> (1918). Constitution Day is on <b>3rd May</b> (the Constitution of 1791).</i></li>
          <li><i>Halloween is on 31st October. In Poland, on 1st November, people visit the graves of their relatives.</i> – Halloween to wieczór przed Wszystkimi Świętymi, a u nas 1 listopada to dzień zadumy.</li>
        </ul>
        <div class="tip">💡 Wymaganie IX.2 to <b>porównywanie kultur</b>: Amerykanie mają <i>Independence Day</i> 4 lipca, a my – Narodowe Święto Niepodległości 11 listopada. Zauważ podobieństwa i różnice, a przy nazwach świąt i miast pisz wielką literą: <i>Christmas, Easter, Warsaw</i>.</div>
      `,
      flashcards: [
        ['Cztery części UK', 'England, Scotland, Wales, Northern Ireland'],
        ['Stolica Szkocji', 'Edinburgh'],
        ['Stolica Walii', 'Cardiff'],
        ['Stolica Irlandii Północnej', 'Belfast'],
        ['Irlandia (Ireland)', 'osobne państwo, nie UK; stolica Dublin, waluta euro'],
        ['Stolica USA · liczba stanów', 'Washington, D.C. · 50 stanów'],
        ['Stolica Kanady', 'Ottawa (języki urzędowe: angielski i francuski)'],
        ['Stolica Australii', 'Canberra (nie Sydney!)'],
        ['Stolica Nowej Zelandii', 'Wellington'],
        ['Big Ben', 'wielki dzwon w wieży zegarowej Parlamentu (Elizabeth Tower)'],
        ['Burns Night', '25 stycznia, Szkocja – urodziny poety Roberta Burnsa'],
        ['St Patrick\'s Day', '17 marca – patron Irlandii; symbol: koniczyna (shamrock)'],
        ['Independence Day (USA)', '4 lipca – Deklaracja Niepodległości (1776)'],
        ['Bonfire Night', '5 listopada, UK – spisek prochowy z 1605 r.; ogniska, fajerwerki'],
        ['Thanksgiving (USA)', 'czwarty czwartek listopada'],
        ['Halloween', '31 października – „Trick or treat!”'],
        ['flat / lift (BrE)', 'apartment / elevator (AmE)'],
        ['holiday / autumn (BrE)', 'vacation / fall (AmE)'],
        ['biscuit / chips / crisps (BrE)', 'cookie / French fries / chips (AmE)'],
        ['underground / rubbish / queue (BrE)', 'subway / garbage, trash / line (AmE)'],
        ['Polska po angielsku', 'Warsaw, the złoty, the Vistula; Independence Day – 11th November'],
      ],
      questions: [
        { id: 'fx056k', q: 'What is the capital of Scotland?', options: ['Edinburgh', 'Glasgow', 'Cardiff', 'Dublin'], answer: 0, explain: 'Stolicą Szkocji jest Edynburg. Cardiff to stolica Walii, Dublin – Irlandii.' },
        { id: 'nbp96h', q: 'What is the capital of Wales?', options: ['Belfast', 'Edinburgh', 'Cardiff', 'London'], answer: 2, explain: 'Cardiff – stolica Walii. Belfast to stolica Irlandii Północnej.' },
        { id: '9qt9vg', q: 'Which of these is NOT part of the United Kingdom?', options: ['Scotland', 'Wales', 'Northern Ireland', 'the Republic of Ireland'], answer: 3, explain: 'Irlandia (Republika Irlandii, stolica Dublin) to osobne państwo. Do UK należy tylko Irlandia Północna.' },
        { id: 'jz5zi7', q: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Wellington'], answer: 2, explain: 'Stolicą Australii jest Canberra, choć Sydney i Melbourne są większe. Wellington to stolica Nowej Zelandii.' },
        { id: 'e6psks', q: 'What is the capital of Canada?', options: ['Toronto', 'Ottawa', 'Vancouver', 'Washington, D.C.'], answer: 1, explain: 'Stolicą Kanady jest Ottawa. Washington, D.C. to stolica USA.' },
        { id: 'izr8sc', q: 'What is the capital of New Zealand?', options: ['Auckland', 'Canberra', 'Dublin', 'Wellington'], answer: 3, explain: 'Stolicą Nowej Zelandii jest Wellington.' },
        { id: 'fwic9e', q: 'How many states are there in the USA?', options: ['13', '48', '50', '52'], answer: 2, explain: 'USA to 50 stanów. Stolica, Washington, D.C., nie leży w żadnym stanie.' },
        { id: 'x0y148', q: 'Which currency do people use in Ireland?', options: ['the pound', 'the euro', 'the dollar', 'the złoty'], answer: 1, explain: 'Irlandia należy do strefy euro. Funt (pound) to waluta Wielkiej Brytanii.' },
        { id: 'ybpqj8', q: 'Which sentence about Canada is true?', options: ['Canada has two official languages: English and French.', 'The capital of Canada is Toronto.', 'Canadians use the pound.', 'Canada is part of the UK.'], answer: 0, explain: 'Kanada ma dwa języki urzędowe: angielski i francuski. Stolica to Ottawa, waluta – dolar kanadyjski.' },
        { id: 't0l7ck', q: 'Burns Night (25th January) celebrates a famous poet from…', options: ['Scotland', 'the USA', 'Australia', 'Canada'], answer: 0, explain: 'Burns Night to urodziny Roberta Burnsa, narodowego poety Szkocji.' },
        { id: 'jhwr4f', q: 'When is St Patrick\'s Day?', options: ['4th July', '5th November', '17th March', '31st October'], answer: 2, explain: 'St Patrick\'s Day – 17 marca, dzień patrona Irlandii.' },
        { id: 'h7yh96', q: 'Americans celebrate Independence Day on…', options: ['1st July', '4th July', '11th November', '25th December'], answer: 1, explain: '4 lipca – rocznica Deklaracji Niepodległości (1776). 1 lipca to Canada Day, a 11 listopada – polskie Święto Niepodległości.' },
        { id: '7kaxyh', q: 'On Bonfire Night (5th November) people in the UK remember…', options: ['the first Thanksgiving', 'the Gunpowder Plot of 1605', 'the birthday of Robert Burns', 'the end of the school year'], answer: 1, explain: 'Bonfire Night (Guy Fawkes Night) upamiętnia udaremniony spisek prochowy z 1605 r. – plan wysadzenia Parlamentu.' },
        { id: 'u5o53s', q: 'In the USA, Thanksgiving is on…', options: ['the first Monday in May', '31st October', 'the fourth Thursday in November', '17th March'], answer: 2, explain: 'W USA – czwarty czwartek listopada (w Kanadzie – drugi poniedziałek października).' },
        { id: 'um07j8', q: 'On Halloween children go from house to house and say…', options: ['Happy birthday!', 'Cheers!', 'Good luck!', 'Trick or treat!'], answer: 3, explain: '„Trick or treat!” – „Psikus albo cukierek!”' },
        { id: 'ghqb2n', q: 'Big Ben is the name of…', options: ['a big bell in the clock tower of the Houses of Parliament', 'a bridge in London', 'a king of England', 'a park in New York'], answer: 0, explain: 'Big Ben to właściwie wielki dzwon; wieża nazywa się Elizabeth Tower.' },
        { id: 'vp65wp', q: 'The Statue of Liberty is in…', options: ['Washington, D.C.', 'New York', 'London', 'Sydney'], answer: 1, explain: 'Statua Wolności stoi w porcie Nowego Jorku – to dar Francji z 1886 r.' },
        { id: 'u6uove', q: 'Which bird is a symbol of New Zealand? People from New Zealand are often called by its name.', options: ['the kangaroo', 'the eagle', 'the kiwi', 'the swan'], answer: 2, explain: 'Kiwi – mieszkańców Nowej Zelandii nazywa się potocznie „Kiwis”. Kangur to symbol Australii (i nie jest ptakiem).' },
        { id: '8jbs7q', q: 'What is on the flag of Canada?', options: ['a maple leaf', 'a star', 'a shamrock', 'a dragon'], answer: 0, explain: 'Na fladze Kanady jest czerwony liść klonu (maple leaf). Koniczyna (shamrock) to symbol Irlandii.' },
        { id: '4izvpd', q: 'An American says „elevator”. A British person says…', options: ['flat', 'lift', 'queue', 'tube'], answer: 1, explain: 'elevator (AmE) = lift (BrE) – winda.' },
        { id: 'dcvobp', q: 'A British person says „flat”. An American says…', options: ['vacation', 'cookie', 'apartment', 'fall'], answer: 2, explain: 'flat (BrE) = apartment (AmE) – mieszkanie.' },
        { id: 'fh2ndm', q: 'Which word is American English for „autumn”?', options: ['spring', 'holiday', 'subway', 'fall'], answer: 3, explain: 'autumn (BrE) = fall (AmE) – jesień.' },
        { id: 'vs1zvw', q: 'An American goes on vacation. A British person goes on…', options: ['holiday', 'fall', 'subway', 'elevator'], answer: 0, explain: 'vacation (AmE) = holiday (BrE).' },
        { id: '2fndhh', q: 'You are in a café in London and you want French fries. You ask for…', options: ['crisps', 'chips', 'cookies', 'biscuits'], answer: 1, explain: 'W brytyjskim angielskim frytki to chips (fish and chips). Crisps to chipsy.' },
        { id: '5p2jan', q: 'Tell a foreigner about Poland. Which sentence is true?', options: ['The capital of Poland is Kraków.', 'In Poland we use the euro.', 'Polish Independence Day is on 4th July.', 'The longest river in Poland is the Vistula.'], answer: 3, explain: 'Najdłuższa rzeka Polski to Wisła (the Vistula). Stolica – Warszawa, waluta – złoty, Święto Niepodległości – 11 listopada.' },
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
        { id: 'mtj8ho', q: 'Which is a good way to start an e-mail to a friend?', options: ['Dear Sir or Madam,', 'Hi Kate,', 'To whom it may concern,', 'Yours faithfully,'], answer: 1, explain: 'E-mail do kolegi zaczynasz od Hi / Hello + imię. Pozostałe zwroty są oficjalne, a „Yours faithfully” w ogóle nie jest początkiem.' },
        { id: 'rakxpt', q: 'Which sentence is a good ending for an e-mail to a friend?', options: ['Write back soon!', 'Thanks for your e-mail.', 'I\'m writing to tell you…', 'Last weekend I went…'], answer: 0, explain: 'Write back soon! to typowe zakończenie e-maila. „Thanks for your e-mail.” i „I\'m writing to tell you…” pasują do wstępu.' },
        { id: 'e2v2hc', q: 'You want to give advice. Which sentence fits?', options: ['You should talk to her.', 'I went to the cinema.', 'Thanks for your e-mail.', 'How much is it?'], answer: 0, explain: 'Radę dajesz zwrotem You should…' },
        { id: 'rj621k', q: 'Ile wyrazów powinna mieć wypowiedź pisemna na egzaminie z angielskiego?', options: ['20–40', '50–120', '150–200', 'co najmniej 200'], answer: 1, explain: 'Według informatora CKE wypowiedź pisemna ma mieć 50–120 wyrazów.' },
        { id: 'aidkh8', q: 'Ile podpunktów zawiera polecenie do wypowiedzi pisemnej?', options: ['jeden', 'dwa', 'trzy', 'pięć'], answer: 2, explain: 'Polecenie zawiera trzy podpunkty – do każdego trzeba się odnieść.' },
        { id: 'z6c737', q: 'Co trzeba zrobić z punktami podanymi w poleceniu?', options: ['wybrać jeden z nich', 'odnieść się do każdego i go rozwinąć', 'przepisać je po polsku', 'pominąć, jeśli tekst jest długi'], answer: 1, explain: 'Za treść liczy się, do ilu podpunktów się odniosłeś i ile z nich rozwinąłeś (szczegół, powód, przykład).' },
        { id: '4i93je', q: 'You describe last weekend. Which sentence is correct?', options: ['Last weekend I go to the mountains.', 'Last weekend I have gone to the mountains.', 'Last weekend I went to the mountains.', 'Last weekend I am going to the mountains.'], answer: 2, explain: '„Last weekend” → Past Simple.' },
        { id: '1f4srt', q: 'You want to suggest meeting. Which sentence fits?', options: ['Why don\'t we meet on Saturday?', 'Why didn\'t we meet on Saturday?', 'We met on Saturday.', 'Do we meet on Saturday?'], answer: 0, explain: 'Propozycję zgłaszasz zwrotem Why don\'t we…? Wersja z „didn\'t” pyta o przeszłość, więc nie jest propozycją.' },
        { id: 'jgl6qm', q: 'Which sentence is a good start of an e-mail to a friend who wrote to you?', options: ['Write back soon!', 'Bye for now,', 'Thanks for your e-mail.', 'Best wishes,'], answer: 2, explain: 'Odpowiadając na e-mail, zaczynasz od podziękowania: Thanks for your e-mail. Pozostałe zwroty pasują na koniec.' },
        { id: 'vxbt6d', q: 'You can\'t come to a party. Which sentence fits?', options: ['I\'m sorry, but I can\'t come because I\'m ill.', 'I\'m sorry, but I can come.', 'Congratulations on your party!', 'Why don\'t we come?'], answer: 0, explain: 'Odmawiasz grzecznie: I\'m sorry, but I can\'t… because… – z przeprosinami i powodem.' },
        { id: 'xngdnu', q: 'You want to ask your friend for advice. Which sentence fits?', options: ['You should do it.', 'What do you think I should do?', 'I did it yesterday.', 'How much is it?'], answer: 1, explain: 'O radę prosisz: What do you think I should do? „You should do it.” to rada, a nie prośba o nią.' },
        { id: 'lrpdnm', q: 'Which sentence gives an opinion?', options: ['The film started at 6 p.m.', 'I went to the cinema with Tom.', 'Write back soon!', 'In my opinion, the film was really funny.'], answer: 3, explain: 'Opinię wyrażasz zwrotami In my opinion… / I think… Pozostałe zdania podają fakty albo kończą e-mail.' },
        { id: 'xgxalw', q: 'Ile punktów najwyżej można dostać za treść wypowiedzi pisemnej?', options: ['2', '6', '10', '4'], answer: 3, explain: 'Za treść dostajesz 0–4 pkt (z 10 pkt za całą wypowiedź).' },
        { id: '2w85fy', q: 'Ile punktów łącznie można dostać za wypowiedź pisemną na egzaminie z angielskiego?', options: ['4', '20', '45', '10'], answer: 3, explain: 'Treść 4 + spójność 2 + zakres środków 2 + poprawność 2 = 10 pkt.' },
      ],
    },
  ],
});
