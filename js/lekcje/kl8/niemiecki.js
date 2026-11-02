/* Lekcje – język niemiecki (drugi język obcy, wariant II.2), klasa 8. Klucz: 'niemiecki/<id działu>'. Format: docs/LEKCJE.md. */
window.LESSONS = window.LESSONS || {};

/* Kolory w rysunkach: der = f1 (niebieski), die = f2 (pomarańczowy), das = f3 (zielony), liczba mnoga = f5 (fioletowy).
 * Pozostałe wyróżnienia (czasownik, dymki dialogów) – f4 / f5 / bg. */

window.LESSONS['niemiecki/kennenlernen'] = [
  {
    title: 'Pierwsza rozmowa po niemiecku',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Dialog w dymkach. Paul: Hallo! Wie heißt du? Ola: Ich heiße Ola. Paul: Woher kommst du? Ola: Ich komme aus Polen. Paul: Wie alt bist du? Ola: Ich bin 14.">
      <g class="f4 s4 sw"><rect x="34" y="8" width="210" height="32" rx="14"/><rect x="34" y="84" width="210" height="32" rx="14"/><rect x="34" y="160" width="210" height="32" rx="14"/></g>
      <g class="f5 s5 sw"><rect x="156" y="46" width="210" height="32" rx="14"/><rect x="156" y="122" width="210" height="32" rx="14"/><rect x="156" y="198" width="210" height="32" rx="14"/></g>
      <g class="tx"><text x="6" y="30">🧑</text><text x="6" y="106">🧑</text><text x="6" y="182">🧑</text>
        <text x="372" y="68">👧</text><text x="372" y="144">👧</text><text x="372" y="220">👧</text></g>
      <g class="tx"><text x="46" y="30">Hallo! Wie heißt du?</text><text x="168" y="68">Ich heiße Ola.</text>
        <text x="46" y="106">Woher kommst du?</text><text x="168" y="144">Ich komme aus Polen.</text>
        <text x="46" y="182">Wie alt bist du?</text><text x="168" y="220">Ich bin 14.</text></g>
    </svg>`,
    text: `<p>W tym dziale uczysz się <b>pierwszej rozmowy</b>: przywitać się, powiedzieć, jak masz na imię, ile masz lat, skąd jesteś i gdzie mieszkasz – i zapytać o to samo drugą osobę.</p>
      <p>To pięć pytań, które usłyszysz na każdej wymianie, obozie czy w grze online z Niemcami. Znasz je – rozmowa ruszy sama.</p>`,
    remember: 'Wie heißt du? · Wie alt bist du? · Woher kommst du? · Wo wohnst du? · Wie geht\'s?',
    hook: 'Odpowiedź „odbija” pytanie: Wie heißt du? → Ich heiße… · Woher kommst du? → Ich komme aus… Czasownik ten sam, zmienia się tylko końcówka.',
  },
  {
    title: 'Cześć, do widzenia – i „du” czy „Sie”?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Powitania: Hallo, Guten Morgen, Guten Tag, Guten Abend. Pożegnania: Tschüs, Auf Wiedersehen, Bis morgen, Gute Nacht. Na dole: du – do kolegi i rodziny, Sie – do dorosłej obcej osoby">
      <rect x="10" y="8" width="185" height="150" rx="12" class="f4 s4 sw"/><rect x="205" y="8" width="185" height="150" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">👋 witamy się</text><text x="297" y="36">🚪 żegnamy się</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="66">Hallo!</text><text x="102" y="92">Guten Morgen!</text><text x="102" y="118">Guten Tag!</text><text x="102" y="144">Guten Abend!</text>
        <text x="297" y="66">Tschüs!</text><text x="297" y="92">Auf Wiedersehen!</text><text x="297" y="118">Bis morgen!</text><text x="297" y="144">Gute Nacht!</text></g>
      <rect x="10" y="172" width="185" height="48" rx="10" class="bg ln"/><rect x="205" y="172" width="185" height="48" rx="10" class="bg ln"/>
      <g class="tx-b"><text x="24" y="202">du</text><text x="219" y="202">Sie</text></g>
      <g class="tx-s"><text x="60" y="201">kolega, rodzina</text><text x="262" y="201">dorosły, obcy</text></g>
    </svg>`,
    text: `<p><i>Hallo!</i> i <i>Tschüs!</i> mówisz do znajomych. <i>Guten Tag!</i> i <i>Auf Wiedersehen!</i> pasują wszędzie, także do dorosłych. Rano – <i>Guten Morgen!</i>, wieczorem – <i>Guten Abend!</i>, na dobranoc – <i>Gute Nacht!</i></p>
      <p>Do dorosłej, obcej osoby mówisz <b>Sie</b> (zawsze wielką literą): <i>Wie heißen Sie? Woher kommen Sie? Wie geht es Ihnen?</i></p>`,
    remember: 'Sie (wielką literą) = pan / pani. Czasownik przy Sie ma końcówkę -en: Wie heißen Sie?',
    hook: 'Sie piszesz wielką literą, bo to forma z szacunkiem – „wielka” osoba.',
    check: { q: 'Który zwrot jest pożegnaniem?', options: ['Guten Tag!', 'Auf Wiedersehen!', 'Guten Morgen!'], answer: 1, explain: 'Auf Wiedersehen – do widzenia. Guten Tag i Guten Morgen to powitania.' },
  },
  {
    title: 'Końcówki czasownika: e – st – t',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Odmiana w czasie teraźniejszym. wohnen: ich wohne, du wohnst, er sie es wohnt, wir wohnen, ihr wohnt, sie Sie wohnen. sein: bin, bist, ist, sind, seid, sind">
      <g class="f4"><rect x="10" y="32" width="380" height="30" rx="6"/><rect x="10" y="96" width="380" height="30" rx="6"/><rect x="10" y="160" width="380" height="30" rx="6"/></g>
      <g class="ln-thin"><line x1="135" y1="32" x2="135" y2="222"/><line x1="270" y1="32" x2="270" y2="222"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="22">osoba</text><text x="202" y="22">wohnen (mieszkać)</text><text x="330" y="22">sein (być)</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="53">ich</text><text x="70" y="85">du</text><text x="70" y="117">er / sie / es</text><text x="70" y="149">wir</text><text x="70" y="181">ihr</text><text x="70" y="213">sie / Sie</text>
        <text x="202" y="53">wohn<tspan class="tx-b t5">e</tspan></text><text x="202" y="85">wohn<tspan class="tx-b t5">st</tspan></text><text x="202" y="117">wohn<tspan class="tx-b t5">t</tspan></text>
        <text x="202" y="149">wohn<tspan class="tx-b t5">en</tspan></text><text x="202" y="181">wohn<tspan class="tx-b t5">t</tspan></text><text x="202" y="213">wohn<tspan class="tx-b t5">en</tspan></text></g>
      <g class="tx-b" text-anchor="middle"><text x="330" y="53">bin</text><text x="330" y="85">bist</text><text x="330" y="117">ist</text><text x="330" y="149">sind</text><text x="330" y="181">seid</text><text x="330" y="213">sind</text></g>
    </svg>`,
    text: `<p>Czasownik ma temat (<i>wohn-</i>) i końcówkę, która zależy od osoby. Tak samo odmienisz <i>kommen</i> (ich komme, du kommst, er kommt) i większość czasowników.</p>
      <p><b>sein</b> (być) jest nieregularny – tę tabelkę trzeba po prostu umieć: <i>ich bin, du bist, er ist, wir sind, ihr seid, sie sind</i>.</p>`,
    remember: 'heißen: du heißt, er heißt – bez dodatkowego „s”, bo temat kończy się na ß.',
    hook: 'Rytm „e – st – t” jak odliczanie: ich wohne, du wohnst, er wohnt. A wir i sie/Sie brzmią jak bezokolicznik: wohnen.',
    check: { q: 'Ihr ___ in Berlin.', options: ['wohnen', 'wohnt', 'wohnst'], answer: 1, explain: 'ihr ma końcówkę -t (tak jak er): ihr wohnt.' },
  },
  {
    title: 'Jak zadać pytanie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Szyk pytań. Pytanie ze słówkiem pytającym: Wo, wohnst, du? Pytanie tak/nie: Kommst, du, aus Polen? – czasownik na początku. Słówka: wer kto, was co, wo gdzie, woher skąd, wie jak">
      <text x="10" y="18" class="tx-s">pytanie ze słówkiem pytającym</text>
      <rect x="10" y="26" width="100" height="40" rx="8" class="f5 s5 sw"/><rect x="120" y="26" width="130" height="40" rx="8" class="f4 s4 sw"/><rect x="260" y="26" width="130" height="40" rx="8" class="bg ln"/>
      <g class="tx-b" text-anchor="middle"><text x="60" y="52">Wo</text><text x="185" y="52">wohnst</text><text x="325" y="52">du?</text></g>
      <text x="10" y="92" class="tx-s">pytanie „tak / nie” – czasownik na początku</text>
      <rect x="10" y="100" width="130" height="40" rx="8" class="f4 s4 sw"/><rect x="150" y="100" width="80" height="40" rx="8" class="bg ln"/><rect x="240" y="100" width="150" height="40" rx="8" class="bg ln"/>
      <g class="tx-b" text-anchor="middle"><text x="75" y="126">Kommst</text><text x="190" y="126">du</text><text x="315" y="126">aus Polen?</text></g>
      <g class="tx" text-anchor="middle"><text x="200" y="166"><tspan class="tx-b">wer?</tspan> kto · <tspan class="tx-b">was?</tspan> co · <tspan class="tx-b">wo?</tspan> gdzie</text>
        <text x="200" y="192"><tspan class="tx-b">woher?</tspan> skąd · <tspan class="tx-b">wie?</tspan> jak</text></g>
    </svg>`,
    text: `<p>Pytanie ze słówkiem pytającym: <b>słówko + czasownik + osoba</b> – <i>Wo wohnst du?</i> (Gdzie mieszkasz?).</p>
      <p>Pytanie „tak/nie”: <b>czasownik na początku</b> – <i>Kommst du aus Polen?</i> Odpowiadasz <i>Ja.</i> albo <i>Nein.</i></p>
      <p>Uwaga: <i>wo?</i> = gdzie (<i>Wo wohnst du?</i>), a <i>woher?</i> = skąd (<i>Woher kommst du?</i>).</p>`,
    remember: 'Słówko pytające → od razu czasownik → potem osoba.',
    hook: 'Wszystkie te słówka zaczynają się na W: wer, was, wo, woher, wie – „W-pytania”. Żółty kafelek = czasownik (tak będzie w każdej lekcji).',
    check: { q: 'Które pytanie jest poprawne?', options: ['Wo du wohnst?', 'Wo wohnst du?', 'Wohnst wo du?'], answer: 1, explain: 'Po słówku pytającym od razu stoi czasownik, potem osoba: Wo wohnst du?' },
  },
  {
    title: 'Liczby i typowe pułapki',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="21 to einundzwanzig: najpierw jedności ein, potem und, potem dziesiątki zwanzig. 34 = vierunddreißig, 58 = achtundfünfzig. Pułapki: dreißig z ß, sechzehn bez s, siebzehn bez en">
      <text x="36" y="52" class="tx-b" text-anchor="middle">21 =</text>
      <rect x="80" y="28" width="80" height="36" rx="8" class="f4 s4 sw"/><rect x="168" y="28" width="72" height="36" rx="8" class="bg ln"/><rect x="248" y="28" width="142" height="36" rx="8" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="120" y="52">ein</text><text x="204" y="52">und</text><text x="319" y="52">zwanzig</text></g>
      <g class="tx-s" text-anchor="middle"><text x="120" y="82">1</text><text x="204" y="82">i</text><text x="319" y="82">20</text></g>
      <g class="tx"><text x="10" y="112">34 = vierunddreißig</text><text x="210" y="112">58 = achtundfünfzig</text></g>
      <g class="bg ln dash"><rect x="10" y="128" width="120" height="72" rx="10"/><rect x="140" y="128" width="120" height="72" rx="10"/><rect x="270" y="128" width="120" height="72" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="158">drei<tspan class="t5">ß</tspan>ig</text><text x="200" y="158">sechzehn</text><text x="330" y="158">siebzehn</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="184">30 – z ß</text><text x="200" y="184">16 – bez „s”</text><text x="330" y="184">17 – bez „en”</text></g>
    </svg>`,
    text: `<p>Od 21 liczby czytasz <b>od tyłu</b>: najpierw jedności, potem <i>und</i>, na końcu dziesiątki – <i>einundzwanzig</i> to dosłownie „jeden i dwadzieścia”.</p>
      <p>Pułapki z tego działu: <i>dreißig</i> z ß; <i>sechzehn</i>, <i>siebzehn</i> (nie „sechszehn”, „siebenzehn”); <i>du heißt</i> bez dodatkowego s; <b>Sie</b> wielką literą; <i>wo</i> (gdzie) ≠ <i>woher</i> (skąd).</p>`,
    remember: '21–99: jedności + und + dziesiątki, pisane razem jednym słowem.',
    hook: 'Czytaj liczbę od prawej cyfry: 34 → „4 i 30” → vier-und-dreißig.',
    check: { q: 'Jak po niemiecku jest 43?', options: ['vierunddreißig', 'dreiundvierzig', 'vierzigdrei'], answer: 1, explain: '43: najpierw jedności (drei), potem und, potem dziesiątki (vierzig) – dreiundvierzig.' },
  },
];

window.LESSONS['niemiecki/familie'] = [
  {
    title: 'Kto jest kim w rodzinie',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Drzewo rodziny: der Opa i die Oma, niżej der Vater i die Mutter, niżej ich, der Bruder i die Schwester. Męskie na niebiesko (der), żeńskie na pomarańczowo (die). Na dole tylko w liczbie mnogiej: die Eltern – rodzice, die Geschwister – rodzeństwo, die Großeltern – dziadkowie">
      <g class="ln"><path d="M160,28 L260,28"/><path d="M210,28 L210,52 L150,52 L150,66"/><path d="M200,84 L220,84"/><path d="M210,84 L210,112"/><path d="M100,112 L350,112"/><path d="M100,112 L100,124"/><path d="M220,112 L220,124"/><path d="M350,112 L350,124"/></g>
      <g class="f1 s1 sw"><rect x="50" y="10" width="110" height="36" rx="8"/><rect x="100" y="66" width="100" height="36" rx="8"/><rect x="160" y="124" width="120" height="36" rx="8"/></g>
      <g class="f2 s2 sw"><rect x="260" y="10" width="110" height="36" rx="8"/><rect x="220" y="66" width="110" height="36" rx="8"/><rect x="290" y="124" width="120" height="36" rx="8"/></g>
      <rect x="60" y="124" width="80" height="36" rx="8" class="bg ln"/>
      <g class="tx" text-anchor="middle"><text x="105" y="34">der Opa</text><text x="315" y="34">die Oma</text><text x="150" y="90">der Vater</text><text x="275" y="90">die Mutter</text>
        <text x="100" y="148">ich</text><text x="220" y="148">der Bruder</text><text x="350" y="148">die Schwester</text></g>
      <g class="f5 s5 sw"><rect x="6" y="176" width="106" height="34" rx="8"/><rect x="118" y="176" width="150" height="34" rx="8"/><rect x="274" y="176" width="140" height="34" rx="8"/></g>
      <g class="tx" text-anchor="middle"><text x="59" y="198">die Eltern</text><text x="193" y="198">die Geschwister</text><text x="344" y="198">die Großeltern</text></g>
      <g class="tx-s" text-anchor="middle"><text x="59" y="226">rodzice</text><text x="193" y="226">rodzeństwo</text><text x="344" y="226">dziadkowie</text></g>
    </svg>`,
    text: `<p>W tym dziale opowiesz o swojej <b>rodzinie</b>: kto do niej należy, jak ktoś wygląda, jaki ma charakter i kim jest z zawodu.</p>
      <p>Męskie osoby mają <b>der</b>, żeńskie – <b>die</b>. Do tego <i>der Onkel / die Tante</i> (wujek / ciocia) i <i>der Cousin / die Cousine</i> (kuzyn / kuzynka). <i>Opa</i> i <i>Oma</i> to potocznie dziadek i babcia (oficjalnie <i>Großvater</i>, <i>Großmutter</i>).</p>`,
    remember: 'die Eltern, die Geschwister, die Großeltern – tylko w liczbie mnogiej.',
    hook: 'Kolory w tej lekcji: niebieski = der, pomarańczowy = die, fioletowy = liczba mnoga. Zapamiętuj słówko razem z kolorem.',
  },
  {
    title: 'haben – mam brata, mam siostrę',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Odmiana haben: ich habe, du hast, er sie es hat, wir haben, ihr habt, sie Sie haben. Przykład: Ich habe einen Bruder und eine Schwester – Mam brata i siostrę">
      <g class="bg ln"><rect x="20" y="10" width="120" height="54" rx="10"/><rect x="20" y="72" width="120" height="54" rx="10"/><rect x="150" y="72" width="120" height="54" rx="10"/><rect x="280" y="72" width="120" height="54" rx="10"/></g>
      <g class="f4 s4 sw"><rect x="150" y="10" width="120" height="54" rx="10"/><rect x="280" y="10" width="120" height="54" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="80" y="30">ich</text><text x="210" y="30">du</text><text x="340" y="30">er / sie / es</text><text x="80" y="92">wir</text><text x="210" y="92">ihr</text><text x="340" y="92">sie / Sie</text></g>
      <g class="tx-b" text-anchor="middle"><text x="80" y="54">habe</text><text x="210" y="54">hast</text><text x="340" y="54">hat</text><text x="80" y="116">haben</text><text x="210" y="116">habt</text><text x="340" y="116">haben</text></g>
      <text x="210" y="162" class="tx" text-anchor="middle">Ich habe <tspan class="tx-b t1">einen</tspan> Bruder und <tspan class="tx-b t2">eine</tspan> Schwester.</text>
      <text x="210" y="188" class="tx-s" text-anchor="middle">Mam brata i siostrę.</text>
    </svg>`,
    text: `<p><b>haben</b> (mieć) to jeden z najważniejszych czasowników. Uważaj na <i>du hast</i> i <i>er hat</i> – tu znika „b”.</p>
      <p>Przykłady: <i>Ich habe eine Schwester.</i> <i>Er hat zwei Brüder.</i> <i>Wir haben eine Oma in Berlin.</i></p>`,
    remember: 'ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.',
    hook: 'Przy du i er „b” ucieka z domu: ha(b)st → hast, ha(b)t → hat.',
    check: { q: '___ du Geschwister?', options: ['Hat', 'Hast', 'Habe'], answer: 1, explain: 'du hast – pytanie „tak/nie” zaczyna się od czasownika: Hast du Geschwister?' },
  },
  {
    title: 'Mój, twój, jego, jej',
    svg: `<svg viewBox="0 0 400 225" role="img" aria-label="Tabela zaimków dzierżawczych. Przy der i das: mein Bruder, dein Vater, sein Opa, ihr Onkel. Przy die i liczbie mnogiej: meine Mutter, deine Eltern, seine Schwester, ihre Tante. Na dole: Lisa – ihr Bruder, Tom – sein Bruder">
      <rect x="90" y="8" width="138" height="30" rx="8" class="bg ln-thin"/><rect x="236" y="8" width="160" height="30" rx="8" class="bg ln-thin"/>
      <g class="tx-b" text-anchor="middle"><text x="159" y="29"><tspan class="t1">der</tspan> / <tspan class="t3">das</tspan></text><text x="316" y="29"><tspan class="t2">die</tspan> / <tspan class="t5">l. mn.</tspan></text></g>
      <g class="bg ln-thin"><rect x="90" y="46" width="138" height="30" rx="6"/><rect x="236" y="46" width="160" height="30" rx="6"/><rect x="90" y="82" width="138" height="30" rx="6"/><rect x="236" y="82" width="160" height="30" rx="6"/>
        <rect x="90" y="118" width="138" height="30" rx="6"/><rect x="236" y="118" width="160" height="30" rx="6"/><rect x="90" y="154" width="138" height="30" rx="6"/><rect x="236" y="154" width="160" height="30" rx="6"/></g>
      <g class="tx-s" text-anchor="middle"><text x="45" y="66">mój</text><text x="45" y="102">twój</text><text x="45" y="138">jego</text><text x="45" y="174">jej</text></g>
      <g class="tx" text-anchor="middle"><text x="159" y="67"><tspan class="tx-b">mein</tspan> Bruder</text><text x="159" y="103"><tspan class="tx-b">dein</tspan> Vater</text><text x="159" y="139"><tspan class="tx-b">sein</tspan> Opa</text><text x="159" y="175"><tspan class="tx-b">ihr</tspan> Onkel</text>
        <text x="316" y="67"><tspan class="tx-b">meine</tspan> Mutter</text><text x="316" y="103"><tspan class="tx-b">deine</tspan> Eltern</text><text x="316" y="139"><tspan class="tx-b">seine</tspan> Schwester</text><text x="316" y="175"><tspan class="tx-b">ihre</tspan> Tante</text></g>
      <text x="200" y="212" class="tx" text-anchor="middle">Lisa → <tspan class="tx-b">ihr</tspan> Bruder   ·   Tom → <tspan class="tx-b">sein</tspan> Bruder</text>
    </svg>`,
    text: `<p>Przy słowach z <b>der</b> i <b>das</b> mówisz <i>mein, dein, sein, ihr</i>. Przy <b>die</b> i w liczbie mnogiej dochodzi <b>-e</b>: <i>meine, deine, seine, ihre</i>.</p>
      <p>„Jego” czy „jej” zależy od tego, <b>czyje</b> to jest: brat Lisy – <i>ihr Bruder</i>, brat Toma – <i>sein Bruder</i>.</p>`,
    remember: 'die / liczba mnoga → końcówka -e: meine Mutter, deine Eltern.',
    hook: '„die” kończy się na -e, więc i zaimek dostaje -e: die Mutter → meine Mutter.',
    check: { q: 'Das ist Tom. ___ Schwester heißt Mia.', options: ['Ihre', 'Sein', 'Seine'], answer: 2, explain: 'Siostra Toma – „jego” = sein; die Schwester, więc z -e: seine.' },
  },
  {
    title: 'Jak wygląda, jaki jest',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Wygląd: ist groß, klein, schlank; hat lange Haare, kurze Haare, blaue Augen. Charakter: nett – miły, lustig – zabawny, freundlich – życzliwy, ruhig – spokojny, fleißig – pracowity, faul – leniwy">
      <rect x="10" y="8" width="185" height="192" rx="12" class="f4 s4 sw"/><rect x="205" y="8" width="185" height="192" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="34">👀 wygląd</text><text x="297" y="34">🙂 charakter</text></g>
      <g class="tx-b"><text x="22" y="66">ist</text><text x="22" y="126">hat</text></g>
      <g class="tx"><text x="62" y="66">groß · klein</text><text x="62" y="90">schlank</text><text x="62" y="126">lange Haare</text><text x="62" y="150">kurze Haare</text><text x="62" y="174">blaue Augen</text></g>
      <g class="tx"><text x="217" y="60">nett</text><text x="217" y="86">lustig</text><text x="217" y="112">freundlich</text><text x="217" y="138">ruhig</text><text x="217" y="164">fleißig</text><text x="217" y="190">faul</text></g>
      <g class="tx-s"><text x="314" y="60">miły</text><text x="314" y="86">zabawny</text><text x="314" y="112">życzliwy</text><text x="314" y="138">spokojny</text><text x="314" y="164">pracowity</text><text x="314" y="190">leniwy</text></g>
    </svg>`,
    text: `<p>Wzrost i sylwetka – z <b>ist</b>: <i>Er ist groß und schlank.</i> Włosy i oczy – z <b>hat</b>: <i>Sie hat lange, blonde Haare und blaue Augen.</i></p>
      <p>Charakter też opisujesz z <i>ist</i>: <i>Mein Bruder ist lustig, aber faul.</i> <i>Meine Oma ist nett und ruhig.</i></p>`,
    remember: 'fleißig (pracowity) ↔ faul (leniwy).',
    hook: 'Wzrost się JEST (ist groß), a włosy i oczy się MA (hat blaue Augen) – zupełnie jak po polsku.',
    check: { q: '„Sie ist ruhig und nett.” To opis…', options: ['wyglądu', 'charakteru', 'zawodu'], answer: 1, explain: 'ruhig (spokojna) i nett (miła) to cechy charakteru.' },
  },
  {
    title: 'Zawody i pułapka z rodzajnikiem',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Formy żeńskie zawodów z końcówką -in: der Lehrer – die Lehrerin, der Arzt – die Ärztin, der Koch – die Köchin. Źle: Meine Mutter ist eine Lehrerin. Dobrze: Meine Mutter ist Lehrerin – bez rodzajnika">
      <defs><marker id="a-k8de-familie-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f1 s1 sw"><rect x="10" y="8" width="160" height="32" rx="8"/><rect x="10" y="48" width="160" height="32" rx="8"/><rect x="10" y="88" width="160" height="32" rx="8"/></g>
      <g class="f2 s2 sw"><rect x="222" y="8" width="168" height="32" rx="8"/><rect x="222" y="48" width="168" height="32" rx="8"/><rect x="222" y="88" width="168" height="32" rx="8"/></g>
      <g class="ln"><path d="M176,24 L214,24" marker-end="url(#a-k8de-familie-5)"/><path d="M176,64 L214,64" marker-end="url(#a-k8de-familie-5)"/><path d="M176,104 L214,104" marker-end="url(#a-k8de-familie-5)"/></g>
      <g class="tx" text-anchor="middle"><text x="90" y="30">der Lehrer</text><text x="90" y="70">der Arzt</text><text x="90" y="110">der Koch</text>
        <text x="306" y="30">die Lehrer<tspan class="tx-b">in</tspan></text><text x="306" y="70">die <tspan class="tx-b">Ä</tspan>rzt<tspan class="tx-b">in</tspan></text><text x="306" y="110">die K<tspan class="tx-b">ö</tspan>ch<tspan class="tx-b">in</tspan></text></g>
      <rect x="10" y="136" width="380" height="34" rx="8" class="bg ln dash"/><rect x="10" y="178" width="380" height="34" rx="8" class="f4 s4 sw"/>
      <g class="tx" text-anchor="middle"><text x="200" y="158">❌ Meine Mutter ist <tspan class="tx-b t5">eine</tspan> Lehrerin.</text><text x="200" y="200">✅ Meine Mutter ist Lehrerin.</text></g>
    </svg>`,
    text: `<p>Forma żeńska zawodu ma zwykle końcówkę <b>-in</b>: <i>der Verkäufer → die Verkäuferin</i>, <i>der Polizist → die Polizistin</i>. Czasem dochodzi przegłos: <i>Arzt → Ärztin</i>, <i>Koch → Köchin</i>.</p>
      <p>Pytanie o zawód: <i>Was ist dein Vater von Beruf?</i> – <i>Er ist Arzt.</i> <i>Wo arbeitet er?</i> – <i>Im Krankenhaus.</i> Mówiąc o zawodzie, <b>nie</b> dajesz rodzajnika.</p>
      <p>Pułapki z całego działu: <i>du hast / er hat</i> bez „b”, <i>meine</i> przy die, <i>ihr</i> = jej, a <i>sein</i> = jego.</p>`,
    remember: 'Zawód bez rodzajnika: Er ist Arzt. Sie ist Lehrerin.',
    hook: 'Kobieta w zawodzie dostaje -in: Lehrer-in, Ärzt-in, Köch-in. A „ein/eine” przy zawodzie – wyrzuć.',
    check: { q: 'Jak powiesz: „Mój tata jest lekarzem”?', options: ['Mein Vater ist Arzt.', 'Meine Vater ist Arzt.', 'Mein Vater ist Ärztin.'], answer: 0, explain: 'der Vater → mein; zawód bez rodzajnika i w formie męskiej: Arzt.' },
  },
];

window.LESSONS['niemiecki/schule'] = [
  {
    title: 'der, die, das – trzy kolory rzeczowników',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Przybory według rodzaju. der (męski): Bleistift, Kuli, Radiergummi. die (żeński): Schere, Schultasche. das (nijaki): Heft, Lineal, Federmäppchen. das Lineal to linijka – po polsku rodzaj żeński">
      <rect x="6" y="8" width="130" height="146" rx="12" class="f1 s1 sw"/><rect x="145" y="8" width="130" height="146" rx="12" class="f2 s2 sw"/><rect x="284" y="8" width="130" height="146" rx="12" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="71" y="34">der</text><text x="210" y="34">die</text><text x="349" y="34">das</text></g>
      <g class="tx-s" text-anchor="middle"><text x="71" y="52">męski</text><text x="210" y="52">żeński</text><text x="349" y="52">nijaki</text></g>
      <g class="tx" text-anchor="middle"><text x="71" y="82">Bleistift</text><text x="71" y="108">Kuli</text><text x="71" y="134">Radiergummi</text>
        <text x="210" y="82">Schere</text><text x="210" y="108">Schultasche</text>
        <text x="349" y="82">Heft</text><text x="349" y="108">Lineal</text><text x="349" y="134">Federmäppchen</text></g>
      <text x="210" y="180" class="tx-s" text-anchor="middle">das Lineal = linijka (po polsku rodzaj żeński!)</text>
      <text x="210" y="204" class="tx-s" text-anchor="middle">der Kuli = długopis · die Schere = nożyczki</text>
    </svg>`,
    text: `<p>W tym dziale nazwiesz przybory i przedmioty szkolne, ale najważniejsze jest coś innego: <b>rodzajniki</b>. Każdy niemiecki rzeczownik ma rodzaj: <b>der</b> (męski), <b>die</b> (żeński) albo <b>das</b> (nijaki).</p>
      <p>Rodzaj często <b>nie zgadza się</b> z polskim: linijka to <i>das Lineal</i>. Dlatego ucz się słówek zawsze <b>z rodzajnikiem</b>.</p>`,
    remember: 'Rzeczownik = rodzajnik + słowo: der Kuli, die Schere, das Heft.',
    hook: 'Kolor = rodzajnik: niebieski der, pomarańczowy die, zielony das. Wyobraź sobie zeszyt (das Heft) w zielonej okładce.',
    check: { q: 'Wybierz rodzajnik: ___ Lineal (linijka)', options: ['der', 'die', 'das'], answer: 2, explain: 'das Lineal – rodzaj nijaki, choć po polsku „linijka” jest żeńska.' },
  },
  {
    title: 'ein, eine, kein',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tabela rodzajników. Określony: der, die, das, w liczbie mnogiej die. Nieokreślony: ein, eine, ein, w liczbie mnogiej brak. Przeczenie: kein, keine, kein, keine. Przykład: Das ist kein Heft – das ist ein Buch">
      <rect x="104" y="8" width="74" height="34" rx="8" class="f1 s1 sw"/><rect x="186" y="8" width="74" height="34" rx="8" class="f2 s2 sw"/><rect x="268" y="8" width="74" height="34" rx="8" class="f3 s3 sw"/><rect x="350" y="8" width="64" height="34" rx="8" class="f5 s5 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="141" y="30">męski</text><text x="223" y="30">żeński</text><text x="305" y="30">nijaki</text><text x="382" y="30">l. mn.</text></g>
      <g class="tx-s"><text x="8" y="72">określony</text><text x="8" y="114">nieokreślony</text><text x="8" y="156">przeczenie</text></g>
      <g class="bg ln-thin"><rect x="104" y="50" width="74" height="34" rx="6"/><rect x="186" y="50" width="74" height="34" rx="6"/><rect x="268" y="50" width="74" height="34" rx="6"/><rect x="350" y="50" width="64" height="34" rx="6"/>
        <rect x="104" y="92" width="74" height="34" rx="6"/><rect x="186" y="92" width="74" height="34" rx="6"/><rect x="268" y="92" width="74" height="34" rx="6"/><rect x="350" y="92" width="64" height="34" rx="6"/>
        <rect x="104" y="134" width="74" height="34" rx="6"/><rect x="186" y="134" width="74" height="34" rx="6"/><rect x="268" y="134" width="74" height="34" rx="6"/><rect x="350" y="134" width="64" height="34" rx="6"/></g>
      <g class="tx-b" text-anchor="middle"><text x="141" y="73">der</text><text x="223" y="73">die</text><text x="305" y="73">das</text><text x="382" y="73">die</text>
        <text x="141" y="115">ein</text><text x="223" y="115">eine</text><text x="305" y="115">ein</text><text x="382" y="115">–</text>
        <text x="141" y="157">kein</text><text x="223" y="157">keine</text><text x="305" y="157">kein</text><text x="382" y="157">keine</text></g>
      <text x="210" y="192" class="tx" text-anchor="middle">Das ist <tspan class="tx-b t3">kein</tspan> Heft – das ist <tspan class="tx-b t3">ein</tspan> Buch.</text>
    </svg>`,
    text: `<p><b>ein / eine</b> to rodzajnik nieokreślony – „jakiś, jeden”: <i>ein Bleistift, eine Schere, ein Heft</i>. W liczbie mnogiej go nie ma: <i>Hefte</i>.</p>
      <p><b>kein / keine</b> to przeczenie „żaden, nie”: <i>Das ist kein Kuli.</i> (To nie jest długopis.) W liczbie mnogiej: <i>keine Hefte</i>.</p>`,
    remember: 'der → ein / kein · die → eine / keine · das → ein / kein.',
    hook: 'kein = k + ein. Przeczenie odmienia się dokładnie jak ein – wystarczy dopisać „k” z przodu.',
    check: { q: 'Das ist ___ Schere. (to są jakieś nożyczki)', options: ['ein', 'eine', 'einen'], answer: 1, explain: 'die Schere – rodzaj żeński, więc rodzajnik nieokreślony eine.' },
  },
  {
    title: 'Liczba mnoga: zawsze die',
    svg: `<svg viewBox="0 0 400 218" role="img" aria-label="Liczba mnoga: das Heft – die Hefte, der Bleistift – die Bleistifte, das Buch – die Bücher, die Schere – die Scheren, der Kuli – die Kulis. W liczbie mnogiej rodzajnik to zawsze die">
      <defs><marker id="a-k8de-schule-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="8" width="160" height="32" rx="8" class="f3 s3 sw"/><rect x="10" y="50" width="160" height="32" rx="8" class="f1 s1 sw"/><rect x="10" y="92" width="160" height="32" rx="8" class="f3 s3 sw"/><rect x="10" y="134" width="160" height="32" rx="8" class="f2 s2 sw"/><rect x="10" y="176" width="160" height="32" rx="8" class="f1 s1 sw"/>
      <g class="f5 s5 sw"><rect x="222" y="8" width="168" height="32" rx="8"/><rect x="222" y="50" width="168" height="32" rx="8"/><rect x="222" y="92" width="168" height="32" rx="8"/><rect x="222" y="134" width="168" height="32" rx="8"/><rect x="222" y="176" width="168" height="32" rx="8"/></g>
      <g class="ln"><path d="M176,24 L214,24" marker-end="url(#a-k8de-schule-3)"/><path d="M176,66 L214,66" marker-end="url(#a-k8de-schule-3)"/><path d="M176,108 L214,108" marker-end="url(#a-k8de-schule-3)"/><path d="M176,150 L214,150" marker-end="url(#a-k8de-schule-3)"/><path d="M176,192 L214,192" marker-end="url(#a-k8de-schule-3)"/></g>
      <g class="tx" text-anchor="middle"><text x="90" y="30">das Heft</text><text x="90" y="72">der Bleistift</text><text x="90" y="114">das Buch</text><text x="90" y="156">die Schere</text><text x="90" y="198">der Kuli</text>
        <text x="306" y="30">die Heft<tspan class="tx-b">e</tspan></text><text x="306" y="72">die Bleistift<tspan class="tx-b">e</tspan></text><text x="306" y="114">die B<tspan class="tx-b">ü</tspan>ch<tspan class="tx-b">er</tspan></text>
        <text x="306" y="156">die Schere<tspan class="tx-b">n</tspan></text><text x="306" y="198">die Kuli<tspan class="tx-b">s</tspan></text></g>
    </svg>`,
    text: `<p>Końcówki liczby mnogiej są różne: <b>-e</b>, <b>-er</b> (często z przegłosem), <b>-n</b>, <b>-s</b>. Nie ma jednej reguły – ucz się liczby mnogiej razem ze słówkiem.</p>
      <p>Jedno jest pewne: w liczbie mnogiej (w mianowniku) rodzajnik to <b>zawsze die</b> – nawet gdy w liczbie pojedynczej było <i>der</i> albo <i>das</i>.</p>`,
    remember: 'Liczba mnoga → zawsze die: die Hefte, die Bücher, die Bleistifte.',
    hook: 'Liczba mnoga „zjada” der i das – zostaje samo die. Fiszka: das Buch – die Bücher (jedno słówko, dwie formy).',
  },
  {
    title: 'Biernik: zmienia się tylko der',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Biernik po haben, brauchen, kaufen: tylko rodzaj męski się zmienia – der na den, ein na einen, kein na keinen. Żeński die, eine, keine i nijaki das, ein, kein bez zmian. Przykłady: Ich brauche einen Bleistift. Ich habe keinen Kuli">
      <rect x="10" y="8" width="140" height="30" rx="8" class="f1 s1 sw"/><rect x="160" y="8" width="110" height="30" rx="8" class="f2 s2 sw"/><rect x="280" y="8" width="110" height="30" rx="8" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="80" y="29">der</text><text x="215" y="29">die</text><text x="335" y="29">das</text></g>
      <rect x="10" y="44" width="140" height="106" rx="8" class="bg s1 sw"/>
      <g class="bg ln-thin dash"><rect x="160" y="44" width="110" height="106" rx="8"/><rect x="280" y="44" width="110" height="106" rx="8"/></g>
      <g class="tx" text-anchor="middle"><text x="80" y="70">der → <tspan class="tx-b t1">den</tspan></text><text x="80" y="98">ein → <tspan class="tx-b t1">einen</tspan></text><text x="80" y="126">kein → <tspan class="tx-b t1">keinen</tspan></text>
        <text x="215" y="70">die</text><text x="215" y="98">eine</text><text x="215" y="126">keine</text>
        <text x="335" y="70">das</text><text x="335" y="98">ein</text><text x="335" y="126">kein</text></g>
      <g class="tx-s" text-anchor="middle"><text x="215" y="144">bez zmian</text><text x="335" y="144">bez zmian</text></g>
      <g class="tx" text-anchor="middle"><text x="200" y="180">Ich brauche <tspan class="tx-b t1">einen</tspan> Bleistift.</text><text x="200" y="206">Ich habe <tspan class="tx-b t1">keinen</tspan> Kuli.</text></g>
    </svg>`,
    text: `<p>Po czasownikach <i>haben</i>, <i>brauchen</i> (potrzebować), <i>kaufen</i> rzeczownik jest w <b>bierniku</b> (kogo? co?). Zmienia się wtedy <b>tylko rodzaj męski</b>: <i>der → den, ein → einen, kein → keinen</i>.</p>
      <p>Żeński i nijaki zostają bez zmian: <i>Ich habe eine Schere und ein Heft.</i></p>`,
    remember: 'Biernik: der → den, ein → einen, kein → keinen. Reszta bez zmian.',
    hook: 'Biernik rusza tylko pana (der) – dostaje „n” na końcu: den, einen, keinen. Pani (die) i dziecko (das) zostają, jak były.',
    check: { q: 'Ich habe ___ Radiergummi. (nie mam gumki)', options: ['kein', 'keinen', 'keine'], answer: 1, explain: 'der Radiergummi – rodzaj męski, w bierniku keinen.' },
  },
  {
    title: 'Plan lekcji i pułapki',
    svg: `<svg viewBox="0 0 420 225" role="img" aria-label="Dni tygodnia: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag; w poniedziałek – am Montag. Przedmioty: Geschichte – historia, Erdkunde – geografia, Kunst – plastyka, Sport – WF. Zdanie: Am Montag habe ich Mathe">
      <g class="bg ln"><rect x="6" y="8" width="96" height="32" rx="8"/><rect x="110" y="8" width="96" height="32" rx="8"/><rect x="214" y="8" width="96" height="32" rx="8"/><rect x="318" y="8" width="96" height="32" rx="8"/><rect x="6" y="46" width="96" height="32" rx="8"/></g>
      <g class="f4 s4 sw"><rect x="110" y="46" width="96" height="32" rx="8"/><rect x="214" y="46" width="96" height="32" rx="8"/></g>
      <rect x="318" y="46" width="96" height="32" rx="8" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="54" y="29">Montag</text><text x="158" y="29">Dienstag</text><text x="262" y="29">Mittwoch</text><text x="366" y="29">Donnerstag</text>
        <text x="54" y="67">Freitag</text><text x="158" y="67">Samstag</text><text x="262" y="67">Sonntag</text><text x="366" y="67"><tspan class="tx-b">am</tspan> Montag</text></g>
      <g class="bg ln-thin"><rect x="6" y="94" width="200" height="30" rx="8"/><rect x="214" y="94" width="200" height="30" rx="8"/><rect x="6" y="130" width="200" height="30" rx="8"/><rect x="214" y="130" width="200" height="30" rx="8"/></g>
      <g class="tx"><text x="16" y="115">Geschichte</text><text x="224" y="115">Kunst</text><text x="16" y="151">Erdkunde</text><text x="224" y="151">Sport</text></g>
      <g class="tx-s"><text x="120" y="114">historia</text><text x="300" y="114">plastyka</text><text x="120" y="150">geografia</text><text x="300" y="150">WF</text></g>
      <text x="210" y="190" class="tx-b" text-anchor="middle"><tspan class="t5">Am</tspan> Montag habe ich Mathe.</text>
      <text x="210" y="214" class="tx" text-anchor="middle">Mein Lieblingsfach ist Bio.</text>
    </svg>`,
    text: `<p>Z dniami tygodnia używasz <b>am</b>: <i>am Montag</i> (w poniedziałek). <i>Am Montag habe ich Mathe.</i> O ulubionym przedmiocie: <i>Mein Lieblingsfach ist Bio.</i>, opinia: <i>Mathe finde ich interessant / langweilig / leicht / schwer.</i></p>
      <p>Pułapki działu: rodzaj inny niż po polsku (<i>das Lineal</i>), liczba mnoga zawsze z <i>die</i>, w bierniku tylko <i>einen / keinen</i> przy der, <i>Geschichte</i> = historia, <i>Erdkunde</i> = geografia.</p>`,
    remember: 'am + dzień tygodnia: am Montag, am Freitag.',
    hook: 'Sześć dni kończy się na -tag – tylko środa jest inna: Mittwoch.',
    check: { q: 'Jaki dzień jest przed „Donnerstag”?', options: ['Dienstag', 'Mittwoch', 'Freitag'], answer: 1, explain: 'Donnerstag to czwartek, więc dzień wcześniej jest Mittwoch (środa).' },
  },
];

