/* Edukacja informatyczna – klasa 3 (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – VII. Edukacja informatyczna). Osiągnięcia na koniec klasy 3, bez podziału na klasy I–III.
 * Przykłady, zadania z robotem i nazwy urządzeń – decyzja redakcyjna (podstawa nie podaje listy pojęć). */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), VII. Edukacja informatyczna';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III.';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  // Kratka z robotem: robot i gwiazdka jako [kolumna, wiersz] liczone od 0 od lewego górnego rogu;
  // litery: [[kolumna, wiersz, 'A'], …]
  function kratka(label, cols, rows, robot, star, letters) {
    const c = 56, x0 = (300 - cols * c) / 2, y0 = 8, W = 300, H = rows * c + 16;
    let s = '';
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) s += `<rect x="${x0 + i * c}" y="${y0 + j * c}" width="${c}" height="${c}" class="${(i + j) % 2 ? 'f1' : 'bg'} ln-thin"/>`;
    const at = ([i, j], t, size) => `<text x="${x0 + i * c + c / 2}" y="${y0 + j * c + c / 2 + size / 3}" class="tx-b" text-anchor="middle" style="font-size:${size}px">${t}</text>`;
    if (star) s += at(star, '⭐', 30);
    (letters || []).forEach(([i, j, t]) => { s += at([i, j], t, 22); });
    s += at(robot, '🤖', 30);
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}">${s}</svg>`;
  }

  window.SUBJECTS.push({
    id: 'informatyka',
    name: 'Edukacja informatyczna',
    icon: '💻',
    color: '#3f7fd0',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'algorytmy',
        name: 'Krok po kroku – algorytmy',
        basis: `${PP}, 1. Rozumienie, analizowanie i rozwiązywanie problemów, pkt 1 (układa w logicznym porządku obrazki, teksty, polecenia – codzienne czynności), pkt 2 (tworzy polecenie lub sekwencję poleceń prowadzącą do celu), pkt 3 (zadania, zagadki i łamigłówki prowadzące do odkrywania algorytmów). Przykłady czynności napisano samodzielnie.${KONIEC}`,
        theory: `
          <h3>Po kolei!</h3>
          <p>Wiele czynności trzeba robić w <b>dobrej kolejności</b>. Najpierw zakładasz skarpetki, potem buty – nie odwrotnie!</p>
          <h3>Algorytm</h3>
          <p><b>Algorytm</b> to dokładny przepis: lista kroków, które po kolei prowadzą do celu. Algorytmem jest przepis na kanapkę, instrukcja składania zabawki albo droga do szkoły.</p>
          <p>Przykład – mycie zębów:</p>
          <ol><li>Nałóż pastę na szczoteczkę.</li><li>Myj zęby.</li><li>Wypłucz usta.</li><li>Opłucz szczoteczkę.</li></ol>
          <h3>Polecenie</h3>
          <p><b>Polecenie</b> to jeden krok, np. „idź prosto”, „skręć w prawo”. Kilka poleceń po kolei to <b>sekwencja</b>.</p>
          <p class="tip">Dobre polecenie jest <b>krótkie i dokładne</b>. „Zrób coś” – źle. „Zrób 2 kroki do przodu” – dobrze.</p>
          <h3>Łamigłówki</h3>
          <p>Labirynty, układanki i zagadki „co będzie dalej?” ćwiczą myślenie jak programista: szukasz <b>reguły</b> i planujesz kroki.</p>`,
        flashcards: [
          ['Algorytm', 'dokładny przepis – kroki po kolei prowadzące do celu'],
          ['Polecenie', 'jeden krok, np. „idź prosto”'],
          ['Sekwencja', 'kilka poleceń po kolei'],
          ['Dobre polecenie', 'krótkie i dokładne'],
          ['Przykład algorytmu', 'przepis na kanapkę, instrukcja składania zabawki'],
          ['Co najpierw: skarpetki czy buty?', 'skarpetki, potem buty'],
          ['Reguła w ciągu 🔴🔵🔴🔵…', 'kolory na zmianę – teraz 🔴'],
          ['Po co dobra kolejność?', 'żeby dojść do celu'],
        ],
        questions: [
          { id: 'lxgney', q: 'Co to jest algorytm?', options: ['dokładny przepis – kroki po kolei', 'rodzaj komputera', 'gra w piłkę'], answer: 0, explain: 'Algorytm to lista kroków, które po kolei prowadzą do celu.' },
          { id: 'vk0luo', q: 'Co robisz najpierw?', options: ['zakładam skarpetki', 'zakładam buty'], answer: 0, explain: 'Najpierw skarpetki, potem buty. Kolejność jest ważna!' },
          { id: '3u5tvo', q: 'Robisz kanapkę. Który krok jest pierwszy?', options: ['kroję chleb', 'jem kanapkę', 'kładę ser na chlebie'], answer: 0, explain: 'Kolejność: kroję chleb, smaruję masłem, kładę ser, jem.' },
          { id: '98eobu', q: 'Myjesz zęby. Który krok jest ostatni?', options: ['opłukuję szczoteczkę', 'nakładam pastę', 'myję zęby'], answer: 0, explain: 'Pasta, mycie, płukanie ust, a na końcu opłukanie szczoteczki.' },
          { id: 'j6libv', q: 'Które polecenie jest najdokładniejsze?', options: ['Zrób 3 kroki do przodu.', 'Idź gdzieś.', 'Rusz się trochę.'], answer: 0, explain: 'Dobre polecenie jest krótkie i dokładne – mówi, co i ile razy zrobić.' },
          { id: '2rj3vb', q: 'Jak nazywamy kilka poleceń po kolei?', options: ['sekwencja', 'zagadka', 'komputer'], answer: 0, explain: 'Sekwencja to polecenia ułożone po kolei.' },
          { id: 'fu15n1', q: 'Co będzie dalej?\n🔴 🔵 🔴 🔵 🔴 …', say: 'Kółka: czerwone, niebieskie, czerwone, niebieskie, czerwone. Jakie będzie następne?', options: ['🔵', '🔴', '🟢'], sayOptions: ['niebieskie', 'czerwone', 'zielone'], answer: 0, explain: 'Kolory są na zmianę: po czerwonym jest niebieski.', sayExplain: 'Kolory są na zmianę: po czerwonym jest niebieski.' },
          { id: 'gpka9m', q: 'Co będzie dalej?\n2, 4, 6, 8, …', options: ['10', '9', '12'], answer: 0, explain: 'Każda liczba jest o 2 większa: 8 + 2 = 10.' },
          { id: 'ss79zi', q: 'Co będzie dalej?\n🌞 🌙 🌙 🌞 🌙 🌙 🌞 …', say: 'Obrazki: słońce, księżyc, księżyc, słońce, księżyc, księżyc, słońce. Co będzie następne?', options: ['🌙', '🌞', '⭐'], sayOptions: ['księżyc', 'słońce', 'gwiazda'], answer: 0, explain: 'Reguła: jedno słońce, dwa księżyce. Po słońcu jest księżyc.', sayExplain: 'Reguła: jedno słońce, dwa księżyce. Po słońcu jest księżyc.' },
          { id: 'gw4pth', q: 'Który przykład to algorytm?', options: ['przepis na naleśniki krok po kroku', 'obrazek kota', 'piosenka bez słów'], answer: 0, explain: 'Przepis podaje kroki po kolei – to algorytm.' },
          { id: '2s4wap', q: 'Prawda czy fałsz?\nW algorytmie kolejność kroków nie ma znaczenia.', options: TF, ...PF, answer: 1, explain: 'Kolejność jest bardzo ważna. Nie zjesz kanapki, zanim jej nie zrobisz!' },
          { id: 'idnec7', q: 'Sadzisz kwiatek. Ułóż kroki. Który jest drugi?\n1. Wsyp ziemię do doniczki.\n2. ?\n3. Podlej.', options: ['Włóż roślinę i przysyp ziemią.', 'Podlej.', 'Kup doniczkę.'], answer: 0, explain: 'Najpierw ziemia, potem roślina, na końcu podlewanie.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'programowanie',
        name: 'Programujemy robota',
        basis: `${PP}, 2. Programowanie i rozwiązywanie problemów z wykorzystaniem komputera, pkt 1 (programuje wizualnie: pojedyncze polecenia i ich sekwencje sterujące obiektem na ekranie); 1. pkt 2–3 (sekwencje poleceń prowadzące do celu, odkrywanie algorytmów). Zadania z robotem na kratce, polecenie „powtórz” i szukanie błędu w programie – decyzja redakcyjna (typowe ćwiczenia programowania wizualnego).${KONIEC}`,
        theory: `
          <h3>Program</h3>
          <p><b>Program</b> to algorytm zapisany tak, żeby zrozumiał go komputer albo robot. Kto pisze programy, jest <b>programistą</b>.</p>
          <h3>Strzałki dla robota</h3>
          <table><tr><th>strzałka</th><th>robot idzie o 1 pole</th></tr>
            <tr><td>➡️</td><td>w prawo</td></tr><tr><td>⬅️</td><td>w lewo</td></tr>
            <tr><td>⬆️</td><td>w górę</td></tr><tr><td>⬇️</td><td>w dół</td></tr></table>
          <p>Program „➡️ ➡️ ⬆️” znaczy: dwa pola w prawo, potem jedno w górę.</p>
          <h3>Powtórz</h3>
          <p>Zamiast pisać „➡️ ➡️ ➡️ ➡️”, możesz napisać: <b>powtórz 4 razy ➡️</b>. Program jest wtedy krótszy.</p>
          <h3>Programowanie z klocków</h3>
          <p>W wielu programach dla dzieci układasz polecenia z kolorowych <b>klocków</b>, jak puzzle. Klocki sterują postacią na ekranie: każą jej iść, skakać, mówić.</p>
          <h3>Błąd w programie</h3>
          <p>Robot nie doszedł do celu? W programie jest <b>błąd</b>. Sprawdź krok po kroku, gdzie robot skręcił źle, i popraw ten krok.</p>`,
        flashcards: [
          ['Program', 'algorytm zapisany dla komputera albo robota'],
          ['Programista', 'osoba, która pisze programy'],
          ['➡️ ➡️ ⬆️', 'dwa pola w prawo, jedno w górę'],
          ['Powtórz 3 razy ➡️', 'to samo co ➡️ ➡️ ➡️'],
          ['Programowanie z klocków', 'układasz polecenia z klocków, które sterują postacią'],
          ['Błąd w programie', 'krok, przez który robot nie dochodzi do celu'],
          ['Co robisz, gdy program nie działa?', 'sprawdzasz krok po kroku i poprawiasz błąd'],
        ],
        questions: [
          { id: 'aizb5f', q: 'Którym programem robot dojdzie do gwiazdki?', svg: kratka('Kratka 5 na 3 pola. Robot stoi w dolnym rzędzie na pierwszym polu z lewej. Gwiazdka jest w tym samym rzędzie, trzy pola w prawo.', 5, 3, [0, 2], [3, 2]), say: 'Robot stoi na dole po lewej. Gwiazdka jest trzy pola w prawo. Którym programem robot dojdzie do gwiazdki?', options: ['➡️ ➡️ ➡️', '➡️ ➡️', '⬆️ ➡️ ➡️'], sayOptions: ['3 razy w prawo', '2 razy w prawo', 'w górę i 2 razy w prawo'], answer: 0, explain: 'Gwiazdka jest 3 pola w prawo, więc trzy razy ➡️.', sayExplain: 'Gwiazdka jest 3 pola w prawo, więc trzy razy w prawo.' },
          { id: '4a44p8', q: 'Którym programem robot dojdzie do gwiazdki?', svg: kratka('Kratka 5 na 3 pola. Robot stoi w dolnym rzędzie na pierwszym polu z lewej. Gwiazdka jest w górnym rzędzie na trzecim polu z lewej.', 5, 3, [0, 2], [2, 0]), say: 'Robot stoi na dole po lewej. Gwiazdka jest dwa pola wyżej i dwa pola w prawo. Którym programem robot dojdzie do gwiazdki?', options: ['⬆️ ⬆️ ➡️ ➡️', '⬇️ ⬇️ ➡️ ➡️', '⬆️ ➡️ ➡️'], sayOptions: ['2 razy w górę, 2 razy w prawo', '2 razy w dół, 2 razy w prawo', 'raz w górę, 2 razy w prawo'], answer: 0, explain: 'Gwiazdka jest 2 pola wyżej i 2 pola w prawo: ⬆️ ⬆️ ➡️ ➡️.', sayExplain: 'Gwiazdka jest 2 pola wyżej i 2 pola w prawo: dwa razy w górę, dwa razy w prawo.' },
          { id: 'dloqqt', q: 'Robot wykona program ➡️ ➡️ ⬆️. Na którym polu stanie?', svg: kratka('Kratka 5 na 3 pola. Robot stoi w dolnym rzędzie na pierwszym polu z lewej. Litera A: środkowy rząd, trzecie pole. Litera B: górny rząd, drugie pole. Litera C: dolny rząd, czwarte pole.', 5, 3, [0, 2], null, [[2, 1, 'A'], [1, 0, 'B'], [3, 2, 'C']]), say: 'Robot wykona program: w prawo, w prawo, w górę. Na którym polu stanie: A, B czy C?', options: ['A', 'B', 'C'], ...PF, answer: 0, explain: 'Dwa pola w prawo i jedno w górę – robot staje na polu A.' },
          { id: '5vt9ag', q: 'Ile razy trzeba powtórzyć ➡️, żeby robot doszedł do gwiazdki?', svg: kratka('Kratka 5 na 2 pola. Robot stoi w dolnym rzędzie na pierwszym polu z lewej. Gwiazdka jest w tym samym rzędzie na ostatnim, piątym polu.', 5, 2, [0, 1], [4, 1]), say: 'Robot stoi na pierwszym polu, gwiazdka na piątym, w tym samym rzędzie. Ile razy trzeba powtórzyć krok w prawo?', options: ['4', '5', '3'], answer: 0, explain: 'Z pola 1 do pola 5 są 4 kroki: 5 − 1 = 4.' },
          { id: 'mxmk0x', q: 'Który program jest taki sam jak „powtórz 3 razy ⬆️”?', say: 'Który program jest taki sam jak: powtórz 3 razy w górę?', options: ['⬆️ ⬆️ ⬆️', '⬆️ 3', '⬆️ ➡️ ⬆️'], sayOptions: ['w górę, w górę, w górę', 'w górę, trzy', 'w górę, w prawo, w górę'], answer: 0, explain: 'Powtórz 3 razy ⬆️ to trzy strzałki w górę.', sayExplain: 'Powtórz 3 razy w górę to trzy strzałki w górę.' },
          { id: 'tbx5pd', q: 'Jak nazywamy algorytm zapisany dla komputera?', options: ['program', 'rysunek', 'mapa'], answer: 0, explain: 'Program to algorytm, który rozumie komputer albo robot.' },
          { id: 'u4mys7', q: 'Kim jest osoba, która pisze programy?', options: ['programistą', 'kierowcą', 'kucharzem'], answer: 0, explain: 'Programy piszą programiści.' },
          { id: 'lhl2e2', q: 'Robot miał dojść do gwiazdki, ale doszedł gdzie indziej. Co robisz?', options: ['sprawdzam program krok po kroku i poprawiam błąd', 'wyłączam komputer na zawsze', 'mówię, że robot jest zepsuty'], answer: 0, explain: 'Szukasz błędu: sprawdzasz każdy krok i poprawiasz ten zły.' },
          { id: 'xpj11n', q: 'Program: ➡️ ➡️ ⬇️. Co zrobi robot?', say: 'Program: w prawo, w prawo, w dół. Co zrobi robot?', options: ['2 pola w prawo, potem 1 w dół', '2 pola w dół, potem 1 w prawo', '3 pola w prawo'], answer: 0, explain: 'Robot wykonuje polecenia po kolei: ➡️, ➡️, a potem ⬇️.', sayExplain: 'Robot wykonuje polecenia po kolei: w prawo, w prawo, a potem w dół.' },
          { id: 'cuwkv5', q: 'Po co w programie polecenie „powtórz”?', options: ['żeby program był krótszy', 'żeby robot się zatrzymał', 'żeby zmienić kolor'], answer: 0, explain: 'Zamiast pisać tę samą strzałkę wiele razy, piszesz „powtórz”.' },
          { id: '36c80i', q: 'W programowaniu z klocków każdy klocek to…', options: ['jedno polecenie', 'jeden komputer', 'jedna gra'], answer: 0, explain: 'Klocki to polecenia, które układasz po kolei.' },
          { id: 'mkcmqp', q: 'Prawda czy fałsz?\nProgram ⬆️ ➡️ i program ➡️ ⬆️ zaprowadzą robota w to samo miejsce, jeśli po drodze nie ma przeszkód.', say: 'Prawda czy fałsz? Program: w górę, w prawo, i program: w prawo, w górę, zaprowadzą robota w to samo miejsce, jeśli po drodze nie ma przeszkód.', options: TF, ...PF, answer: 0, explain: 'W obu programach robot idzie 1 pole w górę i 1 w prawo – tylko w innej kolejności. Na pustej kratce dojdzie w to samo miejsce.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'komputer',
        name: 'Komputer, pliki i internet',
        basis: `${PP}, 3. Posługiwanie się komputerem, urządzeniami cyfrowymi i sieciami komputerowymi, pkt 1 (komputer i urządzenia zewnętrzne), pkt 2 (kojarzy działanie komputera z efektami pracy), pkt 3 (korzysta z udostępnionych stron i zasobów internetowych); 2. pkt 2 (rysunki i dokumenty tekstowe: powiększa, zmniejsza, kopiuje, wkleja i usuwa elementy), pkt 3 (zapisuje efekty pracy we wskazanym miejscu). Nazwy urządzeń i skróty klawiszowe – decyzja redakcyjna.${KONIEC}`,
        theory: `
          <h3>Komputer i urządzenia</h3>
          <table><tr><th>urządzenie</th><th>do czego służy</th></tr>
            <tr><td>⌨️ klawiatura</td><td>piszesz litery i cyfry</td></tr>
            <tr><td>🖱️ mysz</td><td>przesuwasz wskaźnik i klikasz</td></tr>
            <tr><td>🖥️ monitor</td><td>widzisz obraz</td></tr>
            <tr><td>🔊 głośniki, 🎧 słuchawki</td><td>słyszysz dźwięk</td></tr>
            <tr><td>🎤 mikrofon</td><td>nagrywasz głos</td></tr>
            <tr><td>📷 kamera</td><td>nagrywasz obraz, robisz zdjęcia</td></tr>
            <tr><td>🖨️ drukarka</td><td>drukujesz na papierze</td></tr></table>
          <p>Urządzenia cyfrowe to też <b>tablet</b>, <b>smartfon</b> i <b>laptop</b>.</p>
          <h3>Praca w programie</h3>
          <ul>
            <li><b>Kopiuj</b> – robisz kopię zaznaczonego tekstu albo obrazka.</li>
            <li><b>Wklej</b> – wstawiasz kopię w nowe miejsce.</li>
            <li><b>Usuń</b> – kasujesz zaznaczony element.</li>
            <li><b>Powiększ / zmniejsz</b> – zmieniasz wielkość obrazka albo liter.</li>
          </ul>
          <p class="tip">Na wielu komputerach: <b>Ctrl + C</b> – kopiuj, <b>Ctrl + V</b> – wklej (na komputerach Mac zamiast Ctrl jest Cmd).</p>
          <h3>Zapisz pracę!</h3>
          <p>Twoja praca (rysunek, tekst) to <b>plik</b>. Pliki trzymamy w <b>folderach</b>, jak kartki w teczkach. Zapisz plik w miejscu, które wskaże nauczyciel, i nadaj mu nazwę, np. „Zaproszenie Ola”.</p>
          <h3>Internet</h3>
          <p>Strony internetowe oglądasz w <b>przeglądarce</b>. Korzystaj ze stron, które wskaże ci nauczyciel albo rodzic.</p>`,
        flashcards: [
          ['Klawiatura', 'do pisania liter i cyfr'],
          ['Mysz', 'przesuwa wskaźnik, klikasz nią'],
          ['Monitor', 'pokazuje obraz'],
          ['Mikrofon', 'nagrywa głos'],
          ['Drukarka', 'drukuje na papierze'],
          ['Kopiuj i wklej', 'robisz kopię i wstawiasz ją w nowe miejsce'],
          ['Ctrl + C', 'kopiuj'],
          ['Ctrl + V', 'wklej'],
          ['Plik', 'zapisana praca, np. rysunek albo tekst'],
          ['Folder', 'miejsce na pliki, jak teczka na kartki'],
          ['Przeglądarka', 'program do oglądania stron internetowych'],
        ],
        questions: [
          { id: 'nr98yh', q: 'Którym urządzeniem piszesz litery?', options: ['klawiaturą', 'głośnikiem', 'drukarką'], answer: 0, explain: 'Na klawiaturze są litery i cyfry.' },
          { id: 'v4oueg', q: 'Do czego służy mysz?', options: ['do przesuwania wskaźnika i klikania', 'do słuchania muzyki', 'do drukowania'], answer: 0, explain: 'Myszą przesuwasz wskaźnik na ekranie i klikasz.' },
          { id: '3im0ir', q: 'Które urządzenie nagrywa twój głos?', options: ['mikrofon', 'monitor', 'mysz'], answer: 0, explain: 'Mikrofon nagrywa dźwięk, np. twój głos.' },
          { id: 'crsmfd', q: 'Chcesz mieć rysunek z komputera na kartce. Czego użyjesz?', options: ['drukarki', 'mikrofonu', 'słuchawek'], answer: 0, explain: 'Drukarka drukuje na papierze.' },
          { id: 'av63v3', q: 'Na którym urządzeniu widzisz obraz z komputera?', options: ['na monitorze', 'na klawiaturze', 'na głośniku'], answer: 0, explain: 'Obraz pokazuje monitor.' },
          { id: 'ez9wch', q: 'Chcesz mieć ten sam obrazek dwa razy na zaproszeniu. Co zrobisz?', options: ['skopiuję i wkleję', 'usunę go', 'wyłączę komputer'], answer: 0, explain: 'Kopiuj – robisz kopię, wklej – wstawiasz ją w nowe miejsce.' },
          { id: 'i2gxnv', q: 'Co robi polecenie „Usuń”?', options: ['kasuje zaznaczony element', 'robi kopię', 'drukuje'], answer: 0, explain: 'Usuń kasuje to, co zaznaczyłeś.' },
          { id: 'h1pqkj', q: 'Który skrót na wielu komputerach znaczy „wklej”?', options: ['Ctrl + V', 'Ctrl + C', 'Enter'], answer: 0, explain: 'Ctrl + C – kopiuj, Ctrl + V – wklej.' },
          { id: 'ri57ju', q: 'Jak nazywa się zapisany rysunek albo tekst w komputerze?', options: ['plik', 'kabel', 'monitor'], answer: 0, explain: 'Każda zapisana praca to plik.' },
          { id: 'si7sy6', q: 'Gdzie w komputerze trzymamy pliki?', options: ['w folderach', 'w drukarce', 'w myszce'], answer: 0, explain: 'Pliki trzymamy w folderach – jak kartki w teczkach.' },
          { id: 'sg0pg3', q: 'Skończyłeś rysunek na komputerze. Co robisz, żeby go nie stracić?', options: ['zapisuję plik we wskazanym miejscu', 'od razu wyłączam komputer', 'zamykam program bez zapisywania'], answer: 0, explain: 'Zapisz pracę tam, gdzie wskaże nauczyciel, i nadaj plikowi nazwę.' },
          { id: 'ihstkl', q: 'W jakim programie oglądasz strony internetowe?', options: ['w przeglądarce', 'w kalkulatorze', 'w edytorze grafiki'], answer: 0, explain: 'Strony internetowe otwiera przeglądarka.' },
          { id: 'c7iz28', q: 'Który z nich to urządzenie cyfrowe?', options: ['tablet', 'ołówek', 'linijka'], answer: 0, explain: 'Tablet, smartfon i laptop to urządzenia cyfrowe.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'bezpiecznie',
        name: 'Bezpiecznie i kulturalnie w sieci',
        basis: `${PP}, 5. Przestrzeganie prawa i zasad bezpieczeństwa, pkt 1 (korzysta z technologii zgodnie z ustalonymi zasadami), pkt 2 (rozróżnia pożądane i niepożądane zachowania innych osób w internecie), pkt 3 (zasady korzystania z efektów pracy innych osób i bezpieczeństwa w internecie); 4. Rozwijanie kompetencji społecznych, pkt 1–2 (współpraca i komunikowanie się z wykorzystaniem technologii). Zasady sformułowano samodzielnie; uzupełniają dział „Na drodze i w internecie” w edukacji przyrodniczej.${KONIEC}`,
        theory: `
          <h3>Zasady przy komputerze</h3>
          <ul>
            <li>Korzystasz z komputera i internetu tak, jak ustalisz z rodzicami i nauczycielem – także <b>jak długo</b>.</li>
            <li>Rób przerwy: wstań, rozejrzyj się, popatrz w dal.</li>
            <li>Otwierasz tylko strony i gry, na które pozwoli dorosły.</li>
          </ul>
          <h3>Twoje hasło to tajemnica</h3>
          <p><b>Hasło</b> chroni twoje konto. Nie mówisz go kolegom ani nieznajomym – znają je tylko rodzice.</p>
          <h3>Dobre i złe zachowania w sieci</h3>
          <table><tr><th>👍 dobrze</th><th>👎 źle</th></tr>
            <tr><td>piszesz grzecznie, jak w rozmowie twarzą w twarz</td><td>ktoś obraża, wyśmiewa, straszy (to <b>hejt</b>)</td></tr>
            <tr><td>pomagasz, dzielisz się pomysłami przy wspólnej pracy</td><td>nieznajomy prosi o zdjęcia, adres albo spotkanie</td></tr></table>
          <p class="tip">Coś cię przestraszyło albo zrobiło ci przykrość w internecie? <b>Nie odpisuj</b>, <b>powiedz dorosłemu</b>. To nie twoja wina.</p>
          <h3>Cudza praca</h3>
          <p>Rysunek, zdjęcie, tekst i piosenka mają swojego <b>autora</b>. Nie podpisujesz cudzej pracy swoim imieniem. Gdy korzystasz z cudzego obrazka, podaj, skąd go wziąłeś.</p>`,
        flashcards: [
          ['Hasło', 'tajemnica – znają je tylko rodzice'],
          ['Hejt', 'obrażanie, wyśmiewanie, straszenie w internecie'],
          ['Ktoś cię obraża w sieci', 'nie odpisuj, powiedz dorosłemu'],
          ['Nieznajomy prosi o zdjęcie', 'nie wysyłasz, mówisz rodzicom'],
          ['Cudza praca', 'ma autora – nie podpisujesz jej swoim imieniem'],
          ['Jak pisać w internecie?', 'grzecznie, jak w rozmowie twarzą w twarz'],
          ['Jak długo przy komputerze?', 'tyle, ile ustalisz z rodzicami; rób przerwy'],
        ],
        questions: [
          { id: 'q72ijx', q: 'Kolega prosi cię o hasło do twojej gry. Co robisz?', options: ['nie podaję – hasło to tajemnica', 'podaję, bo to kolega', 'zapisuję mu na kartce'], answer: 0, explain: 'Hasło znają tylko rodzice. Nie mówisz go nawet kolegom.' },
          { id: '1eyf4l', q: 'Ktoś w grze internetowej pisze do ciebie brzydkie słowa. Co robisz?', options: ['nie odpisuję i mówię dorosłemu', 'odpisuję jeszcze brzydziej', 'nikomu nie mówię'], answer: 0, explain: 'Nie odpowiadaj na zaczepki. Powiedz o tym rodzicowi albo nauczycielowi.' },
          { id: 'xab9bo', q: 'Jak nazywamy obrażanie i wyśmiewanie kogoś w internecie?', options: ['hejt', 'hasło', 'plik'], answer: 0, explain: 'Hejt to złe, przykre wpisy o kimś. Nie hejtujemy!' },
          { id: '4r1r0m', q: 'Nieznajomy z czatu prosi o twoje zdjęcie. Co robisz?', options: ['nie wysyłam i mówię rodzicom', 'wysyłam jedno zdjęcie', 'wysyłam zdjęcie domu'], answer: 0, explain: 'Nieznajomym nie wysyłamy zdjęć ani danych. Powiedz o tym rodzicom.' },
          { id: '224cbx', q: 'Które zachowanie w internecie jest dobre?', options: ['piszę grzecznie i pomagam', 'wyśmiewam kolegę', 'udostępniam cudze zdjęcia bez pytania'], answer: 0, explain: 'W internecie zachowujemy się tak samo kulturalnie jak w szkole.' },
          { id: 'w85p71', q: 'Ola wydrukowała rysunek z internetu i podpisała go swoim imieniem. Czy dobrze?', options: ['nie – to cudza praca, ma swojego autora', 'tak, bo go wydrukowała', 'tak, bo każdy tak robi'], answer: 0, explain: 'Cudzej pracy nie podpisujemy swoim imieniem.' },
          { id: 'ocol7x', q: 'Na które strony wchodzisz?', options: ['na te, które wskaże rodzic albo nauczyciel', 'na każdą, która wyskoczy', 'na strony z reklamami nagród'], answer: 0, explain: 'Korzystaj ze stron, na które pozwoli dorosły.' },
          { id: 'ydcs0l', q: 'Coś w internecie cię przestraszyło. Co robisz?', options: ['mówię o tym dorosłemu', 'wstydzę się i milczę', 'pokazuję młodszemu bratu'], answer: 0, explain: 'Powiedz dorosłemu. To nie twoja wina, a dorosły pomoże.' },
          { id: '46ev6s', q: 'Długo grasz na tablecie. Co warto zrobić?', options: ['zrobić przerwę i się poruszać', 'grać dalej do nocy', 'przybliżyć tablet do oczu'], answer: 0, explain: 'Rób przerwy: wstań, poruszaj się, popatrz w dal.' },
          { id: 'kuanra', q: 'Prawda czy fałsz?\nW internecie można pisać niemiłe rzeczy, bo nikt nie wie, kto pisze.', options: TF, ...PF, answer: 1, explain: 'Słowa w internecie też ranią. Piszemy grzecznie, jak w rozmowie twarzą w twarz.' },
          { id: 'yyn8gi', q: 'Robicie w grupie plakat na komputerze. Co jest dobrym zachowaniem?', options: ['dzielimy się pomysłami i pracą', 'jedna osoba robi wszystko i nie słucha innych', 'kłócimy się o myszkę'], answer: 0, explain: 'Współpraca: każdy dokłada swój pomysł i swoją część pracy.' },
        ],
      },
    ],
  });
})();
