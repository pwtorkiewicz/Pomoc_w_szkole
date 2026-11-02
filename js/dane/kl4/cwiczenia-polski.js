/* Klasa 4 – zestawy ćwiczeń z języka polskiego: „Czytanie ze zrozumieniem”.
 * Wszystkie teksty (opowiadanie, ogłoszenie, wywiad) i zadania napisano do aplikacji –
 * postacie i wydarzenia są wymyślone. Format: README.md, sekcja „Zestawy ćwiczeń”.
 * Opcje zadań zamkniętych nie są tasowane – poprawne odpowiedzi rozłożone na różne litery. */
window.EXERCISES = window.EXERCISES || [];

window.EXERCISES.push({
  subject: 'polski',
  mode: 'czytanie',
  id: 'pbj57a',
  title: 'Hałas na strychu',
  kind: 'Opowiadanie · świat przedstawiony, środki, nastrój',
  basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 2 „Odbiór tekstów kultury”, wym. 3 (wrażenia, jakie wywołuje tekst – przestraszenie, rozśmieszenie), wym. 4 (świat przedstawiony, utwór realistyczny i fantastyczny), wym. 5 (ocena postępowania bohaterów), wym. 6 (środki językowe), wym. 8 (pojęcia: narrator, bohater, wyraz dźwiękonaśladowczy, porównanie).',
  source: 'Opowiadanie napisane do aplikacji.',
  intro: 'Przeczytaj opowiadanie i rozwiąż zadania. Do tekstu możesz wracać.',
  text: `
    <h3>Hałas na strychu</h3>
    <p>W piątkowy wieczór zostałem w domu sam z młodszą siostrą Hanią. Rodzice poszli do sąsiadów, a za oknem szumiał deszcz.</p>
    <p>Nagle nad naszymi głowami coś zastukało: puk, puk, puk.</p>
    <p>– Słyszałeś? – szepnęła Hania i chwyciła mnie za rękę.</p>
    <p>– To pewnie wiatr – odpowiedziałem, choć serce biło mi jak młot.</p>
    <p>Stukanie wróciło, głośniejsze niż przedtem. Dochodziło ze strychu. Wziąłem latarkę i powoli wszedłem po skrzypiących schodach. Hania szła tuż za mną, cicha jak myszka.</p>
    <p>Na strychu było ciemno i pachniało kurzem. Poświeciłem latarką w kąt. Tam, między starymi walizkami, siedział nasz kot Pirat i z zapałem turlał po deskach orzech włoski.</p>
    <p>– To ty, łobuzie! – roześmiała się Hania.</p>
    <p>Pirat spojrzał na nas zdziwiony, jakby pytał, o co tyle hałasu. Zabraliśmy go na dół i we trójkę zasnęliśmy na kanapie. Kiedy rodzice wrócili, opowiedzieliśmy im o naszej wyprawie. Tata stwierdził, że jesteśmy najodważniejszym rodzeństwem w całym domu.</p>`,
  items: [
    {
      id: '5ua41y',
      q: 'Kto jest narratorem opowiadania?',
      options: ['Hania', 'starszy brat Hani, który bierze udział w wydarzeniach', 'tata dzieci', 'kot Pirat'],
      answer: 1,
      explain: 'Narrator mówi o sobie „ja” („zostałem”, „wziąłem latarkę”) i jest bratem Hani – uczestniczy w wydarzeniach.',
    },
    {
      id: '80ls5e',
      q: 'Gdzie i kiedy dzieje się akcja?',
      options: ['w szkole, rano', 'w parku, w sobotę', 'w domu, w piątkowy wieczór', 'u sąsiadów, w nocy'],
      answer: 2,
      explain: 'Pierwsze zdanie: „W piątkowy wieczór zostałem w domu sam z młodszą siostrą”.',
    },
    {
      id: '8u6lxu',
      type: 'input',
      q: 'Wypisz z tekstu wyraz dźwiękonaśladowczy.',
      accept: ['puk', 'puk, puk, puk', 'puk puk puk', 'puk, puk', 'puk puk'],
      explain: '„Puk, puk, puk” naśladuje dźwięk stukania.',
    },
    {
      id: 'psfqsv',
      q: 'Jaki środek zastosowano w wyrażeniu „cicha jak myszka”?',
      options: ['epitet', 'wyliczenie', 'wyraz dźwiękonaśladowczy', 'porównanie'],
      answer: 3,
      explain: 'Słowo „jak” zestawia Hanię z myszką – to porównanie. Podobnie: „serce biło mi jak młot”.',
    },
    {
      id: 'o9o4u2',
      q: 'Jak zmienia się nastrój opowiadania?',
      options: ['od tajemniczego, groźnego do wesołego', 'od wesołego do smutnego', 'od spokojnego do groźnego', 'przez cały czas jest uroczysty'],
      answer: 0,
      explain: 'Na początku jest ciemno, coś stuka, a dzieci się boją. Gdy okazuje się, że hałasuje kot, Hania się śmieje – nastrój staje się wesoły.',
    },
    {
      id: 'gfzyu4',
      q: 'Prawda czy fałsz?\nŹródłem hałasu na strychu był wiatr.',
      options: ['Prawda', 'Fałsz'],
      answer: 1,
      explain: 'Narrator tylko tak przypuszczał. Naprawdę hałasował kot Pirat, który turlał orzech.',
    },
    {
      id: 'zktb7i',
      q: 'To opowiadanie jest utworem…',
      options: ['realistycznym – takie wydarzenia mogłyby się zdarzyć naprawdę', 'fantastycznym – zdarzają się w nim rzeczy niemożliwe'],
      answer: 0,
      explain: 'Nie ma tu czarów ani istot fantastycznych. Kot hałasujący na strychu to zwykła, prawdziwa sytuacja.',
    },
    {
      id: 'mu2m5e',
      type: 'open',
      points: 2,
      q: 'Oceń, jak zachował się narrator, gdy usłyszał hałas. Uzasadnij ocenę, odwołując się do tekstu.',
      answer: 'Narrator zachował się odważnie i odpowiedzialnie. Choć się bał („serce biło mi jak młot”), wziął latarkę i poszedł na strych sprawdzić, co hałasuje. Uspokajał też młodszą siostrę.',
      scoring: [
        '1 pkt – ocena postępowania narratora (np. odważny, odpowiedzialny).',
        '1 pkt – uzasadnienie z odwołaniem do tekstu (np. bał się, a mimo to poszedł na strych; uspokajał siostrę).',
      ],
    },
  ],
});

