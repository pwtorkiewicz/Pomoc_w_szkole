/* Lekcje – edukacja informatyczna, klasa 3. Klucz: 'informatyka/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};
(function () {
  const L = window.LESSONS;

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
  function twoCols(label, titleL, itemsL, titleR, itemsR, cl, cr) {
    const n = Math.max(itemsL.length, itemsR.length), H = 64 + n * 40;
    const col = (x, title, items, c) => `<rect x="${x}" y="8" width="188" height="${H - 16}" rx="12" class="f${c} s${c} sw"/>
      <text x="${x + 94}" y="38" class="tx-b" text-anchor="middle">${title}</text>
      ${items.map(([e, t], k) => `<text x="${x + 14}" y="${76 + k * 40}" class="tx">${e} ${t}</text>`).join('')}`;
    return `<svg viewBox="0 0 400 ${H}" role="img" aria-label="${label}">${col(6, titleL, itemsL, cl)}${col(206, titleR, itemsR, cr)}</svg>`;
  }
  const marker = (id) => `<defs><marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>`;
  // Kratka z robotem i drogą: pola [kolumna, wiersz] od 0 z lewego górnego rogu; droga – lista pól od robota
  function kratka(label, cols, rows, robot, star, droga, id, extra) {
    const c = 50, x0 = 10, y0 = 10, W = Math.max(300, cols * c + 20 + (extra ? 160 : 0)), H = rows * c + 20;
    let s = droga ? marker(id) : '';
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) s += `<rect x="${x0 + i * c}" y="${y0 + j * c}" width="${c}" height="${c}" class="${(i + j) % 2 ? 'f1' : 'bg'} ln-thin"/>`;
    const cx = (i) => x0 + i * c + c / 2, cy = (j) => y0 + j * c + c / 2;
    if (droga) s += `<path d="M${droga.map(([i, j]) => `${cx(i)},${cy(j)}`).join(' L')}" class="ln s2 sw dash" marker-end="url(#${id})"/>`;
    if (star) s += `<text x="${cx(star[0])}" y="${cy(star[1]) + 9}" class="tx" text-anchor="middle" style="font-size:26px">⭐</text>`;
    s += `<text x="${cx(robot[0])}" y="${cy(robot[1]) + 9}" class="tx" text-anchor="middle" style="font-size:26px">🤖</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}">${s}${extra ? extra(cols * c + 30) : ''}</svg>`;
  }

  // ------------------------------------------------------------------
  L['informatyka/algorytmy'] = [
    {
      title: 'Kolejność ma znaczenie',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dobrze: najpierw skarpetki, potem buty. Źle: najpierw buty, potem skarpetki – skarpetka na bucie">
        ${marker('a-k3inf-kol-1')}
        <rect x="8" y="8" width="384" height="86" rx="12" class="f3 s3 sw"/>
        <rect x="8" y="106" width="384" height="86" rx="12" class="f2 s2 sw"/>
        <text x="30" y="58" class="tx-b">✅</text>
        <text x="30" y="156" class="tx-b">❌</text>
        <text x="120" y="50" class="tx" text-anchor="middle" style="font-size:30px">🧦</text>
        <text x="120" y="80" class="tx-s" text-anchor="middle">1. skarpetki</text>
        <path d="M170,42 L220,42" class="ln" marker-end="url(#a-k3inf-kol-1)"/>
        <text x="280" y="50" class="tx" text-anchor="middle" style="font-size:30px">👟</text>
        <text x="280" y="80" class="tx-s" text-anchor="middle">2. buty</text>
        <text x="120" y="148" class="tx" text-anchor="middle" style="font-size:30px">👟</text>
        <text x="120" y="178" class="tx-s" text-anchor="middle">1. buty</text>
        <path d="M170,140 L220,140" class="ln" marker-end="url(#a-k3inf-kol-1)"/>
        <text x="280" y="148" class="tx" text-anchor="middle" style="font-size:30px">🧦❓</text>
        <text x="280" y="178" class="tx-s" text-anchor="middle">2. skarpetki?</text>
      </svg>`,
      text: `<p>Wiele rzeczy trzeba robić w <b>dobrej kolejności</b>. Najpierw skarpetki, potem buty. Odwrotnie się nie da!</p>
        <p>Komputer też wykonuje polecenia <b>po kolei</b> – dokładnie tak, jak je zapiszesz.</p>`,
      hook: 'Najpierw ubierz nogę, potem but – tak jak najpierw myśl, potem rób. 🧠',
      check: { q: 'Co robisz najpierw, gdy idziesz spać?', options: ['myję zęby', 'zasypiam'], answer: 0, explain: 'Najpierw myjesz zęby, potem kładziesz się i zasypiasz.' },
    },
    {
      title: 'Algorytm to przepis',
      svg: list('Algorytm mycia zębów: 1. nałóż pastę, 2. myj zęby, 3. wypłucz usta, 4. opłucz szczoteczkę', [
        ['1', 'nałóż pastę na szczoteczkę 🪥'],
        ['2', 'myj zęby'],
        ['3', 'wypłucz usta 💧'],
        ['4', 'opłucz szczoteczkę'],
      ]),
      text: `<p><b>Algorytm</b> to dokładny przepis: kroki po kolei, które prowadzą do celu.</p>
        <p>Algorytmy są wszędzie: przepis na naleśniki, instrukcja składania klocków, droga do szkoły.</p>`,
      remember: 'Algorytm = kroki po kolei, które prowadzą do celu.',
      check: { q: 'Który przykład to algorytm?', options: ['instrukcja składania klocków', 'zdjęcie psa', 'ulubiony kolor'], answer: 0, explain: 'Instrukcja podaje kroki po kolei – to algorytm.' },
    },
    {
      title: 'Dobre polecenie',
      svg: twoCols('Złe polecenia: idź gdzieś, zrób coś, rusz się. Dobre polecenia: zrób 2 kroki do przodu, skręć w prawo, podnieś rękę',
        '❌ niejasne', [['🤷', 'idź gdzieś'], ['🤷', 'zrób coś'], ['🤷', 'rusz się']],
        '✅ dokładne', [['👣', '2 kroki do przodu'], ['↪️', 'skręć w prawo'], ['✋', 'podnieś rękę']], 2, 3),
      text: `<p><b>Polecenie</b> to jeden krok. Dobre polecenie jest <b>krótkie i dokładne</b> – wiadomo, co zrobić i ile razy.</p>
        <p>Kilka poleceń po kolei to <b>sekwencja</b>.</p>`,
      hook: 'Pomyśl, że wydajesz polecenia robotowi – on nie zgaduje! 🤖',
      check: { q: 'Które polecenie zrozumie robot?', options: ['Zrób 3 kroki do przodu.', 'Idź tam, gdzie trzeba.', 'Rusz się trochę.'], answer: 0, explain: 'Robot potrzebuje dokładnego polecenia: co zrobić i ile razy.' },
    },
    {
      title: 'Szukamy reguły',
      svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Ciąg kółek: czerwone, niebieskie, czerwone, niebieskie, czerwone, znak zapytania. Reguła: kolory na zmianę">
        <circle cx="40" cy="60" r="24" class="f2 s2 sw"/>
        <circle cx="104" cy="60" r="24" class="f1 s1 sw"/>
        <circle cx="168" cy="60" r="24" class="f2 s2 sw"/>
        <circle cx="232" cy="60" r="24" class="f1 s1 sw"/>
        <circle cx="296" cy="60" r="24" class="f2 s2 sw"/>
        <circle cx="360" cy="60" r="24" class="bg ln dash"/>
        <text x="360" y="68" class="tx-b" text-anchor="middle">?</text>
        <text x="200" y="128" class="tx" text-anchor="middle">reguła: kolory na zmianę</text>
      </svg>`,
      text: `<p>W zagadkach „co będzie dalej?” szukasz <b>reguły</b> – tego, co się powtarza.</p>
        <p>Tu kolory są na zmianę: pomarańczowy, niebieski, pomarańczowy… Następne będzie <b>niebieskie</b>.</p>
        <p>Labirynty i łamigłówki to trening myślenia jak programista.</p>`,
      check: { q: 'Co będzie dalej? 1, 3, 5, 7, …', options: ['9', '8', '10'], answer: 0, explain: 'Każda liczba jest o 2 większa: 7 + 2 = 9.' },
    },
  ];

  // ------------------------------------------------------------------
  L['informatyka/programowanie'] = [
    {
      title: 'Strzałki dla robota',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Robot w środku. Strzałka w górę – pole wyżej, w dół – pole niżej, w lewo – pole w lewo, w prawo – pole w prawo">
        ${marker('a-k3inf-str-1')}
        <rect x="160" y="55" width="80" height="60" rx="10" class="f4 s4 sw"/>
        <text x="200" y="96" class="tx" text-anchor="middle" style="font-size:30px">🤖</text>
        <path d="M200,52 L200,14" class="ln sw" marker-end="url(#a-k3inf-str-1)"/>
        <path d="M200,118 L200,156" class="ln sw" marker-end="url(#a-k3inf-str-1)"/>
        <path d="M156,85 L110,85" class="ln sw" marker-end="url(#a-k3inf-str-1)"/>
        <path d="M244,85 L290,85" class="ln sw" marker-end="url(#a-k3inf-str-1)"/>
        <text x="216" y="30" class="tx">⬆️ w górę</text>
        <text x="216" y="152" class="tx">⬇️ w dół</text>
        <text x="102" y="90" class="tx" text-anchor="end">⬅️ w lewo</text>
        <text x="298" y="90" class="tx">➡️ w prawo</text>
      </svg>`,
      text: `<p><b>Program</b> to algorytm zapisany dla komputera albo robota. Pisze go <b>programista</b>.</p>
        <p>Nasz robot rozumie 4 polecenia – strzałki. Każda strzałka to <b>jedno pole</b>.</p>`,
      remember: 'Jedna strzałka = jedno pole.',
    },
    {
      title: 'Pierwszy program',
      svg: kratka('Kratka 5 na 3. Robot na dole po lewej. Droga: dwa pola w prawo, potem jedno w górę – do gwiazdki. Program: w prawo, w prawo, w górę', 5, 3, [0, 2], [2, 1], [[0, 2], [2, 2], [2, 1]], 'a-k3inf-prg-1',
        (x) => `<text x="${x}" y="70" class="tx-b">program:</text><text x="${x}" y="104" class="tx" style="font-size:22px">➡️ ➡️ ⬆️</text>`),
      text: `<p>Robot stoi na dole po lewej, a gwiazdka jest <b>2 pola w prawo</b> i <b>1 pole w górę</b>.</p>
        <p>Program: <b>➡️ ➡️ ⬆️</b>. Robot wykonuje strzałki po kolei.</p>`,
      hook: 'Policz pola palcem, zanim napiszesz program. ☝️',
      check: { q: 'Gwiazdka jest 3 pola w prawo od robota. Jaki program napiszesz?', options: ['➡️ ➡️ ➡️', '⬆️ ⬆️ ⬆️', '➡️ ⬆️'], answer: 0, explain: 'Trzy pola w prawo – trzy strzałki ➡️.' },
    },
    {
      title: 'Powtórz!',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Długi program: cztery strzałki w prawo. Krótki program: powtórz 4 razy strzałkę w prawo. Oba robią to samo">
        <rect x="8" y="14" width="384" height="56" rx="10" class="f1 s1 sw"/>
        <text x="20" y="49" class="tx">długo:</text>
        <text x="96" y="51" class="tx" style="font-size:24px">➡️ ➡️ ➡️ ➡️</text>
        <rect x="8" y="94" width="384" height="56" rx="10" class="f3 s3 sw"/>
        <text x="20" y="129" class="tx">krótko:</text>
        <text x="96" y="129" class="tx-b">🔁 powtórz 4 razy ➡️</text>
        <text x="200" y="166" class="tx-s" text-anchor="middle">oba programy robią to samo</text>
      </svg>`,
      text: `<p>Zamiast pisać tę samą strzałkę wiele razy, używasz polecenia <b>powtórz</b>.</p>
        <p>„Powtórz 4 razy ➡️” to to samo co ➡️ ➡️ ➡️ ➡️ – a program jest krótszy.</p>`,
      remember: 'Powtórz N razy – to samo polecenie N razy.',
      check: { q: 'Co znaczy „powtórz 2 razy ⬇️”?', options: ['⬇️ ⬇️', '⬇️', '⬇️ ⬇️ ⬇️'], answer: 0, explain: 'Dwa razy w dół: ⬇️ ⬇️.', sayExplain: 'Dwa razy w dół.', sayOptions: ['w dół, w dół', 'w dół', 'w dół, w dół, w dół'] },
    },
    {
      title: 'Programujemy z klocków',
      svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Klocki ułożone jeden pod drugim: start, idź w prawo, idź w prawo, powiedz Cześć. Obok kot na ekranie mówi Cześć">
        <rect x="20" y="14" width="190" height="40" rx="10" class="f4 s4 sw"/>
        <rect x="20" y="58" width="190" height="40" rx="6" class="f1 s1 sw"/>
        <rect x="20" y="102" width="190" height="40" rx="6" class="f1 s1 sw"/>
        <rect x="20" y="146" width="190" height="40" rx="6" class="f5 s5 sw"/>
        <text x="36" y="40" class="tx-b">▶ start</text>
        <text x="36" y="84" class="tx">idź ➡️</text>
        <text x="36" y="128" class="tx">idź ➡️</text>
        <text x="36" y="172" class="tx">powiedz „Cześć!”</text>
        <rect x="236" y="30" width="154" height="140" rx="8" class="bg ln"/>
        <text x="300" y="130" class="tx" text-anchor="middle" style="font-size:40px">🐱</text>
        <rect x="300" y="50" width="80" height="34" rx="12" class="f5 s5"/>
        <text x="340" y="73" class="tx-s" text-anchor="middle">Cześć!</text>
        <text x="313" y="196" class="tx-s" text-anchor="middle">ekran</text>
      </svg>`,
      text: `<p>W wielu programach dla dzieci polecenia to kolorowe <b>klocki</b>. Układasz je jeden pod drugim, jak puzzle.</p>
        <p>Klocki sterują <b>postacią na ekranie</b>: każą jej iść, skakać albo mówić. Tak możesz zrobić własną historyjkę albo grę.</p>`,
      hook: 'Klocki programowania to jak klocki do budowania – każdy ma swoje miejsce. 🧱',
    },
    {
      title: 'Szukamy błędu',
      svg: kratka('Kratka 4 na 3. Robot na dole po lewej, gwiazdka na górze po prawej. Program z błędem: trzy razy w prawo i dwa razy w dół – robot wychodzi poza kratkę. Przerywana linia pokazuje poprawiony program: trzy razy w prawo i dwa razy w górę', 4, 3, [0, 2], [3, 0], [[0, 2], [3, 2], [3, 0]], 'a-k3inf-bl-1',
        (x) => `<text x="${x}" y="40" class="tx-b">❌ ➡️➡️➡️⬇️⬇️</text><text x="${x}" y="70" class="tx-s">robot ucieka z kratki</text><text x="${x}" y="110" class="tx-b">✅ ➡️➡️➡️⬆️⬆️</text><text x="${x}" y="140" class="tx-s">teraz dojdzie</text>`),
      text: `<p>Robot nie doszedł do celu? W programie jest <b>błąd</b>.</p>
        <p>Sprawdź program <b>krok po kroku</b>, palcem na kratce. Znajdź zły krok i popraw go. Tu zamiast ⬇️ ⬇️ trzeba ⬆️ ⬆️.</p>`,
      hook: 'Błędy robią wszyscy programiści. Ważne, żeby je znaleźć i poprawić! 🔍',
      check: { q: 'Robot poszedł w dół, a gwiazdka jest wyżej. Co poprawisz?', options: ['⬇️ zamienię na ⬆️', 'dopiszę ⬇️', 'usunę cały program'], answer: 0, explain: 'Trzeba zmienić kierunek: zamiast w dół – w górę.', sayOptions: ['strzałkę w dół zamienię na strzałkę w górę', 'dopiszę strzałkę w dół', 'usunę cały program'] },
    },
  ];

  // ------------------------------------------------------------------
  L['informatyka/komputer'] = [
    {
      title: 'Komputer i jego pomocnicy',
      svg: cards('Urządzenia: klawiatura – piszę, mysz – klikam, monitor – widzę, głośniki – słyszę, mikrofon – nagrywam głos, drukarka – drukuję', [
        ['⌨️', 'klawiatura', 'piszę'], ['🖱️', 'mysz', 'klikam'], ['🖥️', 'monitor', 'widzę'],
        ['🔊', 'głośniki', 'słyszę'], ['🎤', 'mikrofon', 'nagrywam głos'], ['🖨️', 'drukarka', 'drukuję'],
      ], 3),
      text: `<p>Do komputera podłączamy różne <b>urządzenia</b>. Każde ma swoje zadanie.</p>
        <p>Urządzenia cyfrowe to też <b>tablet</b>, <b>smartfon</b> i <b>laptop</b>.</p>`,
      hook: 'Klawiatura i mysz – komputer cię słucha. Monitor i głośniki – komputer do ciebie mówi. 💬',
      check: { q: 'Które urządzenie pokazuje obraz?', options: ['monitor', 'klawiatura', 'mikrofon'], answer: 0, explain: 'Obraz z komputera widzisz na monitorze.' },
    },
    {
      title: 'Kopiuj, wklej, usuń',
      svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Kopiuj: gwiazdka trafia do schowka. Wklej: kopia gwiazdki pojawia się w nowym miejscu. Usuń: element znika">
        ${marker('a-k3inf-kop-1')}
        <rect x="8" y="10" width="120" height="120" rx="10" class="f1 s1 sw"/>
        <rect x="140" y="10" width="120" height="120" rx="10" class="f3 s3 sw"/>
        <rect x="272" y="10" width="120" height="120" rx="10" class="f2 s2 sw"/>
        <text x="68" y="70" class="tx" text-anchor="middle" style="font-size:34px">⭐</text>
        <text x="68" y="112" class="tx-s" text-anchor="middle">📋 kopia</text>
        <text x="182" y="70" class="tx" text-anchor="middle" style="font-size:30px">⭐</text>
        <text x="222" y="100" class="tx" text-anchor="middle" style="font-size:30px">⭐</text>
        <text x="332" y="76" class="tx" text-anchor="middle" style="font-size:34px">🗑️</text>
        <text x="68" y="156" class="tx-b" text-anchor="middle">kopiuj</text>
        <text x="200" y="156" class="tx-b" text-anchor="middle">wklej</text>
        <text x="332" y="156" class="tx-b" text-anchor="middle">usuń</text>
        <text x="68" y="178" class="tx-s" text-anchor="middle">Ctrl + C</text>
        <text x="200" y="178" class="tx-s" text-anchor="middle">Ctrl + V</text>
      </svg>`,
      text: `<p>Zaznacz obrazek albo tekst. <b>Kopiuj</b> robi kopię, a <b>wklej</b> wstawia ją w nowe miejsce. <b>Usuń</b> kasuje zaznaczony element.</p>
        <p>Obrazek możesz też <b>powiększyć</b> albo <b>zmniejszyć</b>. Tak zrobisz zaproszenie, dyplom albo ogłoszenie.</p>`,
      remember: 'Ctrl + C – kopiuj, Ctrl + V – wklej (na Macu: Cmd).',
      check: { q: 'Chcesz mieć trzy takie same serduszka. Co zrobisz z jednym?', options: ['skopiuję i wkleję dwa razy', 'usunę je', 'zapiszę plik'], answer: 0, explain: 'Kopiujesz raz i wklejasz tyle razy, ile potrzebujesz.' },
    },
    {
      title: 'Plik i folder',
      svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Folder Klasa 3, a w nim pliki: Zaproszenie Ola, Rysunek kot, Dyplom">
        <path d="M20,40 L120,40 L140,58 L380,58 L380,170 L20,170 Z" class="f4 s4 sw"/>
        <rect x="40" y="76" width="96" height="76" rx="6" class="bg ln"/>
        <rect x="152" y="76" width="96" height="76" rx="6" class="bg ln"/>
        <rect x="264" y="76" width="96" height="76" rx="6" class="bg ln"/>
        <text x="88" y="110" class="tx" text-anchor="middle" style="font-size:22px">📄</text>
        <text x="200" y="110" class="tx" text-anchor="middle" style="font-size:22px">🖼️</text>
        <text x="312" y="110" class="tx" text-anchor="middle" style="font-size:22px">📄</text>
        <text x="88" y="140" class="tx-s" text-anchor="middle">Zaproszenie</text>
        <text x="200" y="140" class="tx-s" text-anchor="middle">Rysunek kot</text>
        <text x="312" y="140" class="tx-s" text-anchor="middle">Dyplom</text>
        <text x="70" y="32" class="tx-b" text-anchor="middle">📁 Klasa 3</text>
      </svg>`,
      text: `<p>Każda zapisana praca to <b>plik</b>. Pliki trzymamy w <b>folderach</b> – jak kartki w teczkach.</p>
        <p>Skończyłeś pracę? <b>Zapisz</b> ją w miejscu, które wskaże nauczyciel, i nadaj jej nazwę, po której ją znajdziesz.</p>`,
      hook: 'Folder to teczka 📁, plik to kartka 📄.',
      check: { q: 'Co trzeba zrobić, żeby nie stracić rysunku z komputera?', options: ['zapisać plik', 'wyłączyć monitor', 'wyjąć mysz'], answer: 0, explain: 'Zapisz plik w folderze, który wskaże nauczyciel.' },
    },
    {
      title: 'Internet i przeglądarka',
      svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Okno przeglądarki: na górze pasek z adresem strony, poniżej strona szkolna z zadaniami. Wybierasz strony wskazane przez nauczyciela lub rodzica">
        <rect x="10" y="10" width="380" height="170" rx="10" class="bg ln"/>
        <rect x="10" y="10" width="380" height="34" rx="10" class="f1 s1"/>
        <circle cx="30" cy="27" r="6" class="f2 s2"/>
        <circle cx="50" cy="27" r="6" class="f4 s4"/>
        <rect x="70" y="17" width="300" height="20" rx="8" class="bg ln-thin"/>
        <text x="80" y="32" class="tx-s">🔒 adres strony</text>
        <text x="200" y="96" class="tx-b" text-anchor="middle">📚 strona z zadaniami</text>
        <text x="200" y="130" class="tx-s" text-anchor="middle">którą wskazał nauczyciel</text>
        <text x="200" y="164" class="tx-s" text-anchor="middle">przeglądarka = okno na internet</text>
      </svg>`,
      text: `<p>Strony internetowe oglądasz w programie, który nazywa się <b>przeglądarka</b>.</p>
        <p>Korzystaj ze stron, które wskaże ci <b>nauczyciel</b> albo <b>rodzic</b>. Nie klikaj w reklamy i wyskakujące okienka.</p>`,
      remember: 'Przeglądarka – program do stron internetowych.',
    },
  ];

  // ------------------------------------------------------------------
  L['informatyka/bezpiecznie'] = [
    {
      title: 'Hasło to tajemnica',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Kłódka z hasłem. Hasło znasz ty i rodzice. Nie mówisz go kolegom ani nieznajomym">
        <rect x="40" y="70" width="110" height="86" rx="12" class="f4 s4 sw"/>
        <path d="M65,70 L65,46 Q95,10 125,46 L125,70" class="ln sw"/>
        <text x="95" y="122" class="tx-b" text-anchor="middle">• • • •</text>
        <text x="190" y="60" class="tx">✅ ty i rodzice</text>
        <text x="190" y="104" class="tx">❌ koledzy</text>
        <text x="190" y="148" class="tx">❌ nieznajomi</text>
      </svg>`,
      text: `<p><b>Hasło</b> chroni twoje konto, np. w grze albo w e-dzienniku. Znasz je ty i twoi rodzice.</p>
        <p>Nie mówisz hasła kolegom ani nieznajomym – nawet jeśli bardzo proszą.</p>`,
      hook: 'Hasło jest jak szczoteczka do zębów: nie pożyczasz go nikomu! 🪥',
      check: { q: 'Kto może znać twoje hasło?', options: ['rodzice', 'kolega z ławki', 'nieznajomy z gry'], answer: 0, explain: 'Hasło znają tylko rodzice.' },
    },
    {
      title: 'Dobrze i źle w sieci',
      svg: twoCols('Dobrze: piszę grzecznie, pomagam, dzielę się pomysłami. Źle: obrażanie, wyśmiewanie, nieznajomy prosi o zdjęcia',
        '👍 dobrze', [['💬', 'piszę grzecznie'], ['🤝', 'pomagam'], ['💡', 'dzielę się']],
        '👎 źle', [['😡', 'obrażanie'], ['😂', 'wyśmiewanie'], ['📸', 'prośby o foto']], 3, 2),
      text: `<p>W internecie zachowujesz się tak samo jak w szkole: <b>grzecznie i życzliwie</b>.</p>
        <p>Obrażanie, wyśmiewanie i straszenie w internecie to <b>hejt</b>. Źle jest też, gdy nieznajomy prosi o zdjęcia, adres albo spotkanie.</p>`,
      remember: 'Pisz w sieci tak, jak mówisz twarzą w twarz.',
    },
    {
      title: 'Coś złego? Powiedz dorosłemu',
      svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Trzy kroki: coś cię zaniepokoiło w internecie, nie odpisujesz, mówisz dorosłemu">
        ${marker('a-k3inf-pom-1')}
        <rect x="8" y="30" width="112" height="90" rx="12" class="f2 s2 sw"/>
        <rect x="144" y="30" width="112" height="90" rx="12" class="f4 s4 sw"/>
        <rect x="280" y="30" width="112" height="90" rx="12" class="f3 s3 sw"/>
        <text x="64" y="72" class="tx" text-anchor="middle" style="font-size:28px">😟</text>
        <text x="200" y="72" class="tx" text-anchor="middle" style="font-size:28px">🙅</text>
        <text x="336" y="72" class="tx" text-anchor="middle" style="font-size:28px">🧑‍🤝‍🧑</text>
        <text x="64" y="100" class="tx-s" text-anchor="middle">coś złego</text>
        <text x="200" y="100" class="tx-s" text-anchor="middle">nie odpisuję</text>
        <text x="336" y="100" class="tx-s" text-anchor="middle">mówię</text>
        <text x="336" y="114" class="tx-s" text-anchor="middle">dorosłemu</text>
        <path d="M122,75 L140,75" class="ln" marker-end="url(#a-k3inf-pom-1)"/>
        <path d="M258,75 L276,75" class="ln" marker-end="url(#a-k3inf-pom-1)"/>
      </svg>`,
      text: `<p>Ktoś cię obraża, straszy albo zobaczyłeś coś, co cię przestraszyło? <b>Nie odpisuj</b> i <b>powiedz dorosłemu</b> – rodzicowi albo nauczycielowi.</p>
        <p>To nie twoja wina. Dorosły pomoże.</p>`,
      check: { q: 'Ktoś pisze do ciebie w grze niemiłe rzeczy. Co robisz?', options: ['nie odpisuję i mówię dorosłemu', 'odpisuję niemiło', 'nikomu nie mówię'], answer: 0, explain: 'Nie odpowiadaj na zaczepki i powiedz o tym dorosłemu.' },
    },
    {
      title: 'Cudza praca ma autora',
      svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Rysunek z podpisem autora: Rys. Ania. Ola nie może podpisać go swoim imieniem">
        <rect x="20" y="14" width="170" height="150" rx="8" class="bg ln"/>
        <text x="105" y="90" class="tx" text-anchor="middle" style="font-size:48px">🌻</text>
        <text x="105" y="150" class="tx-s" text-anchor="middle">rys. Ania</text>
        <text x="296" y="60" class="tx-b" text-anchor="middle">autor: Ania ✅</text>
        <text x="296" y="110" class="tx-b" text-anchor="middle">„moje” – Ola ❌</text>
        <text x="296" y="150" class="tx-s" text-anchor="middle">podaj, czyja to praca</text>
      </svg>`,
      text: `<p>Każdy rysunek, zdjęcie, tekst i piosenka mają <b>autora</b>. Nie podpisujesz cudzej pracy swoim imieniem.</p>
        <p>Gdy korzystasz z cudzego obrazka, napisz, skąd go masz. Tak szanujesz pracę innych.</p>`,
      hook: 'Chciałbyś, żeby ktoś podpisał twój rysunek swoim imieniem? No właśnie! ✍️',
      check: { q: 'Bierzesz do plakatu obrazek z internetu. Co robisz?', options: ['podaję, skąd go mam', 'podpisuję go swoim imieniem', 'udaję, że sam go narysowałem'], answer: 0, explain: 'Cudza praca ma autora. Podajesz, skąd ją wziąłeś.' },
    },
  ];
})();
