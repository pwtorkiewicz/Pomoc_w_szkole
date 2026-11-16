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
        where: 'Anglia – science, Year 3 (dzieci 7–8 lat); Japonia – przyroda w 3. klasie (8–9 lat); Singapur – science, Primary 3 (8–9 lat); Korea – przyroda w kl. 3–4 (projekt urządzenia z magnesem); USA – standardy NGSS dla grade 3',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Dział według standardu „różnicy” (decyzja rodzica 14.11.2026): wspólne z polską szkołą tylko jako przypomnienie, rdzeń – to, czego polska podstawa nie ma. POLSKA (tekst podstaw, eli.gov.pl, sprawdzone 14.11.2026): w edukacji wczesnoszkolnej – starej (Dz.U. 2024 poz. 996) i nowej (Dz.U. 2026 poz. 378: „bada działanie różnych sił, w tym grawitacji, tarcia, sprężystości i nacisku”; kompas tylko jako narzędzie) – magnesów nie ma; nowa przyroda kl. IV–VI, dz. 5 wym. 4: „bada i rozróżnia materiały magnetyczne, demonstruje oddziaływania magnetyczne, omawia zasadę działania kompasu i zjawisko ziemskiego magnetyzmu”; stara fizyka (dz. VII) – bieguny, kompas, elektromagnes fakultatywnie; nowa fizyka – tylko nazwanie sił magnetycznych. W żadnym z tekstów nie ma: zależności siły od odległości, działania przez materiały, namagnesowania przedmiotu, uczciwego porównania magnesów, projektu urządzenia z magnesem; elektromagnesu nie ma w nowej podstawie. Dzieci 7–9 lat (kl. I–III w 2026/2027) obejmie w kl. IV nowa podstawa (§ 4 rozporządzenia 2026 poz. 378). INNE KRAJE: (1) ${SCI}, Year 3 „Forces and magnets” (s. 19): wymagania obowiązkowe – „notice that some forces need contact between two objects, but magnetic forces can act at a distance”, „describe magnets as having two poles”, „predict whether two magnets will attract or repel each other, depending on which poles are facing”; wskazówki (non-statutory) – różne magnesy („bar, ring, button and horseshoe”), „exploring the strengths of different magnets and finding a fair way to compare them”; Year 3 = 7–8 lat (gov.uk/national-curriculum). (2) ${JP_SHO}, 理科 kl. 3 A⑷ (s. 96) i komentarz 小学校学習指導要領解説 理科編 (MEXT, s. 10, 35–37; s. 66–67 – elektromagnes w kl. 5): przyciągane i nieprzyciągane, przedmiot przy magnesie staje się magnesem, bieguny, siła zależy od odległości i działa przez odstęp, swobodny magnes każdego kształtu i wielkości staje północ–południe (stąd nazwy N i S), wyniki w tabeli, tok badacza, magnes z dala od kart magnetycznych; ${JP_WIEK}. (3) Singapur: Science Syllabus Primary Three to Six (MOE, aktualizacja 2026), P3 „Magnets”: „Make a magnet by the stroke method and the electrical method”; wiek – zapisy do Primary 1 (moe.gov.sg). (4) Korea: podstawa przyrody 2022 (moe.go.kr), kl. 3–4, [4과09-03] „자석을 이용하여 일상생활을 편리하게 하는 장치를 설계할 수 있다” (projektuje urządzenie z magnesem ułatwiające życie; projekt nie musi być zbudowany); w kl. 3–4 nie wprowadza się pojęcia pola magnetycznego; elektromagnes – kl. 5–6 [6과15-03]. (5) Standardy NGSS (przyjmowane przez część stanów USA; nextgenscience.org): 3-PS2-3 (siła zależy od odległości i ułożenia magnesów), 3-PS2-4 (problem projektowy, np. zatrzask drzwi), 3-5-ETS1 (kryteria, ograniczenia, porównanie rozwiązań, uczciwe testy). Sposób uczenia i typowe błędne przekonania dzieci – lekcje Oak National Academy, Year 3 „Simple forces including magnets” (thenational.academy; OGL v3.0, linkujemy, nie kopiujemy): „Magnetic force is a contact force.”, „Larger magnets are always stronger than smaller magnets.”, „All metals and silver coloured objects are magnetic…”, „Magnets can exert a force through paper, but not wood, a table, or other thick materials.”, „Magnetic poles may exist singly, not just in pairs.”, „The poles of all magnets are the ends.”; pomiar zasięgu linijką; rada: wynik inny niż przewidywany to nie „zepsute” badanie. Działanie przez karton i szkło – BBC Bitesize (Classroom Ideas). Wiedza o magnesach – ZPE („Co to jest magnes?”, „Oddziaływania magnetyczne”, „Jak działa kompas?”, „Cechy linii pola magnetycznego”). Bezpieczeństwo – UOKiK, komunikaty o kulkach magnetycznych z 26.03.2021 i 17.12.2021 (archiwum.uokik.gov.pl). Research 14.11.2026: 111 ustaleń sprawdzonych przez drugiego, niezależnego weryfikatora. Tłumaczenia – nasze. Liczby w widżecie i karcie pracy (kratki, centymetry) to przykład, nie reguła.`,
        theory: `
          <p class="tip">🇵🇱 <b>W polskiej szkole</b> o magnesach uczysz się na przyrodzie w klasach 4–6. Tu najpierw krótkie przypomnienie, a potem to, czego uczą dzieci w innych krajach – a polska podstawa programowa tego nie wymaga (poznasz to później albo wcale).</p>
          <h3>Przypomnienie</h3>
          <ul>
            <li>Magnes przyciąga <b>żelazo</b> i <b>stal</b>. Nie każdy metal – aluminium i miedzi nie.</li>
            <li>Każdy magnes ma <b>dwa bieguny</b>: N i S. Różne się przyciągają, takie same odpychają.</li>
            <li>Magnes, który może się swobodnie obracać – duży czy mały, sztabka czy podkowa – staje <b>północ–południe</b>. Koniec, który pokazuje północ, nazwano <b>N</b>.</li>
          </ul>
          <h3>🌍 1. Im dalej, tym słabiej – zmierz to!</h3>
          <p>Japonia: siła magnesu zależy od <b>odległości</b> – im dalej, tym słabiej. Anglia: magnes działa też <b>bez dotykania</b>, na odległość (program Year 3), a w lekcjach Oak dzieci mierzą linijką, z jak daleka magnes przyciągnie spinacz.</p>
          <h3>🌍 2. Najpierw przewiduj: przyciągną się czy odepchną?</h3>
          <p>Anglia (program Year 3): dzieci <b>przewidują</b>, czy dwa magnesy się przyciągną, czy odepchną, zależnie od tego, które bieguny są naprzeciw siebie. W części stanów USA (standardy NGSS) dzieci badają, że siła zależy od <b>ułożenia</b> magnesów. Odwrócisz jeden magnes tak, że jego końce zamienią się miejscami – przyciąganie zmieni się w odpychanie.</p>
          <h3>🌍 3. Większy nie znaczy silniejszy</h3>
          <p>Anglia: program każe szukać <b>uczciwego sposobu</b>, żeby porównać siłę różnych magnesów, a lekcje Oak uczą, że po wielkości ani kształcie <b>nie poznasz</b>, który jest silniejszy. Uczciwie: zmieniasz tylko magnes, a spinacz, linijka i sposób pomiaru zostają te same.</p>
          <h3>🌍 4. Przez co działa magnes?</h3>
          <p>Siła magnesu przechodzi przez <b>papier</b>, <b>cienką tekturę</b>, <b>plastik</b> i <b>szkło</b>. Przez grubą deskę może już nie przyciągnąć – bo to duża odległość.</p>
          <h3>🌍 5. Żelazo przy magnesie samo staje się magnesem</h3>
          <p>Japonia: niektóre rzeczy zbliżone do magnesu same stają się magnesem – np. żelazny gwóźdź przy magnesie przyciąga spinacze. Singapur: dzieci robią magnes <b>metodą pocierania</b> – np. pocierają gwóźdź magnesem (gwóźdź to nasz przykład).</p>
          <h3>🌍 6. Magnesy mają różne kształty</h3>
          <p>Anglia (program Year 3): sztabkowy, pierścieniowy, guzikowy, podkowa. <b>Nie każdy magnes ma bieguny na końcach</b> – znajdziesz je drugim magnesem: sprawdź, gdzie przyciąga, a gdzie odpycha.</p>
          <h3>🌍 7. Zapowiedź: magnes na prąd</h3>
          <p>Japonia (5. klasa) i Korea (5.–6. klasa): <b>elektromagnes</b> działa tylko wtedy, gdy płynie prąd – można go włączać i wyłączać. Singapur już w Primary 3 uczy robić magnes także „metodą elektryczną”. Tylko oglądamy – nie buduj elektromagnesu sam w domu.</p>
          <h3>Jak uczą tego w Japonii?</h3>
          <p>W skrócie: <b>👀 zauważ → ❓ zapytaj → 🤔 przewiduj → 🔬 sprawdź → 📝 zapisz → 💡 wniosek.</b> (W japońskim komentarzu do podstawy jest jeszcze krok: zanim sprawdzisz – <b>zaplanuj</b>, jak to zrobisz.) Wyniki trafiają do tabeli. A lekcje z Anglii dodają: wynik inny, niż przewidziałeś, to nie błąd – to odkrycie.</p>
          <h3>Uważaj!</h3>
          <ul>
            <li>Używaj dużego magnesu sztabkowego albo podkowy – <b>nie małych mocnych magnesów</b> (kulek, krążków). Chowaj magnesy przed młodszym rodzeństwem.</li>
            <li>Magnesów <b>nigdy nie bierz do ust</b>. Połknięty magnes może przyciągnąć drugi magnes albo coś z metalu w brzuchu i bardzo zaszkodzić – od razu do lekarza.</li>
            <li>Nie zbliżaj magnesu do <b>kart z paskiem magnetycznym</b>.</li>
          </ul>`,
        infographicNote: 'Na górze – przypomnienie. Niżej – czego uczą dzieci w innych krajach, a polska podstawa tego nie wymaga.',
        infographic: {
          type: 'karty', kolumny: 2,
          top: { kolor: 4, title: '🇵🇱 Przypomnienie (przyroda kl. 4–6)', text: 'żelazo i stal tak, aluminium nie; N i S; magnes staje północ–południe' },
          items: [
            { icon: '📏', kolor: 1, title: 'Im dalej', text: 'tym słabiej – zmierz linijką' },
            { icon: '🤔', kolor: 1, title: 'Najpierw przewiduj', text: 'przyciągną się czy odepchną?' },
            { icon: '⚖️', kolor: 3, title: 'Większy?', text: 'nie zawsze silniejszy – sprawdź uczciwie' },
            { icon: '📄', kolor: 3, title: 'Przez papier', text: 'i cienką tekturę magnes działa' },
            { icon: '🔩', kolor: 5, title: 'Gwóźdź', text: 'przy magnesie sam staje się magnesem' },
            { icon: '⚡', kolor: 5, title: 'Elektromagnes', text: 'działa, gdy płynie prąd' },
          ],
          bottom: { kolor: 2, title: '👀 → ❓ → 🤔 → 🔬 → 📝 → 💡', text: 'badaj jak japoński uczeń' },
        },
        parent: {
          goal: 'Dziecko bada magnesy jak badacz: najpierw przewiduje, potem sprawdza i zapisuje. Nowe względem polskiej podstawy: siła maleje z odległością, działa przez papier i tekturę, po wielkości nie poznasz siły magnesu, żelazo przy magnesie samo staje się magnesem, projekt urządzenia z magnesem; wcześniej niż w Polsce – przewidywanie, czy magnesy się przyciągną, czy odepchną.',
          time: 'lekcja ok. 15 minut; doświadczenie ok. 20 minut; projekt ok. 30 minut',
          mistakes: [
            '„Magnes przyciąga każdy metal i wszystko, co srebrne” – nie: aluminium (np. folia) i miedź nie.',
            '„Magnes działa tylko wtedy, gdy dotyka.”',
            '„Większy magnes jest zawsze silniejszy.”',
            '„Magnes działa przez papier, ale przez nic grubszego” – przez cienką tekturę i szkło też; gruba deska to po prostu duża odległość.',
            '„Biegun może być sam, bez pary.”',
            '„Bieguny każdego magnesu są na końcach.”',
          ],
          avoid: [
            'Zamiast „magnes przyciąga metal” mów: „przyciąga żelazo i stal”.',
            'Wynik inny niż przewidywany to nie błąd – chwal za uczciwy zapis.',
            'Linii pola magnetycznego nie wprowadzaj – w Korei w tym wieku też ich nie ma.',
          ],
          prepare: [
            '1–2 duże magnesy sztabkowe albo podkowy – nie kulki i nie małe mocne krążki; magnes z lodówki słabo się nadaje do pomiarów',
            'stalowe spinacze, linijka, kartka papieru, kawałek tektury, folia aluminiowa',
            'wydrukowana karta z zakładki 🛠️ Zrób',
          ],
          talk: [
            'Dlaczego magnes trzyma się drzwi lodówki, a nie drewnianych drzwi?',
            'Jak uczciwie sprawdzić, który z dwóch magnesów jest silniejszy?',
            'Gdzie w domu magnes coś trzyma zamknięte?',
            'Co byłoby inaczej, gdyby magnes działał tylko przy dotyku?',
          ],
        },
        activities: [
          {
            id: 'zt9qv0', kind: 'doswiadczenie', title: 'Jak daleko sięga magnes?', time: '20 minut', adult: true,
            intro: 'Badaj jak japoński uczeń: zapytaj, przewiduj, sprawdź, zapisz i wyciągnij wniosek.',
            safety: ['Używaj dużego magnesu sztabkowego albo podkowy – nie małych mocnych magnesów (kulek, krążków).', 'Magnesów nigdy nie bierz do ust – nawet na chwilę. Połknięty magnes może przyciągnąć coś z metalu w brzuchu.', 'Trzymaj magnes z dala od kart z paskiem magnetycznym.', 'Policz magnesy przed doświadczeniem i po nim – żaden nie może się zgubić.'],
            needs: ['1–2 duże magnesy sztabkowe', 'stalowy spinacz', 'linijka', 'kartka papieru i kawałek cienkiej tektury', 'wydrukowana karta'],
            steps: [
              '❓ Zapytaj: z jakiej odległości mój magnes przyciągnie spinacz?',
              '🤔 Przewiduj: wpisz w tabeli przy każdej odległości „tak” albo „nie”.',
              '🔬 Połóż magnes przy początku linijki, a spinacz na 6 cm. Sprawdź, czy przyskoczy. Potem połóż go na 5 cm, 4 cm… aż do 1 cm.',
              '📝 Zapisz wynik przy każdej odległości.',
              '⚖️ Uczciwie: zawsze ten sam spinacz, ta sama linijka i ten sam koniec magnesu.',
              '🔁 Powtórz z drugim magnesem. Który przyciąga z dalszej odległości? Czy to ten większy?',
              '📄 Dla chętnych: połóż spinacz na kartce, a magnes pod spodem. Potem spróbuj z tekturą. Czy magnes dalej ciągnie spinacz?',
            ],
            table: { cols: ['Odległość', 'Przewiduję: przyciągnie?', 'Wynik'], rows: ['6 cm', '5 cm', '4 cm', '3 cm', '2 cm', '1 cm'] },
            conclusion: 'Im dalej spinacz, tym … Mój magnes przyciąga z … cm. Większy magnes był / nie był silniejszy.',
            expected: 'Blisko magnes przyciąga, a od pewnej odległości już nie – im dalej, tym słabiej. Ta odległość jest różna dla różnych magnesów i nie zależy tylko od ich wielkości. Przez kartkę i cienką tekturę magnes zwykle dalej działa. Wynik inny niż przewidywanie to nie błąd – to odkrycie.',
            source: 'Japonia – komentarz MEXT do przyrody kl. 3 (siła zależy od odległości, wyniki zapisuje się w tabeli – tabela to nasz przykład); Anglia – lekcja Oak National Academy „Magnetic force at a distance” (pomiar linijką; OGL v3.0) i wskazówki do programu Year 3 (uczciwe porównanie magnesów)',
          },
          {
            id: 'hzqwr6', kind: 'projekt', title: 'Magnetyczny zatrzask do pudełka', time: '30 minut', adult: true,
            intro: 'Drzwiczki pudełka same się otwierają. Zaprojektuj zatrzask z magnesem – w Korei dzieci projektują urządzenia z magnesem, które ułatwiają życie, a standardy NGSS (część stanów USA) podają jako przykład zatrzask do drzwi.',
            safety: ['Tnij tylko nożyczkami dla dzieci – grubą tekturę tnie dorosły.', 'Używaj dużych magnesów (sztabkowy, podkowa) – nie małych mocnych krążków ani kulek. Magnesów nie bierz do ust.', 'Magnes przyklej mocno, taśmą dookoła. Pudełko z magnesem trzymaj z dala od małych dzieci, a po zabawie dorosły odkleja magnes i go chowa.'],
            needs: ['pudełko z kartonu (np. po butach)', 'magnes i stalowy spinacz (albo 2 duże magnesy)', 'taśma klejąca', 'nożyczki dla dzieci'],
            constraints: ['najwyżej 2 magnesy', 'najwyżej 20 minut budowania', 'możesz też tylko narysować projekt – w Korei to też się liczy'],
            steps: [
              'Narysuj dwa pomysły, np. magnes + magnes albo magnes + spinacz.',
              'Przewiduj: który będzie trzymał mocniej?',
              'Zbuduj pierwszy pomysł i przetestuj: potrząśnij lekko pudełkiem, a potem otwórz je jedną ręką.',
              'Zbuduj drugi pomysł i przetestuj go tak samo.',
              'Zapisz, co się nie udało, i popraw lepszy pomysł.',
            ],
            criteria: [
              'Pudełko nie otwiera się samo, gdy lekko nim potrząśniesz.',
              'Da się je otworzyć jedną ręką.',
              'Porównałeś dwa pomysły tym samym testem.',
              'Umiesz powiedzieć, co z magnesami wykorzystałeś, np. bieguny albo odległość.',
            ],
            table: { cols: ['Pomysł', 'Trzyma przy potrząsaniu?', 'Otwiera się jedną ręką?'], rows: ['Pomysł 1', 'Pomysł 2'] },
            conclusion: 'Lepszy był pomysł …, bo …',
            source: 'Korea – podstawa przyrody 2022, kl. 3–4, wymaganie [4과09-03]; standardy NGSS 3-PS2-4 (zatrzask drzwi) i 3-5-ETS1 (kryteria, ograniczenia, porównanie rozwiązań, testy)',
          },
          {
            id: '058jla', kind: 'doswiadczenie', title: 'Kompas z igły', time: '15 minut', adult: true,
            intro: 'Żelazo przy magnesie samo staje się magnesem. Sprawdź to – i zrób własny kompas.',
            safety: ['Igła jest ostra – pociera ją i wbija w korek dorosły.', 'Miska z wodą z dala od telefonu i komputera.', 'Magnesów nie bierz do ust.'],
            needs: ['igła do szycia', 'magnes', 'korek albo kawałek styropianu', 'miska z wodą'],
            steps: [
              'Dorosły pociera igłę jednym końcem magnesu – około 25 razy, zawsze w tę samą stronę.',
              'Dorosły wbija igłę w korek (albo kładzie ją na styropianie).',
              'Połóż korek na wodzie w misce i poczekaj, aż się zatrzyma.',
              'Obróć miskę delikatnie. Co robi igła?',
              'Odsuń inne magnesy i rzeczy z żelaza – psują wynik.',
            ],
            table: { cols: ['Próba', 'W którą stronę pokazuje igła?'], rows: ['1', '2', '3'] },
            conclusion: 'Igła potarta magnesem stała się … i zawsze pokazuje …',
            expected: 'Igła stała się magnesem, więc na wodzie obraca się i zatrzymuje w kierunku północ–południe – za każdym razem tak samo.',
            source: 'ZPE – „Jak działa kompas?” (kompas z igły, korka i miski z wodą); Anglia – lekcja Oak National Academy „Different magnets and their parts” (pocieranie ok. 25 razy; OGL v3.0); Singapur – sylabus P3 (magnes metodą pocierania); Japonia – komentarz MEXT kl. 3 (przedmiot przy magnesie staje się magnesem)',
          },
        ],
        materials: [
          { type: 'film', title: 'Co to jest magnes? – film o biegunach', url: 'https://zpe.gov.pl/a/co-to-jest-magnes/D7sD8pXPF', source: 'ZPE (zpe.gov.pl) – przyroda, „Świat pod lupą”', license: 'filmy CC BY 3.0', note: 'Film: dwa magnesy zbliżane tymi samymi i różnymi biegunami. Niżej film z opiłkami żelaza i zdjęcie magnetytu – kamienia, który przyciąga żelazo. To lekcja dla starszych klas – doświadczenia z tej strony rób tylko z dorosłym.', expect: 'Co to jest magnes?' },
          { type: 'film', title: 'Jak działa kompas? – i jak zrobić własny', url: 'https://zpe.gov.pl/a/jak-dziala-kompas/DiTVdtwnf', source: 'ZPE (zpe.gov.pl) – przyroda, „Świat pod lupą”', license: 'filmy CC BY 3.0', note: 'Dwa filmy: igła kompasu ucieka za magnesem; kompas z igły, korka i miski z wodą – krok po kroku. W domu igłę pociera i wbija w korek dorosły (karta w zakładce 🛠️ Zrób); wystarczy zwykły magnes sztabkowy.', expect: 'Jak działa kompas?' },
          { type: 'lekcja', title: 'Magnetic force at a distance – siła na odległość', url: 'https://www.thenational.academy/pupils/programmes/science-primary-year-3/units/simple-forces-including-magnets/lessons/magnetic-force-at-a-distance/overview', lang: 'en', source: 'Oak National Academy (Anglia, publiczna platforma lekcji) – Year 3', license: 'OGL v3.0', note: 'Lekcja z filmem dla 7–8-latków: spinacz „wisi w powietrzu” na nitce, pomiar zasięgu linijką. Po angielsku – oglądaj z dorosłym.', expect: 'Magnetic force at a distance' },
          { type: 'lekcja', title: 'Putting magnets together – przyciągną się czy odepchną?', url: 'https://www.thenational.academy/pupils/programmes/science-primary-year-3/units/simple-forces-including-magnets/lessons/putting-magnets-together-attract-or-repel/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Year 3', license: 'OGL v3.0', note: 'Lekcja z filmem: najpierw przewidujesz, potem sprawdzasz, które bieguny się przyciągają. Po angielsku – z dorosłym.', expect: 'attract or repel' },
          { type: 'lekcja', title: 'Blocking magnetic force – czy siłę magnesu da się zatrzymać?', url: 'https://www.thenational.academy/pupils/programmes/science-primary-year-3/units/simple-forces-including-magnets/lessons/blocking-magnetic-force/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Year 3', license: 'OGL v3.0', note: 'Lekcja z filmem: labirynt na plastikowej butelce – magnes z zewnątrz prowadzi spinacz w środku; próby z różnymi materiałami. Po angielsku – z dorosłym.', expect: 'Blocking magnetic force' },
          { type: 'lekcja', title: 'Which is the strongest magnet? – który magnes jest najsilniejszy?', url: 'https://www.thenational.academy/pupils/programmes/science-primary-year-3/units/simple-forces-including-magnets/lessons/strongest-magnet-non-statutory/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Year 3', license: 'OGL v3.0', note: 'Lekcja z filmem o uczciwym porównaniu magnesów. W lekcji mogą być małe mocne magnesy (neodymowe) – tylko do oglądania, w domu ich nie używamy. Po angielsku – z dorosłym.', expect: 'strongest' },
          { type: 'lekcja', forParent: true, title: 'What is a magnet? – lekcja ZPE po angielsku (fizyka, starsze klasy)', url: 'https://zpe.gov.pl/a/what-is-a-magnet/D11clcRTO', lang: 'en', source: 'ZPE (zpe.gov.pl) – fizyka, wersja angielska', note: 'Tekst i nagranie po angielsku; są w niej pole magnetyczne i przepiłowywanie magnesu – za trudne dla 7–9 lat.', expect: 'What is a magnet?' },
          { type: 'dokument', forParent: true, title: 'Komentarz do podstawy przyrody (Japonia, MEXT) – magnesy: s. 35–37, tok lekcji: s. 10, elektromagnes: s. 66–67', url: 'https://www.mext.go.jp/content/20211020-mxt_kyoiku02-100002607_05.pdf', lang: 'ja', source: 'Ministerstwo edukacji Japonii (MEXT), 小学校学習指導要領解説 理科編' },
          { type: 'dokument', forParent: true, title: 'Program przyrody Anglii, key stages 1–2 – Year 3 „Forces and magnets” (s. 19)', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study', lang: 'en', source: 'Department for Education (gov.uk)' },
          { type: 'dokument', forParent: true, title: 'Jednostka Oak „Simple forces including magnets” – 12 lekcji, cele i typowe błędne przekonania', url: 'https://www.thenational.academy/teachers/programmes/science-primary-ks2/units/simple-forces-including-magnets/lessons', lang: 'en', source: 'Oak National Academy (strona dla nauczyciela)', license: 'OGL v3.0' },
          { type: 'dokument', forParent: true, title: 'Standardy NGSS 3-PS2-3 i 3-PS2-4 (siła magnesu, problem projektowy)', url: 'https://www.nextgenscience.org/pe/3-ps2-4-motion-and-stability-forces-and-interactions', lang: 'en', source: 'Next Generation Science Standards (nextgenscience.org)' },
          { type: 'dokument', forParent: true, title: 'Sylabus przyrody Singapuru, Primary 3–6 – „Magnets”', url: 'https://www.moe.gov.sg/media/files/primary/syllabus/ba3562d3-5b31-4459-8693-45cde7b97273.pdf', lang: 'en', source: 'Ministry of Education Singapore (moe.gov.sg)' },
          { type: 'strona', forParent: true, title: 'UOKiK: Niebezpieczne zabawki – kulki magnetyczne', url: 'https://archiwum.uokik.gov.pl/aktualnosci.php?news_id=17329', source: 'Urząd Ochrony Konkurencji i Konsumentów (26.03.2021)', expect: 'magnetyczne' },
        ],
        flashcards: [
          ['Magnes przyciąga…', '…żelazo i stal – ale nie każdy metal: aluminium i miedzi nie'],
          ['Bieguny magnesu', 'dwa: N i S – różne się przyciągają, takie same odpychają'],
          ['Skąd nazwa N?', 'N to koniec magnesu, który pokazuje północ'],
          ['Im dalej od magnesu…', '…tym słabiej przyciąga'],
          ['Czy magnes musi dotykać?', 'nie – działa też na odległość'],
          ['Odwrócisz magnes końcami…', '…przyciąganie zmienia się w odpychanie'],
          ['Większy magnes', 'nie zawsze jest silniejszy – trzeba sprawdzić'],
          ['Uczciwe porównanie magnesów', 'zmieniasz tylko magnes; spinacz, linijka i sposób pomiaru – te same'],
          ['Przez co działa magnes?', 'przez papier, cienką tekturę, plastik, szkło'],
          ['Gwóźdź przy magnesie', 'sam staje się magnesem'],
          ['Metoda pocierania (Singapur)', 'pocierasz żelazo magnesem, np. gwóźdź – i ono staje się magnesem'],
          ['Kompas z igły', 'igła potarta magnesem, na korku na wodzie – pokazuje północ–południe'],
          ['Rodzaje magnesów', 'sztabkowy, pierścieniowy, guzikowy, podkowa – nie każdy ma bieguny na końcach'],
          ['Elektromagnes', 'magnes, który działa tylko wtedy, gdy płynie prąd'],
          ['Badacz po japońsku (w skrócie)', 'zauważ → zapytaj → przewiduj → (zaplanuj) → sprawdź → zapisz → wniosek'],
          ['Uważaj!', 'magnesów nie bierz do ust; bez małych mocnych magnesów; z dala od kart z paskiem'],
        ],
        questions: [
          // przypomnienie (polska przyroda kl. 4–6)
          { id: 'a4w5cu', q: 'Który przedmiot przyciągnie magnes?', options: ['żelazny gwóźdź', 'drewniana linijka', 'kartka papieru'], answer: 0, explain: 'Magnes przyciąga rzeczy z żelaza i ze stali. Drewna i papieru nie przyciąga.' },
          { id: 'mqhpve', q: 'Folia aluminiowa jest srebrna i błyszczy. Czy magnes ją przyciągnie?', options: ['nie', 'tak'], answer: 0, explain: 'Nie. Magnes przyciąga żelazo i stal, a aluminium – nie. Nie każdy metal jest przyciągany.',
            why: { options: ['magnes przyciąga żelazo i stal, a nie aluminium', 'folia jest za cienka, żeby magnes ją uniósł', 'magnes przyciąga tylko to, co już dotyka'], answer: 0, myth: 2, explain: 'Liczy się, z czego coś jest zrobione: żelazo i stal tak, aluminium nie. Kolor i połysk nic nie mówią.', optionExplain: ['', 'Nawet gruba aluminiowa puszka nie zostanie przyciągnięta – to nie kwestia grubości.', 'Magnes działa też na odległość – przyciąga spinacz, zanim go dotknie.'] } },
          { id: 't2ebns', q: 'Ile biegunów ma magnes sztabkowy?', options: ['2', '1', '4'], answer: 0, explain: 'Każdy magnes ma dwa bieguny: północny N i południowy S.', sayExplain: 'Każdy magnes ma dwa bieguny: północny i południowy.' },
          { id: '9gbx8l', q: 'Zbliżasz dwa magnesy: biegun N do bieguna S. Co się stanie?', say: 'Zbliżasz dwa magnesy: biegun północny do bieguna południowego. Co się stanie?', options: ['przyciągną się', 'odepchną się', 'nic się nie stanie'], answer: 0, explain: 'Różne bieguny się przyciągają.' },
          { id: '4svvxe', q: 'Zbliżasz dwa magnesy: biegun S do bieguna S. Co się stanie?', say: 'Zbliżasz dwa magnesy: biegun południowy do bieguna południowego. Co się stanie?', options: ['odepchną się', 'przyciągną się', 'nic się nie stanie'], answer: 0, explain: 'Takie same bieguny się odpychają.' },
          { id: 'cob8ap', q: 'Magnes wisi na nitce i może się swobodnie kręcić. Jak się ustawi?', options: ['północ–południe', 'wschód–zachód', 'zawsze w stronę okna'], answer: 0, explain: 'Swobodnie zawieszony magnes ustawia się w kierunku północ–południe. Tak działa kompas.' },
          { id: 'etxtzv', q: 'Dlaczego jeden koniec magnesu nazywa się N, czyli biegun północny?', say: 'Dlaczego jeden koniec magnesu nazywa się biegunem północnym?', options: ['bo pokazuje północ', 'bo jest cięższy', 'bo jest zawsze czerwony'], answer: 0, explain: 'Swobodnie zawieszony magnes pokazuje jednym końcem północ – ten koniec nazwano N, biegun północny.', sayExplain: 'Swobodnie zawieszony magnes pokazuje jednym końcem północ – ten koniec nazwano biegunem północnym.' },
          { id: 'xubvl9', q: 'Mały magnes i duży magnes-podkowa wiszą swobodnie. Jak się ustawią?', options: ['oba północ–południe', 'tylko duży północ–południe', 'każdy w inną stronę'], answer: 0, explain: 'Każdy magnes – duży czy mały, sztabka czy podkowa – ustawia się w kierunku północ–południe.' },
          // 1. odległość
          { id: 'ukmkol', q: 'Prawda czy fałsz?\nMagnes może przyciągnąć spinacz, nawet gdy go nie dotyka.', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. Siła magnesu działa na odległość – spinacz sam podskoczy do magnesu.' },
          { id: '2eymme', q: 'Spinacz leży tuż obok silnego magnesu, ale go nie dotyka. Co się stanie?', options: ['spinacz przyskoczy do magnesu', 'spinacz zostanie w miejscu'], answer: 0, explain: 'Siła magnesu działa też na odległość. Z bliska przyciąga mocno.',
            why: { options: ['siła magnesu działa też na odległość', 'magnes przyciąga tylko wtedy, gdy dotyka', 'spinacz zawsze toczy się w stronę metalu'], answer: 0, myth: 1, explain: 'Magnes nie musi dotykać. Im bliżej, tym mocniej przyciąga.', optionExplain: ['', 'Gdyby tak było, spinacz nie podskoczyłby do magnesu – a podskakuje.', 'Spinacz nie rusza się sam w stronę metalu – ciągnie go magnes.'] } },
          { id: 'ympxs7', q: 'Magnes nie może podnieść spinacza z daleka. Co zrobić?', options: ['przybliżyć magnes', 'odsunąć magnes dalej', 'odwrócić spinacz'], answer: 0, explain: 'Im bliżej magnesu, tym mocniej przyciąga.' },
          { id: '6wg3w1', q: 'Tabela Kuby: 1 cm – przyciąga, 2 cm – przyciąga, 3 cm – przyciąga, 4 cm – nie, 5 cm – nie. Z jakiej odległości magnes Kuby przyciąga spinacz?', say: 'Tabela Kuby: z jednego, dwóch i trzech centymetrów magnes przyciąga, z czterech i pięciu centymetrów – nie. Z jakiej odległości magnes Kuby przyciąga spinacz?', options: ['z 3 cm i bliżej', 'z 4 cm i bliżej', 'z każdej odległości'], sayOptions: ['z trzech centymetrów i bliżej', 'z czterech centymetrów i bliżej', 'z każdej odległości'], answer: 0, explain: 'Z 3 cm jeszcze przyciągał, z 4 cm już nie – przyciąga z 3 cm i bliżej. Dalej siła jest za słaba, żeby ruszyć spinacz.', sayExplain: 'Z trzech centymetrów jeszcze przyciągał, z czterech już nie – przyciąga z trzech centymetrów i bliżej. Dalej siła jest za słaba, żeby ruszyć spinacz.' },
          { id: 'b4i6jy', q: 'Zbliżasz magnes do igły kompasu, ale jej nie dotykasz. Co zrobi igła?', options: ['poruszy się', 'będzie stała bez ruchu'], answer: 0, explain: 'Igła kompasu to mały magnes. Twój magnes działa na nią przez szczelinę.',
            why: { options: ['siła magnesu działa przez szczelinę', 'igłę poruszył podmuch z ręki', 'igła rusza się tylko przy dotyku'], answer: 0, myth: 2, explain: 'Japońskie dzieci sprawdzają to właśnie kompasem: magnes działa, choć nie dotyka.', optionExplain: ['', 'Igła rusza się także wtedy, gdy trzymasz rękę nieruchomo – działa magnes, nie wiatr.', 'Magnes nie musi dotykać – działa na odległość.'] } },
          // 2. ułożenie
          { id: 'zsub6c', q: 'Dwa magnesy sztabkowe się przyciągały. Odwracasz jeden tak, że jego końce zamieniają się miejscami. Co się stanie?', options: ['odepchną się', 'dalej się przyciągną', 'oba przestaną działać'], answer: 0, explain: 'Po obróceniu naprzeciw siebie są takie same bieguny – odpychają się.',
            why: { options: ['zmieniło się ułożenie biegunów', 'obrócony magnes zawsze słabnie', 'obracanie wyłącza magnes'], answer: 0, explain: 'Przyciągają się różne bieguny, odpychają takie same. Odwracając magnes, zmieniasz, który biegun jest naprzeciw.', optionExplain: ['', 'Magnes po odwróceniu jest tak samo silny – zmienia się tylko kierunek siły.', 'Magnes działa dalej – teraz odpycha, zamiast przyciągać.'] } },
          { id: 'x1taom', q: 'Magnes sztabkowy A wisi na nitce. Biegun N magnesu B odpycha jeden koniec magnesu A. Zbliżasz ten sam biegun N do drugiego końca magnesu A. Co się stanie?', say: 'Magnes sztabkowy A wisi na nitce. Biegun północny magnesu B odpycha jeden koniec magnesu A. Zbliżasz ten sam biegun do drugiego końca magnesu A. Co się stanie?', options: ['przyciągną się', 'też się odepchną', 'nic się nie stanie'], answer: 0, explain: 'Na drugim końcu magnesu A jest drugi biegun – S. A N i S się przyciągają.', sayExplain: 'Na drugim końcu magnesu A jest drugi biegun – południowy. A biegun północny i południowy się przyciągają.',
            why: { options: ['na drugim końcu jest drugi biegun', 'cały magnes A jest biegunem N', 'drugi koniec nie ma żadnej siły'], answer: 0, myth: 1, explain: 'Każdy magnes ma i N, i S – bieguny zawsze są parami. W magnesie sztabkowym są na dwóch końcach.', optionExplain: ['', 'Biegun nigdy nie jest sam – każdy magnes ma i N, i S.', 'Drugi koniec to też biegun – S. Przyciąga biegun N magnesu B.'] } },
          { id: '80j4m8', q: 'Magnes ma kształt pierścienia. Jak znajdziesz jego bieguny?', options: ['sprawdzę drugim magnesem', 'sprawdzę, która część jest cięższa', 'pierścień nie ma biegunów'], answer: 0, explain: 'Każdy magnes ma dwa bieguny, ale nie każdy ma je na końcach. Drugi magnes pokaże, gdzie przyciąga, a gdzie odpycha.' },
          // 3. większy ≠ silniejszy, uczciwe porównanie
          { id: '8r8l95', q: 'Ola ma duży magnes i mały magnes. Jak poznać, który jest silniejszy?', options: ['sprawdzić, z jak daleka przyciąga spinacz', 'zważyć oba i wybrać cięższy', 'zmierzyć linijką, który jest dłuższy'], answer: 0, explain: 'Po wielkości ani kształcie nie poznasz siły magnesu. Sprawdź: z jak daleka przyciąga albo ile spinaczy utrzyma.' },
          { id: 'tvd2s8', q: 'Chcesz uczciwie sprawdzić, który z dwóch magnesów jest silniejszy. Jak?', options: ['oba sprawdzam tymi samymi spinaczami', 'każdy sprawdzam innymi rzeczami', 'wybieram ten, który jest ładniejszy'], answer: 0, explain: 'Uczciwe porównanie: wszystko tak samo, zmienia się tylko magnes. Np. liczysz, ile tych samych spinaczy utrzyma każdy z nich.' },
          { id: 'r4ht9b', q: 'Porównujesz zasięg dwóch magnesów. Co musi zostać takie samo w obu próbach?', options: ['spinacz i linijka', 'ten sam magnes', 'nic – wszystko może się zmieniać'], answer: 0, explain: 'Zmieniasz tylko to, co porównujesz – magnes. Spinacz, linijka i sposób pomiaru zostają te same. Tak wygląda uczciwy test.' },
          // 4. przez co działa
          { id: '2zg2q9', q: 'Spinacz leży na cienkiej tekturze, a magnes jest pod spodem. Przesuwasz magnes. Co zrobi spinacz?', options: ['pojedzie za magnesem', 'zostanie w miejscu'], answer: 0, explain: 'Siła magnesu przechodzi przez cienką tekturę – możesz prowadzić spinacz jak po labiryncie.',
            why: { options: ['siła magnesu przechodzi przez tekturę', 'tektura zatrzymuje siłę magnesu', 'spinacz zsuwa się, bo tektura jest śliska'], answer: 0, myth: 1, explain: 'Magnes działa przez papier, cienką tekturę, plastik i szkło. Przez grubą deskę może nie przyciągnąć – bo to duża odległość.', optionExplain: ['', 'Cienka tektura nie zatrzymuje siły magnesu – spinacz jedzie za magnesem.', 'Spinacz porusza się tam, gdzie magnes – a nie w dół, jak przy zsuwaniu.'] } },
          // 5. namagnesowanie
          { id: 'iwun7k', q: 'Do magnesu przyczepił się żelazny gwóźdź. Co teraz potrafi gwóźdź?', options: ['sam przyciąga spinacze', 'przyciąga drewniane klocki', 'nic – to zwykły gwóźdź'], answer: 0, explain: 'Żelazo przy magnesie samo staje się magnesem. Gwóźdź przyciąga spinacze.' },
          { id: 'z0r2mi', q: 'Program Singapuru każe zrobić magnes metodą pocierania. Co trzeba zrobić np. z żelaznym gwoździem?', options: ['potrzeć go magnesem', 'pomalować go na czerwono', 'zamoczyć go w wodzie'], answer: 0, explain: 'Pocierasz gwóźdź magnesem, zawsze w tę samą stronę – i gwóźdź sam staje się magnesem (gwóźdź to nasz przykład).' },
          { id: 'gxzt6r', q: 'Jak zrobić kompas z igły do szycia?', options: ['potrzeć igłę magnesem i położyć na korku na wodzie', 'pomalować igłę farbą i położyć ją na stole', 'włożyć igłę na całą noc do zamrażarki'], answer: 0, explain: 'Igła potarta magnesem sama staje się magnesem. Na korku na wodzie może się swobodnie obracać – pokaże północ–południe.' },
          { id: '902bvu', q: 'Przecinasz magnes na pół. Co dostajesz?', options: ['dwa magnesy, każdy z N i S', 'osobno N i osobno S', 'dwa kawałki bez magnesu'], sayOptions: ['dwa magnesy, każdy z biegunem północnym i południowym', 'osobno biegun północny i osobno południowy', 'dwa kawałki bez magnesu'], answer: 0, explain: 'Z jednego magnesu powstają dwa. Każdy ma oba bieguny – bieguny zawsze są parami.' },
          // magnes w pracy, zapowiedź elektromagnesu
          { id: '0dgx3v', q: 'W sortowni na taśmie jadą puszki stalowe i aluminiowe. Co wyciągnie magnes zawieszony nad taśmą?', options: ['tylko puszki stalowe', 'wszystkie puszki', 'żadnej puszki'], answer: 0, explain: 'Magnes przyciąga stal, a aluminium – nie. Tak w sortowniach oddziela się stal od innych odpadów.' },
          { id: 'vis1nn', q: 'Czym elektromagnes różni się od zwykłego magnesu?', options: ['działa tylko wtedy, gdy płynie prąd', 'przyciąga też aluminium i miedź', 'działa tylko wtedy, gdy jest pod wodą'], answer: 0, explain: 'Elektromagnes można włączać i wyłączać prądem. Japońskie dzieci budują go w 5. klasie – ty na razie tylko oglądasz, nie buduj go sam.' },
          // metoda badacza, bezpieczeństwo
          { id: 'iidode', q: 'Japońscy uczniowie badają magnesy jak badacze. Co robią, zanim zaczną doświadczenie?', options: ['przewidują, co się stanie', 'piszą wniosek z wyników', 'uczą się wyniku na pamięć'], answer: 0, explain: 'Najpierw przewidują i planują, jak to sprawdzić, potem robią doświadczenie, zapisują wyniki i dopiero wtedy piszą wniosek.' },
          { id: 'wg9rlw', q: 'Czego NIE zbliżać do magnesu?', options: ['karty z paskiem magnetycznym', 'drewnianego klocka z zabawek', 'kartki papieru z zeszytu'], answer: 0, explain: 'Magnes może zepsuć kartę z paskiem magnetycznym. Drewnu i papierowi nic nie zrobi.' },
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
