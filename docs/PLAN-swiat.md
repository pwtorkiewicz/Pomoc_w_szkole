# Plan ścieżki „🌍 Świat – nauka z innych krajów” (`swiat`, `swiat.html`)

Cel (decyzja rodzica, 14.11.2026): dzieci poznają to, czego uczą się ich rówieśnicy w innych krajach – **przede wszystkim nauki ścisłe, technikę, informatykę i inżynierię, a także sposób nauki (jak myślą inżynierowie, jak rozwiązywać zadania)** – a przy okazji trochę innej kultury. To nauka **uzupełniająca**: tego, czego nie ma w polskiej szkole albo co jest w niej dużo później.

## Decyzje

- **Osobna ścieżka, nie przedmiot w klasach** (decyzja rodzica, 14.11.2026 – zmiana względem pilotażu). Na ekranie wyboru jest przełącznik **🇵🇱 Polska szkoła / 🌍 Świat** (`group` w `js/sciezki.js`, `window.TRACK_GROUPS`). Ścieżki klas zostają czysto według polskiej podstawy. Powód: programy różnych krajów różnie rozkładają materiał na lata, więc dopasowanie „polska klasa = klasa za granicą” było sztywne – dział mógł wymagać wiedzy, której polskie dziecko jeszcze nie miało.
- **Działy według tematów, nie klas.** Przedmioty ścieżki to wątki tematyczne (niżej). W każdym działy idą od podstaw do trudniejszych. Pola działu:
  - `level` – 1 🌱 na start, 2 🌿 średni, 3 🌳 trudniejszy;
  - `age: [od, do]` – **sugerowany wiek dziecka** (decyzja rodzica, 14.11.2026), pokazywany dyskretnie obok poziomu: „🌱 Poziom 1 – na start · 8–10 lat”. Ustalamy go redakcyjnie: wiek uczniów, którzy uczą się tematu za granicą, i to, jak trudny jest nasz dział (ton, obliczenia). Obowiązkowy w każdym dziale z poziomem;
  - `requires: ['przedmiot/dział', …]` – „📌 Najpierw zrób” (link, ✅ gdy przerobiony; nic nie jest blokowane);
  - `where` – „🌍 Gdzie się tego uczą”: kraj(e) i wiek uczniów, np. „Japonia – kl. 3 (8–9 lat); Anglia – Year 4 (8–9 lat)”.
  Kraj **nie jest w nazwie działu** – nazwa mówi o temacie, kraje są w `where` i w ściądze („Jak to jest w …?”). Dzięki temu dział może łączyć kilka krajów.