window.LESSONS['niemiecki/tagesablauf'] = [
  {
    title: 'Mój dzień od rana do nocy',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Plan dnia na osi czasu: 6:30 aufstehen, 7:00 frühstücken, 7:30 zur Schule gehen, 14:00 zu Mittag essen, 16:00 Hausaufgaben machen, 20:00 fernsehen, 22:00 ins Bett gehen. Obok pory dnia: am Morgen, am Vormittag, am Mittag, am Nachmittag, am Abend i wyróżnione in der Nacht">
      <line x1="70" y1="12" x2="70" y2="208" class="ln"/>
      <g class="f4 s4 sw"><circle cx="70" cy="19" r="5"/><circle cx="70" cy="49" r="5"/><circle cx="70" cy="79" r="5"/><circle cx="70" cy="109" r="5"/><circle cx="70" cy="139" r="5"/><circle cx="70" cy="169" r="5"/><circle cx="70" cy="199" r="5"/></g>
      <g class="tx-s" text-anchor="end"><text x="58" y="24">6:30</text><text x="58" y="54">7:00</text><text x="58" y="84">7:30</text><text x="58" y="114">14:00</text><text x="58" y="144">16:00</text><text x="58" y="174">20:00</text><text x="58" y="204">22:00</text></g>
      <g class="tx"><text x="84" y="24">aufstehen</text><text x="84" y="54">frühstücken</text><text x="84" y="84">zur Schule gehen</text><text x="84" y="114">zu Mittag essen</text><text x="84" y="144">Hausaufgaben machen</text><text x="84" y="174">fernsehen</text><text x="84" y="204">ins Bett gehen</text></g>
      <g class="f4 s4"><rect x="290" y="10" width="124" height="28" rx="8"/><rect x="290" y="44" width="124" height="28" rx="8"/><rect x="290" y="78" width="124" height="28" rx="8"/><rect x="290" y="112" width="124" height="28" rx="8"/><rect x="290" y="146" width="124" height="28" rx="8"/></g>
      <rect x="290" y="180" width="124" height="28" rx="8" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="352" y="29">am Morgen</text><text x="352" y="63">am Vormittag</text><text x="352" y="97">am Mittag</text><text x="352" y="131">am Nachmittag</text><text x="352" y="165">am Abend</text><text x="352" y="199"><tspan class="tx-b">in der</tspan> Nacht</text></g>
    </svg>`,
    text: `<p>W tym dziale opowiesz, jak wygląda twój dzień: o której wstajesz, co robisz po szkole, kiedy idziesz spać. Do tego potrzebujesz trzech rzeczy: <b>godzin</b>, <b>pór dnia</b> i <b>szyku zdania</b>.</p>
      <p>Pory dnia mają <b>am</b>: <i>am Morgen</i> (rano), <i>am Vormittag</i> (przed południem), <i>am Mittag</i>, <i>am Nachmittag</i> (po południu), <i>am Abend</i> (wieczorem). Wyjątek: <i><b>in der</b> Nacht</i> (w nocy).</p>`,
    remember: 'am Morgen, am Nachmittag, am Abend… ale in der Nacht.',
    hook: 'Nachmittag = nach (po) + Mittag (południe) – dosłownie „po południu”. Vormittag = vor (przed) + Mittag.',
    check: { q: 'Co znaczy „am Vormittag”?', options: ['po południu', 'przed południem', 'wieczorem'], answer: 1, explain: 'vor = przed: am Vormittag – przed południem. Po południu to am Nachmittag.' },
  },
  {
    title: 'Która godzina? nach i vor',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Tarcza zegara: prawa połowa – nach (po), lewa – vor (przed), na dole halb. Obok: 7:00 sieben Uhr, 7:10 zehn nach sieben, 7:15 Viertel nach sieben, 7:30 halb acht, 7:45 Viertel vor acht">
      <path d="M120,20 A95,95 0 0 1 120,210 Z" class="f4"/><path d="M120,20 A95,95 0 0 0 120,210 Z" class="f5"/>
      <circle cx="120" cy="115" r="95" class="ln sw"/><line x1="120" y1="48" x2="120" y2="170" class="ln-thin dash"/>
      <g class="tx-s" text-anchor="middle"><text x="120" y="40">12</text><text x="202" y="120">3</text><text x="120" y="204">6</text><text x="38" y="120">9</text><text x="120" y="186">halb</text></g>
      <g class="tx-b" text-anchor="middle"><text x="160" y="104">nach</text><text x="80" y="104">vor</text></g>
      <g class="tx-s" text-anchor="middle"><text x="160" y="140">po</text><text x="80" y="140">przed</text></g>
      <g class="tx-b"><text x="232" y="28">7:00</text><text x="232" y="72">7:10</text><text x="232" y="116">7:15</text><text x="232" y="160">7:30</text><text x="232" y="204">7:45</text></g>
      <g class="tx-s"><text x="232" y="46">sieben Uhr</text><text x="232" y="90">zehn nach sieben</text><text x="232" y="134">Viertel nach sieben</text><text x="232" y="178">halb acht</text><text x="232" y="222">Viertel vor acht</text></g>
    </svg>`,
    text: `<p>Pytasz: <i>Wie spät ist es?</i> albo <i>Wie viel Uhr ist es?</i> O której? – <i>Um wie viel Uhr…?</i> → <i><b>Um</b> sieben Uhr.</i></p>
      <p><b>Oficjalnie</b> (rozkład jazdy, radio) mówisz godzinę + <i>Uhr</i> + minuty: 7:10 – <i>sieben Uhr zehn</i>, 14:20 – <i>vierzehn Uhr zwanzig</i>. <b>Potocznie</b>: <i>zehn <b>nach</b> sieben</i> (10 po siódmej), <i>Viertel <b>vor</b> acht</i> (za kwadrans ósma).</p>`,
    remember: 'nach = po, vor = przed (za), Viertel = kwadrans.',
    hook: 'Prawa połowa tarczy to „nach” – minuty PO pełnej godzinie; lewa to „vor” – minuty PRZED następną.',
    check: { q: 'Która to godzina: „zehn nach neun”?', options: ['8:50', '9:10', '10:09'], answer: 1, explain: 'nach = po: dziesięć po dziewiątej, czyli 9:10.' },
  },
  {
    title: 'halb – pułapka numer jeden',
    svg: `<svg viewBox="0 0 400 165" role="img" aria-label="Oś czasu od 7:00 do 8:00. W połowie, przy 7:30, napis halb acht – połowa drogi do ósmej">
      <defs><marker id="a-k8de-tagesablauf-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="130" y="10" width="140" height="36" rx="10" class="f4 s4 sw"/><text x="200" y="34" class="tx-b" text-anchor="middle">halb <tspan class="t5">acht</tspan></text>
      <line x1="200" y1="46" x2="200" y2="82" class="ln dash"/>
      <line x1="40" y1="90" x2="360" y2="90" class="ln sw"/>
      <g class="ln sw"><line x1="40" y1="82" x2="40" y2="98"/><line x1="200" y1="82" x2="200" y2="98"/><line x1="360" y1="82" x2="360" y2="98"/></g>
      <text x="40" y="74" class="tx-s" text-anchor="middle">sieben</text><text x="360" y="74" class="tx-b t5" text-anchor="middle">acht</text>
      <g class="tx" text-anchor="middle"><text x="40" y="118">7:00</text><text x="200" y="118">7:30</text><text x="360" y="118">8:00</text></g>
      <path d="M48,134 L352,134" class="ln" marker-end="url(#a-k8de-tagesablauf-3)"/>
      <text x="200" y="156" class="tx-s" text-anchor="middle">halb = połowa drogi DO następnej godziny</text>
    </svg>`,
    text: `<p><b>halb</b> łączysz z <b>następną</b> godziną: <i>halb acht</i> to 7:30, a nie 8:30. Tak samo <i>halb neun</i> = 8:30, <i>halb drei</i> = 2:30 (albo 14:30).</p>
      <p>Najczęstszy błąd: powiedzieć <i>halb sieben</i> na 7:30. To jest 6:30!</p>`,
    remember: 'halb + NASTĘPNA godzina: halb acht = 7:30.',
    hook: 'Działa jak polskie „wpół do ósmej” – halb acht. Myśl po polsku, a nie po angielsku („half past seven”).',
    check: { q: '„halb zehn” to…', options: ['10:30', '9:30', '10:00'], answer: 1, explain: 'halb + następna godzina: wpół do dziesiątej = 9:30.' },
  },
  {
    title: 'Przedrostek ucieka na koniec',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Czasownik aufstehen rozpada się na auf i stehen. Zdanie: Ich stehe um sechs Uhr auf – przedrostek auf na końcu. Drugie: Er sieht am Abend fern">
      <defs><marker id="a-k8de-tagesablauf-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="110" y="8" width="60" height="34" rx="8" class="f5 s5 sw"/><rect x="170" y="8" width="110" height="34" rx="8" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="140" y="31">auf</text><text x="225" y="31">stehen</text></g>
      <path d="M150,44 C210,58 330,52 352,84" class="ln" marker-end="url(#a-k8de-tagesablauf-4)"/>
      <g class="bg ln"><rect x="10" y="90" width="60" height="36" rx="8"/><rect x="176" y="90" width="140" height="36" rx="8"/><rect x="10" y="148" width="60" height="36" rx="8"/><rect x="176" y="148" width="140" height="36" rx="8"/></g>
      <g class="f4 s4 sw"><rect x="78" y="90" width="90" height="36" rx="8"/><rect x="78" y="148" width="90" height="36" rx="8"/></g>
      <g class="f5 s5 sw"><rect x="324" y="90" width="66" height="36" rx="8"/><rect x="324" y="148" width="66" height="36" rx="8"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="114">Ich</text><text x="123" y="114">stehe</text><text x="246" y="114">um sechs Uhr</text><text x="357" y="114">auf.</text>
        <text x="40" y="172">Er</text><text x="123" y="172">sieht</text><text x="246" y="172">am Abend</text><text x="357" y="172">fern.</text></g>
      <text x="200" y="204" class="tx-s" text-anchor="middle">czasownik na 2. miejscu, przedrostek na samym końcu</text>
    </svg>`,
    text: `<p>Niektóre czasowniki mają <b>przedrostek</b>, który w zdaniu się odrywa i idzie <b>na koniec</b>: <i>aufstehen</i> → <i>Ich <b>stehe</b> um sechs Uhr <b>auf</b>.</i>, <i>fernsehen</i> → <i>Er <b>sieht</b> am Abend <b>fern</b>.</i></p>
      <p>Tak samo <i>einkaufen</i> (robić zakupy) i <i>aufräumen</i> (sprzątać): <i>Wir kaufen am Freitag ein.</i> Uwaga: <i>sehen</i> zmienia się przy du i er – <i>du siehst, er sieht</i>.</p>`,
    remember: 'aufstehen → Ich stehe … auf. fernsehen → Er sieht … fern.',
    hook: 'Czasownik i przedrostek to klamra: jeden otwiera zdanie, drugi je zamyka – jak nawias ( … ).',
    check: { q: 'Wybierz poprawne zdanie.', options: ['Ich aufräume am Samstag.', 'Ich räume am Samstag auf.', 'Ich räume auf am Samstag.'], answer: 1, explain: 'aufräumen: odmieniona część (räume) na 2. miejscu, przedrostek „auf” na samym końcu.' },
  },
  {
    title: 'Czasownik zawsze drugi – podsumowanie',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Pola zdania: 1. miejsce, czasownik, środek, koniec. Ich – frühstücke – um 7 Uhr. Um 7 Uhr – frühstücke – ich. Am Abend – sehe – ich – fern. Czasownik zawsze na 2. miejscu">
      <g class="tx-s" text-anchor="middle"><text x="56" y="18">1. miejsce</text><text x="167" y="18">czasownik</text><text x="278" y="18">środek</text><text x="374" y="18">koniec</text></g>
      <g class="bg ln"><rect x="6" y="28" width="100" height="36" rx="8"/><rect x="228" y="28" width="100" height="36" rx="8"/><rect x="6" y="72" width="100" height="36" rx="8"/><rect x="228" y="72" width="100" height="36" rx="8"/><rect x="6" y="116" width="100" height="36" rx="8"/><rect x="228" y="116" width="100" height="36" rx="8"/></g>
      <g class="f4 s4 sw"><rect x="112" y="28" width="110" height="36" rx="8"/><rect x="112" y="72" width="110" height="36" rx="8"/><rect x="112" y="116" width="110" height="36" rx="8"/></g>
      <g class="bg ln-thin dash"><rect x="334" y="28" width="80" height="36" rx="8"/><rect x="334" y="72" width="80" height="36" rx="8"/></g>
      <rect x="334" y="116" width="80" height="36" rx="8" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="56" y="51">Ich</text><text x="167" y="51">frühstücke</text><text x="278" y="51">um 7 Uhr.</text>
        <text x="56" y="95">Um 7 Uhr</text><text x="167" y="95">frühstücke</text><text x="278" y="95">ich.</text>
        <text x="56" y="139">Am Abend</text><text x="167" y="139">sehe</text><text x="278" y="139">ich</text><text x="374" y="139">fern.</text></g>
      <text x="210" y="182" class="tx-s" text-anchor="middle">zaczynasz od czasu → osoba przechodzi ZA czasownik</text>
    </svg>`,
    text: `<p>W zdaniu oznajmującym odmieniony czasownik stoi <b>zawsze na 2. miejscu</b>. Gdy zaczniesz od czasu (<i>Um 7 Uhr</i>, <i>Am Abend</i>), osoba przechodzi <b>za</b> czasownik: <i>Um 7 Uhr frühstücke ich.</i></p>
      <p>Pułapki działu: <i>halb acht</i> = 7:30; <i>nach</i> = po, <i>vor</i> = przed; <i>in der Nacht</i> (nie „am”); przedrostek (<i>auf, fern, ein</i>) na koniec; <i>du siehst, er sieht</i>.</p>`,
    remember: 'Czasownik na 2. miejscu – nawet gdy zdanie zaczyna się od godziny.',
    hook: 'Czasownik to bramkarz na drugiej pozycji – kto przyjdzie pierwszy, ten stoi przed nim, reszta czeka za nim.',
    check: { q: 'Wybierz poprawny szyk.', options: ['Um sechs Uhr ich stehe auf.', 'Um sechs Uhr stehe ich auf.', 'Um sechs Uhr stehe auf ich.'], answer: 1, explain: 'Czas na 1. miejscu, czasownik (stehe) na 2., potem osoba, „auf” na końcu.' },
  },
];

