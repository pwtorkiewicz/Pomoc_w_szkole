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
        where: 'Anglia – design and technology, key stage 3 (11–14 lat), a programowanie i sterowanie własnymi wyrobami już w key stage 2 (7–11 lat); Japonia – technika w gimnazjum (12–15 lat; klasę wybiera szkoła, według zbioru przykładów MEXT najpewniej 3. klasa – to ocena, nie przepis); Korea – informatyka i technika w gimnazjum (kl. 1–3); Szwajcaria – Lehrplan 21 (wspólny program 21 kantonów niemieckojęzycznych i wielojęzycznych; sprawdzona wersja Zurychu), 3. cykl (Sekundarstufe I); Estonia – informatyka do wyboru (czujniki już w kl. 1–3); Bawaria – Realschule, informatyka, moduł do wyboru „Robotik und eingebettete Systeme”',
        basis: `Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica). Dział według standardu „różnicy” (decyzja rodzica 14.11.2026): wspólne z polską szkołą tylko jako przypomnienie z etykietą klasy, rdzeń – to, czego polska podstawa nie wymaga. Research 16.11.2026: 139 ustaleń sprawdzonych przez drugiego, niezależnego weryfikatora; tłumaczenia – nasze. POLSKA (tekst podstaw, eli.gov.pl): dzieci 12–15 lat to ok. kl. VI–VIII szkoły podstawowej i 1. klasa szkoły ponadpodstawowej (nasze wyliczenie z art. 35 ust. 2 Prawa oświatowego, t.j. Dz.U. 2026 poz. 820); kl. VI–VIII uczą się w 2026/2027 według starej podstawy (Dz.U. 2024 poz. 996; § 4 rozporządzenia Dz.U. 2026 poz. 378 – dotychczasowa podstawa „w klasach II, III i V–VIII”); 15-latki w 1. klasie szkoły ponadpodstawowej mają inną podstawę – nie porównywaliśmy jej (ZPE ma np. licealny materiał „Arduino – fotorezystor”). Stara podstawa: informatyka kl. IV–VI – polecenia sekwencyjne, warunkowe, iteracyjne i zdarzenia, program sterujący robotem lub obiektem na ekranie (s. 198); kl. VII–VIII – „steruje robotem lub innym obiektem na ekranie”, wyrażenia logiczne, reprezentacja wartości logicznych i system binarny, pierwsze kroki w języku tekstowym (s. 200, 202); technika – elementy elektroniczne bez czujników (s. 207), „V. Mechatronika” – modele mechaniczno-elektroniczne, „w tym programowalne” (s. 207–208); fizyka – obwody (s. 177–178), elektromagnes i silnik (s. 178); słowo „czujnik” tylko raz, w warunkach realizacji fizyki: uczniowie „mogą używać cyfrowych czujników pomiarowych” (s. 181). Nowa podstawa (Dz.U. 2026 poz. 378): informatyka kl. IV–VI – robot fizyczny lub na ekranie (s. 254–255); kl. VII–VIII – wejście/wyjście, wyrażenia logiczne, instrukcje warunkowe i iteracyjne, bez wymagania o robocie (s. 257–258); mikrokontrolery tylko jako przykład wyposażenia (s. 260); zajęcia praktyczno-techniczne – jedno zadanie „elektryczne lub elektroniczne” (np. model robota sprzątającego), bez sterowania (s. 267); słowa „czujnik” nie ma w całym akcie. Sprzężenia zwrotnego, elementu wykonawczego i bramek logicznych nie ma w wymaganiach szkoły podstawowej ani w 2024, ani w 2026. INNE KRAJE: (1) ${DT3}: „apply computing and use electronics to embed intelligence in products that respond to inputs [for example, sensors], and control outputs [for example, actuators], using programmable components [for example, microcontrollers]” (s. 3) i „Schools are not required by law to teach the example content in [square brackets]” (s. 1) – obowiązkowe jest reagowanie na wejścia i sterowanie wyjściami, czujniki, elementy wykonawcze i mikrokontrolery to przykłady; key stage 2 (PRIMARY_national_curriculum_-_Design_and_technology.pdf, s. 3): „apply their understanding of computing to program, monitor and control their products”; wiek etapów – Master_final_national_curriculum, Figure 1 (KS2 7–11, KS3 11–14, KS4 14–16 lat); licencja dokumentów DfE: Open Government Licence, © Crown copyright 2013. (2) Japonia: 中学校学習指導要領解説 技術・家庭編 (MEXT, 2017; mext.go.jp, plik 1387018_009.pdf), D „情報の技術” (3) „計測・制御のプログラミングによる問題の解決”, druk s. 55–58: ア – budowa systemu pomiaru i sterowania (czujnik, komputer, element wykonawczy; interfejs zamieniający sygnały analogowe i cyfrowe; ciąg informacji przetwarza program), bezpieczny program, sprawdzanie działania i usuwanie błędów; イ – znaleźć problem, zaprojektować system na podstawie przepływu danych wejściowych i wyjściowych, ocenić i poprawić; s. 57 – zakładać, że czujnik może nie zadziałać, dbać o bezpieczeństwo użytkownika, diagram czynności (アクティビティ図), algorytm ważniejszy niż zapamiętanie poleceń, nie skupiać się na drobnym strojeniu elementów wykonawczych, przerwy przy pracy z ekranem; s. 48 – klasę i liczbę godzin działu D ustala szkoła, systemy pomiaru i sterowania zmniejszyły zużycie paliwa przez samochody; C(2), s. 45 – przy gotowych modułach czujników nie wchodzić głęboko w zasadę działania, wystarczy działanie i zastosowanie; ten sam tekst podstawy – 付録3, s. 152; zbiór przykładów lekcji MEXT 2020 (20200403-mxt_jogai01-000006333_001.pdf): w podstawówce zwykle uruchamia się gotowe systemy, w gimnazjum się je projektuje („考えられる” – uważa się), D(3) „najpewniej” w 3. klasie (ocena, nie przepis), dobrze, by system miał kilka czujników; robot sprzątający z czujnikami dotyku (D(1)); slajdy lekcji MEXT „土の中の乾き具合をセンシングしよう！” (20240313-mxt_jogai01-000006333_03.pdf): micro:bit, czujnik wilgotności gleby, LEVEL 1–3, próg 800, definicja progu (しきい値), rejestrator danych, powiadomienie o możliwej awarii czujnika; slajdy MEXT 【5】 „学校生活からの問題発見・課題設定” (20250324-mxt_jogai01-000006333_001.pdf): slajd 2 – przykładowy plan 11 godzin (9. rok szkoły zintegrowanej), slajd 7 – analiza problemu: kiedy? gdzie? co jest problemem? który czujnik się przyda?; szkolenie MEXT 2024 (20240927-mxt_jogai01-000036931_005.pdf, slajdy 15–16, wykład zewnętrznego autora – parafraza): sterowanie sekwencyjne „jedź ◯ s” a ze sprzężeniem zwrotnym „jedź, aż odległość ≤ ◯ cm”, czujnik jako zmysł maszyny (oko – czujnik światła, ucho – czujnik dźwięku, skóra – czujnik nacisku); wiek: gimnazjum 12–15 lat (strona MEXT w języku angielskim); regulamin witryny MEXT zgodny z CC BY 4.0. (3) Korea: podstawa 2022 (moe.go.kr, [별책 10]), informatyka w gimnazjum [9정01-02], [9정01-03] (physical computing, dobór elementów do celu), [9정02-01] i główna idea działu „dane” (zamiana danych analogowych na cyfrowe); technika [9기가04-09] (prosty robot z czujnikami i elementami wykonawczymi jako projekt). (4) Szwajcaria: Lehrplan 21 – wspólny program szkoły obowiązkowej 21 kantonów niemieckojęzycznych i wielojęzycznych (lehrplan21.ch), nie całej Szwajcarii; cytujemy wersję kantonu Zurych (zh.lehrplan.ch, wszystkie prawa zastrzeżone – parafraza): MI.2.3.l (3. cykl) – „Sensor, Prozessor, Aktor und Speicher” porównane z funkcjami organizmów żywych; NT.5.3.a – przykłady (z.B.): Bimetallstreifen, Reedkontakt, Relais, Leuchtdiode, Fotowiderstand, Heiss- oder Kaltleiterwiderstand; NT.5.3.b – projekt układu do problemu, np. termowyłącznik w suszarce, czujnik dymu. (5) Estonia: program informatyki (przedmiot do wyboru), riigiteataja.ee, Lisa 10: kl. 1–3 „Andurid ja täiturid (robootika)”, kl. 4–6 czujniki, mikrokontroler, silnik, kl. 7–9 internet rzeczy i bezpieczne używanie urządzeń „smart”. (6) Bawaria: LehrplanPLUS Realschule, informatyka, moduł do wyboru IT 2.7.2 „Robotik und eingebettete Systeme” (bez przypisanej klasy); materiał ISB „Roboter unterwegs” (lehrplanplus.bayern.de, 12.07.2017, © ISB): próg = średnia odczytu nad białym i czarnym podłożem (50), dwie reakcje – robot „ständig leicht ruckelt”, lepszy liczy error = (odczyt − 50)·kp („regulacja proporcjonalna” – nasza nazwa), czujnik ultradźwiękowy – odległość w cm jak u nietoperza. SPOSÓB UCZENIA I BŁĘDNE PRZEKONANIA – lekcje Oak National Academy (thenational.academy; publiczna platforma, nie program nauczania; „lessons by Oak National Academy licensed under Open Government Licence (OGL)” v3.0 – parafrazujemy i linkujemy): Year 6 „Conditional statements” (kolejność warunków), Year 7 „Using input and output” (micro:bit: przechylenie, jasność 0–255) i „Creating programs on a physical computing device” (komputer bez ekranu), Year 9 „Develop and modify code” (poprawki nie tylko wtedy, gdy coś nie działa) i „Test and evaluate a wearable product” (ocena to nie opinia jednej osoby), „Micro:bits in Tinkercad” (wbudowane wejścia i wyjścia; przykład z przyciskiem nie jest wzorem sprzężenia zwrotnego), „Code and simulate micro:bits in Tinkercad” (fotorezystor: więcej światła – mniejszy opór, zmiana napięcia jako sygnał), „Circuits in Tinkercad” (projektowanie także na schematach i w CAD), Year 10 „Systems approach to design” (szklarnia, 30 °C, sprzężenie zwrotne, wiele wejść), „Input components” (element wykonawczy), „Motors” (silnik DC – pętla otwarta, serwo – zamknięta), Year 11 „Optical sensors for navigation”, „Ultrasonic sensors to measure distance”, „Working with motors” (sterownik silnika), „Programmable systems” (tekst, bloki, schemat blokowy), „Testing and refining a programming project” (Computer Science: testowanie danymi zwykłymi, granicznymi i błędnymi). WIEDZA (zpe.gov.pl): „Rodzaje elementów i urządzeń automatyki przemysłowej” (czujnik ultradźwiękowy, serwomotor w pętli zamkniętej; Akademia Finansów i Biznesu Vistula, CC BY-SA 3.0), „Arduino – fotorezystor” (liceum: wejście analogowe 0–1023, progi 40 i 60; CC BY-SA 3.0), „Typowe elementy instalacji automatyki chłodniczej w budynkach” (histereza termostatu; materiał zawodowy). BEZPIECZEŃSTWO: ZPE „Ostrożnie z prądem!” (230 V), „Urządzenia elektryczne” (baterii nie ładować), scenariusz STEM „Robot podążający za światłem” (płytka stykowa, sprawdzenie układu dwa razy, nie dotykać metalowych części przy podłączonym USB, zgłaszać zapach i nagrzewanie); Oak „Electrical sensors: make and review” (nadzór dorosłego, ścisłe zasady przy wodzie); MEXT 解説 s. 57 (ekran, przerwy). Programy w dziale to pseudokod w stylu Pythona (funkcje czujnik_swiatla() itp. są wymyślone; wyniki sprawdzone przez prześledzenie warunków). Przykłady urządzeń i liczby (lampka przy drzwiach, alarm, grzałka w akwarium, odczyty 90 i 10, „jedź 3 s”, prędkości robota w widżecie) – nasze. Pominięte (bez potwierdzenia): zachowanie czujnika światła w telefonie nad kartką, symulatory MakeCode/Tinkercad/Wokwi (hosty niedostępne lub wymagają konta), filmy Oak i BBC.`,
        theory: `
          <p class="tip">🇵🇱 <b>W polskiej szkole</b> programujesz robota albo postać na ekranie, a na fizyce łączysz obwody. <b>Czujników, elementów wykonawczych i sprzężenia zwrotnego polska podstawa programowa szkoły podstawowej nie wymaga</b> – ani stara, ani nowa. Tu najpierw krótkie przypomnienie, a potem to, czego uczą się rówieśnicy w innych krajach.</p>
          <h3>🇵🇱 Przypomnienie – znasz albo poznasz w polskiej szkole</h3>
          <ul>
            <li><b>Informatyka, kl. IV–VIII:</b> program z warunkami i pętlami, sterowanie robotem albo postacią na ekranie; w kl. VII–VIII – wyrażenia logiczne i system dwójkowy.</li>
            <li><b>Fizyka, kl. VII–VIII:</b> obwód elektryczny, elektromagnes i silnik.</li>
          </ul>
          <div class="pis"><pre>while True:
    jasnosc = czujnik_swiatla()
    if jasnosc &lt; 30:
        lampa_wlacz()
    else:
        lampa_wylacz()</pre></div>
          <p>Program sprawdza czujnik tylko wtedy, gdy wykonuje ten wiersz – dlatego <code>if</code> stoi w pętli. Uważaj na granicę: dla 30 warunek <code>30&nbsp;&lt;&nbsp;30</code> jest fałszywy. Kilka czujników łączysz jak bramki (wyrażenia logiczne, kl. VII–VIII): <code>if&nbsp;ciemno&nbsp;and&nbsp;ktos_blisko:</code> – muszą być spełnione oba warunki, <code>if&nbsp;drzwi_otwarte&nbsp;or&nbsp;okno_otwarte:</code> – wystarczy jeden.</p>
          <h3>🌍 1. System pomiaru i sterowania</h3>
          <p><b>Czujnik</b> (wejście) mierzy coś w otoczeniu i zamienia to na sygnał elektryczny. <b>Komputer z programem</b> – np. mikrokontroler – decyduje. <b>Element wykonawczy</b> (wyjście, ang. <i>actuator</i>) zamienia sygnał sterujący w ruch albo działanie: silnik, serwo, brzęczyk, pompa, grzałka. Japonia (komentarz MEXT do techniki w gimnazjum) dodaje <b>interfejs</b>: zamienia sygnały analogowe i cyfrowe, żeby części mogły przekazywać sobie informacje.</p>
          <p>Szwajcarski Lehrplan 21 (wspólny program kantonów niemieckojęzycznych; sprawdziliśmy wersję Zurychu, 3. cykl) uczy części <b>czujnik – procesor – element wykonawczy – pamięć</b> i porównuje je z organizmami żywymi. Na japońskim szkoleniu dla nauczycieli czujnik to „zmysł” maszyny: oko – czujnik światła, ucho – czujnik dźwięku, skóra – czujnik nacisku.</p>
          <h3>🌍 2. Z sygnału do liczby</h3>
          <p>Czujnik pomiarowy daje liczbę, np. czujnik światła w płytce micro:bit – od 0 (ciemno) do 255 (lekcja Oak dla Year 7), wejście analogowe Arduino – od 0 do 1023 (ZPE, informatyka w liceum). Korea (informatyka w gimnazjum): dane analogowe trzeba zamienić na cyfrowe, żeby komputer mógł je przetworzyć. Czujnik <b>dwustanowy</b> (np. przycisk) daje tylko 1 albo 0.</p>
          <h3>🌍 3. Jak czujnik zamienia świat na sygnał</h3>
          <ul>
            <li><b>Fotorezystor</b> (LDR): im więcej światła, tym mniejszy opór. Zmiana oporu daje zmianę napięcia – i to jest sygnał (lekcja Oak dla Year 9, ZPE).</li>
            <li><b>Czujnik ultradźwiękowy</b>: wysyła ultradźwięki i mierzy czas powrotu echa – im dłużej, tym dalej. Używa dźwięku, nie światła, więc działa też po ciemku.</li>
            <li><b>Czujnik optyczny linii</b>: świeci podczerwienią i mierzy, ile światła wraca – białe odbija więcej, czarne mniej. Przekazuje tylko dane – odczyt jasności (liczbę albo jasno/ciemno), a o skręcie decyduje <b>program</b>.</li>
          </ul>
          <p>Lehrplan 21 (wersja Zurychu, przyroda i technika, 3. cykl) podaje przykłady: fotorezystor, termistor, kontaktron, przekaźnik, pasek bimetalowy. Japoński komentarz radzi: przy gotowych modułach czujników nie trzeba wchodzić głęboko w zasadę działania – ważne, co moduł mierzy i do czego służy.</p>
          <h3>🌍 4. Próg – dobierz go z pomiarów</h3>
          <p><b>Próg</b> to wartość graniczna: po jednej stronie jedno działanie, po drugiej – drugie. Bawaria (materiał ISB do informatyki w Realschule): zmierz czujnik raz nad białym, raz nad czarnym podłożem i weź <b>średnią</b> – w ich robocie wyszło 50. Japonia (lekcja MEXT z micro:bitem i czujnikiem wilgotności gleby): najpierw pomiar po naciśnięciu przycisku, potem pomiar co sekundę, potem brzęczyk poniżej progu 800 – a najlepszy próg wybiera się z danych z <b>rejestratora</b> (tabela, wykres). Sprawdź też wartość <b>równą</b> progowi: ma być <code>&lt;</code> czy <code>&lt;=</code>? Lekcje Oak uczą testowania takimi danymi granicznymi.</p>
          <h3>🌍 5. Na czas czy na pomiar?</h3>
          <p>Japońskie szkolenie MEXT porównuje dwa programy robota: <b>na czas</b> – „jedź ◯ s” (sterowanie sekwencyjne) – i <b>na pomiar</b> – „jedź, aż czujnik odległości pokaże ≤ ◯ cm” (sterowanie ze sprzężeniem zwrotnym). Uczeń wybiera sposób, który pasuje do celu.</p>
          <p><b>Sprzężenie zwrotne</b> (pętla zamknięta): czujnik mierzy <b>skutek</b> działania, a sterownik poprawia działanie. Lekcje Oak (Year 10): zwykły silnik prądu stałego działa w pętli otwartej, a <b>serwo</b> – w zamkniętej, więc pilnuje położenia, np. w ramieniu robota. Szklarnia: jest powyżej 30 °C? Tak – otwórz okno; i znów mierz.</p>
          <h3>🌍 6. Dla chętnych: łagodniej niż „włącz/wyłącz”</h3>
          <p><b>Histereza</b> w termostacie to różnica temperatur włączenia i wyłączenia. Im mniejsza, tym mniejsze wahania temperatury, ale częstsze przełączanie – a to może szybciej zepsuć urządzenie (ZPE, materiał do kształcenia zawodowego). Robot z dwiema reakcjami („nad białym lekko w lewo, nad czarnym lekko w prawo”) ciągle lekko szarpie. Lepszy liczy odchylenie <code>error&nbsp;=&nbsp;(odczyt&nbsp;-&nbsp;50)&nbsp;*&nbsp;kp</code> i płynnie zmienia prędkość silników (ISB).</p>
          <h3>🌍 7. Mikrokontroler daje sygnał, nie moc</h3>
          <p>Silnika nie podłącza się wprost do mikrokontrolera, tylko przez <b>sterownik silnika</b> z osobnym zasilaniem – inaczej mikrokontroler może się zepsuć (lekcja Oak dla Year 11).</p>
          <h3>🌍 8. Projektuj na awarię</h3>
          <p>Japonia: system projektuje się z założeniem, że <b>czujnik może zawieść</b>, i z myślą o bezpieczeństwie użytkownika. Przykład z lekcji MEXT: powiadomienie „czujnik chyba zepsuty”, gdy odczyt długo się nie zmienia.</p>
          <h3>🌍 9. Komputer bez ekranu, kilka wejść</h3>
          <p>Komputer w urządzeniu często nie ma ekranu – działa na podstawie wejść i robi coś w świecie (Oak, Year 7). System może mieć <b>wiele</b> wejść i wyjść (Oak, Year 10), a japoński zbiór przykładów lekcji zaleca kilka czujników.</p>
          <h3>Jak uczą tego w Japonii?</h3>
          <p>W gimnazjum (12–15 lat) na technice uczeń sam <b>projektuje</b> system pomiaru i sterowania do problemu z życia. W skrócie: <b>❓ problem → 🗺️ dane wejściowe i wyjściowe → 📈 algorytm na diagramie → 💻 program → 🧪 test i usuwanie błędów → 🔁 ocena i poprawki.</b> Komentarz MEXT: ważniejsze jest wymyślenie algorytmu niż zapamiętanie poleceń, a praca nie ma polegać na drobnym strojeniu silników. W podstawówce dzieci zwykle uruchamiają gotowe systemy, a w gimnazjum projektują je same (tak ocenia zbiór przykładów MEXT). Klasę wybiera szkoła; według zbioru przykładów MEXT najpewniej jest to 3. klasa gimnazjum (14–15 lat) – to ocena, nie przepis.</p>
          <h3>Jak uczą tego w Anglii?</h3>
          <p>Program <i>design and technology</i> dla key stage 3 (11–14 lat) wymaga wyrobów, które „<b>reagują na wejścia i sterują wyjściami</b> za pomocą elementów programowalnych”. Czujniki, elementy wykonawcze i mikrokontrolery są tam tylko <b>przykładami</b> w nawiasach – szkoła nie musi ich użyć. Już w key stage 2 (7–11 lat) dzieci programują swoje wyroby, monitorują je i nimi sterują. Lekcje Oak National Academy (publiczna platforma lekcji, nie program) dają np. 6 lekcji z micro:bitem w Year 7 – od pierwszego programu po własny projekt – i uczą, że program można zapisać tekstem, blokami albo schematem blokowym.</p>
          <h3>Uważaj!</h3>
          <ul>
            <li>Tylko <b>niskie napięcie</b>: baterie albo USB. Nic z gniazdka 230&nbsp;V – porażenie może zaszkodzić zdrowiu, a nawet życiu.</li>
            <li>Zanim włączysz zasilanie – sprawdź połączenia dwa razy. Zmieniasz połączenia – najpierw odłącz zasilanie.</li>
            <li>Czuć spaleniznę albo coś się grzeje – od razu odłącz zasilanie i powiedz dorosłemu. Zwykłych baterii nie ładuj.</li>
            <li>Elektronika z dala od wody. Przy wodzie i silnikach – dorosły w domu.</li>
          </ul>`,
        infographicNote: 'Czytaj od góry: przypomnienie, potem droga sygnału od czujnika do elementu wykonawczego – i z powrotem do czujnika (sprzężenie zwrotne).',
        infographic: {
          type: 'kroki', cykl: true,
          top: { kolor: 4, title: '🇵🇱 Przypomnienie (informatyka)', text: 'warunki i pętle (kl. IV–VIII); AND – oba, OR – choć jeden (kl. VII–VIII)' },
          items: [
            { icon: '🌡️', kolor: 1, title: 'Czujnik – wejście', text: 'mierzy i daje sygnał, np. jasność 0–255' },
            { icon: '🔢', kolor: 1, title: 'Interfejs', text: 'sygnał analogowy ↔ cyfrowy' },
            { icon: '🧠', kolor: 5, title: 'Program', text: 'porównuje z progiem – próg dobierasz z pomiarów' },
            { icon: '⚙️', kolor: 3, title: 'Element wykonawczy – wyjście', text: 'silnik, serwo, pompa; silnik przez sterownik silnika' },
            { icon: '🔁', kolor: 2, title: 'Sprzężenie zwrotne', text: 'czujnik mierzy skutek – pętla zamknięta' },
          ],
          bottom: { kolor: 4, title: '💡 Na czas czy na pomiar?', text: '„jedź 3 s” nie wie, gdzie jest ściana; projektuj też na awarię czujnika' },
        },
        parent: {
          goal: 'Dziecko rozumie, że urządzenie reaguje „samo” dzięki trzem częściom: czujnik (wejście), program i element wykonawczy (wyjście). Rozróżnia sterowanie „na czas” i „na pomiar” (sprzężenie zwrotne), dobiera próg z pomiarów i myśli o tym, co się stanie, gdy czujnik się zepsuje. Tego polska podstawa szkoły podstawowej nie wymaga; warunki, pętle i AND/OR to przypomnienie z informatyki.',
          time: 'lekcja ok. 15 minut; doświadczenie ok. 40 minut; projekt 2–3 spotkania po 45 minut (nasza propozycja; dla porównania: przykładowy plan MEXT – 11 godzin, jednostka Oak dla Year 7 – 6 lekcji)',
          mistakes: [
            '„Czujnik śledzi linię jak kamera” – czujnik podaje tylko dane (odczyt jasności – liczbę albo jasno/ciemno), decyduje program (Oak, Year 11).',
            '„Czujnik ultradźwiękowy widzi jak kamera” – mierzy odległość dźwiękiem (Oak, Year 11).',
            '„Silnik można podłączyć wprost do mikrokontrolera” – potrzebny jest sterownik silnika (Oak, Year 11).',
            '„Wszystkie silniki działają tak samo” – zwykły silnik pracuje w pętli otwartej, serwo w zamkniętej (Oak, Year 10).',
            '„Fotorezystor tylko wyczuwa światło” – zmienia opór, a to daje sygnał (Oak, Year 9).',
            '„Komputer zawsze ma ekran” (Oak, Year 7) i „system ma jedno wejście i jedno wyjście” (Oak, Year 10).',
            '„Kolejność warunków w łańcuchu if/elif nie ma znaczenia” (Oak, Year 6).',
            '„Poprawiamy tylko wtedy, gdy coś nie działa” i „ocena to opinia jednej osoby” (Oak, Year 9).',
          ],
          avoid: [
            'Nie mów „czujnik widzi” ani „czujnik decyduje” – decyduje program.',
            'Przycisk z if/else to jeszcze nie sprzężenie zwrotne – w pętli zamkniętej czujnik mierzy skutek działania.',
            'Żadnych projektów na 230 V; silnik tylko przez sterownik silnika – na start wystarczy dioda albo brzęczyk.',
            'Nie podawaj gotowego rozwiązania – pytaj: co mierzysz? jaki próg? co, jeśli czujnik się zepsuje?',
            'Nie zaczynaj od strojenia silników – najpierw problem i algorytm na papierze (MEXT).',
          ],
          prepare: [
            'telefon z aplikacją do pomiaru natężenia oświetlenia albo płytka micro:bit z kablem USB',
            'lampka LED, pudełko, kartka, kalkulator; wydrukowana karta z zakładki 🛠️ Zrób',
            'do projektu (tylko jeśli budujecie): zestaw z mikrokontrolerem na baterie albo USB, płytka stykowa – bez lutowania',
          ],
          talk: [
            'Gdzie w domu coś samo się włącza albo wyłącza? Jaki tam jest czujnik?',
            'Termostat działa „na czas” czy „na pomiar”?',
            'Co by się stało, gdyby czujnik w tym urządzeniu się zepsuł? Jak urządzenie mogłoby to zauważyć?',
            'Dlaczego robot sprzątający nie zostaje przy ścianie? (W przykładzie MEXT ma czujniki dotyku z przodu: cofa się i skręca o 90°.)',
            'Jakie dane zbiera inteligentne urządzenie w domu i czy to bezpieczne? (Jest to w estońskim programie informatyki – przedmiotu do wyboru – w kl. 7–9.)',
          ],
        },
        activities: [
          {
            id: '1v20ri', kind: 'doswiadczenie', title: 'Gdzie jest granica? Wyznaczam próg czujnika światła', time: '40 minut',
            intro: 'Lampka nocna ma się włączać, gdy robi się ciemno. Przy jakim odczycie? Nie zgaduj – zmierz, jak japoński uczeń z lekcji MEXT i bawarski z materiału ISB.',
            safety: [
              'Tylko telefon albo micro:bit zasilany z USB lub baterii – nic z gniazdka 230\u00a0V. Nie otwieraj urządzeń.',
              'Lampka tylko LED. Zasłaniasz czujnik (telefon) pudełkiem albo dłonią – nigdy lampkę. Lampki nie przykrywaj kocem ani papierem.',
              'Przy podłączonym kablu USB nie dotykaj metalowych części płytki micro:bit. Nie używaj kabla z uszkodzoną izolacją.',
              'Patrzysz w ekran – rób przerwy i ustaw ekran tak, żeby nie odbijał światła lampy.',
            ],
            needs: ['telefon z aplikacją do pomiaru natężenia oświetlenia – albo płytka micro:bit z kablem USB i komputer do wgrania programu (diody micro:bita mierzą jasność od 0 do 255)', 'lampka LED', 'pudełko', 'kalkulator', 'wydrukowana karta'],
            steps: [
              '💻 Masz micro:bit? Najpierw wgraj program: po naciśnięciu przycisku A pokaż poziom jasności (jak „LEVEL 1” w lekcji MEXT). Bez programu micro:bit niczego nie pokaże.',
              '🔧 Sprawdź przyrząd: zasłaniaj dłonią po kolei różne miejsca telefonu (albo diody micro:bita) i patrz, kiedy liczba spada – tam jest czujnik. Liczba się nie zmienia? Ta aplikacja może nie korzystać z czujnika światła (np. mierzy aparatem) – spróbuj innej albo użyj micro:bita.',
              '❓ Pytanie: przy jakim odczycie lampka nocna powinna się włączyć?',
              '🤔 Przewiduję: próg wyniesie ok. ___ .',
              '🔬 Zmierz 3 razy „jasno” (czujnik pod lampką) i 3 razy „ciemno” (czujnik pod pudełkiem). Policz średnie.',
              '⚖️ Uczciwie: to samo miejsce, ta sama lampka, czujnik zawsze tak samo skierowany. Zmieniasz tylko oświetlenie.',
              '🧮 Metoda z materiału ISB (Bawaria): (średnia „jasno” + średnia „ciemno”) : 2. Np. jasno 200, ciemno 10 → 105 (nasz przykład).',
              '🌆 Teraz zmierz 3 razy w chwili, w której naprawdę zapaliłbyś lampkę (wieczorem, przy zgaszonym świetle albo w półmroku). To Twój „zmierzch”.',
              '🤝 Porównaj: średnia z poprzedniego punktu a „zmierzch”. Który próg wybierzesz dla lampki? Metoda ISB jest do dwóch stanów (białe/czarne pod robotem); do lampki lepiej pasuje pomiar „zmierzchu”.',
              '🧪 Wartość graniczna: co zrobi lampka, gdy odczyt będzie równy progowi? Zapisz, czy w regule użyjesz <, czy <=.',
              '🛠️ Awaria: zasłoń czujnik na minutę i patrz na odczyt – czy się zmienia? Odczyt „ciemno” jest prawdziwy – ale czy sterownik odróżni to od zepsutego czujnika? Podpowiedź z lekcji MEXT: podejrzany jest odczyt, który długo się nie zmienia, choć światło się zmienia.',
              '💻 Tylko micro:bit (dla chętnych): zmień program – pomiar co sekundę, a gdy odczyt spadnie poniżej progu, pokaż ikonę.',
            ],
            table: { cols: ['Pomiar', '1', '2', '3', 'Średnia'], rows: ['Jasno (pod lampką)', 'Ciemno (pod pudełkiem)', 'Zmierzch („tu zapalam”)'] },
            conclusion: 'Próg wyznaczam z pomiarów, nie zgaduję. Wybrałem próg … . Gdy odczyt równa się progowi, lampka … . Gdy czujnik był zasłonięty przez minutę, odczyt … (zmieniał się / nie zmieniał się). Awarię czujnika można poznać po tym, że …',
            expected: 'Pod lampką odczyty są duże, pod pudełkiem małe, a „zmierzch” wypada gdzieś między nimi – gdzie dokładnie, pokaże Twój pomiar. Liczby zależą od telefonu i aplikacji, więc próg jest Twój, nie uniwersalny. Sama stała liczba nie wystarczy, żeby odróżnić noc od zepsutego czujnika – trzeba sprawdzać, czy odczyt reaguje na zmiany.',
            source: 'Bawaria – materiał ISB „Roboter unterwegs” (próg = średnia odczytu nad białym i czarnym podłożem); Japonia – slajdy lekcji MEXT „土の中の乾き具合をセンシングしよう！” (poziomy 1–3, próg, dobór progu z danych, powiadomienie o awarii) i komentarz MEXT 解説 s. 57 (czujnik może nie zadziałać); Anglia – lekcja Oak „Using input and output” (micro:bit: jasność 0–255; OGL v3.0) i testowanie danymi granicznymi; Polska – fizyka (Dz.U. 2024 poz. 996, s. 181): aplikacje do pomiaru natężenia oświetlenia. Pomiar „zmierzchu” zamiast białego i czarnego podłoża to nasza adaptacja.',
          },
          {
            id: 'u9c6u9', kind: 'projekt', title: 'Strażnik – system, który sam mierzy i reaguje', time: '2–3 × 45 minut', adult: true,
            intro: 'Zaprojektuj system pomiaru i sterowania do prawdziwego problemu – jak japoński uczeń na technice w gimnazjum. Możesz go zbudować, zasymulować albo zostać przy projekcie na papierze.',
            safety: [
              'Tylko niskie napięcie: baterie albo USB. Nigdy pompa, wentylator ani lampa z gniazdka 230\u00a0V.',
              'Bez lutowania – płytka stykowa. Zanim włączysz zasilanie, sprawdź połączenia dwa razy; przed zmianą połączeń odłącz zasilanie.',
              'Silnik tylko przez sterownik silnika – a najlepiej zamiast silnika dioda albo brzęczyk.',
              'Woda: elektronika z dala od wody, pompka tylko na niskie napięcie i przez sterownik. Przy wodzie i silnikach dorosły jest w domu.',
              'Czuć spaleniznę albo coś się grzeje – od razu odłącz zasilanie i powiedz dorosłemu. Zwykłych baterii nie ładuj.',
              'Etapy 1–3 rób na papierze. Przy ekranie rób przerwy.',
            ],
            needs: ['kartka i ołówek', 'do budowy (opcjonalnie): zestaw z mikrokontrolerem (np. micro:bit) na baterie albo USB, czujnik, dioda albo brzęczyk, płytka stykowa'],
            constraints: [
              'wybierz jeden temat: doniczka, która sama woła o wodę; lampka do noszenia dla dziecka idącego po ciemku; model szklarni, w której okno otwiera się powyżej progu temperatury',
              'tylko baterie albo USB, bez lutowania',
              'możesz zostać przy schemacie i algorytmie na papierze albo w symulatorze – projektowanie na schematach też się liczy (Oak)',
              'nie spędzaj czasu na drobnym strojeniu silników (MEXT)',
            ],
            steps: [
              'Problem: kiedy? gdzie? co dokładnie jest problemem? który czujnik się przyda?',
              'Schemat: wejścia → przetwarzanie → wyjścia. Jeśli jest sprzężenie zwrotne – dorysuj strzałkę z powrotem do czujnika.',
              'Algorytm na diagramie (np. schemat blokowy) – zanim napiszesz program.',
              'Program: bloki, tekst albo tylko schemat blokowy.',
              'Test: dane zwykłe, dane graniczne (odczyt równy progowi) i awaria czujnika.',
              'Poprawka: wprowadź co najmniej jedną zmianę po teście.',
              'Ocena z drugą osobą i krótka instrukcja dla użytkownika.',
            ],
            criteria: [
              'Schemat ma wejście, przetwarzanie i wyjście, a próg uzasadniłem pomiarami (wersja na papierze: danymi z doświadczenia „Gdzie jest granica?” albo z opisu czujnika).',
              'Algorytm narysowałem, zanim napisałem program.',
              'Opisałem, co się stanie, gdy czujnik się zepsuje, i jak system to wykryje.',
              'Oceniłem projekt pod względem co najmniej dwóch spraw: bezpieczeństwo, wygoda, koszt, środowisko – także oczami użytkownika.',
              'Przetestowałem dane zwykłe i graniczne – na układzie albo „na sucho”, śledząc algorytm na papierze – i wprowadziłem co najmniej jedną poprawkę.',
              'Ocena opiera się na danych z testów i na opinii innej osoby.',
            ],
            table: { cols: ['Test', 'Odczyt czujnika (zmierzony albo przyjęty)', 'Co zrobił system?', 'Dobrze?'], rows: ['Zwykłe dane 1', 'Zwykłe dane 2', 'Odczyt równy progowi', 'Awaria czujnika'] },
            conclusion: 'Mój system mierzy … i steruje … . Po teście poprawiłem … . Gdy czujnik się zepsuje, system …',
            source: 'Japonia – podstawa i komentarz MEXT, technika w gimnazjum D(3) (projekt systemu pomiaru i sterowania, diagram czynności, czujnik może zawieść, ocena: bezpieczeństwo, wygoda, koszt, środowisko); slajdy MEXT 【5】 „学校生活からの問題発見・課題設定” (analiza problemu: kiedy? gdzie? co jest problemem? który czujnik?); Anglia – lekcje Oak National Academy (Year 7–11: wejście–przetwarzanie–wyjście, projektowanie na schematach i w CAD, poprawki i ocena oparta na danych; OGL v3.0); Korea – technika w gimnazjum [9기가04-09] (prosty robot z czujnikami jako projekt). Brzmienie kryteriów – nasze.',
          },
        ],
        materials: [
          { type: 'lekcja', title: 'Using input and output – micro:bit reaguje na przechylenie i światło', url: 'https://www.thenational.academy/pupils/lessons/using-input-and-output/overview', lang: 'en', source: 'Oak National Academy (Anglia, publiczna platforma lekcji) – Computing, Year 7', license: 'OGL v3.0', note: 'Lekcja z filmem: micro:bit pokazuje strzałkę, gdy go przechylisz, a jego diody mierzą jasność (0–255). Zadania robi się w edytorze MakeCode – to strona zewnętrzna, jej nie sprawdzaliśmy. Po angielsku.', expect: 'Using input and output' },
          { type: 'lekcja', title: 'Systems approach to design – szklarnia ze sprzężeniem zwrotnym', url: 'https://www.thenational.academy/pupils/lessons/systems-approach-to-design/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Design and technology, Year 10', license: 'OGL v3.0', note: 'Wejście, przetwarzanie, wyjście i sprzężenie zwrotne na przykładzie szklarni (powyżej 30 °C okno się otwiera). Lekcja dla 14–16 lat, po angielsku.', expect: 'Systems approach to design' },
          { type: 'lekcja', title: 'Motors – zwykły silnik i serwo', url: 'https://www.thenational.academy/pupils/lessons/motors/overview', lang: 'en', source: 'Oak National Academy (Anglia) – Design and technology, Year 10', license: 'OGL v3.0', note: 'Różne silniki jako elementy wykonawcze w układzie sterowania. Lekcja dla 14–16 lat, po angielsku.', expect: 'Motors' },
          { type: 'zdjecia', title: 'Elementy automatyki: silniki, serwomotor, czujniki – galeria zdjęć z opisami', url: 'https://zpe.gov.pl/a/rodzaje-elementow-i-urzadzen-automatyki-przemyslowej/D324dQVnj', source: 'ZPE (zpe.gov.pl) – kształcenie zawodowe, automatyka przemysłowa', license: 'zdjęcia CC BY-SA 3.0', note: 'Materiał dla technikum – dla chętnych. W galerii: silnik, serwomotor (pętla zamknięta), czujniki: indukcyjny, ultradźwiękowy (czas powrotu fali), optyczny i inne.', expect: 'Rodzaje elementów i urządzeń automatyki przemysłowej' },
          { type: 'strona', title: 'Świat smart, czyli Internet Rzeczy – materiał ZPE dla szkoły podstawowej (poza wymaganiami podstawy)', url: 'https://zpe.gov.pl/a/swiat-smart-czyli-internet-rzeczy-iot/DtVyT3QAo', source: 'ZPE (zpe.gov.pl) – informatyka, szkoła podstawowa', license: 'ilustracje CC BY 3.0', note: 'Lekcja dla szkoły podstawowej: przedmioty z czujnikami przesyłają informacje przez sieć. Jest tam o czujnikach w internecie rzeczy, ale nie o pętli sterowania.', expect: 'Internet Rzeczy' },
          { type: 'film', title: 'Ostrożnie z prądem! – zasady bezpieczeństwa', url: 'https://zpe.gov.pl/a/ostroznie-z-pradem/D19l5PaP4', source: 'ZPE (zpe.gov.pl) – przyroda, szkoła podstawowa', license: 'film CC BY-SA 3.0', note: 'Dlaczego gniazdko (230 V) jest groźne, jak bezpiecznie korzystać z urządzeń elektrycznych i jak pomóc osobie porażonej prądem.', expect: '230 woltów' },
          { type: 'dokument', forParent: true, title: 'Program Anglii: design and technology, key stage 3 – „Technical knowledge” (s. 3), nawiasy jako przykłady (s. 1)', url: 'https://assets.publishing.service.gov.uk/media/5a7c99ebed915d6969f46087/SECONDARY_national_curriculum_-_Design_and_technology.pdf', lang: 'en', source: 'Department for Education (gov.uk)' },
          { type: 'dokument', forParent: true, title: 'Program Anglii: design and technology, key stage 2 – „program, monitor and control their products” (s. 3)', url: 'https://assets.publishing.service.gov.uk/media/5a7ca43640f0b6629523adc1/PRIMARY_national_curriculum_-_Design_and_technology.pdf', lang: 'en', source: 'Department for Education (gov.uk)' },
          { type: 'dokument', forParent: true, title: 'Komentarz do podstawy techniki w gimnazjum (Japonia, MEXT) – D(3) pomiar i sterowanie: s. 55–58', url: 'https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_009.pdf', lang: 'ja', source: 'Ministerstwo edukacji Japonii (MEXT), 中学校学習指導要領解説 技術・家庭編' },
          { type: 'prezentacja', forParent: true, title: 'Slajdy lekcji MEXT: micro:bit i czujnik wilgotności gleby – poziomy 1–3, próg, rejestrator danych', url: 'https://www.mext.go.jp/content/20240313-mxt_jogai01-000006333_03.pdf', lang: 'ja', source: 'MEXT – materiały do techniki w gimnazjum, dział D' },
          { type: 'dokument', forParent: true, title: 'Bawaria (ISB): „Roboter unterwegs” – próg czujnika, robot na linii, czujnik ultradźwiękowy', url: 'https://www.lehrplanplus.bayern.de/fm/71/RS-IT-2.7.2-Aufgabe-RoboterUnterwegs-20170712.pdf', lang: 'de', source: 'Staatsinstitut für Schulqualität und Bildungsforschung (ISB), LehrplanPLUS' },
          { type: 'dokument', forParent: true, title: 'Jednostka Oak „Physical computing using the micro:bit” (Year 7) – 6 lekcji od programu po projekt', url: 'https://www.thenational.academy/teachers/programmes/computing-secondary-ks3/units/physical-computing-using-the-micro-bit/lessons', lang: 'en', source: 'Oak National Academy (strona dla nauczyciela)', license: 'OGL v3.0' },
          { type: 'dokument', forParent: true, title: 'Lekcja Oak „Optical sensors for navigation” (Year 11) – cele i typowe błędne przekonanie', url: 'https://www.thenational.academy/teachers/lessons/optical-sensors-for-navigation', lang: 'en', source: 'Oak National Academy (strona dla nauczyciela)', license: 'OGL v3.0' },
          { type: 'strona', forParent: true, title: 'Arduino – fotorezystor (ZPE, informatyka w liceum): odczyt 0–1023 i progi', url: 'https://zpe.gov.pl/a/przeczytaj/D68uOoWgN', source: 'ZPE (zpe.gov.pl) – liceum, informatyka', license: 'CC BY-SA 3.0', note: 'Dla starszych i chętnych: lampka z diodą RGB, fotorezystor, trzy przedziały jasności (progi 40 i 60).', expect: 'fotorezystor' },
        ],
        flashcards: [
          ['Czujnik', 'wejście: mierzy coś w otoczeniu i zamienia to na sygnał elektryczny'],
          ['Element wykonawczy (actuator)', 'wyjście: zamienia sygnał sterujący w ruch albo działanie – silnik, serwo, brzęczyk, pompa, grzałka'],
          ['Sterownik (mikrokontroler)', 'wykonuje program: na podstawie danych z czujników decyduje, co włączyć'],
          ['System pomiaru i sterowania (Japonia)', 'czujnik → interfejs → komputer z programem → interfejs → element wykonawczy'],
          ['Interfejs', 'zamienia sygnały analogowe i cyfrowe, żeby części mogły przekazywać sobie informacje'],
          ['Czujnik jak zmysł', 'oko – czujnik światła, ucho – czujnik dźwięku, skóra – czujnik nacisku'],
          ['Z sygnału do liczby', 'czujnik pomiarowy daje liczbę z zakresu, np. jasność w micro:bicie 0–255'],
          ['Czujnik dwustanowy', 'daje tylko 1 albo 0 – włączony albo wyłączony'],
          ['Fotorezystor (LDR)', 'mniej światła → większy opór → inne napięcie → sygnał'],
          ['Czujnik ultradźwiękowy', 'mierzy odległość z czasu powrotu echa; używa dźwięku, więc działa po ciemku'],
          ['Czujnik optyczny linii', 'podaje tylko dane: odczyt jasności (liczbę albo jasno/ciemno) – o skręcie decyduje program'],
          ['Próg', 'wartość graniczna: po jednej stronie jedno działanie, po drugiej drugie – dobierz go z pomiarów'],
          ['Próg z materiału ISB (Bawaria)', 'średnia odczytu nad białym i nad czarnym podłożem – przykład z jednego zadania dla szkół'],
          ['Sterowanie na czas', '„jedź 3 s” – pętla otwarta: nie sprawdza skutku'],
          ['Sprzężenie zwrotne', 'czujnik mierzy skutek działania, a sterownik je poprawia – pętla zamknięta'],
          ['Serwo', 'silnik w pętli zamkniętej – pilnuje położenia, np. w ramieniu robota'],
          ['Mikrokontroler a silnik', 'mikrokontroler daje sygnał, nie moc – silnik podłączasz przez sterownik silnika'],
          ['Histereza', 'różnica temperatur włączenia i wyłączenia; mniejsza – mniejsze wahania, ale częstsze przełączanie'],
          ['Projektuj na awarię', 'załóż, że czujnik może zawieść – np. powiadomienie, gdy odczyt długo się nie zmienia'],
        ],
        questions: [
          // 🇵🇱 przypomnienie (informatyka – stara podstawa, kl. IV–VIII); usunięte duplikaty: a1k103, nyiy77
          { id: '6q47x2', q: '🇵🇱 Przypomnienie (informatyka, kl. IV–VIII)\nDlaczego program sterownika jest zwykle w pętli while True?', options: ['ma ciągle mierzyć i reagować na zmiany', 'pętla sprawia, że czujnik jest dokładniejszy', 'bez pętli program nie dałby się zapisać', 'pętla oszczędza baterie w urządzeniu'], answer: 0, explain: 'Otoczenie ciągle się zmienia (robi się ciemno, ktoś podchodzi), a program sprawdza czujnik tylko wtedy, gdy wykonuje ten wiersz. Dlatego sterownik mierzy i reaguje w pętli.' },
          { id: '8couoy', q: '🇵🇱 Przypomnienie (informatyka, kl. VII–VIII)\nLampa przy drzwiach: if ciemno and ktos_blisko: świeci.\nJest ciemno, ale nikogo nie ma. Co robi lampa?', options: ['nie świeci', 'świeci jasno', 'mruga co chwilę'], answer: 0, explain: 'AND daje prawdę tylko wtedy, gdy oba warunki są prawdziwe. ktos_blisko to fałsz, więc lampa nie świeci.' },
          // 1. system: wejście → sterownik → wyjście
          { id: '81g9lr', q: 'Która część układu sterowania jest „wejściem”?', options: ['czujnik', 'silnik', 'brzęczyk', 'lampka'], answer: 0, explain: 'Czujnik mierzy coś w otoczeniu i przekazuje sygnał do sterownika – to wejście. Silnik, brzęczyk i lampka to wyjścia (elementy wykonawcze).' },
          { id: 'isnrvp', q: 'Który z tych elementów jest elementem wykonawczym (wyjściem)?', options: ['silnik', 'czujnik światła', 'czujnik odległości', 'mikrokontroler'], answer: 0, explain: 'Element wykonawczy robi coś w świecie – silnik daje ruch. Czujniki to wejścia, a mikrokontroler to sterownik.' },
          { id: '8j6g6p', q: 'Co robi sterownik (np. mikrokontroler)?', options: ['wykonuje program i decyduje, co włączyć', 'zamienia światło na sygnał elektryczny', 'wytwarza ruch, światło albo dźwięk', 'mierzy odległość za pomocą echa'], answer: 0, explain: 'Sterownik dostaje sygnały z czujników i według programu steruje elementami wykonawczymi. Pozostałe odpowiedzi opisują czujniki albo elementy wykonawcze.' },
          { id: 'w1mw6b', q: 'Automatyczne podlewanie ma czujnik wilgotności gleby, sterownik i pompę. Co jest elementem wykonawczym?', options: ['pompa', 'czujnik wilgotności', 'sterownik'], answer: 0, explain: 'Pompa robi coś w świecie – podaje wodę. Czujnik to wejście, a sterownik wykonuje program.' },
          { id: 'yoyq9y', q: 'Prawda czy fałsz?\nCzujnik zamienia to, co mierzy (np. światło), na sygnał elektryczny dla sterownika.', options: TF, noShuffle: true, answer: 0, explain: 'Prawda. Sterownik „rozumie” tylko sygnały elektryczne – czujnik zamienia na nie światło, odległość czy temperaturę.' },
          { id: '78o7vo', q: 'Automatyczne podlewanie: czujnik wilgotności, mikrokontroler i pompa – bez ekranu i bez klawiatury. Czy mikrokontroler to komputer?', options: ['tak – przetwarza dane z wejść', 'tak, ale tylko z kablem do laptopa', 'nie – komputer musi mieć ekran'], answer: 0, explain: 'Tak. Mikrokontroler to mały komputer: dostaje dane z czujnika, wykonuje program i steruje pompą. Program wgrywa się z komputera, ale potem mikrokontroler działa sam, np. na baterie. Wynikiem jest działanie w świecie, więc ekran nie jest potrzebny.',
            why: { options: ['wynik to działanie w świecie, np. pompa', 'komputer zawsze pokazuje wynik na ekranie', 'komputer służy tylko do pisania i gier'], answer: 0, myth: 1, explain: 'Komputery w urządzeniach działają na podstawie wejść i robią coś fizycznie – nie muszą niczego wyświetlać (lekcja Oak dla Year 7).', optionExplain: ['', 'Pralka, termostat czy robot też mają komputer – a wynik widać w działaniu, nie na ekranie.', 'Komputery sterują też pralkami, samochodami i robotami.'] } },
          { id: 'yiwovt', q: 'System w szklarni ma pilnować temperatury, wilgotności gleby i światła. Co z tego wynika?', options: ['potrzebuje kilku czujników', 'wystarczy mu jeden czujnik', 'czujniki nie są tu potrzebne'], answer: 0, explain: 'Każda z tych wielkości to osobny pomiar, więc system ma kilka wejść – i może mieć kilka wyjść (np. okno, pompa, lampa).',
            why: { options: ['system może mieć wiele wejść i wyjść', 'system ma jedno wejście i jedno wyjście', 'sterownik sam zgadnie brakujące pomiary'], answer: 0, myth: 1, explain: 'Systemy bywają złożone: wiele wejść, wiele wyjść i sprzężenie zwrotne (lekcja Oak dla Year 10).', optionExplain: ['', 'Prawdziwe systemy często mają wiele wejść – np. czujniki i przełączniki.', 'Sterownik zna tylko to, co zmierzą czujniki – niczego nie zgaduje.'] } },
          { id: 'qravpi', q: 'Płytka micro:bit ma pokazać strzałkę w stronę, w którą ją przechylasz. Co musisz do niej podłączyć?', options: ['nic – ma wbudowany czujnik ruchu', 'zewnętrzny czujnik przechylenia', 'osobny wyświetlacz na strzałkę'], answer: 0, explain: 'micro:bit ma wbudowany czujnik ruchu i matrycę diod, na której pokaże strzałkę. Wystarczy program (zadanie z lekcji Oak dla Year 7).',
            why: { options: ['mikrokontroler ma wbudowane wejścia i wyjścia', 'do sterowania zawsze potrzebne są części zewnętrzne', 'strzałkę zawsze rysuje komputer z kablem'], answer: 0, myth: 1, explain: 'Mikrokontrolery mają wbudowane wejścia i wyjścia, a do tego miejsca na dodatkowe części (lekcja Oak dla Year 9).', optionExplain: ['', 'Części zewnętrzne można dołączyć, ale do prostego sterowania często nie są potrzebne.', 'Program wgrywa się z komputera, ale potem micro:bit działa sam, np. na baterie.'] } },
          // 2. z sygnału do liczby
          { id: 'z6b76x', q: 'Czujnik daje sygnał analogowy, a komputer liczy na liczbach. Co jest potrzebne pomiędzy nimi?', options: ['interfejs A/C – zamiana na liczbę', 'drugi czujnik tego samego typu', 'element wykonawczy, np. silnik'], answer: 0, explain: 'Interfejs zamienia sygnał analogowy czujnika na cyfrowy (A/C) – na liczbę, którą program może porównać z progiem.' },
          { id: 'zlc46o', q: 'Czujnik światła w płytce micro:bit podaje liczbę od 0 do 255. Pokazał 0. Co to znaczy?', options: ['jest ciemno', 'jest bardzo jasno', 'jest średnio jasno'], answer: 0, explain: '0 oznacza brak światła, a 255 – największą jasność, jaką zmierzy ten czujnik.' },
          { id: 'k7ik52', q: 'Czujnik dwustanowy (np. przycisk) przekazuje do sterownika…', options: ['tylko dwa stany: 1 albo 0', 'dokładną temperaturę w stopniach', 'dowolną liczbę od 0 do 1023'], answer: 0, explain: 'Dwustanowy znaczy: tylko dwa stany – 1 albo 0, włączony albo wyłączony.' },
          // 3. jak czujnik zamienia świat na sygnał
          { id: '20r3i5', q: 'Lampka nocna ma fotorezystor (LDR). Robi się ciemniej. Co dzieje się z jego oporem?', options: ['rośnie', 'maleje', 'się nie zmienia'], answer: 0, explain: 'Im mniej światła, tym większy opór fotorezystora. Zmiana oporu zmienia napięcie – to jest sygnał dla sterownika.',
            why: { options: ['zmiana oporu zmienia napięcie – to jest sygnał', 'fotorezystor tylko czuje światło, opór ma stały', 'opór zależy tylko od długości przewodu'], answer: 0, myth: 1, explain: 'Fotorezystor nie „wyczuwa” światła sam z siebie – zmienia opór, a zmiana oporu daje zmianę napięcia, którą sterownik odczytuje (lekcja Oak dla Year 9).', optionExplain: ['', 'Gdyby opór był stały, sterownik nie dostałby żadnej informacji o świetle.', 'Opór fotorezystora zależy od światła, które na niego pada.'] } },
          { id: '6sr61n', q: 'Jak czujnik ultradźwiękowy mierzy odległość?', options: ['wysyła ultradźwięki i mierzy czas powrotu echa', 'świeci laserem i sprawdza kolor przeszkody', 'mierzy temperaturę przeszkody przed sobą', 'waży przedmiot, który stoi tuż przed nim'], answer: 0, explain: 'Czujnik wysyła ultradźwięki i odbiera echo. Im dłużej echo wraca, tym przeszkoda jest dalej.' },
          { id: '7bffih', q: 'W zupełnie ciemnym pokoju robot z czujnikiem ultradźwiękowym jedzie w stronę ściany. Co zrobi czujnik?', options: ['zmierzy odległość do ściany', 'nic nie wykryje po ciemku', 'wykryje tylko jasną ścianę'], answer: 0, explain: 'Czujnik ultradźwiękowy używa dźwięku, a nie światła – ciemność mu nie przeszkadza.',
            why: { options: ['czujnik używa dźwięku, a nie światła', 'czujnik działa jak kamera i potrzebuje światła', 'czujnik mierzy kolor i jasność ściany'], answer: 0, myth: 1, explain: 'Ultradźwięki odbijają się od ściany tak samo w dzień i w nocy. Czujnik mierzy czas powrotu echa (lekcja Oak dla Year 11, ZPE).', optionExplain: ['', 'Czujnik ultradźwiękowy niczego nie „widzi” – słucha echa.', 'Kolor i jasność mierzy czujnik optyczny, nie ultradźwiękowy.'] } },
          { id: 'jomcp1', q: 'Robot jedzie wzdłuż czarnej linii. Co czujnik optyczny przekazuje mikrokontrolerowi?', options: ['tylko odczyt jasności pod sobą', 'gotowy obraz całej trasy', 'polecenie: skręć w lewo lub w prawo'], answer: 0, explain: 'Czujnik podaje tylko dane – jak jasno jest pod nim (liczbę albo „jasno/ciemno”). O skręcie decyduje program.',
            why: { options: ['o skręcie decyduje program na podstawie danych', 'czujnik sam śledzi linię jak kamera', 'czujnik ma w pamięci mapę całej trasy'], answer: 0, myth: 1, explain: 'Czujnik świeci podczerwienią i mierzy, ile światła wraca. Program porównuje to z progiem i wybiera skręt (lekcja Oak dla Year 11).', optionExplain: ['', 'Czujnik nie rozumie, co widzi – przekazuje tylko dane.', 'Czujnik nie zna trasy – mierzy tylko to, co jest tuż pod nim.'] } },
          // 4. próg
          { id: 'tmss7q', q: '🇵🇱 Przypomnienie (informatyka, kl. IV–VIII)\nProgram:\nif jasnosc < 30: lampa_wlacz()\nelse: lampa_wylacz()\n\nCzujnik zmierzył jasnosc = 30. Co zrobi program?', options: ['wyłączy lampę', 'włączy lampę', 'zgłosi błąd'], answer: 0, explain: '30 < 30 to fałsz (30 nie jest mniejsze od 30), więc wykonuje się else: lampa_wylacz(). Dlatego testuj też wartość równą progowi.' },
          { id: 'pb3z43', q: 'Robot na linii: czujnik nad białym podłożem pokazuje 90, nad czarną linią – 10. Jaki próg daje metoda z bawarskiego materiału ISB (średnia)?', options: ['50', '90', '10', '100'], answer: 0, explain: '(90 + 10) : 2 = 50. Odczyt powyżej 50 – robot jest nad białym, 50 i mniej – nad czarnym. (Liczby 90 i 10 są nasze; w ISB też wyszło 50.)' },
          { id: 'kvv9tg', q: 'W materiale ISB robot miał próg 50. Twój robot nad białym podłożem pokazuje 200, a nad czarną linią 80. Jaki próg ustawisz?', options: ['140', '50', '200'], answer: 0, explain: '(200 + 80) : 2 = 140. Próg 50 jest mniejszy od obu odczytów, a 200 równa się odczytowi nad białym – z regułą „odczyt > próg” robot zawsze wybierałby tę samą reakcję. Liczby są nasze.',
            why: { options: ['próg wyznacza się z pomiarów własnego czujnika', 'próg z materiału ISB pasuje do każdego robota', 'próg to zawsze połowa zakresu czujnika'], answer: 0, explain: 'Twój czujnik może pokazywać inne liczby niż robot z materiału ISB. Dlatego próg liczy się z własnych pomiarów – ISB: średnia odczytu nad białym i czarnym, lekcja MEXT: próg dobrany z danych z rejestratora.', optionExplain: ['', '50 wyszło w ich robocie – Twój pokazuje inne liczby.', 'Połowa zakresu może wypaść poza Twoje odczyty, np. gdy oba podłoża dają małe liczby.'] } },
          { id: 'uy8uda', q: 'Robot na linii: nad białym odczyt 90, nad czarnym 10. Ktoś ustawił próg 120. Reguła: odczyt > próg – lekko w lewo, w innym razie – lekko w prawo. Co zrobi robot?', options: ['ciągle skręca w prawo', 'jedzie wzdłuż linii', 'staje na czarnej linii'], answer: 0, explain: 'Każdy odczyt (od 10 do 90) jest mniejszy od 120, więc zawsze wykonuje się „w prawo” – robot kręci się w kółko. Próg musi leżeć między odczytami.' },
          { id: '8x4em4', q: '🇵🇱 Przypomnienie (informatyka, kl. VII–VIII)\nLampka ma trzy tryby. Program:\nif jasnosc < 60: lampka_slabo()\nelif jasnosc < 40: lampka_mocno()\nelse: lampka_wylacz()\n\nCzujnik pokazuje 30. Co zrobi lampka?', options: ['zaświeci słabo', 'zaświeci mocno', 'wyłączy się'], answer: 0, explain: '30 < 60 to prawda – wykona się pierwsza gałąź i dalszych warunków program już nie sprawdza. Przy tej kolejności lampka_mocno() nigdy się nie wykona: najpierw trzeba sprawdzić jasnosc < 40. Częsty błąd (lekcja Oak dla Year 6): myśleć, że kolejność warunków nie ma znaczenia. Progi 40 i 60 – jak w materiale ZPE o fotorezystorze.' },
          // 5. na czas czy na pomiar, sprzężenie zwrotne
          { id: 'm1ztah', q: 'Robot ma stanąć 10 cm przed ścianą. Program A: „jedź 3 s”. Program B: „jedź, aż czujnik pokaże ≤ 10 cm”. Robot nie zawsze jedzie z tą samą prędkością. Który program zatrzyma go we właściwym miejscu?', options: ['program B – z czujnikiem', 'program A – na czas', 'oba tak samo dobrze'], answer: 0, explain: 'Program A nie sprawdza, gdzie jest robot – przy innej prędkości przejedzie inną drogę. Program B mierzy odległość i reaguje. Japońskie szkolenie MEXT porównuje właśnie te dwa sposoby.',
            why: { options: ['B mierzy skutek ruchu i reaguje na pomiar', 'B jedzie wolniej, więc jest dokładniejszy', 'B ma dokładniejszy zegar niż program A'], answer: 0, explain: 'To sterowanie ze sprzężeniem zwrotnym: czujnik mierzy skutek działania, a program decyduje, kiedy skończyć.', optionExplain: ['', 'Prędkość nie ma tu znaczenia – B zatrzyma się po pomiarze odległości, czy jedzie wolno, czy szybko.', 'B w ogóle nie liczy czasu – liczy się odczyt czujnika.'] } },
          { id: 'fix7an', q: 'Co to jest sprzężenie zwrotne?', options: ['czujnik mierzy skutek działania, a sterownik je poprawia', 'sterownik sam wyłącza się po ustalonym czasie', 'dwa czujniki mierzą dokładnie tę samą rzecz', 'element wykonawczy działa bez żadnego programu'], answer: 0, explain: 'W pętli zamkniętej czujnik sprawdza, co się stało po działaniu elementu wykonawczego, a sterownik na tej podstawie poprawia działanie.' },
          { id: '2cyd42', q: 'Grzałka w akwarium: if temp < 24: grzałka_wlacz()\nelse: grzałka_wylacz()\n\nCzujnik pokazuje temp = 25. Co robi grzałka?', options: ['jest wyłączona', 'jest włączona', 'włącza się na minutę'], answer: 0, explain: '25 < 24 to fałsz, więc wykonuje się else – grzałka się wyłącza. Gdy woda ostygnie poniżej 24, grzałka znów się włączy – to sprzężenie zwrotne.' },
          { id: 'e9srtj', q: 'Ramię robota ma obrócić się dokładnie o 90° i tam stanąć. Który z tych silników wybrać?', options: ['serwo (serwomechanizm)', 'zwykły silnik prądu stałego'], answer: 0, explain: 'Z podanych – serwo. Działa w pętli zamkniętej: samo sprawdza położenie i staje tam, gdzie trzeba.',
            why: { options: ['serwo pilnuje położenia w pętli zamkniętej', 'wszystkie silniki działają tak samo', 'zwykły silnik sam wie, gdzie stanąć'], answer: 0, myth: 1, explain: 'Zwykły silnik prądu stałego pracuje w pętli otwartej – nie sprawdza położenia ani prędkości. Serwo ma sprzężenie zwrotne (lekcja Oak dla Year 10, ZPE).', optionExplain: ['', 'Silniki różnią się sposobem sterowania: pętla otwarta albo zamknięta.', 'Zwykły silnik kręci się, dopóki płynie prąd – nie zna swojego położenia.'] } },
          { id: 'uhshj2', q: 'Termostat w akwarium włącza grzałkę przy 23 °C i wyłącza przy 25 °C. Co się stanie, gdy tę różnicę (histerezę) zmniejszysz do 0,5 °C?', options: ['mniejsze wahania, częstsze przełączanie', 'większe wahania, rzadsze przełączanie', 'nic się nie zmieni w działaniu'], answer: 0, explain: 'Mała histereza: temperatura waha się mniej, ale termostat przełącza częściej – a to może szybciej zepsuć urządzenie (ZPE). Liczby są nasze.' },
          // 7. sygnał, nie moc; 8. awaria
          { id: 'xn30k6', q: 'Mikrokontroler ma kręcić silnikiem robota. Jak je połączyć?', options: ['przez sterownik silnika', 'wprost do pinu mikrokontrolera', 'do pinu przez dłuższy kabel'], answer: 0, explain: 'Silnik podłącza się przez sterownik silnika z własnym zasilaniem. Mikrokontroler podłączony bez zabezpieczenia może się zepsuć.',
            why: { options: ['mikrokontroler daje sygnał, a nie moc', 'mikrokontroler ma dość mocy na każdy silnik', 'silnik działa tylko z czujnikiem obok'], answer: 0, myth: 1, explain: 'Sterownik silnika działa jak elektroniczny przełącznik: dostaje sygnał z mikrokontrolera i zasila silnik z osobnego źródła (lekcja Oak dla Year 11).', optionExplain: ['', 'Mikrokontroler nie da silnikowi dość prądu i może się uszkodzić.', 'Silnik nie potrzebuje czujnika, żeby się kręcić – potrzebuje zasilania przez sterownik.'] } },
          { id: 'qusdlw', q: 'Czujnik wilgotności gleby od dwóch dni pokazuje tę samą liczbę, choć kwiat był podlewany. Co powinien zrobić dobrze zaprojektowany system?', options: ['zgłosić, że czujnik może być zepsuty', 'dalej działać według tej samej liczby', 'wyłączyć się bez żadnego komunikatu'], answer: 0, explain: 'Odczyt, który się nie zmienia, choć powinien, to znak możliwej awarii. Japonia: system projektuje się z założeniem, że czujnik może zawieść (komentarz i lekcja MEXT).' },
        ],
      },
    ],
  });
})();
