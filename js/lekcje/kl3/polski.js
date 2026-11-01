/* Lekcje – edukacja polonistyczna, klasa 3. Klucz: 'polski/<id działu>'. Format: docs/LEKCJE.md */
window.LESSONS = window.LESSONS || {};

window.LESSONS['polski/alfabet'] = [
  {
    title: 'Zdanie, wyrazy, głoski',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Zdanie Ola ma psa dzieli się na trzy wyrazy: Ola, ma, psa. Wyraz Ola dzieli się na trzy głoski: O, l, a. O i a to samogłoski, l to spółgłoska">
      <defs><marker id="a-k3p-alf-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="10" y="38" class="tx-s">zdanie</text>
      <text x="10" y="103" class="tx-s">wyrazy</text>
      <text x="10" y="163" class="tx-s">głoski</text>
      <rect x="100" y="12" width="270" height="42" rx="10" class="f1 s1 sw"/>
      <text x="235" y="40" class="tx-b" text-anchor="middle">Ola ma psa.</text>
      <path d="M235,56 L235,74" class="ln" marker-end="url(#a-k3p-alf-1)"/>
      <g class="f2 s2 sw"><rect x="105" y="78" width="80" height="40" rx="8"/><rect x="195" y="78" width="80" height="40" rx="8"/><rect x="285" y="78" width="80" height="40" rx="8"/></g>
      <text x="145" y="105" class="tx-b" text-anchor="middle">Ola</text>
      <text x="235" y="105" class="tx-b" text-anchor="middle">ma</text>
      <text x="325" y="105" class="tx-b" text-anchor="middle">psa</text>
      <path d="M145,120 L145,136" class="ln" marker-end="url(#a-k3p-alf-1)"/>
      <rect x="88" y="140" width="34" height="36" rx="6" class="f4 s4 sw"/>
      <rect x="128" y="140" width="34" height="36" rx="6" class="f5 s5 sw"/>
      <rect x="168" y="140" width="34" height="36" rx="6" class="f4 s4 sw"/>
      <text x="105" y="165" class="tx-b" text-anchor="middle">O</text>
      <text x="145" y="165" class="tx-b" text-anchor="middle">l</text>
      <text x="185" y="165" class="tx-b" text-anchor="middle">a</text>
      <text x="230" y="165" class="tx">3 głoski</text>
      <rect x="100" y="190" width="16" height="16" rx="3" class="f4 s4"/>
      <text x="122" y="203" class="tx-s">samogłoska</text>
      <rect x="230" y="190" width="16" height="16" rx="3" class="f5 s5"/>
      <text x="252" y="203" class="tx-s">spółgłoska</text>
    </svg>`,
    text: `<p>Mówisz i piszesz <b>zdaniami</b>. Zdanie składa się z <b>wyrazów</b>. A wyraz – z <b>głosek</b>.</p>
      <p>W piśmie między wyrazami robisz odstęp.</p>`,
    remember: 'Zdanie → wyrazy → głoski.',
    hook: 'Jak klocki 🧱: z głosek budujesz wyrazy, a z wyrazów – zdania.',
  },
  {
    title: 'Samogłoski – głoski, które śpiewają',
    svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Dziewięć kafelków z samogłoskami: a, ą, e, ę, i, o, ó, u, y">
      <g class="f4 s4 sw">
        <rect x="9" y="20" width="38" height="50" rx="8"/><rect x="52" y="20" width="38" height="50" rx="8"/><rect x="95" y="20" width="38" height="50" rx="8"/>
        <rect x="138" y="20" width="38" height="50" rx="8"/><rect x="181" y="20" width="38" height="50" rx="8"/><rect x="224" y="20" width="38" height="50" rx="8"/>
        <rect x="267" y="20" width="38" height="50" rx="8"/><rect x="310" y="20" width="38" height="50" rx="8"/><rect x="353" y="20" width="38" height="50" rx="8"/>
      </g>
      <text x="28" y="52" class="tx-b" text-anchor="middle">a</text>
      <text x="71" y="52" class="tx-b" text-anchor="middle">ą</text>
      <text x="114" y="52" class="tx-b" text-anchor="middle">e</text>
      <text x="157" y="52" class="tx-b" text-anchor="middle">ę</text>
      <text x="200" y="52" class="tx-b" text-anchor="middle">i</text>
      <text x="243" y="52" class="tx-b" text-anchor="middle">o</text>
      <text x="286" y="52" class="tx-b" text-anchor="middle">ó</text>
      <text x="329" y="52" class="tx-b" text-anchor="middle">u</text>
      <text x="372" y="52" class="tx-b" text-anchor="middle">y</text>
      <text x="200" y="102" class="tx-b" text-anchor="middle">9 samogłosek</text>
      <text x="200" y="138" class="tx" text-anchor="middle">🎵 możesz je śpiewać długo: aaa, ooo</text>
    </svg>`,
    text: `<p>Są głoski, które możesz śpiewać długo: aaa, ooo, uuu. To <b>samogłoski</b>.</p>
      <p>Wszystkie inne to <b>spółgłoski</b>, np. b, k, m, s, t.</p>`,
    remember: 'Samogłoski: a, ą, e, ę, i, o, ó, u, y.',
    hook: 'Samo-głoska brzmi <b>sama</b>. Spół-głoska lubi brzmieć <b>wspólnie</b> z samogłoską: ba, ko, mu.',
    check: { q: 'Która litera to samogłoska?', options: ['e', 'k', 's'], answer: 0, explain: 'e to samogłoska – możesz ją śpiewać: eee. k i s to spółgłoski.' },
  },
  {
    title: 'Głoska czy litera?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Wyraz szafa: 5 liter s, z, a, f, a, ale tylko 4 głoski: sz, a, f, a. Dwie litery, jedna głoska: ch, cz, dz, rz, sz">
      <g class="f1 s1 sw"><rect x="10" y="14" width="44" height="44" rx="8"/><rect x="60" y="14" width="44" height="44" rx="8"/><rect x="110" y="14" width="44" height="44" rx="8"/><rect x="160" y="14" width="44" height="44" rx="8"/><rect x="210" y="14" width="44" height="44" rx="8"/></g>
      <text x="32" y="43" class="tx-b" text-anchor="middle">s</text>
      <text x="82" y="43" class="tx-b" text-anchor="middle">z</text>
      <text x="132" y="43" class="tx-b" text-anchor="middle">a</text>
      <text x="182" y="43" class="tx-b" text-anchor="middle">f</text>
      <text x="232" y="43" class="tx-b" text-anchor="middle">a</text>
      <text x="272" y="43" class="tx-b">👀 5 liter</text>
      <rect x="10" y="78" width="94" height="44" rx="8" class="f2 s2 sw"/>
      <g class="f3 s3 sw"><rect x="110" y="78" width="44" height="44" rx="8"/><rect x="160" y="78" width="44" height="44" rx="8"/><rect x="210" y="78" width="44" height="44" rx="8"/></g>
      <text x="57" y="107" class="tx-b" text-anchor="middle">sz</text>
      <text x="132" y="107" class="tx-b" text-anchor="middle">a</text>
      <text x="182" y="107" class="tx-b" text-anchor="middle">f</text>
      <text x="232" y="107" class="tx-b" text-anchor="middle">a</text>
      <text x="272" y="107" class="tx-b">👂 4 głoski</text>
      <text x="200" y="158" class="tx" text-anchor="middle">dwie litery = jedna głoska</text>
      <text x="200" y="186" class="tx-b t2" text-anchor="middle">ch · cz · dz · rz · sz</text>
    </svg>`,
    text: `<p><b>Głoskę</b> słyszysz i wymawiasz. <b>Literę</b> widzisz i piszesz.</p>
      <p>Czasem jedną głoskę piszesz <b>dwiema literami</b>: ch, cz, dz, rz, sz. Dlatego „szafa” ma 5 liter, ale 4 głoski.</p>`,
    remember: 'Głoska – słyszę 👂. Litera – widzę i piszę 👀.',
    check: { q: 'Ile liter ma wyraz „czapka”?', options: ['6', '5', '7'], answer: 0, explain: 'c-z-a-p-k-a – to 6 liter. Głosek jest 5, bo „cz” to jedna głoska.' },
  },
  {
    title: 'Alfabet – 32 litery',
    svg: `<svg viewBox="0 0 400 192" role="img" aria-label="Polski alfabet w czterech rzędach: a ą b c ć d e ę, f g h i j k l ł, m n ń o ó p r s, ś t u w y z ź ż. Litery z ogonkami i kreskami są wyróżnione">
      <g class="f1 s1">
        <rect x="6" y="8" width="44" height="40" rx="6"/><rect x="104" y="8" width="44" height="40" rx="6"/><rect x="153" y="8" width="44" height="40" rx="6"/><rect x="251" y="8" width="44" height="40" rx="6"/><rect x="300" y="8" width="44" height="40" rx="6"/>
        <rect x="6" y="53" width="44" height="40" rx="6"/><rect x="55" y="53" width="44" height="40" rx="6"/><rect x="104" y="53" width="44" height="40" rx="6"/><rect x="153" y="53" width="44" height="40" rx="6"/><rect x="202" y="53" width="44" height="40" rx="6"/><rect x="251" y="53" width="44" height="40" rx="6"/><rect x="300" y="53" width="44" height="40" rx="6"/>
        <rect x="6" y="98" width="44" height="40" rx="6"/><rect x="55" y="98" width="44" height="40" rx="6"/><rect x="153" y="98" width="44" height="40" rx="6"/><rect x="251" y="98" width="44" height="40" rx="6"/><rect x="300" y="98" width="44" height="40" rx="6"/><rect x="349" y="98" width="44" height="40" rx="6"/>
        <rect x="55" y="143" width="44" height="40" rx="6"/><rect x="104" y="143" width="44" height="40" rx="6"/><rect x="153" y="143" width="44" height="40" rx="6"/><rect x="202" y="143" width="44" height="40" rx="6"/><rect x="251" y="143" width="44" height="40" rx="6"/>
      </g>
      <g class="f2 s2 sw">
        <rect x="55" y="8" width="44" height="40" rx="6"/><rect x="202" y="8" width="44" height="40" rx="6"/><rect x="349" y="8" width="44" height="40" rx="6"/>
        <rect x="349" y="53" width="44" height="40" rx="6"/>
        <rect x="104" y="98" width="44" height="40" rx="6"/><rect x="202" y="98" width="44" height="40" rx="6"/>
        <rect x="6" y="143" width="44" height="40" rx="6"/><rect x="300" y="143" width="44" height="40" rx="6"/><rect x="349" y="143" width="44" height="40" rx="6"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="28" y="34">a</text><text x="77" y="34">ą</text><text x="126" y="34">b</text><text x="175" y="34">c</text><text x="224" y="34">ć</text><text x="273" y="34">d</text><text x="322" y="34">e</text><text x="371" y="34">ę</text>
        <text x="28" y="79">f</text><text x="77" y="79">g</text><text x="126" y="79">h</text><text x="175" y="79">i</text><text x="224" y="79">j</text><text x="273" y="79">k</text><text x="322" y="79">l</text><text x="371" y="79">ł</text>
        <text x="28" y="124">m</text><text x="77" y="124">n</text><text x="126" y="124">ń</text><text x="175" y="124">o</text><text x="224" y="124">ó</text><text x="273" y="124">p</text><text x="322" y="124">r</text><text x="371" y="124">s</text>
        <text x="28" y="169">ś</text><text x="77" y="169">t</text><text x="126" y="169">u</text><text x="175" y="169">w</text><text x="224" y="169">y</text><text x="273" y="169">z</text><text x="322" y="169">ź</text><text x="371" y="169">ż</text>
      </g>
    </svg>`,
    text: `<p>Polski alfabet ma <b>32 litery</b>. Litery z ogonkami i kreskami (ą, ć, ę, ł, ń, ó, ś, ź, ż) stoją zaraz po swoich „siostrach”: ą po a, ł po l. Na samym końcu jest ż.</p>
      <p>Liter q, v, x nie ma w polskim alfabecie.</p>`,
    remember: 'Alfabet polski: 32 litery, od a do ż.',
    hook: 'Litera z ogonkiem lub kreską stoi <b>tuż za</b> literą bez ogonka: a → ą, l → ł, z → ź → ż. 🚂',
  },
  {
    title: 'Kolejność alfabetyczna',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Wyrazy lis, łoś, lew ułożone alfabetycznie: 1. lew, 2. lis, 3. łoś. Gdy pierwsza litera jest taka sama, patrzymy na drugą: e jest przed i">
      <defs><marker id="a-k3p-alf-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f5 s5 sw"><rect x="20" y="15" width="120" height="40" rx="8"/><rect x="20" y="65" width="120" height="40" rx="8"/><rect x="20" y="115" width="120" height="40" rx="8"/></g>
      <text x="80" y="42" class="tx-b" text-anchor="middle">lis</text>
      <text x="80" y="92" class="tx-b" text-anchor="middle">łoś</text>
      <text x="80" y="142" class="tx-b" text-anchor="middle">lew</text>
      <path d="M152,85 L222,85" class="ln sw" marker-end="url(#a-k3p-alf-2)"/>
      <text x="187" y="72" class="tx" text-anchor="middle">🔤</text>
      <g class="f3 s3 sw"><rect x="240" y="15" width="140" height="40" rx="8"/><rect x="240" y="65" width="140" height="40" rx="8"/><rect x="240" y="115" width="140" height="40" rx="8"/></g>
      <text x="310" y="42" class="tx-b" text-anchor="middle">1. l<tspan class="t1">e</tspan>w</text>
      <text x="310" y="92" class="tx-b" text-anchor="middle">2. l<tspan class="t1">i</tspan>s</text>
      <text x="310" y="142" class="tx-b" text-anchor="middle">3. <tspan class="t2">ł</tspan>oś</text>
      <text x="200" y="181" class="tx" text-anchor="middle">ta sama 1. litera? patrz na 2.: e przed i</text>
    </svg>`,
    text: `<p>W słowniku i na liście wyrazy stoją <b>w kolejności alfabetycznej</b>.</p>
      <p>Patrzysz na <b>pierwszą literę</b>. Gdy jest taka sama – na <b>drugą</b>. „Lew” i „lis” zaczynają się od l, ale e jest w alfabecie przed i. „Łoś” jest na końcu, bo ł stoi po l.</p>`,
    remember: 'Najpierw 1. litera. Taka sama? Patrz na 2. literę.',
    check: { q: 'Który wyraz będzie pierwszy w kolejności alfabetycznej?', options: ['mama', 'mleko', 'motyl'], answer: 0, explain: 'Wszystkie zaczynają się od m. Druga litera: a, l, o – w alfabecie pierwsze jest a.' },
  },
];

