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

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/dzielniki'] = [
  {
    title: 'Dzielnik – liczba, która „mieści się” bez reszty',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwanaście kropek ułożonych na trzy sposoby: 1 rząd po 12, 2 rzędy po 6 i 3 rzędy po 4. Dzielniki 12 to 1, 2, 3, 4, 6, 12.">
      <g class="f1 s1">
        <circle cx="20" cy="26" r="7"/><circle cx="40" cy="26" r="7"/><circle cx="60" cy="26" r="7"/><circle cx="80" cy="26" r="7"/><circle cx="100" cy="26" r="7"/><circle cx="120" cy="26" r="7"/><circle cx="140" cy="26" r="7"/><circle cx="160" cy="26" r="7"/><circle cx="180" cy="26" r="7"/><circle cx="200" cy="26" r="7"/><circle cx="220" cy="26" r="7"/><circle cx="240" cy="26" r="7"/>
      </g>
      <g class="f2 s2">
        <circle cx="20" cy="66" r="7"/><circle cx="40" cy="66" r="7"/><circle cx="60" cy="66" r="7"/><circle cx="80" cy="66" r="7"/><circle cx="100" cy="66" r="7"/><circle cx="120" cy="66" r="7"/>
        <circle cx="20" cy="86" r="7"/><circle cx="40" cy="86" r="7"/><circle cx="60" cy="86" r="7"/><circle cx="80" cy="86" r="7"/><circle cx="100" cy="86" r="7"/><circle cx="120" cy="86" r="7"/>
      </g>
      <g class="f3 s3">
        <circle cx="20" cy="122" r="7"/><circle cx="40" cy="122" r="7"/><circle cx="60" cy="122" r="7"/><circle cx="80" cy="122" r="7"/>
        <circle cx="20" cy="142" r="7"/><circle cx="40" cy="142" r="7"/><circle cx="60" cy="142" r="7"/><circle cx="80" cy="142" r="7"/>
        <circle cx="20" cy="162" r="7"/><circle cx="40" cy="162" r="7"/><circle cx="60" cy="162" r="7"/><circle cx="80" cy="162" r="7"/>
      </g>
      <text x="280" y="32" class="tx-b t1">1 · 12</text>
      <text x="280" y="82" class="tx-b t2">2 · 6</text>
      <text x="280" y="148" class="tx-b t3">3 · 4</text>
      <text x="200" y="206" class="tx-b" text-anchor="middle">dzielniki 12: 1, 2, 3, 4, 6, 12</text>
    </svg>`,
    text: `<p>12 kropek da się ułożyć w równe rzędy na kilka sposobów: 1 rząd po 12, 2 rzędy po 6, 3 rzędy po 4. Liczby 1, 2, 3, 4, 6, 12 to <b>dzielniki</b> liczby 12 – dzieli się przez nie bez reszty.</p>
      <p>A 5? 12 kropek w rzędach po 5 nie wyjdzie – zostaną 2. Więc 5 nie jest dzielnikiem 12.</p>`,
    remember: 'Dzielniki szukaj parami: 1 · 12, 2 · 6, 3 · 4. Każda liczba dzieli się przez 1 i przez samą siebie.',
    hook: 'Dzielnik to „równy podział bez okruszków” – nic nie zostaje.',
    check: { q: 'Która liczba jest dzielnikiem 20?', options: ['3', '4', '6'], answer: 1, explain: '20 : 4 = 5 bez reszty. Przy dzieleniu 20 przez 3 i przez 6 zostaje reszta 2.' },
  },
  {
    title: 'Wielokrotności – skaczesz po osi',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Oś liczbowa od 0 do 30. Skoki co 6: 6, 12, 18, 24, 30 – to wielokrotności liczby 6.">
      <defs><marker id="a-k4m-dzl-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="14" y1="90" x2="392" y2="90" class="ln"/>
      <g class="ln"><line x1="20" y1="82" x2="20" y2="98"/><line x1="92" y1="82" x2="92" y2="98"/><line x1="164" y1="82" x2="164" y2="98"/><line x1="236" y1="82" x2="236" y2="98"/><line x1="308" y1="82" x2="308" y2="98"/><line x1="380" y1="82" x2="380" y2="98"/></g>
      <g class="ln s2">
        <path d="M22,84 C40,46 72,46 90,84" marker-end="url(#a-k4m-dzl-1)"/><path d="M94,84 C112,46 144,46 162,84" marker-end="url(#a-k4m-dzl-1)"/><path d="M166,84 C184,46 216,46 234,84" marker-end="url(#a-k4m-dzl-1)"/><path d="M238,84 C256,46 288,46 306,84" marker-end="url(#a-k4m-dzl-1)"/><path d="M310,84 C328,46 360,46 378,84" marker-end="url(#a-k4m-dzl-1)"/>
      </g>
      <g class="tx-s t2" text-anchor="middle"><text x="56" y="40">+6</text><text x="128" y="40">+6</text><text x="200" y="40">+6</text><text x="272" y="40">+6</text><text x="344" y="40">+6</text></g>
      <g class="tx-b" text-anchor="middle"><text x="20" y="120">0</text><text x="92" y="120">6</text><text x="164" y="120">12</text><text x="236" y="120">18</text><text x="308" y="120">24</text><text x="380" y="120">30</text></g>
      <text x="200" y="144" class="tx-s" text-anchor="middle">wielokrotności 6: 6, 12, 18, 24, 30, …</text>
    </svg>`,
    text: `<p><b>Wielokrotności</b> liczby 6 to wyniki mnożenia: 6 · 1, 6 · 2, 6 · 3… Na osi to kolejne skoki o 6.</p>
      <p>Wielokrotności nigdy się nie kończą – zawsze możesz skoczyć dalej. 12 jest wielokrotnością 6, a 6 jest dzielnikiem 12 – to dwie strony tego samego.</p>`,
    remember: 'Dzielników jest zawsze kilka, a wielokrotności – nieskończenie wiele.',
    hook: 'Wielokrotność = „wiele razy” ta sama liczba: 6, 6 + 6, 6 + 6 + 6…',
    check: { q: 'Która liczba jest wielokrotnością 8?', options: ['28', '32', '36'], answer: 1, explain: '8 · 4 = 32. 28 i 36 przy dzieleniu przez 8 dają resztę 4.' },
  },
  {
    title: 'Cechy podzielności – sprawdzasz bez dzielenia',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dwie karty. Patrz na koniec: przez 2 – ostatnia cyfra 0, 2, 4, 6, 8; przez 5 – 0 lub 5; przez 10 – 0; przez 4 – dwie ostatnie cyfry. Dodaj cyfry: przez 3 i 9 – suma cyfr; 4 518: 4+5+1+8 = 18, dzieli się przez 9 i przez 3.">
      <rect x="8" y="8" width="188" height="204" rx="12" class="f1 s1"/>
      <rect x="204" y="8" width="188" height="204" rx="12" class="f3 s3"/>
      <text x="102" y="34" class="tx-b" text-anchor="middle">patrz na koniec</text>
      <text x="22" y="70" class="tx">2 → 0, 2, 4, 6, 8</text>
      <text x="22" y="100" class="tx">5 → 0 lub 5</text>
      <text x="22" y="130" class="tx">10 → 0</text>
      <text x="22" y="160" class="tx">4 → dwie ostatnie</text>
      <text x="22" y="192" class="tx-s">13<tspan class="t2">16</tspan>: 16 : 4 = 4 ✓</text>
      <text x="298" y="34" class="tx-b" text-anchor="middle">dodaj cyfry</text>
      <text x="298" y="70" class="tx" text-anchor="middle">3 i 9 → suma cyfr</text>
      <text x="298" y="112" class="tx-b" text-anchor="middle">4 518</text>
      <text x="298" y="146" class="tx" text-anchor="middle">4 + 5 + 1 + 8 = 18</text>
      <text x="298" y="180" class="tx t3" text-anchor="middle">18 : 9 ✓  18 : 3 ✓</text>
    </svg>`,
    text: `<p>Przy 2, 5 i 10 wystarczy spojrzeć na <b>ostatnią cyfrę</b>. Przy 4 – na liczbę z <b>dwóch ostatnich</b> cyfr.</p>
      <p>Przy 3 i 9 <b>dodajesz wszystkie cyfry</b>. Jeśli suma dzieli się przez 3 – cała liczba też. Jeśli suma dzieli się przez 9 – cała liczba też.</p>`,
    remember: '2, 5, 10 – ostatnia cyfra · 4 – dwie ostatnie cyfry · 3 i 9 – suma cyfr.',
    hook: 'Dwójka, piątka i dziesiątka patrzą tylko na ogon liczby. Trójka i dziewiątka są dokładne – liczą wszystkie cyfry.',
    check: { q: 'Czy 2 034 dzieli się przez 3?', options: ['tak, bo suma cyfr to 9', 'nie, bo kończy się cyfrą 4', 'nie, bo jest parzysta'], answer: 0, explain: '2 + 0 + 3 + 4 = 9, a 9 dzieli się przez 3. Ostatnia cyfra nie ma tu znaczenia.' },
  },
  {
    title: 'Liczby pierwsze – tylko dwa dzielniki',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Liczby od 1 do 30 w trzech rzędach. Na zielono liczby pierwsze: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Liczba 1 jest szara – ani pierwsza, ani złożona.">
      <g class="ln-thin">
        <rect x="21" y="10" width="34" height="34" rx="5"/><rect x="129" y="10" width="34" height="34" rx="5"/><rect x="201" y="10" width="34" height="34" rx="5"/><rect x="273" y="10" width="34" height="34" rx="5"/><rect x="309" y="10" width="34" height="34" rx="5"/><rect x="345" y="10" width="34" height="34" rx="5"/>
        <rect x="57" y="50" width="34" height="34" rx="5"/><rect x="129" y="50" width="34" height="34" rx="5"/><rect x="165" y="50" width="34" height="34" rx="5"/><rect x="201" y="50" width="34" height="34" rx="5"/><rect x="273" y="50" width="34" height="34" rx="5"/><rect x="345" y="50" width="34" height="34" rx="5"/>
        <rect x="21" y="90" width="34" height="34" rx="5"/><rect x="57" y="90" width="34" height="34" rx="5"/><rect x="129" y="90" width="34" height="34" rx="5"/><rect x="165" y="90" width="34" height="34" rx="5"/><rect x="201" y="90" width="34" height="34" rx="5"/><rect x="237" y="90" width="34" height="34" rx="5"/><rect x="273" y="90" width="34" height="34" rx="5"/><rect x="345" y="90" width="34" height="34" rx="5"/>
      </g>
      <g class="f3 s3">
        <rect x="57" y="10" width="34" height="34" rx="5"/><rect x="93" y="10" width="34" height="34" rx="5"/><rect x="165" y="10" width="34" height="34" rx="5"/><rect x="237" y="10" width="34" height="34" rx="5"/>
        <rect x="21" y="50" width="34" height="34" rx="5"/><rect x="93" y="50" width="34" height="34" rx="5"/><rect x="237" y="50" width="34" height="34" rx="5"/><rect x="309" y="50" width="34" height="34" rx="5"/>
        <rect x="93" y="90" width="34" height="34" rx="5"/><rect x="309" y="90" width="34" height="34" rx="5"/>
      </g>
      <g class="tx" text-anchor="middle">
        <text x="38" y="33" class="tx-s">1</text><text x="74" y="33">2</text><text x="110" y="33">3</text><text x="146" y="33">4</text><text x="182" y="33">5</text><text x="218" y="33">6</text><text x="254" y="33">7</text><text x="290" y="33">8</text><text x="326" y="33">9</text><text x="362" y="33">10</text>
        <text x="38" y="73">11</text><text x="74" y="73">12</text><text x="110" y="73">13</text><text x="146" y="73">14</text><text x="182" y="73">15</text><text x="218" y="73">16</text><text x="254" y="73">17</text><text x="290" y="73">18</text><text x="326" y="73">19</text><text x="362" y="73">20</text>
        <text x="38" y="113">21</text><text x="74" y="113">22</text><text x="110" y="113">23</text><text x="146" y="113">24</text><text x="182" y="113">25</text><text x="218" y="113">26</text><text x="254" y="113">27</text><text x="290" y="113">28</text><text x="326" y="113">29</text><text x="362" y="113">30</text>
      </g>
      <rect x="21" y="142" width="18" height="18" rx="4" class="f3 s3"/>
      <text x="46" y="156" class="tx-s">pierwsze – dokładnie 2 dzielniki (1 i ona sama)</text>
      <text x="21" y="182" class="tx-s">1 – ani pierwsza, ani złożona · reszta – złożone</text>
    </svg>`,
    text: `<p><b>Liczba pierwsza</b> ma dokładnie dwa dzielniki: 1 i samą siebie, np. 7 (1 i 7). <b>Liczba złożona</b> ma więcej dzielników, np. 15 (1, 3, 5, 15).</p>
      <p>2 to jedyna parzysta liczba pierwsza – każda inna liczba parzysta dzieli się przez 2, więc jest złożona. Cechy podzielności pomagają: 51 ma sumę cyfr 6, więc dzieli się przez 3 – jest złożona.</p>`,
    remember: 'Liczby pierwsze mniejsze od 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.',
    hook: 'Liczba pierwsza jest „nie do rozłożenia” – kropek nie ułożysz w prostokąt z więcej niż jednym rzędem.',
    check: { q: 'Która liczba jest pierwsza?', options: ['21', '23', '25'], answer: 1, explain: '23 dzieli się tylko przez 1 i 23. 21 = 3 · 7, 25 = 5 · 5.' },
  },
  {
    title: 'NWD i NWW – kiedy się przydają?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Oś od 0 do 24. Nad osią skoki co 4, pod osią skoki co 6. Spotykają się w 12 i 24. Najmniejsza wspólna wielokrotność 4 i 6 to 12.">
      <line x1="14" y1="100" x2="392" y2="100" class="ln"/>
      <g class="ln s1">
        <path d="M20,96 C30,64 70,64 80,96"/><path d="M80,96 C90,64 130,64 140,96"/><path d="M140,96 C150,64 190,64 200,96"/><path d="M200,96 C210,64 250,64 260,96"/><path d="M260,96 C270,64 310,64 320,96"/><path d="M320,96 C330,64 370,64 380,96"/>
      </g>
      <g class="ln s2">
        <path d="M20,104 C35,146 95,146 110,104"/><path d="M110,104 C125,146 185,146 200,104"/><path d="M200,104 C215,146 275,146 290,104"/><path d="M290,104 C305,146 365,146 380,104"/>
      </g>
      <text x="20" y="40" class="tx-b t1">skoki co 4</text>
      <text x="20" y="180" class="tx-b t2">skoki co 6</text>
      <circle cx="200" cy="100" r="9" class="f3 s3 sw"/><circle cx="380" cy="100" r="9" class="f3 s3 sw"/>
      <text x="200" y="56" class="tx-b t3" text-anchor="middle">12</text><text x="380" y="56" class="tx-b t3" text-anchor="middle">24</text>
      <text x="20" y="124" class="tx-s" text-anchor="middle">0</text>
      <text x="290" y="190" class="tx-s" text-anchor="middle">NWW(4, 6) = 12</text>
    </svg>`,
    text: `<p><b>NWW</b> (najmniejsza wspólna wielokrotność) – pierwsze miejsce, w którym spotykają się skoki obu liczb. Autobus A jeździ co 4 minuty, B co 6 minut. Odjechały razem – znów odjadą razem za 12 minut.</p>
      <p><b>NWD</b> (największy wspólny dzielnik) – gdy dzielisz na jak najwięcej jednakowych paczek. Masz 24 jabłka i 36 gruszek: NWD(24, 36) = 12, więc zrobisz 12 paczek po 2 jabłka i 3 gruszki.</p>`,
    remember: 'NWD – dzielimy na jak najwięcej równych części. NWW – szukamy, kiedy coś znów wypadnie razem.',
    hook: 'Wielo-krotność – „wiele razy” w przód, aż się spotkają. Dzielnik – „dzielimy” na paczki.',
    check: { q: 'Ania ma trening co 2 dni, a Ola co 3 dni. Dziś były razem. Za ile dni znów spotkają się na treningu?', options: ['za 5 dni', 'za 6 dni', 'za 3 dni'], answer: 1, explain: 'NWW(2, 3) = 6. Ania: 2, 4, 6… Ola: 3, 6… – spotkają się za 6 dni.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/dziesietne'] = [
  {
    title: 'Całość na 10 części – dziesiąte',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Pasek podzielony na 10 równych części, 3 części zamalowane. 3/10 = 0,3 – trzy dziesiąte.">
      <g class="ln-thin"><rect x="20" y="30" width="36" height="50"/><rect x="56" y="30" width="36" height="50"/><rect x="92" y="30" width="36" height="50"/><rect x="128" y="30" width="36" height="50"/><rect x="164" y="30" width="36" height="50"/><rect x="200" y="30" width="36" height="50"/><rect x="236" y="30" width="36" height="50"/><rect x="272" y="30" width="36" height="50"/><rect x="308" y="30" width="36" height="50"/><rect x="344" y="30" width="36" height="50"/></g>
      <g class="f2 s2"><rect x="20" y="30" width="36" height="50"/><rect x="56" y="30" width="36" height="50"/><rect x="92" y="30" width="36" height="50"/></g>
      <rect x="20" y="30" width="360" height="50" class="ln"/>
      <text x="200" y="20" class="tx-s" text-anchor="middle">1 całość = 10 dziesiątych</text>
      <text x="200" y="120" class="tx-b" text-anchor="middle"><tspan class="t2">3/10</tspan> = <tspan class="t2">0,3</tspan></text>
      <text x="200" y="150" class="tx" text-anchor="middle">„trzy dziesiąte” albo „zero przecinek trzy”</text>
    </svg>`,
    text: `<p>Ułamki o mianownikach 10, 100, 1000 można zapisać inaczej – <b>z przecinkiem</b>. To <b>ułamki dziesiętne</b>. Spotykasz je codziennie: na metkach (3,49 zł), na wadze (1,5 kg), na termometrze (36,6°C).</p>
      <p>Przed przecinkiem są całości. Pierwsza cyfra po przecinku to <b>części dziesiąte</b>: 0,3 = 3/10.</p>`,
    remember: '0,1 = 1/10 – jedna dziesiąta. Przecinek oddziela całości od części.',
    hook: 'Przecinek to płot: z lewej całe ciastka, z prawej – okruszki.',
    check: { q: 'Jak zapisać 9/10 w postaci dziesiętnej?', options: ['0,09', '0,9', '9,10'], answer: 1, explain: 'Mianownik 10 – jedna cyfra po przecinku: 0,9.' },
  },
  {
    title: 'Dziesiąte, setne, tysięczne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela miejsc: całości 4, przecinek, części dziesiąte 3, setne 6, tysięczne puste. 4,36 = 4 i 36/100. Przykład: 23/100 = 0,23, 3/100 = 0,03.">
      <rect x="20" y="14" width="80" height="96" rx="8" class="f1 s1"/>
      <rect x="120" y="14" width="80" height="96" rx="8" class="f2 s2"/>
      <rect x="208" y="14" width="80" height="96" rx="8" class="f3 s3"/>
      <rect x="296" y="14" width="80" height="96" rx="8" class="f5 s5"/>
      <g class="tx-s" text-anchor="middle"><text x="60" y="36">całości</text><text x="160" y="36">dziesiąte</text><text x="248" y="36">setne</text><text x="336" y="36">tysięczne</text></g>
      <g class="tx-b" text-anchor="middle"><text x="60" y="84">4</text><text x="110" y="84">,</text><text x="160" y="84">3</text><text x="248" y="84">6</text></g>
      <text x="200" y="140" class="tx" text-anchor="middle">4,36 = 4 i 36/100</text>
      <text x="110" y="168" class="tx" text-anchor="middle">23/100 = 0,23</text><text x="290" y="168" class="tx" text-anchor="middle">3/100 = 0,<tspan class="t2">0</tspan>3</text>
      <text x="200" y="192" class="tx-s" text-anchor="middle">ile zer w mianowniku – tyle cyfr po przecinku</text>
    </svg>`,
    text: `<p>Za przecinkiem są kolejno: <b>dziesiąte</b>, <b>setne</b>, <b>tysięczne</b>. 4,36 to 4 całe, 3 dziesiąte i 6 setnych, czyli 4 i 36/100.</p>
      <p>Mianownik 100 to dwie cyfry po przecinku. Gdy licznik jest jednocyfrowy, puste miejsce zajmuje zero: 3/100 = 0,03.</p>`,
    remember: 'Mianownik 10 – 1 cyfra po przecinku, 100 – 2 cyfry, 1000 – 3 cyfry.',
    hook: 'Licz zera w mianowniku jak schodki – tyle kroków robisz za przecinkiem.',
    check: { q: 'Ile to jest 23/100?', options: ['2,3', '0,23', '0,023'], answer: 1, explain: 'Mianownik 100 – dwie cyfry po przecinku: 0,23.' },
  },
  {
    title: 'Złote i grosze, metry i centymetry',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przykłady: 3 zł 45 gr = 3,45 zł; 2 zł 5 gr = 2,05 zł, a nie 2,5 zł; 1 m 20 cm = 1,2 m; 2 kg 500 g = 2,5 kg.">
      <rect x="10" y="10" width="380" height="44" rx="10" class="f4 s4"/>
      <rect x="10" y="60" width="380" height="44" rx="10" class="f4 s4"/>
      <rect x="10" y="110" width="380" height="44" rx="10" class="f1 s1"/>
      <rect x="10" y="160" width="380" height="44" rx="10" class="f3 s3"/>
      <text x="26" y="38" class="tx">🪙 3 zł 45 gr</text><text x="374" y="38" class="tx-b" text-anchor="end">3,45 zł</text>
      <text x="26" y="88" class="tx">🪙 2 zł 5 gr</text><text x="374" y="88" class="tx-b" text-anchor="end">2,<tspan class="t2">0</tspan>5 zł</text>
      <text x="26" y="138" class="tx">📏 1 m 20 cm</text><text x="374" y="138" class="tx-b" text-anchor="end">1,20 m = 1,2 m</text>
      <text x="26" y="188" class="tx">⚖️ 2 kg 500 g</text><text x="374" y="188" class="tx-b" text-anchor="end">2,5 kg</text>
    </svg>`,
    text: `<p>1 zł = 100 gr, więc grosz to <b>setna</b> część złotego. Grosze zajmują dwa miejsca po przecinku: 45 gr = 0,45 zł, a 5 gr = 0,05 zł.</p>
      <p>Tak samo z metrami (1 m = 100 cm) i kilogramami (1 kg = 1000 g – trzy miejsca: 500 g = 0,500 kg = 0,5 kg).</p>`,
    remember: 'Grosze i centymetry – dwie cyfry po przecinku. 2 zł 5 gr = 2,05 zł, a 2,5 zł to 2 zł 50 gr.',
    hook: 'Cena 2,05 zł „ma dziurę” na miejscu dziesiątych – tę dziurę zatyka zero.',
    check: { q: '4 zł 8 gr to…', options: ['4,8 zł', '4,08 zł', '4,80 zł'], answer: 1, explain: '8 gr to 8 setnych złotego: 0,08 zł. Razem 4,08 zł. 4,8 zł to 4 zł 80 gr.' },
  },
  {
    title: 'Która większa? Wyrównaj liczbę cyfr',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie 0,5 i 0,45: po dopisaniu zera 0,50 i 0,45, więc 0,5 jest większe. Na osi od 0 do 1 punkt 0,5 leży na prawo od 0,45.">
      <text x="110" y="34" class="tx-b" text-anchor="middle">0,5 ? 0,45</text>
      <text x="290" y="34" class="tx-b" text-anchor="middle">0,5<tspan class="t2">0</tspan> &gt; 0,45</text>
      <text x="200" y="34" class="tx-b" text-anchor="middle">→</text>
      <line x1="20" y1="110" x2="380" y2="110" class="ln"/>
      <g class="ln"><line x1="20" y1="102" x2="20" y2="118"/><line x1="56" y1="105" x2="56" y2="115"/><line x1="92" y1="105" x2="92" y2="115"/><line x1="128" y1="105" x2="128" y2="115"/><line x1="164" y1="105" x2="164" y2="115"/><line x1="200" y1="102" x2="200" y2="118"/><line x1="236" y1="105" x2="236" y2="115"/><line x1="272" y1="105" x2="272" y2="115"/><line x1="308" y1="105" x2="308" y2="115"/><line x1="344" y1="105" x2="344" y2="115"/><line x1="380" y1="102" x2="380" y2="118"/></g>
      <circle cx="182" cy="110" r="7" class="f1 s1 sw"/><circle cx="200" cy="110" r="7" class="f2 s2 sw"/>
      <text x="168" y="84" class="tx t1" text-anchor="end">0,45</text>
      <text x="214" y="84" class="tx t2">0,5</text>
      <text x="20" y="140" class="tx-s" text-anchor="middle">0</text><text x="380" y="140" class="tx-s" text-anchor="middle">1</text>
      <text x="200" y="176" class="tx" text-anchor="middle">2,09 &lt; 2,10 · 3,2 &gt; 3,15</text>
    </svg>`,
    text: `<p>Porównujesz od lewej: najpierw całości, potem dziesiąte, potem setne. Najprościej <b>dopisać zera</b> na końcu, żeby obie liczby miały tyle samo cyfr po przecinku – zera na końcu nic nie zmieniają (0,5 = 0,50).</p>
      <p>Uwaga: 0,45 nie jest większe od 0,5! 4 dziesiąte to mniej niż 5 dziesiątych.</p>`,
    remember: 'Dopisz zera, aż liczby będą miały tyle samo cyfr po przecinku – i porównuj jak zwykłe liczby.',
    hook: 'Więcej cyfr po przecinku nie znaczy „więcej” – 0,999 to wciąż mniej niż 1.',
    check: { q: 'Co jest większe: 3,2 czy 3,15?', options: ['3,2', '3,15', 'są równe'], answer: 0, explain: '3,2 = 3,20, a 3,20 > 3,15 (2 dziesiąte to więcej niż 1 dziesiąta).' },
  },
  {
    title: 'Dodawanie i odejmowanie – przecinek pod przecinkiem',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dodawanie pisemne: 4,25 plus 1,50 równa się 5,75, przecinki jeden pod drugim. Obok: 0,7 + 0,6 = 1,3, bo 13 dziesiątych to 1 całość i 3 dziesiąte.">
      <line x1="97" y1="14" x2="97" y2="150" class="ln s2 dash"/>
      <g class="tx-b" text-anchor="end"><text x="92" y="50">4</text><text x="60" y="86">+</text><text x="92" y="86">1</text><text x="92" y="132">5</text></g>
      <g class="tx-b"><text x="93" y="50">,</text><text x="103" y="50">25</text><text x="93" y="86">,</text><text x="103" y="86">5<tspan class="t2">0</tspan></text><text x="93" y="132">,</text><text x="103" y="132">75</text></g>
      <line x1="40" y1="100" x2="150" y2="100" class="ln"/>
      <text x="96" y="176" class="tx-s" text-anchor="middle">przecinek pod przecinkiem</text>
      <rect x="200" y="24" width="190" height="130" rx="12" class="f4 s4"/>
      <text x="295" y="58" class="tx-b" text-anchor="middle">0,7 + 0,6 = 1,3</text>
      <text x="295" y="90" class="tx-s" text-anchor="middle">7 dziesiątych + 6 dziesiątych</text>
      <text x="295" y="112" class="tx-s" text-anchor="middle">= 13 dziesiątych</text>
      <text x="295" y="136" class="tx-s" text-anchor="middle">= 1 całość i 3 dziesiąte</text>
    </svg>`,
    text: `<p>Dodajesz całości do całości, dziesiąte do dziesiątych, setne do setnych. Pisemnie ustaw liczby tak, żeby <b>przecinek był pod przecinkiem</b>, a brakujące miejsca uzupełnij zerami: 1,5 = 1,50.</p>
      <p>Z odejmowaniem tak samo: 5 − 0,3 = 4,7 (5 całych to 4 całe i 10 dziesiątych).</p>`,
    remember: 'Przecinek pod przecinkiem · brakujące miejsca – zera · 10 dziesiątych = 1 całość.',
    hook: 'Pieniądze pomagają: 0,70 zł + 0,60 zł = 1,30 zł – 70 gr i 60 gr to złotówka i 30 groszy.',
    check: { q: 'Ile wynosi 2,6 + 0,5?', options: ['2,11', '3,1', '2,65'], answer: 1, explain: '6 dziesiątych + 5 dziesiątych = 11 dziesiątych = 1 całość i 1 dziesiąta. 2 + 1,1 = 3,1.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/bryly'] = [
  {
    title: 'Bryły dookoła ciebie',
    svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Pięć brył z przykładami: prostopadłościan – pudełko, sześcian – kostka do gry, walec – puszka, stożek – wafel do lodów, kula – piłka.">
      <path d="M30,50 L110,50 L110,100 L30,100 Z" class="f1 s1 sw"/><path d="M30,50 L50,34 L130,34 L110,50 Z M110,50 L130,34 L130,84 L110,100 Z" class="f1 s1 sw"/>
      <path d="M170,46 L224,46 L224,100 L170,100 Z" class="f2 s2 sw"/><path d="M170,46 L188,32 L242,32 L224,46 Z M224,46 L242,32 L242,86 L224,100 Z" class="f2 s2 sw"/>
      <path d="M300,40 L300,96 A30,10 0 0 0 360,96 L360,40" class="f3 s3 sw"/><ellipse cx="330" cy="40" rx="30" ry="10" class="f3 s3 sw"/>
      <path d="M130,150 L100,206 A30,10 0 0 0 160,206 Z" class="f4 s4 sw"/>
      <circle cx="270" cy="180" r="30" class="f5 s5 sw"/><ellipse cx="270" cy="180" rx="30" ry="9" class="ln-thin dash"/>
      <g class="tx" text-anchor="middle"><text x="80" y="126">prostopadłościan</text><text x="206" y="126">sześcian</text><text x="330" y="126">walec</text><text x="130" y="236">stożek</text><text x="270" y="236">kula</text></g>
      <g class="tx-s" text-anchor="middle"><text x="80" y="144">pudełko</text><text x="206" y="144">kostka do gry</text><text x="330" y="144">puszka</text></g>
    </svg>`,
    text: `<p><b>Bryła</b> to figura przestrzenna – ma długość, szerokość i wysokość, można ją wziąć do ręki. Pudełko na buty i cegła to <b>prostopadłościany</b>, kostka do gry to <b>sześcian</b>, puszka – <b>walec</b>, wafel do lodów – <b>stożek</b>, piłka – <b>kula</b>.</p>`,
    remember: 'Prostopadłościan i sześcian mają płaskie ściany. Walec, stożek i kula mają powierzchnie zaokrąglone.',
    hook: 'Rozejrzyj się po kuchni: karton mleka – prostopadłościan, kostka cukru – prawie sześcian, puszka – walec.',
    check: { q: 'Jaki kształt ma globus?', options: ['walca', 'kuli', 'stożka'], answer: 1, explain: 'Globus to model Ziemi – ma kształt kuli.' },
  },
  {
    title: 'Ściany, krawędzie, wierzchołki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Prostopadłościan. Przednia ściana jest zamalowana, jedna krawędź pogrubiona, jeden wierzchołek zaznaczony kropką. Prostopadłościan ma 6 ścian, 12 krawędzi i 8 wierzchołków.">
      <rect x="30" y="80" width="140" height="90" class="f1"/>
      <path d="M30,170 L80,130 L220,130 M80,40 L80,130" class="ln dash"/>
      <path d="M30,80 L170,80 L170,170 L30,170 Z M30,80 L80,40 L220,40 L170,80 M220,40 L220,130 L170,170" class="ln"/>
      <line x1="220" y1="40" x2="220" y2="130" class="ln s2" stroke-width="6"/>
      <circle cx="170" cy="170" r="8" class="t3"/>
      <text x="250" y="70" class="tx-b t1">6 ścian</text>
      <text x="250" y="110" class="tx-b t2">12 krawędzi</text>
      <text x="250" y="150" class="tx-b t3">8 wierzchołków</text>
      <text x="200" y="194" class="tx-s" text-anchor="middle">linią przerywaną – krawędzie niewidoczne</text>
    </svg>`,
    text: `<ul>
      <li><b>Ściany</b> – 6 prostokątów. Ściany naprzeciw siebie są takie same. Ściana, na której bryła stoi, to <b>podstawa</b>.</li>
      <li><b>Krawędzie</b> – 12 odcinków, w których stykają się ściany: 4 na górze, 4 na dole, 4 pionowe.</li>
      <li><b>Wierzchołki</b> – 8 „rogów”. Z każdego wychodzą 3 krawędzie.</li>
    </ul>`,
    remember: 'Prostopadłościan: 6 ścian, 12 krawędzi, 8 wierzchołków.',
    hook: '6 – 12 – 8: ścian tyle, ile oczek na kostce do gry (najwięcej), krawędzi – ile miesięcy w roku, wierzchołków – ile nóg ma pająk.',
    check: { q: 'Ile krawędzi ma prostopadłościan?', options: ['8', '12', '6'], answer: 1, explain: '4 krawędzie na górze, 4 na dole i 4 pionowe – razem 12.' },
  },
  {
    title: 'Sześcian – prostopadłościan z kwadratów',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Duża ramka „prostopadłościany” z rysunkiem pudełka. W środku mniejsza ramka „sześciany” z rysunkiem sześcianu. Każdy sześcian jest prostopadłościanem.">
      <rect x="8" y="8" width="384" height="194" rx="16" class="f1 s1"/>
      <rect x="206" y="40" width="176" height="150" rx="14" class="f2 s2"/>
      <text x="22" y="32" class="tx-b t1">prostopadłościany</text>
      <text x="294" y="64" class="tx-b t2" text-anchor="middle">sześciany</text>
      <path d="M30,100 L150,100 L150,160 L30,160 Z M30,100 L60,76 L180,76 L150,100 M180,76 L180,136 L150,160" class="ln"/>
      <path d="M254,104 L314,104 L314,164 L254,164 Z M254,104 L278,84 L338,84 L314,104 M338,84 L338,144 L314,164" class="ln"/>
      <text x="100" y="186" class="tx-s" text-anchor="middle">ściany – prostokąty</text>
      <text x="294" y="182" class="tx-s" text-anchor="middle">ściany – kwadraty</text>
    </svg>`,
    text: `<p><b>Sześcian</b> to prostopadłościan, którego wszystkie 6 ścian to <b>jednakowe kwadraty</b>. Wszystkie jego 12 krawędzi ma tę samą długość.</p>
      <p>Dlatego każdy sześcian jest prostopadłościanem – ale nie odwrotnie. Pudełko na buty nie jest sześcianem.</p>`,
    remember: 'Każdy sześcian jest prostopadłościanem. Nie każdy prostopadłościan jest sześcianem.',
    hook: 'Tak jak każdy kwadrat jest prostokątem – każdy sześcian jest prostopadłościanem.',
    check: { q: 'Prawda czy fałsz? Każdy prostopadłościan jest sześcianem.', options: ['Prawda', 'Fałsz'], answer: 1, explain: 'Odwrotnie: każdy sześcian jest prostopadłościanem. Prostopadłościan może mieć ściany, które nie są kwadratami.' },
  },
  {
    title: 'Suma krawędzi – szkielet z drutu',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Prostopadłościan o krawędziach 5 cm, 3 cm i 2 cm. Suma długości krawędzi: 4 · 5 + 4 · 3 + 4 · 2 = 40 cm.">
      <path d="M60,180 L105,135 L305,135 M105,55 L105,135" class="ln dash"/>
      <path d="M60,100 L260,100 L260,180 L60,180 Z M60,100 L105,55 L305,55 L260,100 M305,55 L305,135 L260,180" class="ln"/>
      <g class="ln s1 sw"><line x1="60" y1="100" x2="260" y2="100"/><line x1="60" y1="180" x2="260" y2="180"/><line x1="105" y1="55" x2="305" y2="55"/></g>
      <text x="160" y="200" class="tx-b t1" text-anchor="middle">5 cm</text>
      <text x="52" y="146" class="tx-b t3" text-anchor="end">2 cm</text>
      <text x="292" y="176" class="tx-b t2">3 cm</text>
      <text x="200" y="230" class="tx" text-anchor="middle">4 · 5 + 4 · 3 + 4 · 2 = 40 cm</text>
    </svg>`,
    text: `<p>Krawędzie prostopadłościanu tworzą 3 grupy po 4 krawędzie równej długości. Żeby policzyć, ile drutu potrzeba na szkielet, mnożysz każdą długość przez 4 i dodajesz.</p>
      <p>W sześcianie wszystkie 12 krawędzi są równe: krawędź 4 cm → 12 · 4 = 48 cm.</p>`,
    remember: 'Prostopadłościan: 4 · a + 4 · b + 4 · c. Sześcian: 12 · a.',
    check: { q: 'Sześcian ma krawędź 3 cm. Ile wynosi suma długości wszystkich jego krawędzi?', options: ['18 cm', '36 cm', '27 cm'], answer: 1, explain: '12 krawędzi po 3 cm: 12 · 3 = 36 cm.' },
  },
  {
    title: 'Siatka – pudełko rozłożone na płasko',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Po lewej siatka sześcianu w kształcie krzyża z podpisami: tył, dno, przód, góra, lewa i prawa ściana. Po prawej sześć kwadratów w prostokącie 2 na 3, przekreślone – z tego nie złożysz sześcianu.">
      <g class="f4 s4 sw">
        <rect x="80" y="10" width="44" height="44"/><rect x="80" y="54" width="44" height="44"/><rect x="80" y="98" width="44" height="44"/><rect x="80" y="142" width="44" height="44"/>
        <rect x="36" y="54" width="44" height="44"/><rect x="124" y="54" width="44" height="44"/>
      </g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="37">tył</text><text x="102" y="81">dno</text><text x="102" y="125">przód</text><text x="102" y="169">góra</text><text x="58" y="81">lewa</text><text x="146" y="81">prawa</text></g>
      <text x="102" y="214" class="tx-b t3" text-anchor="middle">✓ siatka sześcianu</text>
      <g class="f4 s4 sw">
        <rect x="240" y="54" width="44" height="44"/><rect x="284" y="54" width="44" height="44"/><rect x="328" y="54" width="44" height="44"/>
        <rect x="240" y="98" width="44" height="44"/><rect x="284" y="98" width="44" height="44"/><rect x="328" y="98" width="44" height="44"/>
      </g>
      <path d="M244,58 L368,138 M368,58 L244,138" class="ln s2" stroke-width="4"/>
      <text x="306" y="184" class="tx-b t2" text-anchor="middle">✗ to nie siatka</text>
      <text x="306" y="210" class="tx-s" text-anchor="middle">kwadrat 2 × 2 – nie złożysz</text>
    </svg>`,
    text: `<p><b>Siatka</b> bryły to jej ściany rozłożone na płasko – jak rozcięte pudełko. Z siatki można skleić model bryły.</p>
      <p>Siatka sześcianu to 6 jednakowych kwadratów, ale nie każdy układ 6 kwadratów się nadaje. Sześcian ma 11 różnych siatek. Siatka prostopadłościanu to 6 prostokątów – po dwa takie same.</p>`,
    remember: 'Siatka sześcianu: 6 kwadratów. Jeśli 4 kwadraty tworzą większy kwadrat 2 × 2 – to nie jest siatka sześcianu.',
    hook: 'Sprawdź w wyobraźni: wybierz dno i „zaginaj” ściany do góry. Jeśli dwie ściany trafiają w to samo miejsce – to nie siatka.',
    check: { q: 'Z ilu kwadratów składa się siatka sześcianu?', options: ['4', '6', '8'], answer: 1, explain: 'Sześcian ma 6 ścian, więc jego siatka ma 6 kwadratów.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/skala'] = [
  {
    title: 'Po co jest skala?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Plan pokoju: prostokąt 5 cm na 3 cm. Strzałka razy 100 prowadzi do napisu: pokój naprawdę 5 m na 3 m. Skala 1 : 100.">
      <defs><marker id="a-mat-skala-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="105" y="38" class="tx-b" text-anchor="middle">plan</text>
      <rect x="30" y="50" width="150" height="90" class="f1 s1 sw"/>
      <text x="105" y="162" class="tx" text-anchor="middle">5 cm</text>
      <text x="105" y="100" class="tx" text-anchor="middle">3 cm × 5 cm</text>
      <path d="M195,95 L245,95" class="ln" marker-end="url(#a-mat-skala-1)"/>
      <text x="220" y="84" class="tx-b t2" text-anchor="middle">· 100</text>
      <text x="320" y="82" class="tx-s" text-anchor="middle">pokój naprawdę:</text>
      <text x="320" y="107" class="tx-b" text-anchor="middle">5 m × 3 m</text>
      <text x="200" y="190" class="tx-b t1" text-anchor="middle">skala 1 : 100</text>
    </svg>`,
    text: `<p>Pokój, boisko czy całe miasto nie zmieszczą się na kartce. Dlatego rysujemy je <b>pomniejszone</b>. <b>Skala</b> mówi, ile razy.</p>
      <p>Skala <b>1 : 100</b> znaczy: wszystko jest 100 razy mniejsze. 1 cm na planie to 100 cm, czyli <b>1 m</b> naprawdę.</p>`,
    remember: '1 : 100 → 1 cm na planie = 1 m naprawdę. 1 : 1000 → 1 cm = 10 m. 1 : 100 000 → 1 cm = 1 km.',
    hook: 'Pierwsza liczba to plan, druga – rzeczywistość: „1 : 100” = „1 na planie, 100 naprawdę”.',
  },
  {
    title: 'Z planu do rzeczywistości – mnożysz',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Skala 1 : 1000. 4 cm na planie razy 1000 to 4000 cm, a 4000 cm podzielone przez 100 to 40 m w terenie.">
      <defs><marker id="a-mat-skala-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="24" class="tx-b t1" text-anchor="middle">skala 1 : 1000</text>
      <rect x="10" y="68" width="80" height="50" rx="8" class="f1 s1"/>
      <rect x="140" y="68" width="110" height="50" rx="8" class="f4 s4"/>
      <rect x="300" y="68" width="90" height="50" rx="8" class="f3 s3"/>
      <text x="50" y="99" class="tx-b" text-anchor="middle">4 cm</text>
      <text x="195" y="99" class="tx-b" text-anchor="middle">4000 cm</text>
      <text x="345" y="99" class="tx-b" text-anchor="middle">40 m</text>
      <path d="M94,93 L136,93" class="ln" marker-end="url(#a-mat-skala-2)"/>
      <path d="M254,93 L296,93" class="ln" marker-end="url(#a-mat-skala-2)"/>
      <text x="115" y="58" class="tx t2" text-anchor="middle">· 1000</text>
      <text x="275" y="58" class="tx t2" text-anchor="middle">: 100</text>
      <g class="tx-s" text-anchor="middle"><text x="50" y="140">na planie</text><text x="195" y="140">w rzeczywistości</text><text x="345" y="140">w metrach</text></g>
    </svg>`,
    text: `<p>Znasz długość na planie i chcesz wiedzieć, ile to naprawdę? <b>Pomnóż</b> ją przez liczbę ze skali. Wynik wyjdzie w tych samych jednostkach (cm), więc na koniec zamień je na metry albo kilometry.</p>
      <p>Skala 1 : 1000, ścieżka na planie 4 cm: 4 cm · 1000 = 4000 cm = <b>40 m</b>.</p>`,
    remember: 'Plan → rzeczywistość: długość na planie · liczba ze skali, potem zamiana jednostek.',
    check: { q: 'Plan ma skalę 1 : 100. Stół ma na nim 3 cm. Ile ma naprawdę?', options: ['30 cm', '3 m', '30 m'], answer: 1, explain: '3 cm · 100 = 300 cm = 3 m.' },
  },
  {
    title: 'Z rzeczywistości na plan – dzielisz',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Skala 1 : 1000. Boisko 40 m to 4000 cm. 4000 cm podzielone przez 1000 to 4 cm na planie.">
      <defs><marker id="a-mat-skala-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="24" class="tx-b t1" text-anchor="middle">skala 1 : 1000</text>
      <rect x="10" y="68" width="80" height="50" rx="8" class="f3 s3"/>
      <rect x="140" y="68" width="110" height="50" rx="8" class="f4 s4"/>
      <rect x="300" y="68" width="90" height="50" rx="8" class="f1 s1"/>
      <text x="50" y="99" class="tx-b" text-anchor="middle">40 m</text>
      <text x="195" y="99" class="tx-b" text-anchor="middle">4000 cm</text>
      <text x="345" y="99" class="tx-b" text-anchor="middle">4 cm</text>
      <path d="M94,93 L136,93" class="ln" marker-end="url(#a-mat-skala-3)"/>
      <path d="M254,93 L296,93" class="ln" marker-end="url(#a-mat-skala-3)"/>
      <text x="115" y="58" class="tx t2" text-anchor="middle">· 100</text>
      <text x="275" y="58" class="tx t2" text-anchor="middle">: 1000</text>
      <g class="tx-s" text-anchor="middle"><text x="50" y="140">naprawdę</text><text x="195" y="140">w centymetrach</text><text x="345" y="140">na planie</text></g>
    </svg>`,
    text: `<p>Teraz odwrotnie: znasz prawdziwą długość i chcesz ją narysować. Najpierw zamień ją na <b>centymetry</b>, potem <b>podziel</b> przez liczbę ze skali.</p>
      <p>Boisko ma 40 m, plan 1 : 1000: 40 m = 4000 cm, 4000 cm : 1000 = <b>4 cm</b>.</p>`,
    remember: 'Rzeczywistość → plan: zamień na cm i podziel przez liczbę ze skali.',
    hook: 'Na plan wszystko się „kurczy” – więc dzielisz. Z planu wszystko „rośnie” – więc mnożysz.',
    check: { q: 'Pokój ma 6 m długości. Ile będzie miał na planie w skali 1 : 100?', options: ['6 cm', '60 cm', '6 mm'], answer: 0, explain: '6 m = 600 cm, 600 cm : 100 = 6 cm.' },
  },
  {
    title: 'Trzy zapisy tej samej skali',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy zapisy tej samej skali: liczbowa 1 : 10 000, mianowana 1 cm – 100 m, liniowa – podziałka z działkami 0, 100, 200, 300, 400 m.">
      <g class="tx-s"><text x="15" y="45">liczbowa</text><text x="15" y="95">mianowana</text><text x="15" y="150">liniowa</text></g>
      <text x="140" y="45" class="tx-b">1 : 10 000</text>
      <text x="140" y="95" class="tx-b">1 cm – 100 m</text>
      <rect x="140" y="140" width="60" height="14" class="f1 s1"/><rect x="200" y="140" width="60" height="14" class="bg ln"/>
      <rect x="260" y="140" width="60" height="14" class="f1 s1"/><rect x="320" y="140" width="60" height="14" class="bg ln"/>
      <g class="tx-s" text-anchor="middle"><text x="140" y="132">0</text><text x="200" y="132">100</text><text x="260" y="132">200</text><text x="320" y="132">300</text><text x="380" y="132">400 m</text></g>
      <text x="260" y="178" class="tx-s" text-anchor="middle">1 działka = 1 cm</text>
      <line x1="10" y1="65" x2="390" y2="65" class="ln-thin"/><line x1="10" y1="115" x2="390" y2="115" class="ln-thin"/>
    </svg>`,
    text: `<ul>
      <li><b>Liczbowa</b>: 1 : 10 000.</li>
      <li><b>Mianowana</b> – z jednostkami: 1 cm – 100 m. Od razu widać, ile to metrów.</li>
      <li><b>Liniowa</b> (podziałka): odcinek z działkami. Mierzysz odległość linijką albo paskiem papieru i przykładasz do podziałki.</li>
    </ul>
    <p>To ta sama skala, bo 100 m = 10 000 cm.</p>`,
    remember: 'Żeby zamienić skalę liczbową na mianowaną, zamień drugą liczbę (w cm) na m albo km.',
    hook: 'Mianowana = „z mianem”, czyli z jednostką, tak jak w wyrażeniach dwumianowanych (2 m 30 cm).',
    check: { q: 'Skala 1 : 1000 jako skala mianowana to…', options: ['1 cm – 1 m', '1 cm – 10 m', '1 cm – 1 km'], answer: 1, explain: '1000 cm = 10 m.' },
  },
  {
    title: 'Pułapki i powiększenie',
    svg: `<svg viewBox="0 0 400 185" role="img" aria-label="Po lewej skala 1 : 100: duży prostokąt naprawdę i mały na planie – zmniejszenie. Po prawej skala 2 : 1: mała biedronka naprawdę i dwa razy większa na rysunku – powiększenie.">
      <line x1="200" y1="10" x2="200" y2="175" class="ln-thin"/>
      <text x="100" y="30" class="tx-b t1" text-anchor="middle">1 : 100</text>
      <rect x="20" y="50" width="110" height="70" class="f3 s3 sw"/>
      <rect x="150" y="95" width="30" height="20" class="f3 s3 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="75" y="140">naprawdę</text><text x="165" y="140">plan</text></g>
      <text x="100" y="170" class="tx" text-anchor="middle">zmniejszenie</text>
      <text x="300" y="30" class="tx-b t2" text-anchor="middle">2 : 1</text>
      <circle cx="240" cy="100" r="15" class="f2 s2 sw"/><line x1="240" y1="85" x2="240" y2="115" class="ln"/>
      <circle cx="330" cy="90" r="30" class="f2 s2 sw"/><line x1="330" y1="60" x2="330" y2="120" class="ln"/>
      <g class="tx-s" text-anchor="middle"><text x="240" y="140">naprawdę</text><text x="330" y="140">rysunek</text></g>
      <text x="300" y="170" class="tx" text-anchor="middle">powiększenie</text>
    </svg>`,
    text: `<ul>
      <li><b>Pułapka 1:</b> zapomniana zamiana jednostek. W skali 1 : 100 jeden centymetr to 100 cm = 1 m, a nie 100 m.</li>
      <li><b>Pułapka 2:</b> pomylone działanie. Z planu do rzeczywistości – mnożysz, z rzeczywistości na plan – dzielisz.</li>
      <li><b>Powiększenie:</b> skala 2 : 1 znaczy, że rysunek jest 2 razy większy niż rzecz. Tak rysuje się małe owady albo części maszyn.</li>
    </ul>`,
    remember: 'Mniejsza liczba po prawej (2 : 1) – powiększenie. Większa liczba po prawej (1 : 100) – zmniejszenie.',
    check: { q: 'Biedronkę narysowano w skali 2 : 1. Na rysunku ma 2 cm. Ile ma naprawdę?', options: ['4 cm', '1 cm', '2 cm'], answer: 1, explain: 'Rysunek jest 2 razy większy: 2 cm : 2 = 1 cm.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/trojkaty-czworokaty'] = [
  {
    title: 'Trójkąty – patrzymy na kąty',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy trójkąty: ostrokątny ze wszystkimi kątami ostrymi, prostokątny z zaznaczonym kątem prostym, rozwartokątny z jednym kątem rozwartym.">
      <path d="M25,150 L115,150 L75,40 Z" class="f1 s1 sw"/>
      <path d="M155,150 L245,150 L155,50 Z" class="f3 s3 sw"/>
      <path d="M155,136 L169,136 L169,150" class="ln"/>
      <path d="M290,150 L390,150 L270,95 Z" class="f2 s2 sw"/>
      <g class="tx" text-anchor="middle"><text x="70" y="182">ostrokątny</text><text x="200" y="182">prostokątny</text><text x="330" y="182">rozwartokątny</text></g>
    </svg>`,
    text: `<p>Trójkąty dzielimy według ich <b>kątów</b>:</p>
      <ul>
        <li><b>ostrokątny</b> – wszystkie 3 kąty ostre (mniejsze od prostego),</li>
        <li><b>prostokątny</b> – jeden kąt prosty,</li>
        <li><b>rozwartokątny</b> – jeden kąt rozwarty (większy od prostego).</li>
      </ul>
      <p>Dwóch kątów prostych trójkąt mieć nie może – jego boki nie spotkałyby się w trzecim wierzchołku.</p>`,
    remember: 'Nazwa mówi, jaki jest „najważniejszy” kąt: prosty → prostokątny, rozwarty → rozwartokątny, same ostre → ostrokątny.',
    hook: 'Sprawdzaj kąty rogiem kartki – to kąt prosty. Kąt mieści się pod rogiem? Ostry. Wystaje? Rozwarty.',
    check: { q: 'Trójkąt ma kąt 120°. Jaki to trójkąt?', options: ['ostrokątny', 'prostokątny', 'rozwartokątny'], answer: 2, explain: '120° to więcej niż 90°, więc kąt jest rozwarty.' },
  },
  {
    title: 'Trójkąty – patrzymy na boki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy trójkąty: różnoboczny – boki różnej długości; równoramienny – dwa boki zaznaczone kreską, podpisana podstawa; równoboczny – wszystkie trzy boki zaznaczone kreską.">
      <path d="M20,150 L120,150 L45,70 Z" class="f5 s5 sw"/>
      <path d="M150,150 L250,150 L200,50 Z" class="f4 s4 sw"/>
      <path d="M168.7,96.9 L181.3,103.1 M218.7,103.1 L231.3,96.9" class="ln"/>
      <path d="M280,150 L380,150 L330,63.4 Z" class="f1 s1 sw"/>
      <path d="M330,143 L330,157 M298.9,103.2 L311.1,110.2 M348.9,110.2 L361.1,103.2" class="ln"/>
      <text x="200" y="168" class="tx-s" text-anchor="middle">podstawa</text>
      <g class="tx" text-anchor="middle"><text x="70" y="192">różnoboczny</text><text x="200" y="192">równoramienny</text><text x="330" y="192">równoboczny</text></g>
    </svg>`,
    text: `<p>Według <b>boków</b>:</p>
      <ul>
        <li><b>różnoboczny</b> – każdy bok inny,</li>
        <li><b>równoramienny</b> – dwa boki równe; to <b>ramiona</b>, a trzeci bok to <b>podstawa</b>,</li>
        <li><b>równoboczny</b> – wszystkie 3 boki równe.</li>
      </ul>
      <p>Równe boki zaznaczamy na rysunku takimi samymi kreseczkami.</p>`,
    remember: 'Równoboczny = 3 równe boki. Równoramienny = 2 równe ramiona + podstawa.',
    hook: 'Trójkąt równoramienny jest jak dach domu: dwa jednakowe skosy (ramiona) i belka na dole (podstawa).',
  },
  {
    title: 'Rodzina czworokątów',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Pięć czworokątów: kwadrat, prostokąt, romb, równoległobok i trapez.">
      <rect x="20" y="20" width="70" height="70" class="f1 s1 sw"/>
      <rect x="130" y="30" width="110" height="60" class="f3 s3 sw"/>
      <path d="M330,10 L360,55 L330,100 L300,55 Z" class="f2 s2 sw"/>
      <path d="M30,210 L150,210 L180,150 L60,150 Z" class="f5 s5 sw"/>
      <path d="M230,210 L370,210 L330,150 L260,150 Z" class="f4 s4 sw"/>
      <g class="tx" text-anchor="middle"><text x="55" y="114">kwadrat</text><text x="185" y="114">prostokąt</text><text x="330" y="122">romb</text><text x="105" y="232">równoległobok</text><text x="300" y="232">trapez</text></g>
    </svg>`,
    text: `<ul>
      <li><b>Kwadrat</b> – 4 równe boki i 4 kąty proste.</li>
      <li><b>Prostokąt</b> – 4 kąty proste, przeciwległe boki równe.</li>
      <li><b>Romb</b> – 4 równe boki, ale kąty nie muszą być proste (jak „przekrzywiony kwadrat”).</li>
      <li><b>Równoległobok</b> – dwie pary boków równoległych (jak „przekrzywiony prostokąt”).</li>
      <li><b>Trapez</b> – co najmniej jedna para boków równoległych.</li>
    </ul>`,
    remember: 'Kwadrat jest i prostokątem, i rombem. Prostokąt i romb są równoległobokami.',
    hook: 'Wciśnij z boku pudełko po pizzy (kwadrat) – wyjdzie romb. Wciśnij pudełko po butach (prostokąt) – wyjdzie równoległobok.',
    check: { q: 'Czworokąt ma 4 kąty proste, ale nie wszystkie boki równe. To…', options: ['kwadrat', 'prostokąt', 'romb'], answer: 1, explain: 'Kąty proste ma prostokąt i kwadrat, ale kwadrat ma wszystkie boki równe.' },
  },
  {
    title: 'Trapez: podstawy i ramiona',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Trapez równoramienny z podpisanymi podstawami (górny i dolny bok) i ramionami (boki ukośne) oraz trapez prostokątny z dwoma kątami prostymi przy lewym boku.">
      <path d="M20,160 L200,160 L160,70 L60,70 Z" class="f4 s4 sw"/>
      <text x="110" y="60" class="tx-s" text-anchor="middle">podstawa</text>
      <text x="110" y="180" class="tx-s" text-anchor="middle">podstawa</text>
      <text x="56" y="124" class="tx-s">ramię</text>
      <text x="164" y="124" class="tx-s" text-anchor="end">ramię</text>
      <path d="M240,160 L390,160 L330,70 L240,70 Z" class="f3 s3 sw"/>
      <path d="M240,84 L254,84 L254,70 M240,146 L254,146 L254,160" class="ln"/>
      <g class="tx" text-anchor="middle"><text x="110" y="205">trapez równoramienny</text><text x="315" y="205">trapez prostokątny</text></g>
    </svg>`,
    text: `<p>W trapezie boki <b>równoległe</b> to <b>podstawy</b>, a dwa pozostałe boki to <b>ramiona</b>.</p>
      <ul>
        <li><b>Trapez równoramienny</b> – ramiona mają równą długość (jak wiadro z boku).</li>
        <li><b>Trapez prostokątny</b> – jedno ramię jest prostopadłe do podstaw, więc są w nim kąty proste.</li>
      </ul>`,
    remember: 'Podstawy trapezu są równoległe. Ramiona – to dwa pozostałe boki.',
    hook: 'Podstawy „podpierają” trapez z góry i z dołu – jak blat i podłoga. Ramiona są po bokach – jak twoje ręce.',
    check: { q: 'Trapez ma ramiona po 5 cm. Jaki to trapez?', options: ['prostokątny', 'równoramienny', 'równoboczny'], answer: 1, explain: 'Równe ramiona – trapez równoramienny.' },
  },
  {
    title: 'Obwód – dodaj wszystkie boki',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trójkąt równoramienny o ramionach 7 cm i podstawie 4 cm: obwód 7 + 7 + 4 = 18 cm. Romb o boku 5 cm: obwód 4 · 5 = 20 cm.">
      <path d="M30,160 L130,160 L80,40 Z" class="f4 s4 sw"/>
      <text x="80" y="178" class="tx" text-anchor="middle">4 cm</text>
      <text x="48" y="96" class="tx" text-anchor="end">7 cm</text>
      <text x="112" y="96" class="tx">7 cm</text>
      <text x="80" y="202" class="tx-b" text-anchor="middle">7 + 7 + 4 = 18 cm</text>
      <path d="M280,40 L330,100 L280,160 L230,100 Z" class="f2 s2 sw"/>
      <text x="312" y="62" class="tx">5 cm</text>
      <text x="280" y="202" class="tx-b" text-anchor="middle">4 · 5 = 20 cm</text>
    </svg>`,
    text: `<p><b>Obwód</b> to suma długości wszystkich boków. Równe boki możesz policzyć mnożeniem:</p>
      <ul>
        <li>trójkąt równoboczny o boku a: <b>3 · a</b>,</li>
        <li>romb i kwadrat o boku a: <b>4 · a</b>,</li>
        <li>równoległobok i prostokąt o bokach a i b: <b>2 · a + 2 · b</b>.</li>
      </ul>`,
    remember: 'Obwód podajesz w jednostkach długości (cm, m), nie w cm².',
    check: { q: 'Równoległobok ma boki 6 cm i 4 cm. Jaki ma obwód?', options: ['10 cm', '20 cm', '24 cm'], answer: 1, explain: '2 · 6 + 2 · 4 = 12 + 8 = 20 cm.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/symetria'] = [
  {
    title: 'Złóż na pół – symetria',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Motyl z przerywaną pionową osią symetrii przez środek. Lewe skrzydła są odbiciem prawych.">
      <path d="M200,100 C150,30 90,40 110,100 C90,150 150,170 200,110 Z" class="f2 s2 sw"/>
      <path d="M200,100 C250,30 310,40 290,100 C310,150 250,170 200,110 Z" class="f2 s2 sw"/>
      <circle cx="140" cy="85" r="10" class="f5 s5"/><circle cx="260" cy="85" r="10" class="f5 s5"/>
      <ellipse cx="200" cy="105" rx="6" ry="40" class="f4 s4"/>
      <line x1="200" y1="10" x2="200" y2="190" class="ln s1 sw dash"/>
      <text x="210" y="186" class="tx-s">oś symetrii</text>
    </svg>`,
    text: `<p>Złóż motyla wzdłuż przerywanej linii – lewe skrzydła dokładnie przykryją prawe. Taka figura jest <b>osiowosymetryczna</b>, a linia złożenia to <b>oś symetrii</b>.</p>
      <p>Symetrię widać w liściach, płatkach kwiatów, w literze A, a nawet w twojej twarzy (prawie).</p>`,
    remember: 'Oś symetrii to prosta, wzdłuż której złożona figura daje dwie pokrywające się połowy.',
    hook: 'Oś symetrii działa jak lustro: to, co po jednej stronie, odbija się po drugiej.',
  },
  {
    title: 'Ile osi ma figura?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kwadrat z czterema osiami symetrii, prostokąt z dwiema osiami, trójkąt równoboczny z trzema osiami.">
      <rect x="20" y="50" width="100" height="100" class="f1 s1 sw"/>
      <g class="ln s2 dash"><line x1="70" y1="40" x2="70" y2="160"/><line x1="10" y1="100" x2="130" y2="100"/><line x1="15" y1="45" x2="125" y2="155"/><line x1="125" y1="45" x2="15" y2="155"/></g>
      <rect x="150" y="65" width="120" height="70" class="f3 s3 sw"/>
      <g class="ln s2 dash"><line x1="210" y1="50" x2="210" y2="150"/><line x1="140" y1="100" x2="280" y2="100"/></g>
      <path d="M290,150 L390,150 L340,63.4 Z" class="f4 s4 sw"/>
      <g class="ln s2 dash"><line x1="340" y1="55" x2="340" y2="160"/><line x1="282.5" y1="154.3" x2="372.5" y2="102.4"/><line x1="397.5" y1="154.3" x2="307.5" y2="102.4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="188">4 osie</text><text x="210" y="188">2 osie</text><text x="340" y="188">3 osie</text></g>
    </svg>`,
    text: `<ul>
      <li><b>Kwadrat</b> – 4 osie: pionowa, pozioma i dwie po przekątnych.</li>
      <li><b>Prostokąt</b> (niebędący kwadratem) – 2 osie: pionowa i pozioma.</li>
      <li><b>Trójkąt równoboczny</b> – 3 osie, każda od wierzchołka do środka przeciwległego boku.</li>
      <li><b>Koło</b> – nieskończenie wiele: każda prosta przez środek.</li>
      <li><b>Trójkąt różnoboczny</b> – żadnej.</li>
    </ul>`,
    remember: 'Kwadrat 4, trójkąt równoboczny 3, prostokąt 2, trójkąt równoramienny 1, koło – nieskończenie wiele.',
    check: { q: 'Ile osi symetrii ma trójkąt równoboczny?', options: ['1', '3', '6'], answer: 1, explain: 'Trzy – po jednej przez każdy wierzchołek.' },
  },
  {
    title: 'Pułapka: przekątna prostokąta',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej prostokąt z przekątną i zaznaczonym miejscem, gdzie trafi róg po złożeniu – wystaje poza prostokąt, więc przekątna nie jest osią. Po prawej prostokąt z pionową osią – połowy się pokrywają.">
      <text x="110" y="30" class="tx-s" text-anchor="middle">✗ przekątna – nie oś</text>
      <rect x="40" y="60" width="140" height="80" class="f4 s4 sw"/>
      <line x1="40" y1="140" x2="180" y2="60" class="ln s2 sw dash"/>
      <path d="M40,140 L108.9,180.6 L180,60" class="ln dash"/>
      <circle cx="108.9" cy="180.6" r="5" class="t2"/>
      <text x="310" y="30" class="tx-s" text-anchor="middle">✓ oś symetrii</text>
      <rect x="240" y="60" width="140" height="80" class="f3 s3 sw"/>
      <line x1="310" y1="45" x2="310" y2="155" class="ln s2 sw dash"/>
    </svg>`,
    text: `<p>Wydaje się, że przekątna dzieli prostokąt na dwie równe części – i to prawda, ale to jeszcze nie symetria! Złóż prostokątną kartkę po przekątnej: róg wystaje poza kartkę, połowy się <b>nie pokrywają</b>.</p>
      <p>Prostokąt (niebędący kwadratem) ma tylko 2 osie: pionową i poziomą. Przekątne są osiami symetrii tylko w kwadracie.</p>`,
    remember: 'Dwie równe części to nie zawsze symetria – połowy muszą się pokryć po złożeniu.',
    hook: 'Sprawdź na kartce z zeszytu: złóż ją po przekątnej i zobacz, jak róg „ucieka”.',
    check: { q: 'Czy przekątna prostokąta 6 cm × 3 cm jest jego osią symetrii?', options: ['tak', 'nie'], answer: 1, explain: 'Ten prostokąt nie jest kwadratem, więc jego przekątne nie są osiami symetrii.' },
  },
  {
    title: 'Symetryczne litery',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Litera A z pionową osią symetrii, litera H z dwiema osiami – pionową i poziomą, litera N bez osi symetrii.">
      <path d="M40,160 L80,40 L120,160 M55,115 L105,115" class="ln sw"/>
      <line x1="80" y1="28" x2="80" y2="172" class="ln s2 dash"/>
      <path d="M170,40 L170,160 M250,40 L250,160 M170,100 L250,100" class="ln sw"/>
      <g class="ln s2 dash"><line x1="210" y1="28" x2="210" y2="172"/><line x1="155" y1="100" x2="265" y2="100"/></g>
      <path d="M300,160 L300,40 L370,160 L370,40" class="ln sw"/>
      <g class="tx-b" text-anchor="middle"><text x="80" y="194">1 oś</text><text x="210" y="194">2 osie</text><text x="335" y="194">brak osi</text></g>
    </svg>`,
    text: `<p>Litery też mogą być symetryczne (patrzymy na zwykłe, drukowane wielkie litery):</p>
      <ul>
        <li><b>A</b>, <b>T</b>, <b>M</b> – pionowa oś,</li>
        <li><b>H</b> – dwie osie: pionowa i pozioma,</li>
        <li><b>N</b>, <b>S</b>, <b>Z</b> – żadnej osi.</li>
      </ul>`,
    hook: 'Postaw literę przed lusterkiem ustawionym na jej środku. Jeśli z odbiciem wygląda tak samo – lusterko stoi na osi symetrii.',
    check: { q: 'Która litera nie ma osi symetrii?', options: ['T', 'N', 'H'], answer: 1, explain: 'N nie da się złożyć na dwie pokrywające się połowy. T ma pionową oś, H – dwie osie.' },
  },
  {
    title: 'Dorysuj drugą połowę',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kratka z pionową osią. Po lewej trójkąt ABC, po prawej jego odbicie A′B′C′. Wierzchołek A jest 4 kratki na lewo od osi, A′ – 4 kratki na prawo.">
      <g class="ln-thin"><line x1="20" y1="20" x2="20" y2="170"/><line x1="50" y1="20" x2="50" y2="170"/><line x1="80" y1="20" x2="80" y2="170"/><line x1="110" y1="20" x2="110" y2="170"/><line x1="140" y1="20" x2="140" y2="170"/><line x1="170" y1="20" x2="170" y2="170"/><line x1="200" y1="20" x2="200" y2="170"/><line x1="230" y1="20" x2="230" y2="170"/><line x1="260" y1="20" x2="260" y2="170"/><line x1="290" y1="20" x2="290" y2="170"/><line x1="320" y1="20" x2="320" y2="170"/><line x1="350" y1="20" x2="350" y2="170"/><line x1="380" y1="20" x2="380" y2="170"/><line x1="20" y1="20" x2="380" y2="20"/><line x1="20" y1="50" x2="380" y2="50"/><line x1="20" y1="80" x2="380" y2="80"/><line x1="20" y1="110" x2="380" y2="110"/><line x1="20" y1="140" x2="380" y2="140"/><line x1="20" y1="170" x2="380" y2="170"/></g>
      <path d="M80,140 L170,140 L170,80 Z" class="f1 s1 sw"/>
      <path d="M320,140 L230,140 L230,80 Z" class="f3 s3 sw"/>
      <line x1="200" y1="10" x2="200" y2="180" class="ln s2 sw dash"/>
      <g class="tx-b"><text x="64" y="134" text-anchor="end">A</text><text x="336" y="134">A′</text><text x="176" y="74">C</text><text x="224" y="74" text-anchor="end">C′</text></g>
      <g class="tx-s" text-anchor="middle"><text x="140" y="190">4 kratki</text><text x="260" y="190">4 kratki</text></g>
    </svg>`,
    text: `<p>Jak dorysować figurę symetryczną na kratce?</p>
      <ul>
        <li>Weź jeden wierzchołek i policz, ile kratek dzieli go od osi.</li>
        <li>Odlicz tyle samo kratek <b>po drugiej stronie</b> osi, w tej samej linii (prostopadle do osi). Tam jest obraz wierzchołka.</li>
        <li>Zrób tak z każdym wierzchołkiem i połącz punkty.</li>
      </ul>`,
    remember: 'Obraz punktu: po drugiej stronie osi, w tej samej odległości, na tej samej linii prostopadłej do osi.',
    check: { q: 'Punkt leży 2 kratki na prawo od pionowej osi. Gdzie jest jego obraz?', options: ['4 kratki na lewo od osi', '2 kratki na lewo od osi', 'na osi'], answer: 1, explain: 'Tyle samo kratek, ale po drugiej stronie osi.' },
  },
];

window.LESSONS['matematyka/ulamki-dzialania'] = [
  {
    title: 'Ta sama część, inny zapis',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy jednakowe paski. Pierwszy podzielony na 2 części – zamalowana 1. Drugi na 4 części – zamalowane 2. Trzeci na 8 części – zamalowane 4. Zamalowane części są tak samo długie: 1/2 = 2/4 = 4/8.">
      <rect x="20" y="20" width="160" height="34" class="f2"/><rect x="20" y="20" width="320" height="34" class="ln"/><line x1="180" y1="20" x2="180" y2="54" class="ln"/>
      <rect x="20" y="80" width="160" height="34" class="f2"/><rect x="20" y="80" width="320" height="34" class="ln"/>
      <g class="ln"><line x1="100" y1="80" x2="100" y2="114"/><line x1="180" y1="80" x2="180" y2="114"/><line x1="260" y1="80" x2="260" y2="114"/></g>
      <rect x="20" y="140" width="160" height="34" class="f2"/><rect x="20" y="140" width="320" height="34" class="ln"/>
      <g class="ln"><line x1="60" y1="140" x2="60" y2="174"/><line x1="100" y1="140" x2="100" y2="174"/><line x1="140" y1="140" x2="140" y2="174"/><line x1="180" y1="140" x2="180" y2="174"/><line x1="220" y1="140" x2="220" y2="174"/><line x1="260" y1="140" x2="260" y2="174"/><line x1="300" y1="140" x2="300" y2="174"/></g>
      <line x1="180" y1="10" x2="180" y2="190" class="dash s2"/>
      <g class="tx-b" text-anchor="middle"><text x="372" y="44">1/2</text><text x="372" y="104">2/4</text><text x="372" y="164">4/8</text></g>
    </svg>`,
    text: `<p>Połowa paska to tyle samo, co dwie czwarte albo cztery ósme: <b>1/2 = 2/4 = 4/8</b>. To <b>ułamki równe</b> – zapis jest inny, ale część ta sama.</p>
      <p>Im więcej kawałków (większy mianownik), tym są mniejsze – więc trzeba ich wziąć więcej (większy licznik).</p>`,
    remember: 'Ułamki równe oznaczają tę samą część całości, np. 1/2 = 2/4 = 4/8.',
    hook: 'Czekolada przełamana na pół albo na ćwiartki – zjesz tyle samo, jeśli weźmiesz dwie ćwiartki zamiast połowy.',
    check: { q: 'Który ułamek jest równy 1/2?', options: ['3/6', '2/6', '1/4'], answer: 0, explain: '3 to połowa 6, więc 3/6 = 1/2.' },
  },
  {
    title: 'Rozszerzanie i skracanie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Rozszerzanie: 2/3 – licznik i mianownik razy 4 – daje 8/12. Skracanie: 6/9 – licznik i mianownik podzielone przez 3 – daje 2/3.">
      <defs><marker id="a-k4m-uld-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="22" class="tx-s" text-anchor="middle">rozszerzanie: mnożę górę i dół przez tę samą liczbę</text>
      <g class="tx-b" text-anchor="middle"><text x="110" y="56">2</text><text x="110" y="88">3</text><text x="290" y="56">8</text><text x="290" y="88">12</text></g>
      <line x1="96" y1="65" x2="124" y2="65" class="ln sw"/><line x1="274" y1="65" x2="306" y2="65" class="ln sw"/>
      <line x1="140" y1="50" x2="260" y2="50" class="ln s2 sw" marker-end="url(#a-k4m-uld-1)"/>
      <line x1="140" y1="82" x2="260" y2="82" class="ln s2 sw" marker-end="url(#a-k4m-uld-1)"/>
      <text x="200" y="42" class="tx t2" text-anchor="middle">· 4</text><text x="200" y="104" class="tx t2" text-anchor="middle">· 4</text>
      <text x="200" y="128" class="tx-s" text-anchor="middle">skracanie: dzielę górę i dół przez tę samą liczbę</text>
      <g class="tx-b" text-anchor="middle"><text x="110" y="160">6</text><text x="110" y="192">9</text><text x="290" y="160">2</text><text x="290" y="192">3</text></g>
      <line x1="96" y1="169" x2="124" y2="169" class="ln sw"/><line x1="276" y1="169" x2="304" y2="169" class="ln sw"/>
      <line x1="140" y1="154" x2="260" y2="154" class="ln s3 sw" marker-end="url(#a-k4m-uld-1)"/>
      <line x1="140" y1="186" x2="260" y2="186" class="ln s3 sw" marker-end="url(#a-k4m-uld-1)"/>
      <text x="200" y="148" class="tx t3" text-anchor="middle">: 3</text><text x="200" y="178" class="tx t3" text-anchor="middle">: 3</text>
    </svg>`,
    text: `<p><b>Rozszerzanie</b>: mnożysz licznik i mianownik przez tę samą liczbę. 2/3 = 8/12.</p>
      <p><b>Skracanie</b>: dzielisz licznik i mianownik przez tę samą liczbę. 6/9 = 2/3. Gdy już nic się nie da skrócić (np. 3/4), ułamek jest <b>nieskracalny</b>. Wyniki działań zwykle skracamy do końca.</p>`,
    remember: 'Co robisz z licznikiem, zrób z mianownikiem – wtedy wartość ułamka się nie zmienia.',
    hook: 'Ułamek jest jak huśtawka: góra i dół muszą dostać to samo, inaczej się przechyli.',
    check: { q: 'Skróć ułamek 10/15.', options: ['2/3', '5/3', '1/5'], answer: 0, explain: '10 i 15 dzielą się przez 5: (10 : 5)/(15 : 5) = 2/3.' },
  },
  {
    title: 'Dodaj liczniki – mianownik zostaje',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Pasek podzielony na 7 części: 2 części zamalowane na pomarańczowo i 3 na zielono. Razem 5 części z 7: 2/7 + 3/7 = 5/7.">
      <rect x="25" y="40" width="100" height="44" class="f2"/>
      <rect x="125" y="40" width="150" height="44" class="f3"/>
      <rect x="25" y="40" width="350" height="44" class="ln"/>
      <g class="ln"><line x1="75" y1="40" x2="75" y2="84"/><line x1="125" y1="40" x2="125" y2="84"/><line x1="175" y1="40" x2="175" y2="84"/><line x1="225" y1="40" x2="225" y2="84"/><line x1="275" y1="40" x2="275" y2="84"/><line x1="325" y1="40" x2="325" y2="84"/></g>
      <text x="75" y="28" class="tx-b t2" text-anchor="middle">2/7</text>
      <text x="200" y="28" class="tx-b t3" text-anchor="middle">3/7</text>
      <text x="200" y="124" class="tx-b" text-anchor="middle">2/7 + 3/7 = 5/7</text>
      <text x="200" y="156" class="tx-s" text-anchor="middle">kawałki dalej są „siódme” – mianownik się nie zmienia</text>
    </svg>`,
    text: `<p>Gdy ułamki mają <b>te same mianowniki</b>, dodajesz albo odejmujesz <b>tylko liczniki</b>: 2/7 + 3/7 = 5/7, 7/9 − 4/9 = 3/9 = 1/3.</p>
      <p>Jeśli wynik jest ułamkiem niewłaściwym, zamień go na liczbę mieszaną: 3/5 + 4/5 = 7/5 = 1 2/5. Całość to np. 8/8, więc 1 − 3/8 = 5/8.</p>`,
    remember: 'Te same mianowniki: dodajesz (odejmujesz) liczniki, mianownik przepisujesz.',
    hook: '2 jabłka + 3 jabłka = 5 jabłek, a nie 5 „podwójnych jabłek”. Tak samo 2 siódme + 3 siódme = 5 siódmych.',
    check: { q: 'Oblicz: 4/9 + 2/9', options: ['6/9', '6/18', '8/9'], answer: 0, explain: 'Dodajemy liczniki: 4 + 2 = 6, mianownik zostaje 9. Wynik 6/9 można skrócić do 2/3.' },
  },
  {
    title: 'Liczby mieszane – rozmień całość',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="2 i 1/4: dwa koła i ćwiartka. Jedno koło rozmieniono na 4 ćwiartki, więc mamy 1 koło i 5 ćwiartek. Zabieramy 3 ćwiartki – zostaje 1 koło i 2 ćwiartki, czyli 1 i 1/2.">
      <circle cx="50" cy="70" r="34" class="f1 s1"/>
      <g class="f1 s1"><path d="M130,70 L130,36 A34,34 0 0 1 164,70 Z"/><path d="M130,70 L164,70 A34,34 0 0 1 130,104 Z"/><path d="M130,70 L130,104 A34,34 0 0 1 96,70 Z"/><path d="M130,70 L96,70 A34,34 0 0 1 130,36 Z"/></g>
      <path d="M210,70 L210,36 A34,34 0 0 1 244,70 Z" class="f1 s1"/>
      <text x="130" y="140" class="tx-b" text-anchor="middle">2 1/4 = 1 5/4</text>
      <g class="ln s2 sw"><line x1="102" y1="42" x2="126" y2="66"/><line x1="134" y1="42" x2="158" y2="66"/><line x1="214" y1="42" x2="238" y2="66"/></g>
      <text x="330" y="66" class="tx-b" text-anchor="middle">− 3/4</text>
      <text x="330" y="100" class="tx-s" text-anchor="middle">skreślone 3 ćwiartki</text>
      <text x="210" y="184" class="tx-b t3" text-anchor="middle">zostaje 1 2/4 = 1 1/2</text>
    </svg>`,
    text: `<p>Liczby mieszane dodajesz osobno: całości do całości, ułamki do ułamków: 2 1/5 + 1 3/5 = 3 4/5.</p>
      <p>Gdy przy odejmowaniu ułamka jest za mało, <b>rozmień jedną całość</b> na kawałki: 2 1/4 = 1 5/4. Teraz 1 5/4 − 3/4 = 1 2/4 = 1 1/2. Tak samo 3 − 1/4 = 2 4/4 − 1/4 = 2 3/4.</p>`,
    remember: 'Za mało kawałków? Rozmień jedną całość: 1 = 4/4 (albo 5/5, 8/8…).',
    hook: 'Jak przy płaceniu: nie masz drobnych, to rozmieniasz złotówkę na grosze.',
    check: { q: 'Oblicz: 3 − 1/4', options: ['2 3/4', '3 3/4', '2 1/4'], answer: 0, explain: '3 = 2 4/4. 2 4/4 − 1/4 = 2 3/4.' },
  },
  {
    title: 'Różne mianowniki i oś liczbowa',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Oś liczbowa od 0 do 1 podzielona na 4 części. Strzałka od 0 do 2/4 – to 1/2. Druga strzałka o 1/4 dalej – razem 3/4.">
      <defs><marker id="a-k4m-uld-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="30" y1="120" x2="370" y2="120" class="ln sw"/>
      <g class="ln"><line x1="40" y1="108" x2="40" y2="132"/><line x1="120" y1="112" x2="120" y2="128"/><line x1="200" y1="112" x2="200" y2="128"/><line x1="280" y1="112" x2="280" y2="128"/><line x1="360" y1="108" x2="360" y2="132"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="156">0</text><text x="360" y="156">1</text></g>
      <g class="tx-s" text-anchor="middle"><text x="120" y="152">1/4</text><text x="200" y="152">2/4</text><text x="280" y="152">3/4</text></g>
      <path d="M40,104 Q120,40 196,102" class="ln s2 sw" marker-end="url(#a-k4m-uld-2)"/>
      <path d="M200,104 Q240,70 276,102" class="ln s3 sw" marker-end="url(#a-k4m-uld-2)"/>
      <text x="118" y="54" class="tx-b t2" text-anchor="middle">1/2 = 2/4</text>
      <text x="250" y="66" class="tx-b t3" text-anchor="middle">+ 1/4</text>
      <text x="200" y="184" class="tx" text-anchor="middle">1/2 + 1/4 = 2/4 + 1/4 = 3/4</text>
    </svg>`,
    text: `<p>Gdy mianowniki są różne, a jeden jest wielokrotnością drugiego, <b>rozszerz</b> ułamek o mniejszym mianowniku: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.</p>
      <p>Na <b>osi liczbowej</b> odcinek od 0 do 1 dzielisz na tyle równych części, ile wynosi mianownik. 3/4 to trzecia kreska po zerze, gdy odcinek podzielono na 4 części.</p>
      <p>Pułapka: <b>mianowników nie dodajemy</b>. 1/2 + 1/4 to nie 2/6!</p>`,
    remember: 'Różne mianowniki – najpierw sprowadź do tego samego (rozszerz), dopiero potem dodawaj.',
    hook: 'Nie dodasz złotówek do groszy bez zamiany. Najpierw zamień „połówki” na „ćwiartki”.',
    check: { q: 'Oblicz: 2/3 − 1/6', options: ['1/2', '1/3', '1/6'], answer: 0, explain: '2/3 = 4/6. 4/6 − 1/6 = 3/6 = 1/2.' },
  },
];

window.LESSONS['matematyka/pole'] = [
  {
    title: 'Pole mierzymy kwadratami',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Kwadrat 1 cm na 1 cm podzielony na 10 rzędów po 10 małych kwadracików 1 mm na 1 mm. 1 cm² = 100 mm².">
      <rect x="30" y="20" width="170" height="170" class="f4"/>
      <g class="ln-thin">
        <line x1="47" y1="20" x2="47" y2="190"/><line x1="64" y1="20" x2="64" y2="190"/><line x1="81" y1="20" x2="81" y2="190"/><line x1="98" y1="20" x2="98" y2="190"/><line x1="115" y1="20" x2="115" y2="190"/><line x1="132" y1="20" x2="132" y2="190"/><line x1="149" y1="20" x2="149" y2="190"/><line x1="166" y1="20" x2="166" y2="190"/><line x1="183" y1="20" x2="183" y2="190"/>
        <line x1="30" y1="37" x2="200" y2="37"/><line x1="30" y1="54" x2="200" y2="54"/><line x1="30" y1="71" x2="200" y2="71"/><line x1="30" y1="88" x2="200" y2="88"/><line x1="30" y1="105" x2="200" y2="105"/><line x1="30" y1="122" x2="200" y2="122"/><line x1="30" y1="139" x2="200" y2="139"/><line x1="30" y1="156" x2="200" y2="156"/><line x1="30" y1="173" x2="200" y2="173"/>
      </g>
      <rect x="30" y="20" width="170" height="170" class="ln sw"/>
      <rect x="30" y="20" width="17" height="17" class="f2 s2"/>
      <text x="220" y="40" class="tx-s">1 kwadracik = 1 mm²</text>
      <text x="220" y="90" class="tx">10 rzędów</text>
      <text x="220" y="114" class="tx">po 10 kwadracików</text>
      <text x="220" y="160" class="tx-b">1 cm² = 100 mm²</text>
    </svg>`,
    text: `<p>Pole mierzymy <b>kwadratami</b>: 1 mm², 1 cm², 1 dm², 1 m², 1 a (ar), 1 ha (hektar), 1 km². Każda jednostka to pole kwadratu o boku 1 jednostki długości (ar – 10 m, hektar – 100 m).</p>
      <p>W kwadracie 1 cm × 1 cm mieści się 10 rzędów po 10 kwadracików 1 mm × 1 mm. Dlatego <b>1 cm² = 100 mm²</b>, a nie 10 mm².</p>`,
    remember: '1 cm² = 100 mm². Jednostka pola to kwadrat, więc liczymy rzędy · kwadraciki w rzędzie.',
    hook: 'Kwadrat to tabliczka czekolady 10 na 10 – ma 100 kosteczek, nie 10.',
  },
  {
    title: 'Drabinka jednostek pola',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Drabinka jednostek pola: mm² razy 100 to cm², razy 100 to dm², razy 100 to m², razy 100 to ar, razy 100 to hektar, razy 100 to km².">
      <g class="tx-b" text-anchor="middle">
        <rect x="6" y="160" width="56" height="40" rx="8" class="f1 s1"/><text x="34" y="186">mm²</text>
        <rect x="74" y="134" width="56" height="40" rx="8" class="f1 s1"/><text x="102" y="160">cm²</text>
        <rect x="142" y="108" width="56" height="40" rx="8" class="f1 s1"/><text x="170" y="134">dm²</text>
        <rect x="210" y="82" width="56" height="40" rx="8" class="f3 s3"/><text x="238" y="108">m²</text>
        <rect x="278" y="56" width="56" height="40" rx="8" class="f3 s3"/><text x="306" y="82">a</text>
        <rect x="346" y="30" width="66" height="40" rx="8" class="f3 s3"/><text x="379" y="56">ha</text>
      </g>
      <g class="tx-s t2" text-anchor="middle"><text x="68" y="128">· 100</text><text x="136" y="102">· 100</text><text x="204" y="76">· 100</text><text x="272" y="50">· 100</text><text x="340" y="24">· 100</text></g>
      <text x="300" y="150" class="tx-s">1 m² = 10 000 cm²</text>
      <text x="300" y="172" class="tx-s">1 ha = 10 000 m²</text>
      <text x="300" y="194" class="tx-s">1 km² = 100 ha</text>
    </svg>`,
    text: `<p>Między sąsiednimi jednostkami pola mnożnik wynosi <b>100</b>: 1 cm² = 100 mm², 1 dm² = 100 cm², 1 m² = 100 dm², 1 a = 100 m², 1 ha = 100 a, 1 km² = 100 ha.</p>
      <p>Dlaczego 100, a nie 10? Bo 1 m = 10 dm, a kwadrat ma długość <b>i</b> szerokość: 10 · 10 = 100. Z tego samego powodu 1 m² = 100 · 100 cm² = <b>10 000 cm²</b>.</p>`,
    remember: 'Jednostki pola: każdy schodek to · 100. 1 m² = 10 000 cm², 1 ha = 10 000 m².',
    hook: 'Długość skacze co 10, pole – co 100 (bo liczysz w dwie strony: wzdłuż i wszerz).',
    check: { q: 'Zamień: 4 m² = ? dm²', options: ['400 dm²', '40 dm²', '4000 dm²'], answer: 0, explain: '1 m² = 100 dm², więc 4 m² = 400 dm².' },
  },
  {
    title: 'Ar i hektar',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Mały kwadrat 10 m na 10 m – 1 ar = 100 m². Duży kwadrat 100 m na 100 m – 1 hektar = 10 000 m² = 100 arów; mieści 100 małych kwadratów.">
      <rect x="20" y="70" width="40" height="40" class="f2 s2 sw"/>
      <text x="40" y="60" class="tx-s" text-anchor="middle">10 m</text>
      <text x="40" y="136" class="tx-b" text-anchor="middle">1 a</text>
      <text x="40" y="158" class="tx-s" text-anchor="middle">100 m²</text>
      <rect x="140" y="20" width="180" height="180" class="f3"/>
      <g class="ln-thin">
        <line x1="158" y1="20" x2="158" y2="200"/><line x1="176" y1="20" x2="176" y2="200"/><line x1="194" y1="20" x2="194" y2="200"/><line x1="212" y1="20" x2="212" y2="200"/><line x1="230" y1="20" x2="230" y2="200"/><line x1="248" y1="20" x2="248" y2="200"/><line x1="266" y1="20" x2="266" y2="200"/><line x1="284" y1="20" x2="284" y2="200"/><line x1="302" y1="20" x2="302" y2="200"/>
        <line x1="140" y1="38" x2="320" y2="38"/><line x1="140" y1="56" x2="320" y2="56"/><line x1="140" y1="74" x2="320" y2="74"/><line x1="140" y1="92" x2="320" y2="92"/><line x1="140" y1="110" x2="320" y2="110"/><line x1="140" y1="128" x2="320" y2="128"/><line x1="140" y1="146" x2="320" y2="146"/><line x1="140" y1="164" x2="320" y2="164"/><line x1="140" y1="182" x2="320" y2="182"/>
      </g>
      <rect x="140" y="20" width="180" height="180" class="ln s3 sw"/>
      <rect x="140" y="20" width="18" height="18" class="f2 s2"/>
      <text x="230" y="214" class="tx-s" text-anchor="middle">100 m</text>
      <text x="370" y="96" class="tx-b" text-anchor="middle">1 ha</text>
      <text x="370" y="120" class="tx-s" text-anchor="middle">100 a</text>
      <text x="370" y="140" class="tx-s" text-anchor="middle">10 000 m²</text>
    </svg>`,
    text: `<p><b>Ar</b> (a) to pole kwadratu o boku <b>10 m</b>: 10 · 10 = 100 m². W arach podaje się np. powierzchnię działki: działka 20 m × 30 m ma 600 m² = 6 a.</p>
      <p><b>Hektar</b> (ha) to pole kwadratu o boku <b>100 m</b>: 100 · 100 = 10 000 m² = 100 a. W hektarach podaje się powierzchnię pól, lasów i parków.</p>`,
    remember: '1 a = 100 m² (kwadrat 10 m × 10 m). 1 ha = 100 a = 10 000 m² (kwadrat 100 m × 100 m).',
    hook: 'Hektar to „sto arów” – „hekto” znaczy sto, jak w hektolitrze (100 litrów).',
    check: { q: 'Boisko ma 100 m na 50 m. Ile to arów?', options: ['50 a', '5 a', '500 a'], answer: 0, explain: '100 · 50 = 5000 m². 5000 : 100 = 50 a.' },
  },
  {
    title: 'Figury złożone – podziel albo odejmij',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dwa razy ta sama figura w kształcie litery L: prostokąt 8 m na 5 m bez rogu 3 m na 2 m. Sposób 1: podział na prostokąty 5 na 5 i 3 na 3. Sposób 2: duży prostokąt 8 na 5 minus róg 3 na 2.">
      <path d="M20,40 L120,40 L120,80 L180,80 L180,140 L20,140 Z" class="f1"/>
      <line x1="120" y1="80" x2="120" y2="140" class="dash s2 sw"/>
      <path d="M20,40 L120,40 L120,80 L180,80 L180,140 L20,140 Z" class="ln sw" fill="none"/>
      <text x="70" y="98" class="tx-s" text-anchor="middle">5 · 5 = 25</text>
      <text x="151" y="108" class="tx-s" text-anchor="middle">3 · 3</text><text x="151" y="126" class="tx-s" text-anchor="middle">= 9</text>
      <text x="100" y="168" class="tx" text-anchor="middle">25 + 9 = 34 m²</text>
      <text x="100" y="28" class="tx-s" text-anchor="middle">podziel i dodaj</text>
      <path d="M230,40 L330,40 L330,80 L390,80 L390,140 L230,140 Z" class="f1"/>
      <rect x="330" y="40" width="60" height="40" class="f2 s2 dash"/>
      <path d="M230,40 L330,40 L330,80 L390,80 L390,140 L230,140 Z" class="ln sw" fill="none"/>
      <text x="360" y="66" class="tx-s" text-anchor="middle">3 · 2</text>
      <text x="310" y="168" class="tx" text-anchor="middle">40 − 6 = 34 m²</text>
      <text x="310" y="28" class="tx-s" text-anchor="middle">dorysuj i odejmij</text>
      <text x="310" y="194" class="tx-s" text-anchor="middle">8 · 5 = 40</text>
    </svg>`,
    text: `<p>Figurę złożoną z prostokątów możesz <b>podzielić</b> na prostokąty i dodać ich pola. Możesz też <b>dorysować</b> brakujący kawałek do dużego prostokąta i odjąć jego pole.</p>
      <p>Trawnik 8 m × 5 m bez rogu 3 m × 2 m: 8 · 5 − 3 · 2 = 40 − 6 = <b>34 m²</b>. Podział też daje 34: 5 · 5 + 3 · 3 = 25 + 9 = 34.</p>`,
    remember: 'Figura złożona: podziel na prostokąty i dodaj albo dorysuj do prostokąta i odejmij.',
    hook: 'Dwa sposoby – jeden wynik. Policz oboma, a od razu masz sprawdzenie.',
  },
  {
    title: 'Od pola do boku i pułapki',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Prostokąt 16 na 1 kratkę i kwadrat 4 na 4 kratki. Oba mają pole 16, ale obwody 34 i 16.">
      <rect x="10" y="40" width="256" height="16" class="f2 s2 sw"/>
      <rect x="300" y="40" width="64" height="64" class="f3 s3 sw"/>
      <text x="138" y="30" class="tx-s" text-anchor="middle">16 cm × 1 cm</text>
      <text x="332" y="30" class="tx-s" text-anchor="middle">4 cm × 4 cm</text>
      <text x="138" y="90" class="tx" text-anchor="middle">pole 16 cm²</text>
      <text x="138" y="114" class="tx" text-anchor="middle">obwód 34 cm</text>
      <text x="332" y="130" class="tx" text-anchor="middle">pole 16 cm²</text>
      <text x="332" y="154" class="tx" text-anchor="middle">obwód 16 cm</text>
      <text x="210" y="190" class="tx-b" text-anchor="middle">to samo pole ≠ ten sam obwód</text>
    </svg>`,
    text: `<p>Z pola możesz obliczyć bok. Kwadrat ma pole 64 cm² – szukasz liczby, która razy ona sama daje 64: 8 · 8 = 64, więc bok ma <b>8 cm</b>. Prostokąt ma pole 36 cm² i bok 9 cm – drugi bok: 36 : 9 = <b>4 cm</b>.</p>
      <p>Pułapki: obwód podajesz w cm (m), a pole w cm² (m²). Figury o tym samym polu mogą mieć różne obwody.</p>`,
    remember: 'Bok prostokąta = pole : drugi bok. Pole w jednostkach z kwadracikiem (cm², m²).',
    hook: 'Pole to „ile dywanu”, obwód to „ile listwy dookoła” – to dwa różne zakupy.',
    check: { q: 'Kwadrat ma pole 49 cm². Jaki ma bok?', options: ['7 cm', '12 cm', '24 cm'], answer: 0, explain: '7 · 7 = 49, więc bok ma 7 cm.' },
  },
];

window.LESSONS['matematyka/rownania'] = [
  {
    title: 'Litera zamiast liczby',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tłumaczenie słów na wyrażenia: o 5 większa od x – x + 5; 3 razy większa od n – 3 · n; brat starszy o 3 lata od Ani, która ma x lat – x + 3.">
      <defs><marker id="a-k4m-row-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx">
        <rect x="8" y="14" width="250" height="46" rx="10" class="f4 s4"/><text x="20" y="43">o 5 większa od x</text>
        <rect x="8" y="76" width="250" height="46" rx="10" class="f4 s4"/><text x="20" y="105">3 razy większa od n</text>
        <rect x="8" y="138" width="250" height="46" rx="10" class="f4 s4"/><text x="20" y="167">brat o 3 lata starszy</text>
      </g>
      <g class="ln s2 sw"><line x1="264" y1="37" x2="314" y2="37" marker-end="url(#a-k4m-row-1)"/><line x1="264" y1="99" x2="314" y2="99" marker-end="url(#a-k4m-row-1)"/><line x1="264" y1="161" x2="314" y2="161" marker-end="url(#a-k4m-row-1)"/></g>
      <g class="tx-b" text-anchor="middle"><text x="366" y="43">x + 5</text><text x="366" y="105">3 · n</text><text x="366" y="167">x + 3</text></g>
    </svg>`,
    text: `<p>Gdy nie znamy liczby albo może być różna, zapisujemy ją <b>literą</b> (x, a, n…). Zapis z literami i znakami działań to <b>wyrażenie algebraiczne</b>.</p>
      <p>„O 5 większa” to dodawanie: x + 5. „3 razy większa” to mnożenie: 3 · n. Ania ma x lat, brat jest o 3 lata starszy: x + 3. Zeszyt kosztuje z zł – 4 zeszyty kosztują 4 · z zł.</p>`,
    remember: '„O … więcej/mniej” – dodawanie/odejmowanie. „… razy więcej/mniej” – mnożenie/dzielenie.',
    hook: 'Litera to pudełko z liczbą w środku – jeszcze nie wiesz, co w nim jest, ale możesz z nim liczyć.',
    check: { q: 'Jak zapisać liczbę o 4 mniejszą od a?', options: ['a − 4', 'a : 4', '4 · a'], answer: 0, explain: '„O 4 mniejsza” – odejmujemy 4: a − 4.' },
  },
  {
    title: 'Podstaw i policz',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Wyrażenie 2 · a + 3. Za a wstawiamy 4: 2 · 4 + 3 = 8 + 3 = 11.">
      <defs><marker id="a-k4m-row-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="210" y="40" class="tx-b" text-anchor="middle">2 · <tspan class="t2">a</tspan> + 3</text>
      <rect x="20" y="62" width="90" height="40" rx="10" class="f2 s2"/>
      <text x="65" y="88" class="tx-b" text-anchor="middle">a = 4</text>
      <line x1="114" y1="82" x2="160" y2="82" class="ln s2 sw" marker-end="url(#a-k4m-row-2)"/>
      <text x="280" y="90" class="tx-b" text-anchor="middle">2 · <tspan class="t2">4</tspan> + 3</text>
      <text x="280" y="130" class="tx" text-anchor="middle">= 8 + 3</text>
      <text x="280" y="166" class="tx-b t3" text-anchor="middle">= 11</text>
    </svg>`,
    text: `<p>Żeby obliczyć <b>wartość wyrażenia</b>, wstaw liczbę w miejsce litery i policz, pamiętając o kolejności działań. Dla a = 4: 2 · 4 + 3 = 8 + 3 = 11.</p>
      <p><b>Wzór</b> to wyrażenie, które mówi, jak coś obliczyć. Obwód kwadratu: Ob = 4 · a. Dla a = 6 cm: Ob = 4 · 6 = 24 cm.</p>`,
    remember: 'Wartość wyrażenia: podstaw liczbę za literę i policz (najpierw nawiasy, potem mnożenie i dzielenie, na końcu dodawanie i odejmowanie).',
    hook: 'Wyrażenie to przepis, a liczba – składnik. Wkładasz składnik i „pieczesz” wynik.',
    check: { q: 'Oblicz wartość wyrażenia 3 · b − 5 dla b = 4.', options: ['7', '17', '−3'], answer: 0, explain: '3 · 4 − 5 = 12 − 5 = 7.' },
  },
  {
    title: 'Równanie jak waga',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Waga szalkowa w równowadze: na lewej szalce worek x i odważnik 3 kg, na prawej 8 kg. Zapis: x + 3 = 8, więc x = 5.">
      <path d="M180,170 L220,170 L206,70 L194,70 Z" class="f4 s4"/>
      <line x1="70" y1="70" x2="330" y2="70" class="ln sw"/>
      <circle cx="200" cy="70" r="6" class="t2"/>
      <line x1="100" y1="70" x2="100" y2="130" class="ln-thin"/>
      <line x1="300" y1="70" x2="300" y2="130" class="ln-thin"/>
      <path d="M50,130 L150,130 L140,142 L60,142 Z" class="f1 s1"/>
      <path d="M250,130 L350,130 L340,142 L260,142 Z" class="f1 s1"/>
      <rect x="60" y="88" width="44" height="42" rx="12" class="f2 s2"/>
      <text x="82" y="116" class="tx-b" text-anchor="middle">x</text>
      <rect x="110" y="102" width="34" height="28" rx="4" class="f5 s5"/>
      <text x="127" y="122" class="tx-s" text-anchor="middle">3 kg</text>
      <rect x="278" y="94" width="44" height="36" rx="4" class="f5 s5"/>
      <text x="300" y="117" class="tx" text-anchor="middle">8 kg</text>
      <text x="200" y="200" class="tx-b" text-anchor="middle">x + 3 = 8   →   x = 5</text>
    </svg>`,
    text: `<p><b>Równanie</b> to równość z <b>niewiadomą</b>, np. x + 3 = 8. Jest jak waga w równowadze: po obu stronach jest tyle samo.</p>
      <p><b>Rozwiązanie</b> równania to liczba, która wstawiona za x daje prawdziwą równość. Tu x = 5, bo 5 + 3 = 8. Na wadze: zdejmij z obu stron po 3 kg – zostanie worek x i 5 kg.</p>`,
    remember: 'Rozwiązanie równania to liczba, dla której obie strony są równe.',
    hook: 'Waga musi zostać w równowadze – co zabierzesz z jednej szalki, zabierz z drugiej.',
  },
  {
    title: 'Działanie odwrotne',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Pary działań odwrotnych: dodawanie i odejmowanie, mnożenie i dzielenie. Przykłady: x + 7 = 15, więc x = 15 − 7 = 8; x − 6 = 9, więc x = 9 + 6 = 15; 4 · x = 28, więc x = 28 : 4 = 7; x : 3 = 5, więc x = 5 · 3 = 15.">
      <g class="tx">
        <rect x="8" y="10" width="404" height="44" rx="10" class="f1 s1"/>
        <text x="24" y="38">x + 7 = 15</text><text x="180" y="38" class="t2">x = 15 − 7 = 8</text>
        <rect x="8" y="62" width="404" height="44" rx="10" class="f1 s1"/>
        <text x="24" y="90">x − 6 = 9</text><text x="180" y="90" class="t2">x = 9 + 6 = 15</text>
        <rect x="8" y="114" width="404" height="44" rx="10" class="f3 s3"/>
        <text x="24" y="142">4 · x = 28</text><text x="180" y="142" class="t2">x = 28 : 4 = 7</text>
        <rect x="8" y="166" width="404" height="44" rx="10" class="f3 s3"/>
        <text x="24" y="194">x : 3 = 5</text><text x="180" y="194" class="t2">x = 5 · 3 = 15</text>
      </g>
    </svg>`,
    text: `<p>Proste równania rozwiązujesz <b>działaniem odwrotnym</b>: dodawanie „odkręca” odejmowanie, a mnożenie – dzielenie (i odwrotnie).</p>
      <ul><li>x + 7 = 15 → x = 15 − 7 = 8</li><li>x − 6 = 9 → x = 9 + 6 = 15</li><li>4 · x = 28 → x = 28 : 4 = 7</li><li>x : 3 = 5 → x = 5 · 3 = 15</li></ul>
      <p>Uwaga na 20 − x = 12: pytasz „ile odjąć od 20, żeby zostało 12?” – x = 20 − 12 = 8.</p>`,
    remember: 'Dodawanie ↔ odejmowanie, mnożenie ↔ dzielenie. Po rozwiązaniu zawsze sprawdź, wstawiając wynik.',
    hook: 'Działanie odwrotne to cofanie filmu: ktoś dodał 7 – cofasz, odejmując 7.',
    check: { q: 'Rozwiąż: 6 · x = 42', options: ['x = 7', 'x = 36', 'x = 48'], answer: 0, explain: 'x = 42 : 6 = 7. Sprawdzenie: 6 · 7 = 42.' },
  },
  {
    title: 'Od zadania do odpowiedzi',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Cztery kroki: 1. oznacz niewiadomą – x to cena długopisu; 2. ułóż równanie – 3 · x = 12; 3. rozwiąż – x = 4; 4. sprawdź i odpowiedz – 3 · 4 = 12, długopis kosztuje 4 zł.">
      <g class="tx-s">
        <rect x="8" y="8" width="200" height="90" rx="12" class="f4 s4"/>
        <text x="20" y="32" class="tx-b">1. oznacz</text><text x="20" y="58">x – cena jednego</text><text x="20" y="78">długopisu</text>
        <rect x="216" y="8" width="196" height="90" rx="12" class="f2 s2"/>
        <text x="228" y="32" class="tx-b">2. ułóż równanie</text><text x="228" y="58">3 długopisy – 12 zł</text><text x="228" y="80" class="tx">3 · x = 12</text>
        <rect x="8" y="110" width="200" height="90" rx="12" class="f1 s1"/>
        <text x="20" y="134" class="tx-b">3. rozwiąż</text><text x="20" y="160">x = 12 : 3</text><text x="20" y="182" class="tx">x = 4</text>
        <rect x="216" y="110" width="196" height="90" rx="12" class="f3 s3"/>
        <text x="228" y="134" class="tx-b">4. sprawdź</text><text x="228" y="160">3 · 4 = 12 ✓</text><text x="228" y="182">Odp. 4 zł</text>
      </g>
    </svg>`,
    text: `<p>Zadanie: „Bartek kupił 3 jednakowe długopisy i zapłacił 12 zł. Ile kosztował jeden?”</p>
      <ol><li>Oznacz niewiadomą: x – cena jednego długopisu.</li><li>Ułóż równanie z treści: 3 · x = 12.</li><li>Rozwiąż: x = 12 : 3 = 4.</li><li>Sprawdź (3 · 4 = 12) i napisz odpowiedź: długopis kosztuje 4 zł.</li></ol>`,
    remember: 'Oznacz – ułóż równanie – rozwiąż – sprawdź – odpowiedz.',
    hook: 'Jak detektyw: x to tajemniczy podejrzany, równanie to dowody, a sprawdzenie – przyznanie się do winy.',
    check: { q: 'Pomyślałem liczbę, dodałem 12 i otrzymałem 30. Jaką liczbę pomyślałem?', options: ['18', '42', '12'], answer: 0, explain: 'x + 12 = 30, więc x = 30 − 12 = 18. Sprawdzenie: 18 + 12 = 30.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/dziesietne-dzialania'] = [
  {
    title: 'Mnożenie przez 10, 100, 1000 – przecinek w prawo',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="3,45 razy 10 to 34,5 – przecinek o 1 miejsce w prawo; razy 100 to 345 – o 2 miejsca; razy 1000 to 3450 – o 3 miejsca">
      <rect x="10" y="10" width="380" height="44" rx="10" class="f1 s1"/>
      <rect x="10" y="62" width="380" height="44" rx="10" class="f1 s1"/>
      <rect x="10" y="114" width="380" height="44" rx="10" class="f1 s1"/>
      <text x="26" y="38" class="tx">3,45 · 10</text><text x="205" y="37" class="tx-s" text-anchor="middle">→ o 1 miejsce</text><text x="374" y="38" class="tx-b" text-anchor="end">= 34,5</text>
      <text x="26" y="90" class="tx">3,45 · 100</text><text x="205" y="89" class="tx-s" text-anchor="middle">→ o 2 miejsca</text><text x="374" y="90" class="tx-b" text-anchor="end">= 345</text>
      <text x="26" y="142" class="tx">3,45 · 1000</text><text x="205" y="141" class="tx-s" text-anchor="middle">→ o 3 miejsca</text><text x="374" y="142" class="tx-b" text-anchor="end">= 345<tspan class="t2">0</tspan></text>
    </svg>`,
    text: `<p>Mnożenie przez 10 robi liczbę 10 razy większą. W ułamku dziesiętnym wystarczy <b>przesunąć przecinek w prawo</b> – o tyle miejsc, ile zer ma mnożnik.</p>
      <p>Gdy zabraknie cyfr, dopisujesz zera: 3,45 · 1000 = 3450.</p>`,
    remember: '· 10 – o 1 miejsce w prawo, · 100 – o 2, · 1000 – o 3.',
    hook: 'Liczy się zera: ile zer w mnożniku, tyle skoków robi przecinek.',
    check: { q: 'Ile wynosi 0,6 · 100?', options: ['6', '60', '0,006'], answer: 1, explain: 'Przecinek o dwa miejsca w prawo: 0,60 → 60.' },
  },
  {
    title: 'Dzielenie przez 10, 100, 1000 – przecinek w lewo',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="45,6 podzielone przez 10 to 4,56; przez 100 to 0,456; 8 podzielone przez 100 to 0,08">
      <rect x="10" y="10" width="380" height="44" rx="10" class="f2 s2"/>
      <rect x="10" y="62" width="380" height="44" rx="10" class="f2 s2"/>
      <rect x="10" y="114" width="380" height="44" rx="10" class="f2 s2"/>
      <text x="26" y="38" class="tx">45,6 : 10</text><text x="205" y="37" class="tx-s" text-anchor="middle">← o 1 miejsce</text><text x="374" y="38" class="tx-b" text-anchor="end">= 4,56</text>
      <text x="26" y="90" class="tx">45,6 : 100</text><text x="205" y="89" class="tx-s" text-anchor="middle">← o 2 miejsca</text><text x="374" y="90" class="tx-b" text-anchor="end">= 0,456</text>
      <text x="26" y="142" class="tx">8 : 100</text><text x="205" y="141" class="tx-s" text-anchor="middle">← o 2 miejsca</text><text x="374" y="142" class="tx-b" text-anchor="end">= <tspan class="t2">0,0</tspan>8</text>
    </svg>`,
    text: `<p>Dzielenie robi liczbę mniejszą, więc przecinek idzie <b>w lewo</b> – znów o tyle miejsc, ile zer ma dzielnik.</p>
      <p>Liczba bez przecinka ma go „ukrytego” na końcu: 8 = 8,0. Brakujące miejsca przed cyframi wypełniasz zerami: 8 : 100 = 0,08.</p>`,
    remember: ': 10 – o 1 miejsce w lewo, : 100 – o 2, : 1000 – o 3.',
    hook: 'Mnożenie – liczba rośnie, przecinek ucieka w prawo. Dzielenie – liczba maleje, przecinek cofa się w lewo.',
    check: { q: 'Ile wynosi 7 : 1000?', options: ['0,07', '0,007', '7000'], answer: 1, explain: '7 = 7,0. Przecinek o trzy miejsca w lewo: 0,007.' },
  },
  {
    title: 'Zamiana jednostek to też mnożenie i dzielenie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Schodki jednostek długości: km razy 1000 to m, m razy 100 to cm, cm razy 10 to mm; w drugą stronę dzielenie. Przykłady: 2,5 m to 250 cm; 350 g to 0,35 kg.">
      <defs><marker id="a-m9-dd-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker>
      <marker id="a-m9-dd-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <rect x="10" y="60" width="65" height="44" rx="8" class="f3 s3"/><rect x="115" y="60" width="65" height="44" rx="8" class="f3 s3"/>
      <rect x="220" y="60" width="65" height="44" rx="8" class="f3 s3"/><rect x="325" y="60" width="65" height="44" rx="8" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="42" y="88">km</text><text x="147" y="88">m</text><text x="252" y="88">cm</text><text x="357" y="88">mm</text></g>
      <g class="ln"><path d="M78,72 L112,72" marker-end="url(#a-m9-dd-1)"/><path d="M183,72 L217,72" marker-end="url(#a-m9-dd-1)"/><path d="M288,72 L322,72" marker-end="url(#a-m9-dd-1)"/>
      <path d="M112,94 L78,94" marker-end="url(#a-m9-dd-2)"/><path d="M217,94 L183,94" marker-end="url(#a-m9-dd-2)"/><path d="M322,94 L288,94" marker-end="url(#a-m9-dd-2)"/></g>
      <g class="tx-s t2" text-anchor="middle"><text x="95" y="48">· 1000</text><text x="200" y="48">· 100</text><text x="305" y="48">· 10</text></g>
      <g class="tx-s t1" text-anchor="middle"><text x="95" y="126">: 1000</text><text x="200" y="126">: 100</text><text x="305" y="126">: 10</text></g>
      <text x="200" y="160" class="tx" text-anchor="middle">2,5 m = 2,5 · 100 cm = 250 cm</text>
      <text x="200" y="188" class="tx" text-anchor="middle">350 g = 350 : 1000 kg = 0,35 kg</text>
    </svg>`,
    text: `<p>Przechodzisz na <b>mniejszą</b> jednostkę – będzie jej więcej, więc <b>mnożysz</b>: 2,5 m = 250 cm.</p>
      <p>Przechodzisz na <b>większą</b> jednostkę – będzie jej mniej, więc <b>dzielisz</b>: 350 g = 0,35 kg (bo 1 kg = 1000 g).</p>`,
    remember: 'Na mniejszą jednostkę – mnożysz. Na większą – dzielisz.',
    hook: 'Drobne monety: 1 zł zamieniasz na 100 groszy – mniejszych jednostek zawsze jest więcej.',
    check: { q: 'Ile to milimetrów: 4,2 cm?', options: ['42 mm', '0,42 mm', '420 mm'], answer: 0, explain: '1 cm = 10 mm, więc mnożysz przez 10: 4,2 · 10 = 42 mm.' },
  },
  {
    title: 'Mnożenie – licz cyfry po przecinku',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwa przykłady. 1,25 razy 3: 125 razy 3 to 375, dwie cyfry po przecinku, wynik 3,75. 0,3 razy 0,2: 3 razy 2 to 6, razem dwie cyfry po przecinku, wynik 0,06.">
      <defs><marker id="a-m9-dd-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="185" height="180" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f5 s5"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">1,25 · 3</text><text x="297" y="40">0,3 · 0,2</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="62">2 cyfry po przecinku</text><text x="297" y="62">1 + 1 = 2 cyfry</text></g>
      <g class="ln"><path d="M102,70 L102,94" marker-end="url(#a-m9-dd-3)"/><path d="M297,70 L297,94" marker-end="url(#a-m9-dd-3)"/>
      <path d="M102,132 L102,156" marker-end="url(#a-m9-dd-3)"/><path d="M297,132 L297,156" marker-end="url(#a-m9-dd-3)"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="120">125 · 3 = 375</text><text x="297" y="120">3 · 2 = 6</text></g>
      <g class="tx-b t2" text-anchor="middle"><text x="102" y="180">3,75</text><text x="297" y="180">0,06</text></g>
    </svg>`,
    text: `<p>Mnożysz tak, jakby przecinków nie było. Potem w wyniku oddzielasz przecinkiem <b>tyle cyfr od końca, ile razem było po przecinku w czynnikach</b>.</p>
      <p>1,25 · 3 → 375 → dwie cyfry → 3,75. A 0,3 · 0,2 → 6 → dwie cyfry → 0,06 (brakujące miejsce zajmuje zero).</p>`,
    remember: 'Wynik ma tyle cyfr po przecinku, ile razem mają oba czynniki.',
    hook: 'Sprawdź szacowaniem: 1,25 · 3 to „trochę ponad 3” – więc 3,75, a nie 37,5.',
    check: { q: 'Ile wynosi 0,2 · 4?', options: ['8', '0,08', '0,8'], answer: 2, explain: '2 · 4 = 8, jedna cyfra po przecinku: 0,8.' },
  },
  {
    title: 'Dzielenie przez liczbę naturalną – i sprawdzenie',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="12,60 zł dzielone po równo na 3 osoby: każda dostaje 4,20 zł. Sprawdzenie: 4,20 razy 3 to 12,60.">
      <defs><marker id="a-m9-dd-4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="130" y="10" width="140" height="44" rx="10" class="f4 s4"/>
      <text x="200" y="39" class="tx-b" text-anchor="middle">12,60 zł</text>
      <g class="ln"><path d="M170,56 L80,96" marker-end="url(#a-m9-dd-4)"/><path d="M200,56 L200,96" marker-end="url(#a-m9-dd-4)"/><path d="M230,56 L320,96" marker-end="url(#a-m9-dd-4)"/></g>
      <rect x="20" y="102" width="110" height="44" rx="10" class="f3 s3"/><rect x="145" y="102" width="110" height="44" rx="10" class="f3 s3"/><rect x="270" y="102" width="110" height="44" rx="10" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="75" y="131">4,20 zł</text><text x="200" y="131">4,20 zł</text><text x="325" y="131">4,20 zł</text></g>
      <text x="200" y="176" class="tx" text-anchor="middle">12,60 : 3 = 4,20</text>
      <text x="200" y="200" class="tx-s" text-anchor="middle">sprawdzenie: 4,20 · 3 = 12,60 ✓</text>
    </svg>`,
    text: `<p>Dzielisz jak liczby naturalne, a przecinek w wyniku stawiasz <b>w chwili, gdy „przechodzisz” przez przecinek</b> w dzielnej: 4,8 : 2 = 2,4 (48 dziesiątych : 2 = 24 dziesiąte).</p>
      <p>Czasem trzeba dopisać zera: 1 : 4 = 1,00 : 4 = 0,25. Wynik zawsze sprawdzisz mnożeniem.</p>
      <p>Uwaga na pułapki: przy mnożeniu przez 10, 100, 1000 przecinek idzie w <b>prawo</b>, przy dzieleniu – w <b>lewo</b>; szacuj, czy wynik ma sens.</p>`,
    remember: 'Dzielenie sprawdzasz mnożeniem: wynik · dzielnik = dzielna.',
    check: { q: 'Ile wynosi 6,3 : 7?', options: ['9', '0,9', '0,09'], answer: 1, explain: '63 dziesiąte : 7 = 9 dziesiątych, czyli 0,9. Sprawdzenie: 0,9 · 7 = 6,3.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/procenty'] = [
  {
    title: 'Procent, czyli setna część',
    widget: { type: 'procent', p: 25, of: 200 },
    text: `<p>Podziel całość na <b>100 równych części</b>. Jedna taka część to <b>1 procent</b> – zapisujemy <b>1%</b>. Cała siatka to 100%.</p>
      <p>Procenty spotkasz w sklepie („−20%”), na baterii telefonu (35%) i w wynikach sprawdzianu. Przesuń suwak i zobacz, ile kratek to 25%, a ile 50%.</p>`,
    remember: '1% = 1/100 całości. 100% to cała całość.',
    hook: '„Procent” znaczy „na sto” – jak cent, setna część dolara.',
    check: { q: 'Ile kratek ze 100 zamalujesz, żeby było 40%?', options: ['4', '40', '60'], answer: 1, explain: 'Każda kratka to 1%, więc 40% to 40 kratek.' },
  },
  {
    title: 'Procenty, które warto znać na pamięć',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Paski: 100% to cały pasek – całość; 50% to połowa paska – 1/2; 25% to ćwierć – 1/4; 10% to jedna dziesiąta – 1/10">
      <g class="tx-b" text-anchor="end"><text x="60" y="41">100%</text><text x="60" y="87">50%</text><text x="60" y="133">25%</text><text x="60" y="179">10%</text></g>
      <rect x="70" y="18" width="240" height="32" class="f2 s2"/>
      <rect x="70" y="64" width="120" height="32" class="f2 s2"/><rect x="70" y="64" width="240" height="32" class="ln" fill="none"/>
      <rect x="70" y="110" width="60" height="32" class="f2 s2"/><rect x="70" y="110" width="240" height="32" class="ln" fill="none"/>
      <rect x="70" y="156" width="24" height="32" class="f2 s2"/><rect x="70" y="156" width="240" height="32" class="ln" fill="none"/>
      <g class="tx"><text x="322" y="40">całość</text><text x="322" y="86">1/2</text><text x="322" y="132">1/4</text><text x="322" y="178">1/10</text></g>
    </svg>`,
    text: `<p>Kilka procentów to znane ci ułamki: <b>50% to połowa</b>, <b>25% to ćwierć</b>, <b>10% to jedna dziesiąta</b>, a <b>75% to trzy czwarte</b>.</p>
      <p>Wszystkie części razem dają 100%. Jeśli zjadłeś 25% pizzy, zostało 75%.</p>`,
    remember: '50% = 1/2, 25% = 1/4, 75% = 3/4, 10% = 1/10, 1% = 1/100.',
    hook: 'Ćwierć pizzy to 25% – cztery kawałki po 25% dają całą pizzę.',
    check: { q: 'Jaką częścią całości jest 10%?', options: ['1/10', '1/100', '1/2'], answer: 0, explain: '10% = 10/100 = 1/10 – jedna dziesiąta.' },
  },
  {
    title: 'Jak policzyć procent z liczby?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="50% z 30 zł to 30 dzielone przez 2, czyli 15 zł. 25% z 40 to 40 przez 4, czyli 10. 10% z 70 to 70 przez 10, czyli 7. 1% z 300 to 300 przez 100, czyli 3.">
      <rect x="10" y="8" width="380" height="44" rx="10" class="f1 s1"/><rect x="10" y="60" width="380" height="44" rx="10" class="f3 s3"/>
      <rect x="10" y="112" width="380" height="44" rx="10" class="f4 s4"/><rect x="10" y="164" width="380" height="44" rx="10" class="f5 s5"/>
      <g class="tx"><text x="24" y="36">50% z 30 zł</text><text x="24" y="88">25% z 40</text><text x="24" y="140">10% z 70</text><text x="24" y="192">1% z 300</text></g>
      <g class="tx-s" text-anchor="middle"><text x="210" y="35">→ 30 : 2 →</text><text x="210" y="87">→ 40 : 4 →</text><text x="210" y="139">→ 70 : 10 →</text><text x="210" y="191">→ 300 : 100 →</text></g>
      <g class="tx-b t2" text-anchor="end"><text x="376" y="36">15 zł</text><text x="376" y="88">10</text><text x="376" y="140">7</text><text x="376" y="192">3</text></g>
    </svg>`,
    text: `<p>Każdy z tych procentów to dzielenie:</p>
      <ul><li>50% – dzielisz przez 2,</li><li>25% – przez 4,</li><li>10% – przez 10,</li><li>1% – przez 100.</li></ul>`,
    remember: '50% → : 2, 25% → : 4, 10% → : 10, 1% → : 100.',
    hook: '10% to „skreśl ostatnie zero”: 10% z 70 = 7, 10% z 300 = 30.',
    check: { q: 'Ile to jest 25% z 20?', options: ['5', '25', '80'], answer: 0, explain: '25% to ćwierć: 20 : 4 = 5.' },
  },
  {
    title: '20%, 30%, 75% – składaj z klocków',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Pasek 50 zł podzielony na 10 części po 5 zł; 2 części zamalowane: 20% z 50 zł to 10 zł. Pasek 80 podzielony na 4 ćwiartki po 20; 3 zamalowane: 75% z 80 to 60.">
      <text x="200" y="22" class="tx-s" text-anchor="middle">50 zł = 10 części po 5 zł (każda to 10%)</text>
      <g class="ln-thin"><rect x="20" y="32" width="36" height="34"/><rect x="56" y="32" width="36" height="34"/><rect x="92" y="32" width="36" height="34"/><rect x="128" y="32" width="36" height="34"/><rect x="164" y="32" width="36" height="34"/><rect x="200" y="32" width="36" height="34"/><rect x="236" y="32" width="36" height="34"/><rect x="272" y="32" width="36" height="34"/><rect x="308" y="32" width="36" height="34"/><rect x="344" y="32" width="36" height="34"/></g>
      <g class="f2 s2"><rect x="20" y="32" width="36" height="34"/><rect x="56" y="32" width="36" height="34"/></g>
      <rect x="20" y="32" width="360" height="34" class="ln" fill="none"/>
      <text x="200" y="96" class="tx-b" text-anchor="middle">20% = 2 · 5 zł = 10 zł</text>
      <text x="200" y="128" class="tx-s" text-anchor="middle">80 = 4 ćwiartki po 20 (każda to 25%)</text>
      <g class="f3 s3"><rect x="20" y="138" width="90" height="34"/><rect x="110" y="138" width="90" height="34"/><rect x="200" y="138" width="90" height="34"/></g>
      <rect x="290" y="138" width="90" height="34" class="ln-thin"/>
      <rect x="20" y="138" width="360" height="34" class="ln" fill="none"/>
      <g class="tx" text-anchor="middle"><text x="65" y="161">20</text><text x="155" y="161">20</text><text x="245" y="161">20</text><text x="335" y="161">20</text></g>
      <text x="200" y="204" class="tx-b" text-anchor="middle">75% = 3 · 20 = 60</text>
    </svg>`,
    text: `<p>Trudniejszy procent złóż z łatwych „klocków”. Policz najpierw 10% albo 25%, a potem pomnóż.</p>
      <p>20% to dwa razy po 10%, 30% – trzy razy po 10%, 75% – trzy razy po 25%.</p>`,
    remember: 'Najpierw 10% (albo 25%), potem pomnóż przez liczbę „klocków”.',
    hook: 'Jak z klocków LEGO: z jednego małego klocka 10% zbudujesz 20%, 30%, 40%…',
    check: { q: 'Ile to jest 30% z 60?', options: ['18', '30', '20'], answer: 0, explain: '10% z 60 = 6. 30% to trzy razy więcej: 3 · 6 = 18.' },
  },
  {
    title: 'Promocje w sklepie – i pułapki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Metka: kurtka 60 zł, rabat minus 10%, obniżka 6 zł, nowa cena 54 zł. Pod spodem: buty 80 zł minus 25% to 60 zł, taniej niż 70 zł bez rabatu.">
      <defs><marker id="a-m9-pr-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="14" y="14" width="110" height="60" rx="10" class="f4 s4"/>
      <text x="69" y="52" class="tx-b" text-anchor="middle">60 zł</text>
      <line x1="34" y1="46" x2="104" y2="38" class="ln s2 sw"/>
      <path d="M130,44 L168,44" class="ln" marker-end="url(#a-m9-pr-1)"/>
      <rect x="174" y="20" width="80" height="48" rx="24" class="f2 s2"/>
      <text x="214" y="50" class="tx-b" text-anchor="middle">−10%</text>
      <path d="M260,44 L298,44" class="ln" marker-end="url(#a-m9-pr-1)"/>
      <rect x="304" y="14" width="86" height="60" rx="10" class="f3 s3"/>
      <text x="347" y="52" class="tx-b" text-anchor="middle">54 zł</text>
      <text x="214" y="96" class="tx-s" text-anchor="middle">obniżka: 10% z 60 zł = 6 zł</text>
      <rect x="14" y="116" width="372" height="72" rx="10" class="bg ln"/>
      <text x="30" y="144" class="tx">A: 80 zł −25% → 60 zł</text>
      <text x="30" y="174" class="tx">B: 70 zł bez rabatu</text>
      <text x="370" y="144" class="tx-b t3" text-anchor="end">taniej ✓</text>
    </svg>`,
    text: `<p><b>Rabat</b> to obniżka ceny. Najpierw liczysz obniżkę (10% z 60 zł = 6 zł), potem <b>odejmujesz</b> ją od ceny: 60 − 6 = 54 zł.</p>
      <p>Pułapki: obniżka to nie nowa cena! A przy porównywaniu ofert liczy się <b>cena końcowa</b> – sklep z większym rabatem nie zawsze jest tańszy.</p>`,
    remember: 'Nowa cena = stara cena − obniżka.',
    hook: '„−50%” to zawsze „płacisz połowę”.',
    check: { q: 'Bluza kosztuje 80 zł. Jest rabat 25%. Ile zapłacisz?', options: ['20 zł', '60 zł', '55 zł'], answer: 1, explain: 'Obniżka: 25% z 80 = 20 zł. Cena: 80 − 20 = 60 zł.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/pola-wielokatow'] = [
  {
    title: 'Wysokość – zawsze pod kątem prostym',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Trzy trójkąty z zaznaczoną wysokością: w ostrokątnym wysokość jest w środku, w prostokątnym wysokością jest bok przy kącie prostym, w rozwartokątnym wysokość leży na zewnątrz i opada na przedłużenie podstawy">
      <path d="M20,150 L130,150 L80,50 Z" class="f1 s1 sw"/>
      <line x1="80" y1="50" x2="80" y2="150" class="ln dash"/>
      <path d="M80,138 L92,138 L92,150" class="ln"/>
      <path d="M160,150 L260,150 L160,50 Z" class="f3 s3 sw"/>
      <line x1="160" y1="50" x2="160" y2="150" class="ln s2 sw"/>
      <path d="M160,138 L172,138 L172,150" class="ln"/>
      <path d="M300,150 L360,150 L405,60 Z" class="f5 s5 sw"/>
      <line x1="360" y1="150" x2="405" y2="150" class="ln dash"/>
      <line x1="405" y1="60" x2="405" y2="150" class="ln dash"/>
      <path d="M393,150 L393,138 L405,138" class="ln"/>
      <g class="tx-s" text-anchor="middle"><text x="75" y="178">ostrokątny</text><text x="210" y="178">prostokątny</text><text x="352" y="178">rozwartokątny</text></g>
      <text x="88" y="104" class="tx-b t2">h</text><text x="146" y="104" class="tx-b t2">h</text><text x="390" y="110" class="tx-b t2">h</text>
    </svg>`,
    text: `<p><b>Wysokość</b> (oznaczamy ją literą <b>h</b>) to odcinek poprowadzony z wierzchołka <b>prostopadle</b> do przeciwległego boku. Ten bok nazywamy <b>podstawą</b>.</p>
      <p>Każdy trójkąt ma 3 wysokości. W trójkącie prostokątnym wysokością jest bok przy kącie prostym. W rozwartokątnym wysokość może „wyjść” poza trójkąt – wtedy przedłużasz podstawę.</p>`,
    remember: 'Wysokość tworzy z podstawą kąt prosty.',
    hook: 'Wysokość to jak pion murarski – zawsze prosto w dół, nigdy na ukos.',
    check: { q: 'Ile wysokości ma trójkąt?', options: ['1', '2', '3'], answer: 2, explain: 'Z każdego z trzech wierzchołków prowadzisz jedną wysokość.' },
  },
  {
    title: 'Równoległobok – przestaw kawałek i masz prostokąt',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Z równoległoboku odcinamy trójkąt z lewej strony i doklejamy z prawej. Powstaje prostokąt o bokach a i h, więc pole równoległoboku to a razy h.">
      <defs><marker id="a-m9-pw-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M20,140 L160,140 L200,60 L60,60 Z" class="f1 s1 sw"/>
      <path d="M20,140 L60,140 L60,60 Z" class="f2 s2"/>
      <line x1="60" y1="60" x2="60" y2="140" class="ln dash"/>
      <path d="M206,100 L232,100" class="ln" marker-end="url(#a-m9-pw-1)"/>
      <rect x="240" y="60" width="140" height="80" class="f1 s1 sw"/>
      <path d="M340,140 L380,140 L380,60 Z" class="f2 s2"/>
      <text x="90" y="162" class="tx-b" text-anchor="middle">a</text>
      <text x="66" y="106" class="tx-b">h</text>
      <text x="310" y="162" class="tx-b" text-anchor="middle">a</text>
      <text x="226" y="106" class="tx-b" text-anchor="middle">h</text>
      <text x="200" y="192" class="tx-b" text-anchor="middle">P = a · h</text>
    </svg>`,
    text: `<p>Odetnij z równoległoboku trójkąt wzdłuż wysokości i doklej go z drugiej strony. Powstanie <b>prostokąt</b> o bokach <b>a</b> (podstawa) i <b>h</b> (wysokość). Pole się nie zmieniło!</p>
      <p>Dlatego pole równoległoboku to <b>podstawa razy wysokość</b>. Romb to też równoległobok – jego pole liczysz tak samo.</p>`,
    remember: 'Równoległobok i romb: P = a · h.',
    hook: 'Przesuń kawałek ciasta z jednego końca blachy na drugi – ciasta nie ubyło.',
    check: { q: 'Równoległobok ma podstawę 7 cm i wysokość 3 cm. Jakie ma pole?', options: ['21 cm²', '10 cm²', '20 cm²'], answer: 0, explain: 'P = a · h = 7 · 3 = 21 cm².' },
  },
  {
    title: 'Trójkąt – połowa równoległoboku',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Równoległobok przecięty przekątną na dwa jednakowe trójkąty. Pole jednego trójkąta to połowa: a razy h podzielone przez 2.">
      <path d="M40,150 L240,150 L100,50 Z" class="f3 s3 sw"/>
      <path d="M240,150 L300,50 L100,50 Z" class="f4 s4 sw"/>
      <line x1="100" y1="50" x2="100" y2="150" class="ln dash"/>
      <path d="M100,138 L112,138 L112,150" class="ln"/>
      <text x="140" y="174" class="tx-b" text-anchor="middle">a</text>
      <text x="84" y="108" class="tx-b">h</text>
      <text x="365" y="90" class="tx-b" text-anchor="middle">P =</text>
      <text x="365" y="120" class="tx-b" text-anchor="middle">a · h : 2</text>
    </svg>`,
    text: `<p>Dwa jednakowe trójkąty złożone razem tworzą równoległobok o polu a · h. Jeden trójkąt to <b>połowa</b> – dlatego dzielisz przez 2.</p>
      <p>Ważne: h to wysokość opuszczona <b>na tę podstawę</b>, którą mnożysz.</p>`,
    remember: 'Trójkąt: P = a · h : 2.',
    hook: 'Kanapkę przekrojoną po przekątnej dzielisz na dwa trójkąty – każdy to połowa.',
    check: { q: 'Trójkąt ma podstawę 12 cm i wysokość 5 cm. Jakie ma pole?', options: ['60 cm²', '30 cm²', '17 cm²'], answer: 1, explain: 'P = 12 · 5 : 2 = 60 : 2 = 30 cm².' },
  },
  {
    title: 'Romb z przekątnych i trapez',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Romb wpisany w prostokąt o bokach równych przekątnym e i f – romb zajmuje połowę, więc P = e razy f przez 2. Trapez o podstawach a i b i wysokości h – P = (a + b) razy h przez 2.">
      <rect x="30" y="40" width="140" height="120" class="ln-thin dash" fill="none"/>
      <path d="M100,40 L170,100 L100,160 L30,100 Z" class="f5 s5 sw"/>
      <line x1="30" y1="100" x2="170" y2="100" class="ln dash"/>
      <line x1="100" y1="40" x2="100" y2="160" class="ln dash"/>
      <text x="134" y="94" class="tx-b">e</text><text x="106" y="72" class="tx-b">f</text>
      <path d="M220,160 L400,160 L340,60 L260,60 Z" class="f2 s2 sw"/>
      <line x1="260" y1="60" x2="260" y2="160" class="ln dash"/>
      <path d="M260,148 L272,148 L272,160" class="ln"/>
      <text x="310" y="182" class="tx-b" text-anchor="middle">a</text>
      <text x="300" y="50" class="tx-b" text-anchor="middle">b</text>
      <text x="246" y="116" class="tx-b">h</text>
      <text x="100" y="214" class="tx" text-anchor="middle">P = e · f : 2</text>
      <text x="310" y="214" class="tx" text-anchor="middle">P = (a + b) · h : 2</text>
    </svg>`,
    text: `<p><b>Romb</b>: jego przekątne e i f wyznaczają prostokąt, a romb zajmuje dokładnie jego połowę – więc P = e · f : 2.</p>
      <p><b>Trapez</b>: dwa jednakowe trapezy (jeden obrócony) tworzą równoległobok o podstawie a + b. Jeden trapez to połowa: P = (a + b) · h : 2. Najpierw dodaj podstawy!</p>`,
    remember: 'Trapez: najpierw dodaj obie podstawy, potem pomnóż przez h i podziel przez 2.',
    hook: 'Trapez liczysz prawie jak trójkąt (· h : 2), tylko zamiast jednej podstawy wkładasz do nawiasu obie: (a + b).',
    check: { q: 'Trapez ma podstawy 8 cm i 4 cm oraz wysokość 5 cm. Jakie ma pole?', options: ['30 cm²', '60 cm²', '160 cm²'], answer: 0, explain: 'P = (8 + 4) · 5 : 2 = 12 · 5 : 2 = 30 cm².' },
  },
  {
    title: 'Pułapki: bok ukośny i jednostki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Równoległobok o podstawie 9 cm, boku ukośnym 5 cm i wysokości 4 cm. Źle: 9 razy 5. Dobrze: P = 9 razy 4 = 36 cm².">
      <path d="M30,140 L210,140 L270,60 L90,60 Z" class="f1 s1 sw"/>
      <line x1="90" y1="60" x2="90" y2="140" class="ln dash"/>
      <path d="M90,128 L102,128 L102,140" class="ln"/>
      <text x="120" y="164" class="tx" text-anchor="middle">9 cm</text>
      <text x="52" y="100" class="tx" text-anchor="end">5 cm</text>
      <text x="98" y="106" class="tx">4 cm</text>
      <text x="300" y="96" class="tx">❌ 9 · 5</text>
      <text x="200" y="192" class="tx-b" text-anchor="middle">✅ P = 9 · 4 = 36 cm²</text>
    </svg>`,
    text: `<p><b>Pułapka 1</b>: bok ukośny to nie wysokość. Wysokość jest zawsze krótsza od boku ukośnego i tworzy kąt prosty z podstawą.</p>
      <p><b>Pułapka 2</b>: różne jednostki. Najpierw zamień: a = 2 m i h = 50 cm → 200 cm i 50 cm.</p>
      <p><b>Figury złożone</b>: podziel figurę na znane części i dodaj ich pola.</p>`,
    remember: 'Mnożysz podstawę przez wysokość – nie przez bok ukośny. Wszystkie długości w tych samych jednostkach.',
    check: { q: 'Równoległobok ma podstawę 6 cm, bok ukośny 5 cm i wysokość 4 cm. Jakie ma pole?', options: ['30 cm²', '24 cm²', '20 cm²'], answer: 1, explain: 'P = a · h = 6 · 4 = 24 cm². Bok ukośny (5 cm) nie jest potrzebny.' },
  },
];
