/* Dyktanda ze słuchu – edukacja polonistyczna, klasa 3 (Dz.U. 2024 poz. 996, zał. 1, I etap, I. Edukacja polonistyczna, 4.4 i 4.8).
 * Tekst czyta syntezator mowy (pole say). Odpowiedź sprawdzana dokładnie, z wielkością liter (kropka na końcu jest pomijana).
 * Pojedyncze wyrazy można wpisać małą albo wielką literą – liczy się pisownia ó/u, rz/ż, ch/h. */
(function () {
  // wyraz: [mała litera, wielka litera]
  const w = (x) => [x, x[0].toUpperCase() + x.slice(1)];
  const BASIS = 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna, 4. pisanie, pkt 4 (pisze z pamięci i ze słuchu; przestrzega poprawności ortograficznej w wyrazach poznanych i opracowanych podczas zajęć). Wybór wyrazów – decyzja redakcyjna.';
  const INTRO = 'Kliknij 🔊, posłuchaj i wpisz wyraz.';

  window.EXERCISES.push({
    subject: 'polski', mode: 'dyktando', id: 'hgch85',
    title: 'Dyktando: ó i u', kind: 'Wyrazy z ó i u', basis: BASIS, intro: INTRO,
    items: [
      { id: 'xyehzz', type: 'input', q: 'Wyraz 1', say: 'stół. Na stole stoi wazon. stół.', accept: w('stół'), explain: 'Ó, bo stół – stoły: ó wymienia się na o.' },
      { id: 'lvymt9', type: 'input', q: 'Wyraz 2', say: 'ulica. Mieszkam przy cichej ulicy. ulica.', accept: w('ulica'), explain: 'U na początku wyrazu.' },
      { id: 'nut3zc', type: 'input', q: 'Wyraz 3', say: 'mróz. Zimą był duży mróz. mróz.', accept: w('mróz'), explain: 'Ó, bo mróz – mrozy: ó wymienia się na o. Na końcu z – też słychać to w wyrazie mrozy.' },
      { id: 'zw4eia', type: 'input', q: 'Wyraz 4', say: 'góra. Na górze leży śnieg. góra.', accept: w('góra'), explain: 'Zapamiętaj: góra przez ó.' },
      { id: 'elu9hc', type: 'input', q: 'Wyraz 5', say: 'maluje. Ola maluje obrazek. maluje.', accept: w('maluje'), explain: 'U w zakończeniu -uje: maluje, rysuje.' },
      { id: 'ym1uiy', type: 'input', q: 'Wyraz 6', say: 'pocztówka. Wysłałam babci pocztówkę. pocztówka.', accept: w('pocztówka'), explain: 'Ó w zakończeniu -ówka: pocztówka.' },
      { id: 'wdm6bz', type: 'input', q: 'Wyraz 7', say: 'zupa. Mama gotuje zupę. zupa.', accept: w('zupa'), explain: 'Zapamiętaj: zupa przez u.' },
      { id: 'qtbsqc', type: 'input', q: 'Wyraz 8', say: 'żółw. Żółw chodzi powoli. żółw.', accept: w('żółw'), explain: 'Zapamiętaj: żółw – przez ż i ó.' },
    ],
  });

  window.EXERCISES.push({
    subject: 'polski', mode: 'dyktando', id: 'shoh8w',
    title: 'Dyktando: rz i ż', kind: 'Wyrazy z rz i ż', basis: BASIS, intro: INTRO,
    items: [
      { id: 'pt4qsg', type: 'input', q: 'Wyraz 1', say: 'morze. Latem jedziemy nad morze. morze.', accept: w('morze'), explain: 'Rz, bo morze – morski: rz wymienia się na r.' },
      { id: 'sykdwk', type: 'input', q: 'Wyraz 2', say: 'drzewo. Na drzewie siedzi ptak. drzewo.', accept: w('drzewo'), explain: 'Rz po literze d.' },
      { id: 'ojfflh', type: 'input', q: 'Wyraz 3', say: 'książka. Czytam ciekawą książkę. książka.', accept: w('książka'), explain: 'Ż, bo książka – księga: ż wymienia się na g.' },
      { id: 'ckljh0', type: 'input', q: 'Wyraz 4', say: 'krzesło. Usiądź na krześle. krzesło.', accept: w('krzesło'), explain: 'Rz po literze k.' },
      { id: 'e6uipp', type: 'input', q: 'Wyraz 5', say: 'żaba. Żaba skacze do stawu. żaba.', accept: w('żaba'), explain: 'Zapamiętaj: żaba przez ż.' },
      { id: 'hug93b', type: 'input', q: 'Wyraz 6', say: 'lekarz. Lekarz bada chorego. lekarz.', accept: w('lekarz'), explain: 'Rz, bo lekarz – lekarski: rz wymienia się na r.' },
      { id: '0vz6ss', type: 'input', q: 'Wyraz 7', say: 'dróżka. Wąska dróżka prowadzi do lasu. dróżka.', accept: w('dróżka'), explain: 'Dróżka – droga: ż wymienia się na g, a ó na o.' },
      { id: 'g3eygr', type: 'input', q: 'Wyraz 8', say: 'rzeka. Rzeka płynie przez miasto. rzeka.', accept: w('rzeka'), explain: 'Zapamiętaj: rzeka przez rz.' },
    ],
  });

  window.EXERCISES.push({
    subject: 'polski', mode: 'dyktando', id: '9v1edl',
    title: 'Dyktando: ch i h', kind: 'Wyrazy z ch i h', basis: BASIS, intro: INTRO,
    items: [
      { id: 'strlt6', type: 'input', q: 'Wyraz 1', say: 'dach. Na dachu siedzi kot. dach.', accept: w('dach'), explain: 'Ch na końcu wyrazu.' },
      { id: 'uko75t', type: 'input', q: 'Wyraz 2', say: 'herbata. Babcia pije herbatę. herbata.', accept: w('herbata'), explain: 'Zapamiętaj: herbata przez h.' },
      { id: 'gvszjo', type: 'input', q: 'Wyraz 3', say: 'mucha. Mucha lata po kuchni. mucha.', accept: w('mucha'), explain: 'Ch, bo mucha – muszka: ch wymienia się na sz.' },
      { id: '7jdw0i', type: 'input', q: 'Wyraz 4', say: 'chleb. Kupiłem świeży chleb. chleb.', accept: w('chleb'), explain: 'Zapamiętaj: chleb przez ch.' },
      { id: 'c7ujfn', type: 'input', q: 'Wyraz 5', say: 'hulajnoga. Jadę do szkoły na hulajnodze. hulajnoga.', accept: w('hulajnoga'), explain: 'Zapamiętaj: hulajnoga przez h.' },
      { id: '2xwsl0', type: 'input', q: 'Wyraz 6', say: 'ucho. Boli mnie ucho. ucho.', accept: w('ucho'), explain: 'Ch, bo ucho – uszy: ch wymienia się na sz.' },
      { id: '3bsyuo', type: 'input', q: 'Wyraz 7', say: 'huśtawka. Na placu zabaw jest huśtawka. huśtawka.', accept: w('huśtawka'), explain: 'Zapamiętaj: huśtawka przez h.' },
      { id: '4drc1t', type: 'input', q: 'Wyraz 8', say: 'brzuch. Po obiedzie mam pełny brzuch. brzuch.', accept: w('brzuch'), explain: 'Ch na końcu wyrazu. A rz – po literze b.' },
    ],
  });

  window.EXERCISES.push({
    subject: 'polski', mode: 'dyktando', id: 'tu4jt8',
    title: 'Dyktando: wielka litera', kind: 'Krótkie zdania z imionami i nazwami',
    basis: 'Dz.U. 2024 poz. 996 (zał. 1, I etap – edukacja wczesnoszkolna), I. Edukacja polonistyczna, 4. pisanie, pkt 4 (pisze ze słuchu) i pkt 8 (poprawna wielkość liter w zapisie nazw geograficznych, imion i nazwisk). Wybór zdań – decyzja redakcyjna.',
    intro: 'Kliknij 🔊, posłuchaj i wpisz całe zdanie. Pamiętaj o wielkiej literze i kropce.',
    items: [
      { id: '4is77j', type: 'input', q: 'Zdanie 1', say: 'Ola mieszka w Krakowie. Jeszcze raz: Ola mieszka w Krakowie.', accept: ['Ola mieszka w Krakowie.'], explain: 'Wielką literą: początek zdania i imię (Ola) oraz nazwa miasta (Krakowie).' },
      { id: '7ao30n', type: 'input', q: 'Zdanie 2', say: 'Wisła płynie przez Warszawę. Jeszcze raz: Wisła płynie przez Warszawę.', accept: ['Wisła płynie przez Warszawę.'], explain: 'Wielką literą: nazwa rzeki (Wisła) i miasta (Warszawę).' },
      { id: 't6xku8', type: 'input', q: 'Zdanie 3', say: 'Mój pies ma na imię Burek. Jeszcze raz: Mój pies ma na imię Burek.', accept: ['Mój pies ma na imię Burek.'], explain: 'Wielką literą: początek zdania i imię zwierzęcia (Burek).' },
      { id: 'zx5mxy', type: 'input', q: 'Zdanie 4', say: 'Latem pojedziemy w Tatry. Jeszcze raz: Latem pojedziemy w Tatry.', accept: ['Latem pojedziemy w Tatry.'], explain: 'Wielką literą: początek zdania i nazwa gór (Tatry).' },
      { id: 'tgwh2y', type: 'input', q: 'Zdanie 5', say: 'Tomek Nowak jest moim kolegą. Jeszcze raz: Tomek Nowak jest moim kolegą.', accept: ['Tomek Nowak jest moim kolegą.'], explain: 'Wielką literą: imię (Tomek) i nazwisko (Nowak).' },
      { id: 'il7h6i', type: 'input', q: 'Zdanie 6', say: 'W sobotę jedziemy do Gdańska. Jeszcze raz: W sobotę jedziemy do Gdańska.', accept: ['W sobotę jedziemy do Gdańska.'], explain: 'Nazwa miasta (Gdańska) – wielką literą, dzień tygodnia (sobotę) – małą.' },
      { id: '7j1ez6', type: 'input', q: 'Zdanie 7', say: 'Polska leży w Europie. Jeszcze raz: Polska leży w Europie.', accept: ['Polska leży w Europie.'], explain: 'Wielką literą: nazwa państwa (Polska) i nazwa kontynentu (Europie).' },
      { id: 'h0383n', type: 'input', q: 'Zdanie 8', say: 'W maju Ania jedzie nad Odrę. Jeszcze raz: W maju Ania jedzie nad Odrę.', accept: ['W maju Ania jedzie nad Odrę.'], explain: 'Imię (Ania) i nazwa rzeki (Odrę) – wielką literą, miesiąc (maju) – małą.' },
    ],
  });
})();
