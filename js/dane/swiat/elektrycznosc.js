/* 🌍 Świat – nauka z innych krajów: elektryczność i sterowanie (magnesy, obwody, czujniki).
 * Ścieżka POZA polską podstawą programową (decyzja rodzica, 14.11.2026; plan: docs/PLAN-swiat.md).
 * Działy ułożone według tematów, nie klas: level (1–3), age ([od, do] – sugerowany wiek), requires ('przedmiot/dział'), where – gdzie się tego uczą.
 * Fakty o szkołach za granicą – tylko z dokumentów ministerstw (adresy w polu basis i w js/dane/swiat/zrodla.js). */
(function () {
  const SCI = 'National curriculum in England: science programmes of study, key stages 1 and 2 (Department for Education, wrzesień 2013, gov.uk – obowiązujący, sprawdzone 14.11.2026)';
  const DT3 = 'National curriculum in England: design and technology programmes of study, key stage 3 (Department for Education, wrzesień 2013, gov.uk – obowiązujący, sprawdzone 14.11.2026)';
  const JP_SHO = 'Japonia: 小学校学習指導要領 (podstawa programowa szkoły podstawowej, MEXT, ogłoszona 2017, obowiązuje od 2020; mext.go.jp, plik 20230120-mxt_kyoiku02-100002604_01.pdf)';
  const JP_CHU = 'Japonia: 中学校学習指導要領 (podstawa programowa gimnazjum, MEXT, ogłoszona 2017, obowiązuje od 2021; mext.go.jp, plik 20230120-mxt_kyoiku02-100002604_02.pdf)';
  const JP_WIEK = 'wiek uczniów w Japonii – strona MEXT „就学義務とは” (obowiązek szkolny): szkoła podstawowa od początku roku szkolnego po ukończeniu 6 lat do końca roku, w którym dziecko kończy 12 lat, gimnazjum – do końca roku, w którym kończy 15 lat (art. 17 ustawy o edukacji szkolnej), sprawdzone 14.11.2026';
  const TF = ['Prawda', 'Fałsz'];

  window.SUBJECTS.push({
    id: 'elektrycznosc',
    name: 'Elektryczność i sterowanie',
    icon: '⚡',
    color: '#b7791f',
    topics: [
      // ------------------------------------------------------------------
      {
        id: 'magnesy',
        name: 'Magnesy',
        level: 1,
        age: [7, 9],
        where: 'Anglia – science, Year 3 (dzieci 7–8 lat); Japonia – przyroda w 3. klasie szkoły podstawowej (8–9 lat); Singapur – science, Primary 3 (8–9 lat)',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Źródła (sprawdzone 14.11.2026): (1) ${SCI}, Year 3 „Forces and magnets” (wymagania obowiązkowe): „notice that some forces need contact between two objects, but magnetic forces can act at a distance”, „observe how magnets attract or repel each other and attract some materials and not others”, „compare and group together a variety of everyday materials on the basis of whether they are attracted to a magnet, and identify some magnetic materials”, „describe magnets as having two poles”, „predict whether two magnets will attract or repel each other, depending on which poles are facing”; Year 3 = dzieci 7–8 lat (gov.uk/national-curriculum). (2) ${JP_SHO}, 理科 (przyroda) 第3学年 A⑷ „磁石の性質”, s. 96: są przedmioty przyciągane i nieprzyciągane przez magnes, niektóre przedmioty zbliżone do magnesu same stają się magnesem, bieguny różnoimienne się przyciągają, jednoimienne odpychają; uwaga do realizacji: siła przyciągania zależy od odległości magnesu od przedmiotu; ${JP_WIEK}. (3) Singapur: Science Teaching and Learning Syllabus, Primary Three to Six (MOE, od rocznika P3 2023, aktualizacja styczeń 2026), P3 „Interaction of Forces (Magnets)”: „Magnets have two poles. A freely suspended bar magnet comes to rest pointing in a North-South direction. Unlike poles attract and like poles repel. Magnets attract magnetic materials.”, „Make a magnet by the stroke method and the electrical method”, „Recognise uses of magnets in everyday objects”; wiek: do Primary 1 w 2027 r. zapisuje się dzieci urodzone 2.01.2020–1.01.2021 (moe.gov.sg, P1 Registration), więc w Primary 3 dzieci mają 8–9 lat. Wiedza o magnesach – e-materiały zpe.gov.pl: „Co to jest magnes?” (dwa bieguny, jednakowe się odpychają, różne przyciągają; przedmioty zawierające żelazo są bardzo silnie przyciągane; magnesy w zatrzaskach szafek, silnikach, dynamach; po podzieleniu magnesu powstają dwa magnesy, bieguny zawsze występują parami), „Oddziaływania magnetyczne” (oddziaływanie na odległość; magnes przyciąga przedmioty ze stali i żelaza, a przedmioty z miedzi, złota, srebra i aluminium się nie poruszyły; drewniana linijka, kartka, gumka – w ćwiczeniu; najsilniej przy biegunach; magnes zawieszony na sznurku ustawia się wzdłuż linii północ–południe, biegun północny wskazuje północ; żelazo blisko magnesu uzyskuje własności magnetyczne), „Cechy linii pola magnetycznego” (pole maleje wraz z odległością od magnesu). Polska (tekst podstaw, 14.11.2026): w edukacji wczesnoszkolnej (Dz.U. 2024 poz. 996, I etap) magnesów nie ma; są w przyrodzie kl. IV–VI nowej podstawy (Dz.U. 2026 poz. 378, dz. 5 wym. 4) i w fizyce kl. VII–VIII (Dz.U. 2024 poz. 996, dz. VII). Metody elektrycznej z programu Singapuru nie opisujemy (to temat działu o obwodach). Sposób uczenia (pilotaż rozszerzonych źródeł, decyzja rodzica 14.11.2026): (4) Japonia – 小学校学習指導要領（平成29年告示）解説 理科編 (oficjalny komentarz MEXT do podstawy przyrody, mext.go.jp, plik 20211020-mxt_kyoiku02-100002607_05.pdf): s. 10 – tok lekcji przyrody „問題解決の過程”: zauważenie zjawiska, postawienie problemu, przewidywanie (hipoteza), plan sprawdzenia, obserwacja/doświadczenie, opracowanie wyników, wnioskowanie, wniosek; s. 13 i „第３学年” – w kl. 3 nacisk na porównywanie (różnice i podobieństwa) i stawianie pytań; s. 35–36 (magnesy): przykładanie magnesu do rzeczy z otoczenia i porównywanie, wyniki zapisywane w tabeli, wyczuwanie siły ręką, zbliżanie magnesu do igły kompasu (siła działa także przez odstęp), siła zależy od odległości, magnes swobodnie poruszający się – niezależnie od kształtu i wielkości – zatrzymuje się w kierunku północ–południe, koniec wskazujący północ nazwano N, południe – S; magnesy sztabkowe i podkowiaste; nie zbliżać do kart magnetycznych i rzeczy wrażliwych na magnes; magnesy w życiu codziennym; tłumaczenia – nasze. (5) Anglia – „Notes and guidance (non-statutory)” do Year 3 (${SCI}): różne magnesy („bar, ring, button and horseshoe”), porównanie siły magnesów w uczciwy sposób („finding a fair way to compare them”), sortowanie materiałów. Kompas z igły – e-materiał zpe.gov.pl „Jak działa kompas?” (igła do szycia, silny magnes, korek lub styropian, naczynie z wodą; kompas nie działa dobrze przy przedmiotach z żelaza i przy magnesach). Ostrzeżenie o połykaniu małych magnesów – komunikaty UOKiK o kulkach magnetycznych (treść znana tylko z wyników wyszukiwarki – strona archiwum.uokik.gov.pl niedostępna z sesji). Sposób liczenia spinaczy przy porównywaniu magnesów – nasz przykład.`,
        theory: `
          <h3>Jak to jest na świecie?</h3>
          <p>W <b>Anglii</b>, <b>Japonii</b> i <b>Singapurze</b> dzieci w wieku 7–9 lat badają <b>magnesy</b> na lekcjach przyrody.</p>
          <h3>Jak uczą tego w Japonii?</h3>
          <p>Japońska lekcja przyrody to praca <b>badacza</b>:</p>
          <p><b>👀 zauważ → ❓ zapytaj → 🤔 przewiduj → 🔬 sprawdź → 📝 zapisz → 💡 wniosek</b></p>
          <p>W 3. klasie najważniejsze jest <b>porównywanie</b>: czym rzeczy się różnią, a co mają wspólnego. Dzieci przykładają magnes do rzeczy z klasy i zapisują wyniki w <b>tabeli</b>. Czują ręką, jak magnes ciągnie. Zbliżają magnes do igły kompasu.</p>
          <h3>Jak uczą tego w Anglii?</h3>
          <p>Dzieci poznają różne magnesy: <b>sztabkowy</b>, <b>pierścieniowy</b>, <b>guzikowy</b> i <b>podkowę</b>. Szukają <b>uczciwego sposobu</b>, żeby porównać, który jest najsilniejszy – np. każdy magnes podnosi <b>te same</b> spinacze.</p>
          <h3>Co przyciąga magnes?</h3>
          <p>✅ Rzeczy z <b>żelaza</b> i ze <b>stali</b>: gwóźdź, spinacz, szpilkę.</p>
          <p>❌ Drewna, papieru, gumki do ścierania.</p>
          <p class="tip">Niespodzianka! Nie każdy metal. Miedzi, złota, srebra i aluminium (np. folii aluminiowej) magnes nie przyciąga.</p>
          <h3>Dwa bieguny</h3>
          <p>Każdy magnes ma <b>dwa bieguny</b>: północny <b>N</b> i południowy <b>S</b>. Przy biegunach przyciąga najmocniej.</p>
          <ul>
            <li><b>Różne</b> bieguny (N i S) – <b>przyciągają się</b>.</li>
            <li><b>Takie same</b> (N i N, S i S) – <b>odpychają się</b>.</li>
          </ul>
          <p>Przetniesz magnes na pół? Dostaniesz <b>dwa magnesy</b> – każdy ma N i S.</p>
          <h3>Siła na odległość</h3>
          <p>Magnes przyciąga spinacz, nawet gdy go <b>nie dotyka</b>. Im <b>bliżej</b>, tym mocniej.</p>
          <h3>Magnes na nitce</h3>
          <p>Zawieś magnes na nitce. Sam ustawi się w kierunku <b>północ–południe</b>. Duży czy mały, sztabka czy podkowa – <b>zawsze</b> tak samo. Koniec, który pokazuje <b>północ</b>, nazwano <b>N</b> (biegun północny), a ten od południa – <b>S</b>. Tak działa igła kompasu.</p>
          <h3>Gwóźdź jak magnes</h3>
          <p>Żelazny gwóźdź przy magnesie <b>sam staje się magnesem</b> i przyciąga spinacze. W Singapurze dzieci robią magnes z gwoździa – <b>pocierają go magnesem</b>.</p>
          <h3>🔬 Zrób w domu: kompas z igły</h3>
          <p>Z pomocą dorosłego – igła jest ostra! Potrzyj igłę do szycia silnym magnesem. Wbij ją w korek (albo połóż na kawałku styropianu) i połóż na wodzie w misce. Igła obróci się i pokaże <b>północ–południe</b>. Trzymaj z daleka inne magnesy i rzeczy z żelaza – psują wynik.</p>
          <h3>Gdzie są magnesy?</h3>
          <p>W zatrzaskach drzwiczek szafek, w silnikach, w dynamie rowerowym, na drzwiach lodówki.</p>
          <h3>Uważaj!</h3>
          <ul>
            <li>Nie zbliżaj magnesu do <b>kart z paskiem magnetycznym</b> – mogą się zepsuć.</li>
            <li>Małych magnesów (np. kulek magnetycznych) <b>nigdy nie bierz do ust</b>. Połknięte magnesy mogą się przyciągnąć w brzuchu i bardzo zaszkodzić – wtedy od razu do lekarza.</li>
          </ul>`,
        infographicNote: 'Na górze – kto uczy się o magnesach. Niżej – co magnes potrafi.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🌍 Anglia, Japonia, Singapur', text: 'dzieci 7–9 lat badają magnesy' },
          items: [
            { icon: '📎', kolor: 3, title: 'Przyciąga', text: 'żelazo i stal' },
            { icon: '🪵', kolor: 2, title: 'Nie przyciąga', text: 'drewna, papieru, miedzi' },
            { icon: '🧲', kolor: 1, title: 'Dwa bieguny', text: 'N i S' },
            { icon: '🤝', kolor: 3, title: 'N i S', text: 'przyciągają się' },
            { icon: '↔️', kolor: 2, title: 'N i N, S i S', text: 'odpychają się' },
            { icon: '🧭', kolor: 5, title: 'Na nitce', text: 'N pokazuje północ' },
          ],
          bottom: { kolor: 4, title: '💡 Gwóźdź przy magnesie', text: 'sam staje się magnesem' },
        },
        materials: [
          { type: 'film', title: 'Co to jest magnes? – film o biegunach', url: 'https://zpe.gov.pl/a/co-to-jest-magnes/D7sD8pXPF', source: 'ZPE (zpe.gov.pl) – przyroda, „Świat pod lupą”', license: 'filmy CC BY 3.0', note: 'Film: dwa magnesy zbliżane tymi samymi i różnymi biegunami. Niżej film z opiłkami żelaza wokół magnesu i zdjęcie magnetytu – kamienia, który przyciąga żelazo.', expect: 'Co to jest magnes?' },
          { type: 'film', title: 'Jak działa kompas? – i jak zrobić własny', url: 'https://zpe.gov.pl/a/jak-dziala-kompas/DiTVdtwnf', source: 'ZPE (zpe.gov.pl) – przyroda, „Świat pod lupą”', license: 'filmy CC BY 3.0', note: 'Dwa filmy: igła kompasu ucieka za magnesem; kompas z igły, korka i miski z wodą – krok po kroku.', expect: 'Jak działa kompas?' },
          { type: 'lekcja', title: 'What is a magnet? – ta sama lekcja po angielsku', url: 'https://zpe.gov.pl/a/what-is-a-magnet/D11clcRTO', lang: 'en', source: 'ZPE (zpe.gov.pl) – fizyka, wersja angielska', note: 'Dla chętnych: tekst i nagranie po angielsku – słowa poles, north, south, attract.', expect: 'What is a magnet?' },
          { type: 'dokument', forParent: true, title: 'Komentarz do podstawy przyrody (Japonia, MEXT) – magnesy: s. 35–36, tok lekcji: s. 10', url: 'https://www.mext.go.jp/content/20211020-mxt_kyoiku02-100002607_05.pdf', lang: 'ja', source: 'Ministerstwo edukacji Japonii (MEXT), 小学校学習指導要領解説 理科編' },
          { type: 'dokument', forParent: true, title: 'Program przyrody Anglii, key stages 1–2 – Year 3 „Forces and magnets” (s. 19)', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study', lang: 'en', source: 'Department for Education (gov.uk)' },
          { type: 'dokument', forParent: true, title: 'Sylabus przyrody Singapuru, Primary 3–6 – „Magnets”', url: 'https://www.moe.gov.sg/media/files/primary/syllabus/ba3562d3-5b31-4459-8693-45cde7b97273.pdf', lang: 'en', source: 'Ministry of Education Singapore (moe.gov.sg)' },
        ],
        flashcards: [
          ['Magnes przyciąga…', '…żelazo i stal: gwóźdź, spinacz, szpilkę'],
          ['Magnes nie przyciąga…', '…drewna, papieru, gumki – ani miedzi, złota i srebra'],
          ['Ile biegunów ma magnes?', 'dwa: północny N i południowy S'],
          ['N i S', 'przyciągają się'],
          ['N i N albo S i S', 'odpychają się'],
          ['Gdzie magnes przyciąga najmocniej?', 'przy biegunach – na końcach'],
          ['Bliżej czy dalej?', 'im bliżej magnesu, tym mocniej przyciąga'],
          ['Magnes na nitce', 'ustawia się północ–południe; N pokazuje północ'],
          ['Przecięty magnes', 'dwa magnesy – każdy ma N i S'],
          ['Gwóźdź przy magnesie', 'sam staje się magnesem'],
          ['Magnes z gwoździa (Singapur)', 'gwóźdź pocierany magnesem staje się magnesem'],
          ['Badacz po japońsku', 'zauważ → zapytaj → przewiduj → sprawdź → zapisz → wniosek'],
          ['Skąd nazwa N?', 'N to koniec magnesu, który pokazuje północ'],
          ['Kompas z igły', 'igła potarta magnesem, na korku na wodzie – pokazuje północ–południe'],
          ['Uczciwe porównanie magnesów', 'każdy magnes sprawdzasz tak samo – np. tymi samymi spinaczami'],
          ['Uważaj!', 'magnes z dala od kart z paskiem; małych magnesów nie bierz do ust'],
        ],
        questions: [
          { id: 'a4w5cu', q: 'Który przedmiot przyciągnie magnes?', options: ['żelazny gwóźdź', 'drewniana linijka', 'kartka papieru'], answer: 0, explain: 'Magnes przyciąga rzeczy z żelaza i ze stali. Drewna i papieru nie przyciąga.' },
          { id: 'hp7wuw', q: 'Którego przedmiotu magnes NIE przyciągnie?', options: ['gumki do ścierania', 'stalowego spinacza', 'stalowej szpilki'], answer: 0, explain: 'Spinacz i szpilka są ze stali – magnes je przyciąga. Gumki nie przyciąga.' },
          { id: '4hnpxw', q: 'Czy magnes przyciąga każdy metal?', options: ['nie – np. miedzi nie przyciąga', 'tak – przyciąga każdy metal', 'tylko metale srebrnego koloru'], answer: 0, explain: 'Magnes przyciąga żelazo i stal. Miedzi, złota, srebra i aluminium nie przyciąga.' },
          { id: 't2ebns', q: 'Ile biegunów ma każdy magnes?', options: ['2', '1', '4'], answer: 0, explain: 'Każdy magnes ma dwa bieguny: północny N i południowy S.', sayExplain: 'Każdy magnes ma dwa bieguny: północny i południowy.' },
          { id: '9gbx8l', q: 'Zbliżasz dwa magnesy: biegun N do bieguna S. Co się stanie?', say: 'Zbliżasz dwa magnesy: biegun północny do bieguna południowego. Co się stanie?', options: ['przyciągną się', 'odepchną się', 'nic się nie stanie'], answer: 0, explain: 'Różne bieguny się przyciągają.' },
          { id: '4svvxe', q: 'Zbliżasz dwa magnesy: biegun S do bieguna S. Co się stanie?', say: 'Zbliżasz dwa magnesy: biegun południowy do bieguna południowego. Co się stanie?', options: ['odepchną się', 'przyciągną się', 'nic się nie stanie'], answer: 0, explain: 'Takie same bieguny się odpychają.' },
          { id: 'ukmkol', q: 'Prawda czy fałsz?\nMagnes może przyciągnąć spinacz, nawet gdy go nie dotyka.', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. Siła magnesu działa na odległość – spinacz sam podskoczy do magnesu.' },
          { id: 'bxvz7v', q: 'Gdzie magnes przyciąga najmocniej?', options: ['na końcach – przy biegunach', 'w samym środku magnesu', 'wszędzie tak samo mocno'], answer: 0, explain: 'Najwięcej spinaczy zbiera się na końcach magnesu, przy biegunach. Tam siła jest największa.' },
          { id: 'ympxs7', q: 'Magnes nie może podnieść spinacza z daleka. Co zrobić?', options: ['przybliżyć magnes', 'odsunąć magnes dalej', 'odwrócić spinacz'], answer: 0, explain: 'Im bliżej magnesu, tym mocniej przyciąga.' },
          { id: 'cob8ap', q: 'Magnes wisi na nitce i może się swobodnie kręcić. Jak się ustawi?', options: ['północ–południe', 'wschód–zachód', 'zawsze w stronę okna'], answer: 0, explain: 'Swobodnie zawieszony magnes ustawia się w kierunku północ–południe. Tak działa kompas.' },
          { id: 'gk7bjn', q: 'Magnes wisi na nitce. W którą stronę świata pokazuje jego biegun N?', say: 'Magnes wisi na nitce. W którą stronę świata pokazuje jego biegun północny?', options: ['na północ', 'na południe', 'na wschód'], answer: 0, explain: 'Biegun północny magnesu pokazuje północ.' },
          { id: '902bvu', q: 'Przecinasz magnes na pół. Co dostajesz?', options: ['dwa magnesy, każdy z N i S', 'osobno N i osobno S', 'dwa kawałki bez magnesu'], sayOptions: ['dwa magnesy, każdy z biegunem północnym i południowym', 'osobno biegun północny i osobno południowy', 'dwa kawałki bez magnesu'], answer: 0, explain: 'Z jednego magnesu powstają dwa. Każdy ma oba bieguny – bieguny zawsze są parami.' },
          { id: 'iwun7k', q: 'Do magnesu przyczepił się żelazny gwóźdź. Co teraz potrafi gwóźdź?', options: ['sam przyciąga spinacze', 'przyciąga drewniane klocki', 'nic – to zwykły gwóźdź'], answer: 0, explain: 'Żelazo przy magnesie samo staje się magnesem. Gwóźdź przyciąga spinacze.' },
          { id: 'z0r2mi', q: 'Jak dzieci w Singapurze robią magnes z żelaznego gwoździa?', options: ['pocierają go magnesem', 'malują go na czerwono', 'moczą go w wodzie'], answer: 0, explain: 'Program Singapuru mówi: zrób magnes metodą pocierania – gwóźdź pociera się magnesem.' },
          { id: 'd2heuc', q: 'Gdzie w domu jest magnes?', options: ['w zatrzasku drzwiczek szafki', 'w drewnianej łyżce do zupy', 'w szklance do picia wody'], answer: 0, explain: 'Magnes w zatrzasku trzyma drzwiczki szafki zamknięte.' },
          { id: 'mqhpve', q: 'Folia aluminiowa to metal. Czy magnes ją przyciągnie?', options: ['nie', 'tak'], answer: 0, explain: 'Nie! Magnes przyciąga żelazo i stal, a aluminium – nie. Nie każdy metal jest przyciągany.' },
          { id: 'xubvl9', q: 'Mały magnes i duży magnes-podkowa wiszą swobodnie. Jak się ustawią?', options: ['oba północ–południe', 'tylko duży północ–południe', 'każdy w inną stronę'], answer: 0, explain: 'Każdy magnes – duży czy mały, sztabka czy podkowa – ustawia się w kierunku północ–południe.' },
          { id: 'etxtzv', q: 'Dlaczego jeden koniec magnesu nazywa się N, czyli biegun północny?', say: 'Dlaczego jeden koniec magnesu nazywa się biegunem północnym?', options: ['bo pokazuje północ', 'bo jest cięższy', 'bo jest zawsze czerwony'], answer: 0, explain: 'Swobodnie zawieszony magnes pokazuje jednym końcem północ – ten koniec nazwano N, biegun północny.', sayExplain: 'Swobodnie zawieszony magnes pokazuje jednym końcem północ – ten koniec nazwano biegunem północnym.' },
          { id: 'iidode', q: 'Japońscy uczniowie badają magnesy jak badacze. Co robią zaraz przed doświadczeniem?', options: ['przewidują, co się stanie', 'piszą wniosek', 'uczą się wyniku na pamięć'], answer: 0, explain: 'Najpierw przewiduję, potem sprawdzam doświadczeniem, zapisuję wynik i dopiero wtedy piszę wniosek.' },
          { id: 'tvd2s8', q: 'Chcesz uczciwie sprawdzić, który z dwóch magnesów jest silniejszy. Jak?', options: ['oba sprawdzam tymi samymi spinaczami', 'każdy sprawdzam innymi rzeczami', 'wybieram ten, który jest ładniejszy'], answer: 0, explain: 'Uczciwe porównanie: wszystko tak samo, zmienia się tylko magnes. Np. liczysz, ile tych samych spinaczy utrzyma każdy z nich.' },
          { id: 'gxzt6r', q: 'Jak zrobić kompas z igły do szycia?', options: ['potrzeć igłę magnesem i położyć na korku na wodzie', 'pomalować igłę farbą i położyć ją na stole', 'włożyć igłę na całą noc do zamrażarki'], answer: 0, explain: 'Igła potarta magnesem sama staje się magnesem. Na korku na wodzie może się swobodnie obracać – pokaże północ–południe.' },
          { id: 'wg9rlw', q: 'Czego NIE zbliżać do magnesu?', options: ['karty z paskiem magnetycznym', 'drewnianego klocka z zabawek', 'kartki papieru z zeszytu'], answer: 0, explain: 'Magnes może zepsuć kartę z paskiem magnetycznym. Drewnu i papierowi nic nie zrobi.' },
          { id: 'j3vhck', q: 'Ile lat mają dzieci w Anglii, gdy w Year 3 badają magnesy?', say: ['Ile lat mają dzieci w Anglii, gdy w', ['Year 3', 'en'], 'badają magnesy?'], options: ['7–8 lat', '3–4 lata', '14–15 lat'], sayOptions: ['7 do 8 lat', '3 do 4 lat', '14 do 15 lat'], answer: 0, explain: 'Year 3 to dzieci w wieku 7–8 lat.' },
        ],
      },
      // ------------------------------------------------------------------
      {
        id: 'czujniki',
        name: 'Czujniki i sterowanie',
        level: 3,
        age: [12, 15],
        requires: ['informacja/bramki-logiczne'],
        where: 'Anglia – design and technology, key stage 3 (uczniowie 11–14 lat): czujniki, mikrokontrolery, elementy wykonawcze; Japonia – gimnazjum (12–15 lat), technika: programowanie pomiaru i sterowania',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Źródła (sprawdzone 14.11.2026): (1) ${DT3}, „Technical knowledge”: „apply computing and use electronics to embed intelligence in products that respond to inputs [for example, sensors], and control outputs [for example, actuators], using programmable components [for example, microcontrollers]” oraz „understand how more advanced electrical and electronic systems can be powered and used in their products [for example, circuits with heat, light, sound and movement as inputs and outputs]” (nawiasy „for example” – przykłady); key stage 3 = uczniowie 11–14 lat, Year 7–9 (gov.uk/national-curriculum). (2) ${JP_CHU}, 技術・家庭 (technika i gospodarstwo domowe), 技術分野 (część techniczna), D „情報の技術” ⑶, s. 134: rozwiązywanie problemów z życia i społeczeństwa przez „計測・制御のプログラミング” (programowanie pomiaru i sterowania): zrozumienie budowy systemu pomiaru i sterowania, bezpieczne tworzenie programu, sprawdzanie działania i usuwanie błędów, projektowanie na podstawie przepływu danych wejściowych i wyjściowych; ${JP_WIEK}. Wiedza o automatyce – e-materiały zpe.gov.pl: „Rodzaje elementów i urządzeń automatyki przemysłowej” (sterownik PLC monitoruje sygnały z czujników i według zaprogramowanej logiki steruje urządzeniami wykonawczymi; moduł wejść zbiera informacje o stanie czujników i przełączników – stan wysoki albo niski; wyjścia – elektrozawory, przekaźniki, silniki, lampki; sygnały dwustanowe: włączony/wyłączony, prawda/fałsz; czujnik optyczny – emituje światło i rejestruje odbicie lub pochłanianie; czujnik ultradźwiękowy – wysyła i odbiera ultradźwięki, z czasu ich rozchodzenia się mierzy odległość; czujniki ciśnienia i poziomu cieczy; serwomotor w pętli zamkniętej – urządzenie sprzężenia zwrotnego dostarcza informacje, a silnik jest dostosowywany do zadanych parametrów), „Słownik pojęć” do e-materiału o przeglądach układów automatyki (czujnik zamienia wielkość fizyczną na sygnał dla układu sterowania; elementy wykonawcze, np. pompy, zamieniają sygnał sterujący na działanie). Programy w dziale to pseudokod w stylu Pythona napisany do aplikacji (funkcje czujnik_swiatla() itp. są wymyślone); wyniki sprawdzone przez prześledzenie warunków. Przykłady urządzeń (lampa przy drzwiach, alarm, grzałka, podlewanie) – wymyślone do zadań.`,
        theory: `
          <h3>Jak to jest w Anglii i w Japonii?</h3>
          <p>W <b>Anglii</b> uczniowie w wieku 11–14 lat (key stage 3) na <i>design and technology</i> budują produkty, które „reagują na <b>wejścia</b> (np. czujniki) i sterują <b>wyjściami</b> (np. elementami wykonawczymi) za pomocą elementów programowalnych (np. <b>mikrokontrolerów</b>)”.</p>
          <p>W <b>Japonii</b> w gimnazjum (12–15 lat) jest przedmiot „technika i gospodarstwo domowe”. W części o technice informacyjnej uczniowie rozwiązują problemy z życia, <b>programując pomiar i sterowanie</b>: poznają budowę takiego systemu, piszą program, sprawdzają go i usuwają błędy.</p>
          <h3>Wejście → sterownik → wyjście</h3>
          <ul>
            <li><b>Czujnik</b> (wejście) – mierzy coś w otoczeniu i zamienia to na sygnał elektryczny.</li>
            <li><b>Sterownik</b> (np. mikrokontroler, w fabryce sterownik PLC) – wykonuje <b>program</b>: na podstawie sygnałów z czujników decyduje, co włączyć.</li>
            <li><b>Element wykonawczy</b> (wyjście) – robi coś w świecie: silnik, lampka, brzęczyk, grzałka, pompa, zawór.</li>
          </ul>
          <h3>Rodzaje czujników</h3>
          <ul>
            <li><b>optyczny</b> – światło (wysyła światło i sprawdza jego odbicie albo mierzy, jak jest jasno),</li>
            <li><b>ultradźwiękowy</b> – odległość: wysyła ultradźwięki i mierzy czas, po jakim wróci echo,</li>
            <li>czujniki <b>temperatury</b>, <b>ciśnienia</b>, <b>poziomu cieczy</b>.</li>
          </ul>
          <p><b>Dwustanowy</b> czujnik (np. przycisk) daje tylko 1 albo 0 – włączony albo wyłączony. <b>Pomiarowy</b> daje liczbę, np. jasność.</p>
          <h3>Program: mierz → porównaj → steruj</h3>
          <div class="pis"><pre>while True:
    jasnosc = czujnik_swiatla()
    if jasnosc &lt; 30:
        lampa_wlacz()
    else:
        lampa_wylacz()</pre></div>
          <p>Pętla działa w kółko: sterownik ciągle mierzy i reaguje. Uważaj na granicę: przy <code>jasnosc = 30</code> warunek <code>30 &lt; 30</code> jest fałszywy – lampa się wyłącza.</p>
          <h3>Kilka czujników – logika</h3>
          <p>Lampa przy drzwiach: <code>if ciemno and ktos_blisko:</code> – świeci tylko wtedy, gdy <b>oba</b> warunki są prawdziwe (AND). Alarm: <code>if drzwi_otwarte or okno_otwarte:</code> – wystarczy <b>jeden</b> (OR).</p>
          <h3>Sprzężenie zwrotne</h3>
          <p>Czujnik mierzy <b>skutek</b> tego, co zrobił element wykonawczy, a sterownik poprawia działanie. To <b>pętla zamknięta</b>. Przykład: grzałka grzeje wodę, czujnik mierzy temperaturę, a sterownik wyłącza grzałkę, gdy woda jest dość ciepła.</p>`,
        infographicNote: 'Czytaj od góry: czujnik → sterownik → element wykonawczy, a skutek znów mierzy czujnik.',
        infographic: {
          type: 'kroki', cykl: true,
          top: { kolor: 4, title: '🌍 Anglia 11–14 lat, Japonia 12–15 lat', text: 'programują pomiar i sterowanie' },
          items: [
            { icon: '🌡️', kolor: 1, title: 'Czujnik – wejście', text: 'mierzy: światło, odległość, temperaturę' },
            { icon: '🧠', kolor: 5, title: 'Sterownik – program', text: 'mierz → porównaj → steruj, w pętli' },
            { icon: '⚙️', kolor: 3, title: 'Element wykonawczy – wyjście', text: 'silnik, lampka, brzęczyk, grzałka' },
            { icon: '🔁', kolor: 2, title: 'Sprzężenie zwrotne', text: 'czujnik mierzy skutek – sterownik poprawia' },
          ],
          bottom: { kolor: 4, title: '💡 Kilka czujników', text: 'łącz warunki: AND – oba, OR – choć jeden' },
        },
        flashcards: [
          ['Czujnik', 'mierzy coś w otoczeniu i zamienia to na sygnał elektryczny (wejście)'],
          ['Sterownik (mikrokontroler)', 'wykonuje program: z sygnałów czujników decyduje, co włączyć'],
          ['Element wykonawczy', 'robi coś w świecie: silnik, lampka, brzęczyk, grzałka, pompa (wyjście)'],
          ['Wejście → sterownik → wyjście', 'czujnik → program → element wykonawczy'],
          ['Czujnik optyczny', 'reaguje na światło'],
          ['Czujnik ultradźwiękowy', 'mierzy odległość: czas, po jakim wraca echo'],
          ['Czujnik dwustanowy', 'daje tylko 1 albo 0 – włączony albo wyłączony'],
          ['while True:', 'pętla bez końca – sterownik ciągle mierzy i reaguje'],
          ['Sprzężenie zwrotne', 'czujnik mierzy skutek działania, a sterownik je poprawia (pętla zamknięta)'],
          ['Anglia – key stage 3', 'uczniowie 11–14 lat: czujniki, mikrokontrolery, elementy wykonawcze'],
          ['Japonia – gimnazjum', 'uczniowie 12–15 lat: programowanie pomiaru i sterowania'],
        ],
        questions: [
          { id: '81g9lr', q: 'Która część układu sterowania jest „wejściem”?', options: ['czujnik', 'silnik', 'brzęczyk', 'lampka'], answer: 0, explain: 'Czujnik mierzy coś w otoczeniu i przekazuje sygnał do sterownika – to wejście. Silnik, brzęczyk i lampka to wyjścia (elementy wykonawcze).' },
          { id: 'isnrvp', q: 'Który z tych elementów jest elementem wykonawczym (wyjściem)?', options: ['silnik', 'czujnik światła', 'czujnik odległości', 'mikrokontroler'], answer: 0, explain: 'Element wykonawczy robi coś w świecie – silnik daje ruch. Czujniki to wejścia, a mikrokontroler to sterownik.' },
          { id: '8j6g6p', q: 'Co robi sterownik (np. mikrokontroler)?', options: ['wykonuje program i decyduje, co włączyć', 'zamienia światło na sygnał elektryczny', 'wytwarza ruch, światło albo dźwięk', 'mierzy odległość za pomocą echa'], answer: 0, explain: 'Sterownik dostaje sygnały z czujników i według programu steruje elementami wykonawczymi. Pozostałe odpowiedzi opisują czujniki albo elementy wykonawcze.' },
          { id: '6sr61n', q: 'Jak czujnik ultradźwiękowy mierzy odległość?', options: ['wysyła ultradźwięki i mierzy czas powrotu echa', 'świeci laserem i sprawdza kolor przeszkody', 'mierzy temperaturę przeszkody przed sobą', 'waży przedmiot, który stoi tuż przed nim'], answer: 0, explain: 'Czujnik wysyła ultradźwięki i odbiera echo. Im dłużej echo wraca, tym przeszkoda jest dalej.' },
          { id: 'a1k103', q: 'Program:\nif jasnosc < 30: lampa_wlacz()\nelse: lampa_wylacz()\n\nCzujnik zmierzył jasnosc = 20. Co zrobi program?', options: ['włączy lampę', 'wyłączy lampę', 'zgłosi błąd'], answer: 0, explain: '20 < 30 to prawda, więc program wykonuje lampa_wlacz().' },
          { id: 'tmss7q', q: 'Program:\nif jasnosc < 30: lampa_wlacz()\nelse: lampa_wylacz()\n\nCzujnik zmierzył jasnosc = 30. Co zrobi program?', options: ['wyłączy lampę', 'włączy lampę', 'zgłosi błąd'], answer: 0, explain: '30 < 30 to fałsz (30 nie jest mniejsze od 30), więc wykonuje się else: lampa_wylacz(). Uważaj na granicę!' },
          { id: '6q47x2', q: 'Dlaczego program sterownika jest zwykle w pętli while True?', options: ['ma ciągle mierzyć i reagować na zmiany', 'pętla sprawia, że czujnik jest dokładniejszy', 'bez pętli program nie dałby się zapisać', 'pętla oszczędza baterie w urządzeniu'], answer: 0, explain: 'Otoczenie ciągle się zmienia (robi się ciemno, ktoś podchodzi), więc sterownik musi mierzyć i reagować w kółko.' },
          { id: '8couoy', q: 'Lampa przy drzwiach: if ciemno and ktos_blisko: świeci.\nJest ciemno, ale nikogo nie ma. Co robi lampa?', options: ['nie świeci', 'świeci jasno', 'mruga co chwilę'], answer: 0, explain: 'AND daje prawdę tylko wtedy, gdy oba warunki są prawdziwe. ktos_blisko to fałsz, więc lampa nie świeci.' },
          { id: 'nyiy77', q: 'Alarm: if drzwi_otwarte or okno_otwarte: piszczy.\nOkno jest otwarte, drzwi zamknięte. Co robi alarm?', options: ['piszczy', 'milczy', 'piszczy dopiero po zamknięciu okna'], answer: 0, explain: 'OR wystarcza jeden prawdziwy warunek. Okno jest otwarte, więc alarm piszczy.' },
          { id: 'fix7an', q: 'Co to jest sprzężenie zwrotne?', options: ['czujnik mierzy skutek działania, a sterownik je poprawia', 'sterownik sam wyłącza się po ustalonym czasie', 'dwa czujniki mierzą dokładnie tę samą rzecz', 'element wykonawczy działa bez żadnego programu'], answer: 0, explain: 'W pętli zamkniętej czujnik sprawdza, co się stało po działaniu elementu wykonawczego, a sterownik na tej podstawie poprawia działanie.' },
          { id: '2cyd42', q: 'Grzałka w akwarium: if temp < 24: grzałka_wlacz()\nelse: grzałka_wylacz()\n\nCzujnik pokazuje temp = 25. Co robi grzałka?', options: ['jest wyłączona', 'jest włączona', 'włącza się na minutę'], answer: 0, explain: '25 < 24 to fałsz, więc wykonuje się else – grzałka się wyłącza. Gdy woda ostygnie poniżej 24, grzałka znów się włączy – to sprzężenie zwrotne.' },
          { id: 'jgg9or', q: 'Co angielski program design and technology (key stage 3) podaje jako przykład elementu programowalnego?', options: ['mikrokontroler', 'czujnik', 'element wykonawczy'], answer: 0, explain: 'Program mówi: wejścia – np. czujniki, wyjścia – np. elementy wykonawcze, elementy programowalne – np. mikrokontrolery.' },
          { id: '722s7x', q: 'W jakim wieku są japońscy uczniowie gimnazjum, którzy na technice programują pomiar i sterowanie?', options: ['12–15 lat', '6–9 lat', '16–18 lat'], answer: 0, explain: 'Japońskie gimnazjum trwa 3 lata – do końca roku szkolnego, w którym uczeń kończy 15 lat.' },
          { id: 'k7ik52', q: 'Czujnik dwustanowy (np. przycisk) przekazuje do sterownika…', options: ['tylko dwa stany: włączony albo wyłączony', 'dokładną temperaturę w stopniach', 'dowolną liczbę od 0 do 1000'], answer: 0, explain: 'Dwustanowy znaczy: tylko dwa stany – 1 albo 0, włączony albo wyłączony.' },
          { id: 'w1mw6b', q: 'Automatyczne podlewanie ma czujnik wilgotności gleby, sterownik i pompę. Co jest elementem wykonawczym?', options: ['pompa', 'czujnik wilgotności', 'sterownik'], answer: 0, explain: 'Pompa robi coś w świecie – podaje wodę. Czujnik to wejście, a sterownik wykonuje program.' },
          { id: 'yoyq9y', q: 'Prawda czy fałsz?\nCzujnik zamienia to, co mierzy (np. światło), na sygnał elektryczny dla sterownika.', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. Sterownik „rozumie” tylko sygnały elektryczne – czujnik zamienia na nie światło, odległość czy temperaturę.' },
        ],
      },
    ],
  });
})();
