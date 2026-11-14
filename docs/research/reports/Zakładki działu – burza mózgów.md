<!-- Burza mózgów 14.11.2026: 7 perspektyw (nauka o uczeniu się, praktyki krajów, dziecko, rodzic, STEM, silnik, krytyk), scalenie, 3 sędziów. Twierdzenia o badaniach i dokumentach zagranicznych oznaczone DO SPRAWDZENIA nie są zweryfikowane. Decyzje rodzica – w docs/PLAN-swiat.md. -->

# Nowe zakładki i rodzaje pomocy w działach: raport z burzy mózgów

**Najkrótsze podsumowanie:** nie dodawać wielu nowych zakładek. Wystarczą jedna nowa zakładka **🛠️ Zrób** (w miejsce „✍️ Zadania otwarte”), jeden nowy **rodzaj pytania (🔮 Przewiduj i wyjaśnij)** i ramka **👪 Dla rodzica**. Najcenniejsza ze wszystkich propozycji to **🔁 Powtórka na dziś**. Nie jest to zakładka, tylko funkcja całej ścieżki, i trzeba ją zrobić ostrożnie, bo dodaje dane do synchronizacji.

Stan obecny (sprawdzony w `js/app.js`, funkcja `topic()`): dział ma do 7 zakładek w kolejności 🎓 Lekcja · 📖 Ściąga · 🗺️ W pigułce · 🃏 Fiszki (n) · ✅ Quiz (n) · ✍️ Zadania otwarte (n) · 🔗 Materiały (n). Pasek zawija się w wiersze (`flex-wrap`), więc na 400 px zajmuje 2–3 linijki. W trybie młodszego ucznia przyciski są większe, więc linijek jest więcej. Każda zakładka to dziś osobno napisane warunki w kodzie.

---

## 1. Rekomendacja

### A. Wprowadzić teraz (to wprost zatwierdzony standard „Świata”)

**1. Uporządkowanie kodu zakładek + jedna zakładka „🛠️ Zrób”**
- **Co to jest:** dzisiejsze „✍️ Zadania otwarte” stają się zakładką „🛠️ Zrób”. W środku są karty różnego rodzaju: zadanie, doświadczenie, projekt, a później też „Wytłumacz”.
- **Dlaczego:** doświadczenie, projekt i zadanie mają ten sam układ (polecenie → kroki → kryteria → samoocena). Trzy osobne zakładki rozbiłyby jedną czynność na trzy miejsca i rozsadziły pasek. W tym punkcie zgadzają się wszyscy trzej sędziowie.
- **Przykład:** w Magnesach w „Zrób” są dwie karty: „Co przyciąga magnes?” (doświadczenie) i „Wędka na rybki” (projekt).
- **Zmiany w silniku:**
  - zamiana powielonych warunków w `topic()` na jedną listę zakładek (TABS); adresy `#/…/lekcja`, `/teoria`, `/quiz`, `/zadania` itd. się nie zmieniają;
  - w zadaniach nowe pola `kind`, `safety`, `needs`;
  - nazwa „🛠️ Zrób” pojawia się tylko wtedy, gdy w dziale jest karta inna niż zwykłe zadanie, więc w egzaminie zostaje „✍️ Zadania otwarte”;
  - zrobione karty zapisują się w istniejących polach `tasks`/`tasksAt`: bez nowej reguły łączenia i bez zmian w skrypcie arkusza (`Kod.js`);
  - osobny commit i `przeglad.js` dla wszystkich ścieżek, szczególnie `egzamin8`.

**2. 🔮 Przewiduj i wyjaśnij – nowy rodzaj pytania (bez nowej zakładki)**
- **Co to jest:** pytanie w dwóch etapach. Najpierw „Co się stanie?”, potem „Dlaczego?”. Wśród uzasadnień jest typowe błędne przekonanie oznaczone jako mit. Każda zła odpowiedź ma własne wyjaśnienie.
- **Gdzie:** w zwykłym Quizie i jako mini-pytanie w lekcji.
- **Dlaczego:** zwykłe pytanie zamknięte nagradza dobrą odpowiedź także wtedy, gdy dziecko trafiło z błędnego powodu. Drugi etap pokazuje, jak dziecko naprawdę myśli. Wszyscy trzej sędziowie dali „teraz”.
- **Przykłady:**
  - Magnesy: „Folia aluminiowa to metal. Przyłożysz magnes – co się stanie?”, potem „Dlaczego?”: [przyciąga żelazo i stal, a aluminium nie / przyciąga każdy metal (mit) / folia jest za cienka].
  - Czujniki: `if jasnosc < 30` przy odczycie dokładnie 30 – czy lampa się włączy?
