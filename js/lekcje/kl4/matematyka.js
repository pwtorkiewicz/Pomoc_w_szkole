/* Lekcje – matematyka, klasa 4. Klucz: 'matematyka/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/liczby'] = [
  {
    title: 'Każda cyfra ma swoje miejsce',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela rzędów z liczbą 2 345 607: miliony 2, setki tysięcy 3, dziesiątki tysięcy 4, tysiące 5, setki 6, dziesiątki 0, jedności 7">
      <rect x="10" y="10" width="54" height="110" rx="6" class="f5 s5"/>
      <rect x="66" y="10" width="160" height="110" rx="6" class="f1 s1"/>
      <rect x="228" y="10" width="162" height="110" rx="6" class="f3 s3"/>
      <text x="37" y="32" class="tx-s" text-anchor="middle">mln</text>
      <text x="92" y="32" class="tx-s" text-anchor="middle">setki</text><text x="92" y="47" class="tx-s" text-anchor="middle">tys.</text>
      <text x="146" y="32" class="tx-s" text-anchor="middle">dzies.</text><text x="146" y="47" class="tx-s" text-anchor="middle">tys.</text>
      <text x="200" y="32" class="tx-s" text-anchor="middle">tys.</text>
      <text x="255" y="32" class="tx-s" text-anchor="middle">setki</text>
      <text x="309" y="32" class="tx-s" text-anchor="middle">dzies.</text>
      <text x="363" y="32" class="tx-s" text-anchor="middle">jedn.</text>
      <g class="tx-b" text-anchor="middle">
        <text x="37" y="96" class="tx-b">2</text><text x="92" y="96" class="tx-b">3</text><text x="146" y="96" class="tx-b">4</text><text x="200" y="96" class="tx-b t2">5</text>
        <text x="255" y="96" class="tx-b">6</text><text x="309" y="96" class="tx-b">0</text><text x="363" y="96" class="tx-b">7</text>
      </g>
      <text x="37" y="142" class="tx-s t5" text-anchor="middle">miliony</text>
      <text x="146" y="142" class="tx-s t1" text-anchor="middle">tysiące</text>
      <text x="309" y="142" class="tx-s t3" text-anchor="middle">jedności</text>
      <text x="200" y="174" class="tx" text-anchor="middle">2 345 607 – cyfra 5 to <tspan class="t2">5 tysięcy</tspan></text>
      <text x="200" y="194" class="tx-s" text-anchor="middle">grupy po 3 cyfry, licząc od prawej</text>
    </svg>`,
    text: `<p>Mamy tylko 10 cyfr: od 0 do 9. A jednak zapiszesz nimi każdą liczbę! Sekret: liczy się <b>miejsce</b> cyfry. To miejsce nazywamy <b>rzędem</b>.</p>
      <p>Każdy rząd jest 10 razy większy od poprzedniego. Zero mówi „tu nic nie ma”, ale trzyma miejsce, żeby inne cyfry nie przesunęły się w złą stronę.</p>`,
    remember: '10 jedności = 1 dziesiątka · 10 dziesiątek = 1 setka · 10 setek = 1 tysiąc · 1000 tysięcy = 1 milion',
    hook: 'Duże liczby czytasz jak paczki po trzy cyfry: najpierw paczka <b>milionów</b>, potem <b>tysięcy</b>, na końcu <b>jedności</b>. 2 345 607 to „dwa miliony trzysta czterdzieści pięć tysięcy sześćset siedem”.',
    check: { q: 'W liczbie 52 408 cyfra 2 oznacza…', options: ['2 setki', '2 tysiące', '2 dziesiątki tysięcy'], answer: 1, explain: 'Od prawej: 8 jedności, 0 dziesiątek, 4 setki, 2 tysiące, 5 dziesiątek tysięcy.' },
  },
  {
    title: 'Która większa? Spójrz na oś',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Oś liczbowa od 0 do 100 z kreskami co 10. Zaznaczone liczby 30 i 70. Liczby rosną w prawo.">
      <defs><marker id="a-k4m-licz-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="14" y1="70" x2="392" y2="70" class="ln"/>
      <path d="M384,65 L393,70 L384,75" class="ln"/>
      <g class="ln"><line x1="25" y1="64" x2="25" y2="76"/><line x1="59" y1="64" x2="59" y2="76"/><line x1="93" y1="64" x2="93" y2="76"/><line x1="127" y1="64" x2="127" y2="76"/><line x1="161" y1="64" x2="161" y2="76"/><line x1="195" y1="64" x2="195" y2="76"/><line x1="229" y1="64" x2="229" y2="76"/><line x1="263" y1="64" x2="263" y2="76"/><line x1="297" y1="64" x2="297" y2="76"/><line x1="331" y1="64" x2="331" y2="76"/><line x1="365" y1="64" x2="365" y2="76"/></g>
      <text x="25" y="98" class="tx-s" text-anchor="middle">0</text><text x="127" y="98" class="tx-s" text-anchor="middle">30</text>
      <text x="195" y="98" class="tx-s" text-anchor="middle">50</text><text x="263" y="98" class="tx-s" text-anchor="middle">70</text>
      <text x="365" y="98" class="tx-s" text-anchor="middle">100</text>
      <circle cx="127" cy="70" r="7" class="f1 s1 sw"/>
      <circle cx="263" cy="70" r="7" class="f2 s2 sw"/>
      <path d="M140,40 C180,22 210,22 250,40" class="ln s2" marker-end="url(#a-k4m-licz-1)"/>
      <text x="195" y="22" class="tx-s" text-anchor="middle">w prawo – większe</text>
      <text x="120" y="135" class="tx-b" text-anchor="middle">30 <tspan class="t2">&lt;</tspan> 70</text><text x="280" y="135" class="tx-b" text-anchor="middle">70 <tspan class="t2">&gt;</tspan> 30</text>
      <text x="200" y="160" class="tx-s" text-anchor="middle">otwarta strona znaku – do większej liczby</text>
    </svg>`,
    text: `<p>Na osi liczbowej liczby rosną w prawo, a kreski są w równych odstępach. Ta liczba, która leży bardziej na prawo, jest większa.</p>
      <p>Bez osi też dasz radę: liczba z <b>większą liczbą cyfr</b> jest większa (10 001 &gt; 9 999). Gdy cyfr jest tyle samo, porównuj od lewej pierwszą cyfrę, która się różni: 4 589 &lt; 4 612, bo 5 setek to mniej niż 6 setek.</p>`,
    remember: '&lt; – „jest mniejsze od”, &gt; – „jest większe od”. Na osi: dalej w prawo = więcej.',
    hook: 'Znak &lt; i &gt; to otwarta buzia głodomora – zawsze zwraca się w stronę większej liczby, bo chce zjeść więcej.',
    check: { q: 'Która liczba jest większa: 6 099 czy 6 910?', options: ['6 099', '6 910', 'są równe'], answer: 1, explain: 'Tysiące są równe (6). Setki: 0 i 9 – więc 6 910 jest większa.' },
  },
  {
    title: 'Zaokrąglanie – do której bliżej?',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Oś od 340 do 350 z kreskami co 1. Liczba 347 jest bliżej 350, a 342 bliżej 340.">
      <defs><marker id="a-k4m-licz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker>
      <marker id="a-k4m-licz-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <line x1="30" y1="80" x2="370" y2="80" class="ln"/>
      <g class="ln"><line x1="50" y1="75" x2="50" y2="85"/><line x1="80" y1="75" x2="80" y2="85"/><line x1="110" y1="75" x2="110" y2="85"/><line x1="140" y1="75" x2="140" y2="85"/><line x1="170" y1="75" x2="170" y2="85"/><line x1="200" y1="75" x2="200" y2="85"/><line x1="230" y1="75" x2="230" y2="85"/><line x1="260" y1="75" x2="260" y2="85"/><line x1="290" y1="75" x2="290" y2="85"/><line x1="320" y1="75" x2="320" y2="85"/><line x1="350" y1="75" x2="350" y2="85"/></g>
      <line x1="50" y1="68" x2="50" y2="92" class="ln sw"/><line x1="350" y1="68" x2="350" y2="92" class="ln sw"/>
      <text x="50" y="114" class="tx-b" text-anchor="middle">340</text>
      <text x="200" y="114" class="tx-s" text-anchor="middle">345</text>
      <text x="350" y="114" class="tx-b" text-anchor="middle">350</text>
      <circle cx="260" cy="80" r="7" class="f3 s3 sw"/><text x="260" y="58" class="tx t3" text-anchor="middle">347</text>
      <circle cx="110" cy="80" r="7" class="f1 s1 sw"/><text x="110" y="58" class="tx t1" text-anchor="middle">342</text>
      <path d="M272,44 C300,30 330,40 344,62" class="ln s3" marker-end="url(#a-k4m-licz-2)"/>
      <path d="M98,44 C80,30 62,40 54,62" class="ln s1" marker-end="url(#a-k4m-licz-3)"/>
      <text x="110" y="146" class="tx t1" text-anchor="middle">342 ≈ 340</text><text x="290" y="146" class="tx t3" text-anchor="middle">347 ≈ 350</text>
      <text x="200" y="166" class="tx-s" text-anchor="middle">345 – dokładnie w połowie; umowa: w górę (350)</text>
    </svg>`,
    text: `<p>Zaokrąglić liczbę to zastąpić ją najbliższą „okrągłą” liczbą. Robisz to codziennie: „w szkole jest około 300 uczniów”.</p>
      <p>Do <b>dziesiątek</b> patrzysz na cyfrę jedności, do <b>setek</b> – na cyfrę dziesiątek, do <b>tysięcy</b> – na cyfrę setek. 0–4: w dół, 5–9: w górę. Przykład: 2 649 ≈ 2 600 (do setek), 2 649 ≈ 3 000 (do tysięcy).</p>`,
    remember: 'Patrz na cyfrę tuż za miejscem zaokrąglenia: 0, 1, 2, 3, 4 – w dół; 5, 6, 7, 8, 9 – w górę. Znak ≈ czytamy „w przybliżeniu”.',
    hook: '„Od piątki w górę” – piątka już wspina się na wyższe piętro.',
    check: { q: 'Zaokrąglij 6 352 do setek.', options: ['6 300', '6 350', '6 400', '6 000'], answer: 2, explain: 'Cyfra dziesiątek to 5, więc w górę: 6 352 ≈ 6 400.' },
  },
  {
    title: 'Liczby rzymskie – 7 znaków',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Siedem znaków rzymskich: I 1, V 5, X 10, L 50, C 100, D 500, M 1000. Przykłady: XVI = 16, XIV = 14, MMXXVI = 2026.">
      <g text-anchor="middle">
        <rect x="8" y="10" width="48" height="64" rx="8" class="f4 s4"/><text x="32" y="40" class="tx-b">I</text><text x="32" y="64" class="tx-s">1</text>
        <rect x="63" y="10" width="48" height="64" rx="8" class="f4 s4"/><text x="87" y="40" class="tx-b">V</text><text x="87" y="64" class="tx-s">5</text>
        <rect x="118" y="10" width="48" height="64" rx="8" class="f4 s4"/><text x="142" y="40" class="tx-b">X</text><text x="142" y="64" class="tx-s">10</text>
        <rect x="173" y="10" width="48" height="64" rx="8" class="f4 s4"/><text x="197" y="40" class="tx-b">L</text><text x="197" y="64" class="tx-s">50</text>
        <rect x="228" y="10" width="48" height="64" rx="8" class="f4 s4"/><text x="252" y="40" class="tx-b">C</text><text x="252" y="64" class="tx-s">100</text>
        <rect x="283" y="10" width="48" height="64" rx="8" class="f4 s4"/><text x="307" y="40" class="tx-b">D</text><text x="307" y="64" class="tx-s">500</text>
        <rect x="338" y="10" width="54" height="64" rx="8" class="f4 s4"/><text x="365" y="40" class="tx-b">M</text><text x="365" y="64" class="tx-s">1000</text>
      </g>
      <text x="16" y="110" class="tx-b">XVI</text><text x="90" y="110" class="tx">= 10 + 5 + 1 = 16</text><text x="384" y="110" class="tx-s t3" text-anchor="end">dodajesz</text>
      <text x="16" y="142" class="tx-b">X<tspan class="t2">IV</tspan></text><text x="90" y="142" class="tx">= 10 + <tspan class="t2">(5 − 1)</tspan> = 14</text><text x="384" y="142" class="tx-s t2" text-anchor="end">odejmujesz</text>
      <text x="16" y="174" class="tx-b">MMXXVI</text><text x="110" y="174" class="tx">= 2000 + 20 + 6 = 2026</text>
    </svg>`,
    text: `<p>Starożytni Rzymianie zapisywali liczby literami. Spotkasz je na tarczach zegarów, w numerach rozdziałów i w nazwach wieków – żyjemy w XXI wieku.</p>
      <p>Znaki piszesz od największego i <b>dodajesz</b>. Mniejszy znak <b>przed</b> większym <b>odejmujesz</b> – ale tylko w sześciu parach: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900. Ten sam znak może stać obok siebie najwyżej 3 razy (III, XXX, MMM), a V, L i D się nie powtarzają.</p>`,
    remember: 'I = 1 · V = 5 · X = 10 · L = 50 · C = 100 · D = 500 · M = 1000',
    hook: 'C jak łacińskie „centum” – sto (stąd centymetr: setna część metra). M jak „mille” – tysiąc.',
    check: { q: 'Ile to jest XLIV?', options: ['64', '46', '44', '54'], answer: 2, explain: 'XL = 40 (50 − 10), IV = 4 (5 − 1). Razem 44.' },
  },
  {
    title: 'Uwaga, pułapki!',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie źle i dobrze: siedem tysięcy dwadzieścia to 7 020, nie 720; 4 zapisujemy IV, nie IIII; 1995 zaokrąglone do dziesiątek to 2000; 10 to X, nie VV">
      <text x="110" y="22" class="tx-b t2" text-anchor="middle">✗ źle</text>
      <text x="300" y="22" class="tx-b t3" text-anchor="middle">✓ dobrze</text>
      <text x="16" y="56" class="tx-s">„siedem tysięcy dwadzieścia”</text>
      <text x="110" y="78" class="tx-b t2" text-anchor="middle">720</text><text x="300" y="78" class="tx-b t3" text-anchor="middle">7 020</text>
      <text x="16" y="110" class="tx-s">4 po rzymsku</text>
      <text x="110" y="132" class="tx-b t2" text-anchor="middle">IIII</text><text x="300" y="132" class="tx-b t3" text-anchor="middle">IV</text>
      <text x="16" y="162" class="tx-s">1 995 do dziesiątek</text>
      <text x="110" y="188" class="tx-b t2" text-anchor="middle">1 990</text><text x="300" y="188" class="tx-b t3" text-anchor="middle">2 000</text>
    </svg>`,
    text: `<ul>
      <li>Zer w środku liczby nie słychać, ale trzeba je zapisać: „siedem tysięcy dwadzieścia” to 7 020.</li>
      <li>Na osi liczbowej zawsze sprawdź, <b>co ile</b> są kreski – co 1, co 10, a może co 100?</li>
      <li>Zaokrąglając, patrz tylko na jedną cyfrę – tę tuż za miejscem zaokrąglenia. 1 995 do dziesiątek: cyfra jedności 5, więc w górę – do 2 000.</li>
      <li>W liczbach rzymskich nie piszesz czterech takich samych znaków z rzędu: 4 to IV, 40 to XL.</li>
    </ul>`,
    remember: 'Zera trzymają miejsca · sprawdź skalę osi · przy zaokrąglaniu patrz na jedną cyfrę · najwyżej 3 takie same znaki rzymskie.',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/dzialania'] = [
  {
    title: 'Liczysz w pamięci? Skacz po osi',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Pusta oś: od 47 skok o 30 do 77, potem skok o 8 do 85. Wynik 47 + 38 = 85.">
      <defs><marker id="a-k4m-dz-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker>
      <marker id="a-k4m-dz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="20" y1="100" x2="385" y2="100" class="ln"/>
      <line x1="40" y1="92" x2="40" y2="108" class="ln"/><line x1="280" y1="92" x2="280" y2="108" class="ln"/><line x1="360" y1="92" x2="360" y2="108" class="ln"/>
      <text x="40" y="128" class="tx-b" text-anchor="middle">47</text><text x="280" y="128" class="tx-b" text-anchor="middle">77</text><text x="360" y="128" class="tx-b t2" text-anchor="middle">85</text>
      <path d="M44,94 C100,20 220,20 276,94" class="ln s1 sw" marker-end="url(#a-k4m-dz-1)"/>
      <path d="M284,94 C300,62 340,62 356,94" class="ln s2 sw" marker-end="url(#a-k4m-dz-2)"/>
      <text x="160" y="38" class="tx-b t1" text-anchor="middle">+30</text>
      <text x="320" y="60" class="tx-b t2" text-anchor="middle">+8</text>
      <text x="200" y="154" class="tx" text-anchor="middle">47 + 38 = 47 + 30 + 8 = 85</text>
    </svg>`,
    text: `<p>Nie musisz liczyć „słupkiem”. Rozbij drugą liczbę na dziesiątki i jedności i dodawaj po kawałku: najpierw duży skok, potem mały.</p>
      <p>Odejmowanie tak samo, tylko skaczesz w lewo: 82 − 47 = 82 − 40 − 7 = 42 − 7 = 35. Wyniki pośrednie możesz zapisywać – to porządek, a nie ściąganie.</p>`,
    remember: 'Rozbij liczbę na dziesiątki i jedności. Sprawdzenie odejmowania: dodaj wynik do odjemnika (35 + 47 = 82).',
    hook: 'Jak po schodach: najpierw duże kroki (dziesiątki), potem małe (jedności).',
    check: { q: 'Ile to jest 65 + 27?', options: ['82', '92', '812', '93'], answer: 1, explain: '65 + 20 = 85, 85 + 7 = 92.' },
  },
  {
    title: 'Sprytne sztuczki: zamieniaj i rozbijaj',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Po lewej: 25 + 38 + 75, łączymy 25 i 75 w 100. Po prawej: prostokąt 7 na 13 rozbity na 7 na 10 i 7 na 3, czyli 70 + 21 = 91.">
      <text x="95" y="24" class="tx-b" text-anchor="middle">25 + 38 + 75</text>
      <path d="M50,32 C60,58 120,58 130,32" class="ln s3 sw"/>
      <text x="90" y="74" class="tx t3" text-anchor="middle">25 + 75 = 100</text>
      <text x="95" y="108" class="tx-b" text-anchor="middle">100 + 38 = 138</text>
      <text x="95" y="150" class="tx-b" text-anchor="middle">4 · 17 · 25</text>
      <text x="95" y="178" class="tx t3" text-anchor="middle">4 · 25 = 100</text>
      <text x="95" y="202" class="tx-b" text-anchor="middle">100 · 17 = 1 700</text>
      <line x1="196" y1="8" x2="196" y2="204" class="ln-thin"/>
      <rect x="215" y="40" width="120" height="84" class="f1 s1 sw"/>
      <rect x="335" y="40" width="36" height="84" class="f2 s2 sw"/>
      <text x="275" y="88" class="tx" text-anchor="middle">7 · 10</text>
      <text x="353" y="88" class="tx-s" text-anchor="middle">7 · 3</text>
      <text x="275" y="30" class="tx-s" text-anchor="middle">10</text><text x="353" y="30" class="tx-s" text-anchor="middle">3</text>
      <text x="207" y="88" class="tx-s" text-anchor="end">7</text>
      <text x="293" y="156" class="tx-b" text-anchor="middle">7 · 13 =</text>
      <text x="293" y="184" class="tx-b" text-anchor="middle">70 + 21 = 91</text>
    </svg>`,
    text: `<p><b>Przemienność</b>: w dodawaniu i mnożeniu możesz zamieniać kolejność liczb – wynik się nie zmieni. <b>Łączność</b>: możesz łączyć je w wygodne pary.</p>
      <p><b>Rozdzielność</b>: trudny czynnik rozbij na łatwe części. 7 · 13 to tyle samo co 7 · 10 i 7 · 3 razem – zobacz prostokąt. Tak samo 6 · 99 = 6 · 100 − 6 = 594.</p>
      <p>Uwaga: odejmowania i dzielenia nie wolno odwracać – 10 − 3 to nie to samo co 3 − 10.</p>`,
    remember: 'Szukaj par, które dają 10, 100 albo 1000: 25 + 75, 4 · 25, 2 · 50.',
    check: { q: 'Ile to jest 4 · 19 · 25?', options: ['190', '475', '1 600', '1 900'], answer: 3, explain: '4 · 25 = 100, a 100 · 19 = 1 900.' },
  },
  {
    title: 'Dzielenie: podział, mieszczenie i reszta',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="14 kulek podzielonych na grupy po 4: trzy pełne grupy i 2 kulki reszty. 14 : 4 = 3 reszty 2.">
      <rect x="12" y="22" width="92" height="40" rx="12" class="ln-thin"/>
      <rect x="114" y="22" width="92" height="40" rx="12" class="ln-thin"/>
      <rect x="216" y="22" width="92" height="40" rx="12" class="ln-thin"/>
      <circle cx="28" cy="42" r="7" class="f1 s1"/><circle cx="48" cy="42" r="7" class="f1 s1"/><circle cx="68" cy="42" r="7" class="f1 s1"/><circle cx="88" cy="42" r="7" class="f1 s1"/><circle cx="130" cy="42" r="7" class="f1 s1"/><circle cx="150" cy="42" r="7" class="f1 s1"/><circle cx="170" cy="42" r="7" class="f1 s1"/><circle cx="190" cy="42" r="7" class="f1 s1"/><circle cx="232" cy="42" r="7" class="f1 s1"/><circle cx="252" cy="42" r="7" class="f1 s1"/><circle cx="272" cy="42" r="7" class="f1 s1"/><circle cx="292" cy="42" r="7" class="f1 s1"/>
      <circle cx="342" cy="42" r="7" class="f2 s2"/><circle cx="362" cy="42" r="7" class="f2 s2"/>
      <text x="58" y="84" class="tx-s" text-anchor="middle">1. grupa</text><text x="160" y="84" class="tx-s" text-anchor="middle">2. grupa</text>
      <text x="262" y="84" class="tx-s" text-anchor="middle">3. grupa</text><text x="352" y="84" class="tx-s t2" text-anchor="middle">reszta</text>
      <text x="200" y="124" class="tx-b" text-anchor="middle">14 : 4 = 3 reszty <tspan class="t2">2</tspan></text>
      <text x="200" y="156" class="tx" text-anchor="middle">sprawdzenie: 3 · 4 + <tspan class="t2">2</tspan> = 14</text>
    </svg>`,
    text: `<p>Dzielenie ma dwa znaczenia. <b>Podział</b>: 12 cukierków dzielisz po równo między 3 osoby – po ile każda? <b>Mieszczenie</b>: 12 cukierków pakujesz po 3 do torebek – ile torebek? W obu przypadkach 12 : 3 = 4.</p>
      <p>Czasem coś zostaje. 14 kulek po 4 w grupie: 3 grupy i 2 kulki zostają. Te 2 kulki to <b>reszta</b>.</p>`,
    remember: 'Reszta jest zawsze mniejsza od dzielnika. Sprawdzenie: wynik · dzielnik + reszta = dzielna.',
    hook: 'Jeśli reszta wyszła równa dzielnikowi albo większa – zmieści się jeszcze jedna grupa!',
    check: { q: 'Ile to jest 29 : 5?', options: ['5 reszty 4', '4 reszty 9', '6 reszty 1', '5 reszty 3'], answer: 0, explain: '5 · 5 = 25, do 29 brakuje 4. Reszta 4 jest mniejsza od 5, więc się zgadza.' },
  },
  {
    title: 'O ile więcej? Ile razy więcej?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Pasek Oli: 24 naklejki, czyli 4 kawałki po 6. Pasek Kuby: 6 naklejek, jeden kawałek. Różnica 18, iloraz 4.">
      <text x="10" y="44" class="tx-b">Ola</text>
      <rect x="70" y="24" width="72" height="30" class="f1 s1 sw"/><rect x="142" y="24" width="72" height="30" class="f1 s1 sw"/>
      <rect x="214" y="24" width="72" height="30" class="f1 s1 sw"/><rect x="286" y="24" width="72" height="30" class="f1 s1 sw"/>
      <text x="106" y="44" class="tx-s" text-anchor="middle">6</text><text x="178" y="44" class="tx-s" text-anchor="middle">6</text>
      <text x="250" y="44" class="tx-s" text-anchor="middle">6</text><text x="322" y="44" class="tx-s" text-anchor="middle">6</text>
      <text x="368" y="44" class="tx-b">24</text>
      <text x="10" y="94" class="tx-b">Kuba</text>
      <rect x="70" y="74" width="72" height="30" class="f2 s2 sw"/>
      <text x="106" y="94" class="tx-s" text-anchor="middle">6</text>
      <path d="M142,114 L142,124 L358,124 L358,114" class="ln s3 sw"/>
      <text x="250" y="144" class="tx t3" text-anchor="middle">o 18 więcej: 24 − 6 = 18</text>
      <text x="200" y="178" class="tx t1" text-anchor="middle">4 razy więcej: 24 : 6 = 4</text>
    </svg>`,
    text: `<p>Ola ma 24 naklejki, a Kuba 6. Można je porównać na dwa sposoby.</p>
      <p><b>„O ile więcej?”</b> – sprawdzasz różnicę, więc <b>odejmujesz</b>: 24 − 6 = 18. Ola ma o 18 naklejek więcej.</p>
      <p><b>„Ile razy więcej?”</b> – sprawdzasz, ile razy mniejsza liczba mieści się w większej, więc <b>dzielisz</b>: 24 : 6 = 4. Ola ma 4 razy więcej.</p>`,
    remember: '„O ile?” → odejmowanie. „Ile razy?” → dzielenie.',
    hook: '„O ILE” – <b>O</b> jak <b>O</b>dejmowanie. „ILE RAZY” – razy kojarzy się z mnożeniem, a jego odwrotnością jest dzielenie.',
    check: { q: 'Rower kosztuje 600 zł, a hulajnoga 200 zł. Ile razy rower jest droższy?', options: ['400 razy', '3 razy', '4 razy'], answer: 1, explain: '„Ile razy” – dzielimy: 600 : 200 = 3.' },
  },
  {
    title: 'Kolejność działań, kwadraty i pułapki',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie źle i dobrze: 2 + 3 · 4 to 14, a nie 20. Kwadrat 4 do kwadratu to 4 · 4 = 16, a nie 8 – pokazany jako kwadrat z 16 kropek.">
      <text x="10" y="26" class="tx-b">2 + 3 · 4 = ?</text>
      <text x="10" y="56" class="tx t2">✗ 5 · 4 = 20</text>
      <text x="10" y="84" class="tx t3">✓ 2 + 12 = 14</text>
      <text x="10" y="106" class="tx-s">najpierw mnożenie</text>
      <text x="10" y="146" class="tx-b">4² = ?</text>
      <text x="10" y="176" class="tx t2">✗ 4 · 2 = 8</text>
      <text x="10" y="204" class="tx t3">✓ 4 · 4 = 16</text>
      <line x1="196" y1="8" x2="196" y2="212" class="ln-thin"/>
      <rect x="234" y="40" width="128" height="128" class="f4 s4"/>
      <circle cx="250" cy="56" r="7" class="f1 s1"/><circle cx="282" cy="56" r="7" class="f1 s1"/><circle cx="314" cy="56" r="7" class="f1 s1"/><circle cx="346" cy="56" r="7" class="f1 s1"/><circle cx="250" cy="88" r="7" class="f1 s1"/><circle cx="282" cy="88" r="7" class="f1 s1"/><circle cx="314" cy="88" r="7" class="f1 s1"/><circle cx="346" cy="88" r="7" class="f1 s1"/><circle cx="250" cy="120" r="7" class="f1 s1"/><circle cx="282" cy="120" r="7" class="f1 s1"/><circle cx="314" cy="120" r="7" class="f1 s1"/><circle cx="346" cy="120" r="7" class="f1 s1"/><circle cx="250" cy="152" r="7" class="f1 s1"/><circle cx="282" cy="152" r="7" class="f1 s1"/><circle cx="314" cy="152" r="7" class="f1 s1"/><circle cx="346" cy="152" r="7" class="f1 s1"/>
      <text x="298" y="28" class="tx-s" text-anchor="middle">4</text><text x="374" y="108" class="tx-s">4</text>
      <text x="298" y="196" class="tx-b" text-anchor="middle">4² = 16</text>
    </svg>`,
    text: `<p>Gdy w działaniu jest kilka znaków, liczysz w ustalonej kolejności: <b>nawiasy</b>, potem <b>potęgi</b>, potem <b>mnożenie i dzielenie</b>, na końcu <b>dodawanie i odejmowanie</b>. Działania z tego samego stopnia – od lewej do prawej.</p>
      <p><b>Kwadrat</b> liczby to liczba pomnożona przez siebie: 4² = 4 · 4 = 16 – kropki układają się w kwadrat. <b>Sześcian</b>: 2³ = 2 · 2 · 2 = 8.</p>
      <p>Zanim policzysz dokładnie, <b>oszacuj</b>: 49 · 21 to około 50 · 20 = 1 000. Jeśli wyjdzie ci 10 000, wiesz, że coś poszło nie tak.</p>`,
    remember: 'Nawiasy → potęgi → mnożenie i dzielenie → dodawanie i odejmowanie.',
    hook: 'Mała dwójka przy liczbie to nie „razy 2”, tylko „razy ona sama”: 4² = 4 · 4.',
    check: { q: 'Ile to jest 18 − 2 · 5?', options: ['80', '8', '13'], answer: 1, explain: 'Najpierw mnożenie: 2 · 5 = 10, potem 18 − 10 = 8.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/miary'] = [
  {
    title: 'Linijka: centymetry i milimetry',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Linijka od 0 do 6 cm. Odcinek od 0 do 3 cm 4 mm. Między 1 a 2 cm zaznaczono 10 małych kresek: 1 cm = 10 mm.">
      <line x1="40" y1="30" x2="210" y2="30" class="ln s1" stroke-width="4"/>
      <line x1="40" y1="22" x2="40" y2="38" class="ln s1" stroke-width="3"/><line x1="210" y1="22" x2="210" y2="38" class="ln s1" stroke-width="3"/>
      <text x="125" y="20" class="tx-s t1" text-anchor="middle">3 cm 4 mm = 34 mm</text>
      <rect x="26" y="46" width="328" height="46" rx="4" class="f4 s4"/><line x1="40" y1="46" x2="40" y2="62" class="ln"/><line x1="45" y1="46" x2="45" y2="53" class="ln-thin"/><line x1="50" y1="46" x2="50" y2="53" class="ln-thin"/><line x1="55" y1="46" x2="55" y2="53" class="ln-thin"/><line x1="60" y1="46" x2="60" y2="53" class="ln-thin"/><line x1="65" y1="46" x2="65" y2="57" class="ln-thin"/><line x1="70" y1="46" x2="70" y2="53" class="ln-thin"/><line x1="75" y1="46" x2="75" y2="53" class="ln-thin"/><line x1="80" y1="46" x2="80" y2="53" class="ln-thin"/><line x1="85" y1="46" x2="85" y2="53" class="ln-thin"/><line x1="90" y1="46" x2="90" y2="62" class="ln"/><line x1="95" y1="46" x2="95" y2="53" class="ln-thin"/><line x1="100" y1="46" x2="100" y2="53" class="ln-thin"/><line x1="105" y1="46" x2="105" y2="53" class="ln-thin"/><line x1="110" y1="46" x2="110" y2="53" class="ln-thin"/><line x1="115" y1="46" x2="115" y2="57" class="ln-thin"/><line x1="120" y1="46" x2="120" y2="53" class="ln-thin"/><line x1="125" y1="46" x2="125" y2="53" class="ln-thin"/><line x1="130" y1="46" x2="130" y2="53" class="ln-thin"/><line x1="135" y1="46" x2="135" y2="53" class="ln-thin"/><line x1="140" y1="46" x2="140" y2="62" class="ln"/><line x1="145" y1="46" x2="145" y2="53" class="ln-thin"/><line x1="150" y1="46" x2="150" y2="53" class="ln-thin"/><line x1="155" y1="46" x2="155" y2="53" class="ln-thin"/><line x1="160" y1="46" x2="160" y2="53" class="ln-thin"/><line x1="165" y1="46" x2="165" y2="57" class="ln-thin"/><line x1="170" y1="46" x2="170" y2="53" class="ln-thin"/><line x1="175" y1="46" x2="175" y2="53" class="ln-thin"/><line x1="180" y1="46" x2="180" y2="53" class="ln-thin"/><line x1="185" y1="46" x2="185" y2="53" class="ln-thin"/><line x1="190" y1="46" x2="190" y2="62" class="ln"/><line x1="195" y1="46" x2="195" y2="53" class="ln-thin"/><line x1="200" y1="46" x2="200" y2="53" class="ln-thin"/><line x1="205" y1="46" x2="205" y2="53" class="ln-thin"/><line x1="210" y1="46" x2="210" y2="53" class="ln-thin"/><line x1="215" y1="46" x2="215" y2="57" class="ln-thin"/><line x1="220" y1="46" x2="220" y2="53" class="ln-thin"/><line x1="225" y1="46" x2="225" y2="53" class="ln-thin"/><line x1="230" y1="46" x2="230" y2="53" class="ln-thin"/><line x1="235" y1="46" x2="235" y2="53" class="ln-thin"/><line x1="240" y1="46" x2="240" y2="62" class="ln"/><line x1="245" y1="46" x2="245" y2="53" class="ln-thin"/><line x1="250" y1="46" x2="250" y2="53" class="ln-thin"/><line x1="255" y1="46" x2="255" y2="53" class="ln-thin"/><line x1="260" y1="46" x2="260" y2="53" class="ln-thin"/><line x1="265" y1="46" x2="265" y2="57" class="ln-thin"/><line x1="270" y1="46" x2="270" y2="53" class="ln-thin"/><line x1="275" y1="46" x2="275" y2="53" class="ln-thin"/><line x1="280" y1="46" x2="280" y2="53" class="ln-thin"/><line x1="285" y1="46" x2="285" y2="53" class="ln-thin"/><line x1="290" y1="46" x2="290" y2="62" class="ln"/><line x1="295" y1="46" x2="295" y2="53" class="ln-thin"/><line x1="300" y1="46" x2="300" y2="53" class="ln-thin"/><line x1="305" y1="46" x2="305" y2="53" class="ln-thin"/><line x1="310" y1="46" x2="310" y2="53" class="ln-thin"/><line x1="315" y1="46" x2="315" y2="57" class="ln-thin"/><line x1="320" y1="46" x2="320" y2="53" class="ln-thin"/><line x1="325" y1="46" x2="325" y2="53" class="ln-thin"/><line x1="330" y1="46" x2="330" y2="53" class="ln-thin"/><line x1="335" y1="46" x2="335" y2="53" class="ln-thin"/><line x1="340" y1="46" x2="340" y2="62" class="ln"/><text x="40" y="82" class="tx-s" text-anchor="middle">0</text><text x="90" y="82" class="tx-s" text-anchor="middle">1</text><text x="140" y="82" class="tx-s" text-anchor="middle">2</text><text x="190" y="82" class="tx-s" text-anchor="middle">3</text><text x="240" y="82" class="tx-s" text-anchor="middle">4</text><text x="290" y="82" class="tx-s" text-anchor="middle">5</text><text x="340" y="82" class="tx-s" text-anchor="middle">6</text>
      <path d="M90,100 L90,108 L140,108 L140,100" class="ln s2 sw"/>
      <text x="115" y="128" class="tx-s t2" text-anchor="middle">1 cm = 10 mm</text>
      <text x="200" y="160" class="tx" text-anchor="middle">1 dm = 10 cm · 1 m = 100 cm</text>
      <text x="200" y="182" class="tx" text-anchor="middle">1 km = 1000 m</text>
    </svg>`,
    text: `<p>Na linijce duże kreski z liczbami to <b>centymetry</b> (cm), a małe kreski między nimi – <b>milimetry</b> (mm). Odcinek mierzysz zawsze od kreski <b>0</b>.</p>
      <p>Większe odległości mierzymy w <b>decymetrach</b> (dm), <b>metrach</b> (m) – np. długość boiska – i <b>kilometrach</b> (km) – np. droga do babci. Zamiana: 2 m 35 cm = 200 cm + 35 cm = 235 cm.</p>`,
    remember: '1 cm = 10 mm · 1 dm = 10 cm · 1 m = 100 cm · 1 km = 1000 m',
    hook: '„Kilo” znaczy tysiąc: kilometr to 1000 metrów, kilogram to 1000 gramów.',
    check: { q: 'Ile centymetrów mają 2 m 5 cm?', options: ['25 cm', '205 cm', '250 cm', '2 005 cm'], answer: 1, explain: '2 m = 200 cm, a 200 cm + 5 cm = 205 cm.' },
  },
  {
    title: 'Masa: gramy, dekagramy, kilogramy, tony',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schody jednostek masy: g, dag, kg, t. Nad schodkami: 1 dag = 10 g, 1 kg = 100 dag, 1 t = 1000 kg">
      <rect x="10" y="142" width="80" height="44" rx="6" class="f3 s3 sw"/><text x="50" y="170" class="tx-b" text-anchor="middle">g</text>
      <rect x="110" y="106" width="80" height="80" rx="6" class="f1 s1 sw"/><text x="150" y="152" class="tx-b" text-anchor="middle">dag</text>
      <rect x="210" y="70" width="80" height="116" rx="6" class="f4 s4 sw"/><text x="250" y="134" class="tx-b" text-anchor="middle">kg</text>
      <rect x="310" y="34" width="80" height="152" rx="6" class="f5 s5 sw"/><text x="350" y="116" class="tx-b" text-anchor="middle">t</text>
      <text x="150" y="96" class="tx-s t1" text-anchor="middle">1 dag = 10 g</text>
      <text x="250" y="60" class="tx-s t4" text-anchor="middle">1 kg = 100 dag</text>
      <text x="350" y="24" class="tx-s t5" text-anchor="middle">1 t = 1000 kg</text>
    </svg>`,
    text: `<p>Masę mierzymy w <b>gramach</b> (g), <b>dekagramach</b> (dag), <b>kilogramach</b> (kg) i <b>tonach</b> (t). W sklepie mówi się np. „20 deko szynki” – to 20 dag, czyli 200 g.</p>
      <p>Każdy schodek w górę to większa jednostka: 1 dag = 10 g, 1 kg = 100 dag = 1000 g, 1 t = 1000 kg. Pół kilograma to 50 dag, czyli 500 g.</p>`,
    remember: '1 dag = 10 g · 1 kg = 100 dag = 1000 g · 1 t = 1000 kg',
    hook: '„Deka” znaczy dziesięć: dekagram to 10 gramów.',
    check: { q: 'Ile dekagramów ma 1 kg?', options: ['10 dag', '1 000 dag', '100 dag'], answer: 2, explain: '1 kg = 1000 g, a 1 dag = 10 g, więc 1000 : 10 = 100 dag.' },
  },
  {
    title: 'Zegar i kalendarz: ile czasu minęło?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Zegar pokazuje 7:50. Obok skoki: od 7:50 do 8:00 to 10 minut, od 8:00 do 8:15 to 15 minut, razem 25 minut.">
      <defs><marker id="a-k4m-mi-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker>
      <marker id="a-k4m-mi-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
      <circle cx="82" cy="96" r="74" class="bg ln"/><line x1="82" y1="31" x2="82" y2="22" class="ln"/><line x1="89.3" y1="26.4" x2="89.7" y2="22.4" class="ln-thin"/><line x1="96.6" y1="27.5" x2="97.4" y2="23.6" class="ln-thin"/><line x1="103.6" y1="29.4" x2="104.9" y2="25.6" class="ln-thin"/><line x1="110.5" y1="32.1" x2="112.1" y2="28.4" class="ln-thin"/><line x1="114.5" y1="39.7" x2="119" y2="31.9" class="ln"/><line x1="123.1" y1="39.4" x2="125.5" y2="36.1" class="ln-thin"/><line x1="128.8" y1="44" x2="131.5" y2="41" class="ln-thin"/><line x1="134" y1="49.2" x2="137" y2="46.5" class="ln-thin"/><line x1="138.6" y1="54.9" x2="141.9" y2="52.5" class="ln-thin"/><line x1="138.3" y1="63.5" x2="146.1" y2="59" class="ln"/><line x1="145.9" y1="67.5" x2="149.6" y2="65.9" class="ln-thin"/><line x1="148.6" y1="74.4" x2="152.4" y2="73.1" class="ln-thin"/><line x1="150.5" y1="81.4" x2="154.4" y2="80.6" class="ln-thin"/><line x1="151.6" y1="88.7" x2="155.6" y2="88.3" class="ln-thin"/><line x1="147" y1="96" x2="156" y2="96" class="ln"/><line x1="151.6" y1="103.3" x2="155.6" y2="103.7" class="ln-thin"/><line x1="150.5" y1="110.6" x2="154.4" y2="111.4" class="ln-thin"/><line x1="148.6" y1="117.6" x2="152.4" y2="118.9" class="ln-thin"/><line x1="145.9" y1="124.5" x2="149.6" y2="126.1" class="ln-thin"/><line x1="138.3" y1="128.5" x2="146.1" y2="133" class="ln"/><line x1="138.6" y1="137.1" x2="141.9" y2="139.5" class="ln-thin"/><line x1="134" y1="142.8" x2="137" y2="145.5" class="ln-thin"/><line x1="128.8" y1="148" x2="131.5" y2="151" class="ln-thin"/><line x1="123.1" y1="152.6" x2="125.5" y2="155.9" class="ln-thin"/><line x1="114.5" y1="152.3" x2="119" y2="160.1" class="ln"/><line x1="110.5" y1="159.9" x2="112.1" y2="163.6" class="ln-thin"/><line x1="103.6" y1="162.6" x2="104.9" y2="166.4" class="ln-thin"/><line x1="96.6" y1="164.5" x2="97.4" y2="168.4" class="ln-thin"/><line x1="89.3" y1="165.6" x2="89.7" y2="169.6" class="ln-thin"/><line x1="82" y1="161" x2="82" y2="170" class="ln"/><line x1="74.7" y1="165.6" x2="74.3" y2="169.6" class="ln-thin"/><line x1="67.4" y1="164.5" x2="66.6" y2="168.4" class="ln-thin"/><line x1="60.4" y1="162.6" x2="59.1" y2="166.4" class="ln-thin"/><line x1="53.5" y1="159.9" x2="51.9" y2="163.6" class="ln-thin"/><line x1="49.5" y1="152.3" x2="45" y2="160.1" class="ln"/><line x1="40.9" y1="152.6" x2="38.5" y2="155.9" class="ln-thin"/><line x1="35.2" y1="148" x2="32.5" y2="151" class="ln-thin"/><line x1="30" y1="142.8" x2="27" y2="145.5" class="ln-thin"/><line x1="25.4" y1="137.1" x2="22.1" y2="139.5" class="ln-thin"/><line x1="25.7" y1="128.5" x2="17.9" y2="133" class="ln"/><line x1="18.1" y1="124.5" x2="14.4" y2="126.1" class="ln-thin"/><line x1="15.4" y1="117.6" x2="11.6" y2="118.9" class="ln-thin"/><line x1="13.5" y1="110.6" x2="9.6" y2="111.4" class="ln-thin"/><line x1="12.4" y1="103.3" x2="8.4" y2="103.7" class="ln-thin"/><line x1="17" y1="96" x2="8" y2="96" class="ln"/><line x1="12.4" y1="88.7" x2="8.4" y2="88.3" class="ln-thin"/><line x1="13.5" y1="81.4" x2="9.6" y2="80.6" class="ln-thin"/><line x1="15.4" y1="74.4" x2="11.6" y2="73.1" class="ln-thin"/><line x1="18.1" y1="67.5" x2="14.4" y2="65.9" class="ln-thin"/><line x1="25.7" y1="63.5" x2="17.9" y2="59" class="ln"/><line x1="25.4" y1="54.9" x2="22.1" y2="52.5" class="ln-thin"/><line x1="30" y1="49.2" x2="27" y2="46.5" class="ln-thin"/><line x1="35.2" y1="44" x2="32.5" y2="41" class="ln-thin"/><line x1="40.9" y1="39.4" x2="38.5" y2="36.1" class="ln-thin"/><line x1="49.5" y1="39.7" x2="45" y2="31.9" class="ln"/><line x1="53.5" y1="32.1" x2="51.9" y2="28.4" class="ln-thin"/><line x1="60.4" y1="29.4" x2="59.1" y2="25.6" class="ln-thin"/><line x1="67.4" y1="27.5" x2="66.6" y2="23.6" class="ln-thin"/><line x1="74.7" y1="26.4" x2="74.3" y2="22.4" class="ln-thin"/><text x="108.5" y="55.1" class="tx-s" text-anchor="middle">1</text><text x="127.9" y="74.5" class="tx-s" text-anchor="middle">2</text><text x="135" y="101" class="tx-s" text-anchor="middle">3</text><text x="127.9" y="127.5" class="tx-s" text-anchor="middle">4</text><text x="108.5" y="146.9" class="tx-s" text-anchor="middle">5</text><text x="82" y="154" class="tx-s" text-anchor="middle">6</text><text x="55.5" y="146.9" class="tx-s" text-anchor="middle">7</text><text x="36.1" y="127.5" class="tx-s" text-anchor="middle">8</text><text x="29" y="101" class="tx-s" text-anchor="middle">9</text><text x="36.1" y="74.5" class="tx-s" text-anchor="middle">10</text><text x="55.5" y="55.1" class="tx-s" text-anchor="middle">11</text><text x="82" y="48" class="tx-s" text-anchor="middle">12</text><line x1="82" y1="96" x2="54.7" y2="115.1" class="ln" stroke-width="6" stroke-linecap="round"/><line x1="82" y1="96" x2="41" y2="72.3" class="ln s2" stroke-width="3" stroke-linecap="round"/><circle cx="82" cy="96" r="4" class="t2"/>
      <line x1="180" y1="120" x2="392" y2="120" class="ln"/>
      <line x1="190" y1="112" x2="190" y2="128" class="ln"/><line x1="270" y1="112" x2="270" y2="128" class="ln"/><line x1="380" y1="112" x2="380" y2="128" class="ln"/>
      <text x="190" y="148" class="tx" text-anchor="middle">7:50</text><text x="270" y="148" class="tx-b" text-anchor="middle">8:00</text><text x="380" y="148" class="tx" text-anchor="end">8:15</text>
      <path d="M194,112 C210,82 250,82 266,112" class="ln s1 sw" marker-end="url(#a-k4m-mi-2)"/>
      <path d="M274,112 C300,72 350,72 376,112" class="ln s3 sw" marker-end="url(#a-k4m-mi-3)"/>
      <text x="230" y="78" class="tx t1" text-anchor="middle">10 min</text><text x="325" y="68" class="tx t3" text-anchor="middle">15 min</text>
      <text x="286" y="184" class="tx-b" text-anchor="middle">razem 25 min</text>
    </svg>`,
    text: `<p>Ile trwała droga do szkoły, jeśli wyszedłeś o 7:50, a doszedłeś o 8:15? Licz skokami: najpierw do <b>pełnej godziny</b> (10 min), potem dalej (15 min). Razem 25 minut.</p>
      <p>Kalendarz: tydzień ma 7 dni, rok – 12 miesięcy. Rok zwykły ma 365 dni, a przestępny – 366, bo luty ma wtedy 29 dni zamiast 28. 30 dni mają kwiecień, czerwiec, wrzesień i listopad, pozostałe miesiące (oprócz lutego) – po 31.</p>`,
    remember: '1 h = 60 min · 1 min = 60 s · kwadrans = 15 min · doba = 24 h · tydzień = 7 dni',
    hook: 'Zaciśnij pięść i licz miesiące po kostkach i dołkach między nimi: kostka – 31 dni, dołek – 30 (albo luty). Styczeń – kostka, luty – dołek, marzec – kostka… lipiec na ostatniej kostce, sierpień zaczyna od nowa na pierwszej kostce.',
    check: { q: 'Trening trwa od 16:30 do 17:15. Ile to minut?', options: ['85', '35', '45', '75'], answer: 2, explain: 'Od 16:30 do 17:00 – 30 minut, od 17:00 do 17:15 – 15 minut. Razem 45 minut.' },
  },
  {
    title: 'Pieniądze: reszta jak u kasjera',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Zakupy za 4 zł 60 gr, płacisz 10 zł. Doliczanie: plus 40 gr do 5 zł, plus 5 zł do 10 zł. Reszta 5 zł 40 gr.">
      <defs><marker id="a-k4m-mi-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker>
      <marker id="a-k4m-mi-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker></defs>
      <text x="10" y="20" class="tx">sok 3 zł 40 gr + bułka 1 zł 20 gr</text>
      <text x="10" y="44" class="tx-b">razem 4 zł 60 gr</text>
      <line x1="20" y1="120" x2="390" y2="120" class="ln"/>
      <line x1="40" y1="112" x2="40" y2="128" class="ln"/><line x1="120" y1="112" x2="120" y2="128" class="ln"/><line x1="370" y1="112" x2="370" y2="128" class="ln"/>
      <text x="40" y="148" class="tx-s" text-anchor="middle">4 zł 60 gr</text><text x="120" y="148" class="tx-s" text-anchor="middle">5 zł</text><text x="370" y="148" class="tx-s" text-anchor="middle">10 zł</text>
      <path d="M44,112 C60,84 100,84 116,112" class="ln s2 sw" marker-end="url(#a-k4m-mi-4)"/>
      <path d="M124,112 C180,52 310,52 366,112" class="ln s3 sw" marker-end="url(#a-k4m-mi-5)"/>
      <text x="80" y="80" class="tx t2" text-anchor="middle">+40 gr</text><text x="245" y="58" class="tx t3" text-anchor="middle">+5 zł</text>
      <text x="200" y="180" class="tx-b" text-anchor="middle">reszta: 5 zł 40 gr</text>
    </svg>`,
    text: `<p><b>1 zł = 100 gr</b>. Dodajesz złote do złotych i grosze do groszy. Gdy groszy uzbiera się 100 albo więcej, zamieniasz 100 gr na 1 zł.</p>
      <p>Resztę najłatwiej policzyć jak kasjer – <b>doliczając</b> od ceny do kwoty, którą dałeś: od 4 zł 60 gr do 5 zł brakuje 40 gr, od 5 zł do 10 zł – 5 zł. Reszta to 5 zł 40 gr.</p>
      <p>Kieszonkowe: dostajesz 10 zł na tydzień, a klocki kosztują 50 zł. 50 : 10 = 5, więc oszczędzasz 5 tygodni.</p>`,
    remember: '1 zł = 100 gr. Reszta = to, co dajesz − cena.',
    check: { q: 'Kupujesz zeszyt za 4 zł 70 gr i płacisz 10 zł. Ile reszty dostaniesz?', options: ['6 zł 30 gr', '5 zł 70 gr', '5 zł 30 gr', '6 zł 70 gr'], answer: 2, explain: 'Od 4 zł 70 gr do 5 zł – 30 gr, od 5 zł do 10 zł – 5 zł. Reszta: 5 zł 30 gr.' },
  },
  {
    title: 'Uwaga, pułapki!',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie źle i dobrze: 2 m 5 cm to 205 cm, nie 25 cm; 1 h 30 min to 90 min, nie 130 min; 1 kg to 100 dag, nie 10 dag; 1 zł 5 gr to 105 gr, nie 150 gr">
      <text x="165" y="22" class="tx-b t2" text-anchor="middle">✗ źle</text>
      <text x="310" y="22" class="tx-b t3" text-anchor="middle">✓ dobrze</text>
      <line x1="236" y1="8" x2="236" y2="204" class="ln-thin"/>
      <text x="10" y="64" class="tx-b">2 m 5 cm</text><text x="140" y="64" class="tx t2" text-anchor="middle">25 cm</text><text x="310" y="64" class="tx t3" text-anchor="middle">205 cm</text>
      <text x="10" y="108" class="tx-b">1 h 30 min</text><text x="140" y="108" class="tx t2" text-anchor="middle">130 min</text><text x="310" y="108" class="tx t3" text-anchor="middle">90 min</text>
      <text x="10" y="152" class="tx-b">1 kg</text><text x="140" y="152" class="tx t2" text-anchor="middle">10 dag</text><text x="310" y="152" class="tx t3" text-anchor="middle">100 dag</text>
      <text x="10" y="196" class="tx-b">1 zł 5 gr</text><text x="140" y="196" class="tx t2" text-anchor="middle">150 gr</text><text x="310" y="196" class="tx t3" text-anchor="middle">105 gr</text>
    </svg>`,
    text: `<ul>
      <li>Metr to <b>100</b> cm, a nie 10. Dlatego 2 m 5 cm = 200 cm + 5 cm = 205 cm.</li>
      <li>Godzina ma <b>60</b> minut, a nie 100! 1 h 30 min = 60 min + 30 min = 90 min.</li>
      <li>Kilogram to <b>100</b> dag (a 1000 g).</li>
      <li>5 gr to nie 50 gr: 1 zł 5 gr = 100 gr + 5 gr = 105 gr.</li>
      <li>Licząc upływ czasu, skacz najpierw do pełnej godziny.</li>
    </ul>`,
    remember: 'Zanim zamienisz jednostki, przypomnij sobie, ile mniejszych mieści się w większej: 10, 60, 100 czy 1000?',
    hook: 'Czas to wyjątek: tu „wymieniasz” po 60, a nie po 10 czy 100.',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/proste-katy'] = [
  {
    title: 'Punkt, prosta, półprosta, odcinek',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Punkt A; prosta k bez końców; półprosta o początku O; odcinek AB z dwoma końcami">
      <circle cx="40" cy="30" r="5" class="t2"/><text x="54" y="36" class="tx-b">A</text><text x="390" y="36" class="tx-s" text-anchor="end">punkt</text>
      <line x1="16" y1="78" x2="300" y2="78" class="ln sw"/>
      <line x1="2" y1="78" x2="16" y2="78" class="ln dash"/><line x1="300" y1="78" x2="316" y2="78" class="ln dash"/>
      <text x="40" y="70" class="tx-b">k</text><text x="390" y="84" class="tx-s" text-anchor="end">prosta</text>
      <circle cx="40" cy="126" r="5" class="t2"/><text x="40" y="150" class="tx-b" text-anchor="middle">O</text>
      <line x1="40" y1="126" x2="300" y2="126" class="ln sw"/><line x1="300" y1="126" x2="316" y2="126" class="ln dash"/>
      <text x="390" y="132" class="tx-s" text-anchor="end">półprosta</text>
      <circle cx="40" cy="176" r="5" class="t2"/><circle cx="250" cy="176" r="5" class="t2"/>
      <line x1="40" y1="176" x2="250" y2="176" class="ln sw"/>
      <text x="26" y="182" class="tx-b" text-anchor="end">A</text><text x="262" y="182" class="tx-b">B</text>
      <text x="390" y="182" class="tx-s" text-anchor="end">odcinek</text>
    </svg>`,
    text: `<p><b>Punkt</b> to kropka – oznaczamy go wielką literą. <b>Prosta</b> to prosta linia, która nie ma początku ani końca – rysujemy tylko jej kawałek. <b>Półprosta</b> ma początek, ale nie ma końca.</p>
      <p><b>Odcinek</b> ma dwa końce, więc można zmierzyć jego długość. Krawędź ławki czy linia boiska to odcinki.</p>`,
    hook: 'Prosta – jak droga bez końca w obie strony. Półprosta – jak światło latarki: zaczyna się w latarce i leci dalej. Odcinek – jak ołówek: ma dwa końce.',
    check: { q: 'Która figura ma dwa końce?', options: ['prosta', 'półprosta', 'odcinek'], answer: 2, explain: 'Odcinek ma dwa końce. Prosta nie ma żadnego, półprosta – tylko początek.' },
  },
  {
    title: 'Prostopadłe i równoległe',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Na kratce: po lewej dwie proste równoległe k i l, po prawej dwie proste prostopadłe a i b z zaznaczonym kątem prostym">
      <g class="ln-thin"><line x1="10" y1="10" x2="10" y2="160"/><line x1="40" y1="10" x2="40" y2="160"/><line x1="70" y1="10" x2="70" y2="160"/><line x1="100" y1="10" x2="100" y2="160"/><line x1="130" y1="10" x2="130" y2="160"/><line x1="160" y1="10" x2="160" y2="160"/><line x1="190" y1="10" x2="190" y2="160"/><line x1="10" y1="10" x2="190" y2="10"/><line x1="10" y1="40" x2="190" y2="40"/><line x1="10" y1="70" x2="190" y2="70"/><line x1="10" y1="100" x2="190" y2="100"/><line x1="10" y1="130" x2="190" y2="130"/><line x1="10" y1="160" x2="190" y2="160"/></g>
      <g class="ln-thin"><line x1="210" y1="10" x2="210" y2="160"/><line x1="240" y1="10" x2="240" y2="160"/><line x1="270" y1="10" x2="270" y2="160"/><line x1="300" y1="10" x2="300" y2="160"/><line x1="330" y1="10" x2="330" y2="160"/><line x1="360" y1="10" x2="360" y2="160"/><line x1="390" y1="10" x2="390" y2="160"/><line x1="210" y1="10" x2="390" y2="10"/><line x1="210" y1="40" x2="390" y2="40"/><line x1="210" y1="70" x2="390" y2="70"/><line x1="210" y1="100" x2="390" y2="100"/><line x1="210" y1="130" x2="390" y2="130"/><line x1="210" y1="160" x2="390" y2="160"/></g>
      <line x1="10" y1="70" x2="190" y2="70" class="ln s1 sw"/>
      <line x1="10" y1="130" x2="190" y2="130" class="ln s1 sw"/>
      <text x="16" y="62" class="tx-b t1">k</text><text x="16" y="122" class="tx-b t1">l</text>
      <line x1="210" y1="100" x2="390" y2="100" class="ln s2 sw"/>
      <line x1="300" y1="10" x2="300" y2="160" class="ln s3 sw"/>
      <rect x="300" y="82" width="18" height="18" class="ln"/>
      <text x="216" y="92" class="tx-b t2">a</text><text x="284" y="28" class="tx-b t3">b</text>
      <text x="100" y="184" class="tx" text-anchor="middle">k ∥ l – równoległe</text>
      <text x="300" y="184" class="tx" text-anchor="middle">a ⊥ b – prostopadłe</text>
    </svg>`,
    text: `<p><b>Proste równoległe</b> biegną obok siebie i nigdy się nie przetną – jak szyny tramwaju. Zapisujemy: k ∥ l.</p>
      <p><b>Proste prostopadłe</b> przecinają się pod <b>kątem prostym</b> – jak krawędzie w rogu kartki. Zapisujemy: a ⊥ b. Kąt prosty zaznaczamy małym kwadracikiem.</p>
      <p>Na kartce w kratkę łatwo je narysować wzdłuż linii kratek. Bez kratki pomaga ekierka.</p>`,
    hook: 'Znak ∥ to dwie równoległe kreski, a znak ⊥ to dwie kreski prostopadłe – znaki same pokazują, o co chodzi!',
    check: { q: 'Lewa i prawa krawędź kartki z zeszytu leżą na prostych…', options: ['równoległych', 'prostopadłych'], answer: 0, explain: 'Biegną obok siebie i nigdy się nie spotkają – są równoległe.' },
  },
  {
    title: 'Kąt: wierzchołek i ramiona',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Kąt o wierzchołku W i dwóch ramionach – półprostych. Zaznaczony łuk kąta.">
      <path d="M80,150 L150,150 A70,70 0 0 0 137.2,109.6 Z" class="f2 s2"/>
      <line x1="80" y1="150" x2="370" y2="150" class="ln sw"/>
      <line x1="80" y1="150" x2="285" y2="5.5" class="ln sw"/>
      <circle cx="80" cy="150" r="6" class="t2"/>
      <text x="80" y="178" class="tx-b" text-anchor="middle">W</text>
      <text x="96" y="182" class="tx-s">wierzchołek</text>
      <text x="300" y="172" class="tx-s" text-anchor="middle">ramię</text>
      <text x="236" y="60" class="tx-s">ramię</text>
      <text x="168" y="138" class="tx t2">kąt</text>
    </svg>`,
    text: `<p><b>Kąt</b> tworzą dwie półproste, które wychodzą z jednego punktu. Te półproste to <b>ramiona</b> kąta, a ich wspólny początek to <b>wierzchołek</b>.</p>
      <p>Kąty mierzymy w <b>stopniach</b> (°). Im szerzej „otwarte” ramiona, tym większy kąt – długość narysowanych ramion nie ma znaczenia.</p>
      <p>Ramiona dzielą kartkę na dwie części. Mniejsza to <b>kąt wypukły</b>, a większa (więcej niż 180°) – <b>kąt wklęsły</b>.</p>`,
    hook: 'Otwórz nożyczki: ostrza to ramiona, śrubka to wierzchołek. Im szerzej otworzysz, tym większy kąt.',
  },
  {
    title: 'Rodzaje kątów',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Pięć kątów: ostry mniej niż 90 stopni, prosty 90, rozwarty więcej niż 90, półpełny 180, pełny 360">
      <g>
        <path d="M14,90 L50,90 A36,36 0 0 0 41.6,66.9 Z" class="f1 s1"/>
        <line x1="14" y1="90" x2="70" y2="90" class="ln sw"/><line x1="14" y1="90" x2="57" y2="54" class="ln sw"/>
        <rect x="100" y="72" width="18" height="18" class="f3 s3"/>
        <line x1="100" y1="90" x2="150" y2="90" class="ln sw"/><line x1="100" y1="90" x2="100" y2="38" class="ln sw"/>
        <path d="M200,90 L230,90 A30,30 0 0 0 183,65.4 Z" class="f2 s2"/>
        <line x1="200" y1="90" x2="245" y2="90" class="ln sw"/><line x1="200" y1="90" x2="172" y2="50" class="ln sw"/>
        <path d="M262,90 L314,90 A26,26 0 0 0 262,90 Z" class="f4 s4"/>
        <line x1="262" y1="90" x2="314" y2="90" class="ln sw"/><circle cx="288" cy="90" r="4" class="t2"/>
        <circle cx="358" cy="90" r="24" class="f5 s5"/><line x1="358" y1="90" x2="394" y2="90" class="ln sw"/><circle cx="358" cy="90" r="4" class="t2"/>
      </g>
      <text x="40" y="128" class="tx" text-anchor="middle">ostry</text>
      <text x="118" y="128" class="tx" text-anchor="middle">prosty</text>
      <text x="200" y="128" class="tx" text-anchor="middle">rozwarty</text>
      <text x="288" y="128" class="tx" text-anchor="middle">półpełny</text>
      <text x="364" y="128" class="tx" text-anchor="middle">pełny</text>
      <text x="40" y="154" class="tx-s" text-anchor="middle">&lt; 90°</text>
      <text x="118" y="154" class="tx-s" text-anchor="middle">90°</text>
      <text x="200" y="154" class="tx-s" text-anchor="middle">90°–180°</text>
      <text x="288" y="154" class="tx-s" text-anchor="middle">180°</text>
      <text x="364" y="154" class="tx-s" text-anchor="middle">360°</text>
    </svg>`,
    text: `<p>Najważniejszy jest <b>kąt prosty</b> – ma 90°. Znajdziesz go w rogu kartki, książki czy drzwi.</p>
      <p>Kąt mniejszy od prostego to <b>kąt ostry</b>. Większy od prostego, ale mniejszy od 180°, to <b>kąt rozwarty</b>. Gdy ramiona tworzą jedną prostą – <b>kąt półpełny</b> (180°). Pełny obrót to <b>kąt pełny</b> (360°).</p>`,
    remember: 'ostry &lt; 90° · prosty = 90° · rozwarty: między 90° a 180° · półpełny = 180° · pełny = 360°',
    hook: 'Przyłóż róg kartki: kąt się w nim mieści – ostry; pasuje idealnie – prosty; wystaje – rozwarty.',
    check: { q: 'O godzinie 3:00 wskazówki zegara tworzą kąt…', options: ['ostry', 'rozwarty', 'prosty', 'półpełny'], answer: 2, explain: 'Wskazówki na 12 i na 3 – to ćwierć pełnego obrotu, czyli 90°.' },
  },
  {
    title: 'Kątomierz – i pułapka dwóch skal',
    svg: `<svg viewBox="0 0 380 205" role="img" aria-label="Kątomierz przyłożony do kąta 50 stopni. Środek kątomierza w wierzchołku, dolne ramię na zerze zewnętrznej skali. Drugie ramię przy 50 na zewnętrznej i 130 na wewnętrznej skali.">
      <path d="M40,185 A150,150 0 0 1 340,185 Z" class="f4 s4"/><line x1="328" y1="185" x2="340" y2="185" class="ln-thin"/><line x1="333.5" y1="172.4" x2="339.4" y2="171.9" class="ln-thin"/><line x1="325.9" y1="161" x2="337.7" y2="159" class="ln-thin"/><line x1="329.1" y1="147.7" x2="334.9" y2="146.2" class="ln-thin"/><line x1="319.7" y1="137.8" x2="331" y2="133.7" class="ln-thin"/><line x1="320.5" y1="124.1" x2="325.9" y2="121.6" class="ln-thin"/><line x1="309.5" y1="116" x2="319.9" y2="110" class="ln-thin"/><line x1="308" y1="102.4" x2="312.9" y2="99" class="ln-thin"/><line x1="295.7" y1="96.3" x2="304.9" y2="88.6" class="ln-thin"/><line x1="291.8" y1="83.2" x2="296.1" y2="78.9" class="ln-thin"/><line x1="278.7" y1="79.3" x2="286.4" y2="70.1" class="ln-thin"/><line x1="272.6" y1="67" x2="276" y2="62.1" class="ln-thin"/><line x1="259" y1="65.5" x2="265" y2="55.1" class="ln-thin"/><line x1="250.9" y1="54.5" x2="253.4" y2="49.1" class="ln-thin"/><line x1="237.2" y1="55.3" x2="241.3" y2="44" class="ln-thin"/><line x1="227.3" y1="45.9" x2="228.8" y2="40.1" class="ln-thin"/><line x1="214" y1="49.1" x2="216" y2="37.3" class="ln-thin"/><line x1="202.6" y1="41.5" x2="203.1" y2="35.6" class="ln-thin"/><line x1="190" y1="47" x2="190" y2="35" class="ln-thin"/><line x1="177.4" y1="41.5" x2="176.9" y2="35.6" class="ln-thin"/><line x1="166" y1="49.1" x2="164" y2="37.3" class="ln-thin"/><line x1="152.7" y1="45.9" x2="151.2" y2="40.1" class="ln-thin"/><line x1="142.8" y1="55.3" x2="138.7" y2="44" class="ln-thin"/><line x1="129.1" y1="54.5" x2="126.6" y2="49.1" class="ln-thin"/><line x1="121" y1="65.5" x2="115" y2="55.1" class="ln-thin"/><line x1="107.4" y1="67" x2="104" y2="62.1" class="ln-thin"/><line x1="101.3" y1="79.3" x2="93.6" y2="70.1" class="ln-thin"/><line x1="88.2" y1="83.2" x2="83.9" y2="78.9" class="ln-thin"/><line x1="84.3" y1="96.3" x2="75.1" y2="88.6" class="ln-thin"/><line x1="72" y1="102.4" x2="67.1" y2="99" class="ln-thin"/><line x1="70.5" y1="116" x2="60.1" y2="110" class="ln-thin"/><line x1="59.5" y1="124.1" x2="54.1" y2="121.6" class="ln-thin"/><line x1="60.3" y1="137.8" x2="49" y2="133.7" class="ln-thin"/><line x1="50.9" y1="147.7" x2="45.1" y2="146.2" class="ln-thin"/><line x1="54.1" y1="161" x2="42.3" y2="159" class="ln-thin"/><line x1="46.5" y1="172.4" x2="40.6" y2="171.9" class="ln-thin"/><line x1="52" y1="185" x2="40" y2="185" class="ln-thin"/><text x="311.5" y="180.4" class="tx t1" text-anchor="middle">0</text><text x="283.6" y="181.8" class="tx-s" text-anchor="middle">180</text><text x="295.7" y="130" class="tx t1" text-anchor="middle">30</text><text x="271.4" y="143" class="tx-s" text-anchor="middle">150</text><text x="251" y="85.3" class="tx t1" text-anchor="middle">60</text><text x="237" y="108.6" class="tx-s" text-anchor="middle">120</text><text x="190" y="69" class="tx t1" text-anchor="middle">90</text><text x="190" y="96" class="tx-s" text-anchor="middle">90</text><text x="129" y="85.3" class="tx t1" text-anchor="middle">120</text><text x="143" y="108.6" class="tx-s" text-anchor="middle">60</text><text x="84.3" y="130" class="tx t1" text-anchor="middle">150</text><text x="108.6" y="143" class="tx-s" text-anchor="middle">30</text><text x="68.5" y="180.4" class="tx t1" text-anchor="middle">180</text><text x="96.4" y="181.8" class="tx-s" text-anchor="middle">0</text><path d="M190,185 L224,185 A34,34 0 0 0 211.9,159 Z" class="f2 s2"/><line x1="190" y1="185" x2="358" y2="185" class="ln sw"/><line x1="190" y1="185" x2="298" y2="56.3" class="ln sw"/><circle cx="190" cy="185" r="4" class="t2"/>
    </svg>`,
    text: `<p>Jak zmierzyć kąt?</p>
      <ul>
        <li>Środek kątomierza przyłóż do <b>wierzchołka</b>.</li>
        <li>Linię zera ustaw wzdłuż jednego <b>ramienia</b>.</li>
        <li>Odczytaj liczbę przy drugim ramieniu – na tej skali, która przy pierwszym ramieniu pokazuje <b>0</b>.</li>
      </ul>
      <p>Pułapka: kątomierz ma <b>dwie skale</b>. Tu drugie ramię wypada na 50 na jednej skali i na 130 na drugiej (licz kreski co 10° od najbliższej liczby). Kąt jest ostry (mniejszy od prostego), więc ma <b>50°</b>.</p>`,
    remember: 'Zanim odczytasz wynik, oceń na oko: ostry (mniej niż 90°) czy rozwarty (więcej niż 90°)?',
    check: { q: 'Kąt jest wyraźnie rozwarty, a przy jego ramieniu na kątomierzu są liczby 70 i 110. Ile ma kąt?', options: ['70°', '110°', '180°'], answer: 1, explain: 'Kąt rozwarty ma więcej niż 90°, więc właściwa liczba to 110°.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/wielokaty'] = [
  {
    title: 'Wielokąt: boki, wierzchołki, przekątne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pięciokąt ABCDE. Boki narysowane ciągłą linią, dwie przekątne AC i AD przerywaną linią.">
      <polygon points="120,180 280,180 320,85 200,15 80,85" class="f1 s1 sw"/>
      <line x1="120" y1="180" x2="320" y2="85" class="ln s2 dash" stroke-width="3"/>
      <line x1="120" y1="180" x2="200" y2="15" class="ln s2 dash" stroke-width="3"/>
      <text x="112" y="196" class="tx-b" text-anchor="end">A</text>
      <text x="288" y="196" class="tx-b">B</text>
      <text x="328" y="86" class="tx-b">C</text>
      <text x="212" y="16" class="tx-b">D</text>
      <text x="72" y="86" class="tx-b" text-anchor="end">E</text>
      <text x="200" y="198" class="tx-s" text-anchor="middle">bok</text>
      <text x="362" y="132" class="tx-s t2" text-anchor="middle">przekątne</text>
      <text x="362" y="148" class="tx-s t2" text-anchor="middle">AC i AD</text>
    </svg>`,
    text: `<p><b>Wielokąt</b> to figura zamknięta z odcinków. Te odcinki to <b>boki</b>, a punkty, w których się łączą – <b>wierzchołki</b>. Przy każdym wierzchołku jest kąt wielokąta.</p>
      <p><b>Przekątna</b> łączy dwa wierzchołki, które nie są „sąsiadami” – idzie przez środek figury. Z wierzchołka A pięciokąta wychodzą 2 przekątne, a cały pięciokąt ma ich 5. Trójkąt nie ma żadnej.</p>`,
    remember: 'Boków, wierzchołków i kątów jest tyle samo. Przekątna to odcinek między wierzchołkami, który nie jest bokiem.',
    hook: 'Przekątna idzie „na przełaj” – na skróty przez figurę, a nie wzdłuż płotu.',
    check: { q: 'Ile przekątnych ma czworokąt?', options: ['4', '2', '1'], answer: 1, explain: 'Każdy wierzchołek łączymy z przeciwległym – są 2 przekątne.' },
  },
  {
    title: 'Prostokąt i kwadrat',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Prostokąt 5 cm na 3 cm z czterema kątami prostymi i równymi przeciwległymi bokami oraz kwadrat z czterema równymi bokami">
      <rect x="20" y="30" width="200" height="120" class="f3 s3 sw"/>
      <rect x="20" y="30" width="16" height="16" class="ln"/><rect x="204" y="30" width="16" height="16" class="ln"/>
      <rect x="20" y="134" width="16" height="16" class="ln"/><rect x="204" y="134" width="16" height="16" class="ln"/>
      <text x="120" y="22" class="tx" text-anchor="middle">5 cm</text><text x="120" y="172" class="tx" text-anchor="middle">5 cm</text>
      <text x="228" y="96" class="tx">3 cm</text>
      <rect x="280" y="30" width="100" height="100" class="f4 s4 sw"/>
      <g class="ln"><line x1="325" y1="24" x2="335" y2="36"/><line x1="325" y1="124" x2="335" y2="136"/><line x1="274" y1="75" x2="286" y2="85"/><line x1="374" y1="75" x2="386" y2="85"/></g>
      <text x="330" y="160" class="tx" text-anchor="middle">kwadrat</text>
    </svg>`,
    text: `<p><b>Prostokąt</b> ma 4 kąty proste. Jego przeciwległe boki są równe i równoległe. Jego dwie przekątne mają taką samą długość.</p>
      <p><b>Kwadrat</b> też ma 4 kąty proste, ale do tego wszystkie 4 boki są równe (kreseczki na bokach oznaczają równe odcinki).</p>
      <p>Każdy kwadrat jest więc prostokątem. Ale nie każdy prostokąt jest kwadratem – prostokąt 5 cm na 3 cm nie jest.</p>`,
    hook: 'Kwadrat to prostokąt, któremu wszystkie boki wyszły równe.',
  },
  {
    title: 'Koło i okrąg',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej okrąg – sama linia. Po prawej koło o środku S z promieniem r, średnicą d i cięciwą.">
      <circle cx="80" cy="95" r="62" class="ln s1 sw"/>
      <text x="80" y="188" class="tx" text-anchor="middle">okrąg</text>
      <circle cx="270" cy="95" r="80" class="f1 s1 sw"/>
      <line x1="190" y1="95" x2="350" y2="95" class="ln s2 sw"/>
      <line x1="270" y1="95" x2="310" y2="25.7" class="ln s3 sw"/>
      <line x1="208.7" y1="146.4" x2="337.2" y2="138.4" class="ln s5 sw"/>
      <circle cx="270" cy="95" r="4" class="t2"/>
      <text x="262" y="114" class="tx-b" text-anchor="end">S</text>
      <text x="230" y="88" class="tx-b t2" text-anchor="middle">d</text>
      <text x="300" y="66" class="tx-b t3">r</text>
      <text x="272" y="134" class="tx-s t5" text-anchor="middle">cięciwa</text>
      <text x="270" y="194" class="tx" text-anchor="middle">koło</text>
    </svg>`,
    text: `<p><b>Okrąg</b> to sama linia – jak obręcz albo hula-hop. <b>Koło</b> to okrąg razem z tym, co w środku – jak moneta albo talerz.</p>
      <ul>
        <li><b>Promień</b> (r) – odcinek od środka S do okręgu.</li>
        <li><b>Średnica</b> (d) – odcinek przez środek, z jednej strony okręgu na drugą. To dwa promienie: d = 2 · r.</li>
        <li><b>Cięciwa</b> – odcinek łączący dwa punkty okręgu. Najdłuższa cięciwa to średnica.</li>
      </ul>`,
    remember: 'd = 2 · r, a r = d : 2',
    hook: 'Okrąg – obręcz, koło – talerz. Średnica „przechodzi przez środek” – obie nazwy mają w sobie „śr”.',
    check: { q: 'Promień koła ma 4 cm. Ile ma średnica?', options: ['2 cm', '8 cm', '4 cm', '16 cm'], answer: 1, explain: 'Średnica to dwa promienie: 2 · 4 = 8 cm.' },
  },
  {
    title: 'Obwód – spacer dookoła',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Boisko w kształcie prostokąta 40 m na 20 m. Strzałki dookoła. Obwód 40 + 20 + 40 + 20 = 120 m.">
      <defs><marker id="a-k4m-wi-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="60" y="40" width="280" height="100" class="f3 s3 sw"/>
      <line x1="200" y1="40" x2="200" y2="140" class="ln-thin"/><circle cx="200" cy="90" r="22" class="ln-thin"/>
      <path d="M70,30 L330,30" class="ln s2 sw" marker-end="url(#a-k4m-wi-1)"/>
      <path d="M350,50 L350,130" class="ln s2 sw" marker-end="url(#a-k4m-wi-1)"/>
      <path d="M330,150 L70,150" class="ln s2 sw" marker-end="url(#a-k4m-wi-1)"/>
      <path d="M50,130 L50,50" class="ln s2 sw" marker-end="url(#a-k4m-wi-1)"/>
      <text x="200" y="20" class="tx" text-anchor="middle">40 m</text><text x="358" y="95" class="tx">20 m</text>
      <text x="200" y="182" class="tx-b" text-anchor="middle">40 + 20 + 40 + 20 = 120 m</text>
    </svg>`,
    text: `<p><b>Obwód</b> to suma długości wszystkich boków – droga, jaką przejdziesz dookoła figury. Boisko 40 m na 20 m ma obwód 120 m.</p>
      <p>W prostokącie są dwa takie same długie boki i dwa takie same krótkie, więc możesz liczyć: 2 · 40 + 2 · 20 = 120. W kwadracie wszystkie boki są równe: bok 6 cm, obwód 4 · 6 = 24 cm.</p>`,
    remember: 'Obwód = suma wszystkich boków. Prostokąt: 2 · a + 2 · b. Kwadrat: 4 · a.',
    hook: 'Obwód to płot dookoła ogródka – ile metrów siatki trzeba kupić?',
    check: { q: 'Jaki obwód ma kwadrat o boku 6 cm?', options: ['36 cm', '12 cm', '24 cm'], answer: 2, explain: 'Kwadrat ma 4 równe boki: 4 · 6 = 24 cm.' },
  },
  {
    title: 'Pole – i pułapka: pole czy obwód?',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Prostokąt 5 na 3 kratki, każda kratka to 1 centymetr kwadratowy. Pole 15 cm kwadratowych. Obwód zaznaczony grubą linią: 16 cm.">
      <rect x="30" y="20" width="170" height="102" class="f4"/>
      <g class="ln-thin"><line x1="30" y1="20" x2="30" y2="122"/><line x1="64" y1="20" x2="64" y2="122"/><line x1="98" y1="20" x2="98" y2="122"/><line x1="132" y1="20" x2="132" y2="122"/><line x1="166" y1="20" x2="166" y2="122"/><line x1="200" y1="20" x2="200" y2="122"/><line x1="30" y1="20" x2="200" y2="20"/><line x1="30" y1="54" x2="200" y2="54"/><line x1="30" y1="88" x2="200" y2="88"/><line x1="30" y1="122" x2="200" y2="122"/></g>
      <rect x="30" y="20" width="34" height="34" class="f1 s1 sw"/>
      <rect x="30" y="20" width="170" height="102" class="ln s2" stroke-width="4"/>
      <text x="47" y="14" class="tx-s t1" text-anchor="middle">1 cm²</text>
      <text x="115" y="144" class="tx" text-anchor="middle">5 cm</text><text x="208" y="76" class="tx">3 cm</text>
      <text x="234" y="36" class="tx-b">pole</text>
      <text x="234" y="58" class="tx">3 · 5 = 15 cm²</text>
      <text x="234" y="104" class="tx-b t2">obwód</text>
      <text x="234" y="126" class="tx t2">5 + 3 + 5 + 3 = 16 cm</text>
      <text x="200" y="172" class="tx-s" text-anchor="middle">pole – kwadraciki w środku · obwód – linia dookoła</text>
    </svg>`,
    text: `<p><b>Pole</b> mówi, ile miejsca zajmuje figura. Mierzymy je kwadracikami: <b>1 cm²</b> to kwadrat o boku 1 cm. W prostokącie 5 cm na 3 cm mieszczą się 3 rzędy po 5 kwadracików – razem 15 cm².</p>
      <p>Dlatego <b>pole prostokąta = a · b</b>, a <b>pole kwadratu = a · a</b>. Duże powierzchnie, jak podłoga w pokoju, mierzymy w <b>m²</b>: pokój 4 m na 5 m ma 20 m².</p>
      <p>Pułapka: ten sam prostokąt ma pole 15 cm², a obwód 16 cm. To dwie różne rzeczy – i inne jednostki!</p>`,
    remember: 'Pole: a · b (cm², m²). Obwód: suma boków (cm, m).',
    hook: 'Obwód to płot (długość), pole to trawnik w środku (kwadraciki).',
    check: { q: 'Pokój ma 4 m na 5 m. Jakie pole ma podłoga?', options: ['18 m²', '20 m²', '9 m²', '20 m'], answer: 1, explain: 'Pole = 4 · 5 = 20 m². (18 m to obwód pokoju.)' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/ulamki'] = [
  {
    title: 'Ułamek to część całości',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Pizza podzielona na 8 równych kawałków, 3 zamalowane. Ułamek 3/8: licznik 3, kreska ułamkowa, mianownik 8.">
      <path d="M90,95 L90,15 A80,80 0 0 1 146.6,38.4 Z" class="f2 s2"/><path d="M90,95 L146.6,38.4 A80,80 0 0 1 170,95 Z" class="f2 s2"/><path d="M90,95 L170,95 A80,80 0 0 1 146.6,151.6 Z" class="f2 s2"/><path d="M90,95 L146.6,151.6 A80,80 0 0 1 90,175 Z" class="bg ln-thin"/><path d="M90,95 L90,175 A80,80 0 0 1 33.4,151.6 Z" class="bg ln-thin"/><path d="M90,95 L33.4,151.6 A80,80 0 0 1 10,95 Z" class="bg ln-thin"/><path d="M90,95 L10,95 A80,80 0 0 1 33.4,38.4 Z" class="bg ln-thin"/><path d="M90,95 L33.4,38.4 A80,80 0 0 1 90,15 Z" class="bg ln-thin"/><circle cx="90" cy="95" r="80" class="ln"/>
      <text x="230" y="62" class="tx-b t2" text-anchor="middle">3</text>
      <line x1="216" y1="70" x2="244" y2="70" class="ln sw"/>
      <text x="230" y="96" class="tx-b" text-anchor="middle">8</text>
      <text x="256" y="58" class="tx-s">licznik: ile części</text>
      <text x="256" y="78" class="tx-s">kreska ułamkowa</text>
      <text x="256" y="98" class="tx-s">mianownik: na ile</text>
      <text x="256" y="113" class="tx-s">równych części</text>
      <text x="292" y="160" class="tx" text-anchor="middle">„trzy ósme”</text>
    </svg>`,
    text: `<p>Pizzę pokrojono na 8 <b>równych</b> kawałków. Zjadłeś 3. Jaka to część pizzy? <b>3/8</b> – „trzy ósme”.</p>
      <p>Liczba pod kreską to <b>mianownik</b> – mówi, na ile równych części podzielono całość. Liczba nad kreską to <b>licznik</b> – liczy, ile takich części bierzesz. Kreska między nimi to <b>kreska ułamkowa</b>.</p>`,
    hook: 'Mianownik jest na dole jak podłoga – na nim wszystko stoi: na ile części dzielimy. Licznik na górze liczy, ile kawałków bierzesz.',
    check: { q: 'Tort pokrojono na 6 równych kawałków, zjedzono 5. Jaka część tortu została zjedzona?', options: ['6/5', '5/6', '1/6'], answer: 1, explain: 'Całość ma 6 części (mianownik), zjedzono 5 (licznik): 5/6.' },
  },
  {
    title: 'Tylko równe części!',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Dwa paski czekolady. Lewy podzielony na 4 nierówne części – źle. Prawy podzielony na 4 równe części, jedna zamalowana – to 1/4.">
      <rect x="20" y="40" width="40" height="70" class="f2 s2"/>
      <rect x="60" y="40" width="90" height="70" class="bg"/>
      <rect x="150" y="40" width="20" height="70" class="bg"/>
      <rect x="170" y="40" width="10" height="70" class="bg"/>
      <rect x="20" y="40" width="160" height="70" class="ln sw"/>
      <g class="ln"><line x1="60" y1="40" x2="60" y2="110"/><line x1="150" y1="40" x2="150" y2="110"/><line x1="170" y1="40" x2="170" y2="110"/></g>
      <rect x="220" y="40" width="40" height="70" class="f3 s3"/>
      <rect x="260" y="40" width="120" height="70" class="bg"/>
      <rect x="220" y="40" width="160" height="70" class="ln sw"/>
      <g class="ln"><line x1="260" y1="40" x2="260" y2="110"/><line x1="300" y1="40" x2="300" y2="110"/><line x1="340" y1="40" x2="340" y2="110"/></g>
      <text x="100" y="26" class="tx-b t2" text-anchor="middle">✗ to nie jest 1/4</text>
      <text x="300" y="26" class="tx-b t3" text-anchor="middle">✓ to jest 1/4</text>
      <text x="100" y="140" class="tx-s" text-anchor="middle">części są różne</text>
      <text x="300" y="140" class="tx-s" text-anchor="middle">4 równe części</text>
    </svg>`,
    text: `<p>Ułamek ma sens tylko wtedy, gdy całość jest podzielona na <b>równe</b> części. Jeśli kawałki są różne, nie da się powiedzieć, że jeden z nich to ćwierć.</p>
      <p>Najczęstsze ułamki: <b>1/2</b> – jedna druga, czyli połowa; <b>1/4</b> – jedna czwarta, czyli ćwierć; <b>1/3</b> – jedna trzecia; <b>3/4</b> – trzy czwarte.</p>`,
    remember: 'Równe części – to podstawa każdego ułamka.',
    hook: 'Gdy dzielisz pizzę z kolegami po równo, nikt nie protestuje. Tak samo działa ułamek.',
  },
  {
    title: 'Ułamek to dzielenie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy pizze, każda podzielona na 4 części. Każde z 4 dzieci dostaje po jednej ćwiartce z każdej pizzy, razem 3/4 pizzy. 3 : 4 = 3/4.">
      <path d="M65,70 L65,20 A50,50 0 0 1 115,70 Z" class="f2 s2"/><path d="M65,70 L115,70 A50,50 0 0 1 65,120 Z" class="bg ln-thin"/><path d="M65,70 L65,120 A50,50 0 0 1 15,70 Z" class="bg ln-thin"/><path d="M65,70 L15,70 A50,50 0 0 1 65,20 Z" class="bg ln-thin"/><circle cx="65" cy="70" r="50" class="ln"/>
      <path d="M195,70 L195,20 A50,50 0 0 1 245,70 Z" class="f2 s2"/><path d="M195,70 L245,70 A50,50 0 0 1 195,120 Z" class="bg ln-thin"/><path d="M195,70 L195,120 A50,50 0 0 1 145,70 Z" class="bg ln-thin"/><path d="M195,70 L145,70 A50,50 0 0 1 195,20 Z" class="bg ln-thin"/><circle cx="195" cy="70" r="50" class="ln"/>
      <path d="M325,70 L325,20 A50,50 0 0 1 375,70 Z" class="f2 s2"/><path d="M325,70 L375,70 A50,50 0 0 1 325,120 Z" class="bg ln-thin"/><path d="M325,70 L325,120 A50,50 0 0 1 275,70 Z" class="bg ln-thin"/><path d="M325,70 L275,70 A50,50 0 0 1 325,20 Z" class="bg ln-thin"/><circle cx="325" cy="70" r="50" class="ln"/>
      <text x="200" y="150" class="tx-b" text-anchor="middle">3 pizze : 4 osoby =</text>
      <text x="330" y="142" class="tx-b" text-anchor="middle">3</text><line x1="317" y1="149" x2="343" y2="149" class="ln"/><text x="330" y="169" class="tx-b" text-anchor="middle">4</text>
      <text x="200" y="182" class="tx-s" text-anchor="middle">każdy dostaje po ćwiartce z każdej pizzy</text>
    </svg>`,
    text: `<p>Kreska ułamkowa zastępuje znak dzielenia: <b>3/4 = 3 : 4</b>. Trzy pizze dzielone po równo na 4 osoby – każda dostaje po ćwiartce z każdej pizzy, czyli 3/4 pizzy.</p>
      <p>Czasem z dzielenia wychodzi liczba naturalna: 8/4 = 8 : 4 = 2, a 4/4 = 1 – cała pizza.</p>`,
    hook: 'Dwie kropki znaku „:” zamieniły się w kreskę – liczba przed nią poszła na górę, liczba za nią na dół.',
    check: { q: 'Ile to jest 10/5?', options: ['5', '50', '2', '15'], answer: 2, explain: '10/5 = 10 : 5 = 2.' },
  },
  {
    title: 'Więcej niż całość: liczby mieszane',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dwie pizze podzielone na ćwiartki. Pierwsza cała zamalowana – 4/4, druga 3 ćwiartki. Razem 7/4 = 1 i 3/4.">
      <path d="M70,75 L70,20 A55,55 0 0 1 125,75 Z" class="f3 s3"/><path d="M70,75 L125,75 A55,55 0 0 1 70,130 Z" class="f3 s3"/><path d="M70,75 L70,130 A55,55 0 0 1 15,75 Z" class="f3 s3"/><path d="M70,75 L15,75 A55,55 0 0 1 70,20 Z" class="f3 s3"/><circle cx="70" cy="75" r="55" class="ln"/>
      <path d="M200,75 L200,20 A55,55 0 0 1 255,75 Z" class="f3 s3"/><path d="M200,75 L255,75 A55,55 0 0 1 200,130 Z" class="f3 s3"/><path d="M200,75 L200,130 A55,55 0 0 1 145,75 Z" class="f3 s3"/><path d="M200,75 L145,75 A55,55 0 0 1 200,20 Z" class="bg ln-thin"/><circle cx="200" cy="75" r="55" class="ln"/>
      <text x="70" y="156" class="tx-s" text-anchor="middle">4/4 = 1 cała</text>
      <text x="200" y="156" class="tx-s" text-anchor="middle">3/4</text>
      <text x="290" y="66" class="tx-b" text-anchor="middle">7</text><line x1="277" y1="73" x2="303" y2="73" class="ln"/><text x="290" y="93" class="tx-b" text-anchor="middle">4</text>
      <text x="316" y="80" class="tx-b">=</text>
      <text x="344" y="88" class="tx-b" text-anchor="middle">1</text>
      <text x="370" y="66" class="tx-b" text-anchor="middle">3</text><line x1="357" y1="73" x2="383" y2="73" class="ln"/><text x="370" y="93" class="tx-b" text-anchor="middle">4</text>
      <text x="330" y="150" class="tx-s" text-anchor="middle">7 : 4 = 1 reszty 3</text>
    </svg>`,
    text: `<p><b>Ułamek właściwy</b> ma licznik mniejszy od mianownika – to mniej niż całość (np. 3/4). <b>Ułamek niewłaściwy</b> ma licznik równy mianownikowi albo większy – to całość albo więcej (np. 7/4).</p>
      <p>7/4 to 7 ćwiartek: 4 ćwiartki składają się na 1 całą pizzę i zostają 3 ćwiartki. Zapisujemy to jako <b>liczbę mieszaną</b> 1 3/4 („jeden i trzy czwarte”). Policzysz to dzieleniem z resztą: 7 : 4 = 1 reszty 3.</p>
      <p>Odwrotnie: 2 1/3 = ? Dwie całe to 2 · 3 = 6 trzecich, plus 1 – razem 7/3.</p>`,
    remember: 'Ułamek niewłaściwy → liczba mieszana: dziel z resztą. Liczba mieszana → ułamek: całości · mianownik + licznik.',
    check: { q: 'Zamień 11/4 na liczbę mieszaną.', options: ['2 1/4', '4 3/4', '2 3/4'], answer: 2, explain: '11 : 4 = 2 reszty 3, więc 11/4 = 2 3/4.' },
  },
  {
    title: 'Porównywanie i ułamek liczby – pułapki',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwa paski tej samej długości: jeden podzielony na 3 części, drugi na 5. Jedna trzecia jest dłuższa niż jedna piąta. Poniżej 12 kropek podzielonych na 4 grupy po 3: jedna czwarta z 12 to 3.">
      <rect x="60" y="14" width="100" height="30" class="f1 s1 sw"/>
      <rect x="60" y="14" width="300" height="30" class="ln"/>
      <g class="ln"><line x1="160" y1="14" x2="160" y2="44"/><line x1="260" y1="14" x2="260" y2="44"/></g>
      <rect x="60" y="56" width="60" height="30" class="f2 s2 sw"/>
      <rect x="60" y="56" width="300" height="30" class="ln"/>
      <g class="ln"><line x1="120" y1="56" x2="120" y2="86"/><line x1="180" y1="56" x2="180" y2="86"/><line x1="240" y1="56" x2="240" y2="86"/><line x1="300" y1="56" x2="300" y2="86"/></g>
      <text x="50" y="35" class="tx-b t1" text-anchor="end">1/3</text>
      <text x="50" y="77" class="tx-b t2" text-anchor="end">1/5</text>
      <text x="200" y="110" class="tx" text-anchor="middle">1/3 &gt; 1/5</text>
      <rect x="20" y="128" width="84" height="34" rx="10" class="f3 s3"/><rect x="116" y="128" width="84" height="34" rx="10" class="ln-thin"/>
      <rect x="212" y="128" width="84" height="34" rx="10" class="ln-thin"/><rect x="308" y="128" width="84" height="34" rx="10" class="ln-thin"/>
      <circle cx="38" cy="145" r="7" class="f1 s1"/><circle cx="62" cy="145" r="7" class="f1 s1"/><circle cx="86" cy="145" r="7" class="f1 s1"/><circle cx="134" cy="145" r="7" class="f1 s1"/><circle cx="158" cy="145" r="7" class="f1 s1"/><circle cx="182" cy="145" r="7" class="f1 s1"/><circle cx="230" cy="145" r="7" class="f1 s1"/><circle cx="254" cy="145" r="7" class="f1 s1"/><circle cx="278" cy="145" r="7" class="f1 s1"/><circle cx="326" cy="145" r="7" class="f1 s1"/><circle cx="350" cy="145" r="7" class="f1 s1"/><circle cx="374" cy="145" r="7" class="f1 s1"/>
      <text x="200" y="196" class="tx" text-anchor="middle">1/4 z 12 = 12 : 4 = 3</text>
      <text x="200" y="216" class="tx-s" text-anchor="middle">3/4 z 12 = 3 · 3 = 9</text>
    </svg>`,
    text: `<p><b>Te same mianowniki</b>: większy jest ułamek z większym licznikiem – 5/8 &gt; 3/8 (więcej takich samych kawałków).</p>
      <p><b>Te same liczniki</b>: większy jest ułamek z <b>mniejszym</b> mianownikiem – 1/3 &gt; 1/5. Pułapka: 5 jest większe od 3, ale piąta część jest mniejsza od trzeciej!</p>
      <p><b>Ułamek liczby</b>: 1/4 z 12 to 12 : 4 = 3. A 3/4 z 12 to trzy takie części: 3 · 3 = 9.</p>`,
    remember: 'Ten sam mianownik – porównaj liczniki. Ten sam licznik – mniejszy mianownik daje większy ułamek.',
    hook: 'Im więcej gości przy pizzy, tym mniejszy kawałek dla każdego.',
    check: { q: 'Co jest więcej: 1/6 czy 1/4 tej samej czekolady?', options: ['1/6', '1/4', 'tyle samo'], answer: 1, explain: 'Liczniki są równe. Ćwiartki są większe niż szóste części, więc 1/4 > 1/6.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/dane'] = [
  {
    title: 'Tabela – porządek w danych',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela cennik sklepiku szkolnego: drożdżówka 3 zł, sok 2 zł, jabłko 1 zł, kanapka 5 zł. Zaznaczony wiersz i kolumna.">
      <rect x="40" y="10" width="240" height="180" class="bg ln"/>
      <rect x="40" y="10" width="240" height="36" class="f1 s1"/>
      <rect x="40" y="118" width="240" height="36" class="f4"/>
      <rect x="180" y="10" width="100" height="180" class="ln s2" stroke-width="3"/>
      <line x1="180" y1="10" x2="180" y2="190" class="ln"/>
      <line x1="40" y1="46" x2="280" y2="46" class="ln"/><line x1="40" y1="82" x2="280" y2="82" class="ln-thin"/>
      <line x1="40" y1="118" x2="280" y2="118" class="ln-thin"/><line x1="40" y1="154" x2="280" y2="154" class="ln-thin"/>
      <text x="110" y="34" class="tx-b" text-anchor="middle">Towar</text><text x="230" y="34" class="tx-b" text-anchor="middle">Cena</text>
      <text x="56" y="70" class="tx">drożdżówka</text><text x="230" y="70" class="tx" text-anchor="middle">3 zł</text>
      <text x="56" y="106" class="tx">sok</text><text x="230" y="106" class="tx" text-anchor="middle">2 zł</text>
      <text x="56" y="142" class="tx">jabłko</text><text x="230" y="142" class="tx" text-anchor="middle">1 zł</text>
      <text x="56" y="178" class="tx">kanapka</text><text x="230" y="178" class="tx" text-anchor="middle">5 zł</text>
      <text x="292" y="142" class="tx-s">← wiersz</text>
      <text x="292" y="34" class="tx-s t2">↓ kolumna</text>
    </svg>`,
    text: `<p>Tabela porządkuje dane. Ma <b>wiersze</b> (poziomo) i <b>kolumny</b> (pionowo). Górny wiersz to nagłówki – mówią, co jest w każdej kolumnie.</p>
      <p>Chcesz znać cenę jabłka? Znajdź wiersz „jabłko” i idź w prawo do kolumny „Cena” – 1 zł. Z tabeli od razu widać też, że najdroższa jest kanapka.</p>`,
    hook: 'Jak w grze w statki: wiersz i kolumna wskazują jedno pole.',
    check: { q: 'Ile zapłacisz za kanapkę i sok?', options: ['5 zł', '7 zł', '8 zł'], answer: 1, explain: 'Kanapka 5 zł + sok 2 zł = 7 zł.' },
  },
  {
    title: 'Badanie: pytasz i zliczasz kreskami',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela zliczania: jabłko 8 kresek, banan 5, truskawka 6, gruszka 3. Piąta kreska przekreśla cztery.">
      <rect x="10" y="10" width="380" height="180" class="bg ln"/>
      <rect x="10" y="10" width="380" height="36" class="f1 s1"/>
      <line x1="140" y1="10" x2="140" y2="190" class="ln"/><line x1="320" y1="10" x2="320" y2="190" class="ln"/>
      <line x1="10" y1="46" x2="390" y2="46" class="ln"/><line x1="10" y1="82" x2="390" y2="82" class="ln-thin"/>
      <line x1="10" y1="118" x2="390" y2="118" class="ln-thin"/><line x1="10" y1="154" x2="390" y2="154" class="ln-thin"/>
      <text x="75" y="34" class="tx-b" text-anchor="middle">Owoc</text><text x="230" y="34" class="tx-b" text-anchor="middle">Kreski</text><text x="355" y="34" class="tx-b" text-anchor="middle">Ile</text>
      <text x="24" y="70" class="tx">jabłko</text><g class="ln"><line x1="160" y1="54" x2="160" y2="74"/><line x1="167" y1="54" x2="167" y2="74"/><line x1="174" y1="54" x2="174" y2="74"/><line x1="181" y1="54" x2="181" y2="74"/><line x1="156" y1="70" x2="185" y2="58"/><line x1="200" y1="54" x2="200" y2="74"/><line x1="207" y1="54" x2="207" y2="74"/><line x1="214" y1="54" x2="214" y2="74"/></g><text x="355" y="70" class="tx-b" text-anchor="middle">8</text>
      <text x="24" y="106" class="tx">banan</text><g class="ln"><line x1="160" y1="90" x2="160" y2="110"/><line x1="167" y1="90" x2="167" y2="110"/><line x1="174" y1="90" x2="174" y2="110"/><line x1="181" y1="90" x2="181" y2="110"/><line x1="156" y1="106" x2="185" y2="94"/></g><text x="355" y="106" class="tx-b" text-anchor="middle">5</text>
      <text x="24" y="142" class="tx">truskawka</text><g class="ln"><line x1="160" y1="126" x2="160" y2="146"/><line x1="167" y1="126" x2="167" y2="146"/><line x1="174" y1="126" x2="174" y2="146"/><line x1="181" y1="126" x2="181" y2="146"/><line x1="156" y1="142" x2="185" y2="130"/><line x1="200" y1="126" x2="200" y2="146"/></g><text x="355" y="142" class="tx-b" text-anchor="middle">6</text>
      <text x="24" y="178" class="tx">gruszka</text><g class="ln"><line x1="160" y1="162" x2="160" y2="182"/><line x1="167" y1="162" x2="167" y2="182"/><line x1="174" y1="162" x2="174" y2="182"/></g><text x="355" y="178" class="tx-b" text-anchor="middle">3</text>
    </svg>`,
    text: `<p>Chcesz wiedzieć, jaki owoc najbardziej lubi twoja klasa? Przeprowadź <b>badanie</b>:</p>
      <ul>
        <li>ułóż pytanie: „Jaki jest twój ulubiony owoc?”,</li>
        <li>zbieraj odpowiedzi i stawiaj kreski – piąta kreska przekreśla cztery poprzednie,</li>
        <li>policz kreski i wpisz liczby do tabeli.</li>
      </ul>`,
    remember: 'Kroki badania: pytanie → zbieranie danych → tabela → diagram → wniosek.',
    hook: 'Przekreślona czwórka to „płotek” – zawsze 5. Licz płotkami: 5, 10, 15…',
    check: { q: 'Ile to: dwa płotki (po 5) i 2 kreski?', options: ['7', '22', '12'], answer: 2, explain: '5 + 5 + 2 = 12.' },
  },
  {
    title: 'Diagram słupkowy',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Diagram słupkowy ulubionych owoców: jabłko 8, banan 5, truskawka 6, gruszka 3. Skala co 2.">
      <text x="215" y="18" class="tx-b" text-anchor="middle">Ulubiony owoc w naszej klasie</text>
      <g class="ln-thin">
        <line x1="50" y1="164" x2="390" y2="164"/><line x1="50" y1="136" x2="390" y2="136"/><line x1="50" y1="108" x2="390" y2="108"/>
        <line x1="50" y1="80" x2="390" y2="80"/><line x1="50" y1="52" x2="390" y2="52"/>
      </g>
      <text x="40" y="197" class="tx-s" text-anchor="end">0</text><text x="40" y="169" class="tx-s" text-anchor="end">2</text>
      <text x="40" y="141" class="tx-s" text-anchor="end">4</text><text x="40" y="113" class="tx-s" text-anchor="end">6</text>
      <text x="40" y="85" class="tx-s" text-anchor="end">8</text><text x="40" y="57" class="tx-s" text-anchor="end">10</text>
      <rect x="70" y="80" width="50" height="112" class="f3 s3 sw"/>
      <rect x="150" y="122" width="50" height="70" class="f4 s4 sw"/>
      <rect x="230" y="108" width="50" height="84" class="f2 s2 sw"/>
      <rect x="310" y="150" width="50" height="42" class="f1 s1 sw"/>
      <line x1="50" y1="192" x2="390" y2="192" class="ln"/><line x1="50" y1="40" x2="50" y2="192" class="ln"/>
      <text x="95" y="212" class="tx-s" text-anchor="middle">jabłko</text>
      <text x="175" y="212" class="tx-s" text-anchor="middle">banan</text>
      <text x="255" y="212" class="tx-s" text-anchor="middle">truskawka</text>
      <text x="335" y="212" class="tx-s" text-anchor="middle">gruszka</text>
    </svg>`,
    text: `<p>Z tabeli rysujemy <b>diagram słupkowy</b>. Każdy słupek to jeden owoc, a jego wysokość mówi, ile osób go wybrało. Od razu widać, kto wygrał!</p>
      <p>Zanim odczytasz wartość, sprawdź <b>skalę</b> na osi pionowej. Tu kreski są co 2, więc słupek, który kończy się w połowie między 4 a 6, oznacza 5.</p>`,
    remember: 'Najpierw skala osi, potem wysokość słupka.',
    check: { q: 'O ile osób więcej wybrało jabłko niż gruszkę?', options: ['o 11', 'o 5', 'o 3'], answer: 1, explain: 'Jabłko – 8, gruszka – 3. 8 − 3 = 5.' },
  },
  {
    title: 'Piktogram – obrazek za kilka sztuk',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Piktogram przeczytanych książek. Jeden obrazek to 2 książki. Maja 4 obrazki, Igor 2 i pół obrazka, Lena 3 obrazki.">
      <text x="14" y="42" class="tx-b">Maja</text>
      <rect x="80" y="20" width="26" height="30" rx="3" class="f5 s5"/><rect x="114" y="20" width="26" height="30" rx="3" class="f5 s5"/>
      <rect x="148" y="20" width="26" height="30" rx="3" class="f5 s5"/><rect x="182" y="20" width="26" height="30" rx="3" class="f5 s5"/>
      <text x="370" y="42" class="tx t5" text-anchor="end">8</text>
      <text x="14" y="87" class="tx-b">Igor</text>
      <rect x="80" y="65" width="26" height="30" rx="3" class="f5 s5"/><rect x="114" y="65" width="26" height="30" rx="3" class="f5 s5"/>
      <rect x="148" y="65" width="13" height="30" class="f5 s5"/>
      <text x="370" y="87" class="tx t5" text-anchor="end">5</text>
      <text x="14" y="132" class="tx-b">Lena</text>
      <rect x="80" y="110" width="26" height="30" rx="3" class="f5 s5"/><rect x="114" y="110" width="26" height="30" rx="3" class="f5 s5"/>
      <rect x="148" y="110" width="26" height="30" rx="3" class="f5 s5"/>
      <text x="370" y="132" class="tx t5" text-anchor="end">6</text>
      <line x1="14" y1="152" x2="386" y2="152" class="ln-thin"/>
      <rect x="80" y="160" width="18" height="22" rx="3" class="f5 s5"/>
      <text x="106" y="177" class="tx">= 2 książki (legenda)</text>
    </svg>`,
    text: `<p><b>Piktogram</b> to diagram z obrazków. Ale uwaga: jeden obrazek nie zawsze oznacza jedną rzecz! Ile znaczy, mówi <b>legenda</b>.</p>
      <p>Tu jeden obrazek to 2 książki. Maja ma 4 obrazki: 4 · 2 = 8 książek. Igor ma 2 i pół obrazka: 2 · 2 = 4 i jeszcze połowa z 2, czyli 1 – razem 5.</p>`,
    remember: 'Najpierw przeczytaj legendę. Pół obrazka = połowa liczby z legendy.',
    hook: 'Legenda to „klucz” do piktogramu – bez niej obrazki nic nie znaczą.',
    check: { q: 'Jeden obrazek oznacza 2 książki. Ile książek to 3 i pół obrazka?', options: ['6', '7', '8', '3'], answer: 1, explain: '3 · 2 = 6 i pół obrazka to 1. Razem 7.' },
  },
  {
    title: 'Paragon i wnioski – pułapki',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Paragon: zeszyt 2 sztuki po 4 zł, razem 8 zł; kredki 1 sztuka po 12 zł; gumka 3 sztuki po 1 zł, razem 3 zł. Suma 23 zł.">
      <rect x="60" y="6" width="280" height="198" rx="6" class="bg ln"/>
      <text x="200" y="32" class="tx-b" text-anchor="middle">PARAGON</text>
      <line x1="76" y1="44" x2="324" y2="44" class="ln-thin dash"/>
      <text x="76" y="70" class="tx">zeszyt</text><text x="220" y="70" class="tx" text-anchor="middle">2 × 4 zł</text><text x="324" y="70" class="tx" text-anchor="end">8 zł</text>
      <text x="76" y="100" class="tx">kredki</text><text x="220" y="100" class="tx" text-anchor="middle">1 × 12 zł</text><text x="324" y="100" class="tx" text-anchor="end">12 zł</text>
      <text x="76" y="130" class="tx">gumka</text><text x="220" y="130" class="tx" text-anchor="middle">3 × 1 zł</text><text x="324" y="130" class="tx" text-anchor="end">3 zł</text>
      <line x1="76" y1="148" x2="324" y2="148" class="ln-thin dash"/>
      <text x="76" y="178" class="tx-b">SUMA</text><text x="324" y="178" class="tx-b" text-anchor="end">23 zł</text>
    </svg>`,
    text: `<p>Na <b>paragonie</b> jest: co kupiłeś, ile sztuk, cena za sztukę, ile kosztowało razem i <b>suma</b> na dole. „2 × 4 zł” to 2 zeszyty po 4 zł – razem 8 zł. Sprawdź: 8 + 12 + 3 = 23 zł.</p>
      <p>Pułapki przy danych:</p>
      <ul>
        <li>Na diagramie zawsze sprawdź skalę, a w piktogramie – legendę.</li>
        <li>Na paragonie nie myl ceny za sztukę z ceną za wszystkie sztuki.</li>
        <li>Wniosek dotyczy tylko tych, których zapytałeś. Ankieta w twojej klasie nie mówi, co lubią wszystkie dzieci w Polsce.</li>
      </ul>`,
    remember: 'Skala, legenda, cena za sztukę – sprawdź, zanim policzysz.',
    check: { q: 'Płacisz za te zakupy 30 zł. Ile dostaniesz reszty?', options: ['17 zł', '23 zł', '7 zł'], answer: 2, explain: '30 zł − 23 zł = 7 zł.' },
  },
];
