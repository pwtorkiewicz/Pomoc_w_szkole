/* Lekcje – przyroda, klasa 4. Klucz: 'przyroda/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['przyroda/poznajemy'] = [
  {
    title: 'Zmysły i mózg – tak poznajesz świat',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Pięć zmysłów: wzrok, słuch, węch, smak i dotyk. Strzałki prowadzą od każdego zmysłu do mózgu, który rozpoznaje sygnały i decyduje">
      <defs><marker id="a-k4p-pozn-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="70" height="76" rx="10" class="f1 s1"/>
      <rect x="88" y="10" width="70" height="76" rx="10" class="f1 s1"/>
      <rect x="166" y="10" width="70" height="76" rx="10" class="f1 s1"/>
      <rect x="244" y="10" width="70" height="76" rx="10" class="f1 s1"/>
      <rect x="322" y="10" width="70" height="76" rx="10" class="f1 s1"/>
      <text x="45" y="46" class="tx-b" text-anchor="middle">👁️</text>
      <text x="123" y="46" class="tx-b" text-anchor="middle">👂</text>
      <text x="201" y="46" class="tx-b" text-anchor="middle">👃</text>
      <text x="279" y="46" class="tx-b" text-anchor="middle">👅</text>
      <text x="357" y="46" class="tx-b" text-anchor="middle">✋</text>
      <text x="45" y="74" class="tx" text-anchor="middle">wzrok</text>
      <text x="123" y="74" class="tx" text-anchor="middle">słuch</text>
      <text x="201" y="74" class="tx" text-anchor="middle">węch</text>
      <text x="279" y="74" class="tx" text-anchor="middle">smak</text>
      <text x="357" y="74" class="tx" text-anchor="middle">dotyk</text>
      <g class="ln s2">
        <line x1="45" y1="90" x2="150" y2="136" marker-end="url(#a-k4p-pozn-1)"/>
        <line x1="123" y1="90" x2="175" y2="134" marker-end="url(#a-k4p-pozn-1)"/>
        <line x1="201" y1="90" x2="200" y2="133" marker-end="url(#a-k4p-pozn-1)"/>
        <line x1="279" y1="90" x2="225" y2="134" marker-end="url(#a-k4p-pozn-1)"/>
        <line x1="357" y1="90" x2="250" y2="136" marker-end="url(#a-k4p-pozn-1)"/>
      </g>
      <rect x="100" y="140" width="200" height="62" rx="14" class="f5 s5 sw"/>
      <text x="200" y="168" class="tx-b" text-anchor="middle">🧠 mózg</text>
      <text x="200" y="190" class="tx-s" text-anchor="middle">rozpoznaje i decyduje</text>
    </svg>`,
    text: `<p>Masz pięć zmysłów: <b>wzrok, słuch, węch, smak i dotyk</b>. Zbierają one sygnały ze świata i wysyłają je do <b>mózgu</b>. Mózg rozpoznaje, co to jest, zapamiętuje to i decyduje, co zrobić.</p>
      <p>Zmysły mają jednak <b>granice</b>. Nie zobaczysz gołym okiem bardzo małych rzeczy. Zmysły można też oszukać. Włóż jedną rękę do zimnej wody, a drugą do ciepłej. Potem włóż obie do letniej. Jednej ręce wyda się ciepła, a drugiej – chłodna!</p>`,
    remember: 'Zmysły zbierają sygnały, a <b>mózg</b> je rozpoznaje. Zmysły bywają niedokładne – dlatego badacze używają przyrządów.',
    hook: 'Zmysły mówią „mniej więcej”, przyrządy mówią „dokładnie”.',
    check: { q: 'Którym zmysłem poznasz, że kora drzewa jest szorstka?', options: ['dotykiem', 'słuchem', 'węchem'], answer: 0, explain: 'Szorstkość czujesz skórą – to zmysł dotyku.' },
  },
  {
    title: 'Przyrządy badacza przyrody',
    svg: `<svg viewBox="0 0 400 228" role="img" aria-label="Osiem kafelków z przyrządami: lupa, mikroskop, lornetka, kompas, termometr, waga, taśma miernicza i menzurka – z tym, co mierzą lub pokazują">
      <g class="f4 s4">
        <rect x="10" y="10" width="90" height="100" rx="10"/><rect x="108" y="10" width="90" height="100" rx="10"/>
        <rect x="206" y="10" width="90" height="100" rx="10"/><rect x="304" y="10" width="90" height="100" rx="10"/>
        <rect x="10" y="118" width="90" height="100" rx="10"/><rect x="108" y="118" width="90" height="100" rx="10"/>
        <rect x="206" y="118" width="90" height="100" rx="10"/><rect x="304" y="118" width="90" height="100" rx="10"/>
      </g>
      <text x="55" y="48" class="tx-b" text-anchor="middle">🔍</text>
      <text x="153" y="48" class="tx-b" text-anchor="middle">🔬</text>
      <circle cx="241" cy="40" r="9" class="bg ln"/><circle cx="261" cy="40" r="9" class="bg ln"/>
      <text x="349" y="48" class="tx-b" text-anchor="middle">🧭</text>
      <text x="55" y="156" class="tx-b" text-anchor="middle">🌡️</text>
      <text x="153" y="156" class="tx-b" text-anchor="middle">⚖️</text>
      <text x="251" y="156" class="tx-b" text-anchor="middle">📏</text>
      <rect x="339" y="134" width="20" height="28" class="bg ln"/>
      <rect x="340" y="148" width="18" height="13" class="f1"/>
      <g class="ln-thin"><line x1="339" y1="141" x2="346" y2="141"/><line x1="339" y1="148" x2="346" y2="148"/><line x1="339" y1="155" x2="346" y2="155"/></g>
      <text x="55" y="78" class="tx" text-anchor="middle">lupa</text>
      <text x="153" y="78" class="tx" text-anchor="middle">mikroskop</text>
      <text x="251" y="78" class="tx" text-anchor="middle">lornetka</text>
      <text x="349" y="78" class="tx" text-anchor="middle">kompas</text>
      <text x="55" y="186" class="tx" text-anchor="middle">termometr</text>
      <text x="153" y="186" class="tx" text-anchor="middle">waga</text>
      <text x="251" y="186" class="tx" text-anchor="middle">taśma</text>
      <text x="349" y="186" class="tx" text-anchor="middle">menzurka</text>
      <text x="55" y="99" class="tx-s" text-anchor="middle">powiększa</text>
      <text x="153" y="99" class="tx-s" text-anchor="middle">bardzo małe</text>
      <text x="251" y="99" class="tx-s" text-anchor="middle">przybliża</text>
      <text x="349" y="99" class="tx-s" text-anchor="middle">kierunki</text>
      <text x="55" y="207" class="tx-s" text-anchor="middle">temperatura</text>
      <text x="153" y="207" class="tx-s" text-anchor="middle">masa</text>
      <text x="251" y="207" class="tx-s" text-anchor="middle">długość</text>
      <text x="349" y="207" class="tx-s" text-anchor="middle">objętość</text>
    </svg>`,
    text: `<p><b>Lupa</b> powiększa małe rzeczy, np. mrówkę. <b>Mikroskop</b> pokazuje to, czego gołym okiem w ogóle nie widać. <b>Lornetka</b> przybliża to, co daleko – np. ptaka na drzewie.</p>
      <p><b>Kompas</b> wskazuje kierunki. <b>Termometr</b> mierzy temperaturę, <b>waga</b> – masę, <b>taśma miernicza</b> – długość. <b>Menzurka</b> to naczynie z podziałką do odmierzania cieczy.</p>`,
    remember: 'Każdy przyrząd ma swoje zadanie. Wybierz ten, który pasuje do tego, co chcesz zbadać.',
    hook: 'Lupa – do <b>małego</b>, lornetka – do <b>dalekiego</b>.',
    check: { q: 'Czym zmierzysz, ile wody jest w kubku?', options: ['wagą', 'menzurką', 'termometrem', 'lornetką'], answer: 1, explain: 'Menzurka ma podziałkę – odczytasz na niej objętość wody.' },
  },
  {
    title: 'Doświadczenie krok po kroku',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Sześć etapów doświadczenia połączonych strzałkami: pytanie badawcze, hipoteza, plan, doświadczenie, wynik, wniosek – na przykładzie fasoli i wody">
      <defs><marker id="a-k4p-pozn-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f1 s1">
        <rect x="10" y="8" width="180" height="26" rx="8"/><rect x="10" y="48" width="180" height="26" rx="8"/>
        <rect x="10" y="88" width="180" height="26" rx="8"/><rect x="10" y="128" width="180" height="26" rx="8"/>
        <rect x="10" y="168" width="180" height="26" rx="8"/>
      </g>
      <rect x="10" y="208" width="180" height="26" rx="8" class="f3 s3 sw"/>
      <g class="ln s2">
        <line x1="100" y1="35" x2="100" y2="46" marker-end="url(#a-k4p-pozn-3)"/><line x1="100" y1="75" x2="100" y2="86" marker-end="url(#a-k4p-pozn-3)"/>
        <line x1="100" y1="115" x2="100" y2="126" marker-end="url(#a-k4p-pozn-3)"/><line x1="100" y1="155" x2="100" y2="166" marker-end="url(#a-k4p-pozn-3)"/>
        <line x1="100" y1="195" x2="100" y2="206" marker-end="url(#a-k4p-pozn-3)"/>
      </g>
      <text x="20" y="27" class="tx">❓ pytanie badawcze</text>
      <text x="20" y="67" class="tx">💭 hipoteza</text>
      <text x="20" y="107" class="tx">📋 plan</text>
      <text x="20" y="147" class="tx">🧪 doświadczenie</text>
      <text x="20" y="187" class="tx">📊 wynik</text>
      <text x="20" y="227" class="tx-b">✅ wniosek</text>
      <text x="200" y="26" class="tx-s">Czy fasola potrzebuje wody?</text>
      <text x="200" y="66" class="tx-s">Bez wody nie wykiełkuje.</text>
      <text x="200" y="106" class="tx-s">słoiki, wata, nasiona</text>
      <text x="200" y="146" class="tx-s">sucha wata i wilgotna wata</text>
      <text x="200" y="186" class="tx-s">kiełkuje tylko na wilgotnej</text>
      <text x="200" y="226" class="tx-s">Fasola potrzebuje wody.</text>
    </svg>`,
    text: `<p>Doświadczenie to zaplanowane sprawdzanie. Zaczynasz od <b>pytania badawczego</b>. Potem stawiasz <b>hipotezę</b> – to przypuszczenie, co się stanie. Planujesz, wykonujesz doświadczenie i zapisujesz <b>wynik</b>.</p>
      <p>Na końcu wyciągasz <b>wniosek</b> – odpowiedź na pytanie. Sprawdzasz też, czy hipoteza była trafna. Pamiętaj: w <b>obserwacji</b> niczego nie zmieniasz, a w <b>doświadczeniu</b> celowo zmieniasz jeden warunek.</p>`,
    remember: 'Pytanie → hipoteza → plan → doświadczenie → wynik → wniosek.',
    hook: 'Najpierw <b>pytam</b>, potem <b>zgaduję</b>, potem <b>sprawdzam</b>, na końcu <b>wiem</b>.',
  },
  {
    title: 'Próba badawcza i próba kontrolna',
    svg: `<svg viewBox="0 0 400 212" role="img" aria-label="Dwa słoiki z nasionami fasoli. Próba badawcza: sucha wata, nasiona nie kiełkują. Próba kontrolna: wilgotna wata, nasiona kiełkują">
      <rect x="50" y="30" width="100" height="110" rx="12" class="bg ln"/>
      <rect x="250" y="30" width="100" height="110" rx="12" class="bg ln"/>
      <rect x="56" y="108" width="88" height="26" rx="6" class="f4"/>
      <rect x="256" y="108" width="88" height="26" rx="6" class="f1"/>
      <g class="f2 s2">
        <ellipse cx="78" cy="103" rx="8" ry="5"/><ellipse cx="100" cy="103" rx="8" ry="5"/><ellipse cx="122" cy="103" rx="8" ry="5"/>
        <ellipse cx="278" cy="103" rx="8" ry="5"/><ellipse cx="300" cy="103" rx="8" ry="5"/><ellipse cx="322" cy="103" rx="8" ry="5"/>
      </g>
      <g class="ln s3" stroke-width="3">
        <path d="M278,99 Q274,80 284,66"/><path d="M300,99 Q296,76 306,58"/><path d="M322,99 Q318,82 328,70"/>
      </g>
      <g class="f3 s3">
        <ellipse cx="288" cy="64" rx="7" ry="4"/><ellipse cx="310" cy="56" rx="7" ry="4"/><ellipse cx="332" cy="68" rx="7" ry="4"/>
      </g>
      <text x="100" y="164" class="tx-b" text-anchor="middle">próba badawcza</text>
      <text x="300" y="164" class="tx-b" text-anchor="middle">próba kontrolna</text>
      <text x="100" y="184" class="tx-s" text-anchor="middle">sucha wata</text>
      <text x="300" y="184" class="tx-s" text-anchor="middle">wilgotna wata</text>
      <text x="200" y="206" class="tx-s" text-anchor="middle">reszta tak samo: miejsce, światło, temperatura</text>
    </svg>`,
    text: `<p>W doświadczeniu przygotowujesz dwa zestawy. W <b>próbie badawczej</b> zmieniasz jeden warunek – ten, który badasz (tu: brak wody).</p>
      <p><b>Próba kontrolna</b> jest taka sama, ale bez tej zmiany. Służy do porównania. Wszystko inne musi być jednakowe – wtedy wiesz, że wynik zależy właśnie od wody.</p>`,
    remember: 'Zmieniasz <b>tylko jeden</b> warunek. Próba kontrolna = taka sama, ale bez zmiany – do porównania.',
    hook: 'Próba kontrolna to „zwykły słoik”, z którym porównujesz ten zmieniony.',
    check: { q: 'Badasz, czy rzeżucha potrzebuje światła. Próba badawcza stoi w ciemnej szafie. Gdzie postawisz próbę kontrolną?', options: ['na jasnym parapecie, reszta tak samo', 'w ciemnej szafie, ale bez wody', 'w zamrażarce'], answer: 0, explain: 'Próba kontrolna różni się tylko badanym warunkiem – światłem. Woda i temperatura muszą być takie same.' },
  },
  {
    title: 'Ucz się mądrze, pracuj bezpiecznie',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Mapa myśli: w środku pytanie Jak się uczyć, a wokół gałęzie: powtórki, fiszki, notatki, sen, cisza, jedna rzecz naraz">
      <g class="ln-thin">
        <line x1="200" y1="110" x2="70" y2="35"/><line x1="200" y1="110" x2="330" y2="35"/>
        <line x1="200" y1="110" x2="70" y2="185"/><line x1="200" y1="110" x2="330" y2="185"/>
        <line x1="200" y1="110" x2="55" y2="110"/><line x1="200" y1="110" x2="345" y2="110"/>
      </g>
      <g class="f3 s3">
        <rect x="15" y="16" width="112" height="36" rx="18"/><rect x="273" y="16" width="112" height="36" rx="18"/>
        <rect x="15" y="168" width="112" height="36" rx="18"/><rect x="273" y="168" width="112" height="36" rx="18"/>
        <rect x="8" y="92" width="96" height="36" rx="18"/><rect x="296" y="92" width="96" height="36" rx="18"/>
      </g>
      <ellipse cx="200" cy="110" rx="80" ry="26" class="f5 s5 sw"/>
      <text x="200" y="116" class="tx-b" text-anchor="middle">Jak się uczyć?</text>
      <text x="71" y="40" class="tx" text-anchor="middle">🔁 powtórki</text>
      <text x="329" y="40" class="tx" text-anchor="middle">🃏 fiszki</text>
      <text x="71" y="192" class="tx" text-anchor="middle">📝 notatki</text>
      <text x="329" y="192" class="tx" text-anchor="middle">😴 sen</text>
      <text x="56" y="116" class="tx" text-anchor="middle">🤫 cisza</text>
      <text x="344" y="116" class="tx" text-anchor="middle">🎯 1 rzecz</text>
    </svg>`,
    text: `<p>Ten rysunek to <b>mapa myśli</b> – notatka z tematem w środku i gałęziami wokół. Pokazuje, co pomaga w nauce: krótkie <b>powtórki</b> w różne dni, sprawdzanie się (np. <b>fiszki</b>), notatki, cisza, robienie jednej rzeczy naraz i <b>sen</b>.</p>
      <p>W pracowni pamiętaj o bezpieczeństwie: pracuj według instrukcji, niczego nie próbuj smakiem, nie wąchaj bezpośrednio (zapach nawiewaj dłonią), uważaj na szkło i ogień, a po pracy umyj ręce.</p>`,
    remember: 'Powtarzaj krótko, ale często, i wysypiaj się. W pracowni: instrukcja, porządek, nic do buzi, ręce umyte.',
    check: { q: 'Co to jest mapa myśli?', options: ['notatka z tematem w środku i gałęziami wokół', 'mapa okolicy szkoły', 'lista zakupów'], answer: 0, explain: 'Mapa myśli to graficzna notatka: temat w środku, a wokół gałęzie z najważniejszymi informacjami.' },
  },
];

window.LESSONS['przyroda/orientacja'] = [
  {
    title: 'Róża wiatrów – osiem kierunków',
    svg: `<svg viewBox="0 0 400 244" role="img" aria-label="Róża wiatrów: kierunki główne N, E, S, W i pośrednie NE, SE, SW, NW">
      <polygon points="200,25 206.1,105.2 241,79 214.8,113.9 295,120 214.8,126.1 241,161 206.1,134.8 200,215 193.9,134.8 159,161 185.2,126.1 105,120 185.2,113.9 159,79 193.9,105.2" class="f1 s1 sw"/>
      <circle cx="200" cy="120" r="5" class="t2"/>
      <text x="200" y="18" class="tx-b" text-anchor="middle">N</text>
      <text x="200" y="238" class="tx-b" text-anchor="middle">S</text>
      <text x="304" y="126" class="tx-b">E</text>
      <text x="96" y="126" class="tx-b" text-anchor="end">W</text>
      <text x="248" y="74" class="tx t2">NE</text>
      <text x="248" y="180" class="tx t2">SE</text>
      <text x="152" y="180" class="tx t2" text-anchor="end">SW</text>
      <text x="152" y="74" class="tx t2" text-anchor="end">NW</text>
      <text x="8" y="22" class="tx-s">N – północ</text>
      <text x="8" y="40" class="tx-s">E – wschód</text>
      <text x="8" y="218" class="tx-s">S – południe</text>
      <text x="8" y="236" class="tx-s">W – zachód</text>
    </svg>`,
    text: `<p><b>Kierunki główne</b> to północ (N), wschód (E), południe (S) i zachód (W). Między nimi leżą <b>kierunki pośrednie</b>: północny wschód (NE), południowy wschód (SE), południowy zachód (SW) i północny zachód (NW).</p>
      <p>Rysunek kierunków to <b>róża wiatrów</b>. Północ jest na górze, południe na dole, wschód po prawej, a zachód po lewej.</p>`,
    remember: 'Nazwa kierunku pośredniego zaczyna się od północy albo południa: <b>północny</b> wschód, <b>południowy</b> zachód.',
    hook: '„<b>N</b>ela <b>E</b>kspresem <b>S</b>zuka <b>W</b>iewiórek” – N, E, S, W po kolei, jak wskazówki zegara.',
    check: { q: 'Jaki kierunek leży między południem a zachodem?', options: ['północny zachód', 'południowy zachód', 'południowy wschód'], answer: 1, explain: 'Między południem (S) a zachodem (W) leży południowy zachód (SW).' },
  },
  {
    title: 'Magnes i kompas',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Magnesy: bieguny różne się przyciągają, jednakowe się odpychają. Obok kompas z igłą magnetyczną wskazującą północ i południe">
      <rect x="10" y="30" width="50" height="30" class="f2 s2"/><rect x="60" y="30" width="50" height="30" class="f1 s1"/>
      <rect x="125" y="30" width="50" height="30" class="f2 s2"/><rect x="175" y="30" width="50" height="30" class="f1 s1"/>
      <text x="35" y="51" class="tx-b" text-anchor="middle">N</text><text x="85" y="51" class="tx-b" text-anchor="middle">S</text>
      <text x="150" y="51" class="tx-b" text-anchor="middle">N</text><text x="200" y="51" class="tx-b" text-anchor="middle">S</text>
      <text x="117" y="84" class="tx-s" text-anchor="middle">S i N – przyciągają się ✅</text>
      <rect x="10" y="110" width="50" height="30" class="f2 s2"/><rect x="60" y="110" width="50" height="30" class="f1 s1"/>
      <rect x="125" y="110" width="50" height="30" class="f1 s1"/><rect x="175" y="110" width="50" height="30" class="f2 s2"/>
      <text x="35" y="131" class="tx-b" text-anchor="middle">N</text><text x="85" y="131" class="tx-b" text-anchor="middle">S</text>
      <text x="150" y="131" class="tx-b" text-anchor="middle">S</text><text x="200" y="131" class="tx-b" text-anchor="middle">N</text>
      <text x="117" y="164" class="tx-s" text-anchor="middle">S i S – odpychają się ❌</text>
      <text x="10" y="200" class="tx-s">📎 przyciąga żelazo i stal</text>
      <circle cx="320" cy="108" r="66" class="bg ln sw"/>
      <polygon points="320,50 331,108 309,108" class="t2"/>
      <polygon points="320,166 331,108 309,108" class="bg ln"/>
      <circle cx="320" cy="108" r="4" class="t1"/>
      <text x="320" y="34" class="tx-b" text-anchor="middle">N</text>
      <text x="320" y="196" class="tx-b" text-anchor="middle">S</text>
      <text x="320" y="214" class="tx-s" text-anchor="middle">igła kompasu</text>
    </svg>`,
    text: `<p>Magnes ma dwa <b>bieguny</b>: północny (N) i południowy (S). Bieguny <b>różne</b> się przyciągają, a <b>jednakowe</b> się odpychają. Magnes przyciąga przedmioty z <b>żelaza i stali</b> – to materiały magnetyczne. Drewna, plastiku i papieru nie przyciąga.</p>
      <p>W kompasie jest <b>igła magnetyczna</b> – mały magnes na osi. Ziemia działa jak wielki magnes, dlatego igła zawsze ustawia się w kierunku <b>północ – południe</b>.</p>`,
    remember: 'Różne bieguny się przyciągają, jednakowe się odpychają. Igła kompasu ustawia się na linii północ – południe.',
    hook: 'N „lubi” S, a N z N się „kłócą”.',
    check: { q: 'Który przedmiot przyciągnie magnes?', options: ['gumka do mazania', 'stalowy gwóźdź', 'drewniany patyk', 'papierowa kartka'], answer: 1, explain: 'Magnes przyciąga przedmioty z żelaza i stali, np. gwoździe.' },
  },
  {
    title: 'Jak wyznaczyć kierunki w terenie',
    svg: `<svg viewBox="0 0 400 212" role="img" aria-label="W południe Słońce jest po stronie południowej, a cień drzewa pada na północ">
      <line x1="10" y1="170" x2="390" y2="170" class="ln"/>
      <circle cx="50" cy="48" r="22" class="f4 s4 sw"/>
      <text x="10" y="98" class="tx-s">Słońce – na południu</text>
      <line x1="72" y1="56" x2="182" y2="74" class="ln-thin dash"/>
      <rect x="194" y="110" width="12" height="60" class="f2 s2"/>
      <circle cx="200" cy="92" r="28" class="f3 s3 sw"/>
      <path d="M206,166 L350,166 L350,174 L206,174 Z" class="f5 s5"/>
      <text x="278" y="156" class="tx-s" text-anchor="middle">cień – najkrótszy</text>
      <text x="390" y="34" class="tx-b" text-anchor="end">w południe</text>
      <text x="24" y="198" class="tx-b t2">S</text>
      <text x="376" y="198" class="tx-b t2" text-anchor="end">N</text>
      <text x="200" y="200" class="tx-s" text-anchor="middle">cień wskazuje północ</text>
    </svg>`,
    text: `<p><b>Kompasem:</b> połóż go poziomo, z dala od magnesów, żelaza i telefonu. Poczekaj, aż igła się zatrzyma. Obracaj kompas, aż litera N na tarczy znajdzie się pod końcem igły wskazującym północ. Teraz odczytaj kierunki.</p>
      <p><b>Słońcem:</b> w Polsce w południe, gdy Słońce jest najwyżej na niebie, świeci ono od <b>południa</b>. Cienie są wtedy najkrótsze i wskazują <b>północ</b>.</p>`,
    remember: 'Kompas: poziomo, z dala od żelaza, N pod igłą. W południe cień wskazuje północ.',
    hook: 'W <b>południe</b> Słońce jest na <b>południu</b> – sama nazwa podpowiada!',
  },
  {
    title: 'Plan i legenda',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Plan okolicy ze strzałką północy: dom na zachodzie, szkoła na wschodzie, droga, park na południowym zachodzie i rzeka. Obok legenda">
      <defs><marker id="a-k4p-ori-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="10" width="262" height="200" rx="8" class="bg ln-thin"/>
      <rect x="10" y="100" width="262" height="18" class="f4"/>
      <rect x="30" y="50" width="50" height="36" rx="4" class="f2 s2 sw"/>
      <rect x="180" y="50" width="70" height="36" rx="4" class="f1 s1 sw"/>
      <rect x="35" y="138" width="90" height="56" rx="8" class="f3 s3 sw"/>
      <path d="M150,210 Q175,165 272,158" class="ln s1" stroke-width="6"/>
      <line x1="130" y1="86" x2="130" y2="34" class="ln sw" marker-end="url(#a-k4p-ori-4)"/>
      <text x="146" y="40" class="tx-b t2">N</text>
      <text x="292" y="30" class="tx-b">Legenda</text>
      <rect x="292" y="44" width="22" height="16" class="f2 s2"/><text x="322" y="58" class="tx">dom</text>
      <rect x="292" y="74" width="22" height="16" class="f1 s1"/><text x="322" y="88" class="tx">szkoła</text>
      <rect x="292" y="104" width="22" height="16" class="f3 s3"/><text x="322" y="118" class="tx">park</text>
      <rect x="292" y="134" width="22" height="16" class="f4"/><text x="322" y="148" class="tx">droga</text>
      <line x1="292" y1="172" x2="314" y2="172" class="ln s1" stroke-width="5"/><text x="322" y="178" class="tx">rzeka</text>
    </svg>`,
    text: `<p><b>Plan</b> to zmniejszony rysunek niewielkiego terenu widzianego z góry – jak z lotu ptaka. <b>Mapa</b> pokazuje większy obszar. Znaki i kolory objaśnia <b>legenda</b>.</p>
      <p>Na większości planów i map północ jest u góry. Gdy jest strzałka N – to ona pokazuje, gdzie jest północ. Wtedy wschód jest po prawej, a zachód po lewej.</p>`,
    remember: 'Legenda objaśnia znaki. Strzałka N pokazuje północ.',
    hook: 'Legenda to „słowniczek” mapy – tłumaczy jej znaki.',
    check: { q: 'W którym kierunku od szkoły leży park?', options: ['na północny wschód', 'na południowy zachód', 'na południowy wschód', 'na północ'], answer: 1, explain: 'Park jest niżej (na południe) i bardziej w lewo (na zachód) niż szkoła – czyli na południowy zachód.' },
  },
  {
    title: 'Skala i typowe pułapki',
    svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Skala 1 do 100: odcinek 3 centymetrów na planie to 3 metry w terenie">
      <defs><marker id="a-k4p-ori-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="24" class="tx-b" text-anchor="middle">skala 1 : 100</text>
      <text x="30" y="50" class="tx-s">na planie</text>
      <rect x="30" y="56" width="30" height="16" class="f2 s2"/><rect x="60" y="56" width="30" height="16" class="bg s2"/><rect x="90" y="56" width="30" height="16" class="f2 s2"/>
      <text x="132" y="70" class="tx-b">3 cm</text>
      <line x1="75" y1="78" x2="75" y2="112" class="ln s2 sw" marker-end="url(#a-k4p-ori-5)"/>
      <text x="88" y="100" class="tx-b t2">· 100</text>
      <text x="30" y="130" class="tx-s">w terenie</text>
      <rect x="30" y="136" width="120" height="16" class="f3 s3"/><rect x="150" y="136" width="120" height="16" class="bg s3"/><rect x="270" y="136" width="120" height="16" class="f3 s3"/>
      <text x="90" y="172" class="tx-s" text-anchor="middle">1 m</text>
      <text x="210" y="172" class="tx-s" text-anchor="middle">1 m</text>
      <text x="330" y="172" class="tx-s" text-anchor="middle">1 m</text>
      <text x="210" y="198" class="tx-b" text-anchor="middle">300 cm = 3 m</text>
    </svg>`,
    text: `<p><b>Skala</b> mówi, ile razy zmniejszono odległości. Skala 1 : 100 to zmniejszenie 100 razy: 1 cm na planie = 100 cm = 1 m w terenie. Skala 1 : 1000 to 1 cm = 10 m, a 1 : 100 000 to 1 cm = 1 km.</p>
      <p><b>Typowe pułapki:</b> 1 : 1000 to <b>większe</b> zmniejszenie niż 1 : 100. Wiatr i kierunki pośrednie zaczynaj od północy lub południa (północny wschód). Kompas trzymaj z dala od telefonu i żelaza.</p>`,
    remember: '1 : 100 → 1 cm = 1 m · 1 : 1000 → 1 cm = 10 m · 1 : 100 000 → 1 cm = 1 km',
    hook: 'Liczba po dwukropku mówi, <b>ile razy</b> zmniejszono. Im większa, tym bardziej zmniejszony rysunek.',
    check: { q: 'Plan ma skalę 1 : 100. Pokój ma na planie 4 cm długości. Ile ma naprawdę?', options: ['4 cm', '40 cm', '4 m', '40 m'], answer: 2, explain: '4 cm · 100 = 400 cm = 4 m.' },
  },
];

window.LESSONS['przyroda/rosliny'] = [
  {
    title: 'Co nas otacza?',
    svg: `<svg viewBox="0 0 420 182" role="img" aria-label="Trzy grupy: składniki nieożywione (światło, woda, skały, powietrze), ożywione (drzewo, biedronka, grzyb, jeż) i stworzone przez człowieka (dom, droga, most, ławka)">
      <rect x="8" y="8" width="130" height="168" rx="10" class="f1 s1"/>
      <rect x="145" y="8" width="130" height="168" rx="10" class="f3 s3"/>
      <rect x="282" y="8" width="130" height="168" rx="10" class="f2 s2"/>
      <text x="73" y="32" class="tx-b" text-anchor="middle">nieożywione</text>
      <text x="210" y="32" class="tx-b" text-anchor="middle">ożywione</text>
      <text x="347" y="32" class="tx-b" text-anchor="middle">od człowieka</text>
      <text x="18" y="68" class="tx">☀️ światło</text>
      <text x="18" y="100" class="tx">💧 woda</text>
      <text x="18" y="132" class="tx">🪨 skały</text>
      <text x="18" y="164" class="tx">💨 powietrze</text>
      <text x="155" y="68" class="tx">🌳 drzewo</text>
      <text x="155" y="100" class="tx">🐞 biedronka</text>
      <text x="155" y="132" class="tx">🍄 grzyb</text>
      <text x="155" y="164" class="tx">🦔 jeż</text>
      <text x="292" y="68" class="tx">🏠 dom</text>
      <text x="292" y="100" class="tx">🛣️ droga</text>
      <text x="292" y="132" class="tx">🌉 most</text>
      <text x="292" y="164" class="tx">🪑 ławka</text>
    </svg>`,
    text: `<p>Na spacerze widzisz <b>składniki nieożywione</b> przyrody (woda, powietrze, skały, gleba, światło) i <b>ożywione</b> (rośliny, zwierzęta, grzyby, ludzie). Widzisz też to, co zbudował człowiek – to <b>elementy antropogeniczne</b>, np. domy, drogi, mosty.</p>
      <p>Wszystko jest ze sobą powiązane. Drzewo potrzebuje światła, wody, powietrza i gleby, a w jego koronie ptaki budują gniazda.</p>`,
    remember: 'Nieożywione: woda, powietrze, skały, gleba, światło. Ożywione: rośliny, zwierzęta, grzyby, ludzie. Antropogeniczne – zrobione przez człowieka.',
    hook: '„Anthropos” to po grecku <b>człowiek</b> – antropogeniczny znaczy „stworzony przez człowieka”.',
    check: { q: 'Który element jest antropogeniczny?', options: ['mech', 'ławka', 'kamień', 'wróbel'], answer: 1, explain: 'Ławkę zrobił człowiek. Mech i wróbel są ożywione, kamień – nieożywiony.' },
  },
  {
    title: 'Po czym poznać, że coś żyje?',
    svg: `<svg viewBox="0 0 400 202" role="img" aria-label="Siedem cech organizmów żywych: oddycha, odżywia się, rośnie, rozmnaża się, reaguje, wydala, porusza się">
      <g class="f3 s3">
        <rect x="10" y="8" width="185" height="40" rx="20"/><rect x="205" y="8" width="185" height="40" rx="20"/>
        <rect x="10" y="56" width="185" height="40" rx="20"/><rect x="205" y="56" width="185" height="40" rx="20"/>
        <rect x="10" y="104" width="185" height="40" rx="20"/><rect x="205" y="104" width="185" height="40" rx="20"/>
        <rect x="107" y="152" width="185" height="40" rx="20"/>
      </g>
      <text x="102" y="34" class="tx" text-anchor="middle">🫁 oddycha</text>
      <text x="297" y="34" class="tx" text-anchor="middle">🍽️ odżywia się</text>
      <text x="102" y="82" class="tx" text-anchor="middle">🌱 rośnie</text>
      <text x="297" y="82" class="tx" text-anchor="middle">🐣 rozmnaża się</text>
      <text x="102" y="130" class="tx" text-anchor="middle">👀 reaguje</text>
      <text x="297" y="130" class="tx" text-anchor="middle">💧 wydala</text>
      <text x="200" y="178" class="tx" text-anchor="middle">🏃 porusza się</text>
    </svg>`,
    text: `<p>Organizm żywy: <b>oddycha</b>, <b>odżywia się</b>, <b>rośnie</b> i rozwija się, <b>rozmnaża się</b>, <b>reaguje</b> na to, co dzieje się wokół, <b>wydala</b> zbędne substancje i <b>porusza się</b>.</p>
      <p>Rośliny też to robią, choć wolniej. Oddychają, a ich kwiaty otwierają się i zamykają. Roślina na parapecie wygina się w stronę okna – tak reaguje na światło.</p>`,
    remember: 'Żyje = oddycha, odżywia się, rośnie, rozmnaża się, reaguje, wydala, porusza się.',
    hook: '2 × <b>O</b> (oddycha, odżywia się), 4 × <b>R</b> (rośnie, rozmnaża się, reaguje, rusza się) i 1 × <b>W</b> (wydala).',
    check: { q: 'Dlaczego kamień nie jest organizmem żywym?', options: ['bo nie oddycha, nie rośnie i nie rozmnaża się', 'bo jest twardy', 'bo jest szary'], answer: 0, explain: 'Kamień nie ma cech organizmu żywego: nie oddycha, nie odżywia się, nie rośnie i nie rozmnaża się.' },
  },
  {
    title: 'Liść – mała fabryka pokarmu',
    svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Fotosynteza: do liścia dociera światło, woda z korzeni i dwutlenek węgla z powietrza. Powstaje pokarm i tlen">
      <defs><marker id="a-k4p-ros-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="40" cy="38" r="22" class="f4 s4 sw"/>
      <text x="76" y="24" class="tx-s">światło</text>
      <line x1="64" y1="50" x2="146" y2="88" class="ln s4 sw" marker-end="url(#a-k4p-ros-3)"/>
      <ellipse cx="200" cy="112" rx="72" ry="36" transform="rotate(-18 200 112)" class="f3 s3 sw"/>
      <line x1="134" y1="134" x2="266" y2="90" class="s3" stroke-width="2"/>
      <line x1="200" y1="214" x2="200" y2="152" class="ln s1 sw" marker-end="url(#a-k4p-ros-3)"/>
      <text x="210" y="204" class="tx-s">woda (z korzeni)</text>
      <line x1="16" y1="128" x2="124" y2="124" class="ln sw" marker-end="url(#a-k4p-ros-3)"/>
      <text x="14" y="152" class="tx-s">dwutlenek węgla</text>
      <line x1="272" y1="92" x2="376" y2="66" class="ln s1 sw" marker-end="url(#a-k4p-ros-3)"/>
      <text x="330" y="56" class="tx-b" text-anchor="middle">tlen</text>
      <line x1="270" y1="128" x2="376" y2="150" class="ln s2 sw" marker-end="url(#a-k4p-ros-3)"/>
      <text x="330" y="180" class="tx-b" text-anchor="middle">pokarm</text>
    </svg>`,
    text: `<p><b>Rośliny są samożywne</b> – same wytwarzają pokarm. Robią to w zielonych liściach. Z <b>wody</b> i <b>dwutlenku węgla</b> (gazu z powietrza), dzięki <b>światłu</b>, powstaje pokarm (cukier). Przy okazji roślina wydziela <b>tlen</b>. To jest <b>fotosynteza</b>.</p>
      <p><b>Zwierzęta, grzyby i ludzie są cudzożywni</b> – zjadają inne organizmy albo ich szczątki. Bez fotosyntezy nie mieliby ani pokarmu, ani tlenu.</p>`,
    remember: 'Światło + woda + dwutlenek węgla → pokarm + tlen. Bez światła nie ma fotosyntezy.',
    hook: '„Foto” znaczy światło, „synteza” – łączenie, składanie w całość. <b>Fotosynteza</b> = składanie pokarmu dzięki światłu.',
    check: { q: 'Grzyb nie ma zielonych liści i nie wytwarza pokarmu ze światła. Jakim jest organizmem?', options: ['samożywnym', 'cudzożywnym', 'nieożywionym'], answer: 1, explain: 'Grzyby pobierają pokarm z innych organizmów lub ich szczątków – są cudzożywne.' },
  },
  {
    title: 'Z czego zbudowana jest roślina',
    svg: `<svg viewBox="0 0 420 252" role="img" aria-label="Roślina z podpisanymi częściami: kwiat, liść, łodyga, korzeń. Obok powiększony kwiat: słupek, pręcik, płatek">
      <rect x="20" y="190" width="200" height="58" class="f4"/>
      <line x1="20" y1="190" x2="220" y2="190" class="ln-thin"/>
      <line x1="100" y1="190" x2="100" y2="66" class="s3" stroke-width="5"/>
      <ellipse cx="70" cy="140" rx="28" ry="10" transform="rotate(-25 70 140)" class="f3 s3 sw"/>
      <ellipse cx="130" cy="114" rx="28" ry="10" transform="rotate(25 130 114)" class="f3 s3 sw"/>
      <g class="f2 s2"><circle cx="100" cy="42" r="10"/><circle cx="115" cy="53" r="10"/><circle cx="110" cy="70" r="10"/><circle cx="90" cy="70" r="10"/><circle cx="85" cy="53" r="10"/></g>
      <circle cx="100" cy="58" r="7" class="f4 s4"/>
      <g class="ln"><path d="M100,190 L100,236"/><path d="M100,198 L78,232"/><path d="M100,204 L124,236"/></g>
      <g class="ln-thin"><line x1="182" y1="56" x2="124" y2="58"/><line x1="182" y1="114" x2="156" y2="110"/><line x1="182" y1="162" x2="104" y2="162"/><line x1="182" y1="224" x2="126" y2="226"/></g>
      <text x="186" y="62" class="tx">kwiat</text>
      <text x="186" y="120" class="tx">liść</text>
      <text x="186" y="168" class="tx">łodyga</text>
      <text x="186" y="230" class="tx">korzeń</text>
      <rect x="250" y="10" width="162" height="190" rx="12" class="ln-thin dash"/>
      <ellipse cx="292" cy="126" rx="34" ry="12" transform="rotate(-30 292 126)" class="f2 s2 sw"/>
      <ellipse cx="372" cy="126" rx="34" ry="12" transform="rotate(30 372 126)" class="f2 s2 sw"/>
      <ellipse cx="332" cy="158" rx="24" ry="8" class="f3 s3"/>
      <line x1="322" y1="152" x2="310" y2="104" class="ln"/><line x1="342" y1="152" x2="354" y2="104" class="ln"/>
      <ellipse cx="309" cy="99" rx="5" ry="7" class="f4 s4 sw"/><ellipse cx="355" cy="99" rx="5" ry="7" class="f4 s4 sw"/>
      <ellipse cx="332" cy="140" rx="10" ry="13" class="f5 s5 sw"/>
      <line x1="332" y1="127" x2="332" y2="88" class="s5" stroke-width="4"/>
      <ellipse cx="332" cy="85" rx="8" ry="4" class="f5 s5 sw"/>
      <g class="ln-thin"><line x1="332" y1="40" x2="332" y2="78"/><line x1="384" y1="74" x2="360" y2="94"/><line x1="276" y1="176" x2="282" y2="134"/></g>
      <text x="332" y="34" class="tx" text-anchor="middle">słupek</text>
      <text x="404" y="68" class="tx-s" text-anchor="end">pręcik</text>
      <text x="262" y="192" class="tx-s">płatek</text>
    </svg>`,
    text: `<p><b>Korzeń</b> trzyma roślinę w ziemi i pobiera wodę. <b>Łodyga</b> podtrzymuje liście i kwiaty oraz przewodzi wodę. <b>Liście</b> wytwarzają pokarm. <b>Kwiat</b> służy do rozmnażania.</p>
      <p>W kwiecie: kolorowe płatki (część <b>okwiatu</b>) wabią owady, <b>pręciki</b> wytwarzają pyłek, a w <b>słupku</b> powstają nasiona. Z dolnej części słupka powstaje <b>owoc</b> – chroni nasiona i pomaga je rozsiać. Z <b>nasiona</b> wyrasta nowa roślina.</p>`,
    remember: 'Korzeń – woda z gleby · łodyga – podpora i transport · liść – pokarm · kwiat – rozmnażanie (pręciki – pyłek, słupek – nasiona).',
    hook: 'Korzeń <b>pije</b>, łodyga <b>nosi</b>, liść <b>gotuje</b>, a kwiat dba o <b>potomstwo</b>.',
  },
  {
    title: 'Rośliny zarodnikowe i nasienne',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Porównanie: rośliny zarodnikowe – paprocie i mchy, rozmnażają się przez zarodniki. Rośliny nasienne – dąb, sosna, mniszek, wytwarzają nasiona">
      <rect x="10" y="8" width="185" height="180" rx="12" class="f1 s1 sw"/>
      <rect x="205" y="8" width="185" height="180" rx="12" class="f3 s3 sw"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">zarodnikowe</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">nasienne</text>
      <text x="102" y="58" class="tx-s" text-anchor="middle">rozmnażają się</text>
      <text x="102" y="74" class="tx-s" text-anchor="middle">przez zarodniki</text>
      <text x="297" y="58" class="tx-s" text-anchor="middle">wytwarzają</text>
      <text x="297" y="74" class="tx-s" text-anchor="middle">nasiona</text>
      <text x="30" y="112" class="tx">🌿 paprocie</text>
      <text x="30" y="144" class="tx">🟢 mchy</text>
      <text x="225" y="112" class="tx">🌳 dąb</text>
      <text x="225" y="144" class="tx">🌲 sosna</text>
      <text x="225" y="176" class="tx">🌼 mniszek</text>
    </svg>`,
    text: `<p><b>Rośliny zarodnikowe</b>, np. mchy i paprocie, nie mają kwiatów ani nasion. Rozmnażają się przez <b>zarodniki</b> – bardzo drobne, jak pył. Paproć ma je w brązowych kropkach na spodniej stronie liści.</p>
      <p><b>Rośliny nasienne</b> wytwarzają <b>nasiona</b>, np. dąb (żołędzie), sosna, mniszek, fasola.</p>`,
    remember: 'Podsumowanie: rośliny są samożywne (fotosynteza). Mają korzeń, łodygę, liście; nasienne mają też kwiaty, owoce i nasiona. Mchy i paprocie – zarodniki.',
    hook: 'Zarodnik jest malutki jak pyłek kurzu, a nasiono widać gołym okiem – np. żołądź.',
    check: { q: 'Mech nie ma kwiatów ani nasion. Jak się rozmnaża?', options: ['przez zarodniki', 'przez nasiona', 'przez owoce'], answer: 0, explain: 'Mchy to rośliny zarodnikowe – rozmnażają się przez zarodniki.' },
  },
];

window.LESSONS['przyroda/zwierzeta'] = [
  {
    title: 'Kręgowce i bezkręgowce',
    svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Kręgosłup z kręgów. Kręgowce: jeż, wróbel, żaba, ryba. Bezkręgowce: biedronka, ślimak, mrówka, dżdżownica">
      <g class="f4 s4">
        <rect x="122" y="14" width="16" height="22" rx="4"/><rect x="142" y="14" width="16" height="22" rx="4"/><rect x="162" y="14" width="16" height="22" rx="4"/>
        <rect x="182" y="14" width="16" height="22" rx="4"/><rect x="202" y="14" width="16" height="22" rx="4"/><rect x="222" y="14" width="16" height="22" rx="4"/>
        <rect x="242" y="14" width="16" height="22" rx="4"/><rect x="262" y="14" width="16" height="22" rx="4"/>
      </g>
      <text x="200" y="58" class="tx-s" text-anchor="middle">kręgosłup = kręgi jeden za drugim</text>
      <rect x="10" y="70" width="185" height="130" rx="12" class="f1 s1 sw"/>
      <rect x="205" y="70" width="185" height="130" rx="12" class="f2 s2 sw"/>
      <text x="102" y="94" class="tx-b" text-anchor="middle">kręgowce</text>
      <text x="297" y="94" class="tx-b" text-anchor="middle">bezkręgowce</text>
      <text x="26" y="122" class="tx">🦔 jeż</text>
      <text x="26" y="146" class="tx">🐦 wróbel</text>
      <text x="26" y="170" class="tx">🐸 żaba</text>
      <text x="26" y="194" class="tx">🐟 ryba</text>
      <text x="221" y="122" class="tx">🐞 biedronka</text>
      <text x="221" y="146" class="tx">🐌 ślimak</text>
      <text x="221" y="170" class="tx">🐜 mrówka</text>
      <text x="221" y="194" class="tx">🪱 dżdżownica</text>
    </svg>`,
    text: `<p><b>Kręgowce</b> mają w środku ciała szkielet z kości, a w nim <b>kręgosłup</b>. To np. jeż, sarna, kot, wróbel, żaba, jaszczurka i ryby.</p>
      <p><b>Bezkręgowce</b> nie mają kręgosłupa. To np. owady (biedronka, mrówka, pszczoła), pająki, ślimaki i dżdżownice.</p>`,
    remember: 'Kręgowiec = ma kręgosłup. Bezkręgowiec = nie ma kręgosłupa.',
    hook: 'Ty też jesteś kręgowcem – pomacaj swoje plecy, poczujesz kręgi!',
    check: { q: 'Które zwierzę jest bezkręgowcem?', options: ['ślimak', 'jeż', 'wróbel', 'żaba'], answer: 0, explain: 'Ślimak nie ma kręgosłupa. Jeż, wróbel i żaba są kręgowcami.' },
  },
  {
    title: 'Bądź detektywem – ślady zwierząt',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sześć rodzajów śladów zwierząt: tropy, nora, gniazdo, zgryzy, pióra, kretowisko">
      <g class="f5 s5">
        <rect x="8" y="8" width="124" height="94" rx="10"/><rect x="138" y="8" width="124" height="94" rx="10"/><rect x="268" y="8" width="124" height="94" rx="10"/>
        <rect x="8" y="108" width="124" height="94" rx="10"/><rect x="138" y="108" width="124" height="94" rx="10"/><rect x="268" y="108" width="124" height="94" rx="10"/>
      </g>
      <text x="70" y="44" class="tx-b" text-anchor="middle">🐾</text>
      <text x="200" y="44" class="tx-b" text-anchor="middle">🕳️</text>
      <text x="330" y="44" class="tx-b" text-anchor="middle">🐦</text>
      <text x="70" y="144" class="tx-b" text-anchor="middle">🌰</text>
      <text x="200" y="144" class="tx-b" text-anchor="middle">🪶</text>
      <path d="M300,148 Q330,118 360,148 Z" class="f4 s4"/>
      <text x="70" y="72" class="tx" text-anchor="middle">tropy</text>
      <text x="200" y="72" class="tx" text-anchor="middle">nora</text>
      <text x="330" y="72" class="tx" text-anchor="middle">gniazdo</text>
      <text x="70" y="172" class="tx" text-anchor="middle">zgryzy</text>
      <text x="200" y="172" class="tx" text-anchor="middle">pióra</text>
      <text x="330" y="172" class="tx" text-anchor="middle">kretowisko</text>
      <text x="70" y="92" class="tx-s" text-anchor="middle">odciski łap</text>
      <text x="200" y="92" class="tx-s" text-anchor="middle">kryjówka w ziemi</text>
      <text x="330" y="92" class="tx-s" text-anchor="middle">ptaki, osy</text>
      <text x="70" y="192" class="tx-s" text-anchor="middle">ślady jedzenia</text>
      <text x="200" y="192" class="tx-s" text-anchor="middle">ptak tu był</text>
      <text x="330" y="192" class="tx-s" text-anchor="middle">kopiec kreta</text>
    </svg>`,
    text: `<p>Wiele zwierząt chowa się przed ludźmi. Ale zostawiają <b>ślady bytowania</b>: <b>tropy</b> (odciski łap na śniegu lub w błocie), <b>nory</b>, <b>gniazda</b>, <b>zgryzy</b> (np. obgryzione szyszki, nadgryzione orzechy), pióra, sierść i odchody.</p>
      <p>Kopczyki ziemi na trawniku to <b>kretowiska</b> – kret wypycha ziemię, kopiąc korytarze.</p>`,
    remember: 'Ślady bytowania: tropy, nory, gniazda, zgryzy, pióra, kretowiska.',
    hook: 'Zwierzęcia nie widać, ale zostawiło „odciski palców” – jak w kryminale.',
  },
  {
    title: 'Grzyb – większość ukryta pod ziemią',
    svg: `<svg viewBox="0 0 400 226" role="img" aria-label="Grzyb kapeluszowy z podpisami: kapelusz, blaszki, trzon, a pod ziemią grzybnia z cienkich nitek">
      <rect x="10" y="160" width="380" height="62" class="f4"/>
      <line x1="10" y1="160" x2="390" y2="160" class="ln"/>
      <path d="M70,90 Q70,20 150,20 Q230,20 230,90 Z" class="f2 s2 sw"/>
      <path d="M72,90 L228,90 L196,106 L104,106 Z" class="f4 s4"/>
      <g class="ln-thin">
        <line x1="90" y1="90" x2="110" y2="106"/><line x1="110" y1="90" x2="124" y2="106"/><line x1="130" y1="90" x2="138" y2="106"/>
        <line x1="170" y1="90" x2="162" y2="106"/><line x1="190" y1="90" x2="176" y2="106"/><line x1="210" y1="90" x2="190" y2="106"/>
      </g>
      <rect x="134" y="104" width="32" height="56" rx="8" class="bg s4 sw"/>
      <g class="ln">
        <path d="M140,162 Q100,184 40,180"/><path d="M146,162 Q130,200 80,214"/><path d="M154,162 Q170,204 220,212"/><path d="M160,162 Q200,182 250,176"/>
        <path d="M70,181 Q60,196 30,204"/><path d="M200,206 Q230,196 260,206"/>
      </g>
      <g class="ln-thin"><line x1="256" y1="44" x2="206" y2="44"/><line x1="256" y1="98" x2="204" y2="98"/><line x1="256" y1="132" x2="170" y2="132"/><line x1="276" y1="196" x2="252" y2="186"/></g>
      <text x="262" y="50" class="tx">kapelusz</text>
      <text x="262" y="104" class="tx">blaszki</text>
      <text x="262" y="138" class="tx">trzon</text>
      <text x="282" y="202" class="tx-b">grzybnia</text>
    </svg>`,
    text: `<p>To, co zbierasz w lesie, to <b>owocnik</b>: <b>kapelusz</b> i <b>trzon</b>. Pod kapeluszem są <b>blaszki</b> albo <b>rurki</b> – tam powstają zarodniki. W ziemi rośnie <b>grzybnia</b> – plątanina cienkich nitek. To najważniejsza część grzyba.</p>
      <p>Grzyby rozkładają opadłe liście i martwe drewno – dzięki nim powstaje żyzna gleba. Zbieraj <b>tylko grzyby, które na pewno znasz</b>, najlepiej z dorosłym. Ostrożnie je wykręć lub wytnij, nie niszcz grzybni i nie kop innych grzybów. Zbieraj do koszyka.</p>`,
    remember: 'Owocnik = kapelusz + trzon. Grzybnia – w ziemi. Grzyby rozkładają szczątki i tworzą glebę.',
    hook: 'Grzyb jest jak góra lodowa: widzisz mały kawałek, a reszta (grzybnia) kryje się pod ziemią.',
    check: { q: 'Gdzie u grzyba kapeluszowego powstają zarodniki?', options: ['w blaszkach lub rurkach pod kapeluszem', 'w trzonie', 'w grzybni'], answer: 0, explain: 'Zarodniki powstają pod kapeluszem – w blaszkach (np. muchomor) albo w rurkach (np. prawdziwek).' },
  },
  {
    title: 'Uwaga! Trujące i jadowite',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cztery ostrzeżenia: muchomor sromotnikowy – śmiertelnie trujący grzyb, barszcz Sosnowskiego – sok i słońce powodują oparzenia, żmija zygzakowata – jadowity wąż, konwalia – roślina trująca">
      <g class="f2 s2 sw">
        <rect x="8" y="8" width="190" height="94" rx="10"/><rect x="202" y="8" width="190" height="94" rx="10"/>
        <rect x="8" y="108" width="190" height="94" rx="10"/><rect x="202" y="108" width="190" height="94" rx="10"/>
      </g>
      <text x="36" y="48" class="tx-b" text-anchor="middle">🍄</text>
      <text x="230" y="48" class="tx-b" text-anchor="middle">🌿</text>
      <text x="36" y="148" class="tx-b" text-anchor="middle">🐍</text>
      <text x="230" y="148" class="tx-b" text-anchor="middle">⚠️</text>
      <text x="60" y="36" class="tx-b">muchomor</text>
      <text x="60" y="58" class="tx">sromotnikowy</text>
      <text x="20" y="88" class="tx-s">śmiertelnie trujący grzyb</text>
      <text x="254" y="36" class="tx-b">barszcz</text>
      <text x="254" y="58" class="tx">Sosnowskiego</text>
      <text x="214" y="88" class="tx-s">sok + słońce = oparzenia</text>
      <text x="60" y="136" class="tx-b">żmija</text>
      <text x="60" y="158" class="tx">zygzakowata</text>
      <text x="20" y="188" class="tx-s">jadowity wąż</text>
      <text x="254" y="136" class="tx-b">konwalia</text>
      <text x="214" y="188" class="tx-s">roślina trująca</text>
    </svg>`,
    text: `<p><b>Muchomor sromotnikowy</b> jest śmiertelnie trujący – nawet jeden grzyb może zabić. Trującego grzyba nie rozpoznasz po zapachu ani smaku. Trujący jest też <b>muchomor czerwony</b>. Trujące rośliny to np. <b>konwalia</b>. Sok <b>barszczu Sosnowskiego</b> w słońcu parzy skórę.</p>
      <p><b>Żmija zygzakowata</b> to jedyny jadowity wąż w Polsce. Gdy ją zobaczysz, spokojnie się oddal. Jeśli ktoś zjadł nieznanego grzyba lub roślinę – od razu powiedz dorosłemu; trzeba wezwać pomoc (112).</p>`,
    remember: 'Nie zbieraj i nie jedz nieznanych grzybów, roślin ani owoców. Nie dotykaj barszczu Sosnowskiego. Żmiję omijaj z daleka.',
    hook: 'Nie znam? <b>Nie zrywam, nie dotykam, nie jem.</b>',
  },
  {
    title: 'Jak zwierzęta przeżywają zimę',
    svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Trzy sposoby na zimę: sen zimowy (jeż), odlot (bocian), zapasy (wiewiórka). Poniżej: co dawać ptakom w karmniku, a czego nie">
      <g class="f1 s1">
        <rect x="8" y="8" width="124" height="112" rx="10"/><rect x="138" y="8" width="124" height="112" rx="10"/><rect x="268" y="8" width="124" height="112" rx="10"/>
      </g>
      <text x="70" y="46" class="tx-b" text-anchor="middle">💤</text>
      <text x="200" y="46" class="tx-b" text-anchor="middle">✈️</text>
      <text x="330" y="46" class="tx-b" text-anchor="middle">🌰</text>
      <text x="70" y="76" class="tx" text-anchor="middle">sen zimowy</text>
      <text x="200" y="76" class="tx" text-anchor="middle">odlot</text>
      <text x="330" y="76" class="tx" text-anchor="middle">zapasy</text>
      <text x="70" y="100" class="tx-s" text-anchor="middle">jeż, nietoperze</text>
      <text x="200" y="100" class="tx-s" text-anchor="middle">bocian, jaskółka</text>
      <text x="330" y="100" class="tx-s" text-anchor="middle">wiewiórka</text>
      <rect x="8" y="130" width="190" height="78" rx="10" class="f3 s3 sw"/>
      <rect x="202" y="130" width="190" height="78" rx="10" class="f2 s2 sw"/>
      <text x="20" y="154" class="tx-b">✅ do karmnika</text>
      <text x="20" y="176" class="tx-s">słonecznik, ziarna,</text>
      <text x="20" y="196" class="tx-s">niesolona słonina</text>
      <text x="214" y="154" class="tx-b">❌ nie dawaj</text>
      <text x="214" y="176" class="tx-s">chleba, jedzenia</text>
      <text x="214" y="196" class="tx-s">solonego i zepsutego</text>
    </svg>`,
    text: `<p>Zimą jest zimno i mało pokarmu. Zwierzęta radzą sobie różnie. <b>Jeż</b> zapada w <b>sen zimowy (hibernację)</b> w kryjówce. <b>Bociany</b> i jaskółki <b>odlatują</b> do ciepłych krajów. <b>Wiewiórka</b> <b>gromadzi zapasy</b> – orzechy i żołędzie. Wiele ptaków zostaje, np. wróbel i sikora.</p>
      <p>Ptaki dokarmiaj zimą, gdy jest mróz albo śnieg – i rób to regularnie. Dawaj nasiona słonecznika, ziarna, niesoloną słoninę. <b>Nie dawaj chleba</b> ani jedzenia solonego, przyprawionego czy zepsutego. Dbaj o czysty karmnik.</p>`,
    remember: 'Zimą: sen zimowy (jeż), odlot (bocian), zapasy (wiewiórka). Do karmnika – ziarna i słonecznik, nigdy chleb ani solone.',
    check: { q: 'Co możesz wsypać do karmnika dla ptaków?', options: ['chleb', 'słone orzeszki', 'nasiona słonecznika', 'spleśniały ser'], answer: 2, explain: 'Nasiona słonecznika są dobrym pokarmem dla ptaków. Chleb, słone i zepsute jedzenie im szkodzą.' },
  },
];

window.LESSONS['przyroda/woda'] = [
  {
    title: 'Trzy stany skupienia',
    svg: `<svg viewBox="0 0 420 196" role="img" aria-label="Model drobin: w lodzie drobiny ciasno ułożone, w wodzie blisko siebie i mogą się przesuwać, w parze wodnej daleko od siebie">
      <text x="73" y="22" class="tx-b" text-anchor="middle">stały</text>
      <text x="210" y="22" class="tx-b" text-anchor="middle">ciekły</text>
      <text x="347" y="22" class="tx-b" text-anchor="middle">gazowy</text>
      <rect x="8" y="32" width="130" height="108" rx="8" class="bg ln-thin"/>
      <rect x="145" y="32" width="130" height="108" rx="8" class="bg ln-thin"/>
      <rect x="282" y="32" width="130" height="108" rx="8" class="bg ln-thin"/>
      <g class="f1 s1">
        <circle cx="37" cy="58" r="8"/><circle cx="55" cy="58" r="8"/><circle cx="73" cy="58" r="8"/><circle cx="91" cy="58" r="8"/><circle cx="109" cy="58" r="8"/>
        <circle cx="37" cy="76" r="8"/><circle cx="55" cy="76" r="8"/><circle cx="73" cy="76" r="8"/><circle cx="91" cy="76" r="8"/><circle cx="109" cy="76" r="8"/>
        <circle cx="37" cy="94" r="8"/><circle cx="55" cy="94" r="8"/><circle cx="73" cy="94" r="8"/><circle cx="91" cy="94" r="8"/><circle cx="109" cy="94" r="8"/>
        <circle cx="37" cy="112" r="8"/><circle cx="55" cy="112" r="8"/><circle cx="73" cy="112" r="8"/><circle cx="91" cy="112" r="8"/><circle cx="109" cy="112" r="8"/>
        <circle cx="160" cy="128" r="8"/><circle cx="178" cy="126" r="8"/><circle cx="197" cy="129" r="8"/><circle cx="216" cy="127" r="8"/><circle cx="236" cy="129" r="8"/><circle cx="256" cy="126" r="8"/>
        <circle cx="168" cy="111" r="8"/><circle cx="188" cy="109" r="8"/><circle cx="208" cy="112" r="8"/><circle cx="228" cy="110" r="8"/><circle cx="248" cy="112" r="8"/>
        <circle cx="178" cy="94" r="8"/><circle cx="200" cy="95" r="8"/><circle cx="238" cy="94" r="8"/>
        <circle cx="305" cy="52" r="8"/><circle cx="378" cy="62" r="8"/><circle cx="340" cy="92" r="8"/><circle cx="300" cy="120" r="8"/><circle cx="392" cy="118" r="8"/>
      </g>
      <g class="ln-thin"><line x1="316" y1="46" x2="328" y2="40"/><line x1="366" y1="66" x2="354" y2="72"/><line x1="352" y1="96" x2="364" y2="104"/><line x1="312" y1="122" x2="324" y2="130"/></g>
      <text x="73" y="164" class="tx" text-anchor="middle">lód</text>
      <text x="210" y="164" class="tx" text-anchor="middle">woda</text>
      <text x="347" y="164" class="tx" text-anchor="middle">para wodna</text>
      <text x="73" y="186" class="tx-s" text-anchor="middle">własny kształt</text>
      <text x="210" y="186" class="tx-s" text-anchor="middle">kształt naczynia</text>
      <text x="347" y="186" class="tx-s" text-anchor="middle">wypełnia wszystko</text>
    </svg>`,
    text: `<p>Woda występuje w trzech <b>stanach skupienia</b>: <b>stałym</b> (lód, śnieg), <b>ciekłym</b> (woda) i <b>gazowym</b> (para wodna).</p>
      <p>Wszystko jest zbudowane z malutkich <b>drobin</b>. W lodzie są ciasno ułożone, dlatego lód ma własny kształt. W wodzie są blisko, ale się przesuwają – woda przyjmuje kształt naczynia. W parze są daleko od siebie – dlatego gaz łatwo ścisnąć. Para wodna jest <b>niewidoczna</b>.</p>`,
    remember: 'Stały – własny kształt. Ciekły – kształt naczynia. Gazowy – wypełnia całe naczynie i łatwo go ścisnąć.',
    hook: 'Drobiny w lodzie <b>stoją w szeregu</b>, w wodzie <b>tańczą w tłumie</b>, a w parze <b>biegają po całej sali</b>.',
    check: { q: 'W którym stanie skupienia drobiny są najdalej od siebie?', options: ['w stałym', 'w ciekłym', 'w gazowym'], answer: 2, explain: 'W gazie drobiny są daleko od siebie i szybko się poruszają – dlatego gaz łatwo ścisnąć.' },
  },
  {
    title: 'Przemiany wody',
    svg: `<svg viewBox="0 0 420 246" role="img" aria-label="Schemat przemian: lód, woda i para wodna. Topnienie i krzepnięcie między lodem a wodą, parowanie i skraplanie między wodą a parą, sublimacja i resublimacja między lodem a parą">
      <defs>
        <marker id="a-k4p-woda-2c" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker>
        <marker id="a-k4p-woda-2z" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker>
      </defs>
      <rect x="20" y="180" width="100" height="40" rx="10" class="f1 s1 sw"/>
      <rect x="300" y="180" width="100" height="40" rx="10" class="f1 s1 sw"/>
      <rect x="150" y="20" width="120" height="40" rx="10" class="f1 s1 sw"/>
      <text x="70" y="206" class="tx-b" text-anchor="middle">🧊 lód</text>
      <text x="350" y="206" class="tx-b" text-anchor="middle">💧 woda</text>
      <text x="210" y="46" class="tx-b" text-anchor="middle">para wodna</text>
      <line x1="124" y1="190" x2="294" y2="190" class="ln s2 sw" marker-end="url(#a-k4p-woda-2c)"/>
      <line x1="296" y1="212" x2="126" y2="212" class="ln s1 sw" marker-end="url(#a-k4p-woda-2z)"/>
      <line x1="362" y1="176" x2="284" y2="66" class="ln s2 sw" marker-end="url(#a-k4p-woda-2c)"/>
      <line x1="262" y1="66" x2="334" y2="174" class="ln s1 sw" marker-end="url(#a-k4p-woda-2z)"/>
      <line x1="58" y1="176" x2="136" y2="66" class="ln s2 sw" marker-end="url(#a-k4p-woda-2c)"/>
      <line x1="158" y1="66" x2="86" y2="174" class="ln s1 sw" marker-end="url(#a-k4p-woda-2z)"/>
      <text x="210" y="180" class="tx t2" text-anchor="middle">topnienie</text>
      <text x="210" y="238" class="tx t1" text-anchor="middle">krzepnięcie</text>
      <text x="330" y="112" class="tx t2">parowanie</text>
      <text x="310" y="150" class="tx t1" text-anchor="end">skraplanie</text>
      <text x="92" y="112" class="tx t2" text-anchor="end">sublimacja</text>
      <text x="148" y="112" class="tx t1">resublimacja</text>
    </svg>`,
    text: `<p>Gdy woda się <b>ogrzewa</b> (pomarańczowe strzałki): lód <b>topnieje</b>, woda <b>paruje</b>. Gdy się <b>ochładza</b> (niebieskie strzałki): para się <b>skrapla</b>, a woda <b>krzepnie</b> (zamarza). Lód topnieje, a woda zamarza w <b>0°C</b>.</p>
      <p><b>Wrzenie</b> to bardzo szybkie parowanie w całej wodzie – woda wrze w około <b>100°C</b>. Para może też od razu zmienić się w lód – to <b>resublimacja</b> (tak powstaje szron). Odwrotna przemiana to <b>sublimacja</b>.</p>`,
    remember: 'Topnienie: lód → woda. Krzepnięcie: woda → lód. Parowanie: woda → para. Skraplanie: para → woda. Resublimacja: para → lód.',
    hook: '<b>Skraplanie</b> – robi się <b>kropla</b>. <b>Topnienie</b> – jak lody, które <b>topnieją</b> w słońcu.',
  },
  {
    title: 'Opady i osady',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Opady spadają z chmur: deszcz, śnieg, grad. Osady osiadają na przedmiotach: rosa na trawie, szron na liściu, szadź na gałęzi">
      <path d="M48,52 Q46,26 76,30 Q92,8 122,20 Q156,12 162,40 Q184,44 176,62 Q172,72 156,72 L64,72 Q40,72 48,52 Z" class="f1 s1 sw"/>
      <g class="s1" stroke-width="3"><line x1="58" y1="84" x2="52" y2="104"/><line x1="70" y1="90" x2="64" y2="110"/><line x1="82" y1="84" x2="76" y2="104"/></g>
      <text x="118" y="106" class="tx-b" text-anchor="middle">❄️</text>
      <g class="f1 s1"><circle cx="160" cy="88" r="5"/><circle cx="170" cy="102" r="5"/><circle cx="154" cy="108" r="5"/></g>
      <text x="66" y="134" class="tx-s" text-anchor="middle">deszcz</text>
      <text x="118" y="134" class="tx-s" text-anchor="middle">śnieg</text>
      <text x="164" y="134" class="tx-s" text-anchor="middle">grad</text>
      <text x="110" y="170" class="tx-b" text-anchor="middle">opady</text>
      <text x="110" y="192" class="tx-s" text-anchor="middle">spadają z chmur</text>
      <line x1="210" y1="10" x2="210" y2="198" class="ln-thin dash"/>
      <line x1="222" y1="116" x2="410" y2="116" class="ln"/>
      <g class="ln s3"><path d="M236,116 Q234,96 240,82"/><path d="M250,116 Q252,92 246,76"/><path d="M264,116 Q262,98 270,86"/></g>
      <g class="f1 s1"><circle cx="240" cy="90" r="3"/><circle cx="247" cy="84" r="3"/><circle cx="267" cy="94" r="3"/></g>
      <ellipse cx="316" cy="100" rx="26" ry="11" class="f3 s3 sw"/>
      <g class="s1" stroke-width="2"><line x1="300" y1="94" x2="310" y2="94"/><line x1="305" y1="89" x2="305" y2="99"/><line x1="301" y1="90" x2="309" y2="98"/><line x1="309" y1="90" x2="301" y2="98"/><line x1="320" y1="104" x2="330" y2="104"/><line x1="325" y1="99" x2="325" y2="109"/><line x1="321" y1="100" x2="329" y2="108"/><line x1="329" y1="100" x2="321" y2="108"/></g>
      <line x1="356" y1="50" x2="404" y2="92" class="ln sw"/>
      <g class="f1 s1"><ellipse cx="366" cy="56" rx="6" ry="4"/><ellipse cx="380" cy="68" rx="6" ry="4"/><ellipse cx="394" cy="80" rx="6" ry="4"/></g>
      <text x="252" y="140" class="tx-s" text-anchor="middle">rosa</text>
      <text x="316" y="140" class="tx-s" text-anchor="middle">szron</text>
      <text x="382" y="140" class="tx-s" text-anchor="middle">szadź</text>
      <text x="316" y="170" class="tx-b" text-anchor="middle">osady</text>
      <text x="316" y="192" class="tx-s" text-anchor="middle">osiadają na przedmiotach</text>
    </svg>`,
    text: `<p><b>Opady</b> spadają z chmur: <b>deszcz</b> (woda), <b>śnieg</b> i <b>grad</b> – kulki lodu, zwykle podczas burzy.</p>
      <p><b>Osady</b> powstają na trawie, liściach i przedmiotach przy ziemi: <b>rosa</b> – kropelki wody, <b>szron</b> – lodowe kryształki, gdy jest mróz, <b>szadź</b> – lód osadzony na gałęziach podczas mroźnej mgły.</p>`,
    remember: 'Opady: deszcz, śnieg, grad. Osady: rosa, szron, szadź.',
    hook: '<b>Opad</b> – <b>spada</b> z chmur. <b>Osad</b> – <b>osiada</b> na przedmiotach.',
    check: { q: 'Rano na trawie są kropelki wody, choć w nocy nie padało. To…', options: ['rosa', 'deszcz', 'grad', 'śnieg'], answer: 0, explain: 'Rosa to osad – kropelki wody, które powstają na trawie i przedmiotach.' },
  },
  {
    title: 'Lód zajmuje więcej miejsca',
    svg: `<svg viewBox="0 0 420 206" role="img" aria-label="Skutki zamarzania wody: pęknięta butelka z lodem, skała rozsadzana przez lód w szczelinie, pokrywa śnieżna chroniąca roślinę przed mrozem">
      <defs><marker id="a-k4p-woda-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <rect x="45" y="60" width="50" height="94" rx="10" class="f1 s1 sw"/>
      <rect x="60" y="40" width="20" height="22" class="f1 s1 sw"/>
      <ellipse cx="70" cy="38" rx="12" ry="6" class="f1 s1"/>
      <polyline points="55,80 66,94 58,106 70,122" class="ln s2 sw"/>
      <text x="70" y="178" class="tx" text-anchor="middle">butelka</text>
      <text x="70" y="198" class="tx-s" text-anchor="middle">pęka w zamrażarce</text>
      <polygon points="160,152 172,84 214,60 258,88 266,152" class="bg ln sw"/>
      <polygon points="208,62 222,62 216,128" class="f1 s1"/>
      <text x="210" y="178" class="tx" text-anchor="middle">skała</text>
      <text x="210" y="198" class="tx-s" text-anchor="middle">lód ją rozsadza</text>
      <text x="350" y="40" class="tx" text-anchor="middle">❄️ mróz</text>
      <line x1="350" y1="48" x2="350" y2="76" class="ln s1 sw" marker-end="url(#a-k4p-woda-4)"/>
      <rect x="290" y="82" width="120" height="36" rx="6" class="bg ln"/>
      <text x="350" y="104" class="tx-s" text-anchor="middle">śnieg</text>
      <rect x="290" y="118" width="120" height="36" class="f4"/>
      <path d="M330,140 Q330,126 336,120" class="ln s3 sw"/>
      <ellipse cx="341" cy="121" rx="6" ry="3" class="f3 s3"/>
      <text x="350" y="178" class="tx" text-anchor="middle">kołderka</text>
      <text x="350" y="198" class="tx-s" text-anchor="middle">chroni rośliny</text>
    </svg>`,
    text: `<p>Woda, zamarzając, <b>zwiększa objętość</b> – lód zajmuje więcej miejsca. Dlatego pełna butelka wody może pęknąć w zamrażarce, a woda zamarzająca w szczelinach skał powoli je <b>kruszy</b>.</p>
      <p>Lód jest lżejszy od wody i <b>pływa</b>. Jezioro zamarza od góry, a ryby przeżywają pod lodem. Mróz może uszkodzić rośliny, ale <b>pokrywa śnieżna</b> działa jak kołderka – zawiera dużo powietrza i chroni glebę, rośliny i małe zwierzęta przed mrozem.</p>`,
    remember: 'Zamarzająca woda zwiększa objętość: pęka butelka, kruszą się skały. Lód pływa. Śnieg chroni przed mrozem.',
    hook: 'Lód to „rozpychacz” – potrzebuje więcej miejsca niż woda, z której powstał.',
  },
  {
    title: 'Obieg wody w przyrodzie',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Obieg wody: woda paruje z morza, para skrapla się w chmurę, z chmury padają opady, woda spływa rzeką do morza">
      <defs><marker id="a-k4p-woda-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="40" cy="40" r="20" class="f4 s4 sw"/>
      <path d="M10,186 Q55,176 100,186 Q145,196 190,186 L190,226 L10,226 Z" class="f1 s1"/>
      <text x="60" y="214" class="tx-s" text-anchor="middle">morze</text>
      <polygon points="200,226 300,122 410,226" class="f3 s3"/>
      <path d="M220,62 Q222,40 248,44 Q262,22 288,34 Q318,28 320,54 Q326,76 300,76 L240,76 Q216,76 220,62 Z" class="f1 s1 sw"/>
      <path d="M100,176 Q116,110 206,62" class="ln s2 sw" marker-end="url(#a-k4p-woda-5)"/>
      <text x="100" y="126" class="tx t2" text-anchor="end">parowanie</text>
      <text x="270" y="18" class="tx" text-anchor="middle">skraplanie</text>
      <g class="s1" stroke-width="3"><line x1="252" y1="84" x2="246" y2="104"/><line x1="272" y1="84" x2="266" y2="104"/><line x1="292" y1="84" x2="286" y2="104"/></g>
      <text x="312" y="102" class="tx t1">opady</text>
      <path d="M318,196 Q260,212 196,200" class="ln s1 sw" marker-end="url(#a-k4p-woda-5)"/>
      <text x="300" y="182" class="tx-s" text-anchor="middle">spływanie</text>
    </svg>`,
    text: `<p>Słońce ogrzewa wodę – woda <b>paruje</b> z mórz, jezior, rzek, gleby i roślin. Para unosi się, ochładza i <b>skrapla</b> – tak powstają chmury. Z chmur padają <b>opady</b>. Woda wsiąka w glebę albo <b>spływa</b> rzekami do morza – i wszystko zaczyna się od nowa.</p>
      <p>Człowiek też wpływa na ten obieg. Gdy dużo terenu przykryje się betonem i asfaltem, mniej wody wsiąka w ziemię, a więcej szybko spływa.</p>`,
    remember: 'Parowanie → skraplanie (chmury) → opady → wsiąkanie i spływanie → i od nowa.',
    hook: 'Woda krąży jak na karuzeli: morze → chmura → deszcz → rzeka → morze.',
    check: { q: 'Jak powstają chmury?', options: ['para wodna ochładza się i skrapla', 'lód topnieje w morzu', 'woda zamarza w rzece'], answer: 0, explain: 'Para wodna unosi się wysoko, ochładza i skrapla w malutkie kropelki – tak powstają chmury.' },
  },
];

window.LESSONS['przyroda/pogoda'] = [
  {
    title: 'Z czego składa się pogoda?',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Pięć składników pogody: temperatura, opady, zachmurzenie, wiatr, ciśnienie atmosferyczne">
      <g class="f1 s1">
        <rect x="8" y="8" width="125" height="84" rx="10"/><rect x="138" y="8" width="125" height="84" rx="10"/><rect x="268" y="8" width="125" height="84" rx="10"/>
        <rect x="73" y="104" width="125" height="84" rx="10"/><rect x="203" y="104" width="125" height="84" rx="10"/>
      </g>
      <text x="70" y="46" class="tx-b" text-anchor="middle">🌡️</text>
      <text x="200" y="46" class="tx-b" text-anchor="middle">🌧️</text>
      <text x="330" y="46" class="tx-b" text-anchor="middle">☁️</text>
      <text x="135" y="142" class="tx-b" text-anchor="middle">💨</text>
      <text x="265" y="142" class="tx-b t1" text-anchor="middle">hPa</text>
      <text x="70" y="76" class="tx" text-anchor="middle">temperatura</text>
      <text x="200" y="76" class="tx" text-anchor="middle">opady</text>
      <text x="330" y="76" class="tx" text-anchor="middle">zachmurzenie</text>
      <text x="135" y="172" class="tx" text-anchor="middle">wiatr</text>
      <text x="265" y="172" class="tx" text-anchor="middle">ciśnienie</text>
    </svg>`,
    text: `<p><b>Pogoda</b> to stan powietrza w danym miejscu i czasie. Składają się na nią: <b>temperatura</b> powietrza, <b>opady</b>, <b>zachmurzenie</b> (jaka część nieba jest zakryta chmurami), <b>wiatr</b> i <b>ciśnienie atmosferyczne</b> (jak mocno powietrze naciska).</p>
      <p>Pogoda często się zmienia – rano może świecić słońce, a po południu padać deszcz.</p>`,
    remember: 'Składniki pogody: temperatura, opady, zachmurzenie, wiatr, ciśnienie.',
    hook: 'Pogoda to „humor” powietrza – potrafi się zmienić kilka razy dziennie.',
    check: { q: 'Co NIE jest składnikiem pogody?', options: ['wiatr', 'temperatura powietrza', 'rodzaj skały', 'opady'], answer: 2, explain: 'Skała to składnik przyrody, ale nie składnik pogody.' },
  },
  {
    title: 'Przyrządy i jednostki',
    svg: `<svg viewBox="0 0 420 212" role="img" aria-label="Tabela: termometr mierzy temperaturę w stopniach Celsjusza, deszczomierz opady w milimetrach, wiatromierz prędkość wiatru w m/s lub km/h, wiatrowskaz kierunek wiatru, barometr ciśnienie w hektopaskalach">
      <rect x="6" y="8" width="408" height="30" rx="6" class="f1"/>
      <text x="14" y="29" class="tx-b">przyrząd</text>
      <text x="156" y="29" class="tx-b">co mierzy</text>
      <text x="324" y="29" class="tx-b">jednostka</text>
      <g class="ln-thin"><line x1="6" y1="70" x2="414" y2="70"/><line x1="6" y1="102" x2="414" y2="102"/><line x1="6" y1="134" x2="414" y2="134"/><line x1="6" y1="166" x2="414" y2="166"/></g>
      <text x="14" y="60" class="tx">termometr</text><text x="156" y="60" class="tx">temperatura</text><text x="324" y="60" class="tx-b t2">°C</text>
      <text x="14" y="92" class="tx">deszczomierz</text><text x="156" y="92" class="tx">opady</text><text x="324" y="92" class="tx-b t2">mm</text>
      <text x="14" y="124" class="tx">wiatromierz</text><text x="156" y="124" class="tx">prędkość wiatru</text><text x="324" y="124" class="tx t2">m/s, km/h</text>
      <text x="14" y="156" class="tx">wiatrowskaz</text><text x="156" y="156" class="tx">kierunek wiatru</text><text x="324" y="156" class="tx t2">N, E, S, W</text>
      <text x="14" y="188" class="tx">barometr</text><text x="156" y="188" class="tx">ciśnienie</text><text x="324" y="188" class="tx-b t2">hPa</text>
    </svg>`,
    text: `<p>Każdy składnik pogody mierzymy innym przyrządem i podajemy w innej <b>jednostce</b>. Temperaturę – w stopniach Celsjusza (<b>°C</b>), opady – w milimetrach (<b>mm</b>), prędkość wiatru – w metrach na sekundę (<b>m/s</b>) albo kilometrach na godzinę (<b>km/h</b>), ciśnienie – w hektopaskalach (<b>hPa</b>).</p>
      <p>Zachmurzenie oceniamy, patrząc na niebo: bezchmurnie, małe, duże albo całkowite zachmurzenie.</p>`,
    remember: 'Termometr – °C · deszczomierz – mm · wiatromierz – m/s · wiatrowskaz – kierunek · barometr – hPa.',
    hook: 'Nazwy podpowiadają: <b>deszczo</b>mierz mierzy deszcz, <b>wiatro</b>mierz – wiatr.',
    check: { q: 'Którym przyrządem zmierzysz, ile spadło deszczu?', options: ['barometrem', 'deszczomierzem', 'termometrem', 'wiatrowskazem'], answer: 1, explain: 'Deszczomierz mierzy ilość opadów – w milimetrach.' },
  },
  {
    title: 'Termometr – plus i minus',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Termometr ze skalą od minus 10 do 10 stopni pokazujący 3 stopnie. Obszar powyżej zera opisany jako ciepło, poniżej zera jako mróz">
      <rect x="180" y="30" width="212" height="80" rx="8" class="f2"/>
      <rect x="180" y="110" width="212" height="80" rx="8" class="f1"/>
      <line x1="160" y1="110" x2="392" y2="110" class="ln dash"/>
      <text x="286" y="76" class="tx" text-anchor="middle">powyżej 0°C</text>
      <text x="286" y="146" class="tx-b" text-anchor="middle">❄️ mróz</text>
      <text x="286" y="170" class="tx" text-anchor="middle">poniżej 0°C: −1, −2…</text>
      <rect x="86" y="20" width="28" height="182" rx="14" class="bg ln"/>
      <rect x="93" y="86" width="14" height="126" class="t2"/>
      <circle cx="100" cy="212" r="18" class="t2"/>
      <g class="ln-thin">
        <line x1="114" y1="38" x2="122" y2="38"/><line x1="114" y1="46" x2="122" y2="46"/><line x1="114" y1="54" x2="122" y2="54"/><line x1="114" y1="62" x2="122" y2="62"/>
        <line x1="114" y1="78" x2="122" y2="78"/><line x1="114" y1="86" x2="122" y2="86"/><line x1="114" y1="94" x2="122" y2="94"/><line x1="114" y1="102" x2="122" y2="102"/>
        <line x1="114" y1="118" x2="122" y2="118"/><line x1="114" y1="126" x2="122" y2="126"/><line x1="114" y1="134" x2="122" y2="134"/><line x1="114" y1="142" x2="122" y2="142"/>
        <line x1="114" y1="158" x2="122" y2="158"/><line x1="114" y1="166" x2="122" y2="166"/><line x1="114" y1="174" x2="122" y2="174"/><line x1="114" y1="182" x2="122" y2="182"/>
      </g>
      <g class="ln"><line x1="114" y1="30" x2="130" y2="30"/><line x1="114" y1="70" x2="130" y2="70"/><line x1="114" y1="150" x2="130" y2="150"/><line x1="114" y1="190" x2="130" y2="190"/></g>
      <text x="136" y="36" class="tx">10</text>
      <text x="136" y="76" class="tx">5</text>
      <text x="136" y="116" class="tx-b">0</text>
      <text x="136" y="156" class="tx">−5</text>
      <text x="136" y="196" class="tx">−10</text>
      <text x="60" y="92" class="tx-b t2" text-anchor="end">3°C</text>
    </svg>`,
    text: `<p>Na termometrze każda mała kreska to tu <b>1 stopień</b>. Słupek kończy się 3 kreski nad zerem – jest <b>3°C</b>.</p>
      <p>Temperatury <b>poniżej zera</b> zapisujemy z minusem: −3°C czytamy „minus trzy stopnie”. To <b>mróz</b>. Temperaturę powietrza mierzymy <b>w cieniu</b> – słońce nagrzałoby termometr.</p>`,
    remember: 'Poniżej 0°C – minus i mróz. Temperaturę powietrza mierzymy w cieniu.',
    hook: 'Zero to „podłoga”: nad nią piętra (plus), pod nią piwnica (minus).',
    check: { q: 'Słupek termometru kończy się 3 kreski poniżej zera (1 kreska = 1°C). Jaka jest temperatura?', options: ['3°C', '−3°C', '0°C', '−30°C'], answer: 1, explain: 'Poniżej zera dopisujemy minus: −3°C.' },
  },
  {
    title: 'Skąd wieje wiatr?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Wiatr zachodni wieje z zachodu na wschód. Obok mapa pogody z symbolami: słońce, deszcz i strzałka wiatru">
      <defs><marker id="a-k4p-pog-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="110" y="40" class="tx-b" text-anchor="middle">wiatr zachodni</text>
      <text x="16" y="112" class="tx-b t2">W</text>
      <text x="204" y="112" class="tx-b t2" text-anchor="end">E</text>
      <path d="M40,96 L140,96 L140,80 L180,106 L140,132 L140,116 L40,116 Z" class="f1 s1 sw"/>
      <text x="110" y="160" class="tx-s" text-anchor="middle">wieje Z zachodu</text>
      <text x="110" y="178" class="tx-s" text-anchor="middle">na wschód</text>
      <rect x="228" y="10" width="184" height="180" rx="10" class="f3 s3"/>
      <text x="262" y="56" class="tx-b" text-anchor="middle">☀️</text>
      <text x="300" y="56" class="tx">20°</text>
      <text x="330" y="112" class="tx-b" text-anchor="middle">🌧️</text>
      <text x="356" y="112" class="tx">14°</text>
      <line x1="250" y1="160" x2="330" y2="160" class="ln s2 sw" marker-end="url(#a-k4p-pog-4)"/>
      <text x="290" y="182" class="tx-s" text-anchor="middle">wiatr</text>
      <line x1="390" y1="62" x2="390" y2="28" class="ln sw" marker-end="url(#a-k4p-pog-4)"/>
      <text x="372" y="40" class="tx-b" text-anchor="end">N</text>
    </svg>`,
    text: `<p>Wiatr nazywamy od kierunku, <b>z którego wieje</b>. Wiatr zachodni wieje z zachodu na wschód, a wiatr północny – z północy na południe. Kierunek pokazuje <b>wiatrowskaz</b>.</p>
      <p>Na <b>mapie pogody</b> strzałka pokazuje, <b>dokąd</b> wieje wiatr. Na mapie są też symbole (słońce, chmura, deszcz, śnieg, burza) i liczby – temperatura powietrza.</p>`,
    remember: 'Nazwa wiatru = skąd wieje. Strzałka na mapie = dokąd wieje.',
    hook: 'Wiatr nosi imię miejsca, <b>z którego przyszedł</b> – jak gość, który mówi „jestem z Krakowa”.',
    check: { q: 'Strzałka wiatru na mapie jest skierowana na południe (w dół). Jaki to wiatr?', options: ['południowy', 'północny', 'wschodni', 'zachodni'], answer: 1, explain: 'Strzałka pokazuje, dokąd wieje wiatr – na południe. Wieje więc z północy: to wiatr północny.' },
  },
  {
    title: 'Burza – jak się chronić',
    svg: `<svg viewBox="0 0 420 214" role="img" aria-label="Burza: co robić – schować się w budynku, zejść z otwartej przestrzeni, wyjść z wody. Czego nie robić – stać pod samotnym drzewem, wchodzić na wzgórze, pływać">
      <text x="210" y="34" class="tx-b" text-anchor="middle">⛈️ burza!</text>
      <rect x="8" y="50" width="198" height="158" rx="12" class="f3 s3 sw"/>
      <rect x="214" y="50" width="198" height="158" rx="12" class="f2 s2 sw"/>
      <text x="107" y="80" class="tx-b" text-anchor="middle">✅ tak</text>
      <text x="313" y="80" class="tx-b" text-anchor="middle">❌ nie</text>
      <text x="20" y="116" class="tx">🏠 budynek</text>
      <text x="20" y="150" class="tx">🏃 zejdź z łąki</text>
      <text x="20" y="184" class="tx">💧 wyjdź z wody</text>
      <text x="226" y="116" class="tx">🌳 samotne drzewo</text>
      <text x="226" y="150" class="tx">⛰️ szczyt wzgórza</text>
      <text x="226" y="184" class="tx">🏊 pływanie</text>
    </svg>`,
    text: `<p>Burzę zapowiadają <b>szybko rosnące, wysokie, ciemne chmury</b>, nagłe ściemnienie, coraz silniejszy wiatr i grzmoty w oddali. <b>Błyskawica</b> to ogromna iskra elektryczna, <b>piorun</b> to błyskawica, która uderza w ziemię, a <b>grzmot</b> to huk.</p>
      <p>Schowaj się w <b>budynku</b>. Nie stój pod samotnym drzewem, zejdź z otwartej przestrzeni (łąka, boisko) i ze wzniesień, <b>wyjdź z wody</b>. Słyszysz grzmot? Burza jest na tyle blisko, że piorun może uderzyć – nie czekaj.</p>`,
    remember: 'Podsumowanie: wiatr nazywamy od tego, skąd wieje; temperaturę mierzymy w cieniu; w burzy – budynek, nigdy samotne drzewo ani woda.',
    check: { q: 'Burza zaskoczyła cię na boisku. Co robisz?', options: ['idę szybko do najbliższego budynku', 'chowam się pod samotnym drzewem', 'zostaję na środku boiska', 'wchodzę na wzgórze, żeby lepiej widzieć'], answer: 0, explain: 'Najbezpieczniejszy jest budynek. Samotne drzewo, otwarta przestrzeń i wzgórza są w czasie burzy niebezpieczne.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/skaly-gleba'] = [
  {
    title: 'Skały: lite, zwięzłe i luźne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy rodzaje skał. Lite – twardy blok, np. granit, piaskowiec, wapień. Zwięzłe – plastyczna bryłka, np. glina. Luźne – rozsypane ziarenka, np. piasek i żwir.">
      <rect x="8" y="8" width="122" height="184" rx="12" class="f5 s5"/>
      <rect x="139" y="8" width="122" height="184" rx="12" class="f2 s2"/>
      <rect x="270" y="8" width="122" height="184" rx="12" class="f4 s4"/>
      <path d="M30,96 L38,44 L76,30 L110,48 L108,96 Z" class="bg ln"/>
      <path d="M52,40 L60,66 L54,94 M86,36 L82,70" class="ln-thin"/>
      <path d="M160,92 C152,70 170,48 196,50 C222,44 244,62 238,84 C236,100 176,104 160,92 Z" class="bg ln"/>
      <path d="M186,70 C194,64 206,64 212,72" class="ln-thin"/>
      <g class="bg ln">
        <circle cx="300" cy="92" r="6"/><circle cx="314" cy="92" r="6"/><circle cx="328" cy="92" r="6"/><circle cx="342" cy="92" r="6"/><circle cx="356" cy="92" r="6"/><circle cx="370" cy="92" r="5"/>
        <circle cx="307" cy="80" r="6"/><circle cx="321" cy="80" r="6"/><circle cx="335" cy="80" r="6"/><circle cx="349" cy="80" r="6"/><circle cx="362" cy="80" r="5"/>
        <circle cx="314" cy="68" r="6"/><circle cx="328" cy="68" r="6"/><circle cx="342" cy="68" r="6"/><circle cx="355" cy="68" r="5"/>
        <circle cx="328" cy="56" r="6"/><circle cx="341" cy="56" r="5"/>
      </g>
      <text x="69" y="130" class="tx-b t5" text-anchor="middle">lite</text>
      <text x="200" y="130" class="tx-b t2" text-anchor="middle">zwięzłe</text>
      <text x="331" y="130" class="tx-b t4" text-anchor="middle">luźne</text>
      <g class="tx-s" text-anchor="middle">
        <text x="69" y="156">granit,</text><text x="69" y="174">piaskowiec, wapień</text>
        <text x="200" y="156">glina</text><text x="200" y="174">(mokra – lepi się)</text>
        <text x="331" y="156">piasek,</text><text x="331" y="174">żwir</text>
      </g>
    </svg>`,
    text: `<p><b>Skały</b> to składniki przyrody nieożywionej, z których zbudowana jest skorupa Ziemi. Znajdziesz je w górach, na plaży, na polu – i w budynkach.</p>
      <p>Dzielimy je według tego, jak mocno trzymają się ich ziarna (<b>spójność</b>): <b>lite</b> – ziarna mocno połączone, twarde; <b>zwięzłe</b> – połączone słabiej, mokre dają się formować; <b>luźne</b> – ziarna niepołączone, sypią się.</p>`,
    remember: 'Lite: granit, piaskowiec, wapień · zwięzłe: glina · luźne: piasek, żwir.',
    hook: 'Lite – „jak z litego kamienia”, zwięzłe – „zwięzłe jak plastelina”, luźne – „luźno jak w piaskownicy”.',
    check: { q: 'Do której grupy należy piasek?', options: ['skały lite', 'skały luźne', 'skały zwięzłe'], answer: 1, explain: 'Ziarna piasku nie są połączone – piasek się rozsypuje. To skała luźna.' },
  },
  {
    title: 'Badasz skały jak detektyw',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Cztery badania skał: barwa – oglądam przez lupę; twardość – próbuję zarysować gwoździem; woda – czy skała nasiąka; ocet – wapień musuje.">
      <rect x="8" y="8" width="188" height="92" rx="12" class="f1 s1"/>
      <rect x="204" y="8" width="188" height="92" rx="12" class="f2 s2"/>
      <rect x="8" y="110" width="188" height="92" rx="12" class="f3 s3"/>
      <rect x="204" y="110" width="188" height="92" rx="12" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="40">🔍 barwa</text><text x="298" y="40">📌 twardość</text><text x="102" y="142">💧 woda</text><text x="298" y="142">🧪 ocet</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="102" y="66">oglądam przez lupę</text><text x="102" y="84">granit – kolorowe ziarna</text>
        <text x="298" y="66">rysuję gwoździem</text><text x="298" y="84">granitu nie zarysujesz</text>
        <text x="102" y="168">glina nasiąka i lepi się</text><text x="102" y="186">piasek przepuszcza wodę</text>
        <text x="298" y="168">wapień musuje –</text><text x="298" y="186">pojawiają się pęcherzyki</text>
      </g>
    </svg>`,
    text: `<p>Skały badasz zmysłami i prostymi przyrządami: oglądasz <b>barwę</b> (najlepiej przez lupę), sprawdzasz <b>twardość</b> (czy da się zarysować gwoździem) i <b>odporność na wodę</b> (czy skała nasiąka albo się rozmywa).</p>
      <p><b>Wapień</b> ma swój znak rozpoznawczy: po polaniu octem musuje – wydziela się gaz. Pracuj w okularach ochronnych i pod opieką dorosłego.</p>`,
    remember: 'Barwa – lupa · twardość – gwóźdź · woda – czy nasiąka · ocet – wapień musuje.',
    hook: 'Wapień polany octem „syczy” jak napój gazowany.',
    check: { q: 'Skałę łatwo zarysować gwoździem, a po polaniu octem musuje. To…', options: ['granit', 'wapień', 'piasek'], answer: 1, explain: 'Wapień jest dość miękki i musuje pod wpływem octu. Granitu gwoździem nie zarysujesz.' },
  },
  {
    title: 'Skały w Polsce',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Przykłady skał w Polsce: granit – Karkonosze i Tatry, schody i pomniki; piaskowiec – Góry Stołowe; wapień – Wyżyna Krakowsko-Częstochowska, wapno i cement; głaz narzutowy – przyniósł go lądolód ze Skandynawii.">
      <rect x="8" y="6" width="384" height="46" rx="10" class="f5 s5"/>
      <rect x="8" y="58" width="384" height="46" rx="10" class="f2 s2"/>
      <rect x="8" y="110" width="384" height="46" rx="10" class="f1 s1"/>
      <rect x="8" y="162" width="384" height="46" rx="10" class="f3 s3"/>
      <text x="22" y="27" class="tx-b">granit</text><text x="378" y="27" class="tx-s" text-anchor="end">schody, pomniki</text><text x="22" y="45" class="tx-s">Karkonosze, Tatry</text>
      <text x="22" y="79" class="tx-b">piaskowiec</text><text x="378" y="79" class="tx-s" text-anchor="end">sklejone ziarna piasku</text><text x="22" y="97" class="tx-s">Góry Stołowe</text>
      <text x="22" y="131" class="tx-b">wapień</text><text x="378" y="131" class="tx-s" text-anchor="end">wapno, cement</text><text x="22" y="149" class="tx-s">Wyżyna Krakowsko-Częstochowska</text>
      <text x="22" y="183" class="tx-b">głaz narzutowy</text><text x="22" y="201" class="tx-s">przyniósł go lądolód ze Skandynawii</text>
    </svg>`,
    text: `<p>W polskich górach i na wyżynach skały wychodzą na powierzchnię. <b>Granit</b> spotkasz m.in. w Karkonoszach i Tatrach, <b>piaskowiec</b> – w Górach Stołowych, <b>wapień</b> – na Wyżynie Krakowsko-Częstochowskiej.</p>
      <p>Na nizinach często leżą <b>głazy narzutowe</b> – duże kamienie, które dawno temu przyniósł lądolód ze Skandynawii. Z <b>gliny</b> wypala się cegły, a <b>piasek i żwir</b> są potrzebne na budowach.</p>`,
    remember: 'Granit – Karkonosze, Tatry · piaskowiec – Góry Stołowe · wapień – Wyżyna Krakowsko-Częstochowska.',
    hook: 'Piaskowiec – sama nazwa mówi, że to „sklejony piasek”.',
  },
  {
    title: 'Z czego jest gleba?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Przekrój gleby. Na górze trawa. Pod nią ciemna warstwa z próchnicą i dżdżownicą, niżej jaśniejsza warstwa z okruchami skał. Między grudkami jest woda i powietrze.">
      <rect x="10" y="40" width="220" height="80" class="f2 s2"/>
      <rect x="10" y="120" width="220" height="90" class="f4 s4"/>
      <g class="ln s3 sw"><path d="M20,40 L24,22 M40,40 L36,18 M60,40 L66,24 M90,40 L86,20 M120,40 L126,22 M150,40 L146,18 M180,40 L186,24 M210,40 L206,20"/></g>
      <path d="M60,80 C80,60 100,100 120,80 C130,70 140,74 146,82" class="ln s5" stroke-width="7" stroke-linecap="round"/>
      <g class="bg ln"><circle cx="40" cy="150" r="10"/><circle cx="100" cy="176" r="13"/><circle cx="170" cy="150" r="9"/><circle cx="200" cy="190" r="11"/><circle cx="60" cy="192" r="7"/></g>
      <g class="ln-thin"><circle cx="180" cy="70" r="5"/><circle cx="196" cy="94" r="4"/><circle cx="140" cy="160" r="4"/></g>
      <text x="36" y="104" class="tx">💧</text><text x="120" y="146" class="tx">💧</text>
      <g class="tx">
        <text x="244" y="62" class="t2">próchnica</text>
        <text x="244" y="90" class="tx-s">organizmy, np.</text><text x="244" y="106" class="tx-s">dżdżownice</text>
        <text x="244" y="150" class="t4">okruchy skał</text>
        <text x="244" y="180" class="tx-s">woda i powietrze</text><text x="244" y="196" class="tx-s">między grudkami</text>
      </g>
    </svg>`,
    text: `<p><b>Gleba</b> to wierzchnia warstwa ziemi, w której rosną rośliny. Składa się z <b>okruchów skał</b>, <b>próchnicy</b>, <b>wody</b>, <b>powietrza</b> i <b>organizmów</b>.</p>
      <p><b>Próchnica</b> to ciemna substancja z rozłożonych szczątków roślin i zwierząt – rozkładają je bakterie i grzyby. Daje roślinom składniki odżywcze. Dżdżownice drążą korytarze i mieszają glebę, więc dociera do niej powietrze i woda. Gleba powstaje bardzo powoli – przez setki lat.</p>`,
    remember: 'Gleba = okruchy skał + próchnica + woda + powietrze + organizmy.',
    hook: 'Dżdżownica to mały rolnik – cały czas „orze” glebę pod ziemią.',
    check: { q: 'Co to jest próchnica?', options: ['ciemna substancja z rozłożonych szczątków organizmów', 'rodzaj skały litej', 'woda w glebie'], answer: 0, explain: 'Próchnica powstaje z rozłożonych szczątków roślin i zwierząt. Użyźnia glebę.' },
  },
  {
    title: 'Gleba w słoiku i gleba dla roślin',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Słoik z wodą i glebą po odstaniu. Na dnie żwir i piasek, wyżej drobne cząstki – muł i glina, potem woda, a na powierzchni pływają szczątki roślin.">
      <rect x="60" y="20" width="120" height="16" rx="4" class="f5 s5"/>
      <path d="M50,40 L190,40 L190,206 C190,214 184,220 176,220 L64,220 C56,220 50,214 50,206 Z" class="f1"/>
      <rect x="51" y="176" width="138" height="43" class="f4"/>
      <rect x="51" y="146" width="138" height="30" class="f2"/>
      <g class="bg ln"><circle cx="70" cy="200" r="7"/><circle cx="96" cy="206" r="6"/><circle cx="124" cy="196" r="8"/><circle cx="154" cy="204" r="6"/><circle cx="176" cy="196" r="5"/></g>
      <g class="ln s3 sw"><path d="M64,60 L80,56 M100,62 L112,58 M140,58 L160,62"/></g>
      <path d="M50,40 L190,40 L190,206 C190,214 184,220 176,220 L64,220 C56,220 50,214 50,206 Z" class="ln"/>
      <g class="ln-thin"><line x1="194" y1="60" x2="226" y2="60"/><line x1="194" y1="110" x2="226" y2="110"/><line x1="194" y1="160" x2="226" y2="160"/><line x1="194" y1="198" x2="226" y2="198"/></g>
      <text x="232" y="65" class="tx t3">szczątki roślin</text>
      <text x="232" y="115" class="tx t1">woda</text>
      <text x="232" y="165" class="tx t2">muł, glina</text>
      <text x="232" y="203" class="tx t4">żwir, piasek</text>
    </svg>`,
    text: `<p>Wsyp glebę do słoika z wodą, zamieszaj i odstaw. Najcięższe ziarna (żwir, piasek) opadną na dno, drobniejsze (muł, glina) ułożą się wyżej, a szczątki roślin wypłyną na wierzch.</p>
      <ul>
        <li><b>Gleba piaszczysta</b> – jasna i sypka; woda szybko przez nią przecieka, mało próchnicy.</li>
        <li><b>Gleba gliniasta</b> – zbita; zatrzymuje wodę, po deszczu robi się błoto.</li>
        <li><b>Ziemia ogrodowa</b> – ciemna i pulchna, dużo próchnicy (np. z kompostu). Rośliny rosną w niej najlepiej.</li>
      </ul>`,
    remember: 'Ciemna gleba – zwykle dużo próchnicy – dobra dla roślin.',
    hook: 'Słoik działa jak sito w zwolnionym tempie: ciężkie na dół, lekkie do góry.',
    check: { q: 'W której glebie rośliny będą rosły najlepiej?', options: ['w czystym piasku', 'w ziemi ogrodowej z dużą ilością próchnicy', 'w zbitej glinie'], answer: 1, explain: 'Ziemia ogrodowa ma dużo próchnicy (składników odżywczych), trzyma wodę i ma powietrze.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/powietrze'] = [
  {
    title: 'Co jest w powietrzu?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Siatka 100 kratek: 78 niebieskich – azot, 21 pomarańczowych – tlen, 1 zielona – inne gazy, m.in. argon i dwutlenek węgla.">
      <g class="f1 s1"><rect x="20" y="20" width="14" height="14" rx="2"/><rect x="36" y="20" width="14" height="14" rx="2"/><rect x="52" y="20" width="14" height="14" rx="2"/><rect x="68" y="20" width="14" height="14" rx="2"/><rect x="84" y="20" width="14" height="14" rx="2"/><rect x="100" y="20" width="14" height="14" rx="2"/><rect x="116" y="20" width="14" height="14" rx="2"/><rect x="132" y="20" width="14" height="14" rx="2"/><rect x="148" y="20" width="14" height="14" rx="2"/><rect x="164" y="20" width="14" height="14" rx="2"/><rect x="20" y="36" width="14" height="14" rx="2"/><rect x="36" y="36" width="14" height="14" rx="2"/><rect x="52" y="36" width="14" height="14" rx="2"/><rect x="68" y="36" width="14" height="14" rx="2"/><rect x="84" y="36" width="14" height="14" rx="2"/><rect x="100" y="36" width="14" height="14" rx="2"/><rect x="116" y="36" width="14" height="14" rx="2"/><rect x="132" y="36" width="14" height="14" rx="2"/><rect x="148" y="36" width="14" height="14" rx="2"/><rect x="164" y="36" width="14" height="14" rx="2"/><rect x="20" y="52" width="14" height="14" rx="2"/><rect x="36" y="52" width="14" height="14" rx="2"/><rect x="52" y="52" width="14" height="14" rx="2"/><rect x="68" y="52" width="14" height="14" rx="2"/><rect x="84" y="52" width="14" height="14" rx="2"/><rect x="100" y="52" width="14" height="14" rx="2"/><rect x="116" y="52" width="14" height="14" rx="2"/><rect x="132" y="52" width="14" height="14" rx="2"/><rect x="148" y="52" width="14" height="14" rx="2"/><rect x="164" y="52" width="14" height="14" rx="2"/><rect x="20" y="68" width="14" height="14" rx="2"/><rect x="36" y="68" width="14" height="14" rx="2"/><rect x="52" y="68" width="14" height="14" rx="2"/><rect x="68" y="68" width="14" height="14" rx="2"/><rect x="84" y="68" width="14" height="14" rx="2"/><rect x="100" y="68" width="14" height="14" rx="2"/><rect x="116" y="68" width="14" height="14" rx="2"/><rect x="132" y="68" width="14" height="14" rx="2"/><rect x="148" y="68" width="14" height="14" rx="2"/><rect x="164" y="68" width="14" height="14" rx="2"/><rect x="20" y="84" width="14" height="14" rx="2"/><rect x="36" y="84" width="14" height="14" rx="2"/><rect x="52" y="84" width="14" height="14" rx="2"/><rect x="68" y="84" width="14" height="14" rx="2"/><rect x="84" y="84" width="14" height="14" rx="2"/><rect x="100" y="84" width="14" height="14" rx="2"/><rect x="116" y="84" width="14" height="14" rx="2"/><rect x="132" y="84" width="14" height="14" rx="2"/><rect x="148" y="84" width="14" height="14" rx="2"/><rect x="164" y="84" width="14" height="14" rx="2"/><rect x="20" y="100" width="14" height="14" rx="2"/><rect x="36" y="100" width="14" height="14" rx="2"/><rect x="52" y="100" width="14" height="14" rx="2"/><rect x="68" y="100" width="14" height="14" rx="2"/><rect x="84" y="100" width="14" height="14" rx="2"/><rect x="100" y="100" width="14" height="14" rx="2"/><rect x="116" y="100" width="14" height="14" rx="2"/><rect x="132" y="100" width="14" height="14" rx="2"/><rect x="148" y="100" width="14" height="14" rx="2"/><rect x="164" y="100" width="14" height="14" rx="2"/><rect x="20" y="116" width="14" height="14" rx="2"/><rect x="36" y="116" width="14" height="14" rx="2"/><rect x="52" y="116" width="14" height="14" rx="2"/><rect x="68" y="116" width="14" height="14" rx="2"/><rect x="84" y="116" width="14" height="14" rx="2"/><rect x="100" y="116" width="14" height="14" rx="2"/><rect x="116" y="116" width="14" height="14" rx="2"/><rect x="132" y="116" width="14" height="14" rx="2"/><rect x="148" y="116" width="14" height="14" rx="2"/><rect x="164" y="116" width="14" height="14" rx="2"/><rect x="20" y="132" width="14" height="14" rx="2"/><rect x="36" y="132" width="14" height="14" rx="2"/><rect x="52" y="132" width="14" height="14" rx="2"/><rect x="68" y="132" width="14" height="14" rx="2"/><rect x="84" y="132" width="14" height="14" rx="2"/><rect x="100" y="132" width="14" height="14" rx="2"/><rect x="116" y="132" width="14" height="14" rx="2"/><rect x="132" y="132" width="14" height="14" rx="2"/></g>
      <g class="f2 s2"><rect x="148" y="132" width="14" height="14" rx="2"/><rect x="164" y="132" width="14" height="14" rx="2"/><rect x="20" y="148" width="14" height="14" rx="2"/><rect x="36" y="148" width="14" height="14" rx="2"/><rect x="52" y="148" width="14" height="14" rx="2"/><rect x="68" y="148" width="14" height="14" rx="2"/><rect x="84" y="148" width="14" height="14" rx="2"/><rect x="100" y="148" width="14" height="14" rx="2"/><rect x="116" y="148" width="14" height="14" rx="2"/><rect x="132" y="148" width="14" height="14" rx="2"/><rect x="148" y="148" width="14" height="14" rx="2"/><rect x="164" y="148" width="14" height="14" rx="2"/><rect x="20" y="164" width="14" height="14" rx="2"/><rect x="36" y="164" width="14" height="14" rx="2"/><rect x="52" y="164" width="14" height="14" rx="2"/><rect x="68" y="164" width="14" height="14" rx="2"/><rect x="84" y="164" width="14" height="14" rx="2"/><rect x="100" y="164" width="14" height="14" rx="2"/><rect x="116" y="164" width="14" height="14" rx="2"/><rect x="132" y="164" width="14" height="14" rx="2"/><rect x="148" y="164" width="14" height="14" rx="2"/></g>
      <g class="f3 s3"><rect x="164" y="164" width="14" height="14" rx="2"/></g>
      <rect x="200" y="30" width="20" height="20" rx="3" class="f1 s1"/><text x="230" y="46" class="tx-b t1">azot – 78</text>
      <rect x="200" y="74" width="20" height="20" rx="3" class="f2 s2"/><text x="230" y="90" class="tx-b t2">tlen – 21</text>
      <rect x="200" y="118" width="20" height="20" rx="3" class="f3 s3"/><text x="230" y="134" class="tx-b t3">inne – 1</text>
      <text x="230" y="154" class="tx-s">argon, dwutlenek węgla…</text>
      <text x="200" y="186" class="tx-s">na każde 100 części powietrza</text>
    </svg>`,
    text: `<p>Powietrza nie widać, ale ono jest: <b>zajmuje miejsce</b> („pusta” butelka jest pełna powietrza) i <b>ma masę</b> (napompowana piłka waży trochę więcej niż pusta).</p>
      <p>Powietrze to <b>mieszanina gazów</b>. Najwięcej jest <b>azotu</b> (ok. 78 części na 100), potem <b>tlenu</b> (ok. 21). Reszta to m.in. argon i dwutlenek węgla. Do tego para wodna i pyły.</p>`,
    remember: 'Azot ok. 78 · tlen ok. 21 · inne gazy ok. 1 (na 100 części powietrza).',
    hook: 'Najwięcej jest azotu, nie tlenu – „A” jak azot jest na początku alfabetu i na początku listy.',
    check: { q: 'Którego gazu jest w powietrzu najwięcej?', options: ['tlenu', 'azotu', 'dwutlenku węgla'], answer: 1, explain: 'Azot to ok. 78 części na 100 części powietrza.' },
  },
  {
    title: 'Tlen podtrzymuje palenie, dwutlenek węgla – gasi',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwa słoiki. W słoiku z tlenem tląca się drzazga zapala się płomieniem. W słoiku z dwutlenkiem węgla płomień świeczki gaśnie, unosi się dymek.">
      <path d="M40,60 L40,180 C40,190 48,196 58,196 L162,196 C172,196 180,190 180,180 L180,60" class="ln"/>
      <path d="M220,60 L220,180 C220,190 228,196 238,196 L342,196 C352,196 360,190 360,180 L360,60" class="ln"/>
      <line x1="110" y1="190" x2="110" y2="120" class="ln s2" stroke-width="5" stroke-linecap="round"/>
      <text x="110" y="116" class="tx-b" text-anchor="middle">🔥</text>
      <rect x="276" y="140" width="28" height="54" rx="4" class="f4 s4 sw"/><line x1="290" y1="140" x2="290" y2="128" class="ln"/>
      <path d="M290,124 C282,114 298,106 290,96 C284,88 294,80 290,72" class="ln-thin"/>
      <text x="110" y="30" class="tx-b t2" text-anchor="middle">tlen</text>
      <text x="110" y="50" class="tx-s" text-anchor="middle">drzazga zapala się</text>
      <text x="290" y="30" class="tx-b t1" text-anchor="middle">dwutlenek węgla</text>
      <text x="290" y="50" class="tx-s" text-anchor="middle">płomień gaśnie</text>
    </svg>`,
    text: `<p><b>Tlen</b> i <b>dwutlenek węgla</b> to gazy bezbarwne i bez zapachu – na oko ich nie odróżnisz. Różnią się tym, co robią z ogniem.</p>
      <ul>
        <li>Tlen <b>podtrzymuje palenie</b>: tląca się drzazga w czystym tlenie rozbłyska płomieniem. Tlenu potrzebujemy też do <b>oddychania</b>.</li>
        <li>Dwutlenek węgla <b>nie podtrzymuje palenia</b>: płomień w nim gaśnie – dlatego jest w niektórych gaśnicach. Wydychamy go, a rośliny pobierają go do fotosyntezy.</li>
      </ul>`,
    remember: 'Tlen – podtrzymuje palenie i oddychanie. Dwutlenek węgla – gasi płomień.',
    hook: 'Tlen to „paliwo dla ognia”, dwutlenek węgla to „gaśnica w powietrzu”.',
    check: { q: 'Który gaz podtrzymuje palenie?', options: ['tlen', 'dwutlenek węgla', 'azot'], answer: 0, explain: 'W tlenie tląca się drzazga zapala się płomieniem. Dwutlenek węgla i azot nie podtrzymują palenia.' },
  },
  {
    title: 'Jak rozpoznać dwutlenek węgla?',
    svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Dwie szklanki z wodą wapienną. Pierwsza przejrzysta – przed doświadczeniem. Do drugiej wdmuchano przez słomkę wydychane powietrze – woda zmętniała. Obok butelka wody gazowanej z bąbelkami dwutlenku węgla.">
      <path d="M30,80 L40,190 L110,190 L120,80" class="f1"/>
      <path d="M150,80 L160,190 L230,190 L240,80" class="f4"/>
      <path d="M30,60 L40,190 L110,190 L120,60 M150,60 L160,190 L230,190 L240,60" class="ln"/>
      <line x1="196" y1="30" x2="196" y2="176" class="ln s2 sw"/>
      <g class="ln-thin"><circle cx="188" cy="160" r="4"/><circle cx="204" cy="146" r="4"/><circle cx="194" cy="128" r="3"/></g>
      <text x="75" y="44" class="tx-s" text-anchor="middle">woda wapienna</text>
      <text x="75" y="206" class="tx-s" text-anchor="middle">przejrzysta</text>
      <text x="195" y="206" class="tx-s" text-anchor="middle">mętnieje</text>
      <text x="196" y="20" class="tx-s" text-anchor="middle">wydychane powietrze</text>
      <path d="M300,70 L300,190 C300,196 304,200 310,200 L350,200 C356,200 360,196 360,190 L360,70 L346,54 L346,36 L314,36 L314,54 Z" class="f1 s1 sw"/>
      <g class="bg ln"><circle cx="318" cy="170" r="4"/><circle cx="336" cy="150" r="5"/><circle cx="322" cy="124" r="4"/><circle cx="342" cy="104" r="4"/><circle cx="326" cy="88" r="3"/></g>
      <text x="330" y="226" class="tx-s" text-anchor="middle">bąbelki</text>
    </svg>`,
    text: `<p>Dwutlenek węgla wykrywamy <b>wodą wapienną</b>. Gdy przez słomkę wdmuchujesz do niej wydychane powietrze, woda wapienna <b>mętnieje</b> – to znak, że jest w nim dwutlenek węgla.</p>
      <p>Dwutlenek węgla <b>rozpuszcza się w wodzie</b> – to on tworzy bąbelki w wodzie gazowanej. Jest też <b>cięższy od powietrza</b>, więc gromadzi się przy ziemi, np. w piwnicach.</p>`,
    remember: 'Woda wapienna mętnieje → jest dwutlenek węgla.',
    hook: '„Mętna woda wapienna – dwutlenek węgla wydany”.',
    check: { q: 'Co tworzy bąbelki w wodzie gazowanej?', options: ['tlen', 'dwutlenek węgla', 'azot'], answer: 1, explain: 'Do wody gazowanej dodaje się dwutlenek węgla, który rozpuszcza się w wodzie.' },
  },
  {
    title: 'Smog – skąd się bierze?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Miejscowość w dolinie między wzgórzami. Z kominów domów i z samochodu wydobywa się dym. Nad doliną zalega szara warstwa smogu, bo nie ma wiatru.">
      <path d="M0,200 L0,70 C40,90 80,150 130,170 L270,170 C320,150 360,90 400,70 L400,200 Z" class="f3 s3"/>
      <ellipse cx="200" cy="112" rx="170" ry="28" class="ln-thin dash"/>
      <text x="200" y="118" class="tx-b" text-anchor="middle">SMOG</text>
      <text x="120" y="168" class="tx-b">🏠</text><text x="180" y="168" class="tx-b">🏠</text><text x="240" y="168" class="tx-b">🏭</text><text x="290" y="196" class="tx-b">🚗</text>
      <g class="ln-thin"><path d="M132,146 C126,138 138,132 132,124"/><path d="M192,146 C186,138 198,132 192,124"/><path d="M254,146 C248,138 260,132 254,124"/></g>
      <text x="20" y="28" class="tx-s">❄️ zima – dużo pieców</text>
      <text x="380" y="28" class="tx-s" text-anchor="end">🍃 brak wiatru</text>
      <text x="200" y="216" class="tx-s" text-anchor="middle">dym + mgła = smog</text>
    </svg>`,
    text: `<p>Powietrze zanieczyszczają <b>dymy i spaliny</b> – z pieców (zwłaszcza gdy ktoś pali w nich śmieci), z samochodów, fabryk i elektrowni. Unoszą się w nich drobne <b>pyły</b> i szkodliwe gazy.</p>
      <p><b>Smog</b> (ang. <i>smoke</i> – dym + <i>fog</i> – mgła) tworzy się, gdy dymu jest dużo, a <b>nie ma wiatru</b>, który by go rozwiał – najczęściej zimą, zwłaszcza w dolinach. Smog powoduje kaszel, łzawienie oczu, trudności z oddychaniem, a po latach – choroby płuc i serca.</p>`,
    remember: 'Smog = dużo dymu i spalin + brak wiatru (często zimą, w dolinach).',
    hook: 'Smog to „dymna mgła”: smoke + fog.',
    check: { q: 'Kiedy najłatwiej o smog?', options: ['zimą, gdy nie ma wiatru', 'latem, podczas silnego wiatru', 'w czasie ulewy'], answer: 0, explain: 'Zimą pracuje dużo pieców, a bez wiatru zanieczyszczenia zalegają nad miejscowością.' },
  },
  {
    title: 'Co możesz zrobić dla czystego powietrza?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Dobre nawyki: chodzę pieszo i jeżdżę rowerem, wybieram autobus lub tramwaj, sadzę drzewa, gaszę zbędne światło. Zły nawyk: palenie śmieci.">
      <rect x="8" y="8" width="384" height="40" rx="10" class="f3 s3"/>
      <rect x="8" y="54" width="384" height="40" rx="10" class="f3 s3"/>
      <rect x="8" y="100" width="384" height="40" rx="10" class="f3 s3"/>
      <rect x="8" y="146" width="384" height="40" rx="10" class="f3 s3"/>
      <rect x="8" y="192" width="384" height="24" rx="8" class="f2 s2"/>
      <g class="tx"><text x="22" y="34">✅ 🚲 pieszo i rowerem</text><text x="22" y="80">✅ 🚌 autobus, tramwaj</text><text x="22" y="126">✅ 🌳 sadzę drzewa, dbam o zieleń</text><text x="22" y="172">✅ 💡 gaszę zbędne światło</text></g>
      <text x="22" y="209" class="tx-s">❌ nigdy nie pal śmieci – trujący dym</text>
    </svg>`,
    text: `<p>Spalanie węgla, ropy i gazu dodaje do powietrza <b>dwutlenek węgla</b>. Im więcej go w powietrzu, tym mocniej ogrzewa się Ziemia – to jedna z przyczyn <b>zmiany klimatu</b>.</p>
      <p>Mniej spalin to czystsze powietrze i mniej dwutlenku węgla. Rośliny zatrzymują pyły i pobierają dwutlenek węgla. Gdy aplikacja z pomiarami pokazuje złą jakość powietrza, ogranicz wysiłek na dworze.</p>`,
    remember: 'Nie pal śmieci · wybieraj rower i komunikację · oszczędzaj energię · sadź drzewa.',
    check: { q: 'Które działanie pomaga dbać o czyste powietrze?', options: ['palenie liści w ogródku', 'jazda rowerem zamiast samochodem', 'zostawianie włączonego światła'], answer: 1, explain: 'Rower nie wytwarza spalin. Palenie liści zanieczyszcza powietrze, a marnowanie prądu zwiększa spalanie w elektrowniach.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/ochrona'] = [
  {
    title: 'Po co chronimy przyrodę?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Schemat: ludzie wycinają lasy, budują drogi i zanieczyszczają środowisko, więc rośliny i zwierzęta tracą miejsca do życia. Dlatego prawo – ustawa o ochronie przyrody – chroni najcenniejsze miejsca i gatunki.">
      <defs><marker id="a-k4p-ochr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="8" width="360" height="50" rx="12" class="f2 s2"/>
      <rect x="20" y="80" width="360" height="50" rx="12" class="f4 s4"/>
      <rect x="20" y="152" width="360" height="50" rx="12" class="f3 s3"/>
      <text x="200" y="39" class="tx" text-anchor="middle">🪓 🏗️ 🏭 wycinka, budowy, zanieczyszczenia</text>
      <text x="200" y="111" class="tx" text-anchor="middle">🐾 gatunki tracą miejsca do życia</text>
      <text x="200" y="183" class="tx" text-anchor="middle">📜 prawo chroni cenne miejsca i gatunki</text>
      <line x1="200" y1="60" x2="200" y2="76" class="ln s2 sw" marker-end="url(#a-k4p-ochr-1)"/>
      <line x1="200" y1="132" x2="200" y2="148" class="ln s2 sw" marker-end="url(#a-k4p-ochr-1)"/>
    </svg>`,
    text: `<p>Ludzie wycinają lasy, osuszają bagna, budują drogi i domy, zanieczyszczają wodę i powietrze. Przez to wiele roślin, zwierząt i grzybów traci miejsca do życia i staje się rzadkich.</p>
      <p>Dlatego najcenniejsze miejsca i gatunki chroni <b>prawo</b> – ustawa o ochronie przyrody. Wymienia ona 10 <b>form ochrony przyrody</b>.</p>`,
    remember: 'Ochrona przyrody = dbanie o to, by rzadkie gatunki i cenne miejsca przetrwały. Zasady określa ustawa o ochronie przyrody.',
    hook: 'Przyroda to dom zwierząt i roślin – ochrona przyrody to „zakaz burzenia cudzego domu”.',
  },
  {
    title: 'Formy ochrony – od dużej do małej',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Trzy prostokąty od największego: park narodowy – cała przyroda, co najmniej 1000 ha; rezerwat przyrody – mniejszy obszar w stanie naturalnym; pomnik przyrody – pojedyncze drzewo, głaz, źródło. Obok: ochrona gatunkowa – wybrane gatunki chronione wszędzie.">
      <rect x="8" y="8" width="250" height="214" rx="14" class="f3 s3"/>
      <rect x="24" y="78" width="200" height="130" rx="12" class="f1 s1"/>
      <rect x="40" y="146" width="120" height="50" rx="10" class="f4 s4"/>
      <text x="20" y="32" class="tx-b t3">park narodowy</text>
      <text x="20" y="54" class="tx-s">cała przyroda, min. 1000 ha</text>
      <text x="36" y="102" class="tx-b t1">rezerwat przyrody</text>
      <text x="36" y="124" class="tx-s">mniejszy, stan naturalny</text>
      <text x="100" y="168" class="tx-s" text-anchor="middle">pomnik przyrody</text>
      <text x="100" y="188" class="tx-s" text-anchor="middle">🌳 drzewo, głaz</text>
      <rect x="268" y="8" width="124" height="214" rx="14" class="f5 s5"/>
      <text x="330" y="36" class="tx-b t5" text-anchor="middle">ochrona</text>
      <text x="330" y="58" class="tx-b t5" text-anchor="middle">gatunkowa</text>
      <text x="330" y="110" class="tx-b" text-anchor="middle">🌸 🐾 🍄</text>
      <text x="330" y="160" class="tx-s" text-anchor="middle">chronione</text>
      <text x="330" y="178" class="tx-s" text-anchor="middle">wszędzie, gdzie</text>
      <text x="330" y="196" class="tx-s" text-anchor="middle">występują</text>
    </svg>`,
    text: `<ul>
      <li><b>Park narodowy</b> – duży obszar (co najmniej 1000 ha), w którym chroni się <b>całą przyrodę</b> i krajobraz.</li>
      <li><b>Rezerwat przyrody</b> – mniejszy obszar zachowany w stanie naturalnym lub mało zmienionym, np. fragment starego lasu, torfowisko.</li>
      <li><b>Park krajobrazowy</b> – chroni przyrodę, historię, kulturę i krajobraz; mieszkają tam ludzie.</li>
      <li><b>Pomnik przyrody</b> – pojedynczy twór przyrody: okazałe drzewo, źródło, wodospad, skałka, jaskinia, głaz narzutowy.</li>
      <li><b>Ochrona gatunkowa</b> – wybrane gatunki roślin, zwierząt i grzybów są chronione wszędzie.</li>
    </ul>`,
    remember: 'Park narodowy (największa ochrona) · rezerwat · park krajobrazowy · pomnik przyrody · ochrona gatunkowa.',
    hook: 'Pomnik przyrody to „pomnik”, którego nie zbudował człowiek – postawiła go sama przyroda.',
    check: { q: 'Okazały stary dąb w twojej miejscowości może być…', options: ['parkiem narodowym', 'pomnikiem przyrody', 'rezerwatem przyrody'], answer: 1, explain: 'Pojedyncze drzewo, źródło czy głaz to pomnik przyrody. Park narodowy i rezerwat to obszary.' },
  },
  {
    title: '23 parki narodowe',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="W Polsce są 23 parki narodowe. Przykłady: Białowieski – stara puszcza i żubry; Tatrzański – najwyższe góry; Słowiński – ruchome wydmy nad morzem; Kampinoski – puszcza obok Warszawy; Ojcowski – wapienne skały i jaskinie.">
      <rect x="8" y="8" width="110" height="214" rx="14" class="f3 s3"/>
      <text x="63" y="110" class="tx-b t3" text-anchor="middle" style="font-size:44px">23</text>
      <text x="63" y="140" class="tx-s" text-anchor="middle">parki</text><text x="63" y="158" class="tx-s" text-anchor="middle">narodowe</text>
      <g class="tx">
        <text x="130" y="34">🌲 Białowieski</text><text x="130" y="76">⛰️ Tatrzański</text><text x="130" y="118">🏖️ Słowiński</text><text x="130" y="160">🌳 Kampinoski</text><text x="130" y="202">🏞️ Ojcowski</text>
      </g>
      <g class="tx-s">
        <text x="150" y="52">puszcza, żubry</text><text x="150" y="94">najwyższe polskie góry</text><text x="150" y="136">ruchome wydmy nad morzem</text><text x="150" y="178">puszcza obok Warszawy</text><text x="150" y="220">wapienne skały, jaskinie</text>
      </g>
    </svg>`,
    text: `<p>Według ustawy o ochronie przyrody w Polsce są <b>23 parki narodowe</b> (stan z 2026 r.). Każdy chroni inny krajobraz: puszcze, góry, wybrzeże, bagna, jeziora.</p>
      <p>W <b>Białowieskim</b> rośnie stara puszcza, w której żyją żubry. <b>Tatrzański</b> chroni najwyższe polskie góry, <b>Słowiński</b> – ruchome wydmy nad Bałtykiem.</p>`,
    remember: 'W Polsce są 23 parki narodowe. Białowieski – żubry · Tatrzański – Tatry · Słowiński – wydmy.',
    hook: 'Sprawdź, który park narodowy jest najbliżej twojego domu – i zaplanuj wycieczkę!',
    check: { q: 'Który park narodowy słynie z ruchomych wydm?', options: ['Tatrzański', 'Słowiński', 'Białowieski'], answer: 1, explain: 'Słowiński Park Narodowy leży nad morzem – wiatr przesuwa tam wydmy.' },
  },
  {
    title: 'Jak się zachować w parku narodowym?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Zasady w parku narodowym: idę wyznaczonym szlakiem, zachowuję ciszę, zabieram śmieci. Nie zrywam roślin i nie zbieram grzybów, nie płoszę zwierząt, nie palę ognisk.">
      <rect x="8" y="8" width="188" height="204" rx="12" class="f3 s3"/>
      <rect x="204" y="8" width="188" height="204" rx="12" class="f2 s2"/>
      <text x="102" y="36" class="tx-b t3" text-anchor="middle">✅ tak</text>
      <text x="298" y="36" class="tx-b t2" text-anchor="middle">❌ nie</text>
      <g class="tx">
        <text x="20" y="80">🥾 idę szlakiem</text><text x="20" y="126">🤫 zachowuję ciszę</text><text x="20" y="172">🎒 zabieram śmieci</text>
        <text x="216" y="80">🌷 nie zrywam</text><text x="216" y="126">🦌 nie płoszę</text><text x="216" y="172">🔥 nie palę ognia</text>
      </g>
    </svg>`,
    text: `<p>W parku narodowym i w rezerwacie ustawa zakazuje m.in.: chodzenia i jazdy rowerem <b>poza szlakami</b>, zrywania roślin i zbierania grzybów, płoszenia i chwytania zwierząt, niszczenia gniazd i nor, palenia ognisk i <b>zakłócania ciszy</b> (poza miejscami wyznaczonymi). Nie wolno też zabierać skał i skamieniałości.</p>`,
    remember: 'Idź szlakiem, nie hałasuj, niczego nie zrywaj i nie zabieraj, śmieci zabierz ze sobą.',
    hook: 'Zostaw po sobie tylko ślady butów – i to tylko na szlaku.',
    check: { q: 'Co wolno robić w parku narodowym?', options: ['zerwać kwiaty na bukiet', 'podziwiać przyrodę, idąc szlakiem', 'zabrać ładny kamień na pamiątkę'], answer: 1, explain: 'W parku narodowym nie wolno zrywać roślin ani zabierać skał. Wolno spacerować wyznaczonym szlakiem i podziwiać przyrodę.' },
  },
  {
    title: 'Ochrona przyrody tuż obok ciebie',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Stare, okazałe drzewo z tabliczką „pomnik przyrody” i duży głaz narzutowy. Obok napis: gatunki chronione – chronione wszędzie, także w twojej okolicy.">
      <rect x="66" y="110" width="24" height="80" class="f2 s2 sw"/>
      <circle cx="78" cy="78" r="56" class="f3 s3 sw"/>
      <line x1="152" y1="176" x2="152" y2="190" class="ln"/>
      <rect x="96" y="146" width="112" height="30" rx="4" class="f4 s4"/>
      <text x="152" y="166" class="tx-s" text-anchor="middle">pomnik przyrody</text>
      <path d="M210,190 C206,160 226,140 256,142 C286,138 304,160 300,190 Z" class="f5 s5 sw"/>
      <text x="255" y="206" class="tx-s" text-anchor="middle">głaz narzutowy</text>
      <line x1="10" y1="190" x2="390" y2="190" class="ln-thin"/>
      <text x="390" y="40" class="tx-b" text-anchor="end">gatunki chronione</text>
      <text x="390" y="64" class="tx-s" text-anchor="end">są chronione wszędzie –</text>
      <text x="390" y="82" class="tx-s" text-anchor="end">także w twojej okolicy</text>
    </svg>`,
    text: `<p>Ochrona przyrody to nie tylko daleki park narodowy. W wielu miejscowościach są <b>pomniki przyrody</b> – stare drzewa albo duże głazy z tabliczką. W okolicy może być rezerwat albo park krajobrazowy.</p>
      <p>Gatunków chronionych nie wolno zrywać, zabijać, płoszyć ani niszczyć ich gniazd – <b>wszędzie</b>, nie tylko w parku. Przykład skutecznej ochrony to <b>żubr</b>: na wolności wyginął na początku XX wieku, a dzięki ochronie znów żyje w polskich lasach.</p>`,
    remember: 'Ochrona gatunkowa obowiązuje wszędzie, nie tylko w parkach i rezerwatach.',
    check: { q: 'Prawda czy fałsz? Gatunki chronione są chronione tylko w parkach narodowych.', options: ['Prawda', 'Fałsz'], answer: 1, explain: 'Ochrona gatunkowa obowiązuje wszędzie, gdzie dany gatunek występuje.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/uklad-sloneczny'] = [
  {
    title: 'Słońce i osiem planet',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Model Układu Słonecznego: po lewej Słońce, dalej planety skaliste Merkury, Wenus, Ziemia i Mars, przerywana linia – pas planetoid, potem gazowe olbrzymy Jowisz, Saturn z pierścieniem, Uran i Neptun">
      <path d="M0,40 A50,50 0 0 1 0,140 Z" class="f4 s4 sw"/>
      <text x="8" y="172" class="tx-s">Słońce</text>
      <circle cx="70" cy="90" r="4" class="f2 s2"/>
      <circle cx="92" cy="90" r="7" class="f4 s4"/>
      <circle cx="116" cy="90" r="7" class="f1 s1"/>
      <circle cx="138" cy="90" r="5" class="f2 s2"/>
      <line x1="162" y1="60" x2="162" y2="120" class="ln-thin dash"/>
      <text x="162" y="44" class="tx-s" text-anchor="middle">pas planetoid</text>
      <circle cx="200" cy="90" r="22" class="f2 s2 sw"/>
      <circle cx="262" cy="90" r="16" class="f4 s4"/>
      <ellipse cx="262" cy="90" rx="28" ry="6" class="ln"/>
      <circle cx="318" cy="90" r="12" class="f1 s1"/>
      <circle cx="368" cy="90" r="12" class="f5 s5"/>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="132">M</text><text x="92" y="132">W</text><text x="116" y="132">Z</text><text x="138" y="132">M</text>
        <text x="200" y="132">J</text><text x="262" y="132">S</text><text x="318" y="132">U</text><text x="368" y="132">N</text>
      </g>
      <line x1="64" y1="146" x2="144" y2="146" class="ln"/>
      <line x1="178" y1="146" x2="382" y2="146" class="ln"/>
      <text x="104" y="166" class="tx-s" text-anchor="middle">skaliste</text>
      <text x="280" y="166" class="tx-s" text-anchor="middle">gazowe olbrzymy</text>
      <text x="200" y="192" class="tx-s" text-anchor="middle">J – Jowisz, największa planeta</text>
    </svg>`,
    text: `<p>W środku <b>Układu Słonecznego</b> jest <b>Słońce</b> – gwiazda, która świeci własnym światłem. Wokół niego krąży <b>8 planet</b>. Planety same nie świecą – odbijają światło Słońca.</p>
      <p>Bliżej Słońca są cztery małe planety <b>skaliste</b>: Merkury, Wenus, Ziemia i Mars. Dalej – cztery <b>gazowe olbrzymy</b>: Jowisz (największa planeta), Saturn, Uran i Neptun. Między Marsem a Jowiszem krąży mnóstwo małych skalistych ciał – to <b>pas planetoid</b>. Pluton, dawniej dziewiąta planeta, jest dziś <b>planetą karłowatą</b>.</p>`,
    remember: 'Kolejność planet: Merkury, Wenus, Ziemia, Mars, Jowisz, Saturn, Uran, Neptun.',
    hook: '<b>M</b>ama <b>W</b>iesia <b>Z</b>jada <b>M</b>archewkę, <b>J</b>aś <b>S</b>zybko <b>U</b>nosi <b>N</b>ogi.',
    check: { q: 'Która planeta jest największa?', options: ['Ziemia', 'Jowisz', 'Merkury'], answer: 1, explain: 'Jowisz to największa planeta Układu Słonecznego – gazowy olbrzym.' },
  },
  {
    title: 'Ruch obrotowy: dzień i noc',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Słońce po lewej oświetla Ziemię. Połowa Ziemi zwrócona do Słońca ma dzień, druga połowa ma noc. Strzałka pokazuje obrót Ziemi z zachodu na wschód.">
      <defs><marker id="a-k4pr-uklad-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="40" cy="100" r="30" class="f4 s4 sw"/>
      <text x="40" y="152" class="tx-s" text-anchor="middle">Słońce</text>
      <line x1="80" y1="78" x2="190" y2="78" class="ln-thin dash"/>
      <line x1="80" y1="100" x2="190" y2="100" class="ln-thin dash"/>
      <line x1="80" y1="122" x2="190" y2="122" class="ln-thin dash"/>
      <path d="M260,40 A60,60 0 0 0 260,160 Z" class="f4"/>
      <path d="M260,40 A60,60 0 0 1 260,160 Z" class="f5"/>
      <circle cx="260" cy="100" r="60" class="ln"/>
      <line x1="260" y1="26" x2="260" y2="174" class="ln dash"/>
      <text x="230" y="106" class="tx-b" text-anchor="middle">dzień</text>
      <text x="292" y="106" class="tx-b" text-anchor="middle">noc</text>
      <path d="M215,172 Q260,188 305,172" class="ln s2 sw" marker-end="url(#a-k4pr-uklad-1)"/>
      <text x="260" y="204" class="tx-s" text-anchor="middle">obrót z zachodu na wschód</text>
      <text x="340" y="36" class="tx-s" text-anchor="middle">oś Ziemi</text>
    </svg>`,
    text: `<p>Ziemia kręci się wokół własnej <b>osi</b> – wyobrażonej linii, która przechodzi przez biegun północny i południowy. Obraca się <b>z zachodu na wschód</b>. To <b>ruch obrotowy</b>.</p>
      <p>Słońce oświetla zawsze tylko połowę Ziemi: tam jest <b>dzień</b>, a na drugiej połowie – <b>noc</b>. Jeden pełny obrót trwa prawie <b>24 godziny</b>, czyli <b>dobę</b>.</p>`,
    remember: 'Ruch obrotowy → dzień i noc. Jeden obrót ≈ 24 godziny = doba.',
    hook: 'Kręcisz się na krześle obrotowym przed lampą: raz lampa świeci ci w twarz (dzień), a raz w plecy (noc).',
    check: { q: 'Co jest skutkiem ruchu obrotowego Ziemi?', options: ['pory roku', 'dzień i noc', 'fazy Księżyca'], answer: 1, explain: 'Ziemia obraca się, więc raz jesteśmy po stronie oświetlonej (dzień), a raz po ciemnej (noc).' },
  },
  {
    title: 'Ruch obiegowy: rok i pory roku',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Ziemia krąży wokół Słońca po orbicie. Oś Ziemi jest nachylona. Po lewej północna półkula jest zwrócona do Słońca – u nas lato. Po prawej jest odwrócona od Słońca – u nas zima.">
      <defs><marker id="a-k4pr-uklad-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="210" y="22" class="tx-s" text-anchor="middle">oś Ziemi jest nachylona</text>
      <ellipse cx="210" cy="105" rx="150" ry="55" class="ln-thin dash"/>
      <path d="M250,51 Q210,47 170,51" class="ln s2 sw" marker-end="url(#a-k4pr-uklad-2)"/>
      <circle cx="210" cy="105" r="28" class="f4 s4 sw"/>
      <circle cx="60" cy="105" r="18" class="f1 s1"/>
      <line x1="51" y1="131" x2="69" y2="79" class="ln"/>
      <text x="72" y="72" class="tx-s">N</text>
      <circle cx="360" cy="105" r="18" class="f1 s1"/>
      <line x1="351" y1="131" x2="369" y2="79" class="ln"/>
      <text x="372" y="72" class="tx-s">N</text>
      <text x="60" y="156" class="tx" text-anchor="middle">lato u nas</text>
      <text x="360" y="156" class="tx" text-anchor="middle">zima u nas</text>
      <text x="210" y="196" class="tx-s" text-anchor="middle">1 okrążenie ≈ 365 dni i ćwierć doby = rok</text>
    </svg>`,
    text: `<p>Ziemia krąży też wokół Słońca – to <b>ruch obiegowy</b>. Jedno okrążenie trwa około <b>365 dni i ćwierć doby</b>, czyli <b>rok</b>. Z czterech „ćwiartek” co cztery lata robi się dodatkowy dzień – <b>rok przestępny</b> ma 366 dni (29 lutego).</p>
      <p>Oś Ziemi jest <b>nachylona</b>. Gdy północna połowa Ziemi (z Polską) jest zwrócona do Słońca, Słońce świeci u nas wysoko, dni są długie – jest <b>lato</b>. Pół roku później północna połowa jest odwrócona od Słońca – jest <b>zima</b>.</p>`,
    remember: 'Ruch obiegowy + nachylona oś → pory roku. Jedno okrążenie Słońca ≈ 365 dni = rok.',
    hook: 'Pory roku robi <b>przechylona</b> Ziemia, a nie to, że raz jest bliżej, a raz dalej od Słońca.',
    check: { q: 'Ile mniej więcej trwa jedno okrążenie Ziemi wokół Słońca?', options: ['około 24 godzin', 'około 29,5 dnia', 'około 365 dni'], answer: 2, explain: 'Jedno okrążenie Słońca trwa około 365 dni i ćwierć doby – to rok.' },
  },
  {
    title: 'Fazy Księżyca',
    svg: `<svg viewBox="0 0 420 175" role="img" aria-label="Cztery fazy Księżyca: nów – Księżyca nie widać; pierwsza kwadra – jasna prawa połowa, Księżyca przybywa; pełnia – cała tarcza jasna; ostatnia kwadra – jasna lewa połowa, Księżyca ubywa">
      <circle cx="60" cy="60" r="36" class="bg ln dash"/>
      <circle cx="160" cy="60" r="36" class="bg"/>
      <path d="M160,24 A36,36 0 0 1 160,96 Z" class="f4"/>
      <circle cx="160" cy="60" r="36" class="ln"/>
      <circle cx="260" cy="60" r="36" class="f4 ln"/>
      <circle cx="360" cy="60" r="36" class="bg"/>
      <path d="M360,24 A36,36 0 0 0 360,96 Z" class="f4"/>
      <circle cx="360" cy="60" r="36" class="ln"/>
      <g class="tx-s" text-anchor="middle">
        <text x="60" y="120">nów</text><text x="160" y="120">pierwsza kwadra</text><text x="260" y="120">pełnia</text><text x="360" y="120">ostatnia kwadra</text>
        <text x="60" y="142">nie widać</text><text x="160" y="142" class="t3">P – przybywa</text><text x="260" y="142">cała tarcza</text><text x="360" y="142" class="t2">C – cofa się</text>
      </g>
      <text x="210" y="168" class="tx-s" text-anchor="middle">od nowiu do nowiu ≈ 29,5 dnia</text>
    </svg>`,
    text: `<p><b>Księżyc</b> krąży wokół Ziemi i nie świeci sam – odbija światło Słońca. Słońce zawsze oświetla połowę Księżyca, ale z Ziemi widzimy raz większy, raz mniejszy kawałek tej jasnej połowy. Te zmiany to <b>fazy Księżyca</b>.</p>
      <p>W <b>nowiu</b> Księżyca nie widać. Potem go przybywa: <b>pierwsza kwadra</b> (jasna prawa połowa), <b>pełnia</b> (cała tarcza), a potem ubywa: <b>ostatnia kwadra</b> (jasna lewa połowa). Cały cykl trwa około <b>29,5 dnia</b>.</p>`,
    remember: 'nów → pierwsza kwadra → pełnia → ostatnia kwadra → nów (ok. 29,5 dnia).',
    hook: 'Dorysuj kreskę: wychodzi <b>P</b> – Księżyca <b>przybywa</b>. Wygląda jak <b>C</b> – <b>cofa się</b>, czyli ubywa.',
  },
  {
    title: 'Zaćmienie Słońca i Księżyca',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Zaćmienie Słońca: w jednej linii Słońce, Księżyc, Ziemia – cień Księżyca pada na Ziemię, w czasie nowiu. Zaćmienie Księżyca: Słońce, Ziemia, Księżyc – Księżyc wchodzi w cień Ziemi, w czasie pełni.">
      <text x="10" y="20" class="tx-b">zaćmienie Słońca – nów</text>
      <polygon points="210,48 210,68 318,62 318,54" class="f5"/>
      <circle cx="40" cy="58" r="26" class="f4 s4 sw"/>
      <circle cx="210" cy="58" r="10" class="bg ln"/>
      <circle cx="340" cy="58" r="22" class="f1 s1"/>
      <g class="tx-s" text-anchor="middle"><text x="40" y="102">Słońce</text><text x="210" y="102">Księżyc</text><text x="340" y="102">Ziemia</text></g>
      <text x="10" y="128" class="tx-b">zaćmienie Księżyca – pełnia</text>
      <polygon points="210,143 210,187 352,174 352,156" class="f5"/>
      <circle cx="40" cy="165" r="26" class="f4 s4 sw"/>
      <circle cx="210" cy="165" r="22" class="f1 s1"/>
      <circle cx="340" cy="165" r="10" class="f2 s2"/>
      <g class="tx-s" text-anchor="middle"><text x="40" y="210">Słońce</text><text x="210" y="210">Ziemia</text><text x="340" y="210">Księżyc</text></g>
    </svg>`,
    text: `<p>Czasem Słońce, Księżyc i Ziemia ustawiają się w jednej linii. Gdy <b>Księżyc</b> jest pośrodku, zasłania nam Słońce – to <b>zaćmienie Słońca</b>. Może się zdarzyć tylko w czasie <b>nowiu</b>.</p>
      <p>Gdy pośrodku jest <b>Ziemia</b>, Księżyc wchodzi w jej cień, ciemnieje i często robi się czerwonawy – to <b>zaćmienie Księżyca</b>. Może się zdarzyć tylko w czasie <b>pełni</b>. Nie przy każdym nowiu i nie przy każdej pełni jest zaćmienie.</p>
      <p>⚠️ Na Słońce nigdy nie patrz gołym okiem ani przez lornetkę – nawet w czasie zaćmienia. Tylko przez specjalne okulary do obserwacji Słońca.</p>`,
    remember: 'Zaćmienie Słońca: Słońce – Księżyc – Ziemia (nów). Zaćmienie Księżyca: Słońce – Ziemia – Księżyc (pełnia).',
    hook: 'Kto stoi <b>pośrodku</b>, ten robi cień: Księżyc pośrodku – „gaśnie” Słońce; Ziemia pośrodku – „gaśnie” Księżyc.',
    check: { q: 'Co znajduje się pośrodku podczas zaćmienia Księżyca?', options: ['Księżyc', 'Słońce', 'Ziemia'], answer: 2, explain: 'Przy zaćmieniu Księżyca Ziemia jest między Słońcem a Księżycem, a Księżyc wchodzi w jej cień.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/mieszaniny'] = [
  {
    title: 'Gdzie znika cukier?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Szklanka wody z kostkami cukru na dnie. Strzałka: mieszamy. Druga szklanka – cukier rozpuścił się, drobinki rozeszły się w wodzie, powstał roztwór.">
      <defs><marker id="a-k4pr-miesz-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="28" class="tx" text-anchor="middle">cukier się rozpuszcza</text>
      <path d="M34,80 L45,170 L125,170 L136,80 Z" class="f1"/>
      <path d="M30,50 L45,170 L125,170 L140,50" class="ln"/>
      <rect x="66" y="152" width="16" height="16" class="bg ln"/>
      <rect x="88" y="152" width="16" height="16" class="bg ln"/>
      <line x1="152" y1="112" x2="238" y2="112" class="ln s2 sw" marker-end="url(#a-k4pr-miesz-1)"/>
      <text x="195" y="100" class="tx-s" text-anchor="middle">mieszamy</text>
      <path d="M254,80 L265,170 L345,170 L356,80 Z" class="f1"/>
      <path d="M250,50 L265,170 L345,170 L360,50" class="ln"/>
      <g class="t1"><circle cx="275" cy="95" r="2"/><circle cx="300" cy="110" r="2"/><circle cx="330" cy="98" r="2"/><circle cx="285" cy="135" r="2"/><circle cx="318" cy="128" r="2"/><circle cx="296" cy="158" r="2"/><circle cx="336" cy="152" r="2"/><circle cx="310" cy="88" r="2"/></g>
      <text x="85" y="192" class="tx-s" text-anchor="middle">woda + cukier</text>
      <text x="305" y="194" class="tx-b" text-anchor="middle">roztwór</text>
    </svg>`,
    text: `<p>Wsyp cukier do wody i zamieszaj. Cukier „znika”, ale woda jest słodka. Cukier nie zniknął – rozpadł się na drobinki tak małe, że ich nie widać, i rozszedł się w wodzie. Mówimy, że się <b>rozpuścił</b>, a powstała ciecz to <b>roztwór</b>.</p>
      <p>W wodzie rozpuszczają się np. cukier, sól kuchenna i kawa rozpuszczalna. <b>Nie rozpuszczają się</b> piasek, kreda, żwir i olej.</p>`,
    remember: 'Substancja rozpuszczona nie znika – jest w wodzie w postaci niewidocznych drobinek.',
    hook: 'Cukier w herbacie jest jak dzieci, które rozbiegły się po wielkim boisku – nie widzisz ich z daleka, ale wciąż tam są.',
    check: { q: 'Która substancja NIE rozpuszcza się w wodzie?', options: ['sól kuchenna', 'piasek', 'cukier'], answer: 1, explain: 'Piasek się nie rozpuszcza – opada na dno. Sól i cukier się rozpuszczają.' },
  },
  {
    title: 'Co przyspiesza rozpuszczanie?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Trzy kafelki: mieszanie łyżeczką, rozdrobnienie – cukier puder zamiast kostki, wyższa temperatura – ciepła woda zamiast zimnej">
      <rect x="8" y="10" width="128" height="150" rx="12" class="f1 s1"/>
      <rect x="146" y="10" width="128" height="150" rx="12" class="f4 s4"/>
      <rect x="284" y="10" width="128" height="150" rx="12" class="f2 s2"/>
      <g class="tx-b" text-anchor="middle"><text x="72" y="60">🥄</text><text x="210" y="60">🧂</text><text x="348" y="60">🔥</text></g>
      <g class="tx" text-anchor="middle"><text x="72" y="100">mieszanie</text><text x="210" y="100">rozdrobnienie</text><text x="348" y="100">temperatura</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="72" y="126">łyżeczka</text><text x="72" y="144">w ruch</text>
        <text x="210" y="126">puder zamiast</text><text x="210" y="144">kostki</text>
        <text x="348" y="126">ciepła woda</text><text x="348" y="144">zamiast zimnej</text>
      </g>
      <text x="210" y="188" class="tx-s" text-anchor="middle">w doświadczeniu zmieniaj tylko jedną rzecz naraz</text>
    </svg>`,
    text: `<p>Rozpuszczanie przyspieszają trzy rzeczy: <b>mieszanie</b>, <b>rozdrobnienie</b> (cukier puder rozpuści się szybciej niż kostka) i <b>wyższa temperatura</b> (w ciepłej herbacie szybciej niż w zimnej).</p>
      <p>Chcesz to sprawdzić doświadczeniem? Zmieniaj tylko <b>jedną rzecz</b>, a resztę zostaw tak samo: tyle samo wody, tyle samo cukru, takie same szklanki. Tylko wtedy wiesz, co zadziałało.</p>`,
    remember: 'Mieszanie, rozdrobnienie i wyższa temperatura przyspieszają rozpuszczanie.',
    hook: 'Trzy słowa na herbatę: <b>zamieszaj, rozkrusz, podgrzej</b>.',
    check: { q: 'W której szklance kostka cukru rozpuści się najszybciej?', options: ['w zimnej wodzie, bez mieszania', 'w ciepłej wodzie, gdy mieszasz', 'w zimnej wodzie, gdy mieszasz'], answer: 1, explain: 'Tu działają naraz dwa czynniki: wyższa temperatura i mieszanie.' },
  },
  {
    title: 'Jednorodna czy niejednorodna?',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy szklanki: woda z solą wygląda jednolicie – mieszanina jednorodna; woda z piaskiem – piasek na dnie, mieszanina niejednorodna; woda z olejem – warstwa oleju na górze, mieszanina niejednorodna">
      <text x="210" y="24" class="tx-b" text-anchor="middle">Czy widać składniki?</text>
      <rect x="20" y="40" width="110" height="120" rx="8" class="f1"/>
      <rect x="155" y="40" width="110" height="120" rx="8" class="f1"/>
      <rect x="155" y="134" width="110" height="26" class="f2"/>
      <g class="t2"><circle cx="170" cy="146" r="2"/><circle cx="188" cy="152" r="2"/><circle cx="204" cy="143" r="2"/><circle cx="222" cy="153" r="2"/><circle cx="238" cy="145" r="2"/><circle cx="252" cy="152" r="2"/></g>
      <rect x="290" y="40" width="110" height="120" rx="8" class="f1"/>
      <rect x="290" y="40" width="110" height="28" class="f4"/>
      <rect x="20" y="40" width="110" height="120" rx="8" class="ln"/>
      <rect x="155" y="40" width="110" height="120" rx="8" class="ln"/>
      <rect x="290" y="40" width="110" height="120" rx="8" class="ln"/>
      <g class="tx-s" text-anchor="middle"><text x="75" y="180">woda z solą</text><text x="210" y="180">woda z piaskiem</text><text x="345" y="180">woda z olejem</text></g>
      <g class="tx" text-anchor="middle"><text x="75" y="202" class="t3">jednorodna</text><text x="210" y="202" class="t2">niejednorodna</text><text x="345" y="202" class="t2">niejednorodna</text></g>
    </svg>`,
    text: `<p><b>Mieszanina</b> to co najmniej dwie substancje zmieszane razem. Każda z nich zachowuje swoje właściwości – dlatego da się je potem rozdzielić.</p>
      <p>W mieszaninie <b>jednorodnej</b> nie rozróżnisz składników ani gołym okiem, ani przez lupę (woda z solą, woda z cukrem). W mieszaninie <b>niejednorodnej</b> składniki widać (woda z piaskiem, woda z olejem, groch z kaszą).</p>`,
    remember: 'Jednorodna – składników nie widać. Niejednorodna – składniki widać gołym okiem lub przez lupę.',
    hook: 'Jednorodna = „jedno” – wygląda jak jedna substancja. Niejednorodna = „nie jedno” – widać, że jest kilka.',
    check: { q: 'Która mieszanina jest jednorodna?', options: ['woda z olejem', 'woda z cukrem', 'groch z kaszą'], answer: 1, explain: 'Rozpuszczonego cukru nie widać ani gołym okiem, ani przez lupę.' },
  },
  {
    title: 'Magnes, sito, odstawienie i zlanie',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy sposoby rozdzielania: magnes wyciąga opiłki żelaza z piasku; na sicie zostaje groch, a kasza spada; w szklance piasek opada na dno (sedymentacja), a potem zlewamy wodę znad osadu (dekantacja)">
      <rect x="8" y="10" width="128" height="160" rx="12" class="f5 s5"/>
      <rect x="146" y="10" width="128" height="160" rx="12" class="f3 s3"/>
      <rect x="284" y="10" width="128" height="160" rx="12" class="f1 s1"/>
      <text x="72" y="62" class="tx-b" text-anchor="middle">🧲</text>
      <line x1="178" y1="60" x2="242" y2="60" class="ln sw"/>
      <circle cx="192" cy="50" r="7" class="f3 s3"/><circle cx="210" cy="50" r="7" class="f3 s3"/><circle cx="228" cy="50" r="7" class="f3 s3"/>
      <g class="t4"><circle cx="196" cy="72" r="2"/><circle cx="214" cy="78" r="2"/><circle cx="226" cy="70" r="2"/><circle cx="204" cy="84" r="2"/></g>
      <rect x="323" y="32" width="50" height="54" rx="4" class="bg"/>
      <rect x="323" y="44" width="50" height="42" class="f1"/>
      <rect x="323" y="76" width="50" height="10" class="f2"/>
      <rect x="323" y="32" width="50" height="54" rx="4" class="ln"/>
      <g class="tx" text-anchor="middle"><text x="72" y="104">magnes</text><text x="210" y="104">sito</text><text x="348" y="104">odstaw i zlej</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="72" y="130">opiłki żelaza</text><text x="72" y="148">z piasku</text>
        <text x="210" y="130">groch zostaje,</text><text x="210" y="148">kasza spada</text>
        <text x="348" y="130">sedymentacja,</text><text x="348" y="148">dekantacja</text>
      </g>
      <text x="210" y="196" class="tx-s" text-anchor="middle">piasek opada na dno → zlewamy wodę znad osadu</text>
    </svg>`,
    text: `<p>Mieszaniny niejednorodne często rozdzielisz <b>sposobami mechanicznymi</b>: wybierzesz składniki ręką, przesiejesz przez <b>sito</b> (groch zostaje, drobna kasza przelatuje) albo przyciągniesz <b>magnesem</b> (opiłki żelaza z piasku).</p>
      <p>Wodę z piaskiem wystarczy odstawić – piasek opada na dno. To <b>sedymentacja</b>. Potem ostrożnie zlewamy wodę znad osadu – to <b>dekantacja</b>.</p>`,
    remember: 'Sedymentacja – opadanie cząstek na dno. Dekantacja – zlewanie cieczy znad osadu.',
    hook: '<b>S</b>edymentacja – <b>S</b>iadanie na dnie. <b>D</b>ekantacja – <b>D</b>elikatne zlewanie.',
  },
  {
    title: 'Sól z piaskiem: rozpuść, przesącz, odparuj',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy kroki rozdzielania soli i piasku: 1. rozpuść w wodzie – sól się rozpuszcza, piasek nie; 2. przesącz przez lejek z sączkiem – piasek zostaje na sączku; 3. odparuj wodę na ogniu – zostaje sól">
      <defs><marker id="a-k4pr-miesz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="8" y="10" width="118" height="170" rx="12" class="f4 s4"/>
      <rect x="149" y="10" width="118" height="170" rx="12" class="f3 s3"/>
      <rect x="290" y="10" width="118" height="170" rx="12" class="f2 s2"/>
      <path d="M39,60 L45,120 L89,120 L95,60 Z" class="f1"/>
      <rect x="47" y="110" width="40" height="9" class="f2"/>
      <path d="M37,40 L45,120 L89,120 L97,40" class="ln"/>
      <path d="M192,50 L224,50 L212,68 L204,68 Z" class="f2"/>
      <path d="M178,35 L238,35 L212,72 L212,90 L204,90 L204,72 Z" class="ln"/>
      <path d="M189,112 L190,130 L226,130 L227,112 Z" class="f1"/>
      <path d="M188,98 L190,130 L226,130 L228,98" class="ln"/>
      <path d="M309,70 Q349,98 389,70 Z" class="f1 s1"/>
      <path d="M338,62 q6,-9 0,-18 M352,62 q6,-9 0,-18" class="ln-thin"/>
      <line x1="315" y1="98" x2="383" y2="98" class="ln"/>
      <text x="349" y="128" class="tx-b" text-anchor="middle">🔥</text>
      <line x1="128" y1="70" x2="146" y2="70" class="ln s2 sw" marker-end="url(#a-k4pr-miesz-2)"/>
      <line x1="269" y1="70" x2="287" y2="70" class="ln s2 sw" marker-end="url(#a-k4pr-miesz-2)"/>
      <g class="tx-b" text-anchor="middle"><text x="67" y="150">1. rozpuść</text><text x="208" y="150">2. przesącz</text><text x="349" y="150">3. odparuj</text></g>
      <g class="tx-s" text-anchor="middle"><text x="67" y="170">sól się rozpuści</text><text x="208" y="170">piasek na sączku</text><text x="349" y="170">zostaje sól</text></g>
      <text x="210" y="202" class="tx-s" text-anchor="middle">sączek nie zatrzyma rozpuszczonej soli!</text>
    </svg>`,
    text: `<p><b>Sączenie</b> (filtrowanie): przelewasz mieszaninę przez <b>sączek</b> – bibułę albo filtr do kawy. Ciało stałe, np. piasek, zostaje na sączku, a woda przecieka. Ale rozpuszczona sól przecieka razem z wodą!</p>
      <p>Żeby odzyskać sól, trzeba wodę <b>odparować</b> – ogrzewać roztwór, aż woda zamieni się w parę. Gdy woda paruje powoli, z roztworu wydzielają się kryształki soli – to <b>krystalizacja</b>.</p>
      <p>⚠️ Ogrzewanie – tylko z dorosłym. W pracowni nie próbuj niczego na smak.</p>`,
    remember: 'Sól z piaskiem: rozpuść w wodzie → przesącz (piasek zostaje) → odparuj wodę (zostaje sól).',
    hook: 'Sączek to sitko dla bardzo drobnych ziarenek – ale rozpuszczona sól jest tak drobna, że przejdzie przez każde sitko.',
    check: { q: 'Jak odzyskać sól rozpuszczoną w wodzie?', options: ['przesączyć przez bibułę', 'odparować wodę', 'użyć magnesu'], answer: 1, explain: 'Rozpuszczona sól przecieka przez sączek i nie reaguje na magnes. Po odparowaniu wody sól zostaje.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/las-laka'] = [
  {
    title: 'Ekosystem – naturalny czy sztuczny?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dwa kafelki. Ekosystemy naturalne – powstały bez udziału człowieka: las naturalny, jezioro, rzeka, torfowisko. Ekosystemy sztuczne – stworzył je człowiek: pole, sad, park, ogród.">
      <rect x="8" y="8" width="198" height="184" rx="14" class="f3 s3"/>
      <rect x="214" y="8" width="198" height="184" rx="14" class="f4 s4"/>
      <text x="107" y="36" class="tx-b t3" text-anchor="middle">naturalne</text>
      <text x="313" y="36" class="tx-b t4" text-anchor="middle">sztuczne</text>
      <text x="107" y="60" class="tx-s" text-anchor="middle">bez udziału człowieka</text>
      <text x="313" y="60" class="tx-s" text-anchor="middle">stworzył je człowiek</text>
      <text x="107" y="108" class="tx-b" text-anchor="middle">🌲 🏞️</text>
      <text x="313" y="108" class="tx-b" text-anchor="middle">🌾 🍎 🌷</text>
      <g class="tx" text-anchor="middle">
        <text x="107" y="145">las naturalny,</text><text x="107" y="167">jezioro, rzeka</text>
        <text x="313" y="145">pole, sad,</text><text x="313" y="167">park, ogród</text>
      </g>
    </svg>`,
    text: `<p><b>Ekosystem</b> to miejsce w przyrodzie razem ze wszystkim, co w nim żyje – roślinami, zwierzętami, grzybami, bakteriami – i z warunkami, jakie tam panują: światłem, wodą, glebą, powietrzem. Wszystko jest ze sobą powiązane.</p>
      <p>Ekosystemy <b>naturalne</b> powstały bez człowieka, np. jezioro, rzeka, torfowisko, naturalny las jak Puszcza Białowieska. Ekosystemy <b>sztuczne</b> stworzył człowiek i musi o nie dbać: pole, sad, park, ogród. Człowiek korzysta z ekosystemów, zmienia je, ale może też je chronić.</p>`,
    remember: 'Ekosystem = organizmy + miejsce + warunki życia. Naturalny – bez człowieka; sztuczny – stworzony przez człowieka.',
    hook: 'Zapytaj: „Kto to założył?”. Przyroda – naturalny. Człowiek – sztuczny.',
    check: { q: 'Który ekosystem jest sztuczny?', options: ['jezioro', 'sad', 'torfowisko'], answer: 1, explain: 'Sad założył człowiek i o niego dba – to ekosystem sztuczny.' },
  },
  {
    title: 'Nieproszeni goście – gatunki inwazyjne',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Strzałki do Polski: z Kaukazu – barszcz Sosnowskiego, z Ameryki Północnej – szop pracz. W Polsce szkodzą gatunkom rodzimym.">
      <defs><marker id="a-k4pr-las-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="160" height="62" rx="12" class="f4 s4"/>
      <rect x="10" y="118" width="160" height="62" rx="12" class="f2 s2"/>
      <rect x="268" y="56" width="142" height="88" rx="12" class="f3 s3"/>
      <text x="90" y="46" class="tx-b" text-anchor="middle">Kaukaz</text>
      <text x="90" y="68" class="tx-s" text-anchor="middle">barszcz Sosnowskiego</text>
      <text x="90" y="144" class="tx-b" text-anchor="middle">Ameryka Płn.</text>
      <text x="90" y="166" class="tx-s" text-anchor="middle">szop pracz</text>
      <text x="339" y="88" class="tx-b" text-anchor="middle">Polska</text>
      <text x="339" y="112" class="tx-s" text-anchor="middle">szkodzą gatunkom</text>
      <text x="339" y="130" class="tx-s" text-anchor="middle">rodzimym</text>
      <line x1="172" y1="54" x2="264" y2="84" class="ln s2 sw" marker-end="url(#a-k4pr-las-1)"/>
      <line x1="172" y1="146" x2="264" y2="116" class="ln s2 sw" marker-end="url(#a-k4pr-las-1)"/>
    </svg>`,
    text: `<p><b>Gatunek obcy</b> to roślina albo zwierzę przywiezione przez człowieka z innej części świata. Jeśli szybko się rozprzestrzenia i szkodzi gatunkom <b>rodzimym</b> (tym, które żyją u nas od dawna), nazywamy go <b>inwazyjnym</b>.</p>
      <p><b>Barszcz Sosnowskiego</b> pochodzi z Kaukazu – zarasta duże obszary i wypiera nasze rośliny, a jego sok na słońcu parzy skórę. <b>Szop pracz</b> pochodzi z Ameryki Północnej – może niszczyć gniazda ptaków wodnych i zagraża rzadkiemu żółwiowi błotnemu.</p>`,
    remember: 'Gatunek inwazyjny = obcy przybysz, który szybko się rozprzestrzenia i szkodzi gatunkom rodzimym.',
    hook: 'Nigdy nie wypuszczaj zwierzaka z domu „na wolność” – w obcym miejscu może zginąć albo stać się nieproszonym gościem, który szkodzi innym.',
  },
  {
    title: 'Łąka: kwiaty dla owadów i dla wiatru',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Po lewej kwiat z barwnymi płatkami i pszczoła – barwny okwiat wabi owady. Po prawej źdźbło trawy z drobnymi kwiatami i linie wiatru – pyłek traw niesie wiatr.">
      <line x1="100" y1="96" x2="100" y2="165" class="ln s3 sw"/>
      <circle cx="100" cy="58" r="15" class="f2 s2"/><circle cx="125" cy="76" r="15" class="f2 s2"/><circle cx="116" cy="104" r="15" class="f2 s2"/><circle cx="84" cy="104" r="15" class="f2 s2"/><circle cx="75" cy="76" r="15" class="f2 s2"/>
      <circle cx="100" cy="82" r="11" class="f4 s4"/>
      <text x="160" y="52" class="tx-b">🐝</text>
      <line x1="210" y1="20" x2="210" y2="170" class="ln-thin dash"/>
      <line x1="320" y1="50" x2="320" y2="165" class="ln s3 sw"/>
      <ellipse cx="313" cy="58" rx="4" ry="9" class="f3 s3"/><ellipse cx="327" cy="70" rx="4" ry="9" class="f3 s3"/><ellipse cx="313" cy="82" rx="4" ry="9" class="f3 s3"/><ellipse cx="327" cy="94" rx="4" ry="9" class="f3 s3"/><ellipse cx="313" cy="106" rx="4" ry="9" class="f3 s3"/>
      <path d="M232,70 q18,-10 36,0 t36,0 M232,95 q18,-10 36,0 t36,0 M240,120 q18,-10 36,0" class="ln-thin"/>
      <text x="380" y="80" class="tx-b" text-anchor="middle">💨</text>
      <g class="tx-s" text-anchor="middle">
        <text x="105" y="186">barwny okwiat –</text><text x="105" y="204">wabi owady</text>
        <text x="315" y="186">drobne kwiaty traw –</text><text x="315" y="204">pyłek niesie wiatr</text>
      </g>
    </svg>`,
    text: `<p><b>Łąka</b> to teren porośnięty głównie trawami i innymi roślinami zielnymi, bez drzew. Rosną tu np. koniczyna, mniszek, jaskier i szczaw, żyją pasikoniki, świerszcze, trzmiele, motyle, krety i zające. Łąki dają pokarm owadom zapylającym, a ludziom – siano dla zwierząt.</p>
      <p>Kwiaty z <b>barwnym okwiatem</b> (kolorowymi płatkami) wabią owady, które przenoszą pyłek. Kwiaty <b>traw</b> są drobne i zielonkawe – ich pyłek niesie <b>wiatr</b>, więc nie muszą nikogo wabić.</p>
      <p>Dzięki <b>koszeniu</b> i <b>wypasowi</b> łąka nie zarasta lasem. <b>Wypalanie łąk jest zabronione</b> – giną w ogniu zwierzęta, a pożar łatwo się rozprzestrzenia.</p>`,
    remember: 'Barwne płatki = reklama dla owadów. Trawy zapyla wiatr, więc nie mają barwnych płatków.',
    hook: 'Kolorowy kwiat to szyld „Zapraszam, mam nektar!”. Trawa nie potrzebuje szyldu – jej listonoszem jest wiatr.',
    check: { q: 'Dlaczego kwiaty traw nie mają kolorowych płatków?', options: ['bo rosną w cieniu', 'bo ich pyłek przenosi wiatr', 'bo kwitną zimą'], answer: 1, explain: 'Barwne płatki wabią owady. Trawy zapyla wiatr, więc nie muszą wabić owadów.' },
  },
  {
    title: 'Cztery piętra lasu',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Przekrój lasu: od góry korony drzew (najwięcej światła), podszyt – krzewy i młode drzewa, runo leśne – mchy, paprocie, grzyby, ściółka – opadłe liście (ciemno i wilgotno)">
      <defs><marker id="a-k4pr-las-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="40" y="40" width="10" height="150" class="f2 s2"/>
      <rect x="160" y="40" width="10" height="150" class="f2 s2"/>
      <circle cx="45" cy="42" r="34" class="f3 s3"/>
      <circle cx="165" cy="42" r="34" class="f3 s3"/>
      <circle cx="105" cy="128" r="22" class="f3 s3"/>
      <circle cx="205" cy="134" r="18" class="f3 s3"/>
      <path d="M70,186 q4,-22 8,0 M84,186 q4,-18 8,0 M190,186 q4,-20 8,0" class="ln s3"/>
      <text x="138" y="184" class="tx" text-anchor="middle">🍄</text>
      <rect x="10" y="188" width="220" height="14" class="f2"/>
      <line x1="10" y1="80" x2="236" y2="80" class="ln-thin dash"/>
      <line x1="10" y1="152" x2="236" y2="152" class="ln-thin dash"/>
      <line x1="10" y1="186" x2="236" y2="186" class="ln-thin dash"/>
      <g class="tx-b"><text x="246" y="44">korony drzew</text><text x="246" y="122">podszyt</text><text x="246" y="174">runo leśne</text><text x="246" y="204">ściółka</text></g>
      <text x="246" y="64" class="tx-s">najwięcej światła</text>
      <text x="246" y="224" class="tx-s">ciemno i wilgotno</text>
      <line x1="404" y1="70" x2="404" y2="196" class="ln s2 sw" marker-end="url(#a-k4pr-las-2)"/>
    </svg>`,
    text: `<p>W lesie najważniejsze są drzewa. Las ma <b>cztery piętra</b> (warstwy), od góry:</p>
      <ul><li><b>korony drzew</b> – sosny, świerki, dęby, buki, brzozy; żyją tu np. wiewiórki,</li>
      <li><b>podszyt</b> – krzewy i młode drzewa, np. leszczyna, jarzębina, kalina,</li>
      <li><b>runo leśne</b> – mchy, paprocie, borówki, wrzos i grzyby,</li>
      <li><b>ściółka</b> – opadłe liście, igły i gałązki; dżdżownice, grzyby i bakterie zamieniają je w próchnicę.</li></ul>
      <p>Im niżej, tym mniej światła, więcej wilgoci i słabszy wiatr.</p>`,
    remember: 'Piętra lasu od góry: korony drzew → podszyt → runo leśne → ściółka.',
    hook: 'Las jak blok: na dachu (korony) najwięcej słońca, w piwnicy (ściółka) ciemno i wilgotno.',
    check: { q: 'W którym piętrze lasu rosną mchy i paprocie?', options: ['w koronach drzew', 'w podszycie', 'w runie leśnym'], answer: 2, explain: 'Runo leśne to najniższa warstwa roślin: mchy, paprocie, krzewinki i grzyby.' },
  },
  {
    title: 'Jaki to las i po co nam las?',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Typy lasu: iglasty (bór) – sosna, świerk; liściasty – dąb, buk, brzoza; mieszany – drzewa iglaste i liściaste. Funkcje lasu: ochronne – tlen, woda, dom zwierząt; gospodarcze – drewno, grzyby, jagody; społeczne – wypoczynek, zdrowie, praca.">
      <rect x="8" y="8" width="128" height="96" rx="12" class="f3 s3"/>
      <rect x="146" y="8" width="128" height="96" rx="12" class="f3 s3"/>
      <rect x="284" y="8" width="128" height="96" rx="12" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="72" y="40">🌲🌲</text><text x="210" y="40">🌳🌳</text><text x="348" y="40">🌲🌳</text></g>
      <g class="tx" text-anchor="middle"><text x="72" y="70">iglasty</text><text x="210" y="70">liściasty</text><text x="348" y="70">mieszany</text></g>
      <g class="tx-s" text-anchor="middle"><text x="72" y="92">sosna, świerk</text><text x="210" y="92">dąb, buk, brzoza</text><text x="348" y="92">oba rodzaje</text></g>
      <rect x="8" y="114" width="128" height="98" rx="12" class="f1 s1"/>
      <rect x="146" y="114" width="128" height="98" rx="12" class="f4 s4"/>
      <rect x="284" y="114" width="128" height="98" rx="12" class="f5 s5"/>
      <g class="tx" text-anchor="middle"><text x="72" y="144">ochronne</text><text x="210" y="144">gospodarcze</text><text x="348" y="144">społeczne</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="72" y="168">tlen, woda,</text><text x="72" y="188">dom zwierząt</text>
        <text x="210" y="168">drewno,</text><text x="210" y="188">grzyby, jagody</text>
        <text x="348" y="168">wypoczynek,</text><text x="348" y="188">zdrowie, praca</text>
      </g>
    </svg>`,
    text: `<p>Typ lasu poznasz po drzewach w koronach: <b>las iglasty</b> (bór) – sosny, świerki, jodły, modrzewie; <b>las liściasty</b> – dęby, buki, graby, lipy, brzozy; <b>las mieszany</b> – drzewa iglaste i liściaste razem. Najczęstszym drzewem w polskich lasach jest <b>sosna</b>.</p>
      <p>Las jest domem roślin, zwierząt i grzybów, wytwarza tlen i pochłania dwutlenek węgla, zatrzymuje wodę i chroni przed powodzią (funkcje <b>ochronne</b>). Daje drewno, grzyby i jagody (<b>gospodarcze</b>) oraz miejsce do wypoczynku i pracy (<b>społeczne</b>).</p>
      <p>Lasom szkodzą wycinanie, pożary, śmieci i hałas. Lasy z jednego gatunku drzew łatwiej niszczą szkodniki, np. korniki.</p>`,
    remember: 'Typy lasu: iglasty, liściasty, mieszany. Funkcje lasu: ochronne, gospodarcze, społeczne.',
    check: { q: 'W lesie rosną razem sosny, dęby i brzozy. To las…', options: ['iglasty', 'liściasty', 'mieszany'], answer: 2, explain: 'Sosna jest drzewem iglastym, a dąb i brzoza – liściastymi. Razem tworzą las mieszany.' },
  },
];

window.LESSONS['przyroda/teren'] = [
  {
    title: 'Szczyt, stok, podnóże – i dolina',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Przekrój terenu: dwa wzniesienia, między nimi dolina z rzeką. Opisano szczyt, stok i podnóże pierwszego wzniesienia.">
      <defs><marker id="a-k4pr-ter-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M10,170 L50,168 Q90,160 120,100 Q140,60 160,60 Q180,62 200,110 Q215,150 240,158 Q260,162 280,150 Q300,130 330,90 Q350,70 370,90 Q395,130 410,168 L410,190 L10,190 Z" class="f3 s3"/>
      <ellipse cx="248" cy="160" rx="16" ry="4" class="f1 s1"/>
      <circle cx="160" cy="60" r="5" class="t2"/>
      <text x="160" y="40" class="tx-b" text-anchor="middle">szczyt</text>
      <text x="62" y="110" class="tx-b" text-anchor="middle">stok</text>
      <line x1="82" y1="114" x2="112" y2="118" class="ln s2" marker-end="url(#a-k4pr-ter-1)"/>
      <text x="44" y="150" class="tx" text-anchor="middle">podnóże</text>
      <text x="248" y="134" class="tx-b" text-anchor="middle">dolina</text>
      <text x="350" y="56" class="tx-s" text-anchor="middle">wzniesienie</text>
    </svg>`,
    text: `<p>Powierzchnia Ziemi ma różny kształt – to <b>ukształtowanie terenu</b>. Są formy <b>wypukłe</b> (pagórki, wzgórza, góry) i <b>wklęsłe</b> (obniżenia).</p>
      <p>Każde wzniesienie ma <b>szczyt</b> (najwyższy punkt), <b>stoki</b> i <b>podnóże</b> – miejsce, gdzie stok przechodzi w płaski teren. <b>Dolina</b> to wydłużone obniżenie, którym zwykle płynie rzeka. <b>Kotlina</b> to obniżenie otoczone ze wszystkich stron wyższym terenem.</p>`,
    remember: 'Wzniesienie: szczyt – stoki – podnóże. Obniżenia: dolina (wydłużona, z rzeką) i kotlina (otoczona wyższym terenem).',
    hook: 'Góra jest jak człowiek: szczyt to czubek głowy, stoki – ramiona, a podnóże – stopy.',
    check: { q: 'Jak nazywa się obniżenie terenu otoczone ze wszystkich stron wyższym terenem?', options: ['kotlina', 'szczyt', 'stok'], answer: 0, explain: 'Kotlina to obniżenie otoczone ze wszystkich stron wyższym terenem.' },
  },
  {
    title: 'Wysokość „od morza” i „od czegoś”',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Góra nad poziomem morza. Szczyt 1200 m n.p.m. – strzałka od poziomu morza. Schronisko 900 m n.p.m. Między schroniskiem a szczytem wysokość względna 300 m.">
      <defs><marker id="a-k4pr-ter-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="196" width="400" height="24" class="f1"/>
      <text x="320" y="214" class="tx-s">poziom morza</text>
      <path d="M90,196 L200,40 L330,196 Z" class="f3 s3"/>
      <circle cx="200" cy="40" r="5" class="t2"/>
      <rect x="226" y="84" width="16" height="12" class="f2 s2"/>
      <text x="200" y="28" class="tx-b" text-anchor="middle">1200 m n.p.m.</text>
      <text x="250" y="114" class="tx-s">schronisko 900 m n.p.m.</text>
      <line x1="50" y1="196" x2="50" y2="46" class="ln s2 sw" marker-end="url(#a-k4pr-ter-2)"/>
      <text x="58" y="130" class="tx-s">bezwzględna</text>
      <line x1="370" y1="90" x2="370" y2="44" class="ln s5 sw" marker-end="url(#a-k4pr-ter-2)"/>
      <line x1="246" y1="90" x2="376" y2="90" class="ln-thin dash"/>
      <line x1="205" y1="40" x2="376" y2="40" class="ln-thin dash"/>
      <text x="330" y="70" class="tx-b t5" text-anchor="middle">300 m</text>
    </svg>`,
    text: `<p><b>Wysokość bezwzględna</b> to wysokość liczona od <b>poziomu morza</b>. Zapisujemy ją w <b>m n.p.m.</b> – metrach nad poziomem morza.</p>
      <p><b>Wysokość względna</b> to wysokość liczona od <b>wybranego miejsca</b>, np. od schroniska albo od podnóża. Obliczasz ją odejmowaniem: szczyt 1200 m n.p.m., schronisko 900 m n.p.m. → 1200 − 900 = <b>300 m</b>.</p>`,
    remember: 'Bezwzględna – od poziomu morza (m n.p.m.). Względna – od wybranego miejsca; to różnica dwóch wysokości bezwzględnych.',
    hook: 'Bezwzględna – „bez względu” na to, gdzie stoisz, zawsze liczysz od morza. Względna – „względem” czegoś innego.',
    check: { q: 'Szczyt ma 850 m n.p.m., a podnóże 500 m n.p.m. Ile wynosi wysokość względna szczytu nad podnóżem?', options: ['350 m', '1350 m', '850 m'], answer: 0, explain: '850 − 500 = 350 m.' },
  },
  {
    title: 'Nizina, wyżyna, góry',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Przekrój: nizina do 300 m n.p.m., wyżyna powyżej 300 m n.p.m. z małymi różnicami wysokości, góry powyżej 300 m n.p.m. z dużymi różnicami wysokości i stromymi stokami.">
      <rect x="10" y="190" width="400" height="20" class="f1"/>
      <path d="M10,190 L10,160 Q50,154 90,160 Q120,164 140,156 L150,110 Q190,100 230,108 Q250,112 262,106 L280,96 L310,30 L335,90 L355,40 L385,110 L410,120 L410,190 Z" class="f3 s3"/>
      <line x1="10" y1="130" x2="410" y2="130" class="ln-thin dash"/>
      <text x="14" y="124" class="tx-s">300 m n.p.m.</text>
      <text x="75" y="182" class="tx-b" text-anchor="middle">nizina</text>
      <text x="205" y="150" class="tx-b" text-anchor="middle">wyżyna</text>
      <text x="345" y="150" class="tx-b" text-anchor="middle">góry</text>
      <text x="75" y="64" class="tx-s" text-anchor="middle">0–300 m n.p.m.</text>
      <text x="205" y="64" class="tx-s" text-anchor="middle">wysoko, ale łagodnie</text>
      <text x="205" y="82" class="tx-s" text-anchor="middle">(różnice do 300 m)</text>
      <text x="345" y="20" class="tx-s" text-anchor="middle">strome stoki</text>
    </svg>`,
    text: `<p><b>Nizina</b> leży od 0 do 300 m n.p.m. i jest płaska albo lekko falista, np. wybrzeże Bałtyku, Nizina Mazowiecka.</p>
      <p><b>Wyżyna</b> i <b>góry</b> leżą powyżej 300 m n.p.m. Różnica: na wyżynie różnice wysokości są <b>nie większe niż 300 m</b> (np. Wyżyna Lubelska, Wyżyna Krakowsko-Częstochowska), a w górach – <b>większe niż 300 m</b>, stoki są strome (np. Tatry, Sudety, Beskidy, Bieszczady).</p>`,
    remember: 'Nizina: 0–300 m n.p.m. Wyżyna: ponad 300 m n.p.m., różnice do 300 m. Góry: ponad 300 m n.p.m., różnice ponad 300 m.',
    hook: 'Liczba 300 rządzi wszystkim: nizina – poniżej 300, wyżyna – „wysoko, ale płasko”, góry – „wysoko i stromo”.',
  },
  {
    title: 'Od Rysów do Żuław',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="Skala wysokości: Rysy w Tatrach 2499 m n.p.m. – góry wysokie; Sudety i Beskidy – góry średnie; Góry Świętokrzyskie – góry niskie; poziom morza 0 m; Żuławy Wiślane – depresja, ok. 1,8 m poniżej poziomu morza.">
      <line x1="60" y1="20" x2="60" y2="210" class="ln sw"/>
      <rect x="10" y="186" width="400" height="10" class="f1"/>
      <rect x="64" y="196" width="120" height="14" class="f4 s4"/>
      <path d="M70,186 L100,30 L130,186 Z" class="f2 s2"/>
      <path d="M150,186 L180,110 L210,186 Z" class="f3 s3"/>
      <path d="M230,186 L260,150 L290,186 Z" class="f3 s3"/>
      <text x="112" y="34" class="tx-b">Rysy 2499 m n.p.m.</text>
      <text x="140" y="60" class="tx-s">góry wysokie: Tatry</text>
      <text x="230" y="110" class="tx-s">góry średnie:</text>
      <text x="230" y="128" class="tx-s">Sudety, Beskidy</text>
      <text x="296" y="160" class="tx-s">góry niskie:</text>
      <text x="296" y="176" class="tx-s">Świętokrzyskie</text>
      <text x="8" y="194" class="tx-s">0 m</text>
      <text x="190" y="222" class="tx-s">depresja: Żuławy Wiślane</text>
    </svg>`,
    text: `<p>Góry dzielimy na <b>niskie</b> (np. Góry Świętokrzyskie – łagodne stoki, zaokrąglone szczyty), <b>średnie</b> (np. Sudety, Beskidy, Bieszczady) i <b>wysokie</b>. Jedyne góry wysokie w Polsce to <b>Tatry</b> – mają ostre szczyty i bardzo strome stoki. Tu jest najwyższy szczyt Polski – <b>Rysy (2499 m n.p.m.)</b>.</p>
      <p>Najniżej leżą <b>Żuławy Wiślane</b> koło ujścia Wisły. Część z nich to <b>depresja</b> – ląd poniżej poziomu morza (najniższy punkt ok. 1,8 m p.p.m.).</p>`,
    remember: 'Najwyżej: Rysy w Tatrach (2499 m n.p.m.). Najniżej: depresja na Żuławach Wiślanych.',
    hook: 'Depresja to ląd, który „zszedł pod morze” – ale nie jest zalany, bo od morza oddziela go wyższy ląd.',
    check: { q: 'Gdzie w Polsce są jedyne góry wysokie?', options: ['w Tatrach', 'w Sudetach', 'w Górach Świętokrzyskich'], answer: 0, explain: 'Tatry to jedyne góry wysokie w Polsce. Sudety to góry średnie, a Świętokrzyskie – niskie.' },
  },
  {
    title: 'Poziomice i kolory na mapie',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="U góry przekrój wzgórza przecięty liniami co 100 m: lewy stok stromy, prawy łagodny. Pod spodem te same poziomice na mapie: po stronie stromej leżą gęsto, po stronie łagodnej rzadko. Obok kolory mapy: zielony nisko, żółty, pomarańczowy, brązowy wysoko.">
      <path d="M20,110 L80,20 Q90,14 100,22 L250,110 Z" class="f3 s3"/>
      <line x1="20" y1="80" x2="270" y2="80" class="ln-thin dash"/>
      <line x1="20" y1="50" x2="270" y2="50" class="ln-thin dash"/>
      <ellipse cx="135" cy="170" rx="115" ry="44" class="ln"/>
      <ellipse cx="108" cy="170" rx="74" ry="30" class="ln"/>
      <ellipse cx="88" cy="170" rx="34" ry="16" class="ln"/>
      <text x="44" y="126" class="tx-s">stromo</text>
      <text x="196" y="126" class="tx-s">łagodnie</text>
      <rect x="300" y="30" width="30" height="34" class="f2 s2"/>
      <rect x="300" y="64" width="30" height="34" class="f2"/>
      <rect x="300" y="98" width="30" height="34" class="f4"/>
      <rect x="300" y="132" width="30" height="34" class="f3"/>
      <rect x="300" y="166" width="30" height="34" class="f1"/>
      <text x="338" y="52" class="tx-s">najwyżej</text>
      <text x="338" y="154" class="tx-s">niziny</text>
      <text x="338" y="188" class="tx-s">wody</text>
    </svg>`,
    text: `<p><b>Poziomica</b> to linia na mapie, która łączy punkty o <b>tej samej wysokości</b> bezwzględnej. Wyobraź sobie, że kroisz górę poziomo co 100 m i patrzysz na plasterki z góry.</p>
      <p>Gdy poziomice leżą <b>gęsto</b>, stok jest <b>stromy</b>. Gdy <b>rzadko</b> – stok jest <b>łagodny</b>.</p>
      <p>Na <b>mapie hipsometrycznej</b> obszary między poziomicami mają kolory: zielony – nisko (niziny), żółty i pomarańczowy – wyżej, brązowy (albo czerwony) – najwyżej. Niebieski to wody. Dokładne wysokości odczytasz z <b>legendy</b>.</p>`,
    remember: 'Poziomice gęsto – stromo; rzadko – łagodnie. Kolory mapy zawsze sprawdzaj w legendzie.',
    hook: 'Schody: krótkie stopnie blisko siebie – wspinasz się stromo. Poziomice to takie „stopnie” na mapie.',
    check: { q: 'Poziomice leżą bardzo blisko siebie. Jaki jest tam stok?', options: ['stromy', 'łagodny', 'płaski'], answer: 0, explain: 'Gęste poziomice oznaczają, że na krótkim odcinku teren bardzo się wznosi – stok jest stromy.' },
  },
];

window.LESSONS['przyroda/rzeka-jezioro'] = [
  {
    title: 'Woda płynie albo stoi',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Dwa kafelki. Wody płynące: strumień, potok, rzeka, kanał – woda płynie z wyżej położonych miejsc w niższe. Wody stojące: jezioro, staw, zbiornik zaporowy – woda wypełnia zagłębienie terenu.">
      <defs><marker id="a-k4pr-rz-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="8" y="8" width="198" height="184" rx="14" class="f1 s1"/>
      <rect x="214" y="8" width="198" height="184" rx="14" class="f3 s3"/>
      <text x="107" y="36" class="tx-b" text-anchor="middle">wody płynące</text>
      <text x="313" y="36" class="tx-b" text-anchor="middle">wody stojące</text>
      <path d="M30,70 C70,60 90,100 130,90 C160,84 170,100 186,104" class="ln s1 sw" marker-end="url(#a-k4pr-rz-1)"/>
      <ellipse cx="313" cy="88" rx="70" ry="22" class="bg s1 sw"/>
      <g class="tx" text-anchor="middle">
        <text x="107" y="142">strumień, potok,</text><text x="107" y="164">rzeka, kanał</text>
        <text x="313" y="142">jezioro, staw,</text><text x="313" y="164">zbiornik zaporowy</text>
      </g>
    </svg>`,
    text: `<p><b>Wody płynące</b> płyną w jednym kierunku – z miejsc położonych wyżej w niższe. To strumienie, potoki, rzeki i kanały (kanał to koryto wykopane przez ludzi).</p>
      <p><b>Wody stojące</b> wypełniają zagłębienie terenu i nie płyną z miejsca na miejsce. To jeziora, stawy i zbiorniki zaporowe.</p>`,
    remember: 'Płynące: strumień, potok, rzeka, kanał. Stojące: jezioro, staw, zbiornik zaporowy.',
    hook: 'Rzeka to droga – woda nią podróżuje. Jezioro to miska – woda w niej mieszka.',
    check: { q: 'Która woda jest wodą stojącą?', options: ['jezioro', 'potok', 'kanał'], answer: 0, explain: 'Jezioro wypełnia zagłębienie terenu – to woda stojąca. Potok i kanał to wody płynące.' },
  },
  {
    title: 'Rzeka jak drzewo',
    svg: `<svg viewBox="0 0 420 230" role="img" aria-label="System rzeczny: w górach źródło rzeki głównej, do niej wpadają dopływy, rzeka główna uchodzi do morza. Całość wygląda jak drzewo.">
      <rect x="10" y="190" width="400" height="30" class="f1"/>
      <text x="340" y="212" class="tx-s">morze</text>
      <path d="M210,40 C200,80 230,110 205,150 C195,170 205,180 210,190" class="ln s1 sw"/>
      <path d="M90,60 C120,100 160,110 214,120" class="ln s1"/>
      <path d="M330,50 C300,90 260,110 210,150" class="ln s1"/>
      <path d="M60,130 C110,150 160,160 204,165" class="ln s1"/>
      <circle cx="210" cy="40" r="5" class="t2"/>
      <text x="210" y="26" class="tx-b" text-anchor="middle">źródło</text>
      <text x="300" y="184" class="tx-b" text-anchor="middle">ujście</text>
      <line x1="270" y1="182" x2="216" y2="188" class="ln-thin"/>
      <text x="80" y="50" class="tx-s" text-anchor="middle">dopływ</text>
      <text x="350" y="40" class="tx-s" text-anchor="middle">dopływ</text>
      <text x="44" y="122" class="tx-s">dopływ</text>
      <text x="216" y="66" class="tx-s">rzeka główna</text>
    </svg>`,
    text: `<p>Rzeka zaczyna się w <b>źródle</b> (najczęściej w górach albo na wyżynie), a kończy w <b>ujściu</b> – tam wpada do innej rzeki, jeziora albo morza. Wisła zaczyna się na stoku <b>Baraniej Góry</b> w Beskidzie Śląskim i uchodzi do <b>Zatoki Gdańskiej</b>.</p>
      <p><b>Dopływ</b> to rzeka, która wpada do większej rzeki. <b>Rzeka główna</b> wpada prosto do morza i nie jest niczyim dopływem (np. Wisła, Odra). Rzeka główna ze wszystkimi dopływami to <b>system rzeczny</b>, a cały obszar, z którego woda do nich spływa – <b>dorzecze</b>.</p>`,
    remember: 'Źródło – początek, ujście – koniec. Rzeka główna + dopływy = system rzeczny.',
    hook: 'System rzeczny to drzewo do góry nogami: rzeka główna to pień, dopływy to gałęzie, a ujście – korzeń w morzu.',
  },
  {
    title: 'Lewy czy prawy brzeg?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Rzeka płynie z lewej strony rysunku do prawej. Ludzik stoi twarzą w kierunku płynięcia wody. Górny brzeg rysunku to jego lewa strona – lewy brzeg, dolny – prawy brzeg.">
      <defs><marker id="a-k4pr-rz-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="80" width="400" height="44" class="f1"/>
      <line x1="10" y1="80" x2="410" y2="80" class="ln s3 sw"/>
      <line x1="10" y1="124" x2="410" y2="124" class="ln s3 sw"/>
      <line x1="230" y1="102" x2="330" y2="102" class="ln s2 sw" marker-end="url(#a-k4pr-rz-2)"/>
      <text x="80" y="108" class="tx-s" text-anchor="middle">od źródła</text>
      <text x="370" y="108" class="tx-s" text-anchor="middle">do ujścia</text>
      <text x="170" y="112" class="tx-b" text-anchor="middle">🧍</text>
      <text x="210" y="40" class="tx-b t3" text-anchor="middle">lewy brzeg</text>
      <text x="210" y="60" class="tx-s" text-anchor="middle">(po lewej ręce)</text>
      <text x="210" y="158" class="tx-b t3" text-anchor="middle">prawy brzeg</text>
      <text x="210" y="178" class="tx-s" text-anchor="middle">(po prawej ręce)</text>
    </svg>`,
    text: `<p>Stań <b>tyłem do źródła</b>, a <b>twarzą do ujścia</b> – patrz tam, dokąd płynie woda. Po lewej ręce masz <b>lewy brzeg</b>, a po prawej – <b>prawy brzeg</b>. Tak samo rozpoznajesz dopływy: lewe wpadają z lewej strony, prawe – z prawej.</p>
      <p>Prawe dopływy Wisły to np. Dunajec, San i Narew, a lewe – Pilica i Bzura. Do Odry z prawej strony wpada Warta, a z lewej – np. Nysa Łużycka i Bóbr.</p>`,
    remember: 'Lewy i prawy brzeg określasz, patrząc z biegiem rzeki – twarzą do ujścia.',
    hook: 'Płyń razem z rzeką jak kajakarz: co masz po lewej ręce – to lewy brzeg.',
    check: { q: 'Rzeka płynie na rysunku z prawej strony do lewej. Stajesz twarzą do ujścia. Który brzeg jest wtedy u góry rysunku?', options: ['prawy', 'lewy'], answer: 0, explain: 'Gdy patrzysz w lewo (tam płynie woda), twoja prawa ręka wskazuje górę rysunku. U góry jest więc prawy brzeg.' },
  },
  {
    title: 'Bieg górny, środkowy i dolny',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Trzy kafelki. Bieg górny: szybki nurt, wąska i stroma dolina, wodospady. Bieg środkowy: wolniej, zakola i starorzecze. Bieg dolny: najwolniej, rzeka osadza piasek.">
      <rect x="8" y="8" width="128" height="204" rx="12" class="f2 s2"/>
      <rect x="146" y="8" width="128" height="204" rx="12" class="f4 s4"/>
      <rect x="284" y="8" width="128" height="204" rx="12" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="72" y="34">górny</text><text x="210" y="34">środkowy</text><text x="348" y="34">dolny</text></g>
      <path d="M30,60 L60,120 L84,120 L114,60" class="ln"/>
      <line x1="72" y1="62" x2="72" y2="118" class="ln s1 sw"/>
      <path d="M160,70 C200,50 220,110 190,110 C160,110 200,150 250,130" class="ln s1 sw"/>
      <ellipse cx="236" cy="78" rx="18" ry="10" class="f1 s1"/>
      <path d="M300,96 C330,90 360,100 400,94" class="ln s1 sw"/>
      <ellipse cx="350" cy="112" rx="30" ry="6" class="f4 s4"/>
      <g class="tx-s" text-anchor="middle">
        <text x="72" y="150">szybko</text><text x="72" y="168">wąska, stroma</text><text x="72" y="186">dolina</text><text x="72" y="204">wodospady</text>
        <text x="210" y="150">wolniej</text><text x="210" y="168">zakola</text><text x="210" y="186">starorzecza</text>
        <text x="348" y="150">najwolniej</text><text x="348" y="168">osadza piasek</text><text x="348" y="186">i muł</text>
      </g>
    </svg>`,
    text: `<p>W <b>biegu górnym</b> (zwykle w górach) woda płynie szybko, żłobi wąską, stromą dolinę, tworzy wodospady. W <b>biegu środkowym</b> płynie wolniej, podmywa brzegi i poszerza dolinę – powstają <b>zakola</b> (łuki koryta). Gdy zakole zostanie odcięte od rzeki, powstaje <b>starorzecze</b> – jezioro w dolinie. W <b>biegu dolnym</b> woda płynie najwolniej i osadza piasek i muł.</p>
      <p>Gdy w korycie jest za dużo wody, rzeka wylewa – to <b>powódź</b>. Płaskie dno doliny łatwo zalać, więc nie powinno się tam budować domów.</p>`,
    remember: 'Górny – szybko i stromo; środkowy – zakola i starorzecza; dolny – najwolniej, osadzanie piasku.',
    hook: 'Rzeka jak biegacz: na starcie (w górach) pędzi, w połowie trasy kluczy zakolami, a przed metą (ujściem) ledwo idzie i gubi niesiony piasek.',
  },
  {
    title: 'Jeziora – skąd się wzięły?',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy kafelki. Jezioro polodowcowe – w zagłębieniu po lądolodzie, najwięcej na pojezierzach; Śniardwy największe, Hańcza najgłębsze. Zbiornik zaporowy – za zaporą na rzece, np. Jezioro Solińskie. Staw – zwykle mały, płytki, zrobiony przez człowieka.">
      <rect x="8" y="8" width="128" height="194" rx="12" class="f1 s1"/>
      <rect x="146" y="8" width="128" height="194" rx="12" class="f5 s5"/>
      <rect x="284" y="8" width="128" height="194" rx="12" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="72" y="36">🧊</text><text x="210" y="36">🧱</text><text x="348" y="36">🐟</text></g>
      <g class="tx" text-anchor="middle"><text x="72" y="66">polodowcowe</text><text x="210" y="66">zaporowe</text><text x="348" y="66">staw</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="72" y="96">po lądolodzie,</text><text x="72" y="114">na pojezierzach</text><text x="72" y="140">Śniardwy –</text><text x="72" y="156">największe</text><text x="72" y="176">Hańcza –</text><text x="72" y="192">najgłębsze</text>
        <text x="210" y="96">za zaporą</text><text x="210" y="114">na rzece</text><text x="210" y="148">np. Jezioro</text><text x="210" y="166">Solińskie (San)</text>
        <text x="348" y="96">mały, płytki,</text><text x="348" y="114">zwykle zrobiony</text><text x="348" y="132">przez człowieka</text>
      </g>
    </svg>`,
    text: `<p><b>Jezioro</b> to naturalne zagłębienie terenu wypełnione wodą stojącą. Większość jezior w Polsce to <b>jeziora polodowcowe</b>: dawno temu północ Polski przykrywał lądolód, a w zagłębieniach, które po nim zostały, zebrała się woda. Najwięcej jezior jest na <b>pojezierzach</b> na północy kraju. Największe jest <b>Śniardwy</b>, najgłębsze – <b>Hańcza</b>.</p>
      <p><b>Zbiornik zaporowy</b> powstaje, gdy ludzie zbudują na rzece zaporę, np. Jezioro Solińskie na Sanie. <b>Staw</b> to zwykle mały, płytki zbiornik zrobiony przez człowieka, np. do hodowli ryb.</p>
      <p>W wodzie im głębiej, tym ciemniej, a temperatura zmienia się wolniej niż w powietrzu. Ryby oddychają skrzelami tlenem rozpuszczonym w wodzie. Rzeki i jeziora dają ludziom wodę, ryby, prąd, drogi transportu i miejsca do wypoczynku.</p>`,
    remember: 'Większość polskich jezior – polodowcowe (pojezierza). Największe: Śniardwy. Najgłębsze: Hańcza.',
    hook: 'Hańcza – „H” jak „hen, w głąb” (najgłębsza). Śniardwy – woda „aż po horyzont” (największe).',
    check: { q: 'Które jezioro jest najgłębsze w Polsce?', options: ['Hańcza', 'Śniardwy', 'Jezioro Solińskie'], answer: 0, explain: 'Najgłębsze jest Hańcza, a największe – Śniardwy.' },
  },
];

window.LESSONS['przyroda/metale'] = [
  {
    title: 'Metal czy niemetal?',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Dwa kafelki. Metale: żelazo, miedź, glin – połysk, przewodzą prąd i ciepło, kowalne, prawie wszystkie stałe, rtęć to ciecz. Niemetale: tlen, azot, siarka, węgiel – bez połysku, nie przewodzą, stałe są kruche.">
      <rect x="8" y="8" width="198" height="204" rx="14" class="f1 s1"/>
      <rect x="214" y="8" width="198" height="204" rx="14" class="f4 s4"/>
      <text x="107" y="36" class="tx-b" text-anchor="middle">metale</text>
      <text x="313" y="36" class="tx-b" text-anchor="middle">niemetale</text>
      <text x="107" y="60" class="tx-s" text-anchor="middle">żelazo, miedź, glin, złoto</text>
      <text x="313" y="60" class="tx-s" text-anchor="middle">tlen, azot, siarka, węgiel</text>
      <g class="tx" text-anchor="middle">
        <text x="107" y="94">✨ połysk</text><text x="107" y="120">⚡ prąd – tak</text><text x="107" y="146">🔥 ciepło – tak</text><text x="107" y="172">🔨 kowalne</text>
        <text x="313" y="94">bez połysku</text><text x="313" y="120">⚡ prąd – nie</text><text x="313" y="146">🔥 ciepło – nie</text><text x="313" y="172">kruche (stałe)</text>
      </g>
      <text x="107" y="200" class="tx-s" text-anchor="middle">rtęć – metal ciekły</text>
      <text x="313" y="200" class="tx-s" text-anchor="middle">tlen, azot – gazy</text>
    </svg>`,
    text: `<p><b>Metale</b> (np. żelazo, miedź, glin, cynk, srebro, złoto) mają <b>metaliczny połysk</b>, dobrze <b>przewodzą prąd i ciepło</b> i są <b>kowalne</b> – można je kuć i wyginać. Prawie wszystkie są stałe – tylko <b>rtęć</b> jest cieczą.</p>
      <p><b>Niemetale</b> (np. tlen, azot, siarka, węgiel) zwykle nie mają połysku i nie przewodzą prądu ani ciepła. Tlen i azot to gazy, a stałe niemetale, np. żółta siarka, są kruche. Wyjątek: grafit (węgiel w ołówku) przewodzi prąd.</p>`,
    remember: 'Metale: połysk, przewodzą prąd i ciepło, kowalne. Niemetale: zwykle bez połysku, nie przewodzą, kruche.',
    hook: 'Kabel w ścianie jest z miedzi, a garnek z metalu – bo metal „przepuszcza” prąd i ciepło.',
    check: { q: 'Który metal jest cieczą w temperaturze pokojowej?', options: ['rtęć', 'żelazo', 'miedź'], answer: 0, explain: 'Prawie wszystkie metale są stałe. Wyjątkiem jest rtęć.' },
  },
  {
    title: 'Stopy – metalowe mieszanki',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Przepisy na stopy: żelazo plus węgiel daje stal; miedź plus cyna daje brąz; miedź plus cynk daje mosiądz.">
      <g class="tx" text-anchor="middle">
        <rect x="8" y="16" width="110" height="46" rx="10" class="f1 s1"/><text x="63" y="45">żelazo</text>
        <text x="136" y="45" class="tx-b">+</text>
        <rect x="154" y="16" width="110" height="46" rx="10" class="f5 s5"/><text x="209" y="45">węgiel</text>
        <text x="282" y="45" class="tx-b">=</text>
        <rect x="300" y="16" width="112" height="46" rx="10" class="f3 s3"/><text x="356" y="45" class="tx-b">stal</text>
        <rect x="8" y="86" width="110" height="46" rx="10" class="f2 s2"/><text x="63" y="115">miedź</text>
        <text x="136" y="115" class="tx-b">+</text>
        <rect x="154" y="86" width="110" height="46" rx="10" class="f1 s1"/><text x="209" y="115">cyna</text>
        <text x="282" y="115" class="tx-b">=</text>
        <rect x="300" y="86" width="112" height="46" rx="10" class="f3 s3"/><text x="356" y="115" class="tx-b">brąz</text>
        <rect x="8" y="156" width="110" height="46" rx="10" class="f2 s2"/><text x="63" y="185">miedź</text>
        <text x="136" y="185" class="tx-b">+</text>
        <rect x="154" y="156" width="110" height="46" rx="10" class="f1 s1"/><text x="209" y="185">cynk</text>
        <text x="282" y="185" class="tx-b">=</text>
        <rect x="300" y="156" width="112" height="46" rx="10" class="f3 s3"/><text x="356" y="185" class="tx-b">mosiądz</text>
      </g>
    </svg>`,
    text: `<p><b>Stop</b> powstaje, gdy metal stopi się razem z innym metalem albo z niemetalem (np. węglem), a potem całość zastygnie. Stop jest często <b>twardszy</b> i <b>odporniejszy</b> niż czysty metal.</p>
      <ul><li><b>stal</b> (żelazo + węgiel) – mosty, szyny, narzędzia; <b>stal nierdzewna</b> (z dodatkiem chromu i niklu) – sztućce, zlewy,</li>
      <li><b>brąz</b> (miedź + cyna) – pomniki, dzwony, medale,</li>
      <li><b>mosiądz</b> (miedź + cynk) – klamki, krany, trąbki.</li></ul>`,
    remember: 'Stal = żelazo + węgiel. Brąz = miedź + cyna. Mosiądz = miedź + cynk.',
    hook: 'Ułóż alfabetycznie: Brąz przed Mosiądzem i cyNA przed cyNK. Więc Brąz – cyna, Mosiądz – cynk (oba z miedzią).',
  },
  {
    title: 'Rdza: woda + tlen',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Trzy słoiki z gwoździami po tygodniu. Sucho – gwóźdź prawie bez zmian. Woda z kranu – gwóźdź zardzewiały. Woda z solą – gwóźdź najbardziej zardzewiały.">
      <rect x="20" y="30" width="100" height="120" rx="10" class="bg ln"/>
      <rect x="160" y="30" width="100" height="120" rx="10" class="bg ln"/>
      <rect x="300" y="30" width="100" height="120" rx="10" class="bg ln"/>
      <rect x="162" y="80" width="96" height="68" rx="8" class="f1"/>
      <rect x="302" y="80" width="96" height="68" rx="8" class="f1"/>
      <line x1="70" y1="60" x2="70" y2="140" class="ln sw"/>
      <line x1="210" y1="60" x2="210" y2="140" class="ln s2 sw"/>
      <line x1="350" y1="60" x2="350" y2="140" class="ln s2 sw"/>
      <g class="t2"><circle cx="206" cy="100" r="4"/><circle cx="214" cy="120" r="4"/><circle cx="346" cy="90" r="5"/><circle cx="354" cy="104" r="5"/><circle cx="346" cy="120" r="5"/><circle cx="354" cy="134" r="5"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="172">sucho</text><text x="210" y="172">woda z kranu</text><text x="350" y="172">woda z solą</text></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="198">bez zmian</text><text x="210" y="198">rdza</text><text x="350" y="198">dużo rdzy</text></g>
    </svg>`,
    text: `<p><b>Korozja</b> to niszczenie metali pod wpływem otoczenia. Korozja żelaza i stali to <b>rdzewienie</b>. Żelazo rdzewieje, gdy ma dostęp do <b>wody</b> (wilgoci) i <b>tlenu</b> z powietrza.</p>
      <p><b>Sól</b> przyspiesza rdzewienie. Dlatego zimą, na drogach posypanych solą, samochody szybciej rdzewieją.</p>`,
    remember: 'Rdzewienie = żelazo + woda + tlen. Sól je przyspiesza.',
    hook: 'Rdza lubi mokro i słono – jak spacer po plaży nad morzem.',
    check: { q: 'W którym słoiku gwóźdź zardzewieje najszybciej?', options: ['w wodzie z solą', 'w wodzie z kranu', 'w suchym słoiku'], answer: 0, explain: 'Do rdzewienia potrzebne są woda i tlen, a sól przyspiesza ten proces.' },
  },
  {
    title: 'Jak uratować metal przed rdzą?',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Cztery kafelki: malowanie farbą – płot, smarowanie olejem – łańcuch roweru, pokrywanie cynkiem – rynna, stal nierdzewna – sztućce.">
      <rect x="8" y="8" width="96" height="184" rx="12" class="f2 s2"/>
      <rect x="112" y="8" width="96" height="184" rx="12" class="f4 s4"/>
      <rect x="216" y="8" width="96" height="184" rx="12" class="f1 s1"/>
      <rect x="320" y="8" width="92" height="184" rx="12" class="f3 s3"/>
      <g class="tx-b" text-anchor="middle"><text x="56" y="50">🖌️</text><text x="160" y="50">🛢️</text><text x="264" y="50">🛡️</text><text x="366" y="50">🍴</text></g>
      <g class="tx" text-anchor="middle"><text x="56" y="96">farba</text><text x="160" y="96">olej</text><text x="264" y="96">cynk</text><text x="366" y="96">stal</text><text x="366" y="116" class="tx-s">nierdzewna</text></g>
      <g class="tx-s" text-anchor="middle"><text x="56" y="150">płot, most</text><text x="160" y="150">łańcuch</text><text x="160" y="168">roweru</text><text x="264" y="150">rynna,</text><text x="264" y="168">siatka</text><text x="366" y="150">sztućce,</text><text x="366" y="168">zlew</text></g>
    </svg>`,
    text: `<p>Żeby metal nie rdzewiał, trzeba odciąć go od wody i powietrza albo użyć stopu, który nie rdzewieje:</p>
      <ul><li><b>malowanie</b> farbą (płoty, mosty),</li>
      <li><b>smarowanie</b> olejem lub smarem (łańcuch roweru),</li>
      <li><b>pokrywanie innym metalem</b>, np. cynkiem – <b>cynkowanie</b> (rynny, siatki) – albo chromem,</li>
      <li>używanie <b>stali nierdzewnej</b> (sztućce, zlewy).</li></ul>
      <p>Najprościej: trzymaj metalowe rzeczy w suchym miejscu i wycieraj je do sucha.</p>`,
    remember: 'Ochrona przed rdzą: farba, olej, warstwa cynku lub chromu, stal nierdzewna, suche miejsce.',
    hook: 'Metal trzeba „ubrać w płaszcz przeciwdeszczowy” – z farby, oleju albo cynku.',
  },
  {
    title: 'Ciepło płynie od cieplejszego',
    svg: `<svg viewBox="0 0 420 220" role="img" aria-label="Kubek gorącej herbaty z dwiema łyżkami: metalowa – nagrzewa się, drewniana – zostaje chłodna. Strzałka: ciepło płynie od cieplejszego do chłodniejszego. Obok: izolatory ciepła – drewno, plastik, styropian, wełna, futro, śnieg.">
      <defs><marker id="a-k4pr-met-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M40,90 L50,190 L150,190 L160,90 Z" class="f2 s2"/>
      <line x1="70" y1="40" x2="88" y2="150" class="ln sw"/>
      <line x1="140" y1="40" x2="118" y2="150" class="ln s4 sw"/>
      <text x="56" y="34" class="tx-s" text-anchor="middle">metal 🔥</text>
      <text x="150" y="30" class="tx-s" text-anchor="middle">drewno ❄️</text>
      <text x="100" y="212" class="tx-s" text-anchor="middle">gorąca herbata</text>
      <line x1="176" y1="60" x2="236" y2="60" class="ln s2 sw" marker-end="url(#a-k4pr-met-1)"/>
      <text x="206" y="44" class="tx-s" text-anchor="middle">ciepło</text>
      <rect x="250" y="20" width="162" height="190" rx="12" class="f1 s1"/>
      <text x="331" y="46" class="tx-b" text-anchor="middle">izolatory</text>
      <g class="tx" text-anchor="middle"><text x="331" y="78">drewno, plastik</text><text x="331" y="104">styropian, wełna</text><text x="331" y="130">futro, pióra</text><text x="331" y="156">śnieg</text></g>
      <text x="331" y="190" class="tx-s" text-anchor="middle">słabo przewodzą ciepło</text>
    </svg>`,
    text: `<p>Ciepło zawsze płynie od ciała <b>cieplejszego</b> do <b>chłodniejszego</b>, aż temperatury się wyrównają. Dlatego herbata stygnie, a łyżeczka w niej się nagrzewa.</p>
      <p><b>Metale</b> dobrze przewodzą ciepło – metalowa łyżka szybko robi się gorąca. Drewno, plastik, styropian, wełna i powietrze to <b>izolatory</b> – przewodzą ciepło słabo. Dlatego uchwyty garnków są z plastiku albo drewna, a domy ociepla się styropianem.</p>
      <p>W przyrodzie przed zimnem chronią <b>futro</b>, <b>pióra i puch</b>, <b>tłuszcz</b> (np. u fok) i <b>pokrywa śnieżna</b>, która jak kołdra chroni glebę i rośliny przed mrozem.</p>`,
    remember: 'Ciepło płynie od cieplejszego do chłodniejszego. Metale – przewodniki ciepła; drewno, plastik, styropian, wełna, powietrze – izolatory.',
    hook: 'Ciepło zachowuje się jak woda: spływa „z góry” (z gorącego) „na dół” (do zimnego), aż się wyrówna.',
    check: { q: 'Która łyżka w gorącej zupie szybciej się nagrzeje?', options: ['metalowa', 'drewniana', 'plastikowa'], answer: 0, explain: 'Metal dobrze przewodzi ciepło. Drewno i plastik to izolatory.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/gestosc'] = [
  {
    title: 'Gęstość – ile masy w tej samej objętości',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dwie kostki tej samej wielkości. W kostce styropianu drobiny są rzadko – mała gęstość. W kostce żelaza drobiny są ciasno upakowane – duża gęstość.">
      <rect x="40" y="20" width="130" height="130" rx="6" class="f4 s4 sw"/>
      <rect x="230" y="20" width="130" height="130" rx="6" class="f1 s1 sw"/>
      <g class="t2"><circle cx="70" cy="50" r="7"/><circle cx="140" cy="60" r="7"/><circle cx="95" cy="95" r="7"/><circle cx="60" cy="125" r="7"/><circle cx="145" cy="120" r="7"/></g>
      <g class="t1">
        <circle cx="250" cy="40" r="8"/><circle cx="272" cy="40" r="8"/><circle cx="294" cy="40" r="8"/><circle cx="316" cy="40" r="8"/><circle cx="338" cy="40" r="8"/>
        <circle cx="250" cy="62" r="8"/><circle cx="272" cy="62" r="8"/><circle cx="294" cy="62" r="8"/><circle cx="316" cy="62" r="8"/><circle cx="338" cy="62" r="8"/>
        <circle cx="250" cy="84" r="8"/><circle cx="272" cy="84" r="8"/><circle cx="294" cy="84" r="8"/><circle cx="316" cy="84" r="8"/><circle cx="338" cy="84" r="8"/>
        <circle cx="250" cy="106" r="8"/><circle cx="272" cy="106" r="8"/><circle cx="294" cy="106" r="8"/><circle cx="316" cy="106" r="8"/><circle cx="338" cy="106" r="8"/>
        <circle cx="250" cy="128" r="8"/><circle cx="272" cy="128" r="8"/><circle cx="294" cy="128" r="8"/><circle cx="316" cy="128" r="8"/><circle cx="338" cy="128" r="8"/>
      </g>
      <g class="tx-b" text-anchor="middle"><text x="105" y="176">styropian</text><text x="295" y="176">żelazo</text></g>
      <g class="tx-s" text-anchor="middle"><text x="105" y="198">mała gęstość</text><text x="295" y="198">duża gęstość</text></g>
    </svg>`,
    text: `<p>Dwie kostki tej samej wielkości mogą mieć zupełnie różną masę. Kostka żelaza jest dużo cięższa niż kostka styropianu – w tej samej objętości mieści się w niej więcej masy.</p>
      <p>Mówimy, że żelazo ma większą <b>gęstość</b>. Gęstość mówi, <b>ile masy mieści się w określonej objętości</b>. W modelu drobinowym – drobiny są upakowane ciaśniej.</p>`,
    remember: 'Gęstość – ile masy mieści się w określonej objętości.',
    hook: 'Plecak pełen książek i plecak pełen waty: ten sam plecak, a masa zupełnie inna.',
    check: { q: 'Kamień i styropian mają tę samą wielkość. Co ma większą gęstość?', options: ['kamień', 'styropian', 'mają taką samą'], answer: 0, explain: 'Kamień w tej samej objętości ma dużo większą masę, więc ma większą gęstość.' },
  },
  {
    title: 'Tonie czy pływa? Decyduje gęstość',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Akwarium z wodą. Na powierzchni pływają korek, kawałek drewna i warstwa oleju – mają mniejszą gęstość niż woda. Na dnie leżą kamień i gwóźdź – mają większą gęstość niż woda.">
      <rect x="40" y="60" width="320" height="130" class="f1"/>
      <path d="M40,30 L40,190 L360,190 L360,30" class="ln sw" fill="none"/>
      <rect x="230" y="52" width="130" height="10" class="f4 s4"/>
      <circle cx="90" cy="60" r="12" class="f2 s2 sw"/>
      <rect x="140" y="50" width="56" height="18" rx="4" class="f2 s2 sw"/>
      <ellipse cx="110" cy="176" rx="26" ry="14" class="f5 s5 sw"/>
      <line x1="190" y1="182" x2="250" y2="182" class="ln sw"/><line x1="190" y1="176" x2="190" y2="188" class="ln sw"/>
      <g class="tx-s" text-anchor="middle"><text x="90" y="24">korek</text><text x="168" y="24">drewno</text><text x="295" y="24">olej</text>
      <text x="110" y="210">kamień</text><text x="220" y="210">gwóźdź</text></g>
      <g class="tx-s t2"><text x="250" y="110">pływa: gęstość</text><text x="250" y="126">mniejsza niż woda</text></g>
      <g class="tx-s t5"><text x="250" y="150">tonie: gęstość</text><text x="250" y="166">większa niż woda</text></g>
    </svg>`,
    text: `<p>Ciało, które ma <b>mniejszą gęstość niż woda</b>, pływa po jej powierzchni (korek, drewno, styropian). Ciało o <b>większej gęstości</b> tonie (kamień, gwóźdź, moneta).</p>
      <p>Tak samo z cieczami: olej ma mniejszą gęstość niż woda, więc zbiera się na jej powierzchni.</p>
      <p>Uwaga: nie decyduje wielkość! Ogromny pień drzewa pływa, a mała moneta tonie.</p>`,
    remember: 'Gęstość mniejsza niż woda – pływa. Większa – tonie.',
    hook: 'Woda to „bramkarz”: przepuszcza na dno tylko to, co gęstsze od niej.',
    check: { q: 'Który przedmiot utonie?', options: ['korek', 'moneta', 'kawałek styropianu'], answer: 1, explain: 'Moneta jest z metalu – ma większą gęstość niż woda, więc tonie.' },
  },
  {
    title: 'Kształt ma znaczenie',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwa naczynia z wodą. W lewym kulka z plasteliny leży na dnie – tonie. W prawym łódeczka z tej samej plasteliny pływa na powierzchni.">
      <rect x="20" y="70" width="170" height="110" class="f1"/>
      <rect x="210" y="70" width="170" height="110" class="f1"/>
      <path d="M20,40 L20,180 L190,180 L190,40" class="ln sw" fill="none"/>
      <path d="M210,40 L210,180 L380,180 L380,40" class="ln sw" fill="none"/>
      <circle cx="105" cy="164" r="15" class="f5 s5 sw"/>
      <path d="M250,60 L340,60 L325,82 L265,82 Z" class="f5 s5 sw"/>
      <g class="tx-s" text-anchor="middle"><text x="105" y="196">kulka – tonie</text><text x="295" y="196">łódka – pływa</text></g>
      <text x="200" y="24" class="tx-s" text-anchor="middle">ta sama plastelina</text>
    </svg>`,
    text: `<p>Kulka z plasteliny tonie. Ale gdy z <b>tej samej</b> plasteliny ulepisz łódeczkę – będzie pływać!</p>
      <p>Łódka zamyka w sobie dużo powietrza. Plastelina razem z powietrzem w środku jest „lżejsza” niż tyle samo wody. Dlatego pływają ogromne statki ze stali, choć sama stal tonie.</p>`,
    remember: 'Zmiana kształtu może sprawić, że przedmiot zacznie pływać.',
    hook: 'Statek to pływający „pojemnik na powietrze”.',
    check: { q: 'Dlaczego stalowy statek nie tonie?', options: ['bo stal ma mniejszą gęstość niż woda', 'bo w kadłubie jest dużo powietrza', 'bo statek jest pomalowany'], answer: 1, explain: 'Sama stal tonie. Statek pływa dzięki kształtowi – pusty kadłub wypełnia powietrze.' },
  },
  {
    title: 'Woda jest wyjątkowa – lód na górze',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Przekrój jeziora zimą. Na górze warstwa lodu, pod nim woda o temperaturze bliskiej 0 stopni, na dnie najgęstsza woda o temperaturze około 4 stopni. Ryby zimują przy dnie.">
      <path d="M20,40 L380,40 L360,200 L40,200 Z" class="f1 s1"/>
      <rect x="20" y="40" width="360" height="22" class="bg ln"/>
      <text x="200" y="56" class="tx-s" text-anchor="middle">lód (0°C)</text>
      <text x="200" y="100" class="tx-s" text-anchor="middle">woda chłodniejsza – bliżej 0°C</text>
      <text x="200" y="176" class="tx-b" text-anchor="middle">ok. 4°C – najgęstsza</text>
      <text x="100" y="150" class="tx">🐟</text><text x="290" y="150" class="tx">🐟</text>
      <text x="200" y="24" class="tx-s" text-anchor="middle">❄️ mróz nad jeziorem</text>
    </svg>`,
    text: `<p>Większość substancji w stanie stałym ma większą gęstość niż w ciekłym. <b>Woda jest inna</b>: lód ma mniejszą gęstość niż woda, dlatego pływa.</p>
      <p>Woda jest najgęstsza w temperaturze ok. <b>4°C</b>. Zimą taka woda opada na dno, a lód tworzy się na powierzchni. Lód działa jak przykrywka – jezioro nie zamarza do dna i ryby przeżywają zimę.</p>
      <p>Gęstość zależy też od temperatury: ciepłe powietrze i ciepła woda unoszą się nad zimnymi (tak lata balon na ogrzane powietrze).</p>`,
    remember: 'Lód pływa, a najgęstsza woda (ok. 4°C) jest na dnie jeziora.',
    hook: 'Lód to pokrywka na garnku jeziora – trzyma ciepło pod spodem.',
    check: { q: 'W jakiej temperaturze woda ma największą gęstość?', options: ['0°C', 'ok. 4°C', '100°C'], answer: 1, explain: 'Najgęstsza jest woda o temperaturze ok. 4°C – zimą zbiera się przy dnie jezior.' },
  },
  {
    title: 'Jak organizmy radzą sobie w wodzie?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Ryba z zaznaczonym pęcherzem pławnym – workiem z gazem. Liście grzybieni z powietrzem w środku pływają na wodzie. Kamizelka ratunkowa utrzymuje człowieka na wodzie.">
      <rect x="0" y="40" width="400" height="160" class="f1"/>
      <line x1="0" y1="40" x2="400" y2="40" class="ln"/>
      <path d="M40,120 Q100,70 170,120 Q100,170 40,120 Z" class="f2 s2 sw"/>
      <path d="M170,120 L200,96 L200,144 Z" class="f2 s2 sw"/>
      <ellipse cx="105" cy="118" rx="30" ry="12" class="bg ln"/>
      <circle cx="62" cy="112" r="4" class="t1"/>
      <text x="105" y="174" class="tx-s" text-anchor="middle">pęcherz pławny – worek z gazem</text>
      <ellipse cx="270" cy="40" rx="34" ry="8" class="f3 s3 sw"/><ellipse cx="350" cy="40" rx="30" ry="7" class="f3 s3 sw"/>
      <text x="310" y="24" class="tx-s" text-anchor="middle">liście grzybieni</text>
      <text x="310" y="110" class="tx" text-anchor="middle">🦺 kamizelka</text>
      <text x="310" y="134" class="tx-s" text-anchor="middle">lekki materiał</text>
    </svg>`,
    text: `<p>Wiele ryb ma <b>pęcherz pławny</b> – worek wypełniony gazem. Zmieniając ilość gazu, ryba bez wysiłku unosi się albo opada. Opływowy kształt ciała ryb i fok ułatwia pływanie.</p>
      <p>Rośliny wodne, np. grzybienie, mają w liściach i łodygach dużo powietrza – ich liście unoszą się na wodzie. Ludzie korzystają z tej samej zasady: kamizelka ratunkowa jest wypełniona lekkim materiałem albo powietrzem.</p>
      <p>Pamiętaj też: w słonej wodzie łatwiej się unosić niż w słodkiej, bo słona ma większą gęstość.</p>`,
    remember: 'Powietrze lub gaz w ciele (albo w kamizelce) pomaga utrzymać się na wodzie.',
    check: { q: 'W której wodzie łatwiej się unosić?', options: ['w słodkiej, w jeziorze', 'w słonej, w morzu', 'w obu tak samo'], answer: 1, explain: 'Słona woda ma większą gęstość niż słodka, więc mocniej utrzymuje ciało.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/sily'] = [
  {
    title: 'Grawitacja – Ziemia przyciąga wszystko',
    svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Kula ziemska. Ludzie stoją na górze, na dole, z lewej i z prawej strony Ziemi. Strzałki pokazują, że dla każdego z nich „w dół” oznacza w stronę środka Ziemi.">
      <defs><marker id="a-p9-si-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="200" cy="118" r="62" class="f3 s3 sw"/>
      <circle cx="200" cy="118" r="4" class="t2"/>
      <g class="ln s2 sw"><path d="M200,28 L200,52" marker-end="url(#a-p9-si-1)"/><path d="M200,208 L200,184" marker-end="url(#a-p9-si-1)"/><path d="M110,118 L134,118" marker-end="url(#a-p9-si-1)"/><path d="M290,118 L266,118" marker-end="url(#a-p9-si-1)"/></g>
      <g class="tx" text-anchor="middle"><text x="200" y="22">🧍</text><text x="200" y="228">🧍</text><text x="96" y="124">🧍</text><text x="304" y="124">🧍</text></g>
      <text x="200" y="112" class="tx-s" text-anchor="middle">Ziemia</text>
      <text x="390" y="40" class="tx-s" text-anchor="end">„w dół” = w stronę</text>
      <text x="390" y="56" class="tx-s" text-anchor="end">środka Ziemi</text>
    </svg>`,
    text: `<p>Ziemia <b>przyciąga</b> wszystkie ciała: ciebie, piłkę, krople deszczu. To przyciąganie to <b>siła grawitacji</b>. Dlatego upuszczony przedmiot spada, a woda w rzece płynie z gór w dół.</p>
      <p>Masę ciała mierzymy <b>wagą</b>. Na Księżycu twoja masa byłaby taka sama, ale Księżyc przyciąga ok. 6 razy słabiej – można by na nim skakać dużo wyżej.</p>`,
    remember: 'Grawitacja – przyciąganie ciał przez Ziemię. Masę mierzymy wagą.',
    hook: 'Rzuć piłkę w górę – zawsze wróci. Ziemia ściąga do siebie wszystko, co ma masę.',
    check: { q: 'Co zmieni się, gdy astronauta stanie na Księżycu?', options: ['jego masa zmaleje', 'Księżyc będzie go przyciągał słabiej niż Ziemia', 'nic nie będzie go przyciągać'], answer: 1, explain: 'Masa się nie zmienia, ale Księżyc przyciąga ok. 6 razy słabiej niż Ziemia.' },
  },
  {
    title: 'Tarcie – hamulec między powierzchniami',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Klocek pchany po gładkim lodzie – mała strzałka tarcia. Ten sam klocek pchany po szorstkim dywanie – duża strzałka tarcia, skierowana przeciwnie do ruchu.">
      <defs><marker id="a-p9-si-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t3"/></marker>
      <marker id="a-p9-si-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="20" y="80" width="360" height="12" class="f1 s1"/>
      <rect x="160" y="40" width="70" height="40" rx="4" class="f4 s4 sw"/>
      <path d="M236,60 L300,60" class="ln s3 sw" marker-end="url(#a-p9-si-2)"/>
      <path d="M156,74 L136,74" class="ln s2 sw" marker-end="url(#a-p9-si-3)"/>
      <text x="30" y="112" class="tx-s">gładki lód – małe tarcie</text>
      <rect x="20" y="180" width="360" height="12" class="f2 s2"/>
      <rect x="160" y="140" width="70" height="40" rx="4" class="f4 s4 sw"/>
      <path d="M236,160 L300,160" class="ln s3 sw" marker-end="url(#a-p9-si-2)"/>
      <path d="M156,174 L90,174" class="ln s2 sw" marker-end="url(#a-p9-si-3)"/>
      <text x="30" y="208" class="tx-s">szorstki dywan – duże tarcie</text>
      <g class="tx-s"><text x="306" y="64" class="t3">ruch</text><text x="306" y="164" class="t3">ruch</text></g>
      <text x="200" y="22" class="tx-s" text-anchor="middle">tarcie działa przeciwnie do ruchu</text>
    </svg>`,
    text: `<p><b>Tarcie</b> to siła, która <b>utrudnia przesuwanie się</b> jednego ciała po drugim. Działa przeciwnie do ruchu – dlatego toczona piłka w końcu staje.</p>
      <p>Tarcie jest większe na powierzchni <b>szorstkiej</b> niż gładkiej. Rośnie też, gdy ciało <b>mocniej naciska</b> na podłoże – pełne pudło trudniej przesunąć niż puste.</p>`,
    remember: 'Tarcie zależy od rodzaju powierzchni i od nacisku.',
    hook: 'Spróbuj przesunąć dłoń po stole – lekko i mocno dociskając. Czujesz różnicę? To tarcie.',
    check: { q: 'Po której powierzchni sanki zjadą najłatwiej?', options: ['po lodzie', 'po trawie', 'po asfalcie'], answer: 0, explain: 'Lód jest gładki – tarcie jest bardzo małe.' },
  },
  {
    title: 'Więcej czy mniej tarcia?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Tabela. Więcej tarcia: bieżnik butów, piasek na lodzie, szczecinki dżdżownicy. Mniej tarcia: łyżwy, smar w rowerze, śluz ślimaka.">
      <rect x="10" y="10" width="185" height="200" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="200" rx="12" class="f1 s1"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">więcej tarcia</text><text x="297" y="38">mniej tarcia</text></g>
      <g class="tx"><text x="22" y="82">🥾 bieżnik</text><text x="22" y="132">🏖️ piasek na lodzie</text><text x="22" y="182">🪱 szczecinki</text>
      <text x="217" y="82">⛸️ łyżwy</text><text x="217" y="132">🚲 smar, olej</text><text x="217" y="182">🐌 śluz</text></g>
    </svg>`,
    text: `<p>Czasem tarcie jest <b>potrzebne</b> – bez niego nie dałoby się chodzić ani hamować. Wtedy je zwiększamy: buty z bieżnikiem, opony zimowe, piasek na oblodzonym chodniku.</p>
      <p>Czasem <b>przeszkadza</b> – wtedy je zmniejszamy: smarujemy łańcuch roweru, a łyżwy mają gładkie płozy.</p>
      <p>W przyrodzie: <b>dżdżownica</b> zaczepia się o glebę szczecinkami (więcej tarcia), a śluz pomaga jej się przesuwać (mniej tarcia). Śluz pomaga też ślimakom, a ryby mają śliską skórę.</p>`,
    remember: 'Szorstko – więcej tarcia. Gładko i ślisko – mniej tarcia.',
    hook: 'Dżdżownica ma „kolce i smar” w jednym: szczecinki się trzymają, śluz się ślizga.',
    check: { q: 'Który przykład zmniejsza tarcie?', options: ['piasek na lodzie', 'śluz ślimaka', 'bieżnik na butach'], answer: 1, explain: 'Śluz jest śliski – ślimak łatwiej sunie po podłożu. Piasek i bieżnik zwiększają tarcie.' },
  },
  {
    title: 'Opór powietrza – kartka kontra kulka',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Płaska kartka spada powoli – duża powierzchnia, duży opór powietrza. Kartka zgnieciona w kulkę spada szybko – mały opór. Spadochron ma ogromną powierzchnię i opada powoli.">
      <defs><marker id="a-p9-si-4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker>
      <marker id="a-p9-si-5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <rect x="30" y="70" width="90" height="6" class="f4 s4"/>
      <path d="M75,84 L75,110" class="ln s2 sw" marker-end="url(#a-p9-si-4)"/>
      <path d="M75,62 L75,30" class="ln s1 sw" marker-end="url(#a-p9-si-5)"/>
      <circle cx="200" cy="74" r="12" class="f4 s4 sw"/>
      <path d="M200,90 L200,160" class="ln s2 sw" marker-end="url(#a-p9-si-4)"/>
      <path d="M200,58 L200,46" class="ln s1 sw" marker-end="url(#a-p9-si-5)"/>
      <path d="M290,70 Q330,20 370,70 Z" class="f5 s5 sw"/>
      <line x1="290" y1="70" x2="330" y2="110" class="ln-thin"/><line x1="370" y1="70" x2="330" y2="110" class="ln-thin"/>
      <text x="330" y="124" class="tx" text-anchor="middle">🧍</text>
      <g class="tx-s" text-anchor="middle"><text x="75" y="190">płaska kartka</text><text x="75" y="206">spada wolno</text>
      <text x="200" y="190">kulka</text><text x="200" y="206">spada szybko</text>
      <text x="330" y="190">spadochron</text><text x="330" y="206">opada wolno</text></g>
      <text x="200" y="20" class="tx-s t1" text-anchor="middle">niebieskie strzałki – opór powietrza</text>
    </svg>`,
    text: `<p><b>Opór powietrza</b> to siła, którą powietrze hamuje poruszające się ciała. Czujesz go, gdy szybko jedziesz na rowerze.</p>
      <p>Opór jest tym większy, im <b>większą powierzchnię</b> ma ciało i im <b>szybciej</b> się porusza. Jest mniejszy, gdy ciało ma <b>kształt opływowy</b> – wydłużony i zwężony z przodu, jak ryba albo kropla.</p>
      <p>Zrób próbę: upuść jednocześnie płaską kartkę i kartkę zgniecioną w kulkę.</p>`,
    remember: 'Duża powierzchnia i duża prędkość – duży opór. Kształt opływowy – mały opór.',
    hook: 'Kolarz pochyla się nisko nad kierownicą – ma mniejszą powierzchnię „pod wiatr”, więc mniejszy opór.',
    check: { q: 'Dlaczego spadochron spowalnia spadanie?', options: ['jest ciężki', 'ma dużą powierzchnię, więc opór powietrza jest duży', 'zmniejsza grawitację'], answer: 1, explain: 'Duża powierzchnia oznacza duży opór powietrza – spadochroniarz opada powoli.' },
  },
  {
    title: 'Jak latają zwierzęta i nasiona',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Kafelki: ptak – skrzydła, pióra, lekkie kości puste w środku; owad – skrzydła i lekkie ciało; dmuchawiec – puch działa jak spadochron; klon – skrzydlak wiruje jak śmigło">
      <rect x="10" y="10" width="185" height="96" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="96" rx="12" class="f3 s3"/>
      <rect x="10" y="114" width="185" height="96" rx="12" class="f4 s4"/>
      <rect x="205" y="114" width="185" height="96" rx="12" class="f2 s2"/>
      <g class="tx-b"><text x="22" y="40">🐦 ptak</text><text x="217" y="40">🦋 owad</text><text x="22" y="144">🌼 dmuchawiec</text><text x="217" y="144">🍁 klon</text></g>
      <g class="tx-s"><text x="22" y="66">skrzydła, pióra,</text><text x="22" y="84">lekkie, puste kości</text>
      <text x="217" y="66">skrzydła,</text><text x="217" y="84">lekkie ciało</text>
      <text x="22" y="170">puch działa</text><text x="22" y="188">jak spadochron</text>
      <text x="217" y="170">skrzydlak wiruje</text><text x="217" y="188">jak śmigło</text></g>
    </svg>`,
    text: `<p>Wszystkie organizmy zdolne do lotu – ptaki, owady, nietoperze – mają <b>skrzydła</b> i <b>lekkie ciało</b>. Ptaki mają też pióra, opływowy kształt i lekkie kości, często puste w środku.</p>
      <p>Ptak <b>zwiększa opór</b>, gdy ląduje – szeroko rozkłada skrzydła i ogon. <b>Zmniejsza opór</b>, gdy nurkuje – składa skrzydła.</p>
      <p>Nasiona dmuchawca i klonu mają duży opór powietrza – opadają powoli, a wiatr niesie je daleko od rośliny.</p>`,
    remember: 'Organizmy latające: skrzydła i lekkie ciało.',
    hook: 'Dmuchawiec to mały spadochroniarz – leci tam, gdzie zawieje wiatr.',
    check: { q: 'Jakie cechy mają wspólne ptaki, owady i nietoperze?', options: ['pióra i dziób', 'skrzydła i lekkie ciało', 'łuski i płetwy'], answer: 1, explain: 'Do lotu potrzebne są skrzydła i lekkie ciało. Pióra mają tylko ptaki.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/krainy'] = [
  {
    title: 'Sześć pasów – od morza do gór',
    svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Pasy rzeźby Polski od północy: pobrzeża, np. Pobrzeże Gdańskie; pojezierza, np. Pojezierze Mazurskie; niziny środkowopolskie, np. Nizina Mazowiecka; wyżyny, np. Wyżyna Lubelska; kotliny podgórskie, np. Kotlina Sandomierska; góry – Sudety i Karpaty.">
      <text x="200" y="14" class="tx-s" text-anchor="middle">↑ północ – Morze Bałtyckie</text>
      <rect x="10" y="20" width="380" height="38" rx="6" class="f1 s1"/>
      <rect x="10" y="60" width="380" height="38" rx="6" class="f3 s3"/>
      <rect x="10" y="100" width="380" height="38" rx="6" class="f3 s3"/>
      <rect x="10" y="140" width="380" height="38" rx="6" class="f4 s4"/>
      <rect x="10" y="180" width="380" height="38" rx="6" class="f3 s3"/>
      <rect x="10" y="220" width="380" height="38" rx="6" class="f2 s2"/>
      <g class="tx-b"><text x="22" y="44">1. pobrzeża</text><text x="22" y="84">2. pojezierza</text><text x="22" y="124">3. niziny</text><text x="22" y="164">4. wyżyny</text><text x="22" y="204">5. kotliny</text><text x="22" y="244">6. góry</text></g>
      <g class="tx-s"><text x="160" y="44">Pobrzeże Gdańskie 🏖️</text><text x="160" y="84">Pojezierze Mazurskie 💧</text><text x="160" y="124">Nizina Mazowiecka 🌾</text><text x="160" y="164">Wyżyna Lubelska</text><text x="160" y="204">Kotlina Sandomierska</text><text x="160" y="244">Sudety, Karpaty ⛰️</text></g>
    </svg>`,
    text: `<p>Krainy geograficzne Polski układają się w <b>pasy</b> ciągnące się z zachodu na wschód. Od północy: <b>pobrzeża</b>, <b>pojezierza</b>, <b>niziny środkowopolskie</b>, <b>wyżyny</b>, <b>kotliny podgórskie</b> i <b>góry</b>.</p>
      <p>Każdy pas ma inny krajobraz: nad morzem plaże i wydmy, na pojezierzach mnóstwo jezior, na nizinach równiny i pola, na wyżynach skałki i jaskinie, a na południu – góry.</p>`,
    remember: 'Pobrzeża – pojezierza – niziny – wyżyny – kotliny – góry.',
    hook: 'Zdanie na pamięć: „Pewnego Popołudnia Nina Wyjechała Koleją w Góry”.',
    check: { q: 'Który pas leży między pojezierzami a wyżynami?', options: ['niziny środkowopolskie', 'pobrzeża', 'kotliny podgórskie'], answer: 0, explain: 'Kolejność: pobrzeża, pojezierza, niziny środkowopolskie, wyżyny, kotliny podgórskie, góry.' },
  },
  {
    title: 'Krainy na mapie – gdzie co leży?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Schemat Polski podzielony na 9 części według kierunków. Północny zachód: Pobrzeże Szczecińskie. Północ: Pobrzeże Gdańskie. Północny wschód: Pojezierze Mazurskie. Zachód: Nizina Wielkopolska. Środek: Nizina Mazowiecka. Wschód: Nizina Podlaska. Południowy zachód: Sudety. Południe: Tatry. Południowy wschód: Bieszczady.">
      <text x="200" y="14" class="tx-s" text-anchor="middle">↑ północ</text>
      <rect x="10" y="22" width="124" height="64" rx="8" class="f1 s1"/><rect x="138" y="22" width="124" height="64" rx="8" class="f1 s1"/><rect x="266" y="22" width="124" height="64" rx="8" class="f3 s3"/>
      <rect x="10" y="90" width="124" height="64" rx="8" class="f3 s3"/><rect x="138" y="90" width="124" height="64" rx="8" class="f3 s3"/><rect x="266" y="90" width="124" height="64" rx="8" class="f3 s3"/>
      <rect x="10" y="158" width="124" height="64" rx="8" class="f2 s2"/><rect x="138" y="158" width="124" height="64" rx="8" class="f2 s2"/><rect x="266" y="158" width="124" height="64" rx="8" class="f2 s2"/>
      <g class="tx-s" text-anchor="middle">
        <text x="72" y="50">Pobrzeże</text><text x="72" y="68">Szczecińskie</text>
        <text x="200" y="50">Pobrzeże</text><text x="200" y="68">Gdańskie</text>
        <text x="328" y="50">Pojezierze</text><text x="328" y="68">Mazurskie</text>
        <text x="72" y="118">Nizina</text><text x="72" y="136">Wielkopolska</text>
        <text x="200" y="118">Nizina</text><text x="200" y="136">Mazowiecka</text>
        <text x="328" y="118">Nizina</text><text x="328" y="136">Podlaska</text>
      </g>
      <g class="tx" text-anchor="middle"><text x="72" y="195">Sudety</text><text x="200" y="195">Tatry</text><text x="328" y="195">Bieszczady</text></g>
    </svg>`,
    text: `<p>Na mapie krainę opisujesz <b>kierunkami</b>. Pojezierze Mazurskie leży na <b>północnym wschodzie</b> Polski, Sudety – na <b>południowym zachodzie</b>, a Nizina Mazowiecka – w środkowej Polsce.</p>
      <p>Na mapie hipsometrycznej niziny są zielone, wyżyny – żółte i pomarańczowe, góry – brązowe. Nazwa krainy biegnie zwykle dużymi literami w poprzek jej obszaru.</p>`,
    remember: 'Położenie krainy podajesz kierunkami: północ, południe, wschód, zachód.',
    hook: 'Mazury – „na górze po prawej”, Sudety – „na dole po lewej” (gdy mapa leży północą do góry).',
    check: { q: 'W której części Polski leżą Sudety?', options: ['na północnym wschodzie', 'na południowym zachodzie', 'w środku'], answer: 1, explain: 'Sudety to góry na południowym zachodzie Polski. Karpaty – na południu i południowym wschodzie.' },
  },
  {
    title: 'Lądolód przyszedł ze Skandynawii',
    svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Schemat: lądolód nasuwał się ze Skandynawii przez Bałtyk na Polskę. Linia zasięgu maksymalnego biegnie tuż przy górach na południu. Linia zasięgu ostatniego zlodowacenia biegnie przez północną część Polski.">
      <defs><marker id="a-p9-kr-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t1"/></marker></defs>
      <rect x="110" y="8" width="180" height="34" rx="10" class="f1 s1"/>
      <text x="200" y="31" class="tx-b" text-anchor="middle">Skandynawia</text>
      <g class="ln s1 sw"><path d="M160,44 L160,90" marker-end="url(#a-p9-kr-1)"/><path d="M240,44 L240,90" marker-end="url(#a-p9-kr-1)"/></g>
      <text x="200" y="70" class="tx-s" text-anchor="middle">Bałtyk</text>
      <rect x="40" y="96" width="320" height="150" rx="10" class="f3 s3"/>
      <rect x="40" y="96" width="320" height="50" rx="10" class="f1"/>
      <rect x="40" y="214" width="320" height="32" rx="10" class="f2 s2"/>
      <line x1="40" y1="146" x2="360" y2="146" class="ln s1 sw dash"/>
      <line x1="40" y1="210" x2="360" y2="210" class="ln s5 sw dash"/>
      <text x="200" y="126" class="tx-s" text-anchor="middle">ostatni lądolód – tylko północ</text>
      <text x="200" y="164" class="tx-s" text-anchor="middle">zasięg ostatniego zlodowacenia</text>
      <text x="200" y="202" class="tx-s" text-anchor="middle">zasięg maksymalny</text>
      <text x="200" y="236" class="tx-s" text-anchor="middle">Sudety i Karpaty</text>
    </svg>`,
    text: `<p><b>Lądolód</b> to ogromna, bardzo gruba warstwa lodu przykrywająca ląd. Dawno temu, gdy klimat był dużo zimniejszy, lądolód kilka razy nasuwał się na Polskę – z północy, <b>ze Skandynawii</b>. Dlatego nazywamy go <b>skandynawskim</b>.</p>
      <ul><li><b>Zasięg maksymalny</b> – prawie cała Polska, aż do Sudetów i Karpat.</li>
      <li><b>Zasięg ostatniego zlodowacenia</b> – tylko północna Polska (pobrzeża i pojezierza). Ten lądolód był największy ok. 20 tysięcy lat temu, a ok. 14 tysięcy lat temu całkiem się wytopił.</li></ul>`,
    remember: 'Lądolód skandynawski – przyszedł ze Skandynawii. Największy zasięg: do Sudetów i Karpat. Ostatni: tylko północ Polski.',
    hook: 'Ostatni gość wszedł tylko do przedpokoju (północ), a najdalszy doszedł aż pod góry.',
    check: { q: 'Dlaczego lądolód nazywamy skandynawskim?', options: ['bo przyszedł ze Skandynawii', 'bo stopił się w Skandynawii', 'bo zbadali go Skandynawowie'], answer: 0, explain: 'Lądolód nasuwał się z północy – ze Skandynawii – na teren Polski.' },
  },
  {
    title: 'Co zostawił lądolód?',
    svg: `<svg viewBox="0 0 420 210" role="img" aria-label="Przekrój terenu na pojezierzu: wzgórza morenowe, głaz narzutowy, długie i wąskie jezioro rynnowe oraz płaska piaszczysta równina usypana przez wody z topniejącego lodu.">
      <path d="M10,150 Q50,90 90,150 Q120,110 150,150 L170,150 L180,186 L230,186 L240,150 L300,150 L410,150 L410,200 L10,200 Z" class="f3 s3 sw"/>
      <path d="M180,160 L180,186 L230,186 L230,160 Z" class="f1 s1"/>
      <ellipse cx="270" cy="140" rx="18" ry="12" class="f5 s5 sw"/>
      <rect x="320" y="146" width="90" height="6" class="f4 s4"/>
      <g class="tx-s" text-anchor="middle">
        <text x="80" y="70">wzgórza morenowe</text>
        <text x="205" y="110">jezioro</text><text x="205" y="126">rynnowe</text>
        <text x="270" y="104">głaz</text><text x="270" y="120">narzutowy</text>
        <text x="365" y="110">piaszczysta</text><text x="365" y="126">równina</text>
      </g>
    </svg>`,
    text: `<p>Lądolód niósł ze sobą skały, piasek i glinę. Gdy się topił, zostawił je na miejscu – tak powstały <b>wzgórza morenowe</b> i <b>głazy narzutowe</b>.</p>
      <p>W zagłębieniach po lodzie powstały <b>jeziora polodowcowe</b>. Długie i wąskie <b>jeziora rynnowe</b> leżą w rynnach wyżłobionych przez wodę płynącą pod lądolodem. Wody z topniejącego lodu usypały też <b>piaszczyste równiny</b>.</p>`,
    remember: 'Ślady lądolodu: wzgórza morenowe, głazy narzutowe, jeziora polodowcowe.',
    hook: 'Lądolód jak wielka spycharka: przyjechał, nagarnął kamieni i piasku, a gdy się roztopił, zostawił cały ten bałagan.',
    check: { q: 'Skąd w Polsce wzięły się głazy narzutowe?', options: ['przyniosły je rzeki z gór', 'przyniósł je lądolód ze Skandynawii', 'wyrzuciły je wulkany'], answer: 1, explain: 'Lądolód niósł skały z północy i zostawił je, gdy się wytopił.' },
  },
  {
    title: 'Dlaczego pojezierza są tylko na północy?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie. Północ – młode ślady lądolodu: wyraźne wzgórza i dużo jezior. Środkowa Polska – stare ślady: wzgórza wyrównane, jeziora zarosły.">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="190" rx="12" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="102" y="38">północ</text><text x="297" y="38">środek Polski</text></g>
      <path d="M20,130 Q45,80 70,130 Q90,95 110,130 Q140,85 185,130 L185,150 L20,150 Z" class="f3 s3"/>
      <ellipse cx="70" cy="132" rx="16" ry="5" class="f1 s1"/><ellipse cx="140" cy="132" rx="20" ry="5" class="f1 s1"/>
      <path d="M215,130 Q260,118 300,130 Q340,120 380,130 L380,150 L215,150 Z" class="f3 s3"/>
      <g class="tx-s" text-anchor="middle"><text x="102" y="172">wyraźne wzgórza,</text><text x="102" y="190">dużo jezior</text>
      <text x="297" y="172">wzgórza wyrównane,</text><text x="297" y="190">jeziora zarosły</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="60">ostatni lądolód</text><text x="297" y="60">lądolód dawno temu</text></g>
    </svg>`,
    text: `<p>Ostatni lądolód był tylko na <b>północy</b> Polski – dlatego jego ślady są tam „świeże”: wzgórza są wyraźne, a jezior jest mnóstwo. To <b>pojezierza</b>.</p>
      <p>W środkowej Polsce lądolód był dużo dawniej. Przez ten czas wzgórza się wyrównały, a jeziora zarosły.</p>
      <p>Uwaga na pułapkę: <b>największy</b> zasięg (aż do gór) i zasięg <b>ostatniego</b> lądolodu (tylko północ) to dwie różne linie na mapie.</p>`,
    remember: 'Pojezierza = świeże ślady ostatniego lądolodu na północy Polski.',
    check: { q: 'Prawda czy fałsz? Ostatni lądolód przykrył całą Polskę razem z górami.', options: ['Prawda', 'Fałsz'], answer: 1, explain: 'Ostatni lądolód objął tylko północ Polski. Aż do gór lądolód sięgał dużo wcześniej.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/ekran'] = [
  {
    title: 'Ekran – przydatny, ale zachłanny',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Doba jako pasek z czasem na sen, szkołę, ruch, naukę, rodzinę i ekran. Jeśli kawałek ekranu rośnie, zabiera miejsce snu, ruchowi i rozmowom">
      <text x="200" y="22" class="tx-b" text-anchor="middle">Twoja doba ma tylko 24 godziny</text>
      <rect x="10" y="40" width="130" height="44" class="f5 s5"/>
      <rect x="140" y="40" width="90" height="44" class="f1 s1"/>
      <rect x="230" y="40" width="50" height="44" class="f3 s3"/>
      <rect x="280" y="40" width="50" height="44" class="f4 s4"/>
      <rect x="330" y="40" width="60" height="44" class="f2 s2"/>
      <g class="tx" text-anchor="middle"><text x="75" y="68">😴</text><text x="185" y="68">🏫</text><text x="255" y="68">⚽</text><text x="305" y="68">👪</text><text x="360" y="68">📱</text></g>
      <text x="200" y="104" class="tx-s" text-anchor="middle">😴 sen · 🏫 szkoła · ⚽ ruch · 👪 bliscy · 📱 ekran</text>
      <rect x="10" y="124" width="90" height="44" class="f5 s5"/>
      <rect x="100" y="124" width="90" height="44" class="f1 s1"/>
      <rect x="190" y="124" width="20" height="44" class="f3 s3"/>
      <rect x="210" y="124" width="180" height="44" class="f2 s2 sw"/>
      <g class="tx" text-anchor="middle"><text x="55" y="152">😴</text><text x="145" y="152">🏫</text></g>
      <text x="300" y="151" class="tx-s" text-anchor="middle">📱 ekran rośnie…</text>
      <text x="200" y="196" class="tx" text-anchor="middle">…a sen, ruch i bliscy maleją</text>
    </svg>`,
    text: `<p>Do <b>czasu przed ekranem</b> liczymy wszystko razem: telefon, tablet, komputer, telewizor i konsolę. Ekrany pomagają się uczyć i kontaktować z bliskimi.</p>
      <p>Kłopot w tym, że doba ma tylko 24 godziny. Gdy czas przed ekranem rośnie, zabiera miejsce na <b>sen, ruch, naukę i spotkania</b> z ludźmi.</p>`,
    remember: 'Czas przed ekranem = telefon + tablet + komputer + telewizor + konsola, liczone razem.',
    hook: 'Ekran jest jak kot, który zajmuje coraz więcej miejsca na kanapie – w końcu nie ma gdzie usiąść.',
    check: { q: 'Co wliczamy do czasu przed ekranem?', options: ['tylko grę na konsoli', 'wszystkie urządzenia z ekranem razem', 'tylko telewizję'], answer: 1, explain: 'Liczy się każdy ekran: telefon, tablet, komputer, telewizor, konsola.' },
  },
  {
    title: 'Co cierpi, gdy ekranu jest za dużo?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Pięć kafelków: sen – trudniej zasnąć; oczy – zmęczone, pieką; ciało – mało ruchu, boli kark; skupienie – rozpraszają powiadomienia; relacje – mniej rozmów">
      <rect x="10" y="10" width="185" height="58" rx="10" class="f5 s5"/>
      <text x="102" y="34" class="tx-b" text-anchor="middle">😴 sen</text>
      <text x="102" y="56" class="tx-s" text-anchor="middle">trudniej zasnąć</text>
      <rect x="205" y="10" width="185" height="58" rx="10" class="f1 s1"/>
      <text x="297" y="34" class="tx-b" text-anchor="middle">👀 oczy</text>
      <text x="297" y="56" class="tx-s" text-anchor="middle">zmęczone, pieką</text>
      <rect x="10" y="80" width="185" height="58" rx="10" class="f3 s3"/>
      <text x="102" y="104" class="tx-b" text-anchor="middle">🧍 ciało</text>
      <text x="102" y="126" class="tx-s" text-anchor="middle">mało ruchu, boli kark</text>
      <rect x="205" y="80" width="185" height="58" rx="10" class="f4 s4"/>
      <text x="297" y="104" class="tx-b" text-anchor="middle">🧠 skupienie</text>
      <text x="297" y="126" class="tx-s" text-anchor="middle">rozpraszają powiadomienia</text>
      <rect x="105" y="150" width="190" height="58" rx="10" class="f2 s2"/>
      <text x="200" y="174" class="tx-b" text-anchor="middle">👪 relacje</text>
      <text x="200" y="196" class="tx-s" text-anchor="middle">mniej rozmów i zabaw</text>
    </svg>`,
    text: `<p>Granie do późna przesuwa porę zaśnięcia, a jasne światło ekranu wieczorem utrudnia zasypianie. Długie patrzenie z bliska męczy <b>oczy</b>. Siedzenie w jednej pozycji męczy <b>kark i plecy</b>.</p>
      <p>Powiadomienia rozpraszają. Robienie kilku rzeczy naraz – <b>wielozadaniowość</b> – sprawia, że uczysz się wolniej i gorzej.</p>`,
    remember: 'Za dużo ekranu: gorszy sen, zmęczone oczy, mało ruchu, słabsze skupienie, mniej rozmów.',
    hook: 'Mózg to nie żongler – gdy łapie trzy piłki naraz (lekcje, czat, filmik), którąś upuści.',
    check: { q: 'Jak wielozadaniowość wpływa na naukę?', options: ['uczysz się szybciej', 'uczysz się wolniej i gorzej', 'nie ma wpływu'], answer: 1, explain: 'Przeskakiwanie między zadaniami rozprasza mózg.' },
  },
  {
    title: 'Uzależnienie – gdy trudno przestać',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Uzależnić można się od substancji, na przykład nikotyny i alkoholu, oraz od zachowań, na przykład grania i przewijania filmików. Sygnały ostrzegawcze: złość przy odkładaniu telefonu, rezygnacja ze snu i zabawy, obietnice jeszcze chwilę">
      <rect x="10" y="10" width="185" height="80" rx="12" class="f2 s2"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">substancje</text>
      <text x="102" y="60" class="tx-s" text-anchor="middle">nikotyna (papierosy),</text>
      <text x="102" y="78" class="tx-s" text-anchor="middle">alkohol</text>
      <rect x="205" y="10" width="185" height="80" rx="12" class="f1 s1"/>
      <text x="297" y="36" class="tx-b" text-anchor="middle">zachowania</text>
      <text x="297" y="60" class="tx-s" text-anchor="middle">granie, przewijanie</text>
      <text x="297" y="78" class="tx-s" text-anchor="middle">filmików</text>
      <rect x="10" y="104" width="380" height="88" rx="12" class="f4 s4 sw"/>
      <text x="200" y="128" class="tx-b" text-anchor="middle">⚠️ sygnały ostrzegawcze</text>
      <text x="200" y="152" class="tx-s" text-anchor="middle">złość, gdy trzeba odłożyć telefon</text>
      <text x="200" y="174" class="tx-s" text-anchor="middle">rezygnacja ze snu, ruchu i zabawy</text>
    </svg>`,
    text: `<p><b>Uzależnienie</b> to tak silna potrzeba robienia czegoś albo używania jakiejś substancji, że trudno przestać – nawet gdy to szkodzi. Uzależniają <b>substancje</b> (np. nikotyna w papierosach, alkohol) i <b>zachowania</b> (np. granie, przewijanie filmików).</p>
      <p>Sygnał ostrzegawczy: złościsz się, gdy musisz odłożyć telefon, a dla ekranu rezygnujesz ze snu, zabawy i nauki. Wtedy warto porozmawiać z rodzicem lub wychowawcą.</p>`,
    remember: 'Uzależnienie: trudno przestać, choć szkodzi. Od substancji i od zachowań.',
    hook: '„Jeszcze tylko jeden filmik” powtórzone dziesięć razy to sygnał, że ekran rządzi tobą, a nie ty nim.',
  },
  {
    title: 'Mądre zasady',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Sześć zasad: plan z rodzicami, przerwy i patrzenie w dal, ekran odłożony przed snem, wyciszone powiadomienia przy nauce, bez ekranu przy posiłkach, codzienny ruch na powietrzu">
      <g class="f3 s3">
        <rect x="10" y="10" width="185" height="58" rx="10"/><rect x="205" y="10" width="185" height="58" rx="10"/>
        <rect x="10" y="80" width="185" height="58" rx="10"/><rect x="205" y="80" width="185" height="58" rx="10"/>
        <rect x="10" y="150" width="185" height="58" rx="10"/><rect x="205" y="150" width="185" height="58" rx="10"/>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="102" y="44">📝 plan z rodzicami</text><text x="297" y="44">👀 przerwy, patrz w dal</text>
        <text x="102" y="114">🌙 bez ekranu przed snem</text><text x="297" y="114">🔕 cisza przy nauce</text>
        <text x="102" y="184">🍽️ bez ekranu przy stole</text><text x="297" y="184">🌳 ruch na powietrzu</text>
      </g>
    </svg>`,
    text: `<p>Ustal z rodzicami <b>plan</b>: kiedy i na co używasz ekranu. Rób <b>przerwy</b> – wstań, przeciągnij się, popatrz w dal. Odłóż ekran na pewien czas <b>przed snem</b>, a telefon trzymaj z dala od łóżka.</p>
      <p>Przy nauce <b>wycisz powiadomienia</b> i rób jedną rzecz naraz. Posiłki – bez ekranu. Codziennie znajdź czas na <b>ruch na świeżym powietrzu</b>.</p>`,
    remember: 'Plan, przerwy, nic przed snem, cisza przy nauce, ruch na powietrzu.',
    hook: 'Telefon też idzie spać – do „łóżeczka” poza twoim pokojem.',
    check: { q: 'Gdzie najlepiej trzymać telefon w nocy?', options: ['pod poduszką', 'poza łóżkiem, najlepiej poza sypialnią', 'w ręce'], answer: 1, explain: 'Telefon przy łóżku kusi i budzi powiadomieniami.' },
  },
  {
    title: 'Zbadaj siebie jak przyrodnik',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela tygodniowego pomiaru czasu przed ekranem: dni od poniedziałku do niedzieli i kolumna z minutami. Obok: zmierz, zapisz, wyciągnij wniosek, zmień jedną rzecz">
      <rect x="10" y="10" width="200" height="180" class="bg ln"/>
      <line x1="10" y1="40" x2="210" y2="40" class="ln"/>
      <line x1="90" y1="10" x2="90" y2="190" class="ln"/>
      <text x="50" y="31" class="tx-s" text-anchor="middle">dzień</text>
      <text x="150" y="31" class="tx-s" text-anchor="middle">minuty</text>
      <g class="tx-s" text-anchor="middle"><text x="50" y="62">pon.</text><text x="50" y="84">wt.</text><text x="50" y="106">śr.</text><text x="50" y="128">czw.</text><text x="50" y="150">pt.</text><text x="50" y="172">sob., nd.</text></g>
      <g class="ln-thin"><line x1="10" y1="68" x2="210" y2="68"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="112" x2="210" y2="112"/><line x1="10" y1="134" x2="210" y2="134"/><line x1="10" y1="156" x2="210" y2="156"/></g>
      <text x="230" y="40" class="tx">1. zmierz</text>
      <text x="230" y="80" class="tx">2. zapisz</text>
      <text x="230" y="120" class="tx">3. wniosek</text>
      <text x="230" y="160" class="tx">4. zmień 1 rzecz</text>
    </svg>`,
    text: `<p>Zrób badanie jak prawdziwy przyrodnik. Przez tydzień zapisuj, ile minut spędzasz przed ekranem (wiele telefonów ma licznik). Na koniec dodaj wyniki i sprawdź, w które dni było najwięcej.</p>
      <p>Wyciągnij wniosek i zmień <b>jedną</b> rzecz – np. „wieczorem czytam zamiast oglądać”. Po tygodniu sprawdź, czy lepiej śpisz.</p>`,
    remember: 'Najpierw zmierz, potem zmieniaj.',
    hook: 'Ekran to nie wróg – to narzędzie. Ty trzymasz w ręku pilota.',
    check: { q: 'Prawda czy fałsz? Ekrany nie mają żadnych zalet.', options: ['Prawda', 'Fałsz'], answer: 1, explain: 'Ekrany pomagają w nauce i kontakcie z bliskimi. Szkodzi ich nadmiar.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/mikroskop'] = [
  {
    title: 'Lupa czy mikroskop?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Porównanie: lupa – jedna soczewka, powiększa kilka do kilkudziesięciu razy, do oglądania owada lub kwiatu. Mikroskop – wiele soczewek, powiększa nawet około tysiąca razy, do oglądania komórek i organizmów z kropli wody">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f4 s4"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f1 s1"/>
      <circle cx="102" cy="62" r="28" class="bg ln sw"/>
      <line x1="122" y1="82" x2="150" y2="110" class="ln sw"/>
      <text x="102" y="138" class="tx-b" text-anchor="middle">lupa</text>
      <text x="102" y="160" class="tx-s" text-anchor="middle">1 soczewka, do kilkudziesięciu ×</text>
      <text x="102" y="180" class="tx-s" text-anchor="middle">🐞 owad, 🌼 kwiat</text>
      <text x="297" y="78" class="tx-b" text-anchor="middle">🔬</text>
      <text x="297" y="138" class="tx-b" text-anchor="middle">mikroskop</text>
      <text x="297" y="160" class="tx-s" text-anchor="middle">wiele soczewek, do ok. 1000 ×</text>
      <text x="297" y="180" class="tx-s" text-anchor="middle">komórki, kropla wody</text>
    </svg>`,
    text: `<p><b>Lupa</b> to jedna soczewka. Powiększa kilka–kilkadziesiąt razy – wystarczy do obejrzenia owada albo kwiatu.</p>
      <p><b>Mikroskop optyczny</b> ma wiele soczewek i powiększa nawet około <b>tysiąca razy</b>. Dzięki niemu zobaczysz komórki i maleńkie organizmy żyjące w kropli wody. Obraz w mikroskopie jest odwrócony.</p>`,
    remember: 'Lupa – mała rzecz widoczna gołym okiem. Mikroskop – to, czego gołym okiem nie widać.',
    hook: '„Mikro” znaczy „mały”, „skop” – „oglądam”: mikroskop to „oglądacz małych rzeczy”.',
    check: { q: 'Czym obejrzysz organizmy w kropli wody ze stawu?', options: ['lornetką', 'mikroskopem', 'kompasem'], answer: 1, explain: 'Są tak małe, że potrzebny jest mikroskop.' },
  },
  {
    title: 'Części mikroskopu',
    svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Uproszczony mikroskop z podpisami: okular na górze tubusu, obiektywy na rewolwerze, stolik na preparat, oświetlacz pod stolikiem, śruba makrometryczna i mikrometryczna z boku statywu">
      <rect x="60" y="235" width="150" height="16" rx="4" class="f4 s4 sw"/>
      <path d="M150,235 L150,60 L172,60 L172,235" class="f4 s4 sw"/>
      <rect x="95" y="25" width="26" height="30" class="f1 s1 sw"/>
      <rect x="92" y="55" width="32" height="80" class="f1 s1 sw"/>
      <path d="M92,135 L124,135 L132,150 L84,150 Z" class="f5 s5 sw"/>
      <rect x="96" y="150" width="9" height="20" class="f5 s5"/>
      <rect x="112" y="150" width="9" height="16" class="f5 s5"/>
      <rect x="60" y="182" width="112" height="9" class="f3 s3 sw"/>
      <rect x="102" y="205" width="14" height="12" class="f2 s2"/>
      <circle cx="184" cy="110" r="12" class="f2 s2 sw"/>
      <circle cx="184" cy="140" r="7" class="f2 s2 sw"/>
      <g class="ln-thin"><line x1="122" y1="38" x2="240" y2="38"/><line x1="124" y1="95" x2="240" y2="95"/><line x1="126" y1="160" x2="240" y2="160"/><line x1="172" y1="186" x2="240" y2="186"/><line x1="116" y1="211" x2="240" y2="211"/><line x1="196" y1="110" x2="240" y2="122"/><line x1="191" y1="140" x2="240" y2="140"/></g>
      <g class="tx-s"><text x="246" y="43">okular</text><text x="246" y="100">tubus</text><text x="246" y="126">śruba makro (duża)</text><text x="246" y="145">śruba mikro (mała)</text><text x="246" y="165">obiektywy (rewolwer)</text><text x="246" y="191">stolik</text><text x="246" y="216">oświetlacz</text></g>
    </svg>`,
    text: `<p>Patrzysz przez <b>okular</b>, który jest na górze <b>tubusu</b>. Nad preparatem są <b>obiektywy</b> na obrotowym <b>rewolwerze</b> – obracając go, zmieniasz powiększenie. Preparat kładziesz na <b>stoliku</b>, a <b>oświetlacz</b> świeci od dołu.</p>
      <p>Ostrość ustawiasz śrubami: dużą <b>makrometryczną</b> – wstępnie, małą <b>mikrometryczną</b> – dokładnie. Wszystko trzyma <b>statyw</b>.</p>`,
    remember: 'Okular – oko; obiektyw – obiekt (preparat); stolik – preparat; śruby – ostrość.',
    hook: '<b>Ok</b>ular jest przy <b>ok</b>u, <b>obiekt</b>yw – przy <b>obiekt</b>cie.',
    check: { q: 'Przez którą część patrzysz?', options: ['przez obiektyw', 'przez okular', 'przez stolik'], answer: 1, explain: 'Oko przykładasz do okularu.' },
  },
  {
    title: 'Ile razy powiększa? Mnożymy!',
    svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Okular powiększa 10 razy, obiektyw 40 razy. 10 razy 40 równa się 400 – mikroskop powiększa 400 razy">
      <rect x="10" y="40" width="100" height="70" rx="12" class="f1 s1 sw"/>
      <text x="60" y="70" class="tx-s" text-anchor="middle">okular</text>
      <text x="60" y="96" class="tx-b" text-anchor="middle">10×</text>
      <text x="135" y="84" class="tx-b" text-anchor="middle">·</text>
      <rect x="160" y="40" width="100" height="70" rx="12" class="f5 s5 sw"/>
      <text x="210" y="70" class="tx-s" text-anchor="middle">obiektyw</text>
      <text x="210" y="96" class="tx-b" text-anchor="middle">40×</text>
      <text x="285" y="84" class="tx-b" text-anchor="middle">=</text>
      <rect x="305" y="40" width="85" height="70" rx="12" class="f3 s3 sw"/>
      <text x="347" y="88" class="tx-b" text-anchor="middle">400×</text>
      <text x="200" y="150" class="tx-s" text-anchor="middle">zaczynaj od najmniejszego obiektywu</text>
    </svg>`,
    text: `<p><b>Powiększenie mikroskopu</b> = powiększenie okularu · powiększenie obiektywu. Okular 10× i obiektyw 40× → <b>400 razy</b>.</p>
      <p>Obserwację zawsze zaczynasz od obiektywu o <b>najmniejszym</b> powiększeniu – łatwiej znaleźć obiekt. Śrubą makrometryczną szukasz obrazu, mikrometryczną ustawiasz ostrość. Dopiero potem zmieniasz obiektyw na większy.</p>`,
    remember: 'Powiększenie = okular · obiektyw. Start od najmniejszego.',
    hook: 'Dwie lupy jedna za drugą nie dodają się, tylko mnożą – jak „razy”, nie „plus”.',
    check: { q: 'Okular 5×, obiektyw 20×. Jakie powiększenie?', options: ['25×', '100×', '15×'], answer: 1, explain: '5 · 20 = 100. Powiększenia mnożymy.' },
  },
  {
    title: 'Jak zrobić preparat?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Cztery kroki preparatu świeżego: 1 – kropla wody na szkiełku podstawowym, 2 – cienki kawałek, np. skórka cebuli, w kropli, 3 – szkiełko nakrywkowe kładzione od boku, bez pęcherzyków, 4 – nadmiar wody zebrany bibułą">
      <g class="f1 s1"><rect x="10" y="60" width="85" height="16" rx="2"/><rect x="108" y="60" width="85" height="16" rx="2"/><rect x="206" y="60" width="85" height="16" rx="2"/><rect x="304" y="60" width="85" height="16" rx="2"/></g>
      <ellipse cx="52" cy="58" rx="12" ry="5" class="f3 s3"/>
      <ellipse cx="150" cy="58" rx="12" ry="5" class="f3 s3"/>
      <rect x="140" y="54" width="20" height="3" class="f2 s2"/>
      <line x1="225" y1="40" x2="265" y2="56" class="ln sw"/>
      <ellipse cx="248" cy="58" rx="12" ry="4" class="f3 s3"/>
      <rect x="326" y="55" width="40" height="4" class="ln sw"/>
      <rect x="370" y="44" width="16" height="16" class="f4 s4"/>
      <g class="tx-b" text-anchor="middle"><text x="52" y="28">1</text><text x="150" y="28">2</text><text x="248" y="28">3</text><text x="346" y="28">4</text></g>
      <g class="tx-s" text-anchor="middle"><text x="52" y="104">kropla</text><text x="52" y="122">wody</text><text x="150" y="104">cienki</text><text x="150" y="122">kawałek</text><text x="248" y="104">szkiełko</text><text x="248" y="122">nakrywkowe</text><text x="346" y="104">bibuła</text><text x="346" y="122">zbiera wodę</text></g>
      <text x="200" y="170" class="tx-s" text-anchor="middle">pod spodem: szkiełko podstawowe</text>
    </svg>`,
    text: `<p><b>Preparat</b> to materiał przygotowany do oglądania pod mikroskopem. <b>Preparat świeży</b> robisz tak: na <b>szkiełko podstawowe</b> nanieś kroplę wody, połóż w niej bardzo cienki kawałek (np. skórkę cebuli) i ostrożnie, od boku, przykryj <b>szkiełkiem nakrywkowym</b>.</p>
      <p>Uważaj na <b>pęcherzyki powietrza</b> – zasłaniają obraz. Nadmiar wody zbierz bibułą.</p>`,
    remember: 'Szkiełko podstawowe – na dole, nakrywkowe – na górze, bez pęcherzyków.',
    hook: 'Preparat to kanapka: dwie kromki szkła, w środku kropla wody i cieniutki „plasterek”.',
  },
  {
    title: 'Od komórki do organizmu',
    svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Pięć poziomów budowy w kolejności: komórka, tkanka, narząd – serce, układ narządów – układ krwionośny, organizm – człowiek. Strzałki od najmniejszego do największego">
      <defs><marker id="a-p12-mk-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <circle cx="40" cy="80" r="16" class="f3 s3 sw"/>
      <circle cx="40" cy="80" r="5" class="f5 s5"/>
      <g class="f3 s3"><circle cx="112" cy="70" r="10"/><circle cx="132" cy="70" r="10"/><circle cx="112" cy="90" r="10"/><circle cx="132" cy="90" r="10"/></g>
      <text x="205" y="92" class="tx-b" text-anchor="middle">❤️</text>
      <text x="290" y="92" class="tx-b" text-anchor="middle">🩸</text>
      <text x="380" y="92" class="tx-b" text-anchor="middle">🧍</text>
      <g class="ln"><path d="M60,80 L94,80" marker-end="url(#a-p12-mk-5)"/><path d="M148,80 L182,80" marker-end="url(#a-p12-mk-5)"/><path d="M228,80 L262,80" marker-end="url(#a-p12-mk-5)"/><path d="M318,80 L352,80" marker-end="url(#a-p12-mk-5)"/></g>
      <g class="tx-s" text-anchor="middle"><text x="40" y="130">komórka</text><text x="122" y="130">tkanka</text><text x="205" y="130">narząd</text><text x="290" y="130">układ</text><text x="380" y="130">organizm</text>
      <text x="205" y="150">(serce)</text><text x="290" y="150">narządów</text></g>
      <text x="210" y="185" class="tx-s" text-anchor="middle">bakteria = 1 komórka · człowiek = bardzo wiele komórek</text>
    </svg>`,
    text: `<p><b>Komórka</b> to najmniejsza żywa część organizmu. <b>Organizmy jednokomórkowe</b> (np. bakterie) to jedna komórka. <b>Wielokomórkowe</b> (np. człowiek, drzewo) mają ich bardzo wiele.</p>
      <p>Podobne komórki tworzą <b>tkankę</b>, tkanki – <b>narząd</b> (np. serce), narządy – <b>układ narządów</b> (np. układ krwionośny), a układy – <b>organizm</b>.</p>`,
    remember: 'Komórka → tkanka → narząd → układ narządów → organizm.',
    hook: 'Jak w szkole: uczeń → klasa → rocznik → szkoła. Komórka to „uczeń” organizmu.',
    check: { q: 'Co jest narządem?', options: ['komórka', 'serce', 'człowiek'], answer: 1, explain: 'Serce to narząd. Komórka to najmniejszy poziom, a człowiek – cały organizm.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/materia'] = [
  {
    title: 'Ciało i substancja',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy łyżki – ciała – zrobione z różnych substancji: stali, drewna i plastiku. Obok: ze szkła – jednej substancji – robimy różne ciała: szklankę, okno, kulkę">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f1 s1"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">1 ciało, różne</text>
      <text x="102" y="56" class="tx-b" text-anchor="middle">substancje</text>
      <text x="102" y="96" class="tx-b" text-anchor="middle">🥄 🥄 🥄</text>
      <text x="102" y="130" class="tx-s" text-anchor="middle">łyżka ze stali,</text>
      <text x="102" y="150" class="tx-s" text-anchor="middle">z drewna,</text>
      <text x="102" y="170" class="tx-s" text-anchor="middle">z plastiku</text>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f3 s3"/>
      <text x="297" y="36" class="tx-b" text-anchor="middle">1 substancja,</text>
      <text x="297" y="56" class="tx-b" text-anchor="middle">różne ciała</text>
      <text x="297" y="96" class="tx-b" text-anchor="middle">🥛 🪟 🔮</text>
      <text x="297" y="130" class="tx-s" text-anchor="middle">ze szkła: szklanka,</text>
      <text x="297" y="150" class="tx-s" text-anchor="middle">okno, kulka</text>
    </svg>`,
    text: `<p><b>Materia</b> to wszystko, co ma masę i zajmuje miejsce. <b>Ciało</b> to konkretny przedmiot (łyżka, kamyk, kropla), a <b>substancja</b> – to, z czego jest zrobione (stal, drewno, szkło, woda).</p>
      <p>Łyżka może być ze stali, drewna albo plastiku. A ze szkła zrobisz szklankę, okno i kulkę.</p>`,
    remember: 'Ciało – przedmiot. Substancja – materiał, z którego jest.',
    hook: 'Pytasz „co to?” – odpowiedź to ciało (łyżka). Pytasz „z czego?” – to substancja (stal).',
    check: { q: 'Co jest substancją?', options: ['szklanka', 'szkło', 'okno'], answer: 1, explain: 'Szkło to materiał – substancja. Szklanka i okno to ciała.' },
  },
  {
    title: 'Kształt: stały, naczynia, całe naczynie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy naczynia. Ciało stałe – kostka lodu zachowuje swój kształt. Ciecz – woda przyjmuje kształt dna naczynia. Gaz – wypełnia całe naczynie">
      <path d="M20,40 L20,150 L120,150 L120,40" class="ln sw" fill="none"/>
      <rect x="50" y="110" width="40" height="40" class="f1 s1 sw"/>
      <path d="M150,40 L150,150 L250,150 L250,40" class="ln sw" fill="none"/>
      <rect x="152" y="118" width="96" height="31" class="f1 s1"/>
      <path d="M280,40 L280,150 L380,150 L380,40 Z" class="ln sw f5"/>
      <g class="f5 s5"><circle cx="300" cy="60" r="4"/><circle cx="350" cy="75" r="4"/><circle cx="320" cy="120" r="4"/><circle cx="365" cy="135" r="4"/><circle cx="295" cy="100" r="4"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="25">ciało stałe</text><text x="200" y="25">ciecz</text><text x="330" y="25">gaz</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="175">własny kształt</text><text x="200" y="175">kształt naczynia</text><text x="330" y="175">całe naczynie</text></g>
    </svg>`,
    text: `<p><b>Ciało stałe</b> (lód, kamień) ma własny kształt. <b>Ciecz</b> (woda, mleko) przyjmuje kształt naczynia i płynie. <b>Gaz</b> (powietrze, para wodna) wypełnia całe naczynie.</p>
      <p><b>Ściśliwość</b>: zatkaj strzykawkę z powietrzem – tłok da się wcisnąć. Ze strzykawką z wodą prawie się nie da. Gazy łatwo ścisnąć, ciecze i ciała stałe – prawie wcale.</p>`,
    remember: 'Stały – swój kształt. Ciecz – kształt naczynia. Gaz – całe naczynie, łatwo go ścisnąć.',
    hook: 'Gaz to nieśmiały gość, który mimo to zajmuje cały pokój.',
    check: { q: 'Którą substancję najłatwiej ścisnąć?', options: ['wodę', 'kamień', 'powietrze'], answer: 2, explain: 'Gaz jest ściśliwy, bo jego drobiny są daleko od siebie.' },
  },
  {
    title: 'Model drobinowy',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Ułożenie drobin: w ciele stałym ciasno w równych rzędach, drgają; w cieczy blisko, ale nieuporządkowane, przesuwają się; w gazie daleko od siebie, szybko się poruszają">
      <rect x="10" y="30" width="110" height="110" class="bg ln sw"/>
      <rect x="145" y="30" width="110" height="110" class="bg ln sw"/>
      <rect x="280" y="30" width="110" height="110" class="bg ln sw"/>
      <g class="f1 s1">
        <circle cx="30" cy="95" r="7"/><circle cx="47" cy="95" r="7"/><circle cx="64" cy="95" r="7"/><circle cx="81" cy="95" r="7"/><circle cx="98" cy="95" r="7"/>
        <circle cx="30" cy="112" r="7"/><circle cx="47" cy="112" r="7"/><circle cx="64" cy="112" r="7"/><circle cx="81" cy="112" r="7"/><circle cx="98" cy="112" r="7"/>
        <circle cx="30" cy="129" r="7"/><circle cx="47" cy="129" r="7"/><circle cx="64" cy="129" r="7"/><circle cx="81" cy="129" r="7"/><circle cx="98" cy="129" r="7"/>
      </g>
      <g class="f3 s3"><circle cx="163" cy="130" r="7"/><circle cx="180" cy="126" r="7"/><circle cx="197" cy="131" r="7"/><circle cx="214" cy="125" r="7"/><circle cx="234" cy="130" r="7"/><circle cx="170" cy="112" r="7"/><circle cx="188" cy="110" r="7"/><circle cx="206" cy="113" r="7"/><circle cx="224" cy="110" r="7"/></g>
      <g class="f2 s2"><circle cx="300" cy="50" r="7"/><circle cx="360" cy="45" r="7"/><circle cx="330" cy="85" r="7"/><circle cx="295" cy="120" r="7"/><circle cx="370" cy="118" r="7"/></g>
      <g class="tx-b" text-anchor="middle"><text x="65" y="20">stałe</text><text x="200" y="20">ciecz</text><text x="335" y="20">gaz</text></g>
      <g class="tx-s" text-anchor="middle"><text x="65" y="162">ciasno, drgają</text><text x="200" y="162">blisko, przesuwają</text><text x="200" y="180">się</text><text x="335" y="162">daleko, szybko</text><text x="335" y="180">latają</text></g>
    </svg>`,
    text: `<p>Każda substancja składa się z ogromnej liczby maleńkich <b>drobin</b>, które cały czas się ruszają. W <b>ciele stałym</b> są bardzo blisko, w stałych miejscach – tylko drgają. W <b>cieczy</b> są blisko, ale przesuwają się – dlatego ciecz płynie.</p>
      <p>W <b>gazie</b> drobiny są daleko od siebie i szybko poruszają się we wszystkich kierunkach – dlatego gaz wypełnia całe naczynie i łatwo go ścisnąć.</p>`,
    remember: 'Stałe – ciasno i drgają. Ciecz – blisko, przesuwają się. Gaz – daleko, szybko.',
    hook: 'Drobiny jak uczniowie: na apelu stoją w rzędach (stałe), na korytarzu przeciskają się (ciecz), na boisku biegają po całym placu (gaz).',
    check: { q: 'Gdzie drobiny są najdalej od siebie?', options: ['w ciele stałym', 'w cieczy', 'w gazie'], answer: 2, explain: 'W gazie drobiny są daleko i szybko się poruszają.' },
  },
  {
    title: 'Dyfuzja – dowód, że drobiny się ruszają',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy szklanki: torebka herbaty wrzucona do wody, po chwili barwa rozchodzi się, na końcu cała woda jest zabarwiona. W gorącej wodzie dzieje się to szybciej niż w zimnej">
      <defs><marker id="a-p12-ma-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M20,40 L30,140 L90,140 L100,40" class="ln sw f1"/>
      <rect x="50" y="110" width="20" height="25" class="f2 s2"/>
      <path d="M150,40 L160,140 L220,140 L230,40" class="ln sw f1"/>
      <rect x="180" y="110" width="20" height="25" class="f2 s2"/>
      <path d="M160,140 L175,85 L205,80 L220,140 Z" class="f4"/>
      <path d="M280,40 L290,140 L350,140 L360,40" class="ln sw f4"/>
      <path d="M106,90 L140,90" class="ln" marker-end="url(#a-p12-ma-4)"/>
      <path d="M236,90 L270,90" class="ln" marker-end="url(#a-p12-ma-4)"/>
      <g class="tx-s" text-anchor="middle"><text x="60" y="165">start</text><text x="190" y="165">po chwili</text><text x="320" y="165">cała zabarwiona</text></g>
      <text x="200" y="186" class="tx-s" text-anchor="middle">🔥 w gorącej wodzie – szybciej</text>
    </svg>`,
    text: `<p>Wrzuć torebkę herbaty do wody i nie mieszaj. Barwa sama rozejdzie się po całej szklance. Perfumy psiknięte w kącie po chwili czuć w całym pokoju. To <b>dyfuzja</b> – samorzutne mieszanie się substancji dzięki ruchowi drobin.</p>
      <p>W cieple drobiny ruszają się szybciej, więc w gorącej wodzie herbata zabarwia ją szybciej niż w zimnej.</p>`,
    remember: 'Dyfuzja – samorzutne mieszanie się substancji. W cieple szybciej.',
    hook: 'Dyfuzja to „plotka” drobin – sama rozchodzi się po całej klasie.',
  },
  {
    title: 'Podsumowanie i pułapki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tabela podsumowania: kształt – stałe własny, ciecz naczynia, gaz całe naczynie; ściśliwość – stałe i ciecz prawie nie, gaz łatwo; drobiny – ciasno, blisko, daleko. Woda występuje we wszystkich trzech stanach: lód, woda, para">
      <rect x="10" y="10" width="380" height="140" class="bg ln"/>
      <line x1="10" y1="40" x2="390" y2="40" class="ln"/><line x1="10" y1="80" x2="390" y2="80" class="ln-thin"/><line x1="10" y1="115" x2="390" y2="115" class="ln-thin"/>
      <line x1="110" y1="10" x2="110" y2="150" class="ln"/><line x1="203" y1="10" x2="203" y2="150" class="ln-thin"/><line x1="296" y1="10" x2="296" y2="150" class="ln-thin"/>
      <g class="tx-s" text-anchor="middle"><text x="156" y="31">stałe</text><text x="249" y="31">ciecz</text><text x="343" y="31">gaz</text></g>
      <g class="tx-s"><text x="18" y="65">kształt</text><text x="18" y="102">ściskanie</text><text x="18" y="138">drobiny</text></g>
      <g class="tx-s" text-anchor="middle"><text x="156" y="65">własny</text><text x="249" y="65">naczynia</text><text x="343" y="65">całe</text>
      <text x="156" y="102">prawie nie</text><text x="249" y="102">prawie nie</text><text x="343" y="102">łatwo</text>
      <text x="156" y="138">ciasno</text><text x="249" y="138">blisko</text><text x="343" y="138">daleko</text></g>
      <text x="200" y="182" class="tx" text-anchor="middle">🧊 lód · 💧 woda · ☁️ para wodna</text>
    </svg>`,
    text: `<p>Woda występuje we wszystkich trzech stanach: lód, woda i para wodna. Uwaga: drobiny w ciele stałym też się <b>ruszają</b> – drgają w miejscu.</p>
      <p>Ciecz zmienia kształt, ale nie objętość: sok przelany ze szklanki na talerz to wciąż tyle samo soku.</p>`,
    remember: 'Ciecz zmienia kształt, nie objętość. Drobiny zawsze są w ruchu.',
    check: { q: 'Prawda czy fałsz? W ciele stałym drobiny w ogóle się nie ruszają.', options: ['Prawda', 'Fałsz'], answer: 1, explain: 'Drgają w swoich miejscach – ruszają się, ale się nie przesuwają.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/chmury-upal-mroz'] = [
  {
    title: 'Wiatr – powietrze w ruchu',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Powietrze płynie z miejsca, gdzie mocniej naciska, do miejsca, gdzie naciska słabiej – to wiatr. Tasiemka na kiju odchyla się w stronę, w którą wieje wiatr; wiatr nazywamy od strony, z której wieje">
      <defs><marker id="a-p12-wi-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="20" width="110" height="70" rx="12" class="f2 s2"/>
      <text x="65" y="50" class="tx-s" text-anchor="middle">powietrze</text>
      <text x="65" y="70" class="tx-s" text-anchor="middle">naciska mocniej</text>
      <rect x="280" y="20" width="110" height="70" rx="12" class="f1 s1"/>
      <text x="335" y="50" class="tx-s" text-anchor="middle">powietrze</text>
      <text x="335" y="70" class="tx-s" text-anchor="middle">naciska słabiej</text>
      <g class="ln sw"><path d="M130,40 L268,40" marker-end="url(#a-p12-wi-1)"/><path d="M130,70 L268,70" marker-end="url(#a-p12-wi-1)"/></g>
      <text x="200" y="60" class="tx-b" text-anchor="middle">💨 wiatr</text>
      <line x1="80" y1="190" x2="80" y2="120" class="ln sw"/>
      <path d="M80,122 Q110,118 135,128 Q115,130 80,134 Z" class="f4 s4"/>
      <text x="150" y="140" class="tx-s">tasiemka pokazuje, dokąd wieje</text>
      <text x="150" y="166" class="tx-s">wiatr zachodni → wieje z zachodu</text>
      <text x="150" y="188" class="tx-s">siłę mierzy wiatromierz</text>
    </svg>`,
    text: `<p><b>Wiatr</b> to poziomy ruch powietrza. Powietrze płynie z miejsc, gdzie mocniej naciska, tam, gdzie naciska słabiej. Im większa różnica, tym silniej wieje.</p>
      <p>Wiatr nazywamy od strony, <b>z której wieje</b>. Kierunek pokaże wiatrowskaz albo tasiemka na kiju, a siłę zmierzy <b>wiatromierz</b>.</p>`,
    remember: 'Wiatr – powietrze w ruchu. Nazwa wiatru = skąd wieje.',
    hook: 'Wiatr jest jak tłum wychodzący z zatłoczonej sali na pusty korytarz.',
    check: { q: 'Wiatr wieje z północy. Jak go nazwiesz?', options: ['południowy', 'północny', 'wschodni'], answer: 1, explain: 'Nazwa mówi, skąd wieje: z północy – północny.' },
  },
  {
    title: 'Skąd się biorą chmury?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Ciepłe, wilgotne powietrze unosi się znad ziemi do góry, tam się ochładza, para wodna skrapla się w kropelki i powstaje chmura. Wyżej, w mrozie, powstają kryształki lodu">
      <defs><marker id="a-p12-wi-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="10" y="180" width="380" height="20" class="f3 s3"/>
      <text x="80" y="172" class="tx-s" text-anchor="middle">☀️ ziemia się nagrzewa</text>
      <g class="ln sw"><path d="M120,165 L150,95" marker-end="url(#a-p12-wi-2)"/><path d="M160,165 L175,95" marker-end="url(#a-p12-wi-2)"/></g>
      <ellipse cx="200" cy="70" rx="80" ry="30" class="f1 s1 sw"/>
      <ellipse cx="160" cy="58" rx="40" ry="24" class="f1 s1"/>
      <ellipse cx="235" cy="56" rx="38" ry="22" class="f1 s1"/>
      <g class="f1 s1"><circle cx="185" cy="78" r="3"/><circle cx="205" cy="72" r="3"/><circle cx="225" cy="80" r="3"/></g>
      <text x="300" y="100" class="tx-s">ochładza się,</text>
      <text x="300" y="120" class="tx-s">para wodna</text>
      <text x="300" y="140" class="tx-s">skrapla się</text>
      <text x="200" y="22" class="tx-s" text-anchor="middle">❄️ wysoko, w mrozie – kryształki lodu</text>
    </svg>`,
    text: `<p><b>Chmura</b> to ogromna ilość maleńkich <b>kropelek wody</b> lub <b>kryształków lodu</b> unoszących się w powietrzu.</p>
      <p>Ciepłe, wilgotne powietrze unosi się do góry i tam się <b>ochładza</b>. Para wodna <b>skrapla się</b> w kropelki – i mamy chmurę. Wysoko, gdzie jest mróz, powstają kryształki lodu.</p>`,
    remember: 'Chmura = kropelki wody lub kryształki lodu. Powstaje, gdy wilgotne powietrze unosi się i ochładza.',
    hook: 'Chuchnij zimą na mróz – zobaczysz małą chmurkę: twoja ciepła para skrapla się w zimnym powietrzu.',
  },
  {
    title: 'Trzy rodzaje chmur',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Trzy rodzaje chmur: kłębiaste – białe bałwanki, zwykle ładna pogoda; warstwowe – szara warstwa na całym niebie, długie opady; pierzaste – cienkie piórka wysoko, z kryształków lodu">
      <rect x="10" y="10" width="120" height="190" rx="12" class="f1 s1"/>
      <rect x="140" y="10" width="120" height="190" rx="12" class="f5 s5"/>
      <rect x="270" y="10" width="120" height="190" rx="12" class="f4 s4"/>
      <g class="bg ln"><ellipse cx="55" cy="70" rx="22" ry="16"/><ellipse cx="80" cy="62" rx="24" ry="20"/><ellipse cx="100" cy="72" rx="18" ry="14"/></g>
      <line x1="35" y1="86" x2="115" y2="86" class="ln"/>
      <rect x="150" y="55" width="100" height="26" rx="6" class="bg ln"/>
      <g class="ln sw"><path d="M285,60 Q310,48 330,60"/><path d="M300,75 Q330,62 365,72"/><path d="M290,90 Q315,82 340,90"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="128">kłębiaste</text><text x="200" y="128">warstwowe</text><text x="330" y="128">pierzaste</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="155">zwykle ładna</text><text x="70" y="175">pogoda</text><text x="200" y="155">długie opady,</text><text x="200" y="175">mżawka</text><text x="330" y="155">wysoko, z lodu,</text><text x="330" y="175">bez opadów</text></g>
    </svg>`,
    text: `<p><b>Kłębiaste</b> – białe „bałwanki” z płaską podstawą, zwykle zapowiadają ładną pogodę. Gdy bardzo urosną, ściemnieją i zrobią się wysokie, może przyjść burza.</p>
      <p><b>Warstwowe</b> – niska, szara warstwa na całym niebie: długie opady, mżawka. <b>Pierzaste</b> – cienkie „piórka” wysoko na niebie, z kryształków lodu, zwykle bez opadów.</p>`,
    remember: 'Kłębiaste – ładnie (wysokie i ciemne – burza). Warstwowe – długo pada. Pierzaste – wysoko, z lodu.',
    hook: 'Kłębek waty – pogoda bogata. Szara kołdra – deszcz do wieczora.',
    check: { q: 'Niska szara warstwa chmur zakrywa niebo. Co cię czeka?', options: ['upał', 'długotrwały deszcz lub mżawka', 'burza śnieżna latem'], answer: 1, explain: 'Chmury warstwowe przynoszą długie opady.' },
  },
  {
    title: 'Stałocieplne i zmiennocieplne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Termometry: u stałocieplnych – ptaków i ssaków – temperatura ciała jest prawie stała w zimie i w lecie. U zmiennocieplnych – owadów, ryb, płazów, gadów – temperatura ciała zmienia się razem z otoczeniem">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f1 s1"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">stałocieplne</text>
      <text x="102" y="60" class="tx-s" text-anchor="middle">🐦 ptaki, 🐻 ssaki</text>
      <rect x="62" y="80" width="12" height="70" rx="6" class="bg ln"/><rect x="64" y="100" width="8" height="50" class="f2 s2"/>
      <rect x="130" y="80" width="12" height="70" rx="6" class="bg ln"/><rect x="132" y="100" width="8" height="50" class="f2 s2"/>
      <text x="68" y="172" class="tx-s" text-anchor="middle">❄️</text><text x="136" y="172" class="tx-s" text-anchor="middle">☀️</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">zmiennocieplne</text>
      <text x="297" y="60" class="tx-s" text-anchor="middle">🦎 gady, 🐸 płazy, 🐟, 🐞</text>
      <rect x="257" y="80" width="12" height="70" rx="6" class="bg ln"/><rect x="259" y="135" width="8" height="15" class="f1 s1"/>
      <rect x="325" y="80" width="12" height="70" rx="6" class="bg ln"/><rect x="327" y="92" width="8" height="58" class="f2 s2"/>
      <text x="263" y="172" class="tx-s" text-anchor="middle">❄️</text><text x="331" y="172" class="tx-s" text-anchor="middle">☀️</text>
    </svg>`,
    text: `<p><b>Stałocieplne</b> zwierzęta – <b>ptaki i ssaki</b> (także człowiek) – mają prawie stałą temperaturę ciała, latem i zimą. Mogą być aktywne w chłodzie, ale potrzebują wtedy dużo pokarmu.</p>
      <p><b>Zmiennocieplne</b> – większość owadów, ryby, płazy i gady – mają temperaturę ciała zależną od otoczenia. W chłodzie są powolne, dlatego jaszczurka rano wygrzewa się na kamieniu.</p>`,
    remember: 'Stałocieplne: ptaki i ssaki. Zmiennocieplne: owady, ryby, płazy, gady.',
    hook: 'Stałocieplny ma „kaloryfer” w środku, zmiennocieplny pożycza ciepło od słońca.',
    check: { q: 'Które zwierzę jest zmiennocieplne?', options: ['kot', 'jaszczurka', 'sikorka'], answer: 1, explain: 'Gady są zmiennocieplne. Kot (ssak) i sikorka (ptak) są stałocieplne.' },
  },
  {
    title: 'Upał i mróz – jak przetrwać?',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Upał: cień, woda, czapka; udar cieplny to wysoka temperatura ciała, gorąca czerwona skóra, ból i zawroty głowy – pomoc: cień, chłodzenie, picie, a gdy nie mija, telefon 112 lub 999. Mróz: śnieg chroni glebę i rośliny jak kołdra, zwierzęta mają gęstsze futro, śpią lub odlatują, człowiek ubiera się na cebulkę">
      <rect x="10" y="10" width="185" height="210" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="210" rx="12" class="f1 s1"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">☀️ upał</text>
      <g class="tx-s" text-anchor="middle"><text x="102" y="62">cień, woda, czapka</text><text x="102" y="92">⚠️ udar cieplny:</text><text x="102" y="112">gorąca czerwona skóra,</text><text x="102" y="132">ból i zawroty głowy</text><text x="102" y="162">pomoc: cień,</text><text x="102" y="182">chłodzenie, picie</text><text x="102" y="206">📞 112 / 999</text></g>
      <text x="297" y="36" class="tx-b" text-anchor="middle">❄️ mróz</text>
      <g class="tx-s" text-anchor="middle"><text x="297" y="62">śnieg = kołdra</text><text x="297" y="82">dla gleby i roślin</text><text x="297" y="112">gęste futro, pióra,</text><text x="297" y="132">sen zimowy, odlot</text><text x="297" y="162">człowiek:</text><text x="297" y="182">ubiór „na cebulkę”</text></g>
    </svg>`,
    text: `<p>W upale zwierzęta chowają się w cieniu i norach, a człowiek się poci i traci wodę – trzeba pić. Groźne przegrzanie to <b>udar cieplny</b>: wysoka temperatura ciała, gorąca czerwona skóra, ból i zawroty głowy, nudności. To stan zagrażający życiu. Zawołaj dorosłego, przenieście chorego w <b>cień</b>, chłodźcie go, dajcie pić. Gdy nie mija – <b>112 lub 999</b>.</p>
      <p>Zimą <b>pokrywa śnieżna</b> działa jak kołdra – chroni glebę i rośliny przed przemarznięciem. Zwierzęta mają gęstsze futro, zapadają w sen zimowy albo odlatują.</p>`,
    remember: 'Upał: pij, czapka, cień. Udar cieplny – chłodzenie i pomoc (112). Śnieg chroni przed mrozem.',
    hook: 'Latem trzy „C”: cień, czapka, ciągle pij wodę.',
    check: { q: 'Kolega w upale ma czerwoną, gorącą skórę i zawroty głowy. Co robisz?', options: ['wołam dorosłego, prowadzimy go w cień i chłodzimy', 'daję mu koc', 'każę mu biegać dalej'], answer: 0, explain: 'To może być udar cieplny – chłód, cień, picie, a gdy nie mija, 112 lub 999.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/lad-woda-pole'] = [
  {
    title: 'Ląd i woda – dwa światy',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Porównanie lądu i wody: na lądzie dużo tlenu, mały opór powietrza, duże zmiany temperatury, łatwo wyschnąć; w wodzie mniej tlenu, duży opór, ale woda podtrzymuje ciało, temperatura zmienia się wolniej, głębiej ciemniej">
      <rect x="10" y="10" width="185" height="190" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="190" rx="12" class="f1 s1"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">🌳 ląd</text>
      <text x="297" y="36" class="tx-b" text-anchor="middle">🌊 woda</text>
      <g class="tx-s" text-anchor="middle">
        <text x="102" y="66">dużo tlenu</text><text x="102" y="96">mały opór</text><text x="102" y="126">duże zmiany</text><text x="102" y="144">temperatury</text><text x="102" y="174">łatwo wyschnąć</text>
        <text x="297" y="66">mniej tlenu</text><text x="297" y="96">duży opór, ale</text><text x="297" y="114">podtrzymuje ciało</text><text x="297" y="144">temperatura stabilna</text><text x="297" y="174">głębiej – ciemniej</text>
      </g>
    </svg>`,
    text: `<p>Na <b>lądzie</b> jest dużo tlenu, powietrze stawia mały opór, ale nie podtrzymuje ciała. Temperatura bardzo się zmienia, a organizmom grozi wyschnięcie.</p>
      <p>W <b>wodzie</b> jest mniej tlenu, a woda stawia duży opór – za to podtrzymuje ciało. Temperatura zmienia się wolniej, a im głębiej, tym ciemniej.</p>`,
    remember: 'Ląd: tlen, wysychanie, zmiany temperatury. Woda: mniej tlenu, opór, podtrzymywanie ciała.',
    hook: 'Spróbuj biec w basenie – od razu poczujesz, że woda stawia opór.',
    check: { q: 'Gdzie jest mniej tlenu?', options: ['w powietrzu', 'w wodzie', 'tyle samo'], answer: 1, explain: 'W wodzie jest mniej tlenu, dlatego ryby mają skrzela, które dobrze go wyłapują.' },
  },
  {
    title: 'Przystosowani do lądu',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Przystosowania do lądu: łuski i pancerz chronią przed wysychaniem, płuca do oddychania powietrzem, mocny szkielet i kończyny, ruch: chodzenie, bieg, skoki, pełzanie, lot; u roślin igły i sztywny pień">
      <g class="f3 s3"><rect x="10" y="10" width="185" height="56" rx="10"/><rect x="205" y="10" width="185" height="56" rx="10"/><rect x="10" y="76" width="185" height="56" rx="10"/><rect x="205" y="76" width="185" height="56" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="34">🦎 łuski, 🐢 pancerz</text><text x="102" y="54">– chronią przed wyschnięciem</text>
      <text x="297" y="34">🫁 płuca</text><text x="297" y="54">– oddychanie powietrzem</text>
      <text x="102" y="100">🦴 szkielet, kończyny</text><text x="102" y="120">– podpora ciała</text>
      <text x="297" y="100">🌲 igły, sztywny pień</text><text x="297" y="120">– u roślin</text></g>
      <rect x="10" y="142" width="380" height="50" rx="10" class="f4 s4"/>
      <text x="200" y="173" class="tx-s" text-anchor="middle">ruch: 🚶 chodzenie · 🦌 bieg · 🐇 skoki · 🐌 pełzanie · 🐦 lot</text>
    </svg>`,
    text: `<p>Na lądzie łatwo wyschnąć, dlatego jaszczurki mają <b>łuski</b>, a chrząszcze i żółwie – <b>pancerz</b>. Sosna ma <b>igły</b>, które tracą mało wody. Zwierzęta lądowe oddychają <b>płucami</b> (dżdżownica – wilgotną skórą).</p>
      <p>Powietrze nie podtrzymuje ciała, więc potrzebny jest mocny <b>szkielet</b>, mięśnie i kończyny. Zwierzęta chodzą, biegają, skaczą, pełzają albo latają.</p>`,
    remember: 'Ląd: ochrona przed wysychaniem, płuca, mocny szkielet, różne sposoby ruchu.',
    hook: 'Łuska jaszczurki to jak kurtka przeciwdeszczowa na odwrót – trzyma wodę w środku.',
  },
  {
    title: 'Przystosowani do wody',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Ryba z oznaczeniami: opływowy kształt ciała, skrzela pobierające tlen z wody, płetwy, śluz na skórze. Obok: kaczka z błoną pławną i roślina wodna z wiotką łodygą">
      <path d="M40,95 Q110,40 190,90 L230,60 L222,95 L230,130 L190,100 Q110,150 40,95 Z" class="f1 s1 sw"/>
      <circle cx="70" cy="88" r="5" class="bg ln"/>
      <path d="M95,80 Q100,95 95,110" class="ln sw s2"/>
      <path d="M120,70 L140,52 L150,72" class="f1 s1"/>
      <g class="ln-thin"><line x1="98" y1="112" x2="98" y2="150"/><line x1="145" y1="58" x2="170" y2="25"/><line x1="40" y1="95" x2="20" y2="130"/></g>
      <g class="tx-s"><text x="80" y="165">skrzela</text><text x="160" y="20">płetwy</text><text x="10" y="148">opływowy</text><text x="10" y="166">kształt</text></g>
      <text x="300" y="60" class="tx-s" text-anchor="middle">🦆 błona pławna</text>
      <text x="300" y="100" class="tx-s" text-anchor="middle">🌿 wiotka łodyga</text>
      <text x="300" y="140" class="tx-s" text-anchor="middle">🐸 kijanka: skrzela</text>
      <text x="300" y="175" class="tx-s" text-anchor="middle">śluz – łatwy poślizg</text>
    </svg>`,
    text: `<p>Ryby pobierają tlen rozpuszczony w wodzie <b>skrzelami</b>. <b>Opływowy kształt</b> ciała i <b>płetwy</b> pomagają pokonać opór wody, a <b>śluz</b> na skórze ułatwia ślizganie się. Kaczka ma <b>błonę pławną</b> między palcami. Rośliny wodne mają wiotkie łodygi – woda je podtrzymuje.</p>
      <p><b>Płazy</b> są wodno-lądowe: kijanki żyją w wodzie i oddychają skrzelami, a dorosłe żaby oddychają płucami i skórą.</p>`,
    remember: 'Woda: skrzela, opływowy kształt, płetwy, śluz, błona pławna.',
    hook: 'Ryba jest zbudowana jak łódź podwodna: wąska z przodu, gładka, ze sterami.',
    check: { q: 'Czym ryba pobiera tlen?', options: ['płucami', 'skrzelami', 'płetwami'], answer: 1, explain: 'Skrzela pobierają tlen rozpuszczony w wodzie.' },
  },
  {
    title: 'Pole – ekosystem człowieka',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Pole uprawne to ekosystem sztuczny. Rolnik orze, sieje, nawozi i zbiera plony. Bez opieki pole zarasta dzikimi roślinami">
      <defs><marker id="a-p12-pl-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f4 s4"><rect x="10" y="20" width="80" height="60" rx="8"/><rect x="110" y="20" width="80" height="60" rx="8"/><rect x="210" y="20" width="80" height="60" rx="8"/><rect x="310" y="20" width="80" height="60" rx="8"/></g>
      <g class="tx-s" text-anchor="middle"><text x="50" y="45">🚜</text><text x="50" y="68">orka</text><text x="150" y="45">🌱</text><text x="150" y="68">siew</text><text x="250" y="45">💧</text><text x="250" y="68">nawożenie</text><text x="350" y="45">🌾</text><text x="350" y="68">zbiór</text></g>
      <g class="ln"><path d="M92,50 L106,50" marker-end="url(#a-p12-pl-4)"/><path d="M192,50 L206,50" marker-end="url(#a-p12-pl-4)"/><path d="M292,50 L306,50" marker-end="url(#a-p12-pl-4)"/></g>
      <rect x="10" y="110" width="380" height="80" rx="12" class="f3 s3"/>
      <text x="200" y="138" class="tx-b" text-anchor="middle">ekosystem sztuczny</text>
      <text x="200" y="162" class="tx-s" text-anchor="middle">zwykle jeden gatunek rośliny;</text>
      <text x="200" y="180" class="tx-s" text-anchor="middle">bez opieki zarasta dzikimi roślinami</text>
    </svg>`,
    text: `<p><b>Pole uprawne</b> to <b>ekosystem sztuczny</b> – stworzył go człowiek. Rolnik orze ziemię, sieje, nawozi i zbiera plony. Zwykle rośnie tam jeden gatunek rośliny.</p>
      <p>Gdy człowiek przestaje dbać o pole, zarasta ono dzikimi roślinami. Rolnicy prowadzą też chów zwierząt (krowy, świnie, kury), a część plonów to pasza dla nich.</p>`,
    remember: 'Pole – ekosystem sztuczny; bez człowieka zarasta.',
    hook: 'Pole jest jak ogródek – bez ogrodnika szybko zmienia się w dziką łąkę.',
  },
  {
    title: 'Co rośnie na polskich polach?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Rośliny uprawne w Polsce: zboża na około dwóch trzecich pól – pszenica, żyto, jęczmień, owies, pszenżyto, kukurydza – dają mąkę, kasze, płatki; rzepak daje olej; burak cukrowy daje cukier; ziemniaki">
      <rect x="10" y="10" width="380" height="90" rx="12" class="f4 s4 sw"/>
      <text x="200" y="36" class="tx-b" text-anchor="middle">🌾 zboża – ok. 2/3 pól</text>
      <text x="200" y="62" class="tx-s" text-anchor="middle">pszenica, żyto, jęczmień, owies, pszenżyto, kukurydza</text>
      <text x="200" y="84" class="tx-s" text-anchor="middle">→ mąka, chleb, kasze, płatki, pasza</text>
      <g class="f3 s3"><rect x="10" y="112" width="120" height="98" rx="10"/><rect x="140" y="112" width="120" height="98" rx="10"/><rect x="270" y="112" width="120" height="98" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="140">🌼 rzepak</text><text x="70" y="166">→ olej</text><text x="200" y="140">burak cukrowy</text><text x="200" y="166">→ cukier</text><text x="330" y="140">🥔 ziemniaki</text><text x="330" y="166">→ jedzenie,</text><text x="330" y="186">pasza</text></g>
    </svg>`,
    text: `<p>Najwięcej pól – około dwóch trzecich – zajmują <b>zboża</b>: pszenica, żyto, jęczmień, owies, pszenżyto (skrzyżowanie pszenicy z żytem) i kukurydza. Dają mąkę, chleb, kasze, płatki i paszę dla zwierząt.</p>
      <p><b>Rzepak</b> (żółte pola wiosną) daje olej, <b>burak cukrowy</b> – cukier, a ważne są też <b>ziemniaki</b> i warzywa.</p>`,
    remember: 'Zboża (najwięcej pól), rzepak – olej, burak cukrowy – cukier, ziemniaki.',
    hook: 'Śniadanie z pola: chleb (pszenica, żyto), płatki (owies), cukier (burak), olej (rzepak).',
    check: { q: 'Z czego robi się w Polsce cukier?', options: ['z rzepaku', 'z buraka cukrowego', 'z owsa'], answer: 1, explain: 'Burak cukrowy to roślina cukrodajna. Rzepak daje olej, owies – płatki.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/cialo-ruch-pokarm'] = [
  {
    title: 'Ciało – drużyna układów',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Pięć układów współpracujących w ciele: ruchu – kości i mięśnie, pokarmowy – rozkłada pokarm, oddechowy – tlen, krwionośny – transport krwi, nerwowy – sterowanie">
      <rect x="140" y="80" width="120" height="50" rx="25" class="f4 s4 sw"/>
      <text x="200" y="111" class="tx-b" text-anchor="middle">🧍 ciało</text>
      <g class="f1 s1"><rect x="10" y="10" width="120" height="50" rx="10"/><rect x="270" y="10" width="120" height="50" rx="10"/><rect x="10" y="150" width="120" height="50" rx="10"/><rect x="270" y="150" width="120" height="50" rx="10"/><rect x="140" y="10" width="120" height="50" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="32">🦴 ruchu</text><text x="70" y="50">kości, mięśnie</text><text x="200" y="32">🧠 nerwowy</text><text x="200" y="50">steruje</text><text x="330" y="32">🫁 oddechowy</text><text x="330" y="50">tlen</text><text x="70" y="172">🍎 pokarmowy</text><text x="70" y="190">rozkłada pokarm</text><text x="330" y="172">❤️ krwionośny</text><text x="330" y="190">transport</text></g>
      <g class="ln-thin"><line x1="130" y1="50" x2="150" y2="85"/><line x1="200" y1="60" x2="200" y2="80"/><line x1="270" y1="50" x2="250" y2="85"/><line x1="130" y1="160" x2="150" y2="125"/><line x1="270" y1="160" x2="250" y2="125"/></g>
    </svg>`,
    text: `<p>Ciało działa jak drużyna. Każdy <b>układ narządów</b> ma swoje zadanie: <b>ruchu</b> – podpiera i porusza, <b>pokarmowy</b> – rozkłada pokarm, <b>oddechowy</b> – dostarcza tlen, <b>krwionośny</b> – rozwozi krew, <b>nerwowy</b> – steruje wszystkim.</p>
      <p>Układy współpracują: gdy biegniesz, mięśnie pracują, oddychasz szybciej, a serce mocniej pompuje krew.</p>`,
    remember: 'Układy narządów współpracują jak drużyna.',
    hook: 'Mózg to kapitan, serce – kierowca dostawczaka, płuca – wentylator, a mięśnie – zawodnicy.',
    check: { q: 'Który układ steruje pracą całego ciała?', options: ['pokarmowy', 'nerwowy', 'ruchu'], answer: 1, explain: 'Układ nerwowy (mózg, rdzeń kręgowy, nerwy) steruje ciałem.' },
  },
  {
    title: 'Szkielet, mięśnie i stawy',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Uproszczony szkielet z podpisami: czaszka chroni mózg, klatka piersiowa z żeber chroni serce i płuca, kręgosłup jest podporą ciała, staw kolanowy łączy kości ruchomo. Obok ramię z mięśniem, który kurcząc się, zgina rękę w łokciu">
      <circle cx="90" cy="35" r="22" class="f4 s4 sw"/>
      <line x1="90" y1="58" x2="90" y2="155" class="ln sw"/>
      <g class="ln"><path d="M90,72 Q62,76 64,90"/><path d="M90,72 Q118,76 116,90"/><path d="M90,86 Q60,90 62,104"/><path d="M90,86 Q120,90 118,104"/><path d="M90,100 Q62,104 64,118"/><path d="M90,100 Q118,104 116,118"/></g>
      <path d="M72,155 L108,155 L104,166 L76,166 Z" class="f4 s4"/>
      <line x1="80" y1="166" x2="74" y2="200" class="ln sw"/><line x1="74" y1="200" x2="70" y2="225" class="ln sw"/>
      <circle cx="74" cy="200" r="5" class="f2 s2"/>
      <line x1="100" y1="166" x2="106" y2="225" class="ln sw"/>
      <g class="ln-thin"><line x1="112" y1="30" x2="150" y2="30"/><line x1="118" y1="96" x2="150" y2="96"/><line x1="92" y1="140" x2="150" y2="140"/><line x1="79" y1="200" x2="150" y2="200"/></g>
      <g class="tx-s"><text x="155" y="35">czaszka – chroni mózg</text><text x="155" y="101">żebra – chronią serce, płuca</text><text x="155" y="145">kręgosłup – podpora</text><text x="155" y="205">staw – ruchome połączenie</text></g>
      <text x="300" y="60" class="tx-b" text-anchor="middle">206 kości</text>
      <text x="300" y="80" class="tx-s" text-anchor="middle">(dorosły)</text>
    </svg>`,
    text: `<p><b>Szkielet</b> to bierna część układu ruchu – dorosły człowiek ma <b>206 kości</b>. <b>Czaszka</b> chroni mózg, <b>klatka piersiowa</b> (żebra, mostek, kręgi) – serce i płuca, a <b>kręgosłup</b> z kręgów podpiera całe ciało.</p>
      <p><b>Mięśnie</b> to część czynna – kurczą się i ciągną kości. Kości łączą się ruchomo w <b>stawach</b> (kolano, łokieć, bark).</p>`,
    remember: 'Kości – bierne, mięśnie – czynne, stawy – ruchome połączenia.',
    hook: 'Kości to stelaż namiotu, mięśnie – linki, które go napinają, a stawy – zawiasy.',
    check: { q: 'Co chroni klatka piersiowa?', options: ['mózg', 'serce i płuca', 'kolano'], answer: 1, explain: 'Żebra osłaniają serce i płuca. Mózg chroni czaszka.' },
  },
  {
    title: 'Co jest w jedzeniu?',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Talerz z grupami składników: białka budują – mięso, ryby, jaja, mleko, fasola; węglowodany i tłuszcze dają energię – pieczywo, kasze, ziemniaki, masło, olej; witaminy i sole mineralne regulują – warzywa, owoce, mleko; do tego woda i błonnik">
      <circle cx="110" cy="110" r="95" class="bg ln sw"/>
      <path d="M110,110 L110,15 A95,95 0 0 1 192,157 Z" class="f2 s2"/>
      <path d="M110,110 L192,157 A95,95 0 0 1 28,157 Z" class="f4 s4"/>
      <path d="M110,110 L28,157 A95,95 0 0 1 110,15 Z" class="f3 s3"/>
      <text x="150" y="85" class="tx-s" text-anchor="middle">białka</text>
      <text x="110" y="170" class="tx-s" text-anchor="middle">energia</text>
      <text x="68" y="85" class="tx-s" text-anchor="middle">witaminy</text>
      <g class="tx-s"><text x="220" y="40">🥚 białka – budują</text><text x="220" y="80">🍞 węglowodany,</text><text x="220" y="98">🧈 tłuszcze – energia</text><text x="220" y="138">🥕 witaminy, sole</text><text x="220" y="156">– regulują</text><text x="220" y="196">💧 woda, błonnik</text></g>
    </svg>`,
    text: `<p><b>Białka</b> (mięso, ryby, jaja, mleko, fasola) <b>budują</b> ciało. <b>Węglowodany</b> (pieczywo, kasze, ziemniaki, owoce) i <b>tłuszcze</b> (masło, olej, orzechy) dają <b>energię</b>. <b>Witaminy i sole mineralne</b> (warzywa, owoce, mleko) <b>regulują</b> pracę organizmu – np. wapń wzmacnia kości.</p>
      <p>Potrzebne są też <b>woda</b> i <b>błonnik</b>, który pomaga jelitom. Żaden produkt nie ma wszystkiego – jedz <b>urozmaicenie</b>.</p>`,
    remember: 'Białka – budują, węglowodany i tłuszcze – energia, witaminy i sole – regulują.',
    hook: 'Budowa domu: białka to cegły, węglowodany i tłuszcze – paliwo dla koparki, witaminy – kierownik budowy.',
    check: { q: 'Które składniki budują mięśnie?', options: ['białka', 'tłuszcze', 'błonnik'], answer: 0, explain: 'Białka są budulcowe.' },
  },
  {
    title: 'Czytam etykietę',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Uproszczona etykieta jogurtu: wartość odżywcza w 100 gramach – wartość energetyczna w kcal, tłuszcz, węglowodany, w tym cukry, białko, sól. Skład: składniki od tego, którego jest najwięcej">
      <rect x="10" y="10" width="230" height="200" rx="8" class="bg ln sw"/>
      <text x="125" y="34" class="tx-b" text-anchor="middle">w 100 g</text>
      <line x1="10" y1="44" x2="240" y2="44" class="ln"/>
      <g class="tx-s"><text x="20" y="66">wartość energetyczna</text><text x="20" y="90">tłuszcz</text><text x="20" y="114">węglowodany</text><text x="34" y="138">w tym cukry</text><text x="20" y="162">białko</text><text x="20" y="186">sól</text></g>
      <g class="tx-s" text-anchor="end"><text x="230" y="66">… kcal</text><text x="230" y="90">… g</text><text x="230" y="114">… g</text><text x="230" y="138">… g</text><text x="230" y="162">… g</text><text x="230" y="186">… g</text></g>
      <rect x="250" y="10" width="140" height="200" rx="8" class="f4 s4"/>
      <text x="320" y="34" class="tx-b" text-anchor="middle">skład</text>
      <text x="320" y="62" class="tx-s" text-anchor="middle">1. najwięcej</text>
      <text x="320" y="86" class="tx-s" text-anchor="middle">2. …</text>
      <text x="320" y="110" class="tx-s" text-anchor="middle">3. …</text>
      <text x="320" y="134" class="tx-s" text-anchor="middle">… najmniej</text>
      <text x="320" y="170" class="tx-s" text-anchor="middle">porównuj</text>
      <text x="320" y="190" class="tx-s" text-anchor="middle">na 100 g!</text>
    </svg>`,
    text: `<p>Na etykiecie znajdziesz <b>wartość energetyczną</b> (w <b>kcal</b>) oraz zawartość tłuszczu, węglowodanów (w tym <b>cukrów</b>), białka i <b>soli</b> – zwykle w <b>100 g</b>. W <b>składzie</b> składniki są wypisane od tego, którego jest najwięcej.</p>
      <p>Porównuj produkty na tę samą ilość: jogurt z 5 g cukrów w 100 g jest mniej słodzony niż jogurt z 12 g cukrów w 100 g.</p>`,
    remember: 'Etykieta: kcal i składniki na 100 g; skład od największej ilości.',
    hook: 'Etykieta to „dowód osobisty” produktu – zanim zjesz, sprawdź, kim jest.',
    check: { q: 'Cukier jest pierwszy w składzie. Co to znaczy?', options: ['jest go najmniej', 'jest go najwięcej', 'w ogóle go nie ma'], answer: 1, explain: 'Składniki wypisuje się od tego, którego jest najwięcej.' },
  },
  {
    title: 'Dbam o ruch i jedzenie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dobre nawyki: codzienny ruch, prosta postawa i lekki plecak, urozmaicone posiłki z warzywami i owocami, woda zamiast słodkich napojów, mniej słodyczy i soli">
      <g class="f3 s3"><rect x="10" y="10" width="185" height="50" rx="10"/><rect x="205" y="10" width="185" height="50" rx="10"/><rect x="10" y="70" width="185" height="50" rx="10"/><rect x="205" y="70" width="185" height="50" rx="10"/><rect x="105" y="130" width="190" height="50" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="40">🏃 codzienny ruch</text><text x="297" y="40">🎒 prosto, lekki plecak</text><text x="102" y="100">🥗 warzywa i owoce</text><text x="297" y="100">💧 woda do picia</text><text x="200" y="160">🍬 mniej słodyczy i soli</text></g>
    </svg>`,
    text: `<p>Kości i mięśnie wzmacnia <b>codzienny ruch</b>. Dbaj o prostą postawę i nie noś za ciężkiego plecaka.</p>
      <p>Jedz <b>urozmaicone</b> posiłki z warzywami i owocami, pij wodę zamiast słodkich napojów, a słodyczy i słonych przekąsek jedz mniej – sprawdzaj etykiety.</p>`,
    remember: 'Ruch + urozmaicone jedzenie + woda = zdrowe ciało.',
    hook: 'Ciało to samochód: ruch to jazda próbna, jedzenie – paliwo. Złe paliwo – słabsza jazda.',
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/oddychanie-krazenie'] = [
  {
    title: 'Droga powietrza',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Droga powietrza w układzie oddechowym: nos, gardło, krtań, tchawica, oskrzela, płuca. W płucach tlen przechodzi do krwi, a dwutlenek węgla z krwi do wydychanego powietrza">
      <defs><marker id="a-p12-od-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="100" y1="20" x2="100" y2="110" class="ln sw"/>
      <path d="M100,110 L70,135" class="ln sw"/><path d="M100,110 L130,135" class="ln sw"/>
      <ellipse cx="60" cy="170" rx="42" ry="50" class="f2 s2 sw"/>
      <ellipse cx="140" cy="170" rx="42" ry="50" class="f2 s2 sw"/>
      <g class="ln-thin"><line x1="104" y1="22" x2="200" y2="22"/><line x1="104" y1="50" x2="200" y2="50"/><line x1="104" y1="78" x2="200" y2="78"/><line x1="104" y1="100" x2="200" y2="106"/><line x1="128" y1="132" x2="200" y2="134"/><line x1="180" y1="170" x2="200" y2="170"/></g>
      <g class="tx-s"><text x="206" y="27">nos – ogrzewa, oczyszcza</text><text x="206" y="55">gardło</text><text x="206" y="83">krtań – tu powstaje głos</text><text x="206" y="111">tchawica</text><text x="206" y="139">oskrzela</text><text x="206" y="175">płuca: tlen → krew,</text><text x="206" y="195">dwutlenek węgla → wydech</text></g>
    </svg>`,
    text: `<p>Komórki potrzebują <b>tlenu</b>, żeby uwolnić energię z pokarmu. Powstaje przy tym <b>dwutlenek węgla</b>. Powietrze wędruje drogą: <b>nos → gardło → krtań → tchawica → oskrzela → płuca</b>.</p>
      <p>Nos ogrzewa, nawilża i oczyszcza powietrze. W <b>płucach</b> tlen przechodzi do krwi, a dwutlenek węgla z krwi do powietrza, które wydychamy.</p>`,
    remember: 'Nos → gardło → krtań → tchawica → oskrzela → płuca.',
    hook: 'Tchawica to „pień”, oskrzela – „gałęzie”, a płuca – „korona drzewa” do góry nogami.',
    check: { q: 'Gdzie tlen przechodzi do krwi?', options: ['w nosie', 'w płucach', 'w krtani'], answer: 1, explain: 'Wymiana gazów zachodzi w płucach.' },
  },
  {
    title: 'Serce – pompa, krew – transport',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Serce w środku pompuje krew. Tętnicami krew płynie od serca do ciała, żyłami wraca do serca. Krew rozwozi tlen i składniki pokarmowe, zabiera dwutlenek węgla">
      <defs><marker id="a-p12-od-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="120" class="tx-b" text-anchor="middle">❤️ serce</text>
      <path d="M240,100 Q330,60 330,110" class="ln sw s2" marker-end="url(#a-p12-od-2)"/>
      <path d="M330,130 Q330,175 240,135" class="ln sw s1" marker-end="url(#a-p12-od-2)"/>
      <path d="M160,100 Q70,60 70,110" class="ln sw s2" marker-end="url(#a-p12-od-2)"/>
      <path d="M70,130 Q70,175 160,135" class="ln sw s1" marker-end="url(#a-p12-od-2)"/>
      <text x="395" y="50" class="tx-s t2" text-anchor="end">tętnice – od serca</text>
      <text x="395" y="190" class="tx-s t1" text-anchor="end">żyły – do serca</text>
      <text x="20" y="40" class="tx-s">🚚 krew wiezie:</text>
      <text x="20" y="200" class="tx-s">tlen, pokarm, ciepło</text>
    </svg>`,
    text: `<p><b>Serce</b> to mięsień, który działa jak <b>pompa</b>. <b>Tętnice</b> prowadzą krew <b>od</b> serca, <b>żyły</b> – <b>do</b> serca, a najcieńsze naczynia włosowate docierają do każdej komórki.</p>
      <p><b>Krew</b> rozwozi tlen i składniki pokarmowe, zabiera dwutlenek węgla, rozprowadza ciepło i pomaga walczyć z zarazkami. Rytm serca – <b>tętno</b> – wyczujesz na nadgarstku. Po biegu przyspiesza.</p>`,
    remember: 'Tętnice – od serca, żyły – do serca. Krew to transport ciała.',
    hook: '<b>T</b>ętnice – „<b>T</b>am”, od serca w świat; żyły – wracają do „domu”.',
    check: { q: 'Które naczynia prowadzą krew do serca?', options: ['tętnice', 'żyły', 'oskrzela'], answer: 1, explain: 'Do serca krew wraca żyłami.' },
  },
  {
    title: 'Mózg – centrum dowodzenia',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Układ nerwowy: mózg w czaszce, rdzeń kręgowy w kręgosłupie, nerwy w całym ciele. Mózg odbiera sygnały od zmysłów, myśli, pamięta, decyduje i steruje ruchem. Pomagają mu sen, ruch, woda i przerwy">
      <ellipse cx="90" cy="45" rx="45" ry="32" class="f5 s5 sw"/>
      <line x1="90" y1="77" x2="90" y2="180" class="ln sw s5"/>
      <g class="ln-thin"><path d="M90,100 L50,120"/><path d="M90,100 L130,120"/><path d="M90,140 L45,170"/><path d="M90,140 L135,170"/></g>
      <g class="tx-s"><text x="150" y="40">🧠 mózg – w czaszce</text><text x="150" y="62">rdzeń kręgowy – w kręgosłupie</text><text x="150" y="84">nerwy – w całym ciele</text></g>
      <rect x="150" y="104" width="240" height="86" rx="12" class="f3 s3"/>
      <text x="270" y="128" class="tx-s" text-anchor="middle">pomagają mu:</text>
      <text x="270" y="152" class="tx-s" text-anchor="middle">😴 sen · 🏃 ruch · 💧 woda</text>
      <text x="270" y="174" class="tx-s" text-anchor="middle">⏸️ przerwy · 🪖 kask</text>
    </svg>`,
    text: `<p><b>Układ nerwowy</b> to <b>mózg</b> (w czaszce), <b>rdzeń kręgowy</b> (w kręgosłupie) i <b>nerwy</b>. Mózg odbiera sygnały od zmysłów, rozpoznaje je, zapamiętuje, myśli i decyduje, a potem przez nerwy steruje mięśniami.</p>
      <p>Mózgowi pomagają <b>regularny sen</b> (w nocy porządkuje to, czego się nauczyłeś), ruch, woda i przerwy w nauce. Na rowerze i hulajnodze chroń głowę kaskiem.</p>`,
    remember: 'Mózg + rdzeń kręgowy + nerwy = układ nerwowy. Sen pomaga zapamiętywać.',
    hook: 'Nerwy to kable, a mózg – komputer, który nigdy się nie wyłącza.',
  },
  {
    title: 'Dym i alkohol – wrogowie ciała',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Dym tytoniowy: tlenek węgla utrudnia krwi przenoszenie tlenu, niszczy płuca i serce, nikotyna uzależnia, bierne palenie też szkodzi. Alkohol szkodzi mózgowi i innym narządom, uzależnia. Sprzedaż osobom poniżej 18 lat zabroniona">
      <rect x="10" y="10" width="185" height="150" rx="12" class="f2 s2"/>
      <rect x="205" y="10" width="185" height="150" rx="12" class="f5 s5"/>
      <text x="102" y="36" class="tx-b" text-anchor="middle">🚭 dym</text>
      <g class="tx-s" text-anchor="middle"><text x="102" y="62">tlenek węgla –</text><text x="102" y="80">mniej tlenu we krwi</text><text x="102" y="104">nikotyna uzależnia</text><text x="102" y="128">bierne palenie</text><text x="102" y="146">też szkodzi</text></g>
      <text x="297" y="36" class="tx-b" text-anchor="middle">🚫 alkohol</text>
      <g class="tx-s" text-anchor="middle"><text x="297" y="62">szkodzi mózgowi</text><text x="297" y="80">i innym narządom</text><text x="297" y="104">uzależnia</text><text x="297" y="128">dla dzieci</text><text x="297" y="146">szczególnie groźny</text></g>
      <rect x="10" y="170" width="380" height="32" rx="8" class="f4 s4"/>
      <text x="200" y="192" class="tx-s" text-anchor="middle">w Polsce sprzedaż osobom poniżej 18 lat – zabroniona</text>
    </svg>`,
    text: `<p><b>Dym tytoniowy</b> zawiera wiele trujących substancji. <b>Tlenek węgla</b> z dymu utrudnia krwi przenoszenie tlenu, a <b>nikotyna</b> uzależnia. Szkodzi też <b>bierne palenie</b> – wdychanie cudzego dymu.</p>
      <p><b>Alkohol</b> szkodzi m.in. mózgowi i uzależnia – dla dzieci i młodzieży jest szczególnie groźny. W Polsce nie wolno sprzedawać papierosów ani alkoholu osobom poniżej 18 lat.</p>`,
    remember: 'Dym: tlenek węgla i nikotyna. Alkohol: szkodzi mózgowi. Oba uzależniają.',
    hook: 'Papieros zabiera krwi „miejsca dla tlenu” – jak pasażer na gapę, który zajmuje fotel.',
    check: { q: 'Co to jest bierne palenie?', options: ['palenie raz na rok', 'wdychanie cudzego dymu', 'gaszenie papierosa'], answer: 1, explain: 'Cudzy dym też szkodzi – masz prawo poprosić, by nikt przy tobie nie palił.' },
  },
  {
    title: 'Dbam o płuca, serce i mózg',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Dobre nawyki: oddychaj nosem, ruszaj się na świeżym powietrzu, w dni smogowe ogranicz wysiłek na dworze, wysypiaj się, unikaj dymu, chroń głowę kaskiem">
      <g class="f3 s3"><rect x="10" y="10" width="185" height="50" rx="10"/><rect x="205" y="10" width="185" height="50" rx="10"/><rect x="10" y="70" width="185" height="50" rx="10"/><rect x="205" y="70" width="185" height="50" rx="10"/><rect x="10" y="130" width="185" height="50" rx="10"/><rect x="205" y="130" width="185" height="50" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="40">👃 oddychaj nosem</text><text x="297" y="40">🌳 ruch na powietrzu</text><text x="102" y="100">😷 smog – mniej wysiłku</text><text x="297" y="100">😴 wysypiaj się</text><text x="102" y="160">🚭 unikaj dymu</text><text x="297" y="160">🪖 kask na rowerze</text></g>
    </svg>`,
    text: `<p>Oddychaj nosem, ruszaj się na świeżym powietrzu – serce i płuca stają się silniejsze. W dni <b>smogowe</b> ogranicz wysiłek na dworze.</p>
      <p>Wysypiaj się regularnie, unikaj dymu tytoniowego, a na rowerze i hulajnodze zakładaj kask.</p>`,
    remember: 'Ruch, sen, czyste powietrze, zero dymu.',
    check: { q: 'Prawda czy fałsz? Żyły prowadzą krew od serca.', options: ['Prawda', 'Fałsz'], answer: 1, explain: 'Od serca – tętnice, do serca – żyły.' },
  },
];

// ---------------------------------------------------------------------------
window.LESSONS['przyroda/choroby'] = [
  {
    title: 'Kto wywołuje choroby?',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Sprawcy chorób zakaźnych: bakterie – organizmy jednokomórkowe, większość pożyteczna, niektóre wywołują np. anginę; wirusy – nie są organizmami żywymi, np. grypa, ospa; niektóre grzyby – grzybica; pasożyty – owsiki, glista, kleszcz">
      <g class="f1 s1"><rect x="10" y="10" width="185" height="90" rx="12"/><rect x="205" y="10" width="185" height="90" rx="12"/><rect x="10" y="110" width="185" height="90" rx="12"/><rect x="205" y="110" width="185" height="90" rx="12"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">🦠 bakterie</text><text x="297" y="36">wirusy</text><text x="102" y="136">🍄 grzyby</text><text x="297" y="136">🪱 pasożyty</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="62">większość pożyteczna,</text><text x="102" y="82">niektóre: angina</text><text x="297" y="62">nie są organizmami;</text><text x="297" y="82">grypa, ospa, odra</text><text x="102" y="162">niektóre:</text><text x="102" y="182">grzybica skóry</text><text x="297" y="162">owsiki, glista,</text><text x="297" y="182">kleszcz</text></g>
    </svg>`,
    text: `<p>Choroby zakaźne wywołują <b>drobnoustroje</b> – tak małe, że widać je dopiero pod mikroskopem. <b>Bakterie</b> to organizmy jednokomórkowe: większość jest pożyteczna, ale niektóre wywołują choroby, np. anginę. <b>Wirusy</b> nie są organizmami żywymi – wywołują np. grypę, ospę wietrzną, odrę.</p>
      <p>Niektóre <b>grzyby</b> powodują grzybicę skóry. <b>Pasożyty</b> żyją kosztem innego organizmu – w jelitach (owsiki, glista ludzka) albo na skórze (kleszcz).</p>`,
    remember: 'Bakterie, wirusy, grzyby, pasożyty. Wirusy nie są organizmami.',
    hook: 'Nie każda bakteria to wróg – te w jogurcie są po twojej stronie.',
    check: { q: 'Co nie jest organizmem żywym?', options: ['bakteria', 'wirus', 'kleszcz'], answer: 1, explain: 'Wirusy namnażają się tylko w komórkach innych organizmów.' },
  },
  {
    title: 'Jak zarazki wędrują?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Cztery drogi zakażenia: kropelkowa – kaszel i kichanie; pokarmowa – brudne ręce, niemyte owoce, brudna woda; kontakt – dotyk, wspólne przedmioty; przez skórę – rany i ukłucia, np. kleszcz">
      <g class="f4 s4"><rect x="10" y="10" width="185" height="85" rx="12"/><rect x="205" y="10" width="185" height="85" rx="12"/><rect x="10" y="105" width="185" height="85" rx="12"/><rect x="205" y="105" width="185" height="85" rx="12"/></g>
      <g class="tx-b" text-anchor="middle"><text x="102" y="36">🤧 kropelkowa</text><text x="297" y="36">🍎 pokarmowa</text><text x="102" y="131">🤝 kontakt</text><text x="297" y="131">🩹 przez skórę</text></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="62">kaszel, kichanie</text><text x="102" y="80">(np. grypa)</text><text x="297" y="62">brudne ręce,</text><text x="297" y="80">niemyte owoce</text><text x="102" y="157">dotyk, wspólne</text><text x="102" y="175">przedmioty</text><text x="297" y="157">rany, ukłucia</text><text x="297" y="175">(np. kleszcz)</text></g>
    </svg>`,
    text: `<p>Zarazki przenoszą się <b>drogą kropelkową</b> (kaszel, kichanie), <b>pokarmową</b> (brudne ręce, niemyte owoce, brudna woda – owsiki i glista to „choroby brudnych rąk”), <b>przez kontakt</b> (dotyk, wspólne przedmioty) i <b>przez skórę</b> – przez rany i ukłucia, np. kleszcza.</p>`,
    remember: 'Drogi zakażenia: kropelkowa, pokarmowa, kontakt, przez skórę.',
    hook: 'Zarazki podróżują czterema „autobusami”: kropla, jedzenie, dotyk, ukłucie.',
    check: { q: 'Którą drogą zarażamy się owsikami?', options: ['kropelkową', 'pokarmową – przez brudne ręce', 'przez ukłucie komara'], answer: 1, explain: 'Jaja pasożyta trafiają do ust z brudnych rąk – to choroba brudnych rąk.' },
  },
  {
    title: 'Tarcza ochronna – higiena',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Sposoby ochrony: myj ręce mydłem przed jedzeniem i po toalecie, myj owoce i warzywa, kichaj w łokieć lub chusteczkę, wietrz pokój, używaj własnego kubka i ręcznika, gdy chorujesz – zostań w domu">
      <g class="f3 s3"><rect x="10" y="10" width="185" height="54" rx="10"/><rect x="205" y="10" width="185" height="54" rx="10"/><rect x="10" y="72" width="185" height="54" rx="10"/><rect x="205" y="72" width="185" height="54" rx="10"/><rect x="10" y="134" width="185" height="54" rx="10"/><rect x="205" y="134" width="185" height="54" rx="10"/></g>
      <g class="tx-s" text-anchor="middle"><text x="102" y="42">🧼 myj ręce</text><text x="297" y="42">🍏 myj owoce</text><text x="102" y="104">💪 kichaj w łokieć</text><text x="297" y="104">🪟 wietrz pokój</text><text x="102" y="166">🥤 własny kubek</text><text x="297" y="166">🛏️ chory? zostań w domu</text></g>
    </svg>`,
    text: `<p><b>Myj ręce</b> mydłem przed jedzeniem, po toalecie i po powrocie do domu. Myj owoce i warzywa. Kichaj i kaszl w <b>chusteczkę lub łokieć</b>. Wietrz pokój.</p>
      <p>Używaj własnego kubka, ręcznika i szczoteczki. Gdy chorujesz – zostań w domu, żeby nie zarażać innych. Odporność wzmacniają sen, ruch i urozmaicone jedzenie.</p>`,
    remember: 'Mycie rąk to najprostsza tarcza przed zarazkami.',
    hook: 'Mydło to „gumka do ścierania” zarazków – myj ręce tak długo, jak śpiewasz „Sto lat” dwa razy.',
  },
  {
    title: 'Uwaga, kleszcze!',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kleszcz – pasożyt wysysający krew, może przenosić boreliozę i kleszczowe zapalenie mózgu. Po spacerze obejrzyj skórę. Kleszcza usuwa się jak najszybciej pęsetą, chwytając tuż przy skórze, bez smarowania kremem czy spirytusem, z pomocą dorosłego">
      <ellipse cx="60" cy="80" rx="22" ry="28" class="f2 s2 sw"/>
      <circle cx="60" cy="48" r="8" class="f2 s2"/>
      <g class="ln"><path d="M40,70 L20,60"/><path d="M40,85 L18,85"/><path d="M40,100 L20,112"/><path d="M80,70 L100,60"/><path d="M80,85 L102,85"/><path d="M80,100 L100,112"/></g>
      <text x="60" y="140" class="tx-s" text-anchor="middle">kleszcz</text>
      <text x="60" y="160" class="tx-s" text-anchor="middle">(pasożyt)</text>
      <rect x="130" y="10" width="260" height="56" rx="10" class="f4 s4"/>
      <text x="260" y="34" class="tx-s" text-anchor="middle">może przenosić boreliozę</text>
      <text x="260" y="54" class="tx-s" text-anchor="middle">i kleszczowe zapalenie mózgu</text>
      <rect x="130" y="74" width="260" height="56" rx="10" class="f3 s3"/>
      <text x="260" y="98" class="tx-s" text-anchor="middle">🔎 po spacerze obejrzyj skórę</text>
      <text x="260" y="118" class="tx-s" text-anchor="middle">wyczesz włosy, umyj się</text>
      <rect x="130" y="138" width="260" height="56" rx="10" class="f1 s1"/>
      <text x="260" y="162" class="tx-s" text-anchor="middle">jak najszybciej pęsetą – z dorosłym</text>
      <text x="260" y="182" class="tx-s" text-anchor="middle">❌ bez kremu i spirytusu</text>
    </svg>`,
    text: `<p><b>Kleszcz</b> to pasożyt, który wbija się w skórę i wysysa krew. Może przenosić <b>boreliozę</b> i <b>kleszczowe zapalenie mózgu</b>. Po spacerze w lesie, parku czy na łące obejrzyj skórę, wyczesz włosy i umyj się.</p>
      <p>Kleszcza usuwa się <b>jak najszybciej</b> – poproś dorosłego. Wyjmuje się go <b>pęsetą</b>, chwytając tuż przy skórze, <b>bez</b> smarowania kremem czy spirytusem. Gdy później wokół ukłucia pojawi się rosnący czerwony rumień – do lekarza.</p>`,
    remember: 'Kleszcz: obejrzyj skórę, usuń szybko pęsetą, niczym nie smaruj.',
    hook: 'Kleszcz to „pasażer na gapę” – im szybciej go wysadzisz, tym bezpieczniej.',
    check: { q: 'Jak usunąć kleszcza?', options: ['posmarować go masłem', 'jak najszybciej pęsetą, z pomocą dorosłego', 'czekać, aż sam odpadnie'], answer: 1, explain: 'Kleszcza niczym się nie smaruje – wyjmuje się go szybko pęsetą.' },
  },
  {
    title: 'Szczepionki i antybiotyki',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Szczepionka: organizm ćwiczy obronę na osłabionych lub zabitych zarazkach albo ich fragmentach i potem szybciej pokonuje prawdziwy zarazek. Antybiotyk działa tylko na bakterie, nie na wirusy, i bierze się go tylko z przepisu lekarza">
      <rect x="10" y="10" width="185" height="180" rx="12" class="f3 s3"/>
      <rect x="205" y="10" width="185" height="180" rx="12" class="f5 s5"/>
      <text x="102" y="38" class="tx-b" text-anchor="middle">💉 szczepionka</text>
      <g class="tx-s" text-anchor="middle"><text x="102" y="70">organizm „ćwiczy”</text><text x="102" y="90">obronę na osłabionych</text><text x="102" y="110">zarazkach</text><text x="102" y="142">→ potem szybciej</text><text x="102" y="162">pokonuje chorobę</text></g>
      <text x="297" y="38" class="tx-b" text-anchor="middle">💊 antybiotyk</text>
      <g class="tx-s" text-anchor="middle"><text x="297" y="70">działa tylko</text><text x="297" y="90">na bakterie</text><text x="297" y="122">❌ nie na wirusy</text><text x="297" y="142">(np. grypa)</text><text x="297" y="172">tylko od lekarza</text></g>
    </svg>`,
    text: `<p><b>Szczepionka</b> zawiera osłabione lub zabite zarazki albo ich fragmenty. Organizm „ćwiczy” na nich obronę i uczy się je rozpoznawać – gdy spotka prawdziwy zarazek, szybciej go pokona. Szczepienia chronią przed wieloma groźnymi chorobami.</p>
      <p><b>Antybiotyki</b> działają tylko na <b>bakterie</b> – grypy (wirus) nie wyleczą. Bierze się je tylko wtedy, gdy przepisze je lekarz.</p>`,
    remember: 'Szczepionka – trening odporności. Antybiotyk – tylko na bakterie, tylko od lekarza.',
    hook: 'Szczepionka to próbny alarm przeciwpożarowy – gdy przyjdzie prawdziwy, wszyscy wiedzą, co robić.',
    check: { q: 'Czy antybiotyk wyleczy grypę?', options: ['tak, zawsze', 'nie – grypę wywołuje wirus', 'tylko w zimie'], answer: 1, explain: 'Antybiotyki działają tylko na bakterie.' },
  },
];
