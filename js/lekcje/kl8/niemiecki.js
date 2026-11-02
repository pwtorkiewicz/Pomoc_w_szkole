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

window.LESSONS['niemiecki/wohnen'] = [
  {
    title: 'Dom po niemiecku',
    svg: `<svg viewBox="0 0 420 262" role="img" aria-label="Przekrój domu (das Haus) z pomieszczeniami: das Schlafzimmer, das Badezimmer, das Wohnzimmer, der Flur i die Küche. Kolor oznacza rodzajnik: der – niebieski, die – pomarańczowy, das – zielony">
      <polygon points="20,72 210,12 400,72" class="f4 s4 sw"/>
      <text x="210" y="60" class="tx-b" text-anchor="middle">🏠 das Haus</text>
      <g class="sw"><rect x="20" y="72" width="200" height="72" class="f3 s3"/><rect x="220" y="72" width="180" height="72" class="f3 s3"/>
        <rect x="20" y="144" width="150" height="72" class="f3 s3"/><rect x="170" y="144" width="100" height="72" class="f1 s1"/><rect x="270" y="144" width="130" height="72" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="120" y="102">🛏️</text><text x="310" y="102">🛁</text><text x="95" y="174">🛋️</text><text x="220" y="174">🚪</text><text x="335" y="174">🍳</text>
        <text x="120" y="130">das Schlafzimmer</text><text x="310" y="130">das Badezimmer</text><text x="95" y="202">das Wohnzimmer</text><text x="220" y="202">der Flur</text><text x="335" y="202">die Küche</text></g>
      <rect x="95" y="234" width="16" height="16" class="f1 s1 sw"/><rect x="185" y="234" width="16" height="16" class="f2 s2 sw"/><rect x="275" y="234" width="16" height="16" class="f3 s3 sw"/>
      <g class="tx"><text x="117" y="248">der</text><text x="207" y="248">die</text><text x="297" y="248">das</text></g>
    </svg>`,
    text: `<p>Dom to <b>das Haus</b>, mieszkanie – <b>die Wohnung</b>, pokój – <b>das Zimmer</b>. Wiele pomieszczeń to „coś + Zimmer”: <i>das Wohnzimmer</i> (salon), <i>das Schlafzimmer</i> (sypialnia), <i>das Kinderzimmer</i> (pokój dziecięcy), <i>das Badezimmer</i> (łazienka). Do tego <i>die Küche</i> (kuchnia), <i>der Flur</i> (przedpokój), <i>der Balkon</i> i <i>der Garten</i> (ogród).</p>
      <p>W tym dziale opiszesz swój pokój i powiesz, gdzie co stoi. Rzeczowniki ucz się zawsze z rodzajnikiem – pomogą kolory: <b>der</b> niebieski, <b>die</b> pomarańczowy, <b>das</b> zielony.</p>`,
    remember: 'das Wohnzimmer, das Schlafzimmer, das Badezimmer – wszystkie z das, tak jak das Zimmer.',
    hook: 'Na końcu „-zimmer”? To na początku das: das Wohnzimmer, das Kinderzimmer.',
    check: { q: 'Co znaczy „der Flur”?', options: ['sypialnia', 'przedpokój', 'ogród'], answer: 1, explain: 'der Flur – przedpokój; sypialnia to das Schlafzimmer, ogród – der Garten.' },
  },
  {
    title: 'Es gibt – co jest w pokoju',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Po es gibt stoi biernik: der Schrank zmienia się w einen Schrank, das Bett zostaje ein Bett, die Lampe zostaje eine Lampe">
      <defs><marker id="a-k8de-wohnen-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="210" y="24" class="tx-b" text-anchor="middle">In meinem Zimmer gibt es …</text>
      <g class="sw"><rect x="10" y="40" width="150" height="40" rx="8" class="f1 s1"/><rect x="230" y="40" width="180" height="40" rx="8" class="f1 s1"/>
        <rect x="10" y="92" width="150" height="40" rx="8" class="f3 s3"/><rect x="230" y="92" width="180" height="40" rx="8" class="f3 s3"/>
        <rect x="10" y="144" width="150" height="40" rx="8" class="f2 s2"/><rect x="230" y="144" width="180" height="40" rx="8" class="f2 s2"/></g>
      <g class="ln"><path d="M166,66 L222,66" marker-end="url(#a-k8de-wohnen-2)"/><path d="M166,118 L222,118" marker-end="url(#a-k8de-wohnen-2)"/><path d="M166,170 L222,170" marker-end="url(#a-k8de-wohnen-2)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="195" y="56">zmiana!</text><text x="195" y="108">bez zmian</text><text x="195" y="160">bez zmian</text></g>
      <g class="tx" text-anchor="middle"><text x="85" y="66">der Schrank</text><text x="85" y="118">das Bett</text><text x="85" y="170">die Lampe</text>
        <text x="320" y="66">ein<tspan class="tx-b t2">en</tspan> Schrank</text><text x="320" y="118">ein Bett</text><text x="320" y="170">eine Lampe</text></g>
      <text x="210" y="206" class="tx-s" text-anchor="middle">Mein Zimmer ist klein, aber gemütlich und hell.</text>
    </svg>`,
    text: `<p>Żeby powiedzieć, co jest w pokoju, użyj <b>es gibt</b> (jest, znajduje się): <i>In meinem Zimmer gibt es einen Schrank, ein Bett und eine Lampe.</i></p>
      <p>Po <b>es gibt</b> stoi <b>biernik</b>. Zmienia się tylko rodzaj męski: <b>der → einen</b>. Przy das i die zostaje <b>ein</b> i <b>eine</b>. Dodaj, jaki jest pokój: <i>klein</i> (mały), <i>gemütlich</i> (przytulny), <i>hell</i> (jasny).</p>`,
    remember: 'es gibt + biernik: einen (der), ein (das), eine (die).',
    hook: 'Po es gibt przebiera się tylko „pan” (der → einen). „Pani” i „dziecko” zostają, jak były.',
    check: { q: 'In meinem Zimmer gibt es ___ Teppich. (der Teppich)', options: ['ein', 'eine', 'einen'], answer: 2, explain: 'Po „es gibt” stoi biernik: der Teppich → einen Teppich.' },
  },
  {
    title: 'Gdzie? Kot pod łóżkiem',
    svg: `<svg viewBox="0 0 420 238" role="img" aria-label="Pokój: lampa stoi na stole (auf dem Tisch), kot leży pod łóżkiem (unter dem Bett), obraz wisi nad sofą (über dem Sofa)">
      <line x1="10" y1="190" x2="410" y2="190" class="ln sw"/>
      <rect x="15" y="128" width="100" height="10" rx="2" class="f1 s1 sw"/>
      <g class="ln sw"><line x1="25" y1="138" x2="25" y2="190"/><line x1="105" y1="138" x2="105" y2="190"/><line x1="65" y1="112" x2="65" y2="128"/></g>
      <polygon points="53,92 77,92 88,112 42,112" class="f2 s2 sw"/>
      <rect x="140" y="105" width="12" height="53" rx="3" class="f3 s3 sw"/><rect x="140" y="130" width="140" height="28" rx="6" class="f3 s3 sw"/>
      <rect x="156" y="118" width="32" height="12" rx="5" class="f4 s4"/>
      <g class="ln sw"><line x1="150" y1="158" x2="150" y2="190"/><line x1="272" y1="158" x2="272" y2="190"/><line x1="310" y1="170" x2="310" y2="190"/><line x1="400" y1="170" x2="400" y2="190"/></g>
      <text x="211" y="185" class="tx" text-anchor="middle">🐈</text>
      <rect x="300" y="118" width="110" height="27" rx="6" class="f3 s3 sw"/><rect x="300" y="145" width="110" height="25" rx="6" class="f3 s3 sw"/>
      <path d="M335,40 L355,24 L375,40" class="ln-thin"/>
      <rect x="325" y="40" width="60" height="44" class="f3 s3 sw"/>
      <polyline points="331,78 347,56 358,70 366,62 379,78" class="ln"/>
      <g class="tx" text-anchor="middle"><text x="65" y="212">auf dem Tisch</text><text x="210" y="212">unter dem Bett</text><text x="355" y="212">über dem Sofa</text></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="230">die Lampe</text><text x="210" y="230">die Katze</text><text x="355" y="230">das Bild</text></g>
    </svg>`,
    text: `<p>Na pytanie <b>Wo?</b> (gdzie?) odpowiadasz przyimkiem miejsca: <b>in</b> (w), <b>auf</b> (na), <b>unter</b> (pod), <b>über</b> (nad), <b>neben</b> (obok), <b>vor</b> (przed), <b>hinter</b> (za), <b>zwischen</b> (między).</p>
      <p><i>Die Lampe steht auf dem Tisch. Die Katze liegt unter dem Bett. Das Bild hängt über dem Sofa.</i></p>`,
    remember: 'Wo? → in, auf, unter, über, neben, vor, hinter, zwischen.',
    hook: 'Angielski podpowiada: unter ≈ under (pod), über ≈ over (nad), in ≈ in (w).',
    check: { q: 'Der Ball liegt ___ dem Schrank. (za)', options: ['vor', 'hinter', 'neben'], answer: 1, explain: 'hinter – za; vor – przed, neben – obok.' },
  },
  {
    title: 'dem czy der? Celownik',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Na pytanie Wo? rodzajnik przechodzi w celownik: der Tisch – auf dem Tisch, das Bett – unter dem Bett, die Lampe – neben der Lampe; skrót in dem = im, np. im Regal">
      <defs><marker id="a-k8de-wohnen-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="210" y="22" class="tx-b" text-anchor="middle">Wo? → celownik (Dativ)</text>
      <g class="sw"><rect x="10" y="36" width="130" height="40" rx="8" class="f1 s1"/><rect x="200" y="36" width="210" height="40" rx="8" class="f1 s1"/>
        <rect x="10" y="86" width="130" height="40" rx="8" class="f3 s3"/><rect x="200" y="86" width="210" height="40" rx="8" class="f3 s3"/>
        <rect x="10" y="136" width="130" height="40" rx="8" class="f2 s2"/><rect x="200" y="136" width="210" height="40" rx="8" class="f2 s2"/></g>
      <g class="ln"><path d="M146,56 L192,56" marker-end="url(#a-k8de-wohnen-4)"/><path d="M146,106 L192,106" marker-end="url(#a-k8de-wohnen-4)"/><path d="M146,156 L192,156" marker-end="url(#a-k8de-wohnen-4)"/></g>
      <g class="tx" text-anchor="middle"><text x="75" y="62">der Tisch</text><text x="75" y="112">das Bett</text><text x="75" y="162">die Lampe</text>
        <text x="305" y="62">auf <tspan class="tx-b t1">dem</tspan> Tisch</text><text x="305" y="112">unter <tspan class="tx-b t3">dem</tspan> Bett</text><text x="305" y="162">neben <tspan class="tx-b t2">der</tspan> Lampe</text></g>
      <text x="210" y="204" class="tx-b" text-anchor="middle">in + dem = im → im Regal</text>
    </svg>`,
    text: `<p>Po przyimku miejsca (pytanie <b>Wo?</b>) rodzajnik przechodzi w <b>celownik</b>: <b>der → dem</b>, <b>das → dem</b>, <b>die → der</b>.</p>
      <p>Skróty: <b>im</b> = in dem (<i>Das Buch steht im Regal.</i>), <b>am</b> = an dem.</p>`,
    remember: 'Wo? → der, das → dem; die → der.',
    hook: '„der” po przyimku miejsca to zwykle przebrana „pani”: die Lampe → neben der Lampe.',
    check: { q: 'Der Teppich liegt vor ___ Sofa. (das Sofa)', options: ['dem', 'der', 'das'], answer: 0, explain: 'das Sofa, pytanie „Wo?” – celownik: vor dem Sofa.' },
  },
  {
    title: 'Pułapki: opis pokoju bez błędów',
    svg: `<svg viewBox="0 0 420 225" role="img" aria-label="Trzy typowe błędy i poprawne wersje: Es gibt einen Schreibtisch; Die Katze sitzt neben der Lampe; Ich räume mein Zimmer auf">
      <g class="sw"><rect x="5" y="8" width="410" height="64" rx="10" class="f4 s4"/><rect x="5" y="80" width="410" height="64" rx="10" class="f4 s4"/><rect x="5" y="152" width="410" height="64" rx="10" class="f4 s4"/></g>
      <g class="tx t2"><text x="20" y="34">✗ Es gibt ein Schreibtisch.</text><text x="20" y="106">✗ Die Katze sitzt neben die Lampe.</text><text x="20" y="178">✗ Ich aufräume mein Zimmer.</text></g>
      <g class="tx-b t3"><text x="20" y="60">✓ Es gibt einen Schreibtisch.</text><text x="20" y="132">✓ Die Katze sitzt neben der Lampe.</text><text x="20" y="204">✓ Ich räume mein Zimmer auf.</text></g>
    </svg>`,
    text: `<p>Najczęstsze błędy:</p>
      <ul><li>po <b>es gibt</b> rodzaj męski ma <b>einen</b>,</li><li>po przyimku miejsca <b>die</b> zmienia się w <b>der</b>, a der i das – w <b>dem</b>,</li><li>w <i>aufräumen</i> (sprzątać) część <b>auf</b> idzie na koniec zdania.</li></ul>
      <p>Inne prace domowe: <i>staubsaugen</i> (odkurzać), <i>abwaschen</i> (zmywać), <i>kochen</i> (gotować), <i>das Bett machen</i> (ścielić łóżko), <i>den Müll rausbringen</i> (wynosić śmieci).</p>`,
    remember: 'Ich räume mein Zimmer auf. – „auf” na końcu zdania.',
    check: { q: 'Które zdanie jest poprawne?', options: ['Die Katze schläft unter das Bett.', 'Die Katze schläft unter der Bett.', 'Die Katze schläft unter dem Bett.'], answer: 2, explain: 'das Bett, pytanie „Wo?” → unter dem Bett.' },
  },
];

