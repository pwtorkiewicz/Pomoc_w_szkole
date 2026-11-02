/* Edukacja muzyczna – klasa 3, tylko wiedza (dotychczasowa podstawa programowa: Dz.U. 2024 poz. 996, zał. 1,
 * I etap edukacyjny – VIII. Edukacja muzyczna). Śpiew, taniec i grę dziecko ćwiczy na zajęciach. */
(function () {
  const PP = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), VIII. Edukacja muzyczna';
  const KONIEC = ' Podstawa podaje osiągnięcia na koniec klasy 3 – bez podziału na klasy I–III. Aplikacja ćwiczy tylko wiedzę – śpiew, grę i taniec ćwiczy się na zajęciach.';
  const ZPE = 'Zintegrowana Platforma Edukacyjna (zpe.gov.pl)';
  const PF = { noShuffle: true };
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'muzyka',
    name: 'Edukacja muzyczna',
    icon: '🎵',
    color: '#5b6fd6',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'dzwieki',
        name: 'Dźwięki, głosy i instrumenty',
        basis: `${PP}, 1. Słuchanie muzyki, pkt 1 (źródła dźwięku), pkt 2 (gesty dźwiękotwórcze: klaskanie, pstrykanie, tupanie, uderzanie o uda), pkt 4 (dźwięki wysokie – niskie, długie – krótkie, ciche – głośne; głosy: sopran, bas; wybrane instrumenty), pkt 5 (solista, chór, orkiestra), pkt 6 (muzyka smutna, wesoła, skoczna, marszowa); 4. Gra na instrumentach, pkt 2, 6 (instrumenty perkusyjne, dzwonki, ksylofon, flet podłużny, flażolet). Instrumenty perkusyjne: ${ZPE}, „Instrumenty perkusyjne” (kl. II: bęben, tamburyn, ksylofon, marakasy, trójkąt, dzwonki); głosy – ZPE (wyniki wyszukiwarki ograniczonej do zpe.gov.pl: sopran wśród głosów dziecięcych i kobiecych, bas – głos męski). Sprawdzone 2.11.2026.${KONIEC}`,
        theory: `
          <h3>Jakie mogą być dźwięki?</h3>
          <ul>
            <li>🐦 <b>wysokie</b> – jak ćwierkanie ptaka; 🐻 <b>niskie</b> – jak pomruk niedźwiedzia,</li>
            <li>📢 <b>głośne</b> i 🤫 <b>ciche</b>,</li>
            <li><b>długie</b> i <b>krótkie</b>.</li>
          </ul>
          <h3>Gesty dźwiękotwórcze</h3>
          <p>Muzykę możesz robić własnym ciałem: <b>klaskanie</b> 👏, <b>tupanie</b>, <b>pstrykanie</b> palcami, uderzanie dłońmi o uda.</p>
          <h3>Głosy ludzkie</h3>
          <p><b>Sopran</b> – wysoki głos kobiet i dzieci. <b>Bas</b> – najniższy głos męski.</p>
          <h3>Kto wykonuje muzykę?</h3>
          <ul>
            <li><b>solista</b> – śpiewa albo gra sam,</li>
            <li><b>chór</b> – wiele osób śpiewa razem,</li>
            <li><b>orkiestra</b> – wielu muzyków gra razem na instrumentach.</li>
          </ul>
          <h3>Instrumenty</h3>
          <p><b>Perkusyjne</b> – uderzasz w nie albo nimi potrząsasz: bęben 🥁, trójkąt, tamburyn, marakasy, kołatka. Na <b>dzwonkach</b> i <b>ksylofonie</b> zagrasz też melodię.</p>
          <p>Inne instrumenty: <b>flet</b> i <b>flażolet</b> (dmuchasz), <b>skrzypce</b> i <b>gitara</b> (mają struny), <b>pianino</b> (ma klawisze).</p>
          <h3>Jaki nastrój ma muzyka?</h3>
          <p>Muzyka może być <b>wesoła</b>, <b>smutna</b>, <b>skoczna</b> (do tańca) albo <b>marszowa</b> (do maszerowania). Kołysanka jest <b>cicha i spokojna</b>.</p>`,
        flashcards: [
          ['Dźwięk wysoki', 'np. ćwierkanie ptaka'],
          ['Dźwięk niski', 'np. pomruk niedźwiedzia'],
          ['Gesty dźwiękotwórcze', 'klaskanie, tupanie, pstrykanie, uderzanie o uda'],
          ['Sopran', 'wysoki głos kobiet i dzieci'],
          ['Bas', 'najniższy głos męski'],
          ['Solista', 'śpiewa albo gra sam'],
          ['Chór', 'wiele osób śpiewa razem'],
          ['Orkiestra', 'wielu muzyków gra razem'],
          ['Instrumenty perkusyjne', 'bęben, trójkąt, tamburyn, marakasy'],
          ['Na czym zagrasz melodię?', 'np. na dzwonkach, ksylofonie, flecie'],
          ['Muzyka marszowa', 'równa, do maszerowania'],
        ],
        questions: [
          { id: '2f6bjj', q: 'Który dźwięk jest wysoki?', options: ['ćwierkanie ptaka', 'pomruk niedźwiedzia', 'buczenie traktora'], answer: 0, explain: 'Ptak ćwierka wysoko. Niedźwiedź mruczy nisko.' },
          { id: '77d9pb', q: 'Który dźwięk jest niski?', options: ['bęben basowy', 'gwizdek', 'pisk myszy'], answer: 0, explain: 'Duży bęben brzmi nisko. Gwizdek i pisk są wysokie.' },
          { id: '8c6i68', q: 'Co jest gestem dźwiękotwórczym?', options: ['klaskanie', 'mruganie', 'uśmiech'], answer: 0, explain: 'Klaskanie, tupanie i pstrykanie dają dźwięk – to gesty dźwiękotwórcze.' },
          { id: 'jqnbjs', q: 'Jak nazywa się wysoki głos kobiet i dzieci?', options: ['sopran', 'bas', 'chór'], answer: 0, explain: 'Sopran to wysoki głos. Bas – najniższy męski.' },
          { id: 't3zjt5', q: 'Jak nazywa się najniższy głos męski?', options: ['bas', 'sopran', 'solista'], answer: 0, explain: 'Bas to najniższy głos męski.' },
          { id: 'ek6thg', q: 'Jak nazywamy osobę, która śpiewa sama?', options: ['solista', 'chór', 'orkiestra'], answer: 0, explain: 'Solista występuje sam.' },
          { id: 'g468c5', q: 'Wielu uczniów śpiewa razem. To…', options: ['chór', 'orkiestra', 'solista'], answer: 0, explain: 'Chór to grupa osób, które śpiewają razem.' },
          { id: '91dqpn', q: 'Wielu muzyków gra razem na różnych instrumentach. To…', options: ['orkiestra', 'chór', 'solista'], answer: 0, explain: 'Orkiestra to duży zespół grający na instrumentach.' },
          { id: 'a1skx6', q: 'Który instrument jest perkusyjny?', options: ['tamburyn', 'flet', 'skrzypce'], answer: 0, explain: 'W tamburyn uderzasz i nim potrząsasz – to instrument perkusyjny.' },
          { id: 'os78yt', q: 'Na którym instrumencie zagrasz melodię?', options: ['na dzwonkach', 'na marakasach', 'na trójkącie'], answer: 0, explain: 'Dzwonki mają sztabki o różnych dźwiękach – zagrasz na nich melodię.' },
          { id: '4uckgq', q: 'W który instrument trzeba dmuchać?', options: ['w flet', 'w bęben', 'w gitarę'], answer: 0, explain: 'Flet i flażolet to instrumenty, w które dmuchamy.' },
          { id: '3b7gx6', q: 'Jaka muzyka najlepiej pasuje do maszerowania?', options: ['marszowa', 'kołysanka', 'smutna'], answer: 0, explain: 'Marsz ma równy rytm – raz, dwa, raz, dwa.' },
          { id: 'dm09dh', q: 'Jaka jest kołysanka?', options: ['cicha i spokojna', 'głośna i szybka', 'skoczna'], answer: 0, explain: 'Kołysanka ma usypiać – jest cicha i spokojna.' },
          { id: 'npr35d', q: 'Prawda czy fałsz?\nSkrzypce i gitara mają struny.', options: TF, ...PF, answer: 0, explain: 'Skrzypce i gitara to instrumenty strunowe.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'zapis-tance',
        name: 'Zapis muzyki, hymn i tańce',
        basis: `${PP}, 5. Znajomość form zapisu dźwięku, pkt 1 (nagranie przy pomocy komputera, dyktafonu, telefonu; notacja muzyczna), pkt 2 (zapis za pomocą piktogramów, klocków, kolorów, obrazków); 2. Śpiew, pkt 4 (postawa, oddech), pkt 5 (rozpoznaje i śpiewa hymn Polski), pkt 6 (piosenki w języku obcym); 3. Rytmika i taniec, pkt 4 (pląsy), pkt 7 (tańce ludowe polskie). Tańce narodowe: ${ZPE}, „Formy taneczne. Tańce użytkowe i stylizowane” (polonez, mazur, oberek, kujawiak, krakowiak); krakowiak z Małopolski – wyniki wyszukiwarki ograniczonej do zpe.gov.pl. Hymn – ustawa o godle, barwach i hymnie RP (Dz.U. 2025 poz. 299, art. 12). Sprawdzone 2.11.2026.${KONIEC}`,
        theory: `
          <h3>Jak zapisać muzykę?</h3>
          <ul>
            <li><b>Nagranie</b> – telefonem, dyktafonem albo komputerem. Możesz je potem odsłuchać.</li>
            <li><b>Nuty</b> – znaki zapisane na <b>pięciolinii</b> (pięć linii). Muzyk czyta je i gra.</li>
            <li><b>Obrazki</b> – w zabawie zapiszesz rytm np. kolorowymi klockami albo rysunkami: 🔴 = klaśnij, 🔵 = tupnij.</li>
          </ul>
          <h3>Śpiewamy</h3>
          <p>Śpiewaj <b>wyprostowany</b>, oddychaj spokojnie, wyraźnie wymawiaj słowa. Nie krzycz – śpiewaj swoim naturalnym głosem.</p>
          <h3>Hymn Polski</h3>
          <p>Hymn Polski to „<b>Mazurek Dąbrowskiego</b>”. Śpiewamy go na uroczystościach, stojąc prosto i w ciszy.</p>
          <h3>Polskie tańce narodowe</h3>
          <p>Jest ich pięć: <b>polonez</b>, <b>mazur</b>, <b>oberek</b>, <b>kujawiak</b> i <b>krakowiak</b>. Krakowiak pochodzi z Małopolski – okolic Krakowa.</p>
          <p class="tip">Na zajęciach poznasz też <b>pląsy</b> – zabawy ruchowe przy piosence – i tańce z innych krajów.</p>`,
        flashcards: [
          ['Jak nagrać muzykę?', 'telefonem, dyktafonem albo komputerem'],
          ['Nuty', 'znaki, którymi zapisuje się muzykę'],
          ['Pięciolinia', 'pięć linii, na których pisze się nuty'],
          ['Zapis obrazkowy', 'np. 🔴 = klaśnij, 🔵 = tupnij'],
          ['Jak śpiewać?', 'wyprostowany, spokojny oddech, wyraźne słowa'],
          ['Hymn Polski', '„Mazurek Dąbrowskiego”'],
          ['Polskie tańce narodowe', 'polonez, mazur, oberek, kujawiak, krakowiak'],
          ['Skąd pochodzi krakowiak?', 'z Małopolski – okolic Krakowa'],
          ['Pląsy', 'zabawy ruchowe przy piosence'],
        ],
        questions: [
          { id: 'ltfjo2', q: 'Czym możesz nagrać piosenkę?', options: ['telefonem', 'linijką', 'ołówkiem'], answer: 0, explain: 'Muzykę nagrywamy telefonem, dyktafonem albo komputerem.' },
          { id: 'wh5h9v', q: 'Jak nazywają się znaki, którymi zapisuje się muzykę?', options: ['nuty', 'litery', 'cyfry rzymskie'], answer: 0, explain: 'Muzykę zapisujemy nutami.' },
          { id: '2jsmia', q: 'Ile linii ma pięciolinia?', options: ['5', '4', '6'], answer: 0, explain: 'Nazwa podpowiada: pięć linii.' },
          { id: 'p69kmd', q: 'Umówiliście się: 🔴 = klaśnij, 🔵 = tupnij. Co zrobisz przy zapisie 🔴🔴🔵?', say: 'Umówiliście się: czerwone kółko to klaśnij, niebieskie to tupnij. Zapis: czerwone, czerwone, niebieskie. Co zrobisz?', options: ['klaśnij, klaśnij, tupnij', 'tupnij, tupnij, klaśnij', 'klaśnij, tupnij, klaśnij'], answer: 0, explain: 'Dwa czerwone – dwa klaśnięcia, niebieskie – tupnięcie.' },
          { id: 'hfcb1e', q: 'Jak powinieneś stać, gdy śpiewasz?', options: ['prosto, spokojnie oddychając', 'zgarbiony', 'na jednej nodze'], answer: 0, explain: 'Wyprostowana postawa i spokojny oddech pomagają ładnie śpiewać.' },
          { id: 's9rlw5', q: 'Jak nazywa się hymn Polski?', options: ['„Mazurek Dąbrowskiego”', '„Oda do radości”', '„Panie Janie”'], answer: 0, explain: 'Hymn Polski to „Mazurek Dąbrowskiego”.' },
          { id: 'w5qiok', q: 'Ile jest polskich tańców narodowych?', options: ['5', '3', '10'], answer: 0, explain: 'Polonez, mazur, oberek, kujawiak i krakowiak – to pięć tańców.' },
          { id: 'mxoz8x', q: 'Który taniec jest polskim tańcem narodowym?', options: ['krakowiak', 'walc', 'tango'], answer: 0, explain: 'Krakowiak to jeden z pięciu polskich tańców narodowych.' },
          { id: '1er3ff', q: 'Skąd pochodzi krakowiak?', options: ['z Małopolski – okolic Krakowa', 'z Kaszub', 'z Warszawy'], answer: 0, explain: 'Nazwa podpowiada: krakowiak – z okolic Krakowa.' },
          { id: 'tay9op', q: 'Który z tych tańców NIE jest polskim tańcem narodowym?', options: ['walc', 'polonez', 'oberek'], answer: 0, explain: 'Polskie tańce narodowe: polonez, mazur, oberek, kujawiak, krakowiak.' },
          { id: 'c6p4a8', q: 'Jak nazywamy zabawy ruchowe przy piosence?', options: ['pląsy', 'nuty', 'pięciolinia'], answer: 0, explain: 'Pląsy to zabawy z ruchem przy śpiewie.' },
          { id: '0revru', q: 'Prawda czy fałsz?\nNagranie piosenki można odsłuchać wiele razy.', options: TF, ...PF, answer: 0, explain: 'Nagranie zapisuje dźwięk – możesz go słuchać, ile chcesz.' },
        ],
      },
    ],
  });
})();
