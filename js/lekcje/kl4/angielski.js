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