window.LESSONS['polski/ortografia'] = [
  {
    title: 'Słyszysz to samo, piszesz inaczej',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Trzy pary liter, które brzmią tak samo: ó i u, rz i ż, ch i h. Pomaga reguła albo zapamiętanie">
      <rect x="10" y="15" width="120" height="66" rx="12" class="f1 s1 sw"/>
      <rect x="140" y="15" width="120" height="66" rx="12" class="f2 s2 sw"/>
      <rect x="270" y="15" width="120" height="66" rx="12" class="f3 s3 sw"/>
      <text x="70" y="55" class="tx-b" text-anchor="middle">ó = u</text>
      <text x="200" y="55" class="tx-b" text-anchor="middle">rz = ż</text>
      <text x="330" y="55" class="tx-b" text-anchor="middle">ch = h</text>
      <text x="200" y="110" class="tx" text-anchor="middle">👂 słyszysz to samo – jak wybrać?</text>
      <rect x="40" y="128" width="145" height="40" rx="10" class="f4 s4 sw"/>
      <rect x="215" y="128" width="145" height="40" rx="10" class="f5 s5 sw"/>
      <text x="112" y="154" class="tx-b" text-anchor="middle">🔍 reguła</text>
      <text x="287" y="154" class="tx" text-anchor="middle">🧠 zapamiętaj</text>
    </svg>`,
    text: `<p>Te głoski brzmią tak samo, ale piszesz je inaczej. Jak wybrać?</p>
      <p>Czasem pomaga <b>reguła</b> – zmieniasz wyraz i słuchasz, co się w nim ukryło. A czasem pisownię trzeba po prostu <b>zapamiętać</b>. Gdy nie wiesz – zajrzyj do słownika ortograficznego.</p>`,
    hook: 'Zostań detektywem 🕵️: zmień wyraz (stół → stoły) i posłuchaj, co się ukryło.',
  },
  {
    title: 'Ó, które zmienia się w o',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Pary wyrazów: stół – stoły, mróz – mrozy, wóz – wozy, róg – rogi. Ó zmienia się w o">
      <defs><marker id="a-k3p-ort-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f2 s2 sw"><rect x="40" y="12" width="130" height="38" rx="8"/><rect x="40" y="58" width="130" height="38" rx="8"/><rect x="40" y="104" width="130" height="38" rx="8"/><rect x="40" y="150" width="130" height="38" rx="8"/></g>
      <g class="f3 s3 sw"><rect x="230" y="12" width="130" height="38" rx="8"/><rect x="230" y="58" width="130" height="38" rx="8"/><rect x="230" y="104" width="130" height="38" rx="8"/><rect x="230" y="150" width="130" height="38" rx="8"/></g>
      <g class="ln">
        <path d="M176,31 L224,31" marker-end="url(#a-k3p-ort-1)"/><path d="M176,77 L224,77" marker-end="url(#a-k3p-ort-1)"/>
        <path d="M176,123 L224,123" marker-end="url(#a-k3p-ort-1)"/><path d="M176,169 L224,169" marker-end="url(#a-k3p-ort-1)"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="105" y="38">st<tspan class="t5">ó</tspan>ł</text><text x="295" y="38">st<tspan class="t5">o</tspan>ły</text>
        <text x="105" y="84">mr<tspan class="t5">ó</tspan>z</text><text x="295" y="84">mr<tspan class="t5">o</tspan>zy</text>
        <text x="105" y="130">w<tspan class="t5">ó</tspan>z</text><text x="295" y="130">w<tspan class="t5">o</tspan>zy</text>
        <text x="105" y="176">r<tspan class="t5">ó</tspan>g</text><text x="295" y="176">r<tspan class="t5">o</tspan>gi</text>
      </g>
    </svg>`,
    text: `<p>Gdy w innej formie wyrazu ó zamienia się w <b>o</b>, piszesz <b>ó</b>: stół – stoły.</p>
      <p>Czasem ó zmienia się w <b>e</b> albo <b>a</b>: niósł – niesie, wrócić – wracać.</p>
      <p>Ó piszesz też w zakończeniach <b>-ów, -ówka</b>: Kraków, pocztówka.</p>`,
    remember: 'ó wymienia się na o, e, a → piszę ó.',
    hook: 'Ó ma kreskę, bo „ukrywa” w sobie o 🎩: stół – stoły.',
    check: { q: 'Który wyraz pomoże ci napisać „wóz”?', options: ['wozy', 'koła', 'jedzie'], answer: 0, explain: 'Wóz – wozy: ó wymienia się na o, więc piszesz ó.' },
  },
  {
    title: 'Kiedy piszemy u?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy karty: u na początku wyrazu – ucho, ulica; u na końcu – do domu, z lasu; u w zakończeniu -uje – maluje, rysuje">
      <rect x="10" y="10" width="120" height="170" rx="12" class="f1 s1 sw"/>
      <rect x="140" y="10" width="120" height="170" rx="12" class="f1 s1 sw"/>
      <rect x="270" y="10" width="120" height="170" rx="12" class="f1 s1 sw"/>
      <text x="70" y="40" class="tx-b" text-anchor="middle">początek</text>
      <text x="200" y="40" class="tx-b" text-anchor="middle">koniec</text>
      <text x="330" y="40" class="tx-b" text-anchor="middle">-uje</text>
      <g class="tx" text-anchor="middle">
        <text x="70" y="82"><tspan class="t2">u</tspan>cho</text>
        <text x="70" y="110"><tspan class="t2">u</tspan>lica</text>
        <text x="200" y="82">do dom<tspan class="t2">u</tspan></text>
        <text x="200" y="110">z las<tspan class="t2">u</tspan></text>
        <text x="330" y="82">mal<tspan class="t2">u</tspan>je</text>
        <text x="330" y="110">rys<tspan class="t2">u</tspan>je</text>
      </g>
      <text x="70" y="158" class="tx-b" text-anchor="middle">👂</text>
      <text x="200" y="158" class="tx-b" text-anchor="middle">🏠</text>
      <text x="330" y="158" class="tx-b" text-anchor="middle">🎨</text>
    </svg>`,
    text: `<p>Piszesz <b>u</b>:</p>
      <ul><li>na <b>początku</b> wyrazu: ucho, ulica,</li><li>na <b>końcu</b> wyrazu: do domu, z lasu,</li><li>w zakończeniu <b>-uje</b>: maluje, rysuje.</li></ul>
      <p>Uwaga: <b>ósmy</b> piszesz przez ó, bo mówisz <i>osiem</i>.</p>`,
    remember: 'u: na początku, na końcu i w -uje.',
    hook: 'Trzy domki u 🏠🏠🏠: <b>początek</b>, <b>koniec</b> i <b>-uje</b>.',
  },
  {
    title: 'Rz – gdy słychać r albo po spółgłosce',
    svg: `<svg viewBox="0 0 400 215" role="img" aria-label="Rz wymienia się na r: morze – morski, na górze – góra. Rz piszemy po literach b, p, d, t, g, k, ch, j, w, na przykład drzewo, krzesło, trzy, brzeg. Uwaga: pszczoła przez sz">
      <defs><marker id="a-k3p-ort-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <g class="f2 s2 sw"><rect x="20" y="10" width="150" height="36" rx="8"/><rect x="20" y="54" width="150" height="36" rx="8"/></g>
      <g class="f3 s3 sw"><rect x="230" y="10" width="150" height="36" rx="8"/><rect x="230" y="54" width="150" height="36" rx="8"/></g>
      <g class="ln"><path d="M176,28 L224,28" marker-end="url(#a-k3p-ort-2)"/><path d="M176,72 L224,72" marker-end="url(#a-k3p-ort-2)"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="95" y="35">mo<tspan class="t5">rz</tspan>e</text><text x="305" y="35">mo<tspan class="t5">r</tspan>ski</text>
        <text x="95" y="79">na gó<tspan class="t5">rz</tspan>e</text><text x="305" y="79">gó<tspan class="t5">r</tspan>a</text>
      </g>
      <text x="200" y="118" class="tx" text-anchor="middle">rz piszesz po literach:</text>
      <g class="f5 s5">
        <rect x="14" y="128" width="36" height="32" rx="6"/><rect x="56" y="128" width="36" height="32" rx="6"/><rect x="98" y="128" width="36" height="32" rx="6"/>
        <rect x="140" y="128" width="36" height="32" rx="6"/><rect x="182" y="128" width="36" height="32" rx="6"/><rect x="224" y="128" width="36" height="32" rx="6"/>
        <rect x="266" y="128" width="36" height="32" rx="6"/><rect x="308" y="128" width="36" height="32" rx="6"/><rect x="350" y="128" width="36" height="32" rx="6"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="32" y="150">b</text><text x="74" y="150">p</text><text x="116" y="150">d</text><text x="158" y="150">t</text><text x="200" y="150">g</text>
        <text x="242" y="150">k</text><text x="284" y="150">ch</text><text x="326" y="150">j</text><text x="368" y="150">w</text>
      </g>
      <text x="200" y="183" class="tx" text-anchor="middle">drzewo · krzesło · trzy · brzeg</text>
      <text x="200" y="207" class="tx-s" text-anchor="middle">⚠️ uwaga: pszczoła i pszenica – przez sz</text>
    </svg>`,
    text: `<p>Piszesz <b>rz</b>, gdy w innym wyrazie słychać <b>r</b>: morze – morski, na górze – góra.</p>
      <p>Piszesz <b>rz</b> po literach <b>b, p, d, t, g, k, ch, j, w</b>: brzeg, przedszkole, drzewo, trzy, grzyb, krzesło, wrzesień.</p>
      <p>Uwaga: <b>pszczoła</b> i <b>pszenica</b> piszesz przez sz.</p>`,
    remember: 'Słychać r w rodzinie wyrazu → rz. Po b, p, d, t, g, k, ch, j, w → rz.',
    hook: 'Szukaj r jak skarbu 💎: morze – mo<b>r</b>ski. Znalazłeś r – piszesz rz.',
    check: { q: 'Dlaczego w wyrazie „krzesło” piszesz rz?', options: ['bo rz stoi po k', 'bo krzesło ma nogi', 'bo na końcu jest o'], answer: 0, explain: 'Po literach b, p, d, t, g, k, ch, j, w piszesz rz: krzesło.' },
  },
  {
    title: 'Ż, ch i h',
    svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Ż wymienia się na g: książka – księga. Ch wymienia się na sz: mucha – muszka. Ch na końcu wyrazu: dach, brzuch. H trzeba zapamiętać: herbata, hałas">
      <rect x="10" y="10" width="380" height="42" rx="10" class="f2 s2 sw"/>
      <rect x="10" y="58" width="380" height="42" rx="10" class="f1 s1 sw"/>
      <rect x="10" y="106" width="380" height="42" rx="10" class="f3 s3 sw"/>
      <rect x="10" y="154" width="380" height="42" rx="10" class="f5 s5 sw"/>
      <g class="tx-b" text-anchor="middle">
        <text x="200" y="37">📚 ż ↔ g: ksią<tspan class="t5">ż</tspan>ka – księ<tspan class="t5">g</tspan>a</text>
        <text x="200" y="85">🪰 ch ↔ sz: mu<tspan class="t5">ch</tspan>a – mu<tspan class="t5">sz</tspan>ka</text>
        <text x="200" y="133">🏠 ch na końcu: da<tspan class="t5">ch</tspan>, brzu<tspan class="t5">ch</tspan></text>
        <text x="200" y="181">🧠 h – zapamiętaj: herbata, hałas</text>
      </g>
    </svg>`,
    text: `<p><b>Ż</b> piszesz, gdy wymienia się na <b>g, h, z, s, dz</b>: książka – księga, druh – drużyna, mróz – zamrażarka, wysoki – wyższy, pieniądze – pieniężny.</p>
      <p><b>Ch</b> piszesz na końcu wyrazu (dach, brzuch; wyjątek: druh) i gdy wymienia się na <b>sz</b> (mucha – muszka).</p>
      <p>Wiele wyrazów z ż, h i ch trzeba zapamiętać: żaba, herbata, chleb.</p>`,
    remember: 'ż ↔ g, h, z, s, dz · ch ↔ sz · ch na końcu wyrazu.',
    hook: 'Mucha ma muszkę, a ucho – dwoje uszu 👂: <b>ch</b> zamienia się w <b>sz</b>.',
    check: { q: 'Dlaczego w wyrazie „ucho” piszesz ch?', options: ['bo mówisz: uszy', 'bo to część głowy', 'bo u jest na początku'], answer: 0, explain: 'Ucho – uszy: ch wymienia się na sz.' },
  },
];

