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
    title: 'Mosty w bawarskiej szkole',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Bawaria w Niemczech: klasy 3–4, przedmiot HSU. Anglia: dzieci 7–11 lat. Pod spodem model mostu z kartki złożonej w harmonijkę, położonej na dwóch książkach, z monetami na środku i pytaniem: czy wytrzyma?">
      <rect x="10" y="10" width="185" height="70" rx="12" class="f4 s4"/>
      <text x="22" y="40" class="tx-b">Bawaria (Niemcy)</text>
      <text x="22" y="64" class="tx">klasy 3–4 · HSU</text>
      <rect x="205" y="10" width="185" height="70" rx="12" class="f1 s1"/>
      <rect x="215" y="24" width="36" height="24" class="fl-w"/>
      <rect x="230" y="24" width="6" height="24" class="fl-r"/>
      <rect x="215" y="33" width="36" height="6" class="fl-r"/>
      <rect x="215" y="24" width="36" height="24" class="ln" fill="none"/>
      <text x="262" y="42" class="tx-b">Anglia</text>
      <text x="262" y="66" class="tx">7–11 lat</text>
      <text x="200" y="104" text-anchor="middle" class="tx-b">Czy wytrzyma?</text>
      <g class="f4 s4"><rect x="184" y="112" width="32" height="6" rx="3"/><rect x="184" y="118" width="32" height="6" rx="3"/><rect x="184" y="124" width="32" height="6" rx="3"/></g>
      <path d="M90,140 L100,130 L110,140 L120,130 L130,140 L140,130 L150,140 L160,130 L170,140 L180,130 L190,140 L200,130 L210,140 L220,130 L230,140 L240,130 L250,140 L260,130 L270,140 L280,130 L290,140 L300,130 L310,140" class="ln sw" fill="none"/>
      <rect x="40" y="140" width="50" height="40" class="f2 s2"/><rect x="310" y="140" width="50" height="40" class="f2 s2"/>
      <path d="M10,180 H390" class="ln-thin"/>
    </svg>`,
    text: `<p>W Bawarii (to jeden z krajów związkowych Niemiec) dzieci w klasach 3–4 mają przedmiot <b>HSU</b> – „wiedza o najbliższym otoczeniu i świecie”. <b>Budują modele mostów</b>, sprawdzają, czy są stabilne, i wyjaśniają dlaczego.</p>
      <p>W Anglii dzieci w wieku 7–11 lat uczą się, jak konstrukcje <b>wzmacniać i usztywniać</b>. Poznasz sztuczki inżynierów!</p>`,
    remember: 'Inżynier sprawdza, czy konstrukcja jest stabilna – i wyjaśnia dlaczego.',
  },
  {
    title: 'Kwadrat się przekrzywia, trójkąt – nie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Kwadrat z listewek na zawiasach po naciśnięciu przekrzywia się w romb – te same boki, inne kąty. Trójkąt z trzech listewek nie zmienia kształtu">
      <defs><marker id="a-swm-mo2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f4 s4 sw" fill="none"><path d="M20,40 H100 V120 H20 Z" fill="none"/><path d="M150,120 H230 L270,51 H190 Z" fill="none"/><path d="M300,120 H380 L340,51 Z" fill="none"/></g>
      <path d="M108,80 H140" class="ln sw" marker-end="url(#a-swm-mo2)"/>
      <g class="ln"><circle cx="20" cy="40" r="5" class="bg"/><circle cx="100" cy="40" r="5" class="bg"/><circle cx="100" cy="120" r="5" class="bg"/><circle cx="20" cy="120" r="5" class="bg"/>
        <circle cx="150" cy="120" r="5" class="bg"/><circle cx="230" cy="120" r="5" class="bg"/><circle cx="270" cy="51" r="5" class="bg"/><circle cx="190" cy="51" r="5" class="bg"/>
        <circle cx="300" cy="120" r="5" class="bg"/><circle cx="380" cy="120" r="5" class="bg"/><circle cx="340" cy="51" r="5" class="bg"/></g>
      <g class="tx" text-anchor="middle"><text x="145" y="152">kwadrat → romb</text><text x="145" y="176">te same boki</text><text x="340" y="152">trójkąt</text><text x="340" y="176">nie drgnie</text></g>
    </svg>`,
    text: `<p>Kwadrat z listewek połączonych na zawiasach łatwo <b>przekrzywić w romb</b>: boki są te same, zmieniają się kąty.</p>
      <p>Trójkąt z trzech listewek <b>się nie przekrzywi</b>. Z trzech boków o danych długościach da się złożyć <b>tylko jeden</b> trójkąt.</p>`,
    remember: 'Trójkąt jest sztywny – przy danych bokach ma tylko jeden kształt.',
    hook: 'Trzy patyki – jeden trójkąt. Cztery patyki – kwadrat, romb, jeszcze bardziej krzywy romb…',
    check: { q: 'Którą ramkę z listewek na zawiasach da się przekrzywić?', options: ['kwadrat', 'trójkąt'], answer: 0, explain: 'Kwadrat przekrzywia się w romb. Trójkąt jest sztywny.' },
  },
  {
    title: 'Przekątna i kratownica',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Kwadrat z przekątną to dwa trójkąty. Pod spodem most kratownicowy: pręty ułożone w trójkąty, połączone w węzłach">
      <path d="M30,20 H90 V80 H30 Z M30,80 L90,20" class="f4 s4 sw" fill="none"/>
      <g class="tx"><text x="110" y="45">kwadrat + przekątna</text><text x="110" y="70">= 2 trójkąty</text></g>
      <g class="s1 sw" fill="none"><path d="M30,170 H350 M70,120 H310"/>
        <path d="M30,170 L70,120 L110,170 L150,120 L190,170 L230,120 L270,170 L310,120 L350,170"/></g>
      <g class="ln"><circle cx="30" cy="170" r="5" class="bg"/><circle cx="110" cy="170" r="5" class="bg"/><circle cx="190" cy="170" r="5" class="bg"/><circle cx="270" cy="170" r="5" class="bg"/><circle cx="350" cy="170" r="5" class="bg"/>
        <circle cx="70" cy="120" r="5" class="bg"/><circle cx="150" cy="120" r="5" class="bg"/><circle cx="230" cy="120" r="5" class="bg"/><circle cx="310" cy="120" r="5" class="bg"/></g>
      <path d="M22,190 L30,175 L38,190 Z M342,190 L350,175 L358,190 Z" class="f2 s2"/>
      <text x="150" y="106" text-anchor="middle" class="tx">węzeł</text>
      <text x="200" y="204" text-anchor="middle" class="tx-s">most kratownicowy</text>
    </svg>`,
    text: `<p>Listewka <b>po przekątnej</b> dzieli kwadrat na dwa trójkąty – ramka robi się sztywna.</p>
      <p><b>Kratownica</b> to konstrukcja z prętów ułożonych w <b>trójkąty</b>. Pręty łączą się w <b>węzłach</b>. Kratownica jest wytrzymała i sztywna – dlatego buduje się z niej mosty.</p>`,
    remember: 'Kratownica = pręty ułożone w trójkąty.',
    hook: 'Widzisz w moście same trójkąty? To kratownica – „szkielet z trójkątów”.',
  },
  {
    title: 'Mocna kartka',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Płaska kartka położona na dwóch książkach ugina się. Kartka złożona w harmonijkę trzyma się prosto. Pod spodem cztery profile z kartki: kątownik, harmonijka, kształt litery U, rurka">
      <rect x="10" y="62" width="30" height="40" class="f2 s2"/><rect x="160" y="62" width="30" height="40" class="f2 s2"/>
      <path d="M40,62 Q100,100 160,62" class="ln sw" fill="none"/>
      <rect x="210" y="62" width="30" height="40" class="f2 s2"/><rect x="360" y="62" width="30" height="40" class="f2 s2"/>
      <path d="M240,62 L250,52 L260,62 L270,52 L280,62 L290,52 L300,62 L310,52 L320,62 L330,52 L340,62 L350,52 L360,62" class="ln sw" fill="none"/>
      <g class="tx" text-anchor="middle"><text x="100" y="126">płaska – ugina się</text><text x="300" y="126">harmonijka – trzyma</text></g>
      <g class="s3 sw" fill="none"><path d="M30,150 V190 H70"/><path d="M120,190 L130,155 L140,190 L150,155 L160,190 L170,155 L180,190"/><path d="M230,150 V190 H270 V150"/><circle cx="350" cy="170" r="20"/></g>
      <g class="tx-s" text-anchor="middle"><text x="50" y="218">kątownik</text><text x="150" y="218">harmonijka</text><text x="250" y="218">litera U</text><text x="350" y="218">rurka</text></g>
    </svg>`,
    text: `<p>Płaska kartka łatwo się ugina. <b>Zagięta</b> jest dużo sztywniejsza!</p>
      <p>Program z Bawarii podaje kształty (<b>profile</b>): kątownik, harmonijkę, kształt litery U i rurkę.</p>`,
    remember: 'Zagięta kartka jest sztywniejsza niż płaska.',
    hook: 'Sprawdź w domu: płaska kartka między dwiema książkami opada, a złożona w harmonijkę – trzyma się prosto.',
    check: { q: 'Jak wzmocnić kartkę w modelu mostu?', options: ['zagiąć ją w harmonijkę', 'rozłożyć ją płasko'], answer: 0, explain: 'Zagięta kartka (profil) jest sztywniejsza niż płaska.' },
  },
  {
    title: 'Cztery rodzaje mostów',
    svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Cztery mosty. Belkowy: belka leży na dwóch podporach. Łukowy: pomost nad łukiem. Kratownicowy: pręty w trójkąty. Wiszący: pomost wisi na linach zawieszonych na dwóch pylonach">
      <rect x="10" y="10" width="185" height="115" rx="12" class="f1 s1"/>
      <rect x="205" y="10" width="185" height="115" rx="12" class="f1 s1"/>
      <rect x="10" y="135" width="185" height="115" rx="12" class="f1 s1"/>
      <rect x="205" y="135" width="185" height="115" rx="12" class="f1 s1"/>
      <g class="tx-b"><text x="22" y="36">belkowy</text><text x="217" y="36">łukowy</text><text x="22" y="161">kratownicowy</text><text x="217" y="161">wiszący</text></g>
      <rect x="25" y="62" width="155" height="10" class="f2 s2"/>
      <rect x="45" y="72" width="12" height="40" class="f4 s4"/><rect x="148" y="72" width="12" height="40" class="f4 s4"/>
      <rect x="220" y="55" width="155" height="9" class="f2 s2"/>
      <path d="M222,112 Q297,20 373,112" class="ln sw" fill="none"/>
      <g class="ln" fill="none"><path d="M30,230 H180 M55,190 H155 M30,230 L55,190 L80,230 L105,190 L130,230 L155,190 L180,230"/></g>
      <rect x="240" y="168" width="8" height="72" class="f4 s4"/><rect x="352" y="168" width="8" height="72" class="f4 s4"/>
      <rect x="215" y="215" width="170" height="8" class="f2 s2"/>
      <g class="ln" fill="none"><path d="M215,200 L244,168 Q300,216 356,168 L385,200"/><path d="M270,185 V215 M300,192 V215 M330,185 V215"/></g>
    </svg>`,
    text: `<ul><li><b>belkowy</b> – belki leżą poziomo na podporach (jeden z najprostszych),</li>
      <li><b>łukowy</b> – ciężar przejmuje <b>ściskany łuk</b> i przenosi go na podpory na brzegach,</li>
      <li><b>kratownicowy</b> – ciężar niesie kratownica z trójkątów,</li>
      <li><b>wiszący</b> – pomost <b>wisi na linach</b> zawieszonych na wysokich pylonach.</li></ul>`,
    remember: 'Belka, łuk, kratownica, liny – cztery sposoby na most.',
    hook: 'Most wiszący jest jak hamak: wisi na linach.',
    check: { q: 'W którym moście pomost wisi na linach?', options: ['w wiszącym', 'w belkowym', 'w łukowym'], answer: 0, explain: 'W moście wiszącym liny zawieszone na pylonach dźwigają pomost.' },
  },
  {
    title: 'Części mostu',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Most z boku: na brzegach dwa przyczółki, pośrodku podpora. Między podporami dwa przęsła. Pod mostem rzeka">
      <rect x="60" y="150" width="280" height="24" rx="8" class="f1 s1"/>
      <rect x="10" y="90" width="40" height="70" class="f4 s4"/><rect x="350" y="90" width="40" height="70" class="f4 s4"/>
      <rect x="190" y="92" width="20" height="70" class="f4 s4"/>
      <rect x="10" y="80" width="380" height="12" class="f2 s2 sw"/>
      <g class="ln"><path d="M52,66 H188 M52,60 V72 M188,60 V72"/><path d="M212,66 H348 M212,60 V72 M348,60 V72"/></g>
      <g class="tx-b" text-anchor="middle"><text x="120" y="50">przęsło</text><text x="280" y="50">przęsło</text></g>
      <g class="tx" text-anchor="middle"><text x="55" y="194">przyczółek</text><text x="200" y="194">podpora</text><text x="345" y="194">przyczółek</text></g>
    </svg>`,
    text: `<p><b>Przęsło</b> to część mostu między podporami. <b>Przyczółki</b> to skrajne podpory – na brzegach. Na nich opiera się przęsło.</p>`,
    remember: 'Przęsło – między podporami. Przyczółki – na brzegach.',
    check: { q: 'Jak nazywa się część mostu między podporami?', options: ['przęsło', 'przyczółek', 'węzeł'], answer: 0, explain: 'Przęsło jest rozpięte między podporami.' },
  },
];
