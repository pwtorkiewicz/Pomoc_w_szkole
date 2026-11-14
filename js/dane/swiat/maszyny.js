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
        where: 'Niemcy, Bawaria – szkoła podstawowa (Grundschule), klasy 3–4: modele mostów; Anglia – design and technology, key stage 2 (dzieci 7–11 lat): wzmacnianie i usztywnianie konstrukcji',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Źródła (sprawdzone 14.11.2026): (1) Bawaria, LehrplanPLUS Grundschule, Heimat- und Sachunterricht (HSU), Jahrgangsstufe 3/4, Lernbereich 6.2 „Bauen und Konstruieren” (lehrplanplus.bayern.de, Grundschule, HSU 3/4): „überprüfen und begründen die Stabilität selbst gebauter Brückenmodelle und beschreiben die Merkmale stabiler sowie instabiler Bauweisen”; treści: „Konstruktionsprinzipien bei Brückenmodellen (z. B. Balken-, Bogen-, Fachwerk- und Hängebrücken)”, „Mittel zur Erhöhung der Stabilität: Umformungen aus Papier, Pappe (z. B. Winkel-, Zickzack-, U- und Rundprofile), Aussteifungen (z. B. Dreiecksverbindungen)” – „z. B.” to przykłady. Wieku dzieci w Bawarii nie podajemy (nie sprawdzono go w dokumencie ministerstwa – strona km.bayern.de niedostępna z sesji). (2) ${DT}, key stage 2, „Technical knowledge”: „apply their understanding of how to strengthen, stiffen and reinforce more complex structures”; key stage 2 = dzieci 7–11 lat (gov.uk/national-curriculum). Wiedza – e-materiały zpe.gov.pl: „Połączenia nitowane elementów stalowych blachownic i kratownicy” (kratownice – konstrukcje z elementów tworzących siatkę lub układ trójkątów; wytrzymałość i sztywność; kratownice w mostach; węzeł, pas górny i dolny, krzyżulec, słupek), „Słownik pojęć” do e-materiału „Diagnostyka budowli” (most belkowy – belki ułożone poziomo na podporach/przyczółkach, jedna z najprostszych konstrukcji, np. nad małymi rzekami; most łukowy – obciążenia przejmuje łuk ściskany i przenosi na podpory na brzegach), „Podział i budowa obiektów inżynierskich wykorzystywanych na kolei” (przęsło – element między podporami; przyczółki – podpory skrajne), „Zmiany kulturowe i społeczne po II wojnie światowej” (most wiszący: na pylonach zawieszone są liny, które dźwigają pomost), „Konstrukcja trójkąta o danych bokach” i „Cechy przystawania trójkątów” (trójkąt o danych trzech bokach jest wyznaczony jednoznacznie – stąd sztywność trójkąta z listewek; kwadrat i romb o tych samych bokach mają różne kąty). Polska (tekst podstaw, 14.11.2026): w Dz.U. 2026 poz. 378 (ZPT, przyroda) i w edukacji wczesnoszkolnej Dz.U. 2024 poz. 996 są proste konstrukcje i modele, ale nie znaleziono usztywniania trójkątami ani rodzajów mostów.`,
        theory: `
          <h3>Jak to jest w Bawarii?</h3>
          <p>Bawaria to jeden z krajów związkowych Niemiec. W klasach 3–4 tamtejszej szkoły podstawowej jest przedmiot <b>Heimat- und Sachunterricht</b> (w skrócie HSU) – po polsku mniej więcej „wiedza o najbliższym otoczeniu i świecie”.</p>
          <p>Dzieci <b>budują modele mostów</b>, sprawdzają, czy są stabilne, i wyjaśniają dlaczego. Program podaje przykłady: mosty <b>belkowe, łukowe, kratownicowe i wiszące</b>, kartkę wzmacnia się, <b>zaginając ją</b>, a konstrukcję usztywnia się <b>trójkątami</b>.</p>
          <p>W <b>Anglii</b> dzieci w wieku 7–11 lat na <i>design and technology</i> uczą się, jak konstrukcje <b>wzmacniać i usztywniać</b>.</p>
          <h3>Trójkąt jest sztywny</h3>
          <p>Zbuduj kwadrat z czterech listewek połączonych na zawiasach. Naciśnij go z boku – <b>przekrzywi się w romb</b>. Boki są te same, zmieniły się tylko kąty.</p>
          <p>Trójkąt z trzech listewek <b>się nie przekrzywi</b>. Z trzech boków o danych długościach da się złożyć <b>tylko jeden</b> trójkąt – jego kąty nie mogą się zmienić.</p>
          <p class="tip">Dodaj do kwadratu listewkę <b>po przekątnej</b>: powstaną dwa trójkąty i ramka stanie się sztywna.</p>
          <h3>Kratownica</h3>
          <p><b>Kratownica</b> to konstrukcja z prętów, które tworzą <b>układ trójkątów</b>. Miejsca, gdzie łączą się pręty, to <b>węzły</b>. Kratownica jest wytrzymała i sztywna, dlatego buduje się z niej mosty.</p>
          <h3>Mocna kartka</h3>
          <p>Płaska kartka łatwo się ugina. Zagięta jest dużo sztywniejsza. Program bawarski podaje kształty (profile): <b>kątownik</b> (zgięcie pod kątem), <b>harmonijka</b> (zygzak), <b>ceownik</b> (kształt litery U) i <b>rurka</b>.</p>
          <h3>Cztery rodzaje mostów</h3>
          <ul>
            <li><b>belkowy</b> – belki leżą poziomo na podporach; jeden z najprostszych, np. nad małą rzeką,</li>
            <li><b>łukowy</b> – ciężar przejmuje <b>łuk</b>, który jest <b>ściskany</b>, i przenosi go na podpory na brzegach,</li>
            <li><b>kratownicowy</b> – ciężar niesie kratownica z trójkątów,</li>
            <li><b>wiszący</b> – <b>pomost wisi na linach</b> zawieszonych na wysokich wieżach – <b>pylonach</b>.</li>
          </ul>
          <h3>Części mostu</h3>
          <p><b>Przęsło</b> – część mostu między podporami. <b>Przyczółki</b> – skrajne podpory, na brzegach.</p>`,
        infographicNote: 'Na górze – sztuczki inżynierów. Niżej – cztery rodzaje mostów.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: 'Bawaria i Anglia', text: 'dzieci budują mosty i sprawdzają, czy są stabilne' },
          items: [
            { icon: '🔺', kolor: 3, title: 'Trójkąt', text: 'sztywny – nie da się go przekrzywić' },
            { icon: '🔲', kolor: 2, title: 'Kwadrat', text: 'przekrzywia się w romb – dodaj przekątną' },
            { icon: '➖', kolor: 1, title: 'Most belkowy', text: 'belki leżą na podporach' },
            { icon: '🌈', kolor: 1, title: 'Most łukowy', text: 'ściskany łuk niesie ciężar' },
            { icon: '📐', kolor: 1, title: 'Most kratownicowy', text: 'pręty ułożone w trójkąty' },
            { icon: '🌉', kolor: 1, title: 'Most wiszący', text: 'pomost wisi na linach z pylonów' },
          ],
          bottom: { kolor: 4, title: '💡 Mocna kartka', text: 'zagięta (harmonijka, U, rurka) jest sztywniejsza' },
        },
        flashcards: [
          ['Heimat- und Sachunterricht (HSU)', 'przedmiot w bawarskiej szkole podstawowej; w klasach 3–4 dzieci budują modele mostów'],
          ['Dlaczego trójkąt jest sztywny?', 'z trzech boków o danych długościach da się złożyć tylko jeden trójkąt'],
          ['Kwadrat z listewek na zawiasach', 'przekrzywia się w romb'],
          ['Jak usztywnić kwadratową ramkę?', 'dodać listewkę po przekątnej – powstaną dwa trójkąty'],
          ['Kratownica', 'konstrukcja z prętów tworzących układ trójkątów'],
          ['Węzeł', 'miejsce, w którym łączą się pręty kratownicy'],
          ['Profil z kartki', 'zagięta kartka (kątownik, harmonijka, U, rurka) – sztywniejsza niż płaska'],
          ['Most belkowy', 'belki leżą poziomo na podporach'],
          ['Most łukowy', 'ściskany łuk przenosi ciężar na podpory na brzegach'],
          ['Most wiszący', 'pomost wisi na linach zawieszonych na pylonach'],
          ['Przęsło', 'część mostu między podporami'],
          ['Przyczółki', 'skrajne podpory mostu, na brzegach'],
        ],
        questions: [
          { id: 'lltla3', q: 'Kwadrat z czterech listewek połączonych na zawiasach naciskasz z boku. Co się stanie?', options: ['przekrzywi się w romb', 'zostanie kwadratem', 'zamieni się w trójkąt'], answer: 0, explain: 'Zawiasy pozwalają zmieniać kąty. Boki zostają te same, a kwadrat przekrzywia się w romb.' },
          { id: 'b5063p', q: 'Dlaczego trójkąt z listewek na zawiasach jest sztywny?', options: ['z trzech boków da się złożyć tylko jeden trójkąt', 'trójkąt zawsze robi się z grubszych listewek', 'w trójkącie wszystkie kąty są zawsze proste', 'trójkąt jest cięższy niż kwadrat z listewek'], answer: 0, explain: 'Gdy długości trzech boków są ustalone, trójkąt może mieć tylko jeden kształt – jego kąty nie mogą się zmienić.' },
          { id: '79u1jx', q: 'Jak usztywnić kwadratową ramkę z listewek?', options: ['dodać listewkę po przekątnej', 'pomalować ramkę grubą farbą', 'wyjąć jedną z listewek'], answer: 0, explain: 'Przekątna dzieli kwadrat na dwa trójkąty, a trójkąty są sztywne.' },
          { id: '7pyd4u', q: 'Na ile trójkątów przekątna dzieli kwadrat?', options: ['2', '3', '4'], answer: 0, explain: 'Jedna przekątna dzieli kwadrat na 2 trójkąty.' },
          {
            id: 'dzk2jj', q: 'Ramki są z listewek połączonych na zawiasach. Którą ramkę da się przekrzywić?', noShuffle: true,
            svg: `<svg viewBox="0 0 360 140" role="img" aria-label="Trzy ramki z listewek z zawiasami w rogach. A: kwadrat. B: kwadrat z listewką po przekątnej. C: trójkąt">
              <g class="f4 s4 sw"><path d="M30,20 H110 V100 H30 Z" fill="none"/><path d="M150,20 H230 V100 H150 Z M150,100 L230,20" fill="none"/><path d="M270,100 H350 L310,25 Z" fill="none"/></g>
              <g class="ln"><circle cx="30" cy="20" r="5" class="bg"/><circle cx="110" cy="20" r="5" class="bg"/><circle cx="110" cy="100" r="5" class="bg"/><circle cx="30" cy="100" r="5" class="bg"/>
                <circle cx="150" cy="20" r="5" class="bg"/><circle cx="230" cy="20" r="5" class="bg"/><circle cx="230" cy="100" r="5" class="bg"/><circle cx="150" cy="100" r="5" class="bg"/>
                <circle cx="270" cy="100" r="5" class="bg"/><circle cx="350" cy="100" r="5" class="bg"/><circle cx="310" cy="25" r="5" class="bg"/></g>
              <g class="tx-b" text-anchor="middle"><text x="70" y="128">A</text><text x="190" y="128">B</text><text x="310" y="128">C</text></g>
            </svg>`,
            options: ['A', 'B', 'C'], answer: 0, explain: 'A to sam kwadrat – przekrzywi się w romb. B ma przekątną, czyli dwa trójkąty, a C jest trójkątem – obie są sztywne.',
          },
          { id: 'o6ms5v', q: 'Co to jest kratownica?', options: ['konstrukcja z prętów tworzących trójkąty', 'most zbudowany z jednej grubej belki', 'lina rozpięta między dwiema wieżami'], answer: 0, explain: 'Kratownica to układ prętów połączonych w trójkąty. Dzięki trójkątom jest sztywna.' },
          { id: '19qejw', q: 'Jak nazywa się miejsce, w którym łączą się pręty kratownicy?', options: ['węzeł', 'przęsło', 'pylon'], answer: 0, explain: 'Pręty kratownicy łączą się w węzłach.' },
          { id: 'tgn29e', q: 'W którym moście belki leżą poziomo na podporach?', options: ['w belkowym', 'w łukowym', 'w wiszącym'], answer: 0, explain: 'Most belkowy to jedna z najprostszych konstrukcji: belki ułożone na podporach.' },
          { id: 'so2n7f', q: 'W którym moście pomost wisi na linach zawieszonych na wysokich pylonach?', options: ['w wiszącym', 'w belkowym', 'w łukowym'], answer: 0, explain: 'W moście wiszącym liny zawieszone na pylonach dźwigają pomost.' },
          { id: 'zfd569', q: 'Jak pracuje łuk w moście łukowym?', options: ['jest ściskany i przenosi ciężar na podpory', 'jest rozciągany jak lina, na której wisi pomost', 'nic nie dźwiga – jest tylko ozdobą mostu'], answer: 0, explain: 'Ciężar przejmuje łuk, który jest ściskany, i przenosi go na podpory na brzegach.' },
          { id: '4ohf2q', q: 'Jak nazywa się część mostu między dwiema podporami?', options: ['przęsło', 'przyczółek', 'węzeł'], answer: 0, explain: 'Przęsło to część mostu rozpięta między podporami.' },
          { id: 'f82w3z', q: 'Co to są przyczółki?', options: ['skrajne podpory mostu', 'pręty ułożone w trójkąty', 'liny, na których wisi pomost'], answer: 0, explain: 'Przyczółki to podpory skrajne – na brzegach. Opiera się na nich przęsło.' },
          { id: 'hpul3x', q: 'Jak według programu z Bawarii wzmocnić kartkę papieru w modelu mostu?', options: ['zagiąć ją, np. w harmonijkę', 'zmoczyć ją dokładnie wodą', 'pociąć ją na cienkie paski'], answer: 0, explain: 'Zagięta kartka (kątownik, harmonijka, kształt U, rurka) jest dużo sztywniejsza niż płaska.' },
          { id: '5vg6kr', q: 'Na jakim przedmiocie dzieci w Bawarii budują modele mostów?', options: ['wiedza o otoczeniu i świecie (HSU)', 'plastyka i rysunek techniczny', 'wychowanie fizyczne na boisku'], answer: 0, explain: 'Na Heimat- und Sachunterricht (HSU) – to przedmiot o najbliższym otoczeniu i świecie. W klasach 3–4 jest w nim dział „Bauen und Konstruieren” (budowanie i konstruowanie).' },
          { id: 'bp8gyc', q: 'Prawda czy fałsz?\nTrójkąt z listewek na zawiasach da się przekrzywić tak samo jak kwadrat.', options: TF, noShuffle: true, answer: 1, explain: 'Fałsz. Trójkąt o danych bokach ma tylko jeden kształt – jest sztywny. Przekrzywia się kwadrat.' },
        ],
      },
    ],
  });
})();