window.LESSONS['niemiecki/freizeit'] = [
  {
    title: 'Co robisz po szkole?',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Hobby według czasownika: spielen – Fußball, Basketball; fahren – Rad, Ski; gehen – ins Kino; treffen – Freunde; hören – Musik; sam czasownik – lesen, tanzen, zeichnen">
      <g class="bg ln-thin"><rect x="6" y="8" width="408" height="32" rx="8"/><rect x="6" y="46" width="408" height="32" rx="8"/><rect x="6" y="84" width="408" height="32" rx="8"/><rect x="6" y="122" width="408" height="32" rx="8"/><rect x="6" y="160" width="408" height="32" rx="8"/><rect x="6" y="198" width="408" height="32" rx="8"/></g>
      <g class="f4 s4 sw"><rect x="6" y="8" width="104" height="32" rx="8"/><rect x="6" y="46" width="104" height="32" rx="8"/><rect x="6" y="84" width="104" height="32" rx="8"/><rect x="6" y="122" width="104" height="32" rx="8"/><rect x="6" y="160" width="104" height="32" rx="8"/></g>
      <rect x="6" y="198" width="104" height="32" rx="8" class="bg ln"/>
      <g class="tx-b" text-anchor="middle"><text x="58" y="30">spielen</text><text x="58" y="68">fahren</text><text x="58" y="106">gehen</text><text x="58" y="144">treffen</text><text x="58" y="182">hören</text></g>
      <text x="58" y="219" class="tx-s" text-anchor="middle">sam czasownik</text>
      <g class="tx"><text x="122" y="30">⚽ Fußball · 🏀 Basketball</text><text x="122" y="68">🚲 Rad · ⛷️ Ski</text><text x="122" y="106">🎬 ins Kino</text><text x="122" y="144">👋 Freunde</text><text x="122" y="182">🎧 Musik</text><text x="122" y="220">📖 lesen · 💃 tanzen · ✏️ zeichnen</text></g>
    </svg>`,
    text: `<p>W tym dziale opowiesz o hobby i sporcie, powiesz, co lubisz i co umiesz, i zaproponujesz komuś wyjście.</p>
      <p>Wiele hobby to <b>rzeczownik + czasownik</b>: <i>Fußball / Tennis spielen</i>, <i>Rad / Ski fahren</i>, <i>ins Kino gehen</i>, <i>Freunde treffen</i>, <i>Musik hören</i>. Inne to sam czasownik: <i>lesen, tanzen, zeichnen, schwimmen</i>. Sprzęt i miejsca: <i>der Ball, das Fahrrad, die Skier, die Schlittschuhe</i> (łyżwy), <i>das Schwimmbad</i> (basen), <i>der Sportplatz</i>, <i>die Sporthalle</i>.</p>`,
    remember: 'Rad fahren, Ski fahren – ale Fußball spielen.',
    hook: 'spielen – gdy w grze jest piłka albo gra; fahren – gdy jedziesz na czymś (rower, narty).',
    check: { q: 'Wir ___ am Samstag Tennis.', options: ['fahren', 'spielen', 'gehen'], answer: 1, explain: 'W tenisa się gra: Tennis spielen.' },
  },
  {
    title: 'gern, lieber, am liebsten',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Podium: gern – lubię (najniższy słupek), lieber – wolę (średni), am liebsten – najbardziej lubię (najwyższy). Obok: nicht gern – nie lubię">
      <line x1="10" y1="200" x2="390" y2="200" class="ln sw"/>
      <rect x="20" y="150" width="110" height="50" rx="6" class="f4 s4 sw"/><rect x="145" y="110" width="110" height="90" rx="6" class="f4 s4 sw"/><rect x="270" y="70" width="110" height="130" rx="6" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="75" y="140">🥉</text><text x="200" y="100">🥈</text><text x="325" y="60">🥇</text></g>
      <g class="tx-b" text-anchor="middle"><text x="75" y="173">gern</text><text x="200" y="140">lieber</text></g>
      <text x="325" y="102" class="tx" text-anchor="middle">am liebsten</text>
      <g class="tx-s" text-anchor="middle"><text x="75" y="192">lubię</text><text x="200" y="162">wolę</text><text x="325" y="124">najbardziej</text><text x="325" y="140">lubię</text></g>
      <text x="14" y="34" class="tx">nicht gern</text><text x="14" y="54" class="tx-s">= nie lubię</text>
    </svg>`,
    text: `<p><b>gern</b> stawiasz po czasowniku: <i>Ich spiele <b>gern</b> Fußball.</i> (Lubię grać w piłkę.) <i>Ich schwimme <b>nicht gern</b>.</i> (Nie lubię pływać.)</p>
      <p>Stopniowanie: <i>Ich tanze <b>lieber</b>.</i> (Wolę tańczyć.) <i><b>Am liebsten</b> lese ich.</i> (Najbardziej lubię czytać.)</p>`,
    remember: 'gern (lubię) → lieber (wolę) → am liebsten (najbardziej lubię).',
    hook: 'Podium: brąz – gern, srebro – lieber, złoto – am liebsten.',
    check: { q: 'Jak powiesz: „Wolę pływać”?', options: ['Ich schwimme gern.', 'Ich schwimme lieber.', 'Am liebsten schwimme ich.'], answer: 1, explain: 'lieber = chętniej, wolę. gern – lubię, am liebsten – najbardziej lubię.' },
  },
  {
    title: 'Samogłoska się zmienia – tylko przy du i er',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Czasowniki ze zmianą samogłoski. fahren: ich fahre, du fährst, er fährt. lesen: lese, liest, liest. sehen: sehe, siehst, sieht. treffen: treffe, triffst, trifft. essen: esse, isst, isst. Zmiana tylko przy du i er/sie/es">
      <rect x="212" y="30" width="202" height="158" rx="10" class="f4"/>
      <g class="tx-s" text-anchor="middle"><text x="58" y="22">bezokolicznik</text><text x="161" y="22">ich</text><text x="262" y="22">du</text><text x="366" y="22">er / sie / es</text></g>
      <g class="tx" text-anchor="middle"><text x="58" y="56">fahren</text><text x="58" y="82">lesen</text><text x="58" y="108">sehen</text><text x="58" y="134">treffen</text><text x="58" y="160">essen</text>
        <text x="161" y="56">fahre</text><text x="161" y="82">lese</text><text x="161" y="108">sehe</text><text x="161" y="134">treffe</text><text x="161" y="160">esse</text>
        <text x="262" y="56">f<tspan class="tx-b t5">ä</tspan>hrst</text><text x="262" y="82">l<tspan class="tx-b t5">ie</tspan>st</text><text x="262" y="108">s<tspan class="tx-b t5">ie</tspan>hst</text><text x="262" y="134">tr<tspan class="tx-b t5">i</tspan>ffst</text><text x="262" y="160"><tspan class="tx-b t5">i</tspan>sst</text>
        <text x="366" y="56">f<tspan class="tx-b t5">ä</tspan>hrt</text><text x="366" y="82">l<tspan class="tx-b t5">ie</tspan>st</text><text x="366" y="108">s<tspan class="tx-b t5">ie</tspan>ht</text><text x="366" y="134">tr<tspan class="tx-b t5">i</tspan>fft</text><text x="366" y="160"><tspan class="tx-b t5">i</tspan>sst</text></g>
      <text x="313" y="206" class="tx-s" text-anchor="middle">zmiana tylko tutaj</text>
    </svg>`,
    text: `<p>Kilka popularnych czasowników zmienia samogłoskę – ale <b>tylko przy du i er/sie/es</b>: <i>fahren → du fährst, er fährt</i>; <i>lesen → du liest, er liest</i>; <i>treffen → er trifft</i>.</p>
      <p>Pozostałe osoby są regularne: <i>ich fahre, wir fahren, ihr fahrt</i>.</p>`,
    remember: 'a → ä, e → i / ie – tylko w du i er/sie/es.',
    hook: 'Zmiana dotyczy tylko „środka tabelki”: du i er. Ich, wir, ihr, sie – spokojnie, bez zmian.',
    check: { q: 'Lisa ___ gern Ski.', options: ['fahrt', 'fährt', 'fährst'], answer: 1, explain: 'Lisa = sie (ona): fahren → sie fährt. fährst to forma dla du.' },
  },
  {
    title: 'können, wollen, möchten – klamra zdania',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Czasowniki modalne: können – ich kann, du kannst, er kann; wollen – will, willst, will; möchten – möchte, möchtest, möchte. Szyk: Ich kann gut schwimmen. Willst du ins Kino gehen? – bezokolicznik na końcu">
      <g class="tx-b" text-anchor="middle"><text x="117" y="22">können</text><text x="233" y="22">wollen</text><text x="354" y="22">möchten</text></g>
      <g class="tx-s"><text x="10" y="48">ich</text><text x="10" y="72">du</text><text x="10" y="96">er/sie/es</text></g>
      <g class="tx" text-anchor="middle"><text x="117" y="48">kann</text><text x="233" y="48">will</text><text x="354" y="48">möchte</text>
        <text x="117" y="72">kannst</text><text x="233" y="72">willst</text><text x="354" y="72">möchtest</text>
        <text x="117" y="96">kann</text><text x="233" y="96">will</text><text x="354" y="96">möchte</text></g>
      <line x1="6" y1="108" x2="414" y2="108" class="ln-thin"/>
      <g class="bg ln"><rect x="6" y="118" width="80" height="34" rx="8"/><rect x="198" y="118" width="96" height="34" rx="8"/><rect x="92" y="162" width="100" height="34" rx="8"/><rect x="198" y="162" width="96" height="34" rx="8"/></g>
      <g class="f4 s4 sw"><rect x="92" y="118" width="100" height="34" rx="8"/><rect x="6" y="162" width="80" height="34" rx="8"/></g>
      <g class="f5 s5 sw"><rect x="300" y="118" width="114" height="34" rx="8"/><rect x="300" y="162" width="114" height="34" rx="8"/></g>
      <g class="tx-b" text-anchor="middle"><text x="46" y="141">Ich</text><text x="142" y="141">kann</text><text x="246" y="141">gut</text>
        <text x="46" y="185">Willst</text><text x="142" y="185">du</text><text x="246" y="185">ins Kino</text></g>
      <g class="tx" text-anchor="middle"><text x="357" y="140">schwimmen.</text><text x="357" y="184">gehen?</text></g>
    </svg>`,
    text: `<p><b>können</b> – umieć, móc; <b>wollen</b> – chcieć; <b>möchten</b> – chciałbym (grzecznie). Czasownik modalny stoi na 2. miejscu (w pytaniu „tak/nie” – na 1.), a drugi czasownik idzie w <b>bezokoliczniku na sam koniec</b>.</p>
      <p><i>Ich <b>kann</b> gut <b>schwimmen</b>.</i> <i>Er <b>will</b> heute Tennis <b>spielen</b>.</i> <i><b>Willst</b> du ins Kino <b>gehen</b>?</i> Liczba mnoga: <i>wir können, ihr könnt / wollt / möchtet</i>.</p>`,
    remember: 'Modalny na 2. miejscu, bezokolicznik na końcu: Ich kann gut schwimmen.',
    hook: 'ich i er mają tę samą formę i to bez końcówki: ich kann – er kann, ich will – er will. Żadnego „er kannt”!',
    check: { q: 'Wybierz poprawne zdanie.', options: ['Er kann gut tanzen.', 'Er kann tanzt gut.', 'Er kannt gut tanzen.'], answer: 0, explain: 'er kann (bez -t), a „tanzen” w bezokoliczniku na końcu.' },
  },
  {
    title: 'Idziemy? Propozycje i pułapki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Propozycje w dymkach: Hast du Lust, ins Kino zu gehen? Gehen wir schwimmen? Zgoda: Ja, gern! Gute Idee! Odmowa: Leider kann ich nicht – niestety nie mogę">
      <g class="tx"><text x="6" y="31">🧑</text><text x="6" y="77">🧑</text></g>
      <rect x="34" y="8" width="330" height="34" rx="14" class="f4 s4 sw"/><rect x="34" y="54" width="210" height="34" rx="14" class="f4 s4 sw"/>
      <g class="tx"><text x="46" y="31">Hast du Lust, ins Kino zu gehen?</text><text x="46" y="77">Gehen wir schwimmen?</text></g>
      <g class="tx-s" text-anchor="middle"><text x="85" y="114">✅ zgoda</text><text x="282" y="114">❌ odmowa</text></g>
      <rect x="10" y="122" width="150" height="70" rx="10" class="bg ln"/><rect x="170" y="122" width="224" height="70" rx="10" class="bg ln"/>
      <g class="tx" text-anchor="middle"><text x="85" y="150">Ja, gern!</text><text x="85" y="178">Gute Idee!</text><text x="282" y="150">Leider kann ich nicht.</text></g>
      <text x="282" y="176" class="tx-s" text-anchor="middle">(Niestety nie mogę.)</text>
    </svg>`,
    text: `<p>Proponujesz: <i>Hast du Lust, ins Kino zu gehen?</i> (Masz ochotę iść do kina?) albo krócej: <i>Gehen wir schwimmen?</i> Zgadzasz się: <i>Ja, gern! / Gute Idee!</i> Odmawiasz: <i>Leider kann ich nicht.</i></p>
      <p>Pułapki działu: <i>Rad fahren</i>, ale <i>Fußball spielen</i>; <i>du fährst, er liest, er trifft</i>; <i>ich kann – er kann</i> (bez -t); po czasowniku modalnym bezokolicznik na końcu.</p>`,
    remember: 'Leider kann ich nicht. = Niestety nie mogę.',
    hook: 'Lust to po polsku „ochota” – Hast du Lust? = Masz ochotę?',
    check: { q: 'Która odpowiedź to zgoda?', options: ['Leider kann ich nicht.', 'Gute Idee!', 'Nein, danke.'], answer: 1, explain: 'Gute Idee! – dobry pomysł! Pozostałe to odmowy.' },
  },
];

window.LESSONS['niemiecki/essen'] = [
  {
    title: 'Jedzenie w trzech kolorach',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Jedzenie według rodzaju. der: Käse, Saft, Apfel, Fisch. die: Milch, Wurst, Suppe, Kartoffel. das: Brot, Wasser, Ei, Eis. Pod spodem: das Obst – owoce, das Gemüse – warzywa; das Ei – jajko, das Eis – lody">
      <rect x="6" y="8" width="130" height="150" rx="12" class="f1 s1 sw"/><rect x="145" y="8" width="130" height="150" rx="12" class="f2 s2 sw"/><rect x="284" y="8" width="130" height="150" rx="12" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="71" y="34">der</text><text x="210" y="34">die</text><text x="349" y="34">das</text></g>
      <g class="tx" text-anchor="middle"><text x="71" y="66">🧀 Käse</text><text x="71" y="92">🧃 Saft</text><text x="71" y="118">🍎 Apfel</text><text x="71" y="144">🐟 Fisch</text>
        <text x="210" y="66">🥛 Milch</text><text x="210" y="92">🌭 Wurst</text><text x="210" y="118">🍲 Suppe</text><text x="210" y="144">🥔 Kartoffel</text>
        <text x="349" y="66">🍞 Brot</text><text x="349" y="92">💧 Wasser</text><text x="349" y="118">🥚 Ei</text><text x="349" y="144">🍦 Eis</text></g>
      <text x="210" y="182" class="tx-s" text-anchor="middle">das Obst – owoce · das Gemüse – warzywa</text>
      <text x="210" y="204" class="tx-s" text-anchor="middle">das Ei – jajko · das Eis – lody</text>
    </svg>`,
    text: `<p>W tym dziale nazwiesz jedzenie i napoje, powiesz, że jesteś głodny, i <b>zamówisz</b> coś w kawiarni lub restauracji.</p>
      <p>Jak zawsze – słówko razem z rodzajnikiem: <i>der Saft</i> (sok), <i>die Milch</i>, <i>das Brot</i>. Przyda się to za chwilę, przy zamawianiu.</p>`,
    remember: 'der Saft, der Käse · die Milch, die Wurst · das Brot, das Wasser.',
    hook: 'das Ei (jajko) i das Eis (lody) dzieli jedna litera „s” – a różnica w smaku ogromna.',
    check: { q: 'Wybierz rodzajnik: ___ Milch', options: ['der', 'die', 'das'], answer: 1, explain: 'die Milch – rodzaj żeński.' },
  },
  {
    title: 'Posiłki, głód i pragnienie',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Posiłki: das Frühstück – śniadanie, das Mittagessen – obiad, das Abendessen – kolacja; wszystkie z das. Na dole: Ich habe Hunger – jestem głodny, Ich habe Durst – chce mi się pić">
      <g class="f3 s3 sw"><rect x="10" y="8" width="120" height="100" rx="12"/><rect x="140" y="8" width="120" height="100" rx="12"/><rect x="270" y="8" width="120" height="100" rx="12"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="36">🌅</text><text x="200" y="36">☀️</text><text x="330" y="36">🌙</text>
        <text x="70" y="78">Frühstück</text><text x="200" y="78">Mittagessen</text><text x="330" y="78">Abendessen</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="56">das</text><text x="200" y="56">das</text><text x="330" y="56">das</text>
        <text x="70" y="98">śniadanie</text><text x="200" y="98">obiad</text><text x="330" y="98">kolacja</text></g>
      <rect x="10" y="124" width="185" height="64" rx="12" class="f4 s4 sw"/><rect x="205" y="124" width="185" height="64" rx="12" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="102" y="150">Ich habe Hunger.</text><text x="297" y="150">Ich habe Durst.</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="174">🍽️ jestem głodny</text><text x="297" y="174">🥤 chce mi się pić</text></g>
    </svg>`,
    text: `<p>Trzy posiłki: <i>das Frühstück</i> (śniadanie), <i>das Mittagessen</i> (obiad), <i>das Abendessen</i> (kolacja) – wszystkie z <b>das</b>.</p>
      <p>Głód i pragnienie po niemiecku się <b>ma</b>: <i>Ich habe Hunger.</i> (Jestem głodny.) <i>Ich habe Durst.</i> (Chce mi się pić.)</p>`,
    remember: 'Ich habe Hunger / Durst – z haben, nie z sein.',
    hook: 'Abendessen = Abend (wieczór) + Essen (jedzenie) – wieczorne jedzenie, czyli kolacja. Mittagessen – jedzenie w południe.',
    check: { q: 'Jest 19:00, jesz kolację. To…', options: ['das Frühstück', 'das Mittagessen', 'das Abendessen'], answer: 2, explain: 'Abend – wieczór, więc das Abendessen to kolacja.' },
  },
  {
    title: 'essen: du isst, er isst',
    svg: `<svg viewBox="0 0 420 196" role="img" aria-label="Odmiana essen: ich esse, du isst, er sie es isst, wir essen, ihr esst, sie Sie essen. Przykłady: Ich esse kein Fleisch (das). Ich esse keinen Fisch (der)">
      <g class="bg ln"><rect x="20" y="10" width="120" height="54" rx="10"/><rect x="20" y="72" width="120" height="54" rx="10"/><rect x="150" y="72" width="120" height="54" rx="10"/><rect x="280" y="72" width="120" height="54" rx="10"/></g>
      <g class="f4 s4 sw"><rect x="150" y="10" width="120" height="54" rx="10"/><rect x="280" y="10" width="120" height="54" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="80" y="30">ich</text><text x="210" y="30">du</text><text x="340" y="30">er / sie / es</text><text x="80" y="92">wir</text><text x="210" y="92">ihr</text><text x="340" y="92">sie / Sie</text></g>
      <g class="tx-b" text-anchor="middle"><text x="80" y="54">esse</text><text x="210" y="54"><tspan class="t5">i</tspan>sst</text><text x="340" y="54"><tspan class="t5">i</tspan>sst</text><text x="80" y="116">essen</text><text x="210" y="116">esst</text><text x="340" y="116">essen</text></g>
      <g class="tx" text-anchor="middle"><text x="210" y="158">Ich esse <tspan class="tx-b t3">kein</tspan> Fleisch.</text><text x="210" y="184">Ich esse <tspan class="tx-b t1">keinen</tspan> Fisch.</text></g>
    </svg>`,
    text: `<p><b>essen</b> (jeść) zmienia e → i przy <b>du</b> i <b>er/sie/es</b>: <i>du isst, er isst</i>. Uwaga na <i>ihr esst</i> – tu zostaje „e”.</p>
      <p>Czego nie jesz? <i>kein / keinen</i>: <i>Ich esse kein Fleisch.</i> (das Fleisch) <i>Ich esse keinen Fisch.</i> (der Fisch – w bierniku keinen).</p>`,
    remember: 'ich esse, du isst, er isst, wir essen, ihr esst, sie essen.',
    hook: 'du isst i er isst wyglądają identycznie – podwójne „ss” zostaje, zmienia się tylko e na i.',
    check: { q: 'Er ___ gern Kuchen.', options: ['esst', 'isst', 'esse'], answer: 1, explain: 'essen: er isst (e → i). esst to forma dla ihr.' },
  },
  {
    title: 'Zamawiasz? To biernik',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Zamawianie: der Saft – Ich möchte einen Saft. die Suppe – Ich möchte eine Suppe. das Eis – Ich möchte ein Eis. Zmienia się tylko der: ein na einen">
      <defs><marker id="a-k8de-essen-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="10" width="120" height="38" rx="8" class="f1 s1 sw"/><rect x="176" y="10" width="238" height="38" rx="8" class="f1 s1 sw"/>
      <rect x="6" y="58" width="120" height="38" rx="8" class="f2 s2 sw"/><rect x="176" y="58" width="238" height="38" rx="8" class="f2 s2 sw"/>
      <rect x="6" y="106" width="120" height="38" rx="8" class="f3 s3 sw"/><rect x="176" y="106" width="238" height="38" rx="8" class="f3 s3 sw"/>
      <g class="ln"><path d="M132,29 L168,29" marker-end="url(#a-k8de-essen-4)"/><path d="M132,77 L168,77" marker-end="url(#a-k8de-essen-4)"/><path d="M132,125 L168,125" marker-end="url(#a-k8de-essen-4)"/></g>
      <g class="tx" text-anchor="middle"><text x="66" y="35">der Saft</text><text x="66" y="83">die Suppe</text><text x="66" y="131">das Eis</text>
        <text x="295" y="35">Ich möchte <tspan class="tx-b t1">einen</tspan> Saft.</text><text x="295" y="83">Ich möchte <tspan class="tx-b">eine</tspan> Suppe.</text><text x="295" y="131">Ich möchte <tspan class="tx-b">ein</tspan> Eis.</text></g>
      <text x="210" y="170" class="tx-s" text-anchor="middle">zmienia się tylko der: ein → einen</text>
      <text x="210" y="192" class="tx" text-anchor="middle">Ich nehme <tspan class="tx-b t1">einen</tspan> Orangensaft.</text>
    </svg>`,
    text: `<p>Gdy zamawiasz (<i>Ich möchte…</i> – chciałbym, <i>Ich nehme…</i> – wezmę), rzeczownik jest w <b>bierniku</b>. Jak w szkole przy <i>brauchen</i>: zmienia się tylko rodzaj męski – <b>einen</b> Saft, <b>einen</b> Tee.</p>
      <p>Żeński i nijaki bez zmian: <i>eine Suppe, eine Pizza, ein Eis, ein Wasser</i>.</p>`,
    remember: 'Ich möchte einen Tee (der) / eine Suppe (die) / ein Eis (das).',
    hook: 'Pan (der) przy zamawianiu dostaje „n”: einen Saft, einen Tee, einen Kaffee. Pani i dziecko – bez zmian.',
    check: { q: 'Ich nehme ___ Tee.', options: ['ein', 'eine', 'einen'], answer: 2, explain: 'der Tee – rodzaj męski, w bierniku einen.' },
  },
  {
    title: 'W restauracji – cała scena',
    svg: `<svg viewBox="0 0 400 238" role="img" aria-label="Dialog w restauracji. Gość: Die Speisekarte, bitte. Kelner: Was möchten Sie? Gość: Ich möchte eine Suppe. Kelner: Guten Appetit! Gość: Das schmeckt lecker! Gość: Zahlen, bitte!">
      <g class="f4 s4 sw"><rect x="34" y="8" width="250" height="32" rx="14"/><rect x="34" y="84" width="250" height="32" rx="14"/><rect x="34" y="160" width="250" height="32" rx="14"/><rect x="34" y="198" width="250" height="32" rx="14"/></g>
      <g class="f5 s5 sw"><rect x="116" y="46" width="250" height="32" rx="14"/><rect x="116" y="122" width="250" height="32" rx="14"/></g>
      <g class="tx"><text x="6" y="30">🙂</text><text x="6" y="106">🙂</text><text x="6" y="182">🙂</text><text x="6" y="220">🙂</text><text x="372" y="68">🤵</text><text x="372" y="144">🤵</text></g>
      <g class="tx"><text x="46" y="30">Die Speisekarte, bitte.</text><text x="128" y="68">Was möchten Sie?</text><text x="46" y="106">Ich möchte eine Suppe.</text>
        <text x="128" y="144">Guten Appetit!</text><text x="46" y="182">Das schmeckt lecker!</text><text x="46" y="220">Zahlen, bitte!</text></g>
    </svg>`,
    text: `<p>Prosisz o kartę: <i>Die Speisekarte, bitte.</i> Kelner pyta: <i>Was möchten Sie?</i> albo <i>Was möchtest du trinken?</i> Pytasz o cenę: <i>Was kostet die Suppe?</i> Na koniec: <i>Zahlen, bitte!</i> albo <i>Die Rechnung, bitte!</i></p>
      <p>Pułapki działu: <i>Ich habe Hunger</i> (nie „ich bin”); <i>du isst, er isst</i>; przy zamawianiu <i>einen</i> dla der; <i>kein Fleisch</i>, ale <i>keinen Fisch</i>.</p>`,
    remember: 'Die Speisekarte, bitte. · Ich möchte… · Zahlen, bitte!',
    hook: 'Trzy zdania ratunkowe na wakacjach: karta – zamówienie – płacę. Speisekarte, möchte, zahlen.',
    check: { q: 'Siadasz w kawiarni i chcesz dostać menu. Co mówisz?', options: ['Zahlen, bitte!', 'Die Speisekarte, bitte.', 'Guten Appetit!'], answer: 1, explain: 'die Speisekarte – karta (menu). Zahlen, bitte – płacę; Guten Appetit – smacznego.' },
  },
];

