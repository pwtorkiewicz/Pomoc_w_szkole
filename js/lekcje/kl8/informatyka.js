/* Lekcje – informatyka, klasa 8. Klucz: 'informatyka/<id działu>'. Format: docs/LEKCJE.md
 * Treści oparte na działach z js/dane/kl8/informatyka.js (Dz.U. 2024 poz. 996, informatyka kl. VII–VIII). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['informatyka/algorytmy'] = [
  {
    title: 'Od problemu do programu',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Pięć etapów: problem, specyfikacja (dane i wynik), algorytm, program, testowanie; po testach wracamy do poprawek">
      <defs><marker id="a-k8i-al-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="170" height="64" rx="10" class="f1 s1"/>
      <rect x="240" y="10" width="170" height="64" rx="10" class="f2 s2"/>
      <rect x="10" y="122" width="170" height="64" rx="10" class="f3 s3"/>
      <rect x="240" y="122" width="170" height="64" rx="10" class="f5 s5"/>
      <g class="tx-b" text-anchor="middle"><text x="95" y="38">1. Problem</text><text x="325" y="38">2. Specyfikacja</text><text x="95" y="150">3. Algorytm</text><text x="325" y="150">4. Program</text></g>
      <g class="tx-s" text-anchor="middle"><text x="95" y="62">co trzeba rozwiązać?</text><text x="325" y="62">dane → wynik</text><text x="95" y="174">kroki rozwiązania</text><text x="325" y="174">zapis dla komputera</text></g>
      <g class="ln" fill="none">
        <path d="M182,42 L236,42" marker-end="url(#a-k8i-al-1)"/>
        <path d="M325,76 L325,98 L95,98 L95,118" marker-end="url(#a-k8i-al-1)"/>
        <path d="M182,154 L236,154" marker-end="url(#a-k8i-al-1)"/>
        <path d="M325,188 L325,214 L286,214" marker-end="url(#a-k8i-al-1)"/>
      </g>
      <path d="M140,214 L95,214 L95,192" class="ln dash" fill="none" marker-end="url(#a-k8i-al-1)"/>
      <rect x="140" y="196" width="144" height="36" rx="18" class="f4 s4"/>
      <text x="212" y="220" class="tx" text-anchor="middle">5. Testowanie</text>
    </svg>`,
    text: `<p>Zanim napiszesz choć linijkę kodu, ustal, co masz (<b>dane</b>) i co ma powstać (<b>wynik</b>) – to <b>specyfikacja</b>. Potem wymyśl kroki rozwiązania – <b>algorytm</b> – i dopiero wtedy zapisz je w języku programowania.</p>
      <p>Na koniec <b>testujesz</b>. Gdy wynik się nie zgadza, wracasz do algorytmu i poprawiasz.</p>`,
    remember: 'Problem → specyfikacja (dane i wynik) → algorytm → program → testy.',
    hook: 'Jak przy budowie domu: najpierw projekt, potem cegły.',
  },
  {
    title: 'Specyfikacja: dane i wynik',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Problem: pole prostokąta. Dane: a równe 6, b równe 4. Algorytm: P równa się a razy b. Wynik: P równe 24">
      <defs><marker id="a-k8i-al-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="210" y="24" class="tx-b" text-anchor="middle">Problem: pole prostokąta</text>
      <rect x="10" y="40" width="110" height="100" rx="10" class="f1 s1"/>
      <rect x="150" y="40" width="110" height="100" rx="10" class="f4 s4"/>
      <rect x="290" y="40" width="110" height="100" rx="10" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="65" y="66">DANE</text><text x="345" y="66">WYNIK</text></g>
      <g class="tx" text-anchor="middle"><text x="65" y="96">a = 6</text><text x="65" y="124">b = 4</text><text x="205" y="106">P = a · b</text><text x="345" y="106">P = 24</text></g>
      <text x="205" y="66" class="tx-s" text-anchor="middle">algorytm</text>
      <g class="ln"><path d="M122,90 L146,90" marker-end="url(#a-k8i-al-2)"/><path d="M262,90 L286,90" marker-end="url(#a-k8i-al-2)"/></g>
      <text x="210" y="172" class="tx-s" text-anchor="middle">specyfikacja = co mamy i co ma wyjść</text>
    </svg>`,
    text: `<p><b>Specyfikacja</b> opisuje problem bez mówienia, jak go rozwiązać: jakie są <b>dane</b> (co wiemy na początku) i jaki ma być <b>wynik</b>.</p>
      <p>Dobra specyfikacja mówi też, jakie dane są dopuszczalne – np. że boki prostokąta to liczby dodatnie.</p>`,
    remember: 'Specyfikacja = dane + wynik. Algorytm = jak dojść od danych do wyniku.',
    hook: 'Specyfikacja jak przepis kulinarny: lista składników (dane) i zdjęcie gotowego dania (wynik).',
    check: { q: 'Problem: oblicz średnią trzech ocen. Co jest wynikiem?', options: ['trzy oceny', 'średnia ocen', 'liczba 3'], answer: 1, explain: 'Oceny to dane, a średnia to wynik, który ma powstać.' },
  },
  {
    title: 'Lista kroków',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Lista kroków: krok 1 wczytaj a i b, krok 2 jeśli a większe od b to w równa się a, krok 3 jeśli a mniejsze lub równe b to w równa się b, krok 4 wypisz w, koniec">
      <rect x="10" y="10" width="400" height="38" rx="8" class="f1"/>
      <rect x="10" y="56" width="400" height="38" rx="8" class="bg ln-thin"/>
      <rect x="10" y="102" width="400" height="38" rx="8" class="f1"/>
      <rect x="10" y="148" width="400" height="38" rx="8" class="bg ln-thin"/>
      <g class="tx-b"><text x="22" y="35">Krok 1</text><text x="22" y="81">Krok 2</text><text x="22" y="127">Krok 3</text><text x="22" y="173">Krok 4</text></g>
      <g class="tx"><text x="104" y="35">Wczytaj a i b.</text><text x="104" y="81">Jeśli a &gt; b, to w = a.</text><text x="104" y="127">Jeśli a ≤ b, to w = b.</text><text x="104" y="173">Wypisz w. Koniec.</text></g>
    </svg>`,
    text: `<p><b>Lista kroków</b> to ponumerowane polecenia wykonywane po kolei. Krok może zawierać warunek („jeśli…”) albo skok („przejdź do kroku 2”) – tak zapisuje się powtarzanie.</p>
      <p>Każdy krok ma być jednoznaczny, a cały algorytm musi się kiedyś skończyć.</p>`,
    remember: 'Algorytm = skończony ciąg jednoznacznych kroków od danych do wyniku.',
    hook: 'Lista kroków jak instrukcja składania mebla: numerki i jasne polecenia – bez „jakoś to przykręć”.',
    check: { q: 'Co wypisze ten algorytm dla a = 3 i b = 3?', options: ['3', 'nic', '6'], answer: 0, explain: 'a > b jest fałszywe, ale a ≤ b – prawdziwe, więc w = 3.' },
  },
  {
    title: 'Schemat blokowy',
    svg: `<svg viewBox="0 0 420 300" role="img" aria-label="Schemat blokowy: start, wczytaj n, romb z warunkiem n modulo 2 równa się 0; na TAK wypisz parzysta, na NIE wypisz nieparzysta; potem stop">
      <defs><marker id="a-k8i-al-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <ellipse cx="210" cy="24" rx="55" ry="18" class="f3 s3"/>
      <text x="210" y="30" class="tx-b" text-anchor="middle">START</text>
      <polygon points="140,60 300,60 280,96 120,96" class="f1 s1"/>
      <text x="210" y="84" class="tx" text-anchor="middle">wczytaj n</text>
      <polygon points="210,112 300,146 210,180 120,146" class="f4 s4"/>
      <text x="210" y="152" class="tx" text-anchor="middle">n % 2 = 0 ?</text>
      <polygon points="22,198 138,198 118,240 2,240" class="f1 s1"/>
      <polygon points="302,198 418,198 398,240 282,240" class="f1 s1"/>
      <g class="tx-s" text-anchor="middle"><text x="70" y="214">wypisz</text><text x="350" y="214">wypisz</text><text x="96" y="138">TAK</text><text x="324" y="138">NIE</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="233">parzysta</text><text x="350" y="233">nieparzysta</text></g>
      <ellipse cx="210" cy="272" rx="50" ry="18" class="f2 s2"/>
      <text x="210" y="278" class="tx-b" text-anchor="middle">STOP</text>
      <g class="ln" fill="none">
        <path d="M210,42 L210,58" marker-end="url(#a-k8i-al-4)"/>
        <path d="M210,96 L210,110" marker-end="url(#a-k8i-al-4)"/>
        <path d="M120,146 L70,146 L70,196" marker-end="url(#a-k8i-al-4)"/>
        <path d="M300,146 L350,146 L350,196" marker-end="url(#a-k8i-al-4)"/>
        <path d="M70,240 L70,272 L158,272" marker-end="url(#a-k8i-al-4)"/>
        <path d="M350,240 L350,272 L262,272" marker-end="url(#a-k8i-al-4)"/>
      </g>
    </svg>`,
    text: `<p><b>Owal</b> – start i stop. <b>Równoległobok</b> – wczytanie lub wypisanie. <b>Prostokąt</b> – operacja, np. <b>s = s + k</b>. <b>Romb</b> – warunek z dwoma wyjściami: TAK i NIE. Strzałki pokazują kolejność.</p>`,
    remember: 'Owal – start/stop, równoległobok – wczytaj/wypisz, prostokąt – oblicz, romb – warunek.',
    hook: 'Romb jak rozwidlenie drogi: dwie strzałki – TAK albo NIE.',
    check: { q: 'W którym bloku zapiszesz pytanie „n > 0?”', options: ['w rombie', 'w owalu', 'w równoległoboku'], answer: 0, explain: 'Warunek zawsze trafia do rombu – ma dwa wyjścia: TAK i NIE.' },
  },
  {
    title: 'Testuj – szukaj pułapek',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tabela testów algorytmu z błędem: dla a 5 i b 3 wynik poprawny, dla a 2 i b 9 poprawny, dla a 4 i b 4 program nic nie wypisał – błąd">
      <text x="210" y="18" class="tx-s" text-anchor="middle">Algorytm z błędem:</text>
      <text x="210" y="40" class="tx" text-anchor="middle">jeśli a &gt; b → a; jeśli b &gt; a → b</text>
      <rect x="10" y="52" width="400" height="30" class="f4"/>
      <rect x="10" y="82" width="400" height="32" class="bg ln-thin"/>
      <rect x="10" y="114" width="400" height="32" class="bg ln-thin"/>
      <rect x="10" y="146" width="400" height="32" class="f2 s2"/>
      <g class="tx-s" text-anchor="middle"><text x="40" y="72">a</text><text x="100" y="72">b</text><text x="195" y="72">oczekiwany</text><text x="315" y="72">wypisał</text></g>
      <g class="tx" text-anchor="middle">
        <text x="40" y="104">5</text><text x="100" y="104">3</text><text x="195" y="104">5</text><text x="315" y="104">5</text><text x="390" y="104">✔</text>
        <text x="40" y="136">2</text><text x="100" y="136">9</text><text x="195" y="136">9</text><text x="315" y="136">9</text><text x="390" y="136">✔</text>
        <text x="40" y="168">4</text><text x="100" y="168">4</text><text x="195" y="168">4</text><text x="315" y="168">nic</text><text x="390" y="168">✘</text>
      </g>
    </svg>`,
    text: `<p>Program przeszedł dwa testy, a jednak ma błąd: gdy liczby są <b>równe</b>, nie wypisuje niczego. Taki błąd znajdziesz tylko wtedy, gdy celowo sprawdzisz przypadek „na granicy”.</p>
      <p>Porównuj wynik programu z wynikiem oczekiwanym według specyfikacji.</p>`,
    remember: 'Testuj zwykłe dane i przypadki graniczne: równe liczby, zero, liczby ujemne.',
    hook: 'Tester jak detektyw: szuka danych, dla których program się „wysypie”.',
  },
];

window.LESSONS['informatyka/liczby'] = [
  {
    title: 'Dzielenie z resztą: // i %',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="17 kropek: trzy grupy po 5 i 2 kropki reszty. 17 dzielone całkowicie przez 5 to 3, reszta z dzielenia 17 przez 5 to 2">
      <g class="bg ln-thin"><rect x="10" y="20" width="100" height="40" rx="8"/><rect x="120" y="20" width="100" height="40" rx="8"/><rect x="230" y="20" width="100" height="40" rx="8"/></g>
      <rect x="340" y="20" width="70" height="40" rx="8" class="ln dash" fill="none"/>
      <g class="f1 s1">
        <circle cx="24" cy="40" r="7"/><circle cx="42" cy="40" r="7"/><circle cx="60" cy="40" r="7"/><circle cx="78" cy="40" r="7"/><circle cx="96" cy="40" r="7"/>
        <circle cx="134" cy="40" r="7"/><circle cx="152" cy="40" r="7"/><circle cx="170" cy="40" r="7"/><circle cx="188" cy="40" r="7"/><circle cx="206" cy="40" r="7"/>
        <circle cx="244" cy="40" r="7"/><circle cx="262" cy="40" r="7"/><circle cx="280" cy="40" r="7"/><circle cx="298" cy="40" r="7"/><circle cx="316" cy="40" r="7"/>
      </g>
      <g class="f2 s2"><circle cx="362" cy="40" r="7"/><circle cx="388" cy="40" r="7"/></g>
      <g class="tx-s" text-anchor="middle"><text x="60" y="80">5</text><text x="170" y="80">5</text><text x="280" y="80">5</text><text x="375" y="80">reszta</text></g>
      <g class="tx-b"><text x="20" y="124">17 // 5 = 3</text><text x="20" y="164">17 % 5 = 2</text></g>
      <g class="tx"><text x="190" y="124">3 pełne grupy</text><text x="190" y="164">2 zostają</text></g>
    </svg>`,
    text: `<p>17 = 5 · 3 + 2. Operator <b>//</b> daje iloraz całkowity (3), a <b>%</b> – resztę (2).</p>
      <p>Reszta jest zawsze mniejsza od dzielnika: przy dzieleniu przez 5 może wynosić tylko 0, 1, 2, 3 lub 4.</p>`,
    remember: 'a // b – iloraz całkowity, a % b – reszta (zawsze mniejsza od b).',
    hook: '17 cukierków dla 5 osób: // – ile dostaje każdy, % – ile zostaje w torebce.',
    check: { q: 'Ile wynosi 29 % 4?', options: ['1', '7', '3'], answer: 0, explain: '29 = 4 · 7 + 1, więc reszta to 1 (a 29 // 4 = 7).' },
  },
  {
    title: 'Dzielniki i liczby pierwsze',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Dla liczby 12 dzielnikami są 1, 2, 3, 4, 6 i 12. Dla liczby 13 dzielnikami są tylko 1 i 13, więc 13 jest pierwsza">
      <g class="tx-b"><text x="10" y="35">n = 12</text><text x="10" y="95">n = 13</text></g>
      <g class="ln-thin">
        <rect x="80" y="14" width="25" height="30" class="f3 s3"/><rect x="107" y="14" width="25" height="30" class="f3 s3"/><rect x="134" y="14" width="25" height="30" class="f3 s3"/><rect x="161" y="14" width="25" height="30" class="f3 s3"/><rect x="188" y="14" width="25" height="30" class="bg"/><rect x="215" y="14" width="25" height="30" class="f3 s3"/><rect x="242" y="14" width="25" height="30" class="bg"/><rect x="269" y="14" width="25" height="30" class="bg"/><rect x="296" y="14" width="25" height="30" class="bg"/><rect x="323" y="14" width="25" height="30" class="bg"/><rect x="350" y="14" width="25" height="30" class="bg"/><rect x="377" y="14" width="25" height="30" class="f3 s3"/>
        <rect x="80" y="74" width="23" height="30" class="f3 s3"/><rect x="105" y="74" width="23" height="30" class="bg"/><rect x="130" y="74" width="23" height="30" class="bg"/><rect x="155" y="74" width="23" height="30" class="bg"/><rect x="180" y="74" width="23" height="30" class="bg"/><rect x="205" y="74" width="23" height="30" class="bg"/><rect x="230" y="74" width="23" height="30" class="bg"/><rect x="255" y="74" width="23" height="30" class="bg"/><rect x="280" y="74" width="23" height="30" class="bg"/><rect x="305" y="74" width="23" height="30" class="bg"/><rect x="330" y="74" width="23" height="30" class="bg"/><rect x="355" y="74" width="23" height="30" class="bg"/><rect x="380" y="74" width="23" height="30" class="f3 s3"/>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="92" y="34">1</text><text x="119" y="34">2</text><text x="146" y="34">3</text><text x="173" y="34">4</text><text x="200" y="34">5</text><text x="227" y="34">6</text><text x="254" y="34">7</text><text x="281" y="34">8</text><text x="308" y="34">9</text><text x="335" y="34">10</text><text x="362" y="34">11</text><text x="389" y="34">12</text>
        <text x="91" y="94">1</text><text x="116" y="94">2</text><text x="141" y="94">3</text><text x="166" y="94">4</text><text x="191" y="94">5</text><text x="216" y="94">6</text><text x="241" y="94">7</text><text x="266" y="94">8</text><text x="291" y="94">9</text><text x="316" y="94">10</text><text x="341" y="94">11</text><text x="366" y="94">12</text><text x="391" y="94">13</text>
      </g>
      <g class="tx"><text x="10" y="140">12: sześć dzielników (12 % d == 0)</text><text x="10" y="172">13: tylko 1 i 13 → liczba pierwsza</text></g>
    </svg>`,
    text: `<p>d jest dzielnikiem n, gdy <b>n % d == 0</b>. Sprawdzając d = 1, 2, …, n, znajdziesz wszystkie dzielniki.</p>
      <p><b>Liczba pierwsza</b> ma dokładnie dwa dzielniki: 1 i samą siebie. Szukając dzielnika od 2 wzwyż, wystarczy sprawdzać, dopóki <b>d · d ≤ n</b>.</p>`,
    remember: 'n % d == 0 → d dzieli n. Liczba pierwsza ma dokładnie 2 dzielniki (1 nie jest pierwsza).',
    hook: 'Liczba pierwsza to „samotnik”: dzieli się tylko przez 1 i przez siebie.',
  },
  {
    title: 'Cyfry liczby: % 10 i // 10',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tabela śledzenia sumy cyfr liczby 472: n 472, cyfra 2, suma 2; n 47, cyfra 7, suma 9; n 4, cyfra 4, suma 13; n 0, koniec">
      <rect x="20" y="10" width="380" height="34" class="f4"/>
      <g class="bg ln-thin"><rect x="20" y="44" width="380" height="34"/><rect x="20" y="78" width="380" height="34"/><rect x="20" y="112" width="380" height="34"/></g>
      <rect x="20" y="146" width="380" height="34" class="f3 s3"/>
      <g class="ln-thin"><line x1="140" y1="10" x2="140" y2="180"/><line x1="270" y1="10" x2="270" y2="180"/></g>
      <g class="tx-b" text-anchor="middle"><text x="80" y="33">n</text><text x="205" y="33">n % 10</text><text x="335" y="33">suma</text></g>
      <g class="tx" text-anchor="middle">
        <text x="80" y="67">472</text><text x="205" y="67">2</text><text x="335" y="67">2</text>
        <text x="80" y="101">47</text><text x="205" y="101">7</text><text x="335" y="101">9</text>
        <text x="80" y="135">4</text><text x="205" y="135">4</text><text x="335" y="135">13</text>
        <text x="80" y="169">0</text><text x="205" y="169">koniec</text><text x="335" y="169">13</text>
      </g>
    </svg>`,
    text: `<p><b>n % 10</b> to ostatnia cyfra, a <b>n // 10</b> to liczba bez ostatniej cyfry. Powtarzasz oba kroki, dopóki n &gt; 0 – i dostajesz cyfry od końca.</p>
      <p>Tak policzysz sumę cyfr, liczbę cyfr albo sprawdzisz, czy w liczbie jest jakaś cyfra.</p>`,
    remember: 'Dopóki n > 0: cyfra = n % 10, potem n = n // 10.',
    hook: '% 10 „odgryza” ostatnią cyfrę, // 10 ją „wyrzuca”.',
    check: { q: 'Ile wynosi 3906 // 10?', options: ['390', '6', '39'], answer: 0, explain: '// 10 usuwa ostatnią cyfrę: 3906 → 390. Ostatnia cyfra (3906 % 10) to 6.' },
  },
  {
    title: 'Euklides z odejmowaniem',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Algorytm Euklidesa z odejmowaniem dla 84 i 36: pary 84 i 36, 48 i 36, 12 i 36, 12 i 24, 12 i 12. Liczby równe, więc NWD równa się 12">
      <defs><marker id="a-k8i-lc-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="164" width="400" height="36" rx="8" class="f3 s3"/>
      <g class="tx-b"><text x="30" y="30">(84, 36)</text><text x="30" y="69">(48, 36)</text><text x="30" y="108">(12, 36)</text><text x="30" y="147">(12, 24)</text><text x="30" y="188">(12, 12)</text></g>
      <g class="tx"><text x="200" y="30">84 − 36 = 48</text><text x="200" y="69">48 − 36 = 12</text><text x="200" y="108">36 − 12 = 24</text><text x="200" y="147">24 − 12 = 12</text><text x="200" y="188">równe → NWD = 12</text></g>
      <g class="ln"><path d="M70,36 L70,52" marker-end="url(#a-k8i-lc-4)"/><path d="M70,75 L70,91" marker-end="url(#a-k8i-lc-4)"/><path d="M70,114 L70,130" marker-end="url(#a-k8i-lc-4)"/><path d="M70,153 L70,169" marker-end="url(#a-k8i-lc-4)"/></g>
    </svg>`,
    text: `<p><b>NWD</b> – największy wspólny dzielnik. Wersja z odejmowaniem: <b>dopóki liczby są różne, od większej odejmij mniejszą</b>. Gdy będą równe – to jest NWD.</p>
      <p>Działa, bo wspólny dzielnik dwóch liczb dzieli też ich różnicę.</p>`,
    remember: 'Dopóki a ≠ b: większą zastąp różnicą. Gdy a = b – to NWD.',
    hook: 'Jak wyrównywanie dwóch stosów klocków: z wyższego zdejmujesz tyle, ile ma niższy.',
  },
  {
    title: 'Euklides z resztą – szybciej',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Algorytm Euklidesa z resztą dla 84 i 36: 84 modulo 36 to 12; potem 36 modulo 12 to 0; b równe 0, więc NWD równa się 12">
      <defs><marker id="a-k8i-lc-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="10" width="330" height="34" class="f4"/>
      <g class="bg ln-thin"><rect x="20" y="44" width="330" height="40"/><rect x="20" y="84" width="330" height="40"/></g>
      <rect x="20" y="124" width="330" height="40" class="f3 s3"/>
      <g class="ln-thin"><line x1="120" y1="10" x2="120" y2="164"/><line x1="220" y1="10" x2="220" y2="164"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="33">a</text><text x="170" y="33">b</text><text x="285" y="33">r = a % b</text></g>
      <g class="tx" text-anchor="middle">
        <text x="70" y="70">84</text><text x="170" y="70">36</text><text x="285" y="70">12</text>
        <text x="70" y="110">36</text><text x="170" y="110">12</text><text x="285" y="110">0</text>
        <text x="70" y="150">12</text><text x="170" y="150">0</text><text x="285" y="150">koniec</text>
      </g>
      <g class="ln dash" fill="none"><path d="M150,78 L96,96" marker-end="url(#a-k8i-lc-5)"/><path d="M266,78 L196,96" marker-end="url(#a-k8i-lc-5)"/></g>
      <text x="210" y="190" class="tx-b" text-anchor="middle">b = 0 → NWD = 12</text>
    </svg>`,
    text: `<p>Zamiast odejmować wiele razy, liczysz od razu resztę: <b>r = a % b</b>, potem <b>a = b</b>, <b>b = r</b>. Powtarzasz, dopóki b ≠ 0. Wynik to a.</p>
      <p>Obie wersje dają ten sam NWD – ta ma po prostu mniej kroków.</p>`,
    remember: 'Dopóki b ≠ 0: r = a % b, a = b, b = r. Wynik: a.',
    hook: 'Wszystko przesuwa się w lewo: b wskakuje na miejsce a, reszta – na miejsce b.',
    check: { q: 'NWD(56, 21) = ?', options: ['7', '14', '3'], answer: 0, explain: '56 % 21 = 14, 21 % 14 = 7, 14 % 7 = 0 – wynik 7.' },
  },
];

window.LESSONS['informatyka/szukanie'] = [
  {
    title: 'Szukanie po kolei',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Szukanie liczby 7 w ciągu 4, 9, 2, 7, 1, 5: trzy pierwsze porównania nieudane, czwarte – znaleziono. Dalszych elementów nie trzeba sprawdzać">
      <text x="10" y="24" class="tx-b">Szukam: 7</text>
      <g class="bg ln"><rect x="10" y="40" width="60" height="50" rx="8"/><rect x="78" y="40" width="60" height="50" rx="8"/><rect x="146" y="40" width="60" height="50" rx="8"/></g>
      <rect x="214" y="40" width="60" height="50" rx="8" class="f3 s3"/>
      <g class="ln-thin dash" fill="none"><rect x="282" y="40" width="60" height="50" rx="8"/><rect x="350" y="40" width="60" height="50" rx="8"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="72">4</text><text x="108" y="72">9</text><text x="176" y="72">2</text><text x="244" y="72">7</text></g>
      <g class="tx-s" text-anchor="middle"><text x="312" y="70">1</text><text x="380" y="70">5</text></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="120" class="t2">✘</text><text x="108" y="120" class="t2">✘</text><text x="176" y="120" class="t2">✘</text><text x="244" y="120" class="t3">✔</text></g>
      <text x="346" y="120" class="tx-s" text-anchor="middle">nie trzeba</text>
      <text x="210" y="155" class="tx-s" text-anchor="middle">4 porównania – znaleziono na 4. miejscu</text>
    </svg>`,
    text: `<p>Gdy elementy nie są uporządkowane, szukany może stać gdziekolwiek. Porównujesz więc <b>po kolei</b> każdy element z szukanym – aż go znajdziesz albo skończą się elementy.</p>
      <p>Dla n elementów w najgorszym razie wykonasz <b>n porównań</b>.</p>`,
    remember: 'Zbiór nieuporządkowany: przeglądaj po kolei; najgorszy przypadek – n porównań.',
    hook: 'Jak szukanie skarpetki w nieposegregowanej szufladzie: bierzesz po kolei, aż trafisz.',
    check: { q: 'Ile porównań wykonasz, jeśli szukanej liczby nie ma wśród 6 elementów?', options: ['6', '3', '1'], answer: 0, explain: 'Żeby mieć pewność, że jej nie ma, trzeba porównać ją z każdym z 6 elementów.' },
  },
  {
    title: 'Największy – metoda kandydata',
    svg: `<svg viewBox="0 0 420 165" role="img" aria-label="Liczby 4, 9, 2, 7. Kandydat na największą: 4, potem 9, potem nadal 9, nadal 9. Wynik 9">
      <g class="tx-s"><text x="10" y="40">liczba</text><text x="10" y="98">kandydat</text></g>
      <g class="bg ln"><rect x="110" y="14" width="64" height="44" rx="8"/><rect x="188" y="14" width="64" height="44" rx="8"/><rect x="266" y="14" width="64" height="44" rx="8"/><rect x="344" y="14" width="64" height="44" rx="8"/></g>
      <g class="f4 s4"><rect x="110" y="72" width="64" height="40" rx="8"/><rect x="188" y="72" width="64" height="40" rx="8"/><rect x="266" y="72" width="64" height="40" rx="8"/><rect x="344" y="72" width="64" height="40" rx="8"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="142" y="43">4</text><text x="220" y="43">9</text><text x="298" y="43">2</text><text x="376" y="43">7</text>
        <text x="142" y="99">4</text><text x="220" y="99">9</text><text x="298" y="99">9</text><text x="376" y="99">9</text>
      </g>
      <g class="tx-s" text-anchor="middle"><text x="142" y="138">start</text><text x="220" y="138">9 &gt; 4 ✔</text><text x="298" y="138">2 &gt; 9? nie</text><text x="376" y="138">7 &gt; 9? nie</text></g>
    </svg>`,
    text: `<p>Pierwszy element zostaje <b>kandydatem</b>. Każdy kolejny porównujesz z kandydatem – jeśli jest większy, zajmuje jego miejsce. Na końcu kandydat to największy element.</p>
      <p>Dla n liczb potrzebujesz <b>n − 1 porównań</b>. Najmniejszy element znajdziesz tak samo.</p>`,
    remember: 'Kandydat = pierwszy element; większy element zostaje nowym kandydatem. Dla n liczb: n − 1 porównań.',
    hook: 'Jak „król wzgórza”: kandydat broni szczytu, aż przyjdzie ktoś większy.',
  },
  {
    title: 'Sortowanie przez wybieranie',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Sortowanie przez wybieranie tablicy 5, 2, 8, 1, 4. Po przejściu 1: 1, 2, 8, 5, 4. Po przejściu 2: bez zmian. Po przejściu 3: 1, 2, 4, 5, 8. Po przejściu 4: posortowane">
      <g class="tx-s"><text x="10" y="33">start</text><text x="10" y="79">przejście 1</text><text x="10" y="125">przejście 2</text><text x="10" y="171">przejście 3</text><text x="10" y="217">przejście 4</text></g>
      <g class="ln-thin">
        <rect x="120" y="10" width="50" height="36" class="bg"/><rect x="176" y="10" width="50" height="36" class="bg"/><rect x="232" y="10" width="50" height="36" class="bg"/><rect x="288" y="10" width="50" height="36" class="bg"/><rect x="344" y="10" width="50" height="36" class="bg"/>
        <rect x="120" y="56" width="50" height="36" class="f3 s3"/><rect x="176" y="56" width="50" height="36" class="bg"/><rect x="232" y="56" width="50" height="36" class="bg"/><rect x="288" y="56" width="50" height="36" class="f2 s2"/><rect x="344" y="56" width="50" height="36" class="bg"/>
        <rect x="120" y="102" width="50" height="36" class="f3 s3"/><rect x="176" y="102" width="50" height="36" class="f3 s3"/><rect x="232" y="102" width="50" height="36" class="bg"/><rect x="288" y="102" width="50" height="36" class="bg"/><rect x="344" y="102" width="50" height="36" class="bg"/>
        <rect x="120" y="148" width="50" height="36" class="f3 s3"/><rect x="176" y="148" width="50" height="36" class="f3 s3"/><rect x="232" y="148" width="50" height="36" class="f3 s3"/><rect x="288" y="148" width="50" height="36" class="bg"/><rect x="344" y="148" width="50" height="36" class="f2 s2"/>
        <rect x="120" y="194" width="50" height="36" class="f3 s3"/><rect x="176" y="194" width="50" height="36" class="f3 s3"/><rect x="232" y="194" width="50" height="36" class="f3 s3"/><rect x="288" y="194" width="50" height="36" class="f3 s3"/><rect x="344" y="194" width="50" height="36" class="f3 s3"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="145" y="35">5</text><text x="201" y="35">2</text><text x="257" y="35">8</text><text x="313" y="35">1</text><text x="369" y="35">4</text>
        <text x="145" y="81">1</text><text x="201" y="81">2</text><text x="257" y="81">8</text><text x="313" y="81">5</text><text x="369" y="81">4</text>
        <text x="145" y="127">1</text><text x="201" y="127">2</text><text x="257" y="127">8</text><text x="313" y="127">5</text><text x="369" y="127">4</text>
        <text x="145" y="173">1</text><text x="201" y="173">2</text><text x="257" y="173">4</text><text x="313" y="173">5</text><text x="369" y="173">8</text>
        <text x="145" y="219">1</text><text x="201" y="219">2</text><text x="257" y="219">4</text><text x="313" y="219">5</text><text x="369" y="219">8</text>
      </g>
    </svg>`,
    text: `<p>W każdym <b>przejściu</b> znajdujesz <b>najmniejszy</b> element w nieposortowanej części i <b>zamieniasz</b> go z pierwszym elementem tej części. Zielone pola to część już posortowana; pomarańczowe – element, który przy zamianie trafił dalej.</p>
      <p>Dla n elementów wystarczy <b>n − 1 przejść</b>: ostatni element sam trafia na miejsce.</p>`,
    remember: 'Przejście = znajdź najmniejszy w reszcie tablicy i zamień z pierwszym elementem reszty.',
    hook: 'Jak wybieranie do drużyny: za każdym razem bierzesz „najmniejszego” z pozostałych i stawiasz na kolejne miejsce.',
    check: { q: 'Ile przejść potrzeba, żeby posortować 5 elementów?', options: ['5', '4', '10'], answer: 1, explain: 'n − 1 = 4. Po czterech przejściach ostatni element jest już na swoim miejscu.' },
  },
  {
    title: 'Wybieranie w Pythonie',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Kod sortowania przez wybieranie w Pythonie z opisami: pętla przejść, kandydat m, szukanie mniejszego, zamiana elementów">
      <rect x="6" y="8" width="290" height="184" rx="10" class="bg ln-thin"/>
      <g class="tx">
        <text x="14" y="36">for i in range(n - 1):</text>
        <text x="38" y="64">m = i</text>
        <text x="38" y="92">for j in range(i + 1, n):</text>
        <text x="62" y="120">if t[j] &lt; t[m]:</text>
        <text x="86" y="148">m = j</text>
        <text x="38" y="176">t[i], t[m] = t[m], t[i]</text>
      </g>
      <g class="tx-s t1"><text x="306" y="36">przejścia</text><text x="306" y="64">kandydat</text><text x="306" y="120">mniejszy?</text><text x="306" y="176">zamiana</text></g>
    </svg>`,
    text: `<p>Zewnętrzna pętla to <b>przejścia</b> (i = 0, 1, …, n − 2). W środku <b>m</b> pamięta indeks najmniejszego dotąd elementu – to znowu metoda kandydata. Na końcu przejścia zamieniasz <b>t[i]</b> z <b>t[m]</b>.</p>
      <p>Zapis <b>t[i], t[m] = t[m], t[i]</b> zamienia dwa elementy miejscami.</p>`,
    remember: 'm – indeks najmniejszego elementu od i do końca; po przejściu zamiana t[i] z t[m].',
  },
];

window.LESSONS['informatyka/reprezentacja'] = [
  {
    title: 'Bit, bajt i 2ⁿ',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Bajt 01000001 – osiem bitów, kod litery A równy 65. Jeden bit daje 2 układy, dwa bity 4, osiem bitów 256">
      <g class="ln">
        <rect x="10" y="20" width="44" height="44" class="bg"/><rect x="60" y="20" width="44" height="44" class="f4 s4"/><rect x="110" y="20" width="44" height="44" class="bg"/><rect x="160" y="20" width="44" height="44" class="bg"/><rect x="210" y="20" width="44" height="44" class="bg"/><rect x="260" y="20" width="44" height="44" class="bg"/><rect x="310" y="20" width="44" height="44" class="bg"/><rect x="360" y="20" width="44" height="44" class="f4 s4"/>
      </g>
      <g class="tx-b" text-anchor="middle"><text x="32" y="49">0</text><text x="82" y="49">1</text><text x="132" y="49">0</text><text x="182" y="49">0</text><text x="232" y="49">0</text><text x="282" y="49">0</text><text x="332" y="49">0</text><text x="382" y="49">1</text></g>
      <text x="207" y="88" class="tx-s" text-anchor="middle">8 bitów = 1 bajt (tu: kod litery A = 65)</text>
      <g class="tx"><text x="20" y="122">1 bit → 2 układy (0, 1)</text><text x="20" y="148">2 bity → 4 układy (00, 01, 10, 11)</text><text x="20" y="174">8 bitów → 256 układów (0–255)</text></g>
    </svg>`,
    text: `<p><b>Bit</b> to najmniejsza porcja informacji: 0 albo 1. <b>Bajt</b> to 8 bitów.</p>
      <p>Każdy kolejny bit podwaja liczbę możliwości: n bitów daje <b>2<sup>n</sup></b> układów. Na jednym bajcie zapiszesz 256 różnych wartości – liczby od 0 do 255.</p>`,
    remember: 'n bitów → 2ⁿ układów. 1 bajt = 8 bitów → 256 wartości (0–255).',
    hook: 'Bit jak żarówka: świeci (1) albo nie (0). Osiem żarówek – 256 możliwych układów.',
    check: { q: 'Ile różnych układów dają 3 bity?', options: ['6', '8', '9'], answer: 1, explain: '2³ = 8: od 000 do 111.' },
  },
  {
    title: 'Wagi pozycji',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Wagi pozycji 128, 64, 32, 16, 8, 4, 2, 1. Liczba 1101 dwójkowo ma jedynki na wagach 8, 4 i 1, czyli 13">
      <g class="ln-thin">
        <rect x="10" y="14" width="48" height="36" class="f1"/><rect x="60" y="14" width="48" height="36" class="f1"/><rect x="110" y="14" width="48" height="36" class="f1"/><rect x="160" y="14" width="48" height="36" class="f1"/><rect x="210" y="14" width="48" height="36" class="f1"/><rect x="260" y="14" width="48" height="36" class="f1"/><rect x="310" y="14" width="48" height="36" class="f1"/><rect x="360" y="14" width="48" height="36" class="f1"/>
        <rect x="10" y="56" width="48" height="36" class="bg"/><rect x="60" y="56" width="48" height="36" class="bg"/><rect x="110" y="56" width="48" height="36" class="bg"/><rect x="160" y="56" width="48" height="36" class="bg"/><rect x="210" y="56" width="48" height="36" class="f3 s3"/><rect x="260" y="56" width="48" height="36" class="f3 s3"/><rect x="310" y="56" width="48" height="36" class="bg"/><rect x="360" y="56" width="48" height="36" class="f3 s3"/>
      </g>
      <g class="tx" text-anchor="middle"><text x="34" y="38">128</text><text x="84" y="38">64</text><text x="134" y="38">32</text><text x="184" y="38">16</text><text x="234" y="38">8</text><text x="284" y="38">4</text><text x="334" y="38">2</text><text x="384" y="38">1</text></g>
      <g class="tx-b" text-anchor="middle"><text x="34" y="81">0</text><text x="84" y="81">0</text><text x="134" y="81">0</text><text x="184" y="81">0</text><text x="234" y="81">1</text><text x="284" y="81">1</text><text x="334" y="81">0</text><text x="384" y="81">1</text></g>
      <text x="210" y="128" class="tx-b" text-anchor="middle">8 + 4 + 1 = 13</text>
      <text x="210" y="156" class="tx-s" text-anchor="middle">00001101₂ = 1101₂ = 13</text>
    </svg>`,
    text: `<p>W systemie dwójkowym każda pozycja ma <b>wagę</b> – kolejną potęgę dwójki: 1, 2, 4, 8, 16… (od prawej). Wartość liczby to suma wag tych pozycji, na których stoi <b>1</b>.</p>
      <p>Zera na początku nic nie zmieniają: 00001101₂ to to samo co 1101₂.</p>`,
    remember: 'Każda pozycja w lewo – waga 2 razy większa. Dodaj wagi pozycji z jedynkami.',
    hook: 'Wagi to ciągłe podwajanie: 1, 2, 4, 8, 16… jak plotka, którą każdy przekazuje dwóm osobom.',
  },
  {
    title: 'Z dziesiętnego na dwójkowy',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Zamiana 13 na system dwójkowy: 13 przez 2 to 6 reszta 1, 6 przez 2 to 3 reszta 0, 3 przez 2 to 1 reszta 1, 1 przez 2 to 0 reszta 1. Reszty czytane od dołu: 1101">
      <defs><marker id="a-k8i-rp-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx"><text x="30" y="40">13 : 2 = 6</text><text x="30" y="80">6 : 2 = 3</text><text x="30" y="120">3 : 2 = 1</text><text x="30" y="160">1 : 2 = 0</text></g>
      <g class="f4 s4"><rect x="190" y="18" width="44" height="32" rx="6"/><rect x="190" y="58" width="44" height="32" rx="6"/><rect x="190" y="98" width="44" height="32" rx="6"/><rect x="190" y="138" width="44" height="32" rx="6"/></g>
      <g class="tx-b" text-anchor="middle"><text x="212" y="41">1</text><text x="212" y="81">0</text><text x="212" y="121">1</text><text x="212" y="161">1</text></g>
      <text x="212" y="190" class="tx-s" text-anchor="middle">reszty</text>
      <path d="M256,166 L256,22" class="ln sw" fill="none" marker-end="url(#a-k8i-rp-3)"/>
      <g class="tx-b"><text x="276" y="74">czytaj</text><text x="276" y="100">od dołu:</text><text x="276" y="138">1101₂</text></g>
    </svg>`,
    text: `<p>Dziel liczbę przez 2 i zapisuj <b>reszty</b> (0 albo 1), aż wynik dzielenia będzie równy 0. Odczytaj reszty <b>od dołu do góry</b>.</p>
      <p>Sprawdź wynik wagami: 1101₂ = 8 + 4 + 1 = 13.</p>`,
    remember: 'Dziel przez 2, zapisuj reszty, czytaj od dołu. Sprawdź, dodając wagi.',
    check: { q: 'Jak zapisać 10 w systemie dwójkowym?', options: ['1010', '0101', '1100'], answer: 0, explain: '10 = 8 + 2, więc jedynki na wagach 8 i 2: 1010₂.' },
  },
  {
    title: 'Prawda i fałsz: and, or',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tabela wartości logicznych: p and q jest prawdą tylko, gdy oba są prawdziwe; p or q jest prawdą, gdy choć jedno jest prawdziwe">
      <rect x="10" y="10" width="400" height="34" class="f4"/>
      <g class="bg ln-thin"><rect x="10" y="44" width="400" height="36"/><rect x="10" y="80" width="400" height="36"/><rect x="10" y="116" width="400" height="36"/><rect x="10" y="152" width="400" height="36"/></g>
      <g class="f3"><rect x="170" y="44" width="125" height="36"/><rect x="295" y="44" width="115" height="36"/><rect x="295" y="80" width="115" height="36"/><rect x="295" y="116" width="115" height="36"/></g>
      <g class="ln-thin"><line x1="90" y1="10" x2="90" y2="188"/><line x1="170" y1="10" x2="170" y2="188"/><line x1="295" y1="10" x2="295" y2="188"/></g>
      <g class="tx-b" text-anchor="middle"><text x="50" y="33">p</text><text x="130" y="33">q</text><text x="232" y="33">p and q</text><text x="352" y="33">p or q</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="50" y="67">prawda</text><text x="130" y="67">prawda</text><text x="232" y="67">prawda</text><text x="352" y="67">prawda</text>
        <text x="50" y="103">prawda</text><text x="130" y="103">fałsz</text><text x="232" y="103">fałsz</text><text x="352" y="103">prawda</text>
        <text x="50" y="139">fałsz</text><text x="130" y="139">prawda</text><text x="232" y="139">fałsz</text><text x="352" y="139">prawda</text>
        <text x="50" y="175">fałsz</text><text x="130" y="175">fałsz</text><text x="232" y="175">fałsz</text><text x="352" y="175">fałsz</text>
      </g>
    </svg>`,
    text: `<p>Wartości logiczne to <b>prawda</b> i <b>fałsz</b> (w Pythonie True i False, w komputerze 1 i 0). Wynikiem porównania, np. 5 &gt; 3, jest wartość logiczna.</p>
      <p><b>and</b> daje prawdę tylko wtedy, gdy obie strony są prawdziwe. <b>or</b> – gdy choć jedna. <b>not</b> odwraca wartość.</p>`,
    remember: 'and – obie prawdziwe. or – co najmniej jedna prawdziwa. not – odwrotnie.',
    hook: 'and = „i to, i to”, or = „wystarczy jedno”.',
    check: { q: 'Jaką wartość ma (3 > 5) or (4 == 4)?', options: ['True', 'False', 'błąd'], answer: 0, explain: '3 > 5 to fałsz, ale 4 == 4 to prawda – dla or to wystarczy.' },
  },
  {
    title: 'Znaki to liczby: ASCII',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Kody ASCII: A 65, B 66, Z 90, a 97, cyfra 0 kod 48, spacja 32. Słowo Ala to kody 65, 108, 97">
      <g class="f1 s1"><rect x="10" y="14" width="60" height="64" rx="8"/><rect x="78" y="14" width="60" height="64" rx="8"/><rect x="146" y="14" width="60" height="64" rx="8"/></g>
      <g class="f5 s5"><rect x="214" y="14" width="60" height="64" rx="8"/></g>
      <g class="f4 s4"><rect x="282" y="14" width="60" height="64" rx="8"/><rect x="350" y="14" width="60" height="64" rx="8"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="40">A</text><text x="108" y="40">B</text><text x="176" y="40">Z</text><text x="244" y="40">a</text><text x="312" y="40">0</text><text x="380" y="40">␣</text></g>
      <g class="tx" text-anchor="middle"><text x="40" y="66">65</text><text x="108" y="66">66</text><text x="176" y="66">90</text><text x="244" y="66">97</text><text x="312" y="66">48</text><text x="380" y="66">32</text></g>
      <text x="210" y="118" class="tx-b" text-anchor="middle">„Ala” → 65 108 97</text>
      <text x="210" y="148" class="tx-s" text-anchor="middle">mała litera = wielka + 32 · ␣ to spacja</text>
      <text x="210" y="172" class="tx-s" text-anchor="middle">polskie litery (ą, ł…) – nie w ASCII, tylko np. w Unicode</text>
    </svg>`,
    text: `<p>Komputer zapisuje każdy znak jako liczbę – <b>kod</b>. Podstawowy <b>ASCII</b> ma 128 znaków (kody 0–127, 7 bitów): litery alfabetu łacińskiego, cyfry, znaki interpunkcyjne i sterujące.</p>
      <p>Tekst to ciąg kodów. W Pythonie <b>ord("A")</b> daje 65, a <b>chr(66)</b> – "B". Polskie litery obsługuje np. Unicode – jego pierwsze 128 kodów to ASCII.</p>`,
    remember: 'ASCII: 128 znaków (0–127). A = 65, a = 97, cyfra 0 = 48, spacja = 32.',
    check: { q: 'A ma kod 65. Jaki kod ma E?', options: ['69', '70', '5'], answer: 0, explain: 'A 65, B 66, C 67, D 68, E 69.' },
  },
];

window.LESSONS['informatyka/python'] = [
  {
    title: 'Zmienna = pudełko z etykietą',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Przed: x równe 7, y równe 3. Po instrukcji x równa się x plus y: x równe 10, y nadal 3">
      <defs><marker id="a-k8i-py-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx-s" text-anchor="middle"><text x="110" y="22">przed</text><text x="320" y="22">po: x = x + y</text></g>
      <g class="f1 s1"><rect x="30" y="32" width="70" height="50" rx="8"/><rect x="120" y="32" width="70" height="50" rx="8"/><rect x="340" y="32" width="70" height="50" rx="8"/></g>
      <rect x="250" y="32" width="70" height="50" rx="8" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="65" y="64">7</text><text x="155" y="64">3</text><text x="285" y="64">10</text><text x="375" y="64">3</text></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="100">x</text><text x="155" y="100">y</text><text x="285" y="100">x</text><text x="375" y="100">y</text></g>
      <path d="M198,57 L242,57" class="ln" marker-end="url(#a-k8i-py-1)"/>
      <text x="210" y="146" class="tx" text-anchor="middle">prawa strona: 7 + 3 = 10 → do x</text>
      <text x="210" y="174" class="tx-s" text-anchor="middle">stara wartość x znika</text>
    </svg>`,
    text: `<p><b>Zmienna</b> to nazwane miejsce w pamięci. Znak <b>=</b> to <b>przypisanie</b>: najpierw liczysz prawą stronę, potem wynik wkładasz do zmiennej po lewej.</p>
      <p>Dlatego <b>x = x + 1</b> ma sens: „nowe x to stare x plus 1”.</p>`,
    remember: '= przypisuje: oblicz prawą stronę, wynik zapisz w zmiennej po lewej.',
    hook: 'Zmienna jak pudełko z etykietą: wkładasz nową wartość – stara wypada.',
    check: { q: 'a = 5, potem a = a * 2. Ile wynosi a?', options: ['10', '5', '7'], answer: 0, explain: 'Prawa strona: 5 · 2 = 10 – ta wartość trafia do a.' },
  },
  {
    title: 'Wejście i wyjście',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Wpisujesz 4, input zwraca tekst 4. Bez int teksty się sklejają: 4 plus 4 daje 44. Z int liczby się dodają: 4 plus 4 daje 8">
      <defs><marker id="a-k8i-py-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f1 s1"><rect x="10" y="14" width="120" height="46" rx="8"/><rect x="150" y="14" width="120" height="46" rx="8"/><rect x="290" y="14" width="120" height="46" rx="8"/></g>
      <text x="70" y="42" class="tx-s" text-anchor="middle">⌨️ wpisujesz 4</text>
      <g class="tx" text-anchor="middle"><text x="210" y="43">input()</text><text x="350" y="43">"4" (tekst)</text></g>
      <g class="ln"><path d="M132,37 L146,37" marker-end="url(#a-k8i-py-2)"/><path d="M272,37 L286,37" marker-end="url(#a-k8i-py-2)"/></g>
      <rect x="10" y="90" width="195" height="64" rx="10" class="f2 s2"/>
      <rect x="215" y="90" width="195" height="64" rx="10" class="f3 s3"/>
      <g class="tx-s" text-anchor="middle"><text x="107" y="112">bez int:</text><text x="312" y="112">z int:</text></g>
      <g class="tx" text-anchor="middle"><text x="107" y="140">"4" + "4" → "44"</text><text x="312" y="140">4 + 4 → 8</text></g>
    </svg>`,
    text: `<p><b>input()</b> wczytuje z klawiatury zawsze <b>tekst</b>. Żeby liczyć, zamień go na liczbę: <b>int(input())</b>. Wynik pokazujesz przez <b>print(…)</b>, np. <b>print("Suma:", a + b)</b>.</p>`,
    remember: 'input() daje tekst. Do liczenia: int(input()).',
    hook: '„4” + „4” = „44” – teksty się sklejają, liczby się dodają.',
  },
  {
    title: 'Działania: / // % **',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Działania w Pythonie: 7 dzielone przez 2 daje 3.5, 7 dzielone całkowicie przez 2 daje 3, 7 modulo 2 daje 1, 2 do potęgi 3 daje 8, 5 równa się 5 daje True">
      <g class="ln-thin">
        <rect x="10" y="10" width="400" height="38" class="f1"/><rect x="10" y="48" width="400" height="38" class="bg"/><rect x="10" y="86" width="400" height="38" class="f1"/><rect x="10" y="124" width="400" height="38" class="bg"/><rect x="10" y="162" width="400" height="38" class="f1"/>
        <line x1="130" y1="10" x2="130" y2="200"/><line x1="200" y1="10" x2="200" y2="200"/>
      </g>
      <g class="tx-b"><text x="22" y="35">7 / 2</text><text x="22" y="73">7 // 2</text><text x="22" y="111">7 % 2</text><text x="22" y="149">2 ** 3</text><text x="22" y="187">5 == 5</text></g>
      <g class="tx" text-anchor="middle"><text x="165" y="35">3.5</text><text x="165" y="73">3</text><text x="165" y="111">1</text><text x="165" y="149">8</text><text x="165" y="187">True</text></g>
      <g class="tx"><text x="212" y="35">dzielenie</text><text x="212" y="73">dzielenie całkowite</text><text x="212" y="111">reszta</text><text x="212" y="149">potęgowanie</text><text x="212" y="187">porównanie</text></g>
    </svg>`,
    text: `<p>Kolejność działań jest jak w matematyce: najpierw potęgowanie, potem mnożenie i dzielenie, na końcu dodawanie i odejmowanie. Liczby rzeczywiste Python pisze z <b>kropką</b>: 3.5.</p>
      <p>Porównania: <b>==</b>, <b>!=</b>, <b>&lt;</b>, <b>&gt;</b>, <b>&lt;=</b>, <b>&gt;=</b>. Łączysz je przez <b>and</b>, <b>or</b>, <b>not</b>.</p>`,
    remember: '/ – dzielenie, // – część całkowita, % – reszta, ** – potęga, == – porównanie.',
    check: { q: 'Ile wynosi 9 // 2?', options: ['4.5', '4', '1'], answer: 1, explain: '// to dzielenie całkowite: 2 mieści się w 9 cztery razy (reszta 1).' },
  },
  {
    title: 'if, elif, else',
    svg: `<svg viewBox="0 0 420 250" role="img" aria-label="Schemat: jeśli x większe od 0 – dodatnia; w przeciwnym razie jeśli x mniejsze od 0 – ujemna; w każdym innym przypadku – zero">
      <defs><marker id="a-k8i-py-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx-s t1"><text x="10" y="20">if</text><text x="10" y="112">elif</text><text x="10" y="212">else</text></g>
      <polygon points="120,16 220,50 120,84 20,50" class="f4 s4"/>
      <polygon points="120,106 220,140 120,174 20,140" class="f4 s4"/>
      <g class="tx" text-anchor="middle"><text x="120" y="56">x &gt; 0 ?</text><text x="120" y="146">x &lt; 0 ?</text></g>
      <g class="f3 s3"><rect x="280" y="30" width="130" height="40" rx="8"/><rect x="280" y="120" width="130" height="40" rx="8"/></g>
      <rect x="60" y="200" width="120" height="40" rx="8" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="345" y="56">dodatnia</text><text x="345" y="146">ujemna</text><text x="120" y="226">zero</text></g>
      <g class="ln" fill="none"><path d="M220,50 L276,50" marker-end="url(#a-k8i-py-4)"/><path d="M220,140 L276,140" marker-end="url(#a-k8i-py-4)"/><path d="M120,84 L120,102" marker-end="url(#a-k8i-py-4)"/><path d="M120,174 L120,196" marker-end="url(#a-k8i-py-4)"/></g>
      <g class="tx-s"><text x="236" y="42">TAK</text><text x="236" y="132">TAK</text><text x="128" y="98">NIE</text><text x="128" y="190">NIE</text></g>
    </svg>`,
    text: `<p>Python sprawdza warunki po kolei i wykonuje blok <b>pierwszego prawdziwego</b>. <b>else</b> działa, gdy żaden warunek nie był prawdziwy.</p>
      <p>Po <b>if</b>, <b>elif</b> i <b>else</b> stawiasz dwukropek, a instrukcje bloku piszesz z <b>wcięciem</b> (zwykle 4 spacje).</p>`,
    remember: 'Wykonuje się tylko jeden blok – pierwszego prawdziwego warunku albo else.',
    hook: 'elif = „a jeśli nie, to może…”, else = „w każdym innym przypadku”.',
    check: { q: 'Dla x = 0 program ze schematu wypisze…', options: ['dodatnia', 'ujemna', 'zero'], answer: 2, explain: '0 > 0 i 0 < 0 to fałsz – zostaje else: zero.' },
  },
  {
    title: 'Typowe pułapki',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Źle i dobrze: if x = 5 zamiast if x == 5; brak dwukropka po if; brak wcięcia w bloku po if">
      <rect x="10" y="10" width="195" height="34" rx="8" class="f2 s2"/>
      <rect x="215" y="10" width="195" height="34" rx="8" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="107" y="33">✘ źle</text><text x="312" y="33">✔ dobrze</text></g>
      <g class="bg ln-thin"><rect x="10" y="52" width="195" height="40" rx="6"/><rect x="215" y="52" width="195" height="40" rx="6"/><rect x="10" y="98" width="195" height="40" rx="6"/><rect x="215" y="98" width="195" height="40" rx="6"/><rect x="10" y="144" width="195" height="56" rx="6"/><rect x="215" y="144" width="195" height="56" rx="6"/></g>
      <g class="tx">
        <text x="22" y="78">if x = 5:</text><text x="227" y="78">if x == 5:</text>
        <text x="22" y="124">if x &gt; 0</text><text x="227" y="124">if x &gt; 0:</text>
        <text x="22" y="166">if x &gt; 0:</text><text x="22" y="190">print(x)</text>
        <text x="227" y="166">if x &gt; 0:</text><text x="263" y="190">print(x)</text>
      </g>
    </svg>`,
    text: `<p>Najczęstsze błędy składniowe: <b>=</b> zamiast <b>==</b> w warunku, brak <b>dwukropka</b>, brak <b>wcięcia</b>. Takiego programu nie da się uruchomić.</p>
      <p>Gorsze są błędy logiczne – program działa, ale źle liczy. Wyłapiesz je testami na różnych danych.</p>`,
    remember: 'Dwukropek po if/elif/else, wcięcie bloku, == do porównań.',
    hook: 'Python „czyta” wcięcia jak akapity – źle wcięty kod to inny program.',
  },
];

window.LESSONS['informatyka/petle'] = [
  {
    title: 'Pętla for i range',
    svg: `<svg viewBox="0 0 420 195" role="img" aria-label="range(5) daje 0, 1, 2, 3, 4. range(1, 6) daje 1, 2, 3, 4, 5. range(0, 10, 2) daje 0, 2, 4, 6, 8. Górna granica nie wchodzi">
      <g class="tx"><text x="10" y="36">range(5)</text><text x="10" y="96">range(1, 6)</text><text x="10" y="156">range(0, 10, 2)</text></g>
      <g class="f1 s1">
        <rect x="150" y="14" width="38" height="32" rx="6"/><rect x="194" y="14" width="38" height="32" rx="6"/><rect x="238" y="14" width="38" height="32" rx="6"/><rect x="282" y="14" width="38" height="32" rx="6"/><rect x="326" y="14" width="38" height="32" rx="6"/>
        <rect x="150" y="74" width="38" height="32" rx="6"/><rect x="194" y="74" width="38" height="32" rx="6"/><rect x="238" y="74" width="38" height="32" rx="6"/><rect x="282" y="74" width="38" height="32" rx="6"/><rect x="326" y="74" width="38" height="32" rx="6"/>
        <rect x="150" y="134" width="38" height="32" rx="6"/><rect x="194" y="134" width="38" height="32" rx="6"/><rect x="238" y="134" width="38" height="32" rx="6"/><rect x="282" y="134" width="38" height="32" rx="6"/><rect x="326" y="134" width="38" height="32" rx="6"/>
      </g>
      <g class="ln-thin dash" fill="none"><rect x="372" y="14" width="38" height="32" rx="6"/><rect x="372" y="74" width="38" height="32" rx="6"/><rect x="372" y="134" width="38" height="32" rx="6"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="169" y="37">0</text><text x="213" y="37">1</text><text x="257" y="37">2</text><text x="301" y="37">3</text><text x="345" y="37">4</text>
        <text x="169" y="97">1</text><text x="213" y="97">2</text><text x="257" y="97">3</text><text x="301" y="97">4</text><text x="345" y="97">5</text>
        <text x="169" y="157">0</text><text x="213" y="157">2</text><text x="257" y="157">4</text><text x="301" y="157">6</text><text x="345" y="157">8</text>
      </g>
      <g class="tx-s" text-anchor="middle"><text x="391" y="35">5</text><text x="391" y="95">6</text><text x="391" y="155">10</text></g>
      <text x="210" y="188" class="tx-s" text-anchor="middle">górna granica nie wchodzi (pola kreskowane)</text>
    </svg>`,
    text: `<p><b>for i in range(…):</b> powtarza blok dla kolejnych wartości i. <b>range(5)</b> – od 0 do 4, <b>range(1, 6)</b> – od 1 do 5, <b>range(0, 10, 2)</b> – co 2.</p>
      <p>Górna granica <b>nie</b> wchodzi do zakresu, dlatego range(5) ma dokładnie 5 wartości.</p>`,
    remember: 'range(a, b) – od a do b − 1. range(n) – n powtórzeń (0 … n − 1).',
    hook: 'range(a, b) – „od a, ale przed b”: na ostatnim przystanku nie wysiadasz.',
    check: { q: 'Jakie wartości daje range(3, 7)?', options: ['3, 4, 5, 6', '3, 4, 5, 6, 7', '4, 5, 6'], answer: 0, explain: 'Od 3 włącznie do 7 bez 7.' },
  },
  {
    title: 'Tabelka śledzenia',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Program: s równe 0, pętla i od 1 do 4, s równe s plus i. Tabelka: start s 0; i 1 s 1; i 2 s 3; i 3 s 6; i 4 s 10">
      <rect x="6" y="10" width="166" height="120" rx="8" class="bg ln-thin"/>
      <g class="tx-s"><text x="14" y="36">s = 0</text><text x="14" y="62">for i in range(1, 5):</text><text x="38" y="88">s = s + i</text><text x="14" y="114">print(s)</text></g>
      <rect x="180" y="10" width="230" height="32" class="f4"/>
      <g class="bg ln-thin"><rect x="180" y="42" width="230" height="32"/><rect x="180" y="74" width="230" height="32"/><rect x="180" y="106" width="230" height="32"/><rect x="180" y="138" width="230" height="32"/></g>
      <rect x="180" y="170" width="230" height="32" class="f3 s3"/>
      <g class="ln-thin"><line x1="260" y1="10" x2="260" y2="202"/><line x1="330" y1="10" x2="330" y2="202"/></g>
      <g class="tx-b" text-anchor="middle"><text x="220" y="32">obrót</text><text x="295" y="32">i</text><text x="370" y="32">s</text></g>
      <g class="tx" text-anchor="middle">
        <text x="220" y="64">start</text><text x="295" y="64">–</text><text x="370" y="64">0</text>
        <text x="220" y="96">1</text><text x="295" y="96">1</text><text x="370" y="96">1</text>
        <text x="220" y="128">2</text><text x="295" y="128">2</text><text x="370" y="128">3</text>
        <text x="220" y="160">3</text><text x="295" y="160">3</text><text x="370" y="160">6</text>
        <text x="220" y="192">4</text><text x="295" y="192">4</text><text x="370" y="192">10</text>
      </g>
    </svg>`,
    text: `<p>Żeby przewidzieć wynik programu, zapisuj wartości zmiennych <b>po każdym obrocie pętli</b>. Tu s rośnie: 0 → 1 → 3 → 6 → 10, więc program wypisze 10.</p>`,
    remember: 'Rysuj tabelkę zmiennych – jeden wiersz na każdy obrót pętli.',
    hook: 'Bądź „ludzkim komputerem”: kartka, tabelka, ołówek.',
  },
  {
    title: 'Pętla while – dopóki',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="n równe 1; dopóki n mniejsze od 20, n równa się n razy 2; potem wypisz n. Wartości n: 1, 2, 4, 8, 16, 32">
      <defs><marker id="a-k8i-pt-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="10" width="100" height="36" rx="8" class="f1 s1"/>
      <text x="70" y="34" class="tx" text-anchor="middle">n = 1</text>
      <polygon points="70,78 135,110 70,142 5,110" class="f4 s4"/>
      <text x="70" y="116" class="tx-s" text-anchor="middle">n &lt; 20 ?</text>
      <rect x="170" y="92" width="110" height="36" rx="8" class="f1 s1"/>
      <text x="225" y="116" class="tx" text-anchor="middle">n = n * 2</text>
      <polygon points="30,172 150,172 130,206 10,206" class="f3 s3"/>
      <text x="80" y="195" class="tx" text-anchor="middle">wypisz n</text>
      <g class="ln" fill="none">
        <path d="M70,46 L70,76" marker-end="url(#a-k8i-pt-3)"/>
        <path d="M135,110 L166,110" marker-end="url(#a-k8i-pt-3)"/>
        <path d="M225,92 L225,62 L74,62" marker-end="url(#a-k8i-pt-3)"/>
        <path d="M70,142 L70,170" marker-end="url(#a-k8i-pt-3)"/>
      </g>
      <g class="tx-s"><text x="140" y="102">TAK</text><text x="78" y="160">NIE</text></g>
      <g class="tx-s"><text x="296" y="100">n: 1, 2, 4,</text><text x="296" y="120">8, 16, 32</text><text x="296" y="150">32 &lt; 20? NIE</text><text x="296" y="170">→ wypisz 32</text></g>
    </svg>`,
    text: `<p><b>while warunek:</b> powtarza blok, <b>dopóki</b> warunek jest prawdziwy. Warunek sprawdzany jest przed każdym obrotem.</p>
      <p>Coś w pętli musi w końcu „zepsuć” warunek. Jeśli nigdy się to nie stanie, powstanie <b>pętla nieskończona</b>.</p>`,
    remember: 'while powtarza, dopóki warunek jest prawdziwy. Coś w pętli musi go w końcu zmienić.',
    check: { q: 'k = 10, a pętla while k > 0 wykonuje k = k − 3. Ile obrotów wykona?', options: ['3', '4', '10'], answer: 1, explain: 'k: 10 → 7 → 4 → 1 → −2. Cztery obroty, potem k > 0 jest fałszywe.' },
  },
  {
    title: 'Tablice: wiele wartości pod jedną nazwą',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Tablica t z elementami 3, 8, 1, 6 o indeksach od 0 do 3. len(t) równa się 4. Po t.append(9) tablica ma 5 elementów">
      <text x="10" y="42" class="tx-b">t =</text>
      <g class="f1 s1"><rect x="60" y="12" width="70" height="50" rx="8"/><rect x="140" y="12" width="70" height="50" rx="8"/><rect x="220" y="12" width="70" height="50" rx="8"/><rect x="300" y="12" width="70" height="50" rx="8"/></g>
      <g class="tx-b" text-anchor="middle"><text x="95" y="43">3</text><text x="175" y="43">8</text><text x="255" y="43">1</text><text x="335" y="43">6</text></g>
      <g class="tx-s t1" text-anchor="middle"><text x="95" y="82">t[0]</text><text x="175" y="82">t[1]</text><text x="255" y="82">t[2]</text><text x="335" y="82">t[3]</text></g>
      <g class="tx"><text x="10" y="122">len(t) = 4</text><text x="10" y="152">t.append(9) → [3, 8, 1, 6, 9]</text></g>
    </svg>`,
    text: `<p><b>Tablica</b> (w Pythonie: lista) przechowuje wiele wartości. Do elementu sięgasz przez <b>indeks</b> w nawiasach kwadratowych – liczony od <b>0</b>.</p>
      <p><b>len(t)</b> podaje liczbę elementów, <b>t.append(x)</b> dopisuje x na końcu, a <b>for x in t:</b> przegląda kolejne elementy.</p>`,
    remember: 'Indeksy od 0 do len(t) − 1. Ostatni element: t[len(t) − 1].',
    hook: 'Indeksy od zera – jak piętra w bloku: parter to 0.',
    check: { q: 't = [5, 2, 9]. Ile wynosi t[2]?', options: ['2', '9', '5'], answer: 1, explain: 't[0] = 5, t[1] = 2, t[2] = 9.' },
  },
  {
    title: 'Funkcje',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Funkcja kw: wchodzi 3, funkcja zwraca x razy x, wychodzi 9. kw(3) plus kw(4) to 9 plus 16 równa się 25">
      <defs><marker id="a-k8i-pt-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="45" cy="65" r="28" class="f4 s4"/>
      <text x="45" y="72" class="tx-b" text-anchor="middle">3</text>
      <rect x="110" y="30" width="200" height="70" rx="12" class="f5 s5"/>
      <text x="210" y="58" class="tx-b" text-anchor="middle">kw(x)</text>
      <text x="210" y="86" class="tx" text-anchor="middle">return x * x</text>
      <circle cx="375" cy="65" r="28" class="f3 s3"/>
      <text x="375" y="72" class="tx-b" text-anchor="middle">9</text>
      <g class="ln"><path d="M75,65 L106,65" marker-end="url(#a-k8i-pt-5)"/><path d="M312,65 L343,65" marker-end="url(#a-k8i-pt-5)"/></g>
      <text x="210" y="142" class="tx" text-anchor="middle">kw(3) + kw(4) = 9 + 16 = 25</text>
    </svg>`,
    text: `<p><b>Funkcja</b> to nazwany fragment programu: <b>def kw(x):</b> … <b>return x * x</b>. Wywołujesz ją z argumentem, a <b>return</b> oddaje wynik.</p>
      <p>Piszesz i testujesz ją raz, a używasz wiele razy – np. <b>nwd(a, b)</b> czy <b>szukaj(t, x)</b>.</p>`,
    remember: 'def nazwa(parametry): … return wynik. Piszesz raz, wywołujesz wiele razy.',
    hook: 'Funkcja jak automat z napojami: wrzucasz argument, dostajesz wynik.',
  },
];

window.LESSONS['informatyka/arkusz'] = [
  {
    title: 'Komórki, adresy, formuły',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Arkusz z kolumnami A do D i wierszami 1 do 4: towar, cena, sztuki, razem. W komórce D2 formuła równa się B2 razy C2 daje 12">
      <rect x="10" y="6" width="400" height="28" rx="6" class="bg ln"/>
      <text x="20" y="26" class="tx">D2:   =B2*C2</text>
      <g class="f1 ln-thin"><rect x="10" y="44" width="40" height="28"/><rect x="50" y="44" width="90" height="28"/><rect x="140" y="44" width="90" height="28"/><rect x="230" y="44" width="90" height="28"/><rect x="320" y="44" width="90" height="28"/>
        <rect x="10" y="72" width="40" height="32"/><rect x="10" y="104" width="40" height="32"/><rect x="10" y="136" width="40" height="32"/><rect x="10" y="168" width="40" height="32"/></g>
      <g class="bg ln-thin">
        <rect x="50" y="72" width="90" height="32"/><rect x="140" y="72" width="90" height="32"/><rect x="230" y="72" width="90" height="32"/><rect x="320" y="72" width="90" height="32"/>
        <rect x="50" y="104" width="90" height="32"/><rect x="140" y="104" width="90" height="32"/><rect x="230" y="104" width="90" height="32"/>
        <rect x="50" y="136" width="90" height="32"/><rect x="140" y="136" width="90" height="32"/><rect x="230" y="136" width="90" height="32"/><rect x="320" y="136" width="90" height="32"/>
        <rect x="50" y="168" width="90" height="32"/><rect x="140" y="168" width="90" height="32"/><rect x="230" y="168" width="90" height="32"/><rect x="320" y="168" width="90" height="32"/>
      </g>
      <rect x="320" y="104" width="90" height="32" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="95" y="64">A</text><text x="185" y="64">B</text><text x="275" y="64">C</text><text x="365" y="64">D</text><text x="30" y="94">1</text><text x="30" y="126">2</text><text x="30" y="158">3</text><text x="30" y="190">4</text></g>
      <g class="tx" text-anchor="middle">
        <text x="95" y="94">towar</text><text x="185" y="94">cena</text><text x="275" y="94">szt.</text><text x="365" y="94">razem</text>
        <text x="95" y="126">zeszyt</text><text x="185" y="126">3</text><text x="275" y="126">4</text><text x="365" y="126">12</text>
        <text x="95" y="158">długopis</text><text x="185" y="158">2</text><text x="275" y="158">5</text><text x="365" y="158">10</text>
        <text x="95" y="190">linijka</text><text x="185" y="190">4</text><text x="275" y="190">2</text><text x="365" y="190">8</text>
      </g>
    </svg>`,
    text: `<p><b>Adres komórki</b> to litera kolumny i numer wiersza, np. D2. <b>Formuła</b> zaczyna się od <b>=</b> i może korzystać z innych komórek: <b>=B2*C2</b>. Gdy zmienisz cenę, wynik przeliczy się sam.</p>
      <p><b>Zakres</b> zapisujesz z dwukropkiem: B2:B4 to komórki B2, B3 i B4.</p>`,
    remember: 'Formuła zaczyna się od =. Zakres: A1:A10.',
    hook: 'Adres jak w grze w statki: litera i numer – „C4, trafiony!”.',
    check: { q: 'Jaki adres ma komórka w kolumnie C i wierszu 4?', options: ['C4', '4C', 'D3'], answer: 0, explain: 'Najpierw litera kolumny, potem numer wiersza.' },
  },
  {
    title: 'Funkcje: SUMA, ŚREDNIA, MIN, MAX, JEŻELI',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Kolumna B z liczbami 4, 5, 3, 6, 2. SUMA daje 20, ŚREDNIA 4, MIN 2, MAX 6, JEŻELI(B2 większe lub równe 5; tak; nie) daje nie">
      <g class="f1 ln-thin"><rect x="10" y="10" width="30" height="30"/><rect x="40" y="10" width="70" height="30"/><rect x="10" y="40" width="30" height="32"/><rect x="10" y="72" width="30" height="32"/><rect x="10" y="104" width="30" height="32"/><rect x="10" y="136" width="30" height="32"/><rect x="10" y="168" width="30" height="32"/></g>
      <g class="bg ln-thin"><rect x="40" y="40" width="70" height="32"/><rect x="40" y="72" width="70" height="32"/><rect x="40" y="104" width="70" height="32"/><rect x="40" y="136" width="70" height="32"/><rect x="40" y="168" width="70" height="32"/></g>
      <g class="tx-b" text-anchor="middle"><text x="75" y="31">B</text></g>
      <g class="tx-s" text-anchor="middle"><text x="25" y="61">2</text><text x="25" y="93">3</text><text x="25" y="125">4</text><text x="25" y="157">5</text><text x="25" y="189">6</text></g>
      <g class="tx" text-anchor="middle"><text x="75" y="62">4</text><text x="75" y="94">5</text><text x="75" y="126">3</text><text x="75" y="158">6</text><text x="75" y="190">2</text></g>
      <g class="tx"><text x="128" y="40">=SUMA(B2:B6) → 20</text><text x="128" y="74">=ŚREDNIA(B2:B6) → 4</text><text x="128" y="108">=MIN(B2:B6) → 2</text><text x="128" y="142">=MAX(B2:B6) → 6</text></g>
      <text x="128" y="180" class="tx-s">=JEŻELI(B2&gt;=5;"tak";"nie") → nie</text>
    </svg>`,
    text: `<p>Funkcje liczą za ciebie: <b>SUMA</b>, <b>ŚREDNIA</b>, <b>MIN</b>, <b>MAX</b> (w niektórych programach MAKS). <b>JEŻELI</b> sprawdza warunek: druga wartość – gdy prawda, trzecia – gdy fałsz. <b>LICZ.JEŻELI</b> liczy komórki spełniające kryterium.</p>
      <p>Tu B2 = 4, a 4 &gt;= 5 to fałsz – stąd „nie”.</p>`,
    remember: 'W polskich wersjach argumenty oddziela zwykle średnik: =JEŻELI(A1>=50;"tak";"nie").',
    check: { q: 'Jaki wynik da =ŚREDNIA(2;4;9)?', options: ['5', '15', '4'], answer: 0, explain: '(2 + 4 + 9) : 3 = 15 : 3 = 5.' },
  },
  {
    title: 'Kopiowanie: adresy względne',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Formuła w D2 równa się B2 razy C2 skopiowana w dół zmienia się w B3 razy C3 i B4 razy C4">
      <defs><marker id="a-k8i-ak-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f1 ln-thin"><rect x="10" y="10" width="40" height="30"/><rect x="50" y="10" width="80" height="30"/><rect x="130" y="10" width="80" height="30"/><rect x="210" y="10" width="150" height="30"/><rect x="10" y="40" width="40" height="36"/><rect x="10" y="76" width="40" height="36"/><rect x="10" y="112" width="40" height="36"/></g>
      <g class="bg ln-thin"><rect x="50" y="40" width="80" height="36"/><rect x="130" y="40" width="80" height="36"/><rect x="50" y="76" width="80" height="36"/><rect x="130" y="76" width="80" height="36"/><rect x="50" y="112" width="80" height="36"/><rect x="130" y="112" width="80" height="36"/></g>
      <rect x="210" y="40" width="150" height="36" class="f4 s4"/>
      <g class="f3 s3"><rect x="210" y="76" width="150" height="36"/><rect x="210" y="112" width="150" height="36"/></g>
      <g class="tx-b" text-anchor="middle"><text x="90" y="31">B</text><text x="170" y="31">C</text><text x="285" y="31">D</text><text x="30" y="64">2</text><text x="30" y="100">3</text><text x="30" y="136">4</text></g>
      <g class="tx" text-anchor="middle"><text x="90" y="64">3</text><text x="170" y="64">4</text><text x="90" y="100">2</text><text x="170" y="100">5</text><text x="90" y="136">4</text><text x="170" y="136">2</text>
        <text x="285" y="64">=B2*C2</text><text x="285" y="100">=B3*C3</text><text x="285" y="136">=B4*C4</text></g>
      <path d="M382,50 L382,138" class="ln sw" marker-end="url(#a-k8i-ak-3)"/>
      <text x="210" y="176" class="tx-s" text-anchor="middle">adres względny przesuwa się razem z formułą</text>
    </svg>`,
    text: `<p>Gdy kopiujesz formułę w dół, adresy <b>względne</b> (bez znaku $) przesuwają się o tyle samo wierszy. Dzięki temu jedną formułę policzysz od razu dla całej kolumny.</p>`,
    remember: 'Adres względny (B2) zmienia się przy kopiowaniu: w dół – numer wiersza, w bok – litera kolumny.',
    hook: 'Adres względny mówi „weź komórki obok mnie” – po przesunięciu liczy od nowego miejsca.',
  },
  {
    title: 'Dolar blokuje: $A$1, $A1, A$1',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tabela kopiowania: A1 w prawo B1, w dół A2; dolar A dolar 1 bez zmian; dolar A1 w prawo bez zmian, w dół dolar A2; A dolar 1 w prawo B dolar 1, w dół bez zmian">
      <rect x="10" y="10" width="400" height="34" class="f4"/>
      <g class="bg ln-thin"><rect x="10" y="44" width="400" height="36"/><rect x="10" y="80" width="400" height="36"/><rect x="10" y="116" width="400" height="36"/><rect x="10" y="152" width="400" height="36"/></g>
      <g class="ln-thin"><line x1="110" y1="10" x2="110" y2="188"/><line x1="260" y1="10" x2="260" y2="188"/></g>
      <g class="tx-b" text-anchor="middle"><text x="60" y="33">adres</text><text x="185" y="33">w prawo →</text><text x="335" y="33">w dół ↓</text></g>
      <g class="tx" text-anchor="middle">
        <text x="60" y="68">A1</text><text x="185" y="68">B1</text><text x="335" y="68">A2</text>
        <text x="60" y="104">$A$1</text><text x="185" y="104">$A$1</text><text x="335" y="104">$A$1</text>
        <text x="60" y="140">$A1</text><text x="185" y="140">$A1</text><text x="335" y="140">$A2</text>
        <text x="60" y="176">A$1</text><text x="185" y="176">B$1</text><text x="335" y="176">A$1</text>
      </g>
    </svg>`,
    text: `<p>Znak <b>$</b> blokuje część adresu przy kopiowaniu. <b>$A$1</b> – adres <b>bezwzględny</b>, nic się nie zmienia (np. stały kurs albo stawka w jednej komórce). <b>$A1</b> i <b>A$1</b> – adresy <b>mieszane</b>: blokują tylko kolumnę albo tylko wiersz.</p>`,
    remember: '$ przed literą blokuje kolumnę, $ przed numerem – wiersz.',
    hook: '$ to kłódka: stoi przed tym, czego nie wolno ruszyć.',
    check: { q: 'Formułę =C$3 kopiujesz o jedną kolumnę w prawo i jeden wiersz w dół. Co dostaniesz?', options: ['=D$3', '=D$4', '=C$3'], answer: 0, explain: 'Kolumna nie jest zablokowana (C → D), wiersz jest zablokowany ($3 zostaje).' },
  },
  {
    title: 'Wykresy, sortowanie, filtr',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Trzy wykresy: kolumnowy do porównań, liniowy do zmian w czasie, kołowy do pokazania części całości">
      <g class="bg ln-thin"><rect x="10" y="10" width="120" height="140" rx="8"/><rect x="150" y="10" width="120" height="140" rx="8"/><rect x="290" y="10" width="120" height="140" rx="8"/></g>
      <g class="f1 s1"><rect x="30" y="70" width="20" height="60"/><rect x="60" y="40" width="20" height="90"/><rect x="90" y="90" width="20" height="40"/></g>
      <g class="ln"><line x1="22" y1="130" x2="120" y2="130"/><line x1="162" y1="130" x2="260" y2="130"/></g>
      <polyline points="168,112 190,92 212,102 234,60 256,72" class="ln sw" fill="none"/>
      <circle cx="350" cy="78" r="45" class="f4 s4"/>
      <path d="M350,78 L350,33 A45,45 0 0,1 395,78 Z" class="f2 s2"/>
      <path d="M350,78 L318,110" class="ln"/>
      <g class="tx-b" text-anchor="middle"><text x="70" y="172">kolumnowy</text><text x="210" y="172">liniowy</text><text x="350" y="172">kołowy</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="192">porównanie</text><text x="210" y="192">zmiany w czasie</text><text x="350" y="192">części całości</text></g>
    </svg>`,
    text: `<p>Dobierz wykres do celu: <b>kolumnowy</b> – porównanie wartości, <b>liniowy</b> – zmiany w czasie, <b>kołowy</b> – udział części w całości. Dodaj tytuł i opisy osi.</p>
      <p><b>Sortując</b>, zaznacz całą tabelę, żeby wiersze się nie rozjechały. <b>Filtr</b> tylko ukrywa wiersze – nie usuwa ich.</p>`,
    remember: 'Kolumnowy – porównanie, liniowy – zmiany w czasie, kołowy – części całości. Filtr ukrywa, nie usuwa.',
    hook: 'Koło to całość pokrojona jak pizza: każdy kawałek to część.',
  },
];

window.LESSONS['informatyka/dokumenty'] = [
  {
    title: 'Znaki, akapity, strony',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Dwie strony dokumentu: na pierwszej nagłówek, akapity i podział strony; druga zaczyna się od rozdziału 2. Na dole numery stron 1 i 2">
      <g class="bg ln"><rect x="30" y="10" width="150" height="195" rx="6"/><rect x="240" y="10" width="150" height="195" rx="6"/></g>
      <g class="f1"><rect x="45" y="24" width="90" height="20" rx="3"/><rect x="255" y="24" width="110" height="20" rx="3"/></g>
      <g class="ln-thin"><line x1="45" y1="56" x2="165" y2="56"/><line x1="45" y1="68" x2="165" y2="68"/><line x1="45" y1="80" x2="140" y2="80"/><line x1="55" y1="96" x2="165" y2="96"/><line x1="45" y1="108" x2="150" y2="108"/>
        <line x1="255" y1="56" x2="375" y2="56"/><line x1="255" y1="68" x2="375" y2="68"/><line x1="255" y1="80" x2="350" y2="80"/></g>
      <line x1="40" y1="126" x2="170" y2="126" class="ln dash"/>
      <text x="105" y="146" class="tx-s" text-anchor="middle">podział strony</text>
      <g class="tx-s" text-anchor="middle"><text x="105" y="196">– 1 –</text><text x="315" y="196">– 2 –</text><text x="310" y="39">Rozdział 2</text><text x="90" y="39">Rozdział 1</text></g>
    </svg>`,
    text: `<p><b>Formatowanie znaków</b>: krój, rozmiar, pogrubienie, kursywa, kolor. <b>Formatowanie akapitu</b>: wyrównanie, wcięcia, odstępy. <b>Style</b> nagłówków dają jednolity wygląd całego dokumentu.</p>
      <p>Nowy rozdział od nowej strony? Wstaw <b>podział strony</b>, a numery stron – w stopce lub nagłówku.</p>`,
    remember: 'Znaki – krój, rozmiar, styl. Akapit – wyrównanie, wcięcia, odstępy. Nowa strona – podział strony.',
    hook: 'Entery zamiast podziału strony to jak zajmowanie miejsca w kolejce plecakiem: ktoś coś dopisze i wszystko się przesuwa.',
    check: { q: 'Wyrównanie tekstu do środka to formatowanie…', options: ['akapitu', 'znaków', 'strony'], answer: 0, explain: 'Wyrównanie dotyczy całego akapitu, a nie pojedynczych znaków.' },
  },
  {
    title: 'Formaty plików',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Formaty: JPG – zdjęcia, kompresja stratna; PNG – bezstratna; MP3 – dźwięk, stratna; PDF – do druku; HTML – strona WWW; TXT – sam tekst">
      <g class="f2 s2"><rect x="10" y="10" width="126" height="80" rx="10"/><rect x="284" y="10" width="126" height="80" rx="10"/></g>
      <g class="f3 s3"><rect x="147" y="10" width="126" height="80" rx="10"/></g>
      <g class="f1 s1"><rect x="10" y="100" width="126" height="80" rx="10"/><rect x="147" y="100" width="126" height="80" rx="10"/><rect x="284" y="100" width="126" height="80" rx="10"/></g>
      <g class="tx" text-anchor="middle"><text x="73" y="34">📷</text><text x="210" y="34">🖼️</text><text x="347" y="34">🎵</text><text x="73" y="124">📄</text><text x="210" y="124">🌐</text><text x="347" y="124">📝</text></g>
      <g class="tx-b" text-anchor="middle"><text x="73" y="58">JPG</text><text x="210" y="58">PNG</text><text x="347" y="58">MP3</text><text x="73" y="148">PDF</text><text x="210" y="148">HTML</text><text x="347" y="148">TXT</text></g>
      <g class="tx-s" text-anchor="middle"><text x="73" y="80">zdjęcia · stratna</text><text x="210" y="80">bezstratna</text><text x="347" y="80">dźwięk · stratna</text><text x="73" y="170">do druku</text><text x="210" y="170">strona WWW</text><text x="347" y="170">sam tekst</text></g>
    </svg>`,
    text: `<p><b>Kompresja</b> zmniejsza plik. <b>Stratna</b> (JPG, MP3) usuwa część informacji bezpowrotnie – przy zdjęciach i muzyce zwykle tego nie widać ani nie słychać. <b>Bezstratna</b> (PNG, GIF) pozwala odtworzyć wszystko co do bitu. Tekstów nie kompresuje się stratnie.</p>
      <p>Pracę do wysłania i druku zapisz jako <b>PDF</b> – zachowa wygląd.</p>`,
    remember: 'Zdjęcie – JPG, grafika z przezroczystym tłem – PNG, dźwięk – MP3, do wysłania i druku – PDF.',
    hook: 'Kompresja stratna jak pakowanie na siłę: walizka mniejsza, ale coś zostało w domu na zawsze.',
  },
  {
    title: 'HTML: strona z kilku znaczników',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Po lewej kod HTML: nagłówek h1, akapit p, obrazek img z atrybutami src i alt, link a. Po prawej ta sama strona w przeglądarce">
      <rect x="8" y="8" width="214" height="204" rx="8" class="bg ln-thin"/>
      <g class="tx-s">
        <text x="16" y="36">&lt;h1&gt;Nasza klasa&lt;/h1&gt;</text>
        <text x="16" y="66">&lt;p&gt;Klasa 8b.&lt;/p&gt;</text>
        <text x="16" y="96">&lt;img src="klasa.jpg"</text>
        <text x="30" y="118">alt="Zdjęcie klasy"&gt;</text>
        <text x="16" y="150">&lt;a href="…"&gt;ZPE&lt;/a&gt;</text>
      </g>
      <rect x="232" y="8" width="180" height="204" rx="8" class="bg ln"/>
      <rect x="232" y="8" width="180" height="22" rx="8" class="f1"/>
      <text x="242" y="56" class="tx-b">Nasza klasa</text>
      <text x="242" y="80" class="tx-s">Klasa 8b.</text>
      <rect x="242" y="90" width="130" height="70" rx="6" class="f3 s3"/>
      <text x="307" y="132" class="tx" text-anchor="middle">🖼️</text>
      <text x="242" y="186" class="tx-s t1">ZPE</text>
      <line x1="242" y1="190" x2="268" y2="190" class="ln-thin"/>
    </svg>`,
    text: `<p><b>HTML</b> to język znaczników: opisuje, co jest nagłówkiem, akapitem, obrazkiem czy linkiem. Przeglądarka odczytuje plik .html i rysuje stronę.</p>
      <p>Znaczniki zwykle występują parami: <b>&lt;p&gt;</b> … <b>&lt;/p&gt;</b>. W <b>&lt;img&gt;</b> atrybut <b>src</b> wskazuje plik, a <b>alt</b> opisuje obrazek słowami.</p>`,
    remember: 'h1 – nagłówek, p – akapit, img (src, alt) – obrazek, a (href) – link.',
    check: { q: 'Który znacznik wstawia obrazek?', options: ['<img>', '<a>', '<p>'], answer: 0, explain: '<img> to obrazek; <a> – link, <p> – akapit.' },
  },
  {
    title: 'Prezentacja, która działa',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dwa slajdy: zły – ściana tekstu; dobry – tytuł Wulkany, trzy krótkie hasła i obrazek">
      <g class="tx-b" text-anchor="middle"><text x="105" y="20">✘ ściana tekstu</text><text x="315" y="20">✔ krótkie hasła</text></g>
      <rect x="10" y="30" width="190" height="130" rx="8" class="f2 s2"/>
      <g class="ln-thin"><line x1="22" y1="50" x2="188" y2="50"/><line x1="22" y1="60" x2="188" y2="60"/><line x1="22" y1="70" x2="188" y2="70"/><line x1="22" y1="80" x2="188" y2="80"/><line x1="22" y1="90" x2="188" y2="90"/><line x1="22" y1="100" x2="188" y2="100"/><line x1="22" y1="110" x2="188" y2="110"/><line x1="22" y1="120" x2="188" y2="120"/><line x1="22" y1="130" x2="188" y2="130"/><line x1="22" y1="140" x2="160" y2="140"/></g>
      <rect x="220" y="30" width="190" height="130" rx="8" class="f3 s3"/>
      <text x="234" y="60" class="tx-b">Wulkany</text>
      <g class="tx"><text x="234" y="90">• lawa</text><text x="234" y="114">• popiół</text><text x="234" y="138">• gazy</text></g>
      <circle cx="365" cy="110" r="26" class="f2 s2"/>
      <text x="210" y="188" class="tx-s" text-anchor="middle">duża czcionka · kontrast · 1 slajd = 1 myśl</text>
    </svg>`,
    text: `<p>Slajd ma <b>wspierać</b> twoje wystąpienie, a nie je zastępować: krótkie hasła, duża czcionka, dobry kontrast tekstu z tłem, obrazy związane z tematem.</p>
      <p>Pod cudzymi zdjęciami i grafikami podaj źródło – i sprawdź, na jakiej licencji są udostępnione.</p>`,
    remember: 'Krótko, czytelnie, kontrastowo. Źródła cudzych grafik.',
    hook: '1 slajd = 1 myśl. Resztę mówisz ty – slajd to nie ściąga do czytania.',
  },
];

window.LESSONS['informatyka/sieci'] = [
  {
    title: 'LAN, WAN i internet',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Dwie sieci lokalne LAN – w domu i w szkole – z urządzeniami, przełącznikiem i ruterem, połączone przez internet">
      <rect x="10" y="12" width="150" height="120" rx="12" class="f1 s1"/>
      <rect x="260" y="12" width="150" height="120" rx="12" class="f1 s1"/>
      <g class="tx-b" text-anchor="middle"><text x="85" y="38">LAN – dom</text><text x="335" y="38">LAN – szkoła</text></g>
      <g class="tx" text-anchor="middle"><text x="85" y="76">💻 📱 🖨️</text><text x="335" y="76">💻 💻 💻</text></g>
      <g class="tx-s" text-anchor="middle"><text x="85" y="114">ruter</text><text x="335" y="114">przełącznik + ruter</text></g>
      <g class="ln"><line x1="85" y1="132" x2="150" y2="160"/><line x1="335" y1="132" x2="270" y2="160"/></g>
      <ellipse cx="210" cy="172" rx="90" ry="28" class="f4 s4"/>
      <text x="210" y="178" class="tx-b" text-anchor="middle">internet</text>
    </svg>`,
    text: `<p><b>LAN</b> – sieć lokalna (dom, szkoła, budynek); bezprzewodowa to <b>WLAN</b> (Wi-Fi). <b>WAN</b> – sieć rozległa, łączy sieci lokalne na dużym obszarze. <b>Internet</b> to ogólnoświatowy zbiór połączonych sieci – nie należy do jednej firmy.</p>
      <p><b>Przełącznik</b> łączy urządzenia w sieci lokalnej, <b>ruter</b> przekazuje dane między sieciami. Dane wędrują w <b>pakietach</b>.</p>`,
    remember: 'LAN – lokalna, WLAN – lokalna bezprzewodowa, WAN – rozległa. Ruter łączy sieci.',
    hook: 'LAN to twoje osiedle, WAN – drogi między miastami, internet – sieć dróg całego świata.',
    check: { q: 'Sieć łącząca oddziały firmy w różnych miastach to…', options: ['WAN', 'LAN', 'WLAN'], answer: 0, explain: 'Duży obszar, wiele sieci lokalnych – to sieć rozległa WAN.' },
  },
  {
    title: 'Adres IP i DNS',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Przeglądarka pyta DNS o adres example.com, DNS odpowiada adresem IP 203.0.113.5, przeglądarka łączy się z serwerem WWW o tym adresie">
      <defs><marker id="a-k8i-sc-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="60" width="110" height="64" rx="10" class="f1 s1"/>
      <text x="65" y="88" class="tx" text-anchor="middle">💻</text>
      <text x="65" y="112" class="tx-s" text-anchor="middle">przeglądarka</text>
      <rect x="290" y="10" width="120" height="56" rx="10" class="f4 s4"/>
      <text x="350" y="44" class="tx-b" text-anchor="middle">DNS</text>
      <rect x="290" y="132" width="120" height="60" rx="10" class="f3 s3"/>
      <g class="tx-s" text-anchor="middle"><text x="350" y="156">serwer WWW</text><text x="350" y="178">203.0.113.5</text></g>
      <g class="ln" fill="none"><path d="M122,70 L286,38" marker-end="url(#a-k8i-sc-2)"/><path d="M122,114 L286,160" marker-end="url(#a-k8i-sc-2)"/></g>
      <path d="M288,58 L124,92" class="ln dash" fill="none" marker-end="url(#a-k8i-sc-2)"/>
      <g class="tx-s" text-anchor="middle"><text x="196" y="36">1. example.com?</text><text x="214" y="108">2. 203.0.113.5</text><text x="190" y="164">3. daj stronę</text></g>
    </svg>`,
    text: `<p>Każde urządzenie w sieci ma <b>adres IP</b>. Adres <b>IPv4</b> to 4 liczby od 0 do 255 oddzielone kropkami (razem 32 bity). Nowsze <b>IPv6</b> mają 128 bitów.</p>
      <p>Ludzie wolą nazwy, więc <b>DNS</b> zamienia nazwę domeny na adres IP – i dopiero wtedy przeglądarka łączy się z serwerem.</p>`,
    remember: 'IPv4: 4 liczby 0–255 (32 bity). DNS: nazwa domeny → adres IP.',
    hook: 'DNS to książka adresowa internetu: znasz nazwę, DNS podaje numer.',
    check: { q: 'Który adres IPv4 jest błędny?', options: ['10.0.0.1', '192.168.0.256', '172.16.5.4'], answer: 1, explain: 'Każda z 4 liczb musi mieścić się w zakresie 0–255. 256 jest za duże.' },
  },
  {
    title: 'Klient i serwer',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Klient – przeglądarka – wysyła żądanie strony do serwera, serwer odsyła plik HTML">
      <defs><marker id="a-k8i-sc-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="40" width="130" height="80" rx="12" class="f1 s1"/>
      <rect x="280" y="40" width="130" height="80" rx="12" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="75" y="74">💻</text><text x="345" y="74">🗄️</text></g>
      <g class="tx-b" text-anchor="middle"><text x="75" y="104">klient</text><text x="345" y="104">serwer</text></g>
      <path d="M142,60 L276,60" class="ln" marker-end="url(#a-k8i-sc-3)"/>
      <path d="M278,100 L144,100" class="ln dash" marker-end="url(#a-k8i-sc-3)"/>
      <g class="tx-s" text-anchor="middle"><text x="210" y="50">żądanie: daj stronę</text><text x="210" y="122">odpowiedź: HTML</text></g>
      <text x="210" y="158" class="tx-s" text-anchor="middle">przeglądarka = klient · komputer ze stroną = serwer</text>
    </svg>`,
    text: `<p><b>Serwer</b> udostępnia usługi: strony WWW, pocztę, pliki. <b>Klient</b> z nich korzysta – np. przeglądarka prosi serwer o stronę i ją wyświetla.</p>
      <p>Rolę wyznacza oprogramowanie: ten sam komputer może być serwerem jednej usługi i klientem innej.</p>`,
    remember: 'Serwer udostępnia, klient korzysta.',
    hook: 'Klient to gość w restauracji, serwer – kuchnia z kelnerem: ty zamawiasz, oni przynoszą.',
  },
  {
    title: 'Adres URL',
    svg: `<svg viewBox="0 0 420 150" role="img" aria-label="Adres https://example.com/foto/kot.jpg: https to protokół (s oznacza szyfrowanie), example.com to domena, /foto/kot.jpg to ścieżka do pliku">
      <rect x="10" y="30" width="90" height="40" rx="6" class="f2 s2"/>
      <rect x="104" y="30" width="130" height="40" rx="6" class="f4 s4"/>
      <rect x="238" y="30" width="172" height="40" rx="6" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="55" y="56">https://</text><text x="169" y="56">example.com</text><text x="324" y="56">/foto/kot.jpg</text></g>
      <g class="tx-s" text-anchor="middle"><text x="55" y="96">protokół</text><text x="169" y="96">domena</text><text x="324" y="96">ścieżka do pliku</text><text x="55" y="120">s = szyfrowane</text></g>
    </svg>`,
    text: `<p>Adres <b>URL</b> mówi przeglądarce, <b>jak</b> się połączyć (protokół), <b>z kim</b> (domena) i <b>co</b> pobrać (ścieżka do pliku).</p>
      <p><b>https</b> to połączenie szyfrowane – chroni przesyłane dane. Nie oznacza jednak, że treść strony jest prawdziwa.</p>`,
    remember: 'protokół :// domena / ścieżka. https = szyfrowanie, nie gwarancja prawdy.',
    check: { q: 'Część „https” w adresie URL to…', options: ['protokół', 'domena', 'ścieżka do pliku'], answer: 0, explain: 'https to protokół – sposób połączenia (szyfrowany).' },
  },
  {
    title: 'Czy to prawda? Oceń źródło',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Lista kontrolna: kto jest autorem, kiedy to napisano, czy są źródła, co mówią inne źródła, po co powstała strona">
      <g class="bg ln-thin"><rect x="10" y="8" width="400" height="32" rx="6"/><rect x="10" y="46" width="400" height="32" rx="6"/><rect x="10" y="84" width="400" height="32" rx="6"/><rect x="10" y="122" width="400" height="32" rx="6"/><rect x="10" y="160" width="400" height="32" rx="6"/></g>
      <g class="tx"><text x="22" y="30">👤 Kto jest autorem?</text><text x="22" y="68">📅 Kiedy to napisano?</text><text x="22" y="106">🔗 Czy podano źródła?</text><text x="22" y="144">⚖️ Co mówią inne źródła?</text><text x="22" y="182">🎯 Po co powstała strona?</text></g>
      <g class="f3 s3"><rect x="372" y="14" width="22" height="20" rx="4"/><rect x="372" y="52" width="22" height="20" rx="4"/><rect x="372" y="90" width="22" height="20" rx="4"/><rect x="372" y="128" width="22" height="20" rx="4"/><rect x="372" y="166" width="22" height="20" rx="4"/></g>
    </svg>`,
    text: `<p>Zanim uwierzysz w informację z sieci albo ją udostępnisz, sprawdź <b>autora</b>, <b>datę</b>, <b>źródła</b> i <b>porównaj</b> ją z innymi rzetelnymi źródłami. Zastanów się też, jaki jest <b>cel</b> strony: informuje, sprzedaje, a może chce wywołać emocje?</p>
      <p>Liczba polubień nie świadczy o prawdzie.</p>`,
    remember: 'Autor, data, źródła, porównanie, cel – zanim uwierzysz lub udostępnisz.',
    hook: '„Sprawdź, zanim podasz dalej” – jak z plotką na szkolnym korytarzu.',
  },
];

window.LESSONS['informatyka/prawo'] = [
  {
    title: 'Utwór: twórczość, która jest chroniona',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Utwory: tekst, zdjęcie, muzyka, film, program, rysunek – chronione od chwili ustalenia. Nie są chronione: pomysły i metody, ustawy, urzędowe dokumenty">
      <g class="f3 s3"><rect x="10" y="10" width="126" height="48" rx="8"/><rect x="147" y="10" width="126" height="48" rx="8"/><rect x="284" y="10" width="126" height="48" rx="8"/><rect x="10" y="66" width="126" height="48" rx="8"/><rect x="147" y="66" width="126" height="48" rx="8"/><rect x="284" y="66" width="126" height="48" rx="8"/></g>
      <g class="tx" text-anchor="middle"><text x="73" y="40">📝 tekst</text><text x="210" y="40">📷 zdjęcie</text><text x="347" y="40">🎵 muzyka</text><text x="73" y="96">🎬 film</text><text x="210" y="96">💻 program</text><text x="347" y="96">🎨 rysunek</text></g>
      <rect x="10" y="128" width="400" height="64" rx="10" class="f2 s2"/>
      <g class="tx-s" text-anchor="middle"><text x="210" y="152">nie są chronione:</text><text x="210" y="176">pomysły i metody, ustawy, urzędowe dokumenty</text></g>
    </svg>`,
    text: `<p><b>Utwór</b> to przejaw działalności twórczej o indywidualnym charakterze – także <b>program komputerowy</b>. Jest chroniony <b>od chwili ustalenia</b> (np. narysowania), bez rejestracji i bez znaczka ©.</p>
      <p>Prawo chroni <b>sposób wyrażenia</b>, a nie sam pomysł. Ustawy i urzędowe dokumenty nie są chronione prawem autorskim.</p>`,
    remember: 'Utwór chroniony od ustalenia – bez formalności. Pomysły, metody i akty prawne – nie.',
    hook: 'Pomysł jest wolny, wykonanie jest chronione: każdy może narysować smoka, ale twój rysunek smoka jest twój.',
    check: { q: 'Czy utwór trzeba zarejestrować, żeby był chroniony?', options: ['nie', 'tak, w urzędzie', 'tak, dopisując ©'], answer: 0, explain: 'Ochrona przysługuje bez żadnych formalności – od chwili ustalenia utworu.' },
  },
  {
    title: 'Prawa osobiste i majątkowe',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Prawa osobiste: autorstwo, podpis lub pseudonim, nienaruszalność treści – bez limitu czasu. Prawa majątkowe: korzystanie z utworu i wynagrodzenie – zasadniczo do 70 lat po śmierci twórcy, potem domena publiczna">
      <defs><marker id="a-k8i-pr-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="195" height="122" rx="10" class="f1 s1"/>
      <rect x="215" y="10" width="195" height="122" rx="10" class="f5 s5"/>
      <g class="tx-b" text-anchor="middle"><text x="107" y="36">osobiste ♾️</text><text x="312" y="36">majątkowe 💰</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="107" y="62">autorstwo</text><text x="107" y="82">podpis lub pseudonim</text><text x="107" y="102">nienaruszalność treści</text><text x="107" y="122">bez limitu czasu</text>
        <text x="312" y="62">korzystanie z utworu</text><text x="312" y="82">wynagrodzenie</text><text x="312" y="102">zasadniczo do 70 lat</text><text x="312" y="122">po śmierci twórcy</text>
      </g>
      <path d="M20,160 L400,160" class="ln" marker-end="url(#a-k8i-pr-2)"/>
      <g class="ln"><line x1="120" y1="152" x2="120" y2="168"/><line x1="300" y1="152" x2="300" y2="168"/></g>
      <g class="tx-s" text-anchor="middle"><text x="120" y="188">śmierć twórcy</text><text x="300" y="188">+70 lat → domena publiczna</text></g>
    </svg>`,
    text: `<p><b>Prawa osobiste</b> (np. do autorstwa, do podpisania utworu) są <b>nieograniczone w czasie</b> – nie można ich sprzedać ani się ich zrzec.</p>
      <p><b>Prawa majątkowe</b> (korzystanie z utworu i wynagrodzenie) zasadniczo wygasają <b>70 lat po śmierci twórcy</b>. Wtedy utwór trafia do <b>domeny publicznej</b>.</p>`,
    remember: 'Osobiste – na zawsze i nie do sprzedania. Majątkowe – zasadniczo do 70 lat po śmierci twórcy.',
    hook: 'Osobiste mówią „to moje dzieło”, majątkowe – „kto może na nim zarabiać”.',
  },
  {
    title: 'Dozwolony użytek i cytat',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dozwolony użytek osobisty w kręgu bliskich, np. pożyczenie książki. Cytat: fragment z podaniem autora i źródła. Programy komputerowe są poza dozwolonym użytkiem osobistym">
      <circle cx="105" cy="100" r="88" class="f3 s3"/>
      <text x="105" y="72" class="tx-b" text-anchor="middle">krąg bliskich</text>
      <text x="105" y="106" class="tx" text-anchor="middle">👪 🧑 🧑</text>
      <text x="105" y="138" class="tx-s" text-anchor="middle">📖 pożyczyć książkę</text>
      <rect x="210" y="15" width="200" height="80" rx="10" class="f1 s1"/>
      <text x="310" y="46" class="tx-b" text-anchor="middle">„cytat”</text>
      <text x="310" y="76" class="tx-s" text-anchor="middle">fragment + autor i źródło</text>
      <rect x="210" y="110" width="200" height="72" rx="10" class="f2 s2"/>
      <text x="310" y="140" class="tx-b" text-anchor="middle">✘ programy</text>
      <text x="310" y="166" class="tx-s" text-anchor="middle">poza użytkiem osobistym</text>
    </svg>`,
    text: `<p><b>Dozwolony użytek osobisty</b>: z już rozpowszechnionego utworu możesz bez zgody korzystać w kręgu rodziny i znajomych – np. pożyczyć książkę. <b>Nie dotyczy to programów komputerowych</b>.</p>
      <p><b>Prawo cytatu</b>: we własnej pracy możesz przytoczyć fragment cudzego utworu, gdy wymaga tego cel (wyjaśnianie, analiza, nauczanie). Zawsze podaj <b>autora i źródło</b>.</p>`,
    remember: 'Dozwolony użytek: bez zgody, w kręgu bliskich – ale nie programy. Zawsze podaj autora i źródło.',
    check: { q: 'Czy w ramach dozwolonego użytku osobistego wolno dać koledze kopię płatnego programu?', options: ['nie – nie dotyczy programów komputerowych', 'tak', 'tak, jeśli to rodzina'], answer: 0, explain: 'Ustawa wyłącza programy komputerowe z dozwolonego użytku osobistego – decyduje licencja.' },
  },
  {
    title: 'Licencje na programy',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Licencje od najbardziej zamkniętej: komercyjna – płacisz; shareware – próba, potem płacisz; freeware – za darmo, bez zmian kodu; open source – zmieniaj i dziel się; domena publiczna – bez ograniczeń">
      <rect x="10" y="10" width="400" height="32" rx="8" class="f2 s2"/>
      <rect x="10" y="48" width="400" height="32" rx="8" class="f4 s4"/>
      <rect x="10" y="86" width="400" height="32" rx="8" class="f1 s1"/>
      <rect x="10" y="124" width="400" height="32" rx="8" class="f3 s3"/>
      <rect x="10" y="162" width="400" height="32" rx="8" class="f5 s5"/>
      <g class="tx"><text x="22" y="32">💳 komercyjna – płacisz</text><text x="22" y="70">⏳ shareware – próba, potem płacisz</text><text x="22" y="108">🆓 freeware – darmo, bez zmian kodu</text><text x="22" y="146">🔓 open source – zmieniaj i dziel się</text><text x="22" y="184">🌍 domena publiczna – bez ograniczeń</text></g>
    </svg>`,
    text: `<p><b>Licencja</b> to umowa: mówi, co wolno z programem robić. <b>Shareware</b> – na próbę (limit czasu lub funkcji). <b>Freeware</b> – za darmo, ale nie wolno zmieniać kodu ani zarabiać na rozpowszechnianiu. <b>Open source</b>, np. <b>GNU GPL</b> – wolno badać i zmieniać kod oraz rozpowszechniać ulepszenia (GPL: na tej samej licencji).</p>`,
    remember: 'Shareware – na próbę; freeware – za darmo, bez zmian; open source (np. GNU GPL) – kod otwarty do zmian.',
    hook: 'Darmowy ≠ otwarty: freeware możesz używać, ale do kodu nie zajrzysz.',
  },
  {
    title: 'Creative Commons – klocki licencji',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Elementy licencji Creative Commons: BY – podaj autora, SA – ta sama licencja, NC – bez zarabiania, ND – bez przeróbek">
      <g class="f1 s1"><rect x="10" y="10" width="96" height="116" rx="10"/></g>
      <g class="f3 s3"><rect x="112" y="10" width="96" height="116" rx="10"/></g>
      <g class="f4 s4"><rect x="214" y="10" width="96" height="116" rx="10"/></g>
      <g class="f2 s2"><rect x="316" y="10" width="96" height="116" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="58" y="46">BY</text><text x="160" y="46">SA</text><text x="262" y="46">NC</text><text x="364" y="46">ND</text></g>
      <g class="tx-s" text-anchor="middle"><text x="58" y="80">podaj</text><text x="58" y="100">autora</text><text x="160" y="80">ta sama</text><text x="160" y="100">licencja</text><text x="262" y="80">bez</text><text x="262" y="100">zarabiania</text><text x="364" y="80">bez</text><text x="364" y="100">przeróbek</text></g>
      <g class="tx-s" text-anchor="middle"><text x="210" y="160">CC BY-SA: podaj autora, przeróbki na CC BY-SA</text><text x="210" y="186">CC BY-NC-ND: podaj autora, nie zarabiaj, nie przerabiaj</text></g>
    </svg>`,
    text: `<p>Licencje <b>Creative Commons</b> pozwalają legalnie korzystać z cudzych materiałów. Autor wybiera warunki: <b>BY</b> – uznanie autorstwa, <b>SA</b> – na tych samych warunkach, <b>NC</b> – użycie niekomercyjne, <b>ND</b> – bez utworów zależnych (bez przeróbek).</p>`,
    remember: 'BY – autor, SA – ta sama licencja, NC – niekomercyjnie, ND – bez przeróbek.',
    hook: 'Licencje CC to klocki: autor składa z nich swoje zasady.',
    check: { q: 'Czy utwór na licencji CC BY-NC-ND wolno przerobić?', options: ['nie', 'tak', 'tak, jeśli na nim zarobisz'], answer: 0, explain: 'ND – bez utworów zależnych, czyli bez przeróbek.' },
  },
];

window.LESSONS['informatyka/bezpieczenstwo'] = [
  {
    title: 'Twoje dane = twoja sprawa',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Przykłady danych osobowych: imię i nazwisko, adres, PESEL, telefon, e-mail, wizerunek. Pozwalają ustalić, kim jesteś">
      <g class="f5 s5"><rect x="10" y="10" width="126" height="58" rx="8"/><rect x="147" y="10" width="126" height="58" rx="8"/><rect x="284" y="10" width="126" height="58" rx="8"/><rect x="10" y="76" width="126" height="58" rx="8"/><rect x="147" y="76" width="126" height="58" rx="8"/><rect x="284" y="76" width="126" height="58" rx="8"/></g>
      <g class="tx" text-anchor="middle"><text x="73" y="34">👤</text><text x="210" y="34">🏠</text><text x="347" y="34">🆔</text><text x="73" y="100">📞</text><text x="210" y="100">📧</text><text x="347" y="100">📷</text></g>
      <g class="tx-s" text-anchor="middle"><text x="73" y="58">imię i nazwisko</text><text x="210" y="58">adres</text><text x="347" y="58">PESEL</text><text x="73" y="124">telefon</text><text x="210" y="124">e-mail</text><text x="347" y="124">wizerunek</text></g>
      <g class="tx-s" text-anchor="middle"><text x="210" y="162">pozwalają ustalić, kim jesteś → chroń je</text><text x="210" y="186">zbiera się tylko dane niezbędne (minimalizacja)</text></g>
    </svg>`,
    text: `<p><b>Dane osobowe</b> to informacje, które pozwalają bezpośrednio lub pośrednio ustalić, kim jest dana osoba. Sam nick zwykle nią nie jest – ale w połączeniu z innymi danymi może być.</p>
      <p>Kto zbiera dane, ma to robić w określonym celu, tylko w niezbędnym zakresie i informować, kto i po co je zbiera.</p>`,
    remember: 'Imię i nazwisko, adres, PESEL, telefon, e-mail, wizerunek – to dane osobowe.',
    hook: 'Dane osobowe jak klucze do domu: nie rozdajesz ich każdemu.',
    check: { q: 'Która informacja jest daną osobową?', options: ['twój adres e-mail', 'nazwa stolicy Polski', 'kolor tła strony'], answer: 0, explain: 'Adres e-mail pozwala dotrzeć do konkretnej osoby. Pozostałe informacje nikogo nie identyfikują.' },
  },
  {
    title: 'Hasło, które trudno złamać',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Słabe hasła: 123456, qwerty, Kasia2012. Silne: co najmniej 12 znaków, zdanie z co najmniej pięciu wyrazów, inne do każdej usługi. Do tego 2FA: hasło i kod z aplikacji">
      <rect x="10" y="10" width="195" height="130" rx="10" class="f2 s2"/>
      <rect x="215" y="10" width="195" height="130" rx="10" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="107" y="36">✘ słabe</text><text x="312" y="36">✔ silne</text></g>
      <g class="tx" text-anchor="middle"><text x="107" y="68">123456</text><text x="107" y="94">qwerty</text><text x="107" y="120">Kasia2012</text></g>
      <g class="tx-s" text-anchor="middle"><text x="312" y="66">min. 12 znaków</text><text x="312" y="92">zdanie z 5+ wyrazów</text><text x="312" y="118">inne do każdej usługi</text></g>
      <rect x="10" y="150" width="400" height="50" rx="10" class="f4 s4"/>
      <text x="210" y="182" class="tx-b" text-anchor="middle">🔐 2FA: hasło + kod z aplikacji</text>
    </svg>`,
    text: `<p>Silne hasło ma co najmniej <b>12 znaków</b> i jest trudne do odgadnięcia – dobrze sprawdza się <b>zdanie z kilku wyrazów</b>. Do każdej usługi używaj <b>innego hasła</b>: wyciek z jednego serwisu nie otworzy wtedy pozostałych.</p>
      <p><b>Uwierzytelnianie dwuskładnikowe (2FA)</b> dodaje drugi składnik, np. kod z aplikacji – nawet znając hasło, oszust się nie zaloguje.</p>`,
    remember: 'Min. 12 znaków, fraza z kilku słów, inne hasło do każdej usługi, 2FA tam, gdzie się da.',
    hook: 'Hasło jak szczoteczka do zębów: tylko twoje, nikomu jej nie pożyczasz.',
  },
  {
    title: 'Phishing – rozpoznaj haczyk',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Fałszywa wiadomość: dziwny adres nadawcy, pilne – masz 2 godziny, dopłać 1,50 zł, link, prośba o login i hasło. Obok sygnały ostrzegawcze">
      <rect x="10" y="10" width="262" height="200" rx="10" class="bg ln"/>
      <text x="20" y="34" class="tx-s">Od: obsluga@kurier-paczka.example</text>
      <line x1="20" y1="44" x2="262" y2="44" class="ln-thin"/>
      <text x="20" y="72" class="tx-b">PILNE! Masz 2 godziny</text>
      <g class="tx-s"><text x="20" y="100">Dopłać 1,50 zł, inaczej</text><text x="20" y="120">paczka wróci do nadawcy.</text></g>
      <text x="20" y="152" class="tx-s t1">🔗 kliknij tutaj</text>
      <text x="20" y="184" class="tx-s">Podaj login i hasło.</text>
      <g class="tx-s t2"><text x="282" y="34">⚠️ dziwny adres</text><text x="282" y="72">⚠️ presja czasu</text><text x="282" y="152">⚠️ podejrzany link</text><text x="282" y="184">⚠️ prośba o hasło</text></g>
    </svg>`,
    text: `<p><b>Phishing</b> to podszywanie się pod zaufaną instytucję lub osobę, żeby wyłudzić dane logowania, skłonić do kliknięcia w link albo pobrania pliku. Sygnały: <b>presja czasu</b>, adres nadawcy <b>podobny, ale nie identyczny</b> z prawdziwym, <b>prośba o hasło lub kod</b>.</p>
      <p>Nie klikaj – adres banku czy przewoźnika wpisz w przeglądarce sam. Aktualizuj system i programy: łatki zamykają luki, przez które wchodzi złośliwe oprogramowanie (np. ransomware).</p>`,
    remember: 'Presja czasu, dziwny adres, link, prośba o hasło – STOP. Adres serwisu wpisz sam.',
    hook: '🎣 Phishing to łowienie: przynęta (pilna sprawa), haczyk (link) – a rybą masz być ty.',
    check: { q: 'Bank prosi e-mailem o podanie hasła. Co robisz?', options: ['nie podaję; sam wchodzę na stronę banku lub dzwonię', 'podaję szybko, bo to pilne', 'odsyłam hasło w odpowiedzi'], answer: 0, explain: 'Haseł nie podaje się w odpowiedzi na wiadomości. Sprawdź sprawę samodzielnie, wpisując adres banku.' },
  },
  {
    title: 'Cyfrowy ślad i netykieta',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Post, zrzut ekranu, udostępnienia – usunięcie posta nie usuwa kopii. Zasady: pisz z szacunkiem, cudze zdjęcie tylko za zgodą, przy hejcie nie dołączaj, wesprzyj i powiedz dorosłemu">
      <defs><marker id="a-k8i-bz-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f1 s1"><rect x="10" y="14" width="120" height="50" rx="8"/><rect x="150" y="14" width="120" height="50" rx="8"/><rect x="290" y="14" width="120" height="50" rx="8"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="44">📝 post</text><text x="210" y="44">📸 zrzut ekranu</text><text x="350" y="44">🔁 udostępnienia</text></g>
      <g class="ln"><path d="M132,39 L146,39" marker-end="url(#a-k8i-bz-4)"/><path d="M272,39 L286,39" marker-end="url(#a-k8i-bz-4)"/></g>
      <text x="210" y="90" class="tx-s" text-anchor="middle">usunięcie posta nie usuwa kopii</text>
      <g class="tx-s"><text x="20" y="128">✔ pisz z szacunkiem</text><text x="20" y="152">✔ cudze zdjęcie – tylko za zgodą</text><text x="20" y="176">✔ hejt? nie dołączaj, wesprzyj, powiedz dorosłemu</text></g>
    </svg>`,
    text: `<p>Wszystko, co publikujesz, tworzy twój <b>wizerunek w sieci</b>. Usunięty post mógł już zostać skopiowany albo zapisany na zrzucie ekranu.</p>
      <p><b>Netykieta</b> to zasady kulturalnego zachowania w sieci: szacunek, bez podszywania się, bez publikowania cudzych zdjęć i danych bez zgody. Gdy ktoś jest obrażany – nie przyłączaj się, wesprzyj tę osobę i powiedz zaufanemu dorosłemu.</p>`,
    remember: 'Zanim opublikujesz: czy chcesz, żeby zobaczył to każdy – także za kilka lat?',
  },
];
