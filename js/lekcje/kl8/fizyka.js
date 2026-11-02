/* Lekcje – fizyka, klasa 8. Klucz: 'fizyka/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['fizyka/elektrostatyka'] = [
  {
    title: 'Ładunek = nadmiar albo niedobór elektronów',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trzy atomy-modele: obojętny ma 3 ładunki dodatnie i 3 elektrony, naelektryzowany ujemnie ma 5 elektronów, naelektryzowany dodatnio ma 1 elektron">
      <g class="ln-thin"><rect x="10" y="10" width="120" height="190" rx="12" class="bg"/><rect x="140" y="10" width="120" height="190" rx="12" class="bg"/><rect x="270" y="10" width="120" height="190" rx="12" class="bg"/></g>
      <g class="f2 s2"><circle cx="70" cy="90" r="18"/><circle cx="200" cy="90" r="18"/><circle cx="330" cy="90" r="18"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="96">3+</text><text x="200" y="96">3+</text><text x="330" y="96">3+</text></g>
      <g class="f1 s1">
        <circle cx="70" cy="45" r="10"/><circle cx="31" cy="112" r="10"/><circle cx="109" cy="112" r="10"/>
        <circle cx="200" cy="45" r="10"/><circle cx="161" cy="112" r="10"/><circle cx="239" cy="112" r="10"/><circle cx="160" cy="68" r="10"/><circle cx="240" cy="68" r="10"/>
        <circle cx="330" cy="45" r="10"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="51">−</text><text x="31" y="118">−</text><text x="109" y="118">−</text>
        <text x="200" y="51">−</text><text x="161" y="118">−</text><text x="239" y="118">−</text><text x="160" y="74">−</text><text x="240" y="74">−</text>
        <text x="330" y="51">−</text>
      </g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="160">obojętne</text><text x="200" y="160">ujemne</text><text x="330" y="160">dodatnie</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="184">3+ i 3−</text><text x="200" y="184">nadmiar e⁻</text><text x="330" y="184">niedobór e⁻</text></g>
    </svg>`,
    text: `<p>Atom ma w jądrze protony (+), a wokół – elektrony (−). Gdy ładunków + i − jest tyle samo, ciało jest <b>obojętne</b>.</p>
      <p>Elektryzowanie to <b>przenoszenie elektronów</b>. Ciało, które zyskało elektrony, ma ładunek <b>ujemny</b>. Ciało, które je straciło – <b>dodatni</b>. Protony zostają w jądrach.</p>`,
    remember: 'Ładunek ujemny = <b>nadmiar elektronów</b>. Ładunek dodatni = <b>niedobór elektronów</b>.',
    hook: 'Elektrony to „waluta” elektryczności – kto je zabrał, jest na minusie (−), kto oddał, na plusie (+).',
    check: { q: 'Ciało straciło część elektronów. Jaki ma ładunek?', options: ['dodatni', 'ujemny', 'żaden'], answer: 0, explain: 'Ma mniej elektronów niż protonów – przewaga ładunku dodatniego.' },
  },
  {
    title: 'Plus z minusem się przyciąga',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dwa plusy odpychają się, dwa minusy odpychają się, plus i minus przyciągają się">
      <defs><marker id="a-k8f-es-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f2 s2"><circle cx="120" cy="40" r="18"/><circle cx="200" cy="40" r="18"/><circle cx="120" cy="160" r="18"/></g>
      <g class="f1 s1"><circle cx="120" cy="100" r="18"/><circle cx="200" cy="100" r="18"/><circle cx="200" cy="160" r="18"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="120" y="46">+</text><text x="200" y="46">+</text>
        <text x="120" y="106">−</text><text x="200" y="106">−</text>
        <text x="120" y="166">+</text><text x="200" y="166">−</text>
      </g>
      <g class="ln s2 sw">
        <line x1="98" y1="40" x2="62" y2="40" marker-end="url(#a-k8f-es-2)"/><line x1="222" y1="40" x2="258" y2="40" marker-end="url(#a-k8f-es-2)"/>
        <line x1="98" y1="100" x2="62" y2="100" marker-end="url(#a-k8f-es-2)"/><line x1="222" y1="100" x2="258" y2="100" marker-end="url(#a-k8f-es-2)"/>
        <line x1="70" y1="160" x2="96" y2="160" marker-end="url(#a-k8f-es-2)"/><line x1="250" y1="160" x2="224" y2="160" marker-end="url(#a-k8f-es-2)"/>
      </g>
      <g class="tx"><text x="275" y="46">odpychają się</text><text x="275" y="106">odpychają się</text><text x="275" y="166">przyciągają się</text></g>
    </svg>`,
    text: `<p>Ładunki <b>jednoimienne</b> (+ i +, − i −) się <b>odpychają</b>. Ładunki <b>różnoimienne</b> (+ i −) się <b>przyciągają</b>.</p>
      <p>Dlatego naelektryzowany balon „klei się” do włosów, z których zabrał elektrony – mają ładunki przeciwne.</p>`,
    remember: 'Jednoimienne – odpychają się. Różnoimienne – przyciągają się.',
    hook: 'Jak w komedii romantycznej: przeciwieństwa się przyciągają.',
  },
  {
    title: 'Trzy sposoby elektryzowania',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Potarcie: dwa ciała mają ładunki przeciwne. Dotyk: oba ciała mają ładunek tego samego znaku. Indukcja: naelektryzowana laska blisko przewodnika przesuwa w nim elektrony bez dotykania">
      <g class="tx-b" text-anchor="middle"><text x="70" y="24">potarcie</text><text x="210" y="24">dotyk</text><text x="350" y="24">indukcja</text></g>
      <rect x="20" y="50" width="45" height="90" rx="6" class="f1 s1"/><rect x="75" y="50" width="45" height="90" rx="6" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="42" y="90">−</text><text x="42" y="118">−</text><text x="97" y="90">+</text><text x="97" y="118">+</text></g>
      <circle cx="185" cy="95" r="26" class="f1 s1"/><circle cx="237" cy="95" r="26" class="f1 s1"/>
      <g class="tx-b" text-anchor="middle"><text x="185" y="101">−</text><text x="237" y="101">−</text></g>
      <rect x="285" y="60" width="20" height="80" rx="6" class="f1 s1"/>
      <g class="tx-b" text-anchor="middle"><text x="295" y="90">−</text><text x="295" y="120">−</text></g>
      <rect x="320" y="60" width="80" height="80" rx="8" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="332" y="90">+</text><text x="332" y="120">+</text><text x="388" y="90">−</text><text x="388" y="120">−</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="168">ładunki przeciwne</text><text x="70" y="188">elektrony przeszły</text>
        <text x="210" y="168">ten sam znak</text><text x="210" y="188">część ładunku przeszła</text>
        <text x="350" y="168">bez dotykania</text><text x="350" y="188">e⁻ się przesuwają</text>
      </g>
    </svg>`,
    text: `<ul><li><b>Potarcie</b> – elektrony przechodzą z jednego ciała na drugie. Oba mają ładunki <b>przeciwne</b> i równe co do wartości.</li>
      <li><b>Dotyk</b> – naelektryzowane ciało oddaje część ładunku. Oba mają ładunek <b>tego samego znaku</b>.</li>
      <li><b>Indukcja</b> – tylko <b>zbliżasz</b> ładunek do przewodnika. Jego elektrony swobodne się przesuwają: bliższa strona ma ładunek przeciwny, więc przewodnik jest przyciągany.</li></ul>`,
    remember: 'Potarcie → znaki przeciwne. Dotyk → ten sam znak. Indukcja → przesunięcie ładunków bez dotykania.',
    check: { q: 'Ujemnie naelektryzowaną kulką dotykasz obojętnej metalowej kulki. Jaki ładunek uzyska ta kulka?', options: ['dodatni', 'ujemny', 'żaden'], answer: 1, explain: 'Przy dotyku część elektronów przechodzi na drugą kulkę – ma ładunek tego samego znaku (ujemny).' },
  },
  {
    title: 'Przewodniki i izolatory',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Przekrój przewodu: miedziany rdzeń przewodzi prąd, plastikowa osłona izoluje. Przewodniki: metale, grafit, roztwór soli, ciało człowieka. Izolatory: plastik, guma, szkło, porcelana">
      <rect x="10" y="10" width="185" height="200" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="200" rx="12" class="f1 s1"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">przewodniki</text><text x="297" y="38">izolatory</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="58">ładunki się poruszają</text><text x="297" y="58">ładunki „stoją”</text></g>
      <g class="tx" text-anchor="middle">
        <text x="102" y="92">🔩 metale</text><text x="102" y="122">✏️ grafit</text><text x="102" y="152">🧂 roztwór soli</text><text x="102" y="182">🧍 ciało człowieka</text>
        <text x="297" y="92">🧴 plastik</text><text x="297" y="122">🧤 guma</text><text x="297" y="152">🥛 szkło</text><text x="297" y="182">🍵 porcelana</text>
      </g>
    </svg>`,
    text: `<p>W <b>przewodnikach</b> ładunki mogą się swobodnie przemieszczać – w metalach są to <b>elektrony swobodne</b>. W <b>izolatorach</b> ładunki nie mogą się swobodnie przemieszczać.</p>
      <p>Kabel to oba naraz: w środku <b>miedź</b> (przewodzi prąd), na zewnątrz <b>plastik</b> (chroni przed porażeniem).</p>`,
    remember: 'Przewodnik – ładunek „płynie”. Izolator – ładunek zostaje tam, gdzie go umieszczono.',
    hook: 'Kabel jak kanapka: przewodnik w środku, izolator na zewnątrz.',
  },
  {
    title: 'Elektroskop i ładunek elementarny',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Elektroskop: metalowa kulka, pręt i dwa listki w osłonie. Listki mają ładunek ujemny i rozchylają się, bo się odpychają. Obok: ładunek elementarny e równa się około 1,6 razy 10 do minus 19 kulomba">
      <rect x="60" y="80" width="140" height="125" rx="12" class="bg ln"/>
      <line x1="130" y1="44" x2="130" y2="140" class="ln sw"/>
      <circle cx="130" cy="34" r="14" class="f1 s1"/>
      <path d="M130,140 L102,186" class="ln sw"/><path d="M130,140 L158,186" class="ln sw"/>
      <g class="tx-b" text-anchor="middle"><text x="130" y="40">−</text><text x="106" y="166">−</text><text x="154" y="166">−</text></g>
            <g class="tx"><text x="215" y="110">listki: ten sam znak</text><text x="215" y="134">→ odpychają się</text></g>
      <rect x="215" y="160" width="175" height="44" rx="10" class="f4 s4"/>
      <text x="302" y="188" class="tx-b" text-anchor="middle">e ≈ 1,6·10⁻¹⁹ C</text>
    </svg>`,
    text: `<p><b>Elektroskop</b> wykrywa ładunek. Gdy dotkniesz jego kulki naelektryzowanym ciałem, ładunek rozchodzi się po pręcie i listkach. Listki mają ładunek tego samego znaku, więc się <b>rozchylają</b>. Im większy ładunek, tym większe rozchylenie.</p>
      <p>Najmniejszy ładunek to <b>ładunek elementarny</b> e ≈ 1,6 · 10<sup>−19</sup> C (ma go elektron i proton). Ładunek każdego ciała jest jego wielokrotnością. Jednostka ładunku to <b>kulomb (C)</b>.</p>`,
    remember: 'Ładunek ciała = n · e, gdzie e ≈ 1,6 · 10<sup>−19</sup> C, a n to liczba całkowita.',
    check: { q: 'Dlaczego listki naładowanego elektroskopu się rozchylają?', options: ['bo mają ładunki przeciwne', 'bo mają ładunek tego samego znaku i się odpychają', 'bo się nagrzewają'], answer: 1, explain: 'Ładunek rozchodzi się na oba listki – ładunki jednoimienne się odpychają.' },
  },
];

window.LESSONS['fizyka/prad'] = [
  {
    title: 'Prąd płynie tylko w zamkniętym obwodzie',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat obwodu: ogniwo, wyłącznik i żarówka połączone w pętlę. Kierunek umowny prądu od plusa do minusa, elektrony płyną w przeciwną stronę">
      <defs><marker id="a-k8f-pr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker>
      <marker id="b-k8f-pr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <path d="M60,60 L60,170 L340,170 L340,60 L230,60" class="ln sw" fill="none"/>
      <path d="M170,60 L60,60" class="ln sw" fill="none"/>
      <line x1="170" y1="60" x2="222" y2="40" class="ln sw"/>
      <circle cx="170" cy="60" r="3" class="ln"/><circle cx="230" cy="60" r="3" class="ln"/>
      <rect x="40" y="100" width="40" height="30" class="bg"/>
      <line x1="40" y1="104" x2="80" y2="104" class="ln sw"/>
      <line x1="52" y1="123" x2="68" y2="123" class="ln sw"/><line x1="52" y1="126" x2="68" y2="126" class="ln sw"/>
      <circle cx="200" cy="170" r="16" class="bg ln sw"/>
      <path d="M189,159 L211,181 M211,159 L189,181" class="ln"/>
      <g class="tx-b"><text x="88" y="106">+</text><text x="88" y="132">−</text></g>
      <g class="tx-s" text-anchor="middle"><text x="200" y="28">wyłącznik</text><text x="200" y="207">żarówka</text></g>
      <text x="104" y="122" class="tx-s">ogniwo</text>
      <path d="M225,82 L295,82" class="ln s2 sw" marker-end="url(#a-k8f-pr-1)"/>
      <text x="260" y="102" class="tx-s t2" text-anchor="middle">prąd: + → −</text>
      <path d="M295,150 L225,150" class="ln s1 sw" marker-end="url(#b-k8f-pr-1)"/>
      <text x="260" y="138" class="tx-s t1" text-anchor="middle">elektrony: − → +</text>
    </svg>`,
    text: `<p><b>Prąd elektryczny</b> to uporządkowany ruch ładunków: w metalach – <b>elektronów swobodnych</b>, w roztworach – <b>jonów</b>. Potrzebne są: źródło napięcia (bateria) i <b>zamknięty obwód</b>.</p>
      <p>Na rysunku wyłącznik jest otwarty – prąd nie płynie. <b>Kierunek umowny</b> prądu to od + do −, a elektrony płyną odwrotnie.</p>`,
    remember: 'Umowny kierunek prądu: + → −. Elektrony: − → +.',
    hook: 'Obwód jak tor wyścigowy: jedna przerwa i nikt nie dojedzie do mety.',
  },
  {
    title: 'Natężenie: ile ładunku na sekundę',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przewodnik z przekrojem. Przez przekrój w ciągu 3 sekund przepływa ładunek 6 kulombów, więc natężenie wynosi 2 ampery">
      <defs><marker id="a-k8f-pr-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <rect x="20" y="40" width="360" height="60" rx="30" class="f4 s4"/>
      <ellipse cx="200" cy="70" rx="14" ry="30" class="f2 s2 sw"/>
      <g class="f1 s1"><circle cx="60" cy="58" r="8"/><circle cx="100" cy="82" r="8"/><circle cx="140" cy="60" r="8"/><circle cx="250" cy="80" r="8"/><circle cx="290" cy="58" r="8"/><circle cx="330" cy="82" r="8"/></g>
      <path d="M150,124 L250,124" class="ln s1 sw" marker-end="url(#a-k8f-pr-2)"/>
      <text x="200" y="22" class="tx-s" text-anchor="middle">przekrój przewodnika</text>
      <text x="200" y="160" class="tx-b" text-anchor="middle">I = q / t = 6 C : 3 s = 2 A</text>
      <text x="200" y="186" class="tx-s" text-anchor="middle">1 A = 1 C / 1 s</text>
    </svg>`,
    text: `<p><b>Natężenie prądu</b> I mówi, jaki ładunek przepływa przez przekrój przewodnika w ciągu 1 sekundy: <b>I = q / t</b>. Jednostka to <b>amper (A)</b>.</p>
      <p>Natężenie mierzy <b>amperomierz</b>. Przydatne: 1 mA = 0,001 A.</p>`,
    remember: 'I = q / t, &nbsp; [A] = [C] / [s]',
    hook: 'Natężenie jak liczba osób przechodzących przez bramkę stadionu w ciągu sekundy.',
    check: { q: 'W ciągu 5 s przepłynął ładunek 10 C. Jakie jest natężenie?', options: ['50 A', '2 A', '0,5 A'], answer: 1, explain: 'I = q / t = 10 C : 5 s = 2 A.' },
  },
  {
    title: 'Napięcie, opór i trójkąt U–I–R',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trójkąt wzorów: na górze U, na dole I i R. Zakryj szukaną wielkość: U równa się I razy R, I równa się U przez R, R równa się U przez I">
      <path d="M110,20 L200,180 L20,180 z" class="f4 s4 sw"/>
      <line x1="64" y1="110" x2="156" y2="110" class="ln sw"/>
      <line x1="110" y1="110" x2="110" y2="180" class="ln sw"/>
      <g class="tx-b" text-anchor="middle"><text x="110" y="90">U</text><text x="78" y="155">I</text><text x="142" y="155">R</text></g>
      <g class="tx"><text x="225" y="70">U = I · R</text><text x="225" y="110">I = U / R</text><text x="225" y="150">R = U / I</text></g>
      <g class="tx-s"><text x="225" y="40">jednostki: V, A, Ω</text><text x="225" y="185">1 Ω = 1 V / 1 A</text></g>
    </svg>`,
    text: `<p><b>Napięcie</b> U (w woltach, V) mówi, ile energii potrzeba do przeniesienia ładunku 1 C w obwodzie. Bateria „paluszek” ma 1,5 V, gniazdko – 230 V.</p>
      <p><b>Opór</b> R (w omach, Ω) to cecha przewodnika: jak bardzo utrudnia przepływ prądu. <b>R = U / I</b>.</p>`,
    remember: 'R = U / I, &nbsp; U = I · R, &nbsp; I = U / R',
    hook: 'Zakryj palcem szukaną literę w trójkącie – zostanie wzór. U na górze: dzielisz przez nie dolne litery; dolne obok siebie: mnożysz.',
    check: { q: 'Napięcie 9 V, natężenie 0,3 A. Jaki jest opór?', options: ['2,7 Ω', '30 Ω', '0,03 Ω'], answer: 1, explain: 'R = U / I = 9 V : 0,3 A = 30 Ω.' },
  },
  {
    title: 'Amperomierz w szereg, woltomierz obok',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Schemat: ogniwo, amperomierz włączony szeregowo i opornik. Woltomierz podłączony równolegle do końców opornika">
      <path d="M60,50 L60,180 L340,180 L340,50 z" class="ln sw" fill="none"/>
      <rect x="40" y="100" width="40" height="30" class="bg"/>
      <line x1="40" y1="104" x2="80" y2="104" class="ln sw"/>
      <line x1="52" y1="123" x2="68" y2="123" class="ln sw"/><line x1="52" y1="126" x2="68" y2="126" class="ln sw"/>
      <circle cx="170" cy="50" r="18" class="f1 s1 sw"/><text x="170" y="56" class="tx-b" text-anchor="middle">A</text>
      <rect x="245" y="168" width="60" height="24" class="bg ln sw"/>
      <path d="M245,180 L245,130 L255,130 M305,180 L305,130 L293,130" class="ln" fill="none"/>
      <circle cx="275" cy="130" r="18" class="f3 s3 sw"/><text x="275" y="136" class="tx-b" text-anchor="middle">V</text>
      <g class="tx-s"><text x="198" y="30">szeregowo</text><text x="244" y="104">równolegle</text><text x="244" y="212">opornik</text><text x="88" y="120">ogniwo</text></g>
    </svg>`,
    text: `<p><b>Amperomierz</b> mierzy natężenie – przez niego musi przepłynąć cały prąd, więc włączasz go <b>szeregowo</b> (w „pętlę” obwodu).</p>
      <p><b>Woltomierz</b> mierzy napięcie między dwoma punktami – podłączasz go <b>równolegle</b>, do końców odbiornika.</p>`,
    remember: 'A – szeregowo. V – równolegle.',
    hook: 'Amperomierz stoi „w kolejce” razem z żarówką, woltomierz „obok niej” i porównuje jej oba końce.',
    check: { q: 'Jak włączysz woltomierz, żeby zmierzyć napięcie na żarówce?', options: ['szeregowo z żarówką', 'równolegle do żarówki', 'zamiast baterii'], answer: 1, explain: 'Woltomierz podłączamy równolegle – do obu końców żarówki.' },
  },
  {
    title: 'Prawo Ohma na wykresie',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Wykres natężenia od napięcia: półprosta z początku układu przez punkty 2 V i 0,1 A, 4 V i 0,2 A, 6 V i 0,3 A. Opór wynosi 20 omów">
      <defs><marker id="a-k8f-pr-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M50,190 L270,190" class="ln" marker-end="url(#a-k8f-pr-5)"/>
      <path d="M50,190 L50,20" class="ln" marker-end="url(#a-k8f-pr-5)"/>
      <g class="ln-thin dash"><path d="M110,190 L110,150 L50,150"/><path d="M170,190 L170,110 L50,110"/><path d="M230,190 L230,70 L50,70"/></g>
      <line x1="50" y1="190" x2="260" y2="50" class="ln s1 sw"/>
      <g class="f1 s1"><circle cx="110" cy="150" r="5"/><circle cx="170" cy="110" r="5"/><circle cx="230" cy="70" r="5"/></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="208">2</text><text x="170" y="208">4</text><text x="230" y="208">6</text><text x="275" y="208">U [V]</text></g>
      <g class="tx-s" text-anchor="end"><text x="44" y="154">0,1</text><text x="44" y="114">0,2</text><text x="44" y="74">0,3</text><text x="44" y="24">I [A]</text></g>
      <rect x="285" y="60" width="105" height="80" rx="10" class="f4 s4"/>
      <g class="tx" text-anchor="middle"><text x="337" y="90">R = U / I</text><text x="337" y="120">= 20 Ω</text></g>
    </svg>`,
    text: `<p>Dla przewodnika metalowego w stałej temperaturze opór jest stały. Wtedy natężenie jest <b>wprost proporcjonalne</b> do napięcia: 2 razy większe U – 2 razy większe I. To <b>prawo Ohma</b>.</p>
      <p>Wykres I(U) to <b>półprosta z początku układu</b>. Z każdego punktu odczytasz opór: 2 V : 0,1 A = 20 Ω, 6 V : 0,3 A = 20 Ω.</p>`,
    remember: 'Stały opór → I rośnie proporcjonalnie do U → wykres: półprosta przez (0, 0).',
    check: { q: 'Opornik z wykresu (20 Ω) podłączono do 8 V. Jakie będzie natężenie?', options: ['0,4 A', '160 A', '2,5 A'], answer: 0, explain: 'I = U / R = 8 V : 20 Ω = 0,4 A.' },
  },
];

window.LESSONS['fizyka/praca-moc-pradu'] = [
  {
    title: 'Moc: jak szybko urządzenie zużywa energię',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trójkąt wzorów: P na górze, U i I na dole. P równa się U razy I. Przykład: 230 woltów razy 10 amperów to 2300 watów">
      <path d="M110,20 L200,180 L20,180 z" class="f2 s2 sw"/>
      <line x1="64" y1="110" x2="156" y2="110" class="ln sw"/>
      <line x1="110" y1="110" x2="110" y2="180" class="ln sw"/>
      <g class="tx-b" text-anchor="middle"><text x="110" y="90">P</text><text x="78" y="155">U</text><text x="142" y="155">I</text></g>
      <g class="tx"><text x="220" y="60">P = U · I</text><text x="220" y="95">230 V · 10 A</text><text x="220" y="125">= 2300 W</text></g>
      <text x="220" y="165" class="tx-s">1 kW = 1000 W</text>
    </svg>`,
    text: `<p><b>Moc</b> mówi, ile pracy prąd wykonuje w 1 sekundę. <b>P = U · I</b>, jednostka: <b>wat (W)</b>.</p>
      <p>Moc jest na tabliczce każdego urządzenia. Mocny czajnik ma ok. 2000 W, ładowarka telefonu – dużo mniej.</p>`,
    remember: 'P = U · I, &nbsp; 1 W = 1 V · 1 A',
    hook: 'Ten sam trójkąt co przy oporze: zakryj szukaną. I = P / U.',
    check: { q: 'Urządzenie pracuje przy 230 V i pobiera 2 A. Jaka jest jego moc?', options: ['115 W', '232 W', '460 W'], answer: 2, explain: 'P = U · I = 230 V · 2 A = 460 W.' },
  },
  {
    title: 'Energia: W = P · t i kilowatogodzina',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Prostokąt: moc 1 kilowat razy czas 1 godzina to 1 kilowatogodzina, czyli 3 600 000 dżuli">
      <rect x="40" y="40" width="200" height="110" class="f3 s3 sw"/>
      <text x="140" y="80" class="tx" text-anchor="middle">P = 1 kW</text>
      <text x="140" y="115" class="tx-b" text-anchor="middle">W = P · t</text>
      <text x="140" y="172" class="tx" text-anchor="middle">t = 1 h = 3600 s</text>
      <rect x="258" y="50" width="134" height="90" rx="10" class="f4 s4"/>
      <g class="tx" text-anchor="middle"><text x="325" y="82">1 kWh =</text><text x="325" y="112">3 600 000 J</text></g>
    </svg>`,
    text: `<p>Zużyta energia (praca prądu) to <b>W = P · t = U · I · t</b>. W dżulach: moc w W, czas w sekundach.</p>
      <p>Rachunki za prąd liczy się w <b>kilowatogodzinach</b>: moc w <b>kW</b>, czas w <b>godzinach</b>. 1 kWh = 1000 W · 3600 s = 3 600 000 J. Licznik w mieszkaniu pokazuje właśnie kWh.</p>`,
    remember: 'W = P · t. kWh: kW × h. Dżule: W × s.',
    hook: 'Pole prostokąta: moc to wysokość, czas to szerokość – energia to pole.',
    check: { q: 'Grzejnik 2 kW działa 3 godziny. Ile energii zużyje?', options: ['6 kWh', '1,5 kWh', '5 kWh'], answer: 0, explain: 'W = P · t = 2 kW · 3 h = 6 kWh.' },
  },
  {
    title: 'Na co zamienia się energia elektryczna',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cztery kafelki: ciepło – czajnik i żelazko, światło – żarówka, ruch – silnik w wentylatorze, dźwięk – głośnik">
      <g class="f2 s2"><rect x="10" y="10" width="185" height="90" rx="12"/></g>
      <g class="f4 s4"><rect x="205" y="10" width="185" height="90" rx="12"/></g>
      <g class="f3 s3"><rect x="10" y="110" width="185" height="90" rx="12"/></g>
      <g class="f5 s5"><rect x="205" y="110" width="185" height="90" rx="12"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="48">🔥 ciepło</text><text x="297" y="48">💡 światło</text><text x="102" y="148">⚙️ ruch</text><text x="297" y="148">🔊 dźwięk</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="78">czajnik, żelazko</text><text x="297" y="78">żarówka, LED, ekran</text><text x="102" y="178">silnik: wentylator</text><text x="297" y="178">głośnik, dzwonek</text></g>
    </svg>`,
    text: `<p>Urządzenia, które pobierają energię elektryczną, to <b>odbiorniki</b>. Zamieniają ją na <b>ciepło, światło, ruch</b> albo <b>dźwięk</b> – zwykle na kilka form naraz (żarówka świeci i się grzeje).</p>
      <p><b>Źródła</b> energii elektrycznej: baterie i akumulatory, prądnice w elektrowniach, ogniwa słoneczne.</p>`,
    remember: 'Źródło dostarcza energię, odbiornik ją zamienia na inną formę.',
  },
  {
    title: 'Bezpiecznik i bezpieczeństwo',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przewód z bezpiecznikiem. Gdy prąd jest zbyt duży, bezpiecznik przerywa obwód. Obok zasady: nie dotykaj mokrymi rękami, nie używaj uszkodzonych kabli, nie przeciążaj listew">
      <path d="M20,50 L100,50 M160,50 L230,50" class="ln sw"/>
      <rect x="100" y="38" width="60" height="24" rx="4" class="f4 s4 sw"/>
      <path d="M110,50 L126,50 M134,50 L150,50" class="ln"/>
      <text x="130" y="30" class="tx-s" text-anchor="middle">bezpiecznik</text>
      <text x="130" y="88" class="tx-s" text-anchor="middle">za duży prąd → przerwa</text>
      <rect x="240" y="20" width="150" height="70" rx="10" class="f2 s2"/>
      <g class="tx-s" text-anchor="middle"><text x="315" y="48">przeciążenie</text><text x="315" y="72">albo zwarcie</text></g>
      <g class="tx"><text x="20" y="130">💧 nie dotykaj mokrymi rękami</text><text x="20" y="160">🔌 nie używaj uszkodzonych kabli</text><text x="20" y="190">⚠️ nie przeciążaj listew</text></g>
    </svg>`,
    text: `<p><b>Bezpiecznik</b> przerywa obwód, gdy płynie zbyt duży prąd – np. gdy do jednego obwodu podłączysz za dużo urządzeń (przeciążenie) albo przy zwarciu. Chroni przewody przed przegrzaniem i pożarem. <b>Izolacja</b> chroni przed dotknięciem części pod napięciem.</p>
      <p>Gdy ktoś jest porażony – najpierw <b>odłącz prąd</b>, potem pomagaj i dzwoń pod <b>112</b>.</p>`,
    remember: 'Bezpiecznik = strażnik natężenia. Za duży prąd → przerywa obwód.',
    hook: 'Najpierw prąd, potem człowiek – inaczej będą dwie osoby porażone.',
  },
  {
    title: 'Pułapki w zadaniach',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie: źle – 2000 W razy 3 minuty daje 6000 kWh. Dobrze – 2 kW razy 0,05 godziny daje 0,1 kWh">
      <rect x="10" y="20" width="185" height="160" rx="12" class="f2 s2"/>
      <rect x="205" y="20" width="185" height="160" rx="12" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="50">❌ źle</text><text x="297" y="50">✅ dobrze</text></g>
      <g class="tx" text-anchor="middle"><text x="102" y="92">2000 W · 3 min</text><text x="102" y="122">= 6000 kWh?</text>
        <text x="297" y="92">2 kW · 0,05 h</text><text x="297" y="122">= 0,1 kWh</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="158">pomieszane jednostki</text><text x="297" y="158">3 min = 3/60 h</text></g>
    </svg>`,
    text: `<p>Najczęstszy błąd to <b>mieszanie jednostek</b>. Zanim zaczniesz liczyć, zdecyduj: liczysz w kWh (kW i godziny) czy w dżulach (W i sekundy)?</p>
      <ul><li>3 min = 0,05 h = 180 s</li><li>500 W = 0,5 kW, 150 mA = 0,15 A</li></ul>`,
    remember: 'Najpierw zamień jednostki, potem licz.',
    check: { q: 'Suszarka 1,2 kW działa 30 minut. Ile energii zużyje?', options: ['36 kWh', '0,6 kWh', '0,04 kWh'], answer: 1, explain: '30 min = 0,5 h. W = 1,2 kW · 0,5 h = 0,6 kWh.' },
  },
];

window.LESSONS['fizyka/magnetyzm'] = [
  {
    title: 'Bieguny N i S',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Magnesy sztabkowe: biegun N obok N odpychają się, biegun N obok S przyciągają się">
      <defs><marker id="a-k8f-mg-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="20" y="30" width="60" height="36" class="f1 s1"/><rect x="80" y="30" width="60" height="36" class="f2 s2"/>
        <rect x="180" y="30" width="60" height="36" class="f2 s2"/><rect x="240" y="30" width="60" height="36" class="f1 s1"/>
        <rect x="20" y="130" width="60" height="36" class="f1 s1"/><rect x="80" y="130" width="60" height="36" class="f2 s2"/>
        <rect x="160" y="130" width="60" height="36" class="f1 s1"/><rect x="220" y="130" width="60" height="36" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="50" y="54">S</text><text x="110" y="54">N</text><text x="210" y="54">N</text><text x="270" y="54">S</text>
        <text x="50" y="154">S</text><text x="110" y="154">N</text><text x="190" y="154">S</text><text x="250" y="154">N</text></g>
      <g class="ln s2 sw"><line x1="148" y1="90" x2="118" y2="90" marker-end="url(#a-k8f-mg-1)"/><line x1="172" y1="90" x2="202" y2="90" marker-end="url(#a-k8f-mg-1)"/>
        <line x1="120" y1="186" x2="142" y2="186" marker-end="url(#a-k8f-mg-1)"/><line x1="180" y1="186" x2="158" y2="186" marker-end="url(#a-k8f-mg-1)"/></g>
      <g class="tx"><text x="310" y="54">odpychanie</text><text x="290" y="154">przyciąganie</text></g>
    </svg>`,
    text: `<p>Każdy magnes ma biegun <b>północny N</b> i <b>południowy S</b>. Najsilniej działa przy biegunach.</p>
      <p>Bieguny <b>jednoimienne</b> (N–N, S–S) się <b>odpychają</b>, <b>różnoimienne</b> (N–S) się <b>przyciągają</b> – zupełnie jak ładunki elektryczne.</p>`,
    remember: 'N–N i S–S: odpychanie. N–S: przyciąganie.',
    check: { q: 'Zbliżasz biegun S jednego magnesu do bieguna S drugiego. Co się stanie?', options: ['przyciągną się', 'odepchną się', 'nic'], answer: 1, explain: 'Bieguny jednoimienne się odpychają.' },
  },
  {
    title: 'Biegunów nie da się rozdzielić',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Magnes przecięty na pół daje dwa mniejsze magnesy, każdy z biegunem N i S">
      <defs><marker id="a-k8f-mg-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="sw"><rect x="100" y="20" width="100" height="40" class="f1 s1"/><rect x="200" y="20" width="100" height="40" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="150" y="46">S</text><text x="250" y="46">N</text></g>
      <line x1="200" y1="10" x2="200" y2="70" class="ln dash sw"/>
      <text x="215" y="84" class="tx-s">✂️ tniemy</text>
      <path d="M200,92 L200,108" class="ln" marker-end="url(#a-k8f-mg-2)"/>
      <g class="sw"><rect x="40" y="120" width="60" height="40" class="f1 s1"/><rect x="100" y="120" width="60" height="40" class="f2 s2"/>
        <rect x="240" y="120" width="60" height="40" class="f1 s1"/><rect x="300" y="120" width="60" height="40" class="f2 s2"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="146">S</text><text x="130" y="146">N</text><text x="270" y="146">S</text><text x="330" y="146">N</text></g>
    </svg>`,
    text: `<p>Przetnij magnes na pół, a dostaniesz <b>dwa magnesy</b> – każdy z biegunem N i S. Nie da się zrobić magnesu z samym jednym biegunem.</p>
      <p>Magnes przyciąga <b>żelazo i stal</b> (także nikiel i kobalt), ale nie miedź, aluminium ani plastik. Żelazo przy magnesie samo się <b>namagnesowuje</b> – dlatego spinacz przyczepiony do magnesu przyciąga następny.</p>`,
    remember: 'Każdy kawałek magnesu ma N i S. Magnes przyciąga żelazo, nie przyciąga miedzi i aluminium.',
    hook: 'Magnes jest jak kij – zawsze ma dwa końce, nawet po przecięciu.',
  },
  {
    title: 'Ziemia to wielki magnes',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Ziemia: przy geograficznym biegunie północnym leży biegun magnetyczny, który w fizyce jest południowy S. Igła kompasu biegunem N wskazuje północ">
      <circle cx="140" cy="120" r="90" class="f1 s1 sw"/>
      <line x1="140" y1="20" x2="140" y2="220" class="ln-thin dash"/>
      <text x="140" y="14" class="tx-s" text-anchor="middle">północ geograficzna</text>
      <circle cx="160" cy="46" r="12" class="f2 s2 sw"/><text x="160" y="51" class="tx-b" text-anchor="middle">S</text>
      <circle cx="120" cy="194" r="12" class="f3 s3 sw"/><text x="120" y="199" class="tx-b" text-anchor="middle">N</text>
      <circle cx="320" cy="120" r="56" class="bg ln sw"/>
      <path d="M320,76 L329,120 L311,120 z" class="f2 s2"/><path d="M320,164 L329,120 L311,120 z" class="f4 s4"/>
      <text x="320" y="54" class="tx-s" text-anchor="middle">N igły → północ</text>
      <text x="320" y="214" class="tx-s" text-anchor="middle">kompas</text>
    </svg>`,
    text: `<p><b>Igła magnetyczna</b> to mały magnes, który może się obracać. Ustawia się w kierunku północ–południe: biegun <b>N igły wskazuje północ</b> – tak działa <b>kompas</b>.</p>
      <p>Ziemia zachowuje się jak magnes. Biegun N igły jest przyciągany do bieguna magnetycznego w pobliżu geograficznej północy – skoro przyciąga N, to w fizyce jest to biegun <b>S</b> (w geografii mówi się o nim „północny biegun magnetyczny”). Bieguny magnetyczne <b>nie pokrywają się</b> dokładnie z geograficznymi.</p>`,
    remember: 'N igły → północ. Przy geograficznej północy leży magnetyczny biegun S (w fizyce).',
    hook: 'N igły „lubi” S – więc na północy musi czekać S.',
    check: { q: 'Który biegun igły kompasu wskazuje północ?', options: ['N', 'S', 'zależy od pogody'], answer: 0, explain: 'Biegun północny (N) igły magnetycznej wskazuje północ.' },
  },
  {
    title: 'Prąd też wytwarza pole magnetyczne',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Doświadczenie Oersteda. Bez prądu igła wskazuje północ wzdłuż przewodu. Gdy płynie prąd, igła się wychyla. Po zmianie kierunku prądu wychyla się w drugą stronę">
      <defs><marker id="a-k8f-mg-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="tx-s" text-anchor="middle"><text x="65" y="20">brak prądu</text><text x="200" y="20">prąd w górę</text><text x="335" y="20">prąd w dół</text></g>
      <g class="ln-thin"><line x1="65" y1="40" x2="65" y2="190"/></g>
      <line x1="200" y1="40" x2="200" y2="190" class="ln s2 sw"/><line x1="335" y1="40" x2="335" y2="190" class="ln s2 sw"/>
      <path d="M215,150 L215,80" class="ln s2" marker-end="url(#a-k8f-mg-4)"/><path d="M350,80 L350,150" class="ln s2" marker-end="url(#a-k8f-mg-4)"/>
      <path d="M65,81 L72,115 L58,115 z" class="f2 s2"/><path d="M65,149 L72,115 L58,115 z" class="f4 s4"/>
      <path d="M170.6,98 L203.5,108.9 L196.5,121.1 z" class="f2 s2"/><path d="M229.4,132 L203.5,108.9 L196.5,121.1 z" class="f4 s4"/>
      <path d="M364.4,98 L338.5,121.1 L331.5,108.9 z" class="f2 s2"/><path d="M305.6,132 L338.5,121.1 L331.5,108.9 z" class="f4 s4"/>
    </svg>`,
    text: `<p><b>Doświadczenie Oersteda</b>: kładziemy przewód nad igłą magnetyczną. Gdy płynie prąd, igła się <b>wychyla</b>. Zmieniasz kierunek prądu – igła wychyla się w <b>drugą stronę</b>. Wyłączasz prąd – igła wraca.</p>
      <p>Wniosek: wokół przewodnika z prądem powstaje <b>pole magnetyczne</b>. Elektryczność i magnetyzm są ze sobą powiązane.</p>`,
    remember: 'Prąd w przewodzie → pole magnetyczne → igła się wychyla. Zmiana kierunku prądu → wychylenie w drugą stronę.',
    check: { q: 'Co zrobi igła, gdy wyłączysz prąd w przewodzie?', options: ['wychyli się jeszcze bardziej', 'wróci do położenia północ–południe', 'zacznie się kręcić'], answer: 1, explain: 'Bez prądu nie ma pola magnetycznego przewodu – igła znów ustawia się według pola Ziemi.' },
  },
  {
    title: 'Elektromagnes – magnes na guzik',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Elektromagnes: zwojnica nawinięta na żelazny rdzeń, podłączona do baterii z wyłącznikiem. Silniejszy przy większym natężeniu prądu i większej liczbie zwojów">
      <rect x="60" y="70" width="200" height="40" rx="6" class="f4 s4 sw"/>
      <g class="ln s1 sw" fill="none"><path d="M80,64 L80,116 M100,64 L100,116 M120,64 L120,116 M140,64 L140,116 M160,64 L160,116 M180,64 L180,116 M200,64 L200,116 M220,64 L220,116 M240,64 L240,116"/></g>
      <path d="M80,116 L80,170 L140,170 M180,170 L240,170 L240,116" class="ln" fill="none"/>
      <rect x="140" y="160" width="40" height="20" class="bg"/>
      <line x1="150" y1="158" x2="150" y2="182" class="ln sw"/><line x1="166" y1="164" x2="166" y2="176" class="ln sw"/>
      <text x="160" y="58" class="tx-s" text-anchor="middle">zwojnica na rdzeniu z żelaza</text>
      <rect x="300" y="40" width="94" height="120" rx="10" class="f3 s3"/>
      <g class="tx-s" text-anchor="middle"><text x="347" y="70">silniejszy:</text><text x="347" y="98">↑ prąd</text><text x="347" y="124">↑ zwoje</text></g>
    </svg>`,
    text: `<p><b>Elektromagnes</b> to zwojnica (cewka z drutu) na <b>rdzeniu z żelaza</b>. Działa jak magnes – ma bieguny N i S – ale <b>tylko wtedy, gdy płynie prąd</b>. Jest silniejszy przy większym natężeniu prądu i większej liczbie zwojów.</p>
      <p>Zastosowania: dźwig na złomowisku (wyłączasz prąd – złom spada), dzwonek, zamek elektromagnetyczny. Oddziaływanie magnetyczne obraca też zwojnicę w <b>silniku elektrycznym</b>.</p>`,
    remember: 'Elektromagnes: zwojnica + rdzeń z żelaza + prąd. Można go włączać i wyłączać.',
    hook: 'Zwykły magnes działa zawsze. Elektromagnes – tylko „na guzik”.',
  },
];

window.LESSONS['fizyka/drgania-fale'] = [
  {
    title: 'Wahadło i amplituda',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Wahadło: kulka na nitce wychylona w lewo i w prawo od położenia równowagi. Amplituda to największe wychylenie">
      <line x1="120" y1="20" x2="280" y2="20" class="ln sw"/>
      <line x1="200" y1="20" x2="200" y2="170" class="ln-thin dash"/>
      <line x1="200" y1="20" x2="130" y2="155" class="ln-thin"/><line x1="200" y1="20" x2="270" y2="155" class="ln-thin"/>
      <line x1="200" y1="20" x2="200" y2="170" class="ln"/>
      <circle cx="130" cy="155" r="13" class="f1 s1 dash"/><circle cx="270" cy="155" r="13" class="f1 s1 dash"/>
      <circle cx="200" cy="170" r="14" class="f2 s2 sw"/>
      <path d="M200,196 L270,196" class="ln s3 sw"/><path d="M200,190 L200,202 M270,190 L270,202" class="ln s3"/>
      <text x="235" y="190" class="tx-b t3" text-anchor="middle">A</text>
      <text x="300" y="80" class="tx-s">położenie</text><text x="300" y="98" class="tx-s">równowagi</text>
      <path d="M296,92 L206,120" class="ln-thin"/>
    </svg>`,
    text: `<p><b>Wahadło</b> porusza się tam i z powrotem wokół <b>położenia równowagi</b> – tam wisi, gdy się nie rusza. Taki powtarzający się ruch to <b>ruch drgający</b> (okresowy).</p>
      <p><b>Amplituda</b> A to <b>największe wychylenie</b> z położenia równowagi.</p>`,
    remember: 'Amplituda = największe wychylenie od położenia równowagi.',
    hook: 'Huśtawka: amplituda to to, jak „wysoko” się rozbujasz.',
  },
  {
    title: 'Okres i częstotliwość na wykresie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Wykres położenia od czasu w kształcie fali. Amplituda to wysokość górki od osi czasu, okres T to odległość między dwiema kolejnymi górkami">
      <defs><marker id="a-k8f-dr-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M30,100 L380,100" class="ln" marker-end="url(#a-k8f-dr-2)"/>
      <path d="M30,180 L30,20" class="ln" marker-end="url(#a-k8f-dr-2)"/>
      <path d="M30,100 C55,40 85,40 110,100 C135,160 165,160 190,100 C215,40 245,40 270,100 C295,160 325,160 350,100" class="ln s1 sw" fill="none"/>
      <path d="M70,55 L70,100" class="ln s3 sw"/><text x="58" y="84" class="tx-b t3" text-anchor="end">A</text>
      <path d="M70,32 L230,32" class="ln s2 sw"/><path d="M70,26 L70,38 M230,26 L230,38" class="ln s2"/>
      <text x="150" y="26" class="tx-b t2" text-anchor="middle">T</text>
      <g class="tx-s"><text x="368" y="122">t</text><text x="38" y="22">x</text></g>
      <text x="200" y="190" class="tx" text-anchor="middle">f = 1 / T</text>
    </svg>`,
    text: `<p><b>Okres</b> T to czas jednego pełnego drgania (w sekundach). <b>Częstotliwość</b> f to liczba drgań w 1 sekundzie (w hercach, Hz). <b>f = 1 / T</b>.</p>
      <p>Na wykresie położenia od czasu: <b>amplituda</b> to wysokość górki od osi, <b>okres</b> – czas od jednej górki do następnej.</p>`,
    remember: 'T – sekundy na jedno drganie. f – drgania na sekundę. f = 1 / T.',
    hook: 'Okres i częstotliwość to odwrotności: im krótszy okres, tym więcej drgań na sekundę.',
    check: { q: 'Okres drgań to 0,5 s. Jaka jest częstotliwość?', options: ['0,5 Hz', '2 Hz', '5 Hz'], answer: 1, explain: 'f = 1 / T = 1 : 0,5 s = 2 Hz.' },
  },
  {
    title: 'Fala niesie energię, nie wodę',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Fala na wodzie z zaznaczoną długością fali lambda między dwoma grzbietami. Korek podskakuje w miejscu, a fala biegnie dalej">
      <defs><marker id="a-k8f-dr-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M10,110 C35,70 65,70 90,110 C115,150 145,150 170,110 C195,70 225,70 250,110 C275,150 305,150 330,110 C355,70 375,70 390,90" class="ln s1 sw" fill="none"/>
      <path d="M50,58 L210,58" class="ln s2 sw"/><path d="M50,52 L50,64 M210,52 L210,64" class="ln s2"/>
      <text x="130" y="48" class="tx-b t2" text-anchor="middle">λ</text>
      <rect x="282" y="132" width="22" height="14" rx="4" class="f4 s4"/>
      <path d="M293,128 L293,104" class="ln" marker-end="url(#a-k8f-dr-3)"/><path d="M293,150 L293,172" class="ln" marker-end="url(#a-k8f-dr-3)"/>
      <path d="M320,30 L385,30" class="ln s1 sw" marker-end="url(#a-k8f-dr-3)"/>
      <text x="318" y="20" class="tx-s">fala biegnie</text>
      <text x="190" y="182" class="tx-s">korek: tylko góra–dół</text>
    </svg>`,
    text: `<p><b>Fala mechaniczna</b> to drgania, które rozchodzą się w ośrodku (woda, powietrze, sznur). Fala <b>przenosi energię, ale nie materię</b>: korek na wodzie podskakuje w miejscu.</p>
      <p><b>Długość fali</b> λ to odległość między dwoma sąsiednimi grzbietami. Fala przebywa ją w czasie jednego okresu.</p>`,
    remember: 'Fala = transport energii bez transportu materii.',
    hook: 'Meksykańska fala na stadionie: ludzie wstają i siadają w miejscu, a fala obiega cały stadion.',
  },
  {
    title: 'Prędkość fali: v = λ · f',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trójkąt wzorów: v na górze, lambda i f na dole. v równa się lambda razy f, lambda równa się v przez f. Przykład: 340 metrów na sekundę przez 170 herców daje 2 metry">
      <path d="M110,15 L200,175 L20,175 z" class="f3 s3 sw"/>
      <line x1="64" y1="105" x2="156" y2="105" class="ln sw"/>
      <line x1="110" y1="105" x2="110" y2="175" class="ln sw"/>
      <g class="tx-b" text-anchor="middle"><text x="110" y="85">v</text><text x="78" y="150">λ</text><text x="142" y="150">f</text></g>
      <g class="tx"><text x="220" y="50">v = λ · f</text><text x="220" y="82">λ = v / f</text></g>
      <g class="tx-s"><text x="220" y="125">340 m/s : 170 Hz</text><text x="220" y="148">= 2 m</text></g>
    </svg>`,
    text: `<p>Fala w czasie jednego okresu T przebiega jedną długość fali λ, więc <b>v = λ / T = λ · f</b>.</p>
      <p>Dźwięk w powietrzu biegnie z prędkością ok. <b>340 m/s</b>. Dźwięk o częstotliwości 170 Hz ma więc długość fali 340 : 170 = 2 m.</p>`,
    remember: 'v = λ · f &nbsp; → &nbsp; λ = v / f &nbsp; → &nbsp; f = v / λ',
    check: { q: 'Fala ma długość 0,5 m i częstotliwość 8 Hz. Jaka jest jej prędkość?', options: ['16 m/s', '4 m/s', '0,0625 m/s'], answer: 1, explain: 'v = λ · f = 0,5 m · 8 Hz = 4 m/s.' },
  },
  {
    title: 'Dźwięk: wysoki czy głośny?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Porównanie fal dźwiękowych. Większa częstotliwość – gęściej ułożone fale – dźwięk wyższy. Większa amplituda – wyższe fale – dźwięk głośniejszy">
      <line x1="20" y1="60" x2="190" y2="60" class="ln-thin"/><line x1="210" y1="60" x2="380" y2="60" class="ln-thin"/>
      <line x1="20" y1="165" x2="190" y2="165" class="ln-thin"/><line x1="210" y1="165" x2="380" y2="165" class="ln-thin"/>
      <path d="M20,60 C40,35 60,35 80,60 C100,85 120,85 140,60 C160,35 180,35 190,48" class="ln s1 sw" fill="none"/>
      <path d="M210,60 C220,35 230,35 240,60 C250,85 260,85 270,60 C280,35 290,35 300,60 C310,85 320,85 330,60 C340,35 350,35 360,60 C370,85 375,80 380,70" class="ln s2 sw" fill="none"/>
      <path d="M20,165 C40,150 60,150 80,165 C100,180 120,180 140,165 C160,150 180,150 190,158" class="ln s1 sw" fill="none"/>
      <path d="M210,165 C230,125 250,125 270,165 C290,205 310,205 330,165 C350,125 370,125 380,145" class="ln s2 sw" fill="none"/>
      <g class="tx-s" text-anchor="middle"><text x="105" y="20">niski dźwięk</text><text x="295" y="20">wysoki: większe f</text>
        <text x="105" y="120">cichy dźwięk</text><text x="295" y="120">głośny: większe A</text></g>
    </svg>`,
    text: `<p>Źródło dźwięku <b>drga</b> (struna, membrana głośnika, struny głosowe) i wprawia w drgania powietrze. Dźwięk potrzebuje ośrodka – <b>w próżni się nie rozchodzi</b>.</p>
      <ul><li><b>Wysokość</b> dźwięku zależy od <b>częstotliwości</b>: większa f – wyższy dźwięk.</li>
      <li><b>Głośność</b> zależy od <b>amplitudy</b> (energii fali): większa A – głośniej.</li></ul>`,
    remember: 'Częstotliwość → wysokość. Amplituda → głośność.',
    hook: 'F jak „falset” – wysoki głos to duża częstotliwość. A jak „AAA!” – głośny krzyk to duża amplituda.',
    check: { q: 'Mocniej uderzasz w ten sam bęben. Co się zmienia?', options: ['dźwięk jest głośniejszy', 'dźwięk jest wyższy', 'dźwięk biegnie szybciej'], answer: 0, explain: 'Mocniejsze uderzenie to większa amplituda drgań – dźwięk jest głośniejszy.' },
  },
  {
    title: 'Czego nie słyszymy',
    svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Pasek częstotliwości: infradźwięki poniżej około 16 herców, dźwięki słyszalne od około 16 do 20 000 herców, ultradźwięki powyżej 20 000 herców">
      <rect x="10" y="40" width="100" height="60" class="f5 s5"/><rect x="110" y="40" width="190" height="60" class="f3 s3"/><rect x="300" y="40" width="110" height="60" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="60" y="76">infra</text><text x="205" y="76">słyszalne</text><text x="355" y="76">ultra</text></g>
      <g class="tx-s" text-anchor="middle"><text x="110" y="122">ok. 16 Hz</text><text x="300" y="122">ok. 20 000 Hz</text></g>
      <g class="tx-s" text-anchor="middle"><text x="60" y="150">trzęsienia ziemi</text><text x="60" y="170">słonie, wieloryby</text>
        <text x="205" y="150">mowa, muzyka</text>
        <text x="355" y="150">nietoperze</text><text x="355" y="170">USG</text></g>
      <text x="210" y="24" class="tx-s" text-anchor="middle">częstotliwość rośnie →</text>
    </svg>`,
    text: `<p>Człowiek słyszy dźwięki od ok. <b>16 Hz</b> do ok. <b>20 000 Hz</b> (20 kHz). Poniżej są <b>infradźwięki</b> (np. przy trzęsieniach ziemi; porozumiewają się nimi słonie i wieloryby), powyżej – <b>ultradźwięki</b> (echolokacja nietoperzy i delfinów, badanie USG).</p>
      <p>Granice są przybliżone – część źródeł jako dolną granicę podaje 20 Hz.</p>`,
    remember: 'Infra – poniżej słyszalnych (niskie). Ultra – powyżej (wysokie).',
    hook: 'Ultra = „ponad” (jak ultra-szybki), infra = „pod” (jak infrastruktura pod ziemią).',
  },
];

window.LESSONS['fizyka/swiatlo'] = [
  {
    title: 'Światło biegnie po prostej – stąd cień',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Mała lampa oświetla kulę. Promienie biegną po liniach prostych. Za kulą na ekranie powstaje cień">
      <circle cx="40" cy="100" r="12" class="f4 s4 sw"/>
      <path d="M180,70 L354,62 L354,138 L180,130 z" class="f5"/>
      <circle cx="180" cy="100" r="30" class="f1 s1 sw"/>
      <line x1="360" y1="20" x2="360" y2="180" class="ln sw"/>
      <rect x="354" y="62" width="6" height="76" class="f5 s5"/>
      <g class="ln-thin"><line x1="40" y1="100" x2="356" y2="30"/><line x1="40" y1="100" x2="356" y2="170"/></g>
      <g class="ln s4"><line x1="40" y1="100" x2="354" y2="62"/><line x1="40" y1="100" x2="354" y2="138"/></g>
      <g class="tx-s" text-anchor="middle"><text x="40" y="132">źródło</text><text x="180" y="150">przedmiot</text><text x="300" y="196">ekran z cieniem</text></g>
    </svg>`,
    text: `<p>W ośrodku jednorodnym światło biegnie <b>po liniach prostych</b>. Dlatego za nieprzezroczystym przedmiotem powstaje <b>cień</b> – obszar, do którego światło nie dociera.</p>
      <p>Na tej samej zasadzie Księżyc może zasłonić Słońce – to <b>zaćmienie Słońca</b>.</p>`,
    remember: 'Światło + prostoliniowość + przeszkoda = cień.',
    hook: 'Światło nie skręca za róg – dlatego chowasz się w cieniu drzewa.',
  },
  {
    title: 'Cień i półcień',
    svg: `<svg viewBox="0 0 440 210" role="img" aria-label="Dwie lampy oświetlają kulę. Na ekranie powstaje środkowy cień, do którego nie dociera światło z żadnej lampy, i dwa półcienie oświetlone tylko przez jedną lampę">
      <circle cx="40" cy="60" r="11" class="f4 s4 sw"/><circle cx="40" cy="150" r="11" class="f4 s4 sw"/>
      <circle cx="180" cy="105" r="26" class="f1 s1 sw"/>
      <line x1="360" y1="10" x2="360" y2="200" class="ln sw"/>
      <rect x="352" y="56" width="8" height="38" class="f4"/>
      <rect x="352" y="94" width="8" height="22" class="f5"/>
      <rect x="352" y="116" width="8" height="38" class="f4"/>
      <g class="ln-thin"><line x1="40" y1="60" x2="352" y2="154"/><line x1="40" y1="150" x2="352" y2="56"/><line x1="40" y1="60" x2="352" y2="116"/><line x1="40" y1="150" x2="352" y2="94"/></g>
      <g class="tx-s"><text x="368" y="79">półcień</text><text x="368" y="109">cień</text><text x="368" y="139">półcień</text></g>
    </svg>`,
    text: `<p>Gdy źródło światła jest <b>duże</b> albo są <b>dwa źródła</b>, obok cienia powstaje <b>półcień</b> – obszar oświetlony tylko częściowo (np. tylko przez jedną lampę).</p>`,
    remember: 'Cień – nie dociera żadne światło. Półcień – dociera część światła.',
    check: { q: 'Kiedy obok cienia powstaje półcień?', options: ['gdy źródło jest duże albo są dwa źródła', 'gdy źródło jest bardzo małe', 'tylko w wodzie'], answer: 0, explain: 'Półcień powstaje tam, gdzie dociera światło tylko z części źródła lub z jednego z dwóch źródeł.' },
  },
  {
    title: 'Prawo odbicia',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Lustro, normalna prostopadła do lustra, promień padający i odbity. Kąt padania alfa równa się kątowi odbicia beta">
      <defs><marker id="a-k8f-sw-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="60" y="170" width="280" height="10" class="f1 s1"/>
      <line x1="200" y1="30" x2="200" y2="170" class="ln dash"/>
      <path d="M100,70 L198,168" class="ln s2 sw" marker-end="url(#a-k8f-sw-3)"/>
      <path d="M200,170 L300,70" class="ln s2 sw" marker-end="url(#a-k8f-sw-3)"/>
      <path d="M200,125 A45,45 0 0,0 168.2,138.2" class="ln" fill="none"/>
      <path d="M200,125 A45,45 0 0,1 231.8,138.2" class="ln" fill="none"/>
      <g class="tx-b" text-anchor="middle"><text x="180" y="118">α</text><text x="220" y="118">β</text></g>
      <g class="tx-s" text-anchor="middle"><text x="200" y="22">normalna</text><text x="80" y="60">padający</text><text x="320" y="60">odbity</text><text x="200" y="196">lustro</text></g>
    </svg>`,
    text: `<p>Kąty mierzymy od <b>normalnej</b> – prostej prostopadłej do lustra w punkcie padania. <b>Kąt odbicia β jest równy kątowi padania α</b>. Promień padający, odbity i normalna leżą w jednej płaszczyźnie.</p>`,
    remember: 'α = β (kąty od normalnej, nie od lustra!).',
    hook: 'Jak piłka odbita od ściany bez podkręcenia – wraca pod tym samym kątem.',
    check: { q: 'Promień tworzy z powierzchnią lustra kąt 20°. Jaki jest kąt odbicia?', options: ['20°', '70°', '40°'], answer: 1, explain: 'Kąt padania liczymy od normalnej: 90° − 20° = 70°. Kąt odbicia też wynosi 70°.' },
  },
  {
    title: 'Odbicie lustrzane i rozproszenie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Po lewej gładkie lustro: równoległe promienie odbijają się równolegle. Po prawej chropowata powierzchnia: promienie odbijają się w różnych kierunkach">
      <defs><marker id="a-k8f-sw-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="140" width="170" height="8" class="f1 s1"/>
      <path d="M210,144 L230,136 L245,148 L262,134 L280,146 L298,136 L315,148 L332,134 L350,146 L370,138 L380,144" class="ln sw" fill="none"/>
      <g class="ln s2"><path d="M30,40 L80,138"/><path d="M60,40 L110,138"/><path d="M90,40 L140,138"/></g>
      <g class="ln s2"><path d="M80,138 L130,40" marker-end="url(#a-k8f-sw-4)"/><path d="M110,138 L160,40" marker-end="url(#a-k8f-sw-4)"/><path d="M140,138 L190,40" marker-end="url(#a-k8f-sw-4)"/></g>
      <g class="ln s2"><path d="M220,40 L262,134"/><path d="M250,40 L298,136"/><path d="M280,40 L332,134"/></g>
      <g class="ln s2"><path d="M262,134 L230,60" marker-end="url(#a-k8f-sw-4)"/><path d="M298,136 L340,50" marker-end="url(#a-k8f-sw-4)"/><path d="M332,134 L385,100" marker-end="url(#a-k8f-sw-4)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="105" y="172">gładkie: odbicie</text><text x="295" y="172">chropowate: rozproszenie</text></g>
    </svg>`,
    text: `<p>Od gładkiego lustra równoległe promienie odbijają się <b>równolegle</b> – dlatego widzisz w nim obraz. Od powierzchni <b>chropowatej</b> (papier, ściana) odbijają się <b>w różnych kierunkach</b> – to <b>rozproszenie</b>.</p>
      <p>Dzięki rozproszeniu widzisz kartkę czy ławkę z każdego miejsca w klasie.</p>`,
    remember: 'Gładka powierzchnia – odbicie lustrzane. Chropowata – rozproszenie.',
  },
  {
    title: 'Obraz w płaskim lustrze',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Świeca przed lustrem i jej obraz za lustrem w tej samej odległości. Obraz jest pozorny, prosty i tej samej wielkości">
      <rect x="196" y="20" width="8" height="170" class="f1 s1"/>
      <rect x="92" y="90" width="16" height="70" class="f4 s4 sw"/><path d="M100,88 C92,74 100,62 100,58 C104,66 110,76 100,88 z" class="f2 s2"/>
      <rect x="292" y="90" width="16" height="70" class="f4 s4 dash"/><path d="M300,88 C292,74 300,62 300,58 C304,66 310,76 300,88 z" class="f2 s2 dash"/>
      <path d="M100,176 L196,176" class="ln s3 sw"/><path d="M204,176 L300,176" class="ln s3 sw dash"/>
      <g class="tx-b t3" text-anchor="middle"><text x="148" y="196">d</text><text x="252" y="196">d</text></g>
      <g class="tx-s" text-anchor="middle"><text x="100" y="40">przedmiot</text><text x="300" y="40">obraz pozorny</text></g>
    </svg>`,
    text: `<p>Obraz w płaskim lustrze jest:</p>
      <ul><li><b>pozorny</b> – tworzą go przedłużenia promieni „za lustrem”, nie złapiesz go na ekranie,</li>
      <li><b>prosty</b> i <b>tej samej wielkości</b>,</li>
      <li>w <b>tej samej odległości</b> za lustrem, co przedmiot przed nim.</li></ul>`,
    remember: 'Lustro płaskie: pozorny, prosty, tej samej wielkości, symetrycznie za lustrem.',
    check: { q: 'Stoisz 1,5 m przed lustrem. Jak daleko od ciebie jest twój obraz?', options: ['1,5 m', '3 m', '0,75 m'], answer: 1, explain: 'Obraz jest 1,5 m za lustrem – razem 1,5 m + 1,5 m = 3 m.' },
  },
  {
    title: 'Zwierciadła wklęsłe i wypukłe',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Zwierciadło wklęsłe skupia promienie równoległe w ognisku F. Zwierciadło wypukłe rozprasza promienie">
      <path d="M160,30 Q200,100 160,170" class="ln s1 sw" fill="none"/>
      <line x1="10" y1="100" x2="190" y2="100" class="ln-thin dash"/>
      <g class="ln s2"><path d="M10,60 L173,60 L100,100"/><path d="M10,140 L173,140 L100,100"/><path d="M10,100 L180,100"/></g>
      <circle cx="100" cy="100" r="4" class="f2 s2"/><text x="100" y="124" class="tx-b" text-anchor="middle">F</text>
      <path d="M400,30 Q360,100 400,170" class="ln s1 sw" fill="none"/>
      <line x1="230" y1="100" x2="410" y2="100" class="ln-thin dash"/>
      <g class="ln s2"><path d="M230,60 L387,60 L300,12"/><path d="M230,140 L387,140 L300,188"/></g>
      <g class="tx-s" text-anchor="middle"><text x="95" y="194">wklęsłe – skupia</text><text x="320" y="194">wypukłe – rozprasza</text></g>
    </svg>`,
    text: `<p><b>Wklęsłe</b> zwierciadło skupia promienie równoległe do osi w <b>ognisku F</b>. Działa też odwrotnie: żarówka w ognisku daje wiązkę równoległą – tak działają reflektory i latarki.</p>
      <p><b>Wypukłe</b> zwierciadło rozprasza promienie i pokazuje szeroki obszar – dlatego wisi na trudnych skrzyżowaniach i w sklepach.</p>`,
    remember: 'Wklęsłe – skupia (ognisko F). Wypukłe – rozprasza (szerokie pole widzenia).',
    hook: 'Wklęsłe jak łyżka od środka – zbiera. Wypukłe jak bombka – rozrzuca.',
    check: { q: 'Które zwierciadło jest w reflektorze samochodu?', options: ['wklęsłe', 'wypukłe', 'płaskie'], answer: 0, explain: 'Żarówka w ognisku zwierciadła wklęsłego daje równoległą wiązkę światła.' },
  },
];

window.LESSONS['fizyka/soczewki'] = [
  {
    title: 'Załamanie: zmiana prędkości, zmiana kierunku',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Promień przechodzi z powietrza do wody i załamuje się w stronę normalnej. Kąt załamania beta jest mniejszy od kąta padania alfa">
      <defs><marker id="a-k8f-so-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="110" width="360" height="100" class="f1"/>
      <line x1="20" y1="110" x2="380" y2="110" class="ln sw"/>
      <line x1="200" y1="20" x2="200" y2="205" class="ln dash"/>
      <path d="M110,20 L198,108" class="ln s2 sw" marker-end="url(#a-k8f-so-1)"/>
      <path d="M200,110 L245,200" class="ln s2 sw" marker-end="url(#a-k8f-so-1)"/>
      <path d="M200,70 A40,40 0 0,0 171.7,81.7" class="ln" fill="none"/>
      <path d="M200,150 A40,40 0 0,0 217.9,145.8" class="ln" fill="none"/>
      <g class="tx-b" text-anchor="middle"><text x="182" y="64">α</text><text x="214" y="170">β</text></g>
      <g class="tx-s"><text x="30" y="100">powietrze</text><text x="30" y="200">woda – światło wolniej</text><text x="270" y="190">β &lt; α</text></g>
    </svg>`,
    text: `<p>Na granicy dwóch ośrodków światło <b>zmienia kierunek</b> – to <b>załamanie</b>. Przyczyna: w różnych ośrodkach światło ma różną prędkość (w próżni i powietrzu ok. 300 000 km/s, w wodzie i szkle mniej).</p>
      <ul><li>Do ośrodka, w którym światło <b>zwalnia</b> (powietrze → woda): załamanie <b>do normalnej</b>.</li>
      <li>Do ośrodka, w którym <b>przyspiesza</b> (woda → powietrze): <b>od normalnej</b>.</li>
      <li>Promień prostopadły do granicy – bez zmiany kierunku.</li></ul>`,
    remember: 'Wolniej → do normalnej. Szybciej → od normalnej.',
    hook: 'Jak wózek, który z asfaltu wjeżdża w piasek: koło, które pierwsze trafi na piasek, zwalnia i wózek skręca.',
    check: { q: 'Promień przechodzi ukośnie z wody do powietrza. Jak się załamie?', options: ['do normalnej', 'od normalnej', 'nie załamie się'], answer: 1, explain: 'W powietrzu światło biegnie szybciej, więc promień załamuje się od normalnej.' },
  },
  {
    title: 'Soczewka skupiająca',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Soczewka skupiająca: promienie równoległe do osi optycznej po przejściu przez soczewkę przecinają się w ognisku F. Ogniskowa f to odległość ogniska od środka soczewki">
      <line x1="10" y1="100" x2="390" y2="100" class="ln-thin dash"/>
      <path d="M200,30 Q228,100 200,170 Q172,100 200,30 z" class="f1 s1 sw"/>
      <g class="ln s2"><path d="M10,60 L200,60 L340,116"/><path d="M10,140 L200,140 L340,84"/><path d="M10,100 L390,100"/></g>
      <circle cx="300" cy="100" r="4" class="f2 s2"/><circle cx="100" cy="100" r="4" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="300" y="128">F</text><text x="100" y="128">F</text></g>
      <path d="M200,182 L300,182" class="ln s3 sw"/><text x="250" y="178" class="tx-b t3" text-anchor="middle">f</text>
    </svg>`,
    text: `<p><b>Soczewka skupiająca</b> (zwykle grubsza w środku) skupia promienie równoległe do osi optycznej w <b>ognisku F</b>. Ma dwa ogniska – po obu stronach, w tej samej odległości.</p>
      <p><b>Ogniskowa</b> f to odległość ogniska od środka soczewki. Promień przez środek soczewki biegnie prosto. Soczewką skupiającą jest np. lupa.</p>`,
    remember: 'Skupiająca: równoległe → przez ognisko F.',
  },
  {
    title: 'Soczewka rozpraszająca',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Soczewka rozpraszająca: promienie równoległe po przejściu się rozbiegają, a ich przedłużenia przecinają się w ognisku pozornym F przed soczewką">
      <line x1="10" y1="100" x2="390" y2="100" class="ln-thin dash"/>
      <path d="M185,30 L215,30 Q200,100 215,170 L185,170 Q200,100 185,30 z" class="f1 s1 sw"/>
      <g class="ln s2"><path d="M10,70 L200,70 L360,22"/><path d="M10,130 L200,130 L360,178"/></g>
      <g class="ln dash"><path d="M200,70 L100,100"/><path d="M200,130 L100,100"/></g>
      <circle cx="100" cy="100" r="4" class="f2 s2"/><text x="100" y="128" class="tx-b" text-anchor="middle">F</text>
      <text x="100" y="152" class="tx-s" text-anchor="middle">ognisko pozorne</text>
    </svg>`,
    text: `<p><b>Soczewka rozpraszająca</b> (zwykle cieńsza w środku) sprawia, że promienie równoległe się <b>rozbiegają</b>. Spotykają się tylko ich <b>przedłużenia</b> – w ognisku <b>pozornym</b> przed soczewką.</p>`,
    remember: 'Rozpraszająca: równoległe → rozbiegają się, przedłużenia przez F.',
    hook: 'Skupiająca – „zbiera do kupy”. Rozpraszająca – „rozpędza na boki”.',
    check: { q: 'Promienie równoległe po przejściu przez soczewkę przecinają się w jednym punkcie za nią. Jaka to soczewka?', options: ['skupiająca', 'rozpraszająca', 'każda tak działa'], answer: 0, explain: 'To soczewka skupiająca – punkt przecięcia to jej ognisko.' },
  },
  {
    title: 'Okulary na wady wzroku',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Oko krótkowzroczne: obraz powstaje przed siatkówką, pomaga soczewka rozpraszająca. Oko dalekowzroczne: obraz powstaje za siatkówką, pomaga soczewka skupiająca">
      <circle cx="210" cy="65" r="45" class="f1 s1 sw"/><circle cx="210" cy="180" r="45" class="f1 s1 sw"/>
      <path d="M248,40 Q262,65 248,90" class="ln s5 sw" fill="none"/><path d="M248,155 Q262,180 248,205" class="ln s5 sw" fill="none"/>
      <g class="ln s2"><path d="M30,45 L165,45 L232,65 L253,71"/><path d="M30,85 L165,85 L232,65 L253,59"/></g>
      <g class="ln s2"><path d="M30,160 L165,160 L255,176"/><path d="M30,200 L165,200 L255,184"/></g>
      <circle cx="232" cy="65" r="4" class="f2 s2"/>
      <g class="tx-b" text-anchor="start"><text x="10" y="22">krótkowzroczność</text><text x="10" y="137">dalekowzroczność</text></g>
      <g class="tx-s"><text x="270" y="55">obraz przed</text><text x="270" y="73">siatkówką</text><text x="270" y="95">okulary: −</text>
        <text x="270" y="170">obraz za</text><text x="270" y="188">siatkówką</text><text x="270" y="210">okulary: +</text></g>
    </svg>`,
    text: `<ul><li><b>Krótkowzroczność</b>: źle widzisz z daleka, obraz powstaje <b>przed</b> siatkówką. Pomagają soczewki <b>rozpraszające</b> („minusy”).</li>
      <li><b>Dalekowzroczność</b>: źle widzisz z bliska, obraz powstaje <b>za</b> siatkówką. Pomagają soczewki <b>skupiające</b> („plusy”).</li></ul>`,
    remember: 'Krótkowzroczność – minusy (rozpraszające). Dalekowzroczność – plusy (skupiające).',
    hook: 'Krótkowzroczny ma oko, które skupia „za mocno” – trzeba mu trochę rozproszyć.',
  },
  {
    title: 'Rozszczepienie światła',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Wiązka światła białego pada na pryzmat i rozszczepia się na barwy. Światło czerwone odchyla się najmniej, fioletowe najbardziej">
      <path d="M150,190 L250,190 L200,60 z" class="f1 s1 sw"/>
      <path d="M20,150 L176,122" class="ln sw"/>
      <path d="M176,122 L224,124" class="ln-thin"/>
      <g class="ln s2"><path d="M224,124 L330,138"/><path d="M224,124 L330,150"/><path d="M224,124 L330,162"/><path d="M224,124 L330,174"/><path d="M224,124 L330,186"/><path d="M224,124 L330,198"/></g>
      <g class="tx-s"><text x="20" y="140">światło białe</text><text x="336" y="142">czerwone</text><text x="336" y="202">fioletowe</text></g>
    </svg>`,
    text: `<p><b>Światło białe</b> to mieszanina barw. W pryzmacie każda barwa załamuje się trochę inaczej i powstaje <b>widmo</b>: czerwona, pomarańczowa, żółta, zielona, niebieska, fioletowa. <b>Czerwone</b> odchyla się <b>najmniej</b>, <b>fioletowe – najbardziej</b>. Tak samo powstaje tęcza.</p>
      <p>Światło <b>lasera</b> jest <b>jednobarwne</b> – w pryzmacie zmienia kierunek, ale się nie rozszczepia.</p>`,
    remember: 'Pryzmat rozszczepia białe światło. Czerwone – najmniej, fioletowe – najbardziej. Laser się nie rozszczepia.',
    hook: 'Kolejność barw: „Czy Pan Żubr Zna Nasze Fiołki?”',
    check: { q: 'Które światło najmniej odchyla się w pryzmacie?', options: ['fioletowe', 'zielone', 'czerwone'], answer: 2, explain: 'Najmniej odchyla się światło czerwone, najbardziej – fioletowe.' },
  },
  {
    title: 'Rodzina fal elektromagnetycznych',
    svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Lista fal elektromagnetycznych od najmniejszej do największej częstotliwości: radiowe, mikrofale, podczerwień, światło widzialne, nadfiolet, rentgenowskie, gamma, z przykładami zastosowań">
      <defs><marker id="a-k8f-so-6" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M22,26 L22,232" class="ln s2 sw" marker-end="url(#a-k8f-so-6)"/>
      <text x="40" y="16" class="tx-s">↓ częstotliwość rośnie</text>
      <g class="f1 s1"><rect x="40" y="26" width="370" height="26" rx="6"/><rect x="40" y="56" width="370" height="26" rx="6"/><rect x="40" y="86" width="370" height="26" rx="6"/></g>
      <rect x="40" y="116" width="370" height="26" rx="6" class="f4 s4"/>
      <g class="f5 s5"><rect x="40" y="146" width="370" height="26" rx="6"/><rect x="40" y="176" width="370" height="26" rx="6"/><rect x="40" y="206" width="370" height="26" rx="6"/></g>
      <g class="tx-s"><text x="50" y="44">fale radiowe – radio, telewizja</text><text x="50" y="74">mikrofale – kuchenka, radar</text><text x="50" y="104">podczerwień – pilot, termowizja</text>
        <text x="50" y="134">światło widzialne – widzenie</text><text x="50" y="164">nadfiolet (UV) – lampy bakteriobójcze</text>
        <text x="50" y="194">rentgenowskie – zdjęcia RTG</text><text x="50" y="224">gamma – radioterapia</text></g>
    </svg>`,
    text: `<p>Światło to tylko część rodziny <b>fal elektromagnetycznych</b>. W próżni wszystkie biegną z prędkością światła, różnią się częstotliwością (i długością fali).</p>
      <p>Od najmniejszej częstotliwości: fale radiowe, mikrofale, podczerwień, światło widzialne, nadfiolet, promieniowanie rentgenowskie, gamma.</p>`,
    remember: 'Radio – mikrofale – podczerwień – światło – UV – rentgen – gamma.',
  },
];
