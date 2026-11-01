/* Lekcje – matematyka. Klucz: 'matematyka/<id działu>'. Format opisany w docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['matematyka/geometria'] = [
  {
    title: 'Trójkąt prostokątny – kto jest kim?',
    svg: `<svg viewBox="0 0 360 252" role="img" aria-label="Trójkąt prostokątny z opisanymi bokami">
      <polygon points="40,170 260,170 40,40" class="f1"/>
      <line x1="40" y1="170" x2="260" y2="170" class="s3" stroke-width="5"/>
      <line x1="40" y1="170" x2="40" y2="40" class="s3" stroke-width="5"/>
      <line x1="40" y1="40" x2="260" y2="170" class="s2" stroke-width="5"/>
      <rect x="40" y="150" width="20" height="20" class="ln-thin"/>
      <text x="150" y="192" class="tx-b t3" text-anchor="middle">a</text>
      <text x="26" y="110" class="tx-b t3" text-anchor="end">b</text>
      <text x="160" y="96" class="tx-b t2">c</text>
      <text x="40" y="218" class="tx t3">a, b – przyprostokątne</text>
      <text x="40" y="242" class="tx t2">c – przeciwprostokątna</text>
    </svg>`,
    text: `<p>Trójkąt prostokątny ma jeden <b>kąt prosty</b> (90°), zaznaczony małym kwadracikiem.</p>
      <p>Dwa boki, które tworzą kąt prosty, to <b>przyprostokątne</b> (a i b). Bok naprzeciwko kąta prostego to <b>przeciwprostokątna</b> (c). Zawsze jest najdłuższa.</p>`,
    hook: 'Przeciwprostokątna leży <b>naprzeciw</b> kąta prostego – stąd „przeciw” w nazwie.',
    check: { q: 'Który bok trójkąta prostokątnego jest zawsze najdłuższy?', options: ['przyprostokątna a', 'przyprostokątna b', 'przeciwprostokątna'], answer: 2 },
  },
  {
    title: 'Twierdzenie Pitagorasa – zobacz je!',
    widget: { type: 'pitagoras', a: 3, b: 4 },
    text: `<p>Zbuduj kwadraty na każdym boku trójkąta. <b>Pole niebieskiego kwadratu + pole zielonego = pole pomarańczowego.</b> Przesuwaj suwaki – to działa zawsze!</p>`,
    remember: '<b>a² + b² = c²</b> (tylko w trójkącie prostokątnym!)',
    hook: 'Zapamiętaj trójki: <b>3, 4, 5</b> · <b>6, 8, 10</b> · <b>5, 12, 13</b>. Na egzaminie pojawiają się bardzo często.',
  },
  {
    title: 'Liczymy krok po kroku',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Dwa przykłady obliczeń">
      <polygon points="20,140 140,140 20,50" class="f1 s1 sw"/>
      <text x="80" y="160" class="tx" text-anchor="middle">8</text>
      <text x="10" y="100" class="tx" text-anchor="end">6</text>
      <text x="90" y="85" class="tx-b t2">?</text>
      <polygon points="230,140 370,140 230,40" class="f3 s3 sw"/>
      <text x="300" y="160" class="tx-b t2" text-anchor="middle">?</text>
      <text x="220" y="95" class="tx" text-anchor="end">5</text>
      <text x="310" y="80" class="tx">13</text>
    </svg>`,
    text: `<p><b>Szukasz przeciwprostokątnej?</b> Dodaj kwadraty: 6² + 8² = 36 + 64 = 100, więc c = √100 = <b>10</b>.</p>
      <p><b>Szukasz przyprostokątnej?</b> Odejmij: 13² − 5² = 169 − 25 = 144, więc a = √144 = <b>12</b>.</p>`,
    remember: 'Najdłuższy bok? <b>Dodajesz</b> kwadraty. Krótszy bok? <b>Odejmujesz</b> od kwadratu najdłuższego.',
    check: { q: 'Przyprostokątne mają 9 i 12. Ile ma przeciwprostokątna?', options: ['15', '21', '17', '√21'], answer: 0, explain: '81 + 144 = 225, √225 = 15 (to trójka 3, 4, 5 razy 3).' },
  },
  {
    title: 'Pola figur – jeden pomysł na wszystko',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Równoległobok przekształcony w prostokąt i trójkąt jako połowa prostokąta">
      <polygon points="20,130 140,130 170,50 50,50" class="f1 s1 sw"/>
      <polygon points="140,130 170,130 170,50" class="f2 s2 dash" stroke-width="2"/>
      <line x1="50" y1="50" x2="50" y2="130" class="ln-thin dash"/>
      <text x="95" y="152" class="tx" text-anchor="middle">a</text>
      <text x="58" y="95" class="tx-s">h</text>
      <text x="95" y="30" class="tx-s" text-anchor="middle">przesuń trójkąt → prostokąt</text>
      <rect x="250" y="50" width="150" height="80" class="ln-thin dash"/>
      <polygon points="250,130 400,130 330,50" class="f3 s3 sw"/>
      <line x1="330" y1="50" x2="330" y2="130" class="ln-thin dash"/>
      <text x="325" y="152" class="tx" text-anchor="middle">a</text>
      <text x="336" y="95" class="tx-s">h</text>
      <text x="325" y="30" class="tx-s" text-anchor="middle">trójkąt = pół prostokąta</text>
    </svg>`,
    text: `<p>Równoległobok możesz „przekroić” i przesunąć kawałek – wyjdzie prostokąt. Dlatego jego pole to <b>a · h</b>.</p>
      <p>Trójkąt to zawsze <b>połowa</b> prostokąta (albo równoległoboku) o tej samej podstawie i wysokości: <b>a · h / 2</b>.</p>`,
    remember: 'Prostokąt a·b · Równoległobok a·h · Trójkąt a·h/2 · Trapez (a+b)·h/2 · Romb d₁·d₂/2',
    hook: 'Trapez = dwa trójkąty o tej samej wysokości. Stąd średnia podstaw razy wysokość: <b>(a + b)/2 · h</b>.',
  },
  {
    title: 'Osie symetrii – złóż figurę na pół',
    svg: `<svg viewBox="0 0 430 160" role="img" aria-label="Osie symetrii kwadratu, prostokąta i trójkąta równobocznego">
      <rect x="20" y="30" width="100" height="100" class="f1 s1 sw"/>
      <line x1="70" y1="20" x2="70" y2="140" class="s2 dash" stroke-width="2"/><line x1="10" y1="80" x2="130" y2="80" class="s2 dash" stroke-width="2"/>
      <line x1="15" y1="25" x2="125" y2="135" class="s2 dash" stroke-width="2"/><line x1="125" y1="25" x2="15" y2="135" class="s2 dash" stroke-width="2"/>
      <text x="70" y="155" class="tx-b" text-anchor="middle">4 osie</text>
      <rect x="155" y="50" width="130" height="60" class="f3 s3 sw"/>
      <line x1="220" y1="40" x2="220" y2="120" class="s2 dash" stroke-width="2"/><line x1="145" y1="80" x2="295" y2="80" class="s2 dash" stroke-width="2"/>
      <text x="220" y="155" class="tx-b" text-anchor="middle">2 osie</text>
      <polygon points="320,130 420,130 370,43" class="f4 s4 sw"/>
      <line x1="370" y1="35" x2="370" y2="140" class="s2 dash" stroke-width="2"/>
      <line x1="310" y1="135" x2="400" y2="82" class="s2 dash" stroke-width="2"/><line x1="430" y1="135" x2="340" y2="82" class="s2 dash" stroke-width="2"/>
      <text x="370" y="155" class="tx-b" text-anchor="middle">3 osie</text>
    </svg>`,
    text: '<p>Oś symetrii to linia, wzdłuż której możesz złożyć figurę tak, że obie połowy idealnie się nałożą – jak skrzydła motyla.</p>',
    remember: 'Kwadrat – 4 osie, prostokąt – 2, trójkąt równoboczny – 3, trójkąt równoramienny – 1, koło – nieskończenie wiele.',
    check: { q: 'Ile osi symetrii ma romb, który nie jest kwadratem?', options: ['0', '1', '2', '4'], answer: 2, explain: 'Osiami są obie przekątne rombu.' },
  },
  {
    title: 'Kąty przy przecinających się prostych',
    svg: `<svg viewBox="0 0 360 200" role="img" aria-label="Dwie przecinające się proste i kąty">
      <line x1="40" y1="170" x2="320" y2="30" class="ln sw"/>
      <line x1="40" y1="60" x2="320" y2="140" class="ln sw"/>
      <path d="M 180 100 L 215.8 82.1 A 40 40 0 0 1 218.5 111 Z" class="f1 s1"/>
      <path d="M 180 100 L 144.2 117.9 A 40 40 0 0 1 141.5 89 Z" class="f1 s1"/>
      <path d="M 180 100 L 141.5 89 A 40 40 0 0 1 215.8 82.1 Z" class="f2 s2"/>
      <path d="M 180 100 L 218.5 111 A 40 40 0 0 1 144.2 117.9 Z" class="f2 s2"/>
      <circle cx="180" cy="100" r="3" class="t2"/>
      <text x="226" y="104" class="tx-b t1">α</text>
      <text x="122" y="110" class="tx-b t1" text-anchor="end">α</text>
      <text x="176" y="50" class="tx-b t2" text-anchor="middle">β</text>
      <text x="184" y="160" class="tx-b t2" text-anchor="middle">β</text>
    </svg>`,
    text: `<p>Gdy dwie proste się przecinają, kąty leżące naprzeciw siebie (<b>wierzchołkowe</b>) są <b>równe</b>. Dwa kąty obok siebie (<b>przyległe</b>) razem dają <b>180°</b>.</p>`,
    remember: 'Wierzchołkowe: α = α. Przyległe: α + β = 180°. Suma kątów w trójkącie: 180°.',
    check: { q: 'Kąt α ma 70°. Ile ma kąt do niego przyległy?', options: ['70°', '110°', '20°', '180°'], answer: 1 },
  },
];

window.LESSONS['matematyka/liczby'] = [
  {
    title: 'Kolejność działań – kto liczy pierwszy?',
    svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Schodki kolejności działań i przykład 2 + 3 · 4">
      <rect x="20" y="10" width="360" height="38" rx="8" class="f5 s5 sw"/>
      <text x="36" y="35" class="tx-b">1. Nawiasy</text><text x="364" y="35" class="tx-b t5" text-anchor="end">( )</text>
      <rect x="20" y="56" width="360" height="38" rx="8" class="f1 s1 sw"/>
      <text x="36" y="81" class="tx-b">2. Potęgi i pierwiastki</text><text x="364" y="81" class="tx-b t1" text-anchor="end">x²  √</text>
      <rect x="20" y="102" width="360" height="38" rx="8" class="f2 s2 sw"/>
      <text x="36" y="127" class="tx-b">3. Mnożenie i dzielenie</text><text x="364" y="127" class="tx-b t2" text-anchor="end">·  :</text>
      <rect x="20" y="148" width="360" height="38" rx="8" class="f3 s3 sw"/>
      <text x="36" y="173" class="tx-b">4. Dodawanie i odejmowanie</text><text x="364" y="173" class="tx-b t3" text-anchor="end">+  −</text>
      <text x="200" y="218" class="tx-b" text-anchor="middle">2 + <tspan class="t2">3 · 4</tspan> = 2 + <tspan class="t2">12</tspan> = 14</text>
      <text x="200" y="242" class="tx-s" text-anchor="middle">najpierw mnożenie, dopiero potem dodawanie</text>
    </svg>`,
    text: `<p>Na egzaminie liczysz bez kalkulatora, więc działania na liczbach muszą iść gładko. Podstawa wszystkiego to <b>kolejność działań</b> – idziesz po schodkach z góry na dół.</p>
      <p>Uwaga na minus przed potęgą: <b>−3² = −9</b> (potęgujesz tylko 3), ale <b>(−3)² = 9</b> (potęgujesz całe −3).</p>`,
    remember: 'Nawiasy → potęgi i pierwiastki → mnożenie i dzielenie → dodawanie i odejmowanie.',
    hook: '„<b>N</b>ie <b>P</b>anikuj, <b>M</b>yśl <b>D</b>okładnie” – <b>N</b>awiasy, <b>P</b>otęgi, <b>M</b>nożenie i dzielenie, <b>D</b>odawanie i odejmowanie.',
    check: { q: 'Ile wynosi 20 − 2 · 3²?', options: ['162', '2', '−16', '14'], answer: 1, explain: 'Najpierw potęga: 3² = 9, potem mnożenie: 2 · 9 = 18, na końcu 20 − 18 = 2.' },
  },
  {
    title: 'Oś liczbowa i wartość bezwzględna',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś liczbowa z odległościami liczb −7 i 3 od zera oraz zbiór liczb większych od 1,5">
      <defs><marker id="a-mat-licz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="20" y1="100" x2="404" y2="100" class="ln"/>
      <path d="M396,95 L405,100 L396,105" class="ln"/>
      <g class="ln-thin">
        <line x1="34" y1="94" x2="34" y2="106"/><line x1="56" y1="94" x2="56" y2="106"/><line x1="78" y1="94" x2="78" y2="106"/><line x1="100" y1="94" x2="100" y2="106"/>
        <line x1="122" y1="94" x2="122" y2="106"/><line x1="144" y1="94" x2="144" y2="106"/><line x1="166" y1="94" x2="166" y2="106"/><line x1="188" y1="94" x2="188" y2="106"/>
        <line x1="210" y1="92" x2="210" y2="108"/><line x1="232" y1="94" x2="232" y2="106"/><line x1="254" y1="94" x2="254" y2="106"/><line x1="276" y1="94" x2="276" y2="106"/>
        <line x1="298" y1="94" x2="298" y2="106"/><line x1="320" y1="94" x2="320" y2="106"/><line x1="342" y1="94" x2="342" y2="106"/><line x1="364" y1="94" x2="364" y2="106"/><line x1="386" y1="94" x2="386" y2="106"/>
      </g>
      <path d="M210,96 Q133,30 56,96" class="ln s2" stroke-width="2.5"/>
      <path d="M210,96 Q243,52 276,96" class="ln s1" stroke-width="2.5"/>
      <circle cx="56" cy="100" r="6" class="t2"/>
      <circle cx="276" cy="100" r="6" class="t1"/>
      <text x="133" y="52" class="tx-b t2" text-anchor="middle">|−7| = 7</text>
      <text x="262" y="62" class="tx-b t1" text-anchor="middle">|3| = 3</text>
      <text x="56" y="124" class="tx" text-anchor="middle">−7</text>
      <text x="210" y="124" class="tx" text-anchor="middle">0</text>
      <text x="276" y="124" class="tx" text-anchor="middle">3</text>
      <text x="364" y="124" class="tx" text-anchor="middle">7</text>
      <line x1="20" y1="168" x2="404" y2="168" class="ln-thin"/>
      <line x1="243" y1="168" x2="396" y2="168" class="ln s2 sw" marker-end="url(#a-mat-licz-2)"/>
      <circle cx="243" cy="168" r="7" class="bg s2" stroke-width="3"/>
      <line x1="210" y1="162" x2="210" y2="174" class="ln-thin"/>
      <text x="210" y="192" class="tx-s" text-anchor="middle">0</text>
      <text x="243" y="192" class="tx-s" text-anchor="middle">1,5</text>
      <text x="24" y="160" class="tx-b">x &gt; 1,5</text>
    </svg>`,
    text: `<p><b>Wartość bezwzględna</b> |a| to odległość liczby od zera na osi. Odległość nie bywa ujemna, więc |−7| = 7 i |3| = 3.</p>
      <p>−7 i 7 leżą po dwóch stronach zera w tej samej odległości – to <b>liczby przeciwne</b> (ich suma to 0). <b>Liczby odwrotne</b> dają w iloczynie 1, np. 2/5 i 5/2.</p>
      <p>Zbiór liczb x &gt; 1,5 rysujesz tak: <b>niezamalowane kółko</b> w 1,5 (sama liczba 1,5 nie pasuje) i strzałka w prawo.</p>`,
    remember: '|a| – odległość od zera, nigdy ujemna. Przeciwna do a: −a (suma 0). Odwrotna do a: 1/a (iloczyn 1).',
    hook: 'Wartość bezwzględna to „licznik kroków”: liczy, ile kroków dzieli liczbę od zera – kierunek go nie obchodzi.',
    check: { q: 'Ile wynosi |−12| + |5|?', options: ['17', '−7', '7', '−17'], answer: 0, explain: '|−12| = 12 i |5| = 5, więc 12 + 5 = 17.' },
  },
  {
    title: 'Cechy podzielności – sprawdzisz bez dzielenia',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Cechy podzielności: patrz na końcówkę liczby albo dodaj cyfry">
      <text x="10" y="24" class="tx-b">👀 Patrz na koniec</text>
      <rect x="10" y="36" width="200" height="34" rx="8" class="f1"/><text x="20" y="59" class="tx">÷2 → cyfra parzysta</text>
      <rect x="10" y="78" width="200" height="34" rx="8" class="f1"/><text x="20" y="101" class="tx">÷5 → cyfra 0 lub 5</text>
      <rect x="10" y="120" width="200" height="34" rx="8" class="f1"/><text x="20" y="143" class="tx">÷10 → cyfra 0</text>
      <rect x="10" y="162" width="200" height="34" rx="8" class="f1"/><text x="20" y="185" class="tx">÷4 → 2 ostatnie cyfry</text>
      <text x="110" y="222" class="tx-s" text-anchor="middle">np. 1 236 → 36 ÷ 4 ✔</text>
      <text x="222" y="24" class="tx-b">➕ Dodaj cyfry</text>
      <rect x="222" y="36" width="190" height="34" rx="8" class="f3"/><text x="232" y="59" class="tx">÷3 → suma cyfr ÷3</text>
      <rect x="222" y="78" width="190" height="34" rx="8" class="f3"/><text x="232" y="101" class="tx">÷9 → suma cyfr ÷9</text>
      <text x="317" y="146" class="tx-b" text-anchor="middle"><tspan class="t2">576</tspan>: 5 + 7 + 6 = 18</text>
      <text x="317" y="178" class="tx t3" text-anchor="middle">18 dzieli się przez 9,</text>
      <text x="317" y="200" class="tx t3" text-anchor="middle">więc 576 też ✔</text>
    </svg>`,
    text: `<p>Nie musisz dzielić, żeby wiedzieć, czy się da. Przy 2, 5, 10 i 4 patrzysz na <b>końcówkę</b> liczby, przy 3 i 9 – <b>dodajesz cyfry</b>.</p>
      <p>Każda liczba podzielna przez 9 dzieli się też przez 3 (bo 9 = 3 · 3). Odwrotnie nie zawsze: 6 dzieli się przez 3, ale nie przez 9.</p>`,
    remember: '÷2: cyfra parzysta · ÷5: 0 lub 5 · ÷10: 0 · ÷4: liczba z dwóch ostatnich cyfr · ÷3 i ÷9: suma cyfr.',
    hook: 'Dwójka, piątka, dziesiątka i czwórka patrzą na <b>koniec</b> liczby. Trójka i dziewiątka <b>sumują</b> cyfry.',
    check: { q: 'Która liczba dzieli się przez 3?', options: ['1 234', '2 345', '4 107', '5 551'], answer: 2, explain: '4 + 1 + 0 + 7 = 12, a 12 dzieli się przez 3. Pozostałe sumy cyfr: 10, 14, 16.' },
  },
  {
    title: 'Liczby pierwsze, NWD i NWW',
    svg: `<svg viewBox="0 0 420 244" role="img" aria-label="Rozkład liczb 12 i 18 na czynniki pierwsze w postaci drzewek">
      <line x1="90" y1="38" x2="52" y2="80" class="ln"/><line x1="90" y1="38" x2="128" y2="80" class="ln"/>
      <line x1="130" y1="98" x2="102" y2="138" class="ln"/><line x1="130" y1="98" x2="158" y2="138" class="ln"/>
      <circle cx="90" cy="28" r="20" class="f1 s1 sw"/><text x="90" y="34" class="tx-b" text-anchor="middle">12</text>
      <circle cx="50" cy="90" r="18" class="f2 s2 sw"/><text x="50" y="96" class="tx-b" text-anchor="middle">2</text>
      <circle cx="130" cy="90" r="18" class="f1 s1 sw"/><text x="130" y="96" class="tx-b" text-anchor="middle">6</text>
      <circle cx="100" cy="150" r="18" class="f3 s3 sw"/><text x="100" y="156" class="tx-b" text-anchor="middle">2</text>
      <circle cx="160" cy="150" r="18" class="f2 s2 sw"/><text x="160" y="156" class="tx-b" text-anchor="middle">3</text>
      <line x1="300" y1="38" x2="262" y2="80" class="ln"/><line x1="300" y1="38" x2="338" y2="80" class="ln"/>
      <line x1="340" y1="98" x2="312" y2="138" class="ln"/><line x1="340" y1="98" x2="368" y2="138" class="ln"/>
      <circle cx="300" cy="28" r="20" class="f1 s1 sw"/><text x="300" y="34" class="tx-b" text-anchor="middle">18</text>
      <circle cx="260" cy="90" r="18" class="f2 s2 sw"/><text x="260" y="96" class="tx-b" text-anchor="middle">2</text>
      <circle cx="340" cy="90" r="18" class="f1 s1 sw"/><text x="340" y="96" class="tx-b" text-anchor="middle">9</text>
      <circle cx="310" cy="150" r="18" class="f2 s2 sw"/><text x="310" y="156" class="tx-b" text-anchor="middle">3</text>
      <circle cx="370" cy="150" r="18" class="f3 s3 sw"/><text x="370" y="156" class="tx-b" text-anchor="middle">3</text>
      <text x="105" y="200" class="tx-b" text-anchor="middle">12 = <tspan class="t2">2</tspan> · 2 · <tspan class="t2">3</tspan></text>
      <text x="315" y="200" class="tx-b" text-anchor="middle">18 = <tspan class="t2">2</tspan> · <tspan class="t2">3</tspan> · 3</text>
      <text x="210" y="234" class="tx-b t2" text-anchor="middle">wspólne: 2 · 3 → NWD = 6</text>
    </svg>`,
    text: `<p><b>Liczba pierwsza</b> ma dokładnie dwa dzielniki: 1 i samą siebie (2, 3, 5, 7, 11, 13…). Liczba 1 nie jest ani pierwsza, ani złożona.</p>
      <p>Rozkładaj liczbę jak drzewko, aż na końcach zostaną same liczby pierwsze. Czynniki <b>wspólne</b> dla obu liczb (pomarańczowe) mnożysz – to <b>NWD</b>, największy wspólny dzielnik: NWD(12, 18) = 6.</p>
      <p><b>NWW</b> to najmniejsza liczba, która dzieli się przez obie. Wypisz wielokrotności: 4, 8, <b>12</b>… i 6, <b>12</b>… → NWW(4, 6) = 12.</p>`,
    remember: 'Liczba pierwsza: dokładnie 2 dzielniki (1 i ona sama). NWD – największy wspólny dzielnik, NWW – najmniejsza wspólna wielokrotność.',
    hook: 'Drzewko rośnie, dopóki na końcach gałęzi nie zostaną same „liście” – liczby pierwsze.',
    check: { q: 'Ile wynosi NWD(20, 30)?', options: ['5', '10', '60', '2'], answer: 1, explain: '20 = 2 · 2 · 5, 30 = 2 · 3 · 5. Wspólne czynniki to 2 i 5, więc NWD = 10.' },
  },
  {
    title: 'Układ współrzędnych: środek i długość odcinka',
    svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Odcinek AB w układzie współrzędnych z zaznaczonym środkiem i trójkątem prostokątnym">
      <g class="ln-thin">
        <line x1="72" y1="28" x2="72" y2="220"/><line x1="104" y1="28" x2="104" y2="220"/><line x1="136" y1="28" x2="136" y2="220"/><line x1="168" y1="28" x2="168" y2="220"/><line x1="200" y1="28" x2="200" y2="220"/><line x1="232" y1="28" x2="232" y2="220"/>
        <line x1="40" y1="188" x2="232" y2="188"/><line x1="40" y1="156" x2="232" y2="156"/><line x1="40" y1="124" x2="232" y2="124"/><line x1="40" y1="92" x2="232" y2="92"/><line x1="40" y1="60" x2="232" y2="60"/><line x1="40" y1="28" x2="232" y2="28"/>
      </g>
      <line x1="40" y1="220" x2="240" y2="220" class="ln"/><line x1="40" y1="220" x2="40" y2="20" class="ln"/>
      <text x="72" y="238" class="tx-s" text-anchor="middle">1</text><text x="136" y="238" class="tx-s" text-anchor="middle">3</text><text x="200" y="238" class="tx-s" text-anchor="middle">5</text>
      <text x="32" y="192" class="tx-s" text-anchor="end">1</text><text x="32" y="128" class="tx-s" text-anchor="end">3</text><text x="32" y="64" class="tx-s" text-anchor="end">5</text>
      <line x1="72" y1="188" x2="168" y2="188" class="s3 dash" stroke-width="3"/>
      <line x1="168" y1="188" x2="168" y2="60" class="s3 dash" stroke-width="3"/>
      <line x1="72" y1="188" x2="168" y2="60" class="s2" stroke-width="4"/>
      <circle cx="72" cy="188" r="5" class="t2"/><circle cx="168" cy="60" r="5" class="t2"/><circle cx="120" cy="124" r="6" class="t1"/>
      <text x="62" y="180" class="tx-b" text-anchor="end">A</text><text x="160" y="52" class="tx-b" text-anchor="end">B</text>
      <text x="108" y="118" class="tx-b t1" text-anchor="end">S</text>
      <text x="120" y="208" class="tx-b t3" text-anchor="middle">3</text><text x="180" y="130" class="tx-b t3">4</text>
      <text x="252" y="50" class="tx">A = (1, 1)</text>
      <text x="252" y="76" class="tx">B = (4, 5)</text>
      <text x="252" y="116" class="tx t1">S = (2,5; 3)</text>
      <text x="252" y="160" class="tx t2">|AB| = √(3² + 4²)</text>
      <text x="282" y="186" class="tx t2">= √25 = 5</text>
    </svg>`,
    text: `<p><b>Środek odcinka</b> to „średnia” jego końców: dodajesz współrzędne x i dzielisz przez 2, tak samo z y. Dla A = (1, 1) i B = (4, 5): x = (1 + 4)/2 = 2,5 i y = (1 + 5)/2 = 3.</p>
      <p><b>Długość odcinka</b>: dorysuj trójkąt prostokątny. Jego przyprostokątne to różnice współrzędnych (3 i 4), a odcinek AB to przeciwprostokątna – liczysz ją z Pitagorasa.</p>`,
    remember: 'S = ((x₁ + x₂)/2, (y₁ + y₂)/2). Długość odcinka: √(różnica x² + różnica y²).',
    hook: 'Środek odcinka = średnia współrzędnych: „dodaj i podziel przez 2”.',
    check: { q: 'Środek odcinka o końcach A = (−2, 3) i B = (4, 7) to punkt…', options: ['(1, 5)', '(2, 10)', '(3, 2)', '(6, 4)'], answer: 0, explain: 'x = (−2 + 4)/2 = 1, y = (3 + 7)/2 = 5.' },
  },
  {
    title: 'Pułapki egzaminacyjne i liczby rzymskie',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Cztery kafelki z typowymi pułapkami">
      <rect x="10" y="10" width="195" height="94" rx="10" class="f2 s2" stroke-width="2"/>
      <text x="22" y="32" class="tx-s">Minus i potęga</text>
      <text x="22" y="60" class="tx-b">−3² = −9</text><text x="22" y="88" class="tx-b">(−3)² = 9</text>
      <rect x="215" y="10" width="195" height="94" rx="10" class="f1 s1" stroke-width="2"/>
      <text x="227" y="32" class="tx-s">Liczba 1</text>
      <text x="227" y="60" class="tx">nie jest pierwsza</text><text x="227" y="86" class="tx">ani złożona</text>
      <rect x="10" y="112" width="195" height="94" rx="10" class="f3 s3" stroke-width="2"/>
      <text x="22" y="134" class="tx-s">Liczby rzymskie</text>
      <text x="22" y="162" class="tx">XL = 50 − 10 = 40</text><text x="22" y="190" class="tx">MMXXVII = 2027</text>
      <rect x="215" y="112" width="195" height="94" rx="10" class="f4 s4" stroke-width="2"/>
      <text x="227" y="134" class="tx-s">Dzielenie z resztą</text>
      <text x="227" y="162" class="tx">47 = 6 · 7 + 5</text><text x="227" y="190" class="tx">reszta &lt; dzielnik</text>
    </svg>`,
    text: `<p><b>Liczby rzymskie:</b> I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Gdy mniejszy znak stoi <b>przed</b> większym – odejmujesz: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</p>
      <p><b>Dzielenie z resztą:</b> a = b · q + r, a reszta jest zawsze mniejsza od dzielnika (0 ≤ r &lt; b). Do tego pamiętaj: 1/3 = 0,333… = 0,(3), a 3,476 po zaokrągleniu do części setnych to 3,48.</p>`,
    remember: 'Mniejsza cyfra rzymska przed większą → odejmujesz (IV, IX, XL, XC, CD, CM). W pozostałych przypadkach dodajesz.',
    hook: 'Rok Twojego egzaminu: <b>MMXXVII</b> = 1000 + 1000 + 10 + 10 + 5 + 1 + 1 = 2027.',
    check: { q: 'Rok 1984 zapisany cyframi rzymskimi to…', options: ['MCMLXXXIV', 'MCMXCIV', 'MDCCCLXXXIV', 'MCMLXIV'], answer: 0, explain: 'M = 1000, CM = 900, L = 50, XXX = 30, IV = 4 → 1984.' },
  },
];

window.LESSONS['matematyka/procenty'] = [
  {
    title: 'Procent to setna część',
    widget: { type: 'procent', p: 20, of: 150 },
    text: `<p>„Procent” znaczy „na sto”. Siatka ma 100 kratek – każda to <b>1%</b> całości. Przesuń suwak i zobacz, ile to jest p% z liczby 150.</p>
      <p>Procenty są wszędzie: promocje w sklepie, oprocentowanie lokaty, wyniki sondaży. Na egzaminie to pewne punkty.</p>`,
    remember: '1% = 1/100 = 0,01. p% liczby a = p/100 · a, np. 20% z 150 = 0,2 · 150 = 30.',
    hook: 'Szybkie skróty: 50% = połowa, 25% = ćwiartka, 10% = jedna dziesiąta (przecinek o jedno miejsce w lewo).',
    check: { q: 'Ile to jest 0,5% liczby 400?', options: ['2', '20', '200', '0,2'], answer: 0, explain: '0,5% = 0,005, a 0,005 · 400 = 2.' },
  },
  {
    title: 'Jeden pasek – trzy typy pytań',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Pasek 150 = 100% podzielony na pięć części po 20%">
      <text x="210" y="26" class="tx-b" text-anchor="middle">całość: 150 = 100%</text>
      <rect x="20" y="38" width="76" height="44" class="f2 s2 sw"/>
      <rect x="96" y="38" width="76" height="44" class="f1 s1 sw"/>
      <rect x="172" y="38" width="76" height="44" class="f1 s1 sw"/>
      <rect x="248" y="38" width="76" height="44" class="f1 s1 sw"/>
      <rect x="324" y="38" width="76" height="44" class="f1 s1 sw"/>
      <text x="58" y="67" class="tx-b" text-anchor="middle">30</text><text x="134" y="67" class="tx" text-anchor="middle">30</text><text x="210" y="67" class="tx" text-anchor="middle">30</text><text x="286" y="67" class="tx" text-anchor="middle">30</text><text x="362" y="67" class="tx" text-anchor="middle">30</text>
      <text x="58" y="102" class="tx-b t2" text-anchor="middle">20%</text><text x="134" y="102" class="tx-s" text-anchor="middle">20%</text><text x="210" y="102" class="tx-s" text-anchor="middle">20%</text><text x="286" y="102" class="tx-s" text-anchor="middle">20%</text><text x="362" y="102" class="tx-s" text-anchor="middle">20%</text>
      <text x="20" y="140" class="tx">① 20% z 150 = ? → 0,2 · 150 = <tspan class="t2">30</tspan></text>
      <text x="20" y="170" class="tx">② 30 z 150 to ?% → 30/150 = <tspan class="t2">20%</tspan></text>
      <text x="20" y="200" class="tx">③ 20% liczby to 30 → 30 : 0,2 = <tspan class="t2">150</tspan></text>
    </svg>`,
    text: `<p>W każdym zadaniu z procentów występują trzy rzeczy: <b>całość</b>, <b>procent</b> i <b>część</b>. Znasz dwie – szukasz trzeciej.</p>
      <p>Ten sam pasek odpowiada na trzy pytania: ile to jest 20% ze 150? Jakim procentem 150 jest 30? Jaka liczba ma 20% równe 30?</p>`,
    remember: 'p% z a = p/100 · a · Jakim procentem liczby a jest b: b/a · 100% · Liczba, której p% to b: b : (p/100).',
    hook: 'Wyobraź sobie pasek: <b>cały pasek = 100%</b>. Kawałek paska to część, a jego udział w pasku – procent.',
    check: { q: '12 to 25% pewnej liczby. Jaka to liczba?', options: ['3', '48', '36', '300'], answer: 1, explain: '25% to ćwiartka, więc cała liczba to 4 · 12 = 48 (albo 12 : 0,25 = 48).' },
  },
  {
    title: 'Podwyżka i obniżka – jedno mnożenie',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Paski ceny 80 zł: po podwyżce o 25% i po obniżce o 25%">
      <text x="10" y="45" class="tx-b">cena</text>
      <rect x="110" y="20" width="240" height="38" rx="4" class="f1 s1 sw"/>
      <text x="230" y="45" class="tx" text-anchor="middle">80 zł = 100%</text>
      <text x="10" y="101" class="tx-b t2">+25%</text>
      <rect x="110" y="76" width="240" height="38" rx="4" class="f1 s1 sw"/>
      <rect x="350" y="76" width="60" height="38" rx="4" class="f2 s2 sw"/>
      <text x="230" y="101" class="tx" text-anchor="middle">80 · 1,25 = <tspan class="t2">100 zł</tspan></text>
      <text x="380" y="100" class="tx-s" text-anchor="middle">+25%</text>
      <text x="10" y="157" class="tx-b t1">−25%</text>
      <rect x="110" y="132" width="180" height="38" rx="4" class="f1 s1 sw"/>
      <rect x="290" y="132" width="60" height="38" rx="4" class="ln-thin dash"/>
      <text x="200" y="157" class="tx" text-anchor="middle">80 · 0,75 = <tspan class="t1">60 zł</tspan></text>
      <text x="320" y="156" class="tx-s" text-anchor="middle">−25%</text>
    </svg>`,
    text: `<p>Po podwyżce o 25% masz 100% + 25% = <b>125%</b> starej ceny, czyli mnożysz przez <b>1,25</b>. Po obniżce o 25% zostaje 100% − 25% = <b>75%</b>, czyli mnożysz przez <b>0,75</b>.</p>
      <p>Tak samo działa lokata: 1000 zł na 5% w skali roku → po roku 1000 · 1,05 = 1050 zł (bez podatku).</p>`,
    remember: 'Podwyżka o p%: a · (1 + p/100). Obniżka o p%: a · (1 − p/100).',
    hook: 'Zamiast liczyć procent i potem dodawać, pomnóż raz: +20% to „razy 1,2”, −20% to „razy 0,8”.',
    check: { q: 'Kurtka kosztowała 120 zł. Cenę obniżono o 30%. Ile kosztuje teraz?', options: ['84 zł', '90 zł', '36 zł', '156 zł'], answer: 0, explain: '120 · 0,7 = 84 zł. (90 zł wychodzi, gdy błędnie odejmiesz 30 zł zamiast 30%.)' },
  },
  {
    title: 'Cofanie się w czasie – cena przed zmianą',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Strzałka mnożenia przez 1,1 i strzałka powrotna dzielenia przez 1,1">
      <defs><marker id="a-mat-proc-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="80" y="48" class="tx-s" text-anchor="middle">przed</text>
      <text x="320" y="48" class="tx-s" text-anchor="middle">po podwyżce</text>
      <rect x="20" y="58" width="120" height="50" rx="10" class="f4 s4 sw"/>
      <text x="80" y="90" class="tx-b" text-anchor="middle">? zł</text>
      <rect x="260" y="58" width="120" height="50" rx="10" class="f3 s3 sw"/>
      <text x="320" y="90" class="tx-b" text-anchor="middle">220 zł</text>
      <path d="M145,62 Q200,22 252,62" class="ln s2" marker-end="url(#a-mat-proc-4)"/>
      <text x="200" y="26" class="tx-b t2" text-anchor="middle">· 1,1 (+10%)</text>
      <path d="M255,104 Q200,144 148,104" class="ln s1" marker-end="url(#a-mat-proc-4)"/>
      <text x="200" y="152" class="tx-b t1" text-anchor="middle">: 1,1</text>
    </svg>`,
    text: `<p>Rower po podwyżce o 10% kosztuje 220 zł. Ile kosztował wcześniej? Pułapka: 220 − 10% = 198 zł – <b>źle!</b> Te 10% liczono od <b>starej</b> ceny, a nie od 220 zł.</p>
      <p>Cofnij mnożenie dzieleniem: 220 : 1,1 = <b>200 zł</b>. Sprawdzenie: 200 · 1,1 = 220 ✓.</p>`,
    remember: 'Szukasz ceny sprzed zmiany? Podziel nową cenę przez ten sam mnożnik (1,1; 0,8 itd.).',
    hook: 'Mnożenie i dzielenie to „tam i z powrotem” po tej samej drodze – wracasz przez ten sam mnożnik.',
    check: { q: 'Po obniżce o 20% buty kosztują 64 zł. Ile kosztowały przed obniżką?', options: ['80 zł', '76,80 zł', '84 zł', '51,20 zł'], answer: 0, explain: '64 : 0,8 = 80 zł. Sprawdzenie: 80 · 0,8 = 64 ✓.' },
  },
  {
    title: 'Proporcjonalność prosta i podział',
    svg: `<svg viewBox="0 0 420 226" role="img" aria-label="Tabela ceny zeszytów oraz podział 60 zł w stosunku 1 do 2">
      <defs><marker id="a-mat-proc-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="45" class="tx">sztuki</text><text x="10" y="95" class="tx">cena</text>
      <rect x="105" y="20" width="90" height="38" rx="6" class="f1"/><text x="150" y="45" class="tx-b" text-anchor="middle">5</text>
      <rect x="215" y="20" width="90" height="38" rx="6" class="f4"/><text x="260" y="45" class="tx-b" text-anchor="middle">1</text>
      <rect x="325" y="20" width="90" height="38" rx="6" class="f3"/><text x="370" y="45" class="tx-b" text-anchor="middle">8</text>
      <rect x="105" y="70" width="90" height="38" rx="6" class="f1"/><text x="150" y="95" class="tx" text-anchor="middle">12 zł</text>
      <rect x="215" y="70" width="90" height="38" rx="6" class="f4"/><text x="260" y="95" class="tx" text-anchor="middle">2,40 zł</text>
      <rect x="325" y="70" width="90" height="38" rx="6" class="f3"/><text x="370" y="95" class="tx-b t3" text-anchor="middle">19,20 zł</text>
      <path d="M155,114 Q205,138 252,116" class="ln s2" marker-end="url(#a-mat-proc-5)"/>
      <text x="205" y="148" class="tx-b t2" text-anchor="middle">: 5</text>
      <path d="M265,114 Q315,138 362,116" class="ln s2" marker-end="url(#a-mat-proc-5)"/>
      <text x="315" y="148" class="tx-b t2" text-anchor="middle">· 8</text>
      <text x="10" y="190" class="tx-b">1 : 2</text>
      <rect x="105" y="168" width="90" height="34" rx="6" class="f1 s1 sw"/><text x="150" y="191" class="tx" text-anchor="middle">20 zł</text>
      <rect x="215" y="168" width="90" height="34" rx="6" class="f2 s2 sw"/><text x="260" y="191" class="tx" text-anchor="middle">20 zł</text>
      <rect x="325" y="168" width="90" height="34" rx="6" class="f2 s2 sw"/><text x="370" y="191" class="tx" text-anchor="middle">20 zł</text>
      <text x="150" y="220" class="tx-s" text-anchor="middle">Ania: 20 zł</text>
      <text x="315" y="220" class="tx-s" text-anchor="middle">Ola: 40 zł</text>
    </svg>`,
    text: `<p><b>Proporcjonalność prosta</b>: ile razy więcej sztuk, tyle razy wyższa cena. 5 zeszytów kosztuje 12 zł, więc jeden 12 : 5 = 2,40 zł, a osiem 8 · 2,40 = 19,20 zł.</p>
      <p><b>Podział w stosunku 1 : 2</b> to podział na 1 + 2 = 3 równe części. 60 zł : 3 = 20 zł na część → Ania 20 zł, Ola 40 zł.</p>`,
    remember: 'Najpierw policz, ile przypada na <b>jedną</b> sztukę albo <b>jedną</b> część – potem mnóż.',
    hook: '„Przez jedynkę”: zawsze przejdź przez wartość jednej sztuki – to jak przesiadka na stacji, z której jedziesz dokądkolwiek.',
    check: { q: '72 cukierki podzielono w stosunku 2 : 1. Ile cukierków dostała osoba z większą częścią?', options: ['48', '36', '24', '144'], answer: 0, explain: '2 + 1 = 3 części, 72 : 3 = 24 na część. Większa część to 2 · 24 = 48.' },
  },
  {
    title: 'Dwie pułapki, które łapią najwięcej osób',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Podwyżka i obniżka o 10% daje 99 zł; wzrost z 4% do 5% to 1 punkt procentowy">
      <rect x="20" y="10" width="100" height="38" rx="8" class="f1 s1 sw"/><text x="70" y="35" class="tx-b" text-anchor="middle">100 zł</text>
      <line x1="70" y1="50" x2="70" y2="80" class="ln"/><text x="84" y="70" class="tx-s">· 1,1 (+10 zł)</text>
      <rect x="20" y="84" width="100" height="38" rx="8" class="f1 s1 sw"/><text x="70" y="109" class="tx-b" text-anchor="middle">110 zł</text>
      <line x1="70" y1="124" x2="70" y2="154" class="ln"/><text x="84" y="144" class="tx-s">· 0,9 (−11 zł)</text>
      <rect x="20" y="158" width="100" height="38" rx="8" class="f2 s2 sw"/><text x="70" y="183" class="tx-b t2" text-anchor="middle">99 zł</text>
      <line x1="225" y1="180" x2="410" y2="180" class="ln"/>
      <rect x="250" y="60" width="50" height="120" class="f1 s1 sw"/>
      <rect x="330" y="30" width="50" height="150" class="f2 s2 sw"/>
      <line x1="250" y1="60" x2="380" y2="60" class="ln-thin dash"/>
      <text x="275" y="52" class="tx-b" text-anchor="middle">4%</text>
      <text x="355" y="22" class="tx-b" text-anchor="middle">5%</text>
      <text x="355" y="50" class="tx-s" text-anchor="middle">+1 p.p.</text>
      <text x="275" y="200" class="tx-s" text-anchor="middle">przed</text>
      <text x="355" y="200" class="tx-s" text-anchor="middle">po</text>
    </svg>`,
    text: `<p><b>Pułapka 1:</b> podwyżka o 10%, a potem obniżka o 10% <b>nie</b> wraca do starej ceny. Obniżkę liczysz już od 110 zł, więc odejmujesz 11 zł: 100 → 110 → 99 zł.</p>
      <p><b>Pułapka 2:</b> oprocentowanie wzrosło z 4% do 5%. To wzrost o <b>1 punkt procentowy</b> (5 − 4), ale aż o <b>25%</b> (bo 1 to ćwiartka z 4).</p>`,
    remember: 'Procent liczysz zawsze od <b>aktualnej</b> wartości. Różnica dwóch wielkości podanych w procentach to <b>punkty procentowe</b>.',
    hook: '„Punkty procentowe” – po prostu <b>odejmujesz</b> procenty. „O ile procent” – <b>porównujesz</b> zmianę z wartością początkową.',
    check: { q: 'Poparcie wzrosło z 10% do 15%. Które zdanie jest prawdziwe?', options: ['Wzrosło o 5 punktów procentowych.', 'Wzrosło o 5%.', 'Wzrosło o 15 punktów procentowych.'], answer: 0, explain: '15 − 10 = 5 punktów procentowych. W procentach to wzrost aż o 50% (5 to połowa z 10), a nie o 5%.' },
  },
];

window.LESSONS['matematyka/potegi-pierwiastki'] = [
  {
    title: 'Potęga – skrót od mnożenia',
    svg: `<svg viewBox="0 0 400 204" role="img" aria-label="Kwadrat 3 na 3 z dziewięciu kratek i sześcian 2 na 2 na 2 z ośmiu kostek">
      <g class="f2 s2" stroke-width="2">
        <rect x="30" y="20" width="30" height="30"/><rect x="60" y="20" width="30" height="30"/><rect x="90" y="20" width="30" height="30"/>
        <rect x="30" y="50" width="30" height="30"/><rect x="60" y="50" width="30" height="30"/><rect x="90" y="50" width="30" height="30"/>
        <rect x="30" y="80" width="30" height="30"/><rect x="60" y="80" width="30" height="30"/><rect x="90" y="80" width="30" height="30"/>
      </g>
      <text x="75" y="150" class="tx-b" text-anchor="middle">3² = 3 · 3 = 9</text>
      <text x="75" y="176" class="tx-s" text-anchor="middle">„3 do kwadratu”</text>
      <polygon points="230,60 310,60 350,30 270,30" class="f3 s3" stroke-width="2.5"/>
      <polygon points="310,60 350,30 350,110 310,140" class="f1 s1" stroke-width="2.5"/>
      <rect x="230" y="60" width="80" height="80" class="f1 s1" stroke-width="2.5"/>
      <g class="ln-thin">
        <line x1="270" y1="60" x2="270" y2="140"/><line x1="230" y1="100" x2="310" y2="100"/>
        <line x1="250" y1="45" x2="330" y2="45"/><line x1="270" y1="60" x2="310" y2="30"/>
        <line x1="330" y1="45" x2="330" y2="125"/><line x1="310" y1="100" x2="350" y2="70"/>
      </g>
      <text x="290" y="170" class="tx-b" text-anchor="middle">2³ = 2 · 2 · 2 = 8</text>
      <text x="290" y="196" class="tx-s" text-anchor="middle">„2 do sześcianu”</text>
    </svg>`,
    text: `<p>Potęga to skrócony zapis mnożenia tej samej liczby. <b>Wykładnik</b> (mała liczba u góry) mówi, ile razy mnożysz <b>podstawę</b>.</p>
      <p>Uwaga: 2³ to 2 · 2 · 2 = 8, a <b>nie</b> 2 · 3 = 6. To najczęstszy błąd!</p>`,
    remember: 'aⁿ = a · a · … · a (n razy). a – podstawa, n – wykładnik.',
    hook: 'Kwadrat ma 2 wymiary – stąd „do kwadratu” = potęga 2. Sześcian ma 3 wymiary – „do sześcianu” = potęga 3.',
    check: { q: 'Ile wynosi 4³?', options: ['12', '64', '16', '81'], answer: 1, explain: '4 · 4 · 4 = 64. (12 to 4 · 3 – częsty błąd.)' },
  },
  {
    title: 'Mnożenie i dzielenie potęg – policz klocki',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Mnożenie 2 do potęgi 3 razy 2 do potęgi 4 jako siedem dwójek i skracanie przy dzieleniu">
      <g class="f1 s1" stroke-width="2">
        <rect x="10" y="20" width="34" height="34" rx="6"/><rect x="48" y="20" width="34" height="34" rx="6"/><rect x="86" y="20" width="34" height="34" rx="6"/>
      </g>
      <g class="f2 s2" stroke-width="2">
        <rect x="146" y="20" width="34" height="34" rx="6"/><rect x="184" y="20" width="34" height="34" rx="6"/><rect x="222" y="20" width="34" height="34" rx="6"/><rect x="260" y="20" width="34" height="34" rx="6"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="27" y="43">2</text><text x="65" y="43">2</text><text x="103" y="43">2</text>
        <text x="163" y="43">2</text><text x="201" y="43">2</text><text x="239" y="43">2</text><text x="277" y="43">2</text>
      </g>
      <text x="133" y="43" class="tx-b" text-anchor="middle">·</text>
      <text x="306" y="43" class="tx-b">= 2⁷</text>
      <text x="65" y="76" class="tx-s t1" text-anchor="middle">2³</text>
      <text x="220" y="76" class="tx-s t2" text-anchor="middle">2⁴</text>
      <g class="f3 s3" stroke-width="2">
        <rect x="20" y="100" width="34" height="34" rx="6"/><rect x="58" y="100" width="34" height="34" rx="6"/><rect x="96" y="100" width="34" height="34" rx="6"/><rect x="134" y="100" width="34" height="34" rx="6"/><rect x="172" y="100" width="34" height="34" rx="6"/>
        <rect x="20" y="152" width="34" height="34" rx="6"/><rect x="58" y="152" width="34" height="34" rx="6"/><rect x="96" y="152" width="34" height="34" rx="6"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="37" y="123">2</text><text x="75" y="123">2</text><text x="113" y="123">2</text><text x="151" y="123">2</text><text x="189" y="123">2</text>
        <text x="37" y="175">2</text><text x="75" y="175">2</text><text x="113" y="175">2</text>
      </g>
      <line x1="14" y1="143" x2="212" y2="143" class="ln"/>
      <g class="s2" stroke-width="3">
        <line x1="22" y1="132" x2="52" y2="102"/><line x1="60" y1="132" x2="90" y2="102"/><line x1="98" y1="132" x2="128" y2="102"/>
        <line x1="22" y1="184" x2="52" y2="154"/><line x1="60" y1="184" x2="90" y2="154"/><line x1="98" y1="184" x2="128" y2="154"/>
      </g>
      <text x="230" y="122" class="tx-s">2⁵ : 2³</text>
      <text x="230" y="150" class="tx-b">= 2² = 4</text>
    </svg>`,
    text: `<p><b>Mnożenie:</b> 2³ · 2⁴ to trzy dwójki razy cztery dwójki – razem <b>siedem</b> dwójek, czyli 2⁷. Wykładniki się <b>dodaje</b>.</p>
      <p><b>Dzielenie:</b> w 2⁵ : 2³ trzy dwójki z góry skracają się z trzema z dołu. Zostają dwie: 2² = 4. Wykładniki się <b>odejmuje</b>.</p>`,
    remember: 'aⁿ · aᵐ = aⁿ⁺ᵐ (dodajesz wykładniki) · aⁿ : aᵐ = aⁿ⁻ᵐ (odejmujesz). Tylko przy tej samej podstawie!',
    hook: 'Działanie „spada o piętro niżej”: mnożenie potęg → dodawanie wykładników, dzielenie potęg → odejmowanie wykładników.',
    check: { q: 'Ile wynosi 5⁶ : 5²?', options: ['5⁴', '5³', '1⁴', '5⁸'], answer: 0, explain: 'Ta sama podstawa, dzielenie → odejmujesz wykładniki: 6 − 2 = 4.' },
  },
  {
    title: 'Potęga potęgi i potęga iloczynu',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Trzy razy 3 do kwadratu daje 3 do szóstej; trzy pary 2 razy 5 dają 10 do trzeciej">
      <text x="10" y="22" class="tx-s">(3²)³ = 3² · 3² · 3²</text>
      <rect x="10" y="32" width="80" height="40" rx="8" class="f1 s1 sw"/><text x="50" y="58" class="tx-b" text-anchor="middle">3 · 3</text>
      <rect x="100" y="32" width="80" height="40" rx="8" class="f1 s1 sw"/><text x="140" y="58" class="tx-b" text-anchor="middle">3 · 3</text>
      <rect x="190" y="32" width="80" height="40" rx="8" class="f1 s1 sw"/><text x="230" y="58" class="tx-b" text-anchor="middle">3 · 3</text>
      <text x="285" y="58" class="tx-b t1">= 3⁶</text>
      <text x="10" y="112" class="tx-s">(2 · 5)³ = 2³ · 5³ – połącz dwójki z piątkami w pary</text>
      <rect x="10" y="122" width="80" height="40" rx="8" class="f2 s2 sw"/><text x="50" y="148" class="tx-b" text-anchor="middle">2 · 5</text>
      <rect x="100" y="122" width="80" height="40" rx="8" class="f2 s2 sw"/><text x="140" y="148" class="tx-b" text-anchor="middle">2 · 5</text>
      <rect x="190" y="122" width="80" height="40" rx="8" class="f2 s2 sw"/><text x="230" y="148" class="tx-b" text-anchor="middle">2 · 5</text>
      <text x="285" y="148" class="tx-b t2">= 10³ = 1000</text>
    </svg>`,
    text: `<p><b>Potęga potęgi:</b> (3²)³ to trzy razy 3², czyli 3 mnożone 2 · 3 = 6 razy → 3⁶. Wykładniki się <b>mnoży</b>.</p>
      <p><b>Potęga iloczynu:</b> (2 · 5)³ = 2³ · 5³. Działa też w drugą stronę: 2³ · 5³ = (2 · 5)³ = 10³ = 1000. To bardzo przydatny trik do liczenia w pamięci.</p>`,
    remember: '(aⁿ)ᵐ = aⁿ·ᵐ (mnożysz wykładniki) · (a · b)ⁿ = aⁿ · bⁿ',
    hook: 'Dwójka i piątka to para, która daje dziesiątkę. Widzisz 2ⁿ · 5ⁿ? To 10ⁿ – jedynka i n zer.',
    check: { q: 'Ile wynosi (2²)⁴?', options: ['2⁶', '2⁸', '4⁶', '2¹⁶'], answer: 1, explain: 'Potęgę potęgujesz, mnożąc wykładniki: 2 · 4 = 8.' },
  },
  {
    title: 'Notacja wykładnicza – skaczący przecinek',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Przesuwanie przecinka: 3 400 000 to 3,4 razy 10 do szóstej, 0,00052 to 5,2 razy 10 do minus czwartej">
      <text x="131" y="14" class="tx-s t2" text-anchor="middle">6 skoków w lewo</text>
      <g class="ln s2" stroke-width="2">
        <path d="M209,38 Q196,20 183,38"/><path d="M183,38 Q170,20 157,38"/><path d="M157,38 Q144,20 131,38"/><path d="M131,38 Q118,20 105,38"/><path d="M105,38 Q92,20 79,38"/><path d="M79,38 Q66,20 53,38"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="40" y="62">3</text><text x="66" y="62">4</text><text x="92" y="62">0</text><text x="118" y="62">0</text><text x="144" y="62">0</text><text x="170" y="62">0</text><text x="196" y="62">0</text>
      </g>
      <text x="53" y="72" class="tx-b t2" text-anchor="middle">,</text>
      <text x="236" y="62" class="tx-b">= 3,4 · 10⁶</text>
      <text x="110" y="104" class="tx-s t1" text-anchor="middle">4 skoki w prawo</text>
      <g class="ln s1" stroke-width="2">
        <path d="M56,130 Q70,112 85,130"/><path d="M85,130 Q98,112 111,130"/><path d="M111,130 Q124,112 137,130"/><path d="M137,130 Q150,112 163,130"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="40" y="154">0</text><text x="56" y="154">,</text><text x="72" y="154">0</text><text x="98" y="154">0</text><text x="124" y="154">0</text><text x="150" y="154">5</text><text x="176" y="154">2</text>
      </g>
      <text x="163" y="164" class="tx-b t1" text-anchor="middle">,</text>
      <text x="236" y="154" class="tx-b">= 5,2 · 10⁻⁴</text>
      <text x="210" y="196" class="tx-s" text-anchor="middle">pierwsza liczba: 1 ≤ a &lt; 10 (jedna cyfra przed przecinkiem, nie zero)</text>
    </svg>`,
    text: `<p>Bardzo duże i bardzo małe liczby zapisujesz krótko jako <b>a · 10ⁿ</b>, gdzie a jest od 1 do 10 (bez 10).</p>
      <p>Przesuwasz przecinek tak, by przed nim została jedna cyfra różna od zera. Liczba skoków to wykładnik. Duża liczba (skoki w lewo) → wykładnik dodatni; liczba mniejsza od 1 (skoki w prawo) → wykładnik ujemny.</p>`,
    remember: 'a · 10ⁿ, gdzie 1 ≤ a &lt; 10. Np. 3 400 000 = 3,4 · 10⁶; 0,00052 = 5,2 · 10⁻⁴.',
    hook: 'Wykładnik = liczba skoków przecinka. Liczba wielka – skaczesz w lewo; liczba malutka – w prawo i dopisujesz minus.',
    check: { q: 'Liczba 72 000 w notacji wykładniczej to…', options: ['7,2 · 10⁴', '72 · 10³', '7,2 · 10³', '0,72 · 10⁵'], answer: 0, explain: '7,2 jest między 1 a 10, a przecinek przeskoczył o 4 miejsca w lewo.' },
  },
  {
    title: 'Pierwiastki – szukaj kwadratu w środku',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Kwadrat o polu 25 ma bok 5 oraz wyłączanie czynnika spod pierwiastka z 50">
      <rect x="40" y="20" width="110" height="110" class="f3 s3 sw"/>
      <g class="ln-thin">
        <line x1="62" y1="20" x2="62" y2="130"/><line x1="84" y1="20" x2="84" y2="130"/><line x1="106" y1="20" x2="106" y2="130"/><line x1="128" y1="20" x2="128" y2="130"/>
        <line x1="40" y1="42" x2="150" y2="42"/><line x1="40" y1="64" x2="150" y2="64"/><line x1="40" y1="86" x2="150" y2="86"/><line x1="40" y1="108" x2="150" y2="108"/>
      </g>
      <text x="95" y="152" class="tx-b" text-anchor="middle">5</text>
      <text x="28" y="81" class="tx-b" text-anchor="end">5</text>
      <text x="95" y="180" class="tx-s" text-anchor="middle">pole 25 → bok 5</text>
      <text x="95" y="202" class="tx-b t3" text-anchor="middle">√25 = 5</text>
      <text x="230" y="44" class="tx-b">√50</text>
      <text x="230" y="88" class="tx-b">= √(<tspan class="t3">25</tspan> · 2)</text>
      <text x="230" y="132" class="tx-b">= √<tspan class="t3">25</tspan> · √2</text>
      <text x="230" y="176" class="tx-b t2">= 5√2</text>
    </svg>`,
    text: `<p>√a to liczba nieujemna, która podniesiona do kwadratu daje a: √25 = 5, bo 5² = 25. Pierwiastek z pola kwadratu to jego bok.</p>
      <p><b>Wyłączanie czynnika:</b> rozłóż liczbę tak, by jeden czynnik był kwadratem: √50 = √(25 · 2) = 5√2. <b>Włączanie</b> – odwrotnie: 3√2 = √9 · √2 = √18. Mnożenie: √2 · √8 = √16 = 4.</p>
      <p>Pierwiastek sześcienny może być z liczby ujemnej: ∛(−27) = −3, bo (−3)³ = −27.</p>`,
    remember: '√(a · b) = √a · √b · √50 = √(25 · 2) = 5√2 · 3√2 = √(9 · 2) = √18',
    hook: 'Wyłączanie czynnika to „szukanie kwadratu w środku”: 4, 9, 16, 25, 36… – który z nich mieści się w liczbie?',
    check: { q: 'Po wyłączeniu czynnika przed pierwiastek √72 = …', options: ['6√2', '2√6', '36√2', '8√9'], answer: 0, explain: '72 = 36 · 2, a √36 = 6, więc √72 = 6√2.' },
  },
  {
    title: 'Szacowanie i podsumowanie',
    svg: `<svg viewBox="0 0 420 186" role="img" aria-label="Oś liczbowa: pierwiastek ze 137 leży między 11 a 12; tabela kwadratów od 11 do 15">
      <line x1="30" y1="100" x2="410" y2="100" class="ln"/>
      <line x1="160" y1="92" x2="160" y2="108" class="ln"/><line x1="280" y1="92" x2="280" y2="108" class="ln"/>
      <line x1="40" y1="94" x2="40" y2="106" class="ln-thin"/><line x1="400" y1="94" x2="400" y2="106" class="ln-thin"/>
      <line x1="160" y1="100" x2="280" y2="100" class="s2" stroke-width="5"/>
      <circle cx="244" cy="100" r="6" class="t2"/>
      <line x1="244" y1="44" x2="244" y2="92" class="ln-thin dash"/>
      <text x="244" y="38" class="tx-b t2" text-anchor="middle">√137</text>
      <text x="160" y="80" class="tx-s" text-anchor="middle">√121</text>
      <text x="290" y="80" class="tx-s" text-anchor="middle">√144</text>
      <text x="40" y="124" class="tx" text-anchor="middle">10</text><text x="160" y="124" class="tx-b" text-anchor="middle">11</text>
      <text x="280" y="124" class="tx-b" text-anchor="middle">12</text><text x="400" y="124" class="tx" text-anchor="middle">13</text>
      <g class="f4">
        <rect x="10" y="140" width="76" height="36" rx="6"/><rect x="92" y="140" width="76" height="36" rx="6"/><rect x="174" y="140" width="76" height="36" rx="6"/><rect x="256" y="140" width="76" height="36" rx="6"/><rect x="338" y="140" width="76" height="36" rx="6"/>
      </g>
      <g class="tx" text-anchor="middle">
        <text x="48" y="164">11²=121</text><text x="130" y="164">12²=144</text><text x="212" y="164">13²=169</text><text x="294" y="164">14²=196</text><text x="376" y="164">15²=225</text>
      </g>
    </svg>`,
    text: `<p>Żeby oszacować √137, znajdź dwa „sąsiednie kwadraty”: 121 &lt; 137 &lt; 144, więc 11 &lt; √137 &lt; 12.</p>
      <p><b>Pułapki:</b> 2³ ≠ 6 · 2³ · 2⁴ ≠ 4⁷ (podstawa się nie zmienia!) · √(9 + 16) = √25 = 5, a nie 3 + 4 = 7 – pierwiastek z sumy to nie suma pierwiastków.</p>`,
    remember: '11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225.',
    hook: 'Szacujesz pierwiastek? Wciśnij liczbę między dwa znane kwadraty – jak książkę między dwie sąsiednie na półce.',
    check: { q: 'Między którymi kolejnymi liczbami całkowitymi leży √200?', options: ['13 i 14', '14 i 15', '15 i 16', '19 i 20'], answer: 1, explain: '14² = 196 < 200 < 225 = 15².' },
  },
];

window.LESSONS['matematyka/algebra'] = [
  {
    title: 'Wyrazy podobne – sortuj jak klocki',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Sortowanie wyrazów 3a, 2b, minus a, 4b na dwie grupy">
      <rect x="20" y="16" width="80" height="40" rx="8" class="f1 s1 sw"/><text x="60" y="42" class="tx-b" text-anchor="middle">3a</text>
      <rect x="120" y="16" width="80" height="40" rx="8" class="f2 s2 sw"/><text x="160" y="42" class="tx-b" text-anchor="middle">+2b</text>
      <rect x="220" y="16" width="80" height="40" rx="8" class="f1 s1 sw"/><text x="260" y="42" class="tx-b" text-anchor="middle">−a</text>
      <rect x="320" y="16" width="80" height="40" rx="8" class="f2 s2 sw"/><text x="360" y="42" class="tx-b" text-anchor="middle">+4b</text>
      <g class="s1" stroke-width="2"><line x1="60" y1="58" x2="100" y2="104"/><line x1="260" y1="58" x2="130" y2="104"/></g>
      <g class="s2" stroke-width="2"><line x1="160" y1="58" x2="290" y2="104"/><line x1="360" y1="58" x2="320" y2="104"/></g>
      <rect x="20" y="106" width="180" height="44" rx="10" class="f1 s1 sw"/><text x="110" y="134" class="tx-b" text-anchor="middle">3a − a = 2a</text>
      <rect x="220" y="106" width="180" height="44" rx="10" class="f2 s2 sw"/><text x="310" y="134" class="tx-b" text-anchor="middle">2b + 4b = 6b</text>
      <text x="210" y="190" class="tx-b" text-anchor="middle">3a + 2b − a + 4b = <tspan class="t1">2a</tspan> + <tspan class="t2">6b</tspan></text>
    </svg>`,
    text: `<p>Algebra to liczenie na literach – dzięki niej zapiszesz ogólną regułę i rozwiążesz zadanie tekstowe.</p>
      <p><b>Wyrazy podobne</b> mają tę samą część literową (3a i −a, 2b i 4b). Dodajesz tylko liczby przed literami. Wyrazów niepodobnych nie połączysz: 2a + 6b zostaje tak, jak jest.</p>`,
    remember: 'Redukujesz tylko wyrazy podobne: 3a − a = 2a, ale 2a + 6b się już nie uprości.',
    hook: 'Jabłka dodajesz do jabłek, gruszki do gruszek: 3 jabłka + 2 gruszki to nie 5 „jabłkogruszek”.',
    check: { q: 'Po redukcji wyrazów podobnych 5x + 3 − 2x + 4 = …', options: ['3x + 7', '7x + 7', '10x', '3x + 1'], answer: 0, explain: '5x − 2x = 3x oraz 3 + 4 = 7.' },
  },
  {
    title: 'Liczba razy nawias = prostokąt',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Prostokąt o bokach 2 oraz x plus 3 podzielony na pola 2x i 6">
      <text x="140" y="30" class="tx-b" text-anchor="middle">x</text>
      <text x="265" y="30" class="tx-b" text-anchor="middle">3</text>
      <text x="44" y="76" class="tx-b" text-anchor="end">2</text>
      <rect x="60" y="40" width="160" height="60" class="f1 s1 sw"/>
      <rect x="220" y="40" width="90" height="60" class="f2 s2 sw"/>
      <text x="140" y="77" class="tx-b t1" text-anchor="middle">2x</text>
      <text x="265" y="77" class="tx-b t2" text-anchor="middle">6</text>
      <text x="200" y="136" class="tx-b" text-anchor="middle">2(x + 3) = <tspan class="t1">2x</tspan> + <tspan class="t2">6</tspan></text>
      <text x="200" y="182" class="tx-b" text-anchor="middle">−(x <tspan class="t2">−</tspan> 4) = <tspan class="t2">−</tspan>x <tspan class="t2">+</tspan> 4</text>
    </svg>`,
    text: `<p>2(x + 3) to pole prostokąta o bokach 2 i (x + 3). Składa się z dwóch kawałków: 2 · x i 2 · 3. Dlatego 2(x + 3) = 2x + 6.</p>
      <p><b>Minus przed nawiasem</b> działa jak mnożenie przez −1: zmienia znak <b>każdego</b> wyrazu w nawiasie. −(x − 4) = −x + 4.</p>`,
    remember: 'Liczbę przed nawiasem mnożysz przez <b>każdy</b> wyraz w nawiasie. Minus przed nawiasem zmienia znak <b>każdego</b> wyrazu.',
    hook: 'Liczba przed nawiasem jest jak listonosz – musi dostarczyć list do <b>każdego</b> domu w nawiasie, nie tylko do pierwszego.',
    check: { q: 'Wyrażenie −(3x + 1) jest równe…', options: ['−3x − 1', '−3x + 1', '3x − 1', '−3x'], answer: 0, explain: 'Minus zmienia znak obu wyrazów: 3x → −3x i +1 → −1.' },
  },
  {
    title: 'Mnożenie sum – każdy z każdym',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Tabelka pól dla iloczynu x plus 2 razy x plus 3">
      <text x="120" y="30" class="tx-b" text-anchor="middle">x</text>
      <text x="210" y="30" class="tx-b" text-anchor="middle">+3</text>
      <text x="46" y="106" class="tx-b" text-anchor="end">x</text>
      <text x="46" y="186" class="tx-b" text-anchor="end">+2</text>
      <rect x="60" y="40" width="120" height="120" class="f1 s1 sw"/><text x="120" y="106" class="tx-b" text-anchor="middle">x²</text>
      <rect x="180" y="40" width="60" height="120" class="f2 s2 sw"/><text x="210" y="106" class="tx-b" text-anchor="middle">3x</text>
      <rect x="60" y="160" width="120" height="40" class="f2 s2 sw"/><text x="120" y="186" class="tx-b" text-anchor="middle">2x</text>
      <rect x="180" y="160" width="60" height="40" class="f3 s3 sw"/><text x="210" y="186" class="tx-b" text-anchor="middle">6</text>
      <text x="260" y="80" class="tx-s">pomarańczowe</text>
      <text x="260" y="100" class="tx-s">pola to wyrazy</text>
      <text x="260" y="120" class="tx-s">podobne:</text>
      <text x="260" y="146" class="tx-b t2">3x + 2x = 5x</text>
      <text x="200" y="228" class="tx-b" text-anchor="middle">(x + 2)(x + 3) = x² + 5x + 6</text>
    </svg>`,
    text: `<p>Mnożąc dwie sumy, mnożysz <b>każdy</b> wyraz pierwszego nawiasu przez <b>każdy</b> wyraz drugiego. Wychodzą 4 iloczyny – to cztery pola w tabelce.</p>
      <p>(x + 2)(x + 3) = x² + 3x + 2x + 6, a po redukcji wyrazów podobnych: <b>x² + 5x + 6</b>.</p>`,
    remember: '(a + b)(c + d) = ac + ad + bc + bd – każdy z każdym, potem redukcja.',
    hook: 'Tabelka: jeden nawias wpisz w wiersze, drugi w kolumny i wypełnij wszystkie pola – żaden iloczyn nie ucieknie.',
    check: { q: 'Iloczyn (x + 1)(x + 4) jest równy…', options: ['x² + 5x + 4', 'x² + 4', 'x² + 4x + 5', '2x + 5'], answer: 0, explain: 'x · x + 4x + x + 4 = x² + 5x + 4.' },
  },
  {
    title: 'Równanie to waga w równowadze',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Waga: trzy pudełka x i dwa odważniki 1 równoważą odważnik 14">
      <text x="210" y="28" class="tx-b" text-anchor="middle">3x + 2 = 14</text>
      <line x1="40" y1="120" x2="380" y2="120" class="ln" stroke-width="5"/>
      <polygon points="210,122 182,182 238,182" class="f5 s5 sw"/>
      <line x1="150" y1="184" x2="270" y2="184" class="ln"/>
      <g class="f1 s1" stroke-width="2.5">
        <rect x="44" y="84" width="32" height="34" rx="4"/><rect x="80" y="84" width="32" height="34" rx="4"/><rect x="116" y="84" width="32" height="34" rx="4"/>
      </g>
      <g class="tx-b t1" text-anchor="middle"><text x="60" y="107">x</text><text x="96" y="107">x</text><text x="132" y="107">x</text></g>
      <circle cx="164" cy="104" r="13" class="f3 s3" stroke-width="2.5"/><circle cx="194" cy="104" r="13" class="f3 s3" stroke-width="2.5"/>
      <text x="164" y="109" class="tx" text-anchor="middle">1</text><text x="194" y="109" class="tx" text-anchor="middle">1</text>
      <rect x="270" y="70" width="80" height="48" rx="6" class="f4 s4 sw"/>
      <text x="310" y="101" class="tx-b" text-anchor="middle">14</text>
    </svg>`,
    text: `<p>Równanie to waga w równowadze: lewa strona waży tyle, co prawa. Możesz robić wszystko, byle <b>z obiema stronami tak samo</b>.</p>
      <p>Zdejmij 2 odważniki z obu szalek: 3x = 12. Podziel obie strony na 3: <b>x = 4</b>. Sprawdzenie: 3 · 4 + 2 = 14 ✓.</p>`,
    remember: 'Co robisz z jedną stroną równania, zrób z drugą. Przenosząc wyraz na drugą stronę, zmieniasz jego znak.',
    hook: 'Zabierasz z jednej szalki – zabierz tyle samo z drugiej, inaczej waga się przechyli.',
    check: { q: 'Rozwiązaniem równania 2x + 5 = 17 jest…', options: ['x = 6', 'x = 11', 'x = 12', 'x = 8,5'], answer: 0, explain: '2x = 17 − 5 = 12, więc x = 6. Sprawdzenie: 2 · 6 + 5 = 17 ✓.' },
  },
  {
    title: 'Równanie z nawiasem – krok po kroku',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Schemat rozwiązywania równania 2 razy x plus 3 równa się x minus 1">
      <defs><marker id="a-mat-alg-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="8" width="200" height="38" rx="8" class="f1 s1 sw"/><text x="120" y="33" class="tx-b" text-anchor="middle">2(x + 3) = x − 1</text>
      <rect x="20" y="64" width="200" height="38" rx="8" class="f1 s1 sw"/><text x="120" y="89" class="tx-b" text-anchor="middle">2x + 6 = x − 1</text>
      <rect x="20" y="120" width="200" height="38" rx="8" class="f1 s1 sw"/><text x="120" y="145" class="tx-b" text-anchor="middle">2x − x = −1 − 6</text>
      <rect x="20" y="176" width="200" height="38" rx="8" class="f3 s3 sw"/><text x="120" y="201" class="tx-b t3" text-anchor="middle">x = −7</text>
      <g class="ln s2" marker-end="url(#a-mat-alg-5)"><line x1="120" y1="48" x2="120" y2="62"/><line x1="120" y1="104" x2="120" y2="118"/><line x1="120" y1="160" x2="120" y2="174"/></g>
      <text x="236" y="60" class="tx-s">① otwórz nawias</text>
      <text x="236" y="116" class="tx-s">② przenieś (zmień znak!)</text>
      <text x="236" y="172" class="tx-s">③ zredukuj</text>
    </svg>`,
    text: `<p>Plan: ① pozbądź się nawiasów (i ułamków – mnożąc obie strony przez mianownik), ② x na jedną stronę, liczby na drugą, ③ zredukuj i podziel przez liczbę przy x.</p>
      <p>④ <b>Sprawdź!</b> Dla x = −7: lewa strona 2 · (−7 + 3) = −8, prawa −7 − 1 = −8 ✓. Z ułamkiem: x/3 + 2 = 5 → x/3 = 3 → x = 9.</p>`,
    remember: '1) nawiasy i ułamki, 2) x na jedną stronę, liczby na drugą, 3) podziel przez liczbę przy x, 4) sprawdź wynik.',
    check: { q: 'Rozwiązaniem równania 4(x − 1) = 2x + 6 jest…', options: ['x = 5', 'x = 2,5', 'x = 3,5', 'x = −5'], answer: 0, explain: '4x − 4 = 2x + 6 → 2x = 10 → x = 5. Sprawdzenie: 4 · 4 = 16 i 10 + 6 = 16 ✓.' },
  },
  {
    title: 'Ze słów na algebrę – słowniczek',
    svg: `<svg viewBox="0 0 420 218" role="img" aria-label="Tłumaczenie zwrotów z zadań tekstowych na wyrażenia algebraiczne">
      <g class="f1"><rect x="10" y="8" width="230" height="36" rx="8"/><rect x="10" y="50" width="230" height="36" rx="8"/><rect x="10" y="92" width="230" height="36" rx="8"/><rect x="10" y="134" width="230" height="36" rx="8"/><rect x="10" y="176" width="230" height="36" rx="8"/></g>
      <g class="f3"><rect x="250" y="8" width="160" height="36" rx="8"/><rect x="250" y="50" width="160" height="36" rx="8"/><rect x="250" y="92" width="160" height="36" rx="8"/><rect x="250" y="134" width="160" height="36" rx="8"/><rect x="250" y="176" width="160" height="36" rx="8"/></g>
      <g class="tx">
        <text x="20" y="32">liczba o 5 większa od x</text><text x="20" y="74">3 razy większa od x</text><text x="20" y="116">połowa liczby x</text><text x="20" y="158">trzy kolejne liczby</text><text x="20" y="200">parzysta / nieparzysta</text>
      </g>
      <g class="tx-b t3">
        <text x="262" y="32">x + 5</text><text x="262" y="74">3x</text><text x="262" y="116">x/2</text><text x="262" y="158">n, n+1, n+2</text><text x="262" y="200">2n / 2n + 1</text>
      </g>
    </svg>`,
    text: `<p>Zadanie tekstowe: oznacz niewiadomą literą, przetłumacz zdania na algebrę, rozwiąż równanie i napisz odpowiedź. Np. Tomek ma x lat, a tata 4 razy więcej; razem mają 50 lat: x + 4x = 50 → 5x = 50 → x = 10.</p>
      <p><b>Przekształcanie wzorów</b> to też rozwiązywanie równania: z P = a · h / 2 mnożysz przez 2 → 2P = a · h → <b>h = 2P / a</b>.</p>`,
    remember: 'Pułapka: liczbę ujemną podstawiaj w nawiasie. Dla x = −2: 2x² − 3x = 2 · (−2)² − 3 · (−2) = 8 + 6 = 14.',
    hook: 'Słowniczek „polski → algebra”: „o 5 więcej” to +5, „5 razy więcej” to ·5. Raz przetłumaczone zdanie samo się rozwiązuje.',
    check: { q: 'Suma trzech kolejnych liczb naturalnych wynosi 33. Najmniejsza z nich to…', options: ['10', '11', '9', '12'], answer: 0, explain: 'n + (n + 1) + (n + 2) = 33 → 3n + 3 = 33 → n = 10. Liczby: 10, 11, 12.' },
  },
];

window.LESSONS['matematyka/bryly'] = [
  {
    title: 'Graniastosłup czy ostrosłup?',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Graniastosłup trójkątny z dwiema podstawami i ostrosłup czworokątny z wierzchołkiem">
      <rect x="40" y="70" width="110" height="110" class="f1"/>
      <polygon points="40,70 150,70 110,40" class="f2 s2 sw"/>
      <g class="ln"><line x1="40" y1="70" x2="40" y2="180"/><line x1="150" y1="70" x2="150" y2="180"/><line x1="40" y1="180" x2="150" y2="180"/></g>
      <g class="ln-thin dash"><line x1="110" y1="40" x2="110" y2="150"/><line x1="110" y1="150" x2="40" y2="180"/><line x1="110" y1="150" x2="150" y2="180"/></g>
      <polygon points="250,180 370,180 400,150 280,150" class="f2"/>
      <polygon points="250,180 370,180 325,40" class="f1"/>
      <polygon points="370,180 400,150 325,40" class="f1"/>
      <g class="ln"><line x1="250" y1="180" x2="370" y2="180"/><line x1="370" y1="180" x2="400" y2="150"/><line x1="325" y1="40" x2="250" y2="180"/><line x1="325" y1="40" x2="370" y2="180"/><line x1="325" y1="40" x2="400" y2="150"/></g>
      <g class="ln-thin dash"><line x1="250" y1="180" x2="280" y2="150"/><line x1="280" y1="150" x2="400" y2="150"/><line x1="325" y1="40" x2="280" y2="150"/></g>
      <circle cx="325" cy="40" r="5" class="t2"/>
      <text x="95" y="210" class="tx-b" text-anchor="middle">graniastosłup</text>
      <text x="95" y="232" class="tx-s" text-anchor="middle">2 równe podstawy</text>
      <text x="325" y="210" class="tx-b" text-anchor="middle">ostrosłup</text>
      <text x="325" y="232" class="tx-s" text-anchor="middle">1 podstawa i wierzchołek</text>
    </svg>`,
    text: `<p><b>Graniastosłup</b> ma dwie jednakowe, równoległe podstawy (pomarańczowe), połączone ścianami bocznymi. <b>Ostrosłup</b> ma jedną podstawę, a jego ściany boczne to trójkąty, które schodzą się w jednym wierzchołku.</p>
      <p>Nazwa pochodzi od podstawy: trójkąt → trójkątny, czworokąt → czworokątny, sześciokąt → sześciokątny. Sześcian i prostopadłościan to też graniastosłupy.</p>`,
    hook: 'Ostrosłup jest „ostry” – ma czubek jak piramida. Graniastosłup wygląda tak samo na górze i na dole, jak pudełko.',
    check: { q: 'Która bryła ma tylko jedną podstawę?', options: ['sześcian', 'graniastosłup trójkątny', 'ostrosłup', 'prostopadłościan'], answer: 2 },
  },
  {
    title: 'Ile wierzchołków, krawędzi i ścian?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tabela liczby wierzchołków, krawędzi i ścian graniastosłupa i ostrosłupa">
      <g class="tx-s" text-anchor="middle"><text x="197" y="30">wierzchołki</text><text x="287" y="30">krawędzie</text><text x="372" y="30">ściany</text></g>
      <rect x="10" y="44" width="400" height="38" rx="8" class="f1 s1" stroke-width="2"/>
      <text x="20" y="69" class="tx-b">graniastosłup</text>
      <g class="tx-b t1" text-anchor="middle"><text x="197" y="69">2n</text><text x="287" y="69">3n</text><text x="372" y="69">n + 2</text></g>
      <text x="20" y="104" class="tx-s">np. n = 6</text>
      <g class="tx" text-anchor="middle"><text x="197" y="104">12</text><text x="287" y="104">18</text><text x="372" y="104">8</text></g>
      <rect x="10" y="122" width="400" height="38" rx="8" class="f2 s2" stroke-width="2"/>
      <text x="20" y="147" class="tx-b">ostrosłup</text>
      <g class="tx-b t2" text-anchor="middle"><text x="197" y="147">n + 1</text><text x="287" y="147">2n</text><text x="372" y="147">n + 1</text></g>
      <text x="20" y="182" class="tx-s">np. n = 6</text>
      <g class="tx" text-anchor="middle"><text x="197" y="182">7</text><text x="287" y="182">12</text><text x="372" y="182">7</text></g>
    </svg>`,
    text: `<p>n to liczba wierzchołków (boków) podstawy. <b>Graniastosłup</b>: n wierzchołków na dole i n na górze; krawędzie to n na dole, n na górze i n „słupków” – razem 3n; ściany to n bocznych + 2 podstawy.</p>
      <p><b>Ostrosłup</b>: n wierzchołków podstawy + czubek; krawędzie: n w podstawie i n do czubka – razem 2n; ściany: n bocznych + 1 podstawa.</p>`,
    remember: 'Graniastosłup: 2n wierzchołków, 3n krawędzi, n + 2 ścian. Ostrosłup: n + 1 wierzchołków, 2n krawędzi, n + 1 ścian.',
    hook: 'Nie wkuwaj – policz: graniastosłup to „dół + góra + słupki” (n + n + n = 3n krawędzi), ostrosłup to „podstawa + krawędzie do czubka” (n + n = 2n).',
    check: { q: 'Ile krawędzi ma graniastosłup pięciokątny?', options: ['10', '15', '7', '12'], answer: 1, explain: '3n = 3 · 5 = 15.' },
  },
  {
    title: 'Objętość – ile kostek się zmieści?',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Prostopadłościan 4 na 3 na 2 zbudowany z 24 kostek">
      <polygon points="40,110 184,110 226,80 82,80" class="f3 s3 sw"/>
      <polygon points="184,110 226,80 226,152 184,182" class="f1 s1 sw"/>
      <rect x="40" y="110" width="144" height="72" class="f1 s1 sw"/>
      <g class="ln-thin">
        <line x1="76" y1="110" x2="76" y2="182"/><line x1="112" y1="110" x2="112" y2="182"/><line x1="148" y1="110" x2="148" y2="182"/><line x1="40" y1="146" x2="184" y2="146"/>
        <line x1="76" y1="110" x2="118" y2="80"/><line x1="112" y1="110" x2="154" y2="80"/><line x1="148" y1="110" x2="190" y2="80"/>
        <line x1="54" y1="100" x2="198" y2="100"/><line x1="68" y1="90" x2="212" y2="90"/>
        <line x1="198" y1="100" x2="198" y2="172"/><line x1="212" y1="90" x2="212" y2="162"/><line x1="184" y1="146" x2="226" y2="116"/>
      </g>
      <text x="112" y="204" class="tx-b" text-anchor="middle">4</text>
      <text x="28" y="152" class="tx-b" text-anchor="end">2</text>
      <text x="216" y="74" class="tx-b">3</text>
      <text x="260" y="60" class="tx-b">V = a · b · c</text>
      <text x="260" y="90" class="tx">= 4 · 3 · 2</text>
      <text x="260" y="120" class="tx-b t3">= 24 kostki</text>
      <text x="260" y="166" class="tx-b t1">V = Pp · H</text>
      <text x="260" y="190" class="tx-s">Pp – pole podstawy</text>
      <text x="260" y="210" class="tx-s">H – wysokość bryły</text>
    </svg>`,
    text: `<p>Objętość mówi, ile sześciennych kostek 1 × 1 × 1 zmieści się w bryle. Dolna warstwa to 4 · 3 = 12 kostek (to pole podstawy), a warstwy są 2: razem 12 · 2 = <b>24</b>.</p>
      <p>Tak samo liczysz każdy graniastosłup: <b>pole podstawy razy wysokość</b>. Np. Pp = 12 cm², H = 5 cm → V = 60 cm³.</p>`,
    remember: 'Graniastosłup: V = Pp · H. Prostopadłościan: V = a · b · c. Sześcian: V = a³.',
    hook: 'Objętość to „warstwy”: policz kostki w jednej warstwie (pole podstawy) i pomnóż przez liczbę warstw (wysokość).',
    check: { q: 'Objętość prostopadłościanu o wymiarach 2 × 4 × 5 wynosi…', options: ['40', '11', '22', '76'], answer: 0, explain: '2 · 4 · 5 = 40. (76 to pole powierzchni tego prostopadłościanu – nie myl!)' },
  },
  {
    title: 'Ostrosłup – trzy razy mniej',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Ostrosłup wpisany w prostopadłościan o tej samej podstawie i wysokości; trzy ostrosłupy wypełniają graniastosłup">
      <g class="ln-thin"><line x1="30" y1="60" x2="130" y2="60"/><line x1="130" y1="60" x2="170" y2="30"/><line x1="170" y1="30" x2="70" y2="30"/><line x1="70" y1="30" x2="30" y2="60"/>
        <line x1="30" y1="60" x2="30" y2="180"/><line x1="130" y1="60" x2="130" y2="180"/><line x1="170" y1="30" x2="170" y2="150"/></g>
      <g class="ln-thin dash"><line x1="70" y1="30" x2="70" y2="150"/></g>
      <polygon points="30,180 130,180 100,45" class="f2 s2" stroke-width="2.5"/>
      <polygon points="130,180 170,150 100,45" class="f2 s2" stroke-width="2.5"/>
      <g class="ln-thin dash"><line x1="30" y1="180" x2="70" y2="150"/><line x1="70" y1="150" x2="170" y2="150"/><line x1="100" y1="45" x2="70" y2="150"/></g>
      <line x1="100" y1="45" x2="100" y2="165" class="s1 dash" stroke-width="2.5"/>
      <circle cx="100" cy="165" r="3" class="t1"/>
      <text x="108" y="125" class="tx-b t1">H</text>
      <g class="f2 s2" stroke-width="2.5">
        <polygon points="225,110 255,110 240,60"/><polygon points="265,110 295,110 280,60"/><polygon points="305,110 335,110 320,60"/>
      </g>
      <text x="350" y="92" class="tx-b">=</text>
      <rect x="370" y="60" width="40" height="50" class="f1 s1 sw"/>
      <text x="315" y="150" class="tx-b" text-anchor="middle">V = ⅓ · Pp · H</text>
      <text x="315" y="176" class="tx-s" text-anchor="middle">ta sama podstawa i wysokość</text>
    </svg>`,
    text: `<p>Ostrosłup o tej samej podstawie i wysokości co graniastosłup ma <b>3 razy mniejszą</b> objętość. Dlatego we wzorze jest ⅓.</p>
      <p>Przykład: ostrosłup prawidłowy czworokątny, krawędź podstawy 6, wysokość 4: V = ⅓ · 6² · 4 = ⅓ · 36 · 4 = 48. Pole powierzchni ostrosłupa: Pp + Pb (jedna podstawa!).</p>`,
    remember: 'Ostrosłup: V = ⅓ · Pp · H. Nie zapomnij o ⅓!',
    hook: 'Naczyniem w kształcie ostrosłupa trzeba nalać wodę <b>3 razy</b>, żeby napełnić graniastosłup o tej samej podstawie i wysokości.',
    check: { q: 'Ostrosłup ma pole podstawy 18 cm² i wysokość 5 cm. Jego objętość to…', options: ['30 cm³', '90 cm³', '45 cm³', '23 cm³'], answer: 0, explain: '⅓ · 18 · 5 = 6 · 5 = 30 cm³. (90 cm³ – zapomniane ⅓.)' },
  },
  {
    title: 'Pole powierzchni = pole siatki',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Siatka sześcianu z sześciu kwadratów">
      <g class="f1 s1" stroke-width="2.5">
        <rect x="110" y="10" width="44" height="44"/><rect x="110" y="98" width="44" height="44"/>
        <rect x="66" y="54" width="44" height="44"/><rect x="154" y="54" width="44" height="44"/>
      </g>
      <g class="f3 s3" stroke-width="2.5">
        <rect x="110" y="54" width="44" height="44"/><rect x="110" y="142" width="44" height="44"/>
      </g>
      <text x="100" y="38" class="tx-b" text-anchor="end">a</text>
      <text x="132" y="204" class="tx-s" text-anchor="middle">6 kwadratów</text>
      <text x="230" y="44" class="tx-b">Sześcian: 6 ścian</text>
      <text x="230" y="74" class="tx-b t1">P = 6a²</text>
      <text x="230" y="124" class="tx-b">Prostopadłościan:</text>
      <text x="230" y="154" class="tx t2">P = 2(ab + bc + ac)</text>
      <text x="230" y="180" class="tx-s">3 pary jednakowych ścian</text>
    </svg>`,
    text: `<p>Pole powierzchni bryły to suma pól wszystkich jej ścian – czyli pole jej <b>siatki</b>. Sześcian o krawędzi 3: 6 · 3² = 6 · 9 = 54.</p>
      <p>Graniastosłup ma dwie podstawy i ściany boczne: <b>P = 2Pp + Pb</b>. Ostrosłup ma jedną podstawę: <b>P = Pp + Pb</b>.</p>`,
    remember: 'Pole powierzchni = pole siatki. Graniastosłup: 2Pp + Pb, ostrosłup: Pp + Pb.',
    hook: 'Pole powierzchni to „ile papieru zużyjesz do oklejenia pudełka”, objętość – „ile wody się w nim zmieści”.',
    check: { q: 'Pole powierzchni sześcianu o krawędzi 4 wynosi…', options: ['96', '64', '16', '48'], answer: 0, explain: '6 · 4² = 6 · 16 = 96. (64 to objętość.)' },
  },
  {
    title: 'Przekątna i litry – pułapki',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Sześcian z przekątną a pierwiastek z 3 oraz sześcian 1 dm sześcienny równy 1 litr">
      <polygon points="30,80 130,80 170,50 70,50" class="f1"/>
      <polygon points="130,80 170,50 170,150 130,180" class="f1"/>
      <g class="ln"><rect x="30" y="80" width="100" height="100"/><line x1="130" y1="80" x2="170" y2="50"/><line x1="30" y1="80" x2="70" y2="50"/><line x1="70" y1="50" x2="170" y2="50"/><line x1="170" y1="50" x2="170" y2="150"/><line x1="130" y1="180" x2="170" y2="150"/></g>
      <g class="ln-thin dash"><line x1="70" y1="150" x2="30" y2="180"/><line x1="70" y1="150" x2="170" y2="150"/><line x1="70" y1="150" x2="70" y2="50"/></g>
      <line x1="30" y1="180" x2="170" y2="50" class="s2" stroke-width="4"/>
      <text x="80" y="200" class="tx-b" text-anchor="middle">a</text>
      <text x="100" y="30" class="tx-b t2" text-anchor="middle">d = a√3</text>
      <polygon points="260,60 320,60 340,45 280,45" class="f3 s3" stroke-width="2"/>
      <polygon points="320,60 340,45 340,105 320,120" class="f3 s3" stroke-width="2"/>
      <rect x="260" y="60" width="60" height="60" class="f3 s3" stroke-width="2"/>
      <text x="290" y="138" class="tx-s" text-anchor="middle">1 dm = 10 cm</text>
      <text x="320" y="166" class="tx-b t3" text-anchor="middle">1 dm³ = 1 l</text>
      <text x="320" y="190" class="tx" text-anchor="middle">1 m³ = 1000 l</text>
      <text x="320" y="212" class="tx" text-anchor="middle">1 cm³ = 1 ml</text>
    </svg>`,
    text: `<p>Przekątna sześcianu łączy przeciwległe wierzchołki i przechodzi przez jego wnętrze: <b>d = a√3</b>. W prostopadłościanie: √(a² + b² + c²).</p>
      <p><b>Litry:</b> akwarium 50 cm × 30 cm × 40 cm zamień najpierw na decymetry: 5 · 3 · 4 = 60 dm³ = <b>60 litrów</b>.</p>
      <p><b>Pułapki:</b> ⅓ przy ostrosłupie, dwie podstawy w polu graniastosłupa, te same jednostki we wszystkich wymiarach.</p>`,
    remember: 'Przekątna sześcianu: a√3. 1 dm³ = 1 l, 1 m³ = 1000 l, 1 cm³ = 1 ml.',
    hook: 'Wymiary w cm, a pytają o litry? Najpierw podziel każdy wymiar przez 10 (zamiana na dm) – wynik wyjdzie od razu w litrach.',
    check: { q: 'Akwarium ma wymiary 40 cm × 20 cm × 30 cm. Ile litrów wody się w nim zmieści?', options: ['24 l', '240 l', '2,4 l', '24 000 l'], answer: 0, explain: '4 dm · 2 dm · 3 dm = 24 dm³ = 24 litry.' },
  },
];

window.LESSONS['matematyka/statystyka'] = [
  {
    title: 'Średnia – wyrównaj słupki',
    svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Słupki 4, 5, 6 i 9 wyrównane do średniej 6">
      <rect x="40" y="82" width="50" height="36" class="ln-thin dash"/>
      <rect x="120" y="82" width="50" height="18" class="ln-thin dash"/>
      <rect x="40" y="118" width="50" height="72" class="f1 s1 sw"/>
      <rect x="120" y="100" width="50" height="90" class="f1 s1 sw"/>
      <rect x="200" y="82" width="50" height="108" class="f1 s1 sw"/>
      <rect x="280" y="82" width="50" height="108" class="f1 s1 sw"/>
      <rect x="280" y="28" width="50" height="54" class="f2 s2 sw"/>
      <line x1="25" y1="82" x2="350" y2="82" class="s2 dash" stroke-width="2.5"/>
      <line x1="25" y1="190" x2="350" y2="190" class="ln"/>
      <text x="30" y="72" class="tx-b t2">średnia = 6</text>
      <text x="305" y="60" class="tx-s" text-anchor="middle">+3</text>
      <text x="65" y="104" class="tx-s" text-anchor="middle">−2</text>
      <text x="145" y="96" class="tx-s" text-anchor="middle">−1</text>
      <g class="tx-b" text-anchor="middle"><text x="65" y="212">4</text><text x="145" y="212">5</text><text x="225" y="212">6</text><text x="305" y="212">9</text></g>
    </svg>`,
    text: `<p>Statystyka pomaga opisać dużo danych jedną liczbą albo jednym obrazkiem. Najważniejsza liczba to <b>średnia arytmetyczna</b>.</p>
      <p>Średnia liczb 4, 5, 6, 9: (4 + 5 + 6 + 9) : 4 = 24 : 4 = <b>6</b>. Na rysunku widać, co to znaczy: nadwyżka wysokiego słupka (+3) wypełnia braki niższych (2 + 1) i wszystkie słupki mają wysokość 6.</p>`,
    remember: 'Średnia arytmetyczna = suma liczb : ich ilość.',
    hook: 'Średnia to „sprawiedliwy podział”: gdyby wszyscy złożyli się do wspólnej puli i wzięli po równo, każdy dostałby właśnie średnią.',
    check: { q: 'Średnia arytmetyczna liczb 2, 4, 6, 8, 10 wynosi…', options: ['5', '6', '30', '8'], answer: 1, explain: '(2 + 4 + 6 + 8 + 10) : 5 = 30 : 5 = 6.' },
  },
  {
    title: 'Czytanie diagramu słupkowego',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Diagram słupkowy liczby przeczytanych książek we wrześniu, październiku, listopadzie i grudniu">
      <text x="50" y="18" class="tx-s">liczba książek</text>
      <g class="ln-thin"><line x1="50" y1="135" x2="400" y2="135"/><line x1="50" y1="85" x2="400" y2="85"/><line x1="50" y1="35" x2="400" y2="35"/></g>
      <g class="tx-s" text-anchor="end"><text x="40" y="189">0</text><text x="40" y="139">2</text><text x="40" y="89">4</text><text x="40" y="39">6</text></g>
      <rect x="75" y="135" width="50" height="50" class="f1 s1 sw"/>
      <rect x="155" y="85" width="50" height="100" class="f1 s1 sw"/>
      <rect x="235" y="110" width="50" height="75" class="f1 s1 sw"/>
      <rect x="315" y="60" width="50" height="125" class="f2 s2 sw"/>
      <line x1="50" y1="185" x2="400" y2="185" class="ln"/><line x1="50" y1="185" x2="50" y2="28" class="ln"/>
      <g class="tx-b" text-anchor="middle"><text x="100" y="128">2</text><text x="180" y="78">4</text><text x="260" y="103">3</text><text x="340" y="53" class="t2">5</text></g>
      <g class="tx" text-anchor="middle"><text x="100" y="206">wrz</text><text x="180" y="206">paź</text><text x="260" y="206">lis</text><text x="340" y="206">gru</text></g>
    </svg>`,
    text: `<p>Zanim odczytasz cokolwiek, sprawdź <b>podpisy osi</b> i <b>skalę</b> (tu jedna linia siatki = 2 książki). Wysokość słupka odczytujesz na osi pionowej.</p>
      <p>Najwięcej książek – w grudniu (5). Razem: 2 + 4 + 3 + 5 = 14, średnio 14 : 4 = 3,5 książki na miesiąc.</p>
      <p><b>Brakująca liczba:</b> średnia trzech ocen to 5, dwie z nich to 4 i 5. Suma ocen = 3 · 5 = 15, więc trzecia ocena to 15 − 4 − 5 = 6.</p>`,
    remember: 'Gdy znasz średnią, znasz sumę: suma = średnia · ilość liczb.',
    hook: 'Diagram czytaj jak mapę: najpierw legenda (osie i skala), dopiero potem droga (słupki).',
    check: { q: 'Ile książek łącznie przeczytano w czterech miesiącach pokazanych na diagramie?', options: ['14', '5', '12', '3,5'], answer: 0, explain: '2 + 4 + 3 + 5 = 14.' },
  },
  {
    title: 'Prawdopodobieństwo – losujemy kulę',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pudełko z 3 pomarańczowymi i 5 niebieskimi kulami; prawdopodobieństwo 3/8">
      <rect x="30" y="40" width="190" height="130" rx="14" class="ln"/>
      <circle cx="65" cy="80" r="17" class="f2 s2 sw"/><circle cx="105" cy="80" r="17" class="f1 s1 sw"/><circle cx="145" cy="80" r="17" class="f2 s2 sw"/><circle cx="185" cy="80" r="17" class="f1 s1 sw"/>
      <circle cx="65" cy="130" r="17" class="f1 s1 sw"/><circle cx="105" cy="130" r="17" class="f2 s2 sw"/><circle cx="145" cy="130" r="17" class="f1 s1 sw"/><circle cx="185" cy="130" r="17" class="f1 s1 sw"/>
      <text x="310" y="40" class="tx-s" text-anchor="middle">sprzyjające</text>
      <text x="310" y="80" class="tx-b t2" text-anchor="middle">3</text>
      <line x1="280" y1="92" x2="340" y2="92" class="ln"/>
      <text x="310" y="120" class="tx-b" text-anchor="middle">8</text>
      <text x="310" y="150" class="tx-s" text-anchor="middle">wszystkie</text>
      <text x="268" y="98" class="tx-b" text-anchor="end">P =</text>
    </svg>`,
    text: `<p>W pudełku są 3 kule pomarańczowe i 5 niebieskich – razem 8. Każda ma tę samą szansę. Pomarańczowa „pasuje” w 3 przypadkach na 8, więc P = <b>3/8</b>.</p>
      <p>Prawdopodobieństwo jest zawsze liczbą od 0 do 1. Wylosowanie zielonej kuli z tego pudełka ma P = 0, a wylosowanie jakiejkolwiek kuli – P = 1.</p>`,
    remember: 'P = liczba zdarzeń sprzyjających / liczba wszystkich możliwych zdarzeń. Zawsze 0 ≤ P ≤ 1.',
    hook: 'Licznik – to, na co <b>czekasz</b>. Mianownik – <b>wszystko</b>, co może się zdarzyć.',
    check: { q: 'W pudełku są 2 kule zielone i 4 żółte. Jakie jest prawdopodobieństwo wylosowania kuli zielonej?', options: ['1/3', '1/2', '2/4', '2/3'], answer: 0, explain: '2 sprzyjające na 6 wszystkich: 2/6 = 1/3. (2/4 to błąd – w mianowniku są wszystkie kule, nie tylko żółte.)' },
  },
  {
    title: 'Rzut kostką – sprawdź sam',
    widget: { type: 'kostka' },
    text: `<p>Kostka ma 6 ścianek i każdy wynik jest tak samo możliwy, więc P(szóstka) = <b>1/6</b>. Rzuć kilka razy po 100 – słupki się wyrównują, a częstość szóstki zbliża się do 1/6 ≈ 16,7%.</p>
      <p>P(liczba parzysta) = 3/6 = 1/2 (2, 4, 6). P(liczba większa niż 4) = 2/6 = 1/3 (5 i 6).</p>`,
    remember: 'Przy jednej kostce wszystkich wyników jest 6. Wypisz wyniki sprzyjające i policz je.',
    check: { q: 'Rzucamy kostką do gry. Jakie jest prawdopodobieństwo wyrzucenia liczby mniejszej niż 3?', options: ['1/3', '1/2', '1/6', '2/3'], answer: 0, explain: 'Sprzyjające wyniki: 1 i 2 → 2/6 = 1/3.' },
  },
  {
    title: 'Zliczanie – wypisz wszystko',
    svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Tabela wyników dwóch rzutów monetą: OO, OR, RO, RR">
      <text x="250" y="22" class="tx-s" text-anchor="middle">2. rzut</text>
      <text x="60" y="126" class="tx-s" text-anchor="middle">1. rzut</text>
      <rect x="150" y="30" width="100" height="30" class="f4"/><rect x="250" y="30" width="100" height="30" class="f4"/>
      <rect x="100" y="60" width="50" height="60" class="f4"/><rect x="100" y="120" width="50" height="60" class="f4"/>
      <text x="200" y="51" class="tx-b" text-anchor="middle">O</text><text x="300" y="51" class="tx-b" text-anchor="middle">R</text>
      <text x="125" y="96" class="tx-b" text-anchor="middle">O</text><text x="125" y="156" class="tx-b" text-anchor="middle">R</text>
      <rect x="150" y="60" width="100" height="60" class="f3 s3 sw"/>
      <rect x="250" y="60" width="100" height="60" class="f1 s1" stroke-width="2"/>
      <rect x="150" y="120" width="100" height="60" class="f1 s1" stroke-width="2"/>
      <rect x="250" y="120" width="100" height="60" class="f1 s1" stroke-width="2"/>
      <text x="200" y="96" class="tx-b t3" text-anchor="middle">OO</text><text x="300" y="96" class="tx-b" text-anchor="middle">OR</text>
      <text x="200" y="156" class="tx-b" text-anchor="middle">RO</text><text x="300" y="156" class="tx-b" text-anchor="middle">RR</text>
      <text x="250" y="200" class="tx-s" text-anchor="middle">O – orzeł, R – reszka</text>
    </svg>`,
    text: `<p>Możliwości liczysz, <b>wypisując je wszystkie</b> – najlepiej w tabeli albo uporządkowanej liście. Dwa rzuty monetą dają 4 wyniki: OO, OR, RO, RR. Dwa orły to tylko 1 z nich, więc P = <b>1/4</b>.</p>
      <p>Uwaga: OR i RO to <b>dwa różne</b> wyniki (orzeł w pierwszym albo w drugim rzucie). Tak samo: liczby dwucyfrowe o sumie cyfr 3 to 12, 21, 30 – są 3.</p>`,
    remember: 'Wypisuj możliwości po kolei (tabela, lista) – żadnej nie zgubisz i żadnej nie policzysz dwa razy.',
    hook: 'Ponumeruj monety w myślach: „pierwsza” i „druga”. Od razu widać, że OR to nie to samo co RO.',
    check: { q: 'Ile jest liczb dwucyfrowych, których suma cyfr wynosi 4?', options: ['3', '4', '5', '6'], answer: 1, explain: 'Wypisz po kolei: 13, 22, 31, 40 – są 4.' },
  },
  {
    title: 'Podsumowanie – cztery pułapki',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Cztery kafelki z pułapkami ze statystyki i prawdopodobieństwa">
      <rect x="10" y="10" width="195" height="86" rx="10" class="f2 s2" stroke-width="2"/>
      <text x="22" y="40" class="tx-b">P większe od 1?</text><text x="22" y="72" class="tx">Nie! 0 ≤ P ≤ 1</text>
      <rect x="215" y="10" width="195" height="86" rx="10" class="f1 s1" stroke-width="2"/>
      <text x="227" y="40" class="tx-b">OR ≠ RO</text><text x="227" y="72" class="tx">to dwa różne wyniki</text>
      <rect x="10" y="104" width="195" height="86" rx="10" class="f3 s3" stroke-width="2"/>
      <text x="22" y="134" class="tx-b">Średnia</text><text x="22" y="166" class="tx">dziel przez ILOŚĆ</text>
      <rect x="215" y="104" width="195" height="86" rx="10" class="f4 s4" stroke-width="2"/>
      <text x="227" y="134" class="tx-b">Diagram</text><text x="227" y="166" class="tx">najpierw skala osi</text>
    </svg>`,
    text: `<p>Jeśli wyszło Ci prawdopodobieństwo większe od 1 albo ujemne – na pewno jest błąd. Sprawdź, czy w mianowniku są <b>wszystkie</b> możliwości.</p>
      <p>Licząc średnią, dziel przez <b>liczbę danych</b> (ile ich jest), a nie przez największą liczbę. Czytając diagram, zacznij od skali.</p>`,
    remember: 'Średnia = suma : ilość. P = sprzyjające / wszystkie, zawsze od 0 do 1. Możliwości – wypisz wszystkie.',
    check: { q: 'Która liczba NIE może być prawdopodobieństwem zdarzenia?', options: ['5/4', '0', '1/2', '1'], answer: 0, explain: '5/4 > 1, a prawdopodobieństwo nie przekracza 1.' },
  },
];

window.LESSONS['matematyka/zadania-tekstowe'] = [
  {
    title: 'Droga, prędkość, czas',
    svg: `<svg viewBox="0 0 420 262" role="img" aria-label="Trasa 240 km podzielona na trzy godzinne odcinki po 80 km oraz trójkąt wzorów s, v, t">
      <text x="22" y="78" class="tx-b">🚗</text><text x="392" y="78" class="tx-b">🏁</text>
      <rect x="30" y="88" width="120" height="22" class="f1 s1" stroke-width="2"/>
      <rect x="150" y="88" width="120" height="22" class="f3 s3" stroke-width="2"/>
      <rect x="270" y="88" width="120" height="22" class="f2 s2" stroke-width="2"/>
      <g class="tx-b" text-anchor="middle"><text x="90" y="78">1 h</text><text x="210" y="78">1 h</text><text x="330" y="78">1 h</text></g>
      <g class="tx" text-anchor="middle"><text x="90" y="134">80 km</text><text x="210" y="134">80 km</text><text x="330" y="134">80 km</text></g>
      <text x="210" y="166" class="tx-s" text-anchor="middle">240 km w 3 h → v = 240 : 3 = 80 km/h</text>
      <polygon points="150,252 270,252 210,186" class="f4 s4 sw"/>
      <line x1="171" y1="222" x2="249" y2="222" class="ln s4" stroke-width="2"/>
      <line x1="210" y1="222" x2="210" y2="252" class="ln s4" stroke-width="2"/>
      <g class="tx-b" text-anchor="middle"><text x="210" y="216">s</text><text x="190" y="245">v</text><text x="230" y="245">t</text></g>
      <g class="tx"><text x="20" y="206">s = v · t</text><text x="20" y="230">v = s : t</text><text x="20" y="254">t = s : v</text></g>
      <text x="290" y="222" class="tx-s">zakryj to,</text><text x="290" y="240" class="tx-s">czego szukasz</text>
    </svg>`,
    text: `<p>Zadania o ruchu, mapach i jednostkach to praktyczna matematyka – i stały punkt egzaminu. Wszystko opiera się na trzech wielkościach: <b>droga s</b>, <b>prędkość v</b>, <b>czas t</b>.</p>
      <p>Prędkość 80 km/h znaczy: w każdej godzinie 80 km. W 3 godziny – 3 odcinki po 80 km, czyli 240 km.</p>`,
    remember: 'v = s / t · s = v · t · t = s / v',
    hook: 'Trójkąt „s na górze, v i t na dole”: zakryj palcem to, czego szukasz. s nad kreską → dzielisz, v obok t → mnożysz.',
    check: { q: 'Autobus jedzie ze stałą prędkością 50 km/h. Ile czasu zajmie mu przejechanie 150 km?', options: ['3 h', '2 h', '7500 h', '100 h'], answer: 0, explain: 't = s : v = 150 : 50 = 3 h.' },
  },
  {
    title: 'Minuty na godziny – godzina to pizza',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tarcza zegara: 45 minut to trzy czwarte godziny">
      <path d="M100,100 L100,20 A80,80 0 1,1 20,100 Z" class="f2 s2 sw"/>
      <path d="M100,100 L20,100 A80,80 0 0,1 100,20 Z" class="f1 s1 sw"/>
      <g class="ln-thin"><line x1="100" y1="100" x2="180" y2="100"/><line x1="100" y1="100" x2="100" y2="180"/></g>
      <circle cx="100" cy="100" r="4" class="t2"/>
      <g class="tx-s"><text x="100" y="15" text-anchor="middle">0</text><text x="186" y="105">15</text><text x="100" y="197" text-anchor="middle">30</text><text x="3" y="105">45</text></g>
      <text x="130" y="140" class="tx-b t2" text-anchor="middle">0,75 h</text>
      <g class="tx"><text x="215" y="50">15 min = 0,25 h</text><text x="215" y="82">30 min = 0,5 h</text></g>
      <text x="215" y="114" class="tx-b t2">45 min = 0,75 h</text>
      <text x="215" y="146" class="tx">1 h = 60 min</text>
      <text x="215" y="178" class="tx-s">2,5 h = 150 min</text>
    </svg>`,
    text: `<p>Gdy prędkość jest w km/h, czas musi być w <b>godzinach</b>. Rowerzysta jedzie 15 km/h przez 45 min: 45 min = 0,75 h, więc s = 15 · 0,75 = <b>11,25 km</b>.</p>
      <p>Nie pisz 45 min = 0,45 h! Godzina ma 60 minut, a nie 100.</p>`,
    remember: 'Prędkość w km/h → czas w godzinach. 15 min = 0,25 h, 30 min = 0,5 h, 45 min = 0,75 h.',
    hook: 'Godzina to cała pizza: 15 minut – ćwiartka (0,25), 30 – połówka (0,5), 45 – trzy ćwiartki (0,75).',
    check: { q: 'Samochód jedzie ze stałą prędkością 60 km/h. Jaką drogę pokona w 15 minut?', options: ['15 km', '4 km', '900 km', '25 km'], answer: 0, explain: '15 min = 0,25 h; 60 · 0,25 = 15 km.' },
  },
  {
    title: 'm/s czy km/h? Magiczne 3,6',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Zamiana m/s na km/h: mnożenie i dzielenie przez 3,6">
      <defs><marker id="a-mat-zad-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="58" width="130" height="50" rx="10" class="f1 s1 sw"/><text x="85" y="90" class="tx-b" text-anchor="middle">20 m/s</text>
      <rect x="250" y="58" width="130" height="50" rx="10" class="f2 s2 sw"/><text x="315" y="90" class="tx-b" text-anchor="middle">72 km/h</text>
      <path d="M155,62 Q200,22 245,62" class="ln s2" marker-end="url(#a-mat-zad-3)"/>
      <text x="200" y="28" class="tx-b t2" text-anchor="middle">· 3,6</text>
      <path d="M245,104 Q200,144 155,104" class="ln s1" marker-end="url(#a-mat-zad-3)"/>
      <text x="200" y="150" class="tx-b t1" text-anchor="middle">: 3,6</text>
    </svg>`,
    text: `<p>Skąd 3,6? Godzina ma 3600 sekund. Jadąc 1 m/s, w godzinę przejedziesz 3600 m = 3,6 km. Czyli <b>1 m/s = 3,6 km/h</b>.</p>
      <p>Z km/h na m/s – dzielisz: 72 km/h = 72 : 3,6 = <b>20 m/s</b>.</p>`,
    remember: '1 m/s = 3,6 km/h. Z m/s na km/h mnożysz przez 3,6, z km/h na m/s dzielisz przez 3,6.',
    hook: 'W km/h liczby są „duże” (72), w m/s – „małe” (20). Idziesz do km/h – liczba musi urosnąć, więc mnożysz.',
    check: { q: 'Ile to jest 10 m/s w km/h?', options: ['36 km/h', '3,6 km/h', '100 km/h', '2,8 km/h'], answer: 0, explain: '10 · 3,6 = 36 km/h.' },
  },
  {
    title: 'Skala na mapie',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Mapa z odcinkiem 4 cm między A i B oraz linijka; skala 1 : 50 000">
      <rect x="20" y="16" width="380" height="104" rx="12" class="f3 s3" stroke-width="2"/>
      <text x="44" y="46" class="tx">🌲</text><text x="360" y="104" class="tx">🌲</text><text x="200" y="48" class="tx">⛰️</text>
      <line x1="90" y1="80" x2="330" y2="80" class="s2 dash" stroke-width="3"/>
      <circle cx="90" cy="80" r="7" class="t2"/><circle cx="330" cy="80" r="7" class="t2"/>
      <text x="90" y="66" class="tx-b" text-anchor="middle">A</text><text x="330" y="66" class="tx-b" text-anchor="middle">B</text>
      <rect x="70" y="134" width="290" height="30" rx="4" class="f4 s4" stroke-width="2"/>
      <g class="ln"><line x1="90" y1="134" x2="90" y2="146"/><line x1="150" y1="134" x2="150" y2="146"/><line x1="210" y1="134" x2="210" y2="146"/><line x1="270" y1="134" x2="270" y2="146"/><line x1="330" y1="134" x2="330" y2="146"/></g>
      <g class="tx-s" text-anchor="middle"><text x="90" y="160">0</text><text x="150" y="160">1</text><text x="210" y="160">2</text><text x="270" y="160">3</text><text x="330" y="160">4</text></g>
      <text x="368" y="156" class="tx-s">cm</text>
      <text x="210" y="194" class="tx" text-anchor="middle">1 : 50 000 → 4 · 50 000 cm = 2 km</text>
    </svg>`,
    text: `<p>Skala <b>1 : 50 000</b> znaczy: 1 cm na mapie to 50 000 cm = 500 m w terenie. Odcinek AB ma 4 cm, więc w terenie 4 · 50 000 cm = 200 000 cm = <b>2 km</b>.</p>
      <p>W drugą stronę: pokój o długości 5 m na planie w skali 1 : 200 to 500 cm : 200 = <b>2,5 cm</b>.</p>`,
    remember: 'Skala 1 : n → 1 cm na mapie to n cm w terenie. Na koniec zamień cm na m (: 100) lub km (: 100 000).',
    hook: 'W skali 1 : 100 000 jest najprościej: 100 000 cm = 1 km, więc 1 cm na mapie to dokładnie 1 km.',
    check: { q: 'Na mapie w skali 1 : 200 000 odległość wynosi 3 cm. Ile to w terenie?', options: ['6 km', '600 m', '60 km', '2 km'], answer: 0, explain: '3 · 200 000 cm = 600 000 cm = 6 km.' },
  },
  {
    title: 'Jednostki pola – przelicznik do kwadratu',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Kwadrat o boku 1 m podzielony na kratki; przeliczniki jednostek pola">
      <rect x="30" y="16" width="150" height="150" class="f1 s1 sw"/>
      <g class="ln-thin">
        <line x1="45" y1="16" x2="45" y2="166"/><line x1="60" y1="16" x2="60" y2="166"/><line x1="75" y1="16" x2="75" y2="166"/><line x1="90" y1="16" x2="90" y2="166"/><line x1="105" y1="16" x2="105" y2="166"/><line x1="120" y1="16" x2="120" y2="166"/><line x1="135" y1="16" x2="135" y2="166"/><line x1="150" y1="16" x2="150" y2="166"/><line x1="165" y1="16" x2="165" y2="166"/>
        <line x1="30" y1="31" x2="180" y2="31"/><line x1="30" y1="46" x2="180" y2="46"/><line x1="30" y1="61" x2="180" y2="61"/><line x1="30" y1="76" x2="180" y2="76"/><line x1="30" y1="91" x2="180" y2="91"/><line x1="30" y1="106" x2="180" y2="106"/><line x1="30" y1="121" x2="180" y2="121"/><line x1="30" y1="136" x2="180" y2="136"/><line x1="30" y1="151" x2="180" y2="151"/>
      </g>
      <text x="105" y="188" class="tx-s" text-anchor="middle">bok 1 m = 100 cm</text>
      <text x="200" y="50" class="tx-b t1">1 m² = 10 000 cm²</text>
      <text x="200" y="92" class="tx">1 ha = 100 m · 100 m</text>
      <text x="230" y="116" class="tx-b t3">= 10 000 m²</text>
      <text x="200" y="158" class="tx-b t2">1 km² = 100 ha</text>
    </svg>`,
    text: `<p>Kwadrat o boku 1 m ma bok 100 cm, więc jego pole to 100 · 100 = <b>10 000 cm²</b>, a nie 100 cm²! Przy polu przelicznik długości bierzesz <b>dwa razy</b>.</p>
      <p><b>Hektar</b> to pole kwadratu 100 m × 100 m = 10 000 m². 1 km² = 100 ha. Objętość: 1 dm³ = 1 l, 1 m³ = 1000 l.</p>`,
    remember: '1 m² = 10 000 cm² · 1 ha = 10 000 m² · 1 km² = 100 ha',
    hook: 'Pole ma „dwa wymiary”, więc przelicznik też „dwa razy”: 1 m = 100 cm, ale 1 m² = 100 · 100 cm².',
    check: { q: 'Ile metrów kwadratowych mają 3 hektary?', options: ['30 000 m²', '300 m²', '3000 m²', '300 000 m²'], answer: 0, explain: '3 · 10 000 m² = 30 000 m².' },
  },
  {
    title: 'Obliczenia zegarowe i pułapki',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Oś czasu: 18:45 plus 1 h to 19:45, plus 15 min to 20:00, plus 35 min to 20:35">
      <line x1="25" y1="80" x2="395" y2="80" class="ln"/>
      <path d="M40,74 Q115,22 190,74" class="ln s1" stroke-width="2.5"/>
      <path d="M190,74 Q208,48 227,74" class="ln s3" stroke-width="2.5"/>
      <path d="M227,74 Q271,30 315,74" class="ln s2" stroke-width="2.5"/>
      <text x="115" y="32" class="tx-b t1" text-anchor="middle">+1 h</text>
      <text x="196" y="48" class="tx-s t3" text-anchor="middle">+15 min</text>
      <text x="275" y="32" class="tx-b t2" text-anchor="middle">+35 min</text>
      <circle cx="40" cy="80" r="5" class="t1"/><circle cx="190" cy="80" r="5" class="t1"/><circle cx="227" cy="80" r="5" class="t3"/><circle cx="315" cy="80" r="7" class="t2"/>
      <text x="40" y="106" class="tx" text-anchor="middle">18:45</text>
      <text x="184" y="106" class="tx" text-anchor="middle">19:45</text>
      <text x="236" y="130" class="tx" text-anchor="middle">20:00</text>
      <text x="315" y="106" class="tx-b t2" text-anchor="middle">20:35</text>
      <text x="210" y="168" class="tx-s" text-anchor="middle">18:45 + 1 h 50 min = 20:35</text>
    </svg>`,
    text: `<p>Film zaczyna się o 18:45 i trwa 1 h 50 min. Dodaj pełną godzinę (19:45), potem „doskocz” do pełnej godziny (+15 min = 20:00) i dodaj resztę (+35 min). Koniec: <b>20:35</b>.</p>
      <p><b>Pułapki:</b> 1,5 h to 1 h 30 min (nie 1 h 50 min) · czas w godzinach, gdy prędkość w km/h · przy polu przelicznik do kwadratu · w skali zamień cm na km na końcu.</p>`,
    remember: '1 h = 60 min, a nie 100! 1,5 h = 1 h 30 min, 0,75 h = 45 min.',
    hook: 'Dodając czas, „doskakuj” do pełnej godziny – jak na schodach z podestem: najpierw do podestu, potem dalej.',
    check: { q: 'Pociąg odjechał o 9:40 i przyjechał o 12:15. Ile trwała podróż?', options: ['2 h 35 min', '3 h 25 min', '3 h 35 min', '2 h 25 min'], answer: 0, explain: '9:40 → 11:40 to 2 h, 11:40 → 12:00 to 20 min, 12:00 → 12:15 to 15 min. Razem 2 h 35 min.' },
  },
];

window.LESSONS['matematyka/ulamki'] = [
  {
    title: 'Ułamek to część całości – i dzielenie',
    svg: `<svg viewBox="0 0 420 184" role="img" aria-label="Pasek podzielony na 4 równe części, 3 zamalowane: trzy czwarte">
      <rect x="20" y="24" width="80" height="50" class="f1 s1 sw"/>
      <rect x="100" y="24" width="80" height="50" class="f1 s1 sw"/>
      <rect x="180" y="24" width="80" height="50" class="f1 s1 sw"/>
      <rect x="260" y="24" width="80" height="50" class="bg s1 sw"/>
      <text x="60" y="55" class="tx" text-anchor="middle">1/4</text>
      <text x="140" y="55" class="tx" text-anchor="middle">1/4</text>
      <text x="220" y="55" class="tx" text-anchor="middle">1/4</text>
      <text x="300" y="55" class="tx-s" text-anchor="middle">1/4</text>
      <text x="382" y="56" class="tx-b t1" text-anchor="middle">= 3/4</text>
      <text x="20" y="106" class="tx-s">licznik 3 – ile części bierzemy</text>
      <text x="20" y="130" class="tx-s">mianownik 4 – na ile równych części dzielimy całość</text>
      <text x="210" y="168" class="tx-b" text-anchor="middle">3/4 = 3 : 4 = 0,75</text>
    </svg>`,
    text: `<p>Ułamek mówi, <b>jaką część całości</b> bierzesz. Kreska ułamkowa to też znak dzielenia: 3/4 = 3 : 4 = 0,75.</p>
      <p>Gdy licznik jest większy od mianownika, masz więcej niż całość – ułamek niewłaściwy, np. 7/3. Można go zapisać jako liczbę mieszaną: 7 : 3 = 2 reszty 1, więc 7/3 = 2 1/3 („dwie i jedna trzecia”).</p>`,
    remember: 'Liczba mieszana → ułamek: 2 1/3 = (2 · 3 + 1)/3 = 7/3. Ułamek → liczba mieszana: dziel licznik przez mianownik z resztą.',
    hook: 'Mianownik <b>mianuje</b>, czyli nazywa kawałki (czwarte, piąte…), a licznik je <b>liczy</b>.',
    check: { q: 'Ułamek 17/5 zapisany jako liczba mieszana to…', options: ['3 2/5', '3 1/5', '2 2/5', '5 2/3'], answer: 0, explain: '17 : 5 = 3 reszty 2 → 3 całe i 2/5.' },
  },
  {
    title: 'Skracanie i rozszerzanie – ten sam kawałek, inne cięcie',
    svg: `<svg viewBox="0 0 440 214" role="img" aria-label="Pasek dwie trzecie i pasek cztery szóste mają zamalowaną tę samą długość">
      <text x="10" y="50" class="tx-b">2/3</text>
      <rect x="60" y="24" width="240" height="40" class="f1 s1 sw"/>
      <rect x="300" y="24" width="120" height="40" class="bg s1 sw"/>
      <line x1="180" y1="24" x2="180" y2="64" class="ln-thin"/>
      <text x="10" y="120" class="tx-b">4/6</text>
      <rect x="60" y="94" width="240" height="40" class="f3 s3 sw"/>
      <rect x="300" y="94" width="120" height="40" class="bg s3 sw"/>
      <line x1="120" y1="94" x2="120" y2="134" class="ln-thin"/><line x1="180" y1="94" x2="180" y2="134" class="ln-thin"/><line x1="240" y1="94" x2="240" y2="134" class="ln-thin"/><line x1="360" y1="94" x2="360" y2="134" class="ln-thin"/>
      <line x1="300" y1="12" x2="300" y2="146" class="ln dash"/>
      <text x="220" y="176" class="tx" text-anchor="middle">rozszerzanie: 2/3 = (2 · 2)/(3 · 2) = 4/6</text>
      <text x="220" y="202" class="tx" text-anchor="middle">skracanie: 4/6 = (4 : 2)/(6 : 2) = 2/3</text>
    </svg>`,
    text: `<p>Oba paski są zamalowane do tego samego miejsca – 2/3 i 4/6 to <b>ta sama liczba</b>. Rozszerzając, tniesz kawałki na mniejsze; skracając – sklejasz je w większe.</p>
      <p>Skracaj najlepiej od razu przez NWD licznika i mianownika: 18/24 → NWD = 6 → 3/4. Wynik podawaj w postaci nieskracalnej.</p>`,
    remember: 'Licznik i mianownik mnożymy albo dzielimy przez tę samą liczbę (różną od 0) – wartość ułamka się nie zmienia.',
    hook: 'Pizza pokrojona na 6 kawałków czy na 3 – jeśli zjesz „tyle samo pizzy”, zjadłeś tyle samo.',
    check: { q: 'Który ułamek jest równy 3/5?', options: ['6/15', '12/20', '9/12', '5/3'], answer: 1, explain: 'Rozszerzamy przez 4: 3 · 4 = 12, 5 · 4 = 20.' },
  },
  {
    title: 'Dodawanie i odejmowanie – wspólny mianownik',
    svg: `<svg viewBox="0 0 420 176" role="img" aria-label="Pasek podzielony na 12 części: 3 dwunaste to jedna czwarta, 8 dwunastych to dwie trzecie">
      <text x="85" y="36" class="tx-s" text-anchor="middle">1/4 = 3/12</text>
      <text x="250" y="36" class="tx" text-anchor="middle">2/3 = 8/12</text>
      <rect x="40" y="48" width="90" height="44" class="f2"/>
      <rect x="130" y="48" width="240" height="44" class="f1"/>
      <line x1="70" y1="48" x2="70" y2="92" class="ln-thin"/><line x1="100" y1="48" x2="100" y2="92" class="ln-thin"/><line x1="130" y1="48" x2="130" y2="92" class="ln"/><line x1="160" y1="48" x2="160" y2="92" class="ln-thin"/><line x1="190" y1="48" x2="190" y2="92" class="ln-thin"/><line x1="220" y1="48" x2="220" y2="92" class="ln-thin"/><line x1="250" y1="48" x2="250" y2="92" class="ln-thin"/><line x1="280" y1="48" x2="280" y2="92" class="ln-thin"/><line x1="310" y1="48" x2="310" y2="92" class="ln-thin"/><line x1="340" y1="48" x2="340" y2="92" class="ln-thin"/><line x1="370" y1="48" x2="370" y2="92" class="ln"/>
      <rect x="40" y="48" width="360" height="44" class="ln"/>
      <text x="210" y="130" class="tx-b" text-anchor="middle">3/12 + 8/12 = 11/12</text>
      <text x="210" y="160" class="tx-s" text-anchor="middle">wspólny mianownik: NWW(4, 3) = 12</text>
    </svg>`,
    text: `<p>Nie da się dodać „czwartych” do „trzecich”, tak jak nie dodasz metrów do kilogramów. Pokrój obie części na <b>takie same kawałki</b> – tu na dwunaste – i dopiero wtedy dodaj liczniki.</p>
      <p>Mianownik zostaje taki sam! 3/12 + 8/12 = 11/12, a nie 11/24. Odejmowanie działa tak samo: 5/6 − 1/4 = 10/12 − 3/12 = 7/12.</p>`,
    remember: 'Dodawanie i odejmowanie: sprowadź do wspólnego mianownika (najlepiej NWW mianowników), potem dodaj/odejmij tylko liczniki.',
    hook: 'Mianownik to <b>nazwisko</b> kawałków – dodajesz tylko kawałki z tej samej rodziny.',
    check: { q: 'Ola zjadła 1/4 pizzy, a Tomek 3/8 tej pizzy. Jaka część została?', options: ['5/8', '3/8', '4/12', '1/2'], answer: 1, explain: '1/4 = 2/8; zjedli 2/8 + 3/8 = 5/8, więc zostało 8/8 − 5/8 = 3/8.' },
  },
  {
    title: 'Mnożenie i dzielenie – bez wspólnego mianownika',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Trzy czwarte to sześć ósmych; trzy ósme mieszczą się w tym dwa razy">
      <text x="180" y="22" class="tx-b t1" text-anchor="middle">3/4 = 6/8</text>
      <rect x="60" y="34" width="240" height="44" class="f1"/>
      <line x1="100" y1="34" x2="100" y2="78" class="ln-thin"/><line x1="140" y1="34" x2="140" y2="78" class="ln-thin"/><line x1="180" y1="34" x2="180" y2="78" class="ln"/><line x1="220" y1="34" x2="220" y2="78" class="ln-thin"/><line x1="260" y1="34" x2="260" y2="78" class="ln-thin"/><line x1="300" y1="34" x2="300" y2="78" class="ln"/><line x1="340" y1="34" x2="340" y2="78" class="ln-thin"/>
      <rect x="60" y="34" width="320" height="44" class="ln"/>
      <path d="M62,86 L62,96 L178,96 L178,86" class="ln s2"/>
      <path d="M182,86 L182,96 L298,96 L298,86" class="ln s2"/>
      <text x="120" y="118" class="tx t2" text-anchor="middle">3/8</text>
      <text x="240" y="118" class="tx t2" text-anchor="middle">3/8</text>
      <text x="210" y="158" class="tx" text-anchor="middle">3/4 : 3/8 = 2 („ile razy 3/8 mieści się w 3/4?”)</text>
      <text x="210" y="190" class="tx-b" text-anchor="middle">3/4 : 3/8 = 3/4 · 8/3 = 2</text>
    </svg>`,
    text: `<p><b>Mnożenie</b>: licznik razy licznik, mianownik razy mianownik. Najpierw skracaj „na krzyż”, będą mniejsze liczby: 4/9 · 3/8 → 1/3 · 1/2 = 1/6.</p>
      <p><b>Dzielenie</b> pyta, ile razy jedna liczba mieści się w drugiej. Liczymy je, mnożąc przez <b>odwrotność</b> dzielnika. Liczby mieszane zawsze najpierw zamień na ułamki niewłaściwe: 1 1/2 · 2 2/3 = 3/2 · 8/3 = 4.</p>`,
    remember: 'a/b · c/d = (a · c)/(b · d). Dzielenie: a/b : c/d = a/b · d/c.',
    hook: 'Przy dzieleniu „odwróć i pomnóż” – drugi ułamek robi fikołka.',
    check: { q: 'Ile wynosi 5/6 : 10/9?', options: ['25/27', '4/3', '3/4', '3/5'], answer: 2, explain: '5/6 · 9/10 = 45/60 = 3/4.' },
  },
  {
    title: 'Ułamki dziesiętne – liczymy miejsca po przecinku',
    svg: `<svg viewBox="0 0 420 216" role="img" aria-label="Mnożenie 0,3 razy 0,04 oraz dzielenie 2,4 przez 0,06 po przesunięciu przecinka">
      <rect x="10" y="10" width="400" height="58" rx="10" class="f4 s4"/>
      <text x="24" y="35" class="tx-b">0,3 · 0,04 = 0,012</text>
      <text x="24" y="58" class="tx-s">3 · 4 = 12; po przecinku 1 + 2 = 3 cyfry</text>
      <rect x="10" y="78" width="400" height="58" rx="10" class="f3 s3"/>
      <text x="24" y="103" class="tx-b">2,4 : 0,06 = 240 : 6 = 40</text>
      <text x="24" y="126" class="tx-s">przecinek o 2 miejsca w prawo w obu liczbach</text>
      <rect x="10" y="146" width="400" height="58" rx="10" class="f1 s1"/>
      <text x="24" y="171" class="tx-b">3/5 = 6/10 = 0,6   oraz   0,45 = 9/20</text>
      <text x="24" y="194" class="tx-s">zamiana: rozszerz do 10, 100, 1000 albo podziel</text>
    </svg>`,
    text: `<p>Przy <b>mnożeniu</b> nie ustawiaj przecinków pod sobą – mnóż jak liczby naturalne i na końcu odlicz tyle cyfr po przecinku, ile było razem w obu czynnikach.</p>
      <p>Przy <b>dzieleniu</b> przesuń przecinek w obu liczbach o tyle samo miejsc, aż dzielnik będzie liczbą naturalną. Pamiętaj też: 3 zł 5 gr = 3,05 zł, a 2 m 7 cm = 2,07 m.</p>`,
    remember: 'Mnożenie: cyfr po przecinku w wyniku = suma cyfr po przecinku w czynnikach. Dzielenie: przesuń przecinek w obu liczbach tak, by dzielnik był liczbą naturalną.',
    hook: 'Iloczyn dwóch liczb mniejszych od 1 jest <b>mniejszy</b> od każdej z nich: 0,3 · 0,04 = 0,012 – szybki test, czy nie zgubiłeś zera.',
    check: { q: 'Ile wynosi 0,4 · 0,05?', options: ['0,2', '0,02', '0,002', '2'], answer: 1, explain: '4 · 5 = 20, po przecinku 1 + 2 = 3 cyfry → 0,020 = 0,02.' },
  },
  {
    title: 'Ułamek liczby i całość z części',
    svg: `<svg viewBox="0 0 420 204" role="img" aria-label="Trzy czwarte z 20 to 15; dwie piąte liczby to 12, więc liczba to 30">
      <text x="10" y="22" class="tx-b">3/4 z 20</text>
      <rect x="20" y="32" width="75" height="40" class="f1 s1 sw"/><rect x="95" y="32" width="75" height="40" class="f1 s1 sw"/><rect x="170" y="32" width="75" height="40" class="f1 s1 sw"/><rect x="245" y="32" width="75" height="40" class="bg s1 sw"/>
      <text x="57" y="58" class="tx" text-anchor="middle">5</text><text x="132" y="58" class="tx" text-anchor="middle">5</text><text x="207" y="58" class="tx" text-anchor="middle">5</text><text x="282" y="58" class="tx-s" text-anchor="middle">5</text>
      <text x="370" y="58" class="tx-b t1" text-anchor="middle">= 15</text>
      <text x="10" y="112" class="tx-b">2/5 liczby = 12</text>
      <rect x="20" y="122" width="60" height="40" class="f2 s2 sw"/><rect x="80" y="122" width="60" height="40" class="f2 s2 sw"/><rect x="140" y="122" width="60" height="40" class="bg s2 sw"/><rect x="200" y="122" width="60" height="40" class="bg s2 sw"/><rect x="260" y="122" width="60" height="40" class="bg s2 sw"/>
      <text x="50" y="148" class="tx" text-anchor="middle">6</text><text x="110" y="148" class="tx" text-anchor="middle">6</text><text x="170" y="148" class="tx-s" text-anchor="middle">6</text><text x="230" y="148" class="tx-s" text-anchor="middle">6</text><text x="290" y="148" class="tx-s" text-anchor="middle">6</text>
      <text x="370" y="148" class="tx-b t2" text-anchor="middle">= 30</text>
      <text x="210" y="192" class="tx-s" text-anchor="middle">najpierw jedna część, potem tyle części, ile trzeba</text>
    </svg>`,
    text: `<p><b>3/4 z 20</b>: podziel 20 na 4 części (po 5) i weź 3 – wychodzi 15. To samo co 3/4 · 20.</p>
      <p><b>2/5 liczby to 12</b>: dwie części to 12, więc jedna to 6, a całość (5 części) to 30. Powiększenie o 1/4: 40 + 10 = 50; pomniejszenie o 1/3: 30 − 10 = 20.</p>`,
    remember: 'Ułamek z liczby: podziel przez mianownik, pomnóż przez licznik. Całość z części: podziel część przez licznik, pomnóż przez mianownik.',
    hook: 'Zawsze najpierw szukaj <b>jednego kawałka</b> – reszta to już tylko mnożenie.',
    check: { q: '2/7 pewnej liczby to 10. Jaka to liczba?', options: ['20', '35', '70', '5'], answer: 1, explain: 'Jedna siódma to 10 : 2 = 5, cała liczba to 5 · 7 = 35.' },
  },
];

window.LESSONS['matematyka/przystawanie-dowody'] = [
  {
    title: 'Trójkąty przystające – bliźniaki',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dwa przystające trójkąty ABC i DEF z bokami w tych samych kolorach">
      <line x1="40" y1="150" x2="170" y2="150" class="ln s1 sw"/><line x1="40" y1="150" x2="80" y2="40" class="ln s2 sw"/><line x1="80" y1="40" x2="170" y2="150" class="ln s3 sw"/>
      <line x1="240" y1="150" x2="370" y2="150" class="ln s1 sw"/><line x1="240" y1="150" x2="280" y2="40" class="ln s2 sw"/><line x1="280" y1="40" x2="370" y2="150" class="ln s3 sw"/>
      <text x="24" y="168" class="tx-b">A</text><text x="172" y="168" class="tx-b">B</text><text x="74" y="32" class="tx-b">C</text>
      <text x="224" y="168" class="tx-b">D</text><text x="372" y="168" class="tx-b">E</text><text x="274" y="32" class="tx-b">F</text>
      <text x="210" y="192" class="tx-b" text-anchor="middle">△ABC ≡ △DEF</text>
    </svg>`,
    text: `<p>Trójkąty <b>przystające</b> mają odpowiednio równe wszystkie boki i wszystkie kąty – gdyby je wyciąć, jeden dałoby się dokładnie nałożyć na drugi (ewentualnie po obróceniu lub odwróceniu).</p>
      <p>Po co to? Gdy udowodnisz, że dwa trójkąty są przystające, dostajesz <b>za darmo</b> równość pozostałych boków i kątów. Tak rozwiązuje się zadania „wykaż, że…”.</p>`,
    remember: 'Zapis △ABC ≡ △DEF: A odpowiada D, B – E, C – F. Kolejność liter ma znaczenie.',
    hook: 'Przystające = „przystają do siebie” jak dwa identyczne puzzle.',
    check: { q: 'Trójkąty przystające mają…', options: ['tylko równe kąty', 'odpowiednio równe boki i kąty', 'równe obwody, ale mogą mieć różne kąty', 'równe pola, ale mogą mieć różne boki'], answer: 1, explain: 'Przystające trójkąty mają wszystkie odpowiadające elementy równe.' },
  },
  {
    title: 'Trzy cechy przystawania',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy trójkąty: cecha bok-bok-bok, bok-kąt-bok i kąt-bok-kąt z zaznaczonymi elementami">
      <line x1="20" y1="150" x2="120" y2="150" class="ln s1 sw"/><line x1="20" y1="150" x2="50" y2="60" class="ln s1 sw"/><line x1="50" y1="60" x2="120" y2="150" class="ln s1 sw"/>
      <line x1="160" y1="150" x2="260" y2="150" class="ln s2 sw"/><line x1="160" y1="150" x2="190" y2="60" class="ln s2 sw"/><line x1="190" y1="60" x2="260" y2="150" class="ln-thin"/>
      <path d="M182,150 A22,22 0 0,0 167,129" class="ln s2 sw"/>
      <line x1="300" y1="150" x2="400" y2="150" class="ln s3 sw"/><line x1="300" y1="150" x2="330" y2="60" class="ln-thin"/><line x1="330" y1="60" x2="400" y2="150" class="ln-thin"/>
      <path d="M322,150 A22,22 0 0,0 307,129" class="ln s3 sw"/><path d="M378,150 A22,22 0 0,1 386.5,132.6" class="ln s3 sw"/>
      <text x="70" y="182" class="tx-b t1" text-anchor="middle">bbb</text>
      <text x="210" y="182" class="tx-b t2" text-anchor="middle">bkb</text>
      <text x="350" y="182" class="tx-b t3" text-anchor="middle">kbk</text>
      <text x="70" y="202" class="tx-s" text-anchor="middle">3 boki</text>
      <text x="210" y="202" class="tx-s" text-anchor="middle">kąt między bokami</text>
      <text x="350" y="202" class="tx-s" text-anchor="middle">2 kąty przy boku</text>
    </svg>`,
    text: `<p>Nie musisz porównywać wszystkich sześciu elementów. Wystarczą trzy, ułożone według jednej z cech:</p>
      <ul><li><b>bbb</b> – trzy pary równych boków;</li><li><b>bkb</b> – dwie pary równych boków i równe kąty <b>między nimi</b>;</li><li><b>kbk</b> – para równych boków i równe kąty <b>przy tym boku</b>.</li></ul>
      <p>Uwaga: trzy równe kąty (kkk) to za mało – trójkąt może być większy albo mniejszy.</p>`,
    remember: 'bbb, bkb (kąt między bokami), kbk (kąty przy boku). kkk NIE jest cechą przystawania.',
    hook: 'W bkb kąt siedzi w środku jak szynka w kanapce, a w kbk bok jest kanapką między dwoma kątami.',
    check: { q: 'W trójkątach ABC i DEF: AB = DE, ∠ABC = ∠DEF i BC = EF. Która cecha?', options: ['bbb', 'bkb', 'kbk', 'kkk'], answer: 1, explain: 'Kąt przy B leży między bokami AB i BC.' },
  },
  {
    title: 'Kąty, na które się powołujesz',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Dwie proste równoległe przecięte trzecią prostą; równe kąty alfa oraz kąt przyległy 180 stopni minus alfa">
      <line x1="20" y1="60" x2="400" y2="60" class="ln"/>
      <line x1="20" y1="150" x2="400" y2="150" class="ln"/>
      <line x1="120" y1="200" x2="300" y2="10" class="ln s2"/>
      <text x="272" y="50" class="tx-b t2">α</text>
      <text x="210" y="84" class="tx-b t2">α</text>
      <text x="186" y="140" class="tx-b t2">α</text>
      <text x="232" y="50" class="tx-s" text-anchor="end">180° − α</text>
      <text x="408" y="56" class="tx-s" text-anchor="end">a</text>
      <text x="408" y="146" class="tx-s" text-anchor="end">b</text>
      <text x="16" y="200" class="tx-s">a ∥ b · wierzchołkowe, odpowiadające</text>
      <text x="16" y="222" class="tx-s">i naprzemianległe są równe; przyległe: 180°</text>
    </svg>`,
    text: `<p>W dowodach powołujesz się na znane fakty. Najczęstsze:</p>
      <ul><li><b>kąty wierzchołkowe</b> są równe (bo każdy dopełnia ten sam kąt do 180°),</li>
      <li><b>kąty przyległe</b> sumują się do 180°,</li>
      <li>przy prostych <b>równoległych</b> kąty odpowiadające i naprzemianległe są równe,</li>
      <li>suma kątów w trójkącie to 180°, w trójkącie równoramiennym kąty przy podstawie są równe.</li></ul>`,
    remember: 'Każdy krok dowodu ma swoje „bo…”: bo wierzchołkowe, bo naprzemianległe, bo suma kątów trójkąta.',
    hook: 'Wierzchołkowe stykają się tylko wierzchołkami – jak klepsydra; ich „wieżyczki” są lustrzane, więc równe.',
    check: { q: 'W trójkącie równoramiennym kąt przy podstawie ma 50°. Ile ma kąt między ramionami?', options: ['50°', '65°', '80°', '130°'], answer: 2, explain: '180° − 2 · 50° = 80°.' },
  },
  {
    title: 'Nierówność trójkąta – kiedy powstaje trójkąt',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Trójkąt ABC, w którym AB plus BC jest większe od AC, oraz punkty współliniowe, gdy AB plus BC równa się AC">
      <polygon points="30,130 110,50 190,130" class="f1 s1 sw"/>
      <text x="14" y="148" class="tx-b">A</text><text x="104" y="40" class="tx-b">B</text><text x="192" y="148" class="tx-b">C</text>
      <text x="110" y="176" class="tx" text-anchor="middle">AB + BC &gt; AC</text>
      <line x1="230" y1="100" x2="410" y2="100" class="ln s2 sw"/>
      <circle cx="230" cy="100" r="5" class="f2 s2"/><circle cx="300" cy="100" r="5" class="f2 s2"/><circle cx="410" cy="100" r="5" class="f2 s2"/>
      <text x="224" y="86" class="tx-b">A</text><text x="294" y="86" class="tx-b">B</text><text x="402" y="86" class="tx-b">C</text>
      <text x="320" y="140" class="tx" text-anchor="middle">AB + BC = AC</text>
      <text x="320" y="164" class="tx-s" text-anchor="middle">gdy B leży na odcinku AC</text>
    </svg>`,
    text: `<p>Droga „na skróty” jest najkrótsza: idąc z A do C przez B, przejdziesz co najmniej tyle, co prosto: <b>AB + BC ≥ AC</b>. Równość jest tylko wtedy, gdy B leży na odcinku AC – wtedy trójkąt „spłaszcza się” w odcinek.</p>
      <p>Dlatego z odcinków 3, 4, 8 nie zbudujesz trójkąta (3 + 4 &lt; 8), a dla boków 3 i 8 trzeci bok musi być dłuższy niż 5 i krótszy niż 11.</p>`,
    remember: 'AB + BC ≥ AC; równość ⇔ B leży na odcinku AC. Trójkąt powstaje, gdy najdłuższy bok &lt; suma dwóch pozostałych.',
    check: { q: 'AB = 4, BC = 6, AC = 10. Co z tego wynika?', options: ['ABC to trójkąt prostokątny', 'punkt B leży na odcinku AC', 'taka sytuacja jest niemożliwa', 'ABC to trójkąt równoramienny'], answer: 1, explain: '4 + 6 = 10 – zachodzi równość, więc A, B, C leżą na jednej prostej, B między A i C.' },
  },
  {
    title: 'Jak napisać dowód na egzaminie',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Schemat dowodu: rysunek, dane i teza, kroki z uzasadnieniem, wniosek; przykład z punktem S">
      <defs><marker id="a-mat-prz-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="10" width="92" height="48" rx="8" class="f1 s1"/><text x="52" y="40" class="tx-s" text-anchor="middle">rysunek</text>
      <rect x="112" y="10" width="92" height="48" rx="8" class="f4 s4"/><text x="158" y="40" class="tx-s" text-anchor="middle">dane i teza</text>
      <rect x="218" y="10" width="92" height="48" rx="8" class="f3 s3"/><text x="264" y="40" class="tx-s" text-anchor="middle">kroki + „bo”</text>
      <rect x="324" y="10" width="92" height="48" rx="8" class="f2 s2"/><text x="370" y="40" class="tx-s" text-anchor="middle">wniosek</text>
      <path d="M98,34 L110,34" class="ln" marker-end="url(#a-mat-prz-5)"/><path d="M204,34 L216,34" class="ln" marker-end="url(#a-mat-prz-5)"/><path d="M310,34 L322,34" class="ln" marker-end="url(#a-mat-prz-5)"/>
      <text x="10" y="96" class="tx">AS = BS, CS = DS</text><text x="410" y="96" class="tx-s" text-anchor="end">bo S – środek</text>
      <text x="10" y="128" class="tx">∠ASC = ∠BSD</text><text x="410" y="128" class="tx-s" text-anchor="end">bo wierzchołkowe</text>
      <text x="10" y="160" class="tx">△ASC ≡ △BSD</text><text x="410" y="160" class="tx-s" text-anchor="end">z cechy bkb</text>
      <text x="10" y="200" class="tx-b t2">więc AC = BD ✔</text>
    </svg>`,
    text: `<p>Zadanie: odcinki AB i CD przecinają się w punkcie S, który jest środkiem każdego z nich. Wykaż, że AC = BD. Dowód to łańcuch zdań, a każde ma <b>uzasadnienie</b>. Kończysz wnioskiem, który jest tezą.</p>
      <p>W dowodach z liczbami zapisz je literami: kolejne liczby to n, n + 1, n + 2; liczba dwucyfrowa to 10a + b. Kilka sprawdzonych przykładów to <b>nie</b> dowód.</p>`,
    remember: 'Dane → teza → kroki z „bo…” → wniosek. Przykład ≠ dowód.',
    hook: 'Pisz tak, jakby czytał to ktoś, kto nie widzi twojego rysunku i nie wierzy ci na słowo.',
    check: { q: 'Uczeń sprawdził dwa przykłady i napisał „więc zawsze tak jest”. Czy to dowód?', options: ['tak, dwa przykłady wystarczą', 'tak, jeśli przykłady są duże', 'nie – przykłady pokazują tylko te przypadki', 'tak, jeśli doda rysunek'], answer: 2, explain: 'Dowód musi działać dla wszystkich przypadków, np. dzięki zapisowi literowemu.' },
  },
];

window.LESSONS['matematyka/katy-trojkaty'] = [
  {
    title: 'Punkt, prosta, półprosta, odcinek',
    svg: `<svg viewBox="0 0 420 160" role="img" aria-label="Odcinek z dwoma końcami, półprosta z jednym końcem i prosta bez końców">
      <circle cx="40" cy="35" r="5" class="t1"/>
      <circle cx="200" cy="35" r="5" class="t1"/>
      <line x1="40" y1="35" x2="200" y2="35" class="ln s1 sw"/>
      <text x="40" y="22" class="tx-b" text-anchor="middle">A</text>
      <text x="200" y="22" class="tx-b" text-anchor="middle">B</text>
      <text x="232" y="41" class="tx">odcinek – 2 końce</text>
      <circle cx="40" cy="85" r="5" class="t2"/>
      <line x1="40" y1="85" x2="190" y2="85" class="ln s2 sw"/>
      <line x1="190" y1="85" x2="222" y2="85" class="ln s2 sw dash"/>
      <text x="40" y="72" class="tx-b" text-anchor="middle">A</text>
      <text x="232" y="91" class="tx">półprosta – 1 koniec</text>
      <line x1="8" y1="135" x2="40" y2="135" class="ln s3 sw dash"/>
      <line x1="40" y1="135" x2="190" y2="135" class="ln s3 sw"/>
      <line x1="190" y1="135" x2="222" y2="135" class="ln s3 sw dash"/>
      <text x="232" y="141" class="tx">prosta – bez końców</text>
    </svg>`,
    text: `<p>Te figury różnią się liczbą <b>końców</b>. Odcinek ma dwa końce, więc da się go zmierzyć linijką. Półprosta ma tylko początek, a prosta biegnie bez końca w obie strony – ich długości nie zmierzysz.</p>`,
    remember: 'Odcinek – 2 końce (ma długość), półprosta – 1 koniec, prosta – 0 końców.',
    hook: 'Odcinek to <b>patyk</b>, półprosta – <b>promień latarki</b> (świeci od jednego miejsca w dal), prosta – <b>tory bez końca</b> w obie strony.',
    check: { q: 'Którą z tych figur możesz zmierzyć linijką?', options: ['prostą', 'półprostą', 'odcinek'], answer: 2, explain: 'Tylko odcinek ma dwa końce i określoną długość.' },
  },
  {
    title: 'Prostopadłe, równoległe i odległość',
    svg: `<svg viewBox="0 0 420 185" role="img" aria-label="Proste prostopadłe, proste równoległe oraz odległość punktu P od prostej k">
      <line x1="15" y1="95" x2="125" y2="95" class="ln s1 sw"/>
      <line x1="70" y1="30" x2="70" y2="150" class="ln s1 sw"/>
      <polyline points="83,95 83,82 70,82" class="ln"/>
      <text x="70" y="178" class="tx" text-anchor="middle">prostopadłe</text>
      <line x1="155" y1="65" x2="265" y2="65" class="ln s2 sw"/>
      <line x1="155" y1="120" x2="265" y2="120" class="ln s2 sw"/>
      <text x="210" y="178" class="tx" text-anchor="middle">równoległe</text>
      <line x1="285" y1="135" x2="415" y2="135" class="ln"/>
      <circle cx="320" cy="50" r="5" class="t2"/>
      <text x="306" y="48" class="tx-b" text-anchor="end">P</text>
      <line x1="320" y1="50" x2="320" y2="135" class="ln s3 sw"/>
      <line x1="320" y1="50" x2="395" y2="135" class="ln-thin dash"/>
      <polyline points="332,135 332,123 320,123" class="ln"/>
      <text x="311" y="100" class="tx-b t3" text-anchor="end">d</text>
      <text x="410" y="127" class="tx-b" text-anchor="end">k</text>
      <text x="350" y="178" class="tx" text-anchor="middle">odległość</text>
    </svg>`,
    text: `<p>Proste <b>prostopadłe</b> przecinają się pod kątem prostym (zaznaczamy go kwadracikiem). Proste <b>równoległe</b> nigdy się nie przecinają.</p><p><b>Odległość punktu od prostej</b> to długość odcinka prostopadłego od punktu do prostej. Każdy inny (ukośny) odcinek jest dłuższy.</p>`,
    remember: 'a ⊥ b – prostopadłe, a ∥ b – równoległe. Odległość = najkrótsza droga = odcinek prostopadły.',
    hook: 'Tory kolejowe są <b>równoległe</b>, a dwie ulice na zwykłym skrzyżowaniu – <b>prostopadłe</b>. Do ściany najkrócej idzie się „na wprost”, pod kątem prostym.',
  },
  {
    title: 'Kąty: ostry, prosty, rozwarty',
    svg: `<svg viewBox="0 0 420 175" role="img" aria-label="Kąt ostry, kąt prosty i kąt rozwarty">
      <polyline points="125,120 25,120 89.3,43.4" class="ln sw"/>
      <path d="M51,120 A26,26 0 0 0 41.7,100.1" class="ln s3"/>
      <circle cx="25" cy="120" r="4" class="t2"/>
      <text x="70" y="160" class="tx" text-anchor="middle">ostry &lt; 90°</text>
      <polyline points="262,120 172,120 172,35" class="ln sw"/>
      <polyline points="188,120 188,104 172,104" class="ln s1"/>
      <circle cx="172" cy="120" r="4" class="t2"/>
      <text x="210" y="160" class="tx" text-anchor="middle">prosty = 90°</text>
      <polyline points="408,120 335,120 286.8,62.5" class="ln sw"/>
      <path d="M357,120 A22,22 0 0 0 320.9,103.1" class="ln s2"/>
      <circle cx="335" cy="120" r="4" class="t2"/>
      <text x="350" y="160" class="tx" text-anchor="middle">rozwarty &gt; 90°</text>
    </svg>`,
    text: `<p>Kąt tworzą dwa <b>ramiona</b> wychodzące z jednego punktu – <b>wierzchołka</b> (kropka). Kąt prosty ma 90°. Mniejszy od prostego to kąt <b>ostry</b>, większy (ale mniejszy niż 180°) – <b>rozwarty</b>.</p><p>O wielkości kąta decyduje rozwarcie ramion, a nie ich długość na rysunku.</p>`,
    remember: 'Ostry &lt; 90° · prosty = 90° · rozwarty: od 90° do 180°.',
    hook: 'Kąt <b>ostry</b> jak czubek ołówka, <b>prosty</b> jak róg kartki, <b>rozwarty</b> jak szeroko otwarte drzwi.',
    check: { q: 'Kąt o mierze 91° jest…', options: ['ostry', 'prosty', 'rozwarty'], answer: 2, explain: '91° to więcej niż 90°.' },
  },
  {
    title: 'Trójkąty – po kątach i po bokach',
    svg: `<svg viewBox="0 0 420 185" role="img" aria-label="Trójkąt ostrokątny, prostokątny i rozwartokątny">
      <polygon points="20,140 120,140 80,40" class="f3 s3 sw"/>
      <text x="70" y="172" class="tx" text-anchor="middle">ostrokątny</text>
      <polygon points="160,140 260,140 160,50" class="f1 s1 sw"/>
      <polyline points="173,140 173,127 160,127" class="ln"/>
      <text x="210" y="172" class="tx" text-anchor="middle">prostokątny</text>
      <polygon points="290,140 410,140 330,105" class="f2 s2 sw"/>
      <path d="M319.5,114.2 A14,14 0 0 0 342.8,110.6" class="ln"/>
      <text x="350" y="172" class="tx" text-anchor="middle">rozwartokątny</text>
    </svg>`,
    text: `<p>Po <b>kątach</b>: ostrokątny (wszystkie kąty ostre), prostokątny (jeden prosty), rozwartokątny (jeden rozwarty). Po <b>bokach</b>: równoramienny (dwa boki równe) i równoboczny (wszystkie boki równe, kąty po 60°).</p><p>Kąty trójkąta dają razem 180°, dlatego trójkąt ma co najwyżej jeden kąt prosty albo rozwarty.</p>`,
    remember: 'O nazwie trójkąta „po kątach” decyduje jego największy kąt.',
    check: { q: 'Trójkąt ma kąty 30°, 50° i 100°. Jaki to trójkąt?', options: ['ostrokątny', 'prostokątny', 'rozwartokątny', 'równoboczny'], answer: 2, explain: 'Największy kąt, 100°, jest rozwarty.' },
  },
  {
    title: 'Czworokąty – rodzinne podobieństwa',
    svg: `<svg viewBox="0 0 420 235" role="img" aria-label="Kwadrat, prostokąt i romb z przekątnymi oraz równoległobok i trapez">
      <polygon points="35,20 105,20 105,90 35,90" class="f1 s1 sw"/>
      <line x1="35" y1="20" x2="105" y2="90" class="ln-thin dash"/>
      <line x1="105" y1="20" x2="35" y2="90" class="ln-thin dash"/>
      <text x="70" y="115" class="tx" text-anchor="middle">kwadrat</text>
      <polygon points="155,28 265,28 265,83 155,83" class="f3 s3 sw"/>
      <line x1="155" y1="28" x2="265" y2="83" class="ln-thin dash"/>
      <line x1="265" y1="28" x2="155" y2="83" class="ln-thin dash"/>
      <text x="210" y="115" class="tx" text-anchor="middle">prostokąt</text>
      <polygon points="350,15 400,55 350,95 300,55" class="f2 s2 sw"/>
      <line x1="350" y1="15" x2="350" y2="95" class="ln-thin dash"/>
      <line x1="300" y1="55" x2="400" y2="55" class="ln-thin dash"/>
      <text x="350" y="115" class="tx" text-anchor="middle">romb</text>
      <polygon points="75,195 180,195 205,140 100,140" class="f4 s4 sw"/>
      <text x="140" y="222" class="tx" text-anchor="middle">równoległobok</text>
      <polygon points="235,195 365,195 330,140 260,140" class="f5 s5 sw"/>
      <text x="300" y="222" class="tx" text-anchor="middle">trapez</text>
    </svg>`,
    text: `<p>Patrz na boki, kąty i <b>przekątne</b>:</p><ul><li>kwadrat i prostokąt – wszystkie kąty proste, przekątne równe,</li><li>kwadrat i romb – wszystkie boki równe, przekątne prostopadłe,</li><li>równoległobok – dwie pary boków równoległych, przekątne dzielą się na połowy,</li><li>trapez – co najmniej jedna para boków równoległych.</li></ul>`,
    remember: 'Kwadrat = prostokąt + romb: ma wszystkie ich własności.',
    hook: 'Przekątne <b>rombu</b> krzyżują się jak w <b>latawcu</b> – pod kątem prostym. Przekątne <b>prostokąta</b> są jak dwa równe kije.',
  },
  {
    title: 'Trójkąt równoramienny – licz bez kątomierza',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Trójkąt równoramienny: dwa równe kąty alfa przy podstawie i kąt beta między ramionami">
      <polygon points="80,180 320,180 200,40" class="f1 s1 sw"/>
      <path d="M106,180 A26,26 0 0 0 96.9,160.3" class="ln s2"/>
      <path d="M303.1,160.3 A26,26 0 0 0 294,180" class="ln s2"/>
      <path d="M184.4,58.2 A24,24 0 0 0 215.6,58.2" class="ln s3"/>
      <text x="120" y="167.6" class="tx-b t2" text-anchor="middle">α</text>
      <text x="280" y="167.6" class="tx-b t2" text-anchor="middle">α</text>
      <text x="200" y="98" class="tx-b t3" text-anchor="middle">β</text>
      <text x="126" y="104" class="tx" text-anchor="end">ramię</text>
      <text x="274" y="104" class="tx">ramię</text>
      <text x="200" y="204" class="tx" text-anchor="middle">podstawa</text>
    </svg>`,
    text: `<p>Kąty przy podstawie są równe (α i α). Znasz jeden kąt – znasz wszystkie:</p><ul><li>dany kąt przy podstawie α → β = 180° − 2α,</li><li>dany kąt między ramionami β → α = (180° − β) : 2.</li></ul><p>Obwód: Ob = 2 · ramię + podstawa.</p>`,
    remember: 'Kąt 90° lub większy może być tylko kątem β między ramionami.',
    hook: 'Trójkąt równoramienny to <b>dach domu</b>: oba spadki dachu (kąty przy podstawie) są takie same.',
    check: { q: 'Trójkąt równoramienny ma obwód 20 cm i podstawę 6 cm. Ile ma ramię?', options: ['7 cm', '14 cm', '6 cm', '8 cm'], answer: 0, explain: '(20 − 6) : 2 = 7 cm.' },
  },
];

window.LESSONS['matematyka/kolo-okrag'] = [
  {
    title: 'Okrąg czy koło?',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Po lewej okrąg – sama linia brzegu, po prawej koło – brzeg z zamalowanym wnętrzem">
      <circle cx="100" cy="80" r="62" class="ln s1 sw"/>
      <circle cx="300" cy="80" r="62" class="f1 s1 sw"/>
      <circle cx="100" cy="80" r="3" class="t2"/>
      <circle cx="300" cy="80" r="3" class="t2"/>
      <text x="100" y="168" class="tx-b" text-anchor="middle">okrąg</text>
      <text x="300" y="168" class="tx-b" text-anchor="middle">koło</text>
      <text x="100" y="192" class="tx-s" text-anchor="middle">sam brzeg – długość</text>
      <text x="300" y="192" class="tx-s" text-anchor="middle">brzeg + wnętrze – pole</text>
    </svg>`,
    text: `<p><b>Okrąg</b> to sama linia – brzeg. <b>Koło</b> to brzeg razem z całym wnętrzem. Dlatego mówimy „długość okręgu” (ile ma brzeg), ale „pole koła” (ile zajmuje powierzchni).</p>`,
    remember: 'Okrąg – długość (cm). Koło – pole (cm²).',
    hook: 'Okrąg to <b>obręcz</b> albo hula-hoop, koło to <b>pizza</b> – z całym środkiem.',
    check: { q: 'Co ma pole?', options: ['okrąg', 'koło', 'cięciwa'], answer: 1 },
  },
  {
    title: 'Promień, średnica, cięciwa',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Okrąg o środku O z zaznaczonym promieniem r, średnicą d i cięciwą">
      <circle cx="140" cy="105" r="85" class="f1 s1 sw"/>
      <line x1="140" y1="105" x2="194.6" y2="39.9" class="ln s2 sw"/>
      <line x1="57.9" y1="83" x2="222.1" y2="127" class="ln s5 sw"/>
      <line x1="70.4" y1="153.8" x2="182.5" y2="178.6" class="ln s3 sw"/>
      <circle cx="140" cy="105" r="4" class="t2"/>
      <text x="136" y="127" class="tx-b" text-anchor="end">O</text>
      <text x="164.4" y="59.1" class="tx-b t2" text-anchor="middle">r</text>
      <text x="88" y="105" class="tx-b t5" text-anchor="middle">d</text>
      <text x="122.1" y="160.2" class="tx-s" text-anchor="middle">cięciwa</text>
      <text x="250" y="60" class="tx t2">r – promień</text>
      <text x="250" y="100" class="tx t5">d – średnica</text>
      <text x="250" y="140" class="tx t3">cięciwa</text>
    </svg>`,
    text: `<p><b>Promień</b> łączy środek z punktem okręgu. <b>Cięciwa</b> łączy dwa punkty okręgu. <b>Średnica</b> to cięciwa, która przechodzi przez środek – składa się z dwóch promieni.</p>`,
    remember: 'd = 2r. Średnica to najdłuższa cięciwa.',
    hook: 'Cięciwa jak w <b>łuku</b> do strzelania – rozpięta między dwoma punktami łuku.',
    check: { q: 'Promień ma 6 cm. Ile ma najdłuższa cięciwa tego okręgu?', options: ['6 cm', '12 cm', '3 cm', '36 cm'], answer: 1, explain: 'Najdłuższa cięciwa to średnica: 2 · 6 = 12 cm.' },
  },
  {
    title: 'Długość okręgu: trzy średnice i trochę',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Okrąg o średnicy d rozwinięty w odcinek: jego długość to trzy średnice i jeszcze trochę, czyli pi razy d">
      <line x1="15" y1="100" x2="390" y2="100" class="ln-thin"/>
      <circle cx="70" cy="60" r="40" class="ln s1 sw"/>
      <line x1="30" y1="60" x2="110" y2="60" class="ln s2 sw"/>
      <text x="70" y="52" class="tx-b t2" text-anchor="middle">d</text>
      <line x1="70" y1="100" x2="321.3" y2="100" class="ln s1 sw"/>
      <line x1="70" y1="92" x2="70" y2="108" class="ln"/>
      <line x1="150" y1="92" x2="150" y2="108" class="ln"/>
      <line x1="230" y1="92" x2="230" y2="108" class="ln"/>
      <line x1="310" y1="92" x2="310" y2="108" class="ln"/>
      <line x1="321.3" y1="92" x2="321.3" y2="108" class="ln"/>
      <text x="110" y="124" class="tx-b t2" text-anchor="middle">d</text>
      <text x="190" y="124" class="tx-b t2" text-anchor="middle">d</text>
      <text x="270" y="124" class="tx-b t2" text-anchor="middle">d</text>
      <text x="330" y="145" class="tx-s" text-anchor="middle">≈ 0,14 d</text>
      <text x="200" y="170" class="tx-b" text-anchor="middle">L = π · d ≈ 3,14 · d</text>
    </svg>`,
    text: `<p>Wyobraź sobie, że rozcinasz okrąg i prostujesz go w odcinek. Zawsze wychodzi trochę ponad 3 średnice – dokładnie <b>π razy</b> średnica. π ≈ 3,14.</p>`,
    remember: 'L = πd = 2πr',
    hook: 'Obwód to „<b>trzy średnice i kawałek</b>” – tak sprawdzisz, czy wynik ma sens.',
  },
  {
    title: 'Pole koła – pobaw się promieniem',
    widget: { type: 'kolo', r: 3 },
    text: `<p>Przesuń suwak. Gdy promień rośnie 2 razy, długość okręgu też rośnie 2 razy, ale pole – aż 4 razy, bo we wzorze jest r².</p>`,
    remember: 'P = πr² – do kwadratu podnosisz tylko r.',
    hook: '„<b>Pi er kwadrat</b>” – kwadrat jest przy r, nie przy π.',
  },
  {
    title: 'Od wyniku do promienia',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Dwa schematy: z długości okręgu 20 pi wychodzi 2r = 20 i r = 10; z pola koła 49 pi wychodzi r kwadrat = 49 i r = 7">
      <defs><marker id="a-mat-kolo-5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="8" y="20" width="92" height="38" rx="8" class="f1 s1"/>
      <rect x="154" y="20" width="92" height="38" rx="8" class="f1 s1"/>
      <rect x="300" y="20" width="92" height="38" rx="8" class="f1 s1"/>
      <text x="54" y="45" class="tx-b" text-anchor="middle">L = 20π</text>
      <text x="200" y="45" class="tx-b" text-anchor="middle">2r = 20</text>
      <text x="346" y="45" class="tx-b" text-anchor="middle">r = 10</text>
      <path d="M104,48 L149,48" class="ln" marker-end="url(#a-mat-kolo-5)"/>
      <path d="M250,48 L295,48" class="ln" marker-end="url(#a-mat-kolo-5)"/>
      <text x="127" y="38" class="tx" text-anchor="middle">: π</text>
      <text x="273" y="38" class="tx" text-anchor="middle">: 2</text>
      <rect x="8" y="92" width="92" height="38" rx="8" class="f3 s3"/>
      <rect x="154" y="92" width="92" height="38" rx="8" class="f3 s3"/>
      <rect x="300" y="92" width="92" height="38" rx="8" class="f3 s3"/>
      <text x="54" y="117" class="tx-b" text-anchor="middle">P = 49π</text>
      <text x="200" y="117" class="tx-b" text-anchor="middle">r² = 49</text>
      <text x="346" y="117" class="tx-b" text-anchor="middle">r = 7</text>
      <path d="M104,120 L149,120" class="ln" marker-end="url(#a-mat-kolo-5)"/>
      <path d="M250,120 L295,120" class="ln" marker-end="url(#a-mat-kolo-5)"/>
      <text x="127" y="110" class="tx" text-anchor="middle">: π</text>
      <text x="273" y="110" class="tx" text-anchor="middle">√</text>
    </svg>`,
    text: `<p>Często znasz długość okręgu albo pole i szukasz promienia. Zapisz wzór i porównaj to, co stoi przy π.</p><ul><li>2πr = 20π → 2r = 20 → r = 10,</li><li>πr² = 49π → r² = 49 → r = 7.</li></ul>`,
    remember: 'Z długości dzielisz przez 2π, z pola dzielisz przez π i wyciągasz pierwiastek.',
    check: { q: 'Pole koła wynosi 81π. Ile wynosi promień?', options: ['9', '81', '40,5', '18'], answer: 0, explain: 'r² = 81, więc r = 9.' },
  },
  {
    title: 'Koło roweru i pułapki',
    svg: `<svg viewBox="0 0 400 175" role="img" aria-label="Koło o promieniu r toczy się po prostej. Po jednym pełnym obrocie przesuwa się o długość swojego okręgu">
      <defs><marker id="a-mat-kolo-6" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="10" y1="110" x2="390" y2="110" class="ln"/>
      <circle cx="60" cy="70" r="40" class="f1 s1 sw"/>
      <line x1="60" y1="70" x2="60" y2="110" class="ln s2 sw"/>
      <circle cx="60" cy="110" r="5" class="t2"/>
      <circle cx="311.3" cy="70" r="40" class="ln-thin dash"/>
      <line x1="311.3" y1="70" x2="311.3" y2="110" class="ln s2 sw"/>
      <circle cx="311.3" cy="110" r="5" class="t2"/>
      <path d="M185.7,132 L63,132" class="ln s2" marker-end="url(#a-mat-kolo-6)"/>
      <path d="M185.7,132 L308.3,132" class="ln s2" marker-end="url(#a-mat-kolo-6)"/>
      <text x="82" y="62" class="tx-b t2">r</text>
      <text x="200" y="162" class="tx-b" text-anchor="middle">1 obrót = L = 2πr</text>
    </svg>`,
    text: `<p>Przy jednym pełnym obrocie koło przejeżdża drogę równą długości swojego okręgu. Liczba obrotów = droga : długość okręgu – obie w tych samych jednostkach.</p><p>Typowe błędy: średnica zamiast promienia we wzorze na pole, mylenie wzorów 2πr i πr², cm zamiast cm².</p>`,
    remember: 'Liczba obrotów = droga : L',
    hook: 'Zaznacz kredą punkt na oponie – po jednym obrocie znów dotknie ziemi dokładnie o L dalej.',
    check: { q: 'Okrąg koła ma długość 2 m. Ile obrotów wykona koło na drodze 100 m?', options: ['50', '200', '100', '20'], answer: 0, explain: '100 : 2 = 50.' },
  },
];

window.LESSONS['matematyka/uklad-wspolrzednych'] = [
  {
    title: 'Oś liczbowa: kółko puste czy pełne?',
    svg: `<svg viewBox="0 0 380 170" role="img" aria-label="Dwie osie liczbowe. Na górnej zbiór x ≥ 1,5: zamalowane kółko w 1,5 i linia w prawo. Na dolnej zbiór x &lt; −1: puste kółko w −1 i linia w lewo">
      <text x="10" y="22" class="tx-b t1">x ≥ 1,5</text>
      <line x1="20" y1="50" x2="365" y2="50" class="ln"/>
      <polyline points="356,45 365,50 356,55" class="ln"/>
      <line x1="40" y1="45" x2="40" y2="55" class="ln"/>
      <text x="40" y="76" class="tx" text-anchor="middle">−3</text>
      <line x1="90" y1="45" x2="90" y2="55" class="ln"/>
      <text x="90" y="76" class="tx" text-anchor="middle">−2</text>
      <line x1="140" y1="45" x2="140" y2="55" class="ln"/>
      <text x="140" y="76" class="tx" text-anchor="middle">−1</text>
      <line x1="190" y1="43" x2="190" y2="57" class="ln"/>
      <text x="190" y="76" class="tx" text-anchor="middle">0</text>
      <line x1="240" y1="45" x2="240" y2="55" class="ln"/>
      <text x="240" y="76" class="tx" text-anchor="middle">1</text>
      <line x1="290" y1="45" x2="290" y2="55" class="ln"/>
      <text x="290" y="76" class="tx" text-anchor="middle">2</text>
      <line x1="340" y1="45" x2="340" y2="55" class="ln"/>
      <text x="340" y="76" class="tx" text-anchor="middle">3</text>
      <line x1="265" y1="50" x2="364" y2="50" class="ln s1 sw"/>
      <polyline points="356,45 365,50 356,55" class="ln s1 sw"/>
      <circle cx="265" cy="50" r="6" class="t1"/>
      <text x="10" y="107" class="tx-b t2">x &lt; −1</text>
      <line x1="20" y1="135" x2="365" y2="135" class="ln"/>
      <polyline points="356,130 365,135 356,140" class="ln"/>
      <line x1="40" y1="130" x2="40" y2="140" class="ln"/>
      <text x="40" y="161" class="tx" text-anchor="middle">−3</text>
      <line x1="90" y1="130" x2="90" y2="140" class="ln"/>
      <text x="90" y="161" class="tx" text-anchor="middle">−2</text>
      <line x1="140" y1="130" x2="140" y2="140" class="ln"/>
      <text x="140" y="161" class="tx" text-anchor="middle">−1</text>
      <line x1="190" y1="128" x2="190" y2="142" class="ln"/>
      <text x="190" y="161" class="tx" text-anchor="middle">0</text>
      <line x1="240" y1="130" x2="240" y2="140" class="ln"/>
      <text x="240" y="161" class="tx" text-anchor="middle">1</text>
      <line x1="290" y1="130" x2="290" y2="140" class="ln"/>
      <text x="290" y="161" class="tx" text-anchor="middle">2</text>
      <line x1="340" y1="130" x2="340" y2="140" class="ln"/>
      <text x="340" y="161" class="tx" text-anchor="middle">3</text>
      <line x1="21" y1="135" x2="140" y2="135" class="ln s2 sw"/>
      <polyline points="29,130 20,135 29,140" class="ln s2 sw"/>
      <circle cx="140" cy="135" r="6" class="ln s2 sw bg"/>
    </svg>`,
    text: `<p>Znaki ≥ i ≤ („lub równe”) – liczba graniczna <b>należy</b> do zbioru, więc kółko jest <b>zamalowane</b>. Znaki &gt; i &lt; – liczba graniczna nie należy, kółko jest <b>puste</b>.</p><p>„Większe” – linia w prawo, „mniejsze” – w lewo.</p>`,
    remember: '≥, ≤ – kółko pełne · &gt;, &lt; – kółko puste.',
    hook: 'Kreska pod znakiem ≥ to „podłoga”, na której liczba może stanąć – więc jest w zbiorze i kółko się zamalowuje.',
    check: { q: 'Jak zaznaczysz zbiór x ≤ 3?', options: ['kółko pełne w 3, linia w lewo', 'kółko puste w 3, linia w lewo', 'kółko pełne w 3, linia w prawo'], answer: 0 },
  },
  {
    title: 'Adres punktu: (x, y)',
    svg: `<svg viewBox="0 0 298 212" role="img" aria-label="Punkt P = (3, 2): z początku układu 3 kratki w prawo wzdłuż osi x, potem 2 kratki w górę">
      <defs><marker id="a-mat-uklad-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="30" y1="28" x2="30" y2="198" class="ln-thin"/>
      <line x1="64" y1="28" x2="64" y2="198" class="ln-thin"/>
      <line x1="98" y1="28" x2="98" y2="198" class="ln-thin"/>
      <line x1="132" y1="28" x2="132" y2="198" class="ln-thin"/>
      <line x1="166" y1="28" x2="166" y2="198" class="ln-thin"/>
      <line x1="200" y1="28" x2="200" y2="198" class="ln-thin"/>
      <line x1="234" y1="28" x2="234" y2="198" class="ln-thin"/>
      <line x1="268" y1="28" x2="268" y2="198" class="ln-thin"/>
      <line x1="30" y1="198" x2="268" y2="198" class="ln-thin"/>
      <line x1="30" y1="164" x2="268" y2="164" class="ln-thin"/>
      <line x1="30" y1="130" x2="268" y2="130" class="ln-thin"/>
      <line x1="30" y1="96" x2="268" y2="96" class="ln-thin"/>
      <line x1="30" y1="62" x2="268" y2="62" class="ln-thin"/>
      <line x1="30" y1="28" x2="268" y2="28" class="ln-thin"/>
      <line x1="30" y1="164" x2="282" y2="164" class="ln"/>
      <polyline points="273,159 282,164 273,169" class="ln"/>
      <line x1="64" y1="198" x2="64" y2="14" class="ln"/>
      <polyline points="59,23 64,14 69,23" class="ln"/>
      <text x="280" y="156" class="tx-s">x</text>
      <text x="72" y="22" class="tx-s">y</text>
      <path d="M64,164 L162,164" class="ln s2 sw" marker-end="url(#a-mat-uklad-2)"/>
      <path d="M166,164 L166,102" class="ln s3 sw" marker-end="url(#a-mat-uklad-2)"/>
      <rect x="87" y="138" width="56" height="18" class="bg"/>
      <text x="115" y="152" class="tx t2" text-anchor="middle">x = 3</text>
      <rect x="172" y="124" width="54" height="18" class="bg"/>
      <text x="174" y="138" class="tx t3">y = 2</text>
      <rect x="21" y="168" width="18" height="14" class="bg"/>
      <text x="30" y="179" class="tx-s" text-anchor="middle">−1</text>
      <rect x="92.8" y="168" width="10.5" height="14" class="bg"/>
      <text x="98" y="179" class="tx-s" text-anchor="middle">1</text>
      <rect x="126.8" y="168" width="10.5" height="14" class="bg"/>
      <text x="132" y="179" class="tx-s" text-anchor="middle">2</text>
      <rect x="160.8" y="168" width="10.5" height="14" class="bg"/>
      <text x="166" y="179" class="tx-s" text-anchor="middle">3</text>
      <rect x="194.8" y="168" width="10.5" height="14" class="bg"/>
      <text x="200" y="179" class="tx-s" text-anchor="middle">4</text>
      <rect x="228.8" y="168" width="10.5" height="14" class="bg"/>
      <text x="234" y="179" class="tx-s" text-anchor="middle">5</text>
      <rect x="262.8" y="168" width="10.5" height="14" class="bg"/>
      <text x="268" y="179" class="tx-s" text-anchor="middle">6</text>
      <rect x="41.5" y="191" width="18" height="14" class="bg"/>
      <text x="59" y="202" class="tx-s" text-anchor="end">−1</text>
      <rect x="49" y="123" width="10.5" height="14" class="bg"/>
      <text x="59" y="134" class="tx-s" text-anchor="end">1</text>
      <rect x="49" y="89" width="10.5" height="14" class="bg"/>
      <text x="59" y="100" class="tx-s" text-anchor="end">2</text>
      <rect x="49" y="55" width="10.5" height="14" class="bg"/>
      <text x="59" y="66" class="tx-s" text-anchor="end">3</text>
      <rect x="49" y="21" width="10.5" height="14" class="bg"/>
      <text x="59" y="32" class="tx-s" text-anchor="end">4</text>
      <rect x="49" y="168" width="10.5" height="14" class="bg"/>
      <text x="59" y="179" class="tx-s" text-anchor="end">0</text>
      <circle cx="166" cy="96" r="5" class="t1"/>
      <text x="174" y="86" class="tx-b">P = (3, 2)</text>
    </svg>`,
    text: `<p>Współrzędne to adres punktu. Startujesz z początku układu (0, 0). Pierwsza liczba mówi, ile kratek iść w poziomie (x), druga – ile w pionie (y).</p>`,
    remember: '(x, y): najpierw poziomo, potem pionowo. Kolejność ma znaczenie!',
    hook: 'Najpierw idziesz <b>korytarzem</b> (x), potem jedziesz <b>windą</b> (y).',
  },
  {
    title: 'Znaki współrzędnych',
    svg: `<svg viewBox="0 0 300 222" role="img" aria-label="Cztery punkty w różnych częściach układu i znaki ich współrzędnych: plus plus, minus plus, minus minus, plus minus">
      <line x1="30" y1="28" x2="30" y2="208" class="ln-thin"/>
      <line x1="60" y1="28" x2="60" y2="208" class="ln-thin"/>
      <line x1="90" y1="28" x2="90" y2="208" class="ln-thin"/>
      <line x1="120" y1="28" x2="120" y2="208" class="ln-thin"/>
      <line x1="150" y1="28" x2="150" y2="208" class="ln-thin"/>
      <line x1="180" y1="28" x2="180" y2="208" class="ln-thin"/>
      <line x1="210" y1="28" x2="210" y2="208" class="ln-thin"/>
      <line x1="240" y1="28" x2="240" y2="208" class="ln-thin"/>
      <line x1="270" y1="28" x2="270" y2="208" class="ln-thin"/>
      <line x1="30" y1="208" x2="270" y2="208" class="ln-thin"/>
      <line x1="30" y1="178" x2="270" y2="178" class="ln-thin"/>
      <line x1="30" y1="148" x2="270" y2="148" class="ln-thin"/>
      <line x1="30" y1="118" x2="270" y2="118" class="ln-thin"/>
      <line x1="30" y1="88" x2="270" y2="88" class="ln-thin"/>
      <line x1="30" y1="58" x2="270" y2="58" class="ln-thin"/>
      <line x1="30" y1="28" x2="270" y2="28" class="ln-thin"/>
      <line x1="30" y1="118" x2="284" y2="118" class="ln"/>
      <polyline points="275,113 284,118 275,123" class="ln"/>
      <line x1="150" y1="208" x2="150" y2="14" class="ln"/>
      <polyline points="145,23 150,14 155,23" class="ln"/>
      <text x="282" y="110" class="tx-s">x</text>
      <text x="158" y="22" class="tx-s">y</text>
      <rect x="182" y="29" width="56" height="19" class="bg"/>
      <text x="210" y="44" class="tx-b" text-anchor="middle">(+, +)</text>
      <rect x="32" y="59" width="56" height="19" class="bg"/>
      <text x="60" y="74" class="tx-b" text-anchor="middle">(−, +)</text>
      <rect x="62" y="149" width="56" height="19" class="bg"/>
      <text x="90" y="164" class="tx-b" text-anchor="middle">(−, −)</text>
      <rect x="212" y="149" width="56" height="19" class="bg"/>
      <text x="240" y="164" class="tx-b" text-anchor="middle">(+, −)</text>
      <rect x="21" y="122" width="18" height="14" class="bg"/>
      <text x="30" y="133" class="tx-s" text-anchor="middle">−4</text>
      <rect x="51" y="122" width="18" height="14" class="bg"/>
      <text x="60" y="133" class="tx-s" text-anchor="middle">−3</text>
      <rect x="81" y="122" width="18" height="14" class="bg"/>
      <text x="90" y="133" class="tx-s" text-anchor="middle">−2</text>
      <rect x="111" y="122" width="18" height="14" class="bg"/>
      <text x="120" y="133" class="tx-s" text-anchor="middle">−1</text>
      <rect x="174.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="180" y="133" class="tx-s" text-anchor="middle">1</text>
      <rect x="204.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="210" y="133" class="tx-s" text-anchor="middle">2</text>
      <rect x="234.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="240" y="133" class="tx-s" text-anchor="middle">3</text>
      <rect x="264.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="270" y="133" class="tx-s" text-anchor="middle">4</text>
      <rect x="127.5" y="201" width="18" height="14" class="bg"/>
      <text x="145" y="212" class="tx-s" text-anchor="end">−3</text>
      <rect x="127.5" y="171" width="18" height="14" class="bg"/>
      <text x="145" y="182" class="tx-s" text-anchor="end">−2</text>
      <rect x="127.5" y="141" width="18" height="14" class="bg"/>
      <text x="145" y="152" class="tx-s" text-anchor="end">−1</text>
      <rect x="135" y="81" width="10.5" height="14" class="bg"/>
      <text x="145" y="92" class="tx-s" text-anchor="end">1</text>
      <rect x="135" y="51" width="10.5" height="14" class="bg"/>
      <text x="145" y="62" class="tx-s" text-anchor="end">2</text>
      <rect x="135" y="21" width="10.5" height="14" class="bg"/>
      <text x="145" y="32" class="tx-s" text-anchor="end">3</text>
      <rect x="135" y="122" width="10.5" height="14" class="bg"/>
      <text x="145" y="133" class="tx-s" text-anchor="end">0</text>
      <circle cx="210" cy="58" r="5" class="t1"/>
      <circle cx="60" cy="88" r="5" class="t1"/>
      <circle cx="90" cy="178" r="5" class="t1"/>
      <circle cx="240" cy="178" r="5" class="t1"/>
    </svg>`,
    text: `<p>Na prawo od osi y – x dodatni, na lewo – ujemny. Nad osią x – y dodatni, pod nią – ujemny. Punkt na osi ma jedną współrzędną równą 0: (4, 0) leży na osi x, a (0, −3) – na osi y.</p>`,
    hook: 'Prawo i góra to plusy, lewo i dół to minusy – jak na termometrze i na linijce.',
    check: { q: 'Gdzie leży punkt (0, −3)?', options: ['na osi x', 'na osi y', 'nad osią x'], answer: 1, explain: 'x = 0, więc punkt leży na osi y (3 kratki pod początkiem układu).' },
  },
  {
    title: 'Środek odcinka – średnia współrzędnych',
    svg: `<svg viewBox="0 0 300 252" role="img" aria-label="Odcinek AB, gdzie A = (−2, 1), B = (4, 5), i jego środek S = (1, 3)">
      <line x1="30" y1="28" x2="30" y2="238" class="ln-thin"/>
      <line x1="60" y1="28" x2="60" y2="238" class="ln-thin"/>
      <line x1="90" y1="28" x2="90" y2="238" class="ln-thin"/>
      <line x1="120" y1="28" x2="120" y2="238" class="ln-thin"/>
      <line x1="150" y1="28" x2="150" y2="238" class="ln-thin"/>
      <line x1="180" y1="28" x2="180" y2="238" class="ln-thin"/>
      <line x1="210" y1="28" x2="210" y2="238" class="ln-thin"/>
      <line x1="240" y1="28" x2="240" y2="238" class="ln-thin"/>
      <line x1="270" y1="28" x2="270" y2="238" class="ln-thin"/>
      <line x1="30" y1="238" x2="270" y2="238" class="ln-thin"/>
      <line x1="30" y1="208" x2="270" y2="208" class="ln-thin"/>
      <line x1="30" y1="178" x2="270" y2="178" class="ln-thin"/>
      <line x1="30" y1="148" x2="270" y2="148" class="ln-thin"/>
      <line x1="30" y1="118" x2="270" y2="118" class="ln-thin"/>
      <line x1="30" y1="88" x2="270" y2="88" class="ln-thin"/>
      <line x1="30" y1="58" x2="270" y2="58" class="ln-thin"/>
      <line x1="30" y1="28" x2="270" y2="28" class="ln-thin"/>
      <line x1="30" y1="208" x2="284" y2="208" class="ln"/>
      <polyline points="275,203 284,208 275,213" class="ln"/>
      <line x1="120" y1="238" x2="120" y2="14" class="ln"/>
      <polyline points="115,23 120,14 125,23" class="ln"/>
      <text x="282" y="200" class="tx-s">x</text>
      <text x="128" y="22" class="tx-s">y</text>
      <line x1="60" y1="178" x2="240" y2="58" class="ln s1 sw"/>
      <rect x="21" y="212" width="18" height="14" class="bg"/>
      <text x="30" y="223" class="tx-s" text-anchor="middle">−3</text>
      <rect x="51" y="212" width="18" height="14" class="bg"/>
      <text x="60" y="223" class="tx-s" text-anchor="middle">−2</text>
      <rect x="81" y="212" width="18" height="14" class="bg"/>
      <text x="90" y="223" class="tx-s" text-anchor="middle">−1</text>
      <rect x="144.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="150" y="223" class="tx-s" text-anchor="middle">1</text>
      <rect x="174.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="180" y="223" class="tx-s" text-anchor="middle">2</text>
      <rect x="204.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="210" y="223" class="tx-s" text-anchor="middle">3</text>
      <rect x="234.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="240" y="223" class="tx-s" text-anchor="middle">4</text>
      <rect x="264.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="270" y="223" class="tx-s" text-anchor="middle">5</text>
      <rect x="97.5" y="231" width="18" height="14" class="bg"/>
      <text x="115" y="242" class="tx-s" text-anchor="end">−1</text>
      <rect x="105" y="171" width="10.5" height="14" class="bg"/>
      <text x="115" y="182" class="tx-s" text-anchor="end">1</text>
      <rect x="105" y="141" width="10.5" height="14" class="bg"/>
      <text x="115" y="152" class="tx-s" text-anchor="end">2</text>
      <rect x="105" y="111" width="10.5" height="14" class="bg"/>
      <text x="115" y="122" class="tx-s" text-anchor="end">3</text>
      <rect x="105" y="81" width="10.5" height="14" class="bg"/>
      <text x="115" y="92" class="tx-s" text-anchor="end">4</text>
      <rect x="105" y="51" width="10.5" height="14" class="bg"/>
      <text x="115" y="62" class="tx-s" text-anchor="end">5</text>
      <rect x="105" y="21" width="10.5" height="14" class="bg"/>
      <text x="115" y="32" class="tx-s" text-anchor="end">6</text>
      <rect x="105" y="212" width="10.5" height="14" class="bg"/>
      <text x="115" y="223" class="tx-s" text-anchor="end">0</text>
      <circle cx="60" cy="178" r="5" class="t1"/>
      <text x="52" y="170" class="tx-b" text-anchor="end">A</text>
      <circle cx="240" cy="58" r="5" class="t1"/>
      <text x="248" y="52" class="tx-b">B</text>
      <circle cx="150" cy="118" r="5" class="t2"/>
      <text x="156" y="138" class="tx-b t2">S</text>
    </svg>`,
    text: `<p>Środek odcinka ma współrzędne równe <b>średnim</b> współrzędnych końców: S = ((−2 + 4)/2, (1 + 5)/2) = (1, 3).</p><p>Szukasz drugiego końca? Od S zrób taki sam krok, jak od A do S.</p>`,
    remember: 'S = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
    hook: 'Środek to „spotkanie w pół drogi” – każda współrzędna leży dokładnie pośrodku.',
    check: { q: 'A = (−1, 3), a środek odcinka AB to S = (1, 1). Gdzie jest B?', options: ['(3, −1)', '(0, 2)', '(2, 4)', '(−3, 5)'], answer: 0, explain: 'Z A do S: 2 w prawo i 2 w dół. Tak samo dalej: B = (3, −1).' },
  },
  {
    title: 'Długość odcinka – Pitagoras na kratkach',
    svg: `<svg viewBox="0 0 240 252" role="img" aria-label="Odcinek AB, gdzie A = (1, 1) i B = (4, 5), jako przeciwprostokątna trójkąta prostokątnego o przyprostokątnych 3 i 4">
      <line x1="30" y1="28" x2="30" y2="238" class="ln-thin"/>
      <line x1="60" y1="28" x2="60" y2="238" class="ln-thin"/>
      <line x1="90" y1="28" x2="90" y2="238" class="ln-thin"/>
      <line x1="120" y1="28" x2="120" y2="238" class="ln-thin"/>
      <line x1="150" y1="28" x2="150" y2="238" class="ln-thin"/>
      <line x1="180" y1="28" x2="180" y2="238" class="ln-thin"/>
      <line x1="210" y1="28" x2="210" y2="238" class="ln-thin"/>
      <line x1="30" y1="238" x2="210" y2="238" class="ln-thin"/>
      <line x1="30" y1="208" x2="210" y2="208" class="ln-thin"/>
      <line x1="30" y1="178" x2="210" y2="178" class="ln-thin"/>
      <line x1="30" y1="148" x2="210" y2="148" class="ln-thin"/>
      <line x1="30" y1="118" x2="210" y2="118" class="ln-thin"/>
      <line x1="30" y1="88" x2="210" y2="88" class="ln-thin"/>
      <line x1="30" y1="58" x2="210" y2="58" class="ln-thin"/>
      <line x1="30" y1="28" x2="210" y2="28" class="ln-thin"/>
      <line x1="30" y1="208" x2="224" y2="208" class="ln"/>
      <polyline points="215,203 224,208 215,213" class="ln"/>
      <line x1="60" y1="238" x2="60" y2="14" class="ln"/>
      <polyline points="55,23 60,14 65,23" class="ln"/>
      <text x="222" y="200" class="tx-s">x</text>
      <text x="68" y="22" class="tx-s">y</text>
      <polyline points="90,178 180,178 180,58" class="ln s2 sw dash"/>
      <line x1="90" y1="178" x2="180" y2="58" class="ln s1 sw"/>
      <text x="135" y="198" class="tx-b t2" text-anchor="middle">3</text>
      <text x="188" y="124" class="tx-b t2">4</text>
      <text x="129" y="112" class="tx-b t1" text-anchor="end">5</text>
      <rect x="21" y="212" width="18" height="14" class="bg"/>
      <text x="30" y="223" class="tx-s" text-anchor="middle">−1</text>
      <rect x="84.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="90" y="223" class="tx-s" text-anchor="middle">1</text>
      <rect x="114.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="120" y="223" class="tx-s" text-anchor="middle">2</text>
      <rect x="144.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="150" y="223" class="tx-s" text-anchor="middle">3</text>
      <rect x="174.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="180" y="223" class="tx-s" text-anchor="middle">4</text>
      <rect x="204.8" y="212" width="10.5" height="14" class="bg"/>
      <text x="210" y="223" class="tx-s" text-anchor="middle">5</text>
      <rect x="37.5" y="231" width="18" height="14" class="bg"/>
      <text x="55" y="242" class="tx-s" text-anchor="end">−1</text>
      <rect x="45" y="171" width="10.5" height="14" class="bg"/>
      <text x="55" y="182" class="tx-s" text-anchor="end">1</text>
      <rect x="45" y="141" width="10.5" height="14" class="bg"/>
      <text x="55" y="152" class="tx-s" text-anchor="end">2</text>
      <rect x="45" y="111" width="10.5" height="14" class="bg"/>
      <text x="55" y="122" class="tx-s" text-anchor="end">3</text>
      <rect x="45" y="81" width="10.5" height="14" class="bg"/>
      <text x="55" y="92" class="tx-s" text-anchor="end">4</text>
      <rect x="45" y="51" width="10.5" height="14" class="bg"/>
      <text x="55" y="62" class="tx-s" text-anchor="end">5</text>
      <rect x="45" y="21" width="10.5" height="14" class="bg"/>
      <text x="55" y="32" class="tx-s" text-anchor="end">6</text>
      <rect x="45" y="212" width="10.5" height="14" class="bg"/>
      <text x="55" y="223" class="tx-s" text-anchor="end">0</text>
      <circle cx="90" cy="178" r="5" class="t1"/>
      <text x="82" y="172" class="tx-b" text-anchor="end">A</text>
      <circle cx="180" cy="58" r="5" class="t1"/>
      <text x="188" y="52" class="tx-b">B</text>
    </svg>`,
    text: `<p>Ukośny odcinek na kratkach to przeciwprostokątna trójkąta prostokątnego. Przyprostokątne to różnice współrzędnych: 4 − 1 = 3 i 5 − 1 = 4. Zatem |AB| = √(3² + 4²) = 5.</p>`,
    remember: '|AB| = √((x₂ − x₁)² + (y₂ − y₁)²)',
    hook: 'Nie dodawaj kratek „po schodkach” (3 + 4 = 7) – po przekątnej zawsze jest bliżej.',
  },
  {
    title: 'Punkty kratowe na prostej AB',
    svg: `<svg viewBox="0 0 300 222" role="img" aria-label="Prosta przez A = (−2, −1) i B = (2, 1). Krok 2 w prawo i 1 w górę (zaznaczony przy B) prowadzi do kolejnych punktów kratowych: (−4, −2), (0, 0), (4, 2)">
      <line x1="30" y1="28" x2="30" y2="208" class="ln-thin"/>
      <line x1="60" y1="28" x2="60" y2="208" class="ln-thin"/>
      <line x1="90" y1="28" x2="90" y2="208" class="ln-thin"/>
      <line x1="120" y1="28" x2="120" y2="208" class="ln-thin"/>
      <line x1="150" y1="28" x2="150" y2="208" class="ln-thin"/>
      <line x1="180" y1="28" x2="180" y2="208" class="ln-thin"/>
      <line x1="210" y1="28" x2="210" y2="208" class="ln-thin"/>
      <line x1="240" y1="28" x2="240" y2="208" class="ln-thin"/>
      <line x1="270" y1="28" x2="270" y2="208" class="ln-thin"/>
      <line x1="30" y1="208" x2="270" y2="208" class="ln-thin"/>
      <line x1="30" y1="178" x2="270" y2="178" class="ln-thin"/>
      <line x1="30" y1="148" x2="270" y2="148" class="ln-thin"/>
      <line x1="30" y1="118" x2="270" y2="118" class="ln-thin"/>
      <line x1="30" y1="88" x2="270" y2="88" class="ln-thin"/>
      <line x1="30" y1="58" x2="270" y2="58" class="ln-thin"/>
      <line x1="30" y1="28" x2="270" y2="28" class="ln-thin"/>
      <line x1="30" y1="118" x2="284" y2="118" class="ln"/>
      <polyline points="275,113 284,118 275,123" class="ln"/>
      <line x1="150" y1="208" x2="150" y2="14" class="ln"/>
      <polyline points="145,23 150,14 155,23" class="ln"/>
      <text x="282" y="110" class="tx-s">x</text>
      <text x="158" y="22" class="tx-s">y</text>
      <line x1="30" y1="178" x2="270" y2="58" class="ln s1 sw"/>
      <polyline points="210,88 270,88 270,58" class="ln s2 sw"/>
      <text x="240" y="108" class="tx-b t2" text-anchor="middle">2</text>
      <text x="276" y="79" class="tx-b t2">1</text>
      <rect x="21" y="122" width="18" height="14" class="bg"/>
      <text x="30" y="133" class="tx-s" text-anchor="middle">−4</text>
      <rect x="51" y="122" width="18" height="14" class="bg"/>
      <text x="60" y="133" class="tx-s" text-anchor="middle">−3</text>
      <rect x="81" y="122" width="18" height="14" class="bg"/>
      <text x="90" y="133" class="tx-s" text-anchor="middle">−2</text>
      <rect x="111" y="122" width="18" height="14" class="bg"/>
      <text x="120" y="133" class="tx-s" text-anchor="middle">−1</text>
      <rect x="174.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="180" y="133" class="tx-s" text-anchor="middle">1</text>
      <rect x="204.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="210" y="133" class="tx-s" text-anchor="middle">2</text>
      <rect x="234.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="240" y="133" class="tx-s" text-anchor="middle">3</text>
      <rect x="264.8" y="122" width="10.5" height="14" class="bg"/>
      <text x="270" y="133" class="tx-s" text-anchor="middle">4</text>
      <rect x="127.5" y="201" width="18" height="14" class="bg"/>
      <text x="145" y="212" class="tx-s" text-anchor="end">−3</text>
      <rect x="127.5" y="171" width="18" height="14" class="bg"/>
      <text x="145" y="182" class="tx-s" text-anchor="end">−2</text>
      <rect x="127.5" y="141" width="18" height="14" class="bg"/>
      <text x="145" y="152" class="tx-s" text-anchor="end">−1</text>
      <rect x="135" y="81" width="10.5" height="14" class="bg"/>
      <text x="145" y="92" class="tx-s" text-anchor="end">1</text>
      <rect x="135" y="51" width="10.5" height="14" class="bg"/>
      <text x="145" y="62" class="tx-s" text-anchor="end">2</text>
      <rect x="135" y="21" width="10.5" height="14" class="bg"/>
      <text x="145" y="32" class="tx-s" text-anchor="end">3</text>
      <rect x="135" y="122" width="10.5" height="14" class="bg"/>
      <text x="145" y="133" class="tx-s" text-anchor="end">0</text>
      <circle cx="30" cy="178" r="5" class="t2"/>
      <circle cx="150" cy="118" r="5" class="t2"/>
      <circle cx="270" cy="58" r="5" class="t2"/>
      <circle cx="90" cy="148" r="5" class="t1"/>
      <text x="86" y="170" class="tx-b" text-anchor="end">A</text>
      <circle cx="210" cy="88" r="5" class="t1"/>
      <text x="206" y="78" class="tx-b" text-anchor="end">B</text>
    </svg>`,
    text: `<p>Z A do B idziesz 4 w prawo i 2 w górę. Obie liczby dzielą się przez 2, więc najkrótszy krok to <b>2 w prawo i 1 w górę</b>. Powtarzając go, trafiasz w kolejne punkty kratowe prostej: (0, 0), (2, 1), (4, 2), a w drugą stronę (−4, −2).</p>`,
    remember: 'Skróć przesunięcie z A do B przez wspólny dzielnik i powtarzaj ten krok.',
    check: { q: 'Prosta przechodzi przez (0, 0) i (4, 6). Który punkt też na niej leży?', options: ['(2, 3)', '(3, 2)', '(1, 2)', '(2, 4)'], answer: 0, explain: '4 i 6 dzielą się przez 2 – krok to 2 w prawo i 3 w górę: (2, 3).' },
  },
];
