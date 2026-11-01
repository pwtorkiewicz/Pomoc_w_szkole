/* Lekcje – edukacja matematyczna, klasa 3. Klucz: 'matematyka/<id działu>'. Format: docs/LEKCJE.md
 * Id markerów strzałek: prefiks a-k3m- (unikalne w ścieżce). */
window.LESSONS = window.LESSONS || {};

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/liczby'] = [
  {
    title: 'Setki, dziesiątki, jedności',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Liczba 345 z klocków: 3 duże kwadraty po 100, 4 paski po 10, 5 małych kostek">
        <rect x="10" y="20" width="70" height="70" rx="4" class="f1 s1 sw"/>
        <rect x="88" y="20" width="70" height="70" rx="4" class="f1 s1 sw"/>
        <rect x="166" y="20" width="70" height="70" rx="4" class="f1 s1 sw"/>
        <rect x="252" y="20" width="14" height="70" rx="3" class="f3 s3 sw"/>
        <rect x="272" y="20" width="14" height="70" rx="3" class="f3 s3 sw"/>
        <rect x="292" y="20" width="14" height="70" rx="3" class="f3 s3 sw"/>
        <rect x="312" y="20" width="14" height="70" rx="3" class="f3 s3 sw"/>
        <rect x="342" y="76" width="14" height="14" rx="2" class="f2 s2 sw"/>
        <rect x="362" y="76" width="14" height="14" rx="2" class="f2 s2 sw"/>
        <rect x="382" y="76" width="14" height="14" rx="2" class="f2 s2 sw"/>
        <rect x="342" y="56" width="14" height="14" rx="2" class="f2 s2 sw"/>
        <rect x="362" y="56" width="14" height="14" rx="2" class="f2 s2 sw"/>
        <text x="123" y="118" class="tx-b t1" text-anchor="middle">3 setki</text>
        <text x="289" y="118" class="tx-b t3" text-anchor="middle">4 dzies.</text>
        <text x="369" y="118" class="tx-b t2" text-anchor="middle">5 jedn.</text>
        <text x="200" y="165" class="tx-b" text-anchor="middle">300 + 40 + 5 = 345</text>
      </svg>`,
    text: `<p>Każda cyfra w liczbie ma swoje miejsce.</p><p>Od prawej: <b>jedności</b>, <b>dziesiątki</b>, <b>setki</b>.</p><p>Liczba 345 to 3 setki, 4 dziesiątki i 5 jedności.</p>`,
    remember: '10 jedności = 1 dziesiątka · 10 dziesiątek = 1 setka · 10 setek = 1 tysiąc',
    hook: 'Setka to duży kwadrat, dziesiątka to pasek, jedność to mała kostka.',
    check: { q: 'W liczbie 263 cyfra 6 oznacza…', options: ['6 dziesiątek', '6 setek', '6 jedności'], answer: 0, explain: '263 = 2 setki, 6 dziesiątek i 3 jedności.' },
  },
  {
    title: 'Liczymy skokami',
    svg: `<svg viewBox="0 0 400 140" role="img" aria-label="Oś liczbowa: skoki po 10 od 40 do 70">
        <defs>
        <marker id="a-k3m-licz-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" class="t2"/>
        </marker>
        </defs>
        <line x1="20" y1="100" x2="385" y2="100" class="ln"/>
        <line x1="40" y1="92" x2="40" y2="108" class="ln"/>
        <line x1="140" y1="92" x2="140" y2="108" class="ln"/>
        <line x1="240" y1="92" x2="240" y2="108" class="ln"/>
        <line x1="340" y1="92" x2="340" y2="108" class="ln"/>
        <text x="40" y="130" class="tx-b" text-anchor="middle">40</text>
        <text x="140" y="130" class="tx-b" text-anchor="middle">50</text>
        <text x="240" y="130" class="tx-b" text-anchor="middle">60</text>
        <text x="340" y="130" class="tx-b t2" text-anchor="middle">70</text>
        <path d="M44,88 Q90,30 136,88" class="ln s2" marker-end="url(#a-k3m-licz-1)"/>
        <path d="M144,88 Q190,30 236,88" class="ln s2" marker-end="url(#a-k3m-licz-1)"/>
        <path d="M244,88 Q290,30 336,88" class="ln s2" marker-end="url(#a-k3m-licz-1)"/>
        <text x="90" y="42" class="tx-b t2" text-anchor="middle">+10</text>
        <text x="190" y="42" class="tx-b t2" text-anchor="middle">+10</text>
        <text x="290" y="42" class="tx-b t2" text-anchor="middle">+10</text>
      </svg>`,
    text: `<p>Możesz liczyć skokami: po 1, po 2, po 10, po 100.</p><p>W przód – liczby rosną. Wstecz – maleją: 20, 18, 16, 14…</p>`,
    hook: 'Gdy skaczesz po 10, zmienia się tylko cyfra dziesiątek: 40, 50, 60, 70.',
    check: { q: 'Licz po 100: 200, 300, 400, … Co dalej?', options: ['500', '410', '401'], answer: 0, explain: 'Co krok dodajesz 100: 400 + 100 = 500.' },
  },
  {
    title: 'Większa czy mniejsza?',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Porównanie: 356 jest mniejsze niż 365, 7 jest większe niż 3">
        <text x="110" y="60" class="tx-b" text-anchor="middle" style="font-size:30px">356 &lt; 365</text>
        <text x="300" y="60" class="tx-b" text-anchor="middle" style="font-size:30px">7 &gt; 3</text>
        <text x="110" y="100" class="tx" text-anchor="middle">mniejsze niż</text>
        <text x="300" y="100" class="tx" text-anchor="middle">większe niż</text>
        <text x="200" y="145" class="tx-s" text-anchor="middle">dzióbek wskazuje mniejszą liczbę</text>
      </svg>`,
    text: `<p>Najpierw porównaj <b>setki</b>. Gdy są równe – <b>dziesiątki</b>. Potem <b>jedności</b>.</p><p>356 i 365: setki równe (3), dziesiątki 5 i 6 – więc 356 &lt; 365.</p>`,
    remember: '&lt; mniejsze niż · &gt; większe niż · = równe',
    hook: 'Znak to otwarta buzia głodnego krokodyla – zawsze otwiera się w stronę większej liczby.',
    check: { q: 'Jaki znak wstawisz? 480 … 408', say: 'Jaki znak wstawisz między 480 a 408?', options: ['>', '<', '='], sayOptions: ['większe niż', 'mniejsze niż', 'równa się'], answer: 0, explain: 'Setki równe. 8 dziesiątek to więcej niż 0 dziesiątek, więc 480 > 408.' },
  },
  {
    title: 'O ile więcej? O ile mniej?',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Pasek 45 i dłuższy pasek 52 – różnica 7">
        <rect x="20" y="30" width="270" height="34" rx="6" class="f1 s1 sw"/>
        <text x="155" y="53" class="tx-b" text-anchor="middle">45</text>
        <rect x="20" y="86" width="270" height="34" rx="6" class="f1 s1 sw"/>
        <rect x="290" y="86" width="84" height="34" rx="6" class="f2 s2 sw"/>
        <text x="155" y="109" class="tx-b" text-anchor="middle">45</text>
        <text x="332" y="109" class="tx-b" text-anchor="middle">+7</text>
        <text x="332" y="76" class="tx-s" text-anchor="middle">o 7 więcej</text>
        <text x="200" y="144" class="tx" text-anchor="middle">45 + 7 = 52</text>
      </svg>`,
    text: `<p>Liczba <b>o 7 większa</b> od 45 to 45 + 7 = 52.</p><p>Liczba <b>o 10 mniejsza</b> od 300 to 300 − 10 = 290.</p>`,
    remember: '„o … większa” – dodaj · „o … mniejsza” – odejmij',
    check: { q: 'Liczba o 5 mniejsza od 20 to…', options: ['15', '25', '4'], answer: 0, explain: '„O 5 mniejsza” – odejmij: 20 − 5 = 15.' },
  },
  {
    title: 'Duże liczby',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Duże liczby: tysiąc, dziesięć tysięcy, sto tysięcy, milion">
        <rect x="10" y="10" width="185" height="80" rx="10" class="f1 s1"/>
        <text x="102" y="45" class="tx-b" text-anchor="middle">1 000</text>
        <text x="102" y="72" class="tx-s" text-anchor="middle">tysiąc</text>
        <rect x="205" y="10" width="185" height="80" rx="10" class="f3 s3"/>
        <text x="297" y="45" class="tx-b" text-anchor="middle">10 000</text>
        <text x="297" y="72" class="tx-s" text-anchor="middle">dziesięć tysięcy</text>
        <rect x="10" y="105" width="185" height="80" rx="10" class="f4 s4"/>
        <text x="102" y="140" class="tx-b" text-anchor="middle">100 000</text>
        <text x="102" y="167" class="tx-s" text-anchor="middle">sto tysięcy</text>
        <rect x="205" y="105" width="185" height="80" rx="10" class="f5 s5"/>
        <text x="297" y="140" class="tx-b" text-anchor="middle">1 000 000</text>
        <text x="297" y="167" class="tx-s" text-anchor="middle">milion</text>
      </svg>`,
    text: `<p>Po 999 jest <b>1 000</b> – tysiąc.</p><p>Duże liczby piszemy z odstępem co trzy cyfry od prawej: 1 500, 10 000, 800 000.</p>`,
    hook: 'Milion to tysiąc tysięcy – sześć zer!',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/dodawanie'] = [
  {
    title: 'Najpierw do pełnej dziesiątki',
    svg: `<svg viewBox="0 0 400 140" role="img" aria-label="38 plus 7: skok o 2 do 40, potem o 5 do 45">
        <defs>
        <marker id="a-k3m-dod-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" class="t2"/>
        </marker>
        </defs>
        <line x1="20" y1="100" x2="385" y2="100" class="ln"/>
        <line x1="40" y1="92" x2="40" y2="108" class="ln"/>
        <line x1="140" y1="92" x2="140" y2="108" class="ln s3 sw"/>
        <line x1="360" y1="92" x2="360" y2="108" class="ln"/>
        <text x="40" y="130" class="tx-b" text-anchor="middle">38</text>
        <text x="140" y="130" class="tx-b t3" text-anchor="middle">40</text>
        <text x="360" y="130" class="tx-b t2" text-anchor="middle">45</text>
        <path d="M44,88 Q90,40 136,88" class="ln s2" marker-end="url(#a-k3m-dod-1)"/>
        <path d="M144,88 Q250,10 356,88" class="ln s2" marker-end="url(#a-k3m-dod-1)"/>
        <text x="90" y="52" class="tx-b t2" text-anchor="middle">+2</text>
        <text x="250" y="40" class="tx-b t2" text-anchor="middle">+5</text>
      </svg>`,
    text: `<p>Jak policzyć 38 + 7?</p><p>7 rozbij na 2 i 5. Najpierw 38 + 2 = <b>40</b>. Potem 40 + 5 = <b>45</b>.</p>`,
    hook: 'Pełna dziesiątka to przystanek. Najpierw dojedź do przystanku, potem jedź dalej.',
    check: { q: '27 + 5 = ?', options: ['32', '31', '22'], answer: 0, explain: '27 + 3 = 30, potem 30 + 2 = 32.' },
  },
  {
    title: 'Dziesiątki, potem jedności',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="47 plus 25: najpierw 47 plus 20 równa się 67, potem 67 plus 5 równa się 72">
        <rect x="20" y="20" width="110" height="50" rx="10" class="f1 s1 sw"/>
        <text x="75" y="52" class="tx-b" text-anchor="middle">47</text>
        <rect x="150" y="20" width="110" height="50" rx="10" class="f3 s3 sw"/>
        <text x="205" y="52" class="tx-b" text-anchor="middle">+ 20</text>
        <rect x="280" y="20" width="100" height="50" rx="10" class="f2 s2 sw"/>
        <text x="330" y="52" class="tx-b" text-anchor="middle">+ 5</text>
        <text x="140" y="110" class="tx" text-anchor="middle">47 + 20 = 67</text>
        <text x="300" y="110" class="tx" text-anchor="middle">67 + 5 = 72</text>
        <text x="200" y="142" class="tx-s" text-anchor="middle">25 = 20 + 5</text>
      </svg>`,
    text: `<p>Drugą liczbę rozbij na dziesiątki i jedności: 25 = 20 + 5.</p><p>Dodaj najpierw dziesiątki, potem jedności.</p>`,
    remember: '47 + 25 = 47 + 20 + 5 = 72',
    check: { q: '36 + 22 = ?', options: ['58', '56', '48'], answer: 0, explain: '36 + 20 = 56, 56 + 2 = 58.' },
  },
  {
    title: 'Odejmowanie krok po kroku',
    svg: `<svg viewBox="0 0 400 140" role="img" aria-label="62 minus 8: skok w tył o 2 do 60, potem o 6 do 54">
        <defs>
        <marker id="a-k3m-dod-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" class="t2"/>
        </marker>
        </defs>
        <line x1="15" y1="100" x2="385" y2="100" class="ln"/>
        <line x1="40" y1="92" x2="40" y2="108" class="ln"/>
        <line x1="280" y1="92" x2="280" y2="108" class="ln s3 sw"/>
        <line x1="360" y1="92" x2="360" y2="108" class="ln"/>
        <text x="40" y="130" class="tx-b t2" text-anchor="middle">54</text>
        <text x="280" y="130" class="tx-b t3" text-anchor="middle">60</text>
        <text x="360" y="130" class="tx-b" text-anchor="middle">62</text>
        <path d="M356,88 Q320,45 284,88" class="ln s2" marker-end="url(#a-k3m-dod-2)"/>
        <path d="M276,88 Q160,10 44,88" class="ln s2" marker-end="url(#a-k3m-dod-2)"/>
        <text x="320" y="55" class="tx-b t2" text-anchor="middle">−2</text>
        <text x="160" y="40" class="tx-b t2" text-anchor="middle">−6</text>
      </svg>`,
    text: `<p>62 − 8: najpierw zejdź do pełnej dziesiątki: 62 − 2 = <b>60</b>.</p><p>Zostało odjąć 6: 60 − 6 = <b>54</b>.</p>`,
    hook: 'Odejmowanie sprawdzisz dodawaniem: 54 + 8 = 62 ✔',
    check: { q: '53 − 7 = ?', options: ['46', '44', '56'], answer: 0, explain: '53 − 3 = 50, potem 50 − 4 = 46. Sprawdź: 46 + 7 = 53.' },
  },
  {
    title: 'Setki i dziesiątki',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="250 plus 50: 2 setki i 5 dziesiątek plus 5 dziesiątek daje 3 setki">
        <rect x="10" y="20" width="50" height="50" rx="3" class="f1 s1 sw"/>
        <rect x="66" y="20" width="50" height="50" rx="3" class="f1 s1 sw"/>
        <rect x="124" y="20" width="9" height="50" rx="2" class="f3 s3"/>
        <rect x="137" y="20" width="9" height="50" rx="2" class="f3 s3"/>
        <rect x="150" y="20" width="9" height="50" rx="2" class="f3 s3"/>
        <rect x="163" y="20" width="9" height="50" rx="2" class="f3 s3"/>
        <rect x="176" y="20" width="9" height="50" rx="2" class="f3 s3"/>
        <text x="210" y="52" class="tx-b" text-anchor="middle">+</text>
        <rect x="226" y="20" width="9" height="50" rx="2" class="f2 s2"/>
        <rect x="239" y="20" width="9" height="50" rx="2" class="f2 s2"/>
        <rect x="252" y="20" width="9" height="50" rx="2" class="f2 s2"/>
        <rect x="265" y="20" width="9" height="50" rx="2" class="f2 s2"/>
        <rect x="278" y="20" width="9" height="50" rx="2" class="f2 s2"/>
        <text x="310" y="52" class="tx-b" text-anchor="middle">=</text>
        <text x="358" y="52" class="tx-b t1" text-anchor="middle">300</text>
        <text x="200" y="110" class="tx" text-anchor="middle">5 dziesiątek + 5 dziesiątek = 1 setka</text>
        <text x="200" y="138" class="tx-b" text-anchor="middle">250 + 50 = 300</text>
      </svg>`,
    text: `<p>Licz dziesiątkami jak zwykłymi liczbami: 18 dziesiątek − 3 dziesiątki = 15 dziesiątek.</p><p>Dlatego 180 − 30 = 150.</p>`,
    remember: '250 + 50 = 300 · 180 − 30 = 150 · 400 + 300 = 700',
  },
  {
    title: 'Zagadka z okienkiem',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Okienko plus 6 równa się 14. W okienku jest 8">
        <rect x="70" y="30" width="60" height="60" rx="8" class="f4 s4 sw"/>
        <text x="100" y="72" class="tx-b" text-anchor="middle" style="font-size:28px">?</text>
        <text x="200" y="72" class="tx-b" text-anchor="middle" style="font-size:28px">+ 6 = 14</text>
        <text x="200" y="125" class="tx" text-anchor="middle">14 − 6 = 8, więc w okienku jest 8</text>
        <text x="200" y="150" class="tx-s" text-anchor="middle">sprawdzenie: 8 + 6 = 14 ✔</text>
      </svg>`,
    text: `<p>W okienku ukryła się liczba. Jak ją znaleźć?</p><p>□ + 6 = 14. Pomyśl: ile trzeba dodać do 6, żeby było 14? Albo odejmij: 14 − 6 = 8.</p>`,
    hook: 'Zawsze wstaw swoją liczbę do okienka i sprawdź, czy wszystko się zgadza.',
    check: { q: '□ − 5 = 20. Jaka liczba jest w okienku?', say: 'Okienko minus 5 równa się 20. Jaka liczba jest w okienku?', options: ['25', '15', '4'], answer: 0, explain: '20 + 5 = 25. Sprawdź: 25 − 5 = 20.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/mnozenie'] = [
  {
    title: 'Mnożenie to szybkie dodawanie',
    widget: { type: 'tabliczka', a: 3, b: 4 },
    text: `<p>3 rzędy po 4 kropki. Możesz dodawać: 4 + 4 + 4 = 12.</p><p>Szybciej – pomnożyć: <b>3 × 4 = 12</b>.</p><p>Przesuwaj suwaki i patrz, jak rośnie liczba kropek.</p>`,
    hook: 'Znak × czytamy „razy”: 3 razy po 4.',
    check: { q: 'Które działanie pasuje do 5 + 5 + 5 + 5?', options: ['4 × 5', '5 + 4', '5 × 5'], answer: 0, explain: '4 razy dodajemy 5, więc 4 × 5 = 20.' },
  },
  {
    title: 'Zamiana miejscami',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="3 rzędy po 4 kropki i 4 rzędy po 3 kropki – w obu jest 12">
        <circle cx="30" cy="30" r="11" class="f1 s1 sw"/>
        <circle cx="64" cy="30" r="11" class="f1 s1 sw"/>
        <circle cx="98" cy="30" r="11" class="f1 s1 sw"/>
        <circle cx="132" cy="30" r="11" class="f1 s1 sw"/>
        <circle cx="30" cy="64" r="11" class="f1 s1 sw"/>
        <circle cx="64" cy="64" r="11" class="f1 s1 sw"/>
        <circle cx="98" cy="64" r="11" class="f1 s1 sw"/>
        <circle cx="132" cy="64" r="11" class="f1 s1 sw"/>
        <circle cx="30" cy="98" r="11" class="f1 s1 sw"/>
        <circle cx="64" cy="98" r="11" class="f1 s1 sw"/>
        <circle cx="98" cy="98" r="11" class="f1 s1 sw"/>
        <circle cx="132" cy="98" r="11" class="f1 s1 sw"/>
        <circle cx="270" cy="20" r="11" class="f2 s2 sw"/>
        <circle cx="304" cy="20" r="11" class="f2 s2 sw"/>
        <circle cx="338" cy="20" r="11" class="f2 s2 sw"/>
        <circle cx="270" cy="50" r="11" class="f2 s2 sw"/>
        <circle cx="304" cy="50" r="11" class="f2 s2 sw"/>
        <circle cx="338" cy="50" r="11" class="f2 s2 sw"/>
        <circle cx="270" cy="80" r="11" class="f2 s2 sw"/>
        <circle cx="304" cy="80" r="11" class="f2 s2 sw"/>
        <circle cx="338" cy="80" r="11" class="f2 s2 sw"/>
        <circle cx="270" cy="110" r="11" class="f2 s2 sw"/>
        <circle cx="304" cy="110" r="11" class="f2 s2 sw"/>
        <circle cx="338" cy="110" r="11" class="f2 s2 sw"/>
        <text x="81" y="150" class="tx-b" text-anchor="middle">3 × 4 = 12</text>
        <text x="304" y="150" class="tx-b" text-anchor="middle">4 × 3 = 12</text>
      </svg>`,
    text: `<p>Obróć kartkę – kropek jest tyle samo!</p><p>Dlatego 3 × 4 = 4 × 3. Tabliczka mnożenia robi się dwa razy krótsza.</p>`,
    remember: 'Kolejność liczb w mnożeniu nie zmienia wyniku.',
    check: { q: 'Wiesz, że 8 × 6 = 48. Ile to 6 × 8?', options: ['48', '46', '14'], answer: 0, explain: 'Zamiana miejscami nie zmienia wyniku: 6 × 8 = 48.' },
  },
  {
    title: 'Dzielenie po równo',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="12 ciastek rozdzielonych po równo na 3 talerze – po 4">
        <ellipse cx="70" cy="62" rx="56" ry="42" class="f4 s4 sw"/>
        <text x="70" y="58" class="tx-b" text-anchor="middle" style="font-size:22px">🍪🍪</text>
        <text x="70" y="86" class="tx-b" text-anchor="middle" style="font-size:22px">🍪🍪</text>
        <ellipse cx="200" cy="62" rx="56" ry="42" class="f4 s4 sw"/>
        <text x="200" y="58" class="tx-b" text-anchor="middle" style="font-size:22px">🍪🍪</text>
        <text x="200" y="86" class="tx-b" text-anchor="middle" style="font-size:22px">🍪🍪</text>
        <ellipse cx="330" cy="62" rx="56" ry="42" class="f4 s4 sw"/>
        <text x="330" y="58" class="tx-b" text-anchor="middle" style="font-size:22px">🍪🍪</text>
        <text x="330" y="86" class="tx-b" text-anchor="middle" style="font-size:22px">🍪🍪</text>
        <text x="200" y="138" class="tx-b" text-anchor="middle">12 : 3 = 4</text>
      </svg>`,
    text: `<p>Masz 12 ciastek i 3 talerze. Kładziesz po jednym na każdy talerz, aż ciastka się skończą.</p><p>Na każdym są 4: <b>12 : 3 = 4</b>.</p>`,
    hook: 'Dzielenie sprawdzisz mnożeniem: 3 × 4 = 12 ✔',
    check: { q: '15 : 3 = ?', options: ['5', '3', '12'], answer: 0, explain: '15 : 3 = 5, bo 3 × 5 = 15.' },
  },
  {
    title: 'Razy 10 i razy 2',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="14 razy 10 równa się 140 – dopisujemy zero. 36 razy 2: 30 razy 2 plus 6 razy 2 równa się 72">
        <rect x="10" y="10" width="380" height="62" rx="10" class="f1 s1"/>
        <text x="130" y="50" class="tx-b" text-anchor="middle" style="font-size:24px">14 × 10 = 14<tspan class="t2">0</tspan>
        </text>
        <text x="320" y="50" class="tx-s" text-anchor="middle">dopisz zero</text>
        <rect x="10" y="88" width="380" height="72" rx="10" class="f3 s3"/>
        <text x="200" y="118" class="tx-b" text-anchor="middle">36 × 2 = 30 × 2 + 6 × 2</text>
        <text x="200" y="146" class="tx" text-anchor="middle">= 60 + 12 = 72</text>
      </svg>`,
    text: `<p>Gdy mnożysz przez 10, dopisz zero na końcu.</p><p>Liczbę dwucyfrową razy 2 rozbij na dziesiątki i jedności. Albo dodaj ją dwa razy: 36 + 36 = 72.</p>`,
    check: { q: '24 × 2 = ?', options: ['48', '44', '28'], answer: 0, explain: '20 × 2 = 40, 4 × 2 = 8, razem 48.' },
  },
  {
    title: 'Sprytne triki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Triki: razy 2 to podwojenie, razy 5 kończy się na 0 lub 5, razy 9 to razy 10 minus raz, razy 1 nic się nie zmienia">
        <rect x="10" y="10" width="185" height="85" rx="10" class="f1 s1"/>
        <text x="102" y="42" class="tx-b" text-anchor="middle">× 2</text>
        <text x="102" y="72" class="tx" text-anchor="middle">podwój: 7 + 7</text>
        <rect x="205" y="10" width="185" height="85" rx="10" class="f3 s3"/>
        <text x="297" y="42" class="tx-b" text-anchor="middle">× 5</text>
        <text x="297" y="72" class="tx" text-anchor="middle">końcówka 0 lub 5</text>
        <rect x="10" y="105" width="185" height="85" rx="10" class="f2 s2"/>
        <text x="102" y="137" class="tx-b" text-anchor="middle">× 9</text>
        <text x="102" y="167" class="tx" text-anchor="middle">× 10, potem − raz</text>
        <rect x="205" y="105" width="185" height="85" rx="10" class="f5 s5"/>
        <text x="297" y="137" class="tx-b" text-anchor="middle">× 1</text>
        <text x="297" y="167" class="tx" text-anchor="middle">bez zmian: 8 × 1 = 8</text>
      </svg>`,
    text: `<p>Trik z dziewiątką: 9 × 6 to 10 × 6 = 60, a potem odejmij jedną szóstkę: 60 − 6 = 54.</p><p>Ćwicz tabliczkę po trochu, ale codziennie.</p>`,
    hook: '5, 6, 7, 8: 56 = 7 × 8 – cyfry idą po kolei!',
    remember: '6 × 7 = 42 · 7 × 8 = 56 · 8 × 9 = 72 · 9 × 9 = 81',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/zadania'] = [
  {
    title: 'Plan na każde zadanie',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Pięć kroków: czytam, co wiem i czego szukam, rysunek lub działanie, liczę i sprawdzam, odpowiedź zdaniem">
        <rect x="20" y="8" width="300" height="36" rx="10" class="f1 s1"/>
        <text x="34" y="32" class="tx">1. 📖 Czytam uważnie</text>
        <rect x="40" y="52" width="300" height="36" rx="10" class="f3 s3"/>
        <text x="54" y="76" class="tx">2. ❓ Co wiem? Czego szukam?</text>
        <rect x="60" y="96" width="300" height="36" rx="10" class="f4 s4"/>
        <text x="74" y="120" class="tx">3. ✏️ Rysunek albo działanie</text>
        <rect x="80" y="140" width="300" height="36" rx="10" class="f2 s2"/>
        <text x="94" y="164" class="tx">4. 🧮 Liczę i sprawdzam</text>
        <rect x="100" y="184" width="300" height="36" rx="10" class="f5 s5"/>
        <text x="114" y="208" class="tx">5. 💬 Odpowiedź zdaniem</text>
      </svg>`,
    text: `<p>Zadanie z treścią to mała historyjka z pytaniem.</p><p>Nie licz od razu! Najpierw przeczytaj i pomyśl, o co chodzi.</p>`,
    hook: 'Jak detektyw: najpierw zbierasz ślady (co wiem), potem rozwiązujesz zagadkę.',
  },
  {
    title: 'Słowa, które podpowiadają',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Słowa w zadaniu i działania: o więcej – dodaj, o mniej – odejmij, po w każdym – pomnóż, po równo – podziel">
        <rect x="10" y="8" width="380" height="44" rx="8" class="f3"/>
        <text x="24" y="36" class="tx">„o … więcej”, „dokupił”</text>
        <text x="370" y="38" class="tx-b t3" text-anchor="end">+</text>
        <rect x="10" y="58" width="380" height="44" rx="8" class="f2"/>
        <text x="24" y="86" class="tx">„o … mniej”, „wydał”</text>
        <text x="370" y="88" class="tx-b t2" text-anchor="end">−</text>
        <rect x="10" y="108" width="380" height="44" rx="8" class="f1"/>
        <text x="24" y="136" class="tx">„po … w każdym”</text>
        <text x="370" y="138" class="tx-b t1" text-anchor="end">×</text>
        <rect x="10" y="158" width="380" height="44" rx="8" class="f5"/>
        <text x="24" y="186" class="tx">„po równo”, „rozdzielił”</text>
        <text x="370" y="188" class="tx-b t5" text-anchor="end">:</text>
      </svg>`,
    text: `<p>Niektóre słowa w zadaniu podpowiadają, jakie działanie wybrać.</p><p>Ale uważaj – zawsze pomyśl, co się dzieje w historyjce!</p>`,
    check: { q: '„Na 5 talerzach leży po 3 kanapki.” Jakie działanie wybierzesz?', options: ['5 × 3', '5 + 3', '5 − 3'], answer: 0, explain: '„Po 3 na każdym z 5 talerzy” – mnożymy: 5 × 3 = 15.' },
  },
  {
    title: 'Rysunek pomaga',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Paski: Tomek 35 naklejek, Ania 35 i jeszcze 12">
        <text x="10" y="45" class="tx-b">Tomek</text>
        <rect x="90" y="22" width="200" height="34" rx="6" class="f1 s1 sw"/>
        <text x="190" y="45" class="tx-b" text-anchor="middle">35</text>
        <text x="10" y="105" class="tx-b">Ania</text>
        <rect x="90" y="82" width="200" height="34" rx="6" class="f1 s1 sw"/>
        <text x="190" y="105" class="tx-b" text-anchor="middle">35</text>
        <rect x="290" y="82" width="70" height="34" rx="6" class="f2 s2 sw"/>
        <text x="325" y="105" class="tx-b" text-anchor="middle">12</text>
        <text x="225" y="148" class="tx" text-anchor="middle">35 + 12 = 47</text>
      </svg>`,
    text: `<p>„Tomek ma 35 naklejek, a Ania o 12 więcej. Ile ma Ania?”</p><p>Narysuj paski. Pasek Ani jest dłuższy o 12. Ania ma 35 + 12 = 47 naklejek.</p>`,
    remember: 'Odpowiedź: Ania ma 47 naklejek.',
    check: { q: 'Ewa ma 20 zł, a Kuba o 6 zł mniej. Ile ma Kuba?', options: ['14 zł', '26 zł', '6 zł'], answer: 0, explain: '„O 6 mniej” – odejmij: 20 − 6 = 14 zł.' },
  },
  {
    title: 'Zadanie w dwóch krokach',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Krok 1: 3 bułki po 2 zł to 6 zł. Krok 2: 6 zł plus mleko 4 zł to 10 zł">
        <defs>
        <marker id="a-k3m-zad-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" class="t2"/>
        </marker>
        </defs>
        <rect x="10" y="20" width="170" height="80" rx="10" class="f4 s4 sw"/>
        <text x="95" y="48" class="tx-b" text-anchor="middle">krok 1</text>
        <text x="95" y="80" class="tx" text-anchor="middle">3 × 2 zł = 6 zł</text>
        <path d="M184,60 L214,60" class="ln" marker-end="url(#a-k3m-zad-1)"/>
        <rect x="220" y="20" width="170" height="80" rx="10" class="f3 s3 sw"/>
        <text x="305" y="48" class="tx-b" text-anchor="middle">krok 2</text>
        <text x="305" y="80" class="tx" text-anchor="middle">6 zł + 4 zł = 10 zł</text>
        <text x="200" y="140" class="tx" text-anchor="middle">🥖🥖🥖 + 🥛</text>
      </svg>`,
    text: `<p>„Mama kupiła 3 bułki po 2 zł i mleko za 4 zł. Ile zapłaciła?”</p><p>Najpierw policz bułki: 3 × 2 zł = 6 zł. Potem dodaj mleko: 6 zł + 4 zł = 10 zł.</p>`,
    hook: 'Trudne zadanie to kilka łatwych zadań ustawionych w kolejce.',
    check: { q: 'Jaś miał 30 zł. Kupił 2 książki po 10 zł. Ile mu zostało?', options: ['10 zł', '20 zł', '40 zł'], answer: 0, explain: 'Książki: 2 × 10 zł = 20 zł. Zostało: 30 zł − 20 zł = 10 zł.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/figury'] = [
  {
    title: 'Poznaj figury',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Trójkąt – 3 boki, prostokąt – 4 boki, kwadrat – 4 równe boki, koło – bez boków">
        <polygon points="10,110 90,110 50,30" class="f2 s2 sw"/>
        <rect x="108" y="45" width="100" height="65" class="f1 s1 sw"/>
        <rect x="226" y="40" width="70" height="70" class="f3 s3 sw"/>
        <circle cx="350" cy="75" r="38" class="f5 s5 sw"/>
        <text x="50" y="138" class="tx-s" text-anchor="middle">trójkąt</text>
        <text x="50" y="158" class="tx-s" text-anchor="middle">3 boki</text>
        <text x="158" y="138" class="tx-s" text-anchor="middle">prostokąt</text>
        <text x="158" y="158" class="tx-s" text-anchor="middle">4 boki</text>
        <text x="261" y="138" class="tx-s" text-anchor="middle">kwadrat</text>
        <text x="261" y="158" class="tx-s" text-anchor="middle">4 równe boki</text>
        <text x="350" y="138" class="tx-s" text-anchor="middle">koło</text>
        <text x="350" y="158" class="tx-s" text-anchor="middle">bez boków</text>
      </svg>`,
    text: `<p>Rozejrzyj się: drzwi to prostokąt, kafelek – kwadrat, talerz – koło.</p><p>Prostokąt ma 4 kąty proste, a boki naprzeciwko siebie są równe. <b>Kwadrat</b> to prostokąt, który ma wszystkie boki równe.</p>`,
    hook: 'Trój-kąt ma trzy kąty i trzy boki – nazwa sama podpowiada.',
    check: { q: 'Która figura nie ma boków?', options: ['koło', 'kwadrat', 'trójkąt'], answer: 0, explain: 'Koło jest okrągłe – nie ma boków ani wierzchołków.' },
  },
  {
    title: 'Pion, poziom, skos',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Maszt flagi – pion, blat stołu – poziom, zjeżdżalnia – skos">
        <line x1="60" y1="20" x2="60" y2="140" class="ln s1 sw"/>
        <polygon points="62,22 110,36 62,50" class="f2 s2"/>
        <line x1="150" y1="80" x2="250" y2="80" class="ln s2 sw"/>
        <line x1="160" y1="80" x2="160" y2="140" class="ln"/>
        <line x1="240" y1="80" x2="240" y2="140" class="ln"/>
        <line x1="290" y1="40" x2="380" y2="140" class="ln s3 sw"/>
        <line x1="290" y1="40" x2="290" y2="140" class="ln-thin"/>
        <text x="60" y="166" class="tx-b t1" text-anchor="middle">pion</text>
        <text x="200" y="166" class="tx-b t2" text-anchor="middle">poziom</text>
        <text x="335" y="166" class="tx-b t3" text-anchor="middle">skos</text>
      </svg>`,
    text: `<p><b>Pion</b> – linia z góry na dół, jak maszt flagi.</p><p><b>Poziom</b> – linia jak powierzchnia stołu albo wody w szklance.</p><p><b>Skos</b> – linia pochylona, jak zjeżdżalnia.</p>`,
    hook: 'Poziom jak horyzont – tam, gdzie niebo styka się z morzem.',
  },
  {
    title: 'Linijka: milimetry i centymetry',
    svg: `<svg viewBox="0 0 400 140" role="img" aria-label="Linijka od 0 do 5 centymetrów, w każdym centymetrze 10 milimetrów">
        <rect x="10" y="20" width="380" height="70" rx="6" class="f4 s4"/>
        <line x1="30" y1="20" x2="30" y2="52" class="ln"/>
        <line x1="37" y1="20" x2="37" y2="34" class="ln-thin"/>
        <line x1="44" y1="20" x2="44" y2="34" class="ln-thin"/>
        <line x1="51" y1="20" x2="51" y2="34" class="ln-thin"/>
        <line x1="58" y1="20" x2="58" y2="34" class="ln-thin"/>
        <line x1="65" y1="20" x2="65" y2="42" class="ln-thin"/>
        <line x1="72" y1="20" x2="72" y2="34" class="ln-thin"/>
        <line x1="79" y1="20" x2="79" y2="34" class="ln-thin"/>
        <line x1="86" y1="20" x2="86" y2="34" class="ln-thin"/>
        <line x1="93" y1="20" x2="93" y2="34" class="ln-thin"/>
        <line x1="100" y1="20" x2="100" y2="52" class="ln"/>
        <line x1="107" y1="20" x2="107" y2="34" class="ln-thin"/>
        <line x1="114" y1="20" x2="114" y2="34" class="ln-thin"/>
        <line x1="121" y1="20" x2="121" y2="34" class="ln-thin"/>
        <line x1="128" y1="20" x2="128" y2="34" class="ln-thin"/>
        <line x1="135" y1="20" x2="135" y2="42" class="ln-thin"/>
        <line x1="142" y1="20" x2="142" y2="34" class="ln-thin"/>
        <line x1="149" y1="20" x2="149" y2="34" class="ln-thin"/>
        <line x1="156" y1="20" x2="156" y2="34" class="ln-thin"/>
        <line x1="163" y1="20" x2="163" y2="34" class="ln-thin"/>
        <line x1="170" y1="20" x2="170" y2="52" class="ln"/>
        <line x1="177" y1="20" x2="177" y2="34" class="ln-thin"/>
        <line x1="184" y1="20" x2="184" y2="34" class="ln-thin"/>
        <line x1="191" y1="20" x2="191" y2="34" class="ln-thin"/>
        <line x1="198" y1="20" x2="198" y2="34" class="ln-thin"/>
        <line x1="205" y1="20" x2="205" y2="42" class="ln-thin"/>
        <line x1="212" y1="20" x2="212" y2="34" class="ln-thin"/>
        <line x1="219" y1="20" x2="219" y2="34" class="ln-thin"/>
        <line x1="226" y1="20" x2="226" y2="34" class="ln-thin"/>
        <line x1="233" y1="20" x2="233" y2="34" class="ln-thin"/>
        <line x1="240" y1="20" x2="240" y2="52" class="ln"/>
        <line x1="247" y1="20" x2="247" y2="34" class="ln-thin"/>
        <line x1="254" y1="20" x2="254" y2="34" class="ln-thin"/>
        <line x1="261" y1="20" x2="261" y2="34" class="ln-thin"/>
        <line x1="268" y1="20" x2="268" y2="34" class="ln-thin"/>
        <line x1="275" y1="20" x2="275" y2="42" class="ln-thin"/>
        <line x1="282" y1="20" x2="282" y2="34" class="ln-thin"/>
        <line x1="289" y1="20" x2="289" y2="34" class="ln-thin"/>
        <line x1="296" y1="20" x2="296" y2="34" class="ln-thin"/>
        <line x1="303" y1="20" x2="303" y2="34" class="ln-thin"/>
        <line x1="310" y1="20" x2="310" y2="52" class="ln"/>
        <line x1="317" y1="20" x2="317" y2="34" class="ln-thin"/>
        <line x1="324" y1="20" x2="324" y2="34" class="ln-thin"/>
        <line x1="331" y1="20" x2="331" y2="34" class="ln-thin"/>
        <line x1="338" y1="20" x2="338" y2="34" class="ln-thin"/>
        <line x1="345" y1="20" x2="345" y2="42" class="ln-thin"/>
        <line x1="352" y1="20" x2="352" y2="34" class="ln-thin"/>
        <line x1="359" y1="20" x2="359" y2="34" class="ln-thin"/>
        <line x1="366" y1="20" x2="366" y2="34" class="ln-thin"/>
        <line x1="373" y1="20" x2="373" y2="34" class="ln-thin"/>
        <line x1="380" y1="20" x2="380" y2="52" class="ln"/>
        <text x="30" y="76" class="tx-b" text-anchor="middle">0</text>
        <text x="100" y="76" class="tx-b" text-anchor="middle">1</text>
        <text x="170" y="76" class="tx-b" text-anchor="middle">2</text>
        <text x="240" y="76" class="tx-b" text-anchor="middle">3</text>
        <text x="310" y="76" class="tx-b" text-anchor="middle">4</text>
        <text x="380" y="76" class="tx-b" text-anchor="middle">5</text>
        <text x="200" y="120" class="tx" text-anchor="middle">między 0 a 1 jest 10 małych kresek = 10 mm</text>
      </svg>`,
    text: `<p>Mała kreska na linijce to <b>1 milimetr</b> (mm). 10 takich kresek to <b>1 centymetr</b> (cm).</p><p>100 cm to <b>1 metr</b> (m), a 1 000 m to <b>1 kilometr</b> (km) – tyle przejdziesz w kilkanaście minut.</p>`,
    remember: '1 cm = 10 mm · 1 m = 100 cm · 1 km = 1 000 m · 1 m 20 cm = 120 cm',
    check: { q: '4 cm to ile milimetrów?', options: ['40 mm', '4 mm', '400 mm'], answer: 0, explain: '1 cm = 10 mm, więc 4 cm = 40 mm.' },
  },
  {
    title: 'Obwód – spacer dookoła',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Prostokąt o bokach 5 cm i 3 cm. Obwód: 5 plus 3 plus 5 plus 3 równa się 16 cm">
        <defs>
        <marker id="a-k3m-fig-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" class="t2"/>
        </marker>
        </defs>
        <rect x="80" y="30" width="240" height="110" class="f1 s1 sw"/>
        <text x="200" y="22" class="tx-b" text-anchor="middle">5 cm</text>
        <text x="200" y="162" class="tx-b" text-anchor="middle">5 cm</text>
        <text x="72" y="91" class="tx-b" text-anchor="end">3 cm</text>
        <text x="328" y="91" class="tx-b">3 cm</text>
        <path d="M110,55 L280,55 Q295,55 295,70 L295,110" class="ln s2 dash" marker-end="url(#a-k3m-fig-1)"/>
        <text x="200" y="102" class="tx" text-anchor="middle">obwód = 16 cm</text>
        <text x="200" y="184" class="tx-s" text-anchor="middle">5 + 3 + 5 + 3 = 16</text>
      </svg>`,
    text: `<p>Mrówka idzie dookoła prostokąta. Droga, którą przejdzie, to <b>obwód</b>.</p><p>Obwód to suma długości wszystkich boków.</p>`,
    hook: 'Obwód = ob-chodzę dookoła.',
    check: { q: 'Jaki jest obwód kwadratu o boku 6 cm?', options: ['24 cm', '12 cm', '36 cm'], answer: 0, explain: 'Kwadrat ma 4 równe boki: 6 + 6 + 6 + 6 = 24 cm.' },
  },
  {
    title: 'Symetria – jak w lustrze',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Motyl z osią symetrii i serce z osią symetrii – obie połowy są takie same">
        <ellipse cx="90" cy="65" rx="50" ry="38" class="f5 s5 sw"/>
        <ellipse cx="190" cy="65" rx="50" ry="38" class="f5 s5 sw"/>
        <ellipse cx="100" cy="122" rx="34" ry="26" class="f2 s2 sw"/>
        <ellipse cx="180" cy="122" rx="34" ry="26" class="f2 s2 sw"/>
        <rect x="132" y="40" width="16" height="110" rx="8" class="f4 s4"/>
        <line x1="140" y1="12" x2="140" y2="170" class="ln dash"/>
        <path d="M320,150 L270,95 Q250,65 280,50 Q305,40 320,65 Q335,40 360,50 Q390,65 370,95 Z" class="f3 s3 sw"/>
        <line x1="320" y1="20" x2="320" y2="170" class="ln dash"/>
      </svg>`,
    text: `<p>Złóż kartkę z motylem wzdłuż przerywanej linii. Obie połowy się pokryją!</p><p>Taka linia to <b>oś symetrii</b>. Symetrię widać w liściach, w twarzy, w oknach i wzorach.</p>`,
    check: { q: 'Która litera ma pionową oś symetrii?', options: ['A', 'F', 'G'], answer: 0, explain: 'Litera A ma dwie takie same połowy – lewą i prawą.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/zegar-kalendarz'] = [
  {
    title: 'Dwie wskazówki',
    widget: { type: 'zegar', h: 3, m: 0 },
    text: `<p><b>Krótka</b> wskazówka pokazuje godziny. <b>Długa</b> – minuty.</p><p>Gdy długa stoi na 12, jest pełna godzina. Gdy na 6 – jest pół godziny po.</p><p>Poruszaj suwakami i obserwuj obie wskazówki.</p>`,
    hook: 'Krótka jest leniwa – idzie powoli, jak godziny. Długa biega szybko, jak minuty.',
    check: { q: 'Długa wskazówka stoi na 6. Ile minut minęło od pełnej godziny?', options: ['30', '6', '60'], answer: 0, explain: 'Każda liczba na tarczy to 5 minut: 6 × 5 = 30.' },
  },
  {
    title: 'Doba ma 24 godziny',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Oś doby od 0 do 24: 12:00 to południe, 15:00 to trzecia po południu">
        <rect x="20" y="40" width="180" height="36" class="f4"/>
        <rect x="200" y="40" width="180" height="36" class="f1"/>
        <line x1="20" y1="40" x2="380" y2="40" class="ln"/>
        <line x1="20" y1="76" x2="380" y2="76" class="ln"/>
        <text x="110" y="64" class="tx" text-anchor="middle">0:00 – 12:00</text>
        <text x="290" y="64" class="tx" text-anchor="middle">12:00 – 24:00</text>
        <text x="200" y="28" class="tx-s" text-anchor="middle">południe 12:00</text>
        <text x="110" y="104" class="tx-s" text-anchor="middle">noc i przedpołudnie</text>
        <text x="290" y="104" class="tx-s" text-anchor="middle">popołudnie i wieczór</text>
        <text x="200" y="138" class="tx-b" text-anchor="middle">15:00 → 15 − 12 = 3:00</text>
      </svg>`,
    text: `<p>Doba to dzień i noc razem – <b>24 godziny</b>. Zegar elektroniczny liczy od 0:00 do 23:59.</p><p>Po południu odejmij 12, a dowiesz się, gdzie będzie krótka wskazówka.</p>`,
    remember: '1 doba = 24 h · 1 h = 60 min · 1 min = 60 s',
    check: { q: 'Zegar elektroniczny pokazuje 20:00. Gdzie jest krótka wskazówka?', options: ['na 8', 'na 2', 'na 10'], answer: 0, explain: '20 − 12 = 8.' },
  },
  {
    title: 'Ile minęło czasu?',
    svg: `<svg viewBox="0 0 400 140" role="img" aria-label="Od 16:00 do 18:00 mijają 2 godziny">
        <defs>
        <marker id="a-k3m-zeg-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" class="t2"/>
        </marker>
        </defs>
        <line x1="20" y1="100" x2="385" y2="100" class="ln"/>
        <line x1="50" y1="92" x2="50" y2="108" class="ln"/>
        <line x1="200" y1="92" x2="200" y2="108" class="ln"/>
        <line x1="350" y1="92" x2="350" y2="108" class="ln"/>
        <text x="50" y="130" class="tx-b" text-anchor="middle">16:00</text>
        <text x="200" y="130" class="tx-b" text-anchor="middle">17:00</text>
        <text x="350" y="130" class="tx-b t2" text-anchor="middle">18:00</text>
        <path d="M54,88 Q125,35 196,88" class="ln s2" marker-end="url(#a-k3m-zeg-1)"/>
        <path d="M204,88 Q275,35 346,88" class="ln s2" marker-end="url(#a-k3m-zeg-1)"/>
        <text x="125" y="48" class="tx-b t2" text-anchor="middle">+1 h</text>
        <text x="275" y="48" class="tx-b t2" text-anchor="middle">+1 h</text>
      </svg>`,
    text: `<p>Film zaczyna się o 16:00 i trwa 2 godziny. Skacz po godzinie: 17:00, 18:00. Koniec o <b>18:00</b>.</p>`,
    hook: 'Licz czas skokami jak po osi liczbowej.',
    check: { q: 'Trening zaczyna się o 17:00 i trwa 1 godzinę. O której się kończy?', options: ['18:00', '16:00', '17:01'], answer: 0, explain: '17:00 + 1 godzina = 18:00.' },
  },
  {
    title: 'Kalendarz',
    widget: { type: 'kalendarz', rok: 2026, miesiac: 11, dzien: 11 },
    text: `<p>Tydzień ma 7 dni, a rok – 12 miesięcy.</p><p>Miesiące mają 30 albo 31 dni, a luty 28 albo 29.</p><p>Przełączaj miesiące strzałkami i klikaj dni – zobaczysz, jak zapisać datę.</p>`,
    remember: '30 dni: kwiecień, czerwiec, wrzesień, listopad. Pozostałe (oprócz lutego) mają 31.',
    hook: 'Policz na kostkach zaciśniętej pięści: kostka – 31 dni, dołek – 30 (luty – 28 albo 29). Styczeń na kostce, luty w dołku, marzec na kostce… Po lipcu zacznij znów od pierwszej kostki – sierpień też ma 31.',
  },
  {
    title: 'Znaki rzymskie',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Znaki rzymskie od 1 do 12">
        <rect x="8" y="10" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="37" y="42" class="tx-b" text-anchor="middle">I</text>
        <text x="37" y="68" class="tx" text-anchor="middle">1</text>
        <rect x="73" y="10" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="102" y="42" class="tx-b" text-anchor="middle">II</text>
        <text x="102" y="68" class="tx" text-anchor="middle">2</text>
        <rect x="138" y="10" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="167" y="42" class="tx-b" text-anchor="middle">III</text>
        <text x="167" y="68" class="tx" text-anchor="middle">3</text>
        <rect x="203" y="10" width="58" height="70" rx="8" class="f2 s2"/>
        <text x="232" y="42" class="tx-b" text-anchor="middle">IV</text>
        <text x="232" y="68" class="tx" text-anchor="middle">4</text>
        <rect x="268" y="10" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="297" y="42" class="tx-b" text-anchor="middle">V</text>
        <text x="297" y="68" class="tx" text-anchor="middle">5</text>
        <rect x="333" y="10" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="362" y="42" class="tx-b" text-anchor="middle">VI</text>
        <text x="362" y="68" class="tx" text-anchor="middle">6</text>
        <rect x="8" y="90" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="37" y="122" class="tx-b" text-anchor="middle">VII</text>
        <text x="37" y="148" class="tx" text-anchor="middle">7</text>
        <rect x="73" y="90" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="102" y="122" class="tx-b" text-anchor="middle">VIII</text>
        <text x="102" y="148" class="tx" text-anchor="middle">8</text>
        <rect x="138" y="90" width="58" height="70" rx="8" class="f2 s2"/>
        <text x="167" y="122" class="tx-b" text-anchor="middle">IX</text>
        <text x="167" y="148" class="tx" text-anchor="middle">9</text>
        <rect x="203" y="90" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="232" y="122" class="tx-b" text-anchor="middle">X</text>
        <text x="232" y="148" class="tx" text-anchor="middle">10</text>
        <rect x="268" y="90" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="297" y="122" class="tx-b" text-anchor="middle">XI</text>
        <text x="297" y="148" class="tx" text-anchor="middle">11</text>
        <rect x="333" y="90" width="58" height="70" rx="8" class="f1 s1"/>
        <text x="362" y="122" class="tx-b" text-anchor="middle">XII</text>
        <text x="362" y="148" class="tx" text-anchor="middle">12</text>
      </svg>`,
    text: `<p>Rzymianie pisali liczby literami: I to 1, V to 5, X to 10.</p><p>Mały znak <b>przed</b> większym – odejmij: IV = 4, IX = 9. Mały znak <b>za</b> większym – dodaj: VI = 6, XI = 11.</p>`,
    hook: 'V wygląda jak dłoń z pięcioma palcami, a X – jak dwie dłonie złączone: 10.',
    check: { q: 'Jak zapiszesz znakami rzymskimi liczbę 11?', options: ['XI', 'IX', 'IIX'], sayOptions: ['X, I', 'I, X', 'I, I, X'], answer: 0, explain: 'X = 10, a I za nim dodajemy: 10 + 1 = 11.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['matematyka/pieniadze-miary'] = [
  {
    title: 'Złote i grosze',
    widget: { type: 'monety', cel: 375, max: 1000 },
    text: `<p>1 złoty to 100 groszy. Klikaj monety i odlicz <b>3 zł 75 gr</b>.</p><p>Na końcu kwoty zobaczysz też, ile to groszy.</p>`,
    remember: '1 zł = 100 gr · 3 zł 75 gr = 375 gr',
    hook: 'Grosze zbieraj w setki – sto groszy to cały złoty.',
    check: { q: '2 zł 5 gr to ile groszy?', options: ['205 gr', '25 gr', '250 gr'], answer: 0, explain: '2 zł = 200 gr. 200 gr + 5 gr = 205 gr.' },
  },
  {
    title: 'Monety i banknoty',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Monety: 1, 2, 5, 10, 20, 50 groszy, 1, 2, 5 złotych. Banknoty: 10, 20, 50, 100, 200, 500 złotych">
        <text x="10" y="22" class="tx-b">monety</text>
        <circle cx="30" cy="58" r="20" class="f2 s2 sw"/>
        <text x="30" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">1 gr</text>
        <circle cx="73" cy="58" r="20" class="f2 s2 sw"/>
        <text x="73" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">2 gr</text>
        <circle cx="116" cy="58" r="20" class="f2 s2 sw"/>
        <text x="116" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">5 gr</text>
        <circle cx="159" cy="58" r="20" class="f2 s2 sw"/>
        <text x="159" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">10 gr</text>
        <circle cx="202" cy="58" r="20" class="f2 s2 sw"/>
        <text x="202" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">20 gr</text>
        <circle cx="245" cy="58" r="20" class="f2 s2 sw"/>
        <text x="245" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">50 gr</text>
        <circle cx="288" cy="58" r="20" class="f4 s4 sw"/>
        <text x="288" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">1 zł</text>
        <circle cx="331" cy="58" r="20" class="f4 s4 sw"/>
        <text x="331" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">2 zł</text>
        <circle cx="374" cy="58" r="20" class="f4 s4 sw"/>
        <text x="374" y="63" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">5 zł</text>
        <text x="10" y="112" class="tx-b">banknoty</text>
        <rect x="8" y="124" width="60" height="40" rx="5" class="f3 s3 sw"/>
        <text x="38" y="149" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">10 zł</text>
        <rect x="73" y="124" width="60" height="40" rx="5" class="f3 s3 sw"/>
        <text x="103" y="149" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">20 zł</text>
        <rect x="138" y="124" width="60" height="40" rx="5" class="f3 s3 sw"/>
        <text x="168" y="149" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">50 zł</text>
        <rect x="203" y="124" width="60" height="40" rx="5" class="f3 s3 sw"/>
        <text x="233" y="149" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">100 zł</text>
        <rect x="268" y="124" width="60" height="40" rx="5" class="f3 s3 sw"/>
        <text x="298" y="149" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">200 zł</text>
        <rect x="333" y="124" width="60" height="40" rx="5" class="f3 s3 sw"/>
        <text x="363" y="149" class="tx-s" text-anchor="middle" style="fill:var(--text);font-weight:700">500 zł</text>
      </svg>`,
    text: `<p>W Polsce płacimy złotymi i groszami.</p><p>Monety mają wartość od 1 grosza do 5 złotych. Banknoty – od 10 do 500 złotych.</p>`,
    check: { q: 'Która kwota to banknot?', options: ['50 zł', '5 zł', '50 gr'], answer: 0, explain: '50 zł to banknot. 5 zł i 50 gr to monety.' },
  },
  {
    title: 'Ile waży?',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Waga szalkowa w równowadze: 1 kilogram i 100 dekagramów">
        <polygon points="200,60 185,160 215,160" class="f4 s4 sw"/>
        <line x1="70" y1="60" x2="330" y2="60" class="ln sw"/>
        <line x1="90" y1="60" x2="90" y2="100" class="ln-thin"/>
        <line x1="310" y1="60" x2="310" y2="100" class="ln-thin"/>
        <path d="M40,100 L140,100 Q90,130 40,100 Z" class="f1 s1 sw"/>
        <path d="M260,100 L360,100 Q310,130 260,100 Z" class="f1 s1 sw"/>
        <rect x="65" y="66" width="50" height="34" rx="4" class="f2 s2 sw"/>
        <text x="90" y="89" class="tx-b" text-anchor="middle">1 kg</text>
        <rect x="268" y="66" width="84" height="34" rx="4" class="f3 s3 sw"/>
        <text x="310" y="89" class="tx-b" text-anchor="middle">100 dag</text>
        <text x="200" y="40" class="tx" text-anchor="middle">tyle samo</text>
      </svg>`,
    text: `<p>Ciężkie rzeczy ważymy w <b>kilogramach</b> (kg), lżejsze – w <b>dekagramach</b> (dag) i <b>gramach</b> (g). Bardzo ciężkie – w <b>tonach</b> (t).</p>`,
    remember: '1 kg = 100 dag · 1 dag = 10 g · 1 kg = 1 000 g · 1 t = 1 000 kg',
    hook: 'Deka znaczy dziesięć: 1 dekagram to 10 gramów.',
    check: { q: '1 kg 50 dag to ile dekagramów?', options: ['150 dag', '15 dag', '105 dag'], answer: 0, explain: '1 kg = 100 dag. 100 dag + 50 dag = 150 dag.' },
  },
  {
    title: 'Litr, pół litra, ćwierć litra',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="1 litr to 2 razy pół litra albo 4 razy ćwierć litra">
        <rect x="20" y="30" width="60" height="110" rx="10" class="f1 s1 sw"/>
        <text x="50" y="164" class="tx-s" text-anchor="middle">1 litr</text>
        <text x="105" y="95" class="tx-b" text-anchor="middle">=</text>
        <rect x="130" y="70" width="40" height="70" rx="8" class="f1 s1 sw"/>
        <rect x="180" y="70" width="40" height="70" rx="8" class="f1 s1 sw"/>
        <text x="175" y="164" class="tx-s" text-anchor="middle">2 × pół litra</text>
        <text x="245" y="95" class="tx-b" text-anchor="middle">=</text>
        <rect x="265" y="100" width="26" height="40" rx="6" class="f1 s1 sw"/>
        <rect x="298" y="100" width="26" height="40" rx="6" class="f1 s1 sw"/>
        <rect x="331" y="100" width="26" height="40" rx="6" class="f1 s1 sw"/>
        <rect x="364" y="100" width="26" height="40" rx="6" class="f1 s1 sw"/>
        <text x="330" y="164" class="tx-s" text-anchor="middle">4 × ćwierć litra</text>
      </svg>`,
    text: `<p>Płyny mierzymy w <b>litrach</b> (l).</p><p>Pół litra to połowa litra. Ćwierć litra to jedna z czterech równych części litra – mniej więcej szklanka.</p>`,
    check: { q: 'Ile butelek po pół litra napełnisz 2 litrami wody?', options: ['4', '2', '1'], answer: 0, explain: '1 litr to 2 razy pół litra, więc 2 litry to 4 razy pół litra.' },
  },
  {
    title: 'Połowa i ćwierć',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Czekolada z 8 kostek: połowa to 4 kostki, ćwierć to 2 kostki">
        <rect x="20" y="30" width="36" height="36" rx="4" class="f2 s2 sw"/>
        <rect x="60" y="30" width="36" height="36" rx="4" class="f2 s2 sw"/>
        <rect x="100" y="30" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="140" y="30" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="20" y="70" width="36" height="36" rx="4" class="f2 s2 sw"/>
        <rect x="60" y="70" width="36" height="36" rx="4" class="f2 s2 sw"/>
        <rect x="100" y="70" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="140" y="70" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <text x="98" y="130" class="tx" text-anchor="middle">połowa = 4 kostki</text>
        <rect x="220" y="30" width="36" height="36" rx="4" class="f3 s3 sw"/>
        <rect x="260" y="30" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="300" y="30" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="340" y="30" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="220" y="70" width="36" height="36" rx="4" class="f3 s3 sw"/>
        <rect x="260" y="70" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="300" y="70" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <rect x="340" y="70" width="36" height="36" rx="4" class="f4 s4 sw"/>
        <text x="298" y="130" class="tx" text-anchor="middle">ćwierć = 2 kostki</text>
      </svg>`,
    text: `<p><b>Połowa</b> – dzielisz na 2 równe części. <b>Ćwierć</b> – na 4 równe części.</p><p>Połowa z 8 kostek to 4 kostki. Ćwierć z 8 to 2 kostki.</p>`,
    hook: 'Ćwierć jak „czwarta część” – cztery kawałki pizzy, a ty bierzesz jeden.',
    check: { q: 'Ile to ćwierć z 12?', options: ['3', '6', '4'], answer: 0, explain: '12 dzielimy na 4 równe części: 12 : 4 = 3.' },
  },
  {
    title: 'Termometr',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwa termometry: zimą 5 stopni, latem 25 stopni">
        <rect x="78" y="12" width="24" height="150" rx="12" class="bg ln sw"/>
        <circle cx="90" cy="168" r="18" class="f2 s2 sw"/>
        <rect x="85" y="130" width="10" height="36" class="t2"/>
        <line x1="104" y1="150" x2="116" y2="150" class="ln"/>
        <text x="120" y="155" class="tx-s">0</text>
        <line x1="104" y1="110" x2="116" y2="110" class="ln"/>
        <text x="120" y="115" class="tx-s">10</text>
        <line x1="104" y1="70" x2="116" y2="70" class="ln"/>
        <text x="120" y="75" class="tx-s">20</text>
        <line x1="104" y1="30" x2="116" y2="30" class="ln"/>
        <text x="120" y="35" class="tx-s">30</text>
        <text x="60" y="135" class="tx-b t2" text-anchor="end">5°C</text>
        <text x="90" y="196" class="tx-s" text-anchor="middle">zima</text>
        <rect x="278" y="12" width="24" height="150" rx="12" class="bg ln sw"/>
        <circle cx="290" cy="168" r="18" class="f2 s2 sw"/>
        <rect x="285" y="50" width="10" height="116" class="t2"/>
        <line x1="304" y1="150" x2="316" y2="150" class="ln"/>
        <text x="320" y="155" class="tx-s">0</text>
        <line x1="304" y1="110" x2="316" y2="110" class="ln"/>
        <text x="320" y="115" class="tx-s">10</text>
        <line x1="304" y1="70" x2="316" y2="70" class="ln"/>
        <text x="320" y="75" class="tx-s">20</text>
        <line x1="304" y1="30" x2="316" y2="30" class="ln"/>
        <text x="320" y="35" class="tx-s">30</text>
        <text x="260" y="55" class="tx-b t2" text-anchor="end">25°C</text>
        <text x="290" y="196" class="tx-s" text-anchor="middle">lato</text>
      </svg>`,
    text: `<p>Temperaturę mierzymy <b>termometrem</b>. Wynik podajemy w stopniach Celsjusza: °C.</p><p>Im wyżej sięga słupek, tym jest cieplej.</p>`,
    hook: 'Słupek w termometrze rośnie, gdy robi się ciepło – jak kwiat w słońcu.',
  },
];
