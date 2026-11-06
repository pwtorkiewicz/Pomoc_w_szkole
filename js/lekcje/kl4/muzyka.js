/* Lekcje – muzyka, klasa 4. Klucz: 'muzyka/<id działu>'. Format: docs/LEKCJE.md
 * Treść tylko ze ściągi, fiszek i pytań działów w js/dane/kl4/muzyka.js (fakty sprawdzone – patrz pole basis). */
window.LESSONS = window.LESSONS || {};

// ---------------------------------------------------------------------------
window.LESSONS['muzyka/elementy-i-nuty'] = [
  {
    title: 'Z czego zbudowana jest muzyka?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Sześć elementów muzyki: melodia – wysoko i nisko, rytm – krótko i długo, metrum – RAZ-dwa, tempo – wolno i szybko, dynamika – cicho i głośno, barwa – kolor dźwięku">
      <rect x="6" y="6" width="124" height="104" rx="12" class="f1 s1"/>
      <rect x="138" y="6" width="124" height="104" rx="12" class="f3 s3"/>
      <rect x="270" y="6" width="124" height="104" rx="12" class="f3 s3"/>
      <rect x="6" y="120" width="124" height="104" rx="12" class="f4 s4"/>
      <rect x="138" y="120" width="124" height="104" rx="12" class="f2 s2"/>
      <rect x="270" y="120" width="124" height="104" rx="12" class="f5 s5"/>
      <text x="68" y="40" class="tx-b" text-anchor="middle">🎶</text>
      <text x="200" y="40" class="tx-b" text-anchor="middle">👏</text>
      <text x="332" y="40" class="tx-b" text-anchor="middle">📏</text>
      <text x="68" y="154" class="tx-b" text-anchor="middle">🐢</text>
      <text x="200" y="154" class="tx-b" text-anchor="middle">🔊</text>
      <text x="332" y="154" class="tx-b" text-anchor="middle">🎻</text>
      <text x="68" y="72" class="tx-b" text-anchor="middle">melodia</text>
      <text x="200" y="72" class="tx-b" text-anchor="middle">rytm</text>
      <text x="332" y="72" class="tx-b" text-anchor="middle">metrum</text>
      <text x="68" y="186" class="tx-b" text-anchor="middle">tempo</text>
      <text x="200" y="186" class="tx-b" text-anchor="middle">dynamika</text>
      <text x="332" y="186" class="tx-b" text-anchor="middle">barwa</text>
      <text x="68" y="96" class="tx-s" text-anchor="middle">wysoko – nisko</text>
      <text x="200" y="96" class="tx-s" text-anchor="middle">krótko – długo</text>
      <text x="332" y="96" class="tx-s" text-anchor="middle">RAZ-dwa, RAZ-dwa</text>
      <text x="68" y="210" class="tx-s" text-anchor="middle">wolno – szybko</text>
      <text x="200" y="210" class="tx-s" text-anchor="middle">cicho – głośno</text>
      <text x="332" y="210" class="tx-s" text-anchor="middle">„kolor” dźwięku</text>
    </svg>`,
    text: `<p>Każdy utwór, od kołysanki po hymn, zbudowany jest z kilku <b>elementów</b>:</p>
      <ul>
        <li><b>melodia</b> – dźwięki wysokie i niskie ułożone jeden po drugim (to, co nucisz),</li>
        <li><b>rytm</b> – dźwięki krótkie i długie (to, co wyklaszczesz),</li>
        <li><b>metrum</b> – regularne akcenty: <b>RAZ</b>-dwa, <b>RAZ</b>-dwa-trzy,</li>
        <li><b>tempo</b> – szybkość, <b>dynamika</b> – głośność,</li>
        <li><b>barwa</b> – „kolor” dźwięku: po nim odróżniasz skrzypce od trąbki.</li>
      </ul>`,
    remember: 'Melodia – wysoko/nisko, rytm – krótko/długo, tempo – szybkość, dynamika – głośność.',
    hook: 'Nucisz – to <b>melodia</b>. Klaszczesz – to <b>rytm</b>.',
    check: { q: 'Nucisz piosenkę bez słów. Który element muzyki odtwarzasz?', options: ['melodię', 'dynamikę', 'tempo'], answer: 0, explain: 'Melodia to dźwięki wysokie i niskie ułożone jeden po drugim – właśnie je nucisz.' },
  },
  {
    title: 'Pięciolinia i klucz wiolinowy',
    svg: `<svg viewBox="0 0 420 190" role="img" aria-label="Pięciolinia z kluczem wiolinowym. Linie liczymy od dołu, druga linia jest wyróżniona – leży na niej dźwięk g. Kolejne nuty od c jeden do c dwa: c na dodanej linii pod pięciolinią, d pod pierwszą linią, e na pierwszej linii, f w pierwszym polu, g na drugiej linii, a w drugim polu, h na trzeciej linii, c w trzecim polu. Pod nutami nazwy solmizacji: do, re, mi, fa, sol, la, si, do.">
      <line x1="30" y1="40" x2="410" y2="40" class="ln-thin"/>
      <line x1="30" y1="56" x2="410" y2="56" class="ln-thin"/>
      <line x1="30" y1="72" x2="410" y2="72" class="ln-thin"/>
      <line x1="30" y1="88" x2="410" y2="88" class="ln s2 sw"/>
      <line x1="30" y1="104" x2="410" y2="104" class="ln-thin"/>
      <text x="12" y="108" class="tx-s">1</text>
      <text x="12" y="92" class="tx-s">2</text>
      <text x="12" y="76" class="tx-s">3</text>
      <text x="12" y="60" class="tx-s">4</text>
      <text x="12" y="44" class="tx-s">5</text>
      <path d="M52,126 C44,128 40,118 48,114 C54,112 58,118 54,122 L58,24 C70,32 66,50 50,62 C36,74 36,100 56,100 C70,100 70,80 58,80 C48,80 46,92 56,92" class="ln"/>
      <line x1="88" y1="120" x2="112" y2="120" class="ln"/>
      <ellipse cx="100" cy="120" rx="8" ry="6" transform="rotate(-20 100 120)" class="ln"/>
      <ellipse cx="140" cy="112" rx="8" ry="6" transform="rotate(-20 140 112)" class="ln"/>
      <ellipse cx="180" cy="104" rx="8" ry="6" transform="rotate(-20 180 104)" class="ln"/>
      <ellipse cx="220" cy="96" rx="8" ry="6" transform="rotate(-20 220 96)" class="ln"/>
      <ellipse cx="260" cy="88" rx="8" ry="6" transform="rotate(-20 260 88)" class="f2 s2 sw"/>
      <ellipse cx="300" cy="80" rx="8" ry="6" transform="rotate(-20 300 80)" class="ln"/>
      <ellipse cx="340" cy="72" rx="8" ry="6" transform="rotate(-20 340 72)" class="ln"/>
      <ellipse cx="380" cy="64" rx="8" ry="6" transform="rotate(-20 380 64)" class="ln"/>
      <text x="100" y="152" class="tx-b" text-anchor="middle">c¹</text>
      <text x="140" y="152" class="tx-b" text-anchor="middle">d¹</text>
      <text x="180" y="152" class="tx-b" text-anchor="middle">e¹</text>
      <text x="220" y="152" class="tx-b" text-anchor="middle">f¹</text>
      <text x="260" y="152" class="tx-b t2" text-anchor="middle">g¹</text>
      <text x="300" y="152" class="tx-b" text-anchor="middle">a¹</text>
      <text x="340" y="152" class="tx-b" text-anchor="middle">h¹</text>
      <text x="380" y="152" class="tx-b" text-anchor="middle">c²</text>
      <text x="100" y="176" class="tx-s" text-anchor="middle">do</text>
      <text x="140" y="176" class="tx-s" text-anchor="middle">re</text>
      <text x="180" y="176" class="tx-s" text-anchor="middle">mi</text>
      <text x="220" y="176" class="tx-s" text-anchor="middle">fa</text>
      <text x="260" y="176" class="tx-s" text-anchor="middle">sol</text>
      <text x="300" y="176" class="tx-s" text-anchor="middle">la</text>
      <text x="340" y="176" class="tx-s" text-anchor="middle">si</text>
      <text x="380" y="176" class="tx-s" text-anchor="middle">do</text>
    </svg>`,
    text: `<p>Nuty zapisujemy na <b>pięciolinii</b> – to pięć poziomych linii. Linie liczymy <b>od dołu</b>. Nuta stoi na linii albo w polu między liniami. <b>Im wyżej nuta, tym wyższy dźwięk.</b></p>
      <p>Na początku stoi <b>klucz wiolinowy</b> (klucz G). Zaczyna się na <b>drugiej linii</b> i mówi: tu leży dźwięk <b>g</b>. Od niego odczytasz pozostałe dźwięki: <b>c, d, e, f, g, a, h, c</b> – czyli <b>do, re, mi, fa, sol, la, si, do</b>. Najniższe c stoi na krótkiej, dodanej linii pod pięciolinią.</p>`,
    remember: 'Linie liczymy od dołu. Klucz wiolinowy = klucz G: na 2. linii leży dźwięk g.',
    hook: 'Pięciolinia jest jak blok z pięcioma piętrami – piętra liczysz <b>od parteru</b>, czyli od dołu. Nuta „mieszka” na linii albo między liniami.',
    check: { q: 'W kluczu wiolinowym nuta leży na trzeciej linii (licząc od dołu). Jaki to dźwięk?', options: ['h', 'g', 'a'], answer: 0, explain: 'Pierwsza linia – e, druga – g, trzecia – h. W polach między nimi leżą f i a.' },
  },
  {
    title: 'Długie i krótkie nuty',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Wartości rytmiczne: cała nuta (pusta główka bez laski) trwa 4 ćwierćnuty, półnuta (pusta główka z laską) – 2 ćwierćnuty, ćwierćnuta (zamalowana główka z laską) – 1 ćwierćnutę, ósemka (zamalowana główka, laska i chorągiewka) – pół ćwierćnuty. Obok paski pokazują długość.">
      <ellipse cx="40" cy="38" rx="9" ry="6" transform="rotate(-20 40 38)" class="ln"/>
      <ellipse cx="40" cy="88" rx="9" ry="6" transform="rotate(-20 40 88)" class="ln"/>
      <line x1="48" y1="85" x2="48" y2="56" class="ln"/>
      <ellipse cx="40" cy="138" rx="9" ry="6" transform="rotate(-20 40 138)" class="tx"/>
      <line x1="48" y1="135" x2="48" y2="106" class="ln"/>
      <ellipse cx="40" cy="188" rx="9" ry="6" transform="rotate(-20 40 188)" class="tx"/>
      <line x1="48" y1="185" x2="48" y2="156" class="ln"/>
      <path d="M48,156 C51,166 62,168 59,182" class="ln"/>
      <text x="75" y="36" class="tx-b">cała nuta</text>
      <text x="75" y="54" class="tx-s">= 4 ćwierćnuty</text>
      <text x="75" y="86" class="tx-b">półnuta</text>
      <text x="75" y="104" class="tx-s">= 2 ćwierćnuty</text>
      <text x="75" y="136" class="tx-b">ćwierćnuta</text>
      <text x="75" y="154" class="tx-s">= 1 ćwierćnuta</text>
      <text x="75" y="186" class="tx-b">ósemka</text>
      <text x="75" y="204" class="tx-s">= pół ćwierćnuty</text>
      <rect x="208" y="24" width="41" height="26" rx="5" class="f1 s1"/>
      <rect x="253" y="24" width="41" height="26" rx="5" class="f1 s1"/>
      <rect x="298" y="24" width="41" height="26" rx="5" class="f1 s1"/>
      <rect x="343" y="24" width="41" height="26" rx="5" class="f1 s1"/>
      <rect x="208" y="74" width="41" height="26" rx="5" class="f3 s3"/>
      <rect x="253" y="74" width="41" height="26" rx="5" class="f3 s3"/>
      <rect x="208" y="124" width="41" height="26" rx="5" class="f4 s4"/>
      <rect x="208" y="174" width="19" height="26" rx="5" class="f2 s2"/>
    </svg>`,
    text: `<p>Rytm zapisujemy nutami o różnej długości (<b>wartości rytmiczne</b>). Liczymy je w <b>ćwierćnutach</b>:</p>
      <ul>
        <li><b>cała nuta</b> – pusta główka bez laski – 4 ćwierćnuty,</li>
        <li><b>półnuta</b> – pusta główka z laską – 2 ćwierćnuty,</li>
        <li><b>ćwierćnuta</b> – zamalowana główka z laską – 1,</li>
        <li><b>ósemka</b> – zamalowana główka, laska i chorągiewka – pół ćwierćnuty.</li>
      </ul>
      <p>Każda nuta ma swoją <b>pauzę</b> – znak ciszy, która trwa tyle samo co nuta.</p>`,
    remember: 'Cała nuta = 2 półnuty = 4 ćwierćnuty = 8 ósemek.',
    hook: 'Jak z pizzą: <b>cała</b> pizza, <b>pół</b> pizzy, <b>ćwierć</b> pizzy i maleńki kawałek – <b>ósemka</b>. Nazwa nuty mówi, jaką częścią całej nuty jest.',
    check: { q: 'Ile ćwierćnut trwa półnuta?', options: ['2', '4', '1'], answer: 0, explain: 'Półnuta to połowa całej nuty: 4 : 2 = 2 ćwierćnuty.' },
  },
  {
    title: 'Takt i metrum – liczymy „na trzy”',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Zapis w metrum trzy czwarte, trzy takty oddzielone kreskami taktowymi, na końcu podwójna kreska. Takt pierwszy: trzy ćwierćnuty – RAZ, dwa, trzy. Takt drugi: półnuta i ćwierćnuta – RAZ-dwa, trzy. Takt trzeci: dwie ósemki i dwie ćwierćnuty – RAZ, dwa, trzy.">
      <line x1="20" y1="60" x2="405" y2="60" class="ln-thin"/>
      <line x1="20" y1="72" x2="405" y2="72" class="ln-thin"/>
      <line x1="20" y1="84" x2="405" y2="84" class="ln-thin"/>
      <line x1="20" y1="96" x2="405" y2="96" class="ln-thin"/>
      <line x1="20" y1="108" x2="405" y2="108" class="ln-thin"/>
      <text x="38" y="80" class="tx-b" text-anchor="middle">3</text>
      <text x="38" y="104" class="tx-b" text-anchor="middle">4</text>
      <ellipse cx="80" cy="84" rx="7" ry="5" transform="rotate(-20 80 84)" class="tx"/>
      <line x1="86" y1="82" x2="86" y2="54" class="ln"/>
      <ellipse cx="115" cy="84" rx="7" ry="5" transform="rotate(-20 115 84)" class="tx"/>
      <line x1="121" y1="82" x2="121" y2="54" class="ln"/>
      <ellipse cx="150" cy="84" rx="7" ry="5" transform="rotate(-20 150 84)" class="tx"/>
      <line x1="156" y1="82" x2="156" y2="54" class="ln"/>
      <line x1="175" y1="60" x2="175" y2="108" class="ln"/>
      <ellipse cx="205" cy="84" rx="7" ry="5" transform="rotate(-20 205 84)" class="ln"/>
      <line x1="211" y1="82" x2="211" y2="54" class="ln"/>
      <ellipse cx="262" cy="84" rx="7" ry="5" transform="rotate(-20 262 84)" class="tx"/>
      <line x1="268" y1="82" x2="268" y2="54" class="ln"/>
      <line x1="290" y1="60" x2="290" y2="108" class="ln"/>
      <ellipse cx="310" cy="84" rx="7" ry="5" transform="rotate(-20 310 84)" class="tx"/>
      <line x1="316" y1="82" x2="316" y2="54" class="ln"/>
      <path d="M316,54 C318,61 326,63 324,72" class="ln"/>
      <ellipse cx="332" cy="84" rx="7" ry="5" transform="rotate(-20 332 84)" class="tx"/>
      <line x1="338" y1="82" x2="338" y2="54" class="ln"/>
      <path d="M338,54 C340,61 348,63 346,72" class="ln"/>
      <ellipse cx="356" cy="84" rx="7" ry="5" transform="rotate(-20 356 84)" class="tx"/>
      <line x1="362" y1="82" x2="362" y2="54" class="ln"/>
      <ellipse cx="385" cy="84" rx="7" ry="5" transform="rotate(-20 385 84)" class="tx"/>
      <line x1="391" y1="82" x2="391" y2="54" class="ln"/>
      <line x1="400" y1="60" x2="400" y2="108" class="ln"/>
      <line x1="405" y1="60" x2="405" y2="108" class="ln sw"/>
      <text x="118" y="30" class="tx-s" text-anchor="middle">takt 1</text>
      <text x="232" y="30" class="tx-s" text-anchor="middle">takt 2</text>
      <text x="348" y="30" class="tx-s" text-anchor="middle">takt 3</text>
      <text x="80" y="134" class="tx-s t2" text-anchor="middle">RAZ</text>
      <text x="115" y="134" class="tx-s" text-anchor="middle">dwa</text>
      <text x="150" y="134" class="tx-s" text-anchor="middle">trzy</text>
      <text x="215" y="134" class="tx-s t2" text-anchor="middle">RAZ-dwa</text>
      <text x="262" y="134" class="tx-s" text-anchor="middle">trzy</text>
      <text x="318" y="134" class="tx-s t2" text-anchor="middle">RAZ</text>
      <text x="354" y="134" class="tx-s" text-anchor="middle">dwa</text>
      <text x="389" y="134" class="tx-s" text-anchor="middle">trzy</text>
      <text x="210" y="160" class="tx-s" text-anchor="middle">kreska taktowa dzieli utwór na takty</text>
    </svg>`,
    text: `<p>Utwór dzielimy na <b>takty</b> pionowymi <b>kreskami taktowymi</b>. Na końcu utworu stoi <b>podwójna kreska</b>.</p>
      <p><b>Metrum</b> zapisujemy na początku, jak ułamek. <b>3/4</b> znaczy: w każdym takcie są <b>3 ćwierćnuty</b>. Mogą to być trzy ćwierćnuty, półnuta i ćwierćnuta albo dwie ósemki i dwie ćwierćnuty – razem zawsze tyle samo. Podobnie <b>2/4</b> – dwie ćwierćnuty w takcie, <b>4/4</b> – cztery.</p>`,
    remember: 'Metrum 2/4, 3/4, 4/4 – górna liczba mówi, ile ćwierćnut mieści się w takcie.',
    hook: 'Takt to pudełko na określoną liczbę ćwierćnut. W metrum 3/4 do każdego pudełka wkładasz dokładnie 3 – ani mniej, ani więcej.',
    check: { q: 'Utwór ma metrum 2/4. Co wypełni cały takt?', options: ['półnuta', 'cała nuta', 'trzy ćwierćnuty'], answer: 0, explain: 'W takcie 2/4 są 2 ćwierćnuty, a półnuta trwa właśnie 2 ćwierćnuty. Cała nuta (4) i trzy ćwierćnuty (3) się nie zmieszczą.' },
  },
  {
    title: 'Tempo i dynamika – po włosku',
    svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Tempo, czyli szybkość, od najwolniejszego: largo – bardzo wolno, andante – spokojnie, allegro – szybko, presto – bardzo szybko. Dynamika, czyli głośność, od najcichszej: pp, p, mf, f, ff – słupki rosną. Crescendo – coraz głośniej, decrescendo – coraz ciszej.">
      <defs><marker id="a-k4mu-el-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="18" class="tx-s">TEMPO – szybkość</text>
      <text x="60" y="46" class="tx-b" text-anchor="middle">🐌</text>
      <text x="150" y="46" class="tx-b" text-anchor="middle">🚶</text>
      <text x="245" y="46" class="tx-b" text-anchor="middle">🏃</text>
      <text x="340" y="46" class="tx-b" text-anchor="middle">🚀</text>
      <line x1="20" y1="60" x2="385" y2="60" class="ln s2" marker-end="url(#a-k4mu-el-1)"/>
      <text x="60" y="84" class="tx-b" text-anchor="middle">largo</text>
      <text x="150" y="84" class="tx-b" text-anchor="middle">andante</text>
      <text x="245" y="84" class="tx-b" text-anchor="middle">allegro</text>
      <text x="340" y="84" class="tx-b" text-anchor="middle">presto</text>
      <text x="60" y="103" class="tx-s" text-anchor="middle">bardzo wolno</text>
      <text x="150" y="103" class="tx-s" text-anchor="middle">spokojnie</text>
      <text x="245" y="103" class="tx-s" text-anchor="middle">szybko</text>
      <text x="340" y="103" class="tx-s" text-anchor="middle">bardzo szybko</text>
      <text x="10" y="136" class="tx-s">DYNAMIKA – głośność</text>
      <rect x="30" y="188" width="50" height="12" rx="3" class="f1 s1"/>
      <rect x="100" y="178" width="50" height="22" rx="3" class="f1 s1"/>
      <rect x="170" y="166" width="50" height="34" rx="3" class="f4 s4"/>
      <rect x="240" y="154" width="50" height="46" rx="3" class="f2 s2"/>
      <rect x="310" y="142" width="50" height="58" rx="3" class="f2 s2"/>
      <text x="55" y="220" class="tx-b" text-anchor="middle">pp</text>
      <text x="125" y="220" class="tx-b" text-anchor="middle">p</text>
      <text x="195" y="220" class="tx-b" text-anchor="middle">mf</text>
      <text x="265" y="220" class="tx-b" text-anchor="middle">f</text>
      <text x="335" y="220" class="tx-b" text-anchor="middle">ff</text>
      <text x="200" y="243" class="tx-s" text-anchor="middle">crescendo &lt; coraz głośniej · decrescendo &gt; coraz ciszej</text>
    </svg>`,
    text: `<p><b>Tempo</b> i <b>dynamikę</b> zapisuje się w nutach po włosku.</p>
      <ul>
        <li>Tempo od najwolniejszego: <b>largo</b> (bardzo wolno), <b>andante</b> (spokojnie, w tempie kroku), <b>allegro</b> (szybko, wesoło), <b>presto</b> (bardzo szybko).</li>
        <li>Dynamika: <b>pp</b> pianissimo – bardzo cicho, <b>p</b> piano – cicho, <b>mf</b> mezzoforte – średnio głośno, <b>f</b> forte – głośno, <b>ff</b> fortissimo – bardzo głośno.</li>
        <li><b>Crescendo</b> (znak &lt;) – coraz głośniej, <b>decrescendo</b> albo diminuendo (znak &gt;) – coraz ciszej.</li>
      </ul>`,
    remember: 'Largo → andante → allegro → presto (coraz szybciej). pp → p → mf → f → ff (coraz głośniej).',
    hook: '<b>F</b>orte – <b>f</b>ajerwerki, głośno. <b>P</b>iano – <b>p</b>szczółka, cichutko. Znak crescendo &lt; rozszerza się jak głos, który rośnie.',
    check: { q: 'Który znak każe zagrać bardzo głośno?', options: ['ff', 'pp', 'mf'], answer: 0, explain: 'ff to fortissimo – bardzo głośno. pp (pianissimo) to bardzo cicho, a mf – średnio głośno.' },
  },
  {
    title: 'Uwaga na pułapki!',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Pułapki i poprawne odpowiedzi. Linie pięciolinii liczymy: źle – od góry, dobrze – od dołu. Dźwięk po a to: źle – b, dobrze – h. Znak p oznacza: źle – pomału, dobrze – cicho (piano). Ósemka trwa: źle – 8 ćwierćnut, dobrze – pół ćwierćnuty.">
      <text x="200" y="18" class="tx-s" text-anchor="middle">linie pięciolinii liczymy…</text>
      <rect x="6" y="24" width="190" height="32" rx="8" class="f2 s2"/>
      <rect x="204" y="24" width="190" height="32" rx="8" class="f3 s3"/>
      <text x="101" y="46" class="tx" text-anchor="middle">✗ od góry</text>
      <text x="299" y="46" class="tx-b" text-anchor="middle">✓ od dołu</text>
      <text x="200" y="76" class="tx-s" text-anchor="middle">dźwięk po a to…</text>
      <rect x="6" y="82" width="190" height="32" rx="8" class="f2 s2"/>
      <rect x="204" y="82" width="190" height="32" rx="8" class="f3 s3"/>
      <text x="101" y="104" class="tx" text-anchor="middle">✗ b</text>
      <text x="299" y="104" class="tx-b" text-anchor="middle">✓ h</text>
      <text x="200" y="134" class="tx-s" text-anchor="middle">znak p oznacza…</text>
      <rect x="6" y="140" width="190" height="32" rx="8" class="f2 s2"/>
      <rect x="204" y="140" width="190" height="32" rx="8" class="f3 s3"/>
      <text x="101" y="162" class="tx" text-anchor="middle">✗ pomału</text>
      <text x="299" y="162" class="tx-b" text-anchor="middle">✓ cicho (piano)</text>
      <text x="200" y="192" class="tx-s" text-anchor="middle">ósemka trwa…</text>
      <rect x="6" y="198" width="190" height="32" rx="8" class="f2 s2"/>
      <rect x="204" y="198" width="190" height="32" rx="8" class="f3 s3"/>
      <text x="101" y="220" class="tx" text-anchor="middle">✗ 8 ćwierćnut</text>
      <text x="299" y="220" class="tx-b" text-anchor="middle">✓ pół ćwierćnuty</text>
    </svg>`,
    text: `<p>Na koniec – miejsca, w których najłatwiej o pomyłkę:</p>
      <ul>
        <li>Linie pięciolinii liczymy <b>od dołu</b>: pierwsza linia jest najniżej.</li>
        <li>W polskich nazwach po a jest <b>h</b>, a potem znowu c. (Po angielsku ten sam dźwięk nazywa się B.)</li>
        <li><b>p</b> (piano) dotyczy głośności, a nie szybkości: to znaczy <b>cicho</b>. O szybkości mówi tempo.</li>
        <li><b>Ósemka</b> nie trwa 8 ćwierćnut – jest krótka: to <b>pół ćwierćnuty</b>. Cała nuta to 8 ósemek.</li>
      </ul>`,
    remember: 'Od dołu · c d e f g a h c · p = cicho · ósemka = pół ćwierćnuty.',
    check: { q: 'Co oznacza w nutach znak p?', options: ['cicho', 'powoli', 'pauzę'], answer: 0, explain: 'p to piano – cicho. Szybkość (np. powoli – largo) opisuje tempo, a pauza ma osobny znak.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['muzyka/instrumenty-i-formy'] = [
  {
    title: 'Jak powstaje dźwięk instrumentu?',
    svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Sześć grup instrumentów: strunowe smyczkowe – smyczek pociera struny, np. skrzypce; strunowe szarpane – szarpiesz struny, np. gitara i harfa; dęte drewniane – dmuchasz, np. flet i klarnet; dęte blaszane – drgają wargi, np. trąbka i tuba; perkusyjne – uderzasz albo potrząsasz, np. bęben i trójkąt; klawiszowe – naciskasz klawisze, np. fortepian.">
      <rect x="6" y="6" width="124" height="116" rx="12" class="f1 s1"/>
      <rect x="138" y="6" width="124" height="116" rx="12" class="f1 s1"/>
      <rect x="270" y="6" width="124" height="116" rx="12" class="f3 s3"/>
      <rect x="6" y="128" width="124" height="116" rx="12" class="f3 s3"/>
      <rect x="138" y="128" width="124" height="116" rx="12" class="f2 s2"/>
      <rect x="270" y="128" width="124" height="116" rx="12" class="f4 s4"/>
      <text x="68" y="34" class="tx-s" text-anchor="middle">🎻 strunowe</text>
      <text x="200" y="34" class="tx-s" text-anchor="middle">🎸 strunowe</text>
      <text x="332" y="34" class="tx-s" text-anchor="middle">🌬️ dęte</text>
      <text x="68" y="156" class="tx-s" text-anchor="middle">🎺 dęte</text>
      <text x="200" y="156" class="tx-s" text-anchor="middle">🥁</text>
      <text x="332" y="156" class="tx-s" text-anchor="middle">🎹</text>
      <text x="68" y="60" class="tx-b" text-anchor="middle">smyczkowe</text>
      <text x="200" y="60" class="tx-b" text-anchor="middle">szarpane</text>
      <text x="332" y="60" class="tx-b" text-anchor="middle">drewniane</text>
      <text x="68" y="182" class="tx-b" text-anchor="middle">blaszane</text>
      <text x="200" y="182" class="tx-b" text-anchor="middle">perkusyjne</text>
      <text x="332" y="182" class="tx-b" text-anchor="middle">klawiszowe</text>
      <text x="68" y="84" class="tx-s" text-anchor="middle">smyczek pociera</text>
      <text x="200" y="84" class="tx-s" text-anchor="middle">szarpiesz struny</text>
      <text x="332" y="84" class="tx-s" text-anchor="middle">dmuchasz</text>
      <text x="68" y="206" class="tx-s" text-anchor="middle">drgają wargi</text>
      <text x="200" y="206" class="tx-s" text-anchor="middle">uderzasz</text>
      <text x="332" y="206" class="tx-s" text-anchor="middle">naciskasz</text>
      <text x="68" y="106" class="tx-s" text-anchor="middle">skrzypce</text>
      <text x="200" y="106" class="tx-s" text-anchor="middle">gitara, harfa</text>
      <text x="332" y="106" class="tx-s" text-anchor="middle">flet, klarnet</text>
      <text x="68" y="228" class="tx-s" text-anchor="middle">trąbka, tuba</text>
      <text x="200" y="228" class="tx-s" text-anchor="middle">bęben, trójkąt</text>
      <text x="332" y="228" class="tx-s" text-anchor="middle">fortepian</text>
    </svg>`,
    text: `<p>Instrumenty dzielimy według tego, <b>jak powstaje dźwięk</b>:</p>
      <ul>
        <li><b>strunowe smyczkowe</b> – smyczek pociera struny (skrzypce, altówka, wiolonczela, kontrabas),</li>
        <li><b>strunowe szarpane</b> – szarpiesz struny palcami albo kostką (gitara, harfa),</li>
        <li><b>dęte drewniane</b> – dmuchasz w instrument (flet, klarnet, obój, fagot),</li>
        <li><b>dęte blaszane</b> – dmuchasz w ustnik, drgają wargi (trąbka, puzon, róg, tuba),</li>
        <li><b>perkusyjne</b> – uderzasz albo potrząsasz (bęben, talerze, trójkąt, ksylofon),</li>
        <li><b>klawiszowe</b> – naciskasz klawisze (fortepian, pianino, organy).</li>
      </ul>`,
    remember: 'Grupę instrumentu poznasz po tym, co robisz: pocierasz smyczkiem, szarpiesz, dmuchasz, uderzasz czy naciskasz klawisze.',
    hook: 'Zapytaj instrument: <b>„Co mam z tobą zrobić, żebyś zagrał?”</b> – odpowiedź to nazwa grupy.',
    check: { q: 'Do której grupy należy harfa?', options: ['strunowe szarpane', 'strunowe smyczkowe', 'perkusyjne'], answer: 0, explain: 'Na harfie gra się, szarpiąc struny palcami – tak jak na gitarze.' },
  },
  {
    title: 'Im większy, tym niżej gra',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Cztery instrumenty smyczkowe od najmniejszego do największego: skrzypce, altówka, wiolonczela, kontrabas. Strzałka: im większy instrument, tym niżej gra. Skrzypce grają najwyżej, kontrabas najniżej.">
      <defs><marker id="a-k4mu-in-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="20" class="tx-s" text-anchor="middle">coraz większy → coraz niższy dźwięk</text>
      <line x1="30" y1="32" x2="380" y2="32" class="ln s2" marker-end="url(#a-k4mu-in-1)"/>
      <rect x="40" y="130" width="30" height="45" rx="12" class="f1 s1 sw"/>
      <rect x="128" y="115" width="36" height="60" rx="13" class="f1 s1 sw"/>
      <rect x="220" y="85" width="44" height="90" rx="16" class="f1 s1 sw"/>
      <rect x="312" y="50" width="54" height="125" rx="20" class="f1 s1 sw"/>
      <line x1="55" y1="130" x2="55" y2="118" class="ln"/>
      <line x1="146" y1="115" x2="146" y2="100" class="ln"/>
      <line x1="242" y1="85" x2="242" y2="66" class="ln"/>
      <line x1="242" y1="175" x2="242" y2="184" class="ln"/>
      <line x1="339" y1="50" x2="339" y2="40" class="ln"/>
      <line x1="339" y1="175" x2="339" y2="184" class="ln"/>
      <text x="55" y="202" class="tx" text-anchor="middle">skrzypce</text>
      <text x="146" y="202" class="tx" text-anchor="middle">altówka</text>
      <text x="242" y="202" class="tx" text-anchor="middle">wiolonczela</text>
      <text x="339" y="202" class="tx" text-anchor="middle">kontrabas</text>
      <text x="55" y="216" class="tx-s t1" text-anchor="middle">najwyżej</text>
      <text x="339" y="216" class="tx-s t2" text-anchor="middle">najniżej</text>
    </svg>`,
    text: `<p>Rodzina smyczkowa ma czterech członków: <b>skrzypce</b>, <b>altówkę</b>, <b>wiolonczelę</b> i <b>kontrabas</b>. Im większy instrument, tym <b>niżej</b> gra. Najwyżej grają małe skrzypce, najniżej – ogromny kontrabas.</p>
      <p>Instrumenty <b>perkusyjne</b> też dzielimy na dwie grupy: <b>melodyczne</b> grają różne wysokości dźwięków, więc zagrasz na nich melodię (dzwonki, ksylofon), a <b>niemelodyczne</b> dają tylko rytm (bęben, trójkąt, tamburyn).</p>`,
    remember: 'Skrzypce – altówka – wiolonczela – kontrabas: coraz większe i coraz niżej grają.',
    hook: 'Jak z psami: mały piesek piszczy wysoko, a wielki pies szczeka nisko. Mały instrument – wysoki dźwięk, duży – niski.',
    check: { q: 'Na którym instrumencie perkusyjnym zagrasz melodię?', options: ['na ksylofonie', 'na bębnie', 'na trójkącie'], answer: 0, explain: 'Ksylofon jest melodyczny – ma sztabki o różnej wysokości dźwięku. Bęben i trójkąt dają tylko rytm.' },
  },
  {
    title: 'Głosy wysokie i niskie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Tabela głosów ludzkich. Głosy kobiece: sopran – wysoki, alt – niski. Głosy męskie: tenor – wysoki, bas – niski.">
      <text x="200" y="28" class="tx-b" text-anchor="middle">wysoki ⬆</text>
      <text x="330" y="28" class="tx-b" text-anchor="middle">niski ⬇</text>
      <text x="12" y="84" class="tx-b">👩 kobiece</text>
      <text x="12" y="156" class="tx-b">👨 męskie</text>
      <rect x="140" y="46" width="120" height="56" rx="12" class="f5 s5 sw"/>
      <rect x="270" y="46" width="120" height="56" rx="12" class="f5 s5"/>
      <rect x="140" y="118" width="120" height="56" rx="12" class="f1 s1 sw"/>
      <rect x="270" y="118" width="120" height="56" rx="12" class="f1 s1"/>
      <text x="200" y="80" class="tx-b" text-anchor="middle">sopran</text>
      <text x="330" y="80" class="tx-b" text-anchor="middle">alt</text>
      <text x="200" y="152" class="tx-b" text-anchor="middle">tenor</text>
      <text x="330" y="152" class="tx-b" text-anchor="middle">bas</text>
    </svg>`,
    text: `<p>Ludzkie głosy też są wysokie i niskie. Mamy cztery główne głosy:</p>
      <ul>
        <li>głosy kobiece: <b>sopran</b> – wysoki, <b>alt</b> – niski,</li>
        <li>głosy męskie: <b>tenor</b> – wysoki, <b>bas</b> – niski.</li>
      </ul>
      <p>Muzyka <b>wokalna</b> to muzyka śpiewana, <b>instrumentalna</b> – grana, a <b>wokalno-instrumentalna</b> – śpiew razem z instrumentami.</p>`,
    remember: 'Sopran i alt – głosy kobiece (wysoki i niski). Tenor i bas – głosy męskie (wysoki i niski).',
    hook: '<b>Bas</b> brzmi jak basy w głośniku – nisko i „dudniąco”.',
    check: { q: 'Jak nazywa się niski głos kobiecy?', options: ['alt', 'sopran', 'tenor'], answer: 0, explain: 'Alt to niski głos kobiecy. Sopran – wysoki kobiecy, tenor – wysoki męski.' },
  },
  {
    title: 'Solo, duet, chór, orkiestra',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Zespoły wykonawcze: solista – 1 osoba, duet – 2 osoby, trio – 3 osoby, kwartet – 4 osoby. Chór – zespół śpiewaków, śpiewa w nim chórzysta. Orkiestra – zespół muzyków grających na instrumentach, kieruje nią dyrygent.">
      <rect x="6" y="6" width="92" height="96" rx="12" class="f4 s4"/>
      <rect x="104" y="6" width="92" height="96" rx="12" class="f4 s4"/>
      <rect x="202" y="6" width="92" height="96" rx="12" class="f4 s4"/>
      <rect x="300" y="6" width="94" height="96" rx="12" class="f4 s4"/>
      <text x="52" y="38" class="tx" text-anchor="middle">🧑</text>
      <text x="150" y="38" class="tx" text-anchor="middle">🧑🧑</text>
      <text x="248" y="38" class="tx" text-anchor="middle">🧑🧑🧑</text>
      <text x="347" y="38" class="tx" text-anchor="middle">🧑🧑🧑🧑</text>
      <text x="52" y="68" class="tx-b" text-anchor="middle">solista</text>
      <text x="150" y="68" class="tx-b" text-anchor="middle">duet</text>
      <text x="248" y="68" class="tx-b" text-anchor="middle">trio</text>
      <text x="347" y="68" class="tx-b" text-anchor="middle">kwartet</text>
      <text x="52" y="90" class="tx-s" text-anchor="middle">1 osoba</text>
      <text x="150" y="90" class="tx-s" text-anchor="middle">2 osoby</text>
      <text x="248" y="90" class="tx-s" text-anchor="middle">3 osoby</text>
      <text x="347" y="90" class="tx-s" text-anchor="middle">4 osoby</text>
      <rect x="6" y="112" width="190" height="102" rx="12" class="f5 s5"/>
      <rect x="204" y="112" width="190" height="102" rx="12" class="f1 s1"/>
      <text x="101" y="144" class="tx-b" text-anchor="middle">🎤 chór</text>
      <text x="299" y="144" class="tx-b" text-anchor="middle">🎻 orkiestra</text>
      <text x="101" y="172" class="tx-s" text-anchor="middle">zespół śpiewaków</text>
      <text x="101" y="194" class="tx-s" text-anchor="middle">śpiewa w nim chórzysta</text>
      <text x="299" y="172" class="tx-s" text-anchor="middle">gra na instrumentach</text>
      <text x="299" y="194" class="tx-s" text-anchor="middle">kieruje nią dyrygent</text>
    </svg>`,
    text: `<p><b>Solista</b> wykonuje utwór sam albo ma w nim główną partię. Dwie osoby to <b>duet</b>, trzy – <b>trio</b>, cztery – <b>kwartet</b>.</p>
      <p><b>Chór</b> to zespół śpiewaków – każdy z nich to <b>chórzysta</b>. <b>Orkiestra</b> to duży zespół muzyków grających na instrumentach. Kieruje nią <b>dyrygent</b>: pokazuje tempo, wejścia i dynamikę.</p>`,
    remember: 'Duet – 2, trio – 3, kwartet – 4. Orkiestrą kieruje dyrygent.',
    hook: '<b>Du</b>et – jak „<b>dwa</b>”, <b>tri</b>o – jak „<b>trzy</b>”, <b>kwart</b>et – jak <b>kwart</b>ał, czyli jedna z czterech części roku.',
    check: { q: 'Trzy osoby śpiewają razem piosenkę. Jak nazywamy taki zespół?', options: ['trio', 'duet', 'kwartet'], answer: 0, explain: 'Duet to 2 osoby, trio – 3, kwartet – 4.' },
  },
  {
    title: 'Piosenka, kanon, opera i balet',
    svg: `<svg viewBox="0 0 400 290" role="img" aria-label="Formy muzyczne. Piosenka: zwrotka, refren, zwrotka, refren, zwrotka, refren – refren się powtarza. Kanon: trzy grupy śpiewają tę samą melodię, ale zaczynają po kolei. Przedstawienia: opera – śpiew, balet – taniec bez słów, musical – śpiew, taniec i mowa.">
      <text x="10" y="18" class="tx-s">PIOSENKA</text>
      <rect x="6" y="26" width="60" height="34" rx="6" class="f1 s1"/>
      <rect x="72" y="26" width="60" height="34" rx="6" class="f4 s4 sw"/>
      <rect x="138" y="26" width="60" height="34" rx="6" class="f1 s1"/>
      <rect x="204" y="26" width="60" height="34" rx="6" class="f4 s4 sw"/>
      <rect x="270" y="26" width="60" height="34" rx="6" class="f1 s1"/>
      <rect x="336" y="26" width="58" height="34" rx="6" class="f4 s4 sw"/>
      <text x="36" y="48" class="tx-s" text-anchor="middle">zwrotka</text>
      <text x="102" y="48" class="tx-s" text-anchor="middle">refren</text>
      <text x="168" y="48" class="tx-s" text-anchor="middle">zwrotka</text>
      <text x="234" y="48" class="tx-s" text-anchor="middle">refren</text>
      <text x="300" y="48" class="tx-s" text-anchor="middle">zwrotka</text>
      <text x="365" y="48" class="tx-s" text-anchor="middle">refren</text>
      <text x="10" y="90" class="tx-s">KANON – ta sama melodia, start po kolei</text>
      <text x="10" y="117" class="tx-s">grupa 1</text>
      <text x="10" y="145" class="tx-s">grupa 2</text>
      <text x="10" y="173" class="tx-s">grupa 3</text>
      <rect x="70" y="100" width="210" height="24" rx="6" class="f3 s3"/>
      <rect x="126" y="128" width="210" height="24" rx="6" class="f3 s3"/>
      <rect x="182" y="156" width="210" height="24" rx="6" class="f3 s3"/>
      <rect x="6" y="194" width="124" height="90" rx="12" class="f5 s5"/>
      <rect x="138" y="194" width="124" height="90" rx="12" class="f2 s2"/>
      <rect x="270" y="194" width="124" height="90" rx="12" class="f1 s1"/>
      <text x="68" y="222" class="tx-b" text-anchor="middle">🎤 opera</text>
      <text x="200" y="222" class="tx-b" text-anchor="middle">💃 balet</text>
      <text x="332" y="222" class="tx-b" text-anchor="middle">🎭 musical</text>
      <text x="68" y="250" class="tx-s" text-anchor="middle">śpiewają</text>
      <text x="68" y="270" class="tx-s" text-anchor="middle">swoje role</text>
      <text x="200" y="250" class="tx-s" text-anchor="middle">taniec</text>
      <text x="200" y="270" class="tx-s" text-anchor="middle">bez słów</text>
      <text x="332" y="250" class="tx-s" text-anchor="middle">śpiew, taniec</text>
      <text x="332" y="270" class="tx-s" text-anchor="middle">i mowa</text>
    </svg>`,
    text: `<p><b>Piosenka</b> ma <b>zwrotki</b> (za każdym razem inne słowa) i <b>refren</b> – fragment, który się powtarza. W <b>kanonie</b> wszyscy śpiewają tę samą melodię, ale zaczynają po kolei, jeden po drugim. <b>Pieśń</b> to utwór na głos z akompaniamentem, często poważniejszy niż piosenka.</p>
      <p>Duże formy: <b>symfonia</b> – utwór na orkiestrę, zwykle z kilku części; <b>koncert</b> – utwór na <b>solistę i orkiestrę</b>. W <b>operze</b> śpiewacy śpiewają swoje role, w <b>balecie</b> historię opowiada taniec bez słów, a w <b>musicalu</b> się śpiewa, tańczy i mówi. <b>Muzyka filmowa</b> buduje nastrój scen w filmie.</p>`,
    remember: 'Refren się powtarza. Kanon – ta sama melodia, start po kolei. Opera – śpiew, balet – taniec.',
    hook: 'Kanon jest jak „fala” na stadionie: każdy robi to samo, tylko trochę później niż sąsiad.',
    check: { q: 'Jak nazywa się utwór na solistę i orkiestrę?', options: ['koncert', 'kanon', 'balet'], answer: 0, explain: 'Koncert to utwór na solistę i orkiestrę (tak nazywa się też występ muzyków).' },
  },
  {
    title: 'Po co jest muzyka? I jak dbać o głos i słuch',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Funkcje muzyki: rozrywkowa – zabawa i taniec, religijna – kościół i modlitwa, obrzędowa – wesele i dożynki, sygnalizacyjna – hejnał. Pod spodem: słuchaj cicho i rób przerwy, nie krzycz i nie śpiewaj na siłę.">
      <rect x="6" y="6" width="190" height="72" rx="12" class="f4 s4"/>
      <rect x="204" y="6" width="190" height="72" rx="12" class="f5 s5"/>
      <rect x="6" y="86" width="190" height="72" rx="12" class="f3 s3"/>
      <rect x="204" y="86" width="190" height="72" rx="12" class="f2 s2"/>
      <text x="101" y="36" class="tx-b" text-anchor="middle">🎉 rozrywkowa</text>
      <text x="299" y="36" class="tx-b" text-anchor="middle">⛪ religijna</text>
      <text x="101" y="116" class="tx-b" text-anchor="middle">💐 obrzędowa</text>
      <text x="299" y="116" class="tx-b" text-anchor="middle">📯 sygnalizacyjna</text>
      <text x="101" y="62" class="tx-s" text-anchor="middle">zabawa, taniec</text>
      <text x="299" y="62" class="tx-s" text-anchor="middle">kościół, modlitwa</text>
      <text x="101" y="142" class="tx-s" text-anchor="middle">wesele, dożynki</text>
      <text x="299" y="142" class="tx-s" text-anchor="middle">hejnał, sygnał startu</text>
      <rect x="6" y="168" width="388" height="62" rx="12" class="f1 s1 sw"/>
      <text x="200" y="194" class="tx" text-anchor="middle">🎧 słuchaj cicho i rób przerwy</text>
      <text x="200" y="218" class="tx" text-anchor="middle">🗣️ nie krzycz, nie śpiewaj na siłę</text>
    </svg>`,
    text: `<p>Muzyka ma różne zadania (<b>funkcje</b>): <b>rozrywkową</b> – dla przyjemności, zabawy i tańca; <b>religijną</b> – w kościele i podczas modlitwy; <b>obrzędową</b> – podczas uroczystości i zwyczajów (wesele, dożynki); <b>sygnalizacyjną</b> – przekazuje sygnał (hejnał). W filmie, reklamie i grach buduje nastrój: szybka i głośna – napięcie, wolna i cicha – spokój.</p>
      <p>Dbaj o <b>głos</b>: nie krzycz, przed śpiewaniem rozgrzej głos i pij wodę, a gdy boli gardło – odpocznij. Dbaj o <b>słuch</b>: w słuchawkach słuchaj cicho i rób przerwy, nie stój tuż przy głośnikach. Głośny dźwięk może trwale uszkodzić słuch.</p>`,
    remember: 'Funkcje muzyki: rozrywkowa, religijna, obrzędowa, sygnalizacyjna. Słuchawki – cicho i z przerwami.',
    hook: 'Słuch to nie telefon – nie naładujesz go od nowa. Uszkodzony może już nie wrócić, więc <b>ścisz</b>.',
    check: { q: 'Na stadionie trąbka gra krótki sygnał na rozpoczęcie zawodów. Jaką funkcję ma ta muzyka?', options: ['sygnalizacyjną', 'religijną', 'obrzędową'], answer: 0, explain: 'Sygnał (np. hejnał) ma przekazać informację – że coś się zaczyna. To funkcja sygnalizacyjna.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['muzyka/muzyka-polska'] = [
  {
    title: '„Mazurek Dąbrowskiego” – skąd się wziął?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Historia hymnu. W 1797 roku we Włoszech Józef Wybicki napisał pieśń dla Legionów Polskich generała Jana Henryka Dąbrowskiego. Dziś „Mazurek Dąbrowskiego” jest hymnem Polski zapisanym w Konstytucji. Melodia to ludowy mazurek o nieznanym autorze. Podczas hymnu stoimy w postawie zasadniczej.">
      <defs><marker id="a-k4mu-pl-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="6" width="184" height="140" rx="12" class="f4 s4"/>
      <rect x="216" y="6" width="178" height="140" rx="12" class="f3 s3"/>
      <text x="98" y="34" class="tx-b" text-anchor="middle">1797, Włochy</text>
      <text x="98" y="62" class="tx" text-anchor="middle">✍️ Józef Wybicki</text>
      <text x="98" y="86" class="tx-s" text-anchor="middle">pieśń dla Legionów</text>
      <text x="98" y="104" class="tx-s" text-anchor="middle">Polskich gen. Jana</text>
      <text x="98" y="122" class="tx-s" text-anchor="middle">Henryka Dąbrowskiego</text>
      <text x="305" y="34" class="tx-b" text-anchor="middle">dziś</text>
      <rect x="285" y="46" width="40" height="13" class="pl-w ln"/>
      <rect x="285" y="59" width="40" height="13" class="pl-r ln"/>
      <text x="305" y="98" class="tx-b" text-anchor="middle">hymn Polski</text>
      <text x="305" y="122" class="tx-s" text-anchor="middle">zapisany w Konstytucji</text>
      <line x1="192" y1="76" x2="212" y2="76" class="ln s2" marker-end="url(#a-k4mu-pl-1)"/>
      <text x="200" y="176" class="tx-s" text-anchor="middle">🎵 melodia: ludowy mazurek – autor nieznany</text>
      <text x="200" y="204" class="tx-s" text-anchor="middle">🧍 podczas hymnu: postawa zasadnicza, w ciszy</text>
    </svg>`,
    text: `<p>W <b>1797 r.</b> Polski nie było na mapie. We Włoszech walczyły <b>Legiony Polskie</b> – polscy żołnierze, którymi dowodził generał <b>Jan Henryk Dąbrowski</b>. Dla nich <b>Józef Wybicki</b> napisał „Pieśń Legionów Polskich we Włoszech”. Melodia jest ludowa – to <b>mazurek</b>; nie wiadomo, kto ją ułożył.</p>
      <p>Dziś „Mazurek Dąbrowskiego” jest <b>hymnem Polski</b> – zapisano to w Konstytucji. Gdy grają hymn, przyjmujemy <b>postawę zasadniczą</b>: stoimy prosto i w ciszy, chłopcy i mężczyźni zdejmują czapki.</p>`,
    remember: 'Słowa: Józef Wybicki, 1797 r., Włochy – dla Legionów gen. Dąbrowskiego.',
    hook: 'Nazwa podpowiada dwie rzeczy: <b>mazurek</b> – taka jest melodia, <b>Dąbrowskiego</b> – dla jego żołnierzy powstała pieśń. Słowa napisał ktoś inny: <b>W</b>ybicki – <b>W</b>łochy.',
    check: { q: 'Kim był Jan Henryk Dąbrowski?', options: ['generałem, który dowodził Legionami', 'autorem słów hymnu', 'kompozytorem melodii hymnu'], answer: 0, explain: 'Dąbrowski dowodził Legionami Polskimi. Słowa napisał Józef Wybicki, a autor melodii (ludowego mazurka) jest nieznany.' },
  },
  {
    title: 'Hymn Unii Europejskiej i „Rota”',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie pieśni. Hymn Unii Europejskiej: „Oda do radości” z IX Symfonii Ludwiga van Beethovena, wykonywana bez słów. „Rota”: pieśń patriotyczna, słowa Maria Konopnicka, muzyka Feliks Nowowiejski.">
      <rect x="4" y="6" width="192" height="188" rx="12" class="f1 s1"/>
      <rect x="204" y="6" width="192" height="188" rx="12" class="f2 s2"/>
      <text x="100" y="36" class="tx-b" text-anchor="middle">🎼 hymn UE</text>
      <text x="100" y="70" class="tx" text-anchor="middle">„Oda do radości”</text>
      <text x="100" y="98" class="tx-s" text-anchor="middle">z IX Symfonii</text>
      <text x="100" y="118" class="tx-s" text-anchor="middle">Ludwiga van Beethovena</text>
      <text x="100" y="160" class="tx-b t1" text-anchor="middle">bez słów</text>
      <text x="100" y="180" class="tx-s" text-anchor="middle">sama melodia</text>
      <text x="300" y="36" class="tx-b" text-anchor="middle">🇵🇱 „Rota”</text>
      <text x="300" y="70" class="tx" text-anchor="middle">pieśń patriotyczna</text>
      <text x="300" y="98" class="tx-s" text-anchor="middle">słowa:</text>
      <text x="300" y="118" class="tx-b" text-anchor="middle">Maria Konopnicka</text>
      <text x="300" y="150" class="tx-s" text-anchor="middle">muzyka:</text>
      <text x="300" y="170" class="tx-b" text-anchor="middle">F. Nowowiejski</text>
    </svg>`,
    text: `<p>Hymnem <b>Unii Europejskiej</b> jest melodia „<b>Ody do radości</b>” z <b>IX Symfonii</b> Ludwiga van <b>Beethovena</b>. Beethoven napisał muzykę do wiersza Friedricha Schillera, ale hymn UE wykonuje się <b>bez słów</b> – muzyka jest wspólnym językiem wszystkich krajów Unii.</p>
      <p>„<b>Rota</b>” to <b>pieśń patriotyczna</b>: słowa napisała <b>Maria Konopnicka</b>, muzykę skomponował <b>Feliks Nowowiejski</b>. Pieśni patriotyczne opowiadają o miłości do ojczyzny i walce o wolność – śpiewamy je w święta państwowe.</p>`,
    remember: 'Hymn UE – „Oda do radości” Beethovena, bez słów. „Rota” – Konopnicka (słowa), Nowowiejski (muzyka).',
    hook: 'Hymn UE nie ma słów, bo w Unii mówi się wieloma językami – a melodię rozumie każdy.',
    check: { q: 'Jak wykonuje się hymn Unii Europejskiej?', options: ['bez słów – samą melodię', 'zawsze po niemiecku', 'w języku każdego kraju po kolei'], answer: 0, explain: 'Hymn UE to sama melodia „Ody do radości” – bez słów.' },
  },
  {
    title: 'Pięć tańców narodowych',
    svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Pięć polskich tańców narodowych: polonez – metrum 3/4, uroczysty, chodzony; krakowiak – metrum 2/4, żywy i skoczny, z okolic Krakowa; mazur – 3/4, szybki, z podskokami, z Mazowsza; kujawiak – 3/4, wolny i kołyszący, z Kujaw; oberek – metrum trójdzielne, bardzo szybki, z wirowaniem. Tylko krakowiak liczymy na dwa.">
      <rect x="6" y="6" width="388" height="36" rx="8" class="f1 s1"/>
      <rect x="6" y="48" width="388" height="36" rx="8" class="f2 s2 sw"/>
      <rect x="6" y="90" width="388" height="36" rx="8" class="f1 s1"/>
      <rect x="6" y="132" width="388" height="36" rx="8" class="f1 s1"/>
      <rect x="6" y="174" width="388" height="36" rx="8" class="f1 s1"/>
      <text x="16" y="30" class="tx-b">polonez</text>
      <text x="16" y="72" class="tx-b">krakowiak</text>
      <text x="16" y="114" class="tx-b">mazur</text>
      <text x="16" y="156" class="tx-b">kujawiak</text>
      <text x="16" y="198" class="tx-b">oberek</text>
      <rect x="118" y="12" width="48" height="24" rx="12" class="bg ln"/>
      <rect x="118" y="54" width="48" height="24" rx="12" class="bg ln"/>
      <rect x="118" y="96" width="48" height="24" rx="12" class="bg ln"/>
      <rect x="118" y="138" width="48" height="24" rx="12" class="bg ln"/>
      <rect x="118" y="180" width="48" height="24" rx="12" class="bg ln"/>
      <text x="142" y="29" class="tx" text-anchor="middle">3/4</text>
      <text x="142" y="71" class="tx-b t2" text-anchor="middle">2/4</text>
      <text x="142" y="113" class="tx" text-anchor="middle">3/4</text>
      <text x="142" y="155" class="tx" text-anchor="middle">3/4</text>
      <text x="142" y="197" class="tx" text-anchor="middle">na 3</text>
      <text x="178" y="29" class="tx-s">uroczysty, „chodzony”</text>
      <text x="178" y="71" class="tx-s">żywy, skoczny – Kraków</text>
      <text x="178" y="113" class="tx-s">szybki, podskoki – Mazowsze</text>
      <text x="178" y="155" class="tx-s">wolny, kołyszący – Kujawy</text>
      <text x="178" y="197" class="tx-s">bardzo szybki, wirowanie</text>
    </svg>`,
    text: `<p>Polska ma <b>pięć tańców narodowych</b>:</p>
      <ul>
        <li><b>polonez</b> – uroczysty, dostojny; pary idą w korowodzie – to taniec „chodzony”,</li>
        <li><b>krakowiak</b> – żywy, skoczny, z okolic Krakowa,</li>
        <li><b>mazur</b> – szybki, z podskokami, z Mazowsza,</li>
        <li><b>kujawiak</b> – wolny, śpiewny, kołyszący, z Kujaw,</li>
        <li><b>oberek</b> – bardzo szybki, z wirowaniem.</li>
      </ul>
      <p>Tylko <b>krakowiak</b> ma metrum dwudzielne – <b>2/4</b>. Pozostałe tańce liczymy „na trzy”.</p>`,
    remember: 'Polonez, krakowiak, mazur, kujawiak, oberek. Krakowiak – 2/4, reszta – na trzy.',
    hook: 'Nazwy trzech tańców mówią, skąd pochodzą: <b>krakow</b>iak – Kraków, <b>mazur</b> – Mazowsze, <b>kujaw</b>iak – Kujawy.',
    check: { q: 'Który taniec jest wolny, śpiewny i kołyszący?', options: ['kujawiak', 'oberek', 'krakowiak'], answer: 0, explain: 'Kujawiak jest wolny i kołyszący. Oberek jest bardzo szybki, a krakowiak – żywy i skoczny.' },
  },
  {
    title: 'Fryderyk Chopin i jego fortepian',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Fryderyk Chopin: urodził się w 1810 roku w Żelazowej Woli, zmarł w 1849 roku w Paryżu. Był pianistą i komponował na fortepian: mazurki, polonezy, walce, nokturny, etiudy. Jego serce spoczywa w kościele Świętego Krzyża w Warszawie. Co pięć lat w Warszawie odbywa się Międzynarodowy Konkurs Pianistyczny jego imienia.">
      <line x1="60" y1="46" x2="340" y2="46" class="ln sw"/>
      <circle cx="60" cy="46" r="8" class="f4 s4 sw"/>
      <circle cx="340" cy="46" r="8" class="f4 s4 sw"/>
      <text x="60" y="26" class="tx-b" text-anchor="middle">1810</text>
      <text x="340" y="26" class="tx-b" text-anchor="middle">1849</text>
      <text x="200" y="38" class="tx" text-anchor="middle">🎹</text>
      <text x="75" y="76" class="tx-s" text-anchor="middle">ur. w Żelazowej Woli</text>
      <text x="340" y="76" class="tx-s" text-anchor="middle">zm. w Paryżu</text>
      <rect x="6" y="94" width="184" height="96" rx="12" class="f2 s2"/>
      <rect x="198" y="94" width="196" height="96" rx="12" class="f1 s1"/>
      <text x="98" y="122" class="tx-b" text-anchor="middle">❤️ serce</text>
      <text x="98" y="148" class="tx-s" text-anchor="middle">kościół Świętego Krzyża</text>
      <text x="98" y="168" class="tx-s" text-anchor="middle">w Warszawie</text>
      <text x="296" y="122" class="tx-b" text-anchor="middle">🎼 na fortepian</text>
      <text x="296" y="148" class="tx-s" text-anchor="middle">mazurki, polonezy,</text>
      <text x="296" y="168" class="tx-s" text-anchor="middle">walce, nokturny, etiudy</text>
      <text x="200" y="220" class="tx-s" text-anchor="middle">🏆 co 5 lat w Warszawie – Konkurs Chopinowski</text>
    </svg>`,
    text: `<p><b>Fryderyk Chopin</b> urodził się w <b>1810 r.</b> w <b>Żelazowej Woli</b> na Mazowszu, a zmarł w <b>1849 r.</b> w <b>Paryżu</b>. Był genialnym <b>pianistą</b> i kompozytorem. Pisał przede wszystkim <b>na fortepian</b>: mazurki, polonezy, walce, nokturny i etiudy. W mazurkach i polonezach wykorzystywał polskie tańce i melodie ludowe.</p>
      <p>Na jego prośbę serce przewieziono do Warszawy – spoczywa w filarze <b>kościoła Świętego Krzyża</b>. Co pięć lat w Warszawie odbywa się <b>Międzynarodowy Konkurs Pianistyczny im. Fryderyka Chopina</b>.</p>`,
    remember: 'Chopin: 1810 Żelazowa Wola – 1849 Paryż; muzyka na fortepian; serce w kościele Św. Krzyża.',
    hook: 'Chopin to „polskie tańce na fortepianie”: <b>mazurki i polonezy</b> mają nazwy jak tańce narodowe.',
    check: { q: 'Gdzie zmarł Fryderyk Chopin?', options: ['w Paryżu', 'w Żelazowej Woli', 'w Warszawie'], answer: 0, explain: 'Chopin zmarł w 1849 r. w Paryżu. Urodził się w Żelazowej Woli, a jego serce spoczywa w Warszawie.' },
  },
  {
    title: 'Paderewski i zasady na koncercie',
    svg: `<svg viewBox="0 0 400 216" role="img" aria-label="Ignacy Jan Paderewski: słynny pianista, przekonywał świat, że Polska powinna odzyskać niepodległość, w 1919 roku był premierem. Na koncercie: przyjdź punktualnie, wycisz telefon, nie rozmawiaj, brawa po całym utworze.">
      <rect x="6" y="6" width="184" height="204" rx="12" class="f5 s5"/>
      <rect x="198" y="6" width="196" height="204" rx="12" class="f3 s3"/>
      <text x="98" y="34" class="tx-s" text-anchor="middle">Ignacy Jan Paderewski</text>
      <text x="98" y="68" class="tx" text-anchor="middle">🎹 słynny pianista</text>
      <text x="98" y="100" class="tx-s" text-anchor="middle">przekonywał świat:</text>
      <text x="98" y="120" class="tx-s" text-anchor="middle">Polska ma być wolna</text>
      <text x="98" y="164" class="tx-b" text-anchor="middle">1919</text>
      <text x="98" y="188" class="tx" text-anchor="middle">premier Polski</text>
      <text x="296" y="34" class="tx-b" text-anchor="middle">Na koncercie</text>
      <text x="212" y="76" class="tx-s">⏰ przyjdź punktualnie</text>
      <text x="212" y="110" class="tx-s">📵 wycisz telefon</text>
      <text x="212" y="144" class="tx-s">🤫 nie rozmawiaj</text>
      <text x="212" y="178" class="tx-s">👏 brawa po całym utworze</text>
    </svg>`,
    text: `<p><b>Ignacy Jan Paderewski</b> był słynnym na cały świat <b>pianistą</b> i kompozytorem. Na koncertach i spotkaniach przekonywał ludzi, że Polska powinna odzyskać niepodległość, a pieniądze z koncertów przeznaczał też na pomoc dla Polaków. W <b>1919 r.</b> był <b>premierem</b> odrodzonej Polski.</p>
      <p>Na koncercie przychodzisz punktualnie, wyciszasz telefon i nie rozmawiasz podczas muzyki. W muzyce poważnej klaszczesz <b>po zakończeniu całego utworu</b> – krótka cisza między jego częściami to jeszcze nie koniec.</p>`,
    remember: 'Paderewski – pianista, który walczył o niepodległość; premier w 1919 r. Brawa – po całym utworze.',
    hook: 'Symfonia ma kilka części jak film ma kilka scen – nie klaszczesz po każdej scenie, tylko na końcu filmu.',
    check: { q: 'Orkiestra skończyła pierwszą część symfonii i na chwilę ucichła. Co robisz?', options: ['czekam w ciszy do końca całego utworu', 'od razu głośno klaszczę', 'wstaję i wychodzę z sali'], answer: 0, explain: 'Brawa są po całym utworze. Cisza między częściami to jeszcze nie koniec.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['muzyka/swieta-w-muzyce'] = [
  {
    title: 'Kolęda czy pastorałka?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie. Kolęda: pieśń religijna o narodzeniu Jezusa. Pastorałka: ludowa, wesoła pieśń o Bożym Narodzeniu, często o pasterzach i wsi. Kolędy i pastorałki śpiewamy od 24 grudnia do 2 lutego.">
      <defs><marker id="a-k4mu-sw-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="6" width="190" height="116" rx="12" class="f5 s5"/>
      <rect x="204" y="6" width="190" height="116" rx="12" class="f3 s3"/>
      <text x="101" y="38" class="tx-b" text-anchor="middle">⛪ kolęda</text>
      <text x="299" y="38" class="tx-b" text-anchor="middle">🐑 pastorałka</text>
      <text x="101" y="70" class="tx-s" text-anchor="middle">pieśń religijna</text>
      <text x="101" y="92" class="tx-s" text-anchor="middle">o narodzeniu Jezusa</text>
      <text x="299" y="70" class="tx-s" text-anchor="middle">ludowa, wesoła</text>
      <text x="299" y="92" class="tx-s" text-anchor="middle">o pasterzach i wsi</text>
      <rect x="6" y="136" width="388" height="68" rx="12" class="f4 s4"/>
      <text x="200" y="158" class="tx-s" text-anchor="middle">śpiewamy je</text>
      <text x="80" y="190" class="tx-b" text-anchor="middle">24 grudnia</text>
      <text x="320" y="190" class="tx-b" text-anchor="middle">2 lutego</text>
      <line x1="140" y1="184" x2="262" y2="184" class="ln s2" marker-end="url(#a-k4mu-sw-1)"/>
    </svg>`,
    text: `<p><b>Kolęda</b> to pieśń religijna o narodzeniu Jezusa Chrystusa. <b>Pastorałka</b> to ludowa pieśń o Bożym Narodzeniu – wesoła i lekka, często o pasterzach i wiejskich zwyczajach (np. „Oj maluśki, maluśki” z Podhala).</p>
      <p>Kolędy i pastorałki śpiewa się <b>od 24 grudnia do 2 lutego</b>. Najczęściej są <b>anonimowe</b> – nie wiemy, kto je ułożył. Długo przekazywano je ustnie, z pokolenia na pokolenie, dlatego mają różne wersje.</p>`,
    remember: 'Kolęda – religijna, pastorałka – ludowa i wesoła. Śpiewamy je od 24 grudnia do 2 lutego.',
    hook: '<b>Pasto</b>rałka brzmi trochę jak <b>pasterz</b> – i często o pasterzach opowiada.',
    check: { q: 'Wesoła, ludowa piosenka o pasterzach idących do Betlejem to najpewniej…', options: ['pastorałka', 'hymn', 'pieśń wielkanocna'], answer: 0, explain: 'Pastorałka to wesoła, ludowa pieśń o Bożym Narodzeniu, często o pasterzach.' },
  },
  {
    title: 'Trzy znane kolędy',
    svg: `<svg viewBox="0 0 400 204" role="img" aria-label="Trzy kolędy. „Bóg się rodzi”: słowa Franciszek Karpiński, rytm poloneza. „Lulajże, Jezuniu”: kołysanka, Chopin wplótł ją w Scherzo h-moll. „Wśród nocnej ciszy”: tradycyjnie rozpoczyna pasterkę.">
      <rect x="6" y="6" width="388" height="60" rx="10" class="f2 s2"/>
      <rect x="6" y="72" width="388" height="60" rx="10" class="f1 s1"/>
      <rect x="6" y="138" width="388" height="60" rx="10" class="f5 s5"/>
      <text x="18" y="32" class="tx-b">„Bóg się rodzi”</text>
      <text x="18" y="54" class="tx-s">słowa: Franciszek Karpiński · rytm poloneza 👑</text>
      <text x="18" y="98" class="tx-b">„Lulajże, Jezuniu”</text>
      <text x="18" y="120" class="tx-s">kołysanka · Chopin – Scherzo h-moll 🎹</text>
      <text x="18" y="164" class="tx-b">„Wśród nocnej ciszy”</text>
      <text x="18" y="186" class="tx-s">tradycyjnie rozpoczyna pasterkę 🌙</text>
    </svg>`,
    text: `<ul>
        <li>„<b>Bóg się rodzi</b>” – słowa napisał poeta <b>Franciszek Karpiński</b>; melodia ma rytm <b>poloneza</b>. Rytm poloneza słychać też w kolędzie „W żłobie leży”.</li>
        <li>„<b>Lulajże, Jezuniu</b>” – kolęda-<b>kołysanka</b>. <b>Fryderyk Chopin</b> wplótł jej melodię w środkową część utworu fortepianowego <b>Scherzo h-moll</b>.</li>
        <li>„<b>Wśród nocnej ciszy</b>” – jedna z najczęściej śpiewanych kolęd; tradycyjnie rozpoczyna <b>pasterkę</b>.</li>
      </ul>
      <p>Znane są też np. „Przybieżeli do Betlejem” i „Jezus malusieńki” – ich autorów nie znamy.</p>`,
    remember: '„Bóg się rodzi” – Karpiński, polonez. „Lulajże, Jezuniu” – kołysanka u Chopina. „Wśród nocnej ciszy” – na początek pasterki.',
    hook: '„<b>Lul</b>ajże” jak „<b>lul</b>u” – to kołysanka. A „Bóg się rodzi” kroczy uroczyście, jak polonez na balu.',
    check: { q: 'Melodię której kolędy Chopin wplótł w Scherzo h-moll?', options: ['„Lulajże, Jezuniu”', '„Bóg się rodzi”', '„Wśród nocnej ciszy”'], answer: 0, explain: 'W środkowej, spokojnej części Scherza h-moll słychać kolędę-kołysankę „Lulajże, Jezuniu”.' },
  },
  {
    title: 'Od Adwentu do 2 lutego',
    svg: `<svg viewBox="0 0 400 270" role="img" aria-label="Kolejno: Adwent – cztery tygodnie oczekiwania, dawniej grano na ligawce. 24 grudnia – Wigilia: kolacja od pierwszej gwiazdy, opłatek, kolędy. O północy – pasterka, msza na pamiątkę przybycia pasterzy. 25 grudnia – Boże Narodzenie, narodziny Jezusa. Do 2 lutego śpiewamy kolędy.">
      <line x1="42" y1="20" x2="42" y2="250" class="ln sw"/>
      <rect x="86" y="6" width="308" height="46" rx="10" class="f5 s5"/>
      <rect x="86" y="58" width="308" height="46" rx="10" class="f1 s1"/>
      <rect x="86" y="110" width="308" height="46" rx="10" class="f1 s1"/>
      <rect x="86" y="162" width="308" height="46" rx="10" class="f1 s1"/>
      <rect x="86" y="214" width="308" height="46" rx="10" class="f3 s3"/>
      <rect x="6" y="14" width="72" height="30" rx="15" class="f4 s4 sw"/>
      <rect x="6" y="66" width="72" height="30" rx="15" class="f4 s4 sw"/>
      <rect x="6" y="118" width="72" height="30" rx="15" class="f4 s4 sw"/>
      <rect x="6" y="170" width="72" height="30" rx="15" class="f4 s4 sw"/>
      <rect x="6" y="222" width="72" height="30" rx="15" class="f4 s4 sw"/>
      <text x="42" y="34" class="tx-s" text-anchor="middle">4 tyg.</text>
      <text x="42" y="86" class="tx-s" text-anchor="middle">24 XII</text>
      <text x="42" y="138" class="tx-s" text-anchor="middle">północ</text>
      <text x="42" y="190" class="tx-s" text-anchor="middle">25 XII</text>
      <text x="42" y="242" class="tx-s" text-anchor="middle">do 2 II</text>
      <text x="96" y="26" class="tx-b">Adwent</text>
      <text x="96" y="45" class="tx-s">czas oczekiwania; dawniej grano na ligawce</text>
      <text x="96" y="78" class="tx-b">Wigilia ⭐</text>
      <text x="96" y="97" class="tx-s">od pierwszej gwiazdy; opłatek, kolędy</text>
      <text x="96" y="130" class="tx-b">Pasterka 🌙</text>
      <text x="96" y="149" class="tx-s">msza – pamiątka przybycia pasterzy</text>
      <text x="96" y="182" class="tx-b">Boże Narodzenie</text>
      <text x="96" y="201" class="tx-s">święto narodzin Jezusa</text>
      <text x="96" y="234" class="tx-b">Kolędy 🎶</text>
      <text x="96" y="253" class="tx-s">śpiewamy aż do 2 lutego</text>
    </svg>`,
    text: `<ul>
        <li><b>Adwent</b> – cztery tygodnie przed Bożym Narodzeniem, czas oczekiwania. Dawniej w wielu regionach grano wtedy na <b>ligawce</b> – długim, drewnianym instrumencie dętym.</li>
        <li><b>Wigilia</b> – 24 grudnia. Kolacja zaczyna się, gdy na niebie pojawi się <b>pierwsza gwiazda</b>. Pod obrusem leży sianko, rodzina dzieli się <b>opłatkiem</b> i śpiewa kolędy.</li>
        <li><b>Pasterka</b> – msza o północy, w noc Bożego Narodzenia. Przypomina przybycie pasterzy do Betlejem.</li>
        <li><b>Boże Narodzenie</b> – 25 grudnia, święto na pamiątkę narodzin Jezusa. Kolędy śpiewamy aż do <b>2 lutego</b>.</li>
      </ul>`,
    remember: 'Adwent → Wigilia (24 XII) → pasterka (o północy) → Boże Narodzenie (25 XII) → kolędy do 2 II.',
    hook: '<b>Paster</b>ka – od <b>pasterzy</b>: przypomina ich przybycie do Betlejem.',
    check: { q: 'Co to jest pasterka?', options: ['msza o północy w noc Bożego Narodzenia', 'kolacja wigilijna z opłatkiem', 'pieśń śpiewana w Adwencie'], answer: 0, explain: 'Pasterka to msza o północy. Przypomina przybycie pasterzy do Betlejem.' },
  },
  {
    title: 'Kolędnicy idą!',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Kolędnicy: chodzą od domu do domu z gwiazdą; z szopką, w której kukiełki odgrywają przedstawienie, np. szopki krakowskie; turoń – kolędnik przebrany za rogate zwierzę podobne do wołu; herody i jasełka – przedstawienia o narodzeniu Jezusa. Oskar Kolberg w XIX wieku zapisywał pieśni i zwyczaje ludowe.">
      <rect x="6" y="6" width="190" height="84" rx="12" class="f4 s4"/>
      <rect x="204" y="6" width="190" height="84" rx="12" class="f2 s2"/>
      <rect x="6" y="98" width="190" height="84" rx="12" class="f3 s3"/>
      <rect x="204" y="98" width="190" height="84" rx="12" class="f5 s5"/>
      <text x="101" y="34" class="tx-b" text-anchor="middle">⭐ z gwiazdą</text>
      <text x="101" y="58" class="tx-s" text-anchor="middle">od domu do domu:</text>
      <text x="101" y="76" class="tx-s" text-anchor="middle">kolędy i życzenia</text>
      <text x="299" y="34" class="tx-b" text-anchor="middle">🏛️ z szopką</text>
      <text x="299" y="58" class="tx-s" text-anchor="middle">przedstawienie kukiełek</text>
      <text x="299" y="76" class="tx-s" text-anchor="middle">np. szopki krakowskie</text>
      <text x="101" y="126" class="tx-b" text-anchor="middle">🐂 turoń</text>
      <text x="101" y="150" class="tx-s" text-anchor="middle">przebrany za rogate</text>
      <text x="101" y="168" class="tx-s" text-anchor="middle">zwierzę, jak wół</text>
      <text x="299" y="126" class="tx-b" text-anchor="middle">🎭 herody, jasełka</text>
      <text x="299" y="150" class="tx-s" text-anchor="middle">przedstawienia</text>
      <text x="299" y="168" class="tx-s" text-anchor="middle">o narodzeniu Jezusa</text>
      <text x="200" y="210" class="tx-s" text-anchor="middle">📖 XIX w.: Oskar Kolberg zapisywał pieśni i zwyczaje</text>
    </svg>`,
    text: `<p><b>Kolędnicy</b> chodzą od domu do domu: śpiewają kolędy, składają życzenia i odgrywają scenki, a gospodarze dają im smakołyki albo drobne datki. To <b>kolędowanie</b>. Kolędnicy chodzą z <b>gwiazdą</b> albo z <b>szopką</b>, w której kukiełki odgrywają przedstawienie (słynne są <b>szopki krakowskie</b>).</p>
      <p><b>Turoń</b> to kolędnik przebrany za rogate zwierzę, podobne do wołu. <b>Herody</b> to grupy kolędników odgrywające opowieść o narodzeniu Jezusa z zabawnymi scenkami, a <b>jasełka</b> – przedstawienie o narodzeniu Chrystusa, często w szkole. Takie pieśni i zwyczaje zapisywał w XIX wieku <b>Oskar Kolberg</b> – etnograf (badacz tradycyjnej kultury ludowej) i kompozytor.</p>`,
    remember: 'Kolędnicy: gwiazda, szopka, turoń, herody. Oskar Kolberg – zapisywał pieśni i zwyczaje ludowe.',
    hook: 'Kolędnicy przebierają się za kozę, niedźwiedzia czy bociana – ale ten z <b>rogami jak wół</b> to <b>turoń</b>.',
    check: { q: 'Kim był Oskar Kolberg?', options: ['etnografem, który zapisywał pieśni ludowe', 'autorem słów kolędy „Bóg się rodzi”', 'kolędnikiem przebranym za turonia'], answer: 0, explain: 'Oskar Kolberg w XIX wieku zapisywał pieśni i zwyczaje ludowe. Słowa „Bóg się rodzi” napisał Franciszek Karpiński.' },
  },
  {
    title: 'Wielkanoc – zwyczaje i pieśni',
    svg: `<svg viewBox="0 0 400 270" role="img" aria-label="Zwyczaje wielkanocne. Niedziela Palmowa – święcenie palm. Wielka Sobota – święconka, potrawy w koszyczku. Niedziela Wielkanocna – rezurekcja, nabożeństwo z procesją. Poniedziałek Wielkanocny – śmigus-dyngus, polewanie wodą. Pisanka ma wzory, kraszanka jest w jednym kolorze. Pieśń „Wesoły nam dzień dziś nastał” pochodzi z XIV wieku.">
      <rect x="6" y="6" width="190" height="86" rx="12" class="f3 s3"/>
      <rect x="204" y="6" width="190" height="86" rx="12" class="f4 s4"/>
      <rect x="6" y="100" width="190" height="86" rx="12" class="f5 s5"/>
      <rect x="204" y="100" width="190" height="86" rx="12" class="f1 s1"/>
      <text x="101" y="28" class="tx-s" text-anchor="middle">Niedziela Palmowa</text>
      <text x="299" y="28" class="tx-s" text-anchor="middle">Wielka Sobota</text>
      <text x="101" y="122" class="tx-s" text-anchor="middle">Niedziela Wielkanocna</text>
      <text x="299" y="122" class="tx-s" text-anchor="middle">Poniedziałek Wielkanocny</text>
      <text x="101" y="56" class="tx-b" text-anchor="middle">🌿 palmy</text>
      <text x="299" y="56" class="tx-b" text-anchor="middle">🧺 święconka</text>
      <text x="101" y="150" class="tx-b" text-anchor="middle">🔔 rezurekcja</text>
      <text x="299" y="150" class="tx-b" text-anchor="middle">💦 śmigus-dyngus</text>
      <text x="101" y="78" class="tx-s" text-anchor="middle">święci się gałązki</text>
      <text x="299" y="78" class="tx-s" text-anchor="middle">potrawy w koszyczku</text>
      <text x="101" y="172" class="tx-s" text-anchor="middle">nabożeństwo z procesją</text>
      <text x="299" y="172" class="tx-s" text-anchor="middle">polewanie wodą</text>
      <rect x="6" y="196" width="388" height="68" rx="12" class="f2 s2"/>
      <text x="200" y="222" class="tx-s" text-anchor="middle">🥚 pisanka – malowana, wzory · kraszanka – jeden kolor</text>
      <text x="200" y="248" class="tx-s" text-anchor="middle">🎶 „Wesoły nam dzień dziś nastał” – pieśń z XIV wieku</text>
    </svg>`,
    text: `<p><b>Wielkanoc</b> to święto chrześcijan na pamiątkę <b>zmartwychwstania Chrystusa</b>. Wypada w <b>niedzielę po pierwszej wiosennej pełni Księżyca</b>, więc co roku w innym dniu.</p>
      <ul>
        <li><b>Niedziela Palmowa</b> – święci się <b>palmy</b> na pamiątkę wjazdu Jezusa do Jerozolimy.</li>
        <li><b>Wielka Sobota</b> – <b>święconka</b>: potrawy w koszyczku (np. jajka, chleb, sól).</li>
        <li><b>Niedziela Wielkanocna</b> – <b>rezurekcja</b>, uroczyste nabożeństwo z procesją.</li>
        <li><b>Poniedziałek Wielkanocny</b> – <b>śmigus-dyngus</b>, czyli polewanie się wodą.</li>
      </ul>
      <p><b>Pisanka</b> to jajko barwione lub malowane, a <b>kraszanka</b> – pisanka w jednym kolorze, bez wzorów. Pieśni „Chrystus zmartwychwstał jest” i „Wesoły nam dzień dziś nastał” powstały w średniowieczu (w XIV wieku). Kolędy i pieśni wielkanocne to <b>muzyka religijna</b>, a pieśni kolędników, które towarzyszą zwyczajom, to <b>muzyka obrzędowa</b>.</p>`,
    remember: 'Palmy → święconka → rezurekcja → śmigus-dyngus. Kraszanka – jeden kolor.',
    hook: '<b>Pis</b>anka – na niej się „<b>pisze</b>” (maluje) wzory. Kraszanka – całe jajko w jednym kolorze, bez wzorów.',
    check: { q: 'Kiedy święci się potrawy w koszyczku (święconkę)?', options: ['w Wielką Sobotę', 'w Niedzielę Palmową', 'w Poniedziałek Wielkanocny'], answer: 0, explain: 'Święconkę niesie się do kościoła w Wielką Sobotę. W Niedzielę Palmową święci się palmy.' },
  },
];

window.LESSONS['muzyka/kalendarz-muzyczny'] = [
  {
    title: 'Muzyka przez cały rok',
    svg: `<svg viewBox="0 0 400 246" role="img" aria-label="Trzy rodzaje świąt. Święto szkolne: 14 października – Dzień Edukacji Narodowej. Święta państwowe: 11 listopada – Święto Niepodległości; 1–3 maja – majowe święta. Święta rodzinne: 21 stycznia babcia, 22 stycznia dziadek; 26 maja mama, 1 czerwca dziecko, 23 czerwca tata.">
      <rect x="6" y="6" width="388" height="58" rx="12" class="f1 s1"/>
      <text x="18" y="30" class="tx-b">🏫 Święto szkolne</text>
      <text x="18" y="54" class="tx">14 X – Dzień Edukacji Narodowej</text>
      <rect x="6" y="72" width="388" height="80" rx="12" class="f2 s2"/>
      <text x="18" y="96" class="tx-b">🇵🇱 Święta państwowe</text>
      <text x="18" y="118" class="tx">11 XI – Święto Niepodległości</text>
      <text x="18" y="140" class="tx">1–3 V – majowe święta</text>
      <rect x="6" y="160" width="388" height="80" rx="12" class="f3 s3"/>
      <text x="18" y="184" class="tx-b">👪 Święta rodzinne</text>
      <text x="18" y="206" class="tx">21 I babcia · 22 I dziadek</text>
      <text x="18" y="228" class="tx">26 V mama · 1 VI dziecko · 23 VI tata</text>
    </svg>`,
    text: `<p>Przez cały rok szkolny muzyka towarzyszy świętom. W szkole świętujemy razem na <b>akademii</b> – to uroczystość z okazji święta: śpiewamy pieśni, recytujemy wiersze, gramy na instrumentach.</p>
      <p>Na <b>święta państwowe</b> wybieramy <b>pieśni patriotyczne</b>. Na <b>święta rodzinne</b> – <b>piosenki z życzeniami</b> dla bliskich.</p>`,
    remember: 'Każde święto ma swoją muzykę: państwowe – pieśni patriotyczne, rodzinne – piosenki z życzeniami.',
    hook: 'Rok szkolny to jak koncert w kilku częściach: jesień – nauczyciele i niepodległość, zima – dziadkowie, wiosna – maj i rodzice.',
    check: { q: 'Co to jest akademia w szkole?', options: ['uroczystość z okazji święta', 'lekcja gry na flecie', 'wycieczka do filharmonii'], answer: 0, explain: 'Akademia to szkolna uroczystość z okazji święta – z pieśniami, wierszami i grą na instrumentach.' },
  },
  {
    title: 'Dzień Edukacji Narodowej',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="W 1773 roku powstała Komisja Edukacji Narodowej – urząd, który zajmował się szkołami. Co roku 14 października obchodzimy Dzień Edukacji Narodowej – święto szkoły. Tego dnia: piosenka, laurka, nie ma lekcji.">
      <defs><marker id="a-k4mu-kal-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="6" width="388" height="60" rx="12" class="f5 s5"/>
      <text x="200" y="32" class="tx-b" text-anchor="middle">1773 · Komisja Edukacji Narodowej</text>
      <text x="200" y="54" class="tx-s" text-anchor="middle">urząd, który zajmował się szkołami</text>
      <line x1="200" y1="68" x2="200" y2="92" class="ln sw" marker-end="url(#a-k4mu-kal-1)"/>
      <rect x="6" y="96" width="388" height="60" rx="12" class="f1 s1"/>
      <text x="200" y="122" class="tx-b" text-anchor="middle">14 października – co roku</text>
      <text x="200" y="144" class="tx-s" text-anchor="middle">Dzień Edukacji Narodowej · święto szkoły</text>
      <rect x="6" y="166" width="124" height="58" rx="10" class="f4 s4"/>
      <rect x="138" y="166" width="124" height="58" rx="10" class="f4 s4"/>
      <rect x="270" y="166" width="124" height="58" rx="10" class="f4 s4"/>
      <text x="68" y="200" class="tx" text-anchor="middle">🎵 piosenka</text>
      <text x="200" y="200" class="tx" text-anchor="middle">🖍️ laurka</text>
      <text x="332" y="200" class="tx" text-anchor="middle">📚 bez lekcji</text>
    </svg>`,
    text: `<p>14 października <b>1773 r.</b> powstała <b>Komisja Edukacji Narodowej</b> – urząd, który zajmował się szkołami w całym państwie. Uważa się ją za pierwsze w Europie ministerstwo oświaty.</p>
      <p>W rocznicę jej utworzenia obchodzimy <b>Dzień Edukacji Narodowej</b>. To święto nauczycieli i wszystkich pracowników szkoły. Tego dnia <b>nie ma lekcji</b>. Uczniowie dziękują nauczycielom piosenką albo <b>laurką</b> – kartką ozdobioną rysunkiem, z życzeniami.</p>`,
    remember: '14 października – Dzień Edukacji Narodowej, rocznica Komisji Edukacji Narodowej (1773).',
    hook: '„Edukacja Narodowa” jest i w nazwie urzędu z 1773 r., i w nazwie święta – święto to jego urodziny.',
    check: { q: 'Rocznicę czego obchodzimy 14 października?', options: ['utworzenia Komisji Edukacji Narodowej', 'odzyskania niepodległości', 'uchwalenia Konstytucji 3 maja'], answer: 0, explain: 'Dzień Edukacji Narodowej to rocznica utworzenia Komisji Edukacji Narodowej w 1773 r.' },
  },
  {
    title: 'Gdy piosenka z wojskiem szła',
    svg: `<svg viewBox="0 0 400 214" role="img" aria-label="11 listopada 1918 roku Polska odzyskała niepodległość; o wolność walczyły m.in. Legiony Polskie. Ich pieśń „My, Pierwsza Brygada” jest dziś pieśnią Wojska Polskiego. Marsz w metrum 2/4: RAZ, dwa, RAZ, dwa – lewa, prawa, lewa, prawa.">
      <rect x="6" y="6" width="388" height="56" rx="12" class="f2 s2"/>
      <text x="200" y="30" class="tx-b" text-anchor="middle">11 XI 1918 – Polska wolna</text>
      <text x="200" y="52" class="tx-s" text-anchor="middle">o wolność walczyły m.in. Legiony Polskie</text>
      <rect x="6" y="70" width="388" height="56" rx="12" class="f4 s4"/>
      <text x="200" y="94" class="tx-b" text-anchor="middle">„My, Pierwsza Brygada”</text>
      <text x="200" y="116" class="tx-s" text-anchor="middle">pieśń Legionów · dziś pieśń Wojska Polskiego</text>
      <text x="14" y="166" class="tx-b">marsz</text>
      <text x="14" y="186" class="tx-s">2/4</text>
      <rect x="96" y="140" width="68" height="40" rx="8" class="f3 s3 sw"/>
      <rect x="172" y="140" width="68" height="40" rx="8" class="f3 s3"/>
      <rect x="248" y="140" width="68" height="40" rx="8" class="f3 s3 sw"/>
      <rect x="324" y="140" width="68" height="40" rx="8" class="f3 s3"/>
      <text x="130" y="166" class="tx-b" text-anchor="middle">RAZ</text>
      <text x="206" y="166" class="tx" text-anchor="middle">dwa</text>
      <text x="282" y="166" class="tx-b" text-anchor="middle">RAZ</text>
      <text x="358" y="166" class="tx" text-anchor="middle">dwa</text>
      <text x="130" y="204" class="tx-s" text-anchor="middle">lewa</text>
      <text x="206" y="204" class="tx-s" text-anchor="middle">prawa</text>
      <text x="282" y="204" class="tx-s" text-anchor="middle">lewa</text>
      <text x="358" y="204" class="tx-s" text-anchor="middle">prawa</text>
    </svg>`,
    text: `<p><b>11 listopada 1918 r.</b> Polska odzyskała niepodległość – to <b>Narodowe Święto Niepodległości</b>. O wolność walczyły m.in. <b>Legiony Polskie</b>, które w czasie I wojny światowej działały u boku <b>Józefa Piłsudskiego</b>.</p>
      <ul>
        <li>„<b>My, Pierwsza Brygada</b>” – pieśń Legionów, ulubiona pieśń Piłsudskiego. Od 2007 r. to <b>Pieśń Reprezentacyjna Wojska Polskiego</b>.</li>
        <li>„<b>Piechota</b>” – jedna z najpopularniejszych polskich pieśni żołnierskich.</li>
        <li><b>Marsz</b> – bardzo rytmiczny utwór w <b>metrum parzystym</b>, np. 2/4. W jego rytm idzie się równym krokiem.</li>
      </ul>`,
    remember: '11 listopada 1918 – niepodległość. Marsz – metrum parzyste (2/4): RAZ-dwa, lewa-prawa.',
    hook: 'Masz dwie nogi – więc marsz liczysz „na dwa”: lewa, prawa, lewa, prawa.',
    check: { q: 'Jakie metrum ma marsz?', options: ['parzyste, np. 2/4', 'trójdzielne, np. 3/4', 'inne w każdym takcie'], answer: 0, explain: 'Marsz ma metrum parzyste, np. 2/4 – RAZ-dwa, jak kroki: lewa, prawa.' },
  },
  {
    title: 'Majowe święta i Mazurek 3 Maja',
    svg: `<svg viewBox="0 0 400 216" role="img" aria-label="Kartki z kalendarza: 1 maja – Święto Pracy, 2 maja – Dzień Flagi, 3 maja – Konstytucja. Pieśń „Witaj, majowa jutrzenko”, czyli Mazurek 3 Maja, słowa Rajnold Suchodolski; liczymy RAZ, dwa, trzy – metrum 3/4, rytm mazura.">
      <rect x="6" y="6" width="124" height="100" rx="10" class="f4 s4"/>
      <rect x="138" y="6" width="124" height="100" rx="10" class="f4 s4"/>
      <rect x="270" y="6" width="124" height="100" rx="10" class="f4 s4"/>
      <rect x="6" y="6" width="124" height="26" rx="10" class="f2 s2"/>
      <rect x="138" y="6" width="124" height="26" rx="10" class="f2 s2"/>
      <rect x="270" y="6" width="124" height="26" rx="10" class="f2 s2"/>
      <text x="68" y="25" class="tx-s" text-anchor="middle">MAJ</text>
      <text x="200" y="25" class="tx-s" text-anchor="middle">MAJ</text>
      <text x="332" y="25" class="tx-s" text-anchor="middle">MAJ</text>
      <text x="68" y="66" class="tx-b" text-anchor="middle">1</text>
      <text x="200" y="66" class="tx-b" text-anchor="middle">2</text>
      <text x="332" y="66" class="tx-b" text-anchor="middle">3</text>
      <text x="68" y="94" class="tx-s" text-anchor="middle">Święto Pracy</text>
      <text x="200" y="94" class="tx-s" text-anchor="middle">Dzień Flagi</text>
      <text x="332" y="94" class="tx-s" text-anchor="middle">Konstytucja</text>
      <rect x="6" y="118" width="388" height="92" rx="12" class="f5 s5"/>
      <text x="200" y="142" class="tx-b" text-anchor="middle">„Witaj, majowa jutrzenko”</text>
      <text x="200" y="164" class="tx-s" text-anchor="middle">Mazurek 3 Maja · słowa: R. Suchodolski</text>
      <text x="200" y="194" class="tx" text-anchor="middle">RAZ – dwa – trzy · 3/4 · rytm mazura</text>
    </svg>`,
    text: `<ul>
        <li><b>1 maja</b> – Święto Państwowe, zwane Świętem Pracy.</li>
        <li><b>2 maja</b> – <b>Dzień Flagi Rzeczypospolitej Polskiej</b>.</li>
        <li><b>3 maja</b> – rocznica uchwalenia <b>Konstytucji 3 maja</b> w <b>1791 r.</b> Konstytucja to zbiór najważniejszych praw w państwie. Ta była <b>pierwsza w Europie</b> i druga na świecie.</li>
      </ul>
      <p>Na 3 Maja śpiewamy „<b>Witaj, majowa jutrzenko</b>”, czyli <b>Mazurek 3 Maja</b> (słowa: Rajnold Suchodolski). Pieśń jest radosna, ma metrum <b>3/4</b> i rytm <b>mazura</b>. <b>Jutrzenka</b> to w poezji jasność przed wschodem słońca.</p>`,
    remember: 'Konstytucja 3 maja – 1791 r., pierwsza w Europie. „Witaj, majowa jutrzenko” – Mazurek 3 Maja, 3/4.',
    hook: 'W maju liczysz 1, 2, 3: praca, flaga, Konstytucja. A Mazurek 3 Maja też liczysz „na trzy”.',
    check: { q: 'Jak liczymy rytm pieśni „Witaj, majowa jutrzenko”?', options: ['na trzy: RAZ-dwa-trzy', 'na dwa: RAZ-dwa', 'na cztery: RAZ-dwa-trzy-cztery'], answer: 0, explain: 'Mazurek 3 Maja ma metrum 3/4 i rytm mazura – liczymy „na trzy”.' },
  },
  {
    title: 'Święta rodzinne – muzyczny prezent',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Styczeń: 21 – Dzień Babci, 22 – Dzień Dziadka. Maj i czerwiec: 26 maja – Dzień Matki, potem 1 czerwca – Dzień Dziecka, potem 23 czerwca – Dzień Ojca. Muzyczny prezent: piosenka z życzeniami albo utwór na flecie lub dzwonkach.">
      <defs><marker id="a-k4mu-kal-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="6" width="388" height="62" rx="12" class="f3 s3"/>
      <text x="18" y="30" class="tx-b">Styczeń</text>
      <text x="18" y="56" class="tx">21 – 👵 babcia · 22 – 👴 dziadek</text>
      <rect x="6" y="76" width="388" height="82" rx="12" class="f3 s3"/>
      <text x="18" y="98" class="tx-b">Maj i czerwiec</text>
      <text x="70" y="126" class="tx-b" text-anchor="middle">26 V</text>
      <text x="200" y="126" class="tx-b" text-anchor="middle">1 VI</text>
      <text x="330" y="126" class="tx-b" text-anchor="middle">23 VI</text>
      <text x="70" y="148" class="tx-s" text-anchor="middle">💐 mama</text>
      <text x="200" y="148" class="tx-s" text-anchor="middle">🎈 dzieci</text>
      <text x="330" y="148" class="tx-s" text-anchor="middle">👔 tata</text>
      <line x1="106" y1="121" x2="160" y2="121" class="ln" marker-end="url(#a-k4mu-kal-2)"/>
      <line x1="238" y1="121" x2="290" y2="121" class="ln" marker-end="url(#a-k4mu-kal-2)"/>
      <rect x="6" y="166" width="388" height="58" rx="12" class="f4 s4"/>
      <text x="200" y="190" class="tx-b" text-anchor="middle">🎁 Muzyczny prezent</text>
      <text x="200" y="212" class="tx-s" text-anchor="middle">piosenka z życzeniami, utwór na flecie lub dzwonkach</text>
    </svg>`,
    text: `<ul>
        <li><b>Dzień Babci</b> – 21 stycznia, <b>Dzień Dziadka</b> – 22 stycznia.</li>
        <li><b>Dzień Matki</b> – 26 maja, <b>Dzień Dziecka</b> – 1 czerwca, <b>Dzień Ojca</b> – 23 czerwca.</li>
      </ul>
      <p>Najlepszy prezent? Taki, który przygotujesz sam: piosenka z życzeniami, wspólne śpiewanie albo krótki utwór zagrany na flecie lub dzwonkach. Zapytaj też bliskich, jakie piosenki śpiewano w waszej rodzinie – np. jakie <b>kołysanki</b> (piosenki śpiewane przy usypianiu dziecka).</p>`,
    remember: 'Babcia 21 I, dziadek 22 I. Mama 26 V, dzieci 1 VI, tata 23 VI.',
    hook: 'Mama w maju, tata w czerwcu – a dzieci pośrodku, 1 czerwca, jak w rodzinnym uścisku.',
    check: { q: 'Które święto wypada między Dniem Matki a Dniem Ojca?', options: ['Dzień Dziecka', 'Dzień Babci', 'Dzień Flagi'], answer: 0, explain: 'Dzień Matki – 26 maja, Dzień Dziecka – 1 czerwca, Dzień Ojca – 23 czerwca.' },
  },
  {
    title: 'Nie pomyl!',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Nie pomyl. 3 maja 1791 – Konstytucja, a 11 listopada 1918 – niepodległość. Marsz liczymy na dwa: RAZ-dwa, a Mazurek 3 Maja na trzy: RAZ-dwa-trzy. „Pierwsza Brygada” to pieśń Wojska Polskiego, a hymn Polski to „Mazurek Dąbrowskiego”.">
      <rect x="6" y="6" width="190" height="58" rx="10" class="f2 s2"/>
      <rect x="204" y="6" width="190" height="58" rx="10" class="f2 s2"/>
      <rect x="6" y="72" width="190" height="58" rx="10" class="f3 s3"/>
      <rect x="204" y="72" width="190" height="58" rx="10" class="f5 s5"/>
      <rect x="6" y="138" width="190" height="58" rx="10" class="f4 s4"/>
      <rect x="204" y="138" width="190" height="58" rx="10" class="f1 s1"/>
      <text x="101" y="30" class="tx-b" text-anchor="middle">3 V 1791</text>
      <text x="101" y="52" class="tx-s" text-anchor="middle">Konstytucja</text>
      <text x="299" y="30" class="tx-b" text-anchor="middle">11 XI 1918</text>
      <text x="299" y="52" class="tx-s" text-anchor="middle">niepodległość</text>
      <text x="101" y="96" class="tx-b" text-anchor="middle">marsz</text>
      <text x="101" y="118" class="tx-s" text-anchor="middle">na dwa: RAZ-dwa</text>
      <text x="299" y="96" class="tx-b" text-anchor="middle">Mazurek 3 Maja</text>
      <text x="299" y="118" class="tx-s" text-anchor="middle">na trzy: RAZ-dwa-trzy</text>
      <text x="101" y="162" class="tx-b" text-anchor="middle">Pierwsza Brygada</text>
      <text x="101" y="184" class="tx-s" text-anchor="middle">pieśń Wojska Polskiego</text>
      <text x="299" y="162" class="tx-b" text-anchor="middle">hymn Polski</text>
      <text x="299" y="184" class="tx-s" text-anchor="middle">„Mazurek Dąbrowskiego”</text>
    </svg>`,
    text: `<ul>
        <li><b>3 maja</b> świętujemy Konstytucję z <b>1791 r.</b>, a <b>11 listopada</b> – odzyskanie niepodległości w <b>1918 r.</b></li>
        <li><b>Marsz</b> liczymy „na dwa”, a <b>Mazurek 3 Maja</b> – „na trzy”, jak każdy mazur.</li>
        <li>„<b>My, Pierwsza Brygada</b>” to Pieśń Reprezentacyjna Wojska Polskiego, ale <b>hymnem Polski</b> jest „Mazurek Dąbrowskiego”.</li>
        <li><b>2 maja</b> to Dzień Flagi, a <b>14 października</b> – Dzień Edukacji Narodowej.</li>
      </ul>`,
    remember: 'Dwa mazurki: „Mazurek Dąbrowskiego” to hymn, „Mazurek 3 Maja” to „Witaj, majowa jutrzenko”.',
    check: { q: 'Które zdanie jest prawdziwe?', options: ['Konstytucję 3 maja uchwalono w 1791 r.', 'Polska odzyskała niepodległość w 1791 r.', 'Marsz liczymy „na trzy”.'], answer: 0, explain: 'Konstytucja 3 maja – 1791 r. Niepodległość – 1918 r. Marsz liczymy „na dwa”.' },
  },
];