window.LESSONS['niemiecki/stadt'] = [
  {
    title: 'Miasto: dokąd idziesz?',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Kafelki miejsc w mieście w kolorach rodzajników: der Bahnhof, die Haltestelle, die Post, die Bank, das Kino, das Museum, die Kirche, das Krankenhaus, der Park">
      <g class="sw"><rect x="4" y="8" width="136" height="62" rx="10" class="f1 s1"/><rect x="142" y="8" width="136" height="62" rx="10" class="f2 s2"/><rect x="280" y="8" width="136" height="62" rx="10" class="f2 s2"/>
        <rect x="4" y="80" width="136" height="62" rx="10" class="f2 s2"/><rect x="142" y="80" width="136" height="62" rx="10" class="f3 s3"/><rect x="280" y="80" width="136" height="62" rx="10" class="f3 s3"/>
        <rect x="4" y="152" width="136" height="62" rx="10" class="f2 s2"/><rect x="142" y="152" width="136" height="62" rx="10" class="f3 s3"/><rect x="280" y="152" width="136" height="62" rx="10" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="72" y="34">🚉</text><text x="210" y="34">🚏</text><text x="348" y="34">📮</text><text x="72" y="106">🏦</text><text x="210" y="106">🎬</text><text x="348" y="106">🏛️</text><text x="72" y="178">⛪</text><text x="210" y="178">🏥</text><text x="348" y="178">🌳</text>
        <text x="72" y="58">der Bahnhof</text><text x="210" y="58">die Haltestelle</text><text x="348" y="58">die Post</text><text x="72" y="130">die Bank</text><text x="210" y="130">das Kino</text><text x="348" y="130">das Museum</text><text x="72" y="202">die Kirche</text><text x="210" y="202">das Krankenhaus</text><text x="348" y="202">der Park</text></g>
    </svg>`,
    text: `<p>W tym dziale zapytasz o drogę, powiesz, czym jedziesz, i kupisz bilet. Najpierw miejsca: <i>der Bahnhof</i> (dworzec), <i>die Haltestelle</i> (przystanek), <i>die Post</i> (poczta), <i>die Kirche</i> (kościół), <i>das Krankenhaus</i> (szpital), a także <i>die Bank, das Kino, das Museum, der Park, das Hotel</i> i <i>die Straße</i> (ulica).</p>
      <p>Rozmowę z nieznajomym zaczynasz grzecznie: <i>Entschuldigung, wo ist der Bahnhof?</i> – Przepraszam, gdzie jest dworzec?</p>`,
    remember: 'Entschuldigung, wo ist …? – Przepraszam, gdzie jest …?',
    hook: 'das Krankenhaus = krank (chory) + das Haus (dom) – dom dla chorych.',
    check: { q: 'Co znaczy „die Haltestelle”?', options: ['przystanek', 'dworzec', 'ulica'], answer: 0, explain: 'die Haltestelle – przystanek; dworzec to der Bahnhof, ulica – die Straße.' },
  },
  {
    title: 'Wie komme ich zum Bahnhof?',
    svg: `<svg viewBox="0 0 420 248" role="img" aria-label="Plan ulic: start w punkcie „hier”, strzałka prowadzi prosto (geradeaus), potem w pierwszą ulicę w prawo do dworca (der Bahnhof). Pod planem zdania: Gehen Sie geradeaus. Nehmen Sie die erste Straße rechts">
      <defs><marker id="a-k8de-stadt-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="55" y="8" width="36" height="180" class="f4 s4"/>
      <rect x="55" y="18" width="360" height="34" class="f4 s4"/><rect x="55" y="105" width="360" height="34" class="f4 s4"/>
      <rect x="56" y="19" width="34" height="32" class="f4"/><rect x="56" y="106" width="34" height="32" class="f4"/>
      <path d="M73,176 L73,122 L318,122" class="ln sw" marker-end="url(#a-k8de-stadt-2)"/>
      <text x="73" y="190" class="tx" text-anchor="middle">📍</text>
      <text x="48" y="186" class="tx-s" text-anchor="end">hier</text>
      <text x="100" y="164" class="tx-s">1. geradeaus</text>
      <text x="100" y="84" class="tx-s">2. die erste Straße rechts</text>
      <rect x="290" y="146" width="122" height="36" rx="8" class="f1 s1 sw"/>
      <text x="351" y="169" class="tx" text-anchor="middle">🚉 der Bahnhof</text>
      <g class="tx"><text x="10" y="214">1. Gehen Sie geradeaus.</text><text x="10" y="238">2. Nehmen Sie die erste Straße rechts.</text></g>
    </svg>`,
    text: `<p>Pytasz: <i>Wie komme ich zum Bahnhof?</i> – Jak dojdę do dworca? W odpowiedzi usłyszysz <i>geradeaus</i> (prosto), <i>links</i> (w lewo), <i>rechts</i> (w prawo), np. <i>Gehen Sie geradeaus, dann links.</i> albo <i>Nehmen Sie die erste Straße rechts.</i> – Proszę skręcić w pierwszą ulicę w prawo.</p>
      <p>Na koniec często pada: <i>Es ist nicht weit.</i> – To niedaleko.</p>`,
    remember: 'geradeaus – prosto, links – w lewo, rechts – w prawo.',
    hook: 'links i lewo zaczynają się na L. Zostaje rechts – w prawo.',
    check: { q: 'Co znaczy „Nehmen Sie die erste Straße links”?', options: ['Proszę iść cały czas prosto.', 'Proszę skręcić w pierwszą ulicę w prawo.', 'Proszę skręcić w pierwszą ulicę w lewo.'], answer: 2, explain: 'links – w lewo; die erste Straße – pierwsza ulica.' },
  },
  {
    title: 'zum czy zur?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Schemat: der Bahnhof i das Kino – zu dem, czyli zum: zum Bahnhof, zum Kino. die Post i die Schule – zu der, czyli zur: zur Post, zur Schule">
      <defs><marker id="a-k8de-stadt-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="10" y="12" width="125" height="34" rx="8" class="f1 s1"/><rect x="10" y="54" width="125" height="34" rx="8" class="f3 s3"/>
        <rect x="10" y="112" width="125" height="34" rx="8" class="f2 s2"/><rect x="10" y="154" width="125" height="34" rx="8" class="f2 s2"/>
        <rect x="175" y="28" width="90" height="44" rx="8" class="f4 s4"/><rect x="175" y="128" width="90" height="44" rx="8" class="f4 s4"/></g>
      <g class="ln"><path d="M138,29 L170,44" marker-end="url(#a-k8de-stadt-3)"/><path d="M138,71 L170,56" marker-end="url(#a-k8de-stadt-3)"/><path d="M268,50 L292,50" marker-end="url(#a-k8de-stadt-3)"/>
        <path d="M138,129 L170,144" marker-end="url(#a-k8de-stadt-3)"/><path d="M138,171 L170,156" marker-end="url(#a-k8de-stadt-3)"/><path d="M268,150 L292,150" marker-end="url(#a-k8de-stadt-3)"/></g>
      <g class="tx" text-anchor="middle"><text x="72" y="35">der Bahnhof</text><text x="72" y="77">das Kino</text><text x="72" y="135">die Post</text><text x="72" y="177">die Schule</text></g>
      <g class="tx-b" text-anchor="middle"><text x="220" y="49">zum</text><text x="220" y="149">zur</text></g>
      <g class="tx-s" text-anchor="middle"><text x="220" y="66">zu + dem</text><text x="220" y="166">zu + der</text></g>
      <g class="tx"><text x="300" y="36">zum Bahnhof</text><text x="300" y="76">zum Kino</text><text x="300" y="136">zur Post</text><text x="300" y="176">zur Schule</text></g>
    </svg>`,
    text: `<p>„Do” jakiegoś miejsca to <b>zu</b> – i prawie zawsze zlewa się z rodzajnikiem: <b>zum</b> = zu dem (przy der i das): <i>zum Bahnhof, zum Kino</i>; <b>zur</b> = zu der (przy die): <i>zur Post, zur Schule</i>.</p>
      <p>Dlatego musisz znać rodzajnik miejsca – stąd kolory na kafelkach.</p>`,
    remember: 'zum = zu dem (der, das), zur = zu der (die).',
    hook: 'zuR – r jak w „der” (die po zu), zuM – m jak w „dem”.',
    check: { q: 'Wie komme ich ___ Kino? (das Kino)', options: ['zur', 'zum', 'zu die'], answer: 1, explain: 'das Kino → zu dem → zum Kino.' },
  },
  {
    title: 'Czym jedziesz? mit + celownik',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Środki transportu w kolorach rodzajników: mit dem Bus, mit dem Zug, mit dem Auto, mit dem Fahrrad, mit der U-Bahn, mit der Straßenbahn; pieszo – zu Fuß, bez mit">
      <g class="sw"><rect x="8" y="8" width="198" height="38" rx="8" class="f1 s1"/><rect x="214" y="8" width="198" height="38" rx="8" class="f1 s1"/>
        <rect x="8" y="52" width="198" height="38" rx="8" class="f3 s3"/><rect x="214" y="52" width="198" height="38" rx="8" class="f3 s3"/>
        <rect x="8" y="96" width="198" height="38" rx="8" class="f2 s2"/><rect x="214" y="96" width="198" height="38" rx="8" class="f2 s2"/>
        <rect x="110" y="140" width="200" height="38" rx="8" class="f4 s4 dash"/></g>
      <g class="tx" text-anchor="middle"><text x="107" y="33">🚌 mit dem Bus</text><text x="313" y="33">🚆 mit dem Zug</text>
        <text x="107" y="77">🚗 mit dem Auto</text><text x="313" y="77">🚲 mit dem Fahrrad</text>
        <text x="107" y="121">🚇 mit der U-Bahn</text><text x="313" y="121">🚋 mit der Straßenbahn</text>
        <text x="210" y="165">🚶 zu Fuß (bez mit!)</text></g>
      <text x="210" y="205" class="tx-s" text-anchor="middle">Ich fahre mit dem Bus zur Schule.</text>
    </svg>`,
    text: `<p>Czym jedziesz? <b>mit</b> + celownik: <i>mit dem Bus / Auto / Zug</i> (pociąg) <i>/ Fahrrad</i>, ale <i>mit der U-Bahn</i> (metro) i <i>mit der Straßenbahn</i> (tramwaj). Pieszo to <b>zu Fuß</b> – bez „mit”.</p>
      <p>Na dworcu: <i>Eine Fahrkarte nach Berlin, bitte.</i> – <i>Einfach oder hin und zurück?</i> (w jedną stronę czy tam i z powrotem?). <i>Wann fährt der Zug nach Berlin?</i> – O której odjeżdża pociąg do Berlina?</p>`,
    remember: 'mit dem (der, das), mit der (die); pieszo – zu Fuß.',
    hook: 'der Fuß to stopa (jak angielskie foot) – zu Fuß = „na stopach”, czyli pieszo.',
    check: { q: 'Ich fahre ___ Straßenbahn zur Schule.', options: ['mit der', 'mit dem', 'zu'], answer: 0, explain: 'die Straßenbahn → mit der Straßenbahn.' },
  },
  {
    title: 'Geh! Komm! Nimm! – polecenia i pułapki',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Tabela trybu rozkazującego: gehen – Geh!, Geht!, Gehen Sie!; kommen – Komm!, Kommt!, Kommen Sie!; nehmen – Nimm!, Nehmt!, Nehmen Sie!">
      <g class="tx-b" text-anchor="middle"><text x="150" y="32">du</text><text x="245" y="32">ihr</text><text x="352" y="32">Sie</text></g>
      <g class="sw"><rect x="105" y="46" width="90" height="36" rx="6" class="f4 s4"/><rect x="200" y="46" width="90" height="36" rx="6" class="f4 s4"/><rect x="295" y="46" width="115" height="36" rx="6" class="f5 s5"/>
        <rect x="105" y="88" width="90" height="36" rx="6" class="f4 s4"/><rect x="200" y="88" width="90" height="36" rx="6" class="f4 s4"/><rect x="295" y="88" width="115" height="36" rx="6" class="f5 s5"/>
        <rect x="105" y="130" width="90" height="36" rx="6" class="f4 s4"/><rect x="200" y="130" width="90" height="36" rx="6" class="f4 s4"/><rect x="295" y="130" width="115" height="36" rx="6" class="f5 s5"/></g>
      <g class="tx-s"><text x="15" y="69">gehen</text><text x="15" y="111">kommen</text><text x="15" y="153">nehmen</text></g>
      <g class="tx" text-anchor="middle"><text x="150" y="70">Geh!</text><text x="245" y="70">Geht!</text><text x="352" y="70">Gehen Sie!</text>
        <text x="150" y="112">Komm!</text><text x="245" y="112">Kommt!</text><text x="352" y="112">Kommen Sie!</text>
        <text x="150" y="154">Nimm!</text><text x="245" y="154">Nehmt!</text><text x="352" y="154">Nehmen Sie!</text></g>
      <g class="tx-s" text-anchor="middle"><text x="210" y="192">du kommst → Komm!   ·   du nimmst → Nimm!</text><text x="210" y="212">forma du: bez „du” i bez -st; zmiana e → i zostaje</text></g>
    </svg>`,
    text: `<p>Polecenia (tryb rozkazujący) usłyszysz przy wskazywaniu drogi. Do kolegi (<b>du</b>): czasownik bez „du” i bez końcówki -st: <i>du kommst → Komm!</i>, <i>du nimmst → Nimm!</i> Do kilku osób (<b>ihr</b>): <i>Geht! Kommt! Nehmt!</i> Do obcej dorosłej osoby (<b>Sie</b>): <i>Gehen Sie! Nehmen Sie!</i></p>
      <p>Pułapki działu: <b>zum/zur</b> zależy od rodzajnika, pieszo to <b>zu Fuß</b>, a w hotelu <i>das Einzelzimmer</i> (jednoosobowy) ≠ <i>das Doppelzimmer</i> (dwuosobowy): <i>Ich möchte ein Einzelzimmer für zwei Nächte.</i></p>`,
    remember: 'du: Geh! Komm! Nimm! · Sie: Gehen Sie! Nehmen Sie!',
    hook: 'Doppel brzmi jak „double” – podwójny, czyli pokój dla dwóch osób.',
    check: { q: 'Mówisz do kolegi: „Idź prosto!”. Które zdanie jest poprawne?', options: ['Gehen Sie geradeaus!', 'Gehst geradeaus!', 'Geh geradeaus!'], answer: 2, explain: 'Do jednej osoby na „ty”: du gehst → Geh! „Gehen Sie” to forma grzecznościowa.' },
  },
];

