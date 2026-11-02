/* Lekcje – język angielski, klasa 4. Klucz: 'angielski/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['angielski/ja-i-inni'] = [
  {
    title: 'Hello! – pierwsza rozmowa',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwoje dzieci rozmawia. Dziewczynka mówi: Hello! I'm Ola. Chłopiec odpowiada: Hi! I'm Kuba. Nice to meet you">
      <rect x="80" y="10" width="160" height="56" rx="14" class="f1 s1"/>
      <path d="M100,66 L84,84 L124,66" class="f1 s1"/>
      <text x="160" y="35" class="tx-b" text-anchor="middle">Hello!</text>
      <text x="160" y="56" class="tx" text-anchor="middle">I'm Ola.</text>
      <text x="44" y="112" class="tx-b" text-anchor="middle" style="font-size:44px">👧</text>
      <rect x="130" y="100" width="190" height="56" rx="14" class="f3 s3"/>
      <path d="M300,156 L322,172 L276,156" class="f3 s3"/>
      <text x="225" y="125" class="tx-b" text-anchor="middle">Hi! I'm Kuba.</text>
      <text x="225" y="146" class="tx" text-anchor="middle">Nice to meet you.</text>
      <text x="356" y="190" class="tx-b" text-anchor="middle" style="font-size:44px">👦</text>
      <text x="20" y="150" class="tx-s">Cześć!</text>
      <text x="20" y="168" class="tx-s">Jestem Ola.</text>
      <text x="130" y="184" class="tx-s">Miło cię poznać.</text>
    </svg>`,
    text: `<p>Po angielsku witasz się słowami <b>Hello!</b> albo <b>Hi!</b> (Cześć!). Potem mówisz, jak masz na imię: <b>I'm Ola.</b> albo <b>My name is Ola.</b></p>
      <p>Gdy kogoś poznajesz, mówisz: <b>Nice to meet you.</b> – Miło cię poznać. Druga osoba odpowiada: <i>Nice to meet you, too.</i> („too” znaczy „też”).</p>`,
    remember: '<b>Hello! / Hi!</b> – cześć. <b>I\'m…</b> / <b>My name is…</b> – jestem… / mam na imię…',
    hook: '„Hi” jest krótkie jak machnięcie ręką 👋 – mówisz je kolegom.',
    check: { q: 'Ktoś mówi: „Nice to meet you.” Co odpowiesz?', options: ['Nice to meet you, too.', 'Good night.', 'I\'m ten.'], answer: 0, explain: '„Nice to meet you, too.” – Mnie też miło cię poznać.' },
  },
  {
    title: 'Pora dnia ma znaczenie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Cztery kafelki: rano Good morning, po południu Good afternoon, wieczorem Good evening – to powitania; Good night – pożegnanie przed snem">
      <g class="f4 s4"><rect x="8" y="10" width="90" height="120" rx="10"/><rect x="106" y="10" width="90" height="120" rx="10"/><rect x="204" y="10" width="90" height="120" rx="10"/></g>
      <rect x="302" y="10" width="90" height="120" rx="10" class="f5 s5 sw"/>
      <text x="53" y="46" class="tx-b" style="font-size:26px" text-anchor="middle">🌅</text>
      <text x="151" y="46" class="tx-b" style="font-size:26px" text-anchor="middle">☀️</text>
      <text x="249" y="46" class="tx-b" style="font-size:26px" text-anchor="middle">🌆</text>
      <text x="347" y="46" class="tx-b" style="font-size:26px" text-anchor="middle">🌙</text>
      <text x="53" y="74" class="tx" text-anchor="middle">Good</text>
      <text x="151" y="74" class="tx" text-anchor="middle">Good</text>
      <text x="249" y="74" class="tx" text-anchor="middle">Good</text>
      <text x="347" y="74" class="tx" text-anchor="middle">Good</text>
      <text x="53" y="94" class="tx-b" text-anchor="middle">morning</text>
      <text x="151" y="94" class="tx-b" text-anchor="middle">afternoon</text>
      <text x="249" y="94" class="tx-b" text-anchor="middle">evening</text>
      <text x="347" y="94" class="tx-b" text-anchor="middle">night</text>
      <text x="53" y="118" class="tx-s" text-anchor="middle">rano</text>
      <text x="151" y="118" class="tx-s" text-anchor="middle">po południu</text>
      <text x="249" y="118" class="tx-s" text-anchor="middle">wieczorem</text>
      <text x="347" y="118" class="tx-s" text-anchor="middle">przed snem</text>
      <line x1="10" y1="148" x2="292" y2="148" class="ln s4 sw"/>
      <line x1="304" y1="148" x2="390" y2="148" class="ln s5 sw"/>
      <text x="151" y="172" class="tx" text-anchor="middle">👋 na powitanie</text>
      <text x="347" y="172" class="tx" text-anchor="middle">pożegnanie</text>
    </svg>`,
    text: `<p>Rano mówisz <b>Good morning!</b>, po południu – <b>Good afternoon!</b>, a wieczorem – <b>Good evening!</b>. Wszystkie znaczą „dzień dobry” albo „dobry wieczór”.</p>
      <p><b>Good night!</b> (Dobranoc!) to <b>nie</b> powitanie. Mówisz je, gdy się żegnasz wieczorem albo idziesz spać. Na pożegnanie w ciągu dnia mówisz <b>Goodbye!</b> albo <b>Bye!</b>.</p>`,
    remember: 'Good morning / afternoon / evening – <b>na powitanie</b>. Good night – <b>na pożegnanie</b>.',
    hook: '<b>Night</b> to noc, a w nocy się śpi – więc „Good night” mówisz przed snem 🌙.',
    check: { q: 'Jest 18:00. Przychodzisz do babci w gości. Jak się przywitasz?', options: ['Good evening!', 'Good night!', 'Goodbye!'], answer: 0, explain: 'Wieczorem na powitanie mówimy „Good evening!”. „Good night” to pożegnanie.' },
  },
  {
    title: 'Magiczne słowa',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cztery kafelki: please – proszę, thank you – dziękuję, sorry – przepraszam za błąd, excuse me – przepraszam, gdy o coś pytasz">
      <g class="f3 s3"><rect x="10" y="10" width="185" height="90" rx="12"/><rect x="205" y="10" width="185" height="90" rx="12"/></g>
      <g class="f2 s2"><rect x="10" y="110" width="185" height="90" rx="12"/><rect x="205" y="110" width="185" height="90" rx="12"/></g>
      <text x="40" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">🙏</text>
      <text x="235" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">🎁</text>
      <text x="40" y="152" class="tx-b" style="font-size:26px" text-anchor="middle">😬</text>
      <text x="235" y="152" class="tx-b" style="font-size:26px" text-anchor="middle">🙋</text>
      <text x="62" y="45" class="tx-b">please</text>
      <text x="257" y="45" class="tx-b">thank you</text>
      <text x="62" y="145" class="tx-b">sorry</text>
      <text x="257" y="145" class="tx-b">excuse me</text>
      <text x="62" y="70" class="tx">proszę</text>
      <text x="257" y="70" class="tx">dziękuję</text>
      <text x="62" y="170" class="tx">przepraszam</text>
      <text x="257" y="170" class="tx">przepraszam</text>
      <text x="62" y="90" class="tx-s">gdy o coś prosisz</text>
      <text x="257" y="90" class="tx-s">→ You're welcome.</text>
      <text x="62" y="190" class="tx-s">zrobiłem coś źle</text>
      <text x="257" y="190" class="tx-s">gdy o coś pytasz</text>
    </svg>`,
    text: `<p><b>Please</b> dodajesz, gdy o coś prosisz: <i>Water, please.</i> Za pomoc lub prezent mówisz <b>Thank you!</b> albo <b>Thanks!</b>. Ktoś ci podziękował? Odpowiedz: <b>You're welcome.</b> – Nie ma za co.</p>
      <p>Po polsku „przepraszam” jest jedno, a po angielsku są dwa: <b>sorry</b> – gdy coś zrobisz źle (np. nadepniesz komuś na stopę), i <b>excuse me</b> – gdy chcesz kogoś o coś zapytać albo przejść obok.</p>`,
    remember: '<b>Sorry</b> – po błędzie. <b>Excuse me</b> – zanim zapytasz albo przejdziesz.',
    hook: '<b>Sorry</b> – „ups, to moja wina” 😬. <b>Excuse me</b> – „halo, mogę na chwilkę?” 🙋',
    check: { q: 'Przez przypadek popchnąłeś kolegę. Co mówisz?', options: ['Sorry!', 'Excuse me!', 'You\'re welcome!'], answer: 0, explain: 'Gdy zrobisz coś źle, przepraszasz słowem „Sorry!”.' },
  },
  {
    title: 'Liczby: -teen czy -ty?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie liczb: 13 thirteen i 30 thirty, 14 fourteen i 40 forty, 15 fifteen i 50 fifty. Końcówka -teen to liczby od 13 do 19, końcówka -ty to pełne dziesiątki">
      <rect x="10" y="10" width="185" height="36" rx="8" class="f1 s1 sw"/>
      <rect x="205" y="10" width="185" height="36" rx="8" class="f2 s2 sw"/>
      <text x="102" y="34" class="tx-b" text-anchor="middle">-teen (13–19)</text>
      <text x="297" y="34" class="tx-b" text-anchor="middle">-ty (dziesiątki)</text>
      <g class="f1"><rect x="10" y="56" width="185" height="40" rx="8"/><rect x="10" y="104" width="185" height="40" rx="8"/><rect x="10" y="152" width="185" height="40" rx="8"/></g>
      <g class="f2"><rect x="205" y="56" width="185" height="40" rx="8"/><rect x="205" y="104" width="185" height="40" rx="8"/><rect x="205" y="152" width="185" height="40" rx="8"/></g>
      <text x="24" y="82" class="tx-b">13</text><text x="70" y="82" class="tx">thir<tspan class="tx-b t1">teen</tspan></text>
      <text x="24" y="130" class="tx-b">14</text><text x="70" y="130" class="tx">four<tspan class="tx-b t1">teen</tspan></text>
      <text x="24" y="178" class="tx-b">15</text><text x="70" y="178" class="tx">fif<tspan class="tx-b t1">teen</tspan></text>
      <text x="219" y="82" class="tx-b">30</text><text x="265" y="82" class="tx">thir<tspan class="tx-b t2">ty</tspan></text>
      <text x="219" y="130" class="tx-b">40</text><text x="265" y="130" class="tx">for<tspan class="tx-b t2">ty</tspan> (bez u!)</text>
      <text x="219" y="178" class="tx-b">50</text><text x="265" y="178" class="tx">fif<tspan class="tx-b t2">ty</tspan></text>
    </svg>`,
    text: `<p>Liczby od 13 do 19 kończą się na <b>-teen</b>: thirteen, fourteen, fifteen… Pełne dziesiątki kończą się na <b>-ty</b>: twenty, thirty, forty, fifty…</p>
      <p>Liczby takie jak 21 czy 35 składasz z dwóch części, z kreską w środku: <b>twenty-one</b>, <b>thirty-five</b>. A 100 to <b>one hundred</b>.</p>`,
    remember: '-teen = 13–19 (nastki). -ty = 20, 30, 40… (dziesiątki). 40 = <b>forty</b>, bez „u”.',
    hook: '<b>-teen</b> brzmi jak „-naście”: thir<b>teen</b> – trzy<b>naście</b>.',
    check: { q: 'Która liczba to „fifty”?', options: ['50', '15', '5', '55'], answer: 0, explain: 'Końcówka „-ty” oznacza dziesiątki: fifty to 50. Liczba 15 to „fifteen”.' },
  },
  {
    title: 'Czasownik „to be” – am, is, are',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Trzy kafelki: I łączy się z am, he she it z is, you we they z are. Pod spodem: zdanie You are ten zamienia się w pytanie Are you ten przez zamianę kolejności słów">
      <defs><marker id="a-k4en-ja-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="120" height="80" rx="12" class="f1 s1"/>
      <rect x="140" y="10" width="120" height="80" rx="12" class="f3 s3"/>
      <rect x="270" y="10" width="120" height="80" rx="12" class="f2 s2"/>
      <text x="70" y="40" class="tx" text-anchor="middle">I</text>
      <text x="200" y="40" class="tx" text-anchor="middle">he, she, it</text>
      <text x="330" y="40" class="tx" text-anchor="middle">you, we, they</text>
      <text x="70" y="74" class="tx-b" text-anchor="middle">am</text>
      <text x="200" y="74" class="tx-b" text-anchor="middle">is</text>
      <text x="330" y="74" class="tx-b" text-anchor="middle">are</text>
      <rect x="20" y="120" width="70" height="34" rx="8" class="f4 s4"/>
      <rect x="96" y="120" width="56" height="34" rx="8" class="f5 s5"/>
      <text x="55" y="143" class="tx-b" text-anchor="middle">You</text>
      <text x="124" y="143" class="tx-b" text-anchor="middle">are</text>
      <text x="160" y="143" class="tx">ten.</text>
      <path d="M210,137 L240,137" class="ln" marker-end="url(#a-k4en-ja-5)"/>
      <rect x="250" y="120" width="56" height="34" rx="8" class="f5 s5"/>
      <rect x="312" y="120" width="56" height="34" rx="8" class="f4 s4"/>
      <text x="278" y="143" class="tx-b" text-anchor="middle">Are</text>
      <text x="340" y="143" class="tx-b" text-anchor="middle">you</text>
      <text x="372" y="143" class="tx">…?</text>
      <text x="200" y="185" class="tx" text-anchor="middle">Pytanie: zamień kolejność słów.</text>
      <text x="200" y="208" class="tx-s" text-anchor="middle">Yes, I am. / No, I'm not.</text>
    </svg>`,
    text: `<p>„To be” znaczy „być”. Ma trzy formy: <b>I am</b> (jestem), <b>he / she / it is</b> (on, ona, ono jest), <b>you / we / they are</b> (ty jesteś, my jesteśmy, oni są). Skróty: I'm, she's, you're, they're.</p>
      <p><b>Przeczenie</b> robisz przez dodanie „not”: I'm not, she isn't, they aren't. <b>Pytanie</b> robisz, zamieniając kolejność: <i>You are ten.</i> → <i>Are you ten?</i></p>`,
    remember: 'I <b>am</b> · he/she/it <b>is</b> · you/we/they <b>are</b>. Pytanie: <b>Are you…? Is she…?</b>',
    hook: '„Am” jest tylko jedno – tak jak jest tylko jedno „I” (ja).',
    check: { q: 'Uzupełnij: „We ___ friends.”', options: ['are', 'is', 'am'], answer: 0, explain: 'Z „we” łączymy „are”: We are friends.' },
  },
];

window.LESSONS['angielski/wyglad-i-cechy'] = [
  {
    title: 'Jak wyglądasz?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Rysunek dziewczynki z długimi włosami, niebieskimi oczami i w okularach. Podpisy: long hair, blue eyes, glasses">
      <defs><marker id="a-k4en-wyg-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M90,60 Q90,20 130,20 Q170,20 170,60 L176,170 L84,170 Z" class="f2 s2"/>
      <circle cx="130" cy="80" r="40" class="f4 s4"/>
      <circle cx="115" cy="78" r="6" class="f1 s1"/>
      <circle cx="145" cy="78" r="6" class="f1 s1"/>
      <rect x="104" y="68" width="22" height="20" rx="6" class="ln" fill="none"/>
      <rect x="134" y="68" width="22" height="20" rx="6" class="ln" fill="none"/>
      <line x1="126" y1="76" x2="134" y2="76" class="ln"/>
      <path d="M116,100 Q130,110 144,100" class="ln" fill="none"/>
      <rect x="100" y="122" width="60" height="70" rx="12" class="f5 s5"/>
      <g class="ln s2">
        <line x1="236" y1="40" x2="170" y2="44" marker-end="url(#a-k4en-wyg-1)"/>
        <line x1="236" y1="86" x2="152" y2="80" marker-end="url(#a-k4en-wyg-1)"/>
        <line x1="236" y1="132" x2="160" y2="88" marker-end="url(#a-k4en-wyg-1)"/>
      </g>
      <text x="244" y="38" class="tx-b">long hair</text>
      <text x="244" y="56" class="tx-s">długie włosy</text>
      <text x="244" y="84" class="tx-b">blue eyes</text>
      <text x="244" y="102" class="tx-s">niebieskie oczy</text>
      <text x="244" y="130" class="tx-b">glasses</text>
      <text x="244" y="148" class="tx-s">okulary</text>
      <text x="200" y="212" class="tx" text-anchor="middle">She's got long hair and blue eyes.</text>
    </svg>`,
    text: `<p>Gdy opisujesz wygląd, mówisz o wzroście: <b>tall</b> (wysoki) albo <b>short</b> (niski). Potem o włosach: <b>long / short</b> (długie / krótkie), <b>curly / straight</b> (kręcone / proste), <b>fair / dark</b> (jasne / ciemne).</p>
      <p>Na końcu oczy: <b>blue</b>, <b>brown</b>, <b>green eyes</b>. Ktoś nosi okulary? To <b>glasses</b>.</p>`,
    remember: 'Najpierw długość, potem kolor: <i>long <b>dark</b> hair</i> – długie ciemne włosy.',
    hook: '<b>Short</b> ma dwa znaczenia: niski człowiek i krótkie włosy. Oba są „mało”.',
  },
  {
    title: 'Jaki jesteś? Cechy charakteru',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sześć kafelków z cechami: funny – zabawny, kind – miły, shy – nieśmiały, brave – odważny, lazy – leniwy, clever – bystry">
      <g class="f3 s3">
        <rect x="10" y="10" width="120" height="90" rx="10"/><rect x="140" y="10" width="120" height="90" rx="10"/><rect x="270" y="10" width="120" height="90" rx="10"/>
        <rect x="10" y="110" width="120" height="90" rx="10"/><rect x="140" y="110" width="120" height="90" rx="10"/><rect x="270" y="110" width="120" height="90" rx="10"/>
      </g>
      <text x="70" y="42" class="tx-b" style="font-size:26px" text-anchor="middle">😂</text>
      <text x="200" y="42" class="tx-b" style="font-size:26px" text-anchor="middle">🤗</text>
      <text x="330" y="42" class="tx-b" style="font-size:26px" text-anchor="middle">🙈</text>
      <text x="70" y="142" class="tx-b" style="font-size:26px" text-anchor="middle">🦁</text>
      <text x="200" y="142" class="tx-b" style="font-size:26px" text-anchor="middle">🦥</text>
      <text x="330" y="142" class="tx-b" style="font-size:26px" text-anchor="middle">🧠</text>
      <text x="70" y="70" class="tx-b" text-anchor="middle">funny</text>
      <text x="200" y="70" class="tx-b" text-anchor="middle">kind</text>
      <text x="330" y="70" class="tx-b" text-anchor="middle">shy</text>
      <text x="70" y="170" class="tx-b" text-anchor="middle">brave</text>
      <text x="200" y="170" class="tx-b" text-anchor="middle">lazy</text>
      <text x="330" y="170" class="tx-b" text-anchor="middle">clever</text>
      <text x="70" y="90" class="tx-s" text-anchor="middle">zabawny</text>
      <text x="200" y="90" class="tx-s" text-anchor="middle">miły</text>
      <text x="330" y="90" class="tx-s" text-anchor="middle">nieśmiały</text>
      <text x="70" y="190" class="tx-s" text-anchor="middle">odważny</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">leniwy</text>
      <text x="330" y="190" class="tx-s" text-anchor="middle">bystry</text>
    </svg>`,
    text: `<p>Charakter to to, jaki ktoś jest w środku. Kolega, który rozśmiesza całą klasę, jest <b>funny</b>. Koleżanka, która zawsze pomaga, jest <b>kind</b> albo <b>helpful</b>.</p>
      <p>Ktoś, kto boi się odezwać przy obcych, jest <b>shy</b>. A ktoś, kto się nie boi – <b>brave</b>. Mówisz: <i>My friend is funny.</i> – Mój kolega jest zabawny.</p>`,
    hook: '<b>Lazy</b> brzmi jak „leży” – leniuch ciągle leży 🦥.',
    check: { q: 'Zosia boi się mówić przy całej klasie. Jaka jest Zosia?', options: ['shy', 'brave', 'funny'], answer: 0, explain: '„Shy” to nieśmiały. „Brave” – odważny, „funny” – zabawny.' },
  },
  {
    title: 'Jak się czujesz?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Sześć buziek z uczuciami: happy – wesoły, sad – smutny, angry – zły, tired – zmęczony, scared – przestraszony, bored – znudzony">
      <g class="f4 s4">
        <circle cx="45" cy="55" r="34"/><circle cx="127" cy="55" r="34"/><circle cx="209" cy="55" r="34"/>
        <circle cx="291" cy="55" r="34"/>
      </g>
      <text x="45" y="64" class="tx-b" text-anchor="middle" style="font-size:30px">😀</text>
      <text x="127" y="64" class="tx-b" text-anchor="middle" style="font-size:30px">😢</text>
      <text x="209" y="64" class="tx-b" text-anchor="middle" style="font-size:30px">😠</text>
      <text x="291" y="64" class="tx-b" text-anchor="middle" style="font-size:30px">😴</text>
      <text x="45" y="112" class="tx-b" text-anchor="middle">happy</text>
      <text x="127" y="112" class="tx-b" text-anchor="middle">sad</text>
      <text x="209" y="112" class="tx-b" text-anchor="middle">angry</text>
      <text x="291" y="112" class="tx-b" text-anchor="middle">tired</text>
      <text x="45" y="130" class="tx-s" text-anchor="middle">wesoły</text>
      <text x="127" y="130" class="tx-s" text-anchor="middle">smutny</text>
      <text x="209" y="130" class="tx-s" text-anchor="middle">zły</text>
      <text x="291" y="130" class="tx-s" text-anchor="middle">zmęczony</text>
      <rect x="336" y="20" width="56" height="150" rx="12" class="f5 s5"/>
      <text x="364" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">😨</text>
      <text x="364" y="74" class="tx-s" text-anchor="middle">scared</text>
      <text x="364" y="118" class="tx-b" style="font-size:26px" text-anchor="middle">🥱</text>
      <text x="364" y="140" class="tx-s" text-anchor="middle">bored</text>
      <text x="170" y="170" class="tx" text-anchor="middle">How do you feel?</text>
      <text x="170" y="192" class="tx-b" text-anchor="middle">I'm happy!</text>
    </svg>`,
    text: `<p>O uczucia pytasz: <b>How do you feel?</b> – Jak się czujesz? Odpowiadasz: <i>I'm happy.</i> (Jestem wesoły.) albo <i>I feel tired.</i> (Czuję się zmęczony.)</p>
      <p><b>Scared</b> to przestraszony, a <b>bored</b> – znudzony. Kiedy ktoś jest smutny (<b>sad</b>), możesz zapytać: <i>Are you OK?</i> – Wszystko w porządku?</p>`,
    remember: 'I\'m + uczucie: <i>I\'m happy / sad / angry / tired / scared / bored.</i>',
    hook: '<b>Sad</b> – smutny: oba słowa zaczynają się na „s”. <b>Scared</b> – „s” jak „strach” 😨.',
    check: { q: 'Na lekcji nic się nie dzieje i ziewasz. Jak się czujesz?', options: ['I\'m bored.', 'I\'m scared.', 'I\'m angry.'], answer: 0, explain: '„Bored” to znudzony.' },
  },
  {
    title: '„have got” – mam',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie kolumny. I, you, we, they – have got, przykład: I've got a dog. He, she, it – has got, przykład: She's got a cat">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f2 s2 sw"/>
      <text x="102" y="40" class="tx" text-anchor="middle">I, you, we, they</text>
      <text x="297" y="40" class="tx" text-anchor="middle">he, she, it</text>
      <text x="102" y="72" class="tx-b" text-anchor="middle">have got</text>
      <text x="297" y="72" class="tx-b" text-anchor="middle">has got</text>
      <text x="102" y="92" class="tx-s" text-anchor="middle">skrót: 've got</text>
      <text x="297" y="92" class="tx-s" text-anchor="middle">skrót: 's got</text>
      <text x="102" y="134" class="tx-b" text-anchor="middle" style="font-size:30px">🐶</text>
      <text x="297" y="134" class="tx-b" text-anchor="middle" style="font-size:30px">🐱</text>
      <text x="102" y="168" class="tx" text-anchor="middle">I've got a dog.</text>
      <text x="297" y="168" class="tx" text-anchor="middle">She's got a cat.</text>
    </svg>`,
    text: `<p>„Have got” znaczy „mieć”. Mówisz: <i>I've got a dog.</i> – Mam psa. Ale przy <b>he, she, it</b> zmienia się na <b>has got</b>: <i>She's got a cat.</i> – Ona ma kota.</p>
      <p>Przeczenie: <b>haven't got</b> / <b>hasn't got</b>. Pytanie: <i><b>Have</b> you got a sister?</i> – <i>Yes, I have. / No, I haven't.</i></p>`,
    remember: 'I / you / we / they <b>have got</b> · he / she / it <b>has got</b>.',
    hook: 'He, she, it – lubią literę <b>s</b>: <b>has</b>, <b>is</b>, play<b>s</b>.',
    check: { q: 'Uzupełnij: „My dad ___ got a red car.”', options: ['has', 'have', 'is'], answer: 0, explain: '„My dad” to „he”, więc „has got”.' },
  },
  {
    title: '„can” – umiem, potrafię',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwa kafelki. Zielony: I can swim – umiem pływać. Pomarańczowy: I can't sing – nie umiem śpiewać. Pod spodem reguła: he can swim, bez końcówki s">
      <rect x="10" y="10" width="185" height="120" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="120" rx="12" class="f2 s2"/>
      <text x="102" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">✅ 🏊</text>
      <text x="297" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">❌ 🎤</text>
      <text x="102" y="86" class="tx-b" text-anchor="middle">I can swim.</text>
      <text x="297" y="86" class="tx-b" text-anchor="middle">I can't sing.</text>
      <text x="102" y="110" class="tx-s" text-anchor="middle">Umiem pływać.</text>
      <text x="297" y="110" class="tx-s" text-anchor="middle">Nie umiem śpiewać.</text>
      <rect x="10" y="142" width="380" height="48" rx="10" class="f4 s4"/>
      <text x="105" y="164" class="tx" text-anchor="middle">✅ he <tspan class="tx-b">can</tspan> swim</text>
      <text x="295" y="164" class="tx" text-anchor="middle">❌ he <tspan class="tx-b">cans</tspan> swim</text>
      <text x="200" y="182" class="tx-s" text-anchor="middle">„can” jest takie samo dla wszystkich osób</text>
    </svg>`,
    text: `<p>„Can” znaczy „umiem, potrafię”. Po nim stawiasz czasownik w zwykłej formie: <i>I can swim.</i> <i>She can ride a bike.</i></p>
      <p>Nie umiesz? Powiedz <b>can't</b>: <i>I can't sing.</i> Pytanie zaczynasz od „can”: <i><b>Can</b> you dance?</i> – <i>Yes, I can. / No, I can't.</i></p>`,
    remember: '<b>can</b> + czasownik, dla wszystkich osób tak samo – bez -s: he can swim.',
    hook: '„Can” jest jak kamień – nic się w nim nie zmienia, nigdy nie dostaje „s”.',
    check: { q: 'Które zdanie jest poprawne?', options: ['He can play tennis.', 'He cans play tennis.', 'He can plays tennis.'], answer: 0, explain: '„Can” i czasownik po nim nie dostają końcówki -s: He can play tennis.' },
  },
  {
    title: 'Jak? – przysłówki sposobu',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwie kolumny. Jaki? – przymiotnik: a slow turtle, a fast rabbit, a good singer. Jak? – przysłówek: it walks slowly, it runs fast, she sings well.">
      <defs><marker id="a-k4en-wyg-9" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="100" y="24" class="tx-b t1" text-anchor="middle">jaki? – przymiotnik</text>
      <text x="300" y="24" class="tx-b t3" text-anchor="middle">jak? – przysłówek</text>
      <g class="f1 s1"><rect x="10" y="36" width="180" height="50" rx="10"/><rect x="10" y="96" width="180" height="50" rx="10"/><rect x="10" y="156" width="180" height="50" rx="10"/></g>
      <g class="f3 s3"><rect x="210" y="36" width="180" height="50" rx="10"/><rect x="210" y="96" width="180" height="50" rx="10"/><rect x="210" y="156" width="180" height="50" rx="10"/></g>
      <g class="tx" text-anchor="middle">
        <text x="100" y="67">🐢 a <tspan class="tx-b">slow</tspan> turtle</text>
        <text x="100" y="127">🐇 a <tspan class="tx-b">fast</tspan> rabbit</text>
        <text x="100" y="187">🎤 a <tspan class="tx-b">good</tspan> singer</text>
        <text x="300" y="67">it walks <tspan class="tx-b t3">slowly</tspan></text>
        <text x="300" y="127">it runs <tspan class="tx-b t3">fast</tspan></text>
        <text x="300" y="187">she sings <tspan class="tx-b t3">well</tspan></text>
      </g>
      <g class="ln s2"><line x1="192" y1="61" x2="208" y2="61" marker-end="url(#a-k4en-wyg-9)"/><line x1="192" y1="121" x2="208" y2="121" marker-end="url(#a-k4en-wyg-9)"/><line x1="192" y1="181" x2="208" y2="181" marker-end="url(#a-k4en-wyg-9)"/></g>
    </svg>`,
    text: `<p>Przymiotnik mówi, <b>jaki</b> ktoś jest: <i>a slow turtle</i> – wolny żółw. Przysłówek mówi, <b>jak</b> ktoś coś robi: <i>It walks slowly.</i> – Idzie wolno. Stawiasz go za czasownikiem.</p>
      <p>Przysłówek tworzysz zwykle, dodając <b>-ly</b>: slow → slowly, quiet → quietly, careful → carefully; po -y: easy → easily. Wyjątki: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>. Pasują do „can”: <i>I can swim fast.</i></p>`,
    remember: 'przymiotnik + -ly = przysłówek (slowly) · wyjątki: good → well, fast → fast, hard → hard.',
    hook: '<b>-ly</b> to jak polskie „-o”: wolny → wolno (slow → slowly), cichy → cicho (quiet → quietly).',
    check: { q: 'Uzupełnij: „He is a careful driver. He drives ___.”', options: ['carefully', 'careful', 'carefuly'], answer: 0, explain: 'Opisujemy, jak prowadzi – potrzebny przysłówek: careful + ly = carefully (dwa „l”).' },
  },
];

window.LESSONS['angielski/rodzina-i-dzien'] = [
  {
    title: 'Moja rodzina – my family',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Drzewo rodziny: na górze grandma i grandpa, pod nimi mum, dad i aunt, na dole me, sister i cousin">
      <g class="f5 s5"><rect x="80" y="10" width="110" height="44" rx="10"/><rect x="210" y="10" width="110" height="44" rx="10"/></g>
      <g class="f1 s1"><rect x="20" y="92" width="110" height="44" rx="10"/><rect x="145" y="92" width="110" height="44" rx="10"/><rect x="270" y="92" width="110" height="44" rx="10"/></g>
      <g class="f3 s3"><rect x="20" y="174" width="110" height="44" rx="10"/><rect x="145" y="174" width="110" height="44" rx="10"/><rect x="270" y="174" width="110" height="44" rx="10"/></g>
      <g class="ln-thin">
        <line x1="200" y1="54" x2="200" y2="72"/><line x1="75" y1="72" x2="325" y2="72"/>
        <line x1="75" y1="72" x2="75" y2="92"/><line x1="325" y1="72" x2="325" y2="92"/>
        <line x1="130" y1="114" x2="145" y2="114"/>
        <line x1="137" y1="114" x2="137" y2="154"/><line x1="75" y1="154" x2="200" y2="154"/>
        <line x1="75" y1="154" x2="75" y2="174"/><line x1="200" y1="154" x2="200" y2="174"/>
        <line x1="325" y1="136" x2="325" y2="174"/>
      </g>
      <text x="135" y="30" class="tx-b" text-anchor="middle">grandma</text><text x="135" y="47" class="tx-s" text-anchor="middle">babcia</text>
      <text x="265" y="30" class="tx-b" text-anchor="middle">grandpa</text><text x="265" y="47" class="tx-s" text-anchor="middle">dziadek</text>
      <text x="75" y="112" class="tx-b" text-anchor="middle">dad</text><text x="75" y="129" class="tx-s" text-anchor="middle">tata</text>
      <text x="200" y="112" class="tx-b" text-anchor="middle">mum</text><text x="200" y="129" class="tx-s" text-anchor="middle">mama</text>
      <text x="325" y="112" class="tx-b" text-anchor="middle">aunt</text><text x="325" y="129" class="tx-s" text-anchor="middle">ciocia</text>
      <text x="75" y="194" class="tx-b" text-anchor="middle">me</text><text x="75" y="211" class="tx-s" text-anchor="middle">ja</text>
      <text x="200" y="194" class="tx-b" text-anchor="middle">sister</text><text x="200" y="211" class="tx-s" text-anchor="middle">siostra</text>
      <text x="325" y="194" class="tx-b" text-anchor="middle">cousin</text><text x="325" y="211" class="tx-s" text-anchor="middle">kuzyn(ka)</text>
    </svg>`,
    text: `<p>Mama i tata to <b>mum</b> i <b>dad</b>, a razem – <b>parents</b> (rodzice). Babcia i dziadek to <b>grandma</b> i <b>grandpa</b>. Brat to <b>brother</b>, siostra – <b>sister</b>.</p>
      <p>Siostra mamy to twoja ciocia – <b>aunt</b>. Brat taty to wujek – <b>uncle</b>. Ich dzieci to twoi kuzyni – <b>cousin</b> (to samo słowo dla chłopca i dziewczynki).</p>`,
    hook: '<b>Grand</b> znaczy „wielki”: grandma to „wielka mama” – mama twojej mamy albo taty.',
    check: { q: 'Siostra twojej mamy to po angielsku…', options: ['aunt', 'uncle', 'cousin'], answer: 0, explain: 'Siostra mamy to ciocia – „aunt”.' },
  },
  {
    title: 'Mój dzień – my day',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Oś dnia: get up – wstaję, have breakfast – jem śniadanie, go to school – idę do szkoły, do my homework – odrabiam lekcje, go to bed – idę spać">
      <defs><marker id="a-k4en-rod-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="60" x2="390" y2="60" class="ln sw" marker-end="url(#a-k4en-rod-2)"/>
      <g class="f4 s4"><circle cx="40" cy="60" r="8"/><circle cx="118" cy="60" r="8"/><circle cx="196" cy="60" r="8"/><circle cx="274" cy="60" r="8"/><circle cx="352" cy="60" r="8"/></g>
      <text x="40" y="36" class="tx-b" style="font-size:26px" text-anchor="middle">⏰</text>
      <text x="118" y="36" class="tx-b" style="font-size:26px" text-anchor="middle">🥣</text>
      <text x="196" y="36" class="tx-b" style="font-size:26px" text-anchor="middle">🏫</text>
      <text x="274" y="36" class="tx-b" style="font-size:26px" text-anchor="middle">📝</text>
      <text x="352" y="36" class="tx-b" style="font-size:26px" text-anchor="middle">🛏️</text>
      <text x="40" y="92" class="tx-s" text-anchor="middle">get up</text>
      <text x="118" y="92" class="tx-s" text-anchor="middle">have</text>
      <text x="118" y="108" class="tx-s" text-anchor="middle">breakfast</text>
      <text x="196" y="92" class="tx-s" text-anchor="middle">go to</text>
      <text x="196" y="108" class="tx-s" text-anchor="middle">school</text>
      <text x="274" y="92" class="tx-s" text-anchor="middle">do my</text>
      <text x="274" y="108" class="tx-s" text-anchor="middle">homework</text>
      <text x="352" y="92" class="tx-s" text-anchor="middle">go to bed</text>
      <rect x="10" y="130" width="380" height="60" rx="10" class="f1 s1"/>
      <text x="200" y="156" class="tx" text-anchor="middle">I get up at seven o'clock.</text>
      <text x="200" y="178" class="tx" text-anchor="middle">I <tspan class="tx-b">always</tspan> brush my teeth.</text>
    </svg>`,
    text: `<p>O tym, co robisz codziennie, mówisz w czasie <b>present simple</b>: <i>I get up at seven.</i> (Wstaję o siódmej.) <i>I go to school.</i> (Chodzę do szkoły.)</p>
      <p>Jak często coś robisz? <b>always</b> (zawsze), <b>usually</b> (zwykle), <b>sometimes</b> (czasami), <b>never</b> (nigdy). Te słowa stawiasz <b>przed czasownikiem</b>: <i>I never watch TV in the morning.</i></p>`,
    remember: 'always → usually → sometimes → never. Stoją <b>przed</b> czasownikiem.',
    hook: '<b>Never</b> – jak „nigdy-never”: oba zaczynają się na „n”.',
  },
  {
    title: 'Która godzina? – past i to',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Tarcza zegara podzielona na dwie połowy. Prawa połowa to past – po, lewa to to – do. Na górze o'clock, po prawej quarter past, na dole half past, po lewej quarter to">
      <path d="M200,20 A100,100 0 0,1 200,220 Z" class="f3 s3"/>
      <path d="M200,20 A100,100 0 0,0 200,220 Z" class="f2 s2"/>
      <circle cx="200" cy="120" r="5" class="f4 s4"/>
      <text x="200" y="44" class="tx-b" text-anchor="middle">12</text>
      <text x="282" y="126" class="tx-b" text-anchor="middle">3</text>
      <text x="200" y="210" class="tx-b" text-anchor="middle">6</text>
      <text x="118" y="126" class="tx-b" text-anchor="middle">9</text>
      <text x="240" y="100" class="tx-b" text-anchor="middle">past</text>
      <text x="240" y="160" class="tx-s" text-anchor="middle">po</text>
      <text x="160" y="100" class="tx-b" text-anchor="middle">to</text>
      <text x="160" y="160" class="tx-s" text-anchor="middle">do</text>
      <text x="200" y="12" class="tx-s" text-anchor="middle">o'clock</text>
      <text x="306" y="116" class="tx">quarter</text>
      <text x="306" y="134" class="tx">past</text>
      <text x="200" y="237" class="tx-s" text-anchor="middle">half past</text>
      <text x="10" y="116" class="tx">quarter</text>
      <text x="10" y="134" class="tx">to</text>
    </svg>`,
    text: `<p>Pełna godzina to <b>o'clock</b>: 7:00 – <i>seven o'clock</i>. Prawa połowa zegara to <b>past</b> (po): 7:15 – <i>quarter past seven</i> (kwadrans po siódmej), 7:30 – <i>half past seven</i>.</p>
      <p>Lewa połowa to <b>to</b> (do): 7:45 – <i>quarter to eight</i> (kwadrans do ósmej). Możesz też po prostu przeczytać cyfry: <i>seven forty-five</i>.</p>`,
    remember: '<b>past</b> = po (prawa połowa), <b>to</b> = do (lewa połowa). <b>quarter</b> = kwadrans, <b>half</b> = pół.',
    hook: 'Pułapka! Polskie „wpół do ósmej” (7:30) to po angielsku <b>half past seven</b> – liczysz od godziny, która już minęła.',
    check: { q: 'Jest 8:45. Która odpowiedź jest poprawna?', options: ['quarter to nine', 'quarter past eight', 'half past eight'], answer: 0, explain: '8:45 to kwadrans do dziewiątej – „quarter to nine”. „Quarter past eight” to 8:15.' },
  },
  {
    title: 'He, she, it – dodaj -s',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwie kolumny. I play, I watch, I go, I have. She plays, he watches, he goes, she has – końcówka s albo es">
      <rect x="10" y="10" width="185" height="200" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="200" rx="12" class="f2 s2 sw"/>
      <text x="102" y="38" class="tx-b" text-anchor="middle">I, you, we, they</text>
      <text x="297" y="38" class="tx-b" text-anchor="middle">he, she, it</text>
      <line x1="20" y1="50" x2="185" y2="50" class="ln-thin"/>
      <line x1="215" y1="50" x2="380" y2="50" class="ln-thin"/>
      <text x="102" y="82" class="tx" text-anchor="middle">I play</text>
      <text x="102" y="118" class="tx" text-anchor="middle">I watch</text>
      <text x="102" y="154" class="tx" text-anchor="middle">I go</text>
      <text x="102" y="190" class="tx" text-anchor="middle">I have</text>
      <text x="297" y="82" class="tx" text-anchor="middle">she play<tspan class="tx-b t2">s</tspan></text>
      <text x="297" y="118" class="tx" text-anchor="middle">he watch<tspan class="tx-b t2">es</tspan></text>
      <text x="297" y="154" class="tx" text-anchor="middle">he go<tspan class="tx-b t2">es</tspan></text>
      <text x="297" y="190" class="tx" text-anchor="middle">she <tspan class="tx-b t2">has</tspan></text>
    </svg>`,
    text: `<p>W present simple przy <b>he, she, it</b> czasownik dostaje końcówkę <b>-s</b>: <i>she plays</i>. Po -ch, -sh i w „go”, „do” dodajesz <b>-es</b>: <i>he watches, he goes, she does</i>. „Have” zmienia się w <b>has</b>.</p>
      <p>Przeczenie: <b>don't</b> / <b>doesn't</b> + czasownik bez końcówki: <i>I don't play. She doesn't play.</i> Pytanie: <i><b>Do</b> you play? <b>Does</b> she play?</i></p>`,
    remember: 'he / she / it → <b>-s</b>. Ale po <b>doesn\'t</b> i <b>does</b> końcówka znika: She doesn\'t play.',
    hook: 'Końcówka „s” jest jedna – albo przy czasowniku (plays), albo w „does”. Nigdy w obu naraz.',
    check: { q: 'Uzupełnij: „Ola ___ milk.”', options: ['doesn\'t like', 'don\'t like', 'doesn\'t likes'], answer: 0, explain: 'Ola to „she” – „doesn\'t”, a po nim czasownik bez -s: doesn\'t like.' },
  },
  {
    title: 'Dni, miesiące i małe słówka',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy kafelki: at plus godzina – at seven o'clock, on plus dzień – on Monday, in plus miesiąc – in May. Pod spodem: dni i miesiące wielką literą">
      <rect x="10" y="10" width="120" height="110" rx="12" class="f4 s4"/>
      <rect x="140" y="10" width="120" height="110" rx="12" class="f3 s3"/>
      <rect x="270" y="10" width="120" height="110" rx="12" class="f5 s5"/>
      <text x="70" y="44" class="tx-b" text-anchor="middle">⏰ at</text>
      <text x="200" y="44" class="tx-b" text-anchor="middle">📅 on</text>
      <text x="330" y="44" class="tx-b" text-anchor="middle">🗓️ in</text>
      <text x="70" y="70" class="tx-s" text-anchor="middle">godzina</text>
      <text x="200" y="70" class="tx-s" text-anchor="middle">dzień</text>
      <text x="330" y="70" class="tx-s" text-anchor="middle">miesiąc</text>
      <text x="70" y="100" class="tx" text-anchor="middle">at 7 o'clock</text>
      <text x="200" y="100" class="tx" text-anchor="middle">on Monday</text>
      <text x="330" y="100" class="tx" text-anchor="middle">in May</text>
      <rect x="10" y="134" width="380" height="56" rx="10" class="bg ln"/>
      <text x="200" y="158" class="tx" text-anchor="middle"><tspan class="tx-b t1">M</tspan>onday, <tspan class="tx-b t1">F</tspan>riday, <tspan class="tx-b t1">J</tspan>une – zawsze</text>
      <text x="200" y="180" class="tx" text-anchor="middle">wielką literą!</text>
    </svg>`,
    text: `<p>Dni tygodnia: <b>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</b>. Miesiące: <b>January, February, March…</b> Po angielsku zawsze piszesz je <b>wielką literą</b>.</p>
      <p>Przed godziną stawiasz <b>at</b>, przed dniem – <b>on</b>, przed miesiącem – <b>in</b>: <i>I've got English on Monday at nine o'clock.</i></p>`,
    remember: '<b>at</b> + godzina · <b>on</b> + dzień · <b>in</b> + miesiąc.',
    hook: 'Od najmniejszego do największego: <b>at</b> (godzina) → <b>on</b> (dzień) → <b>in</b> (miesiąc).',
    check: { q: 'Uzupełnij: „We play football ___ Saturday.”', options: ['on', 'in', 'at'], answer: 0, explain: 'Przed dniem tygodnia stawiamy „on”: on Saturday.' },
  },
];

window.LESSONS['angielski/dom-i-szkola'] = [
  {
    title: 'Pokoje w domu',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Przekrój domu z czterema pokojami: bedroom – sypialnia z łóżkiem, bathroom – łazienka z wanną, living room – salon z kanapą, kitchen – kuchnia">
      <path d="M200,10 L380,70 L20,70 Z" class="f2 s2"/>
      <rect x="30" y="70" width="340" height="150" class="bg ln"/>
      <line x1="200" y1="70" x2="200" y2="220" class="ln"/>
      <line x1="30" y1="145" x2="370" y2="145" class="ln"/>
      <g class="f1"><rect x="34" y="74" width="162" height="67"/><rect x="34" y="149" width="162" height="67"/></g>
      <g class="f3"><rect x="204" y="74" width="162" height="67"/><rect x="204" y="149" width="162" height="67"/></g>
      <text x="70" y="114" class="tx-b" style="font-size:26px" text-anchor="middle">🛏️</text>
      <text x="240" y="114" class="tx-b" style="font-size:26px" text-anchor="middle">🛁</text>
      <text x="70" y="189" class="tx-b" style="font-size:26px" text-anchor="middle">🛋️</text>
      <text x="240" y="189" class="tx-b" style="font-size:26px" text-anchor="middle">🍳</text>
      <text x="92" y="102" class="tx-b">bedroom</text>
      <text x="92" y="124" class="tx-s">sypialnia</text>
      <text x="262" y="102" class="tx-b">bathroom</text>
      <text x="262" y="124" class="tx-s">łazienka</text>
      <text x="92" y="177" class="tx-b">living room</text>
      <text x="92" y="199" class="tx-s">salon</text>
      <text x="262" y="177" class="tx-b">kitchen</text>
      <text x="262" y="199" class="tx-s">kuchnia</text>
    </svg>`,
    text: `<p>Dom to <b>house</b>, a mieszkanie w bloku – <b>flat</b>. Śpisz w sypialni – <b>bedroom</b> (bed = łóżko, room = pokój). Myjesz się w łazience – <b>bathroom</b> (bath = wanna).</p>
      <p>W salonie (<b>living room</b>) stoi kanapa – <b>sofa</b>. W kuchni (<b>kitchen</b>) jest lodówka – <b>fridge</b>. Ubrania wieszasz w szafie – <b>wardrobe</b>.</p>`,
    remember: 'bed<b>room</b>, bath<b>room</b>, living <b>room</b> – „room” znaczy pokój.',
    hook: '<b>Bedroom</b> = bed + room = pokój z łóżkiem. Proste jak klocki LEGO 🧱.',
    check: { q: 'Gdzie zwykle stoi lodówka (fridge)?', options: ['in the kitchen', 'in the bathroom', 'in the bedroom'], answer: 0, explain: 'Lodówka stoi w kuchni – in the kitchen.' },
  },
  {
    title: 'There is czy there are?',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Po lewej jeden kot i zdanie There is a cat. Po prawej trzy koty i zdanie There are three cats">
      <rect x="10" y="10" width="185" height="160" rx="12" class="f4 s4"/>
      <rect x="205" y="10" width="185" height="160" rx="12" class="f5 s5"/>
      <text x="102" y="76" class="tx-b" text-anchor="middle" style="font-size:36px">🐈</text>
      <text x="297" y="76" class="tx-b" text-anchor="middle" style="font-size:30px">🐈🐈🐈</text>
      <text x="102" y="112" class="tx-b" text-anchor="middle">There is</text>
      <text x="102" y="132" class="tx" text-anchor="middle">a cat.</text>
      <text x="297" y="112" class="tx-b" text-anchor="middle">There are</text>
      <text x="297" y="132" class="tx" text-anchor="middle">three cats.</text>
      <text x="102" y="158" class="tx-s" text-anchor="middle">jedna rzecz</text>
      <text x="297" y="158" class="tx-s" text-anchor="middle">wiele rzeczy</text>
    </svg>`,
    text: `<p>Gdy mówisz, co gdzieś <b>jest</b>, używasz <b>there is</b> (jedna rzecz) albo <b>there are</b> (wiele rzeczy): <i>There is a bed in my room. There are two chairs.</i></p>
      <p>Przeczenie: <i>There <b>isn't</b> a sofa. There <b>aren't</b> any books.</i> Pytanie: <i><b>Is there</b> a lamp?</i> – <i>Yes, there is. / No, there isn't.</i></p>`,
    remember: '<b>There is</b> + jedna rzecz · <b>There are</b> + wiele rzeczy.',
    hook: '<b>Are</b> ma więcej liter niż <b>is</b> – i jest dla większej liczby rzeczy.',
    check: { q: 'Uzupełnij: „There ___ two windows in my room.”', options: ['are', 'is', 'am'], answer: 0, explain: 'Dwa okna to wiele rzeczy – „There are”.' },
  },
  {
    title: 'Gdzie jest kot? Przyimki miejsca',
    svg: `<svg viewBox="0 0 400 245" role="img" aria-label="Sześć obrazków z pudełkiem i kotem: kot w pudełku – in, na pudełku – on, pod stołem – under, obok pudełka – next to, za pudełkiem – behind, przed pudełkiem – in front of">
      <text x="65" y="80" class="tx-b" text-anchor="middle" style="font-size:30px">🐈</text>
      <rect x="30" y="66" width="70" height="29" class="f4 s4"/>
      <rect x="165" y="55" width="70" height="40" class="f4 s4"/>
      <text x="200" y="55" class="tx-b" text-anchor="middle" style="font-size:30px">🐈</text>
      <rect x="285" y="20" width="100" height="8" rx="2" class="f2 s2"/>
      <rect x="290" y="28" width="6" height="67" class="f2 s2"/>
      <rect x="374" y="28" width="6" height="67" class="f2 s2"/>
      <text x="335" y="92" class="tx-b" text-anchor="middle" style="font-size:30px">🐈</text>
      <line x1="10" y1="95" x2="390" y2="95" class="ln-thin"/>
      <text x="65" y="118" class="tx-b" text-anchor="middle">in</text>
      <text x="200" y="118" class="tx-b" text-anchor="middle">on</text>
      <text x="335" y="118" class="tx-b" text-anchor="middle">under</text>
      <text x="42" y="208" class="tx-b" text-anchor="middle" style="font-size:30px">🐈</text>
      <rect x="64" y="168" width="66" height="42" class="f4 s4"/>
      <text x="200" y="184" class="tx-b" text-anchor="middle" style="font-size:30px">🐈</text>
      <rect x="165" y="170" width="70" height="40" class="f4 s4"/>
      <rect x="300" y="150" width="70" height="44" class="f4 s4"/>
      <text x="335" y="210" class="tx-b" text-anchor="middle" style="font-size:30px">🐈</text>
      <line x1="10" y1="210" x2="390" y2="210" class="ln-thin"/>
      <text x="80" y="236" class="tx-b" text-anchor="middle">next to</text>
      <text x="200" y="236" class="tx-b" text-anchor="middle">behind</text>
      <text x="335" y="236" class="tx-b" text-anchor="middle">in front of</text>
    </svg>`,
    text: `<p>Przyimki mówią, <b>gdzie</b> coś jest: <b>in</b> – w, <b>on</b> – na, <b>under</b> – pod, <b>next to</b> – obok, <b>behind</b> – za, <b>in front of</b> – przed.</p>
      <p>Przykład: <i>My schoolbag is <b>under</b> the desk.</i> – Mój plecak jest pod biurkiem. <i>The lamp is <b>next to</b> the bed.</i> – Lampa jest obok łóżka.</p>`,
    remember: 'in – w · on – na · under – pod · next to – obok · behind – za · in front of – przed.',
    hook: '<b>Behind</b> – „bihajnd”, jak kot, który się <b>chowa</b> za pudełkiem 🙈.',
    check: { q: 'Plecak leży pod biurkiem. „The bag is ___ the desk.”', options: ['under', 'on', 'behind'], answer: 0, explain: 'Pod biurkiem – „under the desk”.' },
  },
  {
    title: 'Przedmioty szkolne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Osiem kafelków z przedmiotami: Polish, maths, English, science, history, art, music, PE">
      <g class="f1 s1">
        <rect x="8" y="10" width="90" height="85" rx="10"/><rect x="106" y="10" width="90" height="85" rx="10"/><rect x="204" y="10" width="90" height="85" rx="10"/><rect x="302" y="10" width="90" height="85" rx="10"/>
        <rect x="8" y="105" width="90" height="85" rx="10"/><rect x="106" y="105" width="90" height="85" rx="10"/><rect x="204" y="105" width="90" height="85" rx="10"/><rect x="302" y="105" width="90" height="85" rx="10"/>
      </g>
      <text x="53" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">📖</text>
      <text x="151" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">➗</text>
      <text x="249" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🇬🇧</text>
      <text x="347" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🌿</text>
      <text x="53" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🏰</text>
      <text x="151" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🎨</text>
      <text x="249" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🎵</text>
      <text x="347" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">⚽</text>
      <text x="53" y="66" class="tx-b" text-anchor="middle">Polish</text>
      <text x="151" y="66" class="tx-b" text-anchor="middle">maths</text>
      <text x="249" y="66" class="tx-b" text-anchor="middle">English</text>
      <text x="347" y="66" class="tx-b" text-anchor="middle">science</text>
      <text x="53" y="161" class="tx-b" text-anchor="middle">history</text>
      <text x="151" y="161" class="tx-b" text-anchor="middle">art</text>
      <text x="249" y="161" class="tx-b" text-anchor="middle">music</text>
      <text x="347" y="161" class="tx-b" text-anchor="middle">PE</text>
      <text x="53" y="85" class="tx-s" text-anchor="middle">polski</text>
      <text x="151" y="85" class="tx-s" text-anchor="middle">matematyka</text>
      <text x="249" y="85" class="tx-s" text-anchor="middle">angielski</text>
      <text x="347" y="85" class="tx-s" text-anchor="middle">przyroda</text>
      <text x="53" y="180" class="tx-s" text-anchor="middle">historia</text>
      <text x="151" y="180" class="tx-s" text-anchor="middle">plastyka</text>
      <text x="249" y="180" class="tx-s" text-anchor="middle">muzyka</text>
      <text x="347" y="180" class="tx-s" text-anchor="middle">WF</text>
    </svg>`,
    text: `<p>Przyroda po angielsku to <b>science</b>, plastyka – <b>art</b>, a wychowanie fizyczne – <b>PE</b>. Nazwy języków piszesz wielką literą: <b>Polish</b>, <b>English</b>.</p>
      <p>Możesz powiedzieć: <i>My favourite subject is art.</i> – Mój ulubiony przedmiot to plastyka. <i>I've got maths on Monday.</i> – W poniedziałek mam matematykę.</p>`,
    remember: 'Języki zawsze wielką literą: <b>E</b>nglish, <b>P</b>olish.',
    hook: '<b>Art</b> – jak „artysta” 🎨. <b>Music</b> – jak „muzyka” 🎵. Wiele słów podpowiada się samo!',
  },
  {
    title: 'Piórnik i pułapki',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przybory: pen – długopis, pencil – ołówek, rubber – gumka, ruler – linijka. Pułapki: library to biblioteka, a nie księgarnia; rubber to gumka">
      <rect x="10" y="10" width="380" height="90" rx="40" class="f5 s5"/>
      <text x="62" y="48" class="tx-b" style="font-size:26px" text-anchor="middle">🖊️</text>
      <text x="154" y="48" class="tx-b" style="font-size:26px" text-anchor="middle">✏️</text>
      <text x="246" y="48" class="tx-b" style="font-size:26px" text-anchor="middle">🧽</text>
      <text x="338" y="48" class="tx-b" style="font-size:26px" text-anchor="middle">📏</text>
      <text x="62" y="72" class="tx-b" text-anchor="middle">pen</text>
      <text x="154" y="72" class="tx-b" text-anchor="middle">pencil</text>
      <text x="246" y="72" class="tx-b" text-anchor="middle">rubber</text>
      <text x="338" y="72" class="tx-b" text-anchor="middle">ruler</text>
      <text x="62" y="90" class="tx-s" text-anchor="middle">długopis</text>
      <text x="154" y="90" class="tx-s" text-anchor="middle">ołówek</text>
      <text x="246" y="90" class="tx-s" text-anchor="middle">gumka</text>
      <text x="338" y="90" class="tx-s" text-anchor="middle">linijka</text>
      <rect x="10" y="114" width="380" height="40" rx="10" class="f3 s3"/>
      <rect x="10" y="162" width="380" height="40" rx="10" class="f2 s2"/>
      <text x="24" y="140" class="tx">✅ <tspan class="tx-b">library</tspan> = biblioteka</text>
      <text x="24" y="188" class="tx">❌ <tspan class="tx-b">library</tspan> ≠ księgarnia (bookshop)</text>
    </svg>`,
    text: `<p>W piórniku (<b>pencil case</b>) masz: <b>pen</b> (długopis), <b>pencil</b> (ołówek), <b>rubber</b> (gumka) i <b>ruler</b> (linijka). Przydają się też <b>scissors</b> (nożyczki) i <b>glue</b> (klej).</p>
      <p>Uważaj na słowa, które brzmią podobnie do polskich, a znaczą coś innego. <b>Library</b> to biblioteka, nie księgarnia. Księgarnia to <b>bookshop</b>.</p>`,
    remember: '<b>rubber</b> – gumka, <b>ruler</b> – linijka, <b>library</b> – biblioteka.',
    hook: '<b>Rubber</b> – od słowa „rub” (trzeć): gumką ścierasz błędy. <b>Ruler</b> – od „rule” (rządzić): linijka rządzi prostymi liniami 📏.',
    check: { q: 'Gdzie wypożyczysz książkę za darmo?', options: ['in the library', 'in the bookshop', 'in the kitchen'], answer: 0, explain: 'Książki wypożyczamy w bibliotece – library. W bookshop (księgarni) się je kupuje.' },
  },
];

window.LESSONS['angielski/jedzenie-i-zakupy'] = [
  {
    title: 'Co jemy? – food',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Osiem kafelków z jedzeniem: bread – chleb, cheese – ser, egg – jajko, milk – mleko, apple – jabłko, banana – banan, tomato – pomidor, carrot – marchewka">
      <g class="f4 s4">
        <rect x="8" y="10" width="90" height="85" rx="10"/><rect x="106" y="10" width="90" height="85" rx="10"/><rect x="204" y="10" width="90" height="85" rx="10"/><rect x="302" y="10" width="90" height="85" rx="10"/>
      </g>
      <g class="f3 s3">
        <rect x="8" y="105" width="90" height="85" rx="10"/><rect x="106" y="105" width="90" height="85" rx="10"/><rect x="204" y="105" width="90" height="85" rx="10"/><rect x="302" y="105" width="90" height="85" rx="10"/>
      </g>
      <text x="53" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🍞</text>
      <text x="151" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🧀</text>
      <text x="249" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🥚</text>
      <text x="347" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🥛</text>
      <text x="53" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🍎</text>
      <text x="151" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🍌</text>
      <text x="249" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🍅</text>
      <text x="347" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🥕</text>
      <text x="53" y="66" class="tx-b" text-anchor="middle">bread</text>
      <text x="151" y="66" class="tx-b" text-anchor="middle">cheese</text>
      <text x="249" y="66" class="tx-b" text-anchor="middle">egg</text>
      <text x="347" y="66" class="tx-b" text-anchor="middle">milk</text>
      <text x="53" y="161" class="tx-b" text-anchor="middle">apple</text>
      <text x="151" y="161" class="tx-b" text-anchor="middle">banana</text>
      <text x="249" y="161" class="tx-b" text-anchor="middle">tomato</text>
      <text x="347" y="161" class="tx-b" text-anchor="middle">carrot</text>
      <text x="53" y="85" class="tx-s" text-anchor="middle">chleb</text>
      <text x="151" y="85" class="tx-s" text-anchor="middle">ser</text>
      <text x="249" y="85" class="tx-s" text-anchor="middle">jajko</text>
      <text x="347" y="85" class="tx-s" text-anchor="middle">mleko</text>
      <text x="53" y="180" class="tx-s" text-anchor="middle">jabłko</text>
      <text x="151" y="180" class="tx-s" text-anchor="middle">banan</text>
      <text x="249" y="180" class="tx-s" text-anchor="middle">pomidor</text>
      <text x="347" y="180" class="tx-s" text-anchor="middle">marchewka</text>
    </svg>`,
    text: `<p>Na śniadanie (<b>breakfast</b>) możesz zjeść <b>bread</b> (chleb) z <b>butter</b> (masłem) i <b>cheese</b> (serem) albo <b>egg</b> (jajko). Do picia: <b>milk</b>, <b>juice</b> (sok), <b>tea</b> albo <b>water</b>.</p>
      <p>O tym, co lubisz, mówisz: <i>I <b>like</b> bananas.</i> – Lubię banany. Czego nie lubisz: <i>I <b>don't like</b> carrots.</i></p>`,
    remember: '<b>I like…</b> – lubię… · <b>I don\'t like…</b> – nie lubię…',
    hook: '<b>Banana</b>, <b>tomato</b> – brzmią prawie jak po polsku. Zacznij od nich!',
    check: { q: 'Co znaczy „cheese”?', options: ['ser', 'masło', 'chleb'], answer: 0, explain: '„Cheese” to ser. Masło to „butter”, chleb – „bread”.' },
  },
  {
    title: '„a” czy „an”?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwa koszyki. Koszyk an: apple, egg, orange – słowa zaczynające się od samogłoski. Koszyk a: banana, tomato, sandwich">
      <path d="M20,60 L180,60 L165,180 L35,180 Z" class="f1 s1"/>
      <path d="M220,60 L380,60 L365,180 L235,180 Z" class="f2 s2"/>
      <text x="100" y="40" class="tx-b" text-anchor="middle">an</text>
      <text x="300" y="40" class="tx-b" text-anchor="middle">a</text>
      <text x="100" y="95" class="tx" text-anchor="middle">🍎 an <tspan class="tx-b t1">a</tspan>pple</text>
      <text x="100" y="125" class="tx" text-anchor="middle">🥚 an <tspan class="tx-b t1">e</tspan>gg</text>
      <text x="100" y="155" class="tx" text-anchor="middle">🍊 an <tspan class="tx-b t1">o</tspan>range</text>
      <text x="300" y="95" class="tx" text-anchor="middle">🍌 a <tspan class="tx-b t2">b</tspan>anana</text>
      <text x="300" y="125" class="tx" text-anchor="middle">🍅 a <tspan class="tx-b t2">t</tspan>omato</text>
      <text x="300" y="155" class="tx" text-anchor="middle">🥪 a <tspan class="tx-b t2">s</tspan>andwich</text>
      <text x="100" y="198" class="tx-s" text-anchor="middle">samogłoska: a, e, i, o, u</text>
      <text x="300" y="198" class="tx-s" text-anchor="middle">pozostałe głoski</text>
    </svg>`,
    text: `<p>Przed jedną rzeczą stawiasz <b>a</b> albo <b>an</b> (znaczy mniej więcej „jakiś, jeden”). <b>An</b> – gdy słowo zaczyna się od samogłoski w wymowie: <i>an apple, an egg, an orange</i>.</p>
      <p><b>A</b> – w pozostałych przypadkach: <i>a banana, a tomato, a sandwich</i>.</p>`,
    remember: '<b>an</b> + samogłoska (an apple) · <b>a</b> + reszta (a banana).',
    hook: '„A apple” trudno powiedzieć – dwa „a” się zderzają. Literka <b>n</b> to mostek: an‿apple.',
    check: { q: 'Uzupełnij: „I\'d like ___ orange, please.”', options: ['an', 'a'], answer: 0, explain: '„Orange” zaczyna się od samogłoski „o”, więc „an orange”.' },
  },
  {
    title: 'Jedno – dużo: liczba mnoga',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Reguły liczby mnogiej: apple – apples, tomato – tomatoes, strawberry – strawberries. Wyjątki: child – children, tooth – teeth, mouse – mice">
      <defs><marker id="a-k4en-jedz-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="185" height="210" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="210" rx="12" class="f2 s2 sw"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">reguły</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">wyjątki</text>
      <text x="22" y="80" class="tx">apple</text><text x="22" y="140" class="tx">tomato</text><text x="22" y="200" class="tx">berry</text>
      <text x="22" y="100" class="tx-b t3">apples</text><text x="22" y="160" class="tx-b t3">tomatoes</text>
      <text x="120" y="80" class="tx-s">+s</text><text x="120" y="140" class="tx-s">+es</text>
      <text x="96" y="200" class="tx">→ <tspan class="tx-b t3">berries</tspan></text>
      <text x="217" y="80" class="tx">child</text><text x="217" y="140" class="tx">tooth</text><text x="217" y="200" class="tx">mouse</text>
      <g class="ln s2">
        <line x1="268" y1="75" x2="294" y2="75" marker-end="url(#a-k4en-jedz-3)"/>
        <line x1="268" y1="135" x2="294" y2="135" marker-end="url(#a-k4en-jedz-3)"/>
        <line x1="276" y1="195" x2="302" y2="195" marker-end="url(#a-k4en-jedz-3)"/>
      </g>
      <text x="300" y="80" class="tx-b t2">children</text><text x="300" y="140" class="tx-b t2">teeth</text><text x="308" y="200" class="tx-b t2">mice</text>
    </svg>`,
    text: `<p>Liczbę mnogą robisz zwykle przez dodanie <b>-s</b>: <i>apple → apples</i>. Niektóre słowa na <b>-o</b> dostają <b>-es</b>: <i>tomato → tomatoes, potato → potatoes</i>. Gdy na końcu jest spółgłoska i <b>y</b>, zmieniasz je na <b>-ies</b>: <i>strawberry → strawberries</i>.</p>
      <p>Kilka słów to <b>wyjątki</b> – trzeba je zapamiętać: <i>child → children, man → men, woman → women, foot → feet, tooth → teeth, mouse → mice</i>.</p>`,
    remember: 'Zwykle <b>+s</b>. Wyjątki: children, men, women, feet, teeth, mice.',
    hook: 'Foot – feet, tooth – teeth: „oo” zamienia się w „ee”, jakby stopy i zęby się rozmnożyły 👣🦷.',
    check: { q: 'Jak będzie liczba mnoga od „woman”?', options: ['women', 'womans', 'womens'], answer: 0, explain: 'To wyjątek: one woman – two women. Podobnie man – men.' },
  },
  {
    title: 'W sklepie',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Rozmowa w sklepie. Sprzedawca: Can I help you? Klient: I'd like an apple, please. How much is it? Sprzedawca: It's 50p. Here you are. Klient: Thank you!">
      <rect x="10" y="10" width="220" height="40" rx="12" class="f1 s1"/>
      <rect x="120" y="60" width="270" height="64" rx="12" class="f3 s3"/>
      <rect x="10" y="134" width="220" height="40" rx="12" class="f1 s1"/>
      <rect x="230" y="184" width="160" height="40" rx="12" class="f3 s3"/>
      <text x="22" y="36" class="tx">🧑‍🍳 Can I help you?</text>
      <text x="132" y="86" class="tx">🙂 I'd like an apple, please.</text>
      <text x="132" y="112" class="tx">How much is it?</text>
      <text x="22" y="160" class="tx">🧑‍🍳 It's 50p. Here you are.</text>
      <text x="242" y="210" class="tx">🙂 Thank you!</text>
    </svg>`,
    text: `<p>Sprzedawca pyta: <b>Can I help you?</b> – W czym mogę pomóc? Ty grzecznie prosisz: <b>I'd like…, please.</b> albo <b>Can I have…, please?</b></p>
      <p>O cenę pytasz: <b>How much is it?</b> – Ile to kosztuje? Gdy sprzedawca coś ci podaje, mówi: <b>Here you are.</b> (Proszę.) A ty odpowiadasz: <b>Thank you!</b></p>`,
    remember: '<b>I\'d like…, please.</b> – grzeczna prośba. <b>How much is it?</b> – Ile to kosztuje?',
    hook: '<b>I\'d like</b> to „chciał(a)bym” – brzmi milej niż „I want” (chcę). Zawsze dodaj <b>please</b>!',
    check: { q: 'Co znaczy „How much is it?”', options: ['Ile to kosztuje?', 'Ile masz lat?', 'Która godzina?'], answer: 0, explain: '„How much is it?” to pytanie o cenę. O wiek pytamy „How old are you?”.' },
  },
  {
    title: 'Ubrania i kolory',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sześć ubrań: T-shirt – koszulka, jumper – sweter, jeans – dżinsy, dress – sukienka, socks – skarpetki, shoes – buty. Pod spodem kolory: blue, orange, green, yellow, purple">
      <g class="bg ln">
        <rect x="10" y="10" width="120" height="70" rx="10"/><rect x="140" y="10" width="120" height="70" rx="10"/><rect x="270" y="10" width="120" height="70" rx="10"/>
        <rect x="10" y="88" width="120" height="70" rx="10"/><rect x="140" y="88" width="120" height="70" rx="10"/><rect x="270" y="88" width="120" height="70" rx="10"/>
      </g>
      <text x="40" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">👕</text>
      <text x="170" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">🧶</text>
      <text x="300" y="52" class="tx-b" style="font-size:26px" text-anchor="middle">👖</text>
      <text x="40" y="130" class="tx-b" style="font-size:26px" text-anchor="middle">👗</text>
      <text x="170" y="130" class="tx-b" style="font-size:26px" text-anchor="middle">🧦</text>
      <text x="300" y="130" class="tx-b" style="font-size:26px" text-anchor="middle">👟</text>
      <text x="60" y="42" class="tx-b">T-shirt</text><text x="60" y="64" class="tx-s">koszulka</text>
      <text x="190" y="42" class="tx-b">jumper</text><text x="190" y="64" class="tx-s">sweter</text>
      <text x="320" y="42" class="tx-b">jeans</text><text x="320" y="64" class="tx-s">dżinsy</text>
      <text x="60" y="120" class="tx-b">dress</text><text x="60" y="142" class="tx-s">sukienka</text>
      <text x="190" y="120" class="tx-b">socks</text><text x="190" y="142" class="tx-s">skarpetki</text>
      <text x="320" y="120" class="tx-b">shoes</text><text x="320" y="142" class="tx-s">buty</text>
      <circle cx="25" cy="180" r="12" class="f1 s1"/><text x="41" y="185" class="tx-s">blue</text>
      <circle cx="95" cy="180" r="12" class="f2 s2"/><text x="111" y="185" class="tx-s">orange</text>
      <circle cx="175" cy="180" r="12" class="f3 s3"/><text x="191" y="185" class="tx-s">green</text>
      <circle cx="250" cy="180" r="12" class="f4 s4"/><text x="266" y="185" class="tx-s">yellow</text>
      <circle cx="322" cy="180" r="12" class="f5 s5"/><text x="338" y="185" class="tx-s">purple</text>
    </svg>`,
    text: `<p>Ubrania to <b>clothes</b>. Sweter to <b>jumper</b>, spodnie – <b>trousers</b>, spódnica – <b>skirt</b>, kurtka – <b>jacket</b>. Kolory (<b>colours</b>) stawiasz przed ubraniem: <i>a red T-shirt</i> – czerwona koszulka.</p>
      <p>Uwaga: <b>trousers</b> i <b>jeans</b> to zawsze liczba mnoga: <i>My jeans <b>are</b> blue.</i> – Moje dżinsy są niebieskie.</p>`,
    remember: 'Kolor <b>przed</b> ubraniem: a <b>green</b> jumper. Jeans / trousers → <b>are</b>.',
    hook: 'Dżinsy mają dwie nogawki – łatwo zapamiętać, że po angielsku to liczba mnoga 👖.',
    check: { q: 'Uzupełnij: „My trousers ___ black.”', options: ['are', 'is', 'am'], answer: 0, explain: '„Trousers” to zawsze liczba mnoga, więc „are”.' },
  },
];

window.LESSONS['angielski/przyroda-sport-zdrowie'] = [
  {
    title: 'Zwierzęta – animals',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Osiem kafelków ze zwierzętami: cow – krowa, pig – świnia, sheep – owca, horse – koń, hen – kura, rabbit – królik, elephant – słoń, monkey – małpa">
      <g class="f3 s3">
        <rect x="8" y="10" width="90" height="85" rx="10"/><rect x="106" y="10" width="90" height="85" rx="10"/><rect x="204" y="10" width="90" height="85" rx="10"/><rect x="302" y="10" width="90" height="85" rx="10"/>
        <rect x="8" y="105" width="90" height="85" rx="10"/><rect x="106" y="105" width="90" height="85" rx="10"/>
      </g>
      <g class="f4 s4"><rect x="204" y="105" width="90" height="85" rx="10"/><rect x="302" y="105" width="90" height="85" rx="10"/></g>
      <text x="53" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🐄</text>
      <text x="151" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🐖</text>
      <text x="249" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🐑</text>
      <text x="347" y="40" class="tx-b" style="font-size:26px" text-anchor="middle">🐎</text>
      <text x="53" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🐔</text>
      <text x="151" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🐇</text>
      <text x="249" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🐘</text>
      <text x="347" y="135" class="tx-b" style="font-size:26px" text-anchor="middle">🐒</text>
      <text x="53" y="66" class="tx-b" text-anchor="middle">cow</text>
      <text x="151" y="66" class="tx-b" text-anchor="middle">pig</text>
      <text x="249" y="66" class="tx-b" text-anchor="middle">sheep</text>
      <text x="347" y="66" class="tx-b" text-anchor="middle">horse</text>
      <text x="53" y="161" class="tx-b" text-anchor="middle">hen</text>
      <text x="151" y="161" class="tx-b" text-anchor="middle">rabbit</text>
      <text x="249" y="161" class="tx-b" text-anchor="middle">elephant</text>
      <text x="347" y="161" class="tx-b" text-anchor="middle">monkey</text>
      <text x="53" y="85" class="tx-s" text-anchor="middle">krowa</text>
      <text x="151" y="85" class="tx-s" text-anchor="middle">świnia</text>
      <text x="249" y="85" class="tx-s" text-anchor="middle">owca</text>
      <text x="347" y="85" class="tx-s" text-anchor="middle">koń</text>
      <text x="53" y="180" class="tx-s" text-anchor="middle">kura</text>
      <text x="151" y="180" class="tx-s" text-anchor="middle">królik</text>
      <text x="249" y="180" class="tx-s" text-anchor="middle">słoń</text>
      <text x="347" y="180" class="tx-s" text-anchor="middle">małpa</text>
    </svg>`,
    text: `<p>Na wsi spotkasz <b>cow</b> (krowę), <b>pig</b> (świnię), <b>sheep</b> (owcę), <b>horse</b> (konia) i <b>hen</b> (kurę). W zoo – <b>elephant</b> (słonia) i <b>monkey</b> (małpę).</p>
      <p>Masz zwierzę w domu? Powiedz: <i>I've got a rabbit.</i> – Mam królika. Uwaga: <b>sheep</b> w liczbie mnogiej się nie zmienia: <i>one sheep, two sheep</i>.</p>`,
    remember: 'one sheep – two <b>sheep</b> · one mouse – two <b>mice</b>.',
    hook: 'Wyobraź sobie stado owiec – wszystkie wyglądają tak samo, tak jak słowo „sheep” w liczbie pojedynczej i mnogiej 🐑🐑.',
    check: { q: 'Co znaczy „horse”?', options: ['koń', 'krowa', 'kura'], answer: 0, explain: '„Horse” to koń. Krowa to „cow”, kura – „hen”.' },
  },
  {
    title: 'Pogoda i pory roku',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Cztery pory roku: spring – wiosna, summer – lato, autumn – jesień, winter – zima. Przy każdej pogoda: rainy, sunny, windy, snowy">
      <rect x="10" y="10" width="185" height="95" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="95" rx="12" class="f4 s4"/>
      <rect x="10" y="115" width="185" height="95" rx="12" class="f2 s2"/>
      <rect x="205" y="115" width="185" height="95" rx="12" class="f1 s1"/>
      <text x="40" y="54" class="tx-b" style="font-size:26px" text-anchor="middle">🌷</text>
      <text x="235" y="54" class="tx-b" style="font-size:26px" text-anchor="middle">☀️</text>
      <text x="40" y="159" class="tx-b" style="font-size:26px" text-anchor="middle">🍂</text>
      <text x="235" y="159" class="tx-b" style="font-size:26px" text-anchor="middle">❄️</text>
      <text x="64" y="44" class="tx-b">spring</text><text x="64" y="64" class="tx-s">wiosna</text>
      <text x="259" y="44" class="tx-b">summer</text><text x="259" y="64" class="tx-s">lato</text>
      <text x="64" y="149" class="tx-b">autumn</text><text x="64" y="169" class="tx-s">jesień</text>
      <text x="259" y="149" class="tx-b">winter</text><text x="259" y="169" class="tx-s">zima</text>
      <text x="64" y="92" class="tx">🌧️ It's rainy.</text>
      <text x="259" y="92" class="tx">It's sunny.</text>
      <text x="64" y="197" class="tx">💨 It's windy.</text>
      <text x="259" y="197" class="tx">It's snowy.</text>
    </svg>`,
    text: `<p>O pogodę pytasz: <b>What's the weather like?</b> – Jaka jest pogoda? Odpowiadasz: <i>It's sunny</i> (słonecznie), <i>cloudy</i> (pochmurno), <i>rainy</i> (deszczowo), <i>windy</i> (wietrznie), <i>snowy</i> (śnieżnie). Albo: <i>It's hot / cold</i> – jest gorąco / zimno.</p>
      <p>Pory roku to <b>spring</b>, <b>summer</b>, <b>autumn</b> i <b>winter</b>.</p>`,
    remember: '<b>It\'s</b> + pogoda: sun → sunn<b>y</b>, rain → rain<b>y</b>, wind → wind<b>y</b>, snow → snow<b>y</b>.',
    hook: 'Słońce, deszcz, wiatr, śnieg + literka <b>y</b> = pogoda: sun<b>ny</b>, rain<b>y</b>…',
    check: { q: 'Wieje mocny wiatr i drzewa się kołyszą. Jaka jest pogoda?', options: ['It\'s windy.', 'It\'s sunny.', 'It\'s snowy.'], answer: 0, explain: '„Wind” to wiatr, „windy” – wietrznie.' },
  },
  {
    title: 'Sport: play czy go?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie kolumny. Play z grami z piłką lub rakietą: football, basketball, tennis. Go ze sportami na -ing: swimming, cycling, skiing">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f3 s3"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">play</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">go</text>
      <text x="102" y="60" class="tx-s" text-anchor="middle">piłka, rakieta</text>
      <text x="297" y="60" class="tx-s" text-anchor="middle">końcówka -ing</text>
      <text x="30" y="96" class="tx">⚽ football</text>
      <text x="30" y="130" class="tx">🏀 basketball</text>
      <text x="30" y="164" class="tx">🎾 tennis</text>
      <text x="225" y="96" class="tx">🏊 swim<tspan class="tx-b t3">ming</tspan></text>
      <text x="225" y="130" class="tx">🚴 cycl<tspan class="tx-b t3">ing</tspan></text>
      <text x="225" y="164" class="tx">⛷️ ski<tspan class="tx-b t3">ing</tspan></text>
    </svg>`,
    text: `<p>Z grami, w których jest piłka albo rakieta, łączysz słowo <b>play</b>: <i>I play football. We play tennis.</i></p>
      <p>Ze sportami, które kończą się na <b>-ing</b>, łączysz <b>go</b>: <i>I go swimming</i> (chodzę pływać), <i>go cycling</i> (jeżdżę na rowerze), <i>go skiing</i> (jeżdżę na nartach).</p>`,
    remember: '<b>play</b> + gra z piłką lub rakietą · <b>go</b> + sport na <b>-ing</b>.',
    hook: 'Piłką się <b>gra</b> (play), a na basen się <b>idzie</b> (go) 🏊.',
    check: { q: 'Uzupełnij: „In winter I ___ skiing.”', options: ['go', 'play', 'ride'], answer: 0, explain: '„Skiing” kończy się na -ing, więc „go skiing”.' },
  },
  {
    title: 'Ciało i „co cię boli?”',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Postać człowieka z podpisami: head – głowa, arm – ręka, hand – dłoń, leg – noga, foot – stopa. Obok: headache – ból głowy, toothache – ból zęba, stomachache – ból brzucha">
      <defs><marker id="a-k4en-prz-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="110" cy="40" r="24" class="f4 s4"/>
      <rect x="88" y="68" width="44" height="70" rx="10" class="f1 s1"/>
      <path d="M88,76 L60,124" class="ln sw"/><path d="M132,76 L160,124" class="ln sw"/>
      <circle cx="58" cy="128" r="7" class="f4 s4"/>
      <path d="M98,138 L94,196" class="ln sw"/><path d="M122,138 L126,196" class="ln sw"/>
      <path d="M94,196 L78,200" class="ln sw"/>
      <g class="ln s2">
        <line x1="20" y1="30" x2="84" y2="38" marker-end="url(#a-k4en-prz-4)"/>
        <line x1="190" y1="90" x2="150" y2="102" marker-end="url(#a-k4en-prz-4)"/>
        <line x1="20" y1="150" x2="52" y2="132" marker-end="url(#a-k4en-prz-4)"/>
        <line x1="190" y1="170" x2="128" y2="170" marker-end="url(#a-k4en-prz-4)"/>
        <line x1="20" y1="214" x2="74" y2="202" marker-end="url(#a-k4en-prz-4)"/>
      </g>
      <text x="10" y="22" class="tx-b">head</text>
      <text x="168" y="84" class="tx-b">arm</text>
      <text x="10" y="168" class="tx-b">hand</text>
      <text x="168" y="164" class="tx-b">leg</text>
      <text x="10" y="228" class="tx-b">foot</text>
      <rect x="226" y="20" width="166" height="190" rx="12" class="f2 s2"/>
      <text x="309" y="48" class="tx-b" text-anchor="middle">-ache = ból</text>
      <text x="240" y="86" class="tx">🤕 head<tspan class="tx-b t2">ache</tspan></text>
      <text x="240" y="104" class="tx-s">ból głowy</text>
      <text x="240" y="136" class="tx">🦷 tooth<tspan class="tx-b t2">ache</tspan></text>
      <text x="240" y="154" class="tx-s">ból zęba</text>
      <text x="240" y="186" class="tx">stomach<tspan class="tx-b t2">ache</tspan></text>
      <text x="240" y="204" class="tx-s">ból brzucha</text>
    </svg>`,
    text: `<p>Części ciała: <b>head</b> (głowa), <b>arm</b> (ręka), <b>hand</b> (dłoń), <b>leg</b> (noga), <b>foot</b> (stopa), a także <b>eye</b> (oko), <b>ear</b> (ucho), <b>nose</b> (nos), <b>mouth</b> (usta).</p>
      <p>Gdy ktoś źle wygląda, pytasz: <b>What's the matter?</b> – Co ci jest? On odpowiada: <i>I've got a headache.</i> – Boli mnie głowa. Możesz doradzić: <i>Go to the doctor.</i> – Idź do lekarza.</p>`,
    remember: 'część ciała + <b>-ache</b> = ból: headache, toothache, stomachache.',
    hook: '<b>-ache</b> czytamy „ejk” – jak jęk „ej!”, kiedy coś boli 🤕.',
    check: { q: 'Co znaczy „I\'ve got a stomachache”?', options: ['Boli mnie brzuch.', 'Boli mnie głowa.', 'Boli mnie ząb.'], answer: 0, explain: '„Stomach” to brzuch (żołądek), „ache” to ból.' },
  },
  {
    title: 'Polecenia i zakazy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Zielona tablica z poleceniami: Open your books, Sit down, Listen. Czerwona tablica z zakazami: Don't run, Don't touch. Na dole: Be careful – uważaj">
      <rect x="10" y="10" width="185" height="140" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="140" rx="12" class="f2 s2 sw"/>
      <text x="102" y="38" class="tx-b" text-anchor="middle">✅ polecenia</text>
      <text x="297" y="38" class="tx-b" text-anchor="middle">⛔ zakazy</text>
      <text x="24" y="72" class="tx">📖 Open your books.</text>
      <text x="24" y="104" class="tx">🪑 Sit down.</text>
      <text x="24" y="136" class="tx">👂 Listen.</text>
      <text x="219" y="72" class="tx">🏃 <tspan class="tx-b">Don't</tspan> run!</text>
      <text x="219" y="104" class="tx">✋ <tspan class="tx-b">Don't</tspan> touch!</text>
      <text x="219" y="136" class="tx">🍬 <tspan class="tx-b">Don't</tspan> eat!</text>
      <rect x="80" y="162" width="240" height="40" rx="10" class="f4 s4"/>
      <text x="200" y="188" class="tx-b" text-anchor="middle">⚠️ Be careful! – Uważaj!</text>
    </svg>`,
    text: `<p>Polecenie zaczynasz od czasownika: <i><b>Open</b> your books.</i> (Otwórzcie książki.) <i><b>Close</b> the door.</i> (Zamknij drzwi.) <i><b>Sit</b> down.</i> (Usiądź.) <i><b>Stand</b> up.</i> (Wstań.)</p>
      <p>Zakaz to <b>Don't</b> + czasownik: <i>Don't run!</i> (Nie biegaj!) <i>Don't touch!</i> (Nie dotykaj!). Gdy ostrzegasz, mówisz: <b>Be careful!</b> – Uważaj!</p>`,
    remember: 'Polecenie: czasownik na początku (<b>Open…</b>). Zakaz: <b>Don\'t</b> + czasownik.',
    hook: '<b>Don\'t</b> to jak czerwone światło 🚦 – stop, nie rób tego!',
    check: { q: 'Nauczycielka mówi: „Stand up, please.” Co robisz?', options: ['wstaję', 'siadam', 'otwieram książkę'], answer: 0, explain: '„Stand up” to wstań. Usiądź to „sit down”.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['angielski/kraje-i-pytania'] = [
  {
    title: 'Skąd jesteś? – Where are you from?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwa dymki rozmowy. Pytanie: Where are you from? – Skąd jesteś? Odpowiedź: I'm from Poland. I'm Polish. Pod spodem: from plus kraj, I'm plus narodowość.">
      <defs><marker id="a-k4en-kr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="230" height="62" rx="16" class="f1 s1"/>
      <text x="125" y="38" class="tx-b" text-anchor="middle">Where are you from?</text>
      <text x="125" y="60" class="tx-s" text-anchor="middle">Skąd jesteś?</text>
      <path d="M200,76 C230,90 250,92 270,96" class="ln s2" marker-end="url(#a-k4en-kr-1)"/>
      <rect x="160" y="96" width="230" height="62" rx="16" class="f3 s3"/>
      <text x="275" y="124" class="tx-b" text-anchor="middle">I'm from Poland.</text>
      <text x="275" y="148" class="tx-b" text-anchor="middle">I'm Polish.</text>
      <text x="80" y="122" class="tx-b" style="font-size:34px" text-anchor="middle">🌍</text>
      <text x="100" y="186" class="tx" text-anchor="middle">from + <tspan class="t1">kraj</tspan></text>
      <text x="290" y="186" class="tx" text-anchor="middle">I'm + <tspan class="t3">narodowość</tspan></text>
      <text x="200" y="206" class="tx-s" text-anchor="middle">jedno i drugie – wielką literą</text>
    </svg>`,
    text: `<p>Gdy kogoś poznajesz, często pytasz: <b>Where are you from?</b> – Skąd jesteś? Odpowiadasz na dwa sposoby: krajem – <i>I'm from <b>Poland</b></i> – albo narodowością – <i>I'm <b>Polish</b></i>.</p>
      <p>Pytasz o kogoś innego? <i>Where <b>is he</b> from?</i> – <i>He's from Spain. He's Spanish.</i></p>`,
    remember: 'from + kraj (from Poland) · I\'m + narodowość (I\'m Polish). Oba słowa wielką literą.',
    hook: 'Po „from” stoi zawsze <b>miejsce</b> – jak na kopercie: list <b>z</b> Polski.',
    check: { q: 'Uzupełnij: „I\'m from France. I\'m ___.”', options: ['French', 'France', 'Frenchish'], answer: 0, explain: 'France to kraj (Francja), French – narodowość i język (francuski).' },
  },
  {
    title: 'Kraj i narodowość – trzy rodziny końcówek',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Trzy kolumny końcówek narodowości. -ish: Poland Polish, Spain Spanish, England English. -an: Germany German, Italy Italian, the USA American. -ese: China Chinese, Japan Japanese. Wyjątek: France French.">
      <rect x="8" y="10" width="124" height="180" rx="12" class="f1 s1"/>
      <rect x="138" y="10" width="124" height="180" rx="12" class="f3 s3"/>
      <rect x="268" y="10" width="124" height="180" rx="12" class="f5 s5"/>
      <text x="70" y="36" class="tx-b t1" text-anchor="middle">-ish</text>
      <text x="200" y="36" class="tx-b t3" text-anchor="middle">-an</text>
      <text x="330" y="36" class="tx-b t5" text-anchor="middle">-ese</text>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="62">Poland</text><text x="70" y="110">Spain</text><text x="70" y="158">England</text>
        <text x="200" y="62">Germany</text><text x="200" y="110">Italy</text><text x="200" y="158">the USA</text>
        <text x="330" y="62">China</text><text x="330" y="110">Japan</text>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="84">Polish</text><text x="70" y="132">Spanish</text><text x="70" y="180">English</text>
        <text x="200" y="84">German</text><text x="200" y="132">Italian</text><text x="200" y="180">American</text>
        <text x="330" y="84">Chinese</text><text x="330" y="132">Japanese</text>
      </g>
      <text x="200" y="212" class="tx" text-anchor="middle">wyjątek: France → <tspan class="t2">French</tspan></text>
    </svg>`,
    text: `<p>Narodowość tworzy się od nazwy kraju, często jedną z trzech końcówek: <b>-ish</b> (Polish, Spanish, English), <b>-an</b> (German, Italian, American) albo <b>-ese</b> (Chinese, Japanese).</p>
      <p>Niektóre trzeba po prostu zapamiętać: France → <b>French</b>. Nazwa języka często brzmi tak samo jak narodowość: <i>I'm Polish. I speak Polish and English.</i></p>`,
    remember: 'Kraje, narodowości i języki – zawsze <b>wielką literą</b>: Poland, Polish, English.',
    hook: 'Trzy rodziny: <b>-ish</b> (Polish, English, Spanish), <b>-an</b> (German, Italian, American), <b>-ese</b> (Chinese, Japanese).',
    check: { q: 'China → ?', options: ['Chinese', 'Chinish', 'Chinan'], answer: 0, explain: 'Chiny to China, a chiński, Chińczyk – Chinese (jak Japanese).' },
  },
  {
    title: 'Gdzie mówi się po angielsku?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Schemat: the UK, stolica London, ma cztery części: England, Scotland, Wales, Northern Ireland. Obok osobno: Ireland, stolica Dublin, oraz the USA, stolica Washington.">
      <rect x="8" y="10" width="236" height="210" rx="14" class="f1 s1"/>
      <text x="126" y="36" class="tx-b" text-anchor="middle">the UK</text>
      <text x="126" y="56" class="tx-s" text-anchor="middle">Wielka Brytania · stolica: London</text>
      <g class="bg ln">
        <rect x="20" y="68" width="104" height="66" rx="10"/><rect x="130" y="68" width="104" height="66" rx="10"/>
        <rect x="20" y="142" width="104" height="66" rx="10"/><rect x="130" y="142" width="104" height="66" rx="10"/>
      </g>
      <text x="72" y="98" class="tx-b" text-anchor="middle">England</text><text x="72" y="120" class="tx-s" text-anchor="middle">Anglia</text>
      <text x="182" y="98" class="tx-b" text-anchor="middle">Scotland</text><text x="182" y="120" class="tx-s" text-anchor="middle">Szkocja</text>
      <text x="72" y="172" class="tx-b" text-anchor="middle">Wales</text><text x="72" y="194" class="tx-s" text-anchor="middle">Walia</text>
      <text x="182" y="166" class="tx-s" text-anchor="middle">Northern</text><text x="182" y="182" class="tx-s" text-anchor="middle">Ireland</text><text x="182" y="200" class="tx-s" text-anchor="middle">Irlandia Płn.</text>
      <rect x="256" y="10" width="136" height="100" rx="14" class="f3 s3"/>
      <text x="324" y="44" class="tx-b" text-anchor="middle">Ireland</text>
      <text x="324" y="66" class="tx-s" text-anchor="middle">Irlandia</text>
      <text x="324" y="92" class="tx-s" text-anchor="middle">stolica: Dublin</text>
      <rect x="256" y="120" width="136" height="100" rx="14" class="f2 s2"/>
      <text x="324" y="154" class="tx-b" text-anchor="middle">the USA</text>
      <text x="324" y="176" class="tx-s" text-anchor="middle">Stany Zjednoczone</text>
      <text x="324" y="202" class="tx-s" text-anchor="middle">stolica: Washington</text>
    </svg>`,
    text: `<p>Po angielsku mówi się w wielu krajach, m.in. w Wielkiej Brytanii, Irlandii, Stanach Zjednoczonych, Kanadzie i Australii.</p>
      <p><b>The UK</b> (Wielka Brytania) ma cztery części: Anglię, Szkocję, Walię i Irlandię Północną. Stolica to <b>London</b>. <b>Ireland</b> (Irlandia) to osobne państwo ze stolicą w Dublinie.</p>`,
    remember: 'Ktoś z Wielkiej Brytanii jest <b>British</b>. „English” – tylko ktoś z Anglii (i język angielski).',
    hook: 'The UK to drużyna z czterema zawodnikami: England, Scotland, Wales i Northern Ireland.',
    check: { q: 'Ktoś ze Szkocji (Scotland) jest…', options: ['British', 'English', 'Irish'], answer: 0, explain: 'Szkocja należy do Wielkiej Brytanii, więc Szkot jest British (i Scottish), ale nie English.' },
  },
  {
    title: 'Słowa pytające – „wh-”',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Osiem kafelków ze słowami pytającymi: What – co, Where – gdzie, Who – kto, When – kiedy, Why – dlaczego, How – jak, How old – ile lat, How many – ile">
      <g class="f4 s4">
        <rect x="8" y="10" width="90" height="90" rx="10"/><rect x="106" y="10" width="90" height="90" rx="10"/><rect x="204" y="10" width="90" height="90" rx="10"/><rect x="302" y="10" width="90" height="90" rx="10"/>
        <rect x="8" y="110" width="90" height="90" rx="10"/><rect x="106" y="110" width="90" height="90" rx="10"/><rect x="204" y="110" width="90" height="90" rx="10"/><rect x="302" y="110" width="90" height="90" rx="10"/>
      </g>
      <g text-anchor="middle" style="font-size:24px" class="tx-b">
        <text x="53" y="40">❓</text><text x="151" y="40">📍</text><text x="249" y="40">🙋</text><text x="347" y="40">📅</text>
        <text x="53" y="140">🤔</text><text x="151" y="140">🛠️</text><text x="249" y="140">🎂</text><text x="347" y="140">🔢</text>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="53" y="68">What?</text><text x="151" y="68">Where?</text><text x="249" y="68">Who?</text><text x="347" y="68">When?</text>
        <text x="53" y="168">Why?</text><text x="151" y="168">How?</text><text x="249" y="168" style="font-size:15px">How old?</text><text x="347" y="168" style="font-size:15px">How many?</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="53" y="90">co? jaki?</text><text x="151" y="90">gdzie?</text><text x="249" y="90">kto?</text><text x="347" y="90">kiedy?</text>
        <text x="53" y="190">dlaczego?</text><text x="151" y="190">jak?</text><text x="249" y="190">ile lat?</text><text x="347" y="190">ile?</text>
      </g>
    </svg>`,
    text: `<p>Większość słów pytających zaczyna się od <b>wh-</b>: <b>What</b> (co?), <b>Where</b> (gdzie?), <b>Who</b> (kto?), <b>When</b> (kiedy?), <b>Why</b> (dlaczego?). Do tej rodziny należy też <b>How</b> (jak?).</p>
      <p>Z „how” powstają kolejne pytania: <b>How old?</b> (ile lat?), <b>How many?</b> (ile?). Przydają się też <b>What colour?</b> (jakiego koloru?) i <b>What time?</b> (o której?). Na pytanie „Why?” odpowiadasz: <i>Because…</i> (ponieważ…).</p>`,
    remember: 'Najpierw zobacz, o co pytasz: osoba – Who, miejsce – Where, czas – When, powód – Why.',
    hook: '<b>Wh</b>o? – <b>W</b>ho to „<b>h</b>u” – „kto tu?”. <b>Wh</b>ere ma w środku <b>here</b> (tutaj) – pyta o miejsce.',
    check: { q: 'Uzupełnij: „___ is your teacher?” – „Mrs Smith.”', options: ['Who', 'Where', 'When'], answer: 0, explain: 'Odpowiedź to osoba, więc pytamy „Who?” – kto?' },
  },
  {
    title: 'Szyk pytania – jak klocki',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Klocki pytań. Where, are, you, from? Where, do, you, live? Pod spodem źle: Where you are from? Dobrze: Where are you from?">
      <g class="f1 s1"><rect x="10" y="14" width="96" height="44" rx="8"/></g>
      <rect x="218" y="74" width="96" height="44" rx="8" class="f5 s5"/>
      <rect x="112" y="14" width="66" height="44" rx="8" class="f2 s2"/>
      <rect x="184" y="14" width="66" height="44" rx="8" class="f3 s3"/>
      <rect x="256" y="14" width="96" height="44" rx="8" class="f5 s5"/>
      <g class="f1 s1"><rect x="10" y="74" width="96" height="44" rx="8"/></g>
      <rect x="112" y="74" width="44" height="44" rx="8" class="f2 s2"/>
      <rect x="162" y="74" width="50" height="44" rx="8" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle">
        <text x="58" y="42">Where</text><text x="145" y="42">are</text><text x="217" y="42">you</text><text x="304" y="42">from?</text>
        <text x="58" y="102">Where</text><text x="134" y="102">do</text><text x="187" y="102">you</text><text x="266" y="102">live?</text>
      </g>
      <text x="58" y="138" class="tx-s t1" text-anchor="middle">słowo pytające</text>
      <text x="145" y="138" class="tx-s t2" text-anchor="middle">are / do</text>
      <text x="217" y="138" class="tx-s t3" text-anchor="middle">osoba</text>
      <line x1="10" y1="152" x2="390" y2="152" class="ln-thin"/>
      <text x="100" y="182" class="tx t2" text-anchor="middle">✗ Where you are from?</text>
      <text x="300" y="182" class="tx t3" text-anchor="middle">✓ Where are you from?</text>
      <text x="200" y="210" class="tx-s" text-anchor="middle">„are” albo „do” stoi przed osobą</text>
    </svg>`,
    text: `<p>Pytanie budujesz jak z klocków: <b>słowo pytające</b> → <b>is / are</b> → <b>osoba</b>: <i>Where are you from? What is your name?</i></p>
      <p>Gdy w zdaniu jest inny czasownik, pomaga <b>do / does</b>: <i>Where <b>do</b> you live?</i> (Gdzie mieszkasz?) <i>What <b>does</b> she like?</i> (Co ona lubi?) – po „does” czasownik jest bez -s.</p>`,
    remember: 'Słowo pytające → is / are / do / does → osoba → reszta. Nie: „Where you are from?”.',
    hook: 'W pytaniu „are” i „do” przeskakują <b>przed</b> osobę – jak kolega, który przepuszcza cię w drzwiach, tylko odwrotnie 😉.',
    check: { q: 'Które pytanie jest poprawne?', options: ['What does she like?', 'What she likes?', 'What does she likes?'], answer: 0, explain: 'Słowo pytające, „does”, osoba i czasownik bez -s: What does she like?' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['angielski/czyje-to'] = [
  {
    title: 'Mój, twój, jego… – my, your, his',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Siedem par kafelków: I – my, you – your, he – his, she – her, it – its, we – our, they – their">
      <g class="f1 s1">
        <rect x="8" y="10" width="90" height="84" rx="10"/><rect x="106" y="10" width="90" height="84" rx="10"/><rect x="204" y="10" width="90" height="84" rx="10"/><rect x="302" y="10" width="90" height="84" rx="10"/>
        <rect x="57" y="106" width="90" height="84" rx="10"/><rect x="155" y="106" width="90" height="84" rx="10"/><rect x="253" y="106" width="90" height="84" rx="10"/>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="53" y="32">I</text><text x="151" y="32">you</text><text x="249" y="32">he</text><text x="347" y="32">she</text>
        <text x="102" y="128">it</text><text x="200" y="128">we</text><text x="298" y="128">they</text>
      </g>
      <g class="tx-b t1" text-anchor="middle">
        <text x="53" y="60">my</text><text x="151" y="60">your</text><text x="249" y="60">his</text><text x="347" y="60">her</text>
        <text x="102" y="156">its</text><text x="200" y="156">our</text><text x="298" y="156">their</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="53" y="82">mój</text><text x="151" y="82">twój, wasz</text><text x="249" y="82">jego</text><text x="347" y="82">jej</text>
        <text x="102" y="178">jego, jej</text><text x="200" y="178">nasz</text><text x="298" y="178">ich</text>
      </g>
    </svg>`,
    text: `<p>Gdy chcesz powiedzieć, do kogo coś należy, używasz słów: <b>my</b> (mój), <b>your</b> (twój, wasz), <b>his</b> (jego), <b>her</b> (jej), <b>its</b> (jego, jej – o zwierzęciu albo rzeczy), <b>our</b> (nasz), <b>their</b> (ich).</p>
      <p>Stawiasz je przed rzeczą: <i>my phone, our house, their car</i>. Nie zmieniają się – <i>my</i> pasuje i do „mój”, i do „moja”, i do „moje”.</p>`,
    remember: 'I – my · you – your · he – his · she – her · it – its · we – our · they – their.',
    hook: 'Powtarzaj parami jak wyliczankę: I – my, you – your, he – his, she – her, it – its, we – our, they – their. Zauważ: <b>the</b>y i <b>the</b>ir zaczynają się tak samo.',
    check: { q: 'Kasia ma kota. „___ cat is white.”', options: ['Her', 'His', 'Its'], answer: 0, explain: 'Kot należy do Kasi (dziewczynki), więc „her cat” – jej kot.' },
  },
  {
    title: 'His czy her? Patrz na właściciela',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Chłopiec z rowerem: his bike – jego rower. Dziewczynka z rowerem: her bike – jej rower. Słowo zależy od właściciela.">
      <rect x="10" y="10" width="185" height="140" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="140" rx="12" class="f2 s2"/>
      <text x="102" y="62" class="tx-b" style="font-size:36px" text-anchor="middle">👦🚲</text>
      <text x="297" y="62" class="tx-b" style="font-size:36px" text-anchor="middle">👧🚲</text>
      <text x="102" y="104" class="tx-b" text-anchor="middle"><tspan class="t1">his</tspan> bike</text>
      <text x="297" y="104" class="tx-b" text-anchor="middle"><tspan class="t2">her</tspan> bike</text>
      <text x="102" y="130" class="tx-s" text-anchor="middle">jego rower</text>
      <text x="297" y="130" class="tx-s" text-anchor="middle">jej rower</text>
      <text x="200" y="180" class="tx" text-anchor="middle">rower ten sam – inny właściciel</text>
    </svg>`,
    text: `<p>Po polsku mówisz „jego” albo „jej” – po angielsku tak samo: <b>his</b> – gdy właścicielem jest chłopak albo mężczyzna, <b>her</b> – gdy dziewczyna albo kobieta.</p>
      <p>Nie patrz na rzecz, tylko na <b>właściciela</b>: <i>Tom and <b>his</b> sister</i> (Tom i jego siostra), <i>Ola and <b>her</b> brother</i> (Ola i jej brat).</p>`,
    remember: 'his – rzecz chłopca, mężczyzny · her – rzecz dziewczynki, kobiety.',
    hook: 'Pary: <b>he → his</b> (on → jego), <b>she → her</b> (ona → jej). Najpierw ustal, czy właściciel to „he”, czy „she”.',
    check: { q: 'Uzupełnij: „Mr Brown is our teacher. ___ car is red.”', options: ['His', 'Her', 'Their'], answer: 0, explain: 'Mr Brown to pan, więc jego samochód – „his car”.' },
  },
  {
    title: 'Czyje to? – „whose” i ’s',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Pytanie: Whose bag is this? – Czyja to torba? Odpowiedź: It's Tom's. Porównanie szyku: po polsku rower Kuby, po angielsku Kuba's bike – właściciel stoi przed rzeczą.">
      <defs><marker id="a-k4en-cz-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="200" height="56" rx="14" class="f4 s4"/>
      <text x="110" y="36" class="tx-b" text-anchor="middle">Whose bag is this?</text>
      <text x="110" y="56" class="tx-s" text-anchor="middle">Czyja to torba?</text>
      <rect x="230" y="10" width="160" height="56" rx="14" class="f3 s3"/>
      <text x="310" y="36" class="tx-b" text-anchor="middle">It's Tom's.</text>
      <text x="310" y="56" class="tx-s" text-anchor="middle">To (torba) Toma.</text>
      <text x="20" y="112" class="tx-s">po polsku:</text>
      <rect x="110" y="88" width="90" height="36" rx="8" class="f1 s1"/><rect x="210" y="88" width="90" height="36" rx="8" class="f2 s2"/>
      <text x="155" y="112" class="tx-b" text-anchor="middle">rower</text><text x="255" y="112" class="tx-b" text-anchor="middle">Kuby</text>
      <text x="20" y="176" class="tx-s">po angielsku:</text>
      <rect x="110" y="152" width="90" height="36" rx="8" class="f2 s2"/><rect x="210" y="152" width="90" height="36" rx="8" class="f1 s1"/>
      <text x="155" y="176" class="tx-b" text-anchor="middle">Kuba's</text><text x="255" y="176" class="tx-b" text-anchor="middle">bike</text>
      <path d="M255,128 C240,140 190,140 170,150" class="ln s2" marker-end="url(#a-k4en-cz-1)"/>
      <text x="312" y="146" class="tx-s">właściciel</text><text x="312" y="162" class="tx-s">+ ’s – przed</text><text x="312" y="178" class="tx-s">rzeczą</text>
    </svg>`,
    text: `<p>„Czyj? czyja? czyje?” to po angielsku <b>whose</b>: <i>Whose bag is this?</i> – Czyja to torba?</p>
      <p>Odpowiadasz, dodając do właściciela <b>’s</b>: <i>It's <b>Tom's</b>.</i> – To torba Toma. Właściciel stoi <b>przed</b> rzeczą: <i>Kuba's bike, my sister's room</i>. Gdy właścicieli jest kilku i słowo kończy się na -s, dopisujesz sam apostrof: <i>my parents' car</i>.</p>`,
    remember: 'Whose…? – czyj? · właściciel + ’s + rzecz: Ola\'s cat (kot Oli).',
    hook: 'Apostrof z „s” to jak przypięta karteczka z imieniem: <b>Tom\'s</b> – „to jest Toma”.',
    check: { q: 'Jak powiesz „pokój Oli”?', options: ['Ola\'s room', 'room Ola\'s', 'Ola room\'s'], answer: 0, explain: 'Właściciel z ’s stoi przed rzeczą: Ola\'s room.' },
  },
  {
    title: 'This, that, these, those',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Tabela dwa na dwa. Blisko: this – jedna rzecz, these – wiele. Daleko: that – jedna rzecz, those – wiele. Przykłady z ołówkami blisko i gwiazdami daleko.">
      <text x="160" y="24" class="tx-b" text-anchor="middle">jedna</text>
      <text x="310" y="24" class="tx-b" text-anchor="middle">wiele</text>
      <text x="44" y="84" class="tx-b" text-anchor="middle">tu 👇</text>
      <text x="44" y="104" class="tx-s" text-anchor="middle">blisko</text>
      <text x="44" y="164" class="tx-b" text-anchor="middle">tam 👉</text>
      <text x="44" y="184" class="tx-s" text-anchor="middle">daleko</text>
      <rect x="90" y="36" width="140" height="80" rx="12" class="f1 s1"/>
      <rect x="240" y="36" width="140" height="80" rx="12" class="f1 s1"/>
      <rect x="90" y="124" width="140" height="80" rx="12" class="f5 s5"/>
      <rect x="240" y="124" width="140" height="80" rx="12" class="f5 s5"/>
      <text x="160" y="68" class="tx-b" text-anchor="middle">this ✏️</text>
      <text x="310" y="68" class="tx-b" text-anchor="middle">these ✏️✏️✏️</text>
      <text x="160" y="156" class="tx-b" text-anchor="middle">that ⭐</text>
      <text x="310" y="156" class="tx-b" text-anchor="middle">those ⭐⭐⭐</text>
      <g class="tx-s" text-anchor="middle">
        <text x="160" y="96">ten, ta, to + is</text><text x="310" y="96">te, ci + are</text>
        <text x="160" y="184">tamten, tamto + is</text><text x="310" y="184">tamte, tamci + are</text>
      </g>
    </svg>`,
    text: `<p>O rzeczach <b>blisko</b> ciebie mówisz <b>this</b> (jedna) i <b>these</b> (wiele): <i>This is my pen. These are my keys.</i></p>
      <p>O rzeczach <b>daleko</b> – <b>that</b> (jedna) i <b>those</b> (wiele): <i>That is a bird. Those are trees.</i> Pytasz: <i>What's this?</i> – <i>It's a kite.</i> · <i>What are these?</i> – <i>They're crayons.</i></p>`,
    remember: 'this / that + <b>is</b> (jedna rzecz) · these / those + <b>are</b> (wiele rzeczy).',
    hook: 'Dwie pary: <b>this → these</b> (tu), <b>that → those</b> (tam). „These” i „those” są dłuższe, bo rzeczy jest więcej.',
    check: { q: 'Wskazujesz kilka ptaków daleko na niebie: „Look at ___ birds!”', options: ['those', 'these', 'that'], answer: 0, explain: 'Ptaki są daleko i jest ich kilka – „those”.' },
  },
  {
    title: 'Uwaga, pułapki!',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie źle i dobrze: it's tail – its tail; This are my keys – These are my keys; bike Kuba's – Kuba's bike; Ola and his mum – Ola and her mum.">
      <text x="110" y="22" class="tx-b t2" text-anchor="middle">✗ źle</text>
      <text x="300" y="22" class="tx-b t3" text-anchor="middle">✓ dobrze</text>
      <line x1="10" y1="34" x2="390" y2="34" class="ln-thin"/>
      <text x="110" y="66" class="tx t2" text-anchor="middle">The dog wags it's tail.</text><text x="300" y="66" class="tx t3" text-anchor="middle">… its tail.</text>
      <text x="110" y="108" class="tx t2" text-anchor="middle">This are my keys.</text><text x="300" y="108" class="tx t3" text-anchor="middle">These are my keys.</text>
      <text x="110" y="150" class="tx t2" text-anchor="middle">bike Kuba's</text><text x="300" y="150" class="tx t3" text-anchor="middle">Kuba's bike</text>
      <text x="110" y="192" class="tx t2" text-anchor="middle">Ola and his mum</text><text x="300" y="192" class="tx t3" text-anchor="middle">Ola and her mum</text>
    </svg>`,
    text: `<ul>
      <li><b>its</b> (jego, jej) piszesz bez apostrofu. <b>it's</b> to skrót od „it is”.</li>
      <li>Wiele rzeczy blisko to <b>these are</b>, nie „this are”.</li>
      <li>Właściciel z ’s stoi <b>przed</b> rzeczą: Kuba's bike.</li>
      <li>Ola to dziewczynka, więc jej mama to <b>her</b> mum.</li>
    </ul>`,
    remember: 'its ≠ it\'s · this is / these are · właściciel ’s przed rzeczą · his – jego, her – jej.',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['angielski/policzalne'] = [
  {
    title: 'Policzysz czy nie policzysz?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwie ramki. Policzalne: jabłka i jajka – an apple, three apples. Niepoliczalne: mleko, chleb, ser – milk, bread, cheese, bez a lub an i bez liczby mnogiej.">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="190" rx="12" class="f2 s2"/>
      <text x="102" y="38" class="tx-b" text-anchor="middle">policzalne</text>
      <text x="297" y="38" class="tx-b" text-anchor="middle">niepoliczalne</text>
      <text x="102" y="82" class="tx-b" style="font-size:30px" text-anchor="middle">🍎🍎🍎</text>
      <text x="297" y="82" class="tx-b" style="font-size:30px" text-anchor="middle">🥛🍞🧀</text>
      <text x="102" y="114" class="tx" text-anchor="middle">an apple</text>
      <text x="102" y="138" class="tx" text-anchor="middle">three apples</text>
      <text x="102" y="162" class="tx" text-anchor="middle">an egg – six eggs</text>
      <text x="102" y="188" class="tx-s" text-anchor="middle">a / an, liczba mnoga -s</text>
      <text x="297" y="114" class="tx" text-anchor="middle">milk, water</text>
      <text x="297" y="138" class="tx" text-anchor="middle">bread, cheese</text>
      <text x="297" y="162" class="tx" text-anchor="middle">rice, sugar</text>
      <text x="297" y="188" class="tx-s" text-anchor="middle">bez a / an, bez -s</text>
    </svg>`,
    text: `<p>Niektóre rzeczy liczysz na sztuki: jedno jabłko, trzy jabłka. To rzeczowniki <b>policzalne</b>: <i>an apple – three apples</i>.</p>
      <p>Innych nie liczysz na sztuki – to płyny i produkty sypkie albo takie, które się kroi: <i>milk, water, juice, bread, cheese, rice, sugar</i>. To rzeczowniki <b>niepoliczalne</b>: nie mają liczby mnogiej i nie stawiasz przed nimi <b>a / an</b>.</p>`,
    remember: 'Niepoliczalne: bez a / an i bez -s. Nie mówimy „a bread” ani „breads”.',
    hook: 'Spróbuj policzyć mleko: „jedno mleko, dwa mleka”? Nie da się – mleko jest niepoliczalne. Jabłka policzysz na palcach.',
    check: { q: 'Który rzeczownik jest niepoliczalny?', options: ['rice', 'egg', 'banana'], answer: 0, explain: 'Ryżu nie liczymy na ziarenka – rice jest niepoliczalny.' },
  },
  {
    title: 'Butelka, szklanka, kromka – liczymy porcje',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sześć kafelków: a bottle of water – butelka wody, a glass of milk – szklanka mleka, a slice of bread – kromka chleba, a piece of cheese – kawałek sera, a jar of honey – słoik miodu, a cup of tea – filiżanka herbaty">
      <g class="f4 s4">
        <rect x="8" y="10" width="124" height="92" rx="10"/><rect x="138" y="10" width="124" height="92" rx="10"/><rect x="268" y="10" width="124" height="92" rx="10"/>
        <rect x="8" y="110" width="124" height="92" rx="10"/><rect x="138" y="110" width="124" height="92" rx="10"/><rect x="268" y="110" width="124" height="92" rx="10"/>
      </g>
      <g class="tx-b" style="font-size:26px" text-anchor="middle">
        <text x="70" y="42">💧</text><text x="200" y="42">🥛</text><text x="330" y="42">🍞</text>
        <text x="70" y="142">🧀</text><text x="200" y="142">🍯</text><text x="330" y="142">☕</text>
      </g>
      <g class="tx" text-anchor="middle">
        <text x="70" y="70">a bottle of</text><text x="200" y="70">a glass of</text><text x="330" y="70">a slice of</text>
        <text x="70" y="170">a piece of</text><text x="200" y="170">a jar of</text><text x="330" y="170">a cup of</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="92">butelka wody</text><text x="200" y="92">szklanka mleka</text><text x="330" y="92">kromka chleba</text>
        <text x="70" y="192">kawałek sera</text><text x="200" y="192">słoik miodu</text><text x="330" y="192">filiżanka herbaty</text>
      </g>
    </svg>`,
    text: `<p>Chcesz policzyć coś niepoliczalnego? Policz <b>porcje</b> albo <b>opakowania</b>: <i>a bottle of water</i> (butelka wody), <i>a glass of milk</i> (szklanka mleka), <i>a slice of bread</i> (kromka chleba), <i>a piece of cheese</i> (kawałek sera), <i>a jar of honey</i> (słoik miodu).</p>
      <p>Więcej porcji? Liczba mnoga jest przy opakowaniu: <i>two bottles of water, three slices of bread</i>.</p>`,
    remember: 'a bottle / glass / cup / slice / piece / jar <b>of</b> + niepoliczalne.',
    hook: 'Niepoliczalne „wkładasz do pudełka” – i liczysz pudełka.',
    check: { q: 'Co znaczy „a jar of honey”?', options: ['słoik miodu', 'szklanka miodu', 'kawałek miodu'], answer: 0, explain: 'Jar to słoik. A jar of honey – słoik miodu.' },
  },
  {
    title: '„some” i „any”',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Tabela: twierdzenie – some: There are some eggs. Przeczenie – any: There isn't any milk. Pytanie – any: Are there any apples? Prośba i propozycja – some: Can I have some water?">
      <rect x="10" y="10" width="380" height="46" rx="10" class="f3 s3"/>
      <rect x="10" y="62" width="380" height="46" rx="10" class="f2 s2"/>
      <rect x="10" y="114" width="380" height="46" rx="10" class="f1 s1"/>
      <rect x="10" y="166" width="380" height="46" rx="10" class="f4 s4"/>
      <text x="30" y="40" class="tx-b">➕</text><text x="30" y="92" class="tx-b">➖</text><text x="30" y="144" class="tx-b">❓</text><text x="30" y="196" class="tx-b">🙏</text>
      <text x="66" y="40" class="tx-b t3">some</text><text x="66" y="92" class="tx-b t2">any</text><text x="66" y="144" class="tx-b t1">any</text><text x="66" y="196" class="tx-b">some</text>
      <g class="tx">
        <text x="130" y="40">There are some eggs.</text>
        <text x="130" y="92">There isn't any milk.</text>
        <text x="130" y="144">Are there any apples?</text>
        <text x="130" y="196">Can I have some water?</text>
      </g>
    </svg>`,
    text: `<p><b>some</b> (trochę, kilka) – w zdaniach twierdzących: <i>There are some eggs. I've got some milk.</i></p>
      <p><b>any</b> – w przeczeniach i pytaniach: <i>There isn't any milk.</i> (Nie ma mleka.) <i>Are there any apples?</i> (Czy są jakieś jabłka?) Wyjątek: gdy <b>prosisz</b> albo <b>proponujesz</b>, mówisz „some”: <i>Can I have some water? Would you like some juice?</i></p>`,
    remember: '➕ some · ➖ any · ❓ any · 🙏 prośba i propozycja – some.',
    hook: '<b>Any</b> lubi pytania i „nie”: <i>Are there any…? There isn\'t any…</i> <b>Some</b> lubi „tak” i grzeczne prośby.',
    check: { q: 'Uzupełnij: „I haven\'t got ___ sweets.”', options: ['any', 'some', 'a'], answer: 0, explain: 'To przeczenie (haven\'t), więc „any”: nie mam (żadnych) cukierków.' },
  },
  {
    title: '„a lot of” – dużo',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy szklanki: pusta – There isn't any juice, do połowy – There is some juice, pełna – There is a lot of juice. Pod spodem: a lot of apples i a lot of milk.">
      <g class="ln"><path d="M40,30 L56,130 L104,130 L120,30"/><path d="M160,30 L176,130 L224,130 L240,30"/><path d="M280,30 L296,130 L344,130 L360,30"/></g>
      <path d="M168,82 L176,130 L224,130 L232,82 Z" class="f2 s2"/>
      <path d="M284,40 L296,130 L344,130 L356,40 Z" class="f2 s2"/>
      <text x="80" y="156" class="tx-s" text-anchor="middle">isn't any juice</text>
      <text x="200" y="156" class="tx-s" text-anchor="middle">some juice</text>
      <text x="320" y="156" class="tx-b t2" text-anchor="middle">a lot of juice</text>
      <text x="200" y="190" class="tx" text-anchor="middle">a lot of <tspan class="t3">apples</tspan> · a lot of <tspan class="t1">milk</tspan></text>
    </svg>`,
    text: `<p><b>A lot of</b> znaczy „dużo”. To wygodne słowo, bo pasuje i do policzalnych, i do niepoliczalnych: <i>a lot of apples</i> (dużo jabłek), <i>a lot of milk</i> (dużo mleka).</p>
      <p>Przykłady: <i>I eat a lot of fruit.</i> – Jem dużo owoców. <i>There are a lot of books in the library.</i> – W bibliotece jest dużo książek.</p>`,
    remember: 'a lot of + policzalne lub niepoliczalne = dużo.',
    hook: 'Nie wiesz, czy coś jest policzalne? Gdy jest tego dużo, „a lot of” pasuje zawsze.',
    check: { q: 'Uzupełnij: „There are ___ books in the library.”', options: ['a lot of', 'any', 'an'], answer: 0, explain: 'To twierdzenie i chodzi o dużo książek – „a lot of”.' },
  },
  {
    title: 'Ile? – „How many” czy „How much”?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwie kolumny. How many z policzalnymi: apples, eggs, sweets. How much z niepoliczalnymi: milk, water, rice. Pod spodem: How much is it? – Ile to kosztuje?">
      <rect x="10" y="10" width="185" height="150" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="150" rx="12" class="f2 s2"/>
      <text x="102" y="40" class="tx-b" text-anchor="middle">How many…?</text>
      <text x="297" y="40" class="tx-b" text-anchor="middle">How much…?</text>
      <text x="102" y="62" class="tx-s" text-anchor="middle">policzalne</text>
      <text x="297" y="62" class="tx-s" text-anchor="middle">niepoliczalne</text>
      <g class="tx" text-anchor="middle">
        <text x="102" y="92">🍎 apples</text><text x="102" y="116">🥚 eggs</text><text x="102" y="140">🍬 sweets</text>
        <text x="297" y="92">🥛 milk</text><text x="297" y="116">💧 water</text><text x="297" y="140">🍚 rice</text>
      </g>
      <rect x="10" y="168" width="380" height="34" rx="10" class="f4 s4"/>
      <text x="200" y="191" class="tx" text-anchor="middle">How much is it? – Ile to kosztuje? 💰</text>
    </svg>`,
    text: `<p>Pytasz „ile?” o rzeczy <b>policzalne</b> – <b>How many</b>: <i>How many eggs are there?</i> – <i>There are six.</i></p>
      <p>O rzeczy <b>niepoliczalne</b> – <b>How much</b>: <i>How much milk is there?</i> – <i>There's a lot.</i> A <i>How much is it?</i> znasz już ze sklepu – to pytanie o cenę.</p>`,
    remember: 'How many + policzalne (l. mnoga) · How much + niepoliczalne.',
    hook: '<b>Many</b> – <b>m</b>nóstwo sztuk do policzenia; <b>much</b> – „masa”, której nie policzysz.',
    check: { q: 'Uzupełnij: „___ water do you drink every day?”', options: ['How much', 'How many', 'How old'], answer: 0, explain: 'Woda jest niepoliczalna, więc „How much?”.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['angielski/w-miescie'] = [
  {
    title: 'Miejsca w mieście',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Osiem kafelków z miejscami: library – biblioteka, hospital – szpital, post office – poczta, cinema – kino, museum – muzeum, café – kawiarnia, train station – dworzec, swimming pool – basen">
      <g class="f1 s1">
        <rect x="8" y="10" width="90" height="92" rx="10"/><rect x="106" y="10" width="90" height="92" rx="10"/><rect x="204" y="10" width="90" height="92" rx="10"/><rect x="302" y="10" width="90" height="92" rx="10"/>
        <rect x="8" y="110" width="90" height="92" rx="10"/><rect x="106" y="110" width="90" height="92" rx="10"/><rect x="204" y="110" width="90" height="92" rx="10"/><rect x="302" y="110" width="90" height="92" rx="10"/>
      </g>
      <g class="tx-b" style="font-size:24px" text-anchor="middle">
        <text x="53" y="40">📚</text><text x="151" y="40">🏥</text><text x="249" y="40">📮</text><text x="347" y="40">🎬</text>
        <text x="53" y="140">🏛️</text><text x="151" y="140">☕</text><text x="249" y="140">🚉</text><text x="347" y="140">🏊</text>
      </g>
      <g class="tx-b" style="font-size:14px" text-anchor="middle">
        <text x="53" y="68">library</text><text x="151" y="68">hospital</text><text x="249" y="68">post office</text><text x="347" y="68">cinema</text>
        <text x="53" y="168">museum</text><text x="151" y="168">café</text><text x="249" y="168">train station</text><text x="347" y="160">swimming</text><text x="347" y="176">pool</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="53" y="90">biblioteka</text><text x="151" y="90">szpital</text><text x="249" y="90">poczta</text><text x="347" y="90">kino</text>
        <text x="53" y="190">muzeum</text><text x="151" y="190">kawiarnia</text><text x="249" y="190">dworzec</text><text x="347" y="195">basen</text>
      </g>
    </svg>`,
    text: `<p>W mieście są: <b>library</b> (biblioteka), <b>hospital</b> (szpital), <b>post office</b> (poczta), <b>cinema</b> (kino), <b>museum</b> (muzeum), <b>café</b> (kawiarnia), <b>train station</b> (dworzec kolejowy), <b>swimming pool</b> (basen).</p>
      <p>Przydadzą się też: <b>bus stop</b> (przystanek), <b>chemist's</b> (apteka), <b>police station</b> (komisariat policji), <b>shopping centre</b> (centrum handlowe).</p>`,
    remember: 'library = biblioteka (nie księgarnia – to bookshop) · chemist\'s = apteka.',
    hook: '<b>Library</b> – „librarian” to bibliotekarz. Księgarnię zapamiętasz łatwo: <b>book</b> + <b>shop</b> – sklep z książkami.',
    check: { q: 'Gdzie obejrzysz film?', options: ['at the cinema', 'at the post office', 'at the library'], answer: 0, explain: 'Cinema to kino.' },
  },
  {
    title: 'Gdzie to jest? next to, opposite, between',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Plan ulicy. Po jednej stronie: bank, café, cinema. Kawiarnia jest między bankiem a kinem. Po drugiej stronie, naprzeciwko kawiarni, park.">
      <rect x="10" y="20" width="110" height="66" rx="8" class="f1 s1"/>
      <rect x="145" y="20" width="110" height="66" rx="8" class="f2 s2"/>
      <rect x="280" y="20" width="110" height="66" rx="8" class="f5 s5"/>
      <text x="65" y="50" class="tx-b" text-anchor="middle">🏦 bank</text>
      <text x="200" y="50" class="tx-b" text-anchor="middle">☕ café</text>
      <text x="335" y="50" class="tx-b" text-anchor="middle">🎬 cinema</text>
      <text x="200" y="74" class="tx-s" text-anchor="middle">between</text>
      <rect x="10" y="98" width="380" height="36" class="bg ln-thin"/>
      <line x1="20" y1="116" x2="380" y2="116" class="ln-thin dash"/>
      <text x="340" y="112" class="tx-s" text-anchor="middle">street</text>
      <rect x="145" y="146" width="110" height="56" rx="8" class="f3 s3"/>
      <text x="200" y="180" class="tx-b" text-anchor="middle">🌳 park</text>
      <line x1="200" y1="88" x2="200" y2="144" class="ln s3 dash"/>
      <text x="212" y="130" class="tx-s t3">opposite</text>
      <text x="10" y="170" class="tx-s">The café is</text><text x="10" y="188" class="tx-s">between the bank</text><text x="10" y="206" class="tx-s">and the cinema.</text>
      <text x="270" y="170" class="tx-s">The park is</text><text x="270" y="188" class="tx-s">opposite</text><text x="270" y="206" class="tx-s">the café.</text>
    </svg>`,
    text: `<p>Znasz już <b>next to</b> (obok): <i>The bank is next to the café.</i> Teraz dwa nowe słowa:</p>
      <ul><li><b>opposite</b> – naprzeciwko (po drugiej stronie ulicy): <i>The park is opposite the café.</i></li>
      <li><b>between</b> – między (dwiema rzeczami): <i>The café is between the bank and the cinema.</i></li></ul>`,
    remember: 'next to – obok · opposite – naprzeciwko · between… and… – między… a…',
    hook: '<b>Between</b> ma w środku „<b>tw</b>” jak <b>tw</b>o – zawsze są dwie rzeczy, a ty pośrodku.',
    check: { q: 'Spójrz na plan. Gdzie jest kino?', options: ['next to the café', 'opposite the bank', 'between the park and the bank'], answer: 0, explain: 'Kino (cinema) stoi tuż obok kawiarni (café).' },
  },
  {
    title: 'Jak dojść? Wskazujemy drogę',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Skrzyżowanie i trzy strzałki: w górę – Go straight on, idź prosto; w lewo – Turn left, skręć w lewo; w prawo – Turn right, skręć w prawo.">
      <defs><marker id="a-k4en-mi-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker>
      <marker id="a-k4en-mi-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker>
      <marker id="a-k4en-mi-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="170" y="10" width="60" height="190" class="bg ln-thin"/>
      <rect x="60" y="80" width="280" height="56" class="bg ln-thin"/>
      <text x="200" y="196" class="tx-b" style="font-size:22px" text-anchor="middle">🚶</text>
      <path d="M200,170 L200,30" class="ln s3 sw" marker-end="url(#a-k4en-mi-1)"/>
      <path d="M192,108 L80,108" class="ln s1 sw" marker-end="url(#a-k4en-mi-2)"/>
      <path d="M208,108 L320,108" class="ln s2 sw" marker-end="url(#a-k4en-mi-3)"/>
      <text x="240" y="34" class="tx-b t3">Go straight on.</text>
      <text x="240" y="54" class="tx-s">Idź prosto.</text>
      <text x="10" y="162" class="tx-b t1">Turn left.</text>
      <text x="10" y="182" class="tx-s">Skręć w lewo.</text>
      <text x="390" y="162" class="tx-b t2" text-anchor="end">Turn right.</text>
      <text x="390" y="182" class="tx-s" text-anchor="end">Skręć w prawo.</text>
    </svg>`,
    text: `<p>Pytasz o drogę grzecznie: <b>Excuse me, where's the museum?</b> – Przepraszam, gdzie jest muzeum?</p>
      <p>Odpowiedzi: <b>Go straight on.</b> – Idź prosto. <b>Turn left / right.</b> – Skręć w lewo / w prawo. <b>It's on the left / right.</b> – Jest po lewej / po prawej stronie.</p>`,
    remember: 'Go straight on – prosto · Turn left / right – skręć · on the left / right – po lewej / prawej.',
    hook: '<b>L</b>eft – <b>l</b>ewa. Pokaż lewą dłoń: kciuk i palec wskazujący tworzą literę <b>L</b>.',
    check: { q: 'Co znaczy „It\'s on the left”?', options: ['Jest po lewej.', 'Skręć w lewo.', 'Idź prosto.'], answer: 0, explain: '„On the left” – po lewej stronie. „Skręć w lewo” to „Turn left”.' },
  },
  {
    title: 'Present continuous – co dzieje się teraz',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Wzór: osoba plus am, is albo are plus czasownik z ing. I'm reading. She's swimming – podwójne m. They're dancing – nieme e znika.">
      <rect x="10" y="10" width="380" height="40" rx="10" class="f4 s4"/>
      <text x="200" y="37" class="tx-b" text-anchor="middle">am / is / are + czasownik-<tspan class="t2">ing</tspan></text>
      <g class="tx-b">
        <text x="20" y="88">I'm read<tspan class="t2">ing</tspan>.</text>
        <text x="20" y="128">She's swim<tspan class="t2">ming</tspan>.</text>
        <text x="20" y="168">They're danc<tspan class="t2">ing</tspan>.</text>
      </g>
      <g class="tx-s">
        <text x="230" y="80">zwykle: + ing</text><text x="230" y="96">read → reading</text>
        <text x="230" y="120">krótkie: podwój</text><text x="230" y="136">swim → swimming</text>
        <text x="230" y="160">nieme -e znika</text><text x="230" y="176">dance → dancing</text>
      </g>
      <text x="200" y="208" class="tx" text-anchor="middle">⏰ now · at the moment · Look! · Listen!</text>
    </svg>`,
    text: `<p>Gdy mówisz o tym, co dzieje się <b>właśnie teraz</b>, używasz czasu <b>present continuous</b>: <b>am / is / are</b> + czasownik z końcówką <b>-ing</b>. <i>I'm reading.</i> – (Teraz) czytam.</p>
      <p>Przeczenie: <i>I'm not sleeping. He isn't eating.</i> Pisownia: zwykle +ing (play → playing), nieme -e znika (write → writing), w krótkich wyrazach podwajasz ostatnią spółgłoskę (run → running, sit → sitting).</p>`,
    remember: 'am / is / are + -ing = dzieje się TERAZ. Sygnały: now, at the moment, Look!, Listen!',
    hook: 'Końcówka <b>-ing</b> to jak kamera „na żywo” 🎥 – pokazuje to, co dzieje się w tej chwili.',
    check: { q: 'Uzupełnij: „We ___ lunch now.”', options: ['are having', 'is having', 'having'], answer: 0, explain: 'Z „we” łączymy „are”: We are having lunch now.' },
  },
  {
    title: 'Teraz czy zwykle? Pytania i odpowiedzi',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie: zwykle – I usually walk to school, present simple. Dziś, teraz – Today I'm going by bus, present continuous. Pod spodem pytanie: Are you reading? Yes, I am. No, I'm not.">
      <rect x="10" y="10" width="185" height="110" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="110" rx="12" class="f2 s2"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">🔁 zwykle</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">⏰ teraz</text>
      <text x="102" y="64" class="tx" text-anchor="middle">I usually walk</text>
      <text x="102" y="86" class="tx" text-anchor="middle">to school.</text>
      <text x="102" y="110" class="tx-s" text-anchor="middle">present simple</text>
      <text x="297" y="64" class="tx" text-anchor="middle">Today I'm going</text>
      <text x="297" y="86" class="tx" text-anchor="middle">by bus.</text>
      <text x="297" y="110" class="tx-s" text-anchor="middle">present continuous</text>
      <rect x="10" y="132" width="380" height="78" rx="12" class="f4 s4"/>
      <text x="200" y="160" class="tx-b" text-anchor="middle">Are you reading?</text>
      <text x="200" y="190" class="tx" text-anchor="middle">Yes, I am. / No, I'm not.</text>
    </svg>`,
    text: `<p>To, co robisz <b>zwykle</b>, opisuje present simple: <i>I usually walk to school.</i> To, co dzieje się <b>teraz</b> – present continuous: <i>Today I'm going by bus.</i></p>
      <p>Pytanie: przestaw „am / is / are” na początek: <i>Are you reading? Is she swimming?</i> Krótkie odpowiedzi: <i>Yes, I am. / No, I'm not. · Yes, she is. / No, she isn't.</i> Pytanie o czynność: <b>What are you doing?</b> – <i>I'm doing my homework.</i></p>`,
    remember: 'Zwykle → present simple · teraz → present continuous. Are you…? – Yes, I am. / No, I\'m not.',
    hook: '„What are you doing?” zadaje mama, gdy wchodzi do pokoju – i chce wiedzieć, co robisz <b>w tej chwili</b>.',
    check: { q: 'Mama pyta: „Is Tom sleeping?”. Tom śpi. Co odpowiesz?', options: ['Yes, he is.', 'Yes, he does.', 'Yes, he sleeping.'], answer: 0, explain: 'Pytanie zaczyna się od „Is”, więc odpowiadamy „Yes, he is.”.' },
  },
];

window.LESSONS['angielski/kultura'] = [
  {
    title: 'Gdzie mówi się po angielsku? Cztery flagi',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Uproszczone flagi: Wielka Brytania – granatowa z białymi i czerwonymi krzyżami; USA – czerwono-białe pasy i granatowe pole z gwiazdami; Irlandia – pasy zielony, biały, pomarańczowy; Kanada – czerwony liść klonu na białym polu między czerwonymi pasami">
      <defs><clipPath id="kl-kult-uk"><rect width="120" height="60"/></clipPath></defs>
      <g transform="translate(40,14)">
        <g clip-path="url(#kl-kult-uk)">
          <rect width="120" height="60" class="fl-b"/>
          <path d="M0,0 L120,60 M120,0 L0,60" class="fl-ws" stroke-width="12"/>
          <path d="M0,0 L120,60 M120,0 L0,60" class="fl-rs" stroke-width="4"/>
          <path d="M60,0 V60 M0,30 H120" class="fl-ws" stroke-width="20"/>
          <path d="M60,0 V60 M0,30 H120" class="fl-rs" stroke-width="12"/>
        </g>
        <rect width="120" height="60" class="ln"/>
      </g>
      <g transform="translate(240,14)">
        <rect width="120" height="60" class="fl-w"/>
        <g class="fl-r"><rect y="0" width="120" height="4.6"/><rect y="9.23" width="120" height="4.6"/><rect y="18.46" width="120" height="4.6"/><rect y="27.69" width="120" height="4.6"/><rect y="36.92" width="120" height="4.6"/><rect y="46.15" width="120" height="4.6"/><rect y="55.38" width="120" height="4.62"/></g>
        <rect width="50" height="32.3" class="fl-b"/>
        <g class="fl-w"><circle cx="6" cy="5" r="1.8"/><circle cx="16" cy="5" r="1.8"/><circle cx="26" cy="5" r="1.8"/><circle cx="36" cy="5" r="1.8"/><circle cx="46" cy="5" r="1.8"/><circle cx="6" cy="12.5" r="1.8"/><circle cx="16" cy="12.5" r="1.8"/><circle cx="26" cy="12.5" r="1.8"/><circle cx="36" cy="12.5" r="1.8"/><circle cx="46" cy="12.5" r="1.8"/><circle cx="6" cy="20" r="1.8"/><circle cx="16" cy="20" r="1.8"/><circle cx="26" cy="20" r="1.8"/><circle cx="36" cy="20" r="1.8"/><circle cx="46" cy="20" r="1.8"/><circle cx="6" cy="27.5" r="1.8"/><circle cx="16" cy="27.5" r="1.8"/><circle cx="26" cy="27.5" r="1.8"/><circle cx="36" cy="27.5" r="1.8"/><circle cx="46" cy="27.5" r="1.8"/></g>
        <rect width="120" height="60" class="ln"/>
      </g>
      <g transform="translate(40,126)">
        <rect width="40" height="60" class="fl-g"/><rect x="40" width="40" height="60" class="fl-w"/><rect x="80" width="40" height="60" class="fl-o"/>
        <rect width="120" height="60" class="ln"/>
      </g>
      <g transform="translate(240,126)">
        <rect width="30" height="60" class="fl-r"/><rect x="30" width="60" height="60" class="fl-w"/><rect x="90" width="30" height="60" class="fl-r"/>
        <path d="M60,14 L64,22 L70,19 L68,30 L76,27 L72,34 L74,38 L62,36 L62,46 L58,46 L58,36 L46,38 L48,34 L44,27 L52,30 L50,19 L56,22 Z" class="fl-r"/>
        <rect width="120" height="60" class="ln"/>
      </g>
      <text x="100" y="96" class="tx-b" text-anchor="middle">the UK</text>
      <text x="100" y="113" class="tx-s" text-anchor="middle">Wielka Brytania</text>
      <text x="300" y="96" class="tx-b" text-anchor="middle">the USA</text>
      <text x="300" y="113" class="tx-s" text-anchor="middle">Stany Zjednoczone</text>
      <text x="100" y="208" class="tx-b" text-anchor="middle">Ireland</text>
      <text x="100" y="225" class="tx-s" text-anchor="middle">Irlandia</text>
      <text x="300" y="208" class="tx-b" text-anchor="middle">Canada</text>
      <text x="300" y="225" class="tx-s" text-anchor="middle">Kanada</text>
    </svg>`,
    text: `<p>Po angielsku mówi się m.in. w Wielkiej Brytanii, Irlandii, Stanach Zjednoczonych, Kanadzie i Australii. Poznasz ich święta, symbole i zwyczaje – i porównasz je z polskimi.</p>
      <p>Flaga Wielkiej Brytanii (<b lang="en">Union Jack</b>) łączy trzy krzyże: Anglii, Szkocji i Irlandii. Flaga USA (<b lang="en">Stars and Stripes</b>) ma <b>50 gwiazd</b> – po jednej na każdy stan – i <b>13 pasów</b>: tyle było dawnych kolonii, które ogłosiły niepodległość. Kanadę rozpoznasz po czerwonym <b>liściu klonu</b>.</p>`,
    remember: 'Flaga USA: 50 gwiazd = 50 stanów, 13 pasów = 13 dawnych kolonii. Irlandia: zielony, biały, pomarańczowy.',
    hook: 'Irlandia to „zielona wyspa”: zielony pas na fladze, zielone stroje 17 marca i zielona koniczyna.',
    check: { q: 'Na której fladze jest liść klonu?', options: ['Kanady', 'Irlandii', 'USA'], answer: 0, explain: 'Czerwony liść klonu to symbol Kanady.' },
  },
  {
    title: 'Kalendarz świąt',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Sześć kafelków: 31 października Halloween, 5 listopada Bonfire Night, w listopadzie Thanksgiving, 25 grudnia Christmas Day, 17 marca St Patrick's Day, 4 lipca Independence Day">
      <rect x="6" y="8" width="124" height="88" rx="10" class="f2 s2"/>
      <rect x="138" y="8" width="124" height="88" rx="10" class="f5 s5"/>
      <rect x="270" y="8" width="124" height="88" rx="10" class="f4 s4"/>
      <rect x="6" y="104" width="124" height="88" rx="10" class="f3 s3"/>
      <rect x="138" y="104" width="124" height="88" rx="10" class="f3 s3"/>
      <rect x="270" y="104" width="124" height="88" rx="10" class="f1 s1"/>
      <text x="68" y="38" class="tx" style="font-size:24px" text-anchor="middle">🎃</text>
      <text x="200" y="38" class="tx" style="font-size:24px" text-anchor="middle">🎆</text>
      <text x="332" y="38" class="tx" style="font-size:24px" text-anchor="middle">🦃</text>
      <text x="68" y="134" class="tx" style="font-size:24px" text-anchor="middle">🎄</text>
      <text x="200" y="134" class="tx" style="font-size:24px" text-anchor="middle">☘️</text>
      <text x="332" y="134" class="tx" style="font-size:24px" text-anchor="middle">🎉</text>
      <text x="68" y="64" class="tx-b" text-anchor="middle">31.10</text>
      <text x="200" y="64" class="tx-b" text-anchor="middle">5.11</text>
      <text x="332" y="64" class="tx-b" text-anchor="middle">listopad</text>
      <text x="68" y="160" class="tx-b" text-anchor="middle">25.12</text>
      <text x="200" y="160" class="tx-b" text-anchor="middle">17.03</text>
      <text x="332" y="160" class="tx-b" text-anchor="middle">4.07</text>
      <text x="68" y="84" class="tx-s" text-anchor="middle">Halloween</text>
      <text x="200" y="84" class="tx-s" text-anchor="middle">Bonfire Night</text>
      <text x="332" y="84" class="tx-s" text-anchor="middle">Thanksgiving</text>
      <text x="68" y="180" class="tx-s" text-anchor="middle">Christmas Day</text>
      <text x="200" y="180" class="tx-s" text-anchor="middle">St Patrick's Day</text>
      <text x="332" y="180" class="tx-s" text-anchor="middle">Independence Day</text>
    </svg>`,
    text: `<ul>
        <li><b lang="en">Halloween</b> (31 października) – przebrane dzieci wołają <i lang="en">Trick or treat!</i> i dostają słodycze. Świecą wydrążone dynie ze świeczką w środku.</li>
        <li><b lang="en">Bonfire Night</b> (5 listopada, Wielka Brytania) – ogniska i fajerwerki.</li>
        <li><b lang="en">Thanksgiving</b> (USA, czwarty czwartek listopada) – Święto Dziękczynienia, rodzinny obiad z indykiem.</li>
        <li><b lang="en">St Patrick's Day</b> (17 marca, Irlandia) – wszyscy na zielono.</li>
        <li><b lang="en">Independence Day</b> (4 lipca, USA) – Dzień Niepodległości, fajerwerki i parady.</li>
      </ul>`,
    remember: '<b lang="en">pumpkin</b> – dynia, <b lang="en">fireworks</b> – fajerwerki, <b lang="en">turkey</b> – indyk.',
    hook: 'Jesień jest „ognista”: najpierw świecące dynie (31.10), potem ogniska i fajerwerki (5.11).',
    check: { q: 'Które święto obchodzi się w USA w listopadzie, jedząc indyka?', options: ['Thanksgiving', 'Bonfire Night', 'St Patrick\'s Day'], answer: 0, explain: 'Thanksgiving – Święto Dziękczynienia – w czwarty czwartek listopada. Turkey to indyk.' },
  },
  {
    title: 'Boże Narodzenie: tu i tam',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie: w Polsce 24 grudnia Wigilia, uroczysta kolacja i prezenty wieczorem, 26 grudnia drugi dzień świąt. W Wielkiej Brytanii 24 grudnia skarpety na prezenty, 25 grudnia Christmas Day – rano prezenty, indyk, pudding i crackery, 26 grudnia Boxing Day">
      <rect x="6" y="8" width="190" height="204" rx="12" class="bg ln"/>
      <rect x="204" y="8" width="190" height="204" rx="12" class="bg ln"/>
      <rect x="86" y="16" width="30" height="9" class="pl-w"/><rect x="86" y="25" width="30" height="9" class="pl-r"/><rect x="86" y="16" width="30" height="18" class="ln"/>
      <defs><clipPath id="kl-kult-uk2"><rect width="30" height="18"/></clipPath></defs>
      <g transform="translate(284,16)">
        <g clip-path="url(#kl-kult-uk2)">
          <rect width="30" height="18" class="fl-b"/>
          <path d="M0,0 L30,18 M30,0 L0,18" class="fl-ws" stroke-width="4"/>
          <path d="M15,0 V18 M0,9 H30" class="fl-ws" stroke-width="6"/>
          <path d="M15,0 V18 M0,9 H30" class="fl-rs" stroke-width="3"/>
        </g>
        <rect width="30" height="18" class="ln"/>
      </g>
      <text x="101" y="52" class="tx-b" text-anchor="middle">Polska</text>
      <text x="299" y="52" class="tx-b" text-anchor="middle">Wielka Brytania</text>
      <text x="18" y="78" class="tx-s t2">24.12 – Wigilia</text>
      <text x="18" y="96" class="tx-s">uroczysta kolacja</text>
      <text x="18" y="114" class="tx-s">prezenty wieczorem 🎁</text>
      <text x="18" y="196" class="tx-s t2">26.12 – drugi dzień świąt</text>
      <text x="216" y="78" class="tx-s t2">24.12 – Christmas Eve</text>
      <text x="216" y="96" class="tx-s">skarpety (stockings) 🧦</text>
      <text x="216" y="120" class="tx-s t2">25.12 – Christmas Day</text>
      <text x="216" y="138" class="tx-s">rano prezenty 🎁</text>
      <text x="216" y="156" class="tx-s">indyk, pudding, crackers</text>
      <text x="216" y="196" class="tx-s t2">26.12 – Boxing Day</text>
    </svg>`,
    text: `<p>W Polsce najważniejsza jest <b>Wigilia</b> – uroczysta kolacja 24 grudnia, a prezenty są zwykle wieczorem. Brytyjskie dzieci 24 grudnia wieszają <b lang="en">stockings</b> (skarpety), a <b lang="en">Father Christmas</b> zostawia w nich prezenty. Najważniejszy jest <b lang="en">Christmas Day</b> – 25 grudnia: rano prezenty, potem obiad z pieczonym indykiem i <i lang="en">Christmas pudding</i>.</p>
      <p>Na stole są <b lang="en">Christmas crackers</b> – papierowe tuby, które dwie osoby rozrywają z trzaskiem. W środku: papierowa korona, żart i mała zabawka. 26 grudnia to <b lang="en">Boxing Day</b>.</p>`,
    remember: 'Polska: najważniejsza Wigilia, 24.12. Wielka Brytania: najważniejszy Christmas Day, 25.12.',
    hook: 'Skarpeta (stocking) czeka całą noc – dlatego prezenty są dopiero rano!',
    check: { q: 'Kiedy brytyjskie dzieci rozpakowują prezenty od Father Christmas?', options: ['rano 25 grudnia', 'wieczorem 24 grudnia', '26 grudnia'], answer: 0, explain: 'Prezenty czekają w skarpetach rano 25 grudnia – w Christmas Day.' },
  },
  {
    title: 'Znane miejsca i życie codzienne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cztery kafelki: Big Ben – dzwon w Londynie; Statue of Liberty – Nowy Jork; Sydney Opera House – Australia; kangaroo i koala – Australia">
      <rect x="6" y="8" width="190" height="90" rx="10" class="f1 s1"/>
      <rect x="204" y="8" width="190" height="90" rx="10" class="f3 s3"/>
      <rect x="6" y="104" width="190" height="90" rx="10" class="f4 s4"/>
      <rect x="204" y="104" width="190" height="90" rx="10" class="f2 s2"/>
      <text x="101" y="40" class="tx" style="font-size:26px" text-anchor="middle">🔔</text>
      <text x="299" y="40" class="tx" style="font-size:26px" text-anchor="middle">🗽</text>
      <text x="101" y="136" class="tx" style="font-size:26px" text-anchor="middle">🎶</text>
      <text x="299" y="136" class="tx" style="font-size:26px" text-anchor="middle">🦘</text>
      <text x="101" y="66" class="tx-b" text-anchor="middle">Big Ben</text>
      <text x="299" y="66" class="tx" text-anchor="middle">Statue of Liberty</text>
      <text x="101" y="162" class="tx" text-anchor="middle">Sydney Opera House</text>
      <text x="299" y="162" class="tx-b" text-anchor="middle">kangaroo, koala</text>
      <text x="101" y="86" class="tx-s" text-anchor="middle">dzwon – Londyn</text>
      <text x="299" y="86" class="tx-s" text-anchor="middle">Nowy Jork, USA</text>
      <text x="101" y="182" class="tx-s" text-anchor="middle">Sydney, Australia</text>
      <text x="299" y="182" class="tx-s" text-anchor="middle">Australia</text>
    </svg>`,
    text: `<ul>
        <li><b lang="en">Big Ben</b> to wielki <b>dzwon</b> w wieży zegarowej w Londynie (potocznie tak mówi się o całej wieży). Symbolem Londynu są też czerwone autobusy piętrowe.</li>
        <li><b lang="en">Statue of Liberty</b> – Statua Wolności w Nowym Jorku, dar Francji.</li>
        <li><b lang="en">Sydney Opera House</b> – opera z dachem jak białe żagle.</li>
        <li>W Australii żyją kangury i koale. Koala to torbacz, nie miś!</li>
      </ul>
      <p>Na zakupach w Wielkiej Brytanii płacisz funtami (<b lang="en">pounds</b>, £), w USA – dolarami (<b lang="en">dollars</b>, $), a w Irlandii – <b lang="en">euro</b>. W Wielkiej Brytanii, Irlandii i Australii jeździ się <b>lewą</b> stroną drogi.</p>`,
    remember: 'UK – funt (£), USA – dolar ($), Irlandia – euro (€). Ruch lewostronny: Wielka Brytania, Irlandia, Australia.',
    hook: '„Big” znaczy „duży” – Big Ben to duży dzwon, który wybija godziny.',
  },
  {
    title: 'Fakt czy stereotyp?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dwie ramki. Fakt – można go sprawdzić, np. w Wielkiej Brytanii jeździ się lewą stroną drogi. Stereotyp – uproszczona opinia o całej grupie, np. wszyscy Brytyjczycy piją herbatę o piątej; nie każdy taki jest">
      <rect x="6" y="8" width="190" height="174" rx="12" class="f3 s3 sw"/>
      <rect x="204" y="8" width="190" height="174" rx="12" class="f2 s2 sw"/>
      <text x="101" y="38" class="tx-b t3" text-anchor="middle">FAKT ✔</text>
      <text x="299" y="38" class="tx-b t2" text-anchor="middle">STEREOTYP ✘</text>
      <text x="18" y="64" class="tx-s">można go sprawdzić</text>
      <text x="18" y="96" class="tx-s">„W Wielkiej Brytanii</text>
      <text x="18" y="114" class="tx-s">jeździ się lewą</text>
      <text x="18" y="132" class="tx-s">stroną drogi.”</text>
      <text x="216" y="64" class="tx-s">opinia o całej grupie</text>
      <text x="216" y="96" class="tx-s">„Wszyscy Brytyjczycy</text>
      <text x="216" y="114" class="tx-s">piją herbatę</text>
      <text x="216" y="132" class="tx-s">o piątej.”</text>
      <text x="216" y="166" class="tx-s t2">Nie każdy taki jest!</text>
    </svg>`,
    text: `<p><b>Fakt</b> to informacja, którą można sprawdzić. <b>Stereotyp</b> to uproszczona opinia o całej grupie ludzi – nie jest prawdziwa dla każdego. Słowo „wszyscy” często zdradza stereotyp.</p>
      <p>W każdym kraju ludzie są różni, tak jak w Polsce. Zanim kogoś ocenisz – poznaj go!</p>`,
    remember: 'Fakt – da się sprawdzić. Stereotyp – „wszyscy są tacy” (a nie są).',
    hook: 'Czerwona lampka: gdy słyszysz „wszyscy Anglicy…”, „wszyscy Amerykanie…” – to pewnie stereotyp.',
    check: { q: 'Które zdanie jest faktem?', options: ['W Irlandii płaci się w euro.', 'Wszyscy Amerykanie jedzą tylko hamburgery.', 'Wszyscy Brytyjczycy piją herbatę o piątej.'], answer: 0, explain: 'To, jakimi pieniędzmi się płaci, można sprawdzić. Pozostałe zdania to stereotypy – mówią „wszyscy”.' },
  },
];