- **Jedna ścieżka dla wszystkich dzieci, tryb dla młodszego na urządzeniu.** Dzieci uczą się na różnych urządzeniach (kl. 3 – tablet, kl. 4 – komputer, kl. 8 – telefon), więc postęp się nie miesza. Ścieżka ma `deviceYoung: true`: na stronie głównej przycisk „🧸 Tryb dla młodszego ucznia” włącza na tym urządzeniu lektor 🔊, gwiazdki i krótkie quizy (klucz `pomoc_mlodszy_swiat` w localStorage – nie trafia do zapisu postępu ani chmury). Gdy rzadko ktoś inny uczy się na tym samym urządzeniu, jego wyniki dopiszą się do tego samego postępu.
- **Ton** zależy od poziomu: działy poziomu 1 piszemy jak dla klas 1–3 (krótkie zdania, dużo obrazków, pola `say` do lektora), poziomu 2 – jak dla klas 4–6, poziomu 3 – jak dla klas 7–8. Do ucznia „na ty”, ale bez odwołań do wieku („tak jak ty”), bo czytają dzieci w różnym wieku.
- **Poza polską podstawą programową.** `basis` zaczyna się od „Poza polską podstawą programową – ścieżka „Świat” (decyzja rodzica).” i podaje zagraniczny dokument (z kodem wymagania). Przykład z programu („for example”, „z. B.”, *elaborations*) opisujemy jako przykład, nie jako „wszyscy uczą się X”.
- **Źródła:** fakty o szkołach i programach za granicą – **tylko z oficjalnych dokumentów ministerstw**. Wiedza przedmiotowa (np. jak działa dźwignia) – z zpe.gov.pl albo innych pewnych źródeł; obliczenia i kod – sprawdzone. Zadania piszemy sami, **nie kopiujemy zadań ani podręczników** innych krajów. Zanim napiszemy „w Polsce tego nie ma”, sprawdzamy to w tekście podstawy.
- **Rozszerzone źródła – sposób uczenia z innych krajów** (decyzja rodzica, 14.11.2026). Poza programem (co) korzystamy z oficjalnych **przewodników i komentarzy ministerstw** (jak uczą: tok lekcji, doświadczenia, typowe błędy dzieci – np. 小学校学習指導要領解説 MEXT, „notes and guidance” w Anglii, NGSS) i z **otwartych materiałów finansowanych przez państwa** (np. Oak National Academy – licencję sprawdzamy przy każdym materiale; na otwartej licencji wolno przerabiać z podaniem źródła). Piszemy własnymi słowami, tłumaczenia oznaczamy jako nasze; **komercyjnych podręczników nie używamy**. Gdy ZPE nie ma tematu, oficjalny materiał zagraniczny może być głównym źródłem wiedzy – wtedy, gdy się da, sprawdzamy fakty w drugim źródle. Za „metodę kraju” uznajemy tylko to, co jest w jego oficjalnych dokumentach (przykład: singapurskiego modelu paskowego nie ma w sylabusie). W dziale: ramka „Jak uczą tego w …?” w ściądze, kroki „🔬 Zrób w domu” w lekcji.
- **Zakładka „🔗 Materiały”** (pole `materials`, format w `docs/LEKCJE.md`): filmy, animacje, zdjęcia, lekcje online z ZPE i oficjalnych/publicznych serwisów innych krajów; dla rodzica – dokumenty źródłowe w oryginale. Każdy link otwieramy i oglądamy przed dodaniem; `node tools/sprawdz-linki.js swiat` sprawdza, czy działają.
- **Bez polityki i ideologii.** Nie dodajemy przedmiotów wykluczonych w całej aplikacji (edukacja zdrowotna, etyka, religia jako przedmiot) ani wychowania obywatelsko-politycznego innych państw. Historii innych krajów na razie nie dodajemy.
- **Źródła zagraniczne – stan dostępu (14.11.2026):** w sieci środowiska są strony ministerstw i programów Anglii (gov.uk), Japonii (mext.go.jp), Singapuru (moe.gov.sg), Korei (moe.go.kr, ncic.re.kr), Australii, USA (NGSS), Finlandii (ePerusteet), Estonii, Bawarii (LehrplanPLUS), Szwajcarii (Lehrplan 21) i KMK. **Chiny – dokumentów nie udało się pobrać**: chińskich tematów nie dodajemy, dopóki nie przeczytamy oryginału.
- **Synchronizacja:** nowa ścieżka na urządzeniu już połączonym z chmurą rodzica jest „tylko na tym urządzeniu”, dopóki rodzic nie wybierze dziecka na stronie `#/chmura` tego urządzenia.

## Wątki tematyczne (przedmioty ścieżki) i działy

Źródło pomysłów i kolejności: **`docs/research/reports/Mapa tematów z programów świata.md`** (11 krajów, cytaty, kody wymagań, porównanie z polską podstawą; notatki: `docs/research/research_notes/Mapa tematów z programów świata/`). Mapa przypisuje tematy do polskich klas – w tej ścieżce traktujemy to tylko jako wskazówkę poziomu.