window.EXERCISES.push({
  subject: 'polski',
  mode: 'czytanie',
  id: '8yah92',
  title: 'Ogłoszenie o konkursie czytelniczym',
  kind: 'Tekst użytkowy · ogłoszenie, fakt i opinia',
  basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 1 „Komunikacja”, wym. 9 (nadawca, odbiorca, intencja wypowiedzi); dz. 2, wym. 2 (intencje nadawców); dz. 6 „Elementy edukacji medialnej”, wym. 1 (wyszukuje potrzebne informacje), wym. 2 (odróżnia fakty od opinii); dz. 4 „Tworzenie wypowiedzi”, wym. 4 (opinia i jej uzasadnienie).',
  source: 'Ogłoszenie napisane do aplikacji (konkurs wymyślony).',
  intro: 'Przeczytaj ogłoszenie z gazetki szkolnej i rozwiąż zadania.',
  text: `
    <div class="box">
      <h3>Konkurs „Czytam, bo lubię!”</h3>
      <p>Lubisz czytać? Weź udział w naszym konkursie! To będzie najciekawszy konkurs w tym roku szkolnym!</p>
      <p><b>Kto może wziąć udział?</b> Uczniowie klas 4–6.</p>
      <p><b>Co trzeba zrobić?</b></p>
      <ol>
        <li>Przeczytaj dowolną książkę, która ci się podobała.</li>
        <li>Zrób do niej zakładkę z tytułem i rysunkiem.</li>
        <li>Na odwrocie zakładki napisz polecenie książki: 3–5 zdań z opinią i uzasadnieniem.</li>
      </ol>
      <p><b>Gdzie i do kiedy?</b> Zakładki przynieś do biblioteki szkolnej (sala 12) do <b>30 listopada</b>. Biblioteka jest otwarta od poniedziałku do piątku w godzinach 8.00–14.00.</p>
      <p><b>Nagrody:</b> autorzy trzech najlepszych prac otrzymają książki. Wszystkie zakładki zawisną na wystawie w holu.</p>
      <p>Czekamy na wasze prace!<br>Organizator: biblioteka szkolna</p>
    </div>`,
  items: [
    {
      id: 'qc5rk9',
      q: 'Kto jest nadawcą ogłoszenia?',
      options: ['uczniowie klas 4–6', 'biblioteka szkolna', 'dyrektor szkoły', 'rodzice uczniów'],
      answer: 1,
      explain: 'Na końcu jest podpis: „Organizator: biblioteka szkolna”. Uczniowie są odbiorcami.',
    },
    {
      id: 'j5fg0m',
      q: 'Jaka jest główna intencja ogłoszenia?',
      options: ['przeprosić uczniów', 'opisać wygląd biblioteki', 'ostrzec przed niebezpieczeństwem', 'zachęcić uczniów do udziału w konkursie i podać jego zasady'],
      answer: 3,
      explain: 'Ogłoszenie zaprasza („Weź udział w naszym konkursie!”) i informuje, co, gdzie i do kiedy trzeba zrobić.',
    },
    {
      id: 'f16e45',
      type: 'input',
      q: 'Do kiedy trzeba przynieść zakładki? Wpisz datę.',
      accept: ['30 listopada', 'do 30 listopada', '30.11', '30 XI', '30 listopad'],
      explain: 'W ogłoszeniu: „do 30 listopada”.',
    },
    {
      id: 'ypvh0k',
      q: 'Prawda czy fałsz?\nW konkursie mogą wziąć udział tylko uczniowie klasy 4.',
      options: ['Prawda', 'Fałsz'],
      answer: 1,
      explain: 'Udział mogą wziąć uczniowie klas 4–6, czyli klas 4, 5 i 6.',
    },
    {
      id: 'coixrf',
      q: 'Które zdanie z ogłoszenia jest opinią, a nie faktem?',
      options: ['Biblioteka jest otwarta od poniedziałku do piątku.', 'Zakładki przynieś do biblioteki szkolnej.', 'To będzie najciekawszy konkurs w tym roku szkolnym!', 'Autorzy trzech najlepszych prac otrzymają książki.'],
      answer: 2,
      explain: 'Nie da się sprawdzić, czy konkurs będzie „najciekawszy” – to ocena organizatora, czyli opinia. Pozostałe zdania podają informacje.',
    },
    {
      id: 'enoozz',
      q: 'Co trzeba napisać na odwrocie zakładki?',
      options: ['polecenie książki z opinią i uzasadnieniem', 'swój adres i numer telefonu', 'streszczenie całej książki', 'listę wszystkich przeczytanych książek'],
      answer: 0,
      explain: 'Punkt 3: „napisz polecenie książki: 3–5 zdań z opinią i uzasadnieniem”.',
    },
    {
      id: '4rwfli',
      type: 'open',
      points: 2,
      q: 'Napisz polecenie dowolnej przeczytanej książki – tak jak na zakładkę konkursową (3–5 zdań).',
      answer: 'Polecam „Akademię pana Kleksa” Jana Brzechwy. Moim zdaniem to jedna z najzabawniejszych książek, jakie czytałem, bo pan Kleks prowadzi szkołę, w której nauka jest przygodą. Najbardziej podobały mi się senne lusterka i niezwykłe lekcje. Przeczytaj, a nie pożałujesz!',
      scoring: [
        '1 pkt – tytuł książki i wyraźna opinia (zachęta do przeczytania).',
        '1 pkt – uzasadnienie opinii („bo…”, „ponieważ…”), 3–5 zdań.',
      ],
    },
  ],
});

