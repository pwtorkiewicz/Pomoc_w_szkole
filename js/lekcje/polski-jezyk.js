/* Lekcje – język polski. */
window.LESSONS = window.LESSONS || {};

/* ===================== CZĘŚCI MOWY I IMIESŁOWY ===================== */
window.LESSONS['polski/czesci-mowy'] = [
  {
    title: 'Dwie drużyny części mowy',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Drzewo części mowy: pięć odmiennych i pięć nieodmiennych">
      <path d="M180,44 L107,70" class="ln"/>
      <path d="M240,44 L313,70" class="ln"/>
      <rect x="135" y="8" width="150" height="36" rx="10" class="f5 s5 sw"/>
      <text x="210" y="32" class="tx-b" text-anchor="middle">Części mowy</text>
      <rect x="15" y="70" width="185" height="175" rx="12" class="f1 s1 sw"/>
      <text x="107" y="96" class="tx-b t1" text-anchor="middle">ODMIENNE</text>
      <text x="107" y="120" class="tx" text-anchor="middle">rzeczownik</text>
      <text x="107" y="141" class="tx" text-anchor="middle">czasownik</text>
      <text x="107" y="162" class="tx" text-anchor="middle">przymiotnik</text>
      <text x="107" y="183" class="tx" text-anchor="middle">liczebnik</text>
      <text x="107" y="204" class="tx" text-anchor="middle">zaimek</text>
      <text x="107" y="232" class="tx-s" text-anchor="middle">kot → kota, kotu…</text>
      <rect x="220" y="70" width="185" height="175" rx="12" class="f2 s2 sw"/>
      <text x="312" y="96" class="tx-b t2" text-anchor="middle">NIEODMIENNE</text>
      <text x="312" y="120" class="tx" text-anchor="middle">przysłówek</text>
      <text x="312" y="141" class="tx" text-anchor="middle">przyimek</text>
      <text x="312" y="162" class="tx" text-anchor="middle">spójnik</text>
      <text x="312" y="183" class="tx" text-anchor="middle">partykuła</text>
      <text x="312" y="204" class="tx" text-anchor="middle">wykrzyknik</text>
      <text x="312" y="232" class="tx-s" text-anchor="middle">szybko, w, i – bez zmian</text>
    </svg>`,
    text: `<p>Każdy wyraz należy do jakiejś <b>części mowy</b>. Dzielimy je na dwie drużyny po pięć.</p>
      <p><b>Odmienne</b> zmieniają formę (kot, kota, kotu; czytam, czytasz). <b>Nieodmienne</b> zawsze wyglądają tak samo (szybko, w, i, ach).</p>
      <p>Na egzaminie przyda ci się to przy pisowni „nie” i przy rozpoznawaniu imiesłowów – zaczynamy od podstaw.</p>`,
    remember: 'Nieodmienne: <b>przysłówek, przyimek, spójnik, partykuła, wykrzyknik</b>. Cała reszta (rzeczownik, czasownik, przymiotnik, liczebnik, zaimek) się odmienia.',
    hook: 'W drużynie nieodmiennych są <b>trzy „P”</b> (przysłówek, przyimek, partykuła) + spójnik i wykrzyknik.',
    check: { q: 'Który wyraz jest nieodmienny?', options: ['dom', 'zielony', 'ale', 'trzy'], answer: 2, explain: '„Ale” to spójnik – nie ma innych form. Dom, zielony, trzy się odmieniają.' },
  },
  {
    title: 'Czasownik: tryby i aspekt',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy tryby czasownika i dwa aspekty">
      <defs><marker id="a-pl-cm-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="8" width="128" height="94" rx="12" class="f1 s1 sw"/>
      <text x="74" y="40" class="tx" text-anchor="middle" style="font-size:24px">🗣️</text>
      <text x="74" y="68" class="tx-b" text-anchor="middle">czytam</text>
      <text x="74" y="91" class="tx-s" text-anchor="middle">oznajmujący</text>
      <rect x="146" y="8" width="128" height="94" rx="12" class="f2 s2 sw"/>
      <text x="210" y="40" class="tx" text-anchor="middle" style="font-size:24px">👉</text>
      <text x="210" y="68" class="tx-b" text-anchor="middle">czytaj!</text>
      <text x="210" y="91" class="tx-s" text-anchor="middle">rozkazujący</text>
      <rect x="282" y="8" width="128" height="94" rx="12" class="f5 s5 sw"/>
      <text x="346" y="40" class="tx" text-anchor="middle" style="font-size:24px">🤔</text>
      <text x="346" y="68" class="tx-b" text-anchor="middle">czytałbym</text>
      <text x="346" y="91" class="tx-s" text-anchor="middle">przypuszczający</text>
      <text x="10" y="130" class="tx-s">ASPEKT – czy czynność się skończyła?</text>
      <text x="10" y="160" class="tx-b">pisać</text>
      <path d="M95,155 L280,155" class="ln dash" marker-end="url(#a-pl-cm-2)"/>
      <text x="295" y="160" class="tx t1">niedokonany</text>
      <text x="10" y="196" class="tx-b">napisać</text>
      <path d="M95,191 L255,191" class="ln sw"/>
      <text x="262" y="197" class="tx-b t3">✔</text>
      <text x="295" y="196" class="tx t3">dokonany</text>
    </svg>`,
    text: `<p>Czasownik ma trzy <b>tryby</b>: <b>oznajmujący</b> mówi, jak jest (czytam), <b>rozkazujący</b> wydaje polecenie (czytaj!), <b>przypuszczający</b> mówi, co by było (czytałbym, poszłabyś).</p>
      <p><b>Aspekt</b>: <b>niedokonany</b> – czynność trwa lub się powtarza (pisać), <b>dokonany</b> – czynność jest zakończona (napisać).</p>`,
    remember: 'Tryb przypuszczający rozpoznasz po cząstce <b>-by</b>: zrobiłbym, poszłabyś, czytałby.',
    hook: 'Aspekt dokonany = czynność „odhaczona” ✔ (napisać, przeczytać). Niedokonany = pasek ładowania, który jeszcze trwa (pisać, czytać).',
    check: { q: 'W jakim trybie jest czasownik „pomóż!”?', options: ['oznajmującym', 'rozkazującym', 'przypuszczającym'], answer: 1, explain: 'To polecenie, prośba – tryb rozkazujący.' },
  },
  {
    title: 'Kto działa? Strona czynna i bierna',
    svg: `<svg viewBox="0 0 420 212" role="img" aria-label="Schemat strony czynnej, biernej i formy bezosobowej">
      <defs><marker id="a-pl-cm-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="18" class="tx-s">strona czynna – podmiot działa</text>
      <rect x="15" y="28" width="95" height="40" rx="10" class="f3 s3 sw"/>
      <text x="62" y="54" class="tx-b" text-anchor="middle">Ania</text>
      <path d="M112,48 L288,48" class="ln" marker-end="url(#a-pl-cm-3)"/>
      <text x="200" y="40" class="tx" text-anchor="middle">napisała</text>
      <rect x="295" y="28" width="110" height="40" rx="10" class="f1 s1 sw"/>
      <text x="350" y="54" class="tx-b" text-anchor="middle">list</text>
      <text x="10" y="100" class="tx-s">strona bierna – podmiot doznaje czynności</text>
      <rect x="15" y="110" width="95" height="40" rx="10" class="f1 s1 sw"/>
      <text x="62" y="136" class="tx-b" text-anchor="middle">List</text>
      <path d="M293,130 L117,130" class="ln" marker-end="url(#a-pl-cm-3)"/>
      <text x="205" y="122" class="tx" text-anchor="middle">został napisany</text>
      <rect x="295" y="110" width="110" height="40" rx="10" class="f3 s3 sw"/>
      <text x="350" y="136" class="tx" text-anchor="middle">przez Anię</text>
      <line x1="10" y1="168" x2="410" y2="168" class="ln-thin"/>
      <text x="15" y="198" class="tx-b">Napisano list.</text>
      <text x="170" y="198" class="tx-s">forma bezosobowa – nie wiemy, kto</text>
    </svg>`,
    text: `<p><b>Strona czynna</b>: podmiot sam coś robi – <i>Ania napisała list.</i></p>
      <p><b>Strona bierna</b>: podmiot „dostaje” czynność od kogoś – <i>List został napisany przez Anię.</i> Wykonawcę dodajemy po słowie <b>przez</b>.</p>
      <p><b>Formy bezosobowe</b> w ogóle nie mówią, kto działa: końcówki <b>-no, -to</b> (<i>zrobiono, umyto</i>) albo <b>się</b> (<i>mówi się</i>).</p>`,
    remember: 'Bierna = <b>został/zostanie/jest + zrobiony</b> (+ przez kogo). Bezosobowa = <b>-no, -to, się</b>.',
    hook: 'Strona bierna jest „leniwa”: podmiot leży i czeka, aż ktoś coś z nim zrobi.',
    check: { q: 'Które zdanie jest w stronie biernej?', options: ['Kot złapał mysz.', 'Mysz została złapana przez kota.', 'Złapano mysz.', 'Kot łapie mysz.'], answer: 1, explain: '„Została złapana przez kota” – podmiot (mysz) doznaje czynności. „Złapano” to forma bezosobowa, nie strona bierna.' },
  },
  {
    title: 'Cztery imiesłowy – poznaj po końcówce',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Tabela czterech rodzajów imiesłowów z końcówkami i przykładami">
      <text x="107" y="20" class="tx-b t1" text-anchor="middle">PRZYMIOTNIKOWE</text>
      <text x="107" y="40" class="tx-s" text-anchor="middle">jak przymiotnik: jaki?</text>
      <text x="312" y="20" class="tx-b t2" text-anchor="middle">PRZYSŁÓWKOWE</text>
      <text x="312" y="40" class="tx-s" text-anchor="middle">jak przysłówek: kiedy? jak?</text>
      <rect x="10" y="50" width="195" height="85" rx="12" class="f1 s1 sw"/>
      <text x="107" y="70" class="tx-s" text-anchor="middle">czynny</text>
      <text x="107" y="98" class="tx-b t1" text-anchor="middle">-ący</text>
      <text x="107" y="123" class="tx" text-anchor="middle">czytający</text>
      <rect x="10" y="145" width="195" height="85" rx="12" class="f1 s1 sw"/>
      <text x="107" y="165" class="tx-s" text-anchor="middle">bierny</text>
      <text x="107" y="193" class="tx-b t1" text-anchor="middle">-ny, -ony, -ty</text>
      <text x="107" y="218" class="tx" text-anchor="middle">przeczytany, umyty</text>
      <rect x="215" y="50" width="195" height="85" rx="12" class="f2 s2 sw"/>
      <text x="312" y="70" class="tx-s" text-anchor="middle">współczesny</text>
      <text x="312" y="98" class="tx-b t2" text-anchor="middle">-ąc</text>
      <text x="312" y="123" class="tx" text-anchor="middle">czytając</text>
      <rect x="215" y="145" width="195" height="85" rx="12" class="f2 s2 sw"/>
      <text x="312" y="165" class="tx-s" text-anchor="middle">uprzedni</text>
      <text x="312" y="193" class="tx-b t2" text-anchor="middle">-łszy, -wszy</text>
      <text x="312" y="218" class="tx" text-anchor="middle">przeczytawszy</text>
    </svg>`,
    text: `<p><b>Imiesłowy</b> to formy utworzone od czasownika, które zachowują się jak przymiotnik albo jak przysłówek. Rozpoznasz je po końcówce.</p>
      <p>Przymiotnikowe: <i>czytający</i> chłopak, <i>umyty</i> talerz. Przysłówkowe: <i>czytając</i>, <i>zjadłszy</i>.</p>`,
    remember: '„Nie” z imiesłowami <b>przymiotnikowymi – razem</b> (niepalący, nieumyty), z <b>przysłówkowymi – osobno</b> (nie czytając, nie zjadłszy).',
    hook: 'Przymiotnikowy trzyma się „nie” jak przymiotnik (niemiły → <b>nie</b>palący). Przysłówkowy zachowuje się jak czasownik (nie wiem → nie wiedząc).',
    check: { q: 'Wyraz „ugotowany” to imiesłów…', options: ['przymiotnikowy czynny', 'przymiotnikowy bierny', 'przysłówkowy współczesny', 'przysłówkowy uprzedni'], answer: 1, explain: 'Końcówka -ny i pytanie „jaki?” (ugotowany obiad) – imiesłów przymiotnikowy bierny.' },
  },
  {
    title: 'Oś czasu: -ąc czy -wszy?',
    svg: `<svg viewBox="0 0 420 228" role="img" aria-label="Oś czasu: czynności równoczesne i następujące po sobie">
      <text x="10" y="20" class="tx-b t1">-ąc: w tym samym czasie</text>
      <rect x="20" y="32" width="300" height="24" rx="6" class="f1 s1"/>
      <text x="30" y="49" class="tx">idę do szkoły</text>
      <rect x="20" y="62" width="300" height="24" rx="6" class="f3 s3"/>
      <text x="30" y="79" class="tx">słucham muzyki</text>
      <text x="10" y="110" class="tx-s">Idąc do szkoły, słucham muzyki.</text>
      <line x1="10" y1="122" x2="410" y2="122" class="ln-thin"/>
      <text x="10" y="146" class="tx-b t2">-łszy, -wszy: jedno po drugim</text>
      <rect x="20" y="158" width="170" height="24" rx="6" class="f2 s2"/>
      <text x="30" y="175" class="tx">odrabiam lekcje</text>
      <rect x="200" y="188" width="200" height="24" rx="6" class="f3 s3"/>
      <text x="210" y="205" class="tx">trening</text>
      <text x="10" y="224" class="tx-s">Odrobiwszy lekcje, poszedłem na trening.</text>
    </svg>`,
    text: `<p><b>Imiesłów współczesny (-ąc)</b>: dwie czynności dzieją się <b>równocześnie</b> – <i>Idąc do szkoły, słucham muzyki.</i></p>
      <p><b>Imiesłów uprzedni (-łszy, -wszy)</b>: jedna czynność jest <b>skończona przed</b> drugą – <i>Odrobiwszy lekcje, poszedłem na trening.</i></p>`,
    remember: '-ąc = <b>w tym samym czasie</b>. -łszy / -wszy = <b>najpierw to, potem tamto</b>.',
    hook: '-<b>wszy</b> brzmi jak „po <b>wszy</b>stkim” – czynność już skończona.',
    check: { q: 'Który imiesłów mówi, że czynność skończyła się PRZED inną?', options: ['śpiewając', 'zaśpiewawszy', 'śpiewający', 'zaśpiewany'], answer: 1, explain: 'Końcówka -wszy to imiesłów przysłówkowy uprzedni.' },
  },
  {
    title: 'Pułapka: imiesłowowy równoważnik zdania',
    svg: `<svg viewBox="0 0 420 228" role="img" aria-label="Porównanie poprawnego i błędnego imiesłowowego równoważnika zdania">
      <rect x="10" y="8" width="400" height="100" rx="12" class="f3 s3 sw"/>
      <text x="22" y="34" class="tx">Jadąc tramwajem, patrzyłem na deszcz.</text>
      <text x="22" y="64" class="tx-s">Kto jechał? Ja. Kto patrzył? Też ja.</text>
      <text x="22" y="94" class="tx-b t3">✔ ta sama osoba – poprawnie</text>
      <rect x="10" y="120" width="400" height="100" rx="12" class="f2 s2 sw"/>
      <text x="22" y="146" class="tx">Jadąc tramwajem, padał deszcz.</text>
      <text x="22" y="176" class="tx-s">Kto jechał? Wychodzi, że… deszcz! 🤨</text>
      <text x="22" y="206" class="tx-b t2">✘ różne osoby – błąd</text>
    </svg>`,
    text: `<p><b>Imiesłowowy równoważnik zdania</b> to fragment z imiesłowem przysłówkowym: <i><b>Wróciwszy do domu,</b> zjadłem obiad.</i> Można go zamienić na zdanie: <i>Kiedy wróciłem do domu, zjadłem obiad.</i></p>
      <p>Jest poprawny tylko wtedy, gdy <b>obie czynności wykonuje ta sama osoba</b>. Zawsze oddzielamy go <b>przecinkiem</b>.</p>`,
    remember: 'Test: zapytaj „kto?” przy imiesłowie i przy orzeczeniu. Ta sama odpowiedź = dobrze. Różne = błąd.',
    hook: 'Jeśli po zamianie wychodzi, że deszcz jedzie tramwajem, a telefon czyta książkę – zdanie jest złe.',
    check: { q: 'Które zdanie jest POPRAWNE?', options: ['Pisząc wypracowanie, zgasło światło.', 'Pisząc wypracowanie, sprawdzałem słownik.', 'Wszedłszy do klasy, zadzwonił dzwonek.', 'Wracając ze szkoły, zaczął padać śnieg.'], answer: 1, explain: 'Tylko tu ta sama osoba (ja) pisze i sprawdza. W pozostałych światło „pisze”, dzwonek „wchodzi”, a śnieg „wraca”.' },
  },
];

/* ===================== SKŁADNIA ===================== */
window.LESSONS['polski/skladnia'] = [
  {
    title: 'Zdanie czy równoważnik?',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Porównanie zdania z orzeczeniem i równoważnika zdania bez czasownika">
      <rect x="10" y="10" width="195" height="150" rx="14" class="f3 s3 sw"/>
      <text x="107" y="50" class="tx-b" text-anchor="middle">Pada deszcz.</text>
      <text x="107" y="84" class="tx-s" text-anchor="middle">jest orzeczenie:</text>
      <text x="107" y="104" class="tx-b t3" text-anchor="middle">pada ✔</text>
      <text x="107" y="142" class="tx-b t3" text-anchor="middle">ZDANIE</text>
      <rect x="215" y="10" width="195" height="150" rx="14" class="f2 s2 sw"/>
      <text x="312" y="50" class="tx-b" text-anchor="middle">Cisza w lesie.</text>
      <text x="312" y="84" class="tx-s" text-anchor="middle">brak osobowej formy</text>
      <text x="312" y="104" class="tx-s" text-anchor="middle">czasownika ✘</text>
      <text x="312" y="142" class="tx-b t2" text-anchor="middle">RÓWNOWAŻNIK</text>
    </svg>`,
    text: `<p>Każde wypowiedzenie to albo <b>zdanie</b>, albo <b>równoważnik zdania</b>. Różnica jest jedna: czy jest <b>osobowa forma czasownika</b> (orzeczenie).</p>
      <p>„Pada deszcz.” – jest <i>pada</i>, więc to zdanie. „Cisza w lesie.”, „Zakaz wjazdu.” – brak czasownika w formie osobowej, więc to równoważniki.</p>`,
    remember: 'Szukaj czasownika, który mówi, <b>kto</b> działa (pada, idę, czytaliśmy). Jest – zdanie. Brak – równoważnik.',
    hook: 'Równoważnik to zdanie „bez silnika” – stoi w miejscu, bo nie ma czasownika.',
    check: { q: 'Które wypowiedzenie jest równoważnikiem zdania?', options: ['Uwaga, zły pies!', 'Pies szczeka.', 'Idę na spacer.', 'Pada śnieg.'], answer: 0, explain: 'W „Uwaga, zły pies!” nie ma osobowej formy czasownika.' },
  },
  {
    title: 'Części zdania – każdy ma swoje pytanie',
    svg: `<svg viewBox="0 0 420 224" role="img" aria-label="Rozbiór zdania na części: podmiot, orzeczenie, przydawka, dopełnienie, okolicznik">
      <text x="210" y="22" class="tx" text-anchor="middle">Mój brat czyta ciekawą książkę w parku.</text>
      <rect x="10" y="38" width="400" height="30" rx="8" class="f1"/>
      <text x="20" y="59" class="tx-b">brat</text>
      <text x="150" y="59" class="tx">kto?</text>
      <text x="285" y="59" class="tx-b t1">podmiot</text>
      <rect x="10" y="74" width="400" height="30" rx="8" class="f2"/>
      <text x="20" y="95" class="tx-b">czyta</text>
      <text x="150" y="95" class="tx">co robi?</text>
      <text x="285" y="95" class="tx-b t2">orzeczenie</text>
      <rect x="10" y="110" width="400" height="30" rx="8" class="f3"/>
      <text x="20" y="131" class="tx-b">mój, ciekawą</text>
      <text x="150" y="131" class="tx">czyj? jaką?</text>
      <text x="285" y="131" class="tx-b t3">przydawka</text>
      <rect x="10" y="146" width="400" height="30" rx="8" class="f4"/>
      <text x="20" y="167" class="tx-b">książkę</text>
      <text x="150" y="167" class="tx">(czyta) co?</text>
      <text x="285" y="167" class="tx-b t4">dopełnienie</text>
      <rect x="10" y="182" width="400" height="30" rx="8" class="f5"/>
      <text x="20" y="203" class="tx-b">w parku</text>
      <text x="150" y="203" class="tx">gdzie?</text>
      <text x="285" y="203" class="tx-b t5">okolicznik</text>
    </svg>`,
    text: `<p>Części zdania rozpoznajesz <b>pytaniami</b>. Zaczynaj od orzeczenia (czasownika), potem pytaj o resztę.</p>
      <ul><li><b>podmiot</b> – kto? co?</li><li><b>orzeczenie</b> – co robi? co się z nim dzieje?</li><li><b>przydawka</b> – jaki? czyj? który? (określa rzeczownik)</li><li><b>dopełnienie</b> – pytania przypadków oprócz mianownika (kogo? czego? co? o czym?)</li><li><b>okolicznik</b> – gdzie? kiedy? jak? dlaczego?</li></ul>`,
    hook: '<b>P</b>rzydawka <b>P</b>rzylepia się do rzeczownika (jaka książka? ciekawa). <b>O</b>kolicznik opowiada o <b>O</b>kolicznościach (gdzie, kiedy, jak).',
    check: { q: '„Wczoraj Ola zgubiła klucze.” Czym jest wyraz „wczoraj”?', options: ['podmiotem', 'przydawką', 'dopełnieniem', 'okolicznikiem'], answer: 3, explain: 'Zgubiła kiedy? – wczoraj. Pytanie „kiedy?” to okolicznik (czasu).' },
  },
  {
    title: 'Zdania współrzędne – równi partnerzy',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Wykres zdania współrzędnego i cztery rodzaje zdań współrzędnych ze spójnikami">
      <rect x="10" y="10" width="120" height="40" rx="10" class="f1 s1 sw"/>
      <text x="70" y="36" class="tx" text-anchor="middle">Padało,</text>
      <line x1="130" y1="36" x2="230" y2="36" class="ln sw"/>
      <text x="180" y="28" class="tx-b t2" text-anchor="middle">więc</text>
      <rect x="230" y="10" width="180" height="40" rx="10" class="f1 s1 sw"/>
      <text x="320" y="36" class="tx" text-anchor="middle">zostaliśmy w domu.</text>
      <text x="210" y="72" class="tx-s" text-anchor="middle">zdania na tym samym poziomie</text>
      <rect x="10" y="84" width="195" height="66" rx="12" class="f3 s3"/>
      <text x="22" y="110" class="tx-b t3">➕ łączne</text>
      <text x="22" y="137" class="tx">i, oraz, a, ani, ni</text>
      <rect x="215" y="84" width="195" height="66" rx="12" class="f5 s5"/>
      <text x="227" y="110" class="tx-b t5">🔀 rozłączne</text>
      <text x="227" y="137" class="tx">lub, albo, czy</text>
      <rect x="10" y="158" width="195" height="66" rx="12" class="f2 s2"/>
      <text x="22" y="184" class="tx-b t2">↔ przeciwstawne</text>
      <text x="22" y="211" class="tx">ale, lecz, jednak, a</text>
      <rect x="215" y="158" width="195" height="66" rx="12" class="f4 s4"/>
      <text x="227" y="184" class="tx-b t4">⇒ wynikowe</text>
      <text x="227" y="211" class="tx">więc, zatem, dlatego</text>
    </svg>`,
    text: `<p>W zdaniu złożonym <b>współrzędnie</b> oba zdania są równie ważne – żadne nie zależy od drugiego. Na wykresie rysujemy je obok siebie i łączymy linią ze spójnikiem.</p>
      <p>Rodzaj poznasz po spójniku: <i>i</i> dodaje, <i>albo</i> daje wybór, <i>ale</i> przeciwstawia, <i>więc</i> pokazuje skutek.</p>`,
    remember: 'Przecinek <b>stawiamy</b> przed: ale, lecz, więc, dlatego. <b>Nie stawiamy</b> przed pojedynczym: i, oraz, lub, albo.',
    hook: 'Wynikowe to „przyczyna ⇒ skutek”: <i>Padało, <b>więc</b> zostaliśmy w domu.</i> Zapytaj: „co z tego wynikło?”',
    check: { q: '„Lubię lato, ale wolę wiosnę.” – to zdanie złożone współrzędnie…', options: ['łączne', 'rozłączne', 'przeciwstawne', 'wynikowe'], answer: 2, explain: 'Spójnik „ale” przeciwstawia dwie myśli.' },
  },
  {
    title: 'Zdania podrzędne – szef i pomocnik',
    svg: `<svg viewBox="0 0 420 262" role="img" aria-label="Wykres zdania złożonego podrzędnie i pytania do pięciu rodzajów zdań podrzędnych">
      <defs><marker id="a-pl-skl-4" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="60" y="8" width="150" height="38" rx="10" class="f1 s1 sw"/>
      <text x="135" y="33" class="tx-b" text-anchor="middle">Wiem,</text>
      <text x="245" y="32" class="tx-s">zdanie nadrzędne</text>
      <path d="M135,46 L135,88" class="ln" marker-end="url(#a-pl-skl-4)"/>
      <text x="145" y="74" class="tx-b t2">co?</text>
      <rect x="40" y="92" width="190" height="38" rx="10" class="f2 s2 sw"/>
      <text x="135" y="117" class="tx" text-anchor="middle">że masz rację.</text>
      <text x="245" y="106" class="tx-s">zdanie podrzędne</text>
      <text x="245" y="126" class="tx-b t2">dopełnieniowe</text>
      <line x1="10" y1="142" x2="410" y2="142" class="ln-thin"/>
      <text x="10" y="164" class="tx-b">podmiotowe</text>
      <text x="150" y="164" class="tx">kto? co?</text>
      <text x="10" y="187" class="tx-b">orzecznikowe</text>
      <text x="150" y="187" class="tx">kim jest? jaki jest?</text>
      <text x="10" y="210" class="tx-b">przydawkowe</text>
      <text x="150" y="210" class="tx">jaki? który? czyj?</text>
      <text x="10" y="233" class="tx-b">dopełnieniowe</text>
      <text x="150" y="233" class="tx">kogo? czego? co? o czym?</text>
      <text x="10" y="256" class="tx-b">okolicznikowe</text>
      <text x="150" y="256" class="tx">gdzie? kiedy? dlaczego?…</text>
    </svg>`,
    text: `<p>W zdaniu złożonym <b>podrzędnie</b> jedno zdanie jest „szefem” (<b>nadrzędne</b>), a drugie je uzupełnia (<b>podrzędne</b>). Na wykresie podrzędne rysujemy niżej i łączymy strzałką z pytaniem.</p>
      <p>Jak nazwać podrzędne? Zadaj pytanie <b>od nadrzędnego do podrzędnego</b>: <i>Wiem</i> co? – <i>że masz rację</i>. Pytanie przypadka (co?) → dopełnieniowe.</p>
      <p>Przykłady: <i>Kto pyta, nie błądzi</i> (podmiotowe), <i>Kiedy wróciłem, wszyscy spali</i> (okolicznikowe czasu).</p>`,
    remember: 'Nazwa zdania podrzędnego = nazwa części zdania, którą ono zastępuje. Pytanie decyduje o nazwie.',
    hook: 'Spójnik nie zawsze podpowiada rodzaj („że”, „kiedy” bywają w różnych zdaniach). Zawsze ufaj <b>pytaniu</b>, nie spójnikowi.',
    check: { q: '„Chłopak, który siedzi obok mnie, gra w szachy.” – jakie to zdanie podrzędne?', options: ['przydawkowe', 'dopełnieniowe', 'podmiotowe', 'okolicznikowe czasu'], answer: 0, explain: 'Chłopak który? – który siedzi obok mnie. Określa rzeczownik, więc to zdanie przydawkowe.' },
  },
  {
    title: 'Wielokrotnie złożone – policz orzeczenia',
    svg: `<svg viewBox="0 0 420 196" role="img" aria-label="Wykres wypowiedzenia wielokrotnie złożonego z trzech zdań">
      <defs><marker id="a-pl-skl-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="15" width="190" height="40" rx="10" class="f1 s1 sw"/>
      <text x="100" y="41" class="tx" text-anchor="middle">Mama gotowała obiad,</text>
      <line x1="195" y1="35" x2="225" y2="35" class="ln sw"/>
      <text x="210" y="28" class="tx-b t2" text-anchor="middle">a</text>
      <rect x="225" y="15" width="190" height="40" rx="10" class="f1 s1 sw"/>
      <text x="320" y="41" class="tx" text-anchor="middle">tata czytał gazetę,</text>
      <path d="M320,55 L320,103" class="ln" marker-end="url(#a-pl-skl-5)"/>
      <text x="330" y="85" class="tx-b t2">którą?</text>
      <rect x="225" y="107" width="190" height="40" rx="10" class="f2 s2 sw"/>
      <text x="320" y="133" class="tx" text-anchor="middle">którą kupił rano.</text>
      <text x="10" y="85" class="tx-s">1 i 2 – współrzędne</text>
      <text x="10" y="107" class="tx-s">3 – podrzędne (przydawkowe)</text>
      <text x="10" y="183" class="tx">gotowała · czytał · kupił → <tspan class="tx-b t2">3 zdania</tspan></text>
    </svg>`,
    text: `<p><b>Wypowiedzenie wielokrotnie złożone</b> ma co najmniej <b>trzy</b> zdania składowe. Mogą być w nim połączenia współrzędne i podrzędne naraz.</p>
      <p>Ile zdań? Tyle, ile <b>orzeczeń</b>: <i>Kiedy wróciłem do domu, mama gotowała obiad, a tata czytał gazetę</i> – wróciłem, gotowała, czytał → trzy zdania.</p>`,
    remember: 'Przecinek zawsze przed: <b>że, który, ponieważ, ale, lecz, więc, dlatego</b>. Przed pojedynczym <b>i, oraz, lub, albo</b> – nie.',
    hook: 'Liczenie zdań = polowanie na czasowniki osobowe. Zakreśl je kółkiem, a potem policz kółka.',
    check: { q: 'Ile zdań składowych ma wypowiedzenie: „Wiem, że przyjdziesz, bo obiecałeś.”?', options: ['jedno', 'dwa', 'trzy', 'cztery'], answer: 2, explain: 'Trzy orzeczenia: wiem, przyjdziesz, obiecałeś.' },
  },
  {
    title: 'Mowa niezależna i zależna',
    svg: `<svg viewBox="0 0 420 216" role="img" aria-label="Zamiana mowy niezależnej na zależną">
      <defs><marker id="a-pl-skl-6" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="18" class="tx-s">MOWA NIEZALEŻNA – dosłownie, w cudzysłowie</text>
      <text x="14" y="62" class="tx" style="font-size:30px">👧</text>
      <rect x="60" y="28" width="300" height="46" rx="16" class="f1 s1 sw"/>
      <text x="210" y="57" class="tx" text-anchor="middle">Kasia: „Mam dziś trening.”</text>
      <path d="M210,78 L210,118" class="ln" marker-end="url(#a-pl-skl-6)"/>
      <text x="222" y="103" class="tx-s">przekazujesz własnymi słowami</text>
      <text x="10" y="138" class="tx-s">MOWA ZALEŻNA</text>
      <rect x="10" y="145" width="400" height="44" rx="12" class="f3 s3 sw"/>
      <text x="210" y="173" class="tx" text-anchor="middle">Kasia powiedziała, <tspan class="tx-b t2">że ma</tspan> dziś trening.</text>
      <text x="10" y="210" class="tx-s">„ ” → że · mam → ma (zmienia się osoba)</text>
    </svg>`,
    text: `<p><b>Mowa niezależna</b> – cytujesz czyjeś słowa dokładnie, w cudzysłowie: <i>Kasia powiedziała: „Mam dziś trening.”</i></p>
      <p><b>Mowa zależna</b> – przekazujesz je po swojemu: <i>Kasia powiedziała, że ma dziś trening.</i> Cudzysłów zastępuje spójnik (<b>że, czy, żeby</b>), a czasownik i zaimki zmieniają osobę.</p>`,
    remember: 'Przy zamianie: <b>usuń cudzysłów</b>, dodaj <b>że / czy / żeby</b>, zmień <b>osobę</b> (ja → on/ona).',
    hook: 'Mowa zależna to „plotka”: nie cytujesz koleżanki, tylko opowiadasz, <b>co</b> powiedziała.',
    check: { q: 'Marek powiedział: „Jestem głodny.” Jak to zapisać w mowie zależnej?', options: ['Marek powiedział, że jest głodny.', 'Marek powiedział, że jestem głodny.', 'Marek powiedział: jest głodny.', 'Marek powiedział, jestem głodny.'], answer: 0, explain: 'Usuwamy cudzysłów, dodajemy „że” i zmieniamy osobę: jestem → jest.' },
  },
];

/* ===================== SŁOWOTWÓRSTWO ===================== */
window.LESSONS['polski/slowotworstwo'] = [
  {
    title: 'Skąd się biorą nowe słowa?',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Wyrazy podstawowe i utworzone od nich wyrazy pochodne">
      <defs><marker id="a-pl-sl-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="75" y="18" class="tx-s" text-anchor="middle">wyraz podstawowy</text>
      <text x="330" y="18" class="tx-s" text-anchor="middle">wyraz pochodny</text>
      <rect x="20" y="30" width="110" height="38" rx="10" class="f1 s1 sw"/>
      <text x="75" y="55" class="tx-b" text-anchor="middle">dom</text>
      <path d="M134,49 L252,49" class="ln" marker-end="url(#a-pl-sl-1)"/>
      <text x="193" y="42" class="tx-b t2" text-anchor="middle">+ -ek</text>
      <rect x="260" y="30" width="140" height="38" rx="10" class="f2 s2 sw"/>
      <text x="330" y="55" class="tx-b" text-anchor="middle">domek</text>
      <rect x="20" y="80" width="110" height="38" rx="10" class="f1 s1 sw"/>
      <text x="75" y="105" class="tx-b" text-anchor="middle">pisać</text>
      <path d="M134,99 L252,99" class="ln" marker-end="url(#a-pl-sl-1)"/>
      <text x="193" y="92" class="tx-b t2" text-anchor="middle">prze- +</text>
      <rect x="260" y="80" width="140" height="38" rx="10" class="f2 s2 sw"/>
      <text x="330" y="105" class="tx-b" text-anchor="middle">przepisać</text>
      <rect x="20" y="130" width="110" height="38" rx="10" class="f1 s1 sw"/>
      <text x="75" y="155" class="tx-b" text-anchor="middle">piec</text>
      <path d="M134,149 L252,149" class="ln" marker-end="url(#a-pl-sl-1)"/>
      <text x="193" y="142" class="tx-b t2" text-anchor="middle">+ -arz</text>
      <rect x="260" y="130" width="140" height="38" rx="10" class="f2 s2 sw"/>
      <text x="330" y="155" class="tx-b" text-anchor="middle">piekarz</text>
    </svg>`,
    text: `<p>Wiele słów powstaje z innych słów. <b>Wyraz podstawowy</b> to ten, od którego tworzymy nowy (<i>dom</i>). <b>Wyraz pochodny</b> to ten nowy (<i>domek</i>).</p>
      <p>Jak sprawdzić, który jest podstawowy? Wyjaśnij znaczenie pochodnego: <i>domek</i> = mały <b>dom</b>, <i>piekarz</i> = ten, kto <b>piecze</b>.</p>`,
    remember: 'Wyraz podstawowy „wyskakuje” w definicji wyrazu pochodnego: domek = mały <b>dom</b>.',
    hook: 'Wyraz podstawowy to „rodzic”, a pochodny to „dziecko” – dziecko zawsze ma w sobie coś z rodzica.',
    check: { q: 'Jaki jest wyraz podstawowy dla wyrazu „lisek”?', options: ['lisi', 'lis', 'lisica', 'lisek'], answer: 1, explain: 'Lisek = mały lis.' },
  },
  {
    title: 'Klocki: podstawa + formant',
    svg: `<svg viewBox="0 0 420 196" role="img" aria-label="Wyrazy domek i piekarz rozłożone na podstawę słowotwórczą i formant">
      <rect x="40" y="16" width="90" height="46" rx="8" class="f1 s1 sw"/>
      <text x="85" y="46" class="tx-b" text-anchor="middle">dom</text>
      <rect x="130" y="16" width="60" height="46" rx="8" class="f2 s2 sw"/>
      <text x="160" y="46" class="tx-b" text-anchor="middle">ek</text>
      <text x="210" y="46" class="tx">= mały dom</text>
      <rect x="40" y="86" width="100" height="46" rx="8" class="f1 s1 sw"/>
      <text x="90" y="116" class="tx-b" text-anchor="middle">piek</text>
      <rect x="140" y="86" width="70" height="46" rx="8" class="f2 s2 sw"/>
      <text x="175" y="116" class="tx-b" text-anchor="middle">arz</text>
      <text x="228" y="116" class="tx">= ten, kto piecze</text>
      <rect x="20" y="164" width="18" height="18" rx="4" class="f1 s1"/>
      <text x="46" y="179" class="tx">podstawa słowotwórcza</text>
      <rect x="260" y="164" width="18" height="18" rx="4" class="f2 s2"/>
      <text x="286" y="179" class="tx">formant</text>
    </svg>`,
    text: `<p>Wyraz pochodny składa się z dwóch klocków:</p>
      <ul><li><b>podstawa słowotwórcza</b> – część wspólna z wyrazem podstawowym (<i>dom-</i>),</li><li><b>formant</b> – cząstka, która tworzy nowy wyraz (<i>-ek</i>).</li></ul>
      <p>Uwaga: w podstawie głoski mogą się wymieniać – <i>piec → piek-arz</i> (c wymienia się na k).</p>`,
    remember: '<b>Wyraz pochodny = podstawa słowotwórcza + formant.</b>',
    hook: 'Formant to „przycisk funkcji”: -ek robi zdrobnienie (kotek), -arz robi wykonawcę czynności (piekarz, pisarz).',
    check: { q: 'Jaka jest podstawa słowotwórcza wyrazu „ogrodnik”?', options: ['ogrod-', '-nik', 'ogród', 'ogrodnik'], answer: 0, explain: 'Ogrodnik ← ogród. Część wspólna to „ogrod-” (ó wymienia się na o), a „-nik” to formant.' },
  },
  {
    title: 'Gdzie stoi formant?',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Trzy położenia formantu: przedrostek, przyrostek, przedrostek i przyrostek">
      <text x="10" y="33" class="tx-b t2">przedrostek</text>
      <text x="10" y="53" class="tx-s">przed podstawą</text>
      <rect x="200" y="15" width="60" height="40" rx="8" class="f2 s2 sw"/>
      <text x="230" y="41" class="tx-b" text-anchor="middle">prze</text>
      <rect x="260" y="15" width="80" height="40" rx="8" class="f1 s1 sw"/>
      <text x="300" y="41" class="tx-b" text-anchor="middle">pisać</text>
      <text x="10" y="103" class="tx-b t2">przyrostek</text>
      <text x="10" y="123" class="tx-s">po podstawie</text>
      <rect x="200" y="85" width="60" height="40" rx="8" class="f1 s1 sw"/>
      <text x="230" y="111" class="tx-b" text-anchor="middle">dom</text>
      <rect x="260" y="85" width="44" height="40" rx="8" class="f2 s2 sw"/>
      <text x="282" y="111" class="tx-b" text-anchor="middle">ek</text>
      <text x="10" y="173" class="tx-b t2">przedrostek</text>
      <text x="10" y="193" class="tx-s">+ przyrostek (przed i po)</text>
      <rect x="200" y="155" width="50" height="40" rx="8" class="f2 s2 sw"/>
      <text x="225" y="181" class="tx-b" text-anchor="middle">pod</text>
      <rect x="250" y="155" width="70" height="40" rx="8" class="f1 s1 sw"/>
      <text x="285" y="181" class="tx-b" text-anchor="middle">okien</text>
      <rect x="320" y="155" width="50" height="40" rx="8" class="f2 s2 sw"/>
      <text x="345" y="181" class="tx-b" text-anchor="middle">nik</text>
    </svg>`,
    text: `<p>Formant może stać w różnych miejscach:</p>
      <ul><li><b>przedrostek</b> – przed podstawą: <i>prze-pisać, do-pisać</i>,</li><li><b>przyrostek</b> – po podstawie: <i>dom-ek, piek-arz</i>,</li><li><b>przedrostek + przyrostek</b> – z obu stron naraz: <i>pod-okien-nik</i> (to, co jest pod oknem).</li></ul>`,
    remember: 'Pomarańczowe klocki to formant: <b>przed</b> (przedrostek), <b>za</b> (przyrostek) albo <b>z obu stron</b>.',
    hook: '<b>Przed</b>rostek rośnie <b>przed</b>, <b>przy</b>rostek <b>przy</b>czepia się na końcu.',
    check: { q: 'Który wyraz utworzono za pomocą przedrostka?', options: ['domek', 'pisarz', 'dopisać', 'kotek'], answer: 2, explain: 'Do-pisać ← pisać. Cząstka „do-” stoi przed podstawą.' },
  },
  {
    title: 'Rodzina wyrazów i rdzeń',
    svg: `<svg viewBox="0 0 420 216" role="img" aria-label="Rodzina wyrazu las wokół wspólnego rdzenia; lis nie należy do rodziny">
      <line x1="210" y1="108" x2="90" y2="37" class="ln-thin"/>
      <line x1="210" y1="108" x2="330" y2="37" class="ln-thin"/>
      <line x1="210" y1="108" x2="55" y2="112" class="ln-thin"/>
      <line x1="210" y1="108" x2="362" y2="112" class="ln-thin"/>
      <line x1="210" y1="108" x2="95" y2="187" class="ln-thin"/>
      <rect x="40" y="20" width="100" height="34" rx="17" class="f1 s1"/>
      <text x="90" y="43" class="tx" text-anchor="middle">lasek</text>
      <rect x="280" y="20" width="100" height="34" rx="17" class="f1 s1"/>
      <text x="330" y="43" class="tx" text-anchor="middle">leśnik</text>
      <rect x="10" y="95" width="90" height="34" rx="17" class="f1 s1"/>
      <text x="55" y="118" class="tx" text-anchor="middle">leśny</text>
      <rect x="315" y="95" width="95" height="34" rx="17" class="f1 s1"/>
      <text x="362" y="118" class="tx" text-anchor="middle">zalesić</text>
      <rect x="40" y="170" width="110" height="34" rx="17" class="f1 s1"/>
      <text x="95" y="193" class="tx" text-anchor="middle">leśniczy</text>
      <circle cx="210" cy="108" r="52" class="f4 s4 sw"/>
      <text x="210" y="105" class="tx-b" text-anchor="middle">las</text>
      <text x="210" y="126" class="tx-s" text-anchor="middle">las-/leś-/les-</text>
      <rect x="280" y="170" width="100" height="34" rx="17" class="f2 s2 dash"/>
      <text x="330" y="193" class="tx t2" text-anchor="middle">lis ✘</text>
    </svg>`,
    text: `<p><b>Rodzina wyrazów</b> to wyrazy, które mają wspólny <b>rdzeń</b> – najmniejszą część, która łączy je znaczeniem: <i>las, lasek, leśnik, leśny, zalesić</i>.</p>
      <p>Rdzeń może się trochę zmieniać (las – leś – les), ale znaczenie zostaje: wszystkie te słowa mówią o lesie.</p>`,
    remember: 'Wyraz należy do rodziny tylko wtedy, gdy ma <b>wspólny rdzeń i wspólne znaczenie</b>. Samo podobieństwo liter nie wystarczy.',
    hook: '<i>Lis</i> mieszka w lesie, ale do rodziny „lasu” nie należy – to tylko sąsiad, nie krewny!',
    check: { q: 'Który wyraz należy do rodziny wyrazu „woda”?', options: ['wada', 'wodny', 'wata', 'wazon'], answer: 1, explain: 'Wodny = związany z wodą, ma wspólny rdzeń „wod-”.' },
  },
  {
    title: 'Wyrazy złożone: złożenie, zrost, zestawienie',
    svg: `<svg viewBox="0 0 420 226" role="img" aria-label="Złożenie długopis, zrost Wielkanoc i zestawienie maszyna do szycia">
      <text x="10" y="41" class="tx-b t1">złożenie</text>
      <rect x="140" y="15" width="60" height="40" rx="8" class="f1 s1 sw"/>
      <text x="170" y="41" class="tx-b" text-anchor="middle">dług</text>
      <rect x="200" y="15" width="28" height="40" rx="6" class="f4 s4 sw"/>
      <text x="214" y="41" class="tx-b t4" text-anchor="middle">o</text>
      <rect x="228" y="15" width="45" height="40" rx="8" class="f1 s1 sw"/>
      <text x="250" y="41" class="tx-b" text-anchor="middle">pis</text>
      <text x="285" y="41" class="tx">= długopis</text>
      <text x="214" y="72" class="tx-s t4" text-anchor="middle">wrostek</text>
      <text x="10" y="111" class="tx-b t3">zrost</text>
      <rect x="140" y="85" width="75" height="40" rx="8" class="f3 s3 sw"/>
      <text x="177" y="111" class="tx-b" text-anchor="middle">Wielka</text>
      <rect x="215" y="85" width="50" height="40" rx="8" class="f3 s3 sw"/>
      <text x="240" y="111" class="tx-b" text-anchor="middle">noc</text>
      <text x="280" y="111" class="tx">= Wielkanoc</text>
      <text x="10" y="181" class="tx-b t5">zestawienie</text>
      <rect x="130" y="155" width="88" height="40" rx="8" class="f5 s5 sw"/>
      <text x="174" y="181" class="tx-b" text-anchor="middle">maszyna</text>
      <rect x="226" y="155" width="36" height="40" rx="8" class="f5 s5 sw"/>
      <text x="244" y="181" class="tx-b" text-anchor="middle">do</text>
      <rect x="270" y="155" width="75" height="40" rx="8" class="f5 s5 sw"/>
      <text x="307" y="181" class="tx-b" text-anchor="middle">szycia</text>
      <path d="M130,202 L130,208 L345,208 L345,202" class="ln-thin"/>
      <text x="237" y="223" class="tx-s" text-anchor="middle">jedno znaczenie</text>
    </svg>`,
    text: `<p>Wyrazy złożone powstają z <b>kilku</b> wyrazów:</p>
      <ul><li><b>złożenie</b> – połączone wrostkiem <b>-o-, -i-, -y-</b>: <i>długopis, językoznawca</i>,</li><li><b>zrost</b> – wyrazy zrośnięte bez zmian: <i>Wielkanoc, dobranoc</i>,</li><li><b>zestawienie</b> – osobne wyrazy, które razem znaczą jedną rzecz: <i>maszyna do szycia</i>.</li></ul>`,
    remember: 'Złożenie = jest <b>wrostek</b>. Zrost = <b>sklejone</b> bez wrostka. Zestawienie = <b>osobno</b> zapisane.',
    hook: 'Zrost jak <b>zrośnięte</b> drzewa – dwa pnie w jednym bez żadnego łącznika.',
    check: { q: 'Wyraz „wodospad” to…', options: ['złożenie', 'zrost', 'zestawienie'], answer: 0, explain: 'Wod-o-spad: dwa wyrazy połączone wrostkiem -o-.' },
  },
  {
    title: 'Rozbiór słowotwórczy w 4 krokach',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Cztery kroki rozbioru słowotwórczego wyrazu pisarz">
      <defs><marker id="a-pl-sl-6" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="28" cy="25" r="15" class="f5 s5"/><text x="28" y="31" class="tx-b" text-anchor="middle">1</text>
      <rect x="55" y="8" width="340" height="34" rx="10" class="f1 s1"/>
      <text x="70" y="31" class="tx"><tspan class="tx-b">pisarz</tspan> – co to znaczy?</text>
      <path d="M225,42 L225,57" class="ln" marker-end="url(#a-pl-sl-6)"/>
      <circle cx="28" cy="77" r="15" class="f5 s5"/><text x="28" y="83" class="tx-b" text-anchor="middle">2</text>
      <rect x="55" y="60" width="340" height="34" rx="10" class="f1 s1"/>
      <text x="70" y="83" class="tx">„ten, kto <tspan class="tx-b">pisze</tspan>”</text>
      <path d="M225,94 L225,109" class="ln" marker-end="url(#a-pl-sl-6)"/>
      <circle cx="28" cy="129" r="15" class="f5 s5"/><text x="28" y="135" class="tx-b" text-anchor="middle">3</text>
      <rect x="55" y="112" width="340" height="34" rx="10" class="f1 s1"/>
      <text x="70" y="135" class="tx">wyraz podstawowy: <tspan class="tx-b">pisać</tspan></text>
      <path d="M225,146 L225,161" class="ln" marker-end="url(#a-pl-sl-6)"/>
      <circle cx="28" cy="181" r="15" class="f5 s5"/><text x="28" y="187" class="tx-b" text-anchor="middle">4</text>
      <rect x="55" y="164" width="340" height="34" rx="10" class="f4 s4"/>
      <text x="70" y="187" class="tx"><tspan class="tx-b t1">pis-</tspan> podstawa + <tspan class="tx-b t2">-arz</tspan> formant</text>
    </svg>`,
    text: `<p>Na egzaminie często trzeba rozłożyć wyraz na części. Rób to zawsze tak samo:</p>
      <ul><li>1. Wyjaśnij znaczenie wyrazu (definicja słowotwórcza).</li><li>2. Znajdź w definicji wyraz podstawowy.</li><li>3. Część wspólna = <b>podstawa</b>, reszta = <b>formant</b>.</li><li>4. Nazwij formant (przedrostek, przyrostek…) i jego funkcję.</li></ul>`,
    remember: 'Typowe pułapki: wymiana głosek w podstawie (piec → <b>piek</b>arz, ogród → <b>ogrod</b>nik) i „fałszywi krewni” (las – lis).',
    check: { q: 'Jaką funkcję pełni formant „-arz” w wyrazie „pisarz”?', options: ['tworzy zdrobnienie', 'tworzy nazwę wykonawcy czynności', 'tworzy zgrubienie', 'tworzy wyraz złożony'], answer: 1, explain: 'Pisarz = ten, kto pisze – to nazwa wykonawcy czynności.' },
  },
];

