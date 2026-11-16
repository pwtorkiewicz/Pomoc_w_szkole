/* 🌍 Świat – nauka z innych krajów: maszyny i konstrukcje.
 * Ścieżka POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Działy ułożone według tematów, nie klas: level (1–3), age ([od, do] – sugerowany wiek), requires ('przedmiot/dział'), where – gdzie się tego uczą.
 * Fakty o szkołach za granicą – tylko z dokumentów ministerstw (adresy w polu basis i w js/dane/swiat/zrodla.js). */
(function () {
  const DT = 'National curriculum in England: design and technology programmes of study, key stages 1 and 2 (Department for Education, wrzesień 2013, gov.uk – obowiązujący, sprawdzone 14.11.2026)';
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'maszyny',
    name: 'Maszyny i konstrukcje',
    icon: '⚙️',
    color: '#2e9e6b',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'mechanizmy',
        name: 'Mechanizmy: dźwignia, krążek, koła zębate, krzywka',
        level: 2,
        age: [9, 12],
        where: 'Anglia – design and technology, key stage 2 (dzieci 7–11 lat): mechanizmy w projektowanych zabawkach i urządzeniach',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Źródło: ${DT}, key stage 2, „Technical knowledge”: „understand and use mechanical systems in their products [for example, gears, pulleys, cams, levers and linkages]”. Key stage 2 = uczniowie w wieku 7–11 lat (Year 3–6), design and technology – przedmiot obowiązkowy w szkole podstawowej: strony gov.uk „The national curriculum” (overview, key stage 1 and 2), sprawdzone 14.11.2026. Fakty o mechanizmach sprawdzone 14.11.2026 w e-materiałach zpe.gov.pl: „Maszyny proste. Wyznaczanie masy ciała przy użyciu dźwigni dwustronnej” (dźwignia jednostronna i dwustronna, punkt podparcia, ramię siły, „mała siła może zrównoważyć dużą siłę, jeśli ma odpowiednio duże ramię”, mniejsza siła – dłuższa droga, taczki jako dźwignia jednostronna, blok nieruchomy: nie zmienia wartości siły, zmienia jej kierunek) oraz „Podstawy budowy maszyn i urządzeń do obróbki metali i tworzyw sztucznych” (przekładnia zębata: stosunek prędkości obrotowych równy ilorazowi liczby zębów, zmniejszenie prędkości – wzrost momentu; mechanizm krzywkowy: krzywka na wałku popycha popychacz, ruch powtarza się co obrót) i „Słownik pojęć” do e-materiału o montażu (koła zębate zmieniają prędkość i kierunek obrotu). Przeciwny kierunek obrotu dwóch zazębionych kół – wynika z zazębienia (rysunek w lekcji). Linkages (połączenia dźwigni) pominięto.`,
        theory: `
          <h3>Jak to jest w Anglii?</h3>
          <p>W angielskiej szkole podstawowej jest przedmiot <b>design and technology</b> („projektowanie i technika”). Dzieci w wieku 7–11 lat projektują i budują różne rzeczy, np. zabawki. Program mówi, że mają poznać i używać w nich <b>mechanizmów</b>: kół zębatych, krążków, krzywek i dźwigni.</p>
          <p><b>Mechanizm</b> to część maszyny, która zmienia ruch albo siłę – np. pozwala podnieść coś ciężkiego mniejszą siłą.</p>
          <h3>Dźwignia</h3>
          <p><b>Dźwignia</b> to sztywny drąg (np. łom, deska), który obraca się wokół jednego punktu – <b>punktu podparcia</b>. Odległość od punktu podparcia do miejsca, gdzie naciskasz, to <b>ramię</b>.</p>
          <p><b>Im dłuższe ramię, tym mniejszą siłą</b> możesz podnieść ciężar. Mała siła może zrównoważyć dużą, jeśli działa daleko od punktu podparcia.</p>
          <p class="tip">Coś za coś: naciskasz lżej, ale koniec drąga przesuwasz na dłuższej drodze niż ciężar.</p>
          <p><b>Dwustronna</b> – punkt podparcia jest między ciężarem a siłą (np. drąg pod kamieniem). <b>Jednostronna</b> – siły działają po jednej stronie punktu podparcia (np. <b>taczki</b>: koło jest punktem podparcia).</p>
          <h3>Krążek (blok nieruchomy)</h3>
          <p>To koło na osi, przez które przechodzi lina. <b>Nie zmniejsza siły</b> – ciągniesz linę tak samo mocno, jak gdybyś podnosił wiadro rękami. Ale <b>zmienia kierunek</b>: ciągniesz w dół, a wiadro jedzie w górę. Tak jest łatwiej, bo możesz pomóc sobie ciężarem ciała.</p>
          <h3>Koła zębate</h3>
          <p>Zęby jednego koła wchodzą między zęby drugiego. Gdy obracasz jedno koło, drugie też się kręci:</p>
          <ul>
            <li>dwa zazębione koła kręcą się w <b>przeciwne strony</b>,</li>
            <li><b>małe</b> koło kręci się <b>szybciej</b> niż duże: koło z 20 zębami robi 1 obrót, a koło z 10 zębami – 2 obroty,</li>
            <li>gdy koło kręci się wolniej, może działać <b>z większą siłą</b>.</li>
          </ul>
          <h3>Krzywka</h3>
          <p><b>Krzywka</b> to koło o nieokrągłym kształcie (np. jak jajko) na obracającym się wałku. Gdy się obraca, popycha leżący na niej pręt – <b>popychacz</b> – w górę i w dół. Zamienia <b>ruch obrotowy</b> w <b>ruch w górę i w dół</b>. Ruch powtarza się przy każdym pełnym obrocie.</p>`,
        infographicNote: 'Cztery mechanizmy z angielskiej lekcji techniki – przy każdym: co robi.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: 'Anglia: design and technology', text: 'dzieci 7–11 lat budują rzeczy z mechanizmami' },
          items: [
            { icon: '🪨', kolor: 1, title: 'Dźwignia', text: 'dłuższe ramię – mniejsza siła' },
            { icon: '🪣', kolor: 3, title: 'Krążek', text: 'ta sama siła, zmienia kierunek' },
            { icon: '⚙️', kolor: 5, title: 'Koła zębate', text: 'kręcą się w przeciwne strony; małe – szybciej' },
            { icon: '🥚', kolor: 2, title: 'Krzywka', text: 'obrót zamienia w ruch w górę i w dół' },
          ],
          bottom: { kolor: 4, title: '💡 Coś za coś', text: 'mniejsza siła – dłuższa droga albo wolniejszy obrót' },
        },
        flashcards: [
          ['Design and technology', 'przedmiot w angielskiej szkole: dzieci projektują i budują rzeczy'],
          ['Mechanizm', 'część maszyny, która zmienia ruch albo siłę'],
          ['Dźwignia', 'sztywny drąg obracający się wokół punktu podparcia'],
          ['Punkt podparcia', 'miejsce, wokół którego obraca się dźwignia'],
          ['Ramię dźwigni', 'odległość od punktu podparcia do miejsca, gdzie działa siła'],
          ['Dłuższe ramię…', '…mniejsza siła potrzebna do podniesienia ciężaru'],
          ['Taczki', 'dźwignia jednostronna – koło to punkt podparcia'],
          ['Krążek (blok nieruchomy)', 'nie zmniejsza siły, ale zmienia jej kierunek'],
          ['Dwa zazębione koła zębate', 'kręcą się w przeciwne strony'],
          ['Koło 20 zębów i koło 10 zębów', 'gdy duże zrobi 1 obrót, małe zrobi 2'],
          ['Krzywka', 'zamienia ruch obrotowy w ruch w górę i w dół'],
        ],
        questions: [
          { id: '6b883w', q: 'Jak nazywa się przedmiot w angielskiej szkole, na którym dzieci projektują i budują rzeczy z mechanizmami?', options: ['design and technology', 'art and design', 'computing', 'physical education'], answer: 0, explain: 'Design and technology to po polsku „projektowanie i technika”. Art and design to plastyka, computing – informatyka, a physical education – WF.' },
          { id: '0unu7t', q: 'Wokół czego obraca się dźwignia?', options: ['wokół punktu podparcia', 'wokół ciężaru', 'wokół ręki, która naciska', 'wokół końca drąga'], answer: 0, explain: 'Dźwignia to drąg, który obraca się wokół punktu podparcia.' },
          { id: 'fuu5jy', q: 'Chcesz podnieść ciężki kamień drągiem. Gdzie najlepiej nacisnąć, żeby użyć jak najmniejszej siły?', options: ['jak najdalej od punktu podparcia', 'jak najbliżej punktu podparcia', 'dokładnie nad punktem podparcia', 'na kamieniu'], answer: 0, explain: 'Im dłuższe ramię, tym mniejszej siły potrzebujesz. Naciskaj więc jak najdalej od punktu podparcia.' },
          { id: 'cxbpvk', q: 'Dźwignia pozwala podnieść ciężar mniejszą siłą. Co „płacisz” w zamian?', options: ['koniec drąga przesuwasz na dłuższej drodze', 'ciężar robi się dużo cięższy niż wcześniej', 'drąg musi być gruby i bardzo wytrzymały', 'nic – potrzebna siła po prostu znika'], answer: 0, explain: 'Coś za coś: mniejsza siła, ale dłuższa droga. Ty przesuwasz koniec drąga dalej, niż podnosi się ciężar.' },
          { id: 'l5geau', q: 'Taczki to dźwignia jednostronna. Co jest w nich punktem podparcia?', options: ['koło', 'uchwyty', 'ładunek', 'nogi taczek'], answer: 0, explain: 'Taczki obracają się wokół koła – to punkt podparcia. Ładunek i twoja siła działają po tej samej stronie koła.' },
          { id: 'ncw54c', q: 'Co robi krążek (blok nieruchomy), przez który przechodzi lina?', options: ['zmienia kierunek siły', 'zmniejsza siłę o połowę', 'zwiększa ciężar ładunku', 'zamienia obrót w ruch w górę i w dół'], answer: 0, explain: 'Blok nieruchomy nie zmienia wartości siły, ale zmienia jej kierunek: ciągniesz w dół, a ładunek jedzie w górę.' },
          { id: 'q9j51s', q: 'Prawda czy fałsz?\nDzięki krążkowi (blokowi nieruchomemu) wiadro podnosisz dwa razy mniejszą siłą.', options: TF, noShuffle: true, answer: 1, explain: 'Fałsz. Blok nieruchomy nie zmniejsza siły – ciągniesz tak samo mocno. Zmienia tylko kierunek ciągnięcia.' },
          { id: 'y8xpr1', q: 'Dwa koła zębate są zazębione. Duże kręci się w prawo (zgodnie ze wskazówkami zegara). W którą stronę kręci się małe?', options: ['w lewo – w przeciwną stronę', 'w prawo – w tę samą stronę', 'wcale się nie kręci', 'raz w lewo, raz w prawo'], answer: 0, explain: 'Zęby dużego koła popychają zęby małego w przeciwną stronę. Dwa zazębione koła kręcą się w przeciwne strony.' },
          { id: 'nfl7p6', q: 'Koło z 20 zębami jest zazębione z kołem z 10 zębami. Duże koło robi 1 obrót. Ile obrotów robi małe?', options: ['2', '1', '10', '20'], answer: 0, explain: 'Przy 1 obrocie dużego koła przesuwa się 20 zębów. Małe koło ma 10 zębów, więc robi 20 : 10 = 2 obroty.' },
          { id: '5qa1cp', q: 'Koło z 30 zębami jest zazębione z kołem z 10 zębami. Duże koło robi 2 obroty. Ile obrotów robi małe?', options: ['6', '3', '5', '2'], answer: 0, explain: '2 obroty dużego koła to 2 · 30 = 60 zębów. Małe ma 10 zębów: 60 : 10 = 6 obrotów.' },
          { id: 'u02dyu', q: 'Które koło zębate kręci się szybciej: małe czy duże (gdy są zazębione)?', options: ['małe', 'duże', 'oba tak samo'], answer: 0, explain: 'Małe koło ma mniej zębów, więc musi zrobić więcej obrotów – kręci się szybciej.' },
          { id: 'eo9aj9', q: 'Co robi krzywka na obracającym się wałku?', options: ['zamienia obrót w ruch w górę i w dół', 'zmienia kierunek siły, z jaką ciągniesz linę', 'zmniejsza potrzebną siłę, tak jak dźwignia', 'zatrzymuje wałek po jednym pełnym obrocie'], answer: 0, explain: 'Krzywka ma nieokrągły kształt. Gdy się obraca, popycha popychacz w górę i w dół.' },
          { id: 'qv2ps5', q: 'Ile razy popychacz podniesie się i opadnie, gdy krzywka w kształcie jajka zrobi 3 pełne obroty?', options: ['3 razy', '1 raz', '6 razy', 'ani razu'], answer: 0, explain: 'Ruch popychacza powtarza się przy każdym pełnym obrocie krzywki-jajka: 3 obroty – 3 razy w górę i w dół.' },
          { id: 'nx8ln9', q: 'Co to jest mechanizm?', options: ['część maszyny, która zmienia ruch albo siłę', 'każdy przedmiot zrobiony z metalu lub drewna', 'rysunek maszyny narysowany na kartce papieru', 'silnik elektryczny, który napędza zabawkę'], answer: 0, explain: 'Mechanizm zmienia ruch albo siłę, np. obrót w ruch w górę i w dół (krzywka) albo dużą siłę w małą (dźwignia).' },
          { id: 'bn40f0', q: 'W wieku ilu lat dzieci w Anglii są na etapie key stage 2 – tym, na którym poznają mechanizmy na lekcjach techniki?', options: ['7–11 lat', '3–5 lat', '11–14 lat', '14–16 lat'], answer: 0, explain: 'Key stage 2 to Year 3–6, czyli dzieci w wieku 7–11 lat.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'mosty',
        name: 'Mosty i trójkąty',
        level: 2,
        age: [9, 11],
        where: 'Niemcy, Bawaria – szkoła podstawowa, klasy 3–4 (Heimat- und Sachunterricht): modele mostów, profile z papieru, połączenia trójkątne; Szwajcaria (kantony niemieckojęzyczne) – Lehrplan 21, wersja kantonu Zurych, cykl 2 (klasy 3–6): elementy stabilizujące, profile z papieru, stabilność; Anglia – design and technology, key stage 1–2 (5–11 lat): wzmacnianie i usztywnianie konstrukcji',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Dział według standardu „różnicy” (decyzja rodzica 14.11.2026): wspólne z polską szkołą tylko jako przypomnienie, rdzeń – to, czego polska podstawa nie wymaga. POLSKA (tekst podstaw, eli.gov.pl): w częściach dla szkoły podstawowej Dz.U. 2024 poz. 996 i Dz.U. 2026 poz. 378 nie ma usztywniania trójkątami, kratownic, profili z papieru, stabilności konstrukcji ani rodzajów mostów („sztywn”, „usztyw”, „kratown” – 0 trafień; „most” jako budowla – tylko przykład konstrukcji technicznej w warunkach realizacji techniki, 2024/996). Przypomnienie: matematyka kl. IV–VI – „konstruuje trójkąt o danych trzech bokach i ustala możliwość zbudowania trójkąta o zadanych bokach” (2024/996, IX wym. 2), „konstruuje trójkąt o podanych bokach, ustala możliwość zbudowania trójkąta o danych długościach boków” (2026/378, 4. Figury, wym. 10); cechy przystawania trójkątów – kl. VII–VIII (2024/996, VIII wym. 4; 2026/378, 3. Figury, wym. 6); budowa i ocena prostej konstrukcji – zajęcia praktyczno-techniczne kl. IV–VI (2026/378: zadanie „konstrukcyjne”, „testuje w praktyce zmiany konstrukcyjne i materiałowe… – prowadzi ocenę przez modyfikację”) i technika (2024/996: zalety i wady rozwiązań konstrukcyjnych, metoda projektu) – bez trójkątów i mostów. Powiązanie „trzy boki wyznaczają trójkąt → rama z trzech listewek jest sztywna” jest nasze (podstawa go nie robi). INNE KRAJE: (1) Bawaria – LehrplanPLUS Grundschule, Heimat- und Sachunterricht, Jahrgangsstufe 3/4, Lernbereich 6.2 „Bauen und Konstruieren” (lehrplanplus.bayern.de – plan HSU dla klas 3 i 4): „überprüfen und begründen die Stabilität selbst gebauter Brückenmodelle und beschreiben die Merkmale stabiler sowie instabiler Bauweisen”, „fertigen Zeichnungen und einfache Anleitungen ihrer selbst gebauten Modelle an”, „beschreiben Bauweisen von Brücken in ihrer Umgebung oder der Region…”, „vergleichen und bewerten ihre Modelle hinsichtlich Zweck, Materialökonomie und Originalität”; treści: „Konstruktionsprinzipien bei Brückenmodellen (z. B. Balken-, Bogen-, Fachwerk- und Hängebrücken)”, „Mittel zur Erhöhung der Stabilität: Umformungen aus Papier, Pappe (z. B. Winkel-, Zickzack-, U- und Rundprofile), Aussteifungen (z. B. Dreiecksverbindungen)” („z. B.” – przykłady); plan obejmuje klasy 3 i 4 razem; wieku dzieci nie podajemy (nie sprawdzono w dokumencie ministerstwa). Zadanie ISB „Wie geht es über den Fluss? – Ich bin ein Brückenbauer” (Stand 26.04.2016; plik PDF na lehrplanplus.bayern.de): 6 listewek 30 cm na dziecko, budowa w parach lub grupach, „rzeka” – arkusz 40 × 29 cm, obciążanie klockami, karta podpowiedzi z „mostem Leonarda” – „eine Form der Bogenbrücke”, listewki „so ineinander geschoben…, dass sie sich selbst tragen”; s. 4: utrzymał „sehr viele Bauklötze…, ohne ein Gegengewicht oder eine Verankerung”, a jego budowa „fiel den Kindern nicht leicht”; zadanie opisujemy własnymi słowami (warunki ISB: niekomercyjnie, ze źródłem). (2) Szwajcaria – Lehrplan 21 (wspólny program 21 kantonów niemiecko- i wielojęzycznych; sprawdziliśmy tylko wersję kantonu Zurych – wzoru v-fe.lehrplan.ch nie dało się otworzyć, więc piszemy „w Lehrplan 21 / w niemieckojęzycznej części Szwajcarii”, a nie „w Szwajcarii”), wersja kantonu Zurych z 13.03.2017 (zh.lehrplan.ch, wydruki planów „Gestalten” i „Natur, Mensch, Gesellschaft”): TTG.2.B.1.3c, cykl 2 – „können Funktionen von stabilisierenden Elementen in Konstruktionen und Bauten erkennen und anwenden (z.B. Stütze, Verspannung, Verstrebung, Profil)” (Gestalten, s. 35 druku); NMG.5.1.d, cykl 2 – „(z.B. Winkel-, Zickzack- und U-Profile aus Papier und Karton…)”; NMG.5.1.f, cykl 2 – lista pojęć oznaczona symbolem treści obowiązkowych (wg „Überblick”, s. 9 druku: „…dass die aufgezählten Inhalte verbindlich zu bearbeiten sind”) obejmuje „Stabilität” (NMG, s. 41 druku); wskazówki TTG: w procesie projektowym „kann es notwendig sein, einen Schritt zurück zu machen” (s. 8 druku); cykl 2 = klasy 3–6 szkoły podstawowej, liczone po dwóch latach przedszkola (Überblick, „Zyklen”); wieku w latach nie podajemy. (3) Anglia – ${DT}: key stage 1 (Year 1–2, 5–7 lat) – „build structures, exploring how they can be made stronger, stiffer and more stable”; key stage 2 (7–11 lat) – „apply their understanding of how to strengthen, stiffen and reinforce more complex structures”, „evaluate their ideas and products against their own design criteria and consider the views of others”; program nie wymienia mostów, trójkątów ani kratownic (mosty to wybór lekcji); program obowiązuje szkoły prowadzone przez samorząd – akademie i szkoły prywatne nie muszą go stosować (gov.uk/national-curriculum). (4) Pomost – starsze klasy za granicą: Japonia – komentarz MEXT do techniki w gimnazjum (中学校学習指導要領解説 技術・家庭編, s. 27 druku): elementy łączone „w czworokąty, trójkąty, płaszczyzny” i kształt przekroju (断面形状); klasę wybiera szkoła; cechy przystawania trójkątów przyjmuje się w 2. klasie gimnazjum „intuicyjnie i doświadczalnie” (直観的，実験的に; 解説 数学編, s. 115 PDF) – sprawdzanie tego patyczkami już w wieku 9–11 lat to nasza decyzja, nie praktyka Japonii. Korea – 교육부 고시 제2022-33호, [별책10] 기술⋅가정 (gimnazjum), obszar (4), wskazówki stosowania (성취기준 적용 시 고려 사항): unikać zestawów, które wystarczy tylko złożyć („단순히 조립하여 완성할 수 있는 키트 활용을 지양”; tł. nasze) – w ramce dla rodzica. Sposób uczenia i udokumentowane błędne przekonania – lekcje Oak National Academy (thenational.academy, OGL v3.0; linkujemy, nie kopiujemy; to materiały wybrane przez Oak, nie wymagania programu Anglii): Year 1 „Frame structures: bridges” – „Bridges are only found over water.”, „The strongest materials make the best bridges.”, „Testing only happens at the end of the making process.”, wskazówka: kostki tej samej wielkości – „a fairer test”, „Folded triangle shapes are strong.”; Year 2 „Freestanding structures: playgrounds” – „Buttresses, bracing, anchors, wider bases and reinforced sides need to be on every single mock-up model…”, „Structures are all the same.”, stężenia – ukośne podpory tworzące trójkąty, rama A jako szersza podstawa; Year 3 „Shell structures: packaging” – „Packaging can only be reinforced from the inside.”; przyroda Year 2 „Changing shape: review” – „all objects that can be squashed, bent, twisted or stretched will return to their previous shape”. BBC Bitesize KS2 D&T (bbc.co.uk/bitesize; © BBC, tylko link): Year 5–6 – triangulacja, kratownica („a frame structure made with triangles”); Year 3–4 – tektura falista (wiele małych łuków), laminowanie, żebrowanie; konstrukcje szkieletowe i skorupowe, most wiszący – wieże, pomost, liny, „tension”. BBC pisze też, że trójkąt to „the strongest shape” – tego uproszczenia nie przenosimy (nasza ocena). Wiedza – e-materiały zpe.gov.pl: „Konstrukcja trójkąta o danych bokach” (DAJxoIkpo: warunek trójkąta; trzy odcinki łączą się nad albo pod najdłuższym – to, że to lustrzane odbicia tego samego trójkąta, jest nasze), „Cechy przystawania trójkątów” (DNFsMdwmY, cecha bbb), „Połączenia nitowane elementów stalowych blachownic i kratownicy” (D1HVEtt0T: kratownice – konstrukcje z elementów tworzących siatkę lub układ trójkątów, wytrzymałość i sztywność, kratownice w mostach, węzeł), „Słownik pojęć” do „Diagnostyki budowli” (DyXxps6w4: most belkowy; most łukowy – obciążenia przejmuje łuk ściskany i przenosi na podpory na brzegach), „Podział i budowa obiektów inżynierskich wykorzystywanych na kolei” (D63SkN2xl: przęsło, przyczółki), „Budowle inżynieryjne” (DAvAPAIkK: wiadukt – nad przeszkodami innymi niż wodne), „Nowe technologie w architekturze II połowy XIX wieku” (DfVeDJOlh: lina stalowa umożliwiła budowę mostów wiszących o bardzo szerokiej rozpiętości; w słowniczku: przęsła utrzymywane przez układ lin, „dawniej łańcuchów”). Bezpieczeństwo przy obciążaniu modeli – scenariusze ZPE D2UQH5U2Q i D9B4XAUTK (pojemnik pod mostem, ręce nie pod modelem, obserwacja z boku, obciążanie stopniowo). Research listopad 2026: 111 ustaleń sprawdzonych przez drugiego, niezależnego weryfikatora; linki sprawdzone 16.11.2026. Tłumaczenia – nasze. Liczby w kartach pracy i w widżecie (odstęp książek, szerokość rzeki, liczba klocków i listewek) to nasz przykład, nie reguła. Klocki dokładane „nach und nach” i 5 godzin lekcyjnych pochodzą z przykładowego zadania ISB, nie z planu.`,
        theory: `
          <p class="tip">🇵🇱 <b>W polskiej szkole</b> trójkąt z trzech odcinków budujesz na matematyce w klasach 4–6. Tu najpierw krótkie przypomnienie, a potem to, czego uczą dzieci w innych krajach – a polska podstawa programowa tego nie wymaga: dlaczego trójkąt usztywnia konstrukcję, jak wzmocnić kartkę i jak zbudować most.</p>
          <h3>Przypomnienie</h3>
          <ul>
            <li><b>Matematyka, kl. 4–6:</b> z trzech odcinków zbudujesz trójkąt tylko wtedy, gdy <b>dwa krótsze razem są dłuższe od trzeciego</b> – to <b>warunek trójkąta</b>. Np. 3 cm, 4 cm i 6 cm – tak (3 + 4 = 7, a 7 jest więcej niż 6); 2 cm, 3 cm i 7 cm – nie.</li>
            <li><b>Zajęcia techniczne, kl. 4–6</b> (zajęcia praktyczno-techniczne albo technika): budujesz prostą konstrukcję, sprawdzasz ją w praktyce i poprawiasz.</li>
          </ul>
          <h3>🌍 1. Trójkąt trzyma kształt – kwadrat nie</h3>
          <p>Zbuduj kwadrat z czterech listewek połączonych na <b>zawiasach</b> (zawias pozwala listewkom się obracać). Pchnij róg w bok – kwadrat <b>przekrzywi się w romb</b>. Boki są te same, zmieniły się tylko kąty.</p>
          <p>Trójkąt z trzech listewek <b>się nie przekrzywi</b>. Trzy boki <b>wyznaczają kształt</b> trójkąta: trójkąty o takich samych trzech bokach są takie same (przystające), więc kąty nie mogą się zmienić.</p>
          <p class="tip">Dodaj do kwadratu listewkę <b>po przekątnej</b> – powstaną dwa trójkąty i ramka stanie się sztywna. Usztywnianie konstrukcji trójkątami to <b>triangulacja</b>.</p>
          <p>Bawarski program podaje <b>połączenia trójkątne</b> jako przykład usztywnienia modelu. W Anglii program każe od pierwszych klas sprawdzać, jak zrobić konstrukcję <b>mocniejszą, sztywniejszą i stabilniejszą</b>. Dowód, że trzy boki wyznaczają trójkąt (cechy przystawania), poznasz w polskiej szkole w klasach 7–8. My sprawdzamy to patyczkami już teraz – to nasz pomysł.</p>
          <h3>🌍 2. Zastrzał, odciąg, szersza podstawa</h3>
          <p><b>Element stabilizujący</b> to część, która pomaga konstrukcji stać i nie zmieniać kształtu. W niemieckojęzycznej części Szwajcarii (program Lehrplan 21) dzieci w klasach 3–6 rozpoznają i stosują elementy stabilizujące, np. <b>podporę</b>, <b>odciąg</b> (napiętą linkę), <b>zastrzał</b> (ukośną belkę, która z ramą tworzy trójkąt) i <b>profil</b>.</p>
          <p>Lekcje z Anglii (Oak): konstrukcję, która stoi sama, wzmacniają <b>stężenia</b> (ukośne podpory tworzące trójkąty), <b>kotwy</b> i <b>szersza podstawa</b> – np. rama w kształcie litery A na placu zabaw. Nie każda konstrukcja potrzebuje ich wszystkich – to zależy od materiału, wysokości i zadania.</p>
          <h3>🌍 3. Kratownica</h3>
          <p><b>Kratownica</b> to konstrukcja z prętów, które tworzą <b>układ trójkątów</b>. Miejsca, gdzie łączą się pręty, to <b>węzły</b>. Kratownica jest wytrzymała i sztywna. Kratownice stosuje się m.in. w mostach.</p>
          <h3>🌍 4. Mocna kartka</h3>
          <p>Płaska kartka łatwo się ugina. Zagięta jest dużo sztywniejsza, choć papieru jest tyle samo – liczy się <b>kształt</b>. Bawaria podaje kształty (<b>profile</b>): <b>kątownik</b> (zgięcie pod kątem), <b>harmonijkę</b> (zygzak), kształt litery <b>U</b> i <b>rurkę</b>. Szwajcarski Lehrplan 21 – np. kątownik, zygzak i U z papieru i kartonu.</p>
          <p>Lekcje BBC (Anglia) dodają: <b>tektura falista</b> ma w środku wiele małych łuków, <b>laminowanie</b> to sklejanie kilku warstw, a <b>żebrowanie</b> – rząd rurek (np. słomek) między dwiema płaskimi kartkami.</p>
          <p class="tip">W modelu mostu zaginaj kartkę <b>wzdłuż mostu</b> – zagięcia biegną od jednej podpory do drugiej. Równo zagniesz ją przy linijce.</p>
          <h3>🌍 5. Szkielet i skorupa</h3>
          <p>Konstrukcja <b>szkieletowa</b> to części połączone ze sobą – płot, most wiszący, wieżowiec. <b>Skorupowa</b> to cienka, pusta w środku powłoka – pudełko, kask rowerowy. Lekcje Oak: pudełko wzmocnisz <b>od środka</b> (podpora w środku) <b>albo od zewnątrz</b> (druga warstwa, „rękaw”).</p>
          <h3>🌍 6. Cztery rodzaje mostów – i most Leonarda</h3>
          <ul>
            <li><b>belkowy</b> – belki leżą poziomo na podporach; jeden z najprostszych, np. nad małą rzeką,</li>
            <li><b>łukowy</b> – ciężar przejmuje <b>łuk</b>, który jest <b>ściskany</b>, i przenosi go na podpory na brzegach,</li>
            <li><b>kratownicowy</b> – ciężar niesie kratownica z trójkątów,</li>
            <li><b>wiszący</b> – pomost <b>wisi na mocnych linach</b> zawieszonych na wysokich <b>wieżach</b>; liny są <b>rozciągane</b>.</li>
          </ul>
          <p><b>Most Leonarda</b> to odmiana mostu łukowego. Nazwa pochodzi od szkicu Leonarda da Vinci. Listewki są tak przełożone jedna przez drugą, że <b>same się podtrzymują</b> – bez kleju, gwoździ i sznurka. W bawarskiej klasie taki most utrzymał bardzo dużo klocków, ale zbudować go było trudno.</p>
          <p><b>Przęsło</b> – część mostu między podporami. <b>Przyczółki</b> – skrajne podpory, na brzegach.</p>
          <h3>🌍 7. Mosty nie tylko nad wodą</h3>
          <p>Lekcje Oak: mosty przenoszą pieszych (<b>kładka</b>), auta i pociągi – nad wodą, drogami albo torami. <b>Wiadukt</b> prowadzi np. tory nad drogą, a <b>akwedukt</b> przenosi… łodzie!</p>
          <h3>Jak uczą tego w Bawarii?</h3>
          <p>W klasach 3–4, na przedmiocie o najbliższym otoczeniu i świecie, dzieci budują modele mostów i <b>sprawdzają, czy są stabilne</b>. W przykładowym zadaniu bawarskiego instytutu ISB dokładają coraz więcej klocków. <b>Rysują</b> swój model i piszą prostą <b>instrukcję</b>. Opisują <b>mosty w swojej okolicy</b>. Porównują modele według trzech kryteriów: <b>cel</b> (czy model robi to, co ma robić), <b>oszczędność materiału</b> i <b>oryginalność</b>.</p>
          <h3>Jak uczą tego w Anglii i w Szwajcarii?</h3>
          <p>Anglia: program nie wymienia mostów – mówi o wzmacnianiu i usztywnianiu konstrukcji. Dzieci same ustalają <b>kryteria</b> projektu, oceniają swoją pracę i pytają innych o zdanie. Lekcje Oak radzą <b>testować w trakcie budowy</b>, nie tylko na końcu, i obciążać <b>jednakowymi kostkami</b> – wtedy test jest uczciwy. Szwajcaria (Lehrplan 21, kantony niemieckojęzyczne): <b>stabilność</b> to pojęcie obowiązkowe w klasach 3–6, a w projektowaniu czasem trzeba <b>cofnąć się o krok</b> i coś poprawić.</p>
          <h3>Uważaj!</h3>
          <ul>
            <li>Obciążaj tylko <b>lekkimi klockami</b>, kładzionymi po jednym – nie książkami ani butelkami. Pod modelem połóż ręcznik albo postaw pudełko, <b>nie trzymaj rąk pod mostem</b>, patrz z boku.</li>
            <li>Model stawiaj na stabilnym stole. Stosy książek – niskie i na środku stołu.</li>
            <li>Drobne klocki sprzątnij, gdy w domu są małe dzieci.</li>
            <li>Nie używaj wykałaczek ani patyczków do szaszłyków – mają ostre końce. Listewki docina tylko dorosły.</li>
            <li>Gumek recepturek nie naciągaj w stronę twarzy.</li>
          </ul>`,
        infographicNote: 'Na górze – przypomnienie. Niżej – czego uczą dzieci w innych krajach, a polska podstawa tego nie wymaga.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🇵🇱 Przypomnienie (matematyka kl. 4–6)', text: 'trójkąt z 3 odcinków: dwa krótsze razem dłuższe od trzeciego' },
          items: [
            { icon: '🔺', kolor: 1, title: 'Trójkąt', text: 'trzy boki wyznaczają kształt – nie przekrzywi się' },
            { icon: '🔲', kolor: 1, title: 'Kwadrat', text: 'przekrzywia się w romb – dodaj przekątną' },
            { icon: '🌉', kolor: 3, title: 'Kratownica', text: 'pręty w trójkątach, połączone w węzłach' },
            { icon: '📄', kolor: 3, title: 'Mocna kartka', text: 'zagięta: kątownik, harmonijka, U, rurka' },
            { icon: '🏗️', kolor: 5, title: '4 rodzaje mostów', text: 'belkowy, łukowy, kratownicowy, wiszący' },
            { icon: '🪵', kolor: 5, title: 'Most Leonarda', text: 'listewki same się podtrzymują' },
          ],
          bottom: { kolor: 2, title: '🔬 Ocena modelu (Bawaria)', text: 'cel, oszczędność materiału, oryginalność' },
        },
        parent: {
          goal: 'Dziecko sprawdza na modelach, dlaczego trójkąt usztywnia konstrukcję i jak zagięcie wzmacnia kartkę, a potem projektuje most według kryteriów. Nowe względem polskiej podstawy: trójkąt jako usztywnienie (zastrzał, kratownica), profile z papieru, rodzaje mostów, stabilność jako pojęcie (w szwajcarskim Lehrplan 21 – programie kantonów niemieckojęzycznych – obowiązkowe w kl. 3–6), ocena modelu według celu, oszczędności materiału i oryginalności (Bawaria). Wspólne z polską szkołą: warunek trójkąta (matematyka kl. 4–6) i ocena konstrukcji przez próby i poprawki (zajęcia praktyczno-techniczne / technika).',
          time: 'lekcja ok. 15 minut; karta „Kwadrat czy trójkąt?” ok. 15 minut, „Mocna kartka” ok. 25 minut; projekt ok. 45 minut (nasza propozycja – przykładowe zadanie bawarskiego instytutu ISB przewiduje 5 godzin lekcyjnych)',
          mistakes: [
            '„Mosty są tylko nad wodą” – są też nad drogami i torami, a akwedukt przenosi łodzie.',
            '„Najmocniejszy materiał daje najlepszy most” – czasem lepszy jest taki, który trochę się ugina (wiatr, drgania ziemi).',
            '„Testuje się dopiero na końcu” – testuje się w trakcie budowy.',
            '„Każdy model musi mieć wszystkie wzmocnienia” – to zależy od materiału, wysokości i zadania.',
            '„Wszystkie konstrukcje są takie same” – są szkieletowe, skorupowe i z cegieł.',
            '„Opakowanie wzmacnia się tylko od środka” – także od zewnątrz.',
            '„Wszystko, co się wygięło, samo wróci do kształtu” – przeciążony papier może zostać wygięty na stałe.',
          ],
          avoid: [
            'Nie mów „trójkąt to najmocniejszy kształt” – mów „trójkąt nie zmienia kształtu, bo trzy boki wyznaczają jego kształt”. (Strony BBC piszą o „najmocniejszym kształcie” – to uproszczenie; nasza ocena.)',
            'Nie tłumacz, które pręty kratownicy są ściskane, a które rozciągane – w otwartych materiałach znaleźliśmy tu sprzeczność.',
            'Nie dawaj gotowego zestawu do złożenia według instrukcji – lepsze proste materiały, także z odzysku (koreański program techniki dla gimnazjum zaleca unikać zestawów, które wystarczy tylko złożyć).',
            'Zawalony most to nie porażka, tylko dane do poprawki – w szwajcarskich wskazówkach: czasem trzeba cofnąć się o krok.',
          ],
          prepare: [
            'do karty „Kwadrat czy trójkąt?”: 8 jednakowych patyczków po lodach albo słomek, plastelina',
            'do karty „Mocna kartka”: 5 kartek A4, linijka, taśma klejąca, nitka i mała torebka (np. woreczek strunowy), co najmniej 20 jednakowych lekkich klocków, 2 niskie stosy książek, ręcznik albo pudełko pod model',
            'do projektu: ok. 12 płaskich listewek ok. 30 cm (docina dorosły), duży arkusz papieru na „rzekę”, klocki, ewentualnie 4 gumki recepturki',
            'wydrukowane karty z zakładki 🛠️ Zrób',
          ],
          talk: [
            'Jaki most jest najbliżej naszego domu – belkowy, łukowy, kratownicowy czy wiszący? Przejdźmy obok i poszukajmy trójkątów i łuków.',
            'Gdzie na placu zabaw albo w domu widzisz trójkąty, które coś usztywniają?',
            'Po co konstruktor dał tu taki kształt?',
            'Czym różni się kładka od wiaduktu?',
          ],
        },
        activities: [
          {
            id: '86jml5', kind: 'doswiadczenie', title: 'Kwadrat czy trójkąt?', time: '15 minut', adult: false,
            intro: 'Sprawdź, która ramka trzyma kształt: najpierw przewiduj, potem sprawdź i zapisz. Uwaga: przekątna kwadratu jest dłuższa niż jego bok, więc z jednakowych patyczków zrobisz romb z przekątną.',
            safety: ['Sprawdź, czy patyczki nie mają drzazg. Nie używaj wykałaczek ani patyczków do szaszłyków – mają ostre końce. Słomki są najbezpieczniejsze.', 'Plasteliny nie bierz do ust; po pracy umyj ręce.', 'Naciskaj delikatnie, ale wyraźnie – ramka ma się przekrzywić, a nie połamać.'],
            needs: ['8 jednakowych patyczków po lodach albo słomek', 'plastelina (kulki na łączenia)', 'wydrukowana karta'],
            steps: [
              '❓ Zapytaj: która ramka zmieni kształt, gdy pchnę jej róg w bok?',
              '🤔 Przewiduj: wpisz w tabeli przy każdej ramce „tak” albo „nie”.',
              '🔬 Zbuduj kwadrat z 4 patyczków – rogi połącz kulkami plasteliny. Połóż go płasko na stole, przytrzymaj dolny bok, a górny róg pchnij w bok.',
              '🔬 Zbuduj trójkąt z 3 patyczków i zrób to samo.',
              '🔬 Wróć do kwadratu. Przekrzyw go tak, żeby krótsza przekątna była tak długa jak patyczek, i włóż tam ostatni patyczek. Powstał romb z przekątną – dwa trójkąty. Pchnij róg.',
              '📝 Zapisz wyniki. Jeśli plastelina w rogu puściła, dociśnij ją i spróbuj jeszcze raz.',
            ],
            table: { cols: ['Ramka', 'Przewiduję: zmieni kształt?', 'Wynik'], rows: ['kwadrat', 'trójkąt', 'romb z przekątną'] },
            conclusion: 'Kwadrat …, a trójkąt …, bo trzy boki … Przekątna dzieli romb na …',
            expected: 'Kwadrat łatwo przekrzywia się w romb – boki zostają te same, zmieniają się kąty. Trójkąt i romb z przekątną (dwa trójkąty) trzymają kształt: trzy boki wyznaczają kształt trójkąta. Jeśli trójkąt „pływa”, zwykle puszcza plastelina w rogu – dociśnij ją. Wyjaśnienie geometryczne jest nasze; ten sam pomysł – patyczki z plasteliną, a potem trójkąty – pokazuje lekcja BBC dla 9–11-latków.',
            source: 'BBC Bitesize, KS2 Year 5–6 „Strengthening complex structures” (patyczki po lodach i plastelina, potem trójkąty – triangulacja); lekcja Oak National Academy Year 1 „Exploring bridge structures” (trójkąty z zestawów, słomek i patyczków; OGL v3.0); Bawaria – HSU 3/4, 6.2 (usztywnienia, np. połączenia trójkątne). Romb z przekątną zamiast kwadratu z przekątną – nasza zmiana.',
          },
          {
            id: 'kb0rdw', kind: 'doswiadczenie', title: 'Mocna kartka – ile klocków utrzyma?', time: '25 minut', adult: true,
            intro: 'Ta sama kartka, inny kształt. Sprawdź uczciwie, który kształt utrzyma najwięcej klocków.',
            safety: ['Pod model połóż ręcznik albo postaw pudełko. Nie trzymaj rąk pod mostem i patrz z boku – klocki mogą spaść.', 'Dokładaj klocki po jednym. Gdy coś się chwieje – przerwij.', 'Używaj tylko lekkich klocków – nie książek, butelek ani ciężarków.', 'Stosy książek mają być niskie (2–3 książki) i stać na środku stabilnego stołu.', 'Drobne klocki sprzątnij po pracy, jeśli w domu są małe dzieci.'],
            needs: ['5 jednakowych kartek A4 (zwykły papier)', '2 niskie stosy książek tej samej wysokości', 'linijka i taśma klejąca', 'nitka i mała torebka (np. woreczek strunowy)', 'co najmniej 20 jednakowych lekkich klocków (im więcej, tym lepiej)', 'ręcznik albo pudełko pod model', 'wydrukowana karta'],
            steps: [
              '❓ Zapytaj: który kształt kartki utrzyma najwięcej klocków?',
              '🤔 Przewiduj: wpisz w tabeli, ile klocków utrzyma każdy kształt.',
              '🔧 Ustaw stosy książek 20 cm od siebie, a między nimi połóż ręcznik.',
              '🔬 Połóż płaską kartkę na książkach – dłuższym bokiem od stosu do stosu. Na środku zawieś torebkę na pętli z nitki. Wkładaj do torebki klocki po jednym. Zapisz, ile klocków było w torebce, zanim kartka się zgięła i opadła.',
              '🔬 Powtórz z kartką zagiętą w kątownik, w harmonijkę i w literę U oraz zwiniętą w rurkę (sklej ją taśmą). Zaginaj przy linijce, a zagięcia prowadź wzdłuż kartki – od stosu do stosu.',
              '⚖️ Uczciwie: ten sam papier, ten sam odstęp, te same klocki, torebka zawsze na środku. Zmieniasz tylko kształt kartki. Gdy skończą się klocki, a kartka dalej trzyma, wpisz „więcej niż” i liczbę klocków.',
              '📝 Po zdjęciu klocków sprawdź: czy kartka wróciła do kształtu, czy została zgnieciona?',
            ],
            table: { cols: ['Kształt kartki', 'Przewiduję (klocki)', 'Wynik (klocki)', 'Wróciła do kształtu?'], rows: ['płaska', 'kątownik', 'harmonijka', 'litera U', 'rurka'] },
            conclusion: 'Zagięta kartka utrzymała … niż płaska. Najwięcej utrzymał kształt … (jeśli kilka kształtów utrzymało wszystkie klocki – wpisz je wszystkie), bo …',
            expected: 'Zagięte kartki zwykle utrzymują więcej niż płaska – liczy się kształt, a nie ilość papieru. Który kształt wygra, zależy od tego, jak go złożysz: żadne źródło nie podaje tu stałej kolejności, więc twój wynik jest naprawdę twój. Jeśli kilka kształtów utrzymało wszystkie klocki, to też wynik: test ich nie rozróżnił – do porównania potrzeba więcej klocków. Liczb klocków nie sprawdzaliśmy – to nasz przykład. Przeciążony papier może zostać zgnieciony na stałe.',
            source: 'Bawaria – HSU 3/4, 6.2 (profile kątowe, zygzakowe, U i okrągłe; nośność sprawdza się klockami – zadanie ISB „Ich bin ein Brückenbauer”); Szwajcaria – Lehrplan 21, NMG.5.1.d (profile z papieru i kartonu); lekcje Oak National Academy Year 1 („Folded triangle shapes are strong”, zaginanie przy linijce, kostki tej samej wielkości – uczciwy test; OGL v3.0); BBC Bitesize Year 3–4 (karbowanie). Bezpieczeństwo – scenariusze ZPE o testach mostów (pojemnik pod mostem, obserwacja z boku). Odstęp 20 cm, torebka na nitce i liczba klocków – nasz przykład.',
          },
          {
            id: 'whufqi', kind: 'projekt', title: 'Most przez rzekę', time: '45 minut', adult: true,
            intro: 'Zadanie jak w bawarskiej szkole: te same listewki wystarczą nad wąską rzeką, ale nad szeroką są za krótkie – trzeba wymyślić konstrukcję. Zbuduj most, przetestuj go i oceń według bawarskich kryteriów: cel, oszczędność materiału, oryginalność.',
            safety: ['Listewki docina dorosły. Sprawdź, czy nie mają drzazg.', 'Gumek recepturek nie naciągaj w stronę twarzy – mogą strzelić w oko.', 'Obciążaj lekkimi klockami, po jednym, na środek mostu. Nie trzymaj rąk pod mostem i patrz z boku.', 'Bez pistoletu do kleju na gorąco.', 'Drobne klocki sprzątnij, jeśli w domu są małe dzieci.'],
            needs: ['ok. 12 płaskich listewek ok. 30 cm (np. z marketu budowlanego, docięte przez dorosłego; w bawarskim zadaniu: 6 na dziecko, budowa w parach lub grupach)', 'duży arkusz papieru albo sklejone kartki – narysuj na nim rzekę', 'jednakowe lekkie klocki', 'ołówek i kartka na rysunek', 'do łatwiejszej wersji: 4 gumki recepturki'],
            constraints: ['rzeka wąska – 25 cm, szeroka – 40 cm (narysuj obie)', 'most nie może dotykać papieru w „rzece” – chyba że wcześniej ustalicie, że wolno postawić podporę w wodzie (w bawarskiej klasie dzieci się o to spierały)', 'bez kleju i taśmy; wersja łatwiejsza – z 4 gumkami', 'zapisz, ile listewek zużyłeś'],
            steps: [
              'Zbuduj most nad wąską rzeką. Ile listewek wystarczyło?',
              'Narysuj dwa pomysły na most nad szeroką rzeką – ze strzałkami i podpisami.',
              'Zbuduj lepszy pomysł i testuj go w trakcie: połóż klocek, sprawdź, popraw.',
              'Test końcowy: kładź na środek jednakowe klocki po jednym – 1, potem 3, potem 5. Zapisz, ile utrzymał.',
              'Zawalił się? Cofnij się o krok, popraw i sprawdź jeszcze raz. Gdy utkniesz, poproś dorosłego o zdjęcia mostów Leonarda zbudowanych przez dzieci w Bawarii (zakładka 🔗 Materiały, zadanie ISB, s. 4–5).',
              'Narysuj gotowy most i napisz instrukcję w 3–5 krokach.',
              'Poproś kogoś z domu o opinię: co jest dobre, co poprawić – i jeszcze jedna dobra rzecz.',
            ],
            criteria: [
              'Cel: most stoi sam i przechodzi nad szeroką rzeką.',
              'Most utrzymał 1, potem 3, potem 5 klocków.',
              'Oszczędność materiału: zapisałem, ile listewek zużyłem, i sprawdziłem, czy da się mniej.',
              'Oryginalność: to mój pomysł albo moja wersja – nie budowałem według gotowej instrukcji.',
              'Narysowałem most i napisałem instrukcję.',
            ],
            table: { cols: ['Próba', 'Ile listewek?', 'Ile klocków utrzymał?'], rows: ['wąska rzeka', 'szeroka – próba 1', 'szeroka – próba 2', 'szeroka – próba 3'] },
            conclusion: 'Najlepszy był most …, bo … Następnym razem zmienię …',
            source: 'Bawaria – zadanie ISB „Wie geht es über den Fluss? – Ich bin ein Brückenbauer” (kl. 3/4: listewki 30 cm, dwie szerokości „rzeki”, obciążanie klockami, karta podpowiedzi „most Leonarda”, zdjęcia mostów zbudowanych przez dzieci; opisane własnymi słowami) i HSU 3/4, 6.2 (rysunek i instrukcja; ocena według celu, oszczędności materiału i oryginalności); Anglia – program D&T key stage 2 (szkice z opisami, własne kryteria, zdanie innych) i lekcja Oak „Testing bridge structures” (test w trakcie, 1, 3 i 5 kostek, opinia „jak kanapka”; OGL v3.0); Szwajcaria – wskazówki do TTG (czasem trzeba cofnąć się o krok). Szerokości rzeki, liczba listewek i gumki – nasza adaptacja.',
          },
        ],
        materials: [
          { type: 'lekcja', title: 'Konstrukcja trójkąta o danych bokach – kiedy odcinki się spotkają?', url: 'https://zpe.gov.pl/a/konstrukcja-trojkata-o-danych-bokach/DAJxoIkpo', source: 'ZPE (zpe.gov.pl) – matematyka, szkoła podstawowa', license: 'animacje CC BY 3.0', note: 'Animacje: z odcinków 6, 3 i 4 cm składa się trójkąt – końce spotykają się nad albo pod najdłuższym odcinkiem. Jest też warunek trójkąta. To przypomnienie z polskiej matematyki.', expect: 'Konstrukcja trójkąta' },
          { type: 'zdjecia', title: 'Galeria: mosty belkowe, łukowe, kładka, wiadukty', url: 'https://zpe.gov.pl/a/budowle-inzynieryjne/DAvAPAIkK', source: 'ZPE (zpe.gov.pl) – kształcenie zawodowe, kolej', license: 'zdjęcia głównie CC BY-SA 3.0', note: 'Zdjęcia prawdziwych mostów do rozpoznawania: belkowe, łukowe, kładka dla pieszych, wiadukty. Tekst jest dla szkół zawodowych – oglądaj zdjęcia razem z dorosłym.', expect: 'Mosty belkowe' },
          { type: 'lekcja', title: 'Strengthening complex structures – trójkąty i kratownica', url: 'https://www.bbc.co.uk/bitesize/topics/z7s6vj6/articles/zr6qh4j', lang: 'en', source: 'BBC Bitesize (Anglia) – KS2, Year 5–6', license: '© BBC – tylko link', note: 'Tekst, film i quiz dla 9–11-latków: rama z patyczków po lodach i plasteliny, potem trójkąty i most kratownicowy. Po angielsku – z dorosłym. Film może nie działać poza Wielką Brytanią.', expect: 'Strengthening complex structures' },
          { type: 'lekcja', title: 'Strengthening cardboard structures – mocna tektura', url: 'https://www.bbc.co.uk/bitesize/topics/z7s6vj6/articles/zv78mbk', lang: 'en', source: 'BBC Bitesize (Anglia) – KS2, Year 3–4', license: '© BBC – tylko link', note: 'Tektura falista (wiele małych łuków), laminowanie i żebrowanie; test klockiem przed wzmocnieniem i po nim. Po angielsku – z dorosłym. Film może nie działać poza Wielką Brytanią.', expect: 'Strengthening cardboard structures' },
          { type: 'lekcja', title: 'Frame and shell structures – szkielet i skorupa', url: 'https://www.bbc.co.uk/bitesize/articles/zbmw6rd', lang: 'en', source: 'BBC Bitesize (Anglia) – KS2', license: '© BBC – tylko link', note: 'Konstrukcje szkieletowe (płot, most wiszący, wieżowiec) i skorupowe (kask rowerowy, kadłub samolotu). Po angielsku – z dorosłym.', expect: 'Frame and shell structures' },
          { type: 'lekcja', title: 'Creating and reinforcing playground structures – stężenia i szersza podstawa', url: 'https://www.thenational.academy/pupils/programmes/design-technology-primary-year-2/units/freestanding-structures-playgrounds/lessons/creating-and-reinforcing-playground-structures/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Year 2 (6–7 lat)', license: 'OGL v3.0', note: 'Lekcja z filmem dla młodszych: jak wzmocnić konstrukcję stojącą samodzielnie (stężenia z trójkątów, kotwy, szersza podstawa). Po angielsku – z dorosłym.', expect: 'Creating and reinforcing playground structures' },
          { type: 'lekcja', title: 'Testing bridge structures – uczciwy test mostu', url: 'https://www.thenational.academy/pupils/programmes/design-technology-primary-year-1/units/frame-structures-bridges/lessons/testing-bridge-structures/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Year 1 (5–6 lat)', license: 'OGL v3.0', note: 'Lekcja z filmem dla młodszych – na rozgrzewkę: test mostu jednakowymi kostkami. Po angielsku – z dorosłym.', expect: 'Testing bridge structures' },
          { type: 'lekcja', title: 'Strengthen packaging – jak wzmocnić pudełko', url: 'https://www.thenational.academy/pupils/programmes/design-technology-primary-year-3/units/shell-structures-packaging/lessons/strengthen-packaging/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Year 3 (7–8 lat)', license: 'OGL v3.0', note: 'Lekcja z filmem: skorupę (opakowanie) wzmacnia się od środka i od zewnątrz. Po angielsku – z dorosłym; nożyczki tylko przy dorosłym.', expect: 'Strengthen packaging' },
          { type: 'dokument', forParent: true, title: 'Plan HSU 3/4 (Bawaria) – Lernbereich 6.2 „Bauen und Konstruieren”', url: 'https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/3/hsu', lang: 'de', source: 'LehrplanPLUS (ISB, Bawaria)' },
          { type: 'dokument', forParent: true, title: 'Zadanie ISB „Ich bin ein Brückenbauer” – listewki, rzeka, most Leonarda (zdjęcia: s. 4–5)', url: 'https://www.lehrplanplus.bayern.de/fm/71/Ich%20bin%20ein%20Br%C3%BCckenbauer.pdf', lang: 'de', source: 'ISB Bawaria – zadanie ilustrujące, kl. 3/4', note: 'Przebieg zadania, rozmowa klasy (podpory w rzece, przeciwwaga) i zdjęcia mostów Leonarda zbudowanych przez dzieci.' },
          { type: 'dokument', forParent: true, title: 'Program design and technology Anglii, key stages 1–2 (s. 2–3: „stronger, stiffer…”)', url: 'https://assets.publishing.service.gov.uk/media/5a7ca43640f0b6629523adc1/PRIMARY_national_curriculum_-_Design_and_technology.pdf', lang: 'en', source: 'Department for Education (gov.uk)' },
          { type: 'dokument', forParent: true, title: 'Jednostka Oak „Frame structures: bridges” (Year 1) – 8 lekcji, cele i typowe błędne przekonania', url: 'https://www.thenational.academy/teachers/programmes/design-technology-primary-ks1/units/frame-structures-bridges/lessons', lang: 'en', source: 'Oak National Academy (strona dla nauczyciela)', license: 'OGL v3.0', note: 'W lekcji „Exploring bridge structures” łączniki z pianek i spaghetti – uwaga na alergie.' },
          { type: 'lekcja', forParent: true, title: 'Cechy przystawania trójkątów – cecha bok–bok–bok (matematyka kl. 7–8)', url: 'https://zpe.gov.pl/a/cechy-przystawania-trojkatow/DNFsMdwmY', source: 'ZPE (zpe.gov.pl) – matematyka', license: 'CC BY 3.0', note: 'Dla chętnych i dla rodzica: dlaczego trzy boki wyznaczają trójkąt – w polskiej szkole w kl. 7–8.', expect: 'Cechy przystawania trójkątów' },
          { type: 'dokument', forParent: true, title: 'Komentarz MEXT do techniki w gimnazjum (Japonia) – trójkąty i kształt przekroju: s. 27–28 druku', url: 'https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_009.pdf', lang: 'ja', source: 'Ministerstwo edukacji Japonii (MEXT), 中学校学習指導要領解説 技術・家庭編' },
        ],
        flashcards: [
          ['Warunek trójkąta (matematyka kl. 4–6)', 'dwa krótsze odcinki razem muszą być dłuższe od trzeciego'],
          ['Dlaczego trójkąt z listewek jest sztywny?', 'trzy boki wyznaczają kształt trójkąta – kąty nie mogą się zmienić'],
          ['Kwadrat z listewek na zawiasach', 'przekrzywia się w romb: boki te same, kąty inne'],
          ['Jak usztywnić kwadratową ramkę?', 'dodać listewkę po przekątnej – powstaną dwa trójkąty'],
          ['Triangulacja', 'usztywnianie konstrukcji trójkątami'],
          ['Zastrzał', 'ukośna belka, która z ramą tworzy trójkąt'],
          ['Elementy stabilizujące (np. w Szwajcarii)', 'np. podpora, odciąg, zastrzał, profil'],
          ['Szersza podstawa', 'np. rama w kształcie litery A – konstrukcja stoi pewniej'],
          ['Kratownica', 'konstrukcja z prętów tworzących układ trójkątów'],
          ['Węzeł', 'miejsce, w którym łączą się pręty kratownicy'],
          ['Profil z kartki', 'zagięta kartka: kątownik, harmonijka, U, rurka – sztywniejsza niż płaska'],
          ['Szkielet i skorupa', 'szkielet – części połączone ze sobą (płot, most wiszący); skorupa – cienka, pusta w środku powłoka (pudełko, kask)'],
          ['Most belkowy', 'belki leżą poziomo na podporach'],
          ['Most łukowy', 'ściskany łuk przenosi ciężar na podpory na brzegach'],
          ['Most kratownicowy', 'ciężar niesie kratownica z trójkątów'],
          ['Most wiszący', 'pomost wisi na linach zawieszonych na wysokich wieżach; liny są rozciągane'],
          ['Most Leonarda', 'odmiana mostu łukowego: listewki same się podtrzymują, bez kleju i gwoździ'],
          ['Mosty nie tylko nad wodą', 'kładka dla pieszych, wiadukt nad drogą, akwedukt dla łodzi'],
          ['Przęsło', 'część mostu między podporami'],
          ['Przyczółki', 'skrajne podpory mostu, na brzegach'],
          ['Uczciwy test mostu', 'jednakowe klocki, kładzione po jednym na środek'],
          ['Ocena modelu (Bawaria)', 'cel, oszczędność materiału, oryginalność'],
        ],
        questions: [
          // przypomnienie (polska matematyka kl. 4–6)
          { id: 'f85rxu', q: 'Z których trzech odcinków zbudujesz trójkąt?', options: ['3 cm, 4 cm i 6 cm', '2 cm, 3 cm i 7 cm', '1 cm, 2 cm i 5 cm'], sayOptions: ['3, 4 i 6 centymetrów', '2, 3 i 7 centymetrów', '1, 2 i 5 centymetrów'], answer: 0, explain: 'Dwa krótsze odcinki razem muszą być dłuższe od trzeciego: 3 + 4 = 7, a 7 > 6. W pozostałych: 2 + 3 = 5 < 7 i 1 + 2 = 3 < 5 – końce się nie spotkają.', sayExplain: 'Dwa krótsze odcinki razem muszą być dłuższe od trzeciego: 3 dodać 4 to 7, a 7 jest większe od 6. W pozostałych suma dwóch krótszych jest mniejsza od trzeciego – końce się nie spotkają.' },
          // 1. trójkąt trzyma kształt
          { id: 'lltla3', q: 'Kwadrat z czterech listewek połączonych na zawiasach naciskasz z boku. Co się stanie?', options: ['przekrzywi się w romb', 'zostanie kwadratem'], answer: 0, explain: 'Zawiasy pozwalają zmieniać kąty. Boki zostają te same, a kwadrat przekrzywia się w romb.',
            why: { options: ['te same cztery boki pasują do wielu rombów', 'nacisk skraca listewki w kwadracie', 'listewki w kwadracie same się wyginają'], answer: 0, explain: 'Te same cztery boki pasują do kwadratu i do wielu rombów – kąty mogą się zmieniać. W trójkącie trzy boki wyznaczają kształt.', optionExplain: ['', 'Listewki mają tę samą długość przed naciskiem i po nim – zmieniają się tylko kąty.', 'Listewki zostają proste – zmieniają się tylko kąty między nimi.'] } },
          { id: 'b5063p', q: 'Dlaczego trójkąt z listewek na zawiasach jest sztywny?', options: ['trzy boki wyznaczają kształt trójkąta', 'trójkąt robi się z grubszych listewek', 'trójkąt ma trzy kąty proste', 'trójkąt jest cięższy niż kwadrat'], answer: 0, explain: 'Gdy długości trzech boków są ustalone, trójkąt ma jeden kształt – jego kąty nie mogą się zmienić. (Da się go złożyć „nad” albo „pod” najdłuższym bokiem, ale to ten sam trójkąt w lustrzanym odbiciu – to nasze wyjaśnienie.)' },
          { id: '79u1jx', q: 'Jak usztywnić kwadratową ramkę z listewek?', options: ['dodać listewkę po przekątnej', 'pomalować ramkę grubą farbą', 'wyjąć jedną z listewek'], answer: 0, explain: 'Przekątna dzieli kwadrat na dwa trójkąty, a trójkąty trzymają kształt.' },
          {
            id: 'dzk2jj', q: 'Ramki są z listewek połączonych na zawiasach. Którą ramkę da się przekrzywić?', noShuffle: true,
            svg: `<svg viewBox="0 0 360 140" role="img" aria-label="Trzy ramki z listewek z zawiasami w rogach. A: kwadrat. B: kwadrat z listewką po przekątnej. C: trójkąt">
              <g class="f4 s4 sw"><path d="M30,20 H110 V100 H30 Z" fill="none"/><path d="M150,20 H230 V100 H150 Z M150,100 L230,20" fill="none"/><path d="M270,100 H350 L310,25 Z" fill="none"/></g>
              <g class="ln"><circle cx="30" cy="20" r="5" class="bg"/><circle cx="110" cy="20" r="5" class="bg"/><circle cx="110" cy="100" r="5" class="bg"/><circle cx="30" cy="100" r="5" class="bg"/>
                <circle cx="150" cy="20" r="5" class="bg"/><circle cx="230" cy="20" r="5" class="bg"/><circle cx="230" cy="100" r="5" class="bg"/><circle cx="150" cy="100" r="5" class="bg"/>
                <circle cx="270" cy="100" r="5" class="bg"/><circle cx="350" cy="100" r="5" class="bg"/><circle cx="310" cy="25" r="5" class="bg"/></g>
              <g class="tx-b" text-anchor="middle"><text x="70" y="128">A</text><text x="190" y="128">B</text><text x="310" y="128">C</text></g>
            </svg>`,
            options: ['A', 'B', 'C'], answer: 0, explain: 'A to sam kwadrat – przekrzywi się w romb. B ma przekątną, czyli dwa trójkąty, a C jest trójkątem – obie trzymają kształt.',
          },
          { id: 'bp8gyc', q: 'Prawda czy fałsz?\nTrójkąt z listewek na zawiasach da się przekrzywić tak samo jak kwadrat.', options: TF, noShuffle: true, answer: 1, explain: 'Fałsz. Trzy boki wyznaczają kształt trójkąta – trójkąt jest sztywny. Przekrzywia się kwadrat.' },
          { id: 'us68tb', q: 'Ramka-kwadrat ma 4 węzły i 4 pręty – i się przekrzywia. Ile prętów musi mieć najmniej, żeby trzymała kształt?', options: ['5', '7', '6', '8'], answer: 0, explain: 'Wystarczy dodać 1 pręt po przekątnej: 4 + 1 = 5. Powstają dwa trójkąty. Druga przekątna nie jest już potrzebna.', sayExplain: 'Wystarczy dodać jeden pręt po przekątnej: 4 dodać 1 to 5. Powstają dwa trójkąty. Druga przekątna nie jest już potrzebna.' },
          // 2. elementy stabilizujące
          { id: 'n7qzys', q: 'Jak nazywa się ukośna belka, która usztywnia ramę?', options: ['zastrzał', 'odciąg', 'podpora'], answer: 0, explain: 'Zastrzał to ukośna belka. Z dwoma bokami ramy tworzy trójkąt, a trójkąt trzyma kształt. Odciąg to napięta linka. W niemieckojęzycznej części Szwajcarii (program Lehrplan 21) dzieci poznają elementy stabilizujące, np. podporę, odciąg, zastrzał i profil.' },
          { id: 'rabfsh', q: 'Rama huśtawki na placu zabaw ma nogi rozstawione jak litera A. Po co?', options: ['żeby stała pewnie i się nie przekrzywiała', 'żeby była lżejsza niż z prostymi nogami', 'żeby łatwiej ją było pomalować farbą'], answer: 0, explain: 'Nogi w kształcie litery A tworzą trójkąt i szerszą podstawę. Lekcje Oak (Anglia) podają ramę A na placu zabaw jako przykład szerszej podstawy (huśtawka to nasz przykład).' },
          { id: 'mgq29t', q: 'Budujesz model wieży z kartonu. Czy każdy taki model musi mieć zastrzały, kotwy i szerszą podstawę?', options: ['nie – dobiera się je do modelu', 'tak – każde wzmocnienie pomaga', 'nie – wzmocnienia psują wieżę'], answer: 0, explain: 'Nie każda konstrukcja potrzebuje wszystkich wzmocnień. Dobierasz te, które są potrzebne.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): każdy model musi mieć wszystkie wzmocnienia. A dobiera się je do materiału, wysokości i zadania.', 'Dobrze dobrane wzmocnienie pomaga – nie psuje konstrukcji.'],
            why: { options: ['modele różnią się materiałem, wysokością i zadaniem', 'wzmocnienia przydają się w budynkach, nie w modelach', 'karton jest lekki, więc wiatr go nie przewróci'], answer: 0, explain: 'Lekcje Oak (Anglia): przypory, stężenia, kotwy i szersza podstawa nie są potrzebne w każdym modelu – to zależy od materiału, wielkości, wysokości i tego, do czego służy konstrukcja.', optionExplain: ['', 'Wzmocnienia działają też w modelach – właśnie na modelach się je sprawdza.', 'Lekki karton łatwo przewrócić – czasem właśnie on potrzebuje szerszej podstawy albo kotwy.'] } },
          // 3. kratownica
          { id: 'o6ms5v', q: 'Co to jest kratownica?', options: ['konstrukcja z prętów tworzących trójkąty', 'most zbudowany z jednej grubej belki', 'lina rozpięta między dwiema wieżami'], answer: 0, explain: 'Kratownica to układ prętów połączonych w trójkąty. Dzięki trójkątom jest sztywna.' },
          { id: '19qejw', q: 'Jak nazywa się miejsce, w którym łączą się pręty kratownicy?', options: ['węzeł', 'przęsło', 'pomost'], answer: 0, explain: 'Pręty kratownicy łączą się w węzłach.' },
          // 4. mocna kartka
          { id: 'hpul3x', q: 'Jak wzmocnić kartkę papieru w modelu mostu?', options: ['zagiąć ją, np. w harmonijkę', 'zmoczyć ją dokładnie wodą', 'pociąć ją na cienkie paski'], answer: 0, explain: 'Zagięta kartka – kątownik, harmonijka, kształt litery U, rurka – jest dużo sztywniejsza niż płaska. Takie profile z papieru podaje program z Bawarii.' },
          { id: 'cmonpu', q: 'Dwie takie same kartki leżą na dwóch stosach książek. Jedną złożono w harmonijkę – zagięcia biegną od stosu do stosu. Która utrzyma więcej klocków?', options: ['ta w harmonijkę', 'ta płaska', 'obie tyle samo'], answer: 0, explain: 'Zagięta kartka jest sztywniejsza – utrzyma więcej klocków.',
            why: { options: ['liczy się kształt kartki, a nie ilość papieru', 'w harmonijce jest więcej papieru niż w płaskiej', 'harmonijka jest cięższa, więc mocniej leży'], answer: 0, explain: 'Obie kartki mają tyle samo papieru. Różni je kształt: zagięcia sprawiają, że kartka trudniej się ugina. W Japonii wpływ kształtu przekroju na wytrzymałość poznaje się dopiero w gimnazjum.', optionExplain: ['', 'To ta sama kartka A4 – papieru jest tyle samo, zmienił się tylko kształt.', 'Kartka waży tyle samo przed złożeniem i po nim.'] } },
          { id: 'wqhzc9', q: 'Przeciążyłeś most z kartki i mocno się wygiął. Co będzie po zdjęciu klocków?', options: ['może zostać wygięty na stałe', 'sam wróci do dawnego kształtu'], answer: 0, explain: 'Przeciążony papier często zostaje zgnieciony – nie wraca sam do dawnego kształtu.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): wszystko, co się wygięło, wraca do kształtu. Tak robi np. gumka, ale nie zgnieciony papier.'],
            why: { options: ['papier nie odskakuje z powrotem jak gumka', 'klocki zostawiły w papierze swój ciężar', 'kartka przykleiła się do stosu książek'], answer: 0, explain: 'Lekcje Oak (Anglia): niektóre materiały po zgnieceniu albo wygięciu nie wracają same do dawnego kształtu – gumka wraca, zgnieciony papier nie. Dlatego w karcie pracy zapisujesz, czy kartka wróciła do kształtu.', optionExplain: ['', 'Ciężar znika razem z klockami – papier nie robi się od nich cięższy.', 'Kartka leży luźno na książkach – zostaje wygięta, bo papier się zgniótł.'] } },
          // 5. szkielet i skorupa
          { id: 'zvibka', q: 'Most z prętów i pudełko po płatkach. Co jest prawdą?', options: ['most to szkielet, a pudełko – skorupa', 'oba są zbudowane tak samo', 'most to skorupa, a pudełko – szkielet'], answer: 0, explain: 'Szkielet to pręty połączone ze sobą. Skorupa to cienka, pusta w środku powłoka – jak pudełko albo kask.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): wszystkie konstrukcje są takie same. A most z prętów i pudełko są zbudowane zupełnie inaczej.', 'Odwrotnie: szkielet to pręty połączone ze sobą, a skorupa – cienka, pusta w środku powłoka.'],
            why: { options: ['most ma pręty, a pudełko – cienkie ścianki', 'most jest duży, a pudełko jest małe', 'most jest z metalu, a pudełko z kartonu'], answer: 0, explain: 'Liczy się budowa: szkielet to części połączone ze sobą, a skorupa – cienka, pusta w środku powłoka. Strony BBC podają przykłady: płot i most wiszący to szkielety, kask rowerowy – skorupa.', optionExplain: ['', 'Wielkość nie decyduje – mały płotek z patyczków też jest szkieletem.', 'Materiał nie decyduje – kask rowerowy to skorupa, choć nie jest z kartonu.'] } },
          { id: '5th3ot', q: 'Pudełko z kartonu jest za słabe. Gdzie można dodać wzmocnienie?', options: ['w środku i na zewnątrz', 'wyłącznie w środku, podporą', 'na wierzchu, grubą farbą'], answer: 0, explain: 'Lekcje Oak (Anglia): opakowanie (skorupę) wzmacnia się od środka – podporą – i od zewnątrz – drugą warstwą kartonu (laminowanie) albo „rękawem”.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): opakowanie wzmacnia się tylko od środka. Druga warstwa kartonu z zewnątrz też wzmacnia.', 'Farba to tylko cienka warstwa koloru – nie wzmacnia kartonu.'] },
          // 6. mosty
          { id: 'tgn29e', q: 'W którym moście belki leżą poziomo na podporach?', options: ['w belkowym', 'w łukowym', 'w wiszącym'], answer: 0, explain: 'Most belkowy to jedna z najprostszych konstrukcji: belki ułożone na podporach.' },
          { id: 'so2n7f', q: 'W którym moście pomost wisi na linach zawieszonych na wysokich wieżach?', options: ['w wiszącym', 'w belkowym', 'w łukowym'], answer: 0, explain: 'Most wiszący ma zwykle dwie lub więcej wież i pomost, który wisi na mocnych linach.' },
          { id: 'enx7j4', q: 'Pomost mostu wiszącego wisi na linach. Co się dzieje z linami?', options: ['są rozciągane', 'są ściskane', 'są skręcane'], answer: 0, explain: 'Pomost ciągnie liny w dół – liny są rozciągane, jak sznurek, na którym coś wisi. Stal dobrze znosi rozciąganie – stalowe liny pozwoliły budować mosty wiszące o bardzo dużej rozpiętości. Dawniej pomost wieszano też na łańcuchach.' },
          { id: 'zfd569', q: 'Jak pracuje łuk w moście łukowym?', options: ['jest ściskany i przenosi ciężar na podpory', 'jest rozciągany jak lina, na której wisi pomost', 'nie dźwiga ciężaru, bo zdobi most'], answer: 0, explain: 'Ciężar przejmuje łuk, który jest ściskany, i przenosi go na podpory na brzegach.' },
          { id: '6iuaok', q: 'Idziesz przez most w swoim mieście. Pod jezdnią widzisz wielki łuk oparty na brzegach. Jaki to most?', options: ['łukowy', 'wiszący', 'kratownicowy'], answer: 0, explain: 'Łuk przejmuje ciężar i przenosi go na podpory na brzegach – to most łukowy. W Bawarii dzieci opisują mosty z okolicy, korzystając z tego, czego nauczyły się przy modelach.' },
          { id: '7a7f24', q: 'Co trzyma w całości most Leonarda z listewek?', options: ['listewki podtrzymują się nawzajem', 'przeciwwaga z klocków na brzegach', 'listewki wbite w podłoże'], answer: 0, explain: 'Listewki są tak przełożone jedna przez drugą, że same się podtrzymują – bez kleju i gwoździ. To odmiana mostu łukowego. W bawarskiej klasie taki most utrzymał bardzo dużo klocków bez przeciwwagi i bez zakotwienia.' },
          { id: '4ohf2q', q: 'Jak nazywa się część mostu między dwiema podporami?', options: ['przęsło', 'przyczółek', 'węzeł'], answer: 0, explain: 'Przęsło to część mostu rozpięta między podporami.' },
          { id: 'f82w3z', q: 'Co to są przyczółki?', options: ['skrajne podpory mostu', 'pręty ułożone w trójkąty', 'liny, na których wisi pomost'], answer: 0, explain: 'Przyczółki to podpory skrajne – na brzegach. Opiera się na nich przęsło.' },
          // 7. mosty nie tylko nad wodą
          { id: 'k5sc12', q: 'Nad czym może przechodzić most?', options: ['nad wodą, drogą albo torami', 'tylko nad rzeką albo jeziorem'], answer: 0, explain: 'Lekcje Oak (Anglia): mosty są nie tylko nad wodą. Kładka przenosi pieszych, auta przejeżdżają mostami nad wodą, drogami i torami, wiadukt prowadzi np. tory nad drogą, a akwedukt przenosi łodzie.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): mosty są tylko nad wodą. A wiadukt prowadzi drogę albo tory nad inną drogą.'] },
          // 8. jak pracuje inżynier
          { id: 'z9xxgm', q: 'Most ma stać tam, gdzie często mocno wieje. Jaki materiał wybrać?', options: ['mocny i trochę giętki', 'najmocniejszy – im mocniejszy, tym lepiej', 'najlżejszy, nawet jeśli łatwo pęka'], answer: 0, explain: 'Najmocniejszy nie zawsze jest najlepszy. Przy wietrze lepszy bywa materiał mocny, ale trochę giętki.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): najmocniejsze materiały dają najlepszy most. Czasem lepszy jest taki, który trochę się ugina.', 'Materiał, który łatwo pęka, nie nadaje się na most.'],
            why: { options: ['przy wietrze trochę się ugnie, zamiast pęknąć', 'giętki materiał jest lżejszy, więc wiatr go nie ruszy', 'giętki materiał nie przepuszcza wiatru'], answer: 0, explain: 'Lekcje Oak (Anglia): zamiast najmocniejszych materiałów czasem lepiej użyć takich, które trochę się uginają – to ważne, gdy wieje albo trzęsie się ziemia.', optionExplain: ['', 'Giętki nie znaczy lżejszy – a lekki przedmiot wiatr porusza łatwiej, nie trudniej.', 'Wiatr opływa most bez względu na to, czy materiał jest giętki – liczy się, czy most to wytrzyma.'] } },
          { id: 'j94kv0', q: 'Budujesz model mostu. Kiedy sprawdzać, czy wytrzyma?', options: ['w trakcie budowy i na końcu', 'raz – gdy most jest gotowy', 'przed budową – na rysunku'], answer: 0, explain: 'Testuj w trakcie budowy – wtedy od razu widzisz, co poprawić – i jeszcze raz na końcu.',
            optionExplain: ['', 'Częste błędne przekonanie (lekcje Oak): testuje się dopiero na końcu. Wtedy trudno już coś poprawić.', 'Rysunek pomaga zaplanować, ale nie pokaże, ile most naprawdę utrzyma.'],
            why: { options: ['w trakcie widać, co poprawić, zanim skończysz', 'test w trakcie budowy wzmacnia listewki', 'na końcu nie ma już czasu na test'], answer: 0, explain: 'Lekcje Oak (Anglia): testowanie nie dzieje się tylko na końcu – inżynierowie testują w trakcie budowy, żeby zmieniać i ulepszać projekt.', optionExplain: ['', 'Test niczego nie wzmacnia – pokazuje tylko, co trzeba poprawić.', 'Na końcu też testujesz – ale wtedy trudno coś zmienić.'] } },
          { id: 'bz06b5', q: 'Porównujesz, ile klocków utrzymają dwa mosty. Jak zrobić uczciwy test?', options: ['te same klocki, kładzione na środek', 'na jeden most duże, na drugi małe', 'na jeden kładziesz, na drugi rzucasz'], answer: 0, explain: 'Uczciwy test: zmieniasz tylko most, a klocki i sposób kładzenia zostają te same. Lekcje Oak radzą obciążać kostkami tej samej wielkości. Klocki kładź po jednym – rzucanie jest niebezpieczne.' },
          { id: 't1kve8', q: 'Dwa mosty nad tą samą rzeką utrzymały po 5 klocków. Pierwszy zbudowano z 6 listewek, drugi z 10. Który lepiej oszczędza materiał?', options: ['pierwszy', 'drugi', 'oba tak samo'], answer: 0, explain: 'Oba spełniły zadanie, ale pierwszy zużył mniej listewek: 6 < 10. W Bawarii dzieci oceniają modele według celu, oszczędności materiału i oryginalności.', sayExplain: 'Oba spełniły zadanie, ale pierwszy zużył mniej listewek: 6 to mniej niż 10. W Bawarii dzieci oceniają modele według celu, oszczędności materiału i oryginalności.' },
        ],
      },
    ],
  });
})();
