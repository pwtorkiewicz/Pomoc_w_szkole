/* 🌍 Świat – jak uczą się w innych krajach – klasa 3.
 * Moduł POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Każdy dział: temat z oficjalnego programu nauczania innego kraju, opisany po polsku, na poziomie ucznia kl. 3.
 * Fakty o szkołach za granicą – tylko z dokumentów ministerstw (adresy w polu basis i w js/dane/kl3/zrodla.js). */
(function () {
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'swiat',
    name: 'Świat – jak uczą się inni',
    icon: '🌍',
    color: '#1f8fb3',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'anglia-tabliczka',
        name: 'Anglia: tabliczka mnożenia do 12 × 12',
        basis: 'Poza polską podstawą programową – moduł „Świat” (decyzja rodzica). Źródła (gov.uk, sprawdzone 14.11.2026): National curriculum in England: mathematics programmes of study, key stages 1 and 2 (Department for Education, 2013) – Year 4: „recall multiplication and division facts for multiplication tables up to 12 × 12”, „By the end of year 4, pupils should have memorised their multiplication tables up to and including the 12 multiplication table”, przykład rozdzielności „39 × 7 = 30 × 7 + 9 × 7”; ulotka „Multiplication tables check: information for parents” (Standards and Testing Agency, 2025) – sprawdzian w Year 4 w czerwcu, na ekranie, 25 pytań, 6 sekund na pytanie, 3 pytania na próbę, nie ma progu zaliczenia; Year 4 = dzieci w wieku 8–9 lat (strona „The national curriculum”). W polskiej podstawie klasy 1–3 (Dz.U. 2024 poz. 996): tabliczka mnożenia w zakresie 100 i mnożenie przez 10 liczb mniejszych od 20 – dział rozszerza to o mnożenie przez 11 i 12. Tuzin – „dwanaście sztuk czegoś” (Słownik języka polskiego PWN, sjp.pwn.pl). Wszystkie wyniki policzone dwukrotnie.',
        theory: `
          <h3>Jak to jest w Anglii?</h3>
          <p>W Anglii dzieci w wieku 8–9 lat – tak jak ty – uczą się tabliczki mnożenia <b>aż do 12 × 12</b>.</p>
          <p>W czerwcu piszą sprawdzian na komputerze: <b>25 pytań</b>, na każde mają <b>6 sekund</b>.</p>
          <h3>Razy 11</h3>
          <p>11 × 2 = 22, 11 × 3 = 33, 11 × 4 = 44, …, 11 × 9 = 99</p>
          <p class="tip">Do 9: napisz tę samą cyfrę dwa razy! 11 × 7 = 77.</p>
          <p>11 × 10 = 110</p>
          <h3>Razy 12</h3>
          <p>12 to 10 i 2. Pomnóż przez 10, pomnóż przez 2 i dodaj:</p>
          <p><b>12 × 4</b> = 10 × 4 + 2 × 4 = 40 + 8 = <b>48</b></p>
          <table><tr><th>12 × 2</th><th>12 × 3</th><th>12 × 4</th><th>12 × 5</th><th>12 × 6</th></tr>
            <tr><td>24</td><td>36</td><td>48</td><td>60</td><td>72</td></tr></table>
          <p>12 × 10 = 120, 12 × 12 = 144</p>
          <h3>Gdzie jest 12?</h3>
          <p>🥚 <b>tuzin</b> = 12 sztuk, 📅 rok ma 12 miesięcy, 🕛 na zegarze jest 12 godzin</p>`,
        infographicNote: 'Na górze – angielski sprawdzian. Niżej – sztuczki na razy 11 i razy 12.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '⏱️ Anglia: 25 pytań', text: 'po 6 sekund na pytanie' },
          items: [
            { icon: '1️⃣', kolor: 1, title: 'Razy 11', text: '11 × 3 = 33\ncyfra dwa razy' },
            { icon: '🔟', kolor: 1, title: '11 × 10', text: '110' },
            { icon: '➕', kolor: 3, title: 'Razy 12', text: '12 × 4 = 40 + 8 = 48' },
            { icon: '🏆', kolor: 3, title: '12 × 12', text: '144' },
            { icon: '🥚', kolor: 2, title: 'Tuzin', text: '12 sztuk' },
            { icon: '📅', kolor: 2, title: 'Rok', text: '12 miesięcy' },
          ],
        },
        flashcards: [
          ['11 × 4', '44'],
          ['11 × 8', '88'],
          ['11 × 10', '110'],
          ['12 × 3', '36'],
          ['12 × 5', '60'],
          ['12 × 6', '72'],
          ['12 × 10', '120'],
          ['12 × 12', '144'],
          ['Tuzin', '12 sztuk'],
          ['Sprawdzian w Anglii', '25 pytań, po 6 sekund'],
        ],
        questions: [
          { id: 'fm1fe6', q: '11 × 3 = ?', options: ['33', '31', '14'], answer: 0, explain: 'Razy 11 (do 9): ta sama cyfra dwa razy. 11 × 3 = 33.' },
          { id: '8lv5jz', q: '11 × 5 = ?', options: ['55', '51', '16'], answer: 0, explain: 'Cyfra 5 dwa razy: 11 × 5 = 55.' },
          { id: '0l7ocy', q: '11 × 9 = ?', options: ['99', '91', '20'], answer: 0, explain: 'Cyfra 9 dwa razy: 11 × 9 = 99.' },
          { id: 'suhdkz', q: '11 × 10 = ?', options: ['110', '1010', '21'], answer: 0, explain: 'Razy 10: dopisz zero. 11 × 10 = 110.' },
          { id: 'mjuyco', q: '12 × 2 = ?', options: ['24', '14', '22'], answer: 0, explain: '12 + 12 = 24.' },
          { id: '6kjd4o', q: '12 × 3 = ?', options: ['36', '33', '15'], answer: 0, explain: '10 × 3 + 2 × 3 = 30 + 6 = 36.' },
          { id: '0v23fe', q: '12 × 4 = ?', options: ['48', '44', '42'], answer: 0, explain: '10 × 4 + 2 × 4 = 40 + 8 = 48.' },
          { id: 'z3l85x', q: '12 × 5 = ?', options: ['60', '55', '52'], answer: 0, explain: '10 × 5 + 2 × 5 = 50 + 10 = 60.' },
          { id: 'io5anl', q: '12 × 6 = ?', options: ['72', '62', '66'], answer: 0, explain: '10 × 6 + 2 × 6 = 60 + 12 = 72.' },
          { id: 'xpga66', q: '12 × 10 = ?', options: ['120', '102', '22'], answer: 0, explain: 'Razy 10: dopisz zero. 12 × 10 = 120.' },
          { id: '9uva39', q: 'Ile to jest tuzin?', options: ['12 sztuk', '10 sztuk', '20 sztuk'], answer: 0, explain: 'Tuzin to 12 sztuk, np. tuzin jajek.' },
          { id: 'xwtkio', q: 'Mama kupiła 2 tuziny jajek. Ile to jajek?', options: ['24', '12', '22'], answer: 0, explain: 'Tuzin to 12. 2 tuziny: 12 × 2 = 24 jajka.' },
          { id: 'grsq0h', q: 'Rok ma 12 miesięcy. Ile miesięcy mają 3 lata?', options: ['36', '15', '33'], answer: 0, explain: '12 × 3 = 36 miesięcy.' },
          { id: '8akbm2', q: '24 : 12 = ?', options: ['2', '12', '4'], answer: 0, explain: '12 × 2 = 24, więc 24 : 12 = 2.' },
          { id: '12y6oc', q: 'Ile sekund mają angielskie dzieci na jedno pytanie na sprawdzianie z tabliczki?', options: ['6 sekund', '60 sekund', '1 sekundę'], answer: 0, explain: 'Na każde z 25 pytań jest 6 sekund. Trzeba znać tabliczkę na pamięć!' },
          { id: 'qylgfb', q: 'Prawda czy fałsz?\n12 × 4 = 10 × 4 + 2 × 4', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. 12 to 10 i 2: 40 + 8 = 48.' },
        ],
      },
    ],
  });
})();
