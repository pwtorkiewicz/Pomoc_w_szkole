/* Chemia – klasa 8 (podstawa programowa: Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VI–X).
 * Podstawa nie dzieli chemii na klasy VII i VIII – działy VI–X umieszczono w klasie 8 (decyzja redakcyjna,
 * kolejność można dopasować do podręcznika). Fakty sprawdzone w e-materiałach zpe.gov.pl (lista w planie). */
window.SUBJECTS.push({
  id: 'chemia',
  name: 'Chemia',
  icon: '⚗️',
  color: '#b0479a',
  topics: [
    {
      id: 'wodorotlenki',
      name: 'Wodorotlenki i zasady',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VI „Wodorotlenki i kwasy”, wym. 1–4 (wodorotlenki: wzory i nazwy, otrzymywanie, właściwości i zastosowania, dysocjacja zasad, pojęcia zasady i wodorotlenku). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Budowa i wzory</h3>
        <p><b>Wodorotlenek</b> = kation metalu + aniony wodorotlenkowe OH<sup>−</sup>. Wzór ogólny: <b>M(OH)<sub>n</sub></b>, gdzie n to wartościowość metalu (tyle grup OH, ile wynosi wartościowość).</p>
        <table>
          <tr><th>Wzór</th><th>Nazwa</th><th>W wodzie</th></tr>
          <tr><td>NaOH</td><td>wodorotlenek sodu</td><td>dobrze się rozpuszcza</td></tr>
          <tr><td>KOH</td><td>wodorotlenek potasu</td><td>dobrze się rozpuszcza</td></tr>
          <tr><td>Ca(OH)<sub>2</sub></td><td>wodorotlenek wapnia</td><td>trudno rozpuszczalny</td></tr>
          <tr><td>Al(OH)<sub>3</sub></td><td>wodorotlenek glinu</td><td>praktycznie nierozpuszczalny</td></tr>
          <tr><td>Cu(OH)<sub>2</sub></td><td>wodorotlenek miedzi(II)</td><td>praktycznie nierozpuszczalny (niebieski osad)</td></tr>
        </table>
        <p>W nazwie podajemy wartościowość tylko wtedy, gdy metal może mieć kilka wartościowości – np. <b>miedzi(II)</b>. Dla metali grup 1 i 2 oraz glinu jej nie piszemy.</p>
        <h3>Otrzymywanie</h3>
        <ul>
          <li><b>Metal aktywny + woda</b> → wodorotlenek + wodór: 2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</li>
          <li><b>Tlenek metalu + woda</b> → wodorotlenek: CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> (tak „gasi się” wapno palone)</li>
          <li><b>Reakcja strąceniowa</b> – dla wodorotlenków nierozpuszczalnych: CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub></li>
        </ul>
        <h3>Dysocjacja i zasady</h3>
        <p>Wodorotlenki rozpuszczalne w wodzie rozpadają się na jony – to <b>dysocjacja elektrolityczna</b>:</p>
        <ul>
          <li>NaOH → Na<sup>+</sup> + OH<sup>−</sup></li>
          <li>Ca(OH)<sub>2</sub> → Ca<sup>2+</sup> + 2OH<sup>−</sup></li>
        </ul>
        <p><b>Zasada</b> to substancja, która w wodzie <b>zwiększa stężenie jonów OH<sup>−</sup></b> (i zmniejsza stężenie jonów wodorowych). Roztwór NaOH to zasada sodowa. Ale uwaga:</p>
        <ul>
          <li>nie każdy wodorotlenek daje zasadę – Cu(OH)<sub>2</sub> się nie rozpuszcza, więc nie dysocjuje;</li>
          <li>nie każda zasada to wodorotlenek – amoniak w wodzie (woda amoniakalna) też jest zasadą.</li>
        </ul>
        <p><b>Elektrolit</b> – substancja, której roztwór wodny przewodzi prąd (bo są w nim jony), np. NaOH, NaCl, HCl. <b>Nieelektrolit</b> – roztwór nie przewodzi prądu, np. cukier (sacharoza), etanol.</p>
        <h3>Właściwości i zastosowania</h3>
        <ul>
          <li><b>NaOH</b> – biała substancja stała, <b>żrąca</b> i <b>higroskopijna</b> (pochłania wilgoć z powietrza i się „rozpływa”). Stosowany m.in. do produkcji mydła i w środkach do udrażniania rur.</li>
          <li><b>Ca(OH)<sub>2</sub></b> – wapno gaszone; z piaskiem i wodą tworzy zaprawę wapienną. Jego klarowny roztwór to <b>woda wapienna</b> – mętnieje pod wpływem CO<sub>2</sub>.</li>
        </ul>
        <div class="tip">💡 Wodorotlenki rozpuszczalne w wodzie są żrące: pracuj w okularach i rękawicach, a oparzoną skórę spłukuj dużą ilością wody.</div>`,
      infographicNote: 'Czytaj od góry: jak powstaje wodorotlenek, co robi w wodzie i kiedy daje zasadę; na dole – pułapki.',
      infographic: {
        type: 'kroki',
        top: { title: 'Jak otrzymać wodorotlenek?', items: ['metal aktywny + woda:\n2Na + 2H₂O → 2NaOH + H₂↑', 'tlenek metalu + woda:\nCaO + H₂O → Ca(OH)₂', 'reakcja strąceniowa:\nCuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄'], kolor: 5 },
        items: [
          { title: 'Wodorotlenek M(OH)ₙ', text: 'kation metalu + aniony OH⁻\nn\u00a0=\u00a0wartościowość metalu', kolor: 1 },
          { title: 'Dysocjacja w wodzie', text: 'NaOH → Na⁺ + OH⁻\nCa(OH)₂ → Ca²⁺ + 2OH⁻', kolor: 1 },
          { title: 'Zasada', text: 'w wodzie zwiększa stężenie jonów OH⁻, np. zasada sodowa', kolor: 3 },
        ],
        bottom: { title: '⚠️ Uwaga', items: ['Cu(OH)₂ nie rozpuszcza się → nie daje zasady', 'amoniak w wodzie – zasada, choć to nie wodorotlenek', 'NaOH jest żrący – okulary i rękawice'], kolor: 2 },
      },
      flashcards: [
        ['Wzór ogólny wodorotlenku', 'M(OH)ₙ – metal i n grup OH (n = wartościowość metalu)'],
        ['NaOH', 'wodorotlenek sodu'],
        ['Ca(OH)₂', 'wodorotlenek wapnia (wapno gaszone)'],
        ['Cu(OH)₂', 'wodorotlenek miedzi(II) – niebieski, nierozpuszczalny osad'],
        ['Al(OH)₃', 'wodorotlenek glinu'],
        ['Metal aktywny + woda →', 'wodorotlenek + wodór, np. 2Na + 2H₂O → 2NaOH + H₂'],
        ['Tlenek metalu + woda →', 'wodorotlenek, np. CaO + H₂O → Ca(OH)₂'],
        ['Dysocjacja NaOH', 'NaOH → Na⁺ + OH⁻'],
        ['Zasada', 'substancja, która w wodzie zwiększa stężenie jonów OH⁻'],
        ['Elektrolit', 'substancja, której roztwór wodny przewodzi prąd (zawiera jony)'],
        ['Higroskopijność', 'pochłanianie wilgoci z powietrza (np. NaOH, KOH)'],
        ['Woda wapienna', 'roztwór Ca(OH)₂ – mętnieje pod wpływem CO₂'],
      ],
      questions: [
        { id: '88i3wi', q: 'Jaki jest wzór wodorotlenku wapnia?', options: ['CaOH', 'Ca(OH)₂', 'Ca₂OH', 'CaO'], answer: 1, explain: 'Wapń jest dwuwartościowy, więc łączy się z dwiema grupami OH: Ca(OH)₂. CaO to tlenek wapnia.' },
        { id: 'nvy5si', q: 'Jak nazywa się związek o wzorze Cu(OH)₂?', options: ['wodorotlenek miedzi(I)', 'tlenek miedzi(II)', 'wodorotlenek miedzi(II)', 'wodorek miedzi'], answer: 2, explain: 'Dwie grupy OH – miedź jest tu dwuwartościowa, więc to wodorotlenek miedzi(II).' },
        { id: 'm7zyv1', q: 'Ile grup OH ma we wzorze wodorotlenek glinu (glin jest trójwartościowy)?', options: ['3', '1', '2', '4'], answer: 0, explain: 'Liczba grup OH = wartościowość metalu. Glin(III) → Al(OH)₃.' },
        { id: '445f21', q: 'Które równanie przedstawia otrzymywanie wodorotlenku sodu z metalu i wody?', options: ['Na₂O + H₂O → 2NaOH', 'NaCl + H₂O → NaOH + HCl', '2Na + 2H₂O → 2NaOH + H₂', 'Na + O₂ → NaOH'], answer: 2, explain: 'Metal aktywny reaguje z wodą: powstaje wodorotlenek i wydziela się wodór. Pierwsze równanie też daje NaOH, ale z tlenku, a nie z metalu.' },
        { id: 'pt4jnw', q: 'Co powstaje w reakcji tlenku wapnia z wodą?', options: ['węglan wapnia', 'wodorotlenek wapnia', 'wapń i tlen', 'kwas wapniowy'], answer: 1, explain: 'CaO + H₂O → Ca(OH)₂. To „gaszenie” wapna palonego.' },
        { id: 'a1qkxk', q: 'Którego wodorotlenku nie otrzymasz w reakcji tlenku metalu z wodą, bo jest nierozpuszczalny? Robi się go w reakcji strąceniowej.', options: ['NaOH', 'KOH', 'Ca(OH)₂', 'Cu(OH)₂'], answer: 3, explain: 'Cu(OH)₂ jest nierozpuszczalny – otrzymuje się go np. z CuSO₄ i NaOH jako niebieski osad.' },
        { id: 'xi0paq', q: 'Które równanie dysocjacji jest poprawne?', options: ['Ca(OH)₂ → Ca⁺ + OH⁻', 'Ca(OH)₂ → Ca²⁺ + 2OH⁻', 'Ca(OH)₂ → Ca²⁺ + OH₂⁻', 'Ca(OH)₂ → CaO + H₂O'], answer: 1, explain: 'Kation wapnia ma ładunek 2+, a grup OH są dwie – stąd Ca²⁺ + 2OH⁻.' },
        { id: 'wonokn', q: 'Jakie jony są obecne w każdej zasadzie?', options: ['H⁺', 'Na⁺', 'OH⁻', 'Cl⁻'], answer: 2, explain: 'Zasada zwiększa stężenie anionów wodorotlenkowych OH⁻. Kation metalu bywa różny.' },
        { id: 'o05bmc', q: 'Prawda czy fałsz?\nKażdy wodorotlenek tworzy w wodzie zasadę.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Wodorotlenki nierozpuszczalne, np. Cu(OH)₂, nie dysocjują w wodzie, więc nie tworzą zasady.' },
        { id: 'pkltde', q: 'Prawda czy fałsz?\nWoda amoniakalna (roztwór amoniaku) jest zasadą, choć amoniak nie jest wodorotlenkiem.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Amoniak w wodzie zwiększa stężenie jonów OH⁻, więc roztwór jest zasadą.' },
        { id: 'n1u7yi', q: 'Która substancja jest nieelektrolitem?', options: ['wodorotlenek sodu', 'chlorek sodu', 'chlorowodór', 'cukier (sacharoza)'], answer: 3, explain: 'Roztwór cukru nie zawiera jonów, więc nie przewodzi prądu – cukier jest nieelektrolitem.' },
        { id: '19mmpv', q: 'Dlaczego roztwór wodorotlenku sodu przewodzi prąd elektryczny?', options: ['bo zawiera swobodne jony', 'bo zawiera metal sód', 'bo jest gorący', 'bo zawiera cząsteczki wody'], answer: 0, explain: 'NaOH dysocjuje na jony Na⁺ i OH⁻ – to one przenoszą ładunek. Czysta woda prawie nie przewodzi prądu.' },
        { id: 'qclkye', q: 'Pozostawiony na powietrzu NaOH po pewnym czasie „rozpływa się”. Jak nazywa się ta właściwość?', options: ['palność', 'higroskopijność', 'lotność', 'plastyczność'], answer: 1, explain: 'NaOH pochłania wilgoć z powietrza – jest higroskopijny.' },
        { id: 'kcvlwv', q: 'Klarowna woda wapienna zmętniała po przepuszczeniu przez nią pewnego gazu. Jaki to był gaz?', options: ['tlen', 'wodór', 'tlenek węgla(IV)', 'azot'], answer: 2, explain: 'CO₂ reaguje z Ca(OH)₂ i powstaje nierozpuszczalny węglan wapnia – roztwór mętnieje.' },
        { id: '44jt4j', q: 'Do czego używa się wodorotlenku sodu?', options: ['do produkcji mydła', 'jako przyprawy do potraw', 'do napełniania balonów', 'do gaszenia pożarów'], answer: 0, explain: 'NaOH służy m.in. do produkcji mydła i w środkach do udrażniania rur. Jest żrący – nie nadaje się do jedzenia.' },
        { id: 'm63g5m', q: 'Co zrobisz, gdy kropla stężonego roztworu NaOH spadnie ci na skórę?', options: ['zetrzesz suchą chusteczką i nic więcej', 'posmarujesz kremem', 'spłuczesz dużą ilością wody i powiesz nauczycielowi', 'posypiesz solą'], answer: 2, explain: 'Substancje żrące spłukuje się dużą ilością wody. Każdy wypadek zgłaszasz nauczycielowi.' },
      ],
    },
    {
      id: 'kwasy',
      name: 'Kwasy',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VI „Wodorotlenki i kwasy”, wym. 1–4 (kwasy: wzory i nazwy, otrzymywanie kwasów beztlenowych i tlenowych, właściwości i zastosowania, dysocjacja kwasów, w tym stopniowa H₂S i H₂CO₃). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Budowa</h3>
        <p><b>Kwas</b> = atomy wodoru + <b>reszta kwasowa</b>. Wzór ogólny: <b>H<sub>n</sub>R</b>, gdzie n to wartościowość reszty kwasowej. Kwasy <b>beztlenowe</b> nie mają tlenu w reszcie (HCl, H<sub>2</sub>S), kwasy <b>tlenowe</b> – mają.</p>
        <table>
          <tr><th>Wzór</th><th>Nazwa</th><th>Reszta</th></tr>
          <tr><td>HCl</td><td>kwas chlorowodorowy (solny)</td><td>Cl (I)</td></tr>
          <tr><td>H<sub>2</sub>S</td><td>kwas siarkowodorowy</td><td>S (II)</td></tr>
          <tr><td>HNO<sub>3</sub></td><td>kwas azotowy(V)</td><td>NO<sub>3</sub> (I)</td></tr>
          <tr><td>H<sub>2</sub>SO<sub>3</sub></td><td>kwas siarkowy(IV)</td><td>SO<sub>3</sub> (II)</td></tr>
          <tr><td>H<sub>2</sub>SO<sub>4</sub></td><td>kwas siarkowy(VI)</td><td>SO<sub>4</sub> (II)</td></tr>
          <tr><td>H<sub>2</sub>CO<sub>3</sub></td><td>kwas węglowy</td><td>CO<sub>3</sub> (II)</td></tr>
          <tr><td>H<sub>3</sub>PO<sub>4</sub></td><td>kwas fosforowy(V)</td><td>PO<sub>4</sub> (III)</td></tr>
        </table>
        <p>Liczba rzymska w nazwie (np. siarkowy(VI)) to wartościowość niemetalu – S w H<sub>2</sub>SO<sub>4</sub> jest sześciowartościowa, a w H<sub>2</sub>SO<sub>3</sub> – czterowartościowa.</p>
        <h3>Otrzymywanie</h3>
        <ul>
          <li><b>Beztlenowe</b>: niemetal + wodór → wodorek, który rozpuszczamy w wodzie. H<sub>2</sub> + Cl<sub>2</sub> → 2HCl; chlorowodór rozpuszczony w wodzie to kwas solny.</li>
          <li><b>Tlenowe</b>: tlenek niemetalu (tlenek kwasowy) + woda → kwas.
            <ul>
              <li>SO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>3</sub></li>
              <li>SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub></li>
              <li>CO<sub>2</sub> + H<sub>2</sub>O ⇄ H<sub>2</sub>CO<sub>3</sub> (nietrwały, łatwo rozkłada się z powrotem)</li>
              <li>N<sub>2</sub>O<sub>5</sub> + H<sub>2</sub>O → 2HNO<sub>3</sub></li>
              <li>P<sub>4</sub>O<sub>10</sub> + 6H<sub>2</sub>O → 4H<sub>3</sub>PO<sub>4</sub></li>
            </ul>
          </li>
        </ul>
        <h3>Dysocjacja kwasów</h3>
        <p>W wodzie kwasy rozpadają się na <b>kationy wodoru H<sup>+</sup></b> i <b>aniony reszty kwasowej</b>:</p>
        <ul>
          <li>HCl → H<sup>+</sup> + Cl<sup>−</sup></li>
          <li>HNO<sub>3</sub> → H<sup>+</sup> + NO<sub>3</sub><sup>−</sup></li>
          <li>H<sub>2</sub>SO<sub>4</sub> → 2H<sup>+</sup> + SO<sub>4</sub><sup>2−</sup></li>
          <li>H<sub>3</sub>PO<sub>4</sub> → 3H<sup>+</sup> + PO<sub>4</sub><sup>3−</sup></li>
        </ul>
        <p>H<sub>2</sub>S i H<sub>2</sub>CO<sub>3</sub> dysocjują <b>stopniowo</b>:</p>
        <ul>
          <li>H<sub>2</sub>S ⇄ H<sup>+</sup> + HS<sup>−</sup>, potem HS<sup>−</sup> ⇄ H<sup>+</sup> + S<sup>2−</sup></li>
          <li>H<sub>2</sub>CO<sub>3</sub> ⇄ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>, potem HCO<sub>3</sub><sup>−</sup> ⇄ H<sup>+</sup> + CO<sub>3</sub><sup>2−</sup></li>
        </ul>
        <p><b>Kwas</b> to substancja, która w wodzie <b>zwiększa stężenie jonów wodorowych H<sup>+</sup></b>. Ładunek anionu reszty = liczba atomów H w cząsteczce kwasu.</p>
        <h3>Właściwości i bezpieczeństwo</h3>
        <ul>
          <li>Stężone kwasy są <b>żrące</b>. Stężony H<sub>2</sub>SO<sub>4</sub> jest higroskopijny i zwęgla substancje organiczne (np. cukier, papier).</li>
          <li>Kwas solny trawi (oczyszcza) powierzchnię metali, np. z rdzy. Kwas fosforowy(V) bywa regulatorem kwasowości w napojach typu cola. Kwas węglowy jest w wodzie gazowanej.</li>
        </ul>
        <div class="tip">💡 Rozcieńczając kwas, <b>wlewaj kwas do wody</b>, powoli i mieszając – nigdy odwrotnie. „Pamiętaj, chemiku młody, wlewaj zawsze kwas do wody”.</div>`,
      infographicNote: 'Czytaj od góry: jak powstaje kwas, co robi w wodzie i dlaczego jest kwasem; na dole – bezpieczeństwo.',
      infographic: {
        type: 'kroki',
        top: { title: 'Jak otrzymać kwas?', items: ['beztlenowy: wodorek + woda\nH₂ + Cl₂ → 2HCl, HCl w wodzie = kwas solny', 'tlenowy: tlenek niemetalu + woda\nSO₃ + H₂O → H₂SO₄'], kolor: 5 },
        items: [
          { title: 'Kwas HₙR', text: 'n atomów wodoru + reszta kwasowa; beztlenowe (HCl, H₂S) i tlenowe', kolor: 1 },
          { title: 'Dysocjacja w wodzie', text: 'H₂SO₄ → 2H⁺ + SO₄²⁻\nładunek anionu = liczba atomów H\nH₂S i H₂CO₃ – stopniowo', kolor: 1 },
          { title: 'Kwas', text: 'w wodzie zwiększa stężenie jonów H⁺', kolor: 3 },
        ],
        bottom: { title: '⚠️ Rozcieńczanie', text: 'wlewaj kwas do wody, powoli i mieszając – nigdy odwrotnie', kolor: 2 },
      },
      flashcards: [
        ['Wzór ogólny kwasu', 'HₙR – n atomów wodoru i reszta kwasowa'],
        ['HCl', 'kwas chlorowodorowy (solny) – beztlenowy'],
        ['H₂S', 'kwas siarkowodorowy – beztlenowy'],
        ['HNO₃', 'kwas azotowy(V)'],
        ['H₂SO₃', 'kwas siarkowy(IV)'],
        ['H₂SO₄', 'kwas siarkowy(VI)'],
        ['H₂CO₃', 'kwas węglowy (nietrwały)'],
        ['H₃PO₄', 'kwas fosforowy(V)'],
        ['Tlenek niemetalu + woda →', 'kwas tlenowy, np. SO₃ + H₂O → H₂SO₄'],
        ['Dysocjacja H₂SO₄', 'H₂SO₄ → 2H⁺ + SO₄²⁻'],
        ['Kwas (definicja jonowa)', 'substancja, która w wodzie zwiększa stężenie jonów H⁺'],
        ['Rozcieńczanie kwasu', 'wlewaj kwas do wody, powoli i mieszając'],
      ],
      questions: [
        { id: 'kowc5j', q: 'Który kwas jest beztlenowy?', options: ['H₂SO₄', 'HNO₃', 'H₂S', 'H₃PO₄'], answer: 2, explain: 'W H₂S nie ma tlenu – reszta kwasowa to sam atom siarki.' },
        { id: 't65lwu', q: 'Jak nazywa się kwas o wzorze HNO₃?', options: ['kwas azotowy(V)', 'kwas azotowy(III)', 'kwas amonowy', 'kwas azotowodorowy'], answer: 0, explain: 'HNO₃ to kwas azotowy(V) – azot jest w nim pięciowartościowy.' },
        { id: 'lk7bks', q: 'Jaki jest wzór kwasu siarkowego(IV)?', options: ['H₂SO₄', 'H₂SO₃', 'H₂S', 'SO₂'], answer: 1, explain: 'Kwas siarkowy(IV) to H₂SO₃. H₂SO₄ to kwas siarkowy(VI), H₂S – siarkowodorowy.' },
        { id: 'ux1dfx', q: 'Ile wynosi wartościowość reszty kwasowej w kwasie fosforowym(V) H₃PO₄?', options: ['I', 'II', 'V', 'III'], answer: 3, explain: 'Wartościowość reszty = liczba atomów wodoru w cząsteczce kwasu, czyli 3 (III).' },
        { id: 'p450zp', q: 'Jaki kwas powstaje w reakcji tlenku siarki(VI) z wodą?', options: ['kwas siarkowy(VI)', 'kwas siarkowy(IV)', 'kwas siarkowodorowy', 'kwas węglowy'], answer: 0, explain: 'SO₃ + H₂O → H₂SO₄. Siarka zachowuje wartościowość VI.' },
        { id: 'tai75g', q: 'Uzupełnij równanie: CO₂ + H₂O ⇄ …', options: ['HCO₃', 'H₂CO₃', 'H₂CO₂', 'CH₄'], answer: 1, explain: 'Tlenek węgla(IV) z wodą tworzy kwas węglowy H₂CO₃ – nietrwały, łatwo się rozkłada.' },
        { id: 'r0i1jg', q: 'Jak otrzymuje się kwas solny?', options: ['rozpuszczając chlorowodór w wodzie', 'rozpuszczając sól kuchenną w wodzie', 'spalając chlor w tlenie', 'mieszając sód z chlorem'], answer: 0, explain: 'H₂ + Cl₂ → 2HCl, a chlorowodór rozpuszczony w wodzie to kwas solny. Roztwór soli kuchennej nie jest kwasem.' },
        { id: 'x5bpa3', q: 'Które równanie dysocjacji jest poprawne?', options: ['H₂SO₄ → H₂⁺ + SO₄⁻', 'H₂SO₄ → 2H⁺ + SO₄²⁻', 'H₂SO₄ → 2H + SO₄', 'H₂SO₄ → H⁺ + SO₄²⁻'], answer: 1, explain: 'Dwa atomy H dają dwa kationy H⁺, a reszta SO₄ ma ładunek 2−. Suma ładunków = 0.' },
        { id: '24qpfw', q: 'Jaki ładunek ma anion reszty kwasowej z kwasu fosforowego(V)?', options: ['1−', '2−', '3−', '5−'], answer: 2, explain: 'H₃PO₄ → 3H⁺ + PO₄³⁻. Ładunek anionu = liczba odłączonych H⁺.' },
        { id: '66bvl4', q: 'Który kwas dysocjuje stopniowo (w dwóch etapach)?', options: ['HCl', 'HNO₃', 'H₂CO₃', 'HBr'], answer: 2, explain: 'Według podstawy stopniowo zapisujemy dysocjację H₂S i H₂CO₃ – mają po dwa atomy wodoru, które odłączają się po kolei.' },
        { id: 'uaqod3', q: 'Jakie jony są wspólne dla roztworów wszystkich kwasów?', options: ['OH⁻', 'Cl⁻', 'kationy metalu', 'H⁺'], answer: 3, explain: 'Kwasy w wodzie zwiększają stężenie kationów wodoru H⁺. Reszty kwasowe są różne.' },
        { id: 'r9zs82', q: 'Prawda czy fałsz?\nRozcieńczając stężony kwas, wlewamy wodę do kwasu.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Wlewamy kwas do wody – powoli i mieszając. Odwrotnie mieszanina może gwałtownie się nagrzać i pryskać.' },
        { id: '0daivj', q: 'Co się stanie z kostką cukru polaną stężonym kwasem siarkowym(VI)?', options: ['rozpuści się bez zmian', 'zabarwi się na niebiesko', 'zwęgli się (zrobi się czarna)', 'zacznie świecić'], answer: 2, explain: 'Stężony H₂SO₄ odbiera substancjom organicznym wodę i zwęgla je.' },
        { id: 's0j25m', q: 'Który kwas jest składnikiem wody gazowanej?', options: ['kwas węglowy', 'kwas solny', 'kwas azotowy(V)', 'kwas siarkowodorowy'], answer: 0, explain: 'CO₂ rozpuszczony w wodzie tworzy nietrwały kwas węglowy.' },
        { id: 'b8xl9k', q: 'Prawda czy fałsz?\nW kwasie siarkowym(IV) siarka jest czterowartościowa.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – liczba rzymska w nazwie kwasu tlenowego to wartościowość niemetalu.' },
      ],
      tasks: [
        {
          id: 'cib45m',
          points: 2,
          q: 'Oblicz masę cząsteczkową kwasu siarkowego(VI) H₂SO₄ i zapisz równanie jego dysocjacji. Masy atomowe: H – 1 u, S – 32 u, O – 16 u.',
          steps: [
            'Masa cząsteczkowa: 2 · 1 u + 32 u + 4 · 16 u = 2 u + 32 u + 64 u = 98 u.',
            'Dysocjacja: dwa atomy wodoru dają dwa kationy H⁺, a reszta kwasowa SO₄ ma ładunek 2−: H₂SO₄ → 2H⁺ + SO₄²⁻.',
          ],
          answer: '98 u; H₂SO₄ → 2H⁺ + SO₄²⁻',
          scoring: [
            '1 pkt – poprawne obliczenie masy cząsteczkowej (98 u).',
            '1 pkt – poprawne równanie dysocjacji (z ładunkami jonów).',
          ],
        },
      ],
    },
    {
      id: 'odczyn-ph',
      name: 'Odczyn, pH i wskaźniki',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VI „Wodorotlenki i kwasy”, wym. 5–8 (wskaźniki: fenoloftaleina, oranż metylowy, papierek uniwersalny; odczyn roztworu; skala pH; kwaśne opady). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Odczyn roztworu</h3>
        <ul>
          <li><b>kwasowy</b> – więcej jonów H<sup>+</sup> niż OH<sup>−</sup> (np. roztwory kwasów, sok z cytryny, ocet),</li>
          <li><b>obojętny</b> – tyle samo H<sup>+</sup> i OH<sup>−</sup> (np. woda destylowana, roztwór cukru),</li>
          <li><b>zasadowy</b> – więcej jonów OH<sup>−</sup> niż H<sup>+</sup> (np. roztwory zasad, roztwór mydła).</li>
        </ul>
        <h3>Skala pH</h3>
        <p>Skala pH ma zwykle wartości od 0 do 14:</p>
        <table>
          <tr><th>pH</th><th>Odczyn</th></tr>
          <tr><td>mniej niż 7</td><td>kwasowy (im mniejsze pH, tym bardziej kwasowy)</td></tr>
          <tr><td>równe 7</td><td>obojętny</td></tr>
          <tr><td>więcej niż 7</td><td>zasadowy (im większe pH, tym bardziej zasadowy)</td></tr>
        </table>
        <h3>Wskaźniki</h3>
        <p><b>Wskaźnik</b> to substancja, która zmienia barwę w zależności od odczynu.</p>
        <table>
          <tr><th>Wskaźnik</th><th>kwasowy</th><th>obojętny</th><th>zasadowy</th></tr>
          <tr><td>fenoloftaleina</td><td>bezbarwna</td><td>bezbarwna</td><td><b>malinowa</b></td></tr>
          <tr><td>oranż metylowy</td><td><b>czerwony</b></td><td>pomarańczowy (w części materiałów – żółty)</td><td>żółty</td></tr>
        </table>
        <ul>
          <li><b>Fenoloftaleina</b> służy do wykrywania <b>zasad</b> – w kwasie i w roztworze obojętnym jest bezbarwna, więc ich nie odróżni.</li>
          <li><b>Oranż metylowy</b> służy do wykrywania <b>kwasów</b> (czerwony w odczynie kwasowym).</li>
          <li><b>Uniwersalny papierek wskaźnikowy</b> zmienia barwę w całej skali pH od 0 do 14 – porównujesz go ze skalą barw na opakowaniu i odczytujesz przybliżone pH.</li>
        </ul>
        <h3>Kwaśne opady</h3>
        <p>Kwaśne opady to deszcz, śnieg czy mgła o <b>pH mniejszym niż 5,6</b>. Powstają, gdy tlenki siarki i azotu (oraz CO<sub>2</sub>) z powietrza łączą się z wodą i tworzą kwasy. Tlenki te pochodzą głównie ze spalania paliw i z przemysłu, a także ze źródeł naturalnych (wulkany, pożary lasów).</p>
        <ul>
          <li>Skutki: zakwaszenie gleb i wód, niszczenie roślin, korozja metali, niszczenie budowli z wapienia i piaskowca.</li>
          <li>Jak ograniczać: odsiarczanie spalin w elektrowniach, oszczędzanie energii, odnawialne źródła energii, mniej spalin z samochodów.</li>
        </ul>
        <div class="tip">💡 Fenoloftaleina „zapala się” na malinowo tylko w zasadzie. Oranż metylowy włącza czerwony alarm przy kwasie.</div>`,
      infographicNote: 'Porównuj w poziomie: każdy wiersz to jedna cecha odczynu kwasowego, obojętnego i zasadowego.',
      infographic: {
        type: 'porownanie',
        top: { title: 'Wskaźnik', text: 'zmienia barwę zależnie od odczynu\npapierek uniwersalny – w całej skali pH\u00a00–14', kolor: 4 },
        kolumny: [{ title: 'kwasowy', kolor: 2 }, { title: 'obojętny', kolor: 3 }, { title: 'zasadowy', kolor: 5 }],
        wiersze: [
          { label: 'jony', cells: ['więcej H⁺ niż OH⁻', 'tyle samo H⁺ i OH⁻', 'więcej OH⁻ niż H⁺'] },
          { label: 'skala pH (0–14)', cells: ['pH < 7', 'pH = 7', 'pH > 7'], bold: true },
          { label: 'fenoloftaleina', cells: ['bezbarwna', 'bezbarwna', 'malinowa'] },
          { label: 'oranż metylowy', cells: ['czerwony', 'pomarańczowy', 'żółty'] },
          { label: 'przykład', cells: ['sok z cytryny, ocet', 'woda destylowana', 'roztwór mydła'] },
        ],
        bottom: { title: '🌧️ Kwaśne opady', text: 'pH < 5,6 – z tlenków siarki i azotu ze spalania paliw i przemysłu', kolor: 2 },
      },
      flashcards: [
        ['pH < 7', 'odczyn kwasowy'],
        ['pH = 7', 'odczyn obojętny'],
        ['pH > 7', 'odczyn zasadowy'],
        ['Fenoloftaleina w zasadzie', 'malinowa'],
        ['Fenoloftaleina w kwasie i w roztworze obojętnym', 'bezbarwna'],
        ['Oranż metylowy w kwasie', 'czerwony'],
        ['Oranż metylowy w zasadzie', 'żółty'],
        ['Uniwersalny papierek wskaźnikowy', 'zmienia barwę w całej skali pH 0–14; pH odczytujesz ze skali barw'],
        ['Odczyn kwasowy (jony)', 'więcej jonów H⁺ niż OH⁻'],
        ['Kwaśne opady', 'opady o pH < 5,6; powstają z tlenków siarki i azotu'],
        ['Główne przyczyny kwaśnych opadów', 'spalanie paliw i przemysł (tlenki siarki i azotu)'],
      ],
      questions: [
        { id: '46cc1q', q: 'Roztwór ma pH = 3. Jaki ma odczyn?', options: ['zasadowy', 'obojętny', 'kwasowy', 'nie da się określić'], answer: 2, explain: 'pH mniejsze od 7 oznacza odczyn kwasowy.' },
        { id: 'zkw8fu', q: 'Który roztwór ma odczyn najbardziej zasadowy?', options: ['pH = 12', 'pH = 9', 'pH = 7', 'pH = 2'], answer: 0, explain: 'Im większe pH powyżej 7, tym odczyn bardziej zasadowy.' },
        { id: 'y2ibtj', q: 'Jaką barwę przyjmie fenoloftaleina w roztworze wodorotlenku sodu?', options: ['czerwoną', 'malinową', 'żółtą', 'pozostanie bezbarwna'], answer: 1, explain: 'Roztwór NaOH jest zasadą, a fenoloftaleina w zasadzie barwi się na malinowo.' },
        { id: 'dj6owl', q: 'Jaką barwę przyjmie oranż metylowy w kwasie solnym?', options: ['żółtą', 'malinową', 'niebieską', 'czerwoną'], answer: 3, explain: 'Oranż metylowy w odczynie kwasowym jest czerwony.' },
        { id: 'ptwxxl', q: 'Do dwóch probówek – z wodą destylowaną i z octem – dodano fenoloftaleinę. Co zobaczysz?', options: ['w obu roztwór pozostanie bezbarwny', 'woda – malinowa, ocet – bezbarwny', 'woda – bezbarwna, ocet – malinowy', 'w obu malinowy'], answer: 0, explain: 'Fenoloftaleina jest bezbarwna i w odczynie obojętnym, i kwasowym – tych roztworów nią nie odróżnisz.' },
        { id: 'w8zx76', q: 'Którym wskaźnikiem odróżnisz kwas od wody destylowanej?', options: ['fenoloftaleiną', 'oranżem metylowym', 'żadnym', 'wodą wapienną'], answer: 1, explain: 'Oranż metylowy w kwasie jest czerwony, a w wodzie nie. Fenoloftaleina w obu będzie bezbarwna.' },
        { id: 'c338ar', q: 'Który wskaźnik pozwala odczytać przybliżoną wartość pH w całej skali 0–14?', options: ['fenoloftaleina', 'oranż metylowy', 'uniwersalny papierek wskaźnikowy', 'woda bromowa'], answer: 2, explain: 'Papierek uniwersalny zmienia barwę w całej skali pH – wynik porównujesz ze skalą barw.' },
        { id: 'd2wq31', q: 'Jaki odczyn ma woda destylowana?', options: ['kwasowy', 'zasadowy', 'obojętny', 'zmienia się z temperaturą od kwasowego do zasadowego'], answer: 2, explain: 'W wodzie destylowanej jest tyle samo jonów H⁺ i OH⁻ – odczyn obojętny, pH = 7.' },
        { id: 'u4u9jw', q: 'W roztworze jest więcej jonów OH⁻ niż H⁺. Jaki to odczyn?', options: ['zasadowy', 'kwasowy', 'obojętny', 'zależy od barwy roztworu'], answer: 0, explain: 'Przewaga jonów wodorotlenkowych OH⁻ oznacza odczyn zasadowy.' },
        { id: 'yn1x1p', q: 'Jaki odczyn ma sok z cytryny?', options: ['zasadowy', 'obojętny', 'kwasowy', 'nie ma odczynu'], answer: 2, explain: 'Sok z cytryny zawiera kwas cytrynowy – ma odczyn kwasowy.' },
        { id: '2xgwcy', q: 'Od jakiej wartości pH mówimy o kwaśnych opadach?', options: ['pH mniejsze niż 5,6', 'pH większe niż 7', 'pH równe 7', 'pH mniejsze niż 1'], answer: 0, explain: 'Kwaśne opady mają pH < 5,6.' },
        { id: 'je26u3', q: 'Które substancje są główną przyczyną kwaśnych opadów?', options: ['tlen i azot', 'tlenki siarki i azotu', 'para wodna i hel', 'chlorek sodu i cukier'], answer: 1, explain: 'Tlenki siarki i azotu łączą się z wodą w powietrzu i tworzą kwasy.' },
        { id: 'wfjzf7', q: 'Które budowle najbardziej niszczą kwaśne opady?', options: ['ze szkła', 'z wapienia i piaskowca', 'z tworzywa sztucznego', 'z drewna malowanego farbą olejną'], answer: 1, explain: 'Kwasy reagują z wapieniem (węglanem wapnia) – dlatego niszczą zabytki z wapienia i piaskowca.' },
        { id: 'ci9y2h', q: 'Który sposób ogranicza powstawanie kwaśnych opadów?', options: ['spalanie węgla bez filtrów', 'odsiarczanie spalin w elektrowniach', 'posypywanie dróg solą', 'wycinanie lasów'], answer: 1, explain: 'Odsiarczanie spalin zmniejsza ilość tlenków siarki trafiających do powietrza.' },
        { id: 'c67weg', q: 'Prawda czy fałsz?\nIm mniejsze pH, tym odczyn bardziej kwasowy.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – np. roztwór o pH 1 jest bardziej kwasowy niż o pH 5.' },
      ],
    },
    {
      id: 'sole',
      name: 'Sole',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VII „Sole”, wym. 1–6 (zobojętnianie, wzory i nazwy soli, metody otrzymywania, dysocjacja soli, reakcje strąceniowe i tablica rozpuszczalności, zastosowania). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Budowa i nazwy</h3>
        <p><b>Sól</b> = kation metalu + anion reszty kwasowej. Wzór ogólny <b>M<sub>n</sub>R<sub>m</sub></b> – indeksy dobierasz z wartościowości (jak w tlenkach: „na krzyż”).</p>
        <table>
          <tr><th>Kwas</th><th>Sole</th><th>Przykład</th></tr>
          <tr><td>HCl</td><td><b>chlorki</b></td><td>NaCl – chlorek sodu</td></tr>
          <tr><td>H<sub>2</sub>S</td><td><b>siarczki</b></td><td>K<sub>2</sub>S – siarczek potasu</td></tr>
          <tr><td>HNO<sub>3</sub></td><td><b>azotany(V)</b></td><td>KNO<sub>3</sub> – azotan(V) potasu</td></tr>
          <tr><td>H<sub>2</sub>SO<sub>3</sub></td><td><b>siarczany(IV)</b></td><td>Na<sub>2</sub>SO<sub>3</sub> – siarczan(IV) sodu</td></tr>
          <tr><td>H<sub>2</sub>SO<sub>4</sub></td><td><b>siarczany(VI)</b></td><td>CuSO<sub>4</sub> – siarczan(VI) miedzi(II)</td></tr>
          <tr><td>H<sub>2</sub>CO<sub>3</sub></td><td><b>węglany</b></td><td>CaCO<sub>3</sub> – węglan wapnia</td></tr>
          <tr><td>H<sub>3</sub>PO<sub>4</sub></td><td><b>fosforany(V)</b></td><td>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> – fosforan(V) wapnia</td></tr>
        </table>
        <p>Sole kwasów beztlenowych mają końcówkę <b>-ek</b>, tlenowych – <b>-an</b>.</p>
        <h3>Zobojętnianie</h3>
        <p>Kwas + zasada → sól + woda: HCl + NaOH → NaCl + H<sub>2</sub>O. Istota reakcji (zapis jonowy skrócony): <b>H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O</b>. Gdy dodasz zasady dokładnie tyle, ile trzeba, roztwór ma odczyn obojętny.</p>
        <h3>Inne metody otrzymywania soli</h3>
        <ul>
          <li><b>kwas + tlenek metalu</b> → sól + woda: CuO + H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + H<sub>2</sub>O</li>
          <li><b>kwas + metal</b> (np. Na, K, Ca, Mg) → sól + wodór: Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>↑</li>
          <li><b>wodorotlenek + tlenek niemetalu</b> → sól + woda: Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O (mętnienie wody wapiennej)</li>
        </ul>
        <h3>Dysocjacja soli</h3>
        <p>Sole rozpuszczalne w wodzie dysocjują na kationy metalu i aniony reszty: NaCl → Na<sup>+</sup> + Cl<sup>−</sup>; CuSO<sub>4</sub> → Cu<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup>; K<sub>3</sub>PO<sub>4</sub> → 3K<sup>+</sup> + PO<sub>4</sub><sup>3−</sup>.</p>
        <h3>Reakcje strąceniowe</h3>
        <p>Mieszasz dwa roztwory, a powstaje <b>osad</b> – substancja trudno rozpuszczalna. Czy osad powstanie, sprawdzasz w <b>tablicy rozpuszczalności</b>.</p>
        <ul>
          <li>AgNO<sub>3</sub> + NaCl → AgCl↓ + NaNO<sub>3</sub>; jonowo: Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl↓ (biały osad)</li>
          <li>CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>; jonowo: Cu<sup>2+</sup> + 2OH<sup>−</sup> → Cu(OH)<sub>2</sub>↓</li>
        </ul>
        <h3>Zastosowania (przykłady)</h3>
        <ul>
          <li><b>chlorek sodu</b> NaCl – sól kuchenna, konserwowanie żywności, posypywanie dróg zimą,</li>
          <li><b>węglan wapnia</b> CaCO<sub>3</sub> – główny składnik wapieni, surowiec budowlany,</li>
          <li><b>siarczan(VI) wapnia</b> – gips (zaprawy, opatrunki gipsowe),</li>
          <li><b>azotany(V) i fosforany(V)</b> – nawozy sztuczne (w nadmiarze trafiają do wód i powodują „zakwitanie” jezior).</li>
        </ul>
        <div class="tip">💡 Nazwę soli czytasz „od tyłu”: najpierw reszta (siarczan(VI)), potem metal (miedzi(II)).</div>`,
      infographicNote: 'U góry – budowa i nazwy soli, niżej – cztery sposoby otrzymywania, na dole – reakcja strąceniowa.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        top: { title: 'Budowa soli', text: 'kation metalu + anion reszty kwasowej\nsole kwasów beztlenowych: -ek (chlorek)\nsole kwasów tlenowych: -an (siarczan(VI))', kolor: 5 },
        root: { title: 'Jak otrzymać sól?', kolor: 1 },
        branches: [
          { title: 'kwas + zasada', text: '→ sól + woda\nHCl + NaOH → NaCl + H₂O\nzobojętnianie: H⁺ + OH⁻ → H₂O', kolor: 3 },
          { title: 'kwas + tlenek metalu', text: '→ sól + woda\nCuO + H₂SO₄ → CuSO₄ + H₂O', kolor: 3 },
          { title: 'kwas + metal', text: '→ sól + wodór\nMg + 2HCl → MgCl₂ + H₂↑', kolor: 3 },
          { title: 'zasada + tlenek niemetalu', text: '→ sól + woda\nCa(OH)₂ + CO₂ → CaCO₃↓ + H₂O', kolor: 3 },
        ],
        bottom: { title: '🧪 Reakcja strąceniowa', text: 'powstaje osad, np. Ag⁺ + Cl⁻ → AgCl↓ (biały); sprawdzasz w tablicy rozpuszczalności', kolor: 4 },
      },
      flashcards: [
        ['Sól (budowa)', 'kation metalu + anion reszty kwasowej'],
        ['Kwas + zasada →', 'sól + woda (zobojętnianie)'],
        ['Istota zobojętniania', 'H⁺ + OH⁻ → H₂O'],
        ['Kwas + metal →', 'sól + wodór, np. Mg + 2HCl → MgCl₂ + H₂'],
        ['Kwas + tlenek metalu →', 'sól + woda'],
        ['Zasada + tlenek niemetalu →', 'sól + woda, np. Ca(OH)₂ + CO₂ → CaCO₃ + H₂O'],
        ['Sole HCl / H₂S', 'chlorki / siarczki'],
        ['Sole HNO₃ / H₃PO₄', 'azotany(V) / fosforany(V)'],
        ['Sole H₂SO₃ / H₂SO₄ / H₂CO₃', 'siarczany(IV) / siarczany(VI) / węglany'],
        ['Reakcja strąceniowa', 'powstaje osad substancji trudno rozpuszczalnej; sprawdzasz w tablicy rozpuszczalności'],
        ['Ag⁺ + Cl⁻ →', 'AgCl↓ – biały osad'],
        ['CaCO₃', 'węglan wapnia – główny składnik wapienia'],
      ],
      questions: [
        { id: 'ekyhhl', q: 'Co powstaje w reakcji zobojętniania kwasu solnego zasadą sodową?', options: ['chlorek sodu i woda', 'chlorek sodu i wodór', 'tlenek sodu i chlor', 'wodorotlenek sodu i chlor'], answer: 0, explain: 'HCl + NaOH → NaCl + H₂O. Kwas + zasada → sól + woda.' },
        { id: 'jf4crk', q: 'Który zapis jonowy przedstawia istotę reakcji zobojętniania?', options: ['Na⁺ + Cl⁻ → NaCl', 'H⁺ + OH⁻ → H₂O', '2H⁺ → H₂', 'Ag⁺ + Cl⁻ → AgCl'], answer: 1, explain: 'W każdej reakcji zobojętniania kationy wodoru łączą się z anionami wodorotlenkowymi w wodę.' },
        { id: '1ommtb', q: 'Jak nazywa się sól o wzorze KNO₃?', options: ['azotek potasu', 'azotan(III) potasu', 'azotan(V) potasu', 'węglan potasu'], answer: 2, explain: 'NO₃ to reszta kwasu azotowego(V) – sól to azotan(V) potasu.' },
        { id: '6siitx', q: 'Jaki jest wzór siarczanu(VI) sodu?', options: ['Na₂SO₄', 'NaSO₄', 'Na₂SO₃', 'Na₂S'], answer: 0, explain: 'Sód jest jednowartościowy, reszta SO₄ – dwuwartościowa, więc potrzeba dwóch atomów Na: Na₂SO₄.' },
        { id: 'ygxt0h', q: 'Jaki jest wzór chlorku wapnia?', options: ['CaCl', 'Ca₂Cl', 'CaCl₂', 'CaClO₃'], answer: 2, explain: 'Wapń (II) i chlor (I) – na jeden atom Ca przypadają dwa atomy Cl.' },
        { id: 'jqeuf3', q: 'Jaki jest wzór fosforanu(V) wapnia?', options: ['CaPO₄', 'Ca₃(PO₄)₂', 'Ca₂(PO₄)₃', 'Ca(PO₄)₃'], answer: 1, explain: 'Ca (II), PO₄ (III) – indeksy „na krzyż”: Ca₃(PO₄)₂. Sprawdź: 3 · 2 = 6 i 2 · 3 = 6.' },
        { id: 'yuab3x', q: 'Która sól jest siarczkiem?', options: ['Na₂SO₄', 'Na₂SO₃', 'Na₂CO₃', 'Na₂S'], answer: 3, explain: 'Siarczki to sole kwasu siarkowodorowego H₂S – bez tlenu w reszcie.' },
        { id: '0d5h9z', q: 'Co powstaje w reakcji magnezu z kwasem solnym?', options: ['chlorek magnezu i woda', 'chlorek magnezu i wodór', 'tlenek magnezu i chlor', 'wodorotlenek magnezu'], answer: 1, explain: 'Mg + 2HCl → MgCl₂ + H₂↑. Metal + kwas → sól + wodór.' },
        { id: 'vhyxdz', q: 'Która para substancji przereaguje i da sól oraz wodę?', options: ['tlenek miedzi(II) i kwas siarkowy(VI)', 'magnez i kwas solny', 'chlorek sodu i woda', 'tlenek węgla(IV) i kwas solny'], answer: 0, explain: 'Tlenek metalu + kwas → sól + woda (CuO + H₂SO₄ → CuSO₄ + H₂O). Magnez z kwasem daje sól i wodór, nie wodę.' },
        { id: '4ywkei', q: 'Jaką sól otrzymasz, przepuszczając CO₂ przez wodę wapienną?', options: ['chlorek wapnia', 'węglan wapnia', 'siarczan(VI) wapnia', 'azotan(V) wapnia'], answer: 1, explain: 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O – powstaje nierozpuszczalny węglan wapnia (roztwór mętnieje).' },
        { id: 'y59ts4', q: 'Które równanie dysocjacji jest poprawne?', options: ['CaCl₂ → Ca²⁺ + Cl₂²⁻', 'CaCl₂ → Ca⁺ + 2Cl⁻', 'CaCl₂ → Ca²⁺ + 2Cl⁻', 'CaCl₂ → Ca + Cl₂'], answer: 2, explain: 'Kation wapnia ma ładunek 2+, a anionów chlorkowych (1−) są dwa.' },
        { id: '310hax', q: 'Po zmieszaniu roztworów AgNO₃ i NaCl powstał biały osad. Co to za osad?', options: ['NaNO₃', 'AgCl', 'NaCl', 'Ag'], answer: 1, explain: 'Ag⁺ + Cl⁻ → AgCl↓. Azotan(V) sodu jest rozpuszczalny i zostaje w roztworze.' },
        { id: 'n4u5xn', q: 'Z czego skorzystasz, żeby przewidzieć, czy w reakcji powstanie osad?', options: ['z tablicy rozpuszczalności', 'ze skali pH', 'z szeregu homologicznego', 'z wykresu temperatury wrzenia'], answer: 0, explain: 'Tablica rozpuszczalności mówi, które sole i wodorotlenki są trudno rozpuszczalne.' },
        { id: 'q64s93', q: 'Która sól jest głównym składnikiem wapienia?', options: ['chlorek sodu', 'azotan(V) potasu', 'węglan wapnia', 'siarczan(VI) miedzi(II)'], answer: 2, explain: 'Wapienie są zbudowane głównie z węglanu wapnia CaCO₃.' },
        { id: '80dqa1', q: 'Prawda czy fałsz?\nNadmiar nawozów z azotanami(V) i fosforanami(V) może spływać do jezior i powodować masowy rozwój glonów.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda. Azot i fosfor pobudzają rozwój glonów – woda „zakwita”, a potem brakuje w niej tlenu.' },
      ],
      tasks: [
        {
          id: '2d5zc1',
          points: 2,
          q: 'Kwas solny reaguje z wodorotlenkiem sodu według równania HCl + NaOH → NaCl + H₂O. Ile gramów NaOH potrzeba do zobojętnienia 7,3 g HCl? Masy cząsteczkowe: HCl – 36,5 u, NaOH – 40 u.',
          steps: [
            'Z równania: 1 cząsteczka HCl reaguje z 1 cząsteczką NaOH, więc 36,5 g HCl reaguje z 40 g NaOH.',
            'Proporcja: 36,5 g HCl – 40 g NaOH, 7,3 g HCl – x.',
            'x = 7,3 g · 40 g : 36,5 g = 292 : 36,5 g = 8 g.',
            'Sprawdzenie: 7,3 g to 1/5 z 36,5 g, a 1/5 z 40 g to 8 g.',
          ],
          answer: '8 g NaOH',
          scoring: [
            '1 pkt – poprawna proporcja oparta na stosunku mas z równania (36,5 g HCl : 40 g NaOH).',
            '1 pkt – poprawny wynik z jednostką: 8 g.',
          ],
        },
        {
          id: '3s9o8v',
          points: 2,
          q: 'Zapisz w formie cząsteczkowej i w formie jonowej skróconej równanie reakcji strąceniowej zachodzącej po zmieszaniu roztworów siarczanu(VI) miedzi(II) i wodorotlenku sodu.',
          steps: [
            'Jony w roztworach: Cu²⁺ i SO₄²⁻ oraz Na⁺ i OH⁻. Trudno rozpuszczalny jest wodorotlenek miedzi(II) – on się wytrąci.',
            'Forma cząsteczkowa: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.',
            'Forma jonowa skrócona (tylko jony, które tworzą osad): Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.',
          ],
          answer: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄; Cu²⁺ + 2OH⁻ → Cu(OH)₂↓',
          scoring: [
            '1 pkt – poprawne równanie w formie cząsteczkowej z dobranymi współczynnikami.',
            '1 pkt – poprawne równanie w formie jonowej skróconej.',
          ],
        },
      ],
    },
    {
      id: 'weglowodory',
      name: 'Węglowodory',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. VIII „Związki węgla z wodorem – węglowodory”, wym. 1–9 (alkany, alkeny, alkiny – wzory ogólne, nazwy i wzory do 4 atomów C, właściwości fizyczne, spalanie, eten i etyn, przyłączanie bromu, polimeryzacja etenu, odróżnianie węglowodorów nasyconych od nienasyconych, ropa naftowa i gaz ziemny, skutki spalania paliw kopalnych). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Podział węglowodorów</h3>
        <p><b>Węglowodory</b> to związki zbudowane tylko z atomów węgla i wodoru. Węgiel w związkach organicznych jest zawsze <b>czterowartościowy</b>.</p>
        <table>
          <tr><th></th><th>alkany</th><th>alkeny</th><th>alkiny</th></tr>
          <tr><td>wiązania C–C</td><td>tylko pojedyncze</td><td>jedno podwójne</td><td>jedno potrójne</td></tr>
          <tr><td>rodzaj</td><td>nasycone</td><td>nienasycone</td><td>nienasycone</td></tr>
          <tr><td>wzór ogólny</td><td>C<sub>n</sub>H<sub>2n+2</sub></td><td>C<sub>n</sub>H<sub>2n</sub></td><td>C<sub>n</sub>H<sub>2n−2</sub></td></tr>
          <tr><td>końcówka</td><td>-an</td><td>-en</td><td>-yn</td></tr>
        </table>
        <h3>Szereg homologiczny alkanów</h3>
        <table>
          <tr><th>n</th><th>alkan</th><th>wzór</th><th>półstrukturalny</th></tr>
          <tr><td>1</td><td>metan</td><td>CH<sub>4</sub></td><td>CH<sub>4</sub></td></tr>
          <tr><td>2</td><td>etan</td><td>C<sub>2</sub>H<sub>6</sub></td><td>CH<sub>3</sub>–CH<sub>3</sub></td></tr>
          <tr><td>3</td><td>propan</td><td>C<sub>3</sub>H<sub>8</sub></td><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>3</sub></td></tr>
          <tr><td>4</td><td>butan</td><td>C<sub>4</sub>H<sub>10</sub></td><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub></td></tr>
        </table>
        <p>Kolejne alkany różnią się o grupę CH<sub>2</sub>. Dalej: pentan C<sub>5</sub>H<sub>12</sub>, heksan, heptan, oktan, nonan, dekan. Alkeny i alkiny nazywasz od alkanu: etan → <b>eten</b> C<sub>2</sub>H<sub>4</sub> (CH<sub>2</sub>=CH<sub>2</sub>), <b>etyn</b> C<sub>2</sub>H<sub>2</sub> (CH≡CH); propen C<sub>3</sub>H<sub>6</sub>, propyn C<sub>3</sub>H<sub>4</sub>.</p>
        <h3>Właściwości fizyczne alkanów</h3>
        <p>Im dłuższy łańcuch, tym <b>wyższe temperatury topnienia i wrzenia</b> oraz większa gęstość. Alkany od C<sub>1</sub> do C<sub>4</sub> to gazy, od C<sub>5</sub> do ok. C<sub>16</sub> – ciecze, dalsze – ciała stałe (np. parafina). Węglowodory nie rozpuszczają się w wodzie.</p>
        <h3>Spalanie</h3>
        <ul>
          <li><b>całkowite</b> (dużo tlenu): CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</li>
          <li><b>niecałkowite</b> (mało tlenu): 2CH<sub>4</sub> + 3O<sub>2</sub> → 2CO + 4H<sub>2</sub>O – powstaje trujący <b>tlenek węgla(II), czad</b></li>
          <li><b>półspalanie</b> (bardzo mało tlenu): CH<sub>4</sub> + O<sub>2</sub> → C + 2H<sub>2</sub>O – powstaje sadza</li>
        </ul>
        <h3>Eten i etyn – węglowodory nienasycone</h3>
        <ul>
          <li>Oba są gazami, palą się jasnym, <b>kopcącym</b> płomieniem.</li>
          <li><b>Przyłączają brom</b> (addycja): CH<sub>2</sub>=CH<sub>2</sub> + Br<sub>2</sub> → CH<sub>2</sub>Br–CH<sub>2</sub>Br. Woda bromowa (lub roztwór bromu) się <b>odbarwia</b>. Alkany jej nie odbarwiają – tak odróżnisz węglowodory nasycone od nienasyconych.</li>
          <li><b>Polimeryzacja</b> etenu: n CH<sub>2</sub>=CH<sub>2</sub> → (–CH<sub>2</sub>–CH<sub>2</sub>–)<sub>n</sub> – powstaje <b>polietylen</b> (folie, torebki, butelki).</li>
        </ul>
        <h3>Źródła i skutki spalania</h3>
        <ul>
          <li><b>Gaz ziemny</b> – głównie metan. <b>Ropa naftowa</b> – ciekła mieszanina węglowodorów. Jej destylacja daje m.in. gazy, benzynę, naftę, olej napędowy, a z pozostałości (mazutu) – asfalt, parafinę, wazelinę.</li>
          <li>Spalanie paliw kopalnych zwiększa ilość CO<sub>2</sub> w atmosferze (efekt cieplarniany, zmiany klimatu), daje tlenki siarki i azotu (kwaśne opady), pyły i sadzę (smog), a przy złym spalaniu – czad.</li>
        </ul>
        <div class="tip">💡 Końcówki: -<b>an</b> – pojedyncze, -<b>en</b> – podwójne, -<b>yn</b> – potrójne. „A, E, Y – jeden, dwa, trzy”.</div>`,
      infographicNote: 'Porównuj w poziomie: każdy wiersz to jedna cecha alkanów, alkenów i alkinów.',
      infographic: {
        type: 'porownanie',
        kolumny: [{ title: 'alkany', kolor: 1 }, { title: 'alkeny', kolor: 3 }, { title: 'alkiny', kolor: 5 }],
        wiersze: [
          { label: 'wiązania C–C', cells: ['tylko pojedyncze', 'jedno podwójne', 'jedno potrójne'] },
          { label: 'wzór ogólny', cells: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂'], bold: true },
          { label: 'końcówka', cells: ['-an', '-en', '-yn'], bold: true },
          { label: 'przykład', cells: ['etan C₂H₆', 'eten C₂H₄', 'etyn C₂H₂'] },
          { label: 'rodzaj', cells: ['nasycone', 'nienasycone', 'nienasycone'] },
          { label: 'woda bromowa', cells: ['nie odbarwia', 'odbarwia', 'odbarwia'] },
        ],
        bottom: { title: '🔥 Spalanie (np. metanu)', items: ['całkowite (dużo tlenu) → CO₂ + H₂O', 'niecałkowite (mało tlenu) → trujący czad CO', 'półspalanie (bardzo mało tlenu) → sadza C'], kolor: 2 },
      },
      flashcards: [
        ['Węglowodory', 'związki tylko z węgla i wodoru'],
        ['Wzór ogólny alkanów', 'CₙH₂ₙ₊₂'],
        ['Wzór ogólny alkenów', 'CₙH₂ₙ'],
        ['Wzór ogólny alkinów', 'CₙH₂ₙ₋₂'],
        ['Metan, etan, propan, butan', 'CH₄, C₂H₆, C₃H₈, C₄H₁₀'],
        ['Eten / etyn', 'C₂H₄ (wiązanie podwójne) / C₂H₂ (wiązanie potrójne)'],
        ['Spalanie całkowite metanu', 'CH₄ + 2O₂ → CO₂ + 2H₂O'],
        ['Czad', 'tlenek węgla(II) CO – trujący produkt niecałkowitego spalania'],
        ['Woda bromowa + węglowodór nienasycony', 'odbarwia się (przyłączenie bromu)'],
        ['Polimeryzacja etenu', 'n CH₂=CH₂ → (–CH₂–CH₂–)ₙ, polietylen'],
        ['Gaz ziemny', 'głównie metan'],
        ['Produkty destylacji ropy naftowej', 'gazy, benzyna, nafta, olej napędowy; z mazutu – asfalt, parafina, wazelina'],
      ],
      questions: [
        { id: '9u3twh', q: 'Jaki jest wzór sumaryczny propanu?', options: ['C₃H₆', 'C₃H₈', 'C₃H₄', 'C₃H₁₀'], answer: 1, explain: 'Alkan: CₙH₂ₙ₊₂. Dla n = 3: 2 · 3 + 2 = 8, więc C₃H₈.' },
        { id: 'mkldw6', q: 'Który związek jest alkenem?', options: ['C₂H₆', 'C₂H₂', 'C₄H₁₀', 'C₃H₆'], answer: 3, explain: 'Alkeny: CₙH₂ₙ. C₃H₆ to propen. C₂H₂ to alkin (etyn), C₂H₆ i C₄H₁₀ – alkany.' },
        { id: 'zmzqr5', q: 'Jaki wzór sumaryczny ma alkan o 10 atomach węgla (dekan)?', options: ['C₁₀H₂₂', 'C₁₀H₂₀', 'C₁₀H₁₈', 'C₁₀H₂₄'], answer: 0, explain: '2 · 10 + 2 = 22, więc C₁₀H₂₂.' },
        { id: 'hfo36u', q: 'Jak nazywa się węglowodór o wzorze CH≡CH?', options: ['eten', 'etan', 'etyn', 'metan'], answer: 2, explain: 'Wiązanie potrójne – alkin. Dwa atomy węgla – etyn.' },
        { id: 'o26xhp', q: 'Co dzieje się z temperaturą wrzenia alkanów, gdy rośnie długość łańcucha?', options: ['rośnie', 'maleje', 'się nie zmienia', 'najpierw rośnie, potem maleje'], answer: 0, explain: 'Im dłuższy łańcuch węglowy, tym wyższe temperatury topnienia i wrzenia.' },
        { id: 'fekm8f', q: 'Który alkan jest w temperaturze pokojowej cieczą?', options: ['metan', 'propan', 'butan', 'pentan'], answer: 3, explain: 'Alkany C₁–C₄ to gazy. Pentan (C₅) jest już cieczą.' },
        { id: 'xut4k5', q: 'Jakie są produkty całkowitego spalania metanu?', options: ['tlenek węgla(II) i woda', 'tlenek węgla(IV) i woda', 'węgiel i wodór', 'sadza i woda'], answer: 1, explain: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Przy dużym dostępie tlenu powstaje CO₂.' },
        { id: 'tcsrd2', q: 'Dlaczego piecyk gazowy w łazience musi mieć sprawną wentylację?', options: ['bo przy niecałkowitym spalaniu powstaje trujący czad', 'bo metan jest niebieski', 'bo spalanie gazu ochładza łazienkę', 'bo powstaje kwas solny'], answer: 0, explain: 'Przy braku tlenu spalanie jest niecałkowite – powstaje tlenek węgla(II), bezwonny i trujący.' },
        { id: 'xb8nbt', q: 'Którym odczynnikiem odróżnisz eten od etanu?', options: ['fenoloftaleiną', 'wodą wapienną', 'wodą bromową', 'wodą destylowaną'], answer: 2, explain: 'Eten (nienasycony) odbarwia wodę bromową, bo przyłącza brom. Etan jej nie odbarwia.' },
        { id: 'n6k4ft', q: 'Jak nazywa się reakcja, w której z wielu cząsteczek etenu powstaje polietylen?', options: ['spalanie', 'polimeryzacja', 'dysocjacja', 'zobojętnianie'], answer: 1, explain: 'Polimeryzacja – łączenie wielu małych cząsteczek (monomerów) w jedną długą (polimer).' },
        { id: 'ks3n4g', q: 'Który węglowodór jest głównym składnikiem gazu ziemnego?', options: ['metan', 'eten', 'butan', 'etyn'], answer: 0, explain: 'Gaz ziemny to głównie metan CH₄.' },
        { id: 'tyr9li', q: 'Który produkt otrzymuje się z destylacji ropy naftowej?', options: ['polietylen', 'benzynę', 'gips', 'glukozę'], answer: 1, explain: 'Destylacja ropy daje m.in. gazy, benzynę, naftę i olej napędowy. Polietylen powstaje dopiero w polimeryzacji etenu.' },
        { id: 'b2b9yl', q: 'Który skutek spalania paliw kopalnych jest związany ze zmianami klimatu?', options: ['wzrost ilości CO₂ w atmosferze', 'powstawanie ozonu w stratosferze', 'zakwitanie jezior', 'powstawanie sadzy w ropie'], answer: 0, explain: 'CO₂ ze spalania paliw nasila efekt cieplarniany, co prowadzi do zmian klimatu.' },
        { id: 'klw9hn', q: 'Prawda czy fałsz?\nW cząsteczce alkanu między atomami węgla występują wyłącznie wiązania pojedyncze.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – dlatego alkany nazywamy węglowodorami nasyconymi.' },
        { id: '4v11kr', q: 'Ile atomów wodoru ma cząsteczka butynu (alkin, 4 atomy C)?', options: ['10', '8', '4', '6'], answer: 3, explain: 'Alkiny: CₙH₂ₙ₋₂. Dla n = 4: 8 − 2 = 6, więc C₄H₆.' },
      ],
      tasks: [
        {
          id: 'veeri4',
          points: 2,
          q: 'Pewien alkan ma masę cząsteczkową 44 u. Ustal jego wzór sumaryczny i nazwę, a następnie zapisz równanie jego spalania całkowitego. Masy atomowe: C – 12 u, H – 1 u.',
          steps: [
            'Alkan ma wzór CₙH₂ₙ₊₂, więc jego masa to 12n + (2n + 2) = 14n + 2.',
            '14n + 2 = 44 → 14n = 42 → n = 3. To C₃H₈ – propan. Sprawdzenie: 3 · 12 + 8 · 1 = 44 u.',
            'Spalanie całkowite: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Sprawdzenie tlenu: po lewej 10 atomów, po prawej 3 · 2 + 4 = 10.',
          ],
          answer: 'C₃H₈ – propan; C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
          scoring: [
            '1 pkt – poprawny wzór i nazwa alkanu (C₃H₈, propan).',
            '1 pkt – poprawne równanie spalania całkowitego z dobranymi współczynnikami.',
          ],
        },
      ],
    },
    {
      id: 'alkohole',
      name: 'Alkohole',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. IX „Pochodne węglowodorów”, wym. 1–3 (alkohole monohydroksylowe do 4 atomów C – wzory i nazwy, podział na mono- i polihydroksylowe, właściwości i zastosowania metanolu i etanolu, spalanie, szkodliwość, glicerol). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Budowa</h3>
        <p><b>Alkohol</b> powstaje, gdy w cząsteczce węglowodoru jeden atom wodoru zastąpimy <b>grupą hydroksylową –OH</b> (to grupa funkcyjna alkoholi). Wzór ogólny alkoholi monohydroksylowych: <b>C<sub>n</sub>H<sub>2n+1</sub>OH</b>.</p>
        <table>
          <tr><th>Nazwa</th><th>Wzór sumaryczny</th><th>Półstrukturalny</th></tr>
          <tr><td>metanol</td><td>CH<sub>3</sub>OH</td><td>CH<sub>3</sub>–OH</td></tr>
          <tr><td>etanol</td><td>C<sub>2</sub>H<sub>5</sub>OH</td><td>CH<sub>3</sub>–CH<sub>2</sub>–OH</td></tr>
          <tr><td>propan-1-ol</td><td>C<sub>3</sub>H<sub>7</sub>OH</td><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH</td></tr>
          <tr><td>butan-1-ol</td><td>C<sub>4</sub>H<sub>9</sub>OH</td><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH</td></tr>
        </table>
        <p>Nazwa = nazwa alkanu + końcówka <b>-ol</b>; cyfra mówi, przy którym atomie węgla jest grupa –OH.</p>
        <ul>
          <li><b>monohydroksylowe</b> – jedna grupa –OH (metanol, etanol),</li>
          <li><b>polihydroksylowe</b> – kilka grup –OH (glicerol).</li>
        </ul>
        <h3>Metanol i etanol</h3>
        <ul>
          <li>Bezbarwne ciecze o charakterystycznym zapachu, dobrze mieszają się z wodą, palą się bladoniebieskim płomieniem.</li>
          <li><b>Odczyn wodnych roztworów alkoholi jest obojętny</b> – grupa –OH w alkoholu nie odłącza się jako jon OH<sup>−</sup> (alkohol to nie wodorotlenek!).</li>
          <li>Spalanie całkowite: 2CH<sub>3</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 4H<sub>2</sub>O; C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O</li>
          <li><b>Metanol jest silnie trujący</b> – już niewielka ilość może spowodować ślepotę, a nawet śmierć.</li>
          <li><b>Etanol</b> – rozpuszczalnik, środek dezynfekujący, składnik paliw i kosmetyków, napojów alkoholowych. Działa szkodliwie: uzależnia, powoduje ciężkie choroby wątroby, nerek, żołądka i serca, szkodzi układowi nerwowemu. <b>Denaturat</b> to skażony etanol – nie wolno go pić.</li>
        </ul>
        <h3>Glicerol (propano-1,2,3-triol)</h3>
        <p>Wzór: C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub>, półstrukturalny: CH<sub>2</sub>(OH)–CH(OH)–CH<sub>2</sub>(OH). To alkohol <b>polihydroksylowy</b> (trzy grupy –OH). Bezbarwna, gęsta, oleista ciecz o słodkim smaku, bez zapachu, dobrze rozpuszcza się w wodzie. Zatrzymuje wilgoć – dlatego jest składnikiem kosmetyków (np. kremów nawilżających).</p>
        <div class="tip">💡 „-ol” na końcu nazwy = grupa –OH = alkohol. Ale odczyn obojętny – fenoloftaleina się nie zabarwi.</div>`,
      infographicNote: 'U góry – czym jest alkohol; niżej porównuj w poziomie trzy alkohole.',
      infographic: {
        type: 'porownanie',
        top: { title: 'Grupa hydroksylowa –OH', text: 'zastępuje atom wodoru w węglowodorze; nazwa alkanu + końcówka -ol\nmonohydroksylowe: CₙH₂ₙ₊₁OH', kolor: 4 },
        kolumny: [{ title: 'metanol', kolor: 2 }, { title: 'etanol', kolor: 1 }, { title: 'glicerol', kolor: 3 }],
        wiersze: [
          { label: 'wzór', cells: ['CH₃OH', 'C₂H₅OH', 'C₃H₅(OH)₃'], bold: true },
          { label: 'grupy –OH', cells: ['jedna (mono-)', 'jedna (mono-)', 'trzy (poli-)'] },
          { label: 'cechy', cells: ['silnie trujący', 'rozpuszczalnik, dezynfekcja; uzależnia', 'gęsty, słodki; kosmetyki'] },
        ],
        bottom: { title: '💡 Odczyn obojętny', text: '–OH nie odłącza się jako jon OH⁻ – alkohol to nie wodorotlenek', kolor: 3 },
      },
      flashcards: [
        ['Grupa funkcyjna alkoholi', 'grupa hydroksylowa –OH'],
        ['Wzór ogólny alkoholi monohydroksylowych', 'CₙH₂ₙ₊₁OH'],
        ['Metanol', 'CH₃OH – silnie trujący'],
        ['Etanol', 'C₂H₅OH, CH₃–CH₂–OH'],
        ['Propan-1-ol', 'C₃H₇OH, CH₃–CH₂–CH₂–OH'],
        ['Odczyn roztworu alkoholu', 'obojętny'],
        ['Spalanie etanolu', 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O'],
        ['Alkohol polihydroksylowy', 'ma kilka grup –OH, np. glicerol'],
        ['Glicerol', 'propano-1,2,3-triol, C₃H₅(OH)₃ – gęsta, słodka ciecz'],
        ['Zastosowanie glicerolu', 'kosmetyki (zatrzymuje wilgoć)'],
        ['Denaturat', 'skażony etanol – nie wolno go pić'],
      ],
      questions: [
        { id: 'u2d69w', q: 'Która grupa jest grupą funkcyjną alkoholi?', options: ['–COOH', '–OH', '–NH₂', '–CHO'], answer: 1, explain: 'Alkohole mają grupę hydroksylową –OH. –COOH to grupa karboksylowa (kwasy), –NH₂ – aminowa.' },
        { id: '77t9oq', q: 'Jaki jest wzór sumaryczny etanolu?', options: ['CH₃OH', 'C₂H₆', 'C₂H₅OH', 'C₂H₄'], answer: 2, explain: 'Etanol pochodzi od etanu: C₂H₅–OH.' },
        { id: 'nsrjw4', q: 'Jak nazywa się alkohol CH₃–CH₂–CH₂–OH?', options: ['propan-1-ol', 'etanol', 'butan-1-ol', 'propan'], answer: 0, explain: 'Trzy atomy węgla – propan, końcówka -ol, grupa –OH przy pierwszym atomie węgla: propan-1-ol.' },
        { id: 'd4x66m', q: 'Ile atomów węgla ma cząsteczka butan-1-olu?', options: ['1', '2', '3', '4'], answer: 3, explain: 'But- oznacza cztery atomy węgla (jak w butanie).' },
        { id: 'w53cqe', q: 'Jaki odczyn ma wodny roztwór etanolu?', options: ['zasadowy, bo jest grupa –OH', 'kwasowy', 'obojętny', 'zależy od stężenia: raz kwasowy, raz zasadowy'], answer: 2, explain: 'Grupa –OH w alkoholu nie odłącza się jako jon OH⁻, więc odczyn jest obojętny.' },
        { id: 'bdrbvi', q: 'Który alkohol jest silnie trujący i może spowodować ślepotę?', options: ['glicerol', 'metanol', 'etanol w denaturacie tylko z powodu barwnika', 'żaden alkohol nie jest trujący'], answer: 1, explain: 'Metanol jest silnie trujący – niewielka ilość może spowodować ślepotę, a nawet śmierć.' },
        { id: 'ixikth', q: 'Jakie są produkty całkowitego spalania etanolu?', options: ['CO i H₂', 'C i H₂O', 'CO₂ i H₂O', 'CH₄ i O₂'], answer: 2, explain: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.' },
        { id: 'wdcxxb', q: 'Uzupełnij współczynnik: C₂H₅OH + … O₂ → 2CO₂ + 3H₂O', options: ['2', '3', '4', '7'], answer: 1, explain: 'Po prawej jest 2 · 2 + 3 = 7 atomów tlenu. Po lewej 1 atom O jest w etanolu, więc z tlenu potrzeba 6 atomów = 3O₂.' },
        { id: 'bcy7y9', q: 'Który alkohol jest polihydroksylowy?', options: ['metanol', 'etanol', 'glicerol', 'propan-1-ol'], answer: 2, explain: 'Glicerol ma trzy grupy –OH. Pozostałe mają po jednej.' },
        { id: 'sv6s3q', q: 'Jaka jest nazwa systematyczna glicerolu?', options: ['propano-1,2,3-triol', 'propan-1-ol', 'etano-1,2-diol', 'butan-1-ol'], answer: 0, explain: 'Trzy atomy węgla i trzy grupy –OH przy atomach 1, 2 i 3: propano-1,2,3-triol.' },
        { id: 'z6acbr', q: 'Dlaczego glicerol dodaje się do kremów?', options: ['bo pachnie owocami', 'bo zatrzymuje wilgoć', 'bo jest trujący dla bakterii', 'bo nadaje kremom kolor'], answer: 1, explain: 'Glicerol zatrzymuje wodę – nawilża skórę.' },
        { id: '05xm49', q: 'Jakie właściwości ma glicerol?', options: ['gęsta, słodka ciecz, dobrze rozpuszczalna w wodzie', 'biały proszek nierozpuszczalny w wodzie', 'gaz o ostrym zapachu', 'żółta ciecz, nie miesza się z wodą'], answer: 0, explain: 'Glicerol to bezbarwna, gęsta ciecz o słodkim smaku, bez zapachu, dobrze rozpuszczalna w wodzie.' },
        { id: 'qenwob', q: 'Prawda czy fałsz?\nAlkohole są wodorotlenkami, bo mają grupę –OH.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. W alkoholach grupa –OH jest połączona z atomem węgla i nie odłącza się jako jon OH⁻ – odczyn jest obojętny.' },
        { id: '8q1s2l', q: 'Czym jest denaturat?', options: ['czystym metanolem', 'skażonym etanolem, którego nie wolno pić', 'roztworem glicerolu', 'rodzajem benzyny z ropy'], answer: 1, explain: 'Denaturat to etanol skażony dodatkami – nie nadaje się do picia.' },
        { id: 'm9d7pe', q: 'Który wzór jest wzorem ogólnym alkoholi monohydroksylowych?', options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ₊₁COOH', 'CₙH₂ₙ', 'CₙH₂ₙ₊₁OH'], answer: 3, explain: 'Alkohol = grupa alkilowa CₙH₂ₙ₊₁ + grupa –OH.' },
      ],
    },
    {
      id: 'kwasy-karboksylowe',
      name: 'Kwasy karboksylowe i estry',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. IX „Pochodne węglowodorów”, wym. 4–6 (kwasy w przyrodzie, kwasy monokarboksylowe do 4 atomów C – wzory i nazwy, właściwości i reakcje kwasu octowego, dysocjacja, estry kwasów metanowego i etanowego z metanolem i etanolem). Zadanie o occie łączy z dz. V, wym. 6 (stężenie procentowe). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Budowa</h3>
        <p>Grupa funkcyjna kwasów karboksylowych to <b>grupa karboksylowa –COOH</b>. Wzór ogólny kwasów monokarboksylowych: <b>C<sub>n</sub>H<sub>2n+1</sub>COOH</b> (dla n = 0: HCOOH).</p>
        <table>
          <tr><th>Nazwa systematyczna</th><th>Nazwa zwyczajowa</th><th>Wzór</th></tr>
          <tr><td>kwas metanowy</td><td>kwas mrówkowy</td><td>HCOOH</td></tr>
          <tr><td>kwas etanowy</td><td>kwas octowy</td><td>CH<sub>3</sub>COOH</td></tr>
          <tr><td>kwas propanowy</td><td>kwas propionowy</td><td>CH<sub>3</sub>–CH<sub>2</sub>–COOH</td></tr>
          <tr><td>kwas butanowy</td><td>kwas masłowy</td><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH</td></tr>
        </table>
        <p>Atom węgla z grupy –COOH liczy się do łańcucha: kwas octowy ma 2 atomy C, więc jest etanowy.</p>
        <p><b>Kwasy w przyrodzie</b>: mrówkowy – w jadzie mrówek i w pokrzywach, szczawiowy – w szczawiu i rabarbarze, cytrynowy – w cytrynach i innych owocach.</p>
        <h3>Kwas octowy (etanowy)</h3>
        <ul>
          <li>Bezbarwna ciecz o ostrym, charakterystycznym zapachu, dobrze miesza się z wodą. Ocet to jego wodny roztwór.</li>
          <li>Powstaje m.in. w <b>fermentacji octowej</b> etanolu (dzięki bakteriom octowym).</li>
          <li>W wodzie dysocjuje: CH<sub>3</sub>COOH ⇄ CH<sub>3</sub>COO<sup>−</sup> + H<sup>+</sup> – <b>odczyn kwasowy</b>. Anion CH<sub>3</sub>COO<sup>−</sup> to anion octanowy (etanianowy).</li>
          <li>Reaguje jak kwasy nieorganiczne:
            <ul>
              <li>z metalem: 2CH<sub>3</sub>COOH + Mg → (CH<sub>3</sub>COO)<sub>2</sub>Mg + H<sub>2</sub>↑ (octan magnezu)</li>
              <li>z tlenkiem metalu: 2CH<sub>3</sub>COOH + CaO → (CH<sub>3</sub>COO)<sub>2</sub>Ca + H<sub>2</sub>O</li>
              <li>z wodorotlenkiem: CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O (octan sodu)</li>
            </ul>
          </li>
          <li>Zastosowanie: ocet – przyprawa i konserwowanie żywności.</li>
        </ul>
        <h3>Estry</h3>
        <p><b>Kwas + alkohol ⇄ ester + woda</b> (reakcja estryfikacji, katalizator – stężony H<sub>2</sub>SO<sub>4</sub>).</p>
        <ul>
          <li>CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH ⇄ CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O – <b>etanian etylu</b> (octan etylu)</li>
          <li>HCOOH + CH<sub>3</sub>OH ⇄ HCOOCH<sub>3</sub> + H<sub>2</sub>O – <b>metanian metylu</b> (mrówczan metylu)</li>
        </ul>
        <p>Nazwa estru: część od kwasu (<b>-an</b>: metanian, etanian; zwyczajowo mrówczan, octan) + część od alkoholu (<b>-ylu</b>: metylu, etylu). Estry mają zwykle przyjemny, owocowy zapach i słabo rozpuszczają się w wodzie – stosuje się je jako substancje zapachowe (aromaty, perfumy) i rozpuszczalniki.</p>
        <div class="tip">💡 Ester = „kwas + alkohol − woda”. Nazwa: najpierw kwas, potem alkohol – <i>octan etylu</i> z kwasu octowego i etanolu.</div>`,
      infographicNote: 'Czytaj od góry: z etanolu powstaje kwas octowy, a kwas z alkoholem daje ester.',
      infographic: {
        type: 'kroki',
        top: { title: 'Grupa karboksylowa –COOH', text: 'CₙH₂ₙ₊₁COOH\nHCOOH – mrówkowy, CH₃COOH – octowy', kolor: 5 },
        items: [
          { title: 'Etanol', text: 'fermentacja octowa (bakterie octowe)', kolor: 1 },
          { title: 'Kwas octowy CH₃COOH', text: 'CH₃COOH ⇄ CH₃COO⁻ + H⁺ – odczyn kwasowy\nz NaOH → octan sodu + woda', kolor: 2 },
          { title: '+ alkohol (estryfikacja)', text: 'kwas + alkohol ⇄ ester + woda\nkatalizator – stężony H₂SO₄', kolor: 1 },
          { title: 'Ester', text: 'CH₃COOC₂H₅ – octan etylu\nowocowy zapach; aromaty, rozpuszczalniki', kolor: 3 },
        ],
        bottom: { title: '💡 Nazwa estru', text: 'najpierw kwas, potem alkohol: octan etylu – z kwasu octowego i etanolu', kolor: 4 },
      },
      flashcards: [
        ['Grupa karboksylowa', '–COOH'],
        ['Kwas metanowy', 'HCOOH – kwas mrówkowy'],
        ['Kwas etanowy', 'CH₃COOH – kwas octowy'],
        ['Kwas propanowy', 'CH₃–CH₂–COOH (propionowy)'],
        ['Kwas butanowy', 'CH₃–CH₂–CH₂–COOH (masłowy)'],
        ['Kwas mrówkowy w przyrodzie', 'jad mrówek, pokrzywa'],
        ['Kwas szczawiowy w przyrodzie', 'szczaw, rabarbar'],
        ['Dysocjacja kwasu octowego', 'CH₃COOH ⇄ CH₃COO⁻ + H⁺'],
        ['Kwas octowy + NaOH →', 'octan sodu CH₃COONa + H₂O'],
        ['Kwas + alkohol ⇄', 'ester + woda (estryfikacja, katalizator H₂SO₄)'],
        ['Octan etylu (etanian etylu)', 'CH₃COOC₂H₅ – z kwasu octowego i etanolu'],
        ['Właściwości estrów', 'przyjemny owocowy zapach, słabo rozpuszczalne w wodzie'],
      ],
      questions: [
        { id: 'ru6dab', q: 'Która grupa jest grupą funkcyjną kwasów karboksylowych?', options: ['–OH', '–COOH', '–NH₂', '–Cl'], answer: 1, explain: 'Grupa karboksylowa –COOH.' },
        { id: '1m00s8', q: 'Jaka jest nazwa zwyczajowa kwasu etanowego?', options: ['kwas mrówkowy', 'kwas masłowy', 'kwas octowy', 'kwas cytrynowy'], answer: 2, explain: 'Kwas etanowy CH₃COOH to kwas octowy – jego roztwór to ocet.' },
        { id: 'qpp5ez', q: 'Jaki jest wzór kwasu metanowego (mrówkowego)?', options: ['HCOOH', 'CH₃COOH', 'CH₃OH', 'HCHO'], answer: 0, explain: 'Kwas metanowy ma jeden atom węgla – w grupie –COOH: HCOOH.' },
        { id: 'swuurx', q: 'Ile atomów węgla ma cząsteczka kwasu butanowego?', options: ['3', '5', '2', '4'], answer: 3, explain: 'But- = 4 atomy węgla, licząc razem z atomem węgla z grupy –COOH: CH₃–CH₂–CH₂–COOH.' },
        { id: 'brnw9t', q: 'Gdzie w przyrodzie występuje kwas mrówkowy?', options: ['w cytrynach', 'w jadzie mrówek i w pokrzywach', 'w szczawiu', 'w mleku'], answer: 1, explain: 'Kwas mrówkowy jest w jadzie mrówek; pokrzywa po dotknięciu wstrzykuje go pod skórę.' },
        { id: 'dbol9c', q: 'W której roślinie występuje kwas szczawiowy?', options: ['w rabarbarze', 'w ziemniakach', 'w pszenicy', 'w pomarańczy'], answer: 0, explain: 'Kwas szczawiowy znajduje się m.in. w szczawiu i rabarbarze.' },
        { id: 'yde0q5', q: 'Jak zabarwi się oranż metylowy w roztworze kwasu octowego?', options: ['na żółto', 'na malinowo', 'na czerwono', 'nie zmieni barwy'], answer: 2, explain: 'Kwas octowy dysocjuje i daje jony H⁺ – odczyn kwasowy, oranż metylowy czerwienieje.' },
        { id: 'c8ne8d', q: 'Które równanie dysocjacji kwasu octowego jest poprawne?', options: ['CH₃COOH ⇄ CH₃⁺ + COOH⁻', 'CH₃COOH ⇄ CH₃COO⁻ + H⁺', 'CH₃COOH ⇄ CH₃CO⁺ + OH⁻', 'CH₃COOH ⇄ 4H⁺ + C₂O₂⁴⁻'], answer: 1, explain: 'Odłącza się tylko atom wodoru z grupy –COOH. Powstaje anion octanowy CH₃COO⁻.' },
        { id: '5la9u5', q: 'Co powstaje w reakcji kwasu octowego z wodorotlenkiem sodu?', options: ['octan sodu i wodór', 'etanol i sód', 'octan sodu i woda', 'octan etylu i woda'], answer: 2, explain: 'CH₃COOH + NaOH → CH₃COONa + H₂O – sól i woda, jak w każdym zobojętnianiu.' },
        { id: '2n1od2', q: 'Jaki gaz wydziela się w reakcji kwasu octowego z magnezem?', options: ['wodór', 'tlen', 'tlenek węgla(IV)', 'chlor'], answer: 0, explain: '2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂↑. Metal + kwas → sól + wodór.' },
        { id: '4iiew4', q: 'Jak nazywa się ester powstający z kwasu etanowego i etanolu?', options: ['etanian metylu', 'metanian etylu', 'etanian etylu', 'etanol etanowy'], answer: 2, explain: 'Najpierw część od kwasu (etanian = octan), potem od alkoholu (etylu): etanian etylu, czyli octan etylu.' },
        { id: 'gwj7pb', q: 'Z jakich substancji powstaje metanian metylu?', options: ['z kwasu metanowego i metanolu', 'z kwasu etanowego i metanolu', 'z kwasu metanowego i etanolu', 'z metanu i tlenu'], answer: 0, explain: 'Metanian – od kwasu metanowego, metylu – od metanolu: HCOOH + CH₃OH ⇄ HCOOCH₃ + H₂O.' },
        { id: '8bdbrl', q: 'Który produkt, oprócz estru, powstaje w reakcji kwasu karboksylowego z alkoholem?', options: ['wodór', 'tlen', 'tlenek węgla(IV)', 'woda'], answer: 3, explain: 'Kwas + alkohol ⇄ ester + woda.' },
        { id: 'v07bwp', q: 'Jaką rolę pełni stężony kwas siarkowy(VI) w reakcji estryfikacji?', options: ['jest produktem', 'jest katalizatorem', 'jest wskaźnikiem', 'jest rozpuszczalnikiem estru'], answer: 1, explain: 'Stężony H₂SO₄ jest katalizatorem reakcji estryfikacji.' },
        { id: 'pv0k43', q: 'Prawda czy fałsz?\nEstry mają zwykle przyjemny, owocowy zapach i dlatego stosuje się je jako aromaty.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 0, explain: 'Prawda – estry to częste substancje zapachowe.' },
      ],
      tasks: [
        {
          id: '1i18px',
          points: 3,
          q: 'Ocet to roztwór kwasu octowego. Masz 300 g octu 10-procentowego. a) Ile gramów kwasu octowego zawiera? b) Ile gramów wody trzeba dolać, żeby otrzymać ocet 6-procentowy?',
          steps: [
            'a) Masa kwasu = 10% z 300 g = 0,1 · 300 g = 30 g.',
            'b) Po dolaniu wody masa kwasu się nie zmienia (30 g), ale ma stanowić 6% roztworu. Masa nowego roztworu: 30 g : 0,06 = 500 g.',
            'Trzeba dolać: 500 g − 300 g = 200 g wody.',
            'Sprawdzenie: 30 g : 500 g = 0,06 = 6%.',
          ],
          answer: 'a) 30 g kwasu octowego; b) 200 g wody',
          scoring: [
            '1 pkt – obliczenie masy kwasu octowego: 30 g.',
            '1 pkt – obliczenie masy roztworu 6-procentowego: 500 g.',
            '1 pkt – poprawna odpowiedź: trzeba dolać 200 g wody.',
          ],
        },
      ],
    },
    {
      id: 'zwiazki-biologiczne',
      name: 'Tłuszcze, białka i cukry',
      basis: 'Dz.U. 2024 poz. 996, chemia kl. VII–VIII, dz. X „Substancje chemiczne o znaczeniu biologicznym”, wym. 1–8 (kwasy tłuszczowe: palmitynowy, stearynowy, oleinowy; tłuszcze i ich podział; glicyna i wiązanie peptydowe; białka, denaturacja i koagulacja, wykrywanie białka stężonym HNO₃; cukry: glukoza, fruktoza, sacharoza, skrobia, celuloza; wykrywanie skrobi jodem). Podstawa nie dzieli chemii na klasy VII i VIII – umieszczenie działu w klasie 8 to decyzja redakcyjna (kolejność można dopasować do podręcznika).',
      theory: `
        <h3>Kwasy tłuszczowe</h3>
        <table>
          <tr><th>Kwas</th><th>Wzór półstrukturalny</th><th>Rodzaj</th></tr>
          <tr><td>palmitynowy</td><td>CH<sub>3</sub>–(CH<sub>2</sub>)<sub>14</sub>–COOH</td><td>nasycony, stały</td></tr>
          <tr><td>stearynowy</td><td>CH<sub>3</sub>–(CH<sub>2</sub>)<sub>16</sub>–COOH</td><td>nasycony, stały</td></tr>
          <tr><td>oleinowy</td><td>CH<sub>3</sub>–(CH<sub>2</sub>)<sub>7</sub>–CH=CH–(CH<sub>2</sub>)<sub>7</sub>–COOH</td><td>nienasycony, ciekły</td></tr>
        </table>
        <p>To długołańcuchowe kwasy karboksylowe – nie rozpuszczają się w wodzie. Kwas oleinowy ma wiązanie podwójne, więc <b>odbarwia wodę bromową</b>; palmitynowy i stearynowy – nie.</p>
        <h3>Tłuszcze</h3>
        <p>Tłuszcze to <b>estry glicerolu i kwasów tłuszczowych</b>. Podział:</p>
        <ul>
          <li>pochodzenie: <b>roślinne</b> (oleje) i <b>zwierzęce</b> (masło, smalec, łój, tran),</li>
          <li>stan skupienia: <b>ciekłe</b> (głównie roślinne) i <b>stałe</b> (głównie zwierzęce; wyjątek – ciekły tran),</li>
          <li>charakter chemiczny: <b>nasycone</b> i <b>nienasycone</b> (te odbarwiają wodę bromową).</li>
        </ul>
        <p>Tłuszcze nie rozpuszczają się w wodzie, ale rozpuszczają się np. w benzynie. Są źródłem energii i materiałem zapasowym.</p>
        <h3>Aminokwasy i białka</h3>
        <p><b>Glicyna</b> (kwas aminooctowy): H<sub>2</sub>N–CH<sub>2</sub>–COOH – ma grupę <b>aminową –NH<sub>2</sub></b> i <b>karboksylową –COOH</b>. Dwie cząsteczki glicyny łączą się (kondensacja) w dipeptyd, a wydziela się woda:</p>
        <p>H<sub>2</sub>N–CH<sub>2</sub>–COOH + H<sub>2</sub>N–CH<sub>2</sub>–COOH → H<sub>2</sub>N–CH<sub>2</sub>–CO–NH–CH<sub>2</sub>–COOH + H<sub>2</sub>O</p>
        <p>Fragment –CO–NH– to <b>wiązanie peptydowe</b>. <b>Białka</b> to długie łańcuchy aminokwasów. Zawierają głównie <b>C, H, O, N</b>, często też S (i inne pierwiastki).</p>
        <ul>
          <li><b>Denaturacja</b> – nieodwracalne zniszczenie struktury białka: wysoka temperatura, etanol, kwasy, zasady, sole metali ciężkich (np. CuSO<sub>4</sub>).</li>
          <li><b>Koagulacja (wysalanie)</b> – odwracalne wytrącenie białka, np. pod wpływem NaCl; po dodaniu wody białko znów się rozpuszcza.</li>
          <li><b>Wykrywanie białka</b>: stężony kwas azotowy(V) barwi białko na <b>żółto</b> (reakcja ksantoproteinowa).</li>
        </ul>
        <h3>Cukry (węglowodany)</h3>
        <p>Zbudowane z <b>C, H i O</b>.</p>
        <table>
          <tr><th>Cukier</th><th>Wzór</th><th>Rodzaj</th><th>Gdzie / cechy</th></tr>
          <tr><td>glukoza</td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></td><td>prosty</td><td>np. winogrona i inne owoce; słodka, rozpuszczalna</td></tr>
          <tr><td>fruktoza</td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></td><td>prosty</td><td>owoce, miód; słodka, rozpuszczalna</td></tr>
          <tr><td>sacharoza</td><td>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></td><td>dwucukier</td><td>cukier z buraków i trzciny; słodka, rozpuszczalna</td></tr>
          <tr><td>skrobia</td><td>(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub></td><td>wielocukier</td><td>ziemniaki, ziarna zbóż; bez smaku, w gorącej wodzie tworzy kleik</td></tr>
          <tr><td>celuloza</td><td>(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub></td><td>wielocukier</td><td>drewno, bawełna; włóknista, nierozpuszczalna</td></tr>
        </table>
        <p><b>Wykrywanie skrobi</b>: roztwór jodu (np. jod w roztworze KI, jodyna) barwi skrobię na <b>ciemnogranatowo</b>.</p>
        <div class="tip">💡 Testy w kuchni: kwas azotowy(V) + białko = <b>żółte</b>; jod + skrobia = <b>granatowe</b>; woda bromowa + tłuszcz nienasycony = odbarwienie.</div>`,
      infographicNote: 'Trzy grupy związków – z czego są zbudowane i jak się dzielą; na dole – jak je wykryć.',
      infographic: {
        type: 'drzewo', kolumny: 1,
        root: { title: 'Tłuszcze, białka i cukry', kolor: 5 },
        branches: [
          { title: 'Tłuszcze', text: 'estry glicerolu i kwasów tłuszczowych', items: ['roślinne (oleje) i zwierzęce (masło, smalec)', 'nasycone i nienasycone (C=C)'], kolor: 4 },
          { title: 'Białka', text: 'łańcuchy aminokwasów, wiązanie peptydowe –CO–NH–', items: ['denaturacja – nieodwracalna (temperatura, etanol)', 'koagulacja – odwracalna (NaCl)'], kolor: 1 },
          { title: 'Cukry', text: 'zbudowane z C, H i O', items: ['proste: glukoza, fruktoza C₆H₁₂O₆', 'dwucukier: sacharoza C₁₂H₂₂O₁₁', 'wielocukry: skrobia, celuloza'], kolor: 3 },
        ],
        bottom: { title: '🔍 Jak wykryć?', items: ['białko + stężony HNO₃ → żółte', 'skrobia + jod → ciemnogranatowe', 'tłuszcz nienasycony + woda bromowa → odbarwienie'], kolor: 2 },
      },
      flashcards: [
        ['Kwasy palmitynowy i stearynowy', 'nasycone kwasy tłuszczowe, stałe'],
        ['Kwas oleinowy', 'nienasycony kwas tłuszczowy (C=C), ciekły; odbarwia wodę bromową'],
        ['Tłuszcz (budowa)', 'ester glicerolu i kwasów tłuszczowych'],
        ['Jak odróżnić tłuszcz nienasycony od nasyconego?', 'woda bromowa – nienasycony ją odbarwia'],
        ['Glicyna', 'H₂N–CH₂–COOH – najprostszy aminokwas'],
        ['Wiązanie peptydowe', '–CO–NH–'],
        ['Pierwiastki w białkach', 'C, H, O, N (często też S)'],
        ['Denaturacja', 'nieodwracalna: temperatura, etanol, kwasy, zasady, sole metali ciężkich'],
        ['Koagulacja (wysalanie)', 'odwracalna, np. NaCl'],
        ['Białko + stężony HNO₃', 'żółte zabarwienie'],
        ['Glukoza / sacharoza', 'C₆H₁₂O₆ (cukier prosty) / C₁₂H₂₂O₁₁ (dwucukier)'],
        ['Skrobia + jod', 'ciemnogranatowe zabarwienie'],
      ],
      questions: [
        { id: '4pgepq', q: 'Który kwas tłuszczowy jest nienasycony?', options: ['palmitynowy', 'stearynowy', 'oleinowy', 'octowy'], answer: 2, explain: 'Kwas oleinowy ma w łańcuchu jedno wiązanie podwójne C=C. Octowy nie jest kwasem tłuszczowym.' },
        { id: 'tb50v3', q: 'Jak odróżnisz kwas oleinowy od stearynowego?', options: ['fenoloftaleiną', 'wodą bromową – oleinowy ją odbarwi', 'wodą – stearynowy się rozpuści', 'jodem – oleinowy się zabarwi na granatowo'], answer: 1, explain: 'Kwas oleinowy ma wiązanie podwójne i przyłącza brom – woda bromowa się odbarwia.' },
        { id: 'utvdhb', q: 'Tłuszcze to estry…', options: ['etanolu i kwasu octowego', 'glicerolu i kwasów tłuszczowych', 'glukozy i aminokwasów', 'metanolu i kwasu mrówkowego'], answer: 1, explain: 'Tłuszcze powstają z glicerolu (alkoholu z trzema grupami –OH) i kwasów tłuszczowych.' },
        { id: 'smszc5', q: 'Który tłuszcz zwierzęcy jest ciekły?', options: ['smalec', 'masło', 'łój', 'tran'], answer: 3, explain: 'Tłuszcze zwierzęce są zwykle stałe – wyjątkiem jest tran (z ryb).' },
        { id: '5vk84l', q: 'Prawda czy fałsz?\nTłuszcze dobrze rozpuszczają się w wodzie.', options: ['Prawda', 'Fałsz'], noShuffle: true, answer: 1, explain: 'Fałsz. Tłuszcze nie rozpuszczają się w wodzie, ale rozpuszczają się np. w benzynie.' },
        { id: 't1tzcw', q: 'Jakie dwie grupy funkcyjne ma glicyna?', options: ['–OH i –COOH', '–NH₂ i –COOH', '–NH₂ i –OH', 'dwie grupy –COOH'], answer: 1, explain: 'Aminokwas = grupa aminowa –NH₂ + grupa karboksylowa –COOH.' },
        { id: 'gsto9n', q: 'Co, oprócz dipeptydu, powstaje w reakcji kondensacji dwóch cząsteczek glicyny?', options: ['woda', 'wodór', 'amoniak', 'tlenek węgla(IV)'], answer: 0, explain: 'Grupa –COOH jednej cząsteczki łączy się z –NH₂ drugiej i odłącza się cząsteczka wody.' },
        { id: 'wlp3db', q: 'Które pierwiastki zawsze wchodzą w skład białek?', options: ['C, H, O', 'C, H, O, N', 'C, H, Cl', 'Na, Cl, O'], answer: 1, explain: 'Białka zawierają węgiel, wodór, tlen i azot (często też siarkę). Azot pochodzi z grup aminowych.' },
        { id: '7j2hzx', q: 'Co się dzieje z białkiem jaja po ugotowaniu?', options: ['ulega koagulacji – odwracalnie', 'ulega denaturacji – nieodwracalnie', 'zamienia się w skrobię', 'nic się nie zmienia'], answer: 1, explain: 'Wysoka temperatura niszczy strukturę białka – to denaturacja, której nie da się cofnąć.' },
        { id: 'v2078p', q: 'Pod wpływem której substancji białko ulega koagulacji (wysalaniu), a nie denaturacji?', options: ['chlorku sodu', 'siarczanu(VI) miedzi(II)', 'etanolu', 'stężonego kwasu azotowego(V)'], answer: 0, explain: 'NaCl wytrąca białko odwracalnie – to koagulacja. Pozostałe substancje powodują denaturację.' },
        { id: 'b6prl1', q: 'Na jaki kolor stężony kwas azotowy(V) barwi białko?', options: ['granatowy', 'malinowy', 'żółty', 'zielony'], answer: 2, explain: 'Reakcja ksantoproteinowa – żółte zabarwienie świadczy o obecności białka.' },
        { id: 'l08q3x', q: 'Czym wykryjesz skrobię w ziemniaku?', options: ['roztworem jodu', 'fenoloftaleiną', 'wodą bromową', 'kwasem azotowym(V)'], answer: 0, explain: 'Jod barwi skrobię na ciemnogranatowo.' },
        { id: 'jv7al6', q: 'Jaki jest wzór sumaryczny glukozy?', options: ['C₁₂H₂₂O₁₁', 'C₆H₁₂O₆', '(C₆H₁₀O₅)ₙ', 'C₆H₁₀O₆'], answer: 1, explain: 'Glukoza (i fruktoza): C₆H₁₂O₆. C₁₂H₂₂O₁₁ to sacharoza, (C₆H₁₀O₅)ₙ – skrobia i celuloza.' },
        { id: '6xhavm', q: 'Który cukier jest dwucukrem?', options: ['glukoza', 'fruktoza', 'sacharoza', 'celuloza'], answer: 2, explain: 'Sacharoza (cukier z buraków i trzciny) zbudowana jest z dwóch cząsteczek cukrów prostych.' },
        { id: '5lrb4o', q: 'Który cukier buduje włókna bawełny i drewno?', options: ['celuloza', 'skrobia', 'glukoza', 'sacharoza'], answer: 0, explain: 'Celuloza – włóknisty wielocukier, nierozpuszczalny w wodzie.' },
        { id: '63ok50', q: 'Z jakich pierwiastków zbudowane są cukry?', options: ['C, H, N', 'C, H, O', 'C, O, S', 'H, O, N'], answer: 1, explain: 'Cukry (węglowodany) zbudowane są z węgla, wodoru i tlenu.' },
      ],
      tasks: [
        {
          id: 'jwu9lk',
          points: 2,
          q: 'Oblicz masę cząsteczkową glukozy C₆H₁₂O₆ oraz zawartość procentową (procent masowy) węgla w glukozie. Masy atomowe: C – 12 u, H – 1 u, O – 16 u.',
          steps: [
            'Masa cząsteczkowa: 6 · 12 u + 12 · 1 u + 6 · 16 u = 72 u + 12 u + 96 u = 180 u.',
            'Węgiel to 72 u ze 180 u: 72 : 180 = 0,4 = 40%.',
          ],
          answer: '180 u; 40% węgla',
          scoring: [
            '1 pkt – poprawna masa cząsteczkowa: 180 u.',
            '1 pkt – poprawna zawartość procentowa węgla: 40%.',
          ],
        },
      ],
    },
  ],
});