window.LESSONS['niemiecki/einkaufen'] = [
  {
    title: 'Gdzie co kupisz',
    svg: `<svg viewBox="0 0 420 212" role="img" aria-label="Sklepy: der Supermarkt, die Bäckerei – piekarnia, die Apotheke – apteka, die Buchhandlung – księgarnia, das Schuhgeschäft – sklep obuwniczy, das Kaufhaus – dom towarowy">
      <rect x="6" y="8" width="130" height="96" rx="12" class="f1 s1 sw"/>
      <g class="f2 s2 sw"><rect x="145" y="8" width="130" height="96" rx="12"/><rect x="284" y="8" width="130" height="96" rx="12"/><rect x="6" y="112" width="130" height="96" rx="12"/></g>
      <g class="f3 s3 sw"><rect x="145" y="112" width="130" height="96" rx="12"/><rect x="284" y="112" width="130" height="96" rx="12"/></g>
      <g class="tx" text-anchor="middle"><text x="71" y="38">🛒</text><text x="210" y="38">🥖</text><text x="349" y="38">💊</text><text x="71" y="142">📚</text><text x="210" y="142">👟</text><text x="349" y="142">🏬</text>
        <text x="71" y="76">Supermarkt</text><text x="210" y="76">Bäckerei</text><text x="349" y="76">Apotheke</text><text x="71" y="180">Buchhandlung</text><text x="210" y="180">Schuhgeschäft</text><text x="349" y="180">Kaufhaus</text></g>
      <g class="tx-s" text-anchor="middle"><text x="71" y="56">der</text><text x="210" y="56">die</text><text x="349" y="56">die</text><text x="71" y="160">die</text><text x="210" y="160">das</text><text x="349" y="160">das</text>
        <text x="71" y="96">supermarket</text><text x="210" y="96">piekarnia</text><text x="349" y="96">apteka</text><text x="71" y="200">księgarnia</text><text x="210" y="200">sklep obuwniczy</text><text x="349" y="200">dom towarowy</text></g>
    </svg>`,
    text: `<p>W tym dziale zrobisz zakupy: nazwiesz sklepy i ubrania, zapytasz o cenę, powiesz, co ci się podoba, i zdecydujesz: „wezmę to”.</p>
      <p>Sklepy: <i>der Supermarkt, der Markt</i> (targ), <i>die Bäckerei, die Apotheke, die Buchhandlung, das Schuhgeschäft, das Kaufhaus</i>. Chleb kupisz <i>in der Bäckerei</i>, leki – <i>in der Apotheke</i>.</p>`,
    remember: 'die Bäckerei – piekarnia, die Apotheke – apteka, die Buchhandlung – księgarnia.',
    hook: 'Szukaj słówka w środku: Buch-handlung – tam jest Buch (książka); Schuh-geschäft – tam są Schuhe (buty).',
    check: { q: 'Gdzie kupisz książkę?', options: ['in der Apotheke', 'in der Buchhandlung', 'in der Bäckerei'], answer: 1, explain: 'das Buch = książka, więc die Buchhandlung to księgarnia.' },
  },
  {
    title: 'Ubrania i kolory',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Ubrania według rodzaju. der: Rock, Pullover. die: Hose, Jacke, Mütze, Jeans. das: Kleid, T-Shirt. Liczba mnoga: die Schuhe. Kolory: rot czerwony, blau niebieski, grün zielony, gelb żółty, schwarz czarny, weiß biały, grau szary, braun brązowy">
      <rect x="6" y="8" width="98" height="146" rx="12" class="f1 s1 sw"/><rect x="110" y="8" width="98" height="146" rx="12" class="f2 s2 sw"/><rect x="214" y="8" width="98" height="146" rx="12" class="f3 s3 sw"/><rect x="318" y="8" width="98" height="146" rx="12" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="55" y="32">der</text><text x="159" y="32">die</text><text x="263" y="32">das</text><text x="367" y="32">die</text></g>
      <text x="367" y="48" class="tx-s" text-anchor="middle">l. mn.</text>
      <g class="tx" text-anchor="middle"><text x="55" y="70">Rock</text><text x="55" y="92">Pullover</text>
        <text x="159" y="70">Hose</text><text x="159" y="92">Jacke</text><text x="159" y="114">Mütze</text><text x="159" y="136">Jeans</text>
        <text x="263" y="70">Kleid</text><text x="263" y="92">T-Shirt</text><text x="367" y="70">Schuhe</text></g>
      <g class="tx" text-anchor="middle"><text x="57" y="176">rot</text><text x="161" y="176">blau</text><text x="265" y="176">grün</text><text x="369" y="176">gelb</text>
        <text x="57" y="216">schwarz</text><text x="161" y="216">weiß</text><text x="265" y="216">grau</text><text x="369" y="216">braun</text></g>
      <g class="tx-s" text-anchor="middle"><text x="57" y="192">czerwony</text><text x="161" y="192">niebieski</text><text x="265" y="192">zielony</text><text x="369" y="192">żółty</text>
        <text x="57" y="232">czarny</text><text x="161" y="232">biały</text><text x="265" y="232">szary</text><text x="369" y="232">brązowy</text></g>
    </svg>`,
    text: `<p>Ubrania: <i>die Hose</i> (spodnie), <i>der Rock</i> (spódnica), <i>das Kleid</i> (sukienka), <i>die Jacke</i> (kurtka), <i>die Mütze</i> (czapka), <i>die Schuhe</i> (buty). Rodzajnik będzie ważny w ostatnim kroku – przy „wezmę go / ją / je”.</p>
      <p>Kolory: <i>rot, blau, grün, gelb, schwarz, weiß, grau, braun, rosa, orange</i>.</p>`,
    remember: 'der Rock – spódnica, das Kleid – sukienka, die Hose – spodnie.',
    hook: 'der Rock to nie muzyka – to spódnica. Wyobraź sobie rockmana w spódnicy, a zapamiętasz na zawsze.',
  },
  {
    title: 'W sklepie – rozmowa',
    svg: `<svg viewBox="0 0 400 208" role="img" aria-label="Dialog w sklepie. Sprzedawca: Kann ich Ihnen helfen? Klient: Ja, ich suche eine Jacke. Klient: Was kostet die Jacke? Sprzedawca: Neunundvierzig Euro. Klient: Das ist zu teuer!">
      <g class="f5 s5 sw"><rect x="34" y="8" width="260" height="32" rx="14"/><rect x="34" y="128" width="260" height="32" rx="14"/></g>
      <g class="f4 s4 sw"><rect x="106" y="48" width="260" height="32" rx="14"/><rect x="106" y="88" width="260" height="32" rx="14"/><rect x="106" y="168" width="260" height="32" rx="14"/></g>
      <g class="tx"><text x="6" y="30">🧑</text><text x="6" y="150">🧑</text><text x="372" y="70">🙂</text><text x="372" y="110">🙂</text><text x="372" y="190">🙂</text></g>
      <g class="tx"><text x="46" y="30">Kann ich Ihnen helfen?</text><text x="118" y="70">Ja, ich suche eine Jacke.</text><text x="118" y="110">Was kostet die Jacke?</text>
        <text x="46" y="150">Neunundvierzig Euro.</text><text x="118" y="190">Das ist zu teuer!</text></g>
    </svg>`,
    text: `<p>Sprzedawca mówi do ciebie na <b>Sie</b>: <i>Kann ich Ihnen helfen?</i> (W czym mogę pomóc?), <i>Welche Größe?</i> (Jaki rozmiar?).</p>
      <p>Ty: <i>Ich suche eine Jacke.</i> (Szukam kurtki.) <i>Kann ich die Jacke anprobieren?</i> (Czy mogę przymierzyć?) <i>Was kostet der Pullover?</i> I ocena: <i>Das ist zu teuer / zu groß.</i> – drogo to <i>teuer</i>, tanio – <i>billig</i>.</p>`,
    remember: 'Was kostet…? – Ile kosztuje…? · zu teuer – za drogie.',
    hook: 'anprobieren – w środku „probieren”, jak polskie „próbować”: przymierzasz, czyli próbujesz na sobie.',
    check: { q: 'Co znaczy „Welche Größe?”', options: ['Jaki kolor?', 'Jaki rozmiar?', 'Ile to kosztuje?'], answer: 1, explain: 'die Größe – rozmiar (groß = duży).' },
  },
  {
    title: 'Podoba mi się – gefallen',
    svg: `<svg viewBox="0 0 400 192" role="img" aria-label="Jedna rzecz: Das T-Shirt gefällt mir. Kilka rzeczy: Die Schuhe gefallen mir nicht. Czasownik zgadza się z rzeczą, nie z osobą">
      <rect x="10" y="8" width="185" height="150" rx="12" class="f4 s4 sw"/><rect x="205" y="8" width="185" height="150" rx="12" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="102" y="44">👕</text><text x="297" y="44">👟👟</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="68">jedna rzecz</text><text x="297" y="68">kilka rzeczy</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="98">Das T-Shirt</text><text x="102" y="146">mir.</text><text x="297" y="98">Die Schuhe</text><text x="297" y="146">mir nicht.</text></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="122">gefällt</text><text x="297" y="122">gefallen</text></g>
      <text x="200" y="182" class="tx-s" text-anchor="middle">czasownik zgadza się z rzeczą, nie z tobą</text>
    </svg>`,
    text: `<p>„Podoba mi się” to po niemiecku <b>gefallen</b>. Podmiotem jest <b>rzecz</b>, która się podoba – tak jak po polsku: „spódnica mi się podoba”.</p>
      <p>Jedna rzecz: <i>Der Rock <b>gefällt</b> mir.</i> Kilka rzeczy: <i>Die Schuhe <b>gefallen</b> mir nicht.</i></p>`,
    remember: 'jedna rzecz – gefällt, wiele rzeczy – gefallen.',
    hook: 'Kropki nad ä = jedna rzecz: Das T-Shirt gefällt mir. Więcej rzeczy – kropki znikają: Die Schuhe gefallen mir.',
    check: { q: 'Die Jacke ___ mir.', options: ['gefallen', 'gefällt', 'gefällst'], answer: 1, explain: 'Jedna rzecz (die Jacke) – gefällt.' },
  },
  {
    title: 'Wezmę go! ihn, sie, es – i ceny',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Zaimki w bierniku: der Pullover – Ich nehme ihn, die Jacke – sie, das T-Shirt – es, die Schuhe – sie. Ceny: 2,50 euro – zwei Euro fünfzig, 3,99 euro – drei Euro neunundneunzig. teuer – drogi, billig – tani">
      <rect x="6" y="8" width="98" height="96" rx="12" class="f1 s1 sw"/><rect x="110" y="8" width="98" height="96" rx="12" class="f2 s2 sw"/><rect x="214" y="8" width="98" height="96" rx="12" class="f3 s3 sw"/><rect x="318" y="8" width="98" height="96" rx="12" class="f5 s5 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="55" y="30">der Pullover</text><text x="159" y="30">die Jacke</text><text x="263" y="30">das T-Shirt</text><text x="367" y="30">die Schuhe</text>
        <text x="55" y="54">Ich nehme</text><text x="159" y="54">Ich nehme</text><text x="263" y="54">Ich nehme</text><text x="367" y="54">Ich nehme</text></g>
      <g class="tx-b" text-anchor="middle"><text x="55" y="86">ihn</text><text x="159" y="86">sie</text><text x="263" y="86">es</text><text x="367" y="86">sie</text></g>
      <rect x="6" y="118" width="201" height="60" rx="10" class="bg ln"/><rect x="213" y="118" width="201" height="60" rx="10" class="bg ln"/>
      <g class="tx-b" text-anchor="middle"><text x="106" y="144">2,50 €</text><text x="313" y="144">3,99 €</text></g>
      <g class="tx-s" text-anchor="middle"><text x="106" y="166">zwei Euro fünfzig</text><text x="313" y="166">drei Euro neunundneunzig</text></g>
      <text x="210" y="200" class="tx-s" text-anchor="middle">teuer – drogi · billig – tani</text>
    </svg>`,
    text: `<p>„Wezmę go / ją / je” zależy od rodzajnika rzeczy: <b>der</b> → <i>ihn</i>, <b>die</b> → <i>sie</i>, <b>das</b> → <i>es</i>, liczba mnoga → <i>sie</i>. <i>Der Rock kostet 25 Euro. Ich nehme <b>ihn</b>.</i></p>
      <p>Cenę czytasz: euro, potem centy – <i>zwei Euro fünfzig</i>. Pułapki działu: <i>gefällt</i> (jedna rzecz) / <i>gefallen</i> (wiele); <i>ihn</i> przy der – nawet gdy po polsku mówisz „ją” (spódnicę); <i>teuer</i> = drogi, <i>billig</i> = tani.</p>`,
    remember: 'der → ihn, die → sie, das → es, liczba mnoga → sie.',
    hook: 'Rodzaj męski w bierniku zawsze dostaje „n”: den, einen, keinen – i ihn.',
    check: { q: 'Das Kleid kostet 30 Euro. Ich nehme ___.', options: ['ihn', 'sie', 'es'], answer: 2, explain: 'das Kleid – rodzaj nijaki, więc es.' },
  },
];