- **Zmiany w silniku:**
  - nowe pola pytania `why`, `optionExplain`, `myth`; stare pytania działają jak dotąd;
  - zaliczenie liczy się pod tym samym `id`, więc postęp i „Powtórka błędów” działają bez zmian i nie ma nowego pola w synchronizacji;
  - `sprawdz-dane.js` i `jakosc-pytan.js` od pierwszego dnia sprawdzają też drugi etap (dokładnie jedna poprawna odpowiedź, podobne długości opcji);
  - w trybie młodszego ucznia tylko etap „Co się stanie?”: obrazek, 2 opcje, lektor 🔊.

**3. Karta doświadczenia i karta projektu (w „Zrób”)**
- **Doświadczenie:**
  - tok badacza: zauważ → zapytaj → przewiduj → sprawdź → zapisz → wniosek;
  - lista rzeczy z domu, ramka „🧑‍👧 Z dorosłym / ⚠️ Bezpiecznie”, tabela „Przewiduję / Wyszło / Dlaczego?”;
  - wydruk A4 w kolorach jak w trybie jasnym (tak jak dziś infografika).
- **Projekt w wersji minimalnej:** problem, 3–5 mierzalnych kryteriów, ograniczenia, samoocena przy każdym kryterium.
- **Na później:** macierz decyzyjna z wagami, role dla rodzeństwa i szablony do wycięcia.
- **Przykłady:**
  - Magnesy: doświadczenie „Co przyciąga magnes?” (spinacz, łyżeczka, gumka, folia, klocek) i projekt „Wędka” (łowi rybkę ze spinaczem w 3 z 5 prób).
  - Czujniki: doświadczenie bez sprzętu „Ty jesteś sterownikiem” i projekt „Lampka nocna” z 3 przypadkami testowymi, w tym wartością graniczną.
- **Zmiany w silniku:**
  - widok karty w ramach `openTasks()`, „Zrobione” zapisywane w `tasks`/`tasksAt`;
  - wpisy dziecka w tabeli zostają tylko na urządzeniu (localStorage) i nie trafiają do arkusza;
  - sprawdzarka wymaga pól `safety` i `source`.
- **Warunki publikacji:** każde doświadczenie i każdy projekt ktoś wcześniej wykonuje naprawdę, w domu.

**4. 👪 Dla rodzica – zwinięta ramka, na początek tylko w „Świecie”**
- **Co to jest:** jeden ekran telefonu. Zawiera:
  - cel działu i ile czasu zajmuje;
  - 3–4 typowe pomyłki dzieci;
  - „czego nie mówić”;
  - co przygotować do doświadczenia;
  - „💬 Porozmawiajmy”, czyli 5–8 pytań do rozmowy;
  - „✔️ Skąd to wiemy?” (twierdzenie → źródło → data sprawdzenia).
- **Co tu przenosimy:** `basis`, „Gdzie się tego uczą” i dokumenty `forParent`. Dziś 7-latek widzi w ściądze cytaty po japońsku i angielsku.
- **Dlaczego:** rodzic w 5 minut wie, jak pomóc i czego nie powtórzyć dziecku. Do tego może łatwo sprawdzić zasadę „żadnych faktów z pamięci”.
- **Przykład z Magnesów:** pomyłka „magnes przyciąga każdy metal”; pytanie do rozmowy „Dlaczego magnes trzyma się lodówki, a nie drewnianych drzwi?”; uproszczenie „nie mówimy o niklu i kobalcie”.
- **Zmiany w silniku:**
  - widok tylko do czytania, bez nowego stanu i bez zmian w `Kod.js`;
  - Materiały liczą wtedy tylko linki dla dziecka;
  - ostrzeżenia bezpieczeństwa zostają także w treści dla dziecka.
- **Egzamin:** przeniesienie `basis` dopiero po Twojej osobnej decyzji.