window.EXERCISES.push({
  subject: 'polski',
  mode: 'czytanie',
  id: '4ndlnz',
  title: 'Wywiad z aktorką teatru lalek',
  kind: 'Wywiad · pytania otwarte i zamknięte, teatr',
  basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 2 „Odbiór tekstów kultury”, wym. 1 (odczytanie tekstów różnych sztuk, w tym teatru – moduł kultura), wym. 2 (intencje nadawców); dz. 4 „Tworzenie wypowiedzi”, wym. 6 (formy dziennikarskie – wywiad); dz. 6, wym. 1 (wyszukuje potrzebne informacje).',
  source: 'Wywiad napisany do aplikacji – rozmówczyni i jej wypowiedzi są wymyślone.',
  intro: 'Przeczytaj wywiad z gazetki szkolnej i rozwiąż zadania.',
  text: `
    <h3>Lalki też mają duszę</h3>
    <p><i>Pani Marta od dziesięciu lat jest aktorką teatru lalek. Po spektaklu dla klas czwartych rozmawiała z nią Zosia z klasy 4b.</i></p>
    <p><b>Zosia:</b> Dlaczego została Pani aktorką właśnie w teatrze lalek?</p>
    <p><b>Pani Marta:</b> Jako dziecko robiłam lalki ze skarpetek i grałam przedstawienia dla młodszego brata. Lalka może wszystko: latać, znikać, zamienić się w smoka. Ta magia zachwyciła mnie na zawsze.</p>
    <p><b>Zosia:</b> Jakimi lalkami gra Pani najczęściej?</p>
    <p><b>Pani Marta:</b> Najczęściej pacynkami, czyli lalkami zakładanymi na dłoń jak rękawiczka. Najtrudniejsze są marionetki – lalki na nitkach, którymi porusza się od góry. Zanim nauczyłam się, żeby marionetka chodziła jak człowiek, minęło wiele miesięcy.</p>
    <p><b>Zosia:</b> Jak wygląda przygotowanie nowego przedstawienia?</p>
    <p><b>Pani Marta:</b> Najpierw czytamy tekst z reżyserem. Potem są próby, codziennie przez kilka tygodni. Scenograf projektuje dekoracje, a my uczymy się, jak „ożywić” lalki. Na końcu przychodzi premiera – pierwsze przedstawienie dla publiczności.</p>
    <p><b>Zosia:</b> Czy denerwuje się Pani przed premierą?</p>
    <p><b>Pani Marta:</b> Tak, zawsze! Ale gdy słyszę śmiech dzieci na widowni, trema znika.</p>
    <p><b>Zosia:</b> Co poradziłaby Pani dzieciom, które chcą spróbować?</p>
    <p><b>Pani Marta:</b> Zróbcie lalkę ze starej skarpetki i zagrajcie scenkę dla rodziny. Nie bójcie się pomyłek – w teatrze każdy kiedyś zaczynał.</p>
    <p><b>Zosia:</b> Dziękuję za rozmowę.</p>`,
  items: [
    {
      id: 'std0dh',
      q: 'Kto przeprowadził wywiad?',
      options: ['pani Marta', 'reżyser teatru', 'Zosia z klasy 4b', 'młodszy brat pani Marty'],
      answer: 2,
      explain: 'Wstęp: „rozmawiała z nią Zosia z klasy 4b”. Zosia zadaje pytania, a pani Marta – rozmówczyni – odpowiada.',
    },
    {
      id: 'syw7me',
      q: 'Według pani Marty marionetka to…',
      options: ['lalka zakładana na dłoń jak rękawiczka', 'lalka na nitkach, poruszana od góry', 'lalka na kiju, poruszana od dołu', 'lalka zrobiona ze skarpetki'],
      answer: 1,
      explain: 'Pani Marta mówi: „marionetki – lalki na nitkach, którymi porusza się od góry”. Lalka zakładana na dłoń to pacynka.',
    },
    {
      id: 'o0h38j',
      type: 'input',
      q: 'Jak nazywa się pierwsze przedstawienie dla publiczności? Wpisz wyraz z tekstu.',
      accept: ['premiera', 'premierą'],
      explain: '„Na końcu przychodzi premiera – pierwsze przedstawienie dla publiczności.”',
    },
    {
      id: 'lp47u4',
      q: 'Które pytanie Zosi jest pytaniem zamkniętym (można na nie odpowiedzieć „tak” albo „nie”)?',
      options: ['Dlaczego została Pani aktorką właśnie w teatrze lalek?', 'Jak wygląda przygotowanie nowego przedstawienia?', 'Co poradziłaby Pani dzieciom, które chcą spróbować?', 'Czy denerwuje się Pani przed premierą?'],
      answer: 3,
      explain: 'Na pytanie zaczynające się od „czy” można odpowiedzieć „tak” albo „nie”. Pozostałe pytania są otwarte.',
    },
    {
      id: 'xivvzw',
      q: 'Prawda czy fałsz?\nPrzed premierą aktorzy mają próby codziennie przez kilka tygodni.',
      options: ['Prawda', 'Fałsz'],
      answer: 0,
      explain: 'Pani Marta mówi: „Potem są próby, codziennie przez kilka tygodni”.',
    },
    {
      id: '9tpo88',
      q: 'Co pani Marta radzi dzieciom, które chcą spróbować gry lalkami?',
      options: ['zrobić lalkę ze starej skarpetki i zagrać scenkę dla rodziny', 'kupić drogą marionetkę', 'najpierw skończyć szkołę teatralną', 'grać tylko wtedy, gdy nie robi się pomyłek'],
      answer: 0,
      explain: '„Zróbcie lalkę ze starej skarpetki i zagrajcie scenkę dla rodziny. Nie bójcie się pomyłek”.',
    },
    {
      id: 'p52q3e',
      type: 'open',
      points: 2,
      q: 'Ułóż jeszcze jedno pytanie otwarte, które można by zadać pani Marcie. Wyjaśnij, dlaczego jest to pytanie otwarte.',
      answer: 'Jaką rolę zagrała Pani najchętniej i dlaczego? To pytanie otwarte, bo nie da się na nie odpowiedzieć tylko „tak” albo „nie” – trzeba opowiedzieć więcej.',
      scoring: [
        '1 pkt – poprawnie zapisane pytanie otwarte związane z tematem wywiadu (z formą „Pani”).',
        '1 pkt – wyjaśnienie: nie można odpowiedzieć tylko „tak” albo „nie”.',
      ],
    },
  ],
});