window.LESSONS['niemiecki/gesundheit'] = [
  {
    title: 'Ciało – der Körper',
    svg: `<svg viewBox="0 0 420 276" role="img" aria-label="Sylwetka człowieka z podpisanymi częściami ciała w kolorach rodzajników: der Kopf, die Nase, der Hals, der Arm, die Hand, das Knie, das Auge, das Ohr, der Bauch, das Bein, der Fuß">
      <g class="ln-thin"><line x1="120" y1="22" x2="189" y2="30"/><line x1="120" y1="66" x2="207" y2="49"/><line x1="120" y1="100" x2="207" y2="72"/><line x1="120" y1="134" x2="168" y2="125"/><line x1="120" y1="170" x2="141" y2="168"/><line x1="120" y1="214" x2="192" y2="212"/>
        <line x1="300" y1="22" x2="222" y2="36"/><line x1="300" y1="60" x2="239" y2="46"/><line x1="300" y1="134" x2="232" y2="135"/><line x1="300" y1="200" x2="226" y2="200"/><line x1="300" y1="256" x2="247" y2="259"/></g>
      <g class="ln sw"><line x1="210" y1="66" x2="210" y2="78"/><line x1="184" y1="90" x2="152" y2="160"/><line x1="236" y1="90" x2="268" y2="160"/>
        <line x1="198" y1="170" x2="192" y2="256"/><line x1="222" y1="170" x2="228" y2="256"/><line x1="192" y1="256" x2="174" y2="260"/><line x1="228" y1="256" x2="246" y2="260"/></g>
      <ellipse cx="185" cy="44" rx="4" ry="7" class="f4 s4 sw"/><ellipse cx="235" cy="44" rx="4" ry="7" class="f4 s4 sw"/>
      <circle cx="210" cy="42" r="24" class="f4 s4 sw"/>
      <circle cx="201" cy="37" r="3" class="f1 s1"/><circle cx="219" cy="37" r="3" class="f1 s1"/>
      <path d="M210,40 L207,49 L211,49" class="ln"/><path d="M202,56 Q210,61 218,56" class="ln"/>
      <rect x="182" y="78" width="56" height="92" rx="14" class="f4 s4 sw"/>
      <circle cx="149" cy="167" r="7" class="f4 s4 sw"/><circle cx="271" cy="167" r="7" class="f4 s4 sw"/>
      <g class="sw"><rect x="10" y="10" width="110" height="24" rx="6" class="f1 s1"/><rect x="10" y="54" width="110" height="24" rx="6" class="f2 s2"/><rect x="10" y="88" width="110" height="24" rx="6" class="f1 s1"/>
        <rect x="10" y="122" width="110" height="24" rx="6" class="f1 s1"/><rect x="10" y="158" width="110" height="24" rx="6" class="f2 s2"/><rect x="10" y="202" width="110" height="24" rx="6" class="f3 s3"/>
        <rect x="300" y="10" width="110" height="24" rx="6" class="f3 s3"/><rect x="300" y="48" width="110" height="24" rx="6" class="f3 s3"/><rect x="300" y="122" width="110" height="24" rx="6" class="f1 s1"/>
        <rect x="300" y="188" width="110" height="24" rx="6" class="f3 s3"/><rect x="300" y="244" width="110" height="24" rx="6" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="65" y="28">der Kopf</text><text x="65" y="72">die Nase</text><text x="65" y="106">der Hals</text><text x="65" y="140">der Arm</text><text x="65" y="176">die Hand</text><text x="65" y="220">das Knie</text>
        <text x="355" y="28">das Auge</text><text x="355" y="66">das Ohr</text><text x="355" y="140">der Bauch</text><text x="355" y="206">das Bein</text><text x="355" y="262">der Fuß</text></g>
    </svg>`,
    text: `<p>Zanim powiesz lekarzowi, co cię boli, potrzebujesz nazw części ciała (<i>der Körper</i> – ciało). Ucz się ich z rodzajnikiem: <b>der</b> Kopf, Hals, Bauch, Rücken (plecy), Arm, Fuß, Zahn (ząb); <b>die</b> Nase, Hand; <b>das</b> Auge, Ohr, Bein, Knie.</p>
      <p>Przydadzą się też liczby mnogie: <i>die Augen</i> (oczy), <i>die Zähne</i> (zęby), <i>die Füße</i> (stopy).</p>`,
    remember: 'das Bein – noga, der Fuß – stopa; der Arm – ręka, die Hand – dłoń.',
    hook: 'Hand ≈ hand, Arm ≈ arm, Knie ≈ knee – angielski podpowie znaczenie, rodzajnik musisz dodać sam.',
    check: { q: 'Co znaczy „das Bein”?', options: ['stopa', 'noga', 'ręka'], answer: 1, explain: 'das Bein – noga; stopa to der Fuß, ręka – der Arm.' },
  },
  {
    title: 'Mir tut … weh – co cię boli?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Budowa zdania: Mir tut der Kopf weh – boli mnie głowa (jedna rzecz, tut); Mir tun die Füße weh – bolą mnie stopy (liczba mnoga, tun)">
      <g class="tx-s"><text x="10" y="22">jedna rzecz → tut</text><text x="10" y="122">liczba mnoga → tun</text><text x="10" y="88">Boli mnie głowa.</text><text x="10" y="188">Bolą mnie stopy.</text></g>
      <g class="sw"><rect x="10" y="30" width="60" height="40" rx="8" class="f5 s5"/><rect x="76" y="30" width="62" height="40" rx="8" class="f4 s4"/><rect x="144" y="30" width="120" height="40" rx="8" class="f1 s1"/><rect x="270" y="30" width="62" height="40" rx="8" class="f5 s5"/>
        <rect x="10" y="130" width="60" height="40" rx="8" class="f5 s5"/><rect x="76" y="130" width="62" height="40" rx="8" class="f4 s4"/><rect x="144" y="130" width="120" height="40" rx="8" class="f2 s2"/><rect x="270" y="130" width="62" height="40" rx="8" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="56">Mir</text><text x="107" y="56">tut</text><text x="204" y="56">der Kopf</text><text x="301" y="56">weh.</text>
        <text x="40" y="156">Mir</text><text x="107" y="156">tun</text><text x="204" y="156">die Füße</text><text x="301" y="156">weh.</text></g>
      <g class="tx" text-anchor="middle"><text x="376" y="56">🤕</text><text x="376" y="156">🦶</text></g>
    </svg>`,
    text: `<p>Lekarz pyta: <i>Was fehlt dir?</i> (Co ci dolega?) albo <i>Was tut dir weh?</i> (Co cię boli?). Odpowiadasz: <i>Mir tut … weh.</i></p>
      <p>Czasownik zależy od tego, co boli: jedna rzecz – <b>tut</b> (<i>Mir tut der Bauch weh.</i>), liczba mnoga – <b>tun</b> (<i>Mir tun die Füße weh.</i>). Słowo <b>weh</b> stoi na końcu.</p>`,
    remember: 'Mir tut der Kopf weh. · Mir tun die Füße weh.',
    hook: 'Jak po polsku: „boli” → tut, „bolą” → tun.',
    check: { q: 'Mir ___ der Bauch weh.', options: ['tut', 'tun', 'tust'], answer: 0, explain: 'der Bauch – jedna rzecz, więc tut.' },
  },
  {
    title: 'Ich habe Fieber – objawy',
    svg: `<svg viewBox="0 0 420 222" role="img" aria-label="Kafelki objawów po Ich habe: Fieber – gorączka, Schnupfen – katar, Husten – kaszel, eine Grippe – grypa. Złożenie Kopf plus Schmerzen daje Kopfschmerzen; podobnie Bauchschmerzen, Halsschmerzen, Zahnschmerzen">
      <text x="210" y="22" class="tx-b" text-anchor="middle">Ich habe …</text>
      <g class="sw"><rect x="8" y="34" width="96" height="76" rx="10" class="f3 s3"/><rect x="112" y="34" width="96" height="76" rx="10" class="f1 s1"/><rect x="216" y="34" width="96" height="76" rx="10" class="f1 s1"/><rect x="320" y="34" width="96" height="76" rx="10" class="f2 s2"/></g>
      <g class="tx" text-anchor="middle"><text x="56" y="60">🤒</text><text x="160" y="60">🤧</text><text x="264" y="60">😷</text><text x="368" y="60">🛌</text>
        <text x="56" y="84">Fieber</text><text x="160" y="84">Schnupfen</text><text x="264" y="84">Husten</text><text x="368" y="84">eine Grippe</text></g>
      <g class="tx-s" text-anchor="middle"><text x="56" y="102">gorączka</text><text x="160" y="102">katar</text><text x="264" y="102">kaszel</text><text x="368" y="102">grypa</text></g>
      <text x="210" y="144" class="tx-b" text-anchor="middle">Kopf + Schmerzen = Kopfschmerzen</text>
      <text x="210" y="168" class="tx-s" text-anchor="middle">tak samo: Bauchschmerzen · Halsschmerzen · Zahnschmerzen</text>
      <text x="210" y="206" class="tx" text-anchor="middle">Ich bin krank. → Gute Besserung!</text>
    </svg>`,
    text: `<p>Objawy podajesz z <b>Ich habe</b>: <i>Ich habe Fieber / Schnupfen / Husten / eine Grippe.</i> – Mam gorączkę / katar / kaszel / grypę.</p>
      <p>Ból czegoś to złożenie: miejsce + <b>Schmerzen</b>: <i>Ich habe Kopfschmerzen</i> (ból głowy), <i>Bauchschmerzen</i> (brzucha), <i>Halsschmerzen</i> (gardła), <i>Zahnschmerzen</i> (zęba). Gdy ktoś mówi <i>Ich bin krank</i> (jestem chory), życz mu: <i>Gute Besserung!</i></p>`,
    remember: 'Ich habe Fieber / Husten / Kopfschmerzen. · Ich bin krank.',
    hook: 'Najpierw gdzie, potem co: Hals + Schmerzen = Halsschmerzen (ból gardła).',
    check: { q: 'Masz katar. Co powiesz?', options: ['Ich habe Schnupfen.', 'Ich habe Husten.', 'Ich habe Fieber.'], answer: 0, explain: 'der Schnupfen – katar; Husten – kaszel, Fieber – gorączka.' },
  },
  {
    title: 'müssen i dürfen u lekarza',
    svg: `<svg viewBox="0 0 420 238" role="img" aria-label="Szyk: Du musst im Bett bleiben – czasownik modalny na 2. miejscu, bezokolicznik na końcu. Tabela odmiany: ich muss, darf; du musst, darfst; er/sie/es muss, darf; wir müssen, dürfen; ihr müsst, dürft; sie/Sie müssen, dürfen">
      <g class="sw"><rect x="10" y="10" width="60" height="36" rx="8" class="f5 s5"/><rect x="76" y="10" width="84" height="36" rx="8" class="f4 s4"/><rect x="166" y="10" width="100" height="36" rx="8" class="f5 s5"/><rect x="272" y="10" width="100" height="36" rx="8" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="40" y="34">Du</text><text x="118" y="34">musst</text><text x="216" y="34">im Bett</text><text x="322" y="34">bleiben.</text></g>
      <g class="tx-s" text-anchor="middle"><text x="118" y="64">2. miejsce</text><text x="322" y="64">bezokolicznik na końcu</text></g>
      <rect x="10" y="110" width="400" height="20" rx="4" class="f4"/><rect x="10" y="152" width="400" height="20" rx="4" class="f4"/>
      <g class="tx-b" text-anchor="middle"><text x="200" y="96">müssen</text><text x="330" y="96">dürfen</text></g>
      <line x1="10" y1="104" x2="410" y2="104" class="ln-thin"/>
      <g class="tx-s"><text x="20" y="125">ich</text><text x="20" y="146">du</text><text x="20" y="167">er / sie / es</text><text x="20" y="188">wir</text><text x="20" y="209">ihr</text><text x="20" y="230">sie / Sie</text></g>
      <g class="tx" text-anchor="middle"><text x="200" y="125">muss</text><text x="200" y="146">musst</text><text x="200" y="167">muss</text><text x="200" y="188">müssen</text><text x="200" y="209">müsst</text><text x="200" y="230">müssen</text>
        <text x="330" y="125">darf</text><text x="330" y="146">darfst</text><text x="330" y="167">darf</text><text x="330" y="188">dürfen</text><text x="330" y="209">dürft</text><text x="330" y="230">dürfen</text></g>
    </svg>`,
    text: `<p><b>müssen</b> = musieć (obowiązek), <b>dürfen</b> = móc w sensie „mieć pozwolenie”. Czasownik modalny stoi na <b>2. miejscu</b>, a drugi czasownik – w bezokoliczniku – na <b>końcu</b>: <i>Du musst im Bett bleiben.</i> – Musisz zostać w łóżku.</p>
      <p>Przy <i>ich</i> i <i>er/sie/es</i> nie ma końcówki: <i>ich muss, er darf</i>.</p>`,
    remember: 'Du musst im Bett bleiben. – modalny na 2. miejscu, bezokolicznik na końcu.',
    hook: 'ich i er to bliźniaki: ich muss – er muss, ich darf – er darf.',
    check: { q: 'Er ___ im Bett bleiben. (musi)', options: ['müssen', 'musst', 'muss'], answer: 2, explain: 'er/sie/es → muss (bez końcówki, jak przy ich).' },
  },
  {
    title: 'Pułapka: nie wolno ≠ nie trzeba',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Porównanie: nicht dürfen – nie wolno (Du darfst nicht in die Schule gehen); nicht müssen – nie trzeba (Du musst nicht in die Schule gehen). Pod spodem polecenia lekarza: Bleib im Bett! Trink viel Tee!">
      <g class="sw"><rect x="8" y="8" width="198" height="140" rx="12" class="f5 s5"/><rect x="214" y="8" width="198" height="140" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="107" y="36">nicht dürfen</text><text x="313" y="36">nicht müssen</text></g>
      <g class="tx" text-anchor="middle"><text x="107" y="64">🚫</text><text x="313" y="64">🆗</text><text x="107" y="90">= nie wolno</text><text x="313" y="90">= nie trzeba</text></g>
      <g class="tx-s" text-anchor="middle"><text x="107" y="114">Du darfst nicht in</text><text x="107" y="130">die Schule gehen.</text><text x="313" y="114">Du musst nicht in</text><text x="313" y="130">die Schule gehen.</text></g>
      <text x="210" y="176" class="tx-s" text-anchor="middle">Lekarz wydaje polecenia:</text>
      <text x="210" y="202" class="tx-b" text-anchor="middle">Bleib im Bett! Trink viel Tee!</text>
    </svg>`,
    text: `<p>Największa pułapka: <b>nicht dürfen</b> to <b>zakaz</b> (nie wolno), a <b>nicht müssen</b> – <b>brak obowiązku</b> (nie trzeba). <i>Du darfst nicht in die Schule gehen.</i> – Nie wolno ci iść do szkoły. <i>Du musst nicht in die Schule gehen.</i> – Nie musisz iść do szkoły.</p>
      <p>O pozwolenie pytasz: <i>Darf ich das Fenster öffnen?</i> – <i>Ja, natürlich. / Nein, leider nicht.</i> Lekarz mówi też w trybie rozkazującym: <i>Bleib im Bett! Trink viel Tee!</i></p>`,
    remember: 'nicht dürfen = nie wolno; nicht müssen = nie trzeba.',
    hook: 'müssen brzmi jak „muszę” – więc nicht müssen to „nie muszę”, a nie zakaz.',
    check: { q: 'Co znaczy „Du musst heute nicht kommen”?', options: ['Nie wolno ci dziś przychodzić.', 'Nie musisz dziś przychodzić.', 'Musisz dziś przyjść.'], answer: 1, explain: 'nicht müssen – nie trzeba; zakaz to nicht dürfen.' },
  },
];

