/* Lekcje – język angielski. */
window.LESSONS = window.LESSONS || {};

/* ===================== PRESENT SIMPLE / CONTINUOUS ===================== */
window.LESSONS['angielski/present'] = [
  {
    title: 'Dwa czasy „teraz” – po co aż dwa?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Porównanie: Present Simple to zwyczaje, Present Continuous to coś, co dzieje się teraz">
      <rect x="10" y="10" width="195" height="180" rx="14" class="f1 s1 sw"/>
      <rect x="215" y="10" width="195" height="180" rx="14" class="f2 s2 sw"/>
      <text x="107" y="40" class="tx-b t1" text-anchor="middle">Present Simple</text>
      <text x="312" y="40" class="tx-b t2" text-anchor="middle">Present Continuous</text>
      <text x="107" y="95" font-size="38" text-anchor="middle">🔁</text>
      <text x="312" y="95" font-size="38" text-anchor="middle">🎥</text>
      <text x="107" y="130" class="tx" text-anchor="middle">zwyczaje, fakty</text>
      <text x="312" y="130" class="tx" text-anchor="middle">dzieje się teraz</text>
      <text x="107" y="168" class="tx-b" text-anchor="middle">I play.</text>
      <text x="312" y="168" class="tx-b" text-anchor="middle">I'm playing.</text>
    </svg>`,
    text: `<p>Po polsku mówisz „gram” i o tym, co robisz co tydzień, i o tym, co robisz w tej sekundzie. Angielski to rozróżnia.</p>
      <p><b>Present Simple</b> – to, co robisz regularnie, i fakty: <i>I play football every Friday.</i><br><b>Present Continuous</b> – to, co trwa właśnie teraz: <i>I'm playing football now.</i></p>`,
    hook: 'Present Simple to <b>album zdjęć</b> twoich zwyczajów. Present Continuous to <b>transmisja na żywo</b> 🔴 LIVE.',
    check: { q: 'Które zdanie mówi o zwyczaju?', options: ['I am reading a book now.', 'I read a book every evening.', 'Look! I am reading.'], answer: 1, explain: '„Every evening” – coś, co robisz regularnie → Present Simple.' },
  },
  {
    title: 'Present Simple – kropki na osi czasu',
    svg: `<svg viewBox="0 0 420 225" role="img" aria-label="Oś czasu z powtarzającymi się kropkami – czynność wykonywana regularnie">
      <defs><marker id="m-pres-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="85" x2="400" y2="85" class="ln" marker-end="url(#m-pres-2)"/>
      <line x1="210" y1="45" x2="210" y2="115" class="s2 sw dash"/>
      <text x="210" y="35" class="tx-b t2" text-anchor="middle">TERAZ</text>
      <circle cx="45" cy="85" r="7" class="f1 s1 sw"/><circle cx="100" cy="85" r="7" class="f1 s1 sw"/>
      <circle cx="155" cy="85" r="7" class="f1 s1 sw"/><circle cx="265" cy="85" r="7" class="f1 s1 sw"/>
      <circle cx="320" cy="85" r="7" class="f1 s1 sw"/><circle cx="375" cy="85" r="7" class="f1 s1 sw"/>
      <text x="15" y="118" class="tx-s">przeszłość</text>
      <text x="400" y="118" class="tx-s" text-anchor="end">przyszłość</text>
      <text x="210" y="155" class="tx-b" text-anchor="middle">I play football every Friday.</text>
      <text x="210" y="185" class="tx t1" text-anchor="middle">always · usually · often · sometimes</text>
      <text x="210" y="210" class="tx t1" text-anchor="middle">never · every day</text>
    </svg>`,
    text: `<p>Każda kropka to jeden raz, kiedy coś robisz. Kropki są i w przeszłości, i w przyszłości – to <b>zwyczaj</b>, a nie jedna chwila.</p>
      <p>Present Simple służy też do <b>faktów</b> (<i>Water boils at 100°C.</i>) i <b>rozkładów jazdy</b> (<i>The bus leaves at 7:30.</i>).</p>`,
    remember: 'Słowa-klucze: <b>always, usually, often, sometimes, never, every day</b> → Present Simple.',
    hook: 'Rozkład jazdy to też „zwyczaj” autobusu – codziennie o tej samej porze, więc Present Simple.',
  },
  {
    title: 'he / she / it – nie zgub „-s”!',
    svg: `<svg viewBox="0 0 420 225" role="img" aria-label="Końcówka -s w trzeciej osobie i jej przeskok do does w przeczeniach i pytaniach">
      <rect x="10" y="12" width="400" height="40" rx="10" class="f1"/>
      <rect x="10" y="60" width="400" height="40" rx="10" class="f2"/>
      <text x="25" y="38" class="tx">I / you / we / they</text>
      <text x="25" y="86" class="tx">he / she / it</text>
      <text x="300" y="39" class="tx-b">play</text>
      <text x="300" y="87" class="tx-b">play<tspan class="t2">s</tspan></text>
      <text x="210" y="135" class="tx" text-anchor="middle">watch<tspan class="t2">es</tspan> · go<tspan class="t2">es</tspan> · fl<tspan class="t2">ies</tspan></text>
      <text x="210" y="178" class="tx" text-anchor="middle">He play<tspan class="t2">s</tspan>. → He doe<tspan class="t2">s</tspan>n't play.</text>
      <text x="210" y="208" class="tx" text-anchor="middle">She play<tspan class="t2">s</tspan>. → Doe<tspan class="t2">s</tspan> she play?</text>
    </svg>`,
    text: `<p>Przy <b>he, she, it</b> (i np. <i>my mum, the dog</i>) czasownik dostaje <b>-s</b>: <i>she works</i>. Po -ch, -sh, -o dodajesz <b>-es</b> (<i>watches, goes</i>), a -y po spółgłosce zmienia się w <b>-ies</b> (<i>flies</i>).</p>
      <p>W przeczeniu i pytaniu <b>-s przeskakuje do does</b>, a czasownik wraca do formy podstawowej: <i>He doesn't play. Does she play?</i></p>`,
    remember: 'I/you/we/they <b>don\'t</b> · <b>Do</b> you…? — he/she/it <b>doesn\'t</b> · <b>Does</b> he…? + czasownik bez -s.',
    hook: 'Jedno <b>-s</b> na zdanie wystarczy. Jeśli zabrało je <i>does</i>, czasownik już go nie dostaje: <s>He doesn\'t plays</s>.',
    check: { q: 'My brother ___ TV every evening.', options: ['watch', 'watches', 'is watching', 'watchs'], answer: 1, explain: '„Every evening” → Present Simple; brother = he → watch + es.' },
  },
  {
    title: 'Present Continuous – akcja na żywo',
    svg: `<svg viewBox="0 0 420 225" role="img" aria-label="Oś czasu z falką wokół chwili obecnej – czynność trwa teraz">
      <defs><marker id="m-pres-4" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="90" x2="400" y2="90" class="ln" marker-end="url(#m-pres-4)"/>
      <line x1="210" y1="50" x2="210" y2="120" class="s2 sw dash"/>
      <text x="210" y="38" class="tx-b t2" text-anchor="middle">TERAZ</text>
      <path d="M150,90 q7.5,-16 15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0" class="ln s3 sw"/>
      <text x="15" y="120" class="tx-s">przeszłość</text>
      <text x="400" y="120" class="tx-s" text-anchor="end">przyszłość</text>
      <text x="210" y="155" class="tx-b" text-anchor="middle">I am playing football now.</text>
      <text x="210" y="183" class="tx t3" text-anchor="middle">am / is / are + czasownik-ing</text>
      <text x="210" y="210" class="tx-s" text-anchor="middle">now · right now · at the moment · today · Look! · Listen!</text>
    </svg>`,
    text: `<p>Falka to czynność, która <b>trwa</b> – zaczęła się przed chwilą i jeszcze się nie skończyła. Budowa: <b>am / is / are + -ing</b>: <i>I am reading, she is sleeping, they are running.</i></p>
      <p>Też do sytuacji <b>tymczasowych</b>: <i>This week I am staying with my aunt.</i> oraz <b>ustalonych planów</b>: <i>I'm meeting Kate tomorrow.</i></p>`,
    remember: '<b>Look! Listen! now, at the moment</b> → am/is/are + -ing.',
    hook: '„Look!” i „Listen!” to jak włączenie kamery – patrzysz na to, co dzieje się <b>teraz</b>.',
    check: { q: 'Listen! Somebody ___ at the door.', options: ['knocks', 'is knocking', 'knock', 'knocking'], answer: 1, explain: '„Listen!” – dzieje się teraz → is + knocking.' },
  },
  {
    title: 'Czasowniki stanu – bez -ing',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Porównanie źle i dobrze dla czasowników stanu oraz ich lista">
      <text x="105" y="28" class="tx-b t2" text-anchor="middle">❌ źle</text>
      <text x="315" y="28" class="tx-b t3" text-anchor="middle">✅ dobrze</text>
      <line x1="210" y1="10" x2="210" y2="135" class="ln-thin"/>
      <text x="105" y="62" class="tx t2" text-anchor="middle">I am knowing.</text>
      <text x="315" y="62" class="tx" text-anchor="middle">I know.</text>
      <text x="105" y="92" class="tx t2" text-anchor="middle">She is wanting tea.</text>
      <text x="315" y="92" class="tx" text-anchor="middle">She wants tea.</text>
      <text x="105" y="122" class="tx t2" text-anchor="middle">I am understanding.</text>
      <text x="315" y="122" class="tx" text-anchor="middle">I understand.</text>
      <rect x="10" y="145" width="400" height="62" rx="12" class="f5 s5"/>
      <text x="210" y="171" class="tx" text-anchor="middle">like · love · hate · know · understand</text>
      <text x="210" y="196" class="tx" text-anchor="middle">want · need · believe</text>
    </svg>`,
    text: `<p>Niektóre czasowniki opisują <b>stan</b> (co myślisz, wiesz, czujesz, czego chcesz), a nie akcję. Zwykle nie mają formy z -ing, nawet gdy mówisz o „teraz”: <i>I understand you now.</i></p>
      <p>Ostatnia pułapka: <b>-s</b> przy he/she/it i <b>does/doesn't</b> w pytaniach i przeczeniach.</p>`,
    remember: 'Akcja teraz → <i>I am eating</i>. Stan → <i>I like pizza</i> (nie <s>I am liking</s>).',
    hook: 'Czasowniki „z głowy i serca” (wiem, rozumiem, kocham, chcę) nie mają kamery – nie da się ich nagrać, więc nie dostają -ing.',
    check: { q: 'I ___ a new phone. Mine is broken.', options: ['need', 'am needing', 'needs', 'needing'], answer: 0, explain: '„Need” to czasownik stanu – bez -ing. I → need (bez -s).' },
  },
];

