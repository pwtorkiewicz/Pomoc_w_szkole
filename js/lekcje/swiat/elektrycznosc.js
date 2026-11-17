/* Lekcje – 🌍 Świat, elektryczność i sterowanie. Klucze: 'elektrycznosc/magnesy', 'elektrycznosc/obwody', 'elektrycznosc/czujniki'. Format: docs/LEKCJE.md
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

window.LESSONS['elektrycznosc/obwody'] = [
  {
    title: '🇵🇱 Przypomnienie: obwód zamknięty',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej obwód zamknięty: bateria, przewody i żarówka tworzą pętlę – żarówka świeci. Po prawej w przewodzie jest przerwa – żarówka nie świeci. Na dole: prąd płynie tylko w zamkniętej pętli">
      <rect x="10" y="10" width="185" height="145" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="145" rx="12" class="f2 s2"/>
      <g class="tx-b"><text x="22" y="36">✅ świeci</text><text x="217" y="36">❌ nie świeci</text></g>
      <path d="M40,75 H89 M119,75 H165 V135 H107 M93,135 H40 V75" class="ln sw"/>
      <path d="M93,121 V149" class="ln"/><path d="M107,127 V143" class="ln ob-gruba"/>
      <path d="M104,54 V47 M89,60 L84,55 M119,60 L124,55" class="ln s4 sw"/>
      <circle cx="104" cy="75" r="15" class="ob-jasna ln sw"/><path d="M94,65 L114,85 M114,65 L94,85" class="ln"/>
      <path d="M235,75 H284 M314,75 H320 M340,75 H360 V135 H302 M288,135 H235 V75" class="ln sw"/>
      <path d="M288,121 V149" class="ln"/><path d="M302,127 V143" class="ln ob-gruba"/>
      <circle cx="299" cy="75" r="15" class="bg ln sw"/><path d="M289,65 L309,85 M309,65 L289,85" class="ln"/>
      <text x="330" y="100" text-anchor="middle" class="tx-s">przerwa</text>
      <text x="200" y="184" text-anchor="middle" class="tx">Prąd płynie tylko w zamkniętej pętli.</text>
    </svg>`,
    text: `<p>To znasz albo poznasz w polskiej szkole: na <b>zajęciach praktyczno-technicznych</b> (kl. 4, nowa podstawa) budujesz przedmiot z prostym obwodem, np. lampkę, a na technice (kl. 4–6, dotychczasowa podstawa) poznajesz elementy elektryczne. Prąd płynie tylko wtedy, gdy bateria, przewody i żarówka tworzą <b>zamkniętą pętlę</b> – od jednego bieguna baterii do drugiego. <b>Wyłącznik</b> tę pętlę otwiera i zamyka.</p>
      <p>Dalej to, czego uczą się rówieśnicy w innych krajach, a polska podstawa programowa szkoły podstawowej nie wymaga: <b>łączenie szeregowe i równoległe</b> oraz <b>elektromagnes</b>.</p>`,
    remember: 'Prąd płynie tylko w zamkniętej pętli: od plusa baterii, przez żarówkę, do minusa.',
    check: { q: 'Oba przewody od żarówki są przy plusie baterii. Czy żarówka świeci?', options: ['nie', 'tak'], answer: 0, explain: 'Nie ma pętli przez oba bieguny – jeden przewód musi iść do plusa, drugi do minusa.' },
  },
  {
    title: 'Gdzie się tego uczą? Bateria „pcha” prąd',
    svg: `<svg viewBox="0 0 400 255" role="img" aria-label="Gdzie uczą obwodów i elektromagnesu: Japonia – 9–11 lat (kl. 4 – baterie, kl. 5 – elektromagnes), Singapur – 10–11 lat, Korea – klasy 5–6, Anglia – 8–11 lat, według uwag do programu tylko szeregowo, Szwajcaria – klasy 3–6, Lehrplan 21. Na dole nasze porównanie: bateria jak pompa, przewód jak rura, żarówka jak koło wodne – woda, czyli prąd, krąży w kółko">
      <defs><marker id="a-sw-ob2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="120" height="54" rx="10" class="f4 s4"/><rect x="140" y="10" width="120" height="54" rx="10" class="f3 s3"/><rect x="270" y="10" width="120" height="54" rx="10" class="f5 s5"/>
      <rect x="10" y="72" width="185" height="54" rx="10" class="f1 s1"/><rect x="205" y="72" width="185" height="54" rx="10" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="70" y="33">Japonia</text><text x="200" y="33">Singapur</text><text x="330" y="33">Korea</text><text x="102" y="95">Anglia</text><text x="297" y="95">Szwajcaria</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="54">9–11 lat</text><text x="200" y="54">10–11 lat</text><text x="330" y="54">kl. 5–6</text><text x="102" y="116">8–11 lat, tylko szeregowo</text><text x="297" y="116">kl. 3–6 (Lehrplan 21)</text></g>
      <rect x="10" y="150" width="110" height="50" rx="10" class="f1 s1"/><rect x="145" y="150" width="110" height="50" rx="10" class="f1 s1"/><rect x="280" y="150" width="110" height="50" rx="10" class="f1 s1"/>
      <g class="tx" text-anchor="middle"><text x="65" y="172">🔋 bateria</text><text x="200" y="172">〰️ przewód</text><text x="335" y="172">💡 żarówka</text></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="192">= pompa</text><text x="200" y="192">= rura</text><text x="335" y="192">= koło wodne</text></g>
      <g class="ln"><path d="M121,175 H141" marker-end="url(#a-sw-ob2)"/><path d="M256,175 H276" marker-end="url(#a-sw-ob2)"/><path d="M335,201 V222 H65 V205" class="dash" marker-end="url(#a-sw-ob2)"/></g>
      <text x="200" y="246" text-anchor="middle" class="tx-s">woda (prąd) krąży w kółko – to nasze porównanie</text>
    </svg>`,
    text: `<p>Obwodów i elektromagnesu uczą się dzieci w <b>Japonii</b> (4. klasa – baterie szeregowo i równolegle, 5. klasa – elektromagnes), <b>Singapurze</b> (Primary 5 – żarówki szeregowo i równolegle), <b>Korei</b> (kl. 5–6 – baterie tylko szeregowo, elektromagnes) i <b>Szwajcarii</b> (Lehrplan 21, kl. 3–6). W <b>Anglii</b> w szkole podstawowej – według uwag do programu tylko szeregowo.</p>
      <p>Bateria nie ma w sobie zapasu prądu. Daje <b>„pchnięcie”</b> – <b>napięcie</b> w woltach (V); paluszek AA ma ok. 1,5 V. Szwajcarski program porównuje prąd do płynącej wody; rury i pompa na rysunku to nasze porównanie.</p>`,
    remember: 'Bateria pcha prąd – napięcie w woltach (V). Odczytujesz je z napisu, nie z wielkości baterii.',
    hook: 'Bateria jak pompa w akwarium: woda krąży w kółko, a pompa tylko ją pcha. Przerwiesz rurę – nic nie płynie.',
    check: { q: 'Duża i mała bateria mają ten sam napis: 1,5 V. Która mocniej „pcha” prąd?', options: ['obie tak samo', 'ta większa'], answer: 0, explain: 'O napięciu mówi napis V, nie wielkość. Lekcje Oak opisują „większa bateria – większe napięcie” jako częsty błąd.' },
  },
  {
    title: '🌍 Japonia, 4. klasa: dwie baterie',
    widget: { type: 'obwody', tryb: 'baterie' },
    text: `<p>Japońskie dzieci w 4. klasie zmieniają <b>liczbę baterii</b> i <b>sposób ich połączenia</b> – i patrzą na żaróweczkę i silnik.</p>
      <ul><li><b>Szeregowo</b> – plus jednej do minusa drugiej: 1,5 V + 1,5 V = 3 V. Jaśniej, szybciej.</li>
        <li><b>Równolegle</b> – plus do plusa, minus do minusa: napięcie jak jednej baterii, ale starczą na dłużej. Zawsze plus do plusa – odwrócona bateria to zwarcie!</li>
        <li><b>Odwrócone</b> – prąd płynie w drugą stronę: silnik kręci się w drugą stronę.</li></ul>
      <p>Ustaw obwód, <b>najpierw przewidź</b>, potem sprawdź.</p>`,
    remember: 'Szeregowo: napięcia się dodają. Równolegle: napięcie jak jednej baterii, ale dłużej. Odwrócona bateria – prąd w drugą stronę.',
    hook: 'Szeregowo jak schody: druga bateria podnosi wyżej. Równolegle jak dwa zbiorniki na tej samej wysokości – wyżej nie jest, ale wody starczy na dłużej.',
    check: { q: 'Silnik kręci się w prawo. Odwracasz baterię. Co zrobi silnik?', options: ['zakręci się w lewo', 'dalej w prawo'], answer: 0, explain: 'Prąd płynie w drugą stronę, więc silnik kręci się w drugą stronę.' },
  },
  {
    title: '🌍 Dwie żarówki: szeregowo czy równolegle?',
    widget: { type: 'obwody', tryb: 'zarowki' },
    text: `<p>Singapur (Primary 5) i Szwajcaria (kl. 3–6) uczą łączyć dwie żarówki na dwa sposoby. Anglia w szkole podstawowej – według uwag do programu tylko szeregowo.</p>
      <ul><li><b>Szeregowo</b> – jedna droga: wykręcisz jedną, gasną obie. Świecą słabiej niż jedna.</li>
        <li><b>Równolegle</b> – każda ma swoją drogę: wykręcisz jedną, druga świeci. Świecą jaśniej niż w szeregu. Tak połączone są lampy w domu.</li></ul>
      <p>Wykręcaj żarówki i zmieniaj połączenie. Zawsze najpierw przewidź.</p>`,
    remember: 'Szeregowo – jedna droga, wszystko albo nic. Równolegle – każda żarówka swoją drogą.',
    hook: 'Szeregowo jak jedna ścieżka przez jeden most – zamkniesz most i nikt nie przejdzie. Równolegle jak dwa mosty – jeden zamknięty, drugim dalej się chodzi.',
    check: { q: 'W domu przepaliła się żarówka w kuchni, a w pokoju światło dalej świeci. Jak połączone są lampy?', options: ['równolegle', 'szeregowo'], answer: 0, explain: 'Lampy w domu łączy się równolegle – awaria jednej nie gasi pozostałych.' },
  },
  {
    title: '🌍 Elektromagnes: magnes na prąd',
    widget: { type: 'obwody', tryb: 'elektromagnes' },
    text: `<p>W <b>Japonii</b> (5. klasa) i <b>Korei</b> (kl. 5–6) dzieci budują elektromagnes: drut nawinięty wiele razy – <b>zwojnica</b> – na żelaznym gwoździu i bateria. Działa <b>tylko wtedy, gdy płynie prąd</b>. Więcej zwojów (Japonia) albo większy prąd – więcej baterii szeregowo (Japonia, Korea) – silniej. Odwrócisz baterię – <b>N i S się zamieniają</b>.</p>
      <p><b>Uczciwy test</b> (Japonia): zmieniaj jedną rzecz naraz, a drut zawsze tej samej długości. W prawdziwym doświadczeniu drut się grzeje – podłączaj go tylko na kilka sekund.</p>`,
    remember: 'Elektromagnes = zwojnica + żelazny rdzeń + prąd. Więcej zwojów albo prądu – silniej. Bez prądu – nie działa.',
    hook: 'Elektromagnes jak lampa z wyłącznikiem: włączasz – działa, wyłączasz – gaśnie.',
    check: { q: 'Sprawdzasz, czy liczba zwojów zmienia siłę elektromagnesu. Co zostawiasz bez zmian?', options: ['baterię i długość drutu', 'liczbę zwojów'], answer: 0, explain: 'Zmieniasz tylko to, co badasz – zwoje. Bateria, drut i spinacze zostają takie same.' },
  },
  {
    title: 'Schemat i pułapki – podsumowanie',
    svg: `<svg viewBox="0 0 400 272" role="img" aria-label="Symbole na schemacie: ogniwo – dwie kreski, dłuższa to plus; żarówka – kółko z krzyżykiem; wyłącznik – linia z uniesioną klapką, tu otwarty. Niżej schemat: ogniwo i dwie żarówki szeregowo, narysowane symbolami. Na dole ostrzeżenie: zwarcie – plus i minus połączone samym drutem, bateria i drut się grzeją, nigdy tak nie rób">
      <rect x="8" y="8" width="124" height="86" rx="10" class="f4 s4"/><rect x="138" y="8" width="124" height="86" rx="10" class="f4 s4"/><rect x="268" y="8" width="124" height="86" rx="10" class="f4 s4"/>
      <path d="M22,34 H64 M76,34 H118" class="ln sw"/><path d="M64,18 V50" class="ln"/><path d="M76,25 V43" class="ln ob-gruba"/>
      <path d="M152,34 H186 M214,34 H248" class="ln sw"/><circle cx="200" cy="34" r="14" class="bg ln sw"/><path d="M190,24 L210,44 M210,24 L190,44" class="ln"/>
      <path d="M282,34 H310 M350,34 H378" class="ln sw"/><path d="M310,34 L344,16" class="ln sw"/><circle cx="310" cy="34" r="4" class="ob-wezel"/><circle cx="350" cy="34" r="4" class="ob-wezel"/>
      <g class="tx" text-anchor="middle"><text x="70" y="70">ogniwo</text><text x="200" y="70">żarówka</text><text x="330" y="70">wyłącznik</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="87">długa kreska: +</text><text x="200" y="87">kółko i krzyżyk</text><text x="330" y="87">otwarty</text></g>
      <path d="M60,124 H136 M164,124 H236 M264,124 H340 V176 H205 M195,176 H60 V124" class="ln sw"/>
      <path d="M195,162 V190" class="ln"/><path d="M205,168 V184" class="ln ob-gruba"/>
      <circle cx="150" cy="124" r="14" class="bg ln sw"/><path d="M140,114 L160,134 M160,114 L140,134" class="ln"/>
      <circle cx="250" cy="124" r="14" class="bg ln sw"/><path d="M240,114 L260,134 M260,114 L240,134" class="ln"/>
      <text x="200" y="208" text-anchor="middle" class="tx-s">dwie żarówki szeregowo – symbolami, linijką</text>
      <rect x="8" y="218" width="384" height="48" rx="10" class="f2 s2 sw"/>
      <text x="20" y="238" class="tx-b">⚠️ Zwarcie: + i − samym drutem</text>
      <text x="20" y="258" class="tx">bateria i drut się grzeją – nigdy tak!</text>
    </svg>`,
    text: `<p>Anglia (Year 6) i Szwajcaria uczą rysować i czytać <b>schematy</b>, a Singapur – budować obwód według schematu; w Polsce poznasz je na fizyce w kl. 7–8. Schemat to nie mapa ani zdjęcie: <b>symbole i proste linie</b>, rysowane linijką (lekcje Oak).</p>
      <p><b>Pułapki:</b> oba przewody przy jednym biegunie – obwód nie działa; dioda i brzęczyk działają tylko w jedną stronę. <b>Bezpieczeństwo:</b> tylko zwykłe, nowe baterie 1,5 V (nie akumulatorki, nie litowe), nigdy gniazdko; równolegle zawsze plus do plusa; nie łącz plusa z minusem samym drutem; nie mieszaj różnych baterii; elektromagnes podłączasz tylko na chwilę.</p>`,
    remember: 'Ogniwo – dwie kreski (dłuższa to plus), żarówka – kółko z krzyżykiem. Zwarcie grzeje – nigdy!',
    hook: 'Schemat jest jak plan metra: nie pokazuje prawdziwych odległości, tylko co z czym jest połączone.',
    check: { q: 'Na schemacie widzisz kółko z krzyżykiem. Co to jest?', options: ['żarówka', 'ogniwo'], answer: 0, explain: 'Kółko z krzyżykiem to żarówka. Ogniwo to dwie równoległe kreski.' },
  },
];
