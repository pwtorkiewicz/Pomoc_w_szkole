/* Lekcje – edukacja społeczna, klasa 3. Klucz: 'spoleczna/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};
(function () {
  const L = window.LESSONS;

  // Kafelki: [emoji, napis, podpis], cols kolumn
  function cards(label, items, cols) {
    const W = 400, g = 8, w = Math.floor((W - g * (cols + 1)) / cols), h = 92;
    const H = Math.ceil(items.length / cols) * (h + g) + g;
    const body = items.map(([e, a, b], k) => {
      const x = g + (k % cols) * (w + g), y = g + Math.floor(k / cols) * (h + g), cx = x + w / 2, c = (k % 5) + 1;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="f${c} s${c} sw"/>
        <text x="${cx}" y="${y + 34}" class="tx" text-anchor="middle" style="font-size:26px">${e}</text>
        <text x="${cx}" y="${y + 60}" class="tx-b" text-anchor="middle">${a}</text>
        <text x="${cx}" y="${y + 80}" class="tx-s" text-anchor="middle">${b}</text>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}">${body}</svg>`;
  }
  // Lista w wierszach: [emoji, tekst]
  function list(label, items) {
    const h = 42, g = 6, H = items.length * (h + g) + g;
    const body = items.map(([e, a], k) => {
      const y = g + k * (h + g), c = (k % 5) + 1;
      return `<rect x="6" y="${y}" width="388" height="${h}" rx="9" class="f${c} s${c} sw"/>
        <text x="30" y="${y + 29}" class="tx" text-anchor="middle" style="font-size:22px">${e}</text>
        <text x="56" y="${y + 27}" class="tx">${a}</text>`;
    }).join('');
    return `<svg viewBox="0 0 400 ${H}" role="img" aria-label="${label}">${body}</svg>`;
  }
  // Dwie kolumny: tytuł i wiersze [emoji, tekst]; cl, cr – numery kolorów
  function twoCols(label, titleL, itemsL, titleR, itemsR, cl, cr) {
    const n = Math.max(itemsL.length, itemsR.length), H = 64 + n * 40;
    const col = (x, title, items, c) => `<rect x="${x}" y="8" width="188" height="${H - 16}" rx="12" class="f${c} s${c} sw"/>
      <text x="${x + 94}" y="38" class="tx-b" text-anchor="middle">${title}</text>
      ${items.map(([e, t], k) => `<text x="${x + 14}" y="${76 + k * 40}" class="tx">${e} ${t}</text>`).join('')}`;
    return `<svg viewBox="0 0 400 ${H}" role="img" aria-label="${label}">${col(6, titleL, itemsL, cl)}${col(206, titleR, itemsR, cr)}</svg>`;
  }
  const marker = (id) => `<defs><marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>`;
  // Flaga Polski (x, y, szerokość)
  const flagaPL = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="${w * 0.3}" class="pl-w ln"/><rect x="${x}" y="${y + w * 0.3}" width="${w}" height="${w * 0.3}" class="pl-r ln"/>`;
  // 12 gwiazd w kole (środek, promień)
  const gwiazdy = (cx, cy, r) => Array.from({ length: 12 }, (_, k) => {
    const a = k * Math.PI / 6;
    return `<text x="${(cx + r * Math.sin(a)).toFixed(1)}" y="${(cy - r * Math.cos(a) + 6).toFixed(1)}" class="t4" text-anchor="middle" style="font-size:18px">★</text>`;
  }).join('');

  // ------------------------------------------------------------------
  L['spoleczna/grupy-zasady'] = [
    {
      title: 'Należysz do wielu grup',
      svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Koła jedno w drugim: w środku ty, wokół rodzina, klasa, miejscowość, a największe koło to naród – Polacy">
        <ellipse cx="200" cy="126" rx="194" ry="118" class="f1 s1 sw"/>
        <ellipse cx="200" cy="148" rx="160" ry="96" class="f3 s3 sw"/>
        <ellipse cx="200" cy="170" rx="126" ry="74" class="f4 s4 sw"/>
        <ellipse cx="200" cy="192" rx="92" ry="52" class="f5 s5 sw"/>
        <ellipse cx="200" cy="214" rx="56" ry="30" class="f2 s2 sw"/>
        <text x="200" y="36" class="tx-b" text-anchor="middle">naród – Polacy 🇵🇱</text>
        <text x="200" y="78" class="tx" text-anchor="middle">miejscowość</text>
        <text x="200" y="122" class="tx" text-anchor="middle">klasa, drużyna</text>
        <text x="200" y="166" class="tx" text-anchor="middle">rodzina</text>
        <text x="200" y="221" class="tx-b" text-anchor="middle">🙂 ty</text>
      </svg>`,
      text: `<p>Jesteś częścią wielu <b>grup</b>: rodziny, klasy, może drużyny sportowej. Należysz też do mieszkańców swojej <b>miejscowości</b> i do <b>narodu</b> polskiego.</p>
        <p>Każda grupa ma swoje <b>zasady</b>. Dzięki nim żyje się razem łatwiej.</p>`,
      hook: 'Jak cebula 🧅 – warstwa w warstwie: ty, rodzina, klasa, miejscowość, naród.',
      check: { q: 'Do której grupy należą wszyscy Polacy?', options: ['do narodu', 'do jednej klasy', 'do jednej rodziny'], answer: 0, explain: 'Wszyscy Polacy tworzą naród polski.' },
    },
    {
      title: 'Prawa i obowiązki',
      svg: twoCols('Po lewej prawa: nauka, zabawa, opieka, szacunek. Po prawej obowiązki: szkoła i lekcje, pomoc w domu, dbanie o rzeczy, szacunek dla innych',
        '✅ prawa', [['📚', 'nauka'], ['🧸', 'zabawa'], ['🤗', 'opieka'], ['🙂', 'szacunek']],
        '📋 obowiązki', [['🏫', 'szkoła, lekcje'], ['🧹', 'pomoc w domu'], ['🎒', 'dbam o rzeczy'], ['🤝', 'szanuję innych']], 3, 1),
      text: `<p><b>Prawo</b> to coś, co ci się należy: nauka, zabawa, opieka i szacunek.</p>
        <p><b>Obowiązek</b> to coś, co musisz robić: chodzić do szkoły, odrabiać lekcje, pomagać w domu, szanować innych.</p>
        <p>Prawa i obowiązki mają <b>wszyscy</b> – dzieci i dorośli.</p>`,
      remember: 'Prawo – co mi się należy. Obowiązek – co muszę robić.',
      check: { q: 'Co jest obowiązkiem ucznia?', options: ['odrabiać lekcje', 'bawić się', 'odpoczywać'], answer: 0, explain: 'Odrabianie lekcji to obowiązek. Zabawa i odpoczynek to prawa.' },
    },
    {
      title: 'Umawiamy się w klasie',
      svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej kartka z umową klasy: nie przerywamy, pomagamy sobie, dbamy o porządek. Po prawej urna do głosowania – wybory przewodniczącego, każdy ma jeden głos">
        <rect x="10" y="10" width="220" height="200" rx="12" class="f4 s4 sw"/>
        <text x="120" y="42" class="tx-b" text-anchor="middle">📜 Umowa klasy</text>
        <text x="24" y="84" class="tx">1. Nie przerywamy.</text>
        <text x="24" y="122" class="tx">2. Pomagamy sobie.</text>
        <text x="24" y="160" class="tx">3. Dbamy o porządek.</text>
        <text x="24" y="196" class="tx-s">podpisy: cała klasa ✍️</text>
        <rect x="250" y="90" width="130" height="110" rx="10" class="f1 s1 sw"/>
        <rect x="290" y="80" width="50" height="10" class="ln"/>
        <rect x="300" y="46" width="30" height="40" class="bg ln"/>
        <text x="315" y="72" class="tx" text-anchor="middle">✔</text>
        <text x="315" y="140" class="tx-b" text-anchor="middle">wybory</text>
        <text x="315" y="164" class="tx-s" text-anchor="middle">1 uczeń =</text>
        <text x="315" y="182" class="tx-s" text-anchor="middle">1 głos</text>
      </svg>`,
      text: `<p>Gdy rozmawiacie i dogadujecie się – to <b>porozumienie</b>. To, co razem ustalicie, to <b>umowa</b>.</p>
        <p>Kto złamie umowę, ponosi <b>konsekwencje</b>: przeprasza i naprawia szkodę.</p>
        <p>W <b>wyborach do samorządu</b> wybieracie np. przewodniczącego klasy. Każdy ma jeden głos.</p>`,
      hook: 'Umowa jest jak reguły gry – grają wszyscy, więc wszyscy ich przestrzegają. 🎲',
    },
    {
      title: 'Ważne wartości',
      svg: list('Wartości: uczciwość – mówię prawdę; odpowiedzialność – dotrzymuję słowa; życzliwość – jestem miły; wdzięczność – mówię dziękuję; przepraszam i naprawiam krzywdę', [
        ['🤞', 'uczciwość – mówię prawdę'],
        ['🫡', 'odpowiedzialność – dotrzymuję słowa'],
        ['😊', 'życzliwość – jestem miły i pomagam'],
        ['🙏', 'wdzięczność – mówię „dziękuję”'],
        ['🩹', 'przepraszam i naprawiam krzywdę'],
      ]),
      text: `<p><b>Wartości</b> to ważne rzeczy, które pomagają odróżnić dobre zachowanie od złego.</p>
        <p>Naprawienie krzywdy ma trudną nazwę: <b>zadośćuczynienie</b>. Np. zepsułeś koledze kredkę – przepraszasz i oddajesz mu swoją.</p>`,
      hook: 'Trzy czarodziejskie słowa: <b>proszę, dziękuję, przepraszam</b>. ✨',
      check: { q: 'Zosia obiecała podlać kwiaty w klasie i pamiętała o tym. Jaką wartość pokazała?', options: ['odpowiedzialność', 'zazdrość', 'lenistwo'], answer: 0, explain: 'Robisz, co obiecałeś – to odpowiedzialność.' },
    },
    {
      title: 'Twoje dane – tylko zaufanym',
      svg: twoCols('Swoje imię, nazwisko i adres możesz podać: rodzicom, nauczycielowi, policjantowi. Nie podajesz: nieznajomemu, w grze w internecie, na czacie',
        '✅ mogę podać', [['👪', 'rodzicom'], ['🧑‍🏫', 'nauczycielowi'], ['👮', 'policjantowi']],
        '❌ nie podaję', [['🕴️', 'nieznajomemu'], ['🎮', 'w grze online'], ['💬', 'na czacie']], 3, 2),
      text: `<p>Imię, nazwisko, adres i telefon to twoje <b>dane osobowe</b>. Podajesz je tylko zaufanym osobom i w bezpiecznej sytuacji.</p>
        <p>Masz kłopot i nie wiesz, z kim porozmawiać? Zadzwoń pod <b>116 111</b> – to Telefon Zaufania dla Dzieci i Młodzieży. Jest bezpłatny i czynny całą dobę.</p>`,
      remember: 'Dane osobowe – tylko zaufanym. W internecie – nie podaję.',
      check: { q: 'Ktoś w grze internetowej pyta, gdzie mieszkasz. Co robisz?', options: ['nie podaję i mówię rodzicom', 'podaję adres', 'podaję adres szkoły'], answer: 0, explain: 'Nieznajomym w internecie nie podajemy danych. Powiedz o tym dorosłemu.' },
    },
  ];

  // ------------------------------------------------------------------
  L['spoleczna/miejscowosc-panstwo'] = [
    {
      title: 'Od domu do Europy',
      svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Strzałki: mój dom, moja miejscowość, Polska, Unia Europejska – coraz większe miejsca, do których należysz">
        ${marker('a-k3spo-eu-1')}
        <rect x="6" y="40" width="80" height="70" rx="10" class="f2 s2 sw"/>
        <rect x="108" y="40" width="80" height="70" rx="10" class="f4 s4 sw"/>
        <rect x="210" y="40" width="80" height="70" rx="10" class="f3 s3 sw"/>
        <rect x="312" y="40" width="82" height="70" rx="10" class="f1 s1 sw"/>
        <text x="46" y="78" class="tx" text-anchor="middle" style="font-size:26px">🏠</text>
        <text x="148" y="78" class="tx" text-anchor="middle" style="font-size:26px">🏘️</text>
        <text x="250" y="78" class="tx" text-anchor="middle" style="font-size:26px">🇵🇱</text>
        <text x="353" y="78" class="tx" text-anchor="middle" style="font-size:26px">🇪🇺</text>
        <text x="46" y="134" class="tx-s" text-anchor="middle">dom</text>
        <text x="148" y="134" class="tx-s" text-anchor="middle">miejscowość</text>
        <text x="250" y="134" class="tx-s" text-anchor="middle">Polska</text>
        <text x="353" y="130" class="tx-s" text-anchor="middle">Unia</text>
        <text x="353" y="146" class="tx-s" text-anchor="middle">Europejska</text>
        <path d="M88,75 L104,75" class="ln" marker-end="url(#a-k3spo-eu-1)"/>
        <path d="M190,75 L206,75" class="ln" marker-end="url(#a-k3spo-eu-1)"/>
        <path d="M292,75 L308,75" class="ln" marker-end="url(#a-k3spo-eu-1)"/>
        <text x="200" y="24" class="tx-b" text-anchor="middle">coraz większe miejsca</text>
      </svg>`,
      text: `<p>Mieszkasz w domu, w swojej <b>miejscowości</b> – wsi albo mieście. Twoja miejscowość jest w <b>Polsce</b>. Stolica Polski to <b>Warszawa</b>, a prezydentem jest <b>Karol Nawrocki</b> (od 2025 roku).</p>
        <p>Polska należy do <b>Unii Europejskiej</b>.</p>`,
      remember: 'Naucz się swojego adresu i adresu szkoły.',
      check: { q: 'Kto jest obecnie prezydentem Polski?', options: ['Karol Nawrocki', 'Józef Wybicki', 'Mieszko I'], answer: 0, explain: 'Od 2025 roku prezydentem Polski jest Karol Nawrocki.' },
    },
    {
      title: 'Kto to jest patron?',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Budynek szkoły z tablicą: Szkoła Podstawowa imienia patrona. Obok tabliczka z nazwą ulicy imienia patrona">
        <polygon points="40,70 160,20 280,70" class="f2 s2 sw"/>
        <rect x="50" y="70" width="220" height="120" class="f4 s4 sw"/>
        <rect x="64" y="84" width="192" height="40" rx="6" class="bg ln"/>
        <text x="160" y="101" class="tx-s" text-anchor="middle">Szkoła Podstawowa</text>
        <text x="160" y="118" class="tx-s" text-anchor="middle">im. patrona</text>
        <rect x="140" y="140" width="40" height="50" class="f1 s1 sw"/>
        <rect x="74" y="140" width="40" height="30" class="f1 s1 sw"/>
        <rect x="206" y="140" width="40" height="30" class="f1 s1 sw"/>
        <rect x="294" y="60" width="96" height="40" rx="6" class="f3 s3 sw"/>
        <text x="342" y="86" class="tx-s" text-anchor="middle">ul. patrona</text>
        <line x1="342" y1="100" x2="342" y2="190" class="ln"/>
      </svg>`,
      text: `<p><b>Patron</b> to ważna osoba, której imię nosi szkoła, ulica albo plac. Patron jest dla nas <b>wzorem</b>.</p>
        <p>W nazwie szkoły skrót „<b>im.</b>” znaczy „imienia”. Sprawdź, kto jest patronem twojej szkoły!</p>`,
      hook: 'Patron „patrzy” na szkołę i podpowiada, jak być dobrym człowiekiem. 👀',
      check: { q: '„Szkoła Podstawowa im. Jana Brzechwy”. Kim jest Jan Brzechwa dla tej szkoły?', options: ['patronem', 'dyrektorem', 'woźnym'], answer: 0, explain: '„Im.” znaczy „imienia”. Szkoła nosi imię swojego patrona.' },
    },
    {
      title: 'Ludzie łączą się, żeby pomagać',
      svg: cards('Grupy ludzi: stowarzyszenie pomaga chorym, organizacja ekologiczna chroni przyrodę, klub sportowy, zespół muzyczny', [
        ['🩺', 'pomoc chorym', 'stowarzyszenie'], ['🌳', 'przyroda', 'organizacja ekologiczna'],
        ['⚽', 'klub sportowy', 'trening, mecze'], ['🎻', 'zespół', 'muzyka, teatr'],
      ], 2),
      text: `<p>Ludzie łączą się w grupy, żeby razem coś robić. <b>Stowarzyszenie</b> może pomagać chorym dzieciom. <b>Organizacja ekologiczna</b> chroni przyrodę.</p>
        <p>Są też kluby sportowe i zespoły artystyczne. Możesz się nimi ciekawić, choć do nich nie należysz – tak samo jak <b>innymi narodowościami</b>, np. Czechami czy Niemcami.</p>`,
      hook: 'Razem łatwiej: jeden patyk łatwo złamać, pęczek patyków – nie. 🪵',
    },
    {
      title: 'Unia Europejska',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Flaga Unii Europejskiej: dwanaście złotych gwiazd ułożonych w koło na niebieskim tle. Obok: Polska w Unii od 2004 roku, hymn Oda do radości">
        <rect x="10" y="20" width="220" height="150" rx="6" class="t1"/>
        ${gwiazdy(120, 95, 52)}
        <text x="120" y="194" class="tx-s" text-anchor="middle">flaga UE – 12 gwiazd</text>
        <text x="314" y="60" class="tx-b" text-anchor="middle">🇵🇱 w UE</text>
        <text x="314" y="86" class="tx" text-anchor="middle">od 2004 r.</text>
        <text x="314" y="136" class="tx-b" text-anchor="middle">🎵 hymn</text>
        <text x="314" y="162" class="tx" text-anchor="middle">„Oda do radości”</text>
      </svg>`,
      text: `<p><b>Unia Europejska</b> to wspólnota wielu państw Europy. Polska należy do niej od <b>2004 roku</b>.</p>
        <p>Flaga Unii: <b>12 złotych gwiazd</b> w kole na niebieskim tle. Hymn Unii: „<b>Oda do radości</b>” – muzykę napisał Ludwig van Beethoven.</p>`,
      remember: 'UE: 12 złotych gwiazd na niebieskim tle, hymn „Oda do radości”.',
      hook: 'Zapamiętaj: gwiazd jest 12 – tyle samo, ile miesięcy w roku. 📅',
      check: { q: 'Od którego roku Polska należy do Unii Europejskiej?', options: ['od 2004', 'od 1791', 'od 1025'], answer: 0, explain: 'Polska weszła do Unii Europejskiej w 2004 roku.' },
    },
  ];

  // ------------------------------------------------------------------
  L['spoleczna/symbole-swieta'] = [
    {
      title: 'Trzy symbole Polski',
      svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trzy symbole Polski: godło – biały orzeł w koronie na czerwonej tarczy; flaga – biel na górze, czerwień na dole; hymn – Mazurek Dąbrowskiego">
        <rect x="8" y="8" width="124" height="194" rx="12" class="f4 s4 sw"/>
        <rect x="138" y="8" width="124" height="194" rx="12" class="f3 s3 sw"/>
        <rect x="268" y="8" width="124" height="194" rx="12" class="f1 s1 sw"/>
        <path d="M36,30 L104,30 L104,80 Q104,110 70,122 Q36,110 36,80 Z" class="pl-r ln"/>
        <text x="70" y="62" class="tx" text-anchor="middle" style="font-size:20px">👑</text>
        <text x="70" y="96" class="tx" text-anchor="middle" style="font-size:24px">🦅</text>
        ${flagaPL(160, 44, 80)}
        <text x="330" y="90" class="tx" text-anchor="middle" style="font-size:40px">🎵</text>
        <text x="70" y="150" class="tx-b" text-anchor="middle">godło</text>
        <text x="200" y="150" class="tx-b" text-anchor="middle">flaga</text>
        <text x="330" y="150" class="tx-b" text-anchor="middle">hymn</text>
        <text x="70" y="174" class="tx-s" text-anchor="middle">biały orzeł</text>
        <text x="70" y="192" class="tx-s" text-anchor="middle">na czerwonym</text>
        <text x="200" y="174" class="tx-s" text-anchor="middle">biało-czerwona</text>
        <text x="330" y="174" class="tx-s" text-anchor="middle">„Mazurek</text>
        <text x="330" y="192" class="tx-s" text-anchor="middle">Dąbrowskiego”</text>
      </svg>`,
      text: `<p><b>Godło</b> – biały orzeł ze złotą koroną na czerwonym tle.</p>
        <p><b>Barwy</b> – biała i czerwona. <b>Hymn</b> – „Mazurek Dąbrowskiego”. Słowa napisał <b>Józef Wybicki</b>. Hymn zaczyna się tak: „Jeszcze Polska nie zginęła, kiedy my żyjemy”.</p>`,
      remember: 'Symbole Polski: godło, barwy (flaga) i hymn.',
      check: { q: 'Kto napisał słowa hymnu Polski?', options: ['Józef Wybicki', 'Mikołaj Kopernik', 'Bolesław Chrobry'], answer: 0, explain: 'Słowa „Mazurka Dąbrowskiego” napisał Józef Wybicki.' },
    },
    {
      title: 'Biel na górze, czerwień na dole',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Duża flaga Polski na maszcie: biały pas na górze, czerwony na dole">
        <line x1="60" y1="20" x2="60" y2="190" class="ln sw"/>
        ${flagaPL(62, 30, 240)}
        <text x="182" y="70" class="tx-b" text-anchor="middle">biały – na górze</text>
        <text x="320" y="132" class="tx-s">czerwony</text>
        <text x="320" y="150" class="tx-s">na dole</text>
      </svg>`,
      text: `<p>Na fladze Polski <b>biały</b> pas jest <b>na górze</b>, a <b>czerwony</b> – <b>na dole</b>.</p>
        <p>W święta wywieszamy flagę i przypinamy <b>kokardę narodową</b> albo machamy biało-czerwonym <b>proporczykiem</b>.</p>`,
      hook: 'Biały orzeł lata wysoko – dlatego biel jest na górze. 🦅',
      check: { q: 'Gdzie na fladze Polski jest kolor biały?', options: ['na górze', 'na dole', 'po lewej'], answer: 0, explain: 'Biel na górze, czerwień na dole.' },
    },
    {
      title: 'Gdy grają hymn',
      svg: twoCols('Gdy grają hymn: stoję prosto, jestem cicho, zdejmuję czapkę. Nie rozmawiam, nie jem, nie biegam',
        '✅ robię tak', [['🧍', 'stoję prosto'], ['🤫', 'jestem cicho'], ['🧢', 'zdejmuję czapkę']],
        '❌ nie robię', [['💬', 'nie rozmawiam'], ['🍎', 'nie jem'], ['🏃', 'nie biegam']], 3, 2),
      text: `<p>Gdy grają hymn albo wciągają flagę na maszt, okazujemy <b>szacunek</b>: stoimy prosto, spokojnie i w ciszy.</p>
        <p>Chłopcy i mężczyźni <b>zdejmują czapki</b>.</p>`,
      remember: 'Hymn: stoję prosto, w ciszy, bez czapki.',
    },
    {
      title: 'Święta narodowe',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy kartki z kalendarza: 2 maja – Dzień Flagi; 3 maja – Konstytucja 3 Maja, 1791; 11 listopada – Święto Niepodległości, 1918">
        <rect x="8" y="10" width="124" height="180" rx="10" class="bg ln"/>
        <rect x="138" y="10" width="124" height="180" rx="10" class="bg ln"/>
        <rect x="268" y="10" width="124" height="180" rx="10" class="bg ln"/>
        <rect x="8" y="10" width="124" height="30" rx="10" class="t2"/>
        <rect x="138" y="10" width="124" height="30" rx="10" class="t2"/>
        <rect x="268" y="10" width="124" height="30" rx="10" class="t2"/>
        <text x="70" y="84" class="tx-b" text-anchor="middle">2 maja</text>
        <text x="200" y="84" class="tx-b" text-anchor="middle">3 maja</text>
        <text x="330" y="84" class="tx-b" text-anchor="middle">11 listopada</text>
        <text x="70" y="118" class="tx" text-anchor="middle">Dzień</text>
        <text x="70" y="140" class="tx" text-anchor="middle">Flagi</text>
        <text x="200" y="118" class="tx" text-anchor="middle">Konstytucja</text>
        <text x="200" y="140" class="tx" text-anchor="middle">3 Maja</text>
        <text x="200" y="172" class="tx-s" text-anchor="middle">1791</text>
        <text x="330" y="118" class="tx" text-anchor="middle">Święto</text>
        <text x="330" y="140" class="tx" text-anchor="middle">Niepodległości</text>
        <text x="330" y="172" class="tx-s" text-anchor="middle">1918</text>
      </svg>`,
      text: `<p><b>3 maja</b> – w 1791 roku uchwalono pierwszą polską <b>konstytucję</b>, czyli najważniejsze prawo w państwie.</p>
        <p><b>11 listopada</b> – w 1918 roku Polska znów stała się wolna. Przez 123 lata była podzielona między sąsiednie państwa (to były <b>zabory</b>).</p>`,
      hook: 'Maj ma dwa święta pod rząd: 2 – flaga, 3 – konstytucja. 🇵🇱',
      check: { q: 'Co świętujemy 11 listopada?', options: ['odzyskanie niepodległości', 'Dzień Flagi', 'pierwszy dzień wiosny'], answer: 0, explain: '11 listopada 1918 roku Polska odzyskała niepodległość.' },
    },
    {
      title: 'Stroje ludowe',
      svg: cards('Stroje ludowe: krakowski – czerwona czapka z pawim piórem i wianek; łowicki – kolorowe paski; kaszubski; kurpiowski', [
        ['🪶', 'krakowski', 'czapka z piórem, wianek'], ['🌈', 'łowicki', 'kolorowe paski'],
        ['🌊', 'kaszubski', 'z Kaszub'], ['🌲', 'kurpiowski', 'z Kurpiów'],
      ], 2),
      text: `<p>Dawniej w różnych <b>regionach</b> Polski ludzie nosili różne stroje. Dziś zakładamy je od święta, np. do tańca.</p>
        <p>W stroju <b>krakowskim</b> mężczyzna ma czerwoną czapkę z pawim piórem, a kobieta – wianek z kwiatów i korale. Strój <b>łowicki</b> ma spódnice i spodnie w kolorowe paski.</p>`,
      hook: 'Strój ludowy to jak „mundur” regionu – po nim poznasz, skąd ktoś jest. 👗',
      check: { q: 'W którym stroju są kolorowe paski?', options: ['w łowickim', 'w krakowskim'], answer: 0, explain: 'Strój łowicki ma spódnice i spodnie w kolorowe paski.' },
    },
  ];

  // ------------------------------------------------------------------
  L['spoleczna/legendy-wladcy'] = [
    {
      title: 'Co to jest legenda?',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Legenda to dużo fantazji – smoki, syreny – i trochę prawdy, np. prawdziwe miejsca. Autora nie znamy">
        <rect x="10" y="30" width="290" height="60" rx="10" class="f5 s5 sw"/>
        <rect x="300" y="30" width="90" height="60" rx="10" class="f3 s3 sw"/>
        <text x="155" y="68" class="tx-b" text-anchor="middle">🐉 fantazja 🧜‍♀️</text>
        <text x="345" y="68" class="tx-b" text-anchor="middle">prawda</text>
        <text x="155" y="116" class="tx-s" text-anchor="middle">smoki, syreny, cuda</text>
        <text x="345" y="116" class="tx-s" text-anchor="middle">miejsca</text>
        <text x="200" y="156" class="tx" text-anchor="middle">❓ autor – nieznany</text>
      </svg>`,
      text: `<p><b>Legenda</b> to bardzo stara opowieść. Ludzie opowiadali ją sobie przez wieki. Nie wiemy, kto ją wymyślił.</p>
        <p>W legendzie jest dużo <b>fantazji</b>, ale też ziarno <b>prawdy</b> – np. prawdziwe miasta i miejsca.</p>`,
      hook: 'Legenda jak ciasto z rodzynkami: dużo ciasta (fantazji) i kilka rodzynek (prawdy). 🍰',
    },
    {
      title: 'Lech, Czech i Rus',
      svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Lech zostaje przy drzewie z gniazdem białego orła na tle czerwonego nieba – tu powstaje Gniezno. Czech idzie na południe, Rus na wschód">
        ${marker('a-k3spo-lech-1')}
        <rect x="10" y="10" width="200" height="140" rx="12" class="pl-r"/>
        <rect x="96" y="80" width="14" height="70" class="f2 s2 sw"/>
        <ellipse cx="103" cy="70" rx="40" ry="26" class="f3 s3 sw"/>
        <ellipse cx="103" cy="46" rx="20" ry="8" class="f4 s4 sw"/>
        <circle cx="103" cy="30" r="16" class="pl-w ln"/>
        <text x="103" y="37" class="tx" text-anchor="middle" style="font-size:18px">🦅</text>
        <text x="110" y="178" class="tx-b" text-anchor="middle">Lech → Gniezno</text>
        <text x="110" y="200" class="tx-s" text-anchor="middle">od orlego gniazda</text>
        <path d="M240,40 L240,170" class="ln" marker-end="url(#a-k3spo-lech-1)"/>
        <text x="252" y="120" class="tx">Czech</text>
        <text x="252" y="140" class="tx-s">na południe</text>
        <path d="M272,40 L380,40" class="ln" marker-end="url(#a-k3spo-lech-1)"/>
        <text x="326" y="30" class="tx" text-anchor="middle">Rus</text>
        <text x="326" y="64" class="tx-s" text-anchor="middle">na wschód</text>
              </svg>`,
      text: `<p>Trzej bracia – <b>Lech</b>, <b>Czech</b> i <b>Rus</b> – szukali miejsca do życia. Lech zobaczył <b>białego orła</b> w gnieździe na tle <b>czerwonego</b> nieba. Uznał to za dobry znak i został.</p>
        <p>Gród nazwał <b>Gniezno</b> – od orlego gniazda. Czech poszedł na południe, a Rus – na wschód.</p>`,
      remember: 'Gniezno – od gniazda orła.',
      check: { q: 'Dokąd poszedł Rus?', options: ['na wschód', 'na południe', 'został z Lechem'], answer: 0, explain: 'Rus poszedł na wschód, a Czech na południe.' },
    },
    {
      title: 'Z legendy – nasze godło i barwy',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Biały orzeł na czerwonym niebie z legendy zamienia się w godło Polski – białego orła na czerwonej tarczy – i w biało-czerwone barwy">
        ${marker('a-k3spo-godlo-1')}
        <rect x="10" y="20" width="110" height="110" rx="10" class="pl-r"/>
        <circle cx="65" cy="75" r="26" class="pl-w ln"/>
        <text x="65" y="84" class="tx" text-anchor="middle" style="font-size:24px">🦅</text>
        <text x="65" y="156" class="tx-s" text-anchor="middle">legenda</text>
        <path d="M128,75 L160,75" class="ln" marker-end="url(#a-k3spo-godlo-1)"/>
        <path d="M172,22 L262,22 L262,82 Q262,118 217,132 Q172,118 172,82 Z" class="pl-r ln"/>
        <text x="217" y="60" class="tx" text-anchor="middle" style="font-size:20px">👑</text>
        <text x="217" y="96" class="tx" text-anchor="middle" style="font-size:24px">🦅</text>
        <text x="217" y="156" class="tx-s" text-anchor="middle">godło</text>
        <path d="M270,75 L296,75" class="ln" marker-end="url(#a-k3spo-godlo-1)"/>
        ${flagaPL(304, 48, 88)}
        <text x="348" y="156" class="tx-s" text-anchor="middle">barwy</text>
      </svg>`,
      text: `<p>Biały orzeł na czerwonym tle stał się znakiem Polski – <b>godłem</b>. Stąd też nasze <b>barwy</b>: biała i czerwona.</p>`,
      hook: 'Orzeł z legendy wciąż „lata” – na godle, na pieczątkach i na koszulkach sportowców. 🦅',
    },
    {
      title: 'Legendy o miastach',
      svg: cards('Kraków: smok wawelski pod Wawelem, pokonany sprytem – zjadł skórę z siarką; miasto od imienia Kraka. Warszawa: Wars i Sawa, w herbie syrenka', [
        ['🐉', 'Kraków', 'smok spod Wawelu'], ['🧜‍♀️', 'Warszawa', 'Wars i Sawa, syrenka'],
      ], 2),
      text: `<p><b>Kraków</b>: pod wzgórzem Wawel mieszkał smok. Pokonano go sprytem – połknął skórę wypchaną <b>siarką</b>. Miasto nazwano od imienia <b>Kraka</b>.</p>
        <p><b>Warszawa</b>: według legendy nazwa pochodzi od imion <b>Warsa i Sawy</b>. W herbie Warszawy jest <b>syrenka</b>.</p>`,
      check: { q: 'W herbie którego miasta jest syrenka?', options: ['Warszawy', 'Krakowa', 'Gniezna'], answer: 0, explain: 'Syrenka jest w herbie Warszawy.' },
    },
    {
      title: 'Pierwsi prawdziwi władcy',
      svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Oś czasu: rok 966 – Mieszko I przyjmuje chrzest; rok 1025 – Bolesław Chrobry zostaje pierwszym królem Polski. Pierwsza stolica – Gniezno">
        ${marker('a-k3spo-os-1')}
        <path d="M14,90 L386,90" class="ln sw" marker-end="url(#a-k3spo-os-1)"/>
        <circle cx="110" cy="90" r="9" class="f2 s2 sw"/>
        <circle cx="290" cy="90" r="9" class="f4 s4 sw"/>
        <text x="110" y="70" class="tx-b" text-anchor="middle">966</text>
        <text x="290" y="70" class="tx-b" text-anchor="middle">1025</text>
        <text x="110" y="34" class="tx" text-anchor="middle" style="font-size:24px">🛡️</text>
        <text x="290" y="34" class="tx" text-anchor="middle" style="font-size:24px">👑</text>
        <text x="110" y="124" class="tx" text-anchor="middle">Mieszko I</text>
        <text x="110" y="146" class="tx-s" text-anchor="middle">chrzest</text>
        <text x="290" y="124" class="tx" text-anchor="middle">Bolesław Chrobry</text>
        <text x="290" y="146" class="tx-s" text-anchor="middle">pierwszy król</text>
        <text x="200" y="174" class="tx-s" text-anchor="middle">pierwsza stolica: Gniezno</text>
      </svg>`,
      text: `<p><b>Mieszko I</b> to pierwszy władca Polski znany z historii. W <b>966</b> roku przyjął chrzest.</p>
        <p>Jego syn <b>Bolesław Chrobry</b> został <b>pierwszym królem</b> Polski w <b>1025</b> roku. Pierwszą stolicą było <b>Gniezno</b>.</p>
        <p>Lech, Krak i smok to postacie <b>z legend</b>. Mieszko i Bolesław żyli <b>naprawdę</b>.</p>`,
      remember: 'Mieszko I – pierwszy władca. Bolesław Chrobry – pierwszy król. Gniezno – pierwsza stolica.',
      check: { q: 'Kto był pierwszym królem Polski?', options: ['Bolesław Chrobry', 'Mieszko I', 'Lech'], answer: 0, explain: 'Bolesław Chrobry koronował się na króla w 1025 roku.' },
    },
  ];

  // ------------------------------------------------------------------
  L['spoleczna/wielcy-polacy'] = [
    {
      title: 'Kopernik i Skłodowska-Curie – naukowcy',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Po lewej Słońce w środku, a Ziemia krąży wokół niego – odkrycie Kopernika. Po prawej kolby z laboratorium i dwa medale – dwie Nagrody Nobla Marii Skłodowskiej-Curie">
        <ellipse cx="110" cy="96" rx="96" ry="60" class="ln dash"/>
        <circle cx="110" cy="96" r="26" class="f4 s4 sw"/>
        <text x="110" y="104" class="tx" text-anchor="middle" style="font-size:22px">☀️</text>
        <text x="206" y="104" class="tx" text-anchor="middle" style="font-size:22px">🌍</text>
        <text x="110" y="180" class="tx-b" text-anchor="middle">Kopernik</text>
        <text x="110" y="196" class="tx-s" text-anchor="middle">Ziemia krąży wokół Słońca</text>
        <rect x="244" y="30" width="148" height="120" rx="12" class="f5 s5 sw"/>
        <text x="318" y="78" class="tx" text-anchor="middle" style="font-size:26px">🧪⚗️</text>
        <text x="318" y="124" class="tx" text-anchor="middle" style="font-size:24px">🏅🏅</text>
        <text x="318" y="180" class="tx-b" text-anchor="middle">Skłodowska</text>
        <text x="318" y="196" class="tx-s" text-anchor="middle">2 × Nagroda Nobla</text>
      </svg>`,
      text: `<p><b>Mikołaj Kopernik</b> z <b>Torunia</b> był astronomem. Odkrył, że to <b>Ziemia krąży wokół Słońca</b>, a nie odwrotnie.</p>
        <p><b>Maria Skłodowska-Curie</b> urodziła się w <b>Warszawie</b>. Badała fizykę i chemię. <b>Dwa razy</b> dostała <b>Nagrodę Nobla</b> – jedną z najważniejszych nagród dla naukowców.</p>`,
      hook: 'Kopernik „wstrzymał Słońce” w środku i „ruszył Ziemię” w podróż dookoła. ☀️🌍',
      check: { q: 'Co odkrył Mikołaj Kopernik?', options: ['że Ziemia krąży wokół Słońca', 'że Słońce krąży wokół Ziemi', 'nową górę'], answer: 0, explain: 'Kopernik odkrył, że Ziemia krąży wokół Słońca.' },
    },
    {
      title: 'Królowa i król',
      svg: cards('Królowa Jadwiga – odnowiła Akademię Krakowską, wspierała szpitale. Król Stefan Batory – świetny dowódca, ulepszył wojsko', [
        ['👑📚', 'Jadwiga', 'Akademia Krakowska'], ['👑⚔️', 'Stefan Batory', 'ulepszył wojsko'],
      ], 2),
      text: `<p><b>Królowa Jadwiga</b> mądrze rządziła Polską. Odnowiła <b>Akademię Krakowską</b> – szkołę dla dorosłych, czyli uczelnię. Wspierała budowę kościołów i szpitali.</p>
        <p><b>Stefan Batory</b> był królem Polski, z pochodzenia Węgrem. Był świetnym dowódcą i <b>ulepszył polskie wojsko</b>.</p>`,
      hook: 'Jadwiga – książki 📚, Batory – wojsko ⚔️.',
    },
    {
      title: 'Odważne Polki',
      svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Po lewej wysoka góra z flagą na szczycie – Wanda Rutkiewicz weszła na Mount Everest w 1978 roku. Po prawej Elżbieta Zawacka Zo – nauczycielka i jedyna kobieta wśród cichociemnych">
        <polygon points="20,170 100,30 180,170" class="f1 s1 sw"/>
        <polygon points="78,68 100,30 122,68 110,62 100,72 90,62" class="bg ln"/>
        <line x1="100" y1="30" x2="100" y2="6" class="ln"/>
        <rect x="100" y="6" width="22" height="12" class="t2"/>
        <text x="100" y="190" class="tx-b" text-anchor="middle">Wanda Rutkiewicz</text>
        <text x="100" y="206" class="tx-s" text-anchor="middle">Mount Everest, 1978</text>
        <rect x="216" y="20" width="176" height="150" rx="12" class="f3 s3 sw"/>
        <text x="304" y="72" class="tx" text-anchor="middle" style="font-size:28px">🧑‍🏫 🎖️</text>
        <text x="304" y="112" class="tx" text-anchor="middle">nauczycielka</text>
        <text x="304" y="136" class="tx" text-anchor="middle">i cichociemna</text>
        <text x="304" y="190" class="tx-b" text-anchor="middle">Elżbieta Zawacka</text>
        <text x="304" y="206" class="tx-s" text-anchor="middle">„Zo”</text>
      </svg>`,
      text: `<p><b>Wanda Rutkiewicz</b> była <b>himalaistką</b> – wspinała się w najwyższych górach świata. W 1978 roku weszła na <b lang="en">Mount Everest</b>, najwyższą górę świata.</p>
        <p><b>Elżbieta Zawacka „Zo”</b> była <b>nauczycielką</b>. W czasie II wojny światowej została żołnierzem. Była jedyną kobietą wśród <b>cichociemnych</b> – żołnierzy do zadań specjalnych.</p>`,
      check: { q: 'Kim była Wanda Rutkiewicz?', options: ['himalaistką', 'królową', 'astronomką'], answer: 0, explain: 'Wanda Rutkiewicz wspinała się w Himalajach – najwyższych górach świata.' },
    },
    {
      title: 'Papież z Wadowic',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Karol Wojtyła z Wadowic w 1978 roku został papieżem i przyjął imię Jan Paweł II – pierwszy polski papież, papież pielgrzym">
        ${marker('a-k3spo-pap-1')}
        <rect x="10" y="30" width="150" height="100" rx="12" class="f4 s4 sw"/>
        <text x="85" y="72" class="tx-b" text-anchor="middle">Karol Wojtyła</text>
        <text x="85" y="100" class="tx-s" text-anchor="middle">z Wadowic</text>
        <path d="M166,80 L226,80" class="ln" marker-end="url(#a-k3spo-pap-1)"/>
        <text x="196" y="68" class="tx-s" text-anchor="middle">1978</text>
        <rect x="232" y="30" width="160" height="100" rx="12" class="f5 s5 sw"/>
        <text x="312" y="72" class="tx-b" text-anchor="middle">Jan Paweł II</text>
        <text x="312" y="100" class="tx-s" text-anchor="middle">pierwszy polski papież</text>
        <text x="200" y="160" class="tx" text-anchor="middle">„papież pielgrzym” ✈️🌍</text>
      </svg>`,
      text: `<p><b>Karol Wojtyła</b> urodził się w <b>Wadowicach</b>. W 1978 roku został <b>papieżem</b> i przyjął imię <b>Jan Paweł II</b>. Był pierwszym polskim papieżem.</p>
        <p>Odwiedził bardzo wiele krajów, dlatego nazywano go „papieżem pielgrzymem”.</p>`,
      remember: 'Karol Wojtyła = Jan Paweł II, pierwszy polski papież.',
    },
    {
      title: 'Twoje drzewo rodziny',
      svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Drzewo rodziny od dołu: ja, nad tobą mama i tata, nad nimi czworo dziadków">
        <line x1="200" y1="190" x2="200" y2="150" class="ln"/>
        <line x1="110" y1="130" x2="290" y2="130" class="ln"/>
        <line x1="110" y1="130" x2="110" y2="110" class="ln"/>
        <line x1="290" y1="130" x2="290" y2="110" class="ln"/>
        <line x1="110" y1="70" x2="110" y2="56" class="ln"/>
        <line x1="290" y1="70" x2="290" y2="56" class="ln"/>
        <line x1="56" y1="56" x2="164" y2="56" class="ln"/>
        <line x1="236" y1="56" x2="344" y2="56" class="ln"/>
        <rect x="14" y="10" width="84" height="36" rx="8" class="f1 s1 sw"/>
        <rect x="114" y="10" width="84" height="36" rx="8" class="f1 s1 sw"/>
        <rect x="202" y="10" width="84" height="36" rx="8" class="f1 s1 sw"/>
        <rect x="302" y="10" width="84" height="36" rx="8" class="f1 s1 sw"/>
        <text x="56" y="34" class="tx-s" text-anchor="middle">babcia</text>
        <text x="156" y="34" class="tx-s" text-anchor="middle">dziadek</text>
        <text x="244" y="34" class="tx-s" text-anchor="middle">babcia</text>
        <text x="344" y="34" class="tx-s" text-anchor="middle">dziadek</text>
        <line x1="56" y1="46" x2="56" y2="56" class="ln"/>
        <line x1="156" y1="46" x2="156" y2="56" class="ln"/>
        <line x1="244" y1="46" x2="244" y2="56" class="ln"/>
        <line x1="344" y1="46" x2="344" y2="56" class="ln"/>
        <rect x="60" y="70" width="100" height="40" rx="8" class="f3 s3 sw"/>
        <rect x="240" y="70" width="100" height="40" rx="8" class="f3 s3 sw"/>
        <text x="110" y="96" class="tx" text-anchor="middle">mama</text>
        <text x="290" y="96" class="tx" text-anchor="middle">tata</text>
        <line x1="200" y1="130" x2="200" y2="150" class="ln"/>
        <rect x="150" y="150" width="100" height="44" rx="8" class="f2 s2 sw"/>
        <text x="200" y="178" class="tx-b" text-anchor="middle">🙂 ja</text>
        <text x="200" y="222" class="tx-s" text-anchor="middle">wyżej mogą być pradziadkowie</text>
      </svg>`,
      text: `<p>Twoja rodzina też ma swoją <b>historię</b>. Zapytaj dziadków, jak żyli, gdy byli dziećmi. Obejrzyjcie stare zdjęcia.</p>
        <p>Narysuj <b>drzewo rodziny</b>: na dole ty, wyżej rodzice, jeszcze wyżej dziadkowie i pradziadkowie.</p>
        <p>Ludzie dawno temu wymyślili rzeczy, których używasz do dziś: <b>cyfry</b>, <b>papier</b>, <b>mydło</b>, <b>instrumenty</b>.</p>`,
      hook: 'Im wyżej na drzewie, tym dawniej żyli ludzie. 🌳',
      check: { q: 'Kto jest w drzewie rodziny nad dziadkami?', options: ['pradziadkowie', 'rodzice', 'rodzeństwo'], answer: 0, explain: 'Rodzice dziadków to pradziadkowie.' },
    },
  ];

  // ------------------------------------------------------------------
  L['spoleczna/tradycje'] = [
    {
      title: 'Wigilia',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Wigilijny stół: biały obrus, pod nim siano, na stole opłatek, za oknem pierwsza gwiazdka, obok choinka">
        <rect x="150" y="10" width="96" height="66" rx="6" class="f1 s1 sw"/>
        <text x="198" y="54" class="tx" text-anchor="middle" style="font-size:26px">⭐</text>
        <text x="198" y="96" class="tx-s" text-anchor="middle">pierwsza gwiazdka</text>
        <polygon points="350,30 388,130 312,130" class="f3 s3 sw"/>
        <rect x="342" y="130" width="16" height="20" class="f2 s2"/>
        <text x="350" y="172" class="tx-s" text-anchor="middle">choinka</text>
        <rect x="176" y="112" width="44" height="18" rx="3" class="bg ln"/>
        <rect x="20" y="130" width="280" height="18" rx="4" class="bg ln"/>
        <path d="M40,148 L40,196 M280,148 L280,196" class="ln sw"/>
        <path d="M60,152 Q75,162 90,152 Q105,162 120,152" class="ln s4 sw"/>
        <text x="90" y="182" class="tx-s" text-anchor="middle">siano</text>
        <text x="198" y="182" class="tx-s" text-anchor="middle">opłatek</text>
      </svg>`,
      text: `<p><b>Wigilia</b> jest <b>24 grudnia</b>. Kolację zaczynamy, gdy na niebie pojawi się <b>pierwsza gwiazdka</b>.</p>
        <p>Dzielimy się <b>opłatkiem</b> i składamy sobie życzenia. Pod białym obrusem leży trochę <b>siana</b>. W domu stoi <b>choinka</b>.</p>`,
      remember: 'Wigilia: gwiazdka, opłatek, życzenia, siano pod obrusem.',
      check: { q: 'Czym dzielimy się w Wigilię?', options: ['opłatkiem', 'pisanką', 'palmą'], answer: 0, explain: 'W Wigilię dzielimy się opłatkiem i składamy życzenia.' },
    },
    {
      title: 'Wielkanoc',
      svg: cards('Wielkanoc: palmy w Niedzielę Palmową, pisanki i święconka w koszyczku, śmigus-dyngus – oblewanie wodą w Poniedziałek Wielkanocny', [
        ['🌿', 'palma', 'Niedziela Palmowa'], ['🥚', 'pisanki', 'w koszyczku'], ['💦', 'oblewanie', 'śmigus-dyngus'],
      ], 3),
      text: `<p>W <b>Niedzielę Palmową</b> przynosimy <b>palmy</b>. Przed Wielkanocą malujemy jajka – <b>pisanki</b> – i niesiemy koszyczek ze <b>święconką</b>.</p>
        <p>W <b>Poniedziałek Wielkanocny</b> jest <b>śmigus-dyngus</b> – oblewamy się wodą.</p>`,
      hook: 'Śmigus-dyngus – mokry poniedziałek! 💦',
      check: { q: 'Jak nazywamy malowane jajka?', options: ['pisanki', 'opłatki', 'znicze'], answer: 0, explain: 'Pisanki to ozdobione jajka na Wielkanoc.' },
    },
    {
      title: 'Zwyczaje przez cały rok',
      svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Koło roku: wiosna – topienie Marzanny; po żniwach – dożynki z wieńcem; listopad – Zaduszki ze zniczami i andrzejki z laniem wosku; zima – Wigilia">
        <rect x="8" y="8" width="188" height="108" rx="12" class="f3 s3 sw"/>
        <rect x="204" y="8" width="188" height="108" rx="12" class="f4 s4 sw"/>
        <rect x="8" y="124" width="188" height="108" rx="12" class="f2 s2 sw"/>
        <rect x="204" y="124" width="188" height="108" rx="12" class="f1 s1 sw"/>
        <text x="102" y="34" class="tx-b" text-anchor="middle">wiosna</text>
        <text x="298" y="34" class="tx-b" text-anchor="middle">po żniwach</text>
        <text x="102" y="150" class="tx-b" text-anchor="middle">listopad</text>
        <text x="298" y="150" class="tx-b" text-anchor="middle">zima</text>
        <text x="102" y="74" class="tx" text-anchor="middle" style="font-size:24px">❄️ 🌷</text>
        <text x="298" y="74" class="tx" text-anchor="middle" style="font-size:24px">🌾</text>
        <text x="102" y="190" class="tx" text-anchor="middle" style="font-size:24px">🕯️ 🔮</text>
        <text x="298" y="190" class="tx" text-anchor="middle" style="font-size:24px">⭐🎄</text>
        <text x="102" y="102" class="tx-s" text-anchor="middle">topienie Marzanny</text>
        <text x="298" y="102" class="tx-s" text-anchor="middle">dożynki, wieniec</text>
        <text x="102" y="218" class="tx-s" text-anchor="middle">Zaduszki, andrzejki</text>
        <text x="298" y="218" class="tx-s" text-anchor="middle">Wigilia</text>
      </svg>`,
      text: `<ul>
        <li>Pierwszy dzień wiosny – <b>topienie Marzanny</b>: żegnamy zimę, witamy wiosnę.</li>
        <li>Po żniwach – <b>dożynki</b>: święto zakończenia żniw, wieńce z kłosów.</li>
        <li>Listopad – <b>Zaduszki</b>: wspominamy zmarłych i zapalamy znicze. W nocy z 29 na 30 listopada – <b>andrzejki</b>: wróżby, np. lanie wosku.</li>
      </ul>`,
      check: { q: 'Który zwyczaj żegna zimę?', options: ['topienie Marzanny', 'dożynki', 'andrzejki'], answer: 0, explain: 'W pierwszy dzień wiosny topimy Marzannę – żegnamy zimę.' },
    },
    {
      title: 'Inne kraje – inne zwyczaje',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Dzieci z różnych krajów trzymają się za ręce wokół kuli ziemskiej – szanujemy zwyczaje innych">
        <circle cx="200" cy="85" r="60" class="f1 s1 sw"/>
        <text x="200" y="100" class="tx" text-anchor="middle" style="font-size:44px">🌍</text>
        <text x="60" y="80" class="tx" text-anchor="middle" style="font-size:34px">🧒🏻</text>
        <text x="340" y="80" class="tx" text-anchor="middle" style="font-size:34px">🧒🏾</text>
        <text x="110" y="160" class="tx" text-anchor="middle" style="font-size:30px">👧🏽</text>
        <text x="290" y="160" class="tx" text-anchor="middle" style="font-size:30px">👦🏼</text>
        <text x="200" y="164" class="tx-b" text-anchor="middle">❤️</text>
      </svg>`,
      text: `<p>W różnych <b>regionach</b> Polski świętuje się trochę inaczej. W innych <b>krajach</b> ludzie mają jeszcze inne zwyczaje.</p>
        <p>Szanujemy cudze tradycje i chętnie je poznajemy. Możesz zapytać kolegę z innego kraju, jak świętuje jego rodzina.</p>`,
      hook: 'Ile krajów, tyle świąt – i każde jest ciekawe. 🎉',
    },
  ];
})();