window.LESSONS['niemiecki/natur'] = [
  {
    title: 'Wie ist das Wetter?',
    svg: `<svg viewBox="0 0 420 225" role="img" aria-label="Pogoda: po lewej Es ist plus przymiotnik – sonnig, windig, wolkig, neblig, heiß, kalt; po prawej Es plus czasownik – Es regnet, Es schneit oraz Die Sonne scheint. Na dole: Es ist 20 Grad, Es ist minus 5 Grad">
      <g class="sw"><rect x="8" y="8" width="200" height="186" rx="12" class="f4 s4"/><rect x="214" y="8" width="198" height="186" rx="12" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="108" y="34">Es ist …</text><text x="313" y="34">Es …</text></g>
      <g class="tx"><text x="20" y="62">☀️ sonnig</text><text x="20" y="86">💨 windig</text><text x="20" y="110">☁️ wolkig</text><text x="20" y="134">🌫️ neblig</text><text x="20" y="158">🥵 heiß</text><text x="20" y="182">🥶 kalt</text></g>
      <g class="tx-s"><text x="116" y="62">słonecznie</text><text x="116" y="86">wietrznie</text><text x="116" y="110">pochmurno</text><text x="116" y="134">mglisto</text><text x="116" y="158">gorąco</text><text x="116" y="182">zimno</text></g>
      <g class="tx"><text x="226" y="64">🌧️ Es regnet.</text><text x="226" y="114">🌨️ Es schneit.</text><text x="226" y="164">Die Sonne scheint.</text></g>
      <g class="tx-s"><text x="226" y="82">pada deszcz</text><text x="226" y="132">pada śnieg</text><text x="226" y="182">świeci słońce</text></g>
      <text x="210" y="216" class="tx" text-anchor="middle">Es ist 20 Grad. · Es ist minus 5 Grad.</text>
    </svg>`,
    text: `<p>O pogodę pytasz: <i>Wie ist das Wetter?</i> Odpowiedzi są dwóch typów: <b>Es ist</b> + przymiotnik (<i>Es ist sonnig / warm / kalt / windig.</i>) albo <b>Es</b> + czasownik (<i>Es regnet. Es schneit.</i>). Słońce świeci: <i>Die Sonne scheint.</i></p>
      <p>Temperatura: <i>Es ist 20 Grad.</i> / <i>Es ist minus 5 Grad.</i></p>`,
    remember: 'Es ist kalt. · Es regnet. · Es schneit.',
    hook: 'sonnig ≈ sunny, windig ≈ windy, warm ≈ warm – angielski bardzo pomaga.',
    check: { q: 'Pada śnieg. Jak to powiesz?', options: ['Es regnet.', 'Es ist windig.', 'Es schneit.'], answer: 2, explain: 'schneien – padać (o śniegu); Es regnet – pada deszcz.' },
  },
  {
    title: 'Pory roku i miesiące',
    svg: `<svg viewBox="0 0 420 226" role="img" aria-label="Cztery pory roku, wszystkie z rodzajnikiem der: der Frühling – März, April, Mai; der Sommer – Juni, Juli, August; der Herbst – September, Oktober, November; der Winter – Dezember, Januar, Februar. Na dole: im Sommer, im Mai, im Dezember">
      <g class="sw"><rect x="8" y="8" width="95" height="72" rx="10" class="f1 s1"/><rect x="111" y="8" width="95" height="72" rx="10" class="f1 s1"/><rect x="214" y="8" width="95" height="72" rx="10" class="f1 s1"/><rect x="317" y="8" width="95" height="72" rx="10" class="f1 s1"/>
        <rect x="8" y="88" width="95" height="96" rx="10" class="f4 s4"/><rect x="111" y="88" width="95" height="96" rx="10" class="f4 s4"/><rect x="214" y="88" width="95" height="96" rx="10" class="f4 s4"/><rect x="317" y="88" width="95" height="96" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="55" y="34">🌷</text><text x="158" y="34">☀️</text><text x="261" y="34">🍂</text><text x="364" y="34">❄️</text></g>
      <g class="tx-s" text-anchor="middle"><text x="55" y="52">der</text><text x="158" y="52">der</text><text x="261" y="52">der</text><text x="364" y="52">der</text></g>
      <g class="tx-b" text-anchor="middle"><text x="55" y="72">Frühling</text><text x="158" y="72">Sommer</text><text x="261" y="72">Herbst</text><text x="364" y="72">Winter</text></g>
      <g class="tx" text-anchor="middle"><text x="55" y="112">März</text><text x="55" y="140">April</text><text x="55" y="168">Mai</text>
        <text x="158" y="112">Juni</text><text x="158" y="140">Juli</text><text x="158" y="168">August</text>
        <text x="261" y="112">September</text><text x="261" y="140">Oktober</text><text x="261" y="168">November</text>
        <text x="364" y="112">Dezember</text><text x="364" y="140">Januar</text><text x="364" y="168">Februar</text></g>
      <text x="210" y="212" class="tx-b" text-anchor="middle">im Sommer · im Mai · im Dezember</text>
    </svg>`,
    text: `<p>Pory roku to <b>der Frühling</b> (wiosna), <b>der Sommer</b> (lato), <b>der Herbst</b> (jesień) i <b>der Winter</b> (zima) – wszystkie z rodzajnikiem <b>der</b>. Miesiące: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.</p>
      <p>Z porą roku i miesiącem używasz <b>im</b>: <i>im Sommer</i> (latem), <i>im Mai</i> (w maju). Z dniem – <b>am</b> (<i>am Montag</i>), z godziną – <b>um</b> (<i>um acht Uhr</i>).</p>`,
    remember: 'im + pora roku albo miesiąc: im Winter, im Juli.',
    hook: 'um i Uhr – oba na U: um acht Uhr. Dzień – am Montag. Miesiące i pory roku – im.',
    check: { q: 'Jak powiesz „zimą”?', options: ['im Winter', 'am Winter', 'um Winter'], answer: 0, explain: 'Z porami roku – im: im Winter.' },
  },
  {
    title: 'Zwierzęta z rodzajnikiem',
    svg: `<svg viewBox="0 0 420 264" role="img" aria-label="Kafelki zwierząt w kolorach rodzajników. Domowe: der Hund, die Katze, das Pferd, die Kuh, das Schwein, das Kaninchen, der Vogel, der Fisch, die Maus. Dzikie: der Bär, der Wolf, der Fuchs">
      <g class="tx-s"><text x="8" y="18">domowe i hodowlane</text><text x="8" y="202">dzikie</text></g>
      <g class="sw"><rect x="8" y="26" width="132" height="48" rx="8" class="f1 s1"/><rect x="144" y="26" width="132" height="48" rx="8" class="f2 s2"/><rect x="280" y="26" width="132" height="48" rx="8" class="f3 s3"/>
        <rect x="8" y="80" width="132" height="48" rx="8" class="f2 s2"/><rect x="144" y="80" width="132" height="48" rx="8" class="f3 s3"/><rect x="280" y="80" width="132" height="48" rx="8" class="f3 s3"/>
        <rect x="8" y="134" width="132" height="48" rx="8" class="f1 s1"/><rect x="144" y="134" width="132" height="48" rx="8" class="f1 s1"/><rect x="280" y="134" width="132" height="48" rx="8" class="f2 s2"/>
        <rect x="8" y="210" width="132" height="48" rx="8" class="f1 s1"/><rect x="144" y="210" width="132" height="48" rx="8" class="f1 s1"/><rect x="280" y="210" width="132" height="48" rx="8" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="74" y="47">🐕</text><text x="210" y="47">🐈</text><text x="346" y="47">🐎</text><text x="74" y="101">🐄</text><text x="210" y="101">🐖</text><text x="346" y="101">🐇</text>
        <text x="74" y="155">🐦</text><text x="210" y="155">🐟</text><text x="346" y="155">🐁</text><text x="74" y="231">🐻</text><text x="210" y="231">🐺</text><text x="346" y="231">🦊</text>
        <text x="74" y="67">der Hund</text><text x="210" y="67">die Katze</text><text x="346" y="67">das Pferd</text><text x="74" y="121">die Kuh</text><text x="210" y="121">das Schwein</text><text x="346" y="121">das Kaninchen</text>
        <text x="74" y="175">der Vogel</text><text x="210" y="175">der Fisch</text><text x="346" y="175">die Maus</text><text x="74" y="251">der Bär</text><text x="210" y="251">der Wolf</text><text x="346" y="251">der Fuchs</text></g>
    </svg>`,
    text: `<p>Zwierzęta domowe i hodowlane: <i>der Hund</i> (pies), <i>die Katze</i> (kot), <i>das Pferd</i> (koń), <i>die Kuh</i> (krowa), <i>das Schwein</i> (świnia), <i>das Kaninchen</i> (królik), <i>der Vogel</i> (ptak), <i>der Fisch</i>, <i>die Maus</i> (mysz). Dzikie: <i>der Bär</i> (niedźwiedź), <i>der Wolf</i>, <i>der Fuchs</i> (lis).</p>
      <p>Rodzajnika nie zgadniesz z polskiego: kot jest po polsku męski, a <i>die Katze</i> – żeńska. Ucz się go od razu, razem z kolorem.</p>`,
    remember: 'der Hund, die Katze, das Pferd.',
    hook: 'Maus ≈ mouse, Fisch ≈ fish, Wolf ≈ wolf – wiele nazw zwierząt podpowie angielski.',
    check: { q: 'Wybierz rodzajnik: ___ Katze (kot)', options: ['der', 'die', 'das'], answer: 1, explain: 'die Katze – rodzaj żeński, choć po polsku „ten kot”.' },
  },
  {
    title: 'Krajobraz i pułapka z jeziorem',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Kafelki krajobrazu: der Berg, der Wald, der Fluss, der Strand, die Wiese, der Baum, die Blume, das Meer. Pod spodem porównanie: der See to jezioro, a das Meer (też die See) to morze">
      <g class="sw"><rect x="8" y="8" width="95" height="48" rx="8" class="f1 s1"/><rect x="111" y="8" width="95" height="48" rx="8" class="f1 s1"/><rect x="214" y="8" width="95" height="48" rx="8" class="f1 s1"/><rect x="317" y="8" width="95" height="48" rx="8" class="f1 s1"/>
        <rect x="8" y="62" width="95" height="48" rx="8" class="f2 s2"/><rect x="111" y="62" width="95" height="48" rx="8" class="f1 s1"/><rect x="214" y="62" width="95" height="48" rx="8" class="f2 s2"/><rect x="317" y="62" width="95" height="48" rx="8" class="f3 s3"/></g>
      <g class="tx" text-anchor="middle"><text x="55" y="28">⛰️</text><text x="158" y="28">🌲</text><text x="261" y="28">🏞️</text><text x="364" y="28">🏖️</text><text x="55" y="82">🌾</text><text x="158" y="82">🌳</text><text x="261" y="82">🌼</text><text x="364" y="82">🌊</text>
        <text x="55" y="48">der Berg</text><text x="158" y="48">der Wald</text><text x="261" y="48">der Fluss</text><text x="364" y="48">der Strand</text><text x="55" y="102">die Wiese</text><text x="158" y="102">der Baum</text><text x="261" y="102">die Blume</text><text x="364" y="102">das Meer</text></g>
      <g class="sw"><rect x="8" y="122" width="170" height="110" rx="12" class="f1 s1"/><rect x="242" y="122" width="170" height="110" rx="12" class="f3 s3"/></g>
      <ellipse cx="93" cy="178" rx="52" ry="13" class="bg s1 sw"/>
      <path d="M262,178 q12,-10 24,0 t24,0 t24,0 t24,0 t24,0 t24,0" class="ln"/>
      <g class="tx-b" text-anchor="middle"><text x="93" y="150">der See</text><text x="327" y="150">das Meer</text><text x="210" y="184">≠</text></g>
      <g class="tx" text-anchor="middle"><text x="93" y="214">= jezioro</text><text x="327" y="206">= morze</text></g>
      <text x="327" y="224" class="tx-s" text-anchor="middle">też: die See</text>
    </svg>`,
    text: `<p>Krajobraz: <i>der Berg</i> (góra), <i>der Wald</i> (las), <i>der Fluss</i> (rzeka), <i>das Meer</i> (morze), <i>der Strand</i> (plaża), <i>die Wiese</i> (łąka), <i>der Baum</i> (drzewo), <i>die Blume</i> (kwiat).</p>
      <p>Uważaj na <b>der See</b> – to <b>jezioro</b>, nie morze! Morze to <b>das Meer</b> (albo <i>die See</i>).</p>`,
    remember: 'der See – jezioro, das Meer – morze.',
    hook: 'Meer jak „mermaid” – syrenka mieszka w morzu, nie w jeziorze.',
    check: { q: 'Latem jedziesz nad Bałtyk. Jak powiesz „morze”?', options: ['das Meer', 'der See', 'der Fluss'], answer: 0, explain: 'das Meer – morze; der See – jezioro, der Fluss – rzeka.' },
  },
  {
    title: 'Podsumowanie: im, am, um i pułapki',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Pudełka jedno w drugim: największe – im (miesiąc, pora roku: im Mai, im Sommer), w nim am (dzień: am Montag), w środku um (godzina: um acht Uhr)">
      <rect x="8" y="8" width="404" height="184" rx="14" class="f4 s4 sw"/>
      <rect x="36" y="52" width="348" height="128" rx="12" class="f5 s5 sw"/>
      <rect x="72" y="98" width="276" height="70" rx="10" class="bg s1 sw"/>
      <g class="tx-b"><text x="24" y="36">im Mai · im Sommer</text><text x="52" y="80">am Montag</text></g>
      <g class="tx-s" text-anchor="end"><text x="398" y="36">miesiąc, pora roku</text><text x="370" y="80">dzień</text></g>
      <text x="210" y="130" class="tx-b" text-anchor="middle">um acht Uhr</text>
      <text x="210" y="152" class="tx-s" text-anchor="middle">godzina</text>
    </svg>`,
    text: `<p>Podsumowanie i typowe pułapki:</p>
      <ul><li><b>im</b> – miesiąc i pora roku, <b>am</b> – dzień, <b>um</b> – godzina.</li><li><b>Es regnet</b> to czasownik – nie dodawaj „ist” (źle: <i>Es ist regnet</i>).</li><li><b>der See</b> – jezioro, <b>das Meer</b> – morze.</li><li>kot to <b>die</b> Katze, koń – <b>das</b> Pferd.</li></ul>`,
    remember: 'im Mai, am Montag, um acht Uhr.',
    check: { q: 'Która forma jest poprawna?', options: ['Es ist regnet.', 'Es regnet.', 'Es regnen.'], answer: 1, explain: 'regnen to czasownik: Es regnet. „Es ist” łączymy z przymiotnikiem (Es ist kalt).' },
  },
];