| Wątek (id przedmiotu) | Działy – od najłatwiejszego (✅ zrobione) |
|---|---|
| 🔢 Liczenie po świecie (`liczenie`) | ✅ Tabliczka mnożenia do 12 × 12 (🌱 8–10 lat, Anglia) · [ ] Soroban – japońskie liczydło (🌱, Japonia) · [ ] 4 kroki rozwiązywania zadań – Pólya (🌿, Singapur) |
| ⚙️ Maszyny i konstrukcje (`maszyny`) | [ ] Huśtawka i równowaga (🌱, Bawaria, Korea) · ✅ Mechanizmy: dźwignia, krążek, koła zębate, krzywka (🌿 9–12 lat, Anglia) · ✅ Mosty i trójkąty (🌿 9–11 lat, Bawaria, Anglia) · [ ] Pojazd: napęd, kierownica, hamulec (🌿, Korea) · [ ] Maszyny proste i złota reguła mechaniki (🌳, Szwajcaria, Anglia) |
| ⚡ Elektryczność i sterowanie (`elektrycznosc`) | ✅ Magnesy (🌱 7–9 lat, Anglia, Japonia, Singapur) · [ ] Czy żarówka się zaświeci? Obwód (🌱, Japonia, Anglia) · [ ] Obwody szeregowe i równoległe, elektromagnes (🌿, Japonia, Szwajcaria) · [ ] Z czego jest robot (🌿, Estonia, Korea, Finlandia) · ✅ Czujniki i sterowanie (🌳 12–15 lat, Anglia, Japonia; wymaga: bramki) |
| 💻 Informacja i algorytmy (`informacja`) | [ ] Algorytm z warunkiem (🌱, Estonia, Australia) · [ ] Obrazek z zer i jedynek (🌿, USA) · [ ] Kody wykrywające błędy (🌿, Szwajcaria) · ✅ Logika i bramki logiczne (🌳 12–15 lat, Anglia) · [ ] Półsumator i dodawanie dwójkowe (🌳, Bawaria, Anglia; wymaga: bramki) · [ ] Wyszukiwanie binarne (🌳, Szwajcaria, Anglia) · [ ] Jak uczy się sztuczna inteligencja (🌳, Korea, Singapur) |
| 🧪 Jak pracuje inżynier (`inzynier`) | [ ] Uczciwy test (🌱, Anglia, USA) · [ ] Proces projektowania: problem, kryteria, prototyp, test (🌿, USA NGSS, Australia) |
| 🌏 Szkoły świata (`szkoly`) | [ ] krótkie, sprawdzone ciekawostki o szkołach (np. key stages w Anglii, skala ocen w Niemczech) – tylko z oficjalnych źródeł |

Przedmiot pojawia się w aplikacji dopiero z pierwszym działem (silnik nie pokazuje pustych przedmiotów – sprawdzarka zgłasza „przedmiot bez działów”). Rekomendowana kolejność z mapy (sekcja 8): najpierw magnesy, mosty i trójkąty, czujniki i sterowanie; potem soroban, obwody szeregowe i równoległe, półsumator.

Rozszerzenia istniejących działów:
- [ ] Mechanizmy: równia pochyła, klin, reguła równowagi dźwigni (krok lekcji).
- [ ] Bramki: XOR (Bawaria, Realschule IT: „Antivalenz”), światło schodowe z dwoma włącznikami.

Ustalenia z researchu:
- **Singapurskiego modelu paskowego nie ma** w sylabusie matematyki MOE 2021 – skreślony; zamiennik: „4 kroki Pólyi” (jest w sylabusie).
- **Soroban** ma oficjalne oparcie (MEXT, matematyka kl. 3); budowę liczydła trzeba wziąć ze źródła encyklopedycznego.
- Decyzje czekające na rodzica: mediana i wykres pudełkowy, twierdzenie odwrotne do Pitagorasa (kolidują z wyłączeniami egzaminu – nie przed majem 2027), „Bawaria” zamiast „Niemcy” w opisach – sekcja 9 mapy.

## Stan na koniec sesji 14.11.2026 – od czego zacząć w nowej sesji

