/* Edukacja plastyczna – klasa 3, tylko wiedza (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – V. Edukacja plastyczna). Rysowanie, malowanie i lepienie dziecko ćwiczy na zajęciach. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), V. Edukacja plastyczna';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III. Aplikacja ćwiczy tylko wiedzę – prace plastyczne wykonuje się na zajęciach.';
  const ZPE = 'Zintegrowana Platforma Edukacyjna (zpe.gov.pl)';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  // Kompozycje: A – symetryczna (motyl), B – rytmiczna (szlaczek), C – swobodna (chmury)
  const SVG_KOMPOZYCJE = `<svg viewBox="0 0 400 160" role="img" aria-label="Trzy rysunki. A: motyl – obie strony takie same, z osią pośrodku. B: szlaczek – kółko, trójkąt, kółko, trójkąt. C: chmury rozrzucone bez porządku">
      <rect x="6" y="20" width="124" height="110" rx="10" class="f1 s1 sw"/>
      <rect x="138" y="20" width="124" height="110" rx="10" class="f4 s4 sw"/>
      <rect x="270" y="20" width="124" height="110" rx="10" class="f3 s3 sw"/>
      <line x1="68" y1="30" x2="68" y2="120" class="ln dash"/>
      <ellipse cx="48" cy="60" rx="18" ry="22" class="f5 s5 sw"/>
      <ellipse cx="88" cy="60" rx="18" ry="22" class="f5 s5 sw"/>
      <ellipse cx="52" cy="96" rx="12" ry="14" class="f2 s2 sw"/>
      <ellipse cx="84" cy="96" rx="12" ry="14" class="f2 s2 sw"/>
      <circle cx="160" cy="75" r="10" class="f2 s2 sw"/>
      <polygon points="186,85 196,65 206,85" class="f1 s1 sw"/>
      <circle cx="226" cy="75" r="10" class="f2 s2 sw"/>
      <polygon points="242,85 252,65 262,85" class="f1 s1 sw"/>
      <ellipse cx="300" cy="50" rx="20" ry="10" class="bg ln"/>
      <ellipse cx="358" cy="72" rx="24" ry="12" class="bg ln"/>
      <ellipse cx="312" cy="104" rx="16" ry="9" class="bg ln"/>
      <text x="68" y="152" class="tx-b" text-anchor="middle">A</text>
      <text x="200" y="152" class="tx-b" text-anchor="middle">B</text>
      <text x="332" y="152" class="tx-b" text-anchor="middle">C</text>
    </svg>`;

  window.SUBJECTS.push({
    id: 'plastyka',
    name: 'Edukacja plastyczna',
    icon: '🎨',
    color: '#c0508a',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'barwy-ksztalty',
        name: 'Barwy, kształty i kompozycje',
        basis: `${PP}, 1. Percepcja wizualna, obserwacja i doświadczenia, pkt 1 (kształty, wielkości i proporcje, barwa, walor, faktura; cechy ludzi i zwierząt), pkt 2 (kompozycje zamknięte, otwarte, rytmy, kompozycje symetryczne). Barwy podstawowe i pochodne, ciepłe i zimne: ${ZPE}, „O barwach i ich rodzajach” (sprawdzone 2.11.2026); rozjaśnianie bielą – ZPE, „Malowanie palcami” (wyniki wyszukiwarki ograniczonej do zpe.gov.pl).${KONIEC}`,
        theory: `
          <h3>Barwy podstawowe i pochodne</h3>
          <p><b>Barwy podstawowe</b>: <b>czerwona</b>, <b>żółta</b>, <b>niebieska</b>. Nie da się ich zrobić z innych farb.</p>
          <p><b>Barwy pochodne</b> powstają ze zmieszania dwóch podstawowych:</p>
          <table><tr><th>mieszam</th><th>wychodzi</th></tr>
            <tr><td>czerwona + żółta</td><td><b>pomarańczowa</b></td></tr>
            <tr><td>żółta + niebieska</td><td><b>zielona</b></td></tr>
            <tr><td>czerwona + niebieska</td><td><b>fioletowa</b></td></tr></table>
          <h3>Barwy ciepłe i zimne</h3>
          <p><b>Ciepłe</b>: żółta, pomarańczowa, czerwona – jak słońce i ogień. <b>Zimne</b>: niebieska, fioletowa – jak woda i lód.</p>
          <h3>Jasno i ciemno</h3>
          <p>Ta sama barwa może być jaśniejsza albo ciemniejsza. Gdy dodasz <b>białej</b> farby – barwa się <b>rozjaśni</b>. To jest <b>walor</b> barwy.</p>
          <h3>Faktura</h3>
          <p><b>Faktura</b> to wygląd powierzchni: gładka (szkło), chropowata (kora drzewa), puszysta (futro kota).</p>
          <h3>Kompozycje</h3>
          <ul>
            <li><b>symetryczna</b> – obie połówki są takie same, jak u motyla,</li>
            <li><b>rytmiczna</b> – te same elementy powtarzają się po kolei, jak w szlaczku,</li>
            <li><b>zamknięta</b> – wszystko mieści się w ramce, np. wzór na dywanie,</li>
            <li><b>otwarta</b> – wygląda, jakby ciągnęła się dalej poza brzeg, np. chmury na niebie, wzór na firance.</li>
          </ul>`,
        flashcards: [
          ['Barwy podstawowe', 'czerwona, żółta, niebieska'],
          ['czerwona + żółta', 'pomarańczowa'],
          ['żółta + niebieska', 'zielona'],
          ['czerwona + niebieska', 'fioletowa'],
          ['Barwy ciepłe', 'żółta, pomarańczowa, czerwona'],
          ['Barwy zimne', 'niebieska, fioletowa'],
          ['Jak rozjaśnić farbę?', 'dodać białej'],
          ['Faktura', 'wygląd powierzchni: gładka, chropowata, puszysta'],
          ['Kompozycja symetryczna', 'obie połówki takie same'],
          ['Kompozycja rytmiczna', 'elementy powtarzają się po kolei'],
          ['Kompozycja otwarta', 'jakby ciągnęła się poza brzeg, np. chmury'],
        ],
        questions: [
          { id: 'fiyivn', q: 'Które barwy są podstawowe?', options: ['czerwona, żółta, niebieska', 'zielona, fioletowa, pomarańczowa', 'biała, czarna, szara'], answer: 0, explain: 'Barwy podstawowe: czerwona, żółta i niebieska. Z nich powstają inne.' },
          { id: 'prrpj4', q: 'Jaka barwa powstanie z żółtej i niebieskiej?', options: ['zielona', 'fioletowa', 'pomarańczowa'], answer: 0, explain: 'Żółta + niebieska = zielona.' },
          { id: '63291z', q: 'Jaka barwa powstanie z czerwonej i żółtej?', options: ['pomarańczowa', 'zielona', 'fioletowa'], answer: 0, explain: 'Czerwona + żółta = pomarańczowa.' },
          { id: 'okijnc', q: 'Jaka barwa powstanie z czerwonej i niebieskiej?', options: ['fioletowa', 'zielona', 'żółta'], answer: 0, explain: 'Czerwona + niebieska = fioletowa.' },
          { id: '0zit1f', q: 'Która barwa jest ciepła?', options: ['pomarańczowa', 'niebieska', 'fioletowa'], answer: 0, explain: 'Ciepłe barwy to żółta, pomarańczowa, czerwona – jak słońce i ogień.' },
          { id: 'a58pwd', q: 'Która barwa jest zimna?', options: ['niebieska', 'czerwona', 'żółta'], answer: 0, explain: 'Niebieska kojarzy się z wodą i lodem – to barwa zimna.' },
          { id: 'o4o4rj', q: 'Masz ciemnoniebieską farbę, a chcesz jaśniejszą. Co dodasz?', options: ['białą', 'czarną', 'czerwoną'], answer: 0, explain: 'Biała farba rozjaśnia barwę.' },
          { id: '2b7t5z', q: 'Jaką fakturę ma kora drzewa?', options: ['chropowatą', 'gładką jak szkło', 'puszystą'], answer: 0, explain: 'Kora jest chropowata – pod palcami czujesz nierówności.' },
          { id: 'jv74xz', q: 'Który rysunek to kompozycja symetryczna?', svg: SVG_KOMPOZYCJE, say: 'Rysunek A: motyl, obie strony takie same. Rysunek B: szlaczek – kółko, trójkąt, kółko, trójkąt. Rysunek C: chmury bez porządku. Który rysunek to kompozycja symetryczna?', options: ['A', 'B', 'C'], ...PF, answer: 0, explain: 'Motyl ma dwie takie same połówki – to kompozycja symetryczna.' },
          { id: 'oufbpq', q: 'Który rysunek to kompozycja rytmiczna?', svg: SVG_KOMPOZYCJE, say: 'Rysunek A: motyl, obie strony takie same. Rysunek B: szlaczek – kółko, trójkąt, kółko, trójkąt. Rysunek C: chmury bez porządku. Który rysunek to kompozycja rytmiczna?', options: ['A', 'B', 'C'], ...PF, answer: 1, explain: 'W szlaczku kółko i trójkąt powtarzają się po kolei – to rytm.' },
          { id: 'fyu9ze', q: 'Chmury na niebie wyglądają, jakby ciągnęły się dalej poza obrazek. Jaka to kompozycja?', options: ['otwarta', 'zamknięta', 'symetryczna'], answer: 0, explain: 'Kompozycja otwarta „wychodzi” poza brzeg obrazka.' },
          { id: 'hfnpui', q: 'Prawda czy fałsz?\nZieloną farbę można zrobić z żółtej i niebieskiej.', options: TF, ...PF, answer: 0, explain: 'Żółta + niebieska = zielona. Zielona to barwa pochodna.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'sztuka',
        name: 'Techniki i dziedziny sztuki',
        basis: `${PP}, 2. Ekspresja twórcza, pkt 1–5 (rysuje, maluje, wydziera, wycina, składa, przylepia, modeluje, powiela – stempel, kalka), pkt 9 (prosta aplikacja komputerowa); 3. Recepcja sztuk plastycznych, pkt 1 (malarstwo, rzeźba, sztuka użytkowa: meblarstwo, tkactwo, ceramika, hafciarstwo, architektura, grafika komputerowa), pkt 2 (pejzaż, portret, scena rodzajowa), pkt 3 (oryginał, kopia, miniatura, reprodukcja; miejsca prezentacji sztuki). Definicje: ${ZPE}, „Mały znawca sztuki” (oryginał, kopia, reprodukcja, dziedziny sztuki) i „Tematyka dzieł sztuki” (pejzaż, portret, scena rodzajowa) – sprawdzone 2.11.2026. Nie podajemy przykładów konkretnych dzieł.${KONIEC}`,
        theory: `
          <h3>Jak tworzymy?</h3>
          <table><tr><th>technika</th><th>co robisz</th></tr>
            <tr><td>✏️ <b>rysunek</b></td><td>rysujesz kredką, ołówkiem, węglem, mazakiem</td></tr>
            <tr><td>🖌️ <b>malarstwo</b></td><td>malujesz farbami pędzlem, palcami, stemplem</td></tr>
            <tr><td>✂️ <b>wydzieranka, wycinanka</b></td><td>wydzierasz albo wycinasz kształty z papieru i przyklejasz</td></tr>
            <tr><td>🧱 <b>lepienie</b></td><td>modelujesz z plasteliny, modeliny, gliny</td></tr>
            <tr><td>🔁 <b>stempel</b></td><td>odbijasz ten sam wzór wiele razy, np. stemplem z ziemniaka albo korka</td></tr></table>
          <h3>Dziedziny sztuki</h3>
          <ul>
            <li><b>malarstwo</b> – obrazy malowane farbami,</li>
            <li><b>rzeźba</b> – figury z kamienia, drewna, metalu, gliny,</li>
            <li><b>architektura</b> – projektowanie budynków, mostów (robi to <b>architekt</b>),</li>
            <li><b>grafika</b> – obrazki, które można powielać, np. plakaty, ilustracje, znaczki; dziś często na komputerze,</li>
            <li><b>sztuka użytkowa</b> – piękne i praktyczne przedmioty: meble, naczynia z gliny (<b>ceramika</b>), tkaniny (<b>tkactwo</b>), hafty.</li>
          </ul>
          <h3>Co przedstawia obraz?</h3>
          <p><b>Pejzaż</b> – krajobraz: góry, las, morze, pole. <b>Portret</b> – konkretna osoba. <b>Scena rodzajowa</b> – zwykłe życie codzienne: praca, zabawa, odpoczynek.</p>
          <h3>Oryginał, kopia, reprodukcja</h3>
          <ul>
            <li><b>oryginał</b> – dzieło zrobione przez samego artystę,</li>
            <li><b>kopia</b> – ktoś inny naśladuje oryginał <b>tą samą techniką</b>, np. maluje go farbami,</li>
            <li><b>reprodukcja</b> – oryginał wydrukowany albo sfotografowany, np. w książce, na pocztówce,</li>
            <li><b>miniatura</b> – bardzo mała wersja obrazu albo rzeźby.</li>
          </ul>
          <p class="tip">Dzieła sztuki oglądamy w <b>muzeum</b> i w <b>galerii</b>. Nie dotykamy ich!</p>`,
        flashcards: [
          ['Wydzieranka', 'wydzierasz kształty z papieru i przyklejasz'],
          ['Stempel', 'odbijasz ten sam wzór wiele razy'],
          ['Rzeźba', 'figura z kamienia, drewna, metalu, gliny'],
          ['Architektura', 'projektowanie budynków; robi to architekt'],
          ['Ceramika', 'naczynia i ozdoby z gliny'],
          ['Pejzaż', 'obraz przedstawiający krajobraz'],
          ['Portret', 'obraz przedstawiający konkretną osobę'],
          ['Scena rodzajowa', 'obraz z codziennego życia'],
          ['Oryginał', 'dzieło zrobione przez artystę'],
          ['Kopia', 'naśladowanie oryginału tą samą techniką'],
          ['Reprodukcja', 'oryginał wydrukowany lub sfotografowany'],
          ['Gdzie oglądamy dzieła sztuki?', 'w muzeum i w galerii'],
        ],
        questions: [
          { id: 'ykmo6l', q: 'Obraz przedstawia góry i las. Jak nazywamy taki obraz?', options: ['pejzaż', 'portret', 'scena rodzajowa'], answer: 0, explain: 'Pejzaż to obraz krajobrazu.' },
          { id: 'w69bxb', q: 'Obraz przedstawia twarz babci. Jak nazywamy taki obraz?', options: ['portret', 'pejzaż', 'rzeźba'], answer: 0, explain: 'Portret przedstawia konkretną osobę.' },
          { id: '3lkfhg', q: 'Obraz pokazuje ludzi przy żniwach na polu. Jak go nazwiemy?', options: ['scena rodzajowa', 'portret', 'miniatura'], answer: 0, explain: 'Scena rodzajowa pokazuje codzienne życie: pracę, zabawę, odpoczynek.' },
          { id: 'yberxe', q: 'Jak nazywa się dzieło zrobione przez samego artystę?', options: ['oryginał', 'kopia', 'reprodukcja'], answer: 0, explain: 'Oryginał to dzieło stworzone przez artystę.' },
          { id: 'raurwn', q: 'Obraz wydrukowany w książce to…', options: ['reprodukcja', 'oryginał', 'rzeźba'], answer: 0, explain: 'Reprodukcja powstaje przez druk albo fotografię.' },
          { id: 'lwiv8y', q: 'Malarz namalował farbami obraz, naśladując dzieło innego artysty. Co powstało?', options: ['kopia', 'oryginał', 'reprodukcja'], answer: 0, explain: 'Kopia naśladuje oryginał tą samą techniką.' },
          { id: 'zey0j6', q: 'Kto projektuje budynki?', options: ['architekt', 'rzeźbiarz', 'krawiec'], answer: 0, explain: 'Budynki i mosty projektuje architekt.' },
          { id: 'fnadpl', q: 'Z czego robi się ceramikę?', options: ['z gliny', 'z wełny', 'z papieru'], answer: 0, explain: 'Ceramika to wyroby z wypalanej gliny, np. kubki i talerze.' },
          { id: 'xgi7eh', q: 'Do której dziedziny sztuki należy figura wykuta z kamienia?', options: ['do rzeźby', 'do malarstwa', 'do grafiki'], answer: 0, explain: 'Rzeźba to figury z kamienia, drewna, metalu albo gliny.' },
          { id: 'i1btha', q: 'Odbijasz ten sam wzór z przekrojonego ziemniaka wiele razy. Jaka to technika?', options: ['stempel', 'wydzieranka', 'lepienie'], answer: 0, explain: 'Stemplem powielamy ten sam wzór.' },
          { id: 'yy7590', q: 'W jakiej technice pracujesz plasteliną?', options: ['w lepieniu', 'w malarstwie', 'w wycinance'], answer: 0, explain: 'Z plasteliny, modeliny i gliny lepimy – modelujemy.' },
          { id: '85tc8y', q: 'Gdzie oglądamy dzieła sztuki?', options: ['w muzeum i w galerii', 'w piekarni', 'na poczcie'], answer: 0, explain: 'Dzieła sztuki wystawia się w muzeach i galeriach.' },
          { id: '4x7vxu', q: 'Prawda czy fałsz?\nW muzeum można dotykać obrazów.', options: TF, ...PF, answer: 1, explain: 'Dzieł sztuki nie dotykamy – łatwo je zniszczyć.' },
        ],
      },
    ],
  });
})();
