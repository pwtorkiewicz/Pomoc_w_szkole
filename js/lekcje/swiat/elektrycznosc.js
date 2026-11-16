/* Lekcje – 🌍 Świat, elektryczność i sterowanie. Klucze: 'elektrycznosc/magnesy', 'elektrycznosc/czujniki'. Format: docs/LEKCJE.md
 * Treści oparte na działach z js/dane/swiat/elektrycznosc.js (ścieżka poza podstawą, źródła w polu basis). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['elektrycznosc/magnesy'] = [
  {
    title: '🇵🇱 Przypomnienie: to poznasz też w polskiej szkole',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przypomnienie. Magnes przyciąga żelazo i stal, na przykład gwóźdź i spinacz. Nie przyciąga aluminium i miedzi. Różne bieguny N i S się przyciągają, takie same S i S odpychają się">
      <defs><marker id="a-swe-m0" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="185" height="95" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="95" rx="12" class="f2 s2"/>
      <g class="tx-b"><text x="22" y="38">✅ Przyciąga</text><text x="217" y="38">❌ Nie przyciąga</text></g>
      <g class="tx"><text x="22" y="66">żelazo, stal</text><text x="22" y="92">🔩 📎</text><text x="217" y="66">aluminium</text><text x="217" y="92">miedź</text></g>
      <rect x="20" y="125" width="40" height="30" class="f2 s2"/><rect x="60" y="125" width="40" height="30" class="f1 s1"/>
      <rect x="130" y="125" width="40" height="30" class="f2 s2"/><rect x="170" y="125" width="40" height="30" class="f1 s1"/>
      <rect x="230" y="125" width="40" height="30" class="f2 s2"/><rect x="270" y="125" width="40" height="30" class="f1 s1"/>
      <rect x="330" y="125" width="40" height="30" class="f1 s1"/><rect x="370" y="125" width="25" height="30" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="40" y="146">N</text><text x="80" y="146">S</text><text x="150" y="146">N</text><text x="190" y="146">S</text>
        <text x="250" y="146">N</text><text x="290" y="146">S</text><text x="350" y="146">S</text><text x="382" y="146">N</text></g>
      <g class="ln sw"><path d="M103,170 H122" marker-end="url(#a-swe-m0)"/><path d="M127,170 H108" marker-end="url(#a-swe-m0)"/>
        <path d="M318,170 H302" marker-end="url(#a-swe-m0)"/><path d="M322,170 H338" marker-end="url(#a-swe-m0)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="115" y="198">różne – przyciągają</text><text x="312" y="198">takie same – odpychają</text></g>
    </svg>`,
    text: `<p>Te rzeczy poznasz też na przyrodzie w <b>klasach 4–6</b>: magnes przyciąga <b>żelazo i stal</b> (ale nie aluminium i miedź), ma <b>dwa bieguny</b> N i S, a magnes, który może się swobodnie obracać, staje <b>północ–południe</b>.</p>
      <p>Dalej – to, czego uczą dzieci w innych krajach, a polska podstawa programowa tego nie wymaga.</p>`,
    remember: 'Żelazo i stal – tak. Różne bieguny się przyciągają, takie same odpychają.',
    check: { q: 'Folia aluminiowa to metal. Czy magnes ją przyciągnie?', options: ['nie', 'tak'], answer: 0, explain: 'Nie. Magnes przyciąga żelazo i stal, a aluminium – nie.' },
  },
  {
    title: 'Badaj magnesy jak japoński uczeń',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Magnesy badają dzieci w Anglii (7–8 lat), Japonii (8–9 lat) i Singapurze (8–9 lat). Japoński badacz: zauważ, zapytaj, przewiduj, sprawdź, zapisz, wniosek">
      <defs><marker id="a-swe-m1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="8" width="120" height="50" rx="10" class="f3 s3"/><rect x="140" y="8" width="120" height="50" rx="10" class="f4 s4"/><rect x="270" y="8" width="120" height="50" rx="10" class="f5 s5"/>
      <g class="tx-b" text-anchor="middle"><text x="70" y="30">Anglia</text><text x="200" y="30">Japonia</text><text x="330" y="30">Singapur</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="49">7–8 lat</text><text x="200" y="49">8–9 lat</text><text x="330" y="49">8–9 lat</text></g>
      <text x="10" y="84" class="tx-b">Japoński badacz:</text>
      <g class="f1 s1"><rect x="10" y="95" width="110" height="50" rx="10"/><rect x="145" y="95" width="110" height="50" rx="10"/><rect x="280" y="95" width="110" height="50" rx="10"/>
        <rect x="10" y="167" width="110" height="50" rx="10"/><rect x="145" y="167" width="110" height="50" rx="10"/><rect x="280" y="167" width="110" height="50" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="65" y="116">👀</text><text x="200" y="116">❓</text><text x="335" y="116">🤔</text><text x="65" y="188">🔬</text><text x="200" y="188">📝</text><text x="335" y="188">💡</text></g>
      <g class="tx" text-anchor="middle"><text x="65" y="138">zauważ</text><text x="200" y="138">zapytaj</text><text x="335" y="138">przewiduj</text><text x="65" y="210">sprawdź</text><text x="200" y="210">zapisz</text><text x="335" y="210">wniosek</text></g>
      <g class="ln" fill="none"><path d="M121,120 H141" marker-end="url(#a-swe-m1)"/><path d="M256,120 H276" marker-end="url(#a-swe-m1)"/><path d="M335,146 V156 H65 V163" marker-end="url(#a-swe-m1)"/>
        <path d="M121,192 H141" marker-end="url(#a-swe-m1)"/><path d="M256,192 H276" marker-end="url(#a-swe-m1)"/></g>
    </svg>`,
    text: `<p>W Anglii, Japonii i Singapurze dzieci w wieku 7–9 lat badają <b>magnesy</b>.</p>
      <p>W Japonii lekcja przyrody to praca <b>badacza</b> – w skrócie: zauważ, zapytaj, przewiduj, sprawdź, zapisz i wyciągnij wniosek. (Japończycy przed sprawdzaniem jeszcze planują, jak to zrobić.) Spróbuj tak samo!</p>`,
    remember: 'Badacz: zauważ → zapytaj → przewiduj → sprawdź → zapisz → wniosek.',
    hook: 'Badacz najpierw zgaduje, a potem sprawdza – i nie wstydzi się pomyłki.',
  },
  {
    title: '🌍 Laboratorium: odległość i ułożenie',
    widget: { type: 'magnesy', d: 2, zasieg: 3 },
    text: `<p>Ustaw magnes B, <b>najpierw przewidź</b>, a potem sprawdź. Zmieniaj odległość i obracaj magnes B.</p>
      <p>Japonia: siła magnesu zależy od <b>odległości</b> – im dalej, tym słabiej. W części stanów USA (standardy NGSS): to, czy magnesy się przyciągną, czy odepchną, zależy od ich <b>ułożenia</b>.</p>`,
    remember: 'Im dalej, tym słabiej. Obrócisz magnes – przyciąganie zmienia się w odpychanie.',
    hook: 'Jak zapach ciasta: im bliżej kuchni, tym mocniej czujesz.',
    check: { q: 'Dwa magnesy się przyciągały. Odwracasz magnes B tak, że jego końce zamieniają się miejscami. Co teraz?', options: ['odepchną się', 'dalej się przyciągną'], answer: 0, explain: 'Po odwróceniu naprzeciw siebie są takie same bieguny – odpychają się.' },
  },
  {
    title: '🌍 Większy nie znaczy silniejszy',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="W tym przykładzie duży magnes przyciąga spinacz z 2 kratek, a mały z 4 kratek – po wielkości nie poznasz siły, trzeba sprawdzić. Pod spodem: spinacz na tekturze jedzie za magnesem schowanym pod spodem">
      <defs><marker id="a-swe-m4b" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="14" width="60" height="44" class="f2 s2 sw"/><rect x="70" y="14" width="60" height="44" class="f1 s1 sw"/>
      <rect x="10" y="78" width="30" height="24" class="f2 s2 sw"/><rect x="40" y="78" width="30" height="24" class="f1 s1 sw"/>
      <rect x="132" y="30" width="56" height="12" rx="6" class="f3 s3"/><rect x="72" y="84" width="112" height="12" rx="6" class="f3 s3"/>
      <g class="tx"><text x="200" y="41">duży: 2 kratki</text><text x="200" y="95">mały: 4 kratki</text></g>
      <text x="200" y="126" text-anchor="middle" class="tx-s">w tym przykładzie – twoje magnesy sprawdź sam</text>
      <rect x="40" y="168" width="320" height="10" class="f4 s4"/>
      <rect x="230" y="184" width="40" height="22" class="f2 s2"/><rect x="270" y="184" width="40" height="22" class="f1 s1"/>
      <g class="ln" fill="none"><rect x="248" y="152" width="26" height="12" rx="6"/></g>
      <path d="M200,196 H224" class="ln sw" marker-end="url(#a-swe-m4b)"/>
      <g class="tx-s"><text x="40" y="160">tektura</text><text x="40" y="224">magnes pod spodem</text></g>
    </svg>`,
    text: `<p>Lekcje z Anglii (Oak): po <b>wielkości</b> ani kształcie nie poznasz, który magnes jest silniejszy. Sprawdź <b>uczciwie</b>: zmieniasz tylko magnes, a spinacz, linijka i sposób pomiaru zostają te same.</p>
      <p>Magnes działa też <b>przez papier, cienką tekturę, plastik i szkło</b>. Możesz prowadzić spinacz po tekturze magnesem schowanym pod spodem.</p>`,
    remember: 'Siłę magnesu sprawdzasz, a nie zgadujesz po wielkości.',
    hook: 'Uczciwy test jak wyścig: wszyscy biegną tę samą trasę – zmienia się tylko biegacz.',
    check: { q: 'Jak poznać, który z dwóch magnesów jest silniejszy?', options: ['sprawdzić, z jak daleka przyciąga spinacz', 'wybrać ten, który jest większy'], answer: 0, explain: 'Po wielkości nie poznasz siły magnesu – sprawdź, z jak daleka przyciąga spinacz.' },
  },
  {
    title: '🌍 Magnesy mają różne kształty',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cztery magnesy: sztabkowy z biegunami N i S na końcach, podkowa z biegunami na końcach ramion, pierścieniowy i guzikowy ze znakiem zapytania – ich bieguny znajdziesz drugim magnesem">
      <rect x="12" y="40" width="40" height="30" class="f2 s2 sw"/><rect x="52" y="40" width="40" height="30" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="32" y="61">N</text><text x="72" y="61">S</text></g>
      <path d="M120,30 V70 A30,30 0 0 0 180,70 V30 H162 V70 A12,12 0 0 1 138,70 V30 Z" class="f5 s5 sw"/>
      <rect x="120" y="30" width="18" height="16" class="f2 s2"/><rect x="162" y="30" width="18" height="16" class="f1 s1"/>
      <g class="tx-s" text-anchor="middle"><text x="129" y="24">N</text><text x="171" y="24">S</text></g>
      <circle cx="250" cy="62" r="30" class="f4 s4 sw"/><circle cx="250" cy="62" r="13" class="bg ln"/>
      <circle cx="345" cy="62" r="20" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="250" y="114">?</text><text x="345" y="114">?</text></g>
      <g class="tx-s" text-anchor="middle"><text x="52" y="140">sztabkowy</text><text x="150" y="140">podkowa</text><text x="250" y="140">pierścieniowy</text><text x="345" y="140">guzikowy</text></g>
      <text x="200" y="180" text-anchor="middle" class="tx">Gdzie bieguny? Sprawdź drugim magnesem!</text>
    </svg>`,
    text: `<p>Anglia (program Year 3): dzieci poznają magnesy <b>sztabkowe, pierścieniowe, guzikowe i podkowy</b>. Każdy ma dwa bieguny, ale <b>nie każdy ma je na końcach</b>.</p>
      <p>Gdzie są? Zbliżaj drugi magnes: tam, gdzie się przyciągają albo odpychają, jest biegun.</p>`,
    remember: 'Każdy magnes ma N i S – ale nie zawsze na końcach.',
    hook: 'Biegun to jak drzwi do domu: każdy dom ma drzwi, ale nie zawsze z przodu.',
  },
  {
    title: '🔬 Zrób w domu: kompas z igły',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej: igłę do szycia pocieramy magnesem. Po prawej: igła wbita w korek pływa w misce z wodą i pokazuje północ–południe">
      <defs><marker id="a-swe-m6" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx-b"><text x="14" y="30">1</text><text x="214" y="30">2</text></g>
      <g class="tx"><text x="34" y="30">potrzyj igłę</text><text x="34" y="52">magnesem</text><text x="234" y="30">na korku,</text><text x="234" y="52">na wodzie</text></g>
      <rect x="60" y="80" width="25" height="22" class="f2 s2"/><rect x="85" y="80" width="25" height="22" class="f1 s1"/>
      <path d="M50,72 H160" class="ln sw" marker-end="url(#a-swe-m6)"/>
      <rect x="30" y="110" width="140" height="4" class="f4 s4"/><path d="M170,108 L182,112 L170,116 Z" class="f4 s4"/>
      <path d="M186,120 H208" class="ln sw" marker-end="url(#a-swe-m6)"/>
      <path d="M215,140 Q300,215 385,140" class="ln sw" fill="none"/>
      <ellipse cx="300" cy="140" rx="85" ry="14" class="f1 s1"/>
      <rect x="285" y="124" width="30" height="14" rx="3" class="f2 s2"/>
      <rect x="250" y="122" width="100" height="4" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="238" y="116">N</text><text x="362" y="116">S</text></g>
      <text x="200" y="212" text-anchor="middle" class="tx-b">Igła pokaże północ–południe!</text>
    </svg>`,
    text: `<p>Żelazo i stal przy magnesie <b>same stają się magnesem</b> – jak gwóźdź, który przyciąga spinacze.</p>
      <p>Zrób kompas z dorosłym (igła jest ostra!) – instrukcja w zakładce <b>🛠️ Zrób</b>. W Singapurze dzieci też robią magnes, pocierając.</p>
      <p>Zapowiedź: <b>elektromagnes</b> działa tylko, gdy płynie prąd – w Japonii budują go w 5. klasie. Tylko oglądamy – nie buduj go sam.</p>`,
    remember: 'Żelazo przy magnesie samo staje się magnesem.',
    hook: 'Magnes „pożycza” igle swoją moc – a igła na wodzie szuka północy.',
    check: { q: 'Czego potrzebujesz do kompasu z igły?', options: ['igły, magnesu, korka i miski z wodą', 'igły, kleju, farby i kartki'], answer: 0, explain: 'Igłę pocierasz magnesem, wbijasz w korek i kładziesz na wodzie – może się wtedy swobodnie obracać.' },
  },
];

window.LESSONS['elektrycznosc/czujniki'] = [
  {
    title: 'Urządzenia, które same reagują',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Flaga Anglii: key stage 3, uczniowie 11–14 lat – czujniki i mikrokontrolery. Flaga Japonii: gimnazjum, 12–15 lat – programują pomiar i sterowanie">
      <rect x="10" y="15" width="60" height="40" class="fl-w"/>
      <rect x="36" y="15" width="8" height="40" class="fl-r"/>
      <rect x="10" y="31" width="60" height="8" class="fl-r"/>
      <rect x="10" y="15" width="60" height="40" class="ln" fill="none"/>
      <text x="84" y="35" class="tx-b">Anglia · key stage 3</text>
      <text x="84" y="53" class="tx-s">11–14 lat: czujniki, mikrokontrolery</text>
      <rect x="10" y="95" width="60" height="40" class="fl-w"/>
      <circle cx="40" cy="115" r="12" class="fl-r"/>
      <rect x="10" y="95" width="60" height="40" class="ln" fill="none"/>
      <text x="84" y="115" class="tx-b">Japonia · gimnazjum</text>
      <text x="84" y="133" class="tx-s">12–15 lat: pomiar i sterowanie</text>
    </svg>`,
    text: `<p>W Anglii uczniowie w wieku 11–14 lat budują produkty, które <b>reagują na czujniki</b> i sterują np. silnikami – za pomocą <b>mikrokontrolerów</b>.</p>
      <p>W Japonii w gimnazjum (12–15 lat) uczniowie na technice <b>programują pomiar i sterowanie</b>: piszą program, sprawdzają go i poprawiają błędy.</p>`,
    remember: 'Pomiar i sterowanie: urządzenie samo mierzy i samo reaguje.',
  },
  {
    title: 'Wejście → sterownik → wyjście',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: czujnik (wejście) – strzałka – sterownik (program) – strzałka – element wykonawczy (wyjście). Przykład pod spodem: czujnik światła, warunek czy jest ciemno, lampa">
      <defs><marker id="a-swe-c2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="16" width="110" height="84" rx="10" class="f1 s1 sw"/>
      <rect x="145" y="16" width="110" height="84" rx="10" class="f5 s5 sw"/>
      <rect x="280" y="16" width="110" height="84" rx="10" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="65" y="50">Czujnik</text><text x="200" y="50">Sterownik</text><text x="335" y="44">Element</text></g>
      <text x="335" y="66" text-anchor="middle" class="tx">wykonawczy</text>
      <g class="tx-s" text-anchor="middle"><text x="65" y="76">wejście</text><text x="200" y="76">program</text><text x="335" y="88">wyjście</text></g>
      <g class="ln sw"><path d="M122,58 H141" marker-end="url(#a-swe-c2)"/><path d="M257,58 H276" marker-end="url(#a-swe-c2)"/>
        <path d="M122,155 H141" marker-end="url(#a-swe-c2)"/><path d="M257,155 H276" marker-end="url(#a-swe-c2)"/></g>
      <rect x="10" y="130" width="110" height="50" rx="10" class="f1 s1"/>
      <rect x="145" y="130" width="110" height="50" rx="10" class="f5 s5"/>
      <rect x="280" y="130" width="110" height="50" rx="10" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="65" y="161">☀️ światło</text><text x="200" y="161">ciemno?</text><text x="335" y="161">💡 lampa</text></g>
    </svg>`,
    text: `<p><b>Czujnik</b> mierzy coś w otoczeniu i zamienia to na sygnał elektryczny. <b>Sterownik</b> – np. mikrokontroler – wykonuje <b>program</b> i decyduje.</p>
      <p><b>Element wykonawczy</b> coś robi: silnik się kręci, lampa świeci, brzęczyk piszczy, pompa pompuje.</p>`,
    remember: 'Wejście (czujnik) → sterownik (program) → wyjście (element wykonawczy).',
    hook: 'Jak ty: oczy to czujnik, mózg to sterownik, a ręce – element wykonawczy.',
    check: { q: 'Który z tych elementów jest wyjściem (elementem wykonawczym)?', options: ['silnik', 'czujnik światła'], answer: 0, explain: 'Silnik robi coś w świecie – daje ruch. Czujnik światła to wejście.' },
  },
  {
    title: 'Jakie bywają czujniki?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Czujnik ultradźwiękowy wysyła ultradźwięki do ściany i odbiera echo. Pod spodem cztery rodzaje czujników: światło, temperatura, ciśnienie, poziom cieczy">
      <defs><marker id="a-swe-c3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="44" height="70" rx="6" class="f1 s1 sw"/>
      <circle cx="32" cy="40" r="9" class="bg ln"/><circle cx="32" cy="70" r="9" class="bg ln"/>
      <rect x="350" y="10" width="20" height="90" class="f4 s4"/>
      <g class="ln sw"><path d="M60,40 H342" marker-end="url(#a-swe-c3)"/><path d="M342,70 H60" marker-end="url(#a-swe-c3)"/></g>
      <g class="tx" text-anchor="middle"><text x="200" y="32">ultradźwięki</text><text x="200" y="92">echo</text></g>
      <rect x="10" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <rect x="107" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <rect x="205" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <rect x="302" y="130" width="88" height="86" rx="10" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="54" y="166">☀️</text><text x="151" y="166">🌡️</text><text x="249" y="166">⏲️</text><text x="346" y="166">💧</text></g>
      <g class="tx-s" text-anchor="middle"><text x="54" y="196">światło</text><text x="151" y="196">temperatura</text><text x="249" y="196">ciśnienie</text><text x="346" y="190">poziom</text><text x="346" y="207">cieczy</text></g>
    </svg>`,
    text: `<p>Czujnik <b>ultradźwiękowy</b> wysyła ultradźwięki i mierzy, po jakim czasie wróci <b>echo</b>. Im dłużej, tym przeszkoda dalej. Czujnik <b>optyczny</b> reaguje na światło. Są też czujniki temperatury, ciśnienia i poziomu cieczy.</p>
      <p>Przycisk to czujnik <b>dwustanowy</b>: daje tylko 1 albo 0 – włączony albo wyłączony.</p>`,
    remember: 'Czujnik zamienia światło, odległość czy temperaturę na sygnał elektryczny.',
    hook: 'Ultradźwiękowy działa jak echo w górach: krzyczysz i czekasz, kiedy wróci.',
  },
  {
    title: 'Program w pętli: mierz → porównaj → steruj',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Program: while True, jasnosc równa się czujnik, jeśli jasnosc mniejsza od 30 – lampa włącz, w przeciwnym razie – lampa wyłącz. Tabela: jasność 20 – włącz, 30 – wyłącz, 50 – wyłącz. 30 mniejsze od 30 to fałsz">
      <rect x="10" y="10" width="255" height="182" rx="10" class="f1 s1"/>
      <g class="tx"><text x="22" y="40">while True:</text><text x="42" y="68">jasnosc = czujnik()</text><text x="42" y="96">if jasnosc &lt; 30:</text>
        <text x="62" y="124">lampa_wlacz()</text><text x="42" y="152">else:</text><text x="62" y="180">lampa_wylacz()</text></g>
      <rect x="280" y="10" width="130" height="34" rx="6" class="f4 s4"/>
      <g class="tx-s"><text x="288" y="32">jasnosc</text><text x="350" y="32">lampa</text></g>
      <rect x="280" y="52" width="130" height="32" rx="6" class="f3 s3"/>
      <rect x="280" y="92" width="130" height="32" rx="6" class="f2 s2 sw"/>
      <rect x="280" y="132" width="130" height="32" rx="6" class="f2 s2"/>
      <g class="tx"><text x="300" y="74">20</text><text x="350" y="74">włącz</text><text x="300" y="114">30</text><text x="350" y="114">wyłącz</text><text x="300" y="154">50</text><text x="350" y="154">wyłącz</text></g>
      <text x="345" y="186" text-anchor="middle" class="tx-s">30 &lt; 30 → fałsz</text>
    </svg>`,
    text: `<p>Sterownik w kółko powtarza: <b>zmierz → porównaj → steruj</b>. Pętla <code>while True</code> działa bez końca, bo świat ciągle się zmienia.</p>
      <p>Uważaj na granicę: dla 30 warunek <code>30 &lt; 30</code> jest fałszywy – wykona się <code>else</code>.</p>`,
    remember: 'Mierz → porównaj → steruj – i od nowa.',
    hook: 'Sprawdzaj granicę jak bramkarz linię bramki: „równo” to jeszcze nie „mniej”.',
    check: { q: 'Czujnik zmierzył jasnosc = 30. Co zrobi program z rysunku?', options: ['wyłączy lampę', 'włączy lampę'], answer: 0, explain: '30 < 30 to fałsz, więc wykona się else: lampa_wylacz().' },
  },
  {
    title: 'Kilka czujników – logika AND i OR',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Dwa czujniki: ciemno i ktoś blisko prowadzą do bramki AND, a ona do lampy. Drugi przykład: drzwi otwarte i okno otwarte prowadzą do bramki OR, a ona do alarmu">
      <defs><marker id="a-swe-c5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="15" width="140" height="36" rx="8" class="f1 s1"/><rect x="10" y="65" width="140" height="36" rx="8" class="f1 s1"/>
      <rect x="10" y="125" width="140" height="36" rx="8" class="f1 s1"/><rect x="10" y="175" width="140" height="36" rx="8" class="f1 s1"/>
      <g class="tx"><text x="22" y="39">ciemno</text><text x="22" y="89">ktoś blisko</text><text x="22" y="149">drzwi otwarte</text><text x="22" y="199">okno otwarte</text></g>
      <rect x="190" y="30" width="70" height="56" rx="8" class="f5 s5 sw"/><rect x="190" y="140" width="70" height="56" rx="8" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="225" y="64">AND</text><text x="225" y="174">OR</text></g>
      <g class="ln" fill="none"><path d="M150,33 H172 V48 H186" marker-end="url(#a-swe-c5)"/><path d="M150,83 H172 V68 H186" marker-end="url(#a-swe-c5)"/>
        <path d="M150,143 H172 V158 H186" marker-end="url(#a-swe-c5)"/><path d="M150,193 H172 V178 H186" marker-end="url(#a-swe-c5)"/>
        <path d="M260,58 H300" marker-end="url(#a-swe-c5)"/><path d="M260,168 H300" marker-end="url(#a-swe-c5)"/></g>
      <rect x="305" y="40" width="85" height="36" rx="8" class="f3 s3"/><rect x="305" y="150" width="85" height="36" rx="8" class="f3 s3"/>
      <g class="tx"><text x="312" y="64">💡 lampa</text><text x="312" y="174">🔔 alarm</text></g>
    </svg>`,
    text: `<p>Gdy czujników jest kilka, program łączy warunki jak <b>bramki logiczne</b>.</p>
      <p>Lampa przy drzwiach świeci, gdy jest ciemno <b>AND</b> ktoś jest blisko – muszą być spełnione oba warunki. Alarm piszczy, gdy otwarte są drzwi <b>OR</b> okno – wystarczy jeden.</p>`,
    remember: 'AND – muszą być oba. OR – wystarczy jeden.',
    hook: 'Znasz to z działu o bramkach: AND to „i”, OR to „lub”.',
    check: { q: 'Jest ciemno, ale nikogo nie ma. Czy lampa (ciemno AND ktoś blisko) świeci?', options: ['nie', 'tak'], answer: 0, explain: 'AND wymaga, żeby oba warunki były prawdziwe. Nikogo nie ma, więc lampa nie świeci.' },
  },
  {
    title: 'Sprzężenie zwrotne – pętla zamknięta',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Pętla: sterownik włącza grzałkę, grzałka ogrzewa wodę, czujnik mierzy temperaturę wody, sterownik porównuje i znów steruje grzałką">
      <defs><marker id="a-swe-c6" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="20" width="160" height="50" rx="10" class="f5 s5 sw"/>
      <rect x="220" y="20" width="160" height="50" rx="10" class="f3 s3 sw"/>
      <rect x="220" y="150" width="160" height="50" rx="10" class="f2 s2 sw"/>
      <rect x="20" y="150" width="160" height="50" rx="10" class="f1 s1 sw"/>
      <g class="tx" text-anchor="middle"><text x="100" y="51">🧠 sterownik</text><text x="300" y="51">🔥 grzałka</text><text x="300" y="181">💧 woda cieplejsza</text><text x="100" y="181">🌡️ czujnik</text></g>
      <g class="ln sw"><path d="M182,45 H216" marker-end="url(#a-swe-c6)"/><path d="M300,72 V146" marker-end="url(#a-swe-c6)"/>
        <path d="M218,175 H184" marker-end="url(#a-swe-c6)"/><path d="M100,148 V74" marker-end="url(#a-swe-c6)"/></g>
      <text x="200" y="115" text-anchor="middle" class="tx-s">pętla zamknięta</text>
    </svg>`,
    text: `<p>Czujnik mierzy <b>skutek</b> tego, co zrobił element wykonawczy. Sterownik porównuje to z celem i <b>poprawia</b> działanie. To <b>sprzężenie zwrotne</b> – pętla zamknięta.</p>
      <p>Woda za zimna? Grzałka grzeje. Dość ciepła? Sterownik wyłącza grzałkę.</p>`,
    remember: 'Sprzężenie zwrotne: czujnik sprawdza skutek, sterownik poprawia.',
    hook: 'Jak jazda na rowerze: widzisz, że zjeżdżasz w bok – i od razu poprawiasz kierownicą.',
  },
];