**Gotowe i wysłane na gałąź:** ścieżka `swiat.html` z przełącznikiem 🇵🇱 Polska szkoła / 🌍 Świat; sześć działów: tabliczka 12 × 12, mechanizmy, mosty i trójkąty, magnesy, czujniki i sterowanie, bramki logiczne – każdy z poziomem, sugerowanym wiekiem, „Gdzie się tego uczą”, ściągą, infografiką, fiszkami, quizem i lekcją; nowy przedmiot ⚡ Elektryczność i sterowanie (`elektrycznosc`); tryb dla młodszego ucznia na urządzeniu; mapa researchu 11 krajów.

**Tura 1 (zrobiona 14.11.2026):**
- ⚡ Magnesy (🌱 7–9 lat; 11 fiszek, 16 pytań, 6 kroków lekcji): Anglia science Year 3 „Forces and magnets”, Japonia 理科 kl. 3 A⑷ (MEXT, s. 96), Singapur P3 „Magnets” (MOE 2023/2026). Wiek Japonii – strona MEXT o obowiązku szkolnym; wiek Singapuru – zasady zapisów do Primary 1 (moe.gov.sg). Wiedza – ZPE („Co to jest magnes?”, „Oddziaływania magnetyczne”, „Cechy linii pola magnetycznego”). W pytaniach tylko przedmioty o pewnym zachowaniu (żelazo, stal, drewno, papier, gumka, miedź, złoto) – bez monet, aluminium i stali nierdzewnej. Polska: magnesów nie ma w edukacji wczesnoszkolnej, są w przyrodzie IV–VI (PP2026 dz. 5 wym. 4) i fizyce VII (PP2024 dz. VII).
- ⚙️ Mosty i trójkąty (🌿 9–11 lat; 12 fiszek, 15 pytań, w tym 1 z rysunkiem, 6 kroków): Bawaria HSU 3/4, Lernbereich 6.2 (cytaty z LehrplanPLUS), Anglia D&T KS2 („strengthen, stiffen and reinforce”). Wiedza – ZPE (kratownica, most belkowy i łukowy, most wiszący, przęsło, przyczółki, trójkąt o danych bokach). **Wieku dzieci w Bawarii nie podajemy** – km.bayern.de i gesetze-bayern.de są niedostępne z sesji. Szwajcarii (NMG.5.1) nie cytujemy – nie pobrano dokumentu.
- ⚡ Czujniki i sterowanie (🌳 12–15 lat, „Najpierw zrób”: bramki; 11 fiszek, 16 pytań, 6 kroków): Anglia D&T KS3 (inputs/sensors, outputs/actuators, microcontrollers), Japonia 技術・家庭 D⑶ „計測・制御のプログラミング” (MEXT, gimnazjum, s. 134). Wiedza – ZPE (automatyka przemysłowa: sterownik PLC, wejścia/wyjścia, czujniki optyczny i ultradźwiękowy, serwo w pętli zamkniętej). Programy – pseudokod w stylu Pythona; przykłady urządzeń wymyślone.

**Pilotaż rozszerzonych źródeł – Magnesy (14.11.2026):** ściąga z ramkami „Jak uczą tego w Japonii?” (tok badacza: zauważ → zapytaj → przewiduj → sprawdź → zapisz → wniosek; w kl. 3 – porównywanie, tabela wyników, wyczuwanie siły ręką, igła kompasu) i „…w Anglii?” (różne magnesy, uczciwe porównanie siły), „🔬 Zrób w domu: kompas z igły” (ZPE), ostrzeżenia (karty magnetyczne – MEXT; połykanie małych magnesów – UOKiK, znane tylko z wyszukiwarki); lekcja przebudowana (badacz, tabela przewidywań z niespodzianką – folia aluminiowa, kompas z igły); +5 fiszek, +7 pytań; zakładka „🔗 Materiały”: 2 filmy ZPE, angielska wersja lekcji ZPE, 3 dokumenty dla rodzica (MEXT 解説 s. 10 i 35–36, program Anglii, sylabus Singapuru). Źródło: 小学校学習指導要領解説 理科編 (mext.go.jp). **Nie udało się:** Oak National Academy, NHK for School i BBC Bitesize są zablokowane w sieci środowiska (próba dodania adresów została odrzucona) – zagranicznych filmów jeszcze nie ma; rodzic może dodać hosty `www.thenational.academy`, `www.nhk.or.jp`, `www2.nhk.or.jp`, `www.bbc.co.uk`, `archiwum.uokik.gov.pl` w ustawieniach środowiska (Network access → Allowed domains).