/* ===================== CZASY PRZESZŁE I PRESENT PERFECT ===================== */
window.LESSONS['angielski/past'] = [
  {
    title: 'Trzy sposoby na przeszłość',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Trzy osie czasu: Past Simple jako kropka, Past Continuous jako falka, Present Perfect jako strzałka do teraz">
      <defs><marker id="m-past-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t5"/></marker></defs>
      <text x="370" y="18" class="tx-s t2" text-anchor="middle">TERAZ</text>
      <line x1="370" y1="26" x2="370" y2="212" class="s2 dash" stroke-width="2"/>
      <text x="10" y="55" class="tx-b t1">Past Simple</text>
      <text x="10" y="75" class="tx-s">zakończone, kiedyś</text>
      <line x1="175" y1="60" x2="405" y2="60" class="ln-thin"/>
      <circle cx="250" cy="60" r="8" class="f1 s1 sw"/>
      <text x="10" y="120" class="tx-b t3">Past Continuous</text>
      <text x="10" y="140" class="tx-s">trwało w przeszłości</text>
      <line x1="175" y1="125" x2="405" y2="125" class="ln-thin"/>
      <path d="M215,125 q7.5,-14 15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0" class="ln s3 sw"/>
      <text x="10" y="185" class="tx-b t5">Present Perfect</text>
      <text x="10" y="205" class="tx-s">przeszłość → teraz</text>
      <line x1="175" y1="190" x2="405" y2="190" class="ln-thin"/>
      <path d="M215,190 Q290,150 362,186" class="ln s5 sw" marker-end="url(#m-past-1)"/>
    </svg>`,
    text: `<p>Po polsku masz jeden czas przeszły, a w angielskim są trzy ważne „narzędzia”:</p>
      <ul><li><b>Past Simple</b> – zakończona sprawa w konkretnym momencie (kropka).</li>
      <li><b>Past Continuous</b> – coś, co <b>trwało</b> w danej chwili w przeszłości (falka).</li>
      <li><b>Present Perfect</b> – przeszłość, która ma <b>związek z teraz</b> (strzałka do „teraz”).</li></ul>`,
    hook: 'Kropka = <b>kiedy?</b> · Falka = <b>co się działo?</b> · Strzałka = <b>co z tego jest teraz?</b>',
  },
  {
    title: 'Past Simple – zamknięta sprawa',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Kropka na osi czasu w punkcie yesterday oraz formy twierdząca, przecząca i pytająca">
      <defs><marker id="m-past-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="70" x2="400" y2="70" class="ln" marker-end="url(#m-past-2)"/>
      <line x1="340" y1="40" x2="340" y2="95" class="s2 sw dash"/>
      <text x="340" y="30" class="tx-b t2" text-anchor="middle">TERAZ</text>
      <circle cx="190" cy="70" r="8" class="f1 s1 sw"/>
      <text x="190" y="45" class="tx-b t1" text-anchor="middle">yesterday</text>
      <text x="15" y="98" class="tx-s">przeszłość</text>
      <rect x="10" y="115" width="128" height="62" rx="10" class="f3"/>
      <rect x="146" y="115" width="128" height="62" rx="10" class="f2"/>
      <rect x="282" y="115" width="128" height="62" rx="10" class="f1"/>
      <text x="74" y="140" class="tx-b t3" text-anchor="middle">+</text>
      <text x="210" y="140" class="tx-b t2" text-anchor="middle">–</text>
      <text x="346" y="140" class="tx-b t1" text-anchor="middle">?</text>
      <text x="74" y="165" class="tx" text-anchor="middle">I went.</text>
      <text x="210" y="165" class="tx" text-anchor="middle">I didn't go.</text>
      <text x="346" y="165" class="tx" text-anchor="middle">Did you go?</text>
      <text x="210" y="205" class="tx-s" text-anchor="middle">yesterday · last week · two days ago · in 2019</text>
    </svg>`,
    text: `<p>Past Simple to czynność <b>zakończona</b> w konkretnym czasie w przeszłości: <i>I played tennis yesterday. We went to Gdańsk last summer.</i></p>
      <p>Regularne czasowniki dostają <b>-ed</b> (<i>played</i>), nieregularne mają własną II formę (<i>went, saw, ate</i>). W przeczeniu i pytaniu pomaga <b>did</b>.</p>`,
    remember: '<b>did / didn\'t</b> + czasownik w <b>I formie</b>: <i>Did you see it? I didn\'t see it.</i>',
    hook: '<b>Did</b> to już przeszłość – zabiera ją czasownikowi. Dlatego <i>Did you go?</i>, a nie <s>Did you went?</s>',
    check: { q: '___ you watch the match yesterday?', options: ['Did', 'Have', 'Do', 'Were'], answer: 0, explain: '„Yesterday” → Past Simple, pytanie z did.' },
  },
  {
    title: 'Past Continuous – długi pasek i błyskawica',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Długi pasek oznaczający oglądanie telewizji przerwany błyskawicą – zadzwonił telefon">
      <defs><marker id="m-past-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="110" x2="400" y2="110" class="ln" marker-end="url(#m-past-3)"/>
      <rect x="50" y="92" width="240" height="36" rx="8" class="f3 s3 sw"/>
      <text x="140" y="116" class="tx" text-anchor="middle">was watching TV</text>
      <text x="245" y="82" font-size="34" text-anchor="middle">⚡</text>
      <line x1="245" y1="86" x2="245" y2="128" class="s2 sw"/>
      <text x="245" y="30" class="tx-b t2" text-anchor="middle">the phone rang</text>
      <text x="210" y="160" class="tx" text-anchor="middle">I was watching TV when the phone rang.</text>
      <text x="210" y="190" class="tx-s" text-anchor="middle">długie tło: was / were + -ing  ·  krótki błysk: Past Simple</text>
    </svg>`,
    text: `<p>Past Continuous (<b>was / were + -ing</b>) opisuje coś, co <b>trwało</b> w danym momencie w przeszłości: <i>At 8 p.m. I was doing my homework.</i></p>
      <p>Często jest „tłem”, które przerywa krótkie zdarzenie w Past Simple: <i>We were playing football when it started to rain.</i></p>`,
    remember: 'I / he / she / it <b>was</b> + -ing · you / we / they <b>were</b> + -ing.',
    hook: 'Film w tle (falka, -ing) + nagły błysk (Past Simple). Błysk zwykle stoi po <b>when</b>.',
    check: { q: 'I ___ a shower when the lights went out.', options: ['was taking', 'took', 'am taking', 'have taken'], answer: 0, explain: 'Dłuższa czynność przerwana przez krótką → Past Continuous.' },
  },
  {
    title: 'Present Perfect – most z przeszłości do teraz',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Strzałka z przeszłości do teraz – Present Perfect łączy przeszłość z teraźniejszością">
      <defs><marker id="m-past-4" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t5"/></marker></defs>
      <line x1="15" y1="95" x2="405" y2="95" class="ln-thin"/>
      <line x1="330" y1="45" x2="330" y2="115" class="s2 sw dash"/>
      <text x="330" y="35" class="tx-b t2" text-anchor="middle">TERAZ</text>
      <path d="M80,95 Q200,25 322,90" class="ln s5 sw" marker-end="url(#m-past-4)"/>
      <circle cx="80" cy="95" r="6" class="f5 s5 sw"/>
      <text x="80" y="120" class="tx-s" text-anchor="middle">kiedyś</text>
      <text x="368" y="85" font-size="28" text-anchor="middle">🔑</text>
      <text x="210" y="152" class="tx-b t5" text-anchor="middle">have / has + III forma</text>
      <text x="210" y="180" class="tx" text-anchor="middle">I have lost my keys. (nie mam ich teraz)</text>
      <text x="210" y="205" class="tx" text-anchor="middle">Have you ever been to London?</text>
    </svg>`,
    text: `<p>Present Perfect łączy przeszłość z <b>teraz</b>. Nie mówisz <i>kiedy</i> coś się stało, ważne jest, że ma to znaczenie teraz:</p>
      <ul><li><b>skutek widoczny teraz</b>: <i>I have lost my keys.</i> (teraz nie mogę wejść),</li>
      <li><b>doświadczenie</b>: <i>She has never eaten sushi.</i></li>
      <li><b>właśnie / już / jeszcze nie</b>: <i>I have just finished. He has already left. Have you done it yet?</i></li></ul>`,
    remember: '<b>already</b> i <b>just</b> – w zdaniach twierdzących (przed III formą). <b>yet</b> – w pytaniach i przeczeniach, na końcu zdania.',
    hook: '<b>ever</b> = „kiedykolwiek w życiu”. Pytanie o całe życie aż do teraz → Present Perfect.',
    check: { q: 'Have you ___ been to Italy?', options: ['ever', 'yet', 'ago', 'since'], answer: 0, explain: 'Pytanie o doświadczenie – „czy kiedykolwiek” → ever.' },
  },
  {
    title: 'since = punkt, for = odcinek',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Oś czasu: since Monday jako punkt startu, for three days jako odcinek do teraz">
      <line x1="20" y1="100" x2="400" y2="100" class="ln"/>
      <line x1="80" y1="92" x2="80" y2="108" class="ln"/><line x1="160" y1="92" x2="160" y2="108" class="ln"/>
      <line x1="240" y1="92" x2="240" y2="108" class="ln"/><line x1="320" y1="70" x2="320" y2="112" class="s3 sw dash"/>
      <text x="80" y="124" class="tx-s" text-anchor="middle">Mon</text><text x="160" y="124" class="tx-s" text-anchor="middle">Tue</text>
      <text x="240" y="124" class="tx-s" text-anchor="middle">Wed</text><text x="320" y="124" class="tx-s" text-anchor="middle">Thu</text>
      <text x="320" y="60" class="tx-b t3" text-anchor="middle">TERAZ</text>
      <circle cx="80" cy="100" r="9" class="f2 s2 sw"/>
      <text x="80" y="60" class="tx-b t2" text-anchor="middle">since Monday</text>
      <text x="80" y="80" class="tx-s" text-anchor="middle">📍 punkt startu</text>
      <path d="M80,132 v10 h240 v-10" class="ln s1 sw"/>
      <text x="200" y="166" class="tx-b t1" text-anchor="middle">for three days</text>
      <text x="210" y="198" class="tx" text-anchor="middle">I have been ill since Monday.</text>
    </svg>`,
    text: `<p>Gdy coś trwa <b>do teraz</b>, używasz Present Perfect i jednego z dwóch słówek:</p>
      <ul><li><b>since</b> + <b>punkt</b> w czasie (od kiedy?): <i>since Monday, since 2020, since 8 o'clock</i></li>
      <li><b>for</b> + <b>odcinek</b> czasu (jak długo?): <i>for three days, for five years, for two hours</i></li></ul>
      <p><i>I have been ill since Monday</i> = <i>I have been ill for three days.</i></p>`,
    hook: '<b>S</b>ince = <b>S</b>tart (pinezka na osi). <b>F</b>or = <b>F</b>ragment osi (odcinek).',
    check: { q: 'We have known each other ___ 2019.', options: ['since', 'for', 'ago', 'from'], answer: 0, explain: '2019 to punkt w czasie → since.' },
  },
  {
    title: 'Pułapka: yesterday czy ever?',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Dwa pojemniki ze słowami-kluczami: Past Simple i Present Perfect">
      <rect x="10" y="10" width="195" height="200" rx="14" class="f1 s1 sw"/>
      <rect x="215" y="10" width="195" height="200" rx="14" class="f5 s5 sw"/>
      <text x="107" y="38" class="tx-b t1" text-anchor="middle">Past Simple</text>
      <text x="312" y="38" class="tx-b t5" text-anchor="middle">Present Perfect</text>
      <text x="107" y="58" class="tx-s" text-anchor="middle">konkretny czas ⏰</text>
      <text x="312" y="58" class="tx-s" text-anchor="middle">bez konkretnego czasu</text>
      <text x="107" y="92" class="tx" text-anchor="middle">yesterday</text>
      <text x="107" y="119" class="tx" text-anchor="middle">last week</text>
      <text x="107" y="146" class="tx" text-anchor="middle">two years ago</text>
      <text x="107" y="173" class="tx" text-anchor="middle">in 2019</text>
      <text x="107" y="200" class="tx" text-anchor="middle">When…?</text>
      <text x="312" y="92" class="tx" text-anchor="middle">ever · never</text>
      <text x="312" y="119" class="tx" text-anchor="middle">already · just</text>
      <text x="312" y="146" class="tx" text-anchor="middle">yet</text>
      <text x="312" y="173" class="tx" text-anchor="middle">since · for</text>
    </svg>`,
    text: `<p>Najczęstszy błąd na egzaminie: Present Perfect z konkretnym czasem przeszłym. Jeśli w zdaniu pada <b>yesterday, last…, ago, in 2019</b> albo pytasz <b>When…?</b> – zawsze Past Simple.</p>
      <p><i>I have seen this film.</i> ✅ (kiedyś, nieważne kiedy)<br><i>I saw this film last week.</i> ✅ <s>I have seen this film last week.</s> ❌</p>`,
    remember: 'Widzisz konkretny czas przeszły → <b>Past Simple</b>. Widzisz <b>ever, never, already, just, yet, since, for</b> → <b>Present Perfect</b>.',
    hook: '<b>ago</b> = „temu” – a „temu” zawsze wskazuje konkretny moment, więc Past Simple.',
    check: { q: 'I ___ my grandparents two weeks ago.', options: ['visited', 'have visited', 'visit', 'have visit'], answer: 0, explain: '„Ago” → konkretny czas w przeszłości → Past Simple.' },
  },
];

/* ===================== PRZYSZŁOŚĆ ===================== */
window.LESSONS['angielski/future'] = [
  {
    title: 'Cztery sposoby na przyszłość',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Cztery kafelki: will, be going to, Present Continuous i Present Simple – kiedy których używać">
      <rect x="5" y="5" width="202" height="100" rx="12" class="f4 s4 sw"/>
      <rect x="213" y="5" width="202" height="100" rx="12" class="f1 s1 sw"/>
      <rect x="5" y="110" width="202" height="100" rx="12" class="f2 s2 sw"/>
      <rect x="213" y="110" width="202" height="100" rx="12" class="f3 s3 sw"/>
      <text x="17" y="35" class="tx-b t4">will</text>
      <text x="17" y="63" class="tx-s">decyzja „na już”,</text>
      <text x="17" y="83" class="tx-s">opinia, obietnica</text>
      <text x="180" y="92" font-size="26" text-anchor="middle">⚡</text>
      <text x="225" y="35" class="tx-b t1">be going to</text>
      <text x="225" y="63" class="tx-s">plan, zamiar,</text>
      <text x="225" y="83" class="tx-s">widać, że coś będzie</text>
      <text x="388" y="92" font-size="26" text-anchor="middle">📋</text>
      <text x="17" y="140" class="tx-b t2">Present Continuous</text>
      <text x="17" y="168" class="tx-s">umówione spotkanie</text>
      <text x="17" y="188" class="tx-s">(dzień, godzina)</text>
      <text x="180" y="197" font-size="26" text-anchor="middle">📅</text>
      <text x="225" y="140" class="tx-b t3">Present Simple</text>
      <text x="225" y="168" class="tx-s">rozkład jazdy,</text>
      <text x="225" y="188" class="tx-s">program, plan lekcji</text>
      <text x="388" y="197" font-size="26" text-anchor="middle">🚆</text>
    </svg>`,
    text: `<p>W angielskim nie ma jednego „czasu przyszłego”. Wybierasz formę w zależności od tego, <b>skąd wiesz</b>, że coś się wydarzy: decydujesz teraz? masz plan? jest to w kalendarzu? w rozkładzie jazdy?</p>`,
    hook: 'Zadaj sobie pytanie: <b>„skąd to wiem?”</b> – odpowiedź podpowie ci formę.',
    check: { q: 'Która forma pasuje do rozkładu jazdy pociągu?', options: ['will', 'be going to', 'Present Simple'], answer: 2, explain: 'Rozkłady jazdy i programy → Present Simple: The train leaves at 7:15.' },
  },
  {
    title: 'will – decyzja w sekundę',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Dymki rozmowy: ktoś jest spragniony, druga osoba od razu decyduje, że przyniesie wodę">
      <rect x="10" y="10" width="200" height="44" rx="18" class="f1 s1 sw"/>
      <polygon points="40,54 56,54 36,68" class="f1 s1"/>
      <text x="110" y="38" class="tx" text-anchor="middle">I'm so thirsty! 🥵</text>
      <rect x="140" y="74" width="270" height="44" rx="18" class="f4 s4 sw"/>
      <polygon points="370,118 386,118 392,132" class="f4 s4"/>
      <text x="275" y="102" class="tx" text-anchor="middle">⚡ I'll get you some water!</text>
      <text x="15" y="160" class="tx">🔮 opinia: I think she will win.</text>
      <text x="15" y="195" class="tx">🤝 obietnica: I won't tell anyone.</text>
    </svg>`,
    text: `<p><b>will + czasownik</b> (skrót: <i>I'll</i>, przeczenie: <i>won't</i>) używasz, gdy:</p>
      <ul><li><b>decydujesz w chwili mówienia</b> – nie było planu, wymyślasz to teraz,</li>
      <li><b>przewidujesz</b> coś według swojej opinii (<i>I think…, probably, I'm sure…</i>),</li>
      <li><b>obiecujesz</b>: <i>I won't tell anyone your secret. I promise!</i></li></ul>`,
    remember: 'Po <b>I think, probably, I\'m sure</b> zwykle używasz <b>will</b>.',
    hook: '<b>will</b> jak błyskawica ⚡ – pomysł pojawia się nagle, właśnie teraz.',
    check: { q: '„The phone is ringing!” – „OK, I ___ answer it.”', options: ["'ll", "'m going to", 'answer', "'m answering"], answer: 0, explain: 'Decyzja podjęta w chwili mówienia → will.' },
  },
  {
    title: 'be going to – plan i dowód',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Dwa przykłady going to: wcześniejszy plan oraz przewidywanie na podstawie chmur">
      <rect x="10" y="10" width="195" height="190" rx="14" class="f1 s1 sw"/>
      <rect x="215" y="10" width="195" height="190" rx="14" class="f5 s5 sw"/>
      <text x="107" y="38" class="tx-b t1" text-anchor="middle">plan</text>
      <text x="312" y="38" class="tx-b t5" text-anchor="middle">dowód</text>
      <text x="107" y="90" font-size="36" text-anchor="middle">🩺</text>
      <text x="312" y="90" font-size="36" text-anchor="middle">🌧️</text>
      <text x="107" y="128" class="tx-b" text-anchor="middle">I'm going to</text>
      <text x="107" y="152" class="tx" text-anchor="middle">study medicine.</text>
      <text x="107" y="182" class="tx-s" text-anchor="middle">decyzja już zapadła</text>
      <text x="312" y="128" class="tx-b" text-anchor="middle">It's going to</text>
      <text x="312" y="152" class="tx" text-anchor="middle">rain.</text>
      <text x="312" y="182" class="tx-s" text-anchor="middle">Look at the clouds!</text>
    </svg>`,
    text: `<p><b>am / is / are + going to + czasownik</b> – gdy:</p>
      <ul><li>masz <b>plan albo zamiar</b> podjęty wcześniej: <i>Next year I'm going to learn to drive.</i></li>
      <li><b>widzisz dowód</b>, że coś zaraz się stanie: <i>Look at the clouds! It's going to rain.</i></li></ul>`,
    hook: 'Going to = „jesteś już <b>w drodze</b>” do celu: plan jest gotowy albo chmury już wiszą nad głową.',
    check: { q: 'Look! That boy ___ fall off his bike!', options: ['will', 'is going to', 'falls', 'fell'], answer: 1, explain: 'Widzisz, co się zaraz stanie (dowód) → going to.' },
  },
  {
    title: 'Kalendarz i rozkład jazdy',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Kartka z kalendarza ze spotkaniem i rozkład jazdy pociągu">
      <rect x="10" y="10" width="195" height="115" rx="12" class="f2 s2 sw"/>
      <line x1="10" y1="45" x2="205" y2="45" class="s2 sw"/>
      <text x="107" y="34" class="tx-b t2" text-anchor="middle">📅 SATURDAY</text>
      <text x="107" y="80" class="tx" text-anchor="middle">6 p.m. – meet Tom</text>
      <text x="107" y="106" class="tx-s" text-anchor="middle">umówione ✔</text>
      <rect x="215" y="10" width="195" height="115" rx="12" class="f3 s3 sw"/>
      <line x1="215" y1="45" x2="410" y2="45" class="s3 sw"/>
      <text x="312" y="34" class="tx-b t3" text-anchor="middle">🚆 TIMETABLE</text>
      <text x="312" y="76" class="tx" text-anchor="middle">Kraków  7:15</text>
      <text x="312" y="104" class="tx" text-anchor="middle">Gdańsk  9:40</text>
      <text x="107" y="160" class="tx-b" text-anchor="middle">We're meeting Tom</text>
      <text x="107" y="185" class="tx" text-anchor="middle">at 6 on Saturday.</text>
      <text x="312" y="160" class="tx-b" text-anchor="middle">The train leaves</text>
      <text x="312" y="185" class="tx" text-anchor="middle">at 7:15.</text>
    </svg>`,
    text: `<p><b>Present Continuous</b> – gdy coś jest już <b>umówione</b> (z kimś, na konkretny dzień lub godzinę): <i>We're meeting at 6 tomorrow.</i></p>
      <p><b>Present Simple</b> – gdy chodzi o <b>rozkład jazdy, program, plan lekcji</b>: <i>The film starts at 8. The train leaves at 7:15.</i></p>`,
    hook: 'Wpisane w <b>twój kalendarz</b> → <i>I\'m meeting</i>. Wydrukowane w <b>rozkładzie</b> → <i>it leaves</i>.',
    check: { q: 'The concert ___ at 8 p.m. – look at the programme.', options: ['starts', 'will starting', 'is going start', 'start'], answer: 0, explain: 'Program wydarzenia → Present Simple; the concert = it → starts.' },
  },
  {
    title: 'Jak wybrać? Ściągawka',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Schemat wyboru formy przyszłej: rozkład, spotkanie, plan albo dowód, decyzja teraz">
      <defs><marker id="m-fut-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="8" width="230" height="38" rx="10" class="f3"/>
      <rect x="10" y="56" width="230" height="38" rx="10" class="f2"/>
      <rect x="10" y="104" width="230" height="38" rx="10" class="f1"/>
      <rect x="10" y="152" width="230" height="38" rx="10" class="f4"/>
      <text x="22" y="33" class="tx">🚆 Rozkład, program?</text>
      <text x="22" y="81" class="tx">📅 Umówione spotkanie?</text>
      <text x="22" y="129" class="tx">📋 Plan albo dowód?</text>
      <text x="22" y="177" class="tx">⚡ Decyzja teraz, opinia?</text>
      <path d="M246,27 H272" class="ln" marker-end="url(#m-fut-5)"/>
      <path d="M246,75 H272" class="ln" marker-end="url(#m-fut-5)"/>
      <path d="M246,123 H272" class="ln" marker-end="url(#m-fut-5)"/>
      <path d="M246,171 H272" class="ln" marker-end="url(#m-fut-5)"/>
      <rect x="280" y="8" width="130" height="38" rx="10" class="f3 s3 sw"/>
      <rect x="280" y="56" width="130" height="38" rx="10" class="f2 s2 sw"/>
      <rect x="280" y="104" width="130" height="38" rx="10" class="f1 s1 sw"/>
      <rect x="280" y="152" width="130" height="38" rx="10" class="f4 s4 sw"/>
      <text x="345" y="33" class="tx-b" text-anchor="middle">it starts</text>
      <text x="345" y="81" class="tx-b" text-anchor="middle">I'm meeting</text>
      <text x="345" y="129" class="tx-b" text-anchor="middle">going to</text>
      <text x="345" y="177" class="tx-b" text-anchor="middle">I'll</text>
    </svg>`,
    text: `<p>Na egzaminie przeczytaj całe zdanie i poszukaj wskazówek: <i>Look!</i> (dowód), <i>I've already decided</i> (plan), <i>it's in my calendar</i> (spotkanie), <i>I think / I'm sure</i> (opinia), <i>I promise</i> (obietnica).</p>`,
    remember: 'Decyzja teraz, opinia, obietnica → <b>will</b>. Plan lub dowód → <b>going to</b>. Spotkanie → <b>-ing</b>. Rozkład → <b>Present Simple</b>.',
    check: { q: "I'm sure you ___ this film. It's great!", options: ['will love', 'are loving', 'loved', 'are going love'], answer: 0, explain: '„I\'m sure” – twoja opinia o przyszłości → will.' },
  },
];

/* ===================== CZASOWNIKI NIEREGULARNE ===================== */
window.LESSONS['angielski/irregular'] = [
  {
    title: 'Trzy formy – trzy zadania',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Trzy formy czasownika see, saw, seen i do czego służą">
      <defs><marker id="m-irr-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="70" y="25" class="tx-b t1" text-anchor="middle">I forma</text>
      <text x="210" y="25" class="tx-b t2" text-anchor="middle">II forma</text>
      <text x="350" y="25" class="tx-b t3" text-anchor="middle">III forma</text>
      <rect x="15" y="38" width="110" height="50" rx="12" class="f1 s1 sw"/>
      <rect x="155" y="38" width="110" height="50" rx="12" class="f2 s2 sw"/>
      <rect x="295" y="38" width="110" height="50" rx="12" class="f3 s3 sw"/>
      <text x="70" y="70" class="tx-b" text-anchor="middle">see</text>
      <text x="210" y="70" class="tx-b" text-anchor="middle">saw</text>
      <text x="350" y="70" class="tx-b" text-anchor="middle">seen</text>
      <path d="M128,63 H150" class="ln" marker-end="url(#m-irr-1)"/>
      <path d="M268,63 H290" class="ln" marker-end="url(#m-irr-1)"/>
      <text x="70" y="115" class="tx-s" text-anchor="middle">podstawowa</text>
      <text x="210" y="115" class="tx-s" text-anchor="middle">Past Simple</text>
      <text x="350" y="115" class="tx-s" text-anchor="middle">Present Perfect</text>
      <text x="70" y="142" class="tx" text-anchor="middle">I see.</text>
      <text x="210" y="142" class="tx" text-anchor="middle">I saw.</text>
      <text x="350" y="142" class="tx" text-anchor="middle">I have seen.</text>
      <text x="210" y="185" class="tx-s" text-anchor="middle">po did, can, will – zawsze I forma: Did you see? I can see.</text>
    </svg>`,
    text: `<p>Czasowniki regularne dostają po prostu <b>-ed</b> (<i>play – played – played</i>). Nieregularne mają <b>własne</b> formy, których trzeba się nauczyć.</p>
      <p><b>II forma</b> → Past Simple (<i>I saw him yesterday</i>). <b>III forma</b> → Present Perfect (<i>I have seen this film</i>) i strona bierna (<i>It was written in 1990</i>).</p>`,
    hook: 'Nie wkuwaj alfabetycznie – ucz się <b>grupami</b>, które brzmią podobnie. Tak zrobimy w kolejnych krokach.',
    check: { q: 'Którą formę wstawisz w zdaniu „I have ___ this film twice”?', options: ['I formę (see)', 'II formę (saw)', 'III formę (seen)'], answer: 2, explain: 'have/has + III forma = Present Perfect.' },
  },
  {
    title: 'Grupa „ksero”: wszystkie formy takie same',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Czasowniki put, cut, let, hit i read – trzy identyczne formy">
      <rect x="10" y="12" width="60" height="38" rx="8" class="f4 s4"/><rect x="76" y="12" width="60" height="38" rx="8" class="f4 s4"/><rect x="142" y="12" width="60" height="38" rx="8" class="f4 s4"/>
      <text x="40" y="37" class="tx-b" text-anchor="middle">put</text><text x="106" y="37" class="tx-b" text-anchor="middle">put</text><text x="172" y="37" class="tx-b" text-anchor="middle">put</text>
      <rect x="218" y="12" width="60" height="38" rx="8" class="f4 s4"/><rect x="284" y="12" width="60" height="38" rx="8" class="f4 s4"/><rect x="350" y="12" width="60" height="38" rx="8" class="f4 s4"/>
      <text x="248" y="37" class="tx-b" text-anchor="middle">cut</text><text x="314" y="37" class="tx-b" text-anchor="middle">cut</text><text x="380" y="37" class="tx-b" text-anchor="middle">cut</text>
      <rect x="10" y="62" width="60" height="38" rx="8" class="f4 s4"/><rect x="76" y="62" width="60" height="38" rx="8" class="f4 s4"/><rect x="142" y="62" width="60" height="38" rx="8" class="f4 s4"/>
      <text x="40" y="87" class="tx-b" text-anchor="middle">let</text><text x="106" y="87" class="tx-b" text-anchor="middle">let</text><text x="172" y="87" class="tx-b" text-anchor="middle">let</text>
      <rect x="218" y="62" width="60" height="38" rx="8" class="f4 s4"/><rect x="284" y="62" width="60" height="38" rx="8" class="f4 s4"/><rect x="350" y="62" width="60" height="38" rx="8" class="f4 s4"/>
      <text x="248" y="87" class="tx-b" text-anchor="middle">hit</text><text x="314" y="87" class="tx-b" text-anchor="middle">hit</text><text x="380" y="87" class="tx-b" text-anchor="middle">hit</text>
      <rect x="80" y="122" width="80" height="38" rx="8" class="f1 s1"/><rect x="170" y="122" width="80" height="38" rx="8" class="f2 s2"/><rect x="260" y="122" width="80" height="38" rx="8" class="f2 s2"/>
      <text x="120" y="147" class="tx-b" text-anchor="middle">read</text><text x="210" y="147" class="tx-b" text-anchor="middle">read</text><text x="300" y="147" class="tx-b" text-anchor="middle">read</text>
      <text x="120" y="182" class="tx t1" text-anchor="middle">/riːd/</text><text x="210" y="182" class="tx t2" text-anchor="middle">/red/</text><text x="300" y="182" class="tx t2" text-anchor="middle">/red/</text>
    </svg>`,
    text: `<p>Najłatwiejsza grupa: <b>put, cut, let, hit</b> – wszystkie trzy formy wyglądają tak samo. <i>Yesterday I put my phone on the desk.</i></p>
      <p><b>read</b> pisze się tak samo, ale II i III formę wymawiasz inaczej: <b>/red/</b> – jak kolor <i>red</i>.</p>`,
    hook: '<b>put, cut, let, hit</b> – krótkie słowa, krótka nauka. A <i>read</i> w przeszłości „czerwienieje” – brzmi jak <b>red</b> 🔴.',
  },
  {
    title: 'Grupa „bliźniaki”: II = III',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Rodziny czasowników z końcówkami -ought i -aught oraz inne bliźniaki">
      <rect x="10" y="10" width="195" height="135" rx="14" class="f2 s2 sw"/>
      <rect x="215" y="10" width="195" height="135" rx="14" class="f1 s1 sw"/>
      <text x="107" y="38" class="tx-b t2" text-anchor="middle">-ought</text>
      <text x="312" y="38" class="tx-b t1" text-anchor="middle">-aught</text>
      <text x="107" y="70" class="tx" text-anchor="middle">bring → brought</text>
      <text x="107" y="97" class="tx" text-anchor="middle">buy → bought</text>
      <text x="107" y="124" class="tx" text-anchor="middle">think → thought</text>
      <text x="312" y="70" class="tx" text-anchor="middle">catch → caught</text>
      <text x="312" y="97" class="tx" text-anchor="middle">teach → taught</text>
      <text x="210" y="175" class="tx" text-anchor="middle">find – found · meet – met · lose – lost</text>
      <text x="210" y="200" class="tx" text-anchor="middle">sleep – slept · tell – told · have – had</text>
    </svg>`,
    text: `<p>W tej grupie <b>II i III forma są identyczne</b>, więc uczysz się tylko dwóch słów: <i>buy – bought – bought</i>.</p>
      <p>Inne bliźniaki: <i>sell – sold, feel – felt, leave – left, find – found, meet – met, lose – lost, sleep – slept, tell – told, have – had</i>.</p>`,
    hook: 'Nauczyciel <b>teach – taught</b> i łapacz <b>catch – caught</b> idą w parze na <b>-aught</b>. Reszta „myśli i kupuje” na <b>-ought</b>: <i>thought, bought, brought</i>.',
    check: { q: 'Past Simple od „think” to…', options: ['thinked', 'taught', 'thought', 'thank'], answer: 2, explain: 'think – thought – thought. „Taught” to forma od „teach”.' },
  },
  {
    title: 'Grupa „trzy różne”: i – a – u i końcówka -n',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Zmiana samogłoski i, a, u w czasownikach swim, begin, drink oraz III formy zakończone na -n">
      <text x="90" y="28" class="tx-b t1" text-anchor="middle">I · i</text>
      <text x="210" y="28" class="tx-b t2" text-anchor="middle">II · a</text>
      <text x="330" y="28" class="tx-b t3" text-anchor="middle">III · u</text>
      <rect x="35" y="38" width="110" height="102" rx="10" class="f1"/>
      <rect x="155" y="38" width="110" height="102" rx="10" class="f2"/>
      <rect x="275" y="38" width="110" height="102" rx="10" class="f3"/>
      <text x="90" y="65" class="tx" text-anchor="middle">sw<tspan class="t1">i</tspan>m</text>
      <text x="210" y="65" class="tx" text-anchor="middle">sw<tspan class="t2">a</tspan>m</text>
      <text x="330" y="65" class="tx" text-anchor="middle">sw<tspan class="t3">u</tspan>m</text>
      <text x="90" y="95" class="tx" text-anchor="middle">beg<tspan class="t1">i</tspan>n</text>
      <text x="210" y="95" class="tx" text-anchor="middle">beg<tspan class="t2">a</tspan>n</text>
      <text x="330" y="95" class="tx" text-anchor="middle">beg<tspan class="t3">u</tspan>n</text>
      <text x="90" y="125" class="tx" text-anchor="middle">dr<tspan class="t1">i</tspan>nk</text>
      <text x="210" y="125" class="tx" text-anchor="middle">dr<tspan class="t2">a</tspan>nk</text>
      <text x="330" y="125" class="tx" text-anchor="middle">dr<tspan class="t3">u</tspan>nk</text>
      <rect x="10" y="155" width="400" height="52" rx="12" class="f5 s5"/>
      <text x="210" y="178" class="tx-s" text-anchor="middle">III forma często kończy się na -n:</text>
      <text x="210" y="199" class="tx" text-anchor="middle">see<tspan class="t5">n</tspan> · take<tspan class="t5">n</tspan> · writte<tspan class="t5">n</tspan> · eate<tspan class="t5">n</tspan> · broke<tspan class="t5">n</tspan> · give<tspan class="t5">n</tspan></text>
    </svg>`,
    text: `<p>W tej grupie wszystkie trzy formy są różne. Dwa triki bardzo pomagają:</p>
      <ul><li>samogłoska zmienia się jak w alfabecie: <b>i → a → u</b> (<i>swim – swam – swum</i>),</li>
      <li>III forma często kończy się na <b>-n</b>: <i>take – took – taken, write – wrote – written, speak – spoke – spoken, know – knew – known, fly – flew – flown</i>.</li></ul>`,
    hook: '<b>i – a – u</b> jak trzy kroki: <i>drink – drank – drunk</i>, <i>begin – began – begun</i>. A <b>-n</b> na końcu to „podpis” III formy.',
    check: { q: 'III forma od „drink” to…', options: ['drank', 'drunk', 'drinked', 'drinken'], answer: 1, explain: 'drink – drank – drunk (i → a → u).' },
  },
  {
    title: 'Grupa „kanapka” i najważniejsze dziwaki',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Czasowniki, w których I i III forma są takie same: come, run, become oraz be, go, do">
      <rect x="64" y="10" width="92" height="36" rx="8" class="f3 s3"/><rect x="164" y="10" width="92" height="36" rx="8" class="f2 s2"/><rect x="264" y="10" width="92" height="36" rx="8" class="f3 s3"/>
      <text x="110" y="34" class="tx-b" text-anchor="middle">come</text><text x="210" y="34" class="tx-b" text-anchor="middle">came</text><text x="310" y="34" class="tx-b" text-anchor="middle">come</text>
      <rect x="64" y="54" width="92" height="36" rx="8" class="f3 s3"/><rect x="164" y="54" width="92" height="36" rx="8" class="f2 s2"/><rect x="264" y="54" width="92" height="36" rx="8" class="f3 s3"/>
      <text x="110" y="78" class="tx-b" text-anchor="middle">run</text><text x="210" y="78" class="tx-b" text-anchor="middle">ran</text><text x="310" y="78" class="tx-b" text-anchor="middle">run</text>
      <rect x="64" y="98" width="92" height="36" rx="8" class="f3 s3"/><rect x="164" y="98" width="92" height="36" rx="8" class="f2 s2"/><rect x="264" y="98" width="92" height="36" rx="8" class="f3 s3"/>
      <text x="110" y="122" class="tx-b" text-anchor="middle">become</text><text x="210" y="122" class="tx-b" text-anchor="middle">became</text><text x="310" y="122" class="tx-b" text-anchor="middle">become</text>
      <text x="210" y="165" class="tx t5" text-anchor="middle">be – was / were – been</text>
      <text x="210" y="195" class="tx t5" text-anchor="middle">go – went – gone · do – did – done</text>
    </svg>`,
    text: `<p>„Kanapka”: <b>I i III forma są takie same</b>, a w środku inna: <i>come – came – come, run – ran – run, become – became – become</i>.</p>
      <p>Najczęstsze czasowniki są najbardziej nieregularne – te musisz znać na 100%: <b>be – was/were – been</b>, <b>go – went – gone</b>, <b>do – did – done</b>, <b>have – had – had</b>.</p>`,
    hook: 'Zielony chleb – pomarańczowy ser – zielony chleb 🥪. Środek kanapki to jedyna inna forma.',
  },
  {
    title: 'Pułapki egzaminacyjne',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Porównanie źle i dobrze: typowe błędy z czasownikami nieregularnymi">
      <text x="105" y="25" class="tx-b t2" text-anchor="middle">❌ źle</text>
      <text x="315" y="25" class="tx-b t3" text-anchor="middle">✅ dobrze</text>
      <line x1="210" y1="8" x2="210" y2="162" class="ln-thin"/>
      <rect x="10" y="40" width="400" height="34" rx="8" class="f2"/>
      <rect x="10" y="82" width="400" height="34" rx="8" class="f1"/>
      <rect x="10" y="124" width="400" height="34" rx="8" class="f3"/>
      <text x="105" y="63" class="tx t2" text-anchor="middle">Did you saw it?</text>
      <text x="315" y="63" class="tx" text-anchor="middle">Did you see it?</text>
      <text x="105" y="105" class="tx t2" text-anchor="middle">She has went.</text>
      <text x="315" y="105" class="tx" text-anchor="middle">She has gone.</text>
      <text x="105" y="147" class="tx t2" text-anchor="middle">He teached us.</text>
      <text x="315" y="147" class="tx" text-anchor="middle">He taught us.</text>
    </svg>`,
    text: `<ul><li>Po <b>did / didn't</b> – zawsze <b>I forma</b> (did już „niesie” przeszłość).</li>
      <li>Po <b>have / has</b> – zawsze <b>III forma</b>.</li>
      <li>Nie doklejaj <b>-ed</b> do nieregularnych: <s>teached, buyed, breaked</s>.</li></ul>`,
    remember: '<b>did</b> + I forma · <b>have/has</b> + III forma · sam Past Simple + II forma.',
    hook: 'Ucz się z fiszkami po 5–10 czasowników dziennie i mów je na głos jak rap: <i>go – went – gone, see – saw – seen</i> 🎤.',
    check: { q: 'Did you ___ the match yesterday?', options: ['see', 'saw', 'seen', 'seeing'], answer: 0, explain: 'Po „did” zawsze I forma.' },
  },
];

/* ===================== STOPNIOWANIE PRZYMIOTNIKÓW ===================== */
window.LESSONS['angielski/comparison'] = [
  {
    title: 'Schody: zwykły → wyższy → najwyższy',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Trzy stopnie schodów: tall, taller, the tallest">
      <rect x="20" y="160" width="125" height="52" class="f1 s1 sw"/>
      <rect x="148" y="110" width="125" height="102" class="f4 s4 sw"/>
      <rect x="276" y="60" width="125" height="152" class="f3 s3 sw"/>
      <text x="82" y="150" font-size="34" text-anchor="middle">🧍</text>
      <text x="210" y="100" font-size="34" text-anchor="middle">🧍</text>
      <text x="338" y="50" font-size="34" text-anchor="middle">🏆</text>
      <text x="82" y="185" class="tx-b" text-anchor="middle">tall</text>
      <text x="82" y="204" class="tx-s" text-anchor="middle">wysoki</text>
      <text x="210" y="140" class="tx-b" text-anchor="middle">taller</text>
      <text x="210" y="160" class="tx-s" text-anchor="middle">wyższy</text>
      <text x="338" y="90" class="tx-b" text-anchor="middle">the tallest</text>
      <text x="338" y="110" class="tx-s" text-anchor="middle">najwyższy</text>
    </svg>`,
    text: `<p>Przymiotniki mają trzy stopnie – jak schody. <b>Stopień wyższy</b> porównuje dwie rzeczy (<i>Tom is taller than Jack</i>). <b>Najwyższy</b> wskazuje „naj” w grupie (<i>Tom is the tallest in our class</i>).</p>`,
    remember: 'Przed stopniem najwyższym stoi <b>the</b>: <i>the tallest, the best, the most beautiful</i>.',
    hook: 'Na szczycie schodów stoi jeden zwycięzca 🏆 – dlatego zawsze <b>THE</b> (ten jedyny).',
    check: { q: 'Mount Everest is ___ mountain in the world.', options: ['higher', 'the highest', 'the most high', 'highest than'], answer: 1, explain: 'Najwyższa w całej grupie → the + -est.' },
  },
  {
    title: 'Krótkie przymiotniki: -er i -est',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Tabela stopniowania tall, happy, big z zasadami pisowni">
      <text x="20" y="25" class="tx-s">zwykły</text>
      <text x="150" y="25" class="tx-s">wyższy</text>
      <text x="280" y="25" class="tx-s">najwyższy</text>
      <rect x="10" y="35" width="400" height="52" rx="10" class="f1"/>
      <rect x="10" y="95" width="400" height="52" rx="10" class="f4"/>
      <rect x="10" y="155" width="400" height="52" rx="10" class="f3"/>
      <text x="20" y="60" class="tx-b">tall</text>
      <text x="150" y="60" class="tx-b">tall<tspan class="t1">er</tspan></text>
      <text x="280" y="60" class="tx-b">the tall<tspan class="t1">est</tspan></text>
      <text x="20" y="79" class="tx-s">krótki: + er / + est</text>
      <text x="20" y="120" class="tx-b">happy</text>
      <text x="150" y="120" class="tx-b">happ<tspan class="t4">ier</tspan></text>
      <text x="280" y="120" class="tx-b">the happ<tspan class="t4">iest</tspan></text>
      <text x="20" y="139" class="tx-s">-y → -ier / -iest</text>
      <text x="20" y="180" class="tx-b">big</text>
      <text x="150" y="180" class="tx-b">bi<tspan class="t3">gg</tspan>er</text>
      <text x="280" y="180" class="tx-b">the bi<tspan class="t3">gg</tspan>est</text>
      <text x="20" y="199" class="tx-s">samogłoska + spółgłoska → podwójna litera</text>
    </svg>`,
    text: `<p>Krótkie przymiotniki (jedna sylaba, np. <i>tall, fast, cold</i>) dostają <b>-er</b> i <b>-est</b>.</p>
      <p>Uważaj na pisownię: <b>-y</b> zamienia się w <b>-i</b> (<i>happy – happier, easy – easier</i>), a po krótkiej samogłosce ostatnia litera się podwaja (<i>big – bigger, hot – hotter, thin – thinner</i>).</p>`,
    hook: '<b>big → bigger</b>: „g” jest za małe, żeby udźwignąć końcówkę, więc woła brata – <b>gg</b> 👯.',
    check: { q: 'Stopień wyższy od „easy” to…', options: ['easyer', 'easier', 'more easy', 'easiest'], answer: 1, explain: '-y → -ier: easy – easier – the easiest.' },
  },
  {
    title: 'Długie przymiotniki: more i the most',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Schodki: beautiful, more beautiful, the most beautiful">
      <rect x="10" y="12" width="190" height="44" rx="10" class="f1 s1"/>
      <rect x="60" y="68" width="250" height="44" rx="10" class="f4 s4"/>
      <rect x="110" y="124" width="300" height="44" rx="10" class="f3 s3"/>
      <text x="105" y="40" class="tx-b" text-anchor="middle">beautiful</text>
      <text x="185" y="96" class="tx-b" text-anchor="middle"><tspan class="t4">more</tspan> beautiful</text>
      <text x="260" y="152" class="tx-b" text-anchor="middle"><tspan class="t3">the most</tspan> beautiful</text>
      <text x="210" y="192" class="tx-s" text-anchor="middle">interesting → more interesting → the most interesting</text>
    </svg>`,
    text: `<p>Długie przymiotniki (dwie sylaby i więcej, np. <i>beautiful, interesting, expensive</i>) nie dostają końcówek. Zamiast tego stawiasz przed nimi <b>more</b> albo <b>the most</b>.</p>
      <p><i>This book is more interesting than the film. It's the most expensive phone in the shop.</i></p>`,
    remember: 'Krótki → <b>-er / the -est</b>. Długi → <b>more / the most</b>. Nigdy obu naraz: <s>more taller</s>.',
    hook: 'Długie słowo jest już tak ciężkie, że nie uniesie końcówki – bierze do pomocy <b>more</b> 💪.',
    check: { q: 'This film is ___ than the book.', options: ['excitinger', 'more exciting', 'most exciting', 'the more exciting'], answer: 1, explain: 'Długi przymiotnik + porównanie dwóch rzeczy → more … than.' },
  },
  {
    title: 'Buntownicy – stopniowanie nieregularne',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Tabela nieregularnych przymiotników: good, bad, many, much, little, far">
      <rect x="10" y="8" width="400" height="38" rx="10" class="f3"/>
      <rect x="10" y="52" width="400" height="38" rx="10" class="f2"/>
      <rect x="10" y="96" width="400" height="38" rx="10" class="f1"/>
      <rect x="10" y="140" width="400" height="38" rx="10" class="f5"/>
      <text x="32" y="34" font-size="20" text-anchor="middle">👍</text>
      <text x="32" y="78" font-size="20" text-anchor="middle">👎</text>
      <text x="32" y="122" font-size="20" text-anchor="middle">➕</text>
      <text x="32" y="166" font-size="20" text-anchor="middle">➖</text>
      <text x="55" y="33" class="tx-b">good</text><text x="170" y="33" class="tx-b t3">better</text><text x="285" y="33" class="tx-b t3">the best</text>
      <text x="55" y="77" class="tx-b">bad</text><text x="170" y="77" class="tx-b t2">worse</text><text x="285" y="77" class="tx-b t2">the worst</text>
      <text x="55" y="121" class="tx-b">many/much</text><text x="170" y="121" class="tx-b t1">more</text><text x="285" y="121" class="tx-b t1">the most</text>
      <text x="55" y="165" class="tx-b">little</text><text x="170" y="165" class="tx-b t5">less</text><text x="285" y="165" class="tx-b t5">the least</text>
      <text x="210" y="205" class="tx-s" text-anchor="middle">far – farther / further – the farthest / the furthest</text>
    </svg>`,
    text: `<p>Kilka przymiotników nie słucha żadnych zasad – ich formy trzeba po prostu znać. Są bardzo częste na egzaminie!</p>
      <p><i>My test result was <b>worse</b> than yours. This is <b>the best</b> day of my life!</i></p>`,
    remember: '<b>good – better – the best</b> · <b>bad – worse – the worst</b>. Nie ma <s>gooder</s> ani <s>badder</s>!',
    hook: 'Jak po polsku: dobry – <b>lepszy</b> (nie „dobrzejszy”) i zły – <b>gorszy</b>. Angielski też ma tu „inne słowa”.',
    check: { q: 'My cold is ___ today than yesterday. I feel terrible.', options: ['badder', 'worse', 'the worst', 'more bad'], answer: 1, explain: 'bad – worse – the worst; porównanie dwóch dni → worse.' },
  },
  {
    title: 'Porównujemy: than, as … as, not as … as',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Trzy porównania: wyższy niż, tak samo wysoki jak, nie tak zimno jak">
      <rect x="30" y="50" width="36" height="90" rx="4" class="f1 s1 sw"/>
      <rect x="84" y="80" width="36" height="60" rx="4" class="f1 s1 sw"/>
      <text x="48" y="160" class="tx-s" text-anchor="middle">Tom</text>
      <text x="102" y="160" class="tx-s" text-anchor="middle">Jack</text>
      <rect x="168" y="65" width="36" height="75" rx="4" class="f3 s3 sw"/>
      <rect x="222" y="65" width="36" height="75" rx="4" class="f3 s3 sw"/>
      <line x1="160" y1="65" x2="266" y2="65" class="ln-thin dash"/>
      <text x="186" y="160" class="tx-s" text-anchor="middle">Ann</text>
      <text x="240" y="160" class="tx-s" text-anchor="middle">Ben</text>
      <rect x="300" y="100" width="36" height="40" rx="4" class="f1 s1 sw"/>
      <rect x="360" y="45" width="36" height="95" rx="4" class="f1 s1 sw"/>
      <text x="318" y="92" font-size="16" text-anchor="middle">❄</text>
      <text x="378" y="37" font-size="16" text-anchor="middle">❄❄</text>
      <text x="318" y="160" class="tx-s" text-anchor="middle">today</text>
      <text x="378" y="160" class="tx-s" text-anchor="middle">yesterday</text>
      <text x="75" y="190" class="tx-b t1" text-anchor="middle">taller than</text>
      <text x="213" y="190" class="tx-b t3" text-anchor="middle">as tall as</text>
      <text x="350" y="190" class="tx-b t1" text-anchor="middle">not as cold as</text>
    </svg>`,
    text: `<ul><li><b>than</b> = niż: <i>Tom is taller than Jack.</i></li>
      <li><b>as … as</b> = tak samo … jak: <i>Ann is as tall as Ben.</i></li>
      <li><b>not as … as</b> = nie tak … jak: <i>It's not as cold as yesterday.</i></li></ul>
      <p>W <b>as … as</b> przymiotnik zostaje w zwykłej formie – bez -er!</p>`,
    remember: 'Typowe pułapki: <b>than</b> (nie <s>then</s>, <s>that</s>), <b>the</b> przed najwyższym, <b>as tall as</b> (nie <s>as taller as</s>).',
    hook: '<b>as … as</b> to dwie równe szale wagi ⚖️ – po obu stronach to samo słowo <i>as</i>.',
    check: { q: 'My bag is as heavy ___ yours.', options: ['than', 'as', 'like', 'that'], answer: 1, explain: 'Równość → as … as.' },
  },
];

/* ===================== ZDANIA WARUNKOWE (TYP 0 I I) I SPÓJNIKI ===================== */
window.LESSONS['angielski/zdania-warunkowe'] = [
  {
    title: 'IF → skutek: dwa typy na egzamin',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Schemat: typ 0 – if plus Present Simple, potem Present Simple; typ I – if plus Present Simple, potem will">
      <defs><marker id="m-cond-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="22" class="tx-b t3">Typ 0 – zawsze tak jest 🔁</text>
      <rect x="10" y="32" width="190" height="62" rx="12" class="f1 s1 sw"/>
      <rect x="230" y="32" width="180" height="62" rx="12" class="f3 s3 sw"/>
      <text x="105" y="57" class="tx-b" text-anchor="middle">IF / WHEN</text>
      <text x="105" y="80" class="tx" text-anchor="middle">+ Present Simple</text>
      <text x="320" y="70" class="tx" text-anchor="middle">Present Simple</text>
      <path d="M203,63 H225" class="ln" marker-end="url(#m-cond-1)"/>
      <text x="10" y="124" class="tx-b t4">Typ I – realna przyszłość 🔮</text>
      <rect x="10" y="134" width="190" height="62" rx="12" class="f1 s1 sw"/>
      <rect x="230" y="134" width="180" height="62" rx="12" class="f4 s4 sw"/>
      <text x="105" y="159" class="tx-b" text-anchor="middle">IF</text>
      <text x="105" y="182" class="tx" text-anchor="middle">+ Present Simple</text>
      <text x="320" y="159" class="tx-b" text-anchor="middle">will</text>
      <text x="320" y="182" class="tx" text-anchor="middle">+ czasownik</text>
      <path d="M203,165 H225" class="ln" marker-end="url(#m-cond-1)"/>
    </svg>`,
    text: `<p>Zdanie warunkowe ma dwie części: <b>warunek</b> (z <i>if</i> = jeśli) i <b>skutek</b>. Na egzaminie ósmoklasisty potrzebujesz dwóch typów:</p>
      <ul><li><b>typ 0</b> – prawdy ogólne, prawa przyrody, coś, co dzieje się <b>zawsze</b>,</li>
      <li><b>typ I</b> – <b>realna</b> sytuacja w przyszłości: jeśli coś się stanie, to będzie skutek.</li></ul>`,
    hook: 'W obu typach lewa (niebieska) część jest taka sama: <b>if + Present Simple</b>. Zmienia się tylko prawa strona.',
  },
  {
    title: 'Typ 0 – przepis, który działa zawsze',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Lód plus ogień daje wodę – if you heat ice, it melts">
      <text x="60" y="75" font-size="46" text-anchor="middle">🧊</text>
      <text x="125" y="70" class="tx-b" text-anchor="middle">+</text>
      <text x="185" y="75" font-size="46" text-anchor="middle">🔥</text>
      <text x="255" y="70" class="tx-b" text-anchor="middle">→</text>
      <text x="330" y="75" font-size="46" text-anchor="middle">💧</text>
      <rect x="10" y="105" width="400" height="40" rx="10" class="f1"/>
      <text x="210" y="131" class="tx-b" text-anchor="middle">If you heat ice, it melts.</text>
      <rect x="10" y="152" width="400" height="40" rx="10" class="f3"/>
      <text x="210" y="178" class="tx-b" text-anchor="middle">When it is hot, we drink more.</text>
    </svg>`,
    text: `<p>Typ 0 to jak przepis albo prawo fizyki – za każdym razem ten sam skutek. W <b>obu</b> częściach stoi <b>Present Simple</b>.</p>
      <p>Zamiast <i>if</i> możesz tu powiedzieć <i>when</i> (kiedy), bo to dzieje się zawsze: <i>When I'm tired, I go to bed early.</i></p>`,
    remember: 'Typ 0: <b>If / When + Present Simple, Present Simple</b>.',
    hook: 'Typ 0 = „zero niespodzianek” – skutek jest zawsze ten sam.',
    check: { q: 'Water ___ if you heat it to 100°C.', options: ['boils', 'boiled', 'boiling', 'boil'], answer: 0, explain: 'Prawo przyrody → typ 0, Present Simple; water = it → boils.' },
  },
  {
    title: 'Typ I – jeśli…, to…',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Jeśli jutro będzie padać, zostaniemy w domu – warunek i skutek">
      <defs><marker id="m-cond-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="100" y="55" font-size="44" text-anchor="middle">🌧️</text>
      <text x="320" y="55" font-size="44" text-anchor="middle">🏠</text>
      <path d="M150,40 H265" class="ln sw" marker-end="url(#m-cond-3)"/>
      <rect x="10" y="75" width="190" height="56" rx="12" class="f1 s1 sw"/>
      <rect x="220" y="75" width="190" height="56" rx="12" class="f4 s4 sw"/>
      <text x="105" y="100" class="tx" text-anchor="middle">If it <tspan class="t1">rains</tspan></text>
      <text x="105" y="121" class="tx" text-anchor="middle">tomorrow,</text>
      <text x="315" y="100" class="tx" text-anchor="middle">we <tspan class="t4">will stay</tspan></text>
      <text x="315" y="121" class="tx" text-anchor="middle">at home.</text>
      <text x="105" y="160" class="tx-s" text-anchor="middle">warunek: Present Simple</text>
      <text x="315" y="160" class="tx-s" text-anchor="middle">skutek: will + czasownik</text>
      <text x="210" y="190" class="tx" text-anchor="middle">If we win the match, we will have a party. 🎉</text>
    </svg>`,
    text: `<p>Typ I mówi o <b>realnej</b> przyszłości: coś jest możliwe i jeśli się stanie, będzie skutek.</p>
      <p>Uwaga: choć warunek dotyczy przyszłości (<i>tomorrow</i>), po <b>if</b> stoi <b>Present Simple</b>. <i>Will</i> pojawia się tylko w skutku.</p>`,
    remember: 'Typ I: <b>If + Present Simple, will + czasownik</b>. Kolejność można odwrócić: <i>We will stay at home if it rains.</i>',
    check: { q: 'If you ___ now, you will catch the bus.', options: ['will leave', 'leave', 'left', 'leaving'], answer: 1, explain: 'Po „if” – Present Simple, nie „will”.' },
  },
  {
    title: 'Pułapka nr 1: po IF nie ma WILL',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Znak zakazu dla will po if i when – porównanie źle i dobrze">
      <circle cx="50" cy="55" r="34" class="f2 s2" stroke-width="6"/>
      <line x1="26" y1="31" x2="74" y2="79" class="s2" stroke-width="6"/>
      <text x="50" y="61" class="tx-b" text-anchor="middle">will</text>
      <text x="100" y="45" class="tx t2">❌ If it will rain, …</text>
      <text x="100" y="78" class="tx t3">✅ If it rains, …</text>
      <rect x="10" y="108" width="400" height="38" rx="10" class="f1"/>
      <text x="210" y="133" class="tx" text-anchor="middle">If she studies, she will pass.</text>
      <rect x="10" y="154" width="400" height="38" rx="10" class="f3"/>
      <text x="210" y="179" class="tx" text-anchor="middle">I will call you when I get home.</text>
    </svg>`,
    text: `<p>To najczęstszy błąd na egzaminie! W części z <b>if</b> albo <b>when</b> (gdy mowa o przyszłości) nie stawiasz <i>will</i>, tylko Present Simple.</p>
      <p><i>When I get home</i> – nie <s>when I will get home</s>.</p>`,
    remember: '<b>if / when</b> + Present Simple. <b>will</b> idzie do drugiej części zdania.',
    hook: '<b>IF</b> i <b>WILL</b> się nie lubią – nigdy nie siedzą w tej samej połowie zdania.',
    check: { q: 'Które zdanie jest poprawne?', options: ['If it will be sunny, we will go out.', 'If it is sunny, we will go out.', 'If it is sunny, we go out tomorrow.', 'If it was sunny, we will go out.'], answer: 1, explain: 'If + Present Simple (is), skutek: will + czasownik.' },
  },
  {
    title: 'because i so – przyczyna i skutek',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Przyczyna i skutek połączone słowami so i because">
      <defs><marker id="m-cond-5a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker>
      <marker id="m-cond-5b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="100" y="22" class="tx-s" text-anchor="middle">PRZYCZYNA</text>
      <text x="320" y="22" class="tx-s" text-anchor="middle">SKUTEK</text>
      <rect x="10" y="30" width="180" height="50" rx="12" class="f2 s2 sw"/>
      <rect x="230" y="30" width="180" height="50" rx="12" class="f3 s3 sw"/>
      <text x="100" y="61" class="tx" text-anchor="middle">I was tired 😴</text>
      <text x="320" y="61" class="tx" text-anchor="middle">I went to bed 🛏️</text>
      <path d="M100,85 Q210,130 315,88" class="ln s3 sw" marker-end="url(#m-cond-5a)"/>
      <text x="210" y="128" class="tx-b t3" text-anchor="middle">so →</text>
      <path d="M320,85 Q210,180 105,88" class="ln s2 sw dash" marker-end="url(#m-cond-5b)"/>
      <text x="210" y="160" class="tx-b t2" text-anchor="middle">← because</text>
      <text x="210" y="192" class="tx-s" text-anchor="middle">I was tired, so I went to bed. · I went to bed because I was tired.</text>
    </svg>`,
    text: `<p>Te dwa spójniki opisują tę samą sytuację, ale z dwóch stron:</p>
      <ul><li><b>because</b> (ponieważ) – stoi przed <b>przyczyną</b>: <i>She stayed at home because she was ill.</i></li>
      <li><b>so</b> (więc) – stoi przed <b>skutkiem</b>: <i>She was ill, so she stayed at home.</i></li></ul>`,
    hook: '<b>because</b> odpowiada na pytanie <b>„dlaczego?”</b>, <b>so</b> na pytanie <b>„i co z tego?”</b>.',
    check: { q: 'It was raining, ___ we took an umbrella.', options: ['because', 'so', 'or', 'if'], answer: 1, explain: 'Deszcz → (skutek) parasol. Przed skutkiem stoi „so”.' },
  },
  {
    title: 'Cel, czas i „który”: to, when, who, which',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Przykłady zdań z to (cel), when (czas), who (o ludziach) i which (o rzeczach)">
      <rect x="10" y="8" width="400" height="44" rx="10" class="f1"/>
      <rect x="10" y="58" width="400" height="44" rx="10" class="f4"/>
      <rect x="10" y="108" width="400" height="44" rx="10" class="f3"/>
      <rect x="10" y="158" width="400" height="44" rx="10" class="f5"/>
      <text x="32" y="38" font-size="20" text-anchor="middle">🎯</text>
      <text x="32" y="88" font-size="20" text-anchor="middle">⏰</text>
      <text x="32" y="138" font-size="20" text-anchor="middle">👤</text>
      <text x="32" y="188" font-size="20" text-anchor="middle">📦</text>
      <text x="55" y="36" class="tx">I went to the shop <tspan class="t1">to buy</tspan> bread.</text>
      <text x="55" y="86" class="tx">The phone rang <tspan class="t4">when</tspan> I was out.</text>
      <text x="55" y="136" class="tx">The girl <tspan class="t3">who</tspan> sits next to me…</text>
      <text x="55" y="186" class="tx">The book <tspan class="t5">which</tspan> I'm reading…</text>
    </svg>`,
    text: `<ul><li><b>to + czasownik</b> = żeby (cel): <i>I came here to give you this letter.</i> (nie <s>for give</s>)</li>
      <li><b>when</b> = kiedy (czas): <i>The phone rang when we were leaving the flat.</i></li>
      <li><b>who</b> – „który” o <b>ludziach</b>, <b>which</b> – „który” o <b>rzeczach</b> (o obu można też <b>that</b>).</li></ul>`,
    remember: 'Cel → <b>to</b> + czasownik. Osoba → <b>who</b>. Rzecz → <b>which</b>.',
    hook: '<b>WHO</b> – sam wyraz zaczyna się jak pytanie „kto?” 👤. <b>Which</b> – „który z tych przedmiotów?” 📦.',
    check: { q: 'This is the book ___ I told you about.', options: ['who', 'which', 'what', 'where'], answer: 1, explain: 'Książka to rzecz → which.' },
  },
];

/* ===================== CZASOWNIKI MODALNE ===================== */
window.LESSONS['angielski/modalne'] = [
  {
    title: 'Modale – małe słowa, wielka moc',
    svg: `<svg viewBox="0 0 420 195" role="img" aria-label="Po czasowniku modalnym czasownik bez to; wyjątki have to i would like to">
      <defs><marker id="m-mod-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
      <rect x="20" y="15" width="110" height="46" rx="12" class="f5 s5 sw"/>
      <rect x="170" y="15" width="110" height="46" rx="12" class="f1 s1 sw"/>
      <text x="75" y="45" class="tx-b" text-anchor="middle">can</text>
      <text x="225" y="45" class="tx-b" text-anchor="middle">swim</text>
      <path d="M133,38 H165" class="ln s3 sw" marker-end="url(#m-mod-1)"/>
      <text x="345" y="46" class="tx-b t3" text-anchor="middle">✅</text>
      <text x="20" y="98" class="tx t2">❌ I can to swim.   ❌ She musts go.</text>
      <text x="20" y="128" class="tx t3">✅ I can swim.        ✅ She must go.</text>
      <rect x="10" y="145" width="400" height="44" rx="12" class="f4 s4"/>
      <text x="210" y="173" class="tx" text-anchor="middle">wyjątki z „to”: <tspan class="t4">have to</tspan> · <tspan class="t4">would like to</tspan></text>
    </svg>`,
    text: `<p>Czasowniki modalne (<i>can, could, may, must, should</i>) dodają zdaniu „nastrój”: umiem, muszę, wolno, powinienem…</p>
      <p>Po nich stoi czasownik w formie podstawowej, <b>bez „to”</b>: <i>I can swim, you should go</i>. Wyjątki to <b>have to</b> i <b>would like to</b>.</p>`,
    remember: 'modal + czasownik <b>bez to</b>: <i>I must go</i>. Ale: <i>I <b>have to</b> go, I <b>would like to</b> go</i>.',
    hook: 'Modal to „turbo” 🚀 – podpina się bezpośrednio pod czasownik, bez łącznika <i>to</i>.',
    check: { q: 'She must ___ her room today.', options: ['clean', 'to clean', 'cleaning', 'cleans'], answer: 0, explain: 'Po „must” – czasownik bez „to”.' },
  },
  {
    title: 'Znaki drogowe obowiązku',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Cztery znaki: must, have to, mustn't jako zakaz, don't have to jako brak konieczności">
      <rect x="5" y="5" width="202" height="98" rx="12" class="f1"/>
      <rect x="213" y="5" width="202" height="98" rx="12" class="f4"/>
      <rect x="5" y="108" width="202" height="98" rx="12" class="f2"/>
      <rect x="213" y="108" width="202" height="98" rx="12" class="f3"/>
      <circle cx="40" cy="54" r="27" class="bg s1" stroke-width="5"/>
      <text x="40" y="62" class="tx-b t1" text-anchor="middle">!</text>
      <circle cx="248" cy="54" r="27" class="bg s4" stroke-width="5"/>
      <text x="248" y="62" font-size="22" text-anchor="middle">📜</text>
      <circle cx="40" cy="157" r="27" class="bg s2" stroke-width="5"/>
      <line x1="21" y1="138" x2="59" y2="176" class="s2" stroke-width="5"/>
      <circle cx="248" cy="157" r="27" class="bg s3" stroke-width="5"/>
      <text x="248" y="165" class="tx-b t3" text-anchor="middle">✓</text>
      <text x="76" y="44" class="tx-b t1">must</text>
      <text x="76" y="66" class="tx-s">muszę – sam tak</text>
      <text x="76" y="84" class="tx-s">uważam</text>
      <text x="284" y="44" class="tx-b t4">have to</text>
      <text x="284" y="66" class="tx-s">muszę – takie są</text>
      <text x="284" y="84" class="tx-s">zasady</text>
      <text x="76" y="147" class="tx-b t2">mustn't</text>
      <text x="76" y="169" class="tx-s">NIE WOLNO</text>
      <text x="76" y="187" class="tx-s">zakaz!</text>
      <text x="282" y="147" class="tx-b t3">don't have to</text>
      <text x="282" y="169" class="tx-s">nie musisz</text>
      <text x="282" y="187" class="tx-s">(ale możesz)</text>
    </svg>`,
    text: `<ul><li><b>must</b> – obowiązek, który czujesz sam: <i>I must finish it today.</i></li>
      <li><b>have to / has to</b> – obowiązek z zewnątrz (przepisy, rodzice, szkoła): <i>She has to wear a uniform.</i></li>
      <li><b>mustn't</b> – <b>zakaz</b>: <i>You mustn't smoke here.</i></li>
      <li><b>don't / doesn't have to</b> – <b>brak konieczności</b>: <i>I don't have to do it.</i></li></ul>`,
    hook: '<b>have to</b> odmienia się jak zwykły czasownik: <i>he <b>has</b> to, he <b>doesn\'t</b> have to, <b>Do</b> you have to…?</i>',
    check: { q: 'You ___ use your phone during the exam. It\'s forbidden.', options: ["mustn't", "don't have to", 'should', 'can'], answer: 0, explain: '„Forbidden” = zakazane → mustn\'t.' },
  },
  {
    title: 'Pułapka: mustn\'t ≠ don\'t have to',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Porównanie: mustn't swim – zakaz kąpieli z rekinem; don't have to get up – w niedzielę można spać">
      <rect x="10" y="10" width="195" height="190" rx="14" class="f2 s2 sw"/>
      <rect x="215" y="10" width="195" height="190" rx="14" class="f3 s3 sw"/>
      <text x="107" y="38" class="tx-b t2" text-anchor="middle">🚫 ZAKAZ</text>
      <text x="312" y="38" class="tx-b t3" text-anchor="middle">🆗 LUZ</text>
      <text x="107" y="95" font-size="40" text-anchor="middle">🦈🏊</text>
      <text x="312" y="95" font-size="40" text-anchor="middle">😴</text>
      <text x="107" y="135" class="tx" text-anchor="middle">You mustn't</text>
      <text x="107" y="158" class="tx" text-anchor="middle">swim here.</text>
      <text x="107" y="186" class="tx-s" text-anchor="middle">= nie wolno</text>
      <text x="312" y="124" class="tx-s" text-anchor="middle">It's Sunday!</text>
      <text x="312" y="148" class="tx" text-anchor="middle">I don't have to</text>
      <text x="312" y="170" class="tx" text-anchor="middle">get up early.</text>
      <text x="312" y="188" class="tx-s" text-anchor="middle">= nie muszę</text>
    </svg>`,
    text: `<p>Po polsku obie formy zaczynają się od „nie musisz”, więc łatwo się pomylić. Ale znaczą coś zupełnie innego:</p>
      <p><b>mustn't</b> – nie wolno ci (bo to zabronione lub niebezpieczne).<br><b>don't have to</b> – nie musisz, nie ma takiej potrzeby (ale możesz, jeśli chcesz).</p>`,
    remember: '<b>mustn\'t</b> = 🚫 zakaz. <b>don\'t have to</b> = 🆗 nie ma potrzeby.',
    hook: 'Zapytaj: <b>„A mogę, jeśli chcę?”</b> Jeśli tak → <i>don\'t have to</i>. Jeśli nie → <i>mustn\'t</i>.',
    check: { q: 'We ___ wear a uniform at our school – we can wear what we like.', options: ["mustn't", "don't have to", "can't", 'must'], answer: 1, explain: 'Możemy, ale nie musimy → don\'t have to.' },
  },
  {
    title: 'can, could, may – umiem, proszę, czy mogę?',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Kafelki can, could, may z przykładami użycia">
      <rect x="10" y="6" width="400" height="48" rx="10" class="f1"/>
      <rect x="10" y="60" width="400" height="48" rx="10" class="f3"/>
      <rect x="10" y="114" width="400" height="48" rx="10" class="f5"/>
      <rect x="10" y="168" width="400" height="48" rx="10" class="f4"/>
      <text x="32" y="38" font-size="20" text-anchor="middle">💪</text>
      <text x="32" y="92" font-size="20" text-anchor="middle">🙏</text>
      <text x="32" y="146" font-size="20" text-anchor="middle">🎩</text>
      <text x="32" y="200" font-size="20" text-anchor="middle">🤔</text>
      <text x="55" y="27" class="tx-b t1">can</text>
      <text x="55" y="45" class="tx-s">umiejętność</text>
      <text x="55" y="81" class="tx-b t3">could</text>
      <text x="55" y="99" class="tx-s">uprzejma prośba</text>
      <text x="55" y="135" class="tx-b t5">may</text>
      <text x="55" y="153" class="tx-s">pozwolenie</text>
      <text x="55" y="189" class="tx-b t4">may</text>
      <text x="55" y="207" class="tx-s">możliwość</text>
      <text x="200" y="36" class="tx">I can speak English.</text>
      <text x="200" y="90" class="tx">Could you help me?</text>
      <text x="200" y="144" class="tx">May I come in?</text>
      <text x="200" y="198" class="tx">It may be too late.</text>
    </svg>`,
    text: `<ul><li><b>can / can't</b> – umiejętność i możliwość (<i>I can't swim</i>), też zwykła prośba: <i>Can you help me?</i></li>
      <li><b>could</b> – <b>grzeczniejsza</b> prośba: <i>Could you speak more slowly?</i> oraz umiejętność w przeszłości: <i>I could read when I was five.</i></li>
      <li><b>may</b> – grzeczne pytanie o pozwolenie: <i>May I speak to Sam?</i> oraz „może się zdarzyć”: <i>It may rain.</i></li></ul>`,
    hook: '<b>may</b> nosi cylinder 🎩 – to najbardziej elegancki sposób zapytania „czy mogę?”.',
    check: { q: '___ I open the window, please?', options: ['May', 'Must', 'Should', 'Have'], answer: 0, explain: 'Grzeczna prośba o pozwolenie → May I…?' },
  },
  {
    title: 'should, must (pewność), would like to',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Kafelki: should – rada, must – pewność, would like to – grzeczna chęć">
      <rect x="10" y="8" width="400" height="56" rx="12" class="f4 s4"/>
      <rect x="10" y="72" width="400" height="56" rx="12" class="f1 s1"/>
      <rect x="10" y="136" width="400" height="56" rx="12" class="f5 s5"/>
      <text x="34" y="44" font-size="22" text-anchor="middle">💡</text>
      <text x="34" y="108" font-size="22" text-anchor="middle">🔍</text>
      <text x="34" y="172" font-size="22" text-anchor="middle">🎁</text>
      <text x="60" y="32" class="tx-b t4">should / shouldn't</text>
      <text x="60" y="53" class="tx-s">rada</text>
      <text x="230" y="53" class="tx">You should rest.</text>
      <text x="60" y="96" class="tx-b t1">must</text>
      <text x="60" y="117" class="tx-s">jestem pewien</text>
      <text x="230" y="117" class="tx">It must be Tom.</text>
      <text x="60" y="160" class="tx-b t5">would like to</text>
      <text x="60" y="181" class="tx-s">chęć (grzecznie)</text>
      <text x="230" y="181" class="tx">I'd like to go.</text>
    </svg>`,
    text: `<ul><li><b>should / shouldn't</b> – rada: <i>You look tired. You should go to bed.</i></li>
      <li><b>must</b> może też znaczyć „na pewno”: <i>Someone is knocking. It must be Tom – he promised to come.</i></li>
      <li><b>would like to</b> (<i>I'd like to</i>) – grzeczne „chciałbym”: <i>I would like to meet him.</i></li></ul>`,
    hook: 'Detektyw 🔍 mówi <b>must</b>: „To <i>musi</i> być on!” – czyli jestem pewien.',
    check: { q: "You've got a headache. You ___ take a break.", options: ['should', "mustn't", 'would like', 'have'], answer: 0, explain: 'Rada → should.' },
  },
  {
    title: '-ing czy to? I tryb rozkazujący',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Dwa tory: po enjoy i po przyimku forma -ing, po przymiotniku i would like forma to; na dole rozkazy">
      <rect x="10" y="8" width="195" height="150" rx="14" class="f3 s3 sw"/>
      <rect x="215" y="8" width="195" height="150" rx="14" class="f1 s1 sw"/>
      <text x="107" y="35" class="tx-b t3" text-anchor="middle">+ -ing</text>
      <text x="312" y="35" class="tx-b t1" text-anchor="middle">+ to</text>
      <text x="107" y="62" class="tx-s" text-anchor="middle">enjoy, like, love, hate</text>
      <text x="107" y="84" class="tx" text-anchor="middle">I enjoy walking.</text>
      <text x="107" y="115" class="tx-s" text-anchor="middle">po przyimku (at, in…)</text>
      <text x="107" y="137" class="tx" text-anchor="middle">good at swimming</text>
      <text x="312" y="62" class="tx-s" text-anchor="middle">po przymiotniku</text>
      <text x="312" y="84" class="tx" text-anchor="middle">happy to see you</text>
      <text x="312" y="115" class="tx-s" text-anchor="middle">would like</text>
      <text x="312" y="137" class="tx" text-anchor="middle">I'd like to buy it.</text>
      <rect x="10" y="168" width="400" height="44" rx="12" class="f2 s2"/>
      <text x="210" y="196" class="tx" text-anchor="middle">👉 Come here!   ✋ Don't touch that!</text>
    </svg>`,
    text: `<ul><li>Po <b>enjoy, like, love, hate, prefer</b> często forma <b>-ing</b>: <i>I love reading.</i></li>
      <li>Po <b>przyimku</b> zawsze <b>-ing</b>: <i>I'm good at swimming. Thanks for helping me.</i></li>
      <li>Po <b>przymiotniku</b> – <b>to</b> + czasownik: <i>I'm very happy to see you.</i></li></ul>
      <p><b>Tryb rozkazujący</b> to sam czasownik (<i>Come here!</i>), a zakaz – <b>Don't</b> + czasownik (<i>Don't touch that!</i>).</p>`,
    remember: 'Przyimek (at, in, for, of…) + <b>-ing</b>. Przymiotnik + <b>to</b>.',
    hook: 'Przyimek to „magnes na -ing” 🧲: <i>good at drawing, interested in dancing</i>.',
    check: { q: 'She is interested in ___ photos.', options: ['take', 'taking', 'to take', 'took'], answer: 1, explain: 'Po przyimku „in” zawsze forma -ing.' },
  },
];

/* ===================== STRONA BIERNA, PRZYIMKI, ZAIMKI ===================== */
window.LESSONS['angielski/bierna-zaimki'] = [
  {
    title: 'Strona bierna – zamiana miejscami',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Zdanie czynne People speak English zamienione na bierne English is spoken everywhere">
      <defs><marker id="m-pass-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <text x="10" y="20" class="tx-s">czynna – kto to robi?</text>
      <rect x="10" y="28" width="115" height="44" rx="10" class="f2 s2 sw"/>
      <rect x="135" y="28" width="105" height="44" rx="10" class="ln-thin"/>
      <rect x="250" y="28" width="160" height="44" rx="10" class="f1 s1 sw"/>
      <text x="67" y="56" class="tx-b" text-anchor="middle">People</text>
      <text x="187" y="56" class="tx-b" text-anchor="middle">speak</text>
      <text x="330" y="56" class="tx-b" text-anchor="middle">English.</text>
      <path d="M330,76 C330,120 70,105 68,140" class="ln s1 sw" marker-end="url(#m-pass-1)"/>
      <text x="410" y="132" class="tx-s" text-anchor="end">obiekt idzie na początek</text>
      <rect x="10" y="148" width="115" height="44" rx="10" class="f1 s1 sw"/>
      <rect x="135" y="148" width="130" height="44" rx="10" class="f4 s4 sw"/>
      <rect x="275" y="148" width="135" height="44" rx="10" class="ln-thin"/>
      <text x="67" y="176" class="tx-b" text-anchor="middle">English</text>
      <text x="200" y="176" class="tx-b" text-anchor="middle">is spoken</text>
      <text x="342" y="176" class="tx-b" text-anchor="middle">everywhere.</text>
      <text x="10" y="210" class="tx-s">bierna – co się z tym dzieje?</text>
    </svg>`,
    text: `<p>W stronie czynnej ważne jest, <b>kto</b> coś robi. W <b>biernej</b> – <b>co się dzieje</b> z rzeczą. Obiekt (<i>English</i>) wskakuje na początek zdania, a wykonawca (<i>people</i>) często znika, bo jest nieważny albo nieznany.</p>
      <p><i>Someone stole my car.</i> → <i>My car was stolen.</i></p>`,
    remember: 'Strona bierna = <b>be + III forma</b>: <i>is spoken, was stolen, will be announced</i>.',
    hook: 'Jak po polsku: „Ktoś ukradł rower” → „Rower <b>został ukradziony</b>”. <i>Został</i> = <i>was</i>.',
    check: { q: 'This bridge ___ in 1990.', options: ['was built', 'built', 'is build', 'has build'], answer: 0, explain: 'Most nie budował sam – był budowany → was + III forma (built).' },
  },
  {
    title: 'be + III forma w trzech czasach',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś czasu: was plus III forma w przeszłości, is lub are plus III forma teraz, will be plus III forma w przyszłości">
      <defs><marker id="m-pass-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="15" y1="95" x2="405" y2="95" class="ln" marker-end="url(#m-pass-2)"/>
      <circle cx="75" cy="95" r="8" class="f1 s1 sw"/>
      <circle cx="205" cy="95" r="8" class="f3 s3 sw"/>
      <circle cx="345" cy="95" r="8" class="f4 s4 sw"/>
      <text x="75" y="40" class="tx-b t1" text-anchor="middle">was + III</text>
      <text x="205" y="40" class="tx-b t3" text-anchor="middle">is / are + III</text>
      <text x="345" y="40" class="tx-b t4" text-anchor="middle">will be + III</text>
      <text x="75" y="68" class="tx-s" text-anchor="middle">yesterday</text>
      <text x="205" y="68" class="tx-s" text-anchor="middle">always, every day</text>
      <text x="345" y="68" class="tx-s" text-anchor="middle">tomorrow</text>
      <text x="75" y="130" class="tx" text-anchor="middle">was stolen</text>
      <text x="205" y="130" class="tx" text-anchor="middle">is made</text>
      <text x="345" y="130" class="tx" text-anchor="middle">will be sent</text>
      <text x="210" y="180" class="tx-b t5" text-anchor="middle">be (w danym czasie) + III forma</text>
    </svg>`,
    text: `<ul><li>Present Simple: <i>English <b>is spoken</b> all over the world. Cars <b>are made</b> here.</i></li>
      <li>Past Simple: <i>My car <b>was stolen</b> last night.</i></li>
      <li>Future Simple: <i>The results <b>will be announced</b> tomorrow.</i></li></ul>
      <p>Zmienia się tylko <b>be</b>. III forma zostaje zawsze taka sama.</p>`,
    hook: 'Czas pokazuje <b>be</b> (is / was / will be), a III forma to „stały pasażer” 🚌.',
    check: { q: 'The new school ___ next year.', options: ['will be built', 'will build', 'is building', 'builds'], answer: 0, explain: 'Przyszłość + strona bierna → will be + III forma.' },
  },
  {
    title: 'at / on / in – odwrócona piramida czasu',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Odwrócona piramida: in dla długich okresów, on dla dni, at dla punktów w czasie">
      <polygon points="10,8 410,8 368,70 52,70" class="f1 s1 sw"/>
      <polygon points="56,76 364,76 322,138 98,138" class="f3 s3 sw"/>
      <polygon points="102,144 318,144 276,204 144,204" class="f2 s2 sw"/>
      <text x="210" y="33" class="tx-b t1" text-anchor="middle">IN</text>
      <text x="210" y="58" class="tx" text-anchor="middle">July · 2027 · summer · the morning</text>
      <text x="210" y="101" class="tx-b t3" text-anchor="middle">ON</text>
      <text x="210" y="126" class="tx" text-anchor="middle">Monday · 5th May</text>
      <text x="210" y="168" class="tx-b t2" text-anchor="middle">AT</text>
      <text x="210" y="192" class="tx" text-anchor="middle">7 o'clock · night</text>
    </svg>`,
    text: `<p>Im dłuższy okres, tym wyżej w piramidzie:</p>
      <ul><li><b>in</b> – miesiące, lata, pory roku i pory dnia: <i>in July, in 2027, in summer, in the morning</i>,</li>
      <li><b>on</b> – dni i daty: <i>on Monday, on 5th May</i>,</li>
      <li><b>at</b> – godziny i <i>night</i>: <i>at 7 o'clock, at night</i>.</li></ul>
      <p>Przyimki sposobu: <b>by</b> bus / car / train, ale <b>on</b> foot; piszę <b>with</b> a pen.</p>`,
    hook: '<b>IN</b> – wielki kontener 📦, <b>ON</b> – kartka w kalendarzu 📅, <b>AT</b> – wskazówka zegara ⏰.',
    check: { q: 'My birthday is ___ 5th May.', options: ['in', 'on', 'at', 'by'], answer: 1, explain: 'Data (konkretny dzień) → on.' },
  },
  {
    title: 'Policzalne i niepoliczalne: many, much, some, any',
    svg: `<svg viewBox="0 0 420 246" role="img" aria-label="Dwa słoiki: policzalne jabłka – many i a few; niepoliczalna woda – much i a little; some i any">
      <rect x="10" y="10" width="195" height="150" rx="16" class="f2 s2 sw"/>
      <rect x="215" y="10" width="195" height="150" rx="16" class="f1 s1 sw"/>
      <text x="107" y="36" class="tx-b t2" text-anchor="middle">policzalne</text>
      <text x="312" y="36" class="tx-b t1" text-anchor="middle">niepoliczalne</text>
      <text x="107" y="80" font-size="28" text-anchor="middle">🍎🍎🍎</text>
      <text x="312" y="80" font-size="28" text-anchor="middle">💧🥛💰</text>
      <text x="107" y="108" class="tx-s" text-anchor="middle">apples, books, friends</text>
      <text x="312" y="108" class="tx-s" text-anchor="middle">water, milk, money</text>
      <text x="107" y="142" class="tx-b" text-anchor="middle">many · a few</text>
      <text x="312" y="142" class="tx-b" text-anchor="middle">much · a little</text>
      <rect x="10" y="170" width="400" height="70" rx="12" class="f4 s4"/>
      <text x="210" y="196" class="tx" text-anchor="middle"><tspan class="t3">some</tspan> → zdania twierdzące ✅</text>
      <text x="210" y="226" class="tx" text-anchor="middle"><tspan class="t4">any</tspan> → pytania ❓ i przeczenia ❌</text>
    </svg>`,
    text: `<p>Rzeczy, które da się policzyć (1 apple, 2 apples), łączysz z <b>many</b> (dużo) i <b>a few</b> (kilka). Rzeczowniki niepoliczalne (woda, pieniądze) łączysz z <b>much</b> i <b>a little</b>.</p>
      <p><b>some</b> – w zdaniach twierdzących (<i>I've got some apples</i>), <b>any</b> – w pytaniach i przeczeniach (<i>Have you got any brothers? I haven't got any money.</i>).</p>`,
    remember: '<b>How many</b> books? · <b>How much</b> money?',
    hook: 'Pieniądze liczysz w złotówkach, ale samo słowo <i>money</i> jest niepoliczalne – więc <b>much money</b> 💰.',
    check: { q: 'How ___ apples do you need for the cake?', options: ['many', 'much', 'little', 'any'], answer: 0, explain: 'Jabłka da się policzyć → many.' },
  },
  {
    title: 'too, enough, so, such – kolejność ma znaczenie',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Klocki słów: too big, big enough, so nice, such a nice girl">
      <rect x="10" y="8" width="70" height="40" rx="8" class="f2 s2 sw"/>
      <rect x="86" y="8" width="70" height="40" rx="8" class="f1 s1"/>
      <text x="45" y="34" class="tx-b" text-anchor="middle">too</text>
      <text x="121" y="34" class="tx-b" text-anchor="middle">big</text>
      <text x="240" y="34" class="tx">= za duży 👕</text>
      <rect x="10" y="58" width="70" height="40" rx="8" class="f1 s1"/>
      <rect x="86" y="58" width="96" height="40" rx="8" class="f3 s3 sw"/>
      <text x="45" y="84" class="tx-b" text-anchor="middle">big</text>
      <text x="134" y="84" class="tx-b" text-anchor="middle">enough</text>
      <text x="240" y="84" class="tx">= wystarczająco duży</text>
      <rect x="10" y="108" width="70" height="40" rx="8" class="f5 s5 sw"/>
      <rect x="86" y="108" width="70" height="40" rx="8" class="f1 s1"/>
      <text x="45" y="134" class="tx-b" text-anchor="middle">so</text>
      <text x="121" y="134" class="tx-b" text-anchor="middle">nice</text>
      <text x="240" y="134" class="tx">= taki miły</text>
      <rect x="10" y="158" width="80" height="40" rx="8" class="f4 s4 sw"/>
      <rect x="96" y="158" width="60" height="40" rx="8" class="f1 s1"/>
      <rect x="162" y="158" width="60" height="40" rx="8" class="ln-thin"/>
      <text x="50" y="184" class="tx-b" text-anchor="middle">such a</text>
      <text x="126" y="184" class="tx-b" text-anchor="middle">nice</text>
      <text x="192" y="184" class="tx-b" text-anchor="middle">girl</text>
      <text x="240" y="184" class="tx">= taka miła dziewczyna</text>
    </svg>`,
    text: `<ul><li><b>too</b> + przymiotnik = za, zbyt: <i>This T-shirt is too big for me.</i></li>
      <li>przymiotnik + <b>enough</b> = wystarczająco: <i>Is the tea sweet enough?</i></li>
      <li><b>so</b> + sam przymiotnik: <i>She is so nice.</i></li>
      <li><b>such (a)</b> + przymiotnik + <b>rzeczownik</b>: <i>She is such a nice girl.</i></li></ul>`,
    remember: '<b>too</b> stoi <b>przed</b>, <b>enough</b> – <b>po</b> przymiotniku. Jest rzeczownik? → <b>such</b>.',
    hook: '<b>enough</b> zawsze „przychodzi na końcu kolejki”: <i>old enough, big enough</i>.',
    check: { q: "He isn't old ___ to drive a car.", options: ['too', 'enough', 'so', 'such'], answer: 1, explain: 'Przymiotnik + enough = wystarczająco (stary).' },
  },
  {
    title: 'Zaimki i there is / there are',
    svg: `<svg viewBox="0 0 420 235" role="img" aria-label="Zaimki zwrotne i dzierżawcze oraz konstrukcja there is, there are">
      <rect x="10" y="8" width="195" height="160" rx="14" class="f5 s5 sw"/>
      <rect x="215" y="8" width="195" height="160" rx="14" class="f3 s3 sw"/>
      <text x="107" y="34" class="tx-b t5" text-anchor="middle">🪞 sam(a) siebie</text>
      <text x="107" y="64" class="tx" text-anchor="middle">myself · yourself</text>
      <text x="107" y="91" class="tx" text-anchor="middle">himself · herself</text>
      <text x="107" y="118" class="tx" text-anchor="middle">ourselves</text>
      <text x="107" y="145" class="tx" text-anchor="middle">themselves</text>
      <text x="312" y="34" class="tx-b t3" text-anchor="middle">🔑 czyje?</text>
      <text x="312" y="70" class="tx" text-anchor="middle">my book → mine</text>
      <text x="312" y="102" class="tx" text-anchor="middle">your book → yours</text>
      <text x="312" y="134" class="tx" text-anchor="middle">our book → ours</text>
      <text x="210" y="198" class="tx" text-anchor="middle">There <tspan class="t1">is</tspan> a cat. · There <tspan class="t1">are</tspan> two cats.</text>
      <text x="210" y="225" class="tx" text-anchor="middle">There <tspan class="t2">were</tspan> 20 people. · There <tspan class="t4">will be</tspan> a party.</text>
    </svg>`,
    text: `<ul><li><b>Zwrotne</b> (-self, -selves) – gdy robisz coś sam sobie: <i>I hurt myself. They did it themselves.</i></li>
      <li><b>Dzierżawcze</b>: <i>my</i> stoi przed rzeczownikiem (<i>my bike</i>), <i>mine</i> – zamiast niego (<i>It's mine.</i>).</li>
      <li><b>There is</b> + jedna rzecz, <b>there are</b> + wiele; w przeszłości <b>was / were</b>, w przyszłości <b>will be</b>.</li></ul>`,
    remember: 'liczba pojedyncza → <b>-self</b>, mnoga → <b>-selves</b>. <i>It\'s my bike</i> = <i>It\'s mine</i>.',
    hook: '<b>mine</b> stoi „samo” – na końcu zdania, bez rzeczownika: <i>This bike is mine.</i>',
    check: { q: "This bike isn't yours. It's ___ .", options: ['mine', 'my', 'me', 'myself'], answer: 0, explain: 'Bez rzeczownika na końcu → mine.' },
  },
];

/* ===================== REAKCJE JĘZYKOWE ===================== */
window.LESSONS['angielski/functions'] = [
  {
    title: 'Reakcje – językowy ping-pong',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Dwie osoby wymieniają zdania: Thank you so much – You're welcome">
      <defs><marker id="m-fun-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="28" y="58" font-size="34" text-anchor="middle">🙋</text>
      <rect x="60" y="18" width="230" height="46" rx="18" class="f1 s1 sw"/>
      <text x="175" y="47" class="tx" text-anchor="middle">Thank you so much!</text>
      <path d="M300,48 Q345,62 330,92" class="ln s2 sw" marker-end="url(#m-fun-1)"/>
      <text x="392" y="140" font-size="34" text-anchor="middle">🧑</text>
      <rect x="130" y="100" width="230" height="46" rx="18" class="f3 s3 sw"/>
      <text x="245" y="129" class="tx" text-anchor="middle">You're welcome. 🙂</text>
      <text x="210" y="178" class="tx-s" text-anchor="middle">wypowiedź 🏓 pasująca reakcja</text>
    </svg>`,
    text: `<p>W części „Znajomość funkcji językowych” czytasz albo słyszysz krótką sytuację i wybierasz <b>właściwą reakcję</b>. To jak ping-pong: na konkretne „podanie” pasuje tylko jedno „odbicie”.</p>
      <p>Te zwroty to gotowe klocki – nie tłumacz ich słowo w słowo, tylko zapamiętaj w parach.</p>`,
    hook: 'Ucz się <b>par</b>: wypowiedź + reakcja. Mów je na głos w dwóch głosach, jak dialog z filmu 🎬.',
  },
  {
    title: 'Dziękuję, przepraszam, gratuluję, na zdrowie!',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Cztery pary: dziękuję, przeprosiny, gratulacje i kichnięcie z właściwymi reakcjami">
      <rect x="5" y="5" width="202" height="100" rx="12" class="f1"/>
      <rect x="213" y="5" width="202" height="100" rx="12" class="f2"/>
      <rect x="5" y="110" width="202" height="100" rx="12" class="f4"/>
      <rect x="213" y="110" width="202" height="100" rx="12" class="f3"/>
      <text x="17" y="32" class="tx-b t1">🙏 Thank you!</text>
      <text x="17" y="62" class="tx">→ You're welcome.</text>
      <text x="17" y="86" class="tx">→ No problem.</text>
      <text x="225" y="32" class="tx-b t2">😔 Sorry I'm late.</text>
      <text x="225" y="62" class="tx">→ That's OK.</text>
      <text x="225" y="86" class="tx">→ Never mind.</text>
      <text x="17" y="137" class="tx-b t4">🏆 I passed!</text>
      <text x="17" y="167" class="tx">→ Congratulations!</text>
      <text x="17" y="191" class="tx">→ Well done!</text>
      <text x="225" y="137" class="tx-b t3">🤧 Atishoo!</text>
      <text x="225" y="167" class="tx">→ Bless you!</text>
    </svg>`,
    text: `<ul><li>Ktoś dziękuje → <b>You're welcome. / Not at all. / No problem.</b></li>
      <li>Ktoś przeprasza → <b>That's OK. / Never mind. / Don't worry.</b></li>
      <li>Ktoś zdał, wygrał → <b>Congratulations! / Well done!</b></li>
      <li>Ktoś kichnął → <b>Bless you!</b></li></ul>`,
    remember: 'Na „Thank you” <b>nie</b> odpowiadasz „Please” – po angielsku mówisz <b>You\'re welcome</b>.',
    hook: 'Po polsku mówisz „proszę” w trzech sytuacjach – po angielsku każda ma swój zwrot: <i>please</i> (prośba), <i>here you are</i> (podaję), <i>you\'re welcome</i> (po podziękowaniu).',
    check: { q: 'Your friend sneezes. You say:', options: ['Bless you!', 'Congratulations!', 'Never mind.', "You're welcome."], answer: 0 },
  },
  {
    title: 'Propozycja, prośba, pozwolenie',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Zwroty: propozycja – Let's, How about, Why don't we; prośba – Could you; pozwolenie – May I">
      <rect x="10" y="6" width="400" height="62" rx="12" class="f4 s4"/>
      <rect x="10" y="74" width="400" height="62" rx="12" class="f1 s1"/>
      <rect x="10" y="142" width="400" height="58" rx="12" class="f3 s3"/>
      <text x="22" y="30" class="tx-b t4">💡 Propozycja</text>
      <text x="22" y="56" class="tx">Let's… · How about going…? · Why don't we…?</text>
      <text x="22" y="98" class="tx-b t1">🙏 Prośba</text>
      <text x="22" y="124" class="tx">Could you help me, please? · Can you…?</text>
      <text x="22" y="166" class="tx-b t3">✋ Pozwolenie</text>
      <text x="22" y="190" class="tx">Can I / May I open the window?</text>
    </svg>`,
    text: `<ul><li><b>Propozycja</b>: <i>Let's go to the cinema! How about going to the cinema? Why don't we go to the cinema?</i></li>
      <li><b>Prośba</b>: <i>Could you help me, please?</i> (bardzo grzecznie) albo <i>Can you help me?</i></li>
      <li><b>Pozwolenie</b>: <i>Can I…? / May I…?</i> (may – najgrzeczniej).</li></ul>`,
    remember: '<b>How about</b> + <b>-ing</b>: <i>How about going…?</i> · <b>Let\'s</b> / <b>Why don\'t we</b> + zwykły czasownik: <i>Let\'s go</i>.',
    hook: '<b>How about</b> kończy się przyimkiem <i>about</i> – a po przyimku zawsze <b>-ing</b> 🧲.',
    check: { q: 'How about ___ to the park?', options: ['going', 'go', 'to go', 'went'], answer: 0, explain: 'How about + forma -ing.' },
  },
  {
    title: 'Zakupy, droga, poczęstunek',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Zwroty: pytanie o cenę, pytanie o drogę, propozycja poczęstunku i odpowiedź">
      <rect x="10" y="6" width="400" height="62" rx="12" class="f2"/>
      <rect x="10" y="74" width="400" height="62" rx="12" class="f1"/>
      <rect x="10" y="142" width="400" height="62" rx="12" class="f3"/>
      <text x="22" y="28" class="tx-s">🛒 cena</text>
      <text x="22" y="54" class="tx">How much is it? · How much does it cost?</text>
      <text x="22" y="96" class="tx-s">🗺️ droga</text>
      <text x="22" y="122" class="tx">Excuse me, how do I get to the station?</text>
      <text x="22" y="164" class="tx-s">☕ poczęstunek</text>
      <text x="22" y="190" class="tx">Would you like some tea? → Yes, please.</text>
    </svg>`,
    text: `<p>Pytając o cenę, używasz <b>How much</b> (pieniądze są niepoliczalne). Pytając o drogę, zacznij grzecznie od <b>Excuse me</b>.</p>
      <p>Na propozycję <i>Would you like…?</i> grzecznie odpowiadasz <b>Yes, please.</b> albo <b>No, thank you.</b></p>`,
    hook: '<b>Excuse me</b> = „przepraszam, że przeszkadzam” (zanim zapytasz). <b>Sorry</b> = „przepraszam, że coś zrobiłem”.',
    check: { q: '„Would you like some juice?” – Grzeczna odpowiedź to:', options: ['Yes, please.', 'Here you are.', "You're welcome.", 'Me too.'], answer: 0 },
  },
  {
    title: 'Trzy podobne pytania z „like”',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Trzy pytania: What is she like – charakter, What does she look like – wygląd, What does she like – upodobania">
      <rect x="10" y="6" width="400" height="64" rx="12" class="f3 s3"/>
      <rect x="10" y="76" width="400" height="64" rx="12" class="f1 s1"/>
      <rect x="10" y="146" width="400" height="64" rx="12" class="f5 s5"/>
      <text x="22" y="32" class="tx-b">What is she like?</text>
      <text x="400" y="32" class="tx-s t3" text-anchor="end">😊 charakter</text>
      <text x="22" y="58" class="tx">→ She's friendly and funny.</text>
      <text x="22" y="102" class="tx-b">What does she look like?</text>
      <text x="400" y="102" class="tx-s t1" text-anchor="end">👀 wygląd</text>
      <text x="22" y="128" class="tx">→ She's tall with dark hair.</text>
      <text x="22" y="172" class="tx-b">What does she like?</text>
      <text x="400" y="172" class="tx-s t5" text-anchor="end">❤️ co lubi</text>
      <text x="22" y="198" class="tx">→ She likes music.</text>
    </svg>`,
    text: `<p>Te trzy pytania różnią się jednym-dwoma słowami, a pytają o zupełnie co innego. To ulubiona pułapka egzaminu!</p>
      <ul><li><b>What is she like?</b> – jaka ona jest? (charakter)</li>
      <li><b>What does she look like?</b> – jak wygląda? (<b>look</b> = patrzeć → wygląd)</li>
      <li><b>What does she like?</b> – co lubi?</li></ul>`,
    hook: 'Widzisz <b>look</b> 👀 → odpowiadasz o tym, co widać oczami.',
    check: { q: '„What does your brother look like?” – Która odpowiedź pasuje?', options: ["He's tall with short hair.", "He's very funny.", 'He likes football.', "He's fine, thanks."], answer: 0, explain: '„Look like” – pytanie o wygląd.' },
  },
];

/* ===================== SŁOWNICTWO ===================== */
window.LESSONS['angielski/slownictwo'] = [
  {
    title: '13 tematów egzaminu',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzynaście kafelków z tematami słownictwa z podstawy programowej">
      <rect x="4" y="4" width="78" height="64" rx="10" class="f1"/><text x="43" y="34" font-size="24" text-anchor="middle">🧑</text><text x="43" y="58" class="tx-s" text-anchor="middle">People</text>
      <rect x="87" y="4" width="78" height="64" rx="10" class="f2"/><text x="126" y="34" font-size="24" text-anchor="middle">🏠</text><text x="126" y="58" class="tx-s" text-anchor="middle">Home</text>
      <rect x="170" y="4" width="78" height="64" rx="10" class="f3"/><text x="209" y="34" font-size="24" text-anchor="middle">🏫</text><text x="209" y="58" class="tx-s" text-anchor="middle">School</text>
      <rect x="253" y="4" width="78" height="64" rx="10" class="f4"/><text x="292" y="34" font-size="24" text-anchor="middle">💼</text><text x="292" y="58" class="tx-s" text-anchor="middle">Work</text>
      <rect x="336" y="4" width="78" height="64" rx="10" class="f5"/><text x="375" y="34" font-size="24" text-anchor="middle">👪</text><text x="375" y="58" class="tx-s" text-anchor="middle">Family</text>
      <rect x="4" y="73" width="78" height="64" rx="10" class="f3"/><text x="43" y="103" font-size="24" text-anchor="middle">🍎</text><text x="43" y="127" class="tx-s" text-anchor="middle">Food</text>
      <rect x="87" y="73" width="78" height="64" rx="10" class="f4"/><text x="126" y="103" font-size="24" text-anchor="middle">🛍️</text><text x="126" y="127" class="tx-s" text-anchor="middle">Shopping</text>
      <rect x="170" y="73" width="78" height="64" rx="10" class="f5"/><text x="209" y="103" font-size="24" text-anchor="middle">✈️</text><text x="209" y="127" class="tx-s" text-anchor="middle">Travel</text>
      <rect x="253" y="73" width="78" height="64" rx="10" class="f1"/><text x="292" y="103" font-size="24" text-anchor="middle">🎭</text><text x="292" y="127" class="tx-s" text-anchor="middle">Culture</text>
      <rect x="336" y="73" width="78" height="64" rx="10" class="f2"/><text x="375" y="103" font-size="24" text-anchor="middle">⚽</text><text x="375" y="127" class="tx-s" text-anchor="middle">Sport</text>
      <rect x="87" y="142" width="78" height="64" rx="10" class="f2"/><text x="126" y="172" font-size="24" text-anchor="middle">🩺</text><text x="126" y="196" class="tx-s" text-anchor="middle">Health</text>
      <rect x="170" y="142" width="78" height="64" rx="10" class="f1"/><text x="209" y="172" font-size="24" text-anchor="middle">💻</text><text x="209" y="196" class="tx-s" text-anchor="middle">Technology</text>
      <rect x="253" y="142" width="78" height="64" rx="10" class="f3"/><text x="292" y="172" font-size="24" text-anchor="middle">🌳</text><text x="292" y="196" class="tx-s" text-anchor="middle">Nature</text>
    </svg>`,
    text: `<p>Podstawa programowa wymienia <b>13 tematów</b>: człowiek, miejsce zamieszkania, edukacja, praca, życie prywatne, żywienie, zakupy i usługi, podróżowanie i turystyka, kultura, sport, zdrowie, nauka i technika, świat przyrody. Teksty i nagrania na egzaminie dotyczą właśnie ich.</p>
      <p>Najlepiej uczyć się słówek <b>w grupach</b> – jak na mapach myśli w kolejnych krokach.</p>`,
    hook: 'Mózg lubi „szuflady” 🗄️. Słowo wrzucone do tematycznej szuflady łatwiej potem wyciągnąć.',
  },
  {
    title: 'Mapa myśli: zakupy',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Mapa myśli Shopping: receipt, refund, discount, size, shop assistant">
      <line x1="210" y1="108" x2="80" y2="28" class="ln-thin"/><line x1="210" y1="108" x2="340" y2="28" class="ln-thin"/>
      <line x1="155" y1="108" x2="265" y2="108" class="ln-thin"/>
      <line x1="210" y1="108" x2="210" y2="180" class="ln-thin"/>
      <circle cx="210" cy="106" r="48" class="f4 s4 sw"/>
      <text x="210" y="100" font-size="24" text-anchor="middle">🛍️</text>
      <text x="210" y="128" class="tx t4" text-anchor="middle">Shopping</text>
      <rect x="5" y="5" width="150" height="48" rx="10" class="f1 s1"/><text x="80" y="27" class="tx-b" text-anchor="middle">receipt</text><text x="80" y="46" class="tx-s" text-anchor="middle">paragon</text>
      <rect x="265" y="5" width="150" height="48" rx="10" class="f1 s1"/><text x="340" y="27" class="tx-b" text-anchor="middle">refund</text><text x="340" y="46" class="tx-s" text-anchor="middle">zwrot pieniędzy</text>
      <rect x="5" y="84" width="150" height="48" rx="10" class="f3 s3"/><text x="80" y="106" class="tx-b" text-anchor="middle">discount</text><text x="80" y="125" class="tx-s" text-anchor="middle">zniżka, rabat</text>
      <rect x="265" y="84" width="150" height="48" rx="10" class="f3 s3"/><text x="340" y="106" class="tx-b" text-anchor="middle">size</text><text x="340" y="125" class="tx-s" text-anchor="middle">rozmiar</text>
      <rect x="125" y="160" width="170" height="48" rx="10" class="f5 s5"/><text x="210" y="182" class="tx-b" text-anchor="middle">shop assistant</text><text x="210" y="201" class="tx-s" text-anchor="middle">sprzedawca</text>
    </svg>`,
    text: `<p>Tak wygląda mapa myśli: temat w środku, słowa dookoła. Zrób podobne dla każdego tematu – sam rysunek pomaga zapamiętać.</p>
      <p><i>The shop assistant gave me a receipt. The shoes were too small, so I got a refund.</i></p>`,
    remember: '<b>receipt</b> = paragon, a <b>recipe</b> = przepis kulinarny. Częsta pułapka!',
    hook: '<b>recipe</b> brzmi jak „risipi” – to przepis na <b>pizzę</b> 🍕. <b>receipt</b> (p jest nieme!) dostajesz przy kasie 🧾.',
    check: { q: 'The shoes were too small, so I took them back and got a ___ .', options: ['refund', 'receipt', 'recipe', 'size'], answer: 0, explain: 'Refund – zwrot pieniędzy.' },
  },
  {
    title: 'Mapa myśli: podróże',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Mapa myśli Travel: platform, return ticket, luggage, sightseeing">
      <line x1="210" y1="100" x2="80" y2="35" class="ln-thin"/><line x1="210" y1="100" x2="340" y2="35" class="ln-thin"/>
      <line x1="210" y1="100" x2="80" y2="165" class="ln-thin"/><line x1="210" y1="100" x2="340" y2="165" class="ln-thin"/>
      <circle cx="210" cy="100" r="44" class="f5 s5 sw"/>
      <text x="210" y="94" font-size="24" text-anchor="middle">✈️</text>
      <text x="210" y="120" class="tx-b t5" text-anchor="middle">Travel</text>
      <rect x="5" y="10" width="150" height="50" rx="10" class="f1 s1"/><text x="80" y="33" class="tx-b" text-anchor="middle">platform</text><text x="80" y="52" class="tx-s" text-anchor="middle">peron 🚉</text>
      <rect x="265" y="10" width="150" height="50" rx="10" class="f2 s2"/><text x="340" y="33" class="tx-b" text-anchor="middle">return ticket</text><text x="340" y="52" class="tx-s" text-anchor="middle">bilet powrotny 🎫</text>
      <rect x="5" y="140" width="150" height="50" rx="10" class="f3 s3"/><text x="80" y="163" class="tx-b" text-anchor="middle">luggage</text><text x="80" y="182" class="tx-s" text-anchor="middle">bagaż 🧳</text>
      <rect x="265" y="140" width="150" height="50" rx="10" class="f4 s4"/><text x="340" y="163" class="tx-b" text-anchor="middle">sightseeing</text><text x="340" y="182" class="tx-s" text-anchor="middle">zwiedzanie 📸</text>
    </svg>`,
    text: `<p><i>I'd like a return ticket to Kraków, please. I'm coming back tomorrow.</i><br><i>The train leaves from platform 3.</i><br><i>We went sightseeing in Rome.</i></p>`,
    hook: '<b>return</b> = wracać ↩️, więc <b>return ticket</b> to bilet „tam i z powrotem”.',
    check: { q: 'Your bags and suitcases are your ___ .', options: ['luggage', 'receipt', 'platform', 'charger'], answer: 0, explain: 'Luggage – bagaż.' },
  },
  {
    title: 'Zdrowie i technika',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Dwie listy słówek: zdrowie i nauka oraz technika">
      <rect x="10" y="8" width="195" height="200" rx="14" class="f2 s2 sw"/>
      <rect x="215" y="8" width="195" height="200" rx="14" class="f1 s1 sw"/>
      <text x="107" y="34" class="tx-b t2" text-anchor="middle">🩺 Health</text>
      <text x="312" y="34" class="tx-b t1" text-anchor="middle">💻 Technology</text>
      <text x="25" y="62" class="tx">headache</text><text x="25" y="79" class="tx-s">ból głowy</text>
      <text x="230" y="62" class="tx">device</text><text x="230" y="79" class="tx-s">urządzenie</text>
      <text x="25" y="102" class="tx">sore throat</text><text x="25" y="119" class="tx-s">ból gardła</text>
      <text x="230" y="102" class="tx">download</text><text x="230" y="119" class="tx-s">pobierać (plik)</text>
      <text x="25" y="142" class="tx">prescription</text><text x="25" y="159" class="tx-s">recepta</text>
      <text x="230" y="142" class="tx">charger</text><text x="230" y="159" class="tx-s">ładowarka</text>
      <text x="25" y="182" class="tx">take medicine</text><text x="25" y="199" class="tx-s">brać lekarstwo</text>
      <text x="230" y="182" class="tx">invention</text><text x="230" y="199" class="tx-s">wynalazek</text>
    </svg>`,
    text: `<p><i>I've got a sore throat and a headache. The doctor gave me a prescription.</i><br><i>My phone is dead. Can I borrow your charger?</i></p>`,
    hook: '<b>head</b> (głowa) + <b>ache</b> (ból) = <b>headache</b>. A <b>charge</b> = ładować, więc <b>charger</b> to „ładowacz” 🔌.',
    check: { q: "I've got a ___ . My head really hurts.", options: ['headache', 'sore throat', 'prescription', 'charger'], answer: 0 },
  },
  {
    title: 'Kolokacje: do, make, take',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Trzy pojemniki: do homework, make a mistake, take a photo, take medicine">
      <path d="M15,40 L25,190 L125,190 L135,40" class="f3 s3 sw"/>
      <path d="M150,40 L160,190 L260,190 L270,40" class="f2 s2 sw"/>
      <path d="M285,40 L295,190 L395,190 L405,40" class="f1 s1 sw"/>
      <text x="75" y="28" class="tx-b t3" text-anchor="middle">DO</text>
      <text x="210" y="28" class="tx-b t2" text-anchor="middle">MAKE</text>
      <text x="345" y="28" class="tx-b t1" text-anchor="middle">TAKE</text>
      <text x="75" y="90" class="tx" text-anchor="middle">homework</text>
      <text x="75" y="120" font-size="26" text-anchor="middle">📚</text>
      <text x="210" y="90" class="tx" text-anchor="middle">a mistake</text>
      <text x="210" y="120" font-size="26" text-anchor="middle">❌</text>
      <text x="345" y="90" class="tx" text-anchor="middle">a photo 📸</text>
      <text x="345" y="140" class="tx" text-anchor="middle">medicine 💊</text>
    </svg>`,
    text: `<p>Niektóre słowa „lubią się” i występują razem – to <b>kolokacje</b>. Po polsku „robisz” i zadanie, i błąd, i zdjęcie, ale po angielsku: <b>do</b> homework, <b>make</b> a mistake, <b>take</b> a photo.</p>
      <p>Inne przykłady z tematów: <i>score a goal</i> (sport), <i>take medicine</i> (zdrowie).</p>`,
    remember: 'Ucz się <b>całych wyrażeń</b>, nie pojedynczych słów: <i>do homework, make a mistake, take a photo</i>.',
    hook: 'Zdjęcie się <b>bierze</b> (take) – „łapiesz” chwilę aparatem 📸.',
    check: { q: 'I always ___ my homework after dinner.', options: ['do', 'make', 'take', 'play'], answer: 0, explain: 'Kolokacja: do homework.' },
  },
];

/* ===================== E-MAIL ===================== */
window.LESSONS['angielski/email'] = [
  {
    title: 'Zadanie pisemne w pigułce',
    svg: `<svg viewBox="0 0 420 195" role="img" aria-label="Wymagania: e-mail lub blog, 50 do 120 wyrazów, trzy podpunkty oraz punktacja 10 punktów">
      <rect x="5" y="5" width="132" height="80" rx="12" class="f1 s1"/>
      <rect x="144" y="5" width="132" height="80" rx="12" class="f4 s4"/>
      <rect x="283" y="5" width="132" height="80" rx="12" class="f5 s5"/>
      <text x="71" y="36" font-size="22" text-anchor="middle">✉️</text>
      <text x="210" y="36" font-size="22" text-anchor="middle">📏</text>
      <text x="349" y="36" font-size="22" text-anchor="middle">🎯</text>
      <text x="71" y="62" class="tx-b" text-anchor="middle">e-mail / blog</text>
      <text x="210" y="62" class="tx-b" text-anchor="middle">50–120</text>
      <text x="349" y="62" class="tx-b" text-anchor="middle">3 podpunkty</text>
      <text x="71" y="79" class="tx-s" text-anchor="middle">forma</text>
      <text x="210" y="79" class="tx-s" text-anchor="middle">wyrazów</text>
      <text x="349" y="79" class="tx-s" text-anchor="middle">w poleceniu</text>
      <text x="10" y="112" class="tx-b">Ocena: 10 pkt</text>
      <rect x="10" y="122" width="160" height="40" class="f3 s3"/>
      <rect x="170" y="122" width="80" height="40" class="f1 s1"/>
      <rect x="250" y="122" width="80" height="40" class="f4 s4"/>
      <rect x="330" y="122" width="80" height="40" class="f5 s5"/>
      <text x="90" y="148" class="tx-b" text-anchor="middle">4</text>
      <text x="210" y="148" class="tx-b" text-anchor="middle">2</text>
      <text x="290" y="148" class="tx-b" text-anchor="middle">2</text>
      <text x="370" y="148" class="tx-b" text-anchor="middle">2</text>
      <text x="90" y="182" class="tx-s" text-anchor="middle">treść</text>
      <text x="210" y="182" class="tx-s" text-anchor="middle">spójność</text>
      <text x="290" y="182" class="tx-s" text-anchor="middle">zakres</text>
      <text x="370" y="182" class="tx-s" text-anchor="middle">poprawność</text>
    </svg>`,
    text: `<p>Na końcu arkusza piszesz <b>e-mail</b> albo <b>wpis na blogu</b> (50–120 wyrazów). Polecenie jest po polsku i ma <b>trzy podpunkty</b>, a początek tekstu jest już podany.</p>
      <p>Najwięcej punktów (4 z 10) daje <b>treść</b>: czy odniosłeś się do każdego podpunktu i czy go <b>rozwinąłeś</b>.</p>`,
    hook: '<b>3 punkty = 3 akapity</b>. Odhaczaj je jak listę zakupów ✅✅✅.',
    check: { q: 'Ile wyrazów powinna mieć wypowiedź pisemna?', options: ['20–40', '50–120', '150–200', 'co najmniej 200'], answer: 1 },
  },
  {
    title: 'Koperta – z czego składa się e-mail',
    svg: `<svg viewBox="0 0 420 265" role="img" aria-label="Schemat e-maila jako koperty: powitanie, wstęp, treść z trzema punktami, zakończenie, podpis">
      <rect x="10" y="8" width="400" height="250" rx="12" class="bg s1 sw"/>
      <polyline points="10,10 210,46 410,10" class="ln-thin"/>
      <text x="30" y="72" class="tx-b t1">Hi Tom,</text>
      <text x="400" y="72" class="tx-s" text-anchor="end">1 powitanie</text>
      <text x="30" y="98" class="tx">Thanks for your e-mail.</text>
      <text x="400" y="98" class="tx-s" text-anchor="end">2 wstęp</text>
      <rect x="22" y="108" width="380" height="76" rx="8" class="f4"/>
      <text x="34" y="128" class="tx">✔ punkt 1 + szczegół</text>
      <text x="34" y="151" class="tx">✔ punkt 2 + powód</text>
      <text x="34" y="174" class="tx">✔ punkt 3 + przykład</text>
      <text x="394" y="128" class="tx-s" text-anchor="end">3 treść</text>
      <text x="30" y="208" class="tx">Write back soon!</text>
      <text x="400" y="208" class="tx-s" text-anchor="end">4 zakończenie</text>
      <text x="30" y="232" class="tx-b t1">Love,</text>
      <text x="30" y="252" class="tx">XYZ</text>
      <text x="400" y="244" class="tx-s" text-anchor="end">5 podpis</text>
    </svg>`,
    text: `<ol><li><b>Powitanie</b>: <i>Hi Tom, / Hello Anna, / Dear Mark,</i></li>
      <li><b>Wstęp</b>: <i>Thanks for your e-mail. / I'm writing to tell you about…</i></li>
      <li><b>Treść</b>: po kolei wszystkie trzy punkty polecenia.</li>
      <li><b>Zakończenie</b>: <i>Write back soon! / I can't wait to hear from you. / See you soon!</i></li>
      <li><b>Podpis</b>: <i>Love, / Best wishes, / Bye for now,</i> + imię z polecenia (zwykle XYZ).</li></ol>`,
    remember: 'Do kolegi piszesz swobodnie: <i>Hi…</i> na początku, <i>Love, / Best wishes,</i> na końcu. Bez <s>Dear Sir or Madam</s>.',
    check: { q: 'Which sentence is a good ending for an e-mail to a friend?', options: ['Write back soon!', 'Thanks for your e-mail.', 'Dear Sir or Madam,', 'Last weekend I went…'], answer: 0 },
  },
  {
    title: 'Nie tylko wspomnij – rozwiń!',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy poziomy: samo wspomnienie, dodany szczegół, dodany powód – punkt rozwinięty">
      <text x="15" y="18" class="tx-s">tylko wspomniałeś 😐</text>
      <rect x="10" y="24" width="400" height="38" rx="10" class="f2 s2"/>
      <text x="22" y="49" class="tx">I went to a concert.</text>
      <text x="15" y="84" class="tx-s">+ szczegół</text>
      <rect x="10" y="90" width="400" height="38" rx="10" class="f4 s4"/>
      <text x="22" y="115" class="tx">It was in Warsaw on Saturday.</text>
      <text x="15" y="150" class="tx-s">+ powód → punkt rozwinięty 😎</text>
      <rect x="10" y="156" width="400" height="38" rx="10" class="f3 s3 sw"/>
      <text x="22" y="181" class="tx">I loved it because the music was great.</text>
    </svg>`,
    text: `<p>Za samo wspomnienie punktu dostaniesz mniej. <b>Rozwinięcie</b> to np. dwa odniesienia do punktu albo jedno rozbudowane: dodaj <b>szczegół</b> (gdzie? kiedy? z kim?), <b>powód</b> (<i>because…</i>) albo <b>przykład</b>.</p>
      <p>Same słówka <i>very</i> czy <i>much</i> to jeszcze nie rozwinięcie.</p>`,
    remember: 'Każdy podpunkt: <b>1 zdanie odpowiedzi + 1–2 zdania rozwinięcia</b>.',
    hook: 'Wyobraź sobie, że kolega po każdym twoim zdaniu pyta: <b>„I co? Dlaczego?”</b> – i odpowiedz mu od razu.',
    check: { q: 'Polecenie: „Opisz, jak spędziłeś weekend”. Który fragment najlepiej rozwija ten punkt?', options: ['I had a weekend.', 'Last weekend I went to the cinema with my cousin. We saw a very funny comedy.', 'Weekend very good.', 'I like weekends very much.'], answer: 1, explain: 'Jest konkretna czynność, z kim i szczegół o filmie.' },
  },
  {
    title: 'Skrzynka z gotowymi zwrotami',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Lista przydatnych zwrotów: wydarzenie, opinia, propozycja, rada, przeprosiny">
      <rect x="10" y="4" width="400" height="40" rx="8" class="f1"/>
      <rect x="10" y="47" width="400" height="40" rx="8" class="f3"/>
      <rect x="10" y="90" width="400" height="40" rx="8" class="f4"/>
      <rect x="10" y="133" width="400" height="40" rx="8" class="f5"/>
      <rect x="10" y="176" width="400" height="40" rx="8" class="f2"/>
      <text x="22" y="17" class="tx-s">📖 wydarzenie</text><text x="22" y="38" class="tx">Last weekend I went to… It was…</text>
      <text x="22" y="60" class="tx-s">💭 opinia</text><text x="22" y="81" class="tx">In my opinion… · I think… · I really liked…</text>
      <text x="22" y="103" class="tx-s">💡 propozycja</text><text x="22" y="124" class="tx">Why don't we…? · How about…? · Let's…</text>
      <text x="22" y="146" class="tx-s">🩹 rada</text><text x="22" y="167" class="tx">You should… · Why don't you…?</text>
      <text x="22" y="189" class="tx-s">😔 przeprosiny</text><text x="22" y="210" class="tx">I'm sorry, but I can't… because…</text>
    </svg>`,
    text: `<p>Te zwroty pasują do prawie każdego polecenia. Naucz się ich na pamięć – wtedy na egzaminie skupisz się na treści, a nie na szukaniu słów.</p>
      <p>Uważaj na czasy: <i>last weekend, yesterday</i> → Past Simple; plany → <i>going to</i>; propozycje → <i>Why don't we…?</i></p>`,
    hook: 'Zrób z tych zwrotów fiszki i używaj ich w każdym ćwiczeniowym e-mailu – po 3–4 tekstach wejdą same.',
    check: { q: 'You want to apologise. Which sentence fits?', options: ["I'm sorry, but I can't come because I'm ill.", "Why don't we meet?", 'In my opinion it was great.', 'Write back soon!'], answer: 0 },
  },
  {
    title: 'Przykład i lista kontrolna',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Lista kontrolna przed oddaniem pracy">
      <rect x="10" y="6" width="400" height="188" rx="14" class="f3 s3 sw"/>
      <text x="210" y="34" class="tx-b t3" text-anchor="middle">📋 Zanim oddasz pracę</text>
      <text x="28" y="66" class="tx">☑ Wszystkie 3 punkty – i każdy rozwinięty?</text>
      <text x="28" y="96" class="tx">☑ 50–120 wyrazów?</text>
      <text x="28" y="126" class="tx">☑ Powitanie, zakończenie, podpis XYZ?</text>
      <text x="28" y="156" class="tx">☑ Dobre czasy (last weekend → went)?</text>
      <text x="28" y="182" class="tx">☑ Logiczna kolejność: and, but, because, so?</text>
    </svg>`,
    text: `<p><b>Polecenie:</b> Opisz wycieczkę w góry, napisz, co ci się podobało, i zaproponuj koledze wspólny wyjazd.</p>
      <p><i>Hi Tom,<br>Thanks for your e-mail. Last weekend I went to the mountains with my family. We stayed in a small hotel near a lake. I really liked the views because they were amazing! We also climbed a high mountain and took a lot of photos. Why don't we go there together in the summer? I'm sure you will love it.<br>Write back soon!<br>Love,<br>XYZ</i></p>`,
    remember: 'Sprawdź na końcu: czy odniosłeś się do <b>każdego</b> punktu i czy użyłeś poprawnych czasów.',
    hook: 'Przykład wyżej: <b>wycieczka</b> (went, stayed) + <b>co się podobało</b> (liked… because…) + <b>propozycja</b> (Why don\'t we…?) – 3 punkty, każdy rozwinięty.',
    check: { q: 'Last weekend I ___ to the mountains.', options: ['go', 'have gone', 'went', 'am going'], answer: 2, explain: '„Last weekend” → Past Simple.' },
  },
];

window.LESSONS['angielski/rzeczowniki-przedimki'] = [
  {
    title: 'Policzysz czy nie policzysz?',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Rzeczowniki policzalne: a book, two books; niepoliczalne: water, money, advice z miarami a bottle of water">
      <rect x="6" y="6" width="198" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="216" y="6" width="198" height="150" rx="12" class="f1 s1 sw"/>
      <text x="105" y="34" class="tx-b" text-anchor="middle">policzalne</text>
      <text x="315" y="34" class="tx-b" text-anchor="middle">niepoliczalne</text>
      <text x="105" y="66" class="tx" text-anchor="middle">📘 a book</text>
      <text x="105" y="94" class="tx" text-anchor="middle">📘📘 two books</text>
      <text x="105" y="122" class="tx" text-anchor="middle">🍎 an apple</text>
      <text x="105" y="146" class="tx-s" text-anchor="middle">many, a few</text>
      <text x="315" y="66" class="tx" text-anchor="middle">💧 water, money</text>
      <text x="315" y="94" class="tx" text-anchor="middle">advice, information</text>
      <text x="315" y="122" class="tx" text-anchor="middle">bread, furniture</text>
      <text x="315" y="146" class="tx-s" text-anchor="middle">much, a little, some</text>
      <text x="210" y="186" class="tx" text-anchor="middle">a bottle of water · a piece of advice</text>
    </svg>`,
    text: `<p>Rzeczowniki <b>policzalne</b> mają liczbę pojedynczą i mnogą: <i>a book – two books</i>. <b>Niepoliczalne</b> to substancje i pojęcia: <i>water, money, information, advice, furniture, homework</i> – nie stawiamy przed nimi <i>a/an</i> i nie dodajemy <i>-s</i>.</p>
      <p>Chcesz policzyć coś niepoliczalnego? Użyj miary: <i>a bottle of water, a piece of advice, a loaf of bread</i>.</p>`,
    remember: 'Niepoliczalne: bez a/an, bez -s, z much / a little / some. Pułapki: advice, information, furniture, homework.',
    hook: 'Po polsku „rady”, „informacje”, „meble” liczysz – po angielsku <b>nie</b>: some advice, some information, some furniture.',
    check: { q: 'Can you give me some ___ ? I don\'t know what to do.', options: ['advices', 'an advice', 'advice', 'a advice'], answer: 2, explain: '„Advice” jest niepoliczalne.' },
  },
  {
    title: 'Liczba mnoga – reguły i wyjątki',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Reguły liczby mnogiej: -s, -es, -ies, -ves i formy nieregularne">
      <rect x="6" y="6" width="200" height="50" rx="10" class="f1 s1"/><text x="18" y="36" class="tx">book → book<tspan class="tx-b t1">s</tspan></text>
      <rect x="214" y="6" width="200" height="50" rx="10" class="f3 s3"/><text x="226" y="36" class="tx">box → box<tspan class="tx-b t3">es</tspan></text>
      <rect x="6" y="64" width="200" height="50" rx="10" class="f4 s4"/><text x="18" y="94" class="tx">city → cit<tspan class="tx-b t4">ies</tspan></text>
      <rect x="214" y="64" width="200" height="50" rx="10" class="f5 s5"/><text x="226" y="94" class="tx">knife → kni<tspan class="tx-b t5">ves</tspan></text>
      <rect x="6" y="122" width="408" height="104" rx="10" class="f2 s2"/>
      <text x="210" y="148" class="tx-b" text-anchor="middle">nieregularne – naucz się na pamięć</text>
      <text x="210" y="176" class="tx" text-anchor="middle">man → men · woman → women · child → children</text>
      <text x="210" y="202" class="tx" text-anchor="middle">person → people · foot → feet · tooth → teeth</text>
      <text x="210" y="220" class="tx-s" text-anchor="middle">mouse → mice · sheep → sheep · fish → fish</text>
    </svg>`,
    text: `<p>Zwykle dodajesz <b>-s</b>. Po <i>-s, -x, -ch, -sh</i> dodajesz <b>-es</b> (łatwiej wymówić: <i>buses, watches</i>). Spółgłoska + y → <b>-ies</b> (<i>city – cities</i>), ale samogłoska + y zostaje: <i>boy – boys</i>. Wiele wyrazów na -f/-fe ma <b>-ves</b>.</p>
      <p>Najczęstsze formy nieregularne pojawiają się w tekstach egzaminacyjnych bardzo często – zwłaszcza <i>children, people, women, men</i>.</p>`,
    remember: 'child – children, person – people, man – men, woman – women, foot – feet, tooth – teeth, mouse – mice.',
    hook: 'Woman → wom<b>e</b>n: zmienia się tylko jedna litera, ale wymowa pierwszej sylaby też: [wɪmɪn].',
    check: { q: 'Liczba mnoga od „tooth” to…', options: ['tooths', 'teeths', 'teeth', 'toothes'], answer: 2, explain: 'tooth – teeth (jak foot – feet).' },
  },
  {
    title: 'Czyje to? \'s, s\' i of',
    svg: `<svg viewBox="0 0 420 196" role="img" aria-label="Forma dzierżawcza: Tom's bike, my parents' car, children's toys, the end of the film">
      <text x="10" y="34" class="tx-b">Tom<tspan class="t2">'s</tspan> bike</text><text x="410" y="34" class="tx-s" text-anchor="end">jedna osoba → 's</text>
      <text x="10" y="80" class="tx-b">my parent<tspan class="t2">s'</tspan> car</text><text x="410" y="80" class="tx-s" text-anchor="end">l. mnoga na -s → s'</text>
      <text x="10" y="126" class="tx-b">children<tspan class="t2">'s</tspan> toys</text><text x="410" y="126" class="tx-s" text-anchor="end">l. mnoga bez -s → 's</text>
      <text x="10" y="172" class="tx-b">the end <tspan class="t2">of</tspan> the film</text><text x="410" y="172" class="tx-s" text-anchor="end">rzeczy, części → of</text>
    </svg>`,
    text: `<p>Gdy coś należy do osoby lub zwierzęcia, dodajesz <b>'s</b>: <i>my sister's room</i>. Gdy właścicieli jest wielu i wyraz kończy się na -s, wystarczy apostrof: <i>my parents' car</i>. Nieregularna liczba mnoga dostaje 's: <i>children's toys</i>.</p>
      <p>Przy rzeczach i częściach czegoś zwykle używamy <b>of</b>: <i>the colour of her eyes, the end of the film</i>.</p>`,
    remember: 'sister\'s (jednej siostry) · parents\' (rodziców) · children\'s (dzieci) · the end of the film.',
  },
  {
    title: 'a / an, the czy nic?',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Schemat: a lub an przy pierwszej wzmiance, the przy rzeczy znanej lub jedynej, brak przedimka przy posiłkach, sportach, krajach">
      <rect x="6" y="6" width="130" height="150" rx="12" class="f1 s1 sw"/>
      <rect x="145" y="6" width="130" height="150" rx="12" class="f3 s3 sw"/>
      <rect x="284" y="6" width="130" height="150" rx="12" class="f4 s4 sw"/>
      <text x="71" y="36" class="tx-b" text-anchor="middle">a / an</text>
      <text x="210" y="36" class="tx-b" text-anchor="middle">the</text>
      <text x="349" y="36" class="tx-b" text-anchor="middle">—</text>
      <text x="71" y="64" class="tx-s" text-anchor="middle">pierwszy raz</text><text x="71" y="86" class="tx-s" text-anchor="middle">jeden z wielu</text><text x="71" y="108" class="tx-s" text-anchor="middle">zawód</text><text x="71" y="136" class="tx" text-anchor="middle">a dog</text>
      <text x="210" y="64" class="tx-s" text-anchor="middle">już wiadomo który</text><text x="210" y="86" class="tx-s" text-anchor="middle">jedyny: the sun</text><text x="210" y="108" class="tx-s" text-anchor="middle">the best, the first</text><text x="210" y="136" class="tx" text-anchor="middle">the dog</text>
      <text x="349" y="64" class="tx-s" text-anchor="middle">posiłki, sporty</text><text x="349" y="86" class="tx-s" text-anchor="middle">języki, kraje</text><text x="349" y="108" class="tx-s" text-anchor="middle">ogólnie: I like cats</text><text x="349" y="136" class="tx" text-anchor="middle">have dinner</text>
      <text x="210" y="190" class="tx" text-anchor="middle">I saw <tspan class="tx-b t1">a</tspan> dog. <tspan class="tx-b t3">The</tspan> dog was very big.</text>
      <text x="210" y="222" class="tx-s" text-anchor="middle">a university [ju:] · an hour (h nieme) – liczy się wymowa</text>
    </svg>`,
    text: `<p><b>a/an</b> – gdy mówisz o czymś pierwszy raz albo o jednym z wielu („jakiś pies”), a także przed zawodem: <i>She is a nurse.</i> <b>the</b> – gdy wiadomo, o który chodzi: wspomniany wcześniej, jedyny (<i>the sun</i>), w stopniu najwyższym (<i>the best</i>).</p>
      <p><b>Bez przedimka</b>: posiłki (<i>have breakfast</i>), sporty (<i>play football</i>), języki, większość krajów i miast (<i>Poland, London</i>, ale <i>the USA, the UK</i>).</p>`,
    remember: 'a/an – jakiś; the – ten konkretny; nic – posiłki, sporty, języki, większość krajów. an przed samogłoską w wymowie.',
    hook: '<b>a</b> = „jakiś”, <b>the</b> = „ten” – jeśli po polsku pasuje „ten, o którym mówimy”, wybierz the.',
    check: { q: 'I live in ___ Poland, but my cousin lives in ___ USA.', options: ['the / —', '— / the', 'the / the', '— / —'], answer: 1, explain: 'Poland bez przedimka, ale the USA.' },
  },
  {
    title: 'Liczebniki i daty',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Tabela liczebników porządkowych: first, second, third, fourth, fifth, ninth, twelfth, twentieth, twenty-fourth">
      <rect x="6" y="6" width="408" height="150" rx="12" class="f1 s1"/>
      <text x="20" y="36" class="tx">1 → <tspan class="tx-b">first</tspan></text><text x="150" y="36" class="tx">2 → <tspan class="tx-b">second</tspan></text><text x="290" y="36" class="tx">3 → <tspan class="tx-b">third</tspan></text>
      <text x="20" y="72" class="tx">4 → fourth</text><text x="150" y="72" class="tx">5 → <tspan class="tx-b t2">fifth</tspan></text><text x="290" y="72" class="tx">9 → <tspan class="tx-b t2">ninth</tspan></text>
      <text x="20" y="108" class="tx">12 → <tspan class="tx-b t2">twelfth</tspan></text><text x="200" y="108" class="tx">20 → twentieth</text>
      <text x="20" y="142" class="tx">24 → twenty-fourth</text><text x="240" y="142" class="tx">40 → <tspan class="tx-b t2">forty</tspan></text>
      <text x="210" y="186" class="tx" text-anchor="middle">on 5th May → „on the fifth of May”</text>
      <text x="210" y="210" class="tx-s" text-anchor="middle">in 2027 · at 7 o'clock · a hundred · a thousand</text>
    </svg>`,
    text: `<p>Liczebniki porządkowe tworzysz zwykle przez <b>-th</b> (<i>fourth, sixth, twentieth</i>). Wyjątki to <b>first, second, third</b> oraz zmiany pisowni: <b>fifth, ninth, twelfth</b>. W liczbach złożonych zmienia się tylko ostatnia część: <i>twenty-first, twenty-fourth</i>.</p>
      <p>Daty: piszesz <i>5th May</i>, mówisz <i>the fifth of May</i>. Uwaga na <i>forty</i> – bez „u” (choć <i>four</i> i <i>fourteen</i> mają „u”).</p>`,
    remember: 'first, second, third, fifth, ninth, twelfth – wyjątki. forty – bez „u”.',
    hook: 'fi<b>ve</b> → fi<b>f</b>th, twel<b>ve</b> → twel<b>f</b>th: „ve” zamienia się w „f”. A nine traci „e”: ninth.',
    check: { q: 'My birthday is on the ___ of June. (24 czerwca)', options: ['twenty-four', 'twenty-fourth', 'twentieth-four', 'twenty-fourteenth'], answer: 1, explain: 'Zmienia się tylko ostatnia część: twenty-fourth.' },
  },
  {
    title: 'Me, him, them · this, those · one, ones',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Zaimki osobowe: I me, he him, she her, we us, they them; this these blisko, that those daleko; one ones">
      <rect x="6" y="6" width="190" height="208" rx="12" class="f3 s3"/>
      <text x="101" y="32" class="tx-b" text-anchor="middle">kto? → kogo?</text>
      <text x="101" y="62" class="tx" text-anchor="middle">I → me</text>
      <text x="101" y="90" class="tx" text-anchor="middle">he → him</text>
      <text x="101" y="118" class="tx" text-anchor="middle">she → her</text>
      <text x="101" y="146" class="tx" text-anchor="middle">we → us</text>
      <text x="101" y="174" class="tx" text-anchor="middle">they → them</text>
      <text x="101" y="202" class="tx-s" text-anchor="middle">Help me! with him</text>
      <rect x="206" y="6" width="208" height="120" rx="12" class="f4 s4"/>
      <text x="310" y="32" class="tx-b" text-anchor="middle">blisko · daleko</text>
      <text x="310" y="62" class="tx" text-anchor="middle">this · that</text>
      <text x="310" y="90" class="tx" text-anchor="middle">these · those</text>
      <text x="310" y="114" class="tx-s" text-anchor="middle">1. wiersz: lp. · 2. wiersz: lm.</text>
      <rect x="206" y="134" width="208" height="80" rx="12" class="f1 s1"/>
      <text x="310" y="162" class="tx" text-anchor="middle">the green <tspan class="tx-b">one</tspan></text>
      <text x="310" y="194" class="tx" text-anchor="middle">bigger <tspan class="tx-b">ones</tspan></text>
    </svg>`,
    text: `<p>Po czasowniku i po przyimku używasz formy <b>dopełnienia</b>: <i>Help <b>me</b>! I play with <b>him</b>. I visit <b>them</b>.</i> Błąd typu <s>with he</s> to klasyczna pułapka.</p>
      <p><b>this/these</b> – blisko, <b>that/those</b> – daleko. A żeby nie powtarzać rzeczownika, mówisz <b>one</b> (jedna rzecz) albo <b>ones</b> (kilka): <i>I'll take the blue one. Have you got bigger ones?</i></p>`,
    remember: 'I–me, he–him, she–her, we–us, they–them. this/these – blisko, that/those – daleko. one (lp.), ones (lm.).',
    check: { q: 'Mark is my best friend. I play tennis with ___ every week.', options: ['he', 'his', 'him', 'her'], answer: 2, explain: 'Po przyimku „with” – forma dopełnienia: him.' },
  },
];
