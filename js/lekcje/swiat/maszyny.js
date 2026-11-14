/* Lekcje – 🌍 Świat, maszyny i konstrukcje. Klucz: 'maszyny/mechanizmy'. Format: docs/LEKCJE.md
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