### B. Pilotaż na 1–2 działach (najpierw w „Świecie”)

| Pomysł | Co to jest | Przykład | Zmiana w silniku |
|---|---|---|---|
| **🔁 Powtórka na dziś** (najwyższa ocena: 4,7) | Kafelek na stronie ścieżki: „Na dziś: Magnesy – 3 pytania”. Działy wracają po 1, 3, 7, 14, 30 dniach. Dla młodszych „⭐ Przypomnij sobie” (najwyżej 5 pytań z lektorem). Bez serii dni, płomyczków i licznika zaległości. Najwyżej 2 działy dziennie. | Czwartek po poniedziałkowych Magnesach: 3 pytania (folia, N–N, kompas). | Jedyna rzecz, która wymaga **nowego pola w synchronizacji** (`review`), czyli reguły w `mergeState`, opisu w `CHMURA.md`, testu dwóch urządzeń i wpisu w `EMPTY()`. Na start bez zmiany raportu w `Kod.js`. Pudełka fiszek („✅ Wiem / 🔁 Jeszcze nie”) w drugim kroku. Egzamin tylko za przełącznikiem. |
| **🗣️ Wytłumacz to** | Karta w „Zrób”: „Wytłumacz misiowi / młodszemu bratu, dlaczego…”, potem lista „Dobre wyjaśnienie zawiera…” do odhaczenia i dopiero na końcu wzorzec. | „Dlaczego igła na korku pokazuje północ” (magnes, biegun, północ). | Rodzaj karty `explain`: pola wyboru zamiast przycisków 0..n, zapis w `tasks`. Tekstu dziecka nie zapisujemy, nie nagrywamy głosu. |
| **🎛️ Wyzwania w widżecie** (dawne „Laboratorium”) | Widżet z 3–4 zadaniami do wykonania, które sam sprawdza, np. „Ustaw tak, żeby…”. To krok lekcji albo karta w „Zrób”, **nie osobna zakładka**. | Czujniki: „Ustaw próg tak, żeby lampka paliła się w szafie (10), a nie przy oknie (80)”. | Widżet zgłasza zmiany (`onChange`), a cel wyzwania (`goal`) jest w danych. Jeden nowy widżet (sterownik albo magnesy) plus tryb wyzwań dla 1–2 istniejących. **Mikrofon i kamera telefonu – nie.** |
| **🔎 Zagadka na start** | Jedno pytanie Przewiduj pokazane przed lekcją i obowiązkowo powtórzone na końcu („Na początku wybrałeś X…”). Bez punktów, z przyciskiem „Pomiń”. | Spinacz „wiszący w powietrzu” na nitce pod magnesem. | Pole `pretest: [id…]` z istniejących pytań. Wynik **nie** trafia do statystyk ani do „Powtórki błędów”, a wybór dziecka zostaje na urządzeniu. |
| **💡 „Nie rozumiem” w lekcji** | Drugie, prostsze wyjaśnienie kroku (`simpler`) i 1–2 podpowiedzi tylko przy najtrudniejszych pytaniach. | Magnesy: „N do N – odpychają się. A S do S?”. | Pola są opcjonalne, bez zapisu postępu. Sprawdzarka pilnuje, żeby podpowiedź nie zdradzała odpowiedzi. W teście próbnym egzaminu podpowiedzi wyłączone. |
| **🧠 Z pamięci (sama lista)** | „Napisz albo powiedz rodzicowi, co pamiętasz”, potem lista 6–10 myśli do odhaczenia i link do fiszek z tym, czego brakło. | Czujniki: wejście → sterownik → wyjście, `<` czy `<=`… | Pole `recall`, wynik tylko na urządzeniu. Wersji infografiki z zakrytymi podpisami **jeszcze nie** robić. |
| **🧩 Sortuj / ułóż** (osobny pilotaż w kl. 3 i na poziomie 🌱) | Kafelki do koszyków albo w kolejności, na telefonie przez stuknięcie zamiast przeciągania. | Magnesy: „przyciąga / nie przyciąga” (gwóźdź, spinacz, linijka, folia). | Nowe renderery w Quizie. Na start bez zapisu albo pod osobnym kluczem, żeby nie ruszać prognozy. Najwyżej 8 elementów, każdy ma dokładnie jeden koszyk. |
| **📖 Ściąga z pigułką w jednej zakładce** (**decyzja należy do Ciebie**, bo „W pigułce” to Twój pilotaż) | Infografika jako zwinięta miniatura nad ściągą, z przyciskiem 🖨️. Pasek krótszy o jedną pozycję. | Magnesy: kafelek „przyciąga / nie przyciąga, N–S” nad ściągą. | Stary adres `…/pigulka` przekierowuje do ściągi. Druk nadal na jednej stronie. Egzamin bez zmian do czasu Twojej zgody. |

