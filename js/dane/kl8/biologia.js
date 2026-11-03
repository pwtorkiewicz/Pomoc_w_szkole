/* Biologia – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, biologia kl. V–VIII).
 * Podstawa zaleca, by w klasie VIII realizować działy V–VIII: genetyka, ewolucja życia,
 * ekologia i ochrona środowiska, zagrożenia różnorodności biologicznej („Warunki i sposób realizacji”, pkt 4).
 * Fakty sprawdzone w materiałach zpe.gov.pl (szczegóły: docs/PLAN-kl8.md). */
window.SUBJECTS.push({
  id: 'biologia',
  name: 'Biologia',
  icon: '🧬',
  color: '#3f9a4f',
  topics: [
    {
      id: 'dna',
      name: 'DNA i jego kopiowanie',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. V „Genetyka”, wym. 1–2 (struktura i rola DNA, znaczenie podwójnej helisy w replikacji, znaczenie replikacji). Podstawa zaleca realizację działu V w klasie VIII.',
      theory: `
        <h3>Co to jest DNA</h3>
        <p><b>DNA</b> (kwas deoksyrybonukleinowy) to cząsteczka, w której zapisana jest <b>informacja genetyczna</b> – instrukcja budowy i działania organizmu. U organizmów jądrowych DNA jest głównie w <b>jądrze komórkowym</b>; niewielka ilość jest też w mitochondriach i chloroplastach.</p>
        <h3>Z czego składa się DNA</h3>
        <p>DNA to łańcuch <b>nukleotydów</b>. Każdy nukleotyd ma trzy części:</p>
        <ul>
          <li>cukier – <b>deoksyrybozę</b>,</li>
          <li><b>resztę kwasu fosforowego</b>,</li>
          <li>jedną z czterech <b>zasad azotowych</b>: adeninę (<b>A</b>), tyminę (<b>T</b>), guaninę (<b>G</b>) albo cytozynę (<b>C</b>).</li>
        </ul>
        <h3>Podwójna helisa</h3>
        <p>Cząsteczka DNA ma <b>dwie nici</b> skręcone wokół wspólnej osi – to <b>podwójna helisa</b>. Cukry i reszty fosforanowe tworzą zewnętrzny „szkielet”, a zasady azotowe są w środku i łączą obie nici <b>wiązaniami wodorowymi</b>.</p>
        <p>Zasady łączą się zawsze tak samo – to <b>komplementarność zasad</b>:</p>
        <table>
          <tr><th>Zasada</th><th>Łączy się z</th></tr>
          <tr><td>adenina (A)</td><td>tyminą (T)</td></tr>
          <tr><td>guanina (G)</td><td>cytozyną (C)</td></tr>
        </table>
        <p>Dlatego kolejność zasad w jednej nici wyznacza kolejność w drugiej. Np. do odcinka <b>ATGC</b> pasuje <b>TACG</b>.</p>
        <h3>Gen</h3>
        <p><b>Gen</b> to odcinek DNA z instrukcją wytworzenia konkretnego <b>białka</b>. Od białek zależą cechy organizmu, np. grupa krwi.</p>
        <h3>Replikacja – kopiowanie DNA</h3>
        <ol>
          <li>Przed podziałem komórki enzymy <b>rozrywają wiązania wodorowe</b> i nici się rozplatają.</li>
          <li>Do każdej starej nici dobudowuje się nowa – według zasady komplementarności (A–T, G–C).</li>
          <li>Powstają <b>dwie identyczne cząsteczki DNA</b>. Każda ma <b>jedną nić starą i jedną nową</b>.</li>
        </ol>
        <p><b>Znaczenie replikacji:</b> każda komórka potomna dostaje <b>taki sam</b> komplet informacji genetycznej jak komórka macierzysta. Replikacja to podstawa przekazywania informacji genetycznej nowym komórkom i kolejnym pokoleniom.</p>
        <div class="tip">💡 Podwójna helisa to „zamek błyskawiczny”: rozpinasz go, a każda połówka jest wzorem do dobudowania brakującej części.</div>`,
      infographicNote: 'Czytaj od góry: od nukleotydu do cechy organizmu; na dole – jak DNA się kopiuje.',
      infographic: {
        type: 'kroki',
        top: { title: '🧬 DNA', text: 'nośnik informacji genetycznej; głównie w jądrze komórkowym', kolor: 5 },
        items: [
          { title: 'Nukleotyd', text: 'deoksyryboza + reszta kwasu fosforowego + zasada azotowa (A, T, G, C)', kolor: 1 },
          { title: 'Nić DNA', text: 'łańcuch nukleotydów', kolor: 1 },
          { title: 'Podwójna helisa', text: 'dwie nici połączone wiązaniami wodorowymi między zasadami: A–T, G–C', kolor: 1 },
          { title: 'Gen', text: 'odcinek DNA z instrukcją wytworzenia białka', kolor: 3 },
          { title: 'Białko → cecha', text: 'od białek zależą cechy organizmu, np. grupa krwi', kolor: 3 },
        ],
        bottom: { title: '🔁 Replikacja – przed podziałem', items: ['enzymy rozrywają wiązania wodorowe – nici się rozplatają', 'do każdej starej nici dobudowuje się nowa: A–T, G–C', 'wynik: 2 identyczne cząsteczki, każda – nić stara + nowa'], kolor: 4 },
      },
      flashcards: [
        ['DNA', 'Kwas deoksyrybonukleinowy – nośnik informacji genetycznej'],
        ['Gdzie jest DNA w komórce jądrowej?', 'Głównie w jądrze komórkowym; trochę w mitochondriach i chloroplastach'],
        ['Nukleotyd', 'Jednostka budująca DNA: deoksyryboza + reszta kwasu fosforowego + zasada azotowa'],
        ['Zasady azotowe w DNA', 'Adenina (A), tymina (T), guanina (G), cytozyna (C)'],
        ['Komplementarność zasad', 'A łączy się z T, G łączy się z C'],
        ['Podwójna helisa', 'Dwie nici DNA skręcone wokół wspólnej osi, połączone wiązaniami wodorowymi między zasadami'],
        ['Gen', 'Odcinek DNA z informacją o budowie jednego białka'],
        ['Replikacja DNA', 'Kopiowanie DNA przed podziałem komórki'],
        ['Wynik replikacji', 'Dwie identyczne cząsteczki DNA – każda ma jedną nić starą i jedną nową'],
        ['Znaczenie replikacji', 'Komórki potomne dostają taką samą informację genetyczną jak komórka macierzysta'],
      ],
      questions: [
        { id: 'u0jm9j', q: 'Jaką funkcję pełni DNA?', options: ['Jest głównym źródłem energii dla komórki.', 'Przechowuje informację genetyczną.', 'Transportuje tlen we krwi.', 'Buduje ścianę komórkową.'], answer: 1, explain: 'DNA to nośnik informacji genetycznej – instrukcji budowy i działania organizmu.' },
        { id: 'b2li9e', q: 'Który składnik NIE wchodzi w skład nukleotydu DNA?', options: ['deoksyryboza', 'reszta kwasu fosforowego', 'zasada azotowa', 'aminokwas'], answer: 3, explain: 'Nukleotyd to cukier deoksyryboza, reszta kwasu fosforowego i zasada azotowa. Aminokwasy budują białka.' },
        { id: 'zecc48', q: 'Z którą zasadą łączy się adenina w DNA?', options: ['z tyminą', 'z guaniną', 'z cytozyną', 'z inną adeniną'], answer: 0, explain: 'Komplementarność zasad: A–T oraz G–C.' },
        { id: '1xl7dq', q: 'Z którą zasadą łączy się cytozyna w DNA?', options: ['z adeniną', 'z tyminą', 'z guaniną', 'z cytozyną'], answer: 2, explain: 'Cytozyna (C) tworzy parę z guaniną (G).' },
        { id: 'ptqybf', q: 'Jedna nić DNA ma odcinek AATGC. Jaki odcinek jest naprzeciwko w drugiej nici?', options: ['AATGC', 'TTACG', 'GGCAT', 'TTGCA'], answer: 1, explain: 'A→T, A→T, T→A, G→C, C→G, czyli TTACG.' },
        { id: 'ib0avz', q: 'Jedna nić DNA ma odcinek GCTTA. Jaki odcinek jest naprzeciwko w drugiej nici?', options: ['CGAAT', 'GCTTA', 'CGTTA', 'ATTCG'], answer: 0, explain: 'G→C, C→G, T→A, T→A, A→T, czyli CGAAT.' },
        { id: 'd3kv46', q: 'Co łączy obie nici w podwójnej helisie DNA?', options: ['wiązania wodorowe między zasadami azotowymi', 'reszty kwasu fosforowego z obu nici', 'cząsteczki białka', 'błona komórkowa'], answer: 0, explain: 'Zasady azotowe są w środku helisy i łączą się parami (A–T, G–C) wiązaniami wodorowymi. Cukry i fosforany tworzą zewnętrzny szkielet.' },
        { id: 'vpf8pa', q: 'Czym jest gen?', options: ['całą cząsteczką DNA jednego chromosomu', 'jednym nukleotydem', 'odcinkiem DNA z informacją o budowie białka', 'białkiem w jądrze komórkowym'], answer: 2, explain: 'Gen to fragment DNA, który zawiera instrukcję wytworzenia konkretnego białka.' },
        { id: 'juqyvs', q: 'Kiedy zachodzi replikacja DNA?', options: ['po śmierci komórki', 'przed podziałem komórki', 'tylko w czasie zapłodnienia', 'tylko w komórkach roślin'], answer: 1, explain: 'DNA kopiuje się przed podziałem, żeby każda komórka potomna dostała pełny komplet informacji.' },
        { id: 'go70um', q: 'Ile nici „starych” (z cząsteczki macierzystej) ma każda cząsteczka DNA powstała w replikacji?', options: ['żadnej', 'dwie', 'jedną', 'pół nici'], answer: 2, explain: 'Każda nowa cząsteczka ma jedną nić starą (wzór) i jedną dobudowaną nową.' },
        { id: '2tcdhd', q: 'Dlaczego budowa DNA z dwóch komplementarnych nici jest ważna przy replikacji?', options: ['Każda nić jest wzorem do dobudowania drugiej.', 'Dzięki temu DNA nie musi się rozplatać.', 'Dwie nici dają komórce energię.', 'Dzięki temu powstaje więcej zasad A niż T.'], answer: 0, explain: 'Skoro A zawsze pasuje do T, a G do C, jedna nić wyznacza kolejność zasad w drugiej – można ją dokładnie odtworzyć.' },
        { id: '38uujz', q: 'Prawda czy fałsz?\nW wyniku replikacji z jednej cząsteczki DNA powstają dwie identyczne cząsteczki.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Dzięki komplementarności obie cząsteczki potomne mają taką samą kolejność zasad.' },
        { id: 'wzvjjb', q: 'Prawda czy fałsz?\nW DNA guanina łączy się z tyminą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Guanina łączy się z cytozyną, a tymina z adeniną.' },
        { id: 'nd5c7q', q: 'Jaki cukier wchodzi w skład DNA?', options: ['glukoza', 'deoksyryboza', 'sacharoza (zwykły cukier)', 'skrobia'], answer: 1, explain: 'Nazwa „kwas deoksyrybonukleinowy” pochodzi od cukru deoksyrybozy.' },
      ],
    },
    {
      id: 'chromosomy',
      name: 'Chromosomy, mitoza i mejoza',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. V „Genetyka”, wym. 3–5 (budowa chromosomu, liczba chromosomów człowieka, autosomy i chromosomy płci, znaczenie mitozy i mejozy, komórki haploidalne i diploidalne, nowotwory jako skutek niekontrolowanych podziałów i czynniki sprzyjające ich rozwojowi).',
      theory: `
        <h3>Chromosom</h3>
        <p>Gdy komórka się nie dzieli, DNA w jądrze ma postać długich, cienkich nici. W czasie podziału nici się skręcają i tworzą <b>chromosomy</b> – widoczne pod mikroskopem pałeczki.</p>
        <p>Chromosom przed podziałem składa się z <b>dwóch chromatyd</b> połączonych w miejscu zwanym <b>centromerem</b>. Każda chromatyda to jedna cząsteczka DNA.</p>
        <h3>Chromosomy człowieka</h3>
        <ul>
          <li>Komórki ciała (<b>somatyczne</b>) człowieka mają <b>46 chromosomów = 23 pary</b>.</li>
          <li>W parze są dwa podobne chromosomy (<b>homologiczne</b>) – jeden od matki, drugi od ojca.</li>
          <li><b>44 autosomy</b> (22 pary) – jednakowe u kobiet i mężczyzn,</li>
          <li><b>2 chromosomy płci</b>: kobieta <b>XX</b>, mężczyzna <b>XY</b>.</li>
        </ul>
        <h3>Komórki diploidalne i haploidalne</h3>
        <table>
          <tr><th></th><th>diploidalna (2n)</th><th>haploidalna (1n)</th></tr>
          <tr><td>zestaw chromosomów</td><td>podwójny – chromosomy w parach</td><td>pojedynczy – po jednym z pary</td></tr>
          <tr><td>u człowieka</td><td>46 chromosomów</td><td>23 chromosomy</td></tr>
          <tr><td>przykład</td><td>komórki skóry, mięśni, wątroby</td><td><b>gamety</b>: plemnik, komórka jajowa</td></tr>
        </table>
        <p>Przy zapłodnieniu plemnik (23) łączy się z komórką jajową (23) – powstaje diploidalna zygota (46).</p>
        <h3>Mitoza i mejoza</h3>
        <table>
          <tr><th></th><th>mitoza</th><th>mejoza</th></tr>
          <tr><td>ile komórek potomnych</td><td><b>2</b></td><td><b>4</b></td></tr>
          <tr><td>liczba chromosomów</td><td><b>taka sama</b> jak w komórce macierzystej</td><td><b>o połowę mniejsza</b> (2n → 1n)</td></tr>
          <tr><td>materiał genetyczny</td><td>komórki identyczne genetycznie</td><td>komórki różnią się genetycznie</td></tr>
          <tr><td>znaczenie</td><td><b>wzrost</b>, <b>regeneracja</b> (np. gojenie ran), rozmnażanie bezpłciowe</td><td>powstawanie <b>gamet</b>; stała liczba chromosomów w pokoleniach; <b>różnorodność</b> potomstwa</td></tr>
        </table>
        <p>Mitozę mogą przechodzić komórki diploidalne i haploidalne. Mejozę – tylko komórki diploidalne.</p>
        <h3>Nowotwory</h3>
        <p><b>Nowotwór</b> powstaje, gdy komórki zaczynają się dzielić w sposób <b>niekontrolowany</b> – nie reagują na sygnały, które normalnie hamują podziały. Mogą tworzyć guzy w każdym narządzie.</p>
        <p>Rozwojowi nowotworów sprzyjają m.in.:</p>
        <ul>
          <li><b>składniki dymu tytoniowego</b>,</li>
          <li><b>niewłaściwa dieta</b> i niewłaściwy tryb życia,</li>
          <li><b>promieniowanie UV</b> (np. opalanie, solarium) i <b>promieniowanie X</b> (rentgenowskie),</li>
          <li><b>zanieczyszczenia środowiska</b>,</li>
          <li>niektóre wirusy, np. <b>HPV</b> (wirus brodawczaka ludzkiego) – przed zakażeniem chroni szczepienie.</li>
        </ul>
        <div class="tip">💡 <b>Mi</b>toza – <b>mi</b>nimum zmian: 2 kopie jak oryginał. <b>Mej</b>oza – <b>mniej</b> chromosomów: 4 gamety z połową zestawu.</div>`,
      infographicNote: 'U góry – czym jest chromosom; niżej porównuj w poziomie mitozę i mejozę.',
      infographic: {
        type: 'porownanie',
        top: { title: 'Chromosom', text: '2 chromatydy połączone centromerem\nczłowiek: 46 = 44 autosomy + XX lub XY\n2n = 46 (komórki ciała), 1n = 23 (gamety)', kolor: 4 },
        kolumny: [{ title: 'Mitoza', kolor: 1 }, { title: 'Mejoza', kolor: 5 }],
        wiersze: [
          { label: 'ile komórek potomnych', cells: ['2', '4'], bold: true },
          { label: 'liczba chromosomów', cells: ['taka sama', 'o połowę mniejsza (2n → 1n)'] },
          { label: 'materiał genetyczny', cells: ['komórki identyczne', 'komórki różnią się'] },
          { label: 'znaczenie', cells: ['wzrost, regeneracja, rozmnażanie bezpłciowe', 'gamety, różnorodność potomstwa'] },
          { label: 'które komórki mogą się tak dzielić', cells: ['diploidalne i haploidalne', 'tylko diploidalne'] },
        ],
        bottom: { title: '⚠️ Nowotwór', text: 'niekontrolowane podziały komórek. Sprzyjają: dym tytoniowy, zła dieta, UV, promieniowanie X, zanieczyszczenia, wirus HPV', kolor: 2 },
      },
      flashcards: [
        ['Chromosom', 'Skręcona nić DNA widoczna w czasie podziału; przed podziałem – dwie chromatydy połączone centromerem'],
        ['Chromatyda', 'Połówka chromosomu – jedna cząsteczka DNA'],
        ['Centromer', 'Miejsce połączenia dwóch chromatyd'],
        ['Liczba chromosomów w komórce ciała człowieka', '46 (23 pary)'],
        ['Liczba chromosomów w gamecie człowieka', '23'],
        ['Autosomy', 'Chromosomy inne niż chromosomy płci; u człowieka 44 (22 pary)'],
        ['Chromosomy płci', 'Kobieta XX, mężczyzna XY'],
        ['Komórka diploidalna (2n)', 'Ma podwójny zestaw chromosomów (pary), np. komórka skóry'],
        ['Komórka haploidalna (1n)', 'Ma pojedynczy zestaw chromosomów, np. plemnik, komórka jajowa'],
        ['Mitoza', '2 komórki potomne z taką samą liczbą chromosomów; wzrost i regeneracja'],
        ['Mejoza', '4 komórki z połową chromosomów (2n → 1n); powstają gamety'],
        ['Nowotwór', 'Skutek niekontrolowanych podziałów komórek'],
        ['Czynniki sprzyjające nowotworom', 'Dym tytoniowy, zła dieta, UV, promieniowanie X, zanieczyszczenia, wirus HPV'],
      ],
      questions: [
        { id: 'o8jpi6', q: 'Ile chromosomów ma komórka skóry człowieka?', options: ['23', '44', '46', '92'], answer: 2, explain: 'Komórki ciała (somatyczne) człowieka są diploidalne – mają 46 chromosomów, czyli 23 pary.' },
        { id: 'oq7f3g', q: 'Ile chromosomów ma plemnik człowieka?', options: ['23', '46', '22', '24'], answer: 0, explain: 'Gamety są haploidalne – mają pojedynczy zestaw: 23 chromosomy.' },
        { id: 'vj7rqc', q: 'Jak nazywa się miejsce, w którym łączą się dwie chromatydy chromosomu?', options: ['nukleotyd', 'centromer', 'helisa', 'jądro'], answer: 1, explain: 'Chromatydy łączą się w centromerze.' },
        { id: 'slckvi', q: 'Ile autosomów jest w komórce somatycznej człowieka?', options: ['46', '23', '2', '44'], answer: 3, explain: '46 chromosomów to 44 autosomy i 2 chromosomy płci.' },
        { id: 'hj9egf', q: 'Jakie chromosomy płci ma mężczyzna?', options: ['XX', 'XY', 'YY', 'tylko X'], answer: 1, explain: 'Kobieta ma XX, mężczyzna XY.' },
        { id: 'wq2ov8', q: 'Która komórka człowieka jest haploidalna?', options: ['komórka jajowa', 'komórka mięśnia', 'komórka wątroby', 'komórka naskórka'], answer: 0, explain: 'Haploidalne (1n) są gamety: komórka jajowa i plemnik. Pozostałe to komórki somatyczne – diploidalne.' },
        { id: 'zyrn9t', q: 'Ile komórek potomnych powstaje w wyniku mitozy?', options: ['1', '4', '8', '2'], answer: 3, explain: 'Mitoza daje dwie komórki potomne z taką samą liczbą chromosomów jak komórka macierzysta.' },
        { id: '4qrw9h', q: 'Ile komórek powstaje w wyniku mejozy i ile mają chromosomów (u człowieka)?', options: ['2 komórki po 46', '4 komórki po 23', '4 komórki po 46', '2 komórki po 23'], answer: 1, explain: 'Mejoza to podział redukcyjny: z jednej komórki 2n powstają cztery komórki 1n – u człowieka po 23 chromosomy.' },
        { id: 'kamgm0', q: 'Który podział umożliwia gojenie się rany na skórze?', options: ['mejoza', 'replikacja', 'mitoza', 'zapłodnienie'], answer: 2, explain: 'Regeneracja i wzrost to zadania mitozy – powstają nowe, identyczne komórki skóry.' },
        { id: '383sgx', q: 'Dlaczego mejoza jest potrzebna przy rozmnażaniu płciowym?', options: ['Dzięki niej gamety mają o połowę mniej chromosomów niż komórki ciała.', 'Dzięki niej komórki ciała szybciej rosną i goją się rany.', 'Dzięki niej powstają komórki genetycznie identyczne z komórką macierzystą.', 'Dzięki niej DNA nie kopiuje się przed podziałem komórki.'], answer: 0, explain: '23 + 23 = 46. Gdyby gamety miały po 46 chromosomów, w każdym pokoleniu ich liczba by się podwajała.' },
        { id: '3vse3o', q: 'Komórka pewnego zwierzęcia ma 2n = 18. Ile chromosomów będą miały komórki powstałe z niej w mitozie?', options: ['9', '18', '36', '4'], answer: 1, explain: 'W mitozie liczba chromosomów się nie zmienia: 18.' },
        { id: 'vlrnum', q: 'Komórka pewnej rośliny ma 2n = 24. Ile chromosomów będą miały jej gamety?', options: ['48', '24', '12', '6'], answer: 2, explain: 'Gamety powstają w mejozie i mają połowę chromosomów: 24 : 2 = 12.' },
        { id: 'zo08rv', q: 'Czym jest nowotwór?', options: ['zakaźną chorobą wywoływaną zawsze przez bakterie', 'skutkiem niekontrolowanych podziałów komórek', 'prawidłowym etapem wzrostu organizmu', 'brakiem podziałów komórkowych'], answer: 1, explain: 'Komórki nowotworowe nie reagują na sygnały hamujące podziały i dzielą się bez kontroli.' },
        { id: 'sscmse', q: 'Który czynnik sprzyja rozwojowi nowotworów skóry?', options: ['picie dużej ilości wody w ciągu dnia', 'regularny, długi sen w nocy', 'jedzenie warzyw i owoców każdego dnia', 'długie opalanie się i solarium'], answer: 3, explain: 'Promieniowanie UV (słońce, solarium) uszkadza DNA komórek skóry.' },
        { id: 'a8cc6j', q: 'Który wirus jest wymieniany jako czynnik sprzyjający rozwojowi nowotworów?', options: ['HPV', 'wirus grypy', 'wirus ospy wietrznej', 'wirus świnki'], answer: 0, explain: 'Zakażenie niektórymi typami wirusa brodawczaka ludzkiego (HPV) może prowadzić do nowotworu, np. raka szyjki macicy. Chroni przed tym szczepienie.' },
        { id: '9cg4sr', q: 'Prawda czy fałsz?\nKomórki powstałe w wyniku mitozy są identyczne genetycznie z komórką macierzystą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Przed mitozą DNA się kopiuje, a komórki potomne dostają takie same chromosomy.' },
      ],
    },
    {
      id: 'dziedziczenie',
      name: 'Dziedziczenie cech',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. V „Genetyka”, wym. 6 (dziedziczenie jednogenowe; pojęcia: fenotyp, genotyp, gen, allel, homozygota, heterozygota, dominacja, recesywność).',
      theory: `
        <h3>Podstawowe pojęcia</h3>
        <table>
          <tr><th>Pojęcie</th><th>Znaczenie</th></tr>
          <tr><td><b>gen</b></td><td>odcinek DNA z informacją o jakiejś cesze</td></tr>
          <tr><td><b>allel</b></td><td>wersja genu, np. allel „oczy brązowe” i allel „oczy niebieskie”. W komórce ciała każdy gen ma <b>dwa allele</b> – jeden od matki, drugi od ojca</td></tr>
          <tr><td><b>allel dominujący</b></td><td>ujawnia się zawsze, gdy jest obecny; zapisujemy <b>wielką literą</b> (A)</td></tr>
          <tr><td><b>allel recesywny</b></td><td>ujawnia się tylko wtedy, gdy są <b>dwa takie</b> allele; zapisujemy <b>małą literą</b> (a)</td></tr>
          <tr><td><b>homozygota</b></td><td>ma dwa <b>jednakowe</b> allele: AA (dominująca) albo aa (recesywna)</td></tr>
          <tr><td><b>heterozygota</b></td><td>ma dwa <b>różne</b> allele: Aa</td></tr>
          <tr><td><b>genotyp</b></td><td>zestaw alleli, np. Aa</td></tr>
          <tr><td><b>fenotyp</b></td><td>cechy, które można zaobserwować, np. kolor oczu; zależy od genotypu i środowiska</td></tr>
        </table>
        <h3>Jak to działa</h3>
        <p>Przykład: A – allel dominujący, a – allel recesywny.</p>
        <ul>
          <li><b>AA</b> i <b>Aa</b> → ta sama cecha dominująca (w heterozygocie allel a jest „przykryty”),</li>
          <li><b>aa</b> → cecha recesywna.</li>
        </ul>
        <h3>Krzyżówka genetyczna (szachownica)</h3>
        <p>Każdy rodzic przekazuje gamecie <b>jeden</b> z dwóch alleli. Na górze szachownicy wpisujesz gamety jednego rodzica, z boku – drugiego, a w kratkach łączysz allele.</p>
        <p>Rodzice <b>Aa × Aa</b>:</p>
        <table>
          <tr><th></th><th>A</th><th>a</th></tr>
          <tr><th>A</th><td>AA</td><td>Aa</td></tr>
          <tr><th>a</th><td>Aa</td><td>aa</td></tr>
        </table>
        <p>Wynik: AA – 1/4, Aa – 2/4, aa – 1/4. Fenotyp: <b>3/4 (75%)</b> z cechą dominującą, <b>1/4 (25%)</b> z recesywną.</p>
        <p>Rodzice <b>Aa × aa</b>: połowa dzieci Aa, połowa aa – po <b>50%</b>.</p>
        <p>Rodzice <b>AA × aa</b>: wszystkie dzieci Aa – <b>100%</b> z cechą dominującą.</p>
        <div class="tip">💡 Wynik krzyżówki to <b>prawdopodobieństwo</b> dla każdego dziecka, a nie dokładny podział w rodzinie. Rodzice Aa × Aa mogą mieć dwoje dzieci aa.</div>`,
      infographicNote: 'Porównuj w poziomie trzy genotypy; na dole – wyniki krzyżówek.',
      infographic: {
        type: 'porownanie',
        top: { title: 'Allele', text: 'każdy gen ma 2 allele – od matki i od ojca\nA – dominujący, a – recesywny\nfenotyp zależy od genotypu i środowiska', kolor: 4 },
        kolumny: [{ title: 'AA', kolor: 1 }, { title: 'Aa', kolor: 5 }, { title: 'aa', kolor: 3 }],
        wiersze: [
          { label: 'nazwa', cells: ['homozygota dominująca', 'heterozygota', 'homozygota recesywna'] },
          { label: 'allele', cells: ['jednakowe', 'różne', 'jednakowe'] },
          { label: 'fenotyp', cells: ['cecha dominująca', 'cecha dominująca', 'cecha recesywna'] },
          { label: 'gamety (1 allel)', cells: ['tylko A', 'A albo a', 'tylko a'] },
        ],
        bottom: { title: '🎲 Krzyżówki', items: ['Aa × Aa → 75% dominująca, 25% recesywna', 'Aa × aa → 50% dominująca, 50% recesywna', 'AA × aa → 100% Aa'], text: 'prawdopodobieństwo dla każdego dziecka:', kolor: 2 },
      },
      flashcards: [
        ['Allel', 'Wersja genu; w komórce ciała są dwa allele każdego genu'],
        ['Allel dominujący', 'Ujawnia się, gdy jest choć jeden; wielka litera (A)'],
        ['Allel recesywny', 'Ujawnia się tylko w parze aa; mała litera (a)'],
        ['Homozygota', 'Dwa jednakowe allele: AA albo aa'],
        ['Heterozygota', 'Dwa różne allele: Aa'],
        ['Genotyp', 'Zestaw alleli organizmu, np. Aa'],
        ['Fenotyp', 'Obserwowane cechy organizmu; zależy od genotypu i środowiska'],
        ['Aa × Aa – fenotypy dzieci', '75% cecha dominująca, 25% recesywna'],
        ['Aa × aa – fenotypy dzieci', '50% dominująca, 50% recesywna'],
        ['AA × aa – genotyp dzieci', '100% Aa'],
        ['Ile alleli danego genu ma gameta?', 'Jeden'],
      ],
      questions: [
        { id: 'j1fntu', q: 'Jak nazywamy organizm o genotypie Aa?', options: ['homozygota dominująca', 'homozygota recesywna', 'heterozygota', 'gameta'], answer: 2, explain: 'Dwa różne allele (A i a) – to heterozygota.' },
        { id: 'gn2jcx', q: 'Jak nazywamy organizm o genotypie aa?', options: ['homozygota recesywna', 'heterozygota', 'homozygota dominująca', 'mutant'], answer: 0, explain: 'Dwa jednakowe allele recesywne – homozygota recesywna.' },
        { id: '3ujao4', q: 'Czym jest fenotyp?', options: ['zestawem alleli, które organizm ma w komórkach', 'cechami organizmu, które można zaobserwować', 'jednym odcinkiem DNA, który koduje jedną cechę', 'liczbą chromosomów w jądrze komórki'], answer: 1, explain: 'Fenotyp to wygląd i właściwości organizmu, np. kolor oczu. Zestaw alleli to genotyp.' },
        { id: 'me1ias', q: 'Allel A warunkuje cechę dominującą. Które genotypy dają tę cechę?', options: ['tylko AA', 'tylko Aa', 'tylko aa', 'AA i Aa'], answer: 3, explain: 'Allel dominujący ujawnia się, gdy jest choć jeden: AA i Aa.' },
        { id: '636oqx', q: 'Kiedy ujawnia się cecha recesywna?', options: ['gdy organizm ma choć jeden allel recesywny', 'gdy organizm ma dwa allele recesywne', 'zawsze u heterozygoty', 'nigdy'], answer: 1, explain: 'Allel recesywny „przykrywa” allel dominujący. Cecha recesywna jest widoczna tylko u homozygoty aa.' },
        { id: 'dlfaf2', q: 'Ile alleli danego genu ma plemnik?', options: ['jeden', 'dwa', 'cztery', 'żadnego'], answer: 0, explain: 'Gameta jest haploidalna – ma po jednym chromosomie z pary, więc jeden allel każdego genu.' },
        { id: 'hwqt8z', q: 'Rodzice mają genotypy Aa i Aa. Jakie jest prawdopodobieństwo, że dziecko będzie miało genotyp aa?', options: ['0%', '50%', '75%', '25%'], answer: 3, explain: 'Szachownica: AA, Aa, Aa, aa – jedna kratka z czterech, czyli 1/4 = 25%.' },
        { id: 'jpdtp1', q: 'Rodzice mają genotypy Aa i Aa. Jaka część dzieci (statystycznie) będzie miała cechę dominującą?', options: ['25%', '50%', '75%', '100%'], answer: 2, explain: 'AA, Aa, Aa – trzy kratki z czterech mają allel A: 3/4 = 75%.' },
        { id: 'l7t3sj', q: 'Rodzice mają genotypy AA i aa. Jakie genotypy będą miały ich dzieci?', options: ['wszystkie Aa', 'połowa AA, połowa aa', 'wszystkie AA', 'wszystkie aa'], answer: 0, explain: 'Jeden rodzic daje zawsze A, drugi zawsze a – każde dziecko ma Aa.' },
        { id: 'fgq1gr', q: 'Rodzice mają genotypy Aa i aa. Jakie jest prawdopodobieństwo, że dziecko będzie miało cechę recesywną?', options: ['25%', '50%', '0%', '100%'], answer: 1, explain: 'Gamety: A lub a od pierwszego rodzica, a od drugiego. Dzieci: Aa lub aa – po 50%.' },
        { id: 'u8l9rb', q: 'Rodzice mają cechę dominującą, a ich dziecko – recesywną (aa). Jakie genotypy mają rodzice?', options: ['AA i AA', 'AA i Aa', 'Aa i Aa', 'aa i aa'], answer: 2, explain: 'Dziecko aa dostało allel a od każdego rodzica. Rodzice mają cechę dominującą, więc oboje to Aa.' },
        { id: '2i9iyj', q: 'Prawda czy fałsz?\nHomozygota dominująca (AA) i heterozygota (Aa) mają taki sam fenotyp.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. W obu przypadkach jest allel dominujący, więc widać cechę dominującą.' },
        { id: 'asx8xm', q: 'Prawda czy fałsz?\nJeśli rodzice Aa × Aa mają czworo dzieci, to na pewno dokładnie jedno będzie aa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. 25% to prawdopodobieństwo dla każdego dziecka osobno – w konkretnej rodzinie może być różnie.' },
        { id: 'j07e6z', q: 'Od czego zależy fenotyp?', options: ['tylko od środowiska', 'od genotypu i od środowiska', 'tylko od liczby chromosomów', 'tylko od wieku'], answer: 1, explain: 'Fenotyp wynika z genotypu, ale środowisko może go zmieniać (np. opalenizna, wzrost zależny od odżywiania).' },
      ],
      tasks: [
        {
          id: 'ly8o7e',
          points: 2,
          q: 'U pewnej rośliny allel A warunkuje kwiaty czerwone (dominujący), a allel a – białe (recesywny). Skrzyżowano dwie rośliny o genotypie Aa. Zapisz krzyżówkę genetyczną i podaj, jaki procent potomstwa będzie miał kwiaty białe.',
          steps: [
            'Gamety każdego rodzica: A albo a.',
            'Szachownica: AA, Aa, aA, aa.',
            'Kwiaty białe ma tylko genotyp aa – 1 kratka z 4.',
            '1/4 = 25%.',
          ],
          answer: '25% potomstwa ma kwiaty białe (genotyp aa)',
          scoring: [
            '1 pkt – poprawna krzyżówka (gamety A, a i cztery genotypy potomstwa).',
            '1 pkt – poprawny wynik: 25% kwiatów białych.',
          ],
        },
        {
          id: '0eovwb',
          points: 2,
          q: 'U pewnego gatunku zwierząt czarna sierść (allel B) dominuje nad brązową (allel b). Czarny samiec i brązowa samica mają młode czarne i brązowe. Ustal genotyp samca i podaj, jakie jest prawdopodobieństwo, że kolejne młode tej pary będzie brązowe.',
          steps: [
            'Samica jest brązowa (cecha recesywna), więc ma genotyp bb i daje tylko gamety b.',
            'Brązowe młode (bb) musiało dostać allel b także od samca. Samiec jest czarny, więc ma też allel B – jego genotyp to Bb.',
            'Krzyżówka Bb × bb: Bb, Bb, bb, bb.',
            'Brązowe (bb) – 2 kratki z 4 = 50%.',
          ],
          answer: 'Samiec: Bb; prawdopodobieństwo brązowego młodego – 50%',
          scoring: [
            '1 pkt – genotyp samca Bb z uzasadnieniem.',
            '1 pkt – poprawna krzyżówka i wynik 50%.',
          ],
        },
      ],
    },
    {
      id: 'plec-krew',
      name: 'Dziedziczenie płci i grup krwi',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. V „Genetyka”, wym. 7–8 (dziedziczenie płci u człowieka, dziedziczenie grup krwi w układzie AB0 i czynnika Rh).',
      theory: `
        <h3>Dziedziczenie płci</h3>
        <ul>
          <li>Kobieta: <b>XX</b> – każda jej komórka jajowa ma chromosom <b>X</b>.</li>
          <li>Mężczyzna: <b>XY</b> – połowa plemników ma <b>X</b>, połowa <b>Y</b>.</li>
          <li>O płci dziecka decyduje więc <b>plemnik</b>: X + X → dziewczynka (XX), X + Y → chłopiec (XY).</li>
        </ul>
        <table>
          <tr><th></th><th>X (plemnik)</th><th>Y (plemnik)</th></tr>
          <tr><th>X (komórka jajowa)</th><td>XX – dziewczynka</td><td>XY – chłopiec</td></tr>
        </table>
        <p>Szansa na dziewczynkę i na chłopca wynosi za każdym razem <b>50%</b>.</p>
        <h3>Grupy krwi w układzie AB0</h3>
        <p>Gen grupy krwi ma <b>trzy allele</b>: <b>I<sup>A</sup></b>, <b>I<sup>B</sup></b> i <b>i</b>. Każdy człowiek ma dwa z nich.</p>
        <ul>
          <li>I<sup>A</sup> i I<sup>B</sup> są <b>dominujące wobec i</b>.</li>
          <li>I<sup>A</sup> i I<sup>B</sup> są wobec siebie <b>równorzędne</b> – to <b>kodominacja</b>: u osoby I<sup>A</sup>I<sup>B</sup> ujawniają się oba.</li>
        </ul>
        <table>
          <tr><th>Grupa krwi</th><th>Możliwe genotypy</th></tr>
          <tr><td><b>A</b></td><td>I<sup>A</sup>I<sup>A</sup> albo I<sup>A</sup>i</td></tr>
          <tr><td><b>B</b></td><td>I<sup>B</sup>I<sup>B</sup> albo I<sup>B</sup>i</td></tr>
          <tr><td><b>AB</b></td><td>I<sup>A</sup>I<sup>B</sup></td></tr>
          <tr><td><b>0</b></td><td>ii</td></tr>
        </table>
        <p>Grupa krwi zależy od <b>antygenów</b> na powierzchni czerwonych krwinek: grupa A ma antygen A, B – antygen B, AB – oba, 0 – żadnego.</p>
        <h3>Czynnik Rh</h3>
        <p>Czynnik Rh (antygen D) to białko na powierzchni czerwonych krwinek. Allel <b>D</b> jest dominujący, <b>d</b> – recesywny.</p>
        <ul>
          <li><b>DD</b> lub <b>Dd</b> → <b>Rh+</b>,</li>
          <li><b>dd</b> → <b>Rh−</b>.</li>
        </ul>
        <p>Gdy matka ma Rh−, a dziecko odziedziczy po ojcu Rh+, może dojść do <b>konfliktu serologicznego</b>.</p>
        <div class="tip">💡 Dwoje rodziców z grupą A może mieć dziecko z grupą 0 – jeśli oboje mają genotyp I<sup>A</sup>i. Dwoje rodziców Rh+ może mieć dziecko Rh−, jeśli oboje są Dd.</div>`,
      infographicNote: 'U góry płeć, pośrodku allele i cztery grupy krwi, na dole czynnik Rh.',
      infographic: {
        type: 'drzewo',
        top: { title: 'Płeć dziecka – decyduje plemnik', text: 'komórka jajowa: zawsze X; plemnik: X albo Y\nX + X → dziewczynka, X + Y → chłopiec – po 50%', kolor: 4 },
        root: { title: 'Grupy krwi AB0', text: 'allele Iᴬ, Iᴮ, i\nIᴬ i Iᴮ dominują nad i\nIᴬ + Iᴮ – kodominacja: ujawniają się oba', kolor: 1 },
        kolumny: 2,
        branches: [
          { title: 'Grupa A', text: 'IᴬIᴬ albo Iᴬi\nantygen A', kolor: 1 },
          { title: 'Grupa B', text: 'IᴮIᴮ albo Iᴮi\nantygen B', kolor: 1 },
          { title: 'Grupa AB', text: 'IᴬIᴮ\nantygeny A i B', kolor: 5 },
          { title: 'Grupa 0', text: 'ii\nżadnego antygenu', kolor: 3 },
        ],
        bottom: { title: 'Czynnik Rh', text: 'DD lub Dd → Rh+, dd → Rh−\nmatka Rh−, dziecko Rh+ → możliwy konflikt serologiczny', kolor: 2 },
      },
      flashcards: [
        ['Chromosomy płci kobiety', 'XX'],
        ['Chromosomy płci mężczyzny', 'XY'],
        ['Kto decyduje o płci dziecka?', 'Plemnik – niesie X (dziewczynka) albo Y (chłopiec)'],
        ['Szansa na chłopca', '50% przy każdym dziecku'],
        ['Allele grup krwi AB0', 'Iᴬ, Iᴮ, i'],
        ['Kodominacja', 'Oba allele ujawniają się jednocześnie, np. IᴬIᴮ → grupa AB'],
        ['Genotyp grupy 0', 'ii'],
        ['Genotyp grupy AB', 'IᴬIᴮ'],
        ['Genotypy grupy A', 'IᴬIᴬ albo Iᴬi'],
        ['Rh+', 'Genotyp DD albo Dd'],
        ['Rh−', 'Genotyp dd'],
        ['Konflikt serologiczny', 'Może wystąpić, gdy matka ma Rh−, a dziecko Rh+'],
      ],
      questions: [
        { id: '4ynw02', q: 'Jakie chromosomy płci ma każda komórka jajowa?', options: ['X', 'Y', 'X albo Y', 'XY'], answer: 0, explain: 'Kobieta ma XX, więc każda jej komórka jajowa dostaje chromosom X.' },
        { id: 'z7usy0', q: 'Od czego zależy płeć dziecka?', options: ['od tego, czy komórka jajowa ma chromosom X, czy Y', 'od tego, czy plemnik ma chromosom X, czy Y', 'od wieku matki w chwili zapłodnienia', 'od tego, jaką grupę krwi mają oboje rodzice'], answer: 1, explain: 'Komórka jajowa ma zawsze X. Plemnik z X daje dziewczynkę (XX), z Y – chłopca (XY).' },
        { id: '1n6zfo', q: 'Rodzice mają trzy córki. Jakie jest prawdopodobieństwo, że czwarte dziecko będzie chłopcem?', options: ['25%', '75%', '100%', '50%'], answer: 3, explain: 'Każde dziecko to osobne „losowanie”: połowa plemników ma X, połowa Y. Wcześniejsze dzieci nie mają wpływu.' },
        { id: '7z6tdy', q: 'Ile alleli ma gen warunkujący grupy krwi w układzie AB0?', options: ['dwa', 'trzy', 'cztery', 'jeden'], answer: 1, explain: 'Allele Iᴬ, Iᴮ i i. Każdy człowiek ma dwa z nich.' },
        { id: 'mweqh1', q: 'Jaki genotyp ma osoba z grupą krwi 0?', options: ['ii', 'IᴬIᴮ', 'Iᴬi', 'IᴮIᴮ'], answer: 0, explain: 'Grupa 0 to brak alleli Iᴬ i Iᴮ – genotyp ii.' },
        { id: 'pl4ne7', q: 'Jaką grupę krwi ma osoba o genotypie IᴬIᴮ?', options: ['A', 'B', '0', 'AB'], answer: 3, explain: 'Allele Iᴬ i Iᴮ są kodominujące – ujawniają się oba, więc grupa AB.' },
        { id: 'xbsqus', q: 'Jaką grupę krwi ma osoba o genotypie Iᴮi?', options: ['0', 'AB', 'B', 'A'], answer: 2, explain: 'Iᴮ dominuje nad i – grupa B.' },
        { id: 'sbkhd3', q: 'Jak nazywa się zjawisko, w którym u osoby IᴬIᴮ ujawniają się oba allele?', options: ['recesywność', 'kodominacja', 'mutacja', 'replikacja'], answer: 1, explain: 'Allele Iᴬ i Iᴮ są równorzędne – to kodominacja.' },
        { id: 'vndk0c', q: 'Matka ma grupę krwi 0 (ii), a ojciec AB (IᴬIᴮ). Jakie grupy krwi mogą mieć ich dzieci?', options: ['tylko 0', 'tylko AB', 'A albo B', 'A, B, AB albo 0'], answer: 2, explain: 'Matka daje i, ojciec Iᴬ lub Iᴮ. Dzieci: Iᴬi (A) albo Iᴮi (B).' },
        { id: 'kgd0uu', q: 'Oboje rodzice mają grupę A, a dziecko – grupę 0. Jakie genotypy mają rodzice?', options: ['oboje Iᴬi', 'oboje IᴬIᴬ', 'IᴬIᴬ i Iᴬi', 'oboje ii'], answer: 0, explain: 'Dziecko ii dostało allel i od każdego z rodziców. Rodzice mają grupę A, więc oboje to Iᴬi.' },
        { id: 'clo71x', q: 'Jaki genotyp ma osoba z grupą Rh−?', options: ['DD', 'Dd', 'dd', 'DD albo Dd'], answer: 2, explain: 'Allel D jest dominujący. Rh− ma tylko homozygota recesywna dd.' },
        { id: '7apoii', q: 'Oboje rodzice mają genotyp Dd. Jakie jest prawdopodobieństwo, że ich dziecko będzie miało Rh−?', options: ['0%', '25%', '50%', '75%'], answer: 1, explain: 'Dd × Dd: DD, Dd, Dd, dd. Rh− (dd) – 1 z 4 = 25%.' },
        { id: 'm7sf34', q: 'W jakiej sytuacji może dojść do konfliktu serologicznego?', options: ['matka Rh+, dziecko Rh−', 'matka Rh−, dziecko Rh+', 'matka i dziecko Rh+', 'matka i dziecko Rh−'], answer: 1, explain: 'Konflikt może wystąpić, gdy matka ma Rh−, a dziecko odziedziczy po ojcu Rh+.' },
        { id: 'qfgx5y', q: 'Prawda czy fałsz?\nRodzice z grupą krwi AB i 0 mogą mieć dziecko z grupą AB.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Rodzic 0 (ii) zawsze przekazuje allel i, więc dziecko może mieć tylko Iᴬi (A) lub Iᴮi (B).' },
      ],
      tasks: [
        {
          id: 'jxa1rf',
          points: 2,
          q: 'Matka ma grupę krwi A (genotyp Iᴬi), a ojciec grupę B (genotyp Iᴮi). Zapisz krzyżówkę i podaj, jakie grupy krwi mogą mieć ich dzieci i z jakim prawdopodobieństwem.',
          steps: [
            'Gamety matki: Iᴬ albo i. Gamety ojca: Iᴮ albo i.',
            'Szachownica: IᴬIᴮ, Iᴬi, Iᴮi, ii.',
            'Grupy: AB, A, B, 0 – każda w 1 kratce z 4.',
          ],
          answer: 'A, B, AB i 0 – każda z prawdopodobieństwem 25%',
          scoring: [
            '1 pkt – poprawna krzyżówka (gamety i cztery genotypy).',
            '1 pkt – poprawne grupy krwi i prawdopodobieństwa po 25%.',
          ],
        },
      ],
    },
    {
      id: 'mutacje',
      name: 'Mutacje i choroby genetyczne',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. V „Genetyka”, wym. 9–10 (mutacja, mutacje spontaniczne i wywołane przez czynniki mutagenne, choroby genetyczne: mukowiscydoza, zespół Downa).',
      theory: `
        <h3>Mutacja</h3>
        <p><b>Mutacja</b> to nagła, trwała zmiana informacji genetycznej (DNA). Może dotyczyć jednego genu albo całych chromosomów.</p>
        <h3>Przyczyny mutacji</h3>
        <ul>
          <li><b>Mutacje spontaniczne</b> – powstają same, najczęściej przez <b>błędy przy kopiowaniu DNA</b> (replikacji). Komórka naprawia większość takich błędów.</li>
          <li><b>Mutacje wywołane (indukowane)</b> – powodują je czynniki zewnętrzne, tzw. <b>mutageny</b>.</li>
        </ul>
        <table>
          <tr><th>Rodzaj mutagenu</th><th>Przykłady</th></tr>
          <tr><td><b>fizyczne</b></td><td>promieniowanie UV, promieniowanie rentgenowskie (X)</td></tr>
          <tr><td><b>chemiczne</b></td><td>niektóre składniki dymu papierosowego i spalin (np. benzopiren), dioksyny</td></tr>
          <tr><td><b>biologiczne</b></td><td>niektóre wirusy, np. HPV, wirusy zapalenia wątroby typu B i C</td></tr>
        </table>
        <h3>Rodzaje mutacji</h3>
        <ul>
          <li><b>genowe</b> – zmiana kolejności nukleotydów w jednym genie,</li>
          <li><b>chromosomowe</b> – zmiana budowy albo <b>liczby</b> chromosomów.</li>
        </ul>
        <p>Mutacja w komórkach ciała (somatycznych) <b>nie jest dziedziczona</b>, ale może np. przyczynić się do nowotworu. Mutacja w <b>gametach</b> przechodzi na potomstwo.</p>
        <p>Większość drobnych mutacji jest obojętna, niektóre są korzystne, a nieliczne – szkodliwe. Mutacje są źródłem <b>zmienności</b> organizmów.</p>
        <h3>Choroby genetyczne</h3>
        <table>
          <tr><th></th><th>mukowiscydoza</th><th>zespół Downa</th></tr>
          <tr><td>przyczyna</td><td><b>mutacja genowa</b> (gen na chromosomie 7)</td><td><b>mutacja chromosomowa</b> – dodatkowy chromosom 21 (<b>trisomia 21</b>)</td></tr>
          <tr><td>liczba chromosomów</td><td>46</td><td><b>47</b></td></tr>
          <tr><td>dziedziczenie</td><td>allel <b>recesywny</b> – chorują osoby aa; rodzice mogą być zdrowymi nosicielami (Aa)</td><td>najczęściej skutek błędu przy powstawaniu gamet</td></tr>
          <tr><td>objawy</td><td>bardzo gęsty, lepki śluz w drogach oddechowych i układzie pokarmowym – utrudnia oddychanie i trawienie, sprzyja zakażeniom</td><td>charakterystyczne cechy wyglądu, różny stopień niepełnosprawności intelektualnej; ryzyko rośnie z wiekiem matki</td></tr>
        </table>
        <p>Chorób genetycznych <b>nie można się zarazić</b>. Medycyna potrafi łagodzić ich objawy, ale zwykle ich nie wyleczy.</p>
        <div class="tip">💡 <b>M</b>ukowiscydoza – <b>m</b>ały błąd w jednym genie (mutacja genowa). <b>D</b>own – <b>d</b>odatkowy chromosom 21 (mutacja chromosomowa).</div>`,
      infographicNote: 'U góry – skąd się biorą mutacje; niżej porównuj w poziomie dwa rodzaje mutacji.',
      infographic: {
        type: 'porownanie',
        top: { title: 'Mutacja', text: 'nagła, trwała zmiana informacji genetycznej', items: ['spontaniczna – błąd przy kopiowaniu DNA', 'wywołana – mutageny: fizyczne (UV, X), chemiczne (benzopiren, dioksyny), biologiczne (np. HPV)'], kolor: 2 },
        kolumny: [{ title: 'Mutacja genowa', kolor: 1 }, { title: 'Mutacja chromosomowa', kolor: 5 }],
        wiersze: [
          { label: 'co się zmienia', cells: ['kolejność nukleotydów w genie', 'budowa albo liczba chromosomów'] },
          { label: 'przykład choroby', cells: ['mukowiscydoza', 'zespół Downa (trisomia 21)'], bold: true },
          { label: 'liczba chromosomów', cells: ['46', '47'] },
          { label: 'dziedziczenie', cells: ['allel recesywny – chorują aa, nosiciele Aa', 'najczęściej błąd przy powstawaniu gamet'] },
        ],
        bottom: { title: '💡 Zapamiętaj', text: 'mutacja w komórkach ciała nie jest dziedziczona, w gametach – przechodzi na potomstwo. Chorób genetycznych nie można się zarazić.', kolor: 4 },
      },
      flashcards: [
        ['Mutacja', 'Nagła, trwała zmiana informacji genetycznej'],
        ['Mutacja spontaniczna', 'Powstaje sama, np. przez błąd przy kopiowaniu DNA'],
        ['Mutagen', 'Czynnik wywołujący mutacje'],
        ['Mutageny fizyczne', 'Promieniowanie UV, promieniowanie X'],
        ['Mutageny chemiczne', 'Np. benzopiren z dymu papierosowego i spalin, dioksyny'],
        ['Mutageny biologiczne', 'Niektóre wirusy, np. HPV, HBV, HCV'],
        ['Mutacja genowa', 'Zmiana kolejności nukleotydów w genie'],
        ['Mutacja chromosomowa', 'Zmiana budowy lub liczby chromosomów'],
        ['Czy mutacja w komórce skóry jest dziedziczona?', 'Nie – dziedziczone są tylko mutacje w gametach'],
        ['Mukowiscydoza', 'Choroba z mutacji genowej, dziedziczona recesywnie; gęsty śluz w drogach oddechowych i pokarmowych'],
        ['Zespół Downa', 'Trisomia 21 – dodatkowy chromosom 21 (47 chromosomów)'],
      ],
      questions: [
        { id: 'rycek8', q: 'Czym jest mutacja?', options: ['nagłą, trwałą zmianą informacji genetycznej', 'dokładnym kopiowaniem DNA przed podziałem komórki', 'zmianą wyglądu wywołaną opalaniem', 'podziałem komórki'], answer: 0, explain: 'Mutacja zmienia zapis w DNA. Opalenizna to zmiana fenotypu bez zmiany DNA.' },
        { id: 'zm2cbk', q: 'Który czynnik jest mutagenem fizycznym?', options: ['benzopiren z dymu papierosowego', 'wirus brodawczaka ludzkiego (HPV)', 'promieniowanie UV', 'dioksyny'], answer: 2, explain: 'Mutageny fizyczne to promieniowanie UV i rentgenowskie. Benzopiren i dioksyny to mutageny chemiczne, wirus – biologiczny.' },
        { id: 'b1fcnz', q: 'Do której grupy mutagenów należą składniki dymu papierosowego?', options: ['fizycznych', 'biologicznych', 'to nie są mutageny', 'chemicznych'], answer: 3, explain: 'Np. benzopiren z dymu tytoniowego to mutagen chemiczny.' },
        { id: 'goyx67', q: 'Co jest najczęstszą przyczyną mutacji spontanicznych?', options: ['błędy przy kopiowaniu DNA', 'promieniowanie rentgenowskie', 'palenie papierosów', 'zakażenie wirusem'], answer: 0, explain: 'Mutacje spontaniczne powstają bez udziału czynników zewnętrznych – głównie przez błędy w replikacji.' },
        { id: '34wmjs', q: 'Która mutacja może zostać przekazana dzieciom?', options: ['mutacja w komórce skóry spalonej przez słońce', 'mutacja w komórce wątroby', 'mutacja w komórce, z której powstają gamety', 'mutacja w komórce mięśnia szkieletowego'], answer: 2, explain: 'Potomstwo dostaje DNA tylko z gamet. Mutacje somatyczne nie są dziedziczone.' },
        { id: 'rilr6f', q: 'Jaka jest przyczyna zespołu Downa?', options: ['brak chromosomu X', 'dodatkowy chromosom 21', 'mutacja w genie na chromosomie 7', 'zakażenie bakteryjne'], answer: 1, explain: 'Zespół Downa to trisomia 21 – trzy chromosomy 21 zamiast dwóch.' },
        { id: '9re51i', q: 'Ile chromosomów mają komórki ciała osoby z zespołem Downa?', options: ['45', '46', '23', '47'], answer: 3, explain: '46 + 1 dodatkowy chromosom 21 = 47.' },
        { id: 'rrrnoa', q: 'Jaki rodzaj mutacji wywołuje mukowiscydozę?', options: ['mutacja genowa', 'mutacja chromosomowa liczbowa', 'brak całego chromosomu', 'dodatkowy chromosom płci'], answer: 0, explain: 'Mukowiscydozę wywołuje mutacja w jednym genie (na chromosomie 7).' },
        { id: '9o3alm', q: 'Jaki jest główny objaw mukowiscydozy?', options: ['brak czerwonych krwinek we krwi', 'gęsty, lepki śluz w drogach oddechowych', 'dodatkowy palec u ręki', 'zaburzenie widzenia barw i ostrości wzroku'], answer: 1, explain: 'Bardzo gęsty, lepki śluz w drogach oddechowych i układzie pokarmowym utrudnia oddychanie i trawienie oraz sprzyja zakażeniom.' },
        { id: 'fqmfg6', q: 'Mukowiscydoza jest dziedziczona recesywnie. Oboje rodzice są zdrowi, ale są nosicielami (Aa). Jakie jest prawdopodobieństwo, że ich dziecko zachoruje?', options: ['0%', '50%', '25%', '100%'], answer: 2, explain: 'Aa × Aa: AA, Aa, Aa, aa. Choruje tylko aa – 1 z 4 = 25%.' },
        { id: '8vhwa5', q: 'Prawda czy fałsz?\nChorobą genetyczną można zarazić się od chorego człowieka.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Choroby genetyczne wynikają ze zmian w DNA – nie są zakaźne.' },
        { id: 'g8s2zm', q: 'Prawda czy fałsz?\nMutacje mogą być szkodliwe, obojętne albo korzystne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Większość drobnych mutacji jest obojętna; niektóre dają przewagę, a nieliczne szkodzą.' },
        { id: 'oxwmt6', q: 'Dlaczego lekarz zakłada pacjentowi fartuch ochronny przy zdjęciu rentgenowskim?', options: ['żeby było mu ciepło w zimnym gabinecie', 'żeby zdjęcie badanego narządu było wyraźniejsze', 'bo promieniowanie X może wywoływać mutacje', 'bo fartuch zabija bakterie na skórze pacjenta'], answer: 2, explain: 'Promieniowanie rentgenowskie to mutagen fizyczny – osłania się narządy, które nie są badane.' },
      ],
    },
    {
      id: 'ewolucja',
      name: 'Ewolucja życia',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. VI „Ewolucja życia”, wym. 1–3 (istota ewolucji i źródła wiedzy o jej przebiegu, dobór naturalny i sztuczny, podobieństwa i różnice między człowiekiem a małpami człekokształtnymi).',
      theory: `
        <h3>Co to jest ewolucja</h3>
        <p><b>Ewolucja</b> to proces stopniowych i nieodwracalnych zmian grup organizmów, w wyniku którego powstają <b>nowe gatunki</b>, lepiej przystosowane do środowiska. Wszystkie gatunki na Ziemi są ze sobą spokrewnione.</p>
        <h3>Skąd wiemy o ewolucji – dowody</h3>
        <table>
          <tr><th>Dowód</th><th>Co to jest</th><th>Przykład</th></tr>
          <tr><td><b>skamieniałości</b></td><td>szczątki lub odciski dawnych organizmów zachowane w skałach</td><td>kości, muszle, odciski liści i stóp</td></tr>
          <tr><td><b>ogniwa pośrednie</b></td><td>skamieniałości z cechami dwóch różnych grup</td><td>archeopteryks – ptak z cechami gadów</td></tr>
          <tr><td><b>żywe skamieniałości</b></td><td>gatunki niemal niezmienione od milionów lat</td><td>dziobak</td></tr>
          <tr><td><b>narządy homologiczne</b></td><td>wspólne pochodzenie, podobna budowa wewnętrzna, różna funkcja</td><td>ręka człowieka i skrzydło nietoperza</td></tr>
          <tr><td><b>narządy analogiczne</b></td><td>różne pochodzenie, ta sama funkcja</td><td>skrzydło ptaka i skrzydło ważki</td></tr>
          <tr><td><b>narządy szczątkowe</b></td><td>uwstecznione narządy</td><td>kość ogonowa człowieka</td></tr>
          <tr><td><b>jedność budowy</b></td><td>podobny plan budowy i skład chemiczny organizmów</td><td>DNA u wszystkich organizmów</td></tr>
        </table>
        <h3>Dobór naturalny – teoria Darwina</h3>
        <p>Twórcą teorii ewolucji był <b>Karol Darwin</b>. Jej założenia:</p>
        <ol>
          <li>osobniki jednego gatunku <b>różnią się</b> od siebie (zmienność),</li>
          <li>rodzice <b>przekazują cechy</b> potomstwu,</li>
          <li>rodzi się <b>więcej potomstwa, niż może przeżyć</b>,</li>
          <li>osobniki <b>najlepiej przystosowane</b> częściej przeżywają i mają więcej potomstwa – to <b>dobór naturalny</b>.</li>
        </ol>
        <p>Przykład: krępak brzozowy (ćma). Na korze drzew pociemniałej od zanieczyszczeń (bez jasnych porostów) ciemne ćmy były mniej widoczne dla ptaków. Częściej przeżywały i rozmnażały się – ciemnych ciem przybywało.</p>
        <h3>Dobór naturalny a sztuczny</h3>
        <table>
          <tr><th></th><th>dobór naturalny</th><th>dobór sztuczny</th></tr>
          <tr><td>kto wybiera</td><td><b>środowisko</b></td><td><b>człowiek</b></td></tr>
          <tr><td>jakie cechy się utrwalają</td><td>korzystne dla organizmu w danym środowisku</td><td>pożądane przez człowieka (nawet szkodliwe dla organizmu)</td></tr>
          <tr><td>efekt</td><td>ewolucja, nowe gatunki</td><td><b>rasy</b> zwierząt i <b>odmiany</b> roślin, np. rasy psów, odmiany pszenicy</td></tr>
        </table>
        <h3>Człowiek i małpy człekokształtne</h3>
        <p>Człowiek należy do <b>naczelnych</b>. Jego najbliższym krewnym jest <b>szympans</b> (bardzo podobne DNA). Człowiek i małpy człekokształtne (szympansy, goryle, orangutany, gibony) mają <b>wspólnego przodka</b> – człowiek <b>nie pochodzi od szympansa</b>.</p>
        <p><b>Podobieństwa:</b> chwytne dłonie z przeciwstawnym kciukiem, oczy skierowane do przodu, brak ogona, długa opieka nad młodymi.</p>
        <table>
          <tr><th>Cecha</th><th>szympans</th><th>człowiek</th></tr>
          <tr><td>mózg</td><td>ok. 400 cm³</td><td>ok. 1350 cm³</td></tr>
          <tr><td>kręgosłup</td><td>wygięty w łuk</td><td>esowaty (podwójne S)</td></tr>
          <tr><td>miednica</td><td>długa i wąska</td><td>krótka i szeroka</td></tr>
          <tr><td>kończyny</td><td>górne dłuższe od dolnych, wszystkie chwytne</td><td>dolne dłuższe, przystosowane do <b>chodzenia na dwóch nogach</b>; stopa niechwytna</td></tr>
          <tr><td>twarz, zęby</td><td>twarz wysunięta, duże kły</td><td>twarz spłaszczona, małe kły</td></tr>
          <tr><td>owłosienie</td><td>całe ciało</td><td>zredukowane</td></tr>
        </table>
        <div class="tip">💡 Homologiczne – „<b>ho</b>mo” = ten sam <b>początek</b> (pochodzenie). Analogiczne – ta sama <b>praca</b> (funkcja), inne pochodzenie.</div>`,
      infographicNote: 'Czytaj od góry: cztery założenia Darwina prowadzą do ewolucji; na dole – czym różni się dobór sztuczny.',
      infographic: {
        type: 'kroki',
        top: { title: 'Teoria Karola Darwina', text: 'dobór naturalny krok po kroku', kolor: 5 },
        items: [
          { title: '1. Zmienność', text: 'osobniki jednego gatunku różnią się od siebie', kolor: 1 },
          { title: '2. Dziedziczenie', text: 'rodzice przekazują cechy potomstwu', kolor: 1 },
          { title: '3. Nie wszyscy przeżyją', text: 'rodzi się więcej potomstwa, niż może przeżyć', kolor: 1 },
          { title: '4. Dobór naturalny', text: 'najlepiej przystosowani częściej przeżywają i mają więcej potomstwa', items: ['🦋 np. krępak brzozowy: na ciemnej korze ciemne ćmy mniej widoczne dla ptaków – ciemnych przybywało'], kolor: 4 },
          { title: 'Ewolucja', text: 'stopniowe, nieodwracalne zmiany grup organizmów → nowe gatunki', kolor: 3 },
        ],
        bottom: { title: 'Dobór sztuczny', text: 'wybiera człowiek, nie środowisko → rasy zwierząt i odmiany roślin, np. rasy psów', kolor: 2 },
      },
      flashcards: [
        ['Ewolucja', 'Stopniowe, nieodwracalne zmiany grup organizmów, prowadzące do powstania nowych gatunków'],
        ['Skamieniałość', 'Szczątki lub odciski dawnych organizmów zachowane w skałach'],
        ['Ogniwo pośrednie', 'Organizm kopalny z cechami dwóch grup, np. archeopteryks (ptak z cechami gadów)'],
        ['Żywa skamieniałość', 'Gatunek niemal niezmieniony od milionów lat, np. dziobak'],
        ['Narządy homologiczne', 'Wspólne pochodzenie, różne funkcje – ręka człowieka i skrzydło nietoperza'],
        ['Narządy analogiczne', 'Różne pochodzenie, ta sama funkcja – skrzydło ptaka i ważki'],
        ['Narząd szczątkowy u człowieka', 'Kość ogonowa'],
        ['Twórca teorii ewolucji', 'Karol Darwin'],
        ['Dobór naturalny', 'Przeżywają i rozmnażają się osobniki najlepiej przystosowane; wybiera środowisko'],
        ['Dobór sztuczny', 'Człowiek wybiera do rozmnażania osobniki o pożądanych cechach – rasy i odmiany'],
        ['Najbliższy krewny człowieka', 'Szympans (wspólny przodek, nie przodek człowieka)'],
        ['Kręgosłup człowieka', 'Esowaty (podwójne S) – przystosowanie do chodzenia na dwóch nogach'],
      ],
      questions: [
        { id: 'y57r0m', q: 'Czym jest ewolucja?', options: ['zmianami w wyglądzie jednego osobnika w ciągu całego jego życia', 'stopniowymi zmianami grup organizmów przez wiele pokoleń', 'nagłym pojawieniem się wszystkich gatunków naraz', 'wzrostem i rozwojem pojedynczego organizmu'], answer: 1, explain: 'Ewolucja dotyczy grup organizmów (populacji, gatunków), trwa przez wiele pokoleń i prowadzi do powstania nowych gatunków.' },
        { id: '3lpnbb', q: 'Który przykład to para narządów homologicznych?', options: ['skrzydło ptaka i skrzydło ważki', 'płetwa piersiowa rekina i skrzydło motyla', 'ręka człowieka i skrzydło nietoperza', 'oko ośmiornicy i skrzydło ptaka'], answer: 2, explain: 'Ręka człowieka i skrzydło nietoperza mają wspólne pochodzenie i podobną budowę kości, choć służą do czego innego.' },
        { id: '205iap', q: 'Skrzydło ptaka i skrzydło ważki to narządy…', options: ['analogiczne', 'homologiczne', 'szczątkowe', 'identyczne genetycznie'], answer: 0, explain: 'Mają tę samą funkcję (lot), ale różne pochodzenie i budowę – to narządy analogiczne.' },
        { id: 'lwvklh', q: 'Archeopteryks jest przykładem…', options: ['żywej skamieniałości', 'narządu szczątkowego', 'doboru sztucznego', 'ogniwa pośredniego'], answer: 3, explain: 'Archeopteryks to kopalny ptak z cechami gadów – ogniwo pośrednie między dwiema grupami.' },
        { id: 'rnpwi8', q: 'Który narząd człowieka jest narządem szczątkowym?', options: ['serce', 'kość ogonowa', 'płuca', 'przeciwstawny kciuk'], answer: 1, explain: 'Kość ogonowa to uwsteczniony narząd – ślad po przodkach.' },
        { id: 'okhotg', q: 'Kto jest twórcą teorii ewolucji przez dobór naturalny?', options: ['Karol Darwin', 'Mikołaj Kopernik', 'Maria Skłodowska-Curie', 'Ludwik Pasteur'], answer: 0, explain: 'Teorię ewolucji, w której mechanizmem jest dobór naturalny, stworzył Karol Darwin.' },
        { id: 'w20ia3', q: 'Na czym polega dobór naturalny?', options: ['Człowiek wybiera do rozmnażania zwierzęta o cechach, których potrzebuje.', 'Wszystkie osobniki przeżywają i mają tyle samo potomstwa, bez względu na cechy.', 'Najlepiej przystosowane osobniki częściej przeżywają i mają więcej potomstwa.', 'Organizmy zmieniają swoje cechy, bo tego chcą lub potrzebują.'], answer: 2, explain: 'Selekcji dokonuje środowisko – przeżywają lepiej przystosowani i przekazują swoje cechy.' },
        { id: 'lb6d2o', q: 'Który przykład to dobór sztuczny?', options: ['ciemne ćmy częściej przeżywają na ciemnej korze', 'wyhodowanie różnych ras psów', 'szybsze antylopy częściej uciekają lwom', 'rośliny z głębszymi korzeniami lepiej znoszą suszę'], answer: 1, explain: 'Rasy psów powstały, bo człowiek wybierał do rozmnażania osobniki o pożądanych cechach.' },
        { id: 'oo5ppg', q: 'Czym różni się dobór sztuczny od naturalnego?', options: ['W doborze sztucznym wybiera człowiek, w naturalnym – środowisko.', 'Dobór sztuczny zachodzi tylko u roślin uprawnych, a naturalny – u zwierząt.', 'Dobór naturalny prowadzi do ras psów, a sztuczny – do nowych gatunków.', 'Nie ma między nimi różnicy.'], answer: 0, explain: 'Selekcjonerem w doborze sztucznym jest człowiek, w naturalnym – warunki środowiska.' },
        { id: 'bga4oi', q: 'Dlaczego w zanieczyszczonych okolicach przybyło ciemnych krępaków brzozowych?', options: ['Jasne ćmy pobrudziły się sadzą i przekazały ten kolor potomstwu.', 'Na ciemnej korze ciemne ćmy były słabiej widoczne dla ptaków.', 'Jasne ćmy odleciały w inne miejsce.', 'Zanieczyszczenia zabijały tylko ciemne ćmy.'], answer: 1, explain: 'To przykład doboru naturalnego: lepiej ukryte osobniki częściej przeżywały i przekazywały cechę potomstwu.' },
        { id: 'qjldya', q: 'Która cecha jest wspólna dla człowieka i szympansa?', options: ['esowaty kręgosłup w kształcie podwójnego S', 'mózg o objętości ok. 1350 cm³', 'chwytna dłoń z przeciwstawnym kciukiem', 'niechwytna stopa przystosowana do chodzenia'], answer: 2, explain: 'Chwytną dłoń z przeciwstawnym kciukiem mają oba gatunki. Pozostałe cechy są typowe tylko dla człowieka.' },
        { id: 'hhrhuh', q: 'Która cecha człowieka jest przystosowaniem do chodzenia na dwóch nogach?', options: ['krótka i szeroka miednica oraz esowaty kręgosłup', 'duże kły i twarz mocno wysunięta do przodu', 'gęste owłosienie pokrywające całe ciało', 'kończyny górne dłuższe od dolnych i chwytne stopy'], answer: 0, explain: 'Esowaty kręgosłup amortyzuje wstrząsy, a szeroka miednica podpiera narządy przy postawie wyprostowanej.' },
        { id: '140d1y', q: 'Prawda czy fałsz?\nCzłowiek pochodzi od szympansa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Człowiek i szympans mają wspólnego przodka – to dwie osobne linie ewolucyjne.' },
        { id: 'o7nsmc', q: 'Dziobak jest przykładem…', options: ['ogniwa pośredniego', 'narządu homologicznego', 'rasy wyhodowanej przez człowieka', 'żywej skamieniałości'], answer: 3, explain: 'Dziobak to gatunek, który od milionów lat zmienił się niewiele – żywa skamieniałość.' },
      ],
    },
    {
      id: 'ekosystem',
      name: 'Ekosystem i populacja',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. VII „Ekologia i ochrona środowiska”, wym. 1–2 i 7 (żywe i nieożywione elementy ekosystemu i ich powiązania, cechy populacji, zakresy tolerancji na temperaturę i wilgotność).',
      theory: `
        <h3>Ekosystem</h3>
        <p><b>Ekosystem</b> to organizmy żyjące na danym terenie razem ze środowiskiem nieożywionym, z którym są powiązane. Przykłady: las, jezioro, łąka.</p>
        <table>
          <tr><th>Elementy żywe (biocenoza)</th><th>Elementy nieożywione (biotop)</th></tr>
          <tr><td>rośliny, zwierzęta, grzyby, bakterie, protisty</td><td>światło, temperatura, woda, wilgotność, gleba, powietrze, sole mineralne</td></tr>
        </table>
        <p>Elementy są ze sobą powiązane: rośliny potrzebują światła, wody i soli mineralnych; zwierzęta jedzą rośliny; drzewa dają cień i zmieniają wilgotność; grzyby i bakterie rozkładają szczątki i oddają sole mineralne glebie.</p>
        <h3>Populacja i jej cechy</h3>
        <p><b>Populacja</b> to osobniki <b>jednego gatunku</b> żyjące w tym samym miejscu i czasie, które mogą się ze sobą krzyżować.</p>
        <table>
          <tr><th>Cecha</th><th>Co oznacza</th></tr>
          <tr><td><b>liczebność</b></td><td>liczba osobników w populacji</td></tr>
          <tr><td><b>zagęszczenie</b></td><td>liczba osobników na jednostkę powierzchni (lub objętości), np. 20 jeży na 1 km²</td></tr>
          <tr><td><b>rozrodczość</b></td><td>liczba nowych osobników, które przychodzą na świat w danym czasie</td></tr>
          <tr><td><b>śmiertelność</b></td><td>liczba osobników, które giną w danym czasie</td></tr>
          <tr><td><b>struktura przestrzenna</b></td><td>rozmieszczenie: <b>skupiskowe</b> (najczęstsze, np. stado), <b>losowe</b>, <b>równomierne</b> (rzadkie, np. rośliny na plantacji)</td></tr>
          <tr><td><b>struktura wiekowa</b></td><td>udział osobników młodych (przedrozrodczych), dorosłych (rozrodczych) i starych (porozrodczych) – pokazuje ją <b>piramida wieku</b></td></tr>
          <tr><td><b>struktura płciowa</b></td><td>stosunek liczby samic do samców</td></tr>
        </table>
        <p>Piramida wieku z <b>szeroką podstawą</b> (dużo młodych) – populacja <b>rozwijająca się</b>. Z <b>wąską podstawą</b> (mało młodych) – populacja <b>wymierająca</b>.</p>
        <p>Gdy rozrodczość jest większa od śmiertelności, liczebność rośnie; gdy mniejsza – maleje.</p>
        <h3>Zakres tolerancji</h3>
        <p>Każdy organizm może żyć tylko w pewnym zakresie danego czynnika, np. temperatury lub wilgotności. To <b>zakres tolerancji</b>.</p>
        <ul>
          <li><b>minimum</b> i <b>maksimum</b> – granice; poza nimi organizm nie przeżyje,</li>
          <li><b>optimum</b> – najkorzystniejsze wartości; organizm rozwija się najlepiej.</li>
        </ul>
        <p>Zakres tolerancji wyznacza się dla każdego czynnika osobno. Gatunki o <b>szerokim</b> zakresie żyją w wielu miejscach; o <b>wąskim</b> – tylko w nielicznych.</p>
        <div class="tip">💡 Zagęszczenie = liczebność : powierzchnia. 300 sosen na 2 ha → 150 sosen na 1 ha.</div>`,
      infographicNote: 'Od góry: z czego składa się ekosystem, potem cechy populacji i zakres tolerancji.',
      infographic: {
        type: 'drzewo',
        root: { title: 'Ekosystem = żywe + nieożywione', text: 'organizmy i środowisko, powiązane zależnościami', kolor: 5 },
        kolumny: 2,
        branches: [
          { title: 'Elementy żywe', text: 'rośliny, zwierzęta, grzyby, bakterie, protisty', kolor: 3 },
          { title: 'Elementy nieożywione', text: 'światło, temperatura, woda, gleba, powietrze, sole mineralne', kolor: 4 },
          { title: 'Populacja', text: 'jeden gatunek, to samo miejsce i czas', items: ['zagęszczenie = liczebność : powierzchnia', 'rozrodczość > śmiertelność → liczebność rośnie'], kolor: 1 },
          { title: 'Zakres tolerancji', text: 'np. temperatury, wilgotności', items: ['minimum i maksimum – granice przeżycia', 'optimum – rozwój najlepszy'], kolor: 2 },
        ],
        bottom: { title: '📊 Piramida wieku', text: 'szeroka podstawa (dużo młodych) – populacja rozwijająca się; wąska – wymierająca', kolor: 1 },
      },
      flashcards: [
        ['Ekosystem', 'Organizmy danego terenu razem ze środowiskiem nieożywionym, powiązane zależnościami'],
        ['Elementy nieożywione ekosystemu', 'Światło, temperatura, woda, gleba, powietrze, sole mineralne'],
        ['Populacja', 'Osobniki jednego gatunku żyjące w tym samym miejscu i czasie'],
        ['Liczebność', 'Liczba osobników w populacji'],
        ['Zagęszczenie', 'Liczba osobników na jednostkę powierzchni lub objętości'],
        ['Rozrodczość', 'Liczba nowych osobników w danym czasie'],
        ['Śmiertelność', 'Liczba osobników, które giną w danym czasie'],
        ['Najczęstsze rozmieszczenie osobników', 'Skupiskowe'],
        ['Piramida wieku z szeroką podstawą', 'Populacja rozwijająca się – dużo młodych'],
        ['Zakres tolerancji', 'Zakres wartości czynnika (np. temperatury), w którym organizm może żyć'],
        ['Optimum', 'Najkorzystniejsze wartości czynnika dla organizmu'],
      ],
      questions: [
        { id: '2s2dqp', q: 'Który element ekosystemu jest nieożywiony?', options: ['dżdżownica', 'grzyb kapeluszowy', 'temperatura', 'mech torfowiec'], answer: 2, explain: 'Temperatura, światło, woda czy gleba to elementy nieożywione. Pozostałe to organizmy.' },
        { id: 'vkzs3g', q: 'Co jest populacją?', options: ['wszystkie organizmy w lesie', 'wszystkie sarny w jednym lesie', 'sarny i jelenie w jednym lesie', 'wszystkie ssaki w Polsce'], answer: 1, explain: 'Populacja to osobniki jednego gatunku w tym samym miejscu i czasie.' },
        { id: 'dzu874', q: 'Na łące o powierzchni 4 ha żyje 200 zajęcy. Jakie jest zagęszczenie populacji?', options: ['50 zajęcy na 1 ha', '800 zajęcy na 1 ha', '200 zajęcy na 1 ha', '4 zające na 1 ha'], answer: 0, explain: 'Zagęszczenie = 200 : 4 ha = 50 osobników na 1 ha.' },
        { id: 'hbn6e6', q: 'W stawie o powierzchni 2 ha żyje 90 żab. Jakie jest zagęszczenie populacji?', options: ['180 żab na 1 ha', '88 żab na 1 ha', '45 żab na 1 ha', '92 żaby na 1 ha'], answer: 2, explain: '90 : 2 = 45 żab na 1 ha.' },
        { id: 'qkuhu2', q: 'Jakie rozmieszczenie osobników spotyka się w przyrodzie najczęściej?', options: ['równomierne', 'losowe', 'w jednym rzędzie', 'skupiskowe'], answer: 3, explain: 'Najczęstsze jest rozmieszczenie skupiskowe, np. stado, ławica, kępa roślin.' },
        { id: '1lkzuo', q: 'Piramida wieku populacji ma bardzo szeroką podstawę. Co to oznacza?', options: ['Populacja się rozwija – ma dużo młodych osobników.', 'Populacja wymiera – ma bardzo mało młodych osobników.', 'Populacja się starzeje – przeważają w niej stare osobniki.', 'Populacja nie ma samców – są w niej same samice.'], answer: 0, explain: 'Podstawa piramidy to najmłodsze osobniki. Dużo młodych – populacja rośnie.' },
        { id: 'jalats', q: 'W populacji w ciągu roku urodziło się 40 osobników, a zginęło 60. Co się dzieje z liczebnością (bez przyjazdów i odejść)?', options: ['rośnie', 'maleje', 'nie zmienia się', 'nie da się tego ocenić'], answer: 1, explain: 'Śmiertelność (60) jest większa niż rozrodczość (40), więc liczebność spada o 20.' },
        { id: 'ur0501', q: 'Która cecha NIE jest cechą populacji?', options: ['zagęszczenie osobników na 1 km²', 'struktura wiekowa (piramida wieku)', 'kolor oczu jednego osobnika', 'śmiertelność'], answer: 2, explain: 'Kolor oczu to cecha osobnika. Cechy populacji opisują całą grupę.' },
        { id: '5iaxna', q: 'Jak nazywamy najkorzystniejszy dla organizmu zakres danego czynnika?', options: ['minimum', 'maksimum', 'tolerancja zerowa', 'optimum'], answer: 3, explain: 'Optimum to wartości, przy których organizm rozwija się najlepiej. Minimum i maksimum to granice przeżycia.' },
        { id: 'f86hmb', q: 'Co się stanie z organizmem, gdy temperatura przekroczy górną granicę jego tolerancji?', options: ['nie przeżyje', 'będzie się rozwijał najlepiej', 'nic się nie zmieni', 'zacznie się szybciej rozmnażać'], answer: 0, explain: 'Poza zakresem tolerancji (poniżej minimum lub powyżej maksimum) organizm nie może przeżyć.' },
        { id: '5o4207', q: 'Gatunek A żyje w temperaturach od 5 do 35 °C, gatunek B – od 18 do 22 °C. Który ma szerszy zakres tolerancji na temperaturę?', options: ['gatunek B', 'gatunek A', 'oba mają taki sam', 'nie da się porównać'], answer: 1, explain: 'A: 35 − 5 = 30 °C, B: 22 − 18 = 4 °C. Szerszy zakres ma A – może żyć w większej liczbie miejsc.' },
        { id: 'a5n38y', q: 'Prawda czy fałsz?\nZakres tolerancji organizmu wyznacza się osobno dla każdego czynnika środowiska.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Organizm może dobrze znosić wahania temperatury, a słabo – wahania wilgotności.' },
        { id: 'ae38c1', q: 'Który przykład pokazuje powiązanie elementu żywego z nieożywionym?', options: ['lis zjada zająca', 'kleszcz pije krew sarny', 'korony drzew zacieniają dno lasu', 'dwa jelenie walczą o samicę'], answer: 2, explain: 'Drzewa (element żywy) zmieniają ilość światła (element nieożywiony) w dolnych warstwach lasu.' },
      ],
    },
    {
      id: 'zaleznosci',
      name: 'Zależności między organizmami',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. VII „Ekologia i ochrona środowiska”, wym. 3–4 (oddziaływania antagonistyczne: konkurencja wewnątrz- i międzygatunkowa, pasożytnictwo, drapieżnictwo, roślinożerność; nieantagonistyczne: mutualizm, komensalizm).',
      theory: `
        <h3>Dwa rodzaje zależności</h3>
        <ul>
          <li><b>antagonistyczne</b> – co najmniej jedna strona <b>traci</b>,</li>
          <li><b>nieantagonistyczne</b> – <b>nikt nie traci</b>, a co najmniej jedna strona zyskuje.</li>
        </ul>
        <p>Zapis: <b>+</b> zysk, <b>−</b> strata, <b>0</b> bez zmian.</p>
        <h3>Zależności antagonistyczne</h3>
        <table>
          <tr><th>Zależność</th><th>Znaki</th><th>Na czym polega</th><th>Przykład</th></tr>
          <tr><td><b>drapieżnictwo</b></td><td>+ / −</td><td>drapieżnik poluje, zabija i zjada ofiarę</td><td>lis i zając, sowa i mysz</td></tr>
          <tr><td><b>roślinożerność</b></td><td>+ / −</td><td>roślinożerca zjada zwykle tylko część rośliny – roślina może dalej rosnąć</td><td>sarna i młode pędy, mszyce i sok roślin</td></tr>
          <tr><td><b>pasożytnictwo</b></td><td>+ / −</td><td>pasożyt pobiera pokarm od żywiciela, często na nim lub w nim żyje; zwykle go nie zabija, ale osłabia</td><td>kleszcz i sarna, tasiemiec i człowiek</td></tr>
          <tr><td><b>konkurencja</b></td><td>− / −</td><td>organizmy walczą o te same zasoby: pokarm, wodę, światło, miejsce, partnera</td><td>drzewa w lesie o światło</td></tr>
        </table>
        <p><b>Konkurencja wewnątrzgatunkowa</b> – między osobnikami <b>tego samego</b> gatunku (np. dwa jelenie o samicę, sosny w gęstym młodniku o światło). <b>Międzygatunkowa</b> – między <b>różnymi</b> gatunkami (np. lis i myszołów polujące na myszy).</p>
        <p>Drapieżniki zjadają często osobniki najsłabsze – chore, stare, ranne. Tak <b>regulują liczebność</b> ofiar.</p>
        <h3>Zależności nieantagonistyczne</h3>
        <table>
          <tr><th>Zależność</th><th>Znaki</th><th>Na czym polega</th><th>Przykład</th></tr>
          <tr><td><b>mutualizm</b></td><td>+ / +</td><td>obie strony zyskują</td><td>porost (grzyb + glon), mikoryza (grzyb + korzenie drzewa), bakterie brodawkowe + rośliny bobowate (np. łubin, soja, bób)</td></tr>
          <tr><td><b>komensalizm</b></td><td>+ / 0</td><td>jeden zyskuje, drugiemu jest to obojętne</td><td>sęp zjadający resztki ofiary lwa</td></tr>
        </table>
        <p>Przykłady mutualizmu: w <b>porostach</b> glon wytwarza pokarm w fotosyntezie, a grzyb dostarcza wody i soli mineralnych. W <b>mikoryzie</b> grzyb dostarcza drzewu wody i soli mineralnych, a dostaje od niego cukry. <b>Bakterie brodawkowe</b> wiążą azot z powietrza i udostępniają go roślinie.</p>
        <div class="tip">💡 Pasożyt to „sprytny gość” – nie zabija gospodarza, bo straciłby stołówkę. Drapieżnik zabija ofiarę od razu.</div>`,
      infographicNote: 'Każda zależność ma znaki dla obu stron: ⚔️ – ktoś traci, 🤝 – nikt nie traci.',
      infographic: {
        type: 'drzewo',
        top: { title: 'Dwa rodzaje zależności', text: 'zapis: + zysk, − strata, 0 bez zmian', items: ['⚔️ antagonistyczne – co najmniej jedna strona traci', '🤝 nieantagonistyczne – nikt nie traci'], kolor: 4 },
        root: { title: 'Zależności między organizmami', kolor: 5 },
        kolumny: 1,
        branches: [
          { icon: '⚔️', title: 'Drapieżnictwo  + / −', text: 'drapieżnik zabija i zjada ofiarę: lis i zając', kolor: 2 },
          { icon: '⚔️', title: 'Roślinożerność  + / −', text: 'zwierzę zjada część rośliny: sarna i pędy drzew', kolor: 2 },
          { icon: '⚔️', title: 'Pasożytnictwo  + / −', text: 'żyje kosztem żywiciela, zwykle go nie zabija: kleszcz', kolor: 2 },
          { icon: '⚔️', title: 'Konkurencja  − / −', text: 'walka o te same zasoby – w gatunku lub między gatunkami', kolor: 2 },
          { icon: '🤝', title: 'Mutualizm  + / +', text: 'obie strony zyskują: porost, mikoryza, bakterie brodawkowe', kolor: 3 },
          { icon: '🤝', title: 'Komensalizm  + / 0', text: 'jeden zyskuje, drugi nic nie traci: sęp i resztki ofiary lwa', kolor: 3 },
        ],
      },
      flashcards: [
        ['Zależności antagonistyczne', 'Co najmniej jedna strona traci: drapieżnictwo, roślinożerność, pasożytnictwo, konkurencja'],
        ['Zależności nieantagonistyczne', 'Nikt nie traci: mutualizm, komensalizm'],
        ['Drapieżnictwo (+/−)', 'Drapieżnik zabija i zjada ofiarę, np. lis i zając'],
        ['Roślinożerność (+/−)', 'Zwierzę zjada część rośliny, np. sarna i pędy drzew'],
        ['Pasożytnictwo (+/−)', 'Pasożyt żyje kosztem żywiciela, zwykle go nie zabija, np. kleszcz'],
        ['Konkurencja (−/−)', 'Walka o te same zasoby; obie strony tracą'],
        ['Konkurencja wewnątrzgatunkowa', 'Między osobnikami tego samego gatunku'],
        ['Konkurencja międzygatunkowa', 'Między osobnikami różnych gatunków'],
        ['Mutualizm (+/+)', 'Obie strony zyskują, np. porost, mikoryza, bakterie brodawkowe'],
        ['Komensalizm (+/0)', 'Jeden zyskuje, drugi nic nie traci ani nie zyskuje, np. sęp i resztki ofiary lwa'],
        ['Mikoryza', 'Współżycie grzyba z korzeniami rośliny – mutualizm'],
      ],
      questions: [
        { id: 'ov21oj', q: 'Kleszcz pije krew sarny. Jaka to zależność?', options: ['mutualizm', 'pasożytnictwo', 'komensalizm', 'konkurencja'], answer: 1, explain: 'Kleszcz pobiera pokarm od żywiciela i go osłabia, ale zwykle nie zabija – to pasożytnictwo.' },
        { id: 'k5lsi7', q: 'Sowa poluje na mysz. Jaka to zależność?', options: ['drapieżnictwo', 'pasożytnictwo', 'mutualizm', 'roślinożerność'], answer: 0, explain: 'Drapieżnik aktywnie poluje, zabija i zjada ofiarę.' },
        { id: 'md7shz', q: 'W gęstym młodniku sosny rywalizują o światło. Jaka to zależność?', options: ['konkurencja międzygatunkowa', 'pasożytnictwo', 'komensalizm', 'konkurencja wewnątrzgatunkowa'], answer: 3, explain: 'Rywalizują osobniki tego samego gatunku (sosny) – konkurencja wewnątrzgatunkowa.' },
        { id: '6klvfg', q: 'Lis i myszołów polują na te same myszy. Jaka zależność łączy lisa i myszołowa?', options: ['drapieżnictwo', 'mutualizm', 'konkurencja międzygatunkowa', 'konkurencja wewnątrzgatunkowa'], answer: 2, explain: 'Dwa różne gatunki korzystają z tego samego pokarmu – to konkurencja międzygatunkowa. Wewnątrzgatunkowa zachodzi między osobnikami tego samego gatunku.' },
        { id: 'w3cuhz', q: 'Jakimi znakami opisuje się konkurencję?', options: ['+ / +', '− / −', '+ / 0', '+ / −'], answer: 1, explain: 'W konkurencji obie strony tracą, bo zasobów jest mniej dla każdej z nich.' },
        { id: '7rzkbw', q: 'Porost to połączenie grzyba i glonu, w którym obie strony zyskują. Jaka to zależność?', options: ['mutualizm', 'komensalizm', 'pasożytnictwo', 'drapieżnictwo'], answer: 0, explain: 'Obie strony zyskują (+/+) – mutualizm.' },
        { id: 'nkwgo1', q: 'Co zyskuje drzewo dzięki mikoryzie?', options: ['cukry wytwarzane przez grzyb w fotosyntezie', 'światło', 'wodę i sole mineralne od grzyba', 'ochronę przed ptakami'], answer: 2, explain: 'Strzępki grzyba dostarczają korzeniom wody i soli mineralnych, a grzyb dostaje od drzewa cukry. Grzyby nie przeprowadzają fotosyntezy.' },
        { id: 'swyu1u', q: 'Sęp zjada resztki zebry upolowanej przez lwa. Lew już się najadł. Jaka zależność łączy sępa z lwem?', options: ['drapieżnictwo', 'pasożytnictwo', 'mutualizm', 'komensalizm'], answer: 3, explain: 'Sęp zyskuje, a lwu jest to obojętne (+/0) – komensalizm.' },
        { id: '9w7ba4', q: 'Czym roślinożerność różni się zwykle od drapieżnictwa?', options: ['Roślinożerca zjada zwykle część rośliny, która może dalej rosnąć.', 'Roślinożerca nic nie zyskuje, bo rośliny dają mu mało energii.', 'Roślinożerca zawsze zjada całą roślinę razem z korzeniami.', 'Roślinożerność to zależność +/+, a drapieżnictwo +/−.'], answer: 0, explain: 'Drapieżnik zabija ofiarę, a roślinożerca najczęściej zjada liście czy pędy – roślina przeżywa.' },
        { id: 'hm1abr', q: 'Które bakterie żyją w mutualizmie z łubinem i dostarczają mu azotu?', options: ['bakterie mlekowe', 'bakterie brodawkowe', 'bakterie chorobotwórcze', 'sinice w jeziorze'], answer: 1, explain: 'Bakterie brodawkowe w korzeniach roślin bobowatych wiążą azot z powietrza.' },
        { id: '1cqi1w', q: 'Prawda czy fałsz?\nPasożyt zwykle szybko zabija swojego żywiciela.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Pasożyt zwykle nie zabija żywiciela – osłabia go, ale korzysta z niego długo.' },
        { id: 'v5pzj4', q: 'Prawda czy fałsz?\nDrapieżniki często zjadają osobniki chore i słabe, przez co regulują liczebność populacji ofiar.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Najłatwiej upolować osobniki najsłabsze; drapieżnik ogranicza też nadmierny wzrost liczebności ofiar.' },
        { id: 'kmtsba', q: 'Która zależność jest nieantagonistyczna?', options: ['pasożytnictwo', 'konkurencja', 'drapieżnictwo', 'mutualizm'], answer: 3, explain: 'W mutualizmie nikt nie traci – obie strony zyskują.' },
      ],
    },
    {
      id: 'lancuchy',
      name: 'Łańcuchy i sieci pokarmowe',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. VII „Ekologia i ochrona środowiska”, wym. 5–6 (struktura troficzna: producenci, konsumenci I i dalszych rzędów, destruenci; obieg materii i przepływ energii; łańcuchy spasania i sieci troficzne).',
      theory: `
        <h3>Kto kogo zjada – poziomy troficzne</h3>
        <table>
          <tr><th>Grupa</th><th>Co robi</th><th>Przykłady</th></tr>
          <tr><td><b>producenci</b></td><td>wytwarzają materię organiczną z nieorganicznej, korzystając z energii słonecznej (fotosynteza)</td><td>rośliny, glony</td></tr>
          <tr><td><b>konsumenci I rzędu</b></td><td>roślinożercy – jedzą producentów</td><td>zając, gąsienica, mysz</td></tr>
          <tr><td><b>konsumenci II rzędu</b></td><td>drapieżcy – jedzą roślinożerców</td><td>sikora, lis, żaba</td></tr>
          <tr><td><b>konsumenci wyższych rzędów</b></td><td>drapieżcy jedzący innych drapieżców</td><td>krogulec (zjada sikory), szczupak (zjada płocie)</td></tr>
          <tr><td><b>destruenci</b></td><td>rozkładają martwe szczątki i odchody na proste związki nieorganiczne</td><td>bakterie, grzyby</td></tr>
        </table>
        <h3>Łańcuch pokarmowy (spasania)</h3>
        <p>Łańcuch spasania <b>zaczyna się od producenta</b> (żywej rośliny). Strzałka pokazuje, <b>kto jest zjadany przez kogo</b> – kierunek przepływu pokarmu i energii:</p>
        <p><b>trawa → zając → lis</b>&nbsp;&nbsp;·&nbsp;&nbsp;<b>liście dębu → gąsienica → sikora → jastrząb</b></p>
        <h3>Sieć pokarmowa (troficzna)</h3>
        <p>W przyrodzie zwierzęta jedzą różne pokarmy, więc łańcuchy łączą się w <b>sieć pokarmową</b>. Organizm może być w jednym łańcuchu konsumentem I rzędu, a w innym – II rzędu (np. lis jedzący owoce i myszy).</p>
        <p>Gdy z sieci zniknie jeden gatunek, zmieni się liczebność innych. Np. gdy ubędzie lisów, przybędzie myszy, a myszy zjedzą więcej nasion.</p>
        <h3>Materia krąży, energia przepływa</h3>
        <ul>
          <li><b>Materia krąży</b>: producenci budują związki organiczne, konsumenci je zjadają, a destruenci rozkładają szczątki na związki nieorganiczne, które znów pobierają rośliny. Bez destruentów obieg by się zatrzymał.</li>
          <li><b>Energia przepływa w jedną stronę</b>: pochodzi ze Słońca, a na każdym poziomie <b>większość się rozprasza</b> jako ciepło (oddychanie, ruch). Na kolejny poziom przechodzi tylko ok. <b>10%</b>. Dlatego łańcuchy są krótkie, a drapieżców jest mniej niż roślinożerców.</li>
        </ul>
        <div class="tip">💡 Strzałka w łańcuchu = „jest zjadany przez”. Trawa → zając czytasz: trawa jest zjadana przez zająca.</div>`,
      infographicNote: 'Strzałka = „jest zjadany przez”; przerywana strzałka – materia wraca do producentów.',
      infographic: {
        type: 'kroki', cykl: true,
        top: { title: '☀️ Energia Słońca', text: 'płynie w jedną stronę; na kolejny poziom przechodzi ok. 10%, reszta rozprasza się jako ciepło', kolor: 2 },
        items: [
          { title: 'Producenci', text: 'rośliny, glony – materia organiczna dzięki energii Słońca', kolor: 3 },
          { title: 'Konsumenci I rzędu', text: 'roślinożercy, np. zając, gąsienica, mysz', kolor: 1 },
          { title: 'Konsumenci II rzędu', text: 'drapieżcy jedzący roślinożerców, np. sikora, lis', kolor: 1 },
          { title: 'Konsumenci wyższych rzędów', text: 'drapieżcy jedzący drapieżców, np. krogulec', kolor: 1 },
          { title: 'Destruenci', text: 'bakterie, grzyby – rozkładają szczątki na związki nieorganiczne', kolor: 4 },
        ],
        bottom: { title: '🔗 Łańcuch i sieć', text: 'trawa → zając → lis\nłańcuchy łączą się w sieć pokarmową', kolor: 5 },
      },
      flashcards: [
        ['Producenci', 'Wytwarzają materię organiczną dzięki energii Słońca – rośliny, glony'],
        ['Konsumenci I rzędu', 'Roślinożercy'],
        ['Konsumenci II rzędu', 'Drapieżcy jedzący roślinożerców'],
        ['Destruenci', 'Rozkładają martwą materię na związki nieorganiczne – bakterie, grzyby'],
        ['Łańcuch spasania', 'Zaczyna się od producenta, np. trawa → zając → lis'],
        ['Strzałka w łańcuchu', 'Kierunek przepływu pokarmu: „jest zjadany przez”'],
        ['Sieć pokarmowa', 'Połączone ze sobą łańcuchy pokarmowe ekosystemu'],
        ['Obieg materii', 'Materia krąży: producenci → konsumenci → destruenci → producenci'],
        ['Przepływ energii', 'Energia płynie w jedną stronę i na każdym poziomie się rozprasza'],
        ['Ile energii przechodzi na kolejny poziom?', 'Ok. 10%'],
        ['Źródło energii w większości ekosystemów', 'Słońce'],
      ],
      questions: [
        { id: '9ftrim', q: 'Od czego zaczyna się łańcuch spasania?', options: ['od drapieżnika', 'od destruenta', 'od producenta', 'od konsumenta I rzędu'], answer: 2, explain: 'Łańcuch spasania zaczyna się od żywego producenta, np. rośliny.' },
        { id: 'pqi0fj', q: 'Który łańcuch pokarmowy jest zapisany poprawnie?', options: ['lis → zając → trawa', 'trawa → zając → lis', 'zając → trawa → lis', 'trawa → lis → zając'], answer: 1, explain: 'Strzałka wskazuje, kto zjada: trawa jest zjadana przez zająca, a zając przez lisa.' },
        { id: '6kn1kr', q: 'W łańcuchu: liście dębu → gąsienica → sikora → jastrząb, konsumentem II rzędu jest…', options: ['gąsienica', 'jastrząb', 'liście dębu', 'sikora'], answer: 3, explain: 'Liście – producent, gąsienica – konsument I rzędu, sikora – II rzędu, jastrząb – III rzędu.' },
        { id: 'bwvmk4', q: 'W łańcuchu: glony → rozwielitki → płoć → szczupak, producentem są…', options: ['glony', 'rozwielitki', 'płocie', 'szczupaki'], answer: 0, explain: 'Glony przeprowadzają fotosyntezę i wytwarzają materię organiczną – to producenci.' },
        { id: 'k2ligv', q: 'Jaką rolę pełnią destruenci?', options: ['wytwarzają materię organiczną i tlen w fotosyntezie', 'polują na roślinożerców i regulują ich liczebność', 'rozkładają martwe szczątki na związki nieorganiczne', 'zapylają kwiaty'], answer: 2, explain: 'Destruenci (bakterie, grzyby) zamykają obieg materii – oddają środowisku związki, które znów pobierają rośliny.' },
        { id: 'va849x', q: 'Które organizmy są destruentami?', options: ['bakterie i grzyby', 'sarny i jelenie', 'rośliny zielone i glony', 'ptaki drapieżne'], answer: 0, explain: 'Szczątki i odchody rozkładają głównie bakterie i grzyby. Rośliny i glony to producenci.' },
        { id: 'ejsjsd', q: 'Zając w łańcuchu trawa → zając → lis jest…', options: ['producentem', 'konsumentem I rzędu', 'konsumentem II rzędu', 'destruentem'], answer: 1, explain: 'Zając jest roślinożercą – konsumentem I rzędu.' },
        { id: 'rg1vq4', q: 'Dlaczego mówimy, że energia w ekosystemie „przepływa”, a nie krąży?', options: ['Bo energia ze szczątków wraca na koniec do Słońca.', 'Bo na każdym poziomie większość energii rozprasza się jako ciepło.', 'Bo destruenci wytwarzają ze szczątków nową energię dla roślin.', 'Bo energia przechodzi w całości na kolejny poziom, bez żadnych strat.'], answer: 1, explain: 'Energia płynie w jedną stronę: Słońce → producenci → konsumenci, a po drodze się rozprasza i nie wraca do producentów.' },
        { id: 'rr9ub8', q: 'Rośliny na łące zgromadziły 10 000 jednostek energii. Ile mniej więcej trafi do roślinożerców?', options: ['10 000', '5000', '100', '1000'], answer: 3, explain: 'Na kolejny poziom przechodzi ok. 10%: 10% z 10 000 to 1000.' },
        { id: 'id57sv', q: 'Dlaczego w ekosystemie jest mniej drapieżników niż roślinożerców?', options: ['Bo do drapieżników dociera więcej energii niż do roślinożerców.', 'Bo do każdego kolejnego poziomu dociera tylko niewielka część energii.', 'Bo roślinożercy zjadają drapieżniki i ograniczają ich liczebność.', 'Bo drapieżniki nie potrzebują energii.'], answer: 1, explain: 'Na każdym poziomie traci się większość energii – dla wyższych poziomów zostaje jej mało, więc mogą wyżywić mniej osobników.' },
        { id: 'yfp6s7', q: 'W sieci pokarmowej myszy zjadają nasiona, a lisy – myszy. Co się stanie, jeśli liczba lisów gwałtownie spadnie?', options: ['Ubędzie myszy i przybędzie nasion.', 'Nic się nie zmieni.', 'Przybędzie myszy, więc ubędzie nasion.', 'Zginą wszystkie rośliny od razu.'], answer: 2, explain: 'Mniej drapieżników – więcej myszy. Więcej myszy zjada więcej nasion.' },
        { id: '3jhkl1', q: 'Prawda czy fałsz?\nBez destruentów obieg materii w ekosystemie by się zatrzymał.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Szczątki by się gromadziły, a rośliny nie dostawałyby soli mineralnych.' },
        { id: 'lqvzzr', q: 'Prawda czy fałsz?\nTen sam gatunek w jednym łańcuchu może być konsumentem I rzędu, a w innym – II rzędu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Np. lis jedzący owoce jest konsumentem I rzędu, a jedzący myszy – II rzędu.' },
      ],
      tasks: [
        {
          id: 'asshct',
          points: 2,
          q: 'W pewnym ekosystemie: sosny są zjadane przez barczatki (gąsienice motyla), barczatki przez sikory, a sikory przez krogulce. Zapisz łańcuch pokarmowy i wskaż w nim producenta oraz konsumenta II rzędu. Podaj, jak zmieni się liczba barczatek, gdy ubędzie sikor.',
          steps: [
            'Łańcuch (strzałka = „jest zjadany przez”): sosna → barczatka → sikora → krogulec.',
            'Producent: sosna. Konsument I rzędu: barczatka. Konsument II rzędu: sikora. Konsument III rzędu: krogulec.',
            'Mniej sikor – mniej zjadanych barczatek, więc liczba barczatek wzrośnie.',
          ],
          answer: 'sosna → barczatka → sikora → krogulec; producent – sosna, konsument II rzędu – sikora; barczatek przybędzie',
          scoring: [
            '1 pkt – poprawny łańcuch (kierunek strzałek) i wskazanie producenta oraz konsumenta II rzędu.',
            '1 pkt – poprawny wniosek: liczba barczatek wzrośnie.',
          ],
        },
      ],
    },
    {
      id: 'ochrona',
      name: 'Człowiek i ochrona przyrody',
      basis: 'Dz.U. 2024 poz. 996, biologia kl. V–VIII, dz. VII „Ekologia i ochrona środowiska”, wym. 8–9 (zasoby odnawialne i nieodnawialne, zrównoważony rozwój, zagrożenia dla środowiska, w tym antropogeniczna zmiana klimatu) oraz dz. VIII „Zagrożenia różnorodności biologicznej”, wym. 1–4 (poziomy różnorodności, wpływ człowieka, konieczność ochrony, parki narodowe, rezerwaty przyrody, ochrona gatunkowa, pomniki przyrody). Definicje form ochrony – ustawa o ochronie przyrody (tekst jednolity Dz.U. 2026 poz. 1315).',
      theory: `
        <h3>Zasoby przyrody</h3>
        <table>
          <tr><th>Zasoby</th><th>Cecha</th><th>Przykłady</th></tr>
          <tr><td><b>odnawialne</b></td><td>mogą się odnowić – jeśli nie zużywamy ich szybciej, niż się odnawiają</td><td>lasy, gleba, ryby, energia Słońca i wiatru</td></tr>
          <tr><td><b>nieodnawialne</b></td><td>po zużyciu się nie odtworzą</td><td>węgiel, ropa naftowa, gaz ziemny</td></tr>
        </table>
        <p><b>Zrównoważony rozwój</b> – zaspokajamy potrzeby dzisiejszych ludzi tak, żeby <b>przyszłe pokolenia</b> też mogły zaspokoić swoje. W praktyce: wycinamy nie więcej drzew, niż odrośnie; oszczędzamy energię i wodę; segregujemy odpady; korzystamy z energii odnawialnej.</p>
        <h3>Zagrożenia dla środowiska</h3>
        <ul>
          <li><b>zanieczyszczenie powietrza</b> (spaliny, dym) – smog, kwaśne opady,</li>
          <li><b>zanieczyszczenie wód i gleb</b> (ścieki, nawozy, środki ochrony roślin, śmieci),</li>
          <li><b>wycinanie lasów</b>, osuszanie mokradeł,</li>
          <li><b>zmiana klimatu</b> wywołana przez człowieka.</li>
        </ul>
        <h3>Zmiana klimatu</h3>
        <p>Gazy cieplarniane (m.in. <b>dwutlenek węgla</b>, <b>metan</b>) zatrzymują ciepło przy powierzchni Ziemi – to naturalny <b>efekt cieplarniany</b>, dzięki któremu na Ziemi jest życie. Człowiek wzmacnia go, bo <b>spala węgiel, ropę i gaz</b> i <b>wycina lasy</b> – w powietrzu przybywa CO<sub>2</sub>. Skutki: wzrost średniej temperatury, topnienie lodowców, podnoszenie się poziomu mórz, zagrożenie dla wielu gatunków.</p>
        <p>Jak przeciwdziałać: oszczędzać energię, korzystać z energii odnawialnej, z transportu publicznego i roweru, sadzić i chronić lasy.</p>
        <h3>Różnorodność biologiczna</h3>
        <table>
          <tr><th>Poziom</th><th>Co oznacza</th></tr>
          <tr><td><b>genetyczny</b></td><td>różnice między osobnikami jednego gatunku (różne allele)</td></tr>
          <tr><td><b>gatunkowy</b></td><td>liczba gatunków na danym obszarze</td></tr>
          <tr><td><b>ekosystemowy</b></td><td>różnorodność ekosystemów: lasy, łąki, jeziora, torfowiska…</td></tr>
        </table>
        <p>Człowiek zmniejsza różnorodność przez <b>niszczenie siedlisk</b>, <b>zanieczyszczenia</b>, <b>nadmierne polowania i połowy</b> oraz sprowadzanie <b>gatunków obcych</b>, które stają się inwazyjne (np. <b>barszcz Sosnowskiego</b> wypiera rodzime rośliny). W Polsce wyginęły m.in. <b>tur</b> i <b>tarpan</b>. <b>Żubra</b> uratowano – dzięki hodowli i wypuszczeniu na wolność (od 1952 r. w Puszczy Białowieskiej).</p>
        <p><b>Dlaczego chronić?</b> Różnorodne ekosystemy są stabilniejsze; przyroda daje nam pokarm, leki, tlen, czystą wodę i surowce; każdy wymarły gatunek znika na zawsze.</p>
        <h3>Formy ochrony przyrody w Polsce</h3>
        <table>
          <tr><th>Forma</th><th>Co chroni</th></tr>
          <tr><td><b>park narodowy</b></td><td>obszar o powierzchni co najmniej 1000 ha, o szczególnych wartościach; chroniona jest <b>cała przyroda</b></td></tr>
          <tr><td><b>rezerwat przyrody</b></td><td>mniejszy obszar o naturalnych lub mało zmienionych ekosystemach, np. fragment starego lasu, torfowisko</td></tr>
          <tr><td><b>ochrona gatunkowa</b></td><td>rzadkie i zagrożone gatunki (np. żubr, ryś, rosiczka) – nie wolno ich zabijać, zrywać, niszczyć ich siedlisk; ochrona <b>ścisła</b> albo <b>częściowa</b></td></tr>
          <tr><td><b>pomnik przyrody</b></td><td>pojedynczy twór przyrody, np. stare drzewo okazałych rozmiarów, głaz narzutowy, jaskinia</td></tr>
        </table>
        <div class="tip">💡 Od największego do najmniejszego: park narodowy (cała przyroda dużego obszaru) → rezerwat (mniejszy obszar) → pomnik przyrody (jeden obiekt).</div>`,
      infographicNote: 'Czytaj od góry: działania człowieka → skutki → co chronimy i jak.',
      infographic: {
        type: 'kroki',
        items: [
          { title: 'Człowiek', text: 'spala węgiel, ropę i gaz, wycina lasy, niszczy siedliska, zanieczyszcza, sprowadza gatunki obce', kolor: 2 },
          { title: 'Skutki', items: ['więcej CO₂ → zmiana klimatu: cieplej, topnieją lodowce', 'smog, kwaśne opady, zanieczyszczone wody i gleby'], kolor: 2 },
          { title: 'Maleje różnorodność biologiczna', text: 'na poziomie genetycznym, gatunkowym, ekosystemowym; w Polsce wyginęły m.in. tur i tarpan', kolor: 4 },
          { title: 'Ochrona przyrody', items: ['park narodowy – cała przyroda, co najmniej 1000 ha', 'rezerwat przyrody – mniejszy obszar', 'pomnik przyrody – pojedynczy twór, np. głaz narzutowy', 'ochrona gatunkowa – rzadkie gatunki, np. żubr'], kolor: 3 },
        ],
        bottom: { title: '♻️ Zrównoważony rozwój', text: 'dzisiejsze potrzeby bez odbierania szans przyszłym pokoleniom; zasoby nieodnawialne (węgiel, ropa, gaz) się nie odtworzą', kolor: 3 },
      },
      flashcards: [
        ['Zasoby odnawialne', 'Mogą się odnowić, np. lasy, gleba, ryby, energia Słońca i wiatru'],
        ['Zasoby nieodnawialne', 'Nie odtwarzają się, np. węgiel, ropa naftowa, gaz ziemny'],
        ['Zrównoważony rozwój', 'Zaspokajanie dzisiejszych potrzeb bez odbierania szans przyszłym pokoleniom'],
        ['Gazy cieplarniane', 'M.in. dwutlenek węgla i metan – zatrzymują ciepło przy powierzchni Ziemi'],
        ['Jak człowiek wzmacnia efekt cieplarniany?', 'Spala węgiel, ropę i gaz, wycina lasy – przybywa CO₂'],
        ['Poziomy różnorodności biologicznej', 'Genetyczny, gatunkowy, ekosystemowy'],
        ['Gatunek inwazyjny', 'Obcy gatunek, który się rozprzestrzenia i wypiera rodzime, np. barszcz Sosnowskiego'],
        ['Gatunki wymarłe w Polsce', 'Np. tur i tarpan'],
        ['Park narodowy', 'Obszar ≥ 1000 ha; chroniona cała przyroda'],
        ['Rezerwat przyrody', 'Mniejszy obszar z naturalnymi lub mało zmienionymi ekosystemami'],
        ['Ochrona gatunkowa', 'Ochrona rzadkich i zagrożonych gatunków – ścisła albo częściowa'],
        ['Pomnik przyrody', 'Pojedynczy twór przyrody, np. okazałe stare drzewo, głaz narzutowy'],
      ],
      questions: [
        { id: 'k83z3a', q: 'Który zasób jest nieodnawialny?', options: ['las', 'energia wiatru', 'ropa naftowa', 'ryby w morzu'], answer: 2, explain: 'Ropa naftowa powstawała przez miliony lat – po zużyciu się nie odtworzy.' },
        { id: 'wbeh52', q: 'Który zasób jest odnawialny?', options: ['węgiel kamienny', 'gaz ziemny', 'energia słoneczna', 'ropa naftowa'], answer: 2, explain: 'Energia Słońca się nie wyczerpuje. Węgiel, gaz i ropa to zasoby nieodnawialne.' },
        { id: 'exohnw', q: 'Które działanie jest zgodne z zasadą zrównoważonego rozwoju?', options: ['wycięcie całego lasu na raz', 'sadzenie tylu drzew, ile się wycina', 'odławianie wszystkich ryb w jeziorze', 'wylewanie ścieków do rzeki'], answer: 1, explain: 'Zasoby odnawialne trzeba wykorzystywać tak, żeby zdążyły się odnowić – dla przyszłych pokoleń.' },
        { id: 'mjy44w', q: 'Jaka działalność człowieka najbardziej zwiększa ilość CO₂ w powietrzu?', options: ['spalanie węgla, ropy i gazu', 'sadzenie lasów i zakładanie parków', 'jazda na rowerze zamiast samochodem', 'segregowanie odpadów'], answer: 0, explain: 'Spalanie paliw kopalnych uwalnia dwutlenek węgla – gaz cieplarniany.' },
        { id: 'jjp888', q: 'Który skutek jest związany z ocieplaniem się klimatu?', options: ['przyrost lodowców i spadek poziomu mórz', 'spadek średniej temperatury na Ziemi', 'topnienie lodowców i wzrost poziomu mórz', 'zanik naturalnego efektu cieplarnianego'], answer: 2, explain: 'Wyższa temperatura topi lodowce, a woda z nich podnosi poziom mórz.' },
        { id: '7ydtcs', q: 'Prawda czy fałsz?\nEfekt cieplarniany jest zjawiskiem naturalnym, a człowiek go wzmacnia.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Bez naturalnego efektu cieplarnianego na Ziemi byłoby za zimno do życia. Człowiek wzmacnia go emisją gazów cieplarnianych.' },
        { id: 'k0ce3b', q: 'Różne kolory muszli ślimaków jednego gatunku to przykład różnorodności…', options: ['ekosystemowej', 'gatunkowej', 'genetycznej', 'krajobrazowej'], answer: 2, explain: 'Różnice między osobnikami jednego gatunku wynikają z różnych alleli – to różnorodność genetyczna.' },
        { id: '6z9il9', q: 'Liczba gatunków ptaków w parku to miara różnorodności…', options: ['gatunkowej', 'genetycznej', 'ekosystemowej', 'populacyjnej'], answer: 0, explain: 'Różnorodność gatunkowa to liczba gatunków na danym obszarze.' },
        { id: 'f801xq', q: 'Dlaczego barszcz Sosnowskiego jest groźny dla przyrody?', options: ['bo jest gatunkiem wymarłym, jak tur i tarpan', 'bo jako gatunek inwazyjny wypiera rodzime rośliny', 'bo zjada inne rośliny', 'bo jest pod ochroną i nie wolno go usuwać'], answer: 1, explain: 'To obcy gatunek, który szybko się rozprzestrzenia i konkuruje z rodzimymi roślinami o światło i wodę.' },
        { id: 'x13lw6', q: 'Który gatunek całkowicie wyginął w Polsce?', options: ['żubr', 'ryś', 'bocian biały', 'tur'], answer: 3, explain: 'Tur (dziki przodek bydła) wyginął. Żubra uratowano dzięki hodowli i wypuszczeniu na wolność.' },
        { id: '87549g', q: 'Która forma ochrony przyrody obejmuje największy obszar i chroni całą przyrodę?', options: ['park narodowy', 'pomnik przyrody', 'ochrona gatunkowa', 'rezerwat przyrody'], answer: 0, explain: 'Park narodowy to obszar co najmniej 1000 ha, na którym chroniona jest cała przyroda.' },
        { id: 'nia1y3', q: 'Stary dąb okazałych rozmiarów przy drodze może zostać objęty ochroną jako…', options: ['park narodowy', 'pomnik przyrody', 'rezerwat przyrody', 'gatunek chroniony'], answer: 1, explain: 'Pomnik przyrody to pojedynczy twór przyrody, np. okazałe drzewo lub głaz narzutowy.' },
        { id: 'rvpd5n', q: 'Co oznacza ochrona gatunkowa?', options: ['Gatunek wolno zbierać i łowić tylko w niedziele i święta.', 'Chroniony jest jeden obszar razem z całą jego przyrodą.', 'Rzadkich i zagrożonych gatunków nie wolno zabijać ani zrywać.', 'Wszystkie osobniki gatunku trzyma się wyłącznie w zoo.'], answer: 2, explain: 'Ochrona gatunkowa obejmuje rzadkie i zagrożone gatunki (nie wolno też niszczyć ich siedlisk) – na terenie całego kraju. Ochrona całego obszaru to np. park narodowy albo rezerwat.' },
        { id: 'tjfp8m', q: 'Który argument najlepiej uzasadnia ochronę różnorodności biologicznej?', options: ['Wymarłego gatunku nie da się już odtworzyć.', 'Rzadkie gatunki są zawsze najładniejsze.', 'Ochrona przyrody zwiększa liczbę samochodów.', 'Bez ochrony wszystkie gatunki rozmnożyłyby się za bardzo.'], answer: 0, explain: 'Gatunek wymarły znika na zawsze, a bogate ekosystemy lepiej znoszą zmiany i dają ludziom pokarm, leki i surowce.' },
      ],
    },
  ],
});
