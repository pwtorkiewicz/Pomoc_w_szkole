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