window.LESSONS['niemiecki/perfekt'] = [
  {
    title: 'Perfekt: zdanie w klamrze',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Oś czasu: letztes Wochenende, gestern, heute. Pod nią zdanie Ich habe gestern Fußball gespielt: habe na 2. miejscu, gespielt na końcu, połączone klamrą. Drugi przykład: Wir sind nach Berlin gefahren">
      <defs><marker id="a-k8de-perfekt-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="20" width="290" height="20" rx="6" class="f4"/>
      <path d="M20,30 L400,30" class="ln sw" marker-end="url(#a-k8de-perfekt-1)"/>
      <g class="ln"><line x1="90" y1="23" x2="90" y2="37"/><line x1="220" y1="23" x2="220" y2="37"/><line x1="350" y1="23" x2="350" y2="37"/></g>
      <g class="tx-s" text-anchor="middle"><text x="90" y="56">letztes Wochenende</text><text x="220" y="56">gestern</text></g>
      <text x="350" y="56" class="tx-b" text-anchor="middle">heute</text>
      <g class="sw"><rect x="10" y="76" width="55" height="40" rx="8" class="f5 s5"/><rect x="70" y="76" width="70" height="40" rx="8" class="f4 s4"/><rect x="145" y="76" width="150" height="40" rx="8" class="f5 s5"/><rect x="300" y="76" width="110" height="40" rx="8" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="37" y="102">Ich</text><text x="105" y="102">habe</text><text x="220" y="102">gestern Fußball</text><text x="355" y="102">gespielt.</text></g>
      <path d="M105,118 L105,134 L355,134 L355,118" class="ln"/>
      <g class="tx-s" text-anchor="middle"><text x="105" y="154">haben/sein – 2. miejsce</text><text x="340" y="154">Partizip II – na końcu</text></g>
      <text x="210" y="188" class="tx" text-anchor="middle">Wir <tspan class="tx-b">sind</tspan> nach Berlin <tspan class="tx-b">gefahren</tspan>.</text>
    </svg>`,
    text: `<p>O tym, co robiłeś, opowiadasz w czasie <b>Perfekt</b>. Ma dwie części: <b>haben</b> albo <b>sein</b> (odmienione, na <b>2. miejscu</b>) i <b>Partizip II</b> – imiesłów na <b>końcu</b> zdania.</p>
      <p><i>Ich habe gestern Fußball gespielt.</i> – Wczoraj grałem w piłkę. <i>Wir sind nach Berlin gefahren.</i> – Pojechaliśmy do Berlina.</p>`,
    remember: 'Perfekt = haben/sein (2. miejsce) + Partizip II (koniec zdania).',
    hook: 'Perfekt to kanapka: haben/sein i Partizip II to dwie kromki, a w środku cała reszta zdania.',
    check: { q: 'Gdzie stoi Partizip II w zdaniu w czasie Perfekt?', options: ['na początku zdania', 'na 2. miejscu', 'na końcu zdania'], answer: 2, explain: 'Na 2. miejscu stoi haben/sein, a imiesłów zamyka zdanie.' },
  },
  {
    title: 'Partizip II: ge…t i ge…en',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Dwie kolumny. Regularne ge…t: spielen – gespielt, machen – gemacht, kaufen – gekauft, lernen – gelernt, arbeiten – gearbeitet. Nieregularne ge…en: sehen – gesehen, lesen – gelesen, essen – gegessen, trinken – getrunken, schreiben – geschrieben">
      <g class="sw"><rect x="6" y="8" width="204" height="182" rx="12" class="f4 s4"/><rect x="214" y="8" width="200" height="182" rx="12" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="108" y="34">regularne: ge…t</text><text x="314" y="34">nieregularne: ge…en</text></g>
      <g class="tx-s"><text x="14" y="62">spielen</text><text x="14" y="90">machen</text><text x="14" y="118">kaufen</text><text x="14" y="146">lernen</text><text x="14" y="174">arbeiten</text>
        <text x="222" y="62">sehen</text><text x="222" y="90">lesen</text><text x="222" y="118">essen</text><text x="222" y="146">trinken</text><text x="222" y="174">schreiben</text>
        <text x="72" y="62">→</text><text x="72" y="90">→</text><text x="72" y="118">→</text><text x="72" y="146">→</text><text x="72" y="174">→</text>
        <text x="288" y="62">→</text><text x="288" y="90">→</text><text x="288" y="118">→</text><text x="288" y="146">→</text><text x="288" y="174">→</text></g>
      <g class="tx"><text x="90" y="62"><tspan class="t1">ge</tspan>spiel<tspan class="t1">t</tspan></text><text x="90" y="90"><tspan class="t1">ge</tspan>mach<tspan class="t1">t</tspan></text><text x="90" y="118"><tspan class="t1">ge</tspan>kauf<tspan class="t1">t</tspan></text><text x="90" y="146"><tspan class="t1">ge</tspan>lern<tspan class="t1">t</tspan></text><text x="90" y="174"><tspan class="t1">ge</tspan>arbeit<tspan class="t1">et</tspan></text>
        <text x="304" y="62"><tspan class="t2">ge</tspan>seh<tspan class="t2">en</tspan></text><text x="304" y="90"><tspan class="t2">ge</tspan>les<tspan class="t2">en</tspan></text><text x="304" y="118"><tspan class="t2">ge</tspan>gess<tspan class="t2">en</tspan></text><text x="304" y="146"><tspan class="t2">ge</tspan>trunk<tspan class="t2">en</tspan></text><text x="304" y="174"><tspan class="t2">ge</tspan>schrieb<tspan class="t2">en</tspan></text></g>
      <text x="210" y="208" class="tx-s" text-anchor="middle">uwaga: trinken → getrunken, schreiben → geschrieben</text>
    </svg>`,
    text: `<p>Czasowniki <b>regularne</b> tworzą Partizip II wzorem <b>ge…t</b>: <i>spielen → gespielt, machen → gemacht, kaufen → gekauft, hören → gehört</i>. Zwróć uwagę na <i>arbeiten → gearbeitet</i> (z -et).</p>
      <p>Czasowniki <b>nieregularne</b> mają wzór <b>ge…en</b>: <i>sehen → gesehen, essen → gegessen, schlafen → geschlafen</i>, a czasem zmienia się też samogłoska w środku: <i>trinken → getrunken, schreiben → geschrieben, treffen → getroffen</i>. Te formy trzeba zapamiętać.</p>`,
    remember: 'regularne: ge…t (gespielt), nieregularne: ge…en (gesehen).',
    hook: 'Nieregularne kończą się na -en jak bezokolicznik: sehen → gesehen, lesen → gelesen.',
    check: { q: 'Partizip II od „hören” to…', options: ['gehören', 'gehört', 'hörte'], answer: 1, explain: 'hören jest regularne: ge + hör + t = gehört.' },
  },
  {
    title: 'Gdzie chowa się ge-?',
    svg: `<svg viewBox="0 0 420 256" role="img" aria-label="Górna część: przedrostek plus ge: einkaufen – eingekauft, fernsehen – ferngesehen, aufstehen – aufgestanden. Dolna część: bez ge: telefonieren – telefoniert, fotografieren – fotografiert, besuchen – besucht, vergessen – vergessen">
      <g class="sw"><rect x="6" y="6" width="408" height="114" rx="12" class="f4 s4"/><rect x="6" y="128" width="408" height="122" rx="12" class="f5 s5"/></g>
      <g class="tx-b"><text x="20" y="32">przedrostek + ge + …</text><text x="20" y="154">bez ge-: -ieren, be-, ver-</text></g>
      <g class="tx"><text x="20" y="60">einkaufen → ein<tspan class="tx-b t1">ge</tspan>kauft</text><text x="20" y="84">fernsehen → fern<tspan class="tx-b t1">ge</tspan>sehen</text><text x="20" y="108">aufstehen → auf<tspan class="tx-b t1">ge</tspan>standen</text>
        <text x="20" y="180">telefonieren → telefon<tspan class="tx-b t2">iert</tspan></text><text x="20" y="204">fotografieren → fotograf<tspan class="tx-b t2">iert</tspan></text><text x="20" y="228"><tspan class="tx-b t2">be</tspan>suchen → <tspan class="tx-b t2">be</tspan>sucht · <tspan class="tx-b t2">ver</tspan>gessen → <tspan class="tx-b t2">ver</tspan>gessen</text></g>
    </svg>`,
    text: `<p>Czasowniki z przedrostkiem, który w zdaniu się odrywa (rozdzielnie złożone), wstawiają <b>ge</b> do środka: <i>einkaufen → eingekauft, fernsehen → ferngesehen, aufstehen → aufgestanden</i>.</p>
      <p>Bez <b>ge-</b> są czasowniki na <b>-ieren</b> (<i>telefonieren → telefoniert, fotografieren → fotografiert</i>) oraz z przedrostkiem <b>be-</b> i <b>ver-</b> (<i>besuchen → besucht, vergessen → vergessen</i>).</p>`,
    remember: 'eingekauft – ge w środku; telefoniert, besucht – bez ge-.',
    hook: 'be- i ver- mają już swój przedrostek – dla ge- nie ma miejsca.',
    check: { q: 'Partizip II od „fernsehen” to…', options: ['gefernsehen', 'ferngeseht', 'ferngesehen'], answer: 2, explain: 'Przedrostek fern + ge + sehen (nieregularny, więc -en).' },
  },
  {
    title: 'haben czy sein?',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Po lewej haben – większość czasowników: hat gespielt, hat gesehen, hat gegessen, hat gelesen, hat gekauft. Po prawej sein – ruch z punktu A do B: ist gegangen, ist gefahren, ist gekommen, ist geflogen, ist aufgestanden, a także ist geblieben">
      <defs><marker id="a-k8de-perfekt-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="6" y="6" width="200" height="228" rx="12" class="f4 s4"/><rect x="214" y="6" width="200" height="228" rx="12" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="106" y="34">haben</text><text x="314" y="34">sein</text></g>
      <text x="106" y="54" class="tx-s" text-anchor="middle">większość czasowników</text>
      <g class="tx" text-anchor="middle"><text x="106" y="86">hat gespielt</text><text x="106" y="112">hat gesehen</text><text x="106" y="138">hat gegessen</text><text x="106" y="164">hat gelesen</text><text x="106" y="190">hat gekauft</text></g>
      <text x="106" y="222" class="tx-s" text-anchor="middle">Ich habe einen Film gesehen.</text>
      <circle cx="262" cy="56" r="11" class="bg s5 sw"/><circle cx="366" cy="56" r="11" class="bg s5 sw"/>
      <path d="M276,56 L350,56" class="ln" marker-end="url(#a-k8de-perfekt-4)"/>
      <g class="tx-s" text-anchor="middle"><text x="262" y="61">A</text><text x="366" y="61">B</text><text x="314" y="86">ruch, zmiana miejsca</text></g>
      <g class="tx" text-anchor="middle"><text x="314" y="110">ist gegangen</text><text x="314" y="132">ist gefahren</text><text x="314" y="154">ist gekommen</text><text x="314" y="176">ist geflogen</text><text x="314" y="198">ist aufgestanden</text></g>
      <text x="314" y="224" class="tx-b" text-anchor="middle">ist geblieben (!)</text>
    </svg>`,
    text: `<p>Większość czasowników tworzy Perfekt z <b>haben</b>. Z <b>sein</b> łączą się czasowniki <b>ruchu i zmiany miejsca</b>: <i>gehen – ist gegangen, fahren – ist gefahren, kommen – ist gekommen, fliegen – ist geflogen, aufstehen – ist aufgestanden</i>. Do zapamiętania: <i>bleiben – ist geblieben</i> (zostać), choć to nie ruch.</p>
      <p><i>Ich bin ins Kino gegangen</i>, ale <i>Ich habe einen Film gesehen</i>.</p>`,
    remember: 'Ruch z A do B → sein; reszta → haben (+ bleiben → sein).',
    hook: 'Zapytaj: „czy ktoś przemieścił się z punktu A do B?”. Tak → sein.',
    check: { q: 'Sie (ona) ___ nach Wien geflogen.', options: ['ist', 'hat', 'sind'], answer: 0, explain: 'fliegen – ruch, więc sein; sie (ona) → ist: Sie ist nach Wien geflogen.' },
  },
  {
    title: 'war, hatte i typowe pułapki',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Formy przeszłe: sein – ich war, du warst, wir waren; haben – ich hatte, du hattest, wir hatten. Typowe błędy i poprawne formy: Er ist gegangen zamiast Er hat gegangen, telefoniert zamiast getelefoniert, eingekauft zamiast geeinkauft">
      <g class="tx"><text x="12" y="30"><tspan class="tx-b">sein</tspan> → ich war, du warst, wir waren</text><text x="12" y="58"><tspan class="tx-b">haben</tspan> → ich hatte, du hattest, wir hatten</text></g>
      <line x1="10" y1="76" x2="410" y2="76" class="ln-thin"/>
      <text x="12" y="102" class="tx-b">Typowe pułapki</text>
      <g class="tx t2"><text x="12" y="132">✗ Er hat gegangen.</text><text x="12" y="162">✗ getelefoniert</text><text x="12" y="192">✗ geeinkauft</text></g>
      <g class="tx-b t3"><text x="220" y="132">✓ Er ist gegangen.</text><text x="220" y="162">✓ telefoniert</text><text x="220" y="192">✓ eingekauft</text></g>
      <text x="210" y="222" class="tx-s" text-anchor="middle">ich i er: war, hatte – bez końcówki</text>
    </svg>`,
    text: `<p>Od <b>sein</b> i <b>haben</b> w przeszłości zwykle używasz krótkich form: <i>ich war, du warst, wir waren, ihr wart</i>; <i>ich hatte, du hattest, wir hatten, ihr hattet</i>. <i>Gestern war ich im Kino. Ich hatte keine Zeit.</i></p>
      <p>Słówka czasu: <i>gestern</i> (wczoraj), <i>letztes Wochenende</i> (w zeszły weekend), <i>letzte Woche</i> (w zeszłym tygodniu), <i>letztes Jahr</i> (w zeszłym roku), <i>in den Ferien</i> (w wakacje).</p>`,
    remember: 'ich war, ich hatte; ruch → sein; -ieren, be-, ver- → bez ge-.',
    hook: 'war ≈ was, hatte ≈ had – angielski znów podpowiada.',
    check: { q: 'Gestern ___ ich keine Zeit.', options: ['war', 'hatte', 'habe'], answer: 1, explain: 'Przeszłość od haben: ich hatte (miałem).' },
  },
];

