/* 🌍 Świat – nauka z innych krajów: maszyny i konstrukcje.
 * Ścieżka POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Działy ułożone według tematów, nie klas: level (1–3), requires ('przedmiot/dział'), where – gdzie się tego uczą.
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
    ],
  });
})();