window.LESSONS['polski/zdanie'] = [
  {
    title: 'Trzy rodzaje zdań',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy karty: zdanie oznajmujące kończy się kropką, np. Pada. Zdanie pytające – znakiem zapytania, np. Czy pada? Zdanie rozkazujące – wykrzyknikiem, np. Otwórz!">
      <rect x="10" y="10" width="120" height="170" rx="12" class="f1 s1 sw"/>
      <rect x="140" y="10" width="120" height="170" rx="12" class="f2 s2 sw"/>
      <rect x="270" y="10" width="120" height="170" rx="12" class="f3 s3 sw"/>
      <text x="70" y="44" class="tx-b" text-anchor="middle">📢</text>
      <text x="200" y="44" class="tx-b" text-anchor="middle">❓</text>
      <text x="330" y="44" class="tx-b" text-anchor="middle">❗</text>
      <text x="70" y="74" class="tx" text-anchor="middle">oznajmujące</text>
      <text x="200" y="74" class="tx" text-anchor="middle">pytające</text>
      <text x="330" y="74" class="tx" text-anchor="middle">rozkazujące</text>
      <text x="35" y="57" transform="scale(2)" class="tx-b t1" text-anchor="middle">.</text>
      <text x="100" y="57" transform="scale(2)" class="tx-b t2" text-anchor="middle">?</text>
      <text x="165" y="57" transform="scale(2)" class="tx-b t3" text-anchor="middle">!</text>
      <text x="70" y="132" class="tx-s" text-anchor="middle">kropka</text>
      <text x="200" y="132" class="tx-s" text-anchor="middle">znak zapytania</text>
      <text x="330" y="132" class="tx-s" text-anchor="middle">wykrzyknik</text>
      <text x="70" y="164" class="tx-b" text-anchor="middle">Pada.</text>
      <text x="200" y="164" class="tx-b" text-anchor="middle">Czy pada?</text>
      <text x="330" y="164" class="tx-b" text-anchor="middle">Otwórz!</text>
    </svg>`,
    text: `<p>Zdanie <b>oznajmujące</b> o czymś informuje – na końcu stawiasz <b>kropkę</b>.</p>
      <p>Zdanie <b>pytające</b> pyta – na końcu stawiasz <b>znak zapytania</b>.</p>
      <p>Zdanie <b>rozkazujące</b> wydaje polecenie albo o coś prosi – na końcu zwykle stawiasz <b>wykrzyknik</b>.</p>`,
    remember: 'Kropka – informuję. Znak zapytania – pytam. Wykrzyknik – rozkazuję.',
    hook: 'Znak zapytania wygląda jak haczyk 🪝 – „łowi” odpowiedź.',
    check: { q: 'Jakie to zdanie: „Podaj mi kredkę!”?', options: ['rozkazujące', 'pytające', 'oznajmujące'], answer: 0, explain: 'To polecenie – zdanie rozkazujące.' },
  },
  {
    title: 'Ze zdania – pytanie',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Kot śpi. Po dodaniu czy i znaku zapytania: Czy kot śpi? I z powrotem. Wyrazy pytające: kto, gdzie, kiedy, dlaczego">
      <defs><marker id="a-k3p-zd-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="15" y="30" width="150" height="50" rx="10" class="f1 s1 sw"/>
      <rect x="235" y="30" width="150" height="50" rx="10" class="f2 s2 sw"/>
      <text x="90" y="61" class="tx-b" text-anchor="middle">Kot śpi.</text>
      <text x="310" y="61" class="tx-b" text-anchor="middle">Czy kot śpi?</text>
      <path d="M170,45 L230,45" class="ln" marker-end="url(#a-k3p-zd-1)"/>
      <path d="M230,68 L170,68" class="ln" marker-end="url(#a-k3p-zd-1)"/>
      <text x="200" y="22" class="tx-s" text-anchor="middle">+ czy … ?</text>
      <text x="200" y="98" class="tx-s" text-anchor="middle">bez czy, z kropką</text>
      <text x="200" y="132" class="tx-b t2" text-anchor="middle">kto? · gdzie? · kiedy? · dlaczego?</text>
      <text x="200" y="164" class="tx" text-anchor="middle">Gdzie śpi kot? Dlaczego kot śpi?</text>
    </svg>`,
    text: `<p>Zdanie oznajmujące łatwo zmienić w pytanie. Dodaj na początku <b>czy</b> i postaw <b>znak zapytania</b>: Kot śpi. → Czy kot śpi?</p>
      <p>Możesz też zacząć od wyrazów <b>kto? gdzie? kiedy? dlaczego?</b>. A z pytania zrobisz zdanie oznajmujące: Czy pada? → Pada.</p>`,
    remember: 'Pytanie: czy … ?',
    hook: 'Czarodziejskie słówko <b>czy</b> 🪄 zamienia zdanie w pytanie.',
    check: { q: 'Jak zmienisz w pytanie: „Tata gotuje zupę.”?', options: ['Czy tata gotuje zupę?', 'Tata gotuje zupę!', 'Gotuj zupę, tato!'], answer: 0, explain: 'Dodajesz „czy” i znak zapytania: Czy tata gotuje zupę?' },
  },
  {
    title: 'Zdanie pojedyncze i złożone',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwa zdania: Pada deszcz. Wieje wiatr. Połączone w zdanie złożone: Pada deszcz i wieje wiatr. Wyrazy łączące: i, ale, bo">
      <defs><marker id="a-k3p-zd-2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="15" y="12" width="170" height="44" rx="10" class="f1 s1 sw"/>
      <rect x="215" y="12" width="170" height="44" rx="10" class="f3 s3 sw"/>
      <text x="100" y="40" class="tx-b" text-anchor="middle">Pada deszcz.</text>
      <text x="300" y="40" class="tx-b" text-anchor="middle">Wieje wiatr.</text>
      <path d="M100,58 L160,88" class="ln" marker-end="url(#a-k3p-zd-2)"/>
      <path d="M300,58 L240,88" class="ln" marker-end="url(#a-k3p-zd-2)"/>
      <rect x="15" y="94" width="370" height="46" rx="10" class="f4 s4 sw"/>
      <text x="200" y="123" class="tx-b" text-anchor="middle">Pada deszcz <tspan class="t2">i</tspan> wieje wiatr.</text>
      <g class="f5 s5"><rect x="60" y="156" width="80" height="34" rx="8"/><rect x="160" y="156" width="80" height="34" rx="8"/><rect x="260" y="156" width="80" height="34" rx="8"/></g>
      <text x="100" y="179" class="tx-b" text-anchor="middle">i</text>
      <text x="200" y="179" class="tx-b" text-anchor="middle">, ale</text>
      <text x="300" y="179" class="tx-b" text-anchor="middle">, bo</text>
    </svg>`,
    text: `<p>Zdanie <b>pojedyncze</b> to jedno zdanie: Pada deszcz.</p>
      <p>Zdanie <b>złożone</b> to dwa zdania połączone w jedno, np. słowem <b>i</b>, <b>ale</b>, <b>bo</b>: Pada deszcz i wieje wiatr. Chcę iść na dwór, ale pada. Biorę parasol, bo pada.</p>
      <p>Przed <b>ale</b> i <b>bo</b> stawiasz przecinek.</p>`,
    remember: 'Złożone = dwa zdania w jednym.',
    hook: 'Jak pociąg 🚂: dwa wagony-zdania łączy wyraz i, ale albo bo.',
    check: { q: 'Które zdanie jest złożone?', options: ['Ola czyta, a Kuba rysuje.', 'Ola czyta ciekawą książkę.', 'Kuba rysuje kotka.'], answer: 0, explain: '„Ola czyta” i „Kuba rysuje” to dwa zdania połączone słowem „a”.' },
  },
  {
    title: 'Przecinek przy wyliczaniu',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Zdanie: Kupiłam jabłka, gruszki i banany. Dobrze: przecinek po jabłka, bez przecinka przed i. Źle: przecinek przed i">
      <text x="200" y="38" class="tx-b" text-anchor="middle">🍎   🍐   🍌</text>
      <text x="200" y="78" class="tx" text-anchor="middle">Kupiłam jabłka<tspan class="t2">,</tspan> gruszki <tspan class="t3">i</tspan> banany.</text>
      <rect x="40" y="98" width="320" height="38" rx="10" class="f3 s3 sw"/>
      <rect x="40" y="144" width="320" height="38" rx="10" class="f2 s2 sw"/>
      <text x="200" y="123" class="tx" text-anchor="middle">✔️ jabłka, gruszki i banany</text>
      <text x="200" y="169" class="tx" text-anchor="middle">❌ jabłka, gruszki, i banany</text>
    </svg>`,
    text: `<p>Gdy coś <b>wyliczasz</b>, oddzielasz kolejne wyrazy <b>przecinkami</b>.</p>
      <p>Przed ostatnim <b>i</b> przecinka nie stawiasz: Kupiłam jabłka, gruszki i banany.</p>`,
    remember: 'Wyliczam – stawiam przecinki. Przed „i” – bez przecinka.',
    hook: '„I” jest jak klej 🧴 – samo łączy wyrazy, nie potrzebuje przecinka.',
  },
  {
    title: 'Dobrze zapisane zdanie',
    svg: `<svg viewBox="0 0 400 186" role="img" aria-label="Zdanie Mama piecze ciasto. Na początku wielka litera, na końcu kropka. Dobrze: Rano idę do szkoły. Źle: Idę rano szkoły do">
      <defs><marker id="a-k3p-zd-3" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="40" y="24" class="tx-s">wielka litera</text>
      <text x="290" y="24" class="tx-s">kropka</text>
      <path d="M110,30 L110,48" class="ln" marker-end="url(#a-k3p-zd-3)"/>
      <path d="M294,30 L294,48" class="ln" marker-end="url(#a-k3p-zd-3)"/>
      <text x="200" y="70" class="tx-b" text-anchor="middle"><tspan class="t1">M</tspan>ama piecze ciasto<tspan class="t2">.</tspan></text>
      <rect x="40" y="92" width="320" height="38" rx="10" class="f3 s3 sw"/>
      <rect x="40" y="138" width="320" height="38" rx="10" class="f2 s2 sw"/>
      <text x="200" y="117" class="tx" text-anchor="middle">✔️ Rano idę do szkoły.</text>
      <text x="200" y="163" class="tx" text-anchor="middle">❌ Idę rano szkoły do.</text>
    </svg>`,
    text: `<p>Dobre zdanie zaczyna się <b>wielką literą</b>, kończy się <b>kropką, znakiem zapytania albo wykrzyknikiem</b>, a wyrazy stoją w takiej <b>kolejności</b>, żeby zdanie miało sens.</p>
      <p>Układasz zdanie z rozsypanych wyrazów? Poszukaj wyrazu z wielką literą – on będzie pierwszy.</p>`,
    remember: 'Wielka litera na początku, znak na końcu, sens w środku.',
    check: { q: 'Które zdanie jest zapisane poprawnie?', options: ['Pies biega po ogrodzie.', 'pies biega po ogrodzie.', 'Pies biega po ogrodzie'], sayOptions: ['wielka litera na początku i kropka', 'mała litera na początku i kropka', 'wielka litera na początku, bez kropki'], answer: 0, explain: 'Wielka litera na początku i kropka na końcu.' },
  },
];

