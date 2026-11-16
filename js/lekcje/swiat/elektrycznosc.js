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
    title: 'Co jest nowe? Urządzenie samo mierzy i reaguje',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej: w polskiej szkole program steruje robotem albo postacią na ekranie. Po prawej, nowe: czujnik mierzy świat, program decyduje, silnik albo lampa działa. Na dole: mierz, porównaj, steruj i mierz znowu">
      <defs><marker id="a-swe-cz1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="170" height="120" rx="12" class="f4 s4"/>
      <rect x="220" y="10" width="170" height="120" rx="12" class="f3 s3 sw"/>
      <g class="tx-b"><text x="22" y="38">🇵🇱 Polska</text><text x="232" y="38">🌍 Nowe</text></g>
      <g class="tx"><text x="22" y="66">program steruje</text><text x="22" y="90">robotem albo</text><text x="22" y="114">postacią na ekranie</text>
        <text x="232" y="66">czujnik mierzy</text><text x="232" y="90">program decyduje</text><text x="232" y="114">silnik działa</text></g>
      <path d="M182,70 H214" class="ln sw" marker-end="url(#a-swe-cz1)"/>
      <rect x="10" y="148" width="380" height="40" rx="10" class="f1 s1"/>
      <text x="200" y="174" text-anchor="middle" class="tx">🔁 mierz → porównaj → steruj → mierz znowu</text>
    </svg>`,
    text: `<p>🇵🇱 <b>Przypomnienie:</b> w polskiej szkole na informatyce (kl. IV–VIII) piszesz program z warunkami i pętlami i sterujesz robotem albo postacią na ekranie – znasz to albo poznasz. <b>Czujników, elementów wykonawczych i sprzężenia zwrotnego polska podstawa szkoły podstawowej nie wymaga.</b></p>
      <p>Tu urządzenie <b>samo mierzy świat i samo reaguje</b>. Tego uczą się rówieśnicy w Anglii (11–14 lat) i w Japonii (gimnazjum). Jest to też w programach Korei i szwajcarskiego Lehrplan 21, a w Estonii i Bawarii – w przedmiocie lub module do wyboru.</p>`,
    remember: 'Urządzenie samo mierzy (czujnik), decyduje (program) i działa (element wykonawczy).',
    check: { q: '🇵🇱 Przypomnienie (informatyka, kl. VII–VIII): lampa świeci, gdy ciemno and ktos_blisko. Jest ciemno, nikogo nie ma. Czy lampa świeci?', options: ['nie', 'tak'], answer: 0, explain: 'AND wymaga, żeby oba warunki były prawdziwe. Nikogo nie ma, więc lampa nie świeci.' },
  },
  {
    title: 'Czujnik → program → element wykonawczy',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schemat: czujnik (wejście), strzałka z podpisem A/C, komputer z programem, strzałka, element wykonawczy (wyjście). Przykład pod spodem: światło od 0 do 255, warunek czy odczyt jest mniejszy od progu, lampa">
      <defs><marker id="a-swe-cz2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="16" width="104" height="84" rx="10" class="f1 s1 sw"/>
      <rect x="148" y="16" width="104" height="84" rx="10" class="f5 s5 sw"/>
      <rect x="286" y="16" width="104" height="84" rx="10" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="62" y="50">Czujnik</text><text x="200" y="50">Program</text><text x="338" y="44">Element</text></g>
      <text x="338" y="66" text-anchor="middle" class="tx">wykonawczy</text>
      <g class="tx-s" text-anchor="middle"><text x="62" y="76">wejście</text><text x="200" y="76">komputer</text><text x="338" y="88">wyjście</text>
        <text x="131" y="52">A/C</text></g>
      <g class="ln sw"><path d="M116,60 H145" marker-end="url(#a-swe-cz2)"/><path d="M254,60 H283" marker-end="url(#a-swe-cz2)"/>
        <path d="M116,155 H145" marker-end="url(#a-swe-cz2)"/><path d="M254,155 H283" marker-end="url(#a-swe-cz2)"/></g>
      <rect x="10" y="130" width="104" height="50" rx="10" class="f1 s1"/>
      <rect x="148" y="130" width="104" height="50" rx="10" class="f5 s5"/>
      <rect x="286" y="130" width="104" height="50" rx="10" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="62" y="161">☀️ 0–255</text><text x="200" y="161">&lt; próg?</text><text x="338" y="161">💡 lampa</text></g>
    </svg>`,
    text: `<p><b>Czujnik</b> mierzy coś w otoczeniu i zamienia to na sygnał elektryczny. <b>Interfejs</b> zamienia sygnał analogowy na cyfrowy (A/C) – i program dostaje liczbę, np. jasność od 0 do 255. <b>Program</b> w komputerze (np. w mikrokontrolerze) porównuje ją z progiem i decyduje.</p>
      <p><b>Element wykonawczy</b> zamienia sygnał sterujący w ruch albo działanie: silnik się kręci, lampa świeci, brzęczyk piszczy, pompa pompuje. Tak opisuje system japoński komentarz do techniki w gimnazjum.</p>`,
    remember: 'Wejście (czujnik) → program → wyjście (element wykonawczy).',
    hook: 'Czujnik to „zmysł” maszyny: oko – czujnik światła, ucho – czujnik dźwięku, skóra – czujnik nacisku. Tak tłumaczą to na japońskim szkoleniu dla nauczycieli, a szwajcarski Lehrplan 21 (kantony niemieckojęzyczne) porównuje te części z organizmami żywymi.',
    check: { q: 'Który z tych elementów jest wyjściem (elementem wykonawczym)?', options: ['silnik', 'czujnik światła'], answer: 0, explain: 'Silnik robi coś w świecie – daje ruch. Czujnik światła to wejście.' },
  },
  {
    title: 'Jak czujnik zamienia świat na sygnał?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej fotorezystor: mniej światła, większy opór, inne napięcie, sygnał dla programu. Po prawej czujnik ultradźwiękowy: wysyła dźwięk do ściany i odbiera echo, działa też po ciemku. Niżej czujnik linii: białe podłoże odbija dużo światła, czarne mało, o skręcie decyduje program">
      <defs><marker id="a-swe-cz3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="95" y="24" text-anchor="middle" class="tx-b">Fotorezystor</text>
      <rect x="15" y="36" width="160" height="30" rx="8" class="f4 s4"/><rect x="15" y="82" width="160" height="30" rx="8" class="f2 s2"/>
      <rect x="15" y="128" width="160" height="30" rx="8" class="f2 s2"/><rect x="15" y="174" width="160" height="30" rx="8" class="f5 s5"/>
      <g class="tx" text-anchor="middle"><text x="95" y="57">🌙 mniej światła</text><text x="95" y="103">większy opór</text><text x="95" y="149">inne napięcie</text><text x="95" y="195">sygnał</text></g>
      <g class="ln"><path d="M95,67 V78" marker-end="url(#a-swe-cz3)"/><path d="M95,113 V124" marker-end="url(#a-swe-cz3)"/><path d="M95,159 V170" marker-end="url(#a-swe-cz3)"/></g>
      <text x="290" y="24" text-anchor="middle" class="tx-b">Ultradźwięki</text>
      <rect x="205" y="38" width="22" height="50" rx="4" class="f1 s1 sw"/><rect x="372" y="34" width="14" height="58" class="f4 s4"/>
      <g class="ln"><path d="M232,52 H366" marker-end="url(#a-swe-cz3)"/><path d="M366,76 H232" marker-end="url(#a-swe-cz3)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="299" y="46">dźwięk</text><text x="299" y="70">echo</text><text x="296" y="108">działa też po ciemku</text></g>
      <text x="290" y="140" text-anchor="middle" class="tx-b">Czujnik linii</text>
      <rect x="205" y="152" width="182" height="58" rx="8" class="f1 s1"/>
      <g class="tx-s"><text x="214" y="172">⚪ białe: dużo wraca</text><text x="214" y="188">⚫ czarne: mało wraca</text><text x="214" y="204">decyduje program</text></g>
    </svg>`,
    text: `<p><b>Fotorezystor</b> (LDR): im mniej światła, tym większy opór. Zmiana oporu daje zmianę napięcia – i to jest sygnał dla programu. Nie „czuje” światła sam z siebie.</p>
      <p><b>Czujnik ultradźwiękowy</b> wysyła dźwięk i mierzy czas powrotu echa – więc działa też w ciemnym pokoju. <b>Czujnik linii</b> świeci podczerwienią i mierzy, ile światła wraca. Przekazuje tylko dane – o skręcie decyduje program. Te pomyłki („LDR tylko czuje”, „czujnik widzi jak kamera”) lekcje Oak opisują jako częste.</p>`,
    remember: 'Czujnik daje dane. Decyduje program.',
    hook: 'Ultradźwiękowy działa jak nietoperz – tak tłumaczy to bawarski materiał dla szkół: krzyczy i słucha, kiedy wróci echo.',
    check: { q: 'Robi się ciemniej. Co dzieje się z oporem fotorezystora?', options: ['rośnie', 'maleje'], answer: 0, explain: 'Mniej światła – większy opór. Zmiana oporu zmienia napięcie, a to jest sygnał.' },
  },
  {
    title: '🌍 Próg – dobierz go z pomiarów',
    widget: { type: 'czujniki', tryb: 'prog', prog: 100 },
    text: `<p><b>Próg</b> to wartość graniczna: po jednej stronie jedno działanie, po drugiej drugie. W bawarskim materiale dla szkół (ISB) robot mierzy czujnikiem raz nad białym, raz nad czarnym podłożem – a próg to <b>średnia</b> tych odczytów.</p>
      <p>W japońskiej lekcji MEXT z czujnikiem wilgotności gleby najlepszy próg wybiera się z danych zebranych rejestratorem. Sprawdź też wartość <b>równą</b> progowi – ma być <code>&lt;</code> czy <code>&lt;=</code>?</p>
      <p>W symulatorze zmierz oba podłoża, ustaw próg i przewidź, co zrobi robot. Potem spróbuj progu poza odczytami.</p>`,
    remember: 'Próg wybierasz z pomiarów – musi leżeć między odczytami.',
    hook: 'Próg jak linia na boisku: po jednej stronie aut, po drugiej gra. A piłka na samej linii? Musisz ustalić regułę.',
    check: { q: 'Czujnik pokazuje 20 nad czarną linią i 80 nad białym podłożem. Jaki próg daje średnia?', options: ['50', '100'], answer: 0, explain: '(20 + 80) : 2 = 50. Próg 100 byłby większy od każdego odczytu – robot zawsze wybierałby tę samą reakcję.' },
  },
  {
    title: '🌍 Na czas czy na pomiar? Sprzężenie zwrotne',
    widget: { type: 'czujniki', tryb: 'czas' },
    text: `<p>Japońskie szkolenie MEXT porównuje dwa programy: <b>„jedź 3 s”</b> – na czas – i <b>„jedź, aż czujnik pokaże ≤ 10 cm”</b> – na pomiar (liczby są nasze). Pierwszy nie wie, gdzie jest ściana. Drugi mierzy <b>skutek</b> ruchu i reaguje – to <b>sprzężenie zwrotne</b>, pętla zamknięta.</p>
      <p>Lekcje Oak: zwykły silnik prądu stałego działa w pętli otwartej, a <b>serwo</b> – w zamkniętej, dlatego pilnuje położenia, np. w ramieniu robota. Szklarnia: powyżej 30 °C okno się otwiera, a czujnik dalej mierzy.</p>
      <p>Dla chętnych: termostat ma <b>histerezę</b> – różnicę temperatur włączenia i wyłączenia. Mniejsza daje mniejsze wahania, ale częstsze przełączanie.</p>`,
    remember: 'Sprzężenie zwrotne: czujnik mierzy skutek, program poprawia działanie.',
    hook: 'Jak jazda na rowerze: widzisz, że zjeżdżasz w bok – i od razu poprawiasz kierownicą.',
    check: { q: 'Ramię robota ma stanąć dokładnie pod kątem 90°. Który silnik z tych dwóch?', options: ['serwo', 'zwykły silnik prądu stałego'], answer: 0, explain: 'Serwo działa w pętli zamkniętej – samo sprawdza położenie. Zwykły silnik prądu stałego go nie sprawdza.' },
  },
  {
    title: 'Projektuj jak japoński uczeń – i omiń pułapki',
    svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Kolejne kroki projektu: problem, schemat wejść i wyjść, algorytm na diagramie, program, test z danymi granicznymi i awarią czujnika, poprawki. Na dole: mikrokontroler wysyła sygnał do sterownika silnika, a sterownik zasila silnik – mikrokontroler daje sygnał, nie moc">
      <defs><marker id="a-swe-cz6" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="112" height="56" rx="10" class="f4 s4"/><rect x="144" y="10" width="112" height="56" rx="10" class="f4 s4"/><rect x="278" y="10" width="112" height="56" rx="10" class="f4 s4"/>
      <rect x="278" y="90" width="112" height="56" rx="10" class="f1 s1"/><rect x="144" y="90" width="112" height="56" rx="10" class="f2 s2 sw"/><rect x="10" y="90" width="112" height="56" rx="10" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="66" y="44">❓ problem</text><text x="200" y="44">🗺️ schemat</text><text x="334" y="44">📈 diagram</text>
        <text x="334" y="124">💻 program</text><text x="200" y="116">🧪 test</text><text x="66" y="124">🔁 poprawki</text></g>
      <text x="200" y="137" text-anchor="middle" class="tx-s">próg, awaria</text>
      <g class="ln"><path d="M123,38 H140" marker-end="url(#a-swe-cz6)"/><path d="M257,38 H274" marker-end="url(#a-swe-cz6)"/><path d="M334,67 V86" marker-end="url(#a-swe-cz6)"/>
        <path d="M277,118 H260" marker-end="url(#a-swe-cz6)"/><path d="M143,118 H126" marker-end="url(#a-swe-cz6)"/></g>
      <rect x="10" y="176" width="120" height="56" rx="10" class="f5 s5"/><rect x="160" y="176" width="120" height="56" rx="10" class="f2 s2"/><rect x="310" y="176" width="80" height="56" rx="10" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="70" y="200">mikro-</text><text x="70" y="222">kontroler</text><text x="220" y="200">sterownik</text><text x="220" y="222">silnika</text><text x="350" y="211">⚙️ silnik</text></g>
      <g class="ln sw"><path d="M131,204 H156" marker-end="url(#a-swe-cz6)"/><path d="M281,204 H306" marker-end="url(#a-swe-cz6)"/></g>
      <text x="200" y="248" text-anchor="middle" class="tx-s">mikrokontroler daje sygnał, nie moc</text>
    </svg>`,
    text: `<p>W Japonii uczeń sam <b>projektuje</b> system do problemu z życia: najpierw problem i schemat wejść i wyjść, potem algorytm na diagramie, dopiero potem program. Test: zwykłe dane, wartość równa progowi i <b>awaria czujnika</b> – system ma ją zauważyć, np. gdy odczyt długo się nie zmienia.</p>
      <p>Pułapka z lekcji Oak: silnika nie podłączasz wprost do mikrokontrolera – tylko przez <b>sterownik silnika</b> z osobnym zasilaniem. I zawsze tylko niskie napięcie: baterie albo USB.</p>`,
    remember: 'Najpierw problem i algorytm, potem kod. Testuj granicę i awarię.',
    hook: 'Mikrokontroler to dyrygent: daje znak, ale sam nie gra na każdym instrumencie – grają muzycy (sterownik silnika i silnik).',
    check: { q: 'Mikrokontroler ma kręcić silnikiem. Jak je połączyć?', options: ['przez sterownik silnika', 'wprost do pinu mikrokontrolera'], answer: 0, explain: 'Mikrokontroler daje sygnał, nie moc. Silnik zasila sterownik silnika z osobnego źródła.' },
  },
];
