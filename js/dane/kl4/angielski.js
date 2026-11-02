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
      basis: 'Dz.U. 2026 poz. 378, język obcy nowożytny, poziom A1: wym. 1 temat 1 „człowiek” (wygląd zewnętrzny, cechy charakteru, uczucia i emocje, umiejętności); wym. 4.1 (opisuje ludzi), 4.7 (wyraża uczucia i emocje), 6.13 (wyraża uczucia i emocje w rozmowie). Konstrukcje „have got” i „can” – wybór redakcyjny (podstawa nie wymienia struktur gramatycznych dla poziomu A1).',
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
      `,
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
        { id: 'jg0s9u', q: 'Prawda czy fałsz?\nZdanie „She cans swim.” jest poprawne.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: '„Can” nie dostaje końcówki -s. Poprawnie: „She can swim.”' },
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
  ],
});