/* ===================== FRAZEOLOGIA ===================== */
window.LESSONS['polski/frazeologia'] = [
  {
    title: 'Frazeologizm: dosłownie czy naprawdę?',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Frazeologizm mieć muchy w nosie: obraz dosłowny i prawdziwe znaczenie">
      <text x="210" y="22" class="tx-b" text-anchor="middle">„mieć muchy w nosie”</text>
      <rect x="10" y="34" width="185" height="164" rx="14" class="f2 s2 sw"/>
      <text x="102" y="60" class="tx-b t2" text-anchor="middle">dosłownie</text>
      <text x="102" y="130" class="tx" text-anchor="middle" style="font-size:48px">👃</text>
      <text x="160" y="92" class="tx" text-anchor="middle" style="font-size:22px">🪰</text>
      <text x="46" y="104" class="tx" text-anchor="middle" style="font-size:18px">🪰</text>
      <text x="102" y="180" class="tx-s" text-anchor="middle">muchy w nosie?! ✘</text>
      <text x="210" y="122" class="tx-b" text-anchor="middle">→</text>
      <rect x="225" y="34" width="185" height="164" rx="14" class="f3 s3 sw"/>
      <text x="317" y="60" class="tx-b t3" text-anchor="middle">naprawdę</text>
      <text x="317" y="130" class="tx" text-anchor="middle" style="font-size:48px">😠</text>
      <text x="317" y="172" class="tx-s" text-anchor="middle">jest w złym humorze,</text>
      <text x="317" y="189" class="tx-s" text-anchor="middle">obrażony ✔</text>
    </svg>`,
    text: `<p><b>Związek frazeologiczny</b> (frazeologizm) to utrwalone połączenie wyrazów o znaczeniu <b>przenośnym</b>. Nie rozumiemy go dosłownie!</p>
      <p>Kto „ma muchy w nosie”, nie ma żadnych owadów – po prostu jest nie w humorze. Frazeologizmów nie zmieniamy: nie mówi się „ma komary w nosie”.</p>`,
    remember: 'Frazeologizm = <b>stałe</b> połączenie wyrazów + <b>przenośne</b> znaczenie.',
    hook: 'Wyobraź sobie obrazek dosłowny – im bardziej absurdalny, tym łatwiej zapamiętasz prawdziwe znaczenie.',
  },
  {
    title: 'Frazeologizmy na co dzień',
    svg: `<svg viewBox="0 0 420 242" role="img" aria-label="Pięć frazeologizmów z ikonami i znaczeniami">
      <rect x="6" y="6" width="408" height="42" rx="10" class="f1"/>
      <text x="14" y="34" class="tx" style="font-size:22px">🐈</text>
      <text x="50" y="24" class="tx-b">drzeć z kimś koty</text>
      <text x="50" y="42" class="tx-s t1">kłócić się z kimś</text>
      <rect x="6" y="52" width="408" height="42" rx="10" class="f2"/>
      <text x="14" y="80" class="tx" style="font-size:22px">🏃</text>
      <text x="50" y="70" class="tx-b">wziąć nogi za pas</text>
      <text x="50" y="88" class="tx-s t2">uciec</text>
      <rect x="6" y="98" width="408" height="42" rx="10" class="f3"/>
      <text x="14" y="126" class="tx" style="font-size:22px">🍐</text>
      <text x="50" y="116" class="tx-b">obiecywać gruszki na wierzbie</text>
      <text x="50" y="134" class="tx-s t3">obiecywać coś niemożliwego</text>
      <rect x="6" y="144" width="408" height="42" rx="10" class="f4"/>
      <text x="14" y="172" class="tx" style="font-size:22px">🤐</text>
      <text x="50" y="162" class="tx-b">trzymać język za zębami</text>
      <text x="50" y="180" class="tx-s t4">nie zdradzić tajemnicy</text>
      <rect x="6" y="190" width="408" height="42" rx="10" class="f5"/>
      <text x="14" y="218" class="tx" style="font-size:22px">💡</text>
      <text x="50" y="208" class="tx-b">pójść po rozum do głowy</text>
      <text x="50" y="226" class="tx-s t5">zastanowić się, zmądrzeć</text>
    </svg>`,
    text: `<p>Te frazeologizmy często pojawiają się w zadaniach. Każdy ma swój obrazek – dosłownie bez sensu, ale łatwy do zapamiętania.</p>
      <p>Gruszki <b>nie rosną</b> na wierzbie – dlatego taka obietnica nigdy się nie spełni.</p>`,
    hook: 'Koty, które „drą się” na siebie, to najgłośniejsza kłótnia na podwórku – stąd „drzeć z kimś koty”.',
    check: { q: 'Co znaczy „pójść po rozum do głowy”?', options: ['pójść do lekarza', 'zastanowić się, zmądrzeć', 'zapomnieć o czymś', 'uczyć się na pamięć'], answer: 1 },
  },
  {
    title: 'Frazeologizmy z mitologii',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Cztery frazeologizmy mitologiczne z ikonami">
      <rect x="10" y="10" width="195" height="105" rx="14" class="f1 s1 sw"/>
      <text x="107" y="48" class="tx" text-anchor="middle" style="font-size:28px">🪨</text>
      <text x="107" y="76" class="tx-b" text-anchor="middle">syzyfowa praca</text>
      <text x="107" y="98" class="tx-s t1" text-anchor="middle">daremny, bezskuteczny trud</text>
      <rect x="215" y="10" width="195" height="105" rx="14" class="f2 s2 sw"/>
      <text x="312" y="48" class="tx" text-anchor="middle" style="font-size:28px">🦶</text>
      <text x="312" y="76" class="tx-b" text-anchor="middle">pięta achillesowa</text>
      <text x="312" y="98" class="tx-s t2" text-anchor="middle">czyjś słaby punkt</text>
      <rect x="10" y="122" width="195" height="105" rx="14" class="f5 s5 sw"/>
      <text x="107" y="160" class="tx" text-anchor="middle" style="font-size:28px">📦</text>
      <text x="107" y="188" class="tx-b" text-anchor="middle">puszka Pandory</text>
      <text x="107" y="210" class="tx-s t5" text-anchor="middle">źródło nieszczęść</text>
      <rect x="215" y="122" width="195" height="105" rx="14" class="f3 s3 sw"/>
      <text x="312" y="160" class="tx" text-anchor="middle" style="font-size:28px">🧶</text>
      <text x="312" y="188" class="tx-b" text-anchor="middle">nić Ariadny</text>
      <text x="312" y="210" class="tx-s t3" text-anchor="middle">wyjście z trudnej sytuacji</text>
    </svg>`,
    text: `<p>Część frazeologizmów pochodzi z mitów greckich. Znasz historię – znasz znaczenie:</p>
      <ul><li><b>Syzyf</b> za karę wtaczał na górę głaz, który zawsze staczał się w dół → praca bez końca i bez efektu.</li><li><b>Achilles</b> był nie do zranienia – oprócz pięty → słaby punkt.</li><li><b>Pandora</b> otworzyła puszkę i wypuściła na świat nieszczęścia.</li><li><b>Ariadna</b> dała Tezeuszowi nić, dzięki której wyszedł z labiryntu.</li></ul>`,
    remember: 'Syzyfowa praca – daremny trud · pięta achillesowa – słaby punkt · puszka Pandory – źródło nieszczęść · nić Ariadny – sposób wyjścia z trudnej sytuacji.',
    check: { q: 'Kolega mówi: „Matematyka to moja pięta achillesowa”. Co ma na myśli?', options: ['Matematyka to jego mocna strona.', 'Matematyka to jego słaby punkt.', 'Matematyki uczy się bez końca.', 'Matematyka to źródło nieszczęść całej klasy.'], answer: 1 },
  },
  {
    title: 'Synonimy, antonimy, homonimy',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Przykłady synonimów, antonimów i homonimów">
      <rect x="10" y="10" width="400" height="50" rx="12" class="f3 s3 sw"/>
      <text x="22" y="41" class="tx-b t3">SYNONIMY</text>
      <text x="170" y="41" class="tx">mądry ≈ inteligentny</text>
      <rect x="10" y="70" width="400" height="50" rx="12" class="f2 s2 sw"/>
      <text x="22" y="101" class="tx-b t2">ANTONIMY</text>
      <text x="170" y="101" class="tx">wesoły ↔ smutny</text>
      <rect x="10" y="130" width="400" height="50" rx="12" class="f1 s1 sw"/>
      <text x="22" y="161" class="tx-b t1">HOMONIMY</text>
      <text x="170" y="163" class="tx">zamek = <tspan style="font-size:24px">🏰 🚪 🧥</tspan></text>
    </svg>`,
    text: `<ul><li><b>Synonimy</b> – wyrazy bliskoznaczne: <i>mądry – inteligentny</i>.</li><li><b>Antonimy</b> – wyrazy o przeciwnym znaczeniu: <i>wesoły – smutny</i>.</li><li><b>Homonimy</b> – to samo brzmienie, różne znaczenia: <i>zamek</i> (budowla, zamek w drzwiach, zamek błyskawiczny).</li></ul>`,
    hook: '<b>Anty</b>-nimy są „anty”, czyli przeciw. <b>Homo</b>-nimy brzmią „tak samo” (gr. homos – ten sam).',
    check: { q: '„Szybki” i „prędki” to…', options: ['synonimy', 'antonimy', 'homonimy'], answer: 0, explain: 'Mają bardzo podobne znaczenie – to wyrazy bliskoznaczne.' },
  },
  {
    title: 'Treść i zakres – im więcej cech, tym mniej rzeczy',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Zagnieżdżone pola: zwierzę, ssak, pies, jamnik; im węższy zakres, tym bogatsza treść">
      <defs><marker id="a-pl-fr-5" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="240" height="220" rx="16" class="f1 s1"/>
      <text x="22" y="34" class="tx-b t1">zwierzę</text>
      <rect x="25" y="45" width="210" height="178" rx="14" class="f3 s3"/>
      <text x="37" y="69" class="tx-b t3">ssak</text>
      <rect x="40" y="80" width="180" height="136" rx="12" class="f4 s4"/>
      <text x="52" y="104" class="tx-b t4">pies</text>
      <rect x="55" y="115" width="150" height="94" rx="10" class="f2 s2 sw"/>
      <text x="67" y="139" class="tx-b t2">jamnik</text>
      <text x="130" y="190" class="tx" text-anchor="middle" style="font-size:32px">🐕</text>
      <text x="275" y="40" class="tx">szerszy zakres</text>
      <text x="275" y="60" class="tx-s">uboższa treść</text>
      <path d="M268,75 L268,172" class="ln" marker-end="url(#a-pl-fr-5)"/>
      <text x="275" y="195" class="tx">węższy zakres</text>
      <text x="275" y="215" class="tx-b t2">bogatsza treść</text>
    </svg>`,
    text: `<p><b>Treść</b> wyrazu to zbiór cech, które przypisujemy temu, co on nazywa. <b>Zakres</b> to wszystkie rzeczy, które można tym wyrazem nazwać.</p>
      <p><i>Jamnik</i> ma więcej cech niż <i>pies</i> (pies + krótkie łapy + długie ciało…), więc ma <b>bogatszą treść</b>, ale <b>węższy zakres</b> – jamników jest mniej niż wszystkich psów.</p>`,
    remember: '<b>Bogatsza treść = węższy zakres.</b> Uboższa treść = szerszy zakres.',
    hook: 'Jak filtry w sklepie internetowym: im więcej cech zaznaczysz, tym mniej produktów zostaje na liście.',
    check: { q: 'Który wyraz ma najszerszy zakres?', options: ['róża', 'kwiat', 'roślina'], answer: 2, explain: 'Roślina obejmuje wszystkie kwiaty, a kwiaty – wszystkie róże.' },
  },
  {
    title: 'Słowa z emocjami i z metryką',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Słownictwo nacechowane oraz archaizm, neologizm i zapożyczenie">
      <rect x="10" y="10" width="125" height="70" rx="12" class="f3 s3 sw"/>
      <text x="72" y="40" class="tx-b" text-anchor="middle">piesek 😊</text>
      <text x="72" y="64" class="tx-s t3" text-anchor="middle">pozytywne</text>
      <rect x="147" y="10" width="125" height="70" rx="12" class="f4 s4 sw"/>
      <text x="210" y="40" class="tx-b" text-anchor="middle">pies 😐</text>
      <text x="210" y="64" class="tx-s t4" text-anchor="middle">neutralne</text>
      <rect x="284" y="10" width="125" height="70" rx="12" class="f2 s2 sw"/>
      <text x="347" y="40" class="tx-b" text-anchor="middle">kundel 😒</text>
      <text x="347" y="64" class="tx-s t2" text-anchor="middle">negatywne</text>
      <rect x="10" y="100" width="125" height="114" rx="12" class="f5 s5"/>
      <text x="72" y="134" class="tx" text-anchor="middle" style="font-size:24px">📜</text>
      <text x="72" y="160" class="tx-b" text-anchor="middle">archaizm</text>
      <text x="72" y="182" class="tx" text-anchor="middle">białogłowa</text>
      <text x="72" y="202" class="tx-s" text-anchor="middle">(kobieta)</text>
      <rect x="147" y="100" width="125" height="114" rx="12" class="f1 s1"/>
      <text x="210" y="134" class="tx" text-anchor="middle" style="font-size:24px">✨</text>
      <text x="210" y="160" class="tx-b" text-anchor="middle">neologizm</text>
      <text x="210" y="182" class="tx" text-anchor="middle">nowy wyraz</text>
      <text x="210" y="202" class="tx-s" text-anchor="middle">(np. pisarza)</text>
      <rect x="284" y="100" width="125" height="114" rx="12" class="f3 s3"/>
      <text x="347" y="134" class="tx" text-anchor="middle" style="font-size:24px">🌍</text>
      <text x="347" y="160" class="tx" text-anchor="middle">zapożyczenie</text>
      <text x="347" y="182" class="tx" text-anchor="middle">weekend</text>
      <text x="347" y="202" class="tx-s" text-anchor="middle">komputer</text>
    </svg>`,
    text: `<p>To samo można nazwać <b>neutralnie</b> (pies), <b>pozytywnie</b> (piesek) albo <b>negatywnie</b> (kundel). To słownictwo <b>wartościujące</b>.</p>
      <p>Wyrazy mają też „metrykę”: <b>archaizmy</b> to słowa dawne (<i>białogłowa, azali</i> = czy), <b>neologizmy</b> – nowo utworzone, <b>zapożyczenia</b> – przejęte z innych języków (<i>weekend, komputer</i>).</p>`,
    remember: 'Pułapki egzaminacyjne: frazeologizmu nie czytaj dosłownie · homonim ≠ synonim · bogatsza treść = węższy zakres.',
    check: { q: 'Który wyraz nazywa psa z sympatią?', options: ['kundel', 'pies', 'piesek'], answer: 2, explain: 'Zdrobnienie „piesek” jest nacechowane pozytywnie.' },
  },
];

/* ===================== GŁOSKI, AKCENT I ORTOGRAFIA ===================== */
window.LESSONS['polski/fonetyka-ortografia'] = [
  {
    title: 'Głoska to dźwięk, litera to znak',
    svg: `<svg viewBox="0 0 420 192" role="img" aria-label="Wyraz chleb: pięć liter i cztery głoski">
            <rect x="20" y="28" width="50" height="46" rx="8" class="f1 s1 sw"/><text x="45" y="58" class="tx-b" text-anchor="middle">c</text>
      <rect x="75" y="28" width="50" height="46" rx="8" class="f1 s1 sw"/><text x="100" y="58" class="tx-b" text-anchor="middle">h</text>
      <rect x="130" y="28" width="50" height="46" rx="8" class="f1 s1 sw"/><text x="155" y="58" class="tx-b" text-anchor="middle">l</text>
      <rect x="185" y="28" width="50" height="46" rx="8" class="f1 s1 sw"/><text x="210" y="58" class="tx-b" text-anchor="middle">e</text>
      <rect x="240" y="28" width="50" height="46" rx="8" class="f1 s1 sw"/><text x="265" y="58" class="tx-b" text-anchor="middle">b</text>
      <text x="305" y="50" class="tx-b t1">5 liter</text><text x="305" y="68" class="tx-s">to, co piszesz</text>
      <line x1="45" y1="76" x2="65" y2="116" class="ln-thin dash"/>
      <line x1="100" y1="76" x2="80" y2="116" class="ln-thin dash"/>
      <line x1="155" y1="76" x2="155" y2="116" class="ln-thin dash"/>
      <line x1="210" y1="76" x2="210" y2="116" class="ln-thin dash"/>
      <line x1="265" y1="76" x2="265" y2="116" class="ln-thin dash"/>
            <rect x="20" y="118" width="105" height="46" rx="8" class="f3 s3 sw"/><text x="72" y="148" class="tx-b" text-anchor="middle">[x]</text>
      <rect x="130" y="118" width="50" height="46" rx="8" class="f3 s3 sw"/><text x="155" y="148" class="tx-b" text-anchor="middle">[l]</text>
      <rect x="185" y="118" width="50" height="46" rx="8" class="f3 s3 sw"/><text x="210" y="148" class="tx-b" text-anchor="middle">[e]</text>
      <rect x="240" y="118" width="50" height="46" rx="8" class="f2 s2 sw"/><text x="265" y="148" class="tx-b t2" text-anchor="middle">[p]</text>
      <text x="305" y="140" class="tx-b t3">4 głoski</text><text x="305" y="158" class="tx-s">to, co słyszysz</text>
      <text x="20" y="186" class="tx-s">ch = jedna głoska · b na końcu brzmi jak [p]</text>
    </svg>`,
    text: `<p><b>Głoska</b> to dźwięk, który wymawiasz. <b>Litera</b> to znak, który piszesz. Nie zawsze jest ich tyle samo!</p>
      <p>W wyrazie <i>chleb</i> jest 5 liter, ale 4 głoski: „ch” to jedna głoska [x], a „b” na końcu wymawiamy jak [p].</p>`,
    remember: 'Dwuznaki, np. <b>ch, cz, sz</b>, to dwie litery, ale <b>jedna głoska</b>.',
    hook: 'Głoska jest dla <b>ucha</b>, litera dla <b>oka</b>.',
    check: { q: 'Ile liter i ile głosek ma wyraz „szczur”?', options: ['6 liter, 6 głosek', '6 liter, 4 głoski', '4 litery, 4 głoski', '5 liter, 4 głoski'], answer: 1, explain: 'Litery: s-z-c-z-u-r (6). Głoski: [sz][cz][u][r] (4), bo sz i cz to dwuznaki.' },
  },
  {
    title: 'Upodobnienia – głoski się „zarażają”',
    svg: `<svg viewBox="0 0 420 226" role="img" aria-label="Upodobnienie wsteczne w wyrazie babka, postępowe w kwiat i ubezdźwięcznienie na końcu wyrazu róg">
      <defs><marker id="a-pl-fon-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M145,30 Q127,8 112,28" class="ln" marker-end="url(#a-pl-fon-2)"/>
      <rect x="20" y="34" width="34" height="34" rx="6" class="f1 s1"/><text x="37" y="57" class="tx-b" text-anchor="middle">b</text>
      <rect x="56" y="34" width="34" height="34" rx="6" class="f1 s1"/><text x="73" y="57" class="tx-b" text-anchor="middle">a</text>
      <rect x="92" y="34" width="34" height="34" rx="6" class="f2 s2 sw"/><text x="109" y="57" class="tx-b t2" text-anchor="middle">p</text>
      <rect x="128" y="34" width="34" height="34" rx="6" class="f4 s4"/><text x="145" y="57" class="tx-b" text-anchor="middle">k</text>
      <rect x="164" y="34" width="34" height="34" rx="6" class="f1 s1"/><text x="181" y="57" class="tx-b" text-anchor="middle">a</text>
      <text x="215" y="42" class="tx-b">babka → [bapka]</text>
      <text x="215" y="63" class="tx-s">wsteczne ← (od następnej)</text>
      <path d="M37,102 Q55,80 72,100" class="ln" marker-end="url(#a-pl-fon-2)"/>
      <rect x="20" y="106" width="34" height="34" rx="6" class="f4 s4"/><text x="37" y="129" class="tx-b" text-anchor="middle">k</text>
      <rect x="56" y="106" width="34" height="34" rx="6" class="f2 s2 sw"/><text x="73" y="129" class="tx-b t2" text-anchor="middle">f'</text>
      <rect x="92" y="106" width="34" height="34" rx="6" class="f1 s1"/><text x="109" y="129" class="tx-b" text-anchor="middle">a</text>
      <rect x="128" y="106" width="34" height="34" rx="6" class="f1 s1"/><text x="145" y="129" class="tx-b" text-anchor="middle">t</text>
      <text x="215" y="114" class="tx-b">kwiat → [kf'at]</text>
      <text x="215" y="135" class="tx-s">postępowe → (od poprzedniej)</text>
      <rect x="20" y="170" width="34" height="34" rx="6" class="f1 s1"/><text x="37" y="193" class="tx-b" text-anchor="middle">r</text>
      <rect x="56" y="170" width="34" height="34" rx="6" class="f1 s1"/><text x="73" y="193" class="tx-b" text-anchor="middle">u</text>
      <rect x="92" y="170" width="34" height="34" rx="6" class="f2 s2 sw"/><text x="109" y="193" class="tx-b t2" text-anchor="middle">k</text>
      <line x1="134" y1="162" x2="134" y2="212" class="ln sw"/>
      <text x="215" y="180" class="tx-b">róg → [ruk]</text>
      <text x="215" y="201" class="tx-s">na końcu traci dźwięczność</text>
    </svg>`,
    text: `<p>Głoski obok siebie wpływają na siebie – to <b>upodobnienia</b>. Najczęściej chodzi o <b>dźwięczność</b>.</p>
      <ul><li><b>Wsteczne</b> – głoska upodabnia się do <b>następnej</b>: <i>babka</i> [bapka] – [k] „zaraża” [b].</li><li><b>Postępowe</b> – do <b>poprzedniej</b>: <i>kwiat</i> [kf'at] – [k] „zaraża” [w].</li><li>Na <b>końcu wyrazu</b> głoski dźwięczne tracą dźwięczność: <i>chleb</i> [xlep], <i>róg</i> [ruk].</li></ul>`,
    remember: 'Wsteczne: wpływ idzie <b>wstecz</b> (od prawej do lewej). Postępowe: wpływ idzie <b>do przodu</b>.',
    hook: 'Strzałka wsteczna cofa się jak samochód na wstecznym biegu.',
    check: { q: 'Jak wymawiamy wyraz „róg”?', options: ['[róg]', '[ruk]', '[rug]', '[rók]'], answer: 1, explain: 'Ó brzmi jak [u], a [g] na końcu wyrazu traci dźwięczność i brzmi jak [k].' },
  },
  {
    title: 'Akcent: zwykle na przedostatnią',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Sylaby wyrazów kolega, szkoła, samochód z zaznaczonym akcentem na przedostatniej sylabie">
      <text x="55" y="22" class="tx-s" text-anchor="middle">3</text><text x="130" y="22" class="tx-s" text-anchor="middle">2</text><text x="205" y="22" class="tx-s" text-anchor="middle">1</text>
      <rect x="20" y="28" width="70" height="40" rx="8" class="f1 s1"/><text x="55" y="54" class="tx" text-anchor="middle">ko</text>
      <rect x="95" y="28" width="70" height="40" rx="8" class="f2 s2 sw"/><text x="130" y="54" class="tx-b t2" text-anchor="middle">LE</text>
      <rect x="170" y="28" width="70" height="40" rx="8" class="f1 s1"/><text x="205" y="54" class="tx" text-anchor="middle">ga</text>
      <text x="55" y="92" class="tx-s" text-anchor="middle">2</text><text x="130" y="92" class="tx-s" text-anchor="middle">1</text>
      <rect x="20" y="98" width="70" height="40" rx="8" class="f2 s2 sw"/><text x="55" y="124" class="tx-b t2" text-anchor="middle">SZKO</text>
      <rect x="95" y="98" width="70" height="40" rx="8" class="f1 s1"/><text x="130" y="124" class="tx" text-anchor="middle">ła</text>
      <text x="55" y="162" class="tx-s" text-anchor="middle">3</text><text x="130" y="162" class="tx-s" text-anchor="middle">2</text><text x="205" y="162" class="tx-s" text-anchor="middle">1</text>
      <rect x="20" y="168" width="70" height="40" rx="8" class="f1 s1"/><text x="55" y="194" class="tx" text-anchor="middle">sa</text>
      <rect x="95" y="168" width="70" height="40" rx="8" class="f2 s2 sw"/><text x="130" y="194" class="tx-b t2" text-anchor="middle">MO</text>
      <rect x="170" y="168" width="70" height="40" rx="8" class="f1 s1"/><text x="205" y="194" class="tx" text-anchor="middle">chód</text>
      <rect x="265" y="28" width="145" height="180" rx="14" class="f4 s4 sw"/>
      <text x="337" y="66" class="tx-b" text-anchor="middle">AKCENT</text>
      <text x="337" y="104" class="tx" text-anchor="middle">na 2. sylabę</text>
      <text x="337" y="126" class="tx" text-anchor="middle">od końca</text>
      <text x="337" y="160" class="tx-s" text-anchor="middle">(przedostatnią)</text>
    </svg>`,
    text: `<p><b>Akcent</b> to mocniejsze wymówienie jednej sylaby. W polszczyźnie pada zwykle na <b>przedostatnią</b> sylabę: <i>ko-<b>le</b>-ga, <b>szko</b>-ła, sa-<b>mo</b>-chód</i>.</p>
      <p>Sylaby licz zawsze <b>od końca</b> wyrazu – tak najłatwiej trafić.</p>`,
    remember: 'Reguła ogólna: akcent na <b>2. sylabę od końca</b>.',
    hook: 'Wystukaj wyraz palcem po ławce: od końca – „raz, DWA!” – na dwa uderzasz mocniej.',
    check: { q: 'Gdzie pada akcent w wyrazie „telewizor”?', options: ['TE-le-wi-zor', 'te-LE-wi-zor', 'te-le-WI-zor', 'te-le-wi-ZOR'], answer: 2, explain: 'Zgodnie z regułą – na przedostatnią sylabę: te-le-WI-zor.' },
  },
  {
    title: 'Wyjątki od reguły akcentu',
    svg: `<svg viewBox="0 0 420 256" role="img" aria-label="Wyjątki akcentowe: matematyka, byliśmy, zrobilibyśmy">
      <text x="46" y="16" class="tx-s" text-anchor="middle">5</text><text x="102" y="16" class="tx-s" text-anchor="middle">4</text><text x="158" y="16" class="tx-s" text-anchor="middle">3</text><text x="214" y="16" class="tx-s" text-anchor="middle">2</text><text x="270" y="16" class="tx-s" text-anchor="middle">1</text>
      <rect x="20" y="22" width="52" height="38" rx="8" class="f1 s1"/><text x="46" y="47" class="tx" text-anchor="middle">ma</text>
      <rect x="76" y="22" width="52" height="38" rx="8" class="f1 s1"/><text x="102" y="47" class="tx" text-anchor="middle">te</text>
      <rect x="132" y="22" width="52" height="38" rx="8" class="f2 s2 sw"/><text x="158" y="47" class="tx-b t2" text-anchor="middle">MA</text>
      <rect x="188" y="22" width="52" height="38" rx="8" class="f1 s1"/><text x="214" y="47" class="tx" text-anchor="middle">ty</text>
      <rect x="244" y="22" width="52" height="38" rx="8" class="f1 s1"/><text x="270" y="47" class="tx" text-anchor="middle">ka</text>
      <text x="310" y="47" class="tx-b t2">3. od końca</text>
      <text x="20" y="78" class="tx-s">wyrazy z greki i łaciny (fizyka, muzyka)</text>
      <text x="46" y="102" class="tx-s" text-anchor="middle">3</text><text x="102" y="102" class="tx-s" text-anchor="middle">2</text><text x="158" y="102" class="tx-s" text-anchor="middle">1</text>
      <rect x="20" y="108" width="52" height="38" rx="8" class="f2 s2 sw"/><text x="46" y="133" class="tx-b t2" text-anchor="middle">BY</text>
      <rect x="76" y="108" width="52" height="38" rx="8" class="f1 s1"/><text x="102" y="133" class="tx" text-anchor="middle">li</text>
      <rect x="132" y="108" width="52" height="38" rx="8" class="f1 s1"/><text x="158" y="133" class="tx" text-anchor="middle">śmy</text>
      <text x="310" y="133" class="tx-b t2">3. od końca</text>
      <text x="20" y="172" class="tx-s">czas przeszły, 1. i 2. os. lm (-śmy, -ście)</text>
      <text x="46" y="188" class="tx-s" text-anchor="middle">5</text><text x="102" y="188" class="tx-s" text-anchor="middle">4</text><text x="158" y="188" class="tx-s" text-anchor="middle">3</text><text x="214" y="188" class="tx-s" text-anchor="middle">2</text><text x="270" y="188" class="tx-s" text-anchor="middle">1</text>
      <rect x="20" y="194" width="52" height="38" rx="8" class="f1 s1"/><text x="46" y="219" class="tx" text-anchor="middle">zro</text>
      <rect x="76" y="194" width="52" height="38" rx="8" class="f2 s2 sw"/><text x="102" y="219" class="tx-b t2" text-anchor="middle">BI</text>
      <rect x="132" y="194" width="52" height="38" rx="8" class="f1 s1"/><text x="158" y="219" class="tx" text-anchor="middle">li</text>
      <rect x="188" y="194" width="52" height="38" rx="8" class="f1 s1"/><text x="214" y="219" class="tx" text-anchor="middle">by</text>
      <rect x="244" y="194" width="52" height="38" rx="8" class="f1 s1"/><text x="270" y="219" class="tx" text-anchor="middle">śmy</text>
      <text x="310" y="219" class="tx-b t5">4. od końca</text>
      <text x="20" y="250" class="tx-s">tryb przypuszczający, 1. i 2. os. lm</text>
    </svg>`,
    text: `<p>Są trzy grupy wyjątków:</p>
      <ul><li>wyrazy pochodzenia <b>greckiego i łacińskiego</b> – 3. sylaba od końca: <i>ma-te-<b>ma</b>-ty-ka, <b>fi</b>-zy-ka, u-ni-<b>wer</b>-sy-tet</i>;</li><li><b>czas przeszły</b>, 1. i 2. osoba liczby mnogiej – 3. od końca: <i><b>by</b>-li-śmy, zro-<b>bi</b>-li-ście</i>;</li><li><b>tryb przypuszczający</b>, 1. i 2. osoba lm – <b>4. od końca</b>: <i>zro-<b>bi</b>-li-by-śmy</i>.</li></ul>`,
    remember: 'Końcówki <b>-śmy / -ście</b> „nie liczą się” do akcentu: akcent zostaje tam, gdzie był w formie „byli”, „zrobili”.',
    hook: '„Byli” → BY-li. Doklejasz „-śmy” → BY-li-śmy. Akcent się nie przesuwa – to cały trik!',
    check: { q: 'Która forma ma akcent na trzecią sylabę od końca?', options: ['czytaliśmy', 'czytamy', 'czytali', 'czytanka'], answer: 0, explain: 'czy-TA-li-śmy – czas przeszły, 1. os. lm. Pozostałe mają akcent na przedostatnią.' },
  },
  {
    title: 'Ortografia: sprawdź wymianą głosek',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Wymiany głosek uzasadniające pisownię: ó-o, rz-r, ż-g, ż-z, ż-h, ch-sz">
      <rect x="10" y="8" width="105" height="30" rx="8" class="f4 s4"/><text x="62" y="29" class="tx-b" text-anchor="middle">ó ⇄ o</text>
      <text x="130" y="29" class="tx-b">st<tspan class="t2">ó</tspan>ł – st<tspan class="t1">o</tspan>łu</text>
      <rect x="10" y="44" width="105" height="30" rx="8" class="f4 s4"/><text x="62" y="65" class="tx-b" text-anchor="middle">rz ⇄ r</text>
      <text x="130" y="65" class="tx-b">mo<tspan class="t2">rz</tspan>e – mo<tspan class="t1">r</tspan>ski</text>
      <rect x="10" y="80" width="105" height="30" rx="8" class="f4 s4"/><text x="62" y="101" class="tx-b" text-anchor="middle">ż ⇄ g</text>
      <text x="130" y="101" class="tx-b">mo<tspan class="t2">ż</tspan>e – mo<tspan class="t1">g</tspan>ę</text>
      <rect x="10" y="116" width="105" height="30" rx="8" class="f4 s4"/><text x="62" y="137" class="tx-b" text-anchor="middle">ż ⇄ z</text>
      <text x="130" y="137" class="tx-b">wo<tspan class="t2">ż</tspan>ę – wo<tspan class="t1">z</tspan>ić</text>
      <rect x="10" y="152" width="105" height="30" rx="8" class="f4 s4"/><text x="62" y="173" class="tx-b" text-anchor="middle">ż ⇄ h</text>
      <text x="130" y="173" class="tx-b">dru<tspan class="t2">ż</tspan>yna – dru<tspan class="t1">h</tspan></text>
      <rect x="10" y="188" width="105" height="30" rx="8" class="f4 s4"/><text x="62" y="209" class="tx-b" text-anchor="middle">ch ⇄ sz</text>
      <text x="130" y="209" class="tx-b">mu<tspan class="t2">ch</tspan>a – mu<tspan class="t1">sz</tspan>e</text>
    </svg>`,
    text: `<p>Wiele trudnych liter sprawdzisz, szukając <b>innej formy</b> albo <b>wyrazu pokrewnego</b>, w którym głoska się wymienia.</p>
      <p>Słyszysz [u] w <i>stół</i>? Sprawdź: <i>stołu</i> – jest „o”, więc piszesz <b>ó</b>. Słyszysz [ż] w <i>morze</i>? <i>Morski</i> – jest „r”, więc <b>rz</b>.</p>`,
    remember: '<b>ó</b> → o · <b>rz</b> → r · <b>ż</b> → g, z, h · <b>ch</b> → sz',
    hook: 'Ortografia to śledztwo: szukasz „świadka” – innego słowa z tej samej rodziny, które zdradzi właściwą literę.',
    check: { q: 'Którym wyrazem uzasadnisz pisownię „ó” w wyrazie „wóz”?', options: ['wozy', 'wuj', 'wąż'], answer: 0, explain: 'W „wozy” jest „o” – więc w „wóz” piszemy ó wymienne.' },
  },
  {
    title: '„Nie” – razem czy osobno?',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Dwa kosze: nie pisane razem i nie pisane osobno z przykładami">
      <text x="107" y="26" class="tx-b t3" text-anchor="middle">🧺 RAZEM</text>
      <polygon points="10,36 205,36 195,246 20,246" class="f3 s3 sw"/>
      <text x="107" y="62" class="tx-b" text-anchor="middle">nieprzyjaciel</text>
      <text x="107" y="78" class="tx-s" text-anchor="middle">rzeczownik</text>
      <text x="107" y="102" class="tx-b" text-anchor="middle">niemiły</text>
      <text x="107" y="118" class="tx-s" text-anchor="middle">przymiotnik (st. równy)</text>
      <text x="107" y="142" class="tx-b" text-anchor="middle">niepalący</text>
      <text x="107" y="158" class="tx-s" text-anchor="middle">imiesłów przymiotnikowy</text>
      <text x="107" y="182" class="tx-b" text-anchor="middle">niedobrze</text>
      <text x="107" y="198" class="tx-s" text-anchor="middle">przysł. od przymiotnika</text>
      <text x="107" y="222" class="tx-b t2" text-anchor="middle">nienawidzić ⚠</text>
      <text x="107" y="238" class="tx-s" text-anchor="middle">wyjątek: brak „nawidzić”</text>
      <text x="312" y="26" class="tx-b t2" text-anchor="middle">🧺 OSOBNO</text>
      <polygon points="215,36 410,36 400,246 225,246" class="f2 s2 sw"/>
      <text x="312" y="62" class="tx-b" text-anchor="middle">nie wiem</text>
      <text x="312" y="78" class="tx-s" text-anchor="middle">czasownik</text>
      <text x="312" y="102" class="tx-b" text-anchor="middle">nie wiedząc</text>
      <text x="312" y="118" class="tx-s" text-anchor="middle">imiesłów przysłówkowy</text>
      <text x="312" y="142" class="tx-b" text-anchor="middle">nie lepszy</text>
      <text x="312" y="158" class="tx-s" text-anchor="middle">st. wyższy i najwyższy</text>
      <text x="312" y="182" class="tx-b" text-anchor="middle">nie pięć</text>
      <text x="312" y="198" class="tx-s" text-anchor="middle">liczebnik</text>
    </svg>`,
    text: `<p><b>Razem</b> piszemy „nie” z rzeczownikami, przymiotnikami i przysłówkami (od przymiotników) w stopniu równym oraz z imiesłowami przymiotnikowymi.</p>
      <p><b>Osobno</b> – z czasownikami, imiesłowami przysłówkowymi, liczebnikami oraz przymiotnikami i przysłówkami w stopniu wyższym i najwyższym.</p>
      <p>Wyjątek: czasowniki, które bez „nie” nie istnieją: <i>nienawidzić, niepokoić, niedowidzieć</i>.</p>`,
    remember: 'Czasownik – osobno (<b>nie wiem</b>), chyba że bez „nie” nie istnieje (<b>nienawidzić</b>). Stopień wyższy – osobno (<b>nie lepszy</b>).',
    hook: 'Test: usuń „nie”. Zostaje „nawidzić”? Takie słowo nie istnieje – więc piszesz razem.',
    check: { q: 'Który zapis jest poprawny?', options: ['niewiem', 'nie ładny', 'nie wyższy', 'nie przyjaciel'], answer: 2, explain: '„Nie” z przymiotnikiem w stopniu wyższym piszemy osobno. Poprawnie: nie wiem, nieładny, nieprzyjaciel.' },
  },
];

/* ===================== STYLE, SŁOWNICTWO I KOMUNIKACJA ===================== */
window.LESSONS['polski/style-komunikacja'] = [
  {
    title: 'Kto, do kogo i w jakiej sytuacji?',
    svg: `<svg viewBox="0 0 420 198" role="img" aria-label="Schemat komunikacji: nadawca, komunikat, odbiorca w sytuacji komunikacyjnej">
      <defs><marker id="a-pl-st-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="5" width="410" height="160" rx="16" class="ln-thin dash"/>
      <text x="65" y="68" class="tx" text-anchor="middle" style="font-size:38px">🙋</text>
      <text x="210" y="68" class="tx" text-anchor="middle" style="font-size:38px">💬</text>
      <text x="355" y="68" class="tx" text-anchor="middle" style="font-size:38px">🧑</text>
      <path d="M105,55 L165,55" class="ln" marker-end="url(#a-pl-st-1)"/>
      <path d="M255,55 L315,55" class="ln" marker-end="url(#a-pl-st-1)"/>
      <text x="65" y="105" class="tx-b t1" text-anchor="middle">nadawca</text>
      <text x="210" y="105" class="tx-b t2" text-anchor="middle">komunikat</text>
      <text x="355" y="105" class="tx-b t3" text-anchor="middle">odbiorca</text>
      <text x="65" y="125" class="tx-s" text-anchor="middle">kto mówi/pisze</text>
      <text x="210" y="125" class="tx-s" text-anchor="middle">co przekazuje</text>
      <text x="355" y="125" class="tx-s" text-anchor="middle">do kogo</text>
      <text x="210" y="152" class="tx-s" text-anchor="middle">sytuacja komunikacyjna: gdzie, kiedy, po co</text>
      <text x="10" y="188" class="tx">„Cześć!” – do kolegi · „Dzień dobry!” – do pani</text>
    </svg>`,
    text: `<p>W każdej rozmowie jest <b>nadawca</b> (kto mówi lub pisze), <b>odbiorca</b> (do kogo) i <b>komunikat</b> (co przekazujemy).</p>
      <p>To, gdzie i z kim rozmawiasz – <b>sytuacja komunikacyjna</b> – decyduje o doborze słów. Do kolegi powiesz „Cześć!”, do nauczycielki „Dzień dobry!”.</p>`,
    hook: 'Nadawca <b>nadaje</b> jak radio, odbiorca <b>odbiera</b> jak odbiornik.',
    check: { q: 'Piszesz SMS do mamy. Kto jest odbiorcą?', options: ['ty', 'mama', 'operator sieci'], answer: 1 },
  },
  {
    title: 'Pięć stylów – pięć strojów języka',
    svg: `<svg viewBox="0 0 420 258" role="img" aria-label="Pięć stylów wypowiedzi z cechami i miejscami użycia">
      <rect x="6" y="6" width="408" height="46" rx="10" class="f2"/>
      <text x="14" y="38" class="tx" style="font-size:22px">💬</text>
      <text x="48" y="26" class="tx-b t2">potoczny</text>
      <text x="48" y="45" class="tx-s">swobodny, emocje</text>
      <text x="406" y="26" class="tx" text-anchor="end">rozmowa, SMS</text>
      <rect x="6" y="56" width="408" height="46" rx="10" class="f1"/>
      <text x="14" y="88" class="tx" style="font-size:22px">📄</text>
      <text x="48" y="76" class="tx-b t1">urzędowy</text>
      <text x="48" y="95" class="tx-s">oficjalny, stałe formuły</text>
      <text x="406" y="76" class="tx" text-anchor="end">podanie, regulamin</text>
      <rect x="6" y="106" width="408" height="46" rx="10" class="f3"/>
      <text x="14" y="138" class="tx" style="font-size:22px">🔬</text>
      <text x="48" y="126" class="tx-b t3">naukowy</text>
      <text x="48" y="145" class="tx-s">precyzyjny, terminy</text>
      <text x="406" y="126" class="tx" text-anchor="end">podręcznik, encyklopedia</text>
      <rect x="6" y="156" width="408" height="46" rx="10" class="f4"/>
      <text x="14" y="188" class="tx" style="font-size:22px">📰</text>
      <text x="48" y="176" class="tx-b t4">publicystyczny</text>
      <text x="48" y="195" class="tx-s">przekonuje, komentuje</text>
      <text x="406" y="176" class="tx" text-anchor="end">artykuł, felieton</text>
      <rect x="6" y="206" width="408" height="46" rx="10" class="f5"/>
      <text x="14" y="238" class="tx" style="font-size:22px">🎨</text>
      <text x="48" y="226" class="tx-b t5">artystyczny</text>
      <text x="48" y="245" class="tx-s">środki stylistyczne, obrazowość</text>
      <text x="406" y="226" class="tx" text-anchor="end">literatura</text>
    </svg>`,
    text: `<p>Styl to „strój” wypowiedzi – dobierasz go do okazji, tak jak ubranie.</p>
      <ul><li><b>potoczny</b> – swobodny, z kolokwializmami i emocjami,</li><li><b>urzędowy</b> – oficjalny, schematyczny, ze stałymi formułami,</li><li><b>naukowy</b> – precyzyjny, z terminami, bez emocji,</li><li><b>publicystyczny</b> – komentuje bieżące sprawy i przekonuje,</li><li><b>artystyczny</b> – obrazowy, pełen środków stylistycznych.</li></ul>`,
    hook: 'Potoczny = dres 👕, urzędowy = garnitur 👔, naukowy = fartuch laboranta 🥼.',
    check: { q: 'Felieton w gazecie to tekst w stylu…', options: ['urzędowym', 'naukowym', 'publicystycznym', 'potocznym'], answer: 2 },
  },
  {
    title: 'Jakie słowa wybierasz?',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Słownictwo ogólnonarodowe, o ograniczonym zasięgu i zapożyczenia">
      <rect x="10" y="10" width="400" height="56" rx="12" class="f1 s1 sw"/>
      <text x="22" y="34" class="tx-b t1">ogólnonarodowe</text>
      <text x="22" y="56" class="tx-s">znane wszystkim: dom, woda, chleb</text>
      <text x="10" y="88" class="tx-s">o ograniczonym zasięgu:</text>
      <rect x="10" y="96" width="128" height="66" rx="12" class="f4 s4"/>
      <text x="74" y="122" class="tx t4" text-anchor="middle">kolokwializmy</text>
      <text x="74" y="146" class="tx-s" text-anchor="middle">kasa, fajny</text>
      <rect x="146" y="96" width="128" height="66" rx="12" class="f5 s5"/>
      <text x="210" y="122" class="tx t5" text-anchor="middle">terminy</text>
      <text x="210" y="146" class="tx-s" text-anchor="middle">imiesłów, rdzeń</text>
      <rect x="282" y="96" width="128" height="66" rx="12" class="f2 s2"/>
      <text x="346" y="122" class="tx t2" text-anchor="middle">archaizmy</text>
      <text x="346" y="146" class="tx-s" text-anchor="middle">białogłowa</text>
      <rect x="10" y="174" width="400" height="56" rx="12" class="f3 s3 sw"/>
      <text x="22" y="198" class="tx-b t3">zapożyczenia 🌍</text>
      <text x="22" y="220" class="tx-s">z innych języków: weekend, komputer, pizza</text>
    </svg>`,
    text: `<p>Słownictwo <b>ogólnonarodowe</b> rozumie każdy. Słownictwo <b>o ograniczonym zasięgu</b> zna tylko część ludzi: terminy naukowe, archaizmy, <b>kolokwializmy</b> (wyrazy potoczne, np. <i>kasa</i> = pieniądze, <i>fajny</i>).</p>
      <p>Wyrazy bywają <b>rodzime</b> albo <b>zapożyczone</b> z innych języków (<i>weekend, komputer, pizza</i>).</p>
      <p>Nazwy mieszkańców: Kraków – <i>krakowianin</i>, Warszawa – <i>warszawianin</i>, Gdańsk – <i>gdańszczanin</i>, Poznań – <i>poznaniak</i>.</p>`,
    remember: 'W wypowiedzi oficjalnej (rozprawka, podanie) <b>unikaj kolokwializmów</b>: zamiast „kasa” – „pieniądze”.',
    check: { q: 'W którym zdaniu jest kolokwializm?', options: ['To był fajny film.', 'To był ciekawy film.', 'To był interesujący film.'], answer: 0, explain: '„Fajny” to wyraz potoczny.' },
  },
  {
    title: 'Grzeczność i norma językowa',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Schody normy językowej i zwroty grzeczności">
      <rect x="130" y="10" width="280" height="50" rx="10" class="f3 s3 sw"/>
      <text x="142" y="32" class="tx-b t3">norma wzorcowa ✔✔</text>
      <text x="142" y="51" class="tx-s">staranna, oficjalna</text>
      <rect x="70" y="68" width="280" height="50" rx="10" class="f4 s4 sw"/>
      <text x="82" y="90" class="tx-b t4">norma użytkowa ✔</text>
      <text x="82" y="109" class="tx-s">codzienna, dopuszczalna</text>
      <rect x="10" y="126" width="280" height="50" rx="10" class="f2 s2 sw"/>
      <text x="22" y="148" class="tx-b t2">błąd językowy ✘</text>
      <text x="22" y="167" class="tx-s">naruszenie normy</text>
      <rect x="10" y="184" width="400" height="34" rx="17" class="f5 s5"/>
      <text x="210" y="207" class="tx" text-anchor="middle">proszę · dziękuję · przepraszam · Pan/Pani</text>
    </svg>`,
    text: `<p><b>Norma wzorcowa</b> to język staranny, oficjalny (egzamin, przemówienie). <b>Norma użytkowa</b> – codzienny, ale wciąż poprawny. <b>Błąd językowy</b> to naruszenie normy.</p>
      <p><b>Grzeczność językowa</b> to m.in. zwroty „proszę, dziękuję, przepraszam” i forma „Pan/Pani” wobec dorosłych.</p>`,
    hook: 'Norma jak schody: na egzaminie stoisz na najwyższym stopniu.',
    check: { q: 'Jak najlepiej zacząć e-mail do nauczycielki?', options: ['Hej!', 'Siema!', 'Szanowna Pani,', 'Yo!'], answer: 2, explain: 'W oficjalnym liście stosujemy grzeczne, oficjalne powitanie.' },
  },
  {
    title: 'Uwaga: manipulacja!',
    svg: `<svg viewBox="0 0 420 216" role="img" aria-label="Porównanie manipulacji i rzeczowego argumentu">
      <rect x="10" y="10" width="195" height="196" rx="14" class="f2 s2 sw"/>
      <text x="107" y="38" class="tx-b t2" text-anchor="middle">🚨 MANIPULACJA</text>
      <text x="107" y="74" class="tx" text-anchor="middle">„Wszyscy już</text>
      <text x="107" y="96" class="tx" text-anchor="middle">to mają – a ty?”</text>
      <text x="22" y="134" class="tx-s">• uogólnienie („wszyscy”)</text>
      <text x="22" y="156" class="tx-s">• gra na emocjach</text>
      <text x="22" y="178" class="tx-s">• przemilcza wady</text>
      <rect x="215" y="10" width="195" height="196" rx="14" class="f3 s3 sw"/>
      <text x="312" y="38" class="tx-b t3" text-anchor="middle">✔ ARGUMENT</text>
      <text x="312" y="74" class="tx" text-anchor="middle">„Ten plecak</text>
      <text x="312" y="96" class="tx" text-anchor="middle">waży 600 g.”</text>
      <text x="227" y="134" class="tx-s">• konkretny fakt</text>
      <text x="227" y="156" class="tx-s">• da się sprawdzić</text>
      <text x="227" y="178" class="tx-s">• odwołuje się do rozumu</text>
    </svg>`,
    text: `<p><b>Manipulacja</b> to wpływanie na odbiorcę w ukryty sposób. Zamiast argumentów są: <b>uogólnienia</b> („wszyscy to mają!”), <b>przemilczenia</b> i <b>wywoływanie emocji</b>.</p>
      <p>Rzeczowy argument podaje konkretny fakt, który możesz sprawdzić.</p>`,
    remember: 'Słowa-alarmy: <b>wszyscy, nikt, zawsze, tylko dziś, tylko frajer…</b> – zapal czerwoną lampkę.',
    hook: 'Zadaj sobie pytanie: „Co konkretnie mi powiedziano?” Jeśli nic poza emocją – to manipulacja.',
    check: { q: 'Które zdanie jest przykładem manipulacji?', options: ['Ten rower waży 9 kg.', 'Tylko frajer nie kupi tego roweru!', 'Rower ma 21 biegów.'], answer: 1, explain: 'Wywiera presję i obraża zamiast podawać argumenty.' },
  },
  {
    title: 'Podsumowanie: dobierz styl do sytuacji',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Przyporządkowanie sytuacji do stylów wypowiedzi">
      <defs><marker id="a-pl-st-6" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="8" width="185" height="38" rx="10" class="f1"/><text x="20" y="33" class="tx">podanie do dyrektora</text>
      <path d="M198,27 L238,27" class="ln" marker-end="url(#a-pl-st-6)"/>
      <rect x="245" y="8" width="165" height="38" rx="10" class="f1 s1 sw"/><text x="255" y="33" class="tx">📄 urzędowy</text>
      <rect x="10" y="54" width="185" height="38" rx="10" class="f2"/><text x="20" y="79" class="tx">SMS do kolegi</text>
      <path d="M198,73 L238,73" class="ln" marker-end="url(#a-pl-st-6)"/>
      <rect x="245" y="54" width="165" height="38" rx="10" class="f2 s2 sw"/><text x="255" y="79" class="tx">💬 potoczny</text>
      <rect x="10" y="100" width="185" height="38" rx="10" class="f3"/><text x="20" y="125" class="tx">hasło w encyklopedii</text>
      <path d="M198,119 L238,119" class="ln" marker-end="url(#a-pl-st-6)"/>
      <rect x="245" y="100" width="165" height="38" rx="10" class="f3 s3 sw"/><text x="255" y="125" class="tx">🔬 naukowy</text>
      <rect x="10" y="146" width="185" height="38" rx="10" class="f4"/><text x="20" y="171" class="tx">felieton w gazecie</text>
      <path d="M198,165 L238,165" class="ln" marker-end="url(#a-pl-st-6)"/>
      <rect x="245" y="146" width="165" height="38" rx="10" class="f4 s4 sw"/><text x="255" y="171" class="tx">📰 publicystyczny</text>
      <rect x="10" y="192" width="185" height="38" rx="10" class="f5"/><text x="20" y="217" class="tx">wiersz, powieść</text>
      <path d="M198,211 L238,211" class="ln" marker-end="url(#a-pl-st-6)"/>
      <rect x="245" y="192" width="165" height="38" rx="10" class="f5 s5 sw"/><text x="255" y="217" class="tx">🎨 artystyczny</text>
    </svg>`,
    text: `<p>Na egzaminie często pytają: „W jakim stylu napisano ten tekst?” albo każą przerobić wypowiedź na inny styl. Zawsze patrz na <b>sytuację</b>: kto pisze, do kogo i po co.</p>
      <p>Typowe pułapki: kolokwializmy w rozprawce, brak zwrotów grzecznościowych w podaniu, mylenie stylu naukowego (fakty, terminy) z publicystycznym (opinia, przekonywanie).</p>`,
    remember: 'Podanie, regulamin – <b>urzędowy</b> · encyklopedia, podręcznik – <b>naukowy</b> · artykuł, felieton – <b>publicystyczny</b>.',
    check: { q: 'W jakim stylu napiszesz regulamin klasowego konkursu?', options: ['potocznym', 'urzędowym', 'artystycznym', 'publicystycznym'], answer: 1, explain: 'Regulamin to tekst oficjalny i schematyczny – styl urzędowy.' },
  },
];

window.LESSONS['polski/interpunkcja-ortografia'] = [
  {
    title: 'Przecinek – kiedy tak, kiedy nie',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Dwie kolumny: przecinek stawiamy przed że, bo, który, ale; nie stawiamy przed pojedynczym i, oraz, lub, albo">
      <rect x="6" y="6" width="198" height="160" rx="12" class="f3 s3 sw"/>
      <rect x="216" y="6" width="198" height="160" rx="12" class="f2 s2 sw"/>
      <text x="105" y="34" class="tx-b" text-anchor="middle">✔ stawiamy</text>
      <text x="315" y="34" class="tx-b" text-anchor="middle">✘ nie stawiamy</text>
      <text x="105" y="66" class="tx" text-anchor="middle">że, żeby, bo</text>
      <text x="105" y="92" class="tx" text-anchor="middle">ponieważ, który</text>
      <text x="105" y="118" class="tx" text-anchor="middle">gdy, jeśli, ale</text>
      <text x="105" y="144" class="tx" text-anchor="middle">lecz, więc, dlatego</text>
      <text x="315" y="66" class="tx" text-anchor="middle">i, oraz</text>
      <text x="315" y="92" class="tx" text-anchor="middle">lub, albo</text>
      <text x="315" y="118" class="tx" text-anchor="middle">ani, czy</text>
      <text x="315" y="144" class="tx-s" text-anchor="middle">(gdy są pojedyncze)</text>
      <text x="10" y="196" class="tx">Wiem<tspan class="tx-b t3">,</tspan> że masz rację.</text>
      <text x="220" y="196" class="tx">Kupiłem chleb i mleko.</text>
      <text x="10" y="224" class="tx-s">Powtórzone „i”: Kupiłem i chleb, i mleko.</text>
    </svg>`,
    text: `<p>Przecinek najczęściej oddziela zdania składowe. Stawiamy go przed słowami, które zaczynają nowe zdanie: <b>że, żeby, bo, ponieważ, który, gdy, jeśli</b>, i przed spójnikami przeciwstawnymi: <b>ale, lecz</b> oraz wynikowymi: <b>więc, dlatego</b>.</p>
      <p>Pojedyncze <b>i, oraz, lub, albo, ani, czy</b> same łączą – przecinek byłby zbędny. Gdy spójnik się powtarza („i… i…”), przecinek stawiamy przed drugim.</p>`,
    remember: 'Przecinek przed: że, żeby, bo, ponieważ, który, gdy, jeśli, ale, lecz, więc. Bez przecinka przed pojedynczym: i, oraz, lub, albo, ani, czy.',
    hook: '„I”, „lub”, „albo” to <b>kleje</b> – same łączą, więc przecinek jest im niepotrzebny. „Że”, „który”, „bo” to <b>drzwi</b> do nowego zdania – a przed drzwiami stawiamy próg.',
    check: { q: 'W którym zdaniu przecinek jest błędny?', options: ['Kupiłem chleb, bo był świeży.', 'Kupiłem chleb, i mleko.', 'Kupiłem i chleb, i mleko.', 'Wiem, że masz rację.'], answer: 1, explain: 'Przed pojedynczym „i” nie stawiamy przecinka.' },
  },
  {
    title: 'Wtrącenie, wołacz, wyliczenie',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Wtrącenie który mieszka w Gdańsku oddzielone przecinkami z obu stron; wołacz Aniu; wyliczenie">
      <rect x="76" y="14" width="246" height="30" rx="6" class="f4"/>
      <text x="10" y="36" class="tx">Mój brat<tspan class="tx-b t2">,</tspan> który mieszka w Gdańsku<tspan class="tx-b t2">,</tspan></text>
      <text x="10" y="62" class="tx">przyjedzie jutro.</text>
      <text x="200" y="82" class="tx-s" text-anchor="middle">wtrącenie – przecinki z obu stron</text>
      <text x="10" y="124" class="tx">Aniu<tspan class="tx-b t2">,</tspan> podaj mi książkę.</text>
      <text x="410" y="124" class="tx-s" text-anchor="end">wołacz</text>
      <text x="10" y="164" class="tx">jabłka<tspan class="tx-b t2">,</tspan> gruszki<tspan class="tx-b t2">,</tspan> śliwki i banany</text>
      <text x="410" y="164" class="tx-s" text-anchor="end">wyliczenie</text>
      <text x="10" y="202" class="tx">biały jak śnieg</text>
      <text x="410" y="202" class="tx-s" text-anchor="end">porównanie – bez przecinka</text>
    </svg>`,
    text: `<p><b>Wtrącenie</b> to dodatkowa informacja wsunięta w zdanie. Możesz ją wyjąć, a zdanie nadal ma sens („Mój brat przyjedzie jutro”). Dlatego przecinki stawiamy <b>parami</b> – na początku i na końcu wtrącenia.</p>
      <p>Przecinkiem oddzielamy też <b>wołacz</b> (Aniu, Panie Profesorze) i elementy <b>wyliczenia</b> (przed ostatnim „i” – już nie). W porównaniu bez czasownika („biały jak śnieg”) przecinka nie ma.</p>`,
    remember: 'Wtrącenie – przecinek z obu stron. Wołacz – zawsze oddzielony przecinkiem.',
    hook: 'Wtrącenie jest jak <b>kanapka</b>: przecinek to kromka chleba z każdej strony – nie zostawiaj jej otwartej.',
  },
  {
    title: 'Inne znaki – do czego służą',
    svg: `<svg viewBox="0 0 420 176" role="img" aria-label="Sześć kafelków: kropka, dwukropek, średnik, myślnik, cudzysłów, nawias i ich zastosowania">
      <rect x="6" y="6" width="130" height="78" rx="10" class="f1 s1"/><rect x="145" y="6" width="130" height="78" rx="10" class="f3 s3"/><rect x="284" y="6" width="130" height="78" rx="10" class="f4 s4"/>
      <rect x="6" y="92" width="130" height="78" rx="10" class="f5 s5"/><rect x="145" y="92" width="130" height="78" rx="10" class="f2 s2"/><rect x="284" y="92" width="130" height="78" rx="10" class="f1 s1"/>
      <text x="71" y="36" class="tx-b" text-anchor="middle">.  kropka</text><text x="71" y="62" class="tx-s" text-anchor="middle">koniec zdania, np.</text>
      <text x="210" y="36" class="tx-b" text-anchor="middle">:  dwukropek</text><text x="210" y="62" class="tx-s" text-anchor="middle">wyliczenie, cytat</text>
      <text x="349" y="36" class="tx-b" text-anchor="middle">;  średnik</text><text x="349" y="62" class="tx-s" text-anchor="middle">długie części zdania</text>
      <text x="71" y="122" class="tx-b" text-anchor="middle">–  myślnik</text><text x="71" y="148" class="tx-s" text-anchor="middle">dialog, wtrącenie</text>
      <text x="210" y="122" class="tx-b" text-anchor="middle">„ ”  cudzysłów</text><text x="210" y="148" class="tx-s" text-anchor="middle">cytat, tytuł, ironia</text>
      <text x="349" y="122" class="tx-b" text-anchor="middle">( )  nawias</text><text x="349" y="148" class="tx-s" text-anchor="middle">dopowiedzenie</text>
    </svg>`,
    text: `<p><b>Dwukropek</b> zapowiada: wyliczenie („Miałem trzy rzeczy: kanapki, wodę i mapę”), cudze słowa albo wyjaśnienie. <b>Średnik</b> dzieli długie zdanie złożone na wyraźne części, gdy przecinków jest już dużo.</p>
      <p><b>Cudzysłów</b> otacza cytaty i tytuły, a czasem słowo użyte z przymrużeniem oka. <b>Nawias</b> mieści dopowiedzenie. Skróty: <i>np., tzn., ul.</i> z kropką, ale <i>dr, mgr</i> – bez (kończą się ostatnią literą wyrazu).</p>`,
    remember: 'Dwukropek – zapowiedź (wyliczenie, cytat, wyjaśnienie). Średnik – mocniejszy przecinek. Nawias – dopowiedzenie.',
    check: { q: 'Który znak postawisz w luce: „Na wycieczkę zabierz trzy rzeczy _ mapę, wodę i kurtkę.”?', options: ['średnik', 'dwukropek', 'nawias', 'pytajnik'], answer: 1, explain: 'Słowa „trzy rzeczy” zapowiadają wyliczenie – stawiamy dwukropek.' },
  },
  {
    title: 'Cudze słowa i dialog',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Przykłady zapisu: mowa niezależna, pytanie w cudzysłowie bez kropki na końcu, dialog z myślnikami">
      <text x="10" y="22" class="tx-s">mowa niezależna – dwukropek i cudzysłów</text>
      <text x="10" y="48" class="tx">Ola powiedziała<tspan class="tx-b t2">:</tspan> <tspan class="t2">„</tspan>Jutro przyjdę<tspan class="t2">”</tspan><tspan class="tx-b t2">.</tspan></text>
      <text x="10" y="88" class="tx-s">pytanie należy do cytatu – bez kropki na końcu</text>
      <text x="10" y="114" class="tx">Ola zapytała: „Przyjdziesz jutro<tspan class="tx-b t2">?</tspan>”</text>
      <text x="10" y="154" class="tx-s">dialog – myślnik, słowa narratora małą literą</text>
      <text x="10" y="180" class="tx"><tspan class="tx-b t2">–</tspan> Przyjdę jutro <tspan class="tx-b t2">–</tspan> <tspan class="t2">p</tspan>owiedziała Ola.</text>
    </svg>`,
    text: `<p>Przytaczając cudze słowa dosłownie, stawiasz <b>dwukropek</b> i otwierasz <b>cudzysłów</b> („ na dole, ” na górze). Jeśli przytoczenie kończy się pytajnikiem lub wykrzyknikiem, ten znak zostaje w cudzysłowie i już nic nie dodajesz.</p>
      <p>W opowiadaniu dialog zapisujesz od nowej linii, od <b>myślnika</b>. Słowa narratora („powiedziała Ola”) oddzielasz myślnikiem i piszesz małą literą. To się przydaje w wypracowaniu!</p>`,
    remember: 'Ola powiedziała: „Jutro przyjdę”. · Ola zapytała: „Przyjdziesz?” · – Przyjdę – powiedziała Ola.',
    hook: 'Myślnik w dialogu to <b>mikrofon</b>: kto go trzyma, ten mówi. Narrator wtrąca się tylko między myślnikami.',
    check: { q: 'Który zapis jest poprawny?', options: ['Ola zapytała: „Przyjdziesz jutro”?', 'Ola zapytała: „Przyjdziesz jutro?”', 'Ola zapytała: „Przyjdziesz jutro?”.', 'Ola zapytała, przyjdziesz jutro?'], answer: 1, explain: 'Pytajnik należy do słów Oli, więc stoi w cudzysłowie; kropki już nie dodajemy.' },
  },
  {
    title: 'Wielka czy mała litera?',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Dwie kolumny: wielką literą Polak, Ślązak, Morze Bałtyckie, Boże Narodzenie; małą literą poniedziałek, maj, warszawianin, polski">
      <rect x="6" y="6" width="198" height="196" rx="12" class="f1 s1 sw"/>
      <rect x="216" y="6" width="198" height="196" rx="12" class="f4 s4 sw"/>
      <text x="105" y="36" class="tx-b" text-anchor="middle">WIELKA</text>
      <text x="315" y="36" class="tx-b" text-anchor="middle">mała</text>
      <text x="105" y="70" class="tx" text-anchor="middle">Polak, Ślązak</text>
      <text x="105" y="100" class="tx" text-anchor="middle">Morze Bałtyckie</text>
      <text x="105" y="130" class="tx" text-anchor="middle">Boże Narodzenie</text>
      <text x="105" y="160" class="tx" text-anchor="middle">„Kamienie na szaniec”</text>
      <text x="105" y="188" class="tx-s" text-anchor="middle">Ty, Pan (w liście)</text>
      <text x="315" y="70" class="tx" text-anchor="middle">poniedziałek, maj</text>
      <text x="315" y="100" class="tx" text-anchor="middle">warszawianin</text>
      <text x="315" y="130" class="tx" text-anchor="middle">krakowianin</text>
      <text x="315" y="160" class="tx" text-anchor="middle">polski, warszawski</text>
      <text x="315" y="188" class="tx-s" text-anchor="middle">(przymiotniki od nazw)</text>
    </svg>`,
    text: `<p>Wielką literą piszemy <b>nazwy własne</b>: imiona, państwa, miasta, rzeki, góry, morza (oba wyrazy: Morze Bałtyckie), święta, a także mieszkańców krajów i regionów (Polak, Europejczyk, Ślązak). W tytule książki – tylko pierwszy wyraz.</p>
      <p>Małą: dni tygodnia, miesiące, <b>mieszkańców miast</b> (warszawianin) i przymiotniki od nazw (polski, warszawski).</p>`,
    remember: 'Polak – wielką, warszawianin – małą. Maj, poniedziałek – małą. Tytuł: wielka tylko na początku.',
    hook: 'Kraj i region są „wielkie”, miasto „małe” – Ślązak wielką, krakowianin małą.',
    check: { q: 'W którym szeregu wszystko zapisano poprawnie?', options: ['polak, Warszawianin, Poniedziałek', 'Polak, warszawianin, poniedziałek', 'Polak, Warszawianin, poniedziałek', 'polak, warszawianin, Poniedziałek'], answer: 1, explain: 'Mieszkaniec kraju – wielką, mieszkaniec miasta i dzień tygodnia – małą.' },
  },
  {
    title: 'Ortografia – sprawdzaj wymianą',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Sześć kafelków z regułami: ó wymienia się na o, -uje, rz po spółgłosce, ż wymienia się na g, ch na sz, tę i tą">
      <rect x="6" y="6" width="200" height="64" rx="10" class="f1 s1"/><rect x="214" y="6" width="200" height="64" rx="10" class="f3 s3"/>
      <rect x="6" y="78" width="200" height="64" rx="10" class="f4 s4"/><rect x="214" y="78" width="200" height="64" rx="10" class="f2 s2"/>
      <rect x="6" y="150" width="200" height="64" rx="10" class="f5 s5"/><rect x="214" y="150" width="200" height="64" rx="10" class="f1 s1"/>
      <text x="106" y="32" class="tx-b" text-anchor="middle">ó ↔ o, e, a</text><text x="106" y="56" class="tx-s" text-anchor="middle">stół – stołu, siódmy – siedem</text>
      <text x="314" y="32" class="tx-b" text-anchor="middle">u: -uje, -unek</text><text x="314" y="56" class="tx-s" text-anchor="middle">maluje, rysunek, kapelusz</text>
      <text x="106" y="104" class="tx-b" text-anchor="middle">rz po b, p, k, t…</text><text x="106" y="128" class="tx-s" text-anchor="middle">brzeg, krzesło, trzy</text>
      <text x="314" y="104" class="tx-b" text-anchor="middle">ż ↔ g, z, s, h</text><text x="314" y="128" class="tx-s" text-anchor="middle">może – mogę, wożę – wozić</text>
      <text x="106" y="176" class="tx-b" text-anchor="middle">ch ↔ sz</text><text x="106" y="200" class="tx-s" text-anchor="middle">mucha – musze</text>
      <text x="314" y="176" class="tx-b" text-anchor="middle">tę / tą</text><text x="314" y="200" class="tx-s" text-anchor="middle">tę książkę · z tą książką</text>
    </svg>`,
    text: `<p>Najpewniejsza metoda: <b>znajdź inną formę</b> lub wyraz pokrewny, w którym słychać wymianę. Słyszysz „stołu” – piszesz „stół”. Słyszysz „mogę” – piszesz „może”.</p>
      <p>Gdy wymiany nie ma, pomagają reguły: <i>-uje, -unek, -usz</i> zawsze przez <b>u</b>; po <i>b, p, d, t, g, k, ch, j, w</i> piszemy <b>rz</b> (wyjątki: pszenica, pszczoła, kształt); po <i>l, ł, r, n</i> – <b>ż</b>. Razem: <i>spod, znad, naprawdę, zrobiłbym</i>; osobno: <i>na pewno, w ogóle, z powrotem</i>.</p>`,
    remember: 'Najpierw szukaj wymiany (ó–o, rz–r, ż–g, ch–sz), dopiero potem reguły bez wymiany.',
    hook: '<b>Tę</b> książkę czytam (co? – tę, jak „Ewę”), <b>z tą</b> książką idę (z czym? – z tą, jak „z mamą”).',
    check: { q: 'Który zapis jest poprawny?', options: ['napewno, wogóle', 'na pewno, w ogóle', 'na pewno, wogóle', 'napewno, w ogóle'], answer: 1, explain: 'Wyrażenia przyimkowe „na pewno”, „w ogóle”, „z powrotem” piszemy osobno.' },
  },
];

/* ===================== ODMIANA WYRAZÓW I ZDANIE POJEDYNCZE ===================== */
window.LESSONS['polski/odmiana-zdanie'] = [
  {
    title: 'Siedem przypadków – siedem pytań',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Tabela siedmiu przypadków z pytaniami i odmianą wyrazu kot">
      <text x="14" y="18" class="tx-s">przypadek</text>
      <text x="150" y="18" class="tx-s">pytania</text>
      <text x="330" y="18" class="tx-s">kot</text>
      <rect x="6" y="26" width="408" height="28" rx="7" class="f1"/>
      <text x="14" y="46" class="tx-b">mianownik</text><text x="150" y="46" class="tx">kto? co?</text><text x="330" y="46" class="tx-b t1">kot</text>
      <rect x="6" y="56" width="408" height="28" rx="7" class="f2"/>
      <text x="14" y="76" class="tx-b">dopełniacz</text><text x="150" y="76" class="tx">kogo? czego?</text><text x="330" y="76" class="tx-b t2">kota</text>
      <text x="14" y="106" class="tx-b">celownik</text><text x="150" y="106" class="tx">komu? czemu?</text><text x="330" y="106" class="tx-b">kotu</text>
      <rect x="6" y="116" width="408" height="28" rx="7" class="f2"/>
      <text x="14" y="136" class="tx-b">biernik</text><text x="150" y="136" class="tx">kogo? co?</text><text x="330" y="136" class="tx-b t2">kota</text>
      <text x="14" y="166" class="tx-b">narzędnik</text><text x="150" y="166" class="tx">(z) kim? (z) czym?</text><text x="330" y="166" class="tx-b">kotem</text>
      <text x="14" y="196" class="tx-b">miejscownik</text><text x="150" y="196" class="tx">(o) kim? (o) czym?</text><text x="330" y="196" class="tx-b">kocie</text>
      <text x="14" y="226" class="tx-b">wołacz</text><text x="150" y="226" class="tx">o!</text><text x="330" y="226" class="tx-b">kocie!</text>
    </svg>`,
    text: `<p>Rzeczownik (a razem z nim przymiotnik, liczebnik i zaimek) zmienia końcówkę zależnie od roli w zdaniu – to odmiana przez <b>przypadki</b>. Każdy przypadek ma swoje pytanie.</p>
      <p>Pomarańczowe wiersze to pułapka: dopełniacz i biernik mają to samo pytanie „kogo?”. Dodaj wyraz pomocniczy: <i>nie ma</i> kogo? – dopełniacz, <i>widzę</i> kogo? – biernik. Po przeczeniu biernik zamienia się w dopełniacz: <i>mam czas – nie mam czasu</i>.</p>`,
    remember: 'Mianownik (kto? co?) to zwykle podmiot. Wołacz (Kasiu!) to zwrot do kogoś – oddzielasz go przecinkiem.',
    hook: 'Kolejność przypadków: <b>M</b>ama <b>D</b>aje <b>C</b>ukierki, <b>B</b>abcia <b>N</b>osi <b>M</b>iętowe <b>W</b>afelki (M, D, C, B, N, Ms, W).',
    check: { q: 'W jakim przypadku jest wyraz „babci” w zdaniu „Nie ma babci w domu.”?', options: ['w dopełniaczu', 'w celowniku', 'w miejscowniku', 'w bierniku'], answer: 0, explain: 'Forma „babci” bywa też celownikiem i miejscownikiem, ale tu pytamy: nie ma kogo? – to dopełniacz. Zawsze pytaj w kontekście zdania.' },
  },
  {
    title: 'Czasownik: osoba, czas i tryb',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Oś czasu: czas przeszły, teraźniejszy i przyszły oraz trzy tryby czasownika">
      <defs><marker id="a-pl-odm-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="70" y="20" class="tx-b t1" text-anchor="middle">przeszły</text>
      <text x="210" y="20" class="tx-b t3" text-anchor="middle">teraźniejszy</text>
      <text x="350" y="20" class="tx-b t2" text-anchor="middle">przyszły</text>
      <path d="M14,40 L406,40" class="ln sw" marker-end="url(#a-pl-odm-2)"/>
      <circle cx="70" cy="40" r="6" class="f1 s1 sw"/>
      <circle cx="210" cy="40" r="6" class="f3 s3 sw"/>
      <circle cx="350" cy="40" r="6" class="f2 s2 sw"/>
      <text x="70" y="66" class="tx" text-anchor="middle">czytałem</text>
      <text x="210" y="66" class="tx" text-anchor="middle">czytam</text>
      <text x="350" y="66" class="tx" text-anchor="middle">przeczytam</text>
      <text x="350" y="88" class="tx" text-anchor="middle">będę czytać</text>
      <rect x="6" y="110" width="408" height="36" rx="9" class="f1 s1"/>
      <text x="16" y="134" class="tx-b">oznajmujący</text><text x="170" y="134" class="tx">czytam, czytałem</text>
      <rect x="6" y="152" width="408" height="36" rx="9" class="f2 s2"/>
      <text x="16" y="176" class="tx-b">rozkazujący</text><text x="170" y="176" class="tx">czytaj! czytajmy!</text>
      <rect x="6" y="194" width="408" height="36" rx="9" class="f5 s5"/>
      <text x="16" y="218" class="tx-b">przypuszczający</text><text x="190" y="218" class="tx">czytałbym, czytałaby</text>
    </svg>`,
    text: `<p>Czasownik odmienia się przez <b>osoby</b> (czytam, czytasz, czyta), <b>liczby</b> (czytam – czytamy), <b>czasy</b>, a w czasie przeszłym także przez <b>rodzaje</b> (czytał, czytała, czytało).</p>
      <p>Czas przyszły bywa <b>prosty</b> (przeczytam – czasownik dokonany) albo <b>złożony</b> (będę czytać – niedokonany). <b>Tryb</b> mówi, czy informujesz (oznajmujący), polecasz lub prosisz (rozkazujący), czy marzysz, stawiasz warunek albo grzecznie prosisz (przypuszczający: „Czy mógłbyś…?”).</p>
      <p>Uważaj na formy z błędem: <i>poszłem, wziąść, weźmij, rozumię</i>. Poprawnie: <b>poszedłem, wziąć, weź, rozumiem</b>.</p>`,
    remember: 'Czasowniki dokonane (przeczytać, napisać) nie mają czasu teraźniejszego: przeczytałem → przeczytam.',
    hook: 'Tryb przypuszczający poznasz po cząstce <b>-by</b> – jak w „gdyby”. Piszesz ją razem z czasownikiem: <i>zrobiłbym</i>.',
    check: { q: 'Który czasownik jest w trybie rozkazującym?', options: ['przeczytaj', 'przeczytałby', 'przeczytam', 'przeczytał'], answer: 0, explain: '„Przeczytaj!” to polecenie. „Przeczytałby” – przypuszczający, „przeczytam”, „przeczytał” – oznajmujący.' },
  },
  {
    title: 'Stopniowanie – trzy schodki',
    svg: `<svg viewBox="0 0 420 268" role="img" aria-label="Schodki stopni równego, wyższego i najwyższego oraz przykłady stopniowania prostego, opisowego i nieregularnego">
      <rect x="10" y="50" width="133" height="24" class="f3 s3"/>
      <rect x="143" y="36" width="134" height="38" class="f3 s3"/>
      <rect x="277" y="22" width="133" height="52" class="f3 s3"/>
      <text x="76" y="68" class="tx" text-anchor="middle">równy</text>
      <text x="210" y="68" class="tx" text-anchor="middle">wyższy</text>
      <text x="343" y="68" class="tx" text-anchor="middle">najwyższy</text>
      <text x="10" y="98" class="tx-s t1">PROSTE: -szy, -ejszy</text>
      <text x="76" y="122" class="tx-b" text-anchor="middle">miły</text>
      <text x="210" y="122" class="tx-b" text-anchor="middle">milszy</text>
      <text x="343" y="122" class="tx-b" text-anchor="middle">najmilszy</text>
      <line x1="10" y1="136" x2="410" y2="136" class="ln-thin"/>
      <text x="10" y="156" class="tx-s t5">OPISOWE: bardziej, najbardziej</text>
      <text x="210" y="176" class="tx-s" text-anchor="middle">bardziej</text>
      <text x="343" y="176" class="tx-s" text-anchor="middle">najbardziej</text>
      <text x="76" y="196" class="tx-b" text-anchor="middle">zmęczony</text>
      <text x="210" y="196" class="tx-b" text-anchor="middle">zmęczony</text>
      <text x="343" y="196" class="tx-b" text-anchor="middle">zmęczony</text>
      <line x1="10" y1="210" x2="410" y2="210" class="ln-thin"/>
      <text x="10" y="230" class="tx-s t2">NIEREGULARNE: zmienia się cały wyraz!</text>
      <text x="76" y="256" class="tx-b" text-anchor="middle">dobry</text>
      <text x="210" y="256" class="tx-b t2" text-anchor="middle">lepszy</text>
      <text x="343" y="256" class="tx-b t2" text-anchor="middle">najlepszy</text>
    </svg>`,
    text: `<p>Przymiotniki i przysłówki mają trzy stopnie: <b>równy, wyższy, najwyższy</b>. Stopniujesz je na trzy sposoby:</p>
      <ul><li><b>prosto</b> – końcówką: miły – milszy – najmilszy; szybko – szybciej – najszybciej,</li>
      <li><b>opisowo</b> – słówkami <i>bardziej, najbardziej</i> (albo <i>mniej, najmniej</i>): bardziej zmęczony,</li>
      <li><b>nieregularnie</b> – innym wyrazem: dobry – lepszy, zły – gorszy, duży – większy, mały – mniejszy; dobrze – lepiej, źle – gorzej.</li></ul>
      <p>Niektórych przymiotników nie stopniujemy: <i>drewniany, szkolny, wczorajszy</i>.</p>`,
    remember: 'Nigdy nie łącz dwóch sposobów: ✘ <i>bardziej lepszy</i>, ✘ <i>najbardziej najlepszy</i>. „Lepszy” już jest stopniem wyższym.',
    hook: 'Cztery „buntowniki” w parach przeciwieństw: <b>dobry – zły</b>, <b>duży – mały</b>. One nie chcą końcówki -szy, tylko zmieniają kostium: lepszy, gorszy, większy, mniejszy.',
    check: { q: 'Jaki jest stopień wyższy przymiotnika „mały”?', options: ['malszy', 'bardziej mały', 'mniejszy', 'najmniejszy'], answer: 2, explain: '„Mały” stopniuje się nieregularnie: mały – mniejszy – najmniejszy.' },
  },
  {
    title: 'Związki wyrazów – kto tu rządzi?',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Związki wyrazów w zdaniu: główny, zgody, rządu i przynależności">
      <text x="210" y="20" class="tx" text-anchor="middle">Mój młodszy brat szybko czyta komiksy.</text>
      <rect x="6" y="32" width="408" height="46" rx="10" class="f1 s1"/>
      <text x="16" y="61" class="tx-b">brat czyta</text>
      <text x="160" y="51" class="tx-b t1">główny</text>
      <text x="160" y="70" class="tx-s">podmiot + orzeczenie</text>
      <rect x="6" y="82" width="408" height="46" rx="10" class="f3 s3"/>
      <text x="16" y="111" class="tx-b">młodszy brat</text>
      <text x="160" y="101" class="tx-b t3">zgody</text>
      <text x="160" y="120" class="tx-s">odmieniają się razem: młodszego brata</text>
      <rect x="6" y="132" width="408" height="46" rx="10" class="f2 s2"/>
      <text x="16" y="161" class="tx-b">czyta komiksy</text>
      <text x="160" y="151" class="tx-b t2">rządu</text>
      <text x="160" y="170" class="tx-s">czasownik narzuca przypadek (co?)</text>
      <rect x="6" y="182" width="408" height="46" rx="10" class="f5 s5"/>
      <text x="16" y="211" class="tx-b">czyta szybko</text>
      <text x="160" y="201" class="tx-b t5">przynależności</text>
      <text x="160" y="220" class="tx-s">wyraz nieodmienny tylko przylega</text>
    </svg>`,
    text: `<p>W każdej parze wyrazów jeden jest <b>nadrzędny</b> (określany), drugi <b>podrzędny</b> (określający). Pytanie zadajesz od nadrzędnego: <i>brat</i> (jaki?) <i>młodszy</i>, <i>czyta</i> (co?) <i>komiksy</i>, <i>czyta</i> (jak?) <i>szybko</i>.</p>
      <ul><li><b>Zgoda</b> – podrzędny dopasowuje przypadek, liczbę i rodzaj: młodszy brat, młodszemu bratu.</li>
      <li><b>Rząd</b> – nadrzędny narzuca przypadek, który się nie zmienia: czyta komiksy, czytał komiksy; szukam kluczy.</li>
      <li><b>Przynależność</b> – podrzędny jest nieodmienny (przysłówek, bezokolicznik): czyta szybko, chcę czytać.</li></ul>`,
    remember: 'Odmień wyraz nadrzędny i patrz, co się dzieje z podrzędnym: zmienia się razem – zgoda; stoi w tym samym przypadku – rząd; nie odmienia się wcale – przynależność.',
    hook: 'Zgoda – jak bliźniaki: zmieniają się razem. Rząd – jak szef: narzuca przypadek. Przynależność – jak przyczepa: nic nie zmienia, tylko jedzie za samochodem.',
    check: { q: 'Jaki związek tworzą wyrazy „pomagam mamie”?', options: ['zgody', 'rządu', 'przynależności', 'główny'], answer: 1, explain: '„Pomagać” wymaga celownika (komu?): pomagam mamie, pomagałem mamie – przypadek się nie zmienia.' },
  },
  {
    title: 'Jakie to wypowiedzenie?',
    svg: `<svg viewBox="0 0 420 264" role="img" aria-label="Podział wypowiedzeń ze względu na cel i ze względu na budowę">
      <text x="10" y="18" class="tx-s">CEL WYPOWIEDZI</text>
      <rect x="6" y="26" width="408" height="30" rx="8" class="f1"/>
      <text x="18" y="47" class="tx-b">.</text><text x="40" y="47" class="tx-b">oznajmujące</text><text x="180" y="47" class="tx">Jutro mamy test.</text>
      <rect x="6" y="60" width="408" height="30" rx="8" class="f3"/>
      <text x="18" y="81" class="tx-b">?</text><text x="40" y="81" class="tx-b">pytające</text><text x="180" y="81" class="tx">Czy jutro mamy test?</text>
      <rect x="6" y="94" width="408" height="30" rx="8" class="f2"/>
      <text x="18" y="115" class="tx-b">!</text><text x="40" y="115" class="tx-b">rozkazujące</text><text x="180" y="115" class="tx">Naucz się na test!</text>
      <text x="10" y="150" class="tx-s">BUDOWA – policz osobowe formy czasownika</text>
      <rect x="6" y="158" width="408" height="30" rx="8" class="f4"/>
      <text x="18" y="179" class="tx-b">1</text><text x="40" y="179" class="tx-b">pojedyncze</text><text x="180" y="179" class="tx">Ola czyta książkę.</text>
      <rect x="6" y="192" width="408" height="30" rx="8" class="f5"/>
      <text x="18" y="213" class="tx-b">2+</text><text x="46" y="213" class="tx-b">złożone</text><text x="180" y="213" class="tx">Ola czyta, a Tomek gra.</text>
      <rect x="6" y="226" width="408" height="30" rx="8" class="f2"/>
      <text x="18" y="247" class="tx-b">0</text><text x="40" y="247" class="tx-b">równoważnik</text><text x="180" y="247" class="tx">Cisza w klasie.</text>
    </svg>`,
    text: `<p>Wypowiedzenia dzielisz na dwa sposoby. Ze względu na <b>cel</b>: oznajmujące (informuje), pytające (pyta), rozkazujące (poleca, prosi – może kończyć się wykrzyknikiem albo kropką: „Proszę usiąść.”).</p>
      <p>Ze względu na <b>budowę</b>: zdanie <b>pojedyncze</b> ma jedno orzeczenie, <b>złożone</b> – co najmniej dwa, a <b>równoważnik zdania</b> nie ma osobowej formy czasownika. „Idę do kina.” to zdanie pojedyncze – podmiot „ja” jest <b>domyślny</b>.</p>`,
    remember: 'Cel i budowa to dwie różne sprawy: „Zamknij okno!” jest rozkazujące i jednocześnie jest zdaniem pojedynczym.',
    hook: 'Licz czasowniki osobowe jak palce: zero – równoważnik, jeden – pojedyncze, dwa i więcej – złożone.',
    check: { q: 'Które wypowiedzenie jest zdaniem pojedynczym?', options: ['Ola czytała, a Tomek grał.', 'Wieczorem Ola czytała książkę o kosmosie.', 'Cisza nocna.', 'Kiedy zadzwoniłem, Ola czytała.'], answer: 1, explain: 'Jedno orzeczenie: czytała. „Cisza nocna” to równoważnik, a dwa pozostałe mają po dwa orzeczenia.' },
  },
  {
    title: 'Przekształcenia – ten sam sens, inna budowa',
    svg: `<svg viewBox="0 0 420 272" role="img" aria-label="Przekształcenia: zdanie złożone na pojedyncze, zdanie na równoważnik i równoważnik na zdanie">
      <defs><marker id="a-pl-odm-6" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="16" class="tx-s">ZŁOŻONE → POJEDYNCZE</text>
      <rect x="6" y="24" width="408" height="34" rx="9" class="f2 s2"/>
      <text x="210" y="47" class="tx" text-anchor="middle">Kiedy zadzwonił dzwonek, wyszliśmy.</text>
      <path d="M210,60 L210,84" class="ln" marker-end="url(#a-pl-odm-6)"/>
      <text x="222" y="78" class="tx-s">→ okolicznik czasu</text>
      <rect x="6" y="88" width="408" height="34" rx="9" class="f3 s3"/>
      <text x="210" y="111" class="tx-b" text-anchor="middle">Po dzwonku wyszliśmy.</text>
      <text x="10" y="148" class="tx-s">ZDANIE → RÓWNOWAŻNIK</text>
      <rect x="6" y="156" width="206" height="34" rx="9" class="f2 s2"/>
      <text x="109" y="179" class="tx" text-anchor="middle">W lesie panuje cisza.</text>
      <path d="M214,173 L236,173" class="ln" marker-end="url(#a-pl-odm-6)"/>
      <rect x="240" y="156" width="174" height="34" rx="9" class="f3 s3"/>
      <text x="327" y="179" class="tx-b" text-anchor="middle">Cisza w lesie.</text>
      <text x="10" y="216" class="tx-s">RÓWNOWAŻNIK → ZDANIE</text>
      <rect x="6" y="224" width="150" height="34" rx="9" class="f2 s2"/>
      <text x="81" y="247" class="tx" text-anchor="middle">Koniec lekcji.</text>
      <path d="M158,241 L184,241" class="ln" marker-end="url(#a-pl-odm-6)"/>
      <rect x="188" y="224" width="226" height="34" rx="9" class="f3 s3"/>
      <text x="301" y="247" class="tx-b" text-anchor="middle">Lekcja się skończyła.</text>
    </svg>`,
    text: `<p>Przy zamianie zdania złożonego na <b>pojedyncze</b> zdanie podrzędne zastępujesz <b>jedną częścią zdania</b>, najczęściej rzeczownikiem utworzonym od czasownika: <i>Kiedy wróciłem…</i> → <i>Po powrocie…</i>; <i>…ponieważ padał deszcz</i> → <i>…z powodu deszczu</i>.</p>
      <p>Zdanie → <b>równoważnik</b>: usuń osobową formę czasownika. Równoważnik → zdanie: dodaj ją. Sens ma zostać ten sam – to sprawdza egzaminator.</p>`,
    remember: 'Najpierw ustal, ile orzeczeń ma być w wyniku (pojedyncze – jedno, równoważnik – zero), a na końcu przeczytaj oba zdania: czy znaczą to samo?',
    hook: 'Przekształcenie to pakowanie walizki: ta sama zawartość, mniej miejsca. Rozpakowujesz – dokładasz czasownik.',
    check: { q: 'Które zdanie pojedyncze ma ten sam sens co „Nie wyszliśmy, ponieważ padał deszcz.”?', options: ['Nie wyszliśmy z powodu deszczu.', 'Nie wyszliśmy, bo padało.', 'Deszcz. Nie wyszliśmy.', 'Wyszliśmy mimo deszczu.'], answer: 0, explain: '„Nie wyszliśmy, bo padało” to nadal zdanie złożone, a „Wyszliśmy mimo deszczu” zmienia sens.' },
  },
];

/* ===================== FORMY WYPOWIEDZI: OD OGŁOSZENIA DO CV ===================== */
window.LESSONS['polski/formy-uzytkowe'] = [
  {
    title: 'Po co ten tekst? Cel podpowiada formę',
    svg: `<svg viewBox="0 0 420 262" role="img" aria-label="Formy wypowiedzi pogrupowane według celu: informują, zapraszają, dziękują, sprawy urzędowe, oceniają, pytają, przetwarzają tekst">
      <rect x="6" y="6" width="408" height="30" rx="8" class="f1"/>
      <text x="16" y="27" class="tx-b">📢 informują</text><text x="162" y="27" class="tx">ogłoszenie ★, sprawozdanie</text>
      <rect x="6" y="42" width="408" height="30" rx="8" class="f2"/>
      <text x="16" y="63" class="tx-b">💌 zapraszają</text><text x="162" y="63" class="tx">zaproszenie ★, życzenia</text>
      <rect x="6" y="78" width="408" height="30" rx="8" class="f3"/>
      <text x="16" y="99" class="tx-b">🙏 dziękują</text><text x="162" y="99" class="tx">podziękowanie, dedykacja</text>
      <rect x="6" y="114" width="408" height="30" rx="8" class="f4"/>
      <text x="16" y="135" class="tx-b">🏛️ urzędowe</text><text x="162" y="135" class="tx">podanie, CV, list motywacyjny</text>
      <rect x="6" y="150" width="408" height="30" rx="8" class="f5"/>
      <text x="16" y="171" class="tx-b">⭐ oceniają</text><text x="162" y="171" class="tx">recenzja</text>
      <rect x="6" y="186" width="408" height="30" rx="8" class="f1"/>
      <text x="16" y="207" class="tx-b">🎤 pytają</text><text x="162" y="207" class="tx">wywiad</text>
      <rect x="6" y="222" width="408" height="30" rx="8" class="f3"/>
      <text x="16" y="243" class="tx-b">✂️ przetwarzają</text><text x="172" y="243" class="tx">streszczenie ★, parafraza</text>
    </svg>`,
    text: `<p>Podstawa programowa wymienia wiele form wypowiedzi. Każda ma swój <b>cel</b> i swój „szkielet” – elementy, bez których tekst nie spełnia zadania.</p>
      <p>Gwiazdką oznaczone są formy, które według informatora CKE mogą się pojawić w <b>części I</b> arkusza: <b>ogłoszenie i zaproszenie</b> (zadania krótkiej odpowiedzi) oraz zadanie na <b>streszczenie</b>. Opowiadanie, rozprawka i przemówienie to formy wypracowania – są w dziale „Egzamin i wypracowanie”.</p>`,
    hook: 'Zanim zaczniesz pisać, zapytaj: po co ten tekst? Informuje, zaprasza, prosi, ocenia czy skraca? Cel podpowie formę.',
    check: { q: 'Które formy użytkowe informator CKE wymienia jako zadania krótkiej odpowiedzi w arkuszu?', options: ['ogłoszenie i zaproszenie', 'CV i list motywacyjny', 'recenzja i wywiad', 'życzenia i dedykacja'], answer: 0 },
  },
  {
    title: 'Zaproszenie i ogłoszenie – pięć pytań',
    svg: `<svg viewBox="0 0 420 228" role="img" aria-label="Wzór zaproszenia z zaznaczonymi pięcioma elementami: kto, kogo, na co, kiedy, gdzie">
      <rect x="6" y="6" width="262" height="216" rx="12" class="f4 s4 sw"/>
      <text x="137" y="34" class="tx-b" text-anchor="middle">ZAPROSZENIE</text>
      <text x="18" y="64" class="tx">Serdecznie zapraszamy</text>
      <text x="18" y="90" class="tx">uczniów klas 7–8</text>
      <text x="18" y="116" class="tx">na Wieczór Filmowy</text>
      <text x="18" y="142" class="tx">15 marca, godz. 17.00,</text>
      <text x="18" y="168" class="tx">w auli szkoły.</text>
      <text x="256" y="204" class="tx-b" text-anchor="end">Samorząd Uczniowski</text>
      <line x1="264" y1="85" x2="284" y2="85" class="dash"/>
      <text x="290" y="90" class="tx-b t1">② kogo?</text>
      <line x1="264" y1="111" x2="284" y2="111" class="dash"/>
      <text x="290" y="116" class="tx-b t3">③ na co?</text>
      <line x1="264" y1="137" x2="284" y2="137" class="dash"/>
      <text x="290" y="142" class="tx-b t2">④ kiedy?</text>
      <line x1="264" y1="163" x2="284" y2="163" class="dash"/>
      <text x="290" y="168" class="tx-b t5">⑤ gdzie?</text>
      <text x="290" y="204" class="tx-b t4">① kto?</text>
    </svg>`,
    text: `<p>W przykładowych zadaniach informatora CKE zaproszenie i ogłoszenie ocenia się za <b>3 pkt</b>. Za treść i formę (2 pkt) liczy się <b>pięć elementów</b>:</p>
      <ul><li>zaproszenie: <b>kto</b> zaprasza? <b>kogo</b>? <b>na co</b>? <b>kiedy</b>? <b>gdzie</b>?</li>
      <li>ogłoszenie: <b>kto</b> ogłasza? <b>dla kogo</b>? <b>o czym</b>? <b>kiedy</b>? <b>gdzie</b>?</li></ul>
      <p>Jeśli polecenie każe <b>zachęcić</b>, dodaj <b>2 argumenty</b> (np. co ciekawego się wydarzy, co można zyskać). Z jednym argumentem – tylko 1 pkt za treść. Trzeci punkt jest za poprawność.</p>`,
    remember: '5 elementów + 2 argumenty = 2 pkt. Poprawność: łącznie najwyżej 2 błędy (językowe, ortograficzne, interpunkcyjne) = 1 pkt.',
    hook: 'Pięć palców jednej ręki = pięć pytań. Zanim oddasz kartkę, policz na palcach: kto, kogo, na co, kiedy, gdzie.',
    check: { q: 'W zaproszeniu podałeś: kto zaprasza, kogo, na co i gdzie. Czego brakuje?', options: ['informacji, kiedy się odbywa', 'ceny biletów', 'pytania retorycznego', 'dialogu'], answer: 0 },
  },
  {
    title: 'Teksty urzędowe: podanie, CV, list motywacyjny',
    svg: `<svg viewBox="0 0 420 246" role="img" aria-label="Układ podania: nadawca w lewym górnym rogu, miejscowość i data w prawym górnym, adresat po prawej, prośba z uzasadnieniem w środku, podpis na dole po prawej">
      <rect x="40" y="6" width="340" height="234" rx="6" class="bg ln"/>
      <rect x="52" y="18" width="130" height="44" rx="6" class="f1 s1"/>
      <text x="117" y="36" class="tx-s" text-anchor="middle">imię i nazwisko,</text>
      <text x="117" y="54" class="tx-s" text-anchor="middle">klasa / adres</text>
      <rect x="236" y="18" width="132" height="28" rx="6" class="f4 s4"/>
      <text x="302" y="37" class="tx-s" text-anchor="middle">miejscowość, data</text>
      <rect x="236" y="56" width="132" height="44" rx="6" class="f2 s2"/>
      <text x="302" y="74" class="tx-s" text-anchor="middle">Pani Dyrektor</text>
      <text x="302" y="92" class="tx-s" text-anchor="middle">nazwa szkoły</text>
      <rect x="52" y="112" width="316" height="76" rx="6" class="f3 s3"/>
      <text x="210" y="138" class="tx-b" text-anchor="middle">prośba</text>
      <text x="210" y="160" class="tx-b" text-anchor="middle">+ uzasadnienie</text>
      <text x="210" y="180" class="tx-s" text-anchor="middle">„Zwracam się z uprzejmą prośbą o…”</text>
      <rect x="236" y="198" width="132" height="30" rx="6" class="f5 s5"/>
      <text x="302" y="218" class="tx" text-anchor="middle">podpis</text>
    </svg>`,
    text: `<p><b>Podanie</b> to oficjalna prośba. Ma stały układ (jak na rysunku), styl urzędowy, zwroty grzecznościowe i – co najważniejsze – <b>uzasadnienie</b>: dlaczego prosisz. Kończy się własnoręcznym podpisem.</p>
      <p><b>CV</b> to przedstawienie kandydata w punktach: dane i kontakt, wykształcenie, doświadczenie, umiejętności, zainteresowania – od najnowszych informacji. <b>List motywacyjny</b> dołączasz do CV: piszesz, o co się ubiegasz i dlaczego pasujesz, podając <b>przykłady</b>, a nie same ogólniki.</p>`,
    remember: 'Podanie bez uzasadnienia i podpisu jest niepełne. List motywacyjny nie powtarza CV – pokazuje motywację na przykładach.',
    hook: 'Podanie czytasz jak mapę: góra-lewo – kto pisze, góra-prawo – gdzie, kiedy i do kogo, środek – o co i dlaczego, dół – podpis.',
    check: { q: 'Czego brakuje w podaniu: „Proszę o zwolnienie z lekcji w piątek. Jan Nowak”?', options: ['puenty', 'uzasadnienia prośby (a także daty, danych nadawcy i adresata)', 'dialogu', 'pytania retorycznego'], answer: 1 },
  },
  {
    title: 'Recenzja i wywiad',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Porównanie recenzji z oceną w gwiazdkach i wywiadu z pytaniem i odpowiedzią">
      <rect x="6" y="6" width="200" height="188" rx="12" class="f4 s4"/>
      <text x="106" y="32" class="tx-b" text-anchor="middle">⭐ Recenzja</text>
      <text x="106" y="64" class="tx-b t4" text-anchor="middle">★★★★☆</text>
      <text x="18" y="94" class="tx-s">• tytuł i twórca</text>
      <text x="18" y="116" class="tx-s">• krótko o treści</text>
      <text x="18" y="138" class="tx-s">• ocena + uzasadnienie</text>
      <text x="18" y="160" class="tx-s">• polecam / nie polecam</text>
      <text x="18" y="182" class="tx-s t2">✘ bez zdradzania końca</text>
      <rect x="214" y="6" width="200" height="188" rx="12" class="f1 s1"/>
      <text x="314" y="32" class="tx-b" text-anchor="middle">🎤 Wywiad</text>
      <rect x="226" y="46" width="176" height="28" rx="10" class="f2"/>
      <text x="236" y="65" class="tx-s">P: Jak to się zaczęło?</text>
      <rect x="226" y="80" width="176" height="28" rx="10" class="f3"/>
      <text x="236" y="99" class="tx-s">O: Od pewnej książki…</text>
      <text x="226" y="132" class="tx-s">• wstęp o rozmówcy</text>
      <text x="226" y="154" class="tx-s">• pytania otwarte</text>
      <text x="226" y="176" class="tx-s">• podziękowanie</text>
    </svg>`,
    text: `<p><b>Recenzja</b> ocenia książkę, film, spektakl albo wystawę. Podajesz tytuł i twórcę, krótko mówisz, o czym jest dzieło (bez zdradzania zakończenia), a potem oceniasz jego elementy – i każdą ocenę <b>uzasadniasz</b>.</p>
      <p><b>Wywiad</b> to rozmowa z ciekawą osobą zapisana w formie pytań i odpowiedzi: wstęp o rozmówcy, pytania otwarte (takie, na które nie wystarczy „tak” albo „nie”), na końcu podziękowanie.</p>`,
    remember: 'Recenzja = informacja o dziele + ocena z uzasadnieniem. Wywiad = pytania otwarte, odpowiedzi oznaczone imieniem lub inicjałami.',
    hook: 'Recenzja bez uzasadnienia to tylko „lajk”. Recenzent zawsze mówi, <b>dlaczego</b>.',
    check: { q: 'Które zdanie najlepiej pasuje do recenzji filmu?', options: ['Film trwa dwie godziny, a bohater na końcu ginie.', 'Polecam ten film, bo zdjęcia i muzyka budują napięcie aż do ostatniej sceny.', 'Wczoraj byłem w kinie z kolegą.', 'Jak się pan czuje po premierze?'], answer: 1, explain: 'To ocena z uzasadnieniem. Pierwsze zdanie zdradza zakończenie, trzecie to relacja, czwarte – pytanie z wywiadu.' },
  },
  {
    title: 'Streszczenie a parafraza',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Długość tekstu oryginalnego, krótszego streszczenia i podobnej długości parafrazy">
      <text x="10" y="20" class="tx-s">TEKST</text>
      <rect x="10" y="28" width="400" height="34" rx="6" class="f4 s4"/>
      <line x1="22" y1="40" x2="398" y2="40" class="ln-thin"/>
      <line x1="22" y1="50" x2="360" y2="50" class="ln-thin"/>
      <text x="10" y="90" class="tx-s">STRESZCZENIE – krócej, tylko sedno</text>
      <rect x="10" y="98" width="130" height="34" rx="6" class="f3 s3 sw"/>
      <line x1="22" y1="110" x2="128" y2="110" class="ln-thin"/>
      <line x1="22" y1="120" x2="100" y2="120" class="ln-thin"/>
      <text x="154" y="121" class="tx">temat + co o nim powiedziano</text>
      <text x="10" y="160" class="tx-s">PARAFRAZA – tyle samo treści, innymi słowami</text>
      <rect x="10" y="168" width="400" height="34" rx="6" class="f1 s1 sw"/>
      <line x1="22" y1="180" x2="398" y2="180" class="ln-thin"/>
      <line x1="22" y1="190" x2="380" y2="190" class="ln-thin"/>
    </svg>`,
    text: `<p><b>Streszczenie</b> skraca tekst do najważniejszych informacji. Piszesz własnymi słowami, w kolejności jak w tekście, bez szczegółów, dialogów, cytatów i własnych ocen. W przykładowym zadaniu informatora CKE trzeba było podać <b>temat</b> tekstu i <b>to, co o nim powiedziano</b>, na właściwym poziomie ogólności. Przepisane fragmenty = 0 pkt.</p>
      <p><b>Parafraza</b> nie skraca – oddaje całą treść innymi, często prostszymi słowami, czasem z objaśnieniem. Nie dodajesz w niej własnych opinii.</p>`,
    remember: 'Streszczenie: krócej, sedno, własnymi słowami. Parafraza: ta sama treść, inne słowa.',
    hook: 'Streszczenie to „zip” – kompresja do sedna. Parafraza to „tłumaczenie na nasze” – tyle samo treści, prostsze słowa.',
    check: { q: 'Streszczasz tekst na egzaminie. Co zrobisz?', options: ['Przepiszę najważniejsze zdania z tekstu.', 'Podam temat i to, co autor o nim mówi – własnymi słowami, bez szczegółów.', 'Dodam swoją ocenę i ciekawe cytaty.', 'Opowiem wszystko ze szczegółami.'], answer: 1 },
  },
  {
    title: 'Sprawdź przed oddaniem',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Lista kontrolna najważniejszych elementów form wypowiedzi">
      <rect x="6" y="6" width="408" height="224" rx="12" class="f3 s3"/>
      <text x="22" y="40" class="tx-b t3">✔</text><text x="48" y="40" class="tx">zaproszenie, ogłoszenie: 5 elementów</text>
      <text x="22" y="74" class="tx-b t3">✔</text><text x="48" y="74" class="tx">„zachęć” = 2 argumenty</text>
      <text x="22" y="108" class="tx-b t3">✔</text><text x="48" y="108" class="tx">podanie: uzasadnienie i podpis</text>
      <text x="22" y="142" class="tx-b t3">✔</text><text x="48" y="142" class="tx">charakterystyka: cecha + przykład</text>
      <text x="22" y="176" class="tx-b t3">✔</text><text x="48" y="176" class="tx">plan: same zdania albo równoważniki</text>
      <text x="22" y="210" class="tx-b t3">✔</text><text x="48" y="210" class="tx">streszczenie: bez ocen i cytatów</text>
    </svg>`,
    text: `<p>Najczęstsze błędy w formach wypowiedzi to <b>brakujące elementy</b>: zaproszenie bez daty, ogłoszenie bez nadawcy, podanie bez uzasadnienia, list bez podpisu.</p>
      <p>W <b>charakterystyce</b> każdą cechę potwierdzasz przykładem zachowania. W <b>planie</b> trzymasz jedną formę punktów: same zdania albo same równoważniki. W <b>sprawozdaniu</b> opisujesz prawdziwe wydarzenie po kolei, a w <b>opisie przeżyć</b> – uczucia, nie wydarzenia.</p>`,
    remember: 'Najpierw szkielet (elementy obowiązkowe), potem treść (argumenty, ciekawe szczegóły), na końcu poprawność.',
    hook: 'Każda forma ma swój „szkielet”. Tekst bez kości się przewraca – egzaminator najpierw sprawdza, czy wszystkie są na miejscu.',
    check: { q: 'Uczeń napisał w charakterystyce: „Mój kolega Bartek jest odważny, mądry i koleżeński.” Czego brakuje?', options: ['dialogu', 'przykładów zachowań, które potwierdzają te cechy', 'daty i podpisu', 'zwrotu do adresata'], answer: 1 },
  },
];
