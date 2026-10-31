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
