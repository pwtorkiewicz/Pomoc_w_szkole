/* Lekcje – chemia, klasa 8 (Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VI–X).
 * Klucz: 'chemia/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['chemia/wodorotlenki'] = [
  {
    title: 'Wodorotlenek = metal + grupy OH',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Sód ma jedną grupę OH – NaOH, wapń dwie – Ca(OH)₂, glin trzy – Al(OH)₃. Liczba grup OH równa się wartościowości metalu">
      <g class="ln-thin"><line x1="72" y1="35" x2="100" y2="35"/><line x1="72" y1="95" x2="100" y2="95"/><line x1="140" y1="95" x2="150" y2="95"/>
        <line x1="72" y1="155" x2="100" y2="155"/><line x1="140" y1="155" x2="150" y2="155"/><line x1="190" y1="155" x2="200" y2="155"/></g>
      <circle cx="50" cy="35" r="22" class="f1 s1 sw"/><text x="50" y="41" class="tx-b" text-anchor="middle">Na</text>
      <circle cx="50" cy="95" r="22" class="f1 s1 sw"/><text x="50" y="101" class="tx-b" text-anchor="middle">Ca</text>
      <circle cx="50" cy="155" r="22" class="f1 s1 sw"/><text x="50" y="161" class="tx-b" text-anchor="middle">Al</text>
      <g class="f3 s3"><rect x="100" y="22" width="40" height="26" rx="6"/>
        <rect x="100" y="82" width="40" height="26" rx="6"/><rect x="150" y="82" width="40" height="26" rx="6"/>
        <rect x="100" y="142" width="40" height="26" rx="6"/><rect x="150" y="142" width="40" height="26" rx="6"/><rect x="200" y="142" width="40" height="26" rx="6"/></g>
      <g class="tx" text-anchor="middle"><text x="120" y="41">OH</text><text x="120" y="101">OH</text><text x="170" y="101">OH</text>
        <text x="120" y="161">OH</text><text x="170" y="161">OH</text><text x="220" y="161">OH</text></g>
      <text x="270" y="41" class="tx-b">NaOH</text><text x="270" y="101" class="tx-b">Ca(OH)₂</text><text x="270" y="161" class="tx-b">Al(OH)₃</text>
      <g class="tx-s" text-anchor="end"><text x="26" y="20">I</text><text x="26" y="80">II</text><text x="26" y="140">III</text></g>
    </svg>`,
    text: `<p><b>Wodorotlenek</b> składa się z kationu metalu i anionów wodorotlenkowych OH<sup>−</sup>. Ile grup OH? Tyle, ile wynosi <b>wartościowość metalu</b>.</p>
      <p>Nazwa: „wodorotlenek” + nazwa metalu. Gdy metal ma kilka wartościowości, dopisujesz ją: Cu(OH)<sub>2</sub> to wodorotlenek <b>miedzi(II)</b>.</p>`,
    remember: 'Wzór ogólny: <b>M(OH)<sub>n</sub></b>, n = wartościowość metalu.',
    hook: 'Metal ma tyle „rąk”, ile wynosi jego wartościowość – w każdej trzyma jedną grupę OH.',
    check: { q: 'Jaki wzór ma wodorotlenek żelaza(III)?', options: ['Fe(OH)₃', 'FeOH₃', 'Fe₃OH', 'Fe(OH)₂'], answer: 0, explain: 'Żelazo(III) jest trójwartościowe, więc trzyma trzy grupy OH: Fe(OH)₃. Nawias jest konieczny, bo indeks dotyczy całej grupy OH.' },
  },
  {
    title: 'Trzy sposoby na wodorotlenek',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Trzy metody: metal aktywny z wodą daje wodorotlenek i wodór; tlenek metalu z wodą daje wodorotlenek; reakcja strąceniowa daje nierozpuszczalny wodorotlenek jako osad">
      <rect x="10" y="8" width="380" height="66" rx="10" class="f1 s1"/>
      <rect x="10" y="82" width="380" height="66" rx="10" class="f3 s3"/>
      <rect x="10" y="156" width="380" height="66" rx="10" class="f4 s4"/>
      <text x="24" y="32" class="tx-b">1. metal aktywny + woda</text>
      <text x="24" y="60" class="tx">2Na + 2H₂O → 2NaOH + H₂↑</text>
      <text x="24" y="106" class="tx-b">2. tlenek metalu + woda</text>
      <text x="24" y="134" class="tx">CaO + H₂O → Ca(OH)₂</text>
      <text x="24" y="180" class="tx-b">3. reakcja strąceniowa</text>
      <text x="24" y="208" class="tx">CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</text>
    </svg>`,
    text: `<p>Metale aktywne (np. sód, potas, wapń) reagują z wodą – powstaje wodorotlenek i <b>wydziela się wodór</b>. Tlenki tych metali z wodą dają wodorotlenek bez wodoru.</p>
      <p>Wodorotlenku <b>nierozpuszczalnego</b>, np. Cu(OH)<sub>2</sub>, tak nie zrobisz. Mieszasz dwa roztwory i wytrąca się <b>osad</b> (strzałka ↓) – tu niebieski.</p>`,
    hook: 'Rozpuszczalny? Zrób z metalu albo tlenku. Nierozpuszczalny? Strąć go!',
    check: { q: 'Co, oprócz wodorotlenku, powstaje w reakcji potasu z wodą?', options: ['tlen', 'wodór', 'woda', 'nic więcej'], answer: 1, explain: 'Metal aktywny + woda → wodorotlenek + wodór: 2K + 2H₂O → 2KOH + H₂↑.' },
  },
  {
    title: 'Dysocjacja – rozpad na jony',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kryształ NaOH wsypany do wody rozpada się na jony Na plus i OH minus. Roztwór z jonami przewodzi prąd – to elektrolit">
      <defs><marker id="a-k8c-wod-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="80" width="80" height="44" rx="6" class="f4 s4 sw"/>
      <text x="60" y="108" class="tx-b" text-anchor="middle">NaOH</text>
      <line x1="110" y1="102" x2="180" y2="102" class="ln" marker-end="url(#a-k8c-wod-1)"/>
      <text x="145" y="92" class="tx-s" text-anchor="middle">H₂O</text>
      <path d="M195,40 L195,180 L385,180 L385,40" class="ln"/>
      <rect x="197" y="70" width="186" height="108" class="f1"/>
      <g class="f3 s3"><circle cx="230" cy="100" r="17"/><circle cx="300" cy="150" r="17"/><circle cx="355" cy="95" r="17"/></g>
      <g class="f2 s2"><circle cx="265" cy="140" r="17"/><circle cx="330" cy="110" r="17"/><circle cx="225" cy="155" r="17"/></g>
      <g class="tx-s" text-anchor="middle"><text x="230" y="105">OH⁻</text><text x="300" y="155">OH⁻</text><text x="355" y="100">OH⁻</text>
        <text x="265" y="145">Na⁺</text><text x="330" y="115">Na⁺</text><text x="225" y="160">Na⁺</text></g>
      <text x="290" y="30" class="tx" text-anchor="middle">💡 jony → prąd płynie</text>
    </svg>`,
    text: `<p>W wodzie wodorotlenek rozpuszczalny rozpada się na jony – to <b>dysocjacja elektrolityczna</b>: NaOH → Na<sup>+</sup> + OH<sup>−</sup>, Ca(OH)<sub>2</sub> → Ca<sup>2+</sup> + 2OH<sup>−</sup>.</p>
      <p>Swobodne jony przenoszą ładunek, więc roztwór przewodzi prąd. Taka substancja to <b>elektrolit</b>. Roztwór cukru nie ma jonów – cukier to <b>nieelektrolit</b>.</p>`,
    remember: 'Liczba jonów OH<sup>−</sup> = liczba grup OH we wzorze; ładunek kationu = wartościowość metalu.',
    check: { q: 'Które równanie dysocjacji KOH jest poprawne?', options: ['KOH → K⁺ + OH⁻', 'KOH → K⁻ + OH⁺', 'KOH → KO⁻ + H⁺'], answer: 0, explain: 'Potas tworzy kation K⁺, a grupa wodorotlenkowa – anion OH⁻.' },
  },
  {
    title: 'Zasada to nie to samo co wodorotlenek',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwa nachodzące koła: wodorotlenki i zasady. Tylko wodorotlenki: Cu(OH)₂ i Al(OH)₃. Część wspólna: NaOH, KOH, Ca(OH)₂. Tylko zasady: woda amoniakalna">
      <ellipse cx="150" cy="115" rx="120" ry="80" class="f4 s4 sw" fill-opacity="0.7"/>
      <ellipse cx="250" cy="115" rx="120" ry="80" class="f1 s1 sw" fill-opacity="0.6"/>
      <text x="100" y="24" class="tx-b" text-anchor="middle">wodorotlenki</text>
      <text x="300" y="24" class="tx-b" text-anchor="middle">zasady</text>
      <text x="82" y="108" class="tx" text-anchor="middle">Cu(OH)₂</text>
      <text x="82" y="134" class="tx" text-anchor="middle">Al(OH)₃</text>
      <text x="200" y="96" class="tx" text-anchor="middle">NaOH</text>
      <text x="200" y="122" class="tx" text-anchor="middle">KOH</text>
      <text x="200" y="148" class="tx" text-anchor="middle">Ca(OH)₂</text>
      <text x="320" y="110" class="tx-s" text-anchor="middle">woda</text>
      <text x="320" y="128" class="tx-s" text-anchor="middle">amoniakalna</text>
    </svg>`,
    text: `<p><b>Zasada</b> to substancja, która w wodzie zwiększa stężenie jonów OH<sup>−</sup>. Roztwór NaOH to zasada sodowa.</p>
      <p>Wodorotlenki nierozpuszczalne (Cu(OH)<sub>2</sub>) nie dysocjują, więc <b>nie tworzą zasady</b>. A woda amoniakalna jest zasadą, choć amoniak <b>nie jest wodorotlenkiem</b>.</p>`,
    remember: 'Wodorotlenek – związek M(OH)<sub>n</sub>. Zasada – roztwór, w którym przybywa jonów OH<sup>−</sup>.',
    hook: 'Wodorotlenek zostaje zasadą dopiero wtedy, gdy wskoczy do wody i się rozpuści.',
    check: { q: 'Dlaczego Cu(OH)₂ nie tworzy zasady?', options: ['bo nie rozpuszcza się w wodzie', 'bo nie ma grup OH', 'bo jest niebieski'], answer: 0, explain: 'Cu(OH)₂ ma grupy OH, ale się nie rozpuszcza – nie dysocjuje, więc nie daje jonów OH⁻ w roztworze.' },
  },
];

window.LESSONS['chemia/kwasy'] = [
  {
    title: 'Kwas = wodór + reszta kwasowa',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="HCl: jeden atom wodoru i reszta Cl o wartościowości I. H₂SO₄: dwa atomy wodoru i reszta SO₄ o wartościowości II. H₃PO₄: trzy atomy wodoru i reszta PO₄ o wartościowości III">
      <g class="f2 s2"><rect x="20" y="20" width="40" height="34" rx="6"/>
        <rect x="20" y="76" width="40" height="34" rx="6"/><rect x="66" y="76" width="40" height="34" rx="6"/>
        <rect x="20" y="132" width="40" height="34" rx="6"/><rect x="66" y="132" width="40" height="34" rx="6"/><rect x="112" y="132" width="40" height="34" rx="6"/></g>
      <g class="f5 s5"><rect x="70" y="20" width="70" height="34" rx="6"/><rect x="116" y="76" width="70" height="34" rx="6"/><rect x="162" y="132" width="70" height="34" rx="6"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="43">H</text><text x="40" y="99">H</text><text x="86" y="99">H</text>
        <text x="40" y="155">H</text><text x="86" y="155">H</text><text x="132" y="155">H</text>
        <text x="105" y="43">Cl</text><text x="151" y="99">SO₄</text><text x="197" y="155">PO₄</text></g>
      <text x="255" y="43" class="tx">HCl – reszta I</text>
      <text x="255" y="99" class="tx">H₂SO₄ – II</text>
      <text x="255" y="155" class="tx">H₃PO₄ – III</text>
    </svg>`,
    text: `<p>Każdy kwas ma atomy <b>wodoru</b> i <b>resztę kwasową</b>: wzór H<sub>n</sub>R. Liczba atomów H = wartościowość reszty.</p>
      <p><b>Beztlenowe</b> (bez tlenu w reszcie): HCl – chlorowodorowy (solny), H<sub>2</sub>S – siarkowodorowy. <b>Tlenowe</b>: HNO<sub>3</sub> – azotowy(V), H<sub>2</sub>SO<sub>3</sub> – siarkowy(IV), H<sub>2</sub>SO<sub>4</sub> – siarkowy(VI), H<sub>2</sub>CO<sub>3</sub> – węglowy, H<sub>3</sub>PO<sub>4</sub> – fosforowy(V).</p>`,
    remember: 'Liczba rzymska w nazwie kwasu tlenowego = wartościowość niemetalu (S w H<sub>2</sub>SO<sub>4</sub> – VI, w H<sub>2</sub>SO<sub>3</sub> – IV).',
    check: { q: 'Jaką wartościowość ma reszta kwasowa w HNO₃?', options: ['I', 'II', 'III', 'V'], answer: 0, explain: 'W HNO₃ jest jeden atom wodoru, więc reszta NO₃ jest jednowartościowa. „V” w nazwie dotyczy azotu, nie reszty.' },
  },
  {
    title: 'Jak otrzymać kwas?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Kwasy beztlenowe: niemetal z wodorem daje wodorek, który rozpuszczony w wodzie jest kwasem, np. H₂ + Cl₂ → 2HCl. Kwasy tlenowe: tlenek niemetalu z wodą, np. SO₃ + H₂O → H₂SO₄ oraz CO₂ + H₂O ⇄ H₂CO₃">
      <rect x="10" y="8" width="380" height="84" rx="10" class="f1 s1"/>
      <rect x="10" y="102" width="380" height="100" rx="10" class="f3 s3"/>
      <text x="24" y="32" class="tx-b">beztlenowe</text>
      <text x="24" y="56" class="tx">H₂ + Cl₂ → 2HCl (chlorowodór)</text>
      <text x="24" y="80" class="tx-s">chlorowodór rozpuszczony w wodzie = kwas solny</text>
      <text x="24" y="126" class="tx-b">tlenowe: tlenek niemetalu + woda</text>
      <text x="24" y="152" class="tx">SO₃ + H₂O → H₂SO₄</text>
      <text x="24" y="178" class="tx">CO₂ + H₂O ⇄ H₂CO₃</text>
      <text x="230" y="178" class="tx-s">(nietrwały)</text>
    </svg>`,
    text: `<p>Kwasy <b>beztlenowe</b>: łączysz niemetal z wodorem, a powstały gaz (wodorek) rozpuszczasz w wodzie.</p>
      <p>Kwasy <b>tlenowe</b>: tlenek niemetalu reaguje z wodą. Wartościowość niemetalu się nie zmienia: SO<sub>2</sub> (S – IV) daje H<sub>2</sub>SO<sub>3</sub>, SO<sub>3</sub> (S – VI) daje H<sub>2</sub>SO<sub>4</sub>. Kwas węglowy jest nietrwały – łatwo rozpada się z powrotem na CO<sub>2</sub> i wodę (bąbelki w wodzie gazowanej).</p>`,
    hook: 'Tlen w kwasie „przychodzi” z tlenku – dlatego kwasy tlenowe robisz z tlenków.',
  },
  {
    title: 'Dysocjacja kwasów',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="H₂SO₄ rozpada się w wodzie na dwa kationy wodoru H plus i jeden anion siarczanowy SO₄ dwa minus">
      <defs><marker id="a-k8c-kw-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="15" y="62" width="100" height="44" rx="8" class="f5 s5 sw"/>
      <text x="65" y="90" class="tx-b" text-anchor="middle">H₂SO₄</text>
      <line x1="125" y1="84" x2="185" y2="84" class="ln" marker-end="url(#a-k8c-kw-1)"/>
      <text x="155" y="74" class="tx-s" text-anchor="middle">H₂O</text>
      <g class="f2 s2"><circle cx="220" cy="50" r="22"/><circle cx="220" cy="120" r="22"/></g>
      <text x="220" y="56" class="tx-b" text-anchor="middle">H⁺</text><text x="220" y="126" class="tx-b" text-anchor="middle">H⁺</text>
      <circle cx="320" cy="85" r="40" class="f5 s5 sw"/>
      <text x="320" y="92" class="tx-b" text-anchor="middle">SO₄²⁻</text>
      <text x="200" y="172" class="tx" text-anchor="middle">2 × (+1) + (−2) = 0</text>
    </svg>`,
    text: `<p>W wodzie kwas rozpada się na <b>kationy wodoru H<sup>+</sup></b> i <b>anion reszty kwasowej</b>: HCl → H<sup>+</sup> + Cl<sup>−</sup>, H<sub>2</sub>SO<sub>4</sub> → 2H<sup>+</sup> + SO<sub>4</sub><sup>2−</sup>.</p>
      <p>To jony H<sup>+</sup> odpowiadają za kwaśne właściwości. Kwas to substancja, która w wodzie zwiększa stężenie jonów H<sup>+</sup>.</p>`,
    remember: 'Ile atomów H w cząsteczce, tyle kationów H<sup>+</sup> – i taki ładunek ujemny ma reszta.',
    hook: 'Ładunki muszą się zbilansować do zera – jak rachunek, który ma wyjść „na czysto”.',
    check: { q: 'Jak dysocjuje kwas fosforowy(V) H₃PO₄?', options: ['H₃PO₄ → 3H⁺ + PO₄³⁻', 'H₃PO₄ → H₃⁺ + PO₄⁻', 'H₃PO₄ → 3H + PO₄', 'H₃PO₄ → H⁺ + PO₄³⁻'], answer: 0, explain: 'Trzy atomy wodoru → trzy kationy H⁺, a reszta PO₄ ma ładunek 3−.' },
  },
  {
    title: 'Dysocjacja stopniowa: H₂S i H₂CO₃',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Schody: najpierw H₂S oddaje jeden kation wodoru i powstaje HS minus, potem HS minus oddaje drugi kation wodoru i powstaje S dwa minus">
      <path d="M20,140 L140,140 L140,95 L260,95 L260,50 L380,50" class="ln sw"/>
      <rect x="35" y="104" width="90" height="34" rx="6" class="f5 s5"/><text x="80" y="127" class="tx-b" text-anchor="middle">H₂S</text>
      <rect x="155" y="59" width="90" height="34" rx="6" class="f5 s5"/><text x="200" y="82" class="tx-b" text-anchor="middle">HS⁻</text>
      <rect x="275" y="14" width="90" height="34" rx="6" class="f5 s5"/><text x="320" y="37" class="tx-b" text-anchor="middle">S²⁻</text>
      <text x="140" y="160" class="tx" text-anchor="middle">+ H⁺</text>
      <text x="260" y="118" class="tx" text-anchor="middle">+ H⁺</text>
      <text x="80" y="30" class="tx-s" text-anchor="middle">etap 1 i etap 2</text>
    </svg>`,
    text: `<p>Kwasy siarkowodorowy i węglowy oddają jony H<sup>+</sup> <b>po kolei</b>:</p>
      <ul><li>H<sub>2</sub>S ⇄ H<sup>+</sup> + HS<sup>−</sup>, potem HS<sup>−</sup> ⇄ H<sup>+</sup> + S<sup>2−</sup></li>
      <li>H<sub>2</sub>CO<sub>3</sub> ⇄ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>, potem HCO<sub>3</sub><sup>−</sup> ⇄ H<sup>+</sup> + CO<sub>3</sub><sup>2−</sup></li></ul>
      <p>Strzałka ⇄ oznacza, że reakcja zachodzi w obie strony.</p>`,
    hook: 'Dwa wodory schodzą po schodach – zawsze po jednym stopniu.',
    check: { q: 'Jaki jon powstaje w pierwszym etapie dysocjacji H₂CO₃ (oprócz H⁺)?', options: ['CO₃²⁻', 'HCO₃⁻', 'H₂CO₃⁺', 'OH⁻'], answer: 1, explain: 'W pierwszym etapie odłącza się tylko jeden H⁺, więc zostaje HCO₃⁻.' },
  },
  {
    title: 'Bezpiecznie z kwasami',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Źle: woda wlewana do kwasu – pryska. Dobrze: kwas wlewany powoli do wody">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f3 s3"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">❌ źle</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">✅ dobrze</text>
      <path d="M62,90 L62,170 L142,170 L142,90" class="ln"/><rect x="64" y="130" width="76" height="38" class="f5"/>
      <path d="M257,90 L257,170 L337,170 L337,90" class="ln"/><rect x="259" y="130" width="76" height="38" class="f1"/>
      <text x="102" y="70" class="tx" text-anchor="middle">woda → kwas</text>
      <text x="297" y="70" class="tx" text-anchor="middle">kwas → woda</text>
      <text x="102" y="122" class="tx-b" text-anchor="middle">💥</text>
      <text x="102" y="158" class="tx-s" text-anchor="middle">kwas</text>
      <text x="297" y="158" class="tx-s" text-anchor="middle">woda</text>
    </svg>`,
    text: `<p>Stężone kwasy są <b>żrące</b>. Stężony kwas siarkowy(VI) dodatkowo pochłania wodę i zwęgla np. cukier czy papier.</p>
      <p>Rozcieńczając kwas, <b>wlewaj kwas do wody</b> – powoli, cienkim strumieniem, mieszając. Odwrotnie mieszanina może się gwałtownie nagrzać i pryskać. Pracuj w okularach i rękawicach.</p>`,
    hook: '„Pamiętaj, chemiku młody, wlewaj zawsze kwas do wody”.',
    check: { q: 'Jak bezpiecznie rozcieńczyć stężony kwas?', options: ['wlewać kwas do wody', 'wlewać wodę do kwasu', 'kolejność nie ma znaczenia'], answer: 0, explain: 'Kwas wlewamy powoli do wody, mieszając.' },
  },
];

window.LESSONS['chemia/odczyn-ph'] = [
  {
    title: 'Skala pH – od kwasu do zasady',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Skala pH od 0 do 14. Poniżej 7 odczyn kwasowy, 7 – obojętny, powyżej 7 – zasadowy">
      <rect x="20" y="60" width="174" height="34" class="f2 s2"/>
      <rect x="206" y="60" width="174" height="34" class="f1 s1"/>
      <rect x="194" y="56" width="12" height="42" class="f3 s3"/>
      <g class="tx-s" text-anchor="middle"><text x="20" y="114">0</text><text x="200" y="114">7</text><text x="380" y="114">14</text></g>
      <text x="107" y="140" class="tx-b" text-anchor="middle">kwasowy</text>
      <text x="200" y="40" class="tx-b" text-anchor="middle">obojętny</text>
      <text x="293" y="140" class="tx-b" text-anchor="middle">zasadowy</text>
      <text x="107" y="162" class="tx-s" text-anchor="middle">pH &lt; 7</text>
      <text x="200" y="20" class="tx-s" text-anchor="middle">pH = 7</text>
      <text x="293" y="162" class="tx-s" text-anchor="middle">pH &gt; 7</text>
      <text x="40" y="83" class="tx-s">← bardziej</text><text x="290" y="83" class="tx-s">bardziej →</text>
    </svg>`,
    text: `<p><b>pH</b> mówi, jaki odczyn ma roztwór. Skala ma zwykle wartości od 0 do 14.</p>
      <ul><li>pH &lt; 7 – <b>kwasowy</b> (sok z cytryny, ocet, roztwory kwasów),</li><li>pH = 7 – <b>obojętny</b> (woda destylowana),</li><li>pH &gt; 7 – <b>zasadowy</b> (roztwory zasad, roztwór mydła).</li></ul>
      <p>Im dalej od 7, tym odczyn „mocniejszy”: pH 1 jest bardziej kwasowe niż pH 5.</p>`,
    remember: 'Siódemka to środek: mniej – kwas, więcej – zasada.',
    check: { q: 'Roztwór ma pH = 10. Jaki ma odczyn?', options: ['kwasowy', 'obojętny', 'zasadowy'], answer: 2, explain: '10 > 7, więc odczyn jest zasadowy.' },
  },
  {
    title: 'Odczyn to przewaga jonów',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy zlewki. W kwasowej więcej jonów H plus niż OH minus. W obojętnej tyle samo. W zasadowej więcej jonów OH minus">
      <g class="ln"><path d="M20,40 L20,150 L120,150 L120,40"/><path d="M150,40 L150,150 L250,150 L250,40"/><path d="M280,40 L280,150 L380,150 L380,40"/></g>
      <g class="f2 s2"><circle cx="45" cy="75" r="13"/><circle cx="95" cy="75" r="13"/><circle cx="45" cy="125" r="13"/><circle cx="70" cy="100" r="13"/>
        <circle cx="180" cy="80" r="13"/><circle cx="220" cy="120" r="13"/><circle cx="335" cy="100" r="13"/></g>
      <g class="f1 s1"><circle cx="95" cy="125" r="13"/><circle cx="220" cy="80" r="13"/><circle cx="180" cy="120" r="13"/>
        <circle cx="305" cy="75" r="13"/><circle cx="355" cy="75" r="13"/><circle cx="305" cy="125" r="13"/><circle cx="355" cy="125" r="13"/></g>
      <text x="70" y="176" class="tx-b" text-anchor="middle">kwasowy</text>
      <text x="200" y="176" class="tx-b" text-anchor="middle">obojętny</text>
      <text x="330" y="176" class="tx-b" text-anchor="middle">zasadowy</text>
      <circle cx="120" cy="18" r="9" class="f2 s2"/><text x="135" y="23" class="tx-s">H⁺</text>
      <circle cx="220" cy="18" r="9" class="f1 s1"/><text x="235" y="23" class="tx-s">OH⁻</text>
    </svg>`,
    text: `<p>O odczynie decyduje, których jonów jest więcej:</p>
      <ul><li><b>kwasowy</b> – więcej H<sup>+</sup> niż OH<sup>−</sup>,</li><li><b>obojętny</b> – tyle samo,</li><li><b>zasadowy</b> – więcej OH<sup>−</sup> niż H<sup>+</sup>.</li></ul>`,
    hook: 'H<sup>+</sup> ciągnie w stronę kwasu, OH<sup>−</sup> – w stronę zasady. Remis = obojętny.',
  },
  {
    title: 'Wskaźniki – chemiczne „czujniki”',
    svg: `<svg viewBox="0 0 420 160" role="img" aria-label="Tabela: fenoloftaleina – w kwasie bezbarwna, w roztworze obojętnym bezbarwna, w zasadzie malinowa. Oranż metylowy – w kwasie czerwony, w obojętnym pomarańczowy, w zasadzie żółty">
      <g class="ln-thin"><rect x="10" y="10" width="400" height="140" class="bg"/>
        <line x1="10" y1="44" x2="410" y2="44"/><line x1="10" y1="97" x2="410" y2="97"/>
        <line x1="110" y1="10" x2="110" y2="150"/><line x1="210" y1="10" x2="210" y2="150"/><line x1="310" y1="10" x2="310" y2="150"/></g>
      <g class="tx-b" text-anchor="middle"><text x="160" y="33">kwas</text><text x="260" y="33">obojętny</text><text x="360" y="33">zasada</text></g>
      <text x="18" y="68" class="tx">fenolo-</text><text x="18" y="88" class="tx">ftaleina</text>
      <text x="18" y="121" class="tx">oranż</text><text x="18" y="141" class="tx">metylowy</text>
      <rect x="314" y="49" width="92" height="44" rx="6" class="f5 s5 sw"/>
      <rect x="114" y="102" width="92" height="44" rx="6" class="f2 s2 sw"/>
      <g class="tx" text-anchor="middle"><text x="160" y="76">bezbarwna</text><text x="260" y="76">bezbarwna</text><text x="360" y="76">malinowa</text>
        <text x="160" y="129">czerwony</text><text x="360" y="129">żółty</text></g>
      <text x="260" y="128" class="tx-s" text-anchor="middle">pomarańczowy</text>
    </svg>`,
    text: `<p><b>Wskaźnik</b> zmienia barwę zależnie od odczynu.</p>
      <ul><li><b>Fenoloftaleina</b> – wykrywa <b>zasady</b> (malinowa). W kwasie i w wodzie jest bezbarwna, więc ich nie odróżni.</li>
      <li><b>Oranż metylowy</b> – wykrywa <b>kwasy</b> (czerwony).</li>
      <li><b>Uniwersalny papierek wskaźnikowy</b> – zmienia barwę w całej skali pH 0–14; porównujesz go ze skalą barw na opakowaniu.</li></ul>`,
    remember: 'Fenoloftaleina + zasada = malinowa. Oranż metylowy + kwas = czerwony.',
    hook: 'Fenoloftaleina jest „ślepa” na kwasy – widzi tylko zasady.',
    check: { q: 'Masz wodę destylowaną i roztwór NaOH. Którym wskaźnikiem najprościej je odróżnisz?', options: ['fenoloftaleiną', 'niczym, oba są bezbarwne', 'wodą wapienną'], answer: 0, explain: 'Fenoloftaleina w roztworze NaOH zabarwi się na malinowo, a w wodzie zostanie bezbarwna.' },
  },
  {
    title: 'Kwaśne opady',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Fabryka i samochód wysyłają tlenki siarki i azotu. W chmurze łączą się z wodą w kwasy. Spada kwaśny deszcz o pH poniżej 5,6, który niszczy las, zabytki i zakwasza jeziora">
      <defs><marker id="a-k8c-ph-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="40" y="170" class="tx-b" text-anchor="middle">🏭</text>
      <text x="90" y="170" class="tx-b" text-anchor="middle">🚗</text>
      <path d="M65,145 L145,70" class="ln dash" marker-end="url(#a-k8c-ph-1)"/>
      <text x="40" y="110" class="tx-s">SO₂, NOₓ</text>
      <ellipse cx="200" cy="50" rx="70" ry="32" class="f1 s1"/>
      <text x="200" y="47" class="tx" text-anchor="middle">+ H₂O</text>
      <text x="200" y="68" class="tx-s" text-anchor="middle">→ kwasy</text>
      <path d="M262,70 L320,120" class="ln dash" marker-end="url(#a-k8c-ph-1)"/>
      <text x="300" y="30" class="tx">🌧️ pH &lt; 5,6</text>
      <text x="270" y="170" class="tx-b">🌲</text><text x="305" y="170" class="tx-b">🏛️</text><text x="340" y="170" class="tx-b">🐟</text>
      <text x="320" y="192" class="tx-s" text-anchor="middle">las, zabytki, jeziora</text>
    </svg>`,
    text: `<p>Tlenki siarki i azotu (głównie ze spalania paliw i z przemysłu) łączą się w powietrzu z wodą i tworzą kwasy. Opad o <b>pH &lt; 5,6</b> to <b>kwaśny opad</b>.</p>
      <p>Skutki: zakwaszone gleby i jeziora, chore lasy, niszczenie budowli z wapienia i piaskowca, korozja metali. Ograniczamy je, np. <b>odsiarczając spaliny</b>, oszczędzając energię i korzystając z odnawialnych źródeł energii.</p>`,
    hook: 'Komin → chmura → deszcz: co wypuścisz w górę, spadnie ci na głowę.',
    check: { q: 'Poniżej jakiego pH opad nazywamy kwaśnym?', options: ['7', '5,6', '1'], answer: 1, explain: 'Kwaśne opady mają pH mniejsze niż 5,6.' },
  },
];

window.LESSONS['chemia/sole'] = [
  {
    title: 'Zobojętnianie: kwas + zasada',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="HCl i NaOH: wodór z kwasu łączy się z grupą OH w wodę, a sód z chlorem tworzy sól – chlorek sodu">
      <path d="M40,48 C40,8 218,8 218,48" class="ln dash"/>
      <path d="M84,86 C84,126 172,126 172,86" class="ln dash"/>
      <g class="f2 s2"><rect x="20" y="50" width="40" height="34" rx="6"/></g>
      <g class="f5 s5"><rect x="62" y="50" width="44" height="34" rx="6"/></g>
      <g class="f1 s1"><rect x="150" y="50" width="44" height="34" rx="6"/></g>
      <g class="f3 s3"><rect x="196" y="50" width="44" height="34" rx="6"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="73">H</text><text x="84" y="73">Cl</text><text x="172" y="73">Na</text><text x="218" y="73">OH</text></g>
      <text x="128" y="73" class="tx-b" text-anchor="middle">+</text>
      <text x="320" y="30" class="tx-s" text-anchor="middle">H⁺ + OH⁻ → H₂O</text>
      <text x="320" y="73" class="tx" text-anchor="middle">kwas + zasada</text>
      <text x="320" y="118" class="tx-s" text-anchor="middle">Na⁺ i Cl⁻ zostają</text>
      <rect x="40" y="145" width="110" height="38" rx="8" class="f4 s4 sw"/>
      <text x="95" y="170" class="tx-b" text-anchor="middle">NaCl</text>
      <rect x="210" y="145" width="110" height="38" rx="8" class="f1 s1 sw"/>
      <text x="265" y="170" class="tx-b" text-anchor="middle">H₂O</text>
      <text x="180" y="170" class="tx-b" text-anchor="middle">+</text>
      <text x="180" y="206" class="tx-s" text-anchor="middle">sól + woda</text>
    </svg>`,
    text: `<p>Kwas i zasada „gaszą się” nawzajem: HCl + NaOH → NaCl + H<sub>2</sub>O. To <b>reakcja zobojętniania</b>.</p>
      <p>Naprawdę reagują tylko jony H<sup>+</sup> i OH<sup>−</sup> – łączą się w wodę. Jony Na<sup>+</sup> i Cl<sup>−</sup> zostają w roztworze jako sól.</p>`,
    remember: 'Kwas + zasada → sól + woda. Istota: <b>H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O</b>.',
    hook: 'Wodór kwasu i OH zasady to para – razem robią wodę. Reszta zostaje solą.',
    check: { q: 'Co powstaje w reakcji HNO₃ z KOH?', options: ['KNO₃ i H₂O', 'KNO₃ i H₂', 'K₂O i HNO₂', 'KOH i H₂O'], answer: 0, explain: 'Zobojętnianie: kwas + zasada → sól + woda. Sól to azotan(V) potasu KNO₃.' },
  },
  {
    title: 'Nazwy soli',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Tabela: HCl – chlorki, H₂S – siarczki, HNO₃ – azotany(V), H₂SO₃ – siarczany(IV), H₂SO₄ – siarczany(VI), H₂CO₃ – węglany, H₃PO₄ – fosforany(V)">
      <rect x="10" y="8" width="380" height="58" rx="8" class="f1 s1"/>
      <rect x="10" y="72" width="380" height="150" rx="8" class="f3 s3"/>
      <text x="24" y="30" class="tx-s">beztlenowe → -ek</text>
      <text x="24" y="56" class="tx">HCl → chlorki</text><text x="210" y="56" class="tx">H₂S → siarczki</text>
      <text x="24" y="94" class="tx-s">tlenowe → -an</text>
      <text x="24" y="120" class="tx">HNO₃ → azotany(V)</text>
      <text x="24" y="146" class="tx">H₂SO₃ → siarczany(IV)</text>
      <text x="24" y="172" class="tx">H₂SO₄ → siarczany(VI)</text>
      <text x="24" y="198" class="tx">H₂CO₃ → węglany</text>
      <text x="220" y="198" class="tx">H₃PO₄ → fosforany(V)</text>
    </svg>`,
    text: `<p>Nazwa soli = nazwa reszty kwasowej + nazwa metalu: NaCl – <b>chlorek sodu</b>, CuSO<sub>4</sub> – <b>siarczan(VI) miedzi(II)</b>, CaCO<sub>3</sub> – <b>węglan wapnia</b>.</p>
      <p>Sole kwasów beztlenowych kończą się na <b>-ek</b>, tlenowych – na <b>-an</b>.</p>`,
    hook: '-ek = „bez tlenku”, -an = „z tlenem”.',
    check: { q: 'Jak nazywa się sól Na₂CO₃?', options: ['węglan sodu', 'węglik sodu', 'siarczan sodu', 'chlorek sodu'], answer: 0, explain: 'CO₃ to reszta kwasu węglowego – sole to węglany. Na₂CO₃ – węglan sodu.' },
  },
  {
    title: 'Wzór soli „na krzyż”',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Wapń o wartościowości II i reszta PO₄ o wartościowości III. Wartościowości przechodzą na krzyż jako indeksy: Ca₃(PO₄)₂">
      <defs><marker id="a-k8c-sol-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="80" y="30" class="tx-b" text-anchor="middle">II</text>
      <text x="200" y="30" class="tx-b" text-anchor="middle">III</text>
      <rect x="45" y="44" width="70" height="40" rx="8" class="f1 s1 sw"/><text x="80" y="71" class="tx-b" text-anchor="middle">Ca</text>
      <rect x="160" y="44" width="80" height="40" rx="8" class="f5 s5 sw"/><text x="200" y="71" class="tx-b" text-anchor="middle">PO₄</text>
      <path d="M190,30 L100,135" class="ln" marker-end="url(#a-k8c-sol-1)"/>
      <path d="M90,30 L190,135" class="ln" marker-end="url(#a-k8c-sol-1)"/>
      <text x="140" y="168" class="tx-b" text-anchor="middle">Ca₃(PO₄)₂</text>
      <text x="270" y="110" class="tx">3 · II = 6</text>
      <text x="270" y="136" class="tx">2 · III = 6 ✓</text>
    </svg>`,
    text: `<p>Wartościowość metalu staje się indeksem przy reszcie, a wartościowość reszty – indeksem przy metalu. Gdy reszta ma więcej niż jeden atom i indeks większy niż 1, bierzesz ją w nawias.</p>
      <p>Sprawdzenie: iloczyny po obu stronach muszą być równe. Indeksy skracasz, jeśli się da: Ca (II) i SO<sub>4</sub> (II) → CaSO<sub>4</sub>.</p>`,
    remember: 'Indeksy „na krzyż”, potem skróć i sprawdź iloczyny.',
    check: { q: 'Jaki jest wzór siarczanu(VI) glinu? (Al – III, SO₄ – II)', options: ['Al₂(SO₄)₃', 'Al₃(SO₄)₂', 'AlSO₄', 'Al(SO₄)₃'], answer: 0, explain: 'Na krzyż: Al₂(SO₄)₃. Sprawdź: 2 · III = 6 i 3 · II = 6.' },
  },
  {
    title: 'Cztery drogi do soli',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Cztery metody: kwas plus zasada daje sól i wodę; kwas plus tlenek metalu daje sól i wodę; kwas plus metal daje sól i wodór; zasada plus tlenek niemetalu daje sól i wodę">
      <g class="f4 s4"><rect x="10" y="6" width="380" height="54" rx="8"/><rect x="10" y="64" width="380" height="54" rx="8"/><rect x="10" y="180" width="380" height="54" rx="8"/></g>
      <rect x="10" y="122" width="380" height="54" rx="8" class="f2 s2 sw"/>
      <text x="22" y="28" class="tx-b">kwas + zasada → sól + woda</text>
      <text x="22" y="50" class="tx-s">HCl + NaOH → NaCl + H₂O</text>
      <text x="22" y="86" class="tx-b">kwas + tlenek metalu → sól + woda</text>
      <text x="22" y="108" class="tx-s">CuO + H₂SO₄ → CuSO₄ + H₂O</text>
      <text x="22" y="144" class="tx-b">kwas + metal → sól + wodór</text>
      <text x="22" y="166" class="tx-s">Mg + 2HCl → MgCl₂ + H₂↑</text>
      <text x="22" y="202" class="tx-b">zasada + tlenek niemetalu → sól + woda</text>
      <text x="22" y="224" class="tx-s">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</text>
    </svg>`,
    text: `<p>Sól zawsze łączy „kawałek” od metalu i „kawałek” od kwasu. Metal może pochodzić z zasady, tlenku metalu albo z samego metalu (np. Na, K, Ca, Mg). Reszta kwasowa – z kwasu albo z tlenku niemetalu (CO<sub>2</sub> „pochodzi” od H<sub>2</sub>CO<sub>3</sub>, więc daje węglany).</p>`,
    hook: 'Tylko sam metal daje wodór – w pozostałych drogach powstaje woda.',
    check: { q: 'Który gaz wydziela się w reakcji wapnia z kwasem solnym?', options: ['tlen', 'chlor', 'wodór'], answer: 2, explain: 'Metal + kwas → sól + wodór: Ca + 2HCl → CaCl₂ + H₂↑.' },
  },
  {
    title: 'Reakcje strąceniowe',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Roztwór azotanu(V) srebra wlany do roztworu chlorku sodu daje biały osad chlorku srebra. Zapis jonowy: Ag plus i Cl minus dają AgCl">
      <defs><marker id="a-k8c-sol-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M40,30 L40,140 A20,20 0 0 0 80,140 L80,30" class="ln"/><rect x="42" y="80" width="36" height="78" class="f1"/>
      <path d="M150,30 L150,140 A20,20 0 0 0 190,140 L190,30" class="ln"/><rect x="152" y="80" width="36" height="78" class="f1"/>
      <text x="60" y="185" class="tx-s" text-anchor="middle">AgNO₃</text><text x="170" y="185" class="tx-s" text-anchor="middle">NaCl</text>
      <text x="115" y="100" class="tx-b" text-anchor="middle">+</text>
      <line x1="205" y1="100" x2="245" y2="100" class="ln" marker-end="url(#a-k8c-sol-2)"/>
      <path d="M265,30 L265,140 A20,20 0 0 0 305,140 L305,30" class="ln"/><rect x="267" y="70" width="36" height="88" class="f1"/>
      <path d="M268,140 A17,17 0 0 0 302,140 L302,130 L268,130 z" class="bg ln-thin"/>
      <text x="285" y="185" class="tx-s" text-anchor="middle">AgCl↓</text>
      <text x="320" y="125" class="tx-s">biały osad</text>
      <text x="200" y="22" class="tx" text-anchor="middle">Ag⁺ + Cl⁻ → AgCl↓</text>
    </svg>`,
    text: `<p>Mieszasz dwa przezroczyste roztwory, a nagle robi się mętno – powstał <b>osad</b> substancji trudno rozpuszczalnej. To <b>reakcja strąceniowa</b>.</p>
      <p>AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub>. W zapisie jonowym skróconym zostawiasz tylko jony, które tworzą osad: Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl↓. Czy osad powstanie, sprawdzisz w <b>tablicy rozpuszczalności</b>.</p>`,
    remember: 'Osad = substancja trudno rozpuszczalna. Zanim zapiszesz strzałkę ↓, sprawdź ją w tablicy rozpuszczalności.',
    check: { q: 'Który zapis jonowy przedstawia strącanie wodorotlenku miedzi(II)?', options: ['Cu²⁺ + 2OH⁻ → Cu(OH)₂↓', 'Na⁺ + OH⁻ → NaOH↓', 'H⁺ + OH⁻ → H₂O'], answer: 0, explain: 'Osad tworzą jony Cu²⁺ i OH⁻. Trzeci zapis to zobojętnianie.' },
  },
];

window.LESSONS['chemia/weglowodory'] = [
  {
    title: 'Węgiel ma cztery ręce',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Wzory strukturalne metanu CH₄, etanu C₂H₆ i propanu C₃H₈. Każdy atom węgla ma cztery wiązania">
      <g class="ln-thin">
        <line x1="60" y1="66" x2="60" y2="80"/><line x1="60" y1="100" x2="60" y2="114"/><line x1="34" y1="90" x2="50" y2="90"/><line x1="70" y1="90" x2="86" y2="90"/>
        <line x1="150" y1="66" x2="150" y2="80"/><line x1="150" y1="100" x2="150" y2="114"/><line x1="190" y1="66" x2="190" y2="80"/><line x1="190" y1="100" x2="190" y2="114"/>
        <line x1="124" y1="90" x2="140" y2="90"/><line x1="160" y1="90" x2="180" y2="90"/><line x1="200" y1="90" x2="216" y2="90"/>
        <line x1="275" y1="66" x2="275" y2="80"/><line x1="275" y1="100" x2="275" y2="114"/><line x1="315" y1="66" x2="315" y2="80"/><line x1="315" y1="100" x2="315" y2="114"/>
        <line x1="355" y1="66" x2="355" y2="80"/><line x1="355" y1="100" x2="355" y2="114"/>
        <line x1="249" y1="90" x2="265" y2="90"/><line x1="285" y1="90" x2="305" y2="90"/><line x1="325" y1="90" x2="345" y2="90"/><line x1="365" y1="90" x2="381" y2="90"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="60" y="97">C</text><text x="150" y="97">C</text><text x="190" y="97">C</text><text x="275" y="97">C</text><text x="315" y="97">C</text><text x="355" y="97">C</text></g>
      <g class="tx t1" text-anchor="middle">
        <text x="60" y="62">H</text><text x="60" y="130">H</text><text x="26" y="96">H</text><text x="94" y="96">H</text>
        <text x="150" y="62">H</text><text x="150" y="130">H</text><text x="190" y="62">H</text><text x="190" y="130">H</text><text x="116" y="96">H</text><text x="224" y="96">H</text>
        <text x="275" y="62">H</text><text x="275" y="130">H</text><text x="315" y="62">H</text><text x="315" y="130">H</text><text x="355" y="62">H</text><text x="355" y="130">H</text>
        <text x="241" y="96">H</text><text x="389" y="96">H</text></g>
      <g class="tx" text-anchor="middle"><text x="60" y="165">metan CH₄</text><text x="170" y="165">etan C₂H₆</text><text x="315" y="165">propan C₃H₈</text></g>
      <text x="200" y="22" class="tx-b" text-anchor="middle">alkany: CₙH₂ₙ₊₂</text>
    </svg>`,
    text: `<p><b>Węglowodory</b> to związki tylko z węgla i wodoru. Atom węgla jest zawsze <b>czterowartościowy</b> – ma cztery wiązania.</p>
      <p><b>Alkany</b> mają tylko wiązania pojedyncze. Każdy kolejny ma o jedną grupę CH<sub>2</sub> więcej – to <b>szereg homologiczny</b>: metan, etan, propan, butan, pentan…</p>`,
    remember: 'Alkany: C<sub>n</sub>H<sub>2n+2</sub>. Np. n = 5 → C<sub>5</sub>H<sub>12</sub>.',
    hook: 'Licz H tak: podwój węgle i dodaj dwa.',
    check: { q: 'Jaki wzór ma butan (4 atomy C)?', options: ['C₄H₈', 'C₄H₁₀', 'C₄H₆', 'C₄H₁₂'], answer: 1, explain: '2 · 4 + 2 = 10, więc C₄H₁₀.' },
  },
  {
    title: 'Pojedyncze, podwójne, potrójne',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Etan z wiązaniem pojedynczym CH₃–CH₃, eten z wiązaniem podwójnym CH₂=CH₂, etyn z wiązaniem potrójnym CH≡CH. Wzory ogólne: alkany CₙH₂ₙ₊₂, alkeny CₙH₂ₙ, alkiny CₙH₂ₙ₋₂">
      <rect x="10" y="10" width="120" height="170" rx="10" class="f1 s1"/>
      <rect x="140" y="10" width="120" height="170" rx="10" class="f3 s3"/>
      <rect x="270" y="10" width="120" height="170" rx="10" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="70" y="38">alkan</text><text x="200" y="38">alken</text><text x="330" y="38">alkin</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="80">CH₃–CH₃</text><text x="200" y="80">CH₂=CH₂</text><text x="330" y="80">CH≡CH</text>
        <text x="70" y="110">etan</text><text x="200" y="110">eten</text><text x="330" y="110">etyn</text>
        <text x="70" y="160">CₙH₂ₙ₊₂</text><text x="200" y="160">CₙH₂ₙ</text><text x="330" y="160">CₙH₂ₙ₋₂</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="134">nasycony</text><text x="200" y="134">nienasycony</text><text x="330" y="134">nienasycony</text></g>
    </svg>`,
    text: `<p>Gdy między atomami węgla jest wiązanie <b>podwójne</b> – to <b>alken</b>, gdy <b>potrójne</b> – <b>alkin</b>. Takie węglowodory są <b>nienasycone</b>. Nazwę tworzysz od alkanu: propan → propen (C<sub>3</sub>H<sub>6</sub>) → propyn (C<sub>3</sub>H<sub>4</sub>).</p>`,
    hook: 'Końcówki -an, -en, -yn: „A, E, Y – jeden, dwa, trzy” kreski między węglami.',
    check: { q: 'Jak nazywa się węglowodór C₃H₆ z wiązaniem podwójnym?', options: ['propan', 'propen', 'propyn'], answer: 1, explain: 'Wiązanie podwójne → końcówka -en. C₃H₆ pasuje do wzoru CₙH₂ₙ.' },
  },
  {
    title: 'Dłuższy łańcuch – wyższa temperatura wrzenia',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Alkany od C1 do C20. Od 1 do 4 atomów węgla – gazy, od 5 do około 16 – ciecze, dalej – ciała stałe. Wraz z długością łańcucha rosną temperatury topnienia i wrzenia oraz gęstość">
      <defs><marker id="a-k8c-wgl-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="50" width="68" height="40" class="f1 s1"/>
      <rect x="88" y="50" width="204" height="40" class="f3 s3"/>
      <rect x="292" y="50" width="88" height="40" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="54" y="76">gazy</text><text x="190" y="76">ciecze</text><text x="336" y="76">stałe</text></g>
      <g class="tx-s" text-anchor="middle"><text x="54" y="110">C₁–C₄</text><text x="190" y="110">C₅ – ok. C₁₆</text><text x="336" y="110">dalsze</text></g>
      <line x1="30" y1="140" x2="370" y2="140" class="ln" marker-end="url(#a-k8c-wgl-1)"/>
      <text x="200" y="162" class="tx" text-anchor="middle">rośnie t. wrzenia i gęstość</text>
      <text x="200" y="32" class="tx" text-anchor="middle">liczba atomów węgla w łańcuchu →</text>
    </svg>`,
    text: `<p>Krótkie alkany (metan, etan, propan, butan) to <b>gazy</b>, średnie (od pentanu) – <b>ciecze</b>, a długie – <b>ciała stałe</b> (np. parafina). Im dłuższy łańcuch, tym wyższe temperatury topnienia i wrzenia i większa gęstość. Węglowodory nie rozpuszczają się w wodzie.</p>`,
    hook: 'Długie łańcuchy „sklejają się” mocniej – trudniej je rozdzielić, więc wrzą w wyższej temperaturze.',
  },
  {
    title: 'Spalanie: ile tlenu, taki produkt',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przy dużej ilości tlenu metan spala się do CO₂ i wody. Przy mniejszej – do trującego CO i wody. Przy bardzo małej – do sadzy i wody">
      <rect x="10" y="8" width="380" height="56" rx="8" class="f3 s3"/>
      <rect x="10" y="72" width="380" height="56" rx="8" class="f2 s2 sw"/>
      <rect x="10" y="136" width="380" height="56" rx="8" class="f4 s4"/>
      <text x="22" y="30" class="tx-b">dużo O₂ 🔥</text><text x="22" y="54" class="tx">CH₄ + 2O₂ → CO₂ + 2H₂O</text>
      <text x="22" y="94" class="tx-b">mniej O₂ ⚠️ czad!</text><text x="22" y="118" class="tx">2CH₄ + 3O₂ → 2CO + 4H₂O</text>
      <text x="22" y="158" class="tx-b">bardzo mało O₂</text><text x="22" y="182" class="tx">CH₄ + O₂ → C + 2H₂O</text>
      <text x="300" y="182" class="tx-s">C = sadza</text>
    </svg>`,
    text: `<p>Węglowodory są palne. Przy pełnym dostępie tlenu powstają CO<sub>2</sub> i woda (<b>spalanie całkowite</b>). Gdy tlenu brakuje, powstaje <b>tlenek węgla(II) – czad</b>, bezwonny i trujący, albo sadza.</p>
      <p>Eten i etyn palą się jasnym, kopcącym płomieniem.</p>`,
    remember: 'Mało tlenu = CO (czad) albo C (sadza). Dlatego piecyki gazowe wymagają wentylacji.',
    check: { q: 'Który produkt powstaje przy niecałkowitym spalaniu i jest trujący?', options: ['CO₂', 'CO', 'H₂O'], answer: 1, explain: 'Tlenek węgla(II), czyli czad, powstaje przy zbyt małej ilości tlenu.' },
  },
  {
    title: 'Woda bromowa i polietylen',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Woda bromowa z etanem pozostaje barwna, z etenem się odbarwia. Wiele cząsteczek etenu łączy się w polietylen">
      <path d="M40,20 L40,110 A20,20 0 0 0 80,110 L80,20" class="ln"/><rect x="42" y="60" width="36" height="68" class="f2"/>
      <path d="M150,20 L150,110 A20,20 0 0 0 190,110 L190,20" class="ln"/><rect x="152" y="60" width="36" height="68" class="bg"/>
      <text x="60" y="152" class="tx" text-anchor="middle">etan</text><text x="170" y="152" class="tx" text-anchor="middle">eten</text>
      <text x="60" y="172" class="tx-s" text-anchor="middle">barwna</text><text x="170" y="172" class="tx-s" text-anchor="middle">odbarwiona</text>
      <text x="300" y="40" class="tx" text-anchor="middle">n CH₂=CH₂</text>
      <text x="300" y="72" class="tx-b" text-anchor="middle">↓</text>
      <text x="300" y="104" class="tx" text-anchor="middle">(–CH₂–CH₂–)ₙ</text>
      <text x="300" y="132" class="tx-s" text-anchor="middle">polietylen</text>
      <text x="300" y="160" class="tx-s" text-anchor="middle">folie, torebki</text>
    </svg>`,
    text: `<p>Węglowodory nienasycone <b>przyłączają brom</b> – wiązanie podwójne „otwiera się”: CH<sub>2</sub>=CH<sub>2</sub> + Br<sub>2</sub> → CH<sub>2</sub>Br–CH<sub>2</sub>Br. Woda bromowa się <b>odbarwia</b>. Alkany tego nie robią – tak odróżnisz węglowodór nasycony od nienasyconego.</p>
      <p>Cząsteczki etenu mogą też łączyć się ze sobą w długi łańcuch – to <b>polimeryzacja</b>, a produktem jest <b>polietylen</b>.</p>`,
    hook: 'Podwójne wiązanie to „wolne miejsce” – brom albo kolejny eten mogą się tam dosiąść.',
    check: { q: 'Który gaz odbarwi wodę bromową?', options: ['metan', 'propan', 'etyn'], answer: 2, explain: 'Etyn ma wiązanie potrójne – jest nienasycony i przyłącza brom. Metan i propan to alkany.' },
  },
];

window.LESSONS['chemia/alkohole'] = [
  {
    title: 'Grupa –OH zamienia węglowodór w alkohol',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Etan CH₃–CH₃: jeden atom wodoru zastąpiony grupą OH daje etanol CH₃–CH₂–OH">
      <defs><marker id="a-k8c-alk-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="15" y="40" width="130" height="46" rx="8" class="f1 s1"/>
      <text x="80" y="70" class="tx-b" text-anchor="middle">CH₃–CH₃</text>
      <text x="80" y="110" class="tx" text-anchor="middle">etan</text>
      <line x1="155" y1="63" x2="200" y2="63" class="ln" marker-end="url(#a-k8c-alk-1)"/>
      <rect x="210" y="40" width="110" height="46" rx="8" class="f1 s1"/>
      <rect x="318" y="40" width="62" height="46" rx="8" class="f2 s2 sw"/>
      <text x="265" y="70" class="tx-b" text-anchor="middle">CH₃–CH₂–</text>
      <text x="349" y="70" class="tx-b" text-anchor="middle">OH</text>
      <text x="295" y="110" class="tx" text-anchor="middle">etanol</text>
      <text x="349" y="140" class="tx-s" text-anchor="middle">grupa</text>
      <text x="349" y="158" class="tx-s" text-anchor="middle">hydroksylowa</text>
    </svg>`,
    text: `<p>Zastąp w węglowodorze jeden atom wodoru <b>grupą hydroksylową –OH</b>, a dostaniesz <b>alkohol</b>. Wzór ogólny: C<sub>n</sub>H<sub>2n+1</sub>OH.</p>
      <p>Metanol CH<sub>3</sub>OH, etanol C<sub>2</sub>H<sub>5</sub>OH, propan-1-ol C<sub>3</sub>H<sub>7</sub>OH, butan-1-ol C<sub>4</sub>H<sub>9</sub>OH.</p>`,
    remember: 'Alkohol = łańcuch węglowy + grupa –OH. Końcówka nazwy: <b>-ol</b>.',
    check: { q: 'Jaki wzór ma propan-1-ol?', options: ['C₃H₇OH', 'C₃H₈', 'C₂H₅OH', 'C₃H₇COOH'], answer: 0, explain: 'Trzy atomy węgla, grupa –OH: C₃H₇OH (CH₃–CH₂–CH₂–OH).' },
  },
  {
    title: 'Jak czytać nazwę alkoholu',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Nazwa propan-1-ol rozłożona na części: propan – 3 atomy węgla, 1 – grupa OH przy pierwszym atomie węgla, ol – alkohol">
      <rect x="40" y="30" width="130" height="50" rx="8" class="f1 s1 sw"/>
      <rect x="180" y="30" width="60" height="50" rx="8" class="f4 s4 sw"/>
      <rect x="250" y="30" width="90" height="50" rx="8" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="105" y="62">propan</text><text x="210" y="62">-1-</text><text x="295" y="62">ol</text></g>
      <g class="tx-s" text-anchor="middle"><text x="105" y="106">3 atomy C</text><text x="210" y="106">gdzie –OH</text><text x="295" y="106">alkohol</text></g>
      <text x="200" y="138" class="tx" text-anchor="middle">CH₃–CH₂–CH₂–OH</text>
    </svg>`,
    text: `<p>Nazwa alkoholu = nazwa alkanu + numer atomu węgla z grupą –OH + końcówka <b>-ol</b>. W metanolu i etanolu numeru nie trzeba – jest tylko jedna możliwość.</p>
      <p>Alkohole z jedną grupą –OH to <b>monohydroksylowe</b>, z kilkoma – <b>polihydroksylowe</b> (np. glicerol).</p>`,
    hook: 'Czytaj od lewej: ile węgli → gdzie OH → że to alkohol.',
  },
  {
    title: 'Grupa –OH, a odczyn obojętny',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Fenoloftaleina w roztworze NaOH jest malinowa, a w roztworze etanolu – bezbarwna. Alkohol ma odczyn obojętny">
      <path d="M50,30 L50,140 L150,140 L150,30" class="ln"/><rect x="52" y="70" width="96" height="68" class="f5"/>
      <path d="M250,30 L250,140 L350,140 L350,30" class="ln"/><rect x="252" y="70" width="96" height="68" class="bg"/>
      <text x="100" y="164" class="tx-b" text-anchor="middle">NaOH</text>
      <text x="300" y="164" class="tx-b" text-anchor="middle">etanol</text>
      <text x="100" y="184" class="tx-s" text-anchor="middle">malinowa – zasada</text>
      <text x="300" y="184" class="tx-s" text-anchor="middle">bezbarwna – obojętny</text>
      <text x="200" y="20" class="tx" text-anchor="middle">+ fenoloftaleina</text>
    </svg>`,
    text: `<p>Alkohol ma grupę –OH, ale <b>to nie jest wodorotlenek</b>. Grupa –OH jest połączona z atomem węgla i nie odłącza się w wodzie jako jon OH<sup>−</sup>. Dlatego roztwory alkoholi mają <b>odczyn obojętny</b>, a fenoloftaleina się nie barwi.</p>`,
    hook: 'To samo „OH”, inny charakter: w NaOH odpada jako jon, w alkoholu trzyma się węgla.',
    check: { q: 'Jaką barwę przyjmie fenoloftaleina w wodnym roztworze metanolu?', options: ['malinową', 'pozostanie bezbarwna', 'czerwoną'], answer: 1, explain: 'Roztwory alkoholi mają odczyn obojętny – fenoloftaleina pozostaje bezbarwna.' },
  },
  {
    title: 'Metanol, etanol, glicerol',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Metanol – silnie trujący. Etanol – rozpuszczalnik i środek dezynfekujący, szkodzi zdrowiu. Glicerol ma trzy grupy OH, jest słodki i nawilża skórę">
      <rect x="10" y="10" width="185" height="96" rx="10" class="f2 s2 sw"/>
      <rect x="205" y="10" width="185" height="96" rx="10" class="f1 s1"/>
      <rect x="10" y="114" width="380" height="98" rx="10" class="f3 s3"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">☠️ metanol</text>
      <text x="102" y="64" class="tx" text-anchor="middle">CH₃OH</text>
      <text x="102" y="90" class="tx-s" text-anchor="middle">silnie trujący, ślepota</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">etanol</text>
      <text x="297" y="64" class="tx" text-anchor="middle">C₂H₅OH</text>
      <text x="297" y="90" class="tx-s" text-anchor="middle">dezynfekcja; uzależnia</text>
      <text x="24" y="140" class="tx-b">glicerol – 3 × OH</text>
      <text x="24" y="168" class="tx">CH₂(OH)–CH(OH)–CH₂(OH)</text>
      <text x="24" y="196" class="tx-s">gęsty, słodki, nawilża – składnik kremów</text>
    </svg>`,
    text: `<p>Metanol i etanol to bezbarwne ciecze, mieszają się z wodą, palą się bladoniebieskim płomieniem: C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O.</p>
      <p><b>Metanol jest silnie trujący</b> – niewielka ilość może spowodować ślepotę, a nawet śmierć. <b>Etanol</b> uzależnia i powoduje ciężkie choroby wątroby, nerek, żołądka i serca, szkodzi układowi nerwowemu. <b>Glicerol</b> (propano-1,2,3-triol) to alkohol polihydroksylowy – zatrzymuje wilgoć, dlatego jest w kosmetykach.</p>`,
    remember: 'Glicerol: C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub> – trzy węgle, trzy grupy –OH.',
    hook: 'Gli-cerol – „gli” jak gładka, nawilżona skóra.',
    check: { q: 'Ile grup –OH ma cząsteczka glicerolu?', options: ['1', '2', '3'], answer: 2, explain: 'Propano-1,2,3-triol – grupy –OH przy atomach węgla 1, 2 i 3.' },
  },
];

window.LESSONS['chemia/kwasy-karboksylowe'] = [
  {
    title: 'Grupa karboksylowa –COOH',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Wzór strukturalny kwasu octowego: grupa CH₃ połączona z grupą karboksylową, w której atom węgla ma wiązanie podwójne z tlenem i pojedyncze z grupą OH">
      <rect x="150" y="30" width="200" height="140" rx="12" class="f2 s2 sw"/>
      <text x="250" y="160" class="tx-s" text-anchor="middle">grupa karboksylowa</text>
      <g class="ln-thin"><line x1="82" y1="100" x2="188" y2="100"/><line x1="70" y1="70" x2="70" y2="86"/><line x1="70" y1="114" x2="70" y2="130"/>
        <line x1="30" y1="100" x2="58" y2="100"/><line x1="210" y1="100" x2="270" y2="100"/>
        <line x1="196" y1="86" x2="196" y2="58"/><line x1="204" y1="86" x2="204" y2="58"/><line x1="292" y1="100" x2="312" y2="100"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="107">C</text><text x="200" y="107">C</text><text x="200" y="52">O</text><text x="280" y="107">O</text></g>
      <g class="tx t1" text-anchor="middle"><text x="70" y="64">H</text><text x="70" y="146">H</text><text x="22" y="106">H</text><text x="322" y="106">H</text></g>
      <text x="80" y="22" class="tx" text-anchor="middle">kwas octowy</text>
    </svg>`,
    text: `<p>Kwasy karboksylowe mają <b>grupę karboksylową –COOH</b>. Nazwy systematyczne tworzysz od alkanu z tą samą liczbą atomów węgla (licząc węgiel z –COOH) i końcówki <b>-owy</b>:</p>
      <ul><li>HCOOH – kwas <b>metanowy</b> (mrówkowy),</li><li>CH<sub>3</sub>COOH – kwas <b>etanowy</b> (octowy),</li><li>CH<sub>3</sub>–CH<sub>2</sub>–COOH – kwas propanowy (propionowy),</li><li>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH – kwas butanowy (masłowy).</li></ul>`,
    remember: 'Węgiel z grupy –COOH też liczysz: CH<sub>3</sub>COOH ma 2 atomy C → kwas <b>etanowy</b>.',
    check: { q: 'Jaka jest nazwa systematyczna kwasu mrówkowego HCOOH?', options: ['kwas metanowy', 'kwas etanowy', 'kwas mrówczanowy'], answer: 0, explain: 'Jeden atom węgla – metan, więc kwas metanowy.' },
  },
  {
    title: 'Kwasy z przyrody',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Kwas mrówkowy – mrówki i pokrzywy, kwas szczawiowy – szczaw i rabarbar, kwas cytrynowy – cytryny">
      <g class="f4 s4"><rect x="10" y="10" width="120" height="150" rx="10"/><rect x="140" y="10" width="120" height="150" rx="10"/><rect x="270" y="10" width="120" height="150" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="60">🐜</text><text x="200" y="60">🌿</text><text x="330" y="60">🍋</text>
        <text x="70" y="96">mrówkowy</text><text x="200" y="96">szczawiowy</text><text x="330" y="96">cytrynowy</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="122">mrówki,</text><text x="70" y="140">pokrzywy</text>
        <text x="200" y="122">szczaw,</text><text x="200" y="140">rabarbar</text><text x="330" y="122">cytryny</text></g>
    </svg>`,
    text: `<p>Kwasy organiczne często mają nazwy od miejsca, w którym je odkryto. <b>Kwas mrówkowy</b> jest w jadzie mrówek – a pokrzywa po dotknięciu „wstrzykuje” go pod skórę, stąd pieczenie. <b>Kwas szczawiowy</b> – w szczawiu i rabarbarze, <b>kwas cytrynowy</b> – w cytrynach.</p>`,
    hook: 'Pokrzywa parzy „po mrówczemu” – kwasem mrówkowym.',
  },
  {
    title: 'Kwas octowy zachowuje się jak kwas',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Kwas octowy dysocjuje na anion octanowy i kation wodoru, a z magnezem daje octan magnezu i wodór, z tlenkiem wapnia octan wapnia i wodę, z NaOH octan sodu i wodę">
      <rect x="130" y="8" width="140" height="40" rx="8" class="f2 s2 sw"/>
      <text x="200" y="34" class="tx-b" text-anchor="middle">CH₃COOH</text>
      <g class="f1 s1"><rect x="10" y="60" width="380" height="36" rx="6"/><rect x="10" y="102" width="380" height="36" rx="6"/>
        <rect x="10" y="144" width="380" height="36" rx="6"/><rect x="10" y="186" width="380" height="30" rx="6"/></g>
      <text x="20" y="84" class="tx">⇄ CH₃COO⁻ + H⁺</text><text x="250" y="84" class="tx-s">odczyn kwasowy</text>
      <text x="20" y="126" class="tx">+ Mg → (CH₃COO)₂Mg + H₂↑</text>
      <text x="20" y="168" class="tx">+ CaO → (CH₃COO)₂Ca + H₂O</text>
      <text x="20" y="207" class="tx">+ NaOH → CH₃COONa + H₂O</text>
    </svg>`,
    text: `<p>W wodzie kwas octowy dysocjuje: CH<sub>3</sub>COOH ⇄ CH<sub>3</sub>COO<sup>−</sup> + H<sup>+</sup> – roztwór ma <b>odczyn kwasowy</b> (oranż metylowy się czerwieni). Odłącza się tylko wodór z grupy –COOH.</p>
      <p>Reaguje jak kwasy nieorganiczne: z metalem (sól + wodór), z tlenkiem metalu i z wodorotlenkiem (sól + woda). Sole to <b>octany</b> (etaniany), np. octan sodu.</p>
      <p>Kwas octowy powstaje m.in. w fermentacji octowej etanolu – dlatego wino na powietrzu kwaśnieje.</p>`,
    remember: 'Z czterech atomów H w CH<sub>3</sub>COOH jako jon H<sup>+</sup> odłącza się tylko <b>jeden</b> – ten z –COOH.',
    check: { q: 'Jak nazywa się sól powstająca z kwasu octowego i wodorotlenku potasu?', options: ['octan potasu', 'potasan octu', 'octan etylu'], answer: 0, explain: 'CH₃COOH + KOH → CH₃COOK + H₂O – octan (etanian) potasu. Octan etylu to ester.' },
  },
  {
    title: 'Estry – kwas + alkohol',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kwas octowy i etanol: grupa OH z kwasu i atom wodoru z alkoholu tworzą wodę, a reszta łączy się w octan etylu">
      <rect x="10" y="20" width="120" height="44" rx="8" class="f2 s2"/>
      <rect x="160" y="20" width="120" height="44" rx="8" class="f1 s1"/>
      <text x="70" y="48" class="tx" text-anchor="middle">CH₃CO–OH</text>
      <text x="145" y="48" class="tx-b" text-anchor="middle">+</text>
      <text x="220" y="48" class="tx" text-anchor="middle">H–OC₂H₅</text>
      <text x="335" y="48" class="tx-s" text-anchor="middle">⇄ (H₂SO₄)</text>
      <path d="M108,68 C120,100 170,100 172,68" class="ln dash"/>
      <text x="140" y="112" class="tx-s" text-anchor="middle">H₂O</text>
      <rect x="40" y="130" width="200" height="44" rx="8" class="f3 s3 sw"/>
      <text x="140" y="158" class="tx-b" text-anchor="middle">CH₃COOC₂H₅</text>
      <text x="320" y="150" class="tx" text-anchor="middle">octan etylu</text>
      <text x="320" y="172" class="tx-s" text-anchor="middle">(etanian etylu)</text>
    </svg>`,
    text: `<p>Kwas karboksylowy reaguje z alkoholem (katalizator – stężony H<sub>2</sub>SO<sub>4</sub>): <b>kwas + alkohol ⇄ ester + woda</b>. Woda powstaje z grupy –OH kwasu i atomu H alkoholu.</p>
      <p>Nazwa estru: najpierw od kwasu (<b>etanian</b> = octan, <b>metanian</b> = mrówczan), potem od alkoholu (<b>etylu</b>, <b>metylu</b>). Estry pachną zwykle owocowo, słabo rozpuszczają się w wodzie – są w aromatach i perfumach.</p>`,
    hook: 'Ester to „ślub” kwasu z alkoholem – na weselu zawsze jest woda.',
    check: { q: 'Jak nazywa się ester z kwasu metanowego i etanolu?', options: ['metanian etylu', 'etanian metylu', 'etanian etylu'], answer: 0, explain: 'Najpierw część od kwasu (metanowy → metanian), potem od alkoholu (etanol → etylu).' },
  },
];

window.LESSONS['chemia/zwiazki-biologiczne'] = [
  {
    title: 'Kwasy tłuszczowe – długie łańcuchy',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Kwas palmitynowy – 16 atomów węgla, łańcuch prosty. Kwas stearynowy – 18 atomów, prosty. Kwas oleinowy – 18 atomów, z wiązaniem podwójnym, łańcuch zagięty">
      <g class="ln sw"><polyline points="20,40 280,40"/><polyline points="20,95 300,95"/><polyline points="20,155 160,155 190,130 300,130"/></g>
      <g class="f2 s2"><rect x="280" y="28" width="56" height="24" rx="5"/><rect x="300" y="83" width="56" height="24" rx="5"/><rect x="300" y="118" width="56" height="24" rx="5"/></g>
      <g class="tx-s" text-anchor="middle"><text x="308" y="45">COOH</text><text x="328" y="100">COOH</text><text x="328" y="135">COOH</text></g>
      <text x="20" y="28" class="tx">palmitynowy C₁₆ – nasycony</text>
      <text x="20" y="83" class="tx">stearynowy C₁₈ – nasycony</text>
      <text x="20" y="182" class="tx">oleinowy C₁₈ – nienasycony</text>
      <text x="200" y="160" class="tx-s">C=C</text>
    </svg>`,
    text: `<p>Kwasy tłuszczowe to <b>długołańcuchowe kwasy karboksylowe</b>:</p>
      <ul><li>palmitynowy CH<sub>3</sub>–(CH<sub>2</sub>)<sub>14</sub>–COOH i stearynowy CH<sub>3</sub>–(CH<sub>2</sub>)<sub>16</sub>–COOH – <b>nasycone</b>, stałe,</li>
      <li>oleinowy CH<sub>3</sub>–(CH<sub>2</sub>)<sub>7</sub>–CH=CH–(CH<sub>2</sub>)<sub>7</sub>–COOH – <b>nienasycony</b>, ciekły.</li></ul>
      <p>Nie rozpuszczają się w wodzie. Kwas oleinowy odbarwia wodę bromową, bo ma wiązanie podwójne.</p>`,
    remember: 'Olej-inowy – ciekły jak olej i nienasycony (C=C).',
    check: { q: 'Którym odczynnikiem odróżnisz kwas oleinowy od palmitynowego?', options: ['wodą bromową', 'fenoloftaleiną', 'jodem'], answer: 0, explain: 'Oleinowy (z C=C) odbarwia wodę bromową, palmitynowy nie.' },
  },
  {
    title: 'Tłuszcz = glicerol + 3 kwasy tłuszczowe',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cząsteczka tłuszczu: glicerol połączony wiązaniami estrowymi z trzema resztami kwasów tłuszczowych. Podział tłuszczów: roślinne lub zwierzęce, ciekłe lub stałe, nasycone lub nienasycone">
      <rect x="15" y="20" width="70" height="150" rx="10" class="f3 s3 sw"/>
      <text x="50" y="92" class="tx-s" text-anchor="middle">glicerol</text>
      <g class="ln sw"><line x1="85" y1="40" x2="230" y2="40"/><line x1="85" y1="95" x2="230" y2="95"/><line x1="85" y1="150" x2="230" y2="150"/></g>
      <g class="tx-s" text-anchor="middle"><text x="160" y="30">kwas tłuszczowy</text><text x="160" y="85">kwas tłuszczowy</text><text x="160" y="140">kwas tłuszczowy</text></g>
      <g class="tx-s"><text x="250" y="40">roślinne / zwierzęce</text><text x="250" y="95">ciekłe / stałe</text><text x="250" y="150">nasycone /</text><text x="250" y="168">nienasycone</text></g>
      <text x="200" y="194" class="tx" text-anchor="middle">tłuszcz = ester</text>
    </svg>`,
    text: `<p><b>Tłuszcze</b> to estry glicerolu i kwasów tłuszczowych. Dzielimy je według pochodzenia (roślinne, zwierzęce), stanu skupienia (ciekłe – głównie roślinne oleje; stałe – głównie zwierzęce, ale tran jest ciekły) i budowy (nasycone, nienasycone).</p>
      <p>Tłuszcze nie rozpuszczają się w wodzie, ale rozpuszczają się w benzynie. Tłuszcz nienasycony odbarwia wodę bromową.</p>`,
    hook: 'Glicerol ma trzy ręce (–OH) – w każdej trzyma jeden kwas tłuszczowy.',
  },
  {
    title: 'Aminokwasy i wiązanie peptydowe',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie cząsteczki glicyny H₂N–CH₂–COOH łączą się w dipeptyd z wiązaniem peptydowym CO–NH i wydziela się cząsteczka wody">
      <rect x="10" y="20" width="160" height="40" rx="8" class="f1 s1"/>
      <rect x="230" y="20" width="160" height="40" rx="8" class="f1 s1"/>
      <text x="90" y="46" class="tx" text-anchor="middle">H₂N–CH₂–COOH</text>
      <text x="200" y="46" class="tx-b" text-anchor="middle">+</text>
      <text x="310" y="46" class="tx" text-anchor="middle">H₂N–CH₂–COOH</text>
      <text x="200" y="88" class="tx-b" text-anchor="middle">↓</text>
      <text x="200" y="128" class="tx" text-anchor="middle">H₂N–CH₂–CO–NH–CH₂–COOH + H₂O</text>
      <rect x="180" y="138" width="60" height="28" rx="6" class="f2 s2 sw"/>
      <text x="210" y="157" class="tx-s" text-anchor="middle">CO–NH</text>
      <text x="210" y="188" class="tx-s" text-anchor="middle">wiązanie peptydowe</text>
    </svg>`,
    text: `<p><b>Glicyna</b> (kwas aminooctowy) H<sub>2</sub>N–CH<sub>2</sub>–COOH ma dwie grupy: <b>aminową –NH<sub>2</sub></b> i <b>karboksylową –COOH</b>. Grupa –COOH jednej cząsteczki łączy się z –NH<sub>2</sub> drugiej, odłącza się woda – to <b>kondensacja</b>. Powstaje <b>wiązanie peptydowe –CO–NH–</b>.</p>
      <p><b>Białka</b> to bardzo długie łańcuchy aminokwasów. Zawierają C, H, O i N (często też S).</p>`,
    remember: 'Aminokwas = –NH<sub>2</sub> + –COOH. Wiązanie peptydowe: –CO–NH–.',
    check: { q: 'Co wydziela się podczas łączenia dwóch cząsteczek glicyny?', options: ['woda', 'tlen', 'amoniak'], answer: 0, explain: 'Kondensacja: z –OH grupy karboksylowej i H grupy aminowej powstaje cząsteczka wody.' },
  },
  {
    title: 'Denaturacja czy koagulacja?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Denaturacja – nieodwracalna, powodują ją temperatura, etanol, kwasy, zasady i sole metali ciężkich. Koagulacja – odwracalna, np. pod wpływem chlorku sodu">
      <rect x="10" y="10" width="230" height="180" rx="12" class="f2 s2 sw"/>
      <rect x="250" y="10" width="140" height="180" rx="12" class="f3 s3 sw"/>
      <text x="125" y="36" class="tx-b" text-anchor="middle">denaturacja</text>
      <text x="125" y="58" class="tx-s" text-anchor="middle">nieodwracalna ✗</text>
      <g class="tx"><text x="24" y="86">🔥 temperatura</text><text x="24" y="110">etanol</text><text x="24" y="134">kwasy i zasady</text><text x="24" y="158">sole metali ciężkich</text><text x="24" y="180">(np. CuSO₄)</text></g>
      <text x="320" y="36" class="tx-b" text-anchor="middle">koagulacja</text>
      <text x="320" y="58" class="tx-s" text-anchor="middle">odwracalna ⇄</text>
      <text x="320" y="100" class="tx" text-anchor="middle">NaCl</text>
      <text x="320" y="130" class="tx-s" text-anchor="middle">dodasz wody –</text>
      <text x="320" y="148" class="tx-s" text-anchor="middle">białko znów</text>
      <text x="320" y="166" class="tx-s" text-anchor="middle">się rozpuści</text>
    </svg>`,
    text: `<p><b>Denaturacja</b> niszczy strukturę białka na zawsze – jak przy gotowaniu jajka. Powodują ją wysoka temperatura, etanol, kwasy, zasady i sole metali ciężkich.</p>
      <p><b>Koagulacja (wysalanie)</b>, np. chlorkiem sodu, tylko wytrąca białko – po dodaniu wody znów się rozpuszcza.</p>
      <p>Obecność białka wykryjesz stężonym kwasem azotowym(V) – białko barwi się na <b>żółto</b>.</p>`,
    hook: 'Ugotowanego jajka nie „odgotujesz” – to denaturacja.',
    check: { q: 'Która substancja powoduje koagulację (odwracalną), a nie denaturację białka?', options: ['chlorek sodu', 'etanol', 'siarczan(VI) miedzi(II)'], answer: 0, explain: 'NaCl wysala białko odwracalnie. Etanol i sole metali ciężkich denaturują je.' },
  },
  {
    title: 'Cukry i trzy testy',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Cukry proste: glukoza i fruktoza. Dwucukier: sacharoza. Wielocukry: skrobia i celuloza. Testy: białko z kwasem azotowym(V) – żółte, skrobia z jodem – granatowe, tłuszcz nienasycony z wodą bromową – odbarwienie">
      <rect x="10" y="10" width="380" height="80" rx="10" class="f4 s4"/>
      <text x="24" y="34" class="tx">proste: glukoza, fruktoza C₆H₁₂O₆</text>
      <text x="24" y="58" class="tx">dwucukier: sacharoza C₁₂H₂₂O₁₁</text>
      <text x="24" y="82" class="tx">wielocukry: skrobia, celuloza</text>
      <g class="f1 s1"><rect x="10" y="100" width="120" height="110" rx="10"/><rect x="140" y="100" width="120" height="110" rx="10"/><rect x="270" y="100" width="120" height="110" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="126">białko</text><text x="200" y="126">skrobia</text><text x="330" y="126">tłuszcz C=C</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="150">+ stęż. HNO₃</text><text x="200" y="150">+ jod</text><text x="330" y="150">+ woda bromowa</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="186">żółte</text><text x="200" y="186">granatowe</text><text x="330" y="186">odbarwia</text></g>
    </svg>`,
    text: `<p><b>Cukry</b> (węglowodany) zbudowane są z C, H i O. Glukoza i fruktoza to cukry proste (słodkie, rozpuszczalne), sacharoza (zwykły cukier) – dwucukier. Skrobia (ziemniaki, zboża) i celuloza (drewno, bawełna) to wielocukry – nie mają słodkiego smaku.</p>
      <p>Skrobię wykryjesz roztworem jodu – zabarwienie <b>ciemnogranatowe</b>.</p>`,
    remember: 'HNO<sub>3</sub> + białko → żółte; jod + skrobia → granatowe; woda bromowa + C=C → odbarwienie.',
    hook: 'Żółty – białko, granat – skrobia, bez koloru – podwójne wiązanie.',
    check: { q: 'Który cukier ma wzór C₁₂H₂₂O₁₁?', options: ['glukoza', 'sacharoza', 'celuloza'], answer: 1, explain: 'Sacharoza to dwucukier: C₁₂H₂₂O₁₁. Glukoza – C₆H₁₂O₆, celuloza – (C₆H₁₀O₅)ₙ.' },
  },
];
