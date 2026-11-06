/* Lekcje – zajęcia praktyczno-techniczne, klasa 4. Klucz: 'technika/<id działu>'. Format: docs/LEKCJE.md
 * Treść tylko ze ściągi działu w js/dane/kl4/technika.js (przepisy sprawdzone – patrz pole basis). */
window.LESSONS = window.LESSONS || {};

// ---------------------------------------------------------------------------
window.LESSONS['technika/manewry-skrzyzowania'] = [
  {
    title: 'Każdy manewr w trzech krokach',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Manewr w trzech krokach: 1. obejrzyj się, 2. pokaż ręką zawczasu – w lewo lewą ręką, w prawo prawą, 3. upewnij się i wykonaj manewr, trzymając kierownicę.">
      <defs><marker id="a-k4te-mn-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="6" y="10" width="112" height="120" rx="12" class="f4 s4"/>
      <rect x="144" y="10" width="112" height="120" rx="12" class="f1 s1"/>
      <rect x="282" y="10" width="112" height="120" rx="12" class="f3 s3"/>
      <text x="62" y="52" class="tx-b" text-anchor="middle">👀</text>
      <text x="200" y="52" class="tx-b" text-anchor="middle">👈</text>
      <text x="338" y="52" class="tx-b" text-anchor="middle">🚲</text>
      <text x="62" y="86" class="tx-b" text-anchor="middle">1. obejrzyj</text>
      <text x="62" y="106" class="tx-b" text-anchor="middle">się</text>
      <text x="200" y="86" class="tx-b" text-anchor="middle">2. pokaż</text>
      <text x="200" y="106" class="tx-b" text-anchor="middle">ręką</text>
      <text x="338" y="86" class="tx-b" text-anchor="middle">3. wykonaj</text>
      <text x="338" y="106" class="tx-s" text-anchor="middle">chwyć</text>
      <text x="338" y="122" class="tx-s" text-anchor="middle">kierownicę</text>
      <line x1="120" y1="70" x2="140" y2="70" class="ln s2" marker-end="url(#a-k4te-mn-1)"/>
      <line x1="258" y1="70" x2="278" y2="70" class="ln s2" marker-end="url(#a-k4te-mn-1)"/>
      <rect x="6" y="146" width="388" height="48" rx="12" class="f5 s5"/>
      <text x="200" y="176" class="tx" text-anchor="middle">w lewo – lewa ręka · w prawo – prawa ręka</text>
    </svg>`,
    text: `<p><b>Manewr</b> to np. ruszanie, skręcanie, zmiana pasa, wymijanie, omijanie, wyprzedzanie czy zawracanie. Każdy wykonujesz z <b>zachowaniem szczególnej ostrożności</b>.</p>
      <p>Najpierw <b>obejrzyj się</b> – czy możesz bezpiecznie skręcić? Potem <b>zasygnalizuj</b> manewr <b>zawczasu i wyraźnie</b>. Rower zwykle nie ma kierunkowskazów, więc <b>wyciągasz rękę w stronę skrętu</b>. Na koniec jeszcze raz się upewnij, chwyć kierownicę i wykonaj manewr.</p>`,
    remember: 'Obejrzyj się → pokaż ręką zawczasu → upewnij się i wykonaj manewr.',
    hook: 'Ręka jest jak strzałka: <b>pokazuje palcem</b> tę stronę, w którą zaraz pojedziesz.',
    check: { q: 'Chcesz skręcić w prawo. Którą rękę wyciągasz w bok?', options: ['prawą', 'lewą', 'obie naraz'], answer: 0, explain: 'Wyciągasz rękę w stronę skrętu: w prawo – prawą, w lewo – lewą.' },
  },
  {
    title: 'Włączanie się do ruchu – przepuść wszystkich',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Rowerzysta wyjeżdża z podwórka na ulicę. Po ulicy jedzie samochód, a chodnikiem idzie pieszy. Rowerzysta czeka i przepuszcza ich – włączając się do ruchu, ustępuje pierwszeństwa wszystkim.">
      <defs><marker id="a-k4te-wl-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <line x1="0" y1="40" x2="400" y2="40" class="ln"/>
      <line x1="0" y1="120" x2="400" y2="120" class="ln"/>
      <line x1="0" y1="80" x2="400" y2="80" class="ln-thin dash"/>
      <line x1="0" y1="150" x2="170" y2="150" class="ln"/>
      <line x1="230" y1="150" x2="400" y2="150" class="ln"/>
      <line x1="170" y1="150" x2="170" y2="205" class="ln"/>
      <line x1="230" y1="150" x2="230" y2="205" class="ln"/>
      <text x="200" y="22" class="tx-s" text-anchor="middle">ulica</text>
      <text x="320" y="142" class="tx-s" text-anchor="middle">chodnik</text>
      <text x="300" y="186" class="tx-s" text-anchor="middle">🏠 podwórko</text>
      <rect x="40" y="88" width="56" height="26" rx="5" class="f2 s2 sw"/>
      <text x="68" y="106" class="tx" text-anchor="middle">🚗</text>
      <path d="M100,101 H180" class="ln s2" marker-end="url(#a-k4te-wl-1)"/>
      <text x="110" y="140" class="tx" text-anchor="middle">🚶</text>
      <path d="M126,135 H158" class="ln s2" marker-end="url(#a-k4te-wl-1)"/>
      <rect x="186" y="164" width="28" height="26" rx="5" class="f1 s1 sw"/>
      <text x="200" y="183" class="tx" text-anchor="middle">🚲</text>
      <text x="60" y="186" class="tx-b t2" text-anchor="middle">✋ czekam</text>
    </svg>`,
    text: `<p><b>Włączasz się do ruchu</b>, gdy <b>ruszasz</b> po postoju albo <b>wjeżdżasz na drogę</b>: z podwórka lub posesji, ze strefy zamieszkania, z drogi gruntowej na utwardzoną albo z drogi dla rowerów na jezdnię.</p>
      <p>Wtedy <b>ustępujesz pierwszeństwa wszystkim</b> – samochodom, rowerzystom i pieszym. Wyjeżdżasz dopiero wtedy, gdy nikomu nie przeszkodzisz.</p>`,
    remember: 'Włączasz się do ruchu – ustępujesz pierwszeństwa wszystkim.',
    hook: 'Jak przy wchodzeniu do pełnego autobusu: najpierw przepuszczasz tych, którzy już są w ruchu, a dopiero potem dołączasz.',
    check: { q: 'Stoisz rowerem przy krawędzi jezdni i chcesz ruszyć. Za tobą jedzie samochód. Co robisz?', options: ['przepuszczam samochód i dopiero ruszam', 'ruszam, bo stałem tu pierwszy', 'ruszam, a samochód niech zwolni'], answer: 0, explain: 'Ruszanie po postoju to włączanie się do ruchu – ustępujesz pierwszeństwa innym pojazdom.' },
  },
  {
    title: 'Skręt w prawo i skręt w lewo',
    svg: `<svg viewBox="0 0 300 276" role="img" aria-label="Skrzyżowanie. Rower skręcający w prawo jedzie przy prawej krawędzi jezdni i skręca ciasnym łukiem. Rower skręcający w lewo zbliża się do środka jezdni i skręca szerokim łukiem. Z przeciwka jedzie samochód na wprost – rower skręcający w lewo go przepuszcza.">
      <defs><marker id="a-k4te-sk-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M0,85 H120 V0 M180,0 V85 H300 M0,145 H120 V230 M180,230 V145 H300" class="ln"/>
      <path d="M0,115 H120 M180,115 H300 M150,0 V85 M150,145 V230" class="ln-thin dash"/>
      <path d="M174,222 V160 C174,148 182,140 196,140 H284" class="ln s3 sw" marker-end="url(#a-k4te-sk-1)"/>
      <path d="M157,222 V128 C157,104 144,92 120,92 H16" class="ln s1 sw" marker-end="url(#a-k4te-sk-1)"/>
      <rect x="124" y="30" width="22" height="34" rx="4" class="f2 s2 sw"/>
      <text x="135" y="53" class="tx-s" text-anchor="middle">🚗</text>
      <path d="M135,68 V82" class="ln s2" marker-end="url(#a-k4te-sk-1)"/>
      <text x="290" y="252" class="tx-s t3" text-anchor="end">w prawo – przy prawej krawędzi</text>
      <text x="290" y="270" class="tx-s t1" text-anchor="end">w lewo – od środka jezdni</text>
    </svg>`,
    text: `<p>Przed <b>skrętem w prawo</b> zbliż się do <b>prawej krawędzi</b> jezdni. Przed <b>skrętem w lewo</b> zbliż się do <b>środka jezdni</b> (na drodze jednokierunkowej – do jej lewej krawędzi).</p>
      <p>Skręcając w lewo, <b>przepuść jadących z przeciwka</b> na wprost i w prawo. A gdy skręcasz w boczną ulicę, ustąp <b>pieszym</b>, którzy przechodzą przez jej jezdnię, i <b>rowerzystom jadącym na wprost</b>. Zmieniając pas ruchu, ustąp temu, kto już jedzie pasem, na który chcesz wjechać.</p>`,
    remember: 'W prawo – od prawej krawędzi. W lewo – od środka jezdni, przepuszczając jadących z przeciwka.',
    hook: 'Prawo – <b>ciasno</b> przy krawężniku, lewo – <b>szeroko</b> od środka. Strzałka w prawo jest krótka, w lewo – długa.',
    check: { q: 'Skręcasz w lewo. Z przeciwka jedzie samochód prosto. Kto przejedzie pierwszy?', options: ['samochód z przeciwka', 'ja, bo pokazałem skręt ręką', 'ten, kto pierwszy dojechał'], answer: 0, explain: 'Skręcając w lewo, ustępujesz pierwszeństwa jadącym z przeciwka na wprost i w prawo.' },
  },
  {
    title: 'Wymijanie, omijanie, wyprzedzanie',
    svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Trzy manewry. Wymijanie: rower jedzie w prawo, z przeciwka nadjeżdża samochód. Omijanie: rower przejeżdża obok samochodu, który stoi. Wyprzedzanie: rower przejeżdża obok innego roweru, który jedzie w tę samą stronę – z lewej.">
      <defs><marker id="a-k4te-wo-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="8" y="40" class="tx-b">wymijanie</text>
      <text x="8" y="60" class="tx-s">z przeciwka</text>
      <line x1="140" y1="12" x2="396" y2="12" class="ln"/>
      <line x1="140" y1="72" x2="396" y2="72" class="ln"/>
      <line x1="140" y1="42" x2="396" y2="42" class="ln-thin dash"/>
      <text x="170" y="64" class="tx" text-anchor="middle">🚲</text>
      <path d="M186,58 H232" class="ln s1" marker-end="url(#a-k4te-wo-1)"/>
      <rect x="320" y="17" width="48" height="20" rx="4" class="f2 s2"/>
      <text x="344" y="32" class="tx-s" text-anchor="middle">🚗</text>
      <path d="M316,27 H270" class="ln s2" marker-end="url(#a-k4te-wo-1)"/>
      <text x="8" y="120" class="tx-b">omijanie</text>
      <text x="8" y="140" class="tx-s">coś stoi</text>
      <line x1="140" y1="92" x2="396" y2="92" class="ln"/>
      <line x1="140" y1="152" x2="396" y2="152" class="ln"/>
      <line x1="140" y1="122" x2="396" y2="122" class="ln-thin dash"/>
      <text x="170" y="144" class="tx" text-anchor="middle">🚲</text>
      <rect x="250" y="128" width="54" height="20" rx="4" class="f2 s2"/>
      <text x="277" y="143" class="tx-s" text-anchor="middle">stoi</text>
      <path d="M186,138 C220,138 226,111 277,111 C326,111 334,138 380,138" class="ln s1" marker-end="url(#a-k4te-wo-1)"/>
      <text x="8" y="200" class="tx-b">wyprzedzanie</text>
      <text x="8" y="220" class="tx-s">w tę samą stronę</text>
      <line x1="140" y1="172" x2="396" y2="172" class="ln"/>
      <line x1="140" y1="232" x2="396" y2="232" class="ln"/>
      <line x1="140" y1="202" x2="396" y2="202" class="ln-thin dash"/>
      <text x="170" y="224" class="tx" text-anchor="middle">🚲</text>
      <text x="277" y="224" class="tx" text-anchor="middle">🚲</text>
      <path d="M294,218 H318" class="ln-thin" marker-end="url(#a-k4te-wo-1)"/>
      <path d="M186,218 C220,218 228,192 277,192 C322,192 334,218 380,218" class="ln s1" marker-end="url(#a-k4te-wo-1)"/>
    </svg>`,
    text: `<ul>
        <li><b>Wymijanie</b> – przejeżdżasz obok kogoś, kto jedzie <b>z przeciwka</b>. Zachowaj bezpieczny odstęp, w razie potrzeby zjedź w prawo i zwolnij.</li>
        <li><b>Omijanie</b> – przejeżdżasz obok czegoś, co <b>stoi</b>: pojazdu albo przeszkody. Zachowaj bezpieczny odstęp.</li>
        <li><b>Wyprzedzanie</b> – przejeżdżasz obok kogoś, kto jedzie <b>w tę samą stronę</b>. Wyprzedzasz <b>z lewej</b>. Kogoś, kto pokazuje skręt w lewo – z prawej. Rower może wyprzedzić z prawej powoli jadący samochód, ale nie inny rower.</li>
      </ul>
      <p>Przed wyprzedzaniem sprawdź, czy dobrze widzisz drogę i masz dość miejsca. <b>Nie wyprzedzaj na przejściu dla pieszych i przejeździe dla rowerów ani tuż przed nimi.</b> Kierowca wyprzedzający rower musi zachować co najmniej <b>1 m</b> odstępu.</p>`,
    remember: 'Wymijasz – z przeciwka. Omijasz – coś stoi. Wyprzedzasz – w tę samą stronę, z lewej.',
    hook: '<b>Wymijasz</b> się z kimś, jak z kolegą na korytarzu – idzie naprzeciwko. <b>Omijasz</b> to, co stoi, jak kałużę. <b>Wyprzedzasz</b> – jesteś przed kimś, kto jechał przed tobą.',
    check: { q: 'Przejeżdżasz obok dziury w jezdni. Jak nazywa się ten manewr?', options: ['omijanie', 'wymijanie', 'wyprzedzanie'], answer: 0, explain: 'Przejeżdżanie obok przeszkody (albo pojazdu, który stoi) to omijanie.' },
  },
  {
    title: 'Skrzyżowanie bez znaków – zasada prawej ręki',
    svg: `<svg viewBox="0 0 300 250" role="img" aria-label="Skrzyżowanie równorzędne – bez znaków i świateł. Rower A nadjeżdża z dołu i jedzie prosto. Samochód B nadjeżdża z prawej strony roweru A. Rower A czeka, B jedzie pierwszy.">
      <defs><marker id="a-k4te-pr-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M0,85 H120 V0 M180,0 V85 H300 M0,145 H120 V230 M180,230 V145 H300" class="ln"/>
      <path d="M0,115 H120 M180,115 H300 M150,0 V85 M150,145 V230" class="ln-thin dash"/>
      <rect x="154" y="160" width="22" height="34" rx="4" class="f1 s1 sw"/>
      <text x="165" y="183" class="tx-b" text-anchor="middle">A</text>
      <path d="M165,156 V22" class="ln-thin dash" marker-end="url(#a-k4te-pr-1)"/>
      <rect x="200" y="89" width="34" height="22" rx="4" class="f2 s2 sw"/>
      <text x="217" y="106" class="tx-b" text-anchor="middle">B</text>
      <path d="M196,100 H22" class="ln s2 sw" marker-end="url(#a-k4te-pr-1)"/>
      <text x="240" y="70" class="tx-b t2" text-anchor="middle">1.</text>
      <text x="205" y="200" class="tx-b t1" text-anchor="middle">2.</text>
      <text x="150" y="246" class="tx-s" text-anchor="middle">B jest z prawej strony A – A czeka</text>
    </svg>`,
    text: `<p>Na skrzyżowaniu sprawdzasz po kolei: <b>1) polecenia policjanta</b>, <b>2) sygnalizację świetlną</b>, <b>3) znaki</b>. Gdy nie ma ani świateł, ani znaków, skrzyżowanie jest <b>równorzędne</b> i działa <b>zasada prawej ręki</b>:</p>
      <ul>
        <li>ustępujesz pierwszeństwa pojazdowi <b>z prawej strony</b>,</li>
        <li>gdy skręcasz w lewo – przepuszczasz też jadących <b>z przeciwka</b> na wprost i w prawo,</li>
        <li><b>tramwaj</b> ma pierwszeństwo, z której strony by nie jechał.</li>
      </ul>
      <p>Przed takim skrzyżowaniem może stać znak <b>A-5 „skrzyżowanie dróg”</b>.</p>`,
    remember: 'Bez świateł i znaków: ustąp temu, kto jest z twojej prawej strony.',
    hook: 'Wyciągnij prawą rękę – kto nadjeżdża od strony tej ręki, jedzie pierwszy.',
    check: { q: 'Skrzyżowanie bez znaków i świateł. Ty jedziesz prosto, a z twojej lewej strony nadjeżdża samochód, który też jedzie prosto. Kto jedzie pierwszy?', options: ['ty', 'samochód', 'oba naraz'], answer: 0, explain: 'Samochód nadjeżdża z twojej lewej strony, czyli ty jesteś z jego prawej. Według zasady prawej ręki to on ustępuje tobie. (Uważaj jednak – upewnij się, że kierowca cię widzi.)' },
  },
  {
    title: 'Znaki i światła mówią, kto jedzie',
    svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Znaki pierwszeństwa: D-1 droga z pierwszeństwem – kwadrat na rogu, jedziesz pierwszy; A-7 ustąp pierwszeństwa – trójkąt wierzchołkiem w dół; B-20 stop – ośmiokąt, zatrzymaj się i ustąp; rondo – znaki C-12 i A-7, pierwszeństwo ma ten, kto jest na rondzie. Światła: czerwone – stój, żółte – zatrzymaj się, zielone – jedź, jeśli jest miejsce.">
      <rect x="6" y="6" width="190" height="72" rx="12" class="f3 s3"/>
      <rect x="204" y="6" width="190" height="72" rx="12" class="f2 s2"/>
      <rect x="6" y="86" width="190" height="72" rx="12" class="f2 s2"/>
      <rect x="204" y="86" width="190" height="72" rx="12" class="f1 s1"/>
      <path d="M38,22 L56,40 L38,58 L20,40 Z" class="f4 s4 sw"/>
      <path d="M220,26 L260,26 L240,58 Z" class="f4 s2 sw"/>
      <path d="M30.6,101.7 L47.4,101.7 L59.3,113.6 L59.3,130.4 L47.4,142.3 L30.6,142.3 L18.7,130.4 L18.7,113.6 Z" class="f2 s2 sw"/>
      <text x="39" y="127" class="tx-s" text-anchor="middle">STOP</text>
      <circle cx="240" cy="122" r="18" class="f1 s1 sw"/>
      <text x="240" y="128" class="tx" text-anchor="middle">🔄</text>
      <text x="70" y="36" class="tx-b">D-1</text>
      <text x="70" y="58" class="tx-s">jedziesz pierwszy</text>
      <text x="270" y="36" class="tx-b">A-7</text>
      <text x="270" y="58" class="tx-s">ustąp innym</text>
      <text x="70" y="116" class="tx-b">B-20</text>
      <text x="70" y="138" class="tx-s">stań i ustąp</text>
      <text x="270" y="116" class="tx-b">rondo</text>
      <text x="270" y="138" class="tx-s">ma ten na rondzie</text>
      <rect x="6" y="168" width="388" height="76" rx="12" class="bg ln"/>
      <circle cx="60" cy="196" r="13" class="fl-r"/>
      <circle cx="190" cy="196" r="13" class="f4 s4 sw"/>
      <circle cx="320" cy="196" r="13" class="fl-g"/>
      <text x="60" y="232" class="tx-s" text-anchor="middle">stój</text>
      <text x="190" y="232" class="tx-s" text-anchor="middle">zatrzymaj się</text>
      <text x="320" y="232" class="tx-s" text-anchor="middle">jedź, jeśli jest miejsce</text>
    </svg>`,
    text: `<ul>
        <li><b>D-1</b> „droga z pierwszeństwem” (kwadrat ustawiony na rogu) – jedziesz drogą z pierwszeństwem.</li>
        <li><b>A-7</b> „ustąp pierwszeństwa” (trójkąt wierzchołkiem w dół) – przepuść jadących drogą z pierwszeństwem.</li>
        <li><b>B-20</b> „stop” (ośmiokąt) – <b>zatrzymaj się</b> i ustąp jadącym drogą z pierwszeństwem.</li>
        <li><b>Rondo</b> (C-12 „ruch okrężny” razem z A-7) – pierwszeństwo ma ten, kto <b>już jest na rondzie</b>.</li>
      </ul>
      <p><b>Światła</b> są ważniejsze niż znaki. Żółte – zatrzymaj się (chyba że jesteś tak blisko, że musiałbyś gwałtownie hamować). Czerwone i żółte razem – nadal stój. Zielona strzałka przy czerwonym – najpierw się zatrzymaj, potem możesz skręcić w stronę strzałki. Nawet przy zielonym nie wjeżdżaj, jeśli za skrzyżowaniem nie ma miejsca.</p>`,
    remember: 'Policjant → światła → znaki → prawa ręka. B-20 – zawsze się zatrzymaj.',
    hook: 'Trójkąt A-7 stoi „na głowie” – i ty schylasz głowę: <b>ustępujesz</b>. STOP – jak w zabawie „raz, dwa, trzy, Baba Jaga patrzy”: stajesz w miejscu.',
    check: { q: 'Świeci się czerwone światło i zielona strzałka w prawo. Chcesz skręcić w prawo. Co robisz?', options: ['zatrzymuję się, potem ostrożnie skręcam', 'skręcam od razu, bez zatrzymania', 'czekam, aż strzałka zgaśnie'], answer: 0, explain: 'Strzałka pozwala skręcić, ale dopiero po zatrzymaniu się przed sygnalizatorem i bez utrudniania ruchu innym.' },
  },
];
