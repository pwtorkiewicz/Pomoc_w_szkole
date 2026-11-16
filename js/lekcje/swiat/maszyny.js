/* Lekcje – 🌍 Świat, maszyny i konstrukcje. Klucze: 'maszyny/mechanizmy', 'maszyny/mosty'. Format: docs/LEKCJE.md
 * Treści oparte na dziale z js/dane/swiat/maszyny.js (ścieżka poza podstawą, źródła w polu basis). */
window.LESSONS = window.LESSONS || {};

window.LESSONS['maszyny/mechanizmy'] = [
  {
    title: 'Technika w angielskiej szkole',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Flaga Anglii i napis: design and technology, dzieci od 7 do 11 lat. Cztery mechanizmy: dźwignia, krążek, koła zębate, krzywka">
      <rect x="10" y="10" width="60" height="40" class="fl-w"/>
      <rect x="36" y="10" width="8" height="40" class="fl-r"/>
      <rect x="10" y="26" width="60" height="8" class="fl-r"/>
      <rect x="10" y="10" width="60" height="40" class="ln" fill="none"/>
      <text x="84" y="30" class="tx-b">design and technology</text>
      <text x="84" y="48" class="tx-s">Anglia · dzieci w wieku 7–11 lat</text>
      <rect x="10" y="66" width="185" height="62" rx="12" class="f1 s1"/>
      <rect x="205" y="66" width="185" height="62" rx="12" class="f3 s3"/>
      <rect x="10" y="138" width="185" height="62" rx="12" class="f5 s5"/>
      <rect x="205" y="138" width="185" height="62" rx="12" class="f2 s2"/>
      <g class="tx-b"><text x="22" y="104">🪨 dźwignia</text><text x="217" y="104">🪣 krążek</text><text x="22" y="176">⚙️ koła zębate</text><text x="217" y="176">🥚 krzywka</text></g>
    </svg>`,
    text: `<p>W Anglii dzieci w wieku 7–11 lat mają przedmiot <b>design and technology</b> – „projektowanie i technika”. Projektują i budują np. zabawki, które się ruszają.</p>
      <p>Poznają przy tym <b>mechanizmy</b> – części maszyn, które zmieniają ruch albo siłę. Poznasz je i ty!</p>`,
    remember: 'Mechanizm to część maszyny, która zmienia ruch albo siłę.',
    hook: 'Mechanizm to „sprytny pomocnik”: robi tak, żeby praca była łatwiejsza.',
  },
  {
    title: 'Dźwignia – długie ramię pomaga',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dźwignia: długi drąg leży na trójkątnym punkcie podparcia. Po lewej, blisko punktu podparcia, ciężki kamień – krótkie ramię. Po prawej, daleko, ręka naciska w dół małą siłą – długie ramię">
      <defs><marker id="a-swm-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M20,150 H390" class="ln-thin"/>
      <path d="M110,148 L95,150 L125,150 z" class="ln"/>
      <path d="M96,150 L110,120 L124,150 z" class="f4 s4 sw"/>
      <rect x="20" y="104" width="370" height="12" rx="4" transform="rotate(-4 110 110)" class="f2 s2"/>
      <ellipse cx="50" cy="88" rx="34" ry="22" class="f1 s1 sw"/>
      <text x="50" y="94" class="tx-s" text-anchor="middle">kamień</text>
      <path d="M370,40 L370,82" class="ln sw" marker-end="url(#a-swm-2)"/>
      <text x="300" y="34" class="tx-s">mała siła</text>
      <g class="ln-thin"><path d="M50,170 H108"/><path d="M112,170 H370"/></g>
      <g class="tx-s" text-anchor="middle"><text x="80" y="190">krótkie ramię</text><text x="240" y="190">długie ramię</text></g>
      <text x="134" y="140" class="tx-s">punkt podparcia</text>
    </svg>`,
    text: `<p><b>Dźwignia</b> to sztywny drąg, który obraca się wokół <b>punktu podparcia</b>. Odległość od punktu podparcia do miejsca, gdzie działa siła, to <b>ramię</b>.</p>
      <p>Naciskaj daleko od punktu podparcia – wtedy <b>mała siła</b> podniesie <b>duży ciężar</b>. Coś za coś: koniec drąga przesuwasz na dłuższej drodze.</p>`,
    remember: 'Im dłuższe ramię, tym mniejsza siła.',
    hook: 'Huśtawka-ważka: mały brat podniesie tatę, jeśli usiądzie bardzo daleko, a tata – blisko środka.',
    check: { q: 'Gdzie nacisnąć drąg, żeby podnieść kamień jak najmniejszą siłą?', options: ['daleko od punktu podparcia', 'blisko punktu podparcia'], answer: 0, explain: 'Im dłuższe ramię, tym mniejszej siły potrzebujesz.' },
  },
  {
    title: 'Krążek – ciągniesz w dół, wiadro jedzie w górę',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Krążek przymocowany pod belką. Przez krążek przechodzi lina. Z jednej strony wisi wiadro i jedzie w górę, z drugiej ręka ciągnie linę w dół. Siła jest taka sama, zmienia się tylko kierunek">
      <defs><marker id="a-swm-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="90" y="10" width="220" height="14" class="f4 s4"/>
      <path d="M200,24 V50" class="ln sw"/>
      <circle cx="200" cy="66" r="30" class="f1 s1 sw"/>
      <circle cx="200" cy="66" r="4" class="ln"/>
      <path d="M170,66 V150 M230,66 V170" class="ln sw" fill="none"/>
      <path d="M150,150 H190 L184,196 H156 z" class="f3 s3 sw"/>
      <text x="170" y="180" class="tx-s" text-anchor="middle">wiadro</text>
      <path d="M120,190 V130" class="ln sw" marker-end="url(#a-swm-3)"/>
      <path d="M270,120 V180" class="ln sw" marker-end="url(#a-swm-3)"/>
      <text x="236" y="198" class="tx-b">✋</text>
      <g class="tx-s"><text x="20" y="160">jedzie</text><text x="20" y="176">w górę</text><text x="282" y="140">ciągniesz</text><text x="282" y="156">w dół</text></g>
      <text x="250" y="66" class="tx-s">krążek</text>
    </svg>`,
    text: `<p><b>Krążek</b> (blok nieruchomy) to koło na osi, przez które przechodzi lina. Ciągniesz linę <b>w dół</b>, a wiadro jedzie <b>w górę</b>.</p>
      <p>Uwaga: krążek <b>nie zmniejsza siły</b> – ciągniesz tak samo mocno. Zmienia tylko <b>kierunek</b>. Ciągnąć w dół jest łatwiej, bo pomaga ci ciężar twojego ciała.</p>`,
    remember: 'Krążek: ta sama siła, inny kierunek.',
    hook: 'Krążek jest jak zakręt dla liny: lina skręca, ale nie robi się lżej.',
    check: { q: 'Czy krążek (blok nieruchomy) zmniejsza siłę, jaką ciągniesz linę?', options: ['nie – zmienia tylko kierunek', 'tak – o połowę'], answer: 0, explain: 'Blok nieruchomy nie zmienia wartości siły. Zmienia jej kierunek: ciągniesz w dół, a ładunek jedzie w górę.' },
  },
  {
    title: 'Koła zębate – w przeciwne strony',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Dwa zazębione koła zębate. Duże ma 20 zębów i kręci się w prawo, małe ma 10 zębów i kręci się w lewo. Gdy duże zrobi 1 obrót, małe zrobi 2 obroty">
      <defs><marker id="a-swm-4" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M172.0,105.0 L181.9,108.9 L181.2,114.7 L170.7,116.3 L169.5,121.1 L177.6,127.8 L175.2,133.1 L164.8,131.5 L162.1,135.6 L167.8,144.5 L163.8,148.8 L154.4,144.0 L150.6,147.1 L153.2,157.3 L148.1,160.2 L140.7,152.7 L136.1,154.5 L135.4,165.1 L129.7,166.2 L124.9,156.8 L120.0,157.0 L116.1,166.9 L110.3,166.2 L108.7,155.7 L103.9,154.5 L97.2,162.6 L91.9,160.2 L93.5,149.8 L89.4,147.1 L80.5,152.8 L76.2,148.8 L81.0,139.4 L77.9,135.6 L67.7,138.2 L64.8,133.1 L72.3,125.7 L70.5,121.1 L59.9,120.4 L58.8,114.7 L68.2,109.9 L68.0,105.0 L58.1,101.1 L58.8,95.3 L69.3,93.7 L70.5,88.9 L62.4,82.2 L64.8,76.9 L75.2,78.5 L77.9,74.4 L72.2,65.5 L76.2,61.2 L85.6,66.0 L89.4,62.9 L86.8,52.7 L91.9,49.8 L99.3,57.3 L103.9,55.5 L104.6,44.9 L110.3,43.8 L115.1,53.2 L120.0,53.0 L123.9,43.1 L129.7,43.8 L131.3,54.3 L136.1,55.5 L142.8,47.4 L148.1,49.8 L146.5,60.2 L150.6,62.9 L159.5,57.2 L163.8,61.2 L159.0,70.6 L162.1,74.4 L172.3,71.8 L175.2,76.9 L167.7,84.3 L169.5,88.9 L180.1,89.6 L181.2,95.3 L171.8,100.1 z" class="f1 s1 sw"/>
      <path d="M182.4,100.5 L173.7,94.5 L176.2,88.6 L186.6,90.9 L189.6,87.5 L186.0,77.5 L191.5,74.2 L198.6,82.2 L203.0,81.2 L206.0,71.0 L212.4,71.6 L213.4,82.2 L217.6,84.0 L226.0,77.5 L230.8,81.7 L225.4,90.9 L227.7,94.8 L238.3,94.5 L239.7,100.7 L230.0,105.0 L229.6,109.5 L238.3,115.5 L235.8,121.4 L225.4,119.1 L222.4,122.5 L226.0,132.5 L220.5,135.8 L213.4,127.8 L209.0,128.8 L206.0,139.0 L199.6,138.4 L198.6,127.8 L194.4,126.0 L186.0,132.5 L181.2,128.3 L186.6,119.1 L184.3,115.2 L173.7,115.5 L172.3,109.3 L182.0,105.0 z" class="f2 s2 sw"/>
      <circle cx="120" cy="105" r="6" class="bg ln"/>
      <circle cx="206" cy="105" r="5" class="bg ln"/>
      <path d="M78,30 A70,70 0 0 1 162,30" class="ln sw" fill="none" marker-end="url(#a-swm-4)"/>
      <path d="M240,60 A44,44 0 0 0 194,58" class="ln sw" fill="none" marker-end="url(#a-swm-4)"/>
      <g class="tx-b"><text x="170" y="24">w prawo</text><text x="250" y="56">w lewo</text></g>
      <g class="tx-s" text-anchor="middle"><text x="120" y="190">20 zębów</text><text x="230" y="160">10 zębów</text></g>
      <rect x="260" y="180" width="134" height="44" rx="10" class="f4 s4"/>
      <text x="327" y="199" class="tx-s" text-anchor="middle">duże: 1 obrót</text>
      <text x="327" y="217" class="tx-s" text-anchor="middle">małe: 2 obroty</text>
    </svg>`,
    text: `<p>Zęby jednego koła wchodzą między zęby drugiego. Duże koło popycha małe – dlatego <b>kręcą się w przeciwne strony</b>.</p>
      <p>Przy jednym obrocie dużego koła przesuwa się 20 zębów. Małe ma tylko 10 zębów, więc w tym czasie zrobi <b>2 obroty</b> (20 : 10 = 2). Małe koło kręci się szybciej, a duże – wolniej, ale z większą siłą.</p>`,
    remember: 'Zazębione koła kręcą się w przeciwne strony. Małe kręci się szybciej.',
    hook: 'Małe kółko musi „przebierać nóżkami”, żeby nadążyć za dużym.',
    check: { q: 'Duże koło ma 30 zębów, małe – 10. Duże robi 1 obrót. Ile obrotów zrobi małe?', options: ['3', '1', '10', '30'], answer: 0, explain: 'Przesuwa się 30 zębów, a małe koło ma 10: 30 : 10 = 3 obroty.' },
  },
  {
    title: 'Krzywka – z obrotu w górę i w dół',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Krzywka w kształcie jajka na wałku. Na krzywce leży pionowy pręt – popychacz. Gdy krzywka się obraca, popychacz unosi się i opada">
      <defs><marker id="a-swm-5" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <path d="M150,150 C150,110 172,70 200,70 C228,70 250,110 250,150 C250,182 228,196 200,196 C172,196 150,182 150,150 z" class="f2 s2 sw"/>
      <circle cx="200" cy="160" r="7" class="bg ln sw"/>
      <rect x="190" y="20" width="20" height="50" rx="4" class="f1 s1 sw"/>
      <rect x="170" y="8" width="60" height="12" rx="4" class="f1 s1 sw"/>
      <path d="M290,180 A40,40 0 1 0 270,124" class="ln sw" fill="none" marker-end="url(#a-swm-5)"/>
      <path d="M100,64 V18" class="ln sw" marker-end="url(#a-swm-5)"/>
      <path d="M100,28 V74" class="ln sw" marker-end="url(#a-swm-5)"/>
      <g class="tx-s"><text x="226" y="46">popychacz</text><text x="34" y="100">w górę i w dół</text><text x="300" y="212">obrót</text><text x="214" y="214">wałek</text></g>
      <text x="200" y="130" class="tx-s" text-anchor="middle">krzywka</text>
    </svg>`,
    text: `<p><b>Krzywka</b> to koło o nieokrągłym kształcie – np. jak jajko – na obracającym się <b>wałku</b>. Leży na niej pręt, czyli <b>popychacz</b>.</p>
      <p>Gdy krzywka się obraca, jej „czubek” raz podnosi popychacz, a raz pozwala mu opaść. Tak <b>ruch obrotowy</b> zmienia się w <b>ruch w górę i w dół</b> – i powtarza się przy każdym obrocie.</p>`,
    remember: 'Krzywka zamienia obrót w ruch w górę i w dół.',
    hook: 'Krzywka to „podskakiwacz”: kręcisz korbką, a figurka na górze podskakuje.',
  },
];

window.LESSONS['maszyny/mosty'] = [
  {
    title: '🇵🇱 Przypomnienie: trójkąt z trzech odcinków',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Przypomnienie z matematyki: warunek trójkąta. Z odcinków 6, 4 i 3 cm powstaje trójkąt, bo 3 + 4 = 7, a 7 jest więcej niż 6. Z odcinków 7, 2 i 3 cm trójkąta nie ma – końce się nie spotykają, bo 2 + 3 = 5, a to mniej niż 7">
      <text x="200" y="24" text-anchor="middle" class="tx">Dwa krótsze razem dłuższe od trzeciego?</text>
      <path d="M25,150 L175,150 L114.6,105.6 Z" class="f3 s3 sw"/>
      <g class="s2 sw" fill="none"><path d="M215,150 H390"/><path d="M215,150 L240,106.7"/><path d="M390,150 L352.5,85"/></g>
      <g class="tx-s"><text x="100" y="170" text-anchor="middle">6 cm</text><text x="58" y="117" text-anchor="end">4 cm</text><text x="150" y="117">3 cm</text>
        <text x="302" y="170" text-anchor="middle">7 cm</text><text x="236" y="138">2 cm</text><text x="363" y="125" text-anchor="end">3 cm</text></g>
      <g class="tx" text-anchor="middle"><text x="100" y="196">3 + 4 = 7 &gt; 6 ✅</text><text x="302" y="196">2 + 3 = 5 &lt; 7 ❌</text></g>
    </svg>`,
    text: `<p>To znasz z <b>matematyki w klasach 4–6</b>: z trzech odcinków zbudujesz trójkąt tylko wtedy, gdy <b>dwa krótsze razem są dłuższe od trzeciego</b> – to warunek trójkąta.</p>
      <p>W Bawarii dzieci w klasach 3–4 budują modele <b>mostów</b> i sprawdzają, czy są stabilne. Program Anglii każe robić konstrukcje <b>sztywniejsze</b> i stabilniejsze, a trójkąty i mosty pokazują w tym lekcje Oak i BBC. Polska podstawa programowa tego nie wymaga – poznasz to tutaj.</p>`,
    remember: 'Warunek trójkąta: dwa krótsze odcinki razem dłuższe od trzeciego.',
    check: { q: 'Czy z odcinków 2 cm, 3 cm i 4 cm zbudujesz trójkąt?', options: ['tak', 'nie'], answer: 0, explain: '2 + 3 = 5, a 5 > 4 – końce odcinków się spotkają.', sayExplain: '2 dodać 3 to 5, a 5 jest większe od 4 – końce odcinków się spotkają.' },
  },
  {
    title: '🌍 Pchnij ramkę: trójkąt kontra kwadrat',
    widget: { type: 'rama', tryb: 'ramka' },
    text: `<p>Wybierz ramkę, <b>najpierw przewidź</b>, a potem pchnij róg. W rogach są zawiasy – listewki mogą się obracać.</p>
      <p>Kwadrat przekrzywia się w romb: boki te same, kąty inne. Trójkąt nie drgnie – <b>trzy boki wyznaczają jego kształt</b>. Bawarski program podaje jako przykład usztywnienia <b>połączenia trójkątne</b>, a program Anglii każe od pierwszych klas sprawdzać, jak zrobić konstrukcję sztywniejszą.</p>`,
    remember: 'Trójkąt trzyma kształt. Kwadrat usztywnisz przekątną – powstaną dwa trójkąty.',
    hook: 'Trzy patyki – jeden trójkąt. Cztery patyki – kwadrat, romb, jeszcze bardziej krzywy romb…',
    check: { q: 'Którą ramkę z listewek na zawiasach da się przekrzywić?', options: ['kwadrat', 'trójkąt'], answer: 0, explain: 'Kwadrat przekrzywia się w romb. Trzy boki wyznaczają kształt trójkąta – trójkąt jest sztywny.' },
  },
  {
    title: '🌍 Zbuduj kratownicę',
    widget: { type: 'rama', tryb: 'kratownica' },
    text: `<p><b>Kratownica</b> to konstrukcja z prętów, które tworzą <b>układ trójkątów</b>; pręty łączą się w <b>węzłach</b>. Kratownice stosuje się m.in. w mostach.</p>
      <p>Klikaj pręty, żeby je dodać albo zabrać. Przewidź, czy most trzyma kształt – i sprawdź. Ile <b>najmniej</b> prętów wystarczy? W Bawarii przy ocenie modelu liczy się też <b>oszczędność materiału</b>.</p>
      <p>Ukośny pręt, który z ramą tworzy trójkąt, to <b>zastrzał</b>. W niemieckojęzycznej części Szwajcarii dzieci w klasach 3–6 poznają elementy stabilizujące, np. podporę, odciąg, zastrzał i profil.</p>`,
    remember: 'Pole z czterech prętów potrzebuje przekątnej – czyli trójkątów.',
    hook: 'Widzisz w moście same trójkąty? To kratownica – „szkielet z trójkątów”.',
    check: { q: 'Mostek z trzech kwadratowych pól się przekrzywia. Co dodać?', options: ['po przekątnej w każdym polu', 'jeszcze jeden pręt na dole'], answer: 0, explain: 'Przekątna dzieli każde pole na dwa trójkąty – most trzyma kształt. 10 prętów + 3 przekątne = 13.' },
  },
  {
    title: '🌍 Mocna kartka',
    svg: `<svg viewBox="0 0 400 272" role="img" aria-label="Z boku: płaska kartka na dwóch stosach książek ugina się, kartka złożona w harmonijkę trzyma się prosto. Widok z góry: zagięcia harmonijki biegną od jednej podpory do drugiej. Na dole cztery przekroje profili z kartki: kątownik, harmonijka, litera U, rurka">
      <rect x="10" y="60" width="30" height="40" class="f2 s2"/><rect x="160" y="60" width="30" height="40" class="f2 s2"/>
      <path d="M40,60 Q100,100 160,60" class="ln sw" fill="none"/>
      <rect x="210" y="60" width="30" height="40" class="f2 s2"/><rect x="360" y="60" width="30" height="40" class="f2 s2"/>
      <rect x="240" y="52" width="120" height="8" class="f3 s3"/>
      <g class="tx" text-anchor="middle"><text x="100" y="30">płaska – ugina się</text><text x="300" y="30">harmonijka – trzyma</text></g>
      <rect x="60" y="122" width="280" height="36" class="f3 s3"/>
      <g class="ln-thin"><path d="M60,131 H340 M60,140 H340 M60,149 H340"/></g>
      <rect x="40" y="118" width="20" height="44" class="f2 s2"/><rect x="340" y="118" width="20" height="44" class="f2 s2"/>
      <text x="200" y="180" text-anchor="middle" class="tx-s">widok z góry: zagięcia od podpory do podpory</text>
      <g class="s3 sw" fill="none"><path d="M30,200 V235 H65"/><path d="M120,235 L130,203 L140,235 L150,203 L160,235 L170,203 L180,235"/><path d="M230,200 V235 H270 V200"/><circle cx="350" cy="218" r="17"/></g>
      <g class="tx-s" text-anchor="middle"><text x="50" y="262">kątownik</text><text x="150" y="262">harmonijka</text><text x="250" y="262">litera U</text><text x="350" y="262">rurka</text></g>
    </svg>`,
    text: `<p>Płaska kartka łatwo się ugina, a <b>zagięta</b> jest dużo sztywniejsza – papieru jest tyle samo, zmienia się <b>kształt</b>. Bawaria podaje <b>profile</b>: kątownik, harmonijkę, literę U i rurkę.</p>
      <p>Zaginaj przy linijce, a zagięcia prowadź <b>wzdłuż mostu</b> – od podpory do podpory. Most z prętów to <b>szkielet</b> – części połączone ze sobą. Pudełko to <b>skorupa</b> – cienka, pusta w środku powłoka; wzmocnisz je od środka albo od zewnątrz (lekcje Oak).</p>`,
    remember: 'Zagięta kartka jest sztywniejsza niż płaska – liczy się kształt.',
    hook: 'Tektura falista to kanapka: w środku ma wiele małych łuków.',
    check: { q: 'Dwie takie same kartki: płaska i złożona w harmonijkę. Która utrzyma więcej?', options: ['harmonijka', 'płaska'], answer: 0, explain: 'Papieru jest tyle samo, ale zagięcia usztywniają kartkę – harmonijka utrzyma więcej.' },
  },
  {
    title: '🌍 Cztery mosty – i most Leonarda',
    svg: `<svg viewBox="0 0 400 390" role="img" aria-label="Cztery mosty. Belkowy: belka leży na dwóch podporach. Łukowy: pomost nad ściskanym łukiem. Kratownicowy: pręty w trójkątach. Wiszący: pomost wisi na linach zawieszonych na dwóch wieżach. Na dole uproszczony rysunek mostu Leonarda: listewki przełożone jedna przez drugą tworzą łuk nad rzeką, bez kleju i gwoździ. Rysunek pokazuje kształt łuku, nie jest instrukcją budowy">
      <g class="f1 s1"><rect x="10" y="10" width="185" height="110" rx="12"/><rect x="205" y="10" width="185" height="110" rx="12"/><rect x="10" y="130" width="185" height="110" rx="12"/><rect x="205" y="130" width="185" height="110" rx="12"/></g>
      <g class="tx-b"><text x="22" y="36">belkowy</text><text x="217" y="36">łukowy</text><text x="22" y="156">kratownicowy</text><text x="217" y="156">wiszący</text></g>
      <rect x="25" y="62" width="155" height="10" class="f2 s2"/>
      <rect x="45" y="72" width="12" height="36" class="f4 s4"/><rect x="148" y="72" width="12" height="36" class="f4 s4"/>
      <rect x="220" y="55" width="155" height="9" class="f2 s2"/>
      <path d="M222,112 Q297,20 373,112" class="ln sw" fill="none"/>
      <g class="ln" fill="none"><path d="M30,230 H180 M55,190 H155 M30,230 L55,190 L80,230 L105,190 L130,230 L155,190 L180,230"/></g>
      <rect x="240" y="165" width="8" height="70" class="f4 s4"/><rect x="352" y="165" width="8" height="70" class="f4 s4"/>
      <rect x="215" y="212" width="170" height="8" class="f2 s2"/>
      <g class="ln" fill="none"><path d="M215,197 L244,165 Q300,213 356,165 L385,197"/><path d="M270,182 V212 M300,189 V212 M330,182 V212"/></g>
      <rect x="10" y="250" width="380" height="130" rx="12" class="f5 s5"/>
      <text x="22" y="276" class="tx-b">most Leonarda</text><text x="378" y="276" text-anchor="end" class="tx-s">kształt łuku – nie instrukcja</text>
      <rect x="95" y="364" width="210" height="10" class="f1 s1"/>
      <path d="M22,366 H95 M305,366 H378" class="ln-thin"/>
      <g class="f4 s4 sw"><path d="M50,366 L145,318"/><path d="M115,330 L235,304"/><path d="M165,304 L285,330"/><path d="M255,318 L350,366"/></g>
      <text x="200" y="356" text-anchor="middle" class="tx-s">rzeka</text>
    </svg>`,
    text: `<ul><li><b>belkowy</b> – belki leżą poziomo na podporach,</li>
      <li><b>łukowy</b> – ciężar przejmuje <b>ściskany łuk</b> i przenosi go na podpory na brzegach,</li>
      <li><b>kratownicowy</b> – ciężar niesie kratownica z trójkątów,</li>
      <li><b>wiszący</b> – pomost wisi na <b>rozciąganych linach</b> zawieszonych na wysokich wieżach.</li></ul>
      <p><b>Most Leonarda</b> (od szkicu Leonarda da Vinci) to odmiana mostu łukowego: listewki są tak przełożone, że <b>same się podtrzymują</b> – bez kleju i gwoździ. Jak to zrobiły dzieci w Bawarii, pokażą ci zdjęcia w zadaniu ISB (🔗 Materiały – razem z dorosłym). Mosty bywają też nad drogami i torami (<b>wiadukt</b>), a <b>akwedukt</b> przenosi łodzie!</p>`,
    remember: 'Belka, łuk, kratownica, liny – cztery sposoby na most.',
    hook: 'Most wiszący jest jak hamak: wisi na linach.',
    check: { q: 'W którym moście pomost wisi na linach?', options: ['w wiszącym', 'w belkowym', 'w łukowym'], answer: 0, explain: 'W moście wiszącym pomost wisi na mocnych linach zawieszonych na wysokich wieżach.' },
  },
  {
    title: '🔬 Pracuj jak inżynier z Bawarii',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Po lewej: most z kartki na dwóch stosach książek, na środku stos jednakowych klocków – testuj w trakcie: 1, potem 3, potem 5 klocków. Po prawej trzy bawarskie kryteria oceny: cel, oszczędność materiału, oryginalność. Na dole: opisz mosty w swojej okolicy">
      <text x="20" y="30" class="tx-b">🔁 testuj w trakcie</text>
      <rect x="20" y="110" width="40" height="40" class="f2 s2"/><rect x="150" y="110" width="40" height="40" class="f2 s2"/>
      <rect x="40" y="102" width="130" height="8" class="f3 s3"/>
      <g class="f4 s4"><rect x="95" y="84" width="20" height="18"/><rect x="95" y="66" width="20" height="18"/><rect x="95" y="48" width="20" height="18"/></g>
      <path d="M10,150 H200" class="ln-thin"/>
      <text x="105" y="172" text-anchor="middle" class="tx-s">jednakowe klocki: 1 → 3 → 5</text>
      <rect x="215" y="12" width="175" height="50" rx="10" class="f4 s4"/><rect x="215" y="72" width="175" height="50" rx="10" class="f3 s3"/><rect x="215" y="132" width="175" height="50" rx="10" class="f5 s5"/>
      <g class="tx"><text x="227" y="43">🎯 cel</text><text x="227" y="103">🪵 mniej materiału</text><text x="227" y="163">💡 oryginalność</text></g>
      <text x="20" y="208" class="tx">📍 opisz mosty w swojej okolicy</text>
    </svg>`,
    text: `<p>W przykładowym zadaniu bawarskiego instytutu ISB dzieci sprawdzają, ile utrzyma model, kładąc <b>coraz więcej klocków</b>. Próby i poprawki znasz z zajęć technicznych. Lekcje z Anglii (Oak) radzą: testuj <b>w trakcie budowy</b>, nie tylko na końcu, i używaj <b>jednakowych klocków</b> – wtedy test jest uczciwy.</p>
      <p>Bawarskie dzieci rysują swój model, piszą instrukcję i oceniają go według trzech kryteriów: <b>cel, oszczędność materiału, oryginalność</b>. Opisują też <b>mosty w swojej okolicy</b>. Spróbuj – projekt „Most przez rzekę” czeka w zakładce <b>🛠️ Zrób</b>!</p>`,
    remember: 'Testuj w trakcie, jednakowymi klockami. Oceń: cel, oszczędność materiału, oryginalność.',
    hook: 'Zawalił się? To nie porażka, tylko dane do poprawki – cofnij się o krok.',
    check: { q: 'Jak uczciwie porównać, ile klocków utrzymają dwa mosty?', options: ['te same klocki, po jednym na środek', 'na jeden most duże, na drugi małe'], answer: 0, explain: 'Zmieniasz tylko most – klocki i sposób kładzenia zostają te same.' },
  },
];