window.LESSONS['polski/wielka-litera'] = [
  {
    title: 'Kiedy wielka litera?',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Sześć kafelków: imię Ania, imię zwierzęcia Burek, miasto Kraków, państwo Polska, rzeka Wisła, góry Tatry">
      <g class="f1 s1 sw"><rect x="10" y="10" width="120" height="84" rx="10"/><rect x="140" y="10" width="120" height="84" rx="10"/><rect x="270" y="10" width="120" height="84" rx="10"/></g>
      <g class="f3 s3 sw"><rect x="10" y="102" width="120" height="84" rx="10"/><rect x="140" y="102" width="120" height="84" rx="10"/><rect x="270" y="102" width="120" height="84" rx="10"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="36">👧</text><text x="200" y="36">🐶</text><text x="330" y="36">🏙️</text>
        <text x="70" y="128">🗺️</text><text x="200" y="128">🌊</text><text x="330" y="128">⛰️</text>
        <text x="70" y="60"><tspan class="t2">A</tspan>nia</text><text x="200" y="60"><tspan class="t2">B</tspan>urek</text><text x="330" y="60"><tspan class="t2">K</tspan>raków</text>
        <text x="70" y="152"><tspan class="t2">P</tspan>olska</text><text x="200" y="152"><tspan class="t2">W</tspan>isła</text><text x="330" y="152"><tspan class="t2">T</tspan>atry</text>
      </g>
      <g class="tx-s" text-anchor="middle">
        <text x="70" y="82">imię</text><text x="200" y="82">imię zwierzęcia</text><text x="330" y="82">miasto</text>
        <text x="70" y="174">państwo</text><text x="200" y="174">rzeka</text><text x="330" y="174">góry</text>
      </g>
    </svg>`,
    text: `<p>Wielką literą piszesz:</p>
      <ul><li>pierwszy wyraz w zdaniu,</li><li>imiona i nazwiska: Ania Nowak,</li><li>imiona zwierząt: Burek,</li><li>nazwy miast, państw, rzek i gór: Kraków, Polska, Wisła, Tatry.</li></ul>`,
    remember: 'Imię, nazwisko, miasto, państwo, rzeka, góry → wielka litera.',
    hook: 'Nazwa własna to „imię” osoby albo miejsca 👑 – dostaje koronę, czyli wielką literę.',
  },
  {
    title: 'Dni, miesiące, pory roku – małą literą',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Małą literą: wtorek – dzień tygodnia, maj – miesiąc, wiosna – pora roku. Przykład: W środę mam basen">
      <g class="f4 s4 sw"><rect x="10" y="10" width="120" height="100" rx="10"/><rect x="140" y="10" width="120" height="100" rx="10"/><rect x="270" y="10" width="120" height="100" rx="10"/></g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="42">📅</text><text x="200" y="42">🗓️</text><text x="330" y="42">🌷</text>
        <text x="70" y="72"><tspan class="t3">w</tspan>torek</text><text x="200" y="72"><tspan class="t3">m</tspan>aj</text><text x="330" y="72"><tspan class="t3">w</tspan>iosna</text>
      </g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="96">dzień tygodnia</text><text x="200" y="96">miesiąc</text><text x="330" y="96">pora roku</text></g>
      <rect x="10" y="126" width="380" height="44" rx="10" class="f3 s3 sw"/>
      <text x="200" y="154" class="tx-b" text-anchor="middle">W <tspan class="t3">ś</tspan>rodę mam basen.</text>
    </svg>`,
    text: `<p><b>Małą literą</b> piszesz nazwy dni tygodnia (poniedziałek, wtorek…), miesięcy (styczeń, maj…) i pór roku (wiosna, lato, jesień, zima).</p>
      <p>Wielką – tylko wtedy, gdy zaczynają zdanie: Wiosna już przyszła.</p>`,
    remember: 'Dni, miesiące, pory roku – małą literą.',
    hook: 'Dni i miesiące wracają co tydzień i co rok 🔁 – są „zwyczajne”, więc piszesz je zwyczajnie, małą literą.',
    check: { q: 'Który zapis jest poprawny?', options: ['Urodziny mam w marcu.', 'Urodziny mam w Marcu.'], sayOptions: ['marcu małą literą', 'Marcu wielką literą'], answer: 0, explain: 'Nazwy miesięcy piszesz małą literą.' },
  },
  {
    title: 'Tytuły książek',
    svg: `<svg viewBox="0 0 400 205" role="img" aria-label="Dwie okładki książek: Dzieci z Bullerbyn oraz O psie, który jeździł koleją. Wielka litera na początku tytułu i w nazwach własnych">
      <rect x="30" y="10" width="160" height="150" rx="8" class="f5 s5 sw"/>
      <rect x="210" y="10" width="160" height="150" rx="8" class="f1 s1 sw"/>
      <line x1="44" y1="10" x2="44" y2="160" class="ln-thin"/>
      <line x1="224" y1="10" x2="224" y2="160" class="ln-thin"/>
      <g class="tx-b" text-anchor="middle">
        <text x="117" y="64"><tspan class="t2">D</tspan>zieci</text>
        <text x="117" y="90">z <tspan class="t2">B</tspan>ullerbyn</text>
        <text x="297" y="50"><tspan class="t2">O</tspan> psie,</text>
        <text x="297" y="76">który</text>
        <text x="297" y="102">jeździł</text>
        <text x="297" y="128">koleją</text>
      </g>
      <text x="117" y="135" class="tx-b" text-anchor="middle">📗</text>
      <text x="200" y="190" class="tx" text-anchor="middle">wielka litera: 1. wyraz i nazwy własne</text>
    </svg>`,
    text: `<p>W tytule książki wielką literą piszesz tylko <b>pierwszy wyraz</b> i <b>nazwy własne</b> (imiona, nazwy miejsc).</p>
      <p>„Dzieci z Bullerbyn” – Bullerbyn to nazwa własna, więc też wielką literą. „O psie, który jeździł koleją” – tylko pierwszy wyraz.</p>`,
    remember: 'Tytuł: wielka litera na początku i w nazwach własnych.',
    hook: 'Tytuł to też zdanie 📖 – zaczyna się wielką literą, a dalej piszesz jak w zdaniu.',
    check: { q: 'Który tytuł jest zapisany poprawnie?', options: ['Doktor Dolittle i jego zwierzęta', 'Doktor Dolittle I Jego Zwierzęta', 'doktor dolittle i jego zwierzęta'], sayOptions: ['wielka litera w wyrazach Doktor i Dolittle', 'wielka litera w każdym wyrazie', 'wszystko małą literą'], answer: 0, explain: '„Doktor” to pierwszy wyraz, „Dolittle” to nazwisko – wielką literą. Reszta małą.' },
  },
  {
    title: 'Skróty z kropką i bez',
    svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Skróty z kropką: np. – na przykład, itd. – i tak dalej, ul. – ulica, r. – rok, godz. – godzina. Skróty miar bez kropki: cm, m, km, kg, g, l, zł, gr">
      <rect x="10" y="10" width="230" height="200" rx="12" class="f1 s1 sw"/>
      <rect x="250" y="10" width="140" height="200" rx="12" class="f3 s3 sw"/>
      <text x="125" y="38" class="tx-b" text-anchor="middle">z kropką</text>
      <text x="320" y="38" class="tx-b" text-anchor="middle">bez kropki</text>
      <g class="tx">
        <text x="24" y="70">np. – na przykład</text>
        <text x="24" y="98">itd. – i tak dalej</text>
        <text x="24" y="126">ul. – ulica</text>
        <text x="24" y="154">r. – rok</text>
        <text x="24" y="182">godz. – godzina</text>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="320" y="75">cm · m · km</text>
        <text x="320" y="110">kg · g · l</text>
        <text x="320" y="145">zł · gr</text>
        <text x="320" y="185">📏 ⚖️ 💰</text>
      </g>
    </svg>`,
    text: `<p><b>Skrót</b> to krótszy zapis wyrazu. Wiele skrótów ma na końcu <b>kropkę</b>: np. (na przykład), itd. (i tak dalej), ul. (ulica), r. (rok), godz. (godzina).</p>
      <p>Skróty <b>miar i pieniędzy</b> piszesz <b>bez kropki</b>: cm, m, km, kg, g, l, zł, gr.</p>`,
    remember: 'np. itd. ul. r. godz. – z kropką · cm kg zł – bez kropki.',
    hook: 'Miary są krótkie jak kreski na linijce 📏 – bez kropki: 5 cm, 2 kg, 3 zł.',
  },
  {
    title: 'Data i liczby słowami',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Data: 5 maja 2026 r. Liczby słowami: 12 – dwanaście, 15 – piętnaście, 40 – czterdzieści">
      <rect x="80" y="10" width="240" height="70" rx="10" class="f2 s2 sw"/>
      <text x="200" y="53" class="tx-b" text-anchor="middle">📅 5 <tspan class="t3">maja</tspan> 2026 <tspan class="t1">r.</tspan></text>
      <g class="f4 s4 sw"><rect x="10" y="100" width="120" height="90" rx="10"/><rect x="140" y="100" width="120" height="90" rx="10"/><rect x="270" y="100" width="120" height="90" rx="10"/></g>
      <g class="tx-b" text-anchor="middle"><text x="70" y="136">12</text><text x="200" y="136">15</text><text x="330" y="136">40</text></g>
      <g class="tx" text-anchor="middle"><text x="70" y="170">dwanaście</text><text x="200" y="170">piętnaście</text><text x="330" y="170">czterdzieści</text></g>
    </svg>`,
    text: `<p>Datę piszesz tak: <b>5 maja 2026 r.</b> Nazwa miesiąca – małą literą, a skrót <b>r.</b> (roku) – z kropką.</p>
      <p>Liczby słowami pisz uważnie: dwanaście, piętnaście, czterdzieści.</p>`,
    remember: 'Data: 5 maja 2026 r.',
    check: { q: 'Jak zapiszesz słowami liczbę 14?', options: ['czternaście', 'czternascie', 'czetrnaście'], answer: 0, explain: '14 – czternaście (jak cztery).' },
  },
];