**Standard działu „Świat” i nowe pomoce (decyzje rodzica, 14.11.2026):**
- Standard działu: analiza różnicy PL vs inne kraje (treść skupiona na tym, czego polska szkoła nie daje albo daje później); wspólne elementy tylko jako krótkie przypomnienie z etykietą polskiej klasy; w dziale: widżet, doświadczenie z kartą pracy, projekt z kryteriami, pytania „Przewiduj i wyjaśnij” oparte na udokumentowanych błędnych przekonaniach, materiały.
- Burza mózgów o zakładkach (raport: `docs/research/reports/Zakładki działu – burza mózgów.md`) – przyjęto pakiet: „🛠️ Zrób” (zamiast „Zadania otwarte”, gdy dział ma karty), „🔮 Przewiduj i wyjaśnij” (rodzaj pytania w quizie), ramka „👪 Dla rodzica” (na razie w „Świecie”). **„🔁 Powtórka na dziś” – pilotaż w „Świecie” po pakiecie** (nowe pole synchronizacji, bez zmian w `Kod.js`). „Ściąga” i „W pigułce” zostają osobno.
- **Magnesy przebudowane według standardu (14.11.2026):** research 6 źródeł z niezależną weryfikacją (111 ustaleń; Polska – tekst podstaw, Oak National Academy, BBC Bitesize, NGSS, Korea i Japonia, UOKiK/ZPE); przypomnienie (przyroda kl. 4–6) + 7 rozszerzeń (odległość, ułożenie, większy ≠ silniejszy i uczciwe porównanie, działanie przez materiały, namagnesowanie, kształty magnesów, zapowiedź elektromagnesu); widżet „Laboratorium magnesów”; 3 karty „Zrób” (doświadczenie z kartą pracy, projekt zatrzasku – Korea/NGSS, kompas z igły); 7 pytań dwuetapowych z mitami z Oak; ramka dla rodzica; materiały: ZPE + 4 lekcje Oak (OGL) + dokumenty dla rodzica (MEXT, DfE, Oak, NGSS, MOE, UOKiK). Usunięte pytania (id nie używać ponownie): `j3vhck`, `d2heuc`, `hp7wuw`, `4hnpxw`, `gk7bjn`, `bxvz7v`. NHK for School – nie linkujemy (usługa dla Japonii, bramka abonamentowa); BBC – nie sprawdzono odtwarzania z Polski, nie linkujemy.
- Do zrobienia: ten sam standard dla „Mostów” i „Czujników”, potem „Powtórka na dziś”, potem tura 2.
- **Pauza 14.11.2026 (limity rodzica) – jak wznowić:** (1) recenzja adwersaryjna zmian (silnik + Magnesy, 4 wymiary: silnik, merytoryka, bezpieczeństwo, pytania; 2 sceptyków na znalezisko) została przerwana – wyniki częściowe w `docs/research/research_notes/Magnesy – standard różnicy/recenzja-czesciowa.json`; uruchomić ją od nowa (ten sam zakres) i naprawić potwierdzone błędy; (2) przeglądy wszystkich ścieżek i test synchronizacji po zmianach silnika – OK; (3) research Magnesów: `synteza.md`, `krytyka.md`, `ustalenia-zweryfikowane.json` w tym samym katalogu; (4) dalej: Mosty i Czujniki według standardu, potem pilotaż „Powtórki na dziś”.