### C. Później albo odrzucone

**Później (dobre pomysły, ale za drogie albo przedwczesne):**
- 🖨️ **Zeszyt działu do druku** – gdy będą już karty doświadczeń i projektów, które jest co składać.
- 🧭 **Grupy zakładek Poznaj → Ćwicz → Zrób i przycisk „▶ Co dalej?”** – dopiero gdy zakładek realnie będzie więcej niż 7.
- 🧭 **Cele „Umiem…” z samooceną** – na razie lista „Umiem…” może trafić do ramki dla rodzica.
- 🧩 **Krok po kroku (przykład rozwiązany, potem coraz mniej pomocy)** – raczej matematyka w egzaminie i kl. 8. Później jako rodzaj karty w „Zrób”.
- 🔀 **Mieszanka z kilku działów i mapa powiązań** – gdy wątek ma 4–5 działów. Pole `links` można wpisywać już teraz.
- 🐞 **Śledź program krok po kroku** – pojedyncze pytania „znajdź błąd w kodzie” można pisać już dziś jako zwykłe pytania.
- 🕵️ **Pułapki myślenia jako osobne karty** – mity mają jedno miejsce: pole `myth` w pytaniach Przewiduj.
- ⏱️ **Rozgrzewka przed działem** – później jako wariant Powtórki („Przed Czujnikami powtórz bramki”).
- 🎯 **Pewność odpowiedzi w quizie** – po pilotażu Powtórki, tylko na urządzeniu.
- 👥 **„Kto ma rację?” i układanie wyjaśnienia z klocków** – „Kto ma rację?” jako graficzny wariant Przewiduj; klocki później.
- 🔍 **Wokół nas** – scenki z życia już teraz jako zwykłe pytania; lista „poszukaj w domu” do ramki dla rodzica.
- ⚖️ **Planer uczciwego testu** – teraz jako sekcja karty doświadczenia, osobny widżet przy dziale „Uczciwy test”.
- 📚 **Słówka-podpowiedzi w tekście** i 📊 **Moje pomiary z wykresem**.
- 📓 **Dziennik badacza i odznaki umiejętności**.

**Odrzucone:** czat z AI, rankingi i serie dni, osobne zakładki „Słowniczek”, „Ciekawostki” i „Gry” (uzasadnienia w punkcie 5).

---

## 2. Pasek zakładek po zmianach

**Etap 1 (teraz) – dział „Świata”, nadal najwyżej 7 pozycji:**

`🎓 Lekcja · 📖 Ściąga · 🗺️ W pigułce · 🃏 Fiszki (n) · ✅ Quiz (n) · 🛠️ Zrób (n) · 🔗 Materiały (n)`

Pod paskiem albo na dole Ściągi jest zwinięta linijka **„👪 Dla rodzica ▸”**.

- **Co łączymy:**
  - „✍️ Zadania otwarte”, doświadczenie, projekt i później „Wytłumacz” → **🛠️ Zrób**;
  - Przewiduj i wyjaśnij, a później Sortuj i „Kto ma rację?” → **✅ Quiz**;
  - `basis`, „Gdzie się tego uczą”, dokumenty `forParent`, „Porozmawiajmy” i „Skąd to wiemy?” → **👪 Dla rodzica**.
- **Co trafia do lekcji zamiast nowej zakładki:**
  - widżet z wyzwaniami (krok lekcji);
  - zagadka na start (przed krokiem 1, z powrotem na końcu);
  - mini-pytanie Przewiduj;
  - przycisk „Nie rozumiem” (`simpler`).
- **Co jest poza działem:** 🔁 Powtórka na dziś to kafelek na stronie głównej ścieżki.

**Etap 2 (jeśli zgodzisz się połączyć Ściągę z pigułką):**