window.LESSONS['polski/czesci-mowy'] = [
  {
    title: 'Każdy wyraz ma swoje pytanie',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy karty: kot – kto? co? – rzeczownik; biega – co robi? – czasownik; kolorowy – jaki? – przymiotnik">
      <rect x="10" y="10" width="120" height="170" rx="12" class="f1 s1 sw"/>
      <rect x="140" y="10" width="120" height="170" rx="12" class="f2 s2 sw"/>
      <rect x="270" y="10" width="120" height="170" rx="12" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="46">🐱</text><text x="200" y="46">🏃</text><text x="330" y="46">🌈</text>
        <text x="70" y="82">kot</text><text x="200" y="82">biega</text><text x="330" y="82">kolorowy</text>
      </g>
      <g class="tx" text-anchor="middle"><text x="70" y="114">kto? co?</text><text x="200" y="114">co robi?</text><text x="330" y="114">jaki?</text></g>
      <g class="tx-s" text-anchor="middle"><text x="70" y="156">rzeczownik</text><text x="200" y="156">czasownik</text><text x="330" y="156">przymiotnik</text></g>
    </svg>`,
    text: `<p>Wyrazy łączą się w grupy. Każda grupa ma <b>swoje pytanie</b>:</p>
      <ul><li><b>rzeczownik</b> – kto? co?</li><li><b>czasownik</b> – co robi? co się z nim dzieje?</li><li><b>przymiotnik</b> – jaki? jaka? jakie?</li></ul>`,
    remember: 'Zadaj pytanie – a wyraz powie, z jakiej jest grupy.',
    hook: 'Kolory jak w kredkach 🖍️: niebieski – rzeczownik, pomarańczowy – czasownik, zielony – przymiotnik.',
  },
  {
    title: 'Rzeczownik – kto? co?',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Rzeczowniki: kto? – mama, pies, chłopiec; co? – rower, drzewo, piłka">
      <text x="10" y="56" class="tx-b t1">kto?</text>
      <text x="10" y="136" class="tx-b t1">co?</text>
      <g class="f1 s1 sw">
        <rect x="70" y="15" width="100" height="70" rx="10"/><rect x="180" y="15" width="100" height="70" rx="10"/><rect x="290" y="15" width="100" height="70" rx="10"/>
        <rect x="70" y="95" width="100" height="70" rx="10"/><rect x="180" y="95" width="100" height="70" rx="10"/><rect x="290" y="95" width="100" height="70" rx="10"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="120" y="44">👩</text><text x="230" y="44">🐶</text><text x="340" y="44">👦</text>
        <text x="120" y="124">🚲</text><text x="230" y="124">🌳</text><text x="340" y="124">⚽</text>
      </g>
      <g class="tx" text-anchor="middle">
        <text x="120" y="72">mama</text><text x="230" y="72">pies</text><text x="340" y="72">chłopiec</text>
        <text x="120" y="152">rower</text><text x="230" y="152">drzewo</text><text x="340" y="152">piłka</text>
      </g>
    </svg>`,
    text: `<p><b>Rzeczownik</b> nazywa ludzi, zwierzęta, rośliny i rzeczy.</p>
      <p>O ludzi i zwierzęta pytasz <b>kto?</b> (mama, pies), o rzeczy i rośliny – <b>co?</b> (rower, drzewo).</p>`,
    remember: 'Rzeczownik: kto? co?',
    hook: 'Rzeczownik – jak „rzecz” 👉: to, co możesz nazwać i pokazać palcem.',
    check: { q: 'Który wyraz to rzeczownik?', options: ['drzewo', 'rośnie', 'zielone'], answer: 0, explain: 'Co? – drzewo. To rzeczownik.' },
  },
  {
    title: 'Czasownik – co robi?',
    svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Czasowniki: co robi? – biega, czyta, śpi; co się dzieje? – pada, rośnie, kwitnie">
      <text x="10" y="56" class="tx-b t2">co robi?</text>
      <text x="10" y="128" class="tx-b t2">co się</text>
      <text x="10" y="150" class="tx-b t2">dzieje?</text>
      <g class="f2 s2 sw">
        <rect x="100" y="15" width="90" height="70" rx="10"/><rect x="200" y="15" width="90" height="70" rx="10"/><rect x="300" y="15" width="90" height="70" rx="10"/>
        <rect x="100" y="95" width="90" height="70" rx="10"/><rect x="200" y="95" width="90" height="70" rx="10"/><rect x="300" y="95" width="90" height="70" rx="10"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="145" y="44">🏃</text><text x="245" y="44">📖</text><text x="345" y="44">😴</text>
        <text x="145" y="124">🌧️</text><text x="245" y="124">🌱</text><text x="345" y="124">🌸</text>
      </g>
      <g class="tx" text-anchor="middle">
        <text x="145" y="72">biega</text><text x="245" y="72">czyta</text><text x="345" y="72">śpi</text>
        <text x="145" y="152">pada</text><text x="245" y="152">rośnie</text><text x="345" y="152">kwitnie</text>
      </g>
    </svg>`,
    text: `<p><b>Czasownik</b> mówi, co ktoś <b>robi</b> (biega, czyta, śpi) albo co się z czymś <b>dzieje</b> (deszcz pada, kwiat rośnie).</p>`,
    remember: 'Czasownik: co robi? co się z nim dzieje?',
    hook: 'Czasownik to wyraz-ruch 🏃 – bez niego w zdaniu nic się nie dzieje.',
  },
  {
    title: 'Przymiotnik – jaki?',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Przymiotniki: jaki kot? rudy; jaka żaba? zielona; jakie jabłko? czerwone">
      <g class="f3 s3 sw"><rect x="10" y="10" width="120" height="170" rx="12"/><rect x="140" y="10" width="120" height="170" rx="12"/><rect x="270" y="10" width="120" height="170" rx="12"/></g>
      <g class="tx" text-anchor="middle"><text x="70" y="40">jaki?</text><text x="200" y="40">jaka?</text><text x="330" y="40">jakie?</text></g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="82">🐱</text><text x="200" y="82">🐸</text><text x="330" y="82">🍎</text>
        <text x="70" y="122" class="t3">rudy</text><text x="200" y="122" class="t3">zielona</text><text x="330" y="122" class="t3">czerwone</text>
      </g>
      <g class="tx" text-anchor="middle"><text x="70" y="152">kot</text><text x="200" y="152">żaba</text><text x="330" y="152">jabłko</text></g>
    </svg>`,
    text: `<p><b>Przymiotnik</b> mówi, <b>jaki</b> jest ktoś albo coś: rudy kot, zielona żaba, czerwone jabłko.</p>
      <p>Przymiotnik lubi stać obok rzeczownika.</p>`,
    remember: 'Przymiotnik: jaki? jaka? jakie?',
    hook: 'Przymiotnik „ubiera” rzeczownik 👕: kot → rudy kot.',
    check: { q: 'Który wyraz to przymiotnik?', options: ['wesoły', 'chłopiec', 'skacze'], answer: 0, explain: 'Jaki? – wesoły. To przymiotnik.' },
  },
  {
    title: 'Jeden czy wiele?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Zdanie Mały kot pije mleko w kolorach części mowy. Liczba pojedyncza i mnoga: kot – koty, duży dom – duże domy, dziecko czyta – dzieci czytają">
      <defs><marker id="a-k3p-cm-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <text x="200" y="32" class="tx-b" text-anchor="middle"><tspan class="t3">Mały</tspan> <tspan class="t1">kot</tspan> <tspan class="t2">pije</tspan> <tspan class="t1">mleko</tspan>.</text>
      <rect x="20" y="52" width="160" height="34" rx="8" class="f4 s4"/>
      <rect x="220" y="52" width="160" height="34" rx="8" class="f5 s5"/>
      <text x="100" y="75" class="tx-b" text-anchor="middle">jeden 🐱</text>
      <text x="300" y="75" class="tx-b" text-anchor="middle">wiele 🐱🐱</text>
      <g class="tx-b" text-anchor="middle">
        <text x="100" y="118">kot</text><text x="300" y="118">koty</text>
        <text x="100" y="153">duży dom</text><text x="300" y="153">duże domy</text>
        <text x="100" y="188">dziecko czyta</text><text x="300" y="188">dzieci czytają</text>
      </g>
      <g class="ln"><path d="M178,112 L222,112" marker-end="url(#a-k3p-cm-1)"/><path d="M178,147 L222,147" marker-end="url(#a-k3p-cm-1)"/><path d="M178,182 L222,182" marker-end="url(#a-k3p-cm-1)"/></g>
    </svg>`,
    text: `<p><b>Liczba pojedyncza</b> – jedna osoba lub rzecz: kot, duży dom.</p>
      <p><b>Liczba mnoga</b> – więcej: koty, duże domy.</p>
      <p>Gdy zmieniasz rzeczownik, zmieniają się też przymiotnik i czasownik: dziecko czyta → dzieci czytają.</p>`,
    remember: 'Jeden – liczba pojedyncza. Wiele – liczba mnoga.',
    check: { q: 'Jaka jest liczba mnoga od wyrazu „piłka”?', options: ['piłki', 'piłką', 'piłce'], answer: 0, explain: 'Jedna piłka – dwie piłki.' },
  },
];

window.LESSONS['polski/wyrazy'] = [
  {
    title: 'Pary i rodziny wyrazów',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Trzy karty: wyrazy przeciwne – duży i mały, dzień i noc; bliskoznaczne – auto i samochód; pokrewne – las, lasek, leśny">
      <rect x="10" y="10" width="120" height="170" rx="12" class="f2 s2 sw"/>
      <rect x="140" y="10" width="120" height="170" rx="12" class="f5 s5 sw"/>
      <rect x="270" y="10" width="120" height="170" rx="12" class="f3 s3 sw"/>
      <g class="tx-b" text-anchor="middle"><text x="70" y="44">⚖️</text><text x="200" y="44">🤝</text><text x="330" y="44">🌳</text></g>
      <g class="tx" text-anchor="middle">
        <text x="70" y="76">przeciwne</text><text x="200" y="76">bliskoznaczne</text><text x="330" y="76">pokrewne</text>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="70" y="116">duży – mały</text><text x="70" y="146">dzień – noc</text>
        <text x="200" y="116">auto =</text><text x="200" y="146">samochód</text>
        <text x="330" y="108">las</text><text x="330" y="134">lasek</text><text x="330" y="160">leśny</text>
      </g>
    </svg>`,
    text: `<p>Wyrazy mają swoje pary i rodziny:</p>
      <ul><li><b>przeciwne</b> – znaczą coś odwrotnego,</li><li><b>bliskoznaczne</b> – znaczą prawie to samo,</li><li><b>pokrewne</b> – są z jednej rodziny.</li></ul>`,
    remember: 'Przeciwne – odwrotnie. Bliskoznaczne – prawie to samo. Pokrewne – rodzina.',
    hook: '⚖️ przeciwne – jak dwie strony huśtawki, 🤝 bliskoznaczne – jak bliźniaki, 🌳 pokrewne – jak rodzina.',
  },
  {
    title: 'Wyrazy przeciwne',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Huśtawka: z jednej strony duży słoń, z drugiej mała mysz. Pary wyrazów przeciwnych: dzień – noc, wesoły – smutny, zimny – gorący, otwierać – zamykać">
      <text x="90" y="28" class="tx-b" text-anchor="middle">duży</text>
      <text x="310" y="28" class="tx-b" text-anchor="middle">mały</text>
      <text x="90" y="62" class="tx-b" text-anchor="middle">🐘</text>
      <text x="310" y="62" class="tx-b" text-anchor="middle">🐭</text>
      <line x1="50" y1="74" x2="350" y2="74" class="ln sw"/>
      <polygon points="200,76 180,112 220,112" class="f4 s4 sw"/>
      <g class="tx" text-anchor="middle">
        <text x="100" y="150">dzień ↔ noc</text><text x="300" y="150">wesoły ↔ smutny</text>
        <text x="100" y="185">zimny ↔ gorący</text><text x="300" y="185">otwierać ↔ zamykać</text>
      </g>
    </svg>`,
    text: `<p>Wyrazy <b>przeciwne</b> znaczą coś zupełnie odwrotnego: duży – mały, dzień – noc, wesoły – smutny.</p>`,
    remember: 'Przeciwne = odwrotne.',
    hook: 'Na huśtawce jeden jest w górze, drugi w dole – jak wyrazy przeciwne. 🎢',
    check: { q: 'Jaki wyraz jest przeciwny do „wysoki”?', options: ['niski', 'duży', 'długi'], answer: 0, explain: 'Wysoki – niski.' },
  },
  {
    title: 'Wyrazy bliskoznaczne',
    svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Pary wyrazów bliskoznacznych: auto – samochód, wielki – ogromny, wesoły – radosny, ładny – piękny">
      <g class="f5 s5 sw">
        <rect x="30" y="12" width="140" height="38" rx="8"/><rect x="230" y="12" width="140" height="38" rx="8"/>
        <rect x="30" y="58" width="140" height="38" rx="8"/><rect x="230" y="58" width="140" height="38" rx="8"/>
        <rect x="30" y="104" width="140" height="38" rx="8"/><rect x="230" y="104" width="140" height="38" rx="8"/>
        <rect x="30" y="150" width="140" height="38" rx="8"/><rect x="230" y="150" width="140" height="38" rx="8"/>
      </g>
      <g class="tx-b" text-anchor="middle">
        <text x="100" y="38">auto</text><text x="200" y="38" class="t5">≈</text><text x="300" y="38">samochód</text>
        <text x="100" y="84">wielki</text><text x="200" y="84" class="t5">≈</text><text x="300" y="84">ogromny</text>
        <text x="100" y="130">wesoły</text><text x="200" y="130" class="t5">≈</text><text x="300" y="130">radosny</text>
        <text x="100" y="176">ładny</text><text x="200" y="176" class="t5">≈</text><text x="300" y="176">piękny</text>
      </g>
    </svg>`,
    text: `<p>Wyrazy <b>bliskoznaczne</b> znaczą prawie to samo. Dzięki nim nie powtarzasz ciągle tego samego słowa.</p>
      <p>Zamiast „Mam duży dom i duży ogród” powiesz: „Mam duży dom i ogromny ogród”.</p>`,
    remember: 'Bliskoznaczne = prawie to samo.',
    hook: 'Bliskoznaczne są blisko siebie jak przyjaciele 🤝 – mogą zamienić się miejscami.',
    check: { q: 'Który wyraz znaczy prawie to samo co „radosny”?', options: ['wesoły', 'smutny', 'cichy'], answer: 0, explain: 'Radosny – wesoły: to wyrazy bliskoznaczne.' },
  },
  {
    title: 'Rodzina wyrazów',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Drzewo rodziny wyrazu las: lasek, leśny, leśniczy">
      <g class="ln sw"><line x1="200" y1="140" x2="85" y2="70"/><line x1="200" y1="140" x2="200" y2="62"/><line x1="200" y1="140" x2="315" y2="70"/></g>
      <g class="f3 s3 sw"><rect x="25" y="34" width="120" height="40" rx="20"/><rect x="140" y="22" width="120" height="40" rx="20"/><rect x="255" y="34" width="120" height="40" rx="20"/></g>
      <ellipse cx="200" cy="150" rx="62" ry="30" class="f4 s4 sw"/>
      <g class="tx-b" text-anchor="middle">
        <text x="85" y="60">lasek</text><text x="200" y="48">leśny</text><text x="315" y="60">leśniczy</text>
        <text x="200" y="157">🌳 las</text>
      </g>
    </svg>`,
    text: `<p>Wyrazy <b>pokrewne</b> to jedna rodzina. Mają <b>wspólną część</b> i łączy je <b>znaczenie</b>: las – lasek – leśny – leśniczy.</p>
      <p>W rodzinie wspólna część może się trochę zmieniać: las – leśny.</p>`,
    remember: 'Pokrewne: wspólna część i wspólne znaczenie.',
    hook: 'Jak rodzina przy stole 👨‍👩‍👧: każdy trochę inny, ale wszyscy podobni.',
    check: { q: 'Który wyraz jest z rodziny wyrazu „ryba”?', options: ['rybak', 'rak', 'rzeka'], answer: 0, explain: 'Ryba – rybak: wspólna część „ryb” i wspólne znaczenie (rybak łowi ryby).' },
  },
  {
    title: 'Uwaga, pułapki!',
    svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Lis i lista brzmią podobnie, ale nie są pokrewne. Kot i kotek są pokrewne. Rodzina wyrazów pomaga w pisowni: stół – stolik, morze – morski">
      <rect x="10" y="10" width="185" height="82" rx="12" class="f2 s2 sw"/>
      <rect x="205" y="10" width="185" height="82" rx="12" class="f3 s3 sw"/>
      <text x="102" y="42" class="tx-b" text-anchor="middle">🦊 lis – lista 📝</text>
      <text x="102" y="74" class="tx" text-anchor="middle">❌ nie są pokrewne</text>
      <text x="297" y="42" class="tx-b" text-anchor="middle">🐱 kot – kotek</text>
      <text x="297" y="74" class="tx" text-anchor="middle">✔️ pokrewne</text>
      <rect x="10" y="104" width="380" height="76" rx="12" class="f4 s4 sw"/>
      <text x="200" y="132" class="tx" text-anchor="middle">rodzina pomaga w pisowni:</text>
      <text x="200" y="162" class="tx-b" text-anchor="middle">st<tspan class="t5">ó</tspan>ł → st<tspan class="t5">o</tspan>lik · mo<tspan class="t5">rz</tspan>e → mo<tspan class="t5">r</tspan>ski</text>
    </svg>`,
    text: `<p>Uważaj! Wyrazy, które tylko <b>brzmią podobnie</b>, nie zawsze są rodziną. „Lis” i „lista” nie łączy znaczenie – to nie są wyrazy pokrewne.</p>
      <p>Rodzina wyrazów pomaga w pisowni: stół – stolik, morze – morski.</p>`,
    remember: 'Rodzina = podobny wyraz i podobne znaczenie.',
    check: { q: 'Czy „lis” i „lista” to wyrazy pokrewne?', options: ['nie', 'tak'], answer: 0, explain: 'Nie. Brzmią podobnie, ale nie łączy ich znaczenie.' },
  },
];

