/* Język niemiecki jako drugi język obcy – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, język obcy nowożytny,
 * wariant II.2 – drugi język od klasy VII, poziom A1; wymagania wspólne dla klas VII–VIII).
 * Podstawa nie dzieli materiału na klasy ani nie podaje listy struktur gramatycznych – wymaga „bardzo podstawowego
 * zasobu środków językowych” w 12 tematach (wym. I.1–12). Działy obejmują cały poziom A1 (powtórka z klasy 7 + klasa 8);
 * wybór gramatyki to decyzja redakcyjna opisana w `basis` i na stronie „Źródła”.
 * Wiedza o krajach D-A-CH: e-materiał „Deutschland, Österreich und die Schweiz auf einen Blick” (zpe.gov.pl),
 * zwyczaje świąteczne: e-materiały zpe.gov.pl („Frohe Ostern”, „Was bringt der Nikolaus?”, „Mach die Türchen im Adventskalender auf!”).
 * Szczegóły: docs/PLAN-kl8.md. */
window.SUBJECTS.push({
  id: 'niemiecki',
  name: 'Język niemiecki',
  icon: '🇩🇪',
  color: '#c08a1a',
  topics: [
    {
      id: 'kennenlernen',
      name: 'Kennenlernen – przedstawianie się i liczby',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2 (drugi język, kl. VII–VIII): wym. I.1 (człowiek – dane personalne), VI.1–2 i VI.13 (przedstawianie siebie, nawiązywanie kontaktu, zwroty grzecznościowe), VII.1. Gramatyka (odmiana czasowników w czasie teraźniejszym, sein, pytania, liczby) – decyzja redakcyjna w ramach „bardzo podstawowego zasobu środków językowych”.',
      theory: `
        <h3>Powitanie i pożegnanie</h3>
        <table>
          <tr><th>Witamy się</th><th>Żegnamy się</th></tr>
          <tr><td><i>Hallo!</i> – cześć (nieformalnie)<br><i>Guten Morgen!</i> – dzień dobry (rano)<br><i>Guten Tag!</i> – dzień dobry<br><i>Guten Abend!</i> – dobry wieczór</td><td><i>Tschüs!</i> – cześć, pa<br><i>Auf Wiedersehen!</i> – do widzenia<br><i>Bis morgen!</i> – do jutra<br><i>Gute Nacht!</i> – dobranoc</td></tr>
        </table>
        <h3>Najważniejsze pytania o ciebie</h3>
        <table>
          <tr><th>Pytanie</th><th>Odpowiedź</th></tr>
          <tr><td><i>Wie heißt du?</i> – Jak masz na imię?</td><td><i>Ich heiße Ola.</i></td></tr>
          <tr><td><i>Wie alt bist du?</i> – Ile masz lat?</td><td><i>Ich bin 14 (Jahre alt).</i></td></tr>
          <tr><td><i>Woher kommst du?</i> – Skąd jesteś?</td><td><i>Ich komme aus Polen.</i></td></tr>
          <tr><td><i>Wo wohnst du?</i> – Gdzie mieszkasz?</td><td><i>Ich wohne in Krakau.</i></td></tr>
          <tr><td><i>Wie geht's?</i> – Jak się masz?</td><td><i>Danke, gut! / Es geht. / Nicht so gut.</i></td></tr>
        </table>
        <p>Do dorosłej, obcej osoby mówisz <b>Sie</b> (pisane wielką literą): <i>Wie heißen Sie? Woher kommen Sie? Wie geht es Ihnen?</i></p>
        <h3>Odmiana czasownika w czasie teraźniejszym (Präsens)</h3>
        <table>
          <tr><th>osoba</th><th>wohnen</th><th>sein (być)</th></tr>
          <tr><td>ich</td><td>wohn<b>e</b></td><td><b>bin</b></td></tr>
          <tr><td>du</td><td>wohn<b>st</b></td><td><b>bist</b></td></tr>
          <tr><td>er / sie / es</td><td>wohn<b>t</b></td><td><b>ist</b></td></tr>
          <tr><td>wir</td><td>wohn<b>en</b></td><td><b>sind</b></td></tr>
          <tr><td>ihr</td><td>wohn<b>t</b></td><td><b>seid</b></td></tr>
          <tr><td>sie / Sie</td><td>wohn<b>en</b></td><td><b>sind</b></td></tr>
        </table>
        <div class="tip">💡 <i>heißen</i>: du <b>heißt</b>, er <b>heißt</b> – bez dodatkowego „s”, bo temat kończy się na ß.</div>
        <h3>Pytania</h3>
        <ul>
          <li>Pytanie ze słówkiem pytającym (<i>wer?</i> kto, <i>was?</i> co, <i>wo?</i> gdzie, <i>woher?</i> skąd, <i>wie?</i> jak): <b>słówko + czasownik + osoba</b> – <i>Wo wohnst du?</i></li>
          <li>Pytanie „tak/nie”: <b>czasownik na początku</b> – <i>Kommst du aus Polen?</i> – <i>Ja. / Nein.</i></li>
        </ul>
        <h3>Liczby</h3>
        <p>0 null, 1 eins, 2 zwei, 3 drei, 4 vier, 5 fünf, 6 sechs, 7 sieben, 8 acht, 9 neun, 10 zehn, 11 elf, 12 zwölf, 13 dreizehn, 16 <b>sech</b>zehn, 17 <b>sieb</b>zehn, 20 zwanzig, 30 drei<b>ß</b>ig, 40 vierzig, 70 siebzig, 100 hundert.</p>
        <div class="tip">💡 Od 21 czytamy „od tyłu”: najpierw jedności, potem dziesiątki – 21 = <i>ein<b>und</b>zwanzig</i> (jeden i dwadzieścia), 34 = <i>vierunddreißig</i>, 58 = <i>achtundfünfzig</i>.</div>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['Wie heißt du?', 'Jak masz na imię?'],
        ['Wie alt bist du?', 'Ile masz lat?'],
        ['Woher kommst du?', 'Skąd jesteś? (Skąd pochodzisz?)'],
        ['Wo wohnst du?', 'Gdzie mieszkasz?'],
        ['Wie geht\'s?', 'Jak się masz?'],
        ['Wie heißen Sie?', 'Jak się pan / pani nazywa? (forma grzecznościowa)'],
        ['Tschüs! / Auf Wiedersehen!', 'Cześć! (na pożegnanie) / Do widzenia!'],
        ['ich bin, du bist, er ist', 'ja jestem, ty jesteś, on jest (sein)'],
        ['wir sind, ihr seid, sie sind', 'my jesteśmy, wy jesteście, oni są'],
        ['einundzwanzig', '21 (najpierw jedności, potem dziesiątki)'],
        ['dreißig', '30 (z ß, nie „dreizig”)'],
        ['sechzehn, siebzehn', '16, 17 (bez „s” i bez „en”)'],
      ],
      questions: [
        { id: 'kq61hm', q: 'Ktoś pyta: „Wie heißt du?”. Która odpowiedź pasuje?', options: ['Ich heiße Ola.', 'Ich bin 14.', 'Ich komme aus Polen.', 'Danke, gut.'], answer: 0, explain: '„Wie heißt du?” – „Jak masz na imię?”.' },
        { id: 's66t3j', q: 'Ich ___ 14 Jahre alt.', options: ['bin', 'bist', 'ist', 'sind'], answer: 0, explain: 'sein: ich bin, du bist, er ist.' },
        { id: 'ymh0wv', q: 'Woher ___ du?', options: ['kommst', 'kommt', 'komme', 'kommen'], answer: 0, explain: 'Przy „du” końcówka -st: du kommst.' },
        { id: 'p9j2pv', q: 'O co pyta zdanie „Woher kommst du?”', options: ['skąd jesteś (pochodzisz)', 'gdzie teraz mieszkasz', 'ile masz lat', 'jak masz na imię'], answer: 0, explain: '„woher” = skąd. Gdzie mieszkasz – „Wo wohnst du?”.' },
        { id: 'znn860', q: 'Jak po niemiecku jest 34?', options: ['vierunddreißig', 'dreiundvierzig', 'dreißigvier', 'vierdreißig'], answer: 0, explain: 'Najpierw jedności (vier), potem „und” i dziesiątki (dreißig).' },
        { id: 'f8jhk3', q: 'Pytasz o imię starszego pana w recepcji hotelu. Co powiesz?', options: ['Wie heißen Sie?', 'Wie heißt du?', 'Wie heißt ihr?', 'Wie heiße ich?'], answer: 0, explain: 'Do obcej, dorosłej osoby – forma grzecznościowa Sie.' },
        { id: 'ne2ixz', q: 'Wir ___ in Warschau.', options: ['wohnen', 'wohnt', 'wohnst', 'wohne'], answer: 0, explain: 'wir → końcówka -en: wir wohnen.' },
        { id: '2m8w1d', q: 'Który zwrot NIE jest pożegnaniem?', options: ['Hallo!', 'Tschüs!', 'Auf Wiedersehen!', 'Bis morgen!'], answer: 0, explain: '„Hallo!” to powitanie: „cześć” na dzień dobry.' },
        { id: '0snv1c', q: 'Er ___ Paul.', options: ['heißt', 'heißen', 'heiße', 'heißst'], answer: 0, explain: 'er heißt – temat kończy się na ß, więc dodajemy tylko -t.' },
        { id: '8lq9lk', q: 'W pytaniu „Kommst du aus Polen?” czasownik stoi na pierwszym miejscu.', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'W pytaniu „tak/nie” czasownik otwiera zdanie.' },
        { id: '0lwl6x', q: 'Jak po niemiecku jest 17?', options: ['siebzehn', 'siebenzehn', 'sechzehn', 'siebzig'], answer: 0, explain: '17 = siebzehn (bez „en”); siebzig to 70, sechzehn to 16.' },
        { id: 'uu5nrk', q: 'Kolega pyta: „Wie geht\'s?”. Co odpowiesz?', options: ['Danke, gut!', 'Ich heiße Tom.', 'Aus Polen.', 'Ich bin 13.'], answer: 0, explain: '„Wie geht\'s?” – „Jak się masz?”.' },
      ],
      tasks: [
        {
          id: '4ekb15',
          points: 4,
          q: 'Napisz po niemiecku krótki e-mail do nowego kolegi z Niemiec (Lukas). Przedstaw się: podaj imię, wiek, skąd jesteś i gdzie mieszkasz. Zapytaj go o wiek i o miejsce zamieszkania. Pamiętaj o powitaniu i pożegnaniu.',
          steps: [
            'Zacznij od powitania: Hallo Lukas!',
            'Przedstaw się: Ich heiße Ola. Ich bin 14 Jahre alt.',
            'Napisz, skąd jesteś i gdzie mieszkasz: Ich komme aus Polen. Ich wohne in Krakau.',
            'Zadaj pytania (czasownik po słówku pytającym): Wie alt bist du? Wo wohnst du?',
            'Pożegnaj się: Tschüs! / Bis bald! Ola',
          ],
          answer: 'Np.: Hallo Lukas! Ich heiße Ola. Ich bin 14 Jahre alt. Ich komme aus Polen und wohne in Krakau. Wie alt bist du? Wo wohnst du? Tschüs, Ola',
          scoring: [
            '1 p. – powitanie i pożegnanie',
            '1 p. – imię i wiek',
            '1 p. – skąd jesteś i gdzie mieszkasz',
            '1 p. – dwa poprawnie zbudowane pytania (słówko pytające + czasownik + du). Punktacja orientacyjna.',
          ],
        },
      ],
    },
    {
      id: 'familie',
      name: 'Familie – rodzina, wygląd i zawody',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.1 (wygląd zewnętrzny, cechy charakteru), I.4 (popularne zawody, miejsce pracy), I.5 (rodzina), IV.1 i V.1 (opisywanie ludzi), VI.1 (przedstawianie innych osób). Gramatyka (haben, zaimki dzierżawcze mein/dein/sein/ihr, żeńskie formy zawodów) – decyzja redakcyjna.',
      theory: `
        <h3>Rodzina – die Familie</h3>
        <table>
          <tr><th>męskie (der)</th><th>żeńskie (die)</th></tr>
          <tr><td>der Vater – tata</td><td>die Mutter – mama</td></tr>
          <tr><td>der Bruder – brat</td><td>die Schwester – siostra</td></tr>
          <tr><td>der Opa / Großvater – dziadek</td><td>die Oma / Großmutter – babcia</td></tr>
          <tr><td>der Onkel – wujek</td><td>die Tante – ciocia</td></tr>
          <tr><td>der Cousin – kuzyn</td><td>die Cousine – kuzynka</td></tr>
        </table>
        <p>Tylko w liczbie mnogiej: <b>die Eltern</b> – rodzice, <b>die Geschwister</b> – rodzeństwo, <b>die Großeltern</b> – dziadkowie.</p>
        <h3>haben – mieć</h3>
        <p>ich <b>habe</b>, du <b>hast</b>, er/sie/es <b>hat</b>, wir <b>haben</b>, ihr <b>habt</b>, sie/Sie <b>haben</b>. <i>Ich habe einen Bruder und eine Schwester.</i></p>
        <h3>Mój, twój, jego, jej</h3>
        <table>
          <tr><th></th><th>der / das</th><th>die / liczba mnoga</th></tr>
          <tr><td>mój</td><td><b>mein</b> Bruder</td><td><b>meine</b> Mutter</td></tr>
          <tr><td>twój</td><td><b>dein</b> Vater</td><td><b>deine</b> Eltern</td></tr>
          <tr><td>jego</td><td><b>sein</b> Opa</td><td><b>seine</b> Schwester</td></tr>
          <tr><td>jej</td><td><b>ihr</b> Onkel</td><td><b>ihre</b> Tante</td></tr>
        </table>
        <div class="tip">💡 „jego” czy „jej” zależy od tego, <b>czyje</b> to jest: <i>Lisa und <b>ihr</b> Bruder</i> (brat Lisy), <i>Tom und <b>sein</b> Bruder</i> (brat Toma).</div>
        <h3>Wygląd i charakter</h3>
        <ul>
          <li><i>Er ist groß / klein / schlank.</i> – Jest wysoki / niski / szczupły.</li>
          <li><i>Sie hat lange, blonde Haare und blaue Augen.</i> – Ma długie, jasne włosy i niebieskie oczy.</li>
          <li>charakter: <i>nett</i> (miły), <i>lustig</i> (zabawny), <i>freundlich</i> (życzliwy), <i>ruhig</i> (spokojny), <i>fleißig</i> (pracowity) ↔ <i>faul</i> (leniwy).</li>
        </ul>
        <h3>Zawody – die Berufe</h3>
        <p>Forma żeńska ma zwykle końcówkę <b>-in</b>: der Lehrer → die Lehrer<b>in</b>, der Verkäufer → die Verkäufer<b>in</b>, der Polizist → die Polizist<b>in</b>; czasem z przegłosem: der Arzt → die <b>Ä</b>rzt<b>in</b>, der Koch → die K<b>ö</b>ch<b>in</b>.</p>
        <p><i>Was ist dein Vater von Beruf?</i> – <i>Er ist Arzt.</i> <i>Wo arbeitet er?</i> – <i>Im Krankenhaus.</i></p>
        <div class="tip">💡 Mówiąc o zawodzie, <b>nie</b> używamy rodzajnika: <i>Meine Mutter ist Lehrerin.</i> (nie „eine Lehrerin”).</div>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['die Eltern', 'rodzice (tylko liczba mnoga)'],
        ['die Geschwister', 'rodzeństwo'],
        ['die Großeltern', 'dziadkowie'],
        ['ich habe, du hast, er hat', 'ja mam, ty masz, on ma (haben)'],
        ['mein Bruder – meine Schwester', 'mój brat – moja siostra (mein przy der/das, meine przy die)'],
        ['sein / ihr', 'jego / jej'],
        ['Er hat blaue Augen.', 'On ma niebieskie oczy.'],
        ['fleißig ↔ faul', 'pracowity ↔ leniwy'],
        ['nett, lustig, ruhig', 'miły, zabawny, spokojny'],
        ['der Arzt – die Ärztin', 'lekarz – lekarka'],
        ['der Lehrer – die Lehrerin', 'nauczyciel – nauczycielka'],
        ['Was ist dein Vater von Beruf?', 'Kim z zawodu jest twój tata?'],
      ],
      questions: [
        { id: 'fwqtg5', q: 'Das ist ___ Mutter. (moja)', options: ['meine', 'mein', 'meinen', 'meiner'], answer: 0, explain: 'die Mutter → meine.' },
        { id: '32mzyi', q: 'Das ist ___ Bruder. (mój)', options: ['mein', 'meine', 'meinen', 'meines'], answer: 0, explain: 'der Bruder → mein.' },
        { id: 'jjb5pf', q: 'Co znaczy „die Geschwister”?', options: ['rodzeństwo', 'rodzice', 'dziadkowie', 'kuzyni'], answer: 0, explain: 'Rodzice to „die Eltern”, dziadkowie – „die Großeltern”.' },
        { id: '1jojt5', q: 'Ich ___ eine Schwester.', options: ['habe', 'hat', 'hast', 'haben'], answer: 0, explain: 'ich habe, du hast, er hat.' },
        { id: 'xbqta2', q: 'Er ___ zwei Brüder.', options: ['hat', 'habt', 'hast', 'habe'], answer: 0, explain: 'er/sie/es hat.' },
        { id: '1huq7y', q: '„Anna ist Ärztin.” Kim jest Anna?', options: ['lekarką', 'nauczycielką', 'sprzedawczynią', 'kucharką'], answer: 0, explain: 'der Arzt – die Ärztin: lekarz – lekarka.' },
        { id: 'fkx8vg', q: 'Jak powiesz: „Moja mama jest nauczycielką”?', options: ['Meine Mutter ist Lehrerin.', 'Meine Mutter ist eine Lehrer.', 'Mein Mutter ist Lehrerin.', 'Meine Mutter ist Lehrer.'], answer: 0, explain: 'meine (die Mutter), forma żeńska Lehrerin i bez rodzajnika.' },
        { id: 'wlpy27', q: 'Das ist Lisa. ___ Bruder heißt Max. (jej brat)', options: ['Ihr', 'Sein', 'Mein', 'Dein'], answer: 0, explain: 'Brat Lisy – „jej” = ihr.' },
        { id: 'dtgxr4', q: 'Wybierz przeciwieństwo słowa „fleißig”.', options: ['faul', 'nett', 'lustig', 'groß'], answer: 0, explain: 'fleißig – pracowity, faul – leniwy.' },
        { id: 'e7nebb', q: '„Er hat blaue Augen und kurze Haare.” To opis…', options: ['wyglądu', 'charakteru', 'zawodu', 'zainteresowań'], answer: 0, explain: 'Oczy i włosy – wygląd zewnętrzny.' },
        { id: 'jnr6cf', q: 'Jaka jest żeńska forma słowa „der Koch” (kucharz)?', options: ['die Köchin', 'die Kochin', 'die Kochfrau', 'die Köche'], answer: 0, explain: 'Przegłos + -in: die Köchin. „die Köche” to liczba mnoga.' },
        { id: 'vf8san', q: '„Was ist dein Vater von Beruf?” Która odpowiedź pasuje?', options: ['Er ist Polizist.', 'Er ist 40.', 'Er wohnt in Berlin.', 'Er ist nett.'], answer: 0, explain: 'Pytanie o zawód – odpowiadamy zawodem, bez rodzajnika.' },
      ],
    },
    {
      id: 'schule',
      name: 'Schule – przedmioty, przybory i rodzajniki',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.3 (szkoła i jej pomieszczenia, przedmioty nauczania, przybory szkolne, życie szkoły), IV.4 i V.4 (upodobania), VI.11 (prośba). Gramatyka (rodzajniki der/die/das, ein/kein, liczba mnoga, biernik rodzaju męskiego, dni tygodnia) – decyzja redakcyjna.',
      theory: `
        <h3>Rodzajniki – der, die, das</h3>
        <table>
          <tr><th></th><th>męski</th><th>żeński</th><th>nijaki</th><th>l. mnoga</th></tr>
          <tr><td>określony</td><td><b>der</b> Bleistift</td><td><b>die</b> Schere</td><td><b>das</b> Heft</td><td><b>die</b> Hefte</td></tr>
          <tr><td>nieokreślony</td><td><b>ein</b> Bleistift</td><td><b>eine</b> Schere</td><td><b>ein</b> Heft</td><td>– Hefte</td></tr>
          <tr><td>przeczenie</td><td><b>kein</b> Bleistift</td><td><b>keine</b> Schere</td><td><b>kein</b> Heft</td><td><b>keine</b> Hefte</td></tr>
        </table>
        <div class="tip">💡 Rodzaj po niemiecku często jest inny niż po polsku: <i>das Lineal</i> (linijka – po polsku żeńska), <i>der Kuli</i> (długopis). Ucz się rzeczowników <b>razem z rodzajnikiem</b>.</div>
        <h3>Przybory – die Schulsachen</h3>
        <p>der Bleistift (ołówek), der Kuli (długopis), der Radiergummi (gumka), der Spitzer (temperówka), das Heft (zeszyt), das Buch (książka), das Lineal (linijka), das Federmäppchen (piórnik), die Schere (nożyczki), die Schultasche (tornister).</p>
        <h3>Liczba mnoga</h3>
        <p>Końcówki są różne – ucz się ich ze słówkiem: das Heft → die Heft<b>e</b>, der Bleistift → die Bleistift<b>e</b>, das Buch → die B<b>ü</b>ch<b>er</b>, die Schere → die Schere<b>n</b>, der Kuli → die Kuli<b>s</b>. W mianowniku liczby mnogiej rodzajnik to zawsze <b>die</b>.</p>
        <h3>Biernik (Akkusativ) – kogo? co?</h3>
        <p>Po czasownikach <i>haben, brauchen</i> (potrzebować), <i>kaufen</i> itp. zmienia się <b>tylko rodzaj męski</b>: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>.</p>
        <ul>
          <li><i>Ich brauche <b>einen</b> Bleistift.</i> – Potrzebuję ołówka.</li>
          <li><i>Ich habe <b>keinen</b> Kuli.</i> – Nie mam długopisu.</li>
          <li><i>Ich habe <b>eine</b> Schere und <b>ein</b> Heft.</i> – żeński i nijaki bez zmian.</li>
        </ul>
        <h3>Przedmioty – die Schulfächer</h3>
        <p>Mathe, Deutsch, Englisch, Polnisch, Biologie, Chemie, Physik, Geschichte (historia), Erdkunde (geografia), Informatik, Kunst (plastyka), Musik, Sport (WF). <i>Mein Lieblingsfach ist Bio.</i> <i>Mathe finde ich interessant / langweilig / leicht / schwer.</i></p>
        <h3>Dni tygodnia</h3>
        <p>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. W poniedziałek – <b>am</b> Montag: <i>Am Montag habe ich Mathe.</i></p>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['der, die, das', 'rodzajnik męski, żeński, nijaki'],
        ['ein – eine – ein', 'rodzajnik nieokreślony: męski – żeński – nijaki'],
        ['Ich brauche einen Bleistift.', 'Potrzebuję ołówka. (biernik: ein → einen)'],
        ['Ich habe keinen Kuli.', 'Nie mam długopisu.'],
        ['das Buch – die Bücher', 'książka – książki'],
        ['der Radiergummi', 'gumka do mazania'],
        ['das Lineal', 'linijka'],
        ['das Federmäppchen', 'piórnik'],
        ['die Geschichte / die Erdkunde', 'historia / geografia'],
        ['Mein Lieblingsfach ist…', 'Mój ulubiony przedmiot to…'],
        ['Montag, Dienstag, Mittwoch', 'poniedziałek, wtorek, środa'],
        ['Donnerstag, Freitag, Samstag, Sonntag', 'czwartek, piątek, sobota, niedziela'],
        ['am Montag', 'w poniedziałek'],
      ],
      questions: [
        { id: 't9oh0n', q: 'Wybierz rodzajnik: ___ Heft (zeszyt)', options: ['das', 'der', 'die', 'den'], answer: 0, explain: 'das Heft – rodzaj nijaki.' },
        { id: 'j5pg26', q: 'Wybierz rodzajnik: ___ Schere (nożyczki)', options: ['die', 'der', 'das', 'den'], answer: 0, explain: 'die Schere – rodzaj żeński.' },
        { id: 'gavdk3', q: 'Ich brauche ___ Bleistift.', options: ['einen', 'ein', 'eine', 'einer'], answer: 0, explain: 'der Bleistift w bierniku: einen.' },
        { id: 'hojv92', q: 'Ich habe ___ Lineal. (nie mam linijki)', options: ['kein', 'keinen', 'keine', 'nicht'], answer: 0, explain: 'das Lineal – nijaki, w bierniku bez zmian: kein.' },
        { id: 'ezkbiz', q: 'Liczba mnoga od „das Buch” to…', options: ['die Bücher', 'die Buchs', 'die Buche', 'die Büchen'], answer: 0, explain: 'das Buch – die Bücher (przegłos + -er).' },
        { id: 'g9dbig', q: 'Jaki dzień jest po „Dienstag”?', options: ['Mittwoch', 'Montag', 'Donnerstag', 'Freitag'], answer: 0, explain: 'Dienstag (wtorek) → Mittwoch (środa).' },
        { id: 'w5szlv', q: 'Co to za przedmiot: „Geschichte”?', options: ['historia', 'geografia', 'chemia', 'plastyka'], answer: 0, explain: 'Geschichte – historia; geografia to Erdkunde.' },
        { id: '4u3f61', q: 'Jak powiesz „w poniedziałek”?', options: ['am Montag', 'im Montag', 'um Montag', 'in Montag'], answer: 0, explain: 'Z dniami tygodnia: am.' },
        { id: '7nk868', q: 'W mianowniku liczby mnogiej rodzajnik określony to zawsze „die”.', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'die Hefte, die Bücher, die Bleistifte – zawsze die.' },
        { id: 'fe4a0q', q: 'Co znaczy: „Mein Lieblingsfach ist Sport.”?', options: ['Moim ulubionym przedmiotem jest WF.', 'Nie lubię WF-u.', 'Mam dziś WF.', 'Mój brat lubi sport.'], answer: 0, explain: 'Lieblingsfach – ulubiony przedmiot.' },
        { id: 'us65vj', q: 'Co to jest „der Radiergummi”?', options: ['gumka do mazania', 'temperówka', 'linijka', 'piórnik'], answer: 0, explain: 'temperówka – der Spitzer, linijka – das Lineal, piórnik – das Federmäppchen.' },
        { id: 'awelna', q: '„Hast du einen Kuli?” – „Nein, ich habe ___ Kuli.”', options: ['keinen', 'kein', 'keine', 'nicht'], answer: 0, explain: 'der Kuli w bierniku: keinen.' },
      ],
    },
    {
      id: 'tagesablauf',
      name: 'Tagesablauf – godziny i plan dnia',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.5 (czynności życia codziennego, określanie czasu), IV.2 i V.2 (opowiadanie o czynnościach z teraźniejszości), VI.3 (uzyskiwanie informacji). Gramatyka (podawanie godziny, czasowniki rozdzielnie złożone, szyk z czasownikiem na 2. miejscu) – decyzja redakcyjna.',
      theory: `
        <h3>Która godzina?</h3>
        <p><i>Wie spät ist es?</i> albo <i>Wie viel Uhr ist es?</i> – Która godzina? <i>Um wie viel Uhr…?</i> – O której…? → <i><b>Um</b> sieben Uhr.</i></p>
        <table>
          <tr><th>godzina</th><th>oficjalnie (rozkład, radio)</th><th>potocznie</th></tr>
          <tr><td>7:00</td><td>sieben Uhr</td><td>sieben</td></tr>
          <tr><td>7:10</td><td>sieben Uhr zehn</td><td>zehn <b>nach</b> sieben</td></tr>
          <tr><td>7:15</td><td>sieben Uhr fünfzehn</td><td><b>Viertel nach</b> sieben</td></tr>
          <tr><td>7:30</td><td>sieben Uhr dreißig</td><td><b>halb acht</b></td></tr>
          <tr><td>7:45</td><td>sieben Uhr fünfundvierzig</td><td><b>Viertel vor</b> acht</td></tr>
          <tr><td>14:20</td><td>vierzehn Uhr zwanzig</td><td>zwanzig nach zwei</td></tr>
        </table>
        <div class="tip">💡 <b>halb</b> + <b>następna</b> godzina, tak jak po polsku „wpół do ósmej”: <i>halb acht</i> = 7:30.</div>
        <h3>Pory dnia</h3>
        <p><b>am</b> Morgen (rano), am Vormittag (przed południem), am Mittag (w południe), am Nachmittag (po południu), am Abend (wieczorem), ale <b>in der</b> Nacht (w nocy).</p>
        <h3>Mój dzień</h3>
        <p>aufstehen (wstawać), frühstücken (jeść śniadanie), zur Schule gehen, zu Mittag essen (jeść obiad), Hausaufgaben machen (odrabiać lekcje), fernsehen (oglądać telewizję), einkaufen (robić zakupy), aufräumen (sprzątać), ins Bett gehen (iść spać).</p>
        <h3>Czasowniki rozdzielnie złożone</h3>
        <p>Przedrostek (<i>auf-, fern-, ein-</i>) odrywa się i idzie <b>na koniec zdania</b>:</p>
        <ul>
          <li><i>aufstehen</i> → <i>Ich <b>stehe</b> um sechs Uhr <b>auf</b>.</i></li>
          <li><i>fernsehen</i> → <i>Er <b>sieht</b> am Abend <b>fern</b>.</i> (sehen: du siehst, er sieht)</li>
        </ul>
        <h3>Czasownik na 2. miejscu</h3>
        <p>W zdaniu oznajmującym odmieniony czasownik stoi zawsze na <b>drugim miejscu</b>. Gdy zaczniesz od czasu, osoba przechodzi za czasownik:</p>
        <p><i>Ich frühstücke um sieben Uhr.</i> → <i>Um sieben Uhr <b>frühstücke</b> ich.</i></p>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['Wie spät ist es?', 'Która godzina?'],
        ['Um wie viel Uhr?', 'O której godzinie?'],
        ['halb acht', '7:30 (wpół do ósmej)'],
        ['Viertel nach sieben', '7:15'],
        ['Viertel vor acht', '7:45'],
        ['zehn nach sieben', '7:10'],
        ['am Nachmittag', 'po południu'],
        ['in der Nacht', 'w nocy'],
        ['aufstehen → Ich stehe um 6 Uhr auf.', 'wstawać → Wstaję o 6.'],
        ['fernsehen → Er sieht fern.', 'oglądać telewizję → On ogląda telewizję.'],
        ['zu Mittag essen', 'jeść obiad'],
        ['Hausaufgaben machen', 'odrabiać zadania domowe'],
      ],
      questions: [
        { id: 'wecbvf', q: 'Jak potocznie powiesz 7:30?', options: ['halb acht', 'halb sieben', 'sieben halb', 'Viertel nach sieben'], answer: 0, explain: 'halb + następna godzina: wpół do ósmej.' },
        { id: 'ucfeju', q: 'Która to godzina: „Viertel nach acht”?', options: ['8:15', '7:45', '8:30', '8:45'], answer: 0, explain: 'nach = po: kwadrans po ósmej.' },
        { id: '7m45gk', q: 'Jak potocznie powiesz 9:45?', options: ['Viertel vor zehn', 'Viertel nach neun', 'halb zehn', 'Viertel vor neun'], answer: 0, explain: 'Za kwadrans dziesiąta – Viertel vor zehn.' },
        { id: 'alsln9', q: 'Wybierz poprawne zdanie.', options: ['Ich stehe um sechs Uhr auf.', 'Ich aufstehe um sechs Uhr.', 'Ich stehe um sechs Uhr aufstehen.', 'Ich um sechs Uhr aufstehe.'], answer: 0, explain: 'Przedrostek „auf” odrywa się i idzie na koniec.' },
        { id: 'aq2czi', q: 'Wybierz poprawny szyk.', options: ['Am Abend sehe ich fern.', 'Am Abend ich sehe fern.', 'Am Abend ich fernsehe.', 'Am Abend fern sehe ich.'], answer: 0, explain: 'Czasownik na 2. miejscu, osoba za nim, „fern” na końcu.' },
        { id: 'pvjalu', q: '„Um wie viel Uhr beginnt die Schule?” Która odpowiedź pasuje?', options: ['Um acht Uhr.', 'Am Montag.', 'Im Sommer.', 'Zwei Stunden.'], answer: 0, explain: 'Pytanie „o której?” – odpowiedź z „um”.' },
        { id: 'm70gr0', q: 'Wybierz poprawne zdanie.', options: ['Er sieht am Abend fern.', 'Er seht am Abend fern.', 'Er fernsieht am Abend.', 'Er sehen am Abend fern.'], answer: 0, explain: 'sehen: er sieht; „fern” na końcu zdania.' },
        { id: '88a30j', q: 'Co znaczy „am Nachmittag”?', options: ['po południu', 'przed południem', 'wieczorem', 'w nocy'], answer: 0, explain: 'Vormittag – przed południem, Nachmittag – po południu.' },
        { id: '57l9vt', q: 'Jak oficjalnie przeczytasz 14:20?', options: ['vierzehn Uhr zwanzig', 'zwanzig Uhr vierzehn', 'vier Uhr zwanzig', 'vierzig Uhr zwanzig'], answer: 0, explain: 'Najpierw godzina + Uhr, potem minuty.' },
        { id: 'ky0z4o', q: '„halb neun” to 8:30.', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'Wpół do dziewiątej = 8:30.' },
        { id: 'nsszyt', q: 'Co znaczy: „Wir essen um 14 Uhr zu Mittag.”?', options: ['Jemy obiad o 14.', 'Jemy śniadanie o 14.', 'Jemy kolację o 14.', 'Idziemy spać o 14.'], answer: 0, explain: 'zu Mittag essen – jeść obiad.' },
      ],
    },
    {
      id: 'freizeit',
      name: 'Freizeit und Sport – hobby, umiejętności, propozycje',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.1 (umiejętności i zainteresowania), I.5 (formy spędzania czasu wolnego), I.10 (dyscypliny sportu, sprzęt i obiekty sportowe), IV.4 i VI.5 (upodobania i pragnienia), VI.8 (propozycje). Gramatyka (gern/lieber/am liebsten, czasowniki ze zmianą samogłoski, czasowniki modalne können, wollen, möchten) – decyzja redakcyjna.',
      theory: `
        <h3>Hobby i sport</h3>
        <p>lesen (czytać), Musik hören, tanzen, zeichnen (rysować), schwimmen, Rad fahren (jeździć na rowerze), Ski fahren, Fußball / Tennis / Basketball spielen, Computerspiele spielen, Freunde treffen (spotykać się z przyjaciółmi), ins Kino gehen.</p>
        <p>Sprzęt: der Ball, das Fahrrad, die Skier (narty), die Schlittschuhe (łyżwy). Miejsca: das Schwimmbad (basen), der Sportplatz (boisko), die Sporthalle (hala sportowa).</p>
        <h3>Co lubię – gern, lieber, am liebsten</h3>
        <ul>
          <li><i>Ich spiele <b>gern</b> Fußball.</i> – Lubię grać w piłkę.</li>
          <li><i>Ich schwimme <b>nicht gern</b>.</i> – Nie lubię pływać.</li>
          <li><i>Ich tanze <b>lieber</b>.</i> – Wolę tańczyć.</li>
          <li><i><b>Am liebsten</b> lese ich.</i> – Najbardziej lubię czytać.</li>
        </ul>
        <h3>Czasowniki ze zmianą samogłoski</h3>
        <p>Zmiana jest tylko przy <b>du</b> i <b>er/sie/es</b>:</p>
        <table>
          <tr><th>bezokolicznik</th><th>du</th><th>er / sie / es</th></tr>
          <tr><td>fahren (jechać)</td><td>f<b>ä</b>hrst</td><td>f<b>ä</b>hrt</td></tr>
          <tr><td>lesen (czytać)</td><td>l<b>ie</b>st</td><td>l<b>ie</b>st</td></tr>
          <tr><td>sehen (widzieć)</td><td>s<b>ie</b>hst</td><td>s<b>ie</b>ht</td></tr>
          <tr><td>treffen (spotykać)</td><td>tr<b>i</b>ffst</td><td>tr<b>i</b>fft</td></tr>
          <tr><td>essen (jeść)</td><td><b>i</b>sst</td><td><b>i</b>sst</td></tr>
        </table>
        <h3>Czasowniki modalne</h3>
        <table>
          <tr><th></th><th>können (umieć, móc)</th><th>wollen (chcieć)</th><th>möchten (chciałbym)</th></tr>
          <tr><td>ich</td><td>kann</td><td>will</td><td>möchte</td></tr>
          <tr><td>du</td><td>kannst</td><td>willst</td><td>möchtest</td></tr>
          <tr><td>er/sie/es</td><td>kann</td><td>will</td><td>möchte</td></tr>
          <tr><td>wir</td><td>können</td><td>wollen</td><td>möchten</td></tr>
          <tr><td>ihr</td><td>könnt</td><td>wollt</td><td>möchtet</td></tr>
          <tr><td>sie/Sie</td><td>können</td><td>wollen</td><td>möchten</td></tr>
        </table>
        <div class="tip">💡 Czasownik modalny stoi na 2. miejscu, a drugi czasownik – w <b>bezokoliczniku na końcu</b>: <i>Ich <b>kann</b> gut <b>schwimmen</b>.</i> <i>Willst du ins Kino <b>gehen</b>?</i></div>
        <h3>Propozycje</h3>
        <p><i>Hast du Lust, ins Kino zu gehen?</i> – Masz ochotę…? / <i>Gehen wir schwimmen?</i> → <i>Gute Idee! / Ja, gern!</i> albo <i>Leider kann ich nicht.</i> (Niestety nie mogę.)</p>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['Ich spiele gern Fußball.', 'Lubię grać w piłkę nożną.'],
        ['lieber / am liebsten', 'chętniej (wolę) / najchętniej (najbardziej lubię)'],
        ['Rad fahren', 'jeździć na rowerze'],
        ['die Schlittschuhe / die Skier', 'łyżwy / narty'],
        ['das Schwimmbad', 'basen'],
        ['du fährst, er fährt', 'ty jedziesz, on jedzie (fahren)'],
        ['du liest, er liest', 'ty czytasz, on czyta (lesen)'],
        ['er trifft', 'on spotyka (treffen)'],
        ['ich kann, du kannst', 'ja umiem/mogę, ty umiesz/możesz'],
        ['ich will, du willst', 'ja chcę, ty chcesz'],
        ['Hast du Lust…?', 'Masz ochotę…?'],
        ['Leider kann ich nicht.', 'Niestety nie mogę.'],
      ],
      questions: [
        { id: 'qlt7j0', q: 'Er ___ gern Bücher.', options: ['liest', 'lest', 'lesst', 'lesen'], answer: 0, explain: 'lesen: du liest, er liest.' },
        { id: '1c8h3a', q: '___ du gut schwimmen?', options: ['Kannst', 'Kann', 'Könnt', 'Können'], answer: 0, explain: 'können: du kannst.' },
        { id: 'se70jf', q: 'Ich kann gut ___.', options: ['tanzen', 'tanze', 'tanzt', 'getanzt'], answer: 0, explain: 'Po czasowniku modalnym – bezokolicznik na końcu.' },
        { id: 'fb1qer', q: 'Wybierz poprawny szyk.', options: ['Ich will heute Tennis spielen.', 'Ich will spielen heute Tennis.', 'Ich spielen will heute Tennis.', 'Ich heute will Tennis spielen.'], answer: 0, explain: '„will” na 2. miejscu, „spielen” na końcu.' },
        { id: 'xonmpl', q: 'Du ___ gern Rad.', options: ['fährst', 'fahrst', 'fährt', 'fahren'], answer: 0, explain: 'fahren: du fährst (z przegłosem), er fährt.' },
        { id: 'h23btx', q: 'Co znaczy: „Am liebsten schwimme ich.”?', options: ['Najbardziej lubię pływać.', 'Nie lubię pływać.', 'Pływam codziennie.', 'Nie umiem pływać.'], answer: 0, explain: 'am liebsten – najchętniej, najbardziej.' },
        { id: '94dla7', q: 'Kolega pyta: „Hast du Lust, ins Kino zu gehen?”. Która odpowiedź to odmowa?', options: ['Leider kann ich nicht.', 'Gute Idee!', 'Ja, gern!', 'Super, ich komme mit!'], answer: 0, explain: '„Leider kann ich nicht” – niestety nie mogę.' },
        { id: '8sqi84', q: 'Czego potrzebujesz na lodowisku?', options: ['die Schlittschuhe', 'die Skier', 'der Ball', 'das Fahrrad'], answer: 0, explain: 'die Schlittschuhe – łyżwy.' },
        { id: '0rvn9t', q: 'Er ___ seine Freunde im Park.', options: ['trifft', 'treffst', 'trefft', 'triffst'], answer: 0, explain: 'treffen: er trifft (zmiana e → i).' },
        { id: 'o44nt0', q: '___ ihr Fußball spielen? (chcecie)', options: ['Wollt', 'Will', 'Willst', 'Wollen'], answer: 0, explain: 'wollen: ihr wollt.' },
        { id: 'ynafl5', q: 'Ich ___ gern Ski.', options: ['fahre', 'spiele', 'mache', 'treffe'], answer: 0, explain: 'Na nartach się jeździ: Ski fahren. Spielen – w gry z piłką.' },
        { id: '9az277', q: 'Ich schwimme im ___.', options: ['Schwimmbad', 'Sportplatz', 'Kino', 'Bahnhof'], answer: 0, explain: 'das Schwimmbad – basen.' },
      ],
    },
    {
      id: 'essen',
      name: 'Essen und Trinken – jedzenie i w restauracji',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.6 (artykuły spożywcze, posiłki, lokale gastronomiczne), VI.5 i VI.11 (pragnienia, prośba), VI.13 (formy grzecznościowe). Gramatyka (biernik z einen/keinen, möchte, essen) – decyzja redakcyjna.',
      theory: `
        <h3>Jedzenie i picie</h3>
        <table>
          <tr><th>der</th><th>die</th><th>das</th></tr>
          <tr><td>der Käse (ser)<br>der Saft (sok)<br>der Tee, der Kaffee<br>der Fisch (ryba)<br>der Apfel (jabłko)<br>der Kuchen (ciasto)</td><td>die Milch (mleko)<br>die Butter (masło)<br>die Wurst (wędlina, kiełbasa)<br>die Suppe (zupa)<br>die Banane, die Tomate<br>die Kartoffel (ziemniak)</td><td>das Brot (chleb)<br>das Brötchen (bułka)<br>das Wasser (woda)<br>das Ei (jajko)<br>das Fleisch (mięso)<br>das Eis (lody)</td></tr>
        </table>
        <p>das Obst – owoce, das Gemüse – warzywa.</p>
        <h3>Posiłki</h3>
        <p>das Frühstück (śniadanie), das Mittagessen (obiad), das Abendessen (kolacja). <i>Ich habe Hunger.</i> – Jestem głodny. <i>Ich habe Durst.</i> – Chce mi się pić.</p>
        <h3>essen – jeść</h3>
        <p>ich esse, du <b>isst</b>, er <b>isst</b>, wir essen, ihr esst, sie essen.</p>
        <h3>W kawiarni i restauracji</h3>
        <table>
          <tr><th>gość</th><th>kelner</th></tr>
          <tr><td><i>Die Speisekarte, bitte.</i> – Poproszę kartę.<br><i>Ich möchte eine Pizza.</i> – Chciałbym pizzę.<br><i>Ich nehme einen Orangensaft.</i> – Wezmę sok.<br><i>Was kostet die Suppe?</i> – Ile kosztuje zupa?<br><i>Zahlen, bitte! / Die Rechnung, bitte!</i> – Płacę! / Poproszę rachunek.</td><td><i>Was möchtest du / möchten Sie?</i> – Co podać?<br><i>Was möchtest du trinken?</i><br><i>Guten Appetit!</i> – Smacznego!</td></tr>
        </table>
        <p><i>Das schmeckt lecker!</i> – To jest pyszne!</p>
        <div class="tip">💡 Zamawiasz – to biernik: <b>einen</b> Saft (der), <b>eine</b> Suppe (die), <b>ein</b> Eis (das). Czegoś nie jesz – <i>Ich esse <b>kein</b> Fleisch</i> (das), <i><b>keinen</b> Fisch</i> (der).</div>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['das Brot / das Brötchen', 'chleb / bułka'],
        ['die Wurst', 'wędlina, kiełbasa'],
        ['das Obst / das Gemüse', 'owoce / warzywa'],
        ['das Frühstück / das Mittagessen / das Abendessen', 'śniadanie / obiad / kolacja'],
        ['Ich habe Hunger.', 'Jestem głodny.'],
        ['Ich habe Durst.', 'Chce mi się pić.'],
        ['du isst, er isst', 'ty jesz, on je (essen)'],
        ['Ich möchte einen Tee.', 'Chciałbym herbatę.'],
        ['Die Speisekarte, bitte.', 'Poproszę kartę (menu).'],
        ['Zahlen, bitte!', 'Chciałbym zapłacić!'],
        ['Guten Appetit!', 'Smacznego!'],
        ['Das schmeckt lecker!', 'To jest pyszne!'],
      ],
      questions: [
        { id: 'in2w3w', q: 'Du ___ gern Fisch.', options: ['isst', 'esst', 'esse', 'essen'], answer: 0, explain: 'essen: du isst, er isst.' },
        { id: 'vufnxh', q: 'Ich möchte ___ Apfelsaft.', options: ['einen', 'ein', 'eine', 'einem'], answer: 0, explain: 'der Saft – w bierniku einen.' },
        { id: '1lwkgw', q: 'Co znaczy „Ich habe Durst”?', options: ['Chce mi się pić.', 'Jestem głodny.', 'Jestem zmęczony.', 'Smakuje mi.'], answer: 0, explain: 'Durst – pragnienie; głód to Hunger.' },
        { id: 'ezz26x', q: 'W kawiarni chcesz zapłacić. Co mówisz?', options: ['Zahlen, bitte!', 'Guten Appetit!', 'Die Speisekarte, bitte!', 'Ich habe Hunger!'], answer: 0, explain: 'Zahlen = płacić.' },
        { id: '2kdgd2', q: 'Co NIE jest owocem?', options: ['die Kartoffel', 'der Apfel', 'die Banane', 'die Orange'], answer: 0, explain: 'die Kartoffel – ziemniak, to warzywo.' },
        { id: 'elwzoc', q: 'Co znaczy „das Abendessen”?', options: ['kolacja', 'obiad', 'śniadanie', 'deser'], answer: 0, explain: 'Abend – wieczór, więc posiłek wieczorny.' },
        { id: 'ynrpcu', q: 'Kelner pyta: „Was möchtest du trinken?”. Co odpowiesz?', options: ['Eine Cola, bitte.', 'Eine Pizza, bitte.', 'Ja, sehr gut.', 'Um acht Uhr.'], answer: 0, explain: 'Pytanie o napój – trinken = pić.' },
        { id: 'tn49cr', q: 'Wybierz rodzajnik: ___ Ei (jajko)', options: ['das', 'der', 'die', 'den'], answer: 0, explain: 'das Ei – rodzaj nijaki.' },
        { id: 'cawenc', q: 'Ich esse ___ Fleisch. Ich bin Vegetarier.', options: ['kein', 'keinen', 'keine', 'nicht'], answer: 0, explain: 'das Fleisch – nijaki: kein.' },
        { id: '53tc0b', q: 'Co znaczy: „Das schmeckt lecker!”?', options: ['To jest pyszne!', 'To jest za drogie!', 'To jest zimne!', 'Nie lubię tego!'], answer: 0, explain: 'schmecken – smakować, lecker – pyszny.' },
        { id: '59e8ub', q: '„Was kostet die Suppe?” Która odpowiedź pasuje?', options: ['Fünf Euro.', 'Sehr gut.', 'Mit Brot.', 'Am Abend.'], answer: 0, explain: '„Was kostet…?” – ile kosztuje?' },
      ],
    },
    {
      id: 'einkaufen',
      name: 'Einkaufen – sklepy, ubrania i ceny',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.7 (rodzaje sklepów, towary i ich cechy, sprzedawanie i kupowanie), I.1 (rzeczy osobiste), VI.3–4 (uzyskiwanie informacji, wyrażanie opinii). Gramatyka (gefallen, zaimki w bierniku ihn/sie/es, ceny) – decyzja redakcyjna.',
      theory: `
        <h3>Sklepy</h3>
        <p>der Supermarkt, der Markt (targ), die Bäckerei (piekarnia), die Apotheke (apteka), die Buchhandlung (księgarnia), das Schuhgeschäft (sklep obuwniczy), das Kaufhaus (dom towarowy).</p>
        <h3>Ubrania i kolory</h3>
        <p>die Hose (spodnie), die Jeans, der Rock (spódnica), das Kleid (sukienka), das T-Shirt, der Pullover, die Jacke (kurtka), die Mütze (czapka), die Schuhe (buty).</p>
        <p>rot, blau, grün, gelb (żółty), schwarz, weiß, grau, braun, rosa, orange.</p>
        <h3>W sklepie</h3>
        <table>
          <tr><th>sprzedawca</th><th>klient</th></tr>
          <tr><td><i>Kann ich Ihnen helfen?</i> – W czym mogę pomóc?<br><i>Welche Größe?</i> – Jaki rozmiar?</td><td><i>Ich suche eine Jacke.</i> – Szukam kurtki.<br><i>Kann ich die Jacke anprobieren?</i> – Czy mogę przymierzyć?<br><i>Was kostet der Pullover?</i> – Ile kosztuje sweter?<br><i>Das ist zu teuer / zu groß.</i> – To za drogie / za duże.<br><i>Ich nehme ihn.</i> – Wezmę go.</td></tr>
        </table>
        <h3>Podoba mi się – gefallen</h3>
        <ul>
          <li><i>Der Rock <b>gefällt</b> mir.</i> – Spódnica mi się podoba (jedna rzecz).</li>
          <li><i>Die Schuhe <b>gefallen</b> mir nicht.</i> – Buty mi się nie podobają (wiele rzeczy).</li>
        </ul>
        <h3>Wezmę go / ją / je</h3>
        <table>
          <tr><th>rzecz</th><th>zaimek w bierniku</th></tr>
          <tr><td>der Pullover</td><td>Ich nehme <b>ihn</b>.</td></tr>
          <tr><td>die Jacke</td><td>Ich nehme <b>sie</b>.</td></tr>
          <tr><td>das T-Shirt</td><td>Ich nehme <b>es</b>.</td></tr>
          <tr><td>die Schuhe (l. mn.)</td><td>Ich nehme <b>sie</b>.</td></tr>
        </table>
        <h3>Ceny</h3>
        <p>2,50 € – <i>zwei Euro fünfzig</i>; 3,99 € – <i>drei Euro neunundneunzig</i>. <i>Der Pullover kostet 30 Euro.</i> – drogo: <i>teuer</i>, tanio: <i>billig</i>.</p>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['die Bäckerei', 'piekarnia'],
        ['die Apotheke', 'apteka'],
        ['die Buchhandlung', 'księgarnia'],
        ['die Hose / der Rock / das Kleid', 'spodnie / spódnica / sukienka'],
        ['die Jacke / die Mütze', 'kurtka / czapka'],
        ['gelb, grau, braun', 'żółty, szary, brązowy'],
        ['Kann ich Ihnen helfen?', 'W czym mogę pomóc?'],
        ['Kann ich das anprobieren?', 'Czy mogę to przymierzyć?'],
        ['Das ist zu teuer.', 'To jest za drogie.'],
        ['Der Rock gefällt mir.', 'Ta spódnica mi się podoba.'],
        ['Ich nehme ihn / sie / es.', 'Wezmę go / ją / je (der / die / das).'],
        ['zwei Euro fünfzig', '2,50 €'],
      ],
      questions: [
        { id: 'yqmij4', q: 'Gdzie kupisz świeży chleb i bułki?', options: ['in der Bäckerei', 'in der Apotheke', 'in der Buchhandlung', 'im Schuhgeschäft'], answer: 0, explain: 'die Bäckerei – piekarnia.' },
        { id: 'p2jz73', q: 'Gdzie kupisz leki?', options: ['in der Apotheke', 'in der Bäckerei', 'auf dem Sportplatz', 'im Kino'], answer: 0, explain: 'die Apotheke – apteka.' },
        { id: 'cohp44', q: 'Der Pullover ___ mir.', options: ['gefällt', 'gefallen', 'gefällst', 'gefalle'], answer: 0, explain: 'Jedna rzecz – gefällt.' },
        { id: 'k1262q', q: 'Die Schuhe ___ mir nicht.', options: ['gefallen', 'gefällt', 'gefällst', 'gefalle'], answer: 0, explain: 'die Schuhe – liczba mnoga: gefallen.' },
        { id: '66cs5w', q: 'Co znaczy „Das ist zu teuer”?', options: ['To jest za drogie.', 'To jest za tanie.', 'To jest za duże.', 'To jest za małe.'], answer: 0, explain: 'teuer – drogi, billig – tani.' },
        { id: 'mctetu', q: 'Sprzedawca pyta: „Kann ich Ihnen helfen?”. Co odpowiesz?', options: ['Ja, ich suche eine Jacke.', 'Ja, sie gefällt mir.', 'Danke, gut.', 'Nein, sie ist rot.'], answer: 0, explain: '„W czym mogę pomóc?” – „Szukam kurtki”.' },
        { id: '8bs44t', q: 'Die Jacke ist super. Ich nehme ___.', options: ['sie', 'ihn', 'es', 'ihr'], answer: 0, explain: 'die Jacke → sie.' },
        { id: 'ujujfy', q: 'Der Rock kostet 25 Euro. Ich nehme ___.', options: ['ihn', 'sie', 'es', 'er'], answer: 0, explain: 'der Rock → w bierniku ihn.' },
        { id: 'llye1w', q: 'Jak przeczytasz cenę 3,99 €?', options: ['drei Euro neunundneunzig', 'drei Euro neunzig neun', 'neunundneunzig Euro drei', 'dreißig Euro neunundneunzig'], answer: 0, explain: 'Najpierw euro, potem centy: 99 = neunundneunzig.' },
        { id: '1vj8r2', q: 'Jaki to kolor: „gelb”?', options: ['żółty', 'zielony', 'szary', 'brązowy'], answer: 0, explain: 'zielony – grün, szary – grau, brązowy – braun.' },
        { id: 'xobqe1', q: 'Co znaczy: „Kann ich das Kleid anprobieren?”', options: ['Czy mogę przymierzyć tę sukienkę?', 'Czy mogę kupić tę sukienkę?', 'Ile kosztuje ta sukienka?', 'Czy ta sukienka jest w rozmiarze M?'], answer: 0, explain: 'anprobieren – przymierzać.' },
      ],
    },
    {
      id: 'wohnen',
      name: 'Wohnen – dom, pokój i gdzie co stoi',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.2 (dom i jego okolica, pomieszczenia i wyposażenie domu, prace domowe), IV.1 i V.1 (opisywanie miejsc). Gramatyka (es gibt + biernik, przyimki miejsca z celownikiem: in, auf, unter, neben, vor, hinter, über, zwischen) – decyzja redakcyjna.',
      theory: `
        <h3>Dom i pomieszczenia</h3>
        <p>das Haus (dom), die Wohnung (mieszkanie), das Zimmer (pokój): das Wohnzimmer (salon), das Schlafzimmer (sypialnia), das Kinderzimmer (pokój dziecięcy), die Küche (kuchnia), das Badezimmer / das Bad (łazienka), der Flur (przedpokój), der Balkon, der Garten (ogród).</p>
        <h3>Meble</h3>
        <p>das Bett (łóżko), der Tisch (stół), der Schreibtisch (biurko), der Stuhl (krzesło), der Schrank (szafa), das Regal (regał), das Sofa, der Sessel (fotel), der Teppich (dywan), die Lampe, das Bild (obraz).</p>
        <h3>Co jest w moim pokoju – es gibt</h3>
        <p><i>In meinem Zimmer <b>gibt es</b> einen Schreibtisch, ein Bett und eine Lampe.</i> Po <b>es gibt</b> stoi biernik (der → einen). <i>Mein Zimmer ist klein, aber gemütlich (przytulny) und hell (jasny).</i></p>
        <h3>Gdzie? – przyimki + celownik (Dativ)</h3>
        <p>in (w), auf (na), unter (pod), über (nad), neben (obok), vor (przed), hinter (za), zwischen (między). Na pytanie <b>Wo?</b> (gdzie?) rodzajnik zmienia się:</p>
        <table>
          <tr><th>mianownik</th><th>celownik (Wo?)</th><th>przykład</th></tr>
          <tr><td>der Tisch</td><td><b>dem</b> Tisch</td><td><i>Die Lampe steht auf <b>dem</b> Tisch.</i></td></tr>
          <tr><td>das Bett</td><td><b>dem</b> Bett</td><td><i>Der Ball liegt unter <b>dem</b> Bett.</i></td></tr>
          <tr><td>die Lampe</td><td><b>der</b> Lampe</td><td><i>Die Katze sitzt neben <b>der</b> Lampe.</i></td></tr>
        </table>
        <div class="tip">💡 Skróty: <b>im</b> = in dem (<i>im Regal</i>), <b>am</b> = an dem. Rodzaj żeński: die → <b>der</b> – nie pomyl z rodzajnikiem męskim!</div>
        <h3>Prace domowe</h3>
        <p>aufräumen (sprzątać), staubsaugen (odkurzać), abwaschen (zmywać), kochen (gotować), das Bett machen (ścielić łóżko), den Müll rausbringen (wynosić śmieci). <i>Ich räume mein Zimmer auf.</i></p>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['die Wohnung', 'mieszkanie'],
        ['das Wohnzimmer / das Schlafzimmer', 'salon / sypialnia'],
        ['die Küche / das Badezimmer', 'kuchnia / łazienka'],
        ['der Flur', 'przedpokój'],
        ['der Schrank / das Regal', 'szafa / regał'],
        ['der Schreibtisch', 'biurko'],
        ['es gibt + biernik', 'jest, znajduje się (Es gibt einen Tisch.)'],
        ['auf / unter / über', 'na / pod / nad'],
        ['neben / vor / hinter / zwischen', 'obok / przed / za / między'],
        ['auf dem Tisch / neben der Lampe', 'na stole / obok lampy (celownik)'],
        ['im = in dem', 'w (im Regal – na regale, w regale)'],
        ['aufräumen', 'sprzątać'],
      ],
      questions: [
        { id: 'aloxfx', q: 'Die Katze liegt ___ dem Bett. (pod)', options: ['unter', 'auf', 'neben', 'über'], answer: 0, explain: 'unter – pod.' },
        { id: 'd0e51u', q: 'Das Buch liegt auf ___ Tisch.', options: ['dem', 'der', 'den', 'das'], answer: 0, explain: 'der Tisch, pytanie „gdzie?” – celownik: dem.' },
        { id: 'l44hvh', q: 'Die Lampe steht neben ___ Couch. (die Couch)', options: ['der', 'dem', 'den', 'die'], answer: 0, explain: 'Rodzaj żeński w celowniku: die → der.' },
        { id: 'wrb4fh', q: 'In meinem Zimmer gibt es ___ Schreibtisch.', options: ['einen', 'ein', 'eine', 'einem'], answer: 0, explain: 'Po „es gibt” – biernik: der Schreibtisch → einen.' },
        { id: 's3825d', q: 'Co znaczy „die Küche”?', options: ['kuchnia', 'łazienka', 'sypialnia', 'przedpokój'], answer: 0, explain: 'łazienka – das Bad, sypialnia – das Schlafzimmer, przedpokój – der Flur.' },
        { id: 'z6wuie', q: 'Gdzie zwykle jest wanna albo prysznic?', options: ['im Badezimmer', 'in der Küche', 'im Wohnzimmer', 'im Flur'], answer: 0, explain: 'das Badezimmer – łazienka.' },
        { id: 'r26v4y', q: 'Co znaczy: „Ich räume mein Zimmer auf.”?', options: ['Sprzątam swój pokój.', 'Maluję swój pokój.', 'Opisuję swój pokój.', 'Wychodzę z pokoju.'], answer: 0, explain: 'aufräumen – sprzątać.' },
        { id: 'xbu89b', q: 'Skrót „im” to…', options: ['in dem', 'in der', 'in den', 'in das'], answer: 0, explain: 'in + dem = im (np. im Regal).' },
        { id: 'tmp2lh', q: 'Po przyimku „neben” w odpowiedzi na pytanie „Wo?” używamy celownika (Dativ).', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'Na pytanie „gdzie?” przyimki miejsca łączą się z celownikiem.' },
        { id: 'n8qbju', q: 'Das Bild hängt ___ dem Sofa. (nad)', options: ['über', 'unter', 'vor', 'zwischen'], answer: 0, explain: 'über – nad.' },
        { id: '03f144', q: 'Mein Zimmer ist klein, aber ___.', options: ['gemütlich', 'Schrank', 'Küche', 'Bett'], answer: 0, explain: 'Potrzebny przymiotnik: gemütlich – przytulny.' },
      ],
      tasks: [
        {
          id: 'pededi',
          points: 4,
          q: 'Opisz po niemiecku swój pokój w 4–5 zdaniach: jaki jest, co w nim jest (użyj „es gibt”) i gdzie stoją co najmniej dwie rzeczy (użyj przyimków miejsca).',
          steps: [
            'Jaki jest pokój: Mein Zimmer ist klein, aber hell und gemütlich.',
            'Co w nim jest – „es gibt” + biernik: In meinem Zimmer gibt es ein Bett, einen Schreibtisch und einen Schrank.',
            'Gdzie co stoi – przyimek + celownik: Der Schreibtisch steht neben dem Fenster. Die Lampe steht auf dem Schreibtisch.',
            'Możesz dodać, co robisz w pokoju: Hier lerne ich und höre Musik.',
          ],
          answer: 'Np.: Mein Zimmer ist klein, aber hell. In meinem Zimmer gibt es ein Bett, einen Schreibtisch und einen Schrank. Der Schreibtisch steht neben dem Fenster. Die Lampe steht auf dem Schreibtisch. Hier lerne ich.',
          scoring: [
            '1 p. – opis pokoju (przymiotniki)',
            '1 p. – „es gibt” z poprawnym biernikiem (einen przy rodzaju męskim)',
            '1 p. – dwie rzeczy z przyimkiem miejsca i poprawnym celownikiem (dem/der)',
            '1 p. – poprawny szyk (czasownik na 2. miejscu) w większości zdań. Punktacja orientacyjna.',
          ],
        },
      ],
    },
    {
      id: 'stadt',
      name: 'In der Stadt – droga, transport i podróże',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.8 (środki transportu i korzystanie z nich, orientacja w terenie, hotel, wycieczki), I.7 (korzystanie z usług), VI.3 (uzyskiwanie i przekazywanie informacji), VI.10 (nakazywanie), VIII.1 (informacje z mapy). Gramatyka (mit dem/der, zum/zur, tryb rozkazujący) – decyzja redakcyjna.',
      theory: `
        <h3>Miejsca w mieście</h3>
        <p>der Bahnhof (dworzec), die Haltestelle (przystanek), die Post (poczta), die Bank, das Kino, das Museum, die Kirche (kościół), das Krankenhaus (szpital), der Park, das Hotel, die Straße (ulica).</p>
        <h3>Pytamy o drogę</h3>
        <ul>
          <li><i>Entschuldigung, wo ist der Bahnhof?</i> – Przepraszam, gdzie jest dworzec?</li>
          <li><i>Wie komme ich <b>zum</b> Bahnhof / <b>zur</b> Post?</i> – Jak dojdę do dworca / na pocztę?</li>
          <li><i>Gehen Sie geradeaus, dann links / rechts.</i> – Proszę iść prosto, potem w lewo / w prawo.</li>
          <li><i>Nehmen Sie die erste Straße rechts.</i> – Proszę skręcić w pierwszą ulicę w prawo.</li>
          <li><i>Es ist (nicht) weit.</i> – To (nie)daleko.</li>
        </ul>
        <div class="tip">💡 <b>zum</b> = zu dem (der, das: zum Bahnhof, zum Kino), <b>zur</b> = zu der (die: zur Post, zur Schule).</div>
        <h3>Czym jedziesz? – mit + celownik</h3>
        <p><i>mit <b>dem</b> Bus / Auto / Zug (pociąg) / Fahrrad</i>, <i>mit <b>der</b> U-Bahn (metro) / Straßenbahn (tramwaj)</i>, ale <i><b>zu Fuß</b></i> – pieszo. <i>Ich fahre mit dem Bus zur Schule.</i></p>
        <h3>Tryb rozkazujący (Imperativ)</h3>
        <table>
          <tr><th>do kogo</th><th>gehen</th><th>kommen</th><th>nehmen</th></tr>
          <tr><td>du</td><td><b>Geh!</b></td><td><b>Komm!</b></td><td><b>Nimm!</b></td></tr>
          <tr><td>ihr</td><td><b>Geht!</b></td><td><b>Kommt!</b></td><td><b>Nehmt!</b></td></tr>
          <tr><td>Sie</td><td><b>Gehen Sie!</b></td><td><b>Kommen Sie!</b></td><td><b>Nehmen Sie!</b></td></tr>
        </table>
        <p>Forma <b>du</b> = czasownik bez końcówki -st i bez „du” (<i>du kommst → Komm!</i>); zmiana e → i zostaje (<i>du nimmst → Nimm!</i>).</p>
        <h3>W podróży</h3>
        <ul>
          <li><i>Eine Fahrkarte nach Berlin, bitte.</i> – <i>Einfach oder hin und zurück?</i> (W jedną stronę czy w obie?)</li>
          <li><i>Wann fährt der Zug nach Berlin?</i> – O której odjeżdża pociąg?</li>
          <li>W hotelu: <i>Ich möchte ein Einzelzimmer / Doppelzimmer für zwei Nächte.</i> – pokój jednoosobowy / dwuosobowy na dwie noce.</li>
        </ul>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['der Bahnhof / die Haltestelle', 'dworzec / przystanek'],
        ['das Krankenhaus', 'szpital'],
        ['Wie komme ich zum Bahnhof?', 'Jak dojdę do dworca?'],
        ['zum / zur', 'zu dem (der, das) / zu der (die)'],
        ['geradeaus / links / rechts', 'prosto / w lewo / w prawo'],
        ['mit dem Bus / mit der U-Bahn', 'autobusem / metrem'],
        ['die Straßenbahn / der Zug', 'tramwaj / pociąg'],
        ['zu Fuß', 'pieszo'],
        ['Geh! Komm! Nimm!', 'Idź! Chodź! Weź! (do jednej osoby, du)'],
        ['Gehen Sie geradeaus!', 'Proszę iść prosto! (forma grzecznościowa)'],
        ['einfach / hin und zurück', 'w jedną stronę / tam i z powrotem'],
        ['das Einzelzimmer / das Doppelzimmer', 'pokój jednoosobowy / dwuosobowy'],
      ],
      questions: [
        { id: 'g7zacb', q: 'Ich fahre ___ Bus zur Schule.', options: ['mit dem', 'mit der', 'mit den', 'mit'], answer: 0, explain: 'der Bus → mit dem Bus.' },
        { id: '9zbffz', q: 'Wie komme ich ___ Post?', options: ['zur', 'zum', 'zu dem', 'zu den'], answer: 0, explain: 'die Post → zu der = zur.' },
        { id: 'lf0cxf', q: 'Wie komme ich ___ Bahnhof?', options: ['zum', 'zur', 'zu die', 'zu der'], answer: 0, explain: 'der Bahnhof → zu dem = zum.' },
        { id: 'dz564y', q: 'Co znaczy „Gehen Sie geradeaus”?', options: ['Proszę iść prosto.', 'Proszę skręcić w lewo.', 'Proszę skręcić w prawo.', 'Proszę zawrócić.'], answer: 0, explain: 'geradeaus – prosto.' },
        { id: '8fah5s', q: 'Tryb rozkazujący dla „du” od „kommen” to…', options: ['Komm!', 'Kommst!', 'Kommen Sie!', 'Kommt du!'], answer: 0, explain: 'du kommst → bez -st i bez du: Komm!' },
        { id: 'j3j7um', q: 'Tryb rozkazujący dla „du” od „nehmen” to…', options: ['Nimm!', 'Nehmst!', 'Nimmst!', 'Nehmt du!'], answer: 0, explain: 'du nimmst → Nimm! (zmiana e → i zostaje).' },
        { id: 'cfohr4', q: 'Co znaczy „der Zug”?', options: ['pociąg', 'metro', 'tramwaj', 'samolot'], answer: 0, explain: 'metro – die U-Bahn, tramwaj – die Straßenbahn, samolot – das Flugzeug.' },
        { id: 'qezr93', q: 'Kasjerka pyta: „Einfach oder hin und zurück?”. O co pyta?', options: ['W jedną stronę czy w obie strony?', 'Pierwsza czy druga klasa?', 'Z którego peronu?', 'O której odjeżdża pociąg?'], answer: 0, explain: 'hin und zurück – tam i z powrotem.' },
        { id: 'jmpvhc', q: 'W hotelu prosisz o pokój jednoosobowy. Jak to jest po niemiecku?', options: ['das Einzelzimmer', 'das Doppelzimmer', 'das Wohnzimmer', 'das Kinderzimmer'], answer: 0, explain: 'einzeln – pojedynczy; Doppelzimmer – dwuosobowy.' },
        { id: 'xebwrd', q: 'Co znaczy „zu Fuß”?', options: ['pieszo', 'rowerem', 'samochodem', 'autobusem'], answer: 0, explain: 'der Fuß – stopa; zu Fuß gehen – iść pieszo.' },
        { id: 'ngiw9w', q: 'Wskazujesz drogę obcej, dorosłej osobie. Które zdanie jest poprawne?', options: ['Nehmen Sie die erste Straße rechts.', 'Nimm Sie die erste Straße rechts.', 'Nehmt Sie die erste Straße rechts.', 'Nehmen du die erste Straße rechts.'], answer: 0, explain: 'Forma grzecznościowa: bezokolicznik + Sie.' },
      ],
    },
    {
      id: 'gesundheit',
      name: 'Gesundheit – ciało, choroby i u lekarza',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.11 (samopoczucie, choroby i ich objawy, wizyta u lekarza), VI.9 (pytanie o pozwolenie, udzielanie i odmawianie), VI.10 (nakazywanie, zakazywanie), VI.12 (wyrażanie uczuć). Gramatyka (Mir tut … weh, czasowniki modalne müssen i dürfen) – decyzja redakcyjna.',
      theory: `
        <h3>Ciało – der Körper</h3>
        <table>
          <tr><th>der</th><th>die</th><th>das</th></tr>
          <tr><td>der Kopf (głowa)<br>der Hals (szyja, gardło)<br>der Bauch (brzuch)<br>der Rücken (plecy)<br>der Arm (ręka)<br>der Fuß (stopa)<br>der Zahn (ząb)</td><td>die Nase (nos)<br>die Hand (dłoń)<br>die Augen (oczy, l. mn.)<br>die Zähne (zęby)<br>die Füße (stopy)</td><td>das Auge (oko)<br>das Ohr (ucho)<br>das Bein (noga)<br>das Knie (kolano)</td></tr>
        </table>
        <h3>Co ci dolega?</h3>
        <p><i>Was fehlt dir?</i> / <i>Was tut dir weh?</i> – Co ci dolega? / Co cię boli?</p>
        <ul>
          <li><i>Mir <b>tut</b> der Kopf weh.</i> – Boli mnie głowa (jedna rzecz).</li>
          <li><i>Mir <b>tun</b> die Füße weh.</i> – Bolą mnie stopy (liczba mnoga).</li>
          <li><i>Ich habe Kopfschmerzen / Bauchschmerzen / Halsschmerzen / Zahnschmerzen.</i> – Mam ból głowy / brzucha / gardła / zęba.</li>
          <li><i>Ich habe Fieber / Schnupfen / Husten / eine Grippe.</i> – Mam gorączkę / katar / kaszel / grypę.</li>
          <li><i>Ich bin krank.</i> – Jestem chory. <i>Gute Besserung!</i> – Szybkiego powrotu do zdrowia!</li>
        </ul>
        <h3>müssen i dürfen</h3>
        <table>
          <tr><th></th><th>müssen (musieć)</th><th>dürfen (móc – mieć pozwolenie)</th></tr>
          <tr><td>ich</td><td>muss</td><td>darf</td></tr>
          <tr><td>du</td><td>musst</td><td>darfst</td></tr>
          <tr><td>er/sie/es</td><td>muss</td><td>darf</td></tr>
          <tr><td>wir</td><td>müssen</td><td>dürfen</td></tr>
          <tr><td>ihr</td><td>müsst</td><td>dürft</td></tr>
          <tr><td>sie/Sie</td><td>müssen</td><td>dürfen</td></tr>
        </table>
        <ul>
          <li>U lekarza: <i>Du <b>musst</b> im Bett bleiben.</i> <i>Du <b>darfst nicht</b> in die Schule gehen.</i> (zakaz)</li>
          <li>Pytanie o pozwolenie: <i><b>Darf</b> ich das Fenster öffnen?</i> – <i>Ja, natürlich. / Nein, leider nicht.</i></li>
          <li>Polecenia lekarza w trybie rozkazującym: <i>Bleib im Bett! Trink viel Tee!</i></li>
        </ul>
        <div class="tip">💡 <i>nicht dürfen</i> = nie wolno (zakaz), a <i>nicht müssen</i> = nie trzeba.</div>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['der Kopf / der Bauch / der Rücken', 'głowa / brzuch / plecy'],
        ['das Bein / der Fuß', 'noga / stopa'],
        ['der Hals', 'szyja, gardło'],
        ['Was fehlt dir?', 'Co ci dolega?'],
        ['Mir tut der Kopf weh.', 'Boli mnie głowa.'],
        ['Mir tun die Füße weh.', 'Bolą mnie stopy.'],
        ['Ich habe Halsschmerzen.', 'Boli mnie gardło.'],
        ['das Fieber / der Schnupfen / der Husten', 'gorączka / katar / kaszel'],
        ['Gute Besserung!', 'Szybkiego powrotu do zdrowia!'],
        ['ich muss, du musst', 'ja muszę, ty musisz'],
        ['Darf ich…?', 'Czy mogę…? (pytanie o pozwolenie)'],
        ['Du darfst nicht…', 'Nie wolno ci…'],
      ],
      questions: [
        { id: 'hc0enu', q: 'Co znaczy „Mir tut der Kopf weh”?', options: ['Boli mnie głowa.', 'Boli mnie brzuch.', 'Mam katar.', 'Mam gorączkę.'], answer: 0, explain: 'der Kopf – głowa; weh tun – boleć.' },
        { id: 'b1kyx5', q: 'Mir ___ die Beine weh.', options: ['tun', 'tut', 'tust', 'tue'], answer: 0, explain: 'die Beine – liczba mnoga: tun.' },
        { id: '5utu32', q: 'Boli cię ząb. Co powiesz u dentysty?', options: ['Ich habe Zahnschmerzen.', 'Ich habe Halsschmerzen.', 'Ich habe Bauchschmerzen.', 'Ich habe Schnupfen.'], answer: 0, explain: 'der Zahn – ząb: Zahnschmerzen.' },
        { id: '955dxv', q: 'Du ___ im Bett bleiben.', options: ['musst', 'muss', 'müsst', 'müssen'], answer: 0, explain: 'müssen: du musst.' },
        { id: 'cx385v', q: '___ ich das Fenster öffnen? (pytasz o pozwolenie)', options: ['Darf', 'Darfst', 'Dürfen', 'Dürft'], answer: 0, explain: 'dürfen: ich darf.' },
        { id: '926dhc', q: 'Komu mówisz „Gute Besserung!”?', options: ['osobie chorej', 'solenizantowi', 'przed jedzeniem', 'na dobranoc'], answer: 0, explain: 'Gute Besserung – życzenie powrotu do zdrowia.' },
        { id: 'bvxbf4', q: 'Co znaczy „Du darfst hier nicht spielen”?', options: ['Nie wolno ci się tu bawić.', 'Nie musisz się tu bawić.', 'Nie umiesz się tu bawić.', 'Nie chcesz się tu bawić.'], answer: 0, explain: 'nicht dürfen – zakaz.' },
        { id: 'hbe43g', q: 'Co znaczy pytanie „Was fehlt dir?” u lekarza?', options: ['Co ci dolega?', 'Ile masz lat?', 'Gdzie mieszkasz?', 'Co lubisz robić?'], answer: 0, explain: 'Was fehlt dir? – Co ci dolega?' },
        { id: 'ieof82', q: 'Co znaczy „der Rücken”?', options: ['plecy', 'brzuch', 'kolano', 'szyja'], answer: 0, explain: 'brzuch – der Bauch, kolano – das Knie, szyja – der Hals.' },
        { id: 'geakth', q: 'Lekarz mówi: „Bleib im Bett!”. Co to znaczy?', options: ['Zostań w łóżku!', 'Wstań z łóżka!', 'Idź do szkoły!', 'Pij dużo herbaty!'], answer: 0, explain: 'bleiben – zostać; Imperativ dla du: Bleib!' },
        { id: '4etkz0', q: 'Liczba mnoga od „der Fuß” to…', options: ['die Füße', 'die Fuße', 'die Füßen', 'die Fußen'], answer: 0, explain: 'der Fuß – die Füße (przegłos + -e).' },
      ],
    },
    {
      id: 'natur',
      name: 'Natur – pogoda, pory roku i zwierzęta',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.12 (pogoda, pory roku, rośliny i zwierzęta, elementy krajobrazu), I.5 (określanie czasu – miesiące), IV.1 i V.1 (opisywanie zjawisk). Gramatyka (es regnet / es ist…, im + miesiąc i pora roku) – decyzja redakcyjna.',
      theory: `
        <h3>Jaka jest pogoda? – Wie ist das Wetter?</h3>
        <table>
          <tr><th>Es ist…</th><th>Es…</th></tr>
          <tr><td>sonnig (słonecznie), warm, heiß (gorąco), kalt, windig (wietrznie), wolkig (pochmurno), neblig (mglisto)</td><td><i>Es regnet.</i> – Pada deszcz.<br><i>Es schneit.</i> – Pada śnieg.<br><i>Die Sonne scheint.</i> – Świeci słońce.</td></tr>
        </table>
        <p>Temperatura: <i>Es ist 20 Grad.</i> / <i>Es ist minus 5 Grad.</i></p>
        <h3>Pory roku i miesiące</h3>
        <p>der Frühling (wiosna), der Sommer (lato), der Herbst (jesień), der Winter (zima).</p>
        <p>Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.</p>
        <div class="tip">💡 Z porami roku i miesiącami używamy <b>im</b>: <i>im Sommer, im Winter, im Mai, im Dezember</i>. (Z dniami – am: <i>am Montag</i>; z godzinami – um: <i>um acht Uhr</i>.)</div>
        <h3>Zwierzęta</h3>
        <p>domowe: der Hund (pies), die Katze (kot), das Pferd (koń), die Kuh (krowa), das Schwein (świnia), das Kaninchen (królik), der Vogel (ptak), der Fisch, die Maus (mysz).</p>
        <p>dzikie: der Bär (niedźwiedź), der Wolf, der Fuchs (lis).</p>
        <h3>Krajobraz i rośliny</h3>
        <p>der Berg (góra), der Wald (las), der Fluss (rzeka), das Meer (morze), der Strand (plaża), die Wiese (łąka), der Baum (drzewo), die Blume (kwiat).</p>
        <div class="tip">💡 Pułapka: <b>der See</b> = jezioro, a morze to <b>das Meer</b> (albo <i>die See</i>).</div>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['Wie ist das Wetter?', 'Jaka jest pogoda?'],
        ['Es regnet. / Es schneit.', 'Pada deszcz. / Pada śnieg.'],
        ['Die Sonne scheint.', 'Świeci słońce.'],
        ['windig / wolkig / neblig', 'wietrznie / pochmurno / mglisto'],
        ['der Frühling / der Herbst', 'wiosna / jesień'],
        ['im Sommer / im Mai', 'latem / w maju'],
        ['der Hund / die Katze / das Pferd', 'pies / kot / koń'],
        ['der Bär / der Fuchs', 'niedźwiedź / lis'],
        ['der See ↔ das Meer', 'jezioro ↔ morze'],
        ['der Wald / der Berg / der Fluss', 'las / góra / rzeka'],
        ['der Baum / die Blume', 'drzewo / kwiat'],
      ],
      questions: [
        { id: '89xzo7', q: 'Co znaczy „Es regnet”?', options: ['Pada deszcz.', 'Pada śnieg.', 'Świeci słońce.', 'Jest mgła.'], answer: 0, explain: 'regnen – padać (o deszczu); śnieg – es schneit.' },
        { id: 'h12npd', q: 'Jak powiesz „latem”?', options: ['im Sommer', 'im Winter', 'im Herbst', 'im Frühling'], answer: 0, explain: 'der Sommer – lato.' },
        { id: 'tdczm8', q: 'Jaka pora roku jest po „Herbst”?', options: ['der Winter', 'der Frühling', 'der Sommer', 'der Mai'], answer: 0, explain: 'Herbst – jesień, po niej zima.' },
        { id: 'e16s4o', q: 'Jak powiesz „w maju”?', options: ['im Mai', 'am Mai', 'um Mai', 'in Mai'], answer: 0, explain: 'Z miesiącami – im.' },
        { id: 'v259g5', q: 'Co znaczy „der See”?', options: ['jezioro', 'morze', 'rzeka', 'las'], answer: 0, explain: 'der See – jezioro; morze to das Meer.' },
        { id: 'i60fm4', q: 'Co znaczy „Es ist windig”?', options: ['Jest wietrznie.', 'Jest pochmurno.', 'Jest mglisto.', 'Jest gorąco.'], answer: 0, explain: 'der Wind – wiatr.' },
        { id: '54zpx1', q: 'Które zwierzę jest dzikie?', options: ['der Wolf', 'der Hund', 'die Kuh', 'das Pferd'], answer: 0, explain: 'der Wolf – wilk.' },
        { id: '1ilycu', q: 'Wybierz rodzajnik: ___ Pferd (koń)', options: ['das', 'der', 'die', 'den'], answer: 0, explain: 'das Pferd – rodzaj nijaki.' },
        { id: 'lf7xia', q: 'Które zdanie opisuje typową zimę w Polsce?', options: ['Es ist oft kalt und es schneit.', 'Es ist sehr heiß und sonnig.', 'Es ist 35 Grad.', 'Die Bäume blühen.'], answer: 0, explain: 'kalt – zimno, es schneit – pada śnieg.' },
        { id: '2de4gt', q: 'Jaki miesiąc jest po „Juni”?', options: ['Juli', 'August', 'Mai', 'Januar'], answer: 0, explain: 'Juni – czerwiec, Juli – lipiec.' },
        { id: '3ro53j', q: 'Co znaczy „Die Sonne scheint”?', options: ['Świeci słońce.', 'Słońce zachodzi.', 'Nie ma słońca.', 'Słońce wschodzi.'], answer: 0, explain: 'scheinen – świecić.' },
      ],
    },
    {
      id: 'perfekt',
      name: 'Perfekt – co robiłeś? Czas przeszły',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. IV.2 i V.2 (opowiadanie o czynnościach z przeszłości), I.5 (czynności życia codziennego, czas wolny). Gramatyka (czas Perfekt z haben i sein, imiesłów Partizip II, formy war i hatte) – decyzja redakcyjna.',
      theory: `
        <h3>Jak zbudować Perfekt</h3>
        <p><b>haben</b> albo <b>sein</b> (odmienione, na 2. miejscu) + <b>Partizip II</b> (imiesłów, na końcu zdania):</p>
        <p><i>Ich <b>habe</b> gestern Fußball <b>gespielt</b>.</i> – Wczoraj grałem w piłkę.<br><i>Wir <b>sind</b> nach Berlin <b>gefahren</b>.</i> – Pojechaliśmy do Berlina.</p>
        <h3>Partizip II</h3>
        <table>
          <tr><th>rodzaj czasownika</th><th>wzór</th><th>przykłady</th></tr>
          <tr><td>regularne</td><td><b>ge</b>…<b>t</b></td><td>spielen – gespielt, machen – gemacht, kaufen – gekauft, hören – gehört, lernen – gelernt, arbeiten – gearbeit<b>et</b></td></tr>
          <tr><td>nieregularne</td><td><b>ge</b>…<b>en</b></td><td>sehen – gesehen, lesen – gelesen, essen – gegessen, trinken – getrunken, schreiben – geschrieben, treffen – getroffen, schlafen – geschlafen</td></tr>
          <tr><td>rozdzielnie złożone</td><td>przedrostek + <b>ge</b> + …</td><td>einkaufen – ein<b>ge</b>kauft, fernsehen – fern<b>ge</b>sehen, aufstehen – auf<b>ge</b>standen</td></tr>
          <tr><td>na -ieren, be-, ver-</td><td><b>bez ge-</b></td><td>telefonieren – telefoniert, fotografieren – fotografiert, besuchen – besucht, vergessen – vergessen</td></tr>
        </table>
        <h3>haben czy sein?</h3>
        <p>Większość czasowników – <b>haben</b>. Z <b>sein</b> łączą się czasowniki <b>ruchu i zmiany miejsca</b>: gehen – <i>ist gegangen</i>, fahren – <i>ist gefahren</i>, kommen – <i>ist gekommen</i>, fliegen – <i>ist geflogen</i>, aufstehen – <i>ist aufgestanden</i>, a także <b>bleiben</b> – <i>ist geblieben</i>.</p>
        <div class="tip">💡 Pytaj: „czy ktoś się przemieścił z punktu A do B?” – tak → <b>sein</b>. <i>Ich bin ins Kino gegangen</i>, ale <i>Ich habe einen Film gesehen</i>.</div>
        <h3>war i hatte</h3>
        <p>Od <i>sein</i> i <i>haben</i> w przeszłości używamy zwykle krótkich form (Präteritum):</p>
        <table>
          <tr><th></th><th>sein</th><th>haben</th></tr>
          <tr><td>ich / er / sie / es</td><td>war</td><td>hatte</td></tr>
          <tr><td>du</td><td>warst</td><td>hattest</td></tr>
          <tr><td>wir / sie / Sie</td><td>waren</td><td>hatten</td></tr>
          <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
        </table>
        <p><i>Gestern <b>war</b> ich im Kino. Ich <b>hatte</b> keine Zeit.</i></p>
        <p>Określenia czasu: gestern (wczoraj), letztes Wochenende (w zeszły weekend), letzte Woche (w zeszłym tygodniu), letztes Jahr (w zeszłym roku), in den Ferien (w wakacje).</p>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['Perfekt', 'haben/sein na 2. miejscu + Partizip II na końcu'],
        ['spielen → gespielt', 'grać → (grał) – regularne ge…t'],
        ['sehen → gesehen', 'widzieć – nieregularne ge…en'],
        ['einkaufen → eingekauft', 'robić zakupy – ge w środku'],
        ['telefonieren → telefoniert', 'telefonować – bez ge-'],
        ['besuchen → besucht', 'odwiedzać – bez ge-'],
        ['Ich bin gefahren.', 'Pojechałem. (ruch → sein)'],
        ['Ich bin zu Hause geblieben.', 'Zostałem w domu. (bleiben → sein)'],
        ['ich war, du warst', 'ja byłem, ty byłeś'],
        ['ich hatte, du hattest', 'ja miałem, ty miałeś'],
        ['gestern / letztes Wochenende', 'wczoraj / w zeszły weekend'],
      ],
      questions: [
        { id: 'zstscf', q: 'Ich ___ gestern Tennis gespielt.', options: ['habe', 'bin', 'hat', 'ist'], answer: 0, explain: 'spielen łączy się z haben: ich habe gespielt.' },
        { id: 'r26e5x', q: 'Wir ___ nach Berlin gefahren.', options: ['sind', 'haben', 'seid', 'hat'], answer: 0, explain: 'fahren – ruch, więc sein: wir sind gefahren.' },
        { id: 'za7tji', q: 'Partizip II od „machen” to…', options: ['gemacht', 'gemachen', 'machte', 'gemachtet'], answer: 0, explain: 'Czasownik regularny: ge + mach + t.' },
        { id: '5z5z8c', q: 'Partizip II od „sehen” to…', options: ['gesehen', 'gesieht', 'gesehet', 'sahen'], answer: 0, explain: 'Nieregularny: ge + seh + en.' },
        { id: 'kts027', q: 'Partizip II od „einkaufen” to…', options: ['eingekauft', 'geeinkauft', 'eingekaufen', 'gekaufein'], answer: 0, explain: 'Przedrostek ein + ge + kauft.' },
        { id: '411nyk', q: 'Partizip II od „telefonieren” to…', options: ['telefoniert', 'getelefoniert', 'telefonieren', 'getelefonieren'], answer: 0, explain: 'Czasowniki na -ieren nie mają ge-.' },
        { id: 'z7n2l3', q: 'Er ___ um sechs Uhr aufgestanden.', options: ['ist', 'hat', 'sind', 'habt'], answer: 0, explain: 'aufstehen – zmiana położenia: er ist aufgestanden.' },
        { id: '14j24f', q: 'Wybierz poprawny szyk.', options: ['Am Samstag habe ich meine Oma besucht.', 'Am Samstag ich habe meine Oma besucht.', 'Am Samstag habe ich besucht meine Oma.', 'Am Samstag habe besucht ich meine Oma.'], answer: 0, explain: '„habe” na 2. miejscu, osoba za nim, imiesłów na końcu.' },
        { id: 'uah6r9', q: 'Gestern ___ ich krank.', options: ['war', 'bin', 'habe', 'warst'], answer: 0, explain: 'Przeszłość od sein: ich war (warst – du).' },
        { id: 'zc2b1b', q: 'Co znaczy „letztes Wochenende”?', options: ['w zeszły weekend', 'w przyszły weekend', 'w każdy weekend', 'w ten weekend'], answer: 0, explain: 'letzt- – ostatni, zeszły.' },
        { id: 'ud3umc', q: 'Partizip II od „schreiben” to…', options: ['geschrieben', 'geschreibt', 'geschriebt', 'schrieben'], answer: 0, explain: 'Nieregularny: geschrieben.' },
        { id: 'puf4ka', q: 'Czasownik „bleiben” tworzy Perfekt z „sein”: Ich bin zu Hause geblieben.', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'bleiben łączy się z sein, choć nie oznacza ruchu.' },
      ],
      tasks: [
        {
          id: 'x0r53m',
          points: 4,
          q: 'Napisz po niemiecku wpis na blogu (4–5 zdań) o tym, co robiłeś w zeszły weekend. Użyj czasu Perfekt z co najmniej trzema różnymi czasownikami, w tym jednym łączącym się z „sein”, i napisz, jak ci się podobało.',
          steps: [
            'Zacznij od określenia czasu i formy war: Letztes Wochenende war super!',
            'Czasowniki z haben: Am Samstag habe ich Fußball gespielt. Am Abend habe ich einen Film gesehen.',
            'Czasownik ruchu z sein: Am Sonntag bin ich zu meiner Oma gefahren.',
            'Opinia: Das Wochenende war toll. / Es hat Spaß gemacht.',
          ],
          answer: 'Np.: Letztes Wochenende war super! Am Samstag habe ich Fußball gespielt. Am Abend habe ich einen Film gesehen. Am Sonntag bin ich zu meiner Oma gefahren. Das war toll!',
          scoring: [
            '1 p. – trzy różne czasowniki w czasie Perfekt',
            '1 p. – poprawny wybór haben / sein (co najmniej jeden czasownik ruchu z sein)',
            '1 p. – poprawne formy Partizip II i imiesłów na końcu zdania',
            '1 p. – opinia o weekendzie i spójny tekst. Punktacja orientacyjna.',
          ],
        },
      ],
    },
    {
      id: 'feste',
      name: 'Feste – urodziny, święta i życzenia',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. I.5 (urodziny, święta), I.9 (tradycje i zwyczaje), VI.6–7 i VII.6–7 (życzenia, zaproszenia i odpowiedzi na nie), IX.1–2 (wiedza o kulturze krajów niemieckojęzycznych). Gramatyka (liczebniki porządkowe, data) – decyzja redakcyjna. Zwyczaje: e-materiały zpe.gov.pl „Frohe Ostern”, „Was bringt der Nikolaus?”, „Mach die Türchen im Adventskalender auf!”.',
      theory: `
        <h3>Kiedy masz urodziny?</h3>
        <p><i>Wann hast du Geburtstag?</i> – <i><b>Am</b> zwölf<b>ten</b> Mai.</i> (12 maja)</p>
        <h3>Liczebniki porządkowe i data</h3>
        <table>
          <tr><th>reguła</th><th>przykłady</th></tr>
          <tr><td>do 19.: liczba + <b>-te</b></td><td>der zwei<b>te</b>, vier<b>te</b>, zwölf<b>te</b></td></tr>
          <tr><td>od 20.: liczba + <b>-ste</b></td><td>der zwanzig<b>ste</b>, einunddreißig<b>ste</b></td></tr>
          <tr><td>wyjątki</td><td>der <b>erste</b> (1.), der <b>dritte</b> (3.), der <b>siebte</b> (7.), der <b>achte</b> (8.)</td></tr>
        </table>
        <ul>
          <li><i>Heute ist <b>der</b> dritt<b>e</b> Oktober.</i> – Dziś jest 3 października.</li>
          <li><i><b>Am</b> dritt<b>en</b> Oktober</i> – 3 października (kiedy?). Po „am” końcówka <b>-en</b>.</li>
        </ul>
        <h3>Życzenia</h3>
        <ul>
          <li><i>Alles Gute zum Geburtstag! / Herzlichen Glückwunsch!</i> – Wszystkiego najlepszego!</li>
          <li><i>Frohe Weihnachten!</i> – Wesołych Świąt (Bożego Narodzenia)!</li>
          <li><i>Frohe Ostern!</i> – Wesołych Świąt Wielkanocnych!</li>
          <li><i>Ein gutes neues Jahr!</i> – Szczęśliwego Nowego Roku!</li>
          <li>Odpowiedź: <i>Danke, gleichfalls!</i> – Dziękuję, nawzajem!</li>
        </ul>
        <p>Święta: Weihnachten (Boże Narodzenie), Ostern (Wielkanoc), Silvester (sylwester, 31 grudnia), Neujahr (Nowy Rok).</p>
        <h3>Zaproszenie</h3>
        <p><i>Ich lade dich zu meiner Party ein. Die Party ist am Samstag um 18 Uhr. Kommst du?</i></p>
        <p>Przyjęcie: <i>Ja, gern! Danke für die Einladung!</i> Odmowa: <i>Leider kann ich nicht, ich habe keine Zeit.</i></p>
        <h3>Zwyczaje w krajach niemieckojęzycznych</h3>
        <ul>
          <li><b>der Adventskalender</b> – kalendarz adwentowy: w grudniu dzieci codziennie otwierają jedno okienko (das Türchen).</li>
          <li><b>der Nikolaus</b> (6 grudnia) – wieczorem dzieci wystawiają buty za drzwi, a rano znajdują w nich słodycze i drobne prezenty.</li>
          <li><b>der Osterhase</b> – zajączek wielkanocny: w Wielkanoc dzieci szukają ukrytych słodyczy, drobnych prezentów i kolorowych jajek (Ostereier) – wierzą, że ukrył je zajączek.</li>
        </ul>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['Wann hast du Geburtstag?', 'Kiedy masz urodziny?'],
        ['am zwölften Mai', '12 maja'],
        ['der erste, der dritte, der siebte', '1., 3., 7. (wyjątki)'],
        ['der zwanzigste', '20. (od 20 końcówka -ste)'],
        ['Alles Gute zum Geburtstag!', 'Wszystkiego najlepszego z okazji urodzin!'],
        ['Frohe Weihnachten! / Frohe Ostern!', 'Wesołych Świąt Bożego Narodzenia! / Wielkanocnych!'],
        ['Danke, gleichfalls!', 'Dziękuję, nawzajem!'],
        ['Silvester', 'sylwester (31 grudnia)'],
        ['Ich lade dich ein.', 'Zapraszam cię.'],
        ['Danke für die Einladung!', 'Dziękuję za zaproszenie!'],
        ['der Adventskalender', 'kalendarz adwentowy'],
        ['der Osterhase', 'zajączek wielkanocny'],
      ],
      questions: [
        { id: 'uqiojx', q: 'Co znaczy „Alles Gute zum Geburtstag!”?', options: ['Wszystkiego najlepszego z okazji urodzin!', 'Wesołych Świąt!', 'Szczęśliwego Nowego Roku!', 'Smacznego!'], answer: 0, explain: 'der Geburtstag – urodziny.' },
        { id: 'b2rcam', q: 'Mein Geburtstag ist am ___ Mai. (3.)', options: ['dritten', 'dritte', 'dreiten', 'drei'], answer: 0, explain: '3. = dritt- (wyjątek), po „am” końcówka -en.' },
        { id: 'dinn7m', q: 'Heute ist der ___ Januar. (1.)', options: ['erste', 'eins', 'einte', 'ersten'], answer: 0, explain: '1. = erste; po „der” w mianowniku końcówka -e.' },
        { id: 'vt96tv', q: 'Jak powiesz „20 kwietnia” (kiedy?)?', options: ['am zwanzigsten April', 'am zwanzigten April', 'am zwanzigen April', 'am zwanzig April'], answer: 0, explain: 'Od 20 końcówka -ste, po „am” -sten.' },
        { id: 'b9arke', q: 'Ktoś mówi ci: „Frohe Weihnachten!”. Co odpowiesz?', options: ['Danke, gleichfalls!', 'Gute Besserung!', 'Guten Appetit!', 'Alles Gute zum Geburtstag!'], answer: 0, explain: '„Dziękuję, nawzajem!”.' },
        { id: '7fj6e4', q: 'Która odpowiedź na zaproszenie jest odmową?', options: ['Leider kann ich nicht, ich habe keine Zeit.', 'Ja, gern! Ich komme.', 'Super, danke für die Einladung!', 'Klar, bis Samstag!'], answer: 0, explain: 'leider – niestety; keine Zeit – brak czasu.' },
        { id: 'ggs8p3', q: 'Co oznacza „Silvester”?', options: ['sylwester (31 grudnia)', 'Nowy Rok (1 stycznia)', 'Wielkanoc', 'Boże Narodzenie'], answer: 0, explain: 'Nowy Rok to Neujahr, Wielkanoc – Ostern, Boże Narodzenie – Weihnachten.' },
        { id: 'rxsj7f', q: 'Co znaczy: „Ich lade dich zu meiner Party ein.”?', options: ['Zapraszam cię na moją imprezę.', 'Idę na twoją imprezę.', 'Dziękuję za imprezę.', 'Nie przyjdę na imprezę.'], answer: 0, explain: 'einladen – zapraszać.' },
        { id: 'a5mg9q', q: '„Wann hast du Geburtstag?” Która odpowiedź pasuje?', options: ['Am siebten Juni.', 'Ich bin vierzehn.', 'Im Restaurant.', 'Mit meinen Freunden.'], answer: 0, explain: 'Pytanie „kiedy?” – data z „am”.' },
        { id: 'yjk567', q: 'Jak jest po niemiecku „siódmy” (7.)?', options: ['der siebte', 'der siebzehnte', 'der siebzigste', 'der sechste'], answer: 0, explain: '7. = siebte; 17. – siebzehnte, 70. – siebzigste, 6. – sechste.' },
        { id: 'g4mgm3', q: 'Co robią dzieci w Niemczech wieczorem przed 6 grudnia?', options: ['wystawiają buty za drzwi', 'szukają kolorowych jajek', 'otwierają ostatnie okienko kalendarza', 'puszczają fajerwerki'], answer: 0, explain: 'Na Nikolaus rano znajdują w butach słodycze i drobne prezenty.' },
        { id: 'wmru6b', q: 'Kto według dzieci w Niemczech ukrywa w Wielkanoc słodycze i kolorowe jajka?', options: ['der Osterhase', 'der Nikolaus', 'der Weihnachtsmann', 'die Oma'], answer: 0, explain: 'der Osterhase – zajączek wielkanocny.' },
      ],
      tasks: [
        {
          id: 'y0qms4',
          points: 3,
          q: 'Napisz po niemiecku krótkie zaproszenie (SMS) do koleżanki Leonie na swoje urodziny. Podaj: z jakiej okazji, kiedy (dzień i godzina) i gdzie jest impreza. Poproś o odpowiedź.',
          steps: [
            'Powitanie i okazja: Hallo Leonie! Ich habe Geburtstag und lade dich zu meiner Party ein.',
            'Kiedy – dzień tygodnia z „am”, godzina z „um”: Die Party ist am Samstag um 17 Uhr.',
            'Gdzie: Sie ist bei mir zu Hause. / Sie ist im Café „Sonne”.',
            'Prośba o odpowiedź i pożegnanie: Kommst du? Schreib mir bitte! Tschüs, Ola',
          ],
          answer: 'Np.: Hallo Leonie! Ich habe Geburtstag und lade dich zu meiner Party ein. Die Party ist am Samstag um 17 Uhr bei mir zu Hause. Kommst du? Schreib mir bitte! Ola',
          scoring: [
            '1 p. – okazja i zaproszenie (einladen)',
            '1 p. – termin: am + dzień, um + godzina; miejsce',
            '1 p. – prośba o odpowiedź, powitanie i pożegnanie. Punktacja orientacyjna.',
          ],
        },
      ],
    },
    {
      id: 'dach',
      name: 'D-A-CH – kraje niemieckojęzyczne',
      basis: 'Dz.U. 2024 poz. 996, język obcy nowożytny, wariant II.2: wym. IX.1–2 (podstawowa wiedza o krajach posługujących się danym językiem i o kraju ojczystym; świadomość związku kultury własnej i obcej), XIV (świadomość językowa), VIII.1 (informacje z mapy). Fakty: e-materiał „Deutschland, Österreich und die Schweiz auf einen Blick” (zpe.gov.pl), sprawdzony 2.11.2026.',
      theory: `
        <h3>Co znaczy D-A-CH?</h3>
        <p>To skrót od oznaczeń trzech największych krajów niemieckojęzycznych: <b>D</b> – Deutschland (Niemcy), <b>A</b> – Österreich (Austria), <b>CH</b> – die Schweiz (Szwajcaria). Czasem dodaje się <b>L</b> – Liechtenstein (DACHL), gdzie niemiecki też jest językiem urzędowym.</p>
        <table>
          <tr><th></th><th>Deutschland 🇩🇪</th><th>Österreich 🇦🇹</th><th>die Schweiz 🇨🇭</th></tr>
          <tr><td>stolica</td><td><b>Berlin</b></td><td><b>Wien</b> (Wiedeń)</td><td>brak oficjalnej stolicy; <b>Bern</b> to „Bundesstadt” – siedziba władz federalnych</td></tr>
          <tr><td>podział</td><td>16 krajów związkowych (<i>Bundesländer</i>)</td><td>9 krajów związkowych (Wiedeń jest jednym z nich)</td><td>26 kantonów (<i>Kantone</i>)</td></tr>
          <tr><td>język urzędowy</td><td>niemiecki</td><td>niemiecki (regionalnie też chorwacki, słoweński, węgierski)</td><td>4 języki: niemiecki (ponad 60%), francuski, włoski, retoromański</td></tr>
          <tr><td>flaga</td><td>czarno-czerwono-złota</td><td>czerwono-biało-czerwona (jedna z najstarszych – z XIII w.)</td><td>biały krzyż na czerwonym polu</td></tr>
          <tr><td>sąsiedzi</td><td>9 państw, w tym Polska</td><td>8 państw</td><td>5 państw</td></tr>
        </table>
        <ul>
          <li><b>Berlin</b> jest stolicą zjednoczonych Niemiec od zjednoczenia 3 października 1990 r.; od 1991 r. ma siedzibę rząd i Bundestag.</li>
          <li>W <b>Wiedniu</b> żyli i komponowali Haydn, Mozart i Beethoven; stąd pochodzi walc wiedeński.</li>
          <li>Austria i Szwajcaria nie mają dostępu do morza (<i>Binnenstaat</i>), a Szwajcaria to kraj alpejski.</li>
        </ul>
        <h3>Kraje, języki, mieszkańcy</h3>
        <table>
          <tr><th>kraj</th><th>język</th><th>mieszkaniec / mieszkanka</th></tr>
          <tr><td>Polen</td><td>Polnisch</td><td>der Pole / die Polin</td></tr>
          <tr><td>Deutschland</td><td>Deutsch</td><td>der Deutsche / die Deutsche</td></tr>
          <tr><td>Österreich</td><td>Deutsch</td><td>der Österreicher / die Österreicherin</td></tr>
          <tr><td>die Schweiz</td><td>Deutsch, Französisch, Italienisch, Rätoromanisch</td><td>der Schweizer / die Schweizerin</td></tr>
        </table>
        <div class="tip">💡 Większość krajów jest bez rodzajnika: <i>Ich komme aus Polen / aus Österreich.</i> Ale Szwajcaria ma rodzajnik <b>die</b>: <i>Ich komme aus <b>der</b> Schweiz. Ich wohne in <b>der</b> Schweiz.</i></div>
        <div class="tip">💡 Wiele słów jest podobnych do polskich lub angielskich (internacjonalizmy): <i>das Hotel, die Musik, der Computer, das Taxi</i> – łatwo zgadnąć ich znaczenie z kontekstu.</div>`,
      cardLang: ['de', 'pl'],
      flashcards: [
        ['D-A-CH', 'Deutschland, Österreich, die Schweiz'],
        ['Hauptstadt von Deutschland', 'Berlin'],
        ['Hauptstadt von Österreich', 'Wien (Wiedeń)'],
        ['Bern', 'Bundesstadt Szwajcarii – siedziba władz (Szwajcaria nie ma oficjalnej stolicy)'],
        ['die Bundesländer', 'kraje związkowe (Niemcy – 16, Austria – 9)'],
        ['die Kantone', 'kantony Szwajcarii (26)'],
        ['Amtssprachen der Schweiz', 'niemiecki, francuski, włoski, retoromański'],
        ['Ich komme aus der Schweiz.', 'Jestem ze Szwajcarii. (z rodzajnikiem!)'],
        ['der Pole / die Polin', 'Polak / Polka'],
        ['der Österreicher / die Österreicherin', 'Austriak / Austriaczka'],
        ['3. Oktober 1990', 'zjednoczenie Niemiec'],
      ],
      questions: [
        { id: 'sj033g', q: 'Co oznacza litera „A” w skrócie D-A-CH?', options: ['Austrię (Österreich)', 'Amerykę', 'Alpy', 'Albanię'], answer: 0, explain: 'D – Deutschland, A – Österreich, CH – die Schweiz.' },
        { id: 'avah09', q: 'Jaka jest stolica Austrii?', options: ['Wien', 'Bern', 'Berlin', 'Salzburg'], answer: 0, explain: 'Wiedeń – stolica i jednocześnie jeden z 9 krajów związkowych.' },
        { id: '1k7l7x', q: 'Ile krajów związkowych (Bundesländer) mają Niemcy?', options: ['16', '9', '26', '12'], answer: 0, explain: 'Niemcy – 16, Austria – 9, Szwajcaria – 26 kantonów.' },
        { id: 'gdv0of', q: 'Która informacja o Szwajcarii jest prawdziwa?', options: ['Ma cztery języki urzędowe.', 'Jej oficjalną stolicą jest Zurych.', 'Dzieli się na 16 krajów związkowych.', 'Ma dostęp do morza.'], answer: 0, explain: 'Niemiecki, francuski, włoski i retoromański. Bern to „Bundesstadt”, a kraj dzieli się na kantony.' },
        { id: 'wkj6ra', q: 'Ich komme aus ___ Schweiz.', options: ['der', 'die', 'dem', '–'], answer: 0, explain: 'die Schweiz – po „aus” celownik: aus der Schweiz.' },
        { id: '5amsdx', q: 'Ich komme aus ___ Österreich.', options: ['– (bez rodzajnika)', 'der', 'dem', 'die'], answer: 0, explain: 'Österreich, jak większość krajów, nie ma rodzajnika.' },
        { id: 'l3th88', q: 'Jakie barwy ma flaga Niemiec?', options: ['czarny, czerwony, złoty', 'czerwony, biały, czerwony', 'biały krzyż na czerwonym polu', 'czerwony, biały'], answer: 0, explain: 'Czerwono-biało-czerwona jest Austria, biały krzyż na czerwonym – Szwajcaria.' },
        { id: 'ppsoow', q: 'Którzy kompozytorzy żyli i komponowali w Wiedniu?', options: ['Haydn, Mozart i Beethoven', 'Verdi i Puccini', 'Grieg i Sibelius', 'Gershwin i Bernstein'], answer: 0, explain: 'To tzw. klasycy wiedeńscy (Wiener Klassiker).' },
        { id: 'erj5k6', q: 'Od kiedy Berlin jest stolicą zjednoczonych Niemiec?', options: ['od 3 października 1990 r.', 'od 1 maja 2004 r.', 'od 1949 r.', 'od 11 listopada 1918 r.'], answer: 0, explain: 'Zjednoczenie Niemiec – 3 października 1990 r.' },
        { id: 'e2kk7j', q: 'Jak powiesz „Polka” po niemiecku?', options: ['die Polin', 'die Polnisch', 'die Polenin', 'die Polka'], answer: 0, explain: 'der Pole – die Polin; Polnisch to język polski.' },
        { id: 'ym5b8j', q: 'Niemcy mają 9 państw sąsiednich, w tym Polskę.', options: ['Prawda', 'Fałsz'], answer: 0, noShuffle: true, explain: 'Tak podaje e-materiał zpe.gov.pl – to rekord w Europie.' },
      ],
    },
  ],
});