`🎓 Lekcja · 📖 Ściąga · 🃏 Fiszki · ✅ Quiz · 🛠️ Zrób · 🔗 Materiały · 👪 Dla rodzica`

To 7 pozycji, a ramka dla rodzica staje się zakładką.

**Telefon (~400 px):**
- twardy limit 7 pozycji;
- liczniki (n) można chować poniżej 420 px, żeby pasek mieścił się w 2 linijkach;
- grupy Poznaj / Ćwicz / Zrób z przyciskiem „▶ Co dalej?” dopiero, gdy zakładek przybędzie, jako ustawienie ścieżki (`tabsMode`);
- egzamin i kl. 8 zostają przy płaskim pasku, bez zmian.

**Klasa 3 i tryb młodszego ucznia:**
- „🛠️ Zrób” pokazuje najwyżej jedną aktywność „z dorosłym”, z szacowanym czasem i ramką bezpieczeństwa zawsze rozwiniętą;
- w Quizie tylko etap „Co się stanie?” (obrazek, 2 opcje, 🔊);
- „👪 Dla rodzica” schowane za przyciskiem „Dla dorosłego”;
- Powtórka jako „⭐ Przypomnij sobie” (najwyżej 5 pytań);
- Sortuj w wersji obrazkowej z lektorem;
- bez pisania: krzyżyki zamiast tekstu.

---

## 3. Jak to się łączy z zatwierdzonym standardem „Świata”

| Element standardu | Gdzie trafia | Własna zakładka? |
|---|---|---|
| Widżet interaktywny | Krok lekcji; w pilotażu z wyzwaniami (też jako karta w „Zrób”) | Nie |
| Doświadczenie z kartą do druku | Karta `kind: 'doswiadczenie'` w „🛠️ Zrób”, przycisk 🖨️ | Nie (wspólna „Zrób”) |
| Zadanie projektowe z kryteriami i samooceną | Karta `kind: 'projekt'` w „🛠️ Zrób” | Nie (wspólna „Zrób”) |
| Pytania „przewiduj i wyjaśnij” | Rodzaj pytania w ✅ Quizie i w mini-pytaniach lekcji | Nie |
| Materiały | 🔗 Materiały (tylko dla dziecka); dokumenty źródłowe → 👪 Dla rodzica | Bez zmian |
| Różnice PL vs inne kraje + etykieta polskiej klasy | Ściąga; podstawa prawna i „Gdzie się tego uczą” → 👪 Dla rodzica | Nie |

Jedyna nowa zakładka standardu to „🛠️ Zrób”. Zastępuje dzisiejsze „Zadania otwarte”, więc pasek nie rośnie.

---

## 4. Gdzie sędziowie się różnili i najważniejsze ryzyka

**Rozbieżności:**
- **Dla rodzica:** dwóch sędziów chce „teraz”, trzeci „pilotaż”. Kompromis: od razu, ale tylko w „Świecie” i jako zwinięta ramka.
- **Grupy zakładek:** jeden sędzia chce „teraz”, dwóch „pilotaż”. Wszyscy zgadzają się, że teraz trzeba uporządkować kod zakładek i zrobić „Zrób”, a grupy dopiero przy więcej niż 7 zakładkach.
- **Ściąga z pigułką:** od „później (2)” do „pilotaż (4)”. Decyzja należy do Ciebie.
- **Zagadka, podpowiedzi, Z pamięci, Sortuj, Krok po kroku:** oceny od 2 do 4. Wspólny wniosek: tylko tanie wersje oparte na istniejących pytaniach.
- **Powtórka na dziś:** największa wartość, ale wszyscy dali „pilotaż”, a nie „teraz”, z powodu kosztu synchronizacji.

**Ryzyka:**
1. **Fakty i źródła.** Prawie wszystkie cytowania badań (Dunlosky, Roediger i Karpicke, POE, EEF, PhET…) i dokładne brzmienia zagranicznych dokumentów (Anglia „working scientifically”, NGSS, japońskie 解説) są oznaczone **DO SPRAWDZENIA**. Nie mogą trafić do aplikacji ani do `docs` przed weryfikacją w oryginale. Każdy „mit” musi mieć źródło. Ostrzeżenie UOKiK o połykaniu magnesów trzeba potwierdzić. Przed zdaniem „czego nie ma w polskiej szkole” (np. kontrola zmiennych) trzeba sprawdzić podstawę przyrody IV–VI.
2. **Bezpieczeństwo doświadczeń:**
   - bez ognia i gniazdka 230 V;
   - bez małych magnesów neodymowych i baterii guzikowych dla młodszych;
   - igła i nożyczki tylko z dorosłym;
   - pole `safety` obowiązkowe, pilnowane przez sprawdzarkę;
   - ostrzeżenia widoczne też dla dziecka;
   - materiały tylko o pewnym zachowaniu (bez monet i stali nierdzewnej).
