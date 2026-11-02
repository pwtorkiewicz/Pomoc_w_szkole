/* Lekcje – biologia, klasa 8 (Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. V–VIII).
 * Klucz: 'biologia/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['biologia/dna'] = [
  {
    title: 'DNA – instrukcja obsługi organizmu',
    svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Od ogółu do szczegółu: komórka, w niej jądro, w jądrze DNA, a odcinek DNA to gen">
      <defs><marker id="a-k8b-dna-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="8" y="30" width="82" height="80" rx="10" class="f3 s3"/><rect x="108" y="30" width="82" height="80" rx="10" class="f1 s1"/>
        <rect x="208" y="30" width="82" height="80" rx="10" class="f5 s5"/><rect x="308" y="30" width="84" height="80" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="49" y="62">🧫</text><text x="149" y="62">⚪</text><text x="249" y="62">🧬</text><text x="350" y="62">📄</text></g>
      <g class="tx-b" text-anchor="middle"><text x="49" y="94">komórka</text><text x="149" y="94">jądro</text><text x="249" y="94">DNA</text><text x="350" y="94">gen</text></g>
      <g class="ln"><line x1="90" y1="70" x2="106" y2="70" marker-end="url(#a-k8b-dna-1)"/><line x1="190" y1="70" x2="206" y2="70" marker-end="url(#a-k8b-dna-1)"/><line x1="290" y1="70" x2="306" y2="70" marker-end="url(#a-k8b-dna-1)"/></g>
      <text x="200" y="138" class="tx-s" text-anchor="middle">gen = odcinek DNA z przepisem na jedno białko</text>
    </svg>`,
    text: `<p>W prawie każdej twojej komórce jest <b>DNA</b> – zapis informacji o tym, jak organizm ma być zbudowany i jak działać. U organizmów jądrowych DNA leży głównie w <b>jądrze komórkowym</b>.</p>
      <p>DNA dzieli się na odcinki – <b>geny</b>. Gen to przepis na jedno <b>białko</b>, a od białek zależą cechy, np. grupa krwi.</p>`,
    remember: 'DNA – nośnik informacji genetycznej. <b>Gen</b> – odcinek DNA z informacją o budowie białka.',
    hook: 'DNA to książka kucharska organizmu, a gen – jeden przepis.',
    check: { q: 'Czym jest gen?', options: ['odcinkiem DNA z informacją o budowie białka', 'całym jądrem komórkowym', 'jednym nukleotydem'], answer: 0, explain: 'Gen to fragment DNA – „przepis” na konkretne białko.' },
  },
  {
    title: 'Cztery litery, dwie pary',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Drabinka DNA: dwie nici po bokach, szczeble to pary zasad A–T, G–C, T–A, C–G. Adenina łączy się z tyminą, guanina z cytozyną">
      <g class="sw"><line x1="70" y1="20" x2="70" y2="200" class="ln"/><line x1="250" y1="20" x2="250" y2="200" class="ln"/></g>
      <g class="f1 s1"><rect x="80" y="30" width="70" height="30" rx="5"/><rect x="170" y="150" width="70" height="30" rx="5"/></g>
      <g class="f4 s4"><rect x="170" y="30" width="70" height="30" rx="5"/><rect x="80" y="150" width="70" height="30" rx="5"/></g>
      <g class="f3 s3"><rect x="80" y="70" width="70" height="30" rx="5"/><rect x="170" y="110" width="70" height="30" rx="5"/></g>
      <g class="f2 s2"><rect x="170" y="70" width="70" height="30" rx="5"/><rect x="80" y="110" width="70" height="30" rx="5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="115" y="51">A</text><text x="205" y="51">T</text><text x="115" y="91">G</text><text x="205" y="91">C</text>
        <text x="115" y="131">C</text><text x="205" y="131">G</text><text x="115" y="171">T</text><text x="205" y="171">A</text></g>
      <g class="ln-thin"><line x1="150" y1="45" x2="170" y2="45"/><line x1="150" y1="85" x2="170" y2="85"/><line x1="150" y1="125" x2="170" y2="125"/><line x1="150" y1="165" x2="170" y2="165"/></g>
      <text x="270" y="60" class="tx">A – T</text><text x="270" y="90" class="tx">G – C</text>
      <text x="270" y="130" class="tx-s">nić = cukier</text><text x="270" y="148" class="tx-s">+ fosforan</text>
    </svg>`,
    text: `<p>DNA zbudowane jest z <b>nukleotydów</b>: cukier deoksyryboza + reszta kwasu fosforowego + jedna z czterech <b>zasad azotowych</b>: A, T, G, C.</p>
      <p>Dwie nici łączą się zasadami jak szczeble drabiny – zawsze <b>A z T</b> i <b>G z C</b>. To <b>komplementarność</b>. Drabina jest skręcona – to <b>podwójna helisa</b>.</p>`,
    remember: '<b>A–T, G–C</b>. Kolejność zasad w jednej nici wyznacza kolejność w drugiej.',
    hook: 'Litery z prostymi kreskami (A, T) łączą się ze sobą, a te z łukami (G, C) – ze sobą.',
    check: { q: 'Jedna nić ma odcinek TAGC. Co jest naprzeciwko?', options: ['TAGC', 'ATCG', 'GCTA'], answer: 1, explain: 'T→A, A→T, G→C, C→G: ATCG.' },
  },
  {
    title: 'Replikacja – rozpinamy zamek',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Cząsteczka DNA rozplata się na dwie nici. Do każdej starej nici dobudowuje się nowa. Powstają dwie identyczne cząsteczki, każda z jedną nicią starą i jedną nową">
      <defs><marker id="a-k8b-dna-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><line x1="30" y1="40" x2="30" y2="180" class="s1"/><line x1="70" y1="40" x2="70" y2="180" class="s1"/></g>
      <g class="ln-thin"><line x1="30" y1="60" x2="70" y2="60"/><line x1="30" y1="90" x2="70" y2="90"/><line x1="30" y1="120" x2="70" y2="120"/><line x1="30" y1="150" x2="70" y2="150"/></g>
      <line x1="85" y1="110" x2="125" y2="110" class="ln" marker-end="url(#a-k8b-dna-3)"/>
      <g class="sw"><line x1="150" y1="40" x2="150" y2="180" class="s1"/><line x1="240" y1="40" x2="240" y2="180" class="s1"/></g>
      <g class="sw dash"><line x1="185" y1="40" x2="185" y2="180" class="s3"/><line x1="275" y1="40" x2="275" y2="180" class="s3"/></g>
      <g class="ln-thin"><line x1="150" y1="75" x2="185" y2="75"/><line x1="150" y1="135" x2="185" y2="135"/><line x1="240" y1="75" x2="275" y2="75"/><line x1="240" y1="135" x2="275" y2="135"/></g>
      <text x="200" y="26" class="tx-b" text-anchor="middle">2 cząsteczki</text>
      <text x="50" y="26" class="tx-b" text-anchor="middle">1</text>
      <line x1="300" y1="70" x2="330" y2="70" class="s1 sw"/><text x="338" y="76" class="tx">stara</text>
      <line x1="300" y1="110" x2="330" y2="110" class="s3 sw dash"/><text x="338" y="116" class="tx">nowa</text>
      <text x="200" y="205" class="tx-s" text-anchor="middle">każda: 1 nić stara + 1 nić nowa</text>
    </svg>`,
    text: `<p>Przed podziałem komórki DNA musi się skopiować – to <b>replikacja</b>. Enzymy rozrywają wiązania między zasadami i nici się rozplatają.</p>
      <p>Każda stara nić jest <b>wzorem</b>: dobudowuje się do niej nowa, zgodnie z regułą A–T, G–C. Wychodzą <b>dwie identyczne cząsteczki</b>.</p>`,
    remember: 'Po replikacji każda cząsteczka DNA ma <b>jedną nić starą i jedną nową</b>.',
    hook: 'Rozpinasz zamek błyskawiczny i do każdej połówki doszywasz nową – masz dwa całe zamki.',
    check: { q: 'Dlaczego obie cząsteczki po replikacji są identyczne?', options: ['bo komórka losuje zasady', 'bo jedna cząsteczka jest pusta', 'bo nowe nici dobudowują się według reguły A–T, G–C'], answer: 2, explain: 'Komplementarność sprawia, że stara nić jednoznacznie wyznacza nową.' },
  },
  {
    title: 'Po co to wszystko?',
    svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Komórka z DNA o zapisie ATGC dzieli się na dwie komórki, z których każda ma ten sam zapis ATGC">
      <defs><marker id="a-k8b-dna-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="70" cy="85" r="55" class="f3 s3 sw"/><text x="70" y="91" class="tx-b" text-anchor="middle">ATGC</text>
      <g class="ln"><line x1="135" y1="70" x2="215" y2="45" marker-end="url(#a-k8b-dna-4)"/><line x1="135" y1="100" x2="215" y2="125" marker-end="url(#a-k8b-dna-4)"/></g>
      <circle cx="275" cy="45" r="38" class="f3 s3 sw"/><circle cx="275" cy="128" r="38" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="275" y="51">ATGC</text><text x="275" y="134">ATGC</text></g>
      <text x="322" y="91" class="tx">✅ to samo</text>
    </svg>`,
    text: `<p>Dzięki replikacji każda nowa komórka dostaje <b>komplet tej samej informacji</b> co komórka macierzysta. Tak DNA przechodzi do nowych komórek i do kolejnych pokoleń.</p>
      <p>Uważaj na pułapki: w DNA nie ma pary A–G ani T–C. A w nowej cząsteczce nie są „dwie nowe nici” – jedna jest zawsze stara.</p>`,
    remember: 'Replikacja = podstawa przekazywania informacji genetycznej nowym komórkom.',
    check: { q: 'Kiedy zachodzi replikacja DNA?', options: ['przed podziałem komórki', 'po śmierci komórki', 'tylko w czasie trawienia'], answer: 0, explain: 'DNA kopiuje się przed podziałem, żeby obie komórki potomne miały komplet.' },
  },
];

window.LESSONS['biologia/chromosomy'] = [
  {
    title: 'Chromosom – zwinięte DNA',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Chromosom w kształcie litery X: dwie chromatydy połączone w środku centromerem; każda chromatyda to jedna cząsteczka DNA">
      <g class="f5 s5 sw"><path d="M60,30 Q90,100 60,170 L80,170 Q110,100 80,30 Z"/><path d="M140,30 Q110,100 140,170 L120,170 Q90,100 120,30 Z"/></g>
      <circle cx="100" cy="100" r="9" class="f2 s2 sw"/>
      <g class="ln-thin"><line x1="70" y1="45" x2="190" y2="45"/><line x1="110" y1="100" x2="190" y2="100"/><line x1="130" y1="155" x2="190" y2="155"/></g>
      <text x="196" y="50" class="tx">chromatyda (DNA)</text>
      <text x="196" y="105" class="tx">centromer</text>
      <text x="196" y="160" class="tx">chromatyda (DNA)</text>
    </svg>`,
    text: `<p>Gdy komórka się dzieli, długie nici DNA ciasno się zwijają i tworzą widoczne pod mikroskopem <b>chromosomy</b>.</p>
      <p>Chromosom przed podziałem ma <b>dwie chromatydy</b> (każda to jedna cząsteczka DNA) złączone w <b>centromerze</b>.</p>`,
    remember: 'Chromosom = 2 chromatydy + centromer.',
    hook: 'Chromosom wygląda jak litera X, a centromer to guzik, który spina dwie nogawki.',
  },
  {
    title: '46 = 44 + 2',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Komórka ciała człowieka: 46 chromosomów, czyli 22 pary autosomów i para chromosomów płci – XX u kobiety, XY u mężczyzny. Gameta ma 23 chromosomy">
      <rect x="10" y="10" width="250" height="170" rx="12" class="f1 s1 sw"/>
      <text x="135" y="38" class="tx-b" text-anchor="middle">komórka ciała – 2n</text>
      <text x="135" y="72" class="tx" text-anchor="middle">46 chromosomów</text>
      <text x="135" y="104" class="tx" text-anchor="middle">44 autosomy (22 pary)</text>
      <text x="135" y="136" class="tx" text-anchor="middle">+ 2 chromosomy płci</text>
      <text x="135" y="164" class="tx-b" text-anchor="middle">♀ XX   ♂ XY</text>
      <rect x="280" y="40" width="110" height="110" rx="12" class="f2 s2 sw"/>
      <text x="335" y="70" class="tx-b" text-anchor="middle">gameta</text>
      <text x="335" y="100" class="tx-b" text-anchor="middle">1n</text>
      <text x="335" y="130" class="tx" text-anchor="middle">23</text>
    </svg>`,
    text: `<p>Komórki ciała człowieka są <b>diploidalne (2n)</b> – mają chromosomy w parach: 23 pary, czyli <b>46</b>. Z każdej pary jeden chromosom jest od mamy, drugi od taty.</p>
      <p>22 pary to <b>autosomy</b>, a jedna para to <b>chromosomy płci</b>: XX u kobiety, XY u mężczyzny. <b>Gamety</b> (plemnik, komórka jajowa) są <b>haploidalne (1n)</b> – mają 23 chromosomy.</p>`,
    remember: 'Komórka ciała: 46 (2n). Gameta: 23 (1n). 23 + 23 = 46 przy zapłodnieniu.',
    check: { q: 'Ile chromosomów ma komórka jajowa człowieka?', options: ['46', '23', '44'], answer: 1, explain: 'Gamety są haploidalne – 23 chromosomy.' },
  },
  {
    title: 'Mitoza i mejoza',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Mitoza: komórka 2n daje dwie komórki 2n. Mejoza: komórka 2n daje cztery komórki 1n – gamety">
      <defs><marker id="a-k8b-chr-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="100" y="22" class="tx-b" text-anchor="middle">mitoza</text><text x="300" y="22" class="tx-b" text-anchor="middle">mejoza</text>
      <line x1="200" y1="10" x2="200" y2="220" class="ln-thin"/>
      <circle cx="100" cy="65" r="28" class="f1 s1 sw"/><text x="100" y="71" class="tx-b" text-anchor="middle">2n</text>
      <g class="ln"><line x1="88" y1="95" x2="62" y2="135" marker-end="url(#a-k8b-chr-3)"/><line x1="112" y1="95" x2="138" y2="135" marker-end="url(#a-k8b-chr-3)"/></g>
      <circle cx="55" cy="165" r="28" class="f1 s1 sw"/><circle cx="145" cy="165" r="28" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="55" y="171">2n</text><text x="145" y="171">2n</text></g>
      <text x="100" y="215" class="tx-s" text-anchor="middle">wzrost, gojenie ran</text>
      <circle cx="300" cy="65" r="28" class="f2 s2 sw"/><text x="300" y="71" class="tx-b" text-anchor="middle">2n</text>
      <g class="ln"><line x1="285" y1="95" x2="236" y2="138" marker-end="url(#a-k8b-chr-3)"/><line x1="295" y1="95" x2="282" y2="138" marker-end="url(#a-k8b-chr-3)"/>
        <line x1="305" y1="95" x2="318" y2="138" marker-end="url(#a-k8b-chr-3)"/><line x1="315" y1="95" x2="364" y2="138" marker-end="url(#a-k8b-chr-3)"/></g>
      <g class="f4 s4 sw"><circle cx="228" cy="165" r="20"/><circle cx="276" cy="165" r="20"/><circle cx="324" cy="165" r="20"/><circle cx="372" cy="165" r="20"/></g>
      <g class="tx" text-anchor="middle"><text x="228" y="171">1n</text><text x="276" y="171">1n</text><text x="324" y="171">1n</text><text x="372" y="171">1n</text></g>
      <text x="300" y="215" class="tx-s" text-anchor="middle">gamety</text>
    </svg>`,
    text: `<p><b>Mitoza</b>: z jednej komórki powstają <b>dwie</b>, z taką samą liczbą chromosomów i identyczne genetycznie. Dzięki niej rośniesz i goją ci się rany.</p>
      <p><b>Mejoza</b>: z jednej komórki 2n powstają <b>cztery</b> komórki 1n – gamety. Liczba chromosomów spada o połowę, a gamety różnią się genetycznie – stąd różnorodność rodzeństwa.</p>`,
    remember: 'Mitoza: 2 komórki, ta sama liczba chromosomów. Mejoza: 4 komórki, połowa chromosomów.',
    hook: '<b>Mi</b>toza – <b>mi</b>nimum zmian. <b>Mej</b>oza – <b>mniej</b> chromosomów.',
    check: { q: 'Komórka ma 2n = 20. Ile chromosomów mają jej gamety?', options: ['20', '40', '10'], answer: 2, explain: 'Mejoza zmniejsza liczbę chromosomów o połowę: 20 : 2 = 10.' },
  },
  {
    title: 'Gdy podziały wymykają się spod kontroli',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej zdrowa tkanka: równy rząd komórek. Po prawej guz: komórki dzielą się bez kontroli. Na dole czynniki ryzyka: dym tytoniowy, promieniowanie UV, zła dieta, wirus HPV">
      <g class="f3 s3"><rect x="20" y="40" width="30" height="30"/><rect x="50" y="40" width="30" height="30"/><rect x="80" y="40" width="30" height="30"/><rect x="110" y="40" width="30" height="30"/><rect x="140" y="40" width="30" height="30"/></g>
      <g class="f2 s2"><circle cx="270" cy="55" r="14"/><circle cx="295" cy="45" r="14"/><circle cx="320" cy="60" r="14"/><circle cx="285" cy="75" r="14"/><circle cx="310" cy="85" r="14"/><circle cx="260" cy="85" r="14"/><circle cx="340" cy="40" r="14"/><circle cx="345" cy="78" r="14"/><circle cx="300" cy="105" r="14"/></g>
      <text x="95" y="100" class="tx" text-anchor="middle">zdrowa tkanka</text>
      <text x="300" y="138" class="tx" text-anchor="middle">nowotwór</text>
      <g class="tx" text-anchor="middle"><text x="50" y="180">🚬</text><text x="150" y="180">☀️ UV</text><text x="250" y="180">🍟</text><text x="350" y="180">🦠 HPV</text></g>
    </svg>`,
    text: `<p>Zdrowe komórki dzielą się tylko wtedy, gdy trzeba. Komórki <b>nowotworowe</b> nie słuchają sygnałów „stop” i dzielą się bez końca – mogą tworzyć guzy w każdym narządzie.</p>
      <p>Ryzyko zwiększają m.in.: <b>dym tytoniowy</b>, <b>promieniowanie UV</b> i rentgenowskie, <b>niewłaściwa dieta</b> i tryb życia, <b>zanieczyszczenia</b>, wirus <b>HPV</b> (chroni przed nim szczepienie).</p>`,
    remember: 'Nowotwór = skutek <b>niekontrolowanych podziałów</b> komórek.',
    hook: 'Nowotwór to kserokopiarka, w której zaciął się przycisk „kopiuj”.',
    check: { q: 'Który czynnik sprzyja nowotworom?', options: ['palenie papierosów', 'picie wody', 'spacer w cieniu'], answer: 0, explain: 'Składniki dymu tytoniowego uszkadzają DNA i sprzyjają nowotworom.' },
  },
];

window.LESSONS['biologia/dziedziczenie'] = [
  {
    title: 'Dwa allele – od mamy i od taty',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Para chromosomów homologicznych: na chromosomie od mamy allel A, na chromosomie od taty allel a. Razem genotyp Aa">
      <g class="sw"><rect x="60" y="20" width="36" height="140" rx="16" class="f2 s2"/><rect x="140" y="20" width="36" height="140" rx="16" class="f1 s1"/></g>
      <g class="f4 s4 sw"><rect x="56" y="75" width="44" height="26"/><rect x="136" y="75" width="44" height="26"/></g>
      <g class="tx-b" text-anchor="middle"><text x="78" y="94">A</text><text x="158" y="94">a</text></g>
      <g class="tx-s" text-anchor="middle"><text x="78" y="176">od mamy</text><text x="158" y="176">od taty</text></g>
      <text x="215" y="70" class="tx">genotyp:</text><text x="300" y="70" class="tx-b">Aa</text>
      <text x="215" y="105" class="tx">A – dominujący</text>
      <text x="215" y="135" class="tx">a – recesywny</text>
    </svg>`,
    text: `<p>Gen może mieć różne wersje – <b>allele</b>. W każdej komórce ciała masz <b>dwa allele</b> danego genu: jeden od mamy, drugi od taty.</p>
      <p>Allel <b>dominujący</b> (wielka litera, A) ujawnia się zawsze, gdy jest. Allel <b>recesywny</b> (mała litera, a) – tylko, gdy są dwa takie (aa).</p>`,
    remember: 'AA i Aa → cecha dominująca. aa → cecha recesywna.',
    hook: 'Allel dominujący to głośny kolega – wystarczy jeden, żeby go było słychać.',
    check: { q: 'Który genotyp daje cechę recesywną?', options: ['Aa', 'aa', 'AA'], answer: 1, explain: 'Cecha recesywna ujawnia się tylko u homozygoty recesywnej aa.' },
  },
  {
    title: 'Słowniczek genetyka',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="AA – homozygota dominująca, Aa – heterozygota, aa – homozygota recesywna. Genotyp to zapis liter, fenotyp to widoczna cecha">
      <g class="sw"><rect x="10" y="10" width="120" height="110" rx="10" class="f1 s1"/><rect x="140" y="10" width="120" height="110" rx="10" class="f3 s3"/><rect x="270" y="10" width="120" height="110" rx="10" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="45">AA</text><text x="200" y="45">Aa</text><text x="330" y="45">aa</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="75">homozygota</text><text x="70" y="95">dominująca</text>
        <text x="200" y="75">heterozygota</text>
        <text x="330" y="75">homozygota</text><text x="330" y="95">recesywna</text></g>
      <text x="20" y="155" class="tx"><tspan class="tx-b">genotyp</tspan> – zapis alleli (Aa)</text>
      <text x="20" y="185" class="tx"><tspan class="tx-b">fenotyp</tspan> – to, co widać</text>
    </svg>`,
    text: `<p><b>Homozygota</b> ma dwa takie same allele (AA lub aa), <b>heterozygota</b> – dwa różne (Aa).</p>
      <p><b>Genotyp</b> to zestaw alleli, a <b>fenotyp</b> – cechy, które widać, np. kolor kwiatów. Fenotyp zależy od genotypu, ale też od środowiska.</p>`,
    remember: '„Homo” = takie same, „hetero” = różne.',
    hook: 'Genotyp – co jest zapisane w genach. Fenotyp – co pokazujesz światu.',
  },
  {
    title: 'Szachownica krok po kroku',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Krzyżówka Aa razy Aa: gamety A i a od każdego rodzica. Wynik: AA, Aa, Aa, aa – trzy czwarte z cechą dominującą, jedna czwarta z recesywną">
      <g class="tx-b" text-anchor="middle"><text x="125" y="30">A</text><text x="205" y="30">a</text><text x="60" y="88">A</text><text x="60" y="168">a</text></g>
      <text x="165" y="12" class="tx-s" text-anchor="middle">gamety taty</text>
      <text x="50" y="225" class="tx-s">↑ gamety mamy</text>
      <g class="sw"><rect x="85" y="45" width="80" height="80" class="f1 s1"/><rect x="165" y="45" width="80" height="80" class="f1 s1"/>
        <rect x="85" y="125" width="80" height="80" class="f1 s1"/><rect x="165" y="125" width="80" height="80" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="125" y="91">AA</text><text x="205" y="91">Aa</text><text x="125" y="171">Aa</text><text x="205" y="171">aa</text></g>
      <rect x="270" y="70" width="20" height="20" class="f1 s1"/><text x="298" y="86" class="tx">3/4 = 75%</text>
      <rect x="270" y="140" width="20" height="20" class="f2 s2"/><text x="298" y="156" class="tx">1/4 = 25%</text>
    </svg>`,
    text: `<p>Każdy rodzic przekazuje dziecku <b>jeden</b> z dwóch alleli. Gamety rodzica Aa to A albo a.</p>
      <p>Wpisz gamety na brzegach szachownicy i połącz je w kratkach. Przy Aa × Aa: <b>AA, Aa, Aa, aa</b> – 3/4 dzieci z cechą dominującą, 1/4 z recesywną.</p>`,
    remember: 'Aa × Aa → 75% dominująca, 25% recesywna. Aa × aa → 50% / 50%. AA × aa → 100% Aa.',
    check: { q: 'Rodzice Aa × aa. Jakie jest prawdopodobieństwo dziecka aa?', options: ['25%', '0%', '50%'], answer: 2, explain: 'Gamety: A lub a oraz tylko a. Kratki: Aa, Aa, aa, aa – połowa to aa.' },
  },
  {
    title: 'Pułapki krzyżówek',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Dwoje rodziców z cechą dominującą ma dziecko z cechą recesywną aa. Wniosek: oboje rodzice są heterozygotami Aa">
      <circle cx="80" cy="50" r="30" class="f1 s1 sw"/><circle cx="200" cy="50" r="30" class="f1 s1 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="80" y="56">A?</text><text x="200" y="56">A?</text></g>
      <line x1="80" y1="80" x2="140" y2="120" class="ln"/><line x1="200" y1="80" x2="140" y2="120" class="ln"/>
      <circle cx="140" cy="145" r="26" class="f2 s2 sw"/><text x="140" y="151" class="tx-b" text-anchor="middle">aa</text>
      <text x="250" y="110" class="tx">rodzice: Aa</text>
      <text x="250" y="140" class="tx">i Aa ✅</text>
    </svg>`,
    text: `<p>Dziecko <b>aa</b> dostało allel a od <b>obojga</b> rodziców. Jeśli rodzice mają cechę dominującą, to oboje muszą być <b>Aa</b>.</p>
      <p>I druga pułapka: 25% to prawdopodobieństwo <b>dla każdego dziecka</b>, a nie dokładny podział. Rodzina z czworgiem dzieci może nie mieć żadnego aa – albo mieć dwoje.</p>`,
    remember: 'Dziecko z cechą recesywną = każdy rodzic przekazał allel recesywny.',
    hook: 'Krzyżówka to rzut monetą, a nie rozkład jazdy.',
    check: { q: 'Rodzice mają cechę dominującą, a dziecko aa. Jaki genotyp mają rodzice?', options: ['oboje Aa', 'oboje AA', 'AA i aa'], answer: 0, explain: 'Każdy przekazał allel a, a mają cechę dominującą – więc Aa i Aa.' },
  },
];

window.LESSONS['biologia/plec-krew'] = [
  {
    title: 'Chłopiec czy dziewczynka? Decyduje plemnik',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Komórka jajowa zawsze ma chromosom X. Plemnik z X daje dziewczynkę XX, plemnik z Y daje chłopca XY. Szansa po 50 procent">
      <g class="sw"><rect x="120" y="10" width="130" height="50" class="f5 s5"/><rect x="250" y="10" width="130" height="50" class="f1 s1"/>
        <rect x="20" y="60" width="100" height="70" class="f2 s2"/><rect x="120" y="60" width="130" height="70" class="f3 s3"/><rect x="250" y="60" width="130" height="70" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="185" y="42">plemnik X</text><text x="315" y="42">plemnik Y</text>
        <text x="70" y="91">jajo</text><text x="70" y="115">X</text><text x="185" y="91">XX</text><text x="315" y="91">XY</text></g>
      <g class="tx" text-anchor="middle"><text x="185" y="117">dziewczynka</text><text x="315" y="117">chłopiec</text></g>
      <text x="250" y="170" class="tx-b" text-anchor="middle">50% : 50%</text>
    </svg>`,
    text: `<p>Kobieta ma chromosomy płci <b>XX</b>, więc każda komórka jajowa ma <b>X</b>. Mężczyzna ma <b>XY</b> – połowa plemników niesie X, połowa Y.</p>
      <p>Plemnik z X → dziewczynka (XX). Plemnik z Y → chłopiec (XY). Przy <b>każdym</b> dziecku szanse są po <b>50%</b>, niezależnie od tego, ile dzieci już jest.</p>`,
    remember: 'Płeć dziecka zależy od chromosomu płci w <b>plemniku</b>.',
    hook: 'Y robi chłopaka – tylko tata może go dać.',
    check: { q: 'Para ma dwóch synów. Jaka jest szansa, że trzecie dziecko będzie córką?', options: ['100%', '50%', '25%'], answer: 1, explain: 'Każde dziecko to osobne losowanie – zawsze 50%.' },
  },
  {
    title: 'Trzy allele grup krwi',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Tabela: grupa A – genotypy IAIA albo IAi; grupa B – IBIB albo IBi; grupa AB – IAIB; grupa 0 – ii">
      <g class="sw"><rect x="10" y="10" width="90" height="45" class="f1 s1"/><rect x="10" y="60" width="90" height="45" class="f2 s2"/>
        <rect x="10" y="110" width="90" height="45" class="f5 s5"/><rect x="10" y="160" width="90" height="45" class="f3 s3"/></g>
      <g class="tx-b" text-anchor="middle"><text x="55" y="39">A</text><text x="55" y="89">B</text><text x="55" y="139">AB</text><text x="55" y="189">0</text></g>
      <g class="tx"><text x="120" y="39">IᴬIᴬ albo Iᴬi</text><text x="120" y="89">IᴮIᴮ albo Iᴮi</text><text x="120" y="139">IᴬIᴮ (kodominacja)</text><text x="120" y="189">ii</text></g>
    </svg>`,
    text: `<p>Gen grupy krwi ma <b>trzy allele</b>: I<sup>A</sup>, I<sup>B</sup> i i. Każdy człowiek ma dwa z nich.</p>
      <p>I<sup>A</sup> i I<sup>B</sup> dominują nad i. Między sobą są <b>równorzędne</b> – osoba I<sup>A</sup>I<sup>B</sup> ma grupę AB. To <b>kodominacja</b>. Grupa 0 to ii.</p>`,
    remember: 'Grupa 0 – zawsze ii. Grupa AB – zawsze I<sup>A</sup>I<sup>B</sup>. Grupy A i B mają po dwa możliwe genotypy.',
    hook: 'Zero to „nic” – brak alleli A i B, same małe i.',
    check: { q: 'Jaką grupę ma osoba Iᴬi?', options: ['0', 'AB', 'A'], answer: 2, explain: 'Iᴬ dominuje nad i – grupa A.' },
  },
  {
    title: 'Krzyżówka grup krwi',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Matka Iᴬi i ojciec Iᴮi. Dzieci: IᴬIᴮ – grupa AB, Iᴬi – A, Iᴮi – B, ii – 0, każda po 25 procent">
      <g class="tx-b" text-anchor="middle"><text x="140" y="28">Iᴮ</text><text x="230" y="28">i</text><text x="70" y="85">Iᴬ</text><text x="70" y="170">i</text></g>
      <g class="sw"><rect x="95" y="40" width="90" height="85" class="f5 s5"/><rect x="185" y="40" width="90" height="85" class="f1 s1"/>
        <rect x="95" y="125" width="90" height="85" class="f2 s2"/><rect x="185" y="125" width="90" height="85" class="f3 s3"/></g>
      <g class="tx" text-anchor="middle"><text x="140" y="77">IᴬIᴮ</text><text x="230" y="77">Iᴬi</text><text x="140" y="162">Iᴮi</text><text x="230" y="162">ii</text></g>
      <g class="tx-b" text-anchor="middle"><text x="140" y="104">AB</text><text x="230" y="104">A</text><text x="140" y="189">B</text><text x="230" y="189">0</text></g>
      <text x="290" y="110" class="tx">po 25%</text>
    </svg>`,
    text: `<p>Matka z grupą A (I<sup>A</sup>i) i ojciec z grupą B (I<sup>B</sup>i) mogą mieć dzieci z <b>każdą</b> grupą krwi – po 25%.</p>
      <p>A gdy jeden rodzic ma 0 (ii), drugi AB (I<sup>A</sup>I<sup>B</sup>)? Dzieci dostaną i oraz I<sup>A</sup> albo I<sup>B</sup> – mają grupę <b>A albo B</b>, nigdy 0 ani AB.</p>`,
    remember: 'Zawsze zaczynaj od gamet: każdy rodzic daje jeden allel.',
    check: { q: 'Rodzice: ii i IᴬIᴮ. Czy dziecko może mieć grupę 0?', options: ['nie', 'tak, 25%', 'tak, 50%'], answer: 0, explain: 'Rodzic AB zawsze przekazuje Iᴬ albo Iᴮ, więc dziecko nie będzie ii.' },
  },
  {
    title: 'Czynnik Rh',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="DD i Dd to Rh plus, dd to Rh minus. Konflikt serologiczny może wystąpić, gdy matka ma Rh minus, a dziecko Rh plus">
      <g class="sw"><rect x="10" y="15" width="110" height="60" rx="8" class="f2 s2"/><rect x="130" y="15" width="110" height="60" rx="8" class="f2 s2"/><rect x="250" y="15" width="140" height="60" rx="8" class="f1 s1"/></g>
      <g class="tx-b" text-anchor="middle"><text x="65" y="42">DD</text><text x="185" y="42">Dd</text><text x="320" y="42">dd</text></g>
      <g class="tx" text-anchor="middle"><text x="65" y="65">Rh+</text><text x="185" y="65">Rh+</text><text x="320" y="65">Rh−</text></g>
      <text x="200" y="115" class="tx" text-anchor="middle">⚠️ matka Rh− + dziecko Rh+</text>
      <text x="200" y="145" class="tx" text-anchor="middle">→ możliwy konflikt serologiczny</text>
    </svg>`,
    text: `<p>Czynnik Rh to białko (antygen D) na czerwonych krwinkach. Allel <b>D</b> dominuje: DD i Dd → <b>Rh+</b>; tylko dd → <b>Rh−</b>.</p>
      <p>Gdy matka ma Rh−, a dziecko po ojcu Rh+, może dojść do <b>konfliktu serologicznego</b>. Dlatego warto znać swoją grupę krwi.</p>`,
    remember: 'Rh− = dd. Dwoje rodziców Dd może mieć dziecko Rh− (25%).',
    hook: 'Minus jest „cichy” – musi być podwójny (dd), żeby go było widać.',
  },
];

window.LESSONS['biologia/mutacje'] = [
  {
    title: 'Mutacja – literówka w DNA',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Prawidłowy odcinek DNA ATGCCA i po mutacji ATGTCA – jedna zasada C zmieniła się na T">
      <text x="10" y="45" class="tx">przed:</text><text x="10" y="115" class="tx">po:</text>
      <g class="sw f3 s3"><rect x="80" y="20" width="40" height="40"/><rect x="120" y="20" width="40" height="40"/><rect x="160" y="20" width="40" height="40"/><rect x="200" y="20" width="40" height="40"/><rect x="240" y="20" width="40" height="40"/><rect x="280" y="20" width="40" height="40"/>
        <rect x="80" y="90" width="40" height="40"/><rect x="120" y="90" width="40" height="40"/><rect x="160" y="90" width="40" height="40"/><rect x="240" y="90" width="40" height="40"/><rect x="280" y="90" width="40" height="40"/></g>
      <rect x="200" y="90" width="40" height="40" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="100" y="47">A</text><text x="140" y="47">T</text><text x="180" y="47">G</text><text x="220" y="47">C</text><text x="260" y="47">C</text><text x="300" y="47">A</text>
        <text x="100" y="117">A</text><text x="140" y="117">T</text><text x="180" y="117">G</text><text x="220" y="117">T</text><text x="260" y="117">C</text><text x="300" y="117">A</text></g>
      <text x="220" y="152" class="tx-s" text-anchor="middle">zmiana jednej zasady</text>
    </svg>`,
    text: `<p><b>Mutacja</b> to nagła, trwała zmiana w DNA. Może dotyczyć jednej „litery” w genie (<b>mutacja genowa</b>) albo całych chromosomów – ich budowy lub liczby (<b>mutacja chromosomowa</b>).</p>
      <p>Większość drobnych mutacji jest obojętna, niektóre są korzystne, nieliczne – szkodliwe. Mutacje są źródłem różnorodności organizmów.</p>`,
    remember: 'Mutacja genowa – zmiana w genie. Mutacja chromosomowa – zmiana budowy lub liczby chromosomów.',
    hook: 'Mutacja to literówka w przepisie – czasem nic nie zmienia, czasem psuje całe danie.',
  },
  {
    title: 'Skąd się biorą mutacje?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Mutacje spontaniczne – błędy przy kopiowaniu DNA. Mutageny: fizyczne – promieniowanie UV i rentgenowskie; chemiczne – dym papierosowy, spaliny; biologiczne – niektóre wirusy">
      <rect x="10" y="10" width="380" height="50" rx="10" class="f4 s4 sw"/>
      <text x="25" y="41" class="tx"><tspan class="tx-b">spontaniczne</tspan> – błąd przy kopiowaniu DNA</text>
      <g class="sw"><rect x="10" y="75" width="120" height="125" rx="10" class="f1 s1"/><rect x="140" y="75" width="120" height="125" rx="10" class="f2 s2"/><rect x="270" y="75" width="120" height="125" rx="10" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="100">fizyczne</text><text x="200" y="100">chemiczne</text><text x="330" y="100">biologiczne</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="135">☀️ UV</text><text x="70" y="165">☢️ rentgen</text>
        <text x="200" y="135">🚬 dym</text><text x="200" y="165">🚗 spaliny</text>
        <text x="330" y="135">🦠 wirusy</text><text x="330" y="165">HPV, HBV</text></g>
    </svg>`,
    text: `<p><b>Mutacje spontaniczne</b> powstają same – głównie przez błędy przy kopiowaniu DNA. Komórka większość z nich naprawia.</p>
      <p><b>Mutacje wywołane</b> powodują <b>mutageny</b>: fizyczne (promieniowanie UV i rentgenowskie), chemiczne (np. benzopiren z dymu papierosowego i spalin) i biologiczne (niektóre wirusy).</p>`,
    remember: 'Mutageny: fizyczne, chemiczne, biologiczne.',
    check: { q: 'Promieniowanie UV to mutagen…', options: ['chemiczny', 'fizyczny', 'biologiczny'], answer: 1, explain: 'Promieniowanie (UV, rentgenowskie) to mutageny fizyczne.' },
  },
  {
    title: 'Mukowiscydoza i zespół Downa',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Mukowiscydoza: mutacja genowa w genie na chromosomie 7, gęsty śluz. Zespół Downa: trzy chromosomy 21 zamiast dwóch, razem 47 chromosomów">
      <g class="sw"><rect x="10" y="10" width="185" height="190" rx="12" class="f1 s1"/><rect x="205" y="10" width="185" height="190" rx="12" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">mukowiscydoza</text><text x="297" y="38">zespół Downa</text></g>
      <g class="f5 s5"><rect x="85" y="55" width="16" height="70" rx="7"/><rect x="105" y="55" width="16" height="70" rx="7"/></g>
      <rect x="83" y="80" width="40" height="12" class="f2 s2"/>
      <g class="f4 s4"><rect x="262" y="60" width="14" height="55" rx="6"/><rect x="290" y="60" width="14" height="55" rx="6"/><rect x="318" y="60" width="14" height="55" rx="6"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="150">mutacja genowa</text><text x="102" y="178">gęsty śluz</text>
        <text x="297" y="150">trisomia 21</text><text x="297" y="178">47 chromosomów</text></g>
    </svg>`,
    text: `<p><b>Mukowiscydoza</b> – skutek <b>mutacji genowej</b> (gen na chromosomie 7). Organizm wytwarza bardzo gęsty, lepki śluz w drogach oddechowych i układzie pokarmowym. Allel choroby jest <b>recesywny</b> – chorują osoby aa, a zdrowi rodzice mogą być nosicielami (Aa).</p>
      <p><b>Zespół Downa</b> – <b>mutacja chromosomowa</b>: trzy chromosomy 21 zamiast dwóch (<b>trisomia 21</b>), razem 47. Ryzyko rośnie z wiekiem matki.</p>`,
    remember: 'Mukowiscydoza – mutacja genowa, recesywna. Zespół Downa – trisomia 21 (47 chromosomów).',
    hook: '<b>M</b>ukowiscydoza – <b>m</b>ały błąd w genie. <b>D</b>own – <b>d</b>odatkowy chromosom.',
    check: { q: 'Ile chromosomów ma komórka ciała osoby z zespołem Downa?', options: ['46', '45', '47'], answer: 2, explain: 'Dodatkowy chromosom 21: 46 + 1 = 47.' },
  },
  {
    title: 'Co się dziedziczy, a co nie',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Mutacja w komórce skóry nie przechodzi na dzieci, ale może sprzyjać nowotworowi. Mutacja w gamecie przechodzi na potomstwo">
      <g class="sw"><rect x="10" y="10" width="185" height="160" rx="12" class="f3 s3"/><rect x="205" y="10" width="185" height="160" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">komórka ciała</text><text x="297" y="40">gameta</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="80">🧍 skóra, płuca</text><text x="102" y="115">❌ nie u dzieci</text><text x="102" y="150">może → nowotwór</text>
        <text x="297" y="80">🥚 plemnik, jajo</text><text x="297" y="115">✅ u potomstwa</text></g>
    </svg>`,
    text: `<p>Mutacja w komórce ciała (np. skóry po oparzeniu słonecznym) <b>nie przejdzie na dzieci</b>, ale może przyczynić się do nowotworu. Mutacja w <b>gamecie</b> trafia do potomstwa.</p>
      <p>Choroby genetycznej <b>nie można się zarazić</b> – to zmiana w DNA, a nie zakażenie.</p>`,
    remember: 'Dziedziczą się tylko mutacje w komórkach rozrodczych (gametach).',
    check: { q: 'Czy mukowiscydozą można się zarazić?', options: ['nie, to choroba genetyczna', 'tak, przez kaszel', 'tak, przez dotyk'], answer: 0, explain: 'Choroby genetyczne wynikają ze zmian w DNA, a nie z zakażenia.' },
  },
];

window.LESSONS['biologia/ewolucja'] = [
  {
    title: 'Ewolucja – zmiany przez pokolenia',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Oś czasu: przodek, potem kolejne pokolenia stopniowo się zmieniają, aż powstaje nowy gatunek">
      <defs><marker id="a-k8b-ewo-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="20" y1="120" x2="385" y2="120" class="ln sw" marker-end="url(#a-k8b-ewo-1)"/>
      <g class="sw"><circle cx="50" cy="75" r="18" class="f1 s1"/><circle cx="140" cy="75" r="22" class="f1 s1"/><circle cx="230" cy="75" r="26" class="f3 s3"/><circle cx="320" cy="75" r="30" class="f3 s3"/></g>
      <g class="tx-s" text-anchor="middle"><text x="50" y="145">przodek</text><text x="320" y="145">nowy gatunek</text></g>
      <text x="200" y="165" class="tx-s" text-anchor="middle">miliony lat →</text>
    </svg>`,
    text: `<p><b>Ewolucja</b> to stopniowe, nieodwracalne zmiany <b>grup organizmów</b>, przez które powstają nowe gatunki, lepiej przystosowane do środowiska.</p>
      <p>Ewolucja nie dotyczy jednego osobnika w ciągu jego życia – zachodzi przez wiele pokoleń. Wszystkie organizmy na Ziemi są ze sobą spokrewnione.</p>`,
    remember: 'Ewolucja = zmiany populacji i gatunków przez pokolenia.',
    hook: 'Ewolucja to nie film, tylko album z tysięcy zdjęć – każde trochę inne od poprzedniego.',
  },
  {
    title: 'Dowody: skały i ciała',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Kończyna przednia człowieka i skrzydło nietoperza mają te same kości – narządy homologiczne. Skrzydło ptaka i ważki mają tę samą funkcję, ale inne pochodzenie – narządy analogiczne">
      <g class="sw"><rect x="10" y="10" width="185" height="200" rx="12" class="f3 s3"/><rect x="205" y="10" width="185" height="200" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">homologiczne</text><text x="297" y="38">analogiczne</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="80">✋ ręka</text><text x="102" y="108">🦇 skrzydło</text><text x="102" y="150">te same kości,</text><text x="102" y="175">inna funkcja</text>
        <text x="297" y="80">🐦 skrzydło</text><text x="297" y="108">🪰 skrzydło</text><text x="297" y="150">ta sama funkcja,</text><text x="297" y="175">inne pochodzenie</text></g>
    </svg>`,
    text: `<p><b>Dowody bezpośrednie</b> to <b>skamieniałości</b> – szczątki i odciski dawnych organizmów w skałach. Wśród nich są <b>ogniwa pośrednie</b>, np. archeopteryks – ptak z cechami gadów.</p>
      <p><b>Dowody pośrednie</b>: narządy <b>homologiczne</b> (wspólne pochodzenie), <b>szczątkowe</b> (kość ogonowa człowieka), <b>żywe skamieniałości</b> (dziobak) i jedność budowy (DNA u wszystkich organizmów).</p>`,
    remember: 'Homologiczne – wspólne pochodzenie. Analogiczne – wspólna funkcja.',
    hook: '<b>Ho</b>mologiczne – ten sam <b>po</b>czątek. <b>A</b>nalogiczne – ta sama <b>a</b>kcja (funkcja).',
    check: { q: 'Ręka człowieka i skrzydło nietoperza to narządy…', options: ['analogiczne', 'homologiczne', 'szczątkowe'], answer: 1, explain: 'Mają wspólne pochodzenie i podobny układ kości, choć różne funkcje.' },
  },
  {
    title: 'Dobór naturalny w akcji',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Na jasnej korze lepiej ukryte są jasne ćmy, na ciemnej korze – ciemne. Ptaki częściej zjadają ćmy, które się wyróżniają">
      <rect x="20" y="20" width="160" height="150" class="f4 s4 sw"/><rect x="220" y="20" width="160" height="150" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="100" y="192">jasna kora</text><text x="300" y="192">ciemna kora</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="70">🦋</text><text x="130" y="120">🦋</text><text x="270" y="70">🦋</text><text x="330" y="120">🦋</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="92">jasna ✅</text><text x="130" y="142">ciemna 🐦</text><text x="270" y="92">jasna 🐦</text><text x="330" y="142">ciemna ✅</text></g>
    </svg>`,
    text: `<p>Teoria <b>Karola Darwina</b>: osobniki się różnią, przekazują cechy potomstwu, a rodzi się ich więcej, niż może przeżyć. Przeżywają i rozmnażają się najczęściej <b>najlepiej przystosowane</b> – to <b>dobór naturalny</b>.</p>
      <p>Przykład: krępak brzozowy. Na korze ściemniałej od zanieczyszczeń ciemne ćmy były gorzej widoczne dla ptaków – przeżywały częściej i było ich coraz więcej.</p>`,
    remember: 'Dobór naturalny: selekcji dokonuje środowisko.',
    check: { q: 'Kto „wybiera” w doborze naturalnym?', options: ['człowiek', 'sam organizm', 'środowisko'], answer: 2, explain: 'Warunki środowiska decydują, które osobniki częściej przeżyją i się rozmnożą.' },
  },
  {
    title: 'Dobór sztuczny i nasi krewni',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Drzewo: wspólny przodek, od którego odchodzą dwie gałęzie – szympans i człowiek. Człowiek: mózg około 1350 centymetrów sześciennych, esowaty kręgosłup, chodzenie na dwóch nogach">
      <line x1="200" y1="215" x2="200" y2="175" class="ln sw"/><line x1="200" y1="175" x2="100" y2="100" class="ln sw"/><line x1="200" y1="175" x2="300" y2="100" class="ln sw"/>
      <circle cx="200" cy="175" r="8" class="f2 s2 sw"/>
      <text x="215" y="205" class="tx-s">wspólny przodek</text>
      <g class="tx-b" text-anchor="middle"><text x="100" y="30">🐒 szympans</text><text x="300" y="30">🧍 człowiek</text></g>
      <g class="tx-s" text-anchor="middle"><text x="100" y="58">mózg ok. 400 cm³</text><text x="300" y="58">mózg ok. 1350 cm³</text>
        <text x="100" y="80">kręgosłup łukowaty</text><text x="300" y="80">kręgosłup esowaty</text></g>
    </svg>`,
    text: `<p>W <b>doborze sztucznym</b> wybiera <b>człowiek</b> – rozmnaża osobniki o cechach, których chce. Tak powstały rasy psów i odmiany roślin uprawnych.</p>
      <p>Człowiek i szympans mają <b>wspólnego przodka</b> – człowiek nie pochodzi od szympansa. Łączą nas np. chwytne dłonie z przeciwstawnym kciukiem. Różni nas m.in. większy mózg, esowaty kręgosłup, szeroka miednica i chodzenie na dwóch nogach.</p>`,
    remember: 'Dobór naturalny – wybiera środowisko. Dobór sztuczny – wybiera człowiek.',
    hook: 'Szympans to kuzyn, a nie dziadek.',
    check: { q: 'Która cecha jest typowa tylko dla człowieka?', options: ['esowaty kręgosłup', 'chwytna dłoń z kciukiem', 'oczy skierowane do przodu'], answer: 0, explain: 'Esowaty kręgosłup to przystosowanie do dwunożności. Pozostałe cechy mamy wspólne z małpami człekokształtnymi.' },
  },
];

window.LESSONS['biologia/ekosystem'] = [
  {
    title: 'Ekosystem = życie + to, co nieżywe',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Ekosystem lasu: elementy żywe – drzewa, zwierzęta, grzyby; elementy nieożywione – światło, woda, gleba, temperatura; strzałki pokazują, że są powiązane">
      <g class="sw"><rect x="10" y="10" width="180" height="170" rx="12" class="f3 s3"/><rect x="210" y="10" width="180" height="170" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="100" y="38">żywe</text><text x="300" y="38">nieożywione</text></g>
      <g class="tx" text-anchor="middle"><text x="100" y="75">🌲 drzewa</text><text x="100" y="105">🦊 zwierzęta</text><text x="100" y="135">🍄 grzyby</text><text x="100" y="165">🦠 bakterie</text>
        <text x="300" y="75">☀️ światło</text><text x="300" y="105">💧 woda</text><text x="300" y="135">🪨 gleba</text><text x="300" y="165">🌡️ temperatura</text></g>
      <text x="200" y="100" class="tx-b" text-anchor="middle">⇄</text>
    </svg>`,
    text: `<p><b>Ekosystem</b> to organizmy danego miejsca razem ze środowiskiem nieożywionym. Las, jezioro czy łąka to ekosystemy.</p>
      <p>Wszystko jest powiązane: rośliny potrzebują światła i wody, drzewa zacieniają dno lasu, a grzyby i bakterie rozkładają szczątki i oddają glebie sole mineralne.</p>`,
    remember: 'Ekosystem = elementy żywe + nieożywione + zależności między nimi.',
    hook: 'Ekosystem to drużyna: zawodnicy (organizmy) i boisko (środowisko) grają razem.',
  },
  {
    title: 'Populacja w liczbach',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kwadrat 1 hektara z sześcioma zającami obok kwadratu z dwoma – różne zagęszczenie. Przykład: 200 zajęcy na 4 hektarach to 50 zajęcy na hektar">
      <rect x="20" y="20" width="110" height="110" class="f3 s3 sw"/><rect x="150" y="20" width="110" height="110" class="f3 s3 sw"/>
      <g class="tx" text-anchor="middle"><text x="45" y="55">🐇</text><text x="80" y="55">🐇</text><text x="110" y="55">🐇</text><text x="45" y="105">🐇</text><text x="80" y="105">🐇</text><text x="110" y="105">🐇</text>
        <text x="180" y="60">🐇</text><text x="230" y="105">🐇</text></g>
      <g class="tx-s" text-anchor="middle"><text x="75" y="150">6 na 1 ha</text><text x="205" y="150">2 na 1 ha</text></g>
      <text x="280" y="60" class="tx-b">zagęszczenie</text>
      <text x="280" y="90" class="tx">= liczebność</text>
      <text x="280" y="115" class="tx">: powierzchnia</text>
      <text x="200" y="190" class="tx" text-anchor="middle">200 zajęcy : 4 ha = 50 na 1 ha</text>
    </svg>`,
    text: `<p><b>Populacja</b> to osobniki <b>jednego gatunku</b> w tym samym miejscu i czasie. Opisują ją: <b>liczebność</b>, <b>zagęszczenie</b>, <b>rozrodczość</b>, <b>śmiertelność</b> oraz struktura przestrzenna, wiekowa i płciowa.</p>
      <p>Najczęściej osobniki żyją w <b>skupiskach</b> (stada, ławice, kępy). Gdy rodzi się więcej osobników, niż ginie – populacja rośnie.</p>`,
    remember: 'Zagęszczenie = liczebność : powierzchnia.',
    check: { q: 'Na 5 ha żyje 150 kretów. Jakie jest zagęszczenie?', options: ['750 na 1 ha', '30 na 1 ha', '145 na 1 ha'], answer: 1, explain: '150 : 5 = 30 kretów na 1 ha.' },
  },
  {
    title: 'Piramida wieku',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie piramidy wieku: z szeroką podstawą – populacja rozwijająca się; z wąską podstawą – populacja wymierająca">
      <g class="f3 s3 sw"><rect x="40" y="130" width="140" height="30"/><rect x="60" y="100" width="100" height="30"/><rect x="80" y="70" width="60" height="30"/><rect x="95" y="40" width="30" height="30"/></g>
      <g class="f2 s2 sw"><rect x="280" y="130" width="40" height="30"/><rect x="260" y="100" width="80" height="30"/><rect x="250" y="70" width="100" height="30"/><rect x="265" y="40" width="70" height="30"/></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="180">dużo młodych</text><text x="300" y="180">mało młodych</text></g>
      <g class="tx-b" text-anchor="middle"><text x="110" y="25">rozwija się</text><text x="300" y="25">wymiera</text></g>
      <text x="215" y="150" class="tx-s" text-anchor="middle">młode</text><text x="215" y="60" class="tx-s" text-anchor="middle">stare</text>
    </svg>`,
    text: `<p><b>Struktura wiekowa</b> mówi, ile jest osobników młodych (przed rozrodem), dorosłych (rozmnażających się) i starych. Pokazuje ją <b>piramida wieku</b> – młode są na dole.</p>
      <p>Szeroka podstawa – dużo młodych, populacja <b>się rozwija</b>. Wąska podstawa – mało młodych, populacja <b>wymiera</b>.</p>`,
    remember: 'Szeroka podstawa piramidy = przyszłość populacji jest pewna.',
    hook: 'Piramida stoi stabilnie na szerokiej podstawie – tak jak rozwijająca się populacja.',
  },
  {
    title: 'Zakres tolerancji',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Krzywa w kształcie dzwonu: na osi temperatura. Minimum i maksimum to granice przeżycia, pośrodku optimum, gdzie organizm rozwija się najlepiej">
      <line x1="30" y1="160" x2="380" y2="160" class="ln"/>
      <path d="M70,160 Q120,160 150,90 Q205,10 260,90 Q290,160 340,160" class="s3 sw" fill="none"/>
      <rect x="160" y="30" width="90" height="130" class="f3" opacity="0.5"/>
      <g class="ln-thin dash"><line x1="70" y1="40" x2="70" y2="160"/><line x1="340" y1="40" x2="340" y2="160"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="180">minimum</text><text x="340" y="180">maksimum</text><text x="205" y="180">temperatura →</text></g>
      <text x="205" y="60" class="tx-b" text-anchor="middle">optimum</text>
      <text x="35" y="100" class="tx-s">☠️</text><text x="358" y="100" class="tx-s">☠️</text>
    </svg>`,
    text: `<p>Każdy organizm ma <b>zakres tolerancji</b> na czynniki środowiska, np. temperaturę i wilgotność. Poniżej <b>minimum</b> i powyżej <b>maksimum</b> nie przeżyje.</p>
      <p>Pomiędzy jest <b>optimum</b> – tam rozwija się najlepiej. Gatunek o szerokim zakresie może żyć w wielu miejscach, o wąskim – w nielicznych.</p>`,
    remember: 'Minimum i maksimum – granice życia. Optimum – najlepsze warunki.',
    check: { q: 'Jak nazywa się najkorzystniejszy zakres czynnika dla organizmu?', options: ['minimum', 'maksimum', 'optimum'], answer: 2, explain: 'W optimum organizm rozwija się najlepiej.' },
  },
];

window.LESSONS['biologia/zaleznosci'] = [
  {
    title: 'Plusy i minusy w przyrodzie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Zależności antagonistyczne: co najmniej jedna strona traci – znaki plus minus albo minus minus. Nieantagonistyczne: nikt nie traci – plus plus albo plus zero">
      <g class="sw"><rect x="10" y="10" width="185" height="180" rx="12" class="f2 s2"/><rect x="205" y="10" width="185" height="180" rx="12" class="f3 s3"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="38">antagonistyczne</text><text x="297" y="38">nieantagonistyczne</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="78">+ / −</text><text x="102" y="108">− / −</text><text x="102" y="150">ktoś traci</text>
        <text x="297" y="78">+ / +</text><text x="297" y="108">+ / 0</text><text x="297" y="150">nikt nie traci</text></g>
    </svg>`,
    text: `<p>Organizmy na siebie wpływają. Zapisujemy to znakami: <b>+</b> zysk, <b>−</b> strata, <b>0</b> bez zmian.</p>
      <p><b>Antagonistyczne</b> – ktoś traci: drapieżnictwo, roślinożerność, pasożytnictwo (+/−), konkurencja (−/−). <b>Nieantagonistyczne</b> – nikt nie traci: mutualizm (+/+), komensalizm (+/0).</p>`,
    remember: 'Jest minus? Zależność antagonistyczna.',
    hook: '„Anty” – ktoś jest przeciwko komuś, więc ktoś traci.',
  },
  {
    title: 'Drapieżnik, roślinożerca, pasożyt',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Drapieżnictwo: sowa i mysz, ofiara ginie. Roślinożerność: sarna i pędy, roślina rośnie dalej. Pasożytnictwo: kleszcz i sarna, żywiciel jest osłabiony, ale żyje">
      <g class="sw"><rect x="5" y="10" width="134" height="180" rx="10" class="f2 s2"/><rect x="143" y="10" width="134" height="180" rx="10" class="f3 s3"/><rect x="281" y="10" width="134" height="180" rx="10" class="f5 s5"/></g>
      <g class="tx" text-anchor="middle"><text x="72" y="36">drapieżnictwo</text><text x="210" y="36">roślinożerność</text><text x="348" y="36">pasożytnictwo</text></g>
      <g class="tx" text-anchor="middle"><text x="72" y="80">🐭 → 🦉</text><text x="210" y="80">🌿 → 🦌</text><text x="348" y="80">🦌 → 🕷️</text>
        <text x="72" y="125">ofiara</text><text x="72" y="150">ginie</text>
        <text x="210" y="125">roślina</text><text x="210" y="150">odrasta</text>
        <text x="348" y="125">żywiciel</text><text x="348" y="150">osłabiony</text></g>
    </svg>`,
    text: `<p><b>Drapieżnik</b> poluje, zabija i zjada ofiarę – często tę najsłabszą. <b>Roślinożerca</b> zjada zwykle tylko część rośliny, która może dalej rosnąć.</p>
      <p><b>Pasożyt</b> (np. kleszcz, tasiemiec) żyje kosztem <b>żywiciela</b>, często na nim lub w nim. Osłabia go, ale zwykle nie zabija.</p>`,
    remember: 'Wszystkie trzy to +/−. Różnica: czy i jak szybko „druga strona” ginie.',
    hook: 'Pasożyt nie zabija gospodarza – nie podcina gałęzi, na której siedzi.',
    check: { q: 'Tasiemiec w jelicie człowieka to przykład…', options: ['pasożytnictwa', 'drapieżnictwa', 'mutualizmu'], answer: 0, explain: 'Tasiemiec żyje w żywicielu i pobiera od niego pokarm – pasożytnictwo.' },
  },
  {
    title: 'Konkurencja – wszyscy tracą',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Konkurencja wewnątrzgatunkowa: dwie sosny walczą o światło. Konkurencja międzygatunkowa: lis i myszołów polują na te same myszy">
      <g class="sw"><rect x="10" y="10" width="185" height="170" rx="12" class="f1 s1"/><rect x="205" y="10" width="185" height="170" rx="12" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="102" y="36">wewnątrzgatunkowa</text><text x="297" y="36">międzygatunkowa</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="80">🌲 ⚔️ 🌲</text><text x="102" y="115">sosna i sosna</text><text x="102" y="145">o światło ☀️</text>
        <text x="297" y="80">🦊 ⚔️ 🦅</text><text x="297" y="115">lis i myszołów</text><text x="297" y="145">o myszy 🐭</text></g>
    </svg>`,
    text: `<p>Gdy organizmy potrzebują <b>tych samych zasobów</b> – pokarmu, wody, światła, miejsca, partnera – konkurują. Każdemu zostaje mniej, więc obie strony tracą (−/−).</p>
      <p><b>Wewnątrzgatunkowa</b> – w obrębie jednego gatunku. <b>Międzygatunkowa</b> – między różnymi gatunkami.</p>`,
    remember: '„Wewnątrz” – ten sam gatunek. „Między” – różne gatunki.',
    check: { q: 'Dwa jelenie walczą o samicę. To konkurencja…', options: ['międzygatunkowa', 'wewnątrzgatunkowa', 'to nie jest konkurencja'], answer: 1, explain: 'Rywalizują osobniki tego samego gatunku.' },
  },
  {
    title: 'Współpraca się opłaca',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Mutualizm w porostach: glon daje cukry z fotosyntezy, grzyb daje wodę i sole mineralne. Mikoryza: grzyb daje drzewu wodę i sole, drzewo daje grzybowi cukry. Komensalizm: sęp zjada resztki ofiary lwa">
      <defs><marker id="a-k8b-zal-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="22" class="tx-b" text-anchor="middle">mutualizm (+/+): mikoryza</text>
      <rect x="20" y="40" width="120" height="60" rx="10" class="f3 s3 sw"/><rect x="260" y="40" width="120" height="60" rx="10" class="f2 s2 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="80" y="76">🌳 drzewo</text><text x="320" y="76">🍄 grzyb</text></g>
      <line x1="145" y1="55" x2="255" y2="55" class="ln" marker-end="url(#a-k8b-zal-4)"/><line x1="255" y1="88" x2="145" y2="88" class="ln" marker-end="url(#a-k8b-zal-4)"/>
      <text x="200" y="48" class="tx-s" text-anchor="middle">cukry</text><text x="200" y="110" class="tx-s" text-anchor="middle">woda, sole</text>
      <text x="200" y="150" class="tx-b" text-anchor="middle">komensalizm (+/0)</text>
      <text x="200" y="185" class="tx" text-anchor="middle">🦅 sęp zjada resztki po 🦁 lwie</text>
    </svg>`,
    text: `<p><b>Mutualizm</b> (+/+) – obie strony zyskują. W <b>porostach</b> glon wytwarza cukry, a grzyb dostarcza wody i soli mineralnych. W <b>mikoryzie</b> grzyb pomaga drzewu pobierać wodę i sole, a dostaje od niego cukry. <b>Bakterie brodawkowe</b> dają roślinom bobowatym azot z powietrza.</p>
      <p><b>Komensalizm</b> (+/0) – jeden zyskuje, drugiemu jest to obojętne, np. sęp zjadający resztki ofiary lwa.</p>`,
    remember: 'Mutualizm: obaj zyskują. Komensalizm: jeden zyskuje, drugi nic.',
    hook: '<b>Mu</b>tualizm – <b>mu</b>szkieterowie: jeden za wszystkich, wszyscy za jednego.',
    check: { q: 'Porost (grzyb + glon) to przykład…', options: ['komensalizmu', 'pasożytnictwa', 'mutualizmu'], answer: 2, explain: 'Obie strony zyskują (+/+).' },
  },
];

window.LESSONS['biologia/lancuchy'] = [
  {
    title: 'Kto kogo zjada?',
    svg: `<svg viewBox="0 0 420 150" role="img" aria-label="Łańcuch pokarmowy: liście dębu, gąsienica, sikora, krogulec. Producent, konsument pierwszego, drugiego i trzeciego rzędu">
      <defs><marker id="a-k8b-lan-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="5" y="20" width="85" height="70" rx="10" class="f3 s3"/><rect x="115" y="20" width="85" height="70" rx="10" class="f4 s4"/><rect x="225" y="20" width="85" height="70" rx="10" class="f1 s1"/><rect x="335" y="20" width="80" height="70" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="47" y="50">🍃</text><text x="157" y="50">🐛</text><text x="267" y="50">🐦</text><text x="375" y="50">🦅</text></g>
      <g class="tx-s" text-anchor="middle"><text x="47" y="76">liście</text><text x="157" y="76">gąsienica</text><text x="267" y="76">sikora</text><text x="375" y="76">krogulec</text></g>
      <g class="ln"><line x1="90" y1="55" x2="113" y2="55" marker-end="url(#a-k8b-lan-1)"/><line x1="200" y1="55" x2="223" y2="55" marker-end="url(#a-k8b-lan-1)"/><line x1="310" y1="55" x2="333" y2="55" marker-end="url(#a-k8b-lan-1)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="47" y="115">producent</text><text x="157" y="115">kons. I</text><text x="267" y="115">kons. II</text><text x="375" y="115">kons. III</text></g>
    </svg>`,
    text: `<p><b>Producenci</b> (rośliny, glony) wytwarzają materię organiczną dzięki energii Słońca. <b>Konsumenci</b> zjadają inne organizmy: I rzędu – roślinożercy, II rzędu – zjadacze roślinożerców, i tak dalej.</p>
      <p>Łańcuch spasania zaczyna się od <b>producenta</b>. Strzałka znaczy „<b>jest zjadany przez</b>”.</p>`,
    remember: 'Strzałka pokazuje kierunek przepływu pokarmu: od zjadanego do zjadającego.',
    hook: 'Strzałka to widelec skierowany do tego, kto je.',
    check: { q: 'Który zapis jest poprawny?', options: ['trawa → zając → lis', 'lis → zając → trawa', 'zając → lis → trawa'], answer: 0, explain: 'Trawa jest zjadana przez zająca, a zając przez lisa.' },
  },
  {
    title: 'Sieć zamiast łańcucha',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Sieć pokarmowa: trawę jedzą zając i mysz, nasiona – mysz; mysz zjadają lis i sowa; zająca zjada lis">
      <defs><marker id="a-k8b-lan-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="40" y="170" width="110" height="40" rx="8" class="f3 s3"/><rect x="250" y="170" width="110" height="40" rx="8" class="f3 s3"/>
        <rect x="40" y="95" width="110" height="40" rx="8" class="f4 s4"/><rect x="250" y="95" width="110" height="40" rx="8" class="f4 s4"/>
        <rect x="40" y="15" width="110" height="40" rx="8" class="f2 s2"/><rect x="250" y="15" width="110" height="40" rx="8" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="95" y="196">🌾 trawa</text><text x="305" y="196">🌰 nasiona</text><text x="95" y="121">🐇 zając</text><text x="305" y="121">🐭 mysz</text><text x="95" y="41">🦊 lis</text><text x="305" y="41">🦉 sowa</text></g>
      <g class="ln"><line x1="95" y1="168" x2="95" y2="139" marker-end="url(#a-k8b-lan-2)"/><line x1="305" y1="168" x2="305" y2="139" marker-end="url(#a-k8b-lan-2)"/>
        <line x1="140" y1="168" x2="265" y2="139" marker-end="url(#a-k8b-lan-2)"/>
        <line x1="95" y1="93" x2="95" y2="59" marker-end="url(#a-k8b-lan-2)"/><line x1="305" y1="93" x2="305" y2="59" marker-end="url(#a-k8b-lan-2)"/>
        <line x1="260" y1="93" x2="140" y2="59" marker-end="url(#a-k8b-lan-2)"/></g>
    </svg>`,
    text: `<p>Zwierzęta jedzą różne pokarmy, więc łańcuchy łączą się w <b>sieć pokarmową</b>. Lis zjada i zające, i myszy; myszy zjada też sowa.</p>
      <p>Zmiana jednego elementu działa na inne. Mniej lisów i sów → więcej myszy → mniej nasion.</p>`,
    remember: 'Sieć pokarmowa = połączone łańcuchy pokarmowe ekosystemu.',
    check: { q: 'Co się stanie z liczbą myszy, gdy zniknie sowa (a lisów nie przybędzie)?', options: ['spadnie', 'wzrośnie', 'nie zmieni się'], answer: 1, explain: 'Mniej drapieżników zjadających myszy – myszy przybywa.' },
  },
  {
    title: 'Destruenci – sprzątacze przyrody',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Obieg materii: producenci, konsumenci, szczątki rozkładane przez destruentów na sole mineralne, które znów pobierają rośliny">
      <defs><marker id="a-k8b-lan-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="140" y="10" width="120" height="44" rx="10" class="f3 s3"/><rect x="270" y="88" width="120" height="44" rx="10" class="f4 s4"/>
        <rect x="140" y="166" width="120" height="44" rx="10" class="f5 s5"/><rect x="10" y="88" width="120" height="44" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="200" y="38">🌿 producenci</text><text x="330" y="116">🦌 konsumenci</text><text x="200" y="194">🍄 destruenci</text><text x="70" y="116">sole mineralne</text></g>
      <g class="ln"><path d="M262,40 Q320,45 328,84" marker-end="url(#a-k8b-lan-3)"/><path d="M328,136 Q320,180 264,188" marker-end="url(#a-k8b-lan-3)"/>
        <path d="M136,188 Q80,180 72,136" marker-end="url(#a-k8b-lan-3)"/><path d="M72,84 Q80,45 136,40" marker-end="url(#a-k8b-lan-3)"/></g>
      <text x="200" y="116" class="tx-b" text-anchor="middle">♻️ materia</text>
    </svg>`,
    text: `<p><b>Destruenci</b> – bakterie i grzyby – rozkładają martwe szczątki i odchody na proste związki nieorganiczne (np. sole mineralne). Rośliny pobierają je znowu.</p>
      <p>Dzięki temu <b>materia krąży</b> w ekosystemie i może być używana wiele razy. Bez destruentów obieg by się zatrzymał.</p>`,
    remember: 'Materia krąży: producenci → konsumenci → destruenci → producenci.',
    hook: 'Destruenci to recykling przyrody.',
  },
  {
    title: 'Energia tylko w jedną stronę',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Piramida energii: producenci 10000 jednostek, konsumenci pierwszego rzędu 1000, drugiego rzędu 100. Na każdym poziomie około 90 procent energii rozprasza się jako ciepło">
      <rect x="40" y="140" width="240" height="40" class="f3 s3 sw"/><rect x="90" y="95" width="140" height="40" class="f4 s4 sw"/><rect x="130" y="50" width="60" height="40" class="f2 s2 sw"/>
      <g class="tx" text-anchor="middle"><text x="160" y="166">10 000</text><text x="160" y="121">1000</text><text x="160" y="76">100</text></g>
      <text x="160" y="35" class="tx-s" text-anchor="middle">☀️ energia ze Słońca</text>
      <text x="295" y="120" class="tx">🔥 ciepło</text>
      <text x="295" y="145" class="tx-s">ok. 90% ucieka</text>
      <text x="295" y="166" class="tx-s">na każdym</text><text x="295" y="184" class="tx-s">poziomie</text>
    </svg>`,
    text: `<p>Energia pochodzi ze <b>Słońca</b>. Na każdym poziomie większość się <b>rozprasza</b> jako ciepło (oddychanie, ruch, utrzymanie ciała). Na kolejny poziom przechodzi tylko ok. <b>10%</b>.</p>
      <p>Dlatego energia <b>przepływa</b> (nie wraca), łańcuchy są krótkie, a drapieżników jest mniej niż roślinożerców.</p>`,
    remember: 'Materia krąży, energia przepływa. Na kolejny poziom – ok. 10% energii.',
    check: { q: 'Roślinożercy zgromadzili 2000 jednostek energii. Ile mniej więcej dostaną drapieżcy, którzy ich zjadają?', options: ['2000', '1800', '200'], answer: 2, explain: 'Ok. 10%: 10% z 2000 = 200.' },
  },
];

window.LESSONS['biologia/ochrona'] = [
  {
    title: 'Zasoby: te, które wracają, i te, które znikają',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Zasoby odnawialne: las, ryby, energia słońca i wiatru. Zasoby nieodnawialne: węgiel, ropa naftowa, gaz ziemny">
      <g class="sw"><rect x="10" y="10" width="185" height="180" rx="12" class="f3 s3"/><rect x="205" y="10" width="185" height="180" rx="12" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">odnawialne ♻️</text><text x="297" y="38">nieodnawialne</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="78">🌲 lasy</text><text x="102" y="108">🐟 ryby</text><text x="102" y="138">☀️ słońce</text><text x="102" y="168">🌬️ wiatr</text>
        <text x="297" y="78">⚫ węgiel</text><text x="297" y="108">🛢️ ropa</text><text x="297" y="138">🔥 gaz ziemny</text></g>
    </svg>`,
    text: `<p>Zasoby <b>odnawialne</b> mogą się odtworzyć – ale tylko wtedy, gdy nie zużywamy ich szybciej, niż się odnawiają. <b>Nieodnawialne</b> (węgiel, ropa, gaz) po zużyciu znikają.</p>
      <p><b>Zrównoważony rozwój</b>: korzystamy z zasobów tak, żeby wystarczyło też <b>przyszłym pokoleniom</b> – sadzimy tyle drzew, ile wycinamy, oszczędzamy energię i wodę, segregujemy odpady.</p>`,
    remember: 'Zrównoważony rozwój = potrzeby dziś bez odbierania szans jutro.',
    hook: 'Las to konto z odsetkami: wydawaj tylko odsetki, nie kapitał.',
    check: { q: 'Który zasób jest nieodnawialny?', options: ['gaz ziemny', 'las', 'energia wiatru'], answer: 0, explain: 'Gaz ziemny po spaleniu się nie odtworzy.' },
  },
  {
    title: 'Klimat się ociepla',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Ziemia otoczona warstwą gazów cieplarnianych. Promienie Słońca ogrzewają Ziemię, a gazy zatrzymują ciepło. Spalanie paliw i wycinanie lasów zwiększają ilość dwutlenku węgla">
      <defs><marker id="a-k8b-och-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="140" cy="120" r="80" class="f4" opacity="0.5"/>
      <circle cx="140" cy="120" r="50" class="f1 s1 sw"/>
      <text x="140" y="126" class="tx-b" text-anchor="middle">Ziemia</text>
      <text x="25" y="30" class="tx">☀️</text>
      <line x1="45" y1="35" x2="105" y2="80" class="ln" marker-end="url(#a-k8b-och-2)"/>
      <path d="M175,95 Q205,80 195,60" class="s2 sw" fill="none" marker-end="url(#a-k8b-och-2)"/>
      <text x="155" y="30" class="tx-s">CO₂, metan zatrzymują ciepło</text>
      <g class="tx"><text x="245" y="95">🏭 spalanie</text><text x="245" y="125">węgla, ropy, gazu</text><text x="245" y="160">🪓 wycinka lasów</text></g>
    </svg>`,
    text: `<p>Gazy cieplarniane (np. CO<sub>2</sub>, metan) zatrzymują ciepło przy Ziemi – to naturalny <b>efekt cieplarniany</b>, bez którego byłoby za zimno do życia.</p>
      <p>Człowiek go <b>wzmacnia</b>: spala węgiel, ropę i gaz i wycina lasy. Skutki: wyższa temperatura, topnienie lodowców, wyższy poziom mórz, zagrożenie dla gatunków.</p>`,
    remember: 'Więcej CO₂ z paliw kopalnych → silniejszy efekt cieplarniany → ocieplenie klimatu.',
    hook: 'Efekt cieplarniany to kołdra: cienka grzeje, za gruba – przegrzewa.',
    check: { q: 'Co najbardziej zwiększa ilość CO₂ w powietrzu?', options: ['sadzenie drzew', 'spalanie paliw kopalnych', 'jazda rowerem'], answer: 1, explain: 'Spalanie węgla, ropy i gazu uwalnia dwutlenek węgla.' },
  },
  {
    title: 'Trzy poziomy różnorodności',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Różnorodność genetyczna – różne kolory muszli ślimaków jednego gatunku. Gatunkowa – wiele gatunków. Ekosystemowa – las, łąka, jezioro">
      <g class="sw"><rect x="10" y="10" width="120" height="170" rx="10" class="f5 s5"/><rect x="140" y="10" width="120" height="170" rx="10" class="f1 s1"/><rect x="270" y="10" width="120" height="170" rx="10" class="f3 s3"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="38">genetyczna</text><text x="200" y="38">gatunkowa</text><text x="330" y="38">ekosystemowa</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="85">🐌🐌🐌</text><text x="70" y="140">1 gatunek</text>
        <text x="200" y="85">🦊🦉🐇</text><text x="200" y="140">wiele gat.</text>
        <text x="330" y="85">🌲🌾💧</text><text x="330" y="140">las, łąka</text></g>
    </svg>`,
    text: `<p>Różnorodność biologiczną opisujemy na trzech poziomach: <b>genetycznym</b> (różnice między osobnikami jednego gatunku), <b>gatunkowym</b> (liczba gatunków) i <b>ekosystemowym</b> (rozmaitość ekosystemów).</p>
      <p>Człowiek ją zmniejsza: niszczy siedliska, zanieczyszcza, poluje i łowi za dużo, sprowadza <b>gatunki inwazyjne</b> (np. barszcz Sosnowskiego). W Polsce wyginęły m.in. tur i tarpan. Żubra udało się uratować.</p>`,
    remember: 'Poziomy różnorodności: genetyczny, gatunkowy, ekosystemowy.',
    check: { q: 'Różne odmiany ubarwienia w obrębie jednego gatunku to różnorodność…', options: ['gatunkowa', 'ekosystemowa', 'genetyczna'], answer: 2, explain: 'Różnice między osobnikami jednego gatunku wynikają z różnych alleli.' },
  },
  {
    title: 'Jak chronimy przyrodę w Polsce',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Formy ochrony przyrody od największej: park narodowy – co najmniej 1000 hektarów, cała przyroda; rezerwat przyrody – mniejszy obszar; pomnik przyrody – pojedynczy obiekt, np. stare drzewo lub głaz. Osobno ochrona gatunkowa – rzadkie gatunki w całym kraju">
      <rect x="10" y="10" width="240" height="200" rx="14" class="f3 s3 sw"/>
      <rect x="40" y="70" width="180" height="130" rx="12" class="f4 s4 sw"/>
      <rect x="85" y="140" width="90" height="50" rx="10" class="f2 s2 sw"/>
      <text x="130" y="38" class="tx-b" text-anchor="middle">park narodowy</text>
      <text x="130" y="58" class="tx-s" text-anchor="middle">≥ 1000 ha, cała przyroda</text>
      <text x="130" y="100" class="tx-b" text-anchor="middle">rezerwat</text>
      <text x="130" y="122" class="tx-s" text-anchor="middle">mniejszy obszar</text>
      <text x="130" y="170" class="tx" text-anchor="middle">🌳 pomnik</text>
      <rect x="265" y="10" width="125" height="200" rx="14" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="327" y="40" class="tx-b">ochrona</text><text x="327" y="62" class="tx-b">gatunkowa</text>
        <text x="327" y="100">🦬 żubr</text><text x="327" y="130">🐈 ryś</text><text x="327" y="160">🌱 rosiczka</text></g>
    </svg>`,
    text: `<p><b>Park narodowy</b> – co najmniej 1000 ha, chroniona jest cała przyroda. <b>Rezerwat przyrody</b> – mniejszy obszar z naturalnymi lub mało zmienionymi ekosystemami. <b>Pomnik przyrody</b> – pojedynczy twór, np. okazałe stare drzewo, głaz narzutowy, jaskinia.</p>
      <p><b>Ochrona gatunkowa</b> dotyczy rzadkich i zagrożonych gatunków w całym kraju – nie wolno ich zabijać, zrywać ani niszczyć ich siedlisk.</p>`,
    remember: 'Park narodowy → rezerwat → pomnik przyrody: od największego do najmniejszego.',
    hook: 'Ochrona gatunkowa „podróżuje” z gatunkiem – obowiązuje wszędzie, nie tylko w parku.',
    check: { q: 'Głaz narzutowy przy szkole może być chroniony jako…', options: ['pomnik przyrody', 'park narodowy', 'ochrona gatunkowa'], answer: 0, explain: 'Pojedyncze twory przyrody, np. głazy narzutowe i okazałe drzewa, chroni się jako pomniki przyrody.' },
  },
];
