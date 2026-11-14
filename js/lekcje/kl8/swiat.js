/* Lekcje – 🌍 Świat, klasa 8. Klucz: 'swiat/<id działu>'. Format: docs/LEKCJE.md
 * Treści oparte na działach z js/dane/kl8/swiat.js (moduł poza podstawą, źródła w polu basis). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['swiat/anglia-logika'] = [
  {
    title: 'Prawda i fałsz, czyli 1 i 0',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Flaga Anglii i napis: key stage 3, uczniowie w wieku 11–14 lat. Zdania i ich wartości: 5 większe od 3 – 1, prawda. 2 większe od 4 – 0, fałsz. 10 jest liczbą parzystą – 1, prawda">
      <defs><marker id="a-k8sw-lg-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="60" height="40" class="fl-w ln"/>
      <rect x="36" y="10" width="8" height="40" class="fl-r"/>
      <rect x="10" y="26" width="60" height="8" class="fl-r"/>
      <rect x="10" y="10" width="60" height="40" class="ln" fill="none"/>
      <text x="84" y="30" class="tx-b">Anglia · key stage 3</text>
      <text x="84" y="48" class="tx-s">uczniowie w wieku 11–14 lat</text>
      <rect x="10" y="68" width="270" height="34" rx="8" class="f1 s1"/>
      <rect x="10" y="112" width="270" height="34" rx="8" class="f1 s1"/>
      <rect x="10" y="156" width="270" height="34" rx="8" class="f1 s1"/>
      <g class="tx"><text x="24" y="91">5 &gt; 3</text><text x="24" y="135">2 &gt; 4</text><text x="24" y="179">10 jest liczbą parzystą</text></g>
      <g class="ln"><path d="M284,85 L318,85" marker-end="url(#a-k8sw-lg-1)"/><path d="M284,129 L318,129" marker-end="url(#a-k8sw-lg-1)"/><path d="M284,173 L318,173" marker-end="url(#a-k8sw-lg-1)"/></g>
      <rect x="324" y="68" width="66" height="34" rx="8" class="f3 s3 sw"/>
      <rect x="324" y="112" width="66" height="34" rx="8" class="f2 s2 sw"/>
      <rect x="324" y="156" width="66" height="34" rx="8" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="357" y="92">1</text><text x="357" y="136">0</text><text x="357" y="180">1</text></g>
    </svg>`,
    text: `<p>W Anglii uczniowie w twoim wieku (key stage 3, 11–14 lat) uczą się na informatyce <b>logiki Boole’a</b> – działań na dwóch wartościach: <b>prawda</b> i <b>fałsz</b>.</p>
      <p>Komputer zapisuje prawdę jako <b>1</b>, a fałsz jako <b>0</b>. Każde zdanie logiczne – np. „5 &gt; 3” – ma jedną z tych wartości.</p>`,
    remember: 'Prawda = 1, fałsz = 0. Logika Boole’a to działania na tych dwóch wartościach.',
    hook: 'Jak włącznik światła: włączone (1) albo wyłączone (0) – nic pomiędzy.',
  },
  {
    title: 'NOT – odwracacz',
    svg: `<svg viewBox="0 0 400 140" role="img" aria-label="Bramka NOT: trójkąt z kółkiem na końcu, jedno wejście A, wyjście NOT A. Tabela: A równe 0 daje 1, A równe 1 daje 0">
      <text x="20" y="52" class="tx-b">A</text>
      <path d="M20,64 L110,64" class="ln sw"/>
      <path d="M110,39 L110,89 L165,64 z" class="f5 s5 sw"/>
      <circle cx="172" cy="64" r="7" class="bg ln sw"/>
      <path d="M179,64 L258,64" class="ln sw"/>
      <text x="190" y="52" class="tx-b">NOT A</text>
      <text x="114" y="69" class="tx-s">NOT</text>
      <rect x="270" y="10" width="124" height="120" rx="10" class="bg ln-thin"/>
      <path d="M310,10 V130 M270,50 H394 M270,90 H394" class="ln-thin"/>
      <g class="tx-b" text-anchor="middle"><text x="290" y="36">A</text><text x="352" y="36">NOT A</text></g>
      <g class="tx" text-anchor="middle"><text x="290" y="76">0</text><text x="352" y="76">1</text><text x="290" y="116">1</text><text x="352" y="116">0</text></g>
    </svg>`,
    text: `<p><b>NOT</b> („nie”) ma jedno wejście i <b>odwraca</b> wartość: z 0 robi 1, z 1 robi 0.</p>
      <p>W elektronice robi to <b>bramka logiczna</b> NOT – na schematach często rysowana jako trójkąt z kółkiem.</p>`,
    remember: 'NOT 0 = 1, NOT 1 = 0.',
    hook: 'NOT to przekora: zawsze mówi odwrotnie.',
  },
  {
    title: 'AND – wyłączniki jeden za drugim',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Obwód: bateria, dwa wyłączniki A i B połączone szeregowo i żarówka. Żarówka świeci tylko, gdy A i B są zamknięte. Obok symbol bramki AND">
      <g class="ln sw" fill="none">
        <path d="M40,100 V40 H90"/><path d="M128,40 H170"/><path d="M208,40 H300 V90"/><path d="M300,120 V170 H40 V112"/>
        <path d="M90,40 L124,22"/><path d="M170,40 L204,22"/>
      </g>
      <path d="M24,100 H56" class="ln sw"/><path d="M32,112 H48" class="ln sw"/>
      <g class="bg ln"><circle cx="90" cy="40" r="4"/><circle cx="128" cy="40" r="4"/><circle cx="170" cy="40" r="4"/><circle cx="208" cy="40" r="4"/></g>
      <circle cx="300" cy="105" r="15" class="f4 s4 sw"/>
      <path d="M289,94 L311,116 M311,94 L289,116" class="ln"/>
      <g class="tx-b" text-anchor="middle"><text x="109" y="66">A</text><text x="189" y="66">B</text></g>
      <text x="66" y="128" class="tx-s">bateria</text>
      <text x="244" y="150" class="tx-s">żarówka</text>
      <g class="ln sw" fill="none"><path d="M320,90 H340"/><path d="M320,120 H340"/><path d="M380,105 H396"/></g>
      <path d="M340,85 H360 A20,20 0 0 1 360,125 H340 z" class="f1 s1 sw"/>
      <text x="358" y="110" class="tx-s" text-anchor="middle">AND</text>
      <text x="200" y="204" class="tx" text-anchor="middle">świeci tylko, gdy A i B są zamknięte</text>
    </svg>`,
    text: `<p>Połącz dwa wyłączniki <b>szeregowo</b> – jeden za drugim. Prąd ma tylko jedną drogę, więc żarówka świeci <b>tylko wtedy, gdy oba</b> są zamknięte.</p>
      <p>To działanie <b>AND</b> („i”): 1 AND 1 = 1, a w każdym innym przypadku wynik to 0.</p>`,
    remember: 'AND daje 1 tylko wtedy, gdy oba wejścia to 1. Szeregowo = AND.',
    hook: 'AND jak drzwi z dwoma zamkami: otworzysz je dopiero wtedy, gdy przekręcisz oba klucze.',
    check: { q: 'Ile wynosi 1 AND 0?', options: ['0', '1'], answer: 0, explain: 'Jedno wejście to 0, więc AND daje 0 – w obwodzie jeden wyłącznik jest otwarty i prąd nie płynie.' },
  },
  {
    title: 'OR – dwie drogi dla prądu',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Obwód: bateria, dwa wyłączniki A i B połączone równolegle i żarówka. Żarówka świeci, gdy A lub B jest zamknięty. Obok symbol bramki OR">
      <g class="ln sw" fill="none">
        <path d="M40,105 V40 H130"/><path d="M168,40 H300 V95"/><path d="M300,125 V190 H40 V117"/>
        <path d="M100,40 V100 H130"/><path d="M168,100 H230 V40"/>
        <path d="M130,40 L164,22"/><path d="M130,100 L164,82"/>
      </g>
      <path d="M24,105 H56" class="ln sw"/><path d="M32,117 H48" class="ln sw"/>
      <g class="bg ln"><circle cx="130" cy="40" r="4"/><circle cx="168" cy="40" r="4"/><circle cx="130" cy="100" r="4"/><circle cx="168" cy="100" r="4"/></g>
      <circle cx="300" cy="110" r="15" class="f4 s4 sw"/>
      <path d="M289,99 L311,121 M311,99 L289,121" class="ln"/>
      <g class="tx-b" text-anchor="middle"><text x="149" y="66">A</text><text x="149" y="126">B</text></g>
      <text x="66" y="140" class="tx-s">bateria</text>
      <text x="244" y="155" class="tx-s">żarówka</text>
      <g class="ln sw" fill="none"><path d="M322,95 H338"/><path d="M322,125 H338"/><path d="M385,110 H398"/></g>
      <path d="M332,90 Q347,110 332,130 Q372,130 387,110 Q372,90 332,90 z" class="f3 s3 sw"/>
      <text x="356" y="115" class="tx-s" text-anchor="middle">OR</text>
      <text x="200" y="218" class="tx" text-anchor="middle">świeci, gdy A lub B jest zamknięty</text>
    </svg>`,
    text: `<p>Teraz połącz wyłączniki <b>równolegle</b>. Prąd ma dwie drogi: wystarczy, że <b>jeden</b> wyłącznik jest zamknięty, a żarówka świeci.</p>
      <p>To działanie <b>OR</b> („lub”): daje 1, gdy co najmniej jedno wejście to 1. Uwaga – także wtedy, gdy oba są równe 1.</p>`,
    remember: 'OR daje 0 tylko wtedy, gdy oba wejścia to 0. Równolegle = OR.',
    hook: 'OR jak dwa wejścia do szkoły: wejdziesz, gdy otwarte jest którekolwiek z nich.',
    check: { q: 'Dwa wyłączniki połączone równolegle: A otwarty, B zamknięty. Czy żarówka świeci?', options: ['tak – prąd płynie przez B', 'nie – A przerywa obwód'], answer: 0, explain: 'Przy połączeniu równoległym prąd płynie drugą drogą – przez zamknięty wyłącznik B. To 0 OR 1 = 1.' },
  },
  {
    title: 'Łączymy bramki – i piszemy w Pythonie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Układ: A równe 1 i B równe 0 wchodzą do bramki AND, która daje 0. Wynik bramki AND i C równe 1 wchodzą do bramki OR. Wynik Y równa się 1. Y równa się A AND B, a całość OR C">
      <g class="ln sw" fill="none">
        <path d="M44,55 H110"/><path d="M44,75 H110"/>
        <path d="M150,65 H190 V100 H236"/><path d="M44,120 H236"/>
        <path d="M285,110 H385"/>
      </g>
      <g class="tx-b"><text x="4" y="61">A=1</text><text x="4" y="81">B=0</text><text x="4" y="126">C=1</text></g>
      <path d="M110,45 H130 A20,20 0 0 1 130,85 H110 z" class="f1 s1 sw"/>
      <path d="M230,90 Q245,110 230,130 Q270,130 285,110 Q270,90 230,90 z" class="f3 s3 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="128" y="70">AND</text><text x="254" y="115">OR</text></g>
      <rect x="160" y="40" width="22" height="20" rx="6" class="f4 s4"/>
      <text x="171" y="55" class="tx-s" text-anchor="middle">0</text>
      <text x="300" y="100" class="tx-b">Y = 1</text>
      <text x="200" y="168" class="tx-b" text-anchor="middle">Y = (A AND B) OR C</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">(1 AND 0) OR 1 = 0 OR 1 = 1</text>
    </svg>`,
    text: `<p>Bramki można łączyć: wynik jednej jest wejściem następnej. Licz od wejść do wyjścia – najpierw nawiasy, potem <b>NOT</b>, potem <b>AND</b>, na końcu <b>OR</b>.</p>
      <p>W Pythonie te same działania to <code>not</code>, <code>and</code>, <code>or</code>. Np. pralka rusza, gdy <code>zamkniete and start</code>.</p>`,
    remember: 'Kolejność: nawiasy → NOT → AND → OR. W Pythonie: not, and, or.',
    hook: 'AND działa jak mnożenie zer i jedynek (1 · 0 = 0) – i tak jak mnożenie liczysz go przed OR.',
    check: { q: 'A = 0, B = 1, C = 0. Ile wynosi (A OR B) AND C?', options: ['0', '1'], answer: 0, explain: 'Najpierw nawias: 0 OR 1 = 1. Potem 1 AND 0 = 0.' },
  },
];