window.LESSONS['niemiecki/feste'] = [
  {
    title: 'Święta i zwyczaje',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Lista świąt i zwyczajów: der Adventskalender – w grudniu codziennie jedno okienko; der Nikolaus 6 grudnia – buty za drzwiami, rano słodycze; Weihnachten – Boże Narodzenie; Silvester 31 grudnia, potem Neujahr – Nowy Rok; der Osterhase – w Wielkanoc dzieci szukają ukrytych jajek">
      <g class="sw"><rect x="5" y="5" width="410" height="42" rx="8" class="f1 s1"/><rect x="5" y="52" width="410" height="42" rx="8" class="f1 s1"/><rect x="5" y="99" width="410" height="42" rx="8" class="f4 s4"/><rect x="5" y="146" width="410" height="42" rx="8" class="f4 s4"/><rect x="5" y="193" width="410" height="42" rx="8" class="f1 s1"/></g>
      <g class="tx" text-anchor="middle"><text x="26" y="32">🗓️</text><text x="26" y="79">👢</text><text x="26" y="126">🎄</text><text x="26" y="173">🎆</text><text x="26" y="220">🐰</text></g>
      <g class="tx-b"><text x="50" y="23">der Adventskalender</text><text x="50" y="70">der Nikolaus · 6.12.</text><text x="50" y="117">Weihnachten</text><text x="50" y="164">Silvester · 31.12.</text><text x="50" y="211">der Osterhase · Ostern</text></g>
      <g class="tx-s"><text x="50" y="40">grudzień: codziennie jedno okienko (das Türchen)</text><text x="50" y="87">wieczorem buty za drzwi, rano w nich słodycze</text><text x="50" y="134">Boże Narodzenie</text><text x="50" y="181">sylwester; potem Neujahr – Nowy Rok</text><text x="50" y="228">Wielkanoc: dzieci szukają ukrytych jajek (Ostereier)</text></g>
    </svg>`,
    text: `<p>Ten dział to urodziny, święta i życzenia – a przy okazji zwyczaje z krajów niemieckojęzycznych. W grudniu dzieci otwierają codziennie jedno okienko (<i>das Türchen</i>) w <b>kalendarzu adwentowym</b>. Wieczorem przed <b>Nikolaus</b> (6 grudnia) wystawiają buty za drzwi, a rano znajdują w nich słodycze i drobne prezenty.</p>
      <p>W Wielkanoc (<i>Ostern</i>) szukają ukrytych słodyczy, drobnych prezentów i kolorowych jajek (<i>Ostereier</i>) – wierzą, że ukrył je <b>der Osterhase</b>, zajączek wielkanocny. <i>Weihnachten</i> to Boże Narodzenie, <i>Silvester</i> – sylwester (31 grudnia), <i>Neujahr</i> – Nowy Rok.</p>`,
    remember: 'Weihnachten – Boże Narodzenie, Ostern – Wielkanoc, Silvester – 31 grudnia, Neujahr – Nowy Rok.',
    hook: 'Silvester brzmi prawie jak „sylwester” – i to ten sam dzień, 31 grudnia.',
    check: { q: 'Co dzieci w krajach niemieckojęzycznych otwierają codziennie w grudniu?', options: ['okienko kalendarza adwentowego (das Türchen)', 'jeden prezent spod choinki', 'kolorowe jajko'], answer: 0, explain: 'der Adventskalender – w grudniu codziennie jedno okienko.' },
  },
  {
    title: 'Życzenia na każdą okazję',
    svg: `<svg viewBox="0 0 420 254" role="img" aria-label="Życzenia: Alles Gute zum Geburtstag!, Herzlichen Glückwunsch! – wszystkiego najlepszego; Frohe Weihnachten!; Frohe Ostern!; Ein gutes neues Jahr! Odpowiedź: Danke, gleichfalls! – dziękuję, nawzajem">
      <g class="sw"><rect x="5" y="5" width="410" height="38" rx="8" class="f4 s4"/><rect x="5" y="47" width="410" height="38" rx="8" class="f4 s4"/><rect x="5" y="89" width="410" height="38" rx="8" class="f4 s4"/><rect x="5" y="131" width="410" height="38" rx="8" class="f4 s4"/><rect x="5" y="173" width="410" height="38" rx="8" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="24" y="30">🎂</text><text x="24" y="72">🎉</text><text x="24" y="114">🎄</text><text x="24" y="156">🐣</text><text x="24" y="198">🥂</text></g>
      <g class="tx-b"><text x="46" y="24">Alles Gute zum Geburtstag!</text><text x="46" y="66">Herzlichen Glückwunsch!</text><text x="46" y="108">Frohe Weihnachten!</text><text x="46" y="150">Frohe Ostern!</text><text x="46" y="192">Ein gutes neues Jahr!</text></g>
      <g class="tx-s"><text x="46" y="38">wszystkiego najlepszego z okazji urodzin</text><text x="46" y="80">wszystkiego najlepszego</text><text x="46" y="122">wesołych Świąt Bożego Narodzenia</text><text x="46" y="164">wesołych Świąt Wielkanocnych</text><text x="46" y="206">szczęśliwego Nowego Roku</text></g>
      <text x="210" y="233" class="tx-b" text-anchor="middle">💬 Danke, gleichfalls!</text>
      <text x="210" y="249" class="tx-s" text-anchor="middle">dziękuję, nawzajem</text>
    </svg>`,
    text: `<p>Życzenia to gotowe formułki – warto znać je na pamięć:</p>
      <ul><li><i>Alles Gute zum Geburtstag!</i> / <i>Herzlichen Glückwunsch!</i> – Wszystkiego najlepszego!</li><li><i>Frohe Weihnachten!</i> / <i>Frohe Ostern!</i> – Wesołych Świąt!</li><li><i>Ein gutes neues Jahr!</i> – Szczęśliwego Nowego Roku!</li></ul>
      <p>Gdy ktoś składa ci życzenia świąteczne, odpowiadasz: <i>Danke, gleichfalls!</i> – Dziękuję, nawzajem!</p>`,
    remember: 'Frohe Weihnachten! Frohe Ostern! – Danke, gleichfalls!',
    hook: 'Na święta: Frohe + nazwa święta. Na urodziny: Alles Gute – „wszystko, co dobre”.',
    check: { q: 'Jak złożysz życzenia na Wielkanoc?', options: ['Frohe Weihnachten!', 'Frohe Ostern!', 'Alles Gute zum Geburtstag!'], answer: 1, explain: 'Ostern – Wielkanoc: Frohe Ostern!' },
  },
  {
    title: 'Pierwszy, drugi… – liczebniki porządkowe',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Trzy kolumny. Do 19: liczba plus -te – zweite, vierte, zwölfte. Od 20: liczba plus -ste – zwanzigste, einunddreißigste. Wyjątki: erste, dritte, siebte, achte">
      <g class="sw"><rect x="5" y="6" width="128" height="188" rx="12" class="f4 s4"/><rect x="139" y="6" width="150" height="188" rx="12" class="f4 s4"/><rect x="295" y="6" width="120" height="188" rx="12" class="f5 s5"/></g>
      <g class="tx-b" text-anchor="middle"><text x="69" y="32">do 19.</text><text x="214" y="32">od 20.</text><text x="355" y="32">wyjątki</text></g>
      <g class="tx-s" text-anchor="middle"><text x="69" y="52">liczba + te</text><text x="214" y="52">liczba + ste</text><text x="355" y="52">na pamięć</text><text x="214" y="80">20.</text><text x="214" y="136">31.</text></g>
      <g class="tx" text-anchor="middle"><text x="69" y="88">2. zwei<tspan class="tx-b t2">te</tspan></text><text x="69" y="122">4. vier<tspan class="tx-b t2">te</tspan></text><text x="69" y="156">12. zwölf<tspan class="tx-b t2">te</tspan></text>
        <text x="214" y="100">zwanzig<tspan class="tx-b t2">ste</tspan></text><text x="214" y="156">einunddreißig<tspan class="tx-b t2">ste</tspan></text>
        <text x="355" y="84">1. erste</text><text x="355" y="114">3. dritte</text><text x="355" y="144">7. siebte</text><text x="355" y="174">8. achte</text></g>
    </svg>`,
    text: `<p>Daty mówisz liczebnikami porządkowymi („pierwszy, drugi…”). Reguła: do 19 dodajesz <b>-te</b> (<i>der zweite, der vierte, der zwölfte</i>), od 20 – <b>-ste</b> (<i>der zwanzigste, der einunddreißigste</i>).</p>
      <p>Wyjątki: <i>der <b>erste</b></i> (1.), <i>der <b>dritte</b></i> (3.), <i>der <b>siebte</b></i> (7.), <i>der <b>achte</b></i> (8.).</p>`,
    remember: 'do 19: -te, od 20: -ste; wyjątki: erste, dritte, siebte, achte.',
    hook: 'Wyjątki 1., 3., 7., 8. zapamiętaj jak PIN: 1-3-7-8.',
    check: { q: 'Jak jest „czwarty” (4.)?', options: ['der vierste', 'der vierte', 'der viertste'], answer: 1, explain: '4 to mniej niż 20, więc vier + te = vierte.' },
  },
  {
    title: 'Data: der dritte, am dritten',
    svg: `<svg viewBox="0 0 420 215" role="img" aria-label="Kartka kalendarza: 3 października. Heute ist der dritte Oktober – po der końcówka -e; am dritten Oktober – na pytanie kiedy, końcówka -en. Rozmowa: Wann hast du Geburtstag? – Am zwölften Mai">
      <rect x="10" y="14" width="96" height="104" rx="8" class="bg s2 sw"/><rect x="10" y="14" width="96" height="28" rx="8" class="f2 s2 sw"/>
      <text x="58" y="34" class="tx" text-anchor="middle">Oktober</text>
      <text x="58" y="88" class="tx-b" text-anchor="middle">3.</text>
      <g class="tx"><text x="124" y="42">Heute ist der dritt<tspan class="tx-b t2">e</tspan> Oktober.</text><text x="124" y="100">am dritt<tspan class="tx-b t2">en</tspan> Oktober</text></g>
      <g class="tx-s"><text x="124" y="62">der … -e → jaki dziś dzień?</text><text x="124" y="120">am … -en → kiedy?</text></g>
      <rect x="10" y="146" width="232" height="34" rx="14" class="f4 s4 sw"/><rect x="250" y="174" width="160" height="34" rx="14" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="126" y="168">Wann hast du Geburtstag?</text><text x="330" y="196">Am zwölft<tspan class="tx-b t2">en</tspan> Mai.</text></g>
    </svg>`,
    text: `<p>Jaki dziś dzień? <i>Heute ist <b>der</b> dritt<b>e</b> Oktober.</i> – po „der” końcówka <b>-e</b>.</p>
      <p>Kiedy? <b>am</b> + końcówka <b>-en</b>: <i>am dritten Oktober</i> (3 października), <i>am zwanzigsten April</i> (20 kwietnia). Na pytanie <i>Wann hast du Geburtstag?</i> odpowiadasz np. <i>Am zwölften Mai.</i></p>`,
    remember: 'Heute ist der dritte Oktober. · am dritten Oktober (kiedy?)',
    hook: 'Po „am” dodaj „n” jak echo: dritte → am dritten, zwölfte → am zwölften.',
    check: { q: 'Ich habe am ___ Juli Geburtstag. (8.)', options: ['achte', 'achtten', 'achten'], answer: 2, explain: '8. = achte (wyjątek, jedno t); po „am” końcówka -en: am achten Juli.' },
  },
  {
    title: 'Zaproszenie i pułapki',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Telefon z wiadomościami: zaproszenie Ich lade dich zu meiner Party ein. Die Party ist am Samstag um 18 Uhr. Kommst du? Odpowiedzi: Ja, gern! Danke für die Einladung! oraz Leider kann ich nicht, ich habe keine Zeit">
      <rect x="50" y="4" width="320" height="232" rx="20" class="ln"/>
      <rect x="66" y="20" width="270" height="72" rx="12" class="f4 s4 sw"/>
      <g class="tx-s"><text x="78" y="42">Ich lade dich zu meiner Party ein.</text><text x="78" y="60">Die Party ist am Samstag um 18 Uhr.</text><text x="78" y="80">Kommst du?</text></g>
      <rect x="150" y="104" width="206" height="50" rx="12" class="f5 s5 sw"/><rect x="150" y="166" width="206" height="56" rx="12" class="f5 s5 sw"/>
      <g class="tx-s"><text x="162" y="124">✅ Ja, gern!</text><text x="162" y="144">Danke für die Einladung!</text><text x="162" y="188">❌ Leider kann ich nicht,</text><text x="162" y="208">ich habe keine Zeit.</text></g>
    </svg>`,
    text: `<p>Zaproszenie: <i>Ich lade dich zu meiner Party ein.</i> – Zapraszam cię na moją imprezę. Termin: <i>am</i> + dzień, <i>um</i> + godzina: <i>Die Party ist am Samstag um 18 Uhr. Kommst du?</i></p>
      <p>Tak: <i>Ja, gern! Danke für die Einladung!</i> Nie: <i>Leider kann ich nicht, ich habe keine Zeit.</i></p>
      <p>Pułapki działu: wyjątki <b>erste, dritte, siebte, achte</b>; po <b>am</b> końcówka <b>-en</b>; w <i>einladen</i> część <b>ein</b> idzie na koniec zdania.</p>`,
    remember: 'Ich lade dich … ein. – Ja, gern! / Leider kann ich nicht.',
    hook: 'leider = niestety – słyszysz „leider”, wiesz, że będzie odmowa.',
    check: { q: 'Która odpowiedź przyjmuje zaproszenie?', options: ['Leider kann ich nicht.', 'Ich habe keine Zeit.', 'Ja, gern! Danke für die Einladung!'], answer: 2, explain: '„Ja, gern!” – „Tak, chętnie!”; leider (niestety) zapowiada odmowę.' },
  },
];

window.LESSONS['niemiecki/dach'] = [
  {
    title: 'D-A-CH – co to za skrót?',
    svg: `<svg viewBox="0 0 420 205" role="img" aria-label="Trzy kafelki: D – Deutschland (Niemcy), A – Österreich (Austria), CH – die Schweiz (Szwajcaria, z rodzajnikiem die). Na dole: czasem dochodzi L – Liechtenstein (DACHL)">
      <g class="sw"><rect x="6" y="10" width="128" height="156" rx="12" class="f4 s4"/><rect x="146" y="10" width="128" height="156" rx="12" class="f4 s4"/><rect x="286" y="10" width="128" height="156" rx="12" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="40">D</text><text x="210" y="40">A</text><text x="350" y="40">CH</text>
        <text x="70" y="104">Deutschland</text><text x="210" y="104">Österreich</text><text x="350" y="104">die Schweiz</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="74">🇩🇪</text><text x="210" y="74">🇦🇹</text><text x="350" y="74">🇨🇭</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="128">Niemcy</text><text x="210" y="128">Austria</text><text x="350" y="128">Szwajcaria</text><text x="350" y="150">z rodzajnikiem die!</text></g>
      <text x="210" y="192" class="tx-s" text-anchor="middle">czasem dochodzi L – Liechtenstein (DACHL)</text>
    </svg>`,
    text: `<p>Po niemiecku mówi się nie tylko w Niemczech. <b>D-A-CH</b> to skrót od oznaczeń trzech największych krajów niemieckojęzycznych: <b>D</b> – Deutschland (Niemcy), <b>A</b> – Österreich (Austria), <b>CH</b> – die Schweiz (Szwajcaria).</p>
      <p>Czasem dodaje się <b>L</b> – Liechtenstein (DACHL), gdzie niemiecki też jest językiem urzędowym. W tej lekcji poznasz stolice, języki i kilka ciekawostek o tych krajach.</p>`,
    remember: 'D – Deutschland, A – Österreich, CH – die Schweiz.',
    hook: 'D-A-CH czytane razem to niemieckie „Dach” – dach: trzy kraje pod jednym dachem języka.',
    check: { q: 'Co oznacza „CH” w skrócie D-A-CH?', options: ['Chorwację', 'Szwajcarię (die Schweiz)', 'Czechy'], answer: 1, explain: 'CH – die Schweiz, czyli Szwajcaria.' },
  },
  {
    title: 'Stolice i podział',
    svg: `<svg viewBox="0 0 420 234" role="img" aria-label="Porównanie: Niemcy – stolica Berlin, 16 krajów związkowych (Bundesländer); Austria – stolica Wien (Wiedeń), 9 krajów związkowych; Szwajcaria – Bern jako Bundesstadt, siedziba władz, 26 kantonów">
      <g class="sw"><rect x="6" y="6" width="128" height="56" rx="10" class="f4 s4"/><rect x="146" y="6" width="128" height="56" rx="10" class="f4 s4"/><rect x="286" y="6" width="128" height="56" rx="10" class="f2 s2"/>
        <rect x="6" y="68" width="128" height="82" rx="10" class="f5 s5"/><rect x="146" y="68" width="128" height="82" rx="10" class="f5 s5"/><rect x="286" y="68" width="128" height="82" rx="10" class="f5 s5"/>
        <rect x="6" y="156" width="128" height="72" rx="10" class="f4 s4"/><rect x="146" y="156" width="128" height="72" rx="10" class="f4 s4"/><rect x="286" y="156" width="128" height="72" rx="10" class="f4 s4"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="30">🇩🇪</text><text x="210" y="30">🇦🇹</text><text x="350" y="30">🇨🇭</text></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="52">Deutschland</text><text x="210" y="52">Österreich</text><text x="350" y="52">die Schweiz</text>
        <text x="70" y="112">Berlin</text><text x="210" y="112">Wien</text><text x="350" y="112">Bern</text>
        <text x="70" y="186">16</text><text x="210" y="186">9</text><text x="350" y="186">26</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="88">stolica</text><text x="210" y="88">stolica</text><text x="350" y="88">siedziba władz</text>
        <text x="210" y="132">(Wiedeń)</text><text x="350" y="132">Bundesstadt –</text><text x="350" y="146">nie „stolica”!</text>
        <text x="70" y="208">Bundesländer</text><text x="210" y="208">Bundesländer</text><text x="350" y="208">Kantone</text></g>
    </svg>`,
    text: `<p><b>Berlin</b> to stolica Niemiec, <b>Wien</b> (Wiedeń) – stolica Austrii. Szwajcaria <b>nie ma oficjalnej stolicy</b>: <b>Bern</b> to „Bundesstadt”, czyli siedziba władz federalnych.</p>
      <p>Niemcy dzielą się na <b>16</b> krajów związkowych (<i>Bundesländer</i>), Austria – na <b>9</b> (Wiedeń jest jednym z nich), a Szwajcaria – na <b>26</b> kantonów (<i>Kantone</i>).</p>`,
    remember: 'Berlin, Wien, Bern (Bundesstadt); 16 – 9 – 26.',
    hook: 'Wiedeń jest stolicą i zarazem jednym z 9 krajów związkowych – jak kapitan, który też gra w drużynie.',
    check: { q: 'Ile kantonów ma Szwajcaria?', options: ['9', '16', '26'], answer: 2, explain: 'Szwajcaria – 26 kantonów; Niemcy – 16, Austria – 9 krajów związkowych.' },
  },
  {
    title: 'Języki, flagi, sąsiedzi',
    svg: `<svg viewBox="0 0 420 236" role="img" aria-label="Pasek języków Szwajcarii: niemiecki ponad 60 procent, pozostałe trzy – francuski, włoski, retoromański. Flagi i sąsiedzi: Niemcy – czarno-czerwono-złota, 9 sąsiadów; Austria – czerwono-biało-czerwona z XIII wieku, 8 sąsiadów; Szwajcaria – biały krzyż na czerwonym polu, 5 sąsiadów">
      <text x="10" y="22" class="tx-b">die Schweiz: 4 języki urzędowe</text>
      <rect x="10" y="34" width="248" height="32" rx="6" class="f4 s4 sw"/><rect x="258" y="34" width="152" height="32" rx="6" class="f5 s5 sw"/>
      <g class="tx" text-anchor="middle"><text x="134" y="56">Deutsch – ponad 60%</text><text x="334" y="56">3 pozostałe</text></g>
      <text x="210" y="86" class="tx-s" text-anchor="middle">Französisch · Italienisch · Rätoromanisch</text>
      <g class="ln-thin"><line x1="10" y1="98" x2="410" y2="98"/><line x1="10" y1="143" x2="410" y2="143"/><line x1="10" y1="188" x2="410" y2="188"/></g>
      <g class="tx" text-anchor="middle"><text x="24" y="124">🇩🇪</text><text x="24" y="169">🇦🇹</text><text x="24" y="214">🇨🇭</text></g>
      <g class="tx-b"><text x="46" y="118">Deutschland</text><text x="46" y="163">Österreich</text><text x="46" y="208">die Schweiz</text></g>
      <g class="tx-s"><text x="46" y="135">flaga czarno-czerwono-złota</text><text x="46" y="180">czerwono-biało-czerwona, z XIII w.</text><text x="46" y="225">biały krzyż na czerwonym polu</text></g>
      <g class="tx-b" text-anchor="end"><text x="410" y="118">9 sąsiadów</text><text x="410" y="163">8 sąsiadów</text><text x="410" y="208">5 sąsiadów</text></g>
    </svg>`,
    text: `<p>W Niemczech i Austrii językiem urzędowym jest niemiecki (w Austrii regionalnie też chorwacki, słoweński i węgierski). Szwajcaria ma <b>4 języki urzędowe</b>: niemiecki (ponad 60%), francuski, włoski i retoromański.</p>
      <p>Flagi: Niemcy – czarno-czerwono-złota, Austria – czerwono-biało-czerwona (jedna z najstarszych, z XIII w.), Szwajcaria – biały krzyż na czerwonym polu. Sąsiedzi: Niemcy – 9 państw (w tym Polska), Austria – 8, Szwajcaria – 5.</p>`,
    remember: 'Szwajcaria: 4 języki urzędowe; Niemcy: 9 sąsiadów, w tym Polska.',
    hook: 'Flaga Szwajcarii wygląda jak znak „plus” – biały krzyż na czerwonym polu.',
    check: { q: 'Ile państw sąsiaduje z Niemcami?', options: ['9', '5', '8'], answer: 0, explain: 'Niemcy mają 9 sąsiadów (w tym Polskę); Austria – 8, Szwajcaria – 5.' },
  },
  {
    title: 'Trzy rzeczy, które warto wiedzieć',
    svg: `<svg viewBox="0 0 420 232" role="img" aria-label="Trzy karty: 3. Oktober 1990 – zjednoczenie Niemiec, od tej daty Berlin jest stolicą zjednoczonych Niemiec; Wien – tu żyli i komponowali Haydn, Mozart i Beethoven, stąd pochodzi walc wiedeński; Binnenstaat – Austria i Szwajcaria nie mają dostępu do morza, Szwajcaria to kraj alpejski">
      <rect x="6" y="6" width="408" height="78" rx="12" class="f4 s4 sw"/>
      <text x="210" y="34" class="tx-b" text-anchor="middle">📅 3. Oktober 1990</text>
      <text x="210" y="56" class="tx" text-anchor="middle">zjednoczenie Niemiec</text>
      <text x="210" y="74" class="tx-s" text-anchor="middle">od tego dnia Berlin jest stolicą zjednoczonych Niemiec</text>
      <g class="sw"><rect x="6" y="92" width="200" height="134" rx="12" class="f5 s5"/><rect x="214" y="92" width="200" height="134" rx="12" class="f4 s4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="106" y="120">🎻 Wien</text><text x="314" y="120">🏔️ Binnenstaat</text></g>
      <g class="tx-s" text-anchor="middle"><text x="106" y="146">tu żyli i komponowali:</text><text x="106" y="214">stąd pochodzi walc wiedeński</text>
        <text x="314" y="146">kraj bez dostępu do morza:</text><text x="314" y="214">Szwajcaria – kraj alpejski</text></g>
      <g class="tx" text-anchor="middle"><text x="106" y="170">Haydn, Mozart,</text><text x="106" y="192">Beethoven</text><text x="314" y="170">Austria,</text><text x="314" y="192">Szwajcaria</text></g>
    </svg>`,
    text: `<p><b>Berlin</b> jest stolicą zjednoczonych Niemiec od zjednoczenia <b>3 października 1990 r.</b> W <b>Wiedniu</b> żyli i komponowali Haydn, Mozart i Beethoven – stąd też pochodzi walc wiedeński.</p>
      <p>Austria i Szwajcaria nie mają dostępu do morza – każda z nich to <i>Binnenstaat</i>. Szwajcaria to kraj alpejski.</p>`,
    remember: '3.10.1990 – zjednoczenie Niemiec; Binnenstaat – kraj bez dostępu do morza.',
    hook: 'Datę przeczytasz już po niemiecku: am dritten Oktober – jak w dziale o świętach.',
    check: { q: 'Co znaczy „Binnenstaat”?', options: ['kraj związkowy', 'kraj bez dostępu do morza', 'stolica kraju'], answer: 1, explain: 'Binnenstaat – kraj bez dostępu do morza, np. Austria i Szwajcaria.' },
  },
  {
    title: 'Kraj, język, mieszkaniec – i pułapka',
    svg: `<svg viewBox="0 0 420 242" role="img" aria-label="Tabela: Polen – Polnisch – der Pole, die Polin; Deutschland – Deutsch – der Deutsche, die Deutsche; Österreich – Deutsch – der Österreicher, die Österreicherin; die Schweiz – 4 języki – der Schweizer, die Schweizerin. Pułapka: aus Polen, aus Österreich, ale aus der Schweiz, in der Schweiz">
      <g class="tx-s"><text x="12" y="18">kraj</text><text x="140" y="18">język</text><text x="240" y="18">mieszkaniec / mieszkanka</text></g>
      <g class="ln-thin"><line x1="10" y1="26" x2="410" y2="26"/><line x1="10" y1="66" x2="410" y2="66"/><line x1="10" y1="106" x2="410" y2="106"/><line x1="10" y1="146" x2="410" y2="146"/><line x1="10" y1="186" x2="410" y2="186"/></g>
      <g class="tx-b"><text x="12" y="52">Polen</text><text x="12" y="92">Deutschland</text><text x="12" y="132">Österreich</text><text x="12" y="172">die Schweiz</text></g>
      <g class="tx"><text x="140" y="52">Polnisch</text><text x="140" y="92">Deutsch</text><text x="140" y="132">Deutsch</text><text x="140" y="172">4 języki</text></g>
      <g class="tx-s"><text x="240" y="42"><tspan class="t1">der</tspan> Pole</text><text x="240" y="59"><tspan class="t2">die</tspan> Polin</text>
        <text x="240" y="82"><tspan class="t1">der</tspan> Deutsche</text><text x="240" y="99"><tspan class="t2">die</tspan> Deutsche</text>
        <text x="240" y="122"><tspan class="t1">der</tspan> Österreicher</text><text x="240" y="139"><tspan class="t2">die</tspan> Österreicherin</text>
        <text x="240" y="162"><tspan class="t1">der</tspan> Schweizer</text><text x="240" y="179"><tspan class="t2">die</tspan> Schweizerin</text></g>
      <rect x="6" y="194" width="408" height="44" rx="10" class="f2 s2 sw"/>
      <text x="210" y="211" class="tx-s" text-anchor="middle">bez rodzajnika: aus Polen, aus Österreich</text>
      <text x="210" y="231" class="tx-b" text-anchor="middle">ale: aus der Schweiz, in der Schweiz</text>
    </svg>`,
    text: `<p>Kraj, język i mieszkaniec to trzy różne słowa: <i>Polen – Polnisch – der Pole / die Polin</i>; <i>Österreich – Deutsch – der Österreicher / die Österreicherin</i>.</p>
      <p>Pułapka: większość krajów nie ma rodzajnika (<i>Ich komme aus Polen.</i>), ale <b>die Schweiz</b> ma: <i>Ich komme aus <b>der</b> Schweiz. Ich wohne in <b>der</b> Schweiz.</i></p>
      <p>Dobra wiadomość: wiele słów zrozumiesz bez słownika, bo są podobne do polskich lub angielskich (internacjonalizmy): <i>das Hotel, die Musik, der Computer, das Taxi</i>.</p>`,
    remember: 'aus Polen, aus Österreich – ale aus der Schweiz.',
    hook: 'die Schweiz po „aus” i „in” zmienia się w der – tak jak die Lampe → neben der Lampe.',
    check: { q: 'Ich wohne in ___ Schweiz.', options: ['die', '– (bez rodzajnika)', 'der'], answer: 2, explain: 'die Schweiz, pytanie „gdzie?” – celownik: in der Schweiz.' },
  },
];
