/* Język angielski – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1) */
window.SUBJECTS.push({
  id: 'angielski',
  name: 'Język angielski',
  icon: '🇬🇧',
  color: '#2f9e6e',
  book: 'Stay Brainy! 4 (Macmillan)',
  topics: [
    {
      id: 'ja-i-inni',
      name: 'Ja i inni: powitania, liczby, „to be”',
      chapter: 'Welcome unit, Unit 1',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 1 „człowiek” (dane personalne); wym. 6.1 (przedstawia siebie i inne osoby), 6.2 (nawiązuje kontakt, rozpoczyna i kończy rozmowę), 6.14 (zwroty i formy grzecznościowe), 7.1 (przedstawia siebie na piśmie). Podstawa jest wspólna dla wszystkich języków, nie przypisuje poziomu do klasy 4 i nie wymienia struktur gramatycznych (A1: „minimalny zasób środków gramatycznych”). Wybór poziomu A1, słownictwa i czasownika „to be” – decyzja redakcyjna.',
      theory: `
        <h3>Powitania i pożegnania</h3>
        <table>
          <tr><th>Po angielsku</th><th>Po polsku</th><th>Kiedy</th></tr>
          <tr><td>Hello! / Hi!</td><td>Cześć! / Dzień dobry!</td><td>o każdej porze (Hi – do kolegów)</td></tr>
          <tr><td>Good morning!</td><td>Dzień dobry!</td><td>rano</td></tr>
          <tr><td>Good afternoon!</td><td>Dzień dobry!</td><td>po południu</td></tr>
          <tr><td>Good evening!</td><td>Dobry wieczór!</td><td>wieczorem, na powitanie</td></tr>
          <tr><td>Goodbye! / Bye!</td><td>Do widzenia! / Pa!</td><td>na pożegnanie</td></tr>
          <tr><td>See you!</td><td>Do zobaczenia!</td><td>na pożegnanie</td></tr>
          <tr><td>Good night!</td><td>Dobranoc!</td><td>na pożegnanie wieczorem, przed snem</td></tr>
        </table>
        <div class="tip">💡 <b>Good night</b> to nie powitanie! Mówisz je, gdy się żegnasz wieczorem albo idziesz spać.</div>
        <h3>Rozmowa na początek</h3>
        <ul>
          <li><b>How are you?</b> – Jak się masz? → <i>I'm fine, thanks.</i> / <i>I'm OK.</i></li>
          <li><b>What's your name?</b> – Jak masz na imię? → <i>My name is Ola.</i> / <i>I'm Ola.</i></li>
          <li><b>How old are you?</b> – Ile masz lat? → <i>I'm ten.</i> / <i>I'm ten years old.</i></li>
          <li><b>Where are you from?</b> – Skąd jesteś? → <i>I'm from Poland.</i></li>
          <li><b>Nice to meet you.</b> – Miło cię poznać. → <i>Nice to meet you, too.</i></li>
          <li><b>This is my friend Kuba.</b> – To mój kolega Kuba. (tak przedstawiasz kogoś innego)</li>
        </ul>
        <h3>Magiczne słowa</h3>
        <table>
          <tr><th>Po angielsku</th><th>Po polsku</th></tr>
          <tr><td>please</td><td>proszę (gdy o coś prosisz)</td></tr>
          <tr><td>thank you / thanks</td><td>dziękuję / dzięki</td></tr>
          <tr><td>You're welcome.</td><td>Proszę bardzo. Nie ma za co. (odpowiedź na „thank you”)</td></tr>
          <tr><td>sorry</td><td>przepraszam (gdy coś zrobisz źle)</td></tr>
          <tr><td>excuse me</td><td>przepraszam (gdy chcesz o coś zapytać albo przejść)</td></tr>
        </table>
        <h3>Alfabet i literowanie</h3>
        <p>Litery po angielsku mają inne nazwy niż po polsku. Na przykład litera <b>A</b> brzmi jak „ej”, <b>E</b> – jak „i”, a <b>I</b> – jak „aj”. Kiedy ktoś nie wie, jak zapisać twoje imię, zapyta: <b>How do you spell it?</b> (Jak to się literuje?). Wtedy mówisz po kolei nazwy liter.</p>
        <h3>Liczby</h3>
        <table>
          <tr><td>1 one</td><td>2 two</td><td>3 three</td><td>4 four</td><td>5 five</td></tr>
          <tr><td>6 six</td><td>7 seven</td><td>8 eight</td><td>9 nine</td><td>10 ten</td></tr>
          <tr><td>11 eleven</td><td>12 twelve</td><td>13 thirteen</td><td>14 fourteen</td><td>15 fifteen</td></tr>
          <tr><td>16 sixteen</td><td>17 seventeen</td><td>18 eighteen</td><td>19 nineteen</td><td>20 twenty</td></tr>
          <tr><td>30 thirty</td><td>40 forty</td><td>50 fifty</td><td>60 sixty</td><td>70 seventy</td></tr>
          <tr><td>80 eighty</td><td>90 ninety</td><td>100 one hundred</td><td></td><td></td></tr>
        </table>
        <ul>
          <li>Liczby od 13 do 19 kończą się na <b>-teen</b>: thir<b>teen</b> (13). Pełne dziesiątki kończą się na <b>-ty</b>: thir<b>ty</b> (30).</li>
          <li>21 = <b>twenty-one</b>, 35 = <b>thirty-five</b> – z kreską w środku.</li>
        </ul>
        <div class="tip">💡 Uwaga na pisownię: <b>four</b> (4) i <b>fourteen</b> (14) mają literę „u”, ale <b>forty</b> (40) – już nie.</div>
        <h3>Czasownik „to be” (być)</h3>
        <table>
          <tr><th>Twierdzenie</th><th>Skrót</th><th>Przeczenie</th></tr>
          <tr><td>I am</td><td>I'm</td><td>I'm not</td></tr>
          <tr><td>you are</td><td>you're</td><td>you aren't</td></tr>
          <tr><td>he / she / it is</td><td>he's / she's / it's</td><td>he / she / it isn't</td></tr>
          <tr><td>we are</td><td>we're</td><td>we aren't</td></tr>
          <tr><td>they are</td><td>they're</td><td>they aren't</td></tr>
        </table>
        <p><b>Pytanie</b> – zamieniasz kolejność: <i>You are ten.</i> → <b>Are you</b> ten? <i>She is from Poland.</i> → <b>Is she</b> from Poland?</p>
        <p><b>Krótka odpowiedź</b>: Yes, I am. / No, I'm not. · Yes, she is. / No, she isn't.</p>
        <div class="tip">💡 W krótkiej odpowiedzi „tak” <b>nie skracamy</b>: mówimy <i>Yes, I am</i>, a nie „Yes, I'm”.</div>
      `,
      infographicNote: 'Czytaj od góry: tak wygląda rozmowa – od powitania do pożegnania.',
      infographic: {
        type: 'kroki',
        items: [
          { icon: '👋', kolor: 3, title: 'Przywitaj się', text: 'Hello! / Hi! · Good morning!' },
          { icon: '🙂', kolor: 1, title: 'Jak się masz?', text: "How are you? → I'm fine, thanks." },
          { icon: '📛', kolor: 1, title: 'Jak masz na imię?', text: "What's your name? → My name is Ola." },
          { icon: '🎂', kolor: 1, title: 'Ile masz lat?', text: "How old are you? → I'm ten." },
          { icon: '🌍', kolor: 1, title: 'Skąd jesteś?', text: "Where are you from? → I'm from Poland." },
          { icon: '👋', kolor: 3, title: 'Pożegnaj się', text: 'Goodbye! / Bye! · See you!\nGood night! – tylko wieczorem' },
        ],
        bottom: { kolor: 4, title: '💡 Czasownik „to be” (być)', text: 'I am · you are · he / she / it is\nwe are · they are' },
      },
      flashcards: [
        ['Hello! / Hi!', 'Cześć! / Dzień dobry!'],
        ['Good morning!', 'Dzień dobry! (rano)'],
        ['Good night!', 'Dobranoc! – tylko na pożegnanie wieczorem'],
        ['How are you?', 'Jak się masz? → I\'m fine, thanks.'],
        ['What\'s your name?', 'Jak masz na imię? → My name is…'],
        ['How old are you?', 'Ile masz lat? → I\'m ten.'],
        ['Nice to meet you.', 'Miło cię poznać.'],
        ['please / thank you', 'proszę / dziękuję'],
        ['You\'re welcome.', 'Proszę bardzo. Nie ma za co.'],
        ['sorry / excuse me', 'przepraszam (za błąd) / przepraszam (gdy pytasz lub chcesz przejść)'],
        ['13 i 30', 'thirteen (-teen) i thirty (-ty)'],
        ['to be: I…, you…, he/she/it…', 'I am, you are, he/she/it is, we are, they are'],
      ],
      questions: [
        { id: '0til9w', q: 'Jest ósma rano. Wchodzisz do klasy. Co mówisz nauczycielce?', options: ['Good morning!', 'Good night!', 'Goodbye!', 'Good evening!'], answer: 0, explain: 'Rano witamy się słowami „Good morning!”. „Good night” mówimy na pożegnanie wieczorem.' },
        { id: 'xe61er', q: 'Kolega pyta: „How are you?”. Która odpowiedź pasuje?', options: ['I\'m fine, thanks.', 'I\'m ten.', 'I\'m from Poland.', 'My name is Kuba.'], answer: 0, explain: '„How are you?” to „Jak się masz?”. Odpowiadasz, jak się czujesz: „I\'m fine, thanks.” – „Dobrze, dzięki.”' },
        { id: '3we2d4', q: 'Ktoś pyta: „What\'s your name?”. Co odpowiesz?', options: ['My name is Zosia.', 'I\'m fine.', 'I\'m ten years old.', 'Nice to meet you, too.'], answer: 0, explain: '„What\'s your name?” to pytanie o imię. Odpowiadasz: „My name is…” albo „I\'m…”.' },
        { id: 'b2iusy', q: 'Uzupełnij: „I ___ ten years old.”', options: ['am', 'is', 'are', 'be'], answer: 0, explain: 'Z „I” zawsze łączymy „am”: I am (I\'m) ten years old.' },
        { id: 'ecpzjs', q: 'Uzupełnij: „She ___ my sister.”', options: ['is', 'am', 'are', 'be'], answer: 0, explain: 'Z „he”, „she”, „it” łączymy „is”: She is my sister.' },
        { id: '67xgn2', q: 'Uzupełnij: „Tom and Ann ___ from London.”', options: ['are', 'is', 'am', 'be'], answer: 0, explain: 'Tom i Ann to dwie osoby, czyli „they”. Z „they” łączymy „are”.' },
        { id: 'xz02b5', q: 'Które zdanie znaczy „On nie jest smutny”?', options: ['He isn\'t sad.', 'He aren\'t sad.', 'He amn\'t sad.', 'He not sad.'], answer: 0, explain: 'Przeczenie od „he is” to „he is not”, w skrócie „he isn\'t”.' },
        { id: '78vrvz', q: 'Które pytanie jest poprawne?', options: ['Are you from Poland?', 'Is you from Poland?', 'Am you from Poland?', 'Be you from Poland?'], answer: 0, explain: 'Z „you” łączymy „are”. W pytaniu „are” stoi na początku: Are you…?' },
        { id: 'yr4fsx', q: 'Ktoś pyta: „Are you ten?”. Masz dziesięć lat. Co odpowiesz krótko?', options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, you are.', 'Yes, I is.'], answer: 0, explain: 'Krótka odpowiedź „tak” to „Yes, I am.” – w niej nie robimy skrótu „I\'m”.' },
        { id: 't8545s', q: 'Jak napiszesz po angielsku liczbę 40?', options: ['forty', 'fourty', 'fourteen', 'four'], answer: 0, explain: '40 to „forty” – bez litery „u”, choć „four” (4) i „fourteen” (14) mają „u”.' },
        { id: 'w8ea4l', q: 'Którą liczbę oznacza słowo „thirteen”?', options: ['13', '30', '3', '33'], answer: 0, explain: 'Końcówka „-teen” oznacza liczby od 13 do 19. „Thirteen” to 13, a 30 to „thirty”.' },
        { id: '3oh4z5', q: 'Ile to jest „twenty-five”?', options: ['25', '52', '205', '15'], answer: 0, explain: '„Twenty” to 20, „five” to 5. Razem 25.' },
        { id: 'lixzha', q: 'Koleżanka daje ci prezent. Co mówisz?', options: ['Thank you!', 'Sorry!', 'Excuse me!', 'Good night!'], answer: 0, explain: 'Za prezent dziękujemy: „Thank you!” albo „Thanks!”.' },
        { id: '09z44d', q: 'Ktoś mówi do ciebie: „Thank you!”. Jak grzecznie odpowiesz?', options: ['You\'re welcome.', 'Excuse me.', 'Goodbye.', 'I\'m fine.'], answer: 0, explain: '„You\'re welcome.” to „Proszę bardzo” albo „Nie ma za co” – odpowiedź na podziękowanie.' },
        { id: 'a7kepl', q: 'Chcesz zapytać nieznajomą panią o drogę. Jak zaczniesz?', options: ['Excuse me, …', 'You\'re welcome, …', 'Good night, …', 'Thank you, …'], answer: 0, explain: '„Excuse me” to „przepraszam”, gdy chcesz kogoś zaczepić i o coś zapytać.' },
        { id: 'rt2rfn', q: 'Prawda czy fałsz?\n„Good night!” mówimy na powitanie, gdy wieczorem przychodzimy do kogoś w gości.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Wieczorem na powitanie mówimy „Good evening!”. „Good night!” to pożegnanie przed snem albo na koniec wieczoru.' },
      ],
    },
    {
      id: 'przyroda-sport-zdrowie',
      name: 'Zwierzęta, pogoda, sport i zdrowie',
      chapter: 'Welcome unit, Unit 5, Unit 7',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 9 „sport” (dyscypliny, uprawianie sportu), temat 10 „zdrowie” (części ciała, samopoczucie, choroby i objawy), temat 11 „świat przyrody” (pogoda, pory roku, zwierzęta); wym. 2.1 (reaguje na polecenia), 6.9 (prosi o radę i udziela rady), 6.11 (ostrzega, nakazuje, zakazuje, instruuje). Połączenia „play / go” ze sportami i tryb rozkazujący – wybór redakcyjny (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Zwierzęta</h3>
        <table>
          <tr><td>dog / cat</td><td>pies / kot</td><td>horse</td><td>koń</td></tr>
          <tr><td>cow</td><td>krowa</td><td>pig</td><td>świnia</td></tr>
          <tr><td>sheep</td><td>owca</td><td>hen</td><td>kura</td></tr>
          <tr><td>rabbit</td><td>królik</td><td>mouse</td><td>mysz</td></tr>
          <tr><td>frog</td><td>żaba</td><td>bird</td><td>ptak</td></tr>
          <tr><td>elephant</td><td>słoń</td><td>monkey</td><td>małpa</td></tr>
        </table>
        <div class="tip">💡 <b>Sheep</b> w liczbie mnogiej się nie zmienia: <i>one sheep – three sheep</i>. A <b>mouse</b> → <b>mice</b>.</div>
        <h3>Pogoda i pory roku</h3>
        <p><b>What's the weather like?</b> – Jaka jest pogoda?</p>
        <table>
          <tr><td>☀️ It's sunny.</td><td>Jest słonecznie.</td></tr>
          <tr><td>☁️ It's cloudy.</td><td>Jest pochmurno.</td></tr>
          <tr><td>🌧️ It's rainy.</td><td>Jest deszczowo.</td></tr>
          <tr><td>💨 It's windy.</td><td>Jest wietrznie.</td></tr>
          <tr><td>❄️ It's snowy.</td><td>Pada śnieg, jest śnieżnie.</td></tr>
          <tr><td>🥵 It's hot. / 🥶 It's cold.</td><td>Jest gorąco. / Jest zimno.</td></tr>
        </table>
        <p>Pory roku (<b>seasons</b>): <b>spring</b> (wiosna), <b>summer</b> (lato), <b>autumn</b> (jesień), <b>winter</b> (zima).</p>
        <h3>Sport – play czy go?</h3>
        <ul>
          <li><b>play</b> + gra z piłką lub rakietą: <i>play football, play basketball, play volleyball, play tennis</i></li>
          <li><b>go</b> + sport z końcówką <b>-ing</b>: <i>go swimming</i> (pływać), <i>go cycling</i> (jeździć na rowerze), <i>go skiing</i> (jeździć na nartach)</li>
        </ul>
        <h3>Ciało</h3>
        <table>
          <tr><td>head</td><td>głowa</td><td>arm</td><td>ręka (ramię)</td></tr>
          <tr><td>eye / ear</td><td>oko / ucho</td><td>hand</td><td>dłoń</td></tr>
          <tr><td>nose / mouth</td><td>nos / usta</td><td>leg</td><td>noga</td></tr>
          <tr><td>tooth (teeth)</td><td>ząb (zęby)</td><td>foot (feet)</td><td>stopa (stopy)</td></tr>
        </table>
        <h3>Jak się czujesz?</h3>
        <p><b>What's the matter?</b> / <b>What's wrong?</b> – Co się stało? Co ci jest?</p>
        <ul>
          <li><i>I've got a <b>headache</b>.</i> – Boli mnie głowa.</li>
          <li><i>I've got a <b>toothache</b>.</i> – Boli mnie ząb.</li>
          <li><i>I've got a <b>stomachache</b>.</i> – Boli mnie brzuch.</li>
          <li><i>I've got a <b>cold</b>.</i> – Jestem przeziębiony.</li>
        </ul>
        <p>Rady: <i>Go to the doctor.</i> (Idź do lekarza.) <i>Go to the dentist.</i> (Idź do dentysty.) <i>Go to bed.</i> (Połóż się do łóżka.)</p>
        <div class="tip">💡 Ból to często końcówka <b>-ache</b>: head<b>ache</b>, tooth<b>ache</b>, stomach<b>ache</b>.</div>
        <h3>Polecenia i zakazy</h3>
        <p>Polecenie zaczynasz od czasownika: <i><b>Open</b> your books.</i> (Otwórzcie książki.) <i><b>Sit</b> down.</i> (Usiądź.) <i><b>Stand</b> up.</i> (Wstań.) <i><b>Listen</b>.</i> (Słuchaj.)</p>
        <p>Zakaz: <b>Don't</b> + czasownik: <i><b>Don't</b> run!</i> (Nie biegaj!) <i><b>Don't</b> touch!</i> (Nie dotykaj!)</p>
        <p>Ostrzeżenie: <i><b>Be careful!</b></i> – Uważaj!</p>
      `,
      infographicNote: 'Każdy kafelek to grupa słówek; ten sam kolor – ten sam temat.',
      infographic: {
        type: 'karty', kolumny: 2,
        items: [
          { icon: '🐄', kolor: 3, title: 'Zwierzęta', text: 'cow, pig, sheep, horse, hen, rabbit' },
          { icon: '🌦️', kolor: 3, title: 'Pogoda', text: "It's sunny. It's rainy. It's windy." },
          { icon: '⚽', kolor: 1, title: 'play +', text: 'gra z piłką lub rakietą: play football, play tennis' },
          { icon: '🏊', kolor: 1, title: 'go +', text: 'sport z -ing: go swimming, go cycling' },
          { icon: '🤒', kolor: 2, title: "What's the matter?", text: "I've got a headache. → Go to the doctor." },
          { icon: '🚫', kolor: 5, title: 'Polecenia', text: "Sit down! Don't run! Be careful!" },
        ],
        bottom: { kolor: 4, title: '💡 Ból to często -ache', text: 'headache (głowa), toothache (ząb), stomachache (brzuch)' },
      },
      flashcards: [
        ['cow / pig / sheep', 'krowa / świnia / owca'],
        ['horse / hen / rabbit', 'koń / kura / królik'],
        ['sunny / cloudy / rainy', 'słonecznie / pochmurno / deszczowo'],
        ['windy / snowy', 'wietrznie / śnieżnie'],
        ['spring / summer / autumn / winter', 'wiosna / lato / jesień / zima'],
        ['play + …', 'gry z piłką lub rakietą: play football, play tennis'],
        ['go + …', 'sport z -ing: go swimming, go cycling'],
        ['head / arm / leg', 'głowa / ręka / noga'],
        ['I\'ve got a headache.', 'Boli mnie głowa.'],
        ['What\'s the matter?', 'Co się stało? Co ci jest?'],
        ['Don\'t…!', 'zakaz: Don\'t run! – Nie biegaj!'],
        ['Be careful!', 'Uważaj!'],
      ],
      questions: [
        {
          id: 'f02pm2', q: 'Jaka jest pogoda na obrazku?',
          svg: `<svg viewBox="0 0 300 120" role="img" aria-label="Duże słońce na bezchmurnym niebie">
            <rect x="10" y="10" width="280" height="100" rx="12" class="f1"/>
            <text x="150" y="72" class="tx-b" text-anchor="middle" style="font-size:40px">☀️</text>
          </svg>`,
          options: ['It\'s sunny.', 'It\'s rainy.', 'It\'s snowy.', 'It\'s cloudy.'], answer: 0, explain: 'Świeci słońce – „It\'s sunny.” (Jest słonecznie.)',
        },
        { id: 'a71tc7', q: 'Co znaczy słowo „autumn”?', options: ['jesień', 'wiosna', 'lato', 'zima'], answer: 0, explain: '„Autumn” to jesień. Wiosna – „spring”, lato – „summer”, zima – „winter”.' },
        { id: 'aqao4f', q: 'Jest zimno i wszędzie leży śnieg. Jaka to pora roku?', options: ['winter', 'summer', 'spring', 'autumn'], answer: 0, explain: 'Zima to „winter”.' },
        { id: 'pxwoyw', q: 'Uzupełnij: „I ___ football on Saturdays.”', options: ['play', 'go', 'ride'], answer: 0, explain: 'Z grami z piłką łączymy „play”: play football.' },
        { id: 'kt77jd', q: 'Uzupełnij: „We ___ swimming in the summer.”', options: ['go', 'play', 'ride'], answer: 0, explain: 'Ze sportami z końcówką -ing łączymy „go”: go swimming.' },
        { id: 'tmhz7g', q: 'Co znaczy „I\'ve got a headache”?', options: ['Boli mnie głowa.', 'Boli mnie ząb.', 'Boli mnie brzuch.', 'Mam gorączkę.'], answer: 0, explain: '„Head” to głowa, „ache” to ból. Headache – ból głowy.' },
        { id: 'fgc0nh', q: 'Kolega mówi: „I\'ve got a toothache.” Jaką dasz mu radę?', options: ['Go to the dentist.', 'Go swimming.', 'Eat some sweets.', 'Play football.'], answer: 0, explain: '„Toothache” to ból zęba. Najlepsza rada: „Go to the dentist.” – Idź do dentysty.' },
        { id: 'yoszdl', q: 'Co znaczy pytanie „What\'s the matter?”', options: ['Co się stało?', 'Ile to kosztuje?', 'Która godzina?', 'Jak masz na imię?'], answer: 0, explain: '„What\'s the matter?” to „Co się stało? Co ci jest?”. Pytamy tak, gdy ktoś źle się czuje.' },
        { id: 'mwkh2r', q: 'Jaka jest liczba mnoga słowa „foot” (stopa)?', options: ['feet', 'foots', 'feets', 'footes'], answer: 0, explain: 'To wyjątek: one foot – two feet.' },
        { id: 'binpvk', q: 'Jaka jest liczba mnoga słowa „sheep” (owca)?', options: ['sheep', 'sheeps', 'sheepes', 'shoop'], answer: 0, explain: '„Sheep” w liczbie mnogiej się nie zmienia: one sheep – five sheep.' },
        { id: 'xyvz47', q: 'Nauczycielka mówi: „Open your books, please.” Co robisz?', options: ['otwieram książkę', 'zamykam książkę', 'wstaję', 'siadam'], answer: 0, explain: '„Open” to otwórz. „Close” – zamknij, „stand up” – wstań, „sit down” – usiądź.' },
        { id: '6nyhh5', q: 'Jak powiesz po angielsku „Nie biegaj!”?', options: ['Don\'t run!', 'Not run!', 'Doesn\'t run!', 'You not run!'], answer: 0, explain: 'Zakaz to „Don\'t” + czasownik: Don\'t run!' },
        { id: 'znm0kx', q: 'Co znaczy słowo „cow”?', options: ['krowa', 'koń', 'świnia', 'owca'], answer: 0, explain: '„Cow” to krowa. Koń – „horse”, świnia – „pig”, owca – „sheep”.' },
        { id: '75c3f8', q: 'Co znaczy słowo „ear”?', options: ['ucho', 'oko', 'nos', 'ramię'], answer: 0, explain: '„Ear” to ucho. Oko – „eye”, nos – „nose”, ramię – „arm”.' },
        { id: '0auoj2', q: 'Prawda czy fałsz?\nPo angielsku mówimy „go football”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Z piłką nożną łączymy „play”: play football. „Go” łączymy ze sportami na -ing, np. go swimming.' },
      ],
    },
    {
      id: 'wyglad-i-cechy',
      name: 'Wygląd, charakter, uczucia, „have got” i „can”',
      chapter: 'Unit 2, Unit 4, Unit 5',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 1 „człowiek” (wygląd zewnętrzny, cechy charakteru, uczucia i emocje, umiejętności); wym. 4.1 (opisuje ludzi), 4.7 (wyraża uczucia i emocje), 6.13 (wyraża uczucia i emocje w rozmowie). Konstrukcje „have got”, „can” i przysłówki sposobu (Unit 5) – wybór redakcyjny (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Wygląd</h3>
        <table>
          <tr><th>Po angielsku</th><th>Po polsku</th></tr>
          <tr><td>tall / short</td><td>wysoki / niski</td></tr>
          <tr><td>long hair / short hair</td><td>długie włosy / krótkie włosy</td></tr>
          <tr><td>curly hair / straight hair</td><td>kręcone włosy / proste włosy</td></tr>
          <tr><td>fair hair / dark hair</td><td>jasne włosy / ciemne włosy</td></tr>
          <tr><td>blue eyes / brown eyes / green eyes</td><td>niebieskie / brązowe / zielone oczy</td></tr>
          <tr><td>glasses</td><td>okulary</td></tr>
        </table>
        <div class="tip">💡 Słowo <b>short</b> ma dwa znaczenia: <b>niski</b> (o człowieku) i <b>krótki</b> (np. short hair – krótkie włosy).</div>
        <p>Kiedy opisujesz włosy, najpierw mówisz o długości, potem o kolorze: <i>long <b>dark</b> hair</i> – długie ciemne włosy.</p>
        <h3>Charakter</h3>
        <table>
          <tr><td>kind</td><td>miły, życzliwy</td><td>funny</td><td>zabawny</td></tr>
          <tr><td>friendly</td><td>przyjazny</td><td>clever</td><td>bystry, mądry</td></tr>
          <tr><td>brave</td><td>odważny</td><td>shy</td><td>nieśmiały</td></tr>
          <tr><td>lazy</td><td>leniwy</td><td>helpful</td><td>pomocny</td></tr>
        </table>
        <h3>Uczucia</h3>
        <table>
          <tr><td>😀 happy</td><td>szczęśliwy, wesoły</td><td>😢 sad</td><td>smutny</td></tr>
          <tr><td>😠 angry</td><td>zły, rozgniewany</td><td>😴 tired</td><td>zmęczony</td></tr>
          <tr><td>😨 scared</td><td>przestraszony</td><td>🥱 bored</td><td>znudzony</td></tr>
        </table>
        <p>Pytanie: <b>How do you feel?</b> – Jak się czujesz? Odpowiedź: <i>I'm happy.</i> / <i>I feel tired.</i></p>
        <h3>„have got” – mieć</h3>
        <table>
          <tr><th>Kto?</th><th>Twierdzenie</th><th>Przeczenie</th></tr>
          <tr><td>I, you, we, they</td><td>have got ('ve got)</td><td>haven't got</td></tr>
          <tr><td>he, she, it</td><td><b>has</b> got ('s got)</td><td><b>hasn't</b> got</td></tr>
        </table>
        <ul>
          <li><i>I've got a dog.</i> – Mam psa. <i>She's got blue eyes.</i> – Ona ma niebieskie oczy.</li>
          <li>Pytanie: <b>Have</b> you got a sister? – Yes, I have. / No, I haven't.</li>
          <li><b>Has</b> he got a bike? – Yes, he has. / No, he hasn't.</li>
        </ul>
        <div class="tip">💡 <b>He's</b> może znaczyć <i>he is</i> (on jest) albo <i>he has</i> (on ma). Jeśli dalej jest „got”, to na pewno „has”: <i>He's got a cat.</i></div>
        <h3>„can” – umieć, potrafić</h3>
        <ul>
          <li><i>I can swim.</i> – Umiem pływać. <i>She can ride a bike.</i> – Ona umie jeździć na rowerze.</li>
          <li>Przeczenie: <b>can't</b> – <i>I can't sing.</i> – Nie umiem śpiewać.</li>
          <li>Pytanie: <b>Can</b> you dance? – Yes, I can. / No, I can't.</li>
        </ul>
        <div class="tip">💡 „Can” jest takie samo dla wszystkich osób – <b>bez -s</b>: <i>he can</i>, nie „he cans”. A czasownik po nim jest w podstawowej formie: <i>can swim</i>, nie „can swims”.</div>
        <h3>Jak? – przysłówki sposobu</h3>
        <p>Przysłówek mówi, <b>jak</b> ktoś coś robi: <i>She sings <b>beautifully</b>.</i> – Ona pięknie śpiewa. <i>I can swim <b>fast</b>.</i> – Umiem szybko pływać. Stawiamy go zwykle <b>za czasownikiem</b> (albo na końcu zdania).</p>
        <table>
          <tr><th>Przymiotnik (jaki?)</th><th>Przysłówek (jak?)</th></tr>
          <tr><td>slow – wolny</td><td>slow<b>ly</b> – wolno</td></tr>
          <tr><td>quick – szybki</td><td>quick<b>ly</b> – szybko</td></tr>
          <tr><td>quiet / loud – cichy / głośny</td><td>quiet<b>ly</b> / loud<b>ly</b> – cicho / głośno</td></tr>
          <tr><td>careful – ostrożny</td><td>careful<b>ly</b> – ostrożnie</td></tr>
          <tr><td>beautiful – piękny</td><td>beautiful<b>ly</b> – pięknie</td></tr>
          <tr><td>easy – łatwy</td><td>eas<b>ily</b> – łatwo (-y → -ily)</td></tr>
          <tr><td>happy – wesoły</td><td>happ<b>ily</b> – wesoło</td></tr>
          <tr><td><b>good</b> – dobry</td><td><b>well</b> – dobrze</td></tr>
          <tr><td><b>fast</b> – szybki</td><td><b>fast</b> – szybko</td></tr>
          <tr><td><b>hard</b> – ciężki, pracowity</td><td><b>hard</b> – ciężko, pilnie</td></tr>
        </table>
        <div class="tip">💡 Przymiotnik opisuje osobę lub rzecz: <i>Tom is a <b>good</b> swimmer.</i> Przysłówek opisuje czynność: <i>Tom swims <b>well</b>.</i> Nie ma słowa „goodly” ani „fastly”!</div>
      `,
      infographicNote: 'Porównuj w poziomie: po lewej I, you, we, they, po prawej he, she, it.',
      infographic: {
        type: 'porownanie',
        top: { kolor: 5, title: '🧑 Opisujesz ludzi', items: ['wygląd: tall, short, curly hair', 'charakter: kind, funny, shy', 'uczucia: happy, sad, tired'] },
        kolumny: [{ title: 'I, you, we, they', kolor: 1 }, { title: 'he, she, it', kolor: 2 }],
        wiersze: [
          { label: 'have got – mieć', cells: ["I've got a dog.", "She's got blue eyes."] },
          { label: 'przeczenie', cells: ["haven't got", "hasn't got"], bold: true },
          { label: 'pytanie i krótka odpowiedź', cells: ['Have you got…? – Yes, I have.', 'Has he got…? – Yes, he has.'] },
          { label: 'can – umieć (zawsze bez -s!)', cells: ['I can swim.', 'She can ride a bike.'] },
        ],
        bottom: { kolor: 4, title: '💡 Jak? – przysłówki sposobu', text: 'slow → slowly · easy → easily\ngood → well · fast → fast' },
      },
      flashcards: [
        ['tall / short', 'wysoki / niski (short to też „krótki”)'],
        ['curly / straight hair', 'kręcone / proste włosy'],
        ['fair / dark hair', 'jasne / ciemne włosy'],
        ['kind, funny, shy', 'miły, zabawny, nieśmiały'],
        ['brave, lazy, clever', 'odważny, leniwy, bystry'],
        ['happy / sad', 'wesoły / smutny'],
        ['angry, tired, scared', 'zły, zmęczony, przestraszony'],
        ['I have got = I\'ve got', 'mam'],
        ['he / she / it …', 'has got (\'s got) – hasn\'t got'],
        ['Have you got…? – krótkie odpowiedzi', 'Yes, I have. / No, I haven\'t.'],
        ['can / can\'t', 'umiem / nie umiem – dla wszystkich osób tak samo, bez -s'],
        ['Can you swim? – krótkie odpowiedzi', 'Yes, I can. / No, I can\'t.'],
        ['slow → slowly, quiet → quietly, easy → easily', 'przysłówki sposobu: jak ktoś coś robi'],
        ['good → ? · fast → ? · hard → ?', 'well · fast · hard (wyjątki)'],
      ],
      questions: [
        { id: '6sk212', q: 'Uzupełnij: „She ___ got blue eyes.”', options: ['has', 'have', 'is', 'are'], answer: 0, explain: 'Z „he”, „she”, „it” mówimy „has got”: She has got (She\'s got) blue eyes.' },
        { id: '8fyieo', q: 'Uzupełnij: „We ___ got a big dog.”', options: ['have', 'has', 'are', 'is'], answer: 0, explain: 'Z „I”, „you”, „we”, „they” mówimy „have got”: We have got a big dog.' },
        { id: '9tocex', q: 'Uzupełnij: „My brother is only two months old. He ___ walk.”', options: ['can\'t', 'can', 'cans', 'isn\'t'], answer: 0, explain: 'Dwumiesięczne dziecko nie umie chodzić – „He can\'t walk”. „Can” nie dostaje końcówki -s.' },
        { id: 'nvm5sk', q: 'Uzupełnij: „Ola can ___ a bike.”', options: ['ride', 'rides', 'riding', 'to ride'], answer: 0, explain: 'Po „can” czasownik jest w podstawowej formie, bez -s i bez „to”: can ride.' },
        { id: 'jec91t', q: 'Które pytanie jest poprawne?', options: ['Can you play the guitar?', 'Do you can play the guitar?', 'Can you plays the guitar?', 'You can play the guitar?'], answer: 0, explain: 'W pytaniu „can” stoi na początku, a czasownik jest w podstawowej formie: Can you play…?' },
        { id: 'nbjuif', q: 'Kolega pyta: „Have you got a sister?”. Nie masz siostry. Co odpowiesz?', options: ['No, I haven\'t.', 'No, I don\'t.', 'No, I\'m not.', 'No, I hasn\'t.'], answer: 0, explain: 'Na pytanie z „Have you got…?” odpowiadamy krótko: Yes, I have. / No, I haven\'t.' },
        { id: 'd563x1', q: 'Jak powiesz po angielsku „wysoki” (o człowieku)?', options: ['tall', 'short', 'long', 'curly'], answer: 0, explain: '„Tall” to wysoki. „Short” to niski albo krótki, „long” – długi, „curly” – kręcony.' },
        { id: 'vbturx', q: 'Co znaczy „curly hair”?', options: ['kręcone włosy', 'proste włosy', 'długie włosy', 'jasne włosy'], answer: 0, explain: '„Curly” to kręcony. Proste włosy to „straight hair”.' },
        { id: 'xzh39c', q: 'Kuba ciągle opowiada żarty i wszyscy się przy nim śmieją. Jaki jest Kuba?', options: ['funny', 'lazy', 'shy', 'tired'], answer: 0, explain: '„Funny” to zabawny. „Lazy” – leniwy, „shy” – nieśmiały, „tired” – zmęczony.' },
        { id: 'ok0uwy', q: 'Ola boi się dużego psa. Jak się czuje?', options: ['scared', 'happy', 'bored', 'lazy'], answer: 0, explain: '„Scared” to przestraszony. Ola się boi, więc jest „scared”.' },
        { id: 'uw6vr2', q: 'Nie spałeś w nocy i oczy same ci się zamykają. Co powiesz?', options: ['I\'m tired.', 'I\'m angry.', 'I\'m brave.', 'I\'m funny.'], answer: 0, explain: '„Tired” to zmęczony.' },
        { id: 'gm7in7', q: 'Które zdanie brzmi poprawnie?', options: ['She\'s got long dark hair.', 'She\'s got hair long dark.', 'She\'s got long hair dark.', 'She\'s got dark hair long.'], answer: 0, explain: 'Określenia stoją przed słowem „hair”: najpierw długość (long), potem kolor (dark).' },
        { id: 'byzhh4', q: 'Co znaczy słowo „shy”?', options: ['nieśmiały', 'odważny', 'leniwy', 'miły'], answer: 0, explain: '„Shy” to nieśmiały. Odważny to „brave”, leniwy – „lazy”, miły – „kind”.' },
        { id: 'e2af9w', q: 'Prawda czy fałsz?\nW zdaniu „He\'s got a cat.” skrót „He\'s” znaczy „He has”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Po „He\'s” stoi „got”, więc to „He has got a cat” – On ma kota.' },
        { id: 'xe9dbt', q: 'Uzupełnij: „Ola is a fast runner. She runs ___.”', options: ['fast', 'fastly', 'slow', 'good'], answer: 0, explain: '„Fast” jest wyjątkiem – przysłówek ma tę samą formę: She runs fast. Słowa „fastly” nie ma.' },
        { id: 'fdz7wc', q: 'Uzupełnij: „Tom is a good singer. He sings ___.”', options: ['well', 'good', 'goodly', 'bad'], answer: 0, explain: 'Przysłówek od „good” to „well”: He sings well – śpiewa dobrze.' },
        { id: 'p27gsa', q: 'Jak utworzyć przysłówek od „quiet” (cichy)?', options: ['quietly', 'quiety', 'quietily', 'quietlly'], answer: 0, explain: 'Do przymiotnika dodajemy -ly: quiet → quietly (cicho).' },
        { id: 'xaoraj', q: 'Uzupełnij: „Please speak ___. The baby is sleeping.”', options: ['quietly', 'quiet', 'loudly', 'quick'], answer: 0, explain: 'Dziecko śpi, więc mówimy cicho – „quietly”. Po czasowniku „speak” potrzebny jest przysłówek.' },
        { id: 'kmhtbv', q: 'Co znaczy zdanie „She can swim very well”?', options: ['Ona umie bardzo dobrze pływać.', 'Ona umie bardzo szybko pływać.', 'Ona bardzo lubi pływać.', 'Ona nie umie pływać.'], answer: 0, explain: '„Well” to „dobrze”, „very well” – bardzo dobrze. „Szybko” to „fast”.' },
        { id: '9rnd9a', q: 'Jak utworzyć przysłówek od „easy” (łatwy)?', options: ['easily', 'easyly', 'easly', 'easy'], answer: 0, explain: 'Gdy przymiotnik kończy się na -y, zmieniamy je na -ily: easy → easily (łatwo).' },
        { id: 'jg0s9u', q: 'Prawda czy fałsz?\nZdanie „She cans swim.” jest poprawne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: '„Can” nie dostaje końcówki -s. Poprawnie: „She can swim.”' },
      ],
    },
    {
      id: 'kraje-i-pytania',
      name: 'Kraje i narodowości, pytania z „wh-”',
      chapter: 'Unit 2',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 1 „człowiek” (dane personalne – skąd pochodzę); wym. 6.1 (przedstawia siebie i inne osoby), 6.3 i 7.3 (uzyskuje i przekazuje informacje); wym. 10.1 i 10.5 (wiedza o krajach, w których mówi się po angielsku, ciekawość innych kultur). Nazwy krajów i pytania z „wh-” – wybór redakcyjny według podręcznika (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Skąd jesteś?</h3>
        <ul>
          <li><b>Where are you from?</b> – Skąd jesteś? → <i>I'm from Poland. I'm Polish.</i></li>
          <li><b>Where is he from?</b> – Skąd on jest? → <i>He's from Spain. He's Spanish.</i></li>
          <li><b>Where are they from?</b> → <i>They're from the USA. They're American.</i></li>
        </ul>
        <h3>Kraje i narodowości</h3>
        <table>
          <tr><th>Kraj</th><th>Narodowość</th><th>Po polsku</th></tr>
          <tr><td>Poland</td><td>Polish</td><td>Polska – polski, Polak / Polka</td></tr>
          <tr><td>the UK</td><td>British</td><td>Wielka Brytania – brytyjski</td></tr>
          <tr><td>England</td><td>English</td><td>Anglia – angielski</td></tr>
          <tr><td>Ireland</td><td>Irish</td><td>Irlandia – irlandzki</td></tr>
          <tr><td>the USA</td><td>American</td><td>Stany Zjednoczone – amerykański</td></tr>
          <tr><td>Canada</td><td>Canadian</td><td>Kanada – kanadyjski</td></tr>
          <tr><td>Australia</td><td>Australian</td><td>Australia – australijski</td></tr>
          <tr><td>Germany</td><td>German</td><td>Niemcy – niemiecki</td></tr>
          <tr><td>France</td><td>French</td><td>Francja – francuski</td></tr>
          <tr><td>Spain</td><td>Spanish</td><td>Hiszpania – hiszpański</td></tr>
          <tr><td>Italy</td><td>Italian</td><td>Włochy – włoski</td></tr>
          <tr><td>China</td><td>Chinese</td><td>Chiny – chiński</td></tr>
          <tr><td>Japan</td><td>Japanese</td><td>Japonia – japoński</td></tr>
        </table>
        <div class="tip">💡 Kraje, narodowości i języki piszemy po angielsku <b>wielką literą</b>: <i>I'm <b>P</b>olish. I speak <b>P</b>olish and <b>E</b>nglish.</i> Nazwa języka często brzmi tak samo jak narodowość: English, Polish, French, Spanish, German.</div>
        <p>Przed nazwą kraju zwykle nie ma „the”: <i>from Poland, from Spain</i>. Wyjątki to nazwy skrócone: <b>the UK</b>, <b>the USA</b>.</p>
        <h3>Kraje, w których mówi się po angielsku</h3>
        <p>Po angielsku mówi się m.in. w Wielkiej Brytanii, Irlandii, Stanach Zjednoczonych, Kanadzie i Australii.</p>
        <ul>
          <li><b>The UK</b> (Wielka Brytania) ma cztery części: <b>England</b> (Anglia), <b>Scotland</b> (Szkocja), <b>Wales</b> (Walia) i <b>Northern Ireland</b> (Irlandia Północna). Stolica: <b>London</b>.</li>
          <li><b>Ireland</b> (Irlandia) to osobne państwo. Stolica: <b>Dublin</b>.</li>
          <li>Stolica <b>the USA</b>: <b>Washington</b>.</li>
        </ul>
        <div class="tip">💡 Nie każdy Brytyjczyk to Anglik! Ktoś ze Szkocji jest <i>British</i> i <i>Scottish</i>, ale nie <i>English</i>.</div>
        <h3>Pytania z „wh-”</h3>
        <table>
          <tr><th>Słowo pytające</th><th>Po polsku</th><th>Przykład</th></tr>
          <tr><td><b>What</b></td><td>co? jaki?</td><td>What's your name?</td></tr>
          <tr><td><b>Where</b></td><td>gdzie?</td><td>Where is my bag?</td></tr>
          <tr><td><b>Who</b></td><td>kto?</td><td>Who is that girl?</td></tr>
          <tr><td><b>When</b></td><td>kiedy?</td><td>When is your birthday?</td></tr>
          <tr><td><b>Why</b></td><td>dlaczego?</td><td>Why are you sad? – <i>Because</i>… (ponieważ…)</td></tr>
          <tr><td><b>How</b></td><td>jak?</td><td>How are you?</td></tr>
          <tr><td><b>How old</b></td><td>ile lat?</td><td>How old is your brother?</td></tr>
          <tr><td><b>How many</b></td><td>ile? (sztuk)</td><td>How many pets have you got?</td></tr>
          <tr><td><b>What colour</b></td><td>jakiego koloru?</td><td>What colour is your bike?</td></tr>
          <tr><td><b>What time</b></td><td>o której? która godzina?</td><td>What time is it?</td></tr>
        </table>
        <p><b>Szyk pytania</b>: słowo pytające → <b>is / are</b> → osoba: <i>Where <b>are you</b> from?</i> Z innymi czasownikami: słowo pytające → <b>do / does</b> → osoba → czasownik: <i>Where <b>do you live</b>?</i> (Gdzie mieszkasz?), <i>What <b>does she like</b>?</i></p>
      `,
      infographicNote: 'Porównuj w poziomie: kraj po lewej, narodowość po prawej; na dole – jak zbudować pytanie.',
      infographic: {
        type: 'porownanie',
        top: { kolor: 5, title: '🌍 Where are you from?', text: "I'm from Poland. I'm Polish.\nKraj i narodowość – wielką literą!" },
        kolumny: [{ title: 'Kraj', kolor: 1 }, { title: 'Narodowość', kolor: 3 }],
        wiersze: [
          { cells: ['Poland', 'Polish'], bold: true },
          { cells: ['the UK', 'British'], bold: true },
          { cells: ['the USA', 'American'], bold: true },
          { cells: ['Spain', 'Spanish'], bold: true },
          { cells: ['Japan', 'Japanese'], bold: true },
        ],
        bottom: { kolor: 4, title: '❓ Pytania z wh-', text: 'What? Where? Who? When? Why? How?\nKolejność słów w pytaniu:', items: ['Where → are → you → from?', 'Where → do → you → live?'] },
      },
      flashcards: [
        ['Where are you from?', 'Skąd jesteś? → I\'m from Poland. I\'m Polish.'],
        ['Poland – Polish', 'Polska – polski, Polak / Polka'],
        ['the UK – British', 'Wielka Brytania – brytyjski'],
        ['the USA – American', 'Stany Zjednoczone – amerykański'],
        ['Germany – German · France – French', 'Niemcy – niemiecki · Francja – francuski'],
        ['Spain – Spanish · Italy – Italian', 'Hiszpania – hiszpański · Włochy – włoski'],
        ['China – Chinese · Japan – Japanese', 'Chiny – chiński · Japonia – japoński'],
        ['Cztery części the UK', 'England, Scotland, Wales, Northern Ireland'],
        ['What? Where? Who?', 'Co? Gdzie? Kto?'],
        ['When? Why? How?', 'Kiedy? Dlaczego? Jak?'],
        ['How old? How many?', 'Ile lat? Ile (sztuk)?'],
        ['Why…? → odpowiedź', 'Because… (ponieważ…)'],
      ],
      questions: [
        { id: '3302av', q: 'Uzupełnij: „I\'m from Spain. I\'m ___.”', options: ['Spanish', 'Spain', 'Spanian', 'English'], answer: 0, explain: 'Kraj to Spain, a narodowość – Spanish (hiszpański, Hiszpan).' },
        { id: 'qo816l', q: 'Uzupełnij: „Tom is from the USA. He\'s ___.”', options: ['American', 'British', 'English', 'Australian'], answer: 0, explain: 'Ktoś ze Stanów Zjednoczonych (the USA) jest American.' },
        { id: 'a14403', q: 'Jak zapytasz nowego kolegę, skąd jest?', options: ['Where are you from?', 'Where you are from?', 'What are you from?', 'Who are you from?'], answer: 0, explain: 'Słowo pytające, potem „are”, potem „you”: Where are you from?' },
        { id: '3jnk2h', q: 'Uzupełnij: „Hans is from Germany. He speaks ___.”', options: ['German', 'Germany', 'Germanian', 'French'], answer: 0, explain: 'Germany to kraj (Niemcy), a German – język i narodowość (niemiecki).' },
        { id: '8hn0lp', q: 'Które zdanie jest zapisane poprawnie?', options: ['I am Polish.', 'I am polish.', 'I am from polish.', 'I am Poland.'], answer: 0, explain: 'Narodowość piszemy wielką literą: Polish. „I am Poland” znaczyłoby „Jestem Polską”.' },
        { id: '519kf1', q: 'Yumi jest z Japonii. Które zdanie jest prawdziwe?', options: ['She\'s Japanese.', 'She\'s Chinese.', 'She\'s Japan.', 'She\'s Japanish.'], answer: 0, explain: 'Japan – Japanese. Chinese to ktoś z Chin (China).' },
        { id: 'gacre9', q: 'Który kraj NIE jest częścią Wielkiej Brytanii (the UK)?', options: ['Ireland', 'England', 'Scotland', 'Wales'], answer: 0, explain: 'The UK to England, Scotland, Wales i Northern Ireland (Irlandia Północna). Ireland (Irlandia) to osobne państwo ze stolicą w Dublinie.' },
        { id: 'shjja6', q: 'Jaka jest stolica Wielkiej Brytanii?', options: ['London', 'Dublin', 'Washington', 'Wales'], answer: 0, explain: 'Stolicą Wielkiej Brytanii jest London (Londyn). Dublin to stolica Irlandii, Washington – Stanów Zjednoczonych, a Wales (Walia) to część Wielkiej Brytanii.' },
        { id: '27ec8d', q: 'Uzupełnij: „___ is your birthday?” – „In May.”', options: ['When', 'Where', 'Who', 'What colour'], answer: 0, explain: 'Odpowiedź to czas (w maju), więc pytamy „When?” – kiedy?' },
        { id: '3yfmo8', q: 'Uzupełnij: „___ is that boy?” – „He\'s my brother.”', options: ['Who', 'What', 'Where', 'When'], answer: 0, explain: 'Pytamy o osobę – „Who?” (kto?).' },
        { id: 'tmv4uu', q: 'Uzupełnij: „___ are you sad?” – „Because my cat is ill.”', options: ['Why', 'How', 'Where', 'Who'], answer: 0, explain: 'Na „Why?” (dlaczego?) odpowiadamy „Because…” (ponieważ…).' },
        { id: '7idx9e', q: 'Uzupełnij: „___ pets have you got?” – „Three.”', options: ['How many', 'How old', 'How', 'What'], answer: 0, explain: 'Pytamy o liczbę – „How many?” (ile?).' },
        { id: 'd6ecob', q: 'Uzupełnij: „___ is your bike?” – „It\'s red.”', options: ['What colour', 'What time', 'How many', 'Where'], answer: 0, explain: 'Odpowiedź to kolor, więc pytamy „What colour?” (jakiego koloru?).' },
        { id: '0f4cuz', q: 'Co znaczy pytanie „Where do you live?”', options: ['Gdzie mieszkasz?', 'Skąd jesteś?', 'Gdzie jesteś?', 'Kiedy wracasz?'], answer: 0, explain: '„Live” to mieszkać, „where” – gdzie. „Skąd jesteś?” to „Where are you from?”.' },
        { id: 'ud68gx', q: 'Które pytanie jest poprawne?', options: ['What is your name?', 'What your name is?', 'What are your name?', 'Is what your name?'], answer: 0, explain: 'Słowo pytające, potem „is”, potem reszta: What is (What\'s) your name?' },
        { id: 'bq2k0c', q: 'Ktoś pyta: „How old is your sister?”. Która odpowiedź pasuje?', options: ['She\'s seven.', 'She\'s fine.', 'She\'s from Poland.', 'She\'s at home.'], answer: 0, explain: '„How old?” to pytanie o wiek. „She\'s seven.” – Ona ma siedem lat.' },
        { id: 'n7zecf', q: 'Ktoś pyta: „Where is she from?”. Która odpowiedź pasuje?', options: ['She\'s from Italy.', 'She\'s at school.', 'She\'s ten.', 'She\'s Italy.'], answer: 0, explain: '„Where… from?” – skąd? Odpowiadamy „from” + kraj. „She\'s at school” odpowiada na pytanie „Where is she?” (gdzie ona jest?).' },
        { id: 'xqbim8', q: 'Prawda czy fałsz?\nKtoś ze Szkocji jest „British”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Szkocja (Scotland) jest częścią Wielkiej Brytanii, więc Szkot jest British (i Scottish), ale nie English.' },
      ],
    },
    {
      id: 'jedzenie-i-zakupy',
      name: 'Jedzenie, ubrania i zakupy',
      chapter: 'Unit 1, Unit 3, Unit 6',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 6 „żywienie” (artykuły spożywcze, posiłki) i temat 7 „zakupy i usługi” (rodzaje sklepów, towary, odzież, kupowanie); wym. 4.5 (opisuje upodobania), 6.5 (wyraża upodobania i pyta o nie), 6.12 (wyraża prośbę), 6.14 (zwroty grzecznościowe). Przedimki a/an, liczba mnoga, „like” i „would like” – wybór redakcyjny (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Jedzenie i picie</h3>
        <table>
          <tr><td>bread</td><td>chleb</td><td>apple</td><td>jabłko</td></tr>
          <tr><td>butter</td><td>masło</td><td>banana</td><td>banan</td></tr>
          <tr><td>cheese</td><td>ser</td><td>orange</td><td>pomarańcza</td></tr>
          <tr><td>egg</td><td>jajko</td><td>potato</td><td>ziemniak</td></tr>
          <tr><td>milk</td><td>mleko</td><td>tomato</td><td>pomidor</td></tr>
          <tr><td>water</td><td>woda</td><td>carrot</td><td>marchewka</td></tr>
          <tr><td>juice</td><td>sok</td><td>chicken</td><td>kurczak</td></tr>
          <tr><td>tea</td><td>herbata</td><td>soup</td><td>zupa</td></tr>
        </table>
        <p>Posiłki: <b>breakfast</b> (śniadanie), <b>lunch</b> (posiłek w środku dnia), <b>dinner</b> (główny, ciepły posiłek dnia).</p>
        <h3>Ubrania i kolory</h3>
        <table>
          <tr><td>T-shirt</td><td>koszulka</td><td>shoes</td><td>buty</td></tr>
          <tr><td>jumper</td><td>sweter</td><td>socks</td><td>skarpetki</td></tr>
          <tr><td>trousers</td><td>spodnie</td><td>jacket</td><td>kurtka</td></tr>
          <tr><td>skirt</td><td>spódnica</td><td>dress</td><td>sukienka</td></tr>
        </table>
        <p>Kolory (<b>colours</b>): red, blue, green, yellow, black, white, orange, pink, purple (fioletowy), brown (brązowy), grey (szary).</p>
        <div class="tip">💡 <b>Trousers</b> i <b>jeans</b> to po angielsku zawsze liczba mnoga: <i>My jeans <b>are</b> blue.</i> A <b>orange</b> to i pomarańcza, i kolor pomarańczowy.</div>
        <h3>W sklepie</h3>
        <ul>
          <li><b>Can I help you?</b> – W czym mogę pomóc?</li>
          <li><b>I'd like</b> an apple, please. – Poproszę jabłko. (dosłownie: chciał(a)bym)</li>
          <li><b>Can I have</b> a sandwich, please? – Czy mogę prosić kanapkę?</li>
          <li><b>How much is it?</b> – Ile to kosztuje? <b>How much are they?</b> – Ile one kosztują?</li>
          <li><b>Here you are.</b> – Proszę. (gdy coś komuś podajesz) → <i>Thank you.</i></li>
        </ul>
        <p>Sklepy: <b>supermarket</b>, <b>baker's</b> (piekarnia), <b>bookshop</b> (księgarnia), <b>toy shop</b> (sklep z zabawkami), <b>clothes shop</b> (sklep z ubraniami).</p>
        <div class="tip">💡 <b>I'd like</b> (= I would like) brzmi grzecznie. „I want” (chcę) w sklepie może zabrzmieć niegrzecznie.</div>
        <h3>„a” czy „an”?</h3>
        <ul>
          <li><b>an</b> – przed wyrazem, który zaczyna się od samogłoski w wymowie: <i>an apple, an egg, an orange</i>.</li>
          <li><b>a</b> – przed pozostałymi: <i>a banana, a T-shirt, a sandwich</i>.</li>
        </ul>
        <h3>Liczba mnoga</h3>
        <ul>
          <li>zwykle <b>+s</b>: apple → apples, sock → socks</li>
          <li><b>+es</b> po -s, -x, -ch, -sh i w niektórych wyrazach na -o: dress → dresses, box → boxes, tomato → tomatoes, potato → potatoes</li>
          <li>spółgłoska + y → <b>-ies</b>: strawberry → strawberries</li>
          <li>wyjątki: child → <b>children</b>, man → <b>men</b>, woman → <b>women</b>, foot → <b>feet</b>, tooth → <b>teeth</b>, mouse → <b>mice</b></li>
        </ul>
        <h3>Lubię – nie lubię</h3>
        <ul>
          <li><i>I <b>like</b> apples.</i> – Lubię jabłka. <i>I <b>don't like</b> fish.</i> – Nie lubię ryb.</li>
          <li><i>She <b>likes</b> pizza.</i> <i>He <b>doesn't like</b> milk.</i></li>
          <li><b>Do you like</b> bananas? – Yes, I do. / No, I don't.</li>
        </ul>
      `,
      infographicNote: 'Czytaj od góry: tak wygląda rozmowa w sklepie. Niebieskie – mówi sprzedawca, zielone – mówisz ty.',
      infographic: {
        type: 'kroki',
        items: [
          { icon: '💁', kolor: 1, title: 'Can I help you?', text: 'W czym mogę pomóc?' },
          { icon: '🙋', kolor: 3, title: "I'd like an apple, please.", text: 'Poproszę jabłko. – grzecznie\n„I want” może brzmieć niegrzecznie' },
          { icon: '🙋', kolor: 3, title: 'How much is it?', text: 'Ile to kosztuje?' },
          { icon: '💁', kolor: 1, title: 'Here you are.', text: 'Proszę. (gdy coś podajesz)' },
          { icon: '🙋', kolor: 3, title: 'Thank you.', text: 'Dziękuję.' },
        ],
        bottom: { kolor: 4, title: '💡 a czy an? Jedna czy wiele?', items: ['an apple, an egg – a banana, a T-shirt', 'apple → apples, tomato → tomatoes', 'child → children, foot → feet'] },
      },
      flashcards: [
        ['bread / butter / cheese', 'chleb / masło / ser'],
        ['juice / milk / water', 'sok / mleko / woda'],
        ['jumper / trousers / skirt', 'sweter / spodnie / spódnica'],
        ['grey / purple / brown', 'szary / fioletowy / brązowy'],
        ['I\'d like…, please.', 'Poproszę… (grzecznie)'],
        ['How much is it?', 'Ile to kosztuje?'],
        ['Here you are.', 'Proszę (gdy coś podajesz).'],
        ['baker\'s', 'piekarnia'],
        ['an apple, an egg', '„an” przed samogłoską w wymowie'],
        ['child / man / woman → l. mn.', 'children / men / women'],
        ['foot / tooth / mouse → l. mn.', 'feet / teeth / mice'],
        ['I like / I don\'t like', 'lubię / nie lubię'],
      ],
      questions: [
        { id: 't5ne1s', q: 'Uzupełnij: „I\'ve got ___ apple and ___ banana.”', options: ['an, a', 'a, an', 'a, a', 'an, an'], answer: 0, explain: '„Apple” zaczyna się od samogłoski – „an apple”. „Banana” od spółgłoski – „a banana”.' },
        { id: 'edpp9u', q: 'Przed którym słowem postawisz „an”?', options: ['egg', 'banana', 'sandwich', 'tomato'], answer: 0, explain: '„Egg” zaczyna się od samogłoski, więc „an egg”. Pozostałe: a banana, a sandwich, a tomato.' },
        { id: 's96xl3', q: 'Jaka jest liczba mnoga słowa „child”?', options: ['children', 'childs', 'childrens', 'childes'], answer: 0, explain: 'To wyjątek: one child – two children.' },
        { id: 'ls7ii2', q: 'Jaka jest liczba mnoga słowa „tooth” (ząb)?', options: ['teeth', 'tooths', 'toothes', 'teeths'], answer: 0, explain: 'To wyjątek: one tooth – two teeth. Podobnie foot – feet.' },
        { id: 'yjpraj', q: 'Jak napiszesz „pomidory”?', options: ['tomatoes', 'tomatos', 'tomatoies', 'tomato'], answer: 0, explain: 'Do „tomato” dodajemy -es: tomatoes. Tak samo potato – potatoes.' },
        { id: '0vk3nb', q: 'W sklepie chcesz zapytać o cenę bluzy. Co powiesz?', options: ['How much is it?', 'How old is it?', 'What time is it?', 'Where is it?'], answer: 0, explain: '„How much is it?” to „Ile to kosztuje?”. „What time is it?” to pytanie o godzinę.' },
        { id: 'p4r4ds', q: 'Jak grzecznie poprosisz w sklepiku o kanapkę?', options: ['I\'d like a sandwich, please.', 'Give me sandwich!', 'I like sandwich.', 'Sandwich now!'], answer: 0, explain: '„I\'d like…, please” to grzeczna prośba: „Poproszę kanapkę”. „I like” znaczy „lubię”.' },
        { id: 'qe8tz5', q: 'Co znaczy „I\'d like”?', options: ['chciał(a)bym', 'lubię', 'mam', 'muszę'], answer: 0, explain: '„I\'d like” to skrót od „I would like” – chciał(a)bym. Lubię to „I like”.' },
        { id: '5s1onv', q: 'Pani w sklepie podaje ci zakupy i mówi: „Here you are.” Co odpowiesz?', options: ['Thank you.', 'You\'re welcome.', 'Sorry.', 'How are you?'], answer: 0, explain: '„Here you are” to „Proszę” przy podawaniu czegoś. Odpowiadasz: „Thank you.”' },
        { id: 'n0ha0o', q: 'Gdzie kupisz chleb i bułki?', options: ['baker\'s', 'bookshop', 'toy shop', 'clothes shop'], answer: 0, explain: '„Baker\'s” to piekarnia. „Bookshop” – księgarnia, „toy shop” – sklep z zabawkami.' },
        { id: 'ng465q', q: 'Co znaczy słowo „jumper”?', options: ['sweter', 'kurtka', 'spódnica', 'koszula'], answer: 0, explain: '„Jumper” to sweter. Kurtka to „jacket”, spódnica – „skirt”.' },
        { id: 'llps5h', q: 'Uzupełnij: „My new jeans ___ blue.”', options: ['are', 'is', 'am'], answer: 0, explain: '„Jeans” po angielsku to zawsze liczba mnoga, więc „are”.' },
        { id: '23h6wr', q: 'Jak powiesz po angielsku „szary”?', options: ['grey', 'green', 'brown', 'purple'], answer: 0, explain: '„Grey” to szary. „Green” – zielony, „brown” – brązowy, „purple” – fioletowy.' },
        { id: 'qrhwex', q: 'Uzupełnij: „My dad ___ bananas.”', options: ['likes', 'like', 'liking', 'is like'], answer: 0, explain: '„My dad” to „he”. W present simple przy „he” dodajemy -s: likes.' },
        { id: '4qgckm', q: '„Do you like milk?” – Nie. Jak brzmi krótka odpowiedź?', options: ['No, I don\'t.', 'No, I doesn\'t.', 'No, I\'m not.', 'No, I haven\'t.'], answer: 0, explain: 'Na pytanie „Do you…?” odpowiadamy: Yes, I do. / No, I don\'t.' },
        { id: 'ktwx5k', q: 'Prawda czy fałsz?\nSłowo „orange” może znaczyć „pomarańcza” albo „pomarańczowy”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Tak: „an orange” to pomarańcza, a „orange” jako kolor to pomarańczowy.' },
      ],
    },
    {
      id: 'czyje-to',
      name: 'Czyje to? „whose”, ’s, „my, your…”, „this, that”',
      chapter: 'Unit 3',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 1 „człowiek” (rzeczy osobiste) i temat 5 „życie prywatne” (przedmioty codziennego użytku); wym. 4.1 i 5.1 (opisuje przedmioty), 6.3 (uzyskuje i przekazuje informacje). „Whose”, dopełniacz ’s, przymiotniki dzierżawcze i „this / that / these / those” – wybór redakcyjny według podręcznika (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Rzeczy osobiste</h3>
        <table>
          <tr><td>phone</td><td>telefon</td><td>watch</td><td>zegarek</td></tr>
          <tr><td>keys</td><td>klucze</td><td>wallet</td><td>portfel</td></tr>
          <tr><td>headphones</td><td>słuchawki</td><td>camera</td><td>aparat fotograficzny</td></tr>
          <tr><td>skateboard</td><td>deskorolka</td><td>kite</td><td>latawiec</td></tr>
          <tr><td>doll</td><td>lalka</td><td>teddy bear</td><td>pluszowy miś</td></tr>
          <tr><td>board game</td><td>gra planszowa</td><td>umbrella</td><td>parasol</td></tr>
        </table>
        <h3>Mój, twój, jego… – przymiotniki dzierżawcze</h3>
        <table>
          <tr><th>Osoba</th><th>Czyje?</th><th>Przykład</th></tr>
          <tr><td>I</td><td><b>my</b> – mój</td><td>my phone</td></tr>
          <tr><td>you</td><td><b>your</b> – twój</td><td>your bag</td></tr>
          <tr><td>he</td><td><b>his</b> – jego</td><td>his bike (rower chłopca)</td></tr>
          <tr><td>she</td><td><b>her</b> – jej</td><td>her doll (lalka dziewczynki)</td></tr>
          <tr><td>it</td><td><b>its</b> – jego, jej (o zwierzęciu, rzeczy)</td><td>its tail (ogon psa)</td></tr>
          <tr><td>we</td><td><b>our</b> – nasz</td><td>our house</td></tr>
          <tr><td>you</td><td><b>your</b> – wasz</td><td>your teacher</td></tr>
          <tr><td>they</td><td><b>their</b> – ich</td><td>their car</td></tr>
        </table>
        <div class="tip">💡 Słowo zależy od <b>właściciela</b>: rzecz chłopca to zawsze <i>his</i>, a dziewczynki – <i>her</i>. Uwaga: <b>its</b> (jego) piszemy bez apostrofu – <b>it's</b> to skrót od „it is”.</div>
        <h3>Czyje to? – „whose” i ’s</h3>
        <ul>
          <li><b>Whose</b> bag is this? – Czyja to torba? → <i>It's <b>Tom's</b> bag.</i> / <i>It's <b>Tom's</b>.</i> – To torba Toma.</li>
          <li>Do imienia albo osoby dodajesz <b>’s</b>: <i>Ola's cat</i> – kot Oli, <i>my sister's room</i> – pokój mojej siostry.</li>
          <li>Gdy właścicieli jest kilku i słowo kończy się na -s, dopisujesz sam apostrof: <i>my parents' car</i> – samochód moich rodziców.</li>
        </ul>
        <div class="tip">💡 Po angielsku właściciel stoi <b>przed</b> rzeczą: po polsku „rower <b>Kuby</b>”, po angielsku „<b>Kuba's</b> bike”.</div>
        <h3>This, that, these, those</h3>
        <table>
          <tr><th></th><th>jedna rzecz</th><th>wiele rzeczy</th></tr>
          <tr><td><b>blisko</b> (tu)</td><td><b>this</b> – ten, ta, to</td><td><b>these</b> – te, ci</td></tr>
          <tr><td><b>daleko</b> (tam)</td><td><b>that</b> – tamten, tamta, tamto</td><td><b>those</b> – tamte, tamci</td></tr>
        </table>
        <ul>
          <li><i>This is my phone.</i> – To jest mój telefon (trzymam go w ręce).</li>
          <li><i>These are my keys.</i> – To są moje klucze.</li>
          <li><i>That is a bird.</i> – Tamto to ptak (na drzewie, daleko).</li>
          <li><i>Those are my friends.</i> – Tamci to moi koledzy.</li>
        </ul>
        <p>Pytania: <b>What's this?</b> – <i>It's a kite.</i> · <b>What are these?</b> – <i>They're headphones.</i></p>
        <div class="tip">💡 Z <b>this</b> i <b>that</b> łączymy <b>is</b>, z <b>these</b> i <b>those</b> – <b>are</b>.</div>
      `,
      infographicNote: 'U góry – czyje coś jest; w tabelce porównuj: blisko czy daleko, jedna rzecz czy wiele.',
      infographic: {
        type: 'porownanie',
        top: { kolor: 5, title: '👤 Czyje? Zależy od właściciela', text: 'I → my · you → your · he → his\nshe → her · it → its · we → our\nthey → their' },
        kolumny: [{ title: 'jedna rzecz', kolor: 1 }, { title: 'wiele rzeczy', kolor: 3 }],
        wiersze: [
          { label: 'blisko (tu)', cells: ['this', 'these'], bold: true },
          { label: 'daleko (tam)', cells: ['that', 'those'], bold: true },
          { label: 'this, that + is · these, those + are', cells: ['This is my phone.', 'These are my keys.'] },
        ],
        bottom: { kolor: 4, title: '❓ Whose bag is this?', text: "→ It's Tom's.\nWłaściciel + 's stoi przed rzeczą:\nOla's cat – kot Oli" },
      },
      flashcards: [
        ['keys / wallet / watch', 'klucze / portfel / zegarek'],
        ['headphones / camera / umbrella', 'słuchawki / aparat / parasol'],
        ['my / your', 'mój / twój (też: wasz)'],
        ['his / her', 'jego (chłopca) / jej (dziewczynki)'],
        ['its', 'jego, jej – o zwierzęciu albo rzeczy (bez apostrofu)'],
        ['our / their', 'nasz / ich'],
        ['Whose bag is this?', 'Czyja to torba? → It\'s Tom\'s.'],
        ['Ola\'s cat', 'kot Oli (właściciel + ’s, przed rzeczą)'],
        ['this / these', 'ten, ta, to / te – blisko'],
        ['that / those', 'tamten, tamta / tamte – daleko'],
        ['What are these?', 'Co to jest? (wiele rzeczy) → They\'re…'],
      ],
      questions: [
        { id: 'oq2c37', q: 'Uzupełnij: „This is Kuba. ___ bike is blue.”', options: ['His', 'Her', 'Its', 'My'], answer: 0, explain: 'Rower należy do Kuby (chłopca), więc „his” – jego.' },
        { id: 'h05ix7', q: 'Uzupełnij: „Look at Zosia! ___ dress is beautiful.”', options: ['Her', 'His', 'Their', 'Its'], answer: 0, explain: 'Sukienka należy do Zosi (dziewczynki), więc „her” – jej.' },
        { id: '7ft22s', q: 'Uzupełnij: „We\'ve got a dog. ___ dog is very funny.”', options: ['Our', 'Their', 'Your', 'My'], answer: 0, explain: '„We” – my, więc nasz pies to „our dog”.' },
        { id: 'iwwwpa', q: 'Uzupełnij: „Tom and Ann are in the garden. ___ house is big.”', options: ['Their', 'Our', 'His', 'Her'], answer: 0, explain: 'Tom i Ann to „they”, więc ich dom – „their house”.' },
        { id: 'w8jjnp', q: 'Uzupełnij: „The cat is playing with ___ tail.”', options: ['its', 'it\'s', 'his', 'their'], answer: 0, explain: 'O zwierzęciu mówimy „its” (jego). „It\'s” z apostrofem to skrót od „it is”.' },
        { id: '5ba1w3', q: 'Jak powiesz po angielsku: „rower Kuby”?', options: ['Kuba\'s bike', 'bike Kuba\'s', 'Kuba bike\'s', 'the bike of Kuba\'s'], answer: 0, explain: 'Właściciel z ’s stoi przed rzeczą: Kuba\'s bike.' },
        { id: 'b22ow9', q: 'Ktoś pyta: „Whose phone is this?”. Która odpowiedź pasuje?', options: ['It\'s Ola\'s.', 'It\'s black.', 'It\'s on the desk.', 'It\'s a phone.'], answer: 0, explain: '„Whose?” to „czyj?”. Odpowiadamy, do kogo należy: It\'s Ola\'s (to telefon Oli).' },
        { id: 'hidyh3', q: 'Uzupełnij: „___ umbrella is this?” – „It\'s my mum\'s.”', options: ['Whose', 'Who', 'What', 'Where'], answer: 0, explain: 'Pytamy o właściciela – „Whose?” (czyj?). „Who?” to „kto?”.' },
        { id: 'v3spig', q: 'Trzymasz w ręce klucze. Co powiesz?', options: ['These are my keys.', 'This are my keys.', 'Those is my keys.', 'That are my keys.'], answer: 0, explain: 'Klucze są blisko i jest ich wiele – „these”, a z „these” łączymy „are”.' },
        { id: 'cdfg2g', q: 'Pokazujesz ptaka daleko na drzewie. Co powiesz?', options: ['That is a bird.', 'This is a bird.', 'These is a bird.', 'Those are a bird.'], answer: 0, explain: 'Jedna rzecz daleko – „that”. „This” mówimy o rzeczy blisko nas.' },
        { id: 't5m8xe', q: 'Uzupełnij: „Look at ___ kites in the sky!”', options: ['those', 'that', 'this', 'it'], answer: 0, explain: 'Latawce są daleko (na niebie) i jest ich kilka – „those”.' },
        { id: 'r9rs59', q: 'Ktoś pyta: „What are these?”. Która odpowiedź pasuje?', options: ['They\'re headphones.', 'It\'s headphones.', 'This is headphones.', 'They\'re Tom\'s.'], answer: 0, explain: '„What are these?” – „Co to jest?” o kilku rzeczach. Odpowiadamy „They\'re…”. „They\'re Tom\'s” odpowiada na pytanie „Whose…?”.' },
        { id: 'nf6ctu', q: 'Co znaczy „my parents\' car”?', options: ['samochód moich rodziców', 'samochody mojego rodzica', 'mój samochód i rodzice', 'rodzice w samochodzie'], answer: 0, explain: 'Parents (rodzice) kończy się na -s, więc dopisujemy sam apostrof: parents\' car – samochód rodziców.' },
        { id: 'va5aqa', q: 'Co znaczy „wallet”?', options: ['portfel', 'zegarek', 'parasol', 'latawiec'], answer: 0, explain: 'Wallet to portfel. Zegarek – watch, parasol – umbrella, latawiec – kite.' },
        { id: 'oufrus', q: 'Które zdanie jest poprawne?', options: ['This is my sister\'s doll.', 'This is my sister doll\'s.', 'This is doll my sister\'s.', 'This is my\'s sister doll.'], answer: 0, explain: 'Właściciel (my sister) dostaje ’s i stoi przed rzeczą: my sister\'s doll – lalka mojej siostry.' },
        { id: 'izkz5l', q: 'Prawda czy fałsz?\nO rzeczy, która należy do dziewczynki, mówimy „his”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Rzecz dziewczynki to „her” (jej). „His” (jego) mówimy o rzeczy chłopca lub mężczyzny.' },
      ],
    },
    {
      id: 'rodzina-i-dzien',
      name: 'Rodzina, mój dzień i godziny',
      chapter: 'Unit 4, Unit 7',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 5 „życie prywatne” (rodzina, czynności życia codziennego, określanie czasu); wym. 4.2 i 5.2 (opowiada o czynnościach z teraźniejszości), 6.3 (uzyskuje i przekazuje informacje). Czas present simple i przysłówki częstotliwości – wybór redakcyjny (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Rodzina</h3>
        <table>
          <tr><th>Po angielsku</th><th>Po polsku</th></tr>
          <tr><td>mum / dad</td><td>mama / tata</td></tr>
          <tr><td>parents</td><td>rodzice</td></tr>
          <tr><td>brother / sister</td><td>brat / siostra</td></tr>
          <tr><td>grandma / grandpa</td><td>babcia / dziadek</td></tr>
          <tr><td>grandparents</td><td>dziadkowie</td></tr>
          <tr><td>aunt / uncle</td><td>ciocia / wujek</td></tr>
          <tr><td>cousin</td><td>kuzyn, kuzynka</td></tr>
        </table>
        <h3>Mój dzień</h3>
        <table>
          <tr><td>get up</td><td>wstawać</td><td>have breakfast</td><td>jeść śniadanie</td></tr>
          <tr><td>brush my teeth</td><td>myć zęby</td><td>go to school</td><td>iść do szkoły</td></tr>
          <tr><td>get dressed</td><td>ubierać się</td><td>do my homework</td><td>odrabiać lekcje</td></tr>
          <tr><td>have lunch</td><td>jeść obiad (w środku dnia)</td><td>watch TV</td><td>oglądać telewizję</td></tr>
          <tr><td>play with friends</td><td>bawić się z kolegami</td><td>go to bed</td><td>iść spać</td></tr>
        </table>
        <h3>Która godzina? – What time is it?</h3>
        <table>
          <tr><th>Zegar</th><th>Po angielsku</th></tr>
          <tr><td>7:00</td><td>It's seven <b>o'clock</b>.</td></tr>
          <tr><td>7:15</td><td>It's <b>quarter past</b> seven. (kwadrans <b>po</b> siódmej)</td></tr>
          <tr><td>7:30</td><td>It's <b>half past</b> seven. (pół godziny <b>po</b> siódmej)</td></tr>
          <tr><td>7:45</td><td>It's <b>quarter to</b> eight. (kwadrans <b>do</b> ósmej)</td></tr>
        </table>
        <div class="tip">💡 Pułapka! Po polsku 7:30 to „wpół <b>do ósmej</b>”, a po angielsku – <b>half past seven</b> („pół po siódmej”). Patrz na godzinę, która <b>już minęła</b>.</div>
        <p>Możesz też po prostu przeczytać cyfry: 7:15 – <i>seven fifteen</i>, 7:45 – <i>seven forty-five</i>.</p>
        <h3>Dni tygodnia i miesiące</h3>
        <p><b>Monday</b> (poniedziałek), <b>Tuesday</b>, <b>Wednesday</b>, <b>Thursday</b>, <b>Friday</b>, <b>Saturday</b>, <b>Sunday</b> (niedziela).</p>
        <p><b>January, February, March, April, May, June, July, August, September, October, November, December.</b></p>
        <div class="tip">💡 Dni tygodnia i miesiące po angielsku piszemy zawsze <b>wielką literą</b>: <i>Monday</i>, <i>May</i>.</div>
        <p>Małe słówka: <b>at</b> + godzina (at seven o'clock), <b>on</b> + dzień (on Monday), <b>in</b> + miesiąc (in May).</p>
        <h3>Czas present simple – co robię zwykle</h3>
        <p>Tego czasu używasz, gdy mówisz o tym, co robisz <b>regularnie</b>: codziennie, co tydzień, zawsze.</p>
        <table>
          <tr><th></th><th>I, you, we, they</th><th>he, she, it</th></tr>
          <tr><td>twierdzenie</td><td>I play</td><td>she play<b>s</b>, he watch<b>es</b>, he go<b>es</b>, she <b>has</b></td></tr>
          <tr><td>przeczenie</td><td>I <b>don't</b> play</td><td>she <b>doesn't</b> play</td></tr>
          <tr><td>pytanie</td><td><b>Do</b> you play?</td><td><b>Does</b> she play?</td></tr>
          <tr><td>krótka odpowiedź</td><td>Yes, I do. / No, I don't.</td><td>Yes, she does. / No, she doesn't.</td></tr>
        </table>
        <div class="tip">💡 Końcówka <b>-s</b> pojawia się tylko przy <b>he, she, it</b>. Ale po <i>doesn't</i> i <i>does</i> znika: <i>She doesn't play</i>, <i>Does she play?</i></div>
        <h3>Jak często?</h3>
        <p><b>always</b> (zawsze) → <b>usually</b> (zwykle) → <b>sometimes</b> (czasami) → <b>never</b> (nigdy). Te słowa stawiamy <b>przed czasownikiem</b>: <i>I always get up at seven.</i> Po „am / is / are” stawiamy je za nim: <i>I'm never late.</i></p>
      `,
      infographicNote: 'U góry – godziny; w tabelce porównuj w poziomie: I, you, we, they i he, she, it.',
      infographic: {
        type: 'porownanie',
        top: { kolor: 5, title: '🕖 What time is it?', items: ["7:00 – seven o'clock", '7:15 – quarter past seven', '7:30 – half past seven (wpół do ósmej!)', '7:45 – quarter to eight'] },
        kolumny: [{ title: 'I, you, we, they', kolor: 1 }, { title: 'he, she, it', kolor: 2 }],
        wiersze: [
          { label: 'present simple – co robię zwykle', cells: ['I play', 'she plays, he watches'] },
          { label: 'przeczenie', cells: ["I don't play", "she doesn't play"] },
          { label: 'pytanie', cells: ['Do you play?', 'Does she play?'] },
        ],
        bottom: { kolor: 4, title: '📅 Kiedy i jak często?', items: ["at seven o'clock · on Monday · in May", 'always → usually → sometimes → never'] },
      },
      flashcards: [
        ['grandma / grandpa', 'babcia / dziadek'],
        ['aunt / uncle', 'ciocia / wujek'],
        ['cousin', 'kuzyn, kuzynka'],
        ['get up / go to bed', 'wstawać / iść spać'],
        ['brush my teeth', 'myć zęby'],
        ['7:15', 'quarter past seven'],
        ['7:30', 'half past seven (po polsku: wpół do ósmej!)'],
        ['7:45', 'quarter to eight'],
        ['at / on / in', 'at seven o\'clock, on Monday, in May'],
        ['he / she / it w present simple', 'końcówka -s: she plays, he watches, he goes'],
        ['don\'t / doesn\'t', 'przeczenie: I don\'t play / she doesn\'t play'],
        ['always – usually – sometimes – never', 'zawsze – zwykle – czasami – nigdy'],
      ],
      questions: [
        { id: 'boh99t', q: 'Mama twojej mamy to po angielsku…', options: ['grandma', 'aunt', 'sister', 'cousin'], answer: 0, explain: 'Mama mamy to babcia – „grandma”. „Aunt” to ciocia.' },
        { id: 'qbdfvu', q: 'Co znaczy słowo „uncle”?', options: ['wujek', 'ciocia', 'kuzyn', 'dziadek'], answer: 0, explain: '„Uncle” to wujek, „aunt” – ciocia, „cousin” – kuzyn, „grandpa” – dziadek.' },
        { id: 'g47swp', q: 'Zegar pokazuje 7:30. Jak to powiesz po angielsku?', options: ['half past seven', 'half past six', 'quarter past seven', 'seven o\'clock'], answer: 0, explain: 'Pół godziny po siódmej to „half past seven”. Po polsku mówimy „wpół do ósmej” – nie daj się złapać!' },
        { id: 't0pta6', q: 'Która to godzina: „quarter to nine”?', options: ['8:45', '9:15', '9:45', '8:15'], answer: 0, explain: '„Quarter to nine” to kwadrans (15 minut) do dziewiątej, czyli 8:45.' },
        { id: '8xbnra', q: 'Która to godzina: „quarter past three”?', options: ['3:15', '2:45', '3:45', '3:30'], answer: 0, explain: '„Past” znaczy „po”. Kwadrans po trzeciej to 3:15.' },
        { id: '4nhnl3', q: 'Uzupełnij: „My sister ___ TV every evening.”', options: ['watches', 'watch', 'watching', 'is watch'], answer: 0, explain: '„My sister” to „she”. W present simple przy „she” dodajemy końcówkę: watch → watches.' },
        { id: 'bhczp1', q: 'Uzupełnij: „I ___ to school by bus every day.”', options: ['go', 'goes', 'going', 'to go'], answer: 0, explain: 'Przy „I” czasownik nie ma końcówki: I go.' },
        { id: 'y39v9s', q: 'Uzupełnij: „Tom ___ like fish.”', options: ['doesn\'t', 'don\'t', 'isn\'t', 'not'], answer: 0, explain: 'Tom to „he”. Przeczenie w present simple przy „he” to „doesn\'t”: Tom doesn\'t like fish.' },
        { id: 'd9rg1y', q: 'Uzupełnij pytanie: „___ you play football?”', options: ['Do', 'Does', 'Are', 'Is'], answer: 0, explain: 'Pytanie w present simple z „you” zaczynamy od „Do”: Do you play football?' },
        { id: 'xnkklv', q: '„Does Ania have breakfast at home?” – Tak. Jak brzmi krótka odpowiedź?', options: ['Yes, she does.', 'Yes, she do.', 'Yes, she is.', 'Yes, she has.'], answer: 0, explain: 'Na pytanie z „Does…?” odpowiadamy z „does”: Yes, she does. / No, she doesn\'t.' },
        { id: '7r3x0u', q: 'Jaki dzień jest po wtorku (Tuesday)?', options: ['Wednesday', 'Thursday', 'Monday', 'Friday'], answer: 0, explain: 'Monday, Tuesday, Wednesday… Po wtorku jest środa – Wednesday.' },
        { id: '59to7e', q: 'Jak poprawnie zapisać „poniedziałek” po angielsku?', options: ['Monday', 'monday', 'Munday', 'Mondey'], answer: 0, explain: 'Dni tygodnia piszemy wielką literą: Monday.' },
        { id: '0i6946', q: 'Tom je rybę tylko w piątki. Uzupełnij: „Tom ___ eats fish on Mondays.”', options: ['never', 'always', 'usually'], answer: 0, explain: 'Skoro je rybę tylko w piątki, to w poniedziałki nigdy – „never”.' },
        { id: '2b89bs', q: 'Które zdanie jest poprawne?', options: ['I always brush my teeth in the evening.', 'I brush always my teeth in the evening.', 'I brush my always teeth in the evening.'], answer: 0, explain: '„Always” stawiamy przed czasownikiem: I always brush…' },
        { id: 'syvrym', q: 'Uzupełnij: „My birthday is ___ May.”', options: ['in', 'on', 'at'], answer: 0, explain: 'Przed nazwą miesiąca stawiamy „in”: in May.' },
        { id: 'ex2tge', q: 'Uzupełnij: „School starts ___ eight o\'clock.”', options: ['at', 'in', 'on'], answer: 0, explain: 'Przed godziną stawiamy „at”: at eight o\'clock.' },
      ],
    },
    {
      id: 'dom-i-szkola',
      name: 'Dom i szkoła, „there is / there are”',
      chapter: 'Unit 1, Unit 6',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 2 „miejsce zamieszkania” (dom, pomieszczenia i wyposażenie, obowiązki domowe) i temat 3 „edukacja” (szkoła i jej pomieszczenia, przedmioty nauczania, przybory szkolne); wym. 4.1 i 5.1 (opisuje przedmioty i miejsca). Konstrukcja „there is / there are” i przyimki miejsca – wybór redakcyjny (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Dom</h3>
        <table>
          <tr><th>Pomieszczenia</th><th></th><th>Meble i rzeczy</th><th></th></tr>
          <tr><td>house</td><td>dom</td><td>bed</td><td>łóżko</td></tr>
          <tr><td>flat</td><td>mieszkanie</td><td>table / chair</td><td>stół / krzesło</td></tr>
          <tr><td>living room</td><td>salon, pokój dzienny</td><td>sofa</td><td>kanapa</td></tr>
          <tr><td>bedroom</td><td>sypialnia</td><td>wardrobe</td><td>szafa (na ubrania)</td></tr>
          <tr><td>kitchen</td><td>kuchnia</td><td>desk</td><td>biurko</td></tr>
          <tr><td>bathroom</td><td>łazienka</td><td>shelf</td><td>półka</td></tr>
          <tr><td>garden</td><td>ogród</td><td>fridge</td><td>lodówka</td></tr>
        </table>
        <h3>Obowiązki domowe</h3>
        <ul>
          <li><b>make my bed</b> – ścielić łóżko</li>
          <li><b>tidy my room</b> – sprzątać pokój</li>
          <li><b>wash the dishes</b> – zmywać naczynia</li>
          <li><b>take out the rubbish</b> – wynosić śmieci</li>
          <li><b>feed the cat</b> – karmić kota</li>
        </ul>
        <h3>Szkoła</h3>
        <table>
          <tr><th>Przedmioty</th><th></th><th>Przybory</th><th></th></tr>
          <tr><td>Polish</td><td>język polski</td><td>pen / pencil</td><td>długopis / ołówek</td></tr>
          <tr><td>English</td><td>język angielski</td><td>rubber</td><td>gumka do mazania</td></tr>
          <tr><td>maths</td><td>matematyka</td><td>ruler</td><td>linijka</td></tr>
          <tr><td>science</td><td>przyroda</td><td>pencil case</td><td>piórnik</td></tr>
          <tr><td>history</td><td>historia</td><td>schoolbag</td><td>tornister, plecak szkolny</td></tr>
          <tr><td>art</td><td>plastyka</td><td>notebook</td><td>zeszyt</td></tr>
          <tr><td>music</td><td>muzyka</td><td>scissors</td><td>nożyczki</td></tr>
          <tr><td>PE</td><td>wychowanie fizyczne</td><td>glue</td><td>klej</td></tr>
        </table>
        <p>W szkole są też: <b>classroom</b> (klasa, sala lekcyjna), <b>library</b> (biblioteka), <b>gym</b> (sala gimnastyczna).</p>
        <div class="tip">💡 Nazwy języków piszemy <b>wielką literą</b>: <i>English</i>, <i>Polish</i>. A <b>library</b> to biblioteka, nie księgarnia (księgarnia to <i>bookshop</i>).</div>
        <h3>„There is” i „there are” – jest, są</h3>
        <table>
          <tr><th></th><th>jedna rzecz</th><th>wiele rzeczy</th></tr>
          <tr><td>twierdzenie</td><td><b>There is</b> (There's) a bed.</td><td><b>There are</b> two chairs.</td></tr>
          <tr><td>przeczenie</td><td>There <b>isn't</b> a sofa.</td><td>There <b>aren't</b> any books.</td></tr>
          <tr><td>pytanie</td><td><b>Is there</b> a lamp?</td><td><b>Are there</b> any pens?</td></tr>
          <tr><td>krótka odpowiedź</td><td>Yes, there is. / No, there isn't.</td><td>Yes, there are. / No, there aren't.</td></tr>
        </table>
        <h3>Gdzie to jest? Przyimki miejsca</h3>
        <table>
          <tr><td><b>in</b></td><td>w (w środku)</td><td><b>on</b></td><td>na</td></tr>
          <tr><td><b>under</b></td><td>pod</td><td><b>next to</b></td><td>obok</td></tr>
          <tr><td><b>behind</b></td><td>za</td><td><b>in front of</b></td><td>przed</td></tr>
        </table>
        <p><i>The cat is <b>under</b> the table.</i> – Kot jest pod stołem. <i>My bag is <b>next to</b> the desk.</i> – Mój plecak jest obok biurka.</p>
      `,
      infographicNote: 'Porównuj w poziomie: jedna rzecz – there is, wiele rzeczy – there are.',
      infographic: {
        type: 'porownanie',
        top: { kolor: 5, title: '🏠 W domu i 🏫 w szkole', text: 'Mówisz, co gdzie jest: jedna rzecz („jest”) czy wiele („są”)?' },
        kolumny: [{ title: 'jedna rzecz', kolor: 1 }, { title: 'wiele rzeczy', kolor: 3 }],
        wiersze: [
          { label: 'twierdzenie', cells: ['There is a bed.', 'There are two chairs.'] },
          { label: 'przeczenie', cells: ["There isn't a sofa.", "There aren't any books."] },
          { label: 'pytanie', cells: ['Is there a lamp?', 'Are there any pens?'] },
        ],
        bottom: { kolor: 4, title: '📍 Gdzie to jest?', text: 'in – w · on – na · under – pod\nnext to – obok · behind – za\nin front of – przed', items: ['The cat is under the table.'] },
      },
      flashcards: [
        ['kitchen / bathroom', 'kuchnia / łazienka'],
        ['bedroom / living room', 'sypialnia / salon'],
        ['wardrobe / shelf', 'szafa / półka'],
        ['tidy my room', 'sprzątać pokój'],
        ['take out the rubbish', 'wynosić śmieci'],
        ['science / PE / art', 'przyroda / WF / plastyka'],
        ['rubber / ruler', 'gumka / linijka'],
        ['pencil case', 'piórnik'],
        ['There is… / There are…', 'Jest… (jedna rzecz) / Są… (wiele rzeczy)'],
        ['in / on / under', 'w / na / pod'],
        ['next to / behind / in front of', 'obok / za / przed'],
        ['library', 'biblioteka (nie księgarnia!)'],
      ],
      questions: [
        { id: 'kviu3y', q: 'Uzupełnij: „There ___ a cat on the sofa.”', options: ['is', 'are', 'am', 'be'], answer: 0, explain: 'Jeden kot – „There is”.' },
        { id: 'd87d6q', q: 'Uzupełnij: „There ___ three books on the desk.”', options: ['are', 'is', 'am', 'be'], answer: 0, explain: 'Trzy książki to wiele rzeczy – „There are”.' },
        { id: 'vfsdeq', q: '„Is there a computer in your room?” – Tak. Jak brzmi krótka odpowiedź?', options: ['Yes, there is.', 'Yes, there are.', 'Yes, it has.', 'Yes, I do.'], answer: 0, explain: 'Na pytanie „Is there…?” odpowiadamy: Yes, there is. / No, there isn\'t.' },
        {
          id: 'hg8omf', q: 'Gdzie jest kot? „The cat is ___ the table.”',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Stół, a pod nim, między nogami stołu, siedzi kot">
            <rect x="60" y="30" width="180" height="12" rx="3" class="f2 s2"/>
            <rect x="72" y="42" width="10" height="70" class="f2 s2"/>
            <rect x="218" y="42" width="10" height="70" class="f2 s2"/>
            <line x1="30" y1="112" x2="270" y2="112" class="ln"/>
            <text x="150" y="104" class="tx-b" text-anchor="middle">🐈</text>
          </svg>`,
          options: ['under', 'on', 'in', 'behind'], answer: 0, explain: 'Kot siedzi pod stołem – „under the table”.',
        },
        {
          id: 'ftgjkl', q: 'Gdzie jest piłka? „The ball is ___ the box.”',
          svg: `<svg viewBox="0 0 300 130" role="img" aria-label="Otwarte pudełko, a w jego środku piłka">
            <rect x="100" y="50" width="100" height="62" class="f4 s4"/>
            <line x1="30" y1="112" x2="270" y2="112" class="ln"/>
            <text x="150" y="98" class="tx-b" text-anchor="middle">⚽</text>
            <path d="M100,50 L80,30 M200,50 L220,30" class="ln"/>
          </svg>`,
          options: ['in', 'on', 'under', 'next to'], answer: 0, explain: 'Piłka jest w środku pudełka – „in the box”.',
        },
        { id: '6oss2g', q: 'Co znaczy słowo „kitchen”?', options: ['kuchnia', 'łazienka', 'sypialnia', 'ogród'], answer: 0, explain: '„Kitchen” to kuchnia. Łazienka to „bathroom”, sypialnia – „bedroom”, ogród – „garden”.' },
        { id: 'ywokyv', q: 'W którym pomieszczeniu zwykle śpisz?', options: ['bedroom', 'bathroom', 'kitchen', 'garden'], answer: 0, explain: '„Bedroom” to sypialnia – „bed” to łóżko, „room” to pokój.' },
        { id: '1yhhxe', q: 'Co znaczy słowo „rubber”?', options: ['gumka do mazania', 'linijka', 'ołówek', 'piórnik'], answer: 0, explain: '„Rubber” to gumka. Linijka to „ruler”, ołówek – „pencil”, piórnik – „pencil case”.' },
        { id: 'mhvif0', q: 'Na którym przedmiocie rysujesz i malujesz?', options: ['art', 'maths', 'music', 'PE'], answer: 0, explain: '„Art” to plastyka. „Maths” – matematyka, „music” – muzyka, „PE” – wychowanie fizyczne.' },
        { id: 'skaxay', q: 'Co oznacza skrót „PE”?', options: ['wychowanie fizyczne', 'plastykę', 'przyrodę', 'język polski'], answer: 0, explain: '„PE” to wychowanie fizyczne – lekcja ruchu i sportu.' },
        { id: 'i4ygxm', q: 'Jak poprawnie napisać „Lubię angielski”?', options: ['I like English.', 'I like english.', 'I like Inglish.'], answer: 0, explain: 'Nazwy języków piszemy wielką literą: English.' },
        { id: '91c6fc', q: 'Mama prosi: „Take out the rubbish, please.” Co masz zrobić?', options: ['wynieść śmieci', 'pościelić łóżko', 'pozmywać naczynia', 'nakarmić kota'], answer: 0, explain: '„Take out the rubbish” to wynieść śmieci.' },
        { id: 'cntsv7', q: 'Co znaczy „next to”?', options: ['obok', 'za', 'przed', 'pod'], answer: 0, explain: '„Next to” to obok. Za – „behind”, przed – „in front of”, pod – „under”.' },
        { id: 'qyfu5i', q: 'Co znaczy „behind”?', options: ['za', 'przed', 'obok', 'na'], answer: 0, explain: '„Behind” to za (z tyłu). „The tree is behind the house.” – Drzewo jest za domem.' },
        { id: 'jxiief', q: 'Prawda czy fałsz?\nZdanie „There are a chair in the kitchen.” jest poprawne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Jedno krzesło – „There is a chair in the kitchen.” „There are” mówimy o wielu rzeczach.' },
        { id: '4k2jof', q: 'Co znaczy słowo „library”?', options: ['biblioteka', 'księgarnia', 'laboratorium', 'sala gimnastyczna'], answer: 0, explain: '„Library” to biblioteka. Księgarnia to „bookshop”, sala gimnastyczna – „gym”.' },
      ],
    },
    {
      id: 'policzalne',
      name: 'Policzalne i niepoliczalne: „some”, „any”, „a lot of”',
      chapter: 'Unit 6',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 6 „żywienie” (artykuły spożywcze, posiłki i ich przygotowywanie) i temat 7 „zakupy i usługi” (towary, kupowanie); wym. 4.1 (opisuje przedmioty), 6.3 (uzyskuje i przekazuje informacje), 6.12 (wyraża prośbę). Rzeczowniki policzalne i niepoliczalne, „some / any / a lot of”, „How many / How much” – wybór redakcyjny według podręcznika (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Policzalne czy niepoliczalne?</h3>
        <ul>
          <li><b>Policzalne</b> (countable) – rzeczy, które da się policzyć na sztuki. Mają liczbę pojedynczą i mnogą: <i>an apple – two apples, an egg – six eggs, a carrot – three carrots</i>.</li>
          <li><b>Niepoliczalne</b> (uncountable) – rzeczy, których nie liczymy na sztuki, np. płyny, sypkie produkty: <i>milk, water, juice, bread, butter, cheese, rice, pasta, sugar, flour</i> (mąka), <i>honey</i> (miód). Nie mają liczby mnogiej i nie stawiamy przed nimi <b>a / an</b>.</li>
        </ul>
        <div class="tip">💡 Po polsku powiesz „dwa chleby”, ale po angielsku <b>bread</b> jest niepoliczalny – nie mówimy „a bread” ani „breads”.</div>
        <h3>Jak policzyć niepoliczalne? Opakowania i porcje</h3>
        <table>
          <tr><td>a bottle of water</td><td>butelka wody</td></tr>
          <tr><td>a glass of milk</td><td>szklanka mleka</td></tr>
          <tr><td>a cup of tea</td><td>filiżanka herbaty</td></tr>
          <tr><td>a carton of juice</td><td>karton soku</td></tr>
          <tr><td>a slice of bread</td><td>kromka chleba</td></tr>
          <tr><td>a piece of cheese</td><td>kawałek sera</td></tr>
          <tr><td>a jar of honey</td><td>słoik miodu</td></tr>
          <tr><td>a bag of sugar</td><td>torebka cukru</td></tr>
        </table>
        <p>Liczymy opakowania: <i>two bottles of water</i> – dwie butelki wody.</p>
        <h3>„some” i „any”</h3>
        <table>
          <tr><th></th><th>policzalne (l. mnoga)</th><th>niepoliczalne</th></tr>
          <tr><td>twierdzenie – <b>some</b> (trochę, kilka)</td><td>There are <b>some</b> eggs.</td><td>There is <b>some</b> milk.</td></tr>
          <tr><td>przeczenie – <b>any</b> (żadnego, wcale)</td><td>There aren't <b>any</b> eggs.</td><td>There isn't <b>any</b> milk.</td></tr>
          <tr><td>pytanie – <b>any</b> (jakieś, trochę)</td><td>Are there <b>any</b> eggs?</td><td>Is there <b>any</b> milk?</td></tr>
        </table>
        <div class="tip">💡 Gdy <b>prosisz</b> o coś albo coś <b>proponujesz</b>, używasz <b>some</b>, choć to pytanie: <i>Can I have <b>some</b> water, please? Would you like <b>some</b> juice?</i></div>
        <h3>„a lot of” – dużo</h3>
        <p><b>A lot of</b> pasuje do policzalnych i niepoliczalnych: <i>a lot of apples</i> (dużo jabłek), <i>a lot of milk</i> (dużo mleka). <i>I eat a lot of fruit.</i> – Jem dużo owoców.</p>
        <h3>Ile? – „How many” i „How much”</h3>
        <ul>
          <li><b>How many</b> + policzalne: <i>How many eggs are there?</i> – Ile jest jajek? → <i>There are six.</i></li>
          <li><b>How much</b> + niepoliczalne: <i>How much milk is there?</i> – Ile jest mleka? → <i>There's a lot.</i> / <i>There's a little.</i></li>
          <li>„How much is it?” znaczy też: ile to kosztuje?</li>
        </ul>
      `,
      infographicNote: 'Porównuj w poziomie: po lewej rzeczy, które liczysz na sztuki, po prawej – te, których nie liczysz.',
      infographic: {
        type: 'porownanie',
        kolumny: [{ title: '🍎 Policzalne', kolor: 1 }, { title: '🥛 Niepoliczalne', kolor: 3 }],
        wiersze: [
          { label: 'przykłady (niepoliczalne – bez a / an)', cells: ['an apple – two apples', 'milk, water, bread'] },
          { label: 'twierdzenie – some', cells: ['There are some eggs.', 'There is some milk.'] },
          { label: 'przeczenie – any', cells: ["There aren't any eggs.", "There isn't any milk."] },
          { label: 'pytanie – any', cells: ['Are there any eggs?', 'Is there any milk?'] },
          { label: 'dużo – a lot of', cells: ['a lot of apples', 'a lot of milk'] },
          { label: 'Ile?', cells: ['How many eggs?', 'How much milk?'], bold: true },
        ],
        bottom: { kolor: 4, title: '🥤 Jak policzyć niepoliczalne?', text: 'a bottle of water · a glass of milk\na slice of bread · a piece of cheese' },
      },
      flashcards: [
        ['Policzalne (countable)', 'da się policzyć na sztuki: an apple – two apples'],
        ['Niepoliczalne (uncountable)', 'bez a/an i bez liczby mnogiej: milk, water, bread, cheese, rice'],
        ['a bottle of water / a glass of milk', 'butelka wody / szklanka mleka'],
        ['a slice of bread / a piece of cheese', 'kromka chleba / kawałek sera'],
        ['a jar of honey / a carton of juice', 'słoik miodu / karton soku'],
        ['some', 'trochę, kilka – w twierdzeniach (i w prośbach)'],
        ['any', 'w przeczeniach i pytaniach: There isn\'t any milk. Are there any eggs?'],
        ['a lot of', 'dużo – z policzalnymi i niepoliczalnymi'],
        ['How many…?', 'Ile? – z policzalnymi: How many eggs?'],
        ['How much…?', 'Ile? – z niepoliczalnymi: How much milk?'],
      ],
      questions: [
        { id: 'l8ay08', q: 'Który rzeczownik jest niepoliczalny?', options: ['milk', 'apple', 'egg', 'carrot'], answer: 0, explain: 'Mleka nie liczymy na sztuki – milk jest niepoliczalne. Jabłka, jajka i marchewki możemy policzyć.' },
        { id: 'm5axth', q: 'Który rzeczownik jest policzalny?', options: ['banana', 'rice', 'water', 'sugar'], answer: 0, explain: 'Banany policzysz: a banana, two bananas. Rice, water i sugar są niepoliczalne.' },
        { id: 'q3ntcv', q: 'Które wyrażenie jest poprawne?', options: ['some bread', 'a bread', 'two breads', 'an bread'], answer: 0, explain: 'Bread jest niepoliczalny – bez a/an i bez liczby mnogiej. Mówimy „some bread” albo „a slice of bread”.' },
        { id: 'bkh9a4', q: 'Uzupełnij: „There are ___ apples in the bowl.”', options: ['some', 'any', 'a', 'an'], answer: 0, explain: 'To twierdzenie i liczba mnoga, więc „some” – kilka jabłek.' },
        { id: 'nlycul', q: 'Uzupełnij: „There isn\'t ___ milk in the fridge.”', options: ['any', 'some', 'a', 'many'], answer: 0, explain: 'W przeczeniu (isn\'t) używamy „any”: nie ma (wcale) mleka.' },
        { id: 'oe6xmt', q: 'Uzupełnij: „Are there ___ eggs?”', options: ['any', 'some', 'a', 'an'], answer: 0, explain: 'W zwykłym pytaniu używamy „any”: Czy są jakieś jajka?' },
        { id: '7tq7c5', q: 'Jak grzecznie poprosisz o wodę?', options: ['Can I have some water, please?', 'Can I have any water, please?', 'Can I have a water any, please?', 'Can I have waters, please?'], answer: 0, explain: 'Gdy o coś prosimy, mówimy „some”, choć to pytanie.' },
        { id: 'jjbkw8', q: 'Uzupełnij: „___ oranges are there?” – „Five.”', options: ['How many', 'How much', 'How old', 'What'], answer: 0, explain: 'Pomarańcze da się policzyć, więc „How many?”.' },
        { id: 't3cy5j', q: 'Uzupełnij: „___ juice is there?” – „Not much.”', options: ['How much', 'How many', 'How old', 'Which'], answer: 0, explain: 'Sok jest niepoliczalny, więc „How much?”.' },
        { id: 'pj25zu', q: 'Co znaczy „a slice of bread”?', options: ['kromka chleba', 'bochenek chleba', 'kawałek sera', 'słoik miodu'], answer: 0, explain: 'Slice to plaster, kromka. A slice of bread – kromka chleba.' },
        { id: 'neki8l', q: 'Jak powiesz „butelka wody”?', options: ['a bottle of water', 'a glass of water', 'a water bottle of', 'a jar of water'], answer: 0, explain: 'Bottle to butelka: a bottle of water. A glass of water to szklanka wody.' },
        { id: '5ei8vs', q: 'Uzupełnij: „I eat ___ vegetables. They\'re healthy!”', options: ['a lot of', 'any', 'an', 'much of'], answer: 0, explain: '„A lot of” – dużo. Pasuje do twierdzenia z liczbą mnogą (vegetables).' },
        { id: 'e2e3mv', q: 'Które zdanie jest poprawne?', options: ['There is some cheese.', 'There are some cheese.', 'There is a cheeses.', 'There is any cheese.'], answer: 0, explain: 'Cheese jest niepoliczalny – łączymy go z „is”. W twierdzeniu – „some”.' },
        { id: 'qtjlhv', q: 'Kelner pyta: „Would you like some tea?”. Co to znaczy?', options: ['Czy chcesz herbaty?', 'Czy lubisz herbatę?', 'Ile jest herbaty?', 'Czy jest herbata?'], answer: 0, explain: '„Would you like…?” to grzeczna propozycja: Czy chcesz / Czy masz ochotę na…? „Do you like…?” znaczyłoby „Czy lubisz…?”.' },
        { id: 'gulms6', q: 'Prawda czy fałsz?\n„A lot of” możemy połączyć zarówno z „apples”, jak i z „milk”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: '„A lot of” pasuje do policzalnych (a lot of apples) i niepoliczalnych (a lot of milk).' },
        { id: 'wyvtma', q: 'Prawda czy fałsz?\nW przeczeniach zwykle używamy „some”: „There aren\'t some eggs.”', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'W przeczeniach używamy „any”: There aren\'t any eggs.' },
      ],
    },
    {
      id: 'w-miescie',
      name: 'W mieście, czas „present continuous”',
      chapter: 'Unit 8',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 8 „podróżowanie i turystyka” (orientacja w terenie) i temat 7 „zakupy i usługi”; wym. 4.1 (opisuje miejsca), 4.2 i 5.2 (opowiada o czynnościach z teraźniejszości), 6.3 (uzyskuje i przekazuje informacje), 6.11 (instruuje – wskazuje drogę). Czas present continuous i przyimki „between, opposite” – wybór redakcyjny według podręcznika (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
      theory: `
        <h3>Miejsca w mieście</h3>
        <table>
          <tr><td>library</td><td>biblioteka</td><td>hospital</td><td>szpital</td></tr>
          <tr><td>post office</td><td>poczta</td><td>police station</td><td>komisariat policji</td></tr>
          <tr><td>cinema</td><td>kino</td><td>museum</td><td>muzeum</td></tr>
          <tr><td>café</td><td>kawiarnia</td><td>restaurant</td><td>restauracja</td></tr>
          <tr><td>bank</td><td>bank</td><td>chemist's</td><td>apteka</td></tr>
          <tr><td>train station</td><td>dworzec kolejowy</td><td>bus stop</td><td>przystanek autobusowy</td></tr>
          <tr><td>swimming pool</td><td>basen</td><td>sports centre</td><td>centrum sportowe</td></tr>
          <tr><td>shopping centre</td><td>centrum handlowe</td><td>park</td><td>park</td></tr>
        </table>
        <h3>Gdzie to jest?</h3>
        <ul>
          <li><b>next to</b> – obok: <i>The café is next to the bank.</i></li>
          <li><b>opposite</b> – naprzeciwko: <i>The library is opposite the park.</i></li>
          <li><b>between</b> – między: <i>The post office is between the bank and the cinema.</i></li>
        </ul>
        <h3>Jak dojść? – wskazywanie drogi</h3>
        <ul>
          <li><b>Excuse me, where's the museum?</b> – Przepraszam, gdzie jest muzeum?</li>
          <li><b>Go straight on.</b> – Idź prosto.</li>
          <li><b>Turn left. / Turn right.</b> – Skręć w lewo. / Skręć w prawo.</li>
          <li><b>It's on the left. / It's on the right.</b> – Jest po lewej. / Jest po prawej.</li>
        </ul>
        <h3>Present continuous – co dzieje się teraz</h3>
        <p>Tego czasu używasz, gdy mówisz o tym, co dzieje się <b>właśnie teraz</b>, w chwili mówienia. Budowa: <b>am / is / are</b> + czasownik z końcówką <b>-ing</b>.</p>
        <table>
          <tr><th></th><th>Przykład</th></tr>
          <tr><td>twierdzenie</td><td>I<b>'m reading</b>. · She<b>'s running</b>. · They<b>'re playing</b>.</td></tr>
          <tr><td>przeczenie</td><td>I<b>'m not</b> sleeping. · He <b>isn't</b> eating. · We <b>aren't</b> watching TV.</td></tr>
          <tr><td>pytanie</td><td><b>Are</b> you listen<b>ing</b>? · <b>Is</b> she swimm<b>ing</b>?</td></tr>
          <tr><td>krótka odpowiedź</td><td>Yes, I am. / No, I'm not. · Yes, she is. / No, she isn't.</td></tr>
        </table>
        <p>Pytanie o czynność: <b>What are you doing?</b> – Co robisz? → <i>I'm doing my homework.</i></p>
        <h3>Pisownia -ing</h3>
        <ul>
          <li>zwykle <b>+ing</b>: read → reading, play → playing, eat → eating</li>
          <li>nieme <b>-e</b> na końcu znika: write → writing, dance → dancing, ride → riding, make → making</li>
          <li>krótki wyraz: jedna samogłoska + jedna spółgłoska → spółgłoskę <b>podwajamy</b>: swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing, sit → si<b>tt</b>ing, shop → sho<b>pp</b>ing</li>
        </ul>
        <h3>Teraz czy zwykle?</h3>
        <ul>
          <li>Słowa-sygnały present continuous: <b>now</b> (teraz), <b>at the moment</b> (w tej chwili), <b>Look!</b> (Patrz!), <b>Listen!</b> (Posłuchaj!).</li>
          <li>Present simple – to, co robisz <b>zwykle</b>: <i>I usually walk to school.</i> Present continuous – to, co robisz <b>teraz</b>: <i>Today I'm going by bus.</i></li>
        </ul>
      `,
      infographicNote: 'Od góry: dział ma cztery części – miejsca, gdzie coś jest, jak dojść i co dzieje się teraz.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { title: '🏙️ W mieście' },
        branches: [
          { kolor: 3, title: '🏛️ Miejsca', items: ['library, post office, hospital', "chemist's, bus stop, train station"] },
          { kolor: 1, title: '📍 Gdzie to jest?', items: ['next to – obok', 'opposite – naprzeciwko', 'between – między'] },
          { kolor: 1, title: '🧭 Jak dojść?', items: ['Go straight on. – Idź prosto.', 'Turn left. / Turn right.', "It's on the left. / It's on the right."] },
          { kolor: 2, title: '⏱️ Co dzieje się teraz?', text: 'am / is / are + czasownik z -ing', items: ["I'm reading. She's running.", 'What are you doing?', 'sygnały: now, at the moment, Look!'] },
        ],
        bottom: { kolor: 4, title: '✏️ Pisownia -ing', items: ['read → reading', 'write → writing (nieme -e znika)', 'swim → swimming (podwójna spółgłoska)'] },
      },
      flashcards: [
        ['library / bookshop', 'biblioteka / księgarnia'],
        ['post office / police station', 'poczta / komisariat policji'],
        ['train station / bus stop', 'dworzec kolejowy / przystanek autobusowy'],
        ['chemist\'s / hospital', 'apteka / szpital'],
        ['opposite / between', 'naprzeciwko / między'],
        ['Go straight on. Turn left.', 'Idź prosto. Skręć w lewo.'],
        ['Present continuous – budowa', 'am / is / are + czasownik z -ing'],
        ['What are you doing?', 'Co (teraz) robisz? → I\'m reading.'],
        ['write, dance → ?', 'writing, dancing (nieme -e znika)'],
        ['swim, run, sit → ?', 'swimming, running, sitting (podwójna spółgłoska)'],
        ['now, at the moment, Look!', 'sygnały present continuous – dzieje się teraz'],
      ],
      questions: [
        { id: 'vwlwn9', q: 'Gdzie wypożyczysz książki?', options: ['in the library', 'in the bank', 'at the post office', 'in the chemist\'s'], answer: 0, explain: 'Library to biblioteka – tam wypożycza się książki.' },
        { id: 'b1z1cw', q: 'Boli cię głowa i potrzebujesz leku. Dokąd idziesz?', options: ['to the chemist\'s', 'to the cinema', 'to the museum', 'to the bus stop'], answer: 0, explain: 'Chemist\'s to apteka.' },
        { id: 'v4uqkh', q: 'Co znaczy „The bank is opposite the park”?', options: ['Bank jest naprzeciwko parku.', 'Bank jest obok parku.', 'Bank jest w parku.', 'Bank jest za parkiem.'], answer: 0, explain: '„Opposite” to naprzeciwko. „Obok” to „next to”.' },
        { id: 'n1m8ta', q: 'Uzupełnij: „The café is ___ the bank and the cinema.”', options: ['between', 'opposite', 'next', 'on'], answer: 0, explain: '„Between… and…” – między… a…' },
        { id: 'vp9d43', q: 'Co znaczy „Turn right”?', options: ['Skręć w prawo.', 'Skręć w lewo.', 'Idź prosto.', 'To po prawej.'], answer: 0, explain: '„Turn” – skręć, „right” – w prawo.' },
        { id: '8phtwv', q: 'Uzupełnij: „Look! The dog ___ in the park.”', options: ['is running', 'runs', 'are running', 'is runing'], answer: 0, explain: '„Look!” – dzieje się teraz, więc present continuous: is + running (run → running, podwójne n).' },
        { id: 'u0xo9m', q: 'Uzupełnij: „I ___ my homework at the moment.”', options: ['am doing', 'is doing', 'are doing', 'doing'], answer: 0, explain: 'Z „I” łączymy „am”: I am (I\'m) doing.' },
        { id: '7l94as', q: 'Uzupełnij: „My friends ___ football now.”', options: ['are playing', 'is playing', 'am playing', 'playing'], answer: 0, explain: '„My friends” to „they”, więc „are playing”.' },
        { id: 'mhp74v', q: 'Jak zapisać „write” z końcówką -ing?', options: ['writing', 'writeing', 'writting', 'writng'], answer: 0, explain: 'Nieme -e na końcu znika: write → writing.' },
        { id: '0c9c5g', q: 'Jak zapisać „swim” z końcówką -ing?', options: ['swimming', 'swiming', 'swimeing', 'swimmming'], answer: 0, explain: 'Krótki wyraz kończący się jedną samogłoską i jedną spółgłoską – podwajamy spółgłoskę: swimming.' },
        { id: '6mly79', q: 'Które zdanie znaczy „Ona teraz nie śpi”?', options: ['She isn\'t sleeping now.', 'She doesn\'t sleep now.', 'She aren\'t sleeping now.', 'She not sleeping now.'], answer: 0, explain: 'Przeczenie w present continuous: is not (isn\'t) + sleeping.' },
        { id: 'v307z1', q: 'Mama pyta: „Are you watching TV?”. Nie oglądasz. Co odpowiesz krótko?', options: ['No, I\'m not.', 'No, I don\'t.', 'No, I amn\'t.', 'No, you aren\'t.'], answer: 0, explain: 'Na pytanie z „Are you…?” odpowiadamy „Yes, I am.” albo „No, I\'m not.”.' },
        { id: 'v85dpj', q: 'Ktoś pyta: „What are you doing?”. Która odpowiedź pasuje?', options: ['I\'m reading a book.', 'I read books.', 'I\'m fine, thanks.', 'I\'m in the park.'], answer: 0, explain: '„What are you doing?” to pytanie, co robisz teraz. Odpowiadamy w present continuous.' },
        { id: 'oe56k7', q: 'W którym zdaniu użyto czasu present continuous poprawnie?', options: ['Listen! The baby is crying.', 'Listen! The baby cries now.', 'Listen! The baby crying.', 'Listen! The baby are crying.'], answer: 0, explain: '„Listen!” – dzieje się teraz: is + crying.' },
        { id: 'nfpcoh', q: 'Uzupełnij: „I usually walk to school, but today I ___ by bus.”', options: ['am going', 'go', 'goes', 'going'], answer: 0, explain: '„Usually” – zwykle (present simple: walk), „today” – dziś, teraz inaczej: I\'m going (present continuous).' },
        { id: 'vtpegv', q: 'Prawda czy fałsz?\nZdanie „She is dance now” jest poprawne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Brakuje końcówki -ing: She is dancing now (dance → dancing, nieme -e znika).' },
      ],
    },
    {
      id: 'kultura',
      name: 'Kraje anglojęzyczne: święta, symbole, ciekawostki',
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 10 – 10.1 (wiedza o krajach i kulturach społeczności posługujących się danym językiem), 10.2 (podobieństwa i różnice między kulturą własną a kulturą tych społeczności), 10.4 (odróżnia stereotypy od faktów), 10.5 (ciekawość i otwartość wobec innych kultur). Dobór krajów, świąt i symboli – decyzja redakcyjna. Fakty sprawdzone 2.11.2026 w kilku zgodnych źródłach (m.in. British Council LearnEnglish, CIA World Factbook, canada.ca, UNESCO, materiały Parlamentu Wielkiej Brytanii o Big Benie, Central Bank of Ireland). Pominięto szczegóły, które źródła podają różnie (np. obecna rezydencja króla – zmiany w 2026 r.).',
      theory: `
        <h3>Flagi</h3>
        <table>
          <tr><th>Kraj</th><th>Flaga</th></tr>
          <tr><td><b>the UK</b> (Wielka Brytania)</td><td><b>Union Jack</b>: czerwień, biel i błękit. Łączy trzy krzyże: św. Jerzego (Anglia), św. Andrzeja (Szkocja) i św. Patryka (Irlandia).</td></tr>
          <tr><td><b>the USA</b> (Stany Zjednoczone)</td><td><b>Stars and Stripes</b> („gwiazdy i pasy”): <b>50 gwiazd</b> – 50 stanów, <b>13 pasów</b> – 13 dawnych kolonii, które ogłosiły niepodległość.</td></tr>
          <tr><td><b>Ireland</b> (Irlandia)</td><td>trzy pionowe pasy: zielony, biały, pomarańczowy</td></tr>
          <tr><td><b>Canada</b> (Kanada)</td><td>czerwony <b>liść klonu</b> na białym polu, po bokach czerwone pasy</td></tr>
        </table>
        <h3>Święta w kalendarzu</h3>
        <table>
          <tr><th>Kiedy</th><th>Święto</th><th>Co się robi</th></tr>
          <tr><td>31 października</td><td><b lang="en">Halloween</b></td><td>przebrane dzieci chodzą od domu do domu i wołają <i lang="en">Trick or treat!</i> (dostają słodycze); świecą <b lang="en">jack-o'-lanterns</b> – wydrążone dynie (<i lang="en">pumpkins</i>) ze świeczką w środku</td></tr>
          <tr><td>5 listopada</td><td><b lang="en">Bonfire Night</b> (Wielka Brytania)</td><td>ogniska (<i lang="en">bonfires</i>) i fajerwerki (<i lang="en">fireworks</i>) – na pamiątkę udaremnionego w 1605 r. spisku, którego uczestnicy chcieli wysadzić w powietrze parlament i króla (jednym z nich był Guy Fawkes)</td></tr>
          <tr><td>czwarty czwartek listopada</td><td><b lang="en">Thanksgiving</b> (USA) – Święto Dziękczynienia</td><td>rodzinny obiad, najczęściej pieczony <b lang="en">turkey</b> (indyk)</td></tr>
          <tr><td>25 grudnia</td><td><b lang="en">Christmas Day</b></td><td>patrz niżej</td></tr>
          <tr><td>17 marca</td><td><b lang="en">St Patrick's Day</b> (Irlandia) – dzień św. Patryka</td><td>ludzie ubierają się na zielono, symbolem jest <b lang="en">shamrock</b> – listek koniczyny</td></tr>
          <tr><td>1 lipca</td><td><b lang="en">Canada Day</b></td><td>święto narodowe Kanady</td></tr>
          <tr><td>4 lipca</td><td><b lang="en">Independence Day</b> (USA)</td><td>Dzień Niepodległości – pamiątka przyjęcia Deklaracji Niepodległości w 1776 r.; fajerwerki i parady</td></tr>
        </table>
        <h3>Boże Narodzenie: w Polsce i w Wielkiej Brytanii</h3>
        <table>
          <tr><th>W Polsce</th><th>W Wielkiej Brytanii</th></tr>
          <tr><td>najważniejsza jest <b>Wigilia</b> (24 grudnia) – uroczysta kolacja, prezenty zwykle wieczorem</td><td>24 grudnia (<i lang="en">Christmas Eve</i>) dzieci wieszają <b lang="en">stockings</b> (skarpety) dla <b lang="en">Father Christmas</b>; najważniejszy jest <b lang="en">Christmas Day</b> (25 grudnia) – rano prezenty, potem świąteczny obiad: pieczony indyk, <i lang="en">Christmas pudding</i></td></tr>
          <tr><td>26 grudnia – drugi dzień świąt</td><td>26 grudnia – <b lang="en">Boxing Day</b>, dzień wolny</td></tr>
        </table>
        <p>Przy brytyjskim świątecznym stole rozrywa się <b lang="en">Christmas crackers</b>: papierowe tuby, które dwie osoby ciągną za końce, aż pękną z trzaskiem. W środku są papierowa korona, żart na karteczce i mała zabawka.</p>
        <h3>Znane miejsca i zwierzęta</h3>
        <ul>
          <li><b lang="en">Big Ben</b> (Londyn) – tak nazywa się <b>wielki dzwon</b> w wieży zegarowej przy parlamencie. Potocznie mówi się tak o całej wieży, która nazywa się <i lang="en">Elizabeth Tower</i>.</li>
          <li>Czerwone autobusy piętrowe (<i lang="en">double-deckers</i>) – symbol Londynu.</li>
          <li><b lang="en">Statue of Liberty</b> (Statua Wolności) – w Nowym Jorku; dar Francji dla USA (odsłonięta w 1886 r.).</li>
          <li><b lang="en">Sydney Opera House</b> – opera w Sydney (Australia) z dachem przypominającym białe żagle.</li>
          <li>W Australii żyją <b lang="en">kangaroos</b> (kangury) i <b lang="en">koalas</b> (koale). Koala to torbacz, a nie miś!</li>
        </ul>
        <h3>Życie codzienne</h3>
        <table>
          <tr><th>Kraj</th><th>Pieniądze</th><th>Ruch na drogach</th></tr>
          <tr><td>Polska</td><td>złoty (zł)</td><td>prawostronny</td></tr>
          <tr><td>Wielka Brytania</td><td><b lang="en">pound</b> – funt (£)</td><td><b>lewostronny</b></td></tr>
          <tr><td>Irlandia</td><td><b lang="en">euro</b> (€) – od 2002 r.</td><td><b>lewostronny</b></td></tr>
          <tr><td>USA</td><td><b lang="en">dollar</b> – dolar ($)</td><td>prawostronny</td></tr>
          <tr><td>Australia</td><td>dolar australijski</td><td><b>lewostronny</b></td></tr>
        </table>
        <div class="tip">💡 W Irlandii Północnej (część Wielkiej Brytanii) płaci się funtami, a w Irlandii (osobne państwo) – euro.</div>
        <h3>Fakt czy stereotyp?</h3>
        <p><b>Stereotyp</b> to uproszczona opinia o całej grupie ludzi, np. „wszyscy Brytyjczycy codziennie o piątej piją herbatę”. Nie jest prawdziwa dla każdego. <b>Fakt</b> można sprawdzić: „W Wielkiej Brytanii jeździ się lewą stroną drogi”. Ludzie w każdym kraju są różni – warto ich poznać, zanim się ich oceni.</p>
      `,
      infographicNote: 'Czytaj od góry: święta po kolei w roku szkolnym. Ten sam kolor – ten sam kraj.',
      infographic: {
        type: 'os',
        items: [
          { label: '31.10', kolor: 4, title: 'Halloween', text: "„Trick or treat!”, dynie ze świeczką (jack-o'-lanterns)" },
          { label: '5.11', kolor: 1, title: 'Bonfire Night', text: 'Wielka Brytania: ogniska i fajerwerki (fireworks)' },
          { label: 'listopad', kolor: 2, title: 'Thanksgiving', text: 'USA, czwarty czwartek listopada: indyk (turkey)' },
          { label: '25.12', kolor: 1, title: 'Christmas Day', text: 'Wielka Brytania: rano prezenty, potem indyk; 26.12 – Boxing Day' },
          { label: '17.03', kolor: 3, title: "St Patrick's Day", text: 'Irlandia: zielone stroje, koniczyna (shamrock)' },
          { label: '1.07', kolor: 5, title: 'Canada Day', text: 'Kanada: święto narodowe' },
          { label: '4.07', kolor: 2, title: 'Independence Day', text: 'USA: Dzień Niepodległości (1776)' },
        ],
      },
      flashcards: [
        ['Halloween', '31 października: „Trick or treat!”, dynie ze świeczką (jack-o\'-lanterns)'],
        ['pumpkin', 'dynia'],
        ['Bonfire Night', '5 listopada, Wielka Brytania: ogniska i fajerwerki (fireworks)'],
        ['Thanksgiving', 'Święto Dziękczynienia w USA: czwarty czwartek listopada, indyk (turkey)'],
        ['Christmas Day', '25 grudnia – najważniejszy dzień świąt w Wielkiej Brytanii'],
        ['stocking', 'skarpeta na prezenty od Father Christmas'],
        ['Boxing Day', '26 grudnia – dzień wolny w Wielkiej Brytanii'],
        ['Christmas cracker', 'tuba, którą rozrywają dwie osoby; w środku korona, żart i zabawka'],
        ['St Patrick\'s Day', '17 marca, Irlandia: zielone stroje, koniczyna (shamrock)'],
        ['Independence Day', '4 lipca, USA: Dzień Niepodległości (1776)'],
        ['Flaga USA', '50 gwiazd (stany) i 13 pasów (dawne kolonie)'],
        ['Flaga Kanady', 'czerwony liść klonu na białym polu'],
        ['Big Ben', 'wielki dzwon w wieży zegarowej w Londynie'],
        ['Statue of Liberty', 'Statua Wolności, Nowy Jork – dar Francji'],
        ['pound · dollar · euro', 'funt (UK) · dolar (USA) · euro (Irlandia)'],
        ['Ruch lewostronny', 'Wielka Brytania, Irlandia, Australia'],
      ],
      questions: [
        { id: '4byfck', q: 'Kiedy obchodzi się Halloween?', options: ['31 października', '1 listopada', '5 listopada', '25 grudnia'], answer: 0, explain: 'Halloween wypada 31 października, w przeddzień 1 listopada.' },
        { id: 'u727z0', q: 'Co wołają dzieci, gdy w Halloween pukają do drzwi sąsiadów?', options: ['Trick or treat!', 'Happy birthday!', 'Merry Christmas!', 'Good night!'], answer: 0, explain: '„Trick or treat!” – w odpowiedzi zwykle dostają słodycze.' },
        { id: '4cuq3p', q: 'Jack-o\'-lantern to…', options: ['wydrążona dynia ze świeczką w środku', 'kapelusz czarownicy', 'pudełko ze słodyczami', 'kartka z życzeniami'], answer: 0, explain: 'Na Halloween drąży się dynie (pumpkins), wycina w nich twarze i wkłada do środka świeczkę.' },
        { id: '3wspj5', q: 'Uzupełnij: „On Halloween we make a lantern from a ___.”', options: ['pumpkin', 'turkey', 'stocking', 'cracker'], answer: 0, explain: 'Pumpkin to dynia. Turkey – indyk, stocking – skarpeta na prezenty, cracker – świąteczna tuba z niespodzianką.' },
        { id: 'qtalyt', q: 'Bonfire Night (5 listopada) w Wielkiej Brytanii to wieczór…', options: ['ognisk i fajerwerków', 'malowania pisanek', 'ubierania choinki', 'przebierania się za duchy'], answer: 0, explain: 'Bonfire to ognisko, fireworks – fajerwerki. Przebieranie się za duchy to Halloween.' },
        { id: 'phbyyx', q: 'W którym kraju obchodzi się Thanksgiving w czwarty czwartek listopada?', options: ['w USA', 'w Wielkiej Brytanii', 'w Irlandii', 'w Australii'], answer: 0, explain: 'Thanksgiving – Święto Dziękczynienia – obchodzi się w Stanach Zjednoczonych w czwarty czwartek listopada.' },
        { id: 'ju6fl1', q: 'Co jest najczęściej głównym daniem w Thanksgiving?', options: ['pieczony indyk (turkey)', 'karp', 'pierogi', 'pizza'], answer: 0, explain: 'Turkey – indyk – to tradycyjne danie tego święta.' },
        { id: 'fkrnox', q: 'Który dzień jest najważniejszym dniem Bożego Narodzenia w Wielkiej Brytanii?', options: ['25 grudnia – Christmas Day', '24 grudnia – Christmas Eve', '26 grudnia – Boxing Day', '6 grudnia'], answer: 0, explain: 'W Wielkiej Brytanii najważniejszy jest 25 grudnia: rano prezenty, potem świąteczny obiad. W Polsce najważniejsza jest Wigilia, 24 grudnia.' },
        { id: 'sd85yt', q: 'Czym różnią się święta Bożego Narodzenia w Polsce i w Wielkiej Brytanii?', options: ['W Polsce najważniejsza jest Wigilia (24 grudnia), w Wielkiej Brytanii – 25 grudnia.', 'W Wielkiej Brytanii nie ma świąt Bożego Narodzenia.', 'W Polsce prezenty daje się dopiero 26 grudnia.', 'Niczym się nie różnią.'], answer: 0, explain: 'W Polsce prezenty są zwykle w Wigilię wieczorem, a brytyjskie dzieci znajdują je rano 25 grudnia.' },
        { id: 'sbizgo', q: 'W co brytyjskie dzieci w Wigilię wieczorem wieszają, żeby Father Christmas zostawił w nich prezenty?', options: ['w skarpety (stockings)', 'w dynie (pumpkins)', 'w kapelusze (hats)', 'w plecaki (backpacks)'], answer: 0, explain: 'Stocking to długa skarpeta. Rano 25 grudnia dzieci znajdują w niej prezenty.' },
        { id: 'c6fp7v', q: 'Christmas cracker to…', options: ['papierowa tuba, którą dwie osoby rozrywają z trzaskiem – w środku są korona, żart i mała zabawka', 'świąteczne ciasto', 'ozdoba na czubek choinki', 'świąteczna piosenka'], answer: 0, explain: 'Crackery są na brytyjskim świątecznym stole. Kto zostanie z większą częścią, zabiera zawartość.' },
        { id: '79r5f9', q: 'Kiedy Irlandczycy świętują St Patrick\'s Day?', options: ['17 marca', '4 lipca', '1 lipca', '5 listopada'], answer: 0, explain: '17 marca – dzień św. Patryka. Ludzie ubierają się na zielono, a symbolem jest koniczyna (shamrock).' },
        { id: 'gibbhc', q: 'Co świętują Amerykanie 4 lipca?', options: ['Dzień Niepodległości (Independence Day)', 'Święto Dziękczynienia (Thanksgiving)', 'Halloween', 'Nowy Rok'], answer: 0, explain: '4 lipca 1776 r. przyjęto Deklarację Niepodległości. Świętuje się m.in. fajerwerkami i paradami.' },
        { id: '3y7cyf', q: 'Co oznacza 50 gwiazd na fladze USA?', options: ['50 stanów', '50 miast', '50 prezydentów', '50 lat niepodległości'], answer: 0, explain: 'Każda gwiazda to jeden stan. 13 pasów to 13 dawnych kolonii, które ogłosiły niepodległość.' },
        { id: 'y21geo', q: 'Ile pasów ma flaga USA?', options: ['13', '50', '3', '7'], answer: 0, explain: '13 pasów – tyle było dawnych kolonii, które ogłosiły niepodległość. Gwiazd jest 50.' },
        { id: 'gcmr29', q: 'Co widać na fladze Kanady?', options: ['czerwony liść klonu', 'zieloną koniczynę', 'gwiazdy i pasy', 'trzy krzyże'], answer: 0, explain: 'Flaga Kanady: czerwony liść klonu na białym polu, po bokach czerwone pasy. Trzy krzyże łączy flaga Wielkiej Brytanii.' },
        { id: 't69tnm', q: 'Jakimi pieniędzmi zapłacisz w Dublinie, stolicy Irlandii?', options: ['euro', 'funtami', 'dolarami', 'złotymi'], answer: 0, explain: 'Irlandia używa euro od 2002 r. Funtami płaci się w Wielkiej Brytanii, także w Irlandii Północnej.' },
        { id: 'x2nebc', q: 'Prawda czy fałsz?\nW Wielkiej Brytanii samochody jeżdżą lewą stroną drogi.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'W Wielkiej Brytanii, Irlandii i Australii ruch jest lewostronny, w Polsce i USA – prawostronny.' },
        { id: 'kvlwc9', q: 'Big Ben to…', options: ['wielki dzwon w wieży zegarowej w Londynie', 'most na Tamizie', 'pałac królewski', 'park w Nowym Jorku'], answer: 0, explain: 'Big Ben to nazwa dzwonu. Potocznie mówi się tak o całej wieży, która nazywa się Elizabeth Tower.' },
        { id: 'lxx16o', q: 'Gdzie stoi Statua Wolności (Statue of Liberty)?', options: ['w Nowym Jorku', 'w Londynie', 'w Sydney', 'w Dublinie'], answer: 0, explain: 'Statua Wolności stoi w Nowym Jorku. Była darem Francji dla USA.' },
        { id: 'us9oj4', q: 'Które zwierzęta żyją na wolności w Australii?', options: ['kangury i koale', 'lwy i żyrafy', 'pandy i tygrysy', 'żubry i bociany'], answer: 0, explain: 'Kangaroos i koalas to torbacze. Koala nie jest misiem!' },
        { id: 'ujvgnm', q: 'Które zdanie jest stereotypem, a nie faktem?', options: ['Wszyscy Brytyjczycy codziennie o piątej piją herbatę.', 'W Wielkiej Brytanii jeździ się lewą stroną drogi.', 'Stolicą Wielkiej Brytanii jest Londyn.', 'W Irlandii płaci się w euro.'], answer: 0, explain: 'Stereotyp to uproszczona opinia o całej grupie ludzi – nie każdy Brytyjczyk pije herbatę o piątej. Pozostałe zdania to fakty, które można sprawdzić.' },
      ],
    },
  ],
});