**Następny krok (propozycja):** tura 2 – 🔢 Soroban (🌱; potrzebne źródło encyklopedyczne o budowie liczydła), ⚡ Obwody szeregowe i równoległe, elektromagnes (🌿, Japonia kl. 4–5, Szwajcaria – trzeba pobrać Lehrplan 21), 💻 Półsumator i dodawanie dwójkowe (🌳, Bawaria, Anglia). Przed pisaniem: cytaty z oryginałów (pobierać `curl`, pliki do katalogu tymczasowego, nie do repozytorium), wiedza z ZPE, sprawdzenie w tekście polskiej podstawy.

**Otwarte pytania do rodzica:**
- Ścieżka niemiecka dla siostrzenicy: kraj związkowy, klasa i typ szkoły, czy dziecko czyta po polsku (osobna ścieżka w grupie 🇩🇪 Niemcy – nie część „Świata”).
- Decyzje z sekcji 9 mapy: mediana / wykres pudełkowy i twierdzenie odwrotne do Pitagorasa (propozycja: nie przed egzaminem w maju 2027), pisanie „Bawaria” zamiast „Niemcy”.
- Czy przedziały wieku działów (tabliczka 8–10, magnesy 7–9, mechanizmy 9–12, mosty 9–11, czujniki i bramki 12–15 lat) są dobre.

**Do zrobienia przez rodzica (raz):** na każdym urządzeniu połączonym z arkuszem wejść w Świat → ☁️ Synchronizacja i wybrać dziecko przy ścieżce „Świat” (inaczej wyniki zostaną tylko na urządzeniu). Na tablecie klasy 3 włączyć „🧸 Tryb dla młodszego ucznia”.

**Uwagi techniczne dla sesji:**
- Sieć środowiska „Default” ma dodane strony ministerstw i programów (mext.go.jp, moe.gov.sg, moe.go.kr, ncic.re.kr, australiancurriculum, nextgenscience.org, ePerusteet/oph.fi, harno.ee/hm.ee/riigiteataja.ee, kmk.org, lehrplanplus.bayern.de, lehrplan21.ch/zh.lehrplan.ch, moe.gov.cn). Pobieramy przez `curl` w Bash (`pdftotext` jest zainstalowany); narzędzie WebFetch w agentach pomocniczych nie widzi tych adresów (błąd DNS).
- Chiny: moe.gov.cn przekierowuje na HTTP i nie działa przez proxy – chińskich tematów nie dodajemy bez oryginalnego dokumentu.
- Lekcje: `docs/LEKCJE.md`; id markerów w ścieżce „Świat” z przedrostkiem `a-sw…`; nowe id pytań: `node tools/nowe-id.js`.

## Historia

- 14.11.2026 – pilotaż jako przedmiot `swiat` w ścieżkach kl3, kl4, kl8 (trzy działy z programów Anglii).
- 14.11.2026 – research 11 krajów (mapa ustaleń).
- 14.11.2026 – przebudowa na osobną ścieżkę `swiat` według tematów (decyzja rodzica); trzy działy pilotażu przeniesione (id pytań bez zmian, postęp z pilotażu nie przechodzi – inny klucz zapisu).
- 14.11.2026 – sugerowany wiek przy każdym dziale (pole `age`, decyzja rodzica).
- 14.11.2026 – tura 1: magnesy, mosty i trójkąty, czujniki i sterowanie; nowy przedmiot `elektrycznosc`.
- 14.11.2026 – rozszerzone źródła (przewodniki ministerstw, otwarte materiały państwowe; decyzja rodzica), zakładka „🔗 Materiały” w silniku, pilotaż na „Magnesach”.

## Osobny temat: ścieżka niemiecka dla siostrzenicy

Nie jest częścią ścieżki „Świat”. To osobna ścieżka (program jednego kraju związkowego, treści po niemiecku) – w grupie przełącznika (np. 🇩🇪 Niemcy). Czeka na odpowiedzi rodzica: kraj związkowy, klasa i typ szkoły, czy dziecko czyta po polsku.
