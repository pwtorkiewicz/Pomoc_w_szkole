/* Lekcje – edukacja przyrodnicza, klasa 3. Klucz: 'przyroda/<id działu>'. Format: docs/LEKCJE.md */
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
  const marker = (id) => `<defs><marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>`;

  // ------------------------------------------------------------------
  L['przyroda/rosliny-zwierzeta'] = [
    {
      title: 'Drzewa liściaste i iglaste',
      svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej drzewo liściaste z okrągłą koroną: dąb, brzoza, klon. Po prawej drzewo iglaste w kształcie trójkąta: sosna, świerk">
        <rect x="88" y="120" width="24" height="60" class="f2 s2 sw"/>
        <circle cx="100" cy="80" r="62" class="f3 s3 sw"/>
        <text x="100" y="90" class="tx" text-anchor="middle" style="font-size:26px">🍃</text>
        <rect x="288" y="150" width="24" height="30" class="f2 s2 sw"/>
        <polygon points="300,14 360,150 240,150" class="f3 s3 sw"/>
        <text x="300" y="118" class="tx" text-anchor="middle" style="font-size:26px">🌲</text>
        <text x="100" y="202" class="tx-b" text-anchor="middle">liściaste</text>
        <text x="300" y="202" class="tx-b" text-anchor="middle">iglaste</text>
        <text x="100" y="218" class="tx-s" text-anchor="middle">dąb, brzoza, klon</text>
        <text x="300" y="218" class="tx-s" text-anchor="middle">sosna, świerk</text>
      </svg>`,
      text: `<p>Drzewa <b>liściaste</b> mają liście, np. dąb, brzoza, klon. Drzewa <b>iglaste</b> mają igły, np. sosna i świerk.</p>
        <p>Dąb poznasz po <b>żołędziach</b>, kasztanowiec – po <b>kasztanach</b>, a brzozę – po <b>białej korze</b>.</p>`,
      remember: 'Liście – drzewo liściaste. Igły – drzewo iglaste.',
      hook: 'Igły drzewa są cienkie i kłują jak igła do szycia 🪡.',
      check: { q: 'Które drzewo ma igły?', options: ['świerk', 'dąb', 'brzoza'], answer: 0, explain: 'Świerk jest drzewem iglastym. Dąb i brzoza mają liście.' },
    },
    {
      title: 'Co dają nam zwierzęta hodowlane?',
      svg: cards('Krowa daje mleko, kura jajka, owca wełnę, pszczoła miód', [
        ['🐄', 'krowa', 'mleko 🥛'], ['🐔', 'kura', 'jajka 🥚'], ['🐑', 'owca', 'wełnę 🧶'], ['🐝', 'pszczoła', 'miód 🍯'],
      ], 4),
      text: `<p>Zwierzęta <b>hodowlane</b> hodują ludzie, np. w gospodarstwie na wsi. Dbają o nie, a zwierzęta dają nam jedzenie i materiały.</p>`,
      hook: 'Śniadanie od zwierząt: mleko od krowy, jajko od kury, miód od pszczoły. 🍳',
      check: { q: 'Które zwierzę daje nam jajka?', options: ['kura', 'owca', 'krowa'], answer: 0, explain: 'Jajka znosi kura.' },
    },
    {
      title: 'W lesie czy w zoo?',
      svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Po lewej zwierzęta polskiego lasu: jeż, wiewiórka, sarna, zając. Po prawej zwierzęta z innych części świata, w Polsce tylko w zoo: żyrafa, słoń, kangur, pingwin">
        <rect x="8" y="8" width="188" height="174" rx="12" class="f3 s3 sw"/>
        <rect x="204" y="8" width="188" height="174" rx="12" class="f4 s4 sw"/>
        <text x="102" y="36" class="tx-b" text-anchor="middle">polski las</text>
        <text x="298" y="36" class="tx-b" text-anchor="middle">tylko w zoo</text>
        <text x="102" y="92" class="tx" text-anchor="middle" style="font-size:34px">🦔 🐿️</text>
        <text x="102" y="146" class="tx" text-anchor="middle" style="font-size:34px">🦌 🐇</text>
        <text x="298" y="92" class="tx" text-anchor="middle" style="font-size:34px">🦒 🐘</text>
        <text x="298" y="146" class="tx" text-anchor="middle" style="font-size:34px">🦘 🐧</text>
        <text x="102" y="172" class="tx-s" text-anchor="middle">żyją tu w naturze</text>
        <text x="298" y="172" class="tx-s" text-anchor="middle">żyją daleko od Polski</text>
      </svg>`,
      text: `<p>W polskim lesie i w parku spotkasz jeża, wiewiórkę, sarnę, zająca. Żyrafa, słoń, kangur i pingwin żyją w naturze w innych częściach świata. U nas zobaczysz je tylko w zoo.</p>
        <p>Rośliny z daleka to np. kaktus, palma, ananas.</p>`,
      hook: 'Pomyśl: czy to zwierzę przeżyłoby polską zimę na dworze? ❄️ Żyrafa – nie!',
    },
    {
      title: 'Fasola rośnie – obserwujemy',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy etapy: nasiono fasoli na mokrej wacie, nasiono z kiełkiem, mała roślinka z liśćmi. Roślina potrzebuje wody, światła, powietrza i ciepła">
        ${marker('a-k3prz-fas-1')}
        <rect x="10" y="120" width="100" height="22" rx="8" class="f1 s1 sw"/>
        <rect x="150" y="120" width="100" height="22" rx="8" class="f1 s1 sw"/>
        <rect x="290" y="120" width="100" height="22" rx="8" class="f1 s1 sw"/>
        <ellipse cx="60" cy="110" rx="18" ry="11" class="f2 s2 sw"/>
        <ellipse cx="200" cy="110" rx="18" ry="11" class="f2 s2 sw"/>
        <path d="M206,102 C214,86 210,74 220,64" class="ln s3 sw"/>
        <ellipse cx="340" cy="110" rx="18" ry="11" class="f2 s2 sw"/>
        <path d="M340,100 L340,40" class="ln s3 sw"/>
        <ellipse cx="322" cy="48" rx="18" ry="9" class="f3 s3 sw"/>
        <ellipse cx="358" cy="48" rx="18" ry="9" class="f3 s3 sw"/>
        <path d="M115,90 L145,90" class="ln" marker-end="url(#a-k3prz-fas-1)"/>
        <path d="M255,90 L285,90" class="ln" marker-end="url(#a-k3prz-fas-1)"/>
        <text x="60" y="164" class="tx-s" text-anchor="middle">nasiono</text>
        <text x="200" y="164" class="tx-s" text-anchor="middle">kiełek</text>
        <text x="340" y="164" class="tx-s" text-anchor="middle">roślinka</text>
        <text x="200" y="192" class="tx" text-anchor="middle">💧 woda · ☀️ światło · powietrze · ciepło</text>
      </svg>`,
      text: `<p>Połóż fasolę na mokrej wacie i postaw w jasnym miejscu. Codziennie patrz i rysuj, co się zmienia – to jest <b>obserwacja</b>.</p>
        <p>Po kilku dniach z nasiona wyrośnie <b>kiełek</b>, a potem roślinka z liśćmi.</p>`,
      remember: 'Roślina potrzebuje wody, światła, powietrza i ciepła.',
      check: { q: 'Zapomniałeś podlewać fasolę. Co się stanie?', options: ['roślinka uschnie', 'urośnie szybciej', 'zakwitnie'], answer: 0, explain: 'Bez wody roślina więdnie i usycha.' },
    },
  ];

  // ------------------------------------------------------------------
  L['przyroda/ekosystemy'] = [
    {
      title: 'Las ma piętra',
      svg: `<svg viewBox="0 0 400 254" role="img" aria-label="Cztery warstwy lasu od góry: korony drzew, podszyt, runo, ściółka. Im niżej, tym mniej światła">
        ${marker('a-k3prz-las-1')}
        <rect x="8" y="8" width="300" height="56" rx="10" class="f3 s3 sw"/>
        <rect x="8" y="70" width="300" height="56" rx="10" class="f1 s1 sw"/>
        <rect x="8" y="132" width="300" height="56" rx="10" class="f5 s5 sw"/>
        <rect x="8" y="194" width="300" height="48" rx="10" class="f2 s2 sw"/>
        <text x="24" y="42" class="tx-b">1. korony drzew</text>
        <text x="270" y="44" class="tx" text-anchor="middle" style="font-size:24px">🐦</text>
        <text x="24" y="104" class="tx-b">2. podszyt</text>
        <text x="270" y="106" class="tx" text-anchor="middle" style="font-size:24px">🌿</text>
        <text x="24" y="166" class="tx-b">3. runo</text>
        <text x="260" y="168" class="tx" text-anchor="middle" style="font-size:24px">🍄🌱</text>
        <text x="24" y="225" class="tx-b">4. ściółka</text>
        <text x="260" y="227" class="tx" text-anchor="middle" style="font-size:24px">🍂🐜</text>
        <text x="356" y="34" class="tx" text-anchor="middle" style="font-size:28px">☀️</text>
        <path d="M356,50 L356,226" class="ln sw" marker-end="url(#a-k3prz-las-1)"/>
        <text x="356" y="246" class="tx-s" text-anchor="middle">ciemno</text>
      </svg>`,
      text: `<p>Las jest jak dom z piętrami. Na górze – <b>korony drzew</b>. Niżej <b>podszyt</b>: krzewy i młode drzewa. Potem <b>runo</b>: mchy, paprocie, jagody, grzyby. Na samym dole <b>ściółka</b>: opadłe liście i igły.</p>`,
      remember: 'Od góry: korony drzew → podszyt → runo → ściółka.',
      hook: 'Kolejność od góry: <b>K</b>ot <b>P</b>odskoczył, <b>R</b>ozsypał <b>Ś</b>mietanę – <b>K</b>orony, <b>P</b>odszyt, <b>R</b>uno, <b>Ś</b>ciółka. 🐱',
      check: { q: 'Gdzie leżą opadłe liście i igły?', options: ['w ściółce', 'w koronach drzew', 'w podszycie'], answer: 0, explain: 'Ściółka to najniższa warstwa lasu – na ziemi.' },
    },
    {
      title: 'Martwe drzewo daje życie',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Leżący pień martwego drzewa. Mieszkają w nim owady i grzyby, dzięcioł szuka w nim jedzenia">
        <rect x="40" y="90" width="320" height="50" rx="25" class="f2 s2 sw"/>
        <circle cx="340" cy="115" r="22" class="bg s2 sw"/>
        <circle cx="340" cy="115" r="10" class="f2 s2"/>
        <text x="110" y="84" class="tx" text-anchor="middle" style="font-size:28px">🍄</text>
        <text x="200" y="124" class="tx" text-anchor="middle" style="font-size:24px">🐛 🪲</text>
        <text x="270" y="60" class="tx" text-anchor="middle" style="font-size:28px">🐦</text>
        <text x="200" y="164" class="tx-b" text-anchor="middle">dom i jedzenie dla wielu stworzeń</text>
      </svg>`,
      text: `<p>Stare, przewrócone drzewo zostaje w lesie. Mieszkają w nim owady, rosną na nim grzyby, a dzięcioł szuka w nim jedzenia. Powoli drewno zamienia się w ziemię.</p>
        <p>W lesie są też <b>polany</b> – miejsca bez drzew – i mokre, grząskie <b>torfowiska</b>.</p>`,
      hook: 'Martwe drzewo to hotel dla owadów 🏨 i stołówka dla dzięcioła.',
    },
    {
      title: 'Łąka czy pole?',
      svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Łąka: dzikie kwiaty, motyle i pszczoły, rośnie sama. Pole: zboże w równych rzędach, sieje je rolnik">
        <rect x="8" y="8" width="188" height="164" rx="12" class="f3 s3 sw"/>
        <rect x="204" y="8" width="188" height="164" rx="12" class="f4 s4 sw"/>
        <text x="102" y="36" class="tx-b" text-anchor="middle">łąka</text>
        <text x="298" y="36" class="tx-b" text-anchor="middle">pole</text>
        <text x="102" y="92" class="tx" text-anchor="middle" style="font-size:30px">🌼🦋🌸</text>
        <text x="102" y="128" class="tx" text-anchor="middle" style="font-size:30px">🐝🌿</text>
        <text x="298" y="92" class="tx" text-anchor="middle" style="font-size:30px">🌾🌾🌾</text>
        <text x="298" y="128" class="tx" text-anchor="middle" style="font-size:30px">🚜</text>
        <text x="102" y="160" class="tx-s" text-anchor="middle">rośnie sama</text>
        <text x="298" y="160" class="tx-s" text-anchor="middle">sieje i zbiera rolnik</text>
      </svg>`,
      text: `<p>Na <b>łące</b> rosną trawy i dzikie kwiaty, np. mniszek i koniczyna. Latają motyle i pszczoły.</p>
        <p>Na <b>polu</b> rolnik sieje rośliny i zbiera plony: zboże (pszenicę, żyto), ziemniaki, buraki.</p>`,
      check: { q: 'Kto sieje pszenicę na polu?', options: ['rolnik', 'leśnik', 'nikt – rośnie sama'], answer: 0, explain: 'Pole uprawia rolnik. Łąka rośnie sama.' },
    },
    {
      title: 'Woda płynie i woda stoi',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Rzeka – woda płynie, strzałka pokazuje kierunek. Jezioro – woda stoi. Morze – ogromna słona woda">
        ${marker('a-k3prz-woda-1')}
        <path d="M20,40 C70,10 100,70 150,40" class="ln s1" stroke-width="14" fill="none"/>
        <path d="M40,74 L130,74" class="ln" marker-end="url(#a-k3prz-woda-1)"/>
        <text x="85" y="104" class="tx-b" text-anchor="middle">rzeka</text>
        <text x="85" y="124" class="tx-s" text-anchor="middle">woda płynie</text>
        <ellipse cx="300" cy="50" rx="80" ry="34" class="f1 s1 sw"/>
        <text x="300" y="104" class="tx-b" text-anchor="middle">jezioro</text>
        <text x="300" y="124" class="tx-s" text-anchor="middle">woda stoi</text>
        <rect x="10" y="140" width="380" height="54" rx="10" class="f1 s1 sw"/>
        <text x="200" y="165" class="tx-b" text-anchor="middle">🌊 morze – ogromne</text>
        <text x="200" y="185" class="tx-s" text-anchor="middle">woda jest słona 🧂</text>
      </svg>`,
      text: `<p>W <b>rzece</b> woda płynie. W <b>jeziorze</b> i w <b>stawie</b> woda stoi. Staw jest mały i płytki, często wykopali go ludzie.</p>
        <p><b>Morze</b> jest ogromne, a woda w nim jest słona. Polska leży nad Morzem Bałtyckim.</p>`,
      hook: 'Rzeka jak droga – coś po niej „jedzie” 🚗. Jezioro jak miska – woda stoi 🥣.',
      check: { q: 'W którym zbiorniku woda jest słona?', options: ['w morzu', 'w jeziorze', 'w rzece'], answer: 0, explain: 'Woda morska jest słona. W rzekach i jeziorach jest słodka.' },
    },
  ];

  // ------------------------------------------------------------------
  L['przyroda/ochrona'] = [
    {
      title: 'Cztery kolorowe pojemniki',
      svg: `<svg viewBox="0 0 400 176" role="img" aria-label="Pojemniki: niebieski Papier – gazety, zielony Szkło – butelki, żółty Metale i tworzywa sztuczne – puszki i plastik, brązowy Bio – obierki">
        <rect x="10" y="20" width="86" height="120" rx="8" class="f1 s1 sw"/>
        <rect x="108" y="20" width="86" height="120" rx="8" class="f3 s3 sw"/>
        <rect x="206" y="20" width="86" height="120" rx="8" class="f4 s4 sw"/>
        <rect x="304" y="20" width="86" height="120" rx="8" class="f2 s2 sw"/>
        <text x="53" y="52" class="tx-s" text-anchor="middle">Papier</text>
        <text x="151" y="52" class="tx-s" text-anchor="middle">Szkło</text>
        <text x="249" y="46" class="tx-s" text-anchor="middle">Metale</text>
        <text x="249" y="62" class="tx-s" text-anchor="middle">i tworzywa</text>
        <text x="347" y="52" class="tx-s" text-anchor="middle">Bio</text>
        <text x="53" y="104" class="tx" text-anchor="middle" style="font-size:28px">📰</text>
        <text x="151" y="104" class="tx" text-anchor="middle" style="font-size:28px">🍾</text>
        <text x="249" y="104" class="tx" text-anchor="middle" style="font-size:28px">🥫🥤</text>
        <text x="347" y="104" class="tx" text-anchor="middle" style="font-size:28px">🍌🍂</text>
        <text x="53" y="164" class="tx-s" text-anchor="middle">niebieski</text>
        <text x="151" y="164" class="tx-s" text-anchor="middle">zielony</text>
        <text x="249" y="164" class="tx-s" text-anchor="middle">żółty</text>
        <text x="347" y="164" class="tx-s" text-anchor="middle">brązowy</text>
      </svg>`,
      text: `<p>Odpady dzielimy na grupy. <b>Niebieski</b> – papier. <b>Zielony</b> – szkło. <b>Żółty</b> – metale i plastik. <b>Brązowy</b> – bio, czyli resztki roślin.</p>
        <p>Resztę wrzucamy do odpadów zmieszanych.</p>`,
      remember: 'Niebieski – papier · zielony – szkło · żółty – metale i plastik · brązowy – bio.',
      hook: 'Zielony jak butelka 🍾, brązowy jak ziemia, w którą zamienią się obierki 🍂, niebieski jak zeszyt w niebieskiej okładce 📘.',
      check: { q: 'Do którego pojemnika wrzucisz karton po butach?', options: ['niebieskiego', 'zielonego', 'brązowego'], answer: 0, explain: 'Karton to papier – do niebieskiego pojemnika.' },
    },
    {
      title: 'Po co segregujemy?',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Stara gazeta trafia do przetwórni i powstaje z niej nowy papier. Stara butelka – nowy słoik">
        ${marker('a-k3prz-seg-1')}
        <text x="50" y="62" class="tx" text-anchor="middle" style="font-size:32px">📰</text>
        <text x="200" y="62" class="tx" text-anchor="middle" style="font-size:32px">♻️</text>
        <text x="350" y="62" class="tx" text-anchor="middle" style="font-size:32px">📄</text>
        <path d="M80,50 L160,50" class="ln" marker-end="url(#a-k3prz-seg-1)"/>
        <path d="M240,50 L320,50" class="ln" marker-end="url(#a-k3prz-seg-1)"/>
        <text x="50" y="132" class="tx" text-anchor="middle" style="font-size:32px">🍾</text>
        <text x="200" y="132" class="tx" text-anchor="middle" style="font-size:32px">♻️</text>
        <text x="350" y="132" class="tx" text-anchor="middle" style="font-size:32px">🫙</text>
        <path d="M80,120 L160,120" class="ln" marker-end="url(#a-k3prz-seg-1)"/>
        <path d="M240,120 L320,120" class="ln" marker-end="url(#a-k3prz-seg-1)"/>
        <text x="350" y="86" class="tx-s" text-anchor="middle">nowy papier</text>
        <text x="350" y="160" class="tx-s" text-anchor="middle">nowe szkło</text>
      </svg>`,
      text: `<p>Z posegregowanych odpadów robi się <b>nowe rzeczy</b>: ze starych gazet – nowy papier, ze stłuczki – nowe szkło. A na wysypiska trafia mniej śmieci.</p>`,
      hook: 'Posegregowany śmieć to nie śmieć – to materiał na coś nowego. ♻️',
    },
    {
      title: 'Gatunki chronione',
      svg: cards('Zwierzęta i rośliny chronione: żubr, niedźwiedź brunatny, jeż, sasanka', [
        ['🦬', 'żubr', 'zwierzę'], ['🐻', 'niedźwiedź brunatny', 'zwierzę'], ['🦔', 'jeż', 'zwierzę'], ['🌸', 'sasanka', 'roślina'],
      ], 2),
      text: `<p>Niektórych zwierząt i roślin jest mało. Są <b>pod ochroną</b> – nie wolno ich łapać, zrywać ani niszczyć.</p>
        <p>Chronione są np. żubr, ryś, niedźwiedź brunatny, bocian biały, jeż, sasanki i rosiczka.</p>`,
      remember: 'Gatunek chroniony: oglądam i fotografuję, nie zrywam i nie łapię.',
      check: { q: 'Na łące rosną sasanki. Co możesz zrobić?', options: ['zrobić im zdjęcie', 'zerwać bukiet', 'wykopać je do ogródka'], answer: 0, explain: 'Sasanki są chronione. Można je oglądać i fotografować.' },
    },
    {
      title: 'Park narodowy i pomnik przyrody',
      svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Po lewej park narodowy – duży obszar z lasem i żubrem. Po prawej pomnik przyrody – jedno stare, okazałe drzewo z tabliczką">
        <rect x="8" y="8" width="230" height="174" rx="12" class="f3 s3 sw"/>
        <text x="123" y="36" class="tx-b" text-anchor="middle">park narodowy</text>
        <text x="123" y="96" class="tx" text-anchor="middle" style="font-size:30px">🌲🌲🌳🌲</text>
        <text x="123" y="140" class="tx" text-anchor="middle" style="font-size:30px">🌳🦬🌲</text>
        <text x="123" y="170" class="tx-s" text-anchor="middle">duży obszar</text>
        <rect x="246" y="8" width="146" height="174" rx="12" class="f4 s4 sw"/>
        <text x="319" y="36" class="tx-b" text-anchor="middle">pomnik</text>
        <text x="319" y="56" class="tx-b" text-anchor="middle">przyrody</text>
        <text x="319" y="124" class="tx" text-anchor="middle" style="font-size:52px">🌳</text>
        <text x="319" y="170" class="tx-s" text-anchor="middle">np. stare drzewo</text>
      </svg>`,
      text: `<p><b>Park narodowy</b> to duży obszar o wyjątkowej przyrodzie, chroniony prawem. W Białowieskim Parku Narodowym żyją żubry, a Tatrzański Park Narodowy leży w Tatrach.</p>
        <p><b>Pomnik przyrody</b> to jeden cenny twór przyrody, np. stare drzewo okazałych rozmiarów albo wielki głaz.</p>`,
      hook: 'Park narodowy – cały las pod ochroną 🌲🌲🌲. Pomnik przyrody – jeden „zasłużony” staruszek 🌳.',
      check: { q: 'Gdzie żyją żubry?', options: ['w Białowieskim Parku Narodowym', 'w Morzu Bałtyckim', 'na pustyni'], answer: 0, explain: 'Białowieski Park Narodowy słynie z żubrów.' },
    },
  ];

  // ------------------------------------------------------------------
  L['przyroda/zdrowie'] = [
    {
      title: 'Czyste ręce – mniej zarazków',
      svg: list('Kiedy myć ręce: przed jedzeniem, po toalecie, po powrocie do domu, po zabawie ze zwierzęciem', [
        ['🍽️', 'przed jedzeniem'],
        ['🚽', 'po wyjściu z toalety'],
        ['🏠', 'po powrocie do domu'],
        ['🐶', 'po zabawie ze zwierzęciem'],
      ]),
      text: `<p>Na rękach są <b>zarazki</b> – tak małe, że ich nie widać. Myj ręce <b>mydłem</b> i ciepłą wodą, dokładnie, także między palcami.</p>
        <p>Zęby myj rano i wieczorem.</p>`,
      hook: 'Myj ręce tak długo, jak śpiewasz w myślach „Sto lat” – dwa razy! 🎵',
      check: { q: 'Kiedy myjesz ręce?', options: ['przed jedzeniem', 'tylko raz w tygodniu', 'tylko gdy pada deszcz'], answer: 0, explain: 'Przed jedzeniem zawsze myjemy ręce.' },
    },
    {
      title: 'Zdrowy talerz',
      svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Talerz: połowa to warzywa i owoce, ćwierć to produkty zbożowe, ćwierć to produkty białkowe. Obok szklanka wody">
        <circle cx="150" cy="110" r="100" class="bg ln sw"/>
        <path d="M150,110 L150,10 A100,100 0 0 0 150,210 Z" class="f3 s3 sw"/>
        <path d="M150,110 L150,10 A100,100 0 0 1 250,110 Z" class="f4 s4 sw"/>
        <path d="M150,110 L250,110 A100,100 0 0 1 150,210 Z" class="f2 s2 sw"/>
        <text x="100" y="100" class="tx" text-anchor="middle" style="font-size:26px">🥦🥕</text>
        <text x="100" y="134" class="tx" text-anchor="middle" style="font-size:26px">🍎</text>
        <text x="104" y="160" class="tx-s" text-anchor="middle">warzywa</text>
        <text x="104" y="176" class="tx-s" text-anchor="middle">i owoce</text>
        <text x="194" y="76" class="tx" text-anchor="middle" style="font-size:24px">🍞</text>
        <text x="194" y="98" class="tx-s" text-anchor="middle">zboża</text>
        <text x="194" y="146" class="tx" text-anchor="middle" style="font-size:24px">🥚🐟</text>
        <text x="194" y="168" class="tx-s" text-anchor="middle">białko</text>
        <text x="320" y="110" class="tx" text-anchor="middle" style="font-size:40px">💧</text>
        <text x="320" y="146" class="tx-b" text-anchor="middle">woda</text>
      </svg>`,
      text: `<p><b>Połowę talerza</b> niech zajmą warzywa i owoce – mają witaminy. Ćwierć – produkty zbożowe (pieczywo, kasza). Ćwierć – produkty białkowe (jajka, ryby, ser, fasola).</p>
        <p>Do picia najlepsza jest <b>woda</b>.</p>`,
      remember: 'Pół talerza – warzywa i owoce.',
      check: { q: 'Co powinno zajmować połowę talerza?', options: ['warzywa i owoce', 'słodycze', 'chleb'], answer: 0, explain: 'Warzywa i owoce – połowa talerza, najlepiej więcej warzyw.' },
    },
    {
      title: 'Słodycze – z umiarem',
      svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Mało słodyczy i mycie zębów – zdrowy, uśmiechnięty ząb. Dużo słodyczy – chory ząb">
        <rect x="8" y="8" width="188" height="154" rx="12" class="f3 s3 sw"/>
        <rect x="204" y="8" width="188" height="154" rx="12" class="f2 s2 sw"/>
        <text x="102" y="40" class="tx-b" text-anchor="middle">rzadko i mało</text>
        <text x="298" y="40" class="tx-b" text-anchor="middle">codziennie dużo</text>
        <text x="102" y="100" class="tx" text-anchor="middle" style="font-size:40px">🦷😀</text>
        <text x="298" y="100" class="tx" text-anchor="middle" style="font-size:40px">🍬🍭😖</text>
        <text x="102" y="140" class="tx-s" text-anchor="middle">zdrowe zęby</text>
        <text x="298" y="140" class="tx-s" text-anchor="middle">psują się zęby</text>
      </svg>`,
      text: `<p>Słodycze, słodkie napoje, chipsy i fast food mają mało wartości dla ciała. Jedz je <b>rzadko i mało</b>.</p>
        <p>Za dużo cukru psuje zęby i szkodzi zdrowiu.</p>`,
      hook: 'Cukierek to gość, nie domownik – może wpaść czasem, ale nie mieszka u ciebie na co dzień. 🍬',
    },
    {
      title: 'Ubierz się do pogody',
      svg: cards('Zimno – czapka i szalik. Deszcz – parasol i kalosze. Upał – czapka z daszkiem i woda', [
        ['🥶', 'zimno', 'czapka, szalik 🧣'], ['🌧️', 'deszcz', 'kaptur, kalosze'], ['☀️', 'upał', 'czapka, woda 🧢'],
      ], 3),
      text: `<p>Rano sprawdź <b>prognozę pogody</b> – w telewizji, radiu albo internecie. Potem wybierz ubranie.</p>
        <p>Ubieraj się „<b>na cebulkę</b>”: kilka cienkich warstw. Gdy zrobi się ciepło, jedną zdejmiesz.</p>`,
      hook: 'Cebula ma wiele warstw 🧅 – ty też!',
      check: { q: 'Jest mróz. Co założysz?', options: ['czapkę, szalik i rękawiczki', 'sandały', 'czapkę z daszkiem i koszulkę'], answer: 0, explain: 'W mróz chronimy głowę, szyję i dłonie.' },
    },
  ];

  // ------------------------------------------------------------------
  L['przyroda/bezpieczenstwo'] = [
    {
      title: 'Numery alarmowe',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="112 – numer alarmowy. 997 – Policja, 998 – Straż Pożarna, 999 – Pogotowie Ratunkowe">
        <rect x="100" y="8" width="200" height="60" rx="14" class="f2 s2 sw"/>
        <text x="200" y="48" class="tx-b" text-anchor="middle" style="font-size:28px">📞 112</text>
        <rect x="8" y="84" width="122" height="108" rx="12" class="f1 s1 sw"/>
        <rect x="139" y="84" width="122" height="108" rx="12" class="f2 s2 sw"/>
        <rect x="270" y="84" width="122" height="108" rx="12" class="f3 s3 sw"/>
        <text x="69" y="124" class="tx" text-anchor="middle" style="font-size:28px">🚓</text>
        <text x="200" y="124" class="tx" text-anchor="middle" style="font-size:28px">🚒</text>
        <text x="331" y="124" class="tx" text-anchor="middle" style="font-size:28px">🚑</text>
        <text x="69" y="154" class="tx-b" text-anchor="middle">997</text>
        <text x="200" y="154" class="tx-b" text-anchor="middle">998</text>
        <text x="331" y="154" class="tx-b" text-anchor="middle">999</text>
        <text x="69" y="178" class="tx-s" text-anchor="middle">Policja</text>
        <text x="200" y="178" class="tx-s" text-anchor="middle">Straż Pożarna</text>
        <text x="331" y="178" class="tx-s" text-anchor="middle">Pogotowie</text>
      </svg>`,
      text: `<p><b>112</b> to numer alarmowy – działa w całej Unii Europejskiej. Są też numery: <b>997</b> – Policja, <b>998</b> – Straż Pożarna, <b>999</b> – Pogotowie Ratunkowe.</p>
        <p>Dzwonimy tylko wtedy, gdy ktoś naprawdę potrzebuje pomocy.</p>`,
      remember: '112 – wszystkie służby · 997 Policja · 998 Straż · 999 Pogotowie',
      hook: 'Kolejność P-S-P: 997 <b>P</b>olicja, 998 <b>S</b>traż, 999 <b>P</b>ogotowie. 🚓🚒🚑',
      check: { q: 'Pod jaki numer zadzwonisz po Policję?', options: ['997', '998', '999'], answer: 0, explain: '997 – Policja. Możesz też zadzwonić pod 112.' },
    },
    {
      title: 'Jak wezwać pomoc?',
      svg: list('Wzywam pomoc: 1. kim jestem, 2. co się stało, 3. gdzie to jest, 4. nie rozłączam się pierwszy', [
        ['👤', '1. Kim jestem? (imię i nazwisko)'],
        ['❗', '2. Co się stało?'],
        ['📍', '3. Gdzie? (adres)'],
        ['📞', '4. Nie rozłączam się pierwszy'],
      ]),
      text: `<p>Mów spokojnie i wyraźnie. Odpowiadaj na pytania dyspozytora. Rozłącz się dopiero, gdy on pozwoli.</p>
        <p>Naucz się na pamięć swojego adresu i numeru telefonu do rodzica.</p>`,
      remember: 'KTO – CO – GDZIE, i nie rozłączam się.',
      check: { q: 'Co musisz powiedzieć, gdy wzywasz pomoc?', options: ['co się stało i gdzie', 'jaki jest twój ulubiony kolor', 'nic – wystarczy zadzwonić'], answer: 0, explain: 'Ratownicy muszą wiedzieć, co się stało i dokąd jechać.' },
    },
    {
      title: 'Ludzie, którzy pomagają',
      svg: cards('Zawody: strażak, policjant, lekarz, leśnik, żołnierz, nauczyciel', [
        ['🚒', 'strażak', 'gasi pożary'], ['👮', 'policjant', 'pilnuje porządku'], ['🩺', 'lekarz', 'leczy'],
        ['🌲', 'leśnik', 'dba o las'], ['🪖', 'żołnierz', 'broni kraju'], ['🏫', 'nauczyciel', 'uczy'],
      ], 3),
      text: `<p>Strażacy, policjanci, ratownicy medyczni, lekarze i pielęgniarze pracują także w nocy i w święta – żeby pomóc, gdy jest źle.</p>`,
      hook: 'Mundur i karetka to znak: „Mogę ci pomóc”. 🚒🚓🚑',
    },
    {
      title: 'Burza, ulewa, susza',
      svg: `<svg viewBox="0 0 400 180" role="img" aria-label="W czasie burzy: dobrze – schować się w budynku. Źle – stać pod drzewem albo kąpać się w jeziorze">
        <text x="200" y="40" class="tx" text-anchor="middle" style="font-size:34px">⛈️</text>
        <rect x="8" y="60" width="120" height="112" rx="12" class="f3 s3 sw"/>
        <rect x="140" y="60" width="120" height="112" rx="12" class="f2 s2 sw"/>
        <rect x="272" y="60" width="120" height="112" rx="12" class="f2 s2 sw"/>
        <text x="68" y="112" class="tx" text-anchor="middle" style="font-size:32px">🏠</text>
        <text x="200" y="112" class="tx" text-anchor="middle" style="font-size:32px">🌳</text>
        <text x="332" y="112" class="tx" text-anchor="middle" style="font-size:32px">🏊</text>
        <text x="68" y="150" class="tx-b t3" text-anchor="middle">✔ dom</text>
        <text x="200" y="150" class="tx-b t2" text-anchor="middle">✘ drzewo</text>
        <text x="332" y="150" class="tx-b t2" text-anchor="middle">✘ kąpiel</text>
      </svg>`,
      text: `<p>W czasie <b>burzy</b> schowaj się w budynku. Piorun może uderzyć w wysokie drzewo i w wodę.</p>
        <p>W czasie <b>ulewy</b> i <b>powodzi</b> nie wchodź do płynącej wody. Podczas <b>suszy</b> łatwo o <b>pożar</b> – nie rozpalaj ognia w lesie.</p>`,
      hook: 'Grzmi? Do domu! ⚡🏠',
      check: { q: 'Burza zastała cię na plaży nad jeziorem. Co robisz?', options: ['wychodzę z wody i idę do budynku', 'pływam dalej', 'chowam się pod samotnym drzewem'], answer: 0, explain: 'Woda i wysokie drzewa przyciągają pioruny. Szukaj schronienia w budynku.' },
    },
    {
      title: 'Alarm w szkole',
      svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Zielony znak z białym biegnącym ludzikiem i strzałką – droga ewakuacyjna">
        ${marker('a-k3prz-ewak-1')}
        <rect x="70" y="20" width="260" height="90" rx="8" class="f3 s3 sw"/>
        <text x="150" y="80" class="tx" text-anchor="middle" style="font-size:44px">🏃</text>
        <path d="M210,65 L290,65" class="ln sw" marker-end="url(#a-k3prz-ewak-1)"/>
        <text x="200" y="146" class="tx-b" text-anchor="middle">zielony znak – droga wyjścia</text>
      </svg>`,
      text: `<p><b>Zielony znak z biegnącym ludzikiem</b> pokazuje drogę ewakuacyjną – którędy wyjść z budynku, gdy jest pożar albo inne zagrożenie.</p>
        <p>Podczas alarmu słuchaj nauczyciela, nie zabieraj rzeczy, wychodź spokojnie – nie biegnij i nie popychaj.</p>`,
      remember: 'Alarm: słucham nauczyciela, idę za zielonymi znakami.',
    },
  ];

  // ------------------------------------------------------------------
  const ZNAKI = `<svg viewBox="0 0 400 172" role="img" aria-label="Cztery grupy znaków: ostrzegawczy – żółty trójkąt z czerwoną obwódką; zakazu – koło z czerwoną obwódką; nakazu – niebieskie koło; informacyjny – niebieski kwadrat">
      <polygon points="52,22 92,92 12,92" class="f4 s2" stroke-width="7" stroke-linejoin="round"/>
      <circle cx="150" cy="60" r="36" class="bg s2" stroke-width="9"/>
      <circle cx="250" cy="60" r="38" class="f1 s1 sw"/>
      <rect x="312" y="22" width="76" height="76" rx="6" class="f1 s1 sw"/>
      <text x="52" y="132" class="tx-b" text-anchor="middle" style="font-size:14px">ostrzegawczy</text>
      <text x="150" y="132" class="tx-b" text-anchor="middle" style="font-size:14px">zakazu</text>
      <text x="250" y="132" class="tx-b" text-anchor="middle" style="font-size:14px">nakazu</text>
      <text x="350" y="132" class="tx-b" text-anchor="middle" style="font-size:14px">informacyjny</text>
      <text x="52" y="160" class="tx-s" text-anchor="middle">uwaga!</text>
      <text x="150" y="160" class="tx-s" text-anchor="middle">nie wolno</text>
      <text x="250" y="160" class="tx-s" text-anchor="middle">trzeba</text>
      <text x="350" y="160" class="tx-s" text-anchor="middle">informuje</text>
    </svg>`;

  L['przyroda/droga-internet'] = [
    {
      title: 'Po kształcie poznasz znak',
      svg: ZNAKI,
      text: `<p><b>Trójkąt</b> z czerwoną obwódką ostrzega: „Uwaga!”. <b>Koło z czerwoną obwódką</b> zakazuje: „Nie wolno!”. <b>Niebieskie koło</b> nakazuje: „Trzeba!”. <b>Niebieski prostokąt lub kwadrat</b> informuje, np. o przejściu dla pieszych.</p>`,
      remember: 'Trójkąt – uwaga · czerwone koło – nie wolno · niebieskie koło – trzeba · niebieski kwadrat – informacja',
      hook: 'Czerwony jak „STOP” – zakaz 🛑. Niebieski jak spokojne niebo – nakaz albo informacja 💙.',
      check: { q: 'Znak w kształcie koła z czerwoną obwódką to znak…', options: ['zakazu', 'nakazu', 'informacyjny'], answer: 0, explain: 'Czerwona obwódka na kole mówi: tego nie wolno.' },
    },
    {
      title: 'Lewo, prawo i jeszcze raz lewo',
      svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dziecko stoi przed przejściem dla pieszych. Patrzy najpierw w lewo, potem w prawo i jeszcze raz w lewo">
        ${marker('a-k3prz-prz-1')}
        <rect x="0" y="20" width="400" height="120" class="f5"/>
        ${[0, 1, 2, 3, 4, 5].map((k) => `<rect x="${130 + k * 24}" y="28" width="14" height="104" class="bg"/>`).join('')}
        <text x="200" y="186" class="tx" text-anchor="middle" style="font-size:32px">🧒</text>
        <path d="M168,176 L60,176" class="ln sw" marker-end="url(#a-k3prz-prz-1)"/>
        <path d="M232,176 L340,176" class="ln sw" marker-end="url(#a-k3prz-prz-1)"/>
        <text x="10" y="204" class="tx-b t2">1. lewo, 3. lewo</text>
        <text x="330" y="204" class="tx-b t2" text-anchor="end">2. prawo</text>
        <text x="40" y="90" class="tx" text-anchor="middle" style="font-size:28px">🚗</text>
      </svg>`,
      text: `<p>Przez jezdnię przechodzisz <b>po przejściu dla pieszych</b>. Zatrzymaj się przed krawężnikiem. Popatrz <b>w lewo, w prawo i jeszcze raz w lewo</b>. Gdy nic nie jedzie – przejdź spokojnie, nie biegnij.</p>
        <p>Przy sygnalizatorze idź tylko na <b>zielonym</b> świetle. Po zmroku noś <b>odblaski</b>.</p>`,
      remember: 'Stop – lewo – prawo – lewo – idę.',
      check: { q: 'Gdzie najpierw patrzysz przed przejściem?', options: ['w lewo', 'w prawo', 'w górę'], answer: 0, explain: 'Najpierw w lewo, potem w prawo i jeszcze raz w lewo.' },
    },
    {
      title: 'W autobusie i tramwaju',
      svg: list('W autobusie: trzymaj się poręczy, ustąp miejsca, nie hałasuj, wsiadaj, gdy pojazd stoi', [
        ['✋', 'Trzymam się poręczy.'],
        ['🧓', 'Ustępuję miejsca starszym.'],
        ['🤫', 'Nie hałasuję.'],
        ['🛑', 'Wsiadam, gdy autobus stoi.'],
      ]),
      text: `<p>W autobusie i tramwaju jedzie wiele osób. Bądź uprzejmy: ustąp miejsca osobie starszej, osobie z małym dzieckiem i osobie z niepełnosprawnością.</p>`,
      hook: 'Autobus hamuje nagle – poręcz to twój pas bezpieczeństwa ✋.',
    },
    {
      title: 'Bezpiecznie w internecie',
      svg: list('W internecie: nie podawaj adresu i hasła, powiedz rodzicowi, pisz miło, sprawdzaj informacje, pilnuj czasu', [
        ['🔒', 'Nie podaję adresu ani hasła.'],
        ['🗣️', 'Coś mnie martwi – mówię rodzicowi.'],
        ['😊', 'Piszę miło – to netykieta.'],
        ['❓', 'Sprawdzam, czy to prawda.'],
        ['⏰', 'Pilnuję czasu przed ekranem.'],
      ]),
      text: `<p>Internet pomaga: rozmawiasz z babcią na wideo, sprawdzasz pogodę i mapę. Ale nie wszystko w sieci jest prawdą, a nie każdy jest tym, za kogo się podaje.</p>
        <p>Gdy masz wątpliwości – zapytaj rodzica, nauczyciela albo policjanta. Za długo przy ekranie – bolą oczy i plecy.</p>`,
      remember: 'Nie podaję danych obcym. Pytam dorosłego.',
      check: { q: 'Ktoś w grze prosi o twoje hasło. Co robisz?', options: ['nie podaję i mówię rodzicowi', 'podaję, bo jest miły', 'podaję tylko połowę'], answer: 0, explain: 'Hasła nie podajemy nikomu obcemu. Powiedz o tym dorosłemu.' },
    },
  ];

  // ------------------------------------------------------------------
  L['przyroda/polska'] = [
    {
      title: 'Mapa i jej kolory',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Legenda mapy: zielony – niziny, żółty – wyżyny, brązowy – góry, niebieski – woda. Północ jest u góry">
        ${marker('a-k3prz-mapa-1')}
        <rect x="10" y="14" width="44" height="34" rx="4" class="f3 s3 sw"/>
        <rect x="10" y="58" width="44" height="34" rx="4" class="f4 s4 sw"/>
        <rect x="10" y="102" width="44" height="34" rx="4" class="f2 s2 sw"/>
        <rect x="10" y="146" width="44" height="34" rx="4" class="f1 s1 sw"/>
        <text x="66" y="37" class="tx">zielony – niziny</text>
        <text x="66" y="81" class="tx">żółty – wyżyny</text>
        <text x="66" y="125" class="tx">brązowy – góry</text>
        <text x="66" y="169" class="tx">niebieski – woda</text>
        <path d="M340,170 L340,40" class="ln sw" marker-end="url(#a-k3prz-mapa-1)"/>
        <text x="340" y="28" class="tx-b" text-anchor="middle">N</text>
        <text x="340" y="194" class="tx-s" text-anchor="middle">północ u góry</text>
      </svg>`,
      text: `<p>Mapa to rysunek terenu z góry, bardzo pomniejszony. Na mapie <b>północ jest u góry</b>. Co znaczą kolory i znaki, mówi <b>legenda</b>.</p>
        <p><b>Plan</b> pokazuje mały teren – np. osiedle albo szkołę – dokładniej niż mapa.</p>`,
      remember: 'Na mapie: u góry północ. Kolory objaśnia legenda.',
      hook: 'Kolory mapy jak w przyrodzie: zielona łąka na nizinie, brązowe skały w górach, niebieska woda. 🏞️',
      check: { q: 'Co na mapie oznacza kolor niebieski?', options: ['wodę', 'góry', 'lasy'], answer: 0, explain: 'Niebieski – morza, jeziora i rzeki.' },
    },
    {
      title: 'Polska i jej sąsiedzi',
      svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Schemat: na środku Polska. Na północy Morze Bałtyckie, Rosja i Litwa. Na wschodzie Białoruś i Ukraina. Na południu Słowacja i Czechy. Na zachodzie Niemcy">
        <rect x="10" y="8" width="230" height="40" rx="8" class="f1 s1 sw"/>
        <text x="125" y="34" class="tx" text-anchor="middle">Morze Bałtyckie</text>
        <rect x="248" y="8" width="70" height="40" rx="8" class="f5 s5 sw"/>
        <text x="283" y="34" class="tx-s" text-anchor="middle">Rosja</text>
        <rect x="324" y="8" width="70" height="40" rx="8" class="f5 s5 sw"/>
        <text x="359" y="34" class="tx-s" text-anchor="middle">Litwa</text>
        <rect x="100" y="60" width="200" height="140" rx="16" class="f2 s2 sw"/>
        <text x="200" y="128" class="tx-b" text-anchor="middle">POLSKA</text>
        <text x="200" y="152" class="tx" text-anchor="middle" style="font-size:22px">🇵🇱</text>
        <rect x="8" y="90" width="84" height="80" rx="8" class="f5 s5 sw"/>
        <text x="50" y="135" class="tx-s" text-anchor="middle">Niemcy</text>
        <rect x="308" y="60" width="86" height="64" rx="8" class="f5 s5 sw"/>
        <text x="351" y="97" class="tx-s" text-anchor="middle">Białoruś</text>
        <rect x="308" y="132" width="86" height="68" rx="8" class="f5 s5 sw"/>
        <text x="351" y="171" class="tx-s" text-anchor="middle">Ukraina</text>
        <rect x="70" y="210" width="130" height="42" rx="8" class="f5 s5 sw"/>
        <text x="135" y="236" class="tx-s" text-anchor="middle">Czechy</text>
        <rect x="208" y="210" width="130" height="42" rx="8" class="f5 s5 sw"/>
        <text x="273" y="236" class="tx-s" text-anchor="middle">Słowacja</text>
      </svg>`,
      text: `<p>Polska ma <b>7 sąsiadów</b>. Na zachodzie – Niemcy. Na południu – Czechy i Słowacja. Na wschodzie – Ukraina i Białoruś. Na północy i północnym wschodzie – Rosja i Litwa.</p>
        <p>Na północy jest <b>Morze Bałtyckie</b>, a na południu – <b>góry</b>, np. Tatry.</p>`,
      remember: 'Na północy morze, na południu góry, wokół 7 sąsiadów.',
      check: { q: 'Z którym państwem Polska graniczy na zachodzie?', options: ['z Niemcami', 'z Ukrainą', 'z Litwą'], answer: 0, explain: 'Na zachodzie leżą Niemcy.' },
    },
    {
      title: 'Wisła – z gór do morza',
      svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Schemat biegu Wisły: z gór na południu przez Kraków, Warszawę i Toruń do Morza Bałtyckiego koło Gdańska. Na zachodzie Odra przez Wrocław">
        <rect x="10" y="8" width="380" height="34" rx="8" class="f1 s1 sw"/>
        <text x="200" y="31" class="tx" text-anchor="middle">🌊 Morze Bałtyckie</text>
        <path d="M230,240 C200,210 250,190 280,160 C310,130 250,110 220,90 C200,75 215,55 210,42" class="ln s1" stroke-width="6" fill="none"/>
        <path d="M70,220 C60,180 90,140 80,100 C75,80 95,60 100,42" class="ln s1" stroke-width="4" fill="none"/>
        <circle cx="210" cy="50" r="7" class="f2 s2 sw"/>
        <text x="226" y="62" class="tx-s">Gdańsk</text>
        <circle cx="222" cy="92" r="7" class="f2 s2 sw"/>
        <text x="236" y="98" class="tx-s">Toruń</text>
        <circle cx="290" cy="148" r="8" class="f2 s2 sw"/>
        <text x="304" y="154" class="tx-b">Warszawa</text>
        <circle cx="246" cy="200" r="7" class="f2 s2 sw"/>
        <text x="262" y="206" class="tx-s">Kraków</text>
        <text x="230" y="256" class="tx" text-anchor="middle">⛰️ góry</text>
        <circle cx="80" cy="150" r="7" class="f2 s2 sw"/>
        <text x="94" y="156" class="tx-s">Wrocław</text>
        <text x="40" y="96" class="tx-b t1">Odra</text>
        <text x="170" y="180" class="tx-b t1">Wisła</text>
      </svg>`,
      text: `<p><b>Wisła</b> to najdłuższa rzeka Polski. Zaczyna się w górach na południu, płynie przez Kraków, Warszawę i Toruń, a koło Gdańska wpada do Morza Bałtyckiego.</p>
        <p>Na zachodzie płynie <b>Odra</b> – przez Wrocław.</p>`,
      hook: 'Wisła płynie z dołu mapy do góry: z gór ⛰️ do morza 🌊.',
      check: { q: 'Do jakiego morza wpływa Wisła?', options: ['do Morza Bałtyckiego', 'do Morza Czarnego', 'do żadnego'], answer: 0, explain: 'Wisła wpada do Morza Bałtyckiego koło Gdańska.' },
    },
    {
      title: 'Warszawa – stolica Polski',
      svg: list('Warszawa: Zamek Królewski i Stare Miasto, Pałac Kultury i Nauki, Łazienki Królewskie, Syrenka – symbol Warszawy, Sejm', [
        ['🏰', 'Zamek Królewski i Stare Miasto'],
        ['🏙️', 'Pałac Kultury i Nauki'],
        ['🌳', 'Łazienki Królewskie'],
        ['🧜‍♀️', 'Syrenka – symbol Warszawy'],
        ['🏛️', 'Sejm, prezydent, rząd'],
      ]),
      text: `<p><b>Warszawa</b> to stolica Polski. Leży nad Wisłą. Pracują tu prezydent, rząd i Sejm – stąd kieruje się całym krajem.</p>
        <p>Polska słynie m.in. z muzyki <b>Fryderyka Chopina</b> i z odkryć <b>Marii Skłodowskiej-Curie</b>. A z czego słynie twoja okolica?</p>`,
      remember: 'Stolica Polski: Warszawa nad Wisłą. Symbol: Syrenka.',
      hook: 'Syrenka 🧜‍♀️ ma miecz i tarczę – broni swojego miasta.',
    },
  ];

  // ------------------------------------------------------------------
  L['przyroda/kierunki'] = [
    {
      title: 'Cztery kierunki',
      svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Róża wiatrów: N – północ u góry, S – południe na dole, E – wschód po prawej, W – zachód po lewej">
        <polygon points="200,30 215,105 200,120 185,105" class="f1 s1 sw"/>
        <polygon points="200,210 185,135 200,120 215,135" class="f4 s4 sw"/>
        <polygon points="290,120 215,135 200,120 215,105" class="f3 s3 sw"/>
        <polygon points="110,120 185,105 200,120 185,135" class="f2 s2 sw"/>
        <text x="200" y="24" class="tx-b" text-anchor="middle">N – północ</text>
        <text x="200" y="228" class="tx-b" text-anchor="middle">S – południe</text>
        <text x="300" y="126" class="tx-b">E – wschód</text>
        <text x="100" y="126" class="tx-b" text-anchor="end">W – zachód</text>
      </svg>`,
      text: `<p>Są cztery <b>kierunki główne</b>: północ, południe, wschód i zachód. Pokazuje je <b>róża wiatrów</b>. Igła <b>kompasu</b> wskazuje północ.</p>`,
      remember: 'N – północ, S – południe, E – wschód, W – zachód.',
      hook: '<b>Wschód</b> – tam, gdzie Słońce <b>wschodzi</b>. <b>Zachód</b> – tam, gdzie Słońce <b>zachodzi</b>. 🌅',
      check: { q: 'Który kierunek jest naprzeciwko północy?', options: ['południe', 'wschód', 'zachód'], answer: 0, explain: 'Północ i południe są naprzeciwko siebie, tak samo wschód i zachód.' },
    },
    {
      title: 'Słońce i cień pokazują drogę',
      svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Południe dnia w Polsce: Słońce jest po stronie południowej, cień drzewa pada na północ i jest najkrótszy">
        <line x1="10" y1="160" x2="390" y2="160" class="ln sw"/>
        <text x="330" y="50" class="tx" text-anchor="middle" style="font-size:40px">☀️</text>
        <rect x="194" y="110" width="12" height="50" class="f2 s2 sw"/>
        <circle cx="200" cy="96" r="30" class="f3 s3 sw"/>
        <ellipse cx="150" cy="160" rx="46" ry="7" class="f5 s5 sw"/>
        <text x="40" y="192" class="tx-b">północ</text>
        <text x="360" y="192" class="tx-b" text-anchor="end">południe</text>
        <text x="140" y="146" class="tx-s" text-anchor="middle">cień</text>
      </svg>`,
      text: `<p>Rano Słońce jest na <b>wschodzie</b>, wieczorem – na <b>zachodzie</b>.</p>
        <p>W Polsce w południe Słońce jest po stronie <b>południowej</b>. Cień jest wtedy najkrótszy i wskazuje <b>północ</b>.</p>`,
      remember: 'W południe cień wskazuje północ.',
      hook: 'Cień zawsze ucieka od Słońca 🏃 – Słońce na południu, cień na północy.',
      check: { q: 'Gdzie jest Słońce rano?', options: ['na wschodzie', 'na zachodzie', 'na północy'], answer: 0, explain: 'Słońce wschodzi na wschodzie.' },
    },
    {
      title: 'Wiatr i opady',
      svg: cards('Opady: deszcz – krople wody, mżawka – drobny deszcz, śnieg – płatki lodu, grad – kulki lodu', [
        ['🌧️', 'deszcz', 'krople wody'], ['💧', 'mżawka', 'drobny deszcz'], ['❄️', 'śnieg', 'płatki lodu'], ['🧊', 'grad', 'kulki lodu'],
      ], 4),
      text: `<p>To, co spada z chmur, to <b>opady</b>: deszcz, mżawka, śnieg, grad.</p>
        <p>Nazwa wiatru mówi, <b>skąd</b> wieje: wiatr północny wieje z północy. Sprawdzisz to chorągiewką albo wiatrowskazem.</p>`,
      hook: 'Wiatr przedstawia się, skąd przyszedł: „Jestem zachodni – przyleciałem z zachodu!” 🌬️',
      check: { q: 'Wiatr południowy wieje…', options: ['z południa', 'na południe', 'z północy'], answer: 0, explain: 'Nazwa wiatru mówi, skąd wieje.' },
    },
    {
      title: 'Ziemia w Układzie Słonecznym',
      svg: `<svg viewBox="0 0 420 170" role="img" aria-label="Słońce i osiem planet w rzędzie. Trzecia od Słońca to Ziemia, obok niej Księżyc">
        <circle cx="46" cy="80" r="40" class="f4 s4 sw"/>
        <text x="46" y="146" class="tx-b" text-anchor="middle">Słońce</text>
        <circle cx="100" cy="80" r="5" class="f5 s5"/>
        <circle cx="122" cy="80" r="8" class="f2 s2"/>
        <circle cx="156" cy="80" r="9" class="f1 s1 sw"/>
        <circle cx="168" cy="62" r="3" class="ln"/>
        <circle cx="188" cy="80" r="6" class="f2 s2"/>
        <circle cx="240" cy="80" r="24" class="f4 s4"/>
        <circle cx="308" cy="80" r="20" class="f4 s4"/>
        <circle cx="360" cy="80" r="13" class="f1 s1"/>
        <circle cx="400" cy="80" r="13" class="f1 s1"/>
        <text x="156" y="126" class="tx-b t1" text-anchor="middle">Ziemia</text>
        <text x="156" y="146" class="tx-s" text-anchor="middle">3. planeta</text>
        <text x="182" y="52" class="tx-s">Księżyc</text>
      </svg>`,
      text: `<p><b>Słońce</b> to gwiazda. Krąży wokół niego <b>8 planet</b> – razem to <b>Układ Słoneczny</b>.</p>
        <p><b>Ziemia</b> jest <b>trzecią</b> planetą od Słońca, po Merkurym i Wenus. Wokół Ziemi krąży <b>Księżyc</b>.</p>`,
      remember: 'Ziemia – trzecia planeta od Słońca.',
      check: { q: 'Którą planetą od Słońca jest Ziemia?', options: ['trzecią', 'pierwszą', 'ósmą'], answer: 0, explain: 'Merkury, Wenus, Ziemia – Ziemia jest trzecia.' },
    },
    {
      title: 'Dzień, noc i rok',
      svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Słońce oświetla połowę Ziemi – tam jest dzień. Druga połowa jest w cieniu – tam jest noc. Ziemia się obraca">
        ${marker('a-k3prz-doba-1')}
        <circle cx="40" cy="90" r="34" class="f4 s4 sw"/>
        <text x="40" y="150" class="tx-b" text-anchor="middle">Słońce</text>
        <circle cx="260" cy="90" r="70" class="f5 s5 sw"/>
        <path d="M260,20 A70,70 0 0 0 260,160 Z" class="f4 s4 sw"/>
        <text x="225" y="96" class="tx-b" text-anchor="middle">dzień</text>
        <text x="300" y="96" class="tx-b" text-anchor="middle">noc</text>
        <path d="M200,176 Q260,196 320,176" class="ln sw" fill="none" marker-end="url(#a-k3prz-doba-1)"/>
        <text x="370" y="30" class="tx-s" text-anchor="middle">obrót</text>
        <text x="370" y="48" class="tx-s" text-anchor="middle">= doba</text>
      </svg>`,
      text: `<p>Ziemia ciągle się <b>obraca</b>. Strona zwrócona do Słońca ma <b>dzień</b>, a druga strona – <b>noc</b>. Jeden obrót to <b>doba</b>.</p>
        <p>Ziemia okrąża też Słońce. Jedno okrążenie trwa <b>rok</b>.</p>`,
      remember: 'Obrót Ziemi – doba (dzień i noc). Okrążenie Słońca – rok.',
      hook: 'Ziemia jest jak karuzela 🎠: kręci się wokół siebie (doba) i jedzie dookoła Słońca (rok).',
    },
  ];
})();
