/* Język polski – klasa 4 (nowa podstawa programowa: Dz.U. 2026 poz. 378, język polski kl. IV–VI) */
window.SUBJECTS.push({
  id: 'polski',
  name: 'Język polski',
  icon: '📖',
  color: '#d6604d',
  book: 'Słowa na start! 4 (Nowa Era)',
  topics: [
    {
      id: 'glosk-pisownia',
      name: 'Głoski, litery i pisownia',
      chapter: 'rozdziały I–VI (głoski, sylaby, pisownia)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 3 „Świadomość języka”, wym. 8 (zasady pisowni z wykorzystaniem wiedzy o odmianie i wymowie wyrazów), wym. 10 (pojęcia: głoska dźwięczna i bezdźwięczna, głoska ustna i nosowa, samogłoska, spółgłoska, sylaba). Wybrano podstawowe reguły pisowni ó, rz, ż, ch, wielkiej litery i „nie” z czasownikami oraz przymiotnikami w stopniu równym. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Głoska i litera</h3>
        <ul>
          <li><b>Głoska</b> – dźwięk, który wymawiasz i słyszysz.</li>
          <li><b>Litera</b> – znak, którym zapisujesz głoskę.</li>
        </ul>
        <p>Niektóre głoski zapisujemy <b>dwiema literami</b>: <b>ch, cz, dz, dź, dż, rz, sz</b>. Wyraz <i>szafa</i> ma 5 liter, ale 4 głoski: <b>sz – a – f – a</b>.</p>
        <p>Litera <b>i</b> przed samogłoską często tylko zmiękcza głoskę: <i>ciocia</i> to 6 liter i 4 głoski (ć – o – ć – a).</p>
        <h3>Samogłoski, spółgłoski, sylaby</h3>
        <ul>
          <li><b>Samogłoski</b>: a, ą, e, ę, i, o, ó, u, y. Pozostałe głoski to <b>spółgłoski</b>.</li>
          <li><b>Sylaba</b> – część wyrazu z jedną samogłoską: <i>ma-ka-ron</i> (3 sylaby), <i>hu-laj-no-ga</i> (4 sylaby).</li>
          <li>Wyraz przenosisz do następnej linii, dzieląc go na sylaby: <i>ma-karon, maka-ron</i>. Nie zostawiaj i nie przenoś pojedynczej litery.</li>
        </ul>
        <h3>Głoski dźwięczne i bezdźwięczne, ustne i nosowe</h3>
        <p>Połóż dłoń na gardle. Gdy wymawiasz głoskę <b>dźwięczną</b>, gardło drży. Przy <b>bezdźwięcznej</b> – nie drży.</p>
        <table>
          <tr><th>dźwięczna</th><td>b</td><td>d</td><td>g</td><td>w</td><td>z</td><td>ż (rz)</td></tr>
          <tr><th>bezdźwięczna</th><td>p</td><td>t</td><td>k</td><td>f</td><td>s</td><td>sz</td></tr>
        </table>
        <p>Na końcu wyrazu głoskę dźwięczną często wymawiamy jak bezdźwięczną: mówimy [chlep], a piszemy <b>chleb</b>, bo <i>chleba</i>. Odmień wyraz – usłyszysz, co napisać.</p>
        <p>Przy głoskach <b>nosowych</b> powietrze przechodzi przez nos. Samogłoski nosowe to <b>ą</b> i <b>ę</b>. Pozostałe samogłoski są <b>ustne</b>.</p>
        <h3>Ó czy u?</h3>
        <ul>
          <li><b>ó</b> piszemy, gdy w innej formie wyrazu lub w wyrazie pokrewnym jest <b>o, e</b> lub <b>a</b>: wózek – wozy, stół – stoły, pióro – pierze, wrócić – wracać.</li>
          <li><b>ó</b> w zakończeniach <b>-ów, -ówka, -ówna</b>: Kraków, domów, pocztówka, kreskówka (wyjątki: zasuwka, skuwka, wsuwka).</li>
          <li><b>u</b> piszemy na początku wyrazu: ucho, ulica (wyjątki: ósmy, ósemka, ów) i na końcu wyrazu: domu, kotu, kakadu.</li>
          <li><b>u</b> w zakończeniach <b>-unek, -uje, -uszek, -utki</b>: rysunek, maluje, fartuszek, malutki.</li>
        </ul>
        <h3>Rz czy ż?</h3>
        <ul>
          <li><b>rz</b>, gdy wymienia się na <b>r</b>: morze – morski, dobrze – dobry, górze – góra.</li>
          <li><b>rz</b> po spółgłoskach <b>b, p, d, t, g, k, ch, j, w</b>: brzeg, przed, drzewo, trzy, grzyb, krzesło, chrzan, ujrzeć, wrzesień (wyjątki pisane przez <b>sz</b>: pszczoła, pszenica, kształt).</li>
          <li><b>rz</b> w zakończeniach <b>-arz, -erz</b> w nazwach osób: lekarz, kucharz, malarz, żołnierz.</li>
          <li><b>ż</b>, gdy wymienia się na <b>g, h, z, s, dz</b>: odważny – odwaga, drużyna – druh, każe – kazać, wyżej – wysoko, pieniążek – pieniądz.</li>
          <li><b>ż</b> po <b>l, ł, r, n</b>: lżejszy, rżenie, oranżada.</li>
        </ul>
        <h3>Ch czy h?</h3>
        <ul>
          <li><b>ch</b>, gdy wymienia się na <b>sz</b>: mucha – musze, ucho – uszy, duch – dusza.</li>
          <li><b>ch</b> po literze <b>s</b>: schody, schab, schować.</li>
          <li><b>ch</b> na końcu wyrazu: dach, mech, groch (wyjątek np. druh).</li>
          <li><b>h</b> wymienia się czasem na <b>ż</b>: druh – drużyna. Wiele wyrazów z <b>h</b> trzeba po prostu zapamiętać: herbata, hałas, hamulec.</li>
        </ul>
        <h3>Wielka litera</h3>
        <ul>
          <li>Wielką literą: początek zdania, imiona i nazwiska, nazwy miast, państw, rzek i gór (Gdańsk, Polska, Wisła, Tatry), nazwy ulic (ulica <b>K</b>wiatowa), świąt (Boże Narodzenie), mieszkańców państw (Polak, Niemka).</li>
          <li>Małą literą: dni tygodnia i miesiące (poniedziałek, maj), przymiotniki od nazw (polski, gdański).</li>
        </ul>
        <h3>„Nie” z czasownikami i przymiotnikami</h3>
        <ul>
          <li>Z <b>czasownikami</b> piszemy <b>osobno</b>: nie wiem, nie lubię, nie biegaj (wyjątki: nienawidzić, niepokoić się).</li>
          <li>Z <b>przymiotnikami</b> w stopniu równym piszemy <b>łącznie</b>: niemiły, niewysoki, nieciekawy.</li>
        </ul>
        <div class="tip">💡 Najlepszy sposób na ortografię: <b>odmień wyraz lub znajdź wyraz pokrewny</b>. Gdy to nie pomaga – sprawdź w słowniku ortograficznym.</div>
      `,
      flashcards: [
        ['Głoska a litera', 'Głoskę słyszymy i wymawiamy, literę piszemy'],
        ['Samogłoski', 'a, ą, e, ę, i, o, ó, u, y'],
        ['Sylaba', 'Część wyrazu z jedną samogłoską: ma-ka-ron'],
        ['Pary dźwięczna – bezdźwięczna', 'b–p, d–t, g–k, w–f, z–s, ż–sz'],
        ['Samogłoski nosowe', 'ą i ę'],
        ['Ó wymienne', 'ó wymienia się na o, e, a: stół – stoły, pióro – pierze, wrócić – wracać'],
        ['Rz wymienne', 'rz wymienia się na r: morze – morski'],
        ['Ż wymienne', 'ż wymienia się na g, h, z, s, dz: odważny – odwaga'],
        ['Ch wymienne', 'ch wymienia się na sz: mucha – musze'],
        ['„Nie” z czasownikiem', 'osobno: nie wiem (wyjątki: nienawidzić, niepokoić się)'],
        ['„Nie” z przymiotnikiem', 'w stopniu równym łącznie: niemiły'],
      ],
      questions: [
        { id: '65fhsb', q: 'Ile głosek ma wyraz „szafa”?', options: ['4', '5', '3', '6'], answer: 0, explain: 'Szafa to 5 liter, ale 4 głoski: sz – a – f – a. Dwuznak „sz” to jedna głoska.' },
        { id: 'i745b7', q: 'W którym wyrazie jest więcej liter niż głosek?', options: ['chata', 'mama', 'lato', 'kot'], answer: 0, explain: 'W wyrazie „chata” dwie litery „ch” oznaczają jedną głoskę: 5 liter, 4 głoski.' },
        { id: '81boim', q: 'Ile sylab ma wyraz „hulajnoga”?', options: ['4', '3', '5', '9'], answer: 0, explain: 'hu-laj-no-ga – cztery sylaby, w każdej jedna samogłoska.' },
        { id: 'ukkyx8', q: 'Które przeniesienie wyrazu do nowej linii jest poprawne?', options: ['ma-karon', 'mak-aron', 'm-akaron', 'makaro-n'], answer: 0, explain: 'Dzielimy według sylab (ma-ka-ron) i nie zostawiamy pojedynczej litery.' },
        { id: 'd478lf', q: 'Która para to głoska dźwięczna i jej bezdźwięczna para?', options: ['b – p', 'b – d', 'm – n', 'a – o'], answer: 0, explain: 'Przy „b” gardło drży, przy „p” – nie. To para dźwięczna – bezdźwięczna.' },
        { id: 'i8nvk3', q: 'Która samogłoska jest nosowa?', options: ['ą', 'a', 'o', 'u'], answer: 0, explain: 'Samogłoski nosowe to ą i ę. Przy ich wymowie powietrze przechodzi też przez nos.' },
        { id: '67cnbv', q: 'Dlaczego „chleb” piszemy przez „b”, choć na końcu słychać [p]?', options: ['bo mówimy „chleba”', 'bo to wyjątek', 'bo po „e” zawsze jest „b”', 'bo „p” nie może być na końcu wyrazu'], answer: 0, explain: 'W formie „chleba” wyraźnie słychać „b”. Odmiana pomaga sprawdzić pisownię.' },
        { id: '7x55jp', q: 'Jaką literę wpiszesz w wyraz „st_ł”?', options: ['ó', 'u'], noShuffle: true, answer: 0, explain: 'Stół – stoły: ó wymienia się na o.' },
        { id: 'v56dm8', q: 'Dlaczego „pióro” piszemy przez „ó”?', options: ['bo „pierze” – ó wymienia się na e', 'bo „ó” jest na początku wyrazu', 'bo to zakończenie -ów', 'bo po „p” zawsze jest „ó”'], answer: 0, explain: 'Pióro – pierze: ó wymienia się na e.' },
        { id: 'qzs8qv', q: 'Który wyraz to wyjątek – piszemy go przez „ó” na początku?', options: ['_smy (jak liczba 8)', '_cho', '_lica', '_śmiech'], answer: 0, explain: 'Na początku wyrazu piszemy „u”, ale wyjątki to m.in. ósmy, ósemka, ów.' },
        { id: 'aqe7w9', q: 'Dlaczego „morze” piszemy przez „rz”?', options: ['bo „morski” – rz wymienia się na r', 'bo po „o” zawsze jest „rz”', 'bo to zakończenie -arz', 'bo „ż” nie występuje w środku wyrazu'], answer: 0, explain: 'Morze – morski: rz wymienia się na r.' },
        { id: 'p0vnaq', q: 'Który wyraz napisano poprawnie?', options: ['krzesło', 'kżesło', 'kszesło'], answer: 0, explain: 'Po „k” piszemy „rz”: krzesło.' },
        { id: 'zsuo93', q: 'Dlaczego „odważny” piszemy przez „ż”?', options: ['bo „odwaga” – ż wymienia się na g', 'bo „odwarzyć” – ż wymienia się na r', 'bo po „a” zawsze jest „ż”', 'bo to wyjątek bez reguły'], answer: 0, explain: 'Odważny – odwaga: ż wymienia się na g.' },
        { id: 't04otg', q: 'Który wyraz napisano poprawnie?', options: ['schody', 'shody', 'zchody'], answer: 0, explain: 'Po literze „s” piszemy „ch”: schody.' },
        { id: 'e4h0qx', q: 'Które zdanie zapisano poprawnie?', options: ['W maju pojedziemy do Gdańska.', 'W Maju pojedziemy do Gdańska.', 'W maju pojedziemy do gdańska.', 'w maju pojedziemy do Gdańska.'], answer: 0, explain: 'Zdanie zaczynamy wielką literą, nazwę miasta – też. Nazwy miesięcy piszemy małą literą.' },
        { id: 'czh7k8', q: 'Który zapis jest poprawny?', options: ['Nie wiem, ale to niemiłe.', 'Niewiem, ale to nie miłe.', 'Nie wiem, ale to nie miłe.', 'Niewiem, ale to niemiłe.'], answer: 0, explain: '„Nie” z czasownikiem piszemy osobno (nie wiem), a z przymiotnikiem w stopniu równym łącznie (niemiłe).' },
      ],
    },
    {
      id: 'teksty-kultury',
      name: 'Jak czytać utwory',
      chapter: 'rozdziały I–V (wers, narrator, epitet, rym, legenda, baśń)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 2 „Odbiór tekstów kultury”, wym. 4 (świat przedstawiony, utwory realistyczne i fantastyczne), wym. 5 (ocena postępowania bohaterów), wym. 6 (środki językowe i ich oddziaływanie), wym. 8 (pojęcia: tekst kultury, fikcja, utwór realistyczny i fantastyczny, mit, baśń, legenda, przypowieść, powieść, opowiadanie, świat przedstawiony, narrator, bohater, fabuła, podmiot mówiący, epitet, porównanie, wyliczenie, powtórzenie, przenośnia, wyraz dźwiękonaśladowczy, rymy); dz. 7 wym. 4–6 (praktyki lekturowe, teksty obowiązkowe w kl. IV–VI – tylko wymienione). Przykłady napisano samodzielnie. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Tekst kultury i fikcja</h3>
        <p><b>Tekst kultury</b> to każde dzieło stworzone przez człowieka: książka, wiersz, film, obraz, komiks, piosenka, spektakl w teatrze.</p>
        <p><b>Fikcja</b> – świat wymyślony przez autora. Nawet jeśli przypomina prawdziwy, wydarzenia w utworze są zmyślone.</p>
        <h3>Świat przedstawiony</h3>
        <p>To wszystko, co dzieje się w utworze:</p>
        <ul>
          <li><b>czas</b> – kiedy toczy się akcja,</li>
          <li><b>miejsce</b> – gdzie,</li>
          <li><b>bohaterowie</b> – postacie, o których jest mowa (najważniejsza to <b>bohater główny</b>),</li>
          <li><b>wydarzenia</b> – co się dzieje.</li>
        </ul>
        <p><b>Fabuła</b> to ciąg wydarzeń w utworze, ułożonych po kolei.</p>
        <h3>Kto opowiada?</h3>
        <table>
          <tr><th>Pojęcie</th><th>Kto to jest</th></tr>
          <tr><td><b>autor</b></td><td>prawdziwa osoba, która napisała utwór</td></tr>
          <tr><td><b>narrator</b></td><td>ten, kto opowiada o wydarzeniach w opowiadaniu, baśni czy powieści</td></tr>
          <tr><td><b>podmiot mówiący</b></td><td>„ja”, które mówi w wierszu</td></tr>
        </table>
        <div class="tip">💡 Narrator to nie autor! Autor wymyśla narratora tak samo jak bohaterów.</div>
        <h3>Realistyczny czy fantastyczny?</h3>
        <ul>
          <li><b>Utwór realistyczny</b> – wydarzenia mogłyby się zdarzyć naprawdę (np. kłótnia i zgoda przyjaciół, wycieczka klasowa).</li>
          <li><b>Utwór fantastyczny</b> – są w nim rzeczy niemożliwe: czary, smoki, mówiące zwierzęta, latające dywany.</li>
        </ul>
        <h3>Gatunki</h3>
        <table>
          <tr><th>Gatunek</th><th>Cechy</th></tr>
          <tr><td><b>baśń</b></td><td>czary i istoty fantastyczne, dobro zwycięża zło; czas i miejsce nieokreślone („dawno, dawno temu, za siedmioma górami”)</td></tr>
          <tr><td><b>legenda</b></td><td>łączy prawdę i fikcję; często wyjaśnia, skąd wzięła się nazwa miejsca, albo opowiada o dawnej postaci lub wydarzeniu</td></tr>
          <tr><td><b>mit</b></td><td>opowieść starożytnych, np. Greków, o bogach i bohaterach; wyjaśnia, jak powstał świat i zjawiska przyrody</td></tr>
          <tr><td><b>przypowieść</b></td><td>krótka opowieść z ukrytą nauką (pouczeniem), której trzeba się domyślić; znane przypowieści są w Biblii</td></tr>
          <tr><td><b>opowiadanie</b></td><td>krótszy utwór pisany prozą; niewielu bohaterów, jeden główny ciąg wydarzeń</td></tr>
          <tr><td><b>powieść</b></td><td>długi utwór pisany prozą; wielu bohaterów, wiele wątków, zwykle podzielony na rozdziały</td></tr>
        </table>
        <p>W klasach 4–6 poznasz m.in. wybrane fragmenty Biblii (opis stworzenia świata, przypowieści o miłosiernym Samarytaninie i o synu marnotrawnym), wybrane mity greckie (m.in. o stworzeniu świata, o Syzyfie, o Dedalu i Ikarze, o Demeter i Korze), baśnie i legendy, a także „Mazurka Dąbrowskiego” Józefa Wybickiego i „Rotę” Marii Konopnickiej. Co roku przeczytasz też co najmniej 4 dłuższe książki.</p>
        <h3>Środki artystyczne</h3>
        <table>
          <tr><th>Środek</th><th>Co to jest</th><th>Przykład</th></tr>
          <tr><td><b>epitet</b></td><td>wyraz określający rzeczownik (zwykle przymiotnik)</td><td>ciemna noc, złociste słońce</td></tr>
          <tr><td><b>porównanie</b></td><td>zestawienie dwóch rzeczy za pomocą słów: jak, niby, niczym, jakby</td><td>szybki jak wiatr</td></tr>
          <tr><td><b>przenośnia (metafora)</b></td><td>wyrazy znaczą coś innego niż zwykle</td><td>dywan z liści, morze łez</td></tr>
          <tr><td><b>wyliczenie</b></td><td>wymienienie po kolei wielu rzeczy</td><td>maki, chabry, rumianki i stokrotki</td></tr>
          <tr><td><b>powtórzenie</b></td><td>ten sam wyraz lub zwrot kilka razy</td><td>czekam, czekam i czekam</td></tr>
          <tr><td><b>wyraz dźwiękonaśladowczy</b></td><td>naśladuje dźwięk</td><td>hau, miau, bęc, kap-kap</td></tr>
          <tr><td><b>rym</b></td><td>podobne brzmienie końcówek wyrazów w wersach</td><td>kotek – płotek</td></tr>
        </table>
        <p>W wierszu linijka to <b>wers</b>, a kilka wersów razem to <b>zwrotka</b> (strofa).</p>
      `,
      flashcards: [
        ['Świat przedstawiony', 'Czas, miejsce, bohaterowie i wydarzenia w utworze'],
        ['Fabuła', 'Ciąg wydarzeń w utworze, ułożonych po kolei'],
        ['Narrator', 'Ten, kto opowiada o wydarzeniach w utworze (to nie autor)'],
        ['Podmiot mówiący', '„Ja”, które mówi w wierszu'],
        ['Utwór fantastyczny', 'Są w nim rzeczy niemożliwe: czary, smoki, mówiące zwierzęta'],
        ['Baśń', 'Czary, dobro zwycięża zło, „dawno, dawno temu”'],
        ['Legenda', 'Łączy prawdę i fikcję; często wyjaśnia pochodzenie nazwy miejsca'],
        ['Mit', 'Opowieść starożytnych o bogach i bohaterach, o powstaniu świata'],
        ['Przypowieść', 'Krótka opowieść z ukrytą nauką'],
        ['Epitet', 'Wyraz określający rzeczownik: ciemna noc'],
        ['Porównanie', 'Zestawienie za pomocą „jak”, „niby”, „niczym”: szybki jak wiatr'],
      ],
      questions: [
        { id: 'x162h4', q: 'Co tworzy świat przedstawiony utworu?', options: ['czas, miejsce, bohaterowie i wydarzenia', 'autor, tytuł i okładka', 'ilustracje i numer strony', 'cena i wydawnictwo'], answer: 0, explain: 'Świat przedstawiony to wszystko, co dzieje się w utworze: kiedy, gdzie, kto i co.' },
        { id: 'c4jpj6', q: 'Fabuła to…', options: ['ciąg wydarzeń w utworze, ułożonych po kolei', 'opis wyglądu bohatera', 'tytuł książki', 'rymy w wierszu'], answer: 0, explain: 'Fabuła to wydarzenia jedno po drugim – od początku do końca historii.' },
        { id: 'k8wfsr', q: 'Kim jest narrator?', options: ['tym, kto opowiada o wydarzeniach w utworze', 'zawsze autorem książki', 'tym, kto rysuje ilustracje', 'czytelnikiem'], answer: 0, explain: 'Narrator opowiada historię. Wymyślił go autor – to nie to samo co autor.' },
        { id: 'n0qpuy', q: 'Jak nazywamy „ja”, które mówi w wierszu?', options: ['podmiot mówiący', 'narrator', 'bohater drugoplanowy', 'czytelnik'], answer: 0, explain: 'W wierszu mówi podmiot mówiący. W opowiadaniu historię opowiada narrator.' },
        { id: '5fjdn4', q: 'W utworze dzieci znajdują czarodziejską różdżkę, a smok mówi ludzkim głosem. To utwór…', options: ['fantastyczny', 'realistyczny'], noShuffle: true, answer: 0, explain: 'Czary i mówiący smok nie zdarzają się naprawdę – to elementy fantastyczne.' },
        { id: 'k13t06', q: 'Jaki to gatunek? Są czary i wróżki, dobro zwycięża zło, a historia zaczyna się od słów „Dawno, dawno temu…”.', options: ['baśń', 'legenda', 'powieść', 'przypowieść'], answer: 0, explain: 'Czary, zwycięstwo dobra i nieokreślony czas to cechy baśni.' },
        { id: '3mub7a', q: 'Opowieść łączy prawdę i fikcję i wyjaśnia, skąd wzięła się nazwa miasta. To…', options: ['legenda', 'baśń', 'mit', 'powieść'], answer: 0, explain: 'Legendy często wyjaśniają pochodzenie nazw miejsc i łączą prawdę z fikcją.' },
        { id: 'b1549k', q: 'Opowieść starożytnych Greków o bogach i o tym, jak powstał świat, to…', options: ['mit', 'baśń', 'legenda', 'opowiadanie'], answer: 0, explain: 'Mity to opowieści starożytnych o bogach i bohaterach, wyjaśniające powstanie świata i zjawisk przyrody.' },
        { id: '13ctuu', q: 'Krótka opowieść z ukrytą nauką, której trzeba się domyślić, to…', options: ['przypowieść', 'powieść', 'legenda', 'mit'], answer: 0, explain: 'Przypowieść ma ukryte pouczenie. Znane przypowieści znajdziesz w Biblii.' },
        { id: 'ybef7z', q: 'Długi utwór prozą, z wieloma bohaterami i wątkami, podzielony na rozdziały, to…', options: ['powieść', 'opowiadanie', 'przypowieść', 'wiersz'], answer: 0, explain: 'Powieść jest długa i ma wiele wątków. Opowiadanie jest krótsze, ma jeden główny ciąg wydarzeń.' },
        { id: 'ockolf', q: 'Jaki środek zastosowano w wyrażeniu „ciemna noc”?', options: ['epitet', 'porównanie', 'wyliczenie', 'rym'], answer: 0, explain: 'Przymiotnik „ciemna” określa rzeczownik „noc” – to epitet.' },
        { id: 'othxa1', q: 'Jaki środek zastosowano w zdaniu „Pędził jak strzała.”?', options: ['porównanie', 'epitet', 'wyliczenie', 'wyraz dźwiękonaśladowczy'], answer: 0, explain: 'Słowo „jak” zestawia biegnącego ze strzałą – to porównanie.' },
        { id: 'm8kbtb', q: 'Jaki środek zastosowano: „Bum! Trach! Coś spadło ze stołu.”?', options: ['wyrazy dźwiękonaśladowcze', 'porównanie', 'epitet', 'przenośnia'], answer: 0, explain: '„Bum” i „trach” naśladują dźwięki – to wyrazy dźwiękonaśladowcze.' },
        { id: 'qu3b4t', q: 'Jaki środek zastosowano: „Na łące rosną maki, chabry, rumianki i stokrotki.”?', options: ['wyliczenie', 'porównanie', 'rym', 'wyraz dźwiękonaśladowczy'], answer: 0, explain: 'Wymieniono po kolei kilka kwiatów – to wyliczenie.' },
        { id: 'w5m98q', q: 'Które wyrazy się rymują?', options: ['kotek – płotek', 'kotek – piesek', 'płotek – brama', 'dom – ogród'], answer: 0, explain: 'Końcówki „-otek” brzmią tak samo – to rym.' },
        { id: 'sk8ch5', q: 'Jaki środek zastosowano: „Jesień rozłożyła na trawnikach dywan z liści.”?', options: ['przenośnię', 'porównanie', 'wyliczenie', 'wyraz dźwiękonaśladowczy'], answer: 0, explain: 'Nie ma tu prawdziwego dywanu – liście tylko przypominają dywan. To przenośnia (metafora). Brak słowa „jak”, więc to nie porównanie.' },
      ],
    },
    {
      id: 'czesci-mowy',
      name: 'Części mowy',
      chapter: 'rozdziały II–V (rzeczownik, przymiotnik, czasownik, przysłówek)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 3 „Świadomość języka”, wym. 1 (odmienne i nieodmienne części mowy, kategorie gramatyczne), wym. 3 (części mowy a części zdania – tylko rozpoznawanie), wym. 10 (pojęcia: rzeczownik, czasownik, przymiotnik, przysłówek, liczebnik, zaimek, spójnik, przyimek, liczba, osoba, rodzaj, przypadek, czas, tryb, stopniowanie). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Części mowy odmienne</h3>
        <p><b>Części mowy</b> to grupy wyrazów, które mają podobne zadania. <b>Odmienne</b> zmieniają swoją formę (końcówkę): <i>kot – kota – kotem</i>.</p>
        <table>
          <tr><th>Część mowy</th><th>Pytania</th><th>Przykłady</th></tr>
          <tr><td><b>rzeczownik</b> – nazwy osób, zwierząt, rzeczy, miejsc</td><td>kto? co?</td><td>Ola, pies, rower, Kraków</td></tr>
          <tr><td><b>czasownik</b> – czynności i stany</td><td>co robi? co się z nim dzieje?</td><td>biega, czyta, śpi</td></tr>
          <tr><td><b>przymiotnik</b> – cechy</td><td>jaki? jaka? jakie? czyj?</td><td>mały, zielona, wesołe</td></tr>
          <tr><td><b>liczebnik</b> – liczba lub kolejność</td><td>ile? który z kolei?</td><td>trzy, pięć, pierwszy</td></tr>
          <tr><td><b>zaimek</b> – zastępuje inne wyrazy</td><td>–</td><td>ja, ty, on, my, mój, ten</td></tr>
        </table>
        <h3>Części mowy nieodmienne</h3>
        <p><b>Nieodmienne</b> mają zawsze tę samą formę.</p>
        <table>
          <tr><th>Część mowy</th><th>Do czego służy</th><th>Przykłady</th></tr>
          <tr><td><b>przysłówek</b></td><td>mówi, jak? kiedy? gdzie? ktoś coś robi</td><td>szybko, głośno, wczoraj, daleko</td></tr>
          <tr><td><b>przyimek</b></td><td>stoi przed rzeczownikiem, pokazuje np. miejsce</td><td>na, w, pod, nad, za, obok, do, z</td></tr>
          <tr><td><b>spójnik</b></td><td>łączy wyrazy lub zdania</td><td>i, oraz, a, ale, lub, albo, bo, że</td></tr>
        </table>
        <h3>Rzeczownik – liczba, rodzaj, przypadek</h3>
        <ul>
          <li><b>Liczba</b>: pojedyncza (<i>kot</i>) i mnoga (<i>koty</i>).</li>
          <li><b>Rodzaj</b>: męski – <i>ten</i> stół, żeński – <i>ta</i> lampa, nijaki – <i>to</i> okno.</li>
          <li><b>Przypadek</b> – rzeczownik odmienia się przez 7 przypadków:</li>
        </ul>
        <table>
          <tr><th>Przypadek</th><th>Pytania</th><th>Przykład</th></tr>
          <tr><td>mianownik</td><td>kto? co?</td><td>(jest) mama</td></tr>
          <tr><td>dopełniacz</td><td>kogo? czego?</td><td>(nie ma) mamy</td></tr>
          <tr><td>celownik</td><td>komu? czemu?</td><td>(daję) mamie</td></tr>
          <tr><td>biernik</td><td>kogo? co?</td><td>(widzę) mamę</td></tr>
          <tr><td>narzędnik</td><td>(z) kim? (z) czym?</td><td>(idę z) mamą</td></tr>
          <tr><td>miejscownik</td><td>o kim? o czym?</td><td>(myślę o) mamie</td></tr>
          <tr><td>wołacz</td><td>o!</td><td>mamo!</td></tr>
        </table>
        <h3>Czasownik – osoba, liczba, czas, tryb</h3>
        <table>
          <tr><th>Osoba</th><th>Liczba pojedyncza</th><th>Liczba mnoga</th></tr>
          <tr><td>1. (ja, my)</td><td>czytam</td><td>czytamy</td></tr>
          <tr><td>2. (ty, wy)</td><td>czytasz</td><td>czytacie</td></tr>
          <tr><td>3. (on, ona, ono, oni, one)</td><td>czyta</td><td>czytają</td></tr>
        </table>
        <ul>
          <li><b>Czas</b>: przeszły (<i>czytałem</i>), teraźniejszy (<i>czytam</i>), przyszły (<i>będę czytać, przeczytam</i>).</li>
          <li><b>Tryb</b>: oznajmujący – mówi, co się dzieje (<i>czytam</i>); rozkazujący – polecenie (<i>czytaj!</i>); przypuszczający – coś, co mogłoby się zdarzyć (<i>czytałbym</i>).</li>
        </ul>
        <h3>Stopniowanie</h3>
        <p>Przymiotniki i wiele przysłówków się <b>stopniuje</b>:</p>
        <table>
          <tr><th>równy</th><th>wyższy</th><th>najwyższy</th></tr>
          <tr><td>ładny</td><td>ładniejszy</td><td>najładniejszy</td></tr>
          <tr><td>dobry</td><td>lepszy</td><td>najlepszy</td></tr>
          <tr><td>zły</td><td>gorszy</td><td>najgorszy</td></tr>
          <tr><td>szybko</td><td>szybciej</td><td>najszybciej</td></tr>
          <tr><td>interesujący</td><td>bardziej interesujący</td><td>najbardziej interesujący</td></tr>
        </table>
        <div class="tip">💡 Nie wiesz, jaka to część mowy? Zadaj pytanie! <i>Kto? co?</i> – rzeczownik, <i>co robi?</i> – czasownik, <i>jaki?</i> – przymiotnik, <i>ile?</i> – liczebnik, <i>jak?</i> – przysłówek.</div>
      `,
      flashcards: [
        ['Rzeczownik', 'Nazywa osoby, zwierzęta, rzeczy, miejsca; pytania: kto? co?'],
        ['Czasownik', 'Nazywa czynności i stany; pytania: co robi? co się z nim dzieje?'],
        ['Przymiotnik', 'Nazywa cechy; pytania: jaki? jaka? jakie? czyj?'],
        ['Liczebnik', 'Liczba lub kolejność; pytania: ile? który z kolei?'],
        ['Zaimek', 'Zastępuje inne wyrazy, np. ja, ty, on, mój, ten'],
        ['Przysłówek', 'Nieodmienny; mówi jak? kiedy? gdzie? – szybko, wczoraj'],
        ['Przyimek', 'Nieodmienny; stoi przed rzeczownikiem: na, w, pod, nad, do'],
        ['Spójnik', 'Nieodmienny; łączy wyrazy lub zdania: i, a, ale, bo, że'],
        ['7 przypadków', 'mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik, wołacz'],
        ['Tryby czasownika', 'oznajmujący (czytam), rozkazujący (czytaj!), przypuszczający (czytałbym)'],
        ['Stopnie przymiotnika', 'równy, wyższy, najwyższy: dobry – lepszy – najlepszy'],
      ],
      questions: [
        { id: 'rgjrdi', q: 'Jaką częścią mowy jest wyraz „rower”?', options: ['rzeczownikiem', 'czasownikiem', 'przymiotnikiem', 'przysłówkiem'], answer: 0, explain: 'Pytamy: co? – rower. To nazwa rzeczy, czyli rzeczownik.' },
        { id: 'ycdj9b', q: 'Jaką częścią mowy jest wyraz „biegnie”?', options: ['czasownikiem', 'rzeczownikiem', 'liczebnikiem', 'spójnikiem'], answer: 0, explain: 'Pytamy: co robi? – biegnie. To czynność, czyli czasownik.' },
        { id: '6mkrgr', q: 'W zdaniu „Ala ma zielony plecak” przymiotnikiem jest…', options: ['zielony', 'Ala', 'ma', 'plecak'], answer: 0, explain: 'Pytamy: jaki plecak? – zielony. Przymiotnik nazywa cechę.' },
        { id: '6qrtm0', q: 'Jaką częścią mowy jest wyraz „trzy”?', options: ['liczebnikiem', 'przymiotnikiem', 'zaimkiem', 'przyimkiem'], answer: 0, explain: 'Pytamy: ile? – trzy. Liczebnik podaje liczbę.' },
        { id: 'mifpgk', q: 'Który wyraz jest zaimkiem?', options: ['ona', 'okno', 'oto', 'obok'], answer: 0, explain: '„Ona” zastępuje rzeczownik, np. imię dziewczynki – to zaimek.' },
        { id: 'fjou7r', q: 'Który wyraz jest przysłówkiem?', options: ['szybko', 'szybki', 'szybkość', 'przyspieszać'], answer: 0, explain: 'Pytamy: jak biegnie? – szybko. To przysłówek. „Szybki” to przymiotnik, „szybkość” – rzeczownik, „przyspieszać” – czasownik.' },
        { id: '95mqmz', q: 'W zdaniu „Kot śpi pod stołem” przyimkiem jest…', options: ['pod', 'kot', 'śpi', 'stołem'], answer: 0, explain: 'Przyimek „pod” stoi przed rzeczownikiem i pokazuje, gdzie śpi kot.' },
        { id: '2b7mxm', q: 'W zdaniu „Lubię lody i ciastka” spójnikiem jest…', options: ['i', 'lubię', 'lody', 'ciastka'], answer: 0, explain: 'Spójnik „i” łączy dwa wyrazy: lody i ciastka.' },
        { id: 'wsalp1', q: 'W której grupie są same części mowy nieodmienne?', options: ['szybko, na, ale', 'dom, na, ale', 'szybko, mały, i', 'pies, biega, bo'], answer: 0, explain: '„Szybko” (przysłówek), „na” (przyimek), „ale” (spójnik) – wszystkie są nieodmienne.' },
        { id: 'ijx3tr', q: 'W jakim przypadku jest wyraz „psem” w zdaniu „Idę na spacer z psem”?', options: ['w narzędniku', 'w mianowniku', 'w dopełniaczu', 'w celowniku'], answer: 0, explain: 'Pytamy: z kim? – z psem. To pytanie narzędnika.' },
        { id: '6e355q', q: 'Na jakie pytania odpowiada dopełniacz?', options: ['kogo? czego?', 'kto? co?', 'komu? czemu?', 'o kim? o czym?'], answer: 0, explain: 'Dopełniacz: kogo? czego? – np. nie ma mamy.' },
        { id: 'jq307c', q: 'Jaki rodzaj ma rzeczownik „okno”?', options: ['nijaki', 'męski', 'żeński'], answer: 0, explain: 'Mówimy „to okno” – słówko „to” wskazuje rodzaj nijaki.' },
        { id: 'on6k57', q: 'W jakim czasie jest czasownik „pojadę”?', options: ['w przyszłym', 'w przeszłym', 'w teraźniejszym'], answer: 0, explain: '„Pojadę” – to się dopiero wydarzy, więc to czas przyszły.' },
        { id: 'd2pupz', q: 'Który czasownik jest w trybie rozkazującym?', options: ['posprzątaj', 'posprzątałem', 'posprzątam', 'posprzątałbym'], answer: 0, explain: '„Posprzątaj!” to polecenie – tryb rozkazujący. „Posprzątałbym” to tryb przypuszczający.' },
        { id: 'c85mk1', q: 'Jaka jest osoba i liczba czasownika „czytamy”?', options: ['1. osoba, liczba mnoga', '1. osoba, liczba pojedyncza', '2. osoba, liczba mnoga', '3. osoba, liczba mnoga'], answer: 0, explain: '„My czytamy” – zaimek „my” to 1. osoba liczby mnogiej.' },
        { id: '2sfnp3', q: 'Jaki jest stopień najwyższy przymiotnika „dobry”?', options: ['najlepszy', 'najdobrzejszy', 'lepszy', 'bardziej dobry'], answer: 0, explain: '„Dobry” stopniuje się nieregularnie: dobry – lepszy – najlepszy.' },
      ],
    },
    {
      id: 'formy-wypowiedzi',
      name: 'Notatka, plan, opowiadanie, opis, list',
      chapter: 'rozdziały II–VII (notatka, opis, plan, opowiadanie)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 4 „Tworzenie wypowiedzi”, wym. 1 (notatki w różnych formach), wym. 2 (pytania do tekstu, plan odtwórczy), wym. 3 (korespondencja tradycyjna i elektroniczna), wym. 4 (opinia i jej uzasadnienie), wym. 5 (opis przedmiotu), wym. 6–7 (opowiadanie, kompozycja i układ graficzny), wym. 8 (pojęcia: opinia, opis, opowiadanie, list tradycyjny i elektroniczny, akapit, wstęp, rozwinięcie, zakończenie). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Notatka</h3>
        <p><b>Notatka</b> to krótki zapis najważniejszych informacji. Możesz ją zrobić jako:</p>
        <ul>
          <li><b>punkty</b> – informacje jedna pod drugą,</li>
          <li><b>tabelę</b>,</li>
          <li><b>mapę myśli</b> – temat w środku kartki, a wokół gałęzie z najważniejszymi informacjami.</li>
        </ul>
        <h3>Pytania do tekstu i plan</h3>
        <p>Żeby dobrze zrozumieć tekst, zadaj pytania: <i>kto? co? gdzie? kiedy? dlaczego? jak się skończyło?</i></p>
        <p><b>Plan odtwórczy</b> (plan wydarzeń) to najważniejsze wydarzenia z tekstu zapisane w punktach, w tej samej kolejności co w tekście. Plan ma być <b>jednolity</b>: wszystkie punkty to zdania albo wszystkie to równoważniki zdań.</p>
        <table>
          <tr><th>Plan w równoważnikach</th><th>Plan w zdaniach</th></tr>
          <tr><td>1. Wyjazd na wycieczkę.<br>2. Zgubienie mapy.<br>3. Szczęśliwy powrót.</td><td>1. Klasa wyjeżdża na wycieczkę.<br>2. Uczniowie gubią mapę.<br>3. Wszyscy szczęśliwie wracają.</td></tr>
        </table>
        <h3>Opowiadanie</h3>
        <table>
          <tr><th>Część</th><th>Co w niej piszesz</th></tr>
          <tr><td><b>wstęp</b></td><td>kto? gdzie? kiedy? – przedstawiasz bohaterów, miejsce i czas</td></tr>
          <tr><td><b>rozwinięcie</b></td><td>wydarzenia po kolei, także to najciekawsze</td></tr>
          <tr><td><b>zakończenie</b></td><td>jak się skończyło, co z tego wynika, co czułeś</td></tr>
        </table>
        <ul>
          <li>Każdą nową część zaczynasz od nowej linii, z wcięciem – to <b>akapit</b>.</li>
          <li>Kolejność wydarzeń pokazują słowa: <i>najpierw, potem, następnie, nagle, w końcu</i>.</li>
        </ul>
        <h3>Opis przedmiotu</h3>
        <ol>
          <li>Nazwa przedmiotu i ogólny wygląd (kształt, wielkość, kolor).</li>
          <li>Szczegóły: części, materiał, zdobienia.</li>
          <li>Do czego służy.</li>
          <li>Twoja opinia: co o nim myślisz, dlaczego jest dla ciebie ważny.</li>
        </ol>
        <div class="tip">💡 Opisujesz od ogółu do szczegółu. Pomagają przymiotniki: okrągły, drewniany, gładki, kolorowy.</div>
        <h3>List i e-mail</h3>
        <table>
          <tr><th>List tradycyjny</th><th>E-mail</th></tr>
          <tr><td>miejscowość i data – w prawym górnym rogu (Kraków, 5 listopada 2026 r.)</td><td>adres odbiorcy i <b>temat</b> wiadomości</td></tr>
          <tr><td>zwrot do adresata: Droga Babciu,</td><td>zwrot do adresata: Szanowna Pani, / Cześć, Olku,</td></tr>
          <tr><td>treść: wstęp, rozwinięcie, zakończenie</td><td>treść – krótko i na temat</td></tr>
          <tr><td>pozdrowienia i podpis</td><td>pozdrowienia i podpis</td></tr>
        </table>
        <p>W listach z szacunku piszemy wielką literą zaimki i zwroty do adresata: <i>Ty, Ciebie, Ci, Pani</i>. Do dorosłych piszemy oficjalnie, do kolegów – swobodniej, ale też grzecznie.</p>
        <h3>Opinia</h3>
        <p><b>Opinia</b> to twoje zdanie o czymś. Zawsze ją <b>uzasadnij</b>, czyli powiedz dlaczego.</p>
        <p><i>Moim zdaniem</i> / <i>Uważam, że</i> ta książka jest ciekawa, <i>ponieważ</i> / <i>bo</i> / <i>dlatego że</i> ma zaskakujące zakończenie.</p>
      `,
      flashcards: [
        ['Notatka', 'Krótki zapis najważniejszych informacji: punkty, tabela, mapa myśli'],
        ['Mapa myśli', 'Temat w środku, wokół gałęzie z najważniejszymi informacjami'],
        ['Plan odtwórczy', 'Wydarzenia z tekstu w punktach, w tej samej kolejności'],
        ['Plan jednolity', 'Same zdania albo same równoważniki zdań'],
        ['Wstęp opowiadania', 'Kto? Gdzie? Kiedy?'],
        ['Akapit', 'Fragment tekstu zaczynający się od nowej linii, z wcięciem'],
        ['Opis przedmiotu – kolejność', 'nazwa i ogólny wygląd → szczegóły → do czego służy → opinia'],
        ['Elementy listu', 'miejscowość i data, zwrot do adresata, treść, pozdrowienia, podpis'],
        ['E-mail – co dodatkowo?', 'Adres odbiorcy i temat wiadomości'],
        ['Opinia', 'Twoje zdanie + uzasadnienie (bo, ponieważ, dlatego że)'],
      ],
      questions: [
        { id: '43oisu', q: 'Co piszesz we wstępie opowiadania?', options: ['kto, gdzie i kiedy – bohaterów, miejsce i czas', 'jak się wszystko skończyło', 'podpis i pozdrowienia', 'tylko tytuł'], answer: 0, explain: 'We wstępie przedstawiasz bohaterów, miejsce i czas wydarzeń.' },
        { id: 'dez1tx', q: 'Z jakich trzech części składa się opowiadanie?', options: ['wstęp, rozwinięcie, zakończenie', 'tytuł, data, podpis', 'pytanie, hipoteza, wniosek', 'zwrot, treść, pozdrowienia'], answer: 0, explain: 'Opowiadanie ma budowę trójdzielną: wstęp, rozwinięcie i zakończenie.' },
        { id: 'mppiif', q: 'Akapit to…', options: ['fragment tekstu zaczynający się od nowej linii, z wcięciem', 'ostatnie zdanie tekstu', 'tytuł rozdziału', 'znak interpunkcyjny'], answer: 0, explain: 'Nowa myśl lub nowa część tekstu – nowy akapit.' },
        { id: '97nymj', q: 'Które słowo pomoże ci pokazać kolejność wydarzeń w opowiadaniu?', options: ['następnie', 'zielony', 'bardzo', 'ponieważ'], answer: 0, explain: 'Słowa „najpierw”, „następnie”, „w końcu” porządkują wydarzenia.' },
        { id: 'uwbcxl', q: 'Plan odtwórczy to…', options: ['wydarzenia z tekstu w punktach, w tej samej kolejności', 'opis wyglądu bohatera', 'lista słów, których nie rozumiesz', 'twoja opinia o tekście'], answer: 0, explain: 'Plan odtwórczy odtwarza, czyli powtarza po kolei, wydarzenia z tekstu.' },
        { id: 'veplvj', q: 'Który plan jest jednolity?', options: ['1. Wyjazd na wycieczkę. 2. Zgubienie mapy. 3. Szczęśliwy powrót.', '1. Wyjazd na wycieczkę. 2. Uczniowie gubią mapę. 3. Szczęśliwy powrót.', '1. Klasa wyjeżdża. 2. Zgubienie mapy. 3. Wszyscy wracają.'], answer: 0, explain: 'W pierwszym planie wszystkie punkty to równoważniki zdań (bez czasowników). W pozostałych są pomieszane zdania i równoważniki.' },
        { id: 'o0iqxx', q: 'Gdzie w mapie myśli zapisujesz temat?', options: ['w środku', 'w prawym dolnym rogu', 'na samym dole', 'na odwrocie kartki'], answer: 0, explain: 'Temat jest w środku, a od niego rozchodzą się gałęzie z informacjami.' },
        { id: 'cc8n0y', q: 'Gdzie w liście tradycyjnym piszesz miejscowość i datę?', options: ['w prawym górnym rogu', 'w lewym dolnym rogu', 'pod podpisem', 'w środku listu'], answer: 0, explain: 'Miejscowość i datę zapisujemy na górze, po prawej stronie.' },
        { id: 'v2xvol', q: 'Co piszesz pod pozdrowieniami na końcu listu?', options: ['podpis', 'datę', 'zwrot do adresata', 'temat'], answer: 0, explain: 'Po pozdrowieniach podpisujesz się, żeby adresat wiedział, kto napisał list.' },
        { id: 'yip2sb', q: 'Jak zapiszesz zaimek w liście do kolegi, żeby okazać mu szacunek?\n„Dziękuję _ za prezent.”', options: ['Ci', 'ci', 'CI'], answer: 0, explain: 'W listach z szacunku piszemy zaimki odnoszące się do adresata wielką literą: Ty, Ciebie, Ci.' },
        { id: 'w50w45', q: 'Co ma e-mail, czego zwykle nie ma list tradycyjny?', options: ['temat wiadomości', 'podpis', 'pozdrowienia', 'zwrot do adresata'], answer: 0, explain: 'W e-mailu wpisujesz adres odbiorcy i temat. Zwrot, pozdrowienia i podpis są w obu formach.' },
        { id: 'a6meo6', q: 'Jak grzecznie zaczniesz e-mail do nauczycielki?', options: ['Szanowna Pani,', 'Siema!', 'Hej, Pani!', 'Elo,'], answer: 0, explain: 'Do dorosłych piszemy oficjalnie: „Szanowna Pani,” albo „Dzień dobry,”.' },
        { id: 'ba8f7i', q: 'Od czego zaczniesz opis przedmiotu?', options: ['od nazwy przedmiotu i jego ogólnego wyglądu', 'od najmniejszego szczegółu', 'od podpisu', 'od tego, ile kosztował'], answer: 0, explain: 'Opis prowadzimy od ogółu do szczegółu: najpierw nazwa i ogólny wygląd, potem szczegóły.' },
        { id: 'fr7rek', q: 'Które zdanie to opinia z uzasadnieniem?', options: ['Moim zdaniem ta książka jest ciekawa, bo ma zaskakujące zakończenie.', 'Ta książka ma 120 stron.', 'Książka jest ciekawa.', 'Przeczytałem tę książkę w tydzień.'], answer: 0, explain: 'Jest tu opinia („moim zdaniem… ciekawa”) i uzasadnienie („bo ma zaskakujące zakończenie”).' },
        { id: '8ddoax', q: 'Które słowo wprowadza uzasadnienie opinii?', options: ['ponieważ', 'najpierw', 'nagle', 'wczoraj'], answer: 0, explain: '„Ponieważ”, „bo”, „dlatego że” – po nich podajesz powód swojej opinii.' },
      ],
    },
    {
      id: 'slownictwo',
      name: 'Słownictwo i słowniki',
      chapter: 'rozdziały III i VI (synonimy, antonimy)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 3 „Świadomość języka”, wym. 2 (nacechowanie emocjonalne wyrazów), wym. 5 (znaczenie wyrazów w kontekście, słowniki), wym. 6 (wyrazy neutralne i wartościujące, bliskoznaczne i przeciwstawne, związki frazeologiczne), wym. 7 (znaczenie dosłowne i przenośne), wym. 10 (pojęcia: synonim, antonim, związek frazeologiczny). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Synonimy i antonimy</h3>
        <ul>
          <li><b>Synonimy</b> (wyrazy bliskoznaczne) znaczą to samo lub prawie to samo: <i>duży – wielki, wesoły – radosny, szybki – prędki</i>. Dzięki nim nie powtarzasz ciągle tego samego słowa.</li>
          <li><b>Antonimy</b> (wyrazy przeciwstawne) znaczą coś przeciwnego: <i>wysoki – niski, ciepły – zimny, dzień – noc</i>.</li>
        </ul>
        <h3>Związki frazeologiczne</h3>
        <p><b>Związek frazeologiczny</b> to utarte połączenie wyrazów, które ma znaczenie <b>przenośne</b>. Nie da się go zrozumieć, tłumacząc słowo po słowie.</p>
        <table>
          <tr><th>Związek</th><th>Znaczenie</th></tr>
          <tr><td>mieć muchy w nosie</td><td>być obrażonym, w złym humorze</td></tr>
          <tr><td>trzymać język za zębami</td><td>nie zdradzić tajemnicy</td></tr>
          <tr><td>bujać w obłokach</td><td>marzyć, nie skupiać się na tym, co się dzieje</td></tr>
          <tr><td>mieć dwie lewe ręce</td><td>być niezgrabnym w pracach ręcznych</td></tr>
          <tr><td>spać jak suseł</td><td>spać mocno, twardo</td></tr>
          <tr><td>kamień spadł mi z serca</td><td>poczułem ulgę</td></tr>
          <tr><td>jak grom z jasnego nieba</td><td>nagle, niespodziewanie</td></tr>
        </table>
        <h3>Dosłownie czy w przenośni?</h3>
        <ul>
          <li><b>Znaczenie dosłowne</b> – zwykłe, podstawowe: <i>złoty pierścionek</i> (zrobiony ze złota).</li>
          <li><b>Znaczenie przenośne</b> – wyraz znaczy coś innego niż zwykle: <i>złote serce</i> (ktoś jest bardzo dobry).</li>
        </ul>
        <h3>Wyrazy neutralne i wartościujące</h3>
        <ul>
          <li><b>Neutralne</b> – tylko nazywają: <i>pies, dom, ręka</i>.</li>
          <li><b>Zdrobnienia</b> – pokazują, że coś jest małe albo miłe: <i>piesek, domek, rączka</i>.</li>
          <li><b>Zgrubienia</b> – pokazują, że coś jest duże albo niemiłe: <i>psisko, domisko, łapsko</i>.</li>
        </ul>
        <div class="tip">💡 Ten sam pies może być „pieskiem” albo „psiskiem” – wybór słowa zdradza, co czujesz.</div>
        <h3>Słowniki</h3>
        <table>
          <tr><th>Słownik</th><th>Co w nim znajdziesz</th></tr>
          <tr><td>języka polskiego</td><td>znaczenie wyrazów</td></tr>
          <tr><td>ortograficzny</td><td>jak poprawnie zapisać wyraz</td></tr>
          <tr><td>wyrazów bliskoznacznych (synonimów)</td><td>wyrazy o podobnym znaczeniu</td></tr>
          <tr><td>frazeologiczny</td><td>związki frazeologiczne i ich znaczenie</td></tr>
        </table>
        <p>Wyrazy w słowniku są ułożone <b>alfabetycznie</b>. Wiele słowników jest dostępnych także w internecie.</p>
      `,
      flashcards: [
        ['Synonim', 'Wyraz bliskoznaczny: duży – wielki'],
        ['Antonim', 'Wyraz przeciwstawny: wysoki – niski'],
        ['Związek frazeologiczny', 'Utarte połączenie wyrazów o znaczeniu przenośnym'],
        ['Mieć muchy w nosie', 'Być obrażonym, w złym humorze'],
        ['Trzymać język za zębami', 'Nie zdradzić tajemnicy'],
        ['Bujać w obłokach', 'Marzyć, nie skupiać się na tym, co się dzieje'],
        ['Znaczenie przenośne', 'Wyraz znaczy coś innego niż zwykle: złote serce'],
        ['Zdrobnienie', 'Wyraz pokazujący coś małego lub miłego: piesek'],
        ['Zgrubienie', 'Wyraz pokazujący coś dużego lub niemiłego: psisko'],
        ['Słownik ortograficzny', 'Pokazuje, jak poprawnie zapisać wyraz'],
      ],
      questions: [
        { id: 'gztj1o', q: 'Który wyraz jest synonimem słowa „wesoły”?', options: ['radosny', 'smutny', 'zmęczony', 'cichy'], answer: 0, explain: 'Wesoły i radosny znaczą prawie to samo – to synonimy.' },
        { id: 'eb0ig7', q: 'Który wyraz jest antonimem słowa „głośny”?', options: ['cichy', 'hałaśliwy', 'donośny', 'gromki'], answer: 0, explain: 'Cichy to przeciwieństwo głośnego. Pozostałe wyrazy znaczą podobnie jak „głośny”.' },
        { id: '42mi14', q: 'Która para wyrazów to antonimy?', options: ['stary – młody', 'mały – niewielki', 'mądry – bystry', 'piękny – śliczny'], answer: 0, explain: 'Stary i młody mają przeciwne znaczenia. Pozostałe pary to synonimy.' },
        { id: 'igpphi', q: 'Która para wyrazów to synonimy?', options: ['mały – niewielki', 'mały – duży', 'zimny – gorący', 'dzień – noc'], answer: 0, explain: 'Mały i niewielki znaczą prawie to samo.' },
        { id: '5jjkd5', q: 'Co znaczy „mieć muchy w nosie”?', options: ['być obrażonym, w złym humorze', 'mieć katar', 'bać się owadów', 'być bardzo wesołym'], answer: 0, explain: 'To związek frazeologiczny – jego znaczenie jest przenośne: ktoś jest obrażony.' },
        { id: 'mjju00', q: 'Co znaczy „mieć dwie lewe ręce”?', options: ['być niezgrabnym w pracach ręcznych', 'być leworęcznym', 'umieć pisać obiema rękami', 'mieć dużo pracy'], answer: 0, explain: 'Tak mówimy o kimś, komu nie wychodzą prace ręczne, np. majsterkowanie.' },
        { id: '677q9f', q: 'Co znaczy „trzymać język za zębami”?', options: ['nie zdradzić tajemnicy', 'mieć chory ząb', 'mówić bardzo głośno', 'jeść powoli'], answer: 0, explain: 'Kto trzyma język za zębami, nie mówi za dużo i dochowuje tajemnicy.' },
        { id: 'oonndl', q: 'Pani mówi: „Tomek, nie bujaj w obłokach!”. Co robi Tomek?', options: ['marzy i nie słucha lekcji', 'huśta się na huśtawce', 'leci samolotem', 'rysuje chmury'], answer: 0, explain: '„Bujać w obłokach” to marzyć i nie skupiać się na tym, co się dzieje.' },
        { id: '6dkls1', q: 'W którym zdaniu wyraz „złote” ma znaczenie przenośne?', options: ['Babcia ma złote serce.', 'Mama ma złote kolczyki.', 'Na wystawie leżą złote monety.', 'Król miał złotą koronę.'], answer: 0, explain: '„Złote serce” znaczy, że babcia jest bardzo dobra. W pozostałych zdaniach rzeczy są naprawdę ze złota.' },
        { id: '8ccube', q: 'W którym zdaniu wyraz „ostry” ma znaczenie dosłowne?', options: ['Uważaj, ten nóż jest ostry.', 'Trener był dziś ostry dla drużyny.', 'Kasia ma ostry język.'], answer: 0, explain: 'Nóż naprawdę jest ostry – może skaleczyć. W pozostałych zdaniach „ostry” znaczy „surowy” lub „złośliwy”.' },
        { id: 'czawls', q: 'Które słowo jest zdrobnieniem od „kot”?', options: ['kotek', 'kocisko', 'kocur', 'koty'], answer: 0, explain: 'Kotek – zdrobnienie, pokazuje coś małego lub miłego. Kocisko to zgrubienie.' },
        { id: 'aaqnrk', q: 'Który wyraz jest zgrubieniem?', options: ['psisko', 'piesek', 'pies', 'szczeniak'], answer: 0, explain: 'Psisko to zgrubienie – pokazuje dużego psa albo niechęć do niego.' },
        { id: 'txhh2i', q: 'Gdzie sprawdzisz, jak poprawnie zapisać wyraz?', options: ['w słowniku ortograficznym', 'w słowniku frazeologicznym', 'w atlasie', 'w słowniku wyrazów bliskoznacznych'], answer: 0, explain: 'Słownik ortograficzny pokazuje poprawną pisownię wyrazów.' },
        { id: '3cs9rj', q: 'Szukasz innego słowa zamiast „ładny”, żeby się nie powtarzać. Którego słownika użyjesz?', options: ['wyrazów bliskoznacznych', 'ortograficznego', 'frazeologicznego', 'żadnego – to niemożliwe'], answer: 0, explain: 'Słownik wyrazów bliskoznacznych (synonimów) podpowie np. „śliczny”, „piękny”.' },
        { id: 'no0ogf', q: 'Prawda czy fałsz?\n„Spać jak suseł” znaczy „spać mocno, twardo”.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'To związek frazeologiczny o kimś, kto śpi bardzo mocno.' },
      ],
    },
    {
      id: 'komunikacja',
      name: 'Komunikacja i media',
      chapter: 'rozdziały III i VI (komunikacja)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 1 „Komunikacja”, wym. 1–9 (nadawca, odbiorca, intencja wypowiedzi, komunikat niewerbalny, grzeczność językowa, uważne słuchanie); dz. 6 „Elementy edukacji medialnej”, wym. 1–2, 4–5 (wyszukiwanie informacji, fakt a opinia, wpływ reklamy, higiena cyfrowa). Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Kto mówi i do kogo?</h3>
        <p><b>Komunikacja</b> to przekazywanie informacji, myśli i uczuć innym ludziom. Biorą w niej udział:</p>
        <table>
          <tr><th>Pojęcie</th><th>Co to znaczy</th><th>Przykład</th></tr>
          <tr><td><b>nadawca</b></td><td>ten, kto przekazuje wiadomość</td><td>mama, która pisze SMS</td></tr>
          <tr><td><b>odbiorca</b></td><td>ten, kto wiadomość odbiera</td><td>Kuba, który czyta SMS</td></tr>
          <tr><td><b>komunikat</b></td><td>to, co zostaje przekazane</td><td>„Wróć na obiad o 14.”</td></tr>
          <tr><td><b>intencja</b></td><td>cel, po co ktoś mówi lub pisze</td><td>prośba, pytanie, podziękowanie</td></tr>
        </table>
        <p>Najczęstsze <b>intencje</b>: poinformować, zapytać, poprosić, podziękować, przeprosić, ostrzec, pochwalić, przekonać.</p>
        <h3>Słowa i mowa ciała</h3>
        <p>Komunikat może być <b>słowny</b> (mówiony lub pisany) albo <b>niewerbalny</b> – bez słów. Komunikaty niewerbalne to np. <b>mimika</b> (wyraz twarzy), <b>gesty</b>, <b>postawa ciała</b>, spojrzenie.</p>
        <ul>
          <li>👍 kciuk w górę – „super”, „zgoda”,</li>
          <li>🙂 uśmiech – życzliwość, radość,</li>
          <li>👋 machanie ręką – powitanie lub pożegnanie,</li>
          <li>kiwanie głową – „tak”.</li>
        </ul>
        <h3>Grzeczność językowa</h3>
        <p><b>Grzeczność językowa</b> to zwroty, które okazują szacunek: <b>proszę, dziękuję, przepraszam</b>. Słowa dobieramy do sytuacji i odbiorcy.</p>
        <table>
          <tr><th>Do kolegi (nieoficjalnie)</th><th>Do dorosłego (oficjalnie)</th></tr>
          <tr><td>Cześć!</td><td>Dzień dobry!</td></tr>
          <tr><td>Dzięki!</td><td>Dziękuję bardzo.</td></tr>
          <tr><td>Pa!</td><td>Do widzenia.</td></tr>
          <tr><td>Pożyczysz mi gumkę?</td><td>Czy mogłaby Pani mi pomóc?</td></tr>
        </table>
        <div class="tip">💡 <b>Uważne słuchanie</b>: patrz na rozmówcę, nie przerywaj, dopytaj, jeśli czegoś nie rozumiesz.</div>
        <h3>Fakt czy opinia?</h3>
        <ul>
          <li><b>Fakt</b> – informacja, którą można sprawdzić: „Mecz zaczyna się o 17.00”.</li>
          <li><b>Opinia</b> – czyjeś zdanie, ocena: „To najlepsza drużyna na świecie”. Opinie często zaczynają się od słów: <i>moim zdaniem, uważam, że, myślę, że</i>.</li>
        </ul>
        <h3>Reklama i ekrany</h3>
        <p><b>Reklama</b> ma cię zachęcić, żebyś coś kupił albo z czegoś skorzystał. Pokazuje tylko zalety produktu. Zanim poprosisz o coś z reklamy, zastanów się, czy naprawdę tego potrzebujesz.</p>
        <p><b>Higiena cyfrowa</b> to zdrowe korzystanie z telefonu, komputera i internetu:</p>
        <ul>
          <li>rób przerwy od ekranu, ruszaj się, spotykaj się z ludźmi,</li>
          <li>odłóż telefon przed snem,</li>
          <li>długie, codzienne granie bez przerw może prowadzić do <b>uzależnienia</b> – wtedy trudno przestać,</li>
          <li>informacje z internetu sprawdzaj w kilku źródłach.</li>
        </ul>
      `,
      flashcards: [
        ['Komunikacja', 'Przekazywanie informacji, myśli i uczuć innym ludziom'],
        ['Nadawca', 'Ten, kto przekazuje wiadomość (mówi lub pisze)'],
        ['Odbiorca', 'Ten, kto odbiera wiadomość (słucha lub czyta)'],
        ['Komunikat', 'To, co nadawca przekazuje odbiorcy'],
        ['Intencja wypowiedzi', 'Cel, w jakim ktoś mówi lub pisze, np. prośba, pytanie, podziękowanie'],
        ['Komunikat niewerbalny', 'Przekaz bez słów: mimika, gesty, postawa ciała, spojrzenie'],
        ['Grzeczność językowa', 'Zwroty okazujące szacunek: proszę, dziękuję, przepraszam, dzień dobry'],
        ['Fakt', 'Informacja, którą można sprawdzić'],
        ['Opinia', 'Czyjeś zdanie, ocena; np. „moim zdaniem…”'],
        ['Higiena cyfrowa', 'Zdrowe korzystanie z ekranów: przerwy, ruch, telefon odłożony przed snem'],
      ],
      questions: [
        { id: 'qquw8w', q: 'Mama pisze do Kuby SMS: „Wróć na obiad o 14”. Kto jest nadawcą?', options: ['mama', 'Kuba', 'telefon', 'obiad'], answer: 0, explain: 'Nadawca to ten, kto przekazuje wiadomość. Wiadomość napisała mama.' },
        { id: 'suic55', q: 'Pani mówi do klasy: „Jutro przynieście kredki”. Kto jest odbiorcą?', options: ['pani', 'uczniowie', 'kredki', 'dyrektor'], answer: 1, explain: 'Odbiorca to ten, kto odbiera wiadomość – tutaj uczniowie, którzy słuchają pani.' },
        { id: 'c79uz5', q: 'Jaka jest intencja zdania: „Czy możesz pożyczyć mi linijkę?”', options: ['prośba', 'podziękowanie', 'przeprosiny', 'ostrzeżenie'], answer: 0, explain: 'Mówiący chce, żeby ktoś pożyczył mu linijkę – to prośba.' },
        { id: '9ok2ly', q: 'Jaka jest intencja napisu: „Uwaga! Śliska podłoga!”', options: ['podziękowanie', 'ostrzeżenie', 'zaproszenie', 'pochwała'], answer: 1, explain: 'Napis ma uchronić przed upadkiem – ostrzega.' },
        { id: 'qt38oz', q: 'Który komunikat jest niewerbalny (bez słów)?', options: ['kiwnięcie głową na „tak”', 'SMS „tak”', 'okrzyk „tak!”', 'list z odpowiedzią „tak”'], answer: 0, explain: 'Kiwnięcie głową to gest – przekazuje informację bez słów.' },
        { id: '4gx2s2', q: 'Uśmiech, gesty i postawa ciała to przykłady…', options: ['komunikatów niewerbalnych', 'opinii', 'faktów', 'reklam'], answer: 0, explain: 'To mowa ciała, czyli komunikaty niewerbalne.' },
        { id: 'q299pq', q: 'Jak grzecznie przywitasz panią dyrektor na korytarzu?', options: ['Dzień dobry!', 'Cześć!', 'Siema!', 'Hej, co tam?'], answer: 0, explain: 'Do dorosłych, zwłaszcza w szkole, mówimy oficjalnie: „Dzień dobry”.' },
        { id: 'u8512c', q: 'Która prośba jest grzeczna?', options: ['Podaj mi, proszę, sól.', 'Dawaj sól!', 'Sól, szybko!', 'No, podaj tę sól.'], answer: 0, explain: 'Słowo „proszę” i spokojny ton to zasady grzeczności językowej.' },
        { id: '4rbi80', q: 'Które zachowanie pokazuje, że uważnie słuchasz?', options: ['patrzysz na rozmówcę i nie przerywasz', 'przeglądasz telefon', 'mówisz w tym samym czasie', 'odwracasz się plecami'], answer: 0, explain: 'Uważny słuchacz patrzy na rozmówcę, nie przerywa i dopytuje, gdy czegoś nie rozumie.' },
        { id: 'rm1cgl', q: 'Fakt czy opinia?\n„Ten film jest najnudniejszy na świecie.”', options: ['opinia', 'fakt'], noShuffle: true, answer: 0, explain: 'To czyjaś ocena. Inna osoba może uważać, że film jest ciekawy – to opinia.' },
        { id: '1rbsqj', q: 'Które zdanie to fakt?', options: ['Mecz zaczyna się o 17.00.', 'To będzie wspaniały mecz.', 'Moim zdaniem nasi grają najlepiej.', 'Ten stadion jest brzydki.'], answer: 0, explain: 'Godzinę meczu można sprawdzić – to fakt. Pozostałe zdania to oceny, czyli opinie.' },
        { id: '8jv6xc', q: 'Po co jest reklama?', options: ['żeby zachęcić do kupienia lub skorzystania z czegoś', 'żeby pokazać wszystkie wady produktu', 'żeby uczyć ortografii', 'żeby podać prognozę pogody'], answer: 0, explain: 'Reklama ma przekonać, że warto coś kupić. Dlatego pokazuje tylko zalety.' },
        { id: 'z66xs3', q: 'Prawda czy fałsz?\nReklama zawsze mówi całą prawdę o produkcie, także o jego wadach.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Reklama pokazuje zalety, a o wadach zwykle milczy. Warto myśleć krytycznie.' },
        { id: 'e908h0', q: 'Które zachowanie to dobra higiena cyfrowa?', options: ['odkładam telefon na długo przed snem', 'gram do późnej nocy', 'jem obiad, patrząc w ekran', 'nie robię przerw od komputera'], answer: 0, explain: 'Ekran przed snem utrudnia zasypianie. Odłożony telefon to zdrowy nawyk.' },
        { id: '85i219', q: 'Prawda czy fałsz?\nCodzienne, wielogodzinne granie bez przerw może prowadzić do uzależnienia od gier.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Uzależnienie to sytuacja, gdy trudno przestać grać. Pomagają przerwy, ruch i spotkania z ludźmi.' },
      ],
    },
    {
      id: 'zdanie',
      name: 'Wypowiedzenie, zdanie i znaki',
      chapter: 'rozdziały VI i VII (typy zdań, znaki, podmiot i orzeczenie)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 3 „Świadomość języka”, wym. 4 (zdania poprawne logicznie i gramatycznie, główne części zdania i ich określenia), wym. 9 (znaki interpunkcyjne), wym. 10 (pojęcia: wypowiedzenie oznajmujące, pytające, rozkazujące, wykrzyknikowe, równoważnik zdania, zdanie pojedyncze i złożone, podmiot, orzeczenie, kropka, przecinek, znak zapytania, wykrzyknik, cudzysłów, nawias, dwukropek). Z zasad użycia przecinka wybrano tylko podstawowe. Wybór tych treści na klasę 4 – decyzja redakcyjna (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Wypowiedzenie</h3>
        <p><b>Wypowiedzenie</b> to wyraz lub kilka wyrazów, które przekazują myśl. Zaczyna się wielką literą, a kończy kropką, znakiem zapytania lub wykrzyknikiem.</p>
        <table>
          <tr><th>Rodzaj</th><th>Do czego służy</th><th>Przykład</th></tr>
          <tr><td><b>oznajmujące</b></td><td>informuje o czymś; kropka</td><td>Jutro jedziemy nad morze.</td></tr>
          <tr><td><b>pytające</b></td><td>o coś pyta; znak zapytania</td><td>Czy odrobiłeś lekcje?</td></tr>
          <tr><td><b>rozkazujące</b></td><td>wyraża polecenie lub prośbę; kropka lub wykrzyknik</td><td>Zamknij, proszę, okno.</td></tr>
          <tr><td><b>wykrzyknikowe</b></td><td>wyraża silne uczucia: radość, zdziwienie, złość; wykrzyknik</td><td>Hurra, wygraliśmy!</td></tr>
        </table>
        <h3>Zdanie czy równoważnik zdania?</h3>
        <ul>
          <li><b>Zdanie</b> ma <b>orzeczenie</b>, czyli czasownik, który mówi, co ktoś robi: <i>Na sali <b>panuje</b> cisza.</i></li>
          <li><b>Równoważnik zdania</b> nie ma takiego czasownika, a też przekazuje myśl: <i>Cisza na sali. Pożar! Dzień dobry!</i></li>
        </ul>
        <h3>Podmiot i orzeczenie</h3>
        <table>
          <tr><th>Część zdania</th><th>Pytania</th><th>„Mały pies głośno szczeka.”</th></tr>
          <tr><td><b>podmiot</b> – kto lub co wykonuje czynność</td><td>kto? co?</td><td>pies</td></tr>
          <tr><td><b>orzeczenie</b> – co robi podmiot</td><td>co robi? co się z nim dzieje?</td><td>szczeka</td></tr>
          <tr><td><b>określenia</b> – dokładniej opisują podmiot lub orzeczenie</td><td>jaki? jak?</td><td>mały, głośno</td></tr>
        </table>
        <div class="tip">💡 Szukaj najpierw orzeczenia (czasownika), a potem zapytaj: <i>kto to robi?</i> – tak znajdziesz podmiot.</div>
        <h3>Zdanie pojedyncze i złożone</h3>
        <ul>
          <li><b>Pojedyncze</b> – ma jedno orzeczenie: <i>Kasia <b>czyta</b>.</i></li>
          <li><b>Złożone</b> – ma co najmniej dwa orzeczenia: <i>Kasia <b>czyta</b>, a Tomek <b>rysuje</b>.</i></li>
        </ul>
        <h3>Znaki interpunkcyjne</h3>
        <table>
          <tr><th>Znak</th><th>Kiedy</th><th>Przykład</th></tr>
          <tr><td><b>przecinek</b></td><td>przed: <i>a, ale, lecz, że, bo, który</i></td><td>Wiem, że masz rację.</td></tr>
          <tr><td></td><td>przy wyliczaniu (bez przecinka przed <i>i</i>)</td><td>Kupiłam jabłka, gruszki i śliwki.</td></tr>
          <tr><td></td><td>przy zwrocie do kogoś</td><td>Mamo, pomożesz mi?</td></tr>
          <tr><td><b>dwukropek</b></td><td>przed wyliczeniem lub przed cudzymi słowami</td><td>Zabierz trzy rzeczy: kanapki, wodę i czapkę.</td></tr>
          <tr><td><b>cudzysłów</b></td><td>tytuły, cudze słowa</td><td>Czytam „Rotę”. Tata powiedział: „Wracamy”.</td></tr>
          <tr><td><b>nawias</b></td><td>dodatkowe wyjaśnienie</td><td>Mój brat (ma 6 lat) chodzi do zerówki.</td></tr>
        </table>
      `,
      flashcards: [
        ['Wypowiedzenie oznajmujące', 'Informuje o czymś; kończy się kropką'],
        ['Wypowiedzenie pytające', 'Pyta o coś; kończy się znakiem zapytania'],
        ['Wypowiedzenie rozkazujące', 'Wyraża polecenie lub prośbę: Zamknij, proszę, okno.'],
        ['Wypowiedzenie wykrzyknikowe', 'Wyraża silne uczucia; kończy się wykrzyknikiem'],
        ['Równoważnik zdania', 'Wypowiedzenie bez orzeczenia (czasownika): Cisza na sali.'],
        ['Podmiot', 'Kto lub co wykonuje czynność; pytania: kto? co?'],
        ['Orzeczenie', 'Co robi podmiot; pytania: co robi? co się z nim dzieje?'],
        ['Zdanie złożone', 'Zdanie z co najmniej dwoma orzeczeniami'],
        ['Przecinek przed…', 'a, ale, lecz, że, bo, który'],
        ['Dwukropek', 'Przed wyliczeniem lub przed przytoczeniem cudzych słów'],
      ],
      questions: [
        { id: 'ygsz20', q: 'Jakie to wypowiedzenie: „Jutro jedziemy nad morze.”?', options: ['oznajmujące', 'pytające', 'rozkazujące', 'wykrzyknikowe'], answer: 0, explain: 'Wypowiedzenie informuje o czymś i kończy się kropką – jest oznajmujące.' },
        { id: 'cuvyzu', q: 'Jakie to wypowiedzenie: „Czy odrobiłeś lekcje?”', options: ['pytające', 'oznajmujące', 'rozkazujące', 'wykrzyknikowe'], answer: 0, explain: 'Pyta o coś i kończy się znakiem zapytania – jest pytające.' },
        { id: 'k3vzd6', q: 'Jakie to wypowiedzenie: „Zamknij, proszę, okno.”?', options: ['rozkazujące', 'oznajmujące', 'pytające', 'wykrzyknikowe'], answer: 0, explain: 'To prośba, żeby ktoś coś zrobił – wypowiedzenie rozkazujące.' },
        { id: '8sicvm', q: 'Które wypowiedzenie jest wykrzyknikowe, czyli wyraża silne uczucia?', options: ['Hurra, wygraliśmy!', 'Wygraliśmy mecz.', 'Czy wygraliśmy?', 'Graj dalej.'], answer: 0, explain: 'Okrzyk „Hurra” wyraża radość, a na końcu jest wykrzyknik.' },
        { id: 'xd6x1f', q: 'Które wypowiedzenie jest równoważnikiem zdania?', options: ['Cisza na sali.', 'Na sali panuje cisza.', 'Uczniowie siedzą cicho.', 'Pani prosi o ciszę.'], answer: 0, explain: '„Cisza na sali” nie ma czasownika (orzeczenia), więc to równoważnik zdania.' },
        { id: 'gu7zlm', q: 'Co jest orzeczeniem w zdaniu „Mały pies głośno szczeka.”?', options: ['szczeka', 'pies', 'mały', 'głośno'], answer: 0, explain: 'Pytamy: co robi pies? – szczeka. To orzeczenie.' },
        { id: 'qxt84h', q: 'Co jest podmiotem w zdaniu „Mały pies głośno szczeka.”?', options: ['pies', 'szczeka', 'mały', 'głośno'], answer: 0, explain: 'Pytamy: kto szczeka? – pies. To podmiot.' },
        { id: 'cjrros', q: 'Na jakie pytania odpowiada podmiot?', options: ['kto? co?', 'co robi?', 'jaki? jaka?', 'gdzie? kiedy?'], answer: 0, explain: 'Podmiot odpowiada na pytania kto? co? Orzeczenie – na pytanie co robi?' },
        { id: '8specw', q: 'Jakie jest zdanie „Kasia czyta, a Tomek rysuje.”?', options: ['złożone', 'pojedyncze', 'to równoważnik zdania'], answer: 0, explain: 'Ma dwa orzeczenia: „czyta” i „rysuje”, więc jest zdaniem złożonym.' },
        { id: '8rudim', q: 'Po czym poznasz zdanie złożone?', options: ['ma co najmniej dwa orzeczenia', 'jest bardzo długie', 'kończy się wykrzyknikiem', 'nie ma podmiotu'], answer: 0, explain: 'Liczy się liczba orzeczeń, a nie długość zdania. Zdanie złożone ma co najmniej dwa orzeczenia.' },
        { id: 'm0sv5b', q: 'Które zdanie zapisano poprawnie?', options: ['Wiem, że masz rację.', 'Wiem że, masz rację.', 'Wiem że masz, rację.', 'Wiem, że, masz rację.'], answer: 0, explain: 'Przecinek stawiamy przed „że”.' },
        { id: 'jd9syk', q: 'Które zdanie zapisano poprawnie?', options: ['Mamo, pomożesz mi?', 'Mamo pomożesz mi?', 'Mamo pomożesz, mi?', 'Mamo pomożesz mi.'], answer: 0, explain: 'Zwrot do osoby („Mamo”) oddzielamy przecinkiem, a pytanie kończymy znakiem zapytania.' },
        { id: '1chai8', q: 'Które zdanie zapisano poprawnie?', options: ['W ogrodzie rosną róże, tulipany i bratki.', 'W ogrodzie rosną róże tulipany i bratki.', 'W ogrodzie rosną róże, tulipany, i bratki.', 'W ogrodzie, rosną róże, tulipany i bratki.'], answer: 0, explain: 'Wyliczane wyrazy oddzielamy przecinkami, ale przed „i” przecinka nie stawiamy.' },
        { id: '2brkur', q: 'Jaki znak wstawisz w miejsce kreski?\n„Zabierz na wycieczkę trzy rzeczy _ kanapki, wodę i czapkę.”', options: ['dwukropek', 'znak zapytania', 'nawias', 'wykrzyknik'], answer: 0, explain: 'Przed wyliczeniem, które zapowiadamy słowami „trzy rzeczy”, stawiamy dwukropek.' },
        { id: 'gb2q8y', q: 'Jak zapiszesz tytuł wiersza w zdaniu?', options: ['w cudzysłowie: „Rota”', 'w nawiasie: (Rota)', 'po dwukropku: :Rota', 'z wykrzyknikiem: Rota!'], answer: 0, explain: 'Tytuły utworów w zdaniu zapisujemy w cudzysłowie.' },
        { id: 't1j3ru', q: 'Do czego służy nawias w zdaniu „Mój brat (ma 6 lat) chodzi do zerówki.”?', options: ['do dodatkowego wyjaśnienia', 'do zapisania tytułu', 'do zakończenia pytania', 'do wyliczenia'], answer: 0, explain: 'W nawiasie dopisujemy dodatkową informację – tutaj wiek brata.' },
      ],
    },
    {
      id: 'dialog-wywiad',
      name: 'Dialog, monolog, wywiad i nastrój',
      chapter: 'tematy z kilku rozdziałów (dialog, wywiad, nastrój utworu)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 1 „Komunikacja”, wym. 1–3 (wypowiedź zgodna z intencją, uważne słuchanie rozmówcy, dostosowanie do sytuacji); dz. 2 „Odbiór tekstów kultury”, wym. 3 (wrażenia, jakie wywołują wypowiedzi – nastrój), wym. 7 (interpretuje głosowo wybrane teksty); dz. 3 „Świadomość języka”, wym. 9 (interpunkcja – zapis dialogu); dz. 4 „Tworzenie wypowiedzi”, wym. 6 (formy dziennikarskie – wywiad), wym. 7 (układ graficzny wypowiedzi). Pojęcia dialog, monolog, wywiad i nastrój – wybór redakcyjny według podręcznika (podstawa nie dzieli treści na klasy).',
      theory: `
        <h3>Dialog i monolog</h3>
        <ul>
          <li><b>Dialog</b> – rozmowa co najmniej dwóch osób (postaci). Wypowiedzi przeplatają się: jedna osoba pyta, druga odpowiada.</li>
          <li><b>Monolog</b> – dłuższa wypowiedź jednej osoby, np. gdy postać mówi sama do siebie, opowiada historię albo przemawia do innych.</li>
        </ul>
        <h3>Jak zapisać dialog w opowiadaniu?</h3>
        <ul>
          <li>Wypowiedź każdej postaci zaczynasz <b>od nowej linijki</b> i od <b>myślnika</b> (–).</li>
          <li>Słowa narratora (kto mówi i jak) oddzielasz myślnikiem i piszesz <b>małą literą</b>, gdy jest w nich czasownik mówienia (powiedział, zapytała, zawołał): <br><i>– Chodźmy do parku – zaproponował Kuba.</i></li>
          <li>Przed takim dopiskiem narratora <b>nie stawiasz kropki</b>, ale znak zapytania i wykrzyknik zostają: <br><i>– Gdzie jest mój plecak? – zapytała Ola.</i> <br><i>– Uważaj! – krzyknął tata.</i></li>
        </ul>
        <div class="tip">💡 Gdy narrator nie mówi o mówieniu, tylko o czymś innym, zaczyna nowe zdanie wielką literą: <i>– Już idę. – Kuba wstał od stołu.</i></div>
        <h3>Wywiad</h3>
        <p><b>Wywiad</b> to rozmowa dziennikarza z rozmówcą – zapisana albo nagrana, żeby inni mogli ją przeczytać, obejrzeć lub posłuchać. Rozmówca to często ktoś ciekawy: sportowiec, pisarka, strażak, babcia, która pamięta dawne czasy.</p>
        <ul>
          <li><b>Przygotowanie</b>: wybierz temat, zbierz informacje o rozmówcy, napisz listę pytań, umów się na spotkanie i zapytaj o zgodę na nagranie i publikację.</li>
          <li><b>Budowa</b>: tytuł → krótki wstęp (kim jest rozmówca) → pytania i odpowiedzi → podziękowanie.</li>
          <li><b>Zapis</b>: każde pytanie i każdą odpowiedź od nowej linijki; pytania wyróżnione (np. pogrubione) albo oznaczone imionami lub inicjałami rozmówców.</li>
        </ul>
        <div class="tip">💡 Zadawaj <b>pytania otwarte</b> – takie, na które nie da się odpowiedzieć tylko „tak” albo „nie”: <i>Co lubi Pani najbardziej w swojej pracy?</i> zamiast <i>Czy lubi Pani swoją pracę?</i></div>
        <h3>Nastrój utworu</h3>
        <p><b>Nastrój</b> to atmosfera utworu – uczucia, które w nas budzi. Może być wesoły, radosny, smutny, tajemniczy, groźny, spokojny, uroczysty, tęskny.</p>
        <p>Nastrój tworzą: dobór słów (np. epitety), opisy pory dnia i pogody, dźwięki i kolory, wydarzenia, a w wierszu także rytm.</p>
        <table>
          <tr><th>Fragment</th><th>Nastrój</th></tr>
          <tr><td>Słońce świeciło, ptaki śpiewały, a dzieci z radosnym śmiechem biegły nad jezioro.</td><td>wesoły, radosny</td></tr>
          <tr><td>Zapadał zmrok. W pustym domu skrzypiały schody, a za oknem wył wiatr.</td><td>tajemniczy, groźny</td></tr>
        </table>
        <h3>Czytanie na głos</h3>
        <p>Czytając na głos, pokaż nastrój głosem: smutny tekst – wolniej i ciszej, wesoły – żywiej. Rób <b>pauzy</b> po kropkach, zmieniaj <b>ton</b> w pytaniach i wykrzyknieniach, a w dialogu – zmieniaj głos dla każdej postaci.</p>
      `,
      flashcards: [
        ['Dialog', 'rozmowa co najmniej dwóch osób'],
        ['Monolog', 'dłuższa wypowiedź jednej osoby (np. do siebie)'],
        ['Zapis dialogu', 'każda wypowiedź od nowej linijki, zaczynamy myślnikiem (–)'],
        ['– Chodźmy już – powiedział Kuba.', 'przed dopiskiem narratora bez kropki, czasownik mówienia małą literą'],
        ['– Gdzie jesteś? – zawołała mama.', '? i ! przed dopiskiem narratora zostają'],
        ['Wywiad', 'rozmowa dziennikarza z rozmówcą, zapisana lub nagrana dla odbiorców'],
        ['Budowa wywiadu', 'tytuł, wstęp o rozmówcy, pytania i odpowiedzi, podziękowanie'],
        ['Pytanie otwarte', 'nie da się na nie odpowiedzieć tylko „tak” albo „nie”'],
        ['Nastrój utworu', 'atmosfera, uczucia, które utwór budzi'],
        ['Co tworzy nastrój?', 'słowa (epitety), pora dnia, pogoda, dźwięki, kolory, wydarzenia, rytm'],
        ['Czytanie na głos', 'tempo, głośność, ton i pauzy dopasowane do nastroju'],
      ],
      questions: [
        { id: 'zdaai7', q: 'Rozmowa co najmniej dwóch osób to…', options: ['dialog', 'monolog', 'opis', 'notatka'], answer: 0, explain: 'Dialog to rozmowa – wypowiedzi kilku osób się przeplatają.' },
        { id: '8xpfzq', q: 'Postać na scenie długo mówi sama do siebie, nikt jej nie odpowiada. To…', options: ['monolog', 'dialog', 'wywiad', 'list'], answer: 0, explain: 'Monolog to wypowiedź jednej osoby.' },
        { id: 'hnpctb', q: 'Jakim znakiem zaczynasz w opowiadaniu wypowiedź postaci?', options: ['myślnikiem', 'przecinkiem', 'dwukropkiem', 'nawiasem'], answer: 0, explain: 'Każdą wypowiedź postaci zaczynamy od nowej linijki i od myślnika (–).' },
        { id: '9vyks1', q: 'Który zapis dialogu jest poprawny?', options: ['– Chodźmy do parku – zaproponował Kuba.', '– Chodźmy do parku. – Zaproponował Kuba.', 'Chodźmy do parku, zaproponował Kuba –', '– Chodźmy do parku, – zaproponował Kuba.'], answer: 0, explain: 'Przed dopiskiem narratora z czasownikiem mówienia nie ma kropki ani przecinka, a dopisek zaczyna się małą literą.' },
        { id: 'oqsroc', q: 'Który zapis jest poprawny?', options: ['– Gdzie jest mój plecak? – zapytała Ola.', '– Gdzie jest mój plecak – zapytała Ola?', '– Gdzie jest mój plecak. – zapytała Ola.', 'Gdzie jest mój plecak? zapytała Ola.'], answer: 0, explain: 'Znak zapytania stoi na końcu pytania, przed myślnikiem. Potem dopisek narratora małą literą i kropka.' },
        { id: '2o0skb', q: 'Gdzie zaczynasz zapis wypowiedzi kolejnej postaci w dialogu?', options: ['w nowej linijce', 'w tej samej linijce po przecinku', 'na końcu akapitu', 'w nawiasie'], answer: 0, explain: 'Każda wypowiedź w dialogu zaczyna się od nowej linijki – łatwo wtedy zobaczyć, kto mówi.' },
        { id: 'cne1v6', q: 'Czym jest wywiad?', options: ['rozmową dziennikarza z rozmówcą, zapisaną lub nagraną dla odbiorców', 'listem do przyjaciela', 'opisem przedmiotu', 'opowiadaniem o przygodzie'], answer: 0, explain: 'Wywiad to rozmowa przygotowana dla czytelników, widzów albo słuchaczy.' },
        { id: '4mxran', q: 'Które pytanie do wywiadu z bibliotekarką da najciekawszą odpowiedź?', options: ['Co lubi Pani najbardziej w swojej pracy?', 'Czy lubi Pani książki?', 'Czy pracuje Pani w bibliotece?', 'Czy biblioteka ma okna?'], answer: 0, explain: 'To pytanie otwarte – nie da się na nie odpowiedzieć tylko „tak” albo „nie”, więc rozmówczyni opowie coś ciekawego.' },
        { id: '1efsyn', q: 'Co powinno się znaleźć na początku wywiadu, zaraz pod tytułem?', options: ['krótkie przedstawienie rozmówcy', 'spis rekwizytów', 'morał', 'pozdrowienia dla rodziny'], answer: 0, explain: 'We wstępie piszemy, kim jest rozmówca i o czym będzie rozmowa.' },
        { id: 'h34jnp', q: 'Co robisz na koniec wywiadu?', options: ['dziękujesz rozmówcy za rozmowę', 'pytasz o numer telefonu', 'wychodzisz bez słowa', 'opisujesz pogodę'], answer: 0, explain: 'Na koniec dziękujemy rozmówcy za poświęcony czas.' },
        { id: 'nkpiis', q: 'Czym jest nastrój utworu?', options: ['atmosferą i uczuciami, które budzi utwór', 'liczbą zwrotek', 'imieniem bohatera', 'miejscem wydarzeń'], answer: 0, explain: 'Nastrój to atmosfera utworu – to, co czujemy, czytając lub słuchając.' },
        { id: 'c3vgvo', q: 'Jaki nastrój ma fragment: „Zapadał zmrok. W pustym domu skrzypiały schody, a za oknem wył wiatr.”?', options: ['tajemniczy, groźny', 'wesoły, radosny', 'uroczysty, podniosły', 'spokojny, sielski'], answer: 0, explain: 'Zmrok, pusty dom, skrzypienie i wycie wiatru budzą niepokój – nastrój jest tajemniczy, groźny.' },
        { id: 'o9ba5o', q: 'Jaki nastrój ma fragment: „Słońce świeciło, ptaki śpiewały, a dzieci z radosnym śmiechem biegły nad jezioro.”?', options: ['radosny', 'smutny', 'groźny', 'tajemniczy'], answer: 0, explain: 'Słońce, śpiew ptaków i śmiech dzieci tworzą wesoły, radosny nastrój.' },
        { id: '1pgp7s', q: 'Co NIE wpływa na nastrój utworu?', options: ['numer strony, na której wydrukowano utwór', 'opis pogody i pory dnia', 'dobór słów, np. epitetów', 'dźwięki i kolory w opisie'], answer: 0, explain: 'Nastrój tworzą słowa, opisy, dźwięki, kolory i wydarzenia – a nie numer strony.' },
        { id: 'yeejo5', q: 'Czytasz na głos smutny wiersz. Jak go przeczytasz?', options: ['wolno i cicho, z pauzami', 'bardzo szybko i głośno', 'wesoło, podśpiewując', 'jednym tchem, bez przerw'], answer: 0, explain: 'Smutny nastrój pokażesz głosem: wolniej, ciszej, z pauzami.' },
        { id: 'lmht3u', q: 'Prawda czy fałsz?\nW wywiadzie pytania zadaje dziennikarz, a odpowiada rozmówca.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Tak – dziennikarz pyta, rozmówca odpowiada. Pytania warto przygotować wcześniej.' },
      ],
    },
    {
      id: 'teatr',
      name: 'Teatr',
      chapter: 'tematy z kilku rozdziałów (teatr, tekst do wystawienia)',
      basis: 'Dz.U. 2026 poz. 378, język polski kl. IV–VI: dz. 2 „Odbiór tekstów kultury”, wym. 1 (odczytanie tekstów różnych sztuk, w tym teatru – moduł kultura), wym. 7 (interpretuje głosowo wybrane teksty); dz. 7 „Praktyki lekturowe”, wym. 7 (zapoznaje się z tekstami kultury różnych sztuk, w tym teatru); moduł kultura (udział w spektaklu teatralnym, tworzenie w grupie krótkiej formy artystycznej, np. przedstawienia). Pojęcia teatralne (twórcy teatru, scena, tekst główny i poboczny, rodzaje lalek) – wybór redakcyjny według podręcznika.',
      theory: `
        <h3>Czym jest teatr?</h3>
        <p><b>Teatr</b> to sztuka, w której aktorzy grają <b>na żywo</b>, przed widzami – w tym samym miejscu i w tym samym czasie. Każde przedstawienie (spektakl) jest trochę inne. Słowo „teatr” oznacza też budynek, w którym się gra.</p>
        <h3>Kto tworzy przedstawienie?</h3>
        <table>
          <tr><td><b>aktor, aktorka</b></td><td>gra rolę – postać na scenie</td></tr>
          <tr><td><b>reżyser</b></td><td>kieruje całym przedstawieniem: decyduje, jak wystawić sztukę, prowadzi próby z aktorami</td></tr>
          <tr><td><b>scenograf</b></td><td>projektuje <b>scenografię</b> – wygląd sceny, dekoracje</td></tr>
          <tr><td><b>charakteryzator</b></td><td>robi aktorom makijaż, zakłada peruki, przyprawia brody (to <b>charakteryzacja</b>)</td></tr>
          <tr><td><b>sufler</b></td><td>podpowiada aktorom tekst, gdy go zapomną</td></tr>
          <tr><td><b>widzowie</b> (publiczność)</td><td>oglądają spektakl</td></tr>
        </table>
        <p><b>Obsada</b> to aktorzy, którzy grają role w danym przedstawieniu.</p>
        <h3>Teatr od środka</h3>
        <ul>
          <li><b>scena</b> – miejsce, na którym grają aktorzy; <b>widownia</b> – miejsce dla widzów;</li>
          <li><b>kurtyna</b> – zasłona, która oddziela scenę od widowni;</li>
          <li><b>kulisy</b> – przestrzeń za sceną i po jej bokach, której widzowie nie widzą;</li>
          <li><b>kostium</b> – strój aktora; <b>rekwizyt</b> – przedmiot, którego aktor używa na scenie (np. miecz, koszyk, list);</li>
          <li><b>afisz</b> – plakat zapowiadający przedstawienie; <b>program teatralny</b> – broszura o spektaklu i jego twórcach;</li>
          <li><b>próba</b> – ćwiczenie przedstawienia; <b>premiera</b> – pierwsze przedstawienie dla publiczności.</li>
        </ul>
        <h3>Tekst do wystawienia na scenie</h3>
        <p>Sztuka teatralna jest zapisana inaczej niż opowiadanie – nie ma w niej narratora.</p>
        <ul>
          <li><b>Tekst główny</b> – wypowiedzi postaci (kwestie), czyli to, co aktorzy mówią na scenie.</li>
          <li><b>Tekst poboczny</b> (didaskalia) – wskazówki autora: kto mówi, gdzie i kiedy dzieje się akcja, co robią postacie i jak mówią. Zwykle jest zapisany kursywą albo w nawiasie. Aktorzy go nie wypowiadają.</li>
        </ul>
        <p>Przykład: <i>KUBA (cicho, rozglądając się):</i> Czy ktoś tu jest? – imię i nawias to tekst poboczny, „Czy ktoś tu jest?” – tekst główny.</p>
        <h3>Teatr lalek</h3>
        <ul>
          <li><b>pacynka</b> – lalka zakładana na dłoń jak rękawiczka;</li>
          <li><b>kukiełka</b> – lalka na kiju, poruszana od dołu;</li>
          <li><b>marionetka</b> – lalka na nitkach, poruszana od góry.</li>
        </ul>
        <h3>Jak zachowywać się w teatrze?</h3>
        <ul>
          <li>Przyjdź punktualnie, kurtkę zostaw w szatni, ubierz się schludnie.</li>
          <li>Wyłącz telefon. Podczas spektaklu nie rozmawiaj, nie jedz i nie szeleść.</li>
          <li>Na zakończenie, gdy aktorzy się kłaniają, nagródź ich <b>brawami</b>.</li>
        </ul>
      `,
      flashcards: [
        ['Reżyser', 'kieruje przedstawieniem, prowadzi próby z aktorami'],
        ['Scenograf / scenografia', 'projektuje wygląd sceny / dekoracje'],
        ['Charakteryzator', 'makijaż, peruki, przyprawione brody'],
        ['Sufler', 'podpowiada aktorom tekst'],
        ['Rekwizyt', 'przedmiot, którego aktor używa na scenie'],
        ['Kurtyna / kulisy', 'zasłona przed sceną / miejsce za sceną i po bokach'],
        ['Afisz / program teatralny', 'plakat o przedstawieniu / broszura o spektaklu'],
        ['Próba / premiera', 'ćwiczenie spektaklu / pierwsze przedstawienie dla publiczności'],
        ['Obsada', 'aktorzy grający role w przedstawieniu'],
        ['Tekst główny i poboczny', 'kwestie postaci / wskazówki autora (didaskalia)'],
        ['Pacynka, kukiełka, marionetka', 'na dłoń / na kiju od dołu / na nitkach od góry'],
      ],
      questions: [
        { id: 'xfe655', q: 'Kto kieruje przygotowaniem przedstawienia i prowadzi próby z aktorami?', options: ['reżyser', 'scenograf', 'sufler', 'charakteryzator'], answer: 0, explain: 'Reżyser decyduje, jak wystawić sztukę, i pracuje z aktorami na próbach.' },
        { id: 'dsnb4s', q: 'Kto projektuje dekoracje, czyli wygląd sceny?', options: ['scenograf', 'reżyser', 'charakteryzator', 'sufler'], answer: 0, explain: 'Scenograf projektuje scenografię – wygląd sceny i dekoracje.' },
        { id: 'emi0xb', q: 'Kto robi aktorom makijaż i zakłada peruki?', options: ['charakteryzator', 'scenograf', 'reżyser', 'sufler'], answer: 0, explain: 'To zadanie charakteryzatora – jego praca to charakteryzacja.' },
        { id: '0ob1tq', q: 'Kto podpowiada aktorom tekst, gdy go zapomną?', options: ['sufler', 'reżyser', 'widz', 'scenograf'], answer: 0, explain: 'Sufler śledzi tekst sztuki i w razie potrzeby cicho podpowiada.' },
        { id: '36jf6v', q: 'Co to jest rekwizyt?', options: ['przedmiot, którego aktor używa na scenie', 'strój aktora', 'zasłona przed sceną', 'plakat o przedstawieniu'], answer: 0, explain: 'Rekwizyt to np. miecz, koszyk albo list, którym aktor posługuje się w czasie gry. Strój to kostium.' },
        { id: 'nv9e2n', q: 'Jak nazywa się zasłona, która oddziela scenę od widowni?', options: ['kurtyna', 'kulisy', 'afisz', 'kostium'], answer: 0, explain: 'Kurtyna podnosi się (albo rozsuwa) na początku przedstawienia.' },
        { id: 'w3slu4', q: 'Gdzie w teatrze siedzą widzowie?', options: ['na widowni', 'w kulisach', 'na scenie', 'w suflerce'], answer: 0, explain: 'Widownia to część teatru przeznaczona dla publiczności.' },
        { id: '0r3tes', q: 'Co to jest afisz?', options: ['plakat zapowiadający przedstawienie', 'spis kwestii aktora', 'zasłona sceny', 'pierwsze przedstawienie'], answer: 0, explain: 'Afisz informuje, co, gdzie i kiedy będzie grane.' },
        { id: '21f428', q: 'Jak nazywa się pierwsze przedstawienie spektaklu dla publiczności?', options: ['premiera', 'próba', 'obsada', 'kurtyna'], answer: 0, explain: 'Premiera to pierwsze przedstawienie. Wcześniej aktorzy ćwiczą na próbach.' },
        { id: 'v5iawg', q: 'Obsada to…', options: ['aktorzy, którzy grają role w przedstawieniu', 'dekoracje na scenie', 'krzesła na widowni', 'bilety do teatru'], answer: 0, explain: 'Obsadę – kto gra którą rolę – znajdziesz w programie teatralnym.' },
        { id: 'l7a7h1', q: 'Fragment sztuki: „KUBA (cicho, rozglądając się): Czy ktoś tu jest?”. Które słowa aktor wypowiada na scenie?', options: ['Czy ktoś tu jest?', 'cicho, rozglądając się', 'KUBA', 'KUBA (cicho)'], answer: 0, explain: 'Aktor mówi tylko tekst główny: „Czy ktoś tu jest?”. Imię postaci i słowa w nawiasie to tekst poboczny – wskazówki.' },
        { id: '3c8wau', q: 'Po co w sztuce teatralnej jest tekst poboczny (didaskalia)?', options: ['podpowiada, kto mówi, gdzie dzieje się akcja i co robią postacie', 'to słowa, które aktor mówi do widzów', 'to tytuł sztuki', 'to lista biletów do sprzedania'], answer: 0, explain: 'Tekst poboczny to wskazówki autora dla aktorów i reżysera. Na scenie się go nie wypowiada.' },
        { id: 'oao38s', q: 'Która lalka jest poruszana od góry za pomocą nitek?', options: ['marionetka', 'pacynka', 'kukiełka', 'maskotka'], answer: 0, explain: 'Marionetka wisi na nitkach, a lalkarz porusza nią z góry.' },
        { id: 'wejno4', q: 'Którą lalkę zakłada się na dłoń jak rękawiczkę?', options: ['pacynkę', 'marionetkę', 'kukiełkę', 'maskotkę'], answer: 0, explain: 'Pacynkę wkłada się na dłoń. Kukiełka jest na kiju, a marionetka – na nitkach.' },
        { id: 'w0tta4', q: 'Jak zachowasz się w teatrze podczas spektaklu?', options: ['wyłączę telefon i będę oglądać w ciszy', 'będę jeść chipsy', 'będę głośno komentować grę aktorów', 'wejdę na scenę, żeby obejrzeć dekoracje'], answer: 0, explain: 'W teatrze aktorzy grają na żywo – hałas i światło telefonu przeszkadzają im i innym widzom.' },
        { id: '4te6pp', q: 'Czym teatr różni się od filmu?', options: ['aktorzy grają na żywo, przed widzami', 'w teatrze nie ma aktorów', 'w teatrze nie ma dekoracji', 'teatr ogląda się tylko w telefonie'], answer: 0, explain: 'W teatrze aktorzy i widzowie są w tym samym miejscu i czasie. Film nagrywa się wcześniej.' },
        { id: 'tulwi2', q: 'Prawda czy fałsz?\nKulisy to przestrzeń za sceną i po jej bokach, której widzowie nie widzą.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Za kulisami aktorzy czekają na wejście, a tam stoją też dekoracje i rekwizyty.' },
      ],
    },
  ],
});