window.LESSONS['polski/teksty'] = [
  {
    title: 'Wiersz czy proza?',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dwie kartki: wiersz ma krótkie linijki pogrupowane w zwrotki, proza ma długie linijki od brzegu do brzegu">
      <rect x="15" y="10" width="175" height="150" rx="8" class="bg ln"/>
      <rect x="210" y="10" width="175" height="150" rx="8" class="bg ln"/>
      <g class="ln-thin sw">
        <line x1="35" y1="35" x2="135" y2="35"/><line x1="35" y1="50" x2="150" y2="50"/><line x1="35" y1="65" x2="125" y2="65"/><line x1="35" y1="80" x2="145" y2="80"/>
        <line x1="35" y1="105" x2="140" y2="105"/><line x1="35" y1="120" x2="120" y2="120"/><line x1="35" y1="135" x2="150" y2="135"/><line x1="35" y1="150" x2="130" y2="150"/>
        <line x1="250" y1="35" x2="370" y2="35"/><line x1="228" y1="50" x2="370" y2="50"/><line x1="228" y1="65" x2="370" y2="65"/><line x1="228" y1="80" x2="370" y2="80"/>
        <line x1="228" y1="95" x2="370" y2="95"/><line x1="228" y1="110" x2="370" y2="110"/><line x1="228" y1="125" x2="370" y2="125"/><line x1="228" y1="140" x2="320" y2="140"/>
      </g>
      <text x="102" y="188" class="tx-b" text-anchor="middle">📜 wiersz</text>
      <text x="297" y="188" class="tx-b" text-anchor="middle">📖 proza</text>
    </svg>`,
    text: `<p><b>Wiersz</b> ma krótkie linijki – to <b>wersy</b>. Wersy łączą się w <b>zwrotki</b>. Na końcu wersów często są <b>rymy</b>.</p>
      <p><b>Proza</b> to tekst pisany zwykłymi zdaniami, od brzegu do brzegu kartki – np. opowiadanie, list.</p>`,
    remember: 'Wiersz – wersy i zwrotki. Proza – zwykłe zdania.',
    hook: 'Wiersz wygląda jak schodki 🪜 z krótkich linijek, proza – jak gładka ściana tekstu.',
  },
  {
    title: 'Wers, zwrotka, rym',
    svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Zwrotka wiersza z czterema wersami: Rano słonko wstało, w okno nam zajrzało. Zbudził się nasz kot i wyskoczył przez płot. Rymy: wstało – zajrzało, kot – płot">
      <g class="tx">
        <text x="25" y="40">Rano słonko <tspan class="t2">wstało</tspan>,</text>
        <text x="25" y="70">w okno nam <tspan class="t2">zajrzało</tspan>.</text>
        <text x="25" y="100">Zbudził się nasz <tspan class="t1">kot</tspan></text>
        <text x="25" y="130">i wyskoczył przez <tspan class="t1">płot</tspan>.</text>
      </g>
      <path d="M255,22 Q268,22 268,50 L268,68 Q268,78 278,78 Q268,78 268,88 L268,108 Q268,138 255,138" class="ln sw" fill="none"/>
      <text x="290" y="84" class="tx-b">zwrotka</text>
      <text x="200" y="172" class="tx" text-anchor="middle">jedna linijka = wers</text>
      <text x="200" y="200" class="tx" text-anchor="middle">ten sam kolor = rym</text>
    </svg>`,
    text: `<p>To jest zwrotka wiersza. Ma <b>4 wersy</b>.</p>
      <p><b>Rym</b> to podobne brzmienie końcówek wyrazów: wstało – zajrzało, kot – płot.</p>`,
    remember: 'Wers – linijka. Zwrotka – kilka wersów. Rym – podobne końcówki.',
    hook: 'Rym to echo 🔔: kot… płot!',
    check: { q: 'Który wyraz rymuje się z „las”?', options: ['czas', 'lis', 'drzewo'], answer: 0, explain: 'Las – czas: końcówki brzmią podobnie.' },
  },
  {
    title: 'Opowiadanie krok po kroku',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Trzy części opowiadania: początek – kto, gdzie, kiedy; rozwinięcie – co się wydarzyło; zakończenie – jak się skończyło. Plan to zdarzenia po kolei">
      <defs><marker id="a-k3p-tek-1" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>
      <rect x="5" y="10" width="115" height="150" rx="12" class="f1 s1 sw"/>
      <rect x="142" y="10" width="115" height="150" rx="12" class="f2 s2 sw"/>
      <rect x="280" y="10" width="115" height="150" rx="12" class="f3 s3 sw"/>
      <g class="ln"><path d="M121,85 L139,85" marker-end="url(#a-k3p-tek-1)"/><path d="M258,85 L277,85" marker-end="url(#a-k3p-tek-1)"/></g>
      <g class="tx-b" text-anchor="middle"><text x="62" y="42">🏁</text><text x="199" y="42">🎢</text><text x="337" y="42">🎉</text></g>
      <g class="tx" text-anchor="middle"><text x="62" y="72">początek</text><text x="199" y="72">rozwinięcie</text><text x="337" y="72">zakończenie</text></g>
      <g class="tx-s" text-anchor="middle">
        <text x="62" y="104">kto? gdzie?</text><text x="62" y="122">kiedy?</text>
        <text x="199" y="104">co się</text><text x="199" y="122">wydarzyło?</text>
        <text x="337" y="104">jak się</text><text x="337" y="122">skończyło?</text>
      </g>
      <text x="200" y="188" class="tx" text-anchor="middle">📝 plan = zdarzenia po kolei</text>
    </svg>`,
    text: `<p><b>Opowiadanie</b> to tekst o zdarzeniach, które dzieją się <b>po kolei</b>. Ma trzy części: <b>początek</b>, <b>rozwinięcie</b> i <b>zakończenie</b>.</p>
      <p>Zanim napiszesz, ułóż <b>plan</b>: 1. Idziemy do parku. 2. Piłka wpada do stawu. 3. Pan ogrodnik wyławia piłkę. 4. Dziękujemy i wracamy do domu.</p>
      <p><b>Postać główna</b> to ta, o której jest najwięcej. Inne to postacie <b>drugoplanowe</b>. W opowiadaniu może być <b>dialog</b> (rozmowa postaci) i <b>opis</b> (jak ktoś lub coś wygląda).</p>`,
    remember: 'Początek → rozwinięcie → zakończenie.',
    hook: 'Jak kanapka 🥪: początek i zakończenie to kromki, a w środku najsmaczniejsze – rozwinięcie.',
    check: { q: 'Co jest w zakończeniu opowiadania?', options: ['jak skończyła się przygoda', 'kto jest bohaterem i gdzie jest', 'tytuł'], answer: 0, explain: 'W zakończeniu dowiadujesz się, jak wszystko się skończyło.' },
  },
  {
    title: 'Zaproszenie i inne krótkie teksty',
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Zaproszenie: Droga Zosiu! Zapraszam na urodziny w sobotę o 15.00, ul. Lipowa 3. Kasia. Odpowiada na pytania: kogo, na co, kiedy, gdzie, kto">
      <rect x="10" y="10" width="240" height="180" rx="12" class="f4 s4 sw"/>
      <g class="tx">
        <text x="24" y="42">Droga Zosiu!</text>
        <text x="24" y="74">Zapraszam na urodziny</text>
        <text x="24" y="102">w sobotę o 15.00,</text>
        <text x="24" y="130">ul. Lipowa 3.</text>
        <text x="24" y="170">Kasia</text>
      </g>
      <g class="tx-b">
        <text x="262" y="42" class="t1">kogo?</text>
        <text x="262" y="74" class="t2">na co?</text>
        <text x="262" y="102" class="t3">kiedy?</text>
        <text x="262" y="130" class="t5">gdzie?</text>
        <text x="262" y="170" class="t1">kto?</text>
      </g>
      <text x="360" y="60" class="tx-b" text-anchor="middle">🎈</text>
      <text x="360" y="150" class="tx-b" text-anchor="middle">🎂</text>
    </svg>`,
    text: `<p>W <b>zaproszeniu</b> musi być: <b>kto</b> zaprasza, <b>kogo</b>, <b>na co</b>, <b>gdzie</b> i <b>kiedy</b>.</p>
      <p>Inne krótkie teksty: <b>życzenia</b> (z jakiej okazji, czego życzysz, podpis), <b>podziękowanie</b> (komu i za co dziękujesz), <b>ogłoszenie</b> (informacja dla wielu osób), <b>notatka</b> (krótka, ważna informacja) i <b>zagadka</b> (opisuje coś, ale nie mówi, co to jest).</p>`,
    remember: 'Zaproszenie: kto? kogo? na co? gdzie? kiedy?',
    hook: 'Pięć palców ✋ – pięć pytań zaproszenia: kto, kogo, na co, gdzie, kiedy.',
    check: { q: '„Droga Zosiu! Zapraszam na urodziny w sobotę o 15.00. Kasia” – czego brakuje?', options: ['gdzie', 'kiedy', 'kto zaprasza'], answer: 0, explain: 'Jest kogo (Zosia), na co (urodziny), kiedy (sobota, 15.00) i kto (Kasia). Brakuje, gdzie.' },
  },
  {
    title: 'List i koperta',
    svg: `<svg viewBox="0 0 400 230" role="img" aria-label="List: u góry po prawej miejscowość i data, potem zwrot do adresata Droga Babciu, treść, pozdrowienia i podpis Ola">
      <rect x="10" y="10" width="180" height="210" rx="8" class="bg ln sw"/>
      <text x="184" y="34" class="tx-s" text-anchor="end">Gdańsk, 5 maja 2026 r.</text>
      <text x="22" y="64" class="tx">Droga Babciu!</text>
      <g class="ln-thin sw"><line x1="22" y1="88" x2="178" y2="88"/><line x1="22" y1="106" x2="178" y2="106"/><line x1="22" y1="124" x2="178" y2="124"/><line x1="22" y1="142" x2="150" y2="142"/></g>
      <text x="22" y="170" class="tx-s">Pozdrawiam serdecznie</text>
      <text x="178" y="202" class="tx" text-anchor="end">Ola</text>
      <g class="tx">
        <text x="202" y="38" class="t1">1. miejscowość, data</text>
        <text x="202" y="68" class="t2">2. zwrot do adresata</text>
        <text x="202" y="120" class="t3">3. treść</text>
        <text x="202" y="174" class="t5">4. pozdrowienia</text>
        <text x="202" y="206" class="t1">5. podpis</text>
      </g>
    </svg>`,
    text: `<p><b>List</b> ma części: miejscowość i data (u góry po prawej), zwrot do adresata, treść, pozdrowienia i podpis.</p>
      <p>Na <b>kopercie</b> piszesz adres: imię i nazwisko, ulicę i numer domu, kod pocztowy i miejscowość. Adres <b>adresata</b> (do kogo) – na dole po prawej, adres <b>nadawcy</b> (od kogo) – u góry po lewej.</p>`,
    remember: 'List: miejscowość i data → zwrot → treść → pozdrowienia → podpis.',
    check: { q: 'Co piszesz na samym końcu listu?', options: ['podpis', 'datę', 'zwrot do adresata'], answer: 0, explain: 'List kończysz pozdrowieniami i podpisem.' },
  },
];
