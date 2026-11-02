/* Fizyka – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, fizyka kl. VII–VIII).
 * Podstawa nie dzieli fizyki na klasy VII i VIII. W klasie 8 są tu działy VI–IX (elektryczność,
 * magnetyzm, ruch drgający i fale, optyka) – to decyzja redakcyjna; kolejność można dopasować do podręcznika.
 * Wymagania oznaczone w podstawie jako fakultatywne (decyduje nauczyciel) zaznaczamy w basis. */
window.SUBJECTS.push({
  id: 'fizyka',
  name: 'Fizyka',
  icon: '⚡',
  color: '#3b6fd8',
  topics: [
    {
      id: 'elektrostatyka',
      name: 'Ładunki i elektryzowanie ciał',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. VI „Elektryczność”, wym. 1–6 i 15a–b (elektryzowanie przez potarcie i dotyk, oddziaływanie ładunków, przewodniki i izolatory, indukcja elektrostatyczna, elektroskop, ładunek elementarny). Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Skąd się bierze ładunek</h3>
        <p>Każdy atom ma <b>jądro</b> z protonami (ładunek dodatni +) i neutronami (bez ładunku) oraz <b>elektrony</b> (ładunek ujemny −). Ciało <b>obojętne</b> ma tyle samo ładunku dodatniego co ujemnego.</p>
        <p>Ciało jest <b>naelektryzowane</b>, gdy ma <b>nadmiar elektronów</b> (ładunek ujemny) albo <b>niedobór elektronów</b> (ładunek dodatni). Przy elektryzowaniu przemieszczają się <b>elektrony</b> – protony zostają w jądrach.</p>
        <h3>Oddziaływanie ładunków</h3>
        <ul>
          <li>ładunki <b>jednoimienne</b> (+ i +, − i −) się <b>odpychają</b>,</li>
          <li>ładunki <b>różnoimienne</b> (+ i −) się <b>przyciągają</b>.</li>
        </ul>
        <h3>Sposoby elektryzowania</h3>
        <table>
          <tr><th>Sposób</th><th>Co się dzieje</th><th>Wynik</th></tr>
          <tr><td><b>przez potarcie</b></td><td>elektrony przechodzą z jednego ciała na drugie</td><td>oba ciała mają ładunki <b>przeciwnych znaków</b>, równe co do wartości</td></tr>
          <tr><td><b>przez dotyk</b></td><td>naelektryzowane ciało dotyka obojętnego i część ładunku przechodzi</td><td>oba ciała mają ładunek <b>tego samego znaku</b></td></tr>
          <tr><td><b>przez indukcję</b> (wpływ)</td><td>naelektryzowane ciało tylko <b>zbliżamy</b> do przewodnika; elektrony swobodne w przewodniku się przesuwają</td><td>bliższa strona przewodnika ma ładunek <b>przeciwny</b>, dalsza – taki sam; po oddaleniu ciała wszystko wraca do normy</td></tr>
        </table>
        <h3>Przewodniki i izolatory</h3>
        <ul>
          <li><b>Przewodniki</b> – mają ładunki, które mogą się swobodnie przemieszczać (w metalach – <b>elektrony swobodne</b>): metale (miedź, aluminium, żelazo), grafit, wodne roztwory soli, ciało człowieka.</li>
          <li><b>Izolatory</b> – ładunki nie mogą się w nich swobodnie przemieszczać: plastik, guma, szkło, porcelana, suche drewno, suche powietrze.</li>
        </ul>
        <h3>Elektroskop</h3>
        <p>Metalowy pręt z <b>listkami</b> (albo lekką wskazówką) w osłonie. Gdy dotkniesz go naelektryzowanym ciałem, ładunek rozchodzi się po pręcie i listkach. Listki mają ładunek tego samego znaku, więc się <b>odpychają i rozchylają</b>. Im większy ładunek, tym większe rozchylenie. Listki rozchylają się też, gdy naelektryzowane ciało tylko <b>zbliżysz</b> do kulki elektroskopu (indukcja).</p>
        <h3>Ładunek elementarny</h3>
        <p>Najmniejszy ładunek, jaki występuje swobodnie w przyrodzie, to <b>ładunek elementarny</b> – ma go elektron (ze znakiem −) i proton (ze znakiem +): <b>e ≈ 1,6 · 10<sup>−19</sup> C</b>. Ładunek każdego ciała jest <b>wielokrotnością</b> ładunku elementarnego.</p>
        <p>Jednostka ładunku to <b>kulomb (C)</b>. Ładunek oznaczamy literą <b>q</b>.</p>
        <div class="tip">💡 Elektryzowanie to zawsze <b>przenoszenie elektronów</b>. Ciało, które je „zabrało”, ma ładunek ujemny, a to, które je „oddało” – dodatni.</div>`,
      flashcards: [
        ['Ładunki jednoimienne', 'Odpychają się (+ i +, − i −)'],
        ['Ładunki różnoimienne', 'Przyciągają się (+ i −)'],
        ['Ciało naelektryzowane ujemnie', 'Ma nadmiar elektronów'],
        ['Ciało naelektryzowane dodatnio', 'Ma niedobór elektronów'],
        ['Elektryzowanie przez potarcie', 'Elektrony przechodzą z ciała na ciało – oba mają ładunki przeciwnych znaków'],
        ['Elektryzowanie przez dotyk', 'Część ładunku przechodzi na drugie ciało – oba mają ładunek tego samego znaku'],
        ['Indukcja elektrostatyczna', 'Po zbliżeniu ładunku elektrony swobodne w przewodniku się przesuwają – bliższa strona ma ładunek przeciwny'],
        ['Przewodnik', 'Ładunki mogą się w nim swobodnie przemieszczać, np. metale, grafit, roztwór soli'],
        ['Izolator', 'Ładunki nie mogą się w nim swobodnie przemieszczać, np. plastik, guma, szkło'],
        ['Elektroskop', 'Wykrywa ładunek: listki z ładunkiem tego samego znaku odpychają się i rozchylają'],
        ['Ładunek elementarny e', 'ok. 1,6 · 10⁻¹⁹ C – ładunek elektronu (−) i protonu (+)'],
        ['Jednostka ładunku', 'kulomb (C)'],
      ],
      questions: [
        { id: 'bgc64e', q: 'Dwie kulki naelektryzowane ujemnie zbliżamy do siebie. Co się stanie?', options: ['Odepchną się.', 'Przyciągną się.', 'Nic – ładunki ujemne nie oddziałują.', 'Zobojętnią się bez dotykania.'], answer: 0, explain: 'Ładunki jednoimienne (tu − i −) się odpychają.' },
        { id: 'ly0u60', q: 'Ciało naelektryzowane dodatnio to ciało, które ma…', options: ['nadmiar protonów, które do niego przeszły', 'niedobór elektronów', 'nadmiar elektronów', 'więcej neutronów niż protonów'], answer: 1, explain: 'Przy elektryzowaniu przemieszczają się elektrony. Ciało, które je oddało, ma ich za mało – ma ładunek dodatni.' },
        { id: 'hkgi7x', q: 'Pocierasz balon o włosy. Balon elektryzuje się ujemnie. Jaki ładunek uzyskają włosy?', options: ['ujemny', 'żaden', 'dodatni', 'raz dodatni, raz ujemny'], answer: 2, explain: 'Przy potarciu elektrony przechodzą z jednego ciała na drugie. Skoro balon zyskał elektrony (−), włosy je straciły (+).' },
        { id: 'nhzvvz', q: 'Co przemieszcza się między ciałami podczas elektryzowania przez potarcie?', options: ['protony', 'neutrony', 'całe jądra atomów', 'elektrony'], answer: 3, explain: 'Protony i neutrony są w jądrach i zostają na miejscu. Przechodzą elektrony.' },
        { id: 'anjist', q: 'Naelektryzowaną ujemnie metalową kulką dotykasz obojętnej metalowej kulki. Jaki ładunek uzyska ta druga kulka?', options: ['ujemny', 'dodatni', 'żaden', 'najpierw dodatni, potem żaden'], answer: 0, explain: 'Przy elektryzowaniu przez dotyk część ładunku przechodzi na drugie ciało – oba mają ładunek tego samego znaku.' },
        { id: 'v5uenu', q: 'Który materiał jest przewodnikiem?', options: ['guma', 'szkło', 'miedź', 'plastik'], answer: 2, explain: 'Metale (np. miedź) mają elektrony swobodne – ładunek może się w nich przemieszczać.' },
        { id: 'zymr0l', q: 'Który materiał jest izolatorem?', options: ['aluminium', 'porcelana', 'grafit', 'wodny roztwór soli kuchennej'], answer: 1, explain: 'Porcelana nie przewodzi prądu – dlatego robi się z niej np. izolatory na słupach energetycznych.' },
        { id: 'tr24ss', q: 'Dlaczego przewody elektryczne mają w środku miedź, a na zewnątrz plastik?', options: ['Miedź jest izolatorem, plastik przewodnikiem.', 'Oba materiały są przewodnikami.', 'Plastik wzmacnia przepływ prądu.', 'Miedź przewodzi prąd, a plastik izoluje i chroni przed porażeniem.'], answer: 3, explain: 'Prąd płynie przez przewodnik (miedź), a izolator (plastik) nie pozwala mu przejść na zewnątrz.' },
        { id: 'ua2h19', q: 'Dotykasz kulki elektroskopu naelektryzowaną laską. Listki się rozchylają. Dlaczego?', options: ['Listki mają ładunek tego samego znaku i się odpychają.', 'Listki mają ładunki przeciwne i się przyciągają.', 'Listki się nagrzewają i rozszerzają.', 'Laska wdmuchuje między listki powietrze.'], answer: 0, explain: 'Ładunek rozchodzi się po pręcie i obu listkach. Ładunki jednoimienne się odpychają.' },
        { id: '9eefco', q: 'Prawda czy fałsz?\nIm większy ładunek ma elektroskop, tym bardziej rozchylają się jego listki.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Większy ładunek – silniejsze odpychanie – większe rozchylenie listków.' },
        { id: 'kh18ay', q: 'Zbliżasz (bez dotykania) laskę naelektryzowaną ujemnie do metalowej puszki. Co dzieje się w puszce?', options: ['Protony przechodzą na bliższą stronę puszki.', 'Puszka na stałe ładuje się ujemnie.', 'Elektrony swobodne przesuwają się na dalszą stronę puszki.', 'Nic się nie dzieje, bo nie ma dotyku.'], answer: 2, explain: 'To indukcja elektrostatyczna: ładunki ujemne laski odpychają elektrony swobodne. Bliższa strona puszki ma ładunek dodatni, więc puszka jest przyciągana.' },
        { id: 'o8unpu', q: 'Ile wynosi ładunek elementarny?', options: ['ok. 1,6 C', 'ok. 1,6 · 10⁻¹⁹ C', 'ok. 1,6 · 10¹⁹ C', 'ok. 9,8 C'], answer: 1, explain: 'e ≈ 1,6 · 10⁻¹⁹ C – to bardzo mały ładunek. Ma go elektron (−) i proton (+).' },
        { id: 'g8wx6s', q: 'W jakich jednostkach mierzymy ładunek elektryczny?', options: ['w amperach (A)', 'w woltach (V)', 'w omach (Ω)', 'w kulombach (C)'], answer: 3, explain: 'Jednostką ładunku jest kulomb (C). Amper to jednostka natężenia, wolt – napięcia, om – oporu.' },
        { id: 'igmdms', q: 'Który ładunek NIE może mieć ciało?', options: ['3,2 · 10⁻¹⁹ C', '4,8 · 10⁻¹⁹ C', '0,8 · 10⁻¹⁹ C', '16 · 10⁻¹⁹ C'], answer: 2, explain: 'Ładunek ciała jest wielokrotnością e ≈ 1,6 · 10⁻¹⁹ C. 0,8 · 10⁻¹⁹ C to połowa ładunku elementarnego – takiego ładunku ciało mieć nie może. Pozostałe to 2e, 3e i 10e.' },
        { id: 'z4btom', q: 'Prawda czy fałsz?\nPo potarciu dwóch ciał o siebie jedno ma ładunek dodatni, a drugie ujemny – tej samej wartości.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Ile elektronów jedno ciało straciło, tyle drugie zyskało – ładunki są równe co do wartości i przeciwnych znaków.' },
        { id: 'e4qgn1', q: 'Ciało obojętne elektrycznie to ciało, które…', options: ['nie ma żadnych elektronów', 'nie ma żadnych protonów', 'ma tyle samo ładunku dodatniego co ujemnego', 'ma tylko neutrony'], answer: 2, explain: 'W ciele obojętnym są i protony, i elektrony – ich ładunki się równoważą.' },
      ],
    },
    {
      id: 'prad',
      name: 'Prąd, napięcie i opór',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. VI „Elektryczność”, wym. 7–9, 12–13 i 15c–e (prąd jako ruch elektronów lub jonów, natężenie, napięcie, opór i jego związek z napięciem i natężeniem, schematy obwodów z jednym źródłem i jednym odbiornikiem, pomiary amperomierzem i woltomierzem). Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna.',
      theory: `
        <h3>Prąd elektryczny</h3>
        <p><b>Prąd elektryczny</b> to uporządkowany ruch ładunków: w metalach – <b>elektronów swobodnych</b>, w roztworach (np. soli) – <b>jonów</b>. Prąd płynie tylko w <b>zamkniętym obwodzie</b>, w którym jest źródło napięcia (bateria, akumulator, zasilacz).</p>
        <p><b>Kierunek umowny</b> prądu: od bieguna <b>+</b> do bieguna <b>−</b> źródła (na zewnątrz źródła). Elektrony płyną w przeciwną stronę: od − do +.</p>
        <h3>Trzy wielkości</h3>
        <table>
          <tr><th>Wielkość</th><th>Co mówi</th><th>Wzór</th><th>Jednostka</th><th>Miernik</th></tr>
          <tr><td><b>natężenie</b> I</td><td>jaki ładunek przepływa w 1 s przez przekrój przewodnika</td><td>I = q / t</td><td>amper (A); 1 A = 1 C / 1 s</td><td>amperomierz – łączymy <b>szeregowo</b></td></tr>
          <tr><td><b>napięcie</b> U</td><td>ile energii potrzeba, żeby przenieść ładunek 1 C w obwodzie</td><td>–</td><td>wolt (V); 1 V = 1 J / 1 C</td><td>woltomierz – łączymy <b>równolegle</b> do odbiornika</td></tr>
          <tr><td><b>opór</b> R</td><td>jak bardzo przewodnik „utrudnia” przepływ prądu</td><td>R = U / I</td><td>om (Ω); 1 Ω = 1 V / 1 A</td><td>wyznaczamy z pomiaru U i I</td></tr>
        </table>
        <p>Przykłady: bateria „paluszek” – 1,5 V, domowe gniazdko – 230 V.</p>
        <h3>Związek U, I i R</h3>
        <p>Z R = U / I wynikają też <b>U = I · R</b> i <b>I = U / R</b>. Dla przewodnika metalowego w stałej temperaturze opór się nie zmienia, więc natężenie jest <b>wprost proporcjonalne</b> do napięcia (2 razy większe napięcie → 2 razy większe natężenie). To <b>prawo Ohma</b>; wykres I(U) jest wtedy półprostą wychodzącą z początku układu.</p>
        <p>Przykład: na oporniku jest napięcie 12 V, płynie prąd 0,5 A. R = 12 V : 0,5 A = <b>24 Ω</b>.</p>
        <h3>Schemat obwodu</h3>
        <ul>
          <li><b>ogniwo</b> (bateria): dłuższa kreska to biegun +, krótsza i grubsza to −,</li>
          <li><b>żarówka</b>: kółko z krzyżykiem, <b>opornik</b>: prostokąt,</li>
          <li><b>wyłącznik</b>: przerwa w linii z „uchyloną” kreską,</li>
          <li><b>amperomierz</b>: kółko z literą A, <b>woltomierz</b>: kółko z literą V,</li>
          <li>przewody rysujemy jako proste linie pod kątem prostym.</li>
        </ul>
        <div class="tip">💡 Amperomierz – w <b>szereg</b> (cały prąd przez niego przepływa). Woltomierz – <b>równolegle</b>, „obok” odbiornika (porównuje dwa punkty obwodu).</div>`,
      flashcards: [
        ['Prąd elektryczny', 'Uporządkowany ruch elektronów swobodnych (w metalach) albo jonów (w roztworach)'],
        ['Kierunek umowny prądu', 'Od + do − (elektrony płyną od − do +)'],
        ['Natężenie prądu', 'I = q / t, jednostka: amper (A)'],
        ['1 amper', '1 A = 1 C / 1 s'],
        ['Napięcie', 'Energia potrzebna do przeniesienia ładunku 1 C w obwodzie; jednostka: wolt (V)'],
        ['Opór elektryczny', 'R = U / I, jednostka: om (Ω)'],
        ['Prawo Ohma', 'Dla przewodnika metalowego w stałej temperaturze natężenie jest wprost proporcjonalne do napięcia'],
        ['Amperomierz', 'Mierzy natężenie; łączymy go szeregowo'],
        ['Woltomierz', 'Mierzy napięcie; łączymy go równolegle do odbiornika'],
        ['Symbol ogniwa na schemacie', 'Dwie kreski: dłuższa cienka to +, krótsza gruba to −'],
        ['Kiedy płynie prąd?', 'Gdy obwód jest zamknięty i ma źródło napięcia'],
      ],
      questions: [
        { id: 'zby9wf', q: 'Czym jest prąd elektryczny w metalowym przewodzie?', options: ['uporządkowanym ruchem protonów', 'uporządkowanym ruchem elektronów swobodnych', 'ruchem całych atomów miedzi', 'przepływem powietrza w przewodzie'], answer: 1, explain: 'W metalach nośnikami ładunku są elektrony swobodne. Protony zostają w jądrach atomów.' },
        { id: 'ggxjvr', q: 'W którą stronę płyną elektrony w obwodzie poza źródłem?', options: ['od + do −', 'raz w jedną, raz w drugą stronę', 'od − do +', 'elektrony stoją, płyną tylko protony'], answer: 2, explain: 'Kierunek umowny prądu to od + do −, ale elektrony (ładunek ujemny) płyną od − do +.' },
        { id: 'ueilmw', q: 'Przez przewodnik w ciągu 4 s przepłynął ładunek 12 C. Jakie było natężenie prądu?', options: ['48 A', '0,33 A', '8 A', '3 A'], answer: 3, explain: 'I = q / t = 12 C : 4 s = 3 A.' },
        { id: 'hlet3n', q: 'Jaki ładunek przepłynie w ciągu 10 s przy natężeniu prądu 0,2 A?', options: ['2 C', '50 C', '0,02 C', '10,2 C'], answer: 0, explain: 'q = I · t = 0,2 A · 10 s = 2 C.' },
        { id: 'ffu2no', q: 'Jak włączamy amperomierz do obwodu?', options: ['równolegle do odbiornika', 'szeregowo z odbiornikiem', 'bezpośrednio do biegunów baterii, bez odbiornika', 'w ogóle go nie łączymy, wystarczy go zbliżyć'], answer: 1, explain: 'Przez amperomierz musi przepływać cały prąd, więc włączamy go szeregowo.' },
        { id: 'ezdlyn', q: 'Jak włączamy woltomierz, żeby zmierzyć napięcie na żarówce?', options: ['szeregowo z żarówką', 'zamiast żarówki', 'równolegle do żarówki', 'między dwa wyłączniki'], answer: 2, explain: 'Woltomierz łączymy równolegle – jego przewody dotykają dwóch końców żarówki.' },
        { id: 'v752il', q: 'Na oporniku zmierzono napięcie 6 V i natężenie 0,3 A. Jaki jest jego opór?', options: ['1,8 Ω', '20 Ω', '0,05 Ω', '6,3 Ω'], answer: 1, explain: 'R = U / I = 6 V : 0,3 A = 20 Ω.' },
        { id: 'yw04ux', q: 'Przez opornik 50 Ω płynie prąd 0,2 A. Jakie jest napięcie na jego końcach?', options: ['10 V', '250 V', '0,004 V', '50,2 V'], answer: 0, explain: 'U = I · R = 0,2 A · 50 Ω = 10 V.' },
        { id: 'eb8jwp', q: 'Na żarówce jest napięcie 12 V, a jej opór wynosi 24 Ω. Jakie jest natężenie prądu?', options: ['2 A', '288 A', '36 A', '0,5 A'], answer: 3, explain: 'I = U / R = 12 V : 24 Ω = 0,5 A.' },
        { id: 'u1flyy', q: 'W jakich jednostkach mierzymy opór elektryczny?', options: ['w woltach', 'w amperach', 'w omach', 'w kulombach'], answer: 2, explain: 'Opór mierzymy w omach (Ω). 1 Ω = 1 V / 1 A.' },
        { id: 'agjjss', q: 'Napięcie na końcach metalowego przewodnika (w stałej temperaturze) zwiększono 3 razy. Co się stało z natężeniem prądu?', options: ['Wzrosło 3 razy.', 'Zmalało 3 razy.', 'Nie zmieniło się.', 'Wzrosło 9 razy.'], answer: 0, explain: 'Opór się nie zmienia, więc natężenie jest wprost proporcjonalne do napięcia (prawo Ohma): 3 razy większe U → 3 razy większe I.' },
        { id: '51ncm2', q: 'Co oznacza napięcie 1 V?', options: ['W ciągu 1 s przepływa ładunek 1 C.', 'Do przeniesienia ładunku 1 C w obwodzie potrzeba 1 J energii.', 'Przewodnik ma opór 1 Ω.', 'Przez obwód płynie 1 elektron na sekundę.'], answer: 1, explain: '1 V = 1 J / 1 C. Opis „1 C w 1 s” to natężenie 1 A.' },
        { id: 'ihw6hm', q: 'Na schemacie obwodu narysowano kółko z literą V. Co to jest?', options: ['wyłącznik', 'amperomierz', 'żarówka', 'woltomierz'], answer: 3, explain: 'Kółko z literą V to woltomierz, kółko z literą A – amperomierz.' },
        { id: 'pmphgu', q: 'Prawda czy fałsz?\nPrąd płynie także wtedy, gdy wyłącznik w obwodzie jest otwarty.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Otwarty wyłącznik przerywa obwód. Prąd płynie tylko w obwodzie zamkniętym.' },
        { id: 'bi3phw', q: 'Czym jest prąd w wodnym roztworze soli kuchennej?', options: ['uporządkowanym ruchem jonów', 'ruchem elektronów swobodnych, jak w metalu', 'ruchem cząsteczek wody', 'w roztworze soli prąd nie płynie'], answer: 0, explain: 'W roztworach ładunek przenoszą jony – dlatego roztwór soli przewodzi prąd.' },
        { id: 'd5nocn', q: 'Na wykresie zależności I od U dla opornika metalowego (w stałej temperaturze) widać…', options: ['krzywą, która rośnie coraz szybciej', 'poziomą linię', 'półprostą wychodzącą z początku układu', 'linię, która maleje'], answer: 2, explain: 'Natężenie jest wprost proporcjonalne do napięcia – wykres to półprosta przez punkt (0, 0).' },
      ],
      tasks: [
        {
          id: 'c7rd9x',
          points: 2,
          q: 'Uczeń zmierzył napięcie na oporniku i natężenie płynącego przez niego prądu. Woltomierz wskazał 4,5 V, a amperomierz 150 mA. Oblicz opór opornika.',
          steps: [
            'Zamień jednostki: 150 mA = 0,15 A (1 mA = 0,001 A).',
            'Opór: R = U / I = 4,5 V : 0,15 A = 30 Ω.',
            'Sprawdzenie: U = I · R = 0,15 A · 30 Ω = 4,5 V – zgadza się.',
          ],
          answer: 'R = 30 Ω',
          scoring: [
            '1 pkt – zamiana 150 mA na 0,15 A i zastosowanie wzoru R = U / I.',
            '1 pkt – poprawny wynik z jednostką: 30 Ω.',
          ],
        },
        {
          id: '5g6iyt',
          points: 2,
          q: 'Przez żarówkę latarki płynie prąd o natężeniu 0,3 A. Jaki ładunek przepłynie przez nią w ciągu 2 minut świecenia?',
          steps: [
            'Zamień czas na sekundy: 2 min = 120 s.',
            'Z wzoru I = q / t: q = I · t = 0,3 A · 120 s = 36 C.',
            'Sprawdzenie: 36 C : 120 s = 0,3 A – zgadza się.',
          ],
          answer: 'q = 36 C',
          scoring: [
            '1 pkt – zamiana czasu na sekundy i zastosowanie q = I · t.',
            '1 pkt – poprawny wynik z jednostką: 36 C.',
          ],
        },
      ],
    },
    {
      id: 'praca-moc-pradu',
      name: 'Praca i moc prądu. Bezpieczeństwo',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. VI „Elektryczność”, wym. 10–11 (praca i moc prądu, zamiana energii elektrycznej na inne formy, źródła i odbiorniki) oraz wym. 14 – w podstawie fakultatywne, o jego realizacji decyduje nauczyciel (izolacja, bezpieczniki, bezpieczne korzystanie z energii elektrycznej). Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna.',
      theory: `
        <h3>Moc prądu</h3>
        <p><b>Moc</b> mówi, ile pracy prąd wykonuje w ciągu 1 sekundy (jak szybko odbiornik zużywa energię).</p>
        <p><b>P = U · I</b> &nbsp; jednostka: <b>wat (W)</b>, 1 W = 1 V · 1 A. Często: 1 kW = 1000 W.</p>
        <p>Przykład: czajnik w gniazdku 230 V pobiera prąd 10 A. P = 230 V · 10 A = <b>2300 W</b> = 2,3 kW.</p>
        <h3>Praca prądu (zużyta energia)</h3>
        <p><b>W = U · I · t = P · t</b> &nbsp; jednostka: <b>dżul (J)</b>, 1 J = 1 W · 1 s.</p>
        <p>W rachunkach za prąd używa się <b>kilowatogodziny (kWh)</b> – to praca urządzenia o mocy 1 kW przez 1 godzinę:</p>
        <p><b>1 kWh = 1000 W · 3600 s = 3 600 000 J</b></p>
        <p>Przykład: czajnik 2 kW grzeje wodę przez 3 minuty (0,05 h). W = 2 kW · 0,05 h = <b>0,1 kWh</b> = 360 000 J.</p>
        <div class="tip">💡 Licząc w kWh, wstaw moc w <b>kW</b>, a czas w <b>godzinach</b>. Licząc w dżulach – moc w W, czas w sekundach.</div>
        <h3>Na co zamienia się energia elektryczna</h3>
        <table>
          <tr><th>Forma energii</th><th>Odbiorniki</th></tr>
          <tr><td>ciepło (energia wewnętrzna)</td><td>czajnik, żelazko, grzejnik, piekarnik</td></tr>
          <tr><td>światło</td><td>żarówka, dioda (LED), ekran</td></tr>
          <tr><td>energia mechaniczna (ruch)</td><td>silnik: wiertarka, odkurzacz, mikser, wentylator</td></tr>
          <tr><td>dźwięk</td><td>głośnik, dzwonek</td></tr>
        </table>
        <p>Energia zawsze zamienia się w kilka form – np. żarówka daje światło, ale też się grzeje.</p>
        <p><b>Źródła energii elektrycznej</b>: baterie i akumulatory (energia chemiczna), prądnice w elektrowniach, ogniwa słoneczne (fotowoltaiczne).</p>
        <h3>Bezpieczeństwo (wymaganie fakultatywne)</h3>
        <ul>
          <li><b>Izolacja</b> przewodów chroni przed dotknięciem części pod napięciem. Nie używaj urządzeń z uszkodzonym kablem.</li>
          <li><b>Bezpiecznik</b> przerywa obwód, gdy płynie zbyt duży prąd (np. przy przeciążeniu – za dużo urządzeń w jednym obwodzie – albo przy zwarciu). Chroni instalację przed przegrzaniem i pożarem.</li>
          <li>Nie dotykaj urządzeń elektrycznych mokrymi rękami, nie używaj ich w wannie. Woda z solami przewodzi prąd.</li>
          <li>Nie przeciążaj listew i przedłużaczy. Nie wkładaj niczego do gniazdka. Wtyczkę wyjmuj, trzymając za wtyczkę, nie za kabel.</li>
          <li>Gdy ktoś jest porażony – najpierw <b>odłącz prąd</b> (wyłącznik, bezpiecznik), dopiero potem pomagaj i wezwij pomoc (112).</li>
        </ul>`,
      flashcards: [
        ['Moc prądu', 'P = U · I, jednostka: wat (W)'],
        ['Praca prądu', 'W = U · I · t = P · t, jednostka: dżul (J)'],
        ['1 kWh', '= 3 600 000 J – praca urządzenia o mocy 1 kW przez 1 godzinę'],
        ['1 kW', '= 1000 W'],
        ['Czajnik, żelazko, grzejnik', 'Zamieniają energię elektryczną głównie na ciepło'],
        ['Silnik elektryczny', 'Zamienia energię elektryczną na energię mechaniczną (ruch)'],
        ['Głośnik', 'Zamienia energię elektryczną na dźwięk'],
        ['Źródła energii elektrycznej', 'Baterie, akumulatory, prądnice w elektrowniach, ogniwa słoneczne'],
        ['Bezpiecznik', 'Przerywa obwód, gdy płynie zbyt duży prąd (przeciążenie, zwarcie)'],
        ['Izolacja przewodów', 'Chroni przed dotknięciem części pod napięciem (porażeniem)'],
        ['Ktoś został porażony', 'Najpierw odłącz prąd, potem pomagaj i dzwoń 112'],
      ],
      questions: [
        { id: 'zyxlvp', q: 'Jaki jest wzór na moc prądu elektrycznego?', options: ['P = U / I', 'P = U · I', 'P = I / U', 'P = U · R'], answer: 1, explain: 'Moc prądu to iloczyn napięcia i natężenia: P = U · I.' },
        { id: '9hs69z', q: 'Suszarka podłączona do napięcia 230 V pobiera prąd 5 A. Jaka jest jej moc?', options: ['46 W', '235 W', '1150 W', '225 W'], answer: 2, explain: 'P = U · I = 230 V · 5 A = 1150 W.' },
        { id: '4w7n1c', q: 'Ile dżuli to 1 kWh?', options: ['1000 J', '3600 J', '60 000 J', '3 600 000 J'], answer: 3, explain: '1 kWh = 1000 W · 3600 s = 3 600 000 J.' },
        { id: '5mhjlt', q: 'Lampa o mocy 100 W świeci przez 10 godzin. Ile energii zużyje?', options: ['1 kWh', '10 kWh', '0,1 kWh', '1000 kWh'], answer: 0, explain: '100 W = 0,1 kW. W = P · t = 0,1 kW · 10 h = 1 kWh.' },
        { id: 'nfqlf1', q: 'Żarówka o mocy 60 W świeci przez 10 s. Ile energii zużyje?', options: ['6 J', '600 J', '70 J', '0,6 kWh'], answer: 1, explain: 'W = P · t = 60 W · 10 s = 600 J.' },
        { id: '7um0g8', q: 'Przez czajnik podłączony do 230 V płynie prąd 8 A. Jaka jest moc czajnika?', options: ['1840 W', '28,75 W', '238 W', '222 W'], answer: 0, explain: 'P = U · I = 230 V · 8 A = 1840 W.' },
        { id: 'huvjy3', q: 'Urządzenie o mocy 1150 W jest podłączone do napięcia 230 V. Jakie jest natężenie prądu?', options: ['0,2 A', '920 A', '5 A', '1380 A'], answer: 2, explain: 'I = P / U = 1150 W : 230 V = 5 A.' },
        { id: 'kn301o', q: 'Na jaką formę energii zamienia energię elektryczną głównie żelazko?', options: ['na dźwięk', 'na energię mechaniczną', 'na światło', 'na ciepło'], answer: 3, explain: 'Żelazko to grzejnik – energia elektryczna zamienia się w nim głównie w ciepło.' },
        { id: '9rbpxk', q: 'W którym urządzeniu energia elektryczna zamienia się głównie w energię mechaniczną (ruch)?', options: ['w wentylatorze', 'w żarówce', 'w piekarniku', 'w czajniku'], answer: 0, explain: 'Wentylator ma silnik elektryczny – zamienia energię elektryczną na ruch.' },
        { id: 'vcwol8', q: 'Co jest źródłem energii elektrycznej, a nie odbiornikiem?', options: ['odkurzacz', 'akumulator', 'głośnik', 'żarówka'], answer: 1, explain: 'Akumulator dostarcza energię do obwodu. Odkurzacz, głośnik i żarówka ją pobierają.' },
        { id: 'zbfvj1', q: 'Do czego służy bezpiecznik w domowej instalacji?', options: ['zwiększa napięcie w gniazdkach', 'zmniejsza rachunki za prąd', 'przerywa obwód, gdy płynie zbyt duży prąd', 'zamienia prąd na ciepło w grzejnikach'], answer: 2, explain: 'Bezpiecznik chroni instalację: przy przeciążeniu lub zwarciu przerywa obwód, zanim przewody się przegrzeją.' },
        { id: 'dbxrpv', q: 'Kolega został porażony prądem i trzyma przewód. Co robisz najpierw?', options: ['Od razu ciągniesz go za rękę.', 'Polewasz go wodą.', 'Czekasz, aż sam puści.', 'Odłączasz prąd (wyłącznik, bezpiecznik).'], answer: 3, explain: 'Najpierw odłącz prąd – inaczej sam możesz zostać porażony. Potem pomagaj i wezwij pomoc (112).' },
        { id: 'xdj41u', q: 'Prawda czy fałsz?\nMożna bezpiecznie suszyć włosy suszarką, siedząc w wannie z wodą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Woda z rozpuszczonymi solami przewodzi prąd – grozi to porażeniem. Urządzeń elektrycznych nie używa się w wannie.' },
        { id: 'w7b3ce', q: 'Odkurzacz o mocy 1,5 kW pracuje przez 2 godziny. Ile energii zużyje?', options: ['0,75 kWh', '3,5 kWh', '3000 kWh', '3 kWh'], answer: 3, explain: 'W = P · t = 1,5 kW · 2 h = 3 kWh.' },
        { id: 'lfu5yu', q: 'Co pokazuje licznik energii elektrycznej w mieszkaniu?', options: ['zużytą energię w kWh', 'moc w W', 'napięcie w V', 'opór w Ω'], answer: 0, explain: 'Licznik mierzy pracę prądu (zużytą energię) – za nią płacimy, w kilowatogodzinach.' },
        { id: 'ikfcxr', q: 'Dlaczego nie podłącza się wielu mocnych urządzeń do jednej listwy?', options: ['bo spada napięcie w całym mieście', 'bo płynie wtedy duży prąd, który może przegrzać przewody', 'bo urządzenia przestają się grzać', 'bo listwa zmienia prąd na napięcie'], answer: 1, explain: 'Moce się sumują, więc przez listwę i przewód płynie duży prąd – przewody mogą się przegrzać i zapalić. To przeciążenie.' },
      ],
      tasks: [
        {
          id: 'irf33i',
          points: 3,
          q: 'Czajnik elektryczny o mocy 2000 W grzeje wodę przez 6 minut. Oblicz zużytą energię w kWh i w dżulach. Ile kosztuje to grzanie, jeśli przyjmiemy, że 1 kWh kosztuje 1 zł?',
          steps: [
            'Energia w kWh: 2000 W = 2 kW, 6 min = 0,1 h. W = P · t = 2 kW · 0,1 h = 0,2 kWh.',
            'Energia w dżulach: 6 min = 360 s. W = 2000 W · 360 s = 720 000 J (albo 0,2 · 3 600 000 J = 720 000 J).',
            'Koszt: 0,2 kWh · 1 zł/kWh = 0,20 zł, czyli 20 groszy.',
          ],
          answer: '0,2 kWh = 720 000 J; koszt 0,20 zł (20 gr)',
          scoring: [
            '1 pkt – energia w kWh: 0,2 kWh.',
            '1 pkt – energia w dżulach: 720 000 J.',
            '1 pkt – koszt: 0,20 zł.',
          ],
        },
        {
          id: '225sbi',
          points: 2,
          q: 'Na tabliczce grzejnika jest napisane: 230 V, 2300 W. Jaki prąd płynie przez grzejnik podłączony do gniazdka? Czy można go podłączyć do obwodu z bezpiecznikiem 16 A, do którego nic innego nie jest włączone?',
          steps: [
            'Z P = U · I: I = P / U = 2300 W : 230 V = 10 A.',
            'Sprawdzenie: 230 V · 10 A = 2300 W – zgadza się.',
            '10 A to mniej niż 16 A, więc bezpiecznik nie przerwie obwodu – grzejnik można podłączyć.',
          ],
          answer: 'I = 10 A; tak, bo 10 A < 16 A.',
          scoring: [
            '1 pkt – obliczenie natężenia: 10 A.',
            '1 pkt – poprawny wniosek z uzasadnieniem (10 A < 16 A).',
          ],
        },
      ],
    },
    {
      id: 'magnetyzm',
      name: 'Magnetyzm',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. VII „Magnetyzm”, wym. 1–4 i 7 (bieguny magnesów, kompas i bieguny magnetyczne Ziemi, oddziaływanie magnesów z żelazem, igła magnetyczna przy przewodniku z prądem) oraz wym. 5–6 – w podstawie fakultatywne, o ich realizacji decyduje nauczyciel (elektromagnes, silnik elektryczny). Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna.',
      theory: `
        <h3>Magnes i jego bieguny</h3>
        <p>Każdy magnes ma dwa <b>bieguny</b>: <b>północny N</b> i <b>południowy S</b>. Najsilniej działa przy biegunach.</p>
        <ul>
          <li>bieguny <b>jednoimienne</b> (N–N, S–S) się <b>odpychają</b>,</li>
          <li>bieguny <b>różnoimienne</b> (N–S) się <b>przyciągają</b>.</li>
        </ul>
        <p>Biegunów nie da się rozdzielić. Gdy przetniesz magnes na pół, dostaniesz <b>dwa magnesy</b>, każdy z biegunem N i S.</p>
        <h3>Kompas i Ziemia</h3>
        <p><b>Igła magnetyczna</b> to mały magnes, który może się swobodnie obracać. Z dala od innych magnesów ustawia się w kierunku <b>północ–południe</b>: biegun N igły wskazuje <b>północ</b>. Na tym polega działanie <b>kompasu</b>.</p>
        <p>Dzieje się tak, bo <b>Ziemia jest jak wielki magnes</b>. Biegun N igły jest przyciągany przez biegun magnetyczny leżący w pobliżu geograficznego bieguna północnego – według zasady „N przyciąga S” to w fizyce <b>południowy biegun magnetyczny</b> (w geografii nazywa się go północnym biegunem magnetycznym). <b>Bieguny magnetyczne nie pokrywają się dokładnie z geograficznymi</b> i z czasem się przemieszczają.</p>
        <div class="tip">💡 Igła kompasu w pobliżu magnesu (albo żelaznego przedmiotu) wskazuje źle – reaguje na niego, a nie tylko na Ziemię.</div>
        <h3>Magnes i żelazo</h3>
        <p>Magnes przyciąga <b>żelazo</b> (i stal), a także nikiel i kobalt. Nie przyciąga miedzi, aluminium, plastiku, drewna ani papieru. Żelazo w pobliżu magnesu samo staje się magnesem (<b>namagnesowuje się</b>) – dlatego spinacz przyczepiony do magnesu przyciąga kolejny spinacz.</p>
        <p>Zastosowania: magnesy na lodówkę, zamknięcia drzwi szafek, igła kompasu, oddzielanie żelaznych odpadów od innych.</p>
        <h3>Prąd też jest magnesem</h3>
        <p><b>Doświadczenie Oersteda</b>: igła magnetyczna obok przewodu wychyla się, gdy płynie prąd. Po zmianie kierunku prądu wychyla się w <b>drugą stronę</b>, a po wyłączeniu prądu wraca na miejsce. Wniosek: <b>wokół przewodnika z prądem powstaje pole magnetyczne</b>.</p>
        <h3>Elektromagnes i silnik (wymagania fakultatywne)</h3>
        <ul>
          <li><b>Elektromagnes</b> to zwojnica (cewka z drutu) z <b>rdzeniem z żelaza</b>. Działa jak magnes tylko wtedy, gdy płynie prąd. Jest silniejszy, gdy zwiększysz <b>natężenie prądu</b> albo <b>liczbę zwojów</b>. Zastosowania: dźwig na złomowisku, dzwonek, zamek elektromagnetyczny, przekaźnik.</li>
          <li>Elektromagnes oddziałuje z magnesem tak jak zwykły magnes: bieguny jednoimienne się odpychają, różnoimienne przyciągają.</li>
          <li><b>Silnik elektryczny</b> działa dzięki oddziaływaniu magnetycznemu: zwojnica z prądem w polu magnesu obraca się.</li>
        </ul>`,
      flashcards: [
        ['Bieguny magnesu', 'Północny N i południowy S'],
        ['Bieguny jednoimienne (N–N, S–S)', 'Odpychają się'],
        ['Bieguny różnoimienne (N–S)', 'Przyciągają się'],
        ['Przecięty magnes', 'Powstają dwa magnesy – każdy ma biegun N i S'],
        ['Kompas', 'Igła magnetyczna ustawia się w kierunku północ–południe; biegun N wskazuje północ'],
        ['Biegun magnetyczny przy geograficznym biegunie północnym', 'W fizyce – południowy biegun magnetyczny (przyciąga biegun N igły)'],
        ['Co przyciąga magnes?', 'Żelazo (stal), nikiel, kobalt – nie przyciąga miedzi, aluminium, plastiku'],
        ['Doświadczenie Oersteda', 'Igła magnetyczna wychyla się przy przewodzie z prądem – prąd wytwarza pole magnetyczne'],
        ['Elektromagnes', 'Zwojnica z rdzeniem z żelaza; działa, gdy płynie prąd'],
        ['Jak wzmocnić elektromagnes?', 'Zwiększyć natężenie prądu albo liczbę zwojów'],
        ['Silnik elektryczny', 'Działa dzięki oddziaływaniu magnetycznemu zwojnicy z prądem i magnesu'],
      ],
      questions: [
        { id: 'y2v6hj', q: 'Zbliżasz biegun N jednego magnesu do bieguna N drugiego. Co się stanie?', options: ['Magnesy się przyciągną.', 'Magnesy się odepchną.', 'Nic się nie stanie.', 'Magnesy się rozmagnesują.'], answer: 1, explain: 'Bieguny jednoimienne się odpychają.' },
        { id: 'ij7wco', q: 'Przecinasz magnes sztabkowy na pół. Co otrzymasz?', options: ['jeden kawałek z samym biegunem N i drugi z samym S', 'dwa kawałki, które nie są magnesami', 'dwa magnesy, każdy z biegunem N i S', 'dwa kawałki, każdy z dwoma biegunami N'], answer: 2, explain: 'Biegunów nie da się rozdzielić – każdy kawałek jest magnesem z biegunami N i S.' },
        { id: '96kim4', q: 'Który przedmiot przyciągnie magnes?', options: ['moneta z miedzi', 'puszka z aluminium', 'plastikowa linijka', 'stalowy gwóźdź'], answer: 3, explain: 'Magnes przyciąga żelazo i stal. Miedzi, aluminium i plastiku nie przyciąga.' },
        { id: 'u8pq83', q: 'Który biegun igły kompasu wskazuje północ geograficzną?', options: ['biegun N', 'biegun S', 'oba na zmianę', 'żaden – igła wskazuje wschód'], answer: 0, explain: 'Biegun północny N igły magnetycznej wskazuje północ.' },
        { id: '5wq1gr', q: 'Jaki biegun magnetyczny (w rozumieniu fizyki) leży w pobliżu geograficznego bieguna północnego?', options: ['północny N', 'południowy S', 'nie ma tam żadnego bieguna magnetycznego', 'oba bieguny naraz'], answer: 1, explain: 'Przyciąga on biegun N igły, a przyciągają się bieguny różnoimienne – więc to biegun S. W geografii nazywa się go północnym biegunem magnetycznym.' },
        { id: 'gulgcd', q: 'Prawda czy fałsz?\nBieguny magnetyczne Ziemi leżą dokładnie w tym samym miejscu co bieguny geograficzne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Bieguny magnetyczne nie pokrywają się z geograficznymi i z czasem się przemieszczają.' },
        { id: 'fg6ftu', q: 'Dlaczego kompas leżący obok dużego żelaznego przedmiotu może wskazywać źle?', options: ['bo żelazo ochładza igłę', 'bo żelazo przewodzi prąd', 'bo kompas działa tylko na zewnątrz', 'bo igła oddziałuje z żelazem i odchyla się w jego stronę'], answer: 3, explain: 'Igła to magnes – oddziałuje z żelazem, więc nie ustawia się już tylko według pola magnetycznego Ziemi.' },
        { id: 'd4qdn6', q: 'Do magnesu przyczepiony jest stalowy spinacz. Do niego przyczepił się drugi spinacz. Dlaczego?', options: ['Pierwszy spinacz namagnesował się i sam działa jak magnes.', 'Spinacze są naelektryzowane.', 'Spinacze się skleiły.', 'Drugi spinacz jest przyciągany przez Ziemię.'], answer: 0, explain: 'Żelazo (stal) w pobliżu magnesu namagnesowuje się i przyciąga kolejne żelazne przedmioty.' },
        { id: 'tunm42', q: 'Co pokazało doświadczenie Oersteda?', options: ['że magnes przyciąga miedź', 'że wokół przewodnika z prądem powstaje pole magnetyczne', 'że Ziemia jest magnesem', 'że ładunki jednoimienne się odpychają'], answer: 1, explain: 'Igła magnetyczna wychyla się obok przewodu, gdy płynie prąd – prąd wytwarza pole magnetyczne.' },
        { id: '96hibv', q: 'W doświadczeniu Oersteda zmieniamy kierunek prądu w przewodzie. Co zrobi igła magnetyczna?', options: ['Przestanie się wychylać.', 'Wychyli się tak samo jak wcześniej.', 'Wychyli się w przeciwną stronę.', 'Zacznie się obracać bez przerwy.'], answer: 2, explain: 'Kierunek wychylenia igły zależy od kierunku prądu – po jego zmianie igła wychyla się w drugą stronę.' },
        { id: 'wlhacn', q: 'Prawda czy fałsz?\nIgła magnetyczna obok przewodu wychyla się także wtedy, gdy prąd w nim nie płynie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Pole magnetyczne wokół przewodu jest tylko wtedy, gdy płynie prąd. Po wyłączeniu prądu igła wraca na miejsce.' },
        { id: 'qps2s1', q: 'Z czego składa się elektromagnes?', options: ['ze zwojnicy z rdzeniem z żelaza', 'z dwóch magnesów sklejonych biegunami N', 'z baterii i żarówki', 'z miedzianej płytki i plastiku'], answer: 0, explain: 'Elektromagnes to zwojnica (cewka) nawinięta na rdzeń z żelaza, przez którą płynie prąd.' },
        { id: 'kpq4o9', q: 'Jak można zwiększyć siłę elektromagnesu?', options: ['zmniejszyć liczbę zwojów', 'zastąpić rdzeń żelazny drewnianym', 'wyłączyć prąd', 'zwiększyć natężenie prądu'], answer: 3, explain: 'Elektromagnes jest silniejszy przy większym natężeniu prądu i większej liczbie zwojów.' },
        { id: 'hqqcuh', q: 'Dlaczego na złomowisku używa się elektromagnesu, a nie zwykłego magnesu?', options: ['bo elektromagnes przyciąga też aluminium', 'bo elektromagnes można wyłączyć i upuścić złom', 'bo elektromagnes nie potrzebuje prądu', 'bo zwykłe magnesy nie przyciągają żelaza'], answer: 1, explain: 'Elektromagnes działa tylko wtedy, gdy płynie prąd – po wyłączeniu prądu puszcza złom.' },
        { id: '6boh0x', q: 'Na czym polega działanie silnika elektrycznego?', options: ['na oddziaływaniu magnetycznym zwojnicy z prądem i magnesu', 'na elektryzowaniu przez potarcie', 'na spalaniu paliwa', 'na rozszczepieniu światła'], answer: 0, explain: 'W silniku zwojnica z prądem obraca się w polu magnetycznym magnesu – energia elektryczna zamienia się w ruch.' },
        { id: 'wmaeyt', q: 'Biegun N magnesu zbliżasz do bieguna S elektromagnesu, przez który płynie prąd. Co się stanie?', options: ['Odepchną się.', 'Nic – elektromagnes nie oddziałuje z magnesami.', 'Przyciągną się.', 'Magnes się rozgrzeje.'], answer: 2, explain: 'Elektromagnes ma bieguny jak zwykły magnes – bieguny różnoimienne (N i S) się przyciągają.' },
      ],
    },
    {
      id: 'drgania-fale',
      name: 'Drgania, fale i dźwięk',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. VIII „Ruch drgający i fale”, wym. 1–6 i 8 (wahadło, amplituda, okres, częstotliwość, wykres położenia od czasu, fala jako przenoszenie energii, długość i prędkość fali, dźwięk – powstawanie, wysokość i głośność) oraz wym. 7 – w podstawie fakultatywne (dźwięki słyszalne, ultradźwięki, infradźwięki). Zakres słyszalności i źródła infra- i ultradźwięków – według materiałów zpe.gov.pl. Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna.',
      theory: `
        <h3>Ruch drgający</h3>
        <p><b>Wahadło</b> (np. kulka na nitce) porusza się tam i z powrotem wokół <b>położenia równowagi</b>. Taki ruch, który się powtarza, to <b>ruch okresowy</b> (drgający).</p>
        <table>
          <tr><th>Wielkość</th><th>Znaczenie</th><th>Jednostka</th></tr>
          <tr><td><b>amplituda</b> A</td><td>największe wychylenie z położenia równowagi</td><td>m, cm</td></tr>
          <tr><td><b>okres</b> T</td><td>czas jednego pełnego drgania (tam i z powrotem)</td><td>sekunda (s)</td></tr>
          <tr><td><b>częstotliwość</b> f</td><td>liczba drgań w ciągu 1 sekundy</td><td>herc (Hz), 1 Hz = 1/s</td></tr>
        </table>
        <p><b>f = 1 / T</b> &nbsp; i &nbsp; <b>T = 1 / f</b>. Przykład: wahadło wykonało 20 drgań w 10 s. T = 10 s : 20 = 0,5 s, f = 20 : 10 s = 2 Hz.</p>
        <p>Na <b>wykresie położenia od czasu</b> amplituda to wysokość „górki” od osi, a okres – odległość (w czasie) między dwiema kolejnymi górkami.</p>
        <h3>Fala</h3>
        <p><b>Fala mechaniczna</b> to rozchodzenie się drgań w ośrodku (woda, powietrze, sznur). Fala <b>przenosi energię, ale nie przenosi materii</b> – korek na wodzie podskakuje w miejscu, a fala biegnie dalej.</p>
        <ul>
          <li><b>długość fali</b> λ (lambda) – odległość między dwoma sąsiednimi grzbietami (jaką fala przebiega w czasie jednego okresu),</li>
          <li><b>prędkość fali</b>: <b>v = λ / T = λ · f</b>, stąd <b>λ = v / f</b>.</li>
        </ul>
        <p>Przykład: fala o długości 2 m i częstotliwości 5 Hz biegnie z prędkością v = 2 m · 5 Hz = 10 m/s.</p>
        <h3>Dźwięk</h3>
        <p>Źródło dźwięku <b>drga</b> (struna gitary, membrana głośnika, struny głosowe). Drgania popychają cząsteczki powietrza – powstają na przemian <b>zagęszczenia i rozrzedzenia</b>, które biegną od źródła. Dźwięk potrzebuje ośrodka – <b>w próżni się nie rozchodzi</b>.</p>
        <p>Prędkość dźwięku w powietrzu to ok. <b>340 m/s</b> (zależy od temperatury). W wodzie dźwięk biegnie szybciej – ok. 1500 m/s.</p>
        <table>
          <tr><th>Cecha dźwięku</th><th>Od czego zależy</th></tr>
          <tr><td><b>wysokość</b> (wysoki – niski)</td><td>od <b>częstotliwości</b>: większa częstotliwość – wyższy dźwięk</td></tr>
          <tr><td><b>głośność</b></td><td>od <b>amplitudy</b> i energii fali: większa amplituda – głośniejszy dźwięk</td></tr>
        </table>
        <h3>Infradźwięki i ultradźwięki (wymaganie fakultatywne)</h3>
        <table>
          <tr><th>Rodzaj</th><th>Częstotliwość</th><th>Przykłady</th></tr>
          <tr><td>infradźwięki</td><td>poniżej ok. 16 Hz</td><td>trzęsienia ziemi, wybuchy wulkanów; porozumiewają się nimi np. słonie i wieloryby</td></tr>
          <tr><td>dźwięki słyszalne</td><td>od ok. 16 Hz do ok. 20 000 Hz</td><td>mowa, muzyka</td></tr>
          <tr><td>ultradźwięki</td><td>powyżej ok. 20 000 Hz (20 kHz)</td><td>echolokacja nietoperzy i delfinów; badanie USG</td></tr>
        </table>
        <p>Granice są przybliżone – niektóre źródła jako dolną granicę słyszalności podają 20 Hz.</p>
        <div class="tip">💡 Burza: policz sekundy od błysku do grzmotu i pomnóż przez 340 m/s. 3 s → ok. 1 km.</div>`,
      flashcards: [
        ['Położenie równowagi', 'Położenie, wokół którego ciało drga (np. wahadło w spoczynku)'],
        ['Amplituda', 'Największe wychylenie z położenia równowagi'],
        ['Okres T', 'Czas jednego pełnego drgania; jednostka: sekunda'],
        ['Częstotliwość f', 'Liczba drgań w 1 s; jednostka: herc (Hz); f = 1 / T'],
        ['Fala mechaniczna', 'Rozchodzenie się drgań w ośrodku – przenosi energię, nie materię'],
        ['Długość fali λ', 'Odległość między sąsiednimi grzbietami fali'],
        ['Prędkość fali', 'v = λ · f = λ / T'],
        ['Prędkość dźwięku w powietrzu', 'ok. 340 m/s'],
        ['Wysokość dźwięku zależy od…', 'częstotliwości (większa f – wyższy dźwięk)'],
        ['Głośność dźwięku zależy od…', 'amplitudy i energii fali'],
        ['Dźwięki słyszalne', 'ok. 16 Hz – 20 000 Hz'],
        ['Ultradźwięki', 'Powyżej ok. 20 kHz: echolokacja nietoperzy, USG'],
        ['Infradźwięki', 'Poniżej ok. 16 Hz: trzęsienia ziemi, wulkany; słonie, wieloryby'],
      ],
      questions: [
        { id: 'lzwhgn', q: 'Czym jest amplituda drgań wahadła?', options: ['czasem jednego pełnego drgania', 'liczbą drgań w ciągu sekundy', 'największym wychyleniem z położenia równowagi', 'długością nitki wahadła'], answer: 2, explain: 'Amplituda to największe wychylenie z położenia równowagi. Czas jednego drgania to okres, a liczba drgań w 1 s – częstotliwość.' },
        { id: '5s4ow7', q: 'Wahadło wykonało 30 pełnych drgań w ciągu 60 s. Jaki jest okres drgań?', options: ['2 s', '0,5 s', '30 s', '1800 s'], answer: 0, explain: 'T = czas : liczba drgań = 60 s : 30 = 2 s.' },
        { id: 'mvee65', q: 'Okres drgań wynosi 0,25 s. Jaka jest częstotliwość?', options: ['0,25 Hz', '2,5 Hz', '25 Hz', '4 Hz'], answer: 3, explain: 'f = 1 / T = 1 : 0,25 s = 4 Hz.' },
        { id: 'pg0oj1', q: 'Co oznacza częstotliwość 50 Hz?', options: ['jedno drganie trwa 50 s', '50 drgań w ciągu 1 sekundy', 'wychylenie wynosi 50 cm', 'fala ma długość 50 m'], answer: 1, explain: 'Herc to jedno drganie na sekundę, więc 50 Hz to 50 drgań w 1 s.' },
        { id: 'ap8q9s', q: 'Na wykresie położenia wahadła od czasu kolejne „górki” są w chwilach 0,4 s, 1,2 s, 2,0 s. Jaki jest okres drgań?', options: ['0,4 s', '1,2 s', '0,8 s', '2,0 s'], answer: 2, explain: 'Okres to czas między dwiema kolejnymi górkami: 1,2 s − 0,4 s = 0,8 s (i 2,0 s − 1,2 s = 0,8 s).' },
        { id: 'hx6a09', q: 'Fala przechodzi po wodzie pod pływającym korkiem. Co robi korek?', options: ['Podskakuje w górę i w dół w tym samym miejscu.', 'Płynie razem z falą do brzegu.', 'Tonie.', 'Stoi zupełnie nieruchomo.'], answer: 0, explain: 'Fala przenosi energię, a nie materię – korek drga w miejscu, a fala biegnie dalej.' },
        { id: 'kuwf5f', q: 'Fala ma długość 3 m i częstotliwość 2 Hz. Jaka jest jej prędkość?', options: ['1,5 m/s', '5 m/s', '0,67 m/s', '6 m/s'], answer: 3, explain: 'v = λ · f = 3 m · 2 Hz = 6 m/s.' },
        { id: 'kd7oqn', q: 'Dźwięk o częstotliwości 170 Hz rozchodzi się w powietrzu z prędkością 340 m/s. Jaka jest długość fali?', options: ['2 m', '0,5 m', '57 800 m', '510 m'], answer: 0, explain: 'λ = v / f = 340 m/s : 170 Hz = 2 m.' },
        { id: '7kl1uq', q: 'Od czego zależy wysokość dźwięku?', options: ['od amplitudy drgań', 'od częstotliwości drgań', 'od odległości od źródła', 'od temperatury słuchacza'], answer: 1, explain: 'Im większa częstotliwość, tym wyższy dźwięk. Amplituda decyduje o głośności.' },
        { id: 'nki9ij', q: 'Mocniej szarpiesz tę samą strunę gitary. Co się zmienia?', options: ['Dźwięk staje się wyższy.', 'Dźwięk staje się niższy.', 'Dźwięk staje się głośniejszy.', 'Dźwięk biegnie szybciej.'], answer: 2, explain: 'Mocniejsze szarpnięcie to większa amplituda drgań – dźwięk jest głośniejszy, a jego wysokość się nie zmienia.' },
        { id: 'ur2wmr', q: 'Prawda czy fałsz?\nDźwięk rozchodzi się w próżni, np. w przestrzeni kosmicznej.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Dźwięk to drgania cząsteczek ośrodka. W próżni nie ma czego wprawić w drgania, więc dźwięk się nie rozchodzi.' },
        { id: '87fkx0', q: 'Grzmot usłyszałeś 6 s po błysku. Jak daleko (w przybliżeniu) uderzył piorun? Przyjmij prędkość dźwięku 340 m/s.', options: ['ok. 57 m', 'ok. 340 m', 'ok. 6 km', 'ok. 2 km'], answer: 3, explain: 's = v · t = 340 m/s · 6 s = 2040 m ≈ 2 km. Światło błysku dociera do nas prawie natychmiast.' },
        { id: 'ttr6lr', q: 'Jak nazywamy dźwięki o częstotliwości powyżej ok. 20 000 Hz?', options: ['ultradźwięki', 'infradźwięki', 'dźwięki słyszalne', 'fale świetlne'], answer: 0, explain: 'Ultradźwięki mają częstotliwość większą niż ok. 20 kHz – człowiek ich nie słyszy.' },
        { id: 'jenfqc', q: 'Które zastosowanie wykorzystuje ultradźwięki?', options: ['zdjęcie rentgenowskie', 'badanie USG', 'kuchenka mikrofalowa', 'pilot do telewizora'], answer: 1, explain: 'W badaniu USG (ultrasonografii) używa się ultradźwięków. Rentgen, mikrofale i podczerwień w pilocie to fale elektromagnetyczne.' },
        { id: 'ngip4x', q: 'Dźwięk o częstotliwości 5 Hz to…', options: ['ultradźwięk', 'dźwięk słyszalny', 'infradźwięk', 'fala świetlna'], answer: 2, explain: 'Infradźwięki mają częstotliwość poniżej ok. 16 Hz – człowiek ich nie słyszy.' },
        { id: '6cxl4m', q: 'Które zwierzęta posługują się ultradźwiękami w echolokacji?', options: ['nietoperze i delfiny', 'słonie i wieloryby', 'krowy i konie', 'żaby i ryby'], answer: 0, explain: 'Nietoperze i delfiny wysyłają ultradźwięki i odbierają ich echo. Słonie i wieloryby porozumiewają się m.in. infradźwiękami.' },
      ],
      tasks: [
        {
          id: '0wkzeh',
          points: 2,
          q: 'Kamerton drga z częstotliwością 440 Hz. Oblicz długość fali dźwiękowej w powietrzu (prędkość dźwięku 340 m/s) i w wodzie (1500 m/s). Wyniki zaokrąglij do 0,01 m.',
          steps: [
            'Ze wzoru v = λ · f: λ = v / f.',
            'W powietrzu: λ = 340 m/s : 440 Hz ≈ 0,773 m ≈ 0,77 m.',
            'W wodzie: λ = 1500 m/s : 440 Hz ≈ 3,409 m ≈ 3,41 m. Częstotliwość się nie zmienia (zależy od źródła), zmienia się długość fali.',
          ],
          answer: 'w powietrzu ok. 0,77 m, w wodzie ok. 3,41 m',
          scoring: [
            '1 pkt – zastosowanie λ = v / f i wynik dla powietrza: ok. 0,77 m.',
            '1 pkt – wynik dla wody: ok. 3,41 m.',
          ],
        },
        {
          id: '1n2m87',
          points: 2,
          q: 'Wahadło zegara wykonuje 90 pełnych drgań w ciągu 3 minut. Oblicz okres i częstotliwość drgań.',
          steps: [
            'Zamień czas na sekundy: 3 min = 180 s.',
            'Okres: T = 180 s : 90 = 2 s.',
            'Częstotliwość: f = 90 : 180 s = 0,5 Hz (albo f = 1 / T = 1 : 2 s = 0,5 Hz).',
          ],
          answer: 'T = 2 s, f = 0,5 Hz',
          scoring: [
            '1 pkt – okres: 2 s.',
            '1 pkt – częstotliwość: 0,5 Hz.',
          ],
        },
      ],
    },
    {
      id: 'swiatlo',
      name: 'Światło: cień, odbicie, zwierciadła',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. IX „Optyka”, wym. 1–5 i 12a (prostoliniowe rozchodzenie się światła, cień i półcień, odbicie od powierzchni płaskiej i sferycznej, rozproszenie, zwierciadła płaskie i sferyczne, obraz pozorny w zwierciadle płaskim). Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna.',
      theory: `
        <h3>Światło biegnie po prostej</h3>
        <p>W ośrodku <b>jednorodnym</b> (np. w powietrzu, w wodzie) światło rozchodzi się <b>prostoliniowo</b>. Drogę światła rysujemy jako <b>promień</b> – linię ze strzałką.</p>
        <p><b>Cień</b> to obszar za nieprzezroczystym przedmiotem, do którego światło ze źródła nie dociera. <b>Półcień</b> to obszar oświetlony tylko częściowo – powstaje, gdy źródło jest duże albo gdy są dwa źródła światła.</p>
        <p>Przykłady: cień drzewa; <b>zaćmienie Słońca</b> – Księżyc znajduje się między Słońcem a Ziemią i rzuca na Ziemię cień.</p>
        <h3>Odbicie światła</h3>
        <p>Gdy światło pada na gładką powierzchnię (lustro), <b>odbija się</b>. Kąty mierzymy od <b>normalnej</b> – prostej prostopadłej do powierzchni w punkcie padania.</p>
        <p><b>Prawo odbicia</b>: <b>kąt odbicia = kąt padania</b>. Promień padający, promień odbity i normalna leżą w jednej płaszczyźnie.</p>
        <p>Na powierzchni <b>chropowatej</b> (papier, ściana) promienie odbijają się w <b>różnych kierunkach</b> – to <b>rozproszenie</b> światła. Dzięki niemu widzimy przedmioty z każdej strony.</p>
        <h3>Zwierciadło płaskie</h3>
        <p>Obraz w lustrze jest:</p>
        <ul>
          <li><b>pozorny</b> – promienie się nie spotykają, tylko ich <b>przedłużenia</b> za lustrem (obrazu nie da się złapać na ekranie),</li>
          <li><b>prosty</b> (nieodwrócony góra–dół),</li>
          <li><b>tej samej wielkości</b> co przedmiot,</li>
          <li>w <b>tej samej odległości</b> za lustrem, w jakiej przedmiot stoi przed lustrem (symetrycznie).</li>
        </ul>
        <h3>Zwierciadła sferyczne (kuliste)</h3>
        <table>
          <tr><th>Zwierciadło</th><th>Co robi z promieniami równoległymi do osi</th><th>Przykłady</th></tr>
          <tr><td><b>wklęsłe</b></td><td><b>skupia</b> je w jednym punkcie – <b>ognisku F</b></td><td>reflektor, latarka (żarówka w ognisku daje wiązkę równoległą), lusterko kosmetyczne</td></tr>
          <tr><td><b>wypukłe</b></td><td><b>rozprasza</b> je – rozchodzą się, jakby wychodziły z punktu za zwierciadłem</td><td>lustro na skrzyżowaniu, w sklepie – duże pole widzenia</td></tr>
        </table>
        <p><b>Ogniskowa</b> f to odległość ogniska od zwierciadła.</p>
        <div class="tip">💡 Wklęsłe jak <b>łyżka od środka</b> – zbiera światło. Wypukłe jak <b>bombka</b> – rozrzuca je na boki.</div>`,
      flashcards: [
        ['Prostoliniowe rozchodzenie się światła', 'W ośrodku jednorodnym światło biegnie po liniach prostych'],
        ['Cień', 'Obszar, do którego światło ze źródła nie dociera'],
        ['Półcień', 'Obszar oświetlony częściowo – przy dużym źródle albo dwóch źródłach'],
        ['Prawo odbicia', 'Kąt odbicia = kąt padania (kąty mierzone od normalnej)'],
        ['Normalna', 'Prosta prostopadła do powierzchni w punkcie padania promienia'],
        ['Rozproszenie światła', 'Odbicie od powierzchni chropowatej w różnych kierunkach'],
        ['Obraz w zwierciadle płaskim', 'Pozorny, prosty, tej samej wielkości, w tej samej odległości za lustrem'],
        ['Obraz pozorny', 'Powstaje z przedłużeń promieni – nie da się go zobaczyć na ekranie'],
        ['Zwierciadło wklęsłe', 'Skupia promienie równoległe w ognisku F'],
        ['Zwierciadło wypukłe', 'Rozprasza promienie; daje szerokie pole widzenia'],
        ['Ogniskowa', 'Odległość ogniska od zwierciadła (lub soczewki)'],
      ],
      questions: [
        { id: 'wk5vwq', q: 'Dlaczego za nieprzezroczystym przedmiotem powstaje cień?', options: ['bo przedmiot pochłania całe powietrze', 'bo światło rozchodzi się prostoliniowo i nie omija przedmiotu', 'bo światło zawsze odbija się od przedmiotu w stronę źródła', 'bo przedmiot wysyła ciemne promienie'], answer: 1, explain: 'Światło biegnie po liniach prostych, więc obszar za przedmiotem nie jest oświetlony.' },
        { id: 'w7vd6j', q: 'Kiedy obok cienia powstaje półcień?', options: ['gdy źródło światła jest duże albo są dwa źródła', 'tylko w zupełnej ciemności', 'gdy przedmiot jest przezroczysty', 'nigdy – półcień nie istnieje'], answer: 0, explain: 'Półcień to obszar, do którego dociera światło tylko z części źródła (albo tylko z jednego z dwóch źródeł).' },
        { id: 'bi1s6g', q: 'Promień pada na lustro pod kątem 35° do normalnej. Pod jakim kątem do normalnej się odbije?', options: ['55°', '70°', '35°', '90°'], answer: 2, explain: 'Kąt odbicia jest równy kątowi padania: 35°.' },
        { id: 'mlin1o', q: 'Promień tworzy z powierzchnią lustra kąt 30°. Jaki jest kąt odbicia (od normalnej)?', options: ['30°', '15°', '90°', '60°'], answer: 3, explain: 'Kąty mierzymy od normalnej: 90° − 30° = 60°. Kąt padania 60°, więc kąt odbicia też 60°.' },
        { id: 'ey699q', q: 'Dlaczego widzisz kartkę papieru z każdego miejsca w klasie?', options: ['bo papier sam świeci', 'bo papier rozprasza światło – odbija je w różnych kierunkach', 'bo papier jest przezroczysty', 'bo papier odbija światło jak lustro, tylko w jedną stronę'], answer: 1, explain: 'Chropowata powierzchnia rozprasza światło we wszystkich kierunkach, więc dociera ono do oczu każdego ucznia.' },
        { id: 'pcmas2', q: 'Stoisz 2 m przed płaskim lustrem. W jakiej odległości od ciebie jest twój obraz?', options: ['4 m', '2 m', '1 m', '0 m – obraz jest na lustrze'], answer: 0, explain: 'Obraz jest 2 m za lustrem, a ty 2 m przed nim – razem 4 m.' },
        { id: 'i45m5w', q: 'Jaki obraz daje zwierciadło płaskie?', options: ['rzeczywisty, odwrócony, pomniejszony', 'pozorny, odwrócony, powiększony', 'rzeczywisty, prosty, tej samej wielkości', 'pozorny, prosty, tej samej wielkości'], answer: 3, explain: 'Obraz w lustrze płaskim jest pozorny (z przedłużeń promieni), prosty i tej samej wielkości co przedmiot.' },
        { id: '0q8wst', q: 'Dlaczego obraz w płaskim lustrze nazywamy pozornym?', options: ['bo powstaje z przedłużeń promieni odbitych – nie da się go złapać na ekranie', 'bo jest odwrócony do góry nogami', 'bo jest mniejszy od przedmiotu', 'bo znika po zgaszeniu światła w innym pokoju'], answer: 0, explain: 'Promienie odbite się rozbiegają. Spotykają się tylko ich przedłużenia „za lustrem” – tam widzimy obraz.' },
        { id: 'hff8pb', q: 'Które zwierciadło skupia promienie równoległe do osi w ognisku?', options: ['płaskie', 'wypukłe', 'wklęsłe', 'żadne'], answer: 2, explain: 'Zwierciadło wklęsłe skupia promienie równoległe w ognisku F.' },
        { id: 'dj6kl7', q: 'Jakie zwierciadło montuje się na wyjazdach z posesji i skrzyżowaniach, żeby widzieć dużą część drogi?', options: ['płaskie', 'wypukłe', 'wklęsłe', 'pryzmat'], answer: 1, explain: 'Zwierciadło wypukłe rozprasza światło i daje szerokie pole widzenia.' },
        { id: 'd4g2e4', q: 'W latarce żarówka stoi w ognisku zwierciadła wklęsłego. Jaka wiązka światła wychodzi z latarki?', options: ['równoległa', 'rozbiegająca się na wszystkie strony', 'skupiona w jednym punkcie tuż przed latarką', 'żadna – zwierciadło pochłania światło'], answer: 0, explain: 'Promienie wychodzące z ogniska po odbiciu od zwierciadła wklęsłego biegną równolegle – latarka świeci daleko.' },
        { id: 'uegxrj', q: 'Prawda czy fałsz?\nKąt odbicia jest zawsze dwa razy większy od kąta padania.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Prawo odbicia: kąt odbicia jest równy kątowi padania.' },
        { id: 'jhd6s9', q: 'Jak nazywamy prostą prostopadłą do lustra w punkcie, w którym pada promień?', options: ['oś optyczna', 'ogniskowa', 'promień odbity', 'normalna'], answer: 3, explain: 'To normalna – od niej mierzymy kąt padania i kąt odbicia.' },
        { id: '2mqgaz', q: 'Kiedy następuje zaćmienie Słońca?', options: ['gdy Ziemia jest między Słońcem a Księżycem', 'gdy Księżyc jest między Słońcem a Ziemią', 'gdy Słońce jest między Ziemią a Księżycem', 'gdy Księżyc odbija mniej światła'], answer: 1, explain: 'Księżyc zasłania Słońce i rzuca cień na Ziemię – to przykład prostoliniowego rozchodzenia się światła.' },
        { id: 'y9xita', q: 'Prawda czy fałsz?\nObraz w płaskim lustrze jest tej samej wielkości co przedmiot.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Zwierciadło płaskie daje obraz tej samej wielkości, pozorny i prosty.' },
        { id: 'eql6h4', q: 'Co to jest ognisko zwierciadła wklęsłego?', options: ['punkt, w którym skupiają się promienie równoległe do osi po odbiciu', 'środek lustra', 'najjaśniejsze miejsce w pokoju', 'punkt, w którym stoi obserwator'], answer: 0, explain: 'Ognisko F to punkt, w którym po odbiciu przecinają się promienie biegnące wcześniej równolegle do osi.' },
      ],
    },
    {
      id: 'soczewki',
      name: 'Załamanie, soczewki i barwy',
      basis: 'Dz.U. 2024 poz. 996, fizyka kl. VII–VIII, dz. IX „Optyka”, wym. 6–7, 9–10 i 12 (załamanie światła, soczewka skupiająca i rozpraszająca, ognisko, rozszczepienie światła białego w pryzmacie, światło lasera) oraz wym. 8 i 11 – w podstawie fakultatywne (wady wzroku i ich korekcja, rodzaje fal elektromagnetycznych). Fakty o rozszczepieniu i korekcji wad wzroku – według materiałów zpe.gov.pl. Podstawa nie dzieli fizyki na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna.',
      theory: `
        <h3>Załamanie światła</h3>
        <p>Na granicy dwóch ośrodków (np. powietrze – woda) promień światła <b>zmienia kierunek</b>. Dzieje się tak, bo światło ma w różnych ośrodkach <b>różną prędkość</b>: w próżni i w powietrzu ok. <b>300 000 km/s</b>, w wodzie i szkle – mniej.</p>
        <ul>
          <li>Przejście do ośrodka, w którym światło biegnie <b>wolniej</b> (powietrze → woda, powietrze → szkło): promień załamuje się <b>do normalnej</b> – kąt załamania jest mniejszy od kąta padania.</li>
          <li>Przejście do ośrodka, w którym światło biegnie <b>szybciej</b> (woda → powietrze): promień załamuje się <b>od normalnej</b>.</li>
          <li>Promień padający <b>prostopadle</b> do granicy nie zmienia kierunku.</li>
        </ul>
        <p>Przykład: łyżeczka w szklance z wodą wygląda na „złamaną”, a dno basenu wydaje się płytsze, niż jest.</p>
        <h3>Soczewki</h3>
        <table>
          <tr><th>Soczewka</th><th>Promienie równoległe do osi optycznej</th></tr>
          <tr><td><b>skupiająca</b> (zwykle grubsza w środku – wypukła)</td><td>po przejściu przez soczewkę <b>skupiają się w ognisku F</b> (rzeczywistym)</td></tr>
          <tr><td><b>rozpraszająca</b> (zwykle cieńsza w środku – wklęsła)</td><td>po przejściu <b>rozbiegają się</b>; ich <b>przedłużenia</b> przecinają się w ognisku <b>pozornym</b> przed soczewką</td></tr>
        </table>
        <p>Soczewka ma dwa ogniska – po obu stronach, w tej samej odległości. <b>Ogniskowa</b> f to odległość ogniska od środka soczewki. Promień biegnący przez <b>środek</b> soczewki nie zmienia kierunku.</p>
        <p>Lupa to soczewka skupiająca. Soczewką skupiającą skupisz promienie Słońca w małym, gorącym punkcie.</p>
        <h3>Wady wzroku (wymaganie fakultatywne)</h3>
        <table>
          <tr><th>Wada</th><th>Co się dzieje</th><th>Korekcja</th></tr>
          <tr><td><b>krótkowzroczność</b> – źle widzi z daleka</td><td>obraz powstaje <b>przed</b> siatkówką</td><td>soczewki <b>rozpraszające</b> („minusy”)</td></tr>
          <tr><td><b>dalekowzroczność</b> – źle widzi z bliska</td><td>obraz powstaje <b>za</b> siatkówką</td><td>soczewki <b>skupiające</b> („plusy”)</td></tr>
        </table>
        <h3>Barwy światła</h3>
        <p><b>Światło białe</b> (np. słoneczne) to <b>mieszanina barw</b>. W <b>pryzmacie</b> ulega <b>rozszczepieniu</b> – każda barwa załamuje się trochę inaczej. Powstaje <b>widmo</b>: czerwona, pomarańczowa, żółta, zielona, niebieska, fioletowa. <b>Najmniej</b> odchyla się światło <b>czerwone</b>, <b>najbardziej – fioletowe</b>. Tak samo powstaje tęcza (krople wody działają jak pryzmaty).</p>
        <p>Światło <b>lasera</b> jest <b>jednobarwne</b> – w pryzmacie zmienia kierunek, ale się <b>nie rozszczepia</b>.</p>
        <h3>Fale elektromagnetyczne (wymaganie fakultatywne)</h3>
        <p>Światło to jeden z rodzajów <b>fal elektromagnetycznych</b>. W próżni wszystkie biegną z prędkością światła. Od najmniejszej do największej częstotliwości:</p>
        <table>
          <tr><th>Rodzaj</th><th>Przykład zastosowania</th></tr>
          <tr><td>fale radiowe</td><td>radio, telewizja</td></tr>
          <tr><td>mikrofale</td><td>kuchenka mikrofalowa, radar</td></tr>
          <tr><td>podczerwień</td><td>pilot do telewizora, kamera termowizyjna</td></tr>
          <tr><td>światło widzialne</td><td>oświetlenie, widzenie</td></tr>
          <tr><td>nadfiolet (UV)</td><td>lampy bakteriobójcze, sprawdzanie zabezpieczeń banknotów</td></tr>
          <tr><td>promieniowanie rentgenowskie</td><td>zdjęcia RTG</td></tr>
          <tr><td>promieniowanie gamma</td><td>leczenie nowotworów (radioterapia)</td></tr>
        </table>
        <div class="tip">💡 Kolejność barw w widmie: „<b>C</b>zy <b>P</b>an <b>Ż</b>ubr <b>Z</b>na <b>N</b>asze <b>F</b>iołki?” – czerwona, pomarańczowa, żółta, zielona, niebieska, fioletowa.</div>`,
      flashcards: [
        ['Załamanie światła', 'Zmiana kierunku promienia na granicy ośrodków, w których światło ma różną prędkość'],
        ['Powietrze → woda', 'Światło zwalnia – promień załamuje się do normalnej'],
        ['Woda → powietrze', 'Światło przyspiesza – promień załamuje się od normalnej'],
        ['Prędkość światła w próżni', 'ok. 300 000 km/s'],
        ['Soczewka skupiająca', 'Promienie równoległe do osi skupia w ognisku F'],
        ['Soczewka rozpraszająca', 'Promienie równoległe do osi rozprasza; ich przedłużenia przechodzą przez ognisko pozorne'],
        ['Ogniskowa', 'Odległość ogniska od środka soczewki'],
        ['Krótkowzroczność', 'Obraz przed siatkówką; korekcja – soczewki rozpraszające'],
        ['Dalekowzroczność', 'Obraz za siatkówką; korekcja – soczewki skupiające'],
        ['Rozszczepienie światła', 'Pryzmat rozkłada światło białe na barwy; czerwone odchyla się najmniej, fioletowe najbardziej'],
        ['Światło lasera', 'Jednobarwne – w pryzmacie się nie rozszczepia'],
        ['Fale elektromagnetyczne', 'Radiowe, mikrofale, podczerwień, światło, nadfiolet, rentgenowskie, gamma'],
      ],
      questions: [
        { id: 'ux105l', q: 'Dlaczego światło załamuje się na granicy powietrza i wody?', options: ['bo woda jest mokra', 'bo w wodzie światło ma inną prędkość niż w powietrzu', 'bo woda odbija całe światło', 'bo w wodzie światło zmienia barwę'], answer: 1, explain: 'Załamanie wynika z różnej prędkości światła w dwóch ośrodkach.' },
        { id: 'ctlrbu', q: 'Promień przechodzi z powietrza do wody (nie prostopadle). Jak się załamie?', options: ['do normalnej – kąt załamania mniejszy od kąta padania', 'od normalnej – kąt załamania większy od kąta padania', 'wcale – biegnie dalej prosto', 'zawsze pod kątem 90°'], answer: 0, explain: 'W wodzie światło biegnie wolniej, więc promień załamuje się do normalnej.' },
        { id: 'yk1cvp', q: 'Promień pada prostopadle na powierzchnię wody. Co się z nim stanie?', options: ['Załamie się do normalnej.', 'Załamie się od normalnej.', 'Całkowicie się odbije.', 'Przejdzie dalej bez zmiany kierunku.'], answer: 3, explain: 'Promień padający prostopadle do granicy ośrodków nie zmienia kierunku.' },
        { id: '2s8ddm', q: 'Dlaczego łyżeczka w szklance z wodą wygląda na „złamaną”?', options: ['bo woda wygina metal', 'bo światło odbija się od łyżeczki', 'bo światło załamuje się na granicy woda – powietrze', 'bo szklanka działa jak lustro'], answer: 2, explain: 'Promienie od zanurzonej części łyżeczki załamują się, wychodząc z wody – widzimy ją w innym miejscu.' },
        { id: 'ktzkh9', q: 'Co robi soczewka skupiająca z promieniami równoległymi do osi optycznej?', options: ['skupia je w ognisku', 'rozprasza je na boki', 'odbija je z powrotem', 'zamienia je w promienie fioletowe'], answer: 0, explain: 'Soczewka skupiająca skupia promienie równoległe do osi w ognisku F.' },
        { id: 'gds02a', q: 'Promienie równoległe do osi po przejściu przez soczewkę rozbiegają się, a ich przedłużenia przecinają się przed soczewką. Jaka to soczewka?', options: ['skupiająca', 'rozpraszająca', 'to nie soczewka, tylko lustro płaskie', 'każda soczewka tak działa'], answer: 1, explain: 'Tak działa soczewka rozpraszająca – ma ognisko pozorne (z przedłużeń promieni).' },
        { id: 'fm1ry1', q: 'Co to jest ogniskowa soczewki?', options: ['grubość soczewki', 'średnica soczewki', 'kąt załamania światła', 'odległość ogniska od środka soczewki'], answer: 3, explain: 'Ogniskowa f to odległość ogniska od środka soczewki.' },
        { id: '7md3k1', q: 'Jaką soczewką jest lupa?', options: ['rozpraszającą', 'skupiającą', 'płaską', 'to nie soczewka, tylko pryzmat'], answer: 1, explain: 'Lupa to soczewka skupiająca – daje powiększony obraz małych przedmiotów.' },
        { id: 'w0fk2s', q: 'Osoba krótkowzroczna źle widzi przedmioty daleko. Jakie soczewki koryguje się jej wadę?', options: ['rozpraszające', 'skupiające', 'pryzmaty', 'zwierciadła wklęsłe'], answer: 0, explain: 'W oku krótkowzroczny obraz powstaje przed siatkówką – soczewka rozpraszająca przesuwa go na siatkówkę.' },
        { id: 'mm8br6', q: 'Gdzie powstaje obraz w oku osoby dalekowzrocznej (bez okularów)?', options: ['przed siatkówką', 'na soczewce', 'za siatkówką', 'na rogówce'], answer: 2, explain: 'W dalekowzroczności obraz powstaje za siatkówką. Korygują to soczewki skupiające.' },
        { id: '5e46rf', q: 'Co dzieje się ze światłem białym w pryzmacie?', options: ['zmienia się w światło czerwone', 'zostaje całkowicie pochłonięte', 'nie zmienia się w ogóle', 'rozszczepia się na barwy'], answer: 3, explain: 'Światło białe to mieszanina barw – w pryzmacie każda barwa załamuje się inaczej i powstaje widmo.' },
        { id: 'hcde6x', q: 'Które światło najbardziej odchyla się w pryzmacie?', options: ['czerwone', 'fioletowe', 'zielone', 'żółte'], answer: 1, explain: 'Najbardziej odchyla się światło fioletowe, najmniej – czerwone.' },
        { id: 'qa5n5o', q: 'Wiązka lasera pada na pryzmat. Co zobaczysz za pryzmatem?', options: ['jedną plamkę tej samej barwy – światło nie rozszczepia się', 'tęczę', 'światło białe', 'nic – laser nie przechodzi przez szkło'], answer: 0, explain: 'Światło lasera jest jednobarwne, więc w pryzmacie zmienia tylko kierunek i się nie rozszczepia.' },
        { id: 'qzopl8', q: 'Ile w przybliżeniu wynosi prędkość światła w próżni?', options: ['340 m/s', '300 km/s', '300 000 km/s', '1500 m/s'], answer: 2, explain: 'Światło w próżni biegnie z prędkością ok. 300 000 km/s. 340 m/s to prędkość dźwięku w powietrzu.' },
        { id: 'w719z0', q: 'Które promieniowanie wykorzystuje się w zdjęciach RTG?', options: ['podczerwień', 'fale radiowe', 'mikrofale', 'promieniowanie rentgenowskie'], answer: 3, explain: 'Zdjęcia RTG wykonuje się promieniowaniem rentgenowskim.' },
        { id: 'jio67q', q: 'Pilot do telewizora wysyła sygnał…', options: ['w podczerwieni', 'ultradźwiękami', 'promieniowaniem gamma', 'światłem lasera'], answer: 0, explain: 'Pilot wysyła niewidzialne dla oka promieniowanie podczerwone – to fala elektromagnetyczna.' },
      ],
    },
  ],
});