3. **Jedna poprawna odpowiedź** w nowych formatach (drugi etap Przewiduj, koszyki). Sprawdzarki trzeba rozszerzyć w tym samym commicie co format, zanim powstanie treść.
4. **Coraz więcej danych w synchronizacji.** W pierwszej fali najwyżej jedno nowe pole (`review` dla Powtórki). Resztę przez istniejące `best`/`wrong`/`tasks` albo tylko na urządzeniu. Każda zmiana raportu oznacza, że musisz wdrożyć nową wersję skryptu `Kod.js`.
5. **Ścieżka egzaminacyjna.** `quiz()`, `topic()` i `openTasks()` są wspólne dla wszystkich ścieżek. Nowości w egzaminie domyślnie wyłączone, każda zmiana w osobnym commicie i z `node tools/przeglad.js egzamin8`.
6. **Prywatność.** Wolny tekst dziecka (Wytłumacz, tabele pomiarów) tylko na urządzeniu, bez nagrywania głosu. Mikrofonu i kamery telefonu na tym etapie nie używamy.
7. **Koszt treści i czas rodzica.** Realnie 2–3 nowe elementy na dział: 3–5 dobrych pytań Przewiduj zamiast 8 pośpiesznych. Jedna aktywność „z dorosłym” na dział, z podanym czasem.
8. **Za dużo czytania dla 7–9-latków.** Każdy nowy element musi mieć wersję z obrazkiem i lektorem albo być wyłączony w trybie młodszego ucznia.

---

## 5. Odradzane pomysły

- **Czat z AI w dziale:** łamie zasadę „żadnych faktów z pamięci”, wymaga serwera albo publicznego klucza API i wysyła pytania dziecka poza urządzenie.
- **Rankingi, sklepik z nagrodami, serie dni, odznaki za wszystko:** wymagają kont, karzą za chorobę i wyjazd, porównują rodzeństwo na różnych ścieżkach i dokładają pól do synchronizacji. Wystarczy porównanie dziecka z samym sobą na podstawie danych, które już są.
- **Osobne zakładki „Słowniczek”, „Ciekawostki”, „Gry”:** słowniczek dubluje fiszki, ciekawostki najłatwiej napisać z pamięci, a gry bez celu uczą gry zamiast tematu.
- **Mikrofon i kamera telefonu jako czujnik w widżecie:** prywatność dziecka, zgody przeglądarki i wątpliwe działanie po otwarciu pliku z dysku – zysk tego nie równoważy.
- **Pułapki myślenia jako osobna zakładka:** te same mity byłyby w trzech miejscach. Wystarczy jedno źródło (`myth` w pytaniach Przewiduj).
- **Rozgrzewka jako blokująca karta przed lekcją:** zniechęca, gdy dziecko chce od razu do lekcji, a w dużej części powtarza Powtórkę na dziś.
- **Dziennik badacza synchronizowany do arkusza:** dziecko może wpisać imiona albo adres, a doszłyby trzy nowe pola w chmurze przy niepewnej korzyści.

---

**Proponowana kolejność:**
1. Uporządkowanie kodu zakładek i „🛠️ Zrób” (osobny commit).
2. Przewiduj i wyjaśnij razem z rozszerzeniem sprawdzarek.
3. Karty doświadczenia i projektu w Magnesach i Czujnikach.
4. Ramka „👪 Dla rodzica”.
5. Pilotaż Powtórki na dziś w „Świecie”.

Decyzje dla Ciebie:
- połączenie Ściągi z „W pigułce”;
- przeniesienie `basis` w egzaminie;
- czy Powtórka ma się kiedyś pojawić w raporcie tygodniowym (wymaga wdrożenia nowej wersji `Kod.js`).